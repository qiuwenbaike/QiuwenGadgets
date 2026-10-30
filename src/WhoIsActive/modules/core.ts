import * as OPTIONS from '../options.json';
import {appendMarkerToUserLinks} from './util/appendMarkerToUserLinks';
import {appendMarkerToUserPage} from './util/appendMarkerToUserPage';
import {getUserLinks} from './util/getUserLinks';

const whoIsActiveUserLinks = ($content: JQuery<HTMLElement>): void => {
	const {wgCanonicalSpecialPageName} = mw.config.get();
	if (wgCanonicalSpecialPageName === 'Recentchanges') {
		return;
	}

	const content: HTMLElement | undefined = $content[0];
	if (!content) {
		return;
	}

	const userLinks = getUserLinks(content);

	for (const [userName, elements] of Object.entries(userLinks)) {
		void appendMarkerToUserLinks({userName, elements});
	}
};

const whoIsActiveUserPage = (): void => {
	const {wgAction, wgNamespaceNumber, wgPageName, wgRelevantUserName} = mw.config.get();

	if (!wgRelevantUserName || wgNamespaceNumber !== OPTIONS.userNameSpaceNumber || wgAction !== 'view') {
		return;
	}

	const relevantUserPageName: string = new mw.Title(wgRelevantUserName, OPTIONS.userNameSpaceNumber).toText();
	const pageName: string = new mw.Title(wgPageName).toText();
	if (relevantUserPageName !== pageName) {
		return;
	}

	void appendMarkerToUserPage(wgRelevantUserName);
};

export {whoIsActiveUserLinks, whoIsActiveUserPage};
