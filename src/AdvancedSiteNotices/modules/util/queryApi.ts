import {AJAX_PAGE_TITLE} from '../constant';

interface RemoteNotices {
	$notices?: JQuery;
	version?: string;
}

const api: mw.Api = new mw.Api({
	ajax: {
		headers: {
			'Api-User-Agent': `Qiuwen/1.1 (AdvancedSiteNotices/2.0; ${mw.config.get('wgWikiID')})`,
		},
	},
});
const parameters: ApiParseParams = {
	action: 'parse',
	format: 'json',
	formatversion: '2',
	prop: 'text',
	page: AJAX_PAGE_TITLE,
	uselang: mw.config.get('wgUserLanguage'),
	variant: mw.config.get('wgUserLanguage'),
};

const queryApi = async (): Promise<ReturnType<mw.Api['get']>> => {
	try {
		return await api.get(parameters);
	} catch (error: unknown) {
		console.error('[AdvancedSiteNotices] Ajax error:', error);
		return {};
	}
};

export type {RemoteNotices};
export {queryApi};
