import {addPortletLink} from './addPortletLink';
import {buildLink} from './buildLink';
import {checkRevisionPage} from './util/checkRevisionPage';
import {compareWithRemoteDiffId} from './compareWithRemoteDiffId';
import {getMessage} from './i18n';

const processId = ({diffId, oldId, revisionId}: {diffId: number; oldId: number; revisionId: number}): void => {
	if (diffId) {
		buildLink(oldId);
		if (oldId) {
			compareWithRemoteDiffId(diffId);
		}
	} else if (revisionId && checkRevisionPage()) {
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
