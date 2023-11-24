import * as OPTIONS from '../options.json';
import {WG_WIKI_ID} from './constant';
import {initMwApi} from '../../util';

const api: mw.Api = initMwApi(`Qiuwen/1.1 (EditConflict/${OPTIONS.version}; ${WG_WIKI_ID})`);

export {api};
