/*! Twinkle.js - friendlytalkback.ts */
import {Morebits, type MorebitsWikiApi} from './ui/morebits';
import TwTalkbackDialog from './ui/TwTalkbackDialog.vue';
import {footerLinks} from './utils/footerLinks';
import {mountDialog} from './utils/mountDialog';
import {uls} from './utils/useUls';

/**
 * friendlytalkback.ts: Talkback module
 * Mode of invocation: Tab ("TB")
 * Active on: Any page with relevant user name (userspace, contribs, etc.) except IP ranges
 * Config directives in: FriendlyConfig
 *
 * The dialog rendering and the submission/preview logic (`evaluate` and
 * `getNoticeWikitext`) live in `ui/TwTalkbackDialog.vue`; this file provides
 * the module entry and the opt-out status check.
 */
export interface TwinkleTalkback {
	(): void;
	callback: () => void;
	optout: string;
}

declare global {
	interface TwinkleModules {
		talkback?: TwinkleTalkback;
	}
}

const talkback = (() => {
	if (!mw.config.get('wgRelevantUserName')) {
		return;
	}
	Twinkle.addPortletLink(talkback.callback, '通告', 'friendly-talkback', uls('回复通告', '回覆通告'));
}) as TwinkleTalkback;

talkback.callback = () => {
	if (
		mw.config.get('wgRelevantUserName') === mw.config.get('wgUserName') &&
		!window.confirm(uls('您寂寞到了要自己回复自己的程度么？', '您寂寞到了要自己回覆自己的程度麼？'))
	) {
		return;
	}
	mountDialog(TwTalkbackDialog, {
		title: uls('回复通告', '回覆通告'),
		footerLinks: footerLinks('talkback', uls('通告设置', '通告設定'), [
			{
				text: uls('关于{{talkback}}', '關於{{talkback}}'),
				href: mw.util.getUrl('Template:Talkback'),
			},
		]),
	});
	// Check whether the user has opted out from talkback
	const query = {
		action: 'query',
		prop: 'extlinks',
		titles: `User talk:${mw.config.get('wgRelevantUserName')}`,
		elquery: 'userjs.invalid/noTalkback',
		ellimit: '1',
	};
	const api = new Morebits.wiki.api(uls('抓取退出通告信息', '抓取退出通告資訊'), query, optoutStatus);
	api.post();
};

talkback.optout = '';

const optoutStatus = (apiobj: MorebitsWikiApi): void => {
	const $el = $(apiobj.getXML() as XMLDocument).find('el');
	if ($el.length) {
		talkback.optout = mw.config.get('wgRelevantUserName') + uls('不希望收到回复通告', '不希望收到回覆通告');
		const url = $el.text();
		const reason = mw.util.getParamValue('reason', url);
		talkback.optout += reason ? `：${Morebits.string.appendPunctuation(reason)}` : '。';
	}
	const optoutMessage = document.querySelector('#twinkle-talkback-optout-message');
	if (optoutMessage) {
		optoutMessage.textContent = talkback.optout;
	}
};

Twinkle.talkback = talkback;
Twinkle.addInitCallback(Twinkle.talkback, 'talkback');

export {};
