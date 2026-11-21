/*! Twinkle.js - twinkleconfig.ts */
import {createApp, h} from 'vue';
import {getDialogComponent} from './utils/lazyDialogs';
import {uls} from './utils/useUls';

/**
 * twinkleconfig.ts: Preferences module
 * Mode of invocation: Adds configuration form to Help:Twinkle/参数设置,
 * and adds an ad box to the top of user subpages belonging to the
 * currently logged-in user which end in '.js'
 * Active on: What I just said. Yeah.
 *
 * The save flow (`saveConfig`, `writePrefs`, `saveSuccess`) lives in
 * `ui/TwConfigPanel.vue`; this file provides the module entry, the static
 * preference definitions and the panel data preparation.
 */
interface ConfigPref {
	name: string;
	label?: string;
	helptip?: string;
	adminOnly?: boolean;
	type: 'string' | 'boolean' | 'integer' | 'enum' | 'set' | 'customList';
	enumValues?: Record<string, string>;
	setValues?: Record<string, string>;
	setDisplayOrder?: string[];
	customListValueTitle?: string;
	customListLabelTitle?: string;
}

interface ConfigSection {
	title: string;
	module?: string;
	adminOnly?: boolean;
	hidden?: boolean;
	preferences: ConfigPref[];
}

interface CommonSets {
	csdCriteria: Record<string, string>;
	csdCriteriaDisplayOrder: string[];
	csdCriteriaNotification: Record<string, string>;
	csdCriteriaNotificationDisplayOrder: string[];
	csdAndDICriteria: Record<string, string>;
	csdAndDICriteriaDisplayOrder: string[];
	xfdCriteria: Record<string, string>;
	xfdCriteriaDisplayOrder: string[];
	namespacesNoSpecial: Record<string, string>;
}

export interface TwinkleConfigModule {
	watchlistEnums: Record<string, string>;
	commonSets: CommonSets;
	sections: ConfigSection[];
	init: () => void;
}

declare global {
	interface TwinkleModules {
		config?: TwinkleConfigModule;
	}
}

const watchlistEnums: Record<string, string> = {
	yes: uls('永久加入到监视列表', '永久加入到監視清單'),
	no: uls('不加入到监视列表', '不加入到監視清單'),
	default: uls('遵守站点设置', '遵守站點設定'),
	'1 week': uls('加入到监视列表1周', '加入到監視清單1週'),
	'1 month': uls('加入到监视列表1个月', '加入到監視清單1個月'),
	'3 months': uls('加入到监视列表3个月', '加入到監視清單3個月'),
	'6 months': uls('加入到监视列表6个月', '加入到監視清單6個月'),
};

const commonSets: CommonSets = {
	csdCriteria: {
		db: uls('自定义理由', '自訂理由'),
		g1: 'G1',
		g2: 'G2',
		g3: 'G3',
		g4: 'G4',
		g5: 'G5',
		g6: 'G6',
		g7: 'G7',
		g8: 'G8',
		g9: 'G9',
		a1: 'A1',
		a2: 'A2',
		a3: 'A3',
		o1: 'O1',
		o2: 'O2',
		o3: 'O3',
		f1: 'F1',
		f2: 'F2',
		f3: 'F3',
		f4: 'F4',
		f5: 'F5',
		r1: 'R1',
		r2: 'R2',
	},
	csdCriteriaDisplayOrder: [
		'db',
		'g1',
		'g2',
		'g3',
		'g4',
		'g5',
		'g6',
		'g7',
		'g8',
		'g9',
		'a1',
		'a2',
		'a3',
		'o1',
		'o2',
		'o3',
		'f1',
		'f2',
		'f3',
		'f4',
		'f5',
		'r1',
		'r2',
	],
	csdCriteriaNotification: {
		db: uls('自定义理由', '自訂理由'),
		g1: 'G1',
		g2: 'G2',
		g3: 'G3',
		g4: 'G4',
		g5: 'G5',
		g6: 'G6',
		g7: 'G7',
		g8: 'G8',
		g9: 'G9',
		a1: 'A1',
		a2: 'A2',
		a3: 'A3',
		o1: 'O1',
		o2: 'O2',
		o3: 'O3',
		f1: 'F1',
		f2: 'F2',
		f3: 'F3',
		f4: 'F4',
		f5: 'F5',
		r1: 'R1',
		r2: 'R2',
	},
	csdCriteriaNotificationDisplayOrder: [
		'db',
		'g1',
		'g2',
		'g3',
		'g4',
		'g5',
		'g6',
		'g7',
		'g8',
		'g9',
		'a1',
		'a2',
		'a3',
		'o1',
		'o2',
		'o3',
		'f1',
		'f2',
		'f3',
		'f4',
		'f5',
		'r1',
		'r2',
	],
	csdAndDICriteria: {
		db: uls('自定义理由', '自訂理由'),
		g1: 'G1',
		g2: 'G2',
		g3: 'G3',
		g4: 'G4',
		g5: 'G5',
		g6: 'G6',
		g7: 'G7',
		g8: 'G8',
		g9: 'G9',
		a1: 'A1',
		a2: 'A2',
		a3: 'A3',
		o1: 'O1',
		o2: 'O2',
		o3: 'O3',
		f1: 'F1',
		f2: 'F2',
		f3: 'F3',
		f4: 'F4',
		f5: 'F5',
		r1: 'R1',
		r2: 'R2',
	},
	csdAndDICriteriaDisplayOrder: [
		'db',
		'g1',
		'g2',
		'g3',
		'g4',
		'g5',
		'g6',
		'g7',
		'g8',
		'g9',
		'a1',
		'a2',
		'a3',
		'o1',
		'o2',
		'o3',
		'f1',
		'f2',
		'f3',
		'f4',
		'f5',
		'r1',
		'r2',
	],
	xfdCriteria: {
		delete: uls('删除', '刪除'),
		merge: uls('合并', '合併'),
		fwdcsd: uls('转交自快速删除候选', '轉交自快速刪除候選'),
		fame: uls('批量关注度提删', '批次關注度提刪'),
		substub: uls('批量小小作品提删', '批次小小作品提刪'),
		batch: uls('批量其他提删', '批次其他提刪'),
	},
	xfdCriteriaDisplayOrder: ['delete', 'merge', 'fwdcsd', 'fame', 'substub', 'batch'],
	namespacesNoSpecial: {
		0: uls('（条目）', '（條目）'),
		1: 'Talk',
		2: 'User',
		3: 'User talk',
		4: 'Qiuwen',
		5: 'Qiuwen talk',
		6: 'File',
		7: 'File talk',
		8: 'MediaWiki',
		9: 'MediaWiki talk',
		10: 'Template',
		11: 'Template talk',
		12: 'Help',
		13: 'Help talk',
		14: 'Category',
		15: 'Category talk',
		118: 'Draft',
		119: 'Draft talk',
		204: 'NEA',
		205: 'NEA talk',
		206: 'Addendum',
		207: 'Addendum talk',
		828: 'Module',
		829: 'Module talk',
	},
};

/**
 * Section entry format:
 *
 * {
 *   title: <human-readable section title>,
 *   module: <name of the associated module, used to link to sections>,
 *   adminOnly: <true for admin-only sections>,
 *   hidden: <true for advanced preferences that rarely need to be changed - they can still be modified by manually editing twinkleoptions.js>,
 *   preferences: [
 *     {
 *       name: <TwinkleConfig property name>,
 *       label: <human-readable short description - used as a form label>,
 *       helptip: <(optional) human-readable text (using valid HTML) that complements the description, like limits, warnings, etc.>
 *       adminOnly: <true for admin-only preferences>,
 *       type: <string|boolean|integer|enum|set|customList> (customList stores an array of JSON objects { value, label }),
 *       enumValues: <for type = "enum": a JSON object where the keys are the internal names and the values are human-readable strings>,
 *       setValues: <for type = "set": a JSON object where the keys are the internal names and the values are human-readable strings>,
 *       setDisplayOrder: <(optional) for type = "set": an array containing the keys of setValues (as strings) in the order that they are displayed>,
 *       customListValueTitle: <for type = "customList": the heading for the left "value" column in the custom list editor>,
 *       customListLabelTitle: <for type = "customList": the heading for the right "label" column in the custom list editor>
 *     },
 *     . . .
 *   ]
 * },
 * . . .
 *
 */
const sections: ConfigSection[] = [
	{
		title: uls('常规', '常規'),
		module: 'general',
		preferences: [
			// TwinkleConfig.userTalkPageMode may take arguments:
			// 'window': open a new window, remember the opened window
			// 'tab': opens in a new tab, if possible.
			// 'blank': force open in a new window, even if such a window exists
			{
				name: 'userTalkPageMode',
				label: uls('当要打开用户讨论页时', '當要打開使用者討論頁時'),
				type: 'enum',
				enumValues: {
					window: uls('在窗口中，替换成其它用户对话页', '在當前分頁，替換成其它用戶討論頁'),
					tab: uls('在新标签页中', '在新分頁中'),
					blank: uls('在全新的窗口中', '在新視窗中'),
				},
			},
			// TwinkleConfig.dialogLargeFont (boolean)
			{
				name: 'dialogLargeFont',
				label: uls('在Twinkle对话框中使用大号字体', '在Twinkle對話方塊中使用大號字型'),
				type: 'boolean',
			},
			// TwinkleConfig.disabledModules (array)
			{
				name: 'disabledModules',
				label: uls('关闭指定的Twinkle模块', '關閉指定的Twinkle模組'),
				helptip: uls(
					'您在此选择的功能将无法使用，取消选择以重新启用功能。',
					'您在此選擇的功能將無法使用，取消選擇以重新啟用功能。'
				),
				type: 'set',
				setValues: {
					arv: uls('告状', '告狀'),
					warn: '警告',
					block: uls('封禁', '封鎖'),
					talkback: '通告',
					speedy: uls('速删', '速刪'),
					copyvio: uls('侵权', '侵權'),
					xfd: uls('提删', '提刪'),
					image: uls('图权', '圖權'),
					protect: uls('保护', '保護'),
					tag: uls('标记', '標記'),
					stub: '小作品',
					diff: uls('差异', '差異'),
					unlink: uls('链入', '連入'),
					fluff: '回退',
				},
			},
			// TwinkleConfig.disabledSysopModules (array)
			{
				name: 'disabledSysopModules',
				label: uls('关闭指定的Twinkle管理员模块', '關閉指定的Twinkle管理員模組'),
				helptip: uls(
					'您在此选择的功能将无法使用，取消选择以重新启用功能。',
					'您在此選擇的功能將無法使用，取消選擇以重新啟用功能。'
				),
				adminOnly: true,
				type: 'set',
				setValues: {
					batchdelete: uls('批删', '批刪'),
					batchundelete: uls('批复', '批復'),
				},
			},
		],
	},
	{
		title: uls('告状', '告狀'),
		module: 'arv',
		preferences: [
			{
				name: 'spiWatchReport',
				label: uls('发起傀儡调查时加入到监视列表', '發起傀儡調查時加入到監視清單'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
		],
	},
	{
		title: uls('封禁用户', '封鎖使用者'),
		module: 'block',
		adminOnly: true,
		preferences: [
			// TwinkleConfig.defaultToBlock64 (boolean)
			// Whether to default to just blocking the /64 on or off
			{
				name: 'defaultToBlock64',
				label: uls('对于IPv6地址，默认选择封禁/64段', '對於IPv6地址，預設選擇封鎖/64段'),
				type: 'boolean',
			},
			// TwinkleConfig.defaultToPartialBlocks (boolean)
			// Whether to default partial blocks on or off
			{
				name: 'defaultToPartialBlocks',
				label: uls('打开封禁菜单时默认选择部分封禁', '打開封鎖選單時預設選擇部分封鎖'),
				type: 'boolean',
			},
			// TwinkleConfig.watchBlockNotices (string)
			// Watchlist setting for the page which has been dispatched an warning or notice
			{
				name: 'watchBlockNotices',
				label: uls('发送封禁模板时加入用户讨论页到监视列表', '發送封鎖模板時加入使用者討論頁到監視清單'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
			{
				name: 'customBlockReasonList',
				label: uls('自定义封禁理由', '自訂封鎖理由'),
				helptip: uls(
					'您可以加入常用的封禁理由。自定义的封禁理由会出现在一般的封禁理由下方。',
					'您可以加入常用的封鎖理由。自訂的封鎖理由會出現在一般的封鎖理由下方。'
				),
				type: 'customList',
				customListValueTitle: uls('使用封禁模板（默认为 uw-block1）', '使用封鎖模板（預設為 uw-block1）'),
				customListLabelTitle: uls('“由于…您已被封禁”及封禁日志理由', '「由於…您已被封鎖」及封鎖日誌理由'),
			},
		],
	},
	{
		title: uls('图片删除', '圖片刪除'),
		module: 'image',
		preferences: [
			// TwinkleConfig.notifyUserOnDeli (boolean)
			// If the user should be notified after placing a file deletion tag
			{
				name: 'notifyUserOnDeli',
				label: uls('默认勾选“通知创建者”', '預設勾選「通知建立者」'),
				type: 'boolean',
			},
			// TwinkleConfig.deliWatchPage (string)
			// The watchlist setting of the page tagged for deletion.
			{
				name: 'deliWatchPage',
				label: uls('标记图片时加入到监视列表', '標記圖片時加入到監視清單'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
			// TwinkleConfig.deliWatchUser (string)
			// The watchlist setting of the user talk page if a notification is placed.
			{
				name: 'deliWatchUser',
				label: uls('标记图片时加入创建者讨论页到监视列表', '標記圖片時加入建立者討論頁到監視清單'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
		],
	},
	{
		title: uls('保护', '保護'),
		module: 'protect',
		preferences: [
			{
				name: 'watchRequestedPages',
				label: uls('请求保护页面时加入到监视列表', '請求保護頁面時加入到監視清單'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
			{
				name: 'watchPPTaggedPages',
				label: uls('标记保护模板时加入到监视列表', '標記保護模板時加入到監視清單'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
			{
				name: 'watchProtectedPages',
				label: uls('保护时加入到监视列表', '保護時加入到監視清單'),
				helptip: uls(
					'若在保护后也标记页面，则使用标记页面的参数设置。',
					'若在保護後也標記頁面，則使用標記頁面的偏好設定。'
				),
				adminOnly: true,
				type: 'enum',
				enumValues: watchlistEnums,
			},
		],
	},
	{
		title: '回退',
		// twinklefluff module
		module: 'fluff',
		preferences: [
			// TwinkleConfig.autoMenuAfterRollback (bool)
			// Option to automatically open the warning menu if the user talk page is opened post-reversion
			{
				name: 'autoMenuAfterRollback',
				label: uls(
					'在Twinkle回退后自动打开用户讨论页上的Twinkle警告菜单',
					'在Twinkle回退後自動打開使用者討論頁上的Twinkle警告選單'
				),
				helptip: uls('仅在选取下方对应框时才执行', '僅在選取下方對應框時才執行'),
				type: 'boolean',
			},
			// TwinkleConfig.openTalkPage (array)
			// What types of actions that should result in opening of talk page
			{
				name: 'openTalkPage',
				label: uls('在这些类型的回退后打开用户讨论页', '在這些類別的回退後打開使用者討論頁'),
				type: 'set',
				setValues: {
					norm: uls('常规回退', '常規回退'),
					vand: uls('破坏回退', '破壞回退'),
				},
			},
			// TwinkleConfig.openTalkPageOnAutoRevert (bool)
			// Defines if talk page should be opened when calling revert from contribs or recent changes pages. If set to true, openTalkPage defines then if talk page will be opened.
			{
				name: 'openTalkPageOnAutoRevert',
				label: uls(
					'在从用户贡献及最近更改中发起回退时打开用户讨论页',
					'在從使用者貢獻及近期變更中發起回退時打開使用者討論頁'
				),
				helptip: uls('当它打开时，依赖上一个设置。', '當它打開時，依賴上一個設定。'),
				type: 'boolean',
			},
			// TwinkleConfig.rollbackInPlace (bool)
			//
			{
				name: 'rollbackInPlace',
				label: uls(
					'在从用户贡献及最近更改中发起回退时不刷新页面',
					'在從使用者貢獻及近期變更中發起回退時不重新整理頁面'
				),
				helptip: uls(
					'当它打开时，Twinkle将不会在从用户贡献及最近更改中发起回退时刷新页面，允许您一次性回退多个编辑。',
					'當它打開時，Twinkle將不會在從使用者貢獻及近期變更中發起回退時重新整理頁面，允許您一次性回退多個編輯。'
				),
				type: 'boolean',
			},
			// TwinkleConfig.markRevertedPagesAsMinor (array)
			// What types of actions that should result in marking edit as minor
			{
				name: 'markRevertedPagesAsMinor',
				label: uls('将这些类型的回退标记为小修改', '將這些類別的回退標記為小修改'),
				type: 'set',
				setValues: {
					norm: uls('常规回退', '常規回退'),
					vand: uls('破坏回退', '破壞回退'),
					torev: uls('“恢复此版本”', '「恢復此版本」'),
				},
			},
			// TwinkleConfig.watchRevertedPages (array)
			// What types of actions that should result in forced addition to watchlist
			{
				name: 'watchRevertedPages',
				label: uls('把这些类型的回退加入到监视列表', '把這些類別的回退加入到監視清單'),
				type: 'set',
				setValues: {
					norm: uls('常规回退', '常規回退'),
					vand: uls('破坏回退', '破壞回退'),
					torev: uls('“恢复此版本”', '「恢復此版本」'),
				},
			},
			// TwinkleConfig.watchRevertedExpiry
			// If any of the above items are selected, whether to expire the watch
			{
				name: 'watchRevertedExpiry',
				label: uls('当回退页面时，加入到监视列表的期限', '當回退頁面時，加入到監視清單的期限'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
			// TwinkleConfig.offerReasonOnNormalRevert (boolean)
			// If to offer a prompt for extra summary reason for normal reverts, default to true
			{
				name: 'offerReasonOnNormalRevert',
				label: uls('常规回退时询问理由', '常規回退時詢問理由'),
				helptip: uls('“常规”回退是中间的那个[回退]链接。', '「常規」回退是中間的那個[回退]連結。'),
				type: 'boolean',
			},
			{
				name: 'confirmOnFluff',
				label: uls('回退前要求确认（所有设备）', '回退前要求確認（所有裝置）'),
				helptip: uls(
					'对于使用移动设备的用户，或者意志不坚定的。',
					'對於使用行動裝置的使用者，或者意志不堅定的。'
				),
				type: 'boolean',
			},
			// TwinkleConfig.showRollbackLinks (array)
			// Where Twinkle should show rollback links:
			// diff, others, mine, contribs, history, recent
			// Note from TTO: |contribs| seems to be equal to |others| + |mine|, i.e. redundant, so I left it out heres
			{
				name: 'showRollbackLinks',
				label: uls('在这些页面上显示回退链接', '在這些頁面上顯示回退連結'),
				type: 'set',
				setValues: {
					diff: uls('差异', '差異'),
					history: uls('历史记录', '歷史記錄'),
					others: uls('其它用户的贡献', '其它使用者的貢獻'),
					mine: uls('我的贡献', '我的貢獻'),
					recentchanges: uls('最近更改', '近期變更'),
					recentchangeslinked: uls('相关更改', '相關變更'),
				},
			},
			{
				name: 'customRevertSummary',
				label: '回退理由',
				helptip: uls(
					'在查看差异时可选，仅善意回退、常规回退、恢复此版本',
					'在檢視差異時可選，僅善意回退、常規回退、恢復此版本'
				),
				type: 'customList',
				customListValueTitle: '理由',
				customListLabelTitle: uls('显示的文字', '顯示的文字'),
			},
		],
	},
	{
		title: uls('快速删除', '快速刪除'),
		module: 'speedy',
		preferences: [
			{
				name: 'speedySelectionStyle',
				label: uls('什么时候执行标记或删除', '什麼時候執行標記或刪除'),
				type: 'enum',
				enumValues: {
					buttonClick: uls('当我点“提交”时', '當我點「提交」時'),
					radioClick: uls('当我点一个选项时', '當我點一個選項時'),
				},
			},
			// TwinkleConfig.watchSpeedyPages (array)
			// Whether to add speedy tagged pages to watchlist
			{
				name: 'watchSpeedyPages',
				label: uls('将以下理由加入到监视列表', '將以下理由加入到監視清單'),
				type: 'set',
				setValues: commonSets.csdCriteria,
				setDisplayOrder: commonSets.csdCriteriaDisplayOrder,
			},
			// TwinkleConfig.watchSpeedyExpiry
			// If any of the above items are selected, whether to expire the watch
			{
				name: 'watchSpeedyExpiry',
				label: uls('当标记页面时，加入到监视列表的期限', '當標記頁面時，加入到監視清單的期限'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
			// TwinkleConfig.markSpeedyPagesAsPatrolled (boolean)
			// If, when applying speedy template to page, to mark the page as patrolled (if the page was reached from NewPages)
			{
				name: 'markSpeedyPagesAsPatrolled',
				label: uls('标记时标记页面为已巡查（如可能）', '標記時標記頁面為已巡查（如可能）'),
				type: 'boolean',
			},
			// TwinkleConfig.notifyUserOnSpeedyDeletionNomination (array)
			// What types of actions should result that the author of the page being notified of nomination
			{
				name: 'notifyUserOnSpeedyDeletionNomination',
				label: uls('仅在使用以下理由时通知页面创建者', '僅在使用以下理由時通知頁面建立者'),
				helptip: uls(
					'尽管您在对话框中选择通知，通知仍只会在使用这些理由时发出。',
					'儘管您在對話方塊中選擇通知，通知仍只會在使用這些理由時發出。'
				),
				type: 'set',
				setValues: commonSets.csdCriteriaNotification,
				setDisplayOrder: commonSets.csdCriteriaNotificationDisplayOrder,
			},
			// TwinkleConfig.promptForSpeedyDeletionSummary (array of strings)
			{
				name: 'promptForSpeedyDeletionSummary',
				label: uls('使用以下理由删除时允许编辑删除理由', '使用以下理由刪除時允許編輯刪除理由'),
				adminOnly: true,
				type: 'set',
				setValues: commonSets.csdAndDICriteria,
				setDisplayOrder: commonSets.csdAndDICriteriaDisplayOrder,
			},
			// TwinkleConfig.openUserTalkPageOnSpeedyDelete (array of strings)
			// What types of actions that should result user talk page to be opened when speedily deleting (admin only)
			{
				name: 'openUserTalkPageOnSpeedyDelete',
				label: uls('使用以下理由时打开用户讨论页', '使用以下理由時打開使用者討論頁'),
				adminOnly: true,
				type: 'set',
				setValues: commonSets.csdAndDICriteria,
				setDisplayOrder: commonSets.csdAndDICriteriaDisplayOrder,
			},
			// TwinkleConfig.deleteTalkPageOnDelete (boolean)
			// If talk page if exists should also be deleted (CSD G8) when spedying a page (admin only)
			{
				name: 'deleteTalkPageOnDelete',
				label: uls('默认勾选“删除讨论页”', '預設勾選「刪除討論頁」'),
				adminOnly: true,
				type: 'boolean',
			},
			{
				name: 'deleteRedirectsOnDelete',
				label: uls('默认勾选“删除重定向”', '預設勾選「刪除重新導向」'),
				adminOnly: true,
				type: 'boolean',
			},
			// TwinkleConfig.deleteSysopDefaultToDelete (boolean)
			// Make the CSD screen default to "delete" instead of "tag" (admin only)
			{
				name: 'deleteSysopDefaultToDelete',
				label: uls('默认为直接删除而不是标记', '預設為直接刪除而不是標記'),
				helptip: uls(
					'若已放置快速删除标记，则永远默认为删除模式。',
					'若已放置快速刪除標記，則永遠預設為刪除模式。'
				),
				adminOnly: true,
				type: 'boolean',
			},
			// TwinkleConfig.speedyWindowWidth (integer)
			// Defines the width of the Twinkle SD window in pixels
			{
				name: 'speedyWindowWidth',
				label: uls('快速删除对话框宽度（像素）', '快速刪除對話方塊寬度（像素）'),
				type: 'integer',
			},
			// TwinkleConfig.speedyWindowWidth (integer)
			// Defines the width of the Twinkle SD window in pixels
			{
				name: 'speedyWindowHeight',
				label: uls('快速删除对话框高度（像素）', '快速刪除對話方塊高度（像素）'),
				helptip: uls('若您有一台很大的显示器，您可以将此调高。', '若您有一台很大的顯示器，您可以將此調高。'),
				type: 'integer',
			},
			{
				name: 'logSpeedyNominations',
				label: uls('在用户空间中记录所有快速删除提名', '在使用者空間中記錄所有快速刪除提名'),
				helptip: uls(
					'非管理员无法访问到已删除的贡献，用户空间日志提供了一个很好的方法来记录这些历史。',
					'非管理員無法存取到已刪除的貢獻，使用者空間日誌提供了一個很好的方法來記錄這些歷史。'
				),
				type: 'boolean',
			},
			{
				name: 'speedyLogPageName',
				label: uls('在此页保留日志', '在此頁保留日誌'),
				helptip: uls(
					'在此框中输入子页面名称，您将在User:<i>用户名</i>/<i>子页面</i>找到CSD日志。仅在启用日志时工作。',
					'在此框中輸入子頁面名稱，您將在User:<i>使用者名稱</i>/<i>子頁面</i>找到CSD日誌。僅在啟用日誌時工作。'
				),
				type: 'string',
			},
			{
				name: 'noLogOnSpeedyNomination',
				label: uls('在使用以下理由时不做记录', '在使用以下理由時不做記錄'),
				type: 'set',
				setValues: commonSets.csdAndDICriteria,
				setDisplayOrder: commonSets.csdAndDICriteriaDisplayOrder,
			},
			{
				name: 'enlargeG7Input',
				label: uls('扩大CSD G7的按钮', '擴大CSD G7的按鈕'),
				helptip: uls('扩为默认的两倍大。', '擴為預設的兩倍大。'),
				type: 'boolean',
			},
		],
	},
	{
		title: uls('标记', '標記'),
		module: 'tag',
		preferences: [
			{
				name: 'watchTaggedPages',
				label: uls('标记时加入到监视列表', '標記時加入到監視清單'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
			{
				name: 'watchMergeDiscussions',
				label: uls('加入合并讨论时监视讨论页', '加入合併討論時監視討論頁'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
			{
				name: 'markTaggedPagesAsMinor',
				label: uls('将标记标记为小修改', '將標記標記為小修改'),
				type: 'boolean',
			},
			{
				name: 'markTaggedPagesAsPatrolled',
				label: uls('默认勾选“标记页面为已巡查”框', '預設勾選「標記頁面為已巡查」框'),
				type: 'boolean',
			},
			{
				name: 'groupByDefault',
				label: uls(
					'默认勾选“合并到{{multiple issues}}”复选框',
					'預設勾選「合併到{{multiple issues}}」核取方塊'
				),
				type: 'boolean',
			},
			{
				name: 'tagArticleSortOrder',
				label: uls('条目标记的默认查看方式', '條目標記的預設檢視方式'),
				type: 'enum',
				enumValues: {
					cat: uls('按类型', '按類別'),
					alpha: '按字母',
				},
			},
			{
				name: 'customTagList',
				label: uls('自定义条目维护标记', '自訂條目維護標記'),
				helptip: uls('这些会出现在列表的末尾。', '這些會出現在列表的末尾。'),
				type: 'customList',
				customListValueTitle: uls('模板名（不含大括号）', '模板名（不含大括號）'),
				customListLabelTitle: uls('显示的文字', '顯示的文字'),
			},
			{
				name: 'customFileTagList',
				label: uls('自定义文件维护标记', '自訂檔案維護標記'),
				helptip: uls('这些会出现在列表的末尾。', '這些會出現在列表的末尾。'),
				type: 'customList',
				customListValueTitle: uls('模板名（不含大括号）', '模板名（不含大括號）'),
				customListLabelTitle: uls('显示的文字', '顯示的文字'),
			},
			{
				name: 'customRedirectTagList',
				label: uls('自定义重定向维护标记', '自訂重新導向維護標記'),
				helptip: uls('这些会出现在列表的末尾。', '這些會出現在列表的末尾。'),
				type: 'customList',
				customListValueTitle: uls('模板名（不含大括号）', '模板名（不含大括號）'),
				customListLabelTitle: uls('显示的文字', '顯示的文字'),
			},
		],
	},
	{
		title: '小作品',
		module: 'stub',
		preferences: [
			{
				name: 'watchStubbedPages',
				label: uls('标记时加入到监视列表', '標記時加入到監視清單'),
				type: 'boolean',
			},
			{
				name: 'markStubbedPagesAsMinor',
				label: uls('将小作品标记为小修改', '將小作品標記為小修改'),
				type: 'boolean',
			},
			{
				name: 'markStubbedPagesAsPatrolled',
				label: uls('默认勾选“标记页面为已巡查”框', '預設勾選「標記頁面為已巡查」框'),
				type: 'boolean',
			},
			{
				name: 'stubArticleSortOrder',
				label: uls('条目小作品的默认查看方式', '條目小作品的預設檢視方式'),
				type: 'enum',
				enumValues: {
					cat: uls('按类型', '按類別'),
					alpha: '按字母',
				},
			},
			{
				name: 'customStubList',
				label: uls('自定义条目小作品标记', '自訂條目小作品標記'),
				helptip: uls('这些会出现在列表的末尾。', '這些會出現在列表的末尾。'),
				type: 'customList',
				customListValueTitle: uls('模板名（不含大括号）', '模板名（不含大括號）'),
				customListLabelTitle: uls('显示的文字', '顯示的文字'),
			},
		],
	},
	{
		title: '通告',
		module: 'talkback',
		preferences: [
			{
				name: 'markTalkbackAsMinor',
				label: uls('将通告标记为小修改', '將通告標記為小修改'),
				type: 'boolean',
			},
			{
				name: 'insertTalkbackSignature',
				label: uls('通告时加入签名', '通告時加入簽名'),
				type: 'boolean',
			},
			{
				name: 'talkbackHeading',
				label: uls('通告所用的小节标题', '通告所用的小節標題'),
				type: 'string',
			},
			{
				name: 'mailHeading',
				label: uls('“有新邮件”所用的小节标题', '「有新郵件」所用的小節標題'),
				type: 'string',
			},
		],
	},
	{
		title: uls('取消链入', '取消連入'),
		module: 'unlink',
		preferences: [
			// TwinkleConfig.unlinkNamespaces (array)
			// In what namespaces unlink should happen, default in 0 (article) and 100 (portal)
			{
				name: 'unlinkNamespaces',
				label: uls('取消以下命名空间中的反向链接', '取消以下命名空間中的反向連結'),
				helptip: uls(
					'请避免选择讨论页，因这样会导致Twinkle试图修改讨论存档。',
					'請避免選擇討論頁，因這樣會導致Twinkle試圖修改討論存檔。'
				),
				type: 'set',
				setValues: commonSets.namespacesNoSpecial,
			},
		],
	},
	{
		title: uls('警告用户', '警告使用者'),
		module: 'warn',
		preferences: [
			// TwinkleConfig.defaultWarningGroup (int)
			// if true, watch the page which has been dispatched an warning or notice, if false, default applies
			{
				name: 'defaultWarningGroup',
				label: uls('默认警告级别', '預設警告級別'),
				type: 'enum',
				enumValues: {
					1: '1：注意',
					2: '2：警告',
					3: uls('单层级提醒', '單層級提醒'),
					4: uls('单层级警告', '單層級警告'),
					5: uls('自定义提醒或警告', '自訂提醒或警告'),
					6: '所有警告模板',
					7: uls('自动选择层级', '自動選擇層級'),
					// 8 was used for block templates before #260
					// 9 was deprecated
					// 10 was deprecated
					// 11 was deprecated
				},
			},
			// TwinkleConfig.combinedSingletMenus (boolean)
			// if true, show one menu with both single-issue notices and warnings instead of two separately
			{
				name: 'combinedSingletMenus',
				label: uls('将两个单层级菜单合并成一个', '將兩個單層級選單合併成一個'),
				helptip: uls(
					'当启用此选项时，无论默认警告级别选择单层级通知或单层级警告皆属于此项。',
					'當啟用此選項時，無論預設警告級別選擇單層級通知或單層級警告皆屬於此項。'
				),
				type: 'boolean',
			},
			// TwinkleConfig.watchWarnings (string)
			// Watchlist setting for the page which has been dispatched an warning or notice
			{
				name: 'watchWarnings',
				label: uls('警告时加入用户讨论页到监视列表', '警告時加入使用者討論頁到監視清單'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
			// TwinkleConfig.oldSelect (boolean)
			// if true, use the native select menu rather the jquery chosen-based one
			{
				name: 'oldSelect',
				label: uls('使用不可搜索的经典菜单', '使用不可搜尋的經典選單'),
				type: 'boolean',
			},
			{
				name: 'customWarningList',
				label: uls('自定义警告模板', '自訂警告模板'),
				helptip: uls(
					'您可以加入模板或用户子页面。自定义警告会出现在警告对话框中“自定义警告”一节。',
					'您可以加入模板或使用者子頁面。自訂警告會出現在警告對話方塊中「自訂警告」一節。'
				),
				type: 'customList',
				customListValueTitle: uls('模板名（不含大括号）', '模板名（不含大括號）'),
				customListLabelTitle: uls('显示的文字（和编辑摘要）', '顯示的文字（和編輯摘要）'),
			},
		],
	},
	{
		title: uls('存废讨论', '存廢討論'),
		module: 'xfd',
		preferences: [
			{
				name: 'logXfdNominations',
				label: uls('在用户空间中记录所有存废讨论提名', '在使用者空間中記錄所有存廢討論提名'),
				helptip: uls(
					'该日志供您追踪所有通过Twinkle提交的存废讨论',
					'該日誌供您追蹤所有透過Twinkle提交的存廢討論'
				),
				type: 'boolean',
			},
			{
				name: 'xfdLogPageName',
				label: uls('在此页保留日志', '在此頁保留日誌'),
				helptip: uls(
					'在此框中输入子页面名称，您将在User:<i>用户名</i>/<i>子页面</i>找到XFD日志。仅在启用日志时工作。',
					'在此框中輸入子頁面名稱，您將在User:<i>使用者名稱</i>/<i>子頁面</i>找到XFD日誌。僅在啟用日誌時工作。'
				),
				type: 'string',
			},
			{
				name: 'noLogOnXfdNomination',
				label: uls('在使用以下理由时不做记录', '在使用以下理由時不做記錄'),
				type: 'set',
				setValues: commonSets.xfdCriteria,
				setDisplayOrder: commonSets.xfdCriteriaDisplayOrder,
			},
			// TwinkleConfig.xfdWatchPage (string)
			// The watchlist setting of the page being nominated for XfD.
			{
				name: 'xfdWatchPage',
				label: uls('加入提名的页面到监视列表', '加入提名的頁面到監視清單'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
			// TwinkleConfig.xfdWatchDiscussion (string)
			// The watchlist setting of the newly created XfD page (for those processes that create discussion pages for each nomination),
			// or the list page for the other processes.
			{
				name: 'xfdWatchDiscussion',
				label: uls('加入存废讨论页到监视列表', '加入存廢討論頁到監視清單'),
				helptip: uls('当日的页面。', '當日的頁面。'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
			// TwinkleConfig.xfdWatchUser (string)
			// The watchlist setting of the user talk page if they receive a notification.
			{
				name: 'xfdWatchUser',
				label: uls('加入创建者讨论页到监视列表（在通知时）', '加入建立者討論頁到監視清單（在通知時）'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
			{
				name: 'markXfdPagesAsPatrolled',
				label: uls('标记时标记页面为已巡查（如可能）', '標記時標記頁面為已巡查（如可能）'),
				helptip: uls(
					'基于技术原因，页面仅会在由Special:NewPages到达时被标记为已巡查。',
					'基於技術原因，頁面僅會在由Special:NewPages到達時被標記為已巡查。'
				),
				type: 'boolean',
			},
			{
				name: 'FwdCsdToXfd',
				label: uls('提删类型增加转交自快速删除候选', '提刪類別增加轉交自快速刪除候選'),
				helptip: uls(
					'请确保您充分了解[[Qiuwen:快速删除方针]]才开启此功能。',
					'請確保您充分了解[[Qiuwen:快速刪除方針]]才開啟此功能。'
				),
				type: 'boolean',
			},
			{
				name: 'afdDefaultCategory',
				label: uls('默认提删类型', '預設提刪類別'),
				helptip: uls(
					'若选择“相同于上次选择”将使用localStorage来记忆。',
					'若選擇「相同於上次選擇」將使用localStorage來記憶。'
				),
				type: 'enum',
				enumValues: {
					delete: uls('删除', '刪除'),
					same: uls('相同于上次选择', '相同於上次選擇'),
				},
			},
			{
				name: 'afdFameDefaultReason',
				label: uls('默认关注度提删理由', '預設關注度提刪理由'),
				helptip: uls('用于批量提删。', '用於批次提刪。'),
				type: 'string',
			},
			{
				name: 'afdSubstubDefaultReason',
				label: uls('默认小小作品提删理由', '預設小小作品提刪理由'),
				helptip: uls('用于批量提删。', '用於批次提刪。'),
				type: 'string',
			},
		],
	},
	{
		title: uls('关闭存废讨论', '關閉存廢討論'),
		module: 'close',
		preferences: [
			{
				name: 'XfdClose',
				label: uls('在存废讨论显示关闭讨论按钮', '在存廢討論顯示關閉討論按鈕'),
				helptip: uls(
					'请确保您充分了解[[Qiuwen:删除方针]]才开启此功能。',
					'請確保您充分了解[[Qiuwen:刪除方針]]才開啟此功能。'
				),
				type: 'enum',
				enumValues: {
					hide: uls('不显示', '不顯示'),
					nonadminonly: uls('只包含非管理员可使用选项', '只包含非管理員可使用選項'),
					all: uls('显示所有选项', '顯示所有選項'),
				},
			},
		],
	},
	{
		title: uls('侵犯著作权', '侵犯著作權'),
		module: 'copyvio',
		preferences: [
			// TwinkleConfig.copyvioWatchPage (string)
			// The watchlist setting of the page being nominated for XfD.
			{
				name: 'copyvioWatchPage',
				label: uls('加入提报的页面到监视列表', '加入提報的頁面到監視清單'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
			// TwinkleConfig.copyvioWatchUser (string)
			// The watchlist setting of the user if he receives a notification.
			{
				name: 'copyvioWatchUser',
				label: uls('加入创建者讨论页到监视列表（在通知时）', '加入建立者討論頁到監視清單（在通知時）'),
				type: 'enum',
				enumValues: watchlistEnums,
			},
			// TwinkleConfig.markCopyvioPagesAsPatrolled (boolean)
			// If, when applying copyvio template to page, to mark the page as patrolled (if the page was reached from NewPages)
			{
				name: 'markCopyvioPagesAsPatrolled',
				label: uls('标记时标记页面为已巡查（如可能）', '標記時標記頁面為已巡查（如可能）'),
				helptip: uls(
					'基于技术原因，页面仅会在由Special:NewPages到达时被标记为已巡查。',
					'基於技術原因，頁面僅會在由Special:NewPages到達時被標記為已巡查。'
				),
				type: 'boolean',
			},
		],
	},
	{
		title: uls('隐藏', '隱藏'),
		hidden: true,
		preferences: [
			// twinkle.js: portlet setup
			{
				name: 'portletArea',
				type: 'string',
			},
			{
				name: 'portletId',
				type: 'string',
			},
			{
				name: 'portletName',
				type: 'string',
			},
			{
				name: 'portletType',
				type: 'string',
			},
			{
				name: 'portletNext',
				type: 'string',
			},
			// twinklefluff.js: defines how many revision to query maximum, maximum possible is 50, default is 50
			{
				name: 'revertMaxRevisions',
				type: 'integer',
			},
			// twinklebatchdelete.js: How many pages should be processed maximum
			{
				name: 'batchMax',
				type: 'integer',
				adminOnly: true,
			},
			// How many pages should be processed at a time by deprod and batchdelete/protect/undelete
			{
				name: 'batchChunks',
				type: 'integer',
				adminOnly: true,
			},
		],
	},
]; // end of sections

const init = (): void => {
	// create the config page at Twinkle.getPref('configPage')
	if (mw.config.get('wgPageName') === String(Twinkle.getPref('configPage')) && mw.config.get('wgAction') === 'view') {
		if (!document.querySelector('#twinkle-config')) {
			return; // maybe the page is misconfigured, or something - but any attempt to modify it will be pointless
		}
		const contentdiv = document.querySelector('#twinkle-config-content');
		if (!contentdiv) {
			return;
		}
		contentdiv.textContent = ''; // clear children
		// Collect the visible sections and preferences for the Codex panel
		const visibleSections: ConfigSection[] = [];
		for (const section of sections) {
			if (section.hidden || (section.adminOnly && !window.Morebits.userIsSysop)) {
				continue;
			}
			visibleSections.push({
				title: section.title,
				...(section.module ? {module: section.module} : {}),
				preferences: section.preferences.filter((pref) => {
					return !pref.adminOnly || window.Morebits.userIsSysop;
				}),
			});
		}
		const initialValues: Record<string, unknown> = {};
		for (const section of visibleSections) {
			for (const pref of section.preferences) {
				const gotPref = Twinkle.getPref(pref.name);
				if (pref.type === 'enum' && typeof gotPref === 'boolean') {
					// Legacy boolean watchlist preferences map to yes/no enums
					initialValues[pref.name] = gotPref ? 'yes' : 'no';
				} else {
					initialValues[pref.name] = gotPref;
				}
			}
		}
		const root = document.createElement('div');
		contentdiv.appendChild(root);
		void (async () => {
			try {
				const component = await getDialogComponent('TwConfigPanel');
				const app = createApp({
					render: () => {
						return h(component, {
							sections: visibleSections,
							allSections: sections,
							defaults: Twinkle.defaultConfig,
							initialValues,
						});
					},
				});
				app.mount(root);
				// since all the section headers exist now, we can try going to the requested anchor
				if (window.location.hash) {
					const loc = window.location.hash;
					window.location.hash = '';
					window.location.hash = loc;
				}
			} catch {
				void mw.notify(uls('未能加载Twinkle参数设置面板', '未能載入Twinkle偏好設定面板'), {
					type: 'error',
					tag: 'twinkle',
				});
			}
		})();
	} else if (
		mw.config.get('wgNamespaceNumber') === mw.config.get('wgNamespaceIds')['user'] &&
		mw.config.get('wgTitle').indexOf(mw.config.get('wgUserName') ?? '') === 0 &&
		mw.config.get('wgPageName').slice(-3) === '.js'
	) {
		const $body = $('body');
		const box = document.createElement('div');
		// Styled in TwConfigPanel.vue (global style block)
		box.setAttribute('id', 'twinkle-config-headerbox');
		let link: HTMLAnchorElement;
		const scriptPageName = mw.config
			.get('wgPageName')
			.slice(mw.config.get('wgPageName').lastIndexOf('/') + 1, mw.config.get('wgPageName').lastIndexOf('.js'));
		if (scriptPageName === 'twinkleoptions') {
			// place "why not try the preference panel" notice
			box.setAttribute('class', 'config-twopt-box');
			if (mw.config.get('wgArticleId') > 0) {
				// page exists
				box.appendChild(
					document.createTextNode(
						uls('这页包含您的Twinkle参数设置，您可使用', '這頁包含您的Twinkle偏好設定，您可使用')
					)
				);
			} else {
				// page does not exist
				box.appendChild(
					document.createTextNode(uls('您可配置您的Twinkle，通过使用', '您可配置您的Twinkle，通過使用'))
				);
			}
			link = document.createElement('a');
			link.setAttribute('href', mw.util.getUrl(String(Twinkle.getPref('configPage'))));
			link.appendChild(document.createTextNode(uls('Twinkle参数设置面板', 'Twinkle偏好設定面板')));
			box.appendChild(link);
			box.appendChild(document.createTextNode(uls('，或直接编辑本页。', '，或直接編輯本頁。')));
			$(box).insertAfter($body.find('#contentSub'));
		} else if (['vector', 'vector-2022', 'gongbi', 'citizen', 'common'].includes(scriptPageName)) {
			// place "Looking for Twinkle options?" notice
			box.setAttribute('class', 'config-userskin-box');
			box.appendChild(
				document.createTextNode(uls('若您想配置您的Twinkle，请使用', '若您想配置您的Twinkle，請使用'))
			);
			link = document.createElement('a');
			link.setAttribute('href', mw.util.getUrl(String(Twinkle.getPref('configPage'))));
			link.appendChild(document.createTextNode(uls('Twinkle参数设置面板', 'Twinkle偏好設定面板')));
			box.appendChild(link);
			box.appendChild(document.createTextNode('。'));
			$(box).insertAfter($body.find('#contentSub'));
		}
	}
};

Twinkle.config = {
	watchlistEnums,
	commonSets,
	sections,
	init,
};
Twinkle.addInitCallback(Twinkle.config.init);

export {};
