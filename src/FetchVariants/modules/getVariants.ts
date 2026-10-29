import {api} from './api';
import {generateResult} from './generateResult';
import {generateText} from './generateText';
import {variants} from './idb';

const getVariants = async (string: string): Promise<VariantRecord | undefined> => {
	const results = await variants.get(string);
	if (results) {
		variants.delete(string);
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
		const time = Date.now();
		const results = {
			string,
			variants: generateResult(result),
			time,
		};
		await variants.set(string, results);
		return results;
	} catch {
		return undefined;
	}
};

export {getVariants};
