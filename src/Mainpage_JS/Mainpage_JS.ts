import {getBody} from 'ext.gadget.Util';

void getBody().then(($body: JQuery<HTMLBodyElement>): void => {
	const {wgIsMainPage, wgAction} = mw.config.get();

	if (wgAction !== 'view' || !wgIsMainPage) {
		return;
	}

	// 隐藏红色链接
	$body.find('#mw-content-text a.new').contents().unwrap();
});
