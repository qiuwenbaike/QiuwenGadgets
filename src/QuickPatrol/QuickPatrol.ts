import {getBody} from 'ext.gadget.Util';
import {patrolAllPages} from './modules/patrolAllPages';
import {patrolSinglePage} from './modules/patrolSinglePage';

void getBody().then(function quickPatrol($body: JQuery<HTMLBodyElement>): void {
	if (mw.config.get('wgCanonicalSpecialPageName') !== 'Newpages') {
		return;
	}

	/* Patrol single page */
	const patrolSingleButtons = [];

	for (const [index, element] of Object.entries($body.find('.not-patrolled'))) {
		const $element: JQuery = $(element);

		const $time: JQuery = $element.find('a');
		if (!$time.length) {
			continue;
		}

		const timeHref: string | undefined = $time.attr('href');
		if (!timeHref) {
			continue;
		}

		const revIds: RegExpMatchArray | null = timeHref?.match(/oldid=([0-9]+)/);
		if (!revIds || !revIds[1]) {
			continue;
		}

		const patrolSingleButton = patrolSinglePage(index, revIds[1]);
		patrolSingleButtons[patrolSingleButtons.length] = patrolSingleButton;
		element.append(patrolSingleButton);
	}

	/* Patrol all pages */
	$body.find('#mw-content-text .mw-pager-body').append(patrolAllPages(patrolSingleButtons));
});
