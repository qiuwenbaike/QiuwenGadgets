import {WG_NAMESPACE_NUMBER} from './modules/constant';
import {foldRef} from './modules/core';
import {getBody} from '~/util';

if (WG_NAMESPACE_NUMBER === 0) {
	void getBody().then(foldRef);
}
