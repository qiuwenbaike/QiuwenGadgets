import {WG_SKIN} from './constant';
import {getMessage} from './i18n';

const processElement = ($element: JQuery): void => {
	const title = getMessage('Title');
	switch (WG_SKIN) {
		case 'citizen':
			$element.attr('style', 'font-size:0;gap:0');
			break;
		case 'gongbi':
			$element.attr('title', title);
			$element.html('&#8203');
			break;
		default:
			$element.attr('title', title);
			$element.text('[+]');
			break;
	}
};

export {processElement};
