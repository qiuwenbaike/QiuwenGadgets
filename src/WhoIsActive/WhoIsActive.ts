import {WG_NAMESPACE_NUMBER} from './modules/constant';
import {whoIsActive} from './modules/core';

if (WG_NAMESPACE_NUMBER >= 0) {
	$(whoIsActive);
}
