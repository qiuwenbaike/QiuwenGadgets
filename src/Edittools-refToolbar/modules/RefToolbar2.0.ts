import {ajaxLoader, citeIcon} from './util/images';
import {api} from './util/api';
import {getMessage} from './util/getMessage';
import {refToolbarConfig} from './RefToolbarConfig';

// TODO: make autodate an option in the CiteTemplate object, not a preference
const refToolbar2 = ($body: JQuery<HTMLBodyElement>): void => {
	// Default options, these mainly exist so the script won't break if a new option is added
	CiteTB.DefaultOptions = {
		'date format': '<year>-<zmonth>-<zdate>',
		'autodate fields': [],
		months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		modal: true,
		autoparse: false,
		expandtemplates: false,
	};

	// Get an option - user settings override global which override defaults
	CiteTB.getOption = (opt) => {
		const useroption = CiteTB.UserOptions[opt];
		if (useroption !== undefined) {
			return useroption;
		}
		const option = CiteTB.Options[opt];
		if (option !== undefined) {
			return option;
		}
		return CiteTB.DefaultOptions[opt];
	};

	CiteTB.init = (): void => {
		/* Main stuff, build the actual toolbar structure
		 * 1. get the template list, make the dropdown list and set up the template dialog boxes
		 * 2. actually build the toolbar:
		 * - A section for cites
		 * -- dropdown for the templates (previously defined)
		 * -- button for named refs with a dialog box
		 * 3. add the whole thing to the main toolbar
		 */

		$(document).find('head').trigger('reftoolbarbase');
		const $target = $body.find('textarea[name=wpTextbox1]');
		const temlist: Record<string, {label: string; action: {type: string; module: string}}> = {};
		for (const tem of Object.values(CiteTB.Templates)) {
			const sform = CiteTB.escStr(tem.shortform);
			const actionobj = {
				type: 'dialog',
				module: `cite-dialog-${sform}`,
			};
			const dialogobj: Record<string, unknown> = {};
			dialogobj[`cite-dialog-${sform}`] = {
				resizeme: false,

				title: mw.message(`cite-dialog-${sform}`).parse(),
				id: `citetoolbar-${sform}`,
				init: (): void => {},
				html: tem.getInitial(),
				dialog: {
					width: Math.round($(window).width() ?? 0 * 0.8),
					open(this: JQuery<HTMLElement>): void {
						// Must resolve the form before emptying the dialog: getOpenTemplate() relies on
						// the .cite-template marker input inside the dialog content
						const $form = CiteTB.getOpenTemplate().getForm();
						$(this).empty().append($form);
						$body.find('.cite-prev-parse').on('click', (e): void => {
							e.preventDefault();
							CiteTB.prevParseClick();
						});
					},
					buttons: {
						'cite-form-submit'(this: JQuery<HTMLElement>): void {
							const ref = CiteTB.getRef(false, true);
							$(this).dialog('close');
							$.wikiEditor.modules.toolbar.fn.doAction(
								$(this).data('context') as unknown,
								{
									type: 'encapsulate',
									options: {
										post: ref,
									},
								},
								$(this)
							);
						},
						'cite-form-showhide': CiteTB.showHideExtra,
						'cite-refpreview'(this: JQuery<HTMLElement>): void {
							const ref = CiteTB.getRef(false, false);
							const template = CiteTB.getOpenTemplate();
							const div = $(`#citetoolbar-${CiteTB.escStr(template.shortform)}`);
							div.find('.cite-preview-label').show();
							div.find('.cite-ref-preview').text(ref).show();
							if (CiteTB.getOption('autoparse')) {
								CiteTB.prevParseClick();
							} else {
								div.find('.cite-prev-parse').show();
								div.find('.cite-prev-parsed-label').hide();
								div.find('.cite-preview-parsed').html('');
							}
						},
						'wikieditor-toolbar-tool-link-cancel'(this: JQuery<HTMLElement>): void {
							$(this).dialog('close');
						},
						'cite-form-reset'(): void {
							CiteTB.resetForm();
						},
					},
				},
			};
			try {
				$target.wikiEditor('addDialog', dialogobj);
			} catch {
				/* TypeError: range is null */
			}
			// if (!CiteTB.getOption('modal')) {
			// 	$body.find(`#citetoolbar-${sform}`).dialog('option', 'modal', false);
			// }
			temlist[sform] = {
				label: tem.templatename,
				action: actionobj,
			};
		}

		const refsection = {
			sections: {
				cites: {
					type: 'toolbar',
					label: getMessage('cite-section-label'),
					groups: {
						template: {
							tools: {
								template: {
									type: 'select',
									label: getMessage('cite-template-list'),
									list: temlist,
								},
							},
						},
						namedrefs: {
							label: getMessage('cite-named-refs-label'),
							tools: {
								nrefs: {
									type: 'button',
									action: {
										type: 'dialog',
										module: 'cite-toolbar-namedrefs',
									},
									icon: citeIcon,
									section: 'cites',
									group: 'namedrefs',
									label: getMessage('cite-named-refs-button'),
								},
							},
						},
					},
				},
			},
		};

		const defaultdialogs = {
			'cite-toolbar-namedrefs': {
				title: mw.message('cite-named-refs-title').parse(),
				resizeme: false,
				id: 'citetoolbar-namedrefs',
				html: `<div id="cite-namedref-loading"> <img src="${ajaxLoader}" /> &nbsp;${getMessage(
					'cite-loading'
				)}</div>`,
				init: (): void => {},
				dialog: {
					width: Math.round($(window).width() ?? 0 * 0.8),
					open(): void {
						CiteTB.loadRefs();
					},
					buttons: {
						'cite-form-submit'(this: JQuery<HTMLElement>): void {
							const refname = String($body.find('#cite-namedref-select').val() ?? '');
							if (refname === '') {
								return;
							}
							$(this).dialog('close');
							$.wikiEditor.modules.toolbar.fn.doAction(
								$(this).data('context') as unknown,
								{
									type: 'encapsulate',
									options: {
										post: CiteTB.getNamedRef(refname, true),
									},
								},
								$(this)
							);
						},
						'wikieditor-toolbar-tool-link-cancel'(this: JQuery<HTMLElement>): void {
							$(this).dialog('close');
						},
					},
				},
			},
		};

		try {
			$target.wikiEditor('addDialog', defaultdialogs);
		} catch {
			// error occurred setting up wikieditor.
		}
		$body.find('#citetoolbar-namedrefs').off('dialogopen');
		if (!CiteTB.getOption('modal')) {
			// $body.find('#citetoolbar-namedrefs').dialog('option', 'modal', false);
			mw.util.addCSS('.ui-widget-overlay{display:none !important}');
		}
		try {
			$target.wikiEditor('addToToolbar', refsection);
		} catch {
			// error occurred setting up wikieditor.
		}
	};

	// Setup the main object
	CiteTB.mainRefList = [];
	CiteTB.refsLoaded = false;

	// REF FUNCTIONS
	// Actually assemble a ref from user input
	CiteTB.getRef = (inneronly, forinsert) => {
		const template = CiteTB.getOpenTemplate();
		const {templatename} = template;
		let res = '';
		const refobj: CiteRefObject = {
			shorttag: false,
		};
		if (!inneronly) {
			let group = $(`#cite-${CiteTB.escStr(template.shortform)}-group`).val();
			let refname = $(`#cite-${CiteTB.escStr(template.shortform)}-name`).val();
			res += '<ref';
			if (refname) {
				refname = String(refname).trim();
				res += ` name=${CiteTB.getQuotedString(refname)}`;
				refobj.refname = refname;
			}
			if (group) {
				group = String(group).trim();
				res += ` group=${CiteTB.getQuotedString(group)}`;
				refobj.refgroup = group;
			}
			res += '>';
		}
		let content = `{{${templatename}`;
		for (const group of Object.values(template.incrementables)) {
			for (let i = 1; i <= group.val; i++) {
				for (const fieldobj of group.fields) {
					const fieldname = fieldobj.field;
					const fieldid = fieldname.replace('<N>', i.toString());
					const field = $(`#cite-${CiteTB.escStr(template.shortform)}-${fieldid}`).val();
					if (field) {
						content += ` |${fieldid}=`;
						content += String(field).trim();
					}
				}
			}
		}
		for (const fieldobj of template.basic) {
			if (fieldobj.increment_group) {
				continue;
			}
			const fieldname = fieldobj.field;
			const field = $(`#cite-${CiteTB.escStr(template.shortform)}-${fieldname}`).val();
			if (field) {
				content += ` |${fieldname}=`;
				content += String(field).trim();
			}
		}
		if ($body.find('#cite-form-status').val() !== 'closed') {
			for (const fieldobj of template.extra) {
				if (fieldobj.increment_group) {
					continue;
				}
				const fieldname = fieldobj.field;
				const field = $(`#cite-${CiteTB.escStr(template.shortform)}-${fieldname}`).val();
				if (field) {
					content += ` |${fieldname}=`;
					content += String(field).trim();
				}
			}
		}
		content += '}}';
		res += content;
		refobj.content = content;
		if (!inneronly) {
			res += '</ref>';
		}
		if (forinsert) {
			CiteTB.mainRefList.push(refobj);
		}
		return res;
	};

	// Make a reference to a named ref
	CiteTB.getNamedRef = (refname, forinsert) => {
		if (forinsert) {
			CiteTB.mainRefList.push({
				shorttag: true,
				refname,
			});
		}
		return `<ref name=${CiteTB.getQuotedString(refname)} />`;
	};

	// Function to load the ref list
	CiteTB.loadRefs = (): void => {
		if (CiteTB.refsLoaded) {
			return;
		}
		CiteTB.getPageText(CiteTB.loadRefsInternal);
	};

	// Function that actually loads the list from the page text
	CiteTB.loadRefsInternal = (text): void => {
		// What this does:             extract first name/group                                     extract second name/group                                          shorttag   inner content
		const refsregex =
			/< *ref(?: +(name|group) *= *(?:"([^"]*?)"|'([^']*?)'|([^ '"/>]*?)) *)? *(?: +(name|group) *= *(?:"([^"]*?)"|'([^']*?)'|([^ '"/>]*?)) *)? *(?:\/ *>|>((?:.|\n)*?)< *\/ *ref *>)/gim;
		// This should work regardless of the quoting used for names/groups and for linebreaks in the inner content
		while (true) {
			const ref = refsregex.exec(text);
			if (ref === null) {
				break;
			}
			const refobj: CiteRefObject = {
				shorttag: true,
			};
			if (ref[9]) {
				// Content + short tag check
				// mw.notify(`"${ref[9]}"`, {tag: 'RefToolbar2.0', type: 'warn'});
				refobj.content = ref[9];
				refobj.shorttag = false;
			}
			if (ref[1]) {
				// First name/group
				const refkey = ref[1] === 'name' ? 'refname' : 'refgroup';
				if (ref[2]) {
					refobj[refkey] = ref[2];
				} else if (ref[3]) {
					refobj[refkey] = ref[3];
				} else {
					refobj[refkey] = ref[4];
				}
			}
			if (ref[5]) {
				// Second name/group
				const refkey = ref[5] === 'name' ? 'refname' : 'refgroup';
				if (ref[6]) {
					refobj[refkey] = ref[6];
				} else if (ref[7]) {
					refobj[refkey] = ref[7];
				} else {
					refobj[refkey] = ref[8];
				}
			}
			CiteTB.mainRefList.push(refobj);
		}
		CiteTB.refsLoaded = true;
		CiteTB.setupNamedRefs();
	};

	// AJAX FUNCTIONS
	// Parse some wikitext and hand it off to a callback function
	CiteTB.parse = (text, callback): void => {
		const postdata = {
			action: 'parse',
			title: mw.config.get('wgPageName'),
			text,
			prop: 'text',
			format: 'json',
			formatversion: '2',
		};
		void api.get(postdata).then(({parse}): void => {
			callback(parse.text as string);
		});
	};

	// Use the API to expand templates on some text
	CiteTB.expandtemplates = (text, callback): void => {
		const postdata = {
			action: 'expandtemplates',
			title: mw.config.get('wgPageName'),
			text,
			format: 'json',
			formatversion: '2',
		};
		void api.get(postdata).then(({expandtemplates}): void => {
			callback(expandtemplates.wikitext as string);
		});
	};

	// Function to get the page text
	CiteTB.getPageText = (callback): void => {
		const section = $body.find('input[name=wpSection]').val();
		if (section === '') {
			if (CiteTB.getOption('expandtemplates')) {
				CiteTB.expandtemplates(
					$body.find('textarea[name=wpTextbox1]').wikiEditor('getContents').text(),
					callback
				);
			} else {
				callback($body.find('textarea[name=wpTextbox1]').wikiEditor('getContents').text());
			}
		} else {
			const {wgArticleId} = mw.config.get();
			const postdata: Record<string, string | number> = {
				action: 'query',
				prop: 'revisions',
				rvprop: 'content',
				rvslots: 'main',
				pageids: wgArticleId,
				format: 'json',
				formatversion: '2',
			};
			if (CiteTB.getOption('expandtemplates')) {
				postdata['rvexpandtemplates'] = '1';
			}
			void api.get(postdata).then(({query}): void => {
				const pagetext: string = query.pages[0].revisions[0].slots.main.content;
				callback(pagetext);
			});
		}
	};

	// Safe version of decodeURIComponent() that doesn't throw exceptions.
	// If the native decodeURIComponent() threw an exception, the original string will be returned.
	CiteTB.safeDecodeURIComponent = (s): string => {
		try {
			s = decodeURIComponent(s);
		} catch {
			/* empty */
		}
		return s;
	};

	// Autofill a template from an ID (ISBN, DOI, PMID, URL)
	CiteTB.initAutofill = function (this: HTMLElement): false | undefined {
		const elemid = $(this).attr('id') ?? '';
		const res = /^cite-auto-(.*?)-(.*)-(.*)$/.exec(elemid);
		if (!res) {
			return false;
		}
		const [, tem, field, autotype] = res;
		let id = $(`#cite-${tem}-${field}`).val()?.toString();
		if (!id) {
			return false;
		}
		let url = 'https://citoid.qiuwen.net.cn/lookup.php?';
		// Citoid expects minimally encoded input, so do some speculative decoding here to avoid
		// 404 fetches. https://phabricator.wikimedia.org/T146539
		id = CiteTB.safeDecodeURIComponent(id);
		url += `${autotype}=${encodeURIComponent(id)}`;
		url += `&template=${encodeURIComponent(tem ?? '')}`;
		const s = document.createElement('script');
		s.setAttribute('src', url);
		s.setAttribute('type', 'text/javascript');
		document.head.append(s);
		return false;
	};

	// Callback for autofill
	// TODO: Autofill the URL, at least for DOI
	CiteTB.autoFill = (data, template, type): void => {
		const cl = `cite-${template}-`;
		let coauthors: string[] | undefined;
		$(`.${cl}title`).val(data.title ?? '');
		// Fill in authors
		if (data.authors && data.authors.length > 0) {
			if ($(`.${cl}last-incr-1`).length > 0) {
				const classes = $(`.${cl}last-incr-1`).eq(0).attr('class')?.split(/\s+/);
				if (!classes) {
					return;
				}
				let group: string | false | undefined = false;
				const patt = /cite-[^-]*?-incr-(.*)/;
				for (const class_ of classes) {
					const match = patt.exec(class_);
					if (match) {
						[, group] = match;
						break;
					}
				}
				$(`.${cl}last-incr-1`).val(data.authors[0]?.[0] ?? '');
				$(`.${cl}first-incr-1`).val(data.authors[0]?.[1] ?? '');
				const elemid = `#cite-incr-${template}-${group}`;
				for (let i = 2; i < data.authors.length + 1; i++) {
					$(elemid).trigger('click');
					$(`.${cl}last-incr-${i.toString()}`).val(data.authors[i - 1]?.[0] ?? '');
					$(`.${cl}first-incr-${i.toString()}`).val(data.authors[i - 1]?.[1] ?? '');
				}
			} else if ($(`.${cl}author-incr-1`).length > 0) {
				const classes = $(`.${cl}author-incr-1`).eq(0).attr('class')?.split(/\s+/);
				if (!classes) {
					return;
				}
				let group: string | false | undefined = false;
				const patt = /cite-[^-]*?-incr-(.*)/;
				for (const class_ of classes) {
					const match = patt.exec(class_);
					if (match) {
						[, group] = match;
						break;
					}
				}
				$(`.${cl}author-incr-1`).val(data.authors[0]?.join(', ') ?? '');
				const elemid = `#cite-incr-${template}-${group}`;
				for (let i = 2; i < data.authors.length + 1; i++) {
					$(elemid).trigger('click');
					$(`.${cl}author-incr-${i.toString()}`).val(data.authors[i - 1]?.join(', ') ?? '');
				}
			} else if ($(`.${cl}last1`).length > 0) {
				for (let i = 0; i < data.authors.length; i++) {
					if ($(`.${cl}last${i + 1}`).length) {
						$(`.${cl}last${i + 1}`).val(data.authors[i]?.[0] ?? '');
						$(`.${cl}first${i + 1}`).val(data.authors[i]?.[1] ?? '');
					} else {
						coauthors = [];
						for (let j = i; j < data.authors.length; j++) {
							coauthors.push(data.authors[j]?.join(', ') ?? '');
						}
						$(`.${cl}coauthors`).val(coauthors.join('; '));
						break;
					}
				}
			} else if ($(`.${cl}author1`).length === 0) {
				const authors: string[] = [];
				for (const author of data.authors) {
					authors.push(author.join(', '));
				}
				$(`.${cl}authors`).val(authors.join('; '));
			} else {
				for (let i = 0; i < data.authors.length; i++) {
					if ($(`.${cl}author${i + 1}`).length) {
						$(`.${cl}author${i + 1}`).val(data.authors[i]?.join(', ') ?? '');
					} else {
						coauthors = [];
						for (let j = i; j < data.authors.length; j++) {
							coauthors.push(data.authors[j]?.join(', ') ?? '');
						}
						$(`.${cl}coauthors`).val(coauthors.join('; '));
						break;
					}
				}
			}
		}

		// Format partial dates of the format YYYY-MM, YYYY-MM-XX, or YYYY-MM-DD correctly
		if (data.date) {
			try {
				const DT = new Date(data.date);
				if (/^\d{4}-\d{2}(-XX)?$/i.test(data.date)) {
					data.date = data.date.replace('-XX', '');
					$(`.${cl}date`).val(CiteTB.formatDate(DT, false, true));
				} else if (/^\d{4}-\d{2}-\d{2}?/i.test(data.date)) {
					$(`.${cl}date`).val(CiteTB.formatDate(DT, true, true));
				} else {
					$(`.${cl}date`).val(data.date);
				}
			} catch {
				/* empty */
			}
		} else {
			$(`.${cl}date`).val(data.date ?? '');
		}

		switch (type) {
			case 'pmid':
			case 'doi':
				$(`.${cl}journal`).val(data.journal ?? '');
				$(`.${cl}volume`).val(data.volume ?? '');
				$(`.${cl}issue`).val(data.issue ?? '');
				$(`.${cl}pages`).val(data.pages ?? '');
				if (type === 'pmid' && data.doi) {
					$(`.${cl}doi`).val(data.doi);
				}

				break;

			case 'isbn':
				$(`.${cl}publisher`).val(data.publisher ?? '');
				$(`.${cl}location`).val(data.location ?? '');
				$(`.${cl}edition`).val(data.edition ?? '');

				break;

			case 'url':
				$(`.${cl}journal`).val(data.journal ?? '');
				$(`.${cl}volume`).val(data.volume ?? '');
				$(`.${cl}issue`).val(data.issue ?? '');
				$(`.${cl}pages`).val(data.pages ?? '');
				$(`.${cl}publisher`).val(data.publisher ?? '');
				$(`.${cl}edition`).val(data.edition ?? '');
				$(`.${cl}isbn`).val(data.isbn ?? '');
				$(`.${cl}issn`).val(data.issn ?? '');
				$(`.${cl}doi`).val(data.doi ?? '');
				// "en-US" isn't a valid value for the language parameter
				if (data.language && data.language !== 'en-US' && data.language !== 'en-GB') {
					$(`.${cl}language`).val(data.language);
				}
				$(`.${cl}chapter`).val(data.chapter ?? '');

				break;

			// No default
		}
	};

	// FORM DIALOG FUNCTIONS
	// Add new incrementable fields
	CiteTB.incrementFields = function (this: HTMLElement): void {
		const template = CiteTB.getOpenTemplate();
		const $currentrow = $(this).parents('tr').eq(0);
		$(this).prev().css('width', '100%');
		$(this).detach();
		const elemid = $(this).attr('id') ?? '';
		const res = /^cite-incr-(.*?)-(.*)$/.exec(elemid);
		if (!res) {
			return;
		}
		const group = res[2];
		if (!group) {
			return;
		}
		const increments = template.incrementables[group];
		if (!increments) {
			return;
		}
		const {fields} = increments;
		increments.val += 1;
		const trs = template.makeFormInner(fields, false);
		trs.reverse();
		for (const tr of trs) {
			$currentrow.after(tr);
		}
	};

	// fill the accessdate param with the current date
	CiteTB.fillAccessdate = function (this: HTMLElement): false | undefined {
		const elemid = $(this).attr('id') ?? '';
		const res = /^cite-date-(.*?)-(.*)$/.exec(elemid);
		if (!res) {
			return;
		}
		const [, id, field] = res;
		const DT = new Date();
		const datestr = CiteTB.formatDate(DT);
		$(`#cite-${id}-${field}`).val(datestr);
		return false;
	};

	CiteTB.formatDate = (DT, useday, usemonth): string => {
		useday ??= true;
		usemonth ??= true;
		let datestr = CiteTB.getOption('date format');
		const monthNum = DT.getUTCMonth() + 1;
		const month = monthNum.toString();
		const zmonth = monthNum < 10 ? `0${month}` : month;
		const dateNum = DT.getUTCDate();
		const date = dateNum.toString();
		const zdate = dateNum < 10 ? `0${date}` : date;
		if (useday) {
			datestr = datestr.replace('<date>', date);
			datestr = datestr.replace('<zdate>', zdate);
		} else {
			datestr = datestr.replace('<date>', '');
			datestr = datestr.replace('<zdate>', '');
		}
		if (usemonth) {
			datestr = datestr.replace('<month>', month);
			datestr = datestr.replace('<zmonth>', zmonth);
			datestr = datestr.replace('<monthname>', CiteTB.getOption('months')[DT.getUTCMonth()] ?? '');
		} else {
			datestr = datestr.replace('<month>', '');
			datestr = datestr.replace('<zmonth>', '');
			datestr = datestr.replace('<monthname>', '');
		}
		datestr = datestr.replace('<year>', DT.getUTCFullYear().toString());
		return datestr.replace(/^[ /\-,.]*(.*?)[ /\-,.]*$/g, '$1'); // Cleanup any dangling spaces or connectors that might result from omitting date/month
	};

	// Function called after the ref list is loaded, to actually set the contents of the named ref dialog
	// Until the list is loaded, its just a "Loading" placeholder
	CiteTB.setupNamedRefs = (): void => {
		const names: CiteRefObject[] = [];
		for (const ref of CiteTB.mainRefList) {
			if (!ref.shorttag && ref.refname) {
				names.push(ref);
			}
		}
		const stuff = $('<div>');
		$body.find('#citetoolbar-namedrefs').empty().append(stuff);
		if (names.length === 0) {
			stuff.html(getMessage('cite-no-namedrefs'));
		} else {
			stuff.html(getMessage('cite-namedrefs-intro'));
			const select = $('<select>').attr('id', 'cite-namedref-select');
			select.append($('<option>').attr('value', '').text(getMessage('cite-named-refs-dropdown')));
			for (const name of names) {
				select.append($('<option>').text(name.refname ?? ''));
			}
			stuff.after(select);
			select.before('<br>');
			const prevlabel = $('<div>')
				.attr('id', 'cite-nref-preview-label')
				.css('display', 'none')
				.html(getMessage('cite-raw-preview'));
			select.after(prevlabel);
			prevlabel.before('<br><br>');
			prevlabel.after('<div id="cite-namedref-preview" style="padding:0.5em; font-size:110%" />');
			const parselabel = $('<span>')
				.attr('id', 'cite-parsed-label')
				.css('display', 'none')
				.html(getMessage('cite-parsed-label'));
			$body.find('#cite-namedref-preview').after(parselabel);
			parselabel.after('<div id="cite-namedref-parsed" style="padding-bottom:0.5em; font-size:110%" />');
			const link = $('<a>')
				.attr({
					href: '#',
					id: 'cite-nref-parse',
				})
				.css({
					margin: '0 1em 0 1em',
					display: 'none',
					color: '#00008b',
				});
			link.html(getMessage('cite-form-parse'));
			$body.find('#cite-namedref-parsed').after(link);

			$body.find('#cite-namedref-select').on('change', CiteTB.namedRefSelectClick);
			$body.find('#cite-nref-parse').on('click', CiteTB.nrefParseClick);
		}
	};

	// Callback function for parsed preview
	CiteTB.fillNrefPreview = (parsed): void => {
		$body.find('#cite-parsed-label').show();
		$body.find('#cite-namedref-parsed').html(parsed);
	};

	// Click handler for the named-ref parsed preview
	CiteTB.nrefParseClick = (): false | undefined => {
		const choice = String($body.find('#cite-namedref-select').val() ?? '');
		if (choice === '') {
			$body.find('#cite-parsed-label').hide();
			$body.find('#cite-namedref-parsed').text('');
			return false;
		}
		$body.find('#cite-nref-parse').hide();
		const ref = CiteTB.mainRefList.find((r): boolean => !r.shorttag && r.refname === choice);
		if (ref?.content) {
			CiteTB.parse(ref.content, CiteTB.fillNrefPreview);
		}
		return false;
	};

	// Click handler for the named-ref dropdown
	CiteTB.lastnamedrefchoice = '';
	CiteTB.namedRefSelectClick = (): void => {
		const choice = String($body.find('#cite-namedref-select').val() ?? '');
		if (CiteTB.lastnamedrefchoice === choice) {
			return;
		}
		CiteTB.lastnamedrefchoice = choice;
		$body.find('#cite-parsed-label').hide();
		$body.find('#cite-namedref-parsed').text('');
		if (choice === '') {
			$body.find('#cite-nref-preview-label').hide();
			$body.find('#cite-namedref-preview').text('');
			$body.find('#cite-nref-parse').hide();
			return;
		}
		for (const ref of CiteTB.mainRefList) {
			if (!ref.shorttag && ref.refname === choice) {
				$body.find('#cite-nref-preview-label').show();
				$body.find('#cite-namedref-preview').text(ref.content ?? '');
				if (CiteTB.getOption('autoparse')) {
					CiteTB.nrefParseClick();
				} else {
					$body.find('#cite-nref-parse').show();
				}
			}
		}
	};

	// callback function for parsed preview
	CiteTB.fillTemplatePreview = (text): void => {
		const template = CiteTB.getOpenTemplate();
		const div = $(`#citetoolbar-${CiteTB.escStr(template.shortform)}`);
		div.find('.cite-prev-parsed-label').show();
		div.find('.cite-preview-parsed').html(text);
	};

	// Click handler for template parsed preview
	CiteTB.prevParseClick = (): void => {
		const ref = CiteTB.getRef(true, false);
		const template = CiteTB.getOpenTemplate();
		const div = $(`#citetoolbar-${CiteTB.escStr(template.shortform)}`);
		div.find('.cite-prev-parse').hide();
		CiteTB.parse(ref, CiteTB.fillTemplatePreview);
	};

	// Show/hide the extra fields in the dialog box
	CiteTB.showHideExtra = (): void => {
		const template = CiteTB.getOpenTemplate();
		const div = $(`#citetoolbar-${CiteTB.escStr(template.shortform)}`);
		const setting = div.find('.cite-form-status').val();
		if (setting === 'closed') {
			div.find('.cite-form-status').val('open');
			div.find('.cite-extra-fields').show(1, () => {
				// jQuery adds `display: block`, which screws things up
				div.find('.cite-extra-fields').css({
					width: '100%',
					'background-color': 'transparent',
				});
			});
		} else {
			div.find('.cite-form-status').val('closed');
			div.find('.cite-extra-fields').hide();
		}
	};

	// Resets form fields and previews
	CiteTB.resetForm = (): void => {
		const template = CiteTB.getOpenTemplate();
		const div = $(`#citetoolbar-${CiteTB.escStr(template.shortform)}`);
		div.empty().append(template.getForm());
	};

	// STRING UTILITY FUNCTIONS
	// Returns a string quoted as necessary for name/group attributes
	CiteTB.getQuotedString = (s): string => {
		const sq = /'/.test(s); // single quotes
		const dq = /"/.test(s); // double quotes
		if (sq && dq) {
			// Has double and single quotes
			return `"${s.replace(/"/g, "'")}"`;
		}
		if (dq) {
			// Can use single quotes
			return `'${s}'`;
		}
		// Can use double quotes - always quotes for non-latin alphabet
		return `"${s}"`;
	};

	// Fix up strings for output - capitalize first char, replace underscores with spaces
	CiteTB.fixStr = (s): string => {
		s = s.slice(0, 1).toUpperCase() + s.slice(1);
		s = s.replace('_', ' ');
		return s;
	};

	// Escape spaces and quotes for use in HTML classes/ids
	CiteTB.escStr = (s): string => {
		return s
			.replace(/\s/g, '-')
			.replace(/'/g, String.raw`\'`)
			.replace(/"/g, String.raw`\"`);
	};

	// MISC FUNCTIONS
	// Determine which template form is open, and get the template object for it
	CiteTB.getOpenTemplate = (): CiteTemplateInstance => {
		const dialogs = $body.find('.ui-dialog-content.ui-widget-content:visible');
		const templatename = String(
			$(dialogs[0] as HTMLElement)
				.find('.cite-template')
				.val() ?? ''
		);
		return CiteTB.Templates[templatename] as CiteTemplateInstance;
	};

	// Load configuration for site
	refToolbarConfig();

	// End of code loaded only on edit
};

export {refToolbar2};
