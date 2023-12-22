import {WG_NAMESPACE_NUMBER} from './modules/constant';
import {addPortletLink} from './modules/addPortletLink';

if (WG_NAMESPACE_NUMBER >= 0) {
	void addPortletLink();
}
