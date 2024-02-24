import {DIALOG_LICENSE_ID} from './constant';
import {getMessage} from './i18n';

const processVisualEditor = ({$body}: {$body: JQuery<HTMLBodyElement>}) => {
	// Missing copyright warning
	if (!$body.find(`.${DIALOG_LICENSE_ID}`).children().length) {
		$body.find(`.${DIALOG_LICENSE_ID}`).append(
			$('<div>')
				.addClass('fmbox plainlinks fmbox-system')
				.append($('<div>').addClass('mbox-text').html(getMessage('copyrightwarning')))
		);
	}
};

export {processVisualEditor};
