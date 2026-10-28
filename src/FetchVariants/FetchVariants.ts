import * as OPTIONS from './options.json';
import {IDBPlus} from 'ext.gadget.idb-plus';
import {type Langs} from './modules/constant';
import {api} from './modules/api';
import {generateText} from './modules/generateText';
type VariantRecord = {string: string; variants: Record<Langs, string>};

const variants = new IDBPlus<string, VariantRecord>(OPTIONS.storageKey, 'variants');

const fetchVariants = async (string: string): Promise<VariantRecord | undefined> => {
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
			variants: {
				zh: result.querySelector('#zh')?.textContent ?? '',
				'zh-hans': result.querySelector('#zh-hans')?.textContent ?? '',
				'zh-hant': result.querySelector('#zh-hant')?.textContent ?? '',
				'zh-cn': result.querySelector('#zh-cn')?.textContent ?? '',
				'zh-hk': result.querySelector('#zh-hk')?.textContent ?? '',
				'zh-mo': result.querySelector('#zh-mo')?.textContent ?? '',
				'zh-my': result.querySelector('#zh-my')?.textContent ?? '',
				'zh-sg': result.querySelector('#zh-sg')?.textContent ?? '',
				'zh-tw': result.querySelector('#zh-tw')?.textContent ?? '',
			},
		};
		await variants.set(string, results);
		return results;
	} catch {
		return undefined;
	}
};

export {fetchVariants};
