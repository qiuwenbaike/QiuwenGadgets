import {CLASS_NAME_TOGGLER} from '../constant';

const generateTogglerElement = ($collapsible: JQuery, hideText: string, showText: string): JQuery => {
	const $togglerLink: JQuery = $('<a>').attr('role', 'button').attr('tabindex', '0');
	// Set the text back to hide if it's not collapsed to begin with
	if ($collapsible.hasClass('collapsed')) {
		$togglerLink.text(showText);
	} else {
		$togglerLink.text(hideText);
	}

	// The following classes are used here:
	// * see ./constant.ts
	// * for more information
	const $toggler: JQuery = $('<span>').addClass(`${CLASS_NAME_TOGGLER} noprint`).append('[', $togglerLink, ']');

	return $toggler;
};

export {generateTogglerElement};
