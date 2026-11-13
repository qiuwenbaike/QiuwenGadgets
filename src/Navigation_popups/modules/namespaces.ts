// 本文件由 Navigation_popups 原版 core.js 的 namespaces.js 段落拆分而来，保留原有实现。
import {pg} from './pg';
import {upcaseFirst} from './tools';

const setNamespaces = () => {
	pg.nsSpecialId = -1;
	pg.nsMainspaceId = 0;
	pg.nsImageId = 6;
	pg.nsUserId = 2;
	pg.nsUsertalkId = 3;
	pg.nsCategoryId = 14;
	pg.nsTemplateId = 10;
};
const setRedirs = () => {
	const r = 'redirect';
	const R = 'REDIRECT';
	const redirLists: Record<string, string[]> = {
		ar: [R, 'تحويل'],
		be: [r, 'перанакіраваньне'],
		bg: [r, 'пренасочване', 'виж'],
		bs: [r, 'Preusmjeri', 'preusmjeri', 'PREUSMJERI'],
		bn: [R, 'পুনর্নির্দেশ'],
		cs: [R, 'PŘESMĚRUJ'],
		cy: [r, 'ail-cyfeirio'],
		de: [R, 'WEITERLEITUNG'],
		el: [R, 'ΑΝΑΚΑΤΕΥΘΥΝΣΗ'],
		eo: [R, 'ALIDIREKTU', 'ALIDIREKTI'],
		es: [R, 'REDIRECCIÓN'],
		et: [r, 'suuna'],
		ga: [r, 'athsheoladh'],
		gl: [r, 'REDIRECCIÓN', 'REDIRECIONAMENTO'],
		he: [R, 'הפניה'],
		hu: [R, 'ÁTIRÁNYÍTÁS'],
		is: [r, 'tilvísun', 'TILVÍSUN'],
		it: [R, 'RINVIA', 'Rinvia'],
		ja: [R, '転送'],
		mk: [r, 'пренасочување', 'види'],
		nds: [r, 'wiederleiden'],
		'nds-nl': [R, 'DEURVERWIEZING', 'DUURVERWIEZING'],
		nl: [R, 'DOORVERWIJZING'],
		nn: [r, 'omdiriger'],
		pl: [R, 'PATRZ', 'PRZEKIERUJ', 'TAM'],
		pt: [R, 'redir'],
		ru: [R, 'ПЕРЕНАПРАВЛЕНИЕ', 'ПЕРЕНАПР'],
		sk: [r, 'presmeruj'],
		sr: [r, 'Преусмери', 'преусмери', 'ПРЕУСМЕРИ', 'Preusmeri', 'preusmeri', 'PREUSMERI'],
		tt: [R, 'yünältü', 'перенаправление', 'перенапр'],
		uk: [R, 'ПЕРЕНАПРАВЛЕННЯ', 'ПЕРЕНАПР'],
		vi: [r, 'đổi'],
		yi: [R, 'ווייטערפירן'],
		zh: [R, '重定向'], // no comma
	};
	const redirList = redirLists[pg.wiki.lang] || [r, R];
	// Mediawiki is very tolerant about what comes after the #redirect at the start
	pg.re.redirect = new RegExp(`^\\s*[#](${redirList.join('|')}).*?\\[{2}([^\\|\\]]*)(|[^\\]]*)?\\]{2}\\s*(.*)`, 'i');
};
const setInterwiki = () => {
	if (pg.wiki.qiuwen) {
		pg.wiki.interwiki = 'zh|mnc';
		pg.re.interwiki = new RegExp(`^${pg.wiki.interwiki}:`);
	} else {
		pg.wiki.interwiki = null;
		pg.re.interwiki = /^$/;
	}
};
const nsRe = (namespaceId: number | undefined) => {
	const imageNamespaceVariants = [];
	for (const [_localizedNamespaceLc, _namespaceId] of Object.entries(mw.config.get('wgNamespaceIds'))) {
		if (_namespaceId !== namespaceId) {
			continue;
		}
		const localizedNamespaceLc = upcaseFirst(_localizedNamespaceLc) ?? '';
		imageNamespaceVariants.push(
			mw.util.escapeRegExp(localizedNamespaceLc).split(' ').join('[ _]'),
			mw.util.escapeRegExp(encodeURI(localizedNamespaceLc))
		);
	}
	return `(?:${imageNamespaceVariants.join('|')})`;
};
const nsReImage = () => {
	return nsRe(pg.nsImageId);
};

export {nsRe, nsReImage, setInterwiki, setNamespaces, setRedirs};
