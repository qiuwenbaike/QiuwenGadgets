type Override<P, S> = Omit<P, keyof S> & S;

interface SettingCommon {
	default: boolean;
	label?: SettingCommon['label_i18n'];
	label_i18n: string;
	select?: SettingCommon['select_i18n'];
	select_i18n?: Record<string, string>;
}

type SettingSubCatCount = Override<SettingCommon, {default: number}>;

type SettingWatchlist = Override<SettingCommon, {default: string; select?: SettingWatchlist['select_i18n']}> & {
	select_i18n: {
		watch_nochange: string;
		watch_pref: string;
		watch_unwatch: string;
		watch_watch: string;
	};
};

interface Setting {
	docleanup: SettingCommon;
	editpages: SettingCommon;
	minor: SettingCommon;
	subcatcount: SettingSubCatCount;
	watchlist: SettingWatchlist;
}

type SettingGlobal = Partial<Record<keyof Setting, unknown>>;

export type {Setting, SettingGlobal};
