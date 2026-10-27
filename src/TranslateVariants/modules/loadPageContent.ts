import {Langs} from './constant';
import {TranslationResult} from './types';
import {api} from './util/api';
import {notify} from './util/notify';
import {preparePageContent} from './preparePageContent';
import {processTranslate} from './processTranslate';
import {translate} from './util/translate';

const loadPageContent = async ({
	wgPageName,
	langQueue,
	results,
}: {
	wgPageName: string;
	langQueue: Langs[];
	results: TranslationResult[];
}): Promise<void> => {
	const summary: string = `${translate('自动转换变体自', '自動轉換變體自')}${'[[$1]]'.replace(/\$1/g, wgPageName)} ([[MediaWiki:Gadget-TranslateVariants.js|TranslateVariants]])`;
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
			results,
			summary,
		});
	} catch (error) {
		notify(translate('获取页面内容时发生错误：', '取得頁面內容時發生錯誤：') + error);
	}
};

export {loadPageContent};
