/* eslint-disable unicorn/prefer-add-event-listener */
import {alertTitle, portletText, portletTooltip} from './messages';
import {initMwApi} from '../../util';

export const shortURL = (): void => {
	let isInit = false;
	let clipboardInstance: ClipboardJS | undefined;
	const doIns = (link: string): void => {
		const isCitizen: boolean = mw.config.get('skin') === 'citizen';
		const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
		let element: HTMLLIElement | null = document.querySelector('#t-shortlink');
		if (!element) {
			element = mw.util.addPortletLink(portletId, '#', portletText, 't-shortlink', portletTooltip);
		}
		if (element) {
			((element.firstElementChild ?? element) as HTMLElement).onclick = (event: MouseEvent): void => {
				event.preventDefault();
				const $element: JQuery = $('<div>');
				for (const domain of ['qwbk.cc', 'qwbk.org', 'bkwz.cn']) {
					$element.append(
						new mw.widgets.CopyTextLayout({align: 'top', copyText: `https://${domain}${link}`}).$element
					);
				}
				OO.ui.alert($element, {title: alertTitle, size: 'medium'});
			};
			if (isCitizen && !isInit) {
				isInit = true;
				$(element).find('a').prepend('<span class="citizen-ui-icon mw-ui-icon-wikimedia-shortlink"></span>');
			}
		}
		let headerElement: HTMLAnchorElement | null = document.querySelector('#mw-indicator-shortURL a');
		if (!headerElement) {
			const $headerElement: JQuery = $('<div>')
				.addClass('mw-indicator')
				.attr('id', 'mw-indicator-shortURL')
				.append(
					$('<a>')
						.attr({
							href: '#',
							'aria-label': portletText,
						})
						.append($('<span>').addClass('shortlink-icon').text(portletText))
				);
			$headerElement.prependTo('.mw-indicators');
			headerElement = $headerElement.find('a').get(0) as HTMLAnchorElement;
			tippy(headerElement, {
				arrow: true,
				content: portletText,
				placement: 'bottom',
			});
		}
		const shorturl = `https://qwbk.cc${link}`;
		headerElement.onclick = (event: MouseEvent): void => {
			event.preventDefault();
			mw.notify(
				$('<span>')
					.text(alertTitle)
					.append(
						$('<br>'),
						$('<a>')
							.attr('href', '#')
							.text(shorturl)
							.on('click', (_event: JQuery.ClickEvent): void => {
								_event.preventDefault();
								_event.stopPropagation();
							})
					),
				{tag: 'shortURL', type: 'info'}
			);
		};
		clipboardInstance?.destroy();
		clipboardInstance = new ClipboardJS(headerElement, {
			text: (): string => {
				return shorturl;
			},
		});
	};
	const init = async ({
		articleId,
		diffId,
		oldId,
		revisionId,
	}: {
		articleId: number;
		diffId: number;
		oldId: number | false;
		revisionId: number;
	}): Promise<void> => {
		const $body: JQuery<HTMLBodyElement> = $('body');
		if (diffId) {
			const buildLink = (_oldId: number | false, link = '/d'): void => {
				if (_oldId) {
					link += `/${_oldId}`;
				}
				link += `/${diffId}`;
				doIns(link);
			};
			buildLink(oldId);
			if (oldId) {
				const api: mw.Api = initMwApi(`Qiuwen/1.1 (ShortURL/1.1; ${mw.config.get('wgWikiID')})`);
				try {
					const params: ApiComparePagesParams = {
						action: 'compare',
						format: 'json',
						formatversion: '2',
						prop: 'ids',
						fromrev: diffId,
						torelative: 'prev',
					};
					const {compare} = await api.get(params);
					if (
						diffId === mw.config.get('wgDiffNewId') &&
						compare?.fromrevid === mw.config.get('wgDiffOldId')
					) {
						buildLink(false);
					}
				} catch {}
			}
		} else if (
			revisionId &&
			($body.find('#contentSub').find('#mw-revision-nav').length ||
				$body.find('main#content>.pre-content #mw-revision-nav').length) > 0
		) {
			doIns(`/p/${revisionId}`);
		} else if (articleId) {
			doIns(`/c/${articleId}`);
		}
	};
	mw.hook('wikipage.content').add(($content): void => {
		if ($content.attr('id') !== 'mw-content-text') {
			return;
		}
		init({
			articleId: mw.config.get('wgArticleId'),
			diffId: mw.config.get('wgDiffNewId'),
			oldId: mw.config.get('wgDiffOldId'),
			revisionId: mw.config.get('wgRevisionId'),
		});
	});
};
