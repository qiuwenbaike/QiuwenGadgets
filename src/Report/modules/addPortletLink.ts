import {getMessage} from './i18n';

const addPortletLink = (URL: string): void => {
	const {wgNamespaceNumber} = mw.config.get();
	if (wgNamespaceNumber < 0) {
		return;
	}

	const linkTilte: string = getMessage('Report');
	mw.util.addPortletLink('p-tb', URL, linkTilte, 't-report', linkTilte);
};

export {addPortletLink};
