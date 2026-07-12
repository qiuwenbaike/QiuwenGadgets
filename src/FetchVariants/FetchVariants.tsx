import * as OPTIONS from './options.json';
import {IDBPlus} from 'ext.gadget.idb-plus';
import {type Langs} from './modules/constant';
import {api} from './modules/api';
type VariantRecord = {string: string; variants: Record<Langs, string>};

const variants = new IDBPlus<string, VariantRecord>(OPTIONS.storageKey, 'variants');

const fetchVariants = async (string: string): Promise<VariantRecord | undefined> => {
	if (await variants.get(string)) {
		return variants.get(string);
	}

	const params: ApiParseParams = {
		action: 'parse',
		format: 'json',
		formatversion: '2',
		text: `<ul id="findvariants">
	<li id="zh">-{zh|${string}}}-</li>
	<li id="zh-hans">-{zh-hans|${string}}}-</li>
	<li id="zh-hant">-{zh-hant|${string}}}-</li>
	<li id="zh-cn">-{zh-cn|${string}}}-</li>
	<li id="zh-hk">-{zh-hk|${string}}}-</li>
	<li id="zh-mo">-{zh-mo|${string}}}-</li>
	<li id="zh-my">-{zh-my|${string}}}-</li>
	<li id="zh-sg">-{zh-sg|${string}}}-</li>
	<li id="zh-tw">-{zh-tw|${string}}}-</li>
</ul>`,
		title: 'temp',
		variant: 'zh',
	};
	try {
		const {parse} = await api.get(params);
		const {text} = parse;
		const $result = $(text);
		const results = {
			string,
			variants: {
				zh: $result.find('#zh').text(),
				'zh-hans': $result.find('#zh-hans').text(),
				'zh-hant': $result.find('#zh-hant').text(),
				'zh-cn': $result.find('#zh-cn').text(),
				'zh-hk': $result.find('#zh-hk').text(),
				'zh-mo': $result.find('#zh-mo').text(),
				'zh-my': $result.find('#zh-my').text(),
				'zh-sg': $result.find('#zh-sg').text(),
				'zh-tw': $result.find('#zh-tw').text(),
			},
		};
		await variants.set(string, results);
		return results;
	} catch {
		return undefined;
	}
};

export {fetchVariants};
