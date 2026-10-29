import {getVariants} from './modules/getVariants';
import {variants} from './modules/idb';

const CACHE_DURATION = 24 * 60 * 60 * 1000;

const fetchVariants = async (string: string): Promise<VariantRecord | undefined> => {
	const time = Date.now();
	const results = await variants.get(string);

	if (results?.time && time - results.time < CACHE_DURATION) {
		return results;
	}

	if (results) {
		await variants.delete(string);
	}

	return getVariants(string);
};

export {fetchVariants};
