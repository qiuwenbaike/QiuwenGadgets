import {getBody} from 'ext.gadget.Util';
import {mwAddPreview} from './modules/mw/mwAddPreview';
import {wikitextPreviewTestcase} from './modules/wikitextPreviewTestcase';

let isInit: boolean = false;

void getBody().then(function specialWikitext(): void {
	if (isInit) {
		return;
	}
	isInit = true;

	// 执行预览
	mwAddPreview();
	// 检查测试样例
	void wikitextPreviewTestcase(true);
});
