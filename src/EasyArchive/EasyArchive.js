// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {easy_archive_lang} from './modules/i18n';

(function easyArchive() {
	if (mw.config.get('wgNamespaceNumber') < 0 || mw.config.get('wgPageName') === 'Qiuwen:首页') {
		return;
	}
	window.easy_archive ??= {};
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
				[, , , , this.left] = pare_string;
				[, , , , , this.delim] = pare_string;
				[, , , , , , this.right] = pare_string;
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
	// common repo.
	const expose = (() => {
		const global = {
			api: `${mw.config.get('wgScriptPath')}/api.php`,
			page_name: mw.config.get('wgPageName'),
			user_name: mw.config.get('wgUserName'),
			user_page: `User:${mw.config.get('wgUserName')}`,
			user_talk: `User_talk:${mw.config.get('wgUserName')}`,
			csrfToken: undefined,
		};
		const asyncPost = (url, body, callback) => {
			const ajax = new XMLHttpRequest();
			ajax.addEventListener('readystatechange', callback);
			ajax.open('POST', url, true);
			ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			ajax.send(body);
		};
		const loadTokenSilently = () => {
			const callback = function () {
				if (this.readyState === 4) {
					global.csrfToken = JSON.parse(this.responseText).query.tokens.csrftoken;
				}
			};
			const queryParam = 'action=query&meta=tokens&format=json';
			asyncPost(global.api, queryParam, callback);
			setTimeout(loadTokenSilently, 18e5);
		};
		loadTokenSilently();
		const takeToken = () => {
			if (global.csrfToken) {
				return global.csrfToken;
			}
			loadTokenSilently();
			return false;
		};
		const getPage = (page_name, callback) => {
			const z =
				'action=query&prop=revisions&rvprop=ids|flags|timestamp|user|userid|size|comment|tags|content&format=json&titles=';
			asyncPost(global.api, z + encodeURIComponent(page_name), callback);
		};
		const getPageSection = (page_name, section, callback) => {
			const queryParam = 'action=query&prop=revisions&rvprop=content&format=json&titles=';
			asyncPost(
				global.api,
				`${queryParam + encodeURIComponent(page_name)}&rvsection=${encodeURIComponent(section)}`,
				callback
			);
		};
		const pickPageContent = (response_text) => {
			if (typeof response_text === 'string') {
				const data = JSON.parse(response_text);
				if (typeof data === 'object') {
					for (const page in data.query.pages) {
						if (!Object.hasOwn(data.query.pages, page)) {
							continue;
						}
						const c = data.query.pages[page];
						return c.revisions[0]['*'];
					}
				} else {
					return false;
				}
			} else {
				// from now on pick functions will only work with string inputs. DO NOT parse pages before passing them into pick functions.
				return false;
			}
		};
		const tellPageExist = (response_text) => {
			let data;
			try {
				data = JSON.parse(response_text);
			} catch {
				return false;
			}
			if (
				typeof data !== 'object' ||
				!('query' in data) ||
				!('pages' in data.query) ||
				(-1) in data.query.pages
			) {
				return false;
			}
			return true;
		};
		const edit = (page_name, text, summary, token, callback) => {
			const _callback =
				typeof callback === 'function'
					? function () {
							if (this.readyState === 4) {
								callback();
							}
					  }
					: () => {}; // from now on, f is definable.
			if (!token) {
				token = takeToken();
			}
			const query_param = 'action=edit&format=json&title=';
			asyncPost(
				global.api,
				`${query_param + encodeURIComponent(page_name)}&text=${encodeURIComponent(
					text
				)}&summary=${encodeURIComponent(summary)}&token=${encodeURIComponent(token)}`,
				_callback
			);
		};
		const editPro = (page_name, section, text, summary, token, callback) => {
			const _callback =
				typeof callback === 'function'
					? function () {
							if (this.readyState === 4) {
								callback();
							}
					  }
					: () => {};
			const query_param = 'action=edit&format=json&title=';
			asyncPost(
				global.api,
				`${query_param + encodeURIComponent(page_name)}&section=${encodeURIComponent(
					section
				)}&text=${encodeURIComponent(text)}&summary=${encodeURIComponent(summary)}&token=${encodeURIComponent(
					token
				)}`,
				_callback
			);
		};
		const editAppend = (a, b, c, d, fn) => {
			const f = function () {
				if (this.readyState === 4) {
					const original_content =
						tellPageExist(this.responseText) === false ? '' : pickPageContent(this.responseText);
					edit(a, String(original_content) + b, c, d, fn);
				}
			};
			getPage(a, f);
		};
		const archive_section = (page_name, section, to, callback, summary) => {
			getPageSection(page_name, section, function () {
				let doneness = 0;
				const done = () => {
					doneness++;
					if (doneness === 2) {
						callback();
					}
				};
				if (this.readyState === 4) {
					editAppend(to, `\n\n${pickPageContent(this.responseText)}`, summary, takeToken(), done);
					editPro(page_name, section.toString(), '', summary, takeToken(), done);
				}
			});
		};
		const delete_section = (page_name, section, callback, summary) => {
			editPro(page_name, section.toString(), '', summary, takeToken(), callback);
		};
		return {
			archive_section,
			delete_section,
		};
	})();
	// default settings:
	window.easy_archive.settings_string =
		'#set%|?									\n' +
		'display section delete link	%sec-del|1?	\n' +
		'display section archive line	%sec-arc|1?	\n' +
		'display control bar at top	%top-bar|0?	\n' +
		'archive location				%arc-loc|?	\n' +
		'subsection effectiveness		%sub-sec|2?	\n' +
		'confirm action				%confirm|0?	\n' +
		'is this data initialized		%data-init|0? \n';
	window.easy_archive.settings = new Pare_str(window.easy_archive.settings_string);
	window.easy_archive.my_user_talk = null;
	window.easy_archive.never_enable_on_these_pages_regex ??= [];
	window.easy_archive.dis_support_these_pages_regex = [
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
	const settings = settings_span ? new Pare_str(settings_span.innerHTML) : new Pare_str('');
	if (settings.find('data-init') === '1') {
		window.easy_archive.settings_string = settings_span.innerHTML;
		window.easy_archive.settings = new Pare_str(window.easy_archive.settings_string);
	}
	// identify if Easy Archive can be used on the page - compatibility
	window.easy_archive.on_user_talk = mw.config.get('wgNamespaceNumber') === 3;
	window.easy_archive.my_user_talk =
		window.easy_archive.on_user_talk &&
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
	window.easy_archive.has_template = settings.find('data-init') === '1';
	window.easy_archive.others_user_talk =
		window.easy_archive.my_user_talk === false && window.easy_archive.on_user_talk === true;
	window.easy_archive.on_article = mw.config.get('wgNamespaceNumber') === 0;
	window.easy_archive.on_hist_version = mw.config.get('wgCurRevisionId') - mw.config.get('wgRevisionId') !== 0;
	easy_archive_lang();
	const looker_upper = (object, namelist) => {
		for (const element of namelist) {
			if (element in object) {
				object = object[element];
			} else {
				return null;
			}
		}
		return object;
	};
	const arc_sum = looker_upper(window, ['easy_archive.user_custom_archive_summary']);
	const del_sum = looker_upper(window, ['easy_archive.user_custom_delete_summary']);
	const sanitize_html = (string) => {
		return string
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/'/g, '&apos;')
			.replace(/"/g, '&quot;');
	};
	// multi language selector definition
	const message = (tag, para_list) => {
		try {
			let content = window.easy_archive.lang[tag];
			for (let has_unfulfilled_para = true, _i = 0; has_unfulfilled_para; _i++) {
				const search = `$${_i + 1}`;
				if (content.includes(search)) {
					content = para_list[_i]
						? content.split(search).join(para_list[_i])
						: content.split(search).join('');
				} else {
					has_unfulfilled_para = false;
				}
			}
			return content;
		} catch {
			return '(!) undefined language content';
		}
	};
	const nominal_sections = ((count) => {
		const arr = Array.from({length: count});
		for (let _i = 0; _i < count; _i++) {
			arr[_i] = false;
		}
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
				window.DingExposedInterface(
					message(tag_ding, [section_number.toString(), to]),
					ding_type,
					ding_autohide ? 3000 : 'long'
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
			del_sum || message('delete_summary')
		);
	};
	window.easy_archive.delete_section = (section_number, _nominal) => {
		report_doneness_ui(_nominal, 'delete', '', 'ongoing').section_link();
		delete_section_core(section_number, _nominal);
	};
	const archive_section_core = (section_number, _nominal) => {
		const actual_section_number = actual_section(section_number);
		const to = window.easy_archive.settings.find('arc-loc');
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
			arc_sum || message('archive_summary')
		);
	};
	window.easy_archive.archive_section = (section_number, _nominal) => {
		const to = window.easy_archive.settings.find('arc-loc');
		report_doneness_ui(_nominal, 'archive', to, 'ongoing').section_link();
		archive_section_core(section_number, _nominal);
	};
	window.easy_archive.elaborate_notice = (notice_tag_name) => {
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
				[sanitize_html(window.easy_archive.settings.find('arc-loc'))],
			],
			problem_with_archive_location_same_page: [
				'problem_with_archive_location_same_page',
				'warning',
				'long',
				false,
				[sanitize_html(window.easy_archive.settings.find('arc-loc'))],
			],
			page_not_supported_elaborate: ['page_not_supported_elaborate'],
		};
		const notice_set = notice_tag_dictionary[notice_tag_name] || false;
		if (notice_set !== false) {
			const [ntag, ntype, nsubst] = notice_set;
			window.DingExposedInterface(message(ntag, nsubst), ntype, 'long');
		}
	};
	// real deal here
	// interface injection - prepare
	let i = 0;
	let j = 0;
	let ele;
	let nominal;
	let actual;
	const pipe_html = '<span class="mw-editsection-divider"> | </span>';
	const section_delete_interface_inhibit =
		window.easy_archive.settings.find('sec-del') === '0' || window.easy_archive.settings.find('data-init') === '0';
	const section_archive_interface_inhibit =
		window.easy_archive.settings.find('sec-arc') === '0' || window.easy_archive.settings.find('data-init') === '0';
	let section_delete_interface_html;
	let section_archive_interface_html;
	const section_id_span_html =
		'<span class="easy-archive-section-id-span easy-archive-section-id-span-order-@@" style="display:none">section</span>';
	let footer_info_ele;
	let position_of_insertion;
	if (document.querySelector('#footer-info') || document.querySelectorAll('.page-info')) {
		footer_info_ele = document.querySelector('#footer-info') || document.querySelectorAll('.page-info')[0];
		position_of_insertion = 'afterbegin';
	} else {
		footer_info_ele = {
			insertAdjacentHTML: () => {},
		};
		position_of_insertion = '';
	}
	// ... interface injection - logic
	const is_in_blacklist = (blacklist) => {
		for (const element of blacklist) {
			if (element.test(mw.config.get('wgPageName'))) {
				return true;
			}
		}
		return false;
	};
	if (window.easy_archive.on_article || window.easy_archive.on_hist_version) {
		// insert no interface on an article page or a history version.
	} else if (is_in_blacklist(window.easy_archive.never_enable_on_these_pages_regex)) {
		// insert no interface if the page name is blacklisted.
	} else if (is_in_blacklist(window.easy_archive.dis_support_these_pages_regex)) {
		// insert not supported notice if the page name indicates that it is not supported.
		footer_info_ele.insertAdjacentHTML(
			position_of_insertion,
			`<div id="easy_archive_enable_notice"><a style="color:inherit" href="javascript:window.easy_archive.elaborate_notice('page_not_supported_elaborate')">${message(
				'page_not_supported'
			)}</a></div>`
		);
	} else if (mw.config.get('wgPageName') === window.easy_archive.settings.find('arc-loc')) {
		window.easy_archive.elaborate_notice('problem_with_archive_location_same_page');
	} else if (window.easy_archive.has_template && !window.easy_archive.others_user_talk) {
		// any page that has template that's not others' talk page. function normally.
		// !! the archive location in main space and needs attention !!
		if (/.+:.+/.test(window.easy_archive.settings.find('arc-loc')) !== true) {
			window.easy_archive.elaborate_notice('problem_with_archive_location_main_space');
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
					section_delete_interface_html = section_delete_interface_inhibit
						? ''
						: `${pipe_html}<a href="javascript:window.easy_archive.delete_section(${actual}, ${nominal})">${message(
								'delete'
						  )}</a>`;
					section_archive_interface_html = section_archive_interface_inhibit
						? ''
						: `${pipe_html}<a href="javascript:window.easy_archive.archive_section(${actual}, ${nominal})">${message(
								'archive'
						  )}</a>`;
					ele.childNodes[child_node_number].insertAdjacentHTML(
						'afterend',
						section_delete_interface_html +
							section_archive_interface_html +
							section_id_span_html.replace('@@', nominal.toString())
					);
				} else {
					j++;
				}
			}
			window.easy_archive.section_count = i - j + 1;
			footer_info_ele.insertAdjacentHTML(
				position_of_insertion,
				`<div id="easy_archive_supports_notice">${message('supports')}${message('left_par_split')}${message(
					'archive_path_colon_split'
				)}<a href="/wiki/${sanitize_html(window.easy_archive.settings.find('arc-loc'))}">${sanitize_html(
					window.easy_archive.settings.find('arc-loc')
				)}</a>${message('right_par')}${message('period')}</div>`
			);
		};
		normal_function_inject_interface();
	} else if (window.easy_archive.others_user_talk === true) {
		// others user talk.
		footer_info_ele.insertAdjacentHTML(
			position_of_insertion,
			`<div id="easy_archive_enable_notice"><a style="color:inherit" href='javascript:window.easy_archive.elaborate_notice('others_talk_elaborate')'>${message(
				'others_page'
			)}</a></div>`
		);
	} else if (window.easy_archive.my_user_talk === false) {
		// a generic page that did not enable easy archive.
		footer_info_ele.insertAdjacentHTML(
			position_of_insertion,
			`<div id="easy_archive_enable_notice"><a style="color:inherit" href='javascript:window.easy_archive.elaborate_notice('enable_on_generic_page')'>${message(
				'to_enable'
			)}</a></div>`
		);
	} else {
		// then assert: (window.easy_archive.my_user_talk === true), (window.easy_archive.has_template === false).
		// my user talk -- installed easy archive but lacking template.
		footer_info_ele.insertAdjacentHTML(
			position_of_insertion,
			`<div id="easy_archive_enable_notice"><a style="color:inherit" href='javascript:window.easy_archive.elaborate_notice('please_enable_elaborate')'>${message(
				'please_enable'
			)}</a></div>`
		);
	}
	if (mw.config.get('skin') === 'citizen') {
		const $body = $('body');
		$body
			.find('#easy_archive_enable_notice, #easy_archive_supports_notice, #easy_archive_stop_notice')
			.replaceWith(function () {
				const $this = $(this);
				return $('<section>').addClass('page-info__item').attr('id', $this.attr('id')).html($this.html());
			});
	}
	if (
		['vector', 'vector-2022', 'gongbi', 'write'].includes(mw.config.get('skin')) ||
		document.querySelector('ul#footer-info')
	) {
		const $body = $('body');
		$body
			.find('#easy_archive_enable_notice, #easy_archive_supports_notice, #easy_archive_stop_notice')
			.replaceWith(function () {
				const $this = $(this);
				return $('<li>').attr('id', $this.attr('id')).html($this.html());
			});
	}
})();
