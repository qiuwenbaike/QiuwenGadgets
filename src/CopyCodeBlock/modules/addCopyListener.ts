import {CLASS_NAME_COPY_BUTTON} from './constant';
import {getMessage} from './i18n';

const addCopyListener = ($pres: JQuery<HTMLPreElement>): void => {
	for (const pre of $pres) {
		const clipboard: ClipboardJS = new ClipboardJS(
			pre.querySelector(`.${CLASS_NAME_COPY_BUTTON}`) as HTMLSpanElement,
			{
				text: (): string => {
					return pre.textContent ?? '';
				},
			}
		);
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
	}
};

export {addCopyListener};
