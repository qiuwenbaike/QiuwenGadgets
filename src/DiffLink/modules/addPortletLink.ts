import {addEventListenerWithRemover} from 'ext.gadget.Util';
import {copyText} from './copyText';
import {getMessage} from './i18n';

interface CopyItem {
	text: string;
}

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

const openDialog = async (items: CopyItem[]): Promise<void> => {
	try {
		const moduleName = 'ext.gadget.CopyTextDialog';
		const require = await mw.loader.using(moduleName);
		const {showCopyTextDialog} = require(moduleName) as typeof import('ext.gadget.CopyTextDialog');

		showCopyTextDialog({
			title: getMessage('Diff'),
			items,
			copyLabel: getMessage('Copy'),
			closeLabel: getMessage('Close'),
			onCopy: copyText,
		});
	} catch (error) {
		// `ext.gadget.CopyTextDialog` may be unknown if the gadget is not deployed on this wiki.
		// Fall back to copying the first item (the raw link) directly.
		mw.log.warn('[DiffLink] ext.gadget.CopyTextDialog is unavailable; copying the first item instead.', error);
		const [firstItem] = items;
		if (firstItem) {
			await copyText(firstItem.text);
		}
	}
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
		const items: CopyItem[] = [
			{text: link},
			{text: `[[${link}${hash}]]`},
			{text: `[[${link}${hash}|${defaultTextArray[defaultTextArrayIndex]}]]`},
		];
		void openDialog(items);
	};

	eventListener.remove();
	eventListener = addEventListenerWithRemover({
		target: (element.firstElementChild ?? element) as HTMLElement,
		type: 'click',
		listener: clickListener,
	});
};

export {addPortletLink};
