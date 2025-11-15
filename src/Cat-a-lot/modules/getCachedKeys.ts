import * as OPTIONS from '../options.json';
import {VARIANTS} from './constant';
import {api} from './api';
import {uniqueArray} from 'ext.gadget.Util';

const getCachedKeys = () => {
	const variantCache: Record<string, string[]> = {};
	for (const [key, value] of Object.entries(
		(mw.storage as unknown as Storage)['store'] as Record<string, string[]>
	)) {
		if (key.startsWith(OPTIONS.storageKey)) {
			const cacheKey = key.replace(OPTIONS.storageKey, '');
			variantCache[cacheKey] = value;
		}
	}
	return variantCache;
};

const loadVariants = async () => {
	let results: string[] = [];
	const category = mw.config.get('wgTitle').replace(/^Category:/, '');
	const params: ApiParseParams = {
		action: 'parse',
		format: 'json',
		formatversion: '2',
		text: category,
		title: 'temp',
	};
	for (const variant of VARIANTS) {
		try {
			const {parse} = await api.get({
				...params,
				variant,
			} as typeof params);
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const {text} = parse;
			const result = $(text).eq(0).text().trim();
			results[results.length] = result;
		} catch {}
	}
	if (!results.length) {
		results[0] = category;
	}
	results = uniqueArray(results); // Replace Set with uniqueArray, avoiding core-js polyfilling
	mw.storage.setObject(OPTIONS.storageKey + category, results, 60 * 60 * 24); // 1 day
	const resultObject: Record<string, string[]> = {};
	resultObject[category] = results;
	return resultObject;
};

export {loadVariants, getCachedKeys};
