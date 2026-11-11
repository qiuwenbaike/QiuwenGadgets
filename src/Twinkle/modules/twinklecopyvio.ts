/*! Twinkle.js - twinklecopyvio.ts */
import {Morebits} from './ui/morebits';
import {footerLinks} from './utils/footerLinks';
import {mountLazyDialog} from './utils/lazyDialogs';
import {uls} from './utils/useUls';

/**
 * twinklecopyvio.ts: Copyvio module
 * Mode of invocation: Tab ("Copyvio")
 * Active on: Existing, non-special pages, except for file pages
 * with no local file which are not redirects
 * Config directives in: TwinkleConfig
 *
 * Dialog rendering and the submission/evaluation logic (`evaluate` and
 * `callbacks`) live in `ui/TwCopyvioDialog.vue`; this file provides the
 * module entry and the portlet link.
 */
export interface TwinkleCopyvio {
	(): void;
	callback: () => void;
}

declare global {
	interface TwinkleModules {
		copyvio?: TwinkleCopyvio;
	}
}

const twinklecopyvio = (() => {
	// Disable on:
	// * special pages
	// * non-existent pages
	// * non-local files, whether there is a local page or not (unneeded local pages of non-local files are eligible for CSD F2)
	// * file pages without actual files (these are eligible for CSD G8)
	if (
		mw.config.get('wgNamespaceNumber') < 0 ||
		!mw.config.get('wgArticleId') ||
		(mw.config.get('wgNamespaceNumber') === 6 &&
			(document.querySelector('#mw-sharedupload') ||
				(!document.querySelector('#mw-imagepage-section-filehistory') && !Morebits.isPageRedirect())))
	) {
		return;
	}
	Twinkle.addPortletLink(
		twinklecopyvio.callback,
		uls('侵权', '侵權'),
		'tw-copyvio',
		uls('提报侵权页面', '提報侵權頁面')
	);
}) as TwinkleCopyvio;

twinklecopyvio.callback = () => {
	mountLazyDialog('TwCopyvioDialog', {
		title: uls('提报侵权页面', '提報侵權頁面'),
		footerLinks: footerLinks('copyvio', uls('侵权设置', '侵權設定'), [], true),
	});
};

Twinkle.copyvio = twinklecopyvio;
Twinkle.addInitCallback(Twinkle.copyvio, 'copyvio');

export {};
