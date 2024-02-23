import {getMessage} from './i18n';

const DIALOG_LICENSE_ID = 've-ui-mwSaveDialog-license';

const processVisualEditor = ({$body}: {$body: JQuery<HTMLBodyElement>}) => {
	// Missing copyright warning
	if (!$body.find(`.${DIALOG_LICENSE_ID}`).children().length) {
		$body
			.find(`.${DIALOG_LICENSE_ID}`)
			.append($('<div>').addClass('fmbox plainlinks fmbox-system').html(getMessage('copyrightwarning')));
	}
};

export {processVisualEditor};
