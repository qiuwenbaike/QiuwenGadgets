import {CLASS_NAME_DISMISS, CLASS_NAME_NOTICE_CONTENT, STORAGE_KEY} from './constant';
import {type RemoteNotices} from './util/queryApi';
import {getMessage} from './i18n';
import {insertArea} from './insertArea';
import {matchCriteria} from './util/matchCriteria';

let currentVersion = '0';
const localVersion: string | null = mw.storage.get(STORAGE_KEY) as string | null;

let timer: ReturnType<typeof setTimeout>;

const $area: JQuery = insertArea();
const $currentNotice: JQuery = $area.find(`.${CLASS_NAME_NOTICE_CONTENT}`);
const $dismiss: JQuery<HTMLAnchorElement> = $area.find(`.${CLASS_NAME_DISMISS}`).find('a');
$dismiss.on('click', (): void => {
	clearTimeout(timer);
	$area.remove();
	mw.storage.set(STORAGE_KEY, currentVersion, 60 * 60 * 24 * 30 * 1000);
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
tippy($dismiss.get(0) as HTMLAnchorElement, {
	arrow: true,
	content: $dismiss.attr('aria-label') as string,
	placement: 'bottom',
});

let $notices: JQuery;
const noticeStyles: HTMLStyleElement[] = [];
const showNotices = ($mountPoint: JQuery, index: number, remoteNotices?: RemoteNotices): void => {
	currentVersion = remoteNotices?.version ?? currentVersion;
	if (currentVersion === localVersion) {
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
		if (!matchCriteria($notice)) {
			showNotices($mountPoint, nextNoticeIndex);
			return;
		}
		index = index++ % noticesLength;
	}

	if (typeof $notice.data('asn-html') === 'string') {
		$notice.data('asn-html-raw', mw.Uri.decode($notice.data('asn-html')));
		$notice.data('asn-html', null);
	}
	if (typeof $notice.data('asn-style') === 'string') {
		$notice.data('asn-style-id', noticeStyles.length);
		const style: HTMLStyleElement = mw.loader.addStyleTag(mw.Uri.decode($notice.data('asn-style')));
		style.disabled = true;
		noticeStyles.push(style);
		$notice.data('asn-style', null);
	}

	const noticeHtml: string = $notice.data('asn-html-raw') || $notice.html();
	const noticeStyleId: number = $notice.data('asn-style-id');
	const currentNoticeHtml: string = $currentNotice.html();
	if (currentNoticeHtml && currentNoticeHtml !== noticeHtml) {
		$currentNotice.stop().fadeOut((): void => {
			for (const style of noticeStyles) {
				style.disabled = true;
			}
			const noticeStyle: HTMLStyleElement | undefined = noticeStyles[noticeStyleId];
			if (noticeStyle) {
				noticeStyle.disabled = false;
			}
			$currentNotice.html(noticeHtml);
			// animation try /catched to avoid TypeError: (Animation.tweeners[prop]||[]).concat is not a function error being seen in production
			try {
				$currentNotice.fadeIn();
			} catch {}
		});
	} else if (!currentNoticeHtml) {
		$mountPoint.append($area);
		const noticeStyle: HTMLStyleElement | undefined = noticeStyles[noticeStyleId];
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
