import {WG_NAMESPACE_NUMBER} from './modules/constant';
import {addPortletLink} from './modules/addPortletLink';
import {getBody} from '~/util';

if (WG_NAMESPACE_NUMBER >= 0) {
	void getBody().then(addPortletLink);
}
