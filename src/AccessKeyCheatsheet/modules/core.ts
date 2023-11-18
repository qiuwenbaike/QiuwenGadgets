import {generateAccessKeysTableWithOpener} from './util/generateAccessKeysTableWithOpener';
import {generateMessageDialogProperty} from './util/generateMessageDialogProperty';

/**
 * Adds alt+shift+? as an access key to show a list of all default access keys
 */
const accessKeyCheatsheet = (): void => {
	const $body: JQuery<HTMLBodyElement> = $('body');

	const {$accessKeysTable, $accessKeyCheatsheetOpener} = generateAccessKeysTableWithOpener($body);
	const messageDialogProperty = generateMessageDialogProperty($accessKeysTable);

	let messageDialog: OO.ui.MessageDialog;
	$accessKeyCheatsheetOpener.on('click', (event: JQuery.ClickEvent): void => {
		event.preventDefault();
		if (messageDialog) {
			if (messageDialog.isOpened()) {
				messageDialog.close();
			} else {
				messageDialog.open(messageDialogProperty);
			}
			return;
		}

		messageDialog = new OO.ui.MessageDialog();

		const windowManager: OO.ui.WindowManager = new OO.ui.WindowManager();
		windowManager.$element
			.css({
				'margin-bottom': '0',
				width: '35em',
			})
			.appendTo($body);
		windowManager.addWindows([messageDialog]);
		windowManager.openWindow(messageDialog, messageDialogProperty);
	});
};

export {accessKeyCheatsheet};
