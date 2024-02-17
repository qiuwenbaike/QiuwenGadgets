import * as OPTIONS from '../options.json';
import React from 'ext.gadget.React';
import {elementWrap} from './elementWrap';
import {getMessage} from './i18n';
import {initMwApi} from 'ext.gadget.Util';

export const pagePatroller = async (): Promise<void> => {
	const element = elementWrap('footer-info-patroller');
	document.querySelectorAll(OPTIONS.mountPointSelector)[0]?.prepend(element);

	// if there is a patrol link, the page must be not patrolled
	if (document.querySelectorAll('.patrollink').length) {
		element.append(
			<span id={'page_patroller__not-patrolled'}>{getMessage('This page has not been patrolled yet')}</span>
		);
		return;
	}

	// Load patroller info
	// add `Loading...`
	const loading = <span id={'page_patroller__loading'}>{getMessage('Loading...')}</span>;
	const patrolled = (
		<span id={'page_patroller__patrolled'}>
			{getMessage('This page has been patrolled, or has been marked as auto-patrolled')}
		</span>
	);
	element.append(loading);

	try {
		const api = initMwApi('PagePatroller/2.0');
		const params: ApiQueryRevisionsParams & ApiQueryLogEventsParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			prop: ['revisions'],
			titles: mw.config.get('wgPageName'),
			list: 'logevents',
			letype: 'patrol',
			letitle: mw.config.get('wgPageName'),
			rvprop: 'timestamp',
			rvlimit: 1,
			rvdir: 'newer',
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
				const timestampText = `${date.getUTCFullYear()}年${date.getUTCMonth() + 1}月${date.getUTCDate()}日 ${`0${date.getUTCHours()}`.slice(-2)}:${`0${date.getUTCMinutes()}`.slice(-2)} (UTC)`;
				loading.replaceWith(
					<span id={'page_patroller__patrolled-by'}>
						{getMessage('This page was patrolled at by').replace('$1', timestampText)}
						<a href={mw.util.getUrl(`User:${user}`)}>{user}</a>
					</span>
				);
			} else {
				loading.replaceWith(patrolled);
			}
		} else {
			loading.replaceWith(patrolled);
		}
	} catch (error: unknown) {
		// return error(s)
		console.error('[PagePatroller]:', error);
		const innerElement = (
			<span id={'page_patroller__error'}>{getMessage('Error occurs when finding patroller')}</span>
		);
		loading.replaceWith(innerElement);
	}
};
