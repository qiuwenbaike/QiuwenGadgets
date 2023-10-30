import {SELECTOR} from './module/constant';
import {getMessage} from './module/i18n';

$((): void => {
	if (!$(SELECTOR).length) {
		return;
	}

	const linkHref: string = $(SELECTOR).attr('href') ?? '';
	if (!linkHref) {
		return;
	}

	location.href = linkHref;

	mw.notify(getMessage('Redirecting'), {
		tag: 'DidYouMean',
		type: 'warn',
	});
});
