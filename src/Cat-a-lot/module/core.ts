import {catALotMessages} from './messages';
type CAL_message_key =
	// Preferences
	// new: added 2012-09-19. Please translate.
	// Use user language for i18n
	| 'cat-a-lot-watchlistpref'
	| 'cat-a-lot-watch_pref'
	| 'cat-a-lot-watch_nochange'
	| 'cat-a-lot-watch_watch'
	| 'cat-a-lot-watch_unwatch'
	| 'cat-a-lot-minorpref'
	| 'cat-a-lot-editpagespref'
	| 'cat-a-lot-docleanuppref'
	| 'cat-a-lot-subcatcountpref'
	// Progress
	| 'cat-a-lot-loading'
	| 'cat-a-lot-editing'
	| 'cat-a-lot-of'
	| 'cat-a-lot-skipped-already'
	| 'cat-a-lot-skipped-not-found'
	| 'cat-a-lot-skipped-server'
	| 'cat-a-lot-all-done'
	| 'cat-a-lot-done'
	| 'cat-a-lot-added-cat'
	| 'cat-a-lot-copied-cat'
	| 'cat-a-lot-moved-cat'
	| 'cat-a-lot-removed-cat'
	| 'cat-a-lot-return-to-page'
	| 'cat-a-lot-cat-not-found'
	// as in 17 files selected
	| 'cat-a-lot-files-selected'
	// Actions
	| 'cat-a-lot-copy'
	| 'cat-a-lot-move'
	| 'cat-a-lot-add'
	| 'cat-a-lot-remove-from-cat'
	| 'cat-a-lot-enter-name'
	| 'cat-a-lot-select'
	| 'cat-a-lot-all'
	| 'cat-a-lot-none'
	| 'cat-a-lot-none-selected'
	// Summaries:
	| 'cat-a-lot-summary-add'
	| 'cat-a-lot-summary-copy'
	| 'cat-a-lot-summary-move'
	| 'cat-a-lot-summary-remove';
/**
 * @description Changes category of multiple files
 */
export const catALot = (): void => {
	/*! Cat-a-lot | CC-BY-SA-4.0 <qwbk.cc/H:CC-BY-SA-4.0> */
	if (mw.config.get('wgAction') !== 'view') {
		return;
	}

	class CAL {
		static readonly version: string = '5.0';
		static readonly apiUrl: string = mw.util.wikiScript('api');
		static readonly indexUrl: string = mw.config.get('wgScript');
		static readonly changeTag: string = 'Cat-a-lot';
		static readonly nsCat: number = 14;
		static readonly currentCat: string = mw.config.get('wgTitle');
		static readonly formattedNS: Record<number, string> = mw.config.get('wgFormattedNamespaces');
		static readonly ns: number = mw.config.get('wgNamespaceNumber');
		static readonly nsIDs: Record<string, number> = mw.config.get('wgNamespaceIds');
		static searchmode = false;
		static readonly msgs: Record<CAL_message_key, string> = {
			// Preferences
			// new: added 2012-09-19. Please translate.
			// Use user language for i18n
			'cat-a-lot-watchlistpref': 'Watchlist preference concerning files edited with Cat-A-Lot',
			'cat-a-lot-watch_pref': 'According to your general preferences',
			'cat-a-lot-watch_nochange': 'Do not change watchstatus',
			'cat-a-lot-watch_watch': 'Watch pages edited with Cat-A-Lot',
			'cat-a-lot-watch_unwatch': 'Remove pages while editing with Cat-A-Lot from your watchlist',
			'cat-a-lot-minorpref':
				"Mark edits as minor (if you generally mark your edits as minor, this won't change anything)",
			'cat-a-lot-editpagespref': 'Allow categorising pages (including categories) that are not files',
			'cat-a-lot-docleanuppref': 'Remove {{Check categories}} and other minor cleanup',
			'cat-a-lot-subcatcountpref': 'Sub-categories to show at most',
			// Progress
			'cat-a-lot-loading': 'Loading...',
			'cat-a-lot-editing': 'Editing page',
			'cat-a-lot-of': 'of ',
			'cat-a-lot-skipped-already':
				'The following {{PLURAL:$1|page was|$1 pages were}} skipped, because the page was already in the category:',
			'cat-a-lot-skipped-not-found':
				'The following {{PLURAL:$1|page was|$1 pages were}} skipped, because the old category could not be found:',
			'cat-a-lot-skipped-server':
				"The following {{PLURAL:$1|page|$1 pages}} couldn't be changed, since there were problems connecting to the server:",
			'cat-a-lot-all-done': 'All pages are processed.',
			'cat-a-lot-done': 'Done!',
			'cat-a-lot-added-cat': 'Added category $1',
			'cat-a-lot-copied-cat': 'Copied to category $1',
			'cat-a-lot-moved-cat': 'Moved to category $1',
			'cat-a-lot-removed-cat': 'Removed from category $1',
			'cat-a-lot-return-to-page': 'Return to page',
			'cat-a-lot-cat-not-found': 'Category not found.',
			// as in 17 files selected
			'cat-a-lot-files-selected': '{{PLURAL:$1|One file|$1 files}} selected.',
			// Actions
			'cat-a-lot-copy': 'Copy',
			'cat-a-lot-move': 'Move',
			'cat-a-lot-add': 'Add',
			'cat-a-lot-remove-from-cat': 'Remove from this category',
			'cat-a-lot-enter-name': 'Enter category name',
			'cat-a-lot-select': 'Select',
			'cat-a-lot-all': 'all',
			'cat-a-lot-none': 'none',
			'cat-a-lot-none-selected': 'No files selected!',
			// Summaries:
			'cat-a-lot-summary-add': '[[Help:Cat-a-lot|Cat-a-lot]]: Adding [[Category:$1]]',
			'cat-a-lot-summary-copy': '[[Help:Cat-a-lot|Cat-a-lot]]: Copying from [[Category:$1]] to [[Category:$2]]',
			'cat-a-lot-summary-move': '[[Help:Cat-a-lot|Cat-a-lot]]: Moving from [[Category:$1]] to [[Category:$2]]',
			'cat-a-lot-summary-remove': '[[Help:Cat-a-lot|Cat-a-lot]]: Removing from [[Category:$1]]',
		};
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		private catALotPrefs: Record<string, any>;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		private readonly settings: Record<string, any>;
		private readonly variantCache: Record<string, string[]>;

		private autoCompleteIsEnabled: boolean;
		private setHeight: number;

		private catCounter: number;
		private currentCategory: string;
		private edittoken: string;
		private localCatName: string;
		private parentCats: string[];
		private subCats: string[];

		private alreadyThere: string[];
		private connectionError: string[];
		private notFound: string[];
		private counterCurrent: number;
		private counterNeeded: number;

		private $labels: JQuery;
		private $selectedLabels: JQuery;
		private $progressDialog: JQuery;
		private $counter: JQuery;

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
				mw.messages.set(CAL.msgs);
			}

			this.catALotPrefs = {};
			this.settings = {};
			this.variantCache = {};

			this.autoCompleteIsEnabled = false;
			this.setHeight = 450;

			this.currentCategory = '';
			this.catCounter = 0;
			this.edittoken = '';
			this.parentCats = [];
			this.subCats = [];

			this.alreadyThere = [];
			this.connectionError = [];
			this.notFound = [];
			this.counterCurrent = 0;
			this.counterNeeded = 0;

			this.$labels = $();
			this.$selectedLabels = $();
			this.$progressDialog = $();
			this.$counter = $();

			this.initSettings();
			this.$body = $(document.body);
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
			const reCat = new RegExp(`^\\s*${CAL.localizedRegex(CAL.nsCat, 'Category')}:`, '');
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
			if (CAL.searchmode) {
				this.$searchInput.val(mw.util.getParamValue('search') ?? '');
			}
			const initAutocomplete = (): void => {
				if (this.autoCompleteIsEnabled) {
					return;
				}
				this.autoCompleteIsEnabled = true;
				this.$searchInput.autocomplete({
					source: (request: {term: unknown}, response: (arg: JQuery<string>) => void) => {
						this.doAPICall(
							{
								action: 'opensearch',
								search: request.term,
								redirects: 'resolve',
								namespace: CAL.nsCat,
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
			this.localCatName = CAL.formattedNS[CAL.nsCat] as string;
		}
		static msg(key: string, ...args: string[]): string {
			key = `cat-a-lot-${key}`;
			return args.length ? mw.message.apply(mw.message, [key, ...args]).parse() : mw.message(key).plain();
		}
		findAllLabels(): void {
			// It's possible to allow any kind of pages as well but what happens if you click on "select all" and don't expect it
			if (CAL.searchmode) {
				this.$labels = $('table.searchResultImage').find('tr>td').eq(1);
				if (this.settings['editpages']) {
					this.$labels = this.$labels.add('div.mw-search-result-heading');
				}
			} else {
				this.$labels = $('div.gallerytext').add($('div#mw-category-media').find('li[class!="gallerybox"]'));
				if (this.settings['editpages']) {
					const $pages: JQuery<HTMLLIElement> = $('div#mw-pages, div#mw-subcategories').find('li');
					this.$labels = this.$labels.add($pages);
				}
			}
		}
		updateSelectionCounter(): void {
			this.$selectedLabels = this.$labels.filter('.cat_a_lot_selected');
			this.$markCounter.show().html(CAL.msg('files-selected', this.$selectedLabels.length.toString()));
		}
		makeClickable(): void {
			this.findAllLabels();
			this.$labels
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				.catALotShiftClick(this.updateSelectionCounter)
				.addClass('cat_a_lot_label');
		}
		toggleAll(select: boolean): void {
			this.$labels.toggleClass('cat_a_lot_selected', select);
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
			const canonical: string | undefined = CAL.formattedNS[namespaceNumber]?.toLowerCase();
			let regexString = createRegexStr(canonical);
			if (fallback && canonical !== fallback) {
				regexString += `|${createRegexStr(fallback)}`;
			}
			for (const catName in CAL.nsIDs) {
				if (
					typeof catName === 'string' &&
					catName.toLowerCase() !== canonical &&
					catName.toLowerCase() !== fallback &&
					CAL.nsIDs[catName] === namespaceNumber
				) {
					regexString += `|${createRegexStr(catName)}`;
				}
			}
			return `(?:${regexString})`;
		}
		findAllVariants(category: string): string[] {
			const result: string[] = [];
			const baseUrl = `${CAL.apiUrl}?action=parse&text=${encodeURIComponent(
				category
			)}&title=temp&format=json&variant=`;
			if (this.variantCache[category] !== undefined) {
				return this.variantCache[category] as string[];
			}
			['zh-hans', 'zh-hant', 'zh-cn', 'zh-my', 'zh-sg', 'zh-hk', 'zh-mo', 'zh-tw'].forEach(
				(variant: string): void => {
					const r: string = $($.ajax({url: baseUrl + variant, async: false}).responseJSON.parse.text['*'])
						.eq(0)
						.text()
						.trim();
					if (!result.includes(r)) {
						result.push(r);
					}
				}
			);
			this.variantCache[category] = result;
			return result;
		}
		regexBuilder(category: string): RegExp {
			const catName: string = CAL.localizedRegex(CAL.nsCat, 'Category');
			// Build a regexp string for matching the given category:
			// trim leading/trailing whitespace and underscores
			category = category.replace(/^[\s_]+/, '').replace(/[\s_]+$/, '');
			// Find all variants
			const variants: string[] = this.findAllVariants(category);
			// escape regexp metacharacters (= any ASCII punctuation except _)
			const variantArray: string[] = [];
			variants.forEach((variant: string): void => {
				variant = mw.util.escapeRegExp(variant);
				// any sequence of spaces and underscores should match any other
				variant = variant.replace(/[\s_]+/g, '[\\s_]+');
				// Make the first character case-insensitive:
				const first: string = variant.slice(0, 1);
				if (first.toUpperCase() !== first.toLowerCase()) {
					variant = `[${first.toUpperCase()}${first.toLowerCase()}]${variant.slice(1)}`;
				}
				variantArray.push(variant);
			});
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
						this.connectionError.push(params['title']);
						this.updateCounter();
					}
				};
				$.ajax({
					headers: {
						'Api-User-Agent': `Qiuwen/1.1 (Cat-a-lot/${CAL.version}; ${mw.config.get('wgWikiID')})`,
					},
					url: CAL.apiUrl,
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
			document.body.style.cursor = 'auto';
			$('.cat_a_lot_feedback').addClass('cat_a_lot_done');
			$('.ui-dialog-content').height('auto');
			const $parent: JQuery = this.$counter.parent();
			$parent.html(`<h3>${CAL.msg('done')}</h3>`);
			$parent.append(`${CAL.msg('all-done')}<br>`);
			const $close: JQuery = $('<a>').text(CAL.msg('return-to-page'));
			$close.on('click', (): void => {
				this.$progressDialog.remove();
				this.toggleAll(false);
			});
			$parent.append($close);
			if (this.alreadyThere.length) {
				$parent.append(`<h5>${CAL.msg('skipped-already', this.alreadyThere.length.toString())}</h5>`);
				$parent.append(this.alreadyThere.join('<br>'));
			}
			if (this.notFound.length) {
				$parent.append(`<h5>${CAL.msg('skipped-not-found', this.notFound.length.toString())}</h5>`);
				$parent.append(this.notFound.join('<br>'));
			}
			if (this.connectionError.length) {
				$parent.append(`<h5>${CAL.msg('skipped-server', this.connectionError.length.toString())}</h5>`);
				$parent.append(this.connectionError.join('<br>'));
			}
		}
		updateCounter(): void {
			this.counterCurrent++;
			if (this.counterCurrent > this.counterNeeded) {
				this.displayResult();
			} else {
				this.$counter.text(this.counterCurrent);
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
				this.connectionError.push(file[0]);
				this.updateCounter();
				return;
			}
			let otext = '';
			let starttimestamp = 0;
			let timestamp = 0;
			this.edittoken = result['query'].tokens.csrftoken;
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
			const sourcecat: string = CAL.currentCat;
			// Check if that file is already in that category
			if (mode !== 'remove' && this.regexBuilder(targetcat).test(otext)) {
				// If the new cat is already there, just remove the old one
				if (mode === 'move') {
					mode = 'remove';
				} else {
					this.alreadyThere.push(file[0]);
					this.updateCounter();
					return;
				}
			}
			let text: string = otext;
			let comment: string;
			// Fix text
			switch (mode) {
				case 'add':
					text += `\n[[${this.localCatName}:${targetcat}]]\n`;
					comment = CAL.msg('summary-add').replace('$1', targetcat);
					break;
				case 'copy':
					text = text.replace(
						this.regexBuilder(sourcecat),
						`[[${this.localCatName}:${sourcecat}$1]]\n[[${this.localCatName}:${targetcat}$1]]`
					);
					comment = CAL.msg('summary-copy').replace('$1', sourcecat).replace('$2', targetcat);
					// If category is added through template:
					if (otext === text) {
						text += `\n[[${this.localCatName}:${targetcat}]]`;
					}
					break;
				case 'move':
					text = text.replace(this.regexBuilder(sourcecat), `[[${this.localCatName}:${targetcat}$1]]`);
					comment = CAL.msg('summary-move').replace('$1', sourcecat).replace('$2', targetcat);
					break;
				case 'remove':
					text = text.replace(this.regexBuilder(sourcecat), '');
					comment = CAL.msg('summary-remove').replace('$1', sourcecat);
					break;
			}
			if (text === otext) {
				this.notFound.push(file[0]);
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
					tags: CAL.changeTag,
					token: this.edittoken,
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
			this.$selectedLabels = this.$labels.filter('.cat_a_lot_selected');
			this.$selectedLabels.each((_index: number, element: HTMLElement): void => {
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
			document.body.style.cursor = 'wait';
			this.$progressDialog = $('<div>')
				.html(
					` ${CAL.msg('editing')}<span id="cat_a_lot_current">${this.counterCurrent}</span>${CAL.msg('of')}${
						this.counterNeeded
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
			this.$counter = $('#cat_a_lot_current');
		}
		doSomething(targetcat: string, mode: 'add' | 'copy' | 'move' | 'remove'): void {
			const files: [string, JQuery][] = this.getMarkedLabels();
			if (!files.length) {
				mw.notify(CAL.msg('none-selected'), {tag: 'catALot'});
				return;
			}
			this.alreadyThere = [];
			this.connectionError = [];
			this.notFound = [];
			this.counterCurrent = 1;
			this.counterNeeded = files.length;
			this.showProgress();
			files.forEach((file: [string, JQuery]): void => {
				this.getContent(file as [string, JQuery], targetcat, mode);
			});
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
			list.forEach((element: string): void => {
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
				if (element !== CAL.currentCat && CAL.searchmode) {
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
				} else if (element !== CAL.currentCat && !CAL.searchmode) {
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
			});
		}
		showCategoryList(): void {
			const thiscat: string[] = [this.currentCategory];
			this.$resultList.empty();
			this.$resultList.append($('<table>'));
			this.createCatLinks('↑', this.parentCats);
			this.createCatLinks('→', thiscat);
			this.createCatLinks('↓', this.subCats);
			document.body.style.cursor = 'auto';
			// Reset width
			this.$container.width('');
			this.$container.height('');
			this.$container.width(Math.min((this.$container.width() ?? 0) * 1.1 + 15, ($(window).width() ?? 0) - 10));
			this.$resultList.css({
				'max-height': `${this.setHeight}px`,
				height: '',
			});
		}
		getParentCats(): void {
			this.doAPICall(
				{
					action: 'query',
					prop: 'categories',
					titles: `Category:${this.currentCategory}`,
				},
				(result): void => {
					if (!result) {
						return;
					}
					this.parentCats = [];
					let cats: {title: string}[] = [];
					const {pages} = result.query;
					if (pages[-1]?.missing === '') {
						this.$resultList.html(`<span id="cat_a_lot_no_found">${CAL.msg('cat-not-found')}</span>`);
						document.body.style.cursor = 'auto';
						this.createCatLinks('→', [this.currentCategory]);
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
					type Cat = {title: string};
					cats.forEach((cat: Cat): void => {
						this.parentCats.push(cat.title.replace(/^[^:]+:/, ''));
					});
					this.catCounter++;
					if (this.catCounter === 2) {
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
					cmtitle: `Category:${this.currentCategory}`,
				},
				(result): void => {
					const cats: {title: string}[] = result?.query?.categorymembers || [];
					this.subCats = [];
					type Cat = {title: string};
					cats.forEach((cat: Cat): void => {
						this.subCats.push(cat.title.replace(/^[^:]+:/, ''));
					});
					this.catCounter++;
					if (this.catCounter === 2) {
						this.showCategoryList();
					}
				}
			);
		}
		getCategoryList(): void {
			this.catCounter = 0;
			this.getParentCats();
			this.getSubCats();
		}
		updateCats(newcat: string): void {
			document.body.style.cursor = 'wait';
			this.currentCategory = newcat;
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
						this.setHeight = $(currentTarget).height() ?? this.setHeight;
						this.$resultList.css({
							maxHeight: '',
							width: '',
						});
					},
				});
				this.$resultList.css({
					maxHeight: '450px',
				});
				if (CAL.searchmode) {
					this.updateCats('Pictures and images');
				} else {
					this.updateCats(CAL.currentCat);
				}
			} else {
				this.$dataContainer.hide();
				this.$container.resizable('destroy');
				// Unbind click listeners
				this.$labels.off('click.catALot');
			}
		}
		initSettings(): void {
			if (this.settings['watchlist']) {
				return;
			}
			const defaults = [
				{
					name: 'watchlist',
					default: 'preferences',
					label_i18n: 'watchlistpref',
					select_i18n: {
						watch_pref: 'preferences',
						watch_nochange: 'nochange',
						watch_watch: 'watch',
						watch_unwatch: 'unwatch',
					},
				},
				{
					name: 'minor',
					default: false,
					label_i18n: 'minorpref',
				},
				{
					name: 'editpages',
					default: true,
					label_i18n: 'editpagespref',
					forcerestart: true,
				},
				{
					name: 'docleanup',
					default: false,
					label_i18n: 'docleanuppref',
				},
				{
					name: 'subcatcount',
					default: 50,
					min: 5,
					max: 500,
					label_i18n: 'subcatcountpref',
					forcerestart: true,
				},
			];
			this.catALotPrefs = window.CatALotPrefs || {};
			for (const v of defaults) {
				this.settings[v.name] = this.catALotPrefs[v.name] || v.default;
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				v.value = this.settings[v.name];
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
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore
						v.select[CAL.msg(key)] = v.select_i18n[key];
					}
				}
			}
		}
	}

	if ((CAL.ns === -1 && mw.config.get('wgCanonicalSpecialPageName') === 'Search') || CAL.ns === CAL.nsCat) {
		if (CAL.ns === -1) {
			CAL.searchmode = true;
		}
		/*! Cat-a-lot messages | CC-BY-SA-4.0 <qwbk.cc/H:CC-BY-SA-4.0> */
		catALotMessages();
		$((): void => {
			new CAL();
		});
	}
};
