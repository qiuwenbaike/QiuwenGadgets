import * as OPTIONS from '../../options.json';
import {fallbackTable} from './generateFallbackTable';
import {isValidKey} from './isValidKey';

interface LocaleEnvironment {
	documentLanguage?: string;
	navigatorLanguage?: string;
}

const splitLanguageCode = (languageCode: string): string[] => {
	return languageCode.split('-').map((value: string): string => value.toLowerCase());
};

/**
 * 根据文档语言和浏览器语言生成“浏览器回退链”。
 */
const generateBrowserFallback = ({
	documentLanguage = document.documentElement.lang,
	navigatorLanguage = navigator.language,
}: LocaleEnvironment = {}): string[] => {
	const documentLanguageSplitArray = splitLanguageCode(documentLanguage);
	const navigatorLanguageSplitArray = splitLanguageCode(navigatorLanguage);

	let languageCode = OPTIONS.defaultLanguageCode;
	for (const languageCodeSplitArray of [documentLanguageSplitArray, navigatorLanguageSplitArray]) {
		switch (languageCodeSplitArray.length) {
			case 2:
				languageCode = `${languageCodeSplitArray[0]}-${languageCodeSplitArray[1]}`;
				break;
			case 3:
				languageCode = `${languageCodeSplitArray[0]}-${languageCodeSplitArray[2]}`;
				break;
			default:
				languageCode = languageCodeSplitArray[0] as string;
				break;
		}
		if (isValidKey(fallbackTable, languageCode)) {
			break;
		}
	}

	return [...new Set([languageCode, OPTIONS.defaultLanguageCode])];
};

/**
 * 将 locale、回退表分组和浏览器回退链合并为唯一的 locale 链。
 */
const resolveLocaleChain = (locale: string, environment: LocaleEnvironment = {}): string[] => {
	const browserFallback = generateBrowserFallback(environment);

	let tableFallback: string[] = browserFallback;
	for (const key of [locale, ...browserFallback]) {
		if (isValidKey(fallbackTable, key)) {
			tableFallback = fallbackTable[key]!;
			break;
		}
	}

	return [...new Set([locale, ...tableFallback, ...browserFallback])];
};

export {resolveLocaleChain};
export type {LocaleEnvironment};
