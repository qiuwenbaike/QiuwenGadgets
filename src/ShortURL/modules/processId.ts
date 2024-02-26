import {addPortletLink} from './addPortletLink';
import {buildLink} from './buildLink';
import {compareWithRemoteDiffId} from './compareWithRemoteDiffId';

const processId = (
	isRevisionPage: boolean,
	{
		articleId,
		diffId,
		oldId,
		revisionId,
	}: {
		articleId: number;
		diffId: number | null;
		oldId: number | null;
		revisionId: number | null;
	}
): void => {
	if (diffId) {
		buildLink(oldId, diffId);
		if (oldId) {
			void compareWithRemoteDiffId(diffId);
		}
	} else if (revisionId && isRevisionPage) {
		addPortletLink(`/p/${revisionId}`);
	} else if (articleId) {
		addPortletLink(`/c/${articleId}`);
	}
};

export {processId};
