import * as OPTIONS from './options.json';
import type {AutoSaveObject} from './modules/types';
import {delay} from 'ext.gadget.Util';
import {getMessage} from './modules/i18n';
import {toastify} from 'ext.gadget.Toastify';

(async function wikicache(): Promise<void> {
	const wpSummary: HTMLInputElement | null = document.querySelector('input[name=wpSummary]');
	const wpTextbox1: HTMLTextAreaElement | null = document.querySelector('textarea[name=wpTextbox1]');

	if (mw.config.get(OPTIONS.configKey) || !wpSummary || !wpTextbox1) {
		return;
	}
	mw.config.set(OPTIONS.configKey, true);

	const {wgPageName} = mw.config.get();

	let cacheKey: string = `${OPTIONS.cacheKeyPrefix}${wgPageName}`;
	const section = document.querySelector<HTMLInputElement>('input[name=wpSection]')?.value;
	if (section) {
		cacheKey += `#${section}`;
	}

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const saveObject: Partial<AutoSaveObject> = mw.storage.getObject(cacheKey);
	if (saveObject) {
		if (saveObject['input[name=wpSummary]']) {
			wpSummary.value = saveObject['input[name=wpSummary]'];
		}

		if (saveObject['textarea[name=wpTextbox1]']) {
			if (wpTextbox1.value === saveObject['textarea[name=wpTextbox1]']) {
				mw.storage.remove(cacheKey);
			} else {
				const confirm = await OO.ui.confirm(getMessage('Restore changes?'), {
					actions: [
						{label: getMessage('Restore unsaved changes'), action: 'accept', flags: ['progressive']},
						{label: getMessage('Delete unsaved changes'), action: 'cancel', flags: ['destructive']},
					],
				});
				if (confirm) {
					wpTextbox1.value = saveObject['textarea[name=wpTextbox1]'];
				} else {
					mw.storage.remove(cacheKey);
				}
			}
		}
	}

	while (true) {
		await delay(30 * 1000);
		const newSaveObject: AutoSaveObject = {
			date: new Date(),
			'input[name=wpSummary]': wpSummary.value,
			'textarea[name=wpTextbox1]': wpTextbox1.value,
		};
		try {
			mw.storage.setObject(cacheKey, newSaveObject, 60 * 60 * 24 * 30 * 1000);
			toastify({
				text: getMessage('Change saved'),
				close: true,
				duration: 10 * 1000,
				gravity: 'top',
				position: 'right',
			});
		} catch (error) {
			console.error(error);
		}
	}
})();
