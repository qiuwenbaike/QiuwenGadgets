import {getMessage} from './i18n';

const copyText = (text: string): void => {
	(async () => {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(text);
				return;
			}
		} catch {}

		const helper = document.createElement('textarea');
		helper.value = text;
		helper.setAttribute('readonly', 'true');
		helper.style.position = 'fixed';
		helper.style.top = '-9999px';
		helper.style.left = '-9999px';
		document.body.append(helper);
		helper.select();
		document.execCommand('copy');
		helper.remove();
	})().then(() => {
		void mw.notify(getMessage('URL copied to clipboard') + text, {
			type: 'success',
			tag: 'DiffLinks',
		});
	});
};

export {copyText};
