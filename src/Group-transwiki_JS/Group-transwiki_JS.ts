import * as OPTIONS from './options.json';
import {fixCheckbox} from './modules/fixCheckbox';
import {fixSummary} from './modules/fixSummary';
import {getBody} from 'ext.gadget.Util';

(function userJS(): void {
	const {configKey} = OPTIONS;

	// Guard against double inclusions
	if (mw.config.get(configKey)) {
		return;
	}
	// Set guard
	mw.config.set(configKey, true);

	void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
		/* 取消复选框 */
		fixCheckbox();
		/* 修改编辑摘要 */
		fixSummary($body);
	});
})();
