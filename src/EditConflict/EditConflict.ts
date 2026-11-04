import {editConflict} from './modules/core';
import {getBody} from 'ext.gadget.Util';

const {wgAction, wgCurRevisionId} = mw.config.get();

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	if (['edit', 'submit'].includes(wgAction) && wgCurRevisionId) {
		void editConflict($body);
	}
});
