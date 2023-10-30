import {floatTOC, originToc, skin} from './modules/core';

(() => {
	if (mw.config.get('wgAction') !== 'view' || !['citizen', 'vector'].includes(skin) || !originToc) {
		return;
	}

	$(floatTOC);
})();
