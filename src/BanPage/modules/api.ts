import {WG_WIKI_ID} from '../../constant';
import {initMwApi} from '../../util';

const api: mw.Api = initMwApi(`Qiuwen/1.1 (BanPage/2.0; ${WG_WIKI_ID})`);

export {api};
