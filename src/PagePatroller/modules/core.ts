import * as OPTIONS from '../options.json';
import {elementWrap, errorMessage, loading, notBeenPatrolledYet, patrolled, patrolledBy} from './elementWrap';
import {api} from './api';
import {replaceChild} from './replaceChild';

const pagePatroller = async (): Promise<void> => {
	const element = elementWrap();
	document.querySelectorAll(OPTIONS.mountPointSelector)[0]?.prepend(element);

	// if there is a patrol link, the page must be not patrolled
	if (document.querySelectorAll('.patrollink').length) {
		element.append(notBeenPatrolledYet());
		return;
	}

	// Load patroller info
	// add `Loading...`
	element.append(loading());

	const {wgPageName} = mw.config.get();

	try {
		const params: ApiQueryRevisionsParams & ApiQueryLogEventsParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			prop: 'revisions',
			titles: wgPageName,
			list: 'logevents',
			letype: 'patrol',
			letitle: wgPageName,
			rvprop: 'timestamp',
			rvlimit: 1,
			rvdir: 'newer',
			smaxage: 600,
			maxage: 600,
		};
		const {query} = await api.get(params);

		if (query?.logevents && query.logevents.length) {
			const [log]: [
				{
					user: string;
					timestamp: string;
					action: string;
				},
			] = query.logevents as [
				{
					user: string;
					timestamp: string;
					action: string;
				},
			];
			const {action, user} = log;
			const {timestamp} = log;
			const date: Date = new Date(timestamp);

			if (action === 'patrol') {
				replaceChild(element, patrolledBy(date.toLocaleString(), user));
			} else {
				replaceChild(element, patrolled());
			}
		} else {
			replaceChild(element, patrolled());
		}
	} catch (error: unknown) {
		// return error(s)
		console.error('[PagePatroller]:', error);
		replaceChild(element, errorMessage());
	}
};

export {pagePatroller};
