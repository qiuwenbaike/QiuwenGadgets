import {IS_LOG} from './modules/constant';
import {main} from './modules/core';

if (mw.config.get('wgAction') === 'history' || IS_LOG) {
	$(main);
}
