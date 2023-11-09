import {getMessage} from '../i18n';

const checkValid = (
	agreeTosCheckbox: OO.ui.CheckboxInputWidget,
	nameInput: OO.ui.TextInputWidget,
	pwdInput: OO.ui.TextInputWidget,
	toastifyInstance: ReturnType<typeof toastify>
): {
	isValid: boolean;
	toastifyInstance: ReturnType<typeof toastify>;
} => {
	const agreedTos: boolean = agreeTosCheckbox.isSelected();
	const filled = ![nameInput.getValue(), pwdInput.getValue()].includes('');

	toastifyInstance.hideToast();

	if (!agreedTos) {
		toastifyInstance = toastify(
			{
				duration: -1,
				text: getMessage('AgreedOrNot'),
			},
			'info'
		);
	} else if (!filled) {
		toastifyInstance = toastify(
			{
				duration: -1,
				text: getMessage('EmptyUsernameOrPassword'),
			},
			'info'
		);
	}

	const isValid: boolean = agreedTos && filled;

	return {
		isValid,
		toastifyInstance,
	};
};

export {checkValid};
