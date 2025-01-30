import * as OPTIONS from '../options.json';
import {elementWrap, errorMessage, loading, notBeenPatrolledYet, patrolled, patrolledBy} from './util/elementWrap';
import {getPatroller} from './util/getPatroller';
import {replaceChild} from './util/replaceChild';

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
		const log = await getPatroller(wgPageName);
		const {action, user, timestamp} = log;

		if (action && user && timestamp) {
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
