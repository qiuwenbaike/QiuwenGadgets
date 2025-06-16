import * as OPTIONS from '../options.json';
import {FooterUserList} from './components/react';
import React from 'ext.gadget.JSX';

const appendElement = (userNames: (string | number)[]): void => {
	if (!userNames || !userNames.length) {
		return;
	}

	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);
	if (!mountPoint) {
		return;
	}

	mountPoint.prepend(<FooterUserList userNames={userNames} />);
};

export {appendElement};
