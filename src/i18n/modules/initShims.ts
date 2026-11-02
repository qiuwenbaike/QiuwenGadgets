import type {WgUXSCandicates} from './types';

const initShims = (i18nMethods: typeof import('ext.gadget.i18n')): Partial<typeof import('ext.gadget.i18n')> => {
	const createShim =
		(method: 'content' | 'localize' | 'vary'): ((...candidates: WgUXSCandicates) => string) =>
		(...candidates) => {
			let [hans, hant, cn, tw, hk, sg, zh, mo, my, en] = candidates;
			zh = String(zh ?? hans ?? hant ?? cn ?? tw ?? hk ?? sg ?? mo ?? my ?? en);
			hans = String(hans ?? cn ?? sg ?? my ?? zh);
			hant = String(hant ?? tw ?? hk ?? mo ?? zh);
			cn = String(cn ?? hans);
			sg = String(sg ?? hans);
			tw = String(tw ?? hant);
			hk = String(hk ?? hant);
			mo = String(mo ?? hant);
			my = String(my ?? hant);
			en = String(en ?? zh);

			return i18nMethods[method]({
				en: en as string,
				zh: zh as string,
				'zh-hans': hans as string,
				'zh-hant': hant as string,
				'zh-cn': cn as string,
				'zh-tw': tw as string,
				'zh-hk': hk as string,
				'zh-sg': sg as string,
				'zh-mo': mo as string,
				'zh-my': my as string,
			});
		};

	const wgUCS = createShim('content');
	const wgULS = createShim('localize');
	const wgUVS = createShim('vary');

	window.wgUCS = wgUCS;
	window.wgULS = wgULS;
	window.wgUVS = wgUVS;

	return {wgUCS, wgULS, wgUVS};
};

export {initShims};
