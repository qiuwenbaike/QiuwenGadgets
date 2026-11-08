/*! Twinkle.js - twinkleimage.ts */
import TwImageDialog from './ui/TwImageDialog.vue';
import {footerLinks} from './utils/footerLinks';
import {mountDialog} from './utils/mountDialog';
import {uls} from './utils/useUls';

/**
 * twinkleimage.ts: Image CSD module
 * Mode of invocation: Tab ("DI")
 * Active on: Local nonredirect file pages (not on Share)
 *
 * Nomination and notification logic (`evaluate`, `callbacks.taggingImage`,
 * `callbacks.userNotification`, `callbacks.imageList`) lives in
 * `ui/TwImageDialog.vue`; this file only provides the module entry.
 */
export interface TwinkleImageModule {
	(): void;
	callback: () => void;
}

declare global {
	interface TwinkleModules {
		image?: TwinkleImageModule;
	}
}

const twinkleimage = ((): void => {
	if (
		mw.config.get('wgNamespaceNumber') === 6 &&
		!document.querySelector('#mw-sharedupload') &&
		document.querySelector('#mw-imagepage-section-filehistory')
	) {
		Twinkle.addPortletLink(
			twinkleimage.callback,
			uls('图权', '圖權'),
			'tw-di',
			uls('提交文件快速删除', '提交檔案快速刪除')
		);
	}
}) as TwinkleImageModule;

twinkleimage.callback = () => {
	mountDialog(TwImageDialog, {
		title: uls('文件快速删除候选', '檔案快速刪除候選'),
		initialNotify: Twinkle.getPref('notifyUserOnDeli'),
		footerLinks: footerLinks(
			'image',
			uls('图权设置', '圖權設定'),
			[{text: uls('快速删除方针', '快速刪除方針'), href: mw.util.getUrl('QW:CSD')}],
			true
		),
	});
};

Twinkle.image = twinkleimage;
Twinkle.addInitCallback(twinkleimage, 'image');

export {};
