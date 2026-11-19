import {localize} from 'ext.gadget.i18n';

const uls = (hans: string, hant: string = hans): string => {
	return localize({'zh-hans': hans, 'zh-hant': hant, 'zh-my': hant, en: hans});
};

// Translatable strings
const message: {[key: string]: string} = {
	// summary data, searching etc.
	article: uls('条目', '條目'),
	category: uls('个分类', '個分類'),
	categories: uls('个分类', '個分類'),
	image: uls('个文件', '個檔案'),
	images: uls('个文件', '個檔案'),
	stub: '小作品',
	'section stub': uls('小章节', '小章節'),
	'Empty page': uls('空页面', '空頁面'),
	kB: uls('千字节<sub>（以1000为一进）</sub>', '千位元組<sub>（以1000為一進）</sub>'),
	bytes: uls('字节', '位元組'),
	day: '天',
	days: '天',
	hour: uls('小时', '小時'),
	hours: uls('小时', '小時'),
	minute: '分',
	minutes: '分',
	second: '秒',
	seconds: '秒',
	week: '周',
	weeks: '周',
	month: '月',
	months: '月',
	year: '年',
	years: '年',
	search: uls('搜索', '搜尋'),
	SearchHint: uls('搜索包含 %s 的页面', '搜尋包含 %s 的頁面'),
	web: 'Bing',
	global: '全域',
	'more...': '更多……',
	// article-related actions and info
	// (some actions also apply to user pages)
	actions: uls('操作', '動作'),
	// /// view articles and view talk
	popupsMenu: 'Popups',
	'disable previews': uls('禁用预览', '禁用預覽'),
	togglePreviewsHint: uls('切换本页 Popups 的预览开关', '切換本頁 Popups 的預覽開關'),
	'toggle previews': uls('切换预览开关', '切換預覽開關'),
	reset: uls('复位', '複位'),
	disable: '禁用 Popups',
	disablePopupsHint: uls('在本页禁用 Popups，刷新页面以重新启用。', '在本頁禁用 Popups，重新整理頁面以重新啟用。'),
	purgePopupsHint: uls('复位 Popups，清除所有缓存数据。', '複位 Popups，清除所有快取資料。'),
	PopupsHint: uls('复位 Popups，清除所有缓存数据。', '複位 Popups，清除所有快取資料。'),
	spacebar: '空格',
	view: uls('查看', '檢視'),
	'view article': uls('查看条目', '檢視條目'),
	viewHint: uls('前往 %s', '前往 %s'),
	talk: uls('讨论', '討論'),
	'talk page': uls('讨论页', '討論頁'),
	'this&nbsp;revision': uls('此修订版本', '此修訂版本'),
	'revision %s of %s': uls('页面 $2 的修订版本 $1', '頁面 $2 的修訂版本 $1'),
	'Revision %s of %s': uls('页面 $2 的修订版本 $1', '頁面 $2 的修訂版本 $1'),
	'the revision prior to revision %s of %s': uls(
		'页面 $2 的修订版本 $1 之前的修订版本',
		'頁面 $2 的修訂版本 $1 之前的修訂版本'
	),
	'Toggle image size': uls('点击切换图片大小', '點擊切換圖片大小'),
	del: uls('删除', '删除'),
	// /// delete, protect, move
	delete: uls('删除', '删除'),
	deleteHint: uls('删除 %s', '删除 %s'),
	undeleteShort: uls('恢复', '恢復'),
	UndeleteHint: uls('恢复 %s', '恢復 %s'),
	protect: uls('保护', '保護'),
	protectHint: uls('保护 %s', '保護 %s'),
	unprotectShort: uls('解除', '解除'),
	unprotectHint: uls('解除对 %s 的保护', '解除對 %s 的保護'),
	move: uls('移动', '移動'),
	'move page': uls('移动页面', '移動頁面'),
	MovepageHint: uls('修改 %s 的标题', '修改 %s 的標題'),
	edit: uls('编辑', '編輯'),
	// /// edit articles and talk
	'edit article': uls('编辑条目', '編輯條目'),
	editHint: uls('修改 %s 的内容', '修改 %s 的內容'),
	'edit talk': uls('编辑讨论页', '編輯對話頁'),
	new: uls('新', '新'),
	'new topic': uls('新话题', '新話題'),
	newSectionHint: uls('在 %s 增加新的讨论话题', '在 %s 增加新的討論話題'),
	'null edit': uls('空编辑', '空編輯'),
	nullEditHint: uls('进行一次对 %s 的空编辑', '製造一次對 %s 的空編輯'),
	hist: uls('历史', '歷史'),
	// /// history, diffs, editors, related
	history: uls('历史', '歷史'),
	historyHint: uls('%s 的修订历史', '%s 的修訂歷史'),
	last: uls('之前', '之前'),
	// [[MediaWiki:Last]]
	lastEdit: uls('最近更改', '最近更改'),
	'show last edit': uls('最近一次更改', '最新一次修訂'),
	'Show the last edit': uls('显示最近一次更改的差异', '顯示最新一次修訂的差異'),
	lastContrib: uls('最近编辑', '最近編輯'),
	'last set of edits': uls('最近编辑', '最近編輯'),
	lastContribHint: uls('显示由最后一位编辑者造成的差异', '顯示由最後一位編輯者製造的差異'),
	cur: uls('当前', '當前'),
	diffCur: uls('与当前版本的差异', '與目前版本的差異'),
	'Show changes since revision %s': uls('显示自修订版本 %s 的差异', '顯示自修訂版本 %s 的差異'),
	'%s old': uls('%s 前的最后版本', '%s 前的最后版本'),
	// as in 4 weeks old
	oldEdit: uls('旧编辑', '舊編輯'),
	purge: uls('清除缓存', '清除快取'),
	purgeHint: uls('清除服务器中 %s 的缓存', '清除伺服器中 %s 的快取'),
	raw: uls('源代码', '原始碼'),
	rawHint: uls('查看 %s 的源代码', '檢視 %s 的原始碼'),
	render: uls('仅正文', '僅正文'),
	renderHint: uls('显示 %s 的纯HTML解析（仅正文内容）', '顯示 %s 的純HTML解析（僅正文內容）'),
	'Show the edit made to get revision': uls('显示编辑以得到修订版本', '顯示編輯以得到修訂版本'),
	sinceMe: uls('自我', '自我'),
	'changes since mine': uls('自我修订的差异', '自我修訂的差異'),
	sinceMeHint: uls('显示自我上次修改以来的差异', '顯示自我上次修改以來的差異'),
	"Couldn't find an edit by %s\nin the last %s edits to\n%s": uls(
		'在 $3 最近 $2 次编辑中找不到 $1 做出的修改',
		'在 $3 最近 $2 次編輯中找不到 $1 做出的修改'
	),
	eds: uls('编辑', '編輯'),
	editors: uls('编辑者', '編輯者'),
	editorListHint: uls('列出编辑过 %s 的用户', '列出編輯過 %s 的使用者'),
	related: uls('相关', '相關'),
	relatedChanges: uls('相关更改', '相關更改'),
	'related changes': uls('相关更改', '相關更改'),
	RecentchangeslinkedHint: uls('显示相关 %s 的修改', '顯示相關 %s 的修改'),
	editOld: uls('编辑旧版', '編輯舊版'),
	// /// edit old version, or revert
	rv: uls('回退', '恢復'),
	revert: uls('回退', '恢復'),
	revertHint: uls('回退到 %s', '恢復到 %s'),
	undo: uls('撤销', '撤銷'),
	undoHint: uls('撤销这次编辑', '撤銷這次編輯'),
	defaultpopupRedlinkSummary: uls('移除到空页面[[%s]]的链接（Popups）', '移除到空頁面[[%s]]的連結（Popups）'),
	defaultpopupFixDabsSummary: uls('消歧义[[%s]]到[[%s]]（Popups）', '消歧義[[%s]]到[[%s]]（Popups）'),
	defaultpopupFixRedirsSummary: uls(
		'忽略从[[%s]]到[[%s]]的重定向（Popups）',
		'忽略從[[%s]]到[[%s]]的重新導向（Popups）'
	),
	defaultpopupExtendedRevertSummary: uls(
		'回退到$2在$1时编辑的修订版本$3（Popups）',
		'還原到$2在$1時製作的修訂版本$3（Popups）'
	),
	defaultpopupRevertToPreviousSummary: uls(
		'回退到修订版本%s的上一个版本（Popups）',
		'還原到修訂版本%s的上一個版本（Popups）'
	),
	defaultpopupRevertSummary: uls('回退到修订版本%s（Popups）', '還原到修訂版本%s（Popups）'),
	defaultpopupQueriedRevertToPreviousSummary: uls(
		'回退到修订版本$1的上一个版本，由$3在$2时编辑（Popups）',
		'還原到修訂版本$1的上一個版本，由$3在$2時製作（Popups）'
	),
	defaultpopupQueriedRevertSummary: uls(
		'回退到$3在$2时编辑的修订版本$1（Popups）',
		'還原到$3在$2時製作的修訂版本$1（Popups）'
	),
	defaultpopupRmDabLinkSummary: uls('移除到消歧义页[[%s]]的链接（Popups）', '移除到消歧義頁[[%s]]的連結（Popups）'),
	Redirects: uls('重定向', '重定向'),
	// as in Redirects to ...
	// " to ": uls( "到","到" ),
	// as in Redirects to ...
	'Bypass redirect': uls('忽略重定向', '忽略重新導向'),
	'Fix this redirect': uls('修复重定向', '修復重新導向'),
	disambig: uls('消歧义', '消歧義'),
	// /// add or remove dab etc.
	disambigHint: uls('消歧义这个链接到 [[%s]]', '消歧義這個連結到 [[%s]]'),
	'Click to disambiguate this link to:': uls('点击以消歧义这个链接到：', '點擊以消歧義這個連結到：'),
	'remove this link': uls('移除链接', '移除連結'),
	'remove all links to this page from this article': uls('移除此条目到这页的所有链接', '移除此條目到這頁的所有連結'),
	'remove all links to this disambig page from this article': uls(
		'移除此条目到这消歧义的所有链接',
		'移除此條目到這消歧義的所有連結'
	),
	mainlink: uls('主链接', '主連結'),
	// /// links, watch, unwatch
	wikiLink: uls('个内部链接', '个內部連結'),
	wikiLinks: uls('个内部链接', '个內部連結'),
	'links here': uls('链入', '鏈入'),
	whatLinksHere: uls('链入页面', '鏈入頁面'),
	'what links here': uls('链入页面', '鏈入頁面'),
	WhatlinkshereHint: uls('显示链接到 %s 的页面', '顯示連結到 %s 的頁面'),
	unwatchShort: uls('取消', '取消'),
	watchThingy: uls('监视', '監視'),
	// called watchThingy because {}.watch is a function
	watchHint: uls('加入 %s 到我的监视列表', '加入 %s 到我的監視列表'),
	unwatchHint: uls('从我的监视列表移除 %s', '從我的監視列表移除 %s'),
	'Only found one editor: %s made %s edits': uls(
		'仅找到一位编者：%s 制造了 %s 次编辑',
		'僅找到一位編者：%s 製造了 %s 次編輯'
	),
	'%s seems to be the last editor to the page %s': uls(
		'%s 看上去是 %s 这页的最后一位编者',
		'%s 看上去是 %s 這頁的最後一位編者'
	),
	rss: uls('RSS', 'RSS'),
	// diff previews
	'Diff truncated for performance reasons': uls('出于性能考虑，差异已被截断', '出於效能考慮，差異已被截斷'),
	'Old revision': uls('旧版本', '舊版本'),
	'New revision': uls('新版本', '新版本'),
	'Something went wrong :-(': uls('出问题了 :-(', '出問題了 :-('),
	'Empty revision, maybe non-existent': uls('空的修订，可能并不存在', '空的修訂，可能並不存在'),
	'Unknown date': uls('未知日期', '未知日期'),
	// other special previews
	'Empty category': uls('空的分类', '空的分類'),
	'Category members (%s shown)': uls('分类成员（%s 显示）', '分類成員（%s 顯示）'),
	'No image links found': uls('未找到文件链接', '未找到檔案連結'),
	'File links': uls('文件链接', '檔案連結'),
	'not commons': uls('维基共享中无此名称的文件。', '維基共享中無此名稱的檔案。'),
	'commons only': uls('此文件来自维基共享。', '此檔案來自維基共享。'),
	'No image found': uls('找不到文件', '找不到檔案'),
	'commons dupe': uls('维基共享中存在此文件的副本。', '維基共享中存在此檔案的副本。'),
	'commons conflict': uls('维基共享中存在此文件名称不同的副本。', '維基共享中存在此檔名稱不同的副本。'),
	// user-related actions and info
	user: uls('用户', '使用者'),
	// /// user page, talk, email, space
	'user&nbsp;page': uls('用户页', '使用者頁'),
	'user talk': uls('用户讨论', '使用者對話'),
	'edit user talk': uls('编辑用户讨论', '編輯使用者對話'),
	'leave comment': uls('留言', '留言'),
	email: uls('电邮', '電郵'),
	'email user': uls('电邮用户', '電郵使用者'),
	EmailuserHint: uls('给 %s 发送电子邮件', '給 %s 發送電子郵件'),
	space: uls('子页面', '子頁面'),
	// short form for userSpace link
	PrefixindexHint: uls('显示 %s 的用户页子页面', '顯示 %s 的使用者頁子頁面'),
	count: uls('统计', '統計'),
	// /// contributions, tree, log
	'edit counter': uls('编辑次数', '編輯次數'),
	katelinkHint: uls('%s 的编辑次数', '%s 的編輯次數'),
	contribs: uls('贡献', '貢獻'),
	contributions: uls('贡献', '貢獻'),
	deletedContribs: uls('已删除的贡献', '已刪除的貢獻'),
	ContributionsHint: uls('%s 的用户贡献', '%s 的使用者貢獻'),
	tree: uls('树', '樹'),
	contribsTreeHint: uls('根据名字空间查看 %s 的贡献', '根據命名空間檢視 %s 的貢獻'),
	log: uls('日志', '日誌'),
	'user log': uls('用户日志', '使用者日誌'),
	userLogHint: uls('显示 %s 的用户日志', '顯示 %s 的使用者日誌'),
	unblockShort: uls('解除', '解除'),
	block: uls('封禁', '封鎖'),
	'block user': uls('封禁用户', '封鎖使用者'),
	IpblocklistHint: uls('解封 %s', '解封 %s'),
	BlockipHint: uls('封禁 %s', '封鎖 %s'),
	'block log': uls('封禁日志', '封鎖日誌'),
	blockLogHint: uls('显示 %s 的封禁日志', '顯示 %s 的封鎖日誌'),
	protectLogHint: uls('显示 %s 的保护日志', '顯示 %s 的保護日誌'),
	pageLogHint: uls('显示 %s 的日志', '顯示 %s 的日誌'),
	deleteLogHint: uls('显示 %s 的删除日志', '顯示 %s 的刪除日誌'),
	'Invalid %s %s': uls('选项 %s 不可用：%s', '選項 %s 不可用：%s'),
	m: '小',
	// Autoediting
	'Enter a non-empty edit summary or press cancel to abort': uls(
		'输入编辑摘要，或按取消中止操作',
		'輸入編輯摘要，或按取消中止操作'
	),
	'Failed to get revision information, please edit manually.\n\n': uls(
		'获取修订版本信息失败，请手动修改。\n\n',
		'獲取修訂版本資訊失敗，請手動修改。\n\n'
	),
	'The %s button has been automatically clicked. Please wait for the next page to load.': uls(
		'按钮 %s 已被自动点击，请等待下一个页面加载。',
		'按鈕 %s 已被自動點擊，請等待下一個頁面載入。'
	),
	'Could not find button %s. Please check the settings in your javascript file.': uls(
		'找不到按钮 %s，请检查您 JavaScript 文件中的设置。',
		'找不到按鈕 %s，請檢查您 JavaScript 檔案中的設定。'
	),
	// Popups setup
	'Open full-size image': uls('查看全尺寸图像', '檢視全尺寸影像'),
	// 以下内容由 AnnAngela 补正
	bingSearchHint: uls('在 Bing 上搜索“%s”', '在 bing 上搜尋「%s」'),
	'enable previews': uls('启用预览', '啟用預覽'),
	'show preview': uls('禁用预览', '禁用預覽'),
	historyfeedHint: uls('该页面的近期更改 RSS feed', '該頁面的近期更改 RSS feed'),
	'send thanks': uls('发送感谢', '傳送感謝'),
	ThanksHint: uls('向该用户发送一封感谢消息', '向該使用者傳送一封感謝訊息'),
	'mark patrolled': uls('标记为已巡查', '標記為已巡查'),
	markpatrolledHint: uls('标记该编辑为已巡查', '標記該編輯為已巡查'),
	'Could not marked this edit as patrolled': uls('无法标记该编辑为已巡查', '無法標記該編輯為已巡查'),
	defaultpopupReviewedSummary: uls('标记从版本%s到%s间的编辑为已巡查', '標記從版本%s到%s間的編輯為已巡查'),
	'Image from Qiuwen Baike': uls('共享图片', '共用圖片'),
	'Description page': uls('图片描述页', '圖片描述頁'),
	'Alt text:': uls('替换文本（Alt）：', '替換文字（Alt）：'),
	revdel: uls('历史版本被隐藏', '歷史版本被隱藏'),
	DeletedcontributionsHint: uls('用户%s的被删除编辑次数', '使用者%s的被刪除編輯次數'),
	'No backlinks found': uls('找不到链入页面', '找不到鏈入頁面'),
	' and more': uls('以及其他页面', '以及其他頁面'),
	'Download preview data': uls('下载预览数据', '下載預覽資料'),
	'Not a registered username': uls('非已注册的用户', '非已註冊的使用者'),
	BLOCKED: uls('被封禁', '被封鎖'),
	'Has blocks': uls('被部分封禁', '被部分封鎖'),
	' edits since: ': uls('次编辑，注册日期为', '次編輯，註冊日期為'),
	'last edit on ': uls('最后一次编辑于', '最後一次編輯於'),
	EmailUserHint: uls('给 %s 发送电子邮件', '給 %s 發送電子郵件'),
	RANGEBLOCKED: uls('IP段被封禁', 'IP段被封鎖'),
	'IP user': uls('IP用户', 'IP使用者'),
	'♀': '♀',
	'♂': '♂',
	HIDDEN: uls('全域隐藏', '全域隱藏'),
	LOCKED: uls('全域锁定', '全域鎖定'),
	'Invalid user': uls('非法用户名', '非法使用者名稱'),
	diff: uls('差异', '差異'),
	' to ': '至',

	autoedit_version: 'np20140416',
	PrefixIndexHint: uls('显示用户%s的子页面', '顯示使用者%s的子頁面'),
	nullEditSummary: uls('进行一次零编辑', '進行一次零編輯'),
	// 用户组名称从系统消息获取
	'group-no-autoconfirmed': uls('非自动确认用户', '非自動確認使用者'),
	separator: '、',
	comma: '，',
};

export {message};
