/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {editPage, queryPage} from './util';

const addTranslatedPageTemplate = async (): Promise<void> => {
	const targetTitle = mw.config.get('wgPageName'); // 当前页面标题
	const article = new mw.Title(targetTitle);
	const talk = new mw.Title(article.getMainText(), article.getNamespaceId() + 1); // 获取对应的讨论页

	// 弹出对话框获取用户输入
	const sourceLanguage = prompt('请输入来源语言（例如zh；必填）：');
	if (!sourceLanguage) {
		alert('来源语言不能为空！');
		return;
	}

	const sourceTitle = prompt('请输入来源页面（例如首页；必填）：');
	if (!sourceTitle) {
		alert('来源页面不能为空！');
		return;
	}

	const version = prompt('请输入来源页面的特定版本号（例如：12345678）：');

	const insertversion = prompt('请输入本地翻译后的特定版本号（例如：12345678）：');

	const template = `{{Translated page|${sourceLanguage}|${sourceTitle}|version=${version}|insertversion=${insertversion}}}\n`;

	try {
		const queryParams: ApiQueryRevisionsParams = {
			action: 'query',
			prop: 'revisions',
			titles: talk.getPrefixedText(),
			rvprop: ['timestamp', 'content'],
			indexpageids: true,
			curtimestamp: true,
		};

		const queryResponse = await queryPage(queryParams);

		if (!queryResponse['query'] || !queryResponse['query'].pages) {
			alert('无法获取讨论页信息，请稍后重试。');
			return;
		}

		const [pageId] = queryResponse['query'].pageids;
		const revision = (queryResponse['query'].pages[pageId].revisions || [])[0] || {};
		const text = revision['*'] as string;
		const starttimestamp = queryResponse['curtimestamp'];
		const summary =
			'为导入页面标记{{[[Template:Translated page|Translated page]]}}模板 ([[MediaWiki:Gadget-TranslatedPage.js|tp.js]])';
		const editParams: ApiEditPageParams = {
			action: 'edit',
			title: talk.getPrefixedText(),
			summary,
			starttimestamp,
		};

		if (text === undefined) {
			// 如果讨论页不存在
			editParams.createonly = true;
			editParams.text = template;
		} else {
			// 如果讨论页已存在
			editParams.basetimestamp = revision.timestamp;
			editParams.text = template + text.replace(/\{\{\s*Translated page\s*\|[^{}]+\}\}\n?/g, '');
		}

		try {
			const editResponse = await editPage(editParams);

			const editResult = editResponse['edit'];
			if (editResult && editResult.result === 'Success') {
				alert(`成功为${talk.getPrefixedText()}添加了{{Translated page}}模板！`);
				location.reload(); // 刷新页面以显示更新内容
			} else {
				alert('添加模板失败，请稍后重试。');
			}
		} catch {
			alert('添加模板失败，请检查网络连接或权限设置。');
		}
	} catch {
		alert('无法获取讨论页信息，请稍后重试。');
	}
};

export {addTranslatedPageTemplate};
