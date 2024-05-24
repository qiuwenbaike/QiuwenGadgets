import {getBody} from 'ext.gadget.Util';
import {getContributors} from './modules/getContributors';
import {getMessage} from './modules/i18n';
import {sanitize} from './modules/sanitize';

void getBody().then(async ($body: JQuery<HTMLBodyElement>) => {
	const {wgAction, wgArticleId, wgCurRevisionId, wgPageName, wgRevisionId} = mw.config.get();

	if (wgAction !== 'view' || !wgArticleId || !wgPageName) {
		return;
	}

	if (wgCurRevisionId > wgRevisionId) {
		return;
	}

	const contributors: string[] = await getContributors(wgPageName);

	const $contributorsList: JQuery[] = contributors.map((userName, index) => {
		return $('<span>').append(
			$('<a>')
				.attr(
					'href',
					userName.includes('>')
						? mw.util.getUrl(`Special:GoToInterWiki/${sanitize(userName.replace('>', ':User:'))}`)
						: mw.util.getUrl(`User:${sanitize(userName)}`)
				)
				.text(userName),
			index < contributors.length - 1 ? getMessage('Seperator') : ''
		);
	});

	const lastMod = $body.find('#footer-info-lastmod');

	if (lastMod) {
		lastMod.append(
			$('<span>').append(getMessage('Based on contributions of')),
			$contributorsList,
			getMessage('Period')
		);
	}
});
