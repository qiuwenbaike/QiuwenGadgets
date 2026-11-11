// 本文件由 Navigation_popups 原版 core.js 的 shortcutkeys.js 段落拆分而来，保留原有实现。
import {getValueOf} from './options';
import {killPopup} from './actions';
import {pg} from './pg';
import {popupString} from './strings';

let lastPopupLinkSelected: HTMLAnchorElement | null = null;
const popupHandleKeypress = function popupHandleKeypress(evt: KeyboardEvent) {
	const keyCode = evt.keyCode;
	if (!keyCode || !pg.current.link || !pg.current.link.navpopup) {
		return;
	}
	if (keyCode === 27) {
		// escape
		killPopup();
		return false; // swallow keypress
	}
	const letter = String.fromCodePoint(keyCode);
	const links = pg.current.link.navpopup.mainDiv.querySelectorAll<HTMLAnchorElement>('A');
	let startLink = 0;
	let i;
	let j;
	if (lastPopupLinkSelected) {
		for (i = 0; i < links.length; ++i) {
			if (links[i] === lastPopupLinkSelected) {
				startLink = i;
			}
		}
	}
	for (j = 0; j < links.length; ++j) {
		i = (startLink + j + 1) % links.length;
		if (links[i]!.getAttribute('popupkey') === letter) {
			if (evt && evt.preventDefault) {
				evt.preventDefault();
			}
			links[i]!.focus();
			lastPopupLinkSelected = links[i]!;
			return false; // swallow keypress
		}
	}
	// pass keypress on
	if (document.oldPopupOnkeypress) {
		return document.oldPopupOnkeypress(evt);
	}
	return true;
};
const addPopupShortcuts = () => {
	if (document.onkeypress !== popupHandleKeypress) {
		document.oldPopupOnkeypress = document.onkeypress;
	}
	document.onkeypress = popupHandleKeypress;
};
const rmPopupShortcuts = () => {
	lastPopupLinkSelected = null;
	if (document.oldPopupOnkeypress && document.oldPopupOnkeypress === popupHandleKeypress) {
		// panic
		document.onkeypress = null; // () => {};
		return;
	}
	document.onkeypress = document.oldPopupOnkeypress;
};
const addLinkProperty = (html: string, property: any) => {
	// take "<a href=...>...</a> and add a property
	// not sophisticated at all, easily broken
	const i = html.indexOf('>');
	if (i === -1) {
		return html;
	}
	return `${html.slice(0, Math.max(0, i))} ${property}${html.slice(Math.max(0, i))}`;
};
const addPopupShortcut = (html: string, key: string) => {
	if (!getValueOf('popupShortcutKeys')) {
		return html;
	}
	const ret = addLinkProperty(html, `popupkey="${key}"`);
	if (key === ' ') {
		key = popupString('spacebar');
	}
	return ret.replace(/^(.*?)(title=")(.*?)(".*)$/i, `$1$2$3 [${key}]$4`);
};

export {addLinkProperty, addPopupShortcut, addPopupShortcuts, popupHandleKeypress, rmPopupShortcuts};
