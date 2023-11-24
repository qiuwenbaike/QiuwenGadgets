import {api} from '../api';

interface PageInfo {
	query?: {
		pages: {
			0: {
				missing?: boolean;
				revisions: {
					0: {
						revid: number;
					};
				};
			};
		};
	};
}

const parameters: ApiQueryRevisionsParams = {
	action: 'query',
	format: 'json',
	formatversion: '2',
	prop: 'revisions',
	rvprop: 'ids',
};

const queryPageInfo = async (title: string): Promise<PageInfo> => {
	try {
		return (await api.post({
			...parameters,
			titles: title,
		})) as PageInfo;
	} catch (error: unknown) {
		console.error('[EditConflict] Ajax error:', error);
		return {};
	}
};

export {type PageInfo, queryPageInfo};
