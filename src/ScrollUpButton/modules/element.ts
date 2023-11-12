import {CLASS_BUTTON, CLASS_BUTTON_DOWN, CLASS_BUTTON_UP} from './constant';
import {getMessage} from './i18n';
import {scrollTop} from '../../util';

const scrollButton = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";

// The following classes are used here:
// * see ./constant.ts
// * for more information
const $scrollButton: JQuery = $('<img>').addClass(`${CLASS_BUTTON} noprint`).attr({
	src: scrollButton,
	draggable: false,
	width: '32',
	height: '32',
});

const toBottom: string = getMessage('ToBottom');
// The following classes are used here:
// * see ./constant.ts
// * for more information
const $scrollDownButton: JQuery = $scrollButton
	.clone()
	.addClass(CLASS_BUTTON_DOWN)
	.attr({
		alt: toBottom,
		'aria-label': toBottom,
	})
	.on('click', (): void => {
		scrollTop(($(document).height() ?? 0) - ($(window).height() ?? 0));
	});

const toTop: string = getMessage('ToTop');
// The following classes are used here:
// * see ./constant.ts
// * for more information
const $scrollUpButton: JQuery = $scrollButton
	.clone()
	.addClass(CLASS_BUTTON_UP)
	.attr({
		alt: toTop,
		'aria-label': toTop,
	})
	.on('click', (): void => {
		scrollTop(0);
	});

export {$scrollButton, $scrollDownButton, $scrollUpButton};
