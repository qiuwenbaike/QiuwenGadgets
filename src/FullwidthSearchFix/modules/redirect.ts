import {WG_SCRIPT} from './constant';
import {getMessage} from './i18n';

const redirect = (nameSpace: string, pageName: string): void => {
	toastify(
		{
			text: getMessage('Redirecting to').replace('$1', `${nameSpace}:${pageName}`),
			duration: -1,
		},
		'info'
	);

	const href: string = new mw.Uri(WG_SCRIPT)
		.extend({
			search: `${nameSpace}:${pageName}`,
		})
		.toString();
	location.href = href;
};

export {redirect};
