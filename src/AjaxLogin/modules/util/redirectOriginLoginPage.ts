import {delay} from 'ext.gadget.Util';

const redirectOriginLoginPage = async (windowManager: OO.ui.WindowManager): Promise<void> => {
	await windowManager.clearWindows();
	await delay(3 * 1000);
	location.href = mw.util.getUrl('Special:Userlogin');
};

export {redirectOriginLoginPage};
