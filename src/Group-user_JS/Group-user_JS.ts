import {addLog, addSubpage} from './modules/addSubpageAndLog';
import {editIntro} from './modules/smartEditIntro';
import {fixSummary} from './modules/fixSummary';
import {linkSearchEditButton} from './modules/linkSearchEditButton';
import {loadEditFormJS} from './modules/loadEditFormJs';
import {smartNewSection} from './modules/smartNewSection';

(function userJS(): void {
	if (mw.config.get('wgUserJSInstalled')) {
		return;
	}
	mw.config.set('wgUserJSInstalled', true);

	/* 加载编辑界面脚本 */
	$(loadEditFormJS);
	/* 编辑提示（EditIntro） */
	$(editIntro);
	/* 修改编辑摘要 */
	$(fixSummary);
	/* 在[[Special:LinkSearch]]显示“编辑”按钮 */
	$(linkSearchEditButton);
	/* 向侧边栏添加“子页面”“日志”菜单 */
	$(addSubpage);
	$(addLog);
	/* 智能讨论页编辑（新建） */
	$(smartNewSection);
})();
