import type {OptionData} from './getOptionData';
import {openPage} from './util/openPage';

const addListener = (targetElement: HTMLElement, getSelectedOption: () => OptionData | undefined): void => {
	targetElement.addEventListener('submit', (event: SubmitEvent): void => {
		const inputElement: HTMLInputElement | null = targetElement.querySelector('[type="search"]');
		if (!inputElement) {
			return;
		}

		const selectedOption = getSelectedOption();
		if (!selectedOption || selectedOption.origin) {
			return;
		}

		event.preventDefault();
		openPage((selectedOption.url ?? '').replace('$1', encodeURIComponent(inputElement.value)));
	});
};

export {addListener};
