/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as OPTIONS from '../options.json';
import {DIS_SUPPORT_PAGES_REGEX} from './constant';
import {PareStr} from './PareStr';
import React from 'ext.gadget.React';
import {elementWrap} from './elementWrap';
import {getMessage} from './i18n';
import {initMwApi} from 'ext.gadget.Util';
import {isInBlacklist} from './isInBlacklist';
import {toastify} from 'ext.gadget.Toastify';

const easyArchive = () => {
	// common repo.
	const expose = (() => {
		const asyncPost = (param, callback) => {
			const api = initMwApi(`EasyAchive/${OPTIONS.version}`);
			void api.postWithToken('csrf', param).then(callback);
		};
		const getPage = (title, callback) => {
			const param = {
				action: 'query',
				prop: ['revisions'],
				rvprop: ['ids', 'flags', 'timestamp', 'user', 'userid', 'size', 'comment', 'tags', 'content'],
				format: 'json',
				formatversion: '2',
				titles: title,
			};
			asyncPost(param, callback);
		};
		const getPageSection = (title, section, callback) => {
			const param = {
				action: 'query',
				prop: ['revisions'],
				rvprop: ['content'],
				format: 'json',
				formatversion: '2',
				titles: title,
				rvsection: section,
			};
			asyncPost(param, callback);
		};
		const pickPageContent = (data) => {
			if (data.query && data.query.pages && data.query.pages[0] && data.query.pages[0].revisions[0]) {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-return
				return data.query.pages[0].revisions[0].content;
			}
			return false;
		};
		const tellPageExist = (data) => {
			if (typeof data !== 'object' || !data.query || !data.query.pages || data.query.pages[0].missing) {
				return false;
			}
			return true;
		};
		const edit = (title, section, text, summary, callback) => {
			const param = {
				action: 'edit',
				format: 'json',
				formatversion: '2',
				title,
				summary,
				text,
			};
			if (section) {
				param.section = section;
			}
			asyncPost(param, callback);
		};
		const editAppend = (page, added_content, summary, callback) => {
			getPage(page, (data) => {
				const original_content = tellPageExist(data) === false ? '' : pickPageContent(data);
				edit(page, null, String(original_content) + added_content, summary, callback);
			});
		};
		const archiveSection = (title, section, targetTitle, callback, summary) => {
			getPageSection(title, section, (data) => {
				editAppend(targetTitle, `\n\n${pickPageContent(data)}`, summary);
				edit(title, section.toString(), '', summary, callback);
			});
		};
		const deleteSection = (title, section, callback, summary) => {
			edit(title, section.toString(), '', summary, callback);
		};
		return {
			archive_section: archiveSection,
			delete_section: deleteSection,
		};
	})();
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
	let settings = new PareStr(settings_string);
	let my_user_talk = null;
	const never_enable_on_these_pages_regex = window.easy_archive.never_enable_on_these_pages_regex ?? [];
	const [settings_span] = document.querySelectorAll(OPTIONS.collectionPointSelector);
	const settings_in_page = new PareStr(settings_span?.innerHTML ?? '');
	if (settings_in_page.find('data-init') === '1') {
		settings_string = settings_span.innerHTML;
		settings = new PareStr(settings_string);
	}
	// identify if Easy Archive can be used on the page - compatibility
	const on_user_talk = mw.config.get('wgNamespaceNumber') === 3;
	my_user_talk =
		on_user_talk &&
		(() => {
			let page_name = mw.config.get('wgPageName').split(':');
			page_name[0] = '';
			page_name = page_name.join('');
			[page_name] = page_name.split('/');
			const user_name = mw.config.get('wgUserName');
			return (
				user_name.split('_').join('').split(' ').join('') === page_name.split('_').join('').split(' ').join('')
			);
		})();
	const has_template = settings_in_page.find('data-init') === '1';
	const others_user_talk = my_user_talk === false && on_user_talk === true;
	const on_article = mw.config.get('wgNamespaceNumber') === 0;
	const on_hist_version = mw.config.get('wgCurRevisionId') - mw.config.get('wgRevisionId') !== 0;
	const sanitize_html = (string) =>
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		string
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/'/g, '&apos;')
			.replace(/"/g, '&quot;');
	// multi language selector definition
	const message = (tag, ...para_list) => {
		try {
			let content = getMessage(tag);
			if (para_list && para_list.length > 0) {
				for (const [_i, element] of para_list.entries()) {
					content = content.replace(`$${_i + 1}`, element);
				}
			}
			// eslint-disable-next-line @typescript-eslint/no-unsafe-return
			return content;
		} catch {
			return '(!) undefined language content';
		}
	};
	const nominal_sections = ((count) => {
		const arr = Array.from({
			length: count,
		});
		for (let _i = 0; _i < count; _i++) {
			arr[_i] = false;
		}
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return arr;
	})(window.easy_archive.section_count);
	const actual_section = (nominal_section_number) => {
		let less = 0;
		for (let _i = 0; _i < nominal_section_number; _i++) {
			if (nominal_sections[_i] === true) {
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
						text: message(tag_ding, section_number.toString(), to),
						close: !ding_autohide,
						duration: ding_autohide ? 3000 : -1,
					},
					ding_type
				);
			},
			section_link: () => {
				const node = document.querySelector(`.easy-archive-section-id-span-order-${section_number}`);
				const pnode = node.parentNode;
				for (let _i = 1; _i < pnode.childNodes.length - 2; _i++) {
					pnode.childNodes[_i].style.display = 'none';
				}
				node.innerHTML = message(tag_section);
				node.style.display = 'inline';
				node.style.color = 'rgb(0 0 0/.5)';
			},
		};
		return actions;
	};
	const delete_section_core = (section_number, _nominal) => {
		const actual_section_number = actual_section(section_number);
		report_doneness_ui(_nominal, 'delete', '', 'ongoing').ding();
		expose.delete_section(
			mw.config.get('wgPageName'),
			actual_section_number,
			() => {
				report_doneness_ui(_nominal, 'delete', '', 'done').ding();
				report_doneness_ui(_nominal, 'delete', '', 'done').section_link();
				nominal_sections[section_number] = true;
			},
			message('delete_summary')
		);
	};
	const delete_section = (section_number, _nominal) => {
		report_doneness_ui(_nominal, 'delete', '', 'ongoing').section_link();
		delete_section_core(section_number, _nominal);
	};
	const archive_section_core = (section_number, _nominal) => {
		const actual_section_number = actual_section(section_number);
		const to = settings.find('arc-loc');
		report_doneness_ui(_nominal, 'archive', to, 'ongoing').ding();
		expose.archive_section(
			mw.config.get('wgPageName'),
			actual_section_number,
			to,
			() => {
				report_doneness_ui(_nominal, 'archive', to, 'done').ding();
				report_doneness_ui(_nominal, 'archive', to, 'done').section_link();
				nominal_sections[section_number] = true;
			},
			message('archive_summary')
		);
	};
	const archive_section = (section_number, _nominal) => {
		const to = settings.find('arc-loc');
		report_doneness_ui(_nominal, 'archive', to, 'ongoing').section_link();
		archive_section_core(section_number, _nominal);
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
				[sanitize_html(settings.find('arc-loc'))],
			],
			problem_with_archive_location_same_page: [
				'problem_with_archive_location_same_page',
				'warning',
				'long',
				false,
				[sanitize_html(settings.find('arc-loc'))],
			],
			page_not_supported_elaborate: ['page_not_supported_elaborate'],
		};
		const notice_set = notice_tag_dictionary[notice_tag_name] || false;
		if (notice_set !== false) {
			const [ntag, ntype, nttl, npersist, nsubst] = notice_set;
			const toastifyInstance = toastify(
				{
					node: <span>{message(ntag, ...nsubst)}</span>,
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
	let i = 0;
	let j = 0;
	let ele;
	let nominal;
	let actual;
	const pipe_html = <span class="mw-editsection-divider"> &#124; </span>;
	const section_delete_interface_inhibit = settings.find('sec-del') === '0' || settings.find('data-init') === '0';
	const section_archive_interface_inhibit = settings.find('sec-arc') === '0' || settings.find('data-init') === '0';
	let section_delete_interface_html;
	let section_archive_interface_html;
	const section_id_span_html = (order_no) => (
		<span
			class={['easy-archive-section-id-span', `easy-archive-section-id-span-order-${order_no}`]}
			style={{display: 'none'}}
		>
			section
		</span>
	);
	const [footer_info_ele] = document.querySelectorAll(OPTIONS.mountPointSelector);
	if (!footer_info_ele) {
		return;
	}
	if (on_article || on_hist_version || isInBlacklist(never_enable_on_these_pages_regex)) {
		// insert no interface on an article page or a history version.
		// insert no interface if the page name is blacklisted.
	} else if (isInBlacklist(DIS_SUPPORT_PAGES_REGEX)) {
		// insert not supported notice if the page name indicates that it is not supported.
		footer_info_ele.prepend(
			elementWrap(
				'easy_archive_enable_notice',
				<a
					style={{color: 'inherit'}}
					onClick={(event) => {
						event.preventDefault();
						elaborate_notice('page_not_supported_elaborate');
					}}
				>
					{message('page_not_supported')}
				</a>
			)
		);
	} else if (mw.config.get('wgPageName') === settings.find('arc-loc')) {
		elaborate_notice('problem_with_archive_location_same_page');
	} else if (has_template && !others_user_talk) {
		// any page that has template that's not others' talk page. function normally.
		// !! the archive location in main space and needs attention !!
		if (/.+:.+/.test(settings.find('arc-loc')) !== true) {
			elaborate_notice('problem_with_archive_location_main_space');
		}
		const normal_function_inject_interface = () => {
			const editSectionCollection = document.querySelectorAll('.mw-editsection');
			for (i = 0; i < editSectionCollection.length; i++) {
				ele = editSectionCollection[i];
				const ve = /[&?]veaction=edit/.test(ele.childNodes[1].href);
				const child_node_number = ve ? 3 : 1;
				if (
					ele.parentNode.tagName.toLowerCase() === 'h2' &&
					ele.parentNode.id !== 'firstHeading' &&
					decodeURIComponent(ele.childNodes[child_node_number].href.split(/[&?]title=/)[1].split('&')[0]) ===
						mw.config.get('wgPageName')
				) {
					actual = Number.parseInt(
						ele.childNodes[child_node_number].href.split(/[&?]section=/)[1].split('&')[0],
						10
					);
					nominal = i - j + 1;
					section_delete_interface_html = section_delete_interface_inhibit ? (
						<></>
					) : (
						<>
							{pipe_html}
							<a
								// eslint-disable-next-line no-loop-func
								onClick={(event) => {
									event.preventDefault();
									delete_section(actual, nominal);
								}}
							>
								{message('delete')}
							</a>
						</>
					);
					section_archive_interface_html = section_archive_interface_inhibit ? (
						<></>
					) : (
						<>
							{pipe_html}
							<a
								// eslint-disable-next-line no-loop-func
								onClick={(event) => {
									event.preventDefault();
									archive_section(actual, nominal);
								}}
							>
								{message('archive')}
							</a>
						</>
					);
					ele.childNodes[child_node_number].after(
						<>
							{section_delete_interface_html}
							{section_archive_interface_html}
							{section_id_span_html(nominal.toString())}
						</>
					);
				} else {
					j++;
				}
			}
			window.easy_archive.section_count = i - j + 1;
			footer_info_ele.prepend(
				elementWrap(
					'easy_archive_supports_notice',
					<>
						{message('supports')}
						{message('left_par_split')}
						{message('archive_path_colon_split')}
						<a href={`/wiki/${sanitize_html(settings.find('arc-loc'))}`}>
							{sanitize_html(settings.find('arc-loc'))}
						</a>
						{message('right_par')}
						{message('period')}
					</>
				)
			);
		};
		normal_function_inject_interface();
	} else if (others_user_talk === true) {
		// others user talk.
		footer_info_ele.prepend(
			elementWrap(
				'easy_archive_enable_notice',
				<a
					style={{color: 'inherit'}}
					onClick={(event) => {
						event.preventDefault();
						elaborate_notice('others_talk_elaborate');
					}}
				>
					{message('others_page')}
				</a>
			)
		);
	} else if (my_user_talk === false) {
		// a generic page that did not enable easy archive.
		footer_info_ele.prepend(
			elementWrap(
				'easy_archive_enable_notice',
				<a
					style={{color: 'inherit'}}
					onClick={(event) => {
						event.preventDefault();
						elaborate_notice('enable_on_generic_page');
					}}
				>
					{message('to_enable')}
				</a>
			)
		);
	} else {
		footer_info_ele.prepend(
			elementWrap(
				'easy_archive_enable_notice',
				<a
					style={{color: 'inherit'}}
					onClick={(event) => {
						event.preventDefault();
						elaborate_notice('please_enable_elaborate');
					}}
				>
					{message('please_enable')}
				</a>
			)
		);
	}
};

export {easyArchive};
