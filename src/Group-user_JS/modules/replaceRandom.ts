import {userIsInGroup} from 'ext.gadget.Util';

const replaceRandom = ($body: JQuery<HTMLBodyElement>) => {
	const {wgWikiID} = mw.config.get();
	if (wgWikiID !== 'zhqiuwenbaike') {
		return;
	}

	if (
		!(
			userIsInGroup('rnrsverify-confirmed') ||
			userIsInGroup('rnrsverify-exempt') ||
			userIsInGroup('steward') ||
			userIsInGroup('qiuwen') ||
			userIsInGroup('confirmed') ||
			userIsInGroup('autoconfirmed')
		)
	) {
		return;
	}

	const $randomPageLink = $body.find('#n-randompage a');
	$randomPageLink.attr('href', '/wiki/Special:RandomPage');
};

export {replaceRandom};
