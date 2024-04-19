import * as OPTIONS from '../options.json';

const getCacheKey = () => {
	const {wgPageName} = mw.config.get();
	let cacheKey: string = `${OPTIONS.cacheKeyPrefix}${wgPageName}`;
	const section = document.querySelector<HTMLInputElement>('input[name=wpSection]')?.value;
	if (section) {
		cacheKey += `#${section}`;
	}

	return cacheKey;
};

export {getCacheKey};
