import {changeOpacityWhenMouseEnterOrLeave, scrollTop} from 'ext.gadget.Util';
import {scrollButton, scrollButtonDown, scrollButtonUp} from './scrollButton.module.less';
import emptySvg from '../images/empty.svg';
import {getMessage} from './i18n';

interface Props {
	additionalClassName: string;
	alt: string;
	onClick: (event?: MouseEvent) => void;
	onMouseEnterMouseLeave: (event: MouseEvent) => void;
}

const button = (props: Props) => {
	const {additionalClassName, alt, onClick, onMouseEnterMouseLeave} = props;

	const button = document.createElement('img');
	button.className = [scrollButton, additionalClassName, 'noprint'].join(' ');
	button.src = emptySvg;
	button.width = 32;
	button.height = 32;
	button.draggable = false;
	button.alt = alt;
	button.setAttribute('aria-label', alt);

	button.addEventListener('click', onClick);
	button.addEventListener('mouseenter', onMouseEnterMouseLeave);
	button.addEventListener('mouseleave', onMouseEnterMouseLeave);

	return button;
};

const onMouseEnterMouseLeave = (event: MouseEvent): void => {
	changeOpacityWhenMouseEnterOrLeave(event);
};

const scrollDownButton = () => {
	const TO_BOTTOM: string = getMessage('ToBottom');
	const onClick = (): void => {
		scrollTop(($(document).height() ?? 0) - ($(window).height() ?? 0));
	};
	return button({
		additionalClassName: scrollButtonDown,
		alt: TO_BOTTOM,
		onClick,
		onMouseEnterMouseLeave,
	});
};

const scrollUpButton = () => {
	const TO_TOP: string = getMessage('ToTop');
	const onClick = (): void => {
		scrollTop(0);
	};
	return button({
		additionalClassName: scrollButtonUp,
		alt: TO_TOP,
		onClick,
		onMouseEnterMouseLeave,
	});
};

export {scrollDownButton, scrollUpButton};
