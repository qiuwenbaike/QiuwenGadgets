import {getMessage} from './i18n';

const LICENSES = [
	{
		label: 'CC BY-SA 4.0',
		data: 'cc-by-sa:4.0',
	},
	{
		label: 'CC BY-SA 3.0',
		data: 'cc-by-sa:3.0',
	},
	{
		label: 'CC BY-SA 3.0 CN',
		data: 'cc-by-sa:3.0/cn',
	},
	{
		label: 'CC BY 4.0',
		data: 'cc-by:4.0',
	},
	{
		label: 'CC BY 3.0',
		data: 'cc-by:3.0',
	},
	{
		label: 'CC BY 3.0 CN',
		data: 'cc-by:3.0/cn',
	},
	{
		label: 'CC0-1.0',
		data: 'cc-zero:1.0',
	},
	{
		label: 'KOGL Type I: Attribution',
		data: 'https://www.kogl.or.kr/info/licenseType1.do',
	},
	{
		label: getMessage('Other License'),
		data: getMessage('Replace With License'),
	},
];

const VALID_INTERWIKI_PREFIX = [
	'cc-by',
	'cc-by-sa',
	'cc-zero',
	'cc0',
	'commons',
	'enwiki',
	'incubator',
	'incubator-wp-mnc',
	'incubator-wt-mnc',
	'iso639-3',
	'lexemes',
	'licence',
	'licencewiki',
	'license',
	'login',
	'loginqiuwenbaike',
	'loginwiki',
	'mediawikiwiki',
	'mozillawiki',
	'mw',
	'oldwikisource',
	'pmid',
	'qiuwenbaike',
	'rev',
	'testwikidata',
	'v',
	'voy',
	'wiki',
	'wikibooks',
	'wikidata',
	'wikifunctions',
	'wikinews',
	'wikipedia',
	'wikiquote',
	'wikisource',
	'wikiversity',
	'wikivoyage',
	'wikt',
	'wiktionary',
	'zhqiuwenbaike',
	'zhwiki',
	'zhwikisource',
	'zhwikivoyage',
];

export {LICENSES, VALID_INTERWIKI_PREFIX};
