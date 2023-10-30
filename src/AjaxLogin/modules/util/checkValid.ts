import {ding} from '../../../util';
import {getMessage} from '../i18n';

const checkValid = (
	agreeTosCheckbox: OO.ui.CheckboxInputWidget,
	nameInput: OO.ui.TextInputWidget,
	pwdInput: OO.ui.TextInputWidget
): boolean => {
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

export {checkValid};
