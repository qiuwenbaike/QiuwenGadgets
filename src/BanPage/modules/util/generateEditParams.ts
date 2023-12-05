import {WG_NAMESPACE_NUMBER} from '../constant';
import {getMessage} from '../i18n';

type EditParams = {
	targetPage: string;
	text: string;
	summary: string;
};

const generateEditParams = (): EditParams => {
	let targetPage: string = 'Qiuwen:首页';
	let redirectTemplate: string = '';
	let summary: string = getMessage('Ban the $1');

	switch (WG_NAMESPACE_NUMBER) {
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
	};
};

export {type EditParams, generateEditParams};
