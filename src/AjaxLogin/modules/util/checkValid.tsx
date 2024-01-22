import React from 'ext.gadget.React';
import {getMessage} from '../i18n';
import {oouiConfirm} from './oouiConfirm';
import {toastify} from 'ext.gadget.Toastify';

type NeedToCheckElements = [OO.ui.CheckboxInputWidget, OO.ui.TextInputWidget, OO.ui.TextInputWidget];

const checkValid = async (
	[agreeTosCheckbox, nameInput, pwdInput]: NeedToCheckElements,
	windowManager: OO.ui.WindowManager,
	toastifyInstance: ToastifyInstance
): Promise<{
	isValid: boolean;
	toastifyInstance: ToastifyInstance;
}> => {
	let isAgreeTos: boolean = agreeTosCheckbox.isSelected();
	const isFill: boolean = ![nameInput.getValue(), pwdInput.getValue()].includes('');

	toastifyInstance.hideToast();

	if (!isAgreeTos) {
		isAgreeTos = await oouiConfirm(
			windowManager,
			$(<span innerHTML={getMessage('DoubleCheckAgreedOrNot')} />) as JQuery,
			{
				actions: [
					{
						label: getMessage('Cancel'),
						action: 'cancel',
						flags: ['safe', 'close'],
					},
					{
						label: getMessage('I agree'),
						action: 'accept',
						flags: ['primary', 'progressive'],
					},
				],
			}
		);
		if (isAgreeTos) {
			agreeTosCheckbox.setSelected(true);
		} else {
			toastifyInstance = toastify(
				{
					text: getMessage('AgreedOrNot'),
					duration: -1,
				},
				'info'
			);
		}
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
