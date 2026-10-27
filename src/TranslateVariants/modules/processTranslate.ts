import * as OPTIONS from '../options.json';
import {Langs, nameOfLangs} from './constant';
import {addPublishButton} from './components/addPublishButton';
import {api} from './util/api';
import {noChanges} from '../TranslateVariants.module.less';
import {notify} from './util/notify';

const processTranslate = async ({
	pageContent,
	langQueue,
	basePageName,
	wrapper,
	summary,
}: {
	pageContent: string;
	langQueue: Langs[];
	basePageName: string;
	wrapper: HTMLElement;
	summary: string;
}): Promise<void> => {
	for (const lang of langQueue) {
		const diffContainer: HTMLDivElement = document.createElement('div');
		diffContainer.id = `TranslateVariants-diff-${lang}`;
		wrapper.append(diffContainer, document.createElement('hr'));

		const targetTitle: string = lang === 'zh' ? basePageName : `${basePageName}/${lang}`;

		try {
			let content: string;
			try {
				content = await api.parse(
					`{{NoteTA|G1=IT|G2=MediaWiki}}<div id="${OPTIONS.contentID}">${pageContent}</div>`,
					{
						action: 'parse',
						uselang: lang,
					}
				);
			} catch (error) {
				notify(window.wgULS('解析$1时发生错误：', '解析$1時發生錯誤：').replace('$1', lang) + error);
				continue;
			}

			const parsedContent: HTMLDivElement = document.createElement('div');
			parsedContent.innerHTML = content;
			const newPageContent: string = parsedContent.querySelector(`#${OPTIONS.contentID}`)?.textContent ?? '';

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
				notify(window.wgULS('获取$1差异时发生错误：', '取得$1差異時發生錯誤：').replace('$1', lang) + error);
				continue;
			}

			const tool: HTMLDivElement = document.createElement('div');
			const pageLink: HTMLAnchorElement = document.createElement('a');
			pageLink.href = mw.util.getUrl(targetTitle);
			pageLink.textContent = `${lang}（${nameOfLangs[lang]}）`;
			const editLink: HTMLAnchorElement = document.createElement('a');
			editLink.href = mw.util.getUrl(targetTitle, {action: 'edit'});
			editLink.textContent = window.wgULS('编', '編');
			tool.append(pageLink, document.createTextNode('（'), editLink, document.createTextNode('）'));
			diffContainer.append(tool);

			const [page] = data['query'].pages;
			if (page.missing) {
				addPublishButton(
					tool,
					window.wgULS('发布页面', '發佈頁面'),
					async (): Promise<void> => {
						await api.create(
							targetTitle,
							{
								summary,
							},
							newPageContent
						);
					},
					window.wgULS('已编辑 ', '已編輯 ') + targetTitle,
					(error: unknown): string =>
						window.wgULS('编辑', '編輯 ') + targetTitle + window.wgULS(' 发生错误：', ' 發生錯誤：') + error
				);
				const preview: HTMLPreElement = document.createElement('pre');
				preview.textContent = newPageContent;
				diffContainer.append(preview);
				continue;
			}

			const diff: string = page.revisions[0].diff.body;
			if (diff === '') {
				const noChangesIndicator: HTMLSpanElement = document.createElement('span');
				noChangesIndicator.classList.add(noChanges);
				noChangesIndicator.textContent = window.wgULS('无更改', '無變更');
				tool.append(noChangesIndicator);
			} else {
				addPublishButton(
					tool,
					window.wgULS('发布更改', '發佈變更'),
					async (): Promise<void> => {
						await api.edit(targetTitle, () => ({
							summary,
							text: newPageContent,
							nocreate: false,
						}));
					},
					window.wgULS('已编辑', '已編輯 ') + targetTitle,
					(error: unknown): string =>
						window.wgULS('编辑$1发生错误：', '編輯$1發生錯誤：').replace('$1', targetTitle) + error
				);
				const diffTable: HTMLTableElement = document.createElement('table');
				diffTable.classList.add('diff');
				diffTable.innerHTML = diff;
				const columnGroup: HTMLTableColElement = document.createElement('colgroup');
				for (const className of ['diff-marker', 'diff-content', 'diff-marker', 'diff-content']) {
					const column: HTMLTableColElement = document.createElement('col');
					column.classList.add(className);
					columnGroup.append(column);
				}
				diffTable.prepend(columnGroup);
				diffContainer.append(diffTable);
			}
		} catch (error) {
			notify(window.wgULS('处理$1时发生错误：', '處理$1時發生錯誤：').replace('$1', lang) + error);
		}
	}
};

export {processTranslate};
