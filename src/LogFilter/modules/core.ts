import App from './App.vue';
import type {FilterOptions} from './types';
import {MESSAGES} from './messages';
import {createApp} from 'vue';

const URL_LIFILTER: string | null = mw.util.getParamValue('lifilter');
const URL_LIFILTER_CASE: string | null = mw.util.getParamValue('lifiltercase');
const URL_LIFILTER_EXPR: string | null = mw.util.getParamValue('lifilterexpr');
const URL_LIFILTER_HILIGHT: string | null = mw.util.getParamValue('lifilterhilight');
const URL_LIFILTER_INV: string | null = mw.util.getParamValue('lifilterinv');

const {wgCanonicalNamespace, wgCanonicalSpecialPageName} = mw.config.get();

class LogFilter {
	private readonly rightsLogOnly =
		wgCanonicalNamespace === 'Special' &&
		wgCanonicalSpecialPageName === 'Log' &&
		(location.href.includes('type=rights') || location.href.includes('/rights'));
	private $body: JQuery<HTMLBodyElement>;

	public constructor($body: JQuery<HTMLBodyElement>) {
		this.$body = $body;
		mw.messages.set(MESSAGES);
	}

	public addPortletLink(): void {
		const portletLink: HTMLLIElement | null = mw.util.addPortletLink(
			this.$body.find('#p-cactions').length ? 'p-cactions' : 'p-tb',
			'#',
			LogFilter.msg('portlet-text'),
			'ca-rxfilter',
			LogFilter.msg('portlet-description')
		);
		if (portletLink) {
			$(portletLink)
				.find('a')
				.on('click', (event: JQuery.ClickEvent): void => {
					event.preventDefault();
					this.buildForm();
				});
		}
		if (URL_LIFILTER || URL_LIFILTER_EXPR) {
			this.buildForm();
		}
	}

	private buildForm(): void {
		const $pageTop: JQuery = this.$body.find('#contentSub, #topbar');
		if (!$pageTop.length) {
			return;
		}

		this.$body.find('#ca-rxfilter').hide();
		const root = document.createElement('div');
		$pageTop.after(root);

		const initialOptions: FilterOptions = {
			type: '0',
			invert: URL_LIFILTER_INV === '1',
			search: URL_LIFILTER_EXPR ?? '',
			caseSensitive: URL_LIFILTER_CASE !== '1',
		};

		createApp(App, {
			rightsLogOnly: this.rightsLogOnly,
			instructions: LogFilter.msg(this.rightsLogOnly ? 'rights-list-instructions' : 'other-list-instructions'),
			initialOptions,
			filterAtStartup: !!URL_LIFILTER_EXPR,
			highlightAtStartup: URL_LIFILTER_HILIGHT === '1',
			onFilter: (options: FilterOptions, highlight: boolean): void => {
				this.filterLi(options, highlight);
			},
		}).mount(root);
	}

	private filterLi(options: FilterOptions, highlight: boolean): void {
		const $listItems: JQuery = this.$body.find('#bodyContent').find('li');
		if (!$listItems.length) {
			return;
		}

		const {type, invert, search} = options;
		const flags: string = options.caseSensitive ? 'g' : 'ig';
		let regexRf: RegExp | undefined;
		try {
			regexRf = new RegExp(search, flags);
		} catch (error) {
			console.log(error);
		}

		const REGEX_RIGHT: RegExp = /^.*?user:.*?\sfrom\s(.*?)\sto\s(.*?)\s\u200E.*?$/i;

		for (const element of $listItems) {
			const $element: JQuery = $(element);
			let look: string = '';

			if (this.rightsLogOnly) {
				const oldr: string = $element.text().replace(REGEX_RIGHT, '$1');
				const newr: string = $element.text().replace(REGEX_RIGHT, '$2');
				const oldrl: string[] = oldr.split(', ');
				const newrl: string[] = newr.split(', ');
				for (let i: number = 0; i < oldrl.length; i++) {
					for (let j: number = 0; j < newrl.length; j++) {
						if (oldrl[i] === newrl[j]) {
							oldrl[i] = '';
							newrl[j] = '';
						}
					}
				}
				const remr: string = oldrl.join(',');
				const addr: string = newrl.join(',');
				switch (type) {
					case '0':
						look = addr;
						break;
					case '1':
						look = remr;
						break;
					case '2':
						look = `${remr} ${addr}`;
						break;
					case '3':
						look = `${oldr} ${newr}`;
						break;
				}
			} else {
				look = $element.text();
			}

			$element.css('background-color', '');
			$element.show();

			if (regexRf && ((look.search(regexRf) === -1 && invert) || (look.search(regexRf) !== -1 && !invert))) {
				if (highlight) {
					$element.css('background-color', '#ffff99');
				}
			} else if (!highlight) {
				$element.hide();
			}
		}
	}

	private static msg(key: string): string {
		key = `filter-${key}`;
		return mw.message(key).plain();
	}
}

export {LogFilter};
