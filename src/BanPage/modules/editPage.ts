import {WG_NAMESPACE_NUMBER, WG_PAGE_NAME} from './constant';
import {api} from './api';
import {ding} from '../../util';
import {getMessage} from './i18n';
import {refreshPage} from './util/refreshPage';

const editPage = async (): Promise<void> => {
	let targetPage = 'Qiuwen:首页';
	let redirectTemplate = '';
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

	const text = `#REDIRECT [[${targetPage}]]\n${redirectTemplate}`;
	try {
		await api.edit(WG_PAGE_NAME, (): ApiEditPageParams => {
			return {
				text,
				summary,
				minor: true,
			};
		});
		refreshPage(targetPage);
	} catch {
		try {
			await api.create(WG_PAGE_NAME, {summary}, text);
			refreshPage(targetPage);
		} catch (error: unknown) {
			console.error('[BanPage] Ajax error:', error);
			ding(getMessage('Network error'), false, 'error');
		}
	}
};

export {editPage};
