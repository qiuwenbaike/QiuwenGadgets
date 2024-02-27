import {URL, WG_NAMESPACE_NUMBER} from './constant';
import {getMessage} from './i18n';

const addPortletLink = (): void => {
	if (WG_NAMESPACE_NUMBER < 0) {
		return;
	}

	const linkTilte: string = getMessage('Report');
	mw.util.addPortletLink('p-tb', URL, linkTilte, 't-report', linkTilte);
};

export {addPortletLink};
