import type {CustomizeToolbar} from './modules/types';
import {getBody} from '~/util';

const customizeToolbar: CustomizeToolbar = (customizer) => {
	if (!mw.user.options.get('usebetatoolbar')) {
		return;
	}

	getBody().then(($body: JQuery<HTMLBodyElement>): void => {
		customizer.call($body.find('#wpTextbox1'));
	});
};

window.customizeToolbar = customizeToolbar;
