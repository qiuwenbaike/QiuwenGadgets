import {toggler} from './Collapsible.module.less';

const generateTogglerElement = ($collapsible: JQuery, hideText: string, showText: string): JQuery => {
	const $toggler = $('<span>')
		.addClass([toggler, 'noprint'])
		.append(
			'[',
			$('<a>')
				.attr('role', 'button')
				.attr('tabindex', 0)
				.text($collapsible.hasClass('collapsed') ? showText : hideText),
			']'
		);

	return $toggler;
};

export {generateTogglerElement};
