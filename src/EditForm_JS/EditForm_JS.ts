import {IS_WG_EDIT_OR_SUBMIT_ACTION} from './modules/constant';
import {aiAssisted} from './modules/aiAssisted';
import {clearUndoSummary} from './modules/clearUndoSummary';
import {disableTitle} from './modules/disableTitle';
import {getBody} from 'ext.gadget.Util';
import {preloadRevid} from './modules/preloadRevid';

void getBody().then(function editForm($body: JQuery<HTMLBodyElement>): void {
	// 删除回退时自动生成的编辑摘要
	clearUndoSummary($body);

	// 在提交新段落时，让主题栏在特定情况下失效
	disableTitle($body);

	// 源代码编辑器加载“编辑请求”补丁
	const revid = mw.util.getParamValue('preloadrevid');
	if (revid && IS_WG_EDIT_OR_SUBMIT_ACTION) {
		preloadRevid($body);
	}

	// AI辅助编辑特殊声明
	mw.hook('wikipage.editform').add(($editForm): void => {
		aiAssisted({
			$editForm,
		});
	});

	mw.hook('ve.saveDialog.stateChanged').add((): void => {
		aiAssisted({
			$body,
		});
	});
});
