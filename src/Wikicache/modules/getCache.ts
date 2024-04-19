import {getWpTextbox1Content, setWpTextbox1Content} from './wpTextbox1Content';
import type {AutoSaveObject} from './types';
import {getMessage} from './i18n';

const getCache = async (cacheKey: string) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const saveObject: Partial<AutoSaveObject> = mw.storage.getObject(cacheKey);

	if (!saveObject) {
		return;
	}

	const wpSummary: HTMLInputElement | null = document.querySelector('input[name=wpSummary]');
	if (saveObject['input[name=wpSummary]'] && wpSummary) {
		wpSummary.value = saveObject['input[name=wpSummary]'];
	}

	if (
		saveObject['textarea[name=wpTextbox1]'] &&
		!((await getWpTextbox1Content()) === saveObject['textarea[name=wpTextbox1]'])
	) {
		const confirm = await OO.ui.confirm(getMessage('Restore changes?'), {
			actions: [
				{label: getMessage('Restore unsaved changes'), action: 'accept', flags: ['progressive']},
				{label: getMessage('Not to restore'), action: 'cancel', flags: ['destructive']},
			],
		});
		if (confirm) {
			await setWpTextbox1Content(saveObject['textarea[name=wpTextbox1]']);
		}
	}
};

export {getCache};
