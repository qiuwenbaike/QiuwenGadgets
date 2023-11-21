import {CLASS_NOTICES_DISMISS, CLASS_NOTICES_NOTICE_CONTENT, STORAGE_KEY} from './constant';
import type {RemoteNotices} from './util/queryApi';
import {getMessage} from './i18n';
import {insertArea} from './insertArea';
import {matchCriteria} from './util/matchCriteria';

let currentNoticesVersion = '0';
let localNoticesVersion: string | null = mw.storage.get(STORAGE_KEY) as string | null;

let timer: ReturnType<typeof setTimeout>;

const $area: JQuery = insertArea();
const $currentNotice: JQuery = $area.find(`.${CLASS_NOTICES_NOTICE_CONTENT}`);
$area.find(`.${CLASS_NOTICES_DISMISS}`).on('click', (event: JQuery.ClickEvent): void => {
	event.preventDefault();
	clearTimeout(timer);
	$area.remove();
	localNoticesVersion = currentNoticesVersion;
	mw.storage.set(STORAGE_KEY, currentNoticesVersion, 60 * 60 * 24 * 30 * 1000);
	const toastifyInstance: ToastifyInstance = toastify({
		node: $('<span>').html(getMessage('DismissNotice')).get(0),
		close: true,
		duration: 10 * 1000,
		gravity: 'top',
		position: 'right',
		onClick: (): void => {
			toastifyInstance.hideToast();
		},
	});
});

const noticeStyles: CSSStyleSheet[] = [];
let $notices: JQuery;
const showNotices = ($mountPoint: JQuery, index: number, remoteNotices?: RemoteNotices): void => {
	currentNoticesVersion = remoteNotices?.version ?? currentNoticesVersion;
	if (currentNoticesVersion === localNoticesVersion) {
		return;
	}

	if (remoteNotices?.$notices) {
		({$notices} = remoteNotices);
	}

	const noticesLength: number = $notices.length;
	const nextNoticeIndex: number = (index + 1) % noticesLength;
	let $notice: JQuery = $();
	let i = 0;
	while (i++ < noticesLength) {
		$notice = $notices.eq(index);
		if ($notice.length) {
			if (!matchCriteria($notice)) {
				showNotices($mountPoint, nextNoticeIndex);
				return;
			}
			index = index++ % noticesLength;
		}
	}

	if (typeof $notice.data('asn-html') === 'string') {
		$notice.data('asn-html-raw', decodeURIComponent($notice.data('asn-html').replace(/\+/g, '%20')));
		$notice.data('asn-html', '');
	}
	if (typeof $notice.data('asn-style') === 'string') {
		const style: CSSStyleSheet = mw.util.addCSS(
			decodeURIComponent($notice.data('asn-style').replace(/\+/g, '%20'))
		);
		$notice.data('asn-style', '');
		$notice.data('asn-style-id', noticeStyles.length);
		style.disabled = true;
		noticeStyles.push(style);
	}

	const noticeHtml: string = $notice.data('asn-html-raw') || $notice.html();
	const noticeStyleId: number = $notice.data('asn-style-id');
	const currentNoticeHtml: string = $currentNotice.html();
	if (currentNoticeHtml && currentNoticeHtml !== noticeHtml) {
		$currentNotice.stop().fadeOut((): void => {
			for (const style of noticeStyles) {
				style.disabled = true;
			}
			const noticeStyle: CSSStyleSheet | undefined = noticeStyles[noticeStyleId];
			if (noticeStyle) {
				noticeStyle.disabled = false;
			}
			$currentNotice.html(noticeHtml);
			// animation try /catched to avoid TypeError: (Animation.tweeners[prop]||[]).concat is not a function error being seen in production
			try {
				$currentNotice.fadeIn();
			} catch {
				/* empty */
			}
		});
	} else if (!currentNoticeHtml) {
		$mountPoint.append($area);
		const noticeStyle: CSSStyleSheet | undefined = noticeStyles[noticeStyleId];
		if (noticeStyle) {
			noticeStyle.disabled = false;
		}
		$currentNotice.html(noticeHtml).fadeIn();
	}

	timer = setTimeout((): void => {
		showNotices($mountPoint, nextNoticeIndex);
	}, 7 * 1000);
};

export {showNotices};
