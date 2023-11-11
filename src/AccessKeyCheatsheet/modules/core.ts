import {getMessage} from './i18n';

/**
 * Adds alt+shift+? as an access key to show a list of all default access keys
 */
const accessKeyCheatsheet = (): void => {
	const $accessKeysTableItems: JQuery[] = $('[accesskey]')
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
	const $accessKeysTable: JQuery = $('<table>')
		.addClass('wikitable')
		.css('width', '100%')
		.append($accessKeysTableItems);

	const $accessKeyCheatsheetOpener: JQuery = $('<a>')
		.attr('accesskey', '?')
		.text(getMessage('Text'))
		.hide()
		.appendTo($('body'));

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
		windowManager.$element.css('width', '35em').appendTo($('body'));
		windowManager.addWindows([messageDialog]);
		windowManager.openWindow(messageDialog, messageDialogProperty);
	});
};

export {accessKeyCheatsheet};
