/* 隐藏首页红色链接 */
if (mw.config.get('wgIsMainPage') && mw.config.get('wgAction') === 'view') {
	/* Remove red links */
	const $body = $('body');
	$body.find('#mw-content-text a.new').contents().unwrap();
}
