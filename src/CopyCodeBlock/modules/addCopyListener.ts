import {CLASS_COPY_BUTTON, NOTIFY_TAG} from './constant';
import {getMessage} from './i18n';

const addCopyListener = ($pres: JQuery<HTMLPreElement>): void => {
	for (const pre of $pres) {
		const clipboard: ClipboardJS = new ClipboardJS(pre.querySelector(`.${CLASS_COPY_BUTTON}`) as HTMLSpanElement, {
			text: (): string => {
				return pre.textContent ?? '';
			},
		});
		clipboard.on('success', (): void => {
			mw.notify(getMessage('Copied'), {tag: NOTIFY_TAG, type: 'success'});
		});
		clipboard.on('error', (): void => {
			mw.notify(getMessage('Failed'), {tag: NOTIFY_TAG, type: 'error'});
		});
	}
};

export {addCopyListener};
