import {WG_NAMESPACE_NUMBER} from './modules/constant';
import {getBody} from 'ext.gadget.Util';
import {whoIsActive} from './modules/core';

if (WG_NAMESPACE_NUMBER >= 0) {
	void getBody().then(($body: JQuery<HTMLBodyElement>) => {
		whoIsActive($body);
	});
}
