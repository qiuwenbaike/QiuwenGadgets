type I18nCandidatesKey =
	| 'en'
	| 'ja'
	| 'ru'
	| 'zh'
	| 'zh-hans'
	| 'zh-hant'
	| 'zh-cn'
	| 'zh-sg'
	| 'zh-my'
	| 'zh-tw'
	| 'zh-hk'
	| 'zh-mo';

type I18nCandidates = Partial<Record<I18nCandidatesKey, string>>;

declare global {
	type I18nMessages = {
		readonly [message: string]: string | undefined;
	};

	type GetI18nMessages = () => I18nMessages;

	namespace i18n {
		function content(candidates: I18nCandidates): string;
		function localize(candidates: I18nCandidates): string;
		function vary(candidates: I18nCandidates): string;
	}
}

export default global;
export {I18nCandidates};
