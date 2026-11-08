/*! Twinkle.js - twinklewarn.ts */
import {Morebits, type MorebitsWikiApi} from './ui/morebits';
import TwWarnDialog from './ui/TwWarnDialog.vue';
import {footerLinks} from './utils/footerLinks';
import {mountDialog} from './utils/mountDialog';
import {reactive} from 'vue';
import {uls} from './utils/useUls';

/**
 * twinklewarn.ts: Warn module
 * Mode of invocation: Tab ("Warn")
 * Active on: Any page with relevant user name (userspace, contribs,
 * etc.), as well as the rollback success page
 *
 * Dialog rendering and the submission/preview/autolevel logic
 * (`evaluate`, `main`, `preview`, `showPreview`, `dateProcessing`,
 * `autolevelParse`) live in `ui/TwWarnDialog.vue`; this file provides the
 * module entry, the rollback-success-page links and the message data.
 */
interface WarnMessageItem {
	label: string;
	summary: string;
	suppressArticleInSummary?: boolean;
}

interface WarnMessages {
	levels: {
		category: string;
		list: Record<string, Record<string, WarnMessageItem>>;
	}[];
	singlenotice: Record<string, WarnMessageItem>;
	singlewarn: Record<string, WarnMessageItem>;
}

export interface TwinkleWarnModule {
	(): void;
	callback: () => void;
	makeVandalTalkLink($vandalTalkLink: JQuery<HTMLElement>, pagename: string): void;
	messages: WarnMessages;
}

declare global {
	interface TwinkleModules {
		warn?: TwinkleWarnModule;
	}
}

const $body = $('body');
const relevantUserName = mw.config.get('wgRelevantUserName') ?? '';

const twinklewarn = ((): void => {
	if (relevantUserName) {
		Twinkle.addPortletLink(twinklewarn.callback, '警告', 'tw-warn', uls('警告或提醒用户', '警告或提醒使用者'));
		if (
			Twinkle.getPref('autoMenuAfterRollback') === true &&
			mw.config.get('wgNamespaceNumber') === 3 &&
			mw.util.getParamValue('vanarticle') &&
			!mw.util.getParamValue('noautowarn')
		) {
			twinklewarn.callback();
		}
	}
	// Modify URL of talk page on rollback success pages, makes use of a
	// custom message box in [[MediaWiki:Rollback-success]]
	if (mw.config.get('wgAction') === 'rollback') {
		const $vandalTalkLink = $body.find('#mw-rollback-success').find('.mw-usertoollinks a').first();
		if ($vandalTalkLink.length) {
			twinklewarn.makeVandalTalkLink($vandalTalkLink, Morebits.pageNameNorm);
			$vandalTalkLink.css('font-weight', 'bold');
		}
	}
	if (
		mw.config.get('wgCanonicalSpecialPageName') === 'AbuseLog' &&
		mw.config.get('wgAbuseFilterVariables') !== null
	) {
		const afTalkLink = $body.find('.mw-usertoollinks-talk').first();
		if (afTalkLink.length) {
			const afv = mw.config.get('wgAbuseFilterVariables') as Record<string, string>;
			twinklewarn.makeVandalTalkLink(afTalkLink, afv['page_prefixedtitle'] ?? '');
			afTalkLink.css('font-weight', 'bold');
		}
	}
}) as TwinkleWarnModule;

twinklewarn.makeVandalTalkLink = ($vandalTalkLink, pagename) => {
	$vandalTalkLink.wrapInner(
		$('<span>').attr(
			'title',
			uls(
				'如果合适，您可以用Twinkle在该用户讨论页上做出警告。',
				'如果合適，您可以用Twinkle在該使用者討論頁上做出警告。'
			)
		)
	);
	const extraParam = `vanarticle=${mw.util.rawurlencode(pagename)}`;
	const href = $vandalTalkLink.attr('href') ?? '';
	if (href.includes('?')) {
		$vandalTalkLink.attr('href', `${href}&${extraParam}`);
	} else {
		$vandalTalkLink.attr('href', `${href}?${extraParam}`);
	}
};

// Used to close window when switching to ARV in autolevel is handled by the dialog
twinklewarn.callback = () => {
	if (
		relevantUserName === mw.config.get('wgUserName') &&
		!confirm(uls('您将要警告自己！您确定要继续吗？', '您將要警告自己！您確定要繼續嗎？'))
	) {
		return;
	}
	const notice = reactive({text: ''});
	// Assemble the main group options (mirrors the legacy quickForm)
	const defaultGroup = Number.parseInt(Twinkle.getPref('defaultWarningGroup'), 10);
	const mainGroupOptions = [
		{
			value: 'autolevel',
			label: uls('自动选择层级', '自動選擇層級'),
			selected: defaultGroup === 7,
		},
		{value: 'level1', label: '1：提醒', selected: defaultGroup === 1},
		{value: 'level2', label: '2：警告', selected: defaultGroup === 2},
	];
	if (Twinkle.getPref('combinedSingletMenus') === true) {
		mainGroupOptions.push({
			value: 'singlecombined',
			label: uls('单层级消息', '單層級訊息'),
			selected: defaultGroup === 3 || defaultGroup === 4,
		});
	} else {
		mainGroupOptions.push(
			{
				value: 'singlenotice',
				label: uls('单层级提醒', '單層級提醒'),
				selected: defaultGroup === 3,
			},
			{
				value: 'singlewarn',
				label: uls('单层级警告', '單層級警告'),
				selected: defaultGroup === 4,
			}
		);
	}
	if (Twinkle.getPref('customWarningList').length) {
		mainGroupOptions.push({
			value: 'custom',
			label: uls('自定义警告', '自訂警告'),
			selected: defaultGroup === 5,
		});
	}
	mainGroupOptions.push({
		value: 'kitchensink',
		label: '所有警告模板',
		selected: defaultGroup === 6,
	});
	const initialMainGroup =
		mainGroupOptions.find((option) => {
			return option.selected;
		})?.value ?? 'autolevel';
	const {close: closeDialog} = mountDialog(TwWarnDialog, {
		title: uls('警告、提醒用户', '警告、提醒使用者'),
		relevantUserName,
		mainGroupOptions,
		initialMainGroup,
		initialArticle: mw.util.getParamValue('vanarticle') || '',
		messages: twinklewarn.messages,
		customWarningList: Twinkle.getPref('customWarningList'),
		notice,
		footerLinks: footerLinks('warn', uls('警告设置', '警告設定')),
		onOpenArv: () => {
			Morebits.wiki.actionCompleted.redirect = null;
			closeDialog();
			Twinkle.arv?.callback(relevantUserName);
		},
	});
	// Potential notices for staleness and missed reverts
	let message = '';
	let query: Record<string, unknown> = {};
	const vanrevid = mw.util.getParamValue('vanarticlerevid');
	if (vanrevid) {
		// If you tried reverting, check if *you* actually reverted
		if (!mw.util.getParamValue('noautowarn') && mw.util.getParamValue('vanarticle')) {
			// Via fluff link
			query = {
				action: 'query',
				titles: mw.util.getParamValue('vanarticle'),
				prop: 'revisions',
				rvstartid: vanrevid,
				rvlimit: 2,
				rvdir: 'newer',
				rvprop: 'user',
			};
			new Morebits.wiki.api(
				uls('检查您是否成功回退该页面', '檢查您是否成功回退該頁面'),
				query,
				(apiobj: MorebitsWikiApi) => {
					const xmlDoc = apiobj.getResponse() as unknown as XMLDocument;
					const revertUser = $(xmlDoc).find('revisions rev')[1]?.getAttribute('user');
					if (revertUser && revertUser !== mw.config.get('wgUserName')) {
						message += uls(
							'其他人回退了该页面，并可能已经警告该用户。',
							'其他人回退了該頁面，並可能已經警告該使用者。'
						);
						notice.text = `警告：${message}`;
					}
				}
			).post();
		}
		// Confirm edit wasn't too old for a warning
		const checkStale = (vantimestamp_: string | null): void => {
			const revDate = new Morebits.date(vantimestamp_ ?? '');
			if (vantimestamp_ && revDate.isValid() && revDate.add(24, 'hours').isBefore(new Date())) {
				message += uls(
					'这笔编辑是在24小时前做出的，现在警告可能已过时。',
					'這筆編輯是在24小時前做出的，現在警告可能已過時。'
				);
				notice.text = `警告：${message}`;
			}
		};
		let vantimestamp: string | null = mw.util.getParamValue('vantimestamp');
		// Provided from a fluff module-based revert, no API lookup necessary
		if (vantimestamp) {
			checkStale(vantimestamp);
		} else {
			query = {
				action: 'query',
				prop: 'revisions',
				rvprop: 'timestamp',
				revids: vanrevid,
			};
			new Morebits.wiki.api(uls('获取版本时间戳', '取得版本時間戳'), query, (apiobj: MorebitsWikiApi) => {
				const xmlDoc = apiobj.getResponse() as unknown as XMLDocument;
				vantimestamp = $(xmlDoc).find('revisions rev').attr('timestamp') ?? null;
				checkStale(vantimestamp);
			}).post();
		}
	}
};

// This is all the messages that might be dispatched by the code
// Each of the individual templates require the following information:
//   label (required): A short description displayed in the dialog
//   summary (required): The edit summary used. If an article name is entered, the summary is postfixed with "on [[article]]", and it is always postfixed with ". $summaryAd"
//   suppressArticleInSummary (optional): Set to true to suppress showing the article name in the edit summary. Useful if the warning relates to attack pages, or some such.
twinklewarn.messages = {
	levels: [
		{
			category: uls('不同类型的非建设编辑', '不同類別的非建設編輯'),
			list: {
				'uw-paid': {
					level1: {
						label: uls('未申报的有偿编辑', '未申報的有償編輯'),
						summary: uls('注意：未申报的有偿编辑', '注意：未申報的有償編輯'),
					},
					level2: {
						label: uls('未申报的有偿编辑', '未申報的有償編輯'),
						summary: uls('警告：未申报的有偿编辑', '警告：未申報的有償編輯'),
					},
				},
				'uw-copyright': {
					level1: {
						label: uls('侵犯著作权', '侵犯版權'),
						summary: uls('注意：侵犯著作权', '注意：侵犯版權'),
					},
					level2: {
						label: uls('多次侵犯著作权', '多次侵犯版權'),
						summary: uls('警告：多次侵犯著作权', '警告：多次侵犯版權'),
					},
				},
				'uw-crystal': {
					level1: {
						label: uls('加入臆测或未确认的消息', '加入臆測或未確認的訊息'),
						summary: uls('注意：加入臆测或未确认的消息', '注意：加入臆測或未確認的訊息'),
					},
					level2: {
						label: uls('多次加入臆测或未确认的消息', '多次加入臆測或未確認的訊息'),
						summary: uls('警告：多次加入臆测或未确认的消息', '警告：多次加入臆測或未確認的訊息'),
					},
				},
				'uw-delete': {
					level1: {
						label: uls('不恰当地移除页面内容、模板或资料', '不恰當地移除頁面內容、模板或資料'),
						summary: uls(
							'注意：不恰当地移除页面内容、模板或资料',
							'注意：不恰當地移除頁面內容、模板或資料'
						),
					},
					level2: {
						label: uls('不恰当地移除页面内容、模板或资料', '不恰當地移除頁面內容、模板或資料'),
						summary: uls(
							'警告：不恰当地移除页面内容、模板或资料',
							'警告：不恰當地移除頁面內容、模板或資料'
						),
					},
				},
				'uw-image': {
					level1: {
						label: uls('在页面中加入不当图片', '在頁面中加入不當圖片'),
						summary: uls('注意：在页面中加入不当图片', '注意：在頁面中加入不當圖片'),
					},
					level2: {
						label: uls('在页面中加入不当图片', '在頁面中加入不當圖片'),
						summary: uls('警告：在页面中加入不当图片', '警告：在頁面中加入不當圖片'),
					},
				},
				'uw-newpage': {
					level1: {
						label: uls('创建不当页面', '建立不當頁面'),
						summary: uls('注意：创建不当页面', '注意：建立不當頁面'),
					},
					level2: {
						label: uls('创建不当页面', '建立不當頁面'),
						summary: uls('警告：创建不当页面', '警告：建立不當頁面'),
					},
				},
				'uw-nor': {
					level1: {
						label: uls('在条目中加入原创研究', '在條目中加入原創研究'),
						summary: uls('注意：在条目中加入原创研究', '注意：在條目中加入原創研究'),
					},
					level2: {
						label: uls('在条目中加入原创研究', '在條目中加入原創研究'),
						summary: uls('警告：在条目中加入原创研究', '警告：在條目中加入原創研究'),
					},
				},
				'uw-opov': {
					level1: {
						label: uls('违反客观原则', '違反客觀原則'),
						summary: uls('注意：违反客观原则', '注意：違反客觀原則'),
					},
					level2: {
						label: uls('违反客观原则', '違反客觀原則'),
						summary: uls('警告：违反客观原则', '警告：違反客觀原則'),
					},
				},
				'uw-redirect': {
					level1: {
						label: uls('创建破坏性的重定向', '建立破壞性的重定向'),
						summary: uls('注意：创建破坏性的重定向', '注意：建立破壞性的重定向'),
					},
					level2: {
						label: uls('创建恶意重定向', '建立惡意重定向'),
						summary: uls('警告：创建恶意重定向', '警告：建立惡意重定向'),
					},
				},
				'uw-upload': {
					level1: {
						label: uls('上传不当图像', '上傳不當圖像'),
						summary: uls('注意：上传不当图像', '注意：上傳不當圖像'),
					},
					level2: {
						label: uls('上传不当图像', '上傳不當圖像'),
						summary: uls('警告：上传不当图像', '警告：上傳不當圖像'),
					},
				},
				'uw-vandalism': {
					level1: {
						label: uls('明显的破坏', '明顯的破壞'),
						summary: uls('注意：明显破坏', '注意：明顯破壞'),
					},
					level2: {
						label: uls('明显的破坏', '明顯的破壞'),
						summary: uls('警告：明显破坏', '警告：明顯破壞'),
					},
				},
				'uw-tdel': {
					level1: {
						label: uls('在问题仍未解决的情况下移除维护性模板', '在問題仍未解決的情況下移除維護性模板'),
						summary: uls('注意：移除维护性模板', '注意：移除維護性模板'),
					},
					level2: {
						label: uls('在问题仍未解决的情况下移除维护性模板', '在問題仍未解決的情況下移除維護性模板'),
						summary: uls('警告：移除维护性模板', '警告：移除維護性模板'),
					},
				},
			},
		},
		{
			category: uls('增加广告', '增加廣告'),
			list: {
				'uw-spam': {
					level1: {
						label: uls('增加不合适的外部链接', '增加不合適的外部連結'),
						summary: uls('注意：增加不合适的外部链接', '注意：增加不合適的外部連結'),
					},
					level2: {
						label: uls('增加垃圾链接', '增加垃圾連結'),
						summary: uls('警告：增加垃圾链接', '警告：增加垃圾連結'),
					},
				},
				'uw-advert': {
					level1: {
						label: uls('利用求闻百科来发布广告或推广', '利用求聞百科來發布廣告或推廣'),
						summary: uls('注意：利用求闻百科来发布广告或推广', '注意：利用求聞百科來發布廣告或推廣'),
					},
					level2: {
						label: uls('利用求闻百科来发布广告或推广', '利用求聞百科來發布廣告或推廣'),
						summary: uls('警告：利用求闻百科来发布广告或推广', '警告：利用求聞百科來發布廣告或推廣'),
					},
				},
			},
		},
		{
			category: uls('加插不实、诽谤文字', '加插不實、誹謗文字'),
			list: {
				'uw-biog': {
					level1: {
						label: uls(
							'在人物传记中加入没有可靠来源佐证而且可能引发争议的内容',
							'在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容'
						),
						summary: uls(
							'注意：在人物传记中加入没有可靠来源佐证而且可能引发争议的内容',
							'注意：在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容'
						),
					},
					level2: {
						label: uls(
							'在人物传记中加入没有可靠来源佐证而且可能引发争议的内容',
							'在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容'
						),
						summary: uls(
							'警告：在人物传记中加入没有可靠来源佐证而且可能引发争议的内容',
							'警告：在人物傳記中加入沒有可靠來源佐證而且可能引發爭議的內容'
						),
					},
				},
				'uw-error': {
					level1: {
						label: uls('故意加入不实内容', '故意加入不實內容'),
						summary: uls('注意：故意加入不实内容', '注意：故意加入不實內容'),
					},
					level2: {
						label: uls('故意加入不实内容', '故意加入不實內容'),
						summary: uls('警告：故意加入不实内容', '警告：故意加入不實內容'),
					},
				},
				'uw-unsourced': {
					level1: {
						label: uls('加入没有可靠来源佐证的内容', '加入沒有可靠來源佐證的內容'),
						summary: uls('注意：加入没有可靠来源佐证的内容', '注意：加入沒有可靠來源佐證的內容'),
					},
					level2: {
						label: uls('加入没有可靠来源佐证的内容', '加入沒有可靠來源佐證的內容'),
						summary: uls('警告：加入没有可靠来源佐证的内容', '警告：加入沒有可靠來源佐證的內容'),
					},
				},
			},
		},
		{
			category: uls('翻译品质', '翻譯品質'),
			list: {
				'uw-roughtranslation': {
					level1: {
						label: uls('您翻译的质量有待改善', '您翻譯的質量有待改善'),
						summary: uls('注意：您翻译的质量有待改善', '注意：您翻譯的質量有待改善'),
					},
					level2: {
						label: uls('粗劣翻译', '粗劣翻譯'),
						summary: uls('警告：粗劣翻译', '警告：粗劣翻譯'),
					},
				},
			},
		},
		{
			category: uls('非能接受且违反条例的单方面行为或操作', '非能接受且違反條例的單方面行為或操作'),
			list: {
				'uw-afd': {
					level1: {
						label: uls('移除{{afd}}（页面存废讨论）模板', '移除{{afd}}（頁面存廢討論）模板'),
						summary: uls('注意：移除{{afd}}（页面存废讨论）模板', '注意：移除{{afd}}（頁面存廢討論）模板'),
					},
					level2: {
						label: uls('移除{{afd}}（页面存废讨论）模板', '移除{{afd}}（頁面存廢討論）模板'),
						summary: uls('警告：移除{{afd}}（页面存废讨论）模板', '警告：移除{{afd}}（頁面存廢討論）模板'),
					},
				},
				'uw-mos': {
					level1: {
						label: uls('不恰当的条目格式、日期、语言等', '不恰當的條目格式、日期、語言等'),
						summary: uls('注意：不恰当的条目格式、日期、语言等', '注意：不恰當的條目格式、日期、語言等'),
					},
					level2: {
						label: uls('不恰当的条目格式、日期、语言等', '不恰當的條目格式、日期、語言等'),
						summary: uls('警告：不恰当的条目格式、日期、语言等', '警告：不恰當的條目格式、日期、語言等'),
					},
				},
				'uw-move': {
					level1: {
						label: uls('无故移动条目/新名称不符合命名规范', '無故移動條目/新名稱不符合命名規範'),
						summary: uls('注意：不恰当地移动页面', '注意：不恰當地移動頁面'),
					},
					level2: {
						label: uls(
							'把页面移动到不恰当、违反命名常规或违反共识的标题',
							'把頁面移動到不恰當、違反命名常規或違反共識的標題'
						),
						summary: uls('警告：不恰当地移动页面', '警告：不恰當地移動頁面'),
					},
				},
				'uw-speedy': {
					level1: {
						label: uls('移除{{delete}}（快速删除）模板', '移除{{delete}}（快速刪除）模板'),
						summary: uls('注意：移除{{delete}}（快速删除）模板', '注意：移除{{delete}}（快速刪除）模板'),
					},
					level2: {
						label: uls('移除{{delete}}（快速删除）模板', '移除{{delete}}（快速刪除）模板'),
						summary: uls('警告：移除{{delete}}（快速删除）模板', '警告：移除{{delete}}（快速刪除）模板'),
					},
				},
				'uw-talkpage': {
					level1: {
						label: uls('违反讨论页规范', '違反討論頁規範'),
						summary: uls('注意：违反讨论页规范', '注意：違反討論頁規範'),
					},
					level2: {
						label: uls('违反讨论页规范', '違反討論頁規範'),
						summary: uls('警告：违反讨论页规范', '警告：違反討論頁規範'),
					},
				},
				'uw-tpv': {
					level1: {
						label: '修改他人留言',
						summary: '注意：修改他人留言',
					},
					level2: {
						label: '修改他人留言',
						summary: '警告：修改他人留言',
					},
				},
			},
		},
		{
			category: uls('对其他用户和条目的态度', '對其他用戶和條目的態度'),
			list: {
				'uw-illegal': {
					level1: {
						label: uls('加入不符合中国价值观的内容', '加入不符合中國價值觀的內容'),
						summary: uls('注意：加入不符合中国价值观的内容', '注意：加入不符合中國價值觀的內容'),
					},
					level2: {
						label: uls('加入不符合中国价值观的内容', '加入不符合中國價值觀的內容'),
						summary: uls('警告：加入不符合中国价值观的内容', '警告：加入不符合中國價值觀的內容'),
					},
				},
				'uw-own': {
					level1: {
						label: uls('主张条目所有权', '主張條目所有權'),
						summary: uls('注意：主张条目所有权', '注意：主張條目所有權'),
					},
					level2: {
						label: uls('主张条目的所有权', '主張條目的所有權'),
						summary: uls('警告：主张条目的所有权', '警告：主張條目的所有權'),
					},
				},
				'uw-socialmedia': {
					level1: {
						label: uls('将求闻百科当作社交媒体使用', '將求聞百科當作社交媒體使用'),
						summary: uls('注意：将求闻百科当作社交媒体使用', '注意：將求聞百科當作社交媒體使用'),
					},
					level2: {
						label: uls('将求闻百科当作社交媒体使用', '將求聞百科當作社交媒體使用'),
						summary: uls('警告：将求闻百科当作社交媒体使用', '警告：將求聞百科當作社交媒體使用'),
					},
				},
			},
		},
	],
	singlenotice: {
		'uw-2redirect': {
			label: uls('在移动页面后应该修复双重重定向', '在移動頁面後應該修復雙重重定向'),
			summary: uls('注意：在移动页面后应该修复双重重定向', '注意：在移動頁面後應該修復雙重重定向'),
		},
		'uw-aiv': {
			label: uls('举报事项并不是破坏行为', '舉報事項並不是破壞行为'),
			summary: uls('注意：不恰当地举报破坏', '注意：不恰當地舉報破壞'),
		},
		'uw-articlesig': {
			label: uls('在条目中签名', '在條目中簽名'),
			summary: uls('注意：在条目中签名', '注意：在條目中簽名'),
		},
		'uw-autobiography': {
			label: uls('创建自传', '建立自傳'),
			summary: uls('注意：创建自传', '注意：建立自傳'),
		},
		'uw-badcat': {
			label: uls('加入错误的页面分类', '加入錯誤的頁面分類'),
			summary: uls('注意：加入错误的页面分类', '注意：加入錯誤的頁面分類'),
		},
		'uw-bite': {
			label: uls('伤害新手', '傷害新手'),
			summary: uls('注意：伤害新手', '注意：傷害新手'),
		},
		'uw-chinese': {
			label: uls('请使用标准汉语沟通', '請使用標準漢語溝通'),
			summary: uls('注意：请使用标准汉语沟通', '注意：請使用標準漢語溝通'),
		},
		'uw-cpmove': {
			label: uls('剪贴移动', '剪貼移動'),
			summary: uls('注意：剪贴移动', '注意：剪貼移動'),
		},
		'uw-dab': {
			label: uls('消歧义页格式错误', '消歧義頁格式錯誤'),
			summary: uls('注意：消歧义页格式错误', '注意：消歧義頁格式錯誤'),
		},
		'uw-newpage-draft': {
			label: uls('最近创建的页面被移动到草稿', '最近建立的頁面被移動到草稿'),
			summary: uls('注意：最近创建的页面被移动到草稿', '注意：最近建立的頁面被移動到草稿'),
		},
		'uw-selfrevert': {
			label: uls('感谢您自行回退自己的测试，以后不要再这样做了', '感謝您自行回退自己的測試，以後不要再這樣做了'),
			summary: uls('注意：回退个人的测试', '注意：回退個人的測試'),
		},
		'uw-substub': {
			label: uls('创建小小作品', '建立小小作品'),
			summary: uls('警告：创建小小作品', '警告：建立小小作品'),
		},
		'uw-talkinarticle': {
			label: uls('在条目页中留下意见', '在條目頁中留下意見'),
			summary: uls('注意：在条目页中留下意见', '注意：在條目頁中留下意見'),
		},
		'uw-unsigned': {
			label: uls('没有在讨论页上签名', '沒有在討論頁上簽名'),
			summary: uls('注意：没有在讨论页上签名', '注意：沒有在討論頁上簽名'),
		},
		'uw-wrongcsd': {
			label: uls('快速删除理由不当', '快速刪除理由不當'),
			summary: uls('注意：快速删除理由不当', '注意：快速刪除理由不當'),
		},
		'uw-wrongsummary': {
			label: uls('在编辑摘要制造不适当的内容', '在編輯摘要製造不適當的內容'),
			summary: uls('警告：在编辑摘要制造不适当的内容', '警告：在編輯摘要製造不適當的內容'),
		},
	},
	singlewarn: {
		'uw-3rr': {
			label: uls('用户潜在违反回退不过三原则的可能性', '用戶潛在違反回退不過三原則的可能性'),
			summary: uls('警告：用户潜在违反回退不过三原则的可能性', '警告：用戶潛在違反回退不過三原則的可能性'),
		},
		'uw-attack': {
			label: uls('人身攻击', '人身攻擊'),
			summary: uls('警告：人身攻击', '警告：人身攻擊'),
			suppressArticleInSummary: true,
		},
		'uw-coi': {
			label: uls('利益冲突', '利益衝突'),
			summary: uls('注意：利益冲突', '注意：利益衝突'),
		},
		'uw-fakesource': {
			label: uls('虚构数据源或引文', '虛構資料來源或引文'),
			summary: uls('警告：虚构数据源或引文', '警告：虛構資料來源或引文'),
		},
		'uw-pinfo': {
			label: uls('张贴他人隐私', '張貼他人隱私'),
			summary: uls('警告：张贴他人隐私', '警告：張貼他人隱私'),
		},
	},
};

Twinkle.warn = twinklewarn;
Twinkle.addInitCallback(twinklewarn, 'warn');

export {};
