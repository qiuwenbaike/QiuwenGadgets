import {delay, getBody} from 'ext.gadget.Util';
import type {AutoSaveObject} from './modules/types';

void getBody().then(async function Wikicache($body: JQuery<HTMLBodyElement>): Promise<void> {
	const wpSummary: HTMLInputElement | undefined = $body.find<HTMLInputElement>('input[name=wpSummary]').get(0);
	const wpTextbox1: HTMLInputElement | undefined = $body.find<HTMLInputElement>('input[name=wpTextbox1]').get(0);
	if (!wpSummary || !wpTextbox1) {
		return;
	}

	const {wgPageName} = mw.config.get();

	let cacheKey: string = `wikicache-autosave-${wgPageName}`;
	const section = document.querySelector<HTMLInputElement>('input[name=wpSection]')?.value;
	if (section) {
		cacheKey += `#${section}`;
	}

	const saveObject: Partial<AutoSaveObject> = (mw.storage.getObject(cacheKey) as AutoSaveObject | null) ?? {};
	if (saveObject['input[name=wpSummary]']) {
		wpSummary.value = saveObject['input[name=wpSummary]'];
	}
	if (saveObject['input[name=wpTextbox1]']) {
		wpTextbox1.value = saveObject['input[name=wpTextbox1]'];
	}

	document.querySelector<HTMLFormElement>('#editform')?.addEventListener('submit', (): void => {
		mw.storage.remove(cacheKey);
	});

	while (true) {
		await delay(60 * 1000);
		const newSaveObject: AutoSaveObject = {
			_path: location.pathname + location.search,
			_date: new Date(),
			'input[name=wpSummary]': wpSummary.value,
			'input[name=wpTextbox1]': wpTextbox1.value,
		};
		mw.storage.setObject(cacheKey, newSaveObject, 60 * 60 * 24 * 30 * 1000);
	}
});
