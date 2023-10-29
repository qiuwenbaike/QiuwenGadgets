import {ding} from '../util';
import {getMessage} from './i18n';

let windowManager: OO.ui.WindowManager;

const ajaxLogin = (): void => {
	const messageDialog: OO.ui.MessageDialog = new OO.ui.MessageDialog();
	const nameInput: OO.ui.TextInputWidget = new OO.ui.TextInputWidget({
		icon: 'userAvatar',
		placeholder: getMessage('Username'),
		validate: 'non-empty',
	});
	const pwdInput: OO.ui.TextInputWidget = new OO.ui.TextInputWidget({
		icon: 'key',
		placeholder: getMessage('Password'),
		type: 'password',
		validate: 'non-empty',
	});
	const agreeTosCheckbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget();
	const agreeTosLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(agreeTosCheckbox, {
		align: 'inline',
		label: getMessage('I agree with the relevant terms'),
	});
	const keepLoginCheckbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget();
	const keepLoginLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(keepLoginCheckbox, {
		align: 'inline',
		help: getMessage('SelectedOrNot'),
		label: getMessage('Keep me logged in'),
	});
	const $label: JQuery = $('<label>').addClass('oo-ui-labelWidget oo-ui-labelElement-label').css({
		'font-size': '90%',
		'text-align': 'justify',
	});
	const $agreeTos: JQuery = $label.clone().append(agreeTosLayout.$element);
	const $forgotPassword: JQuery = $label
		.clone()
		.css('float', 'right')
		.append(
			$('<a>')
				.attr({
					href: '/wiki/Special:PasswordReset',
					title: getMessage('Reset password'),
				})
				.text(getMessage('Forgot password?'))
		);
	const $inputBox: JQuery = $label
		.clone()
		.css({
			display: 'block',
			'font-size': 'inherit',
			padding: '6px 0',
		})
		.append(nameInput.$element.css('margin-bottom', '6px'), pwdInput.$element);
	const $tosLabel: JQuery = $label.clone().html(getMessage('help for I agree with the relevant terms'));
	const $rememberMe: JQuery = $label.clone().append(keepLoginLayout.$element.css('margin-top', '6px'));
	const removeWindowResizeHandler = (): void => {
		$(window).off({
			'orientationchange resize': (windowManager as unknown as {onWindowResizeHandler: () => void})
				.onWindowResizeHandler,
		});
	};
	let loginToken = '';
	const login = async ({loginContinue = false, retypePassword = false} = {}): Promise<void> => {
		const api: mw.Api = new mw.Api({
			ajax: {
				headers: {
					'Api-User-Agent': `Qiuwen/1.1 (AjaxLogin/1.1; ${mw.config.get('wgWikiID')})`,
				},
			},
		});
		try {
			if (!loginContinue) {
				ding(getMessage('Getting login token'));
				loginToken = await api.getToken('login');
				ding(getMessage('Login token getted'), true);
			}
			const params: ApiClientLoginParams & {
				logincontinue?: boolean;
				logintoken: string;
				loginreturnurl?: string;
				username?: string;
				password?: string;
				rememberMe?: boolean;
				retype?: string;
				OATHToken?: string;
			} = {
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
				const prompt = async (): Promise<string | null> => {
					const codeDialog: OO.ui.MessageDialog = new OO.ui.MessageDialog();
					const codeInput: OO.ui.TextInputWidget = new OO.ui.TextInputWidget({
						icon: 'key',
						placeholder: retypePassword ? getMessage('New password') : getMessage('6-digit number'),
						validate: 'integer',
					});
					const codeLayout: OO.ui.FieldLayout<OO.ui.TextInputWidget> = new OO.ui.FieldLayout(codeInput, {
						align: 'top',
						label: $('<b>')
							.addClass('oo-ui-messageDialog-title oo-ui-window-head')
							.text(
								retypePassword
									? getMessage('Enter password')
									: getMessage('Enter 2FA verification code')
							),
					});
					windowManager.addWindows([codeDialog]);
					const instance = windowManager.openWindow(codeDialog, {
						message: codeLayout.$element,
					});
					removeWindowResizeHandler();
					instance.opened.then((): void => {
						codeInput.on('enter', (): void => {
							(windowManager.getCurrentWindow() as OO.ui.Window).close({
								action: 'accept',
							});
						});
						codeInput.focus();
					});
					const data: void = await instance.closed;
					const _data = data as {action: string} | void;
					return _data?.action === 'accept' ? codeInput.getValue() : null;
				};
				const value: string | null = await prompt();
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
	const checkValid = (): boolean => {
		const agreedTos: boolean = agreeTosCheckbox.isSelected();
		const filled = ![nameInput.getValue(), pwdInput.getValue()].includes('');
		if (!agreedTos) {
			ding(getMessage('AgreedOrNot'), true);
		} else if (!filled) {
			ding(getMessage('EmptyUsernameOrPassword'), true);
		}
		const isValid: boolean = agreedTos && filled;
		return isValid;
	};
	pwdInput.on('enter', (): void => {
		if (checkValid()) {
			login();
		}
	});
	messageDialog.getActionProcess = (action): OO.ui.Process => {
		return new OO.ui.Process((): void => {
			if (action === 'login') {
				if (checkValid()) {
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
	removeWindowResizeHandler();
};

export const ajaxLoginLoad = (): void => {
	const $element: JQuery<HTMLAnchorElement> = $(
		'#pt-login>a,.vector-user-menu-login>a,#user-tools>a[href*="Special"]'
	);
	if (mw.config.get('wgUserName') || !$element.length) {
		return;
	}
	const checkA11yKey = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): boolean => {
		if (event.type === 'keydown' && event.key !== 'Enter' && event.key !== ' ') {
			return true;
		}
		return false;
	};
	const eventListener = (event: JQuery.ClickEvent | JQuery.KeyDownEvent): void => {
		if (checkA11yKey(event)) {
			return;
		}
		event.preventDefault();
		ajaxLogin();
	};
	$element.on('click', eventListener);
	$element.on('keydown', eventListener);
};
