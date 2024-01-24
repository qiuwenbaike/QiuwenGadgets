import {ARTICLE_SUMMARIES, COMMON_SUMMARIES, TALKPAGE_SUMMARIES} from '../messages';
import {WG_NAMESPACE_NUMBER} from '../constant';

const generateMenuOptionWidget = (label: string): OO.ui.MenuOptionWidget => {
	return new OO.ui.MenuOptionWidget({
		label,
	});
};

const addOptionsToDropdown = (dropdownWidget: OO.ui.DropdownWidget, summaries: string[]): void => {
	const menuOptionWidgets: OO.ui.MenuOptionWidget[] = [];

	for (const summary of summaries) {
		menuOptionWidgets[menuOptionWidgets.length] = generateMenuOptionWidget(summary); // Replace `menuOptionWidgets.push()` to avoid polyfilling core-js
	}

	dropdownWidget.getMenu().addItems(menuOptionWidgets);
};

const onSelectCallback = (optionWidget: OO.ui.OptionWidget, $wpSummary: JQuery): void => {
	const originSummary: string = ($wpSummary.val() as string | undefined) ?? '';
	const customSummary: string = optionWidget.getLabel() as string;

	$wpSummary.val(originSummary.trim() ? `${originSummary} ${customSummary}` : customSummary).trigger('change');
};

const generateSummaryDropdown = ($wpSummary: JQuery): JQuery => {
	const dropdownWidget: OO.ui.DropdownWidget = new OO.ui.DropdownWidget({
		label: window.wgULS('常用编辑摘要', '常用編輯摘要'),
	});

	dropdownWidget.getMenu().on('select', (optionWidget: OO.ui.OptionWidget | OO.ui.OptionWidget[] | null): void => {
		onSelectCallback(optionWidget as OO.ui.OptionWidget, $wpSummary);
	});

	addOptionsToDropdown(dropdownWidget, COMMON_SUMMARIES);
	if (WG_NAMESPACE_NUMBER === 0) {
		addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
	} else if (WG_NAMESPACE_NUMBER % 2 !== 0 && WG_NAMESPACE_NUMBER !== 3) {
		addOptionsToDropdown(dropdownWidget, TALKPAGE_SUMMARIES);
	} else if (WG_NAMESPACE_NUMBER === 118) {
		addOptionsToDropdown(dropdownWidget, ARTICLE_SUMMARIES);
	}

	return dropdownWidget.$element;
};

export {generateSummaryDropdown};
