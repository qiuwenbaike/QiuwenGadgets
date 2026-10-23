import emptySvg from '../images/empty.svg';
import {gadgetReportButton} from './reportButton.module.less';
import {getMessage} from './i18n';

const element = (URL: string, onMouseEnterLeave: (event: MouseEvent) => void) => {
	const LINK_TITLE: string = getMessage('Report');

	const button = document.createElement('img');
	button.className = [gadgetReportButton, 'noprint'].join(' ');
	button.src = `data:image/svg+xml,${encodeURI(emptySvg)}`;
	button.width = 32;
	button.height = 32;
	button.draggable = false;
	button.alt = LINK_TITLE;
	button.setAttribute('aria-label', LINK_TITLE);

	button.addEventListener('click', (): void => {
		window.open(URL, '_blank', 'noopener, noreferrer');
	});
	button.addEventListener('mouseenter', onMouseEnterLeave);
	button.addEventListener('mouseleave', onMouseEnterLeave);

	return button;
};

export {element as reportButton};
