import {USER_AGENT} from './constant';
import {initMwApi} from 'ext.gadget.Util';

const api: mw.Api = initMwApi(USER_AGENT);

export {api};
