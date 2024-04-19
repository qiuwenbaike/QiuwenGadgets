import * as OPTIONS from './options.json';
import {getCache, setCache} from './modules/cache';

(function wikicache(): void {
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}
	mw.config.set(OPTIONS.configKey, true);

	mw.hook('wikipage.editform').add(($editForm): void => {
		void (async () => {
			await getCache({$editForm});
			await setCache({$editForm});
		})();
	});
})();
