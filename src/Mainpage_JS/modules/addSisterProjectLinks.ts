import {getMessage} from './util/i18n';

// 添加链接以显示“求闻”系列项目项目
const addSisterProjectLinks = () => {
	const url = mw.util.getUrl('Qiuwen:“求闻”系列项目');
	const text = getMessage('Qiuwen Projects');
	const title = getMessage('List of Qiuwen Projects');

	return mw.util.addPortletLink('p-lang', url, text, 't-project-list', title);
};

export {addSisterProjectLinks};
