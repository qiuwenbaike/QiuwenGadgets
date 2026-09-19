import {addHeaderLink} from './addHeaderLink';
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
		addHeaderLink(`/p/${revisionId}`, `/wiki/Special:Permalink/${revisionId}`);
		addPortletLink(`/p/${revisionId}`, `/wiki/Special:Permalink/${revisionId}`);
	} else if (articleId) {
		addHeaderLink(`/c/${articleId}`, `/index.php?curid=${articleId}`);
		addPortletLink(`/c/${articleId}`, `/index.php?curid=${articleId}`);
	}
};

export {processId};
