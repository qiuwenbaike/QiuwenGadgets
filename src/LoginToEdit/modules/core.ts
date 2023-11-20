import {LOGIN_ELEMENT_SELECTOR, LOGIN_URL, REGISTER_URL} from './constant';
import {getMessage} from './i18n';

export const loginToEdit = (): void => {
	const isCitizen: boolean = mw.config.get('skin') === 'citizen';
	const $body = $('body');

	let messageDialog: OO.ui.MessageDialog;
	let windowManager: OO.ui.WindowManager;

	const windowOpeningData: OO.ui.WindowManager.WindowOpeningData = {
		title: $('<b>').addClass('oo-ui-window-head').text(getMessage('DialogTitle')),
		message: $('<span>').addClass('oo-ui-window-foot').text(getMessage('DialogMessage')),
		actions: [
			{
				action: 'login',
				flags: ['primary', 'progressive'],
				label: $('<b>').text(getMessage('Login')),
			},
			{
				action: 'register',
				flags: 'progressive',
				label: $('<b>').text(getMessage('Register')),
			},
			{
				action: 'cancel',
				flags: ['safe', 'close'],
				label: $('<b>').text(getMessage('Cancel')),
			},
		],
	};

	const openDialog = (): void => {
		if (!windowManager) {
			messageDialog = new OO.ui.MessageDialog();
			messageDialog.getActionProcess = (action: string): OO.ui.Process => {
				if (action === 'login') {
					const $element: JQuery<HTMLAnchorElement> = $(LOGIN_ELEMENT_SELECTOR);
					if ($element.length) {
						$element.trigger('click');
					} else {
						location.href = LOGIN_URL;
					}
				} else if (action === 'register') {
					location.href = REGISTER_URL;
				}
				return new OO.ui.Process((): void => {
					windowManager.closeWindow(messageDialog);
				});
			};
			windowManager = new OO.ui.WindowManager();
			windowManager.$element.appendTo(document.body);
			windowManager.addWindows([messageDialog]);
		}
		windowManager.openWindow(messageDialog, windowOpeningData);
	};

	const $caViewsource: JQuery = $body.find('#ca-viewsource');

	if ($caViewsource.length) {
		const editIcon = isCitizen ? '<span class="citizen-ui-icon mw-ui-icon-wikimedia-edit"></span>' : '';
		$caViewsource
			.attr('id', 'ca-edit')
			.find('a')
			.attr('title', getMessage('Edit'))
			.html(`${editIcon}${getMessage('Edit')}`);
		$body.find('#ca-edit a').on('click', (event: JQuery.ClickEvent) => {
			event.preventDefault();
			openDialog();
		});
	}

	if (['edit', 'submit'].includes(mw.config.get('wgAction'))) {
		openDialog();
	}
};
