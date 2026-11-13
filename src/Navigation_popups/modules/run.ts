// 本文件由 Navigation_popups 原版 core.js 的 run.js 段落拆分而来，保留原有实现。
import {Navpopup} from './navpopup';
import {autoEdit} from './autoedit';
import {pg} from './pg';
import {posCheckerHook} from './mouseout';
import {setupPopups} from './init';
import {setupTooltips} from './actions';

const popups = (): void => {
	/* Bail if the gadget/script is being loaded twice */
	/* An element with id "pg" would add a window.pg property, ignore such property */
	if (window.pg && !(window.pg instanceof HTMLElement)) {
		return;
	}
	/* Export to global context */
	window.pg = pg;
	if (document.readyState === 'complete') {
		autoEdit();
	} else {
		// will setup popups
		$(window).on('load', autoEdit);
	}
	(() => {
		let once = true;
		const dynamicContentHandler = ($content: JQuery<HTMLElement>) => {
			// Try to detect the hook fired on initial page load and disregard
			// it, we already hook to onload (possibly to different parts of
			// page - it's configurable) and running twice might be bad. Ugly...
			if ($content.attr('id') === 'mw-content-text' && once) {
				once = false;
				return;
			}
			const registerHooksForVisibleNavpops = () => {
				for (let i = 0; pg.current.links && i < pg.current.links.length; i++) {
					const navpop = pg.current.links[i]!.navpopup;
					if (!navpop || !navpop.isVisible()) {
						continue;
					}
					Navpopup.tracker.addHook(posCheckerHook(navpop));
				}
			};
			const doIt = () => {
				registerHooksForVisibleNavpops();
				$content.each((_index: number, element: HTMLElement) => {
					element.ranSetupTooltipsAlready = false;
					setupTooltips(element);
				});
			};
			setupPopups(doIt);
		};
		// This hook is also fired after page load.
		mw.hook('wikipage.content').add(dynamicContentHandler);
		mw.hook('ext.echo.overlay.beforeShowingOverlay').add(($overlay) => {
			dynamicContentHandler($overlay.find('.mw-echo-state'));
		});
	})();
};

export {popups};
