import * as OPTIONS from './options.json';
import {getCache, setCache} from './modules/cache';

(async function wikicache(): Promise<void> {
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}
	mw.config.set(OPTIONS.configKey, true);

	await getCache();
	await setCache();
})();
