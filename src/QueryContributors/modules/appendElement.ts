import * as OPTIONS from '../options.json';
import {createFooterRoot} from './util/createFooterRoot';
import {footerUserList} from './util/getfooterUserList';

const appendElement = (userNames: (string | number)[]): void => {
	if (!userNames || !userNames.length) {
		return;
	}

	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);
	if (!mountPoint) {
		return;
	}

	const footer = createFooterRoot(mountPoint);
	footer.append(footerUserList({userNames}));
};

export {appendElement};
