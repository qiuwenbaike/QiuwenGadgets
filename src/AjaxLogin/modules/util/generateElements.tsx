import React from 'ext.gadget.JSX';
import {getMessage} from '../i18n';

const generateElements = (isAgreeTos: boolean) => {
	// @ts-expect-error TS2503
	const messageDialog: OO.ui.MessageDialog = new OO.ui.MessageDialog();

	// @ts-expect-error TS2503
	const nameInput: OO.ui.TextInputWidget = new OO.ui.TextInputWidget({
		icon: 'userAvatar',
		placeholder: getMessage('Username'),
		validate: 'non-empty',
	});

	// @ts-expect-error TS2503
	const pwdInput: OO.ui.TextInputWidget = new OO.ui.TextInputWidget({
		icon: 'key',
		placeholder: getMessage('Password'),
		type: 'password',
		validate: 'non-empty',
	});

	// @ts-expect-error TS2503
	const agreeTosCheckbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget({
		selected: isAgreeTos,
	});
	// @ts-expect-error TS2503
	const agreeTosLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(agreeTosCheckbox, {
		align: 'inline',
		label: getMessage('I agree with the relevant terms'),
	});

	// @ts-expect-error TS2503
	const keepLoginCheckbox: OO.ui.CheckboxInputWidget = new OO.ui.CheckboxInputWidget();
	// @ts-expect-error TS2503
	const keepLoginLayout: OO.ui.FieldLayout<OO.ui.CheckboxInputWidget> = new OO.ui.FieldLayout(keepLoginCheckbox, {
		align: 'inline',
		help: getMessage('SelectedOrNot'),
		label: getMessage('Keep me logged in'),
	});

	const label = (
		<label
			className={['oo-ui-labelWidget', 'oo-ui-labelElement-label']}
			style={{fontSize: '90%', textAlign: 'justify'}}
		/>
	);
	const $label = $(label) as JQuery;

	const $agreeTos: JQuery = $label.clone().append(agreeTosLayout.$element);
	const $forgotPassword: JQuery = $label
		.clone()
		.css('float', 'right')
		.append(
			<a href={mw.util.getUrl('Special:PasswordReset')} title={getMessage('Reset password')}>
				{getMessage('Forgot password?')}
			</a>
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
