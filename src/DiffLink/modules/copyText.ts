import {getMessage} from './i18n';

const copyText = async (text: string): Promise<void> => {
	const copyWithExecCommand = (): void => {
		const helper = document.createElement('textarea');
		helper.value = text;
		helper.setAttribute('readonly', 'true');
		helper.style.position = 'fixed';
		helper.style.top = '-9999px';
		helper.style.left = '-9999px';
		document.body.append(helper);
		try {
			helper.select();
			if (!document.execCommand('copy')) {
				throw new Error('document.execCommand("copy") failed');
			}
		} finally {
			helper.remove();
		}
	};

	const copy = async (): Promise<void> => {
		if (navigator.clipboard && window.isSecureContext) {
			try {
				await navigator.clipboard.writeText(text);
				return;
			} catch (error) {
				try {
					copyWithExecCommand();
					return;
				} catch (fallbackError) {
					console.error('[DiffLink] Clipboard API and fallback copy failed:', error, fallbackError);
					throw fallbackError;
				}
			}
		}

		copyWithExecCommand();
	};

	try {
		await copy();
		void mw.notify(getMessage('Copied'), {
			type: 'success',
			tag: 'DiffLinks',
		});
	} catch (error) {
		console.error('[DiffLink] Failed to copy text:', error);
		void mw.notify(getMessage('Copy failed'), {
			type: 'error',
			tag: 'DiffLinks',
		});
	}
};

export {copyText};
