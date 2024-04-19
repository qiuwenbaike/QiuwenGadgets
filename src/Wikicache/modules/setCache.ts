import {AutoSaveObject} from './types';
import {delay} from 'ext.gadget.Util';
import {getMessage} from './i18n';
import {getWpTextbox1Content} from './wpTextbox1Content';
import {toastify} from 'ext.gadget.Toastify';

const setCache = async (cacheKey: string) => {
	while (true) {
		await delay(30 * 1000);
		const newSaveObject: AutoSaveObject = {
			date: new Date(),
			'input[name=wpSummary]': `${document.querySelector<HTMLInputElement>('input[name=wpSummary]')?.value}`,
			'textarea[name=wpTextbox1]': await getWpTextbox1Content(),
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
};

export {setCache};
