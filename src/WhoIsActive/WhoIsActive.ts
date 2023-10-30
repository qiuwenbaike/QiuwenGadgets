import {whoIsActive} from './modules/core';

if (!(mw.config.get('wgNamespaceNumber') < 0)) {
	$(whoIsActive);
}
