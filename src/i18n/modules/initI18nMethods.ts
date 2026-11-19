import type {I18nCandidates, I18nMethods} from './types';
import {isValidKey} from './util/isValidKey';
import {resolveLocaleChain} from './util/resolveLocaleChain';

const initI18nMethods = (): I18nMethods => {
	const fallbackLists = new Map<string, string[]>();

	const getFallbackList = (locale: string): string[] => {
		const cachedFallbackList = fallbackLists.get(locale);
		if (cachedFallbackList) {
			return cachedFallbackList;
		}

		const resolvedFallbackList = resolveLocaleChain(locale);
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

	const i18nMethods: I18nMethods = {
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
