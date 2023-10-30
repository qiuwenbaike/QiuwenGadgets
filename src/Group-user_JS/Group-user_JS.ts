import {addSubpageAndLog} from './modules/AddSubpageAndLog';
import {editIntro} from './modules/EditIntro';
import {fixSummary} from './modules/FixSummary';
import {linkSearchEditButton} from './modules/LinksearchEditButton';
import {loadEditFormJS} from './modules/LoadEditFormJs';
import {smartNewSection} from './modules/SmartNewSection';

(function userJS(): void {
	if (window.UserJSInstalled) {
		return;
	}
	window.UserJSInstalled = true;
	/* 加载编辑界面脚本 */
	$(loadEditFormJS);
	/* 编辑提示（editintro） */
	$(editIntro);
	/* 修改编辑摘要 */
	$(fixSummary);
	/* 在[[Special:LinkSearch]]显示“编辑”按钮 */
	$(linkSearchEditButton);
	/* 向侧边栏添加“子页面”“日志”菜单 */
	$(addSubpageAndLog);
	/* 智能讨论页编辑（新建） */
	$(smartNewSection);
})();
