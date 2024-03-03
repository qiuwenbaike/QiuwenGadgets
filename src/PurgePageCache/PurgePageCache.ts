import {getBody} from 'ext.gadget.Util';
import {getMessage} from './modules/i18n';
import {purge} from './modules/purge';

void getBody().then(function purgePageCache($body: JQuery<HTMLBodyElement>): void {
	const {wgAction, wgCurRevisionId, wgIsArticle, wgPageName, wgRevisionId} = mw.config.get();

	if (
		wgAction === 'view' &&
		wgIsArticle &&
		wgCurRevisionId !== 0 &&
		wgRevisionId !== 0 &&
		wgCurRevisionId === wgRevisionId
	) {
		return;
	}

	const portletId: 'p-cactions' | 'p-tb' = $body.find('#p-cactions').length ? 'p-cactions' : 'p-tb';
	const portletElement: HTMLLIElement | null = mw.util.addPortletLink(
		portletId,
		'#',
		getMessage('Purge'),
		'ca-purge',
		getMessage('PurgeFromServer')
	);
	if (!portletElement) {
		return;
	}

	(portletElement.querySelector('a') as HTMLAnchorElement).addEventListener('click', (event: MouseEvent): void => {
		event.preventDefault();
		void purge(wgPageName);
	});

	for (const element of document.querySelectorAll<HTMLAnchorElement>('a[href*="action=purge"]')) {
		const title: string = mw.util.getParamValue('title', element.href) || wgPageName;
		element.addEventListener('click', (event: MouseEvent): void => {
			event.preventDefault();
			void purge(title);
		});
	}
});
