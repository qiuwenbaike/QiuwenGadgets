import {addPortletLink} from './addPortletLink';
import {buildLink} from './buildLink';
import {compareWithRemoteDiffId} from './compareWithRemoteDiffId';
import {getMessage} from './i18n';

const processId = (
	isRevisionPage: boolean,
	{diffId, oldId, revisionId}: {diffId: number; oldId: number; revisionId: number}
): void => {
	if (diffId) {
		buildLink(oldId, diffId);
		if (oldId) {
			compareWithRemoteDiffId(diffId);
		}
	} else if (revisionId && isRevisionPage) {
		addPortletLink({
			text: getMessage('Permanent'),
			tooltip: getMessage('CopyPermanent'),
			link: `Special:PermaLink/${revisionId}`,
			defaultTextArrayIndex: 1,
			isPermaLink: true,
		});
	}
};

export {processId};
