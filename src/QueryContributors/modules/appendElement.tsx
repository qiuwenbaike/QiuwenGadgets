import * as OPTIONS from '../options.json';
import {FooterUserList} from './components/react';
import React from 'ext.gadget.JSX';

const appendFooterNotice = (element: Element) => {
	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);

	if (mountPoint) {
		mountPoint.prepend(element);
	}
};

const appendElement = (userNames: string[]): void => {
	if (!userNames || !userNames.length) {
		return;
	}

	appendFooterNotice(<FooterUserList userNames={userNames} />);
};

export {appendElement};
