import {copyCodeBlockLoad} from './core';

if (mw.config.get('wgAction') === 'view') {
	$(copyCodeBlockLoad);
}
