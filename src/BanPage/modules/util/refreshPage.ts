import {WG_SCRIPT} from '../../../constant';
import {ding} from '../../../util';
import {getMessage} from '../i18n';

const refreshPage = (targetPage: string): void => {
	ding(getMessage('Refreshing'), false, 'success');
	location.replace(`${WG_SCRIPT}?title=${mw.util.rawurlencode(targetPage)}`);
};

export {refreshPage};
