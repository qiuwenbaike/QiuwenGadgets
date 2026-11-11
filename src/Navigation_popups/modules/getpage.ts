// 本文件由 Navigation_popups 原版 core.js 的 getpage.js 段落拆分而来，保留原有实现。
import {fakeDownload, startDownload} from './downloader';
import type {Dow} from './types';
import {pg} from './pg';

const getPageWithCaching = (url: string, onComplete: any, owner: any) => {
	log(`getPageWithCaching, url=${url}`);
	const i = findInPageCache(url);
	let d;
	if (i > -1) {
		d = fakeDownload(
			url,
			owner.idNumber,
			onComplete,
			pg.cache.pages[i].data,
			pg.cache.pages[i].lastModified,
			owner
		);
	} else {
		d = getPage(url, onComplete, owner);
		if (d && owner && owner.addDownload) {
			owner.addDownload(d);
			d.owner = owner;
		}
	}
};
const getPage = (url: string, onComplete: any, owner: any) => {
	log('getPage');
	const callback = (d: any) => {
		if (!d.aborted) {
			addPageToCache(d);
			onComplete(d);
		}
	};
	return startDownload(url, owner.idNumber, callback);
};
const findInPageCache = (url: string) => {
	for (let i = 0; i < pg.cache.pages.length; ++i) {
		if (url === pg.cache.pages[i].url) {
			return i;
		}
	}
	return -1;
};
const addPageToCache = (download: Dow) => {
	log(`addPageToCache ${download.url}`);
	const page = {
		url: download.url,
		data: download.data,
		lastModified: download.lastModified,
	};
	return pg.cache.pages.push(page);
};

export {addPageToCache, findInPageCache, getPage, getPageWithCaching};
