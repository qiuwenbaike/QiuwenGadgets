import * as OPTIONS from '../options.json';
import {ArcLocNotAllowed, Enabled, FooterNotice, InBlackList, NoArcLoc, NotAllowed} from './components/react';
import {getSettings, ifArcLocNotAllowed, isInBlacklist, isNotAllowed, isNotSupported} from './util/getSettings';
import React from 'ext.gadget.JSX';
import {addLinks} from './addLinks';

const loadEasyArcive = () => {
	const notSupported = isNotSupported();
	if (notSupported) {
		return;
	}

	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);
	if (!mountPoint) {
		return;
	}

	const footerElement = <FooterNotice />;
	mountPoint.prepend(footerElement);

	const inBlacklist = isInBlacklist();
	if (inBlacklist) {
		footerElement.append(<InBlackList />);
		return;
	}

	const notAllowed = isNotAllowed();
	if (notAllowed) {
		footerElement.append(<NotAllowed />);
		return;
	}

	const settings = getSettings();
	if (!settings) {
		footerElement.append(<NoArcLoc />);
		return;
	}

	const {arcLoc} = settings;
	if (!arcLoc) {
		footerElement.append(<NoArcLoc />);
		return;
	}

	const arcLocNotAllowed = ifArcLocNotAllowed(arcLoc);
	if (arcLocNotAllowed) {
		footerElement.append(<ArcLocNotAllowed arcLoc={arcLoc} />);
		return;
	}

	footerElement.append(<Enabled arcLoc={arcLoc} />);

	void addLinks(settings);
};

export {loadEasyArcive};
