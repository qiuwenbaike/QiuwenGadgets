// 隐藏红色链接
const newLinkUnwrap = ($body: JQuery<HTMLBodyElement>) => {
	$body.find('#mw-content-text a.new').contents().unwrap();
};

export {newLinkUnwrap};
