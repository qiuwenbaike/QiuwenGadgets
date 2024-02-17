const WG_SKIN: string = mw.config.get('skin');
const DIS_SUPPORT_PAGES_REGEX = [
	/^File:.*$/,
	/^MediaWiki:.*$/,
	/^Module:.*$/,
	/^Category:.*$/,
	/^Template:.*$/,
	/^Special:.*$/,
	/^User:.*\/?.*\.js$/,
	/^User:.*\/?.*\.css$/,
	/^User:.*\/?.*\.json$/,
];

export {WG_SKIN, DIS_SUPPORT_PAGES_REGEX};
