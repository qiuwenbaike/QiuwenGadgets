import * as OPTIONS from '../options.json';
import {api} from './api';

const markAsDone = (userName: string, index: string, closingRemarks: string) => {
	const {wgPageName} = mw.config.get();
	const sectionSelector = `#${CSS.escape(`User:${userName.replace(/"/g, '.22').replace(/ /g, '_')}`)}${index ?? ''}`;
	const sectionNode = document.querySelector(sectionSelector);
	if (!sectionNode) {
		return;
	}
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
	const [, sectionNumber] = $(sectionNode as HTMLElement)
		.siblings('.mw-editsection')
		.find('a:not(.mw-editsection-visualeditor)')
		.prop('href')
		.match(/section=(\d+)/);
	let basetimestamp: string;
	let curtimestamp: string;
	let content: string;

	const queryParams: ApiQueryRevisionsParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'revisions',
		titles: [wgPageName],
		curtimestamp: true,
		rvprop: ['content', 'timestamp'],
		rvsection: `${sectionNumber}`,
	};

	return (
		api
			.get(queryParams)
			// @ts-expect-error TS7030
			.then((data) => {
				if (!data['query'] || !data['query'].pages) {
					return $.Deferred().reject('unknown');
				}

				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				const [page] = data['query'].pages;

				if (!page || page.invalid) {
					return $.Deferred().reject('invalidtitle');
				}

				if (page.missing) {
					return $.Deferred().reject('nocreate-missing');
				}

				curtimestamp = data['curtimestamp'] as string;
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
				[{basetimestamp, content}] = page.revisions;
				content = content.trim().replace(/:{{status(\|.*?)?}}/i, ':{{Status|+}}');
				content += closingRemarks;
			})
			.then(() => {
				const editParams: ApiEditPageParams = {
					action: 'edit',
					format: 'json',
					formatversion: '2',
					title: wgPageName,
					nocreate: true,
					section: `${sectionNumber}`,
					starttimestamp: curtimestamp,
					summary: `/* User:${userName} */ 完成${OPTIONS.userRightsManagerSummary}`,
					text: content,
					basetimestamp,
				};
				if (mw.config.get('wgUserName')) {
					editParams.assert = 'user';
				}

				return api.postWithEditToken(editParams);
			})
	);
};

export {markAsDone};
