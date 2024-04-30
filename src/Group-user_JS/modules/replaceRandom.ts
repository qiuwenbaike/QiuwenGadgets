import {userHasRight} from 'ext.gadget.Util';

const replaceRandom = ($body: JQuery<HTMLBodyElement>) => {
	const {wgWikiID} = mw.config.get();
	// Disabled for wikis other than zhqiuwenbaike
	if (wgWikiID !== 'zhqiuwenbaike') {
		return;
	}

	if (!userHasRight('rnrsverify-confirmed') && !userHasRight('rnrsverify-exempt')) {
		return;
	}

	const $randomPageLink = $body.find('#n-randompage a');
	$randomPageLink.attr('href', '/wiki/Special:RandomPage');
};

export {replaceRandom};
