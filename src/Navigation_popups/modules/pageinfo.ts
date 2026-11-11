// 本文件由 Navigation_popups 原版 core.js 的 pageinfo.js 段落拆分而来，保留原有实现。
import {Title, isDisambig, stubCount} from './titles';
import {popupString, tprintf} from './strings';
import type {Dow} from './types';
import {getValueOf} from './options';
import {pg} from './pg';
import {upcaseFirst} from './tools';

const popupFilterPageSize = (data: any) => {
	return formatBytes(data.length);
};
const popupFilterCountLinks = (data: any) => {
	const num = countLinks(data);
	return `${String(num)}&nbsp;${num === 1 ? popupString('wikiLink') : popupString('wikiLinks')}`;
};
const popupFilterCountImages = (data: any) => {
	const num = countImages(data);
	return `${String(num)}&nbsp;${num === 1 ? popupString('image') : popupString('images')}`;
};
const popupFilterCountCategories = (data: any) => {
	const num = countCategories(data);
	return `${String(num)}&nbsp;${num === 1 ? popupString('category') : popupString('categories')}`;
};
const popupFilterLastModified = (_data: any, download: Dow) => {
	const lastmod = download.lastModified;
	const now = new Date();
	if (lastmod && getValueOf('popupLastModified')) {
		const age = Number(now) - Number(lastmod);
		return tprintf('%s old', [formatAge(age)]).replace(/ /g, '&nbsp;');
	}
	return '';
};
const formatAge = (age: any) => {
	// coerce into a number
	let a = 0 + age;
	const aa = a;
	const seclen = 1000;
	const minlen = 60 * seclen;
	const hourlen = 60 * minlen;
	const daylen = 24 * hourlen;
	const weeklen = 7 * daylen;
	const numweeks = (a - (a % weeklen)) / weeklen;
	a -= numweeks * weeklen;
	const sweeks = addunit(numweeks, 'week');
	const numdays = (a - (a % daylen)) / daylen;
	a -= numdays * daylen;
	const sdays = addunit(numdays, 'day');
	const numhours = (a - (a % hourlen)) / hourlen;
	a -= numhours * hourlen;
	const shours = addunit(numhours, 'hour');
	const nummins = (a - (a % minlen)) / minlen;
	a -= nummins * minlen;
	const smins = addunit(nummins, 'minute');
	const numsecs = (a - (a % seclen)) / seclen;
	a -= numsecs * seclen;
	const ssecs = addunit(numsecs, 'second');
	if (aa > 4 * weeklen) {
		return sweeks;
	}
	if (aa > weeklen) {
		return `${sweeks} ${sdays}`;
	}
	if (aa > daylen) {
		return `${sdays} ${shours}`;
	}
	if (aa > 6 * hourlen) {
		return shours;
	}
	if (aa > hourlen) {
		return `${shours} ${smins}`;
	}
	if (aa > 10 * minlen) {
		return smins;
	}
	if (aa > minlen) {
		return `${smins} ${ssecs}`;
	}
	return ssecs;
};
const addunit = (num: any, str: string) => {
	return `${num} ${num === 1 ? popupString(str) : popupString(`${str}s`)}`;
};
const runPopupFilters = (list: any, data: any, download: Dow) => {
	const ret = [];
	for (const element of list) {
		if (element && typeof element === 'function') {
			const s = element(data, download, download.owner.article);
			if (s) {
				ret.push(s);
			}
		}
	}
	return ret;
};
const getPageInfo = (data: any, download: Dow) => {
	if (!data || data.length === 0) {
		return popupString('Empty page');
	}
	const popupFilters = getValueOf('popupFilters') || [];
	const extraPopupFilters = getValueOf('extraPopupFilters') || [];
	const pageInfoArray = runPopupFilters([...popupFilters, ...extraPopupFilters], data, download);
	let pageInfo = pageInfoArray.join(', ');
	if (pageInfo !== '') {
		pageInfo = upcaseFirst(pageInfo) ?? pageInfo;
	}
	return pageInfo;
};
const countLinks = (wikiText: string) => {
	return wikiText.split('[[').length - 1;
};
const countImages = (wikiText: string) => {
	return (wikiText.split(pg.re.image).length - 1) / (pg.re.imageBracketCount + 1);
};
const countCategories = (wikiText: string) => {
	return (wikiText.split(pg.re.category).length - 1) / (pg.re.categoryBracketCount + 1);
};
const popupFilterStubDetect = (data: any, _download: any, article: Title) => {
	const counts = stubCount(data, article) as {real?: number; sect?: number};
	if (counts.real) {
		return popupString('stub');
	}
	if (counts.sect) {
		return popupString('section stub');
	}
	return '';
};
const popupFilterDisambigDetect = (data: any, _download: any, article: Title) => {
	if (!getValueOf('popupAllDabsStubs') && article.namespace()) {
		return '';
	}
	return isDisambig(data, article) ? popupString('disambig') : '';
};
const formatBytes = (num: any) => {
	return num > 949 ? Math.round(num / 100) / 10 + popupString('kB') : `${num}&nbsp;${popupString('bytes')}`;
};

export {
	addunit,
	countCategories,
	countImages,
	countLinks,
	formatAge,
	formatBytes,
	getPageInfo,
	popupFilterCountCategories,
	popupFilterCountImages,
	popupFilterCountLinks,
	popupFilterDisambigDetect,
	popupFilterLastModified,
	popupFilterPageSize,
	popupFilterStubDetect,
	runPopupFilters,
};
