import {getMessage} from '../i18n';

const queryLoginToken = async (
	api: mw.Api,
	toastifyInstance: ToastifyInstance
): Promise<{
	loginToken: string;
	toastifyInstance: ToastifyInstance;
}> => {
	toastifyInstance.hideToast();
	toastifyInstance = toastify({
		text: getMessage('Getting login token'),
	});

	const loginToken: string = await api.getToken('login');

	toastifyInstance.hideToast();
	toastifyInstance = toastify({
		text: getMessage('Login token getted'),
		duration: -1,
	});

	return {
		loginToken,
		toastifyInstance,
	};
};

export {queryLoginToken};
