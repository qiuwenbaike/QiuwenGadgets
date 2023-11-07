/* eslint-disable mediawiki/class-doc */
import {CLASS_BUTTON, CLASS_BUTTON_DOWN, CLASS_BUTTON_UP} from './constant';
import {generateSvgDataUrl, scrollTop} from '../../util';
import {getMessage} from './i18n';
import scrollButton from '../images/scroll-button.svg';

const $scrollButton: JQuery = $('<img>')
	.addClass(`${CLASS_BUTTON} noprint`)
	.attr({
		src: generateSvgDataUrl(scrollButton),
		draggable: false,
	});

const toBottom: string = getMessage('ToBottom');
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
