import {WG_ACTION, WG_IS_NAIN_PAGE} from './modules/constant';
import {getBody} from 'ext.gadget.Util';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	if (WG_ACTION !== 'view' || !WG_IS_NAIN_PAGE) {
		return;
	}

	// 隐藏红色链接
	$body.find('#mw-content-text a.new').contents().unwrap();
});
