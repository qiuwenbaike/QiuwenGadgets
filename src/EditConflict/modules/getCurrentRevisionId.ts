import {type PageInfo, queryPageInfo} from './util/queryPageInfo';

const getCurrentRevisionId = async (title: string): Promise<number> => {
	const pageInfo: PageInfo = await queryPageInfo(title);

	if (!pageInfo.query) {
		return 0;
	}
	if (pageInfo.query.pages[0].missing) {
		return 0;
	}

	return pageInfo.query.pages[0].revisions[0].revid;
};

export {getCurrentRevisionId};
