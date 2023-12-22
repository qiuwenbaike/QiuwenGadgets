import {delay} from '~/util';

const redirectOriginLoginPage = async (windowManager: OO.ui.WindowManager): Promise<void> => {
	await windowManager.clearWindows();
	await delay(3 * 1000);
	location.href = '/wiki/Special:Userlogin';
};

export {redirectOriginLoginPage};
