import {GADGET_NAME} from './modules/constant';
import {notifyConversion} from './modules/core';

if (
	mw.config.get('wgAction') === 'view' && // 只在浏览页面时显示
	mw.storage.get(GADGET_NAME) !== 'hide' // 是否点过“不再提示”
) {
	$(notifyConversion);
}
