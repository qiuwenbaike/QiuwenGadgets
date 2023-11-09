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
import {type ClientLoginParams, api} from './api';
import {checkValid} from './util/checkValid';
import {getMessage} from './i18n';
import {oouiPrompt} from './util/oouiPrompt';
import {removeWindowResizeHandler} from './util/removeWindowResizeHandler';

let lastToastifyInstance: ReturnType<typeof toastify> = {
	hideToast: () => {},
};
let windowManager: OO.ui.WindowManager;
const ajaxLogin = (): void => {
	let loginToken = '';
	const login = async ({loginContinue = false, retypePassword = false} = {}): Promise<void> => {
		try {
			if (!loginContinue) {
				lastToastifyInstance.hideToast();
				toastify(
					{
						text: getMessage('Getting login token'),
					},
					'info'
				);
				loginToken = await api.getToken('login');
				lastToastifyInstance = toastify(
					{
						duration: -1,
						text: getMessage('Login token getted'),
					},
					'info'
				);
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
				lastToastifyInstance.hideToast();
				await windowManager.closeWindow(messageDialog);
				delete params.loginreturnurl;
				delete params.username;
				delete params.password;
				params.logincontinue = true;

				const value: string | null = await oouiPrompt(windowManager, retypePassword);
				if (value === null) {
					lastToastifyInstance = toastify(
						{
							duration: -1,
							text: getMessage('Login cancelled'),
						},
						'info'
					);
					await windowManager.closeWindow(messageDialog);
					return;
				} else if (value === '') {
					if (retypePassword) {
						lastToastifyInstance = toastify(
							{
								duration: -1,
								text: getMessage('EmptyPassword'),
							},
							'warning'
						);
						login({
							retypePassword: true,
						});
					} else {
						lastToastifyInstance = toastify(
							{
								duration: -1,
								text: getMessage('Empty2FA'),
							},
							'warning'
						);
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

			lastToastifyInstance.hideToast();
			toastify(
				{
					text: getMessage('Logging in'),
				},
				'info'
			);

			const response = await api.post(params);
			if (response['clientlogin']?.status === 'PASS') {
				toastify(
					{
						text: getMessage('Login succeed'),
					},
					'success'
				);
				location.reload();
			} else if (response['clientlogin']?.messagecode) {
				switch (response['clientlogin'].messagecode) {
					case 'login-throttled':
						toastify(
							{
								text: getMessage('TooFrequent'),
							},
							'error'
						);
						break;
					case 'oathauth-auth-ui':
						login({
							loginContinue: true,
						});
						break;
					case 'oathauth-login-failed':
						lastToastifyInstance = toastify(
							{
								duration: -1,
								text: getMessage('Invalid 2FA verification code'),
							},
							'warning'
						);
						login({
							loginContinue: true,
						});
						break;
					case 'resetpass-temp-emailed':
						lastToastifyInstance = toastify(
							{
								duration: -1,
								text: getMessage('New password is required'),
							},
							'warning'
						);
						login({
							retypePassword: true,
						});
						break;
					case 'wrongpassword':
						lastToastifyInstance = toastify(
							{
								duration: -1,
								text: getMessage('Invalid useruame or password'),
							},
							'warning'
						);
						await windowManager.closeWindow(messageDialog);
						ajaxLogin();
						break;
					default:
						toastify(
							{
								text: getMessage('Unknown API error'),
							},
							'error'
						);
				}
			}
		} catch (error: unknown) {
			console.error('[AjaxLogin] Ajax error:', error);
			lastToastifyInstance.hideToast();
			toastify(
				{
					text: getMessage('Network error'),
				},
				'error'
			);
		}
	};

	const needCheckElements: Parameters<typeof checkValid> = [agreeTosCheckbox, nameInput, pwdInput];

	pwdInput.on('enter', (): void => {
		const {isValid, toastifyInstance} = checkValid(...needCheckElements);
		lastToastifyInstance = toastifyInstance;
		if (isValid) {
			login();
		}
	});
	messageDialog.getActionProcess = (action): OO.ui.Process => {
		return new OO.ui.Process((): void => {
			if (action === 'login') {
				const {isValid, toastifyInstance} = checkValid(...needCheckElements);
				lastToastifyInstance = toastifyInstance;
				if (isValid) {
					login();
				}
			} else {
				windowManager.closeWindow(messageDialog);
			}
		});
	};

	if (!windowManager) {
		windowManager = new OO.ui.WindowManager();
		windowManager.$element.appendTo(document.body);
		windowManager.addWindows([messageDialog]);
	}
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
