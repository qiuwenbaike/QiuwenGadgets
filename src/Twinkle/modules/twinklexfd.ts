/*! Twinkle.js - twinklexfd.ts */
import {createApp, h} from 'vue';
import {Morebits} from './ui/morebits';
import TwXfdDialog from './ui/TwXfdDialog.vue';
import {uls} from './utils/useUls';

interface TwinkleXfdModule {
	(): void;
	callback: () => void;
	currentRationale: string | null;
	printRationale: () => void;
}

declare const Twinkle: import('./ui/twinkleGlobal').TwinkleGlobalBase & {
	getPref: {
		(key: 'afdDefaultCategory' | 'afdFameDefaultReason' | 'afdSubstubDefaultReason'): string;
		(key: string): string | boolean;
	};
	xfd?: TwinkleXfdModule;
};

/**
 * twinklexfd.ts: XFD module
 * Mode of invocation: Tab ("XFD")
 * Active on: Existing, non-special pages,
 * except for file pages with no local file
 * which are not redirects
 *
 * Nomination logic (`callbacks`, `evaluate`) lives in `ui/TwXfdDialog.vue`;
 * this file provides the module entry and the "print rationale on error"
 * hook shared with the status machinery.
 */
const twinklexfd = ((): void => {
	// Disable on:
	// * special pages
	// * non-existent pages
	// * non-local files, whether there is a local page or not (unneeded local pages of files on Share are eligible for CSD F2)
	// * file pages without actual files
	if (
		mw.config.get('wgNamespaceNumber') < 0 ||
		!mw.config.get('wgArticleId') ||
		(mw.config.get('wgNamespaceNumber') === 6 &&
			(document.querySelector('#mw-sharedupload') ||
				(!document.querySelector('#mw-imagepage-section-filehistory') && !Morebits.isPageRedirect())))
	) {
		return;
	}
	Twinkle.addPortletLink(
		() => {
			twinklexfd.callback();
		},
		uls('提删', '提刪'),
		'tw-xfd',
		uls('提交删除讨论', '提交刪除討論')
	);
}) as TwinkleXfdModule;

twinklexfd.currentRationale = null;
// error callback on Morebits.status.object
twinklexfd.printRationale = () => {
	if (twinklexfd.currentRationale) {
		Morebits.status.printUserText(
			twinklexfd.currentRationale,
			uls(
				'您的理由已在下方提供，若您想重新提交，请将其复制到一新窗口中：',
				'您的理由已在下方提供，若您想重新提交，請將其複製到一新視窗中：'
			)
		);
		// only need to print the rationale once
		twinklexfd.currentRationale = null;
	}
};

twinklexfd.callback = () => {
	const root = document.createElement('div');
	document.body.append(root);
	const afdDefaultCategory = Twinkle.getPref('afdDefaultCategory');
	let initialXfdCat = 'delete';
	if (afdDefaultCategory === 'same') {
		const saved = mw.storage.get('Twinkle_afdCategory');
		if (typeof saved === 'string') {
			initialXfdCat = saved;
		} else {
			mw.storage.set('Twinkle_afdCategory', 'delete');
		}
	}
	const deleteReasonElement = document.querySelector('#delete-reason');
	const fwdcsdReason = deleteReasonElement
		? decodeURIComponent(deleteReasonElement.textContent ?? '').replace(/\+/g, ' ')
		: '';
	const app = createApp({
		render: () => {
			return h(TwXfdDialog, {
				title: uls('提交存废讨论', '提交存廢討論'),
				defaultCategory: mw.config.get('wgNamespaceNumber') === 6 ? 'ffd' : 'afd',
				showFwdCsd: !!Twinkle.getPref('FwdCsdToXfd'),
				initialXfdCat,
				rememberCategory: afdDefaultCategory === 'same',
				fameDefaultReason: Twinkle.getPref('afdFameDefaultReason'),
				substubDefaultReason: Twinkle.getPref('afdSubstubDefaultReason'),
				fwdcsdReason,
				showNoinclude:
					mw.config.get('wgNamespaceNumber') === 10 && mw.config.get('wgPageContentModel') !== 'Scribunto',
				noincludeDisabled: mw.config.get('wgPageContentModel') === 'Scribunto',
				footerLinks: [
					{text: uls('提删设置', '提刪設定'), href: mw.util.getUrl('H:TW/PREF#xfd')},
					{text: uls('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl('H:TW/DOC#xfd')},
				],
				onClose: () => {
					app.unmount();
					root.remove();
				},
			});
		},
	});
	app.mount(root);
};

Twinkle.xfd = twinklexfd;
Twinkle.addInitCallback(twinklexfd, 'xfd');

export {};
