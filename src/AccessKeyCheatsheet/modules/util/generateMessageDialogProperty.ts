import {getMessage} from '../i18n';

const generateMessageDialogProperty = ($accessKeysTable: JQuery): OO.ui.WindowManager.WindowOpeningData => {
	const messageDialogProperty: OO.ui.WindowManager.WindowOpeningData = {
		title: getMessage('Title'),
		message: $accessKeysTable,
		actions: [
			{
				action: 'close',
				flags: ['safe', 'close'],
				label: getMessage('Close'),
			},
		],
		size: 'medium',
	};

	return messageDialogProperty;
};
export {generateMessageDialogProperty};
