/* eslint-disable unicorn/prefer-add-event-listener */
import {alertTitle, portletText, portletTooltip} from './messages';
import {initMwApi} from '../../util';

let isInit = false;
let clipboardInstance: ClipboardJS | undefined;

const doIns = (link: string): void => {
	const isCitizen: boolean = mw.config.get('skin') === 'citizen';
	let element: HTMLLIElement | null = document.querySelector('#t-shortlink');
	if (!element) {
		element = mw.util.addPortletLink(
			isCitizen ? 'p-tb' : 'p-cactions',
			'#',
			portletText,
			't-shortlink',
			portletTooltip
		);
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

const init = ({
	articleId,
	diffId,
	oldId,
	revisionId,
}: {
	articleId: number;
	diffId: number;
	oldId: number | false;
	revisionId: number;
}): void => {
	const $body = $('body');
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
			const params: ApiComparePagesParams = {
				action: 'compare',
				format: 'json',
				formatversion: '2',
				prop: 'ids',
				fromrev: diffId,
				torelative: 'prev',
			};
			api.get(params).then((response) => {
				if (
					diffId === mw.config.get('wgDiffNewId') &&
					response['compare']?.fromrevid === mw.config.get('wgDiffOldId')
				) {
					buildLink(false);
				}
			});
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

export const shortURL = (): void => {
	mw.hook('wikipage.content').add(($content): void => {
		if ($content.attr('id') !== 'mw-content-text') {
			return;
		}
		const runInit = () => {
			init({
				articleId: mw.config.get('wgArticleId'),
				diffId: mw.config.get('wgDiffNewId'),
				oldId: mw.config.get('wgDiffOldId'),
				revisionId: mw.config.get('wgRevisionId'),
			});
		};
		runInit();

		// add listener
		window.addEventListener('onpopstate', runInit);

		// add Proxy
		/*! https://stackoverflow.com/questions/4570093/how-to-get-notified-about-changes-of-the-history-via-history-pushstate | CC-BY-SA-4.0 <qwbk.cc/H:CC-BY-SA-3.0>*/
		if (!window.pushReplaceRun) {
			window.pushReplaceRun = [];
		}
		Array.prototype.push(window.pushReplaceRun, runInit);

		if (!window.history.pushState) {
			window.history.pushState = new Proxy(window.history.pushState, {
				apply: (
					target,
					thisArg,
					argArray: [data: unknown, unused: string, url?: string | URL | null | undefined]
				) => {
					for (const subFunc of window.pushReplaceRun) {
						subFunc();
					}
					return target.apply(thisArg, argArray);
				},
			});
		}

		if (!window.history.replaceState) {
			window.history.replaceState = new Proxy(window.history.replaceState, {
				apply: (
					target,
					thisArg,
					argArray: [data: unknown, unused: string, url?: string | URL | null | undefined]
				) => {
					for (const subFunc of window.pushReplaceRun) {
						subFunc();
					}
					return target.apply(thisArg, argArray);
				},
			});
		}
	});
};
