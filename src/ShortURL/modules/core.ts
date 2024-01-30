/* eslint-disable unicorn/prefer-add-event-listener */
import {Clipboard} from 'ext.gadget.Clipboard';
import {getMessage} from './i18n';
import {initMwApi} from 'ext.gadget.Util';
import {tippy} from 'ext.gadget.Tippy';

export const shortURL = (): void => {
	let isInit: boolean = false;
	let clipboardInstance: ClipboardJS | undefined;
	const doIns = (link: string): void => {
		const isCitizen: boolean = mw.config.get('skin') === 'citizen';
		const portletId: 'p-cactions' | 'p-tb' = document.querySelector('#p-cactions') ? 'p-cactions' : 'p-tb';
		let element: HTMLLIElement | null = document.querySelector('#t-shortlink');
		if (!element) {
			element = mw.util.addPortletLink(
				portletId,
				'#',
				getMessage('Short URL'),
				't-shortlink',
				getMessage('Show short URL')
			);
		}
		if (element) {
			((element.firstElementChild ?? element) as HTMLElement).onclick = (event: MouseEvent): void => {
				event.preventDefault();
				const $element: JQuery = $('<div>');
				for (const domain of ['qwbk.cc', 'qwbk.org', 'bkwz.cn']) {
					$element.append(
						// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
						new mw.widgets.CopyTextLayout({
							align: 'top',
							copyText: `https://${domain}${link}`,
							// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
						}).$element as JQuery
					);
				}
				void OO.ui.alert($element, {title: getMessage('Short URL copied to clipboard'), size: 'medium'});
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
							'aria-label': getMessage('Short URL'),
						})
						.append($('<span>').addClass('gadget-short-link__icon').text(getMessage('Short URL')))
				);
			$headerElement.prependTo('.mw-indicators');
			headerElement = $headerElement.find('a').get(0) as HTMLAnchorElement;
			tippy(headerElement, {
				arrow: true,
				content: getMessage('Short URL'),
				placement: 'bottom',
			});
		}
		const shorturl: string = `https://qwbk.cc${link}`;
		headerElement.onclick = (event: MouseEvent): void => {
			event.preventDefault();
			void mw.notify(
				$('<span>')
					.text(getMessage('Short URL copied to clipboard'))
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
		clipboardInstance = new Clipboard(headerElement, {
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
				const api: mw.Api = initMwApi('ShortURL/1.1');
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
						// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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

		const diffId: number | null = mw.config.get('wgDiffNewId');
		const oldId: number | null = mw.config.get('wgDiffOldId');
		if (diffId === null || oldId === null) {
			return;
		}

		void init({
			diffId,
			oldId,
			articleId: mw.config.get('wgArticleId'),
			revisionId: mw.config.get('wgRevisionId'),
		});
	});
};
