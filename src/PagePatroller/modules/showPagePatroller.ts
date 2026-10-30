import * as OPTIONS from '../options.json';
import {errorMessage, notPatrolledYet, patrolledBy} from './util/getFooterNotices.ts';
import {createFooterRoot} from './util/createFooterRoot.ts';
import {getPatroller} from './util/getPatroller.ts';

const showPagePatroller = async (): Promise<void> => {
	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);
	if (!mountPoint) {
		return;
	}

	const footer = createFooterRoot(mountPoint);

	// if there is a patrol link, the page must be not patrolled
	if (document.querySelector('.patrollink')) {
		footer.append(notPatrolledYet());
		return;
	}

	// Load patroller information
	const {wgPageName} = mw.config.get();

	try {
		const log = await getPatroller(wgPageName);
		const {action, user} = log;
		let {timestamp} = log;

		if (action && action === 'patrol' && user && timestamp) {
			timestamp = new Date(timestamp).toLocaleString();
			footer.append(patrolledBy({timestamp, user}));
		} else {
			footer.append(patrolledBy());
		}
	} catch (error: unknown) {
		// return error(s)
		console.error('[PagePatroller] Ajax error:', error);
		footer.append(errorMessage());
	}
};

export {showPagePatroller};
