import {type OptionData, getOptionData} from '../getOptionData';

const generateSelectElement = (): HTMLSelectElement => {
	const selectElement: HTMLSelectElement = document.createElement('select');

	selectElement.id = 'enhancedSpecialSearch';
	selectElement.className = 'oo-ui-dropdownWidget-handle';
	selectElement.style.width = 'auto';

	const createOption = ({site, url, origin}: OptionData): HTMLOptionElement => {
		const optionElementelement: HTMLOptionElement = new Option(site, url, origin);

		if (origin) {
			optionElementelement.dataset['origin'] = '1';
		}

		return optionElementelement;
	};

	const optionData: OptionData[] = getOptionData();
	for (const data of optionData) {
		const optionElement: HTMLOptionElement = createOption(data);
		selectElement.append(optionElement);
	}

	return selectElement;
};

export {generateSelectElement};
