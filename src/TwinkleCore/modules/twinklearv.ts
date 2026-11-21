/*! Twinkle.js - twinklearv.ts */
import {mountLazyDialog} from './utils/lazyDialogs';
import {reactive} from 'vue';
import {uls} from './utils/useUls';

/**
 * twinklearv.ts: ARV module
 * Mode of invocation: Tab ("ARV")
 * Active on: Any page with relevant user name (userspace, contribs, etc.)
 *
 * Report-building and submission logic lives in `ui/TwArvDialog.vue`;
 * this file only provides the module entry.
 */
interface TwinkleArvCallback {
	(uid: string, isIP?: boolean): void;
}

export interface TwinkleArvModule {
	(): void;
	callback: TwinkleArvCallback;
}

interface ArvBlockInfo {
	partial?: boolean;
	rangestart?: string;
	rangeend?: string;
}

interface ArvBlockQuery {
	action: 'query';
	list: 'blocks';
	bkprop: 'range|flags';
	format: 'json';
	bkip?: string;
	bkusers?: string;
	[key: string]: unknown;
}

declare global {
	interface TwinkleModules {
		arv?: TwinkleArvModule;
	}
}

const twinklearv = (() => {
	const username = mw.config.get('wgRelevantUserName');
	if (!username) {
		return;
	}
	const isIP = mw.util.isIPAddress(username);
	const title = isIP ? uls('报告IP给管理员', '報告IP給管理員') : uls('报告用户给管理人员', '報告使用者給管理人員');
	Twinkle.addPortletLink(
		() => {
			twinklearv.callback(username, isIP);
		},
		uls('告状', '告狀'),
		'tw-arv',
		title
	);
}) as TwinkleArvModule;

twinklearv.callback = (uid: string, isIP?: boolean): void => {
	if (uid === mw.config.get('wgUserName')) {
		void mw.notify(uls('你不想报告你自己，对吧？', '你不想報告你自己，對吧？'), {
			type: 'warn',
			tag: 'twinklearv',
		});
		return;
	}
	const blockNotice = reactive({
		text: '',
		severe: true,
	});
	mountLazyDialog('TwArvDialog', {
		uid,
		isIP: Boolean(isIP),
		blockNotice,
		title: uls('报告用户给管理人员', '報告使用者給管理人員'),
		footerLinks: [
			{text: uls('告状设置', '告狀設定'), href: mw.util.getUrl('H:TW/PREF#arv')},
			{text: uls('Twinkle帮助', 'Twinkle說明'), href: mw.util.getUrl('H:TW#告狀')},
		],
	});
	// Check if the user is blocked, update notice
	const query: ArvBlockQuery = {
		action: 'query',
		list: 'blocks',
		bkprop: 'range|flags',
		format: 'json',
	};
	if (isIP) {
		query.bkip = uid;
	} else {
		query.bkusers = uid;
	}
	new window.Morebits.wiki.api(uls('检查用户的封禁状态', '檢查使用者的封鎖狀態'), query, (apiobj) => {
		const response = apiobj.getResponse() as unknown as {query?: {blocks?: ArvBlockInfo[]}};
		const blocklist = response.query?.blocks ?? [];
		if (blocklist.length) {
			const [block] = blocklist;
			if (!block) {
				return;
			}
			let message =
				(isIP ? uls('此IP地址', '此IP位址') : uls('此账号', '此賬號')) +
				uls('已经被', '已經被') +
				(block.partial ? '部分' : '');
			// Start and end differ, range blocked
			message += (block.rangestart === block.rangeend ? '' : '段') + uls('封禁。', '封鎖。');
			blockNotice.severe = !block.partial;
			blockNotice.text = message;
		}
	}).post();
};

Twinkle.arv = twinklearv;
Twinkle.addInitCallback(twinklearv, 'arv');

export {};
