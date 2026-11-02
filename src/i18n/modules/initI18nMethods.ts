import * as OPTIONS from '../options.json';
import type {I18nCandidates} from './types';
import {generateDefaultFallbackList} from './util/generateDefaultFallbackList';
import {isValidKey} from './util/isValidKey';

const initI18nMethods = (): typeof i18nMethods => {
	const defaultFallbackList: string[] = generateDefaultFallbackList();
	const fallbackLists = new Map<string, string[]>();

	const getFallbackList = (locale: string): string[] => {
		const cachedFallbackList = fallbackLists.get(locale);
		if (cachedFallbackList) {
			return cachedFallbackList;
		}

		let fallbackList: string[] = defaultFallbackList;
		for (const key of [locale, ...fallbackList]) {
			if (isValidKey(OPTIONS.fallbackTable, key)) {
				fallbackList = OPTIONS.fallbackTable[key];
				break;
			}
		}

		const resolvedFallbackList = [...new Set([locale, ...fallbackList, ...defaultFallbackList])];
		fallbackLists.set(locale, resolvedFallbackList);
		return resolvedFallbackList;
	};

	const elect = (candidates: I18nCandidates, locale: string): string => {
		for (const key of getFallbackList(locale)) {
			if (isValidKey(candidates, key)) {
				return candidates[key];
			}
		}

		return '';
	};

	const {wgContentLanguage, wgUserLanguage, wgUserVariant} = mw.config.get();

	const i18nMethods: Partial<typeof import('ext.gadget.i18n')> = {
		content: (candidates) => {
			return elect(candidates, wgContentLanguage);
		},
		localize: (candidates) => {
			return elect(candidates, wgUserLanguage);
		},
		vary: (candidates) => {
			return elect(candidates, wgUserVariant ?? wgContentLanguage);
		},
	};

	return i18nMethods;
};

export {initI18nMethods};
