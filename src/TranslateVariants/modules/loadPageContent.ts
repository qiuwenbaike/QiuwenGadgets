import * as OPTIONS from '../options.json';
import {Langs} from './constant';
import {api} from './util/api';
import {notify} from './util/notify';
import {preparePageContent} from './preparePageContent';
import {processTranslate} from './processTranslate';

const loadPageContent = async ({
	wgPageName,
	wrapper,
	langQueue,
}: {
	wgPageName: string;
	wrapper: HTMLElement;
	langQueue: Langs[];
}): Promise<void> => {
	const summary: string = OPTIONS.translateVariantsSummary.replace(/\$1/g, wgPageName);
	const basePageName: string = wgPageName.replace(/\/zh$/, '');
	const queryContentParams = {
		action: 'query',
		format: 'json',
		formatversion: '2',
		prop: 'revisions',
		titles: wgPageName,
		curtimestamp: true,
		rvprop: ['content', 'timestamp'],
	} as const satisfies ApiQueryRevisionsParams;

	try {
		const data = await api.get(queryContentParams);
		const pages = data['query']?.pages;
		if (!pages) {
			throw new Error('unknown');
		}

		const [page] = pages;
		if (page.invalid) {
			throw new Error('invalidtitle');
		}
		if (page.missing) {
			throw new Error('nocreate-missing');
		}

		const [{content}] = page.revisions;
		await processTranslate({
			pageContent: preparePageContent(content as string),
			langQueue,
			basePageName,
			wrapper,
			summary,
		});
	} catch (error) {
		notify(window.wgULS('获取页面内容时发生错误：', '取得頁面內容時發生錯誤：') + error);
	}
};

export {loadPageContent};
