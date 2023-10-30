import {core} from './script/core';
import {deprecatedFunctions} from './script/DeprecatedFunctions';

(function siteCommon(): void {
	if (window.SiteCommonInstalled) {
		return;
	}
	window.SiteCommonInstalled = true;
	$(core);
	deprecatedFunctions();
})();
