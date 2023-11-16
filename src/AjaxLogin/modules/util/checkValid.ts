import {getMessage} from '../i18n';

type NeedCheckElements = [OO.ui.CheckboxInputWidget, OO.ui.TextInputWidget, OO.ui.TextInputWidget];

const checkValid = (
	[agreeTosCheckbox, nameInput, pwdInput]: NeedCheckElements,
	toastifyInstance: ToastifyInstance
): {
	isValid: boolean;
	toastifyInstance: ToastifyInstance;
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

export {type NeedCheckElements, checkValid};
