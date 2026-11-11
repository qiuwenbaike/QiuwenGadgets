// 本文件由 Navigation_popups 原版 core.js 的 images.js 段落拆分而来，保留原有实现。
import {anyChild, getJsObj, upcaseFirst} from './tools';
import type {Dow} from './types';
import type {Navpopup} from './navpopup';
import {getPageWithCaching} from './getpage';
import {getValueOf} from './options';
import {isValidImageName} from './titles';
import {pendingNavpopTask} from './actions';
import {pg} from './pg';
import {popTipsSoonFn} from './htmloutput';
import {popupString} from './strings';

const loadImage = (image: any, navpop: Navpopup): boolean | undefined => {
	if (typeof image.stripNamespace !== 'function') {
		void mw.notify('loadImages bad', {tag: 'popups', type: 'error'});
	}
	// API call to retrieve image info.
	if (!getValueOf('popupImages')) {
		return;
	}
	if (!isValidImageName(image.toString())) {
		return false;
	}
	const art = image.urlString();
	let url = `${pg.wiki.apiwikibase}?format=json&formatversion=2&action=query`;
	url += `&prop=imageinfo&iiprop=url|mime&iiurlwidth=${getValueOf('popupImageSizeLarge')}`;
	url += `&titles=${art}`;
	pendingNavpopTask(navpop);
	const callback = (d: any) => {
		popupsInsertImage(navpop.idNumber, navpop, d);
	};
	const go = () => {
		getPageWithCaching(url, callback, navpop);
		return true;
	};
	if (navpop.visible || !getValueOf('popupLazyDownloads')) {
		go();
	} else {
		navpop.addHook(go, 'unhide', 'after', 'DOWNLOAD_IMAGE_QUERY_DATA');
	}
	return false;
};
const popupsInsertImage = (id: any, _navpop: any, download: Dow): null | undefined => {
	log('popupsInsertImage');
	let imageinfo;
	try {
		const jsObj = getJsObj(download.data);
		const imagepage = anyChild(jsObj.query.pages);
		if (imagepage.imageinfo === undefined) {
			return;
		}
		[imageinfo] = imagepage.imageinfo;
	} catch {
		log('popupsInsertImage failed :(');
		return;
	}
	const popupImage = document.querySelector<HTMLImageElement>(`#popupImg${id}`);
	if (!popupImage) {
		log('could not find insertion point for image');
		return;
	}
	popupImage.width = getValueOf('popupImageSize');
	popupImage.style.display = 'inline';
	// Set the source for the image.
	if (imageinfo.thumburl) {
		popupImage.src = imageinfo.thumburl;
	} else if (imageinfo.mime.indexOf('image') === 0) {
		popupImage.src = imageinfo.url;
		log('a thumb could not be found, using original image');
	} else {
		log("fullsize imagethumb, but not sure if it's an image");
	}
	const a = document.querySelector<HTMLAnchorElement>(`#popupImageLink${id}`);
	if (a === null) {
		return null;
	}
	// Determine the action of the surrouding imagelink.
	const thumbAction = getValueOf('popupThumbAction');
	if (thumbAction === 'imagepage' && pg.current.article.namespaceId() !== pg.nsImageId) {
		a.href = imageinfo.descriptionurl;
		// FIXME: unreliable pg.idNumber
		popTipsSoonFn(`popupImage${id}`)();
		return null;
	}
	switch (thumbAction) {
		case 'imagepage':
		case 'sizetoggle':
			a.onclick = toggleSize as any;
			a.title = popupString('Toggle image size');
			return;
		case 'linkfull':
			a.href = imageinfo.url;
			a.title = popupString('Open full-size image');
	}
	return null;
};
const toggleSize = function toggleSize(this: any) {
	const self = this;
	if (!self) {
		void mw.notify('self is null :/', {tag: 'popups', type: 'error'});
		return;
	}
	const img = self.firstChild as HTMLElement;
	if (!img) {
		void mw.notify('img is null :/', {tag: 'popups', type: 'error'});
		return;
	}
	img.style.width = !img.style.width || img.style.width === '' ? '100%' : '';
};
const getValidImageFromWikiText = (wikiText: string) => {
	// nb in pg.re.image we're interested in the second bracketed expression
	// this may change if the regex changes :-(
	// let match=pg.re.image.exec(wikiText);
	let matched;
	let match;
	// strip html comments, used by evil bots :-(
	const t = removeMatchesUnless(wikiText, /(<!--[\S\s]*?-->)/, 1, /^<!--[^[]*popup/i);
	while ((match = pg.re.image.exec(t)) !== null) {
		// now find a sane image name - exclude templates by seeking {
		const m: any = match[2] || match[6];
		if (isValidImageName(m)) {
			matched = m;
			break;
		}
	}
	pg.re.image.lastIndex = 0;
	if (!matched) {
		return null;
	}
	return `${mw.config.get('wgFormattedNamespaces')[pg.nsImageId!]}:${upcaseFirst(matched)}`;
};
const removeMatchesUnless = (str: string, re1: any, parencount: any, re2: any) => {
	const split = str.split(re1);
	const c = parencount + 1;
	for (let i = 0; i < split.length; ++i) {
		if (i % c === 0 || re2.test(split[i]!)) {
			continue;
		}
		split[i] = '';
	}
	return split.join('');
};

export {getValidImageFromWikiText, loadImage, popupsInsertImage, removeMatchesUnless, toggleSize};
