import {editPage, queryPage} from './util';

interface TemplateConfig {
	name: string;
	sourcePrompt: string;
	sourceRequiredMessage: string;
	sourceTitlePrompt: string;
	sourceTitleRequiredMessage: string;
	insertVersionPrompt: string;
	summary: string;
}

const addTalkPageTemplate = async ({
	name,
	sourcePrompt,
	sourceRequiredMessage,
	sourceTitlePrompt,
	sourceTitleRequiredMessage,
	insertVersionPrompt,
	summary,
}: TemplateConfig): Promise<void> => {
	const targetTitle = mw.config.get('wgPageName');
	const article = new mw.Title(targetTitle);
	const talk = new mw.Title(article.getMainText(), article.getNamespaceId() + 1);
	const talkTitle = talk.getPrefixedText();

	const source = prompt(sourcePrompt);
	if (!source) {
		alert(sourceRequiredMessage);
		return;
	}

	const sourceTitle = prompt(sourceTitlePrompt);
	if (!sourceTitle) {
		alert(sourceTitleRequiredMessage);
		return;
	}

	const version = prompt('请输入来源页面的特定版本号（例如：12345678）：');
	const insertVersion = prompt(insertVersionPrompt);
	const template = `{{${name}|${source}|${sourceTitle}|version=${version}|insertversion=${insertVersion}}}\n`;

	try {
		const queryResponse = await queryPage({
			action: 'query',
			prop: 'revisions',
			titles: talkTitle,
			rvprop: ['timestamp', 'content'],
			indexpageids: true,
			curtimestamp: true,
		});

		if (!queryResponse['query'] || !queryResponse['query'].pages) {
			alert('无法获取讨论页信息，请稍后重试。');
			return;
		}

		const [pageId] = queryResponse['query'].pageids;
		const revision = (queryResponse['query'].pages[pageId].revisions || [])[0] || {};
		const text = revision['*'] as string;
		const editParams: ApiEditPageParams = {
			action: 'edit',
			title: talkTitle,
			summary,
			starttimestamp: queryResponse['curtimestamp'],
		};

		if (text === undefined) {
			editParams.createonly = true;
			editParams.text = template;
		} else {
			editParams.basetimestamp = revision.timestamp;
			const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			editParams.text =
				template + text.replace(new RegExp(`\\{\\{\\s*${escapedName}\\s*\\|[^{}]+\\}\\}\\n?`, 'g'), '');
		}

		try {
			const editResponse = await editPage(editParams);
			const editResult = editResponse['edit'];

			if (editResult && editResult.result === 'Success') {
				alert(`成功为${talkTitle}添加了{{${name}}}模板！`);
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

export {addTalkPageTemplate};
