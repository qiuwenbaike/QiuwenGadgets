import {WG_WIKI_ID} from './constant';
import {initMwApi} from '../../util';

const api: mw.Api = initMwApi(`Qiuwen/1.1 (LoginToEdit/1.1; ${WG_WIKI_ID})`);

export {api};
