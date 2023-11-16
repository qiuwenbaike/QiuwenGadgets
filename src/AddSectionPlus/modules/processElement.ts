import {WG_SKIN} from './constant';

const processElement = ($element: JQuery): void => {
	const title: string = $element.attr('title') ?? $element.attr('aria-label') ?? $element.text().trim();
	switch (WG_SKIN) {
		case 'citizen':
			$element.attr('style', '').css({
				'font-size': '0',
				gap: '0',
			});
			break;
		case 'gongbi':
			$element.attr('title', title).html('&#8203');
			break;
		default:
			$element.attr('title', title).text('[+]');
			break;
	}
};

export {processElement};
