import {CLASS_NAME_BUTTON, URL} from '../modules/constant';
import React from 'ext.gadget.React';
import {getMessage} from '../modules/i18n';

const LINK_TITLE: string = getMessage('Report');

const ReportButton = () => (
	<img
		className={[CLASS_NAME_BUTTON, 'noprint']}
		src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E"
		width="32"
		height="32"
		draggable={false}
		alt={LINK_TITLE}
		aria-label={LINK_TITLE}
		onClick={(): void => {
			window.open(URL, '_blank', 'noopener,noreferrer');
		}}
	/>
);

export default ReportButton;
