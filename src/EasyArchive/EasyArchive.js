// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import './EasyArchive.less';

import * as OPTIONS from './options.json';
import {archiveSectionCallback, deleteSectionCallback} from './modules/expose';
import {
	elementWrap,
	emptyElement,
	linkWrap,
	onClickWrap,
	pipeElement,
	sectionIdSpanElement,
	span,
} from './modules/react.tsx';
import {message} from './modules/i18n';
import {sanitize} from './modules/sanitize.ts';
import {toastify} from 'ext.gadget.Toastify';

(function easyArchiveWrap() {
	const {wgNamespaceNumber, wgPageName, wgUserName, wgCurRevisionId, wgRevisionId} = mw.config.get();

	if (wgNamespaceNumber < 0 || wgPageName === 'Qiuwen:首页') {
		return;
	}

	// minified code dependency functions
	class Pare_str {
		constructor(pare_string, config) {
			this.str = pare_string;
			this.left = '(';
			this.delim = ':';
			this.right = ')';
			if (typeof config !== 'string') {
				config = String(config);
			}
			if (
				pare_string.length > 6 &&
				/[#%@][Ss][Ee][Tt]/.test(pare_string.slice(0, 4)) &&
				!config.includes('ignore-set')
			) {
				[, , , , this.left, this.delim, this.right] = pare_string;
				if (this.left === this.right || this.left === this.delim || this.right === this.delim) {
					throw new SyntaxError("Pound set statement has repetitive characters. E.g. '#set|:|' is illegal.");
				}
			}
		}
		find(lookup_key) {
			lookup_key = this.left + lookup_key + this.delim;
			if (!this.str.includes(lookup_key)) {
				return null;
			}
			return this.str.split(lookup_key)[1].split(this.right)[0];
		}
	}

	// default settings:
	let settings_string =
		'#set%|?									\n' +
		'display section delete link	%sec-del|1?	\n' +
		'display section archive line	%sec-arc|1?	\n' +
		'display control bar at top	%top-bar|0?	\n' +
		'archive location				%arc-loc|?	\n' +
		'subsection effectiveness		%sub-sec|2?	\n' +
		'confirm action				%confirm|0?	\n' +
		'is this data initialized		%data-init|0? \n';
	let settings = new Pare_str(settings_string);
	const never_enable_on_these_pages_regex = [];
	const dis_support_these_pages_regex = [
		/^File:.*$/,
		/^MediaWiki:.*$/,
		/^Module:.*$/,
		/^Category:.*$/,
		/^Template:.*$/,
		/^Special:.*$/,
		/^User:.*\/?.*\.js$/,
		/^User:.*\/?.*\.css$/,
		/^User:.*\/?.*\.json$/,
	];
	const settings_span_collection = document.querySelectorAll('.easy_archive_data_point_collection');
	const [settings_span] = settings_span_collection;
	const page_settings = settings_span ? new Pare_str(settings_span.innerHTML) : new Pare_str('');
	if (page_settings.find('data-init') === '1') {
		settings_string = settings_span.innerHTML;
		settings = new Pare_str(settings_string);
	}
	// identify if Easy Archive can be used on the page - compatibility
	const on_user_talk = wgNamespaceNumber === 3;
	const my_user_talk =
		on_user_talk &&
		(() => {
			let page_name = wgPageName.split(':');
			page_name[0] = '';
			page_name = page_name.join('');
			[page_name] = page_name.split('/');
			const user_name = wgUserName;
			return (
				user_name.split('_').join('').split(' ').join('') === page_name.split('_').join('').split(' ').join('')
			);
		})();
	const has_template = page_settings.find('data-init') === '1';
	const others_user_talk = my_user_talk === false && on_user_talk === true;
	const on_article = wgNamespaceNumber === 0;
	const on_hist_version = wgCurRevisionId - wgRevisionId !== 0;
	let section_count;
	const arc_sum = message('archive_summary');
	const del_sum = message('delete_summary');
	const nominal_sections = ((count) => {
		const arr = Array.from({
			length: count,
		});
		for (let i = 0; i < count; i++) {
			arr[i] = false;
		}
		return arr;
	})(section_count);
	const actual_section = (nominal_section_number) => {
		let less = 0;
		for (let i = 0; i < nominal_section_number; i++) {
			if (nominal_sections[i] === true) {
				less++;
			}
		}
		return nominal_section_number - less;
	};
	// ... interface done
	// archiving logic injection
	const report_doneness_ui = (section_number, doneness_type, to, ongoing_or_done) => {
		let tag_ding;
		let tag_section;
		let ding_type;
		let ding_autohide;
		if (ongoing_or_done === 'ongoing') {
			ding_type = 'info';
			ding_autohide = true;
			if (doneness_type === 'delete') {
				tag_ding = 'deleting_section_i';
				tag_section = 'being_deleted';
			} else if (doneness_type === 'archive') {
				tag_ding = 'loading_section_i';
				tag_section = 'being_archived';
			}
		} else if (ongoing_or_done === 'done') {
			ding_type = 'success';
			ding_autohide = false;
			if (doneness_type === 'delete') {
				tag_ding = 'done_deleting_section_i';
				tag_section = 'already_deleted';
			} else if (doneness_type === 'archive') {
				tag_ding = 'done_section_i';
				tag_section = 'already_archived';
			}
		}
		const actions = {
			ding: () => {
				toastify(
					{
						text: message(tag_ding, [section_number.toString(), to]),
						close: !ding_autohide,
						duration: ding_autohide ? 3000 : -1,
					},
					ding_type
				);
			},
			section_link: () => {
				const nodes = document.querySelectorAll(`.easy-archive-section-id-span-order-${section_number}`);
				for (const node of nodes) {
					const {parentNode} = node;
					for (const childNode of parentNode.querySelectorAll('.easy-archive-link')) {
						childNode.style.display = 'none';
					}
					node.innerHTML = message(tag_section);
					node.style.display = 'inline';
					node.style.color = 'rgb(0 0 0/.5)';
				}
			},
		};
		return actions;
	};
	const deleteSectionCore = (section_number, _nominal) => {
		const actual_section_number = actual_section(section_number);
		report_doneness_ui(_nominal, 'delete', '', 'ongoing').ding();
		deleteSectionCallback(
			wgPageName,
			actual_section_number,
			() => {
				report_doneness_ui(_nominal, 'delete', '', 'done').ding();
				report_doneness_ui(_nominal, 'delete', '', 'done').section_link();
				nominal_sections[section_number] = true;
			},
			del_sum
		);
	};
	const deleteSection = (section_number, _nominal) => {
		report_doneness_ui(_nominal, 'delete', '', 'ongoing').section_link();
		deleteSectionCore(section_number, _nominal);
	};
	const archiveSectionCore = (section_number, _nominal) => {
		const actual_section_number = actual_section(section_number);
		const to = settings.find('arc-loc');
		report_doneness_ui(_nominal, 'archive', to, 'ongoing').ding();
		archiveSectionCallback(
			wgPageName,
			actual_section_number,
			to,
			() => {
				report_doneness_ui(_nominal, 'archive', to, 'done').ding();
				report_doneness_ui(_nominal, 'archive', to, 'done').section_link();
				nominal_sections[section_number] = true;
			},
			arc_sum
		);
	};
	const archiveSection = (section_number, _nominal) => {
		const to = settings.find('arc-loc');
		report_doneness_ui(_nominal, 'archive', to, 'ongoing').section_link();
		archiveSectionCore(section_number, _nominal);
	};
	const elaborate_notice = (notice_tag_name) => {
		// acronym scheme: refer to qwerty keyboard layout. (p=9)
		const notice_tag_dictionary = {
			please_enable_elaborate: ['please_enable_elaborate'],
			others_talk_elaborate: ['others_talk_elaborate'],
			enable_on_generic_page: ['enable_on_generic_page'],
			problem_with_archive_location_main_space: [
				'problem_with_archive_location_main_space',
				'warning',
				'long',
				false,
				[sanitize(settings.find('arc-loc'))],
			],
			problem_with_archive_location_same_page: [
				'problem_with_archive_location_same_page',
				'warning',
				'long',
				false,
				[sanitize(settings.find('arc-loc'))],
			],
			page_not_supported_elaborate: ['page_not_supported_elaborate'],
		};
		const notice_set = notice_tag_dictionary[notice_tag_name] || false;
		if (notice_set !== false) {
			const [ntag, ntype, nttl, npersist, nsubst] = notice_set;
			const toastifyInstance = toastify(
				{
					node: span(message(ntag, nsubst)),
					close: nttl === 'long',
					duration: nttl === 'long' ? -1 : nttl,
					onClick: () => {
						if (npersist) {
							return;
						}
						toastifyInstance.hideToast();
					},
				},
				ntype
			);
		}
	};
	// real deal here
	// interface injection - prepare
	const section_delete_interface_inhibit = settings.find('sec-del') === '0' || settings.find('data-init') === '0';
	const section_archive_interface_inhibit = settings.find('sec-arc') === '0' || settings.find('data-init') === '0';
	const section_delete_interface = emptyElement();
	const section_archive_interface = emptyElement();
	let footer_info_ele;
	if (document.querySelectorAll(OPTIONS.mountPointSelector).length) {
		[footer_info_ele] = document.querySelectorAll(OPTIONS.mountPointSelector);
	} else {
		footer_info_ele = emptyElement();
	}
	// ... interface injection - logic
	const is_in_blacklist = (blacklist) => {
		for (const element of blacklist) {
			if (element.test(wgPageName)) {
				return true;
			}
		}
		return false;
	};
	if (on_article || on_hist_version) {
		return; // insert no interface on an article page or a history version.
	}
	if (is_in_blacklist(never_enable_on_these_pages_regex)) {
		return; // insert no interface if the page name is blacklisted.
	}
	if (is_in_blacklist(dis_support_these_pages_regex)) {
		// insert not supported notice if the page name indicates that it is not supported.
		footer_info_ele.prepend(
			elementWrap(
				'easy_archive_enable_notice',
				onClickWrap(message('page_not_supported'), (event) => {
					event.preventDefault();
					elaborate_notice('page_not_supported_elaborate');
				})
			)
		);
	} else if (wgPageName === settings.find('arc-loc')) {
		elaborate_notice('problem_with_archive_location_same_page');
	} else if (has_template && !others_user_talk) {
		// any page that has template that's not others' talk page. function normally.
		// !! the archive location in main space and needs attention !!
		if (/.+:.+/.test(settings.find('arc-loc')) !== true) {
			elaborate_notice('problem_with_archive_location_main_space');
		}
		const normal_function_inject_interface = () => {
			let i = 0;
			let j = 0;
			const editSectionCollection = document.querySelectorAll('.mw-editsection');
			for (i = 0; i < editSectionCollection.length; i++) {
				const ele = editSectionCollection[i];
				const ve = /[&?]veaction=edit/.test(ele.childNodes[1].href);
				const child_node_number = ve ? 3 : 1;
				if (
					ele.parentNode.tagName.toLowerCase() === 'h2' &&
					ele.parentNode.id !== 'firstHeading' &&
					decodeURIComponent(ele.childNodes[child_node_number].href.split(/[&?]title=/)[1].split('&')[0]) ===
						wgPageName
				) {
					const actual = Number.parseInt(
						ele.childNodes[child_node_number].href.split(/[&?]section=/)[1].split('&')[0],
						10
					);
					const nominal = i - j + 1;
					if (!section_delete_interface_inhibit) {
						section_delete_interface.append(
							pipeElement(),
							onClickWrap(
								message('delete'),
								(event) => {
									event.preventDefault();
									const {target} = event;
									const dataActual = target.dataset.actual;
									const dataNominal = target.dataset.nominal;
									deleteSection(dataActual, dataNominal);
								},
								actual,
								nominal
							)
						);
					}
					if (!section_archive_interface_inhibit) {
						section_archive_interface.append(
							pipeElement(),
							onClickWrap(
								message('archive'),
								(event) => {
									event.preventDefault();
									const {target} = event;
									const dataActual = target.dataset.actual;
									const dataNominal = target.dataset.nominal;
									archiveSection(dataActual, dataNominal);
								},
								actual,
								nominal
							)
						);
					}
					ele.childNodes[child_node_number].after(
						section_delete_interface,
						section_archive_interface,
						sectionIdSpanElement(nominal.toString())
					);
				} else {
					j++;
				}
			}
			section_count = i - j + 1;
			const easy_archive_supports_notice = emptyElement();
			easy_archive_supports_notice.append(
				message('supports'),
				message('left_par_split'),
				message('archive_path_colon_split'),
				linkWrap(sanitize(settings.find('arc-loc')), `/wiki/${sanitize(settings.find('arc-loc'))}`),
				message('right_par'),
				message('period')
			);
			footer_info_ele.prepend(elementWrap('easy_archive_supports_notice', easy_archive_supports_notice));
		};
		normal_function_inject_interface();
	} else if (others_user_talk === true) {
		// others user talk.
		footer_info_ele.prepend(
			elementWrap('easy_archive_enable_notice'),
			onClickWrap(message('others_page'), (event) => {
				event.preventDefault();
				elaborate_notice('others_talk_elaborate');
			})
		);
	} else if (my_user_talk === false) {
		// a generic page that did not enable easy archive.
		footer_info_ele.prepend(
			elementWrap(
				'easy_archive_enable_notice',
				onClickWrap(message('to_enable'), (event) => {
					event.preventDefault();
					elaborate_notice('enable_on_generic_page');
				})
			)
		);
	} else {
		// then assert: (my_user_talk === true), (has_template === false).
		// my user talk -- installed easy archive but lacking template.
		footer_info_ele.prepend(
			elementWrap(
				'easy_archive_enable_notice',
				onClickWrap(message('please_enable'), (event) => {
					event.preventDefault();
					elaborate_notice('please_enable_elaborate');
				})
			)
		);
	}
})();
