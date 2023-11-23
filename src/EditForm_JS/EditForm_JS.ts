import {AiAssisted} from './modules/aiAssisted';
import {antiConv} from './modules/antiConv';
import {cancelAutoSummary} from './modules/cancelAutoSummary';
import {disableTitle} from './modules/disableTitle';
import {editToolbar} from './modules/editToolbar';
import {forcePreview} from './modules/forcePreview';

/**
 * 管理员注意：
 *
 * 此页面脚本在使用传统编辑器、可视化编辑器、2017 wikitext编辑器时均会加载，且只加载一次。
 * 但可视化编辑器与2017 wikitext编辑器有两个问题：
 * 1. 此脚本运行时，编辑器可能尚未加载完成。
 * 2. 互相切换时，或者放弃编辑之后再次点击编辑时，浏览器页面不会刷新，此页面脚本不会再次加载。
 *
 * 因此，若代码与可视化编辑器、2017 wikitext编辑器相关，需要在进入编辑器时运行，请集中放在后面的
 *  mw.hook('ve.activationComplete').add((): void => {
 *  ...
 *  });
 * 中。
 */

((): void => {
	// 编辑工具栏
	$(editToolbar);
	// 在提交新段落时，让主题栏在特定情况下失效
	$(disableTitle);
	// 强制预览
	$(forcePreview);
	// 取消修订编辑摘要修正
	$(cancelAutoSummary);
	// 检测客户端繁简转换
	$(antiConv);
	// AI辅助编辑特殊声明
	$(AiAssisted);
})();
