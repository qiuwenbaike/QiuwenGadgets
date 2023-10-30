import {core} from './modules/core';
import {deprecatedFunctions} from './modules/DeprecatedFunctions';

(function siteCommon(): void {
	if (window.SiteCommonInstalled) {
		return;
	}
	window.SiteCommonInstalled = true;
	$(core);
	deprecatedFunctions();
})();
