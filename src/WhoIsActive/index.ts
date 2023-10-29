import {whoIsActive} from './core';

if (!(mw.config.get('wgNamespaceNumber') < 0)) {
	$(whoIsActive);
}
