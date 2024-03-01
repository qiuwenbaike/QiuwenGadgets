import {PatrolAllPages, PatrolSinglePage} from './modules/PatrolPage';
import {getBody} from 'ext.gadget.Util';

void getBody().then(function quickPatrol($body: JQuery<HTMLBodyElement>): void {
	if (mw.config.get('wgCanonicalSpecialPageName') !== 'Newpages') {
		return;
	}

	/* Patrol single page */
	for (const [index, element] of Object.entries(document.querySelectorAll('.not-patrolled'))) {
		const $element: JQuery = $(element as HTMLElement);

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

		element.append(PatrolSinglePage(index, revIds[1]));
	}

	/* Patrol all pages */
	$body.find('#mw-content-text ul').append(PatrolAllPages($body));
});
