/* eslint-disable camelcase */
import type {Setting} from './types';

const API_ENTRY_POINT: string = mw.util.wikiScript('api');

const CLASS_NAME = 'gadget-cat_a_lot';
const CLASS_NAME_CONTAINER = `${CLASS_NAME}-container`;
const CLASS_NAME_CONTAINER_DATA = `${CLASS_NAME_CONTAINER}__data`;
const CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST = `${CLASS_NAME_CONTAINER_DATA}__category-list`;
const CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION = `${CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST}__action`;
const CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_NO_FOUND = `${CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST}--no-found`;
const CLASS_NAME_CONTAINER_DATA_MARK_COUNTER = `${CLASS_NAME_CONTAINER_DATA}__mark-counter`;
const CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT = `${CLASS_NAME_CONTAINER_DATA}__search-input-container__input`;
const CLASS_NAME_CONTAINER_DATA_SELECTIONS = `${CLASS_NAME_CONTAINER_DATA}__selections`;
const CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED = `${CLASS_NAME_CONTAINER}__head__link--enabled`;
const CLASS_NAME_CURRENT_COUNTER = `${CLASS_NAME}-current_counter`;
const CLASS_NAME_FEEDBACK = `${CLASS_NAME}-feedback`;
const CLASS_NAME_FEEDBACK_DONE = `${CLASS_NAME_FEEDBACK}--done`;
const CLASS_NAME_LABEL = `${CLASS_NAME}-label`;
const CLASS_NAME_LABEL_DONE = `${CLASS_NAME_LABEL}--done`;
const CLASS_NAME_LABEL_LAST_SELECTED = `${CLASS_NAME_LABEL}--last-selected`;
const CLASS_NAME_LABEL_SELECTED = `${CLASS_NAME_LABEL}--selected`;

const DEFAULT_SETTING: Setting = {
	docleanup: {
		default: false,
		label_i18n: 'docleanuppref',
	},
	editpages: {
		default: true,
		label_i18n: 'editpagespref',
	},
	minor: {
		default: false,
		label_i18n: 'minorpref',
	},
	subcatcount: {
		default: 50,
		label_i18n: 'subcatcountpref',
	},
	watchlist: {
		default: 'preferences',
		label_i18n: 'watchlistpref',
		select_i18n: {
			watch_nochange: 'nochange',
			watch_pref: 'preferences',
			watch_unwatch: 'unwatch',
			watch_watch: 'watch',
		},
	},
};

const WG_CANONICAL_SPECIAL_PAGE_NAME: string = mw.config.get('wgCanonicalSpecialPageName').toString();
const WG_FORMATTED_NAMESPACES: Record<number, string> = mw.config.get('wgFormattedNamespaces');
const WG_NAMESPACE_IDS: Record<string, number> = mw.config.get('wgNamespaceIds');
const WG_NAMESPACE_NUMBER: number = mw.config.get('wgNamespaceNumber');
const WG_SCRIPT: string = mw.config.get('wgScript');
const WG_TITLE: string = mw.config.get('wgTitle');
const WG_USER_LANGUAGE: string = mw.config.get('wgUserLanguage');
const WG_WIKI_ID: string = mw.config.get('wgWikiID');

export {
	API_ENTRY_POINT,
	CLASS_NAME,
	CLASS_NAME_CONTAINER,
	CLASS_NAME_CONTAINER_DATA,
	CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST,
	CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION,
	CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_NO_FOUND,
	CLASS_NAME_CONTAINER_DATA_MARK_COUNTER,
	CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT,
	CLASS_NAME_CONTAINER_DATA_SELECTIONS,
	CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED,
	CLASS_NAME_CURRENT_COUNTER,
	CLASS_NAME_FEEDBACK,
	CLASS_NAME_FEEDBACK_DONE,
	CLASS_NAME_LABEL,
	CLASS_NAME_LABEL_DONE,
	CLASS_NAME_LABEL_LAST_SELECTED,
	CLASS_NAME_LABEL_SELECTED,
	DEFAULT_SETTING,
	WG_CANONICAL_SPECIAL_PAGE_NAME,
	WG_FORMATTED_NAMESPACES,
	WG_NAMESPACE_IDS,
	WG_NAMESPACE_NUMBER,
	WG_SCRIPT,
	WG_TITLE,
	WG_USER_LANGUAGE,
	WG_WIKI_ID,
};
