import {delay} from 'ext.gadget.Util';

const clearExpiredLocalStorage = async () => {
	while (true) {
		await mw.storage.clearExpired();

		await delay(60 * 1000);
	}
};

export {clearExpiredLocalStorage};
