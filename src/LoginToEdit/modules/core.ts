import {IS_WG_EDIT_OR_SUBMIT_ACTION, LOGIN_ELEMENT_SELECTOR} from './constant';
import {getMessage} from './i18n';

export const loginToEdit = (): void => {
	const isCitizen: boolean = mw.config.get('skin') === 'citizen';
	const loginURL: string = mw.util.getUrl('Special:UserLogin', {
		returnto: mw.config.get('wgPageName'),
	});
	const registerURL: string = mw.util.getUrl('Special:CreateAccount', {
		returnto: mw.config.get('wgPageName'),
	});
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
						location.href = loginURL;
					}
				} else if (action === 'register') {
					location.href = registerURL;
				}
				return new OO.ui.Process((): void => {
					void windowManager.closeWindow(messageDialog);
				});
			};
			windowManager = new OO.ui.WindowManager();
			windowManager.$element.appendTo($('body'));
			windowManager.addWindows([messageDialog]);
		}
		void windowManager.openWindow(messageDialog, windowOpeningData);
	};
	const $body: JQuery<HTMLBodyElement> = $('body');
	const $caViewsource: JQuery = $body.find('#ca-viewsource');
	if ($caViewsource.length) {
		const editIcon: string = isCitizen ? '<span class="citizen-ui-icon mw-ui-icon-wikimedia-edit"></span>' : '';
		$caViewsource
			.attr('id', 'ca-edit')
			.find('a')
			.attr('title', getMessage('Edit'))
			.attr('aria-label', getMessage('DialogMessage'))
			.html(editIcon + getMessage('Edit'));
		$body.find('#ca-edit a').on('click', (event: JQuery.ClickEvent) => {
			event.preventDefault();
			openDialog();
		});
	}
	if (IS_WG_EDIT_OR_SUBMIT_ACTION) {
		openDialog();
	}
};
