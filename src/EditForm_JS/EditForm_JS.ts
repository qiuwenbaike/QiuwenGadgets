import {aiAssisted} from './modules/aiAssisted';
import {clearUndoSummary} from './modules/clearUndoSummary';
import {disableTitle} from './modules/disableTitle';
import {getBody} from '~/util';
// import {forcePreview} from './modules/forcePreview';

(async function editForm(): Promise<void> {
	const $body: JQuery<HTMLBodyElement> = await getBody();

	// 删除回退时自动生成的编辑摘要
	clearUndoSummary($body);
	// 在提交新段落时，让主题栏在特定情况下失效
	disableTitle($body);

	mw.hook('ve.saveDialog.stateChanged').add((): void => {
		// AI辅助编辑特殊声明
		aiAssisted({
			$body,
		});
	});
})();

mw.hook<JQuery[]>('wikipage.editform').add(($editForm): void => {
	// AI辅助编辑特殊声明
	aiAssisted({
		$editForm,
	});
	// 强制预览
	// forcePreview($editForm);
});
