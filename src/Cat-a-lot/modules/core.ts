/* eslint-disable no-jquery/no-global-selector */
/* eslint-disable mediawiki/class-doc */
import {
	API_ENTRY_POINT,
	API_TAG,
	CLASS_NAME_LABEL_SELECTED,
	DEFAULT_SETTING,
	ENABLE_NAMESPACE,
	type Setting,
	VERSION,
	WG_CANONICAL_SPECIAL_PAGE_NAME,
	WG_FORMATTED_NAMESPACES,
	WG_NAMESPACE_IDS,
	WG_NAMESPACE_NUMBER,
	WG_TITLE,
	WG_WIKI_ID,
} from './constant';
import {DEFAULT_MESSAGES, type MessageKey, catALotMessages} from './messages';

/**
 * Changes category of multiple files
 */
const catALot = (): void => {
	/*! Cat-a-lot | CC-BY-SA-4.0 <qwbk.cc/H:CC-BY-SA-4.0> */
	class CAL {
		static readonly MESSAGES: Record<MessageKey, string> = DEFAULT_MESSAGES;
		static readonly DEFAULT_SETTING: Setting = DEFAULT_SETTING;
		static readonly VERSION: string = VERSION;

		static readonly API_ENTRY_POINT: string = API_ENTRY_POINT;
		static readonly API_TAG: string = API_TAG;
		static readonly ENABLE_NAMESPACE: number = ENABLE_NAMESPACE;

		static readonly CURRENT_CATEGROY: string = WG_TITLE;
		static readonly CURRENT_NAMESPACE_NUMBER: number = WG_NAMESPACE_NUMBER;

		static readonly WG_FORMATTED_NAMESPACES: Record<number, string> = WG_FORMATTED_NAMESPACES;
		static readonly WG_NAMESPACE_IDS: Record<string, number> = WG_NAMESPACE_IDS;

		static enableAutoComplete = false;
		static isSearchMode = false;

		static alreadyThere: string[] = [];
		static connectionError: string[] = [];
		static notFound: string[] = [];
		static counterCurrent = 0;
		static counterNeeded = 0;

		static counterCat = 0;
		static currentCategory = '';

		static dialogHeight = 450;
		static editToken = '';
		static localCatName = WG_FORMATTED_NAMESPACES[ENABLE_NAMESPACE] as string;

		static parentCats: string[] = [];
		static subCats: string[] = [];

		static variantCache: Record<string, string[]> = {};

		static $counter = $();
		static $progressDialog = $();
		static $labels = $();
		static $selectedLabels = $();

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		private readonly settings: Record<string, any>;

		private readonly $body: JQuery;
		private readonly $container: JQuery;
		private readonly $dataContainer: JQuery;
		private readonly $searchInputContainer: JQuery;
		private readonly $searchInput: JQuery;
		private readonly $resultList: JQuery;
		private readonly $markCounter: JQuery;
		private readonly $selections: JQuery;
		private readonly $selectAll: JQuery;
		private readonly $selectNone: JQuery;
		private readonly $head: JQuery;
		private readonly $link: JQuery;

		public constructor() {
			if (!mw.message('cat-a-lot-loading')) {
				mw.messages.set(CAL.MESSAGES);
			}

			this.settings = {};

			const reCat = new RegExp(`^\\s*${CAL.localizedRegex(CAL.ENABLE_NAMESPACE, 'Category')}:`, '');

			this.initSettings();

			this.$body = $('body');
			this.$container = $('<div>').attr('id', 'cat_a_lot').appendTo(this.$body);
			this.$dataContainer = $('<div>').attr('id', 'cat_a_lot_data').appendTo(this.$container);
			this.$searchInputContainer = $('<div>').appendTo(this.$dataContainer);
			this.$searchInput = $('<input>')
				.attr({
					id: 'cat_a_lot_searchcatname',
					placeholder: CAL.msg('enter-name'),
					type: 'text',
				})
				.appendTo(this.$searchInputContainer);
			this.$resultList = $('<div>').attr('id', 'cat_a_lot_category_list').appendTo(this.$dataContainer);
			this.$markCounter = $('<div>').attr('id', 'cat_a_lot_mark_counter').appendTo(this.$dataContainer);
			this.$selections = $('<div>')
				.attr('id', 'cat_a_lot_selections')
				.text(CAL.msg('select'))
				.appendTo(this.$dataContainer);
			this.$selectAll = $('<a>')
				.attr('id', 'cat_a_lot_select_all')
				.text(CAL.msg('all'))
				.appendTo(this.$selections.append(' '));
			this.$selectNone = $('<a>')
				.attr('id', 'cat_a_lot_select_none')
				.text(CAL.msg('none'))
				.appendTo(this.$selections.append(' • '));
			this.$head = $('<div>').attr('id', 'cat_a_lot_head').appendTo(this.$container);
			this.$link = $('<a>').attr('id', 'cat_a_lot_toggle').text('Cat-a-lot').appendTo(this.$head);
			this.$searchInput
				.on('keypress', ({currentTarget, keyCode, which}): void => {
					if ((keyCode || which) === 13) {
						this.updateCats(String($(currentTarget).val()).trim());
					}
				})
				.on('input keyup', ({currentTarget}): void => {
					const oldVal: string = (currentTarget as HTMLInputElement).value;
					const newVal: string = oldVal.replace(reCat, '');
					if (newVal !== oldVal) {
						(currentTarget as HTMLInputElement).value = newVal;
					}
				});
			if (CAL.isSearchMode) {
				this.$searchInput.val(mw.util.getParamValue('search') ?? '');
			}
			const initAutocomplete = (): void => {
				if (CAL.enableAutoComplete) {
					return;
				}
				CAL.enableAutoComplete = true;
				this.$searchInput.autocomplete({
					source: (request: {term: unknown}, response: (arg: JQuery<string>) => void) => {
						this.doAPICall(
							{
								action: 'opensearch',
								search: request.term,
								redirects: 'resolve',
								namespace: CAL.ENABLE_NAMESPACE,
							},
							(result): void => {
								if (result[1]) {
									response(
										$(result[1]).map((_index: number, item: string): string => {
											return item.replace(reCat, '');
										})
									);
								}
							}
						);
					},
					open: (): void => {
						$('.ui-autocomplete').position({
							my: 'right bottom',
							at: 'right top',
							of: this.$searchInput,
						});
					},
					appendTo: '#cat_a_lot',
				});
			};
			this.$selectAll.on('click', (): void => {
				this.toggleAll(true);
			});
			this.$selectNone.on('click', (): void => {
				this.toggleAll(false);
			});
			this.$link.on('click', ({currentTarget}): void => {
				$(currentTarget).toggleClass('cat_a_lot_enabled');
				initAutocomplete();
				this.run();
			});
		}
		static msg(key: string, ...args: string[]): string {
			key = `cat-a-lot-${key}`;
			// Messages that can be used here:
			// * see messages.ts
			// * for more information
			return args.length ? mw.message(key, ...args).parse() : mw.message(key).plain();
		}
		findAllLabels(): void {
			// It's possible to allow any kind of pages as well but what happens if you click on "select all" and don't expect it
			if (CAL.isSearchMode) {
				CAL.$labels = $('table.searchResultImage').find('tr>td').eq(1);
				if (this.settings['editpages']) {
					CAL.$labels = CAL.$labels.add('div.mw-search-result-heading');
				}
			} else {
				CAL.$labels = $('div.gallerytext').add($('div#mw-category-media').find('li[class!="gallerybox"]'));
				if (this.settings['editpages']) {
					const $pages: JQuery<HTMLLIElement> = $('div#mw-pages, div#mw-subcategories').find('li');
					CAL.$labels = CAL.$labels.add($pages);
				}
			}
		}
		updateSelectionCounter(): void {
			CAL.$selectedLabels = CAL.$labels.filter(`.${CLASS_NAME_LABEL_SELECTED}`);
			this.$markCounter.show().html(CAL.msg('files-selected', CAL.$selectedLabels.length.toString()));
		}
		makeClickable(): void {
			this.findAllLabels();
			CAL.$labels
				.addClass('cat_a_lot__label')
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				.onCatALotShiftClick(this.updateSelectionCounter);
		}
		toggleAll(select: boolean): void {
			CAL.$labels.toggleClass(CLASS_NAME_LABEL_SELECTED, select);
			this.updateSelectionCounter();
		}
		static localizedRegex(namespaceNumber: number, fallback: string): string {
			// Copied from HotCat, thanks Lupo.
			const wikiTextBlank = '[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+';
			const wikiTextBlankRE = new RegExp(wikiTextBlank, 'g');
			const createRegexStr = (name: string | undefined): string => {
				if (!name?.length) {
					return '';
				}
				let regexName = '';
				for (let i = 0; i < name.length; i++) {
					const initial = name.slice(i, i + 1);
					const ll = initial.toLowerCase();
					const ul = initial.toUpperCase();
					regexName += ll === ul ? initial : `[${ll}${ul}]`;
				}
				return regexName.replace(/([$()*+.?\\^])/g, '\\$1').replace(wikiTextBlankRE, wikiTextBlank);
			};
			fallback = fallback.toLowerCase();
			const canonical: string | undefined = CAL.WG_FORMATTED_NAMESPACES[namespaceNumber]?.toLowerCase();
			let regexString = createRegexStr(canonical);
			if (fallback && canonical !== fallback) {
				regexString += `|${createRegexStr(fallback)}`;
			}
			for (const catName in CAL.WG_NAMESPACE_IDS) {
				if (
					typeof catName === 'string' &&
					catName.toLowerCase() !== canonical &&
					catName.toLowerCase() !== fallback &&
					CAL.WG_NAMESPACE_IDS[catName] === namespaceNumber
				) {
					regexString += `|${createRegexStr(catName)}`;
				}
			}
			return `(?:${regexString})`;
		}
		static findAllVariants(category: string): string[] {
			const result: string[] = [];
			const baseUrl = `${CAL.API_ENTRY_POINT}?action=parse&text=${encodeURIComponent(
				category
			)}&title=temp&format=json&variant=`;
			if (CAL.variantCache[category] !== undefined) {
				return CAL.variantCache[category] as string[];
			}
			for (const variant of ['zh-hans', 'zh-hant', 'zh-cn', 'zh-my', 'zh-sg', 'zh-hk', 'zh-mo', 'zh-tw']) {
				const r: string = $($.ajax({url: baseUrl + variant, async: false}).responseJSON.parse.text['*'])
					.eq(0)
					.text()
					.trim();
				if (!result.includes(r)) {
					result.push(r);
				}
			}
			CAL.variantCache[category] = result;
			return result;
		}
		static regexBuilder(category: string): RegExp {
			const catName: string = CAL.localizedRegex(CAL.ENABLE_NAMESPACE, 'Category');
			// Build a regexp string for matching the given category:
			// trim leading/trailing whitespace and underscores
			category = category.replace(/^[\s_]+/, '').replace(/[\s_]+$/, '');
			// Find all variants
			const variants: string[] = CAL.findAllVariants(category);
			// escape regexp metacharacters (= any ASCII punctuation except _)
			const variantArray: string[] = [];
			for (let variant of variants) {
				variant = mw.util.escapeRegExp(variant);
				// any sequence of spaces and underscores should match any other
				variant = variant.replace(/[\s_]+/g, '[\\s_]+');
				// Make the first character case-insensitive:
				const first: string = variant.slice(0, 1);
				if (first.toUpperCase() !== first.toLowerCase()) {
					variant = `[${first.toUpperCase()}${first.toLowerCase()}]${variant.slice(1)}`;
				}
				variantArray.push(variant);
			}
			// Compile it into a RegExp that matches MediaWiki category syntax (yeah, it looks ugly):
			// XXX: the first capturing parens are assumed to match the sortkey, if present, including the | but excluding the ]]
			return new RegExp(
				`\\[\\[[\\s_]*${catName}[\\s_]*:[\\s_]*(?:${variantArray.join(
					'|'
				)})[\\s_]*(\\|[^\\]]*(?:\\][^\\]]+)*)?\\]\\]`,
				'g'
			);
		}
		doAPICall(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			params: Record<string, any>,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			callback: (response: any, textStatus: JQuery.Ajax.SuccessTextStatus, jqXHR: JQuery.jqXHR) => void
		) {
			params['format'] = 'json';
			let i = 0;
			const doCall = (): void => {
				const handleError = (
					jqXHR: JQuery.jqXHR,
					textStatus: JQuery.Ajax.ErrorTextStatus,
					errorThrown: string
				): void => {
					mw.log.error('[Cat-a-lot] Ajax error:', jqXHR, textStatus, errorThrown);
					if (i < 4) {
						setTimeout(doCall, 300);
						i++;
					} else if (params['title']) {
						CAL.connectionError.push(params['title']);
						this.updateCounter();
					}
				};
				$.ajax({
					headers: {
						'Api-User-Agent': `Qiuwen/1.1 (Cat-a-lot/${CAL.VERSION}; ${WG_WIKI_ID})`,
					},
					url: CAL.API_ENTRY_POINT,
					cache: false,
					dataType: 'json',
					data: params,
					type: 'POST',
					success: callback,
					error: handleError,
				});
			};
			doCall();
		}
		// Remove {{Uncategorized}} (also with comment). No need to replace it with anything.
		static removeUncat(text: string): string {
			return text.replace(/\{\{\s*[Uu]ncategorized\s*(\|?.*?)\}\}/, '');
		}
		doCleanup(text: string): string {
			return this.settings['docleanup'] ? text.replace(/{{\s*[Cc]heck categories\s*(\|?.*?)}}/, '') : text;
		}
		static markAsDone($label: JQuery, mode: 'add' | 'copy' | 'move' | 'remove', targetcat: string): void {
			$label.addClass('cat_a_lot_markAsDone');
			switch (mode) {
				case 'add':
					$label.append(`<br>${CAL.msg('added-cat', targetcat)}`);
					break;
				case 'copy':
					$label.append(`<br>${CAL.msg('copied-cat', targetcat)}`);
					break;
				case 'move':
					$label.append(`<br>${CAL.msg('moved-cat', targetcat)}`);
					break;
				case 'remove':
					$label.append(`<br>${CAL.msg('removed-cat')}`);
					break;
			}
		}
		displayResult(): void {
			this.$body.css('cursor', 'auto');
			$('.cat_a_lot_feedback').addClass('cat_a_lot_done');
			$('.ui-dialog-content').height('auto');
			const $parent: JQuery = CAL.$counter.parent();
			$parent.html(`<h3>${CAL.msg('done')}</h3>`);
			$parent.append(`${CAL.msg('all-done')}<br>`);
			const $close: JQuery = $('<a>').text(CAL.msg('return-to-page'));
			$close.on('click', (): void => {
				CAL.$progressDialog.remove();
				this.toggleAll(false);
			});
			$parent.append($close);
			if (CAL.alreadyThere.length) {
				$parent.append(`<h5>${CAL.msg('skipped-already', CAL.alreadyThere.length.toString())}</h5>`);
				$parent.append(CAL.alreadyThere.join('<br>'));
			}
			if (CAL.notFound.length) {
				$parent.append(`<h5>${CAL.msg('skipped-not-found', CAL.notFound.length.toString())}</h5>`);
				$parent.append(CAL.notFound.join('<br>'));
			}
			if (CAL.connectionError.length) {
				$parent.append(`<h5>${CAL.msg('skipped-server', CAL.connectionError.length.toString())}</h5>`);
				$parent.append(CAL.connectionError.join('<br>'));
			}
		}
		updateCounter(): void {
			CAL.counterCurrent++;
			if (CAL.counterCurrent > CAL.counterNeeded) {
				this.displayResult();
			} else {
				CAL.$counter.text(CAL.counterCurrent);
			}
		}
		editCategories(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			result: Record<string, any>,
			file: [string, JQuery],
			targetcat: string,
			mode: 'add' | 'copy' | 'move' | 'remove'
		): void {
			if (!result?.['query']) {
				// Happens on unstable wifi connections..
				CAL.connectionError.push(file[0]);
				this.updateCounter();
				return;
			}
			let otext = '';
			let starttimestamp = 0;
			let timestamp = 0;
			CAL.editToken = result['query'].tokens.csrftoken;
			const {pages} = result['query'];
			// there should be only one, but we don't know its ID
			for (const id in pages) {
				if (!Object.hasOwn(pages, id)) {
					continue;
				}
				otext = pages[id].revisions[0]['*'];
				({starttimestamp} = pages[id]);
				[{timestamp}] = pages[id].revisions;
			}
			const sourcecat: string = CAL.CURRENT_CATEGROY;
			// Check if that file is already in that category
			if (mode !== 'remove' && CAL.regexBuilder(targetcat).test(otext)) {
				// If the new cat is already there, just remove the old one
				if (mode === 'move') {
					mode = 'remove';
				} else {
					CAL.alreadyThere.push(file[0]);
					this.updateCounter();
					return;
				}
			}
			let text: string = otext;
			let comment: string;
			// Fix text
			switch (mode) {
				case 'add':
					text += `\n[[${CAL.localCatName}:${targetcat}]]\n`;
					comment = CAL.msg('summary-add').replace('$1', targetcat);
					break;
				case 'copy':
					text = text.replace(
						CAL.regexBuilder(sourcecat),
						`[[${CAL.localCatName}:${sourcecat}$1]]\n[[${CAL.localCatName}:${targetcat}$1]]`
					);
					comment = CAL.msg('summary-copy').replace('$1', sourcecat).replace('$2', targetcat);
					// If category is added through template:
					if (otext === text) {
						text += `\n[[${CAL.localCatName}:${targetcat}]]`;
					}
					break;
				case 'move':
					text = text.replace(CAL.regexBuilder(sourcecat), `[[${CAL.localCatName}:${targetcat}$1]]`);
					comment = CAL.msg('summary-move').replace('$1', sourcecat).replace('$2', targetcat);
					break;
				case 'remove':
					text = text.replace(CAL.regexBuilder(sourcecat), '');
					comment = CAL.msg('summary-remove').replace('$1', sourcecat);
					break;
			}
			if (text === otext) {
				CAL.notFound.push(file[0]);
				this.updateCounter();
				return;
			}
			// Remove uncat after we checked whether we changed the text successfully.
			// Otherwise we might fail to do the changes, but still replace {{uncat}}
			if (mode !== 'remove') {
				text = this.doCleanup(CAL.removeUncat(text));
			}
			this.doAPICall(
				{
					action: 'edit',
					assert: 'user',
					summary: comment,
					title: file[0],
					text,
					bot: true,
					starttimestamp,
					basetimestamp: timestamp,
					watchlist: this.settings['watchlist'],
					tags: CAL.API_TAG,
					token: CAL.editToken,
				},
				(): void => {
					this.updateCounter();
				}
			);
			CAL.markAsDone(file[1], mode, targetcat);
		}
		getContent(file: [string, JQuery], targetcat: string, mode: 'add' | 'copy' | 'move' | 'remove'): void {
			this.doAPICall(
				{
					action: 'query',
					prop: 'revisions',
					rvprop: 'content|timestamp',
					meta: 'tokens',
					titles: file[0],
				},
				(result): void => {
					this.editCategories(result, file, targetcat, mode);
				}
			);
		}
		static getTitleFromLink(href: string | undefined): string {
			try {
				return (decodeURIComponent(href ?? '').match(/wiki\/(.+?)(?:#.+)?$/)?.[1] ?? '').replace(/_/g, ' ');
			} catch {
				return '';
			}
		}
		getMarkedLabels(): [string, JQuery][] {
			const marked: ReturnType<typeof this.getMarkedLabels> = [];
			CAL.$selectedLabels = CAL.$labels.filter(`.${CLASS_NAME_LABEL_SELECTED}`);
			CAL.$selectedLabels.each((_index: number, element: HTMLElement): void => {
				const $this: JQuery = $(element);
				const $file: JQuery = $this.find('a[title]');
				const title: string =
					$file.attr('title') ||
					CAL.getTitleFromLink($file.attr('href')) ||
					CAL.getTitleFromLink($this.find('a').attr('href'));
				marked.push([title, $this]);
			});
			return marked;
		}
		showProgress(): void {
			this.$body.css('cursor', 'wait');
			CAL.$progressDialog = $('<div>')
				.html(
					` ${CAL.msg('editing')}<span id="cat_a_lot_current">${CAL.counterCurrent}</span>${CAL.msg('of')}${
						CAL.counterNeeded
					}`
				)
				.dialog({
					width: 450,
					height: 90,
					minHeight: 90,
					modal: true,
					resizable: false,
					draggable: false,
					closeOnEscape: false,
					dialogClass: 'cat_a_lot_feedback',
				});
			$('.ui-dialog-titlebar').hide();
			CAL.$counter = $('#cat_a_lot_current');
		}
		doSomething(targetcat: string, mode: 'add' | 'copy' | 'move' | 'remove'): void {
			const files: [string, JQuery][] = this.getMarkedLabels();
			if (!files.length) {
				mw.notify(CAL.msg('none-selected'), {tag: 'catALot'});
				return;
			}
			CAL.alreadyThere = [];
			CAL.connectionError = [];
			CAL.notFound = [];
			CAL.counterCurrent = 1;
			CAL.counterNeeded = files.length;
			this.showProgress();
			for (const file of files) {
				this.getContent(file, targetcat, mode);
			}
		}
		addHere(targetcat: string): void {
			this.doSomething(targetcat, 'add');
		}
		moveHere(targetcat: string): void {
			this.doSomething(targetcat, 'move');
		}
		copyHere(targetcat: string): void {
			this.doSomething(targetcat, 'copy');
		}
		createCatLinks(symbol: string, list: string[]): void {
			list.sort();
			const domlist: JQuery<HTMLTableElement> = this.$resultList.find('table');
			for (const element of list) {
				const $tr: JQuery = $('<tr>').data('cat', element);
				$tr.append($('<td>').text(symbol)).append(
					$('<td>').append(
						$('<a>')
							.text(element)
							.on('click', ({currentTarget}): void => {
								this.updateCats($(currentTarget).closest('tr').data('cat'));
							})
					)
				);
				// Can't move to source category
				if (element !== CAL.CURRENT_CATEGROY && CAL.isSearchMode) {
					$tr.append(
						$('<td>').append(
							$('<a>')
								.addClass('cat_a_lot_action')
								.text(CAL.msg('add'))
								.on('click', ({currentTarget}): void => {
									this.addHere($(currentTarget).closest('tr').data('cat'));
								})
						)
					);
				} else if (element !== CAL.CURRENT_CATEGROY && !CAL.isSearchMode) {
					$tr.append(
						$('<td>').append(
							$('<a>')
								.addClass('cat_a_lot_move')
								.text(CAL.msg('move'))
								.on('click', ({currentTarget}): void => {
									this.moveHere($(currentTarget).closest('tr').data('cat'));
								})
						),
						$('<td>').append(
							$('<a>')
								.addClass('cat_a_lot_action')
								.text(CAL.msg('copy'))
								.on('click', ({currentTarget}): void => {
									this.copyHere($(currentTarget).closest('tr').data('cat'));
								})
						)
					);
				}
				domlist.append($tr);
			}
		}
		showCategoryList(): void {
			const thiscat: string[] = [CAL.currentCategory];
			this.$resultList.empty();
			this.$resultList.append($('<table>'));
			this.createCatLinks('↑', CAL.parentCats);
			this.createCatLinks('→', thiscat);
			this.createCatLinks('↓', CAL.subCats);
			this.$body.css('cursor', 'auto');
			// Reset width
			this.$container.width('');
			this.$container.height('');
			this.$container.width(Math.min((this.$container.width() ?? 0) * 1.1 + 15, ($(window).width() ?? 0) - 10));
			this.$resultList.css({
				'max-height': `${CAL.dialogHeight}px`,
				height: '',
			});
		}
		getParentCats(): void {
			this.doAPICall(
				{
					action: 'query',
					prop: 'categories',
					titles: `Category:${CAL.currentCategory}`,
				},
				(result): void => {
					if (!result) {
						return;
					}
					CAL.parentCats = [];
					let cats: {title: string}[] = [];
					const {pages} = result.query;
					if (pages[-1]?.missing === '') {
						this.$resultList.html(`<span id="cat_a_lot_no_found">${CAL.msg('cat-not-found')}</span>`);
						this.$body.css('cursor', 'auto');
						this.createCatLinks('→', [CAL.currentCategory]);
						return;
					}
					// there should be only one, but we don't know its ID
					for (const id in pages) {
						if (!Object.hasOwn(pages, id)) {
							continue;
						}
						// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
						cats = pages[id]!.categories ?? [];
					}
					for (const cat of cats) {
						CAL.parentCats.push(cat.title.replace(/^[^:]+:/, ''));
					}
					CAL.counterCat++;
					if (CAL.counterCat === 2) {
						this.showCategoryList();
					}
				}
			);
		}
		getSubCats(): void {
			this.doAPICall(
				{
					action: 'query',
					list: 'categorymembers',
					cmtype: 'subcat',
					cmlimit: this.settings['subcatcount'],
					cmtitle: `Category:${CAL.currentCategory}`,
				},
				(result): void => {
					const cats: {title: string}[] = result?.query?.categorymembers || [];
					CAL.subCats = [];
					for (const cat of cats) {
						CAL.subCats.push(cat.title.replace(/^[^:]+:/, ''));
					}
					CAL.counterCat++;
					if (CAL.counterCat === 2) {
						this.showCategoryList();
					}
				}
			);
		}
		getCategoryList(): void {
			CAL.counterCat = 0;
			this.getParentCats();
			this.getSubCats();
		}
		updateCats(newcat: string): void {
			this.$body.css('cursor', 'wait');
			CAL.currentCategory = newcat;
			this.$resultList.html(`<div class="cat_a_lot_loading">${CAL.msg('loading')}</div>`);
			this.getCategoryList();
		}
		run(): void {
			if ($('.cat_a_lot_enabled').length) {
				this.makeClickable();
				this.$dataContainer.show();
				this.$container.resizable({
					handles: 'n',
					alsoResize: '#cat_a_lot_category_list',
					resize: ({currentTarget}): void => {
						$(currentTarget).css({
							left: '',
							top: '',
						});
						CAL.dialogHeight = $(currentTarget).height() ?? CAL.dialogHeight;
						this.$resultList.css({
							maxHeight: '',
							width: '',
						});
					},
				});
				this.$resultList.css({
					maxHeight: '450px',
				});
				if (CAL.isSearchMode) {
					this.updateCats('Pictures and images');
				} else {
					this.updateCats(CAL.CURRENT_CATEGROY);
				}
			} else {
				this.$dataContainer.hide();
				this.$container.resizable('destroy');
				// Unbind click listeners
				CAL.$labels.off('click.catALot');
			}
		}
		initSettings(): void {
			if (this.settings['watchlist']) {
				return;
			}
			const catALotPrefs: typeof window.CatALotPrefs = window.CatALotPrefs || {};
			for (const v of DEFAULT_SETTING) {
				this.settings[v.name] = catALotPrefs[v.name] || v.default;
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				v.value = this.settings[v.name];
				// Messages that can be used here:
				// * see messages.ts
				// * for more information
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				v.label = CAL.msg(v.label_i18n);
				if (v.select_i18n) {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					v.select = {};
					for (const key in v.select_i18n) {
						if (!Object.hasOwn(v.select_i18n, key)) {
							continue;
						}
						// Messages that can be used here:
						// * see messages.ts
						// * for more information
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore
						v.select[CAL.msg(key)] = v.select_i18n[key];
					}
				}
			}
		}
	}

	if (
		(CAL.CURRENT_NAMESPACE_NUMBER === -1 && WG_CANONICAL_SPECIAL_PAGE_NAME === 'Search') ||
		CAL.CURRENT_NAMESPACE_NUMBER === CAL.ENABLE_NAMESPACE
	) {
		if (CAL.CURRENT_NAMESPACE_NUMBER === -1) {
			CAL.isSearchMode = true;
		}
		/*! Cat-a-lot messages | CC-BY-SA-4.0 <qwbk.cc/H:CC-BY-SA-4.0> */
		catALotMessages();
		$(new CAL());
	}
};

export {catALot};
