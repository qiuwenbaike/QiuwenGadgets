import {core} from './modules/core';
import {deprecatedFunctions} from './modules/deprecatedFunctions';

(function siteCommon(): void {
	if (window.SiteCommonInstalled) {
		return;
	}
	window.SiteCommonInstalled = true;
	$(core);
	deprecatedFunctions();
})();
