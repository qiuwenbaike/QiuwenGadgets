import {getMessage} from '../i18n';

type NeedToCheckElements = [OO.ui.CheckboxInputWidget, OO.ui.TextInputWidget, OO.ui.TextInputWidget];

const checkValid = (
	[agreeTosCheckbox, nameInput, pwdInput]: NeedToCheckElements,
	toastifyInstance: ToastifyInstance
): {
	isValid: boolean;
	toastifyInstance: ToastifyInstance;
} => {
	const isAgreeTos: boolean = agreeTosCheckbox.isSelected();
	const isFill: boolean = ![nameInput.getValue(), pwdInput.getValue()].includes('');

	toastifyInstance.hideToast();

	if (!isAgreeTos) {
		toastifyInstance = toastify(
			{
				text: getMessage('AgreedOrNot'),
				duration: -1,
			},
			'info'
		);
	} else if (!isFill) {
		toastifyInstance = toastify(
			{
				text: getMessage('EmptyUsernameOrPassword'),
				duration: -1,
			},
			'info'
		);
	}

	const isValid: boolean = isAgreeTos && isFill;

	return {
		isValid,
		toastifyInstance,
	};
};

export {type NeedToCheckElements, checkValid};
