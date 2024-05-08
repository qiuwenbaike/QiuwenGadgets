import {edit, editAppend} from './edit';
import {api} from './api';

const archiveSectionCallback = (
	title: string,
	section: string,
	targetTitle: string,
	callback: () => void | undefined,
	summary: string
) => {
	const param: ApiQueryRevisionsParams = {
		action: 'query',
		prop: ['revisions'],
		rvprop: 'content',
		format: 'json',
		formatversion: '2',
		titles: title,
		rvsection: section,
	};

	void api.postWithToken('csrf', param).then((data) => {
		editAppend({
			title: targetTitle,
			addedContent: `\n\n${data['query'].pages[0].revisions[0].content ?? false}`,
			summary,
		});
		edit({
			title,
			section: `${section}`,
			text: '',
			summary,
			callback: callback ?? (() => {}),
		});
	});
};

const deleteSectionCallback = (title: string, section: string, callback: () => void | undefined, summary: string) => {
	edit({title, section: `${section}`, text: '', summary, callback: callback ?? (() => {})});
};

export {archiveSectionCallback, deleteSectionCallback};
