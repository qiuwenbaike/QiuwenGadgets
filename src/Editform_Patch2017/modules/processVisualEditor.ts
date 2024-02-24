import {DIALOG_LICENSE_ID, TARGET_CLASS} from './constant';
import {getMessage} from './i18n';

const processVisualEditor = ({$body}: {$body: JQuery<HTMLBodyElement>}) => {
	// Missing label messages
	const $labels: JQuery = $body.find(`.${TARGET_CLASS}`).find('label');
	for (const label of $labels) {
		if (!label.textContent?.startsWith('⧼')) {
			continue;
		}

		const labelName = label.textContent.replace('⧼', '').replace('⧽', '');

		if (['minoredit', 'watchthis'].includes(labelName)) {
			label.textContent = getMessage(labelName as 'minoredit' | 'watchthis');
			label.title = getMessage(labelName as 'minoredit' | 'watchthis');
		}
	}

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
