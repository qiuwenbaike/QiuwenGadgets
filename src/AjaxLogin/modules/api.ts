import * as OPTIONS from '../options.json';
import {WG_WIKI_ID} from './constant';
import {initMwApi} from '~/util';

type ClientLoginParams = ApiClientLoginParams & {
	logincontinue?: boolean;
	logintoken: string;
	loginreturnurl?: string;
	username?: string;
	password?: string;
	rememberMe?: boolean;
	retype?: string;
	OATHToken?: string;
};

const api: mw.Api = initMwApi(`Qiuwen/1.1 (AjaxLogin/${OPTIONS.version}; ${WG_WIKI_ID})`);

export {type ClientLoginParams, api};
