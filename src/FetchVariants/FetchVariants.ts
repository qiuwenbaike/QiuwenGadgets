import * as OPTIONS from './options.json';
import {IDBPlus} from 'ext.gadget.idb-plus';
import {api} from './modules/api';
import {generateText} from './modules/generateText';
import {generateVariantResult} from './modules/generateVariants';

const fetchVariants = async (string: string): Promise<VariantRecord | undefined> => {
	const variants = new IDBPlus<string, VariantRecord>(OPTIONS.storageKey, 'variants');

	if (await variants.get(string)) {
		return variants.get(string);
	}

	const params: ApiParseParams = {
		action: 'parse',
		format: 'json',
		text: generateText(string),
		title: 'temp',
		variant: 'zh',
		formatversion: '2',
	};
	try {
		const {parse} = await api.get(params);
		const {text} = parse;
		const result = new DOMParser().parseFromString(text, 'text/html');
		const results = {
			string,
			variants: generateVariantResult(result),
		};
		await variants.set(string, results);
		return results;
	} catch {
		return undefined;
	}
};

export {fetchVariants};
