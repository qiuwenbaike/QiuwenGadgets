import {isLog, main} from './modules/core';

if (mw.config.get('wgAction') === 'history' || isLog) {
	$(main);
}
