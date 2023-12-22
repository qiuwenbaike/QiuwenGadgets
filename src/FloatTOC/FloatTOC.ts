import {floatTOC} from './modules/core';
import {getBody} from '~/util';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	const $originToc: JQuery = $body.find('#toc');
	if (!$originToc.length) {
		return;
	}

	floatTOC($originToc);
});
