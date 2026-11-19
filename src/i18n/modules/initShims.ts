import type {I18nCandidates, I18nMethods, I18nShimMethods, WgUXS, WgUXSCandicates, WgUXSCandidate} from './types';

type I18nMethodName = keyof I18nMethods;

/**
 * 将旧的 10 位置参数转换为候选表；未提供的位置按简繁关系补默认值。
 */
const toCandidates = (candidates: readonly WgUXSCandidate[]): I18nCandidates => {
	const [rawHans, rawHant, rawCn, rawTw, rawHk, rawSg, rawZh, rawMo, rawMy, rawEn] = candidates;
	const zh = String(rawZh ?? rawHans ?? rawHant ?? rawCn ?? rawTw ?? rawHk ?? rawSg ?? rawMo ?? rawMy ?? rawEn);
	const hans = String(rawHans ?? rawCn ?? rawSg ?? rawMy ?? zh);
	const hant = String(rawHant ?? rawTw ?? rawHk ?? rawMo ?? zh);
	const cn = String(rawCn ?? hans);
	const sg = String(rawSg ?? hans);
	const tw = String(rawTw ?? hant);
	const hk = String(rawHk ?? hant);
	const mo = String(rawMo ?? hant);
	const my = String(rawMy ?? hant);
	const en = String(rawEn ?? zh);

	return {
		en,
		zh,
		'zh-hans': hans,
		'zh-hant': hant,
		'zh-cn': cn,
		'zh-tw': tw,
		'zh-hk': hk,
		'zh-sg': sg,
		'zh-mo': mo,
		'zh-my': my,
	};
};

const initShims = (i18nMethods: I18nMethods): I18nShimMethods => {
	const createShim =
		(method: I18nMethodName): WgUXS =>
		(...candidates: WgUXSCandicates) => {
			return i18nMethods[method](toCandidates(candidates));
		};

	const wgUCS = createShim('content');
	const wgULS = createShim('localize');
	const wgUVS = createShim('vary');

	mw.log.deprecate(window, 'wgUCS', wgUCS, 'Please use content() instead.', 'window.wgUCS');
	mw.log.deprecate(window, 'wgULS', wgULS, 'Please use localize() instead.', 'window.wgULS');
	mw.log.deprecate(window, 'wgUVS', wgUVS, 'Please use vary() instead.', 'window.wgUVS');

	return {wgUCS, wgULS, wgUVS};
};

export {initShims};
