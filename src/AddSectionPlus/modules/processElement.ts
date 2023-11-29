import {WG_SKIN} from './constant';

const processElement = ($element: JQuery): void => {
	const title: string = $element.attr('title') ?? $element.attr('aria-label') ?? $element.text().trim();
	switch (WG_SKIN) {
		case 'gongbi':
			$element.attr({title}).html('&#8203');
			break;
		default:
			$element.attr({title}).text('[+]');
			break;
	}
};

export {processElement};
