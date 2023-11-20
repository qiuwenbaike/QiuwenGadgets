import {articleSummaries, commonSummaries, talkPageSummaries} from './messages';

const $body = $('body');

let $wpSummary: JQuery = $body.find('#wpSummary');

const addOptionsToDropdown = (dropdown: OO.ui.DropdownWidget, optionTexts: string[]): void => {
	dropdown.getMenu().addItems(
		optionTexts.map((optionText: string): OO.ui.MenuOptionWidget => {
			return new OO.ui.MenuOptionWidget({label: optionText});
		})
	);
};

const onSummarySelect = (option: OO.ui.OptionWidget): void => {
	// Save the original value of the edit summary field
	const editsummOriginalSummary = String($wpSummary.val());
	const canned: string = option.getLabel() as string;
	let newSummary: string = editsummOriginalSummary;
	// Append old edit summary with space, if exists,
	// and last character != space
	if (newSummary.length && newSummary?.charAt(newSummary.length - 1) !== ' ') {
		newSummary += ' ';
	}
	newSummary += canned;
	$wpSummary.val(newSummary).trigger('change');
};

const getSummaryDropdowns = (): JQuery => {
	// For convenience, add a dropdown box with some canned edit
	// summaries to the form.
	const wgNamespaceNumber: number = mw.config.get('wgNamespaceNumber');
	const dropdown: OO.ui.DropdownWidget = new OO.ui.DropdownWidget({
		label: window.wgULS('常用编辑摘要', '常用編輯摘要'),
	});
	dropdown.getMenu().on('select', (option: OO.ui.OptionWidget | OO.ui.OptionWidget[] | null): void => {
		onSummarySelect(option as OO.ui.OptionWidget);
	});
	addOptionsToDropdown(dropdown, commonSummaries);
	if (wgNamespaceNumber === 0) {
		addOptionsToDropdown(dropdown, articleSummaries);
	} else if (wgNamespaceNumber % 2 !== 0 && wgNamespaceNumber !== 3) {
		addOptionsToDropdown(dropdown, talkPageSummaries);
	} else if (wgNamespaceNumber === 118) {
		addOptionsToDropdown(dropdown, articleSummaries);
	}
	return dropdown.$element;
};

// VisualEditor
const loadDefaultSummariesInVE = (): void => {
	// .ve-init-mw-viewPageTarget-saveDialog-checkboxes
	if ($body.data('wppresent')) {
		return;
	}
	$body.data('wppresent', 'true');
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const {target} = ve.init;
	const {$saveOptions} = target.saveDialog;
	$wpSummary = target.saveDialog.editSummaryInput.$input;
	if (!$saveOptions.length) {
		return;
	}
	const $dropdowns: JQuery = getSummaryDropdowns();
	$saveOptions.before($dropdowns);
};

// WikiEditor
const loadDefaultSummariesInWikiEditor = (): void => {
	const $editCheckboxes: JQuery = $body.find('.editCheckboxes');
	// If we failed to find the editCheckboxes class
	if (!$editCheckboxes.length) {
		return;
	}
	const $dropdowns: JQuery = getSummaryDropdowns();
	$dropdowns.css({
		width: '48%',
		'padding-bottom': '1em',
	});
	$editCheckboxes.before($dropdowns);
};

export const defaultSummariesLoad = (): void => {
	mw.hook('ve.saveDialog.stateChanged').add(loadDefaultSummariesInVE);
	loadDefaultSummariesInWikiEditor();
};
