import {cdxIconDownTriangle, toInlineSvg} from '../icons';
import {getMessage} from '../i18n';

const generateTogglerElement = (isCollapse: boolean): JQuery => {
	const $toggler: JQuery = $('<span>').addClass('float-toc__toggler').html(toInlineSvg(cdxIconDownTriangle));

	if (isCollapse) {
		$toggler.attr('title', getMessage('Expand'));
	} else {
		$toggler.attr('title', getMessage('Collapse')).addClass('collapse');
	}

	return $toggler;
};

export {generateTogglerElement};
