import {smoothTOC} from './modules/core';

(() => {
	if (!['gongbi', 'vector', 'vector-2022'].includes(mw.config.get('skin'))) {
		return;
	}

	$(smoothTOC);
})();
