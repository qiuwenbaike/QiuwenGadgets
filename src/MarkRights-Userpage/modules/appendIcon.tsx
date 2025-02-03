import * as OPTIONS from '../options.json';
import {FooterIcon, type IndicatorProps} from '../components/react';
import React from 'ext.gadget.JSX';

const appendFooterNotice = (element: Element) => {
	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);

	if (mountPoint) {
		mountPoint.prepend(element);
	}
};

const appendIcon = ({indicatorText, spanClass}: IndicatorProps): void => {
	if (spanClass === 'unknown' || !indicatorText) {
		return;
	}

	appendFooterNotice(<FooterIcon spanClass={spanClass} indicatorText={indicatorText} />);
};

export {appendIcon};
