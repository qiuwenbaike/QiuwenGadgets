import * as OPTIONS from '../../options.json';
import {FooterIcon, type FooterIconProps} from '../components/react';
import React from 'ext.gadget.React';

const appendFooterNotice = (element: Element) => {
	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);

	if (mountPoint) {
		mountPoint.prepend(element);
	}
};

const appendIcon = ({icon, indicatorText, spanClass}: FooterIconProps): void => {
	if (!spanClass || !icon || !indicatorText) {
		return;
	}

	appendFooterNotice(<FooterIcon spanClass={spanClass} icon={icon} indicatorText={indicatorText} />);
};

export {appendIcon};
