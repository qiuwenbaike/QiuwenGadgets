import {aiAssisted} from './modules/aiAssisted';
import {clearUndoSummary} from './modules/clearUndoSummary';
import {disableTitle} from './modules/disableTitle';
import {displaySummaryInOneLine} from './modules/displaySummaryInOneLine';
import {forcePreview} from './modules/forcePreview';

$(function editForm(): void {
	const $body: JQuery<HTMLBodyElement> = $('body');

	// 删除回退时自动生成的编辑摘要
	clearUndoSummary($body);
	// 在提交新段落时，让主题栏在特定情况下失效
	disableTitle($body);
	// 在一行显示编辑摘要
	displaySummaryInOneLine($body);

	mw.hook('ve.saveDialog.stateChanged').add((): void => {
		// AI辅助编辑特殊声明
		aiAssisted({$body});
	});
});

mw.hook('wikipage.editform').add(($editForm: JQuery): void => {
	// AI辅助编辑特殊声明
	aiAssisted({$editForm});
	// 强制预览
	forcePreview($editForm);
});
