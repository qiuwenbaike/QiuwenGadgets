/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as OPTIONS from '../options.json';
import {api} from './api';
const tagLine = OPTIONS.userRightsManagerSummary;

const queryRevisions = async (titles: string | string[], rvsection: string) => {
	const params: ApiQueryRevisionsParams = {
		titles,
		rvsection,
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'revisions',
		curtimestamp: true,
		rvprop: ['content', 'timestamp'],
	};

	return await api.get(params);
};

const markAsDone = ({userName, index, closingRemarks}: {userName: string; index: string; closingRemarks: string}) => {
	const {wgPageName} = mw.config.get();
	// eslint-disable-next-line unicorn/prefer-query-selector
	const sectionNode = document.getElementById(
		`User:${userName.replace(/"/g, '.22').replace(/ /g, '_')}${index ?? ''}`
	);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	const [, sectionNumber] = $(sectionNode as HTMLElement)
		.siblings('.mw-editsection')
		.find('a:not(.mw-editsection-visualeditor)')
		.prop('href')
		.match(/section=(\d+)/);
	let basetimestamp: string;
	let curtimestamp: string;
	let content: string;
	let revision;

	return queryRevisions(wgPageName, `${sectionNumber}`)
		.then((data) => {
			if (!data['query'] || !data['query'].pages) {
				return $.Deferred().reject('unknown');
			}

			const [page] = data['query'].pages;

			if (!page || page.invalid) {
				return $.Deferred().reject('invalidtitle');
			}

			if (page.missing) {
				return $.Deferred().reject('nocreate-missing');
			}

			[revision] = page.revisions;
			basetimestamp = revision.timestamp;
			curtimestamp = data['curtimestamp'];
			content = revision.content;
			return $.Deferred().resolve();
		})
		.then(() => {
			content = content.trim();
			content = content.replace(/(:\s*{{Status)(\|.*?)?}}/i, '$1|+}}');
			content += closingRemarks;

			const editParams: ApiEditPageParams = {
				action: 'edit',
				format: 'json',
				formatversion: '2',
				title: wgPageName,
				section: sectionNumber,
				text: content,
				summary: `/* User:${userName} */ 完成${tagLine}`,
				basetimestamp,
				starttimestamp: curtimestamp,
				nocreate: true,
			};
			if (mw.config.get('wgUserName')) {
				editParams.assert = 'user';
			}

			return api.postWithEditToken(editParams);
		});
};

export {markAsDone};
