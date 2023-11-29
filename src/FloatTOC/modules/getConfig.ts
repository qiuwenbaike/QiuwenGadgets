import type {Config} from './types';

const getConfig = (id: string): Config => {
	let config: ReturnType<typeof getConfig> = mw.storage.getObject(id);
	if (!config) {
		config = {floatTOC: window.outerHeight < window.outerWidth ? 'open' : 'close', originTOC: 'open'};
	}

	return config;
};

export {getConfig};
