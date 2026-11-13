// 本文件由 Navigation_popups 原版 core.js 的 init.js 段落拆分而来，保留原有实现。
import {getValueOf, setOptions} from './options';
import {literalizeRegex, map} from './tools';
import {nsRe, nsReImage, setInterwiki, setNamespaces, setRedirs} from './namespaces';
import type {ApiResponse} from 'types-mediawiki/mw/Api';
import {Navpopup} from './navpopup';
import {api} from './api';
import {pg} from './pg';
import {setupDebugging} from './debug';
import {setupLivePreview} from './livepreview';
import {setupTooltips} from './actions';

const setSiteInfo = () => {
	pg.wiki.hostname = location.hostname; // use in preference to location.hostname for flexibility (?)
	pg.wiki.qiuwen = /\.qiuwenbaike\.cn|\.qiuwen\.wiki/.test(pg.wiki.hostname);
	pg.wiki.commons = 'www.qiuwenbaike.cn';
	pg.wiki.lang = mw.config.get('wgContentLanguage');
	const port = location.port ? `:${location.port}` : '';
	pg.wiki.sitebase = pg.wiki.hostname + port;
};
interface UserRightsResponse {
	query: {
		users: {
			rights: string[];
		}[];
	};
}
const setUserInfo = () => {
	const params = {
		action: 'query',
		list: 'users',
		ususers: mw.config.get('wgUserName'),
		usprop: 'rights',
	};
	pg.user.canReview = false;
	if (getValueOf('popupReview')) {
		getMwApi()
			.get(params)
			.done((data: ApiResponse) => {
				const {rights} = (data as UserRightsResponse).query.users[0]!;
				pg.user.canReview = rights.includes('review'); // TODO: Should it be a getValueOf('ReviewRight') ?
			});
	}
};
interface SpecialPageAliasesResponse {
	query: {
		specialpagealiases: {realname: string; aliases: string[]}[];
	};
}
const fetchSpecialPageNames = () => {
	const params = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		meta: 'siteinfo',
		siprop: 'specialpagealiases',
		uselang: 'content',
		// cache for an hour
		smaxage: 3600,
		maxage: 3600,
	};
	return getMwApi()
		.get(params)
		.then((data: ApiResponse) => {
			pg.wiki.specialpagealiases = (data as SpecialPageAliasesResponse).query.specialpagealiases;
		});
};
const setTitleBase = () => {
	const protocol = window.popupLocalDebug ? 'http:' : location.protocol;
	pg.wiki.articlePath = mw.config.get('wgArticlePath').replace(/\/\$1/, ''); // as in http://some.thing.com/wiki/Article
	pg.wiki.botInterfacePath = mw.config.get('wgScript');
	pg.wiki.APIPath = `${mw.config.get('wgScriptPath')}/api.php`;
	// default mediawiki setting is paths like http://some.thing.com/articlePath/index.php?title=foo
	const titletail = `${pg.wiki.botInterfacePath}?title=`;
	// let titletail2 = joinPath([pg.wiki.botInterfacePath, 'wiki.phtml?title=']);
	// other sites may need to add code here to set titletail depending on how their urls work
	pg.wiki.titlebase = `${protocol}//${pg.wiki.sitebase}${titletail}`;
	// pg.wiki.titlebase2  = protocol + '//' + joinPath([pg.wiki.sitebase, titletail2]);
	pg.wiki.wikibase = `${protocol}//${pg.wiki.sitebase}${pg.wiki.botInterfacePath}`;
	pg.wiki.apiwikibase = `${protocol}//${pg.wiki.sitebase}${pg.wiki.APIPath}`;
	pg.wiki.articlebase = `${protocol}//${pg.wiki.sitebase}${pg.wiki.articlePath}`;
	pg.wiki.commonsbase = `${protocol}//${pg.wiki.commons}${pg.wiki.botInterfacePath}`;
	pg.wiki.apicommonsbase = `${protocol}//${pg.wiki.commons}${pg.wiki.APIPath}`;
	pg.re.basenames = new RegExp(`^(${map(literalizeRegex, [pg.wiki.titlebase, pg.wiki.articlebase]).join('|')})`);
};
const setMainRegex = () => {
	const reStart = '[^:]*://';
	let preTitles = `${literalizeRegex(mw.config.get('wgScriptPath'))}/(?:index[.]php|wiki[.]phtml)[?]title=`;
	preTitles += `|${literalizeRegex(`${pg.wiki.articlePath}/`)}`;
	const reEnd = `(${preTitles})([^&?#]*)[^#]*(?:#(.+))?`;
	pg.re.main = new RegExp(reStart + literalizeRegex(pg.wiki.sitebase) + reEnd);
};
const buildSpecialPageGroup = (specialPageObj: {realname: string; aliases: string[]}) => {
	const variants = [];
	variants.push(
		mw.util.escapeRegExp(specialPageObj.realname),
		mw.util.escapeRegExp(encodeURI(specialPageObj.realname))
	);
	for (const alias of specialPageObj.aliases) {
		variants.push(mw.util.escapeRegExp(alias), mw.util.escapeRegExp(encodeURI(alias)));
	}
	return variants.join('|');
};
const setRegexps = () => {
	setMainRegex();
	const sp = nsRe(pg.nsSpecialId);
	pg.re.urlNoPopup = new RegExp(`((title=|/)${sp}(?:%3A|:)|section=[0-9]|^#$)`);
	for (const specialpage of pg.wiki.specialpagealiases) {
		switch (specialpage.realname) {
			case 'Contributions':
				pg.re.contribs = new RegExp(
					`(title=|/)${sp}(?:%3A|:)(?:${buildSpecialPageGroup(specialpage)})` +
						`(&target=|/|/${nsRe(pg.nsUserId)}:)(.*)`,
					'i'
				);
				break;
			case 'Diff':
				pg.re.specialdiff = new RegExp(
					`/${sp}(?:%3A|:)(?:${buildSpecialPageGroup(specialpage)})/([^?#]*)`,
					'i'
				);
				break;
			case 'Emailuser':
				pg.re.email = new RegExp(
					`(title=|/)${sp}(?:%3A|:)(?:${buildSpecialPageGroup(specialpage)})` +
						`(&target=|/|/(?:${nsRe(pg.nsUserId)}:)?)(.*)`,
					'i'
				);
				break;
			case 'Whatlinkshere':
				pg.re.backlinks = new RegExp(
					`(title=|/)${sp}(?:%3A|:)(?:${buildSpecialPageGroup(specialpage)})(&target=|/)([^&]*)`,
					'i'
				);
				break;
		}
	}
	const im = nsReImage();
	// note: tries to get images in infobox templates too, e.g. movie pages, album pages etc
	//					  (^|\[\[)image: *([^|\]]*[^|\] ]) *
	//					  (^|\[\[)image: *([^|\]]*[^|\] ])([^0-9\]]*([0-9]+) *px)?
	//														$4 = 120 as in 120px
	pg.re.image = new RegExp(
		`(^|\\[\\[)${im}: *([^|\\]]*[^|\\] ])${String.raw`([^0-9\]]*([0-9]+) *px)?|(?:\n *[|]?|[|]) *`}(${getValueOf('popupImageVarsRegexp')})` +
			` *= *(?:\\[\\[ *)?(?:${im}:)?${String.raw`([^|]*?)(?:\]\])? *[|]? *\n`}`,
		'img'
	);
	pg.re.imageBracketCount = 6;
	pg.re.category = new RegExp(`\\[\\[${nsRe(pg.nsCategoryId)}: *([^|\\]]*[^|\\] ]) *`, 'i');
	pg.re.categoryBracketCount = 1;
	// IPv6 | IPv4
	pg.re.ipUser =
		/^(?::(?::|(?::[\dA-Fa-f]{1,4}){1,7})|[\dA-Fa-f]{1,4}(?::[\dA-Fa-f]{1,4}){0,6}::|[\dA-Fa-f]{1,4}(?::[\dA-Fa-f]{1,4}){7})|(((25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d))$/;
	pg.re.stub = new RegExp(getValueOf('popupStubRegexp'), 'im');
	pg.re.disambig = new RegExp(getValueOf('popupDabRegexp'), 'im');
	// FIXME replace with general parameter parsing function, this is daft
	pg.re.oldid = /[&?]oldid=([^&]*)/;
	pg.re.diff = /[&?]diff=([^&]*)/;
};
const setupCache = () => {
	// page caching
	pg.cache.pages = [];
};
const setMisc = () => {
	pg.current.link = null;
	pg.current.links = [];
	pg.current.linksHash = {};
	setupCache();
	pg.timer.checkPopupPosition = null;
	pg.counter.loop = 0;
	// ids change with each popup: popupImage0, popupImage1 etc
	pg.idNumber = 0;
	// for myDecodeURI
	pg.misc.decodeExtras = [
		{from: '%2C', to: ','},
		{from: '_', to: ' '},
		{from: '%24', to: '$'},
		{from: '%26', to: '&'}, // no ,
	];
};
const getMwApi = () => {
	if (!pg.api.client) {
		pg.api.userAgent = 'Navigation popups/1.0';
		pg.api.client = api;
	}
	return pg.api.client;
};
let setupPopupsCompleted = false;
const setupPopups = function setupPopups(callback: () => void) {
	if (setupPopupsCompleted) {
		if (typeof callback === 'function') {
			callback();
		}
		return;
	}
	// These dependencies should alse be enforced from the gadget,
	// but not everyone loads this as a gadget, so double check
	fetchSpecialPageNames().then(() => {
		// NB translatable strings should be set up first (strings.js)
		// basics
		setupDebugging();
		setSiteInfo();
		setTitleBase();
		setOptions(); // see options.js
		setUserInfo();
		// namespaces etc
		setNamespaces();
		setInterwiki();
		// regexps
		setRegexps();
		setRedirs();
		// other stuff
		setMisc();
		setupLivePreview();
		// main deal here
		setupTooltips();
		log('In setupPopups(), just called setupTooltips()');
		Navpopup.tracker.enable();
		setupPopupsCompleted = true;
		if (typeof callback === 'function') {
			callback();
		}
	});
};

export {
	buildSpecialPageGroup,
	fetchSpecialPageNames,
	getMwApi,
	setMainRegex,
	setMisc,
	setRegexps,
	setSiteInfo,
	setTitleBase,
	setUserInfo,
	setupCache,
	setupPopups,
};
