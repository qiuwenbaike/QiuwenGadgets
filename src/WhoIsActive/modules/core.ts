import {appendLastActiveMarker} from './util/appendLastActiveMarker';
import {appendLastActiveMarkerToUserPage} from './util/appendLastActiveMarkerToUserPage';
import {getUserNamesAndElements} from './util/getUserNamesAndElements';

const whoIsActive = ($content: JQuery<HTMLElement>): void => {
	const {usernames, $elements} = getUserNamesAndElements($content);

	if (!usernames.length || !$elements.length) {
		return;
	}

	void appendLastActiveMarker({usernames, $elements});
};

const whoIsActiveUserPage = (): void => {
	const {wgAction, wgNamespaceNumber, wgPageName, wgRelevantUserName} = mw.config.get();

	if (!wgRelevantUserName || wgNamespaceNumber !== 2 || wgAction !== 'view') {
		return;
	}

	const relevantUserPageName: string = new mw.Title(wgRelevantUserName, 2).toText();
	const pageName: string = new mw.Title(wgPageName).toText();
	if (relevantUserPageName !== pageName) {
		return;
	}

	void appendLastActiveMarkerToUserPage(wgRelevantUserName);
};

export {whoIsActive, whoIsActiveUserPage};
