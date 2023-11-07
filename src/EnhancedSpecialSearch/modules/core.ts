import {DOMAIN} from './constant';
import {getMessage} from './i18n';

type OptionData = {
	site: string;
	url?: string;
	origin?: boolean;
};

export const enhancedSpecialSearch = (): void => {
	const config: OptionData[] = [
		{site: getMessage('Qiuwen'), origin: true},
		{site: getMessage('Baidu'), url: `https://www.baidu.com/s?wd=site%3A${DOMAIN}%20$1`},
		{site: getMessage('Bing'), url: `https://www.bing.com/search?q=site%3A${DOMAIN}+$1`},
		{site: getMessage('Google'), url: `https://www.google.com/search?q=site%3A${DOMAIN}+$1`},
		{site: getMessage('Sogou'), url: `https://www.sogou.com/web?query=site%3A${DOMAIN}+$1`},
		{site: '360', url: `https://www.so.com/s?q=site%3A${DOMAIN}+$1`},
	];
	const createOption = ({site, url, origin}: OptionData): HTMLOptionElement => {
		const element: HTMLOptionElement = new Option(site, url, origin);
		if (origin) {
			element.dataset['origin'] = '1';
		}
		return element;
	};
	const createSelect = (): HTMLSelectElement => {
		const element: HTMLSelectElement = document.createElement('select');
		element.id = 'enhancedSpecialSearch';
		element.className = 'oo-ui-dropdownWidget-handle';
		element.style.width = 'auto';
		return element;
	};
	const toTarget = (url: string): void => {
		const element: HTMLAnchorElement = document.createElement('a');
		element.setAttribute('href', url);
		element.setAttribute('target', '_blank');
		element.setAttribute('rel', 'noopener noreferrer');
		element.click();
	};
	const onSumbit = (targetElement: HTMLElement, selectElement: HTMLSelectElement): void => {
		targetElement.addEventListener('submit', (event: SubmitEvent): void => {
			const inputElement: HTMLInputElement | null = targetElement.querySelector('[type="search"]');
			if (!inputElement) {
				return;
			}
			const optionElement: HTMLOptionElement = selectElement.querySelector('option:checked') as HTMLOptionElement;
			if (!optionElement.dataset['origin']) {
				event.preventDefault();
				toTarget(optionElement.value.replace('$1', encodeURIComponent(inputElement.value)));
			}
		});
	};
	const enhancedSpecialSearchMain = (_config: OptionData[]): void => {
		const searchElement: HTMLElement | null =
			document.getElementById('search') ?? document.getElementById('powersearch');
		const targetElement: HTMLElement | null = document.getElementById('mw-search-top-table');
		if (!searchElement || !targetElement) {
			return;
		}
		targetElement.setAttribute('style', 'display:flex;flex-wrap:wrap;align-items:center');
		const selectElement: HTMLSelectElement = createSelect();
		for (const [, optionData] of Object.entries(_config)) {
			selectElement.append(createOption(optionData));
		}
		targetElement.append(selectElement);
		onSumbit(searchElement, selectElement);
	};
	enhancedSpecialSearchMain(config);
};
