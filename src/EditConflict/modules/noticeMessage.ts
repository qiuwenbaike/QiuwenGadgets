import {getMessage} from './i18n';

const locationReload = () => {
	location.reload();
	return false;
};

const $noticeMessage = $('<span>').append(
	getMessage('Notice'),
	$('<a>').on('click', locationReload).text(getMessage('Refresh'))
);

export {$noticeMessage};
