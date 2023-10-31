/**
 * Log filter script
 *
 * Created by Splarka
 * Amended by Mike.lifeguard & Lupo
 * Partially rewritten by DieBuche
 *
 * <li> element Filter Script, version [0.2]
 * Should currently work on all known skins (with a #contentSub or #topbar)
 *
 * mw.util.getUrl( mw.config.get( 'wgPageName' ) ) + '?' +
 * 'withJS=MediaWiki:Gadget-LogFilter.js&lifilter=1&lifilterexpr=TEST&lifiltercase&lifilterhilight&lifilterinv'
 */
import {filterLists} from './modules/core';

const filterListsLoad = () => {
	window.LogFilterInstalled = true;
	// When to enable all this
	if (
		mw.config.get('wgAction') === 'history' ||
		mw.util.getParamValue('lifilter') ||
		(mw.config.get('wgCanonicalSpecialPageName') &&
			/^(activeusers|checkuser|contributions|ipblocklist|linksearch|log|search|(uncategoriz|unus|want)ed(categori|templat)es|wantedfiles|(short|long|ancient|uncategorized|unwatched|wanted|protected|deadend|lonely|new)pages|fewestrevisions|withoutinterwiki|(double|broken)redirects|protectedtitles|crossnamespacelinks|recentchanges|categories|disambiguations|listredirects|globalusers|globalblocklist|listusers|watchlist|most(linked|revisions|categories)|nuke|whatlinkshere)$/i.test(
				mw.config.get('wgCanonicalSpecialPageName') || ''
			))
	) {
		filterLists.load();
	}
};

const logFilterLoad = () => {
	// Guard against double inclusions
	if (window.LogFilterInstalled) {
		return;
	}
	// End guard
	filterListsLoad();
};

// Load
$(logFilterLoad);
