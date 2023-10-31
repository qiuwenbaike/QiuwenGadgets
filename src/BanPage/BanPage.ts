import {WG_NAMESPACE_NUMBER} from '../constant';
import {addPortletLink} from './modules/addPortletLink';

$(function banPage(): void {
	if (WG_NAMESPACE_NUMBER < 0) {
		return;
	}

	addPortletLink();
});
