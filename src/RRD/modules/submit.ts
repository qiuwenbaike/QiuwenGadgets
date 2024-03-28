import * as OPTIONS from '../options.json';
import {api} from './api';
import {getMessage} from './i18n';

const submit = async (_ids: string[], toHide: string, reason: string, otherReasons: string): Promise<void> => {
	const ids: string[] = [...new Set(_ids)];
	const {wgPageName} = mw.config.get();

	const rrdArr: string[] = [
		'{{Revdel',
		'|status = ',
		`|article = ${wgPageName}`,
		`|set = ${toHide}`,
		`|reason = ${reason}${otherReasons}`,
	];

	for (const [index, id] of ids.entries()) {
		rrdArr[rrdArr.length] = `|id${index + 1} = ${id}`;
	}
	rrdArr[rrdArr.length] = '}}\n--~~'.concat('~~');

	try {
		const queryParams: ApiQueryRevisionsParams = {
			action: 'query',
			format: 'json',
			formatversion: '2',
			titles: OPTIONS.rrdPage,
			prop: 'revisions',
			rvprop: 'content',
		};

		const response = await api.get(queryParams);

		let content: string | undefined;
		if (response['query']?.pages) {
			content = response['query'].pages[0].revisions[0].content as string;
		}

		if (content === undefined) {
			void mw.notify(`Error when loading page ${OPTIONS.rrdPage}: missing`, {
				tag: 'RRD',
				type: 'error',
			});

			return;
		}

		try {
			const editParams: ApiEditPageParams = {
				action: 'edit',
				format: 'json',
				formatversion: '2',
				title: OPTIONS.rrdPage,
				text: `${content}\n\n${rrdArr.join('\n')}`,
				summary: getMessage('editSummary'),
			};

			const result = await api.postWithEditToken(editParams);

			if (result['edit']?.result === 'Success') {
				location.replace(mw.util.getUrl(OPTIONS.rrdPage));
			} else if (result['error']?.code) {
				void mw.notify(`Some errors occured while saving page: ${result['error'].code}`, {
					tag: 'RRD',
					type: 'error',
				});
			} else {
				void mw.notify('Some errors occured while saving page: unknown', {
					tag: 'RRD',
					type: 'error',
				});
			}
		} catch {
			void mw.notify(`Error when editing page ${OPTIONS.rrdPage}`, {tag: 'RRD', type: 'error'});
		}
	} catch {
		void mw.notify(`Error when loading page ${OPTIONS.rrdPage}`, {tag: 'RRD', type: 'error'});
	}
};

export {submit};
