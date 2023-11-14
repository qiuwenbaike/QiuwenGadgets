import {GADGET_NAME, SYSTEM_SCRIPT_LIST, WEBMASTER_LIST, wgUserGroups, wgUserName, wgUserVariant} from './constant';
import {getMessage} from './i18n';
import {removeWindowResizeHandler} from './removeWindowResizeHandler';

const locationHref: string = location.href;

const isExperiencedUser = (): boolean => {
	if (!wgUserName || !wgUserGroups) {
		return false;
	}
	return (
		['sysop', 'senioreditor', 'steward', 'qiuwen'].some((element) => {
			return wgUserGroups.includes(element);
		}) ||
		SYSTEM_SCRIPT_LIST.includes(wgUserName) ||
		WEBMASTER_LIST.includes(wgUserName)
	);
};

const isLanguageSet = (): boolean => {
	if (mw.util.getParamValue('variant') || mw.util.getParamValue('uselang')) {
		return true;
	}
	return false;
};

const isWrongURL = (): boolean => {
	if (locationHref.includes('/zh/') || locationHref.includes('/zh-hans/') || locationHref.includes('/zh-hant/')) {
		return true;
	}
	return false;
};

const showDialog = (): void => {
	const dialogTitleIcon = new OO.ui.IconWidget({
		icon: 'language',
		title: getMessage('dialogTitle'),
	});
	const dialogTitle = new OO.ui.LabelWidget({
		label: getMessage('dialogTitle'),
	});

	const generateButton = (variant: string): OO.ui.ButtonOptionWidget => {
		return new OO.ui.ButtonOptionWidget({
			data: variant,
			label: getMessage(`variant-${variant}`),
			title: getMessage(`variant-${variant}`),
		});
	};
	// Create a new ButtonSelectWidget and add the button options to it
	// via the ButtonSelectWidget's 'items' config option.
	const buttonSelect = new OO.ui.ButtonSelectWidget({
		items: [
			generateButton('zh-cn'),
			generateButton('zh-hk'),
			generateButton('zh-tw'),
			generateButton('zh-sg'),
			generateButton('zh-my'),
			generateButton('zh-mo'),
		],
	});

	if (preferredVariant === null) {
		buttonSelect.selectItemByData('zh-cn');
	} else {
		buttonSelect.selectItemByData(preferredVariant);
	}

	const $dialogTitle = $('<span>')
		.addClass('gadget-notify_conversion__title')
		.append(dialogTitleIcon.$element, dialogTitle.$element);
	const $dialogMessage = $('<div>')
		.addClass('gadget-notify_conversion__message')
		.append(
			$('<p>').text(getMessage('dialogDesc')),
			$('<p>').addClass('gadget-notify_conversion__message_extend').text(getMessage('dialogDescExtend1')),
			$('<p>').addClass('gadget-notify_conversion__message_extend').text(getMessage('dialogDescExtend2')),
			buttonSelect.$element,
			$('<p>').addClass('gadget-notify_conversion__message_privacy-notice').text(getMessage('privacyNotice'))
		);

	const windowManager = new OO.ui.WindowManager();
	windowManager.$element.appendTo($('body'));

	const messageDialog = new OO.ui.MessageDialog();
	const messageDialogProperty = {
		title: $dialogTitle,
		message: $dialogMessage,
		actions: [
			{
				action: 'confirm',
				flags: ['primary', 'progressive'],
				label: $('<b>').text(getMessage('confirm')),
			},
			{
				action: 'cancel',
				flags: ['safe', 'close'],
				label: $('<b>').text(getMessage('cancel')),
			},
		],
	};

	windowManager.addWindows([messageDialog]);
	windowManager.openWindow(messageDialog, messageDialogProperty);

	messageDialog.getActionProcess = (action): OO.ui.Process => {
		const clearWindows = () => {
			mw.storage.set(GADGET_NAME, 'hide');
			windowManager.clearWindows();
		};

		return new OO.ui.Process((): void => {
			if (action === 'confirm') {
				const URL_REGEX = /(\/\/[^/]+\/)([^/]+)(\/)/;
				const selectedItem = buttonSelect.findSelectedItem() as OO.ui.OptionWidget;
				clearWindows();
				const variant = selectedItem.getData();
				location.href = locationHref.replace(URL_REGEX, `$1${variant}$3`);
			} else {
				OO.ui.confirm(getMessage('Are you sure?')).done((confirmed) => {
					if (confirmed) {
						clearWindows();
					}
				});
			}
		});
	};

	removeWindowResizeHandler(windowManager);
};

const preferredVariant: string | null =
	(mw.config.get('wgUserName') ? mw.user.options.get('variant') : mw.config.get('wgUserVariant')) ?? null;

export const notifyConversion = (): void => {
	if (!wgUserVariant) {
		return; // Special pages
	}
	if (isExperiencedUser() || isLanguageSet()) {
		return;
	}
	if (preferredVariant === null || isWrongURL()) {
		showDialog();
	}
};
