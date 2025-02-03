import * as OPTIONS from '../options.json';
import {ErrorMessage, FooterNotice, Loading, NotPatrolledYet, Patrolled} from './components/react';
import React from 'ext.gadget.React';
import {getPatroller} from './util/getPatroller';

const appendFooterNotice = (element: Element) => {
	const mountPoint = document.querySelector<HTMLElement>(OPTIONS.mountPointSelector);

	if (mountPoint) {
		mountPoint.prepend(element);
	}
};

const showPagePatroller = async (): Promise<void> => {
	const footerElement = <FooterNotice />;
	appendFooterNotice(footerElement);

	// if there is a patrol link, the page must be not patrolled
	if (document.querySelector('.patrollink')) {
		footerElement.append(<NotPatrolledYet />);
		return;
	}

	// Load patroller info
	// add `Loading...`
	footerElement.append(<Loading />);

	const {wgPageName} = mw.config.get();

	try {
		const log = await getPatroller(wgPageName);
		const {action, user, timestamp} = log;

		if (action && user && timestamp) {
			const date: Date = new Date(timestamp);

			if (action === 'patrol') {
				footerElement.replaceChildren(<Patrolled timestamp={date.toLocaleString()} user={user} />);
			} else {
				footerElement.replaceChildren(<Patrolled />);
			}
		} else {
			footerElement.replaceChildren(<Patrolled />);
		}
	} catch (error: unknown) {
		// return error(s)
		console.error('[PagePatroller]:', error);
		footerElement.replaceChildren(<ErrorMessage />);
	}
};

export {showPagePatroller};
