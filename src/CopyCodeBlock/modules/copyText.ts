import {getMessage} from './i18n';

/*!
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
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
					console.error('[CopyCodeBlock] Clipboard API and fallback copy failed:', error, fallbackError);
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
			tag: 'CopyCodeBlock',
		});
	} catch (error) {
		console.error('[CopyCodeBlock] Failed to copy text:', error);
		void mw.notify(getMessage('Failed'), {
			type: 'error',
			tag: 'CopyCodeBlock',
		});
	}
};

export {copyText};
