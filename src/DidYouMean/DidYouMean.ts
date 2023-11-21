import {SELECTOR} from './modules/constant';
import {getMessage} from './modules/i18n';

$(function DidYouMean(): void {
	const $body = $('body');

	if (!$body.find(SELECTOR).length) {
		return;
	}

	const linkHref: string = $body.find(SELECTOR).attr('href') ?? '';
	if (!linkHref) {
		return;
	}

	location.href = linkHref;

	mw.notify(getMessage('Redirecting'), {
		tag: 'DidYouMean',
		type: 'warn',
	});
});
