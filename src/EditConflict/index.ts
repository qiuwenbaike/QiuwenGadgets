import {editConflict} from './core';

(() => {
	if (!['edit', 'submit'].includes(mw.config.get('wgAction')) || mw.config.get('wgCurRevisionId') === 0) {
		return;
	}

	$(editConflict);
})();
