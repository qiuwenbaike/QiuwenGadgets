import {getMessage} from './i18n';

export const scrollUpButton = (): void => {
	const $window: JQuery<Window> = $(window);
	const changeOpacity = (event: JQuery.TriggeredEvent): void => {
		event.currentTarget.style.opacity = event.type === 'mouseenter' ? '1' : '0.7';
	};
	const scrollTop = (height: number): void => {
		$('html, body').animate(
			{
				scrollTop: height,
			},
			660
		);
	};
	/**
	 * @description Up Arrow (with blue color and white background)
	 * @author WaitSpring
	 * @base <https://www.qiuwenbaike.cn/wiki/File:Up_Arrow_(Blue,_White_BG).svg>
	 * @license CC-BY-SA-4.0
	 */
	const $scrollButton: JQuery = $('<img>').addClass('noprint').attr({
		draggable: false,
		src: 'https://tu.zhongwen.wiki/images/qiuwen/thumb/8/8e/Up_Arrow_%28Blue%29.svg/50px-Up_Arrow_%28Blue%29.svg.png',
	});
	const $scrollDownButton: JQuery = $scrollButton
		.clone()
		.attr({
			id: 'scrollDownButton',
			alt: getMessage('ToBottom'),
			title: getMessage('ToBottom'),
		})
		.on('click', (): void => {
			scrollTop(($(document).height() ?? 0) - ($window.height() ?? 0));
		});
	const $scrollUpButton: JQuery = $scrollButton
		.clone()
		.attr({
			id: 'scrollUpButton',
			alt: getMessage('ToTop'),
			title: getMessage('ToTop'),
		})
		.on('click', (): void => {
			scrollTop(0);
		});
	[$scrollDownButton, $scrollUpButton].forEach(($element: JQuery): void => {
		$element.on('mouseenter mouseleave', changeOpacity).appendTo(document.body);
	});
	$window.on('scroll selectionchange', (): void => {
		if ($('#cat_a_lot').length || $('#proveit').length || $('.wordcount').length) {
			$scrollDownButton.css('bottom', '78px');
			$scrollUpButton.css('bottom', '120px');
		} else {
			$scrollDownButton.css('bottom', '36px');
			$scrollUpButton.css('bottom', '78px');
		}
	});
};
