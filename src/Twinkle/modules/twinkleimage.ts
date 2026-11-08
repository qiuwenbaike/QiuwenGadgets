/*! Twinkle.js - twinkleimage.ts */
import {createApp, h} from 'vue';
import TwImageDialog from './ui/TwImageDialog.vue';
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
interface TwinkleImageModule {
	(): void;
	callback: () => void;
}

declare const Twinkle: import('./ui/twinkleGlobal').TwinkleGlobalBase & {
	getPref: {
		(key: 'notifyUserOnDeli'): boolean;
		(key: string): string | boolean;
	};
	image?: TwinkleImageModule;
};

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
	const root = document.createElement('div');
	document.body.append(root);
	const app = createApp({
		render: () => {
			return h(TwImageDialog, {
				title: uls('文件快速删除候选', '檔案快速刪除候選'),
				initialNotify: Twinkle.getPref('notifyUserOnDeli'),
				footerLinks: [
					{text: uls('快速删除方针', '快速刪除方針'), href: mw.util.getUrl('QW:CSD')},
					{text: uls('图权设置', '圖權設定'), href: mw.util.getUrl('H:TW/PREF#image')},
					{text: uls('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl('H:TW/DOC#image')},
					{text: uls('反馈意见', '回報意見'), href: mw.util.getUrl('HT:TW')},
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

Twinkle.image = twinkleimage;
Twinkle.addInitCallback(twinkleimage, 'image');

export {};
