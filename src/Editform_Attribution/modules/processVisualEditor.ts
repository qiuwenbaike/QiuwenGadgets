import * as OPTIONS from '~/Editform_Attribution/options.json';
import {appendTextToSummary} from './util/changeSummary';
import {generateVisualEditorCheckboxLayout} from './util/generateCheckboxLayout';
import {getMessage} from './i18n';

const processVisualEditor = ({$body}: {$body: JQuery<HTMLBodyElement>}): void => {
	// Guard against double inclusions
	if (mw.config.get(OPTIONS.configKey)) {
		return;
	}

	const $target: JQuery = $body.find(`.${OPTIONS.targetClassVe}`);
	if (!$target.length) {
		return;
	}

	mw.config.set(OPTIONS.configKey, true);

	const get$Layout = () => {
		return generateVisualEditorCheckboxLayout({
			inputId: OPTIONS.inputId,
			label: getMessage('ThirdPartyContentContained'),
			// changeTag: OPTIONS.changeTag,
			$body,
		});
	};

	const $layout = get$Layout();

	if (!$body.find(`#${OPTIONS.inputId}`).length) {
		$target.append($layout);
	}

	mw.hook('ve.activationComplete').add(() => {
		const {target} = window.ve.init;
		const {saveDialog} = target;

		saveDialog.on('save', () => {
			const customSummary = String($body.find('input[name=wpAttribution]').val());
			const $wpSummary = target.saveDialog.editSummaryInput.$input;
			appendTextToSummary({customSummary, $wpSummary});
			$layout.replaceWith(get$Layout());
		});
	});
};

export {processVisualEditor};
