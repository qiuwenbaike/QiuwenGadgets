import {
	addTargetBlank,
	fixLocationHash,
	hideNewUsersLog,
	highLightRev,
	loadWithURL,
	noPermWarning,
	openSearchInNewTab,
	removeTitleFromPermalink,
	titleCleanUp,
	toggleLink,
	unihanPopup,
} from './modules/core';
import {deprecatedFunctions} from './modules/deprecatedFunctions';
import {loadTippy} from './modules/tippy';

(function siteCommon(): void {
	if (mw.config.get('wgSiteCommonInstalled')) {
		return;
	}
	mw.config.set('wgSiteCommonInstalled', true);

	// Core modules
	loadWithURL();
	$(noPermWarning);
	$(highLightRev);
	$(addTargetBlank);
	$(removeTitleFromPermalink);
	$(openSearchInNewTab);
	$(titleCleanUp);
	$(unihanPopup);
	$(fixLocationHash);
	$(hideNewUsersLog);
	$(toggleLink);

	// Deprecated functions
	deprecatedFunctions();

	// Tippy-related codes
	loadTippy();
})();
