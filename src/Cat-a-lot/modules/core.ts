/* eslint-disable mediawiki/class-doc */
import * as OPTIONS from '../options.json';
import {
	API_ENTRY_POINT,
	CLASS_NAME,
	CLASS_NAME_CONTAINER,
	CLASS_NAME_CONTAINER_DATA,
	CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST,
	CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION,
	CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_NO_FOUND,
	CLASS_NAME_CONTAINER_DATA_MARK_COUNTER,
	CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT,
	CLASS_NAME_CONTAINER_DATA_SELECTIONS,
	CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED,
	CLASS_NAME_CURRENT_COUNTER,
	CLASS_NAME_FEEDBACK,
	CLASS_NAME_FEEDBACK_DONE,
	CLASS_NAME_LABEL,
	CLASS_NAME_LABEL_DONE,
	CLASS_NAME_LABEL_SELECTED,
	DEFAULT_SETTING,
	WG_CANONICAL_SPECIAL_PAGE_NAME,
	WG_FORMATTED_NAMESPACES,
	WG_NAMESPACE_IDS,
	WG_NAMESPACE_NUMBER,
	WG_TITLE,
	WG_WIKI_ID,
} from './constant';
import {DEFAULT_MESSAGES, setMessages} from './messages';
import type {MessageKey, Setting} from './types';

/**
 * Changes category of multiple files
 */
const catALot = (): void => {
	/*! Cat-a-lot | CC-BY-SA-4.0 <qwbk.cc/H:CC-BY-SA-4.0> */
	class CAL {
		static readonly MESSAGES: Record<MessageKey, string> = DEFAULT_MESSAGES;
		static readonly DEFAULT_SETTING: Setting = DEFAULT_SETTING;
		static readonly VERSION: string = OPTIONS.version;

		static readonly API_ENTRY_POINT: string = API_ENTRY_POINT;
		static readonly API_TAG: string = OPTIONS.apiTag;
		static readonly TARGET_NAMESPACE: number = OPTIONS.targetNamespace;

		static readonly CURRENT_CATEGROY: string = WG_TITLE;
		static readonly CURRENT_NAMESPACE_NUMBER: number = WG_NAMESPACE_NUMBER;

		static readonly WG_FORMATTED_NAMESPACES: Record<number, string> = WG_FORMATTED_NAMESPACES;
		static readonly WG_NAMESPACE_IDS: Record<string, number> = WG_NAMESPACE_IDS;

		static isAutoCompleteInit = false;
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
		static localCatName = WG_FORMATTED_NAMESPACES[CAL.TARGET_NAMESPACE] as string;

		static parentCats: string[] = [];
		static subCats: string[] = [];

		static settings: NonNullable<typeof window.CatALotPrefs> = {};
		static variantCache: Record<string, string[]> = {};

		static $counter: JQuery = $();
		static $progressDialog: JQuery = $();
		static $labels: JQuery = $();
		static $selectedLabels: JQuery = $();

		private readonly $body: JQuery<HTMLBodyElement>;
		private readonly $container: JQuery;
		private readonly $dataContainer: JQuery;
		private readonly $markCounter: JQuery;
		private readonly $resultList: JQuery;
		private readonly $searchInputContainer: JQuery;
		private readonly $searchInput: JQuery<HTMLInputElement>;
		private readonly $selections: JQuery;
		private readonly $selectAll: JQuery<HTMLAnchorElement>;
		private readonly $selectNone: JQuery<HTMLAnchorElement>;
		private readonly $head: JQuery;
		private readonly $link: JQuery<HTMLAnchorElement>;

		public constructor() {
			if (!mw.message('cat-a-lot-loading')) {
				mw.messages.set(CAL.MESSAGES);
			}

			CAL.initSettings();

			// The order here will directly affect the position of elements in the interface
			this.$body = $('body');
			this.$container = $('<div>').addClass(`${CLASS_NAME} ${CLASS_NAME_CONTAINER} noprint`).appendTo(this.$body);

			this.$dataContainer = $('<div>').addClass(CLASS_NAME_CONTAINER_DATA).appendTo(this.$container);
			this.$markCounter = $('<div>')
				.addClass(CLASS_NAME_CONTAINER_DATA_MARK_COUNTER)
				.appendTo(this.$dataContainer);
			this.$resultList = $('<div>')
				.addClass(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST)
				.appendTo(this.$dataContainer);

			this.$searchInputContainer = $('<div>').appendTo(this.$dataContainer);
			this.$searchInput = $<HTMLInputElement>('<input>')
				.addClass(CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT)
				.attr({
					placeholder: CAL.msg('enter-name'),
					type: 'text',
				})
				.appendTo(this.$searchInputContainer);

			this.$selections = $('<div>')
				.addClass(CLASS_NAME_CONTAINER_DATA_SELECTIONS)
				.text(CAL.msg('select'))
				.appendTo(this.$dataContainer);
			this.$selectAll = $<HTMLAnchorElement>('<a>').text(CAL.msg('all')).appendTo(this.$selections.append(' '));
			this.$selectNone = $<HTMLAnchorElement>('<a>')
				.text(CAL.msg('none'))
				.appendTo(this.$selections.append(' • '));

			this.$head = $('<div>').appendTo(this.$container);
			this.$link = $<HTMLAnchorElement>('<a>').text('Cat-a-lot').appendTo(this.$head);
			// End of UI elements

			const regexCat: RegExp = new RegExp(`^\\s*${CAL.localizedRegex(CAL.TARGET_NAMESPACE, 'Category')}:`, '');

			this.$searchInput
				.on('keypress', (event: JQuery.KeyPressEvent<HTMLInputElement>): void => {
					if (event.which === 13) {
						this.updateCats($(event.currentTarget).val().trim());
					}
				})
				.on(
					'input keyup',
					(event: JQuery.TriggeredEvent<HTMLInputElement> | JQuery.KeyUpEvent<HTMLInputElement>): void => {
						const oldVal: string = event.currentTarget.value;
						const newVal: string = oldVal.replace(regexCat, '');
						if (newVal !== oldVal) {
							event.currentTarget.value = newVal;
						}
					}
				);

			const initAutocomplete = (): void => {
				if (CAL.isAutoCompleteInit) {
					return;
				}
				CAL.isAutoCompleteInit = true;

				this.$searchInput.autocomplete({
					source: (request: {term: unknown}, response: (arg: JQuery<string>) => void): void => {
						this.doAPICall(
							{
								action: 'opensearch',
								namespace: CAL.TARGET_NAMESPACE,
								redirects: 'resolve',
								search: request.term,
							},
							(result): void => {
								if (result[1]) {
									response(
										$(result[1]).map((_index: number, item: string): string => {
											return item.replace(regexCat, '');
										})
									);
								}
							}
						);
					},
					position: {
						my: 'right bottom',
						at: 'right top',
						of: this.$searchInput,
					},
					appendTo: `.${CLASS_NAME_CONTAINER}`,
				});
			};
			this.$link.on('click', (event: JQuery.ClickEvent<HTMLAnchorElement>): void => {
				$(event.currentTarget).toggleClass(CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED);
				initAutocomplete();
				this.run();
			});

			this.$selectAll.on('click', (): void => {
				this.toggleAll(true);
			});
			this.$selectNone.on('click', (): void => {
				this.toggleAll(false);
			});

			if (CAL.isSearchMode) {
				this.$searchInput.val(mw.util.getParamValue('search') ?? '');
			}
		}

		static initSettings(): void {
			let catALotPrefs: typeof CAL.settings = window.CatALotPrefs ?? {};
			const typeOfCatALotPrefs = typeof catALotPrefs;
			if ((typeOfCatALotPrefs === 'object' && !Array.isArray(catALotPrefs)) || typeOfCatALotPrefs !== 'object') {
				catALotPrefs = {};
			}

			for (const settingKey of Object.keys(CAL.DEFAULT_SETTING) as (keyof Setting)[]) {
				const setting = CAL.DEFAULT_SETTING[settingKey];

				CAL.settings[settingKey] = catALotPrefs[settingKey] ?? setting.default;

				if (!setting.select_i18n) {
					continue;
				}

				setting.select = {};
				for (const messageKey of Object.keys(setting.select_i18n)) {
					const message: string = setting.select_i18n[messageKey] as keyof typeof setting.select_i18n;
					// Messages that can be used here:
					// * see messages.ts
					// * for more information
					setting.select[CAL.msg(messageKey)] = message;
				}
			}
		}

		static msg(key: string, ...args: string[]): string {
			key = `cat-a-lot-${key}`;
			// Messages that can be used here:
			// * see messages.ts
			// * for more information
			return args.length ? mw.message(key, ...args).parse() : mw.message(key).plain();
		}
		static localizedRegex(namespaceNumber: number, fallback: string): string {
			// Copied from HotCat, thanks Lupo.
			const wikiTextBlank: string =
				'[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+';
			const wikiTextBlankRE: RegExp = new RegExp(wikiTextBlank, 'g');
			const createRegexStr = (name: string | undefined): string => {
				if (!name?.length) {
					return '';
				}
				let regexName: string = '';
				for (let i: number = 0; i < name.length; i++) {
					const initial: string = name.slice(i, i + 1);
					const ll: string = initial.toLowerCase();
					const ul: string = initial.toUpperCase();
					regexName += ll === ul ? initial : `[${ll}${ul}]`;
				}
				return regexName.replace(/([$()*+.?\\^])/g, '\\$1').replace(wikiTextBlankRE, wikiTextBlank);
			};
			fallback = fallback.toLowerCase();
			const canonical: string | undefined = CAL.WG_FORMATTED_NAMESPACES[namespaceNumber]?.toLowerCase();
			let regexString: string = createRegexStr(canonical);
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
		updateSelectionCounter(): void {
			CAL.$selectedLabels = CAL.$labels.filter(`.${CLASS_NAME_LABEL_SELECTED}`);
			this.$markCounter.show().html(CAL.msg('files-selected', CAL.$selectedLabels.length.toString()));
		}
		toggleAll(select: boolean): void {
			// The following classes are used here:
			// * see ./constant.ts
			// * for more information
			CAL.$labels.toggleClass(CLASS_NAME_LABEL_SELECTED, select);
			this.updateSelectionCounter();
		}

		static findAllVariants(category: string): string[] {
			const results: string[] = [];
			const baseUrl: string = `${CAL.API_ENTRY_POINT}?action=parse&text=${encodeURIComponent(
				category
			)}&title=temp&format=json&variant=`;
			if (CAL.variantCache[category] !== undefined) {
				return CAL.variantCache[category] as string[];
			}
			for (const variant of ['zh-hans', 'zh-hant', 'zh-cn', 'zh-my', 'zh-sg', 'zh-hk', 'zh-mo', 'zh-tw']) {
				const result: string = $.ajax({url: baseUrl + variant, async: false}).responseJSON.parse.text['*'];
				const trimmedResult: string = $(result).eq(0).text().trim();
				if (!results.includes(trimmedResult)) {
					results.push(trimmedResult);
				}
			}
			CAL.variantCache[category] = results;
			return results;
		}
		static regexBuilder(category: string): RegExp {
			// Build a regexp string for matching the given category:
			const catName: string = CAL.localizedRegex(CAL.TARGET_NAMESPACE, 'Category');
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
			let i: number = 0;
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

		static markAsDone(
			$markedLabel: JQuery,
			targetCategory: string,
			mode: 'add' | 'copy' | 'move' | 'remove'
		): void {
			$markedLabel.addClass(CLASS_NAME_LABEL_DONE);

			switch (mode) {
				case 'add':
					$markedLabel.append(`<br>${CAL.msg('added-cat', targetCategory)}`);
					break;
				case 'copy':
					$markedLabel.append(`<br>${CAL.msg('copied-cat', targetCategory)}`);
					break;
				case 'move':
					$markedLabel.append(`<br>${CAL.msg('moved-cat', targetCategory)}`);
					break;
				case 'remove':
					$markedLabel.append(`<br>${CAL.msg('removed-cat')}`);
					break;
			}
		}
		static doCleanup(text: string): string {
			return CAL.settings.docleanup ? text.replace(/{{\s*[Cc]heck categories\s*(\|?.*?)}}/, '') : text;
		} // Remove {{Uncategorized}} (also with comment). No need to replace it with anything
		static removeUncat(text: string): string {
			return text.replace(/\{\{\s*[Uu]ncategorized\s*(\|?.*?)\}\}/, '');
		}
		displayResult(): void {
			this.$body.css({
				cursor: '',
				overflow: '',
			});
			this.$body.find(`.${CLASS_NAME_FEEDBACK}`).addClass(CLASS_NAME_FEEDBACK_DONE);

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
			markedLabel: ReturnType<typeof this.getMarkedLabels>[0],
			targetCategory: string,
			mode: 'add' | 'copy' | 'move' | 'remove'
		): void {
			const [markedLabelTitle, $markedLabel] = markedLabel;

			if (!result?.['query']) {
				CAL.connectionError.push(markedLabelTitle);
				this.updateCounter();
				return;
			}

			let originText: string = '';
			let starttimestamp: number = 0;
			let timestamp: number = 0;
			CAL.editToken = result['query'].tokens.csrftoken;
			const {pages} = result['query'];

			// there should be only one, but we don't know its ID
			for (const id in pages) {
				if (!Object.hasOwn(pages, id)) {
					continue;
				}
				originText = pages[id].revisions[0]['*'];
				({starttimestamp} = pages[id]);
				[{timestamp}] = pages[id].revisions;
			}

			const sourcecat: string = CAL.CURRENT_CATEGROY;
			// Check if that file is already in that category
			if (mode !== 'remove' && CAL.regexBuilder(targetCategory).test(originText)) {
				// If the new cat is already there, just remove the old one
				if (mode === 'move') {
					mode = 'remove';
				} else {
					CAL.alreadyThere.push(markedLabelTitle);
					this.updateCounter();
					return;
				}
			}

			// Fix text
			let text: string = originText;
			let summary: string;
			switch (mode) {
				case 'add':
					text += `\n[[${CAL.localCatName}:${targetCategory}]]\n`;
					summary = CAL.msg('summary-add').replace('$1', targetCategory);
					break;
				case 'copy':
					text = text.replace(
						CAL.regexBuilder(sourcecat),
						`[[${CAL.localCatName}:${sourcecat}$1]]\n[[${CAL.localCatName}:${targetCategory}$1]]`
					);
					summary = CAL.msg('summary-copy').replace('$1', sourcecat).replace('$2', targetCategory);
					// If category is added through template:
					if (originText === text) {
						text += `\n[[${CAL.localCatName}:${targetCategory}]]`;
					}
					break;
				case 'move':
					text = text.replace(CAL.regexBuilder(sourcecat), `[[${CAL.localCatName}:${targetCategory}$1]]`);
					summary = CAL.msg('summary-move').replace('$1', sourcecat).replace('$2', targetCategory);
					break;
				case 'remove':
					text = text.replace(CAL.regexBuilder(sourcecat), '');
					summary = CAL.msg('summary-remove').replace('$1', sourcecat);
					break;
			}

			if (text === originText) {
				CAL.notFound.push(markedLabelTitle);
				this.updateCounter();
				return;
			}

			// Remove uncat after we checked whether we changed the text successfully.
			// Otherwise we might fail to do the changes, but still replace {{uncat}}
			if (mode !== 'remove') {
				text = CAL.doCleanup(CAL.removeUncat(text));
			}

			this.doAPICall(
				{
					action: 'edit',
					token: CAL.editToken,
					tags: CAL.API_TAG,
					title: markedLabelTitle,
					assert: 'user',
					bot: true,
					basetimestamp: timestamp,
					watchlist: CAL.settings.watchlist,
					text,
					summary,
					starttimestamp,
				},
				(): void => {
					this.updateCounter();
				}
			);

			CAL.markAsDone($markedLabel, targetCategory, mode);
		}
		getContent(
			markedLabel: ReturnType<typeof this.getMarkedLabels>[0],
			targetCategory: string,
			mode: 'add' | 'copy' | 'move'
		): void {
			this.doAPICall(
				{
					action: 'query',
					meta: 'tokens',
					titles: markedLabel[0],
					prop: 'revisions',
					rvprop: 'content|timestamp',
				},
				(result): void => {
					this.editCategories(result, markedLabel, targetCategory, mode);
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
			const markedLabels: ReturnType<typeof this.getMarkedLabels> = [];
			CAL.$selectedLabels = CAL.$labels.filter(`.${CLASS_NAME_LABEL_SELECTED}`);
			CAL.$selectedLabels.each((_index: number, label: HTMLElement): void => {
				const $label: JQuery = $(label);
				const $labelLink: JQuery = $label.find('a[title]');
				const title: string =
					$labelLink.attr('title') ||
					CAL.getTitleFromLink($labelLink.attr('href')) ||
					CAL.getTitleFromLink($label.find('a').attr('href'));
				markedLabels.push([title, $label]);
			});
			return markedLabels;
		}
		showProgress(): void {
			this.$body.css({
				cursor: 'wait',
				overflow: 'hidden',
			});
			CAL.$progressDialog = $('<div>')
				.html(
					` ${CAL.msg('editing')}<span class="${CLASS_NAME_CURRENT_COUNTER}">${
						CAL.counterCurrent
					}</span>${CAL.msg('of')}${CAL.counterNeeded}`
				)
				.dialog({
					dialogClass: CLASS_NAME_FEEDBACK,
					minHeight: 90,
					height: 90,
					width: 450,
					modal: true,
					closeOnEscape: false,
					draggable: false,
					resizable: false,
				});
			this.$body.find(`.${CLASS_NAME_FEEDBACK} .ui-dialog-titlebar`).hide();
			this.$body.find(`.${CLASS_NAME_FEEDBACK} .ui-dialog-content`).height('auto');
			CAL.$counter = this.$body.find(`.${CLASS_NAME_CURRENT_COUNTER}`);
		}
		doSomething(targetCategory: string, mode: 'add' | 'copy' | 'move'): void {
			const markedLabels: ReturnType<typeof this.getMarkedLabels> = this.getMarkedLabels();
			if (!markedLabels.length) {
				mw.notify(CAL.msg('none-selected'), {
					tag: 'catALot',
				});
				return;
			}
			CAL.alreadyThere = [];
			CAL.connectionError = [];
			CAL.notFound = [];
			CAL.counterCurrent = 1;
			CAL.counterNeeded = markedLabels.length;
			this.showProgress();
			for (const markedLabel of markedLabels) {
				this.getContent(markedLabel, targetCategory, mode);
			}
		}
		addHere(targetCategory: string): void {
			this.doSomething(targetCategory, 'add');
		}
		copyHere(targetCategory: string): void {
			this.doSomething(targetCategory, 'copy');
		}
		moveHere(targetCategory: string): void {
			this.doSomething(targetCategory, 'move');
		}
		createCatLinks(symbol: string, categories: string[]): void {
			categories.sort();
			for (const category of categories) {
				const $tr: JQuery = $('<tr>').data('category', category);
				$tr.append($('<td>').text(symbol)).append(
					$('<td>').append(
						$<HTMLAnchorElement>('<a>')
							.text(category)
							.on('click', (event: JQuery.ClickEvent<HTMLAnchorElement>): void => {
								this.updateCats($(event.currentTarget).closest('tr').data('category'));
							})
					)
				);
				// Can't move to source category
				if (category !== CAL.CURRENT_CATEGROY && CAL.isSearchMode) {
					$tr.append(
						$('<td>').append(
							$<HTMLAnchorElement>('<a>')
								.addClass(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION)
								.text(CAL.msg('add'))
								.on('click', (event: JQuery.ClickEvent<HTMLAnchorElement>): void => {
									this.addHere($(event.currentTarget).closest('tr').data('category'));
								})
						)
					);
				} else if (category !== CAL.CURRENT_CATEGROY && !CAL.isSearchMode) {
					$tr.append(
						$('<td>').append(
							$<HTMLAnchorElement>('<a>')
								.addClass(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION)
								.text(CAL.msg('copy'))
								.on('click', (event: JQuery.ClickEvent<HTMLAnchorElement>): void => {
									this.copyHere($(event.currentTarget).closest('tr').data('category'));
								})
						),
						$('<td>').append(
							$<HTMLAnchorElement>('<a>')
								.addClass(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION)
								.text(CAL.msg('move'))
								.on('click', (event: JQuery.ClickEvent<HTMLAnchorElement>): void => {
									this.moveHere($(event.currentTarget).closest('tr').data('category'));
								})
						)
					);
				}
				this.$resultList.find('table').append($tr);
			}
		}
		showCategoryList(): void {
			this.$body.css('cursor', '');
			const currentCategories: string[] = [CAL.currentCategory];
			this.$resultList.empty();
			this.$resultList.append($('<table>'));
			this.createCatLinks('↑', CAL.parentCats);
			this.createCatLinks('→', currentCategories);
			this.createCatLinks('↓', CAL.subCats);
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
					titles: `Category:${CAL.currentCategory}`,
					prop: 'categories',
				},
				(result): void => {
					if (!result) {
						return;
					}
					CAL.parentCats = [];
					let cats: {title: string}[] = [];
					const {pages} = result.query;
					if (pages[-1]?.missing === '') {
						this.$body.css('cursor', '');
						this.$resultList.html(
							`<span class="${CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_NO_FOUND}">${CAL.msg(
								'cat-not-found'
							)}</span>`
						);
						this.createCatLinks('→', [CAL.currentCategory]);
						return;
					}
					// there should be only one, but we don't know its ID
					for (const id in pages) {
						if (!Object.hasOwn(pages, id)) {
							continue;
						}
						cats = pages[id].categories ?? [];
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
					cmlimit: CAL.settings.subcatcount,
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
		updateCats(cat: string): void {
			this.$body.css('cursor', 'wait');
			CAL.currentCategory = cat;
			this.$resultList.html(`<div>${CAL.msg('loading')}</div>`);
			this.getCategoryList();
		}

		findAllLabels(): void {
			// It's possible to allow any kind of pages as well but what happens if you click on "select all" and don't expect it
			if (CAL.isSearchMode) {
				CAL.$labels = this.$body.find('table.searchResultImage').find('tr>td').eq(1);
				if (CAL.settings.editpages) {
					CAL.$labels = CAL.$labels.add('div.mw-search-result-heading');
				}
			} else {
				CAL.$labels = this.$body
					.find('div.gallerytext')
					.add(this.$body.find('div#mw-category-media').find('li[class!="gallerybox"]'));
				if (CAL.settings.editpages) {
					const $pages: JQuery<HTMLLIElement> = this.$body
						.find('div#mw-pages, div#mw-subcategories')
						.find('li');
					CAL.$labels = CAL.$labels.add($pages);
				}
			}
		}
		makeClickable(): void {
			this.findAllLabels();
			CAL.$labels
				.addClass(CLASS_NAME_LABEL)
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				.onCatALotShiftClick((): void => {
					this.updateSelectionCounter();
				});
		}

		run(): void {
			if (this.$link.hasClass(CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED)) {
				this.makeClickable();
				this.$dataContainer.show();
				this.$container.resizable({
					alsoResize: this.$resultList,
					handles: 'n',
					resize: (event: JQueryEventObject): void => {
						const $currentTarget: JQuery = $(event.currentTarget) as JQuery;
						$currentTarget.css({
							left: '',
							top: '',
						});
						CAL.dialogHeight = $currentTarget.height() ?? CAL.dialogHeight;
						this.$resultList.css({
							maxHeight: '',
							width: '',
						});
					},
				});
				this.$resultList.css('max-height', '450px');
				if (CAL.isSearchMode) {
					this.updateCats('Pictures and images');
				} else {
					this.updateCats(CAL.CURRENT_CATEGROY);
				}
			} else {
				this.$dataContainer.hide();
				this.$container.resizable('destroy');
				this.$container.css('width', '');
				CAL.$labels.off('click.catALot');
			}
		}
	}

	if (
		(CAL.CURRENT_NAMESPACE_NUMBER === -1 && WG_CANONICAL_SPECIAL_PAGE_NAME === 'Search') ||
		CAL.CURRENT_NAMESPACE_NUMBER === CAL.TARGET_NAMESPACE
	) {
		if (CAL.CURRENT_NAMESPACE_NUMBER === -1) {
			CAL.isSearchMode = true;
		}
		/*! Cat-a-lot messages | CC-BY-SA-4.0 <qwbk.cc/H:CC-BY-SA-4.0> */
		setMessages();
		$(new CAL());
	}
};

export {catALot};
