import {LINK_TITLE, URL} from './constant';

if (!(mw.config.get('wgNamespaceNumber') < 0)) {
	mw.util.addPortletLink(
		document.getElementById('p-pagemisc') ? 'p-pagemisc' : 'p-tb',
		URL,
		LINK_TITLE,
		't-report',
		LINK_TITLE
	);
}
