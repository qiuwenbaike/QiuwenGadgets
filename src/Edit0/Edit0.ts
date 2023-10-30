import {edit0} from './modules/core';

if (mw.config.get('wgAction') === 'view' && !(mw.config.get('wgNamespaceNumber') < 0)) {
	$(edit0);
}
