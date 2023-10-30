import {
	$agreeTos,
	$forgotPassword,
	$inputBox,
	$rememberMe,
	$tosLabel,
	agreeTosCheckbox,
	keepLoginCheckbox,
	messageDialog,
	nameInput,
	pwdInput,
} from './element';
import {ClientLoginParams, api} from './api';
import {checkValid} from './util/checkValid';
import {ding} from '../../util';
import {getMessage} from './i18n';
import {oouiPrompt} from './util/oouiPrompt';
import {removeWindowResizeHandler} from './util/removeWindowResizeHandler';

let windowManager: OO.ui.WindowManager;

const ajaxLogin = (): void => {
	let loginToken = '';
	const login = async ({loginContinue = false, retypePassword = false} = {}): Promise<void> => {
		try {
			if (!loginContinue) {
				ding(getMessage('Getting login token'));
				loginToken = await api.getToken('login');
				ding(getMessage('Login token getted'), true);
			}

			const params: ClientLoginParams = {
				action: 'clientlogin',
				format: 'json',
				formatversion: '2',
				logintoken: loginToken,
				loginreturnurl: location.href,
				username: nameInput.getValue(),
				password: pwdInput.getValue(),
			};
			if (keepLoginCheckbox.isSelected()) {
				params.rememberMe = true;
			}
			if (loginContinue || retypePassword) {
				await windowManager.clearWindows();
				delete params.loginreturnurl;
				delete params.username;
				delete params.password;
				params.logincontinue = true;

				const value: string | null = await oouiPrompt(windowManager, retypePassword);
				if (value === null) {
					ding(getMessage('Login cancelled'), true);
					windowManager.clearWindows();
					return;
				} else if (value === '') {
					if (retypePassword) {
						ding(getMessage('EmptyPassword'), true);
						login({
							retypePassword: true,
						});
					} else {
						ding(getMessage('Empty2FA'), true);
						login({
							loginContinue: true,
						});
					}
					return;
				}

				if (retypePassword) {
					params.password = value;
					params.retype = value;
				} else {
					params.OATHToken = value;
				}
			}

			ding(getMessage('Logging in'));

			const response = await api.post(params);
			if (response['clientlogin']?.status === 'PASS') {
				ding(getMessage('Login succeed'), false, 'success');
				location.reload();
			} else if (response['clientlogin']?.messagecode) {
				switch (response['clientlogin'].messagecode) {
					case 'login-throttled':
						ding(getMessage('TooFrequent'));
						break;
					case 'oathauth-auth-ui':
						login({
							loginContinue: true,
						});
						break;
					case 'oathauth-login-failed':
						ding(getMessage('Invalid 2FA verification code'), true, 'warning');
						login({
							loginContinue: true,
						});
						break;
					case 'resetpass-temp-emailed':
						ding(getMessage('New password is required'), true);
						login({
							retypePassword: true,
						});
						break;
					case 'wrongpassword':
						ding(getMessage('Invalid useruame or password'), true, 'warning');
						await windowManager.clearWindows();
						ajaxLogin();
						break;
					default:
						ding(getMessage('Unknown API error'), false, 'warning');
				}
			}
		} catch (error: unknown) {
			console.error('[AjaxLogin] Ajax error:', error);
			ding(getMessage('Network error'), false, 'warning');
		}
	};

	const needCheckElements: [OO.ui.CheckboxInputWidget, OO.ui.TextInputWidget, OO.ui.TextInputWidget] = [
		agreeTosCheckbox,
		nameInput,
		pwdInput,
	];

	pwdInput.on('enter', (): void => {
		if (checkValid(...needCheckElements)) {
			login();
		}
	});
	messageDialog.getActionProcess = (action): OO.ui.Process => {
		return new OO.ui.Process((): void => {
			if (action === 'login') {
				if (checkValid(...needCheckElements)) {
					login();
				}
			} else {
				windowManager.clearWindows();
			}
		});
	};

	if (!windowManager) {
		windowManager = new OO.ui.WindowManager();
		windowManager.$element.appendTo(document.body);
	}
	windowManager.addWindows([messageDialog]);
	windowManager.openWindow(messageDialog, {
		actions: [
			{
				action: 'login',
				flags: ['primary', 'progressive'],
				label: $('<b>').text(getMessage('Login')),
			},
			{
				action: 'cancel',
				flags: ['safe', 'close'],
				label: $('<b>').text(getMessage('Cancel')),
			},
		],
		message: $('<div>')
			.addClass('oo-ui-window-foot')
			.append($inputBox, $forgotPassword, $rememberMe, $agreeTos, $tosLabel),
		title: $('<b>').addClass('oo-ui-window-head').text(getMessage('Login')),
		size: 'small',
	});
	removeWindowResizeHandler(windowManager);
};

export {ajaxLogin};
