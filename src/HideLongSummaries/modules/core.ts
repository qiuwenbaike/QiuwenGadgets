import {LIMIT} from './constant';
import {getMessage} from './i18n';

export const hideLongSummaries = (): void => {
	const $body: JQuery<HTMLBodyElement> = $('body');
	$body.find('.comment').each((_index: number, element: HTMLElement): void => {
		if (element.textContent && element.textContent.length > LIMIT && element.parentElement !== null) {
			$(element).addClass('gadget-hide_long_summaries__long');
			$('<a>')
				.addClass('gadget-hide_long_summaries__switch')
				.text(getMessage('[') + getMessage('Expand') + getMessage(']'))
				.insertAfter(element);
			const $short: JQuery = $('<span>').addClass(
				'comment comment--without-parentheses gadget-hide_long_summaries__short'
			);
			$short.text(`${element.textContent.slice(0, Math.max(0, LIMIT + 1))}...${element.textContent.slice(-1)}`);
			$short.insertAfter(element);
			$(element.parentElement).find('>.gadget-hide_long_summaries__long').hide();
		}
	});
	$body.find('.gadget-hide_long_summaries__switch').on('click', (event: JQuery.ClickEvent): void => {
		const {parentElement} = event.target;
		if (parentElement !== null) {
			const $parentElement: JQuery = $(parentElement);
			if ($parentElement.find('>.gadget-hide_long_summaries__long').is(':visible')) {
				$parentElement.find('>.gadget-hide_long_summaries__long').hide();
				$parentElement.find('>.gadget-hide_long_summaries__short').show();
				$parentElement
					.find('>.gadget-hide_long_summaries__switch')
					.text(getMessage('[') + getMessage('Expand') + getMessage(']'));
			} else {
				$parentElement.find('>.gadget-hide_long_summaries__long').show();
				$parentElement.find('>.gadget-hide_long_summaries__short').hide();
				$parentElement
					.find('>.gadget-hide_long_summaries__switch')
					.text(getMessage('[') + getMessage('Collapse') + getMessage(']'));
			}
		}
	});
};
