import {getBody} from 'ext.gadget.Util';
import {getContributors} from './modules/getContributors';
import {getMessage} from './modules/i18n';

void getBody().then(async ($body: JQuery<HTMLBodyElement>) => {
	const {wgAction, wgArticleId, wgPageName} = mw.config.get();

	if (!wgPageName) {
		return;
	}

	if (wgAction !== 'view' || !wgArticleId) {
		return;
	}

	const contributors = await getContributors(wgPageName);

	$body
		.find('#footer-info-lastmod')
		.append(
			$('<span>').text(
				getMessage('Based on contributions of').replace('$1', contributors.join(getMessage('Seperator')))
			)
		);
});
