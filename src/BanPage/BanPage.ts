import {addPortletLink} from './modules/addPortletLink';
import {getBody} from 'ext.gadget.Util';

const {wgNamespaceNumber} = mw.config.get();

if (wgNamespaceNumber >= 0) {
	void getBody().then(addPortletLink);
}
