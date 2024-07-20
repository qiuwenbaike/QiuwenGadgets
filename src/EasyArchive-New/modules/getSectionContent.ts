import {api} from './api';

const getSectionContent = async (title: string, section: string): Promise<string | null> => {
	const params: ApiQueryRevisionsParams = {
		action: 'query',
		prop: ['revisions'],
		rvprop: 'content',
		format: 'json',
		formatversion: '2',
		titles: title,
		rvsection: section,
	};

	const {query} = await api.postWithEditToken(params);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return query.pages[0].revisions[0].content ?? null;
};

export {getSectionContent};
