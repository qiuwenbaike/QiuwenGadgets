import './EasyArchive-New.less';
import {addLinks} from './modules/addLinks';
import {getSettings} from './modules/settings';
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

	void addLinks({arcLevel, arcLoc, secArc, secDel});
})();
