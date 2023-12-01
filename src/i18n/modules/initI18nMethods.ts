import * as OPTIONS from '../options.json';
import {WG_CONTENT_LANGUAGE, WG_USER_LANGUAGE, WG_USER_VARIANT} from './constant';
import {I18nCandidates} from './types';
import {generateDefaultFallbackList} from './util/generateDefaultFallbackList';
import {isValidKey} from '../../util';

const initI18nMethods = (): typeof i18n => {
	const defaultFallbackList: string[] = generateDefaultFallbackList();

	const elect = (candidates: I18nCandidates, locale: string): string => {
		let fallbackList: string[] = defaultFallbackList;
		for (const key of [locale, ...fallbackList]) {
			if (isValidKey(OPTIONS.fallbackTable, key)) {
				fallbackList = OPTIONS.fallbackTable[key];
				break;
			}
		}

		for (const key of new Set([locale, ...fallbackList, ...defaultFallbackList])) {
			if (isValidKey(candidates, key)) {
				return candidates[key];
			}
		}

		return '';
	};

	const i18nMethods: typeof i18n = {
		content: (candidates) => {
			return elect(candidates, WG_CONTENT_LANGUAGE);
		},
		localize: (candidates) => {
			return elect(candidates, WG_USER_LANGUAGE);
		},
		vary: (candidates) => {
			return elect(candidates, WG_USER_VARIANT ?? WG_CONTENT_LANGUAGE);
		},
	};
	window.i18n = i18nMethods;

	return i18nMethods;
};

export {initI18nMethods};
