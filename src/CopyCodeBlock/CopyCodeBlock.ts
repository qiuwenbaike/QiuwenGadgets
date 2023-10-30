import {copyCodeBlockLoad} from './module/core';

if (mw.config.get('wgAction') === 'view') {
	$(copyCodeBlockLoad);
}
