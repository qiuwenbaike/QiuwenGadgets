import * as OPTIONS from '../options.json';

const getCachedKeys = () => {
	const variantCache: Record<string, string[]> = {};
	for (const [key, value] of Object.entries(
		(mw.storage as unknown as Storage)['store'] as Record<string, string[]>
	)) {
		if (key.startsWith(OPTIONS.storageKey) && Array.isArray(value)) {
			const cacheKey = key.replace(OPTIONS.storageKey, '');
			variantCache[cacheKey] = value;
		}
	}
	return variantCache;
};

export {getCachedKeys};
