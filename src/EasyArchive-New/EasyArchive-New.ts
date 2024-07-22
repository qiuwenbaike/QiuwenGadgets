import './EasyArchive-New.less';
import {
	arcLocNotAllowedFooterNotice,
	enabledFooterNotice,
	noArcLocFooterNotice,
	notAllowededFooterNotice,
	notSupportededFooterNotice,
} from './modules/footerNotice';
import {addLinks} from './modules/addLinks';
import {getSettings} from './modules/settings';
import {ifArcLocNotAllowed} from './modules/ifArcLocNotAllowed';
import {isNotAllowed} from './modules/isNotAllowed';
import {isNotSupported} from './modules/isNotSupported';

(function easyArchive() {
	const notSupported = isNotSupported();
	if (notSupported) {
		notSupportededFooterNotice();
		return;
	}

	const notAllowed = isNotAllowed();
	if (notAllowed) {
		notAllowededFooterNotice();
		return;
	}

	const settings = getSettings();
	if (!settings) {
		noArcLocFooterNotice();
		return;
	}

	const {arcLevel, arcLoc, secArc, secDel} = settings;
	if (!arcLoc) {
		noArcLocFooterNotice();
		return;
	}

	const arcLocNotAllowed = ifArcLocNotAllowed(arcLoc);
	if (arcLocNotAllowed) {
		arcLocNotAllowedFooterNotice(arcLoc);
		return;
	}

	void addLinks({arcLevel, arcLoc, secArc, secDel});
	enabledFooterNotice(arcLoc);
})();
