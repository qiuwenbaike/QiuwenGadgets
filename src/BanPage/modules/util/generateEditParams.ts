import {getMessage} from '../i18n';

type EditParams = {
	targetPage: string;
	text: string;
	summary: string;
	wgPageName: MediaWikiConfigMap['wgPageName'];
};

const {wgNamespaceNumber, wgPageName} = mw.config.get();

const generateEditParams = (): EditParams => {
	let targetPage: string = 'Qiuwen:首页';
	let redirectTemplate: string = '';
	let summary: string = getMessage('Ban the $1');

	switch (wgNamespaceNumber) {
		case 6:
			targetPage = 'File:Banned Images.svg';
			redirectTemplate = '{{文件重定向}}';
			summary = summary.replace('$1', getMessage('Image'));
			break;
		case 10:
			targetPage = 'Template:Void';
			redirectTemplate = '{{模板重定向}}';
			summary = summary.replace('$1', getMessage('Template'));
			break;
		default:
			summary = summary.replace('$1', getMessage('Page'));
			break;
	}

	const text: string = `#REDIRECT [[${targetPage}]]\n${redirectTemplate}`;

	return {
		targetPage,
		text,
		summary,
		wgPageName,
	};
};

export {type EditParams, generateEditParams};
