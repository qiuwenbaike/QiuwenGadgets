import React from 'ext.gadget.React';
import {getMessage} from '../i18n';
import {toastify} from 'ext.gadget.Toastify';

type NeedToCheckElements = [OO.ui.CheckboxInputWidget, OO.ui.TextInputWidget, OO.ui.TextInputWidget];

const checkValid = (
	[agreeTosCheckbox, nameInput, pwdInput]: NeedToCheckElements,
	toastifyInstance: ToastifyInstance
): {
	isValid: boolean;
	toastifyInstance: ToastifyInstance;
} => {
	let isAgreeTos: boolean = agreeTosCheckbox.isSelected();
	const isFill: boolean = ![nameInput.getValue(), pwdInput.getValue()].includes('');

	toastifyInstance.hideToast();

	if (!isAgreeTos) {
		void OO.ui
			.confirm($((<span>{getMessage('DoubleCheckAgreedOrNot')}</span>) as HTMLElement), {
				actions: [
					{label: getMessage('Cancel'), action: 'cancel', flags: ['safe', 'close']},
					{label: getMessage('I agree'), action: 'accept', flags: ['primary', 'progressive']},
				],
			})
			.then((confirmed: boolean) => {
				if (confirmed) {
					isAgreeTos = true;
					agreeTosCheckbox.setSelected(true);
				} else {
					isAgreeTos = false;
					toastifyInstance = toastify(
						{
							text: getMessage('AgreedOrNot'),
							duration: -1,
						},
						'info'
					);
				}
			});
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
