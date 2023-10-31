import {LIMIT} from './constant';
import {getMessage} from './i18n';

export const hideLongSummaries = () => {
	$('.comment').each((_index: number, element: HTMLElement): void => {
		if (element.textContent && element.textContent.length > LIMIT && element.parentElement !== null) {
			$(element).addClass('commentlong');
			$('<a>').addClass('hidecomment').text(getMessage('Expand')).insertAfter(element);
			const $short: JQuery = $('<span>').addClass('comment comment--without-parentheses commentshort');
			$short.text(`${element.textContent.slice(0, Math.max(0, LIMIT + 1))}...${element.textContent.slice(-1)}`);
			$short.insertAfter(element);
			$(element.parentElement).find('>.commentlong').hide();
		}
	});
	$('.hidecomment').on('click', (event: JQuery.ClickEvent): void => {
		const {parentElement} = event.target;
		if (parentElement !== null) {
			const $parentElement: JQuery = $(parentElement);
			if ($parentElement.find('>.commentlong').is(':visible')) {
				$parentElement.find('>.commentlong').hide();
				$parentElement.find('>.commentshort').show();
				$parentElement.find('>.hidecomment').text(getMessage('[') + getMessage('Expand') + getMessage(']'));
			} else {
				$parentElement.find('>.commentlong').show();
				$parentElement.find('>.commentshort').hide();
				$parentElement.find('>.hidecomment').text(getMessage('[') + getMessage('Hide') + getMessage(']'));
			}
		}
	});
};
