// 本文件由 Navigation_popups 原版 core.js 的 mouseout.js 段落拆分而来，保留原有实现。
import {removeModifierKeyListener, restoreTitle} from './actions';
import {Navpopup} from './navpopup';
import {getValueOf} from './options';
import {pg} from './pg';

const fuzzyCursorOffMenus = (_x: number | undefined, _y: number | undefined, _fuzz: number, parent: HTMLElement) => {
	if (!parent) {
		return null;
	}
	const uls = parent.querySelectorAll('ul');
	for (const ul of uls) {
		if (ul.className === 'popup_menu' && ul.offsetWidth > 0) {
			return false;
		} // else { document.title+='.'; }
	}
	return true;
};
const checkPopupPosition = () => {
	// stop the popup running off the right of the screen
	// FIXME avoid pg.current.link
	if (pg.current.link && pg.current.link.navpopup) {
		pg.current.link.navpopup.limitHorizontalPosition();
	}
};
const mouseOutWikiLink = function mouseOutWikiLink(this: GlobalEventHandlers) {
	// console ('mouseOutWikiLink');
	// 实际绑定于 <a> 元素（见 actions.ts 的 a.onmouseout），此处收窄以访问扩展属性
	const self = this as HTMLAnchorElement;
	removeModifierKeyListener(self);
	if (self.navpopup === null || self.navpopup === undefined) {
		return;
	}
	if (!self.navpopup.isVisible()) {
		self.navpopup.banish();
		return;
	}
	restoreTitle(self);
	Navpopup.tracker.addHook(posCheckerHook(self.navpopup));
};
const posCheckerHook = (navpop: Navpopup) => {
	return () => {
		if (!navpop.isVisible()) {
			return true; /* remove this hook */
		}
		if (Navpopup.tracker.dirty) {
			return false;
		}
		const {x} = Navpopup.tracker;
		const {y} = Navpopup.tracker;
		const mouseOverNavpop =
			navpop.isWithin(x as number, y as number, navpop.fuzz) ||
			!fuzzyCursorOffMenus(x, y, navpop.fuzz, navpop.mainDiv);
		// FIXME it'd be prettier to do this internal to the Navpopup objects
		let t = getValueOf('popupHideDelay');
		if (t) {
			t *= 1000;
		}
		if (!t) {
			if (!mouseOverNavpop) {
				if (navpop.parentAnchor) {
					restoreTitle(navpop.parentAnchor);
				}
				navpop.banish();
				return true; /* remove this hook */
			}
			return false;
		}
		// we have a hide delay set
		const d = Date.now();
		if (!navpop.mouseLeavingTime) {
			navpop.mouseLeavingTime = d;
			return false;
		}
		if (mouseOverNavpop) {
			navpop.mouseLeavingTime = null;
			return false;
		}
		if (d - navpop.mouseLeavingTime > t) {
			navpop.mouseLeavingTime = null;
			navpop.banish();
			return true; /* remove this hook */
		}
		return false;
	};
};
const runStopPopupTimer = (navpop: Navpopup) => {
	// at this point, we should have left the link but remain within the popup
	// so we call this function again until we leave the popup.
	if (!navpop.stopPopupTimer) {
		navpop.stopPopupTimer = setInterval(posCheckerHook(navpop), 500);
		navpop.addHook(
			() => {
				clearInterval(navpop.stopPopupTimer);
			},
			'hide',
			'before'
		);
	}
};

export {checkPopupPosition, fuzzyCursorOffMenus, mouseOutWikiLink, posCheckerHook, runStopPopupTimer};
