/*! Twinkle.js - twinklefluff.ts */
import type {TwinkleGlobalBase} from './ui/twinkleGlobal';
import {uls} from './utils/useUls';

/**
 * twinklefluff.ts: Revert/rollback module
 * Mode of invocation: Links on contributions,
 * recent changes, history, and diff pages
 * Active on: Diff pages, history pages,
 * Special:RecentChanges(Linked), and Special:Contributions
 */

type RevertType = 'norm' | 'vand';

/** Elements of the `customRevertSummary` preference */
interface CustomRevertSummaryItem {
	label: string;
	value: string;
}

/** Params built by {@linkcode TwinkleFluffModule.revert} and enriched in `callbacks.main` */
interface RevertParams {
	type: RevertType;
	user: string | null;
	userHidden: boolean;
	pagename: string;
	revid: number;
	summary: string;
	count?: number;
	goodid?: string | null;
	gooduser?: string | null;
	gooduserHidden?: boolean;
	notifyUser?: boolean;
	vantimestamp?: string | null;
}

/** Params built by {@linkcode TwinkleFluffModule.revertToRevision} */
type RevertToRevisionParams = Partial<RevertParams> & {
	rev: number;
	summary: string;
};

type ApiQuery = Record<string, string | number | boolean | string[] | null | undefined>;

type StatusMessage = string | HTMLElement | (string | HTMLElement)[];

interface MorebitsStatusElement {
	error(message: StatusMessage): void;
	info(message?: StatusMessage): void;
	status(message: StatusMessage): void;
}

interface MorebitsApi<TParams> {
	params: TParams;
	statelem: MorebitsStatusElement;
	responseXML: Document;
	getXML(): Document;
	post(): void;
}

interface MorebitsGlobal {
	pageNameNorm: string;
	htmlNode(tag: string, content: string): HTMLElement;
	ip: {
		sanitizeIPv6(address: string): string;
	};
	string: {
		toUpperCaseFirstChar(text: string): string;
		safeReplace(text: string, find: string, replace: string): string;
	};
	status: {
		init(element?: HTMLElement | null): void;
		error(title: string, message?: StatusMessage): void;
		info(title: string, message?: StatusMessage): void;
		warn(title: string, message?: StatusMessage): void;
	};
	wiki: {
		actionCompleted: {
			redirect?: string;
			notice?: string;
		};
		api: new <TParams>(
			statusText: string,
			query: Record<string, unknown>,
			callback?: (apiobj: MorebitsApi<TParams>) => void,
			statusElement?: MorebitsStatusElement
		) => MorebitsApi<TParams>;
	};
}

interface TwinkleFluffLinkBuilder {
	spanTag(color: string, content: string): HTMLSpanElement;
	buildLink(color: string, text: string): HTMLAnchorElement;
	rollbackLinks(vandal?: string | null, inline?: boolean, rev?: number | string | null, page?: string): HTMLElement;
	restoreThisRevisionLink(revisionRef: number | string, inline?: boolean): HTMLElement;
}

interface TwinkleFluffAddLinks {
	contributions(): void;
	recentchanges(): void;
	history(): void;
	diff(): void;
	oldid(): void;
}

interface TwinkleFluffModule {
	(): void;
	trustedBots: string[];
	skipTalk: boolean | null;
	rollbackInPlace: boolean | null;
	hiddenName: string;
	linkBuilder: TwinkleFluffLinkBuilder;
	addLinks: TwinkleFluffAddLinks;
	disableLinks(parentNode: HTMLElement): void;
	revert(type: RevertType, vandal: string | null, rev?: number, page?: string): void;
	revertToRevision(oldrev: number): void;
	callbacks: {
		toRevision(apiobj: MorebitsApi<RevertToRevisionParams>): void;
		main(apiobj: MorebitsApi<RevertParams>): void;
		complete(apiobj: MorebitsApi<RevertParams | RevertToRevisionParams>): void;
	};
	formatSummary(builtInString: string, userName: string | null, customString?: string): string;
}

interface TwinkleGlobal extends TwinkleGlobalBase {
	changeTags?: string;
	getPref<T = unknown>(name: string): T;
	fluff?: TwinkleFluffModule;
}

declare const Twinkle: TwinkleGlobal;

const Morebits = (window as unknown as {Morebits: MorebitsGlobal}).Morebits;
const $body = $('body');

/** Read the value of the inline "custom revert summary" select, if present */
const getRevertSummary = (): string => {
	const select = document.querySelector<HTMLSelectElement>('select[name="revertsummary"]');
	return select?.value ?? '';
};

/**
 * Twinklefluff revert and antivandalism utility
 */
const twinklefluff = ((): void => {
	// Only proceed if the user can actually edit the page in question.
	// wgIsProbablyEditable should take
	// care of namespace/contentModel restrictions as well as explicit
	// protections; it won't take care of cascading or TitleBlacklist.
	if (mw.config.get('wgIsProbablyEditable')) {
		// wgDiffOldId included for clarity in if else loop
		if (mw.config.get('wgDiffNewId') || mw.config.get('wgDiffOldId')) {
			// Reload alongside the revision slider
			mw.hook('wikipage.diff').add(() => {
				twinklefluff.addLinks.diff();
			});
		} else if (
			mw.config.get('wgAction') === 'view' &&
			mw.config.get('wgRevisionId') &&
			mw.config.get('wgCurRevisionId') !== mw.config.get('wgRevisionId')
		) {
			twinklefluff.addLinks.oldid();
		} else if (mw.config.get('wgAction') === 'history') {
			twinklefluff.addLinks.history();
		}
	} else if (mw.config.get('wgNamespaceNumber') === -1) {
		twinklefluff.skipTalk = !Twinkle.getPref<boolean>('openTalkPageOnAutoRevert');
		twinklefluff.rollbackInPlace = Twinkle.getPref<boolean>('rollbackInPlace');
		if (mw.config.get('wgCanonicalSpecialPageName') === 'Contributions') {
			twinklefluff.addLinks.contributions();
		} else if (
			mw.config.get('wgCanonicalSpecialPageName') === 'Recentchanges' ||
			mw.config.get('wgCanonicalSpecialPageName') === 'Recentchangeslinked'
		) {
			// Reload with recent changes updates
			// structuredChangeFilters.ui.initialized is just on load
			mw.hook('wikipage.content').add((item) => {
				if (item.is('div')) {
					twinklefluff.addLinks.recentchanges();
				}
			});
		}
	}
}) as unknown as TwinkleFluffModule;

// A list of usernames, usually only bots, that vandalism revert is jumped
// over; that is, if vandalism revert was chosen on such username, then its
// target is on the revision before.  This is for handling quick bots that
// makes edits seconds after the original edit is made.  This only affects
// vandalism rollback; for good faith rollback, it will stop, indicating a bot
// has no faith, and for normal rollback, it will rollback that edit.
twinklefluff.trustedBots = [];
twinklefluff.skipTalk = null;
twinklefluff.rollbackInPlace = null;
// String to insert when a username is hidden
twinklefluff.hiddenName = uls('已隐藏的用户', '已隱藏的使用者');

// Consolidated construction of fluff links
twinklefluff.linkBuilder = {
	spanTag: (color: string, content: string): HTMLSpanElement => {
		const span = document.createElement('span');
		span.style.color = color;
		span.appendChild(document.createTextNode(content));
		return span;
	},
	buildLink: (color: string, text: string): HTMLAnchorElement => {
		const link = document.createElement('a');
		link.appendChild(twinklefluff.linkBuilder.spanTag('Black', '['));
		link.appendChild(twinklefluff.linkBuilder.spanTag(color, text));
		link.appendChild(twinklefluff.linkBuilder.spanTag('Black', ']'));
		link.href = '#';
		return link;
	},
	/**
	 * @param [vandal=null] - Username of the editor being reverted.
	 * Provide a falsey value if the username is hidden, defaults to null
	 * @param [inline] - True to create two links in a span, false
	 * to create three links in a div
	 * @param [rev] - Revision ID being reverted (optional)
	 * @param [page] - Page being reverted (optional)
	 */
	rollbackLinks: (
		vandal?: string | null,
		inline?: boolean,
		rev?: number | string | null,
		page?: string
	): HTMLElement => {
		vandal ||= null;
		const elem = inline ? 'span' : 'div';
		const revNode = document.createElement(elem);
		const revNumber = typeof rev === 'string' ? Number.parseInt(rev, 10) : (rev ?? undefined);
		if (revNumber) {
			revNode.setAttribute('id', `tw-revert${revNumber}`);
		} else {
			revNode.setAttribute('id', 'tw-revert');
		}
		const normNode = document.createElement('strong');
		const vandNode = document.createElement('strong');
		const normLink = twinklefluff.linkBuilder.buildLink('SteelBlue', '回退');
		const vandLink = twinklefluff.linkBuilder.buildLink('Red', uls('破坏', '破壞'));
		$(normLink).on('click', (e) => {
			e.preventDefault();
			twinklefluff.revert('norm', vandal, revNumber, page);
			twinklefluff.disableLinks(revNode);
		});
		$(vandLink).on('click', (e) => {
			e.preventDefault();
			twinklefluff.revert('vand', vandal, revNumber, page);
			twinklefluff.disableLinks(revNode);
		});
		vandNode.appendChild(vandLink);
		normNode.appendChild(normLink);
		const separator = inline ? ' ' : ' || ';
		revNode.appendChild(normNode);
		revNode.appendChild(document.createTextNode(separator));
		revNode.appendChild(vandNode);
		return revNode;
	},
	// Build [restore this revision] links
	restoreThisRevisionLink: (revisionRef: number | string, inline?: boolean): HTMLElement => {
		// If not a specific revision number, should be wgDiffNewId/wgDiffOldId/wgRevisionId
		const revision = typeof revisionRef === 'number' ? revisionRef : (mw.config.get(revisionRef) as number);
		const elem = inline ? 'span' : 'div';
		const revertToRevisionNode = document.createElement(elem);
		revertToRevisionNode.setAttribute('id', `tw-revert-to-${revision}`);
		revertToRevisionNode.style.fontWeight = 'bold';
		const revertToRevisionLink = twinklefluff.linkBuilder.buildLink('SaddleBrown', uls('恢复此版本', '恢復此版本'));
		$(revertToRevisionLink).on('click', (e) => {
			e.preventDefault();
			twinklefluff.revertToRevision(revision);
		});
		if (inline) {
			revertToRevisionNode.appendChild(document.createTextNode(' '));
		}
		revertToRevisionNode.appendChild(revertToRevisionLink);
		return revertToRevisionNode;
	},
};

twinklefluff.addLinks = {
	contributions: (): void => {
		// $('sp-contributions-footer-anon-range') relies on the fmbox
		// id in [[MediaWiki:Sp-contributions-footer-anon-range]] and
		// is used to show rollback/vandalism links for IP ranges
		const isRange = !!$body.find('#sp-contributions-footer-anon-range')[0];
		if (mw.config.exists('wgRelevantUserName') || isRange) {
			// Get the username these contributions are for
			let username = mw.config.get('wgRelevantUserName');
			if (
				Twinkle.getPref<string[]>('showRollbackLinks').includes('contribs') ||
				(mw.config.get('wgUserName') !== username &&
					Twinkle.getPref<string[]>('showRollbackLinks').includes('others')) ||
				(mw.config.get('wgUserName') === username &&
					Twinkle.getPref<string[]>('showRollbackLinks').includes('mine'))
			) {
				const $list = $body.find('#mw-content-text').find('ul li:has(span.mw-uctop):has(.mw-changeslist-diff)');
				$list.each((_key, current) => {
					// revid is also available in the href of both
					// .mw-changeslist-date or .mw-changeslist-diff
					const page = $(current).find('.mw-contributions-title').text();
					// Get username for IP ranges (wgRelevantUserName is null)
					if (isRange) {
						// The :not is possibly unnecessary, as it appears that
						// .mw-userlink is simply not present if the username is hidden
						username = $(current).find('.mw-userlink:not(.history-deleted)').text();
					}
					// It's unlikely, but we can't easily check for revdel'd usernames
					// since only a strong element is provided, with no easy selector
					current.appendChild(
						twinklefluff.linkBuilder.rollbackLinks(username, true, current.dataset['mwRevid'], page)
					);
				});
			}
		}
	},
	recentchanges: (): void => {
		if (
			(mw.config.get('wgCanonicalSpecialPageName') === 'Recentchanges' &&
				Twinkle.getPref<string[]>('showRollbackLinks').includes('recentchanges')) ||
			(mw.config.get('wgCanonicalSpecialPageName') === 'Recentchangeslinked' &&
				Twinkle.getPref<string[]>('showRollbackLinks').includes('recentchangeslinked'))
		) {
			// Latest and revertable (not page creations, logs, categorizations, etc.)
			let $list = $body.find('.mw-changeslist .mw-changeslist-last.mw-changeslist-src-mw-edit');
			// Exclude top-level header if "group changes" preference is used
			// and find only individual lines or nested lines
			$list = $list
				.not('.mw-rcfilters-ui-highlights-enhanced-toplevel')
				.find('.mw-changeslist-line-inner, td.mw-enhanced-rc-nested');
			$list.each((_key, current) => {
				const href = $(current).find('.mw-changeslist-diff').attr('href');
				const rev = mw.util.getParamValue('diff', href ?? undefined);
				if (rev && current.querySelector(`#tw-revert${rev}`)) {
					return;
				}
				if (!rev && current.querySelector('#tw-revert')) {
					return;
				}

				// The :not is possibly unnecessary, as it appears that
				// .mw-userlink is simply not present if the username is hidden
				const vandal = $(current).find('.mw-userlink:not(.history-deleted)').text();
				const page = current.dataset['targetPage'];
				current.appendChild(twinklefluff.linkBuilder.rollbackLinks(vandal, true, rev, page));
			});
		}
	},
	history: (): void => {
		if (Twinkle.getPref<string[]>('showRollbackLinks').includes('history')) {
			// All revs
			const histList = $body.find('#pagehistory li').toArray();
			// On first page of results, so add revert/rollback
			// links to the top revision
			if (!$body.find('a.mw-firstlink').length) {
				const first = histList.shift();
				if (!first) {
					return;
				}
				const vandal = $(first).find('.mw-userlink:not(.history-deleted)').text();
				// Check for first username different than the top user,
				// only apply rollback links if/when found
				// for faster than every
				for (const item of histList) {
					if ($(item).find('.mw-userlink').text() !== vandal) {
						first.appendChild(twinklefluff.linkBuilder.rollbackLinks(vandal, true));
						break;
					}
				}
			}
			// oldid
			for (const rev of histList) {
				// From restoreThisRevision, non-transferable
				// If the text has been revdel'd, it gets wrapped in a span with .history-deleted,
				// and href will be undefined (and thus oldid is NaN)
				const href = rev.querySelector<HTMLAnchorElement>('.mw-changeslist-date')?.href;
				const oldid = Number.parseInt(mw.util.getParamValue('oldid', href ?? undefined) ?? '', 10);
				if (!Number.isNaN(oldid)) {
					rev.appendChild(twinklefluff.linkBuilder.restoreThisRevisionLink(oldid, true));
				}
			}
		}
	},
	diff: (): void => {
		// Autofill user talk links on diffs with vanarticle for easy warning, but don't autowarn
		const warnFromTalk = (xtitle: 'otitle' | 'ntitle'): void => {
			const talkLink = $(`#mw-diff-${xtitle}2 .mw-usertoollinks a`).first();
			if (talkLink.length) {
				let extraParams = `vanarticle=${mw.util.rawurlencode(Morebits.pageNameNorm)}&noautowarn=true`;
				// diffIDs for vanarticlerevid
				extraParams += '&vanarticlerevid=';
				extraParams += String(
					xtitle === 'otitle' ? mw.config.get('wgDiffOldId') : mw.config.get('wgDiffNewId')
				);
				const href = talkLink.attr('href');
				if (href !== undefined) {
					if (href.includes('?')) {
						talkLink.attr('href', `${href}&${extraParams}`);
					} else {
						talkLink.attr('href', `${href}?${extraParams}`);
					}
				}
			}
		};
		// Older revision
		warnFromTalk('otitle'); // Add quick-warn link to user talk link
		// Don't load if there's a single revision or weird diff (cur on latest)
		if (mw.config.get('wgDiffOldId') && mw.config.get('wgDiffOldId') !== mw.config.get('wgDiffNewId')) {
			// Add a [restore this revision] link to the older revision
			const oldTitle = document.querySelector('#mw-diff-otitle1')?.parentElement;
			if (oldTitle) {
				const revertToRevision = twinklefluff.linkBuilder.restoreThisRevisionLink('wgDiffOldId');
				oldTitle.insertBefore(revertToRevision, oldTitle.firstChild);
				if (Twinkle.getPref<CustomRevertSummaryItem[]>('customRevertSummary').length > 0) {
					revertToRevision.appendChild(document.createTextNode(' || '));
					// Inline select for a custom revert summary (native element,
					// no dialog involved)
					const revertsummary = document.createElement('select');
					revertsummary.setAttribute('name', 'revertsummary');
					const defaultOption = document.createElement('option');
					defaultOption.value = '';
					defaultOption.textContent = uls('选择回退理由', '選擇回退理由');
					revertsummary.appendChild(defaultOption);
					for (const item of Twinkle.getPref<CustomRevertSummaryItem[]>('customRevertSummary')) {
						const option = document.createElement('option');
						option.value = item.value;
						option.textContent = item.label;
						revertsummary.appendChild(option);
					}
					revertToRevision.appendChild(revertsummary);
				}
			}
		}
		// Newer revision
		warnFromTalk('ntitle'); // Add quick-warn link to user talk link
		// Add either restore or rollback links to the newer revision
		// Don't show if there's a single revision or weird diff (prev on first)
		if (document.querySelector('#differences-nextlink')) {
			// Not latest revision, add [restore this revision] link to newer revision
			const newTitle = document.querySelector('#mw-diff-ntitle1')?.parentElement;
			if (newTitle) {
				newTitle.insertBefore(
					twinklefluff.linkBuilder.restoreThisRevisionLink('wgDiffNewId'),
					newTitle.firstChild
				);
			}
		} else if (
			Twinkle.getPref<string[]>('showRollbackLinks').includes('diff') &&
			mw.config.get('wgDiffOldId') &&
			(mw.config.get('wgDiffOldId') !== mw.config.get('wgDiffNewId') ||
				document.querySelector('#differences-prevlink'))
		) {
			// Normally .mw-userlink is a link, but if the
			// username is hidden, it will be a span with
			// .history-deleted as well. When a sysop views the
			// hidden content, the span contains the username in a
			// link element, which will *just* have
			// .mw-userlink. The below thus finds the first
			// instance of the class, which if hidden is the span
			// and thus text returns undefined. Technically, this
			// is a place where sysops *could* have more
			// information available to them (as above, via
			// &unhide=1), since the username will be available by
			// checking a.mw-userlink instead, but revert() will
			// need reworking around userHidden
			const vandal = $body.find('#mw-diff-ntitle2').find('.mw-userlink')[0]?.textContent ?? null;
			const ntitle = document.querySelector('#mw-diff-ntitle1')?.parentElement;
			if (ntitle) {
				ntitle.insertBefore(twinklefluff.linkBuilder.rollbackLinks(vandal), ntitle.firstChild);
			}
		}
	},
	oldid: (): void => {
		// Add a [restore this revision] link on old revisions
		const title = document.querySelector('#mw-revision-info')?.parentElement;
		if (title) {
			title.insertBefore(twinklefluff.linkBuilder.restoreThisRevisionLink('wgRevisionId'), title.firstChild);
		}
	},
};

twinklefluff.disableLinks = (parentNode: HTMLElement): void => {
	$(parentNode)
		.children()
		.each((_i, node) => {
			node.innerHTML = node.textContent ?? ''; // Feels like cheating
			$(node).css('font-weight', 'normal').css('color', 'darkgray');
		});
};

twinklefluff.revert = (type: RevertType, vandal: string | null, rev?: number, page?: string): void => {
	if (vandal && mw.util.isIPv6Address(vandal)) {
		vandal = Morebits.ip.sanitizeIPv6(vandal);
	}
	const pagename = page || mw.config.get('wgPageName');
	const revid = rev || mw.config.get('wgCurRevisionId');
	const summary = getRevertSummary();
	if (twinklefluff.rollbackInPlace) {
		const notifyStatus = document.createElement('span');
		void mw.notify(notifyStatus, {
			autoHide: false,
			title: `回退${page}`,
			tag: `twinklefluff_${rev}`, // Shouldn't be necessary given disableLink
		});

		Morebits.status.init(notifyStatus);
	} else {
		Morebits.status.init(document.querySelector<HTMLElement>('#mw-content-text'));
		$body.find('#catlinks').remove();
	}
	const params: RevertParams = {
		type,
		user: vandal,
		userHidden: !vandal,
		pagename,
		revid,
		summary,
	};
	const query: ApiQuery = {
		action: 'query',
		prop: ['info', 'revisions'],
		titles: pagename,
		intestactions: 'edit',
		rvlimit: Twinkle.getPref<number>('revertMaxRevisions'),
		rvprop: ['ids', 'timestamp', 'user'],
		curtimestamp: '',
		meta: 'tokens',
		type: 'csrf',
	};
	const api = new Morebits.wiki.api<RevertParams>(
		uls('抓取较早修订版本信息', '抓取較早修訂版本資訊'),
		query,
		twinklefluff.callbacks.main
	);
	api.params = params;
	api.post();
};

twinklefluff.revertToRevision = (oldrev: number): void => {
	const summary = getRevertSummary();
	Morebits.status.init(document.querySelector<HTMLElement>('#mw-content-text'));
	const query: ApiQuery = {
		action: 'query',
		prop: ['info', 'revisions'],
		titles: mw.config.get('wgPageName'),
		rvlimit: 1,
		rvstartid: oldrev,
		rvprop: ['ids', 'user'],
		format: 'xml',
		curtimestamp: '',
		meta: 'tokens',
		type: 'csrf',
	};
	const api = new Morebits.wiki.api<RevertToRevisionParams>(
		uls('抓取较早修订版本信息', '抓取較早修訂版本資訊'),
		query,
		twinklefluff.callbacks.toRevision
	);
	api.params = {
		rev: oldrev,
		summary,
	};
	api.post();
};

twinklefluff.callbacks = {
	toRevision: (apiobj: MorebitsApi<RevertToRevisionParams>): void => {
		const xmlDoc = apiobj.responseXML;
		const lastrevid = Number.parseInt($(xmlDoc).find('page').attr('lastrevid') ?? '', 10);
		const touched = $(xmlDoc).find('page').attr('touched');
		const loadtimestamp = $(xmlDoc).find('api').attr('curtimestamp');
		const csrftoken = $(xmlDoc).find('tokens').attr('csrftoken');
		const revertToRevID = Number.parseInt($(xmlDoc).find('rev').attr('revid') ?? '', 10);
		const revertToUser = $(xmlDoc).find('rev').attr('user');
		const revertToUserHidden = typeof $(xmlDoc).find('rev').attr('userhidden') === 'string';
		if (revertToRevID !== apiobj.params.rev) {
			apiobj.statelem.error(
				uls('抓取到的修订版本与请求的修订版本不符，取消。', '抓取到的修訂版本與請求的修訂版本不符，取消。')
			);
			return;
		}
		const optional_summary = prompt(
			`${uls('请输入回退理由：', '請輸入回退理由：')}                                `,
			apiobj.params.summary
		); // padded out to widen prompt in Firefox
		if (optional_summary === null) {
			apiobj.statelem.error(uls('由用户取消。', '由使用者取消。'));
			return;
		}
		const summary = twinklefluff.formatSummary(
			uls('回退到由$USER做出的修订版本', '回退到由$USER做出的修訂版本') + revertToRevID,
			revertToUserHidden ? null : (revertToUser ?? null),
			optional_summary
		);
		const query: ApiQuery = {
			action: 'edit',
			title: mw.config.get('wgPageName'),
			summary,
			tags: Twinkle.changeTags,
			token: csrftoken,
			undo: lastrevid,
			undoafter: revertToRevID,
			basetimestamp: touched,
			starttimestamp: loadtimestamp,
			minor: Twinkle.getPref<string[]>('markRevertedPagesAsMinor').includes('torev') ? true : undefined,
			bot: true,
		};
		// Handle watching, possible expiry
		if (Twinkle.getPref<string[]>('watchRevertedPages').includes('torev')) {
			const watchOrExpiry = Twinkle.getPref<string>('watchRevertedExpiry');
			if (!watchOrExpiry || watchOrExpiry === 'no') {
				query['watchlist'] = 'nochange';
			} else if (watchOrExpiry === 'default' || watchOrExpiry === 'preferences') {
				query['watchlist'] = 'preferences';
			} else {
				query['watchlist'] = 'watch';
				// number allowed but not used in Twinkle.config.watchlistEnums
				if (typeof watchOrExpiry === 'string' && watchOrExpiry !== 'yes') {
					query['watchlistexpiry'] = watchOrExpiry;
				}
			}
		}
		Morebits.wiki.actionCompleted.redirect = mw.config.get('wgPageName');
		Morebits.wiki.actionCompleted.notice = '回退完成';
		const api = new Morebits.wiki.api<RevertToRevisionParams>(
			uls('保存回退内容', '儲存回退內容'),
			query,
			twinklefluff.callbacks.complete,
			apiobj.statelem
		);
		api.params = apiobj.params;
		api.post();
	},
	main: (apiobj: MorebitsApi<RevertParams>): void => {
		const xmlDoc = apiobj.responseXML;
		if ($(xmlDoc).find('actions').attr('edit') === undefined) {
			apiobj.statelem.error("Unable to edit the page, it's probably protected.");
			return;
		}
		const lastrevid = Number.parseInt($(xmlDoc).find('page').attr('lastrevid') ?? '', 10);
		const touched = $(xmlDoc).find('page').attr('touched');
		const loadtimestamp = $(xmlDoc).find('api').attr('curtimestamp');
		const csrftoken = $(xmlDoc).find('tokens').attr('csrftoken');
		const revs = $(xmlDoc).find('rev');
		const {statelem} = apiobj;
		const {params} = apiobj;
		if (revs.length < 1) {
			statelem.error(uls('没有其它修订版本，无法回退', '沒有其它修訂版本，無法回退'));
			return;
		}
		const [top] = revs;
		if (!top) {
			statelem.error(uls('没有其它修订版本，无法回退', '沒有其它修訂版本，無法回退'));
			return;
		}
		const lastuser = top.getAttribute('user');
		if (lastrevid < params.revid) {
			Morebits.status.error(
				uls('错误', '錯誤'),
				uls(
					[
						'从服务器获取的最新修订版本ID ',
						Morebits.htmlNode('strong', String(lastrevid)),
						' 小于目前所显示的修订版本ID。这可能意味着当前修订版本已被删除、服务器延迟、或抓取到了坏掉的信息。取消。',
					],
					[
						'從伺服器取得的最新修訂版本ID ',
						Morebits.htmlNode('strong', String(lastrevid)),
						' 小於目前所顯示的修訂版本ID。這可能意味著當前修訂版本已被刪除、伺服器延遲、或擷取到了壞掉的資訊。取消。',
					]
				)
			);
			return;
		}
		// Used for user-facing alerts, messages, etc., not edits or summaries
		let userNorm = params.user || twinklefluff.hiddenName;
		let index = 1;
		if (params.revid === lastrevid) {
			// Expected revision is the same, so the users must match;
			// this allows sysops to know whether the users are the same
			params.user = lastuser;
			userNorm = params.user || twinklefluff.hiddenName;
		} else {
			Morebits.status.warn(
				'警告',
				uls(
					[
						'最新修订版本 ',
						Morebits.htmlNode('strong', String(lastrevid)),
						' 与我们的修订版本 ',
						Morebits.htmlNode('strong', String(params.revid)),
						'不同',
					],
					[
						'最新修訂版本 ',
						Morebits.htmlNode('strong', String(lastrevid)),
						' 與我們的修訂版本 ',
						Morebits.htmlNode('strong', String(params.revid)),
						' 不同',
					]
				)
			);
			if (lastuser === params.user) {
				switch (params.type) {
					case 'vand':
						Morebits.status.info(uls('信息', '資訊'), [
							uls('最新修订版本由 ', '最新修訂版本由 '),
							Morebits.htmlNode('strong', userNorm),
							uls(' 做出，因我们假定破坏，继续回退操作。', ' 做出，因我們假定破壞，繼續回退操作。'),
						]);
						break;
					default:
						Morebits.status.warn('提示', [
							uls('最新修订版本由 ', '最新修訂版本由 '),
							Morebits.htmlNode('strong', userNorm),
							uls(' 做出，但我们还是不回退了。', ' 做出，但我們還是不回退了。'),
						]);
						return;
				}
			} else if (
				params.type === 'vand' && // Okay to test on user since it will either fail or sysop will correctly access it
				// Besides, none of the trusted bots are going to be revdel'd
				twinklefluff.trustedBots.includes(top.getAttribute('user') ?? '') &&
				revs.length > 1 &&
				// Legacy parity: the original compares the raw attribute string
				// against the numeric revid, so this branch never matches
				revs[1]?.getAttribute('revid') === (params.revid as unknown as string)
			) {
				Morebits.status.info(
					uls('信息', '資訊'),
					uls(
						[
							'最新修订版本由 ',
							Morebits.htmlNode('strong', lastuser ?? ''),
							'，一个可信的机器人做出，但之前的版本被认为是破坏，继续回退操作。',
						],
						[
							'最新修訂版本由 ',
							Morebits.htmlNode('strong', lastuser ?? ''),
							'，一個可信的機器人做出，但之前的版本被認為是破壞，繼續回退操作。',
						]
					)
				);
				index = 2;
			} else {
				Morebits.status.error(
					uls('错误', '錯誤'),
					uls(
						[
							'最新修订版本由 ',
							Morebits.htmlNode('strong', lastuser ?? ''),
							' 做出，所以这个修订版本可能已经被回退了，取消回退操作。',
						],
						[
							'最新修訂版本由 ',
							Morebits.htmlNode('strong', lastuser ?? ''),
							' 做出，所以這個修訂版本可能已經被回退了，取消回退操作。',
						]
					)
				);
				return;
			}
		}
		if (params.user !== null && twinklefluff.trustedBots.includes(params.user)) {
			switch (params.type) {
				case 'vand':
					Morebits.status.info(uls('信息', '資訊'), [
						uls('将对 ', '將對 '),
						Morebits.htmlNode('strong', userNorm),
						uls(
							' 执行破坏回退，这是一个可信的机器人，我们假定您要回退前一个修订版本。',
							' 執行破壞回退，這是一個可信的機器人，我們假定您要回退前一個修訂版本。'
						),
					]);
					index = 2;
					params.user = revs[1]?.getAttribute('user') ?? null;
					params.userHidden = revs[1]?.getAttribute('userhidden') === '';
					break;
				/* case 'norm': */
				/* falls through */
				default: {
					const cont = confirm(
						uls(
							'选择了常规回退，但最新修改是由一个可信的机器人（',
							'選擇了常規回退，但最新修改是由一個可信的機器人（'
						) +
							userNorm +
							uls(
								'）做出的。确定以回退前一个修订版本，取消以回退机器人的修改',
								'）做出的。確定以回退前一個修訂版本，取消以回退機器人的修改'
							)
					);
					if (cont) {
						Morebits.status.info(uls('信息', '資訊'), [
							uls('将对 ', '將對 '),
							Morebits.htmlNode('strong', userNorm),
							uls(
								' 执行常规回退，这是一个可信的机器人，基于确认，我们将回退前一个修订版本。',
								' 執行常規回退，這是一個可信的機器人，基於確認，我們將回退前一個修訂版本。'
							),
						]);
						index = 2;
						params.user = revs[1]?.getAttribute('user') ?? null;
						params.userHidden = revs[1]?.getAttribute('userhidden') === '';
						userNorm = params.user || twinklefluff.hiddenName;
					} else {
						Morebits.status.warn('提示', [
							uls('将对 ', '將對 '),
							Morebits.htmlNode('strong', userNorm),
							uls(
								' 执行常规回退，这是一个可信的机器人，基于确认，我们仍将回退这个修订版本。',
								' 執行常規回退，這是一個可信的機器人，基於確認，我們仍將回退這個修訂版本。'
							),
						]);
					}
					break;
				}
			}
		}
		let found: number | false = false;
		let count = 0;
		for (let i = index; i < revs.length; ++i) {
			++count;
			if (revs[i]?.getAttribute('user') !== params.user) {
				found = i;
				break;
			}
		}
		if (!found) {
			statelem.error([
				uls('未找到之前的修订版本，可能 ', '未找到之前的修訂版本，可能 '),
				Morebits.htmlNode('strong', userNorm),
				uls(' 是唯一贡献者，或这个用户连续做出了超过 ', ' 是唯一貢獻者，或這個用戶連續做出了超過 ') +
					mw.language.convertNumber(Twinkle.getPref<number>('revertMaxRevisions')) +
					uls(' 次编辑。', ' 次編輯。'),
			]);
			return;
		}
		const good_revision = revs[found];
		if (!good_revision) {
			return;
		}
		let userHasAlreadyConfirmedAction = false;
		if (params.type !== 'vand' && count > 1) {
			if (
				!confirm(
					userNorm +
						uls(' 连续做出了 ', ' 連續做出了 ') +
						mw.language.convertNumber(count) +
						uls(' 次编辑，是否要全部回退？', ' 次編輯，是否要全部回退？')
				)
			) {
				Morebits.status.info('提示', uls('用户取消操作', '使用者取消操作'));
				return;
			}
			userHasAlreadyConfirmedAction = true;
		}
		params.count = count;
		params.goodid = good_revision.getAttribute('revid');
		params.gooduser = good_revision.getAttribute('user');
		params.gooduserHidden = good_revision.getAttribute('userhidden') === '';
		statelem.status([
			Morebits.htmlNode('strong', mw.language.convertNumber(count)),
			uls(' 个修订版本之前由 ', ' 個修訂版本之前由 '),
			Morebits.htmlNode('strong', params.gooduserHidden ? twinklefluff.hiddenName : (params.gooduser ?? '')),
			uls(' 做出的修订版本 ', ' 做出的修訂版本 '),
			Morebits.htmlNode('strong', params.goodid ?? ''),
		]);
		let summary;
		let extra_summary;
		switch (params.type) {
			case 'vand':
				summary = twinklefluff.formatSummary(
					`回退$USER做出的${params.count}${uls('次编辑，到由', '次編輯，到由')}${
						params.gooduserHidden ? twinklefluff.hiddenName : params.gooduser
					}${uls('做出的最后修订版本 ', '做出的最後修訂版本 ')}`,
					params.userHidden ? null : params.user
				);
				break;
			/* case 'norm': */
			/* falls through */
			default:
				if (Twinkle.getPref<boolean>('offerReasonOnNormalRevert')) {
					extra_summary = prompt(
						`${uls('可选的编辑摘要：', '可選的編輯摘要：')}                              `,
						params.summary
					); // padded out to widen prompt in Firefox
					if (extra_summary === null) {
						statelem.error(uls('用户取消操作。', '使用者取消操作。'));
						return;
					}
					userHasAlreadyConfirmedAction = true;
				}
				summary = twinklefluff.formatSummary(
					`回退$USER做出的${params.count}${uls('次编辑', '次編輯')}`,
					params.userHidden ? null : params.user,
					extra_summary
				);
				break;
		}
		if (
			Twinkle.getPref<boolean>('confirmOnFluff') &&
			!userHasAlreadyConfirmedAction &&
			!confirm(uls('回退页面：您确定吗？', '回退頁面：您確定嗎？'))
		) {
			statelem.error(uls('用户取消操作。', '使用者取消操作。'));
			return;
		}
		// Decide whether to notify the user on success
		if (
			!twinklefluff.skipTalk &&
			Twinkle.getPref<string[]>('openTalkPage').includes(params.type) &&
			!params.userHidden &&
			mw.config.get('wgUserName') !== params.user
		) {
			params.notifyUser = true;
			// Pass along to the warn module
			params.vantimestamp = top.getAttribute('timestamp');
		}
		const query: ApiQuery = {
			action: 'edit',
			title: params.pagename,
			summary,
			tags: Twinkle.changeTags,
			token: csrftoken,
			undo: lastrevid,
			undoafter: params.goodid,
			basetimestamp: touched,
			starttimestamp: loadtimestamp,
			minor: Twinkle.getPref<string[]>('markRevertedPagesAsMinor').includes(params.type) ? true : undefined,
			bot: true,
		};
		// Handle watching, possible expiry
		if (Twinkle.getPref<string[]>('watchRevertedPages').includes(params.type)) {
			const watchOrExpiry = Twinkle.getPref<string>('watchRevertedExpiry');
			if (!watchOrExpiry || watchOrExpiry === 'no') {
				query['watchlist'] = 'nochange';
			} else if (watchOrExpiry === 'default' || watchOrExpiry === 'preferences') {
				query['watchlist'] = 'preferences';
			} else {
				query['watchlist'] = 'watch';
				// number allowed but not used in Twinkle.config.watchlistEnums
				if (typeof watchOrExpiry === 'string' && watchOrExpiry !== 'yes') {
					query['watchlistexpiry'] = watchOrExpiry;
				}
			}
		}
		if (!twinklefluff.rollbackInPlace) {
			Morebits.wiki.actionCompleted.redirect = params.pagename;
		}
		Morebits.wiki.actionCompleted.notice = '回退完成';
		const api = new Morebits.wiki.api<RevertParams>(
			uls('保存回退内容', '儲存回退內容'),
			query,
			twinklefluff.callbacks.complete,
			statelem
		);
		api.params = params;
		api.post();
	},
	complete: (apiobj: MorebitsApi<RevertParams | RevertToRevisionParams>): void => {
		// TODO Most of this is copy-pasted from Morebits.wiki.page#fnSaveSuccess. Unify it
		const xml = apiobj.getXML();
		const $edit = $(xml).find('edit');
		if ($(xml).find('captcha').length > 0) {
			apiobj.statelem.error(uls('不能回退，因服务器要求您输入验证码。', '不能回退，因伺服器要求您輸入驗證碼。'));
		} else if ($edit.attr('nochange') === '') {
			apiobj.statelem.error(
				uls('要回退到的版本与当前版本相同，没什么要做的', '要回退到的版本與目前版本相同，沒什麼要做的')
			);
		} else {
			apiobj.statelem.info('完成');
			const {params} = apiobj;
			if (params.notifyUser && !params.userHidden) {
				// notifyUser only from main, not from toRevision
				Morebits.status.info(uls('信息', '資訊'), [
					uls('开启用户 ', '開啟使用者 '),
					Morebits.htmlNode('strong', params.user ?? ''),
					uls(' 的讨论页', ' 的討論頁'),
				]);
				const windowQuery: Record<string, string | number | boolean | null | undefined> = {
					title: `User talk:${params.user}`,
					action: 'edit',
					preview: 'yes',
					vanarticle: params.pagename?.replace(/_/g, ' '),
					vanarticlerevid: params.revid,
					vantimestamp: params.vantimestamp ?? undefined,
					vanarticlegoodrevid: params.goodid ?? undefined,
					type: params.type,
					count: params.count,
				};
				switch (Twinkle.getPref<string>('userTalkPageMode')) {
					case 'tab':
						window.open(mw.util.getUrl('', windowQuery), '_blank', 'noopener,noreferrer');
						break;
					case 'blank':
						window.open(
							mw.util.getUrl('', windowQuery),
							'_blank',
							'noopener,noreferrer,location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800'
						);
						break;
					/* case 'window': */
					/* falls through */
					default:
						window.open(
							mw.util.getUrl('', windowQuery),
							window.name === 'twinklewarnwindow' ? '_blank' : 'twinklewarnwindow',
							window.name === 'twinklewarnwindow'
								? 'noopener,noreferrer,location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800'
								: 'location=no,toolbar=no,status=no,directories=no,scrollbars=yes,width=1200,height=800'
						);
						break;
				}
			}
		}
	},
};

// If builtInString contains the string "$USER", it will be replaced
// by an appropriate user link if a user name is provided
twinklefluff.formatSummary = (builtInString: string, userName: string | null, customString?: string): string => {
	let result = builtInString;
	// append user's custom reason
	if (customString) {
		result += `：${Morebits.string.toUpperCaseFirstChar(customString)}`;
	}
	// find number of UTF-8 bytes the resulting string takes up, and possibly add
	// a contributions or contributions+talk link if it doesn't push the edit summary
	// over the 499-byte limit
	if (/\$USER/.test(builtInString)) {
		if (userName) {
			const resultLen = unescape(encodeURIComponent(result.replace('$USER', ''))).length;
			const contribsLink = `[[Special:Contributions/${userName}|${userName}]]`;
			const contribsLen = unescape(encodeURIComponent(contribsLink)).length;
			if (resultLen + contribsLen <= 499) {
				const talkLink = `（[[User talk:${userName}${uls('|讨论]]）', '|討論]]）')}`;
				if (resultLen + contribsLen + unescape(encodeURIComponent(talkLink)).length <= 499) {
					result = Morebits.string.safeReplace(result, '$USER', contribsLink + talkLink);
				} else {
					result = Morebits.string.safeReplace(result, '$USER', contribsLink);
				}
			} else {
				result = Morebits.string.safeReplace(result, '$USER', userName);
			}
		} else {
			result = Morebits.string.safeReplace(result, '$USER', twinklefluff.hiddenName);
		}
	}
	return result;
};

Twinkle.fluff = twinklefluff;
Twinkle.addInitCallback(twinklefluff, 'fluff');

export {};
