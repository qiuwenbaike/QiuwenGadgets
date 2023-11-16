import {core} from './modules/core';
import {deprecatedFunctions} from './modules/deprecatedFunctions';
import {loadTippy} from './modules/tippy';

(function siteCommon(): void {
	if (mw.config.get('wgSiteCommonInstalled')) {
		return;
	}
	mw.config.set('wgSiteCommonInstalled', true);

	$(core);
	deprecatedFunctions();
	loadTippy();
})();
