import SearchEngineSelect from '../components/SearchEngineSelect.vue';
import {addListener} from './addListener';
import {createApp} from 'vue';
import {getOptionData} from './getOptionData';

const processElement = (searchElement: HTMLElement, targetElement: HTMLElement): void => {
	const options = getOptionData();
	let selectedIndex = '0';
	const root = document.createElement('div');
	root.className = 'enhancedSearchSelect';
	targetElement.append(root);
	createApp(SearchEngineSelect, {
		options,
		onSelect: (index: string): void => {
			selectedIndex = index;
		},
	}).mount(root);

	addListener(searchElement, () => options[Number(selectedIndex)]);
};

export {processElement};
