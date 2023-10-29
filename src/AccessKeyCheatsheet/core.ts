/**
 * @description Adds alt+shift+? as an access key to show a list of all default access keys
 */
import {getMessage} from './i18n';

const $accessKeysTableItems = $('[accesskey]')
	.map((_index: number, element: HTMLElement): JQuery => {
		return $('<tr>').append(
			$('<th>').text(element.accessKey.toUpperCase()),
			$('<td>').text(
				(
					element.getAttribute('aria-label') ||
					element.title ||
					element.textContent ||
					(element as HTMLInputElement).value ||
					$(`label[for="${element.id}"]`).text()
				).replace(/\s?\[.+?\]/, '')
			)
		);
	})
	.get();

const $accessKeysTable: JQuery = $('<table>').addClass('wikitable').css('width', '100%').append($accessKeysTableItems);

let messageDialog: OO.ui.MessageDialog;

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

export const accessKeyCheatsheet = (): void => {
	$('<a>')
		.hide()
		.attr('accesskey', '?')
		.text(getMessage('Text'))
		.on('click', (event: JQuery.ClickEvent): void => {
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
			windowManager.$element.css('width', '35em').appendTo(document.body);
			windowManager.addWindows([messageDialog]);
			windowManager.openWindow(messageDialog, messageDialogProperty);
		})
		.appendTo(document.body);
};
