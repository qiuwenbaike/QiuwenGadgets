type autoSaveObject = {
	_path: string;
	_date: Date;
	'input[name=wpTextbox1]'?: string;
	'input[name=wpSummary]'?: string;
};

import {WG_PAGE_NAME} from './constant';

let autoSaveId: NodeJS.Timeout | undefined;
const autosaveInterval: number = 60;

let cacheKey = `wikicache-autosave-${WG_PAGE_NAME}`;
const section = (document.querySelectorAll('input[name="wpSection"]')[0] as HTMLInputElement)?.value;
if (section) {
	cacheKey += `#${section}`;
}

const save = () => {
	const saveObject: autoSaveObject = {
		_path: location.pathname + location.search,
		_date: new Date(),
		'input[name=wpTextbox1]': (document.querySelector('input[name=wpTextbox1]') as HTMLTextAreaElement).value,
		'input[name=wpSummary]': (document.querySelector('input[name=wpSummary]') as HTMLInputElement).value,
	};
	mw.storage.remove(cacheKey);
	mw.storage.setObject(cacheKey, saveObject, 2592e3); // 30 days
};

const autoSave = () => {
	clearTimeout(autoSaveId);
	autoSaveId = setTimeout(() => {
		save();
		autoSave();
	}, autosaveInterval * 1000);
};

const onSubmit = () => {
	mw.storage.remove(cacheKey);
};

export const init = () => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const saveObject: autoSaveObject = mw.storage.getObject(cacheKey) ?? {};
	if (saveObject['input[name=wpTextbox1]']) {
		const wpTextbox1 = document.querySelector('input[name=wpTextbox1]') as HTMLTextAreaElement;
		wpTextbox1.value = saveObject['input[name=wpTextbox1]'];
	}
	if (saveObject['input[name=wpSummary]']) {
		const wpSummary = document.querySelector('input[name=wpSummary]') as HTMLInputElement;
		wpSummary.value = saveObject['input[name=wpSummary]'];
	}
	autoSave();
	document.querySelector('#editform')?.addEventListener('submit', onSubmit);
};
