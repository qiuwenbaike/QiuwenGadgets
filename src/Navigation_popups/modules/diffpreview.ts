// 本文件由 Navigation_popups 原版 core.js 的 diffpreview.js 段落拆分而来，保留原有实现。
import {type DiffRow, countCrossings, diff, diffString, isPairedRow, shortenDiffString} from './diff';
import type {Dow, Revision, WikiParams} from './types';
import {completedNavpopTask, pendingNavpopTask} from './actions';
import {getJsObj, simplePrintf} from './tools';
import {popupString, tprintf} from './strings';
import {setPopupHTML, setPopupTipsAndHTML} from './htmloutput';
import type {ApiResponse} from 'types-mediawiki/mw/Api';
import type {Navpopup} from './navpopup';
import type {Title} from './titles';
import {formattedDateTime} from './querypreview';
import {generalLink} from './links';
import {getMwApi} from './init';
import {getPageWithCaching} from './getpage';
import {getValueOf} from './options';
import {pg} from './pg';

// action=compare 响应（本模块消费的最小结构）
interface CompareResponse {
	compare: {fromrevid: number; torevid: number};
}
// prop=info&flagged 响应（本模块消费的最小结构）
interface FlaggedResponse {
	query: {pages: {flagged?: {stable_revid: number}}[]};
}
// revids 查询响应中单个页面
interface DiffApiPage {
	revisions?: Revision[];
}

const loadDiff = (article: Title, oldid: string | null, diff: string, navpop: Navpopup) => {
	navpop.diffData = {
		oldRev: {},
		newRev: {},
	};
	const api = getMwApi();
	const params: WikiParams = {
		action: 'compare',
		prop: ['ids', 'title'],
		smaxage: 600,
		maxage: 600,
	};
	if (article.title) {
		params.fromtitle = article.title;
	}
	switch (diff) {
		case 'cur':
			switch (oldid) {
				case null:
				case '':
				case 'prev':
					// this can only work if we have the title
					// cur -> prev
					params.torelative = 'prev';
					break;
				default:
					params.fromrev = oldid;
					params.torelative = 'cur';
					break;
			}
			break;
		case 'prev':
			if (oldid) {
				params.fromrev = oldid;
			}
			params.torelative = 'prev';
			break;
		case 'next':
			params.fromrev = oldid || 0;
			params.torelative = 'next';
			break;
		default:
			params.fromrev = oldid || 0;
			params.torev = diff || 0;
			break;
	}
	api.get(params).then((data: ApiResponse) => {
		const {compare} = data as CompareResponse;
		navpop.diffData.oldRev.revid = compare.fromrevid;
		navpop.diffData.newRev.revid = compare.torevid;
		addReviewLink(navpop, 'popupMiscTools');
		const go = () => {
			pendingNavpopTask(navpop);
			let url = `${pg.wiki.apiwikibase}?format=json&formatversion=2&action=query&`;
			url += `revids=${navpop.diffData.oldRev.revid}|${navpop.diffData.newRev.revid}`;
			url += '&prop=revisions&rvprop=ids|timestamp|content';
			getPageWithCaching(url, doneDiff, navpop);
			return true; // remove hook once run
		};
		if (navpop.visible || !getValueOf('popupLazyDownloads')) {
			go();
		} else {
			navpop.addHook(go, 'unhide', 'before', 'DOWNLOAD_DIFFS');
		}
	});
};
const addReviewLink = (navpop: Navpopup, target: string) => {
	if (!pg.user.canReview) {
		return;
	}
	// If 'newRev' is older than 'oldRev' than it could be confusing, so we do not show the review link.
	if (navpop.diffData.newRev.revid! <= navpop.diffData.oldRev.revid!) {
		return;
	}
	const params: WikiParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: ['info', 'flagged'],
		revids: navpop.diffData.oldRev.revid!,
	};
	getMwApi()
		.get(params)
		.then((data: ApiResponse) => {
			const {pages} = (data as FlaggedResponse).query;
			const stable_revid = (pages[0]!.flagged && pages[0]!.flagged.stable_revid) || 0;
			// The diff can be reviewed if the old version is the last reviewed version
			// TODO: Other possible conditions that we may want to implement instead of this one:
			// - old version is patrolled and the new version is not patrolled
			// - old version is patrolled and the new version is more recent than the last reviewed version
			if (stable_revid === navpop.diffData.oldRev.revid) {
				const a = document.createElement('a');
				a.innerHTML = popupString('mark patrolled');
				a.title = popupString('markpatrolledHint');
				a.onclick = () => {
					const params: WikiParams = {
						action: 'review',
						comment: tprintf('defaultpopupReviewedSummary', [
							navpop.diffData.oldRev.revid,
							navpop.diffData.newRev.revid,
						]),
						revid: navpop.diffData.newRev.revid,
					};
					getMwApi()
						.postWithToken('csrf', params)
						.done(() => {
							a.style.display = 'none';
							// TODO: Update current page and other already constructed popups
						})
						.fail(() => {
							void mw.notify(popupString('Could not marked this edit as patrolled'), {
								tag: 'popups',
								type: 'error',
							});
						});
				};
				setPopupHTML(a, target, navpop.idNumber, null, true);
			}
		});
};
const doneDiff = (download: Dow) => {
	if (!download.owner || !download.owner.diffData) {
		return;
	}
	const navpop = download.owner;
	completedNavpopTask(navpop);
	let pages: DiffApiPage[];
	let revisions: Revision[] = [];
	try {
		// Process the downloads
		({pages} = getJsObj(download.data!).query);
		for (const page of pages) {
			revisions = [...revisions, ...(page.revisions ?? [])];
		}
		for (const revision of revisions) {
			if (revision.revid === navpop.diffData.oldRev.revid) {
				navpop.diffData.oldRev.revision = revision;
			} else if (revision.revid === navpop.diffData.newRev.revid) {
				navpop.diffData.newRev.revision = revision;
			}
		}
	} catch {
		errlog('Could not get diff');
	}
	insertDiff(navpop);
};
const rmBoringLines = (a: DiffRow[], b: DiffRow[], context?: number): {a: DiffRow[]; b: DiffRow[]} => {
	if (context === undefined) {
		context = 2;
	}
	// this is fairly slow... i think it's quicker than doing a word-based diff from the off, though
	// 稀疏数组：已包含的行标记 1，弱包含（上下文）标记 0.5
	const aa: number[] = [];
	const aaa: DiffRow[] = [];
	const bb: number[] = [];
	const bbb: DiffRow[] = [];
	let i;
	let j;
	// first, gather all disconnected nodes in a and all crossing nodes in a and b
	for (i = 0; i < a.length; ++i) {
		const row = a[i]!;
		// 未配对行（字符串或 paired=false）与原版 !row.paired 语义一致
		if (!isPairedRow(row) || !row.paired) {
			aa[i] = 1;
		} else if (countCrossings(b, a, i, true)) {
			aa[i] = 1;
			bb[row.row] = 1;
		}
	}
	// pick up remaining disconnected nodes in b
	for (i = 0; i < b.length; ++i) {
		if (bb[i] === 1) {
			continue;
		}
		const brow = b[i]!;
		if (!isPairedRow(brow) || !brow.paired) {
			bb[i] = 1;
		}
	}
	// another pass to gather context: we want the neighbours of included nodes which are not
	// yet included we have to add in partners of these nodes, but we don't want to add context
	// for *those* nodes in the next pass
	for (i = 0; i < b.length; ++i) {
		if (bb[i] === 1) {
			for (j = Math.max(0, i - context); j < Math.min(b.length, i + context); ++j) {
				if (!bb[j]) {
					bb[j] = 1;
					const bRow = b[j]!;
					// 原版对字符串行取 row 为 undefined 写入垃圾键，无消费点，守卫后行为等价
					if (isPairedRow(bRow)) {
						aa[bRow.row] = 0.5;
					}
				}
			}
		}
	}
	for (i = 0; i < a.length; ++i) {
		if (aa[i] === 1) {
			for (j = Math.max(0, i - context); j < Math.min(a.length, i + context); ++j) {
				if (!aa[j]) {
					aa[j] = 1;
					const aRow = a[j]!;
					if (isPairedRow(aRow)) {
						bb[aRow.row] = 0.5;
					}
				}
			}
		}
	}
	for (i = 0; i < bb.length; ++i) {
		if (bb[i]! > 0) {
			// it's a row we need
			const bRow = b[i]!;
			if (isPairedRow(bRow)) {
				bbb.push(bRow.text); // joined; partner should be in aa
			} else {
				bbb.push(bRow);
			}
		}
	}
	for (i = 0; i < aa.length; ++i) {
		if (aa[i]! > 0) {
			// it's a row we need
			const aRow = a[i]!;
			if (isPairedRow(aRow)) {
				aaa.push(aRow.text);
			} else {
				// joined; partner should be in aa
				aaa.push(aRow);
			}
		}
	}
	return {
		a: aaa,
		b: bbb,
	};
};
const stripOuterCommonLines = (a: string[], b: string[], context: number) => {
	let i = 0;
	while (i < a.length && i < b.length && a[i] === b[i]) {
		++i;
	}
	let j = a.length - 1;
	let k = b.length - 1;
	while (j >= 0 && k >= 0 && a[j] === b[k]) {
		--j;
		--k;
	}
	return {
		a: a.slice(Math.max(0, i - 1 - context), Math.min(a.length + 1, j + context + 1)),
		b: b.slice(Math.max(0, i - 1 - context), Math.min(b.length + 1, k + context + 1)),
	};
};
const insertDiff = (navpop: Navpopup) => {
	// for speed reasons, we first do a line-based diff, discard stuff that seems boring, then
	// do a word-based diff
	// FIXME: sometimes this gives misleading diffs as distant chunks are squashed together
	let oldlines = navpop.diffData.oldRev.revision!.content.split('\n');
	let newlines = navpop.diffData.newRev.revision!.content.split('\n');
	let inner = stripOuterCommonLines(oldlines, newlines, getValueOf('popupDiffContextLines'));
	oldlines = inner.a;
	newlines = inner.b;
	let truncated = false;
	getValueOf('popupDiffMaxLines');
	if (oldlines.length > pg.option.popupDiffMaxLines || newlines.length > pg.option.popupDiffMaxLines) {
		// truncate
		truncated = true;
		inner = stripOuterCommonLines(
			oldlines.slice(0, pg.option.popupDiffMaxLines),
			newlines.slice(0, pg.option.popupDiffMaxLines),
			pg.option.popupDiffContextLines
		);
		oldlines = inner.a;
		newlines = inner.b;
	}
	const lineDiff = diff(oldlines, newlines);
	const lines2 = rmBoringLines(lineDiff.o, lineDiff.n);
	const oldlines2 = lines2.a;
	const newlines2 = lines2.b;
	let html = '<hr>';
	if (getValueOf('popupDiffDates')) {
		html += diffDatesTable(navpop);
		html += '<hr>';
	}
	html += shortenDiffString(
		diffString(oldlines2.join('\n'), newlines2.join('\n')),
		getValueOf('popupDiffContextCharacters')
	).join('<hr>');
	setPopupTipsAndHTML(
		html.split('\n').join('<br>') +
			(truncated ? `<hr><b>${popupString('Diff truncated for performance reasons')}</b>` : ''),
		'popupPreview',
		navpop.idNumber
	);
};
const diffDatesTable = (navpop: Navpopup) => {
	let html = '<table class="popup_diff_dates">';
	html += diffDatesTableRow(navpop.diffData.newRev.revision!, tprintf('New revision'));
	html += diffDatesTableRow(navpop.diffData.oldRev.revision!, tprintf('Old revision'));
	html += '</table>';
	return html;
};
const diffDatesTableRow = (revision: Revision, label: string) => {
	let txt = '';
	const lastModifiedDate = new Date(revision.timestamp);
	txt = formattedDateTime(lastModifiedDate);
	const revlink = generalLink({
		url: `${mw.config.get('wgScript')}?oldid=${revision.revid}`,
		text: label,
		title: label,
	});
	return simplePrintf('<tr><td>%s</td><td>%s</td></tr>', [revlink, txt]);
};

export {
	addReviewLink,
	diffDatesTable,
	diffDatesTableRow,
	doneDiff,
	insertDiff,
	loadDiff,
	rmBoringLines,
	stripOuterCommonLines,
};
