// 添加链接以显示“求闻”系列项目项目
const addSisterProjectLinks = () => {
	mw.util.addPortletLink(
		'p-lang',
		mw.util.getUrl('Qiuwen:“求闻”系列项目'),
		window.wgULS('“求闻”系列项目列表', '「求聞」系列項目列表'),
		'project-completelist',
		window.wgULS('“求闻”系列项目列表', '「求聞」系列項目列表')
	);
};

export {addSisterProjectLinks};
