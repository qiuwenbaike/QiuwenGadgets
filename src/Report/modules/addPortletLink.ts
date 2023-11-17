import {URL} from './constant';
import {getMessage} from './i18n';

const addPortletLink = (): void => {
	if (mw.config.get('wgNamespaceNumber') < 0) {
		return;
	}

	const linkTilte: string = getMessage('Report');
	mw.util.addPortletLink(
		document.getElementById('p-pagemisc') ? 'p-pagemisc' : 'p-tb',
		URL,
		linkTilte,
		't-report',
		linkTilte
	);
};

export {addPortletLink};
