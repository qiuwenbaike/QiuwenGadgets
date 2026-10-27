import {Langs, langs} from './constant';
import {translate} from './util/translate';

const getLangQueue = (): Langs[] => {
	const runLangs = prompt(translate('转换以下语言（以逗号隔开）：', '轉換以下語言（以逗號隔開）：'), langs.join(','));

	const supportedLangs = new Set<string>(langs);
	const langQueue: Langs[] = [
		...new Set(
			(runLangs ?? langs.join(','))
				.split(',')
				.map((lang: string): string => lang.trim())
				.filter((lang: string): lang is Langs => supportedLangs.has(lang))
		),
	];

	return langQueue;
};

export {getLangQueue};
