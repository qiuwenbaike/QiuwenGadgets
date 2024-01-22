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
	isAgreeTos: boolean;
	isValid: boolean;
	toastifyInstance: ToastifyInstance;
}> => {
	let isAgreeTos: boolean = agreeTosCheckbox.isSelected();
	const isFill: boolean = ![nameInput.getValue(), pwdInput.getValue()].includes('');

	toastifyInstance.hideToast();
	await windowManager.clearWindows();

	if (!isAgreeTos) {
		isAgreeTos = await oouiConfirm(windowManager, {
			message: $(<span innerHTML={getMessage('DoubleCheckAgreedOrNot')} />) as JQuery,
			actions: [
				{
					label: $(<b>{getMessage('Cancel')}</b>),
					action: 'cancel',
					flags: ['safe', 'close'],
				},
				{
					label: $(<b>{getMessage('I agree')}</b>),
					action: 'accept',
					flags: ['primary', 'progressive'],
				},
			],
		});

		await windowManager.clearWindows();

		if (!isAgreeTos) {
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
		isAgreeTos,
		isValid,
		toastifyInstance,
	};
};

export {type NeedToCheckElements, checkValid};
