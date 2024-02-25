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
import {tippyForCitizenHeader, tippyForExtension} from './modules/tippy';
import {deprecatedFunctions} from './modules/deprecatedFunctions';
import {getBody} from 'ext.gadget.Util';

(function siteCommon(): void {
	const configKey: string = 'gadget-SiteCommon_JS__Initialized';

	// Guard against double inclusions
	if (mw.config.get(configKey)) {
		return;
	}
	// Set guard
	mw.config.set(configKey, true);

	// Core modules
	loadWithURL();
	noPermWarning();
	fixLocationHash();

	void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
		// Core modules (need $.ready)
		highLightRev($body);
		addTargetBlank($body);
		removeTitleFromPermalink($body);
		openSearchInNewTab($body);
		titleCleanUp($body);
		unihanPopup($body);
		hideNewUsersLog($body);
		toggleLink($body);

		// Tippy-related codes (need $.ready)
		tippyForCitizenHeader($body);
	});

	// Deprecated functions
	deprecatedFunctions();

	// Tippy-related codes
	void tippyForExtension();
})();
