import * as OPTIONS from '../options.json';
import {type App, createApp, reactive} from 'vue';
import NoticeArea from './NoticeArea.vue';
import {type RemoteNotices} from './util/queryApi';
import {getMessage} from './i18n';
import {matchCriteria} from './util/matchCriteria';

const broadcastChannel: BroadcastChannel = new BroadcastChannel(OPTIONS.storageKey);

let currentVersion: string = '0';
const localVersion = mw.storage.get(OPTIONS.storageKey) as string | null;
let timer: ReturnType<typeof setTimeout> | undefined;
let closed = false;
let noticeApp: App | undefined;
let noticeRoot: HTMLDivElement | undefined;
let noticeState:
	| {
			html: string;
			key: number;
			visible: boolean;
	  }
	| undefined;
let pendingNotice:
	| {
			html: string;
			key: number;
			styleId: number;
			nextIndex: number;
	  }
	| undefined;
let activeStyleId = -1;

let $notices: JQuery;
const noticeStyles: HTMLStyleElement[] = [];

const updateNoticeStyle = (styleId: number): void => {
	if (activeStyleId === styleId) {
		return;
	}

	for (const style of noticeStyles) {
		style.disabled = true;
	}
	const noticeStyle = noticeStyles[styleId];
	if (noticeStyle) {
		noticeStyle.disabled = false;
	}
	activeStyleId = styleId;
};

const scheduleNextNotice = ($mountPoint: JQuery, nextIndex: number): void => {
	timer = setTimeout((): void => {
		showNotices($mountPoint, nextIndex);
	}, 7 * 1000);
};

const showPendingNotice = ($mountPoint: JQuery): void => {
	if (!pendingNotice || !noticeState) {
		return;
	}

	const nextNotice = pendingNotice;
	pendingNotice = undefined;
	updateNoticeStyle(nextNotice.styleId);
	noticeState.html = nextNotice.html;
	noticeState.key = nextNotice.key;
	noticeState.visible = true;
	scheduleNextNotice($mountPoint, nextNotice.nextIndex);
};

function closeNotices(): void {
	if (closed) {
		return;
	}
	closed = true;
	broadcastChannel.postMessage('close');
	broadcastChannel.close();
	if (timer) {
		clearTimeout(timer);
	}
	noticeApp?.unmount();
	noticeRoot?.remove();
	mw.storage.set(OPTIONS.storageKey, currentVersion, 60 * 60 * 24 * 30);
}

function dismissNotice(): void {
	closeNotices();
	void mw.notify(getMessage('DismissNotice'), {
		title: getMessage('DismissNoticeTitle'),
		tag: 'AdvancedSiteNotices',
	});
}

const showNotices = ($mountPoint: JQuery, index: number, remoteNotices?: RemoteNotices): void => {
	if (closed) {
		return;
	}

	currentVersion = remoteNotices?.version ?? currentVersion;
	if (currentVersion === localVersion) {
		return;
	}

	if (remoteNotices?.$notices) {
		({$notices} = remoteNotices);
	}

	const noticesLength: number = $notices.length;
	let selectedIndex = -1;
	let $notice: JQuery = $();
	for (let offset = 0; offset < noticesLength; offset++) {
		const candidateIndex = (index + offset) % noticesLength;
		const candidateNotice = $notices.eq(candidateIndex);
		if (matchCriteria(candidateNotice)) {
			$notice = candidateNotice;
			selectedIndex = candidateIndex;
			break;
		}
	}
	if (selectedIndex < 0) {
		return;
	}
	const nextNoticeIndex = (selectedIndex + 1) % noticesLength;

	if (typeof $notice.data('asn-html') === 'string') {
		$notice.data('asn-html-raw', decodeURIComponent(($notice.data('asn-html') as string).replace(/\+/g, '%20')));
		$notice.data('asn-html', null);
	}
	if (typeof $notice.data('asn-style') === 'string') {
		$notice.data('asn-style-id', noticeStyles.length);
		const style: HTMLStyleElement = mw.loader.addStyleTag(
			decodeURIComponent(($notice.data('asn-style') as string).replace(/\+/g, '%20'))
		);
		style.disabled = true;
		noticeStyles[noticeStyles.length] = style;
		$notice.data('asn-style', null);
	}

	const noticeHtml: string = ($notice.data('asn-html-raw') as string) || $notice.html();
	const noticeStyleId = ($notice.data('asn-style-id') as number | undefined) ?? -1;
	if (!noticeRoot) {
		noticeRoot = document.createElement('div');
		$mountPoint.append(noticeRoot);
		noticeState = reactive({
			html: noticeHtml,
			key: selectedIndex,
			visible: true,
		});
		noticeApp = createApp(NoticeArea, {
			state: noticeState,
			onDismiss: dismissNotice,
			onNoticeHidden: () => showPendingNotice($mountPoint),
		});
		noticeApp.mount(noticeRoot);
		updateNoticeStyle(noticeStyleId);
		scheduleNextNotice($mountPoint, nextNoticeIndex);
		return;
	}

	if (!noticeState || (noticeState.html === noticeHtml && activeStyleId === noticeStyleId)) {
		scheduleNextNotice($mountPoint, nextNoticeIndex);
		return;
	}

	if (timer) {
		clearTimeout(timer);
	}
	if (noticeState.html === noticeHtml) {
		updateNoticeStyle(noticeStyleId);
		scheduleNextNotice($mountPoint, nextNoticeIndex);
		return;
	}

	pendingNotice = {
		html: noticeHtml,
		key: selectedIndex,
		styleId: noticeStyleId,
		nextIndex: nextNoticeIndex,
	};
	noticeState.visible = false;
};

broadcastChannel.addEventListener('message', closeNotices);

export {showNotices};
