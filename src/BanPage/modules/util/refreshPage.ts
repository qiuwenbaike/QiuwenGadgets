import {WG_SCRIPT} from '../constant';
import {getMessage} from '../i18n';

const refreshPage = (targetPage: string): void => {
	toastify(
		{
			text: getMessage('Refreshing'),
			duration: -1,
		},
		'success'
	);

	location.replace(`${WG_SCRIPT}?title=${mw.util.rawurlencode(targetPage)}`);
};

export {refreshPage};
