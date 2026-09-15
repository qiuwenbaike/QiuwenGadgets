import {Clipboard} from 'ext.gadget.Clipboard';
import {getMessage} from './i18n';
import {toastify} from 'ext.gadget.Toastify';

const addCopyListener = (pre: HTMLPreElement, copyButton: HTMLButtonElement): void => {
	const clipboard = new Clipboard(copyButton, {
		text: (): string => {
			return pre.textContent ?? '';
		},
	});

	clipboard.on('success', (): void => {
		toastify(
			{
				text: getMessage('Copied'),
			},
			'success'
		);
	});

	clipboard.on('error', (): void => {
		toastify(
			{
				text: getMessage('Failed'),
			},
			'error'
		);
	});
};

export {addCopyListener};
