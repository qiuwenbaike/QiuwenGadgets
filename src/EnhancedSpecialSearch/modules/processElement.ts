import {addListener} from './addListener';
import {generateSelectElement} from './util/generateSelectElement';

const processElement = (searchElement: HTMLElement, targetElement: HTMLElement): void => {
	targetElement.setAttribute('style', 'display:flex;flex-wrap:wrap;align-items:center');

	const selectElement: HTMLSelectElement = generateSelectElement();
	targetElement.append(selectElement);

	addListener(searchElement, selectElement);
};

export {processElement};
