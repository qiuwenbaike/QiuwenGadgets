import {ArcLocNotAllowed, InBlackList, NoArcLoc, NotAllowed} from './modules/components/react';
import {addLinks, appendFooterNotice} from './modules/addLinks';
import {getSettings, ifArcLocNotAllowed, isInBlacklist, isNotAllowed, isNotSupported} from './modules/util/getSettings';
import React from 'ext.gadget.React';

(function easyArchive() {
	const notSupported = isNotSupported();
	if (notSupported) {
		return;
	}

	const inBlacklist = isInBlacklist();
	if (inBlacklist) {
		appendFooterNotice(<InBlackList />);
		return;
	}

	const notAllowed = isNotAllowed();
	if (notAllowed) {
		appendFooterNotice(<NotAllowed />);
		return;
	}

	const settings = getSettings();
	if (!settings) {
		appendFooterNotice(<NoArcLoc />);
		return;
	}

	const {arcLoc} = settings;
	if (!arcLoc) {
		appendFooterNotice(<NoArcLoc />);
		return;
	}

	const arcLocNotAllowed = ifArcLocNotAllowed(arcLoc);
	if (arcLocNotAllowed) {
		appendFooterNotice(<ArcLocNotAllowed arcLoc={arcLoc} />);
		return;
	}

	void addLinks(settings);
})();
