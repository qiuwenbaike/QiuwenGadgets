import {getMessage} from '../i18n';

const generateElements = () => {
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
					href: mw.util.getUrl('Special:PasswordReset'),
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

	return {
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
	};
};

export {generateElements};
