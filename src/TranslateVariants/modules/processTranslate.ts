import {Langs, nameOfLangs} from './constant';
import {TranslationResult} from './types';
import {api} from './util/api';
import {notify} from './util/notify';
import {translate} from './util/translate';

const processTranslate = async ({
	pageContent,
	langQueue,
	basePageName,
	results,
	summary,
}: {
	pageContent: string;
	langQueue: Langs[];
	basePageName: string;
	results: TranslationResult[];
	summary: string;
}): Promise<void> => {
	for (const lang of langQueue) {
		const targetTitle: string = lang === 'zh' ? basePageName : `${basePageName}/${lang}`;
		const result: TranslationResult = {
			lang,
			targetTitle,
			pageName: `${lang}（${nameOfLangs[lang]}）`,
			editLabel: translate('编', '編'),
			completed: false,
			missing: false,
			noChanges: false,
		};
		results.push(result);

		try {
			const contentID = 'TranslateVariants-content';
			let content: string;
			try {
				content = await api.parse(`{{NoteTA|G1=IT|G2=MediaWiki}}<div id="${contentID}">${pageContent}</div>`, {
					action: 'parse',
					uselang: lang,
				});
			} catch (error) {
				notify(translate('解析$1时发生错误：', '解析$1時發生錯誤：').replace('$1', lang) + error);
				continue;
			}

			const parsedContent: HTMLDivElement = document.createElement('div');
			parsedContent.innerHTML = content;
			const newPageContent: string = parsedContent.querySelector(`#${contentID}`)?.textContent ?? '';

			const queryDiffParams: ApiQueryRevisionsParams = {
				action: 'query',
				format: 'json',
				formatversion: '2',
				titles: targetTitle,
				prop: 'revisions',
				rvdifftotext: newPageContent,
			};

			let data: Awaited<ReturnType<typeof api.get>>;
			try {
				data = await api.get(queryDiffParams);
			} catch (error) {
				notify(translate('获取$1差异时发生错误：', '取得$1差異時發生錯誤：').replace('$1', lang) + error);
				continue;
			}

			const [page] = data['query'].pages;
			result.completed = true;
			if (page.missing) {
				result.missing = true;
				result.content = newPageContent;
				result.publishLabel = translate('发布页面', '發佈頁面');
				result.save = async (): Promise<void> => {
					await api.create(
						targetTitle,
						{
							summary,
						},
						newPageContent
					);
				};
				result.successMessage = translate('已编辑 ', '已編輯 ') + targetTitle;
				result.errorMessage = (error: unknown): string =>
					translate('编辑', '編輯 ') + targetTitle + translate(' 发生错误：', ' 發生錯誤：') + error;
				continue;
			}

			const diff: string = page.revisions[0].diff.body;
			if (diff === '') {
				result.noChanges = true;
			} else {
				result.publishLabel = translate('发布更改', '發佈變更');
				result.save = async (): Promise<void> => {
					await api.edit(targetTitle, () => ({
						summary,
						text: newPageContent,
						nocreate: false,
					}));
				};
				result.successMessage = translate('已编辑', '已編輯 ') + targetTitle;
				result.errorMessage = (error: unknown): string =>
					translate('编辑$1发生错误：', '編輯$1發生錯誤：').replace('$1', targetTitle) + error;
				result.diff = diff;
			}
		} catch (error) {
			notify(translate('处理$1时发生错误：', '處理$1時發生錯誤：').replace('$1', lang) + error);
		}
	}
};

export {processTranslate};
