import {whoIsActive} from './module/core';

if (!(mw.config.get('wgNamespaceNumber') < 0)) {
	$(whoIsActive);
}
