import {WG_WIKI_ID} from './constant';
import {initMwApi} from '../../util';

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

const api: mw.Api = initMwApi(`Qiuwen/1.1 (AjaxLogin/2.0; ${WG_WIKI_ID})`);

export type {ClientLoginParams};
export {api};
