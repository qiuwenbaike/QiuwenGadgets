import {URL} from './constant';
import {getMessage} from './i18n';

const addPortletLink = (): void => {
	if (mw.config.get('wgNamespaceNumber') < 0) {
		return;
	}

	const linkTilte: string = getMessage('Report');
	const portletId: string = 'p-tb';
	mw.util.addPortletLink(portletId, URL, linkTilte, 't-report', linkTilte);
};

export {addPortletLink};
