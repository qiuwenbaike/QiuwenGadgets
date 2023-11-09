import {getMessage} from '../i18n';

const checkValid = (
	agreeTosCheckbox: OO.ui.CheckboxInputWidget,
	nameInput: OO.ui.TextInputWidget,
	pwdInput: OO.ui.TextInputWidget,
	lastToastifyInstance: ReturnType<typeof toastify>
): {
	isValid: boolean;
	toastifyInstance: ReturnType<typeof toastify>;
} => {
	const agreedTos: boolean = agreeTosCheckbox.isSelected();
	const filled = ![nameInput.getValue(), pwdInput.getValue()].includes('');

	lastToastifyInstance.hideToast();

	if (!agreedTos) {
		lastToastifyInstance = toastify(
			{
				duration: -1,
				text: getMessage('AgreedOrNot'),
			},
			'info'
		);
	} else if (!filled) {
		lastToastifyInstance = toastify(
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
		toastifyInstance: lastToastifyInstance,
	};
};

export {checkValid};
