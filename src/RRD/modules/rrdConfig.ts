import type {RrdConfig} from './types';

const config: RrdConfig = {
	checkboxes: {},
	others: {},
};

const applyConfig = (checkboxes: RrdConfig['checkboxes'] = {}, others: RrdConfig['others'] = {}): void => {
	config.checkboxes = checkboxes;
	config.others = others;
};

export {applyConfig, config};
