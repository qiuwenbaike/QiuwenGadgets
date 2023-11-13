import {core} from './modules/core';
import {deprecatedFunctions} from './modules/deprecatedFunctions';
import {loadTippy} from './modules/tippy';

(function siteCommon(): void {
	if (window.SiteCommonInstalled) {
		return;
	}
	window.SiteCommonInstalled = true;

	$(core);
	deprecatedFunctions();
	loadTippy();
})();
