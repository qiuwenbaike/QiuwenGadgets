import './EasyArchive-New.less';
import {addLinks} from './modules/addLinks';
import {getSettings} from './modules/settings';
import {ifArcLocNotAllowed} from './modules/ifArcLocNotAllowed';
import {isInBlacklist} from './modules/isInBlackList';

(function easyArchive() {
	const inBlacklist = isInBlacklist();
	if (inBlacklist) {
		return;
	}

	const settings = getSettings();
	if (!settings) {
		return;
	}

	const {arcLevel, arcLoc, secArc, secDel} = settings;
	if (!arcLoc) {
		return;
	}

	const arcLocNotAllowed = ifArcLocNotAllowed(arcLoc);
	if (arcLocNotAllowed) {
		return;
	}

	void addLinks({arcLevel, arcLoc, secArc, secDel});
})();
