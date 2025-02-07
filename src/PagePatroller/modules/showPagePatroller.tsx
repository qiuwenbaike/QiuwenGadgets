import * as OPTIONS from '../options.json';
import {ErrorMessage, Loading, NotPatrolledYet, Patrolled} from './components/footerNotices';
import React from 'ext.gadget.JSX';
import {getPatroller} from './util/getPatroller';

const showPagePatroller = async (): Promise<void> => {
	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);
	if (!mountPoint) {
		return;
	}

	// if there is a patrol link, the page must be not patrolled
	if (document.querySelector('.patrollink')) {
		mountPoint.prepend(<NotPatrolledYet />);
		return;
	}

	// Load patroller info
	// add `Loading...`
	const footerElement = <Loading />;
	mountPoint.prepend(footerElement);

	const {wgPageName} = mw.config.get();

	try {
		const log = await getPatroller(wgPageName);
		const {action, user, timestamp} = log;

		if (action && user && timestamp) {
			const date: Date = new Date(timestamp);

			if (action === 'patrol') {
				mountPoint.replaceChild(<Patrolled timestamp={date.toLocaleString()} user={user} />, footerElement);
			} else {
				mountPoint.replaceChild(<Patrolled timestamp={''} user={''} />, footerElement);
			}
		} else {
			mountPoint.replaceChild(<Patrolled timestamp={''} user={''} />, footerElement);
		}
	} catch (error: unknown) {
		// return error(s)
		console.error('[PagePatroller]:', error);
		mountPoint.replaceChild(<ErrorMessage />, footerElement);
	}
};

export {showPagePatroller};
