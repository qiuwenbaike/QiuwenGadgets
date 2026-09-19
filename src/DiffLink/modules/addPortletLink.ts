import {type App as VueApp, createApp} from 'vue';
import App from '../App.vue';
import {addEventListenerWithRemover} from 'ext.gadget.Util';
import {getMessage} from './i18n';

/*!
 * 若想自定义复制结果中的文本可通过向自己的common.js中加入以下内容：
 *   window.DiffLink = ['版本差异', '固定版本'];
 * 若想使用默认值1，但自定值2，请将值1留空，如下例：
 *   window.DiffLink = ['', '固定版本'];
 */
const defaultTextArray: [string, string] = [getMessage('DiffVersion'), getMessage('PermanentVersion')];

const applyCustomText = (index: 0 | 1, value: unknown): void => {
	if (typeof value === 'string' && value.length > 0) {
		defaultTextArray[index] = value;
	}
};

if (Array.isArray(window.DiffLink)) {
	applyCustomText(0, window.DiffLink[0]);
	applyCustomText(1, window.DiffLink[1]);
}

let eventListener: ReturnType<typeof addEventListenerWithRemover> = {
	remove: (): void => {},
};

const openDialog = (items: {label: string; text: string}[]): void => {
	const root = document.createElement('div');
	document.body.append(root);

	const app: VueApp<Element> | null = createApp(App, {
		open: true,
		items,
		onClose: (): void => {
			app?.unmount();
			root.remove();
		},
	});
	app.mount(root);
};

const addPortletLink = ({
	text,
	tooltip,
	link,
	defaultTextArrayIndex,
	isPermaLink,
}: {
	text: string;
	tooltip: string;
	link: string;
	defaultTextArrayIndex: number;
	isPermaLink?: boolean;
}): void => {
	let element: HTMLLIElement | null = document.querySelector('#t-difflink');
	if (!element) {
		const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
		element = mw.util.addPortletLink(portletId, '#', text, 't-difflink', tooltip);
	}
	if (!element) {
		return;
	}

	const clickListener = (event: MouseEvent): void => {
		event.preventDefault();
		const hash: string = isPermaLink ? decodeURIComponent(location.hash) : '';
		const items = [
			{label: link, text: link},
			{label: `[[${link}${hash}]]`, text: `[[${link}${hash}]]`},
			{
				label: `[[${link}${hash}|${defaultTextArray[defaultTextArrayIndex]}]]`,
				text: `[[${link}${hash}|${defaultTextArray[defaultTextArrayIndex]}]]`,
			},
		];
		openDialog(items);
	};

	eventListener.remove();
	eventListener = addEventListenerWithRemover({
		target: (element.firstElementChild ?? element) as HTMLElement,
		type: 'click',
		listener: clickListener,
	});
};

export {addPortletLink};
