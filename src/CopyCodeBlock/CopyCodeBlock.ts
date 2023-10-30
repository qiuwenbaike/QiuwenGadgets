import {copyCodeBlockLoad} from './modules/core';

if (mw.config.get('wgAction') === 'view') {
	$(copyCodeBlockLoad);
}
