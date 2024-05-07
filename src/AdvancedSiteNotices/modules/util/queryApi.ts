import * as OPTIONS from '../../options.json';
import {api} from '../api';

interface RemoteNotices {
	$notices?: JQuery;
	version?: string;
}

const {wgUserLanguage} = mw.config.get();

const parameters = {
	action: 'parse',
	format: 'json',
	formatversion: '2',
	prop: 'text',
	page: OPTIONS.ajaxPageTitle,
	uselang: wgUserLanguage,
	variant: wgUserLanguage,
} as const satisfies ApiParseParams;

const queryApi = async (): Promise<ReturnType<mw.Api['get']>> => {
	try {
		return await api.get(parameters);
	} catch (error) {
		console.error('[AdvancedSiteNotices] Ajax error:', error);
		return {};
	}
};

export {type RemoteNotices, queryApi};
