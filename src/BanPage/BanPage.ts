import {addPortletLink} from './modules/addPortletLink';
import {getBody} from 'ext.gadget.Util';

(function banPage() {
	const {wgNamespaceNumber, wgPageName} = mw.config.get();

	if (wgNamespaceNumber < 0 || wgNamespaceNumber === 14) {
		return;
	}

	if (
		['File:Banned_Images.svg', 'File:BSicon_.svg', 'Template:Void', 'Qiuwen:首页', 'Project:首页'].includes(
			wgPageName
		)
	) {
		return;
	}

	void getBody().then(addPortletLink);
})();
