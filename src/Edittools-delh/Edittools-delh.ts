import {WG_PAGE_NAME} from './modules/constant';
import {edittoolsDelh} from './modules/core';

if (/^qiuwen(?:[_ ]talk)?:存废讨论\//i.test(WG_PAGE_NAME)) {
	edittoolsDelh();
}
