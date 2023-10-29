import {STORAGE_KEY} from './constant';
import {getMessage} from './i18n';

export const advancedSiteNotices = (): void => {
	const $siteNotice: JQuery = $('#siteNotice');
	let noticesVersion = '0';
	let timer: ReturnType<typeof setTimeout>;

	const $area: JQuery = $('<div>').addClass('asn__area noprint').attr('id', 'advancedSiteNotices');
	const $currentNotice: JQuery = $('<div>').addClass('asn__notice center');
	const $dismiss: JQuery = $('<div>')
		.addClass('asn__dismiss')
		.append(
			$('<a>')
				.attr({
					href: '#',
					role: 'button',
					title: getMessage('asn__dismiss'),
					'aria-label': getMessage('asn__dismiss'),
				})
				.text(getMessage('asn__dismiss'))
				.on('click', (event: JQuery.ClickEvent): void => {
					event.preventDefault();
					clearTimeout(timer);
					$area.remove();
					mw.storage.set(STORAGE_KEY, noticesVersion, 2592e3); // 30 days
					mw.notify($('<span>').html(getMessage('DismissNotice')), {
						tag: 'AdvancedSiteNotices',
						type: 'info',
					});
				})
		);
	const $noticeArea: JQuery = $('<div>').addClass('asn__notice__area');
	const $title: JQuery = $('<div>').addClass('asn__title').text(getMessage('asn__title'));

	$area.append($title, $noticeArea.append($currentNotice), $dismiss);

	const testCriteria = (criteria: string): boolean => {
		// @ts-ignore
		const in_group = (group: string): boolean => {
			const wgUserGroups: string[] | null = mw.config.get('wgUserGroups');
			return wgUserGroups?.includes(group) ?? false;
		};
		// @ts-ignore
		const only_for = (userLanguage: string): boolean => {
			return userLanguage === mw.config.get('wgUserLanguage');
		};
		// FIXME: This shouldn't be using eval on data entered in wikitext.
		// If that data is malformed it will throw an exception e.g. criteria = "(false))"
		try {
			// eslint-disable-next-line no-eval
			return window.eval(criteria);
		} catch {
			return false;
		}
	};
	const matchCriteria = ($notice: JQuery): boolean => {
		const cache: boolean | undefined = $notice.data('asn-cache');
		if (cache !== undefined) {
			return cache;
		}
		let criteria: string | undefined = $notice.attr('data-asn-criteria');
		if (criteria === undefined) {
			criteria = $notice.attr('class') ? 'false' : 'true';
			if ($notice.hasClass('only_sysop')) {
				criteria += '||in_group("sysop")';
			}
			if ($notice.hasClass('only_logged')) {
				criteria += '||in_group("user")';
			}
			if ($notice.hasClass('only_anon')) {
				criteria += '||!in_group("user")';
			}
			if ($notice.hasClass('only_zh_cn')) {
				criteria += '||only_for("zh-cn")';
			}
			if ($notice.hasClass('only_zh_sg')) {
				criteria += '||only_for("zh-sg")';
			}
			if ($notice.hasClass('only_zh_my')) {
				criteria += '||only_for("zh-my")';
			}
			if ($notice.hasClass('only_zh_hk')) {
				criteria += '||only_for("zh-hk")';
			}
			if ($notice.hasClass('only_zh_mo')) {
				criteria += '||only_for("zh-mo")';
			}
			if ($notice.hasClass('only_zh_tw')) {
				criteria += '||only_for("zh-tw")';
			}
		} else {
			criteria = decodeURIComponent(criteria.replace(/\+/g, '%20'));
			criteria = criteria.trim() || 'true';
		}
		const result: boolean = testCriteria(criteria);
		$notice.data('asn-cache', result);
		return result;
	};

	const noticeStyles: CSSStyleSheet[] = [];
	const noticesVersionLast: string | null = mw.storage.get(STORAGE_KEY) as string | null;
	let $notices: JQuery;

	const loadNotices = (index: number): void => {
		if (noticesVersion === noticesVersionLast || !$area.length) {
			return;
		}
		const noticesLength: number = $notices.length;
		const nextNoticeIndex: number = (index + 1) % noticesLength;
		let $notice: JQuery = $();
		let i = 0;
		while (i++ < noticesLength) {
			$notice = $notices.eq(index);
			if ($notice.length) {
				if (!matchCriteria($notice)) {
					loadNotices(nextNoticeIndex);
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
				for (const _noticeStyle of noticeStyles) {
					_noticeStyle.disabled = true;
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
			$siteNotice.append($area);
			const noticeStyle: CSSStyleSheet | undefined = noticeStyles[noticeStyleId];
			if (noticeStyle) {
				noticeStyle.disabled = false;
			}
			$currentNotice.html(noticeHtml).fadeIn();
		}
		timer = setTimeout((): void => {
			loadNotices(nextNoticeIndex);
		}, 7e3);
	};

	const api: mw.Api = new mw.Api({
		ajax: {
			headers: {
				'Api-User-Agent': `Qiuwen/1.1 (AdvancedSiteNotices/1.1; ${mw.config.get('wgWikiID')})`,
			},
		},
	});
	const params: ApiParseParams = {
		action: 'parse',
		format: 'json',
		formatversion: '2',
		prop: 'text',
		page: 'Template:AdvancedSiteNotices/ajax',
		uselang: mw.config.get('wgUserLanguage'),
		variant: mw.config.get('wgUserLanguage'),
	};

	api.get(params)
		.then((response): void => {
			if (!response['parse']?.text) {
				return;
			}
			const $noticesRemote: JQuery = $('<div>').html(response['parse'].text).find('ul.sitents');
			noticesVersion = $noticesRemote.data('asn-version').toString();
			$notices = $('li', $noticesRemote);
			$((): void => {
				loadNotices(Math.floor(Math.random() * $notices.length));
			});
		})
		.catch((error: never): void => {
			console.error('[AdvancedSiteNotices] Ajax error:', error);
		});
};
