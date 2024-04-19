import * as OPTIONS from './options.json';
import {getCache} from './modules/getCache';
import {getCacheKey} from './modules/getCacheKey';
import {setCache} from './modules/setCache';

(function wikicache(): void {
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}
	mw.config.set(OPTIONS.configKey, true);

	const cacheKey = getCacheKey();

	void getCache(cacheKey);

	void (async () => {
		await setCache(cacheKey);
	})();
})();
