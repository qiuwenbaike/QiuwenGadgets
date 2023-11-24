import {getMessage} from './modules/i18n';

/**
 * See <https://www.mediawiki.org/wiki/Compatibility#Browsers>
 *
 * Browsers that pass these checks get served our modern run-time. This includes all Grade A
 * browsers, and some Grade C and Grade X browsers.
 *
 * The following browsers are known to pass these checks:
 * - Chrome 63+
 * - Edge 79+
 * - Opera 50+
 * - Firefox 58+
 * - Safari 11.1+
 * - Mobile Safari 11.2+ (iOS 11+)
 * - Android 5.0+
 *
 * @return {boolean} User agent is compatible with MediaWiki JS
 */
const isCompatible = (): boolean => {
	return !!(
		'querySelector' in document &&
		// Ensure HTML 5 features (including Web Storage API)
		//
		// https://caniuse.com/#feat=namevalue-storage
		// https://blog.whatwg.org/this-week-in-html-5-episode-30
		'localStorage' in window &&
		// Ensure ES2015 grammar and runtime API (a.k.a. ES6)
		//
		// In practice, Promise.finally is a good proxy for overall ES6 support and
		// rejects most unsupporting browsers in one sweep. The feature itself
		// was specified in ES2018, however.
		// https://caniuse.com/promise-finally
		// Chrome 63+, Edge 18+, Opera 50+, Safari 11.1+, Firefox 58+, iOS 11+
		//
		(() => {
			try {
				// eslint-disable-next-line no-new, no-new-func
				new Function(
					'(function(){if(!!(typeof Promise==="function"&&Promise.prototype["finally"])){return true}})();'
				);
				return true;
			} catch {
				return false;
			}
		})() &&
		// ES6 Arrow Functions (with default params), this ensures
		// genuine syntax support for ES6 grammar, not just API coverage.
		//
		// https://caniuse.com/arrow-functions
		// Chrome 45+, Safari 10+, Firefox 22+, Opera 32+
		//
		// Based on Benjamin De Cock's snippet here:
		// https://gist.github.com/bendc/d7f3dbc83d0f65ca0433caf90378cd95
		(() => {
			try {
				// eslint-disable-next-line no-new, no-new-func
				new Function('(() => 0)()');
				return true;
			} catch {
				return false;
			}
		})() &&
		(() => {
			try {
				// eslint-disable-next-line no-new, no-new-func
				new Function('(a = 0) => a');
				return true;
			} catch {
				return false;
			}
		})() &&
		// ES6 RegExp.prototype.flags
		//
		// https://caniuse.com/mdn-javascript_builtins_regexp_flags
		// Edge 79+ (Chromium-based, rejects MSEdgeHTML-based Edge <= 18)
		//
		(() => {
			try {
				// eslint-disable-next-line no-new, no-new-func
				new Function('(function(){return /./g.flags === "g"})();');
				return true;
			} catch {
				return false;
			}
		})()
	);
};

if (!isCompatible() && !mw.cookie.get('hideIEWarning') && mw.config.get('wgPageName') !== 'Help:浏览器兼容性') {
	const toastifyInstance: ToastifyInstance = toastify(
		{
			node: $('<span>').html(getMessage()).get(0),
			duration: -1,
			onClick: (): void => {
				mw.cookie.set('hideIEWarning', '1', {
					expires: 60 * 60 * 24 * 365 * 1000,
				});
				toastifyInstance.hideToast();
			},
		},
		'warning'
	);
}
