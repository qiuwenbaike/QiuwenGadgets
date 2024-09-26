/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-popups.js}
 * @base {@link https://zh.wikipedia.org/w/index.php?title=User:Lupin/strings-draft&oldid=579996170}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-navpop.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Navigation_popups}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";

// dist/Navigation_popups/Navigation_popups.js
var _templateObject;
var _templateObject2;
var _templateObject3;
var _templateObject4;
var _templateObject5;
var _templateObject6;
var _templateObject7;
var _templateObject8;
var _templateObject9;
var _templateObject10;
var _templateObject11;
var _templateObject12;
var _templateObject13;
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
//! src/Navigation_popups/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("Navigation popups/1.0");
//! src/Navigation_popups/modules/string.ts
var message = {
  // summary data, searching etc.
  article: window.wgULS("条目", "條目"),
  category: window.wgULS("个分类", "個分類"),
  categories: window.wgULS("个分类", "個分類"),
  image: window.wgULS("个文件", "個檔案"),
  images: window.wgULS("个文件", "個檔案"),
  stub: "小作品",
  "section stub": window.wgULS("小章节", "小章節"),
  "Empty page": window.wgULS("空页面", "空頁面"),
  kB: window.wgULS("千字节<sub>（以1000为一进）</sub>", "千位元組<sub>（以1000為一進）</sub>"),
  bytes: window.wgULS("字节", "位元組"),
  day: "天",
  days: "天",
  hour: window.wgULS("小时", "小時"),
  hours: window.wgULS("小时", "小時"),
  minute: "分",
  minutes: "分",
  second: "秒",
  seconds: "秒",
  week: "周",
  weeks: "周",
  month: "月",
  months: "月",
  year: "年",
  years: "年",
  search: window.wgULS("搜索", "搜尋"),
  SearchHint: window.wgULS("搜索包含 %s 的页面", "搜尋包含 %s 的頁面"),
  web: "Bing",
  global: "全域",
  "more...": "更多……",
  // article-related actions and info
  // (some actions also apply to user pages)
  actions: window.wgULS("操作", "動作"),
  // /// view articles and view talk
  popupsMenu: "Popups",
  "disable previews": window.wgULS("禁用预览", "禁用預覽"),
  togglePreviewsHint: window.wgULS("切换本页 Popups 的预览开关", "切換本頁 Popups 的預覽開關"),
  "toggle previews": window.wgULS("切换预览开关", "切換預覽開關"),
  reset: window.wgULS("复位", "複位"),
  disable: "禁用 Popups",
  disablePopupsHint: window.wgULS("在本页禁用 Popups，刷新页面以重新启用。", "在本頁禁用 Popups，重新整理頁面以重新啟用。"),
  purgePopupsHint: window.wgULS("复位 Popups，清除所有缓存数据。", "複位 Popups，清除所有快取資料。"),
  PopupsHint: window.wgULS("复位 Popups，清除所有缓存数据。", "複位 Popups，清除所有快取資料。"),
  spacebar: "空格",
  view: window.wgULS("查看", "檢視"),
  "view article": window.wgULS("查看条目", "檢視條目"),
  viewHint: window.wgULS("前往 %s", "前往 %s"),
  talk: window.wgULS("讨论", "討論"),
  "talk page": window.wgULS("讨论页", "討論頁"),
  "this&nbsp;revision": window.wgULS("此修订版本", "此修訂版本"),
  "revision %s of %s": window.wgULS("页面 $2 的修订版本 $1", "頁面 $2 的修訂版本 $1"),
  "Revision %s of %s": window.wgULS("页面 $2 的修订版本 $1", "頁面 $2 的修訂版本 $1"),
  "the revision prior to revision %s of %s": window.wgULS("页面 $2 的修订版本 $1 之前的修订版本", "頁面 $2 的修訂版本 $1 之前的修訂版本"),
  "Toggle image size": window.wgULS("点击切换图片大小", "點擊切換圖片大小"),
  del: window.wgULS("删除", "删除"),
  // /// delete, protect, move
  delete: window.wgULS("删除", "删除"),
  deleteHint: window.wgULS("删除 %s", "删除 %s"),
  undeleteShort: window.wgULS("恢复", "恢復"),
  UndeleteHint: window.wgULS("恢复 %s", "恢復 %s"),
  protect: window.wgULS("保护", "保護"),
  protectHint: window.wgULS("保护 %s", "保護 %s"),
  unprotectShort: window.wgULS("解除", "解除"),
  unprotectHint: window.wgULS("解除对 %s 的保护", "解除對 %s 的保護"),
  move: window.wgULS("移动", "移動"),
  "move page": window.wgULS("移动页面", "移動頁面"),
  MovepageHint: window.wgULS("修改 %s 的标题", "修改 %s 的標題"),
  edit: window.wgULS("编辑", "編輯"),
  // /// edit articles and talk
  "edit article": window.wgULS("编辑条目", "編輯條目"),
  editHint: window.wgULS("修改 %s 的内容", "修改 %s 的內容"),
  "edit talk": window.wgULS("编辑讨论页", "編輯對話頁"),
  new: window.wgULS("新", "新"),
  "new topic": window.wgULS("新话题", "新話題"),
  newSectionHint: window.wgULS("在 %s 增加新的讨论话题", "在 %s 增加新的討論話題"),
  "null edit": window.wgULS("空编辑", "空編輯"),
  nullEditHint: window.wgULS("进行一次对 %s 的空编辑", "製造一次對 %s 的空編輯"),
  hist: window.wgULS("历史", "歷史"),
  // /// history, diffs, editors, related
  history: window.wgULS("历史", "歷史"),
  historyHint: window.wgULS("%s 的修订历史", "%s 的修訂歷史"),
  last: window.wgULS("之前", "之前"),
  // [[MediaWiki:Last]]
  lastEdit: window.wgULS("最近更改", "最近更改"),
  "show last edit": window.wgULS("最近一次更改", "最新一次修訂"),
  "Show the last edit": window.wgULS("显示最近一次更改的差异", "顯示最新一次修訂的差異"),
  lastContrib: window.wgULS("最近编辑", "最近編輯"),
  "last set of edits": window.wgULS("最近编辑", "最近編輯"),
  lastContribHint: window.wgULS("显示由最后一位编辑者造成的差异", "顯示由最後一位編輯者製造的差異"),
  cur: window.wgULS("当前", "當前"),
  diffCur: window.wgULS("与当前版本的差异", "與目前版本的差異"),
  "Show changes since revision %s": window.wgULS("显示自修订版本 %s 的差异", "顯示自修訂版本 %s 的差異"),
  "%s old": window.wgULS("%s 前的最后版本", "%s 前的最后版本"),
  // as in 4 weeks old
  oldEdit: window.wgULS("旧编辑", "舊編輯"),
  purge: window.wgULS("清除缓存", "清除快取"),
  purgeHint: window.wgULS("清除服务器中 %s 的缓存", "清除伺服器中 %s 的快取"),
  raw: window.wgULS("源代码", "原始碼"),
  rawHint: window.wgULS("查看 %s 的源代码", "檢視 %s 的原始碼"),
  render: window.wgULS("仅正文", "僅正文"),
  renderHint: window.wgULS("显示 %s 的纯HTML解析（仅正文内容）", "顯示 %s 的純HTML解析（僅正文內容）"),
  "Show the edit made to get revision": window.wgULS("显示编辑以得到修订版本", "顯示編輯以得到修訂版本"),
  sinceMe: window.wgULS("自我", "自我"),
  "changes since mine": window.wgULS("自我修订的差异", "自我修訂的差異"),
  sinceMeHint: window.wgULS("显示自我上次修改以来的差异", "顯示自我上次修改以來的差異"),
  "Couldn't find an edit by %s\nin the last %s edits to\n%s": window.wgULS("在 $3 最近 $2 次编辑中找不到 $1 做出的修改", "在 $3 最近 $2 次編輯中找不到 $1 做出的修改"),
  eds: window.wgULS("编辑", "編輯"),
  editors: window.wgULS("编辑者", "編輯者"),
  editorListHint: window.wgULS("列出编辑过 %s 的用户", "列出編輯過 %s 的使用者"),
  related: window.wgULS("相关", "相關"),
  relatedChanges: window.wgULS("相关更改", "相關更改"),
  "related changes": window.wgULS("相关更改", "相關更改"),
  RecentchangeslinkedHint: window.wgULS("显示相关 %s 的修改", "顯示相關 %s 的修改"),
  editOld: window.wgULS("编辑旧版", "編輯舊版"),
  // /// edit old version, or revert
  rv: window.wgULS("回退", "恢復"),
  revert: window.wgULS("回退", "恢復"),
  revertHint: window.wgULS("回退到 %s", "恢復到 %s"),
  undo: window.wgULS("撤销", "撤銷"),
  undoHint: window.wgULS("撤销这次编辑", "撤銷這次編輯"),
  defaultpopupRedlinkSummary: window.wgULS("移除到空页面[[%s]]的链接（Popups）", "移除到空頁面[[%s]]的連結（Popups）"),
  defaultpopupFixDabsSummary: window.wgULS("消歧义[[%s]]到[[%s]]（Popups）", "消歧義[[%s]]到[[%s]]（Popups）"),
  defaultpopupFixRedirsSummary: window.wgULS("忽略从[[%s]]到[[%s]]的重定向（Popups）", "忽略從[[%s]]到[[%s]]的重新導向（Popups）"),
  defaultpopupExtendedRevertSummary: window.wgULS("回退到$2在$1时编辑的修订版本$3（Popups）", "還原到$2在$1時製作的修訂版本$3（Popups）"),
  defaultpopupRevertToPreviousSummary: window.wgULS("回退到修订版本%s的上一个版本（Popups）", "還原到修訂版本%s的上一個版本（Popups）"),
  defaultpopupRevertSummary: window.wgULS("回退到修订版本%s（Popups）", "還原到修訂版本%s（Popups）"),
  defaultpopupQueriedRevertToPreviousSummary: window.wgULS("回退到修订版本$1的上一个版本，由$3在$2时编辑（Popups）", "還原到修訂版本$1的上一個版本，由$3在$2時製作（Popups）"),
  defaultpopupQueriedRevertSummary: window.wgULS("回退到$3在$2时编辑的修订版本$1（Popups）", "還原到$3在$2時製作的修訂版本$1（Popups）"),
  defaultpopupRmDabLinkSummary: window.wgULS("移除到消歧义页[[%s]]的链接（Popups）", "移除到消歧義頁[[%s]]的連結（Popups）"),
  Redirects: window.wgULS("重定向", "重定向"),
  // as in Redirects to ...
  // " to ": window.wgULS( "到","到" ),
  // as in Redirects to ...
  "Bypass redirect": window.wgULS("忽略重定向", "忽略重新導向"),
  "Fix this redirect": window.wgULS("修复重定向", "修復重新導向"),
  disambig: window.wgULS("消歧义", "消歧義"),
  // /// add or remove dab etc.
  disambigHint: window.wgULS("消歧义这个链接到 [[%s]]", "消歧義這個連結到 [[%s]]"),
  "Click to disambiguate this link to:": window.wgULS("点击以消歧义这个链接到：", "點擊以消歧義這個連結到："),
  "remove this link": window.wgULS("移除链接", "移除連結"),
  "remove all links to this page from this article": window.wgULS("移除此条目到这页的所有链接", "移除此條目到這頁的所有連結"),
  "remove all links to this disambig page from this article": window.wgULS("移除此条目到这消歧义的所有链接", "移除此條目到這消歧義的所有連結"),
  mainlink: window.wgULS("主链接", "主連結"),
  // /// links, watch, unwatch
  wikiLink: window.wgULS("个内部链接", "个內部連結"),
  wikiLinks: window.wgULS("个内部链接", "个內部連結"),
  "links here": window.wgULS("链入", "鏈入"),
  whatLinksHere: window.wgULS("链入页面", "鏈入頁面"),
  "what links here": window.wgULS("链入页面", "鏈入頁面"),
  WhatlinkshereHint: window.wgULS("显示链接到 %s 的页面", "顯示連結到 %s 的頁面"),
  unwatchShort: window.wgULS("取消", "取消"),
  watchThingy: window.wgULS("监视", "監視"),
  // called watchThingy because {}.watch is a function
  watchHint: window.wgULS("加入 %s 到我的监视列表", "加入 %s 到我的監視列表"),
  unwatchHint: window.wgULS("从我的监视列表移除 %s", "從我的監視列表移除 %s"),
  "Only found one editor: %s made %s edits": window.wgULS("仅找到一位编者：%s 制造了 %s 次编辑", "僅找到一位編者：%s 製造了 %s 次編輯"),
  "%s seems to be the last editor to the page %s": window.wgULS("%s 看上去是 %s 这页的最后一位编者", "%s 看上去是 %s 這頁的最後一位編者"),
  rss: window.wgULS("RSS", "RSS"),
  // diff previews
  "Diff truncated for performance reasons": window.wgULS("出于性能考虑，差异已被截断", "出於效能考慮，差異已被截斷"),
  "Old revision": window.wgULS("旧版本", "舊版本"),
  "New revision": window.wgULS("新版本", "新版本"),
  "Something went wrong :-(": window.wgULS("出问题了 :-(", "出問題了 :-("),
  "Empty revision, maybe non-existent": window.wgULS("空的修订，可能并不存在", "空的修訂，可能並不存在"),
  "Unknown date": window.wgULS("未知日期", "未知日期"),
  // other special previews
  "Empty category": window.wgULS("空的分类", "空的分類"),
  "Category members (%s shown)": window.wgULS("分类成员（%s 显示）", "分類成員（%s 顯示）"),
  "No image links found": window.wgULS("未找到文件链接", "未找到檔案連結"),
  "File links": window.wgULS("文件链接", "檔案連結"),
  "not commons": window.wgULS("维基共享中无此名称的文件。", "維基共享中無此名稱的檔案。"),
  "commons only": window.wgULS("此文件来自维基共享。", "此檔案來自維基共享。"),
  "No image found": window.wgULS("找不到文件", "找不到檔案"),
  "commons dupe": window.wgULS("维基共享中存在此文件的副本。", "維基共享中存在此檔案的副本。"),
  "commons conflict": window.wgULS("维基共享中存在此文件名称不同的副本。", "維基共享中存在此檔名稱不同的副本。"),
  // user-related actions and info
  user: window.wgULS("用户", "使用者"),
  // /// user page, talk, email, space
  "user&nbsp;page": window.wgULS("用户页", "使用者頁"),
  "user talk": window.wgULS("用户讨论", "使用者對話"),
  "edit user talk": window.wgULS("编辑用户讨论", "編輯使用者對話"),
  "leave comment": window.wgULS("留言", "留言"),
  email: window.wgULS("电邮", "電郵"),
  "email user": window.wgULS("电邮用户", "電郵使用者"),
  EmailuserHint: window.wgULS("给 %s 发送电子邮件", "給 %s 發送電子郵件"),
  space: window.wgULS("子页面", "子頁面"),
  // short form for userSpace link
  PrefixindexHint: window.wgULS("显示 %s 的用户页子页面", "顯示 %s 的使用者頁子頁面"),
  count: window.wgULS("统计", "統計"),
  // /// contributions, tree, log
  "edit counter": window.wgULS("编辑次数", "編輯次數"),
  katelinkHint: window.wgULS("%s 的编辑次数", "%s 的編輯次數"),
  contribs: window.wgULS("贡献", "貢獻"),
  contributions: window.wgULS("贡献", "貢獻"),
  deletedContribs: window.wgULS("已删除的贡献", "已刪除的貢獻"),
  ContributionsHint: window.wgULS("%s 的用户贡献", "%s 的使用者貢獻"),
  tree: window.wgULS("树", "樹"),
  contribsTreeHint: window.wgULS("根据名字空间查看 %s 的贡献", "根據命名空間檢視 %s 的貢獻"),
  log: window.wgULS("日志", "日誌"),
  "user log": window.wgULS("用户日志", "使用者日誌"),
  userLogHint: window.wgULS("显示 %s 的用户日志", "顯示 %s 的使用者日誌"),
  unblockShort: window.wgULS("解除", "解除"),
  block: window.wgULS("封禁", "封鎖"),
  "block user": window.wgULS("封禁用户", "封鎖使用者"),
  IpblocklistHint: window.wgULS("解封 %s", "解封 %s"),
  BlockipHint: window.wgULS("封禁 %s", "封鎖 %s"),
  "block log": window.wgULS("封禁日志", "封鎖日誌"),
  blockLogHint: window.wgULS("显示 %s 的封禁日志", "顯示 %s 的封鎖日誌"),
  protectLogHint: window.wgULS("显示 %s 的保护日志", "顯示 %s 的保護日誌"),
  pageLogHint: window.wgULS("显示 %s 的日志", "顯示 %s 的日誌"),
  deleteLogHint: window.wgULS("显示 %s 的删除日志", "顯示 %s 的刪除日誌"),
  "Invalid %s %s": window.wgULS("选项 %s 不可用：%s", "選項 %s 不可用：%s"),
  m: "小",
  // Autoediting
  "Enter a non-empty edit summary or press cancel to abort": window.wgULS("输入编辑摘要，或按取消中止操作", "輸入編輯摘要，或按取消中止操作"),
  "Failed to get revision information, please edit manually.\n\n": window.wgULS("获取修订版本信息失败，请手动修改。\n\n", "獲取修訂版本資訊失敗，請手動修改。\n\n"),
  "The %s button has been automatically clicked. Please wait for the next page to load.": window.wgULS("按钮 %s 已被自动点击，请等待下一个页面加载。", "按鈕 %s 已被自動點擊，請等待下一個頁面載入。"),
  "Could not find button %s. Please check the settings in your javascript file.": window.wgULS("找不到按钮 %s，请检查您 JavaScript 文件中的设置。", "找不到按鈕 %s，請檢查您 JavaScript 檔案中的設定。"),
  // Popups setup
  "Open full-size image": window.wgULS("查看全尺寸图像", "檢視全尺寸影像"),
  // 以下内容由 AnnAngela 补正
  bingSearchHint: window.wgULS("在 Bing 上搜索“%s”", "在 bing 上搜尋「%s」"),
  "enable previews": window.wgULS("启用预览", "啟用預覽"),
  "show preview": window.wgULS("禁用预览", "禁用預覽"),
  historyfeedHint: window.wgULS("该页面的近期更改 RSS feed", "該頁面的近期更改 RSS feed"),
  "send thanks": window.wgULS("发送感谢", "傳送感謝"),
  ThanksHint: window.wgULS("向该用户发送一封感谢消息", "向該使用者傳送一封感謝訊息"),
  "mark patrolled": window.wgULS("标记为已巡查", "標記為已巡查"),
  markpatrolledHint: window.wgULS("标记该编辑为已巡查", "標記該編輯為已巡查"),
  "Could not marked this edit as patrolled": window.wgULS("无法标记该编辑为已巡查", "無法標記該編輯為已巡查"),
  defaultpopupReviewedSummary: window.wgULS("标记从版本%s到%s间的编辑为已巡查", "標記從版本%s到%s間的編輯為已巡查"),
  "Image from Commons": window.wgULS("来自维基共享的图片", "來自維基共用的圖片"),
  "Description page": window.wgULS("图片描述页", "圖片描述頁"),
  "Alt text:": window.wgULS("替换文本（Alt）：", "替換文字（Alt）："),
  revdel: window.wgULS("历史版本被隐藏", "歷史版本被隱藏"),
  DeletedcontributionsHint: window.wgULS("用户%s的被删除编辑次数", "使用者%s的被刪除編輯次數"),
  "No backlinks found": window.wgULS("找不到链入页面", "找不到鏈入頁面"),
  " and more": window.wgULS("以及其他页面", "以及其他頁面"),
  "Download preview data": window.wgULS("下载预览数据", "下載預覽資料"),
  "Not a registered username": window.wgULS("非已注册的用户", "非已註冊的使用者"),
  BLOCKED: window.wgULS("被封禁", "被封鎖"),
  "Has blocks": window.wgULS("被部分封禁", "被部分封鎖"),
  " edits since: ": window.wgULS("次编辑，注册日期为", "次編輯，註冊日期為"),
  "last edit on ": window.wgULS("最后一次编辑于", "最後一次編輯於"),
  EmailUserHint: window.wgULS("给 %s 发送电子邮件", "給 %s 發送電子郵件"),
  RANGEBLOCKED: window.wgULS("IP段被封禁", "IP段被封鎖"),
  "IP user": window.wgULS("IP用户", "IP使用者"),
  "♀": "♀",
  "♂": "♂",
  HIDDEN: window.wgULS("全域隐藏", "全域隱藏"),
  LOCKED: window.wgULS("全域锁定", "全域鎖定"),
  "Invalid user": window.wgULS("非法用户名", "非法使用者名稱"),
  diff: window.wgULS("差异", "差異"),
  " to ": "至",
  autoedit_version: "np20140416",
  PrefixIndexHint: window.wgULS("显示用户%s的子页面", "顯示使用者%s的子頁面"),
  nullEditSummary: window.wgULS("进行一次零编辑", "進行一次零編輯"),
  // 用户组名称从系统消息获取
  "group-no-autoconfirmed": window.wgULS("非自动确认用户", "非自動確認使用者"),
  separator: "、",
  comma: "，"
};
//! src/Navigation_popups/modules/core.js
var popups = () => {
  const pg = {
    api: {},
    re: {},
    ns: {},
    string: {},
    wiki: {},
    user: {},
    misc: {},
    option: {},
    optionDefault: {},
    flag: {},
    cache: {},
    structures: {},
    timer: {},
    counter: {},
    current: {},
    fn: {},
    endoflist: null
  };
  if (window.pg && !(window.pg instanceof HTMLElement)) {
    return;
  }
  window.pg = pg;
  const setupTooltips = (container, remove, force, popData) => {
    log("setupTooltips, container=".concat(container, ", remove=").concat(remove));
    if (!container) {
      if (getValueOf("popupOnEditSelection") && document && document.editform && document.editform.wpTextbox1) {
        document.editform.wpTextbox1.onmouseup = doSelectionPopup;
      }
      container = defaultPopupsContainer();
    }
    if (!remove && !force && container.ranSetupTooltipsAlready) {
      return;
    }
    container.ranSetupTooltipsAlready = !remove;
    const anchors = container.querySelectorAll("a");
    setupTooltipsLoop(anchors, 0, 250, 100, remove, popData);
  };
  const defaultPopupsContainer = () => {
    if (getValueOf("popupOnlyArticleLinks")) {
      return document.querySelector(".skin-vector-2022 .vector-body") || document.querySelector("#mw_content") || document.querySelector("#content") || document.querySelector("#article") || document;
    }
    return document;
  };
  const setupTooltipsLoop = function setupTooltipsLoop2(anchors, begin, howmany, sleep, remove, popData, ...args) {
    log(simplePrintf("setupTooltipsLoop(%s,%s,%s,%s,%s)", [anchors, begin, howmany, sleep, remove, popData, ...args]));
    const finish = begin + howmany;
    const loopend = Math.min(finish, anchors.length);
    let j = loopend - begin;
    log("setupTooltips: anchors.length=".concat(anchors.length, ", begin=").concat(begin, ", howmany=").concat(howmany, ", loopend=").concat(loopend, ", remove=").concat(remove));
    const doTooltip = remove ? removeTooltip : addTooltip;
    if (j > 0) {
      do {
        const a = anchors[loopend - j];
        if (a === void 0 || !a || !a.href) {
          log("got null anchor at index ".concat(loopend) - j);
          continue;
        }
        doTooltip(a, popData);
      } while (--j);
    }
    if (finish < anchors.length) {
      setTimeout(() => {
        setupTooltipsLoop2(anchors, finish, howmany, sleep, remove, popData);
      }, sleep);
    } else {
      if (!remove && !getValueOf("popupTocLinks")) {
        rmTocTooltips();
      }
      pg.flag.finishedLoading = true;
    }
  };
  const rmTocTooltips = () => {
    const toc = document.querySelector("#toc");
    if (toc) {
      const tocLinks = toc.querySelectorAll("a");
      const tocLen = tocLinks.length;
      for (let j = 0; j < tocLen; ++j) {
        removeTooltip(tocLinks[j], true);
      }
    }
  };
  const addTooltip = (a, popData) => {
    if (!isPopupLink(a)) {
      return;
    }
    a.onmouseover = mouseOverWikiLink;
    a.onmouseout = mouseOutWikiLink;
    a.onmousedown = killPopup;
    a.hasPopup = true;
    a.popData = popData;
  };
  const removeTooltip = (a) => {
    if (!a.hasPopup) {
      return;
    }
    a.onmouseover = null;
    a.onmouseout = null;
    if (a.originalTitle) {
      a.title = a.originalTitle;
    }
    a.hasPopup = false;
  };
  const removeTitle = (a) => {
    a.originalTitle || (a.originalTitle = a.title);
    a.title = "";
  };
  const restoreTitle = (a) => {
    if (a.title || !a.originalTitle) {
      return;
    }
    a.title = a.originalTitle;
  };
  const registerHooks = (np) => {
    const popupMaxWidth = getValueOf("popupMaxWidth");
    if (typeof popupMaxWidth === "number") {
      const setMaxWidth = () => {
        np.mainDiv.style.maxWidth = "".concat(popupMaxWidth, "px");
        np.maxWidth = popupMaxWidth;
      };
      np.addHook(setMaxWidth, "unhide", "before");
    }
    np.addHook(addPopupShortcuts, "unhide", "after");
    np.addHook(rmPopupShortcuts, "hide", "before");
  };
  const removeModifierKeyListener = (a) => {
    document.removeEventListener("keydown", a.modifierKeyListener, false);
    document.removeEventListener("keyup", a.modifierKeyListener, false);
  };
  const mouseOverWikiLink = function mouseOverWikiLink3(evt) {
    if (!evt && window.event) {
      evt = window.event;
    }
    if (getValueOf("popupModifier")) {
      const action = getValueOf("popupModifierAction");
      const key = action === "disable" ? "keyup" : "keydown";
      const self = this;
      self.modifierKeyListener = (evt2) => {
        mouseOverWikiLink2(self, evt2);
      };
      document.addEventListener(key, self.modifierKeyListener, false);
    }
    return mouseOverWikiLink2(this, evt);
  };
  const footnoteTarget = (a) => {
    const aTitle = Title.fromAnchor(a);
    const anch = aTitle.anchor;
    if (!/^(cite_note-|_note-|endnote)/.test(anch)) {
      return false;
    }
    const lTitle = Title.fromURL(location.href);
    if (lTitle.toString(true) !== aTitle.toString(true)) {
      return false;
    }
    let el = document.querySelector("#".concat(anch));
    while (el && typeof el.nodeName === "string") {
      const nt = el.nodeName.toLowerCase();
      if (nt === "li") {
        return el;
      } else if (nt === "body") {
        return false;
      } else if (el.parentNode) {
        el = el.parentNode;
      } else {
        return false;
      }
    }
    return false;
  };
  const footnotePreview = (x, navpop) => {
    setPopupHTML("<hr>".concat(x.innerHTML), "popupPreview", navpop.idNumber);
  };
  const modifierPressed = (evt) => {
    const mod = getValueOf("popupModifier");
    if (!mod) {
      return false;
    }
    if (!evt && window.event) {
      evt = window.event;
    }
    return evt && mod && evt["".concat(mod.toLowerCase(), "Key")];
  };
  const isCorrectModifier = (_a, evt) => {
    if (!getValueOf("popupModifier")) {
      return true;
    }
    const action = getValueOf("popupModifierAction");
    return action === "enable" && modifierPressed(evt) || action === "disable" && !modifierPressed(evt);
  };
  const mouseOverWikiLink2 = (a, evt) => {
    if (!isCorrectModifier(a, evt)) {
      return;
    }
    if (getValueOf("removeTitles")) {
      removeTitle(a);
    }
    if (a === pg.current.link && a.navpopup && a.navpopup.isVisible()) {
      return;
    }
    pg.current.link = a;
    if (getValueOf("simplePopups") && !pg.option.popupStructure) {
      setDefault("popupStructure", "original");
    }
    const article = new Title().fromAnchor(a);
    pg.current.article = article;
    if (!a.navpopup) {
      a.navpopup = newNavpopup(a, article);
      pg.current.linksHash[a.href] = a.navpopup;
      pg.current.links.push(a);
    }
    if (a.navpopup.pending === null || a.navpopup.pending !== 0) {
      simplePopupContent(a, article);
    }
    a.navpopup.showSoonIfStable(a.navpopup.delay);
    clearInterval(pg.timer.checkPopupPosition);
    pg.timer.checkPopupPosition = setInterval(checkPopupPosition, 600);
    if (getValueOf("simplePopups") && getValueOf("popupPreviewButton") && !a.simpleNoMore) {
      const d = document.createElement("div");
      d.className = "popupPreviewButtonDiv";
      const s = document.createElement("span");
      d.append(s);
      s.className = "popupPreviewButton";
      s["on".concat(getValueOf("popupPreviewButtonEvent"))] = () => {
        a.simpleNoMore = true;
        d.style.display = "none";
        nonsimplePopupContent(a, article);
      };
      s.innerHTML = popupString("show preview");
      setPopupHTML(d, "popupPreview", a.navpopup.idNumber);
    }
    if (a.navpopup.pending !== 0) {
      nonsimplePopupContent(a, article);
    }
  };
  const simplePopupContent = (a, article) => {
    a.navpopup.hasPopupMenu = false;
    a.navpopup.setInnerHTML(popupHTML(a));
    fillEmptySpans({
      navpopup: a.navpopup
    });
    if (getValueOf("popupDraggable")) {
      let dragHandle = getValueOf("popupDragHandle") || null;
      if (dragHandle && dragHandle !== "all") {
        dragHandle += a.navpopup.idNumber;
      }
      setTimeout(() => {
        a.navpopup.makeDraggable(dragHandle);
      }, 150);
    }
    if (getValueOf("popupRedlinkRemoval") && a.className === "new") {
      setPopupHTML("<br>".concat(popupRedlinkHTML(article)), "popupRedlink", a.navpopup.idNumber);
    }
  };
  const debugData = (navpopup) => {
    if (getValueOf("popupDebugging") && navpopup.idNumber) {
      setPopupHTML("idNumber=".concat(navpopup.idNumber, ", pending=").concat(navpopup.pending), "popupError", navpopup.idNumber);
    }
  };
  const newNavpopup = (a, article) => {
    const navpopup = new Navpopup();
    navpopup.fuzz = 5;
    navpopup.delay = getValueOf("popupDelay") * 1e3;
    navpopup.idNumber = ++pg.idNumber;
    navpopup.parentAnchor = a;
    navpopup.parentPopup = a.popData && a.popData.owner;
    navpopup.article = article;
    registerHooks(navpopup);
    return navpopup;
  };
  const shouldShowNonSimple = (a) => {
    return !getValueOf("simplePopups") || a.simpleNoMore;
  };
  const shouldShow = (a, option) => {
    if (shouldShowNonSimple(a)) {
      return getValueOf(option);
    }
    return window[option] !== void 0 && window[option];
  };
  const nonsimplePopupContent = (a, article) => {
    let diff2;
    let history;
    const params = parseParams(a.href);
    const oldid = params.oldid === void 0 ? null : params.oldid;
    if (shouldShow(a, "popupPreviewDiffs")) {
      ({
        diff: diff2
      } = params);
    }
    if (shouldShow(a, "popupPreviewHistory")) {
      history = params.action === "history";
    }
    a.navpopup.pending = 0;
    const referenceElement = footnoteTarget(a);
    if (referenceElement) {
      footnotePreview(referenceElement, a.navpopup);
    } else if (diff2 || diff2 === 0) {
      loadDiff(article, oldid, diff2, a.navpopup);
    } else if (history) {
      loadAPIPreview("history", article, a.navpopup);
    } else if (shouldShowNonSimple(a) && pg.re.contribs.test(a.href)) {
      loadAPIPreview("contribs", article, a.navpopup);
    } else if (shouldShowNonSimple(a) && pg.re.backlinks.test(a.href)) {
      loadAPIPreview("backlinks", article, a.navpopup);
    } else if (
      // FIXME should be able to get all preview combinations with options
      article.namespaceId() === pg.nsImageId && (shouldShow(a, "imagePopupsForImages") || !anchorContainsImage(a))
    ) {
      loadAPIPreview("imagepagepreview", article, a.navpopup);
      loadImage(article, a.navpopup);
    } else {
      if (article.namespaceId() === pg.nsCategoryId && shouldShow(a, "popupCategoryMembers")) {
        loadAPIPreview("category", article, a.navpopup);
      } else if ((article.namespaceId() === pg.nsUserId || article.namespaceId() === pg.nsUsertalkId) && shouldShow(a, "popupUserInfo")) {
        loadAPIPreview("userinfo", article, a.navpopup);
      }
      if (shouldShowNonSimple(a)) {
        startArticlePreview(article, oldid, a.navpopup);
      }
    }
  };
  const pendingNavpopTask = (navpop) => {
    if (navpop && navpop.pending === null) {
      navpop.pending = 0;
    }
    ++navpop.pending;
    debugData(navpop);
  };
  const completedNavpopTask = (navpop) => {
    if (navpop && navpop.pending) {
      --navpop.pending;
    }
    debugData(navpop);
  };
  const startArticlePreview = (article, oldid, navpop) => {
    navpop.redir = 0;
    loadPreview(article, oldid, navpop);
  };
  const loadPreview = (article, oldid, navpop) => {
    if (!navpop.redir) {
      navpop.originalArticle = article;
    }
    article.oldid = oldid;
    loadAPIPreview("revision", article, navpop);
  };
  const loadPreviewFromRedir = (redirMatch, navpop) => {
    const target = new Title().fromWikiText(redirMatch[2]);
    if (navpop.article.anchor) {
      target.anchor = navpop.article.anchor;
    }
    navpop.redir++;
    navpop.redirTarget = target;
    const warnRedir = redirLink(target, navpop.article);
    setPopupHTML(warnRedir, "popupWarnRedir", navpop.idNumber);
    navpop.article = target;
    fillEmptySpans({
      redir: true,
      redirTarget: target,
      navpopup: navpop
    });
    return loadPreview(target, null, navpop);
  };
  const insertPreview = (download) => {
    if (!download.owner) {
      return;
    }
    const redirMatch = pg.re.redirect.exec(download.data);
    if (download.owner.redir === 0 && redirMatch) {
      loadPreviewFromRedir(redirMatch, download.owner);
      return;
    }
    if (download.owner.visible || !getValueOf("popupLazyPreviews")) {
      insertPreviewNow(download);
    } else {
      const id = download.owner.redir ? "PREVIEW_REDIR_HOOK" : "PREVIEW_HOOK";
      download.owner.addHook(() => {
        insertPreviewNow(download);
        return true;
      }, "unhide", "after", id);
    }
  };
  const insertPreviewNow = (download) => {
    if (!download.owner) {
      return;
    }
    const wikiText = download.data;
    const navpop = download.owner;
    const art = navpop.redirTarget || navpop.originalArticle;
    makeFixDabs(wikiText, navpop);
    if (getValueOf("popupSummaryData")) {
      getPageInfo(wikiText, download);
      setPopupTrailer(getPageInfo(wikiText, download), navpop.idNumber);
    }
    let imagePage = "";
    imagePage = art.namespaceId() === pg.nsImageId ? art.toString() : getValidImageFromWikiText(wikiText);
    if (imagePage) {
      loadImage(Title.fromWikiText(imagePage), navpop);
    }
    if (getValueOf("popupPreviews")) {
      insertArticlePreview(download, art, navpop);
    }
  };
  const insertArticlePreview = (download, art, navpop) => {
    if (download && typeof download.data === "string") {
      if (art.namespaceId() === pg.nsTemplateId && getValueOf("popupPreviewRawTemplates")) {
        const h = '<hr><span style="font-family: monospace;">'.concat(download.data.entify().split(String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"], ["\\n"])))).join(String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<br>\n"], ["<br>\\n"])))), "</span>");
        setPopupHTML(h, "popupPreview", navpop.idNumber);
      } else {
        const p = prepPreviewmaker(download.data, art, navpop);
        p.showPreview();
      }
    }
  };
  const prepPreviewmaker = (data, article, navpop) => {
    const d = anchorize(data, article.anchorString());
    const urlBase = joinPath([pg.wiki.articlebase, article.urlString()]);
    const p = new Previewmaker(d, urlBase, navpop);
    return p;
  };
  const anchorize = (d, anch) => {
    if (!anch) {
      return d;
    }
    const anchRe = new RegExp("(?:=+\\s*".concat(literalizeRegex(anch).replace(/[ _]/g, "[_ ]"), "\\s*=+|\\{\\{\\s*").concat(getValueOf("popupAnchorRegexp"), "\\s*(?:\\|[^|}]*)*?\\s*").concat(literalizeRegex(anch), "\\s*(?:\\|[^}]*)?}})"));
    const match = d.match(anchRe);
    if (match && match.length > 0 && match[0]) {
      return d.slice(Math.max(0, d.indexOf(match[0])));
    }
    const lines = d.split("\n");
    for (let i = 0; i < lines.length; ++i) {
      lines[i] = lines[i].replace(/\[{2}([^\]|]*?\|)?(.*?)]{2}/g, "$2").replace(/'''([^'])/g, "$1").replace(/''([^'])/g, "$1");
      if (anchRe.test(lines[i])) {
        return d.split("\n").slice(i).join("\n").replace(/^[^=]*/, "");
      }
    }
    return d;
  };
  const killPopup = function killPopup2() {
    removeModifierKeyListener(this);
    if (getValueOf("popupShortcutKeys")) {
      rmPopupShortcuts();
    }
    if (!pg) {
      return;
    }
    if (pg.current.link && pg.current.link.navpopup) {
      pg.current.link.navpopup.banish();
    }
    pg.current.link = null;
    abortAllDownloads();
    if (pg.timer.checkPopupPosition) {
      clearInterval(pg.timer.checkPopupPosition);
      pg.timer.checkPopupPosition = null;
    }
    return true;
  };
  class Drag {
    constructor() {
      this.startCondition = null;
      this.endHook = null;
    }
    /**
     * Gets an event in a cross-browser manner.
     *
     * @param {Event} e
     * @private
     */
    static fixE(e) {
      if (e === void 0) {
        e = window.event;
      }
      if (e.layerX === void 0) {
        e.layerX = e.offsetX;
      }
      if (e.layerY === void 0) {
        e.layerY = e.offsetY;
      }
      return e;
    }
    /**
     * Initialises the Drag instance by telling it which object you want to be draggable, and what
     * you want to drag it by.
     *
     * @param {DOMElement} o The "handle" by which <code>oRoot</code> is dragged.
     * @param {DOMElement} oRoot The object which moves when <code>o</code> is dragged, or <code>o</code> if omitted.
     */
    init(o, oRoot) {
      const self = this;
      this.obj = o;
      o.onmousedown = (e) => {
        self.start(e);
      };
      o.dragging = false;
      o.popups_draggable = true;
      o.hmode = true;
      o.vmode = true;
      o.root = oRoot || o;
      if (Number.isNaN(Number.parseInt(o.root.style.left, 10))) {
        o.root.style.left = "0px";
      }
      if (Number.isNaN(Number.parseInt(o.root.style.top, 10))) {
        o.root.style.top = "0px";
      }
      o.root.onthisStart = () => {
      };
      o.root.onthisEnd = () => {
      };
      o.root.onthis = () => {
      };
    }
    /**
     * Starts the drag.
     *
     * @private
     * @param {Event} e
     */
    start(e) {
      const o = this.obj;
      e = Drag.fixE(e);
      if (this.startCondition && !this.startCondition(e)) {
        return;
      }
      const y = Number.parseInt(o.vmode ? o.root.style.top : o.root.style.bottom, 10);
      const x = Number.parseInt(o.hmode ? o.root.style.left : o.root.style.right, 10);
      o.root.onthisStart(x, y);
      o.lastMouseX = e.clientX;
      o.lastMouseY = e.clientY;
      const self = this;
      o.onmousemoveDefault = document.onmousemove;
      o.dragging = true;
      document.onmousemove = (e2) => {
        self.drag(e2);
      };
      document.onmouseup = (e2) => {
        self.end(e2);
      };
      return false;
    }
    /**
     * Does the drag.
     *
     * @param {Event} e
     * @private
     */
    drag(e) {
      e = Drag.fixE(e);
      const o = this.obj;
      const ey = e.clientY;
      const ex = e.clientX;
      const y = Number.parseInt(o.vmode ? o.root.style.top : o.root.style.bottom, 10);
      const x = Number.parseInt(o.hmode ? o.root.style.left : o.root.style.right, 10);
      const nx = x + (ex - o.lastMouseX) * (o.hmode ? 1 : -1);
      const ny = y + (ey - o.lastMouseY) * (o.vmode ? 1 : -1);
      this.obj.root.style[o.hmode ? "left" : "right"] = "".concat(nx, "px");
      this.obj.root.style[o.vmode ? "top" : "bottom"] = "".concat(ny, "px");
      this.obj.lastMouseX = ex;
      this.obj.lastMouseY = ey;
      this.obj.root.onthis(nx, ny);
      return false;
    }
    /**
     * Ends the drag.
     *
     * @private
     */
    end() {
      document.onmousemove = this.obj.onmousemoveDefault;
      document.onmouseup = null;
      this.obj.dragging = false;
      if (this.endHook) {
        this.endHook(Number.parseInt(this.obj.root.style[this.obj.hmode ? "left" : "right"], 10), Number.parseInt(this.obj.root.style[this.obj.vmode ? "top" : "bottom"], 10));
      }
    }
  }
  pg.structures.original = {};
  pg.structures.original.popupLayout = () => {
    return ["popupError", "popupImage", "popupTopLinks", "popupTitle", "popupUserData", "popupData", "popupOtherLinks", "popupRedir", ["popupWarnRedir", "popupRedirTopLinks", "popupRedirTitle", "popupRedirData", "popupRedirOtherLinks"], "popupMiscTools", ["popupRedlink"], "popupPrePreviewSep", "popupPreview", "popupSecondPreview", "popupPreviewMore", "popupPostPreview", "popupFixDab"];
  };
  pg.structures.original.popupRedirSpans = () => {
    return ["popupRedir", "popupWarnRedir", "popupRedirTopLinks", "popupRedirTitle", "popupRedirData", "popupRedirOtherLinks"];
  };
  pg.structures.original.popupTitle = (x) => {
    log("defaultstructure.popupTitle");
    if (!getValueOf("popupNavLinks")) {
      return navlinkStringToHTML("<b><<mainlink>></b>", x.article, x.params);
    }
    return "";
  };
  pg.structures.original.popupTopLinks = (x) => {
    log("defaultstructure.popupTopLinks");
    if (getValueOf("popupNavLinks")) {
      return navLinksHTML(x.article, x.hint, x.params);
    }
    return "";
  };
  pg.structures.original.popupImage = (x) => {
    log("original.popupImage, x.article=".concat(x.article, ", x.navpop.idNumber=").concat(x.navpop.idNumber));
    return imageHTML(x.article, x.navpop.idNumber);
  };
  pg.structures.original.popupRedirTitle = pg.structures.original.popupTitle;
  pg.structures.original.popupRedirTopLinks = pg.structures.original.popupTopLinks;
  const copyStructure = (oldStructure, newStructure) => {
    pg.structures[newStructure] = {};
    for (const prop in pg.structures[oldStructure]) {
      if (!Object.hasOwn(pg.structures[oldStructure], prop)) {
        continue;
      }
      pg.structures[newStructure][prop] = pg.structures[oldStructure][prop];
    }
  };
  copyStructure("original", "nostalgia");
  pg.structures.nostalgia.popupTopLinks = (x) => {
    let str = "";
    str += "<b><<mainlink|shortcut= >></b>";
    str += "if(user){<br><<contribs|shortcut=c>>";
    str += "if(wikimedia){*<<count|shortcut=#>>}";
    str += "if(ipuser){}else{*<<email|shortcut=E>>}if(admin){*<<block|shortcut=b>>}}";
    const editstr = "<<edit|shortcut=e>>";
    const editOldidStr = "if(oldid){<<editOld|shortcut=e>>|<<revert|shortcut=v|rv>>|<<edit|cur>>}else{".concat(editstr, "}");
    const historystr = "<<history|shortcut=h>>";
    const watchstr = "<<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>>";
    str += "<br>if(talk){".concat(editOldidStr, "|<<new|shortcut=+>>*").concat(historystr, "*").concat(watchstr, "*<b><<article|shortcut=a>></b>|<<editArticle|edit>>}else{").concat(
      // not a talk page
      editOldidStr,
      "*"
    ).concat(historystr, "*").concat(watchstr, "*<b><<talk|shortcut=t>></b>|<<editTalk|edit>>|<<newTalk|shortcut=+|new>>}");
    str += "<br><<whatLinksHere|shortcut=l>>*<<relatedChanges|shortcut=r>>";
    str += "if(admin){<br>}else{*}<<move|shortcut=m>>";
    str += "if(admin){*<<unprotect|unprotectShort>>|<<protect|shortcut=p>>*<<undelete|undeleteShort>>|<<delete|shortcut=d>>}";
    return navlinkStringToHTML(str, x.article, x.params);
  };
  pg.structures.nostalgia.popupRedirTopLinks = pg.structures.nostalgia.popupTopLinks;
  copyStructure("original", "fancy");
  pg.structures.fancy.popupTitle = (x) => {
    return navlinkStringToHTML("<font size=+0><<mainlink>></font>", x.article, x.params);
  };
  pg.structures.fancy.popupTopLinks = (x) => {
    const hist = "<<history|shortcut=h|hist>>|<<lastEdit|shortcut=/|last>>|<<editors|shortcut=E|eds>>";
    const watch = "<<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>>";
    const move = "<<move|shortcut=m|move>>";
    return navlinkStringToHTML("if(talk){<<edit|shortcut=e>>|<<new|shortcut=+|+>>*".concat(hist, "*<<article|shortcut=a>>|<<editArticle|edit>>*").concat(watch, "*").concat(move, "}else{<<edit|shortcut=e>>*").concat(hist, "*<<talk|shortcut=t|>>|<<editTalk|edit>>|<<newTalk|shortcut=+|new>>*").concat(watch, "*").concat(move, "}<br>"), x.article, x.params);
  };
  pg.structures.fancy.popupOtherLinks = (x) => {
    const admin = "<<unprotect|unprotectShort>>|<<protect|shortcut=p>>*<<undelete|undeleteShort>>|<<delete|shortcut=d|del>>";
    let user = "<<contribs|shortcut=c>>if(wikimedia){|<<count|shortcut=#|#>>}";
    user += "if(ipuser){|<<arin>>}else{*<<email|shortcut=E|".concat(popupString("email"), ">>}if(admin){*<<block|shortcut=b>>}");
    const normal = "<<whatLinksHere|shortcut=l|links here>>*<<relatedChanges|shortcut=r|related>>";
    return navlinkStringToHTML("<br>if(user){".concat(user, "*}if(admin){").concat(admin, "if(user){<br>}else{*}}").concat(normal), x.article, x.params);
  };
  pg.structures.fancy.popupRedirTitle = pg.structures.fancy.popupTitle;
  pg.structures.fancy.popupRedirTopLinks = pg.structures.fancy.popupTopLinks;
  pg.structures.fancy.popupRedirOtherLinks = pg.structures.fancy.popupOtherLinks;
  copyStructure("fancy", "fancy2");
  pg.structures.fancy2.popupTopLinks = // hack out the <br> at the end and put one at the beginning
  (x) => {
    return "<br>".concat(pg.structures.fancy.popupTopLinks(x).replace(/<br>$/i, ""));
  };
  pg.structures.fancy2.popupLayout = () => {
    return ["popupError", "popupImage", "popupTitle", "popupUserData", "popupData", "popupTopLinks", "popupOtherLinks", "popupRedir", ["popupWarnRedir", "popupRedirTopLinks", "popupRedirTitle", "popupRedirData", "popupRedirOtherLinks"], "popupMiscTools", ["popupRedlink"], "popupPrePreviewSep", "popupPreview", "popupSecondPreview", "popupPreviewMore", "popupPostPreview", "popupFixDab"];
  };
  copyStructure("original", "menus");
  pg.structures.menus.popupLayout = () => {
    return ["popupError", "popupImage", "popupTopLinks", "popupTitle", "popupOtherLinks", "popupRedir", ["popupWarnRedir", "popupRedirTopLinks", "popupRedirTitle", "popupRedirData", "popupRedirOtherLinks"], "popupUserData", "popupData", "popupMiscTools", ["popupRedlink"], "popupPrePreviewSep", "popupPreview", "popupSecondPreview", "popupPreviewMore", "popupPostPreview", "popupFixDab"];
  };
  pg.structures.menus.popupTopLinks = (x, shorter) => {
    const s = [];
    const dropdiv = '<div class="popup_drop">';
    const enddiv = "</div>";
    let hist = "<<history|shortcut=h>>";
    if (!shorter) {
      hist = "<menurow>".concat(hist, "|<<historyfeed|rss>>|<<editors|shortcut=E>></menurow>");
    }
    const lastedit = "<<lastEdit|shortcut=/|show last edit>>";
    const thank = "if(diff){<<thank|send thanks>>}";
    const jsHistory = "<<lastContrib|last set of edits>><<sinceMe|changes since mine>>";
    const linkshere = "<<whatLinksHere|shortcut=l|what links here>>";
    const related = "<<relatedChanges|shortcut=r|related changes>>";
    const search = "<menurow><<search|shortcut=s>></menurow>";
    const watch = "<menurow><<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>></menurow>";
    const protect = "<menurow><<unprotect|unprotectShort>>|<<protect|shortcut=p>>|<<protectlog|log>></menurow>";
    const del = "<menurow><<undelete|undeleteShort>>|<<delete|shortcut=d>>|<<deletelog|log>></menurow>";
    const move = "<<move|shortcut=m|move page>>";
    const nullPurge = "<menurow><<nullEdit|shortcut=n|null edit>>|<<purge|shortcut=P>></menurow>";
    const viewOptions = "<menurow><<view|shortcut=v>>|<<render|shortcut=S>>|<<raw>></menurow>";
    const editRow = "if(oldid){<menurow><<edit|shortcut=e>>|<<editOld|shortcut=e|this&nbsp;revision>></menurow><menurow><<revert|shortcut=v>>|<<undo>></menurow>}else{<<edit|shortcut=e>>}";
    const markPatrolled = "if(rcid){<<markpatrolled|mark patrolled>>}";
    const newTopic = "if(talk){<<new|shortcut=+|new topic>>}";
    const protectDelete = "if(admin){".concat(protect).concat(del, "}");
    if (getValueOf("popupActionsMenu")) {
      s.push("<<mainlink>>*".concat(dropdiv).concat(menuTitle("actions")));
    } else {
      s.push("".concat(dropdiv, "<<mainlink>>"));
    }
    s.push("<menu>", editRow + markPatrolled + newTopic + hist + lastedit + thank);
    if (!shorter) {
      s.push(jsHistory);
    }
    s.push(move + linkshere + related);
    if (!shorter) {
      s.push(nullPurge + search);
    }
    if (!shorter) {
      s.push(viewOptions);
    }
    s.push("<hr>".concat(watch).concat(protectDelete), "<hr>if(talk){<<article|shortcut=a|view article>><<editArticle|edit article>>}else{<<talk|shortcut=t|talk page>><<editTalk|edit talk>><<newTalk|shortcut=+|new topic>>}</menu>".concat(enddiv));
    const email = "<<email|shortcut=E|email user>>";
    const contribs = "if(wikimedia){<menurow>}<<contribs|shortcut=c|contributions>>if(wikimedia){</menurow>}if(admin){<menurow><<deletedContribs>></menurow>}";
    s.push("if(user){*".concat(dropdiv).concat(menuTitle("user")), "<menu>", "<menurow><<userPage|shortcut=u|user&nbsp;page>>|<<userSpace|space>></menurow>", "<<userTalk|shortcut=t|user talk>><<editUserTalk|edit user talk>><<newUserTalk|shortcut=+|leave comment>>");
    if (shorter) {
      s.push("if(ipuser){}else{".concat(email, "}"));
    } else {
      s.push("if(ipuser){<<arin>>}else{".concat(email, "}"));
    }
    s.push("<hr>".concat(contribs, "<<userlog|shortcut=L|user log>>"), "if(wikimedia){<<count|shortcut=#|edit counter>>}", "if(admin){<menurow><<unblock|unblockShort>>|<<block|shortcut=b|block user>></menurow>}", "<<blocklog|shortcut=B|block log>>", "</menu>".concat(enddiv, "}"));
    if (getValueOf("popupSetupMenu") && !x.navpop.hasPopupMenu) {
      x.navpop.hasPopupMenu = true;
      s.push("*".concat(dropdiv).concat(menuTitle("popupsMenu"), "<menu>"), "<<togglePreviews|toggle previews>>", "<<purgePopups|reset>>", "<<disablePopups|disable>>", "</menu>".concat(enddiv));
    }
    return navlinkStringToHTML(s.join(""), x.article, x.params);
  };
  const menuTitle = (s) => {
    return '<a href="#" noPopup=1>'.concat(popupString(s), "</a>");
  };
  pg.structures.menus.popupRedirTitle = pg.structures.menus.popupTitle;
  pg.structures.menus.popupRedirTopLinks = pg.structures.menus.popupTopLinks;
  copyStructure("menus", "shortmenus");
  pg.structures.shortmenus.popupTopLinks = (x) => {
    return pg.structures.menus.popupTopLinks(x, true);
  };
  pg.structures.shortmenus.popupRedirTopLinks = pg.structures.shortmenus.popupTopLinks;
  pg.structures.lite = {};
  pg.structures.lite.popupLayout = () => {
    return ["popupTitle", "popupPreview"];
  };
  pg.structures.lite.popupTitle = (x) => {
    log("".concat(x.article, ": structures.lite.popupTitle"));
    return '<div><span class="popup_mainlink"><b>'.concat(x.article.toString(), "</b></span></div>");
  };
  const substitute = (data, cmdBody) => {
    const fromRe = new RegExp(cmdBody.from, cmdBody.flags);
    return data.replace(fromRe, cmdBody.to);
  };
  const execCmds = (data, cmdList) => {
    var _iterator = _createForOfIteratorHelper(cmdList), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const element = _step.value;
        data = element.action(data, element);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return data;
  };
  const parseCmd = function parseCmd2(str) {
    if (str.length === 0) {
      return [];
    }
    let p = false;
    switch (str.charAt(0)) {
      case "s":
        p = parseSubstitute(str);
        break;
      default:
        return false;
    }
    if (p) {
      return [p, parseCmd2(p.remainder)];
    }
    return false;
  };
  const unEscape = (str, sep) => {
    return str.split("\\\\").join("\\").split("\\".concat(sep)).join(sep).split(String.raw(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n"], ["\\n"])))).join("\n");
  };
  const parseSubstitute = (str) => {
    let from;
    let to;
    let flags;
    let tmp;
    if (str.length < 4) {
      return false;
    }
    const sep = str.charAt(1);
    str = str.slice(2);
    tmp = skipOver(str, sep);
    if (tmp) {
      from = tmp.segment;
      str = tmp.remainder;
    } else {
      return false;
    }
    tmp = skipOver(str, sep);
    if (tmp) {
      to = tmp.segment;
      str = tmp.remainder;
    } else {
      return false;
    }
    flags = "";
    if (str.length > 0) {
      tmp = skipOver(str, ";") || skipToEnd(str, ";");
      if (tmp) {
        flags = tmp.segment;
        str = tmp.remainder;
      }
    }
    return {
      action: substitute,
      from,
      to,
      flags,
      remainder: str
    };
  };
  const skipOver = (str, sep) => {
    const endSegment = findNext(str, sep);
    if (endSegment < 0) {
      return false;
    }
    const segment = unEscape(str.slice(0, Math.max(0, endSegment)), sep);
    return {
      segment,
      remainder: str.slice(Math.max(0, endSegment + 1))
    };
  };
  const skipToEnd = (str, _sep) => {
    return {
      segment: str,
      remainder: ""
    };
  };
  const findNext = (str, ch) => {
    for (let i = 0; i < str.length; ++i) {
      if (str.charAt(i) === "\\") {
        i += 2;
      }
      if (str.charAt(i) === ch) {
        return i;
      }
    }
    return -1;
  };
  const setCheckbox = (param, box) => {
    const val = mw.util.getParamValue(param);
    if (val) {
      switch (val) {
        case "1":
        case "yes":
        case "true":
          box.checked = true;
          break;
        case "0":
        case "no":
        case "false":
          box.checked = false;
      }
    }
  };
  const autoEdit = function autoEdit4() {
    setupPopups(() => {
      if (mw.util.getParamValue("autoimpl") !== popupString("autoedit_version")) {
        return false;
      }
      if (mw.util.getParamValue("autowatchlist") && mw.util.getParamValue("actoken") === autoClickToken()) {
        pg.fn.modifyWatchlist(mw.util.getParamValue("title"), mw.util.getParamValue("action"));
      }
      if (!document.editform) {
        return false;
      }
      if (autoEdit4.alreadyRan) {
        return false;
      }
      autoEdit4.alreadyRan = true;
      const cmdString = mw.util.getParamValue("autoedit");
      if (cmdString) {
        try {
          const editbox = document.editform.wpTextbox1;
          const cmdList = parseCmd(cmdString);
          const input = editbox.value;
          const output = execCmds(input, cmdList);
          editbox.value = output;
        } catch {
          return;
        }
      }
      setCheckbox("autominor", document.editform.wpMinoredit);
      setCheckbox("autowatch", document.editform.wpWatchthis);
      const rvid = mw.util.getParamValue("autorv");
      if (rvid) {
        const url = "".concat(pg.wiki.apiwikibase, "?action=query&format=json&formatversion=2&prop=revisions&revids=").concat(rvid);
        startDownload(url, null, autoEdit2);
      } else {
        autoEdit2();
      }
    });
  };
  const autoEdit2 = (d) => {
    let summary = mw.util.getParamValue("autosummary");
    let summaryprompt = mw.util.getParamValue("autosummaryprompt");
    let summarynotice = "";
    if (d && d.data && mw.util.getParamValue("autorv")) {
      const s = getRvSummary(summary, d.data);
      if (s === false) {
        summaryprompt = true;
        summarynotice = popupString("Failed to get revision information, please edit manually.\n\n");
        summary = simplePrintf(summary, [mw.util.getParamValue("autorv"), "(unknown)", "(unknown)"]);
      } else {
        summary = s;
      }
    }
    if (summaryprompt) {
      const txt = summarynotice + popupString("Enter a non-empty edit summary or press cancel to abort");
      const response = prompt(txt, summary);
      if (response) {
        summary = response;
      } else {
        return;
      }
    }
    if (summary) {
      document.editform.wpSummary.value = summary;
    }
    setTimeout(autoEdit3, 100);
  };
  const autoClickToken = () => {
    return mw.user.sessionId();
  };
  const autoEdit3 = () => {
    if (mw.util.getParamValue("actoken") !== autoClickToken()) {
      return;
    }
    const btn = mw.util.getParamValue("autoclick");
    if (btn) {
      if (document.editform && document.editform[btn]) {
        const button = document.editform[btn];
        const msg = tprintf("The %s button has been automatically clicked. Please wait for the next page to load.", [button.value]);
        bannerMessage(msg);
        document.title = "(".concat(document.title, ")");
        button.click();
      } else {
        void mw.notify(tprintf("Could not find button %s. Please check the settings in your javascript file.", [btn]), {
          tag: "popups",
          type: "error"
        });
      }
    }
  };
  const bannerMessage = (s) => {
    const headings = document.querySelectorAll("h1");
    if (headings) {
      const div = document.createElement("div");
      div.innerHTML = "<font size=+1><b>".concat(pg.escapeQuotesHTML(s), "</b></font>");
      headings[0].parentNode.insertBefore(div, headings[0]);
    }
  };
  const getRvSummary = (template, json) => {
    try {
      const o = getJsObj(json);
      const [edit] = anyChild(o.query.pages).revisions;
      const timestamp = edit.timestamp.split(/[A-Z]/g).join(" ").replace(/^ *| *$/g, "");
      return simplePrintf(template, [edit.revid, timestamp, edit.userhidden ? "(hidden)" : edit.user]);
    } catch {
      return false;
    }
  };
  class Downloader {
    constructor(url) {
      if (typeof XMLHttpRequest !== "undefined") {
        this.http = new XMLHttpRequest();
      }
      this.url = url;
      this.id = null;
      this.lastModified = null;
      this.callbackFunction = null;
      this.onFailure = null;
      this.aborted = false;
      this.method = "GET";
      this.async = true;
    }
    /**
     * Submits the http request.
     *
     * @param {*} x
     */
    send(x) {
      if (!this.http) {
        return null;
      }
      return this.http.send(x);
    }
    /* Aborts the download, setting the <code>aborted</code> field to true. */
    abort() {
      if (!this.http) {
        return null;
      }
      this.aborted = true;
      return this.http.abort();
    }
    /** Returns the downloaded data. */
    getData() {
      if (!this.http) {
        return null;
      }
      return this.http.responseText;
    }
    /** Prepares the download. */
    setTarget() {
      if (!this.http) {
        return null;
      }
      this.http.open(this.method, this.url, this.async);
      this.http.setRequestHeader("Api-User-Agent", pg.api.userAgent);
    }
    /** Gets the state of the download. */
    getReadyState() {
      if (!this.http) {
        return null;
      }
      return this.http.readyState;
    }
    /**
     * Starts the download.
     * Note that setTarget {@source Downloader#setTarget} must be run first
     */
    start() {
      if (!this.http) {
        return;
      }
      const self = this;
      pg.misc.downloadsInProgress[this.id] = self;
      this.http.send(null);
    }
    /**
     * Gets the 'Last-Modified' date from the download headers.
     * Should be run after the download completes.
     * Returns <code>null</code> on failure.
     *
     * @return {Date}
     */
    getLastModifiedDate() {
      if (!this.http) {
        return null;
      }
      let lastmod;
      try {
        lastmod = this.http.getResponseHeader("Last-Modified");
      } catch {
      }
      if (lastmod) {
        return new Date(lastmod);
      }
      return null;
    }
    /**
     * Sets the callback function.
     *
     * @param {Function} f callback function, called as <code>f(this)</code> on success
     */
    setCallback(f) {
      if (!this.http) {
        return;
      }
      this.http.onreadystatechange = f;
    }
    getStatus() {
      if (!this.http) {
        return null;
      }
      return this.http.status;
    }
  }
  new Downloader();
  pg.misc.downloadsInProgress = {};
  const newDownload = function newDownload2(url, id, callback, onfailure) {
    const d = new Downloader(url);
    if (!d.http) {
      return "ohdear";
    }
    d.id = id;
    d.setTarget();
    onfailure || (onfailure = 2);
    const f = function() {
      if (d.getReadyState() === 4) {
        delete pg.misc.downloadsInProgress[this.id];
        try {
          if (d.getStatus() === 200) {
            d.data = d.getData();
            d.lastModified = d.getLastModifiedDate();
            callback(d);
          } else if (typeof onfailure === "number") {
            if (onfailure > 0) {
              newDownload2(url, id, callback, onfailure - 1);
            }
          } else if (typeof onfailure === "function") {
            onfailure(d, url, id, callback);
          }
        } catch {
        }
      }
    };
    d.setCallback(f);
    return d;
  };
  const fakeDownload = (url, id, callback, data, lastModified, owner) => {
    const d = newDownload(url, callback);
    d.owner = owner;
    d.id = id;
    d.data = data;
    d.lastModified = lastModified;
    return callback(d);
  };
  const startDownload = (url, id, callback) => {
    const d = newDownload(url, id, callback);
    if (typeof d === "string") {
      return d;
    }
    d.start();
    return d;
  };
  const abortAllDownloads = () => {
    for (const x in pg.misc.downloadsInProgress) {
      if (!Object.hasOwn(pg.misc.downloadsInProgress, x)) {
        continue;
      }
      try {
        pg.misc.downloadsInProgress[x].aborted = true;
        pg.misc.downloadsInProgress[x].abort();
        delete pg.misc.downloadsInProgress[x];
      } catch {
      }
    }
  };
  const Insta = {};
  const setupLivePreview = () => {
    let _b;
    Insta.conf = {
      baseUrl: "",
      user: {},
      wiki: {
        lang: pg.wiki.lang,
        interwiki: pg.wiki.interwiki,
        default_thumb_width: 180
      },
      paths: {
        articles: "".concat(pg.wiki.articlePath, "/"),
        // Only used for Insta previews with images. (not in popups)
        math: "/math/",
        images: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/",
        images_fallback: "//wm.zhongwen.wiki/commons/"
      },
      locale: {
        user: mw.config.get("wgFormattedNamespaces")[pg.nsUserId],
        image: mw.config.get("wgFormattedNamespaces")[pg.nsImageId],
        category: mw.config.get("wgFormattedNamespaces")[pg.nsCategoryId],
        // shouldn't be used in popup previews, i think
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      }
    };
    (_b = Insta.conf.user).name || (_b.name = "Qiuwen Baike contributors");
    Insta.conf.user.signature = "[[".concat(Insta.conf.locale.user, ":").concat(Insta.conf.user.name, "|").concat(Insta.conf.user.name, "]]");
    Insta.BLOCK_IMAGE = new RegExp("^\\[\\[(?:File|Image|".concat(Insta.conf.locale.image, "):.*?\\|.*?(?:frame|thumbnail|thumb|none|right|left|center)"), "i");
  };
  Insta.dump = function(from, to) {
    if (typeof from === "string") {
      from = document.querySelector("#".concat(from));
    }
    if (typeof to === "string") {
      to = document.querySelector("#".concat(to));
    }
    to.innerHTML = this.convert(from.value);
  };
  Insta.convert = (wiki) => {
    const ll = typeof wiki === "string" ? wiki.replace(/\r/g, "").split(/\n/) : wiki;
    let o = "";
    let p = 0;
    let r;
    const remain = () => {
      return ll.length;
    };
    const sh = () => {
      return ll.shift();
    };
    const ps = (s) => {
      o += s;
    };
    const f = function f2(...args) {
      let i = 1;
      const a = args;
      let [f3] = a;
      let o2 = "";
      let c;
      let p2;
      for (; i < a.length; i++) {
        if ((p2 = f3.indexOf("?")) + 1) {
          c = f3.charAt(p2 + 1) === "?" ? 1 : 0;
          i -= c;
          o2 += f3.slice(0, Math.max(0, p2)) + (c ? "?" : a[i]);
          f3 = f3.slice(p2 + 1 + c);
        } else {
          break;
        }
      }
      return o2 + f3;
    };
    const html_entities = (s) => {
      return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };
    const htmlescape_text = (s) => {
      return s.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/:/g, "&#58;").replace(/\[/g, "&#91;").replace(/]/g, "&#93;");
    };
    const htmlescape_attr = (s) => {
      return htmlescape_text(s).replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    };
    const str_imatch = (a, b) => {
      let i;
      let l;
      for (i = 0, l = Math.min(a.length, b.length); i < l; i++) {
        if (a.charAt(i) !== b.charAt(i)) {
          break;
        }
      }
      return i;
    };
    const compareLineStringOrReg = (c) => {
      return typeof c === "string" ? ll[0] && ll[0].slice(0, c.length) === c : r = ll[0] && ll[0].match(c);
    };
    const compareLineString = (c) => {
      return ll[0] === c;
    };
    const charAtPoint = (p2) => {
      return ll[0].charAt(p2);
    };
    const endl = (s) => {
      ps(s);
      sh();
    };
    const parse_list = () => {
      let prev = "";
      while (remain() && compareLineStringOrReg(/^([#*:;]+)(.*)$/)) {
        const l_match = r;
        sh();
        const ipos = str_imatch(prev, l_match[1]);
        for (let prevPos = prev.length - 1; prevPos >= ipos; prevPos--) {
          const pi = prev.charAt(prevPos);
          if (pi === "*") {
            ps("</ul>");
          } else if (pi === "#") {
            ps("</ol>");
          } else if (["", "*", "#"].indexOf(l_match[1].charAt(prevPos))) {
            ps("</dl>");
          }
        }
        for (let matchPos = ipos; matchPos < l_match[1].length; matchPos++) {
          const li = l_match[1].charAt(matchPos);
          if (li === "*") {
            ps("<ul>");
          } else if (li === "#") {
            ps("<ol>");
          } else if (["", "*", "#"].indexOf(prev.charAt(matchPos))) {
            ps("<dl>");
          }
        }
        switch (l_match[1].at(-1)) {
          case "*":
          case "#":
            ps("<li>".concat(parse_inline_nowiki(l_match[2])));
            break;
          case ";": {
            ps("<dt>");
            const dt_match = l_match[2].match(/(.*?)(:.*?)$/);
            if (dt_match) {
              ps(parse_inline_nowiki(dt_match[1]));
              ll.unshift(dt_match[2]);
            } else {
              ps(parse_inline_nowiki(l_match[2]));
            }
            break;
          }
          case ":":
            ps("<dd>".concat(parse_inline_nowiki(l_match[2])));
        }
        [, prev] = l_match;
      }
      for (let i = prev.length - 1; i >= 0; i--) {
        ps(f("</?>", prev.charAt(i) === "*" ? "ul" : prev.charAt(i) === "#" ? "ol" : "dl"));
      }
    };
    const parse_table = () => {
      endl(f("<table>", compareLineStringOrReg(/^{\|( .*)$/) ? r[1] : ""));
      for (; remain(); ) {
        if (compareLineStringOrReg("|")) {
          switch (charAtPoint(1)) {
            case "}":
              endl("</table>");
              return;
            case "-":
              endl(f("<tr>", compareLineStringOrReg(/\|-*(.*)/)[1]));
              break;
            default:
              parse_table_data();
          }
        } else if (compareLineStringOrReg("!")) {
          parse_table_data();
        } else {
          sh();
        }
      }
    };
    const parse_table_data = () => {
      let td_line;
      let match_i;
      const td_match = sh().match(/^(\|\+|\||!)((?:([^[|]*?)\|(?!\|))?(.*))$/);
      if (td_match[1] === "|+") {
        ps("<caption");
      } else {
        ps("<t".concat(td_match[1] === "|" ? "d" : "h"));
      }
      if (td_match[3]) {
        match_i = 4;
      } else {
        match_i = 2;
      }
      ps(">");
      if (td_match[1] === "|+") {
        ps(parse_inline_nowiki(td_match[match_i]));
      } else {
        td_line = td_match[match_i].split(td_match[1] === "|" ? "||" : /\|\||!!/);
        ps(parse_inline_nowiki(td_line.shift()));
        while (td_line.length > 0) {
          ll.unshift(td_match[1] + td_line.pop());
        }
      }
      let tc = 0;
      const td = [];
      while (remain()) {
        td.push(sh());
        if (compareLineStringOrReg("|")) {
          if (!tc) {
            break;
          } else if (charAtPoint(1) === "}") {
            tc--;
          }
        } else if (!tc && compareLineStringOrReg("!")) {
          break;
        } else if (compareLineStringOrReg("{|")) {
          tc++;
        }
      }
      if (td.length > 0) {
        ps(Insta.convert(td));
      }
    };
    const parse_pre = () => {
      ps("<pre>");
      do {
        endl("".concat(parse_inline_nowiki(ll[0].slice(1)), "\n"));
      } while (remain() && compareLineStringOrReg(" "));
      ps("</pre>");
    };
    const parse_block_image = () => {
      ps(parse_image(sh()));
    };
    const parse_image = (str) => {
      let tag = str.substring(str.indexOf(":") + 1, str.length - 2);
      let width;
      let attr = [];
      let filename;
      let caption = "";
      let thumb = 0;
      let frame = 0;
      let center = 0;
      let align = "";
      if (/\|/.test(tag)) {
        let nesting = 0;
        let last_attr;
        for (let i = tag.length - 1; i > 0; i--) {
          if (tag.charAt(i) === "|" && !nesting) {
            last_attr = tag.slice(i + 1);
            tag = tag.slice(0, Math.max(0, i));
            break;
          } else {
            switch (tag.slice(i - 1, i - 1 + 2)) {
              case "]]":
                nesting++;
                i--;
                break;
              case "[[":
                nesting--;
                i--;
            }
          }
        }
        attr = tag.split(/\s*\|\s*/);
        attr.push(last_attr);
        filename = attr.shift();
        let w_match;
        for (; attr.length > 0; attr.shift()) {
          w_match = attr[0].match(/^(\d*)(?:[px]*\d*)?px$/);
          if (w_match) {
            [, width] = w_match;
          } else {
            switch (attr[0]) {
              case "thumb":
              case "thumbnail":
                thumb = true;
                frame = true;
                break;
              case "frame":
                frame = true;
                break;
              case "none":
              case "right":
              case "left":
                center = false;
                [align] = attr;
                break;
              case "center":
                center = true;
                align = "none";
                break;
              default:
                if (attr.length === 1) {
                  [caption] = attr;
                }
            }
          }
        }
      } else {
        filename = tag;
      }
      return "";
    };
    const parse_inline_nowiki = (str) => {
      let start;
      let lastend = 0;
      let substart = 0;
      let nestlev = 0;
      let open;
      let close;
      let subloop;
      let html = "";
      while ((start = str.indexOf("<no".concat("wiki", ">"), substart)) !== -1) {
        html += parse_inline_wiki(str.substring(lastend, start));
        start += 8;
        substart = start;
        subloop = true;
        do {
          open = str.indexOf("<no".concat("wiki", ">"), substart);
          close = str.indexOf("</no".concat("wiki", ">"), substart);
          if (close <= open || open === -1) {
            if (close === -1) {
              return html + html_entities(str.slice(start));
            }
            substart = close + 9;
            if (nestlev) {
              nestlev--;
            } else {
              lastend = substart;
              html += html_entities(str.substring(start, lastend - 9));
              subloop = false;
            }
          } else {
            substart = open + 8;
            nestlev++;
          }
        } while (subloop);
      }
      return html + parse_inline_wiki(str.slice(lastend));
    };
    const parse_inline_images = (str) => {
      let start;
      let substart = 0;
      let nestlev = 0;
      let loop;
      let close;
      let open;
      let wiki2;
      let html;
      while ((start = str.indexOf("[[", substart)) !== -1) {
        if (new RegExp("^(Image|File|".concat(Insta.conf.locale.image, "):"), "i").test(str.slice(start + 2))) {
          loop = true;
          substart = start;
          do {
            substart += 2;
            close = str.indexOf("]]", substart);
            open = str.indexOf("[[", substart);
            if (close <= open || open === -1) {
              if (close === -1) {
                return str;
              }
              substart = close;
              if (nestlev) {
                nestlev--;
              } else {
                wiki2 = str.substring(start, close + 2);
                html = parse_image(wiki2);
                str = str.replace(wiki2, html);
                substart = start + html.length;
                loop = false;
              }
            } else {
              substart = open;
              nestlev++;
            }
          } while (loop);
        } else {
          break;
        }
      }
      return str;
    };
    const parse_inline_formatting = (str) => {
      let em;
      let st;
      let i;
      let li;
      let o2 = "";
      while ((i = str.indexOf("''", li)) + 1) {
        o2 += str.substring(li, i);
        li = i + 2;
        if (str.charAt(i + 2) === "'") {
          li++;
          st = !st;
          o2 += st ? "<strong>" : "</strong>";
        } else {
          em = !em;
          o2 += em ? "<em>" : "</em>";
        }
      }
      return o2 + str.slice(li);
    };
    const parse_inline_wiki = (str) => {
      str = parse_inline_images(str);
      str = parse_inline_formatting(str);
      str = str.replace(/<math>(.*?)<\/math>/gi, "");
      let date = /* @__PURE__ */ new Date();
      let minutes = date.getUTCMinutes();
      if (minutes < 10) {
        minutes = "0".concat(minutes);
      }
      date = f("?:?, ? ? ? (UTC)", date.getUTCHours(), minutes, date.getUTCDate(), Insta.conf.locale.months[date.getUTCMonth()], date.getUTCFullYear());
      return str.replace(/~{5}(?!~)/g, date).replace(/~{4}(?!~)/g, "".concat(Insta.conf.user.name, " ").concat(date)).replace(/~{3}(?!~)/g, Insta.conf.user.name).replace(new RegExp("\\[\\[:((?:".concat(Insta.conf.locale.category, "|Image|File|").concat(Insta.conf.locale.image, "|").concat(Insta.conf.wiki.interwiki, "):[^|]*?)\\]\\](\\w*)"), "gi"), (_$0, $1, $2) => {
        return f("<a href='?'>?</a>", Insta.conf.paths.articles + htmlescape_attr($1), htmlescape_text($1) + htmlescape_text($2));
      }).replace(new RegExp("\\[\\[(?:".concat(Insta.conf.locale.category, "|").concat(Insta.conf.wiki.interwiki, "):.*?\\]\\]"), "gi"), "").replace(new RegExp("\\[\\[:((?:".concat(Insta.conf.locale.category, "|Image|File|").concat(Insta.conf.locale.image, "|").concat(Insta.conf.wiki.interwiki, "):.*?)\\|([^\\]]+?)\\]\\](\\w*)"), "gi"), (_$0, $1, $2, $3) => {
        return f("<a href='?'>?</a>", Insta.conf.paths.articles + htmlescape_attr($1), htmlescape_text($2) + htmlescape_text($3));
      }).replace(/\[\[(\/[^|]*?)]]/g, (_$0, $1) => {
        return f("<a href='?'>?</a>", Insta.conf.baseUrl + htmlescape_attr($1), htmlescape_text($1));
      }).replace(/\[\[(\/.*?)\|(.+?)]]/g, (_$0, $1, $2) => {
        return f("<a href='?'>?</a>", Insta.conf.baseUrl + htmlescape_attr($1), htmlescape_text($2));
      }).replace(/\[\[([^[|]*?)]](\w*)/g, (_$0, $1, $2) => {
        return f("<a href='?'>?</a>", Insta.conf.paths.articles + htmlescape_attr($1), htmlescape_text($1) + htmlescape_text($2));
      }).replace(/\[\[([^[]*?)\|([^\]]+?)]](\w*)/g, (_$0, $1, $2, $3) => {
        return f("<a href='?'>?</a>", Insta.conf.paths.articles + htmlescape_attr($1), htmlescape_text($2) + htmlescape_text($3));
      }).replace(/\[\[([^\]]*?:)?(.*?)( *\(.*?\))?\|]]/g, (_$0, $1, $2, $3) => {
        return f("<a href='?'>?</a>", Insta.conf.paths.articles + htmlescape_attr($1) + htmlescape_attr($2) + htmlescape_attr($3), htmlescape_text($2));
      }).replace(/\[(https?|news|ftp|mailto|gopher|irc):(\/*)([^\]]*?) (.*?)]/g, (_$0, $1, $2, $3, $4) => {
        return f("<a class='external' href='?:?'>?</a>", htmlescape_attr($1), htmlescape_attr($2) + htmlescape_attr($3), htmlescape_text($4));
      }).replace(/\[http:\/\/(.*?)]/g, (_$0, $1) => {
        return f("<a class='external' href='http://?'>[#]</a>", htmlescape_attr($1));
      }).replace(/\[(news|ftp|mailto|gopher|irc):(\/*)(.*?)]/g, (_$0, $1, $2, $3) => {
        return f("<a class='external' href='?:?'>?:?</a>", htmlescape_attr($1), htmlescape_attr($2) + htmlescape_attr($3), htmlescape_text($1), htmlescape_text($2) + htmlescape_text($3));
      }).replace(/(^| )(https?|news|ftp|mailto|gopher|irc):(\/*)([^ $]*[^ !$,.:;?])/g, (_$0, $1, $2, $3, $4) => {
        return f("?<a class='external' href='?:?'>?:?</a>", htmlescape_text($1), htmlescape_attr($2), htmlescape_attr($3) + htmlescape_attr($4), htmlescape_text($2), htmlescape_text($3) + htmlescape_text($4));
      }).replace("__NOTOC__", "").replace("__NOINDEX__", "").replace("__INDEX__", "").replace("__NOEDITSECTION__", "");
    };
    for (; remain(); ) {
      if (compareLineStringOrReg(/^(={1,6})(.*)\1(.*)$/)) {
        p = 0;
        endl(f("<h?>?</h?>?", r[1].length, parse_inline_nowiki(r[2]), r[1].length, r[3]));
      } else if (compareLineStringOrReg(/^[#*:;]/)) {
        p = 0;
        parse_list();
      } else if (compareLineStringOrReg(" ")) {
        p = 0;
        parse_pre();
      } else if (compareLineStringOrReg("{|")) {
        p = 0;
        parse_table();
      } else if (compareLineStringOrReg(/^----+$/)) {
        p = 0;
        endl("<hr>");
      } else if (compareLineStringOrReg(Insta.BLOCK_IMAGE)) {
        p = 0;
        parse_block_image();
      } else {
        if (compareLineString("")) {
          p = remain() > 1 && ll[1] === "";
          if (p) {
            endl("<p><br>");
          }
        } else {
          if (!p) {
            ps("<p>");
            p = 1;
          }
          ps("".concat(parse_inline_nowiki(ll[0]), " "));
        }
        sh();
      }
    }
    return o;
  };
  const wiki2html = (txt, baseurl) => {
    Insta.conf.baseUrl = baseurl;
    return Insta.convert(txt);
  };
  const popupFilterPageSize = (data) => {
    return formatBytes(data.length);
  };
  const popupFilterCountLinks = (data) => {
    const num = countLinks(data);
    return "".concat(String(num), "&nbsp;").concat(num === 1 ? popupString("wikiLink") : popupString("wikiLinks"));
  };
  const popupFilterCountImages = (data) => {
    const num = countImages(data);
    return "".concat(String(num), "&nbsp;").concat(num === 1 ? popupString("image") : popupString("images"));
  };
  const popupFilterCountCategories = (data) => {
    const num = countCategories(data);
    return "".concat(String(num), "&nbsp;").concat(num === 1 ? popupString("category") : popupString("categories"));
  };
  const popupFilterLastModified = (_data, download) => {
    const lastmod = download.lastModified;
    const now = /* @__PURE__ */ new Date();
    const age = now - lastmod;
    if (lastmod && getValueOf("popupLastModified")) {
      return tprintf("%s old", [formatAge(age)]).replace(/ /g, "&nbsp;");
    }
    return "";
  };
  const formatAge = (age) => {
    let a = 0 + age;
    const aa = a;
    const seclen = 1e3;
    const minlen = 60 * seclen;
    const hourlen = 60 * minlen;
    const daylen = 24 * hourlen;
    const weeklen = 7 * daylen;
    const numweeks = (a - a % weeklen) / weeklen;
    a -= numweeks * weeklen;
    const sweeks = addunit(numweeks, "week");
    const numdays = (a - a % daylen) / daylen;
    a -= numdays * daylen;
    const sdays = addunit(numdays, "day");
    const numhours = (a - a % hourlen) / hourlen;
    a -= numhours * hourlen;
    const shours = addunit(numhours, "hour");
    const nummins = (a - a % minlen) / minlen;
    a -= nummins * minlen;
    const smins = addunit(nummins, "minute");
    const numsecs = (a - a % seclen) / seclen;
    a -= numsecs * seclen;
    const ssecs = addunit(numsecs, "second");
    if (aa > 4 * weeklen) {
      return sweeks;
    }
    if (aa > weeklen) {
      return "".concat(sweeks, " ").concat(sdays);
    }
    if (aa > daylen) {
      return "".concat(sdays, " ").concat(shours);
    }
    if (aa > 6 * hourlen) {
      return shours;
    }
    if (aa > hourlen) {
      return "".concat(shours, " ").concat(smins);
    }
    if (aa > 10 * minlen) {
      return smins;
    }
    if (aa > minlen) {
      return "".concat(smins, " ").concat(ssecs);
    }
    return ssecs;
  };
  const addunit = (num, str) => {
    return "".concat(num, " ").concat(num === 1 ? popupString(str) : popupString("".concat(str, "s")));
  };
  const runPopupFilters = (list, data, download) => {
    const ret = [];
    var _iterator2 = _createForOfIteratorHelper(list), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const element = _step2.value;
        if (element && typeof element === "function") {
          const s = element(data, download, download.owner.article);
          if (s) {
            ret.push(s);
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return ret;
  };
  const getPageInfo = (data, download) => {
    if (!data || data.length === 0) {
      return popupString("Empty page");
    }
    const popupFilters = getValueOf("popupFilters") || [];
    const extraPopupFilters = getValueOf("extraPopupFilters") || [];
    const pageInfoArray = runPopupFilters([...popupFilters, ...extraPopupFilters], data, download);
    let pageInfo = pageInfoArray.join(", ");
    if (pageInfo !== "") {
      pageInfo = upcaseFirst(pageInfo);
    }
    return pageInfo;
  };
  const countLinks = (wikiText) => {
    return wikiText.split("[[").length - 1;
  };
  const countImages = (wikiText) => {
    return (wikiText.split(pg.re.image).length - 1) / (pg.re.imageBracketCount + 1);
  };
  const countCategories = (wikiText) => {
    return (wikiText.split(pg.re.category).length - 1) / (pg.re.categoryBracketCount + 1);
  };
  const popupFilterStubDetect = (data, _download, article) => {
    const counts = stubCount(data, article);
    if (counts.real) {
      return popupString("stub");
    }
    if (counts.sect) {
      return popupString("section stub");
    }
    return "";
  };
  const popupFilterDisambigDetect = (data, _download, article) => {
    if (!getValueOf("popupAllDabsStubs") && article.namespace()) {
      return "";
    }
    return isDisambig(data, article) ? popupString("disambig") : "";
  };
  const formatBytes = (num) => {
    return num > 949 ? Math.round(num / 100) / 10 + popupString("kB") : "".concat(num, "&nbsp;").concat(popupString("bytes"));
  };
  const Stringwrapper = function Stringwrapper2() {
    this.indexOf = function(x) {
      return this.toString().indexOf(x);
    };
    this.toString = function() {
      return this.value;
    };
    this.split = function(x) {
      return this.toString().split(x);
    };
    this.substring = function(x, y) {
      if (y === void 0) {
        return this.toString().slice(Math.max(0, x));
      }
      return this.toString().substring(x, y);
    };
    this.split = function(x) {
      return this.toString().split(x);
    };
    this.replace = function(x, y) {
      return this.toString().replace(x, y);
    };
  };
  class Title extends Stringwrapper {
    constructor(val) {
      super();
      this.value = null;
      this.anchor = "";
      this.setUtf(val);
    }
    /**
     * Returns the canonical representation of the article title, optionally without anchor.
     *
     * @param {boolean} omitAnchor
     * @fixme Decide specs for anchor
     * @return String The article title and the anchor.
     */
    toString(omitAnchor) {
      return this.value + (!omitAnchor && this.anchor ? "#".concat(this.anchorString()) : "");
    }
    anchorString() {
      if (!this.anchor) {
        return "";
      }
      const split = this.anchor.split(/((?:\.[\dA-F]{2})+)/);
      const len = split.length;
      let value;
      for (let j = 1; j < len; j += 2) {
        value = split[j].split(".").join("%");
        try {
          value = decodeURIComponent(value);
        } catch {
        }
        split[j] = value.split("_").join(" ");
      }
      return split.join("");
    }
    urlAnchor() {
      const split = this.anchor.split("/((?:[%][0-9A-F]{2})+)/");
      const len = split.length;
      for (let j = 1; j < len; j += 2) {
        split[j] = split[j].split("%").join(".");
      }
      return split.join("");
    }
    anchorFromUtf(str) {
      this.anchor = encodeURIComponent(str.split(" ").join("_")).split("%3A").join(":").split("'").join("%27").split("%").join(".");
    }
    fromURL(h) {
      if (typeof h !== "string") {
        this.value = null;
        return this;
      }
      const splitted = h.split("?");
      splitted[0] = splitted[0].split("&").join("%26");
      h = splitted.join("?");
      const contribs = pg.re.contribs.exec(h);
      if (contribs) {
        if (contribs[1] === "title=") {
          contribs[3] = contribs[3].split("+").join(" ");
        }
        const u = new Title(contribs[3]);
        this.setUtf(Title.decodeNasties("".concat(mw.config.get("wgFormattedNamespaces")[pg.nsUserId], ":").concat(u.stripNamespace())));
        return this;
      }
      const email = pg.re.email.exec(h);
      if (email) {
        this.setUtf(Title.decodeNasties("".concat(mw.config.get("wgFormattedNamespaces")[pg.nsUserId], ":").concat(new Title(email[3]).stripNamespace())));
        return this;
      }
      const backlinks = pg.re.backlinks.exec(h);
      if (backlinks) {
        this.setUtf(Title.decodeNasties(new Title(backlinks[3])));
        return this;
      }
      const specialdiff = pg.re.specialdiff.exec(h);
      if (specialdiff) {
        this.setUtf(Title.decodeNasties(new Title("".concat(mw.config.get("wgFormattedNamespaces")[pg.nsSpecialId], ":Diff"))));
        return this;
      }
      const m = pg.re.main.exec(h);
      if (m === null) {
        this.value = null;
      } else {
        const fromBotInterface = /\?(.+&)?title=/.test(h);
        if (fromBotInterface) {
          m[2] = m[2].split("+").join("_");
        }
        const extracted = m[2] + (m[3] ? "#".concat(m[3]) : "");
        if (pg.flag.isSafari && /%25[\dA-Fa-f]{2}/.test(extracted)) {
          this.setUtf(decodeURIComponent(unescape(extracted)));
        } else {
          this.setUtf(Title.decodeNasties(extracted));
        }
      }
      return this;
    }
    static decodeNasties(txt) {
      try {
        let ret = decodeURI(Title.decodeEscapes(txt));
        ret = ret.replace(/[ _]*$/, "");
        return ret;
      } catch {
        return txt;
      }
    }
    // Decode valid %-encodings, otherwise escape them
    static decodeEscapes(txt) {
      const split = txt.split(/((?:%[\dA-Fa-f]{2})+)/);
      const len = split.length;
      if (len === 1) {
        return split[0].replace(/%(?![\dA-Fa-f]{2})/g, "%25");
      }
      for (let i = 1; i < len; i += 2) {
        split[i] = decodeURIComponent(split[i]);
      }
      return split.join("");
    }
    fromAnchor(a) {
      if (!a) {
        this.value = null;
        return this;
      }
      return this.fromURL(a.href);
    }
    fromWikiText(txt) {
      txt = myDecodeURI(txt);
      this.setUtf(txt);
      return this;
    }
    hintValue() {
      if (!this.value) {
        return "";
      }
      return safeDecodeURI(this.value);
    }
    toUserName(withNs) {
      if (this.namespaceId() !== pg.nsUserId && this.namespaceId() !== pg.nsUsertalkId) {
        this.value = null;
        return;
      }
      this.value = (withNs ? "".concat(mw.config.get("wgFormattedNamespaces")[pg.nsUserId], ":") : "") + this.stripNamespace().split("/")[0];
    }
    userName(withNs) {
      const t = new Title(this.value);
      t.toUserName(withNs);
      if (t.value) {
        return t;
      }
      return null;
    }
    toTalkPage() {
      if (this.value === null) {
        return null;
      }
      const namespaceId = this.namespaceId();
      if (namespaceId >= 0 && namespaceId % 2 === 0) {
        const localizedNamespace = mw.config.get("wgFormattedNamespaces")[namespaceId + 1];
        if (localizedNamespace !== void 0) {
          this.value = localizedNamespace === "" ? this.stripNamespace() : "".concat(localizedNamespace.split(" ").join("_"), ":").concat(this.stripNamespace());
          return this.value;
        }
      }
      this.value = null;
      return null;
    }
    // Return canonical, localized namespace
    namespace() {
      return mw.config.get("wgFormattedNamespaces")[this.namespaceId()];
    }
    namespaceId() {
      const n = this.value.indexOf(":");
      if (n < 0) {
        return 0;
      }
      const namespaceId = mw.config.get("wgNamespaceIds")[this.value.slice(0, Math.max(0, n)).split(" ").join("_").toLowerCase()];
      if (namespaceId === void 0) {
        return 0;
      }
      return namespaceId;
    }
    talkPage() {
      const t = new Title(this.value);
      t.toTalkPage();
      if (t.value) {
        return t;
      }
      return null;
    }
    isTalkPage() {
      if (this.talkPage() === null) {
        return true;
      }
      return false;
    }
    toArticleFromTalkPage() {
      if (this.value === null) {
        return null;
      }
      const namespaceId = this.namespaceId();
      if (namespaceId >= 0 && namespaceId % 2 === 1) {
        const localizedNamespace = mw.config.get("wgFormattedNamespaces")[namespaceId - 1];
        if (localizedNamespace !== void 0) {
          this.value = localizedNamespace === "" ? this.stripNamespace() : "".concat(localizedNamespace.split(" ").join("_"), ":").concat(this.stripNamespace());
          return this.value;
        }
      }
      this.value = null;
      return null;
    }
    articleFromTalkPage() {
      const t = new Title(this.value);
      t.toArticleFromTalkPage();
      if (t.value) {
        return t;
      }
      return null;
    }
    articleFromTalkOrArticle() {
      const t = new Title(this.value);
      if (t.toArticleFromTalkPage()) {
        return t;
      }
      return this;
    }
    isIpUser() {
      return pg.re.ipUser.test(this.userName());
    }
    stripNamespace() {
      const n = this.value.indexOf(":");
      if (n < 0) {
        return this.value;
      }
      const namespaceId = this.namespaceId();
      if (namespaceId === pg.nsMainspaceId) {
        return this.value;
      }
      return this.value.slice(Math.max(0, n + 1));
    }
    setUtf(value) {
      if (!value) {
        this.value = "";
        return;
      }
      const anch = value.indexOf("#");
      if (anch < 0) {
        this.value = value.split("_").join(" ");
        this.anchor = "";
        return;
      }
      this.value = value.slice(0, Math.max(0, anch)).split("_").join(" ");
      this.anchor = value.slice(Math.max(0, anch + 1));
      this.ns = null;
    }
    setUrl(urlfrag) {
      const anch = urlfrag.indexOf("#");
      this.value = safeDecodeURI(urlfrag.slice(0, Math.max(0, anch)));
      this.anchor = this.value.slice(Math.max(0, anch + 1));
    }
    append(x) {
      this.setUtf(this.value + x);
    }
    urlString(x) {
      x || (x = {});
      let v = this.toString(true);
      if (!x.omitAnchor && this.anchor) {
        v += "#".concat(this.urlAnchor());
      }
      if (!x.keepSpaces) {
        v = v.split(" ").join("_");
      }
      return encodeURI(v).split("&").join("%26").split("?").join("%3F").split("+").join("%2B");
    }
    removeAnchor() {
      return new Title(this.toString(true));
    }
    toUrl() {
      return pg.wiki.titlebase + this.urlString();
    }
  }
  Title.fromURL = (h) => {
    return new Title().fromURL(h);
  };
  Title.fromAnchor = (a) => {
    return new Title().fromAnchor(a);
  };
  Title.fromWikiText = (txt) => {
    return new Title().fromWikiText(txt);
  };
  const parseParams = (url) => {
    const specialDiff = pg.re.specialdiff.exec(url);
    if (specialDiff) {
      const split = specialDiff[1].split("/");
      if (split.length === 1) {
        return {
          oldid: split[0],
          diff: "prev"
        };
      } else if (split.length === 2) {
        return {
          oldid: split[0],
          diff: split[1]
        };
      }
    }
    const ret = {};
    if (!url.includes("?")) {
      return ret;
    }
    [url] = url.split("#");
    const s = url.split("?").slice(1).join(",");
    const t = s.split("&");
    var _iterator3 = _createForOfIteratorHelper(t), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const element = _step3.value;
        const z = element.split("=");
        z.push(null);
        [, ret[z[0]]] = z;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (ret.diff && ret.oldid === void 0) {
      ret.oldid = "prev";
    }
    if (ret.oldid && (ret.oldid === "prev" || ret.oldid === "next" || ret.oldid === "cur")) {
      const helper = ret.diff;
      ret.diff = ret.oldid;
      ret.oldid = helper;
    }
    return ret;
  };
  const myDecodeURI = (str) => {
    let ret;
    try {
      ret = decodeURI(str.toString());
    } catch {
      return str;
    }
    for (let i = 0; i < pg.misc.decodeExtras.length; ++i) {
      const {
        from
      } = pg.misc.decodeExtras[i];
      const {
        to
      } = pg.misc.decodeExtras[i];
      ret = ret.split(from).join(to);
    }
    return ret;
  };
  const safeDecodeURI = (str) => {
    const ret = myDecodeURI(str);
    return ret || str;
  };
  const isDisambig = (data, article) => {
    if (!getValueOf("popupAllDabsStubs") && article.namespace()) {
      return false;
    }
    return !article.isTalkPage() && pg.re.disambig.test(data);
  };
  const stubCount = (data, article) => {
    if (!getValueOf("popupAllDabsStubs") && article.namespace()) {
      return false;
    }
    let sectStub = 0;
    let realStub = 0;
    if (pg.re.stub.test(data)) {
      const s = data.split(pg.re.stub);
      for (let i = 1; i < s.length; i += 2) {
        if (s[i]) {
          ++sectStub;
        } else {
          ++realStub;
        }
      }
    }
    return {
      real: realStub,
      sect: sectStub
    };
  };
  const isValidImageName = (str) => {
    return !str.includes("{");
  };
  const isInStrippableNamespace = (article) => {
    return article.namespaceId() !== 0;
  };
  const isInMainNamespace = (article) => {
    return article.namespaceId() === 0;
  };
  const anchorContainsImage = (a) => {
    if (a === null) {
      return false;
    }
    const kids = a.childNodes;
    var _iterator4 = _createForOfIteratorHelper(kids), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const kid = _step4.value;
        if (kid.nodeName === "IMG") {
          return true;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return false;
  };
  const isPopupLink = (a) => {
    if (!markNopopupSpanLinks.done) {
      markNopopupSpanLinks();
    }
    if (a.inNopopupSpan) {
      return false;
    }
    if (a.onmousedown || a.getAttribute("nopopup")) {
      return false;
    }
    const h = a.href;
    if (h === "".concat(document.location.href, "#")) {
      return false;
    }
    if (!pg.re.basenames.test(h)) {
      return false;
    }
    if (!pg.re.urlNoPopup.test(h)) {
      return true;
    }
    return (pg.re.email.test(h) || pg.re.contribs.test(h) || pg.re.backlinks.test(h) || pg.re.specialdiff.test(h)) && !h.includes("&limit=");
  };
  const markNopopupSpanLinks = function markNopopupSpanLinks2() {
    if (!getValueOf("popupOnlyArticleLinks")) {
      fixVectorMenuPopups();
    }
    const $body = $("body");
    const s = $body.find(".nopopups").toArray();
    var _iterator5 = _createForOfIteratorHelper(s), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const element = _step5.value;
        const as = element.querySelectorAll("a");
        var _iterator6 = _createForOfIteratorHelper(as), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            const a = _step6.value;
            a.inNopopupSpan = true;
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    markNopopupSpanLinks2.done = true;
  };
  const fixVectorMenuPopups = () => {
    const $body = $("body");
    $body.find("nav.vector-menu h3:first a:first").prop("inNopopupSpan", true);
  };
  const getPageWithCaching = (url, onComplete, owner) => {
    log("getPageWithCaching, url=".concat(url));
    const i = findInPageCache(url);
    let d;
    if (i > -1) {
      d = fakeDownload(url, owner.idNumber, onComplete, pg.cache.pages[i].data, pg.cache.pages[i].lastModified, owner);
    } else {
      d = getPage(url, onComplete, owner);
      if (d && owner && owner.addDownload) {
        owner.addDownload(d);
        d.owner = owner;
      }
    }
  };
  const getPage = (url, onComplete, owner) => {
    log("getPage");
    const callback = (d) => {
      if (!d.aborted) {
        addPageToCache(d);
        onComplete(d);
      }
    };
    return startDownload(url, owner.idNumber, callback);
  };
  const findInPageCache = (url) => {
    for (let i = 0; i < pg.cache.pages.length; ++i) {
      if (url === pg.cache.pages[i].url) {
        return i;
      }
    }
    return -1;
  };
  const addPageToCache = (download) => {
    log("addPageToCache ".concat(download.url));
    const page = {
      url: download.url,
      data: download.data,
      lastModified: download.lastModified
    };
    return pg.cache.pages.push(page);
  };
  const getJsObj = (json) => {
    try {
      const json_ret = JSON.parse(json);
      if (json_ret.warnings) {
        for (let w = 0; w < json_ret.warnings.length; w++) {
          if (json_ret.warnings[w]["*"]) {
            log(json_ret.warnings[w]["*"]);
          } else {
            log(json_ret.warnings[w].warnings);
          }
        }
      } else if (json_ret.error) {
        errlog("".concat(json_ret.error.code, ": ").concat(json_ret.error.info));
      }
      return json_ret;
    } catch {
      errlog("Something went wrong with getJsObj, json=".concat(json));
      return 1;
    }
  };
  const anyChild = (obj) => {
    for (const p in obj) {
      if (!Object.hasOwn(obj, p)) {
        continue;
      }
      return obj[p];
    }
    return null;
  };
  const upcaseFirst = (str) => {
    if (typeof str !== "string" || str === "") {
      return;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const findInArray = (arr, foo) => {
    if (!arr || arr.length === 0) {
      return -1;
    }
    const len = arr.length;
    for (let i = 0; i < len; ++i) {
      if (arr[i] === foo) {
        return i;
      }
    }
    return -1;
  };
  const nextOne = (array, value) => {
    const i = findInArray(array, value);
    if (i < 0) {
      return null;
    }
    return array[i + 1];
  };
  const literalizeRegex = (str) => {
    return mw.util.escapeRegExp(str);
  };
  String.prototype.entify = function() {
    return this.split("&").join("&amp;").split("<").join("&lt;").split(">").join(
      "&gt;"
      /* +shy */
    ).split('"').join("&quot;");
  };
  const removeNulls = (val) => {
    return val !== null;
  };
  const joinPath = (list) => {
    return list.filter(removeNulls).join("/");
  };
  const simplePrintf = (str, subs) => {
    if (!str || !subs) {
      return str;
    }
    const ret = [];
    const s = str.split(/(%s|\$\d+)/);
    let i = 0;
    do {
      ret.push(s.shift());
      if (s.length === 0) {
        break;
      }
      const cmd = s.shift();
      if (cmd === "%s") {
        if (i < subs.length) {
          ret.push(subs[i]);
        } else {
          ret.push(cmd);
        }
        ++i;
      } else {
        const j = Number.parseInt(cmd.replace("$", ""), 10) - 1;
        if (j > -1 && j < subs.length) {
          ret.push(subs[j]);
        } else {
          ret.push(cmd);
        }
      }
    } while (s.length > 0);
    return ret.join("");
  };
  const isString = (x) => {
    return typeof x === "string" || x instanceof String;
  };
  const isNumber = (x) => {
    return typeof x === "number" || x instanceof Number;
  };
  const isRegExp = (x) => {
    return x instanceof RegExp;
  };
  const isArray = (x) => {
    return Array.isArray(x);
  };
  const isObject = (x) => {
    return x instanceof Object;
  };
  const isFunction = (x) => {
    return !isRegExp(x) && (typeof x === "function" || x instanceof Function);
  };
  const repeatString = (s, mult) => {
    let ret = "";
    for (let i = 0; i < mult; ++i) {
      ret += s;
    }
    return ret;
  };
  const zeroFill = (s, min) => {
    min || (min = 2);
    const t = s.toString();
    return repeatString("0", min - t.length) + t;
  };
  const map = (f, o) => {
    if (isArray(o)) {
      return map_array(f, o);
    }
    return map_object(f, o);
  };
  const map_array = (f, o) => {
    const ret = [];
    var _iterator7 = _createForOfIteratorHelper(o), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        const element = _step7.value;
        ret.push(f(element));
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    return ret;
  };
  const map_object = (f, o) => {
    const ret = {};
    for (const i in o) {
      if (!Object.hasOwn(o, i)) {
        continue;
      }
      ret[o] = f(o[i]);
    }
    return ret;
  };
  pg.escapeQuotesHTML = (text) => {
    return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };
  pg.unescapeQuotesHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };
  const retargetDab = (newTarget, oldTarget, friendlyCurrentArticleName, titleToEdit) => {
    log("retargetDab: newTarget=".concat(newTarget, " oldTarget=").concat(oldTarget));
    return changeLinkTargetLink({
      newTarget,
      text: newTarget.split(" ").join("&nbsp;"),
      hint: tprintf("disambigHint", [newTarget]),
      summary: simplePrintf(getValueOf("popupFixDabsSummary"), [friendlyCurrentArticleName, newTarget]),
      clickButton: getValueOf("popupDabsAutoClick"),
      minor: true,
      oldTarget,
      watch: getValueOf("popupWatchDisambiggedPages"),
      title: titleToEdit
    });
  };
  const listLinks = (wikitext, oldTarget, titleToEdit) => {
    const reg = /\[\[([^|]*?) *(\||]])/gi;
    let ret = [];
    const splitted = wikitext.split(reg);
    const omitRegex = /^[a-z]*:|^[Ss]pecial:|^[Ii]mage|^[Cc]ategory/;
    const friendlyCurrentArticleName = oldTarget.toString();
    const wikPos = getValueOf("popupDabWiktionary");
    for (let i = 1; i < splitted.length; i += 3) {
      if (typeof splitted[i] === "string" && splitted[i].length > 0 && !omitRegex.test(splitted[i])) {
        ret.push(retargetDab(splitted[i], oldTarget, friendlyCurrentArticleName, titleToEdit));
      }
    }
    ret = rmDupesFromSortedList(ret.sort());
    if (wikPos) {
      const wikTarget = "wiktionary:".concat(friendlyCurrentArticleName.replace(/^(.+)\s+\([^)]+\)\s*$/, "$1"));
      const meth = wikPos.toLowerCase() === "first" ? "unshift" : "push";
      ret[meth](retargetDab(wikTarget, oldTarget, friendlyCurrentArticleName, titleToEdit));
    }
    ret.push(changeLinkTargetLink({
      newTarget: null,
      text: popupString("remove this link").split(" ").join("&nbsp;"),
      hint: popupString("remove all links to this disambig page from this article"),
      clickButton: getValueOf("popupDabsAutoClick"),
      oldTarget,
      summary: simplePrintf(getValueOf("popupRmDabLinkSummary"), [friendlyCurrentArticleName]),
      watch: getValueOf("popupWatchDisambiggedPages"),
      title: titleToEdit
    }));
    return ret;
  };
  const rmDupesFromSortedList = (list) => {
    const ret = [];
    var _iterator8 = _createForOfIteratorHelper(list), _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
        const element = _step8.value;
        if (ret.length === 0 || element !== ret.at(-1)) {
          ret.push(element);
        }
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    return ret;
  };
  const makeFixDab = (data, navpop) => {
    const titleToEdit = navpop.parentPopup && navpop.parentPopup.article.toString();
    const list = listLinks(data, navpop.originalArticle, titleToEdit);
    if (list.length === 0) {
      log("listLinks returned empty list");
      return null;
    }
    let html = "<hr>".concat(popupString("Click to disambiguate this link to:"), "<br>");
    html += list.join(", ");
    return html;
  };
  const makeFixDabs = (wikiText, navpop) => {
    if (getValueOf("popupFixDabs") && isDisambig(wikiText, navpop.article) && Title.fromURL(location.href).namespaceId() !== pg.nsSpecialId && navpop.article.talkPage()) {
      setPopupHTML(makeFixDab(wikiText, navpop), "popupFixDab", navpop.idNumber);
    }
  };
  const popupRedlinkHTML = (article) => {
    return changeLinkTargetLink({
      newTarget: null,
      text: popupString("remove this link").split(" ").join("&nbsp;"),
      hint: popupString("remove all links to this page from this article"),
      clickButton: getValueOf("popupRedlinkAutoClick"),
      oldTarget: article.toString(),
      summary: simplePrintf(getValueOf("popupRedlinkSummary"), [article.toString()])
    });
  };
  const setPopupHTML = function setPopupHTML2(str, elementId, popupId, onSuccess, append) {
    if (popupId === void 0) {
      popupId = pg.idNumber;
    }
    const popupElement = document.querySelector("#".concat(elementId).concat(popupId));
    if (popupElement) {
      if (!append) {
        popupElement.innerHTML = "";
      }
      if (isString(str)) {
        popupElement.innerHTML += str;
      } else {
        popupElement.append(str);
      }
      if (onSuccess) {
        onSuccess();
      }
      setTimeout(checkPopupPosition, 100);
      return true;
    }
    setTimeout(() => {
      setPopupHTML2(str, elementId, popupId, onSuccess);
    }, 600);
    return null;
  };
  const setPopupTrailer = (str, id) => {
    return setPopupHTML(str, "popupData", id);
  };
  const fillEmptySpans = (args) => {
    let redir = true;
    let rcid;
    if (typeof args !== "object" || args.redir === void 0 || !args.redir) {
      redir = false;
    }
    const a = args.navpopup.parentAnchor;
    let article;
    let hint;
    let oldid;
    let params = {};
    if (redir && typeof args.redirTarget === typeof {}) {
      article = args.redirTarget;
    } else {
      article = new Title().fromAnchor(a);
      hint = a.originalTitle || article.hintValue();
      params = parseParams(a.href);
      oldid = getValueOf("popupHistoricalLinks") ? params.oldid : null;
      ({
        rcid
      } = params);
    }
    const x = {
      article,
      hint,
      oldid,
      rcid,
      navpop: args.navpopup,
      params
    };
    const structure = pg.structures[getValueOf("popupStructure")];
    if (typeof structure !== "object") {
      setPopupHTML("popupError", "Unknown structure (this should never happen): ".concat(pg.option.popupStructure), args.navpopup.idNumber);
      return;
    }
    const spans = flatten(pg.misc.layout);
    const numspans = spans.length;
    const redirs = pg.misc.redirSpans;
    for (let i = 0; i < numspans; ++i) {
      const found = redirs && redirs.includes(spans[i]);
      if (found && !redir || !found && redir) {
        continue;
      }
      const structurefn = structure[spans[i]];
      if (structurefn === void 0) {
        continue;
      }
      let setfn = setPopupHTML;
      if (getValueOf("popupActiveNavlinks") && (spans[i].indexOf("popupTopLinks") === 0 || spans[i].indexOf("popupRedirTopLinks") === 0)) {
        setfn = setPopupTipsAndHTML;
      }
      switch (typeof structurefn) {
        case "function":
          log("running ".concat(spans[i], "({\n						article:").concat(x.article, ", hint:").concat(x.hint, ", oldid: ").concat(x.oldid, "})"));
          setfn(structurefn(x), spans[i], args.navpopup.idNumber);
          break;
        case "string":
          setfn(structurefn, spans[i], args.navpopup.idNumber);
          break;
        default:
          errlog("unknown thing with label ".concat(spans[i], " (span index was ").concat(i, ")"));
          break;
      }
    }
  };
  const flatten = function flatten2(list, start) {
    const ret = [];
    if (start === void 0) {
      start = 0;
    }
    for (let i = start; i < list.length; ++i) {
      if (typeof list[i] === typeof []) {
        return [...ret, ...flatten2(list[i]), ...flatten2(list, i + 1)];
      }
      ret.push(list[i]);
    }
    return ret;
  };
  const popupHTML = function popupHTML2(a) {
    getValueOf("popupStructure");
    const structure = pg.structures[pg.option.popupStructure];
    if (typeof structure !== "object") {
      pg.option.popupStructure = pg.optionDefault.popupStructure;
      return popupHTML2(a);
    }
    if (typeof structure.popupLayout !== "function") {
      return "Bad layout";
    }
    pg.misc.layout = structure.popupLayout();
    pg.misc.redirSpans = typeof structure.popupRedirSpans === "function" ? structure.popupRedirSpans() : [];
    return makeEmptySpans(pg.misc.layout, a.navpopup);
  };
  const makeEmptySpans = function makeEmptySpans2(list, navpop) {
    let ret = "";
    var _iterator9 = _createForOfIteratorHelper(list), _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
        const element = _step9.value;
        if (typeof element === "string") {
          ret += emptySpanHTML(element, navpop.idNumber, "div");
        } else if (typeof element === typeof [] && element.length > 0) {
          ret = ret.split(/(<\/[^>]*?>$)/).join(makeEmptySpans2(element, navpop));
        } else if (typeof element === typeof {} && element.nodeType) {
          ret += emptySpanHTML(element.name, navpop.idNumber, element.nodeType);
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    return ret;
  };
  const emptySpanHTML = function emptySpanHTML2(name, id, tag, classname) {
    tag || (tag = "span");
    classname || (classname = emptySpanHTML2.classAliases[name]);
    classname || (classname = name);
    if (name === getValueOf("popupDragHandle")) {
      classname += " popupDragHandle";
    }
    return simplePrintf('<%s id="%s" class="%s"></%s>', [tag, name + id, classname, tag]);
  };
  emptySpanHTML.classAliases = {
    popupSecondPreview: "popupPreview"
  };
  const imageHTML = (_article, idNumber) => {
    return simplePrintf('<a id="popupImageLink$1"><img align="right" valign="top" id="popupImg$1" style="display:none"></img></a>', [idNumber]);
  };
  const popTipsSoonFn = (id, when, popData) => {
    when || (when = 250);
    const popTips = () => {
      setupTooltips(document.querySelector("#".concat(id)), false, true, popData);
    };
    return () => {
      setTimeout(popTips, when, popData);
    };
  };
  const setPopupTipsAndHTML = (html, divname, idnumber, popData) => {
    setPopupHTML(html, divname, idnumber, getValueOf("popupSubpopups") ? popTipsSoonFn(divname + idnumber, null, popData) : null);
  };
  const fuzzyCursorOffMenus = (_x, _y, _fuzz, parent) => {
    if (!parent) {
      return null;
    }
    const uls = parent.querySelectorAll("ul");
    var _iterator10 = _createForOfIteratorHelper(uls), _step10;
    try {
      for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
        const ul = _step10.value;
        if (ul.className === "popup_menu" && ul.offsetWidth > 0) {
          return false;
        }
      }
    } catch (err) {
      _iterator10.e(err);
    } finally {
      _iterator10.f();
    }
    return true;
  };
  const checkPopupPosition = () => {
    if (pg.current.link && pg.current.link.navpopup) {
      pg.current.link.navpopup.limitHorizontalPosition();
    }
  };
  const mouseOutWikiLink = function mouseOutWikiLink2() {
    const self = this;
    removeModifierKeyListener(self);
    if (self.navpopup === null || self.navpopup === void 0) {
      return;
    }
    if (!self.navpopup.isVisible()) {
      self.navpopup.banish();
      return;
    }
    restoreTitle(self);
    Navpopup.tracker.addHook(posCheckerHook(self.navpopup));
  };
  const posCheckerHook = (navpop) => {
    return () => {
      if (!navpop.isVisible()) {
        return true;
      }
      if (Navpopup.tracker.dirty) {
        return false;
      }
      const {
        x
      } = Navpopup.tracker;
      const {
        y
      } = Navpopup.tracker;
      const mouseOverNavpop = navpop.isWithin(x, y, navpop.fuzz, navpop.mainDiv) || !fuzzyCursorOffMenus(x, y, navpop.fuzz, navpop.mainDiv);
      let t = getValueOf("popupHideDelay");
      if (t) {
        t *= 1e3;
      }
      if (!t) {
        if (!mouseOverNavpop) {
          if (navpop.parentAnchor) {
            restoreTitle(navpop.parentAnchor);
          }
          navpop.banish();
          return true;
        }
        return false;
      }
      const d = Date.now();
      if (!navpop.mouseLeavingTime) {
        navpop.mouseLeavingTime = d;
        return false;
      }
      if (mouseOverNavpop) {
        navpop.mouseLeavingTime = null;
        return false;
      }
      if (d - navpop.mouseLeavingTime > t) {
        navpop.mouseLeavingTime = null;
        navpop.banish();
        return true;
      }
      return false;
    };
  };
  const runStopPopupTimer = (navpop) => {
    if (!navpop.stopPopupTimer) {
      navpop.stopPopupTimer = setInterval(posCheckerHook(navpop), 500);
      navpop.addHook(() => {
        clearInterval(navpop.stopPopupTimer);
      }, "hide", "before");
    }
  };
  class Previewmaker {
    constructor(wikiText, baseUrl, owner) {
      this.originalData = wikiText;
      this.baseUrl = baseUrl;
      this.owner = owner;
      this.maxCharacters = getValueOf("popupMaxPreviewCharacters");
      this.maxSentences = getValueOf("popupMaxPreviewSentences");
      this.setData();
    }
    setData() {
      const maxSize = Math.max(1e4, 2 * this.maxCharacters);
      this.data = this.originalData.slice(0, Math.max(0, maxSize));
    }
    /**
     * Remove HTML comments
     *
     * @private
     */
    killComments() {
      this.data = this.data.replace(/^<!--[^$]*?-->\n|\n<!--[^$]*?-->(?=\n)|<!--[^$]*?-->/g, "");
    }
    /**
     * @private
     */
    killDivs() {
      this.data = this.data.replace(/< *div[^>]* *>[\S\s]*?< *\/ *div *>/gi, "");
    }
    /**
     * @private
     */
    killGalleries() {
      this.data = this.data.replace(/< *gallery[^>]* *>[\S\s]*?< *\/ *gallery *>/gi, "");
    }
    /**
     * @param {Object} opening
     * @param {Object} closing
     * @param {Object} subopening
     * @param {Object} subclosing
     * @param {Object} repl
     * @private
     */
    kill(opening, closing, subopening, subclosing, repl) {
      let oldk = this.data;
      let k = Previewmaker.killStuff(this.data, opening, closing, subopening, subclosing, repl);
      while (k.length < oldk.length) {
        oldk = k;
        k = Previewmaker.killStuff(k, opening, closing, subopening, subclosing, repl);
      }
      this.data = k;
    }
    /**
     * @param {Object} txt
     * @param {Object} opening
     * @param {Object} closing
     * @param {Object} subopening
     * @param {Object} subclosing
     * @param {Object} repl
     * @private
     */
    static killStuff(txt, opening, closing, subopening, subclosing, repl) {
      const op = Previewmaker.makeRegexp(opening);
      const cl = Previewmaker.makeRegexp(closing, "^");
      const sb = subopening ? Previewmaker.makeRegexp(subopening, "^") : null;
      const sc = subclosing ? Previewmaker.makeRegexp(subclosing, "^") : cl;
      if (!op || !cl) {
        void mw.notify("Navigation Popups error: op or cl is null! something is wrong.", {
          tag: "popups",
          type: "error"
        });
        return;
      }
      if (!op.test(txt)) {
        return txt;
      }
      let ret = "";
      const opResult = op.exec(txt);
      ret = txt.slice(0, Math.max(0, opResult.index));
      txt = txt.slice(Math.max(0, opResult.index + opResult[0].length));
      let depth = 1;
      while (txt.length > 0) {
        let removal = 0;
        if (depth === 1 && cl.test(txt)) {
          depth--;
          removal = cl.exec(txt)[0].length;
        } else if (depth > 1 && sc.test(txt)) {
          depth--;
          removal = sc.exec(txt)[0].length;
        } else if (sb && sb.test(txt)) {
          depth++;
          removal = sb.exec(txt)[0].length;
        }
        removal || (removal = 1);
        txt = txt.slice(Math.max(0, removal));
        if (depth === 0) {
          break;
        }
      }
      return ret + (repl || "") + txt;
    }
    /**
     * @param {string|RegExp} x
     * @param {string|RegExp} prefix
     * @param {string|RegExp} suffix
     * @private
     */
    static makeRegexp(x, prefix, suffix) {
      prefix || (prefix = "");
      suffix || (suffix = "");
      let reStr = "";
      let flags = "";
      if (isString(x)) {
        reStr = prefix + literalizeRegex(x) + suffix;
      } else if (isRegExp(x)) {
        let s = x.toString().slice(1);
        const sp = s.split("/");
        flags = sp.at(-1);
        sp[sp.length - 1] = "";
        s = sp.join("/");
        s = s.slice(0, Math.max(0, s.length - 1));
        reStr = prefix + s + suffix;
      } else {
        log("makeRegexp failed");
      }
      log("makeRegexp: got reStr=".concat(reStr, ", flags=").concat(flags));
      return new RegExp(reStr, flags);
    }
    /**
     * @private
     */
    killBoxTemplates() {
      this.kill(/{{[^\s{|}]*?(float|box)[ _](begin|start)/i, /}}\s*/, "{{");
      this.kill(/{{[^\s{|}]*?(infobox|elementbox|frame)[ _]/i, /}}\s*/, "{{");
    }
    /**
     * @private
     */
    killTemplates() {
      this.kill("{{", "}}", "{", "}", " ");
    }
    /**
     * @private
     */
    killTables() {
      this.kill("{|", /\|}\s*/, "{|");
      this.kill(/<table.*?>/i, /<\/table.*?>/i, /<table.*?>/i);
      this.data = this.data.replace(/^\|.*$/gm, "");
    }
    /**
     * @private
     */
    killImages() {
      const forbiddenNamespaceAliases = [];
      for (var _i = 0, _Object$entries = Object.entries(mw.config.get("wgNamespaceIds")); _i < _Object$entries.length; _i++) {
        const [localizedNamespaceLc, namespaceId] = _Object$entries[_i];
        if (namespaceId !== pg.nsImageId && namespaceId !== pg.nsCategoryId) {
          return;
        }
        forbiddenNamespaceAliases.push(localizedNamespaceLc.split(" ").join("[ _]"));
      }
      this.kill(new RegExp("[[][[]\\s*(".concat(forbiddenNamespaceAliases.join("|"), ")\\s*:"), "i"), /]]\s*/, "[", "]");
    }
    /**
     * @private
     */
    killHTML() {
      this.kill(/<ref\b[^/>]*?>/i, /<\/ref>/i);
      this.data = this.data.replace(/(^|\n) *<.*/g, "\n");
      const splitted = this.data.split(/(<[\W\w]*?(?:>|$|(?=<)))/);
      const len = splitted.length;
      for (let i = 1; i < len; i += 2) {
        switch (splitted[i]) {
          case "<no".concat("wiki", ">"):
          case "</no".concat("wiki", ">"):
          case "<block".concat("quote", ">"):
          case "</block".concat("quote", ">"):
            break;
          default:
            splitted[i] = "";
        }
      }
      this.data = splitted.join("");
    }
    /**
     * @private
     */
    killChunks() {
      const italicChunkRegex = /((^|\n)\s*:*\s*''[^']([^']|'''|'[^']){20}(.|\n[^\n])*''[\s!.?]*\n)+/g;
      this.data = this.data.replace(italicChunkRegex, "\n");
    }
    /**
     * @private
     */
    mopup() {
      this.data = this.data.replace(/^-{4,}/gm, "");
      this.data = this.data.replace(/(^|\n) *:[^\n]*/g, "");
      this.data = this.data.replace(/^__[_a-z]*__ *$/gim, "");
    }
    /**
     * @private
     */
    firstBit() {
      let d = this.data;
      if (getValueOf("popupPreviewCutHeadings")) {
        this.data = this.data.replace(/\s*(==+[^=]*==+)\s*/g, "\n\n$1 ");
        this.data = this.data.replace(/([:;]) *\n{2,}/g, "$1\n");
        this.data = this.data.replace(/^\s*/, "");
        const stuff = /^([^\n]|\n\S)*/.exec(this.data);
        if (stuff) {
          [d] = stuff;
        }
        if (!getValueOf("popupPreviewFirstParOnly")) {
          d = this.data;
        }
        d = d.replace(/(==+[^=]*==+)\s*/g, "$1\n\n");
      }
      d = d.split(/([!.?]+["']*\s)/g);
      d[0] = d[0].replace(/^\s*/, "");
      const notSentenceEnds = /([^.][a-z]\. *[a-z]|etc|sic|dr|mr|mrs|ms|st|no|op|cit|\[[^\]]*|\s[a-z])$/i;
      d = this.fixSentenceEnds(d, notSentenceEnds);
      this.fullLength = d.join("").length;
      let n = this.maxSentences;
      let dd = Previewmaker.firstSentences(d, n);
      do {
        dd = Previewmaker.firstSentences(d, n);
        --n;
      } while (dd.length > this.maxCharacters && n !== 0);
      this.data = dd;
    }
    /**
     * @param {string} strs
     * @param {RegExp} reg
     * @private
     */
    fixSentenceEnds(strs, reg) {
      for (let i = 0; i < strs.length - 2; ++i) {
        if (reg.test(strs[i])) {
          const a = [];
          for (let j = 0; j < strs.length; ++j) {
            if (j < i) {
              a[j] = strs[j];
            }
            if (j === i) {
              a[i] = strs[i] + strs[i + 1] + strs[i + 2];
            }
            if (j > i + 2) {
              a[j - 2] = strs[j];
            }
          }
          return this.fixSentenceEnds(a, reg);
        }
      }
      return strs;
    }
    /**
     * @param {string[]} strs
     * @param {number} howmany
     * @private
     */
    static firstSentences(strs, howmany) {
      const t = strs.slice(0, 2 * howmany);
      return t.join("");
    }
    /**
     * @private
     */
    killBadWhitespace() {
      this.data = this.data.replace(/^ *'+ *$/gm, "");
    }
    /**
     * Runs the various methods to generate the preview.
     * The preview is stored in the <code>html</html> field.
     *
     * @private
     */
    makePreview() {
      if (this.owner.article.namespaceId() !== pg.nsTemplateId && this.owner.article.namespaceId() !== pg.nsImageId) {
        this.killComments();
        this.killDivs();
        this.killGalleries();
        this.killBoxTemplates();
        if (getValueOf("popupPreviewKillTemplates")) {
          this.killTemplates();
        } else {
          this.killMultilineTemplates();
        }
        this.killTables();
        this.killImages();
        this.killHTML();
        this.killChunks();
        this.mopup();
        this.firstBit();
        this.killBadWhitespace();
      } else {
        this.killHTML();
      }
      this.html = wiki2html(this.data, this.baseUrl);
      this.fixHTML();
      this.stripLongTemplates();
    }
    /**
     * @param {string} data
     * @private
     */
    static esWiki2HtmlPart(data) {
      const reLinks = /(?:\[\[([^\]|]*)(?:\|([^\]|]*))*]]([a-z]*))/gi;
      reLinks.lastIndex = 0;
      let match;
      let result = "";
      let postfixIndex = 0;
      while ((match = reLinks.exec(data)) !== null) {
        var _match$;
        result += "".concat(pg.escapeQuotesHTML(data.substring(postfixIndex, match.index)), '<a href="').concat(Insta.conf.paths.articles).concat(pg.escapeQuotesHTML(match[1]), '">').concat(pg.escapeQuotesHTML(((_match$ = match[2]) !== null && _match$ !== void 0 ? _match$ : match[1]) + match[3]), "</a>");
        postfixIndex = reLinks.lastIndex;
      }
      result += pg.escapeQuotesHTML(data.slice(Math.max(0, postfixIndex)));
      return result;
    }
    editSummaryPreview() {
      const reAes = /\/\* *(.*?) *\*\//g;
      reAes.lastIndex = 0;
      const match = reAes.exec(this.data);
      if (match) {
        const prefix = this.data.slice(0, Math.max(0, match.index - 1));
        const [, section] = match;
        const postfix = this.data.slice(Math.max(0, reAes.lastIndex));
        let start = "<span class='autocomment'>";
        let end = "</span>";
        if (prefix.length > 0) {
          start = "".concat(Previewmaker.esWiki2HtmlPart(prefix), " ").concat(start, "- ");
        }
        if (postfix.length > 0) {
          end = ": ".concat(end).concat(Previewmaker.esWiki2HtmlPart(postfix));
        }
        const t = new Title().fromURL(this.baseUrl);
        t.anchorFromUtf(section);
        const sectionLink = "".concat(Insta.conf.paths.articles + pg.escapeQuotesHTML(t.toString(true)), "#").concat(pg.escapeQuotesHTML(t.anchor));
        return "".concat(start, '<a href="').concat(sectionLink, '">&rarr;</a> ').concat(pg.escapeQuotesHTML(section)).concat(end);
      }
      return Previewmaker.esWiki2HtmlPart(this.data);
    }
    /**
     * Works around livepreview bugs.
     *
     * @private
     */
    fixHTML() {
      if (!this.html) {
        return;
      }
      let ret = this.html;
      ret = ret.replace(new RegExp('(<a href="'.concat(pg.wiki.articlePath, '/[^"]*)[?](.*?")'), "g"), "$1%3F$2");
      ret = ret.replace(new RegExp("(<a href='".concat(pg.wiki.articlePath, "/[^']*)[?](.*?')"), "g"), "$1%3F$2");
      this.html = ret;
    }
    /**
     * Generates the preview and displays it in the current popup.
     * Does nothing if the generated preview is invalid or consists of whitespace only.
     * Also activates wikilinks in the preview for subpopups if the popupSubpopups option is true.
     */
    showPreview() {
      this.makePreview();
      if (typeof this.html !== "string") {
        return;
      }
      if (/^\s*$/.test(this.html)) {
        return;
      }
      setPopupHTML("<hr>", "popupPrePreviewSep", this.owner.idNumber);
      setPopupTipsAndHTML(this.html, "popupPreview", this.owner.idNumber, {
        owner: this.owner
      });
      const more = this.fullLength > this.data.length ? this.moreLink() : "";
      setPopupHTML(more, "popupPreviewMore", this.owner.idNumber);
    }
    /**
     * @private
     */
    moreLink() {
      const a = document.createElement("a");
      a.className = "popupMoreLink";
      a.innerHTML = popupString("more...");
      const self = this;
      a.onclick = () => {
        self.maxCharacters += 2e3;
        self.maxSentences += 20;
        self.setData();
        self.showPreview();
      };
      return a;
    }
    /**
     * @private
     */
    stripLongTemplates() {
      this.html = this.html.replace(/^.{0,1000}{{[^}]*?(<(p|br)( \/)?>\s*){2,}([^{}]*?}})?/gi, "");
      this.html = this.html.split("\n").join(" ");
      this.html = this.html.replace(/{{[^}]*<pre>[^}]*}}/gi, "");
    }
    /**
     * @private
     */
    killMultilineTemplates() {
      this.kill("{{{", "}}}");
      this.kill(/\s*{{[^{}]*\n/, "}}", "{{");
    }
  }
  const loadAPIPreview = (queryType, article, navpop) => {
    const art = new Title(article).urlString();
    let url = "".concat(pg.wiki.apiwikibase, "?format=json&formatversion=2&action=query&");
    let htmlGenerator = () => {
      void mw.notify("invalid html generator", {
        tag: "popups",
        type: "error"
      });
    };
    let usernameart = "";
    switch (queryType) {
      case "history":
        url += "titles=".concat(art, "&prop=revisions&rvlimit=").concat(getValueOf("popupHistoryPreviewLimit"));
        htmlGenerator = APIhistoryPreviewHTML;
        break;
      case "category":
        url += "list=categorymembers&cmtitle=".concat(art);
        htmlGenerator = APIcategoryPreviewHTML;
        break;
      case "userinfo": {
        const username = new Title(article).userName();
        usernameart = encodeURIComponent(username);
        url += pg.re.ipUser.test(username) ? "list=blocks&bkprop=range|restrictions&bkip=".concat(usernameart) : "list=users|usercontribs&usprop=blockinfo|groups|editcount|registration|gender&ususers=".concat(usernameart, "&meta=globaluserinfo&guiprop=groups|unattached&guiuser=").concat(usernameart, "&uclimit=1&ucprop=timestamp&ucuser=").concat(usernameart);
        htmlGenerator = APIuserInfoPreviewHTML;
        break;
      }
      case "contribs":
        usernameart = encodeURIComponent(new Title(article).userName());
        url += "list=usercontribs&ucuser=".concat(usernameart, "&uclimit=").concat(getValueOf("popupContribsPreviewLimit"));
        htmlGenerator = APIcontribsPreviewHTML;
        break;
      case "imagepagepreview": {
        let trail = "";
        if (getValueOf("popupImageLinks")) {
          trail = "&list=imageusage&iutitle=".concat(art);
        }
        url += "titles=".concat(art, "&prop=revisions|imageinfo&rvprop=content").concat(trail);
        htmlGenerator = APIimagepagePreviewHTML;
        break;
      }
      case "backlinks":
        url += "list=backlinks&bltitle=".concat(art);
        htmlGenerator = APIbacklinksPreviewHTML;
        break;
      case "revision":
        url += article.oldid ? "revids=".concat(article.oldid) : "titles=".concat(article.removeAnchor().urlString());
        url += "&prop=revisions|pageprops|info|images|categories&rvprop=ids|timestamp|flags|comment|user|content&cllimit=max&imlimit=max";
        htmlGenerator = APIrevisionPreviewHTML;
        break;
    }
    pendingNavpopTask(navpop);
    const callback = (d) => {
      log("callback of API functions was hit");
      if (queryType === "userinfo") {
        fetchUserGroupNames(d.data).then(() => {
          showAPIPreview(queryType, htmlGenerator(article, d, navpop), navpop.idNumber, navpop, d);
        });
        return;
      }
      showAPIPreview(queryType, htmlGenerator(article, d, navpop), navpop.idNumber, navpop, d);
    };
    const go = () => {
      getPageWithCaching(url, callback, navpop);
      return true;
    };
    if (navpop.visible || !getValueOf("popupLazyDownloads")) {
      go();
    } else {
      navpop.addHook(go, "unhide", "before", "DOWNLOAD_".concat(queryType, "_QUERY_DATA"));
    }
  };
  const linkList = (list) => {
    list.sort((x, y) => {
      return x === y ? 0 : x < y ? -1 : 1;
    });
    const buf = [];
    var _iterator11 = _createForOfIteratorHelper(list), _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
        const element = _step11.value;
        buf.push(wikiLink({
          article: new Title(element),
          text: element.split(" ").join("&nbsp;"),
          action: "view"
        }));
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
    return buf.join(", ");
  };
  const getTimeOffset = () => {
    const tz = mw.user.options.get("timecorrection");
    if (tz && tz.includes("|")) {
      return Number.parseInt(tz.split("|")[1], 10);
    }
    return 0;
  };
  const getTimeZone = () => {
    if (!pg.user.timeZone) {
      const tz = mw.user.options.get("timecorrection");
      pg.user.timeZone = "UTC";
      if (tz) {
        const tzComponents = tz.split("|");
        if (tzComponents.length === 3 && tzComponents[0] === "ZoneInfo") {
          [, , pg.user.timeZone] = tzComponents;
        } else {
          errlog("Unexpected timezone information: ".concat(tz));
        }
      }
    }
    return pg.user.timeZone;
  };
  const useTimeOffset = () => {
    if (Intl.DateTimeFormat.prototype.formatToParts === void 0) {
      return true;
    }
    const tz = mw.user.options.get("timecorrection");
    if (tz && !tz.includes("ZoneInfo|")) {
      return true;
    }
    return false;
  };
  const getLocales = () => {
    if (!pg.user.locales) {
      let userLanguage = document.querySelector("html").getAttribute("lang");
      if (getValueOf("popupLocale")) {
        userLanguage = getValueOf("popupLocale");
      } else if (userLanguage === "en") {
        userLanguage = getMWDateFormat() === "mdy" ? "en-US" : "en-GB";
      }
      pg.user.locales = Intl.DateTimeFormat.supportedLocalesOf([userLanguage, navigator.language]);
    }
    return pg.user.locales;
  };
  const getMWDateFormat = () => {
    return mw.user.options.get("date");
  };
  const editPreviewTable = (article, h, reallyContribs) => {
    let html = ["<table>"];
    let day;
    let curart = article;
    let page;
    let makeFirstColumnLinks;
    if (reallyContribs) {
      makeFirstColumnLinks = (currentRevision) => {
        let result = "(";
        result += '<a href="'.concat(pg.wiki.titlebase).concat(new Title(currentRevision.title).urlString(), "&diff=prev&oldid=").concat(currentRevision.revid, '">').concat(popupString("diff"), "</a>");
        result += "&nbsp;|&nbsp;";
        result += '<a href="'.concat(pg.wiki.titlebase).concat(new Title(currentRevision.title).urlString(), '&action=history">').concat(popupString("hist"), "</a>");
        result += ")";
        return result;
      };
    } else {
      const firstRevid = h[0].revid;
      makeFirstColumnLinks = (currentRevision) => {
        let result = "(";
        result += '<a href="'.concat(pg.wiki.titlebase).concat(new Title(curart).urlString(), "&diff=").concat(firstRevid, "&oldid=").concat(currentRevision.revid, '">').concat(popupString("cur"), "</a>");
        result += "&nbsp;|&nbsp;";
        result += '<a href="'.concat(pg.wiki.titlebase).concat(new Title(curart).urlString(), "&diff=prev&oldid=").concat(currentRevision.revid, '">').concat(popupString("last"), "</a>");
        result += ")";
        return result;
      };
    }
    var _iterator12 = _createForOfIteratorHelper(h.entries()), _step12;
    try {
      for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
        const [i, element] = _step12.value;
        if (reallyContribs) {
          page = element.title;
          curart = new Title(page);
        }
        const minor = element.minor ? "<b>m </b>" : "";
        const editDate = new Date(element.timestamp);
        let thisDay = formattedDate(editDate);
        const thisTime = formattedTime(editDate);
        if (thisDay === day) {
          thisDay = "";
        } else {
          day = thisDay;
        }
        if (thisDay) {
          html.push('<tr><td colspan=3><span class="popup_history_date">'.concat(thisDay, "</span></td></tr>"));
        }
        html.push('<tr class="popup_history_row_'.concat(i % 2 ? "odd" : "even", '">'), "<td>".concat(makeFirstColumnLinks(element), "</td>"), '<td><a href="'.concat(pg.wiki.titlebase).concat(new Title(curart).urlString(), "&oldid=").concat(element.revid, '">').concat(thisTime, "</a></td>"));
        let col3url = "";
        let col3txt = "";
        if (reallyContribs) {
          col3url = pg.wiki.titlebase + curart.urlString();
          col3txt = pg.escapeQuotesHTML(page);
        } else {
          const {
            user
          } = element;
          if (element.userhidden) {
            col3url = getValueOf("popupRevDelUrl");
            col3txt = pg.escapeQuotesHTML(popupString("revdel"));
          } else {
            col3url = pg.re.ipUser.test(user) ? "".concat(pg.wiki.titlebase + mw.config.get("wgFormattedNamespaces")[pg.nsSpecialId], ":Contributions&target=").concat(new Title(user).urlString()) : "".concat(pg.wiki.titlebase + mw.config.get("wgFormattedNamespaces")[pg.nsUserId], ":").concat(new Title(user).urlString());
            col3txt = pg.escapeQuotesHTML(user);
          }
        }
        html.push("<td>".concat(reallyContribs ? minor : "", '<a href="').concat(col3url, '">').concat(col3txt, "</a></td>"));
        let comment = "";
        const c = element.comment || element.content;
        if (c) {
          comment = new Previewmaker(c, new Title(curart).toUrl()).editSummaryPreview();
        } else if (element.commenthidden) {
          comment = popupString("revdel");
        }
        html.push("<td>".concat(reallyContribs ? "" : minor).concat(comment, "</td>"), "</tr>");
        html = [html.join("")];
      }
    } catch (err) {
      _iterator12.e(err);
    } finally {
      _iterator12.f();
    }
    html.push("</table>");
    return html.join("");
  };
  const adjustDate = (d, offset) => {
    const o = offset * 60 * 1e3;
    return new Date(+d + o);
  };
  const convertTimeZone = (date, timeZone) => {
    return new Date(date.toLocaleString("en-US", {
      timeZone
    }));
  };
  const formattedDateTime = (date) => {
    if (useTimeOffset()) {
      return "".concat(formattedDate(date), " ").concat(formattedTime(date));
    }
    if (getMWDateFormat() === "ISO 8601") {
      const d2 = convertTimeZone(date, getTimeZone());
      return "".concat(map(zeroFill, [d2.getFullYear(), d2.getMonth() + 1, d2.getDate()]).join("-"), "T").concat(map(zeroFill, [d2.getHours(), d2.getMinutes(), d2.getSeconds()]).join(":"));
    }
    const options = getValueOf("popupDateTimeFormatterOptions");
    options.timeZone = getTimeZone();
    return date.toLocaleString(getLocales(), options);
  };
  const formattedDate = (date) => {
    let d2;
    if (useTimeOffset()) {
      d2 = adjustDate(date, getTimeOffset());
      return map(zeroFill, [d2.getUTCFullYear(), d2.getUTCMonth() + 1, d2.getUTCDate()]).join("-");
    }
    if (getMWDateFormat() === "ISO 8601") {
      d2 = convertTimeZone(date, getTimeZone());
      return map(zeroFill, [d2.getFullYear(), d2.getMonth() + 1, d2.getDate()]).join("-");
    }
    const options = getValueOf("popupDateFormatterOptions");
    options.timeZone = getTimeZone();
    return date.toLocaleDateString(getLocales(), options);
  };
  const formattedTime = (date) => {
    let d2;
    if (useTimeOffset()) {
      d2 = adjustDate(date, getTimeOffset());
      return map(zeroFill, [d2.getUTCHours(), d2.getUTCMinutes(), d2.getUTCSeconds()]).join(":");
    }
    if (getMWDateFormat() === "ISO 8601") {
      d2 = convertTimeZone(date, getTimeZone());
      return map(zeroFill, [d2.getHours(), d2.getMinutes(), d2.getSeconds()]).join(":");
    }
    const options = getValueOf("popupTimeFormatterOptions");
    options.timeZone = getTimeZone();
    return date.toLocaleTimeString(getLocales(), options);
  };
  const fetchUserGroupNames = (userinfoResponse) => {
    const queryObj = getJsObj(userinfoResponse).query;
    const user = anyChild(queryObj.users);
    const messages = [];
    if (user.groups) {
      var _iterator13 = _createForOfIteratorHelper(user.groups), _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
          const groupName = _step13.value;
          if (!["*", "user", "autoconfirmed"].includes(groupName)) {
            messages.push("group-".concat(groupName, "-member"));
          }
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    }
    if (queryObj.globaluserinfo && queryObj.globaluserinfo.groups) {
      var _iterator14 = _createForOfIteratorHelper(queryObj.globaluserinfo.groups), _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
          const groupName = _step14.value;
          messages.push("group-".concat(groupName, "-member"));
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }
    return getMwApi().loadMessagesIfMissing(messages);
  };
  const showAPIPreview = (queryType, html, id, navpop, download) => {
    let target = "popupPreview";
    completedNavpopTask(navpop);
    switch (queryType) {
      case "imagelinks":
      case "category":
        target = "popupPostPreview";
        break;
      case "userinfo":
        target = "popupUserData";
        break;
      case "revision":
        insertPreview(download);
        return;
    }
    setPopupTipsAndHTML(html, target, id);
  };
  const APIrevisionPreviewHTML = (_article, download) => {
    try {
      const jsObj = getJsObj(download.data);
      const page = anyChild(jsObj.query.pages);
      if (page.missing) {
        download.owner = null;
        return;
      }
      const content = page && page.revisions && page.revisions[0].contentmodel === "wikitext" ? page.revisions[0].content : null;
      if (typeof content === "string") {
        download.data = content;
        download.lastModified = new Date(page.revisions[0].timestamp);
      }
    } catch {
      return "Revision preview failed :(";
    }
  };
  const APIbacklinksPreviewHTML = (_article, download) => {
    try {
      const jsObj = getJsObj(download.data);
      const list = jsObj.query.backlinks;
      let html = [];
      if (!list) {
        return popupString("No backlinks found");
      }
      var _iterator15 = _createForOfIteratorHelper(list), _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
          const element = _step15.value;
          const t = new Title(element.title);
          html.push('<a href="'.concat(pg.wiki.titlebase).concat(t.urlString(), '">').concat(t.toString().entify(), "</a>"));
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
      html = html.join(", ");
      if (jsObj.continue && jsObj.continue.blcontinue) {
        html += popupString(" and more");
      }
      return html;
    } catch {
      return "backlinksPreviewHTML went wonky";
    }
  };
  pg.fn.APIsharedImagePagePreviewHTML = (obj) => {
    log("APIsharedImagePagePreviewHTML");
    const popupid = obj.requestid;
    if (obj.query && obj.query.pages) {
      const page = anyChild(obj.query.pages);
      const content = page && page.revisions && page.revisions[0].contentmodel === "wikitext" ? page.revisions[0].content : null;
      if (typeof content === "string" && pg && pg.current && pg.current.link && pg.current.link.navpopup) {
        const p = new Previewmaker(content, pg.current.link.navpopup.article, pg.current.link.navpopup);
        p.makePreview();
        setPopupHTML(p.html, "popupSecondPreview", popupid);
      }
    }
  };
  const APIimagepagePreviewHTML = (article, download, navpop) => {
    try {
      const jsObj = getJsObj(download.data);
      const page = anyChild(jsObj.query.pages);
      const content = page && page.revisions && page.revisions[0].contentmodel === "wikitext" ? page.revisions[0].content : null;
      let ret = "";
      let alt = "";
      try {
        [{
          alt
        }] = navpop.parentAnchor.childNodes;
      } catch {
      }
      if (alt) {
        ret = "".concat(ret, "<hr><b>").concat(popupString("Alt text:"), "</b> ").concat(pg.escapeQuotesHTML(alt));
      }
      if (typeof content === "string") {
        const p = prepPreviewmaker(content, article, navpop);
        p.makePreview();
        if (p.html) {
          ret += "<hr>".concat(p.html);
        }
        if (getValueOf("popupSummaryData")) {
          const info = getPageInfo(content, download);
          log(info);
          setPopupTrailer(info, navpop.idNumber);
        }
      }
      if (page && page.imagerepository === "shared") {
        const art = new Title(article);
        const encart = encodeURIComponent("File:".concat(art.stripNamespace()));
        const shared_url = "".concat(pg.wiki.apicommonsbase, "?format=json&formatversion=2&callback=pg.fn.APIsharedImagePagePreviewHTML&requestid=").concat(navpop.idNumber, "&action=query&prop=revisions&rvprop=content&titles=").concat(encart);
        ret = "".concat(ret, "<hr>").concat(popupString("Image from Commons"), ': <a href="').concat(pg.wiki.commonsbase, "?title=").concat(encart, '">').concat(popupString("Description page"), "</a>");
        mw.loader.load(shared_url);
      }
      showAPIPreview("imagelinks", APIimagelinksPreviewHTML(article, download), navpop.idNumber, download);
      return ret;
    } catch {
      return "API imagepage preview failed :(";
    }
  };
  const APIimagelinksPreviewHTML = (_article, download) => {
    try {
      const jsobj = getJsObj(download.data);
      const list = jsobj.query.imageusage;
      if (list) {
        const ret = [];
        var _iterator16 = _createForOfIteratorHelper(list), _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
            const element = _step16.value;
            ret.push(element.title);
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
        if (ret.length === 0) {
          return popupString("No image links found");
        }
        return "<h2>".concat(popupString("File links"), "</h2>").concat(linkList(ret));
      }
      return popupString("No image links found");
    } catch {
      return "Image links preview generation failed :(";
    }
  };
  const APIcategoryPreviewHTML = (_article, download) => {
    try {
      const jsobj = getJsObj(download.data);
      const list = jsobj.query.categorymembers;
      let ret = [];
      var _iterator17 = _createForOfIteratorHelper(list), _step17;
      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
          const element = _step17.value;
          ret.push(element.title);
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
      if (ret.length === 0) {
        return popupString("Empty category");
      }
      ret = "<h2>".concat(tprintf("Category members (%s shown)", [ret.length]), "</h2>").concat(linkList(ret));
      if (jsobj.continue && jsobj.continue.cmcontinue) {
        ret += popupString(" and more");
      }
      return ret;
    } catch {
      return "Category preview failed :(";
    }
  };
  const APIuserInfoPreviewHTML = (_article, download) => {
    let ret = [];
    let queryobj = {};
    try {
      queryobj = getJsObj(download.data).query;
    } catch {
      return "Userinfo preview failed :(";
    }
    const user = anyChild(queryobj.users);
    if (user) {
      const {
        globaluserinfo
      } = queryobj;
      if (user.invalid === "") {
        ret.push(popupString("Invalid user"));
      } else if (user.missing === "") {
        ret.push(popupString("Not a registered username"));
      }
      if (user.blockedby) {
        if (user.blockpartial) {
          ret.push("<b>".concat(popupString("Has blocks"), "</b>"));
        } else {
          ret.push("<b>".concat(popupString("BLOCKED"), "</b>"));
        }
      }
      if (globaluserinfo && ("locked" in globaluserinfo || "hidden" in globaluserinfo)) {
        let lockedSulAccountIsAttachedToThis = true;
        for (let i = 0; globaluserinfo.unattached && i < globaluserinfo.unattached.length; i++) {
          if (globaluserinfo.unattached[i].wiki === mw.config.get("wgDBname")) {
            lockedSulAccountIsAttachedToThis = false;
            break;
          }
        }
        if (lockedSulAccountIsAttachedToThis) {
          if ("locked" in globaluserinfo) {
            ret.push("<b><i>".concat(popupString("LOCKED"), "</i></b>"));
          }
          if ("hidden" in globaluserinfo) {
            ret.push("<b><i>".concat(popupString("HIDDEN"), "</i></b>"));
          }
        }
      }
      if (getValueOf("popupShowGender") && user.gender) {
        switch (user.gender) {
          case "male":
            ret.push("".concat(popupString("he/him"), " · "));
            break;
          case "female":
            ret.push("".concat(popupString("she/her"), " · "));
            break;
        }
      }
      if (user.groups) {
        var _iterator18 = _createForOfIteratorHelper(user.groups), _step18;
        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
            const groupName = _step18.value;
            if (!["*", "user", "autoconfirmed"].includes(groupName)) {
              ret.push(pg.escapeQuotesHTML(mw.message("group-".concat(groupName, "-member"), user.gender).text()));
            }
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }
      }
      if (globaluserinfo && globaluserinfo.groups) {
        var _iterator19 = _createForOfIteratorHelper(globaluserinfo.groups), _step19;
        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
            const groupName = _step19.value;
            ret.push(
              // Messages that can be used here:
              // * see [[Special:PrefixIndex/MediaWiki:Group-]]
              // * for more information
              "<i>".concat(pg.escapeQuotesHTML(mw.message("group-".concat(groupName, "-member"), user.gender).text()), "</i>")
            );
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
      }
      if (user.registration) {
        var _user$editcount;
        ret.push(pg.escapeQuotesHTML(((_user$editcount = user.editcount) !== null && _user$editcount !== void 0 ? _user$editcount : "0") + popupString(" edits since: ") + (user.registration ? formattedDate(new Date(user.registration)) : "")));
      }
    }
    if (queryobj.usercontribs && queryobj.usercontribs.length > 0) {
      ret.push(popupString("last edit on ") + formattedDate(new Date(queryobj.usercontribs[0].timestamp)));
    }
    if (queryobj.blocks) {
      ret.push(popupString("IP user"));
      for (let l = 0; l < queryobj.blocks.length; l++) {
        let rbstr = queryobj.blocks[l].rangestart === queryobj.blocks[l].rangeend ? "BLOCK" : "RANGEBLOCK";
        rbstr = Array.isArray(queryobj.blocks[l].restrictions) ? "".concat(rbstr, "ED") : "Has ".concat(rbstr.toLowerCase(), "s");
        ret.push("<b>".concat(popupString(rbstr), "</b>"));
      }
    }
    for (let m = 0; m < ret.length - 1; m++) {
      if (ret[m].length > 3 && ret[m].slice(Math.max(0, ret[m].length - 3)) === " · ") {
        ret[m] += ret[m + 1];
        ret.splice(m + 1, 1);
        m--;
      }
    }
    ret = "<hr>".concat(ret.join(", "));
    return ret;
  };
  const APIcontribsPreviewHTML = (article, download, navpop) => {
    return APIhistoryPreviewHTML(article, download, navpop, true);
  };
  const APIhistoryPreviewHTML = (article, download, _navpop, reallyContribs) => {
    try {
      const jsobj = getJsObj(download.data);
      let edits = [];
      edits = reallyContribs ? jsobj.query.usercontribs : anyChild(jsobj.query.pages).revisions;
      const ret = editPreviewTable(article, edits, reallyContribs);
      return ret;
    } catch {
      return "History preview failed :-(";
    }
  };
  const setupDebugging = () => {
    if (window.popupDebug) {
      window.log = (x) => {
        console.log(x);
      };
      window.errlog = (x) => {
        console.error("[Popups] ".concat(x));
      };
      log("Initializing logger");
    } else {
      window.log = () => {
      };
      window.errlog = () => {
      };
    }
  };
  const loadImage = (image, navpop) => {
    if (typeof image.stripNamespace !== "function") {
      void mw.notify("loadImages bad", {
        tag: "popups",
        type: "error"
      });
    }
    if (!getValueOf("popupImages")) {
      return;
    }
    if (!isValidImageName(image.toString())) {
      return false;
    }
    const art = image.urlString();
    let url = "".concat(pg.wiki.apiwikibase, "?format=json&formatversion=2&action=query");
    url += "&prop=imageinfo&iiprop=url|mime&iiurlwidth=".concat(getValueOf("popupImageSizeLarge"));
    url += "&titles=".concat(art);
    pendingNavpopTask(navpop);
    const callback = (d) => {
      popupsInsertImage(navpop.idNumber, navpop, d);
    };
    const go = () => {
      getPageWithCaching(url, callback, navpop);
      return true;
    };
    if (navpop.visible || !getValueOf("popupLazyDownloads")) {
      go();
    } else {
      navpop.addHook(go, "unhide", "after", "DOWNLOAD_IMAGE_QUERY_DATA");
    }
  };
  const popupsInsertImage = (id, _navpop, download) => {
    log("popupsInsertImage");
    let imageinfo;
    try {
      const jsObj = getJsObj(download.data);
      const imagepage = anyChild(jsObj.query.pages);
      if (imagepage.imageinfo === void 0) {
        return;
      }
      [imageinfo] = imagepage.imageinfo;
    } catch {
      log("popupsInsertImage failed :(");
      return;
    }
    const popupImage = document.querySelector("#popupImg".concat(id));
    if (!popupImage) {
      log("could not find insertion point for image");
      return;
    }
    popupImage.width = getValueOf("popupImageSize");
    popupImage.style.display = "inline";
    if (imageinfo.thumburl) {
      popupImage.src = imageinfo.thumburl;
    } else if (imageinfo.mime.indexOf("image") === 0) {
      popupImage.src = imageinfo.url;
      log("a thumb could not be found, using original image");
    } else {
      log("fullsize imagethumb, but not sure if it's an image");
    }
    const a = document.querySelector("#popupImageLink".concat(id));
    if (a === null) {
      return null;
    }
    switch (getValueOf("popupThumbAction")) {
      case "imagepage":
        if (pg.current.article.namespaceId() !== pg.nsImageId) {
          a.href = imageinfo.descriptionurl;
          popTipsSoonFn("popupImage".concat(id))();
          break;
        }
      /* falls through */
      case "sizetoggle":
        a.onclick = toggleSize;
        a.title = popupString("Toggle image size");
        return;
      case "linkfull":
        a.href = imageinfo.url;
        a.title = popupString("Open full-size image");
    }
  };
  const toggleSize = function toggleSize2() {
    const self = this;
    if (!self) {
      void mw.notify("self is null :/", {
        tag: "popups",
        type: "error"
      });
      return;
    }
    const img = self.firstChild;
    if (!img) {
      void mw.notify("img is null :/", {
        tag: "popups",
        type: "error"
      });
      return;
    }
    img.style.width = !img.style.width || img.style.width === "" ? "100%" : "";
  };
  const getValidImageFromWikiText = (wikiText) => {
    let matched;
    let match;
    const t = removeMatchesUnless(wikiText, /(<!--[\S\s]*?-->)/, 1, /^<!--[^[]*popup/i);
    while ((match = pg.re.image.exec(t)) !== null) {
      const m = match[2] || match[6];
      if (isValidImageName(m)) {
        matched = m;
        break;
      }
    }
    pg.re.image.lastIndex = 0;
    if (!matched) {
      return null;
    }
    return "".concat(mw.config.get("wgFormattedNamespaces")[pg.nsImageId], ":").concat(upcaseFirst(matched));
  };
  const removeMatchesUnless = (str, re1, parencount, re2) => {
    const split = str.split(re1);
    const c = parencount + 1;
    for (let i = 0; i < split.length; ++i) {
      if (i % c === 0 || re2.test(split[i])) {
        continue;
      }
      split[i] = "";
    }
    return split.join("");
  };
  const setNamespaces = () => {
    pg.nsSpecialId = -1;
    pg.nsMainspaceId = 0;
    pg.nsImageId = 6;
    pg.nsUserId = 2;
    pg.nsUsertalkId = 3;
    pg.nsCategoryId = 14;
    pg.nsTemplateId = 10;
  };
  const setRedirs = () => {
    const r = "redirect";
    const R = "REDIRECT";
    const redirLists = {
      ar: [R, "تحويل"],
      be: [r, "перанакіраваньне"],
      bg: [r, "пренасочване", "виж"],
      bs: [r, "Preusmjeri", "preusmjeri", "PREUSMJERI"],
      bn: [R, "পুনর্নির্দেশ"],
      cs: [R, "PŘESMĚRUJ"],
      cy: [r, "ail-cyfeirio"],
      de: [R, "WEITERLEITUNG"],
      el: [R, "ΑΝΑΚΑΤΕΥΘΥΝΣΗ"],
      eo: [R, "ALIDIREKTU", "ALIDIREKTI"],
      es: [R, "REDIRECCIÓN"],
      et: [r, "suuna"],
      ga: [r, "athsheoladh"],
      gl: [r, "REDIRECCIÓN", "REDIRECIONAMENTO"],
      he: [R, "הפניה"],
      hu: [R, "ÁTIRÁNYÍTÁS"],
      is: [r, "tilvísun", "TILVÍSUN"],
      it: [R, "RINVIA", "Rinvia"],
      ja: [R, "転送"],
      mk: [r, "пренасочување", "види"],
      nds: [r, "wiederleiden"],
      "nds-nl": [R, "DEURVERWIEZING", "DUURVERWIEZING"],
      nl: [R, "DOORVERWIJZING"],
      nn: [r, "omdiriger"],
      pl: [R, "PATRZ", "PRZEKIERUJ", "TAM"],
      pt: [R, "redir"],
      ru: [R, "ПЕРЕНАПРАВЛЕНИЕ", "ПЕРЕНАПР"],
      sk: [r, "presmeruj"],
      sr: [r, "Преусмери", "преусмери", "ПРЕУСМЕРИ", "Preusmeri", "preusmeri", "PREUSMERI"],
      tt: [R, "yünältü", "перенаправление", "перенапр"],
      uk: [R, "ПЕРЕНАПРАВЛЕННЯ", "ПЕРЕНАПР"],
      vi: [r, "đổi"],
      yi: [R, "ווייטערפירן"],
      zh: [R, "重定向"]
      // no comma
    };
    const redirList = redirLists[pg.wiki.lang] || [r, R];
    pg.re.redirect = new RegExp("^\\s*[#](".concat(redirList.join("|"), ").*?\\[{2}([^\\|\\]]*)(|[^\\]]*)?\\]{2}\\s*(.*)"), "i");
  };
  const setInterwiki = () => {
    if (pg.wiki.wikimedia) {
      pg.wiki.interwiki = "aa|ab|ace|af|ak|als|am|an|ang|ar|arc|arz|as|ast|av|ay|az|ba|bar|bat-smg|bcl|be|be-x-old|bg|bh|bi|bjn|bm|bn|bo|bpy|br|bs|bug|bxr|ca|cbk-zam|cdo|ce|ceb|ch|cho|chr|chy|ckb|co|cr|crh|cs|csb|cu|cv|cy|da|de|diq|dsb|dv|dz|ee|el|eml|en|eo|es|et|eu|ext|fa|ff|fi|fiu-vro|fj|fo|fr|frp|frr|fur|fy|ga|gag|gan|gd|gl|glk|gn|got|gu|gv|ha|hak|haw|he|hi|hif|ho|hr|hsb|ht|hu|hy|hz|ia|id|ie|ig|ii|ik|ilo|io|is|it|iu|ja|jbo|jv|ka|kaa|kab|kbd|kg|ki|kj|kk|kl|km|kn|ko|koi|kr|krc|ks|ksh|ku|kv|kw|ky|la|lad|lb|lbe|lg|li|lij|lmo|ln|lo|lt|ltg|lv|map-bms|mdf|mg|mh|mhr|mi|mk|ml|mn|mo|mr|mrj|ms|mt|mus|mwl|my|myv|mzn|na|nah|nap|nds|nds-nl|ne|new|ng|nl|nn|no|nov|nrm|nv|ny|oc|om|or|os|pa|pag|pam|pap|pcd|pdc|pfl|pi|pih|pl|pms|pnb|pnt|ps|pt|qu|rm|rmy|rn|ro|roa-rup|roa-tara|ru|rue|rw|sa|sah|sc|scn|sco|sd|se|sg|sh|si|simple|sk|sl|sm|sn|so|sq|sr|srn|ss|st|stq|su|sv|sw|szl|ta|te|tet|tg|th|ti|tk|tl|tn|to|tpi|tr|ts|tt|tum|tw|ty|udm|ug|uk|ur|uz|ve|vec|vi|vls|vo|wa|war|wo|wuu|xal|xh|yi|yo|za|zea|zh|zh-classical|zh-min-nan|zh-yue|zu";
      pg.re.interwiki = new RegExp("^".concat(pg.wiki.interwiki, ":"));
    } else {
      pg.wiki.interwiki = null;
      pg.re.interwiki = /^$/;
    }
  };
  const nsRe = (namespaceId) => {
    const imageNamespaceVariants = [];
    for (var _i2 = 0, _Object$entries2 = Object.entries(mw.config.get("wgNamespaceIds")); _i2 < _Object$entries2.length; _i2++) {
      const [_localizedNamespaceLc, _namespaceId] = _Object$entries2[_i2];
      if (_namespaceId !== namespaceId) {
        continue;
      }
      const localizedNamespaceLc = upcaseFirst(_localizedNamespaceLc);
      imageNamespaceVariants.push(mw.util.escapeRegExp(localizedNamespaceLc).split(" ").join("[ _]"), mw.util.escapeRegExp(encodeURI(localizedNamespaceLc)));
    }
    return "(?:".concat(imageNamespaceVariants.join("|"), ")");
  };
  const nsReImage = () => {
    return nsRe(pg.nsImageId);
  };
  const getEditboxSelection = () => {
    let editbox;
    try {
      editbox = document.editform.wpTextbox1;
    } catch {
      return;
    }
    if (document.selection) {
      return document.selection.createRange().text;
    }
    const selStart = editbox.selectionStart;
    const selEnd = editbox.selectionEnd;
    return editbox.value.substring(selStart, selEnd);
  };
  const doSelectionPopup = () => {
    const sel = getEditboxSelection();
    const open = sel.indexOf("[[");
    const pipe = sel.indexOf("|");
    const close = sel.indexOf("]]");
    if (open === -1 || pipe === -1 && close === -1) {
      return;
    }
    if (pipe !== -1 && open > pipe || close !== -1 && open > close) {
      return;
    }
    const article = new Title(sel.substring(open + 2, pipe < 0 ? close : pipe));
    if (getValueOf("popupOnEditSelection") === "boxpreview") {
      return doSeparateSelectionPopup(sel, article);
    }
    if (close > 0 && sel.slice(Math.max(0, close + 2)).includes("[[")) {
      return;
    }
    const a = document.createElement("a");
    a.href = pg.wiki.titlebase + article.urlString();
    mouseOverWikiLink2(a);
    if (a.navpopup) {
      a.navpopup.addHook(() => {
        runStopPopupTimer(a.navpopup);
      }, "unhide", "after");
    }
  };
  const doSeparateSelectionPopup = (str, article) => {
    let div = document.querySelector("#selectionPreview");
    if (!div) {
      div = document.createElement("div");
      div.id = "selectionPreview";
      try {
        const box = document.editform.wpTextbox1;
        box.parentNode.insertBefore(div, box);
      } catch {
        return;
      }
    }
    const p = prepPreviewmaker(str, article, newNavpopup(document.createElement("a"), article));
    p.makePreview();
    if (p.html) {
      div.innerHTML = p.html;
    }
    div.ranSetupTooltipsAlready = false;
    popTipsSoonFn("selectionPreview")();
  };
  class Mousetracker {
    constructor() {
      this.loopDelay = 400;
      this.timer = null;
      this.active = false;
      this.dirty = true;
      this.hooks = [];
    }
    /**
     * Adds a hook, to be called when we get events.
     *
     * @param {Function} f A function which is called as
     * <code>f(x,y)</code>. It should return <code>true</code> when it
     * wants to be removed, and <code>false</code> otherwise.
     */
    addHook(f) {
      this.hooks.push(f);
    }
    /**
     * Runs hooks, passing them the x
     * and y coords of the mouse.  Hook functions that return true are
     * passed to {@source Mousetracker#removeHooks} for removal.
     *
     * @private
     */
    runHooks() {
      if (!this.hooks || this.hooks.length === 0) {
        return;
      }
      let remove = false;
      const removeObj = {};
      const {
        x
      } = this;
      const {
        y
      } = this;
      const len = this.hooks.length;
      for (let i = 0; i < len; ++i) {
        if (this.hooks[i](x, y) === true) {
          remove = true;
          removeObj[i] = true;
        }
      }
      if (remove) {
        this.removeHooks(removeObj);
      }
    }
    /**
     * Removes hooks.
     *
     * @private
     * @param {Object} removeObj An object whose keys are the index
     * numbers of functions for removal, with values that evaluate to true
     */
    removeHooks(removeObj) {
      const newHooks = [];
      const len = this.hooks.length;
      for (let i = 0; i < len; ++i) {
        if (!removeObj[i]) {
          newHooks.push(this.hooks[i]);
        }
      }
      this.hooks = newHooks;
    }
    /**
     * Event listener for mouse wiggles.
     * We simply grab the event, set x and y and run the hooks.
     * This makes the cpu all hot and bothered :-(
     *
     * @private
     * @param {Event} e Mousemove event
     */
    track(e) {
      e || (e = window.event);
      let x;
      let y;
      if (e) {
        if (e.pageX) {
          x = e.pageX;
          y = e.pageY;
        } else if (e.clientX === void 0) {
          return;
        } else {
          let left;
          let top;
          const docElt = document.documentElement;
          if (docElt) {
            left = docElt.scrollLeft;
          }
          left || (left = document.querySelector("body").scrollLeft || document.scrollLeft || 0);
          if (docElt) {
            top = docElt.scrollTop;
          }
          top || (top = document.querySelector("body").scrollTop || document.scrollTop || 0);
          x = e.clientX + left;
          y = e.clientY + top;
        }
        this.setPosition(x, y);
      }
    }
    /**
     * Sets the x and y coordinates stored and takes appropriate action,
     * running hooks as appropriate.
     *
     * @param {Integer} x, y Screen coordinates to set
     * @param {number} x
     * @param {number} y
     */
    setPosition(x, y) {
      this.x = x;
      this.y = y;
      if (this.dirty || this.hooks.length === 0) {
        this.dirty = false;
        return;
      }
      if (typeof this.lastHook_x !== "number") {
        this.lastHook_x = -100;
        this.lastHook_y = -100;
      }
      let diff2 = (this.lastHook_x - x) * (this.lastHook_y - y);
      diff2 = diff2 >= 0 ? diff2 : -diff2;
      if (diff2 > 1) {
        this.lastHook_x = x;
        this.lastHook_y = y;
        if (this.dirty) {
          this.dirty = false;
        } else {
          this.runHooks();
        }
      }
    }
    /**
     * Sets things in motion, unless they are already that is, registering an event listener on
     * <code>document.onmousemove</code>. A half-hearted attempt is made to preserve the old event
     * listener if there is one.
     */
    enable() {
      if (this.active) {
        return;
      }
      this.active = true;
      this.savedListener = document.onmousemove;
      const self = this;
      document.onmousemove = (e) => {
        self.track(e);
      };
      if (this.loopDelay) {
        this.timer = setInterval(() => {
          self.runHooks();
        }, this.loopDelay);
      }
    }
    /**
     * Disables the tracker, removing the event listener.
     */
    disable() {
      if (!this.active) {
        return;
      }
      if (typeof this.savedListener === "function") {
        document.onmousemove = this.savedListener;
      } else {
        delete document.onmousemove;
      }
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.active = false;
    }
  }
  class Navpopup {
    constructor() {
      this.uid = Navpopup.uid++;
      this.visible = false;
      this.noshow = false;
      this.hooks = {
        create: [],
        unhide: [],
        hide: []
      };
      this.hookIds = {};
      this.downloads = [];
      this.pending = null;
      this.fuzz = 5;
      this.constrained = true;
      this.width = 0;
      this.height = 0;
      this.mainDiv = null;
      this.createMainDiv();
    }
    /**
     * Retrieves the {@source #visible} attribute, indicating whether the popup is currently visible.
     *
     * @type boolean
     */
    isVisible() {
      return this.visible;
    }
    /**
     * Repositions popup using CSS style.
     *
     * @private
     * @param {integer} x x-coordinate (px)
     * @param {integer} y y-coordinate (px)
     * @param {boolean} noLimitHor Don't call {@source #limitHorizontalPosition}
     */
    reposition(x, y, noLimitHor) {
      log("reposition(".concat(x, ",").concat(y, ",").concat(noLimitHor, ")"));
      if (x !== void 0 && x !== null) {
        this.left = x;
      }
      if (y !== void 0 && y !== null) {
        this.top = y;
      }
      if (this.left !== void 0 && this.top !== void 0) {
        this.mainDiv.style.left = "".concat(this.left, "px");
        this.mainDiv.style.top = "".concat(this.top, "px");
      }
      if (!noLimitHor) {
        this.limitHorizontalPosition();
      }
    }
    /**
     * Prevents popups from being in silly locations. Hopefully.
     * Should not be run if {@source #constrained} is true.
     *
     * @private
     */
    limitHorizontalPosition() {
      if (!this.constrained || this.tooWide) {
        return;
      }
      this.updateDimensions();
      const x = this.left;
      const w = this.width;
      const cWidth = document.querySelector("body").clientWidth;
      if (x + w >= cWidth || x > 0 && this.maxWidth && this.width < this.maxWidth && this.height > this.width && x > cWidth - this.maxWidth) {
        this.mainDiv.style.left = "-10000px";
        this.mainDiv.style.width = "".concat(this.maxWidth, "px");
        const naturalWidth = Number.parseInt(this.mainDiv.offsetWidth, 10);
        let newLeft = cWidth - naturalWidth - 1;
        if (newLeft < 0) {
          newLeft = 0;
          this.tooWide = true;
        }
        log("limitHorizontalPosition: moving to (".concat(newLeft, ",").concat(this.top, "); naturalWidth=").concat(naturalWidth, ", clientWidth=").concat(cWidth));
        this.reposition(newLeft, null, true);
      }
    }
    /**
     * Brings popup to the top of the z-order.
     * We increment the {@source #highest} property of the contructor here.
     *
     * @private
     */
    raise() {
      this.mainDiv.style.zIndex = Navpopup.highest + 1;
      ++Navpopup.highest;
    }
    /**
     * Shows the popup provided {@source #noshow} is not true.
     * Updates the position, brings the popup to the top of the z-order and unhides it.
     */
    show() {
      if (this.noshow) {
        return;
      }
      this.reposition();
      this.raise();
      this.unhide();
    }
    /**
     * Checks to see if the mouse pointer has
     * stabilised (checking every <code>time</code>/2 milliseconds) and runs the
     * {@source #show} method if it has.
     *
     * @param {integer} time The minimum time (ms) before the popup may be shown.
     */
    showSoonIfStable(time) {
      log("showSoonIfStable, time=".concat(time));
      if (this.visible) {
        return;
      }
      this.noshow = false;
      this.stable_x = -1e4;
      this.stable_y = -1e4;
      const stableShow = () => {
        log("stableShow called");
        const new_x = Navpopup.tracker.x;
        const new_y = Navpopup.tracker.y;
        const dx = self.stable_x - new_x;
        const dy = self.stable_y - new_y;
        const fuzz2 = 0;
        if (dx * dx <= fuzz2 && dy * dy <= fuzz2) {
          log("mouse is stable");
          clearInterval(self.showSoonStableTimer);
          self.reposition(new_x + 2, new_y + 2);
          self.show();
          self.limitHorizontalPosition();
          return;
        }
        self.stable_x = new_x;
        self.stable_y = new_y;
      };
      const self = this;
      this.showSoonStableTimer = setInterval(stableShow, time / 2);
    }
    /**
     * Sets the {@source #noshow} flag and hides the popup. This should be called
     * when the mouse leaves the link before
     * (or after) it's actually been displayed.
     */
    banish() {
      log("banish called");
      this.noshow = true;
      if (this.showSoonStableTimer) {
        log("clearing showSoonStableTimer");
        clearInterval(this.showSoonStableTimer);
      }
      this.hide();
    }
    /**
     * Runs hooks added with {@source #addHook}.
     *
     * @private
     * @param {string} key Key name of the {@source #hooks} array - one of 'create', 'unhide', 'hide'
     * @param {string} when Controls exactly when the hook is run: either 'before' or 'after'
     */
    runHooks(key, when) {
      if (!this.hooks[key]) {
        return;
      }
      const keyHooks = this.hooks[key];
      const len = keyHooks.length;
      for (let i = 0; i < len; ++i) {
        if (keyHooks[i] && keyHooks[i].when === when && Reflect.apply(keyHooks[i].hook, this, [])) {
          if (keyHooks[i].hookId) {
            delete this.hookIds[keyHooks[i].hookId];
          }
          keyHooks[i] = null;
        }
      }
    }
    /**
     * Adds a hook to the popup. Hook functions are run with <code>this</code> set to refer to the
     * Navpopup instance, and no arguments.
     *
     * @param {Function} hook The hook function. Functions that return true are deleted.
     * @param {string} key Key name of the {@source #hooks} array - one of 'create', 'unhide', 'hide'
     * @param {string} when Controls exactly when the hook is run: either 'before' or 'after'
     * @param {string} uid A truthy string identifying the hook function; if it matches another hook
     * in this position, it won't be added again.
     */
    addHook(hook, key, when, uid) {
      when || (when = "after");
      if (!this.hooks[key]) {
        return;
      }
      let hookId;
      if (uid) {
        hookId = [key, when, uid].join("|");
        if (this.hookIds[hookId]) {
          return;
        }
        this.hookIds[hookId] = true;
      }
      this.hooks[key].push({
        hook,
        when,
        hookId
      });
    }
    /**
     * Creates the main DIV element, which contains all the actual popup content.
     * Runs hooks with key 'create'.
     *
     * @private
     */
    createMainDiv() {
      var _this$className;
      if (this.mainDiv) {
        return;
      }
      this.runHooks("create", "before");
      const mainDiv = document.createElement("div");
      const self = this;
      mainDiv.onclick = (e) => {
        self.onclickListener(e);
      };
      mainDiv.className = (_this$className = this.className) !== null && _this$className !== void 0 ? _this$className : "navpopup_maindiv";
      mainDiv.id = mainDiv.className + this.uid;
      mainDiv.style.position = "absolute";
      mainDiv.style.minWidth = "350px";
      mainDiv.style.display = "none";
      mainDiv.className = "navpopup";
      mainDiv.navpopup = this;
      this.mainDiv = mainDiv;
      document.querySelector("body").append(mainDiv);
      this.runHooks("create", "after");
    }
    /**
     * Calls the {@source #raise} method.
     *
     * @private
     */
    onclickListener() {
      this.raise();
    }
    /**
     * Makes the popup draggable, using a {@source Drag} object.
     *
     * @param {string} handleName
     * @private
     */
    makeDraggable(handleName) {
      if (!this.mainDiv) {
        this.createMainDiv();
      }
      const drag = new Drag();
      if (!handleName) {
        drag.startCondition = (e) => {
          try {
            if (!e.shiftKey) {
              return false;
            }
          } catch {
            return false;
          }
          return true;
        };
      }
      let dragHandle;
      if (handleName) {
        dragHandle = document.querySelector("#".concat(handleName));
      }
      dragHandle || (dragHandle = this.mainDiv);
      const self = this;
      drag.endHook = (x, y) => {
        Navpopup.tracker.dirty = true;
        self.reposition(x, y);
      };
      drag.init(dragHandle, this.mainDiv);
    }
    /**
     * Hides the popup using CSS. Runs hooks with key 'hide'.
     * Sets {@source #visible} appropriately.
     * {@source #banish} should be called externally instead of this method.
     *
     * @private
     */
    hide() {
      this.runHooks("hide", "before");
      this.abortDownloads();
      if (this.visible !== void 0 && this.visible) {
        this.mainDiv.style.display = "none";
        this.visible = false;
      }
      this.runHooks("hide", "after");
    }
    /**
     * Shows the popup using CSS. Runs hooks with key 'unhide'.
     * Sets {@source #visible} appropriately.   {@source #show} should be called externally instead of this method.
     *
     * @private
     */
    unhide() {
      this.runHooks("unhide", "before");
      if (this.visible !== void 0 && !this.visible) {
        this.mainDiv.style.display = "inline";
        this.visible = true;
      }
      this.runHooks("unhide", "after");
    }
    /**
     * Sets the <code>innerHTML</code> attribute of the main div containing the popup content.
     *
     * @param {string} html The HTML to set.
     */
    setInnerHTML(html) {
      this.mainDiv.innerHTML = html;
    }
    /**
     * Updates the {@source #width} and {@source #height} attributes with the CSS properties.
     *
     * @private
     */
    updateDimensions() {
      this.width = Number.parseInt(this.mainDiv.offsetWidth, 10);
      this.height = Number.parseInt(this.mainDiv.offsetHeight, 10);
    }
    /**
     * Checks if the point (x,y) is within {@source #fuzz} of the
     * {@source #mainDiv}.
     *
     * @param {integer} x x-coordinate (px)
     * @param {integer} y y-coordinate (px)
     * @type boolean
     */
    isWithin(x, y) {
      if (!this.visible) {
        return false;
      }
      this.updateDimensions();
      const fuzz = this.fuzz || 0;
      return x + fuzz >= this.left && x - fuzz <= this.left + this.width && y + fuzz >= this.top && y - fuzz <= this.top + this.height;
    }
    /**
     * Adds a download to {@source #downloads}.
     *
     * @param {Downloader} download
     */
    addDownload(download) {
      if (!download) {
        return;
      }
      this.downloads.push(download);
    }
    /**
     * Aborts the downloads listed in {@source #downloads}.
     *
     * @see Downloader#abort
     */
    abortDownloads() {
      var _iterator20 = _createForOfIteratorHelper(this.downloads), _step20;
      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
          const d = _step20.value;
          if (d && d.abort) {
            d.abort();
          }
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
      this.downloads = [];
    }
  }
  Navpopup.uid = 0;
  Navpopup.highest = 1e3;
  Navpopup.tracker = new Mousetracker();
  const delFmt = (x) => {
    if (x.length === 0) {
      return "";
    }
    return "<del class='popupDiff'>".concat(x.join(""), "</del>");
  };
  const insFmt = (x) => {
    if (x.length === 0) {
      return "";
    }
    return "<ins class='popupDiff'>".concat(x.join(""), "</ins>");
  };
  const countCrossings = (a, b, i, eject) => {
    if (!b[i].row && b[i].row !== 0) {
      return -1;
    }
    let count = 0;
    var _iterator21 = _createForOfIteratorHelper(a.entries()), _step21;
    try {
      for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
        const [j, element] = _step21.value;
        if (!element.row && element.row !== 0) {
          continue;
        }
        if ((j - b[i].row) * (i - element.row) > 0) {
          if (eject) {
            return true;
          }
          count++;
        }
      }
    } catch (err) {
      _iterator21.e(err);
    } finally {
      _iterator21.f();
    }
    return count;
  };
  const shortenDiffString = function shortenDiffString2(str, context) {
    const re = /(<del[\S\s]*?<\/del>|<ins[\S\s]*?<\/ins>)/;
    const splitted = str.split(re);
    let ret = [""];
    for (let i = 0; i < splitted.length; i += 2) {
      if (splitted[i].length < 2 * context) {
        ret[ret.length - 1] += splitted[i];
        if (i + 1 < splitted.length) {
          ret[ret.length - 1] += splitted[i + 1];
        }
        continue;
      } else {
        if (i > 0) {
          ret[ret.length - 1] += splitted[i].slice(0, Math.max(0, context));
        }
        if (i + 1 < splitted.length) {
          ret.push(splitted[i].slice(Math.max(0, splitted[i].length - context)) + splitted[i + 1]);
        }
      }
    }
    while (ret.length > 0 && !ret[0]) {
      ret = ret.slice(1);
    }
    return ret;
  };
  const diffString = (o, n) => {
    let i;
    const oSplitted = o.split(/\b/);
    const nSplitted = n.split(/\b/);
    for (i = 0; i < oSplitted.length; ++i) {
      oSplitted[i] = oSplitted[i].entify();
    }
    for (i = 0; i < nSplitted.length; ++i) {
      nSplitted[i] = nSplitted[i].entify();
    }
    const out = diff(oSplitted, nSplitted);
    let str = "";
    let acc = [];
    let maxOutputPair = 0;
    for (i = 0; i < out.n.length; ++i) {
      if (out.n[i].paired) {
        if (maxOutputPair > out.n[i].row) {
          out.o[out.n[i].row] = out.o[out.n[i].row].text;
          out.n[i] = out.n[i].text;
        }
        if (maxOutputPair < out.n[i].row) {
          maxOutputPair = out.n[i].row;
        }
      }
    }
    for (i = 0; i < out.o.length && !out.o[i].paired; ++i) {
      acc.push(out.o[i]);
    }
    str += delFmt(acc);
    acc = [];
    for (i = 0; i < out.n.length; ++i) {
      while (i < out.n.length && !out.n[i].paired) {
        acc.push(out.n[i++]);
      }
      str += insFmt(acc);
      acc = [];
      if (i < out.n.length) {
        str += out.n[i].text;
        let m = out.n[i].row + 1;
        while (m < out.o.length && !out.o[m].paired) {
          acc.push(out.o[m++]);
        }
        str += delFmt(acc);
        acc = [];
      }
    }
    return str;
  };
  const jsReservedProperties = new RegExp("^(constructor|prototype|__((define|lookup)[GS]etter)__|eval|hasOwnProperty|propertyIsEnumerable|to(Source|String|LocaleString)|(un)?watch|valueOf)$");
  const diffBugAlert = function diffBugAlert2(word) {
    if (!diffBugAlert2.list[word]) {
      diffBugAlert2.list[word] = 1;
      void mw.notify("Bad word: ".concat(word, "\n\nPlease report this bug."), {
        tag: "popups",
        type: "error"
      });
    }
  };
  diffBugAlert.list = {};
  const makeDiffHashtable = (src) => {
    const ret = {};
    for (let i = 0; i < src.length; i++) {
      var _src$i, _ret$_src$i;
      if (jsReservedProperties.test(src[i])) {
        src[i] += "<!-- -->";
      }
      (_ret$_src$i = ret[_src$i = src[i]]) !== null && _ret$_src$i !== void 0 ? _ret$_src$i : ret[_src$i] = [];
      try {
        ret[src[i]].push(i);
      } catch {
        diffBugAlert(src[i]);
      }
    }
    return ret;
  };
  const diff = (o, n) => {
    const ns = makeDiffHashtable(n);
    const os = makeDiffHashtable(o);
    let i;
    for (i in ns) {
      if (ns[i].length === 1 && os[i] && os[i].length === 1) {
        n[ns[i][0]] = {
          text: n[ns[i][0]],
          row: os[i][0],
          paired: true
        };
        o[os[i][0]] = {
          text: o[os[i][0]],
          row: ns[i][0],
          paired: true
        };
      }
    }
    for (i = 0; i < n.length - 1; i++) {
      if (n[i].paired && !n[i + 1].paired && n[i].row + 1 < o.length && !o[n[i].row + 1].paired && n[i + 1] === o[n[i].row + 1]) {
        n[i + 1] = {
          text: n[i + 1],
          row: n[i].row + 1,
          paired: true
        };
        o[n[i].row + 1] = {
          text: o[n[i].row + 1],
          row: i + 1,
          paired: true
        };
      }
    }
    for (i = n.length - 1; i > 0; i--) {
      if (n[i].paired && !n[i - 1].paired && n[i].row > 0 && !o[n[i].row - 1].paired && n[i - 1] === o[n[i].row - 1]) {
        n[i - 1] = {
          text: n[i - 1],
          row: n[i].row - 1,
          paired: true
        };
        o[n[i].row - 1] = {
          text: o[n[i].row - 1],
          row: i - 1,
          paired: true
        };
      }
    }
    return {
      o,
      n
    };
  };
  const setSiteInfo = () => {
    if (window.popupLocalDebug) {
      pg.wiki.hostname = "en.wikipedia.org";
    } else {
      pg.wiki.hostname = location.hostname;
    }
    pg.wiki.wikimedia = /(wiki([mp]edia|source|books|news|quote|versity|species|voyage|data)|metawiki|wiktionary|mediawiki)\.org/.test(pg.wiki.hostname);
    pg.wiki.wikia = /\.wikia\.com$/i.test(pg.wiki.hostname);
    pg.wiki.isLocal = pg.wiki.hostname.startsWith("localhost");
    pg.wiki.commons = pg.wiki.wikimedia && pg.wiki.hostname !== "commons.wikimedia.org" ? "commons.wikimedia.org" : null;
    pg.wiki.lang = mw.config.get("wgContentLanguage");
    const port = location.port ? ":".concat(location.port) : "";
    pg.wiki.sitebase = pg.wiki.hostname + port;
  };
  const setUserInfo = () => {
    const params = {
      action: "query",
      list: "users",
      ususers: mw.config.get("wgUserName"),
      usprop: "rights"
    };
    pg.user.canReview = false;
    if (getValueOf("popupReview")) {
      getMwApi().get(params).done((data) => {
        const [{
          rights
        }] = data.query.users;
        pg.user.canReview = rights.includes("review");
      });
    }
  };
  const fetchSpecialPageNames = () => {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      meta: "siteinfo",
      siprop: "specialpagealiases",
      uselang: "content",
      // cache for an hour
      smaxage: 3600,
      maxage: 3600
    };
    return getMwApi().get(params).then((data) => {
      pg.wiki.specialpagealiases = data.query.specialpagealiases;
    });
  };
  const setTitleBase = () => {
    const protocol = window.popupLocalDebug ? "http:" : location.protocol;
    pg.wiki.articlePath = mw.config.get("wgArticlePath").replace(/\/\$1/, "");
    pg.wiki.botInterfacePath = mw.config.get("wgScript");
    pg.wiki.APIPath = "".concat(mw.config.get("wgScriptPath"), "/api.php");
    const titletail = "".concat(pg.wiki.botInterfacePath, "?title=");
    pg.wiki.titlebase = "".concat(protocol, "//").concat(pg.wiki.sitebase).concat(titletail);
    pg.wiki.wikibase = "".concat(protocol, "//").concat(pg.wiki.sitebase).concat(pg.wiki.botInterfacePath);
    pg.wiki.apiwikibase = "".concat(protocol, "//").concat(pg.wiki.sitebase).concat(pg.wiki.APIPath);
    pg.wiki.articlebase = "".concat(protocol, "//").concat(pg.wiki.sitebase).concat(pg.wiki.articlePath);
    pg.wiki.commonsbase = "".concat(protocol, "//").concat(pg.wiki.commons).concat(pg.wiki.botInterfacePath);
    pg.wiki.apicommonsbase = "".concat(protocol, "//").concat(pg.wiki.commons).concat(pg.wiki.APIPath);
    pg.re.basenames = new RegExp("^(".concat(map(literalizeRegex, [pg.wiki.titlebase, pg.wiki.articlebase]).join("|"), ")"));
  };
  const setMainRegex = () => {
    const reStart = "[^:]*://";
    let preTitles = "".concat(literalizeRegex(mw.config.get("wgScriptPath")), "/(?:index[.]php|wiki[.]phtml)[?]title=");
    preTitles += "|".concat(literalizeRegex("".concat(pg.wiki.articlePath, "/")));
    const reEnd = "(".concat(preTitles, ")([^&?#]*)[^#]*(?:#(.+))?");
    pg.re.main = new RegExp(reStart + literalizeRegex(pg.wiki.sitebase) + reEnd);
  };
  const buildSpecialPageGroup = (specialPageObj) => {
    const variants = [];
    variants.push(mw.util.escapeRegExp(specialPageObj.realname), mw.util.escapeRegExp(encodeURI(specialPageObj.realname)));
    var _iterator22 = _createForOfIteratorHelper(specialPageObj.aliases), _step22;
    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
        const alias = _step22.value;
        variants.push(mw.util.escapeRegExp(alias), mw.util.escapeRegExp(encodeURI(alias)));
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }
    return variants.join("|");
  };
  const setRegexps = () => {
    setMainRegex();
    const sp = nsRe(pg.nsSpecialId);
    pg.re.urlNoPopup = new RegExp("((title=|/)".concat(sp, "(?:%3A|:)|section=[0-9]|^#$)"));
    var _iterator23 = _createForOfIteratorHelper(pg.wiki.specialpagealiases), _step23;
    try {
      for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
        const specialpage = _step23.value;
        switch (specialpage.realname) {
          case "Contributions":
            pg.re.contribs = new RegExp("(title=|/)".concat(sp, "(?:%3A|:)(?:").concat(buildSpecialPageGroup(specialpage), ")(&target=|/|/").concat(nsRe(pg.nsUserId), ":)(.*)"), "i");
            break;
          case "Diff":
            pg.re.specialdiff = new RegExp("/".concat(sp, "(?:%3A|:)(?:").concat(buildSpecialPageGroup(specialpage), ")/([^?#]*)"), "i");
            break;
          case "Emailuser":
            pg.re.email = new RegExp("(title=|/)".concat(sp, "(?:%3A|:)(?:").concat(buildSpecialPageGroup(specialpage), ")(&target=|/|/(?:").concat(nsRe(pg.nsUserId), ":)?)(.*)"), "i");
            break;
          case "Whatlinkshere":
            pg.re.backlinks = new RegExp("(title=|/)".concat(sp, "(?:%3A|:)(?:").concat(buildSpecialPageGroup(specialpage), ")(&target=|/)([^&]*)"), "i");
            break;
        }
      }
    } catch (err) {
      _iterator23.e(err);
    } finally {
      _iterator23.f();
    }
    const im = nsReImage();
    pg.re.image = new RegExp("(^|\\[\\[)".concat(im, ": *([^|\\]]*[^|\\] ])").concat(String.raw(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["([^0-9]]*([0-9]+) *px)?|(?:\n *[|]?|[|]) *"], ["([^0-9\\]]*([0-9]+) *px)?|(?:\\n *[|]?|[|]) *"]))), "(").concat(getValueOf("popupImageVarsRegexp"), ") *= *(?:\\[\\[ *)?(?:").concat(im, ":)?").concat(String.raw(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["([^|]*?)(?:]])? *[|]? *\n"], ["([^|]*?)(?:\\]\\])? *[|]? *\\n"])))), "img");
    pg.re.imageBracketCount = 6;
    pg.re.category = new RegExp("\\[\\[".concat(nsRe(pg.nsCategoryId), ": *([^|\\]]*[^|\\] ]) *"), "i");
    pg.re.categoryBracketCount = 1;
    pg.re.ipUser = /^(?::(?::|(?::[\dA-Fa-f]{1,4}){1,7})|[\dA-Fa-f]{1,4}(?::[\dA-Fa-f]{1,4}){0,6}::|[\dA-Fa-f]{1,4}(?::[\dA-Fa-f]{1,4}){7})|(((25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d))$/;
    pg.re.stub = new RegExp(getValueOf("popupStubRegexp"), "im");
    pg.re.disambig = new RegExp(getValueOf("popupDabRegexp"), "im");
    pg.re.oldid = /[&?]oldid=([^&]*)/;
    pg.re.diff = /[&?]diff=([^&]*)/;
  };
  const setupCache = () => {
    pg.cache.pages = [];
  };
  const setMisc = () => {
    pg.current.link = null;
    pg.current.links = [];
    pg.current.linksHash = {};
    setupCache();
    pg.timer.checkPopupPosition = null;
    pg.counter.loop = 0;
    pg.idNumber = 0;
    pg.misc.decodeExtras = [
      {
        from: "%2C",
        to: ","
      },
      {
        from: "_",
        to: " "
      },
      {
        from: "%24",
        to: "$"
      },
      {
        from: "%26",
        to: "&"
      }
      // no ,
    ];
  };
  const getMwApi = () => {
    if (!pg.api.client) {
      pg.api.userAgent = "Navigation popups/1.0";
      pg.api.client = api;
    }
    return pg.api.client;
  };
  const setupPopups = function setupPopups2(callback) {
    if (setupPopups2.completed) {
      if (typeof callback === "function") {
        callback();
      }
      return;
    }
    fetchSpecialPageNames().then(() => {
      setupDebugging();
      setSiteInfo();
      setTitleBase();
      setOptions();
      setUserInfo();
      setNamespaces();
      setInterwiki();
      setRegexps();
      setRedirs();
      setMisc();
      setupLivePreview();
      setupTooltips();
      log("In setupPopups(), just called setupTooltips()");
      Navpopup.tracker.enable();
      setupPopups2.completed = true;
      if (typeof callback === "function") {
        callback();
      }
    });
  };
  const defaultNavlinkSpec = () => {
    let str = "";
    str += "<b><<mainlink|shortcut= >></b>";
    if (getValueOf("popupLastEditLink")) {
      str += "*<<lastEdit|shortcut=/>>|<<lastContrib>>|<<sinceMe>>if(oldid){|<<oldEdit>>|<<diffCur>>}";
    }
    str += "if(user){<br><<contribs|shortcut=c>>*<<userlog|shortcut=L|log>>";
    str += "if(ipuser){*<<arin>>}if(wikimedia){*<<count|shortcut=#>>}";
    str += "if(ipuser){}else{*<<email|shortcut=E>>}if(admin){*<<block|shortcut=b>>|<<blocklog|log>>}}";
    const editstr = "<<edit|shortcut=e>>";
    const editOldidStr = "if(oldid){<<editOld|shortcut=e>>|<<revert|shortcut=v|rv>>|<<edit|cur>>}else{".concat(editstr, "}");
    const historystr = "<<history|shortcut=h>>|<<editors|shortcut=E|>>";
    const watchstr = "<<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>>";
    str += "<br>if(talk){".concat(editOldidStr, "|<<new|shortcut=+>>*").concat(historystr, "*").concat(watchstr, "*<b><<article|shortcut=a>></b>|<<editArticle|edit>>}else{").concat(
      // not a talk page
      editOldidStr,
      "*"
    ).concat(historystr, "*").concat(watchstr, "*<b><<talk|shortcut=t>></b>|<<editTalk|edit>>|<<newTalk|shortcut=+|new>>}");
    str += "<br><<whatLinksHere|shortcut=l>>*<<relatedChanges|shortcut=r>>*<<move|shortcut=m>>";
    str += "if(admin){<br><<unprotect|unprotectShort>>|<<protect|shortcut=p>>|<<protectlog|log>>*<<undelete|undeleteShort>>|<<delete|shortcut=d>>|<<deletelog|log>>}";
    return str;
  };
  const navLinksHTML = (article, _hint, params) => {
    const str = '<span class="popupNavLinks">'.concat(defaultNavlinkSpec(), "</span>");
    return navlinkStringToHTML(str, article, params);
  };
  const expandConditionalNavlinkString = function expandConditionalNavlinkString2(s, article, z, recursionCount) {
    const {
      oldid
    } = z;
    const {
      rcid
    } = z;
    const {
      diff: diff2
    } = z;
    if (typeof recursionCount !== "number") {
      recursionCount = 0;
    }
    const conditionalSplitRegex = /(;?\s*if\s*\(\s*(\w*)\s*\)\s*{([^{}]*)}(\s*else\s*{([^{}]*?)}|))/i;
    const splitted = s.split(conditionalSplitRegex);
    const numParens = 5;
    let [ret] = splitted;
    for (let i = 1; i < splitted.length; i = i + numParens + 1) {
      const testString = splitted[i + 2 - 1];
      const trueString = splitted[i + 3 - 1];
      let falseString = splitted[i + 5 - 1];
      if (falseString === void 0 || !falseString) {
        falseString = "";
      }
      let testResult;
      switch (testString) {
        case "user":
          testResult = !!article.userName();
          break;
        case "talk":
          testResult = !article.talkPage();
          break;
        case "admin":
          testResult = !!getValueOf("popupAdminLinks");
          break;
        case "oldid":
          testResult = !!(oldid !== void 0 && oldid);
          break;
        case "rcid":
          testResult = !!(rcid !== void 0 && rcid);
          break;
        case "ipuser":
          testResult = !!article.isIpUser();
          break;
        case "mainspace_en":
          testResult = isInMainNamespace(article) && pg.wiki.hostname === "en.wikipedia.org";
          break;
        case "wikimedia":
          testResult = !!pg.wiki.wikimedia;
          break;
        case "diff":
          testResult = !!(diff2 !== void 0 && diff2);
          break;
      }
      switch (testResult) {
        case null:
          ret += splitted[i];
          break;
        case true:
          ret += trueString;
          break;
        case false:
          ret += falseString;
          break;
      }
      ret += splitted[i + numParens];
    }
    if (conditionalSplitRegex.test(ret) && recursionCount < 10) {
      return expandConditionalNavlinkString2(ret, article, z, recursionCount + 1);
    }
    return ret;
  };
  const navlinkStringToArray = (s, article, params) => {
    s = expandConditionalNavlinkString(s, article, params);
    const splitted = s.split(/<<(.*?)>>/);
    const ret = [];
    var _iterator24 = _createForOfIteratorHelper(splitted.entries()), _step24;
    try {
      for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) {
        const [i, element] = _step24.value;
        if (i % 2) {
          const t = new navlinkTag();
          const ss = element.split("|");
          [t.id] = ss;
          for (let j = 1; j < ss.length; ++j) {
            const sss = ss[j].split("=");
            if (sss.length > 1) {
              [, t[sss[0]]] = sss;
            } else {
              t.text = popupString(sss[0]);
            }
          }
          t.article = article;
          const {
            oldid
          } = params;
          const {
            rcid
          } = params;
          const {
            diff: diff2
          } = params;
          if (oldid !== void 0 && oldid !== null) {
            t.oldid = oldid;
          }
          if (rcid !== void 0 && rcid !== null) {
            t.rcid = rcid;
          }
          if (diff2 !== void 0 && diff2 !== null) {
            t.diff = diff2;
          }
          if (!t.text && t.id !== "mainlink") {
            t.text = popupString(t.id);
          }
          ret.push(t);
        } else {
          ret.push(element);
        }
      }
    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
    }
    return ret;
  };
  const navlinkSubstituteHTML = (s) => {
    return s.split("*").join(getValueOf("popupNavLinkSeparator")).split("<menurow>").join('<li class="popup_menu_row">').split("</menurow>").join("</li>").split("<menu>").join('<ul class="popup_menu">').split("</menu>").join("</ul>");
  };
  const navlinkDepth = (magic, s) => {
    return s.split("<".concat(magic, ">")).length - s.split("</".concat(magic, ">")).length;
  };
  const navlinkStringToHTML = (s, article, params) => {
    const p = navlinkStringToArray(s, article, params);
    let html = "";
    let menudepth = 0;
    let menurowdepth = 0;
    var _iterator25 = _createForOfIteratorHelper(p), _step25;
    try {
      for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) {
        const element = _step25.value;
        if (typeof element === "string") {
          html += navlinkSubstituteHTML(element);
          menudepth += navlinkDepth("menu", element);
          menurowdepth += navlinkDepth("menurow", element);
        } else if (element.type !== void 0 && element.type === "navlinkTag") {
          html += menudepth > 0 && menurowdepth === 0 ? '<li class="popup_menu_item">'.concat(element.html(), "</li>") : element.html();
        }
      }
    } catch (err) {
      _iterator25.e(err);
    } finally {
      _iterator25.f();
    }
    return html;
  };
  class navlinkTag {
    constructor() {
      this.type = "navlinkTag";
    }
    html() {
      this.getNewWin();
      this.getPrintFunction();
      let html = "";
      let opening;
      let closing;
      const tagType = "span";
      if (tagType) {
        opening = "<".concat(tagType, ' class="popup_').concat(this.id, '">');
        closing = "</".concat(tagType, ">");
      } else {
        opening = "";
        closing = "";
      }
      if (typeof this.print === "function") {
        html = this.print(this);
        if (typeof html !== "string") {
          html = "";
        } else if (this.shortcut !== void 0) {
          html = addPopupShortcut(html, this.shortcut);
        }
      } else {
        errlog("Oh dear - invalid print function for a navlinkTag, id=".concat(this.id));
      }
      return opening + html + closing;
    }
    getNewWin() {
      getValueOf("popupLinksNewWindow");
      if (pg.option.popupLinksNewWindow[this.id] === void 0) {
        this.newWin = null;
      }
      this.newWin = pg.option.popupLinksNewWindow[this.id];
    }
    getPrintFunction() {
      if (typeof this.id !== "string" || typeof this.article !== typeof {}) {
        return;
      }
      this.noPopup = 1;
      switch (this.id) {
        case "contribs":
        case "history":
        case "whatLinksHere":
        case "userPage":
        case "userTalk":
        case "talk":
        case "article":
        case "lastEdit":
          this.noPopup = null;
      }
      switch (this.id) {
        case "email":
        case "contribs":
        case "block":
        case "unblock":
        case "userlog":
        case "userSpace":
        case "deletedContribs":
          this.article = this.article.userName();
      }
      switch (this.id) {
        case "userTalk":
        case "newUserTalk":
        case "editUserTalk":
        case "userPage":
        case "blocklog":
          this.article = this.article.userName(true);
        /* falls through */
        case "pagelog":
        case "deletelog":
        case "protectlog":
          delete this.oldid;
      }
      if (this.id !== "mainlink") {
        this.article = this.article.removeAnchor();
      }
      switch (this.id) {
        case "undelete":
          this.print = specialLink;
          this.specialpage = "Undelete";
          this.sep = "/";
          break;
        case "whatLinksHere":
          this.print = specialLink;
          this.specialpage = "Whatlinkshere";
          break;
        case "relatedChanges":
          this.print = specialLink;
          this.specialpage = "Recentchangeslinked";
          break;
        case "move":
          this.print = specialLink;
          this.specialpage = "Movepage";
          break;
        case "contribs":
          this.print = specialLink;
          this.specialpage = "Contributions";
          break;
        case "deletedContribs":
          this.print = specialLink;
          this.specialpage = "Deletedcontributions";
          break;
        case "email":
          this.print = specialLink;
          this.specialpage = "EmailUser";
          this.sep = "/";
          break;
        case "block":
          this.print = specialLink;
          this.specialpage = "Blockip";
          this.sep = "&ip=";
          break;
        case "unblock":
          this.print = specialLink;
          this.specialpage = "Ipblocklist";
          this.sep = "&action=unblock&ip=";
          break;
        case "userlog":
          this.print = specialLink;
          this.specialpage = "Log";
          this.sep = "&user=";
          break;
        case "blocklog":
          this.print = specialLink;
          this.specialpage = "Log";
          this.sep = "&type=block&page=";
          break;
        case "pagelog":
          this.print = specialLink;
          this.specialpage = "Log";
          this.sep = "&page=";
          break;
        case "protectlog":
          this.print = specialLink;
          this.specialpage = "Log";
          this.sep = "&type=protect&page=";
          break;
        case "deletelog":
          this.print = specialLink;
          this.specialpage = "Log";
          this.sep = "&type=delete&page=";
          break;
        case "userSpace":
          this.print = specialLink;
          this.specialpage = "PrefixIndex";
          this.sep = "&namespace=2&prefix=";
          break;
        case "search":
          this.print = specialLink;
          this.specialpage = "Search";
          this.sep = "&fulltext=Search&search=";
          break;
        case "thank":
          this.print = specialLink;
          this.specialpage = "Thanks";
          this.sep = "/";
          this.article.value = this.diff === "prev" ? this.oldid : this.diff;
          break;
        case "unwatch":
        case "watch":
          this.print = magicWatchLink;
          this.action = "".concat(this.id, "&autowatchlist=1&autoimpl=").concat(popupString("autoedit_version"), "&actoken=").concat(autoClickToken());
          break;
        case "history":
        case "historyfeed":
        case "unprotect":
        case "protect":
          this.print = wikiLink;
          this.action = this.id;
          break;
        case "delete":
          this.print = wikiLink;
          this.action = "delete";
          if (this.article.namespaceId() === pg.nsImageId) {
            const img = this.article.stripNamespace();
            this.action += "&image=".concat(img);
          }
          break;
        case "markpatrolled":
        case "edit":
          delete this.oldid;
        /* falls through */
        case "view":
        case "purge":
        case "render":
          this.print = wikiLink;
          this.action = this.id;
          break;
        case "raw":
          this.print = wikiLink;
          this.action = "raw";
          break;
        case "new":
          this.print = wikiLink;
          this.action = "edit&section=new";
          break;
        case "mainlink":
          if (this.text === void 0) {
            this.text = this.article.toString().entify();
          }
          if (getValueOf("popupSimplifyMainLink") && isInStrippableNamespace(this.article)) {
            const s = this.text.split("/");
            this.text = s.at(-1);
            if (this.text === "" && s.length > 1) {
              this.text = s.at(-2);
            }
          }
          this.print = titledWikiLink;
          if (this.title === void 0 && pg.current.link && pg.current.link.href !== void 0) {
            var _pg$current$link$orig;
            this.title = safeDecodeURI((_pg$current$link$orig = pg.current.link.originalTitle) !== null && _pg$current$link$orig !== void 0 ? _pg$current$link$orig : this.article);
            if (this.oldid !== void 0 && this.oldid) {
              this.title = tprintf("Revision %s of %s", [this.oldid, this.title]);
            }
          }
          this.action = "view";
          break;
        case "userPage":
        case "article":
        case "editArticle":
          delete this.oldid;
          this.article = this.article.articleFromTalkOrArticle();
          this.print = wikiLink;
          this.action = this.id.indexOf("edit") === 0 ? "edit" : "view";
          break;
        case "userTalk":
        case "talk":
          this.article = this.article.talkPage();
          delete this.oldid;
          this.print = wikiLink;
          this.action = "view";
          break;
        case "arin":
          this.print = arinLink;
          break;
        case "count":
          this.print = editCounterLink;
          break;
        case "editors":
          this.print = editorListLink;
          break;
        case "lastEdit":
          this.print = titledDiffLink;
          this.title = popupString("Show the last edit");
          this.from = "prev";
          this.to = "cur";
          break;
        case "oldEdit":
          this.print = titledDiffLink;
          this.title = "".concat(popupString("Show the edit made to get revision"), " ").concat(this.oldid);
          this.from = "prev";
          this.to = this.oldid;
          break;
        case "editOld":
          this.print = wikiLink;
          this.action = "edit";
          break;
        case "undo":
          this.print = wikiLink;
          this.action = "edit&undo=";
          break;
        case "revert":
          this.print = wikiLink;
          this.action = "revert";
          break;
        case "nullEdit":
          this.print = wikiLink;
          this.action = "nullEdit";
          break;
        case "diffCur":
          this.print = titledDiffLink;
          this.title = tprintf("Show changes since revision %s", [this.oldid]);
          this.from = this.oldid;
          this.to = "cur";
          break;
        case "editUserTalk":
        case "editTalk":
          delete this.oldid;
          this.article = this.article.talkPage();
          this.action = "edit";
          this.print = wikiLink;
          break;
        case "newUserTalk":
        case "newTalk":
          this.article = this.article.talkPage();
          this.action = "edit&section=new";
          this.print = wikiLink;
          break;
        case "lastContrib":
        case "sinceMe":
          this.print = magicHistoryLink;
          break;
        case "togglePreviews":
          this.text = popupString(pg.option.simplePopups ? "enable previews" : "disable previews");
        /* falls through */
        case "disablePopups":
        case "purgePopups":
          this.print = popupMenuLink;
          break;
        default:
          this.print = function() {
            return "Unknown navlink type: ".concat(this.id);
          };
      }
    }
  }
  const popupHandleKeypress = function popupHandleKeypress2(evt) {
    var _evt$keyCode;
    const keyCode = window.event ? window.event.keyCode : (_evt$keyCode = evt.keyCode) !== null && _evt$keyCode !== void 0 ? _evt$keyCode : evt.which;
    if (!keyCode || !pg.current.link || !pg.current.link.navpopup) {
      return;
    }
    if (keyCode === 27) {
      killPopup();
      return false;
    }
    const letter = String.fromCodePoint(keyCode);
    const links = pg.current.link.navpopup.mainDiv.querySelectorAll("A");
    let startLink = 0;
    let i;
    let j;
    if (popupHandleKeypress2.lastPopupLinkSelected) {
      for (i = 0; i < links.length; ++i) {
        if (links[i] === popupHandleKeypress2.lastPopupLinkSelected) {
          startLink = i;
        }
      }
    }
    for (j = 0; j < links.length; ++j) {
      i = (startLink + j + 1) % links.length;
      if (links[i].getAttribute("popupkey") === letter) {
        if (evt && evt.preventDefault) {
          evt.preventDefault();
        }
        links[i].focus();
        popupHandleKeypress2.lastPopupLinkSelected = links[i];
        return false;
      }
    }
    if (document.oldPopupOnkeypress) {
      return document.oldPopupOnkeypress(evt);
    }
    return true;
  };
  const addPopupShortcuts = () => {
    if (document.onkeypress !== popupHandleKeypress) {
      document.oldPopupOnkeypress = document.onkeypress;
    }
    document.onkeypress = popupHandleKeypress;
  };
  const rmPopupShortcuts = () => {
    popupHandleKeypress.lastPopupLinkSelected = null;
    try {
      if (document.oldPopupOnkeypress && document.oldPopupOnkeypress === popupHandleKeypress) {
        document.onkeypress = null;
        return;
      }
      document.onkeypress = document.oldPopupOnkeypress;
    } catch {
    }
  };
  const addLinkProperty = (html, property) => {
    const i = html.indexOf(">");
    if (i < 0) {
      return html;
    }
    return "".concat(html.slice(0, Math.max(0, i)), " ").concat(property).concat(html.slice(Math.max(0, i)));
  };
  const addPopupShortcut = (html, key) => {
    if (!getValueOf("popupShortcutKeys")) {
      return html;
    }
    const ret = addLinkProperty(html, 'popupkey="'.concat(key, '"'));
    if (key === " ") {
      key = popupString("spacebar");
    }
    return ret.replace(/^(.*?)(title=")(.*?)(".*)$/i, "$1$2$3 [".concat(key, "]$4"));
  };
  const loadDiff = (article, oldid, diff2, navpop) => {
    navpop.diffData = {
      oldRev: {},
      newRev: {}
    };
    const api2 = getMwApi();
    const params = {
      action: "compare",
      prop: ["ids", "title"],
      smaxage: 3600,
      maxage: 3600
    };
    if (article.title) {
      params.fromtitle = article.title;
    }
    switch (diff2) {
      case "cur":
        switch (oldid) {
          case null:
          case "":
          case "prev":
            params.torelative = "prev";
            break;
          default:
            params.fromrev = oldid;
            params.torelative = "cur";
            break;
        }
        break;
      case "prev":
        if (oldid) {
          params.fromrev = oldid;
        }
        params.torelative = "prev";
        break;
      case "next":
        params.fromrev = oldid || 0;
        params.torelative = "next";
        break;
      default:
        params.fromrev = oldid || 0;
        params.torev = diff2 || 0;
        break;
    }
    api2.get(params).then((data) => {
      navpop.diffData.oldRev.revid = data.compare.fromrevid;
      navpop.diffData.newRev.revid = data.compare.torevid;
      addReviewLink(navpop, "popupMiscTools");
      const go = () => {
        pendingNavpopTask(navpop);
        let url = "".concat(pg.wiki.apiwikibase, "?format=json&formatversion=2&action=query&");
        url += "revids=".concat(navpop.diffData.oldRev.revid, "|").concat(navpop.diffData.newRev.revid);
        url += "&prop=revisions&rvprop=ids|timestamp|content";
        getPageWithCaching(url, doneDiff, navpop);
        return true;
      };
      if (navpop.visible || !getValueOf("popupLazyDownloads")) {
        go();
      } else {
        navpop.addHook(go, "unhide", "before", "DOWNLOAD_DIFFS");
      }
    });
  };
  const addReviewLink = (navpop, target) => {
    if (!pg.user.canReview) {
      return;
    }
    if (navpop.diffData.newRev.revid <= navpop.diffData.oldRev.revid) {
      return;
    }
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: ["info", "flagged"],
      revids: navpop.diffData.oldRev.revid
    };
    getMwApi().get(params).then((data) => {
      const stable_revid = data.query.pages[0].flagged && data.query.pages[0].flagged.stable_revid || 0;
      if (stable_revid === navpop.diffData.oldRev.revid) {
        const a = document.createElement("a");
        a.innerHTML = popupString("mark patrolled");
        a.title = popupString("markpatrolledHint");
        a.onclick = () => {
          const params2 = {
            action: "review",
            comment: tprintf("defaultpopupReviewedSummary", [navpop.diffData.oldRev.revid, navpop.diffData.newRev.revid]),
            revid: navpop.diffData.newRev.revid
          };
          getMwApi().postWithToken("csrf", params2).done(() => {
            a.style.display = "none";
          }).fail(() => {
            void mw.notify(popupString("Could not marked this edit as patrolled"), {
              tag: "popups",
              type: "error"
            });
          });
        };
        setPopupHTML(a, target, navpop.idNumber, null, true);
      }
    });
  };
  const doneDiff = (download) => {
    if (!download.owner || !download.owner.diffData) {
      return;
    }
    const navpop = download.owner;
    completedNavpopTask(navpop);
    let pages;
    let revisions = [];
    try {
      ({
        pages
      } = getJsObj(download.data).query);
      var _iterator26 = _createForOfIteratorHelper(pages), _step26;
      try {
        for (_iterator26.s(); !(_step26 = _iterator26.n()).done; ) {
          const page = _step26.value;
          revisions = [...revisions, ...page.revisions];
        }
      } catch (err) {
        _iterator26.e(err);
      } finally {
        _iterator26.f();
      }
      for (var _i3 = 0, _revisions = revisions; _i3 < _revisions.length; _i3++) {
        const revision = _revisions[_i3];
        if (revision.revid === navpop.diffData.oldRev.revid) {
          navpop.diffData.oldRev.revision = revision;
        } else if (revision.revid === navpop.diffData.newRev.revid) {
          navpop.diffData.newRev.revision = revision;
        }
      }
    } catch {
      errlog("Could not get diff");
    }
    insertDiff(navpop);
  };
  const rmBoringLines = (a, b, context) => {
    if (context === void 0) {
      context = 2;
    }
    const aa = [];
    const aaa = [];
    const bb = [];
    const bbb = [];
    let i;
    let j;
    for (i = 0; i < a.length; ++i) {
      if (!a[i].paired) {
        aa[i] = 1;
      } else if (countCrossings(b, a, i, true)) {
        aa[i] = 1;
        bb[a[i].row] = 1;
      }
    }
    for (i = 0; i < b.length; ++i) {
      if (bb[i] === 1) {
        continue;
      }
      if (!b[i].paired) {
        bb[i] = 1;
      }
    }
    for (i = 0; i < b.length; ++i) {
      if (bb[i] === 1) {
        for (j = Math.max(0, i - context); j < Math.min(b.length, i + context); ++j) {
          if (!bb[j]) {
            bb[j] = 1;
            aa[b[j].row] = 0.5;
          }
        }
      }
    }
    for (i = 0; i < a.length; ++i) {
      if (aa[i] === 1) {
        for (j = Math.max(0, i - context); j < Math.min(a.length, i + context); ++j) {
          if (!aa[j]) {
            aa[j] = 1;
            bb[a[j].row] = 0.5;
          }
        }
      }
    }
    for (i = 0; i < bb.length; ++i) {
      if (bb[i] > 0) {
        if (b[i].paired) {
          bbb.push(b[i].text);
        } else {
          bbb.push(b[i]);
        }
      }
    }
    for (i = 0; i < aa.length; ++i) {
      if (aa[i] > 0) {
        if (a[i].paired) {
          aaa.push(a[i].text);
        } else {
          aaa.push(a[i]);
        }
      }
    }
    return {
      a: aaa,
      b: bbb
    };
  };
  const stripOuterCommonLines = (a, b, context) => {
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) {
      ++i;
    }
    let j = a.length - 1;
    let k = b.length - 1;
    while (j >= 0 && k >= 0 && a[j] === b[k]) {
      --j;
      --k;
    }
    return {
      a: a.slice(Math.max(0, i - 1 - context), Math.min(a.length + 1, j + context + 1)),
      b: b.slice(Math.max(0, i - 1 - context), Math.min(b.length + 1, k + context + 1))
    };
  };
  const insertDiff = (navpop) => {
    let oldlines = navpop.diffData.oldRev.revision.content.split("\n");
    let newlines = navpop.diffData.newRev.revision.content.split("\n");
    let inner = stripOuterCommonLines(oldlines, newlines, getValueOf("popupDiffContextLines"));
    oldlines = inner.a;
    newlines = inner.b;
    let truncated = false;
    getValueOf("popupDiffMaxLines");
    if (oldlines.length > pg.option.popupDiffMaxLines || newlines.length > pg.option.popupDiffMaxLines) {
      truncated = true;
      inner = stripOuterCommonLines(oldlines.slice(0, pg.option.popupDiffMaxLines), newlines.slice(0, pg.option.popupDiffMaxLines), pg.option.popupDiffContextLines);
      oldlines = inner.a;
      newlines = inner.b;
    }
    const lineDiff = diff(oldlines, newlines);
    const lines2 = rmBoringLines(lineDiff.o, lineDiff.n);
    const oldlines2 = lines2.a;
    const newlines2 = lines2.b;
    let html = "<hr>";
    if (getValueOf("popupDiffDates")) {
      html += diffDatesTable(navpop);
      html += "<hr>";
    }
    html += shortenDiffString(diffString(oldlines2.join("\n"), newlines2.join("\n")), getValueOf("popupDiffContextCharacters")).join("<hr>");
    setPopupTipsAndHTML(html.split("\n").join("<br>") + (truncated ? "<hr><b>".concat(popupString("Diff truncated for performance reasons"), "</b>") : ""), "popupPreview", navpop.idNumber);
  };
  const diffDatesTable = (navpop) => {
    let html = '<table class="popup_diff_dates">';
    html += diffDatesTableRow(navpop.diffData.newRev.revision, tprintf("New revision"));
    html += diffDatesTableRow(navpop.diffData.oldRev.revision, tprintf("Old revision"));
    html += "</table>";
    return html;
  };
  const diffDatesTableRow = (revision, label) => {
    let txt = "";
    const lastModifiedDate = new Date(revision.timestamp);
    txt = formattedDateTime(lastModifiedDate);
    const revlink = generalLink({
      url: "".concat(mw.config.get("wgScript"), "?oldid=").concat(revision.revid),
      text: label,
      title: label
    });
    return simplePrintf("<tr><td>%s</td><td>%s</td></tr>", [revlink, txt]);
  };
  const titledDiffLink = (l) => {
    return titledWikiLink({
      article: l.article,
      action: "".concat(l.to, "&oldid=").concat(l.from),
      newWin: l.newWin,
      noPopup: l.noPopup,
      text: l.text,
      title: l.title,
      /* hack: no oldid here */
      actionName: "diff"
    });
  };
  const wikiLink = (l) => {
    if (!(typeof l.article === typeof {} && typeof l.action === "string" && typeof l.text === "string")) {
      return null;
    }
    if (l.oldid === void 0) {
      l.oldid = null;
    }
    const savedOldid = l.oldid;
    if (!/^(edit|view|revert|render)$|^raw/.test(l.action)) {
      l.oldid = null;
    }
    let hint = popupString("".concat(l.action, "Hint"));
    const oldidData = [l.oldid, safeDecodeURI(l.article)];
    let revisionString = tprintf("revision %s of %s", oldidData);
    log("revisionString=".concat(revisionString));
    switch (l.action) {
      case "edit&section=new":
        hint = popupString("newSectionHint");
        break;
      case "edit&undo=":
        if (l.diff && l.diff !== "prev" && savedOldid) {
          l.action += "".concat(l.diff, "&undoafter=").concat(savedOldid);
        } else if (savedOldid) {
          l.action += savedOldid;
        }
        hint = popupString("undoHint");
        break;
      case "raw&ctype=text/css":
        hint = popupString("rawHint");
        break;
      case "revert": {
        const p = parseParams(pg.current.link.href);
        l.action = "edit&autoclick=wpSave&actoken=".concat(autoClickToken(), "&autoimpl=").concat(popupString("autoedit_version"), "&autosummary=").concat(revertSummary(l.oldid, p.diff));
        if (p.diff === "prev") {
          l.action += "&direction=prev";
          revisionString = tprintf("the revision prior to revision %s of %s", oldidData);
        }
        if (getValueOf("popupRevertSummaryPrompt")) {
          l.action += "&autosummaryprompt=true";
        }
        if (getValueOf("popupMinorReverts")) {
          l.action += "&autominor=true";
        }
        log("revisionString is now ".concat(revisionString));
        break;
      }
      case "nullEdit":
        l.action = "edit&autoclick=wpSave&actoken=".concat(autoClickToken(), "&autoimpl=").concat(popupString("autoedit_version"), "&autosummary=null");
        break;
      case "historyfeed":
        l.action = "history&feed=rss";
        break;
      case "markpatrolled":
        l.action = "markpatrolled&rcid=".concat(l.rcid);
    }
    if (hint) {
      hint = l.oldid ? simplePrintf(hint, [revisionString]) : simplePrintf(hint, [safeDecodeURI(l.article)]);
    } else {
      hint = safeDecodeURI("".concat(l.article, "&action=").concat(l.action)) + l.oldid ? "&oldid=".concat(l.oldid) : "";
    }
    return titledWikiLink({
      article: l.article,
      action: l.action,
      text: l.text,
      newWin: l.newWin,
      title: hint,
      oldid: l.oldid,
      noPopup: l.noPopup,
      onclick: l.onclick
    });
  };
  const revertSummary = (oldid, diff2) => {
    let ret = "";
    ret = diff2 === "prev" ? getValueOf("popupQueriedRevertToPreviousSummary") : getValueOf("popupQueriedRevertSummary");
    return "".concat(ret, "&autorv=").concat(oldid);
  };
  const titledWikiLink = (l) => {
    if (l.article === void 0 || l.action === void 0) {
      errlog("got undefined article or action in titledWikiLink");
      return null;
    }
    const base = pg.wiki.titlebase + l.article.urlString();
    let url = base;
    if (l.actionName === void 0 || !l.actionName) {
      l.actionName = "action";
    }
    if (l.action !== "view") {
      url = "".concat(base, "&").concat(l.actionName, "=").concat(l.action);
    }
    if (l.oldid !== void 0 && l.oldid) {
      url += "&oldid=".concat(l.oldid);
    }
    let cssClass = pg.misc.defaultNavlinkClassname;
    if (l.className !== void 0 && l.className) {
      cssClass = l.className;
    }
    return generalNavLink({
      url,
      newWin: l.newWin,
      title: l.title === void 0 ? null : l.title,
      text: l.text === void 0 ? null : l.text,
      className: cssClass,
      noPopup: l.noPopup,
      onclick: l.onclick
    });
  };
  pg.fn.getLastContrib = (wikipage, newWin) => {
    getHistoryInfo(wikipage, (x) => {
      processLastContribInfo(x, {
        page: wikipage,
        newWin
      });
    });
  };
  const processLastContribInfo = (info, stuff) => {
    if (!info.edits || info.edits.length === 0) {
      void mw.notify("Popups: an odd thing happened. Please retry.", {
        tag: "popups",
        type: "error"
      });
      return;
    }
    if (!info.firstNewEditor) {
      void mw.notify(tprintf("Only found one editor: %s made %s edits", [info.edits[0].editor, info.edits.length]), {
        tag: "popups",
        type: "error"
      });
      return;
    }
    const newUrl = "".concat(pg.wiki.titlebase + new Title(stuff.page).urlString(), "&diff=cur&oldid=").concat(info.firstNewEditor.oldid);
    displayUrl(newUrl, stuff.newWin);
  };
  pg.fn.getDiffSinceMyEdit = (wikipage, newWin) => {
    getHistoryInfo(wikipage, (x) => {
      processDiffSinceMyEdit(x, {
        page: wikipage,
        newWin
      });
    });
  };
  const processDiffSinceMyEdit = (info, stuff) => {
    if (!info.edits || info.edits.length === 0) {
      void mw.notify("Popups: something fishy happened. Please try again.", {
        tag: "popups",
        type: "error"
      });
      return;
    }
    const friendlyName = stuff.page.split("_").join(" ");
    if (!info.myLastEdit) {
      void mw.notify(tprintf("Couldn't find an edit by %s\nin the last %s edits to\n%s", [info.userName, getValueOf("popupHistoryLimit"), friendlyName]), {
        tag: "popups",
        type: "error"
      });
      return;
    }
    if (info.myLastEdit.index === 0) {
      void mw.notify(tprintf("%s seems to be the last editor to the page %s", [info.userName, friendlyName]), {
        type: "error"
      });
      return;
    }
    const newUrl = "".concat(pg.wiki.titlebase + new Title(stuff.page).urlString(), "&diff=cur&oldid=").concat(info.myLastEdit.oldid);
    displayUrl(newUrl, stuff.newWin);
  };
  const displayUrl = (url, newWin) => {
    if (newWin) {
      window.open(url);
    } else {
      document.location = url;
    }
  };
  pg.fn.purgePopups = () => {
    processAllPopups(true);
    setupCache();
    pg.option = {};
    abortAllDownloads();
  };
  const processAllPopups = (nullify, banish) => {
    for (let i = 0; pg.current.links && i < pg.current.links.length; ++i) {
      if (!pg.current.links[i].navpopup) {
        continue;
      }
      if (nullify || banish) {
        pg.current.links[i].navpopup.banish();
      }
      pg.current.links[i].simpleNoMore = false;
      if (nullify) {
        pg.current.links[i].navpopup = null;
      }
    }
  };
  pg.fn.disablePopups = () => {
    processAllPopups(false, true);
    setupTooltips(null, true);
  };
  pg.fn.togglePreviews = () => {
    processAllPopups(true, true);
    pg.option.simplePopups = !pg.option.simplePopups;
    abortAllDownloads();
  };
  const magicWatchLink = function magicWatchLink2(l) {
    l.onclick = simplePrintf("pg.fn.modifyWatchlist('%s','%s');return false;", [l.article.toString(true).split("\\").join("\\\\").split("'").join(String.raw(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["'"], ["\\'"])))), this.id]);
    return wikiLink(l);
  };
  pg.fn.modifyWatchlist = /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(function* (title, action) {
      const reqData = {
        action: "watch",
        formatversion: "2",
        titles: title,
        uselang: mw.config.get("wgUserLanguage")
      };
      if (action === "unwatch") {
        reqData.unwatch = true;
      }
      const mwTitle = mw.Title.newFromText(title);
      let messageName;
      if (mwTitle && mwTitle.getNamespaceId() > 0 && mwTitle.getNamespaceId() % 2 === 1) {
        messageName = action === "watch" ? "addedwatchtext-talk" : "removedwatchtext-talk";
      } else {
        messageName = action === "watch" ? "addedwatchtext" : "removedwatchtext";
      }
      yield getMwApi().postWithToken("watch", reqData);
      yield getMwApi().loadMessagesIfMissing([messageName]);
      void mw.notify(mw.message(messageName, title).parseDom(), {
        tag: "popups"
      });
    });
    return function(_x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  const magicHistoryLink = (l) => {
    let jsUrl = "";
    let title = "";
    let onClick = "";
    switch (l.id) {
      case "lastContrib":
        onClick = simplePrintf("pg.fn.getLastContrib('%s',%s)", [l.article.toString(true).split("\\").join("\\\\").split("'").join(String.raw(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["'"], ["\\'"])))), l.newWin]);
        title = popupString("lastContribHint");
        break;
      case "sinceMe":
        onClick = simplePrintf("pg.fn.getDiffSinceMyEdit('%s',%s)", [l.article.toString(true).split("\\").join("\\\\").split("'").join(String.raw(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["'"], ["\\'"])))), l.newWin]);
        title = popupString("sinceMeHint");
        break;
    }
    jsUrl = "javascript:".concat(onClick);
    onClick += ";return false;";
    return generalNavLink({
      url: jsUrl,
      newWin: false,
      title,
      text: l.text,
      noPopup: l.noPopup,
      onclick: onClick
    });
  };
  const popupMenuLink = (l) => {
    const jsUrl = simplePrintf("javascript:pg.fn.%s()", [l.id]);
    const title = popupString(simplePrintf("%sHint", [l.id]));
    const onClick = simplePrintf("pg.fn.%s();return false;", [l.id]);
    return generalNavLink({
      url: jsUrl,
      newWin: false,
      title,
      text: l.text,
      noPopup: l.noPopup,
      onclick: onClick
    });
  };
  const specialLink = (l) => {
    var _l$sep;
    if (l.specialpage === void 0 || !l.specialpage) {
      return null;
    }
    const base = "".concat(pg.wiki.titlebase + mw.config.get("wgFormattedNamespaces")[pg.nsSpecialId], ":").concat(l.specialpage);
    (_l$sep = l.sep) !== null && _l$sep !== void 0 ? _l$sep : l.sep = "&target=";
    let article = l.article.urlString({
      keepSpaces: l.specialpage === "Search"
    });
    let hint = popupString("".concat(l.specialpage, "Hint"));
    switch (l.specialpage) {
      case "Log":
        switch (l.sep) {
          case "&user=":
            hint = popupString("userLogHint");
            break;
          case "&type=block&page=":
            hint = popupString("blockLogHint");
            break;
          case "&page=":
            hint = popupString("pageLogHint");
            break;
          case "&type=protect&page=":
            hint = popupString("protectLogHint");
            break;
          case "&type=delete&page=":
            hint = popupString("deleteLogHint");
            break;
          default:
            log("Unknown log type, sep=".concat(l.sep));
            hint = "Missing hint (FIXME)";
        }
        break;
      case "PrefixIndex":
        article += "/";
        break;
    }
    hint = hint ? simplePrintf(hint, [safeDecodeURI(l.article)]) : safeDecodeURI("".concat(l.specialpage, ":").concat(l.article));
    const url = base + l.sep + article;
    return generalNavLink({
      url,
      title: hint,
      text: l.text,
      newWin: l.newWin,
      noPopup: l.noPopup
    });
  };
  const generalLink = (l) => {
    if (l.url === void 0) {
      return null;
    }
    const url = l.url.split('"').join("%22");
    let ret = '<a href="'.concat(url, '"');
    if (l.title !== void 0 && l.title) {
      ret += ' title="'.concat(pg.escapeQuotesHTML(l.title), '"');
    }
    if (l.onclick !== void 0 && l.onclick) {
      ret += ' onclick="'.concat(pg.escapeQuotesHTML(l.onclick), '"');
    }
    if (l.noPopup) {
      ret += " noPopup=1";
    }
    let newWin;
    if (l.newWin === void 0 || l.newWin === null) {
      newWin = getValueOf("popupNewWindows");
    } else {
      ({
        newWin
      } = l);
    }
    if (newWin) {
      ret += ' rel="noopener" target="_blank"';
    }
    if (l.className !== void 0 && l.className) {
      ret += ' class="'.concat(l.className, '"');
    }
    ret += ">";
    if (typeof l.text === "string") {
      ret += pg.escapeQuotesHTML(pg.unescapeQuotesHTML(l.text));
    }
    ret += "</a>";
    return ret;
  };
  const appendParamsToLink = (linkstr, params) => {
    const sp = linkstr.split(/(href="[^"]+?)"/i);
    if (sp.length < 2) {
      return null;
    }
    let ret = sp.shift() + sp.shift();
    ret += "&".concat(params, '"');
    ret += sp.join("");
    return ret;
  };
  const changeLinkTargetLink = (x) => {
    if (x.newTarget) {
      log("changeLinkTargetLink: newTarget=".concat(x.newTarget));
    }
    if (x.oldTarget !== decodeURIComponent(x.oldTarget)) {
      log("This might be an input problem: ".concat(x.oldTarget));
    }
    const cA = mw.util.escapeRegExp(x.oldTarget);
    let chs = cA.charAt(0).toUpperCase();
    chs = "[".concat(chs).concat(chs.toLowerCase(), "]");
    let currentArticleRegexBit = chs + cA.slice(1);
    currentArticleRegexBit = currentArticleRegexBit.split(/[ _]+|%20/g).join("(?:[_ ]+|%20)").split(String.raw(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["("], ["\\("])))).join(String.raw(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["(?:%28|()"], ["(?:%28|\\()"])))).split(String.raw(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral([")"], ["\\)"])))).join(String.raw(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["(?:%29|))"], ["(?:%29|\\))"]))));
    currentArticleRegexBit = "\\s*(".concat(currentArticleRegexBit, "(?:#[^\\[\\|]*)?)\\s*");
    const title = x.title || mw.config.get("wgPageName").split("_").join(" ");
    const lk = titledWikiLink({
      article: new Title(title),
      newWin: x.newWin,
      action: "edit",
      text: x.text,
      title: x.hint,
      className: "popup_change_title_link"
    });
    let cmd = "";
    if (x.newTarget) {
      const t = x.newTarget;
      const s = mw.util.escapeRegExp(x.newTarget);
      if (x.alsoChangeLabel) {
        cmd += "s~\\[\\[".concat(currentArticleRegexBit, "\\]\\]~[[").concat(t, "]]~g;");
        cmd += "s~\\[\\[".concat(currentArticleRegexBit, "[|]~[[").concat(t, "|~g;");
        cmd += "s~\\[\\[".concat(s, "\\|").concat(s, "\\]\\]~[[").concat(t, "]]~g");
      } else {
        cmd += "s~\\[\\[".concat(currentArticleRegexBit, "\\]\\]~[[").concat(t, "|$1]]~g;");
        cmd += "s~\\[\\[".concat(currentArticleRegexBit, "[|]~[[").concat(t, "|~g;");
        cmd += "s~\\[\\[".concat(s, "\\|").concat(s, "\\]\\]~[[").concat(t, "]]~g");
      }
    } else {
      cmd += "s~\\[\\[".concat(currentArticleRegexBit, "\\]\\]~$1~g;");
      cmd += "s~\\[\\[".concat(currentArticleRegexBit, "[|](.*?)\\]\\]~$2~g");
    }
    cmd = "autoedit=".concat(encodeURIComponent(cmd));
    cmd += "&autoclick=".concat(encodeURIComponent(x.clickButton), "&actoken=").concat(encodeURIComponent(autoClickToken()));
    cmd += x.minor === null ? "" : "&autominor=".concat(encodeURIComponent(x.minor));
    cmd += x.watch === null ? "" : "&autowatch=".concat(encodeURIComponent(x.watch));
    cmd += "&autosummary=".concat(encodeURIComponent(x.summary));
    cmd += "&autoimpl=".concat(encodeURIComponent(popupString("autoedit_version")));
    return appendParamsToLink(lk, cmd);
  };
  const redirLink = (redirMatch, article) => {
    let ret = "";
    if (getValueOf("popupAppendRedirNavLinks") && getValueOf("popupNavLinks")) {
      ret += "<hr>";
      if (getValueOf("popupFixRedirs") && autoEdit !== void 0 && autoEdit) {
        ret += popupString("Redirects to: (Fix ");
        log("redirLink: newTarget=".concat(redirMatch));
        ret += addPopupShortcut(changeLinkTargetLink({
          newTarget: redirMatch,
          text: popupString("target"),
          hint: popupString("Fix this redirect, changing just the link target"),
          summary: simplePrintf(getValueOf("popupFixRedirsSummary"), [article.toString(), redirMatch]),
          oldTarget: article.toString(),
          clickButton: getValueOf("popupRedirAutoClick"),
          minor: true,
          watch: getValueOf("popupWatchRedirredPages")
        }), "R");
        ret += popupString(" or ");
        ret += addPopupShortcut(changeLinkTargetLink({
          newTarget: redirMatch,
          text: popupString("target & label"),
          hint: popupString("Fix this redirect, changing the link target and label"),
          summary: simplePrintf(getValueOf("popupFixRedirsSummary"), [article.toString(), redirMatch]),
          oldTarget: article.toString(),
          clickButton: getValueOf("popupRedirAutoClick"),
          minor: true,
          watch: getValueOf("popupWatchRedirredPages"),
          alsoChangeLabel: true
        }), "R");
        ret += popupString(")");
      } else {
        ret += popupString("Redirects") + popupString(" to ");
      }
      return ret;
    }
    return "<br> ".concat(popupString("Redirects")).concat(popupString(" to ")).concat(titledWikiLink({
      article: new Title().fromWikiText(redirMatch),
      action: "view",
      text: safeDecodeURI(redirMatch),
      title: popupString("Bypass redirect")
    }));
  };
  const arinLink = (l) => {
    if (!saneLinkCheck(l)) {
      return null;
    }
    if (!l.article.isIpUser() || !pg.wiki.wikimedia) {
      return null;
    }
    const uN = l.article.userName();
    return generalNavLink({
      url: "http://ws.arin.net/cgi-bin/whois.pl?queryinput=".concat(encodeURIComponent(uN)),
      newWin: l.newWin,
      title: tprintf("Look up %s in ARIN whois database", [uN]),
      text: l.text,
      noPopup: 1
    });
  };
  const toolDbName = (cookieStyle) => {
    let ret = mw.config.get("wgDBname");
    if (!cookieStyle) {
      ret += "_p";
    }
    return ret;
  };
  const saneLinkCheck = (l) => {
    if (typeof l.article !== typeof {} || typeof l.text !== "string") {
      return false;
    }
    return true;
  };
  const editCounterLink = (l) => {
    if (!saneLinkCheck(l)) {
      return null;
    }
    if (!pg.wiki.wikimedia) {
      return null;
    }
    const uN = l.article.userName();
    const tool = getValueOf("popupEditCounterTool");
    let url;
    const defaultToolUrl = "//tools.wmflabs.org/supercount/index.php?user=$1&project=$2.$3";
    switch (tool) {
      case "custom":
        url = simplePrintf(getValueOf("popupEditCounterUrl"), [encodeURIComponent(uN), toolDbName()]);
        break;
      default: {
        const theWiki = pg.wiki.hostname.split(".");
        url = simplePrintf(defaultToolUrl, [encodeURIComponent(uN), theWiki[0], theWiki[1]]);
      }
    }
    return generalNavLink({
      url,
      title: tprintf("editCounterLinkHint", [uN]),
      newWin: l.newWin,
      text: l.text,
      noPopup: 1
    });
  };
  const editorListLink = (l) => {
    if (!saneLinkCheck(l)) {
      return null;
    }
    const article = l.article.articleFromTalkPage() || l.article;
    const url = "https://xtools.wmflabs.org/articleinfo/".concat(encodeURI(pg.wiki.hostname), "/").concat(article.urlString(), "?uselang=").concat(mw.config.get("wgUserLanguage"));
    return generalNavLink({
      url,
      title: tprintf("editorListHint", [article]),
      newWin: l.newWin,
      text: l.text,
      noPopup: 1
    });
  };
  const generalNavLink = (l) => {
    l.className = l.className === null ? "popupNavLink" : l.className;
    return generalLink(l);
  };
  const getHistoryInfo = (wikipage, whatNext) => {
    log("getHistoryInfo");
    getHistory(wikipage, whatNext ? (d) => {
      whatNext(processHistory(d));
    } : processHistory);
  };
  const getHistory = (wikipage, onComplete) => {
    log("getHistory");
    const url = "".concat(pg.wiki.apiwikibase, "?format=json&formatversion=2&action=query&prop=revisions&titles=").concat(new Title(wikipage).urlString(), "&rvlimit=").concat(getValueOf("popupHistoryLimit"));
    log("getHistory: url=".concat(url));
    return startDownload(url, "".concat(pg.idNumber, "history"), onComplete);
  };
  const processHistory = (download) => {
    const jsobj = getJsObj(download.data);
    try {
      const {
        revisions
      } = anyChild(jsobj.query.pages);
      const edits = [];
      var _iterator27 = _createForOfIteratorHelper(revisions), _step27;
      try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done; ) {
          const revision = _step27.value;
          edits.push({
            oldid: revision.revid,
            editor: revision.user
          });
        }
      } catch (err) {
        _iterator27.e(err);
      } finally {
        _iterator27.f();
      }
      log("processed ".concat(edits.length, " edits"));
      return finishProcessHistory(edits, mw.config.get("wgUserName"));
    } catch {
      log("Something went wrong with JSON business");
      return finishProcessHistory([]);
    }
  };
  const finishProcessHistory = (edits, userName) => {
    const histInfo = {};
    histInfo.edits = edits;
    histInfo.userName = userName;
    for (let i = 0; i < edits.length; ++i) {
      if (histInfo.myLastEdit === void 0 && userName && edits[i].editor === userName) {
        histInfo.myLastEdit = {
          index: i,
          oldid: edits[i].oldid,
          previd: i === 0 ? null : edits[i - 1].oldid
        };
      }
      if (histInfo.firstNewEditor === void 0 && edits[i].editor !== edits[0].editor) {
        histInfo.firstNewEditor = {
          index: i,
          oldid: edits[i].oldid,
          previd: i === 0 ? null : edits[i - 1].oldid
        };
      }
    }
    return histInfo;
  };
  const defaultize = (x) => {
    var _pg$option, _pg$option$x;
    (_pg$option$x = (_pg$option = pg.option)[x]) !== null && _pg$option$x !== void 0 ? _pg$option$x : _pg$option[x] = window[x] === void 0 ? pg.optionDefault[x] : window[x];
  };
  const newOption = (x, def) => {
    pg.optionDefault[x] = def;
  };
  const setDefault = (x, def) => {
    return newOption(x, def);
  };
  const getValueOf = (varName) => {
    defaultize(varName);
    return pg.option[varName];
  };
  const setOptions = () => {
    let userIsSysop = false;
    if (mw.config.get("wgUserGroups")) {
      for (let g = 0; g < mw.config.get("wgUserGroups").length; ++g) {
        if (mw.config.get("wgUserGroups")[g] === "sysop") {
          userIsSysop = true;
        }
        if (mw.config.get("wgUserGroups")[g] === "steward") {
          userIsSysop = true;
        }
      }
    }
    newOption("popupDelay", 0.5);
    newOption("popupHideDelay", 0.5);
    newOption("simplePopups", false);
    newOption("popupStructure", "shortmenus");
    newOption("popupActionsMenu", true);
    newOption("popupSetupMenu", true);
    newOption("popupAdminLinks", userIsSysop);
    newOption("popupShortcutKeys", false);
    newOption("popupHistoricalLinks", true);
    newOption("popupOnlyArticleLinks", true);
    newOption("removeTitles", true);
    newOption("popupMaxWidth", 350);
    newOption("popupSimplifyMainLink", true);
    newOption("popupAppendRedirNavLinks", true);
    newOption("popupTocLinks", false);
    newOption("popupSubpopups", true);
    newOption(
      "popupDragHandle",
      false
      /* 'popupTopLinks' */
    );
    newOption("popupLazyPreviews", true);
    newOption("popupLazyDownloads", true);
    newOption("popupAllDabsStubs", false);
    newOption("popupDebugging", false);
    newOption("popupActiveNavlinks", true);
    newOption("popupModifier", false);
    newOption("popupModifierAction", "enable");
    newOption("popupDraggable", true);
    newOption("popupReview", false);
    newOption("popupLocale", false);
    newOption("popupDateTimeFormatterOptions", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    newOption("popupDateFormatterOptions", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    newOption("popupTimeFormatterOptions", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    newOption("popupImages", true);
    newOption("imagePopupsForImages", true);
    newOption("popupNeverGetThumbs", false);
    newOption("popupThumbAction", "imagepage");
    newOption("popupImageSize", 60);
    newOption("popupImageSizeLarge", 200);
    newOption("popupFixRedirs", false);
    newOption("popupRedirAutoClick", "wpDiff");
    newOption("popupFixDabs", false);
    newOption("popupDabsAutoClick", "wpDiff");
    newOption("popupRevertSummaryPrompt", false);
    newOption("popupMinorReverts", false);
    newOption("popupRedlinkRemoval", false);
    newOption("popupRedlinkAutoClick", "wpDiff");
    newOption("popupWatchDisambiggedPages", null);
    newOption("popupWatchRedirredPages", null);
    newOption("popupDabWiktionary", "last");
    newOption("popupNavLinks", true);
    newOption("popupNavLinkSeparator", " &sdot; ");
    newOption("popupLastEditLink", true);
    newOption("popupEditCounterTool", "supercount");
    newOption("popupEditCounterUrl", "");
    newOption("popupPreviews", true);
    newOption("popupSummaryData", true);
    newOption("popupMaxPreviewSentences", 5);
    newOption("popupMaxPreviewCharacters", 600);
    newOption("popupLastModified", true);
    newOption("popupPreviewKillTemplates", true);
    newOption("popupPreviewRawTemplates", true);
    newOption("popupPreviewFirstParOnly", true);
    newOption("popupPreviewCutHeadings", true);
    newOption("popupPreviewButton", false);
    newOption("popupPreviewButtonEvent", "click");
    newOption("popupPreviewDiffs", true);
    newOption("popupDiffMaxLines", 100);
    newOption("popupDiffContextLines", 2);
    newOption("popupDiffContextCharacters", 40);
    newOption("popupDiffDates", true);
    newOption("popupDiffDatePrinter", "toLocaleString");
    newOption("popupReviewedSummary", popupString("defaultpopupReviewedSummary"));
    newOption("popupFixDabsSummary", popupString("defaultpopupFixDabsSummary"));
    newOption("popupExtendedRevertSummary", popupString("defaultpopupExtendedRevertSummary"));
    newOption("popupRevertSummary", popupString("defaultpopupRevertSummary"));
    newOption("popupRevertToPreviousSummary", popupString("defaultpopupRevertToPreviousSummary"));
    newOption("popupQueriedRevertSummary", popupString("defaultpopupQueriedRevertSummary"));
    newOption("popupQueriedRevertToPreviousSummary", popupString("defaultpopupQueriedRevertToPreviousSummary"));
    newOption("popupFixRedirsSummary", popupString("defaultpopupFixRedirsSummary"));
    newOption("popupRedlinkSummary", popupString("defaultpopupRedlinkSummary"));
    newOption("popupRmDabLinkSummary", popupString("defaultpopupRmDabLinkSummary"));
    newOption("popupHistoryLimit", 50);
    newOption("popupFilters", [popupFilterStubDetect, popupFilterDisambigDetect, popupFilterPageSize, popupFilterCountLinks, popupFilterCountImages, popupFilterCountCategories, popupFilterLastModified]);
    newOption("extraPopupFilters", []);
    newOption("popupOnEditSelection", "cursor");
    newOption("popupPreviewHistory", true);
    newOption("popupImageLinks", true);
    newOption("popupCategoryMembers", true);
    newOption("popupUserInfo", true);
    newOption("popupHistoryPreviewLimit", 25);
    newOption("popupContribsPreviewLimit", 25);
    newOption("popupRevDelUrl", "//en.wikipedia.org/wiki/Wikipedia:Revision_deletion");
    newOption("popupShowGender", true);
    newOption("popupNewWindows", false);
    newOption("popupLinksNewWindow", {
      lastContrib: true,
      sinceMe: true
    });
    newOption("popupDabRegexp", String.raw(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["{{s*(d(ab|isamb(ig(uation)?)?)|(((geo|hn|road?|school|number)dis)|[234][lc][acw]|(road|ship)index))s*(|[^}]*)?}}|is a .*disambiguation.*page"], ["\\{\\{\\s*(d(ab|isamb(ig(uation)?)?)|(((geo|hn|road?|school|number)dis)|[234][lc][acw]|(road|ship)index))\\s*(\\|[^}]*)?\\}\\}|is a .*disambiguation.*page"]))));
    newOption("popupAnchorRegexp", "anchors?");
    newOption("popupStubRegexp", "(sect)?stub[}][}]|This .*-related article is a .*stub");
    newOption("popupImageVarsRegexp", "image|image_(?:file|skyline|name|flag|seal)|cover|badge|logo");
  };
  pg.string = {
    // summary data, searching etc.
    article: "article",
    category: "category",
    categories: "categories",
    image: "image",
    images: "images",
    stub: "stub",
    "section stub": "section stub",
    "Empty page": "Empty page",
    kB: "kB",
    bytes: "bytes",
    day: "day",
    days: "days",
    hour: "hour",
    hours: "hours",
    minute: "minute",
    minutes: "minutes",
    second: "second",
    seconds: "seconds",
    week: "week",
    weeks: "weeks",
    search: "search",
    SearchHint: "Find English Wikipedia articles containing %s",
    web: "web",
    global: "global",
    // article-related actions and info
    // (some actions also apply to user pages)
    actions: "actions",
    popupsMenu: "popups",
    togglePreviewsHint: "Toggle preview generation in popups on this page",
    "enable previews": "enable previews",
    "disable previews": "disable previews",
    "toggle previews": "toggle previews",
    "show preview": "show preview",
    reset: "reset",
    "more...": "more...",
    disable: "disable popups",
    disablePopupsHint: "Disable popups on this page. Reload page to re-enable.",
    historyfeedHint: "RSS feed of recent changes to this page",
    purgePopupsHint: "Reset popups, clearing all cached popup data.",
    PopupsHint: "Reset popups, clearing all cached popup data.",
    spacebar: "space",
    view: "view",
    "view article": "view article",
    viewHint: "Go to %s",
    talk: "talk",
    "talk page": "talk page",
    "this&nbsp;revision": "this&nbsp;revision",
    "revision %s of %s": "revision %s of %s",
    "Revision %s of %s": "Revision %s of %s",
    "the revision prior to revision %s of %s": "the revision prior to revision %s of %s",
    "Toggle image size": "Click to toggle image size",
    del: "del",
    delete: "delete",
    deleteHint: "Delete %s",
    undeleteShort: "un",
    UndeleteHint: "Show the deletion history for %s",
    protect: "protect",
    protectHint: "Restrict editing rights to %s",
    unprotectShort: "un",
    unprotectHint: "Allow %s to be edited by anyone again",
    "send thanks": "send thanks",
    ThanksHint: "Send a thank you notification to this user",
    move: "move",
    "move page": "move page",
    MovepageHint: "Change the title of %s",
    edit: "edit",
    "edit article": "edit article",
    editHint: "Change the content of %s",
    "edit talk": "edit talk",
    new: "new",
    "new topic": "new topic",
    newSectionHint: "Start a new section on %s",
    "null edit": "null edit",
    nullEditHint: "Submit an edit to %s, making no changes ",
    hist: "hist",
    history: "history",
    historyHint: "List the changes made to %s",
    last: "prev",
    lastEdit: "lastEdit",
    "mark patrolled": "mark patrolled",
    markpatrolledHint: "Mark this edit as patrolled",
    "Could not marked this edit as patrolled": "Could not marked this edit as patrolled",
    "show last edit": "most recent edit",
    "Show the last edit": "Show the effects of the most recent change",
    lastContrib: "lastContrib",
    "last set of edits": "latest edits",
    lastContribHint: "Show the net effect of changes made by the last editor",
    cur: "cur",
    diffCur: "diffCur",
    "Show changes since revision %s": "Show changes since revision %s",
    "%s old": "%s old",
    oldEdit: "oldEdit",
    purge: "purge",
    purgeHint: "Demand a fresh copy of %s",
    raw: "source",
    rawHint: "Download the source of %s",
    render: "simple",
    renderHint: "Show a plain HTML version of %s",
    "Show the edit made to get revision": "Show the edit made to get revision",
    sinceMe: "sinceMe",
    "changes since mine": "diff my edit",
    sinceMeHint: "Show changes since my last edit",
    "Couldn't find an edit by %s\nin the last %s edits to\n%s": "Couldn't find an edit by %s\nin the last %s edits to\n%s",
    eds: "eds",
    editors: "editors",
    editorListHint: "List the users who have edited %s",
    related: "related",
    relatedChanges: "relatedChanges",
    "related changes": "related changes",
    RecentchangeslinkedHint: "Show changes in articles related to %s",
    editOld: "editOld",
    rv: "rv",
    revert: "revert",
    revertHint: "Revert to %s",
    defaultpopupReviewedSummary: "Accepted by reviewing the [[Special:diff/%s/%s|difference]] between this version and previously accepted version using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupRedlinkSummary: "Removing link to empty page [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupFixDabsSummary: "Disambiguate [[%s]] to [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupFixRedirsSummary: "Redirect bypass from [[%s]] to [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupExtendedRevertSummary: "Revert to revision dated %s by %s, oldid %s using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupRevertToPreviousSummary: "Revert to the revision prior to revision %s using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupRevertSummary: "Revert to revision %s using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupQueriedRevertToPreviousSummary: "Revert to the revision prior to revision $1 dated $2 by $3 using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupQueriedRevertSummary: "Revert to revision $1 dated $2 by $3 using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    defaultpopupRmDabLinkSummary: "Remove link to dab page [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
    Redirects: "Redirects",
    " to ": " to ",
    "Bypass redirect": "Bypass redirect",
    "Fix this redirect": "Fix this redirect",
    disambig: "disambig",
    disambigHint: "Disambiguate this link to [[%s]]",
    "Click to disambiguate this link to:": "Click to disambiguate this link to:",
    "remove this link": "remove this link",
    "remove all links to this page from this article": "remove all links to this page from this article",
    "remove all links to this disambig page from this article": "remove all links to this disambig page from this article",
    mainlink: "mainlink",
    wikiLink: "wikiLink",
    wikiLinks: "wikiLinks",
    "links here": "links here",
    whatLinksHere: "whatLinksHere",
    "what links here": "what links here",
    WhatlinkshereHint: "List the pages that are hyperlinked to %s",
    unwatchShort: "un",
    watchThingy: "watch",
    watchHint: "Add %s to my watchlist",
    unwatchHint: "Remove %s from my watchlist",
    "Only found one editor: %s made %s edits": "Only found one editor: %s made %s edits",
    "%s seems to be the last editor to the page %s": "%s seems to be the last editor to the page %s",
    rss: "rss",
    // diff previews
    "Diff truncated for performance reasons": "Diff truncated for performance reasons",
    "Old revision": "Old revision",
    "New revision": "New revision",
    "Something went wrong :-(": "Something went wrong :-(",
    "Empty revision, maybe non-existent": "Empty revision, maybe non-existent",
    "Unknown date": "Unknown date",
    // other special previews
    "Empty category": "Empty category",
    "Category members (%s shown)": "Category members (%s shown)",
    "No image links found": "No image links found",
    "File links": "File links",
    "No image found": "No image found",
    "Image from Commons": "Image from Commons",
    "Description page": "Description page",
    "Alt text:": "Alt text:",
    revdel: "Hidden revision",
    // user-related actions and info
    user: "user",
    "user&nbsp;page": "user&nbsp;page",
    "user talk": "user talk",
    "edit user talk": "edit user talk",
    "leave comment": "leave comment",
    email: "email",
    "email user": "email user",
    EmailuserHint: "Send an email to %s",
    space: "space",
    PrefixIndexHint: "Show pages in the userspace of %s",
    count: "count",
    "edit counter": "edit counter",
    editCounterLinkHint: "Count the contributions made by %s",
    contribs: "contribs",
    contributions: "contributions",
    deletedContribs: "deleted contributions",
    DeletedcontributionsHint: "List deleted edits made by %s",
    ContributionsHint: "List the contributions made by %s",
    log: "log",
    "user log": "user log",
    userLogHint: "Show %s's user log",
    arin: "ARIN lookup",
    "Look up %s in ARIN whois database": "Look up %s in the ARIN whois database",
    unblockShort: "un",
    block: "block",
    "block user": "block user",
    IpblocklistHint: "Unblock %s",
    BlockipHint: "Prevent %s from editing",
    "block log": "block log",
    blockLogHint: "Show the block log for %s",
    protectLogHint: "Show the protection log for %s",
    pageLogHint: "Show the page log for %s",
    deleteLogHint: "Show the deletion log for %s",
    "Invalid %s %s": "The option %s is invalid: %s",
    "No backlinks found": "No backlinks found",
    " and more": " and more",
    undo: "undo",
    undoHint: "undo this edit",
    "Download preview data": "Download preview data",
    "Invalid or IP user": "Invalid or IP user",
    "Not a registered username": "Not a registered username",
    BLOCKED: "BLOCKED",
    "Has blocks": "Has blocks",
    " edits since: ": " edits since: ",
    "last edit on ": "last edit on ",
    "he/him": "he/him",
    "she/her": "she/her",
    // Autoediting
    "Enter a non-empty edit summary or press cancel to abort": "Enter a non-empty edit summary or press cancel to abort",
    "Failed to get revision information, please edit manually.\n\n": "Failed to get revision information, please edit manually.\n\n",
    "The %s button has been automatically clicked. Please wait for the next page to load.": "The %s button has been automatically clicked. Please wait for the next page to load.",
    "Could not find button %s. Please check the settings in your javascript file.": "Could not find button %s. Please check the settings in your javascript file.",
    // Popups setup
    "Open full-size image": "Open full-size image",
    autoedit_version: "np20140416"
  };
  const popupString = (str) => {
    if (message !== void 0 && message && message[str]) {
      return message[str];
    }
    if (pg.string[str]) {
      return pg.string[str];
    }
    return str;
  };
  const tprintf = (str, subs) => {
    if (typeof subs !== typeof []) {
      subs = [subs];
    }
    return simplePrintf(popupString(str), subs);
  };
  if (document.readyState === "complete") {
    autoEdit();
  } else {
    $(window).on("load", autoEdit);
  }
  (() => {
    let once = true;
    const dynamicContentHandler = ($content) => {
      if ($content.attr("id") === "mw-content-text" && once) {
        once = false;
        return;
      }
      const registerHooksForVisibleNavpops = () => {
        for (let i = 0; pg.current.links && i < pg.current.links.length; i++) {
          const navpop = pg.current.links[i].navpopup;
          if (!navpop || !navpop.isVisible()) {
            continue;
          }
          Navpopup.tracker.addHook(posCheckerHook(navpop));
        }
      };
      const doIt = () => {
        registerHooksForVisibleNavpops();
        $content.each((_index, element) => {
          element.ranSetupTooltipsAlready = false;
          setupTooltips(element);
        });
      };
      setupPopups(doIt);
    };
    mw.hook("wikipage.content").add(dynamicContentHandler);
    mw.hook("ext.echo.overlay.beforeShowingOverlay").add(($overlay) => {
      dynamicContentHandler($overlay.find(".mw-echo-state"));
    });
  })();
};
//! src/Navigation_popups/Navigation_popups.ts
$(popups);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05hdmlnYXRpb25fcG9wdXBzL21vZHVsZXMvYXBpLnRzIiwgInNyYy9OYXZpZ2F0aW9uX3BvcHVwcy9tb2R1bGVzL3N0cmluZy50cyIsICJzcmMvTmF2aWdhdGlvbl9wb3B1cHMvbW9kdWxlcy9jb3JlLmpzIiwgInNyYy9OYXZpZ2F0aW9uX3BvcHVwcy9OYXZpZ2F0aW9uX3BvcHVwcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdOYXZpZ2F0aW9uIHBvcHVwcy8xLjAnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgIi8vIFRyYW5zbGF0YWJsZSBzdHJpbmdzXG5jb25zdCBtZXNzYWdlOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0Ly8gc3VtbWFyeSBkYXRhLCBzZWFyY2hpbmcgZXRjLlxuXHRhcnRpY2xlOiB3aW5kb3cud2dVTFMoJ+adoeebricsICfmop3nm64nKSxcblx0Y2F0ZWdvcnk6IHdpbmRvdy53Z1VMUygn5Liq5YiG57G7JywgJ+WAi+WIhumhnicpLFxuXHRjYXRlZ29yaWVzOiB3aW5kb3cud2dVTFMoJ+S4quWIhuexuycsICflgIvliIbpoZ4nKSxcblx0aW1hZ2U6IHdpbmRvdy53Z1VMUygn5Liq5paH5Lu2JywgJ+WAi+aqlOahiCcpLFxuXHRpbWFnZXM6IHdpbmRvdy53Z1VMUygn5Liq5paH5Lu2JywgJ+WAi+aqlOahiCcpLFxuXHRzdHViOiAn5bCP5L2c5ZOBJyxcblx0J3NlY3Rpb24gc3R1Yic6IHdpbmRvdy53Z1VMUygn5bCP56ug6IqCJywgJ+Wwj+eroOevgCcpLFxuXHQnRW1wdHkgcGFnZSc6IHdpbmRvdy53Z1VMUygn56m66aG16Z2iJywgJ+epuumggemdoicpLFxuXHRrQjogd2luZG93LndnVUxTKCfljYPlrZfoioI8c3ViPu+8iOS7pTEwMDDkuLrkuIDov5vvvIk8L3N1Yj4nLCAn5Y2D5L2N5YWD57WEPHN1Yj7vvIjku6UxMDAw54K65LiA6YCy77yJPC9zdWI+JyksXG5cdGJ5dGVzOiB3aW5kb3cud2dVTFMoJ+Wtl+iKgicsICfkvY3lhYPntYQnKSxcblx0ZGF5OiAn5aSpJyxcblx0ZGF5czogJ+WkqScsXG5cdGhvdXI6IHdpbmRvdy53Z1VMUygn5bCP5pe2JywgJ+Wwj+aZgicpLFxuXHRob3Vyczogd2luZG93LndnVUxTKCflsI/ml7YnLCAn5bCP5pmCJyksXG5cdG1pbnV0ZTogJ+WIhicsXG5cdG1pbnV0ZXM6ICfliIYnLFxuXHRzZWNvbmQ6ICfnp5InLFxuXHRzZWNvbmRzOiAn56eSJyxcblx0d2VlazogJ+WRqCcsXG5cdHdlZWtzOiAn5ZGoJyxcblx0bW9udGg6ICfmnIgnLFxuXHRtb250aHM6ICfmnIgnLFxuXHR5ZWFyOiAn5bm0Jyxcblx0eWVhcnM6ICflubQnLFxuXHRzZWFyY2g6IHdpbmRvdy53Z1VMUygn5pCc57SiJywgJ+aQnOWwiycpLFxuXHRTZWFyY2hIaW50OiB3aW5kb3cud2dVTFMoJ+aQnOe0ouWMheWQqyAlcyDnmoTpobXpnaInLCAn5pCc5bCL5YyF5ZCrICVzIOeahOmggemdoicpLFxuXHR3ZWI6ICdCaW5nJyxcblx0Z2xvYmFsOiAn5YWo5Z+fJyxcblx0J21vcmUuLi4nOiAn5pu05aSa4oCm4oCmJyxcblx0Ly8gYXJ0aWNsZS1yZWxhdGVkIGFjdGlvbnMgYW5kIGluZm9cblx0Ly8gKHNvbWUgYWN0aW9ucyBhbHNvIGFwcGx5IHRvIHVzZXIgcGFnZXMpXG5cdGFjdGlvbnM6IHdpbmRvdy53Z1VMUygn5pON5L2cJywgJ+WLleS9nCcpLFxuXHQvLyAvLy8gdmlldyBhcnRpY2xlcyBhbmQgdmlldyB0YWxrXG5cdHBvcHVwc01lbnU6ICdQb3B1cHMnLFxuXHQnZGlzYWJsZSBwcmV2aWV3cyc6IHdpbmRvdy53Z1VMUygn56aB55So6aKE6KeIJywgJ+emgeeUqOmgkOimvScpLFxuXHR0b2dnbGVQcmV2aWV3c0hpbnQ6IHdpbmRvdy53Z1VMUygn5YiH5o2i5pys6aG1IFBvcHVwcyDnmoTpooTop4jlvIDlhbMnLCAn5YiH5o+b5pys6aCBIFBvcHVwcyDnmoTpoJDopr3plovpl5wnKSxcblx0J3RvZ2dsZSBwcmV2aWV3cyc6IHdpbmRvdy53Z1VMUygn5YiH5o2i6aKE6KeI5byA5YWzJywgJ+WIh+aPm+mgkOimvemWi+mXnCcpLFxuXHRyZXNldDogd2luZG93LndnVUxTKCflpI3kvY0nLCAn6KSH5L2NJyksXG5cdGRpc2FibGU6ICfnpoHnlKggUG9wdXBzJyxcblx0ZGlzYWJsZVBvcHVwc0hpbnQ6IHdpbmRvdy53Z1VMUyhcblx0XHQn5Zyo5pys6aG156aB55SoIFBvcHVwc++8jOWIt+aWsOmhtemdouS7pemHjeaWsOWQr+eUqOOAgicsXG5cdFx0J+WcqOacrOmggeemgeeUqCBQb3B1cHPvvIzph43mlrDmlbTnkIbpoIHpnaLku6Xph43mlrDllZ/nlKjjgIInXG5cdCksXG5cdHB1cmdlUG9wdXBzSGludDogd2luZG93LndnVUxTKCflpI3kvY0gUG9wdXBz77yM5riF6Zmk5omA5pyJ57yT5a2Y5pWw5o2u44CCJywgJ+ikh+S9jSBQb3B1cHPvvIzmuIXpmaTmiYDmnInlv6vlj5bos4fmlpnjgIInKSxcblx0UG9wdXBzSGludDogd2luZG93LndnVUxTKCflpI3kvY0gUG9wdXBz77yM5riF6Zmk5omA5pyJ57yT5a2Y5pWw5o2u44CCJywgJ+ikh+S9jSBQb3B1cHPvvIzmuIXpmaTmiYDmnInlv6vlj5bos4fmlpnjgIInKSxcblx0c3BhY2ViYXI6ICfnqbrmoLwnLFxuXHR2aWV3OiB3aW5kb3cud2dVTFMoJ+afpeeciycsICfmqqLoppYnKSxcblx0J3ZpZXcgYXJ0aWNsZSc6IHdpbmRvdy53Z1VMUygn5p+l55yL5p2h55uuJywgJ+aqouimluaineebricpLFxuXHR2aWV3SGludDogd2luZG93LndnVUxTKCfliY3lvoAgJXMnLCAn5YmN5b6AICVzJyksXG5cdHRhbGs6IHdpbmRvdy53Z1VMUygn6K6o6K66JywgJ+iojuirlicpLFxuXHQndGFsayBwYWdlJzogd2luZG93LndnVUxTKCforqjorrrpobUnLCAn6KiO6KuW6aCBJyksXG5cdCd0aGlzJm5ic3A7cmV2aXNpb24nOiB3aW5kb3cud2dVTFMoJ+atpOS/ruiuoueJiOacrCcsICfmraTkv67oqILniYjmnKwnKSxcblx0J3JldmlzaW9uICVzIG9mICVzJzogd2luZG93LndnVUxTKCfpobXpnaIgJDIg55qE5L+u6K6i54mI5pysICQxJywgJ+mggemdoiAkMiDnmoTkv67oqILniYjmnKwgJDEnKSxcblx0J1JldmlzaW9uICVzIG9mICVzJzogd2luZG93LndnVUxTKCfpobXpnaIgJDIg55qE5L+u6K6i54mI5pysICQxJywgJ+mggemdoiAkMiDnmoTkv67oqILniYjmnKwgJDEnKSxcblx0J3RoZSByZXZpc2lvbiBwcmlvciB0byByZXZpc2lvbiAlcyBvZiAlcyc6IHdpbmRvdy53Z1VMUyhcblx0XHQn6aG16Z2iICQyIOeahOS/ruiuoueJiOacrCAkMSDkuYvliY3nmoTkv67orqLniYjmnKwnLFxuXHRcdCfpoIHpnaIgJDIg55qE5L+u6KiC54mI5pysICQxIOS5i+WJjeeahOS/ruiogueJiOacrCdcblx0KSxcblx0J1RvZ2dsZSBpbWFnZSBzaXplJzogd2luZG93LndnVUxTKCfngrnlh7vliIfmjaLlm77niYflpKflsI8nLCAn6bue5pOK5YiH5o+b5ZyW54mH5aSn5bCPJyksXG5cdGRlbDogd2luZG93LndnVUxTKCfliKDpmaQnLCAn5Yig6ZmkJyksXG5cdC8vIC8vLyBkZWxldGUsIHByb3RlY3QsIG1vdmVcblx0ZGVsZXRlOiB3aW5kb3cud2dVTFMoJ+WIoOmZpCcsICfliKDpmaQnKSxcblx0ZGVsZXRlSGludDogd2luZG93LndnVUxTKCfliKDpmaQgJXMnLCAn5Yig6ZmkICVzJyksXG5cdHVuZGVsZXRlU2hvcnQ6IHdpbmRvdy53Z1VMUygn5oGi5aSNJywgJ+aBouW+qScpLFxuXHRVbmRlbGV0ZUhpbnQ6IHdpbmRvdy53Z1VMUygn5oGi5aSNICVzJywgJ+aBouW+qSAlcycpLFxuXHRwcm90ZWN0OiB3aW5kb3cud2dVTFMoJ+S/neaKpCcsICfkv53orbcnKSxcblx0cHJvdGVjdEhpbnQ6IHdpbmRvdy53Z1VMUygn5L+d5oqkICVzJywgJ+S/neittyAlcycpLFxuXHR1bnByb3RlY3RTaG9ydDogd2luZG93LndnVUxTKCfop6PpmaQnLCAn6Kej6ZmkJyksXG5cdHVucHJvdGVjdEhpbnQ6IHdpbmRvdy53Z1VMUygn6Kej6Zmk5a+5ICVzIOeahOS/neaKpCcsICfop6PpmaTlsI0gJXMg55qE5L+d6K23JyksXG5cdG1vdmU6IHdpbmRvdy53Z1VMUygn56e75YqoJywgJ+enu+WLlScpLFxuXHQnbW92ZSBwYWdlJzogd2luZG93LndnVUxTKCfnp7vliqjpobXpnaInLCAn56e75YuV6aCB6Z2iJyksXG5cdE1vdmVwYWdlSGludDogd2luZG93LndnVUxTKCfkv67mlLkgJXMg55qE5qCH6aKYJywgJ+S/ruaUuSAlcyDnmoTmqJnpoYwnKSxcblx0ZWRpdDogd2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvJyksXG5cdC8vIC8vLyBlZGl0IGFydGljbGVzIGFuZCB0YWxrXG5cdCdlZGl0IGFydGljbGUnOiB3aW5kb3cud2dVTFMoJ+e8lui+keadoeebricsICfnt6jovK/mop3nm64nKSxcblx0ZWRpdEhpbnQ6IHdpbmRvdy53Z1VMUygn5L+u5pS5ICVzIOeahOWGheWuuScsICfkv67mlLkgJXMg55qE5YWn5a65JyksXG5cdCdlZGl0IHRhbGsnOiB3aW5kb3cud2dVTFMoJ+e8lui+keiuqOiuuumhtScsICfnt6jovK/lsI3oqbHpoIEnKSxcblx0bmV3OiB3aW5kb3cud2dVTFMoJ+aWsCcsICfmlrAnKSxcblx0J25ldyB0b3BpYyc6IHdpbmRvdy53Z1VMUygn5paw6K+d6aKYJywgJ+aWsOipsemhjCcpLFxuXHRuZXdTZWN0aW9uSGludDogd2luZG93LndnVUxTKCflnKggJXMg5aKe5Yqg5paw55qE6K6o6K666K+d6aKYJywgJ+WcqCAlcyDlop7liqDmlrDnmoToqI7oq5boqbHpoYwnKSxcblx0J251bGwgZWRpdCc6IHdpbmRvdy53Z1VMUygn56m657yW6L6RJywgJ+epuue3qOi8rycpLFxuXHRudWxsRWRpdEhpbnQ6IHdpbmRvdy53Z1VMUygn6L+b6KGM5LiA5qyh5a+5ICVzIOeahOepuue8lui+kScsICfoo73pgKDkuIDmrKHlsI0gJXMg55qE56m657eo6LyvJyksXG5cdGhpc3Q6IHdpbmRvdy53Z1VMUygn5Y6G5Y+yJywgJ+att+WPsicpLFxuXHQvLyAvLy8gaGlzdG9yeSwgZGlmZnMsIGVkaXRvcnMsIHJlbGF0ZWRcblx0aGlzdG9yeTogd2luZG93LndnVUxTKCfljoblj7InLCAn5q235Y+yJyksXG5cdGhpc3RvcnlIaW50OiB3aW5kb3cud2dVTFMoJyVzIOeahOS/ruiuouWOhuWPsicsICclcyDnmoTkv67oqILmrbflj7InKSxcblx0bGFzdDogd2luZG93LndnVUxTKCfkuYvliY0nLCAn5LmL5YmNJyksXG5cdC8vIFtbTWVkaWFXaWtpOkxhc3RdXVxuXHRsYXN0RWRpdDogd2luZG93LndnVUxTKCfmnIDov5Hmm7TmlLknLCAn5pyA6L+R5pu05pS5JyksXG5cdCdzaG93IGxhc3QgZWRpdCc6IHdpbmRvdy53Z1VMUygn5pyA6L+R5LiA5qyh5pu05pS5JywgJ+acgOaWsOS4gOasoeS/ruiogicpLFxuXHQnU2hvdyB0aGUgbGFzdCBlZGl0Jzogd2luZG93LndnVUxTKCfmmL7npLrmnIDov5HkuIDmrKHmm7TmlLnnmoTlt67lvIInLCAn6aGv56S65pyA5paw5LiA5qyh5L+u6KiC55qE5beu55WwJyksXG5cdGxhc3RDb250cmliOiB3aW5kb3cud2dVTFMoJ+acgOi/kee8lui+kScsICfmnIDov5Hnt6jovK8nKSxcblx0J2xhc3Qgc2V0IG9mIGVkaXRzJzogd2luZG93LndnVUxTKCfmnIDov5HnvJbovpEnLCAn5pyA6L+R57eo6LyvJyksXG5cdGxhc3RDb250cmliSGludDogd2luZG93LndnVUxTKCfmmL7npLrnlLHmnIDlkI7kuIDkvY3nvJbovpHogIXpgKDmiJDnmoTlt67lvIInLCAn6aGv56S655Sx5pyA5b6M5LiA5L2N57eo6Lyv6ICF6KO96YCg55qE5beu55WwJyksXG5cdGN1cjogd2luZG93LndnVUxTKCflvZPliY0nLCAn55W25YmNJyksXG5cdGRpZmZDdXI6IHdpbmRvdy53Z1VMUygn5LiO5b2T5YmN54mI5pys55qE5beu5byCJywgJ+iIh+ebruWJjeeJiOacrOeahOW3rueVsCcpLFxuXHQnU2hvdyBjaGFuZ2VzIHNpbmNlIHJldmlzaW9uICVzJzogd2luZG93LndnVUxTKCfmmL7npLroh6rkv67orqLniYjmnKwgJXMg55qE5beu5byCJywgJ+mhr+ekuuiHquS/ruiogueJiOacrCAlcyDnmoTlt67nlbAnKSxcblx0JyVzIG9sZCc6IHdpbmRvdy53Z1VMUygnJXMg5YmN55qE5pyA5ZCO54mI5pysJywgJyVzIOWJjeeahOacgOWQjueJiOacrCcpLFxuXHQvLyBhcyBpbiA0IHdlZWtzIG9sZFxuXHRvbGRFZGl0OiB3aW5kb3cud2dVTFMoJ+aXp+e8lui+kScsICfoiIrnt6jovK8nKSxcblx0cHVyZ2U6IHdpbmRvdy53Z1VMUygn5riF6Zmk57yT5a2YJywgJ+a4hemZpOW/q+WPlicpLFxuXHRwdXJnZUhpbnQ6IHdpbmRvdy53Z1VMUygn5riF6Zmk5pyN5Yqh5Zmo5LitICVzIOeahOe8k+WtmCcsICfmuIXpmaTkvLrmnI3lmajkuK0gJXMg55qE5b+r5Y+WJyksXG5cdHJhdzogd2luZG93LndnVUxTKCfmupDku6PnoIEnLCAn5Y6f5aeL56K8JyksXG5cdHJhd0hpbnQ6IHdpbmRvdy53Z1VMUygn5p+l55yLICVzIOeahOa6kOS7o+eggScsICfmqqLoppYgJXMg55qE5Y6f5aeL56K8JyksXG5cdHJlbmRlcjogd2luZG93LndnVUxTKCfku4XmraPmlocnLCAn5YOF5q2j5paHJyksXG5cdHJlbmRlckhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOe6r0hUTUzop6PmnpDvvIjku4XmraPmloflhoXlrrnvvIknLCAn6aGv56S6ICVzIOeahOe0lEhUTUzop6PmnpDvvIjlg4XmraPmloflhaflrrnvvIknKSxcblx0J1Nob3cgdGhlIGVkaXQgbWFkZSB0byBnZXQgcmV2aXNpb24nOiB3aW5kb3cud2dVTFMoJ+aYvuekuue8lui+keS7peW+l+WIsOS/ruiuoueJiOacrCcsICfpoa/npLrnt6jovK/ku6XlvpfliLDkv67oqILniYjmnKwnKSxcblx0c2luY2VNZTogd2luZG93LndnVUxTKCfoh6rmiJEnLCAn6Ieq5oiRJyksXG5cdCdjaGFuZ2VzIHNpbmNlIG1pbmUnOiB3aW5kb3cud2dVTFMoJ+iHquaIkeS/ruiuoueahOW3ruW8gicsICfoh6rmiJHkv67oqILnmoTlt67nlbAnKSxcblx0c2luY2VNZUhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S66Ieq5oiR5LiK5qyh5L+u5pS55Lul5p2l55qE5beu5byCJywgJ+mhr+ekuuiHquaIkeS4iuasoeS/ruaUueS7peS+hueahOW3rueVsCcpLFxuXHRcIkNvdWxkbid0IGZpbmQgYW4gZWRpdCBieSAlc1xcbmluIHRoZSBsYXN0ICVzIGVkaXRzIHRvXFxuJXNcIjogd2luZG93LndnVUxTKFxuXHRcdCflnKggJDMg5pyA6L+RICQyIOasoee8lui+keS4reaJvuS4jeWIsCAkMSDlgZrlh7rnmoTkv67mlLknLFxuXHRcdCflnKggJDMg5pyA6L+RICQyIOasoee3qOi8r+S4reaJvuS4jeWIsCAkMSDlgZrlh7rnmoTkv67mlLknXG5cdCksXG5cdGVkczogd2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvJyksXG5cdGVkaXRvcnM6IHdpbmRvdy53Z1VMUygn57yW6L6R6ICFJywgJ+e3qOi8r+iAhScpLFxuXHRlZGl0b3JMaXN0SGludDogd2luZG93LndnVUxTKCfliJflh7rnvJbovpHov4cgJXMg55qE55So5oi3JywgJ+WIl+WHuue3qOi8r+mBjiAlcyDnmoTkvb/nlKjogIUnKSxcblx0cmVsYXRlZDogd2luZG93LndnVUxTKCfnm7jlhbMnLCAn55u46ZecJyksXG5cdHJlbGF0ZWRDaGFuZ2VzOiB3aW5kb3cud2dVTFMoJ+ebuOWFs+abtOaUuScsICfnm7jpl5zmm7TmlLknKSxcblx0J3JlbGF0ZWQgY2hhbmdlcyc6IHdpbmRvdy53Z1VMUygn55u45YWz5pu05pS5JywgJ+ebuOmXnOabtOaUuScpLFxuXHRSZWNlbnRjaGFuZ2VzbGlua2VkSGludDogd2luZG93LndnVUxTKCfmmL7npLrnm7jlhbMgJXMg55qE5L+u5pS5JywgJ+mhr+ekuuebuOmXnCAlcyDnmoTkv67mlLknKSxcblx0ZWRpdE9sZDogd2luZG93LndnVUxTKCfnvJbovpHml6fniYgnLCAn57eo6Lyv6IiK54mIJyksXG5cdC8vIC8vLyBlZGl0IG9sZCB2ZXJzaW9uLCBvciByZXZlcnRcblx0cnY6IHdpbmRvdy53Z1VMUygn5Zue6YCAJywgJ+aBouW+qScpLFxuXHRyZXZlcnQ6IHdpbmRvdy53Z1VMUygn5Zue6YCAJywgJ+aBouW+qScpLFxuXHRyZXZlcnRIaW50OiB3aW5kb3cud2dVTFMoJ+WbnumAgOWIsCAlcycsICfmgaLlvqnliLAgJXMnKSxcblx0dW5kbzogd2luZG93LndnVUxTKCfmkqTplIAnLCAn5pKk6Yq3JyksXG5cdHVuZG9IaW50OiB3aW5kb3cud2dVTFMoJ+aSpOmUgOi/measoee8lui+kScsICfmkqTpirfpgJnmrKHnt6jovK8nKSxcblx0ZGVmYXVsdHBvcHVwUmVkbGlua1N1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn56e76Zmk5Yiw56m66aG16Z2iW1slc11d55qE6ZO+5o6l77yIUG9wdXBz77yJJyxcblx0XHQn56e76Zmk5Yiw56m66aCB6Z2iW1slc11d55qE6YCj57WQ77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBGaXhEYWJzU3VtbWFyeTogd2luZG93LndnVUxTKCfmtojmrafkuYlbWyVzXV3liLBbWyVzXV3vvIhQb3B1cHPvvIknLCAn5raI5q2n576pW1slc11d5YiwW1slc11d77yIUG9wdXBz77yJJyksXG5cdGRlZmF1bHRwb3B1cEZpeFJlZGlyc1N1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn5b+955Wl5LuOW1slc11d5YiwW1slc11d55qE6YeN5a6a5ZCR77yIUG9wdXBz77yJJyxcblx0XHQn5b+955Wl5b6eW1slc11d5YiwW1slc11d55qE6YeN5paw5bCO5ZCR77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBFeHRlbmRlZFJldmVydFN1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn5Zue6YCA5YiwJDLlnKgkMeaXtue8lui+keeahOS/ruiuoueJiOacrCQz77yIUG9wdXBz77yJJyxcblx0XHQn6YKE5Y6f5YiwJDLlnKgkMeaZguijveS9nOeahOS/ruiogueJiOacrCQz77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCflm57pgIDliLDkv67orqLniYjmnKwlc+eahOS4iuS4gOS4queJiOacrO+8iFBvcHVwc++8iScsXG5cdFx0J+mChOWOn+WIsOS/ruiogueJiOacrCVz55qE5LiK5LiA5YCL54mI5pys77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBSZXZlcnRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoJ+WbnumAgOWIsOS/ruiuoueJiOacrCVz77yIUG9wdXBz77yJJywgJ+mChOWOn+WIsOS/ruiogueJiOacrCVz77yIUG9wdXBz77yJJyksXG5cdGRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCflm57pgIDliLDkv67orqLniYjmnKwkMeeahOS4iuS4gOS4queJiOacrO+8jOeUsSQz5ZyoJDLml7bnvJbovpHvvIhQb3B1cHPvvIknLFxuXHRcdCfpgoTljp/liLDkv67oqILniYjmnKwkMeeahOS4iuS4gOWAi+eJiOacrO+8jOeUsSQz5ZyoJDLmmYLoo73kvZzvvIhQb3B1cHPvvIknXG5cdCksXG5cdGRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoXG5cdFx0J+WbnumAgOWIsCQz5ZyoJDLml7bnvJbovpHnmoTkv67orqLniYjmnKwkMe+8iFBvcHVwc++8iScsXG5cdFx0J+mChOWOn+WIsCQz5ZyoJDLmmYLoo73kvZznmoTkv67oqILniYjmnKwkMe+8iFBvcHVwc++8iSdcblx0KSxcblx0ZGVmYXVsdHBvcHVwUm1EYWJMaW5rU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCfnp7vpmaTliLDmtojmrafkuYnpobVbWyVzXV3nmoTpk77mjqXvvIhQb3B1cHPvvIknLFxuXHRcdCfnp7vpmaTliLDmtojmrafnvqnpoIFbWyVzXV3nmoTpgKPntZDvvIhQb3B1cHPvvIknXG5cdCksXG5cdFJlZGlyZWN0czogd2luZG93LndnVUxTKCfph43lrprlkJEnLCAn6YeN5a6a5ZCRJyksXG5cdC8vIGFzIGluIFJlZGlyZWN0cyB0byAuLi5cblx0Ly8gXCIgdG8gXCI6IHdpbmRvdy53Z1VMUyggXCLliLBcIixcIuWIsFwiICksXG5cdC8vIGFzIGluIFJlZGlyZWN0cyB0byAuLi5cblx0J0J5cGFzcyByZWRpcmVjdCc6IHdpbmRvdy53Z1VMUygn5b+955Wl6YeN5a6a5ZCRJywgJ+W/veeVpemHjeaWsOWwjuWQkScpLFxuXHQnRml4IHRoaXMgcmVkaXJlY3QnOiB3aW5kb3cud2dVTFMoJ+S/ruWkjemHjeWumuWQkScsICfkv67lvqnph43mlrDlsI7lkJEnKSxcblx0ZGlzYW1iaWc6IHdpbmRvdy53Z1VMUygn5raI5q2n5LmJJywgJ+a2iOatp+e+qScpLFxuXHQvLyAvLy8gYWRkIG9yIHJlbW92ZSBkYWIgZXRjLlxuXHRkaXNhbWJpZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5raI5q2n5LmJ6L+Z5Liq6ZO+5o6l5YiwIFtbJXNdXScsICfmtojmrafnvqnpgJnlgIvpgKPntZDliLAgW1slc11dJyksXG5cdCdDbGljayB0byBkaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvOic6IHdpbmRvdy53Z1VMUygn54K55Ye75Lul5raI5q2n5LmJ6L+Z5Liq6ZO+5o6l5Yiw77yaJywgJ+m7nuaTiuS7pea2iOatp+e+qemAmeWAi+mAo+e1kOWIsO+8micpLFxuXHQncmVtb3ZlIHRoaXMgbGluayc6IHdpbmRvdy53Z1VMUygn56e76Zmk6ZO+5o6lJywgJ+enu+mZpOmAo+e1kCcpLFxuXHQncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnOiB3aW5kb3cud2dVTFMoXG5cdFx0J+enu+mZpOatpOadoeebruWIsOi/memhteeahOaJgOaciemTvuaOpScsXG5cdFx0J+enu+mZpOatpOaineebruWIsOmAmemggeeahOaJgOaciemAo+e1kCdcblx0KSxcblx0J3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBkaXNhbWJpZyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJzogd2luZG93LndnVUxTKFxuXHRcdCfnp7vpmaTmraTmnaHnm67liLDov5nmtojmrafkuYnnmoTmiYDmnInpk77mjqUnLFxuXHRcdCfnp7vpmaTmraTmop3nm67liLDpgJnmtojmrafnvqnnmoTmiYDmnInpgKPntZAnXG5cdCksXG5cdG1haW5saW5rOiB3aW5kb3cud2dVTFMoJ+S4u+mTvuaOpScsICfkuLvpgKPntZAnKSxcblx0Ly8gLy8vIGxpbmtzLCB3YXRjaCwgdW53YXRjaFxuXHR3aWtpTGluazogd2luZG93LndnVUxTKCfkuKrlhoXpg6jpk77mjqUnLCAn5Liq5YWn6YOo6YCj57WQJyksXG5cdHdpa2lMaW5rczogd2luZG93LndnVUxTKCfkuKrlhoXpg6jpk77mjqUnLCAn5Liq5YWn6YOo6YCj57WQJyksXG5cdCdsaW5rcyBoZXJlJzogd2luZG93LndnVUxTKCfpk77lhaUnLCAn6Y+I5YWlJyksXG5cdHdoYXRMaW5rc0hlcmU6IHdpbmRvdy53Z1VMUygn6ZO+5YWl6aG16Z2iJywgJ+mPiOWFpemggemdoicpLFxuXHQnd2hhdCBsaW5rcyBoZXJlJzogd2luZG93LndnVUxTKCfpk77lhaXpobXpnaInLCAn6Y+I5YWl6aCB6Z2iJyksXG5cdFdoYXRsaW5rc2hlcmVIaW50OiB3aW5kb3cud2dVTFMoJ+aYvuekuumTvuaOpeWIsCAlcyDnmoTpobXpnaInLCAn6aGv56S66YCj57WQ5YiwICVzIOeahOmggemdoicpLFxuXHR1bndhdGNoU2hvcnQ6IHdpbmRvdy53Z1VMUygn5Y+W5raIJywgJ+WPlua2iCcpLFxuXHR3YXRjaFRoaW5neTogd2luZG93LndnVUxTKCfnm5Hop4YnLCAn55uj6KaWJyksXG5cdC8vIGNhbGxlZCB3YXRjaFRoaW5neSBiZWNhdXNlIHt9LndhdGNoIGlzIGEgZnVuY3Rpb25cblx0d2F0Y2hIaW50OiB3aW5kb3cud2dVTFMoJ+WKoOWFpSAlcyDliLDmiJHnmoTnm5Hop4bliJfooagnLCAn5Yqg5YWlICVzIOWIsOaIkeeahOebo+imluWIl+ihqCcpLFxuXHR1bndhdGNoSGludDogd2luZG93LndnVUxTKCfku47miJHnmoTnm5Hop4bliJfooajnp7vpmaQgJXMnLCAn5b6e5oiR55qE55uj6KaW5YiX6KGo56e76ZmkICVzJyksXG5cdCdPbmx5IGZvdW5kIG9uZSBlZGl0b3I6ICVzIG1hZGUgJXMgZWRpdHMnOiB3aW5kb3cud2dVTFMoXG5cdFx0J+S7heaJvuWIsOS4gOS9jee8luiAhe+8miVzIOWItumAoOS6hiAlcyDmrKHnvJbovpEnLFxuXHRcdCflg4Xmib7liLDkuIDkvY3nt6jogIXvvJolcyDoo73pgKDkuoYgJXMg5qyh57eo6LyvJ1xuXHQpLFxuXHQnJXMgc2VlbXMgdG8gYmUgdGhlIGxhc3QgZWRpdG9yIHRvIHRoZSBwYWdlICVzJzogd2luZG93LndnVUxTKFxuXHRcdCclcyDnnIvkuIrljrvmmK8gJXMg6L+Z6aG155qE5pyA5ZCO5LiA5L2N57yW6ICFJyxcblx0XHQnJXMg55yL5LiK5Y675pivICVzIOmAmemggeeahOacgOW+jOS4gOS9jee3qOiAhSdcblx0KSxcblx0cnNzOiB3aW5kb3cud2dVTFMoJ1JTUycsICdSU1MnKSxcblx0Ly8gZGlmZiBwcmV2aWV3c1xuXHQnRGlmZiB0cnVuY2F0ZWQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMnOiB3aW5kb3cud2dVTFMoJ+WHuuS6juaAp+iDveiAg+iZke+8jOW3ruW8guW3suiiq+aIquaWrScsICflh7rmlrzmlYjog73ogIPmha7vvIzlt67nlbDlt7LooqvmiKrmlrcnKSxcblx0J09sZCByZXZpc2lvbic6IHdpbmRvdy53Z1VMUygn5pen54mI5pysJywgJ+iIiueJiOacrCcpLFxuXHQnTmV3IHJldmlzaW9uJzogd2luZG93LndnVUxTKCfmlrDniYjmnKwnLCAn5paw54mI5pysJyksXG5cdCdTb21ldGhpbmcgd2VudCB3cm9uZyA6LSgnOiB3aW5kb3cud2dVTFMoJ+WHuumXrumimOS6hiA6LSgnLCAn5Ye65ZWP6aGM5LqGIDotKCcpLFxuXHQnRW1wdHkgcmV2aXNpb24sIG1heWJlIG5vbi1leGlzdGVudCc6IHdpbmRvdy53Z1VMUygn56m655qE5L+u6K6i77yM5Y+v6IO95bm25LiN5a2Y5ZyoJywgJ+epuueahOS/ruiogu+8jOWPr+iDveS4puS4jeWtmOWcqCcpLFxuXHQnVW5rbm93biBkYXRlJzogd2luZG93LndnVUxTKCfmnKrnn6Xml6XmnJ8nLCAn5pyq55+l5pel5pyfJyksXG5cdC8vIG90aGVyIHNwZWNpYWwgcHJldmlld3Ncblx0J0VtcHR5IGNhdGVnb3J5Jzogd2luZG93LndnVUxTKCfnqbrnmoTliIbnsbsnLCAn56m655qE5YiG6aGeJyksXG5cdCdDYXRlZ29yeSBtZW1iZXJzICglcyBzaG93biknOiB3aW5kb3cud2dVTFMoJ+WIhuexu+aIkOWRmO+8iCVzIOaYvuekuu+8iScsICfliIbpoZ7miJDlk6HvvIglcyDpoa/npLrvvIknKSxcblx0J05vIGltYWdlIGxpbmtzIGZvdW5kJzogd2luZG93LndnVUxTKCfmnKrmib7liLDmlofku7bpk77mjqUnLCAn5pyq5om+5Yiw5qqU5qGI6YCj57WQJyksXG5cdCdGaWxlIGxpbmtzJzogd2luZG93LndnVUxTKCfmlofku7bpk77mjqUnLCAn5qqU5qGI6YCj57WQJyksXG5cdCdub3QgY29tbW9ucyc6IHdpbmRvdy53Z1VMUygn57u05Z+65YWx5Lqr5Lit5peg5q2k5ZCN56ew55qE5paH5Lu244CCJywgJ+e2reWfuuWFseS6q+S4reeEoeatpOWQjeeoseeahOaqlOahiOOAgicpLFxuXHQnY29tbW9ucyBvbmx5Jzogd2luZG93LndnVUxTKCfmraTmlofku7bmnaXoh6rnu7Tln7rlhbHkuqvjgIInLCAn5q2k5qqU5qGI5L6G6Ieq57at5Z+65YWx5Lqr44CCJyksXG5cdCdObyBpbWFnZSBmb3VuZCc6IHdpbmRvdy53Z1VMUygn5om+5LiN5Yiw5paH5Lu2JywgJ+aJvuS4jeWIsOaqlOahiCcpLFxuXHQnY29tbW9ucyBkdXBlJzogd2luZG93LndnVUxTKCfnu7Tln7rlhbHkuqvkuK3lrZjlnKjmraTmlofku7bnmoTlia/mnKzjgIInLCAn57at5Z+65YWx5Lqr5Lit5a2Y5Zyo5q2k5qqU5qGI55qE5Ymv5pys44CCJyksXG5cdCdjb21tb25zIGNvbmZsaWN0Jzogd2luZG93LndnVUxTKCfnu7Tln7rlhbHkuqvkuK3lrZjlnKjmraTmlofku7blkI3np7DkuI3lkIznmoTlia/mnKzjgIInLCAn57at5Z+65YWx5Lqr5Lit5a2Y5Zyo5q2k5qqU5ZCN56ix5LiN5ZCM55qE5Ymv5pys44CCJyksXG5cdC8vIHVzZXItcmVsYXRlZCBhY3Rpb25zIGFuZCBpbmZvXG5cdHVzZXI6IHdpbmRvdy53Z1VMUygn55So5oi3JywgJ+S9v+eUqOiAhScpLFxuXHQvLyAvLy8gdXNlciBwYWdlLCB0YWxrLCBlbWFpbCwgc3BhY2Vcblx0J3VzZXImbmJzcDtwYWdlJzogd2luZG93LndnVUxTKCfnlKjmiLfpobUnLCAn5L2/55So6ICF6aCBJyksXG5cdCd1c2VyIHRhbGsnOiB3aW5kb3cud2dVTFMoJ+eUqOaIt+iuqOiuuicsICfkvb/nlKjogIXlsI3oqbEnKSxcblx0J2VkaXQgdXNlciB0YWxrJzogd2luZG93LndnVUxTKCfnvJbovpHnlKjmiLforqjorronLCAn57eo6Lyv5L2/55So6ICF5bCN6KmxJyksXG5cdCdsZWF2ZSBjb21tZW50Jzogd2luZG93LndnVUxTKCfnlZnoqIAnLCAn55WZ6KiAJyksXG5cdGVtYWlsOiB3aW5kb3cud2dVTFMoJ+eUtemCricsICfpm7vpg7UnKSxcblx0J2VtYWlsIHVzZXInOiB3aW5kb3cud2dVTFMoJ+eUtemCrueUqOaItycsICfpm7vpg7Xkvb/nlKjogIUnKSxcblx0RW1haWx1c2VySGludDogd2luZG93LndnVUxTKCfnu5kgJXMg5Y+R6YCB55S15a2Q6YKu5Lu2JywgJ+e1piAlcyDnmbzpgIHpm7vlrZDpg7Xku7YnKSxcblx0c3BhY2U6IHdpbmRvdy53Z1VMUygn5a2Q6aG16Z2iJywgJ+WtkOmggemdoicpLFxuXHQvLyBzaG9ydCBmb3JtIGZvciB1c2VyU3BhY2UgbGlua1xuXHRQcmVmaXhpbmRleEhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOeUqOaIt+mhteWtkOmhtemdoicsICfpoa/npLogJXMg55qE5L2/55So6ICF6aCB5a2Q6aCB6Z2iJyksXG5cdGNvdW50OiB3aW5kb3cud2dVTFMoJ+e7n+iuoScsICfntbHoqIgnKSxcblx0Ly8gLy8vIGNvbnRyaWJ1dGlvbnMsIHRyZWUsIGxvZ1xuXHQnZWRpdCBjb3VudGVyJzogd2luZG93LndnVUxTKCfnvJbovpHmrKHmlbAnLCAn57eo6Lyv5qyh5pW4JyksXG5cdGthdGVsaW5rSGludDogd2luZG93LndnVUxTKCclcyDnmoTnvJbovpHmrKHmlbAnLCAnJXMg55qE57eo6Lyv5qyh5pW4JyksXG5cdGNvbnRyaWJzOiB3aW5kb3cud2dVTFMoJ+i0oeeMricsICfosqLnjbsnKSxcblx0Y29udHJpYnV0aW9uczogd2luZG93LndnVUxTKCfotKHnjK4nLCAn6LKi5427JyksXG5cdGRlbGV0ZWRDb250cmliczogd2luZG93LndnVUxTKCflt7LliKDpmaTnmoTotKHnjK4nLCAn5bey5Yiq6Zmk55qE6LKi5427JyksXG5cdENvbnRyaWJ1dGlvbnNIaW50OiB3aW5kb3cud2dVTFMoJyVzIOeahOeUqOaIt+i0oeeMricsICclcyDnmoTkvb/nlKjogIXosqLnjbsnKSxcblx0dHJlZTogd2luZG93LndnVUxTKCfmoJEnLCAn5qi5JyksXG5cdGNvbnRyaWJzVHJlZUhpbnQ6IHdpbmRvdy53Z1VMUygn5qC55o2u5ZCN5a2X56m66Ze05p+l55yLICVzIOeahOi0oeeMricsICfmoLnmk5rlkb3lkI3nqbrplpPmqqLoppYgJXMg55qE6LKi5427JyksXG5cdGxvZzogd2luZG93LndnVUxTKCfml6Xlv5cnLCAn5pel6KqMJyksXG5cdCd1c2VyIGxvZyc6IHdpbmRvdy53Z1VMUygn55So5oi35pel5b+XJywgJ+S9v+eUqOiAheaXpeiqjCcpLFxuXHR1c2VyTG9nSGludDogd2luZG93LndnVUxTKCfmmL7npLogJXMg55qE55So5oi35pel5b+XJywgJ+mhr+ekuiAlcyDnmoTkvb/nlKjogIXml6XoqownKSxcblx0dW5ibG9ja1Nob3J0OiB3aW5kb3cud2dVTFMoJ+ino+mZpCcsICfop6PpmaQnKSxcblx0YmxvY2s6IHdpbmRvdy53Z1VMUygn5bCB56aBJywgJ+WwgemOlicpLFxuXHQnYmxvY2sgdXNlcic6IHdpbmRvdy53Z1VMUygn5bCB56aB55So5oi3JywgJ+WwgemOluS9v+eUqOiAhScpLFxuXHRJcGJsb2NrbGlzdEhpbnQ6IHdpbmRvdy53Z1VMUygn6Kej5bCBICVzJywgJ+ino+WwgSAlcycpLFxuXHRCbG9ja2lwSGludDogd2luZG93LndnVUxTKCflsIHnpoEgJXMnLCAn5bCB6Y6WICVzJyksXG5cdCdibG9jayBsb2cnOiB3aW5kb3cud2dVTFMoJ+WwgeemgeaXpeW/lycsICflsIHpjpbml6XoqownKSxcblx0YmxvY2tMb2dIaW50OiB3aW5kb3cud2dVTFMoJ+aYvuekuiAlcyDnmoTlsIHnpoHml6Xlv5cnLCAn6aGv56S6ICVzIOeahOWwgemOluaXpeiqjCcpLFxuXHRwcm90ZWN0TG9nSGludDogd2luZG93LndnVUxTKCfmmL7npLogJXMg55qE5L+d5oqk5pel5b+XJywgJ+mhr+ekuiAlcyDnmoTkv53orbfml6XoqownKSxcblx0cGFnZUxvZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOaXpeW/lycsICfpoa/npLogJXMg55qE5pel6KqMJyksXG5cdGRlbGV0ZUxvZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOWIoOmZpOaXpeW/lycsICfpoa/npLogJXMg55qE5Yiq6Zmk5pel6KqMJyksXG5cdCdJbnZhbGlkICVzICVzJzogd2luZG93LndnVUxTKCfpgInpobkgJXMg5LiN5Y+v55So77yaJXMnLCAn6YG46aCFICVzIOS4jeWPr+eUqO+8miVzJyksXG5cdG06ICflsI8nLFxuXHQvLyBBdXRvZWRpdGluZ1xuXHQnRW50ZXIgYSBub24tZW1wdHkgZWRpdCBzdW1tYXJ5IG9yIHByZXNzIGNhbmNlbCB0byBhYm9ydCc6IHdpbmRvdy53Z1VMUyhcblx0XHQn6L6T5YWl57yW6L6R5pGY6KaB77yM5oiW5oyJ5Y+W5raI5Lit5q2i5pON5L2cJyxcblx0XHQn6Ly45YWl57eo6Lyv5pGY6KaB77yM5oiW5oyJ5Y+W5raI5Lit5q2i5pON5L2cJ1xuXHQpLFxuXHQnRmFpbGVkIHRvIGdldCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgcGxlYXNlIGVkaXQgbWFudWFsbHkuXFxuXFxuJzogd2luZG93LndnVUxTKFxuXHRcdCfojrflj5bkv67orqLniYjmnKzkv6Hmga/lpLHotKXvvIzor7fmiYvliqjkv67mlLnjgIJcXG5cXG4nLFxuXHRcdCfnjbLlj5bkv67oqILniYjmnKzos4foqIrlpLHmlZfvvIzoq4vmiYvli5Xkv67mlLnjgIJcXG5cXG4nXG5cdCksXG5cdCdUaGUgJXMgYnV0dG9uIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgY2xpY2tlZC4gUGxlYXNlIHdhaXQgZm9yIHRoZSBuZXh0IHBhZ2UgdG8gbG9hZC4nOiB3aW5kb3cud2dVTFMoXG5cdFx0J+aMiemSriAlcyDlt7Looqvoh6rliqjngrnlh7vvvIzor7fnrYnlvoXkuIvkuIDkuKrpobXpnaLliqDovb3jgIInLFxuXHRcdCfmjInpiJUgJXMg5bey6KKr6Ieq5YuV6bue5pOK77yM6KuL562J5b6F5LiL5LiA5YCL6aCB6Z2i6LyJ5YWl44CCJ1xuXHQpLFxuXHQnQ291bGQgbm90IGZpbmQgYnV0dG9uICVzLiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGluIHlvdXIgamF2YXNjcmlwdCBmaWxlLic6IHdpbmRvdy53Z1VMUyhcblx0XHQn5om+5LiN5Yiw5oyJ6ZKuICVz77yM6K+35qOA5p+l5oKoIEphdmFTY3JpcHQg5paH5Lu25Lit55qE6K6+572u44CCJyxcblx0XHQn5om+5LiN5Yiw5oyJ6YiVICVz77yM6KuL5qqi5p+l5oKoIEphdmFTY3JpcHQg5qqU5qGI5Lit55qE6Kit5a6a44CCJ1xuXHQpLFxuXHQvLyBQb3B1cHMgc2V0dXBcblx0J09wZW4gZnVsbC1zaXplIGltYWdlJzogd2luZG93LndnVUxTKCfmn6XnnIvlhajlsLrlr7jlm77lg48nLCAn5qqi6KaW5YWo5bC65a+45b2x5YOPJyksXG5cdC8vIOS7peS4i+WGheWuueeUsSBBbm5BbmdlbGEg6KGl5q2jXG5cdGJpbmdTZWFyY2hIaW50OiB3aW5kb3cud2dVTFMoJ+WcqCBCaW5nIOS4iuaQnOe0ouKAnCVz4oCdJywgJ+WcqCBiaW5nIOS4iuaQnOWwi+OAjCVz44CNJyksXG5cdCdlbmFibGUgcHJldmlld3MnOiB3aW5kb3cud2dVTFMoJ+WQr+eUqOmihOiniCcsICfllZ/nlKjpoJDopr0nKSxcblx0J3Nob3cgcHJldmlldyc6IHdpbmRvdy53Z1VMUygn56aB55So6aKE6KeIJywgJ+emgeeUqOmgkOimvScpLFxuXHRoaXN0b3J5ZmVlZEhpbnQ6IHdpbmRvdy53Z1VMUygn6K+l6aG16Z2i55qE6L+R5pyf5pu05pS5IFJTUyBmZWVkJywgJ+ipsumggemdoueahOi/keacn+abtOaUuSBSU1MgZmVlZCcpLFxuXHQnc2VuZCB0aGFua3MnOiB3aW5kb3cud2dVTFMoJ+WPkemAgeaEn+iwoicsICflgrPpgIHmhJ/orJ0nKSxcblx0VGhhbmtzSGludDogd2luZG93LndnVUxTKCflkJHor6XnlKjmiLflj5HpgIHkuIDlsIHmhJ/osKLmtojmga8nLCAn5ZCR6Kmy5L2/55So6ICF5YKz6YCB5LiA5bCB5oSf6Kyd6KiK5oGvJyksXG5cdCdtYXJrIHBhdHJvbGxlZCc6IHdpbmRvdy53Z1VMUygn5qCH6K6w5Li65bey5beh5p+lJywgJ+aomeiomOeCuuW3suW3oeafpScpLFxuXHRtYXJrcGF0cm9sbGVkSGludDogd2luZG93LndnVUxTKCfmoIforrDor6XnvJbovpHkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY6Kmy57eo6Lyv54K65bey5beh5p+lJyksXG5cdCdDb3VsZCBub3QgbWFya2VkIHRoaXMgZWRpdCBhcyBwYXRyb2xsZWQnOiB3aW5kb3cud2dVTFMoJ+aXoOazleagh+iusOivpee8lui+keS4uuW3suW3oeafpScsICfnhKHms5XmqJnoqJjoqbLnt6jovK/ngrrlt7Llt6Hmn6UnKSxcblx0ZGVmYXVsdHBvcHVwUmV2aWV3ZWRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoJ+agh+iusOS7jueJiOacrCVz5YiwJXPpl7TnmoTnvJbovpHkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY5b6e54mI5pysJXPliLAlc+mWk+eahOe3qOi8r+eCuuW3suW3oeafpScpLFxuXHQnSW1hZ2UgZnJvbSBDb21tb25zJzogd2luZG93LndnVUxTKCfmnaXoh6rnu7Tln7rlhbHkuqvnmoTlm77niYcnLCAn5L6G6Ieq57at5Z+65YWx55So55qE5ZyW54mHJyksXG5cdCdEZXNjcmlwdGlvbiBwYWdlJzogd2luZG93LndnVUxTKCflm77niYfmj4/ov7DpobUnLCAn5ZyW54mH5o+P6L+w6aCBJyksXG5cdCdBbHQgdGV4dDonOiB3aW5kb3cud2dVTFMoJ+abv+aNouaWh+acrO+8iEFsdO+8ie+8micsICfmm7/mj5vmloflrZfvvIhBbHTvvInvvJonKSxcblx0cmV2ZGVsOiB3aW5kb3cud2dVTFMoJ+WOhuWPsueJiOacrOiiq+makOiXjycsICfmrbflj7LniYjmnKzooqvpmrHol48nKSxcblx0RGVsZXRlZGNvbnRyaWJ1dGlvbnNIaW50OiB3aW5kb3cud2dVTFMoJ+eUqOaItyVz55qE6KKr5Yig6Zmk57yW6L6R5qyh5pWwJywgJ+S9v+eUqOiAhSVz55qE6KKr5Yiq6Zmk57eo6Lyv5qyh5pW4JyksXG5cdCdObyBiYWNrbGlua3MgZm91bmQnOiB3aW5kb3cud2dVTFMoJ+aJvuS4jeWIsOmTvuWFpemhtemdoicsICfmib7kuI3liLDpj4jlhaXpoIHpnaInKSxcblx0JyBhbmQgbW9yZSc6IHdpbmRvdy53Z1VMUygn5Lul5Y+K5YW25LuW6aG16Z2iJywgJ+S7peWPiuWFtuS7lumggemdoicpLFxuXHQnRG93bmxvYWQgcHJldmlldyBkYXRhJzogd2luZG93LndnVUxTKCfkuIvovb3pooTop4jmlbDmja4nLCAn5LiL6LyJ6aCQ6Ka96LOH5paZJyksXG5cdCdOb3QgYSByZWdpc3RlcmVkIHVzZXJuYW1lJzogd2luZG93LndnVUxTKCfpnZ7lt7Lms6jlhoznmoTnlKjmiLcnLCAn6Z2e5bey6Ki75YaK55qE5L2/55So6ICFJyksXG5cdEJMT0NLRUQ6IHdpbmRvdy53Z1VMUygn6KKr5bCB56aBJywgJ+iiq+WwgemOlicpLFxuXHQnSGFzIGJsb2Nrcyc6IHdpbmRvdy53Z1VMUygn6KKr6YOo5YiG5bCB56aBJywgJ+iiq+mDqOWIhuWwgemOlicpLFxuXHQnIGVkaXRzIHNpbmNlOiAnOiB3aW5kb3cud2dVTFMoJ+asoee8lui+ke+8jOazqOWGjOaXpeacn+S4uicsICfmrKHnt6jovK/vvIzoqLvlhorml6XmnJ/ngronKSxcblx0J2xhc3QgZWRpdCBvbiAnOiB3aW5kb3cud2dVTFMoJ+acgOWQjuS4gOasoee8lui+keS6jicsICfmnIDlvozkuIDmrKHnt6jovK/mlrwnKSxcblx0RW1haWxVc2VySGludDogd2luZG93LndnVUxTKCfnu5kgJXMg5Y+R6YCB55S15a2Q6YKu5Lu2JywgJ+e1piAlcyDnmbzpgIHpm7vlrZDpg7Xku7YnKSxcblx0UkFOR0VCTE9DS0VEOiB3aW5kb3cud2dVTFMoJ0lQ5q616KKr5bCB56aBJywgJ0lQ5q616KKr5bCB6Y6WJyksXG5cdCdJUCB1c2VyJzogd2luZG93LndnVUxTKCdJUOeUqOaItycsICdJUOS9v+eUqOiAhScpLFxuXHQn4pmAJzogJ+KZgCcsXG5cdCfimYInOiAn4pmCJyxcblx0SElEREVOOiB3aW5kb3cud2dVTFMoJ+WFqOWfn+makOiXjycsICflhajln5/pmrHol48nKSxcblx0TE9DS0VEOiB3aW5kb3cud2dVTFMoJ+WFqOWfn+mUgeWumicsICflhajln5/pjpblrponKSxcblx0J0ludmFsaWQgdXNlcic6IHdpbmRvdy53Z1VMUygn6Z2e5rOV55So5oi35ZCNJywgJ+mdnuazleS9v+eUqOiAheWQjeeosScpLFxuXHRkaWZmOiB3aW5kb3cud2dVTFMoJ+W3ruW8gicsICflt67nlbAnKSxcblx0JyB0byAnOiAn6IezJyxcblxuXHRhdXRvZWRpdF92ZXJzaW9uOiAnbnAyMDE0MDQxNicsXG5cdFByZWZpeEluZGV4SGludDogd2luZG93LndnVUxTKCfmmL7npLrnlKjmiLclc+eahOWtkOmhtemdoicsICfpoa/npLrkvb/nlKjogIUlc+eahOWtkOmggemdoicpLFxuXHRudWxsRWRpdFN1bW1hcnk6IHdpbmRvdy53Z1VMUygn6L+b6KGM5LiA5qyh6Zu257yW6L6RJywgJ+mAsuihjOS4gOasoembtue3qOi8rycpLFxuXHQvLyDnlKjmiLfnu4TlkI3np7Dku47ns7vnu5/mtojmga/ojrflj5Zcblx0J2dyb3VwLW5vLWF1dG9jb25maXJtZWQnOiB3aW5kb3cud2dVTFMoJ+mdnuiHquWKqOehruiupOeUqOaItycsICfpnZ7oh6rli5Xnorroqo3kvb/nlKjogIUnKSxcblx0c2VwYXJhdG9yOiAn44CBJyxcblx0Y29tbWE6ICfvvIwnLFxufTtcblxuZXhwb3J0IHttZXNzYWdlfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7bWVzc2FnZX0gZnJvbSAnLi9zdHJpbmcnO1xuXG5jb25zdCBwb3B1cHMgPSAoKSA9PiB7XG5cdC8vIFNUQVJURklMRTogbWFpbi5qc1xuXHQvLyBGaXggbGF0ZXJcblx0Ly8gR2xvYmFsc1xuXHQvL1xuXHQvLyBUcnlpbmcgdG8gc2hvdmUgYXMgbWFueSBvZiB0aGVzZSBhcyBwb3NzaWJsZSBpbnRvIHRoZSBwZyAocG9wdXAgZ2xvYmFscykgb2JqZWN0XG5cdGNvbnN0IHBnID0ge1xuXHRcdGFwaToge30sXG5cdFx0cmU6IHt9LFxuXHRcdG5zOiB7fSxcblx0XHRzdHJpbmc6IHt9LFxuXHRcdHdpa2k6IHt9LFxuXHRcdHVzZXI6IHt9LFxuXHRcdG1pc2M6IHt9LFxuXHRcdG9wdGlvbjoge30sXG5cdFx0b3B0aW9uRGVmYXVsdDoge30sXG5cdFx0ZmxhZzoge30sXG5cdFx0Y2FjaGU6IHt9LFxuXHRcdHN0cnVjdHVyZXM6IHt9LFxuXHRcdHRpbWVyOiB7fSxcblx0XHRjb3VudGVyOiB7fSxcblx0XHRjdXJyZW50OiB7fSxcblx0XHRmbjoge30sXG5cdFx0ZW5kb2ZsaXN0OiBudWxsLFxuXHR9O1xuXHQvKiBCYWlsIGlmIHRoZSBnYWRnZXQvc2NyaXB0IGlzIGJlaW5nIGxvYWRlZCB0d2ljZSAqL1xuXHQvKiBBbiBlbGVtZW50IHdpdGggaWQgXCJwZ1wiIHdvdWxkIGFkZCBhIHdpbmRvdy5wZyBwcm9wZXJ0eSwgaWdub3JlIHN1Y2ggcHJvcGVydHkgKi9cblx0aWYgKHdpbmRvdy5wZyAmJiAhKHdpbmRvdy5wZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvKiBFeHBvcnQgdG8gZ2xvYmFsIGNvbnRleHQgKi9cblx0d2luZG93LnBnID0gcGc7XG5cdC8vIEVOREZJTEU6IG1haW4uanNcblx0Ly8gU1RBUlRGSUxFOiBhY3Rpb25zLmpzXG5cdGNvbnN0IHNldHVwVG9vbHRpcHMgPSAoY29udGFpbmVyLCByZW1vdmUsIGZvcmNlLCBwb3BEYXRhKSA9PiB7XG5cdFx0bG9nKGBzZXR1cFRvb2x0aXBzLCBjb250YWluZXI9JHtjb250YWluZXJ9LCByZW1vdmU9JHtyZW1vdmV9YCk7XG5cdFx0aWYgKCFjb250YWluZXIpIHtcblx0XHRcdC8vIHRoZSBtYWluIGluaXRpYWwgY2FsbFxuXHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwT25FZGl0U2VsZWN0aW9uJykgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuZWRpdGZvcm0gJiYgZG9jdW1lbnQuZWRpdGZvcm0ud3BUZXh0Ym94MSkge1xuXHRcdFx0XHRkb2N1bWVudC5lZGl0Zm9ybS53cFRleHRib3gxLm9ubW91c2V1cCA9IGRvU2VsZWN0aW9uUG9wdXA7XG5cdFx0XHR9XG5cdFx0XHQvLyBhcnRpY2xlL2NvbnRlbnQgaXMgYSBzdHJ1Y3R1cmUtZGVwZW5kZW50IHRoaW5nXG5cdFx0XHRjb250YWluZXIgPSBkZWZhdWx0UG9wdXBzQ29udGFpbmVyKCk7XG5cdFx0fVxuXHRcdGlmICghcmVtb3ZlICYmICFmb3JjZSAmJiBjb250YWluZXIucmFuU2V0dXBUb29sdGlwc0FscmVhZHkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29udGFpbmVyLnJhblNldHVwVG9vbHRpcHNBbHJlYWR5ID0gIXJlbW92ZTtcblx0XHRjb25zdCBhbmNob3JzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRzZXR1cFRvb2x0aXBzTG9vcChhbmNob3JzLCAwLCAyNTAsIDEwMCwgcmVtb3ZlLCBwb3BEYXRhKTtcblx0fTtcblx0Y29uc3QgZGVmYXVsdFBvcHVwc0NvbnRhaW5lciA9ICgpID0+IHtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBPbmx5QXJ0aWNsZUxpbmtzJykpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLXZlY3Rvci0yMDIyIC52ZWN0b3ItYm9keScpIHx8XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtd19jb250ZW50JykgfHxcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKSB8fFxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJ0aWNsZScpIHx8XG5cdFx0XHRcdGRvY3VtZW50XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gZG9jdW1lbnQ7XG5cdH07XG5cdGNvbnN0IHNldHVwVG9vbHRpcHNMb29wID0gZnVuY3Rpb24gc2V0dXBUb29sdGlwc0xvb3AoYW5jaG9ycywgYmVnaW4sIGhvd21hbnksIHNsZWVwLCByZW1vdmUsIHBvcERhdGEsIC4uLmFyZ3MpIHtcblx0XHRsb2coXG5cdFx0XHRzaW1wbGVQcmludGYoJ3NldHVwVG9vbHRpcHNMb29wKCVzLCVzLCVzLCVzLCVzKScsIFtcblx0XHRcdFx0YW5jaG9ycyxcblx0XHRcdFx0YmVnaW4sXG5cdFx0XHRcdGhvd21hbnksXG5cdFx0XHRcdHNsZWVwLFxuXHRcdFx0XHRyZW1vdmUsXG5cdFx0XHRcdHBvcERhdGEsXG5cdFx0XHRcdC4uLmFyZ3MsXG5cdFx0XHRdKVxuXHRcdCk7XG5cdFx0Y29uc3QgZmluaXNoID0gYmVnaW4gKyBob3dtYW55O1xuXHRcdGNvbnN0IGxvb3BlbmQgPSBNYXRoLm1pbihmaW5pc2gsIGFuY2hvcnMubGVuZ3RoKTtcblx0XHRsZXQgaiA9IGxvb3BlbmQgLSBiZWdpbjtcblx0XHRsb2coXG5cdFx0XHRgc2V0dXBUb29sdGlwczogYW5jaG9ycy5sZW5ndGg9JHthbmNob3JzLmxlbmd0aH0sIGJlZ2luPSR7YmVnaW59LCBob3dtYW55PSR7aG93bWFueX0sIGxvb3BlbmQ9JHtsb29wZW5kfSwgcmVtb3ZlPSR7cmVtb3ZlfWBcblx0XHQpO1xuXHRcdGNvbnN0IGRvVG9vbHRpcCA9IHJlbW92ZSA/IHJlbW92ZVRvb2x0aXAgOiBhZGRUb29sdGlwO1xuXHRcdC8vIHRyeSBhIGZhc3RlciAoPykgbG9vcCBjb25zdHJ1Y3Rcblx0XHRpZiAoaiA+IDApIHtcblx0XHRcdGRvIHtcblx0XHRcdFx0Y29uc3QgYSA9IGFuY2hvcnNbbG9vcGVuZCAtIGpdO1xuXHRcdFx0XHRpZiAoYSA9PT0gdW5kZWZpbmVkIHx8ICFhIHx8ICFhLmhyZWYpIHtcblx0XHRcdFx0XHRsb2coYGdvdCBudWxsIGFuY2hvciBhdCBpbmRleCAke2xvb3BlbmR9YCAtIGopO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRvVG9vbHRpcChhLCBwb3BEYXRhKTtcblx0XHRcdH0gd2hpbGUgKC0taik7XG5cdFx0fVxuXHRcdGlmIChmaW5pc2ggPCBhbmNob3JzLmxlbmd0aCkge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldHVwVG9vbHRpcHNMb29wKGFuY2hvcnMsIGZpbmlzaCwgaG93bWFueSwgc2xlZXAsIHJlbW92ZSwgcG9wRGF0YSk7XG5cdFx0XHR9LCBzbGVlcCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghcmVtb3ZlICYmICFnZXRWYWx1ZU9mKCdwb3B1cFRvY0xpbmtzJykpIHtcblx0XHRcdFx0cm1Ub2NUb29sdGlwcygpO1xuXHRcdFx0fVxuXHRcdFx0cGcuZmxhZy5maW5pc2hlZExvYWRpbmcgPSB0cnVlO1xuXHRcdH1cblx0fTtcblx0Ly8gZWxpbWluYXRlIHBvcHVwcyBmcm9tIHRoZSBUT0Ncblx0Ly8gVGhpcyBhbHNvIGtpbGxzIGFueSBvbmNsaWNrIHN0dWZmIHRoYXQgdXNlZCB0byBiZSBnb2luZyBvbiBpbiB0aGUgdG9jXG5cdGNvbnN0IHJtVG9jVG9vbHRpcHMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvYycpO1xuXHRcdGlmICh0b2MpIHtcblx0XHRcdGNvbnN0IHRvY0xpbmtzID0gdG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRcdGNvbnN0IHRvY0xlbiA9IHRvY0xpbmtzLmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdG9jTGVuOyArK2opIHtcblx0XHRcdFx0cmVtb3ZlVG9vbHRpcCh0b2NMaW5rc1tqXSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBhZGRUb29sdGlwID0gKGEsIHBvcERhdGEpID0+IHtcblx0XHRpZiAoIWlzUG9wdXBMaW5rKGEpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGEub25tb3VzZW92ZXIgPSBtb3VzZU92ZXJXaWtpTGluaztcblx0XHRhLm9ubW91c2VvdXQgPSBtb3VzZU91dFdpa2lMaW5rO1xuXHRcdGEub25tb3VzZWRvd24gPSBraWxsUG9wdXA7XG5cdFx0YS5oYXNQb3B1cCA9IHRydWU7XG5cdFx0YS5wb3BEYXRhID0gcG9wRGF0YTtcblx0fTtcblx0Y29uc3QgcmVtb3ZlVG9vbHRpcCA9IChhKSA9PiB7XG5cdFx0aWYgKCFhLmhhc1BvcHVwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGEub25tb3VzZW92ZXIgPSBudWxsO1xuXHRcdGEub25tb3VzZW91dCA9IG51bGw7XG5cdFx0aWYgKGEub3JpZ2luYWxUaXRsZSkge1xuXHRcdFx0YS50aXRsZSA9IGEub3JpZ2luYWxUaXRsZTtcblx0XHR9XG5cdFx0YS5oYXNQb3B1cCA9IGZhbHNlO1xuXHR9O1xuXHRjb25zdCByZW1vdmVUaXRsZSA9IChhKSA9PiB7XG5cdFx0YS5vcmlnaW5hbFRpdGxlIHx8PSBhLnRpdGxlO1xuXHRcdGEudGl0bGUgPSAnJztcblx0fTtcblx0Y29uc3QgcmVzdG9yZVRpdGxlID0gKGEpID0+IHtcblx0XHRpZiAoYS50aXRsZSB8fCAhYS5vcmlnaW5hbFRpdGxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGEudGl0bGUgPSBhLm9yaWdpbmFsVGl0bGU7XG5cdH07XG5cdGNvbnN0IHJlZ2lzdGVySG9va3MgPSAobnApID0+IHtcblx0XHRjb25zdCBwb3B1cE1heFdpZHRoID0gZ2V0VmFsdWVPZigncG9wdXBNYXhXaWR0aCcpO1xuXHRcdGlmICh0eXBlb2YgcG9wdXBNYXhXaWR0aCA9PT0gJ251bWJlcicpIHtcblx0XHRcdGNvbnN0IHNldE1heFdpZHRoID0gKCkgPT4ge1xuXHRcdFx0XHRucC5tYWluRGl2LnN0eWxlLm1heFdpZHRoID0gYCR7cG9wdXBNYXhXaWR0aH1weGA7XG5cdFx0XHRcdG5wLm1heFdpZHRoID0gcG9wdXBNYXhXaWR0aDtcblx0XHRcdH07XG5cdFx0XHRucC5hZGRIb29rKHNldE1heFdpZHRoLCAndW5oaWRlJywgJ2JlZm9yZScpO1xuXHRcdH1cblx0XHRucC5hZGRIb29rKGFkZFBvcHVwU2hvcnRjdXRzLCAndW5oaWRlJywgJ2FmdGVyJyk7XG5cdFx0bnAuYWRkSG9vayhybVBvcHVwU2hvcnRjdXRzLCAnaGlkZScsICdiZWZvcmUnKTtcblx0fTtcblx0Y29uc3QgcmVtb3ZlTW9kaWZpZXJLZXlMaXN0ZW5lciA9IChhKSA9PiB7XG5cdFx0Ly8gcmVtb3ZlIGxpc3RlbmVycyBmb3IgbW9kaWZpZXIga2V5IGlmIGFueSB0aGF0IHdlcmUgYWRkZWQgaW4gbW91c2VPdmVyV2lraUxpbmtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYS5tb2RpZmllcktleUxpc3RlbmVyLCBmYWxzZSk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBhLm1vZGlmaWVyS2V5TGlzdGVuZXIsIGZhbHNlKTtcblx0fTtcblx0Y29uc3QgbW91c2VPdmVyV2lraUxpbmsgPSBmdW5jdGlvbiBtb3VzZU92ZXJXaWtpTGluayhldnQpIHtcblx0XHRpZiAoIWV2dCAmJiB3aW5kb3cuZXZlbnQpIHtcblx0XHRcdGV2dCA9IHdpbmRvdy5ldmVudDtcblx0XHR9XG5cdFx0Ly8gaWYgdGhlIG1vZGlmaWVyIGlzIG5lZWRlZCwgbGlzdGVuIGZvciBpdCxcblx0XHQvLyB3ZSB3aWxsIHJlbW92ZSB0aGUgbGlzdGVuZXIgd2hlbiB3ZSBtb3VzZW91dCBvZiB0aGlzIGxpbmsgb3Iga2lsbCBwb3B1cC5cblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBNb2RpZmllcicpKSB7XG5cdFx0XHQvLyBpZiBwb3B1cE1vZGlmaWVyQWN0aW9uID0gZW5hYmxlLCB3ZSBzaG91bGQgcG9wdXAgd2hlbiB0aGUgbW9kaWZpZXIgaXMgcHJlc3NlZFxuXHRcdFx0Ly8gaWYgcG9wdXBNb2RpZmllckFjdGlvbiA9IGRpc2FibGUsIHdlIHNob3VsZCBwb3B1cCB1bmxlc3MgdGhlIG1vZGlmaWVyIGlzIHByZXNzZWRcblx0XHRcdGNvbnN0IGFjdGlvbiA9IGdldFZhbHVlT2YoJ3BvcHVwTW9kaWZpZXJBY3Rpb24nKTtcblx0XHRcdGNvbnN0IGtleSA9IGFjdGlvbiA9PT0gJ2Rpc2FibGUnID8gJ2tleXVwJyA6ICdrZXlkb3duJztcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5tb2RpZmllcktleUxpc3RlbmVyID0gKGV2dCkgPT4ge1xuXHRcdFx0XHRtb3VzZU92ZXJXaWtpTGluazIoc2VsZiwgZXZ0KTtcblx0XHRcdH07XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGtleSwgc2VsZi5tb2RpZmllcktleUxpc3RlbmVyLCBmYWxzZSk7XG5cdFx0fVxuXHRcdHJldHVybiBtb3VzZU92ZXJXaWtpTGluazIodGhpcywgZXZ0KTtcblx0fTtcblx0LyoqXG5cdCAqIEdldHMgdGhlIHJlZmVyZW5jZXMgbGlzdCBpdGVtIHRoYXQgdGhlIHByb3ZpZGVkIGZvb3Rub3RlIGxpbmsgdGFyZ2V0cy4gVGhpc1xuXHQgKiBpcyB0eXBpY2FsbHkgYSBsaSBlbGVtZW50IHdpdGhpbiB0aGUgb2wucmVmZXJlbmNlcyBlbGVtZW50IGluc2lkZSB0aGUgcmVmbGlzdC5cblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBhIC0gQSBmb290bm90ZSBsaW5rLlxuXHQgKiBAcmV0dXJuIHtFbGVtZW50fGJvb2xlYW59IFRoZSB0YXJnZXRlZCBlbGVtZW50LCBvciBmYWxzZSBpZiBvbmUgY2FuJ3QgYmUgZm91bmQuXG5cdCAqL1xuXHRjb25zdCBmb290bm90ZVRhcmdldCA9IChhKSA9PiB7XG5cdFx0Y29uc3QgYVRpdGxlID0gVGl0bGUuZnJvbUFuY2hvcihhKTtcblx0XHQvLyBXZSB3YW50IFwiLjNBXCIgcmF0aGVyIHRoYW4gXCIlM0FcIiBvciBcIj9cIiBoZXJlLCBzbyB1c2UgdGhlIGFuY2hvciBwcm9wZXJ0eSBkaXJlY3RseVxuXHRcdGNvbnN0IGFuY2ggPSBhVGl0bGUuYW5jaG9yO1xuXHRcdGlmICghL14oY2l0ZV9ub3RlLXxfbm90ZS18ZW5kbm90ZSkvLnRlc3QoYW5jaCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgbFRpdGxlID0gVGl0bGUuZnJvbVVSTChsb2NhdGlvbi5ocmVmKTtcblx0XHRpZiAobFRpdGxlLnRvU3RyaW5nKHRydWUpICE9PSBhVGl0bGUudG9TdHJpbmcodHJ1ZSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0bGV0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YW5jaH1gKTtcblx0XHR3aGlsZSAoZWwgJiYgdHlwZW9mIGVsLm5vZGVOYW1lID09PSAnc3RyaW5nJykge1xuXHRcdFx0Y29uc3QgbnQgPSBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aWYgKG50ID09PSAnbGknKSB7XG5cdFx0XHRcdHJldHVybiBlbDtcblx0XHRcdH0gZWxzZSBpZiAobnQgPT09ICdib2R5Jykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9IGVsc2UgaWYgKGVsLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0ZWwgPSBlbC5wYXJlbnROb2RlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGNvbnN0IGZvb3Rub3RlUHJldmlldyA9ICh4LCBuYXZwb3ApID0+IHtcblx0XHRzZXRQb3B1cEhUTUwoYDxocj4ke3guaW5uZXJIVE1MfWAsICdwb3B1cFByZXZpZXcnLCBuYXZwb3AuaWROdW1iZXIpO1xuXHR9O1xuXHRjb25zdCBtb2RpZmllclByZXNzZWQgPSAoZXZ0KSA9PiB7XG5cdFx0Y29uc3QgbW9kID0gZ2V0VmFsdWVPZigncG9wdXBNb2RpZmllcicpO1xuXHRcdGlmICghbW9kKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghZXZ0ICYmIHdpbmRvdy5ldmVudCkge1xuXHRcdFx0ZXZ0ID0gd2luZG93LmV2ZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gZXZ0ICYmIG1vZCAmJiBldnRbYCR7bW9kLnRvTG93ZXJDYXNlKCl9S2V5YF07XG5cdH07XG5cdC8vIENoZWNrcyBpZiB0aGUgY29ycmVjdCBtb2RpZmllciBwcmVzc2VkL3VucHJlc3NlZCBpZiBuZWVkZWRcblx0Y29uc3QgaXNDb3JyZWN0TW9kaWZpZXIgPSAoX2EsIGV2dCkgPT4ge1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBNb2RpZmllcicpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Ly8gaWYgcG9wdXBNb2RpZmllckFjdGlvbiA9IGVuYWJsZSwgd2Ugc2hvdWxkIHBvcHVwIHdoZW4gdGhlIG1vZGlmaWVyIGlzIHByZXNzZWRcblx0XHQvLyBpZiBwb3B1cE1vZGlmaWVyQWN0aW9uID0gZGlzYWJsZSwgd2Ugc2hvdWxkIHBvcHVwIHVubGVzcyB0aGUgbW9kaWZpZXIgaXMgcHJlc3NlZFxuXHRcdGNvbnN0IGFjdGlvbiA9IGdldFZhbHVlT2YoJ3BvcHVwTW9kaWZpZXJBY3Rpb24nKTtcblx0XHRyZXR1cm4gKGFjdGlvbiA9PT0gJ2VuYWJsZScgJiYgbW9kaWZpZXJQcmVzc2VkKGV2dCkpIHx8IChhY3Rpb24gPT09ICdkaXNhYmxlJyAmJiAhbW9kaWZpZXJQcmVzc2VkKGV2dCkpO1xuXHR9O1xuXHRjb25zdCBtb3VzZU92ZXJXaWtpTGluazIgPSAoYSwgZXZ0KSA9PiB7XG5cdFx0aWYgKCFpc0NvcnJlY3RNb2RpZmllcihhLCBldnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChnZXRWYWx1ZU9mKCdyZW1vdmVUaXRsZXMnKSkge1xuXHRcdFx0cmVtb3ZlVGl0bGUoYSk7XG5cdFx0fVxuXHRcdGlmIChhID09PSBwZy5jdXJyZW50LmxpbmsgJiYgYS5uYXZwb3B1cCAmJiBhLm5hdnBvcHVwLmlzVmlzaWJsZSgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHBnLmN1cnJlbnQubGluayA9IGE7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3NpbXBsZVBvcHVwcycpICYmICFwZy5vcHRpb24ucG9wdXBTdHJ1Y3R1cmUpIHtcblx0XHRcdC8vIHJlc2V0ICpkZWZhdWx0IHZhbHVlKiBvZiBwb3B1cFN0cnVjdHVyZVxuXHRcdFx0c2V0RGVmYXVsdCgncG9wdXBTdHJ1Y3R1cmUnLCAnb3JpZ2luYWwnKTtcblx0XHR9XG5cdFx0Y29uc3QgYXJ0aWNsZSA9IG5ldyBUaXRsZSgpLmZyb21BbmNob3IoYSk7XG5cdFx0Ly8gc2V0IGdsb2JhbCB2YXJpYWJsZSAodWdoKSB0byBob2xkIGFydGljbGUgKHdpa2lwYWdlKVxuXHRcdHBnLmN1cnJlbnQuYXJ0aWNsZSA9IGFydGljbGU7XG5cdFx0aWYgKCFhLm5hdnBvcHVwKSB7XG5cdFx0XHRhLm5hdnBvcHVwID0gbmV3TmF2cG9wdXAoYSwgYXJ0aWNsZSk7XG5cdFx0XHRwZy5jdXJyZW50LmxpbmtzSGFzaFthLmhyZWZdID0gYS5uYXZwb3B1cDtcblx0XHRcdHBnLmN1cnJlbnQubGlua3MucHVzaChhKTtcblx0XHR9XG5cdFx0aWYgKGEubmF2cG9wdXAucGVuZGluZyA9PT0gbnVsbCB8fCBhLm5hdnBvcHVwLnBlbmRpbmcgIT09IDApIHtcblx0XHRcdC8vIGVpdGhlciBmcmVzaCBwb3B1cHMgb3IgdGhvc2Ugd2l0aCB1bmZpbnNoZWQgYnVzaW5lc3MgYXJlIHJlZG9uZSBmcm9tIHNjcmF0Y2hcblx0XHRcdHNpbXBsZVBvcHVwQ29udGVudChhLCBhcnRpY2xlKTtcblx0XHR9XG5cdFx0YS5uYXZwb3B1cC5zaG93U29vbklmU3RhYmxlKGEubmF2cG9wdXAuZGVsYXkpO1xuXHRcdGNsZWFySW50ZXJ2YWwocGcudGltZXIuY2hlY2tQb3B1cFBvc2l0aW9uKTtcblx0XHRwZy50aW1lci5jaGVja1BvcHVwUG9zaXRpb24gPSBzZXRJbnRlcnZhbChjaGVja1BvcHVwUG9zaXRpb24sIDYwMCk7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3NpbXBsZVBvcHVwcycpICYmIGdldFZhbHVlT2YoJ3BvcHVwUHJldmlld0J1dHRvbicpICYmICFhLnNpbXBsZU5vTW9yZSkge1xuXHRcdFx0Y29uc3QgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZC5jbGFzc05hbWUgPSAncG9wdXBQcmV2aWV3QnV0dG9uRGl2Jztcblx0XHRcdGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRkLmFwcGVuZChzKTtcblx0XHRcdHMuY2xhc3NOYW1lID0gJ3BvcHVwUHJldmlld0J1dHRvbic7XG5cdFx0XHRzW2BvbiR7Z2V0VmFsdWVPZigncG9wdXBQcmV2aWV3QnV0dG9uRXZlbnQnKX1gXSA9ICgpID0+IHtcblx0XHRcdFx0YS5zaW1wbGVOb01vcmUgPSB0cnVlO1xuXHRcdFx0XHRkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdG5vbnNpbXBsZVBvcHVwQ29udGVudChhLCBhcnRpY2xlKTtcblx0XHRcdH07XG5cdFx0XHRzLmlubmVySFRNTCA9IHBvcHVwU3RyaW5nKCdzaG93IHByZXZpZXcnKTtcblx0XHRcdHNldFBvcHVwSFRNTChkLCAncG9wdXBQcmV2aWV3JywgYS5uYXZwb3B1cC5pZE51bWJlcik7XG5cdFx0fVxuXHRcdGlmIChhLm5hdnBvcHVwLnBlbmRpbmcgIT09IDApIHtcblx0XHRcdG5vbnNpbXBsZVBvcHVwQ29udGVudChhLCBhcnRpY2xlKTtcblx0XHR9XG5cdH07XG5cdC8vIHNpbXBsZVBvcHVwQ29udGVudDogdGhlIGNvbnRlbnQgdGhhdCBkbyBub3QgcmVxdWlyZSBhZGRpdGlvbmFsIGRvd25sb2FkXG5cdC8vIChpdCBpcyBzaG93biBldmVuIHdoZW4gc2ltcGxlUG9wdXBzIGlzIHRydWUpXG5cdGNvbnN0IHNpbXBsZVBvcHVwQ29udGVudCA9IChhLCBhcnRpY2xlKSA9PiB7XG5cdFx0LyogRklYTUUgaGFjayAqL1xuXHRcdGEubmF2cG9wdXAuaGFzUG9wdXBNZW51ID0gZmFsc2U7XG5cdFx0YS5uYXZwb3B1cC5zZXRJbm5lckhUTUwocG9wdXBIVE1MKGEpKTtcblx0XHRmaWxsRW1wdHlTcGFucyh7XG5cdFx0XHRuYXZwb3B1cDogYS5uYXZwb3B1cCxcblx0XHR9KTtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBEcmFnZ2FibGUnKSkge1xuXHRcdFx0bGV0IGRyYWdIYW5kbGUgPSBnZXRWYWx1ZU9mKCdwb3B1cERyYWdIYW5kbGUnKSB8fCBudWxsO1xuXHRcdFx0aWYgKGRyYWdIYW5kbGUgJiYgZHJhZ0hhbmRsZSAhPT0gJ2FsbCcpIHtcblx0XHRcdFx0ZHJhZ0hhbmRsZSArPSBhLm5hdnBvcHVwLmlkTnVtYmVyO1xuXHRcdFx0fVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGEubmF2cG9wdXAubWFrZURyYWdnYWJsZShkcmFnSGFuZGxlKTtcblx0XHRcdH0sIDE1MCk7XG5cdFx0fVxuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFJlZGxpbmtSZW1vdmFsJykgJiYgYS5jbGFzc05hbWUgPT09ICduZXcnKSB7XG5cdFx0XHRzZXRQb3B1cEhUTUwoYDxicj4ke3BvcHVwUmVkbGlua0hUTUwoYXJ0aWNsZSl9YCwgJ3BvcHVwUmVkbGluaycsIGEubmF2cG9wdXAuaWROdW1iZXIpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgZGVidWdEYXRhID0gKG5hdnBvcHVwKSA9PiB7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwRGVidWdnaW5nJykgJiYgbmF2cG9wdXAuaWROdW1iZXIpIHtcblx0XHRcdHNldFBvcHVwSFRNTChgaWROdW1iZXI9JHtuYXZwb3B1cC5pZE51bWJlcn0sIHBlbmRpbmc9JHtuYXZwb3B1cC5wZW5kaW5nfWAsICdwb3B1cEVycm9yJywgbmF2cG9wdXAuaWROdW1iZXIpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgbmV3TmF2cG9wdXAgPSAoYSwgYXJ0aWNsZSkgPT4ge1xuXHRcdGNvbnN0IG5hdnBvcHVwID0gbmV3IE5hdnBvcHVwKCk7XG5cdFx0bmF2cG9wdXAuZnV6eiA9IDU7XG5cdFx0bmF2cG9wdXAuZGVsYXkgPSBnZXRWYWx1ZU9mKCdwb3B1cERlbGF5JykgKiAxMDAwO1xuXHRcdC8vIGluY3JlbWVudCBnbG9iYWwgY291bnRlciBub3dcblx0XHRuYXZwb3B1cC5pZE51bWJlciA9ICsrcGcuaWROdW1iZXI7XG5cdFx0bmF2cG9wdXAucGFyZW50QW5jaG9yID0gYTtcblx0XHRuYXZwb3B1cC5wYXJlbnRQb3B1cCA9IGEucG9wRGF0YSAmJiBhLnBvcERhdGEub3duZXI7XG5cdFx0bmF2cG9wdXAuYXJ0aWNsZSA9IGFydGljbGU7XG5cdFx0cmVnaXN0ZXJIb29rcyhuYXZwb3B1cCk7XG5cdFx0cmV0dXJuIG5hdnBvcHVwO1xuXHR9O1xuXHQvLyBTaG91bGQgd2Ugc2hvdyBub25zaW1wbGUgY29udGV4dD9cblx0Ly8gSWYgc2ltcGxlUG9wdXBzIGlzIHNldCB0byB0cnVlLCB0aGVuIHdlIGRvIG5vdCBzaG93IG5vbnNpbXBsZSBjb250ZXh0LFxuXHQvLyBidXQgaWYgYSBib3R0b20gXCJzaG93IHByZXZpZXdcIiB3YXMgY2xpY2tlZCB3ZSBkbyBzaG93IG5vbnNpbXBsZSBjb250ZXh0XG5cdGNvbnN0IHNob3VsZFNob3dOb25TaW1wbGUgPSAoYSkgPT4ge1xuXHRcdHJldHVybiAhZ2V0VmFsdWVPZignc2ltcGxlUG9wdXBzJykgfHwgYS5zaW1wbGVOb01vcmU7XG5cdH07XG5cdC8vIFNob3VsZCB3ZSBzaG93IG5vbnNpbXBsZSBjb250ZXh0IGdvdmVybiBieSB0aGUgb3B0aW9uIChlLmcuIHBvcHVwVXNlckluZm8pP1xuXHQvLyBJZiB0aGUgdXNlciBleHBsaWNpdGx5IGFza2VkIGZvciBub25zaW1wbGUgY29udGV4dCBieSBzZXR0aW5nIHRoZSBvcHRpb24gdG8gdHJ1ZSxcblx0Ly8gdGhlbiB3ZSBzaG93IGl0IGV2ZW4gaW4gbm9uc2ltcGxlIG1vZGUuXG5cdGNvbnN0IHNob3VsZFNob3cgPSAoYSwgb3B0aW9uKSA9PiB7XG5cdFx0aWYgKHNob3VsZFNob3dOb25TaW1wbGUoYSkpIHtcblx0XHRcdHJldHVybiBnZXRWYWx1ZU9mKG9wdGlvbik7XG5cdFx0fVxuXHRcdHJldHVybiB3aW5kb3dbb3B0aW9uXSAhPT0gdW5kZWZpbmVkICYmIHdpbmRvd1tvcHRpb25dO1xuXHR9O1xuXHRjb25zdCBub25zaW1wbGVQb3B1cENvbnRlbnQgPSAoYSwgYXJ0aWNsZSkgPT4ge1xuXHRcdGxldCBkaWZmO1xuXHRcdGxldCBoaXN0b3J5O1xuXHRcdGNvbnN0IHBhcmFtcyA9IHBhcnNlUGFyYW1zKGEuaHJlZik7XG5cdFx0Y29uc3Qgb2xkaWQgPSBwYXJhbXMub2xkaWQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBwYXJhbXMub2xkaWQ7XG5cdFx0aWYgKHNob3VsZFNob3coYSwgJ3BvcHVwUHJldmlld0RpZmZzJykpIHtcblx0XHRcdCh7ZGlmZn0gPSBwYXJhbXMpO1xuXHRcdH1cblx0XHRpZiAoc2hvdWxkU2hvdyhhLCAncG9wdXBQcmV2aWV3SGlzdG9yeScpKSB7XG5cdFx0XHRoaXN0b3J5ID0gcGFyYW1zLmFjdGlvbiA9PT0gJ2hpc3RvcnknO1xuXHRcdH1cblx0XHRhLm5hdnBvcHVwLnBlbmRpbmcgPSAwO1xuXHRcdGNvbnN0IHJlZmVyZW5jZUVsZW1lbnQgPSBmb290bm90ZVRhcmdldChhKTtcblx0XHRpZiAocmVmZXJlbmNlRWxlbWVudCkge1xuXHRcdFx0Zm9vdG5vdGVQcmV2aWV3KHJlZmVyZW5jZUVsZW1lbnQsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoZGlmZiB8fCBkaWZmID09PSAwKSB7XG5cdFx0XHRsb2FkRGlmZihhcnRpY2xlLCBvbGRpZCwgZGlmZiwgYS5uYXZwb3B1cCk7XG5cdFx0fSBlbHNlIGlmIChoaXN0b3J5KSB7XG5cdFx0XHRsb2FkQVBJUHJldmlldygnaGlzdG9yeScsIGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoc2hvdWxkU2hvd05vblNpbXBsZShhKSAmJiBwZy5yZS5jb250cmlicy50ZXN0KGEuaHJlZikpIHtcblx0XHRcdGxvYWRBUElQcmV2aWV3KCdjb250cmlicycsIGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoc2hvdWxkU2hvd05vblNpbXBsZShhKSAmJiBwZy5yZS5iYWNrbGlua3MudGVzdChhLmhyZWYpKSB7XG5cdFx0XHRsb2FkQVBJUHJldmlldygnYmFja2xpbmtzJywgYXJ0aWNsZSwgYS5uYXZwb3B1cCk7XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdC8vIEZJWE1FIHNob3VsZCBiZSBhYmxlIHRvIGdldCBhbGwgcHJldmlldyBjb21iaW5hdGlvbnMgd2l0aCBvcHRpb25zXG5cdFx0XHRhcnRpY2xlLm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zSW1hZ2VJZCAmJlxuXHRcdFx0KHNob3VsZFNob3coYSwgJ2ltYWdlUG9wdXBzRm9ySW1hZ2VzJykgfHwgIWFuY2hvckNvbnRhaW5zSW1hZ2UoYSkpXG5cdFx0KSB7XG5cdFx0XHRsb2FkQVBJUHJldmlldygnaW1hZ2VwYWdlcHJldmlldycsIGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdFx0bG9hZEltYWdlKGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoYXJ0aWNsZS5uYW1lc3BhY2VJZCgpID09PSBwZy5uc0NhdGVnb3J5SWQgJiYgc2hvdWxkU2hvdyhhLCAncG9wdXBDYXRlZ29yeU1lbWJlcnMnKSkge1xuXHRcdFx0XHRsb2FkQVBJUHJldmlldygnY2F0ZWdvcnknLCBhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdChhcnRpY2xlLm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zVXNlcklkIHx8IGFydGljbGUubmFtZXNwYWNlSWQoKSA9PT0gcGcubnNVc2VydGFsa0lkKSAmJlxuXHRcdFx0XHRzaG91bGRTaG93KGEsICdwb3B1cFVzZXJJbmZvJylcblx0XHRcdCkge1xuXHRcdFx0XHRsb2FkQVBJUHJldmlldygndXNlcmluZm8nLCBhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHRcdH1cblx0XHRcdGlmIChzaG91bGRTaG93Tm9uU2ltcGxlKGEpKSB7XG5cdFx0XHRcdHN0YXJ0QXJ0aWNsZVByZXZpZXcoYXJ0aWNsZSwgb2xkaWQsIGEubmF2cG9wdXApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgcGVuZGluZ05hdnBvcFRhc2sgPSAobmF2cG9wKSA9PiB7XG5cdFx0aWYgKG5hdnBvcCAmJiBuYXZwb3AucGVuZGluZyA9PT0gbnVsbCkge1xuXHRcdFx0bmF2cG9wLnBlbmRpbmcgPSAwO1xuXHRcdH1cblx0XHQrK25hdnBvcC5wZW5kaW5nO1xuXHRcdGRlYnVnRGF0YShuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBjb21wbGV0ZWROYXZwb3BUYXNrID0gKG5hdnBvcCkgPT4ge1xuXHRcdGlmIChuYXZwb3AgJiYgbmF2cG9wLnBlbmRpbmcpIHtcblx0XHRcdC0tbmF2cG9wLnBlbmRpbmc7XG5cdFx0fVxuXHRcdGRlYnVnRGF0YShuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBzdGFydEFydGljbGVQcmV2aWV3ID0gKGFydGljbGUsIG9sZGlkLCBuYXZwb3ApID0+IHtcblx0XHRuYXZwb3AucmVkaXIgPSAwO1xuXHRcdGxvYWRQcmV2aWV3KGFydGljbGUsIG9sZGlkLCBuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBsb2FkUHJldmlldyA9IChhcnRpY2xlLCBvbGRpZCwgbmF2cG9wKSA9PiB7XG5cdFx0aWYgKCFuYXZwb3AucmVkaXIpIHtcblx0XHRcdG5hdnBvcC5vcmlnaW5hbEFydGljbGUgPSBhcnRpY2xlO1xuXHRcdH1cblx0XHRhcnRpY2xlLm9sZGlkID0gb2xkaWQ7XG5cdFx0bG9hZEFQSVByZXZpZXcoJ3JldmlzaW9uJywgYXJ0aWNsZSwgbmF2cG9wKTtcblx0fTtcblx0Y29uc3QgbG9hZFByZXZpZXdGcm9tUmVkaXIgPSAocmVkaXJNYXRjaCwgbmF2cG9wKSA9PiB7XG5cdFx0Ly8gcmVkaXJNYXRjaCBpcyBhIHJlZ2V4IG1hdGNoXG5cdFx0Y29uc3QgdGFyZ2V0ID0gbmV3IFRpdGxlKCkuZnJvbVdpa2lUZXh0KHJlZGlyTWF0Y2hbMl0pO1xuXHRcdC8vIG92ZXJ3cml0ZSAob3IgYWRkKSBhbmNob3IgZnJvbSBvcmlnaW5hbCB0YXJnZXRcblx0XHQvLyBtZWRpYXdpa2kgZG9lcyBvdmVyd3JpdGVcblx0XHRpZiAobmF2cG9wLmFydGljbGUuYW5jaG9yKSB7XG5cdFx0XHR0YXJnZXQuYW5jaG9yID0gbmF2cG9wLmFydGljbGUuYW5jaG9yO1xuXHRcdH1cblx0XHRuYXZwb3AucmVkaXIrKztcblx0XHRuYXZwb3AucmVkaXJUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0Y29uc3Qgd2FyblJlZGlyID0gcmVkaXJMaW5rKHRhcmdldCwgbmF2cG9wLmFydGljbGUpO1xuXHRcdHNldFBvcHVwSFRNTCh3YXJuUmVkaXIsICdwb3B1cFdhcm5SZWRpcicsIG5hdnBvcC5pZE51bWJlcik7XG5cdFx0bmF2cG9wLmFydGljbGUgPSB0YXJnZXQ7XG5cdFx0ZmlsbEVtcHR5U3BhbnMoe1xuXHRcdFx0cmVkaXI6IHRydWUsXG5cdFx0XHRyZWRpclRhcmdldDogdGFyZ2V0LFxuXHRcdFx0bmF2cG9wdXA6IG5hdnBvcCxcblx0XHR9KTtcblx0XHRyZXR1cm4gbG9hZFByZXZpZXcodGFyZ2V0LCBudWxsLCBuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBpbnNlcnRQcmV2aWV3ID0gKGRvd25sb2FkKSA9PiB7XG5cdFx0aWYgKCFkb3dubG9hZC5vd25lcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZWRpck1hdGNoID0gcGcucmUucmVkaXJlY3QuZXhlYyhkb3dubG9hZC5kYXRhKTtcblx0XHRpZiAoZG93bmxvYWQub3duZXIucmVkaXIgPT09IDAgJiYgcmVkaXJNYXRjaCkge1xuXHRcdFx0bG9hZFByZXZpZXdGcm9tUmVkaXIocmVkaXJNYXRjaCwgZG93bmxvYWQub3duZXIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZG93bmxvYWQub3duZXIudmlzaWJsZSB8fCAhZ2V0VmFsdWVPZigncG9wdXBMYXp5UHJldmlld3MnKSkge1xuXHRcdFx0aW5zZXJ0UHJldmlld05vdyhkb3dubG9hZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGlkID0gZG93bmxvYWQub3duZXIucmVkaXIgPyAnUFJFVklFV19SRURJUl9IT09LJyA6ICdQUkVWSUVXX0hPT0snO1xuXHRcdFx0ZG93bmxvYWQub3duZXIuYWRkSG9vayhcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdGluc2VydFByZXZpZXdOb3coZG93bmxvYWQpO1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQndW5oaWRlJyxcblx0XHRcdFx0J2FmdGVyJyxcblx0XHRcdFx0aWRcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBpbnNlcnRQcmV2aWV3Tm93ID0gKGRvd25sb2FkKSA9PiB7XG5cdFx0aWYgKCFkb3dubG9hZC5vd25lcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB3aWtpVGV4dCA9IGRvd25sb2FkLmRhdGE7XG5cdFx0Y29uc3QgbmF2cG9wID0gZG93bmxvYWQub3duZXI7XG5cdFx0Y29uc3QgYXJ0ID0gbmF2cG9wLnJlZGlyVGFyZ2V0IHx8IG5hdnBvcC5vcmlnaW5hbEFydGljbGU7XG5cdFx0bWFrZUZpeERhYnMod2lraVRleHQsIG5hdnBvcCk7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwU3VtbWFyeURhdGEnKSkge1xuXHRcdFx0Z2V0UGFnZUluZm8od2lraVRleHQsIGRvd25sb2FkKTtcblx0XHRcdHNldFBvcHVwVHJhaWxlcihnZXRQYWdlSW5mbyh3aWtpVGV4dCwgZG93bmxvYWQpLCBuYXZwb3AuaWROdW1iZXIpO1xuXHRcdH1cblx0XHRsZXQgaW1hZ2VQYWdlID0gJyc7XG5cdFx0aW1hZ2VQYWdlID0gYXJ0Lm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zSW1hZ2VJZCA/IGFydC50b1N0cmluZygpIDogZ2V0VmFsaWRJbWFnZUZyb21XaWtpVGV4dCh3aWtpVGV4dCk7XG5cdFx0aWYgKGltYWdlUGFnZSkge1xuXHRcdFx0bG9hZEltYWdlKFRpdGxlLmZyb21XaWtpVGV4dChpbWFnZVBhZ2UpLCBuYXZwb3ApO1xuXHRcdH1cblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBQcmV2aWV3cycpKSB7XG5cdFx0XHRpbnNlcnRBcnRpY2xlUHJldmlldyhkb3dubG9hZCwgYXJ0LCBuYXZwb3ApO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgaW5zZXJ0QXJ0aWNsZVByZXZpZXcgPSAoZG93bmxvYWQsIGFydCwgbmF2cG9wKSA9PiB7XG5cdFx0aWYgKGRvd25sb2FkICYmIHR5cGVvZiBkb3dubG9hZC5kYXRhID09PSB0eXBlb2YgJycpIHtcblx0XHRcdGlmIChhcnQubmFtZXNwYWNlSWQoKSA9PT0gcGcubnNUZW1wbGF0ZUlkICYmIGdldFZhbHVlT2YoJ3BvcHVwUHJldmlld1Jhd1RlbXBsYXRlcycpKSB7XG5cdFx0XHRcdC8vIEZJWE1FIGNvbXBhcmUvY29uc29saWRhdGUgd2l0aCBkaWZmIGVzY2FwaW5nIGNvZGUgZm9yIHdpa2l0ZXh0XG5cdFx0XHRcdGNvbnN0IGggPSBgPGhyPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcIj4ke2Rvd25sb2FkLmRhdGFcblx0XHRcdFx0XHQuZW50aWZ5KClcblx0XHRcdFx0XHQuc3BsaXQoU3RyaW5nLnJhd2BcXG5gKVxuXHRcdFx0XHRcdC5qb2luKFN0cmluZy5yYXdgPGJyPlxcbmApfTwvc3Bhbj5gO1xuXHRcdFx0XHRzZXRQb3B1cEhUTUwoaCwgJ3BvcHVwUHJldmlldycsIG5hdnBvcC5pZE51bWJlcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBwID0gcHJlcFByZXZpZXdtYWtlcihkb3dubG9hZC5kYXRhLCBhcnQsIG5hdnBvcCk7XG5cdFx0XHRcdHAuc2hvd1ByZXZpZXcoKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHByZXBQcmV2aWV3bWFrZXIgPSAoZGF0YSwgYXJ0aWNsZSwgbmF2cG9wKSA9PiB7XG5cdFx0Ly8gZGVhbCB3aXRoIHRyaWNrc3kgYW5jaG9yc1xuXHRcdGNvbnN0IGQgPSBhbmNob3JpemUoZGF0YSwgYXJ0aWNsZS5hbmNob3JTdHJpbmcoKSk7XG5cdFx0Y29uc3QgdXJsQmFzZSA9IGpvaW5QYXRoKFtwZy53aWtpLmFydGljbGViYXNlLCBhcnRpY2xlLnVybFN0cmluZygpXSk7XG5cdFx0Y29uc3QgcCA9IG5ldyBQcmV2aWV3bWFrZXIoZCwgdXJsQmFzZSwgbmF2cG9wKTtcblx0XHRyZXR1cm4gcDtcblx0fTtcblx0Ly8gVHJ5IHRvIGltaXRhdGUgdGhlIHdheSBtZWRpYXdpa2kgZ2VuZXJhdGVzIEhUTUwgYW5jaG9ycyBmcm9tIHNlY3Rpb24gdGl0bGVzXG5cdGNvbnN0IGFuY2hvcml6ZSA9IChkLCBhbmNoKSA9PiB7XG5cdFx0aWYgKCFhbmNoKSB7XG5cdFx0XHRyZXR1cm4gZDtcblx0XHR9XG5cdFx0Y29uc3QgYW5jaFJlID0gbmV3IFJlZ0V4cChcblx0XHRcdGAoPzo9K1xcXFxzKiR7bGl0ZXJhbGl6ZVJlZ2V4KGFuY2gpLnJlcGxhY2UoL1sgX10vZywgJ1tfIF0nKX1cXFxccyo9K3xcXFxce1xcXFx7XFxcXHMqJHtnZXRWYWx1ZU9mKFxuXHRcdFx0XHQncG9wdXBBbmNob3JSZWdleHAnXG5cdFx0XHQpfVxcXFxzKig/OlxcXFx8W158fV0qKSo/XFxcXHMqJHtsaXRlcmFsaXplUmVnZXgoYW5jaCl9XFxcXHMqKD86XFxcXHxbXn1dKik/fX0pYFxuXHRcdCk7XG5cdFx0Y29uc3QgbWF0Y2ggPSBkLm1hdGNoKGFuY2hSZSk7XG5cdFx0aWYgKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDAgJiYgbWF0Y2hbMF0pIHtcblx0XHRcdHJldHVybiBkLnNsaWNlKE1hdGgubWF4KDAsIGQuaW5kZXhPZihtYXRjaFswXSkpKTtcblx0XHR9XG5cdFx0Ly8gbm93IHRyeSB0byBkZWFsIHdpdGggPT09IGZvbyBbW2JhcnxiYXpdXSBib29tID09PSAtPiAjZm9vX2Jhel9ib29tXG5cdFx0Y29uc3QgbGluZXMgPSBkLnNwbGl0KCdcXG4nKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRsaW5lc1tpXSA9IGxpbmVzW2ldXG5cdFx0XHRcdC5yZXBsYWNlKC9cXFt7Mn0oW15cXF18XSo/XFx8KT8oLio/KV17Mn0vZywgJyQyJylcblx0XHRcdFx0LnJlcGxhY2UoLycnJyhbXiddKS9nLCAnJDEnKVxuXHRcdFx0XHQucmVwbGFjZSgvJycoW14nXSkvZywgJyQxJyk7XG5cdFx0XHRpZiAoYW5jaFJlLnRlc3QobGluZXNbaV0pKSB7XG5cdFx0XHRcdHJldHVybiBkXG5cdFx0XHRcdFx0LnNwbGl0KCdcXG4nKVxuXHRcdFx0XHRcdC5zbGljZShpKVxuXHRcdFx0XHRcdC5qb2luKCdcXG4nKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9eW149XSovLCAnJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkO1xuXHR9O1xuXHRjb25zdCBraWxsUG9wdXAgPSBmdW5jdGlvbiBraWxsUG9wdXAoKSB7XG5cdFx0cmVtb3ZlTW9kaWZpZXJLZXlMaXN0ZW5lcih0aGlzKTtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBTaG9ydGN1dEtleXMnKSkge1xuXHRcdFx0cm1Qb3B1cFNob3J0Y3V0cygpO1xuXHRcdH1cblx0XHRpZiAoIXBnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChwZy5jdXJyZW50LmxpbmsgJiYgcGcuY3VycmVudC5saW5rLm5hdnBvcHVwKSB7XG5cdFx0XHRwZy5jdXJyZW50LmxpbmsubmF2cG9wdXAuYmFuaXNoKCk7XG5cdFx0fVxuXHRcdHBnLmN1cnJlbnQubGluayA9IG51bGw7XG5cdFx0YWJvcnRBbGxEb3dubG9hZHMoKTtcblx0XHRpZiAocGcudGltZXIuY2hlY2tQb3B1cFBvc2l0aW9uKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHBnLnRpbWVyLmNoZWNrUG9wdXBQb3NpdGlvbik7XG5cdFx0XHRwZy50aW1lci5jaGVja1BvcHVwUG9zaXRpb24gPSBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTsgLy8gcHJlc2VydmUgZGVmYXVsdCBhY3Rpb25cblx0fTtcblx0Ly8gRU5ERklMRTogYWN0aW9ucy5qc1xuXHQvLyBTVEFSVEZJTEU6IGRvbWRyYWcuanNcblx0LyoqXG5cdCAqIEBmaWxlb3ZlcnZpZXdcblx0ICogVGhlIHtAc291cmNlIERyYWd9IG9iamVjdCwgd2hpY2ggZW5hYmxlcyBvYmplY3RzIHRvIGJlIGRyYWdnZWQgYXJvdW5kLlxuXHQgKiA8cHJlPlxuXHQgKlxuXHQgKiBkb20tZHJhZy5qc1xuXHQgKiAwOS4yNS4yMDAxXG5cdCAqIHd3dy55b3VuZ3B1cC5uZXRcblx0ICpcblx0ICogMTAuMjguMjAwMSAtIGZpeGVkIG1pbm9yIGJ1ZyB3aGVyZSBldmVudHNcblx0ICpcblx0ICogc29tZXRpbWVzIGZpcmVkIG9mZiB0aGUgaGFuZGxlLCBub3QgdGhlIHJvb3QuXG5cdCAqIFBhcmVkIGRvd24sIHNvbWUgaG9va3MgYWRkZWQgYnkgTHVwaW5cblx0ICogQ29weXJpZ2h0IEFhcm9uIEJvb2RtYW4uXG5cdCAqIFNheWluZyBzdHVwaWQgdGhpbmdzIGRhaWx5IHNpbmNlIE1hcmNoIDIwMDEuXG5cdCAqIDwvcHJlPlxuXHQgKi9cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgRHJhZyBvYmplY3QuIFRoaXMgaXMgdXNlZCB0byBtYWtlIHZhcmlvdXMgRE9NIGVsZW1lbnRzIGRyYWdnYWJsZS5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRjbGFzcyBEcmFnIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQ29uZGl0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0byBkcmFnLiBUaGlzIGZ1bmN0aW9uIHNob3VsZCB0YWtlIG9uZSBwYXJhbWV0ZXIsXG5cdFx0XHQgKiBhbiBFdmVudC4gIFRvIGRpc2FibGUgdGhpcywgc2V0IGl0IHRvIDxjb2RlPm51bGw8L2NvZGU+LlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIEZ1bmN0aW9uXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuc3RhcnRDb25kaXRpb24gPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBIb29rIHRvIGJlIHJ1biB3aGVuIHRoZSBkcmFnIGZpbmlzaGVzLiBUaGlzIGlzIHBhc3NlZCB0aGUgZmluYWwgY29vcmRpbmF0ZXMgb2YgdGhlXG5cdFx0XHQgKiBkcmFnZ2VkIG9iamVjdCAodHdvIGludGVnZXJzLCB4IGFuZCB5KS4gVG8gZGlzYWJsZXMgdGhpcywgc2V0IGl0IHRvIDxjb2RlPm51bGw8L2NvZGU+LlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIEZ1bmN0aW9uXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuZW5kSG9vayA9IG51bGw7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEdldHMgYW4gZXZlbnQgaW4gYSBjcm9zcy1icm93c2VyIG1hbm5lci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHN0YXRpYyBmaXhFKGUpIHtcblx0XHRcdGlmIChlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZSA9IHdpbmRvdy5ldmVudDtcblx0XHRcdH1cblx0XHRcdGlmIChlLmxheWVyWCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGUubGF5ZXJYID0gZS5vZmZzZXRYO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGUubGF5ZXJZID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZS5sYXllclkgPSBlLm9mZnNldFk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGlzZXMgdGhlIERyYWcgaW5zdGFuY2UgYnkgdGVsbGluZyBpdCB3aGljaCBvYmplY3QgeW91IHdhbnQgdG8gYmUgZHJhZ2dhYmxlLCBhbmQgd2hhdFxuXHRcdCAqIHlvdSB3YW50IHRvIGRyYWcgaXQgYnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0RPTUVsZW1lbnR9IG8gVGhlIFwiaGFuZGxlXCIgYnkgd2hpY2ggPGNvZGU+b1Jvb3Q8L2NvZGU+IGlzIGRyYWdnZWQuXG5cdFx0ICogQHBhcmFtIHtET01FbGVtZW50fSBvUm9vdCBUaGUgb2JqZWN0IHdoaWNoIG1vdmVzIHdoZW4gPGNvZGU+bzwvY29kZT4gaXMgZHJhZ2dlZCwgb3IgPGNvZGU+bzwvY29kZT4gaWYgb21pdHRlZC5cblx0XHQgKi9cblx0XHRpbml0KG8sIG9Sb290KSB7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHRoaXMub2JqID0gbztcblx0XHRcdG8ub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuXHRcdFx0XHRzZWxmLnN0YXJ0KGUpO1xuXHRcdFx0fTtcblx0XHRcdG8uZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdG8ucG9wdXBzX2RyYWdnYWJsZSA9IHRydWU7XG5cdFx0XHRvLmhtb2RlID0gdHJ1ZTtcblx0XHRcdG8udm1vZGUgPSB0cnVlO1xuXHRcdFx0by5yb290ID0gb1Jvb3QgfHwgbztcblx0XHRcdGlmIChOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlSW50KG8ucm9vdC5zdHlsZS5sZWZ0LCAxMCkpKSB7XG5cdFx0XHRcdG8ucm9vdC5zdHlsZS5sZWZ0ID0gJzBweCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUludChvLnJvb3Quc3R5bGUudG9wLCAxMCkpKSB7XG5cdFx0XHRcdG8ucm9vdC5zdHlsZS50b3AgPSAnMHB4Jztcblx0XHRcdH1cblx0XHRcdG8ucm9vdC5vbnRoaXNTdGFydCA9ICgpID0+IHt9O1xuXHRcdFx0by5yb290Lm9udGhpc0VuZCA9ICgpID0+IHt9O1xuXHRcdFx0by5yb290Lm9udGhpcyA9ICgpID0+IHt9O1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTdGFydHMgdGhlIGRyYWcuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0XHQgKi9cblx0XHRzdGFydChlKSB7XG5cdFx0XHRjb25zdCBvID0gdGhpcy5vYmo7IC8vID0gdGhpcztcblx0XHRcdGUgPSBEcmFnLmZpeEUoZSk7XG5cdFx0XHRpZiAodGhpcy5zdGFydENvbmRpdGlvbiAmJiAhdGhpcy5zdGFydENvbmRpdGlvbihlKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB5ID0gTnVtYmVyLnBhcnNlSW50KG8udm1vZGUgPyBvLnJvb3Quc3R5bGUudG9wIDogby5yb290LnN0eWxlLmJvdHRvbSwgMTApO1xuXHRcdFx0Y29uc3QgeCA9IE51bWJlci5wYXJzZUludChvLmhtb2RlID8gby5yb290LnN0eWxlLmxlZnQgOiBvLnJvb3Quc3R5bGUucmlnaHQsIDEwKTtcblx0XHRcdG8ucm9vdC5vbnRoaXNTdGFydCh4LCB5KTtcblx0XHRcdG8ubGFzdE1vdXNlWCA9IGUuY2xpZW50WDtcblx0XHRcdG8ubGFzdE1vdXNlWSA9IGUuY2xpZW50WTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0by5vbm1vdXNlbW92ZURlZmF1bHQgPSBkb2N1bWVudC5vbm1vdXNlbW92ZTtcblx0XHRcdG8uZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSAoZSkgPT4ge1xuXHRcdFx0XHRzZWxmLmRyYWcoZSk7XG5cdFx0XHR9O1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZXVwID0gKGUpID0+IHtcblx0XHRcdFx0c2VsZi5lbmQoZSk7XG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBEb2VzIHRoZSBkcmFnLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtFdmVudH0gZVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0ZHJhZyhlKSB7XG5cdFx0XHRlID0gRHJhZy5maXhFKGUpO1xuXHRcdFx0Y29uc3QgbyA9IHRoaXMub2JqO1xuXHRcdFx0Y29uc3QgZXkgPSBlLmNsaWVudFk7XG5cdFx0XHRjb25zdCBleCA9IGUuY2xpZW50WDtcblx0XHRcdGNvbnN0IHkgPSBOdW1iZXIucGFyc2VJbnQoby52bW9kZSA/IG8ucm9vdC5zdHlsZS50b3AgOiBvLnJvb3Quc3R5bGUuYm90dG9tLCAxMCk7XG5cdFx0XHRjb25zdCB4ID0gTnVtYmVyLnBhcnNlSW50KG8uaG1vZGUgPyBvLnJvb3Quc3R5bGUubGVmdCA6IG8ucm9vdC5zdHlsZS5yaWdodCwgMTApO1xuXHRcdFx0Y29uc3QgbnggPSB4ICsgKGV4IC0gby5sYXN0TW91c2VYKSAqIChvLmhtb2RlID8gMSA6IC0xKTtcblx0XHRcdGNvbnN0IG55ID0geSArIChleSAtIG8ubGFzdE1vdXNlWSkgKiAoby52bW9kZSA/IDEgOiAtMSk7XG5cdFx0XHR0aGlzLm9iai5yb290LnN0eWxlW28uaG1vZGUgPyAnbGVmdCcgOiAncmlnaHQnXSA9IGAke254fXB4YDtcblx0XHRcdHRoaXMub2JqLnJvb3Quc3R5bGVbby52bW9kZSA/ICd0b3AnIDogJ2JvdHRvbSddID0gYCR7bnl9cHhgO1xuXHRcdFx0dGhpcy5vYmoubGFzdE1vdXNlWCA9IGV4O1xuXHRcdFx0dGhpcy5vYmoubGFzdE1vdXNlWSA9IGV5O1xuXHRcdFx0dGhpcy5vYmoucm9vdC5vbnRoaXMobngsIG55KTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogRW5kcyB0aGUgZHJhZy5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0ZW5kKCkge1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLm9iai5vbm1vdXNlbW92ZURlZmF1bHQ7XG5cdFx0XHRkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuXHRcdFx0dGhpcy5vYmouZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdGlmICh0aGlzLmVuZEhvb2spIHtcblx0XHRcdFx0dGhpcy5lbmRIb29rKFxuXHRcdFx0XHRcdE51bWJlci5wYXJzZUludCh0aGlzLm9iai5yb290LnN0eWxlW3RoaXMub2JqLmhtb2RlID8gJ2xlZnQnIDogJ3JpZ2h0J10sIDEwKSxcblx0XHRcdFx0XHROdW1iZXIucGFyc2VJbnQodGhpcy5vYmoucm9vdC5zdHlsZVt0aGlzLm9iai52bW9kZSA/ICd0b3AnIDogJ2JvdHRvbSddLCAxMClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gRU5ERklMRTogZG9tZHJhZy5qc1xuXHQvLyBTVEFSVEZJTEU6IHN0cnVjdHVyZXMuanNcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbCA9IHt9O1xuXHRwZy5zdHJ1Y3R1cmVzLm9yaWdpbmFsLnBvcHVwTGF5b3V0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHQncG9wdXBFcnJvcicsXG5cdFx0XHQncG9wdXBJbWFnZScsXG5cdFx0XHQncG9wdXBUb3BMaW5rcycsXG5cdFx0XHQncG9wdXBUaXRsZScsXG5cdFx0XHQncG9wdXBVc2VyRGF0YScsXG5cdFx0XHQncG9wdXBEYXRhJyxcblx0XHRcdCdwb3B1cE90aGVyTGlua3MnLFxuXHRcdFx0J3BvcHVwUmVkaXInLFxuXHRcdFx0Wydwb3B1cFdhcm5SZWRpcicsICdwb3B1cFJlZGlyVG9wTGlua3MnLCAncG9wdXBSZWRpclRpdGxlJywgJ3BvcHVwUmVkaXJEYXRhJywgJ3BvcHVwUmVkaXJPdGhlckxpbmtzJ10sXG5cdFx0XHQncG9wdXBNaXNjVG9vbHMnLFxuXHRcdFx0Wydwb3B1cFJlZGxpbmsnXSxcblx0XHRcdCdwb3B1cFByZVByZXZpZXdTZXAnLFxuXHRcdFx0J3BvcHVwUHJldmlldycsXG5cdFx0XHQncG9wdXBTZWNvbmRQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cFByZXZpZXdNb3JlJyxcblx0XHRcdCdwb3B1cFBvc3RQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cEZpeERhYicsXG5cdFx0XTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFJlZGlyU3BhbnMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdCdwb3B1cFJlZGlyJyxcblx0XHRcdCdwb3B1cFdhcm5SZWRpcicsXG5cdFx0XHQncG9wdXBSZWRpclRvcExpbmtzJyxcblx0XHRcdCdwb3B1cFJlZGlyVGl0bGUnLFxuXHRcdFx0J3BvcHVwUmVkaXJEYXRhJyxcblx0XHRcdCdwb3B1cFJlZGlyT3RoZXJMaW5rcycsXG5cdFx0XTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFRpdGxlID0gKHgpID0+IHtcblx0XHRsb2coJ2RlZmF1bHRzdHJ1Y3R1cmUucG9wdXBUaXRsZScpO1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBOYXZMaW5rcycpKSB7XG5cdFx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTCgnPGI+PDxtYWlubGluaz4+PC9iPicsIHguYXJ0aWNsZSwgeC5wYXJhbXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBUb3BMaW5rcyA9ICh4KSA9PiB7XG5cdFx0bG9nKCdkZWZhdWx0c3RydWN0dXJlLnBvcHVwVG9wTGlua3MnKTtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBOYXZMaW5rcycpKSB7XG5cdFx0XHRyZXR1cm4gbmF2TGlua3NIVE1MKHguYXJ0aWNsZSwgeC5oaW50LCB4LnBhcmFtcyk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cEltYWdlID0gKHgpID0+IHtcblx0XHRsb2coYG9yaWdpbmFsLnBvcHVwSW1hZ2UsIHguYXJ0aWNsZT0ke3guYXJ0aWNsZX0sIHgubmF2cG9wLmlkTnVtYmVyPSR7eC5uYXZwb3AuaWROdW1iZXJ9YCk7XG5cdFx0cmV0dXJuIGltYWdlSFRNTCh4LmFydGljbGUsIHgubmF2cG9wLmlkTnVtYmVyKTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFJlZGlyVGl0bGUgPSBwZy5zdHJ1Y3R1cmVzLm9yaWdpbmFsLnBvcHVwVGl0bGU7XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBSZWRpclRvcExpbmtzID0gcGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFRvcExpbmtzO1xuXHRjb25zdCBjb3B5U3RydWN0dXJlID0gKG9sZFN0cnVjdHVyZSwgbmV3U3RydWN0dXJlKSA9PiB7XG5cdFx0cGcuc3RydWN0dXJlc1tuZXdTdHJ1Y3R1cmVdID0ge307XG5cdFx0Zm9yIChjb25zdCBwcm9wIGluIHBnLnN0cnVjdHVyZXNbb2xkU3RydWN0dXJlXSkge1xuXHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHBnLnN0cnVjdHVyZXNbb2xkU3RydWN0dXJlXSwgcHJvcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRwZy5zdHJ1Y3R1cmVzW25ld1N0cnVjdHVyZV1bcHJvcF0gPSBwZy5zdHJ1Y3R1cmVzW29sZFN0cnVjdHVyZV1bcHJvcF07XG5cdFx0fVxuXHR9O1xuXHRjb3B5U3RydWN0dXJlKCdvcmlnaW5hbCcsICdub3N0YWxnaWEnKTtcblx0cGcuc3RydWN0dXJlcy5ub3N0YWxnaWEucG9wdXBUb3BMaW5rcyA9ICh4KSA9PiB7XG5cdFx0bGV0IHN0ciA9ICcnO1xuXHRcdHN0ciArPSAnPGI+PDxtYWlubGlua3xzaG9ydGN1dD0gPj48L2I+Jztcblx0XHQvLyB1c2VyIGxpbmtzXG5cdFx0Ly8gY29udHJpYnMgLSBsb2cgLSBjb3VudCAtIGVtYWlsIC0gYmxvY2tcblx0XHQvLyBjb3VudCBvbmx5IGlmIGFwcGxpY2FibGU7IGJsb2NrIG9ubHkgaWYgcG9wdXBBZG1pbkxpbmtzXG5cdFx0c3RyICs9ICdpZih1c2VyKXs8YnI+PDxjb250cmlic3xzaG9ydGN1dD1jPj4nO1xuXHRcdHN0ciArPSAnaWYod2lraW1lZGlhKXsqPDxjb3VudHxzaG9ydGN1dD0jPj59Jztcblx0XHRzdHIgKz0gJ2lmKGlwdXNlcil7fWVsc2V7Kjw8ZW1haWx8c2hvcnRjdXQ9RT4+fWlmKGFkbWluKXsqPDxibG9ja3xzaG9ydGN1dD1iPj59fSc7XG5cdFx0Ly8gZWRpdGluZyBsaW5rc1xuXHRcdC8vIHRhbGtwYWdlICAgLT4gZWRpdHxuZXcgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSBhcnRpY2xlfGVkaXRcblx0XHQvLyBvdGhlciBwYWdlIC0+IGVkaXQgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSB0YWxrfGVkaXR8bmV3XG5cdFx0Y29uc3QgZWRpdHN0ciA9ICc8PGVkaXR8c2hvcnRjdXQ9ZT4+Jztcblx0XHRjb25zdCBlZGl0T2xkaWRTdHIgPSBgaWYob2xkaWQpezw8ZWRpdE9sZHxzaG9ydGN1dD1lPj58PDxyZXZlcnR8c2hvcnRjdXQ9dnxydj4+fDw8ZWRpdHxjdXI+Pn1lbHNleyR7ZWRpdHN0cn19YDtcblx0XHRjb25zdCBoaXN0b3J5c3RyID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1oPj4nO1xuXHRcdGNvbnN0IHdhdGNoc3RyID0gJzw8dW53YXRjaHx1bndhdGNoU2hvcnQ+Pnw8PHdhdGNofHNob3J0Y3V0PXd8d2F0Y2hUaGluZ3k+Pic7XG5cdFx0c3RyICs9XG5cdFx0XHRgPGJyPmlmKHRhbGspeyR7ZWRpdE9sZGlkU3RyfXw8PG5ld3xzaG9ydGN1dD0rPj5gICtcblx0XHRcdGAqJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PGFydGljbGV8c2hvcnRjdXQ9YT4+PC9iPnw8PGVkaXRBcnRpY2xlfGVkaXQ+PicgK1xuXHRcdFx0YH1lbHNleyR7XG5cdFx0XHRcdC8vIG5vdCBhIHRhbGsgcGFnZVxuXHRcdFx0XHRlZGl0T2xkaWRTdHJcblx0XHRcdH0qJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PHRhbGt8c2hvcnRjdXQ9dD4+PC9iPnw8PGVkaXRUYWxrfGVkaXQ+Pnw8PG5ld1RhbGt8c2hvcnRjdXQ9K3xuZXc+Pn0nO1xuXHRcdC8vIG1pc2MgbGlua3Ncblx0XHRzdHIgKz0gJzxicj48PHdoYXRMaW5rc0hlcmV8c2hvcnRjdXQ9bD4+Kjw8cmVsYXRlZENoYW5nZXN8c2hvcnRjdXQ9cj4+Jztcblx0XHRzdHIgKz0gJ2lmKGFkbWluKXs8YnI+fWVsc2V7Kn08PG1vdmV8c2hvcnRjdXQ9bT4+Jztcblx0XHQvLyBhZG1pbiBsaW5rc1xuXHRcdHN0ciArPVxuXHRcdFx0J2lmKGFkbWluKXsqPDx1bnByb3RlY3R8dW5wcm90ZWN0U2hvcnQ+Pnw8PHByb3RlY3R8c2hvcnRjdXQ9cD4+KicgK1xuXHRcdFx0Jzw8dW5kZWxldGV8dW5kZWxldGVTaG9ydD4+fDw8ZGVsZXRlfHNob3J0Y3V0PWQ+Pn0nO1xuXHRcdHJldHVybiBuYXZsaW5rU3RyaW5nVG9IVE1MKHN0ciwgeC5hcnRpY2xlLCB4LnBhcmFtcyk7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubm9zdGFsZ2lhLnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMubm9zdGFsZ2lhLnBvcHVwVG9wTGlua3M7XG5cdC8qKiAtLSBmYW5jeSAtLSAqL1xuXHRjb3B5U3RydWN0dXJlKCdvcmlnaW5hbCcsICdmYW5jeScpO1xuXHRwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwVGl0bGUgPSAoeCkgPT4ge1xuXHRcdHJldHVybiBuYXZsaW5rU3RyaW5nVG9IVE1MKCc8Zm9udCBzaXplPSswPjw8bWFpbmxpbms+PjwvZm9udD4nLCB4LmFydGljbGUsIHgucGFyYW1zKTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFRvcExpbmtzID0gKHgpID0+IHtcblx0XHRjb25zdCBoaXN0ID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1ofGhpc3Q+Pnw8PGxhc3RFZGl0fHNob3J0Y3V0PS98bGFzdD4+fDw8ZWRpdG9yc3xzaG9ydGN1dD1FfGVkcz4+Jztcblx0XHRjb25zdCB3YXRjaCA9ICc8PHVud2F0Y2h8dW53YXRjaFNob3J0Pj58PDx3YXRjaHxzaG9ydGN1dD13fHdhdGNoVGhpbmd5Pj4nO1xuXHRcdGNvbnN0IG1vdmUgPSAnPDxtb3ZlfHNob3J0Y3V0PW18bW92ZT4+Jztcblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChcblx0XHRcdCdpZih0YWxrKXsnICtcblx0XHRcdFx0YDw8ZWRpdHxzaG9ydGN1dD1lPj58PDxuZXd8c2hvcnRjdXQ9K3wrPj4qJHtoaXN0fSpgICtcblx0XHRcdFx0Jzw8YXJ0aWNsZXxzaG9ydGN1dD1hPj58PDxlZGl0QXJ0aWNsZXxlZGl0Pj4nICtcblx0XHRcdFx0YCoke3dhdGNofSoke21vdmV9fWVsc2V7PDxlZGl0fHNob3J0Y3V0PWU+Pioke2hpc3R9Kjw8dGFsa3xzaG9ydGN1dD10fD4+fDw8ZWRpdFRhbGt8ZWRpdD4+fDw8bmV3VGFsa3xzaG9ydGN1dD0rfG5ldz4+YCArXG5cdFx0XHRcdGAqJHt3YXRjaH0qJHttb3ZlfX08YnI+YCxcblx0XHRcdHguYXJ0aWNsZSxcblx0XHRcdHgucGFyYW1zXG5cdFx0KTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cE90aGVyTGlua3MgPSAoeCkgPT4ge1xuXHRcdGNvbnN0IGFkbWluID1cblx0XHRcdCc8PHVucHJvdGVjdHx1bnByb3RlY3RTaG9ydD4+fDw8cHJvdGVjdHxzaG9ydGN1dD1wPj4qPDx1bmRlbGV0ZXx1bmRlbGV0ZVNob3J0Pj58PDxkZWxldGV8c2hvcnRjdXQ9ZHxkZWw+Pic7XG5cdFx0bGV0IHVzZXIgPSAnPDxjb250cmlic3xzaG9ydGN1dD1jPj5pZih3aWtpbWVkaWEpe3w8PGNvdW50fHNob3J0Y3V0PSN8Iz4+fSc7XG5cdFx0dXNlciArPSBgaWYoaXB1c2VyKXt8PDxhcmluPj59ZWxzZXsqPDxlbWFpbHxzaG9ydGN1dD1FfCR7cG9wdXBTdHJpbmcoXG5cdFx0XHQnZW1haWwnXG5cdFx0KX0+Pn1pZihhZG1pbil7Kjw8YmxvY2t8c2hvcnRjdXQ9Yj4+fWA7XG5cdFx0Y29uc3Qgbm9ybWFsID0gJzw8d2hhdExpbmtzSGVyZXxzaG9ydGN1dD1sfGxpbmtzIGhlcmU+Pio8PHJlbGF0ZWRDaGFuZ2VzfHNob3J0Y3V0PXJ8cmVsYXRlZD4+Jztcblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChcblx0XHRcdGA8YnI+aWYodXNlcil7JHt1c2VyfSp9aWYoYWRtaW4peyR7YWRtaW59aWYodXNlcil7PGJyPn1lbHNleyp9fSR7bm9ybWFsfWAsXG5cdFx0XHR4LmFydGljbGUsXG5cdFx0XHR4LnBhcmFtc1xuXHRcdCk7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBSZWRpclRpdGxlID0gcGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFRpdGxlO1xuXHRwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBUb3BMaW5rcztcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFJlZGlyT3RoZXJMaW5rcyA9IHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBPdGhlckxpbmtzO1xuXHQvKiogLS0gZmFuY3kyIC0tICovXG5cdC8vIGhhY2sgZm9yIE1hY0d5dmVyTWFnaWNcblx0Y29weVN0cnVjdHVyZSgnZmFuY3knLCAnZmFuY3kyJyk7XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kyLnBvcHVwVG9wTGlua3MgPSAvLyBoYWNrIG91dCB0aGUgPGJyPiBhdCB0aGUgZW5kIGFuZCBwdXQgb25lIGF0IHRoZSBiZWdpbm5pbmdcblx0XHQoeCkgPT4ge1xuXHRcdFx0cmV0dXJuIGA8YnI+JHtwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwVG9wTGlua3MoeCkucmVwbGFjZSgvPGJyPiQvaSwgJycpfWA7XG5cdFx0fTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeTIucG9wdXBMYXlvdXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdCdwb3B1cEVycm9yJyxcblx0XHRcdCdwb3B1cEltYWdlJyxcblx0XHRcdCdwb3B1cFRpdGxlJyxcblx0XHRcdCdwb3B1cFVzZXJEYXRhJyxcblx0XHRcdCdwb3B1cERhdGEnLFxuXHRcdFx0J3BvcHVwVG9wTGlua3MnLFxuXHRcdFx0J3BvcHVwT3RoZXJMaW5rcycsXG5cdFx0XHQncG9wdXBSZWRpcicsXG5cdFx0XHRbJ3BvcHVwV2FyblJlZGlyJywgJ3BvcHVwUmVkaXJUb3BMaW5rcycsICdwb3B1cFJlZGlyVGl0bGUnLCAncG9wdXBSZWRpckRhdGEnLCAncG9wdXBSZWRpck90aGVyTGlua3MnXSxcblx0XHRcdCdwb3B1cE1pc2NUb29scycsXG5cdFx0XHRbJ3BvcHVwUmVkbGluayddLFxuXHRcdFx0J3BvcHVwUHJlUHJldmlld1NlcCcsXG5cdFx0XHQncG9wdXBQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cFNlY29uZFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwUHJldmlld01vcmUnLFxuXHRcdFx0J3BvcHVwUG9zdFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwRml4RGFiJyxcblx0XHRdO1xuXHR9O1xuXHQvKiogLS0gbWVudXMgLS0gKi9cblx0Y29weVN0cnVjdHVyZSgnb3JpZ2luYWwnLCAnbWVudXMnKTtcblx0cGcuc3RydWN0dXJlcy5tZW51cy5wb3B1cExheW91dCA9ICgpID0+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0J3BvcHVwRXJyb3InLFxuXHRcdFx0J3BvcHVwSW1hZ2UnLFxuXHRcdFx0J3BvcHVwVG9wTGlua3MnLFxuXHRcdFx0J3BvcHVwVGl0bGUnLFxuXHRcdFx0J3BvcHVwT3RoZXJMaW5rcycsXG5cdFx0XHQncG9wdXBSZWRpcicsXG5cdFx0XHRbJ3BvcHVwV2FyblJlZGlyJywgJ3BvcHVwUmVkaXJUb3BMaW5rcycsICdwb3B1cFJlZGlyVGl0bGUnLCAncG9wdXBSZWRpckRhdGEnLCAncG9wdXBSZWRpck90aGVyTGlua3MnXSxcblx0XHRcdCdwb3B1cFVzZXJEYXRhJyxcblx0XHRcdCdwb3B1cERhdGEnLFxuXHRcdFx0J3BvcHVwTWlzY1Rvb2xzJyxcblx0XHRcdFsncG9wdXBSZWRsaW5rJ10sXG5cdFx0XHQncG9wdXBQcmVQcmV2aWV3U2VwJyxcblx0XHRcdCdwb3B1cFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwU2Vjb25kUHJldmlldycsXG5cdFx0XHQncG9wdXBQcmV2aWV3TW9yZScsXG5cdFx0XHQncG9wdXBQb3N0UHJldmlldycsXG5cdFx0XHQncG9wdXBGaXhEYWInLFxuXHRcdF07XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBUb3BMaW5rcyA9ICh4LCBzaG9ydGVyKSA9PiB7XG5cdFx0Ly8gRklYTUUgbWF5YmUgdGhpcyBzdHVmZiBzaG91bGQgYmUgY2FjaGVkXG5cdFx0Y29uc3QgcyA9IFtdO1xuXHRcdGNvbnN0IGRyb3BkaXYgPSAnPGRpdiBjbGFzcz1cInBvcHVwX2Ryb3BcIj4nO1xuXHRcdGNvbnN0IGVuZGRpdiA9ICc8L2Rpdj4nO1xuXHRcdGxldCBoaXN0ID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1oPj4nO1xuXHRcdGlmICghc2hvcnRlcikge1xuXHRcdFx0aGlzdCA9IGA8bWVudXJvdz4ke2hpc3R9fDw8aGlzdG9yeWZlZWR8cnNzPj58PDxlZGl0b3JzfHNob3J0Y3V0PUU+PjwvbWVudXJvdz5gO1xuXHRcdH1cblx0XHRjb25zdCBsYXN0ZWRpdCA9ICc8PGxhc3RFZGl0fHNob3J0Y3V0PS98c2hvdyBsYXN0IGVkaXQ+Pic7XG5cdFx0Y29uc3QgdGhhbmsgPSAnaWYoZGlmZil7PDx0aGFua3xzZW5kIHRoYW5rcz4+fSc7XG5cdFx0Y29uc3QganNIaXN0b3J5ID0gJzw8bGFzdENvbnRyaWJ8bGFzdCBzZXQgb2YgZWRpdHM+Pjw8c2luY2VNZXxjaGFuZ2VzIHNpbmNlIG1pbmU+Pic7XG5cdFx0Y29uc3QgbGlua3NoZXJlID0gJzw8d2hhdExpbmtzSGVyZXxzaG9ydGN1dD1sfHdoYXQgbGlua3MgaGVyZT4+Jztcblx0XHRjb25zdCByZWxhdGVkID0gJzw8cmVsYXRlZENoYW5nZXN8c2hvcnRjdXQ9cnxyZWxhdGVkIGNoYW5nZXM+Pic7XG5cdFx0Y29uc3Qgc2VhcmNoID0gJzxtZW51cm93Pjw8c2VhcmNofHNob3J0Y3V0PXM+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IHdhdGNoID0gJzxtZW51cm93Pjw8dW53YXRjaHx1bndhdGNoU2hvcnQ+Pnw8PHdhdGNofHNob3J0Y3V0PXd8d2F0Y2hUaGluZ3k+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IHByb3RlY3QgPSAnPG1lbnVyb3c+PDx1bnByb3RlY3R8dW5wcm90ZWN0U2hvcnQ+Pnw8PHByb3RlY3R8c2hvcnRjdXQ9cD4+fDw8cHJvdGVjdGxvZ3xsb2c+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IGRlbCA9ICc8bWVudXJvdz48PHVuZGVsZXRlfHVuZGVsZXRlU2hvcnQ+Pnw8PGRlbGV0ZXxzaG9ydGN1dD1kPj58PDxkZWxldGVsb2d8bG9nPj48L21lbnVyb3c+Jztcblx0XHRjb25zdCBtb3ZlID0gJzw8bW92ZXxzaG9ydGN1dD1tfG1vdmUgcGFnZT4+Jztcblx0XHRjb25zdCBudWxsUHVyZ2UgPSAnPG1lbnVyb3c+PDxudWxsRWRpdHxzaG9ydGN1dD1ufG51bGwgZWRpdD4+fDw8cHVyZ2V8c2hvcnRjdXQ9UD4+PC9tZW51cm93Pic7XG5cdFx0Y29uc3Qgdmlld09wdGlvbnMgPSAnPG1lbnVyb3c+PDx2aWV3fHNob3J0Y3V0PXY+Pnw8PHJlbmRlcnxzaG9ydGN1dD1TPj58PDxyYXc+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IGVkaXRSb3cgPVxuXHRcdFx0J2lmKG9sZGlkKXsnICtcblx0XHRcdCc8bWVudXJvdz48PGVkaXR8c2hvcnRjdXQ9ZT4+fDw8ZWRpdE9sZHxzaG9ydGN1dD1lfHRoaXMmbmJzcDtyZXZpc2lvbj4+PC9tZW51cm93PicgK1xuXHRcdFx0JzxtZW51cm93Pjw8cmV2ZXJ0fHNob3J0Y3V0PXY+Pnw8PHVuZG8+PjwvbWVudXJvdz4nICtcblx0XHRcdCd9ZWxzZXs8PGVkaXR8c2hvcnRjdXQ9ZT4+fSc7XG5cdFx0Y29uc3QgbWFya1BhdHJvbGxlZCA9ICdpZihyY2lkKXs8PG1hcmtwYXRyb2xsZWR8bWFyayBwYXRyb2xsZWQ+Pn0nO1xuXHRcdGNvbnN0IG5ld1RvcGljID0gJ2lmKHRhbGspezw8bmV3fHNob3J0Y3V0PSt8bmV3IHRvcGljPj59Jztcblx0XHRjb25zdCBwcm90ZWN0RGVsZXRlID0gYGlmKGFkbWluKXske3Byb3RlY3R9JHtkZWx9fWA7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwQWN0aW9uc01lbnUnKSkge1xuXHRcdFx0cy5wdXNoKGA8PG1haW5saW5rPj4qJHtkcm9wZGl2fSR7bWVudVRpdGxlKCdhY3Rpb25zJyl9YCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHMucHVzaChgJHtkcm9wZGl2fTw8bWFpbmxpbms+PmApO1xuXHRcdH1cblx0XHRzLnB1c2goJzxtZW51PicsIGVkaXRSb3cgKyBtYXJrUGF0cm9sbGVkICsgbmV3VG9waWMgKyBoaXN0ICsgbGFzdGVkaXQgKyB0aGFuayk7XG5cdFx0aWYgKCFzaG9ydGVyKSB7XG5cdFx0XHRzLnB1c2goanNIaXN0b3J5KTtcblx0XHR9XG5cdFx0cy5wdXNoKG1vdmUgKyBsaW5rc2hlcmUgKyByZWxhdGVkKTtcblx0XHRpZiAoIXNob3J0ZXIpIHtcblx0XHRcdHMucHVzaChudWxsUHVyZ2UgKyBzZWFyY2gpO1xuXHRcdH1cblx0XHRpZiAoIXNob3J0ZXIpIHtcblx0XHRcdHMucHVzaCh2aWV3T3B0aW9ucyk7XG5cdFx0fVxuXHRcdHMucHVzaChcblx0XHRcdGA8aHI+JHt3YXRjaH0ke3Byb3RlY3REZWxldGV9YCxcblx0XHRcdCc8aHI+JyArXG5cdFx0XHRcdCdpZih0YWxrKXs8PGFydGljbGV8c2hvcnRjdXQ9YXx2aWV3IGFydGljbGU+Pjw8ZWRpdEFydGljbGV8ZWRpdCBhcnRpY2xlPj59JyArXG5cdFx0XHRcdCdlbHNlezw8dGFsa3xzaG9ydGN1dD10fHRhbGsgcGFnZT4+PDxlZGl0VGFsa3xlZGl0IHRhbGs+PicgK1xuXHRcdFx0XHRgPDxuZXdUYWxrfHNob3J0Y3V0PSt8bmV3IHRvcGljPj59PC9tZW51PiR7ZW5kZGl2fWBcblx0XHQpO1xuXHRcdC8vIHVzZXIgbWVudSBzdGFydHMgaGVyZVxuXHRcdGNvbnN0IGVtYWlsID0gJzw8ZW1haWx8c2hvcnRjdXQ9RXxlbWFpbCB1c2VyPj4nO1xuXHRcdGNvbnN0IGNvbnRyaWJzID1cblx0XHRcdCdpZih3aWtpbWVkaWEpezxtZW51cm93Pn08PGNvbnRyaWJzfHNob3J0Y3V0PWN8Y29udHJpYnV0aW9ucz4+aWYod2lraW1lZGlhKXs8L21lbnVyb3c+fScgK1xuXHRcdFx0J2lmKGFkbWluKXs8bWVudXJvdz48PGRlbGV0ZWRDb250cmlicz4+PC9tZW51cm93Pn0nO1xuXHRcdHMucHVzaChcblx0XHRcdGBpZih1c2VyKXsqJHtkcm9wZGl2fSR7bWVudVRpdGxlKCd1c2VyJyl9YCxcblx0XHRcdCc8bWVudT4nLFxuXHRcdFx0JzxtZW51cm93Pjw8dXNlclBhZ2V8c2hvcnRjdXQ9dXx1c2VyJm5ic3A7cGFnZT4+fDw8dXNlclNwYWNlfHNwYWNlPj48L21lbnVyb3c+Jyxcblx0XHRcdCc8PHVzZXJUYWxrfHNob3J0Y3V0PXR8dXNlciB0YWxrPj48PGVkaXRVc2VyVGFsa3xlZGl0IHVzZXIgdGFsaz4+JyArXG5cdFx0XHRcdCc8PG5ld1VzZXJUYWxrfHNob3J0Y3V0PSt8bGVhdmUgY29tbWVudD4+J1xuXHRcdCk7XG5cdFx0aWYgKHNob3J0ZXIpIHtcblx0XHRcdHMucHVzaChgaWYoaXB1c2VyKXt9ZWxzZXske2VtYWlsfX1gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cy5wdXNoKGBpZihpcHVzZXIpezw8YXJpbj4+fWVsc2V7JHtlbWFpbH19YCk7XG5cdFx0fVxuXHRcdHMucHVzaChcblx0XHRcdGA8aHI+JHtjb250cmlic308PHVzZXJsb2d8c2hvcnRjdXQ9THx1c2VyIGxvZz4+YCxcblx0XHRcdCdpZih3aWtpbWVkaWEpezw8Y291bnR8c2hvcnRjdXQ9I3xlZGl0IGNvdW50ZXI+Pn0nLFxuXHRcdFx0J2lmKGFkbWluKXs8bWVudXJvdz48PHVuYmxvY2t8dW5ibG9ja1Nob3J0Pj58PDxibG9ja3xzaG9ydGN1dD1ifGJsb2NrIHVzZXI+PjwvbWVudXJvdz59Jyxcblx0XHRcdCc8PGJsb2NrbG9nfHNob3J0Y3V0PUJ8YmxvY2sgbG9nPj4nLFxuXHRcdFx0YDwvbWVudT4ke2VuZGRpdn19YFxuXHRcdCk7XG5cdFx0Ly8gcG9wdXBzIG1lbnUgc3RhcnRzIGhlcmVcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBTZXR1cE1lbnUnKSAmJiAheC5uYXZwb3AuaGFzUG9wdXBNZW51IC8qIEZJWE1FOiBoYWNrICovKSB7XG5cdFx0XHR4Lm5hdnBvcC5oYXNQb3B1cE1lbnUgPSB0cnVlO1xuXHRcdFx0cy5wdXNoKFxuXHRcdFx0XHRgKiR7ZHJvcGRpdn0ke21lbnVUaXRsZSgncG9wdXBzTWVudScpfTxtZW51PmAsXG5cdFx0XHRcdCc8PHRvZ2dsZVByZXZpZXdzfHRvZ2dsZSBwcmV2aWV3cz4+Jyxcblx0XHRcdFx0Jzw8cHVyZ2VQb3B1cHN8cmVzZXQ+PicsXG5cdFx0XHRcdCc8PGRpc2FibGVQb3B1cHN8ZGlzYWJsZT4+Jyxcblx0XHRcdFx0YDwvbWVudT4ke2VuZGRpdn1gXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChzLmpvaW4oJycpLCB4LmFydGljbGUsIHgucGFyYW1zKTtcblx0fTtcblx0Y29uc3QgbWVudVRpdGxlID0gKHMpID0+IHtcblx0XHRyZXR1cm4gYDxhIGhyZWY9XCIjXCIgbm9Qb3B1cD0xPiR7cG9wdXBTdHJpbmcocyl9PC9hPmA7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBSZWRpclRpdGxlID0gcGcuc3RydWN0dXJlcy5tZW51cy5wb3B1cFRpdGxlO1xuXHRwZy5zdHJ1Y3R1cmVzLm1lbnVzLnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBUb3BMaW5rcztcblx0Y29weVN0cnVjdHVyZSgnbWVudXMnLCAnc2hvcnRtZW51cycpO1xuXHRwZy5zdHJ1Y3R1cmVzLnNob3J0bWVudXMucG9wdXBUb3BMaW5rcyA9ICh4KSA9PiB7XG5cdFx0cmV0dXJuIHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBUb3BMaW5rcyh4LCB0cnVlKTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5zaG9ydG1lbnVzLnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMuc2hvcnRtZW51cy5wb3B1cFRvcExpbmtzO1xuXHRwZy5zdHJ1Y3R1cmVzLmxpdGUgPSB7fTtcblx0cGcuc3RydWN0dXJlcy5saXRlLnBvcHVwTGF5b3V0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBbJ3BvcHVwVGl0bGUnLCAncG9wdXBQcmV2aWV3J107XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubGl0ZS5wb3B1cFRpdGxlID0gKHgpID0+IHtcblx0XHRsb2coYCR7eC5hcnRpY2xlfTogc3RydWN0dXJlcy5saXRlLnBvcHVwVGl0bGVgKTtcblx0XHQvLyByZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTCgnPGI+PDxtYWlubGluaz4+PC9iPicseC5hcnRpY2xlLHgucGFyYW1zKTtcblx0XHRyZXR1cm4gYDxkaXY+PHNwYW4gY2xhc3M9XCJwb3B1cF9tYWlubGlua1wiPjxiPiR7eC5hcnRpY2xlLnRvU3RyaW5nKCl9PC9iPjwvc3Bhbj48L2Rpdj5gO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBzdHJ1Y3R1cmVzLmpzXG5cdC8vIFNUQVJURklMRTogYXV0b2VkaXQuanNcblx0Y29uc3Qgc3Vic3RpdHV0ZSA9IChkYXRhLCBjbWRCb2R5KSA9PiB7XG5cdFx0Ly8gbXcubm90aWZ5KGBzdWJcXG5mcm9tOiAke2NtZEJvZHkuZnJvbX1cXG50bzogJHtjbWRCb2R5LnRvfVxcbmZsYWdzOiAke2NtZEJvZHkuZmxhZ3N9YCwge3RhZzogJ3BvcHVwcycsIHR5cGU6ICd3YXJuJ30pO1xuXHRcdGNvbnN0IGZyb21SZSA9IG5ldyBSZWdFeHAoY21kQm9keS5mcm9tLCBjbWRCb2R5LmZsYWdzKTtcblx0XHRyZXR1cm4gZGF0YS5yZXBsYWNlKGZyb21SZSwgY21kQm9keS50byk7XG5cdH07XG5cdGNvbnN0IGV4ZWNDbWRzID0gKGRhdGEsIGNtZExpc3QpID0+IHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgY21kTGlzdCkge1xuXHRcdFx0ZGF0YSA9IGVsZW1lbnQuYWN0aW9uKGRhdGEsIGVsZW1lbnQpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGF0YTtcblx0fTtcblx0Y29uc3QgcGFyc2VDbWQgPSBmdW5jdGlvbiBwYXJzZUNtZChzdHIpIHtcblx0XHQvLyByZXR1cm5zIGEgbGlzdCBvZiBjb21tYW5kc1xuXHRcdGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGxldCBwID0gZmFsc2U7XG5cdFx0c3dpdGNoIChzdHIuY2hhckF0KDApKSB7XG5cdFx0XHRjYXNlICdzJzpcblx0XHRcdFx0cCA9IHBhcnNlU3Vic3RpdHV0ZShzdHIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHApIHtcblx0XHRcdHJldHVybiBbcCwgcGFyc2VDbWQocC5yZW1haW5kZXIpXTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHQvLyBGSVhNRTogT25seSB1c2VkIG9uY2UgaGVyZSwgY29uZnVzaW5nIHdpdGggbmF0aXZlIChhbmQgbW9yZSB3aWRlbHktdXNlZCkgdW5lc2NhcGUsIHNob3VsZCBwcm9iYWJseSBiZSByZXBsYWNlZFxuXHQvLyBUaGVuIGFnYWluLCB1bmVzY2FwZSBpcyBzZW1pLXNvZnQtZGVwcmVjYXRlZCwgc28gd2Ugc2hvdWxkIGxvb2sgaW50byByZXBsYWNpbmcgdGhhdCB0b29cblx0Y29uc3QgdW5Fc2NhcGUgPSAoc3RyLCBzZXApID0+IHtcblx0XHRyZXR1cm4gc3RyXG5cdFx0XHQuc3BsaXQoJ1xcXFxcXFxcJylcblx0XHRcdC5qb2luKCdcXFxcJylcblx0XHRcdC5zcGxpdChgXFxcXCR7c2VwfWApXG5cdFx0XHQuam9pbihzZXApXG5cdFx0XHQuc3BsaXQoU3RyaW5nLnJhd2BcXG5gKVxuXHRcdFx0LmpvaW4oJ1xcbicpO1xuXHR9O1xuXHRjb25zdCBwYXJzZVN1YnN0aXR1dGUgPSAoc3RyKSA9PiB7XG5cdFx0Ly8gdGFrZXMgYSBzdHJpbmcgbGlrZSBzL2EvYi9mbGFncztvdGhlcmNtZHMgYW5kIHBhcnNlcyBpdFxuXHRcdGxldCBmcm9tO1xuXHRcdGxldCB0bztcblx0XHRsZXQgZmxhZ3M7XG5cdFx0bGV0IHRtcDtcblx0XHRpZiAoc3RyLmxlbmd0aCA8IDQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3Qgc2VwID0gc3RyLmNoYXJBdCgxKTtcblx0XHRzdHIgPSBzdHIuc2xpY2UoMik7XG5cdFx0dG1wID0gc2tpcE92ZXIoc3RyLCBzZXApO1xuXHRcdGlmICh0bXApIHtcblx0XHRcdGZyb20gPSB0bXAuc2VnbWVudDtcblx0XHRcdHN0ciA9IHRtcC5yZW1haW5kZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dG1wID0gc2tpcE92ZXIoc3RyLCBzZXApO1xuXHRcdGlmICh0bXApIHtcblx0XHRcdHRvID0gdG1wLnNlZ21lbnQ7XG5cdFx0XHRzdHIgPSB0bXAucmVtYWluZGVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGZsYWdzID0gJyc7XG5cdFx0aWYgKHN0ci5sZW5ndGggPiAwKSB7XG5cdFx0XHR0bXAgPSBza2lwT3ZlcihzdHIsICc7JykgfHwgc2tpcFRvRW5kKHN0ciwgJzsnKTtcblx0XHRcdGlmICh0bXApIHtcblx0XHRcdFx0ZmxhZ3MgPSB0bXAuc2VnbWVudDtcblx0XHRcdFx0c3RyID0gdG1wLnJlbWFpbmRlcjtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGlvbjogc3Vic3RpdHV0ZSxcblx0XHRcdGZyb20sXG5cdFx0XHR0byxcblx0XHRcdGZsYWdzLFxuXHRcdFx0cmVtYWluZGVyOiBzdHIsXG5cdFx0fTtcblx0fTtcblx0Y29uc3Qgc2tpcE92ZXIgPSAoc3RyLCBzZXApID0+IHtcblx0XHRjb25zdCBlbmRTZWdtZW50ID0gZmluZE5leHQoc3RyLCBzZXApO1xuXHRcdGlmIChlbmRTZWdtZW50IDwgMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBzZWdtZW50ID0gdW5Fc2NhcGUoc3RyLnNsaWNlKDAsIE1hdGgubWF4KDAsIGVuZFNlZ21lbnQpKSwgc2VwKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VnbWVudCxcblx0XHRcdHJlbWFpbmRlcjogc3RyLnNsaWNlKE1hdGgubWF4KDAsIGVuZFNlZ21lbnQgKyAxKSksXG5cdFx0fTtcblx0fTtcblx0Y29uc3Qgc2tpcFRvRW5kID0gKHN0ciwgX3NlcCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZWdtZW50OiBzdHIsXG5cdFx0XHRyZW1haW5kZXI6ICcnLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IGZpbmROZXh0ID0gKHN0ciwgY2gpID0+IHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKHN0ci5jaGFyQXQoaSkgPT09ICdcXFxcJykge1xuXHRcdFx0XHRpICs9IDI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc3RyLmNoYXJBdChpKSA9PT0gY2gpIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fTtcblx0Y29uc3Qgc2V0Q2hlY2tib3ggPSAocGFyYW0sIGJveCkgPT4ge1xuXHRcdGNvbnN0IHZhbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZShwYXJhbSk7XG5cdFx0aWYgKHZhbCkge1xuXHRcdFx0c3dpdGNoICh2YWwpIHtcblx0XHRcdFx0Y2FzZSAnMSc6XG5cdFx0XHRcdGNhc2UgJ3llcyc6XG5cdFx0XHRcdGNhc2UgJ3RydWUnOlxuXHRcdFx0XHRcdGJveC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnMCc6XG5cdFx0XHRcdGNhc2UgJ25vJzpcblx0XHRcdFx0Y2FzZSAnZmFsc2UnOlxuXHRcdFx0XHRcdGJveC5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBhdXRvRWRpdCA9IGZ1bmN0aW9uIGF1dG9FZGl0KCkge1xuXHRcdHNldHVwUG9wdXBzKCgpID0+IHtcblx0XHRcdGlmIChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2F1dG9pbXBsJykgIT09IHBvcHVwU3RyaW5nKCdhdXRvZWRpdF92ZXJzaW9uJykpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3dhdGNobGlzdCcpICYmIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYWN0b2tlbicpID09PSBhdXRvQ2xpY2tUb2tlbigpKSB7XG5cdFx0XHRcdHBnLmZuLm1vZGlmeVdhdGNobGlzdChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3RpdGxlJyksIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYWN0aW9uJykpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFkb2N1bWVudC5lZGl0Zm9ybSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYXV0b0VkaXQuYWxyZWFkeVJhbikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRhdXRvRWRpdC5hbHJlYWR5UmFuID0gdHJ1ZTtcblx0XHRcdGNvbnN0IGNtZFN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b2VkaXQnKTtcblx0XHRcdGlmIChjbWRTdHJpbmcpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBlZGl0Ym94ID0gZG9jdW1lbnQuZWRpdGZvcm0ud3BUZXh0Ym94MTtcblx0XHRcdFx0XHRjb25zdCBjbWRMaXN0ID0gcGFyc2VDbWQoY21kU3RyaW5nKTtcblx0XHRcdFx0XHRjb25zdCBpbnB1dCA9IGVkaXRib3gudmFsdWU7XG5cdFx0XHRcdFx0Y29uc3Qgb3V0cHV0ID0gZXhlY0NtZHMoaW5wdXQsIGNtZExpc3QpO1xuXHRcdFx0XHRcdGVkaXRib3gudmFsdWUgPSBvdXRwdXQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2V0Q2hlY2tib3goJ2F1dG9taW5vcicsIGRvY3VtZW50LmVkaXRmb3JtLndwTWlub3JlZGl0KTtcblx0XHRcdHNldENoZWNrYm94KCdhdXRvd2F0Y2gnLCBkb2N1bWVudC5lZGl0Zm9ybS53cFdhdGNodGhpcyk7XG5cdFx0XHRjb25zdCBydmlkID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvcnYnKTtcblx0XHRcdGlmIChydmlkKSB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IGAke3BnLndpa2kuYXBpd2lraWJhc2V9P2FjdGlvbj1xdWVyeSZmb3JtYXQ9anNvbiZmb3JtYXR2ZXJzaW9uPTImcHJvcD1yZXZpc2lvbnMmcmV2aWRzPSR7cnZpZH1gO1xuXHRcdFx0XHRzdGFydERvd25sb2FkKHVybCwgbnVsbCwgYXV0b0VkaXQyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGF1dG9FZGl0MigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBhdXRvRWRpdDIgPSAoZCkgPT4ge1xuXHRcdGxldCBzdW1tYXJ5ID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvc3VtbWFyeScpO1xuXHRcdGxldCBzdW1tYXJ5cHJvbXB0ID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvc3VtbWFyeXByb21wdCcpO1xuXHRcdGxldCBzdW1tYXJ5bm90aWNlID0gJyc7XG5cdFx0aWYgKGQgJiYgZC5kYXRhICYmIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3J2JykpIHtcblx0XHRcdGNvbnN0IHMgPSBnZXRSdlN1bW1hcnkoc3VtbWFyeSwgZC5kYXRhKTtcblx0XHRcdGlmIChzID09PSBmYWxzZSkge1xuXHRcdFx0XHRzdW1tYXJ5cHJvbXB0ID0gdHJ1ZTtcblx0XHRcdFx0c3VtbWFyeW5vdGljZSA9IHBvcHVwU3RyaW5nKCdGYWlsZWQgdG8gZ2V0IHJldmlzaW9uIGluZm9ybWF0aW9uLCBwbGVhc2UgZWRpdCBtYW51YWxseS5cXG5cXG4nKTtcblx0XHRcdFx0c3VtbWFyeSA9IHNpbXBsZVByaW50ZihzdW1tYXJ5LCBbbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvcnYnKSwgJyh1bmtub3duKScsICcodW5rbm93biknXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdW1tYXJ5ID0gcztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHN1bW1hcnlwcm9tcHQpIHtcblx0XHRcdGNvbnN0IHR4dCA9IHN1bW1hcnlub3RpY2UgKyBwb3B1cFN0cmluZygnRW50ZXIgYSBub24tZW1wdHkgZWRpdCBzdW1tYXJ5IG9yIHByZXNzIGNhbmNlbCB0byBhYm9ydCcpO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBwcm9tcHQodHh0LCBzdW1tYXJ5KTtcblx0XHRcdGlmIChyZXNwb25zZSkge1xuXHRcdFx0XHRzdW1tYXJ5ID0gcmVzcG9uc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChzdW1tYXJ5KSB7XG5cdFx0XHRkb2N1bWVudC5lZGl0Zm9ybS53cFN1bW1hcnkudmFsdWUgPSBzdW1tYXJ5O1xuXHRcdH1cblx0XHQvLyBBdHRlbXB0IHRvIGF2b2lkIHBvc3NpYmxlIHByZW1hdHVyZSBjbGlja2luZyBvZiB0aGUgc2F2ZSBidXR0b25cblx0XHQvLyAobWF5YmUgZGVsYXlzIGluIHVwZGF0ZXMgdG8gdGhlIERPTSBhcmUgdG8gYmxhbWU/PyBvciBhIHJlZCBoZXJyaW5nKVxuXHRcdHNldFRpbWVvdXQoYXV0b0VkaXQzLCAxMDApO1xuXHR9O1xuXHRjb25zdCBhdXRvQ2xpY2tUb2tlbiA9ICgpID0+IHtcblx0XHRyZXR1cm4gbXcudXNlci5zZXNzaW9uSWQoKTtcblx0fTtcblx0Y29uc3QgYXV0b0VkaXQzID0gKCkgPT4ge1xuXHRcdGlmIChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2FjdG9rZW4nKSAhPT0gYXV0b0NsaWNrVG9rZW4oKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBidG4gPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2F1dG9jbGljaycpO1xuXHRcdGlmIChidG4pIHtcblx0XHRcdGlmIChkb2N1bWVudC5lZGl0Zm9ybSAmJiBkb2N1bWVudC5lZGl0Zm9ybVtidG5dKSB7XG5cdFx0XHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmVkaXRmb3JtW2J0bl07XG5cdFx0XHRcdGNvbnN0IG1zZyA9IHRwcmludGYoXG5cdFx0XHRcdFx0J1RoZSAlcyBidXR0b24gaGFzIGJlZW4gYXV0b21hdGljYWxseSBjbGlja2VkLiBQbGVhc2Ugd2FpdCBmb3IgdGhlIG5leHQgcGFnZSB0byBsb2FkLicsXG5cdFx0XHRcdFx0W2J1dHRvbi52YWx1ZV1cblx0XHRcdFx0KTtcblx0XHRcdFx0YmFubmVyTWVzc2FnZShtc2cpO1xuXHRcdFx0XHRkb2N1bWVudC50aXRsZSA9IGAoJHtkb2N1bWVudC50aXRsZX0pYDtcblx0XHRcdFx0YnV0dG9uLmNsaWNrKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHR0cHJpbnRmKCdDb3VsZCBub3QgZmluZCBidXR0b24gJXMuIFBsZWFzZSBjaGVjayB0aGUgc2V0dGluZ3MgaW4geW91ciBqYXZhc2NyaXB0IGZpbGUuJywgW2J0bl0pLFxuXHRcdFx0XHRcdHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgYmFubmVyTWVzc2FnZSA9IChzKSA9PiB7XG5cdFx0Y29uc3QgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoMScpO1xuXHRcdGlmIChoZWFkaW5ncykge1xuXHRcdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRkaXYuaW5uZXJIVE1MID0gYDxmb250IHNpemU9KzE+PGI+JHtwZy5lc2NhcGVRdW90ZXNIVE1MKHMpfTwvYj48L2ZvbnQ+YDtcblx0XHRcdGhlYWRpbmdzWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpdiwgaGVhZGluZ3NbMF0pO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgZ2V0UnZTdW1tYXJ5ID0gKHRlbXBsYXRlLCBqc29uKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IG8gPSBnZXRKc09iaihqc29uKTtcblx0XHRcdGNvbnN0IFtlZGl0XSA9IGFueUNoaWxkKG8ucXVlcnkucGFnZXMpLnJldmlzaW9ucztcblx0XHRcdGNvbnN0IHRpbWVzdGFtcCA9IGVkaXQudGltZXN0YW1wXG5cdFx0XHRcdC5zcGxpdCgvW0EtWl0vZylcblx0XHRcdFx0LmpvaW4oJyAnKVxuXHRcdFx0XHQucmVwbGFjZSgvXiAqfCAqJC9nLCAnJyk7XG5cdFx0XHRyZXR1cm4gc2ltcGxlUHJpbnRmKHRlbXBsYXRlLCBbZWRpdC5yZXZpZCwgdGltZXN0YW1wLCBlZGl0LnVzZXJoaWRkZW4gPyAnKGhpZGRlbiknIDogZWRpdC51c2VyXSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXHQvLyBFTkRGSUxFOiBhdXRvZWRpdC5qc1xuXHQvLyBTVEFSVEZJTEU6IGRvd25sb2FkZXIuanNcblx0LyoqXG5cdCAqIEBmaWxlb3ZlcnZpZXdcblx0ICoge0Bzb3VyY2UgRG93bmxvYWRlcn0sIGEgeG1saHR0cHJlcXVlc3Qgd3JhcHBlciwgYW5kIGhlbHBlciBmdW5jdGlvbnMuXG5cdCAqL1xuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBEb3dubG9hZGVyXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAY2xhc3MgVGhlIERvd25sb2FkZXIgY2xhc3MuIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIHRvIGRvd25sb2FkIHN0dWZmLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gZG93bmxvYWQuIFRoaXMgY2FuIGJlIG9taXR0ZWQgYW5kIHN1cHBsaWVkIGxhdGVyLlxuXHQgKi9cblx0Y2xhc3MgRG93bmxvYWRlciB7XG5cdFx0Y29uc3RydWN0b3IodXJsKSB7XG5cdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR0aGlzLmh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRcdH1cblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIHVybCB0byBkb3dubG9hZFxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnVybCA9IHVybDtcblx0XHRcdC8qKlxuXHRcdFx0ICogQSB1bml2ZXJzYWxseSB1bmlxdWUgSUQgbnVtYmVyXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmlkID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogTW9kaWZpY2F0aW9uIGRhdGUsIHRvIGJlIGN1bGxlZCBmcm9tIHRoZSBpbmNvbWluZyBoZWFkZXJzXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgRGF0ZVxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5sYXN0TW9kaWZpZWQgPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBXaGF0IHRvIGRvIHdoZW4gdGhlIGRvd25sb2FkIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBGdW5jdGlvblxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5jYWxsYmFja0Z1bmN0aW9uID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogV2hhdCB0byBkbyBvbiBmYWlsdXJlXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgRnVuY3Rpb25cblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMub25GYWlsdXJlID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogRmxhZyBzZXQgb24gPGNvZGU+YWJvcnQ8L2NvZGU+XG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmFib3J0ZWQgPSBmYWxzZTtcblx0XHRcdC8qKlxuXHRcdFx0ICogSFRUUCBtZXRob2QuIFNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWM5Lmh0bWwgZm9yXG5cdFx0XHQgKiBwb3NzaWJpbGl0aWVzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLm1ldGhvZCA9ICdHRVQnO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBBc3luYyBmbGFnLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5hc3luYyA9IHRydWU7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFN1Ym1pdHMgdGhlIGh0dHAgcmVxdWVzdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0geFxuXHRcdCAqL1xuXHRcdHNlbmQoeCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLnNlbmQoeCk7XG5cdFx0fVxuXHRcdC8qIEFib3J0cyB0aGUgZG93bmxvYWQsIHNldHRpbmcgdGhlIDxjb2RlPmFib3J0ZWQ8L2NvZGU+IGZpZWxkIHRvIHRydWUuICovXG5cdFx0YWJvcnQoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHRoaXMuYWJvcnRlZCA9IHRydWU7XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLmFib3J0KCk7XG5cdFx0fVxuXHRcdC8qKiBSZXR1cm5zIHRoZSBkb3dubG9hZGVkIGRhdGEuICovXG5cdFx0Z2V0RGF0YSgpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5yZXNwb25zZVRleHQ7XG5cdFx0fVxuXHRcdC8qKiBQcmVwYXJlcyB0aGUgZG93bmxvYWQuICovXG5cdFx0c2V0VGFyZ2V0KCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmh0dHAub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmwsIHRoaXMuYXN5bmMpO1xuXHRcdFx0dGhpcy5odHRwLnNldFJlcXVlc3RIZWFkZXIoJ0FwaS1Vc2VyLUFnZW50JywgcGcuYXBpLnVzZXJBZ2VudCk7XG5cdFx0fVxuXHRcdC8qKiBHZXRzIHRoZSBzdGF0ZSBvZiB0aGUgZG93bmxvYWQuICovXG5cdFx0Z2V0UmVhZHlTdGF0ZSgpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5yZWFkeVN0YXRlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTdGFydHMgdGhlIGRvd25sb2FkLlxuXHRcdCAqIE5vdGUgdGhhdCBzZXRUYXJnZXQge0Bzb3VyY2UgRG93bmxvYWRlciNzZXRUYXJnZXR9IG11c3QgYmUgcnVuIGZpcnN0XG5cdFx0ICovXG5cdFx0c3RhcnQoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHBnLm1pc2MuZG93bmxvYWRzSW5Qcm9ncmVzc1t0aGlzLmlkXSA9IHNlbGY7XG5cdFx0XHR0aGlzLmh0dHAuc2VuZChudWxsKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogR2V0cyB0aGUgJ0xhc3QtTW9kaWZpZWQnIGRhdGUgZnJvbSB0aGUgZG93bmxvYWQgaGVhZGVycy5cblx0XHQgKiBTaG91bGQgYmUgcnVuIGFmdGVyIHRoZSBkb3dubG9hZCBjb21wbGV0ZXMuXG5cdFx0ICogUmV0dXJucyA8Y29kZT5udWxsPC9jb2RlPiBvbiBmYWlsdXJlLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybiB7RGF0ZX1cblx0XHQgKi9cblx0XHRnZXRMYXN0TW9kaWZpZWREYXRlKCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRsZXQgbGFzdG1vZDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxhc3Rtb2QgPSB0aGlzLmh0dHAuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xhc3QtTW9kaWZpZWQnKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxhc3Rtb2QpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBEYXRlKGxhc3Rtb2QpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZiBjYWxsYmFjayBmdW5jdGlvbiwgY2FsbGVkIGFzIDxjb2RlPmYodGhpcyk8L2NvZGU+IG9uIHN1Y2Nlc3Ncblx0XHQgKi9cblx0XHRzZXRDYWxsYmFjayhmKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZjtcblx0XHR9XG5cdFx0Z2V0U3RhdHVzKCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLnN0YXR1cztcblx0XHR9XG5cdH1cblx0bmV3IERvd25sb2FkZXIoKTtcblx0cGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzID0ge307XG5cdC8vIGhlbHBlciBmdW5jdGlvbnNcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcge0Bzb3VyY2UgRG93bmxvYWRlcn0gYW5kIHByZXBhcmVzIGl0IGZvciBhY3Rpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBkb3dubG9hZFxuXHQgKiBAcGFyYW0ge2ludGVnZXJ9IGlkIFRoZSBJRCBvZiB0aGUge0Bzb3VyY2UgRG93bmxvYWRlcn0gb2JqZWN0XG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBpbnZva2VkIG9uIHN1Y2Nlc3Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IG9uZmFpbHVyZVxuXHQgKiBAcmV0dXJuIHtTdHJpbmcvRG93bmxvYWRlcn0gdGhlIHtAc291cmNlIERvd25sb2FkZXJ9IG9iamVjdCBjcmVhdGVkLCBvciAnb2hkZWFyJyBpZiBhbiB1bnN1cHBvcnRlZCBicm93c2VyXG5cdCAqL1xuXHRjb25zdCBuZXdEb3dubG9hZCA9IGZ1bmN0aW9uIG5ld0Rvd25sb2FkKHVybCwgaWQsIGNhbGxiYWNrLCBvbmZhaWx1cmUpIHtcblx0XHRjb25zdCBkID0gbmV3IERvd25sb2FkZXIodXJsKTtcblx0XHRpZiAoIWQuaHR0cCkge1xuXHRcdFx0cmV0dXJuICdvaGRlYXInO1xuXHRcdH1cblx0XHRkLmlkID0gaWQ7XG5cdFx0ZC5zZXRUYXJnZXQoKTtcblx0XHRvbmZhaWx1cmUgfHw9IDI7XG5cdFx0Y29uc3QgZiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChkLmdldFJlYWR5U3RhdGUoKSA9PT0gNCkge1xuXHRcdFx0XHRkZWxldGUgcGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzW3RoaXMuaWRdO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmIChkLmdldFN0YXR1cygpID09PSAyMDApIHtcblx0XHRcdFx0XHRcdGQuZGF0YSA9IGQuZ2V0RGF0YSgpO1xuXHRcdFx0XHRcdFx0ZC5sYXN0TW9kaWZpZWQgPSBkLmdldExhc3RNb2RpZmllZERhdGUoKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKGQpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIG9uZmFpbHVyZSA9PT0gdHlwZW9mIDEpIHtcblx0XHRcdFx0XHRcdGlmIChvbmZhaWx1cmUgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdC8vIHJldHJ5XG5cdFx0XHRcdFx0XHRcdG5ld0Rvd25sb2FkKHVybCwgaWQsIGNhbGxiYWNrLCBvbmZhaWx1cmUgLSAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBvbmZhaWx1cmUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdG9uZmFpbHVyZShkLCB1cmwsIGlkLCBjYWxsYmFjayk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBpZ25vcmUgaXQgKi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0ZC5zZXRDYWxsYmFjayhmKTtcblx0XHRyZXR1cm4gZDtcblx0fTtcblx0LyoqXG5cdCAqIFNpbXVsYXRlcyBhIGRvd25sb2FkIGZyb20gY2FjaGVkIGRhdGEuXG5cdCAqIFRoZSBzdXBwbGllZCBkYXRhIGlzIHB1dCBpbnRvIGEge0Bzb3VyY2UgRG93bmxvYWRlcn0gYXMgaWYgaXQgaGFkIGRvd25sb2FkZWQgaXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybC5cblx0ICogQHBhcmFtIHtpbnRlZ2VyfSBpZCBUaGUgSUQuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjaywgd2hpY2ggaXMgaW52b2tlZCBpbW1lZGlhdGVseSBhcyA8Y29kZT5jYWxsYmFjayhkKTwvY29kZT4sXG5cdCAqIHdoZXJlIDxjb2RlPmQ8L2NvZGU+IGlzIHRoZSBuZXcge0Bzb3VyY2UgRG93bmxvYWRlcn0uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIFRoZSAoY2FjaGVkKSBkYXRhLlxuXHQgKiBAcGFyYW0ge0RhdGV9IGxhc3RNb2RpZmllZCBUaGUgKGNhY2hlZCkgbGFzdCBtb2RpZmllZCBkYXRlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gb3duZXJcblx0ICovXG5cdGNvbnN0IGZha2VEb3dubG9hZCA9ICh1cmwsIGlkLCBjYWxsYmFjaywgZGF0YSwgbGFzdE1vZGlmaWVkLCBvd25lcikgPT4ge1xuXHRcdGNvbnN0IGQgPSBuZXdEb3dubG9hZCh1cmwsIGNhbGxiYWNrKTtcblx0XHRkLm93bmVyID0gb3duZXI7XG5cdFx0ZC5pZCA9IGlkO1xuXHRcdGQuZGF0YSA9IGRhdGE7XG5cdFx0ZC5sYXN0TW9kaWZpZWQgPSBsYXN0TW9kaWZpZWQ7XG5cdFx0cmV0dXJuIGNhbGxiYWNrKGQpO1xuXHR9O1xuXHQvKipcblx0ICogU3RhcnRzIGEgZG93bmxvYWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBkb3dubG9hZFxuXHQgKiBAcGFyYW0ge2ludGVnZXJ9IGlkIFRoZSBJRCBvZiB0aGUge0Bzb3VyY2UgRG93bmxvYWRlcn0gb2JqZWN0XG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBpbnZva2VkIG9uIHN1Y2Nlc3Ncblx0ICogQHJldHVybiB7U3RyaW5nL0Rvd25sb2FkZXJ9IHRoZSB7QHNvdXJjZSBEb3dubG9hZGVyfSBvYmplY3QgY3JlYXRlZCwgb3IgJ29oZGVhcicgaWYgYW4gdW5zdXBwb3J0ZWQgYnJvd3NlclxuXHQgKi9cblx0Y29uc3Qgc3RhcnREb3dubG9hZCA9ICh1cmwsIGlkLCBjYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IGQgPSBuZXdEb3dubG9hZCh1cmwsIGlkLCBjYWxsYmFjayk7XG5cdFx0aWYgKHR5cGVvZiBkID09PSB0eXBlb2YgJycpIHtcblx0XHRcdHJldHVybiBkO1xuXHRcdH1cblx0XHRkLnN0YXJ0KCk7XG5cdFx0cmV0dXJuIGQ7XG5cdH07XG5cdC8qKlxuXHQgKiBBYm9ydHMgYWxsIGRvd25sb2FkcyB3aGljaCBoYXZlIGJlZW4gc3RhcnRlZC5cblx0ICovXG5cdGNvbnN0IGFib3J0QWxsRG93bmxvYWRzID0gKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgeCBpbiBwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3MpIHtcblx0XHRcdGlmICghT2JqZWN0Lmhhc093bihwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3MsIHgpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzW3hdLmFib3J0ZWQgPSB0cnVlO1xuXHRcdFx0XHRwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3NbeF0uYWJvcnQoKTtcblx0XHRcdFx0ZGVsZXRlIHBnLm1pc2MuZG93bmxvYWRzSW5Qcm9ncmVzc1t4XTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Ly8gRU5ERklMRTogZG93bmxvYWRlci5qc1xuXHQvLyBTVEFSVEZJTEU6IGxpdmVwcmV2aWV3LmpzXG5cdC8vIFRPRE86IGxvY2F0aW9uIGlzIG9mdGVuIG5vdCBjb3JyZWN0IChlZyByZWxhdGl2ZSBsaW5rcyBpbiBwcmV2aWV3cylcblx0Ly8gTk9URTogcmVtb3ZlZCBtZDUgYW5kIGltYWdlIGFuZCBtYXRoIHBhcnNpbmcuIHdhcyBicm9rZW4sIGxvdHMgb2YgYnl0ZXMuXG5cdC8qKlxuXHQgKiBJbnN0YVZpZXcgLSBhIE1lZGlhd2lraSB0byBIVE1MIGNvbnZlcnRlciBpbiBKYXZhU2NyaXB0XG5cdCAqIFZlcnNpb24gMC42LjFcblx0ICogQ29weXJpZ2h0IChDKSBQZWRybyBGYXlvbGxlIDIwMDUtMjAwNlxuXHQgKiB7QGxpbmsgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVXNlcjpQaWxhZn1cblx0ICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBsaWNlbnNlXG5cdCAqXG5cdCAqIENoYW5nZWxvZzpcblx0ICpcblx0ICogMC42LjFcblx0ICogLSBGaXhlZCBwcm9ibGVtIGNhdXNlZCBieSBcXHIgY2hhcmFjdGVyc1xuXHQgKiAtIEltcHJvdmVkIGlubGluZSBmb3JtYXR0aW5nIHBhcnNlclxuXHQgKlxuXHQgKiAwLjZcblx0ICogLSBDaGFuZ2VkIG5hbWUgdG8gSW5zdGFWaWV3XG5cdCAqIC0gU29tZSBtYWpvciBjb2RlIHJlb3JnYW5pemF0aW9ucyBhbmQgZmFjdG9yZWQgb3V0IHNvbWUgY29tbW9uIGZ1bmN0aW9uc1xuXHQgKiAtIEhhbmRsZWQgY29udmVyc2lvbiBvZiByZWxhdGl2ZSBsaW5rcyAoaS5lLiBbWy9mb29dXSlcblx0ICogLSBGaXhlZCBtaXNyZW5kZXJpbmcgb2YgYWRqYWNlbnQgZGVmaW5pdGlvbiBsaXN0IGl0ZW1zXG5cdCAqIC0gRml4ZWQgYnVnIGluIHRhYmxlIGhlYWRpbmdzIGhhbmRsaW5nXG5cdCAqIC0gQ2hhbmdlZCBkYXRlIGZvcm1hdCBpbiBzaWduYXR1cmVzIHRvIHJlZmxlY3QgTWVkaWF3aWtpJ3Ncblx0ICogLSBGaXhlZCBoYW5kbGluZyBvZiBbWzpJbWFnZTouLi5dXVxuXHQgKiAtIFVwZGF0ZWQgTUQ1IGZ1bmN0aW9uIChob3BlZnVsbHkgaXQgd2lsbCB3b3JrIHdpdGggVVRGLTgpXG5cdCAqIC0gRml4ZWQgYnVnIGluIGhhbmRsaW5nIG9mIGxpbmtzIGluc2lkZSBpbWFnZXNcblx0ICpcblx0ICogVG8gZG86XG5cdCAqIC0gQmV0dGVyIHN1cHBvcnQgZm9yIG1hdGggdGFnc1xuXHQgKiAtIEZ1bGwgc3VwcG9ydCBmb3Igbm93aWtpIHRhZ1xuXHQgKiAtIFBhcnNlci1iYXNlZCAoYXMgb3Bwb3NlZCB0byBSZWdFeHAtYmFzZWQpIGlubGluZSB3aWtpY29kZSBoYW5kbGluZyAobWFrZSBpdCBvbmUtcGFzcyBhbmRcblx0ICogICBidWxsZXQtcHJvb2YpXG5cdCAqIC0gU3VwcG9ydCBmb3IgdGVtcGxhdGVzICh0aHJvdWdoIEFKQVgpXG5cdCAqIC0gU3VwcG9ydCBmb3IgY29sb3VyZWQgbGlua3MgKEFKQVgpXG5cdCAqL1xuXHRjb25zdCBJbnN0YSA9IHt9O1xuXHRjb25zdCBzZXR1cExpdmVQcmV2aWV3ID0gKCkgPT4ge1xuXHRcdGxldCBfYjtcblx0XHQvLyBvcHRpb25zXG5cdFx0SW5zdGEuY29uZiA9IHtcblx0XHRcdGJhc2VVcmw6ICcnLFxuXHRcdFx0dXNlcjoge30sXG5cdFx0XHR3aWtpOiB7XG5cdFx0XHRcdGxhbmc6IHBnLndpa2kubGFuZyxcblx0XHRcdFx0aW50ZXJ3aWtpOiBwZy53aWtpLmludGVyd2lraSxcblx0XHRcdFx0ZGVmYXVsdF90aHVtYl93aWR0aDogMTgwLFxuXHRcdFx0fSxcblx0XHRcdHBhdGhzOiB7XG5cdFx0XHRcdGFydGljbGVzOiBgJHtwZy53aWtpLmFydGljbGVQYXRofS9gLFxuXHRcdFx0XHQvLyBPbmx5IHVzZWQgZm9yIEluc3RhIHByZXZpZXdzIHdpdGggaW1hZ2VzLiAobm90IGluIHBvcHVwcylcblx0XHRcdFx0bWF0aDogJy9tYXRoLycsXG5cdFx0XHRcdGltYWdlczogJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvJyxcblx0XHRcdFx0aW1hZ2VzX2ZhbGxiYWNrOiAnLy93bS56aG9uZ3dlbi53aWtpL2NvbW1vbnMvJyxcblx0XHRcdH0sXG5cdFx0XHRsb2NhbGU6IHtcblx0XHRcdFx0dXNlcjogbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNVc2VySWRdLFxuXHRcdFx0XHRpbWFnZTogbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNJbWFnZUlkXSxcblx0XHRcdFx0Y2F0ZWdvcnk6IG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zQ2F0ZWdvcnlJZF0sXG5cdFx0XHRcdC8vIHNob3VsZG4ndCBiZSB1c2VkIGluIHBvcHVwIHByZXZpZXdzLCBpIHRoaW5rXG5cdFx0XHRcdG1vbnRoczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdC8vIG9wdGlvbnMgd2l0aCBkZWZhdWx0IHZhbHVlcyBvciBiYWNrcmVmZXJlbmNlc1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0KF9iID0gSW5zdGEuY29uZi51c2VyKS5uYW1lIHx8IChfYi5uYW1lID0gJ1FpdXdlbiBCYWlrZSBjb250cmlidXRvcnMnKTtcblx0XHRJbnN0YS5jb25mLnVzZXIuc2lnbmF0dXJlID0gYFtbJHtJbnN0YS5jb25mLmxvY2FsZS51c2VyfToke0luc3RhLmNvbmYudXNlci5uYW1lfXwke0luc3RhLmNvbmYudXNlci5uYW1lfV1dYDtcblx0XHQvLyBkZWZpbmUgY29uc3RhbnRzXG5cdFx0SW5zdGEuQkxPQ0tfSU1BR0UgPSBuZXcgUmVnRXhwKFxuXHRcdFx0YF5cXFxcW1xcXFxbKD86RmlsZXxJbWFnZXwke0luc3RhLmNvbmYubG9jYWxlLmltYWdlfSk6Lio/XFxcXHwuKj8oPzpmcmFtZXx0aHVtYm5haWx8dGh1bWJ8bm9uZXxyaWdodHxsZWZ0fGNlbnRlcilgLFxuXHRcdFx0J2knXG5cdFx0KTtcblx0fTtcblx0SW5zdGEuZHVtcCA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuXHRcdGlmICh0eXBlb2YgZnJvbSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGZyb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtmcm9tfWApO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHRvID09PSAnc3RyaW5nJykge1xuXHRcdFx0dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0b31gKTtcblx0XHR9XG5cdFx0dG8uaW5uZXJIVE1MID0gdGhpcy5jb252ZXJ0KGZyb20udmFsdWUpO1xuXHR9O1xuXHRJbnN0YS5jb252ZXJ0ID0gKHdpa2kpID0+IHtcblx0XHRjb25zdCBsbCA9IHR5cGVvZiB3aWtpID09PSAnc3RyaW5nJyA/IHdpa2kucmVwbGFjZSgvXFxyL2csICcnKS5zcGxpdCgvXFxuLykgOiB3aWtpOyAvLyBsaW5lcyBvZiB3aWtpY29kZVxuXHRcdGxldCBvID0gJyc7IC8vIHJlc3VsdCBvZiBwYXNzaW5nIGEgcmVnZXhwIHRvIGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoKVxuXHRcdGxldCBwID0gMDtcblx0XHRsZXQgcjtcblx0XHQvLyBzb21lIHNob3J0aGFuZHNcblx0XHRjb25zdCByZW1haW4gPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gbGwubGVuZ3RoO1xuXHRcdH07XG5cdFx0Y29uc3Qgc2ggPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gbGwuc2hpZnQoKTtcblx0XHR9OyAvLyBzaGlmdFxuXHRcdGNvbnN0IHBzID0gKHMpID0+IHtcblx0XHRcdG8gKz0gcztcblx0XHR9OyAvLyBwdXNoXG5cblx0XHQvLyBzaW1pbGFyIHRvIEMncyBwcmludGYsIHVzZXMgPyBhcyBwbGFjZWhvbGRlcnMsID8/IHRvIGVzY2FwZSBxdWVzdGlvbiBtYXJrc1xuXHRcdGNvbnN0IGYgPSBmdW5jdGlvbiBmKC4uLmFyZ3MpIHtcblx0XHRcdGxldCBpID0gMTtcblx0XHRcdGNvbnN0IGEgPSBhcmdzO1xuXHRcdFx0bGV0IFtmXSA9IGE7XG5cdFx0XHRsZXQgbyA9ICcnO1xuXHRcdFx0bGV0IGM7XG5cdFx0XHRsZXQgcDtcblx0XHRcdGZvciAoOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoKHAgPSBmLmluZGV4T2YoJz8nKSkgKyAxKSB7XG5cdFx0XHRcdFx0Ly8gYWxsb3cgY2hhcmFjdGVyIGVzY2FwaW5nXG5cdFx0XHRcdFx0YyA9IGYuY2hhckF0KHAgKyAxKSA9PT0gJz8nID8gMSA6IDA7XG5cdFx0XHRcdFx0aSAtPSBjO1xuXHRcdFx0XHRcdG8gKz0gZi5zbGljZSgwLCBNYXRoLm1heCgwLCBwKSkgKyAoYyA/ICc/JyA6IGFbaV0pO1xuXHRcdFx0XHRcdGYgPSBmLnNsaWNlKHAgKyAxICsgYyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBvICsgZjtcblx0XHR9O1xuXHRcdGNvbnN0IGh0bWxfZW50aXRpZXMgPSAocykgPT4ge1xuXHRcdFx0cmV0dXJuIHMucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuXHRcdH07XG5cdFx0Ly8gV2lraSB0ZXh0IHBhcnNpbmcgdG8gaHRtbCBpcyBhIG5pZ2h0bWFyZS5cblx0XHQvLyBUaGUgYmVsb3cgZnVuY3Rpb25zIGRlbGliZXJhdGVseSBkb24ndCBlc2NhcGUgdGhlIGFtcGVyc2FuZCBzaW5jZSB0aGlzIHdvdWxkIG1ha2UgaXQgbW9yZVxuXHRcdC8vIGRpZmZpY3VsdCwgYW5kIHdlIGRvbid0IGFic29sdXRlbHkgbmVlZCB0byBmb3IgaG93IHdlIG5lZWQgaXQuIFRoaXMgbWVhbnMgdGhhdCBhbnlcblx0XHQvLyB1bmVzY2FwZWQgYW1wZXJzYW5kcyBpbiB3aWtpdGV4dCB3aWxsIHJlbWFpbiB1bmVzY2FwZWQgYW5kIGNhbiBjYXVzZSBpbnZhbGlkIEhUTUwuXG5cdFx0Ly8gQnJvd3NlcnMgc2hvdWxkIGFsbCBiZSBhYmxlIHRvIGhhbmRsZSBpdCB0aG91Z2guIFdlIGFsc28gZXNjYXBlIHNpZ25pZmljYW50IHdpa2ltYXJrdXBcblx0XHQvLyBjaGFyYWN0ZXJzIHRvIHByZXZlbnQgZnVydGhlciBtYXRjaGluZyBvbiB0aGUgcHJvY2Vzc2VkIHRleHQuXG5cdFx0Y29uc3QgaHRtbGVzY2FwZV90ZXh0ID0gKHMpID0+IHtcblx0XHRcdHJldHVybiBzXG5cdFx0XHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHRcdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdFx0XHQucmVwbGFjZSgvOi9nLCAnJiM1ODsnKVxuXHRcdFx0XHQucmVwbGFjZSgvXFxbL2csICcmIzkxOycpXG5cdFx0XHRcdC5yZXBsYWNlKC9dL2csICcmIzkzOycpO1xuXHRcdH07XG5cdFx0Y29uc3QgaHRtbGVzY2FwZV9hdHRyID0gKHMpID0+IHtcblx0XHRcdHJldHVybiBodG1sZXNjYXBlX3RleHQocykucmVwbGFjZSgvJy9nLCAnJiMzOTsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cdFx0fTtcblx0XHQvLyByZXR1cm4gdGhlIGZpcnN0IG5vbiBtYXRjaGluZyBjaGFyYWN0ZXIgcG9zaXRpb24gYmV0d2VlbiB0d28gc3RyaW5nc1xuXHRcdGNvbnN0IHN0cl9pbWF0Y2ggPSAoYSwgYikgPT4ge1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRsZXQgbDtcblx0XHRcdGZvciAoaSA9IDAsIGwgPSBNYXRoLm1pbihhLmxlbmd0aCwgYi5sZW5ndGgpOyBpIDwgbDsgaSsrKSB7XG5cdFx0XHRcdGlmIChhLmNoYXJBdChpKSAhPT0gYi5jaGFyQXQoaSkpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGk7XG5cdFx0fTtcblx0XHQvLyBjb21wYXJlIGN1cnJlbnQgbGluZSBhZ2FpbnN0IGEgc3RyaW5nIG9yIHJlZ2V4cFxuXHRcdC8vIGlmIHBhc3NlZCBhIHN0cmluZyBpdCB3aWxsIGNvbXBhcmUgb25seSB0aGUgZmlyc3Qgc3RyaW5nLmxlbmd0aCBjaGFyYWN0ZXJzXG5cdFx0Ly8gaWYgcGFzc2VkIGEgcmVnZXhwIHRoZSByZXN1bHQgaXMgc3RvcmVkIGluIHJcblx0XHRjb25zdCBjb21wYXJlTGluZVN0cmluZ09yUmVnID0gKGMpID0+IHtcblx0XHRcdHJldHVybiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgPyBsbFswXSAmJiBsbFswXS5zbGljZSgwLCBjLmxlbmd0aCkgPT09IGMgOiAociA9IGxsWzBdICYmIGxsWzBdLm1hdGNoKGMpKTtcblx0XHR9O1xuXHRcdGNvbnN0IGNvbXBhcmVMaW5lU3RyaW5nID0gKGMpID0+IHtcblx0XHRcdHJldHVybiBsbFswXSA9PT0gYztcblx0XHR9OyAvLyBjb21wYXJlIGN1cnJlbnQgbGluZSBhZ2FpbnN0IGEgc3RyaW5nXG5cdFx0Y29uc3QgY2hhckF0UG9pbnQgPSAocCkgPT4ge1xuXHRcdFx0cmV0dXJuIGxsWzBdLmNoYXJBdChwKTtcblx0XHR9OyAvLyByZXR1cm4gY2hhciBhdCBwb3MgcFxuXHRcdGNvbnN0IGVuZGwgPSAocykgPT4ge1xuXHRcdFx0cHMocyk7XG5cdFx0XHRzaCgpO1xuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfbGlzdCA9ICgpID0+IHtcblx0XHRcdGxldCBwcmV2ID0gJyc7XG5cdFx0XHR3aGlsZSAocmVtYWluKCkgJiYgY29tcGFyZUxpbmVTdHJpbmdPclJlZygvXihbIyo6O10rKSguKikkLykpIHtcblx0XHRcdFx0Y29uc3QgbF9tYXRjaCA9IHI7XG5cdFx0XHRcdHNoKCk7XG5cdFx0XHRcdGNvbnN0IGlwb3MgPSBzdHJfaW1hdGNoKHByZXYsIGxfbWF0Y2hbMV0pO1xuXHRcdFx0XHQvLyBjbG9zZSB1bmNvbnRpbnVlZCBsaXN0c1xuXHRcdFx0XHRmb3IgKGxldCBwcmV2UG9zID0gcHJldi5sZW5ndGggLSAxOyBwcmV2UG9zID49IGlwb3M7IHByZXZQb3MtLSkge1xuXHRcdFx0XHRcdGNvbnN0IHBpID0gcHJldi5jaGFyQXQocHJldlBvcyk7XG5cdFx0XHRcdFx0aWYgKHBpID09PSAnKicpIHtcblx0XHRcdFx0XHRcdHBzKCc8L3VsPicpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocGkgPT09ICcjJykge1xuXHRcdFx0XHRcdFx0cHMoJzwvb2w+Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChbJycsICcqJywgJyMnXS5pbmRleE9mKGxfbWF0Y2hbMV0uY2hhckF0KHByZXZQb3MpKSkge1xuXHRcdFx0XHRcdFx0Ly8gY2xvc2UgYSBkbCBvbmx5IGlmIHRoZSBuZXcgaXRlbSBpcyBub3QgYSBkbCBpdGVtICg6LCA7IG9yIGVtcHR5KVxuXHRcdFx0XHRcdFx0cHMoJzwvZGw+Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIG9wZW4gbmV3IGxpc3RzXG5cdFx0XHRcdGZvciAobGV0IG1hdGNoUG9zID0gaXBvczsgbWF0Y2hQb3MgPCBsX21hdGNoWzFdLmxlbmd0aDsgbWF0Y2hQb3MrKykge1xuXHRcdFx0XHRcdGNvbnN0IGxpID0gbF9tYXRjaFsxXS5jaGFyQXQobWF0Y2hQb3MpO1xuXHRcdFx0XHRcdGlmIChsaSA9PT0gJyonKSB7XG5cdFx0XHRcdFx0XHRwcygnPHVsPicpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAobGkgPT09ICcjJykge1xuXHRcdFx0XHRcdFx0cHMoJzxvbD4nKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFsnJywgJyonLCAnIyddLmluZGV4T2YocHJldi5jaGFyQXQobWF0Y2hQb3MpKSkge1xuXHRcdFx0XHRcdFx0Ly8gb3BlbiBhIG5ldyBkbCBvbmx5IGlmIHRoZSBwcmV2IGl0ZW0gaXMgbm90IGEgZGwgaXRlbSAoOiwgOyBvciBlbXB0eSlcblx0XHRcdFx0XHRcdHBzKCc8ZGw+Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHN3aXRjaCAobF9tYXRjaFsxXS5hdCgtMSkpIHtcblx0XHRcdFx0XHRjYXNlICcqJzpcblx0XHRcdFx0XHRjYXNlICcjJzpcblx0XHRcdFx0XHRcdHBzKGA8bGk+JHtwYXJzZV9pbmxpbmVfbm93aWtpKGxfbWF0Y2hbMl0pfWApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnOyc6IHtcblx0XHRcdFx0XHRcdHBzKCc8ZHQ+Jyk7XG5cdFx0XHRcdFx0XHRjb25zdCBkdF9tYXRjaCA9IGxfbWF0Y2hbMl0ubWF0Y2goLyguKj8pKDouKj8pJC8pO1xuXHRcdFx0XHRcdFx0Ly8gaGFuZGxlIDtkdCA6ZGQgZm9ybWF0XG5cdFx0XHRcdFx0XHRpZiAoZHRfbWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0cHMocGFyc2VfaW5saW5lX25vd2lraShkdF9tYXRjaFsxXSkpO1xuXHRcdFx0XHRcdFx0XHRsbC51bnNoaWZ0KGR0X21hdGNoWzJdKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHBzKHBhcnNlX2lubGluZV9ub3dpa2kobF9tYXRjaFsyXSkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhc2UgJzonOlxuXHRcdFx0XHRcdFx0cHMoYDxkZD4ke3BhcnNlX2lubGluZV9ub3dpa2kobF9tYXRjaFsyXSl9YCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0WywgcHJldl0gPSBsX21hdGNoO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY2xvc2UgcmVtYWluaW5nIGxpc3RzXG5cdFx0XHRmb3IgKGxldCBpID0gcHJldi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRwcyhmKCc8Lz8+JywgcHJldi5jaGFyQXQoaSkgPT09ICcqJyA/ICd1bCcgOiBwcmV2LmNoYXJBdChpKSA9PT0gJyMnID8gJ29sJyA6ICdkbCcpKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX3RhYmxlID0gKCkgPT4ge1xuXHRcdFx0ZW5kbChmKCc8dGFibGU+JywgY29tcGFyZUxpbmVTdHJpbmdPclJlZygvXntcXHwoIC4qKSQvKSA/IHJbMV0gOiAnJykpO1xuXHRcdFx0Zm9yICg7IHJlbWFpbigpOyApIHtcblx0XHRcdFx0aWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJ3wnKSkge1xuXHRcdFx0XHRcdHN3aXRjaCAoY2hhckF0UG9pbnQoMSkpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ30nOlxuXHRcdFx0XHRcdFx0XHRlbmRsKCc8L3RhYmxlPicpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRjYXNlICctJzpcblx0XHRcdFx0XHRcdFx0ZW5kbChmKCc8dHI+JywgY29tcGFyZUxpbmVTdHJpbmdPclJlZygvXFx8LSooLiopLylbMV0pKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRwYXJzZV90YWJsZV9kYXRhKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJyEnKSkge1xuXHRcdFx0XHRcdHBhcnNlX3RhYmxlX2RhdGEoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV90YWJsZV9kYXRhID0gKCkgPT4ge1xuXHRcdFx0bGV0IHRkX2xpbmU7XG5cdFx0XHRsZXQgbWF0Y2hfaTtcblx0XHRcdC8vIDE6IFwifCtcIiwgJ3wnIG9yICcrJ1xuXHRcdFx0Ly8gMjogPz9cblx0XHRcdC8vIDM6IGF0dHJpYnV0ZXMgPz9cblx0XHRcdC8vIFRPRE86IGZpbmlzaCBjb21tZW50aW5nIHRoaXMgcmVnZXhwXG5cdFx0XHRjb25zdCB0ZF9tYXRjaCA9IHNoKCkubWF0Y2goL14oXFx8XFwrfFxcfHwhKSgoPzooW15bfF0qPylcXHwoPyFcXHwpKT8oLiopKSQvKTtcblx0XHRcdGlmICh0ZF9tYXRjaFsxXSA9PT0gJ3wrJykge1xuXHRcdFx0XHRwcygnPGNhcHRpb24nKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBzKGA8dCR7dGRfbWF0Y2hbMV0gPT09ICd8JyA/ICdkJyA6ICdoJ31gKTtcblx0XHRcdH1cblx0XHRcdGlmICh0ZF9tYXRjaFszXSkge1xuXHRcdFx0XHQvLyBwcygnICcgKyB0ZF9tYXRjaFszXSlcblx0XHRcdFx0bWF0Y2hfaSA9IDQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYXRjaF9pID0gMjtcblx0XHRcdH1cblx0XHRcdHBzKCc+Jyk7XG5cdFx0XHRpZiAodGRfbWF0Y2hbMV0gPT09ICd8KycpIHtcblx0XHRcdFx0cHMocGFyc2VfaW5saW5lX25vd2lraSh0ZF9tYXRjaFttYXRjaF9pXSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gdXNlIHx8IG9yICEhIGFzIGEgY2VsbCBzZXBhcmF0b3IgZGVwZW5kaW5nIG9uIGNvbnRleHRcblx0XHRcdFx0Ly8gTk9URTogd2hlbiBzcGxpdCgpIGlzIHBhc3NlZCBhIHJlZ2V4cCBtYWtlIHN1cmUgdG8gdXNlIG5vbi1jYXB0dXJpbmcgYnJhY2tldHNcblx0XHRcdFx0dGRfbGluZSA9IHRkX21hdGNoW21hdGNoX2ldLnNwbGl0KHRkX21hdGNoWzFdID09PSAnfCcgPyAnfHwnIDogL1xcfFxcfHwhIS8pO1xuXHRcdFx0XHRwcyhwYXJzZV9pbmxpbmVfbm93aWtpKHRkX2xpbmUuc2hpZnQoKSkpO1xuXHRcdFx0XHR3aGlsZSAodGRfbGluZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0bGwudW5zaGlmdCh0ZF9tYXRjaFsxXSArIHRkX2xpbmUucG9wKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRsZXQgdGMgPSAwO1xuXHRcdFx0Y29uc3QgdGQgPSBbXTtcblx0XHRcdHdoaWxlIChyZW1haW4oKSkge1xuXHRcdFx0XHR0ZC5wdXNoKHNoKCkpO1xuXHRcdFx0XHRpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygnfCcpKSB7XG5cdFx0XHRcdFx0aWYgKCF0Yykge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjaGFyQXRQb2ludCgxKSA9PT0gJ30nKSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSdyZSBhdCB0aGUgb3V0ZXItbW9zdCBsZXZlbCAobm8gbmVzdGVkIHRhYmxlcyksIHNraXAgdG8gdGQgcGFyc2Vcblx0XHRcdFx0XHRcdHRjLS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKCF0YyAmJiBjb21wYXJlTGluZVN0cmluZ09yUmVnKCchJykpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fSBlbHNlIGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKCd7fCcpKSB7XG5cdFx0XHRcdFx0dGMrKztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cHMoSW5zdGEuY29udmVydCh0ZCkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfcHJlID0gKCkgPT4ge1xuXHRcdFx0cHMoJzxwcmU+Jyk7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdGVuZGwoYCR7cGFyc2VfaW5saW5lX25vd2lraShsbFswXS5zbGljZSgxKSl9XFxuYCk7XG5cdFx0XHR9IHdoaWxlIChyZW1haW4oKSAmJiBjb21wYXJlTGluZVN0cmluZ09yUmVnKCcgJykpO1xuXHRcdFx0cHMoJzwvcHJlPicpO1xuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfYmxvY2tfaW1hZ2UgPSAoKSA9PiB7XG5cdFx0XHRwcyhwYXJzZV9pbWFnZShzaCgpKSk7XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV9pbWFnZSA9IChzdHIpID0+IHtcblx0XHRcdC8vIGdldCB3aGF0J3MgaW4gYmV0d2VlbiBcIltbSW1hZ2U6XCIgYW5kIFwiXV1cIlxuXHRcdFx0bGV0IHRhZyA9IHN0ci5zdWJzdHJpbmcoc3RyLmluZGV4T2YoJzonKSArIDEsIHN0ci5sZW5ndGggLSAyKTtcblx0XHRcdGxldCB3aWR0aDtcblx0XHRcdGxldCBhdHRyID0gW107XG5cdFx0XHRsZXQgZmlsZW5hbWU7XG5cdFx0XHRsZXQgY2FwdGlvbiA9ICcnO1xuXHRcdFx0bGV0IHRodW1iID0gMDtcblx0XHRcdGxldCBmcmFtZSA9IDA7XG5cdFx0XHRsZXQgY2VudGVyID0gMDtcblx0XHRcdGxldCBhbGlnbiA9ICcnO1xuXHRcdFx0aWYgKC9cXHwvLnRlc3QodGFnKSkge1xuXHRcdFx0XHQvLyBtYW5hZ2UgbmVzdGVkIGxpbmtzXG5cdFx0XHRcdGxldCBuZXN0aW5nID0gMDtcblx0XHRcdFx0bGV0IGxhc3RfYXR0cjtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IHRhZy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG5cdFx0XHRcdFx0aWYgKHRhZy5jaGFyQXQoaSkgPT09ICd8JyAmJiAhbmVzdGluZykge1xuXHRcdFx0XHRcdFx0bGFzdF9hdHRyID0gdGFnLnNsaWNlKGkgKyAxKTtcblx0XHRcdFx0XHRcdHRhZyA9IHRhZy5zbGljZSgwLCBNYXRoLm1heCgwLCBpKSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3dpdGNoICh0YWcuc2xpY2UoaSAtIDEsIGkgLSAxICsgMikpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAnXV0nOlxuXHRcdFx0XHRcdFx0XHRcdG5lc3RpbmcrKztcblx0XHRcdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ1tbJzpcblx0XHRcdFx0XHRcdFx0XHRuZXN0aW5nLS07XG5cdFx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRhdHRyID0gdGFnLnNwbGl0KC9cXHMqXFx8XFxzKi8pO1xuXHRcdFx0XHRhdHRyLnB1c2gobGFzdF9hdHRyKTtcblx0XHRcdFx0ZmlsZW5hbWUgPSBhdHRyLnNoaWZ0KCk7XG5cdFx0XHRcdGxldCB3X21hdGNoO1xuXHRcdFx0XHRmb3IgKDsgYXR0ci5sZW5ndGggPiAwOyBhdHRyLnNoaWZ0KCkpIHtcblx0XHRcdFx0XHR3X21hdGNoID0gYXR0clswXS5tYXRjaCgvXihcXGQqKSg/OltweF0qXFxkKik/cHgkLyk7XG5cdFx0XHRcdFx0aWYgKHdfbWF0Y2gpIHtcblx0XHRcdFx0XHRcdFssIHdpZHRoXSA9IHdfbWF0Y2g7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN3aXRjaCAoYXR0clswXSkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICd0aHVtYic6XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ3RodW1ibmFpbCc6XG5cdFx0XHRcdFx0XHRcdFx0dGh1bWIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGZyYW1lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnZnJhbWUnOlxuXHRcdFx0XHRcdFx0XHRcdGZyYW1lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbm9uZSc6XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ3JpZ2h0Jzpcblx0XHRcdFx0XHRcdFx0Y2FzZSAnbGVmdCc6XG5cdFx0XHRcdFx0XHRcdFx0Y2VudGVyID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0W2FsaWduXSA9IGF0dHI7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2NlbnRlcic6XG5cdFx0XHRcdFx0XHRcdFx0Y2VudGVyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRhbGlnbiA9ICdub25lJztcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHRpZiAoYXR0ci5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFtjYXB0aW9uXSA9IGF0dHI7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZmlsZW5hbWUgPSB0YWc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV9pbmxpbmVfbm93aWtpID0gKHN0cikgPT4ge1xuXHRcdFx0bGV0IHN0YXJ0O1xuXHRcdFx0bGV0IGxhc3RlbmQgPSAwO1xuXHRcdFx0bGV0IHN1YnN0YXJ0ID0gMDtcblx0XHRcdGxldCBuZXN0bGV2ID0gMDtcblx0XHRcdGxldCBvcGVuO1xuXHRcdFx0bGV0IGNsb3NlO1xuXHRcdFx0bGV0IHN1Ymxvb3A7XG5cdFx0XHRsZXQgaHRtbCA9ICcnO1xuXHRcdFx0d2hpbGUgKChzdGFydCA9IHN0ci5pbmRleE9mKCc8bm8nLmNvbmNhdCgnd2lraScsICc+JyksIHN1YnN0YXJ0KSkgIT09IC0xKSB7XG5cdFx0XHRcdGh0bWwgKz0gcGFyc2VfaW5saW5lX3dpa2koc3RyLnN1YnN0cmluZyhsYXN0ZW5kLCBzdGFydCkpO1xuXHRcdFx0XHRzdGFydCArPSA4O1xuXHRcdFx0XHRzdWJzdGFydCA9IHN0YXJ0O1xuXHRcdFx0XHRzdWJsb29wID0gdHJ1ZTtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdG9wZW4gPSBzdHIuaW5kZXhPZignPG5vJy5jb25jYXQoJ3dpa2knLCAnPicpLCBzdWJzdGFydCk7XG5cdFx0XHRcdFx0Y2xvc2UgPSBzdHIuaW5kZXhPZignPC9ubycuY29uY2F0KCd3aWtpJywgJz4nKSwgc3Vic3RhcnQpO1xuXHRcdFx0XHRcdGlmIChjbG9zZSA8PSBvcGVuIHx8IG9wZW4gPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRpZiAoY2xvc2UgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBodG1sICsgaHRtbF9lbnRpdGllcyhzdHIuc2xpY2Uoc3RhcnQpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN1YnN0YXJ0ID0gY2xvc2UgKyA5O1xuXHRcdFx0XHRcdFx0aWYgKG5lc3RsZXYpIHtcblx0XHRcdFx0XHRcdFx0bmVzdGxldi0tO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0bGFzdGVuZCA9IHN1YnN0YXJ0O1xuXHRcdFx0XHRcdFx0XHRodG1sICs9IGh0bWxfZW50aXRpZXMoc3RyLnN1YnN0cmluZyhzdGFydCwgbGFzdGVuZCAtIDkpKTtcblx0XHRcdFx0XHRcdFx0c3VibG9vcCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdWJzdGFydCA9IG9wZW4gKyA4O1xuXHRcdFx0XHRcdFx0bmVzdGxldisrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSB3aGlsZSAoc3VibG9vcCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaHRtbCArIHBhcnNlX2lubGluZV93aWtpKHN0ci5zbGljZShsYXN0ZW5kKSk7XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV9pbmxpbmVfaW1hZ2VzID0gKHN0cikgPT4ge1xuXHRcdFx0bGV0IHN0YXJ0O1xuXHRcdFx0bGV0IHN1YnN0YXJ0ID0gMDtcblx0XHRcdGxldCBuZXN0bGV2ID0gMDtcblx0XHRcdGxldCBsb29wO1xuXHRcdFx0bGV0IGNsb3NlO1xuXHRcdFx0bGV0IG9wZW47XG5cdFx0XHRsZXQgd2lraTtcblx0XHRcdGxldCBodG1sO1xuXHRcdFx0d2hpbGUgKChzdGFydCA9IHN0ci5pbmRleE9mKCdbWycsIHN1YnN0YXJ0KSkgIT09IC0xKSB7XG5cdFx0XHRcdGlmIChuZXcgUmVnRXhwKGBeKEltYWdlfEZpbGV8JHtJbnN0YS5jb25mLmxvY2FsZS5pbWFnZX0pOmAsICdpJykudGVzdChzdHIuc2xpY2Uoc3RhcnQgKyAyKSkpIHtcblx0XHRcdFx0XHRsb29wID0gdHJ1ZTtcblx0XHRcdFx0XHRzdWJzdGFydCA9IHN0YXJ0O1xuXHRcdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRcdHN1YnN0YXJ0ICs9IDI7XG5cdFx0XHRcdFx0XHRjbG9zZSA9IHN0ci5pbmRleE9mKCddXScsIHN1YnN0YXJ0KTtcblx0XHRcdFx0XHRcdG9wZW4gPSBzdHIuaW5kZXhPZignW1snLCBzdWJzdGFydCk7XG5cdFx0XHRcdFx0XHRpZiAoY2xvc2UgPD0gb3BlbiB8fCBvcGVuID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRpZiAoY2xvc2UgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHN0cjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRzdWJzdGFydCA9IGNsb3NlO1xuXHRcdFx0XHRcdFx0XHRpZiAobmVzdGxldikge1xuXHRcdFx0XHRcdFx0XHRcdG5lc3RsZXYtLTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR3aWtpID0gc3RyLnN1YnN0cmluZyhzdGFydCwgY2xvc2UgKyAyKTtcblx0XHRcdFx0XHRcdFx0XHRodG1sID0gcGFyc2VfaW1hZ2Uod2lraSk7XG5cdFx0XHRcdFx0XHRcdFx0c3RyID0gc3RyLnJlcGxhY2Uod2lraSwgaHRtbCk7XG5cdFx0XHRcdFx0XHRcdFx0c3Vic3RhcnQgPSBzdGFydCArIGh0bWwubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRcdGxvb3AgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c3Vic3RhcnQgPSBvcGVuO1xuXHRcdFx0XHRcdFx0XHRuZXN0bGV2Kys7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSB3aGlsZSAobG9vcCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fTtcblx0XHQvLyB0aGUgb3V0cHV0IG9mIHRoaXMgZnVuY3Rpb24gZG9lc24ndCByZXNwZWN0IHRoZSBGSUxPIHN0cnVjdHVyZSBvZiBIVE1MXG5cdFx0Ly8gYnV0IHNpbmNlIG1vc3QgYnJvd3NlcnMgY2FuIGhhbmRsZSBpdCBJJ2xsIHNhdmUgbXlzZWxmIHRoZSBoYXNzbGVcblx0XHRjb25zdCBwYXJzZV9pbmxpbmVfZm9ybWF0dGluZyA9IChzdHIpID0+IHtcblx0XHRcdGxldCBlbTtcblx0XHRcdGxldCBzdDtcblx0XHRcdGxldCBpO1xuXHRcdFx0bGV0IGxpO1xuXHRcdFx0bGV0IG8gPSAnJztcblx0XHRcdHdoaWxlICgoaSA9IHN0ci5pbmRleE9mKFwiJydcIiwgbGkpKSArIDEpIHtcblx0XHRcdFx0byArPSBzdHIuc3Vic3RyaW5nKGxpLCBpKTtcblx0XHRcdFx0bGkgPSBpICsgMjtcblx0XHRcdFx0aWYgKHN0ci5jaGFyQXQoaSArIDIpID09PSBcIidcIikge1xuXHRcdFx0XHRcdGxpKys7XG5cdFx0XHRcdFx0c3QgPSAhc3Q7XG5cdFx0XHRcdFx0byArPSBzdCA/ICc8c3Ryb25nPicgOiAnPC9zdHJvbmc+Jztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbSA9ICFlbTtcblx0XHRcdFx0XHRvICs9IGVtID8gJzxlbT4nIDogJzwvZW0+Jztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG8gKyBzdHIuc2xpY2UobGkpO1xuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfaW5saW5lX3dpa2kgPSAoc3RyKSA9PiB7XG5cdFx0XHRzdHIgPSBwYXJzZV9pbmxpbmVfaW1hZ2VzKHN0cik7XG5cdFx0XHRzdHIgPSBwYXJzZV9pbmxpbmVfZm9ybWF0dGluZyhzdHIpO1xuXHRcdFx0Ly8gbWF0aFxuXHRcdFx0c3RyID0gc3RyLnJlcGxhY2UoLzxtYXRoPiguKj8pPFxcL21hdGg+L2dpLCAnJyk7XG5cdFx0XHQvLyBCdWlsZCBhIE1lZGlhd2lraS1mb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcblx0XHRcdGxldCBkYXRlID0gbmV3IERhdGUoKTtcblx0XHRcdGxldCBtaW51dGVzID0gZGF0ZS5nZXRVVENNaW51dGVzKCk7XG5cdFx0XHRpZiAobWludXRlcyA8IDEwKSB7XG5cdFx0XHRcdG1pbnV0ZXMgPSBgMCR7bWludXRlc31gO1xuXHRcdFx0fVxuXHRcdFx0ZGF0ZSA9IGYoXG5cdFx0XHRcdCc/Oj8sID8gPyA/IChVVEMpJyxcblx0XHRcdFx0ZGF0ZS5nZXRVVENIb3VycygpLFxuXHRcdFx0XHRtaW51dGVzLFxuXHRcdFx0XHRkYXRlLmdldFVUQ0RhdGUoKSxcblx0XHRcdFx0SW5zdGEuY29uZi5sb2NhbGUubW9udGhzW2RhdGUuZ2V0VVRDTW9udGgoKV0sXG5cdFx0XHRcdGRhdGUuZ2V0VVRDRnVsbFllYXIoKVxuXHRcdFx0KTtcblx0XHRcdC8vIHRleHQgZm9ybWF0dGluZ1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0c3RyXG5cdFx0XHRcdFx0Ly8gc2lnbmF0dXJlc1xuXHRcdFx0XHRcdC5yZXBsYWNlKC9+ezV9KD8hfikvZywgZGF0ZSlcblx0XHRcdFx0XHQucmVwbGFjZSgvfns0fSg/IX4pL2csIGAke0luc3RhLmNvbmYudXNlci5uYW1lfSAke2RhdGV9YClcblx0XHRcdFx0XHQucmVwbGFjZSgvfnszfSg/IX4pL2csIEluc3RhLmNvbmYudXNlci5uYW1lKVxuXHRcdFx0XHRcdC8vIFtbOkNhdGVnb3J5Oi4uLl1dLCBbWzpJbWFnZTouLi5dXSwgZXRjLi4uXG5cdFx0XHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0XHRgXFxcXFtcXFxcWzooKD86JHtJbnN0YS5jb25mLmxvY2FsZS5jYXRlZ29yeX18SW1hZ2V8RmlsZXwke0luc3RhLmNvbmYubG9jYWxlLmltYWdlfXwke0luc3RhLmNvbmYud2lraS5pbnRlcndpa2l9KTpbXnxdKj8pXFxcXF1cXFxcXShcXFxcdyopYCxcblx0XHRcdFx0XHRcdFx0J2dpJ1xuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdChfJDAsICQxLCAkMikgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XHRcIjxhIGhyZWY9Jz8nPj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdFx0SW5zdGEuY29uZi5wYXRocy5hcnRpY2xlcyArIGh0bWxlc2NhcGVfYXR0cigkMSksXG5cdFx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQxKSArIGh0bWxlc2NhcGVfdGV4dCgkMilcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHN0cmFpZ2h0IGNhdGVnb3J5IGFuZCBpbnRlcndpa2kgdGFnc1xuXHRcdFx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0bmV3IFJlZ0V4cChcblx0XHRcdFx0XHRcdFx0YFxcXFxbXFxcXFsoPzoke0luc3RhLmNvbmYubG9jYWxlLmNhdGVnb3J5fXwke0luc3RhLmNvbmYud2lraS5pbnRlcndpa2l9KTouKj9cXFxcXVxcXFxdYCxcblx0XHRcdFx0XHRcdFx0J2dpJ1xuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC8vIFtbOkNhdGVnb3J5Oi4uLnxMaW5rc11dLCBbWzpJbWFnZTouLi58TGlua3NdXSwgZXRjLi4uXG5cdFx0XHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0XHRgXFxcXFtcXFxcWzooKD86JHtJbnN0YS5jb25mLmxvY2FsZS5jYXRlZ29yeX18SW1hZ2V8RmlsZXwke0luc3RhLmNvbmYubG9jYWxlLmltYWdlfXwke0luc3RhLmNvbmYud2lraS5pbnRlcndpa2l9KTouKj8pXFxcXHwoW15cXFxcXV0rPylcXFxcXVxcXFxdKFxcXFx3KilgLFxuXHRcdFx0XHRcdFx0XHQnZ2knXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0KF8kMCwgJDEsICQyLCAkMykgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XHRcIjxhIGhyZWY9Jz8nPj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdFx0SW5zdGEuY29uZi5wYXRocy5hcnRpY2xlcyArIGh0bWxlc2NhcGVfYXR0cigkMSksXG5cdFx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQyKSArIGh0bWxlc2NhcGVfdGV4dCgkMylcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0Ly8gW1svUmVsYXRpdmUgbGlua3NdXVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFtcXFsoXFwvW158XSo/KV1dL2csIChfJDAsICQxKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcIjxhIGhyZWY9Jz8nPj88L2E+XCIsIEluc3RhLmNvbmYuYmFzZVVybCArIGh0bWxlc2NhcGVfYXR0cigkMSksIGh0bWxlc2NhcGVfdGV4dCgkMSkpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Ly8gW1svUmVwbGFjZWR8UmVsYXRpdmUgbGlua3NdXVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFtcXFsoXFwvLio/KVxcfCguKz8pXV0vZywgKF8kMCwgJDEsICQyKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcIjxhIGhyZWY9Jz8nPj88L2E+XCIsIEluc3RhLmNvbmYuYmFzZVVybCArIGh0bWxlc2NhcGVfYXR0cigkMSksIGh0bWxlc2NhcGVfdGV4dCgkMikpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Ly8gW1tDb21tb24gbGlua3NdXVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFtcXFsoW15bfF0qPyldXShcXHcqKS9nLCAoXyQwLCAkMSwgJDIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcIjxhIGhyZWY9Jz8nPj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdEluc3RhLmNvbmYucGF0aHMuYXJ0aWNsZXMgKyBodG1sZXNjYXBlX2F0dHIoJDEpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDEpICsgaHRtbGVzY2FwZV90ZXh0KCQyKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIFtbUmVwbGFjZWR8TGlua3NdXVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFtcXFsoW15bXSo/KVxcfChbXlxcXV0rPyldXShcXHcqKS9nLCAoXyQwLCAkMSwgJDIsICQzKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XCI8YSBocmVmPSc/Jz4/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRJbnN0YS5jb25mLnBhdGhzLmFydGljbGVzICsgaHRtbGVzY2FwZV9hdHRyKCQxKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQyKSArIGh0bWxlc2NhcGVfdGV4dCgkMylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyBbW1N0cmlwcGVkOk5hbWVzcGFjZXxOYW1lc3BhY2VdXVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFtcXFsoW15cXF1dKj86KT8oLio/KSggKlxcKC4qP1xcKSk/XFx8XV0vZywgKF8kMCwgJDEsICQyLCAkMykgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFwiPGEgaHJlZj0nPyc+PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0SW5zdGEuY29uZi5wYXRocy5hcnRpY2xlcyArIGh0bWxlc2NhcGVfYXR0cigkMSkgKyBodG1sZXNjYXBlX2F0dHIoJDIpICsgaHRtbGVzY2FwZV9hdHRyKCQzKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQyKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIEV4dGVybmFsIGxpbmtzXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcWyhodHRwcz98bmV3c3xmdHB8bWFpbHRvfGdvcGhlcnxpcmMpOihcXC8qKShbXlxcXV0qPykgKC4qPyldL2csIChfJDAsICQxLCAkMiwgJDMsICQ0KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XCI8YSBjbGFzcz0nZXh0ZXJuYWwnIGhyZWY9Jz86Pyc+PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV9hdHRyKCQxKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV9hdHRyKCQyKSArIGh0bWxlc2NhcGVfYXR0cigkMyksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkNClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbaHR0cDpcXC9cXC8oLio/KV0vZywgKF8kMCwgJDEpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFwiPGEgY2xhc3M9J2V4dGVybmFsJyBocmVmPSdodHRwOi8vPyc+WyNdPC9hPlwiLCBodG1sZXNjYXBlX2F0dHIoJDEpKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFsobmV3c3xmdHB8bWFpbHRvfGdvcGhlcnxpcmMpOihcXC8qKSguKj8pXS9nLCAoXyQwLCAkMSwgJDIsICQzKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XCI8YSBjbGFzcz0nZXh0ZXJuYWwnIGhyZWY9Jz86Pyc+Pzo/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX2F0dHIoJDEpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX2F0dHIoJDIpICsgaHRtbGVzY2FwZV9hdHRyKCQzKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQxKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQyKSArIGh0bWxlc2NhcGVfdGV4dCgkMylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucmVwbGFjZShcblx0XHRcdFx0XHRcdC8oXnwgKShodHRwcz98bmV3c3xmdHB8bWFpbHRvfGdvcGhlcnxpcmMpOihcXC8qKShbXiAkXSpbXiAhJCwuOjs/XSkvZyxcblx0XHRcdFx0XHRcdChfJDAsICQxLCAkMiwgJDMsICQ0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcdFwiPzxhIGNsYXNzPSdleHRlcm5hbCcgaHJlZj0nPzo/Jz4/Oj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQxKSxcblx0XHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX2F0dHIoJDIpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfYXR0cigkMykgKyBodG1sZXNjYXBlX2F0dHIoJDQpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMiksXG5cdFx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQzKSArIGh0bWxlc2NhcGVfdGV4dCgkNClcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ19fTk9UT0NfXycsICcnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCdfX05PSU5ERVhfXycsICcnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCdfX0lOREVYX18nLCAnJylcblx0XHRcdFx0XHQucmVwbGFjZSgnX19OT0VESVRTRUNUSU9OX18nLCAnJylcblx0XHRcdCk7XG5cdFx0fTtcblx0XHQvLyBiZWdpbiBwYXJzaW5nXG5cdFx0Zm9yICg7IHJlbWFpbigpOyApIHtcblx0XHRcdGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKC9eKD17MSw2fSkoLiopXFwxKC4qKSQvKSkge1xuXHRcdFx0XHRwID0gMDtcblx0XHRcdFx0ZW5kbChmKCc8aD8+PzwvaD8+PycsIHJbMV0ubGVuZ3RoLCBwYXJzZV9pbmxpbmVfbm93aWtpKHJbMl0pLCByWzFdLmxlbmd0aCwgclszXSkpO1xuXHRcdFx0fSBlbHNlIGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKC9eWyMqOjtdLykpIHtcblx0XHRcdFx0cCA9IDA7XG5cdFx0XHRcdHBhcnNlX2xpc3QoKTtcblx0XHRcdH0gZWxzZSBpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygnICcpKSB7XG5cdFx0XHRcdHAgPSAwO1xuXHRcdFx0XHRwYXJzZV9wcmUoKTtcblx0XHRcdH0gZWxzZSBpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygne3wnKSkge1xuXHRcdFx0XHRwID0gMDtcblx0XHRcdFx0cGFyc2VfdGFibGUoKTtcblx0XHRcdH0gZWxzZSBpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygvXi0tLS0rJC8pKSB7XG5cdFx0XHRcdHAgPSAwO1xuXHRcdFx0XHRlbmRsKCc8aHI+Jyk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoSW5zdGEuQkxPQ0tfSU1BR0UpKSB7XG5cdFx0XHRcdHAgPSAwO1xuXHRcdFx0XHRwYXJzZV9ibG9ja19pbWFnZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaGFuZGxlIHBhcmFncmFwaHNcblx0XHRcdFx0aWYgKGNvbXBhcmVMaW5lU3RyaW5nKCcnKSkge1xuXHRcdFx0XHRcdHAgPSByZW1haW4oKSA+IDEgJiYgbGxbMV0gPT09ICcnO1xuXHRcdFx0XHRcdGlmIChwKSB7XG5cdFx0XHRcdFx0XHRlbmRsKCc8cD48YnI+Jyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmICghcCkge1xuXHRcdFx0XHRcdFx0cHMoJzxwPicpO1xuXHRcdFx0XHRcdFx0cCA9IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBzKGAke3BhcnNlX2lubGluZV9ub3dpa2kobGxbMF0pfSBgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzaCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbztcblx0fTtcblx0Y29uc3Qgd2lraTJodG1sID0gKHR4dCwgYmFzZXVybCkgPT4ge1xuXHRcdEluc3RhLmNvbmYuYmFzZVVybCA9IGJhc2V1cmw7XG5cdFx0cmV0dXJuIEluc3RhLmNvbnZlcnQodHh0KTtcblx0fTtcblx0Ly8gRU5ERklMRTogbGl2ZXByZXZpZXcuanNcblx0Ly8gU1RBUlRGSUxFOiBwYWdlaW5mby5qc1xuXHRjb25zdCBwb3B1cEZpbHRlclBhZ2VTaXplID0gKGRhdGEpID0+IHtcblx0XHRyZXR1cm4gZm9ybWF0Qnl0ZXMoZGF0YS5sZW5ndGgpO1xuXHR9O1xuXHRjb25zdCBwb3B1cEZpbHRlckNvdW50TGlua3MgPSAoZGF0YSkgPT4ge1xuXHRcdGNvbnN0IG51bSA9IGNvdW50TGlua3MoZGF0YSk7XG5cdFx0cmV0dXJuIGAke1N0cmluZyhudW0pfSZuYnNwOyR7bnVtID09PSAxID8gcG9wdXBTdHJpbmcoJ3dpa2lMaW5rJykgOiBwb3B1cFN0cmluZygnd2lraUxpbmtzJyl9YDtcblx0fTtcblx0Y29uc3QgcG9wdXBGaWx0ZXJDb3VudEltYWdlcyA9IChkYXRhKSA9PiB7XG5cdFx0Y29uc3QgbnVtID0gY291bnRJbWFnZXMoZGF0YSk7XG5cdFx0cmV0dXJuIGAke1N0cmluZyhudW0pfSZuYnNwOyR7bnVtID09PSAxID8gcG9wdXBTdHJpbmcoJ2ltYWdlJykgOiBwb3B1cFN0cmluZygnaW1hZ2VzJyl9YDtcblx0fTtcblx0Y29uc3QgcG9wdXBGaWx0ZXJDb3VudENhdGVnb3JpZXMgPSAoZGF0YSkgPT4ge1xuXHRcdGNvbnN0IG51bSA9IGNvdW50Q2F0ZWdvcmllcyhkYXRhKTtcblx0XHRyZXR1cm4gYCR7U3RyaW5nKG51bSl9Jm5ic3A7JHtudW0gPT09IDEgPyBwb3B1cFN0cmluZygnY2F0ZWdvcnknKSA6IHBvcHVwU3RyaW5nKCdjYXRlZ29yaWVzJyl9YDtcblx0fTtcblx0Y29uc3QgcG9wdXBGaWx0ZXJMYXN0TW9kaWZpZWQgPSAoX2RhdGEsIGRvd25sb2FkKSA9PiB7XG5cdFx0Y29uc3QgbGFzdG1vZCA9IGRvd25sb2FkLmxhc3RNb2RpZmllZDtcblx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdGNvbnN0IGFnZSA9IG5vdyAtIGxhc3Rtb2Q7XG5cdFx0aWYgKGxhc3Rtb2QgJiYgZ2V0VmFsdWVPZigncG9wdXBMYXN0TW9kaWZpZWQnKSkge1xuXHRcdFx0cmV0dXJuIHRwcmludGYoJyVzIG9sZCcsIFtmb3JtYXRBZ2UoYWdlKV0pLnJlcGxhY2UoLyAvZywgJyZuYnNwOycpO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cdGNvbnN0IGZvcm1hdEFnZSA9IChhZ2UpID0+IHtcblx0XHQvLyBjb2VyY2UgaW50byBhIG51bWJlclxuXHRcdGxldCBhID0gMCArIGFnZTtcblx0XHRjb25zdCBhYSA9IGE7XG5cdFx0Y29uc3Qgc2VjbGVuID0gMTAwMDtcblx0XHRjb25zdCBtaW5sZW4gPSA2MCAqIHNlY2xlbjtcblx0XHRjb25zdCBob3VybGVuID0gNjAgKiBtaW5sZW47XG5cdFx0Y29uc3QgZGF5bGVuID0gMjQgKiBob3VybGVuO1xuXHRcdGNvbnN0IHdlZWtsZW4gPSA3ICogZGF5bGVuO1xuXHRcdGNvbnN0IG51bXdlZWtzID0gKGEgLSAoYSAlIHdlZWtsZW4pKSAvIHdlZWtsZW47XG5cdFx0YSAtPSBudW13ZWVrcyAqIHdlZWtsZW47XG5cdFx0Y29uc3Qgc3dlZWtzID0gYWRkdW5pdChudW13ZWVrcywgJ3dlZWsnKTtcblx0XHRjb25zdCBudW1kYXlzID0gKGEgLSAoYSAlIGRheWxlbikpIC8gZGF5bGVuO1xuXHRcdGEgLT0gbnVtZGF5cyAqIGRheWxlbjtcblx0XHRjb25zdCBzZGF5cyA9IGFkZHVuaXQobnVtZGF5cywgJ2RheScpO1xuXHRcdGNvbnN0IG51bWhvdXJzID0gKGEgLSAoYSAlIGhvdXJsZW4pKSAvIGhvdXJsZW47XG5cdFx0YSAtPSBudW1ob3VycyAqIGhvdXJsZW47XG5cdFx0Y29uc3Qgc2hvdXJzID0gYWRkdW5pdChudW1ob3VycywgJ2hvdXInKTtcblx0XHRjb25zdCBudW1taW5zID0gKGEgLSAoYSAlIG1pbmxlbikpIC8gbWlubGVuO1xuXHRcdGEgLT0gbnVtbWlucyAqIG1pbmxlbjtcblx0XHRjb25zdCBzbWlucyA9IGFkZHVuaXQobnVtbWlucywgJ21pbnV0ZScpO1xuXHRcdGNvbnN0IG51bXNlY3MgPSAoYSAtIChhICUgc2VjbGVuKSkgLyBzZWNsZW47XG5cdFx0YSAtPSBudW1zZWNzICogc2VjbGVuO1xuXHRcdGNvbnN0IHNzZWNzID0gYWRkdW5pdChudW1zZWNzLCAnc2Vjb25kJyk7XG5cdFx0aWYgKGFhID4gNCAqIHdlZWtsZW4pIHtcblx0XHRcdHJldHVybiBzd2Vla3M7XG5cdFx0fVxuXHRcdGlmIChhYSA+IHdlZWtsZW4pIHtcblx0XHRcdHJldHVybiBgJHtzd2Vla3N9ICR7c2RheXN9YDtcblx0XHR9XG5cdFx0aWYgKGFhID4gZGF5bGVuKSB7XG5cdFx0XHRyZXR1cm4gYCR7c2RheXN9ICR7c2hvdXJzfWA7XG5cdFx0fVxuXHRcdGlmIChhYSA+IDYgKiBob3VybGVuKSB7XG5cdFx0XHRyZXR1cm4gc2hvdXJzO1xuXHRcdH1cblx0XHRpZiAoYWEgPiBob3VybGVuKSB7XG5cdFx0XHRyZXR1cm4gYCR7c2hvdXJzfSAke3NtaW5zfWA7XG5cdFx0fVxuXHRcdGlmIChhYSA+IDEwICogbWlubGVuKSB7XG5cdFx0XHRyZXR1cm4gc21pbnM7XG5cdFx0fVxuXHRcdGlmIChhYSA+IG1pbmxlbikge1xuXHRcdFx0cmV0dXJuIGAke3NtaW5zfSAke3NzZWNzfWA7XG5cdFx0fVxuXHRcdHJldHVybiBzc2Vjcztcblx0fTtcblx0Y29uc3QgYWRkdW5pdCA9IChudW0sIHN0cikgPT4ge1xuXHRcdHJldHVybiBgJHtudW19ICR7bnVtID09PSAxID8gcG9wdXBTdHJpbmcoc3RyKSA6IHBvcHVwU3RyaW5nKGAke3N0cn1zYCl9YDtcblx0fTtcblx0Y29uc3QgcnVuUG9wdXBGaWx0ZXJzID0gKGxpc3QsIGRhdGEsIGRvd25sb2FkKSA9PiB7XG5cdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGxpc3QpIHtcblx0XHRcdGlmIChlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IHMgPSBlbGVtZW50KGRhdGEsIGRvd25sb2FkLCBkb3dubG9hZC5vd25lci5hcnRpY2xlKTtcblx0XHRcdFx0aWYgKHMpIHtcblx0XHRcdFx0XHRyZXQucHVzaChzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBnZXRQYWdlSW5mbyA9IChkYXRhLCBkb3dubG9hZCkgPT4ge1xuXHRcdGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHBvcHVwU3RyaW5nKCdFbXB0eSBwYWdlJyk7XG5cdFx0fVxuXHRcdGNvbnN0IHBvcHVwRmlsdGVycyA9IGdldFZhbHVlT2YoJ3BvcHVwRmlsdGVycycpIHx8IFtdO1xuXHRcdGNvbnN0IGV4dHJhUG9wdXBGaWx0ZXJzID0gZ2V0VmFsdWVPZignZXh0cmFQb3B1cEZpbHRlcnMnKSB8fCBbXTtcblx0XHRjb25zdCBwYWdlSW5mb0FycmF5ID0gcnVuUG9wdXBGaWx0ZXJzKFsuLi5wb3B1cEZpbHRlcnMsIC4uLmV4dHJhUG9wdXBGaWx0ZXJzXSwgZGF0YSwgZG93bmxvYWQpO1xuXHRcdGxldCBwYWdlSW5mbyA9IHBhZ2VJbmZvQXJyYXkuam9pbignLCAnKTtcblx0XHRpZiAocGFnZUluZm8gIT09ICcnKSB7XG5cdFx0XHRwYWdlSW5mbyA9IHVwY2FzZUZpcnN0KHBhZ2VJbmZvKTtcblx0XHR9XG5cdFx0cmV0dXJuIHBhZ2VJbmZvO1xuXHR9O1xuXHQvLyB0aGlzIGNvdWxkIGJlIGltcHJvdmVkIVxuXHRjb25zdCBjb3VudExpbmtzID0gKHdpa2lUZXh0KSA9PiB7XG5cdFx0cmV0dXJuIHdpa2lUZXh0LnNwbGl0KCdbWycpLmxlbmd0aCAtIDE7XG5cdH07XG5cdC8vIGlmIE4gPSAjIG1hdGNoZXMsIG4gPSAjIGJyYWNrZXRzLCB0aGVuXG5cdC8vIFN0cmluZy5zcGxpdChyZWdleCkgaW50ZXJzcGVyc2VzIHRoZSBOKzEgc3BsaXQgZWxlbWVudHNcblx0Ly8gd2l0aCBObiBvdGhlciBlbGVtZW50cy4gU28gdG90YWwgbGVuZ3RoIGlzXG5cdC8vIEw9IE4rMSArIE5uID0gTihuKzEpKzEuIFNvIE49KEwtMSkvKG4rMSkuXG5cdGNvbnN0IGNvdW50SW1hZ2VzID0gKHdpa2lUZXh0KSA9PiB7XG5cdFx0cmV0dXJuICh3aWtpVGV4dC5zcGxpdChwZy5yZS5pbWFnZSkubGVuZ3RoIC0gMSkgLyAocGcucmUuaW1hZ2VCcmFja2V0Q291bnQgKyAxKTtcblx0fTtcblx0Y29uc3QgY291bnRDYXRlZ29yaWVzID0gKHdpa2lUZXh0KSA9PiB7XG5cdFx0cmV0dXJuICh3aWtpVGV4dC5zcGxpdChwZy5yZS5jYXRlZ29yeSkubGVuZ3RoIC0gMSkgLyAocGcucmUuY2F0ZWdvcnlCcmFja2V0Q291bnQgKyAxKTtcblx0fTtcblx0Y29uc3QgcG9wdXBGaWx0ZXJTdHViRGV0ZWN0ID0gKGRhdGEsIF9kb3dubG9hZCwgYXJ0aWNsZSkgPT4ge1xuXHRcdGNvbnN0IGNvdW50cyA9IHN0dWJDb3VudChkYXRhLCBhcnRpY2xlKTtcblx0XHRpZiAoY291bnRzLnJlYWwpIHtcblx0XHRcdHJldHVybiBwb3B1cFN0cmluZygnc3R1YicpO1xuXHRcdH1cblx0XHRpZiAoY291bnRzLnNlY3QpIHtcblx0XHRcdHJldHVybiBwb3B1cFN0cmluZygnc2VjdGlvbiBzdHViJyk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fTtcblx0Y29uc3QgcG9wdXBGaWx0ZXJEaXNhbWJpZ0RldGVjdCA9IChkYXRhLCBfZG93bmxvYWQsIGFydGljbGUpID0+IHtcblx0XHRpZiAoIWdldFZhbHVlT2YoJ3BvcHVwQWxsRGFic1N0dWJzJykgJiYgYXJ0aWNsZS5uYW1lc3BhY2UoKSkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gaXNEaXNhbWJpZyhkYXRhLCBhcnRpY2xlKSA/IHBvcHVwU3RyaW5nKCdkaXNhbWJpZycpIDogJyc7XG5cdH07XG5cdGNvbnN0IGZvcm1hdEJ5dGVzID0gKG51bSkgPT4ge1xuXHRcdHJldHVybiBudW0gPiA5NDkgPyBNYXRoLnJvdW5kKG51bSAvIDEwMCkgLyAxMCArIHBvcHVwU3RyaW5nKCdrQicpIDogYCR7bnVtfSZuYnNwOyR7cG9wdXBTdHJpbmcoJ2J5dGVzJyl9YDtcblx0fTtcblx0Ly8gRU5ERklMRTogcGFnZWluZm8uanNcblx0Ly8gU1RBUlRGSUxFOiB0aXRsZXMuanNcblx0LyoqXG5cdCAqIEBmaWxlb3ZlcnZpZXcgRGVmaW5lcyB0aGUge0Bzb3VyY2UgVGl0bGV9IGNsYXNzLCBhbmQgYXNzb2NpYXRlZCBjcnVmdHkgZnVuY3Rpb25zLlxuXHQgKlxuXHQgKiA8Y29kZT5UaXRsZTwvY29kZT4gZGVhbHMgd2l0aCBhcnRpY2xlIHRpdGxlcyBhbmQgdGhlaXIgdmFyaW91c1xuXHQgKiBmb3Jtcy4gIHtAc291cmNlIFN0cmluZ3dyYXBwZXJ9IGlzIHRoZSBwYXJlbnQgY2xhc3Mgb2Zcblx0ICogPGNvZGU+VGl0bGU8L2NvZGU+LCB3aGljaCBleGlzdHMgc2ltcGx5IHRvIG1ha2UgdGhpbmdzIGEgbGl0dGxlXG5cdCAqIG5lYXRlci5cblx0ICovXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IFN0cmluZ3dyYXBwZXIuXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKlxuXHQgKiBAY2xhc3MgdGhlIFN0cmluZ3dyYXBwZXIgY2xhc3MuIFRoaXMgYmFzZSBjbGFzcyBpcyBub3QgcmVhbGx5XG5cdCAqIHVzZWZ1bCBvbiBpdHMgb3duOyBpdCBqdXN0IHdyYXBzIHZhcmlvdXMgY29tbW9uIHN0cmluZyBvcGVyYXRpb25zLlxuXHQgKi9cblx0Y29uc3QgU3RyaW5nd3JhcHBlciA9IGZ1bmN0aW9uIFN0cmluZ3dyYXBwZXIoKSB7XG5cdFx0LyoqXG5cdFx0ICogV3JhcHBlciBmb3IgdGhpcy50b1N0cmluZygpLmluZGV4T2YoKVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHhcblx0XHQgKiBAdHlwZSBpbnRlZ2VyXG5cdFx0ICovXG5cdFx0dGhpcy5pbmRleE9mID0gZnVuY3Rpb24gKHgpIHtcblx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCkuaW5kZXhPZih4KTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhpcy52YWx1ZS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdCAqL1xuXHRcdHRoaXMudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFdyYXBwZXIgZm9yIHtAc291cmNlIFN0cmluZyNwYXJlblNwbGl0fSBhcHBsaWVkIHRvIHRoaXMudG9TdHJpbmcoKVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtSZWdFeHB9IHhcblx0XHQgKiBAdHlwZSBBcnJheVxuXHRcdCAqL1xuXHRcdHRoaXMuc3BsaXQgPSBmdW5jdGlvbiAoeCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoKS5zcGxpdCh4KTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFdyYXBwZXIgZm9yIHRoaXMudG9TdHJpbmcoKS5zdWJzdHJpbmcoKVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHhcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30geSAob3B0aW9uYWwpXG5cdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0ICovXG5cdFx0dGhpcy5zdWJzdHJpbmcgPSBmdW5jdGlvbiAoeCwgeSkge1xuXHRcdFx0aWYgKHkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZygpLnNsaWNlKE1hdGgubWF4KDAsIHgpKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCkuc3Vic3RyaW5nKHgsIHkpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogV3JhcHBlciBmb3IgdGhpcy50b1N0cmluZygpLnNwbGl0KClcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB4XG5cdFx0ICogQHR5cGUgQXJyYXlcblx0XHQgKi9cblx0XHR0aGlzLnNwbGl0ID0gZnVuY3Rpb24gKHgpIHtcblx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCkuc3BsaXQoeCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBXcmFwcGVyIGZvciB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZSgpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30geFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB5XG5cdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0ICovXG5cdFx0dGhpcy5yZXBsYWNlID0gZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZSh4LCB5KTtcblx0XHR9O1xuXHR9O1xuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyA8Y29kZT5UaXRsZTwvY29kZT4uXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKlxuXHQgKiBAY2xhc3MgVGhlIFRpdGxlIGNsYXNzLiBIb2xkcyBhcnRpY2xlIHRpdGxlcyBhbmQgY29udmVydHMgdGhlbSBpbnRvXG5cdCAqIHZhcmlvdXMgZm9ybXMuIEFsc28gZGVhbHMgd2l0aCBhbmNob3JzLCBieSB3aGljaCB3ZSBtZWFuIHRoZSBiaXRzXG5cdCAqIG9mIHRoZSBhcnRpY2xlIFVSTCBhZnRlciBhICMgY2hhcmFjdGVyLCByZXByZXNlbnRpbmcgbG9jYXRpb25zXG5cdCAqIHdpdGhpbiBhbiBhcnRpY2xlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVGhlIGluaXRpYWwgdmFsdWUgdG8gYXNzaWduIHRvIHRoZVxuXHQgKiBhcnRpY2xlLiBUaGlzIG11c3QgYmUgdGhlIGNhbm9uaWNhbCB0aXRsZSAoc2VlIHtAbGlua1xuXHQgKiBUaXRsZSN2YWx1ZX0uIE9taXQgdGhpcyBpbiB0aGUgY29uc3RydWN0b3IgYW5kIHVzZSBhbm90aGVyIGZ1bmN0aW9uXG5cdCAqIHRvIHNldCB0aGUgdGl0bGUgaWYgdGhpcyBpcyB1bmF2YWlsYWJsZS5cblx0ICovXG5cdGNsYXNzIFRpdGxlIGV4dGVuZHMgU3RyaW5nd3JhcHBlciB7XG5cdFx0Y29uc3RydWN0b3IodmFsKSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaGUgY2Fub25pY2FsIGFydGljbGUgdGl0bGUuIFRoaXMgbXVzdCBiZSBpbiBVVEYtOCB3aXRoIG5vXG5cdFx0XHQgKiBlbnRpdGllcywgZXNjYXBpbmcgb3IgbmFzdGllcy4gQWxzbywgdW5kZXJzY29yZXMgc2hvdWxkIGJlXG5cdFx0XHQgKiByZXBsYWNlZCB3aXRoIHNwYWNlcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaGUgY2Fub25pY2FsIGZvcm0gb2YgdGhlIGFuY2hvci4gVGhpcyBzaG91bGQgYmUgZXhhY3RseSBhc1xuXHRcdFx0ICogaXQgYXBwZWFycyBpbiB0aGUgVVJMLCBpLmUuIHdpdGggdGhlIC5DMy4wQSBiaXRzIGluLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmFuY2hvciA9ICcnO1xuXHRcdFx0dGhpcy5zZXRVdGYodmFsKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgY2Fub25pY2FsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhcnRpY2xlIHRpdGxlLCBvcHRpb25hbGx5IHdpdGhvdXQgYW5jaG9yLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBvbWl0QW5jaG9yXG5cdFx0ICogQGZpeG1lIERlY2lkZSBzcGVjcyBmb3IgYW5jaG9yXG5cdFx0ICogQHJldHVybiBTdHJpbmcgVGhlIGFydGljbGUgdGl0bGUgYW5kIHRoZSBhbmNob3IuXG5cdFx0ICovXG5cdFx0dG9TdHJpbmcob21pdEFuY2hvcikge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWUgKyAoIW9taXRBbmNob3IgJiYgdGhpcy5hbmNob3IgPyBgIyR7dGhpcy5hbmNob3JTdHJpbmcoKX1gIDogJycpO1xuXHRcdH1cblx0XHRhbmNob3JTdHJpbmcoKSB7XG5cdFx0XHRpZiAoIXRoaXMuYW5jaG9yKSB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblx0XHRcdGNvbnN0IHNwbGl0ID0gdGhpcy5hbmNob3Iuc3BsaXQoLygoPzpcXC5bXFxkQS1GXXsyfSkrKS8pO1xuXHRcdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXHRcdFx0bGV0IHZhbHVlO1xuXHRcdFx0Zm9yIChsZXQgaiA9IDE7IGogPCBsZW47IGogKz0gMikge1xuXHRcdFx0XHQvLyBGSVhNRSBzL2RlY29kZVVSSS9kZWNvZGVVUklDb21wb25lbnQvZyA/XG5cdFx0XHRcdHZhbHVlID0gc3BsaXRbal0uc3BsaXQoJy4nKS5qb2luKCclJyk7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvLyBjYW5ub3QgZGVjb2RlXG5cdFx0XHRcdH1cblx0XHRcdFx0c3BsaXRbal0gPSB2YWx1ZS5zcGxpdCgnXycpLmpvaW4oJyAnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzcGxpdC5qb2luKCcnKTtcblx0XHR9XG5cdFx0dXJsQW5jaG9yKCkge1xuXHRcdFx0Y29uc3Qgc3BsaXQgPSB0aGlzLmFuY2hvci5zcGxpdCgnLygoPzpbJV1bMC05QS1GXXsyfSkrKS8nKTtcblx0XHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGogPSAxOyBqIDwgbGVuOyBqICs9IDIpIHtcblx0XHRcdFx0c3BsaXRbal0gPSBzcGxpdFtqXS5zcGxpdCgnJScpLmpvaW4oJy4nKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzcGxpdC5qb2luKCcnKTtcblx0XHR9XG5cdFx0YW5jaG9yRnJvbVV0ZihzdHIpIHtcblx0XHRcdHRoaXMuYW5jaG9yID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zcGxpdCgnICcpLmpvaW4oJ18nKSlcblx0XHRcdFx0LnNwbGl0KCclM0EnKVxuXHRcdFx0XHQuam9pbignOicpXG5cdFx0XHRcdC5zcGxpdChcIidcIilcblx0XHRcdFx0LmpvaW4oJyUyNycpXG5cdFx0XHRcdC5zcGxpdCgnJScpXG5cdFx0XHRcdC5qb2luKCcuJyk7XG5cdFx0fVxuXHRcdGZyb21VUkwoaCkge1xuXHRcdFx0aWYgKHR5cGVvZiBoICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHQvLyBOT1RFIDogcGxheWluZyB3aXRoIGRlY29kZVVSSSwgZW5jb2RlVVJJLCBlc2NhcGUsIHVuZXNjYXBlLFxuXHRcdFx0Ly8gd2Ugc2VlbSB0byBiZSBhYmxlIHRvIHJlcGxpY2F0ZSB0aGUgSUUgYm9ya2VkIGVuY29kaW5nXG5cdFx0XHQvLyBJRSBkb2Vzbid0IGRvIHRoaXMgbmV3LWZhbmdsZWQgdXRmLTggdGhpbmcuXG5cdFx0XHQvLyBhbmQgaXQncyB3b3JzZSB0aGFuIHRoYXQuXG5cdFx0XHQvLyBJRSBzZWVtcyB0byB0cmVhdCB0aGUgcXVlcnkgc3RyaW5nIGRpZmZlcmVudGx5IHRvIHRoZSByZXN0IG9mIHRoZSB1cmxcblx0XHRcdC8vIHRoZSBxdWVyeSBpcyB0cmVhdGVkIGFzIGJvbmEtZmlkZSB1dGY4LCBidXQgdGhlIGZpcnN0IGJpdCBvZiB0aGUgdXJsIGlzIHBpc3NlZCBhcm91bmQgd2l0aFxuXHRcdFx0Ly8gd2UgZml4IHVwICYgZm9yIGFsbCBicm93c2VycywganVzdCBpbiBjYXNlLlxuXHRcdFx0Y29uc3Qgc3BsaXR0ZWQgPSBoLnNwbGl0KCc/Jyk7XG5cdFx0XHRzcGxpdHRlZFswXSA9IHNwbGl0dGVkWzBdLnNwbGl0KCcmJykuam9pbignJTI2Jyk7XG5cdFx0XHRoID0gc3BsaXR0ZWQuam9pbignPycpO1xuXHRcdFx0Y29uc3QgY29udHJpYnMgPSBwZy5yZS5jb250cmlicy5leGVjKGgpO1xuXHRcdFx0aWYgKGNvbnRyaWJzKSB7XG5cdFx0XHRcdGlmIChjb250cmlic1sxXSA9PT0gJ3RpdGxlPScpIHtcblx0XHRcdFx0XHRjb250cmlic1szXSA9IGNvbnRyaWJzWzNdLnNwbGl0KCcrJykuam9pbignICcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHUgPSBuZXcgVGl0bGUoY29udHJpYnNbM10pO1xuXHRcdFx0XHR0aGlzLnNldFV0Zihcblx0XHRcdFx0XHRUaXRsZS5kZWNvZGVOYXN0aWVzKGAke213LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zVXNlcklkXX06JHt1LnN0cmlwTmFtZXNwYWNlKCl9YClcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBlbWFpbCA9IHBnLnJlLmVtYWlsLmV4ZWMoaCk7XG5cdFx0XHRpZiAoZW1haWwpIHtcblx0XHRcdFx0dGhpcy5zZXRVdGYoXG5cdFx0XHRcdFx0VGl0bGUuZGVjb2RlTmFzdGllcyhcblx0XHRcdFx0XHRcdGAke213LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zVXNlcklkXX06JHtuZXcgVGl0bGUoZW1haWxbM10pLnN0cmlwTmFtZXNwYWNlKCl9YFxuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBiYWNrbGlua3MgPSBwZy5yZS5iYWNrbGlua3MuZXhlYyhoKTtcblx0XHRcdGlmIChiYWNrbGlua3MpIHtcblx0XHRcdFx0dGhpcy5zZXRVdGYoVGl0bGUuZGVjb2RlTmFzdGllcyhuZXcgVGl0bGUoYmFja2xpbmtzWzNdKSkpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdC8vIEEgZHVtbXkgdGl0bGUgb2JqZWN0IGZvciBhIFNwZWNpYWw6RGlmZiBsaW5rLlxuXHRcdFx0Y29uc3Qgc3BlY2lhbGRpZmYgPSBwZy5yZS5zcGVjaWFsZGlmZi5leGVjKGgpO1xuXHRcdFx0aWYgKHNwZWNpYWxkaWZmKSB7XG5cdFx0XHRcdHRoaXMuc2V0VXRmKFxuXHRcdFx0XHRcdFRpdGxlLmRlY29kZU5hc3RpZXMobmV3IFRpdGxlKGAke213LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zU3BlY2lhbElkXX06RGlmZmApKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdC8vIG5vIG1vcmUgc3BlY2lhbCBjYXNlcyB0byBjaGVjayAtLVxuXHRcdFx0Ly8gaG9wZWZ1bGx5IGl0J3Mgbm90IGEgZGlzZ3Vpc2VkIHVzZXItcmVsYXRlZCBvciBzcGVjaWFsbHkgdHJlYXRlZCBzcGVjaWFsIHBhZ2Vcblx0XHRcdC8vIEluY2x1ZGVzIHJlZmVyZW5jZXNcblx0XHRcdGNvbnN0IG0gPSBwZy5yZS5tYWluLmV4ZWMoaCk7XG5cdFx0XHRpZiAobSA9PT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IGZyb21Cb3RJbnRlcmZhY2UgPSAvXFw/KC4rJik/dGl0bGU9Ly50ZXN0KGgpO1xuXHRcdFx0XHRpZiAoZnJvbUJvdEludGVyZmFjZSkge1xuXHRcdFx0XHRcdG1bMl0gPSBtWzJdLnNwbGl0KCcrJykuam9pbignXycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGV4dHJhY3RlZCA9IG1bMl0gKyAobVszXSA/IGAjJHttWzNdfWAgOiAnJyk7XG5cdFx0XHRcdGlmIChwZy5mbGFnLmlzU2FmYXJpICYmIC8lMjVbXFxkQS1GYS1mXXsyfS8udGVzdChleHRyYWN0ZWQpKSB7XG5cdFx0XHRcdFx0Ly8gRml4IFNhZmFyaSBpc3N1ZVxuXHRcdFx0XHRcdC8vIFNhZmFyaSBzb21ldGltZXMgZW5jb2RlcyAlIGFzICUyNSBpbiBVVEYtOCBlbmNvZGVkIHN0cmluZ3MgbGlrZSAlRTUlQTMgLT4gJTI1RTUlMjVBMy5cblx0XHRcdFx0XHR0aGlzLnNldFV0ZihkZWNvZGVVUklDb21wb25lbnQodW5lc2NhcGUoZXh0cmFjdGVkKSkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2V0VXRmKFRpdGxlLmRlY29kZU5hc3RpZXMoZXh0cmFjdGVkKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRzdGF0aWMgZGVjb2RlTmFzdGllcyh0eHQpIHtcblx0XHRcdC8vIG15RGVjb2RlVVJJIHVzZXMgZGVjb2RlRXh0cmFzLCB3aGljaCByZW1vdmVzIF8sXG5cdFx0XHQvLyB0aHVzIHJ1aW5pbmcgY2l0YXRpb25zIHByZXZpZXdzLCB3aGljaCBhcmUgZm9ybWF0ZWQgYXMgXCJjaXRlX25vdGUtMVwiXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRsZXQgcmV0ID0gZGVjb2RlVVJJKFRpdGxlLmRlY29kZUVzY2FwZXModHh0KSk7XG5cdFx0XHRcdHJldCA9IHJldC5yZXBsYWNlKC9bIF9dKiQvLCAnJyk7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmV0dXJuIHR4dDsgLy8gY2Fubm90IGRlY29kZVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBEZWNvZGUgdmFsaWQgJS1lbmNvZGluZ3MsIG90aGVyd2lzZSBlc2NhcGUgdGhlbVxuXHRcdHN0YXRpYyBkZWNvZGVFc2NhcGVzKHR4dCkge1xuXHRcdFx0Y29uc3Qgc3BsaXQgPSB0eHQuc3BsaXQoLygoPzolW1xcZEEtRmEtZl17Mn0pKykvKTtcblx0XHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblx0XHRcdC8vIE5vICUtZW5jb2RlZCBpdGVtcyBmb3VuZCwgc28gcmVwbGFjZSB0aGUgbGl0ZXJhbCAlXG5cdFx0XHRpZiAobGVuID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiBzcGxpdFswXS5yZXBsYWNlKC8lKD8hW1xcZEEtRmEtZl17Mn0pL2csICclMjUnKTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgbGVuOyBpICs9IDIpIHtcblx0XHRcdFx0c3BsaXRbaV0gPSBkZWNvZGVVUklDb21wb25lbnQoc3BsaXRbaV0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNwbGl0LmpvaW4oJycpO1xuXHRcdH1cblx0XHRmcm9tQW5jaG9yKGEpIHtcblx0XHRcdGlmICghYSkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5mcm9tVVJMKGEuaHJlZik7XG5cdFx0fVxuXHRcdGZyb21XaWtpVGV4dCh0eHQpIHtcblx0XHRcdC8vIEZJWE1FIC0gdGVzdGluZyBuZWVkZWRcblx0XHRcdHR4dCA9IG15RGVjb2RlVVJJKHR4dCk7XG5cdFx0XHR0aGlzLnNldFV0Zih0eHQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGhpbnRWYWx1ZSgpIHtcblx0XHRcdGlmICghdGhpcy52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc2FmZURlY29kZVVSSSh0aGlzLnZhbHVlKTtcblx0XHR9XG5cdFx0dG9Vc2VyTmFtZSh3aXRoTnMpIHtcblx0XHRcdGlmICh0aGlzLm5hbWVzcGFjZUlkKCkgIT09IHBnLm5zVXNlcklkICYmIHRoaXMubmFtZXNwYWNlSWQoKSAhPT0gcGcubnNVc2VydGFsa0lkKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnZhbHVlID1cblx0XHRcdFx0KHdpdGhOcyA/IGAke213LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zVXNlcklkXX06YCA6ICcnKSArXG5cdFx0XHRcdHRoaXMuc3RyaXBOYW1lc3BhY2UoKS5zcGxpdCgnLycpWzBdO1xuXHRcdH1cblx0XHR1c2VyTmFtZSh3aXRoTnMpIHtcblx0XHRcdGNvbnN0IHQgPSBuZXcgVGl0bGUodGhpcy52YWx1ZSk7XG5cdFx0XHR0LnRvVXNlck5hbWUod2l0aE5zKTtcblx0XHRcdGlmICh0LnZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHRvVGFsa1BhZ2UoKSB7XG5cdFx0XHQvLyBjb252ZXJ0IGFydGljbGUgdG8gYSB0YWxrIHBhZ2UsIG9yIGlmIHdlIGNhbid0LCByZXR1cm4gbnVsbFxuXHRcdFx0Ly8gSW4gb3RoZXIgd29yZHM6IHJldHVybiBudWxsIGlmIHRoaXMgQUxSRUFEWSBJUyBhIHRhbGsgcGFnZVxuXHRcdFx0Ly8gYW5kIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyB0YWxrIHBhZ2Ugb3RoZXJ3aXNlXG5cdFx0XHQvL1xuXHRcdFx0Ly8gUGVyIHtAbGluayBodHRwczovL3d3dy5tZWRpYXdpa2kub3JnL3dpa2kvTWFudWFsOk5hbWVzcGFjZSNTdWJqZWN0X2FuZF90YWxrX25hbWVzcGFjZXN9XG5cdFx0XHQvLyAqIEFsbCBkaXNjdXNzaW9uIG5hbWVzcGFjZXMgaGF2ZSBvZGQtaW50ZWdlciBpbmRpY2VzXG5cdFx0XHQvLyAqIFRoZSBkaXNjdXNzaW9uIG5hbWVzcGFjZSBpbmRleCBmb3IgYSBzcGVjaWZpYyBuYW1lc3BhY2Ugd2l0aCBpbmRleCBuIGlzIG4gKyAxXG5cdFx0XHRpZiAodGhpcy52YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5hbWVzcGFjZUlkID0gdGhpcy5uYW1lc3BhY2VJZCgpO1xuXHRcdFx0aWYgKG5hbWVzcGFjZUlkID49IDAgJiYgbmFtZXNwYWNlSWQgJSAyID09PSAwKSB7XG5cdFx0XHRcdC8vIG5vbi1zcGVjaWFsIGFuZCBzdWJqZWN0IG5hbWVzcGFjZVxuXHRcdFx0XHRjb25zdCBsb2NhbGl6ZWROYW1lc3BhY2UgPSBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtuYW1lc3BhY2VJZCArIDFdO1xuXHRcdFx0XHRpZiAobG9jYWxpemVkTmFtZXNwYWNlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLnZhbHVlID1cblx0XHRcdFx0XHRcdGxvY2FsaXplZE5hbWVzcGFjZSA9PT0gJydcblx0XHRcdFx0XHRcdFx0PyB0aGlzLnN0cmlwTmFtZXNwYWNlKClcblx0XHRcdFx0XHRcdFx0OiBgJHtsb2NhbGl6ZWROYW1lc3BhY2Uuc3BsaXQoJyAnKS5qb2luKCdfJyl9OiR7dGhpcy5zdHJpcE5hbWVzcGFjZSgpfWA7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdC8vIFJldHVybiBjYW5vbmljYWwsIGxvY2FsaXplZCBuYW1lc3BhY2Vcblx0XHRuYW1lc3BhY2UoKSB7XG5cdFx0XHRyZXR1cm4gbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbdGhpcy5uYW1lc3BhY2VJZCgpXTtcblx0XHR9XG5cdFx0bmFtZXNwYWNlSWQoKSB7XG5cdFx0XHRjb25zdCBuID0gdGhpcy52YWx1ZS5pbmRleE9mKCc6Jyk7XG5cdFx0XHRpZiAobiA8IDApIHtcblx0XHRcdFx0cmV0dXJuIDA7IC8vIG1haW5zcGFjZVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbmFtZXNwYWNlSWQgPVxuXHRcdFx0XHRtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZUlkcycpW3RoaXMudmFsdWUuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbikpLnNwbGl0KCcgJykuam9pbignXycpLnRvTG93ZXJDYXNlKCldO1xuXHRcdFx0aWYgKG5hbWVzcGFjZUlkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIDA7IC8vIG1haW5zcGFjZVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5hbWVzcGFjZUlkO1xuXHRcdH1cblx0XHR0YWxrUGFnZSgpIHtcblx0XHRcdGNvbnN0IHQgPSBuZXcgVGl0bGUodGhpcy52YWx1ZSk7XG5cdFx0XHR0LnRvVGFsa1BhZ2UoKTtcblx0XHRcdGlmICh0LnZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlzVGFsa1BhZ2UoKSB7XG5cdFx0XHRpZiAodGhpcy50YWxrUGFnZSgpID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0b0FydGljbGVGcm9tVGFsa1BhZ2UoKSB7XG5cdFx0XHQvLyBsYXJnZWx5IGNvcHkvcGFzdGUgZnJvbSB0b1RhbGtQYWdlIGFib3ZlLlxuXHRcdFx0aWYgKHRoaXMudmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuYW1lc3BhY2VJZCA9IHRoaXMubmFtZXNwYWNlSWQoKTtcblx0XHRcdGlmIChuYW1lc3BhY2VJZCA+PSAwICYmIG5hbWVzcGFjZUlkICUgMiA9PT0gMSkge1xuXHRcdFx0XHQvLyBub24tc3BlY2lhbCBhbmQgdGFsayBuYW1lc3BhY2Vcblx0XHRcdFx0Y29uc3QgbG9jYWxpemVkTmFtZXNwYWNlID0gbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbbmFtZXNwYWNlSWQgLSAxXTtcblx0XHRcdFx0aWYgKGxvY2FsaXplZE5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9XG5cdFx0XHRcdFx0XHRsb2NhbGl6ZWROYW1lc3BhY2UgPT09ICcnXG5cdFx0XHRcdFx0XHRcdD8gdGhpcy5zdHJpcE5hbWVzcGFjZSgpXG5cdFx0XHRcdFx0XHRcdDogYCR7bG9jYWxpemVkTmFtZXNwYWNlLnNwbGl0KCcgJykuam9pbignXycpfToke3RoaXMuc3RyaXBOYW1lc3BhY2UoKX1gO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRhcnRpY2xlRnJvbVRhbGtQYWdlKCkge1xuXHRcdFx0Y29uc3QgdCA9IG5ldyBUaXRsZSh0aGlzLnZhbHVlKTtcblx0XHRcdHQudG9BcnRpY2xlRnJvbVRhbGtQYWdlKCk7XG5cdFx0XHRpZiAodC52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRhcnRpY2xlRnJvbVRhbGtPckFydGljbGUoKSB7XG5cdFx0XHRjb25zdCB0ID0gbmV3IFRpdGxlKHRoaXMudmFsdWUpO1xuXHRcdFx0aWYgKHQudG9BcnRpY2xlRnJvbVRhbGtQYWdlKCkpIHtcblx0XHRcdFx0cmV0dXJuIHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aXNJcFVzZXIoKSB7XG5cdFx0XHRyZXR1cm4gcGcucmUuaXBVc2VyLnRlc3QodGhpcy51c2VyTmFtZSgpKTtcblx0XHR9XG5cdFx0c3RyaXBOYW1lc3BhY2UoKSB7XG5cdFx0XHQvLyByZXR1cm5zIGEgc3RyaW5nLCBub3QgYSBUaXRsZVxuXHRcdFx0Y29uc3QgbiA9IHRoaXMudmFsdWUuaW5kZXhPZignOicpO1xuXHRcdFx0aWYgKG4gPCAwKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbmFtZXNwYWNlSWQgPSB0aGlzLm5hbWVzcGFjZUlkKCk7XG5cdFx0XHRpZiAobmFtZXNwYWNlSWQgPT09IHBnLm5zTWFpbnNwYWNlSWQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZS5zbGljZShNYXRoLm1heCgwLCBuICsgMSkpO1xuXHRcdH1cblx0XHRzZXRVdGYodmFsdWUpIHtcblx0XHRcdGlmICghdmFsdWUpIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9ICcnO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBhbmNoID0gdmFsdWUuaW5kZXhPZignIycpO1xuXHRcdFx0aWYgKGFuY2ggPCAwKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZS5zcGxpdCgnXycpLmpvaW4oJyAnKTtcblx0XHRcdFx0dGhpcy5hbmNob3IgPSAnJztcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIE1hdGgubWF4KDAsIGFuY2gpKS5zcGxpdCgnXycpLmpvaW4oJyAnKTtcblx0XHRcdHRoaXMuYW5jaG9yID0gdmFsdWUuc2xpY2UoTWF0aC5tYXgoMCwgYW5jaCArIDEpKTtcblx0XHRcdHRoaXMubnMgPSBudWxsOyAvLyB3YWl0IHVudGlsIG5hbWVzcGFjZSgpIGlzIGNhbGxlZFxuXHRcdH1cblx0XHRzZXRVcmwodXJsZnJhZykge1xuXHRcdFx0Y29uc3QgYW5jaCA9IHVybGZyYWcuaW5kZXhPZignIycpO1xuXHRcdFx0dGhpcy52YWx1ZSA9IHNhZmVEZWNvZGVVUkkodXJsZnJhZy5zbGljZSgwLCBNYXRoLm1heCgwLCBhbmNoKSkpO1xuXHRcdFx0dGhpcy5hbmNob3IgPSB0aGlzLnZhbHVlLnNsaWNlKE1hdGgubWF4KDAsIGFuY2ggKyAxKSk7XG5cdFx0fVxuXHRcdGFwcGVuZCh4KSB7XG5cdFx0XHR0aGlzLnNldFV0Zih0aGlzLnZhbHVlICsgeCk7XG5cdFx0fVxuXHRcdHVybFN0cmluZyh4KSB7XG5cdFx0XHR4IHx8PSB7fTtcblx0XHRcdGxldCB2ID0gdGhpcy50b1N0cmluZyh0cnVlKTtcblx0XHRcdGlmICgheC5vbWl0QW5jaG9yICYmIHRoaXMuYW5jaG9yKSB7XG5cdFx0XHRcdHYgKz0gYCMke3RoaXMudXJsQW5jaG9yKCl9YDtcblx0XHRcdH1cblx0XHRcdGlmICgheC5rZWVwU3BhY2VzKSB7XG5cdFx0XHRcdHYgPSB2LnNwbGl0KCcgJykuam9pbignXycpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGVuY29kZVVSSSh2KS5zcGxpdCgnJicpLmpvaW4oJyUyNicpLnNwbGl0KCc/Jykuam9pbignJTNGJykuc3BsaXQoJysnKS5qb2luKCclMkInKTtcblx0XHR9XG5cdFx0cmVtb3ZlQW5jaG9yKCkge1xuXHRcdFx0cmV0dXJuIG5ldyBUaXRsZSh0aGlzLnRvU3RyaW5nKHRydWUpKTtcblx0XHR9XG5cdFx0dG9VcmwoKSB7XG5cdFx0XHRyZXR1cm4gcGcud2lraS50aXRsZWJhc2UgKyB0aGlzLnVybFN0cmluZygpO1xuXHRcdH1cblx0fVxuXHRUaXRsZS5mcm9tVVJMID0gKGgpID0+IHtcblx0XHRyZXR1cm4gbmV3IFRpdGxlKCkuZnJvbVVSTChoKTtcblx0fTtcblx0VGl0bGUuZnJvbUFuY2hvciA9IChhKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBUaXRsZSgpLmZyb21BbmNob3IoYSk7XG5cdH07XG5cdFRpdGxlLmZyb21XaWtpVGV4dCA9ICh0eHQpID0+IHtcblx0XHRyZXR1cm4gbmV3IFRpdGxlKCkuZnJvbVdpa2lUZXh0KHR4dCk7XG5cdH07XG5cdGNvbnN0IHBhcnNlUGFyYW1zID0gKHVybCkgPT4ge1xuXHRcdGNvbnN0IHNwZWNpYWxEaWZmID0gcGcucmUuc3BlY2lhbGRpZmYuZXhlYyh1cmwpO1xuXHRcdGlmIChzcGVjaWFsRGlmZikge1xuXHRcdFx0Y29uc3Qgc3BsaXQgPSBzcGVjaWFsRGlmZlsxXS5zcGxpdCgnLycpO1xuXHRcdFx0aWYgKHNwbGl0Lmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdG9sZGlkOiBzcGxpdFswXSxcblx0XHRcdFx0XHRkaWZmOiAncHJldicsXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2UgaWYgKHNwbGl0Lmxlbmd0aCA9PT0gMikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdG9sZGlkOiBzcGxpdFswXSxcblx0XHRcdFx0XHRkaWZmOiBzcGxpdFsxXSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgcmV0ID0ge307XG5cdFx0aWYgKCF1cmwuaW5jbHVkZXMoJz8nKSkge1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cdFx0W3VybF0gPSB1cmwuc3BsaXQoJyMnKTtcblx0XHRjb25zdCBzID0gdXJsLnNwbGl0KCc/Jykuc2xpY2UoMSkuam9pbignLCcpO1xuXHRcdGNvbnN0IHQgPSBzLnNwbGl0KCcmJyk7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHQpIHtcblx0XHRcdGNvbnN0IHogPSBlbGVtZW50LnNwbGl0KCc9Jyk7XG5cdFx0XHR6LnB1c2gobnVsbCk7XG5cdFx0XHRbLCByZXRbelswXV1dID0gejtcblx0XHR9XG5cdFx0Ly8gRGlmZiByZXZpc2lvbiB3aXRoIG5vIG9sZGlkIGlzIGludGVycHJldGVkIGFzIGEgZGlmZiB0byB0aGUgcHJldmlvdXMgcmV2aXNpb24gYnkgTWVkaWFXaWtpXG5cdFx0aWYgKHJldC5kaWZmICYmIHJldC5vbGRpZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXQub2xkaWQgPSAncHJldic7XG5cdFx0fVxuXHRcdC8vIERvY3VtZW50YXRpb24gc2VlbXMgdG8gc2F5IHNvbWV0aGluZyBkaWZmZXJlbnQsIGJ1dCBvbGRpZCBjYW4gYWxzbyBhY2NlcHQgcHJldi9uZXh0LCBhbmRcblx0XHQvLyBFY2hvIGlzIGVtaXR0aW5nIHN1Y2ggVVJMcy4gU2ltcGxlIGZpeHVwIGR1cmluZyBwYXJhbWV0ZXIgZGVjb2Rpbmc6XG5cdFx0aWYgKHJldC5vbGRpZCAmJiAocmV0Lm9sZGlkID09PSAncHJldicgfHwgcmV0Lm9sZGlkID09PSAnbmV4dCcgfHwgcmV0Lm9sZGlkID09PSAnY3VyJykpIHtcblx0XHRcdGNvbnN0IGhlbHBlciA9IHJldC5kaWZmO1xuXHRcdFx0cmV0LmRpZmYgPSByZXQub2xkaWQ7XG5cdFx0XHRyZXQub2xkaWQgPSBoZWxwZXI7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdC8vIChhKSBteURlY29kZVVSSSAoZmlyc3Qgc3RhbmRhcmQgZGVjb2RlVVJJLCB0aGVuIHBnLnJlLnVybE5vUG9wdXApXG5cdC8vIChiKSBjaGFuZ2Ugc3BhY2VzIHRvIHVuZGVyc2NvcmVzXG5cdC8vIChjKSBlbmNvZGVVUkkgKGp1c3QgdGhlIHN0cmFpZ2h0IG9uZSwgbm8gcGcucmUudXJsTm9Qb3B1cClcblx0Y29uc3QgbXlEZWNvZGVVUkkgPSAoc3RyKSA9PiB7XG5cdFx0bGV0IHJldDtcblx0XHQvLyBGSVhNRSBkZWNvZGVVUklDb21wb25lbnQ/P1xuXHRcdHRyeSB7XG5cdFx0XHRyZXQgPSBkZWNvZGVVUkkoc3RyLnRvU3RyaW5nKCkpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwZy5taXNjLmRlY29kZUV4dHJhcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0Y29uc3Qge2Zyb219ID0gcGcubWlzYy5kZWNvZGVFeHRyYXNbaV07XG5cdFx0XHRjb25zdCB7dG99ID0gcGcubWlzYy5kZWNvZGVFeHRyYXNbaV07XG5cdFx0XHRyZXQgPSByZXQuc3BsaXQoZnJvbSkuam9pbih0byk7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IHNhZmVEZWNvZGVVUkkgPSAoc3RyKSA9PiB7XG5cdFx0Y29uc3QgcmV0ID0gbXlEZWNvZGVVUkkoc3RyKTtcblx0XHRyZXR1cm4gcmV0IHx8IHN0cjtcblx0fTtcblx0Ly8gVEVTVFMgLy9cblx0Y29uc3QgaXNEaXNhbWJpZyA9IChkYXRhLCBhcnRpY2xlKSA9PiB7XG5cdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cEFsbERhYnNTdHVicycpICYmIGFydGljbGUubmFtZXNwYWNlKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuICFhcnRpY2xlLmlzVGFsa1BhZ2UoKSAmJiBwZy5yZS5kaXNhbWJpZy50ZXN0KGRhdGEpO1xuXHR9O1xuXHRjb25zdCBzdHViQ291bnQgPSAoZGF0YSwgYXJ0aWNsZSkgPT4ge1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBBbGxEYWJzU3R1YnMnKSAmJiBhcnRpY2xlLm5hbWVzcGFjZSgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGxldCBzZWN0U3R1YiA9IDA7XG5cdFx0bGV0IHJlYWxTdHViID0gMDtcblx0XHRpZiAocGcucmUuc3R1Yi50ZXN0KGRhdGEpKSB7XG5cdFx0XHRjb25zdCBzID0gZGF0YS5zcGxpdChwZy5yZS5zdHViKTtcblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0XHRpZiAoc1tpXSkge1xuXHRcdFx0XHRcdCsrc2VjdFN0dWI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0KytyZWFsU3R1Yjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0cmVhbDogcmVhbFN0dWIsXG5cdFx0XHRzZWN0OiBzZWN0U3R1Yixcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBpc1ZhbGlkSW1hZ2VOYW1lID0gKHN0cikgPT4ge1xuXHRcdHJldHVybiAhc3RyLmluY2x1ZGVzKCd7Jyk7XG5cdH07XG5cdGNvbnN0IGlzSW5TdHJpcHBhYmxlTmFtZXNwYWNlID0gKGFydGljbGUpID0+IHtcblx0XHRyZXR1cm4gYXJ0aWNsZS5uYW1lc3BhY2VJZCgpICE9PSAwO1xuXHR9O1xuXHRjb25zdCBpc0luTWFpbk5hbWVzcGFjZSA9IChhcnRpY2xlKSA9PiB7XG5cdFx0cmV0dXJuIGFydGljbGUubmFtZXNwYWNlSWQoKSA9PT0gMDtcblx0fTtcblx0Y29uc3QgYW5jaG9yQ29udGFpbnNJbWFnZSA9IChhKSA9PiB7XG5cdFx0Ly8gaXRlcmF0ZSBvdmVyIGNoaWxkcmVuIG9mIGFuY2hvciBhXG5cdFx0Ly8gc2VlIGlmIGFueSBhcmUgaW1hZ2VzXG5cdFx0aWYgKGEgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3Qga2lkcyA9IGEuY2hpbGROb2Rlcztcblx0XHRmb3IgKGNvbnN0IGtpZCBvZiBraWRzKSB7XG5cdFx0XHRpZiAoa2lkLm5vZGVOYW1lID09PSAnSU1HJykge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRjb25zdCBpc1BvcHVwTGluayA9IChhKSA9PiB7XG5cdFx0Ly8gTkIgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIFRPQyBsaW5rcyBnZW5lcmFsbHkgcmV0dXJuIHRydWVcblx0XHQvLyB0aGV5IHNob3VsZCBiZSBzdHJpcHBlZCBvdXQgbGF0ZXJcblx0XHRpZiAoIW1hcmtOb3BvcHVwU3BhbkxpbmtzLmRvbmUpIHtcblx0XHRcdG1hcmtOb3BvcHVwU3BhbkxpbmtzKCk7XG5cdFx0fVxuXHRcdGlmIChhLmluTm9wb3B1cFNwYW4pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Ly8gRklYTUUgaXMgdGhpcyBmYXN0ZXIgaW5saW5lP1xuXHRcdGlmIChhLm9ubW91c2Vkb3duIHx8IGEuZ2V0QXR0cmlidXRlKCdub3BvcHVwJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgaCA9IGEuaHJlZjtcblx0XHRpZiAoaCA9PT0gYCR7ZG9jdW1lbnQubG9jYXRpb24uaHJlZn0jYCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIXBnLnJlLmJhc2VuYW1lcy50ZXN0KGgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghcGcucmUudXJsTm9Qb3B1cC50ZXN0KGgpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdChwZy5yZS5lbWFpbC50ZXN0KGgpIHx8IHBnLnJlLmNvbnRyaWJzLnRlc3QoaCkgfHwgcGcucmUuYmFja2xpbmtzLnRlc3QoaCkgfHwgcGcucmUuc3BlY2lhbGRpZmYudGVzdChoKSkgJiZcblx0XHRcdCFoLmluY2x1ZGVzKCcmbGltaXQ9Jylcblx0XHQpO1xuXHR9O1xuXHRjb25zdCBtYXJrTm9wb3B1cFNwYW5MaW5rcyA9IGZ1bmN0aW9uIG1hcmtOb3BvcHVwU3BhbkxpbmtzKCkge1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBPbmx5QXJ0aWNsZUxpbmtzJykpIHtcblx0XHRcdGZpeFZlY3Rvck1lbnVQb3B1cHMoKTtcblx0XHR9XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0Y29uc3QgcyA9ICRib2R5LmZpbmQoJy5ub3BvcHVwcycpLnRvQXJyYXkoKTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygcykge1xuXHRcdFx0Y29uc3QgYXMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRcdGZvciAoY29uc3QgYSBvZiBhcykge1xuXHRcdFx0XHRhLmluTm9wb3B1cFNwYW4gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRtYXJrTm9wb3B1cFNwYW5MaW5rcy5kb25lID0gdHJ1ZTtcblx0fTtcblx0Y29uc3QgZml4VmVjdG9yTWVudVBvcHVwcyA9ICgpID0+IHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHQkYm9keS5maW5kKCduYXYudmVjdG9yLW1lbnUgaDM6Zmlyc3QgYTpmaXJzdCcpLnByb3AoJ2luTm9wb3B1cFNwYW4nLCB0cnVlKTtcblx0fTtcblx0Ly8gRU5ERklMRTogdGl0bGVzLmpzXG5cdC8vIFNUQVJURklMRTogZ2V0cGFnZS5qc1xuXHQvLyBXaWtpLXNwZWNpZmljIGRvd25sb2FkaW5nXG5cdC8vXG5cdC8vIFNjaGVtYXRpYyBmb3IgYSBnZXRXaWtpIGNhbGxcblx0Ly9cblx0Ly8gICAgICAgICAgICAgZ2V0UGFnZVdpdGhDYWNoaW5nXG5cdC8vXHRcdFx0XHRcdHxcblx0Ly9cdCAgIGZhbHNlXHRcdHxcdFx0ICB0cnVlXG5cdC8vIGdldFBhZ2U8LVtmaW5kUGljdHVyZUluQ2FjaGVdLT4tb25Db21wbGV0ZShhIGZha2UgZG93bmxvYWQpXG5cdC8vICAgXFwuXG5cdC8vXHQgKGFzeW5jKS0+YWRkUGFnZVRvQ2FjaGUoZG93bmxvYWQpLT4tb25Db21wbGV0ZShkb3dubG9hZClcblx0Ly8gY2hlY2sgY2FjaGUgdG8gc2VlIGlmIHBhZ2UgZXhpc3RzXG5cdGNvbnN0IGdldFBhZ2VXaXRoQ2FjaGluZyA9ICh1cmwsIG9uQ29tcGxldGUsIG93bmVyKSA9PiB7XG5cdFx0bG9nKGBnZXRQYWdlV2l0aENhY2hpbmcsIHVybD0ke3VybH1gKTtcblx0XHRjb25zdCBpID0gZmluZEluUGFnZUNhY2hlKHVybCk7XG5cdFx0bGV0IGQ7XG5cdFx0aWYgKGkgPiAtMSkge1xuXHRcdFx0ZCA9IGZha2VEb3dubG9hZChcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHRvd25lci5pZE51bWJlcixcblx0XHRcdFx0b25Db21wbGV0ZSxcblx0XHRcdFx0cGcuY2FjaGUucGFnZXNbaV0uZGF0YSxcblx0XHRcdFx0cGcuY2FjaGUucGFnZXNbaV0ubGFzdE1vZGlmaWVkLFxuXHRcdFx0XHRvd25lclxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZCA9IGdldFBhZ2UodXJsLCBvbkNvbXBsZXRlLCBvd25lcik7XG5cdFx0XHRpZiAoZCAmJiBvd25lciAmJiBvd25lci5hZGREb3dubG9hZCkge1xuXHRcdFx0XHRvd25lci5hZGREb3dubG9hZChkKTtcblx0XHRcdFx0ZC5vd25lciA9IG93bmVyO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgZ2V0UGFnZSA9ICh1cmwsIG9uQ29tcGxldGUsIG93bmVyKSA9PiB7XG5cdFx0bG9nKCdnZXRQYWdlJyk7XG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAoZCkgPT4ge1xuXHRcdFx0aWYgKCFkLmFib3J0ZWQpIHtcblx0XHRcdFx0YWRkUGFnZVRvQ2FjaGUoZCk7XG5cdFx0XHRcdG9uQ29tcGxldGUoZCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gc3RhcnREb3dubG9hZCh1cmwsIG93bmVyLmlkTnVtYmVyLCBjYWxsYmFjayk7XG5cdH07XG5cdGNvbnN0IGZpbmRJblBhZ2VDYWNoZSA9ICh1cmwpID0+IHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBnLmNhY2hlLnBhZ2VzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAodXJsID09PSBwZy5jYWNoZS5wYWdlc1tpXS51cmwpIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fTtcblx0Y29uc3QgYWRkUGFnZVRvQ2FjaGUgPSAoZG93bmxvYWQpID0+IHtcblx0XHRsb2coYGFkZFBhZ2VUb0NhY2hlICR7ZG93bmxvYWQudXJsfWApO1xuXHRcdGNvbnN0IHBhZ2UgPSB7XG5cdFx0XHR1cmw6IGRvd25sb2FkLnVybCxcblx0XHRcdGRhdGE6IGRvd25sb2FkLmRhdGEsXG5cdFx0XHRsYXN0TW9kaWZpZWQ6IGRvd25sb2FkLmxhc3RNb2RpZmllZCxcblx0XHR9O1xuXHRcdHJldHVybiBwZy5jYWNoZS5wYWdlcy5wdXNoKHBhZ2UpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBnZXRwYWdlLmpzXG5cdC8vIFNUQVJURklMRTogdG9vbHMuanNcblx0Ly8gSUUgbWFkbmVzcyB3aXRoIGVuY29kaW5nXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvL1xuXHQvLyBzdXBwb3NlIHRocm91Z2hvdXQgdGhhdCB0aGUgcGFnZSBpcyBpbiB1dGY4LCBsaWtlIHdpa2lwZWRpYVxuXHQvL1xuXHQvLyBpZiBhIGlzIGFuIGFuY2hvciBET00gZWxlbWVudCBhbmQgYS5ocmVmIHNob3VsZCBjb25zaXN0IG9mXG5cdC8vXG5cdC8vIGh0dHA6Ly9ob3N0Lm5hbWUuaGVyZS93aWtpL2Zvbz9iYXI9YmF6XG5cdC8vXG5cdC8vIHRoZW4gSUUgZ2l2ZXMgZm9vIGFzIFwibGF0aW4xLWVuY29kZWRcIiB1dGY4OyB3ZSBoYXZlIGZvbyA9IGRlY29kZV91dGY4KGRlY29kZVVSSShmb29faWUpKVxuXHQvLyBidXQgSUUgZ2l2ZXMgYmFyPWJheiBjb3JyZWN0bHkgYXMgcGxhaW4gdXRmOFxuXHQvL1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly9cblx0Ly8gSUUncyB4bWxodHRwIGRvZXNuJ3QgdW5kZXJzdGFuZCB1dGY4IHVybHMuIEhhdmUgdG8gdXNlIGVuY29kZVVSSSBoZXJlLlxuXHQvL1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly9cblx0Ly8gc3VtbWF0IGVsc2Vcblx0Ly8gU291cmNlOiBodHRwOi8vYWt0dWVsbC5kZS5zZWxmaHRtbC5vcmcvYXJ0aWtlbC9qYXZhc2NyaXB0L3V0ZjhiNjQvdXRmOC5odG1cblx0Y29uc3QgZ2V0SnNPYmogPSAoanNvbikgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBqc29uX3JldCA9IEpTT04ucGFyc2UoanNvbik7XG5cdFx0XHRpZiAoanNvbl9yZXQud2FybmluZ3MpIHtcblx0XHRcdFx0Zm9yIChsZXQgdyA9IDA7IHcgPCBqc29uX3JldC53YXJuaW5ncy5sZW5ndGg7IHcrKykge1xuXHRcdFx0XHRcdGlmIChqc29uX3JldC53YXJuaW5nc1t3XVsnKiddKSB7XG5cdFx0XHRcdFx0XHRsb2coanNvbl9yZXQud2FybmluZ3Nbd11bJyonXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxvZyhqc29uX3JldC53YXJuaW5nc1t3XS53YXJuaW5ncyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGpzb25fcmV0LmVycm9yKSB7XG5cdFx0XHRcdGVycmxvZyhgJHtqc29uX3JldC5lcnJvci5jb2RlfTogJHtqc29uX3JldC5lcnJvci5pbmZvfWApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGpzb25fcmV0O1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0ZXJybG9nKGBTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIGdldEpzT2JqLCBqc29uPSR7anNvbn1gKTtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgYW55Q2hpbGQgPSAob2JqKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBwIGluIG9iaikge1xuXHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKG9iaiwgcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqW3BdO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgdXBjYXNlRmlyc3QgPSAoc3RyKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBzdHIgIT09IHR5cGVvZiAnJyB8fCBzdHIgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdH07XG5cdGNvbnN0IGZpbmRJbkFycmF5ID0gKGFyciwgZm9vKSA9PiB7XG5cdFx0aWYgKCFhcnIgfHwgYXJyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblx0XHRjb25zdCBsZW4gPSBhcnIubGVuZ3RoO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcblx0XHRcdGlmIChhcnJbaV0gPT09IGZvbykge1xuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9O1xuXHRjb25zdCBuZXh0T25lID0gKGFycmF5LCB2YWx1ZSkgPT4ge1xuXHRcdC8vIE5CIGlmIHRoZSBhcnJheSBoYXMgdHdvIGNvbnNlY3V0aXZlIGVudHJpZXMgZXF1YWxcblx0XHQvL1x0dGhlbiB0aGlzIHdpbGwgbG9vcCBvbiBzdWNjZXNzaXZlIGNhbGxzXG5cdFx0Y29uc3QgaSA9IGZpbmRJbkFycmF5KGFycmF5LCB2YWx1ZSk7XG5cdFx0aWYgKGkgPCAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIGFycmF5W2kgKyAxXTtcblx0fTtcblx0Y29uc3QgbGl0ZXJhbGl6ZVJlZ2V4ID0gKHN0cikgPT4ge1xuXHRcdHJldHVybiBtdy51dGlsLmVzY2FwZVJlZ0V4cChzdHIpO1xuXHR9O1xuXHRTdHJpbmcucHJvdG90eXBlLmVudGlmeSA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBsZXQgc2h5ID0gJyZzaHk7Jztcblx0XHRyZXR1cm4gdGhpcy5zcGxpdCgnJicpXG5cdFx0XHQuam9pbignJmFtcDsnKVxuXHRcdFx0LnNwbGl0KCc8Jylcblx0XHRcdC5qb2luKCcmbHQ7Jylcblx0XHRcdC5zcGxpdCgnPicpXG5cdFx0XHQuam9pbignJmd0OycgLyogK3NoeSAqLylcblx0XHRcdC5zcGxpdCgnXCInKVxuXHRcdFx0LmpvaW4oJyZxdW90OycpO1xuXHR9O1xuXHQvLyBBcnJheSBmaWx0ZXIgZnVuY3Rpb25cblx0Y29uc3QgcmVtb3ZlTnVsbHMgPSAodmFsKSA9PiB7XG5cdFx0cmV0dXJuIHZhbCAhPT0gbnVsbDtcblx0fTtcblx0Y29uc3Qgam9pblBhdGggPSAobGlzdCkgPT4ge1xuXHRcdHJldHVybiBsaXN0LmZpbHRlcihyZW1vdmVOdWxscykuam9pbignLycpO1xuXHR9O1xuXHRjb25zdCBzaW1wbGVQcmludGYgPSAoc3RyLCBzdWJzKSA9PiB7XG5cdFx0aWYgKCFzdHIgfHwgIXN1YnMpIHtcblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fVxuXHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdGNvbnN0IHMgPSBzdHIuc3BsaXQoLyglc3xcXCRcXGQrKS8pO1xuXHRcdGxldCBpID0gMDtcblx0XHRkbyB7XG5cdFx0XHRyZXQucHVzaChzLnNoaWZ0KCkpO1xuXHRcdFx0aWYgKHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY21kID0gcy5zaGlmdCgpO1xuXHRcdFx0aWYgKGNtZCA9PT0gJyVzJykge1xuXHRcdFx0XHRpZiAoaSA8IHN1YnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goc3Vic1tpXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goY21kKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQrK2k7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBqID0gTnVtYmVyLnBhcnNlSW50KGNtZC5yZXBsYWNlKCckJywgJycpLCAxMCkgLSAxO1xuXHRcdFx0XHRpZiAoaiA+IC0xICYmIGogPCBzdWJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldC5wdXNoKHN1YnNbal0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldC5wdXNoKGNtZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IHdoaWxlIChzLmxlbmd0aCA+IDApO1xuXHRcdHJldHVybiByZXQuam9pbignJyk7XG5cdH07XG5cdGNvbnN0IGlzU3RyaW5nID0gKHgpID0+IHtcblx0XHRyZXR1cm4gdHlwZW9mIHggPT09ICdzdHJpbmcnIHx8IHggaW5zdGFuY2VvZiBTdHJpbmc7XG5cdH07XG5cdGNvbnN0IGlzTnVtYmVyID0gKHgpID0+IHtcblx0XHRyZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInIHx8IHggaW5zdGFuY2VvZiBOdW1iZXI7XG5cdH07XG5cdGNvbnN0IGlzUmVnRXhwID0gKHgpID0+IHtcblx0XHRyZXR1cm4geCBpbnN0YW5jZW9mIFJlZ0V4cDtcblx0fTtcblx0Y29uc3QgaXNBcnJheSA9ICh4KSA9PiB7XG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoeCk7XG5cdH07XG5cdGNvbnN0IGlzT2JqZWN0ID0gKHgpID0+IHtcblx0XHRyZXR1cm4geCBpbnN0YW5jZW9mIE9iamVjdDtcblx0fTtcblx0Y29uc3QgaXNGdW5jdGlvbiA9ICh4KSA9PiB7XG5cdFx0cmV0dXJuICFpc1JlZ0V4cCh4KSAmJiAodHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgeCBpbnN0YW5jZW9mIEZ1bmN0aW9uKTtcblx0fTtcblx0Y29uc3QgcmVwZWF0U3RyaW5nID0gKHMsIG11bHQpID0+IHtcblx0XHRsZXQgcmV0ID0gJyc7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtdWx0OyArK2kpIHtcblx0XHRcdHJldCArPSBzO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCB6ZXJvRmlsbCA9IChzLCBtaW4pID0+IHtcblx0XHRtaW4gfHw9IDI7XG5cdFx0Y29uc3QgdCA9IHMudG9TdHJpbmcoKTtcblx0XHRyZXR1cm4gcmVwZWF0U3RyaW5nKCcwJywgbWluIC0gdC5sZW5ndGgpICsgdDtcblx0fTtcblx0Y29uc3QgbWFwID0gKGYsIG8pID0+IHtcblx0XHRpZiAoaXNBcnJheShvKSkge1xuXHRcdFx0cmV0dXJuIG1hcF9hcnJheShmLCBvKTtcblx0XHR9XG5cdFx0cmV0dXJuIG1hcF9vYmplY3QoZiwgbyk7XG5cdH07XG5cdGNvbnN0IG1hcF9hcnJheSA9IChmLCBvKSA9PiB7XG5cdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIG8pIHtcblx0XHRcdHJldC5wdXNoKGYoZWxlbWVudCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBtYXBfb2JqZWN0ID0gKGYsIG8pID0+IHtcblx0XHRjb25zdCByZXQgPSB7fTtcblx0XHRmb3IgKGNvbnN0IGkgaW4gbykge1xuXHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKG8sIGkpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0W29dID0gZihvW2ldKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0cGcuZXNjYXBlUXVvdGVzSFRNTCA9ICh0ZXh0KSA9PiB7XG5cdFx0cmV0dXJuIHRleHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcblx0fTtcblx0cGcudW5lc2NhcGVRdW90ZXNIVE1MID0gKGh0bWwpID0+IHtcblx0XHQvLyBGcm9tIHtAbGluayBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzM5NDc4N31cblx0XHQvLyBUaGlzIHNlZW1zIHRvIGJlIGltcGxlbWVudGVkIGNvcnJlY3RseSBvbiBhbGwgbWFqb3IgYnJvd3NlcnMgbm93LCBzbyB3ZVxuXHRcdC8vIGRvbid0IGhhdmUgdG8gbWFrZSBvdXIgb3duIGZ1bmN0aW9uLlxuXHRcdGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cdFx0dHh0LmlubmVySFRNTCA9IGh0bWw7XG5cdFx0cmV0dXJuIHR4dC52YWx1ZTtcblx0fTtcblx0Ly8gRU5ERklMRTogdG9vbHMuanNcblx0Ly8gU1RBUlRGSUxFOiBkYWIuanNcblx0Ly8gRGFiLWZpeGluZyBjb2RlXG5cdC8vXG5cdGNvbnN0IHJldGFyZ2V0RGFiID0gKG5ld1RhcmdldCwgb2xkVGFyZ2V0LCBmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZSwgdGl0bGVUb0VkaXQpID0+IHtcblx0XHRsb2coYHJldGFyZ2V0RGFiOiBuZXdUYXJnZXQ9JHtuZXdUYXJnZXR9IG9sZFRhcmdldD0ke29sZFRhcmdldH1gKTtcblx0XHRyZXR1cm4gY2hhbmdlTGlua1RhcmdldExpbmsoe1xuXHRcdFx0bmV3VGFyZ2V0LFxuXHRcdFx0dGV4dDogbmV3VGFyZ2V0LnNwbGl0KCcgJykuam9pbignJm5ic3A7JyksXG5cdFx0XHRoaW50OiB0cHJpbnRmKCdkaXNhbWJpZ0hpbnQnLCBbbmV3VGFyZ2V0XSksXG5cdFx0XHRzdW1tYXJ5OiBzaW1wbGVQcmludGYoZ2V0VmFsdWVPZigncG9wdXBGaXhEYWJzU3VtbWFyeScpLCBbZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWUsIG5ld1RhcmdldF0pLFxuXHRcdFx0Y2xpY2tCdXR0b246IGdldFZhbHVlT2YoJ3BvcHVwRGFic0F1dG9DbGljaycpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHRvbGRUYXJnZXQsXG5cdFx0XHR3YXRjaDogZ2V0VmFsdWVPZigncG9wdXBXYXRjaERpc2FtYmlnZ2VkUGFnZXMnKSxcblx0XHRcdHRpdGxlOiB0aXRsZVRvRWRpdCxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgbGlzdExpbmtzID0gKHdpa2l0ZXh0LCBvbGRUYXJnZXQsIHRpdGxlVG9FZGl0KSA9PiB7XG5cdFx0Ly8gbWVkaWF3aWtpIHN0cmlwcyB0cmFpbGluZyBzcGFjZXMsIHNvIHdlIGRvIHRoZSBzYW1lXG5cdFx0Ly8gdGVzdGNhc2U6IHtAbGluayBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvdy9pbmRleC5waHA/dGl0bGU9UmFkaWFsJm9sZGlkPTk3MzY1NjMzfVxuXHRcdGNvbnN0IHJlZyA9IC9cXFtcXFsoW158XSo/KSAqKFxcfHxdXSkvZ2k7XG5cdFx0bGV0IHJldCA9IFtdO1xuXHRcdGNvbnN0IHNwbGl0dGVkID0gd2lraXRleHQuc3BsaXQocmVnKTtcblx0XHQvLyBeW2Etel0rIHNob3VsZCBtYXRjaCBpbnRlcndpa2kgbGlua3MsIGhvcGVmdWxseSAoY2FzZS1pbnNlbnNpdGl2ZSlcblx0XHQvLyBhbmQgXlthLXpdKiBzaG91bGQgbWF0Y2ggdGhvc2UgYW5kIFtbOkNhdGVnb3J5Li4uXV0gc3R5bGUgbGlua3MgdG9vXG5cdFx0Y29uc3Qgb21pdFJlZ2V4ID0gL15bYS16XSo6fF5bU3NdcGVjaWFsOnxeW0lpXW1hZ2V8XltDY11hdGVnb3J5Lztcblx0XHRjb25zdCBmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZSA9IG9sZFRhcmdldC50b1N0cmluZygpO1xuXHRcdGNvbnN0IHdpa1BvcyA9IGdldFZhbHVlT2YoJ3BvcHVwRGFiV2lrdGlvbmFyeScpO1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgc3BsaXR0ZWQubGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdGlmICh0eXBlb2Ygc3BsaXR0ZWRbaV0gPT09IHR5cGVvZiAnc3RyaW5nJyAmJiBzcGxpdHRlZFtpXS5sZW5ndGggPiAwICYmICFvbWl0UmVnZXgudGVzdChzcGxpdHRlZFtpXSkpIHtcblx0XHRcdFx0cmV0LnB1c2gocmV0YXJnZXREYWIoc3BsaXR0ZWRbaV0sIG9sZFRhcmdldCwgZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWUsIHRpdGxlVG9FZGl0KSk7XG5cdFx0XHR9IC8qIGlmICovXG5cdFx0fSAvKiBmb3IgbG9vcCAqL1xuXHRcdHJldCA9IHJtRHVwZXNGcm9tU29ydGVkTGlzdChyZXQuc29ydCgpKTtcblx0XHRpZiAod2lrUG9zKSB7XG5cdFx0XHRjb25zdCB3aWtUYXJnZXQgPSBgd2lrdGlvbmFyeToke2ZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lLnJlcGxhY2UoL14oLispXFxzK1xcKFteKV0rXFwpXFxzKiQvLCAnJDEnKX1gO1xuXHRcdFx0Y29uc3QgbWV0aCA9IHdpa1Bvcy50b0xvd2VyQ2FzZSgpID09PSAnZmlyc3QnID8gJ3Vuc2hpZnQnIDogJ3B1c2gnO1xuXHRcdFx0cmV0W21ldGhdKHJldGFyZ2V0RGFiKHdpa1RhcmdldCwgb2xkVGFyZ2V0LCBmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZSwgdGl0bGVUb0VkaXQpKTtcblx0XHR9XG5cdFx0cmV0LnB1c2goXG5cdFx0XHRjaGFuZ2VMaW5rVGFyZ2V0TGluayh7XG5cdFx0XHRcdG5ld1RhcmdldDogbnVsbCxcblx0XHRcdFx0dGV4dDogcG9wdXBTdHJpbmcoJ3JlbW92ZSB0aGlzIGxpbmsnKS5zcGxpdCgnICcpLmpvaW4oJyZuYnNwOycpLFxuXHRcdFx0XHRoaW50OiBwb3B1cFN0cmluZygncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIGRpc2FtYmlnIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnKSxcblx0XHRcdFx0Y2xpY2tCdXR0b246IGdldFZhbHVlT2YoJ3BvcHVwRGFic0F1dG9DbGljaycpLFxuXHRcdFx0XHRvbGRUYXJnZXQsXG5cdFx0XHRcdHN1bW1hcnk6IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cFJtRGFiTGlua1N1bW1hcnknKSwgW2ZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lXSksXG5cdFx0XHRcdHdhdGNoOiBnZXRWYWx1ZU9mKCdwb3B1cFdhdGNoRGlzYW1iaWdnZWRQYWdlcycpLFxuXHRcdFx0XHR0aXRsZTogdGl0bGVUb0VkaXQsXG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3Qgcm1EdXBlc0Zyb21Tb3J0ZWRMaXN0ID0gKGxpc3QpID0+IHtcblx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0aWYgKHJldC5sZW5ndGggPT09IDAgfHwgZWxlbWVudCAhPT0gcmV0LmF0KC0xKSkge1xuXHRcdFx0XHRyZXQucHVzaChlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgbWFrZUZpeERhYiA9IChkYXRhLCBuYXZwb3ApID0+IHtcblx0XHQvLyBncmFiIHRpdGxlIGZyb20gcGFyZW50IHBvcHVwIGlmIHRoZXJlIGlzIG9uZTsgZGVmYXVsdCBleGlzdHMgaW4gY2hhbmdlTGlua1RhcmdldExpbmtcblx0XHRjb25zdCB0aXRsZVRvRWRpdCA9IG5hdnBvcC5wYXJlbnRQb3B1cCAmJiBuYXZwb3AucGFyZW50UG9wdXAuYXJ0aWNsZS50b1N0cmluZygpO1xuXHRcdGNvbnN0IGxpc3QgPSBsaXN0TGlua3MoZGF0YSwgbmF2cG9wLm9yaWdpbmFsQXJ0aWNsZSwgdGl0bGVUb0VkaXQpO1xuXHRcdGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0bG9nKCdsaXN0TGlua3MgcmV0dXJuZWQgZW1wdHkgbGlzdCcpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBodG1sID0gYDxocj4ke3BvcHVwU3RyaW5nKCdDbGljayB0byBkaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvOicpfTxicj5gO1xuXHRcdGh0bWwgKz0gbGlzdC5qb2luKCcsICcpO1xuXHRcdHJldHVybiBodG1sO1xuXHR9O1xuXHRjb25zdCBtYWtlRml4RGFicyA9ICh3aWtpVGV4dCwgbmF2cG9wKSA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0VmFsdWVPZigncG9wdXBGaXhEYWJzJykgJiZcblx0XHRcdGlzRGlzYW1iaWcod2lraVRleHQsIG5hdnBvcC5hcnRpY2xlKSAmJlxuXHRcdFx0VGl0bGUuZnJvbVVSTChsb2NhdGlvbi5ocmVmKS5uYW1lc3BhY2VJZCgpICE9PSBwZy5uc1NwZWNpYWxJZCAmJlxuXHRcdFx0bmF2cG9wLmFydGljbGUudGFsa1BhZ2UoKVxuXHRcdCkge1xuXHRcdFx0c2V0UG9wdXBIVE1MKG1ha2VGaXhEYWIod2lraVRleHQsIG5hdnBvcCksICdwb3B1cEZpeERhYicsIG5hdnBvcC5pZE51bWJlcik7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBwb3B1cFJlZGxpbmtIVE1MID0gKGFydGljbGUpID0+IHtcblx0XHRyZXR1cm4gY2hhbmdlTGlua1RhcmdldExpbmsoe1xuXHRcdFx0bmV3VGFyZ2V0OiBudWxsLFxuXHRcdFx0dGV4dDogcG9wdXBTdHJpbmcoJ3JlbW92ZSB0aGlzIGxpbmsnKS5zcGxpdCgnICcpLmpvaW4oJyZuYnNwOycpLFxuXHRcdFx0aGludDogcG9wdXBTdHJpbmcoJ3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJyksXG5cdFx0XHRjbGlja0J1dHRvbjogZ2V0VmFsdWVPZigncG9wdXBSZWRsaW5rQXV0b0NsaWNrJyksXG5cdFx0XHRvbGRUYXJnZXQ6IGFydGljbGUudG9TdHJpbmcoKSxcblx0XHRcdHN1bW1hcnk6IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cFJlZGxpbmtTdW1tYXJ5JyksIFthcnRpY2xlLnRvU3RyaW5nKCldKSxcblx0XHR9KTtcblx0fTtcblx0Ly8gRU5ERklMRTogZGFiLmpzXG5cdC8vIFNUQVJURklMRTogaHRtbG91dHB1dC5qc1xuXHQvLyB0aGlzIGhhcyB0byB1c2UgYSB0aW1lciBsb29wIGFzIHdlIGRvbid0IGtub3cgaWYgdGhlIERPTSBlbGVtZW50IGV4aXN0cyB3aGVuIHdlIHdhbnQgdG8gc2V0IHRoZSB0ZXh0XG5cdGNvbnN0IHNldFBvcHVwSFRNTCA9IGZ1bmN0aW9uIHNldFBvcHVwSFRNTChzdHIsIGVsZW1lbnRJZCwgcG9wdXBJZCwgb25TdWNjZXNzLCBhcHBlbmQpIHtcblx0XHRpZiAocG9wdXBJZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBjb25zb2xlLmVycm9yKCdbUG9wdXBzXSBwb3B1cElkIGlzIG5vdCBkZWZpbmVkIGluIHNldFBvcHVwSFRNTCwgaHRtbD0nK3N0ci5zdWJzdHJpbmcoMCwxMDApKTtcblx0XHRcdHBvcHVwSWQgPSBwZy5pZE51bWJlcjtcblx0XHR9XG5cdFx0Y29uc3QgcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZWxlbWVudElkfSR7cG9wdXBJZH1gKTtcblx0XHRpZiAocG9wdXBFbGVtZW50KSB7XG5cdFx0XHRpZiAoIWFwcGVuZCkge1xuXHRcdFx0XHRwb3B1cEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaXNTdHJpbmcoc3RyKSkge1xuXHRcdFx0XHRwb3B1cEVsZW1lbnQuaW5uZXJIVE1MICs9IHN0cjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBvcHVwRWxlbWVudC5hcHBlbmQoc3RyKTtcblx0XHRcdH1cblx0XHRcdGlmIChvblN1Y2Nlc3MpIHtcblx0XHRcdFx0b25TdWNjZXNzKCk7XG5cdFx0XHR9XG5cdFx0XHRzZXRUaW1lb3V0KGNoZWNrUG9wdXBQb3NpdGlvbiwgMTAwKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHQvLyBjYWxsIHRoaXMgZnVuY3Rpb24gYWdhaW4gaW4gYSBsaXR0bGUgd2hpbGUuLi5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHNldFBvcHVwSFRNTChzdHIsIGVsZW1lbnRJZCwgcG9wdXBJZCwgb25TdWNjZXNzKTtcblx0XHR9LCA2MDApO1xuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCBzZXRQb3B1cFRyYWlsZXIgPSAoc3RyLCBpZCkgPT4ge1xuXHRcdHJldHVybiBzZXRQb3B1cEhUTUwoc3RyLCAncG9wdXBEYXRhJywgaWQpO1xuXHR9O1xuXHQvLyBhcmdzLm5hdnBvcHVwIGlzIG1hbmRhdG9yeVxuXHQvLyBvcHRpb25hbDogYXJncy5yZWRpciwgYXJncy5yZWRpclRhcmdldFxuXHQvLyBGSVhNRTogeWUgZ29kcywgdGhpcyBpcyB1Z2x5IHN0dWZmXG5cdGNvbnN0IGZpbGxFbXB0eVNwYW5zID0gKGFyZ3MpID0+IHtcblx0XHQvLyBpZiByZWRpciBpcyBwcmVzZW50IGFuZCB0cnVlIHRoZW4gcmVkaXJUYXJnZXQgaXMgbWFuZGF0b3J5XG5cdFx0bGV0IHJlZGlyID0gdHJ1ZTtcblx0XHRsZXQgcmNpZDtcblx0XHRpZiAodHlwZW9mIGFyZ3MgIT09ICdvYmplY3QnIHx8IGFyZ3MucmVkaXIgPT09IHVuZGVmaW5lZCB8fCAhYXJncy5yZWRpcikge1xuXHRcdFx0cmVkaXIgPSBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgYSA9IGFyZ3MubmF2cG9wdXAucGFyZW50QW5jaG9yO1xuXHRcdGxldCBhcnRpY2xlO1xuXHRcdGxldCBoaW50O1xuXHRcdGxldCBvbGRpZDtcblx0XHRsZXQgcGFyYW1zID0ge307XG5cdFx0aWYgKHJlZGlyICYmIHR5cGVvZiBhcmdzLnJlZGlyVGFyZ2V0ID09PSB0eXBlb2Yge30pIHtcblx0XHRcdGFydGljbGUgPSBhcmdzLnJlZGlyVGFyZ2V0O1xuXHRcdFx0Ly8gaGludD1hcnRpY2xlLmhpbnRWYWx1ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcnRpY2xlID0gbmV3IFRpdGxlKCkuZnJvbUFuY2hvcihhKTtcblx0XHRcdGhpbnQgPSBhLm9yaWdpbmFsVGl0bGUgfHwgYXJ0aWNsZS5oaW50VmFsdWUoKTtcblx0XHRcdHBhcmFtcyA9IHBhcnNlUGFyYW1zKGEuaHJlZik7XG5cdFx0XHRvbGRpZCA9IGdldFZhbHVlT2YoJ3BvcHVwSGlzdG9yaWNhbExpbmtzJykgPyBwYXJhbXMub2xkaWQgOiBudWxsO1xuXHRcdFx0KHtyY2lkfSA9IHBhcmFtcyk7XG5cdFx0fVxuXHRcdGNvbnN0IHggPSB7XG5cdFx0XHRhcnRpY2xlLFxuXHRcdFx0aGludCxcblx0XHRcdG9sZGlkLFxuXHRcdFx0cmNpZCxcblx0XHRcdG5hdnBvcDogYXJncy5uYXZwb3B1cCxcblx0XHRcdHBhcmFtcyxcblx0XHR9O1xuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHBnLnN0cnVjdHVyZXNbZ2V0VmFsdWVPZigncG9wdXBTdHJ1Y3R1cmUnKV07XG5cdFx0aWYgKHR5cGVvZiBzdHJ1Y3R1cmUgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRzZXRQb3B1cEhUTUwoXG5cdFx0XHRcdCdwb3B1cEVycm9yJyxcblx0XHRcdFx0YFVua25vd24gc3RydWN0dXJlICh0aGlzIHNob3VsZCBuZXZlciBoYXBwZW4pOiAke3BnLm9wdGlvbi5wb3B1cFN0cnVjdHVyZX1gLFxuXHRcdFx0XHRhcmdzLm5hdnBvcHVwLmlkTnVtYmVyXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBzcGFucyA9IGZsYXR0ZW4ocGcubWlzYy5sYXlvdXQpO1xuXHRcdGNvbnN0IG51bXNwYW5zID0gc3BhbnMubGVuZ3RoO1xuXHRcdGNvbnN0IHJlZGlycyA9IHBnLm1pc2MucmVkaXJTcGFucztcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG51bXNwYW5zOyArK2kpIHtcblx0XHRcdGNvbnN0IGZvdW5kID0gcmVkaXJzICYmIHJlZGlycy5pbmNsdWRlcyhzcGFuc1tpXSk7XG5cdFx0XHQvLyBsb2coJ3JlZGlyPScgKyByZWRpciArICcsIGZvdW5kPScgKyBmb3VuZCArICcsIHNwYW5zW2ldPScgKyBzcGFuc1tpXSk7XG5cdFx0XHRpZiAoKGZvdW5kICYmICFyZWRpcikgfHwgKCFmb3VuZCAmJiByZWRpcikpIHtcblx0XHRcdFx0Ly8gbG9nKCdza2lwcGluZyB0aGlzIHNldCBvZiB0aGUgbG9vcCcpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHN0cnVjdHVyZWZuID0gc3RydWN0dXJlW3NwYW5zW2ldXTtcblx0XHRcdGlmIChzdHJ1Y3R1cmVmbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIG5vdGhpbmcgdG8gZG8gZm9yIHRoaXMgc3RydWN0dXJlIHBhcnRcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRsZXQgc2V0Zm4gPSBzZXRQb3B1cEhUTUw7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGdldFZhbHVlT2YoJ3BvcHVwQWN0aXZlTmF2bGlua3MnKSAmJlxuXHRcdFx0XHQoc3BhbnNbaV0uaW5kZXhPZigncG9wdXBUb3BMaW5rcycpID09PSAwIHx8IHNwYW5zW2ldLmluZGV4T2YoJ3BvcHVwUmVkaXJUb3BMaW5rcycpID09PSAwKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldGZuID0gc2V0UG9wdXBUaXBzQW5kSFRNTDtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAodHlwZW9mIHN0cnVjdHVyZWZuKSB7XG5cdFx0XHRcdGNhc2UgJ2Z1bmN0aW9uJzpcblx0XHRcdFx0XHRsb2coYHJ1bm5pbmcgJHtzcGFuc1tpXX0oe1xuXHRcdFx0XHRcdFx0YXJ0aWNsZToke3guYXJ0aWNsZX0sIGhpbnQ6JHt4LmhpbnR9LCBvbGRpZDogJHt4Lm9sZGlkfX0pYCk7XG5cdFx0XHRcdFx0c2V0Zm4oc3RydWN0dXJlZm4oeCksIHNwYW5zW2ldLCBhcmdzLm5hdnBvcHVwLmlkTnVtYmVyKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRcdFx0XHRzZXRmbihzdHJ1Y3R1cmVmbiwgc3BhbnNbaV0sIGFyZ3MubmF2cG9wdXAuaWROdW1iZXIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGVycmxvZyhgdW5rbm93biB0aGluZyB3aXRoIGxhYmVsICR7c3BhbnNbaV19IChzcGFuIGluZGV4IHdhcyAke2l9KWApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Ly8gZmxhdHRlbiBhbiBhcnJheVxuXHRjb25zdCBmbGF0dGVuID0gZnVuY3Rpb24gZmxhdHRlbihsaXN0LCBzdGFydCkge1xuXHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRzdGFydCA9IDA7XG5cdFx0fVxuXHRcdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmICh0eXBlb2YgbGlzdFtpXSA9PT0gdHlwZW9mIFtdKSB7XG5cdFx0XHRcdHJldHVybiBbLi4ucmV0LCAuLi5mbGF0dGVuKGxpc3RbaV0pLCAuLi5mbGF0dGVuKGxpc3QsIGkgKyAxKV07XG5cdFx0XHR9XG5cdFx0XHRyZXQucHVzaChsaXN0W2ldKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Ly8gR2VuZXJhdGUgaHRtbCBmb3Igd2hvbGUgcG9wdXBcblx0Y29uc3QgcG9wdXBIVE1MID0gZnVuY3Rpb24gcG9wdXBIVE1MKGEpIHtcblx0XHRnZXRWYWx1ZU9mKCdwb3B1cFN0cnVjdHVyZScpO1xuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHBnLnN0cnVjdHVyZXNbcGcub3B0aW9uLnBvcHVwU3RydWN0dXJlXTtcblx0XHRpZiAodHlwZW9mIHN0cnVjdHVyZSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdC8vIHJldHVybiAnVW5rbm93biBzdHJ1Y3R1cmU6ICcrcGcub3B0aW9uLnBvcHVwU3RydWN0dXJlO1xuXHRcdFx0Ly8gb3ZlcnJpZGUgdXNlciBjaG9pY2Vcblx0XHRcdHBnLm9wdGlvbi5wb3B1cFN0cnVjdHVyZSA9IHBnLm9wdGlvbkRlZmF1bHQucG9wdXBTdHJ1Y3R1cmU7XG5cdFx0XHRyZXR1cm4gcG9wdXBIVE1MKGEpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHN0cnVjdHVyZS5wb3B1cExheW91dCAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuICdCYWQgbGF5b3V0Jztcblx0XHR9XG5cdFx0cGcubWlzYy5sYXlvdXQgPSBzdHJ1Y3R1cmUucG9wdXBMYXlvdXQoKTtcblx0XHRwZy5taXNjLnJlZGlyU3BhbnMgPSB0eXBlb2Ygc3RydWN0dXJlLnBvcHVwUmVkaXJTcGFucyA9PT0gJ2Z1bmN0aW9uJyA/IHN0cnVjdHVyZS5wb3B1cFJlZGlyU3BhbnMoKSA6IFtdO1xuXHRcdHJldHVybiBtYWtlRW1wdHlTcGFucyhwZy5taXNjLmxheW91dCwgYS5uYXZwb3B1cCk7XG5cdH07XG5cdGNvbnN0IG1ha2VFbXB0eVNwYW5zID0gZnVuY3Rpb24gbWFrZUVtcHR5U3BhbnMobGlzdCwgbmF2cG9wKSB7XG5cdFx0bGV0IHJldCA9ICcnO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBsaXN0KSB7XG5cdFx0XHRpZiAodHlwZW9mIGVsZW1lbnQgPT09IHR5cGVvZiAnJykge1xuXHRcdFx0XHRyZXQgKz0gZW1wdHlTcGFuSFRNTChlbGVtZW50LCBuYXZwb3AuaWROdW1iZXIsICdkaXYnKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09IHR5cGVvZiBbXSAmJiBlbGVtZW50Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cmV0ID0gcmV0LnNwbGl0KC8oPFxcL1tePl0qPz4kKS8pLmpvaW4obWFrZUVtcHR5U3BhbnMoZWxlbWVudCwgbmF2cG9wKSk7XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSB0eXBlb2Yge30gJiYgZWxlbWVudC5ub2RlVHlwZSkge1xuXHRcdFx0XHRyZXQgKz0gZW1wdHlTcGFuSFRNTChlbGVtZW50Lm5hbWUsIG5hdnBvcC5pZE51bWJlciwgZWxlbWVudC5ub2RlVHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IGVtcHR5U3BhbkhUTUwgPSBmdW5jdGlvbiBlbXB0eVNwYW5IVE1MKG5hbWUsIGlkLCB0YWcsIGNsYXNzbmFtZSkge1xuXHRcdHRhZyB8fD0gJ3NwYW4nO1xuXHRcdGNsYXNzbmFtZSB8fD0gZW1wdHlTcGFuSFRNTC5jbGFzc0FsaWFzZXNbbmFtZV07XG5cdFx0Y2xhc3NuYW1lIHx8PSBuYW1lO1xuXHRcdGlmIChuYW1lID09PSBnZXRWYWx1ZU9mKCdwb3B1cERyYWdIYW5kbGUnKSkge1xuXHRcdFx0Y2xhc3NuYW1lICs9ICcgcG9wdXBEcmFnSGFuZGxlJztcblx0XHR9XG5cdFx0cmV0dXJuIHNpbXBsZVByaW50ZignPCVzIGlkPVwiJXNcIiBjbGFzcz1cIiVzXCI+PC8lcz4nLCBbdGFnLCBuYW1lICsgaWQsIGNsYXNzbmFtZSwgdGFnXSk7XG5cdH07XG5cdGVtcHR5U3BhbkhUTUwuY2xhc3NBbGlhc2VzID0ge1xuXHRcdHBvcHVwU2Vjb25kUHJldmlldzogJ3BvcHVwUHJldmlldycsXG5cdH07XG5cdC8vIGdlbmVyYXRlIGh0bWwgZm9yIHBvcHVwIGltYWdlXG5cdC8vIDxhIGlkPVwicG9wdXBJbWFnZUxpbmtuXCI+PGltZyBpZD1cInBvcHVwSW1hZ2VuXCI+XG5cdC8vIHdoZXJlIG49aWROdW1iZXJcblx0Y29uc3QgaW1hZ2VIVE1MID0gKF9hcnRpY2xlLCBpZE51bWJlcikgPT4ge1xuXHRcdHJldHVybiBzaW1wbGVQcmludGYoXG5cdFx0XHQnPGEgaWQ9XCJwb3B1cEltYWdlTGluayQxXCI+JyArXG5cdFx0XHRcdCc8aW1nIGFsaWduPVwicmlnaHRcIiB2YWxpZ249XCJ0b3BcIiBpZD1cInBvcHVwSW1nJDFcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPjwvaW1nPicgK1xuXHRcdFx0XHQnPC9hPicsXG5cdFx0XHRbaWROdW1iZXJdXG5cdFx0KTtcblx0fTtcblx0Y29uc3QgcG9wVGlwc1Nvb25GbiA9IChpZCwgd2hlbiwgcG9wRGF0YSkgPT4ge1xuXHRcdHdoZW4gfHw9IDI1MDtcblx0XHRjb25zdCBwb3BUaXBzID0gKCkgPT4ge1xuXHRcdFx0c2V0dXBUb29sdGlwcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKSwgZmFsc2UsIHRydWUsIHBvcERhdGEpO1xuXHRcdH07XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHNldFRpbWVvdXQocG9wVGlwcywgd2hlbiwgcG9wRGF0YSk7XG5cdFx0fTtcblx0fTtcblx0Y29uc3Qgc2V0UG9wdXBUaXBzQW5kSFRNTCA9IChodG1sLCBkaXZuYW1lLCBpZG51bWJlciwgcG9wRGF0YSkgPT4ge1xuXHRcdHNldFBvcHVwSFRNTChcblx0XHRcdGh0bWwsXG5cdFx0XHRkaXZuYW1lLFxuXHRcdFx0aWRudW1iZXIsXG5cdFx0XHRnZXRWYWx1ZU9mKCdwb3B1cFN1YnBvcHVwcycpID8gcG9wVGlwc1Nvb25GbihkaXZuYW1lICsgaWRudW1iZXIsIG51bGwsIHBvcERhdGEpIDogbnVsbFxuXHRcdCk7XG5cdH07XG5cdC8vIEVOREZJTEU6IGh0bWxvdXRwdXQuanNcblx0Ly8gU1RBUlRGSUxFOiBtb3VzZW91dC5qc1xuXHQvLyBmdXp6eSBjaGVja3Ncblx0Y29uc3QgZnV6enlDdXJzb3JPZmZNZW51cyA9IChfeCwgX3ksIF9mdXp6LCBwYXJlbnQpID0+IHtcblx0XHRpZiAoIXBhcmVudCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHVscyA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpO1xuXHRcdGZvciAoY29uc3QgdWwgb2YgdWxzKSB7XG5cdFx0XHRpZiAodWwuY2xhc3NOYW1lID09PSAncG9wdXBfbWVudScgJiYgdWwub2Zmc2V0V2lkdGggPiAwKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gLy8gZWxzZSB7IGRvY3VtZW50LnRpdGxlKz0nLic7IH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cdGNvbnN0IGNoZWNrUG9wdXBQb3NpdGlvbiA9ICgpID0+IHtcblx0XHQvLyBzdG9wIHRoZSBwb3B1cCBydW5uaW5nIG9mZiB0aGUgcmlnaHQgb2YgdGhlIHNjcmVlblxuXHRcdC8vIEZJWE1FIGF2b2lkIHBnLmN1cnJlbnQubGlua1xuXHRcdGlmIChwZy5jdXJyZW50LmxpbmsgJiYgcGcuY3VycmVudC5saW5rLm5hdnBvcHVwKSB7XG5cdFx0XHRwZy5jdXJyZW50LmxpbmsubmF2cG9wdXAubGltaXRIb3Jpem9udGFsUG9zaXRpb24oKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG1vdXNlT3V0V2lraUxpbmsgPSBmdW5jdGlvbiBtb3VzZU91dFdpa2lMaW5rKCkge1xuXHRcdC8vIGNvbnNvbGUgKCdtb3VzZU91dFdpa2lMaW5rJyk7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0cmVtb3ZlTW9kaWZpZXJLZXlMaXN0ZW5lcihzZWxmKTtcblx0XHRpZiAoc2VsZi5uYXZwb3B1cCA9PT0gbnVsbCB8fCBzZWxmLm5hdnBvcHVwID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFzZWxmLm5hdnBvcHVwLmlzVmlzaWJsZSgpKSB7XG5cdFx0XHRzZWxmLm5hdnBvcHVwLmJhbmlzaCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXN0b3JlVGl0bGUoc2VsZik7XG5cdFx0TmF2cG9wdXAudHJhY2tlci5hZGRIb29rKHBvc0NoZWNrZXJIb29rKHNlbGYubmF2cG9wdXApKTtcblx0fTtcblx0Y29uc3QgcG9zQ2hlY2tlckhvb2sgPSAobmF2cG9wKSA9PiB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGlmICghbmF2cG9wLmlzVmlzaWJsZSgpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlOyAvKiByZW1vdmUgdGhpcyBob29rICovXG5cdFx0XHR9XG5cdFx0XHRpZiAoTmF2cG9wdXAudHJhY2tlci5kaXJ0eSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB7eH0gPSBOYXZwb3B1cC50cmFja2VyO1xuXHRcdFx0Y29uc3Qge3l9ID0gTmF2cG9wdXAudHJhY2tlcjtcblx0XHRcdGNvbnN0IG1vdXNlT3Zlck5hdnBvcCA9XG5cdFx0XHRcdG5hdnBvcC5pc1dpdGhpbih4LCB5LCBuYXZwb3AuZnV6eiwgbmF2cG9wLm1haW5EaXYpIHx8XG5cdFx0XHRcdCFmdXp6eUN1cnNvck9mZk1lbnVzKHgsIHksIG5hdnBvcC5mdXp6LCBuYXZwb3AubWFpbkRpdik7XG5cdFx0XHQvLyBGSVhNRSBpdCdkIGJlIHByZXR0aWVyIHRvIGRvIHRoaXMgaW50ZXJuYWwgdG8gdGhlIE5hdnBvcHVwIG9iamVjdHNcblx0XHRcdGxldCB0ID0gZ2V0VmFsdWVPZigncG9wdXBIaWRlRGVsYXknKTtcblx0XHRcdGlmICh0KSB7XG5cdFx0XHRcdHQgKj0gMTAwMDtcblx0XHRcdH1cblx0XHRcdGlmICghdCkge1xuXHRcdFx0XHRpZiAoIW1vdXNlT3Zlck5hdnBvcCkge1xuXHRcdFx0XHRcdGlmIChuYXZwb3AucGFyZW50QW5jaG9yKSB7XG5cdFx0XHRcdFx0XHRyZXN0b3JlVGl0bGUobmF2cG9wLnBhcmVudEFuY2hvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5hdnBvcC5iYW5pc2goKTtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLyogcmVtb3ZlIHRoaXMgaG9vayAqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIHdlIGhhdmUgYSBoaWRlIGRlbGF5IHNldFxuXHRcdFx0Y29uc3QgZCA9IERhdGUubm93KCk7XG5cdFx0XHRpZiAoIW5hdnBvcC5tb3VzZUxlYXZpbmdUaW1lKSB7XG5cdFx0XHRcdG5hdnBvcC5tb3VzZUxlYXZpbmdUaW1lID0gZDtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vdXNlT3Zlck5hdnBvcCkge1xuXHRcdFx0XHRuYXZwb3AubW91c2VMZWF2aW5nVGltZSA9IG51bGw7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChkIC0gbmF2cG9wLm1vdXNlTGVhdmluZ1RpbWUgPiB0KSB7XG5cdFx0XHRcdG5hdnBvcC5tb3VzZUxlYXZpbmdUaW1lID0gbnVsbDtcblx0XHRcdFx0bmF2cG9wLmJhbmlzaCgpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLyogcmVtb3ZlIHRoaXMgaG9vayAqL1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdH07XG5cdGNvbnN0IHJ1blN0b3BQb3B1cFRpbWVyID0gKG5hdnBvcCkgPT4ge1xuXHRcdC8vIGF0IHRoaXMgcG9pbnQsIHdlIHNob3VsZCBoYXZlIGxlZnQgdGhlIGxpbmsgYnV0IHJlbWFpbiB3aXRoaW4gdGhlIHBvcHVwXG5cdFx0Ly8gc28gd2UgY2FsbCB0aGlzIGZ1bmN0aW9uIGFnYWluIHVudGlsIHdlIGxlYXZlIHRoZSBwb3B1cC5cblx0XHRpZiAoIW5hdnBvcC5zdG9wUG9wdXBUaW1lcikge1xuXHRcdFx0bmF2cG9wLnN0b3BQb3B1cFRpbWVyID0gc2V0SW50ZXJ2YWwocG9zQ2hlY2tlckhvb2sobmF2cG9wKSwgNTAwKTtcblx0XHRcdG5hdnBvcC5hZGRIb29rKFxuXHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChuYXZwb3Auc3RvcFBvcHVwVGltZXIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaGlkZScsXG5cdFx0XHRcdCdiZWZvcmUnXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Ly8gRU5ERklMRTogbW91c2VvdXQuanNcblx0Ly8gU1RBUlRGSUxFOiBwcmV2aWV3bWFrZXIuanNcblx0LyoqXG5cdCAqIEBmaWxlb3ZlcnZpZXdcblx0ICogRGVmaW5lcyB0aGUge0Bzb3VyY2UgUHJldmlld21ha2VyfSBvYmplY3QsIHdoaWNoIGdlbmVyYXRlcyBzaG9ydCBwcmV2aWV3cyBmcm9tIHdpa2kgbWFya3VwLlxuXHQgKi9cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgUHJldmlld21ha2VyXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAY2xhc3MgVGhlIFByZXZpZXdtYWtlciBjbGFzcy4gVXNlIGFuIGluc3RhbmNlIG9mIHRoaXMgdG8gZ2VuZXJhdGUgc2hvcnQgcHJldmlld3MgZnJvbSBXaWtpdGV4dC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2lUZXh0IFRoZSBXaWtpdGV4dCBzb3VyY2Ugb2YgdGhlIHBhZ2Ugd2Ugd2lzaCB0byBwcmV2aWV3LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVybCBUaGUgdXJsIHdlIHNob3VsZCBwcmVwZW5kIHdoZW4gY3JlYXRpbmcgcmVsYXRpdmUgdXJscy5cblx0ICogQHBhcmFtIHtOYXZwb3B1cH0gb3duZXIgVGhlIG5hdnBvcCBhc3NvY2lhdGVkIHRvIHRoaXMgcHJldmlldyBnZW5lcmF0b3Jcblx0ICovXG5cdGNsYXNzIFByZXZpZXdtYWtlciB7XG5cdFx0Y29uc3RydWN0b3Iod2lraVRleHQsIGJhc2VVcmwsIG93bmVyKSB7XG5cdFx0XHQvKiogVGhlIHdpa2l0ZXh0IHdoaWNoIGlzIG1hbmlwdWxhdGVkIHRvIGdlbmVyYXRlIHRoZSBwcmV2aWV3LiAqL1xuXHRcdFx0dGhpcy5vcmlnaW5hbERhdGEgPSB3aWtpVGV4dDtcblx0XHRcdHRoaXMuYmFzZVVybCA9IGJhc2VVcmw7XG5cdFx0XHR0aGlzLm93bmVyID0gb3duZXI7XG5cdFx0XHR0aGlzLm1heENoYXJhY3RlcnMgPSBnZXRWYWx1ZU9mKCdwb3B1cE1heFByZXZpZXdDaGFyYWN0ZXJzJyk7XG5cdFx0XHR0aGlzLm1heFNlbnRlbmNlcyA9IGdldFZhbHVlT2YoJ3BvcHVwTWF4UHJldmlld1NlbnRlbmNlcycpO1xuXHRcdFx0dGhpcy5zZXREYXRhKCk7XG5cdFx0fVxuXHRcdHNldERhdGEoKSB7XG5cdFx0XHRjb25zdCBtYXhTaXplID0gTWF0aC5tYXgoMWU0LCAyICogdGhpcy5tYXhDaGFyYWN0ZXJzKTtcblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMub3JpZ2luYWxEYXRhLnNsaWNlKDAsIE1hdGgubWF4KDAsIG1heFNpemUpKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIEhUTUwgY29tbWVudHNcblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbENvbW1lbnRzKCkge1xuXHRcdFx0Ly8gdGhpcyBhbHNvIGtpbGxzIG9uZSB0cmFpbGluZyBuZXdsaW5lLCBlZyBbW2RpYW15b11dXG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXjwhLS1bXiRdKj8tLT5cXG58XFxuPCEtLVteJF0qPy0tPig/PVxcbil8PCEtLVteJF0qPy0tPi9nLCAnJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbERpdnMoKSB7XG5cdFx0XHQvLyBzYXkgZ29vZGJ5ZSwgZGl2cyAoY2FuIGJlIG5lc3RlZCwgc28gdXNlICogbm90ICo/KVxuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoLzwgKmRpdltePl0qICo+W1xcU1xcc10qPzwgKlxcLyAqZGl2ICo+L2dpLCAnJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbEdhbGxlcmllcygpIHtcblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC88ICpnYWxsZXJ5W14+XSogKj5bXFxTXFxzXSo/PCAqXFwvICpnYWxsZXJ5ICo+L2dpLCAnJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBvcGVuaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGNsb3Npbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gc3Vib3BlbmluZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBzdWJjbG9zaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHJlcGxcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGwob3BlbmluZywgY2xvc2luZywgc3Vib3BlbmluZywgc3ViY2xvc2luZywgcmVwbCkge1xuXHRcdFx0bGV0IG9sZGsgPSB0aGlzLmRhdGE7XG5cdFx0XHRsZXQgayA9IFByZXZpZXdtYWtlci5raWxsU3R1ZmYodGhpcy5kYXRhLCBvcGVuaW5nLCBjbG9zaW5nLCBzdWJvcGVuaW5nLCBzdWJjbG9zaW5nLCByZXBsKTtcblx0XHRcdHdoaWxlIChrLmxlbmd0aCA8IG9sZGsubGVuZ3RoKSB7XG5cdFx0XHRcdG9sZGsgPSBrO1xuXHRcdFx0XHRrID0gUHJldmlld21ha2VyLmtpbGxTdHVmZihrLCBvcGVuaW5nLCBjbG9zaW5nLCBzdWJvcGVuaW5nLCBzdWJjbG9zaW5nLCByZXBsKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZGF0YSA9IGs7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSB0eHRcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gb3BlbmluZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBjbG9zaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHN1Ym9wZW5pbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gc3ViY2xvc2luZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSByZXBsXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRzdGF0aWMga2lsbFN0dWZmKHR4dCwgb3BlbmluZywgY2xvc2luZywgc3Vib3BlbmluZywgc3ViY2xvc2luZywgcmVwbCkge1xuXHRcdFx0Y29uc3Qgb3AgPSBQcmV2aWV3bWFrZXIubWFrZVJlZ2V4cChvcGVuaW5nKTtcblx0XHRcdGNvbnN0IGNsID0gUHJldmlld21ha2VyLm1ha2VSZWdleHAoY2xvc2luZywgJ14nKTtcblx0XHRcdGNvbnN0IHNiID0gc3Vib3BlbmluZyA/IFByZXZpZXdtYWtlci5tYWtlUmVnZXhwKHN1Ym9wZW5pbmcsICdeJykgOiBudWxsO1xuXHRcdFx0Y29uc3Qgc2MgPSBzdWJjbG9zaW5nID8gUHJldmlld21ha2VyLm1ha2VSZWdleHAoc3ViY2xvc2luZywgJ14nKSA6IGNsO1xuXHRcdFx0aWYgKCFvcCB8fCAhY2wpIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoJ05hdmlnYXRpb24gUG9wdXBzIGVycm9yOiBvcCBvciBjbCBpcyBudWxsISBzb21ldGhpbmcgaXMgd3JvbmcuJywge1xuXHRcdFx0XHRcdHRhZzogJ3BvcHVwcycsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghb3AudGVzdCh0eHQpKSB7XG5cdFx0XHRcdHJldHVybiB0eHQ7XG5cdFx0XHR9XG5cdFx0XHRsZXQgcmV0ID0gJyc7XG5cdFx0XHRjb25zdCBvcFJlc3VsdCA9IG9wLmV4ZWModHh0KTtcblx0XHRcdHJldCA9IHR4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBvcFJlc3VsdC5pbmRleCkpO1xuXHRcdFx0dHh0ID0gdHh0LnNsaWNlKE1hdGgubWF4KDAsIG9wUmVzdWx0LmluZGV4ICsgb3BSZXN1bHRbMF0ubGVuZ3RoKSk7XG5cdFx0XHRsZXQgZGVwdGggPSAxO1xuXHRcdFx0d2hpbGUgKHR4dC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGxldCByZW1vdmFsID0gMDtcblx0XHRcdFx0aWYgKGRlcHRoID09PSAxICYmIGNsLnRlc3QodHh0KSkge1xuXHRcdFx0XHRcdGRlcHRoLS07XG5cdFx0XHRcdFx0cmVtb3ZhbCA9IGNsLmV4ZWModHh0KVswXS5sZW5ndGg7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZGVwdGggPiAxICYmIHNjLnRlc3QodHh0KSkge1xuXHRcdFx0XHRcdGRlcHRoLS07XG5cdFx0XHRcdFx0cmVtb3ZhbCA9IHNjLmV4ZWModHh0KVswXS5sZW5ndGg7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc2IgJiYgc2IudGVzdCh0eHQpKSB7XG5cdFx0XHRcdFx0ZGVwdGgrKztcblx0XHRcdFx0XHRyZW1vdmFsID0gc2IuZXhlYyh0eHQpWzBdLmxlbmd0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZW1vdmFsIHx8PSAxO1xuXHRcdFx0XHR0eHQgPSB0eHQuc2xpY2UoTWF0aC5tYXgoMCwgcmVtb3ZhbCkpO1xuXHRcdFx0XHRpZiAoZGVwdGggPT09IDApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldCArIChyZXBsIHx8ICcnKSArIHR4dDtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSB4XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBwcmVmaXhcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHN1ZmZpeFxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0c3RhdGljIG1ha2VSZWdleHAoeCwgcHJlZml4LCBzdWZmaXgpIHtcblx0XHRcdHByZWZpeCB8fD0gJyc7XG5cdFx0XHRzdWZmaXggfHw9ICcnO1xuXHRcdFx0bGV0IHJlU3RyID0gJyc7XG5cdFx0XHRsZXQgZmxhZ3MgPSAnJztcblx0XHRcdGlmIChpc1N0cmluZyh4KSkge1xuXHRcdFx0XHRyZVN0ciA9IHByZWZpeCArIGxpdGVyYWxpemVSZWdleCh4KSArIHN1ZmZpeDtcblx0XHRcdH0gZWxzZSBpZiAoaXNSZWdFeHAoeCkpIHtcblx0XHRcdFx0bGV0IHMgPSB4LnRvU3RyaW5nKCkuc2xpY2UoMSk7XG5cdFx0XHRcdGNvbnN0IHNwID0gcy5zcGxpdCgnLycpO1xuXHRcdFx0XHRmbGFncyA9IHNwLmF0KC0xKTtcblx0XHRcdFx0c3Bbc3AubGVuZ3RoIC0gMV0gPSAnJztcblx0XHRcdFx0cyA9IHNwLmpvaW4oJy8nKTtcblx0XHRcdFx0cyA9IHMuc2xpY2UoMCwgTWF0aC5tYXgoMCwgcy5sZW5ndGggLSAxKSk7XG5cdFx0XHRcdHJlU3RyID0gcHJlZml4ICsgcyArIHN1ZmZpeDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxvZygnbWFrZVJlZ2V4cCBmYWlsZWQnKTtcblx0XHRcdH1cblx0XHRcdGxvZyhgbWFrZVJlZ2V4cDogZ290IHJlU3RyPSR7cmVTdHJ9LCBmbGFncz0ke2ZsYWdzfWApO1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAocmVTdHIsIGZsYWdzKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsQm94VGVtcGxhdGVzKCkge1xuXHRcdFx0Ly8gdGF4b2JveCByZW1vdmFsLi4uIGluIGZhY3QsIHRoZXJlJ3MgYSBzYXVkaXByaW5jZWJveF9iZWdpbiwgc28gbGV0J3MgYmUgbW9yZSBnZW5lcmFsXG5cdFx0XHQvLyBhbHNvLCBoYXZlIGZsb2F0X2JlZ2luLCAuLi4gZmxvYXRfZW5kXG5cdFx0XHR0aGlzLmtpbGwoL3t7W15cXHN7fH1dKj8oZmxvYXR8Ym94KVsgX10oYmVnaW58c3RhcnQpL2ksIC99fVxccyovLCAne3snKTtcblx0XHRcdC8vIGluZm9ib3hlcyBldGNcblx0XHRcdC8vIGZyb20gWnl4dzoga2lsbCBmcmFtZXMgdG9vXG5cdFx0XHR0aGlzLmtpbGwoL3t7W15cXHN7fH1dKj8oaW5mb2JveHxlbGVtZW50Ym94fGZyYW1lKVsgX10vaSwgL319XFxzKi8sICd7eycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxUZW1wbGF0ZXMoKSB7XG5cdFx0XHR0aGlzLmtpbGwoJ3t7JywgJ319JywgJ3snLCAnfScsICcgJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbFRhYmxlcygpIHtcblx0XHRcdC8vIHRhYmxlcyBhcmUgYmFkLCB0b29cblx0XHRcdC8vIHRoaXMgY2FuIGJlIHNsb3csIGJ1dCBpdCdzIGFuIGlucHJvdmVtZW50IG92ZXIgYSBicm93c2VyIGhhbmdcblx0XHRcdC8vIHRvcnR1cmUgdGVzdDogW1tDb21wYXJpc29uX29mX0ludGVsX0NlbnRyYWxfUHJvY2Vzc2luZ19Vbml0c11dXG5cdFx0XHR0aGlzLmtpbGwoJ3t8JywgL1xcfH1cXHMqLywgJ3t8Jyk7XG5cdFx0XHR0aGlzLmtpbGwoLzx0YWJsZS4qPz4vaSwgLzxcXC90YWJsZS4qPz4vaSwgLzx0YWJsZS4qPz4vaSk7XG5cdFx0XHQvLyByZW1vdmUgbGluZXMgc3RhcnRpbmcgd2l0aCBhIHBpcGUgZm9yIHRoZSBoZWxsIG9mIGl0ICg/KVxuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL15cXHwuKiQvZ20sICcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsSW1hZ2VzKCkge1xuXHRcdFx0Y29uc3QgZm9yYmlkZGVuTmFtZXNwYWNlQWxpYXNlcyA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBbbG9jYWxpemVkTmFtZXNwYWNlTGMsIG5hbWVzcGFjZUlkXSBvZiBPYmplY3QuZW50cmllcyhtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZUlkcycpKSkge1xuXHRcdFx0XHRpZiAobmFtZXNwYWNlSWQgIT09IHBnLm5zSW1hZ2VJZCAmJiBuYW1lc3BhY2VJZCAhPT0gcGcubnNDYXRlZ29yeUlkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvcmJpZGRlbk5hbWVzcGFjZUFsaWFzZXMucHVzaChsb2NhbGl6ZWROYW1lc3BhY2VMYy5zcGxpdCgnICcpLmpvaW4oJ1sgX10nKSk7IC8vIHRvZG86IGVzY2FwZSByZWdleHAgZnJhZ21lbnRzIVxuXHRcdFx0fVxuXHRcdFx0Ly8gaW1hZ2VzIGFuZCBjYXRlZ29yaWVzIGFyZSBhIG5vbm9cblx0XHRcdHRoaXMua2lsbChuZXcgUmVnRXhwKGBbW11bW11cXFxccyooJHtmb3JiaWRkZW5OYW1lc3BhY2VBbGlhc2VzLmpvaW4oJ3wnKX0pXFxcXHMqOmAsICdpJyksIC9dXVxccyovLCAnWycsICddJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbEhUTUwoKSB7XG5cdFx0XHQvLyBraWxsIDxyZWYgLi4uPi4uLjwvcmVmPlxuXHRcdFx0dGhpcy5raWxsKC88cmVmXFxiW14vPl0qPz4vaSwgLzxcXC9yZWY+L2kpO1xuXHRcdFx0Ly8gbGV0J3MgYWxzbyBkZWxldGUgZW50aXJlIGxpbmVzIHN0YXJ0aW5nIHdpdGggPC4gaXQncyB3b3J0aCBhIHRyeS5cblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC8oXnxcXG4pICo8LiovZywgJ1xcbicpO1xuXHRcdFx0Ly8gYW5kIHRob3NlIHBlc2t5IGh0bWwgdGFncywgYnV0IG5vdCBub3dpa2kgb3IgYmxvY2txdW90ZSB0YWdzXG5cdFx0XHRjb25zdCBzcGxpdHRlZCA9IHRoaXMuZGF0YS5zcGxpdCgvKDxbXFxXXFx3XSo/KD86PnwkfCg/PTwpKSkvKTtcblx0XHRcdGNvbnN0IGxlbiA9IHNwbGl0dGVkLmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgbGVuOyBpICs9IDIpIHtcblx0XHRcdFx0c3dpdGNoIChzcGxpdHRlZFtpXSkge1xuXHRcdFx0XHRcdGNhc2UgJzxubycuY29uY2F0KCd3aWtpJywgJz4nKTpcblx0XHRcdFx0XHRjYXNlICc8L25vJy5jb25jYXQoJ3dpa2knLCAnPicpOlxuXHRcdFx0XHRcdGNhc2UgJzxibG9jaycuY29uY2F0KCdxdW90ZScsICc+Jyk6XG5cdFx0XHRcdFx0Y2FzZSAnPC9ibG9jaycuY29uY2F0KCdxdW90ZScsICc+Jyk6XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0c3BsaXR0ZWRbaV0gPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5kYXRhID0gc3BsaXR0ZWQuam9pbignJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbENodW5rcygpIHtcblx0XHRcdC8vIGhldXJpc3RpY3MgYWxlcnRcblx0XHRcdC8vIGNodW5rcyBvZiBpdGFsaWMgdGV4dD8geW91IGNyYXp5LCBtYW4/XG5cdFx0XHRjb25zdCBpdGFsaWNDaHVua1JlZ2V4ID0gLygoXnxcXG4pXFxzKjoqXFxzKicnW14nXShbXiddfCcnJ3wnW14nXSl7MjB9KC58XFxuW15cXG5dKSonJ1tcXHMhLj9dKlxcbikrL2c7XG5cdFx0XHQvLyBrZWVwIHN0dWZmIHNlcGFyYXRlZCwgdGhvdWdoLCBzbyBzdGljayBpbiBcXG4gKGZpeGVzIFtbVW5pb24gSmFja11dP1xuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoaXRhbGljQ2h1bmtSZWdleCwgJ1xcbicpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdG1vcHVwKCkge1xuXHRcdFx0Ly8gd2Ugc2ltcGx5ICpjYW4ndCogYmUgZG9pbmcgd2l0aCBob3Jpem9udGFsIHJ1bGVzIHJpZ2h0IG5vd1xuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL14tezQsfS9nbSwgJycpO1xuXHRcdFx0Ly8gbm8gaW5kZW50ZWQgbGluZXNcblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC8oXnxcXG4pICo6W15cXG5dKi9nLCAnJyk7XG5cdFx0XHQvLyByZXBsYWNlIF9fVE9DX18sIF9fTk9UT0NfXyBhbmQgd2hhdGV2ZXIgZWxzZSB0aGVyZSBpc1xuXHRcdFx0Ly8gdGhpcydsbCBwcm9iYWJseSBkb1xuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL15fX1tfYS16XSpfXyAqJC9naW0sICcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRmaXJzdEJpdCgpIHtcblx0XHRcdC8vIGRvbnQndCBiZSBnaXZpbicgbWUgbm8gc3Vic2VxdWVudCBwYXJhZ3JhcGhzLCB5b3UgaGVhciBtZT9cblx0XHRcdC8vIC8gZmlyc3Qgd2UgXCJub3JtYWxpemVcIiBzZWN0aW9uIGhlYWRpbmdzLCByZW1vdmluZyB3aGl0ZXNwYWNlIGFmdGVyLCBhZGRpbmcgYmVmb3JlXG5cdFx0XHRsZXQgZCA9IHRoaXMuZGF0YTtcblx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFByZXZpZXdDdXRIZWFkaW5ncycpKSB7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9cXHMqKD09K1tePV0qPT0rKVxccyovZywgJ1xcblxcbiQxICcpO1xuXHRcdFx0XHQvLyAvIHRoZW4gd2Ugd2FudCB0byBnZXQgcmlkIG9mIHBhcmFncmFwaCBicmVha3Mgd2hvc2UgdGV4dCBlbmRzIGJhZGx5XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC8oWzo7XSkgKlxcbnsyLH0vZywgJyQxXFxuJyk7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eXFxzKi8sICcnKTtcblx0XHRcdFx0Y29uc3Qgc3R1ZmYgPSAvXihbXlxcbl18XFxuXFxTKSovLmV4ZWModGhpcy5kYXRhKTtcblx0XHRcdFx0aWYgKHN0dWZmKSB7XG5cdFx0XHRcdFx0W2RdID0gc3R1ZmY7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cFByZXZpZXdGaXJzdFBhck9ubHknKSkge1xuXHRcdFx0XHRcdGQgPSB0aGlzLmRhdGE7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gLyBub3cgcHV0IFxcblxcbiBhZnRlciBzZWN0aW9ucyBzbyB0aGF0IGJ1bGxldHMgYW5kIG51bWJlcmVkIGxpc3RzIHdvcmtcblx0XHRcdFx0ZCA9IGQucmVwbGFjZSgvKD09K1tePV0qPT0rKVxccyovZywgJyQxXFxuXFxuJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBTcGxpdCBzZW50ZW5jZXMuIFN1cGVyZmx1b3VzIHNlbnRlbmNlcyBhcmUgUklHSFQgT1VULlxuXHRcdFx0Ly8gbm90ZTogZXhhY3RseSAxIHNldCBvZiBwYXJlbnMgaGVyZSBuZWVkZWQgdG8gbWFrZSB0aGUgc2xpY2Ugd29ya1xuXHRcdFx0ZCA9IGQuc3BsaXQoLyhbIS4/XStbXCInXSpcXHMpL2cpO1xuXHRcdFx0Ly8gbGVhZGluZyBzcGFjZSBpcyBiYWQsIG1ta2F5P1xuXHRcdFx0ZFswXSA9IGRbMF0ucmVwbGFjZSgvXlxccyovLCAnJyk7XG5cdFx0XHRjb25zdCBub3RTZW50ZW5jZUVuZHMgPSAvKFteLl1bYS16XVxcLiAqW2Etel18ZXRjfHNpY3xkcnxtcnxtcnN8bXN8c3R8bm98b3B8Y2l0fFxcW1teXFxdXSp8XFxzW2Etel0pJC9pO1xuXHRcdFx0ZCA9IHRoaXMuZml4U2VudGVuY2VFbmRzKGQsIG5vdFNlbnRlbmNlRW5kcyk7XG5cdFx0XHR0aGlzLmZ1bGxMZW5ndGggPSBkLmpvaW4oJycpLmxlbmd0aDtcblx0XHRcdGxldCBuID0gdGhpcy5tYXhTZW50ZW5jZXM7XG5cdFx0XHRsZXQgZGQgPSBQcmV2aWV3bWFrZXIuZmlyc3RTZW50ZW5jZXMoZCwgbik7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdGRkID0gUHJldmlld21ha2VyLmZpcnN0U2VudGVuY2VzKGQsIG4pO1xuXHRcdFx0XHQtLW47XG5cdFx0XHR9IHdoaWxlIChkZC5sZW5ndGggPiB0aGlzLm1heENoYXJhY3RlcnMgJiYgbiAhPT0gMCk7XG5cdFx0XHR0aGlzLmRhdGEgPSBkZDtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cnNcblx0XHQgKiBAcGFyYW0ge1JlZ0V4cH0gcmVnXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRmaXhTZW50ZW5jZUVuZHMoc3RycywgcmVnKSB7XG5cdFx0XHQvLyB0YWtlIGFuIGFycmF5IG9mIHN0cmluZ3MsIHN0cnNcblx0XHRcdC8vIGpvaW4gc3Ryc1tpXSB0byBzdHJzW2krMV0gJiBzdHJzW2krMl0gaWYgc3Ryc1tpXSBtYXRjaGVzIHJlZ2V4IHJlZ1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHJzLmxlbmd0aCAtIDI7ICsraSkge1xuXHRcdFx0XHRpZiAocmVnLnRlc3Qoc3Ryc1tpXSkpIHtcblx0XHRcdFx0XHRjb25zdCBhID0gW107XG5cdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBzdHJzLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdFx0XHRpZiAoaiA8IGkpIHtcblx0XHRcdFx0XHRcdFx0YVtqXSA9IHN0cnNbal07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoaiA9PT0gaSkge1xuXHRcdFx0XHRcdFx0XHRhW2ldID0gc3Ryc1tpXSArIHN0cnNbaSArIDFdICsgc3Ryc1tpICsgMl07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoaiA+IGkgKyAyKSB7XG5cdFx0XHRcdFx0XHRcdGFbaiAtIDJdID0gc3Ryc1tqXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZml4U2VudGVuY2VFbmRzKGEsIHJlZyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHJzO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ1tdfSBzdHJzXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGhvd21hbnlcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHN0YXRpYyBmaXJzdFNlbnRlbmNlcyhzdHJzLCBob3dtYW55KSB7XG5cdFx0XHRjb25zdCB0ID0gc3Rycy5zbGljZSgwLCAyICogaG93bWFueSk7XG5cdFx0XHRyZXR1cm4gdC5qb2luKCcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsQmFkV2hpdGVzcGFjZSgpIHtcblx0XHRcdC8vIGFsc28gY2xlYW5zIHVwIGlzb2xhdGVkICcnJydcblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eIConKyAqJC9nbSwgJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSdW5zIHRoZSB2YXJpb3VzIG1ldGhvZHMgdG8gZ2VuZXJhdGUgdGhlIHByZXZpZXcuXG5cdFx0ICogVGhlIHByZXZpZXcgaXMgc3RvcmVkIGluIHRoZSA8Y29kZT5odG1sPC9odG1sPiBmaWVsZC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0bWFrZVByZXZpZXcoKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoaXMub3duZXIuYXJ0aWNsZS5uYW1lc3BhY2VJZCgpICE9PSBwZy5uc1RlbXBsYXRlSWQgJiZcblx0XHRcdFx0dGhpcy5vd25lci5hcnRpY2xlLm5hbWVzcGFjZUlkKCkgIT09IHBnLm5zSW1hZ2VJZFxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMua2lsbENvbW1lbnRzKCk7XG5cdFx0XHRcdHRoaXMua2lsbERpdnMoKTtcblx0XHRcdFx0dGhpcy5raWxsR2FsbGVyaWVzKCk7XG5cdFx0XHRcdHRoaXMua2lsbEJveFRlbXBsYXRlcygpO1xuXHRcdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBQcmV2aWV3S2lsbFRlbXBsYXRlcycpKSB7XG5cdFx0XHRcdFx0dGhpcy5raWxsVGVtcGxhdGVzKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5raWxsTXVsdGlsaW5lVGVtcGxhdGVzKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5raWxsVGFibGVzKCk7XG5cdFx0XHRcdHRoaXMua2lsbEltYWdlcygpO1xuXHRcdFx0XHR0aGlzLmtpbGxIVE1MKCk7XG5cdFx0XHRcdHRoaXMua2lsbENodW5rcygpO1xuXHRcdFx0XHR0aGlzLm1vcHVwKCk7XG5cdFx0XHRcdHRoaXMuZmlyc3RCaXQoKTtcblx0XHRcdFx0dGhpcy5raWxsQmFkV2hpdGVzcGFjZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5raWxsSFRNTCgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5odG1sID0gd2lraTJodG1sKHRoaXMuZGF0YSwgdGhpcy5iYXNlVXJsKTsgLy8gbmVlZHMgbGl2ZXByZXZpZXdcblx0XHRcdHRoaXMuZml4SFRNTCgpO1xuXHRcdFx0dGhpcy5zdHJpcExvbmdUZW1wbGF0ZXMoKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGRhdGFcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHN0YXRpYyBlc1dpa2kySHRtbFBhcnQoZGF0YSkge1xuXHRcdFx0Y29uc3QgcmVMaW5rcyA9IC8oPzpcXFtcXFsoW15cXF18XSopKD86XFx8KFteXFxdfF0qKSkqXV0oW2Etel0qKSkvZ2k7IC8vIG1hdGNoIGEgd2lraWxpbmtcblx0XHRcdHJlTGlua3MubGFzdEluZGV4ID0gMDsgLy8gcmVzZXQgcmVnZXhcblx0XHRcdGxldCBtYXRjaDtcblx0XHRcdGxldCByZXN1bHQgPSAnJztcblx0XHRcdGxldCBwb3N0Zml4SW5kZXggPSAwO1xuXHRcdFx0d2hpbGUgKChtYXRjaCA9IHJlTGlua3MuZXhlYyhkYXRhKSkgIT09IG51bGwpIHtcblx0XHRcdFx0Ly8gbWF0Y2ggYWxsIHdpa2lsaW5rc1xuXHRcdFx0XHQvLyBGSVhNRTogdGhlIHdheSB0aGF0IGxpbmsgaXMgYnVpbHQgaGVyZSBpc24ndCBwZXJmZWN0LiBJdCBpcyBjbGlja2FibGUsIGJ1dCBwb3B1cHMgcHJldmlldyB3b24ndCByZWNvZ25pemUgaXQgaW4gc29tZSBjYXNlcy5cblx0XHRcdFx0cmVzdWx0ICs9IGAke3BnLmVzY2FwZVF1b3Rlc0hUTUwoZGF0YS5zdWJzdHJpbmcocG9zdGZpeEluZGV4LCBtYXRjaC5pbmRleCkpfTxhIGhyZWY9XCIke1xuXHRcdFx0XHRcdEluc3RhLmNvbmYucGF0aHMuYXJ0aWNsZXNcblx0XHRcdFx0fSR7cGcuZXNjYXBlUXVvdGVzSFRNTChtYXRjaFsxXSl9XCI+JHtwZy5lc2NhcGVRdW90ZXNIVE1MKChtYXRjaFsyXSA/PyBtYXRjaFsxXSkgKyBtYXRjaFszXSl9PC9hPmA7XG5cdFx0XHRcdHBvc3RmaXhJbmRleCA9IHJlTGlua3MubGFzdEluZGV4O1xuXHRcdFx0fVxuXHRcdFx0Ly8gYXBwZW5kIHRoZSByZXN0XG5cdFx0XHRyZXN1bHQgKz0gcGcuZXNjYXBlUXVvdGVzSFRNTChkYXRhLnNsaWNlKE1hdGgubWF4KDAsIHBvc3RmaXhJbmRleCkpKTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdGVkaXRTdW1tYXJ5UHJldmlldygpIHtcblx0XHRcdGNvbnN0IHJlQWVzID0gL1xcL1xcKiAqKC4qPykgKlxcKlxcLy9nOyAvLyBtYXRjaCB0aGUgZmlyc3Qgc2VjdGlvbiBtYXJrZXJcblx0XHRcdHJlQWVzLmxhc3RJbmRleCA9IDA7IC8vIHJlc2V0IHJlZ2V4XG5cdFx0XHRjb25zdCBtYXRjaCA9IHJlQWVzLmV4ZWModGhpcy5kYXRhKTtcblx0XHRcdGlmIChtYXRjaCkge1xuXHRcdFx0XHQvLyB3ZSBoYXZlIGEgc2VjdGlvbiBsaW5rLiBTcGxpdCBpdCwgcHJvY2VzcyBpdCwgY29tYmluZSBpdC5cblx0XHRcdFx0Y29uc3QgcHJlZml4ID0gdGhpcy5kYXRhLnNsaWNlKDAsIE1hdGgubWF4KDAsIG1hdGNoLmluZGV4IC0gMSkpO1xuXHRcdFx0XHRjb25zdCBbLCBzZWN0aW9uXSA9IG1hdGNoO1xuXHRcdFx0XHRjb25zdCBwb3N0Zml4ID0gdGhpcy5kYXRhLnNsaWNlKE1hdGgubWF4KDAsIHJlQWVzLmxhc3RJbmRleCkpO1xuXHRcdFx0XHRsZXQgc3RhcnQgPSBcIjxzcGFuIGNsYXNzPSdhdXRvY29tbWVudCc+XCI7XG5cdFx0XHRcdGxldCBlbmQgPSAnPC9zcGFuPic7XG5cdFx0XHRcdGlmIChwcmVmaXgubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHN0YXJ0ID0gYCR7UHJldmlld21ha2VyLmVzV2lraTJIdG1sUGFydChwcmVmaXgpfSAke3N0YXJ0fS0gYDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocG9zdGZpeC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0ZW5kID0gYDogJHtlbmR9JHtQcmV2aWV3bWFrZXIuZXNXaWtpMkh0bWxQYXJ0KHBvc3RmaXgpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdCA9IG5ldyBUaXRsZSgpLmZyb21VUkwodGhpcy5iYXNlVXJsKTtcblx0XHRcdFx0dC5hbmNob3JGcm9tVXRmKHNlY3Rpb24pO1xuXHRcdFx0XHRjb25zdCBzZWN0aW9uTGluayA9IGAke1xuXHRcdFx0XHRcdEluc3RhLmNvbmYucGF0aHMuYXJ0aWNsZXMgKyBwZy5lc2NhcGVRdW90ZXNIVE1MKHQudG9TdHJpbmcodHJ1ZSkpXG5cdFx0XHRcdH0jJHtwZy5lc2NhcGVRdW90ZXNIVE1MKHQuYW5jaG9yKX1gO1xuXHRcdFx0XHRyZXR1cm4gYCR7c3RhcnR9PGEgaHJlZj1cIiR7c2VjdGlvbkxpbmt9XCI+JnJhcnI7PC9hPiAke3BnLmVzY2FwZVF1b3Rlc0hUTUwoc2VjdGlvbil9JHtlbmR9YDtcblx0XHRcdH1cblx0XHRcdC8vIGVsc2UgdGhlcmUncyBubyBzZWN0aW9uIGxpbmssIGh0bWxpZnkgdGhlIHdob2xlIHRoaW5nLlxuXHRcdFx0cmV0dXJuIFByZXZpZXdtYWtlci5lc1dpa2kySHRtbFBhcnQodGhpcy5kYXRhKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogV29ya3MgYXJvdW5kIGxpdmVwcmV2aWV3IGJ1Z3MuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGZpeEhUTUwoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHRtbCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgcmV0ID0gdGhpcy5odG1sO1xuXHRcdFx0Ly8gZml4IHF1ZXN0aW9uIG1hcmtzIGluIHdpa2kgbGlua3Ncblx0XHRcdC8vIG1heWJlIHRoaXMnbGwgYnJlYWsgc29tZSBzdHVmZiA6LShcblx0XHRcdHJldCA9IHJldC5yZXBsYWNlKG5ldyBSZWdFeHAoYCg8YSBocmVmPVwiJHtwZy53aWtpLmFydGljbGVQYXRofS9bXlwiXSopWz9dKC4qP1wiKWAsICdnJyksICckMSUzRiQyJyk7XG5cdFx0XHRyZXQgPSByZXQucmVwbGFjZShuZXcgUmVnRXhwKGAoPGEgaHJlZj0nJHtwZy53aWtpLmFydGljbGVQYXRofS9bXiddKilbP10oLio/JylgLCAnZycpLCAnJDElM0YkMicpO1xuXHRcdFx0Ly8gRklYTUUgZml4IHVwICUgdG9vXG5cdFx0XHR0aGlzLmh0bWwgPSByZXQ7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEdlbmVyYXRlcyB0aGUgcHJldmlldyBhbmQgZGlzcGxheXMgaXQgaW4gdGhlIGN1cnJlbnQgcG9wdXAuXG5cdFx0ICogRG9lcyBub3RoaW5nIGlmIHRoZSBnZW5lcmF0ZWQgcHJldmlldyBpcyBpbnZhbGlkIG9yIGNvbnNpc3RzIG9mIHdoaXRlc3BhY2Ugb25seS5cblx0XHQgKiBBbHNvIGFjdGl2YXRlcyB3aWtpbGlua3MgaW4gdGhlIHByZXZpZXcgZm9yIHN1YnBvcHVwcyBpZiB0aGUgcG9wdXBTdWJwb3B1cHMgb3B0aW9uIGlzIHRydWUuXG5cdFx0ICovXG5cdFx0c2hvd1ByZXZpZXcoKSB7XG5cdFx0XHR0aGlzLm1ha2VQcmV2aWV3KCk7XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuaHRtbCAhPT0gdHlwZW9mICcnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICgvXlxccyokLy50ZXN0KHRoaXMuaHRtbCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2V0UG9wdXBIVE1MKCc8aHI+JywgJ3BvcHVwUHJlUHJldmlld1NlcCcsIHRoaXMub3duZXIuaWROdW1iZXIpO1xuXHRcdFx0c2V0UG9wdXBUaXBzQW5kSFRNTCh0aGlzLmh0bWwsICdwb3B1cFByZXZpZXcnLCB0aGlzLm93bmVyLmlkTnVtYmVyLCB7XG5cdFx0XHRcdG93bmVyOiB0aGlzLm93bmVyLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBtb3JlID0gdGhpcy5mdWxsTGVuZ3RoID4gdGhpcy5kYXRhLmxlbmd0aCA/IHRoaXMubW9yZUxpbmsoKSA6ICcnO1xuXHRcdFx0c2V0UG9wdXBIVE1MKG1vcmUsICdwb3B1cFByZXZpZXdNb3JlJywgdGhpcy5vd25lci5pZE51bWJlcik7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0bW9yZUxpbmsoKSB7XG5cdFx0XHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0YS5jbGFzc05hbWUgPSAncG9wdXBNb3JlTGluayc7XG5cdFx0XHRhLmlubmVySFRNTCA9IHBvcHVwU3RyaW5nKCdtb3JlLi4uJyk7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGEub25jbGljayA9ICgpID0+IHtcblx0XHRcdFx0c2VsZi5tYXhDaGFyYWN0ZXJzICs9IDIwMDA7XG5cdFx0XHRcdHNlbGYubWF4U2VudGVuY2VzICs9IDIwO1xuXHRcdFx0XHRzZWxmLnNldERhdGEoKTtcblx0XHRcdFx0c2VsZi5zaG93UHJldmlldygpO1xuXHRcdFx0fTtcblx0XHRcdHJldHVybiBhO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHN0cmlwTG9uZ1RlbXBsYXRlcygpIHtcblx0XHRcdC8vIG9wZXJhdGVzIG9uIHRoZSBIVE1MIVxuXHRcdFx0dGhpcy5odG1sID0gdGhpcy5odG1sLnJlcGxhY2UoL14uezAsMTAwMH17e1tefV0qPyg8KHB8YnIpKCBcXC8pPz5cXHMqKXsyLH0oW157fV0qP319KT8vZ2ksICcnKTtcblx0XHRcdHRoaXMuaHRtbCA9IHRoaXMuaHRtbC5zcGxpdCgnXFxuJykuam9pbignICcpOyAvLyB3b3JrYXJvdW5kIGZvciA8cHJlPiB0ZW1wbGF0ZXNcblx0XHRcdHRoaXMuaHRtbCA9IHRoaXMuaHRtbC5yZXBsYWNlKC97e1tefV0qPHByZT5bXn1dKn19L2dpLCAnJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbE11bHRpbGluZVRlbXBsYXRlcygpIHtcblx0XHRcdHRoaXMua2lsbCgne3t7JywgJ319fScpO1xuXHRcdFx0dGhpcy5raWxsKC9cXHMqe3tbXnt9XSpcXG4vLCAnfX0nLCAne3snKTtcblx0XHR9XG5cdH1cblx0Ly8gRU5ERklMRTogcHJldmlld21ha2VyLmpzXG5cdC8vIFNUQVJURklMRTogcXVlcnlwcmV2aWV3LmpzXG5cdGNvbnN0IGxvYWRBUElQcmV2aWV3ID0gKHF1ZXJ5VHlwZSwgYXJ0aWNsZSwgbmF2cG9wKSA9PiB7XG5cdFx0Y29uc3QgYXJ0ID0gbmV3IFRpdGxlKGFydGljbGUpLnVybFN0cmluZygpO1xuXHRcdGxldCB1cmwgPSBgJHtwZy53aWtpLmFwaXdpa2liYXNlfT9mb3JtYXQ9anNvbiZmb3JtYXR2ZXJzaW9uPTImYWN0aW9uPXF1ZXJ5JmA7XG5cdFx0bGV0IGh0bWxHZW5lcmF0b3IgPSAoKSA9PiAvKiBhLCBkICovIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KCdpbnZhbGlkIGh0bWwgZ2VuZXJhdG9yJywge3RhZzogJ3BvcHVwcycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHR9O1xuXHRcdGxldCB1c2VybmFtZWFydCA9ICcnO1xuXHRcdHN3aXRjaCAocXVlcnlUeXBlKSB7XG5cdFx0XHRjYXNlICdoaXN0b3J5Jzpcblx0XHRcdFx0dXJsICs9IGB0aXRsZXM9JHthcnR9JnByb3A9cmV2aXNpb25zJnJ2bGltaXQ9JHtnZXRWYWx1ZU9mKCdwb3B1cEhpc3RvcnlQcmV2aWV3TGltaXQnKX1gO1xuXHRcdFx0XHRodG1sR2VuZXJhdG9yID0gQVBJaGlzdG9yeVByZXZpZXdIVE1MO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NhdGVnb3J5Jzpcblx0XHRcdFx0dXJsICs9IGBsaXN0PWNhdGVnb3J5bWVtYmVycyZjbXRpdGxlPSR7YXJ0fWA7XG5cdFx0XHRcdGh0bWxHZW5lcmF0b3IgPSBBUEljYXRlZ29yeVByZXZpZXdIVE1MO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3VzZXJpbmZvJzoge1xuXHRcdFx0XHRjb25zdCB1c2VybmFtZSA9IG5ldyBUaXRsZShhcnRpY2xlKS51c2VyTmFtZSgpO1xuXHRcdFx0XHR1c2VybmFtZWFydCA9IGVuY29kZVVSSUNvbXBvbmVudCh1c2VybmFtZSk7XG5cdFx0XHRcdHVybCArPSBwZy5yZS5pcFVzZXIudGVzdCh1c2VybmFtZSlcblx0XHRcdFx0XHQ/IGBsaXN0PWJsb2NrcyZia3Byb3A9cmFuZ2V8cmVzdHJpY3Rpb25zJmJraXA9JHt1c2VybmFtZWFydH1gXG5cdFx0XHRcdFx0OiBgbGlzdD11c2Vyc3x1c2VyY29udHJpYnMmdXNwcm9wPWJsb2NraW5mb3xncm91cHN8ZWRpdGNvdW50fHJlZ2lzdHJhdGlvbnxnZW5kZXImdXN1c2Vycz0ke3VzZXJuYW1lYXJ0fSZtZXRhPWdsb2JhbHVzZXJpbmZvJmd1aXByb3A9Z3JvdXBzfHVuYXR0YWNoZWQmZ3VpdXNlcj0ke3VzZXJuYW1lYXJ0fSZ1Y2xpbWl0PTEmdWNwcm9wPXRpbWVzdGFtcCZ1Y3VzZXI9JHt1c2VybmFtZWFydH1gO1xuXHRcdFx0XHRodG1sR2VuZXJhdG9yID0gQVBJdXNlckluZm9QcmV2aWV3SFRNTDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdjb250cmlicyc6XG5cdFx0XHRcdHVzZXJuYW1lYXJ0ID0gZW5jb2RlVVJJQ29tcG9uZW50KG5ldyBUaXRsZShhcnRpY2xlKS51c2VyTmFtZSgpKTtcblx0XHRcdFx0dXJsICs9IGBsaXN0PXVzZXJjb250cmlicyZ1Y3VzZXI9JHt1c2VybmFtZWFydH0mdWNsaW1pdD0ke2dldFZhbHVlT2YoJ3BvcHVwQ29udHJpYnNQcmV2aWV3TGltaXQnKX1gO1xuXHRcdFx0XHRodG1sR2VuZXJhdG9yID0gQVBJY29udHJpYnNQcmV2aWV3SFRNTDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdpbWFnZXBhZ2VwcmV2aWV3Jzoge1xuXHRcdFx0XHRsZXQgdHJhaWwgPSAnJztcblx0XHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwSW1hZ2VMaW5rcycpKSB7XG5cdFx0XHRcdFx0dHJhaWwgPSBgJmxpc3Q9aW1hZ2V1c2FnZSZpdXRpdGxlPSR7YXJ0fWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0dXJsICs9IGB0aXRsZXM9JHthcnR9JnByb3A9cmV2aXNpb25zfGltYWdlaW5mbyZydnByb3A9Y29udGVudCR7dHJhaWx9YDtcblx0XHRcdFx0aHRtbEdlbmVyYXRvciA9IEFQSWltYWdlcGFnZVByZXZpZXdIVE1MO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ2JhY2tsaW5rcyc6XG5cdFx0XHRcdHVybCArPSBgbGlzdD1iYWNrbGlua3MmYmx0aXRsZT0ke2FydH1gO1xuXHRcdFx0XHRodG1sR2VuZXJhdG9yID0gQVBJYmFja2xpbmtzUHJldmlld0hUTUw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmV2aXNpb24nOlxuXHRcdFx0XHR1cmwgKz0gYXJ0aWNsZS5vbGRpZCA/IGByZXZpZHM9JHthcnRpY2xlLm9sZGlkfWAgOiBgdGl0bGVzPSR7YXJ0aWNsZS5yZW1vdmVBbmNob3IoKS51cmxTdHJpbmcoKX1gO1xuXHRcdFx0XHR1cmwgKz1cblx0XHRcdFx0XHQnJnByb3A9cmV2aXNpb25zfHBhZ2Vwcm9wc3xpbmZvfGltYWdlc3xjYXRlZ29yaWVzJnJ2cHJvcD1pZHN8dGltZXN0YW1wfGZsYWdzfGNvbW1lbnR8dXNlcnxjb250ZW50JmNsbGltaXQ9bWF4JmltbGltaXQ9bWF4Jztcblx0XHRcdFx0aHRtbEdlbmVyYXRvciA9IEFQSXJldmlzaW9uUHJldmlld0hUTUw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRwZW5kaW5nTmF2cG9wVGFzayhuYXZwb3ApO1xuXHRcdGNvbnN0IGNhbGxiYWNrID0gKGQpID0+IHtcblx0XHRcdGxvZygnY2FsbGJhY2sgb2YgQVBJIGZ1bmN0aW9ucyB3YXMgaGl0Jyk7XG5cdFx0XHRpZiAocXVlcnlUeXBlID09PSAndXNlcmluZm8nKSB7XG5cdFx0XHRcdC8vIFdlIG5lZWQgdG8gZG8gYW5vdGhlciBBUEkgcmVxdWVzdFxuXHRcdFx0XHRmZXRjaFVzZXJHcm91cE5hbWVzKGQuZGF0YSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0c2hvd0FQSVByZXZpZXcocXVlcnlUeXBlLCBodG1sR2VuZXJhdG9yKGFydGljbGUsIGQsIG5hdnBvcCksIG5hdnBvcC5pZE51bWJlciwgbmF2cG9wLCBkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHNob3dBUElQcmV2aWV3KHF1ZXJ5VHlwZSwgaHRtbEdlbmVyYXRvcihhcnRpY2xlLCBkLCBuYXZwb3ApLCBuYXZwb3AuaWROdW1iZXIsIG5hdnBvcCwgZCk7XG5cdFx0fTtcblx0XHRjb25zdCBnbyA9ICgpID0+IHtcblx0XHRcdGdldFBhZ2VXaXRoQ2FjaGluZyh1cmwsIGNhbGxiYWNrLCBuYXZwb3ApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblx0XHRpZiAobmF2cG9wLnZpc2libGUgfHwgIWdldFZhbHVlT2YoJ3BvcHVwTGF6eURvd25sb2FkcycpKSB7XG5cdFx0XHRnbygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuYXZwb3AuYWRkSG9vayhnbywgJ3VuaGlkZScsICdiZWZvcmUnLCBgRE9XTkxPQURfJHtxdWVyeVR5cGV9X1FVRVJZX0RBVEFgKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGxpbmtMaXN0ID0gKGxpc3QpID0+IHtcblx0XHRsaXN0LnNvcnQoKHgsIHkpID0+IHtcblx0XHRcdHJldHVybiB4ID09PSB5ID8gMCA6IHggPCB5ID8gLTEgOiAxO1xuXHRcdH0pO1xuXHRcdGNvbnN0IGJ1ZiA9IFtdO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBsaXN0KSB7XG5cdFx0XHRidWYucHVzaChcblx0XHRcdFx0d2lraUxpbmsoe1xuXHRcdFx0XHRcdGFydGljbGU6IG5ldyBUaXRsZShlbGVtZW50KSxcblx0XHRcdFx0XHR0ZXh0OiBlbGVtZW50LnNwbGl0KCcgJykuam9pbignJm5ic3A7JyksXG5cdFx0XHRcdFx0YWN0aW9uOiAndmlldycsXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gYnVmLmpvaW4oJywgJyk7XG5cdH07XG5cdGNvbnN0IGdldFRpbWVPZmZzZXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdHogPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCd0aW1lY29ycmVjdGlvbicpO1xuXHRcdGlmICh0eiAmJiB0ei5pbmNsdWRlcygnfCcpKSB7XG5cdFx0XHQvLyBOZXcgZm9ybWF0XG5cdFx0XHRyZXR1cm4gTnVtYmVyLnBhcnNlSW50KHR6LnNwbGl0KCd8JylbMV0sIDEwKTtcblx0XHR9XG5cdFx0cmV0dXJuIDA7XG5cdH07XG5cdGNvbnN0IGdldFRpbWVab25lID0gKCkgPT4ge1xuXHRcdGlmICghcGcudXNlci50aW1lWm9uZSkge1xuXHRcdFx0Y29uc3QgdHogPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCd0aW1lY29ycmVjdGlvbicpO1xuXHRcdFx0cGcudXNlci50aW1lWm9uZSA9ICdVVEMnO1xuXHRcdFx0aWYgKHR6KSB7XG5cdFx0XHRcdGNvbnN0IHR6Q29tcG9uZW50cyA9IHR6LnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGlmICh0ekNvbXBvbmVudHMubGVuZ3RoID09PSAzICYmIHR6Q29tcG9uZW50c1swXSA9PT0gJ1pvbmVJbmZvJykge1xuXHRcdFx0XHRcdFssICwgcGcudXNlci50aW1lWm9uZV0gPSB0ekNvbXBvbmVudHM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZXJybG9nKGBVbmV4cGVjdGVkIHRpbWV6b25lIGluZm9ybWF0aW9uOiAke3R6fWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBwZy51c2VyLnRpbWVab25lO1xuXHR9O1xuXHQvKipcblx0ICogU2hvdWxkIHdlIHVzZSBhbiBvZmZzZXQgb3IgY2FuIHdlIHVzZSBwcm9wZXIgdGltZXpvbmVzXG5cdCAqL1xuXHRjb25zdCB1c2VUaW1lT2Zmc2V0ID0gKCkgPT4ge1xuXHRcdGlmIChJbnRsLkRhdGVUaW1lRm9ybWF0LnByb3RvdHlwZS5mb3JtYXRUb1BhcnRzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIElFIDExXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Y29uc3QgdHogPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCd0aW1lY29ycmVjdGlvbicpO1xuXHRcdGlmICh0eiAmJiAhdHouaW5jbHVkZXMoJ1pvbmVJbmZvfCcpKSB7XG5cdFx0XHQvLyBTeXN0ZW18IERlZmF1bHQgc3lzdGVtIHRpbWUsIGRlZmF1bHQgZm9yIHVzZXJzIHdobyBkaWRuJ3QgY29uZmlndXJlIHRpbWV6b25lXG5cdFx0XHQvLyBPZmZzZXR8IE1hbnVhbCBkZWZpbmVkIG9mZnNldCBieSB1c2VyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHQvKipcblx0ICogQXJyYXkgb2YgbG9jYWxlcyBmb3IgdGhlIHB1cnBvc2Ugb2YgamF2YXNjcmlwdCBsb2NhbGUgYmFzZWQgZm9ybWF0dGluZ1xuXHQgKiBGaWx0ZXJzIGRvd24gdG8gdGhvc2Ugc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLiBFbXB0eSBbXSA9PT0gU3lzdGVtJ3MgZGVmYXVsdCBsb2NhbGVcblx0ICovXG5cdGNvbnN0IGdldExvY2FsZXMgPSAoKSA9PiB7XG5cdFx0aWYgKCFwZy51c2VyLmxvY2FsZXMpIHtcblx0XHRcdGxldCB1c2VyTGFuZ3VhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuZ2V0QXR0cmlidXRlKCdsYW5nJyk7IC8vIG1ha2Ugc3VyZSB3ZSBoYXZlIEhUTUwgbG9jYWxlXG5cdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBMb2NhbGUnKSkge1xuXHRcdFx0XHR1c2VyTGFuZ3VhZ2UgPSBnZXRWYWx1ZU9mKCdwb3B1cExvY2FsZScpO1xuXHRcdFx0fSBlbHNlIGlmICh1c2VyTGFuZ3VhZ2UgPT09ICdlbicpIHtcblx0XHRcdFx0Ly8gZW4ud3AgdGVuZHMgdG8gdHJlYXQgdGhpcyBhcyBpbnRlcm5hdGlvbmFsIGVuZ2xpc2ggLyB1bnNwZWNpZmllZFxuXHRcdFx0XHQvLyBidXQgd2UgaGF2ZSBtb3JlIHNwZWNpZmljIHNldHRpbmdzIGluIHVzZXIgb3B0aW9uc1xuXHRcdFx0XHR1c2VyTGFuZ3VhZ2UgPSBnZXRNV0RhdGVGb3JtYXQoKSA9PT0gJ21keScgPyAnZW4tVVMnIDogJ2VuLUdCJztcblx0XHRcdH1cblx0XHRcdHBnLnVzZXIubG9jYWxlcyA9IEludGwuRGF0ZVRpbWVGb3JtYXQuc3VwcG9ydGVkTG9jYWxlc09mKFt1c2VyTGFuZ3VhZ2UsIG5hdmlnYXRvci5sYW5ndWFnZV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcGcudXNlci5sb2NhbGVzO1xuXHR9O1xuXHQvKipcblx0ICogUmV0cmlldmUgY29uZmlndXJlZCBNVyBkYXRlIGZvcm1hdCBmb3IgdGhpcyB1c2VyXG5cdCAqIFRoZXNlIGNhbiBiZVxuXHQgKiBkZWZhdWx0XG5cdCAqIGRteTogdGltZSwgZG15XG5cdCAqIG1keTogdGltZSwgbWR5XG5cdCAqIHltZDogdGltZSwgeW1kXG5cdCAqIGRteXQ6IGRteSwgdGltZVxuXHQgKiBkbXl0czogZG15LCB0aW1lICsgc2Vjb25kc1xuXHQgKiBJU08gODYwMTogWVlZWS1NTS1ERFRoaDptbTpzcyAobG9jYWwgdGltZSlcblx0ICpcblx0ICogVGhpcyBpc24ndCB0b28gdXNlZnVsIGZvciB1cywgYXMgSlMgZG9lc24ndCBoYXZlIGZvcm1hdHRlcnMgdG8gbWF0Y2ggdGhlc2UgcHJpdmF0ZSBzcGVjaWZpZXJzXG5cdCAqL1xuXHRjb25zdCBnZXRNV0RhdGVGb3JtYXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIG13LnVzZXIub3B0aW9ucy5nZXQoJ2RhdGUnKTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBIVE1MIHRhYmxlIHRoYXQncyBzaG93biBpbiB0aGUgaGlzdG9yeSBhbmQgdXNlci1jb250cmlicyBwb3B1cHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhcnRpY2xlXG5cdCAqIEBwYXJhbSB7T2JqZWN0W119IGggLSBhIGxpc3Qgb2YgcmV2aXNpb25zLCByZXR1cm5lZCBmcm9tIHRoZSBBUElcblx0ICogQHBhcmFtIHtib29sZWFufSByZWFsbHlDb250cmlicyAtIHRydWUgb25seSBpZiB3ZSdyZSBkaXNwbGF5aW5nIHVzZXIgY29udHJpYnV0aW9uc1xuXHQgKi9cblx0Y29uc3QgZWRpdFByZXZpZXdUYWJsZSA9IChhcnRpY2xlLCBoLCByZWFsbHlDb250cmlicykgPT4ge1xuXHRcdGxldCBodG1sID0gWyc8dGFibGU+J107XG5cdFx0bGV0IGRheTtcblx0XHRsZXQgY3VyYXJ0ID0gYXJ0aWNsZTtcblx0XHRsZXQgcGFnZTtcblx0XHRsZXQgbWFrZUZpcnN0Q29sdW1uTGlua3M7XG5cdFx0aWYgKHJlYWxseUNvbnRyaWJzKSB7XG5cdFx0XHQvLyBXZSdyZSBzaG93aW5nIHVzZXIgY29udHJpYnV0aW9ucywgc28gbWFrZSAoZGlmZiB8IGhpc3QpIGxpbmtzXG5cdFx0XHRtYWtlRmlyc3RDb2x1bW5MaW5rcyA9IChjdXJyZW50UmV2aXNpb24pID0+IHtcblx0XHRcdFx0bGV0IHJlc3VsdCA9ICcoJztcblx0XHRcdFx0cmVzdWx0ICs9XG5cdFx0XHRcdFx0YDxhIGhyZWY9XCIke3BnLndpa2kudGl0bGViYXNlfSR7bmV3IFRpdGxlKGN1cnJlbnRSZXZpc2lvbi50aXRsZSkudXJsU3RyaW5nKCl9JmRpZmY9cHJldmAgK1xuXHRcdFx0XHRcdGAmb2xkaWQ9JHtjdXJyZW50UmV2aXNpb24ucmV2aWR9XCI+JHtwb3B1cFN0cmluZygnZGlmZicpfTwvYT5gO1xuXHRcdFx0XHRyZXN1bHQgKz0gJyZuYnNwO3wmbmJzcDsnO1xuXHRcdFx0XHRyZXN1bHQgKz0gYDxhIGhyZWY9XCIke3BnLndpa2kudGl0bGViYXNlfSR7bmV3IFRpdGxlKFxuXHRcdFx0XHRcdGN1cnJlbnRSZXZpc2lvbi50aXRsZVxuXHRcdFx0XHQpLnVybFN0cmluZygpfSZhY3Rpb249aGlzdG9yeVwiPiR7cG9wdXBTdHJpbmcoJ2hpc3QnKX08L2E+YDtcblx0XHRcdFx0cmVzdWx0ICs9ICcpJztcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEl0J3MgYSByZWd1bGFyIGhpc3RvcnkgcGFnZSwgc28gbWFrZSAoY3VyIHwgbGFzdCkgbGlua3Ncblx0XHRcdGNvbnN0IGZpcnN0UmV2aWQgPSBoWzBdLnJldmlkO1xuXHRcdFx0bWFrZUZpcnN0Q29sdW1uTGlua3MgPSAoY3VycmVudFJldmlzaW9uKSA9PiB7XG5cdFx0XHRcdGxldCByZXN1bHQgPSAnKCc7XG5cdFx0XHRcdHJlc3VsdCArPSBgPGEgaHJlZj1cIiR7cGcud2lraS50aXRsZWJhc2V9JHtuZXcgVGl0bGUoY3VyYXJ0KS51cmxTdHJpbmcoKX0mZGlmZj0ke2ZpcnN0UmV2aWR9Jm9sZGlkPSR7XG5cdFx0XHRcdFx0Y3VycmVudFJldmlzaW9uLnJldmlkXG5cdFx0XHRcdH1cIj4ke3BvcHVwU3RyaW5nKCdjdXInKX08L2E+YDtcblx0XHRcdFx0cmVzdWx0ICs9ICcmbmJzcDt8Jm5ic3A7Jztcblx0XHRcdFx0cmVzdWx0ICs9IGA8YSBocmVmPVwiJHtwZy53aWtpLnRpdGxlYmFzZX0ke25ldyBUaXRsZShjdXJhcnQpLnVybFN0cmluZygpfSZkaWZmPXByZXYmb2xkaWQ9JHtcblx0XHRcdFx0XHRjdXJyZW50UmV2aXNpb24ucmV2aWRcblx0XHRcdFx0fVwiPiR7cG9wdXBTdHJpbmcoJ2xhc3QnKX08L2E+YDtcblx0XHRcdFx0cmVzdWx0ICs9ICcpJztcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH07XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgW2ksIGVsZW1lbnRdIG9mIGguZW50cmllcygpKSB7XG5cdFx0XHRpZiAocmVhbGx5Q29udHJpYnMpIHtcblx0XHRcdFx0cGFnZSA9IGVsZW1lbnQudGl0bGU7XG5cdFx0XHRcdGN1cmFydCA9IG5ldyBUaXRsZShwYWdlKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG1pbm9yID0gZWxlbWVudC5taW5vciA/ICc8Yj5tIDwvYj4nIDogJyc7XG5cdFx0XHRjb25zdCBlZGl0RGF0ZSA9IG5ldyBEYXRlKGVsZW1lbnQudGltZXN0YW1wKTtcblx0XHRcdGxldCB0aGlzRGF5ID0gZm9ybWF0dGVkRGF0ZShlZGl0RGF0ZSk7XG5cdFx0XHRjb25zdCB0aGlzVGltZSA9IGZvcm1hdHRlZFRpbWUoZWRpdERhdGUpO1xuXHRcdFx0aWYgKHRoaXNEYXkgPT09IGRheSkge1xuXHRcdFx0XHR0aGlzRGF5ID0gJyc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkYXkgPSB0aGlzRGF5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXNEYXkpIHtcblx0XHRcdFx0aHRtbC5wdXNoKGA8dHI+PHRkIGNvbHNwYW49Mz48c3BhbiBjbGFzcz1cInBvcHVwX2hpc3RvcnlfZGF0ZVwiPiR7dGhpc0RheX08L3NwYW4+PC90ZD48L3RyPmApO1xuXHRcdFx0fVxuXHRcdFx0aHRtbC5wdXNoKFxuXHRcdFx0XHRgPHRyIGNsYXNzPVwicG9wdXBfaGlzdG9yeV9yb3dfJHtpICUgMiA/ICdvZGQnIDogJ2V2ZW4nfVwiPmAsXG5cdFx0XHRcdGA8dGQ+JHttYWtlRmlyc3RDb2x1bW5MaW5rcyhlbGVtZW50KX08L3RkPmAsXG5cdFx0XHRcdCc8dGQ+JyArXG5cdFx0XHRcdFx0YDxhIGhyZWY9XCIke3BnLndpa2kudGl0bGViYXNlfSR7bmV3IFRpdGxlKGN1cmFydCkudXJsU3RyaW5nKCl9Jm9sZGlkPSR7XG5cdFx0XHRcdFx0XHRlbGVtZW50LnJldmlkXG5cdFx0XHRcdFx0fVwiPiR7dGhpc1RpbWV9PC9hPjwvdGQ+YFxuXHRcdFx0KTtcblx0XHRcdGxldCBjb2wzdXJsID0gJyc7XG5cdFx0XHRsZXQgY29sM3R4dCA9ICcnO1xuXHRcdFx0aWYgKHJlYWxseUNvbnRyaWJzKSB7XG5cdFx0XHRcdGNvbDN1cmwgPSBwZy53aWtpLnRpdGxlYmFzZSArIGN1cmFydC51cmxTdHJpbmcoKTtcblx0XHRcdFx0Y29sM3R4dCA9IHBnLmVzY2FwZVF1b3Rlc0hUTUwocGFnZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCB7dXNlcn0gPSBlbGVtZW50O1xuXHRcdFx0XHRpZiAoZWxlbWVudC51c2VyaGlkZGVuKSB7XG5cdFx0XHRcdFx0Y29sM3VybCA9IGdldFZhbHVlT2YoJ3BvcHVwUmV2RGVsVXJsJyk7XG5cdFx0XHRcdFx0Y29sM3R4dCA9IHBnLmVzY2FwZVF1b3Rlc0hUTUwocG9wdXBTdHJpbmcoJ3JldmRlbCcpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb2wzdXJsID0gcGcucmUuaXBVc2VyLnRlc3QodXNlcilcblx0XHRcdFx0XHRcdD8gYCR7XG5cdFx0XHRcdFx0XHRcdFx0cGcud2lraS50aXRsZWJhc2UgKyBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc1NwZWNpYWxJZF1cblx0XHRcdFx0XHRcdFx0fTpDb250cmlidXRpb25zJnRhcmdldD0ke25ldyBUaXRsZSh1c2VyKS51cmxTdHJpbmcoKX1gXG5cdFx0XHRcdFx0XHQ6IGAke3BnLndpa2kudGl0bGViYXNlICsgbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNVc2VySWRdfToke25ldyBUaXRsZShcblx0XHRcdFx0XHRcdFx0XHR1c2VyXG5cdFx0XHRcdFx0XHRcdCkudXJsU3RyaW5nKCl9YDtcblx0XHRcdFx0XHRjb2wzdHh0ID0gcGcuZXNjYXBlUXVvdGVzSFRNTCh1c2VyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aHRtbC5wdXNoKGA8dGQ+JHtyZWFsbHlDb250cmlicyA/IG1pbm9yIDogJyd9PGEgaHJlZj1cIiR7Y29sM3VybH1cIj4ke2NvbDN0eHR9PC9hPjwvdGQ+YCk7XG5cdFx0XHRsZXQgY29tbWVudCA9ICcnO1xuXHRcdFx0Y29uc3QgYyA9IGVsZW1lbnQuY29tbWVudCB8fCBlbGVtZW50LmNvbnRlbnQ7XG5cdFx0XHRpZiAoYykge1xuXHRcdFx0XHRjb21tZW50ID0gbmV3IFByZXZpZXdtYWtlcihjLCBuZXcgVGl0bGUoY3VyYXJ0KS50b1VybCgpKS5lZGl0U3VtbWFyeVByZXZpZXcoKTtcblx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudC5jb21tZW50aGlkZGVuKSB7XG5cdFx0XHRcdGNvbW1lbnQgPSBwb3B1cFN0cmluZygncmV2ZGVsJyk7XG5cdFx0XHR9XG5cdFx0XHRodG1sLnB1c2goYDx0ZD4ke3JlYWxseUNvbnRyaWJzID8gJycgOiBtaW5vcn0ke2NvbW1lbnR9PC90ZD5gLCAnPC90cj4nKTtcblx0XHRcdGh0bWwgPSBbaHRtbC5qb2luKCcnKV07XG5cdFx0fVxuXHRcdGh0bWwucHVzaCgnPC90YWJsZT4nKTtcblx0XHRyZXR1cm4gaHRtbC5qb2luKCcnKTtcblx0fTtcblx0Y29uc3QgYWRqdXN0RGF0ZSA9IChkLCBvZmZzZXQpID0+IHtcblx0XHQvLyBvZmZzZXQgaXMgaW4gbWludXRlc1xuXHRcdGNvbnN0IG8gPSBvZmZzZXQgKiA2MCAqIDEwMDA7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKCtkICsgbyk7XG5cdH07XG5cdC8qKlxuXHQgKiBUaGlzIHJlbGllcyBvbiB0aGUgRGF0ZSBwYXJzZXIgdW5kZXJzdGFuZGluZyBlbi1VUyBkYXRlcyxcblx0ICogd2hpY2ggaXMgcHJldHR5IHNhZmUgYXNzdW1wdGlvbiwgYnV0IG5vdCBwZXJmZWN0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge0RhdGV9IGRhdGVcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpbWVab25lXG5cdCAqL1xuXHRjb25zdCBjb252ZXJ0VGltZVpvbmUgPSAoZGF0ZSwgdGltZVpvbmUpID0+IHtcblx0XHRyZXR1cm4gbmV3IERhdGUoZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7dGltZVpvbmV9KSk7XG5cdH07XG5cdGNvbnN0IGZvcm1hdHRlZERhdGVUaW1lID0gKGRhdGUpID0+IHtcblx0XHQvLyBmYWxsYmFjayBmb3IgSUUxMSBhbmQgdW5rbm93biB0aW1lem9uZXNcblx0XHRpZiAodXNlVGltZU9mZnNldCgpKSB7XG5cdFx0XHRyZXR1cm4gYCR7Zm9ybWF0dGVkRGF0ZShkYXRlKX0gJHtmb3JtYXR0ZWRUaW1lKGRhdGUpfWA7XG5cdFx0fVxuXHRcdGlmIChnZXRNV0RhdGVGb3JtYXQoKSA9PT0gJ0lTTyA4NjAxJykge1xuXHRcdFx0Y29uc3QgZDIgPSBjb252ZXJ0VGltZVpvbmUoZGF0ZSwgZ2V0VGltZVpvbmUoKSk7XG5cdFx0XHRyZXR1cm4gYCR7bWFwKHplcm9GaWxsLCBbZDIuZ2V0RnVsbFllYXIoKSwgZDIuZ2V0TW9udGgoKSArIDEsIGQyLmdldERhdGUoKV0pLmpvaW4oJy0nKX1UJHttYXAoemVyb0ZpbGwsIFtcblx0XHRcdFx0ZDIuZ2V0SG91cnMoKSxcblx0XHRcdFx0ZDIuZ2V0TWludXRlcygpLFxuXHRcdFx0XHRkMi5nZXRTZWNvbmRzKCksXG5cdFx0XHRdKS5qb2luKCc6Jyl9YDtcblx0XHR9XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IGdldFZhbHVlT2YoJ3BvcHVwRGF0ZVRpbWVGb3JtYXR0ZXJPcHRpb25zJyk7XG5cdFx0b3B0aW9ucy50aW1lWm9uZSA9IGdldFRpbWVab25lKCk7XG5cdFx0cmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoZ2V0TG9jYWxlcygpLCBvcHRpb25zKTtcblx0fTtcblx0Y29uc3QgZm9ybWF0dGVkRGF0ZSA9IChkYXRlKSA9PiB7XG5cdFx0bGV0IGQyO1xuXHRcdC8vIGZhbGxiYWNrIGZvciBJRTExIGFuZCB1bmtub3duIHRpbWV6b25lc1xuXHRcdGlmICh1c2VUaW1lT2Zmc2V0KCkpIHtcblx0XHRcdC8vIHdlIGFkanVzdCB0aGUgVVRDIHRpbWUsIHNvIHdlIHByaW50IHRoZSBhZGp1c3RlZCBVVEMsIGJ1dCBub3QgcmVhbGx5IFVUQyB2YWx1ZXNcblx0XHRcdGQyID0gYWRqdXN0RGF0ZShkYXRlLCBnZXRUaW1lT2Zmc2V0KCkpO1xuXHRcdFx0cmV0dXJuIG1hcCh6ZXJvRmlsbCwgW2QyLmdldFVUQ0Z1bGxZZWFyKCksIGQyLmdldFVUQ01vbnRoKCkgKyAxLCBkMi5nZXRVVENEYXRlKCldKS5qb2luKCctJyk7XG5cdFx0fVxuXHRcdGlmIChnZXRNV0RhdGVGb3JtYXQoKSA9PT0gJ0lTTyA4NjAxJykge1xuXHRcdFx0ZDIgPSBjb252ZXJ0VGltZVpvbmUoZGF0ZSwgZ2V0VGltZVpvbmUoKSk7XG5cdFx0XHRyZXR1cm4gbWFwKHplcm9GaWxsLCBbZDIuZ2V0RnVsbFllYXIoKSwgZDIuZ2V0TW9udGgoKSArIDEsIGQyLmdldERhdGUoKV0pLmpvaW4oJy0nKTtcblx0XHR9XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IGdldFZhbHVlT2YoJ3BvcHVwRGF0ZUZvcm1hdHRlck9wdGlvbnMnKTtcblx0XHRvcHRpb25zLnRpbWVab25lID0gZ2V0VGltZVpvbmUoKTtcblx0XHRyZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoZ2V0TG9jYWxlcygpLCBvcHRpb25zKTtcblx0fTtcblx0Y29uc3QgZm9ybWF0dGVkVGltZSA9IChkYXRlKSA9PiB7XG5cdFx0bGV0IGQyO1xuXHRcdC8vIGZhbGxiYWNrIGZvciBJRTExIGFuZCB1bmtub3duIHRpbWV6b25lc1xuXHRcdGlmICh1c2VUaW1lT2Zmc2V0KCkpIHtcblx0XHRcdC8vIHdlIGFkanVzdCB0aGUgVVRDIHRpbWUsIHNvIHdlIHByaW50IHRoZSBhZGp1c3RlZCBVVEMsIGJ1dCBub3QgcmVhbGx5IFVUQyB2YWx1ZXNcblx0XHRcdGQyID0gYWRqdXN0RGF0ZShkYXRlLCBnZXRUaW1lT2Zmc2V0KCkpO1xuXHRcdFx0cmV0dXJuIG1hcCh6ZXJvRmlsbCwgW2QyLmdldFVUQ0hvdXJzKCksIGQyLmdldFVUQ01pbnV0ZXMoKSwgZDIuZ2V0VVRDU2Vjb25kcygpXSkuam9pbignOicpO1xuXHRcdH1cblx0XHRpZiAoZ2V0TVdEYXRlRm9ybWF0KCkgPT09ICdJU08gODYwMScpIHtcblx0XHRcdGQyID0gY29udmVydFRpbWVab25lKGRhdGUsIGdldFRpbWVab25lKCkpO1xuXHRcdFx0cmV0dXJuIG1hcCh6ZXJvRmlsbCwgW2QyLmdldEhvdXJzKCksIGQyLmdldE1pbnV0ZXMoKSwgZDIuZ2V0U2Vjb25kcygpXSkuam9pbignOicpO1xuXHRcdH1cblx0XHRjb25zdCBvcHRpb25zID0gZ2V0VmFsdWVPZigncG9wdXBUaW1lRm9ybWF0dGVyT3B0aW9ucycpO1xuXHRcdG9wdGlvbnMudGltZVpvbmUgPSBnZXRUaW1lWm9uZSgpO1xuXHRcdHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyhnZXRMb2NhbGVzKCksIG9wdGlvbnMpO1xuXHR9O1xuXHQvLyBHZXQgdGhlIHByb3BlciBncm91cG5hbWVzIGZvciB0aGUgdGVjaG5pY2FsZ3JvdXBzXG5cdGNvbnN0IGZldGNoVXNlckdyb3VwTmFtZXMgPSAodXNlcmluZm9SZXNwb25zZSkgPT4ge1xuXHRcdGNvbnN0IHF1ZXJ5T2JqID0gZ2V0SnNPYmoodXNlcmluZm9SZXNwb25zZSkucXVlcnk7XG5cdFx0Y29uc3QgdXNlciA9IGFueUNoaWxkKHF1ZXJ5T2JqLnVzZXJzKTtcblx0XHRjb25zdCBtZXNzYWdlcyA9IFtdO1xuXHRcdGlmICh1c2VyLmdyb3Vwcykge1xuXHRcdFx0Zm9yIChjb25zdCBncm91cE5hbWUgb2YgdXNlci5ncm91cHMpIHtcblx0XHRcdFx0aWYgKCFbJyonLCAndXNlcicsICdhdXRvY29uZmlybWVkJ10uaW5jbHVkZXMoZ3JvdXBOYW1lKSkge1xuXHRcdFx0XHRcdG1lc3NhZ2VzLnB1c2goYGdyb3VwLSR7Z3JvdXBOYW1lfS1tZW1iZXJgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAocXVlcnlPYmouZ2xvYmFsdXNlcmluZm8gJiYgcXVlcnlPYmouZ2xvYmFsdXNlcmluZm8uZ3JvdXBzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGdyb3VwTmFtZSBvZiBxdWVyeU9iai5nbG9iYWx1c2VyaW5mby5ncm91cHMpIHtcblx0XHRcdFx0bWVzc2FnZXMucHVzaChgZ3JvdXAtJHtncm91cE5hbWV9LW1lbWJlcmApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZ2V0TXdBcGkoKS5sb2FkTWVzc2FnZXNJZk1pc3NpbmcobWVzc2FnZXMpO1xuXHR9O1xuXHRjb25zdCBzaG93QVBJUHJldmlldyA9IChxdWVyeVR5cGUsIGh0bWwsIGlkLCBuYXZwb3AsIGRvd25sb2FkKSA9PiB7XG5cdFx0Ly8gREo6IGRvbmVcblx0XHRsZXQgdGFyZ2V0ID0gJ3BvcHVwUHJldmlldyc7XG5cdFx0Y29tcGxldGVkTmF2cG9wVGFzayhuYXZwb3ApO1xuXHRcdHN3aXRjaCAocXVlcnlUeXBlKSB7XG5cdFx0XHRjYXNlICdpbWFnZWxpbmtzJzpcblx0XHRcdGNhc2UgJ2NhdGVnb3J5Jzpcblx0XHRcdFx0dGFyZ2V0ID0gJ3BvcHVwUG9zdFByZXZpZXcnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3VzZXJpbmZvJzpcblx0XHRcdFx0dGFyZ2V0ID0gJ3BvcHVwVXNlckRhdGEnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3JldmlzaW9uJzpcblx0XHRcdFx0aW5zZXJ0UHJldmlldyhkb3dubG9hZCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2V0UG9wdXBUaXBzQW5kSFRNTChodG1sLCB0YXJnZXQsIGlkKTtcblx0fTtcblx0Y29uc3QgQVBJcmV2aXNpb25QcmV2aWV3SFRNTCA9IChfYXJ0aWNsZSwgZG93bmxvYWQpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNPYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IHBhZ2UgPSBhbnlDaGlsZChqc09iai5xdWVyeS5wYWdlcyk7XG5cdFx0XHRpZiAocGFnZS5taXNzaW5nKSB7XG5cdFx0XHRcdC8vIFRPRE8gd2UgbmVlZCB0byBmaXggdGhpcyBwcm9wZXIgbGF0ZXIgb25cblx0XHRcdFx0ZG93bmxvYWQub3duZXIgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjb250ZW50ID1cblx0XHRcdFx0cGFnZSAmJiBwYWdlLnJldmlzaW9ucyAmJiBwYWdlLnJldmlzaW9uc1swXS5jb250ZW50bW9kZWwgPT09ICd3aWtpdGV4dCdcblx0XHRcdFx0XHQ/IHBhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnRcblx0XHRcdFx0XHQ6IG51bGw7XG5cdFx0XHRpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGRvd25sb2FkLmRhdGEgPSBjb250ZW50O1xuXHRcdFx0XHRkb3dubG9hZC5sYXN0TW9kaWZpZWQgPSBuZXcgRGF0ZShwYWdlLnJldmlzaW9uc1swXS50aW1lc3RhbXApO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICdSZXZpc2lvbiBwcmV2aWV3IGZhaWxlZCA6KCc7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBBUEliYWNrbGlua3NQcmV2aWV3SFRNTCA9IChfYXJ0aWNsZSwgZG93bmxvYWQgLyogLCBuYXZwb3AgKi8pID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNPYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IGxpc3QgPSBqc09iai5xdWVyeS5iYWNrbGlua3M7XG5cdFx0XHRsZXQgaHRtbCA9IFtdO1xuXHRcdFx0aWYgKCFsaXN0KSB7XG5cdFx0XHRcdHJldHVybiBwb3B1cFN0cmluZygnTm8gYmFja2xpbmtzIGZvdW5kJyk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0XHRjb25zdCB0ID0gbmV3IFRpdGxlKGVsZW1lbnQudGl0bGUpO1xuXHRcdFx0XHRodG1sLnB1c2goYDxhIGhyZWY9XCIke3BnLndpa2kudGl0bGViYXNlfSR7dC51cmxTdHJpbmcoKX1cIj4ke3QudG9TdHJpbmcoKS5lbnRpZnkoKX08L2E+YCk7XG5cdFx0XHR9XG5cdFx0XHRodG1sID0gaHRtbC5qb2luKCcsICcpO1xuXHRcdFx0aWYgKGpzT2JqLmNvbnRpbnVlICYmIGpzT2JqLmNvbnRpbnVlLmJsY29udGludWUpIHtcblx0XHRcdFx0aHRtbCArPSBwb3B1cFN0cmluZygnIGFuZCBtb3JlJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaHRtbDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnYmFja2xpbmtzUHJldmlld0hUTUwgd2VudCB3b25reSc7XG5cdFx0fVxuXHR9O1xuXHRwZy5mbi5BUElzaGFyZWRJbWFnZVBhZ2VQcmV2aWV3SFRNTCA9IChvYmopID0+IHtcblx0XHRsb2coJ0FQSXNoYXJlZEltYWdlUGFnZVByZXZpZXdIVE1MJyk7XG5cdFx0Y29uc3QgcG9wdXBpZCA9IG9iai5yZXF1ZXN0aWQ7XG5cdFx0aWYgKG9iai5xdWVyeSAmJiBvYmoucXVlcnkucGFnZXMpIHtcblx0XHRcdGNvbnN0IHBhZ2UgPSBhbnlDaGlsZChvYmoucXVlcnkucGFnZXMpO1xuXHRcdFx0Y29uc3QgY29udGVudCA9XG5cdFx0XHRcdHBhZ2UgJiYgcGFnZS5yZXZpc2lvbnMgJiYgcGFnZS5yZXZpc2lvbnNbMF0uY29udGVudG1vZGVsID09PSAnd2lraXRleHQnXG5cdFx0XHRcdFx0PyBwYWdlLnJldmlzaW9uc1swXS5jb250ZW50XG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0aWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyAmJiBwZyAmJiBwZy5jdXJyZW50ICYmIHBnLmN1cnJlbnQubGluayAmJiBwZy5jdXJyZW50LmxpbmsubmF2cG9wdXApIHtcblx0XHRcdFx0LyogTm90IGVudGlyZWx5IHNhZmUsIGJ1dCB0aGUgYmVzdCB3ZSBjYW4gZG8gKi9cblx0XHRcdFx0Y29uc3QgcCA9IG5ldyBQcmV2aWV3bWFrZXIoY29udGVudCwgcGcuY3VycmVudC5saW5rLm5hdnBvcHVwLmFydGljbGUsIHBnLmN1cnJlbnQubGluay5uYXZwb3B1cCk7XG5cdFx0XHRcdHAubWFrZVByZXZpZXcoKTtcblx0XHRcdFx0c2V0UG9wdXBIVE1MKHAuaHRtbCwgJ3BvcHVwU2Vjb25kUHJldmlldycsIHBvcHVwaWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgQVBJaW1hZ2VwYWdlUHJldmlld0hUTUwgPSAoYXJ0aWNsZSwgZG93bmxvYWQsIG5hdnBvcCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBqc09iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpO1xuXHRcdFx0Y29uc3QgcGFnZSA9IGFueUNoaWxkKGpzT2JqLnF1ZXJ5LnBhZ2VzKTtcblx0XHRcdGNvbnN0IGNvbnRlbnQgPVxuXHRcdFx0XHRwYWdlICYmIHBhZ2UucmV2aXNpb25zICYmIHBhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnRtb2RlbCA9PT0gJ3dpa2l0ZXh0J1xuXHRcdFx0XHRcdD8gcGFnZS5yZXZpc2lvbnNbMF0uY29udGVudFxuXHRcdFx0XHRcdDogbnVsbDtcblx0XHRcdGxldCByZXQgPSAnJztcblx0XHRcdGxldCBhbHQgPSAnJztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdFt7YWx0fV0gPSBuYXZwb3AucGFyZW50QW5jaG9yLmNoaWxkTm9kZXM7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdH1cblx0XHRcdGlmIChhbHQpIHtcblx0XHRcdFx0cmV0ID0gYCR7cmV0fTxocj48Yj4ke3BvcHVwU3RyaW5nKCdBbHQgdGV4dDonKX08L2I+ICR7cGcuZXNjYXBlUXVvdGVzSFRNTChhbHQpfWA7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGNvbnN0IHAgPSBwcmVwUHJldmlld21ha2VyKGNvbnRlbnQsIGFydGljbGUsIG5hdnBvcCk7XG5cdFx0XHRcdHAubWFrZVByZXZpZXcoKTtcblx0XHRcdFx0aWYgKHAuaHRtbCkge1xuXHRcdFx0XHRcdHJldCArPSBgPGhyPiR7cC5odG1sfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwU3VtbWFyeURhdGEnKSkge1xuXHRcdFx0XHRcdGNvbnN0IGluZm8gPSBnZXRQYWdlSW5mbyhjb250ZW50LCBkb3dubG9hZCk7XG5cdFx0XHRcdFx0bG9nKGluZm8pO1xuXHRcdFx0XHRcdHNldFBvcHVwVHJhaWxlcihpbmZvLCBuYXZwb3AuaWROdW1iZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFnZSAmJiBwYWdlLmltYWdlcmVwb3NpdG9yeSA9PT0gJ3NoYXJlZCcpIHtcblx0XHRcdFx0Y29uc3QgYXJ0ID0gbmV3IFRpdGxlKGFydGljbGUpO1xuXHRcdFx0XHRjb25zdCBlbmNhcnQgPSBlbmNvZGVVUklDb21wb25lbnQoYEZpbGU6JHthcnQuc3RyaXBOYW1lc3BhY2UoKX1gKTtcblx0XHRcdFx0Y29uc3Qgc2hhcmVkX3VybCA9XG5cdFx0XHRcdFx0YCR7cGcud2lraS5hcGljb21tb25zYmFzZX0/Zm9ybWF0PWpzb24mZm9ybWF0dmVyc2lvbj0yYCArXG5cdFx0XHRcdFx0JyZjYWxsYmFjaz1wZy5mbi5BUElzaGFyZWRJbWFnZVBhZ2VQcmV2aWV3SFRNTCcgK1xuXHRcdFx0XHRcdGAmcmVxdWVzdGlkPSR7bmF2cG9wLmlkTnVtYmVyfSZhY3Rpb249cXVlcnkmcHJvcD1yZXZpc2lvbnMmcnZwcm9wPWNvbnRlbnQmdGl0bGVzPSR7ZW5jYXJ0fWA7XG5cdFx0XHRcdHJldCA9IGAke3JldH08aHI+JHtwb3B1cFN0cmluZygnSW1hZ2UgZnJvbSBDb21tb25zJyl9OiA8YSBocmVmPVwiJHtcblx0XHRcdFx0XHRwZy53aWtpLmNvbW1vbnNiYXNlXG5cdFx0XHRcdH0/dGl0bGU9JHtlbmNhcnR9XCI+JHtwb3B1cFN0cmluZygnRGVzY3JpcHRpb24gcGFnZScpfTwvYT5gO1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChzaGFyZWRfdXJsKTtcblx0XHRcdH1cblx0XHRcdHNob3dBUElQcmV2aWV3KCdpbWFnZWxpbmtzJywgQVBJaW1hZ2VsaW5rc1ByZXZpZXdIVE1MKGFydGljbGUsIGRvd25sb2FkKSwgbmF2cG9wLmlkTnVtYmVyLCBkb3dubG9hZCk7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICdBUEkgaW1hZ2VwYWdlIHByZXZpZXcgZmFpbGVkIDooJztcblx0XHR9XG5cdH07XG5cdGNvbnN0IEFQSWltYWdlbGlua3NQcmV2aWV3SFRNTCA9IChfYXJ0aWNsZSwgZG93bmxvYWQpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNvYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IGxpc3QgPSBqc29iai5xdWVyeS5pbWFnZXVzYWdlO1xuXHRcdFx0aWYgKGxpc3QpIHtcblx0XHRcdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBsaXN0KSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goZWxlbWVudC50aXRsZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJldC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ05vIGltYWdlIGxpbmtzIGZvdW5kJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGA8aDI+JHtwb3B1cFN0cmluZygnRmlsZSBsaW5rcycpfTwvaDI+JHtsaW5rTGlzdChyZXQpfWA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ05vIGltYWdlIGxpbmtzIGZvdW5kJyk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJ0ltYWdlIGxpbmtzIHByZXZpZXcgZ2VuZXJhdGlvbiBmYWlsZWQgOignO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgQVBJY2F0ZWdvcnlQcmV2aWV3SFRNTCA9IChfYXJ0aWNsZSwgZG93bmxvYWQpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNvYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IGxpc3QgPSBqc29iai5xdWVyeS5jYXRlZ29yeW1lbWJlcnM7XG5cdFx0XHRsZXQgcmV0ID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0XHRyZXQucHVzaChlbGVtZW50LnRpdGxlKTtcblx0XHRcdH1cblx0XHRcdGlmIChyZXQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiBwb3B1cFN0cmluZygnRW1wdHkgY2F0ZWdvcnknKTtcblx0XHRcdH1cblx0XHRcdHJldCA9IGA8aDI+JHt0cHJpbnRmKCdDYXRlZ29yeSBtZW1iZXJzICglcyBzaG93biknLCBbcmV0Lmxlbmd0aF0pfTwvaDI+JHtsaW5rTGlzdChyZXQpfWA7XG5cdFx0XHRpZiAoanNvYmouY29udGludWUgJiYganNvYmouY29udGludWUuY21jb250aW51ZSkge1xuXHRcdFx0XHRyZXQgKz0gcG9wdXBTdHJpbmcoJyBhbmQgbW9yZScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnQ2F0ZWdvcnkgcHJldmlldyBmYWlsZWQgOignO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgQVBJdXNlckluZm9QcmV2aWV3SFRNTCA9IChfYXJ0aWNsZSwgZG93bmxvYWQpID0+IHtcblx0XHRsZXQgcmV0ID0gW107XG5cdFx0bGV0IHF1ZXJ5b2JqID0ge307XG5cdFx0dHJ5IHtcblx0XHRcdHF1ZXJ5b2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSkucXVlcnk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJ1VzZXJpbmZvIHByZXZpZXcgZmFpbGVkIDooJztcblx0XHR9XG5cdFx0Y29uc3QgdXNlciA9IGFueUNoaWxkKHF1ZXJ5b2JqLnVzZXJzKTtcblx0XHRpZiAodXNlcikge1xuXHRcdFx0Y29uc3Qge2dsb2JhbHVzZXJpbmZvfSA9IHF1ZXJ5b2JqO1xuXHRcdFx0aWYgKHVzZXIuaW52YWxpZCA9PT0gJycpIHtcblx0XHRcdFx0cmV0LnB1c2gocG9wdXBTdHJpbmcoJ0ludmFsaWQgdXNlcicpKTtcblx0XHRcdH0gZWxzZSBpZiAodXNlci5taXNzaW5nID09PSAnJykge1xuXHRcdFx0XHRyZXQucHVzaChwb3B1cFN0cmluZygnTm90IGEgcmVnaXN0ZXJlZCB1c2VybmFtZScpKTtcblx0XHRcdH1cblx0XHRcdGlmICh1c2VyLmJsb2NrZWRieSkge1xuXHRcdFx0XHRpZiAodXNlci5ibG9ja3BhcnRpYWwpIHtcblx0XHRcdFx0XHRyZXQucHVzaChgPGI+JHtwb3B1cFN0cmluZygnSGFzIGJsb2NrcycpfTwvYj5gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXQucHVzaChgPGI+JHtwb3B1cFN0cmluZygnQkxPQ0tFRCcpfTwvYj5gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGdsb2JhbHVzZXJpbmZvICYmICgnbG9ja2VkJyBpbiBnbG9iYWx1c2VyaW5mbyB8fCAnaGlkZGVuJyBpbiBnbG9iYWx1c2VyaW5mbykpIHtcblx0XHRcdFx0bGV0IGxvY2tlZFN1bEFjY291bnRJc0F0dGFjaGVkVG9UaGlzID0gdHJ1ZTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGdsb2JhbHVzZXJpbmZvLnVuYXR0YWNoZWQgJiYgaSA8IGdsb2JhbHVzZXJpbmZvLnVuYXR0YWNoZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoZ2xvYmFsdXNlcmluZm8udW5hdHRhY2hlZFtpXS53aWtpID09PSBtdy5jb25maWcuZ2V0KCd3Z0RCbmFtZScpKSB7XG5cdFx0XHRcdFx0XHRsb2NrZWRTdWxBY2NvdW50SXNBdHRhY2hlZFRvVGhpcyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChsb2NrZWRTdWxBY2NvdW50SXNBdHRhY2hlZFRvVGhpcykge1xuXHRcdFx0XHRcdGlmICgnbG9ja2VkJyBpbiBnbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0XHRcdFx0cmV0LnB1c2goYDxiPjxpPiR7cG9wdXBTdHJpbmcoJ0xPQ0tFRCcpfTwvaT48L2I+YCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICgnaGlkZGVuJyBpbiBnbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0XHRcdFx0cmV0LnB1c2goYDxiPjxpPiR7cG9wdXBTdHJpbmcoJ0hJRERFTicpfTwvaT48L2I+YCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBTaG93R2VuZGVyJykgJiYgdXNlci5nZW5kZXIpIHtcblx0XHRcdFx0c3dpdGNoICh1c2VyLmdlbmRlcikge1xuXHRcdFx0XHRcdGNhc2UgJ21hbGUnOlxuXHRcdFx0XHRcdFx0cmV0LnB1c2goYCR7cG9wdXBTdHJpbmcoJ2hlL2hpbScpfSDCtyBgKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2ZlbWFsZSc6XG5cdFx0XHRcdFx0XHRyZXQucHVzaChgJHtwb3B1cFN0cmluZygnc2hlL2hlcicpfSDCtyBgKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodXNlci5ncm91cHMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBncm91cE5hbWUgb2YgdXNlci5ncm91cHMpIHtcblx0XHRcdFx0XHRpZiAoIVsnKicsICd1c2VyJywgJ2F1dG9jb25maXJtZWQnXS5pbmNsdWRlcyhncm91cE5hbWUpKSB7XG5cdFx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0XHQvLyAqIHNlZSBbW1NwZWNpYWw6UHJlZml4SW5kZXgvTWVkaWFXaWtpOkdyb3VwLV1dXG5cdFx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0XHRyZXQucHVzaChwZy5lc2NhcGVRdW90ZXNIVE1MKG13Lm1lc3NhZ2UoYGdyb3VwLSR7Z3JvdXBOYW1lfS1tZW1iZXJgLCB1c2VyLmdlbmRlcikudGV4dCgpKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZ2xvYmFsdXNlcmluZm8gJiYgZ2xvYmFsdXNlcmluZm8uZ3JvdXBzKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZ3JvdXBOYW1lIG9mIGdsb2JhbHVzZXJpbmZvLmdyb3Vwcykge1xuXHRcdFx0XHRcdHJldC5wdXNoKFxuXHRcdFx0XHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdFx0Ly8gKiBzZWUgW1tTcGVjaWFsOlByZWZpeEluZGV4L01lZGlhV2lraTpHcm91cC1dXVxuXHRcdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdFx0YDxpPiR7cGcuZXNjYXBlUXVvdGVzSFRNTChtdy5tZXNzYWdlKGBncm91cC0ke2dyb3VwTmFtZX0tbWVtYmVyYCwgdXNlci5nZW5kZXIpLnRleHQoKSl9PC9pPmBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodXNlci5yZWdpc3RyYXRpb24pIHtcblx0XHRcdFx0cmV0LnB1c2goXG5cdFx0XHRcdFx0cGcuZXNjYXBlUXVvdGVzSFRNTChcblx0XHRcdFx0XHRcdCh1c2VyLmVkaXRjb3VudCA/PyAnMCcpICtcblx0XHRcdFx0XHRcdFx0cG9wdXBTdHJpbmcoJyBlZGl0cyBzaW5jZTogJykgK1xuXHRcdFx0XHRcdFx0XHQodXNlci5yZWdpc3RyYXRpb24gPyBmb3JtYXR0ZWREYXRlKG5ldyBEYXRlKHVzZXIucmVnaXN0cmF0aW9uKSkgOiAnJylcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChxdWVyeW9iai51c2VyY29udHJpYnMgJiYgcXVlcnlvYmoudXNlcmNvbnRyaWJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldC5wdXNoKHBvcHVwU3RyaW5nKCdsYXN0IGVkaXQgb24gJykgKyBmb3JtYXR0ZWREYXRlKG5ldyBEYXRlKHF1ZXJ5b2JqLnVzZXJjb250cmlic1swXS50aW1lc3RhbXApKSk7XG5cdFx0fVxuXHRcdGlmIChxdWVyeW9iai5ibG9ja3MpIHtcblx0XHRcdHJldC5wdXNoKHBvcHVwU3RyaW5nKCdJUCB1c2VyJykpOyAvLyB3ZSBvbmx5IHJlcXVlc3QgbGlzdD1ibG9ja3MgZm9yIElQc1xuXHRcdFx0Zm9yIChsZXQgbCA9IDA7IGwgPCBxdWVyeW9iai5ibG9ja3MubGVuZ3RoOyBsKyspIHtcblx0XHRcdFx0bGV0IHJic3RyID0gcXVlcnlvYmouYmxvY2tzW2xdLnJhbmdlc3RhcnQgPT09IHF1ZXJ5b2JqLmJsb2Nrc1tsXS5yYW5nZWVuZCA/ICdCTE9DSycgOiAnUkFOR0VCTE9DSyc7XG5cdFx0XHRcdHJic3RyID0gQXJyYXkuaXNBcnJheShxdWVyeW9iai5ibG9ja3NbbF0ucmVzdHJpY3Rpb25zKSA/IGAke3Jic3RyfUVEYCA6IGBIYXMgJHtyYnN0ci50b0xvd2VyQ2FzZSgpfXNgO1xuXHRcdFx0XHRyZXQucHVzaChgPGI+JHtwb3B1cFN0cmluZyhyYnN0cil9PC9iPmApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBpZiBhbnkgZWxlbWVudCBvZiByZXQgZW5kcyB3aXRoICcgwrcgJywgbWVyZ2UgaXQgd2l0aCB0aGUgbmV4dCBlbGVtZW50IHRvIGF2b2lkXG5cdFx0Ly8gdGhlIC5qb2luKCcsICcpIGNhbGwgaW5zZXJ0aW5nIGEgY29tbWEgYWZ0ZXIgaXRcblx0XHRmb3IgKGxldCBtID0gMDsgbSA8IHJldC5sZW5ndGggLSAxOyBtKyspIHtcblx0XHRcdGlmIChyZXRbbV0ubGVuZ3RoID4gMyAmJiByZXRbbV0uc2xpY2UoTWF0aC5tYXgoMCwgcmV0W21dLmxlbmd0aCAtIDMpKSA9PT0gJyDCtyAnKSB7XG5cdFx0XHRcdHJldFttXSArPSByZXRbbSArIDFdO1xuXHRcdFx0XHRyZXQuc3BsaWNlKG0gKyAxLCAxKTsgLy8gZGVsZXRlIGVsZW1lbnQgYXQgaW5kZXggbSsxXG5cdFx0XHRcdG0tLTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0ID0gYDxocj4ke3JldC5qb2luKCcsICcpfWA7XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgQVBJY29udHJpYnNQcmV2aWV3SFRNTCA9IChhcnRpY2xlLCBkb3dubG9hZCwgbmF2cG9wKSA9PiB7XG5cdFx0cmV0dXJuIEFQSWhpc3RvcnlQcmV2aWV3SFRNTChhcnRpY2xlLCBkb3dubG9hZCwgbmF2cG9wLCB0cnVlKTtcblx0fTtcblx0Y29uc3QgQVBJaGlzdG9yeVByZXZpZXdIVE1MID0gKGFydGljbGUsIGRvd25sb2FkLCBfbmF2cG9wLCByZWFsbHlDb250cmlicykgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBqc29iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpO1xuXHRcdFx0bGV0IGVkaXRzID0gW107XG5cdFx0XHRlZGl0cyA9IHJlYWxseUNvbnRyaWJzID8ganNvYmoucXVlcnkudXNlcmNvbnRyaWJzIDogYW55Q2hpbGQoanNvYmoucXVlcnkucGFnZXMpLnJldmlzaW9ucztcblx0XHRcdGNvbnN0IHJldCA9IGVkaXRQcmV2aWV3VGFibGUoYXJ0aWNsZSwgZWRpdHMsIHJlYWxseUNvbnRyaWJzKTtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJ0hpc3RvcnkgcHJldmlldyBmYWlsZWQgOi0oJztcblx0XHR9XG5cdH07XG5cdC8vIEVOREZJTEU6IHF1ZXJ5cHJldmlldy5qc1xuXHQvLyBTVEFSVEZJTEU6IGRlYnVnLmpzXG5cdC8vIERlYnVnZ2luZyBmdW5jdGlvbnNcblx0Y29uc3Qgc2V0dXBEZWJ1Z2dpbmcgPSAoKSA9PiB7XG5cdFx0aWYgKHdpbmRvdy5wb3B1cERlYnVnKSB7XG5cdFx0XHQvLyBwb3B1cERlYnVnIGlzIHNldCBmcm9tIC52ZXJzaW9uXG5cdFx0XHR3aW5kb3cubG9nID0gKHgpID0+IHtcblx0XHRcdFx0Ly8gaWYgKGcgTXNnICE9PSAnJykgeyBnTXNnICs9ICdcXG4nOyBnTXNnKz10aW1lKCkgKyAnICcgKyB4OyB9XG5cdFx0XHRcdGNvbnNvbGUubG9nKHgpO1xuXHRcdFx0fTtcblx0XHRcdHdpbmRvdy5lcnJsb2cgPSAoeCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBbUG9wdXBzXSAke3h9YCk7XG5cdFx0XHR9O1xuXHRcdFx0bG9nKCdJbml0aWFsaXppbmcgbG9nZ2VyJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5sb2cgPSAoKSA9PiB7fTtcblx0XHRcdHdpbmRvdy5lcnJsb2cgPSAoKSA9PiB7fTtcblx0XHR9XG5cdH07XG5cdC8vIEVOREZJTEU6IGRlYnVnLmpzXG5cdC8vIFNUQVJURklMRTogaW1hZ2VzLmpzXG5cdC8vIGxvYWQgaW1hZ2Ugb2YgdHlwZSBUaXRsZS5cblx0Y29uc3QgbG9hZEltYWdlID0gKGltYWdlLCBuYXZwb3ApID0+IHtcblx0XHRpZiAodHlwZW9mIGltYWdlLnN0cmlwTmFtZXNwYWNlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSgnbG9hZEltYWdlcyBiYWQnLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdH1cblx0XHQvLyBBUEkgY2FsbCB0byByZXRyaWV2ZSBpbWFnZSBpbmZvLlxuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBJbWFnZXMnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIWlzVmFsaWRJbWFnZU5hbWUoaW1hZ2UudG9TdHJpbmcoKSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgYXJ0ID0gaW1hZ2UudXJsU3RyaW5nKCk7XG5cdFx0bGV0IHVybCA9IGAke3BnLndpa2kuYXBpd2lraWJhc2V9P2Zvcm1hdD1qc29uJmZvcm1hdHZlcnNpb249MiZhY3Rpb249cXVlcnlgO1xuXHRcdHVybCArPSBgJnByb3A9aW1hZ2VpbmZvJmlpcHJvcD11cmx8bWltZSZpaXVybHdpZHRoPSR7Z2V0VmFsdWVPZigncG9wdXBJbWFnZVNpemVMYXJnZScpfWA7XG5cdFx0dXJsICs9IGAmdGl0bGVzPSR7YXJ0fWA7XG5cdFx0cGVuZGluZ05hdnBvcFRhc2sobmF2cG9wKTtcblx0XHRjb25zdCBjYWxsYmFjayA9IChkKSA9PiB7XG5cdFx0XHRwb3B1cHNJbnNlcnRJbWFnZShuYXZwb3AuaWROdW1iZXIsIG5hdnBvcCwgZCk7XG5cdFx0fTtcblx0XHRjb25zdCBnbyA9ICgpID0+IHtcblx0XHRcdGdldFBhZ2VXaXRoQ2FjaGluZyh1cmwsIGNhbGxiYWNrLCBuYXZwb3ApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblx0XHRpZiAobmF2cG9wLnZpc2libGUgfHwgIWdldFZhbHVlT2YoJ3BvcHVwTGF6eURvd25sb2FkcycpKSB7XG5cdFx0XHRnbygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuYXZwb3AuYWRkSG9vayhnbywgJ3VuaGlkZScsICdhZnRlcicsICdET1dOTE9BRF9JTUFHRV9RVUVSWV9EQVRBJyk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBwb3B1cHNJbnNlcnRJbWFnZSA9IChpZCwgX25hdnBvcCwgZG93bmxvYWQpID0+IHtcblx0XHRsb2coJ3BvcHVwc0luc2VydEltYWdlJyk7XG5cdFx0bGV0IGltYWdlaW5mbztcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNPYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IGltYWdlcGFnZSA9IGFueUNoaWxkKGpzT2JqLnF1ZXJ5LnBhZ2VzKTtcblx0XHRcdGlmIChpbWFnZXBhZ2UuaW1hZ2VpbmZvID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0W2ltYWdlaW5mb10gPSBpbWFnZXBhZ2UuaW1hZ2VpbmZvO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9nKCdwb3B1cHNJbnNlcnRJbWFnZSBmYWlsZWQgOignKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcG9wdXBJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwb3B1cEltZyR7aWR9YCk7XG5cdFx0aWYgKCFwb3B1cEltYWdlKSB7XG5cdFx0XHRsb2coJ2NvdWxkIG5vdCBmaW5kIGluc2VydGlvbiBwb2ludCBmb3IgaW1hZ2UnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cG9wdXBJbWFnZS53aWR0aCA9IGdldFZhbHVlT2YoJ3BvcHVwSW1hZ2VTaXplJyk7XG5cdFx0cG9wdXBJbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cdFx0Ly8gU2V0IHRoZSBzb3VyY2UgZm9yIHRoZSBpbWFnZS5cblx0XHRpZiAoaW1hZ2VpbmZvLnRodW1idXJsKSB7XG5cdFx0XHRwb3B1cEltYWdlLnNyYyA9IGltYWdlaW5mby50aHVtYnVybDtcblx0XHR9IGVsc2UgaWYgKGltYWdlaW5mby5taW1lLmluZGV4T2YoJ2ltYWdlJykgPT09IDApIHtcblx0XHRcdHBvcHVwSW1hZ2Uuc3JjID0gaW1hZ2VpbmZvLnVybDtcblx0XHRcdGxvZygnYSB0aHVtYiBjb3VsZCBub3QgYmUgZm91bmQsIHVzaW5nIG9yaWdpbmFsIGltYWdlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvZyhcImZ1bGxzaXplIGltYWdldGh1bWIsIGJ1dCBub3Qgc3VyZSBpZiBpdCdzIGFuIGltYWdlXCIpO1xuXHRcdH1cblx0XHRjb25zdCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BvcHVwSW1hZ2VMaW5rJHtpZH1gKTtcblx0XHRpZiAoYSA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdC8vIERldGVybWluZSB0aGUgYWN0aW9uIG9mIHRoZSBzdXJyb3VkaW5nIGltYWdlbGluay5cblx0XHRzd2l0Y2ggKGdldFZhbHVlT2YoJ3BvcHVwVGh1bWJBY3Rpb24nKSkge1xuXHRcdFx0Y2FzZSAnaW1hZ2VwYWdlJzpcblx0XHRcdFx0aWYgKHBnLmN1cnJlbnQuYXJ0aWNsZS5uYW1lc3BhY2VJZCgpICE9PSBwZy5uc0ltYWdlSWQpIHtcblx0XHRcdFx0XHRhLmhyZWYgPSBpbWFnZWluZm8uZGVzY3JpcHRpb251cmw7XG5cdFx0XHRcdFx0Ly8gRklYTUU6IHVucmVsaWFibGUgcGcuaWROdW1iZXJcblx0XHRcdFx0XHRwb3BUaXBzU29vbkZuKGBwb3B1cEltYWdlJHtpZH1gKSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHQvKiBmYWxscyB0aHJvdWdoICovXG5cdFx0XHRjYXNlICdzaXpldG9nZ2xlJzpcblx0XHRcdFx0YS5vbmNsaWNrID0gdG9nZ2xlU2l6ZTtcblx0XHRcdFx0YS50aXRsZSA9IHBvcHVwU3RyaW5nKCdUb2dnbGUgaW1hZ2Ugc2l6ZScpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRjYXNlICdsaW5rZnVsbCc6XG5cdFx0XHRcdGEuaHJlZiA9IGltYWdlaW5mby51cmw7XG5cdFx0XHRcdGEudGl0bGUgPSBwb3B1cFN0cmluZygnT3BlbiBmdWxsLXNpemUgaW1hZ2UnKTtcblx0XHR9XG5cdH07XG5cdC8vIFRvZ2dsZXMgdGhlIGltYWdlIGJldHdlZW4gaW5saW5lIHNtYWxsIGFuZCBuYXZwb3AgZnVsbHdpZHRoLlxuXHQvLyBJdCdzIHRoZSBzYW1lIGltYWdlLCBubyBhY3R1YWwgc2l6ZWNoYW5nZSBvY2N1cnMsIG9ubHkgZGlzcGxheSB3aWR0aC5cblx0Y29uc3QgdG9nZ2xlU2l6ZSA9IGZ1bmN0aW9uIHRvZ2dsZVNpemUoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0aWYgKCFzZWxmKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSgnc2VsZiBpcyBudWxsIDovJywge3RhZzogJ3BvcHVwcycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgaW1nID0gc2VsZi5maXJzdENoaWxkO1xuXHRcdGlmICghaW1nKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSgnaW1nIGlzIG51bGwgOi8nLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbWcuc3R5bGUud2lkdGggPSAhaW1nLnN0eWxlLndpZHRoIHx8IGltZy5zdHlsZS53aWR0aCA9PT0gJycgPyAnMTAwJScgOiAnJztcblx0fTtcblx0Ly8gUmV0dXJucyBvbmUgdGl0bGUgb2YgYW4gaW1hZ2UgZnJvbSB3aWtpVGV4dC5cblx0Y29uc3QgZ2V0VmFsaWRJbWFnZUZyb21XaWtpVGV4dCA9ICh3aWtpVGV4dCkgPT4ge1xuXHRcdC8vIG5iIGluIHBnLnJlLmltYWdlIHdlJ3JlIGludGVyZXN0ZWQgaW4gdGhlIHNlY29uZCBicmFja2V0ZWQgZXhwcmVzc2lvblxuXHRcdC8vIHRoaXMgbWF5IGNoYW5nZSBpZiB0aGUgcmVnZXggY2hhbmdlcyA6LShcblx0XHQvLyBsZXQgbWF0Y2g9cGcucmUuaW1hZ2UuZXhlYyh3aWtpVGV4dCk7XG5cdFx0bGV0IG1hdGNoZWQ7XG5cdFx0bGV0IG1hdGNoO1xuXHRcdC8vIHN0cmlwIGh0bWwgY29tbWVudHMsIHVzZWQgYnkgZXZpbCBib3RzIDotKFxuXHRcdGNvbnN0IHQgPSByZW1vdmVNYXRjaGVzVW5sZXNzKHdpa2lUZXh0LCAvKDwhLS1bXFxTXFxzXSo/LS0+KS8sIDEsIC9ePCEtLVteW10qcG9wdXAvaSk7XG5cdFx0d2hpbGUgKChtYXRjaCA9IHBnLnJlLmltYWdlLmV4ZWModCkpICE9PSBudWxsKSB7XG5cdFx0XHQvLyBub3cgZmluZCBhIHNhbmUgaW1hZ2UgbmFtZSAtIGV4Y2x1ZGUgdGVtcGxhdGVzIGJ5IHNlZWtpbmcge1xuXHRcdFx0Y29uc3QgbSA9IG1hdGNoWzJdIHx8IG1hdGNoWzZdO1xuXHRcdFx0aWYgKGlzVmFsaWRJbWFnZU5hbWUobSkpIHtcblx0XHRcdFx0bWF0Y2hlZCA9IG07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwZy5yZS5pbWFnZS5sYXN0SW5kZXggPSAwO1xuXHRcdGlmICghbWF0Y2hlZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBgJHttdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc0ltYWdlSWRdfToke3VwY2FzZUZpcnN0KG1hdGNoZWQpfWA7XG5cdH07XG5cdGNvbnN0IHJlbW92ZU1hdGNoZXNVbmxlc3MgPSAoc3RyLCByZTEsIHBhcmVuY291bnQsIHJlMikgPT4ge1xuXHRcdGNvbnN0IHNwbGl0ID0gc3RyLnNwbGl0KHJlMSk7XG5cdFx0Y29uc3QgYyA9IHBhcmVuY291bnQgKyAxO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXQubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChpICUgYyA9PT0gMCB8fCByZTIudGVzdChzcGxpdFtpXSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRzcGxpdFtpXSA9ICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gc3BsaXQuam9pbignJyk7XG5cdH07XG5cdC8vIEVOREZJTEU6IGltYWdlcy5qc1xuXHQvLyBTVEFSVEZJTEU6IG5hbWVzcGFjZXMuanNcblx0Ly8gU2V0IHVwIG5hbWVzcGFjZXMgYW5kIG90aGVyIG5vbi1zdHJpbmdzLmpzIGxvY2FsaXphdGlvblxuXHQvLyAoY3VycmVudGx5IHRoYXQgbWVhbnMgcmVkaXJzIHRvbylcblx0Y29uc3Qgc2V0TmFtZXNwYWNlcyA9ICgpID0+IHtcblx0XHRwZy5uc1NwZWNpYWxJZCA9IC0xO1xuXHRcdHBnLm5zTWFpbnNwYWNlSWQgPSAwO1xuXHRcdHBnLm5zSW1hZ2VJZCA9IDY7XG5cdFx0cGcubnNVc2VySWQgPSAyO1xuXHRcdHBnLm5zVXNlcnRhbGtJZCA9IDM7XG5cdFx0cGcubnNDYXRlZ29yeUlkID0gMTQ7XG5cdFx0cGcubnNUZW1wbGF0ZUlkID0gMTA7XG5cdH07XG5cdGNvbnN0IHNldFJlZGlycyA9ICgpID0+IHtcblx0XHRjb25zdCByID0gJ3JlZGlyZWN0Jztcblx0XHRjb25zdCBSID0gJ1JFRElSRUNUJztcblx0XHRjb25zdCByZWRpckxpc3RzID0ge1xuXHRcdFx0YXI6IFtSLCAn2KrYrdmI2YrZhCddLFxuXHRcdFx0YmU6IFtyLCAn0L/QtdGA0LDQvdCw0LrRltGA0LDQstCw0L3RjNC90LUnXSxcblx0XHRcdGJnOiBbciwgJ9C/0YDQtdC90LDRgdC+0YfQstCw0L3QtScsICfQstC40LYnXSxcblx0XHRcdGJzOiBbciwgJ1ByZXVzbWplcmknLCAncHJldXNtamVyaScsICdQUkVVU01KRVJJJ10sXG5cdFx0XHRibjogW1IsICfgpqrgp4HgpqjgprDgp43gpqjgpr/gprDgp43gpqbgp4fgprYnXSxcblx0XHRcdGNzOiBbUiwgJ1DFmEVTTcSaUlVKJ10sXG5cdFx0XHRjeTogW3IsICdhaWwtY3lmZWlyaW8nXSxcblx0XHRcdGRlOiBbUiwgJ1dFSVRFUkxFSVRVTkcnXSxcblx0XHRcdGVsOiBbUiwgJ86Rzp3Okc6azpHOpM6VzqXOmM6lzp3Oo86XJ10sXG5cdFx0XHRlbzogW1IsICdBTElESVJFS1RVJywgJ0FMSURJUkVLVEknXSxcblx0XHRcdGVzOiBbUiwgJ1JFRElSRUNDScOTTiddLFxuXHRcdFx0ZXQ6IFtyLCAnc3V1bmEnXSxcblx0XHRcdGdhOiBbciwgJ2F0aHNoZW9sYWRoJ10sXG5cdFx0XHRnbDogW3IsICdSRURJUkVDQ0nDk04nLCAnUkVESVJFQ0lPTkFNRU5UTyddLFxuXHRcdFx0aGU6IFtSLCAn15TXpNeg15nXlCddLFxuXHRcdFx0aHU6IFtSLCAnw4FUSVLDgU5Zw41Uw4FTJ10sXG5cdFx0XHRpczogW3IsICd0aWx2w61zdW4nLCAnVElMVsONU1VOJ10sXG5cdFx0XHRpdDogW1IsICdSSU5WSUEnLCAnUmludmlhJ10sXG5cdFx0XHRqYTogW1IsICfou6LpgIEnXSxcblx0XHRcdG1rOiBbciwgJ9C/0YDQtdC90LDRgdC+0YfRg9Cy0LDRmtC1JywgJ9Cy0LjQtNC4J10sXG5cdFx0XHRuZHM6IFtyLCAnd2llZGVybGVpZGVuJ10sXG5cdFx0XHQnbmRzLW5sJzogW1IsICdERVVSVkVSV0lFWklORycsICdEVVVSVkVSV0lFWklORyddLFxuXHRcdFx0bmw6IFtSLCAnRE9PUlZFUldJSlpJTkcnXSxcblx0XHRcdG5uOiBbciwgJ29tZGlyaWdlciddLFxuXHRcdFx0cGw6IFtSLCAnUEFUUlonLCAnUFJaRUtJRVJVSicsICdUQU0nXSxcblx0XHRcdHB0OiBbUiwgJ3JlZGlyJ10sXG5cdFx0XHRydTogW1IsICfQn9CV0KDQldCd0JDQn9Cg0JDQktCb0JXQndCY0JUnLCAn0J/QldCg0JXQndCQ0J/QoCddLFxuXHRcdFx0c2s6IFtyLCAncHJlc21lcnVqJ10sXG5cdFx0XHRzcjogW3IsICfQn9GA0LXRg9GB0LzQtdGA0LgnLCAn0L/RgNC10YPRgdC80LXRgNC4JywgJ9Cf0KDQldCj0KHQnNCV0KDQmCcsICdQcmV1c21lcmknLCAncHJldXNtZXJpJywgJ1BSRVVTTUVSSSddLFxuXHRcdFx0dHQ6IFtSLCAnecO8bsOkbHTDvCcsICfQv9C10YDQtdC90LDQv9GA0LDQstC70LXQvdC40LUnLCAn0L/QtdGA0LXQvdCw0L/RgCddLFxuXHRcdFx0dWs6IFtSLCAn0J/QldCg0JXQndCQ0J/QoNCQ0JLQm9CV0J3QndCvJywgJ9Cf0JXQoNCV0J3QkNCf0KAnXSxcblx0XHRcdHZpOiBbciwgJ8SR4buVaSddLFxuXHRcdFx0eWk6IFtSLCAn15XXldeZ15nXmNei16jXpNeZ16jXnyddLFxuXHRcdFx0emg6IFtSLCAn6YeN5a6a5ZCRJ10sIC8vIG5vIGNvbW1hXG5cdFx0fTtcblx0XHRjb25zdCByZWRpckxpc3QgPSByZWRpckxpc3RzW3BnLndpa2kubGFuZ10gfHwgW3IsIFJdO1xuXHRcdC8vIE1lZGlhd2lraSBpcyB2ZXJ5IHRvbGVyYW50IGFib3V0IHdoYXQgY29tZXMgYWZ0ZXIgdGhlICNyZWRpcmVjdCBhdCB0aGUgc3RhcnRcblx0XHRwZy5yZS5yZWRpcmVjdCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgXlxcXFxzKlsjXSgke3JlZGlyTGlzdC5qb2luKCd8Jyl9KS4qP1xcXFxbezJ9KFteXFxcXHxcXFxcXV0qKSh8W15cXFxcXV0qKT9cXFxcXXsyfVxcXFxzKiguKilgLFxuXHRcdFx0J2knXG5cdFx0KTtcblx0fTtcblx0Y29uc3Qgc2V0SW50ZXJ3aWtpID0gKCkgPT4ge1xuXHRcdGlmIChwZy53aWtpLndpa2ltZWRpYSkge1xuXHRcdFx0Ly8gRnJvbSB7QGxpbmsgaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmcvd2lraS9MaXN0X29mX1dpa2lwZWRpYXN9XG5cdFx0XHQvLyB7QGxpbmsgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3cvYXBpLnBocD9hY3Rpb249c2l0ZW1hdHJpeCZmb3JtYXQ9anNvbiZzbXR5cGU9bGFuZ3VhZ2Umc21sYW5ncHJvcD1jb2RlJmZvcm1hdHZlcnNpb249Mn1cblx0XHRcdHBnLndpa2kuaW50ZXJ3aWtpID1cblx0XHRcdFx0J2FhfGFifGFjZXxhZnxha3xhbHN8YW18YW58YW5nfGFyfGFyY3xhcnp8YXN8YXN0fGF2fGF5fGF6fGJhfGJhcnxiYXQtc21nfGJjbHxiZXxiZS14LW9sZHxiZ3xiaHxiaXxiam58Ym18Ym58Ym98YnB5fGJyfGJzfGJ1Z3xieHJ8Y2F8Y2JrLXphbXxjZG98Y2V8Y2VifGNofGNob3xjaHJ8Y2h5fGNrYnxjb3xjcnxjcmh8Y3N8Y3NifGN1fGN2fGN5fGRhfGRlfGRpcXxkc2J8ZHZ8ZHp8ZWV8ZWx8ZW1sfGVufGVvfGVzfGV0fGV1fGV4dHxmYXxmZnxmaXxmaXUtdnJvfGZqfGZvfGZyfGZycHxmcnJ8ZnVyfGZ5fGdhfGdhZ3xnYW58Z2R8Z2x8Z2xrfGdufGdvdHxndXxndnxoYXxoYWt8aGF3fGhlfGhpfGhpZnxob3xocnxoc2J8aHR8aHV8aHl8aHp8aWF8aWR8aWV8aWd8aWl8aWt8aWxvfGlvfGlzfGl0fGl1fGphfGpib3xqdnxrYXxrYWF8a2FifGtiZHxrZ3xraXxranxra3xrbHxrbXxrbnxrb3xrb2l8a3J8a3JjfGtzfGtzaHxrdXxrdnxrd3xreXxsYXxsYWR8bGJ8bGJlfGxnfGxpfGxpanxsbW98bG58bG98bHR8bHRnfGx2fG1hcC1ibXN8bWRmfG1nfG1ofG1ocnxtaXxta3xtbHxtbnxtb3xtcnxtcmp8bXN8bXR8bXVzfG13bHxteXxteXZ8bXpufG5hfG5haHxuYXB8bmRzfG5kcy1ubHxuZXxuZXd8bmd8bmx8bm58bm98bm92fG5ybXxudnxueXxvY3xvbXxvcnxvc3xwYXxwYWd8cGFtfHBhcHxwY2R8cGRjfHBmbHxwaXxwaWh8cGx8cG1zfHBuYnxwbnR8cHN8cHR8cXV8cm18cm15fHJufHJvfHJvYS1ydXB8cm9hLXRhcmF8cnV8cnVlfHJ3fHNhfHNhaHxzY3xzY258c2NvfHNkfHNlfHNnfHNofHNpfHNpbXBsZXxza3xzbHxzbXxzbnxzb3xzcXxzcnxzcm58c3N8c3R8c3RxfHN1fHN2fHN3fHN6bHx0YXx0ZXx0ZXR8dGd8dGh8dGl8dGt8dGx8dG58dG98dHBpfHRyfHRzfHR0fHR1bXx0d3x0eXx1ZG18dWd8dWt8dXJ8dXp8dmV8dmVjfHZpfHZsc3x2b3x3YXx3YXJ8d298d3V1fHhhbHx4aHx5aXx5b3x6YXx6ZWF8emh8emgtY2xhc3NpY2FsfHpoLW1pbi1uYW58emgteXVlfHp1Jztcblx0XHRcdHBnLnJlLmludGVyd2lraSA9IG5ldyBSZWdFeHAoYF4ke3BnLndpa2kuaW50ZXJ3aWtpfTpgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGcud2lraS5pbnRlcndpa2kgPSBudWxsO1xuXHRcdFx0cGcucmUuaW50ZXJ3aWtpID0gL14kLztcblx0XHR9XG5cdH07XG5cdC8vIHJldHVybiBhIHJlZ2V4cCBwYXR0ZXJuIG1hdGNoaW5nIGFsbCB2YXJpYW50cyB0byB3cml0ZSB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdGNvbnN0IG5zUmUgPSAobmFtZXNwYWNlSWQpID0+IHtcblx0XHRjb25zdCBpbWFnZU5hbWVzcGFjZVZhcmlhbnRzID0gW107XG5cdFx0Zm9yIChjb25zdCBbX2xvY2FsaXplZE5hbWVzcGFjZUxjLCBfbmFtZXNwYWNlSWRdIG9mIE9iamVjdC5lbnRyaWVzKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlSWRzJykpKSB7XG5cdFx0XHRpZiAoX25hbWVzcGFjZUlkICE9PSBuYW1lc3BhY2VJZCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGxvY2FsaXplZE5hbWVzcGFjZUxjID0gdXBjYXNlRmlyc3QoX2xvY2FsaXplZE5hbWVzcGFjZUxjKTtcblx0XHRcdGltYWdlTmFtZXNwYWNlVmFyaWFudHMucHVzaChcblx0XHRcdFx0bXcudXRpbC5lc2NhcGVSZWdFeHAobG9jYWxpemVkTmFtZXNwYWNlTGMpLnNwbGl0KCcgJykuam9pbignWyBfXScpLFxuXHRcdFx0XHRtdy51dGlsLmVzY2FwZVJlZ0V4cChlbmNvZGVVUkkobG9jYWxpemVkTmFtZXNwYWNlTGMpKVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGAoPzoke2ltYWdlTmFtZXNwYWNlVmFyaWFudHMuam9pbignfCcpfSlgO1xuXHR9O1xuXHRjb25zdCBuc1JlSW1hZ2UgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIG5zUmUocGcubnNJbWFnZUlkKTtcblx0fTtcblx0Ly8gRU5ERklMRTogbmFtZXNwYWNlcy5qc1xuXHQvLyBTVEFSVEZJTEU6IHNlbHBvcC5qc1xuXHRjb25zdCBnZXRFZGl0Ym94U2VsZWN0aW9uID0gKCkgPT4ge1xuXHRcdC8vIHNlZSB7QGxpbmsgaHR0cDovL3d3dy53ZWJndXJ1c2ZvcnVtLmNvbS84LzEyLzB9XG5cdFx0bGV0IGVkaXRib3g7XG5cdFx0dHJ5IHtcblx0XHRcdGVkaXRib3ggPSBkb2N1bWVudC5lZGl0Zm9ybS53cFRleHRib3gxO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBJRSwgT3BlcmFcblx0XHRpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkudGV4dDtcblx0XHR9XG5cdFx0Ly8gTW96aWxsYVxuXHRcdGNvbnN0IHNlbFN0YXJ0ID0gZWRpdGJveC5zZWxlY3Rpb25TdGFydDtcblx0XHRjb25zdCBzZWxFbmQgPSBlZGl0Ym94LnNlbGVjdGlvbkVuZDtcblx0XHRyZXR1cm4gZWRpdGJveC52YWx1ZS5zdWJzdHJpbmcoc2VsU3RhcnQsIHNlbEVuZCk7XG5cdH07XG5cdGNvbnN0IGRvU2VsZWN0aW9uUG9wdXAgPSAoKSA9PiB7XG5cdFx0Ly8gcG9wdXAgaWYgdGhlIHNlbGVjdGlvbiBsb29rcyBsaWtlIFtbZm9vfGFueXRoaW5nIGFmdGVyd2FyZHMgYXQgYWxsXG5cdFx0Ly8gb3IgW1tmb298YmFyXV10ZXh0IHdpdGhvdXQgJ11dJ1xuXHRcdC8vIG9yIFtbZm9vfGJhcl1dXG5cdFx0Y29uc3Qgc2VsID0gZ2V0RWRpdGJveFNlbGVjdGlvbigpO1xuXHRcdGNvbnN0IG9wZW4gPSBzZWwuaW5kZXhPZignW1snKTtcblx0XHRjb25zdCBwaXBlID0gc2VsLmluZGV4T2YoJ3wnKTtcblx0XHRjb25zdCBjbG9zZSA9IHNlbC5pbmRleE9mKCddXScpO1xuXHRcdGlmIChvcGVuID09PSAtMSB8fCAocGlwZSA9PT0gLTEgJiYgY2xvc2UgPT09IC0xKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoKHBpcGUgIT09IC0xICYmIG9wZW4gPiBwaXBlKSB8fCAoY2xvc2UgIT09IC0xICYmIG9wZW4gPiBjbG9zZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgYXJ0aWNsZSA9IG5ldyBUaXRsZShzZWwuc3Vic3RyaW5nKG9wZW4gKyAyLCBwaXBlIDwgMCA/IGNsb3NlIDogcGlwZSkpO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cE9uRWRpdFNlbGVjdGlvbicpID09PSAnYm94cHJldmlldycpIHtcblx0XHRcdHJldHVybiBkb1NlcGFyYXRlU2VsZWN0aW9uUG9wdXAoc2VsLCBhcnRpY2xlKTtcblx0XHR9XG5cdFx0aWYgKGNsb3NlID4gMCAmJiBzZWwuc2xpY2UoTWF0aC5tYXgoMCwgY2xvc2UgKyAyKSkuaW5jbHVkZXMoJ1tbJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRhLmhyZWYgPSBwZy53aWtpLnRpdGxlYmFzZSArIGFydGljbGUudXJsU3RyaW5nKCk7XG5cdFx0bW91c2VPdmVyV2lraUxpbmsyKGEpO1xuXHRcdGlmIChhLm5hdnBvcHVwKSB7XG5cdFx0XHRhLm5hdnBvcHVwLmFkZEhvb2soXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRydW5TdG9wUG9wdXBUaW1lcihhLm5hdnBvcHVwKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0J3VuaGlkZScsXG5cdFx0XHRcdCdhZnRlcidcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBkb1NlcGFyYXRlU2VsZWN0aW9uUG9wdXAgPSAoc3RyLCBhcnRpY2xlKSA9PiB7XG5cdFx0bGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3Rpb25QcmV2aWV3Jyk7XG5cdFx0aWYgKCFkaXYpIHtcblx0XHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZGl2LmlkID0gJ3NlbGVjdGlvblByZXZpZXcnO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgYm94ID0gZG9jdW1lbnQuZWRpdGZvcm0ud3BUZXh0Ym94MTtcblx0XHRcdFx0Ym94LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpdiwgYm94KTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IHAgPSBwcmVwUHJldmlld21ha2VyKHN0ciwgYXJ0aWNsZSwgbmV3TmF2cG9wdXAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpLCBhcnRpY2xlKSk7XG5cdFx0cC5tYWtlUHJldmlldygpO1xuXHRcdGlmIChwLmh0bWwpIHtcblx0XHRcdGRpdi5pbm5lckhUTUwgPSBwLmh0bWw7XG5cdFx0fVxuXHRcdGRpdi5yYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSA9IGZhbHNlO1xuXHRcdHBvcFRpcHNTb29uRm4oJ3NlbGVjdGlvblByZXZpZXcnKSgpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBzZWxwb3AuanNcblx0Ly8gU1RBUlRGSUxFOiBuYXZwb3B1cC5qc1xuXHQvKipcblx0ICogQGZpbGVvdmVydmlldyAgRGVmaW5lcyB0d28gY2xhc3Nlczoge0Bzb3VyY2UgTmF2cG9wdXB9IGFuZCB7QHNvdXJjZSBNb3VzZXRyYWNrZXJ9LlxuXHQgKlxuXHQgKiA8Y29kZT5OYXZwb3B1cDwvY29kZT4gZGVzY3JpYmVzIHBvcHVwczogd2hlbiB0aGV5IGFwcGVhciwgd2hlcmUsIHdoYXRcblx0ICogdGhleSBsb29rIGxpa2UgYW5kIHNvIG9uLlxuXHQgKlxuXHQgKiA8Y29kZT5Nb3VzZXRyYWNrZXI8L2NvZGU+IFwiY2FwdHVyZXNcIiB0aGUgbW91c2UgdXNpbmdcblx0ICogPGNvZGU+ZG9jdW1lbnQub25tb3VzZW1vdmU8L2NvZGU+LlxuXHQgKi9cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgTW91c2V0cmFja2VyLlxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQGNsYXNzIFRoZSBNb3VzZXRyYWNrZXIgY2xhc3MuIFRoaXMgbW9uaXRvcnMgbW91c2UgbW92ZW1lbnRzIGFuZCBtYW5hZ2VzIGFzc29jaWF0ZWQgaG9va3MuXG5cdCAqL1xuXHRjbGFzcyBNb3VzZXRyYWNrZXIge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBJbnRlcnZhbCB0byByZWd1bGFybHkgcnVuIHRoZSBob29rcyBhbnl3YXksIGluIG1pbGxpc2Vjb25kcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBJbnRlZ2VyXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMubG9vcERlbGF5ID0gNDAwO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaW1lciBmb3IgdGhlIGxvb3AuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgVGltZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50aW1lciA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIEZsYWcgLSBhcmUgd2Ugc3dpdGNoZWQgb24/XG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgQm9vbGVhblxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBGbGFnIC0gYXJlIHdlIHByb2JhYmx5IGluYWNjdXJhdGUsIGkuZS4gbm90IHJlZmxlY3RpbmcgdGhlIGFjdHVhbCBtb3VzZSBwb3NpdGlvbj9cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XG5cdFx0XHQvKipcblx0XHRcdCAqIEFycmF5IG9mIGhvb2sgZnVuY3Rpb25zLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKiBAdHlwZSBBcnJheVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmhvb2tzID0gW107XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEFkZHMgYSBob29rLCB0byBiZSBjYWxsZWQgd2hlbiB3ZSBnZXQgZXZlbnRzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZiBBIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBhc1xuXHRcdCAqIDxjb2RlPmYoeCx5KTwvY29kZT4uIEl0IHNob3VsZCByZXR1cm4gPGNvZGU+dHJ1ZTwvY29kZT4gd2hlbiBpdFxuXHRcdCAqIHdhbnRzIHRvIGJlIHJlbW92ZWQsIGFuZCA8Y29kZT5mYWxzZTwvY29kZT4gb3RoZXJ3aXNlLlxuXHRcdCAqL1xuXHRcdGFkZEhvb2soZikge1xuXHRcdFx0dGhpcy5ob29rcy5wdXNoKGYpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSdW5zIGhvb2tzLCBwYXNzaW5nIHRoZW0gdGhlIHhcblx0XHQgKiBhbmQgeSBjb29yZHMgb2YgdGhlIG1vdXNlLiAgSG9vayBmdW5jdGlvbnMgdGhhdCByZXR1cm4gdHJ1ZSBhcmVcblx0XHQgKiBwYXNzZWQgdG8ge0Bzb3VyY2UgTW91c2V0cmFja2VyI3JlbW92ZUhvb2tzfSBmb3IgcmVtb3ZhbC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0cnVuSG9va3MoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaG9va3MgfHwgdGhpcy5ob29rcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gbG9nKCdNb3VzZXRyYWNrZXIucnVuSG9va3M7IHdlIGdvdCBzb21lIGhvb2tzIHRvIHJ1bicpO1xuXHRcdFx0bGV0IHJlbW92ZSA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgcmVtb3ZlT2JqID0ge307XG5cdFx0XHQvLyB0aGlzIG1ldGhvZCBnZXRzIGNhbGxlZCBhIExPVCAtXG5cdFx0XHQvLyBwcmUtY2FjaGUgc29tZSB2YXJpYWJsZXNcblx0XHRcdGNvbnN0IHt4fSA9IHRoaXM7XG5cdFx0XHRjb25zdCB7eX0gPSB0aGlzO1xuXHRcdFx0Y29uc3QgbGVuID0gdGhpcy5ob29rcy5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG5cdFx0XHRcdC8vIH4gcnVuIHRoZSBob29rIGZ1bmN0aW9uLCBhbmQgcmVtb3ZlIGl0IGlmIGl0IHJldHVybnMgdHJ1ZVxuXHRcdFx0XHRpZiAodGhpcy5ob29rc1tpXSh4LCB5KSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHJlbW92ZSA9IHRydWU7XG5cdFx0XHRcdFx0cmVtb3ZlT2JqW2ldID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHJlbW92ZSkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUhvb2tzKHJlbW92ZU9iaik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZXMgaG9va3MuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdmVPYmogQW4gb2JqZWN0IHdob3NlIGtleXMgYXJlIHRoZSBpbmRleFxuXHRcdCAqIG51bWJlcnMgb2YgZnVuY3Rpb25zIGZvciByZW1vdmFsLCB3aXRoIHZhbHVlcyB0aGF0IGV2YWx1YXRlIHRvIHRydWVcblx0XHQgKi9cblx0XHRyZW1vdmVIb29rcyhyZW1vdmVPYmopIHtcblx0XHRcdGNvbnN0IG5ld0hvb2tzID0gW107XG5cdFx0XHRjb25zdCBsZW4gPSB0aGlzLmhvb2tzLmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcblx0XHRcdFx0aWYgKCFyZW1vdmVPYmpbaV0pIHtcblx0XHRcdFx0XHRuZXdIb29rcy5wdXNoKHRoaXMuaG9va3NbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhvb2tzID0gbmV3SG9va3M7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEV2ZW50IGxpc3RlbmVyIGZvciBtb3VzZSB3aWdnbGVzLlxuXHRcdCAqIFdlIHNpbXBseSBncmFiIHRoZSBldmVudCwgc2V0IHggYW5kIHkgYW5kIHJ1biB0aGUgaG9va3MuXG5cdFx0ICogVGhpcyBtYWtlcyB0aGUgY3B1IGFsbCBob3QgYW5kIGJvdGhlcmVkIDotKFxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcGFyYW0ge0V2ZW50fSBlIE1vdXNlbW92ZSBldmVudFxuXHRcdCAqL1xuXHRcdHRyYWNrKGUpIHtcblx0XHRcdC8vIH4gQXBwYXJlbnRseSB0aGlzIGlzIG5lZWRlZCBpbiBJRS5cblx0XHRcdGUgfHw9IHdpbmRvdy5ldmVudDtcblx0XHRcdGxldCB4O1xuXHRcdFx0bGV0IHk7XG5cdFx0XHRpZiAoZSkge1xuXHRcdFx0XHRpZiAoZS5wYWdlWCkge1xuXHRcdFx0XHRcdHggPSBlLnBhZ2VYO1xuXHRcdFx0XHRcdHkgPSBlLnBhZ2VZO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGUuY2xpZW50WCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldCBsZWZ0O1xuXHRcdFx0XHRcdGxldCB0b3A7XG5cdFx0XHRcdFx0Y29uc3QgZG9jRWx0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRcdFx0XHRcdGlmIChkb2NFbHQpIHtcblx0XHRcdFx0XHRcdGxlZnQgPSBkb2NFbHQuc2Nyb2xsTGVmdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGVmdCB8fD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuc2Nyb2xsTGVmdCB8fCAwO1xuXHRcdFx0XHRcdGlmIChkb2NFbHQpIHtcblx0XHRcdFx0XHRcdHRvcCA9IGRvY0VsdC5zY3JvbGxUb3A7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRvcCB8fD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNjcm9sbFRvcCB8fCBkb2N1bWVudC5zY3JvbGxUb3AgfHwgMDtcblx0XHRcdFx0XHR4ID0gZS5jbGllbnRYICsgbGVmdDtcblx0XHRcdFx0XHR5ID0gZS5jbGllbnRZICsgdG9wO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2V0UG9zaXRpb24oeCwgeSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgc3RvcmVkIGFuZCB0YWtlcyBhcHByb3ByaWF0ZSBhY3Rpb24sXG5cdFx0ICogcnVubmluZyBob29rcyBhcyBhcHByb3ByaWF0ZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7SW50ZWdlcn0geCwgeSBTY3JlZW4gY29vcmRpbmF0ZXMgdG8gc2V0XG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHhcblx0XHQgKiBAcGFyYW0ge251bWJlcn0geVxuXHRcdCAqL1xuXHRcdHNldFBvc2l0aW9uKHgsIHkpIHtcblx0XHRcdHRoaXMueCA9IHg7XG5cdFx0XHR0aGlzLnkgPSB5O1xuXHRcdFx0aWYgKHRoaXMuZGlydHkgfHwgdGhpcy5ob29rcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMubGFzdEhvb2tfeCAhPT0gJ251bWJlcicpIHtcblx0XHRcdFx0dGhpcy5sYXN0SG9va194ID0gLTEwMDtcblx0XHRcdFx0dGhpcy5sYXN0SG9va195ID0gLTEwMDtcblx0XHRcdH1cblx0XHRcdGxldCBkaWZmID0gKHRoaXMubGFzdEhvb2tfeCAtIHgpICogKHRoaXMubGFzdEhvb2tfeSAtIHkpO1xuXHRcdFx0ZGlmZiA9IGRpZmYgPj0gMCA/IGRpZmYgOiAtZGlmZjtcblx0XHRcdGlmIChkaWZmID4gMSkge1xuXHRcdFx0XHR0aGlzLmxhc3RIb29rX3ggPSB4O1xuXHRcdFx0XHR0aGlzLmxhc3RIb29rX3kgPSB5O1xuXHRcdFx0XHRpZiAodGhpcy5kaXJ0eSkge1xuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJ1bkhvb2tzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGluZ3MgaW4gbW90aW9uLCB1bmxlc3MgdGhleSBhcmUgYWxyZWFkeSB0aGF0IGlzLCByZWdpc3RlcmluZyBhbiBldmVudCBsaXN0ZW5lciBvblxuXHRcdCAqIDxjb2RlPmRvY3VtZW50Lm9ubW91c2Vtb3ZlPC9jb2RlPi4gQSBoYWxmLWhlYXJ0ZWQgYXR0ZW1wdCBpcyBtYWRlIHRvIHByZXNlcnZlIHRoZSBvbGQgZXZlbnRcblx0XHQgKiBsaXN0ZW5lciBpZiB0aGVyZSBpcyBvbmUuXG5cdFx0ICovXG5cdFx0ZW5hYmxlKCkge1xuXHRcdFx0aWYgKHRoaXMuYWN0aXZlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdC8vIH4gU2F2ZSB0aGUgY3VycmVudCBsaXN0ZW5lciBmb3IgbW91c2Vtb3ZlIGV2ZW50cy4gVGhpcyBpc24ndCB0b29cblx0XHRcdC8vIH4gcm9idXN0LCBvZiBjb3Vyc2UuXG5cdFx0XHR0aGlzLnNhdmVkTGlzdGVuZXIgPSBkb2N1bWVudC5vbm1vdXNlbW92ZTtcblx0XHRcdC8vIH4gR290dGEgc2F2ZSBAdHR7dGhpc30gYWdhaW4gZm9yIHRoZSBjbG9zdXJlLCBhbmQgdXNlIGFwcGx5IGZvclxuXHRcdFx0Ly8gfiB0aGUgbWVtYmVyIGZ1bmN0aW9uLlxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRkb2N1bWVudC5vbm1vdXNlbW92ZSA9IChlKSA9PiB7XG5cdFx0XHRcdHNlbGYudHJhY2soZSk7XG5cdFx0XHR9O1xuXHRcdFx0aWYgKHRoaXMubG9vcERlbGF5KSB7XG5cdFx0XHRcdHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gbG9nKCdsb29wIGRlbGF5IGluIG1vdXNldHJhY2tlciBpcyB3b3JraW5nJyk7XG5cdFx0XHRcdFx0c2VsZi5ydW5Ib29rcygpO1xuXHRcdFx0XHR9LCB0aGlzLmxvb3BEZWxheSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIERpc2FibGVzIHRoZSB0cmFja2VyLCByZW1vdmluZyB0aGUgZXZlbnQgbGlzdGVuZXIuXG5cdFx0ICovXG5cdFx0ZGlzYWJsZSgpIHtcblx0XHRcdGlmICghdGhpcy5hY3RpdmUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnNhdmVkTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLnNhdmVkTGlzdGVuZXI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWxldGUgZG9jdW1lbnQub25tb3VzZW1vdmU7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy50aW1lcikge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgTmF2cG9wdXAuXG5cdCAqIEdldHMgYSBVSUQgZm9yIHRoZSBwb3B1cCBhbmRcblx0ICpcblx0ICogQHBhcmFtIGluaXQgQ29udHJ1Y3RvciBvYmplY3QuIElmIDxjb2RlPmluaXQuZHJhZ2dhYmxlPC9jb2RlPiBpcyB0cnVlIG9yIGFic2VudCwgdGhlIHBvcHVwIGJlY29tZXMgZHJhZ2dhYmxlLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQGNsYXNzIFRoZSBOYXZwb3B1cCBjbGFzcy4gVGhpcyBnZW5lcmF0ZXMgcG9wdXAgaGludHMsIGFuZCBkb2VzIHNvbWUgbWFuYWdlbWVudCBvZiB0aGVtLlxuXHQgKi9cblx0Y2xhc3MgTmF2cG9wdXAge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0Ly8gbXcubm90aWZ5KCduZXcgTmF2cG9wdXAoaW5pdCknLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHQvKipcblx0XHRcdCAqIFVJRCBmb3IgZWFjaCBOYXZwb3B1cCBpbnN0YW5jZS5cblx0XHRcdCAqIFJlYWQtb25seS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBpbnRlZ2VyXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudWlkID0gTmF2cG9wdXAudWlkKys7XG5cdFx0XHQvKipcblx0XHRcdCAqIFJlYWQtb25seSBmbGFnIGZvciBjdXJyZW50IHZpc2liaWxpdHkgb2YgdGhlIHBvcHVwLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBGbGFnIHRvIGJlIHNldCB3aGVuIHdlIHdhbnQgdG8gY2FuY2VsIGEgcHJldmlvdXMgcmVxdWVzdCB0b1xuXHRcdFx0ICogc2hvdyB0aGUgcG9wdXAgaW4gYSBsaXR0bGUgd2hpbGUuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5ub3Nob3cgPSBmYWxzZTtcblx0XHRcdC8qKlxuXHRcdFx0ICogQ2F0ZWdvcmlzZWQgbGlzdCBvZiBob29rcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAc2VlICNydW5Ib29rc1xuXHRcdFx0ICogQHNlZSAjYWRkSG9va1xuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqIEB0eXBlIE9iamVjdFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmhvb2tzID0ge1xuXHRcdFx0XHRjcmVhdGU6IFtdLFxuXHRcdFx0XHR1bmhpZGU6IFtdLFxuXHRcdFx0XHRoaWRlOiBbXSxcblx0XHRcdH07XG5cdFx0XHQvKipcblx0XHRcdCAqIGxpc3Qgb2YgdW5pcXVlIElEcyBvZiBob29rIGZ1bmN0aW9ucywgdG8gYXZvaWQgZHVwbGljYXRlc1xuXHRcdFx0ICpcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuaG9va0lkcyA9IHt9O1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBMaXN0IG9mIGRvd25sb2FkcyBhc3NvY2lhdGVkIHdpdGggdGhlIHBvcHVwLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKiBAdHlwZSBBcnJheVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmRvd25sb2FkcyA9IFtdO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBOdW1iZXIgb2YgdW5jb21wbGV0ZWQgZG93bmxvYWRzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGludGVnZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5wZW5kaW5nID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogVG9sZXJhbmNlIGluIHBpeGVscyB3aGVuIGRldGVjdGluZyB3aGV0aGVyIHRoZSBtb3VzZSBoYXMgbGVmdCB0aGUgcG9wdXAuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmZ1enogPSA1O1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBGbGFnIHRvIHRvZ2dsZSBydW5uaW5nIHtAc291cmNlICNsaW1pdEhvcml6b250YWxQb3NpdGlvbn0gdG8gcmVndWxhdGUgdGhlIHBvcHVwJ3MgcG9zaXRpb24uXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmNvbnN0cmFpbmVkID0gdHJ1ZTtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIHBvcHVwIHdpZHRoIGluIHBpeGVscy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLndpZHRoID0gMDtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIHBvcHVwIHdpZHRoIGluIHBpeGVscy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmhlaWdodCA9IDA7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBtYWluIGNvbnRlbnQgRElWIGVsZW1lbnQuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgSFRNTERpdkVsZW1lbnRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5tYWluRGl2ID0gbnVsbDtcblx0XHRcdHRoaXMuY3JlYXRlTWFpbkRpdigpO1xuXHRcdFx0Ly9cdGlmICghaW5pdCB8fCB0eXBlb2YgaW5pdC5wb3B1cHNfZHJhZ2dhYmxlPT0ndW5kZWZpbmVkJyB8fCBpbml0LnBvcHVwc19kcmFnZ2FibGUpIHtcblx0XHRcdC8vXHRcdHRoaXMubWFrZURyYWdnYWJsZSh0cnVlKTtcblx0XHRcdC8vXHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJldHJpZXZlcyB0aGUge0Bzb3VyY2UgI3Zpc2libGV9IGF0dHJpYnV0ZSwgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwb3B1cCBpcyBjdXJyZW50bHkgdmlzaWJsZS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHQgKi9cblx0XHRpc1Zpc2libGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aXNpYmxlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSZXBvc2l0aW9ucyBwb3B1cCB1c2luZyBDU1Mgc3R5bGUuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7aW50ZWdlcn0geCB4LWNvb3JkaW5hdGUgKHB4KVxuXHRcdCAqIEBwYXJhbSB7aW50ZWdlcn0geSB5LWNvb3JkaW5hdGUgKHB4KVxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gbm9MaW1pdEhvciBEb24ndCBjYWxsIHtAc291cmNlICNsaW1pdEhvcml6b250YWxQb3NpdGlvbn1cblx0XHQgKi9cblx0XHRyZXBvc2l0aW9uKHgsIHksIG5vTGltaXRIb3IpIHtcblx0XHRcdGxvZyhgcmVwb3NpdGlvbigke3h9LCR7eX0sJHtub0xpbWl0SG9yfSlgKTtcblx0XHRcdGlmICh4ICE9PSB1bmRlZmluZWQgJiYgeCAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLmxlZnQgPSB4O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHkgIT09IHVuZGVmaW5lZCAmJiB5ICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMudG9wID0geTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmxlZnQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRvcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5sZWZ0fXB4YDtcblx0XHRcdFx0dGhpcy5tYWluRGl2LnN0eWxlLnRvcCA9IGAke3RoaXMudG9wfXB4YDtcblx0XHRcdH1cblx0XHRcdGlmICghbm9MaW1pdEhvcikge1xuXHRcdFx0XHR0aGlzLmxpbWl0SG9yaXpvbnRhbFBvc2l0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFByZXZlbnRzIHBvcHVwcyBmcm9tIGJlaW5nIGluIHNpbGx5IGxvY2F0aW9ucy4gSG9wZWZ1bGx5LlxuXHRcdCAqIFNob3VsZCBub3QgYmUgcnVuIGlmIHtAc291cmNlICNjb25zdHJhaW5lZH0gaXMgdHJ1ZS5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0bGltaXRIb3Jpem9udGFsUG9zaXRpb24oKSB7XG5cdFx0XHRpZiAoIXRoaXMuY29uc3RyYWluZWQgfHwgdGhpcy50b29XaWRlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuXHRcdFx0Y29uc3QgeCA9IHRoaXMubGVmdDtcblx0XHRcdGNvbnN0IHcgPSB0aGlzLndpZHRoO1xuXHRcdFx0Y29uc3QgY1dpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsaWVudFdpZHRoO1xuXHRcdFx0Ly9cdGxvZygnbGltaXRIb3Jpem9udGFsUG9zaXRpb246IHg9Jyt4K1xuXHRcdFx0Ly9cdFx0XHQnLCB0aGlzLmxlZnQ9JyArIHRoaXMubGVmdCArXG5cdFx0XHQvL1x0XHRcdCcsIHRoaXMud2lkdGg9JyArIHRoaXMud2lkdGggK1xuXHRcdFx0Ly9cdFx0XHQnLCBjV2lkdGg9JyArIGNXaWR0aCk7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHggKyB3ID49IGNXaWR0aCB8fFxuXHRcdFx0XHQoeCA+IDAgJiZcblx0XHRcdFx0XHR0aGlzLm1heFdpZHRoICYmXG5cdFx0XHRcdFx0dGhpcy53aWR0aCA8IHRoaXMubWF4V2lkdGggJiZcblx0XHRcdFx0XHR0aGlzLmhlaWdodCA+IHRoaXMud2lkdGggJiZcblx0XHRcdFx0XHR4ID4gY1dpZHRoIC0gdGhpcy5tYXhXaWR0aClcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBUaGlzIGlzIGEgdmVyeSBuYXN0eSBoYWNrLiBUaGVyZSBoYXMgdG8gYmUgYSBiZXR0ZXIgd2F5IVxuXHRcdFx0XHQvLyBXZSBmaW5kIHRoZSBcIm5hdHVyYWxcIiB3aWR0aCBvZiB0aGUgZGl2IGJ5IHBvc2l0aW9uaW5nIGl0IGF0IHRoZSBmYXIgbGVmdFxuXHRcdFx0XHQvLyB0aGVuIHJlc2V0IGl0IHNvIHRoYXQgaXQgc2hvdWxkIGJlIGZsdXNoIHJpZ2h0ICh3ZWxsLCBuZWFybHkpXG5cdFx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS5sZWZ0ID0gJy0xMDAwMHB4Jztcblx0XHRcdFx0dGhpcy5tYWluRGl2LnN0eWxlLndpZHRoID0gYCR7dGhpcy5tYXhXaWR0aH1weGA7XG5cdFx0XHRcdGNvbnN0IG5hdHVyYWxXaWR0aCA9IE51bWJlci5wYXJzZUludCh0aGlzLm1haW5EaXYub2Zmc2V0V2lkdGgsIDEwKTtcblx0XHRcdFx0bGV0IG5ld0xlZnQgPSBjV2lkdGggLSBuYXR1cmFsV2lkdGggLSAxO1xuXHRcdFx0XHRpZiAobmV3TGVmdCA8IDApIHtcblx0XHRcdFx0XHRuZXdMZWZ0ID0gMDtcblx0XHRcdFx0XHR0aGlzLnRvb1dpZGUgPSB0cnVlO1xuXHRcdFx0XHR9IC8vIHN0aWxsIHVuc3RhYmxlIGZvciByZWFsbHkgd2lkZSBwb3B1cHM/XG5cdFx0XHRcdGxvZyhcblx0XHRcdFx0XHRgbGltaXRIb3Jpem9udGFsUG9zaXRpb246IG1vdmluZyB0byAoJHtuZXdMZWZ0fSwke3RoaXMudG9wfSk7YCArXG5cdFx0XHRcdFx0XHRgIG5hdHVyYWxXaWR0aD0ke25hdHVyYWxXaWR0aH0sIGNsaWVudFdpZHRoPSR7Y1dpZHRofWBcblx0XHRcdFx0KTtcblx0XHRcdFx0dGhpcy5yZXBvc2l0aW9uKG5ld0xlZnQsIG51bGwsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBCcmluZ3MgcG9wdXAgdG8gdGhlIHRvcCBvZiB0aGUgei1vcmRlci5cblx0XHQgKiBXZSBpbmNyZW1lbnQgdGhlIHtAc291cmNlICNoaWdoZXN0fSBwcm9wZXJ0eSBvZiB0aGUgY29udHJ1Y3RvciBoZXJlLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRyYWlzZSgpIHtcblx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS56SW5kZXggPSBOYXZwb3B1cC5oaWdoZXN0ICsgMTtcblx0XHRcdCsrTmF2cG9wdXAuaGlnaGVzdDtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU2hvd3MgdGhlIHBvcHVwIHByb3ZpZGVkIHtAc291cmNlICNub3Nob3d9IGlzIG5vdCB0cnVlLlxuXHRcdCAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uLCBicmluZ3MgdGhlIHBvcHVwIHRvIHRoZSB0b3Agb2YgdGhlIHotb3JkZXIgYW5kIHVuaGlkZXMgaXQuXG5cdFx0ICovXG5cdFx0c2hvdygpIHtcblx0XHRcdC8vIGRvY3VtZW50LnRpdGxlKz0ncyc7XG5cdFx0XHRpZiAodGhpcy5ub3Nob3cpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZG9jdW1lbnQudGl0bGUrPSd0Jztcblx0XHRcdHRoaXMucmVwb3NpdGlvbigpO1xuXHRcdFx0dGhpcy5yYWlzZSgpO1xuXHRcdFx0dGhpcy51bmhpZGUoKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgbW91c2UgcG9pbnRlciBoYXNcblx0XHQgKiBzdGFiaWxpc2VkIChjaGVja2luZyBldmVyeSA8Y29kZT50aW1lPC9jb2RlPi8yIG1pbGxpc2Vjb25kcykgYW5kIHJ1bnMgdGhlXG5cdFx0ICoge0Bzb3VyY2UgI3Nob3d9IG1ldGhvZCBpZiBpdCBoYXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2ludGVnZXJ9IHRpbWUgVGhlIG1pbmltdW0gdGltZSAobXMpIGJlZm9yZSB0aGUgcG9wdXAgbWF5IGJlIHNob3duLlxuXHRcdCAqL1xuXHRcdHNob3dTb29uSWZTdGFibGUodGltZSkge1xuXHRcdFx0bG9nKGBzaG93U29vbklmU3RhYmxlLCB0aW1lPSR7dGltZX1gKTtcblx0XHRcdGlmICh0aGlzLnZpc2libGUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ub3Nob3cgPSBmYWxzZTtcblx0XHRcdC8vIH4gaW5pdGlhbGl6ZSB0aGVzZSB2YXJpYWJsZXMgc28gdGhhdCB3ZSBuZXZlciBydW4gQHR0e3Nob3d9IGFmdGVyXG5cdFx0XHQvLyB+IGp1c3QgaGFsZiB0aGUgdGltZVxuXHRcdFx0dGhpcy5zdGFibGVfeCA9IC0xZTQ7XG5cdFx0XHR0aGlzLnN0YWJsZV95ID0gLTFlNDtcblx0XHRcdGNvbnN0IHN0YWJsZVNob3cgPSAoKSA9PiB7XG5cdFx0XHRcdGxvZygnc3RhYmxlU2hvdyBjYWxsZWQnKTtcblx0XHRcdFx0Y29uc3QgbmV3X3ggPSBOYXZwb3B1cC50cmFja2VyLng7XG5cdFx0XHRcdGNvbnN0IG5ld195ID0gTmF2cG9wdXAudHJhY2tlci55O1xuXHRcdFx0XHRjb25zdCBkeCA9IHNlbGYuc3RhYmxlX3ggLSBuZXdfeDtcblx0XHRcdFx0Y29uc3QgZHkgPSBzZWxmLnN0YWJsZV95IC0gbmV3X3k7XG5cdFx0XHRcdGNvbnN0IGZ1enoyID0gMDsgLy8gc2F2ZWRUaGlzLmZ1enogKiBzYXZlZFRoaXMuZnV6ejtcblx0XHRcdFx0Ly8gZG9jdW1lbnQudGl0bGUgKz0gJ1snICsgW3NhdmVkVGhpcy5zdGFibGVfeCxuZXdfeCwgc2F2ZWRUaGlzLnN0YWJsZV95LG5ld195LCBkeCwgZHksIGZ1enoyXS5qb2luKCcsJykgKyAnXSAnO1xuXHRcdFx0XHRpZiAoZHggKiBkeCA8PSBmdXp6MiAmJiBkeSAqIGR5IDw9IGZ1enoyKSB7XG5cdFx0XHRcdFx0bG9nKCdtb3VzZSBpcyBzdGFibGUnKTtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHNlbGYuc2hvd1Nvb25TdGFibGVUaW1lcik7XG5cdFx0XHRcdFx0c2VsZi5yZXBvc2l0aW9uKG5ld194ICsgMiwgbmV3X3kgKyAyKTtcblx0XHRcdFx0XHRzZWxmLnNob3coKTtcblx0XHRcdFx0XHRzZWxmLmxpbWl0SG9yaXpvbnRhbFBvc2l0aW9uKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYuc3RhYmxlX3ggPSBuZXdfeDtcblx0XHRcdFx0c2VsZi5zdGFibGVfeSA9IG5ld195O1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0dGhpcy5zaG93U29vblN0YWJsZVRpbWVyID0gc2V0SW50ZXJ2YWwoc3RhYmxlU2hvdywgdGltZSAvIDIpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSB7QHNvdXJjZSAjbm9zaG93fSBmbGFnIGFuZCBoaWRlcyB0aGUgcG9wdXAuIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuXHRcdCAqIHdoZW4gdGhlIG1vdXNlIGxlYXZlcyB0aGUgbGluayBiZWZvcmVcblx0XHQgKiAob3IgYWZ0ZXIpIGl0J3MgYWN0dWFsbHkgYmVlbiBkaXNwbGF5ZWQuXG5cdFx0ICovXG5cdFx0YmFuaXNoKCkge1xuXHRcdFx0bG9nKCdiYW5pc2ggY2FsbGVkJyk7XG5cdFx0XHQvLyBoaWRlIGFuZCBwcmV2ZW50IHNob3dpbmcgd2l0aCBzaG93U29vbiBpbiB0aGUgZnV0dXJlXG5cdFx0XHR0aGlzLm5vc2hvdyA9IHRydWU7XG5cdFx0XHRpZiAodGhpcy5zaG93U29vblN0YWJsZVRpbWVyKSB7XG5cdFx0XHRcdGxvZygnY2xlYXJpbmcgc2hvd1Nvb25TdGFibGVUaW1lcicpO1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuc2hvd1Nvb25TdGFibGVUaW1lcik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhpZGUoKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUnVucyBob29rcyBhZGRlZCB3aXRoIHtAc291cmNlICNhZGRIb29rfS5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgbmFtZSBvZiB0aGUge0Bzb3VyY2UgI2hvb2tzfSBhcnJheSAtIG9uZSBvZiAnY3JlYXRlJywgJ3VuaGlkZScsICdoaWRlJ1xuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3aGVuIENvbnRyb2xzIGV4YWN0bHkgd2hlbiB0aGUgaG9vayBpcyBydW46IGVpdGhlciAnYmVmb3JlJyBvciAnYWZ0ZXInXG5cdFx0ICovXG5cdFx0cnVuSG9va3Moa2V5LCB3aGVuKSB7XG5cdFx0XHRpZiAoIXRoaXMuaG9va3Nba2V5XSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBrZXlIb29rcyA9IHRoaXMuaG9va3Nba2V5XTtcblx0XHRcdGNvbnN0IGxlbiA9IGtleUhvb2tzLmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcblx0XHRcdFx0aWYgKGtleUhvb2tzW2ldICYmIGtleUhvb2tzW2ldLndoZW4gPT09IHdoZW4gJiYgUmVmbGVjdC5hcHBseShrZXlIb29rc1tpXS5ob29rLCB0aGlzLCBbXSkpIHtcblx0XHRcdFx0XHQvLyByZW1vdmUgdGhlIGhvb2tcblx0XHRcdFx0XHRpZiAoa2V5SG9va3NbaV0uaG9va0lkKSB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5ob29rSWRzW2tleUhvb2tzW2ldLmhvb2tJZF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGtleUhvb2tzW2ldID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBBZGRzIGEgaG9vayB0byB0aGUgcG9wdXAuIEhvb2sgZnVuY3Rpb25zIGFyZSBydW4gd2l0aCA8Y29kZT50aGlzPC9jb2RlPiBzZXQgdG8gcmVmZXIgdG8gdGhlXG5cdFx0ICogTmF2cG9wdXAgaW5zdGFuY2UsIGFuZCBubyBhcmd1bWVudHMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rIFRoZSBob29rIGZ1bmN0aW9uLiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gdHJ1ZSBhcmUgZGVsZXRlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleSBuYW1lIG9mIHRoZSB7QHNvdXJjZSAjaG9va3N9IGFycmF5IC0gb25lIG9mICdjcmVhdGUnLCAndW5oaWRlJywgJ2hpZGUnXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHdoZW4gQ29udHJvbHMgZXhhY3RseSB3aGVuIHRoZSBob29rIGlzIHJ1bjogZWl0aGVyICdiZWZvcmUnIG9yICdhZnRlcidcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdWlkIEEgdHJ1dGh5IHN0cmluZyBpZGVudGlmeWluZyB0aGUgaG9vayBmdW5jdGlvbjsgaWYgaXQgbWF0Y2hlcyBhbm90aGVyIGhvb2tcblx0XHQgKiBpbiB0aGlzIHBvc2l0aW9uLCBpdCB3b24ndCBiZSBhZGRlZCBhZ2Fpbi5cblx0XHQgKi9cblx0XHRhZGRIb29rKGhvb2ssIGtleSwgd2hlbiwgdWlkKSB7XG5cdFx0XHR3aGVuIHx8PSAnYWZ0ZXInO1xuXHRcdFx0aWYgKCF0aGlzLmhvb2tzW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gaWYgdWlkIGlzIHNwZWNpZmllZCwgZG9uJ3QgYWRkIGR1cGxpY2F0ZXNcblx0XHRcdGxldCBob29rSWQ7XG5cdFx0XHRpZiAodWlkKSB7XG5cdFx0XHRcdGhvb2tJZCA9IFtrZXksIHdoZW4sIHVpZF0uam9pbignfCcpO1xuXHRcdFx0XHRpZiAodGhpcy5ob29rSWRzW2hvb2tJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5ob29rSWRzW2hvb2tJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ob29rc1trZXldLnB1c2goe1xuXHRcdFx0XHRob29rLFxuXHRcdFx0XHR3aGVuLFxuXHRcdFx0XHRob29rSWQsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyB0aGUgbWFpbiBESVYgZWxlbWVudCwgd2hpY2ggY29udGFpbnMgYWxsIHRoZSBhY3R1YWwgcG9wdXAgY29udGVudC5cblx0XHQgKiBSdW5zIGhvb2tzIHdpdGgga2V5ICdjcmVhdGUnLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRjcmVhdGVNYWluRGl2KCkge1xuXHRcdFx0aWYgKHRoaXMubWFpbkRpdikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJ1bkhvb2tzKCdjcmVhdGUnLCAnYmVmb3JlJyk7XG5cdFx0XHRjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdG1haW5EaXYub25jbGljayA9IChlKSA9PiB7XG5cdFx0XHRcdHNlbGYub25jbGlja0xpc3RlbmVyKGUpO1xuXHRcdFx0fTtcblx0XHRcdG1haW5EaXYuY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUgPz8gJ25hdnBvcHVwX21haW5kaXYnO1xuXHRcdFx0bWFpbkRpdi5pZCA9IG1haW5EaXYuY2xhc3NOYW1lICsgdGhpcy51aWQ7XG5cdFx0XHRtYWluRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdG1haW5EaXYuc3R5bGUubWluV2lkdGggPSAnMzUwcHgnO1xuXHRcdFx0bWFpbkRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0bWFpbkRpdi5jbGFzc05hbWUgPSAnbmF2cG9wdXAnO1xuXHRcdFx0Ly8gZWFzeSBhY2Nlc3MgdG8gamF2YXNjcmlwdCBvYmplY3QgdGhyb3VnaCBET00gZnVuY3Rpb25zXG5cdFx0XHRtYWluRGl2Lm5hdnBvcHVwID0gdGhpcztcblx0XHRcdHRoaXMubWFpbkRpdiA9IG1haW5EaXY7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kKG1haW5EaXYpO1xuXHRcdFx0dGhpcy5ydW5Ib29rcygnY3JlYXRlJywgJ2FmdGVyJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIENhbGxzIHRoZSB7QHNvdXJjZSAjcmFpc2V9IG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0b25jbGlja0xpc3RlbmVyKCkge1xuXHRcdFx0dGhpcy5yYWlzZSgpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBNYWtlcyB0aGUgcG9wdXAgZHJhZ2dhYmxlLCB1c2luZyBhIHtAc291cmNlIERyYWd9IG9iamVjdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBoYW5kbGVOYW1lXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRtYWtlRHJhZ2dhYmxlKGhhbmRsZU5hbWUpIHtcblx0XHRcdGlmICghdGhpcy5tYWluRGl2KSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlTWFpbkRpdigpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZHJhZyA9IG5ldyBEcmFnKCk7XG5cdFx0XHRpZiAoIWhhbmRsZU5hbWUpIHtcblx0XHRcdFx0ZHJhZy5zdGFydENvbmRpdGlvbiA9IChlKSA9PiB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGlmICghZS5zaGlmdEtleSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0bGV0IGRyYWdIYW5kbGU7XG5cdFx0XHRpZiAoaGFuZGxlTmFtZSkge1xuXHRcdFx0XHRkcmFnSGFuZGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aGFuZGxlTmFtZX1gKTtcblx0XHRcdH1cblx0XHRcdGRyYWdIYW5kbGUgfHw9IHRoaXMubWFpbkRpdjtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0ZHJhZy5lbmRIb29rID0gKHgsIHkpID0+IHtcblx0XHRcdFx0TmF2cG9wdXAudHJhY2tlci5kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdHNlbGYucmVwb3NpdGlvbih4LCB5KTtcblx0XHRcdH07XG5cdFx0XHRkcmFnLmluaXQoZHJhZ0hhbmRsZSwgdGhpcy5tYWluRGl2KTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogSGlkZXMgdGhlIHBvcHVwIHVzaW5nIENTUy4gUnVucyBob29rcyB3aXRoIGtleSAnaGlkZScuXG5cdFx0ICogU2V0cyB7QHNvdXJjZSAjdmlzaWJsZX0gYXBwcm9wcmlhdGVseS5cblx0XHQgKiB7QHNvdXJjZSAjYmFuaXNofSBzaG91bGQgYmUgY2FsbGVkIGV4dGVybmFsbHkgaW5zdGVhZCBvZiB0aGlzIG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0aGlkZSgpIHtcblx0XHRcdHRoaXMucnVuSG9va3MoJ2hpZGUnLCAnYmVmb3JlJyk7XG5cdFx0XHR0aGlzLmFib3J0RG93bmxvYWRzKCk7XG5cdFx0XHRpZiAodGhpcy52aXNpYmxlICE9PSB1bmRlZmluZWQgJiYgdGhpcy52aXNpYmxlKSB7XG5cdFx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMucnVuSG9va3MoJ2hpZGUnLCAnYWZ0ZXInKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU2hvd3MgdGhlIHBvcHVwIHVzaW5nIENTUy4gUnVucyBob29rcyB3aXRoIGtleSAndW5oaWRlJy5cblx0XHQgKiBTZXRzIHtAc291cmNlICN2aXNpYmxlfSBhcHByb3ByaWF0ZWx5LiAgIHtAc291cmNlICNzaG93fSBzaG91bGQgYmUgY2FsbGVkIGV4dGVybmFsbHkgaW5zdGVhZCBvZiB0aGlzIG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dW5oaWRlKCkge1xuXHRcdFx0dGhpcy5ydW5Ib29rcygndW5oaWRlJywgJ2JlZm9yZScpO1xuXHRcdFx0aWYgKHRoaXMudmlzaWJsZSAhPT0gdW5kZWZpbmVkICYmICF0aGlzLnZpc2libGUpIHtcblx0XHRcdFx0dGhpcy5tYWluRGl2LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0XHRcdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMucnVuSG9va3MoJ3VuaGlkZScsICdhZnRlcicpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSA8Y29kZT5pbm5lckhUTUw8L2NvZGU+IGF0dHJpYnV0ZSBvZiB0aGUgbWFpbiBkaXYgY29udGFpbmluZyB0aGUgcG9wdXAgY29udGVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIFRoZSBIVE1MIHRvIHNldC5cblx0XHQgKi9cblx0XHRzZXRJbm5lckhUTUwoaHRtbCkge1xuXHRcdFx0dGhpcy5tYWluRGl2LmlubmVySFRNTCA9IGh0bWw7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZXMgdGhlIHtAc291cmNlICN3aWR0aH0gYW5kIHtAc291cmNlICNoZWlnaHR9IGF0dHJpYnV0ZXMgd2l0aCB0aGUgQ1NTIHByb3BlcnRpZXMuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHVwZGF0ZURpbWVuc2lvbnMoKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gTnVtYmVyLnBhcnNlSW50KHRoaXMubWFpbkRpdi5vZmZzZXRXaWR0aCwgMTApO1xuXHRcdFx0dGhpcy5oZWlnaHQgPSBOdW1iZXIucGFyc2VJbnQodGhpcy5tYWluRGl2Lm9mZnNldEhlaWdodCwgMTApO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBDaGVja3MgaWYgdGhlIHBvaW50ICh4LHkpIGlzIHdpdGhpbiB7QHNvdXJjZSAjZnV6en0gb2YgdGhlXG5cdFx0ICoge0Bzb3VyY2UgI21haW5EaXZ9LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSB4IHgtY29vcmRpbmF0ZSAocHgpXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSB5IHktY29vcmRpbmF0ZSAocHgpXG5cdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdCAqL1xuXHRcdGlzV2l0aGluKHgsIHkpIHtcblx0XHRcdC8vIH4gSWYgd2UncmUgbm90IGV2ZW4gdmlzaWJsZSwgbm8gcG9pbnQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXNcblx0XHRcdC8vIH4gYmVpbmcgd2l0aGluIHRoZSBwb3B1cC5cblx0XHRcdGlmICghdGhpcy52aXNpYmxlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuXHRcdFx0Y29uc3QgZnV6eiA9IHRoaXMuZnV6eiB8fCAwO1xuXHRcdFx0Ly8gfiBVc2UgYSBzaW1wbGUgYm94IG1ldHJpYyBoZXJlLlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0eCArIGZ1enogPj0gdGhpcy5sZWZ0ICYmXG5cdFx0XHRcdHggLSBmdXp6IDw9IHRoaXMubGVmdCArIHRoaXMud2lkdGggJiZcblx0XHRcdFx0eSArIGZ1enogPj0gdGhpcy50b3AgJiZcblx0XHRcdFx0eSAtIGZ1enogPD0gdGhpcy50b3AgKyB0aGlzLmhlaWdodFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQWRkcyBhIGRvd25sb2FkIHRvIHtAc291cmNlICNkb3dubG9hZHN9LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtEb3dubG9hZGVyfSBkb3dubG9hZFxuXHRcdCAqL1xuXHRcdGFkZERvd25sb2FkKGRvd25sb2FkKSB7XG5cdFx0XHRpZiAoIWRvd25sb2FkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuZG93bmxvYWRzLnB1c2goZG93bmxvYWQpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBBYm9ydHMgdGhlIGRvd25sb2FkcyBsaXN0ZWQgaW4ge0Bzb3VyY2UgI2Rvd25sb2Fkc30uXG5cdFx0ICpcblx0XHQgKiBAc2VlIERvd25sb2FkZXIjYWJvcnRcblx0XHQgKi9cblx0XHRhYm9ydERvd25sb2FkcygpIHtcblx0XHRcdGZvciAoY29uc3QgZCBvZiB0aGlzLmRvd25sb2Fkcykge1xuXHRcdFx0XHRpZiAoZCAmJiBkLmFib3J0KSB7XG5cdFx0XHRcdFx0ZC5hYm9ydCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRvd25sb2FkcyA9IFtdO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogQSBVSUQgZm9yIGVhY2ggTmF2cG9wdXAuIFRoaXMgY29uc3RydWN0b3IgcHJvcGVydHkgaXMganVzdCBhIGNvdW50ZXIuXG5cdCAqXG5cdCAqIEB0eXBlIGludGVnZXJcblx0ICogQHByaXZhdGVcblx0ICovXG5cdE5hdnBvcHVwLnVpZCA9IDA7XG5cdC8qKlxuXHQgKiBDb3VudGVyIGluZGljYXRpbmcgdGhlIHotb3JkZXIgb2YgdGhlIFwiaGlnaGVzdFwiIHBvcHVwLlxuXHQgKiBXZSBzdGFydCB0aGUgei1pbmRleCBhdCAxMDAwIHNvIHRoYXQgcG9wdXBzIGFyZSBhYm92ZSBldmVyeXRoaW5nXG5cdCAqIGVsc2Ugb24gdGhlIHNjcmVlbi5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHR5cGUgaW50ZWdlclxuXHQgKi9cblx0TmF2cG9wdXAuaGlnaGVzdCA9IDEwMDA7XG5cdC8qKlxuXHQgKiBBIHtAc291cmNlIE1vdXNldHJhY2tlcn0gaW5zdGFuY2Ugd2hpY2ggaXMgYSBwcm9wZXJ0eSBvZiB0aGUgY29uc3RydWN0b3IgKHBzZXVkby1nbG9iYWwpLlxuXHQgKi9cblx0TmF2cG9wdXAudHJhY2tlciA9IG5ldyBNb3VzZXRyYWNrZXIoKTtcblx0Ly8gRU5ERklMRTogbmF2cG9wdXAuanNcblx0Ly8gU1RBUlRGSUxFOiBkaWZmLmpzXG5cdC8qKlxuXHQgKiBKYXZhc2NyaXB0IERpZmYgQWxnb3JpdGhtIEJ5IEpvaG4gUmVzaWcgKGh0dHA6Ly9lam9obi5vcmcvKSBhbmQgTHVwaW5cblx0ICpcblx0ICogTW9yZSBJbmZvOiBodHRwOi8vZWpvaG4ub3JnL3Byb2plY3RzL2phdmFzY3JpcHQtZGlmZi1hbGdvcml0aG0vXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nW119IHhcblx0ICovXG5cdGNvbnN0IGRlbEZtdCA9ICh4KSA9PiB7XG5cdFx0aWYgKHgubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdHJldHVybiBgPGRlbCBjbGFzcz0ncG9wdXBEaWZmJz4ke3guam9pbignJyl9PC9kZWw+YDtcblx0fTtcblx0Y29uc3QgaW5zRm10ID0gKHgpID0+IHtcblx0XHRpZiAoeC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0cmV0dXJuIGA8aW5zIGNsYXNzPSdwb3B1cERpZmYnPiR7eC5qb2luKCcnKX08L2lucz5gO1xuXHR9O1xuXHRjb25zdCBjb3VudENyb3NzaW5ncyA9IChhLCBiLCBpLCBlamVjdCkgPT4ge1xuXHRcdC8vIGNvdW50IHRoZSBjcm9zc2luZ3Mgb24gdGhlIGVkZ2Ugc3RhcnRpbmcgYXQgYltpXVxuXHRcdGlmICghYltpXS5yb3cgJiYgYltpXS5yb3cgIT09IDApIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdFx0bGV0IGNvdW50ID0gMDtcblx0XHRmb3IgKGNvbnN0IFtqLCBlbGVtZW50XSBvZiBhLmVudHJpZXMoKSkge1xuXHRcdFx0aWYgKCFlbGVtZW50LnJvdyAmJiBlbGVtZW50LnJvdyAhPT0gMCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmICgoaiAtIGJbaV0ucm93KSAqIChpIC0gZWxlbWVudC5yb3cpID4gMCkge1xuXHRcdFx0XHRpZiAoZWplY3QpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY291bnQ7XG5cdH07XG5cdGNvbnN0IHNob3J0ZW5EaWZmU3RyaW5nID0gZnVuY3Rpb24gc2hvcnRlbkRpZmZTdHJpbmcoc3RyLCBjb250ZXh0KSB7XG5cdFx0Y29uc3QgcmUgPSAvKDxkZWxbXFxTXFxzXSo/PFxcL2RlbD58PGluc1tcXFNcXHNdKj88XFwvaW5zPikvO1xuXHRcdGNvbnN0IHNwbGl0dGVkID0gc3RyLnNwbGl0KHJlKTtcblx0XHRsZXQgcmV0ID0gWycnXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0dGVkLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRpZiAoc3BsaXR0ZWRbaV0ubGVuZ3RoIDwgMiAqIGNvbnRleHQpIHtcblx0XHRcdFx0cmV0W3JldC5sZW5ndGggLSAxXSArPSBzcGxpdHRlZFtpXTtcblx0XHRcdFx0aWYgKGkgKyAxIDwgc3BsaXR0ZWQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0W3JldC5sZW5ndGggLSAxXSArPSBzcGxpdHRlZFtpICsgMV07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoaSA+IDApIHtcblx0XHRcdFx0XHRyZXRbcmV0Lmxlbmd0aCAtIDFdICs9IHNwbGl0dGVkW2ldLnNsaWNlKDAsIE1hdGgubWF4KDAsIGNvbnRleHQpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaSArIDEgPCBzcGxpdHRlZC5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXQucHVzaChzcGxpdHRlZFtpXS5zbGljZShNYXRoLm1heCgwLCBzcGxpdHRlZFtpXS5sZW5ndGggLSBjb250ZXh0KSkgKyBzcGxpdHRlZFtpICsgMV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWxlIChyZXQubGVuZ3RoID4gMCAmJiAhcmV0WzBdKSB7XG5cdFx0XHRyZXQgPSByZXQuc2xpY2UoMSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IGRpZmZTdHJpbmcgPSAobywgbikgPT4ge1xuXHRcdC8vICBXZSBuZWVkIHRvIHNwbGl0IHRoZSBzdHJpbmdzIG8gYW5kIG4gZmlyc3QsIGFuZCBlbnRpZnkoKSB0aGUgcGFydHNcblx0XHQvLyAgaW5kaXZpZHVhbGx5LCBzbyB0aGF0IHRoZSBIVE1MIGVudGl0aWVzIGFyZSBuZXZlciBjdXQgYXBhcnQuIChBeGVsQm9sZHQpXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgb1NwbGl0dGVkID0gby5zcGxpdCgvXFxiLyk7XG5cdFx0Y29uc3QgblNwbGl0dGVkID0gbi5zcGxpdCgvXFxiLyk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IG9TcGxpdHRlZC5sZW5ndGg7ICsraSkge1xuXHRcdFx0b1NwbGl0dGVkW2ldID0gb1NwbGl0dGVkW2ldLmVudGlmeSgpO1xuXHRcdH1cblx0XHRmb3IgKGkgPSAwOyBpIDwgblNwbGl0dGVkLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRuU3BsaXR0ZWRbaV0gPSBuU3BsaXR0ZWRbaV0uZW50aWZ5KCk7XG5cdFx0fVxuXHRcdGNvbnN0IG91dCA9IGRpZmYob1NwbGl0dGVkLCBuU3BsaXR0ZWQpO1xuXHRcdGxldCBzdHIgPSAnJztcblx0XHRsZXQgYWNjID0gW107IC8vIGFjY3VtdWxhdG9yIGZvciBwcmV0dGllciBvdXRwdXRcblxuXHRcdC8vIGNyb3NzaW5nIHBhaXJpbmdzIC0tIGVnICdBIEInIHZzICdCIEEnIC0tIGNhdXNlIHByb2JsZW1zLCBzbyBsZXQncyBpcm9uIHRoZW0gb3V0XG5cdFx0Ly8gdGhpcyBkb2Vzbid0IGFsd2F5cyBkbyB0aGluZ3Mgb3B0aW1hbGx5IGJ1dCBpdCBzaG91bGQgYmUgZmFzdCBlbm91Z2hcblx0XHRsZXQgbWF4T3V0cHV0UGFpciA9IDA7XG5cdFx0Zm9yIChpID0gMDsgaSA8IG91dC5uLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAob3V0Lm5baV0ucGFpcmVkKSB7XG5cdFx0XHRcdGlmIChtYXhPdXRwdXRQYWlyID4gb3V0Lm5baV0ucm93KSB7XG5cdFx0XHRcdFx0Ly8gdGFuZ2xlIC0gZGVsZXRlIHBhaXJpbmdcblx0XHRcdFx0XHRvdXQub1tvdXQubltpXS5yb3ddID0gb3V0Lm9bb3V0Lm5baV0ucm93XS50ZXh0O1xuXHRcdFx0XHRcdG91dC5uW2ldID0gb3V0Lm5baV0udGV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobWF4T3V0cHV0UGFpciA8IG91dC5uW2ldLnJvdykge1xuXHRcdFx0XHRcdG1heE91dHB1dFBhaXIgPSBvdXQubltpXS5yb3c7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gb3V0cHV0IHRoZSBzdHVmZiBwcmVjZWRpbmcgdGhlIGZpcnN0IHBhaXJlZCBvbGQgbGluZVxuXHRcdGZvciAoaSA9IDA7IGkgPCBvdXQuby5sZW5ndGggJiYgIW91dC5vW2ldLnBhaXJlZDsgKytpKSB7XG5cdFx0XHRhY2MucHVzaChvdXQub1tpXSk7XG5cdFx0fVxuXHRcdHN0ciArPSBkZWxGbXQoYWNjKTtcblx0XHRhY2MgPSBbXTtcblx0XHQvLyBtYWluIGxvb3Bcblx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0Lm4ubGVuZ3RoOyArK2kpIHtcblx0XHRcdC8vIG91dHB1dCB1bnBhaXJlZCBuZXcgXCJsaW5lc1wiXG5cdFx0XHR3aGlsZSAoaSA8IG91dC5uLmxlbmd0aCAmJiAhb3V0Lm5baV0ucGFpcmVkKSB7XG5cdFx0XHRcdGFjYy5wdXNoKG91dC5uW2krK10pO1xuXHRcdFx0fVxuXHRcdFx0c3RyICs9IGluc0ZtdChhY2MpO1xuXHRcdFx0YWNjID0gW107XG5cdFx0XHRpZiAoaSA8IG91dC5uLmxlbmd0aCkge1xuXHRcdFx0XHQvLyB0aGlzIG5ldyBcImxpbmVcIiBpcyBwYWlyZWQgd2l0aCB0aGUgKG91dC5uW2ldLnJvdyl0aCBvbGQgXCJsaW5lXCJcblx0XHRcdFx0c3RyICs9IG91dC5uW2ldLnRleHQ7XG5cdFx0XHRcdC8vIG91dHB1dCB1bnBhaXJlZCBvbGQgcm93cyBzdGFydGluZyBhZnRlciB0aGlzIG5ldyBsaW5lJ3MgcGFydG5lclxuXHRcdFx0XHRsZXQgbSA9IG91dC5uW2ldLnJvdyArIDE7XG5cdFx0XHRcdHdoaWxlIChtIDwgb3V0Lm8ubGVuZ3RoICYmICFvdXQub1ttXS5wYWlyZWQpIHtcblx0XHRcdFx0XHRhY2MucHVzaChvdXQub1ttKytdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdHIgKz0gZGVsRm10KGFjYyk7XG5cdFx0XHRcdGFjYyA9IFtdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3RyO1xuXHR9O1xuXHQvLyBzZWUge0BsaW5rIGh0dHA6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9Db3JlX0phdmFTY3JpcHRfMS41X1JlZmVyZW5jZTpHbG9iYWxfT2JqZWN0czpPYmplY3R9XG5cdC8vIEZJWE1FOiB1c2Ugb2JqLmhhc093blByb3BlcnR5IGluc3RlYWQgb2YgdGhpcyBrbHVkZ2UhXG5cdGNvbnN0IGpzUmVzZXJ2ZWRQcm9wZXJ0aWVzID0gbmV3IFJlZ0V4cChcblx0XHQnXihjb25zdHJ1Y3Rvcnxwcm90b3R5cGV8X18oKGRlZmluZXxsb29rdXApW0dTXWV0dGVyKV9fJyArXG5cdFx0XHQnfGV2YWx8aGFzT3duUHJvcGVydHl8cHJvcGVydHlJc0VudW1lcmFibGUnICtcblx0XHRcdCd8dG8oU291cmNlfFN0cmluZ3xMb2NhbGVTdHJpbmcpfCh1bik/d2F0Y2h8dmFsdWVPZikkJ1xuXHQpO1xuXHRjb25zdCBkaWZmQnVnQWxlcnQgPSBmdW5jdGlvbiBkaWZmQnVnQWxlcnQod29yZCkge1xuXHRcdGlmICghZGlmZkJ1Z0FsZXJ0Lmxpc3Rbd29yZF0pIHtcblx0XHRcdGRpZmZCdWdBbGVydC5saXN0W3dvcmRdID0gMTtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGBCYWQgd29yZDogJHt3b3JkfVxcblxcblBsZWFzZSByZXBvcnQgdGhpcyBidWcuYCwge3RhZzogJ3BvcHVwcycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHR9XG5cdH07XG5cdGRpZmZCdWdBbGVydC5saXN0ID0ge307XG5cdGNvbnN0IG1ha2VEaWZmSGFzaHRhYmxlID0gKHNyYykgPT4ge1xuXHRcdGNvbnN0IHJldCA9IHt9O1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoanNSZXNlcnZlZFByb3BlcnRpZXMudGVzdChzcmNbaV0pKSB7XG5cdFx0XHRcdHNyY1tpXSArPSAnPCEtLSAtLT4nO1xuXHRcdFx0fVxuXHRcdFx0cmV0W3NyY1tpXV0gPz89IFtdO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0W3NyY1tpXV0ucHVzaChpKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRkaWZmQnVnQWxlcnQoc3JjW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgZGlmZiA9IChvLCBuKSA9PiB7XG5cdFx0Ly8gcGFzcyAxOiBtYWtlIGhhc2h0YWJsZSBucyB3aXRoIG5ldyByb3dzIGFzIGtleXNcblx0XHRjb25zdCBucyA9IG1ha2VEaWZmSGFzaHRhYmxlKG4pO1xuXHRcdC8vIHBhc3MgMjogbWFrZSBoYXNodGFibGUgb3Mgd2l0aCBvbGQgcm93cyBhcyBrZXlzXG5cdFx0Y29uc3Qgb3MgPSBtYWtlRGlmZkhhc2h0YWJsZShvKTtcblx0XHQvLyBwYXNzIDM6IHBhaXIgdW5pcXVlIG5ldyByb3dzIGFuZCBtYXRjaGluZyB1bmlxdWUgb2xkIHJvd3Ncblx0XHRsZXQgaTtcblx0XHRmb3IgKGkgaW4gbnMpIHtcblx0XHRcdGlmIChuc1tpXS5sZW5ndGggPT09IDEgJiYgb3NbaV0gJiYgb3NbaV0ubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdG5bbnNbaV1bMF1dID0ge1xuXHRcdFx0XHRcdHRleHQ6IG5bbnNbaV1bMF1dLFxuXHRcdFx0XHRcdHJvdzogb3NbaV1bMF0sXG5cdFx0XHRcdFx0cGFpcmVkOiB0cnVlLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRvW29zW2ldWzBdXSA9IHtcblx0XHRcdFx0XHR0ZXh0OiBvW29zW2ldWzBdXSxcblx0XHRcdFx0XHRyb3c6IG5zW2ldWzBdLFxuXHRcdFx0XHRcdHBhaXJlZDogdHJ1ZSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGFzcyA0OiBwYWlyIG1hdGNoaW5nIHJvd3MgaW1tZWRpYXRlbHkgZm9sbG93aW5nIHBhaXJlZCByb3dzIChub3QgbmVjZXNzYXJpbHkgdW5pcXVlKVxuXHRcdGZvciAoaSA9IDA7IGkgPCBuLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuW2ldLnBhaXJlZCAmJlxuXHRcdFx0XHQhbltpICsgMV0ucGFpcmVkICYmXG5cdFx0XHRcdG5baV0ucm93ICsgMSA8IG8ubGVuZ3RoICYmXG5cdFx0XHRcdCFvW25baV0ucm93ICsgMV0ucGFpcmVkICYmXG5cdFx0XHRcdG5baSArIDFdID09PSBvW25baV0ucm93ICsgMV1cblx0XHRcdCkge1xuXHRcdFx0XHRuW2kgKyAxXSA9IHtcblx0XHRcdFx0XHR0ZXh0OiBuW2kgKyAxXSxcblx0XHRcdFx0XHRyb3c6IG5baV0ucm93ICsgMSxcblx0XHRcdFx0XHRwYWlyZWQ6IHRydWUsXG5cdFx0XHRcdH07XG5cdFx0XHRcdG9bbltpXS5yb3cgKyAxXSA9IHtcblx0XHRcdFx0XHR0ZXh0OiBvW25baV0ucm93ICsgMV0sXG5cdFx0XHRcdFx0cm93OiBpICsgMSxcblx0XHRcdFx0XHRwYWlyZWQ6IHRydWUsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHBhc3MgNTogcGFpciBtYXRjaGluZyByb3dzIGltbWVkaWF0ZWx5IHByZWNlZGluZyBwYWlyZWQgcm93cyAobm90IG5lY2Vzc2FyaWx5IHVuaXF1ZSlcblx0XHRmb3IgKGkgPSBuLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bltpXS5wYWlyZWQgJiZcblx0XHRcdFx0IW5baSAtIDFdLnBhaXJlZCAmJlxuXHRcdFx0XHRuW2ldLnJvdyA+IDAgJiZcblx0XHRcdFx0IW9bbltpXS5yb3cgLSAxXS5wYWlyZWQgJiZcblx0XHRcdFx0bltpIC0gMV0gPT09IG9bbltpXS5yb3cgLSAxXVxuXHRcdFx0KSB7XG5cdFx0XHRcdG5baSAtIDFdID0ge1xuXHRcdFx0XHRcdHRleHQ6IG5baSAtIDFdLFxuXHRcdFx0XHRcdHJvdzogbltpXS5yb3cgLSAxLFxuXHRcdFx0XHRcdHBhaXJlZDogdHJ1ZSxcblx0XHRcdFx0fTtcblx0XHRcdFx0b1tuW2ldLnJvdyAtIDFdID0ge1xuXHRcdFx0XHRcdHRleHQ6IG9bbltpXS5yb3cgLSAxXSxcblx0XHRcdFx0XHRyb3c6IGkgLSAxLFxuXHRcdFx0XHRcdHBhaXJlZDogdHJ1ZSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdG8sXG5cdFx0XHRuLFxuXHRcdH07XG5cdH07XG5cdC8vIEVOREZJTEU6IGRpZmYuanNcblx0Ly8gU1RBUlRGSUxFOiBpbml0LmpzXG5cdGNvbnN0IHNldFNpdGVJbmZvID0gKCkgPT4ge1xuXHRcdGlmICh3aW5kb3cucG9wdXBMb2NhbERlYnVnKSB7XG5cdFx0XHRwZy53aWtpLmhvc3RuYW1lID0gJ2VuLndpa2lwZWRpYS5vcmcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwZy53aWtpLmhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWU7IC8vIHVzZSBpbiBwcmVmZXJlbmNlIHRvIGxvY2F0aW9uLmhvc3RuYW1lIGZvciBmbGV4aWJpbGl0eSAoPylcblx0XHR9XG5cdFx0cGcud2lraS53aWtpbWVkaWEgPVxuXHRcdFx0Lyh3aWtpKFttcF1lZGlhfHNvdXJjZXxib29rc3xuZXdzfHF1b3RlfHZlcnNpdHl8c3BlY2llc3x2b3lhZ2V8ZGF0YSl8bWV0YXdpa2l8d2lrdGlvbmFyeXxtZWRpYXdpa2kpXFwub3JnLy50ZXN0KFxuXHRcdFx0XHRwZy53aWtpLmhvc3RuYW1lXG5cdFx0XHQpO1xuXHRcdHBnLndpa2kud2lraWEgPSAvXFwud2lraWFcXC5jb20kL2kudGVzdChwZy53aWtpLmhvc3RuYW1lKTtcblx0XHRwZy53aWtpLmlzTG9jYWwgPSBwZy53aWtpLmhvc3RuYW1lLnN0YXJ0c1dpdGgoJ2xvY2FsaG9zdCcpO1xuXHRcdHBnLndpa2kuY29tbW9ucyA9XG5cdFx0XHRwZy53aWtpLndpa2ltZWRpYSAmJiBwZy53aWtpLmhvc3RuYW1lICE9PSAnY29tbW9ucy53aWtpbWVkaWEub3JnJyA/ICdjb21tb25zLndpa2ltZWRpYS5vcmcnIDogbnVsbDtcblx0XHRwZy53aWtpLmxhbmcgPSBtdy5jb25maWcuZ2V0KCd3Z0NvbnRlbnRMYW5ndWFnZScpO1xuXHRcdGNvbnN0IHBvcnQgPSBsb2NhdGlvbi5wb3J0ID8gYDoke2xvY2F0aW9uLnBvcnR9YCA6ICcnO1xuXHRcdHBnLndpa2kuc2l0ZWJhc2UgPSBwZy53aWtpLmhvc3RuYW1lICsgcG9ydDtcblx0fTtcblx0Y29uc3Qgc2V0VXNlckluZm8gPSAoKSA9PiB7XG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bGlzdDogJ3VzZXJzJyxcblx0XHRcdHVzdXNlcnM6IG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKSxcblx0XHRcdHVzcHJvcDogJ3JpZ2h0cycsXG5cdFx0fTtcblx0XHRwZy51c2VyLmNhblJldmlldyA9IGZhbHNlO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFJldmlldycpKSB7XG5cdFx0XHRnZXRNd0FwaSgpXG5cdFx0XHRcdC5nZXQocGFyYW1zKVxuXHRcdFx0XHQuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IFt7cmlnaHRzfV0gPSBkYXRhLnF1ZXJ5LnVzZXJzO1xuXHRcdFx0XHRcdHBnLnVzZXIuY2FuUmV2aWV3ID0gcmlnaHRzLmluY2x1ZGVzKCdyZXZpZXcnKTsgLy8gVE9ETzogU2hvdWxkIGl0IGJlIGEgZ2V0VmFsdWVPZignUmV2aWV3UmlnaHQnKSA/XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgZmV0Y2hTcGVjaWFsUGFnZU5hbWVzID0gKCkgPT4ge1xuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bWV0YTogJ3NpdGVpbmZvJyxcblx0XHRcdHNpcHJvcDogJ3NwZWNpYWxwYWdlYWxpYXNlcycsXG5cdFx0XHR1c2VsYW5nOiAnY29udGVudCcsXG5cdFx0XHQvLyBjYWNoZSBmb3IgYW4gaG91clxuXHRcdFx0c21heGFnZTogMzYwMCxcblx0XHRcdG1heGFnZTogMzYwMCxcblx0XHR9O1xuXHRcdHJldHVybiBnZXRNd0FwaSgpXG5cdFx0XHQuZ2V0KHBhcmFtcylcblx0XHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdHBnLndpa2kuc3BlY2lhbHBhZ2VhbGlhc2VzID0gZGF0YS5xdWVyeS5zcGVjaWFscGFnZWFsaWFzZXM7XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3Qgc2V0VGl0bGVCYXNlID0gKCkgPT4ge1xuXHRcdGNvbnN0IHByb3RvY29sID0gd2luZG93LnBvcHVwTG9jYWxEZWJ1ZyA/ICdodHRwOicgOiBsb2NhdGlvbi5wcm90b2NvbDtcblx0XHRwZy53aWtpLmFydGljbGVQYXRoID0gbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlUGF0aCcpLnJlcGxhY2UoL1xcL1xcJDEvLCAnJyk7IC8vIGFzIGluIGh0dHA6Ly9zb21lLnRoaW5nLmNvbS93aWtpL0FydGljbGVcblx0XHRwZy53aWtpLmJvdEludGVyZmFjZVBhdGggPSBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpO1xuXHRcdHBnLndpa2kuQVBJUGF0aCA9IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpfS9hcGkucGhwYDtcblx0XHQvLyBkZWZhdWx0IG1lZGlhd2lraSBzZXR0aW5nIGlzIHBhdGhzIGxpa2UgaHR0cDovL3NvbWUudGhpbmcuY29tL2FydGljbGVQYXRoL2luZGV4LnBocD90aXRsZT1mb29cblx0XHRjb25zdCB0aXRsZXRhaWwgPSBgJHtwZy53aWtpLmJvdEludGVyZmFjZVBhdGh9P3RpdGxlPWA7XG5cdFx0Ly8gbGV0IHRpdGxldGFpbDIgPSBqb2luUGF0aChbcGcud2lraS5ib3RJbnRlcmZhY2VQYXRoLCAnd2lraS5waHRtbD90aXRsZT0nXSk7XG5cdFx0Ly8gb3RoZXIgc2l0ZXMgbWF5IG5lZWQgdG8gYWRkIGNvZGUgaGVyZSB0byBzZXQgdGl0bGV0YWlsIGRlcGVuZGluZyBvbiBob3cgdGhlaXIgdXJscyB3b3JrXG5cdFx0cGcud2lraS50aXRsZWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3RpdGxldGFpbH1gO1xuXHRcdC8vIHBnLndpa2kudGl0bGViYXNlMiAgPSBwcm90b2NvbCArICcvLycgKyBqb2luUGF0aChbcGcud2lraS5zaXRlYmFzZSwgdGl0bGV0YWlsMl0pO1xuXHRcdHBnLndpa2kud2lraWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3BnLndpa2kuYm90SW50ZXJmYWNlUGF0aH1gO1xuXHRcdHBnLndpa2kuYXBpd2lraWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3BnLndpa2kuQVBJUGF0aH1gO1xuXHRcdHBnLndpa2kuYXJ0aWNsZWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3BnLndpa2kuYXJ0aWNsZVBhdGh9YDtcblx0XHRwZy53aWtpLmNvbW1vbnNiYXNlID0gYCR7cHJvdG9jb2x9Ly8ke3BnLndpa2kuY29tbW9uc30ke3BnLndpa2kuYm90SW50ZXJmYWNlUGF0aH1gO1xuXHRcdHBnLndpa2kuYXBpY29tbW9uc2Jhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5jb21tb25zfSR7cGcud2lraS5BUElQYXRofWA7XG5cdFx0cGcucmUuYmFzZW5hbWVzID0gbmV3IFJlZ0V4cChgXigke21hcChsaXRlcmFsaXplUmVnZXgsIFtwZy53aWtpLnRpdGxlYmFzZSwgcGcud2lraS5hcnRpY2xlYmFzZV0pLmpvaW4oJ3wnKX0pYCk7XG5cdH07XG5cdC8vIEdsb2JhbCByZWdleHBzXG5cdGNvbnN0IHNldE1haW5SZWdleCA9ICgpID0+IHtcblx0XHRjb25zdCByZVN0YXJ0ID0gJ1teOl0qOi8vJztcblx0XHRsZXQgcHJlVGl0bGVzID0gYCR7bGl0ZXJhbGl6ZVJlZ2V4KG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpKX0vKD86aW5kZXhbLl1waHB8d2lraVsuXXBodG1sKVs/XXRpdGxlPWA7XG5cdFx0cHJlVGl0bGVzICs9IGB8JHtsaXRlcmFsaXplUmVnZXgoYCR7cGcud2lraS5hcnRpY2xlUGF0aH0vYCl9YDtcblx0XHRjb25zdCByZUVuZCA9IGAoJHtwcmVUaXRsZXN9KShbXiY/I10qKVteI10qKD86IyguKykpP2A7XG5cdFx0cGcucmUubWFpbiA9IG5ldyBSZWdFeHAocmVTdGFydCArIGxpdGVyYWxpemVSZWdleChwZy53aWtpLnNpdGViYXNlKSArIHJlRW5kKTtcblx0fTtcblx0Y29uc3QgYnVpbGRTcGVjaWFsUGFnZUdyb3VwID0gKHNwZWNpYWxQYWdlT2JqKSA9PiB7XG5cdFx0Y29uc3QgdmFyaWFudHMgPSBbXTtcblx0XHR2YXJpYW50cy5wdXNoKFxuXHRcdFx0bXcudXRpbC5lc2NhcGVSZWdFeHAoc3BlY2lhbFBhZ2VPYmoucmVhbG5hbWUpLFxuXHRcdFx0bXcudXRpbC5lc2NhcGVSZWdFeHAoZW5jb2RlVVJJKHNwZWNpYWxQYWdlT2JqLnJlYWxuYW1lKSlcblx0XHQpO1xuXHRcdGZvciAoY29uc3QgYWxpYXMgb2Ygc3BlY2lhbFBhZ2VPYmouYWxpYXNlcykge1xuXHRcdFx0dmFyaWFudHMucHVzaChtdy51dGlsLmVzY2FwZVJlZ0V4cChhbGlhcyksIG13LnV0aWwuZXNjYXBlUmVnRXhwKGVuY29kZVVSSShhbGlhcykpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhcmlhbnRzLmpvaW4oJ3wnKTtcblx0fTtcblx0Y29uc3Qgc2V0UmVnZXhwcyA9ICgpID0+IHtcblx0XHRzZXRNYWluUmVnZXgoKTtcblx0XHRjb25zdCBzcCA9IG5zUmUocGcubnNTcGVjaWFsSWQpO1xuXHRcdHBnLnJlLnVybE5vUG9wdXAgPSBuZXcgUmVnRXhwKGAoKHRpdGxlPXwvKSR7c3B9KD86JTNBfDopfHNlY3Rpb249WzAtOV18XiMkKWApO1xuXHRcdGZvciAoY29uc3Qgc3BlY2lhbHBhZ2Ugb2YgcGcud2lraS5zcGVjaWFscGFnZWFsaWFzZXMpIHtcblx0XHRcdHN3aXRjaCAoc3BlY2lhbHBhZ2UucmVhbG5hbWUpIHtcblx0XHRcdFx0Y2FzZSAnQ29udHJpYnV0aW9ucyc6XG5cdFx0XHRcdFx0cGcucmUuY29udHJpYnMgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YCh0aXRsZT18Lykke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pYCArXG5cdFx0XHRcdFx0XHRcdGAoJnRhcmdldD18L3wvJHtuc1JlKHBnLm5zVXNlcklkKX06KSguKilgLFxuXHRcdFx0XHRcdFx0J2knXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnRGlmZic6XG5cdFx0XHRcdFx0cGcucmUuc3BlY2lhbGRpZmYgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YC8ke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pLyhbXj8jXSopYCxcblx0XHRcdFx0XHRcdCdpJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ0VtYWlsdXNlcic6XG5cdFx0XHRcdFx0cGcucmUuZW1haWwgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YCh0aXRsZT18Lykke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pYCArXG5cdFx0XHRcdFx0XHRcdGAoJnRhcmdldD18L3wvKD86JHtuc1JlKHBnLm5zVXNlcklkKX06KT8pKC4qKWAsXG5cdFx0XHRcdFx0XHQnaSdcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdXaGF0bGlua3NoZXJlJzpcblx0XHRcdFx0XHRwZy5yZS5iYWNrbGlua3MgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YCh0aXRsZT18Lykke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pKCZ0YXJnZXQ9fC8pKFteJl0qKWAsXG5cdFx0XHRcdFx0XHQnaSdcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBpbSA9IG5zUmVJbWFnZSgpO1xuXHRcdC8vIG5vdGU6IHRyaWVzIHRvIGdldCBpbWFnZXMgaW4gaW5mb2JveCB0ZW1wbGF0ZXMgdG9vLCBlLmcuIG1vdmllIHBhZ2VzLCBhbGJ1bSBwYWdlcyBldGNcblx0XHQvL1x0XHRcdFx0XHQgIChefFxcW1xcWylpbWFnZTogKihbXnxcXF1dKltefFxcXSBdKSAqXG5cdFx0Ly9cdFx0XHRcdFx0ICAoXnxcXFtcXFspaW1hZ2U6ICooW158XFxdXSpbXnxcXF0gXSkoW14wLTlcXF1dKihbMC05XSspICpweCk/XG5cdFx0Ly9cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JDQgPSAxMjAgYXMgaW4gMTIwcHhcblx0XHRwZy5yZS5pbWFnZSA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgKF58XFxcXFtcXFxcWykke2ltfTogKihbXnxcXFxcXV0qW158XFxcXF0gXSkke1N0cmluZy5yYXdgKFteMC05XFxdXSooWzAtOV0rKSAqcHgpP3woPzpcXG4gKlt8XT98W3xdKSAqYH0oJHtnZXRWYWx1ZU9mKCdwb3B1cEltYWdlVmFyc1JlZ2V4cCcpfSlgICtcblx0XHRcdFx0YCAqPSAqKD86XFxcXFtcXFxcWyAqKT8oPzoke2ltfTopPyR7U3RyaW5nLnJhd2AoW158XSo/KSg/OlxcXVxcXSk/ICpbfF0/ICpcXG5gfWAsXG5cdFx0XHQnaW1nJ1xuXHRcdCk7XG5cdFx0cGcucmUuaW1hZ2VCcmFja2V0Q291bnQgPSA2O1xuXHRcdHBnLnJlLmNhdGVnb3J5ID0gbmV3IFJlZ0V4cChgXFxcXFtcXFxcWyR7bnNSZShwZy5uc0NhdGVnb3J5SWQpfTogKihbXnxcXFxcXV0qW158XFxcXF0gXSkgKmAsICdpJyk7XG5cdFx0cGcucmUuY2F0ZWdvcnlCcmFja2V0Q291bnQgPSAxO1xuXHRcdC8vIElQdjYgfCBJUHY0XG5cdFx0cGcucmUuaXBVc2VyID1cblx0XHRcdC9eKD86Oig/Ojp8KD86OltcXGRBLUZhLWZdezEsNH0pezEsN30pfFtcXGRBLUZhLWZdezEsNH0oPzo6W1xcZEEtRmEtZl17MSw0fSl7MCw2fTo6fFtcXGRBLUZhLWZdezEsNH0oPzo6W1xcZEEtRmEtZl17MSw0fSl7N30pfCgoKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV1cXGR8XFxkKVxcLil7M30oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XVxcZHxcXGQpKSQvO1xuXHRcdHBnLnJlLnN0dWIgPSBuZXcgUmVnRXhwKGdldFZhbHVlT2YoJ3BvcHVwU3R1YlJlZ2V4cCcpLCAnaW0nKTtcblx0XHRwZy5yZS5kaXNhbWJpZyA9IG5ldyBSZWdFeHAoZ2V0VmFsdWVPZigncG9wdXBEYWJSZWdleHAnKSwgJ2ltJyk7XG5cdFx0Ly8gRklYTUUgcmVwbGFjZSB3aXRoIGdlbmVyYWwgcGFyYW1ldGVyIHBhcnNpbmcgZnVuY3Rpb24sIHRoaXMgaXMgZGFmdFxuXHRcdHBnLnJlLm9sZGlkID0gL1smP11vbGRpZD0oW14mXSopLztcblx0XHRwZy5yZS5kaWZmID0gL1smP11kaWZmPShbXiZdKikvO1xuXHR9O1xuXHQvLyBtaXNjZWxsYW55XG5cdGNvbnN0IHNldHVwQ2FjaGUgPSAoKSA9PiB7XG5cdFx0Ly8gcGFnZSBjYWNoaW5nXG5cdFx0cGcuY2FjaGUucGFnZXMgPSBbXTtcblx0fTtcblx0Y29uc3Qgc2V0TWlzYyA9ICgpID0+IHtcblx0XHRwZy5jdXJyZW50LmxpbmsgPSBudWxsO1xuXHRcdHBnLmN1cnJlbnQubGlua3MgPSBbXTtcblx0XHRwZy5jdXJyZW50LmxpbmtzSGFzaCA9IHt9O1xuXHRcdHNldHVwQ2FjaGUoKTtcblx0XHRwZy50aW1lci5jaGVja1BvcHVwUG9zaXRpb24gPSBudWxsO1xuXHRcdHBnLmNvdW50ZXIubG9vcCA9IDA7XG5cdFx0Ly8gaWRzIGNoYW5nZSB3aXRoIGVhY2ggcG9wdXA6IHBvcHVwSW1hZ2UwLCBwb3B1cEltYWdlMSBldGNcblx0XHRwZy5pZE51bWJlciA9IDA7XG5cdFx0Ly8gZm9yIG15RGVjb2RlVVJJXG5cdFx0cGcubWlzYy5kZWNvZGVFeHRyYXMgPSBbXG5cdFx0XHR7ZnJvbTogJyUyQycsIHRvOiAnLCd9LFxuXHRcdFx0e2Zyb206ICdfJywgdG86ICcgJ30sXG5cdFx0XHR7ZnJvbTogJyUyNCcsIHRvOiAnJCd9LFxuXHRcdFx0e2Zyb206ICclMjYnLCB0bzogJyYnfSwgLy8gbm8gLFxuXHRcdF07XG5cdH07XG5cdGNvbnN0IGdldE13QXBpID0gKCkgPT4ge1xuXHRcdGlmICghcGcuYXBpLmNsaWVudCkge1xuXHRcdFx0cGcuYXBpLnVzZXJBZ2VudCA9ICdOYXZpZ2F0aW9uIHBvcHVwcy8xLjAnO1xuXHRcdFx0cGcuYXBpLmNsaWVudCA9IGFwaTtcblx0XHR9XG5cdFx0cmV0dXJuIHBnLmFwaS5jbGllbnQ7XG5cdH07XG5cdC8vIFdlIG5lZWQgYSBjYWxsYmFjayBzaW5jZSB0aGlzIG1pZ2h0IGVuZCB1cCBhc3luY2hyb25vdXMgYmVjYXVzZSBvZlxuXHQvLyB0aGUgbXcubG9hZGVyLnVzaW5nKCkgY2FsbC5cblx0Y29uc3Qgc2V0dXBQb3B1cHMgPSBmdW5jdGlvbiBzZXR1cFBvcHVwcyhjYWxsYmFjaykge1xuXHRcdGlmIChzZXR1cFBvcHVwcy5jb21wbGV0ZWQpIHtcblx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gVGhlc2UgZGVwZW5kZW5jaWVzIHNob3VsZCBhbHNlIGJlIGVuZm9yY2VkIGZyb20gdGhlIGdhZGdldCxcblx0XHQvLyBidXQgbm90IGV2ZXJ5b25lIGxvYWRzIHRoaXMgYXMgYSBnYWRnZXQsIHNvIGRvdWJsZSBjaGVja1xuXHRcdGZldGNoU3BlY2lhbFBhZ2VOYW1lcygpLnRoZW4oKCkgPT4ge1xuXHRcdFx0Ly8gTkIgdHJhbnNsYXRhYmxlIHN0cmluZ3Mgc2hvdWxkIGJlIHNldCB1cCBmaXJzdCAoc3RyaW5ncy5qcylcblx0XHRcdC8vIGJhc2ljc1xuXHRcdFx0c2V0dXBEZWJ1Z2dpbmcoKTtcblx0XHRcdHNldFNpdGVJbmZvKCk7XG5cdFx0XHRzZXRUaXRsZUJhc2UoKTtcblx0XHRcdHNldE9wdGlvbnMoKTsgLy8gc2VlIG9wdGlvbnMuanNcblx0XHRcdHNldFVzZXJJbmZvKCk7XG5cdFx0XHQvLyBuYW1lc3BhY2VzIGV0Y1xuXHRcdFx0c2V0TmFtZXNwYWNlcygpO1xuXHRcdFx0c2V0SW50ZXJ3aWtpKCk7XG5cdFx0XHQvLyByZWdleHBzXG5cdFx0XHRzZXRSZWdleHBzKCk7XG5cdFx0XHRzZXRSZWRpcnMoKTtcblx0XHRcdC8vIG90aGVyIHN0dWZmXG5cdFx0XHRzZXRNaXNjKCk7XG5cdFx0XHRzZXR1cExpdmVQcmV2aWV3KCk7XG5cdFx0XHQvLyBtYWluIGRlYWwgaGVyZVxuXHRcdFx0c2V0dXBUb29sdGlwcygpO1xuXHRcdFx0bG9nKCdJbiBzZXR1cFBvcHVwcygpLCBqdXN0IGNhbGxlZCBzZXR1cFRvb2x0aXBzKCknKTtcblx0XHRcdE5hdnBvcHVwLnRyYWNrZXIuZW5hYmxlKCk7XG5cdFx0XHRzZXR1cFBvcHVwcy5jb21wbGV0ZWQgPSB0cnVlO1xuXHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBpbml0LmpzXG5cdC8vIFNUQVJURklMRTogbmF2bGlua3MuanNcblx0Ly8gbmF2bGlua3MuLi4gbGV0IHRoZSBmdW4gYmVnaW5cblx0Ly9cblx0Y29uc3QgZGVmYXVsdE5hdmxpbmtTcGVjID0gKCkgPT4ge1xuXHRcdGxldCBzdHIgPSAnJztcblx0XHRzdHIgKz0gJzxiPjw8bWFpbmxpbmt8c2hvcnRjdXQ9ID4+PC9iPic7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwTGFzdEVkaXRMaW5rJykpIHtcblx0XHRcdHN0ciArPSAnKjw8bGFzdEVkaXR8c2hvcnRjdXQ9Lz4+fDw8bGFzdENvbnRyaWI+Pnw8PHNpbmNlTWU+PmlmKG9sZGlkKXt8PDxvbGRFZGl0Pj58PDxkaWZmQ3VyPj59Jztcblx0XHR9XG5cdFx0Ly8gdXNlciBsaW5rc1xuXHRcdC8vIGNvbnRyaWJzIC0gbG9nIC0gY291bnQgLSBlbWFpbCAtIGJsb2NrXG5cdFx0Ly8gY291bnQgb25seSBpZiBhcHBsaWNhYmxlOyBibG9jayBvbmx5IGlmIHBvcHVwQWRtaW5MaW5rc1xuXHRcdHN0ciArPSAnaWYodXNlcil7PGJyPjw8Y29udHJpYnN8c2hvcnRjdXQ9Yz4+Kjw8dXNlcmxvZ3xzaG9ydGN1dD1MfGxvZz4+Jztcblx0XHRzdHIgKz0gJ2lmKGlwdXNlcil7Kjw8YXJpbj4+fWlmKHdpa2ltZWRpYSl7Kjw8Y291bnR8c2hvcnRjdXQ9Iz4+fSc7XG5cdFx0c3RyICs9ICdpZihpcHVzZXIpe31lbHNleyo8PGVtYWlsfHNob3J0Y3V0PUU+Pn1pZihhZG1pbil7Kjw8YmxvY2t8c2hvcnRjdXQ9Yj4+fDw8YmxvY2tsb2d8bG9nPj59fSc7XG5cdFx0Ly8gZWRpdGluZyBsaW5rc1xuXHRcdC8vIHRhbGtwYWdlICAgLT4gZWRpdHxuZXcgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSBhcnRpY2xlfGVkaXRcblx0XHQvLyBvdGhlciBwYWdlIC0+IGVkaXQgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSB0YWxrfGVkaXR8bmV3XG5cdFx0Y29uc3QgZWRpdHN0ciA9ICc8PGVkaXR8c2hvcnRjdXQ9ZT4+Jztcblx0XHRjb25zdCBlZGl0T2xkaWRTdHIgPSBgaWYob2xkaWQpezw8ZWRpdE9sZHxzaG9ydGN1dD1lPj58PDxyZXZlcnR8c2hvcnRjdXQ9dnxydj4+fDw8ZWRpdHxjdXI+Pn1lbHNleyR7ZWRpdHN0cn19YDtcblx0XHRjb25zdCBoaXN0b3J5c3RyID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1oPj58PDxlZGl0b3JzfHNob3J0Y3V0PUV8Pj4nO1xuXHRcdGNvbnN0IHdhdGNoc3RyID0gJzw8dW53YXRjaHx1bndhdGNoU2hvcnQ+Pnw8PHdhdGNofHNob3J0Y3V0PXd8d2F0Y2hUaGluZ3k+Pic7XG5cdFx0c3RyICs9XG5cdFx0XHRgPGJyPmlmKHRhbGspeyR7ZWRpdE9sZGlkU3RyfXw8PG5ld3xzaG9ydGN1dD0rPj5gICtcblx0XHRcdGAqJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PGFydGljbGV8c2hvcnRjdXQ9YT4+PC9iPnw8PGVkaXRBcnRpY2xlfGVkaXQ+PicgK1xuXHRcdFx0YH1lbHNleyR7XG5cdFx0XHRcdC8vIG5vdCBhIHRhbGsgcGFnZVxuXHRcdFx0XHRlZGl0T2xkaWRTdHJcblx0XHRcdH0qJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PHRhbGt8c2hvcnRjdXQ9dD4+PC9iPnw8PGVkaXRUYWxrfGVkaXQ+Pnw8PG5ld1RhbGt8c2hvcnRjdXQ9K3xuZXc+Pn0nO1xuXHRcdC8vIG1pc2MgbGlua3Ncblx0XHRzdHIgKz0gJzxicj48PHdoYXRMaW5rc0hlcmV8c2hvcnRjdXQ9bD4+Kjw8cmVsYXRlZENoYW5nZXN8c2hvcnRjdXQ9cj4+Kjw8bW92ZXxzaG9ydGN1dD1tPj4nO1xuXHRcdC8vIGFkbWluIGxpbmtzXG5cdFx0c3RyICs9XG5cdFx0XHQnaWYoYWRtaW4pezxicj48PHVucHJvdGVjdHx1bnByb3RlY3RTaG9ydD4+fDw8cHJvdGVjdHxzaG9ydGN1dD1wPj58PDxwcm90ZWN0bG9nfGxvZz4+KicgK1xuXHRcdFx0Jzw8dW5kZWxldGV8dW5kZWxldGVTaG9ydD4+fDw8ZGVsZXRlfHNob3J0Y3V0PWQ+Pnw8PGRlbGV0ZWxvZ3xsb2c+Pn0nO1xuXHRcdHJldHVybiBzdHI7XG5cdH07XG5cdGNvbnN0IG5hdkxpbmtzSFRNTCA9IChhcnRpY2xlLCBfaGludCwgcGFyYW1zKSA9PiB7XG5cdFx0Ly8gb2xkaWQsIHJjaWQpIHtcblx0XHRjb25zdCBzdHIgPSBgPHNwYW4gY2xhc3M9XCJwb3B1cE5hdkxpbmtzXCI+JHtkZWZhdWx0TmF2bGlua1NwZWMoKX08L3NwYW4+YDtcblx0XHQvLyBCQU1cblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChzdHIsIGFydGljbGUsIHBhcmFtcyk7XG5cdH07XG5cdGNvbnN0IGV4cGFuZENvbmRpdGlvbmFsTmF2bGlua1N0cmluZyA9IGZ1bmN0aW9uIGV4cGFuZENvbmRpdGlvbmFsTmF2bGlua1N0cmluZyhzLCBhcnRpY2xlLCB6LCByZWN1cnNpb25Db3VudCkge1xuXHRcdGNvbnN0IHtvbGRpZH0gPSB6O1xuXHRcdGNvbnN0IHtyY2lkfSA9IHo7XG5cdFx0Y29uc3Qge2RpZmZ9ID0gejtcblx0XHQvLyBuZXN0ZWQgY29uZGl0aW9uYWxzICh1cCB0byAxMCBkZWVwKSBhcmUgb2ssIGhvcGVmdWxseSEgKHdvcmsgZnJvbSB0aGUgaW5zaWRlIG91dClcblx0XHRpZiAodHlwZW9mIHJlY3Vyc2lvbkNvdW50ICE9PSB0eXBlb2YgMCkge1xuXHRcdFx0cmVjdXJzaW9uQ291bnQgPSAwO1xuXHRcdH1cblx0XHQvLyAoMVx0IGlmXHRcXFxcKFx0KDJcdDIpXHRcXFxcKVx0ICB7KDNcdDMpfSAgKDQgICBlbHNlXHQgIHsoNVx0IDUpfSAgNCkxKVxuXHRcdGNvbnN0IGNvbmRpdGlvbmFsU3BsaXRSZWdleCA9IC8oOz9cXHMqaWZcXHMqXFwoXFxzKihcXHcqKVxccypcXClcXHMqeyhbXnt9XSopfShcXHMqZWxzZVxccyp7KFtee31dKj8pfXwpKS9pO1xuXHRcdGNvbnN0IHNwbGl0dGVkID0gcy5zcGxpdChjb25kaXRpb25hbFNwbGl0UmVnZXgpO1xuXHRcdC8vICQxOiB3aG9sZSBjb25kaXRpb25hbFxuXHRcdC8vICQyOiB0ZXN0IGNvbmRpdGlvblxuXHRcdC8vICQzOiB0cnVlIGV4cGFuc2lvblxuXHRcdC8vICQ0OiBlbHNlIGNsYXVzZSAocG9zc2libHkgZW1wdHkpXG5cdFx0Ly8gJDU6IGZhbHNlIGV4cGFuc2lvbiAocG9zc2libHkgbnVsbClcblx0XHRjb25zdCBudW1QYXJlbnMgPSA1O1xuXHRcdGxldCBbcmV0XSA9IHNwbGl0dGVkO1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgc3BsaXR0ZWQubGVuZ3RoOyBpID0gaSArIG51bVBhcmVucyArIDEpIHtcblx0XHRcdGNvbnN0IHRlc3RTdHJpbmcgPSBzcGxpdHRlZFtpICsgMiAtIDFdO1xuXHRcdFx0Y29uc3QgdHJ1ZVN0cmluZyA9IHNwbGl0dGVkW2kgKyAzIC0gMV07XG5cdFx0XHRsZXQgZmFsc2VTdHJpbmcgPSBzcGxpdHRlZFtpICsgNSAtIDFdO1xuXHRcdFx0aWYgKGZhbHNlU3RyaW5nID09PSB1bmRlZmluZWQgfHwgIWZhbHNlU3RyaW5nKSB7XG5cdFx0XHRcdGZhbHNlU3RyaW5nID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRsZXQgdGVzdFJlc3VsdDtcblx0XHRcdHN3aXRjaCAodGVzdFN0cmluZykge1xuXHRcdFx0XHRjYXNlICd1c2VyJzpcblx0XHRcdFx0XHR0ZXN0UmVzdWx0ID0gISFhcnRpY2xlLnVzZXJOYW1lKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3RhbGsnOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhYXJ0aWNsZS50YWxrUGFnZSgpOyAvLyB0YWxrUGFnZSBjb252ZXJ0cyBfYXJ0aWNsZXNfIHRvIHRhbGtQYWdlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdhZG1pbic6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhZ2V0VmFsdWVPZigncG9wdXBBZG1pbkxpbmtzJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ29sZGlkJzpcblx0XHRcdFx0XHR0ZXN0UmVzdWx0ID0gISEob2xkaWQgIT09IHVuZGVmaW5lZCAmJiBvbGRpZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JjaWQnOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhIShyY2lkICE9PSB1bmRlZmluZWQgJiYgcmNpZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2lwdXNlcic6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhYXJ0aWNsZS5pc0lwVXNlcigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtYWluc3BhY2VfZW4nOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSBpc0luTWFpbk5hbWVzcGFjZShhcnRpY2xlKSAmJiBwZy53aWtpLmhvc3RuYW1lID09PSAnZW4ud2lraXBlZGlhLm9yZyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3dpa2ltZWRpYSc6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhcGcud2lraS53aWtpbWVkaWE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2RpZmYnOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhIShkaWZmICE9PSB1bmRlZmluZWQgJiYgZGlmZik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHRlc3RSZXN1bHQpIHtcblx0XHRcdFx0Y2FzZSBudWxsOlxuXHRcdFx0XHRcdHJldCArPSBzcGxpdHRlZFtpXTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSB0cnVlOlxuXHRcdFx0XHRcdHJldCArPSB0cnVlU3RyaW5nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIGZhbHNlOlxuXHRcdFx0XHRcdHJldCArPSBmYWxzZVN0cmluZztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdC8vIGFwcGVuZCBub24tY29uZGl0aW9uYWwgc3RyaW5nXG5cdFx0XHRyZXQgKz0gc3BsaXR0ZWRbaSArIG51bVBhcmVuc107XG5cdFx0fVxuXHRcdGlmIChjb25kaXRpb25hbFNwbGl0UmVnZXgudGVzdChyZXQpICYmIHJlY3Vyc2lvbkNvdW50IDwgMTApIHtcblx0XHRcdHJldHVybiBleHBhbmRDb25kaXRpb25hbE5hdmxpbmtTdHJpbmcocmV0LCBhcnRpY2xlLCB6LCByZWN1cnNpb25Db3VudCArIDEpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBuYXZsaW5rU3RyaW5nVG9BcnJheSA9IChzLCBhcnRpY2xlLCBwYXJhbXMpID0+IHtcblx0XHRzID0gZXhwYW5kQ29uZGl0aW9uYWxOYXZsaW5rU3RyaW5nKHMsIGFydGljbGUsIHBhcmFtcyk7XG5cdFx0Y29uc3Qgc3BsaXR0ZWQgPSBzLnNwbGl0KC88PCguKj8pPj4vKTtcblx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRmb3IgKGNvbnN0IFtpLCBlbGVtZW50XSBvZiBzcGxpdHRlZC5lbnRyaWVzKCkpIHtcblx0XHRcdGlmIChpICUgMikge1xuXHRcdFx0XHQvLyBpIG9kZCwgc28gcyBpcyBhIHRhZ1xuXHRcdFx0XHRjb25zdCB0ID0gbmV3IG5hdmxpbmtUYWcoKTtcblx0XHRcdFx0Y29uc3Qgc3MgPSBlbGVtZW50LnNwbGl0KCd8Jyk7XG5cdFx0XHRcdFt0LmlkXSA9IHNzO1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMTsgaiA8IHNzLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc3NzID0gc3Nbal0uc3BsaXQoJz0nKTtcblx0XHRcdFx0XHRpZiAoc3NzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFssIHRbc3NzWzBdXV0gPSBzc3M7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIG5vIGFzc2lnbm1lbnQgKG5vIFwiPVwiKSwgc28gdHJlYXQgdGhpcyBhcyBhIHRpdGxlIChvdmVyd3JpdGluZyB0aGUgbGFzdCBvbmUpXG5cdFx0XHRcdFx0XHR0LnRleHQgPSBwb3B1cFN0cmluZyhzc3NbMF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0LmFydGljbGUgPSBhcnRpY2xlO1xuXHRcdFx0XHRjb25zdCB7b2xkaWR9ID0gcGFyYW1zO1xuXHRcdFx0XHRjb25zdCB7cmNpZH0gPSBwYXJhbXM7XG5cdFx0XHRcdGNvbnN0IHtkaWZmfSA9IHBhcmFtcztcblx0XHRcdFx0aWYgKG9sZGlkICE9PSB1bmRlZmluZWQgJiYgb2xkaWQgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0Lm9sZGlkID0gb2xkaWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJjaWQgIT09IHVuZGVmaW5lZCAmJiByY2lkICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dC5yY2lkID0gcmNpZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGlmZiAhPT0gdW5kZWZpbmVkICYmIGRpZmYgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0LmRpZmYgPSBkaWZmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghdC50ZXh0ICYmIHQuaWQgIT09ICdtYWlubGluaycpIHtcblx0XHRcdFx0XHR0LnRleHQgPSBwb3B1cFN0cmluZyh0LmlkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXQucHVzaCh0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHBsYWluIEhUTUxcblx0XHRcdFx0cmV0LnB1c2goZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IG5hdmxpbmtTdWJzdGl0dXRlSFRNTCA9IChzKSA9PiB7XG5cdFx0cmV0dXJuIHNcblx0XHRcdC5zcGxpdCgnKicpXG5cdFx0XHQuam9pbihnZXRWYWx1ZU9mKCdwb3B1cE5hdkxpbmtTZXBhcmF0b3InKSlcblx0XHRcdC5zcGxpdCgnPG1lbnVyb3c+Jylcblx0XHRcdC5qb2luKCc8bGkgY2xhc3M9XCJwb3B1cF9tZW51X3Jvd1wiPicpXG5cdFx0XHQuc3BsaXQoJzwvbWVudXJvdz4nKVxuXHRcdFx0LmpvaW4oJzwvbGk+Jylcblx0XHRcdC5zcGxpdCgnPG1lbnU+Jylcblx0XHRcdC5qb2luKCc8dWwgY2xhc3M9XCJwb3B1cF9tZW51XCI+Jylcblx0XHRcdC5zcGxpdCgnPC9tZW51PicpXG5cdFx0XHQuam9pbignPC91bD4nKTtcblx0fTtcblx0Y29uc3QgbmF2bGlua0RlcHRoID0gKG1hZ2ljLCBzKSA9PiB7XG5cdFx0cmV0dXJuIHMuc3BsaXQoYDwke21hZ2ljfT5gKS5sZW5ndGggLSBzLnNwbGl0KGA8LyR7bWFnaWN9PmApLmxlbmd0aDtcblx0fTtcblx0Ly8gbmF2bGlua1N0cmluZzogKiBiZWNvbWVzIHRoZSBzZXBhcmF0b3Jcblx0Ly9cdFx0XHRcdDw8Zm9vfGJhcj1iYXp8ZnViYXI+PiBiZWNvbWVzIGEgZm9vLWxpbmsgd2l0aCBhdHRyaWJ1dGUgYmFyPSdiYXonXG5cdC8vXHRcdFx0XHRcdFx0XHRcdFx0ICBhbmQgdmlzaWJsZSB0ZXh0ICdmdWJhcidcblx0Ly9cdFx0XHRcdGlmKHRlc3Qpey4uLn0gYW5kIGlmKHRlc3Qpey4uLn1lbHNley4uLn0gd29yayB0b28gKG5lc3RlZCBvaylcblx0Y29uc3QgbmF2bGlua1N0cmluZ1RvSFRNTCA9IChzLCBhcnRpY2xlLCBwYXJhbXMpID0+IHtcblx0XHQvLyBsaW1pdEFsZXJ0KG5hdmxpbmtTdHJpbmdUb0hUTUwsIDUsICduYXZsaW5rU3RyaW5nVG9IVE1MXFxuJyArIGFydGljbGUgKyAnXFxuJyArICh0eXBlb2YgYXJ0aWNsZSkpO1xuXHRcdGNvbnN0IHAgPSBuYXZsaW5rU3RyaW5nVG9BcnJheShzLCBhcnRpY2xlLCBwYXJhbXMpO1xuXHRcdGxldCBodG1sID0gJyc7XG5cdFx0bGV0IG1lbnVkZXB0aCA9IDA7IC8vIG5lc3RlZCBtZW51cyBub3QgY3VycmVudGx5IGFsbG93ZWQsIGJ1dCBkb2Vzbid0IGRvIGFueSBoYXJtIHRvIGNvZGUgZm9yIGl0XG5cdFx0bGV0IG1lbnVyb3dkZXB0aCA9IDA7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHApIHtcblx0XHRcdGlmICh0eXBlb2YgZWxlbWVudCA9PT0gdHlwZW9mICcnKSB7XG5cdFx0XHRcdGh0bWwgKz0gbmF2bGlua1N1YnN0aXR1dGVIVE1MKGVsZW1lbnQpO1xuXHRcdFx0XHRtZW51ZGVwdGggKz0gbmF2bGlua0RlcHRoKCdtZW51JywgZWxlbWVudCk7XG5cdFx0XHRcdG1lbnVyb3dkZXB0aCArPSBuYXZsaW5rRGVwdGgoJ21lbnVyb3cnLCBlbGVtZW50KTtcblx0XHRcdFx0Ly9cdFx0XHRpZiAobWVudWRlcHRoID09PSAwKSB7XG5cdFx0XHRcdC8vXHRcdFx0XHR0YWdUeXBlPSdzcGFuJztcblx0XHRcdFx0Ly9cdFx0XHR9IGVsc2UgaWYgKG1lbnVyb3dkZXB0aCA9PT0gMCkge1xuXHRcdFx0XHQvL1x0XHRcdFx0dGFnVHlwZT0nbGknO1xuXHRcdFx0XHQvL1x0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vXHRcdFx0XHR0YWdUeXBlID0gbnVsbDtcblx0XHRcdFx0Ly9cdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQudHlwZSAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnQudHlwZSA9PT0gJ25hdmxpbmtUYWcnKSB7XG5cdFx0XHRcdGh0bWwgKz1cblx0XHRcdFx0XHRtZW51ZGVwdGggPiAwICYmIG1lbnVyb3dkZXB0aCA9PT0gMFxuXHRcdFx0XHRcdFx0PyBgPGxpIGNsYXNzPVwicG9wdXBfbWVudV9pdGVtXCI+JHtlbGVtZW50Lmh0bWwoKX08L2xpPmBcblx0XHRcdFx0XHRcdDogZWxlbWVudC5odG1sKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBodG1sO1xuXHR9O1xuXHRjbGFzcyBuYXZsaW5rVGFnIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHRoaXMudHlwZSA9ICduYXZsaW5rVGFnJztcblx0XHR9XG5cdFx0aHRtbCgpIHtcblx0XHRcdHRoaXMuZ2V0TmV3V2luKCk7XG5cdFx0XHR0aGlzLmdldFByaW50RnVuY3Rpb24oKTtcblx0XHRcdGxldCBodG1sID0gJyc7XG5cdFx0XHRsZXQgb3BlbmluZztcblx0XHRcdGxldCBjbG9zaW5nO1xuXHRcdFx0Y29uc3QgdGFnVHlwZSA9ICdzcGFuJztcblx0XHRcdGlmICh0YWdUeXBlKSB7XG5cdFx0XHRcdG9wZW5pbmcgPSBgPCR7dGFnVHlwZX0gY2xhc3M9XCJwb3B1cF8ke3RoaXMuaWR9XCI+YDtcblx0XHRcdFx0Y2xvc2luZyA9IGA8LyR7dGFnVHlwZX0+YDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wZW5pbmcgPSAnJztcblx0XHRcdFx0Y2xvc2luZyA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByaW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGh0bWwgPSB0aGlzLnByaW50KHRoaXMpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGh0bWwgIT09IHR5cGVvZiAnJykge1xuXHRcdFx0XHRcdGh0bWwgPSAnJztcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnNob3J0Y3V0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRodG1sID0gYWRkUG9wdXBTaG9ydGN1dChodG1sLCB0aGlzLnNob3J0Y3V0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZXJybG9nKGBPaCBkZWFyIC0gaW52YWxpZCBwcmludCBmdW5jdGlvbiBmb3IgYSBuYXZsaW5rVGFnLCBpZD0ke3RoaXMuaWR9YCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb3BlbmluZyArIGh0bWwgKyBjbG9zaW5nO1xuXHRcdH1cblx0XHRnZXROZXdXaW4oKSB7XG5cdFx0XHRnZXRWYWx1ZU9mKCdwb3B1cExpbmtzTmV3V2luZG93Jyk7XG5cdFx0XHRpZiAocGcub3B0aW9uLnBvcHVwTGlua3NOZXdXaW5kb3dbdGhpcy5pZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLm5ld1dpbiA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5ld1dpbiA9IHBnLm9wdGlvbi5wb3B1cExpbmtzTmV3V2luZG93W3RoaXMuaWRdO1xuXHRcdH1cblx0XHRnZXRQcmludEZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gdGhpbmsgYWJvdXQgdGhpcyBzb21lIG1vcmVcblx0XHRcdC8vIHRoaXMuaWQgYW5kIHRoaXMuYXJ0aWNsZSBzaG91bGQgYWxyZWFkeSBiZSBkZWZpbmVkXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuaWQgIT09IHR5cGVvZiAnJyB8fCB0eXBlb2YgdGhpcy5hcnRpY2xlICE9PSB0eXBlb2Yge30pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ub1BvcHVwID0gMTtcblx0XHRcdHN3aXRjaCAodGhpcy5pZCkge1xuXHRcdFx0XHRjYXNlICdjb250cmlicyc6XG5cdFx0XHRcdGNhc2UgJ2hpc3RvcnknOlxuXHRcdFx0XHRjYXNlICd3aGF0TGlua3NIZXJlJzpcblx0XHRcdFx0Y2FzZSAndXNlclBhZ2UnOlxuXHRcdFx0XHRjYXNlICd1c2VyVGFsayc6XG5cdFx0XHRcdGNhc2UgJ3RhbGsnOlxuXHRcdFx0XHRjYXNlICdhcnRpY2xlJzpcblx0XHRcdFx0Y2FzZSAnbGFzdEVkaXQnOlxuXHRcdFx0XHRcdHRoaXMubm9Qb3B1cCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHRoaXMuaWQpIHtcblx0XHRcdFx0Y2FzZSAnZW1haWwnOlxuXHRcdFx0XHRjYXNlICdjb250cmlicyc6XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrJzpcblx0XHRcdFx0Y2FzZSAndW5ibG9jayc6XG5cdFx0XHRcdGNhc2UgJ3VzZXJsb2cnOlxuXHRcdFx0XHRjYXNlICd1c2VyU3BhY2UnOlxuXHRcdFx0XHRjYXNlICdkZWxldGVkQ29udHJpYnMnOlxuXHRcdFx0XHRcdHRoaXMuYXJ0aWNsZSA9IHRoaXMuYXJ0aWNsZS51c2VyTmFtZSgpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoICh0aGlzLmlkKSB7XG5cdFx0XHRcdGNhc2UgJ3VzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAnbmV3VXNlclRhbGsnOlxuXHRcdFx0XHRjYXNlICdlZGl0VXNlclRhbGsnOlxuXHRcdFx0XHRjYXNlICd1c2VyUGFnZSc6XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrbG9nJzpcblx0XHRcdFx0XHR0aGlzLmFydGljbGUgPSB0aGlzLmFydGljbGUudXNlck5hbWUodHJ1ZSk7XG5cdFx0XHRcdC8qIGZhbGxzIHRocm91Z2ggKi9cblx0XHRcdFx0Y2FzZSAncGFnZWxvZyc6XG5cdFx0XHRcdGNhc2UgJ2RlbGV0ZWxvZyc6XG5cdFx0XHRcdGNhc2UgJ3Byb3RlY3Rsb2cnOlxuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLm9sZGlkO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuaWQgIT09ICdtYWlubGluaycpIHtcblx0XHRcdFx0Ly8gRklYTUUgYW5jaG9yIGhhbmRsaW5nIHNob3VsZCBiZSBkb25lIGRpZmZlcmVudGx5IHdpdGggVGl0bGUgb2JqZWN0XG5cdFx0XHRcdHRoaXMuYXJ0aWNsZSA9IHRoaXMuYXJ0aWNsZS5yZW1vdmVBbmNob3IoKTtcblx0XHRcdFx0Ly8gaWYgKHR5cGVvZiB0aGlzLnRleHQ9PSd1bmRlZmluZWQnKSB7IHRoaXMudGV4dD1wb3B1cFN0cmluZyh0aGlzLmlkKTsgfVxuXHRcdFx0fVxuXHRcdFx0c3dpdGNoICh0aGlzLmlkKSB7XG5cdFx0XHRcdGNhc2UgJ3VuZGVsZXRlJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdVbmRlbGV0ZSc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnLyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3doYXRMaW5rc0hlcmUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1doYXRsaW5rc2hlcmUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZWxhdGVkQ2hhbmdlcyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnUmVjZW50Y2hhbmdlc2xpbmtlZCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21vdmUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ01vdmVwYWdlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY29udHJpYnMnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0NvbnRyaWJ1dGlvbnMnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkZWxldGVkQ29udHJpYnMnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0RlbGV0ZWRjb250cmlidXRpb25zJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZW1haWwnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0VtYWlsVXNlcic7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnLyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdCbG9ja2lwJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcmaXA9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndW5ibG9jayc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnSXBibG9ja2xpc3QnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZhY3Rpb249dW5ibG9jayZpcD0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1c2VybG9nJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdMb2cnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZ1c2VyPSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrbG9nJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdMb2cnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZ0eXBlPWJsb2NrJnBhZ2U9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncGFnZWxvZyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnTG9nJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcmcGFnZT0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdwcm90ZWN0bG9nJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdMb2cnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZ0eXBlPXByb3RlY3QmcGFnZT0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkZWxldGVsb2cnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0xvZyc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJnR5cGU9ZGVsZXRlJnBhZ2U9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndXNlclNwYWNlJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdQcmVmaXhJbmRleCc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJm5hbWVzcGFjZT0yJnByZWZpeD0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzZWFyY2gnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1NlYXJjaCc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJmZ1bGx0ZXh0PVNlYXJjaCZzZWFyY2g9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndGhhbmsnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1RoYW5rcyc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnLyc7XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlLnZhbHVlID0gdGhpcy5kaWZmID09PSAncHJldicgPyB0aGlzLm9sZGlkIDogdGhpcy5kaWZmO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bndhdGNoJzpcblx0XHRcdFx0Y2FzZSAnd2F0Y2gnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBtYWdpY1dhdGNoTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9IGAke3RoaXMuaWR9JmF1dG93YXRjaGxpc3Q9MSZhdXRvaW1wbD0ke3BvcHVwU3RyaW5nKFxuXHRcdFx0XHRcdFx0J2F1dG9lZGl0X3ZlcnNpb24nXG5cdFx0XHRcdFx0KX0mYWN0b2tlbj0ke2F1dG9DbGlja1Rva2VuKCl9YDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaGlzdG9yeSc6XG5cdFx0XHRcdGNhc2UgJ2hpc3RvcnlmZWVkJzpcblx0XHRcdFx0Y2FzZSAndW5wcm90ZWN0Jzpcblx0XHRcdFx0Y2FzZSAncHJvdGVjdCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gdGhpcy5pZDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZGVsZXRlJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnZGVsZXRlJztcblx0XHRcdFx0XHRpZiAodGhpcy5hcnRpY2xlLm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zSW1hZ2VJZCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgaW1nID0gdGhpcy5hcnRpY2xlLnN0cmlwTmFtZXNwYWNlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmFjdGlvbiArPSBgJmltYWdlPSR7aW1nfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtYXJrcGF0cm9sbGVkJzpcblx0XHRcdFx0Y2FzZSAnZWRpdCc6XG5cdFx0XHRcdFx0Ly8gZWRpdE9sZCBzaG91bGQga2VlcCB0aGUgb2xkaWQsIGJ1dCBlZGl0IHNob3VsZCBub3QuXG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMub2xkaWQ7XG5cdFx0XHRcdC8qIGZhbGxzIHRocm91Z2ggKi9cblx0XHRcdFx0Y2FzZSAndmlldyc6XG5cdFx0XHRcdGNhc2UgJ3B1cmdlJzpcblx0XHRcdFx0Y2FzZSAncmVuZGVyJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSB0aGlzLmlkO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyYXcnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdyYXcnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICduZXcnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdlZGl0JnNlY3Rpb249bmV3Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbWFpbmxpbmsnOlxuXHRcdFx0XHRcdGlmICh0aGlzLnRleHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy5hcnRpY2xlLnRvU3RyaW5nKCkuZW50aWZ5KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFNpbXBsaWZ5TWFpbkxpbmsnKSAmJiBpc0luU3RyaXBwYWJsZU5hbWVzcGFjZSh0aGlzLmFydGljbGUpKSB7XG5cdFx0XHRcdFx0XHQvLyBvbmx5IHNob3cgdGhlIC9zdWJwYWdlIHBhcnQgb2YgdGhlIHRpdGxlIHRleHRcblx0XHRcdFx0XHRcdGNvbnN0IHMgPSB0aGlzLnRleHQuc3BsaXQoJy8nKTtcblx0XHRcdFx0XHRcdHRoaXMudGV4dCA9IHMuYXQoLTEpO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMudGV4dCA9PT0gJycgJiYgcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGV4dCA9IHMuYXQoLTIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkV2lraUxpbms7XG5cdFx0XHRcdFx0aWYgKHRoaXMudGl0bGUgPT09IHVuZGVmaW5lZCAmJiBwZy5jdXJyZW50LmxpbmsgJiYgcGcuY3VycmVudC5saW5rLmhyZWYgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy50aXRsZSA9IHNhZmVEZWNvZGVVUkkocGcuY3VycmVudC5saW5rLm9yaWdpbmFsVGl0bGUgPz8gdGhpcy5hcnRpY2xlKTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLm9sZGlkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vbGRpZCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRpdGxlID0gdHByaW50ZignUmV2aXNpb24gJXMgb2YgJXMnLCBbdGhpcy5vbGRpZCwgdGhpcy50aXRsZV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICd2aWV3Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndXNlclBhZ2UnOlxuXHRcdFx0XHRjYXNlICdhcnRpY2xlJzpcblx0XHRcdFx0Y2FzZSAnZWRpdEFydGljbGUnOlxuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLm9sZGlkO1xuXHRcdFx0XHRcdC8vIG13Lm5vdGlmeShgJHt0aGlzLmlkfVxcbiR7dGhpcy5hcnRpY2xlfVxcbiR7dHlwZW9mIHRoaXMuYXJ0aWNsZX1gLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLmFydGljbGVGcm9tVGFsa09yQXJ0aWNsZSgpO1xuXHRcdFx0XHRcdC8vIG13Lm5vdGlmeShgJHt0aGlzLmlkfVxcbiR7dGhpcy5hcnRpY2xlfVxcbiR7dHlwZW9mIHRoaXMuYXJ0aWNsZX1gLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gdGhpcy5pZC5pbmRleE9mKCdlZGl0JykgPT09IDAgPyAnZWRpdCcgOiAndmlldyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3VzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAndGFsayc6XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLnRhbGtQYWdlKCk7XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMub2xkaWQ7XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ3ZpZXcnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdhcmluJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gYXJpbkxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NvdW50Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gZWRpdENvdW50ZXJMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdlZGl0b3JzJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gZWRpdG9yTGlzdExpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2xhc3RFZGl0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkRGlmZkxpbms7XG5cdFx0XHRcdFx0dGhpcy50aXRsZSA9IHBvcHVwU3RyaW5nKCdTaG93IHRoZSBsYXN0IGVkaXQnKTtcblx0XHRcdFx0XHR0aGlzLmZyb20gPSAncHJldic7XG5cdFx0XHRcdFx0dGhpcy50byA9ICdjdXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdvbGRFZGl0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkRGlmZkxpbms7XG5cdFx0XHRcdFx0dGhpcy50aXRsZSA9IGAke3BvcHVwU3RyaW5nKCdTaG93IHRoZSBlZGl0IG1hZGUgdG8gZ2V0IHJldmlzaW9uJyl9ICR7dGhpcy5vbGRpZH1gO1xuXHRcdFx0XHRcdHRoaXMuZnJvbSA9ICdwcmV2Jztcblx0XHRcdFx0XHR0aGlzLnRvID0gdGhpcy5vbGRpZDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZWRpdE9sZCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ2VkaXQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bmRvJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnZWRpdCZ1bmRvPSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JldmVydCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ3JldmVydCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ251bGxFZGl0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnbnVsbEVkaXQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkaWZmQ3VyJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkRGlmZkxpbms7XG5cdFx0XHRcdFx0dGhpcy50aXRsZSA9IHRwcmludGYoJ1Nob3cgY2hhbmdlcyBzaW5jZSByZXZpc2lvbiAlcycsIFt0aGlzLm9sZGlkXSk7XG5cdFx0XHRcdFx0dGhpcy5mcm9tID0gdGhpcy5vbGRpZDtcblx0XHRcdFx0XHR0aGlzLnRvID0gJ2N1cic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2VkaXRVc2VyVGFsayc6XG5cdFx0XHRcdGNhc2UgJ2VkaXRUYWxrJzpcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5vbGRpZDtcblx0XHRcdFx0XHR0aGlzLmFydGljbGUgPSB0aGlzLmFydGljbGUudGFsa1BhZ2UoKTtcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdlZGl0Jztcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ25ld1VzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAnbmV3VGFsayc6XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLnRhbGtQYWdlKCk7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnZWRpdCZzZWN0aW9uPW5ldyc7XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdsYXN0Q29udHJpYic6XG5cdFx0XHRcdGNhc2UgJ3NpbmNlTWUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBtYWdpY0hpc3RvcnlMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd0b2dnbGVQcmV2aWV3cyc6XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gcG9wdXBTdHJpbmcocGcub3B0aW9uLnNpbXBsZVBvcHVwcyA/ICdlbmFibGUgcHJldmlld3MnIDogJ2Rpc2FibGUgcHJldmlld3MnKTtcblx0XHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdFx0XHRjYXNlICdkaXNhYmxlUG9wdXBzJzpcblx0XHRcdFx0Y2FzZSAncHVyZ2VQb3B1cHMnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBwb3B1cE1lbnVMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYFVua25vd24gbmF2bGluayB0eXBlOiAke3RoaXMuaWR9YDtcblx0XHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvL1xuXHQvLyAgZW5kIG5hdmxpbmtzXG5cdC8vIEVOREZJTEU6IG5hdmxpbmtzLmpzXG5cdC8vIFNUQVJURklMRTogc2hvcnRjdXRrZXlzLmpzXG5cdGNvbnN0IHBvcHVwSGFuZGxlS2V5cHJlc3MgPSBmdW5jdGlvbiBwb3B1cEhhbmRsZUtleXByZXNzKGV2dCkge1xuXHRcdGNvbnN0IGtleUNvZGUgPSB3aW5kb3cuZXZlbnQgPyB3aW5kb3cuZXZlbnQua2V5Q29kZSA6IChldnQua2V5Q29kZSA/PyBldnQud2hpY2gpO1xuXHRcdGlmICgha2V5Q29kZSB8fCAhcGcuY3VycmVudC5saW5rIHx8ICFwZy5jdXJyZW50LmxpbmsubmF2cG9wdXApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGtleUNvZGUgPT09IDI3KSB7XG5cdFx0XHQvLyBlc2NhcGVcblx0XHRcdGtpbGxQb3B1cCgpO1xuXHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBzd2FsbG93IGtleXByZXNzXG5cdFx0fVxuXHRcdGNvbnN0IGxldHRlciA9IFN0cmluZy5mcm9tQ29kZVBvaW50KGtleUNvZGUpO1xuXHRcdGNvbnN0IGxpbmtzID0gcGcuY3VycmVudC5saW5rLm5hdnBvcHVwLm1haW5EaXYucXVlcnlTZWxlY3RvckFsbCgnQScpO1xuXHRcdGxldCBzdGFydExpbmsgPSAwO1xuXHRcdGxldCBpO1xuXHRcdGxldCBqO1xuXHRcdGlmIChwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCkge1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChsaW5rc1tpXSA9PT0gcG9wdXBIYW5kbGVLZXlwcmVzcy5sYXN0UG9wdXBMaW5rU2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRzdGFydExpbmsgPSBpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaiA9IDA7IGogPCBsaW5rcy5sZW5ndGg7ICsraikge1xuXHRcdFx0aSA9IChzdGFydExpbmsgKyBqICsgMSkgJSBsaW5rcy5sZW5ndGg7XG5cdFx0XHRpZiAobGlua3NbaV0uZ2V0QXR0cmlidXRlKCdwb3B1cGtleScpID09PSBsZXR0ZXIpIHtcblx0XHRcdFx0aWYgKGV2dCAmJiBldnQucHJldmVudERlZmF1bHQpIHtcblx0XHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaW5rc1tpXS5mb2N1cygpO1xuXHRcdFx0XHRwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCA9IGxpbmtzW2ldO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIHN3YWxsb3cga2V5cHJlc3Ncblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGFzcyBrZXlwcmVzcyBvblxuXHRcdGlmIChkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MoZXZ0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cdGNvbnN0IGFkZFBvcHVwU2hvcnRjdXRzID0gKCkgPT4ge1xuXHRcdGlmIChkb2N1bWVudC5vbmtleXByZXNzICE9PSBwb3B1cEhhbmRsZUtleXByZXNzKSB7XG5cdFx0XHRkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MgPSBkb2N1bWVudC5vbmtleXByZXNzO1xuXHRcdH1cblx0XHRkb2N1bWVudC5vbmtleXByZXNzID0gcG9wdXBIYW5kbGVLZXlwcmVzcztcblx0fTtcblx0Y29uc3Qgcm1Qb3B1cFNob3J0Y3V0cyA9ICgpID0+IHtcblx0XHRwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCA9IG51bGw7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MgJiYgZG9jdW1lbnQub2xkUG9wdXBPbmtleXByZXNzID09PSBwb3B1cEhhbmRsZUtleXByZXNzKSB7XG5cdFx0XHRcdC8vIHBhbmljXG5cdFx0XHRcdGRvY3VtZW50Lm9ua2V5cHJlc3MgPSBudWxsOyAvLyAoKSA9PiB7fTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0ZG9jdW1lbnQub25rZXlwcmVzcyA9IGRvY3VtZW50Lm9sZFBvcHVwT25rZXlwcmVzcztcblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIElFIGdvZXMgaGVyZSAqL1xuXHRcdH1cblx0fTtcblx0Y29uc3QgYWRkTGlua1Byb3BlcnR5ID0gKGh0bWwsIHByb3BlcnR5KSA9PiB7XG5cdFx0Ly8gdGFrZSBcIjxhIGhyZWY9Li4uPi4uLjwvYT4gYW5kIGFkZCBhIHByb3BlcnR5XG5cdFx0Ly8gbm90IHNvcGhpc3RpY2F0ZWQgYXQgYWxsLCBlYXNpbHkgYnJva2VuXG5cdFx0Y29uc3QgaSA9IGh0bWwuaW5kZXhPZignPicpO1xuXHRcdGlmIChpIDwgMCkge1xuXHRcdFx0cmV0dXJuIGh0bWw7XG5cdFx0fVxuXHRcdHJldHVybiBgJHtodG1sLnNsaWNlKDAsIE1hdGgubWF4KDAsIGkpKX0gJHtwcm9wZXJ0eX0ke2h0bWwuc2xpY2UoTWF0aC5tYXgoMCwgaSkpfWA7XG5cdH07XG5cdGNvbnN0IGFkZFBvcHVwU2hvcnRjdXQgPSAoaHRtbCwga2V5KSA9PiB7XG5cdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cFNob3J0Y3V0S2V5cycpKSB7XG5cdFx0XHRyZXR1cm4gaHRtbDtcblx0XHR9XG5cdFx0Y29uc3QgcmV0ID0gYWRkTGlua1Byb3BlcnR5KGh0bWwsIGBwb3B1cGtleT1cIiR7a2V5fVwiYCk7XG5cdFx0aWYgKGtleSA9PT0gJyAnKSB7XG5cdFx0XHRrZXkgPSBwb3B1cFN0cmluZygnc3BhY2ViYXInKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldC5yZXBsYWNlKC9eKC4qPykodGl0bGU9XCIpKC4qPykoXCIuKikkL2ksIGAkMSQyJDMgWyR7a2V5fV0kNGApO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBzaG9ydGN1dGtleXMuanNcblx0Ly8gU1RBUlRGSUxFOiBkaWZmcHJldmlldy5qc1xuXHQvLyBsZXRzIGp1bXAgdGhyb3VnaCBob29wcyB0byBmaW5kIHRoZSByZXYgaWRzIHdlIG5lZWQgdG8gcmV0cmlldmVcblx0Y29uc3QgbG9hZERpZmYgPSAoYXJ0aWNsZSwgb2xkaWQsIGRpZmYsIG5hdnBvcCkgPT4ge1xuXHRcdG5hdnBvcC5kaWZmRGF0YSA9IHtcblx0XHRcdG9sZFJldjoge30sXG5cdFx0XHRuZXdSZXY6IHt9LFxuXHRcdH07XG5cdFx0Y29uc3QgYXBpID0gZ2V0TXdBcGkoKTtcblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdjb21wYXJlJyxcblx0XHRcdHByb3A6IFsnaWRzJywgJ3RpdGxlJ10sXG5cdFx0XHRzbWF4YWdlOiAzNjAwLFxuXHRcdFx0bWF4YWdlOiAzNjAwLFxuXHRcdH07XG5cdFx0aWYgKGFydGljbGUudGl0bGUpIHtcblx0XHRcdHBhcmFtcy5mcm9tdGl0bGUgPSBhcnRpY2xlLnRpdGxlO1xuXHRcdH1cblx0XHRzd2l0Y2ggKGRpZmYpIHtcblx0XHRcdGNhc2UgJ2N1cic6XG5cdFx0XHRcdHN3aXRjaCAob2xkaWQpIHtcblx0XHRcdFx0XHRjYXNlIG51bGw6XG5cdFx0XHRcdFx0Y2FzZSAnJzpcblx0XHRcdFx0XHRjYXNlICdwcmV2Jzpcblx0XHRcdFx0XHRcdC8vIHRoaXMgY2FuIG9ubHkgd29yayBpZiB3ZSBoYXZlIHRoZSB0aXRsZVxuXHRcdFx0XHRcdFx0Ly8gY3VyIC0+IHByZXZcblx0XHRcdFx0XHRcdHBhcmFtcy50b3JlbGF0aXZlID0gJ3ByZXYnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHBhcmFtcy5mcm9tcmV2ID0gb2xkaWQ7XG5cdFx0XHRcdFx0XHRwYXJhbXMudG9yZWxhdGl2ZSA9ICdjdXInO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdwcmV2Jzpcblx0XHRcdFx0aWYgKG9sZGlkKSB7XG5cdFx0XHRcdFx0cGFyYW1zLmZyb21yZXYgPSBvbGRpZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRwYXJhbXMudG9yZWxhdGl2ZSA9ICdwcmV2Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICduZXh0Jzpcblx0XHRcdFx0cGFyYW1zLmZyb21yZXYgPSBvbGRpZCB8fCAwO1xuXHRcdFx0XHRwYXJhbXMudG9yZWxhdGl2ZSA9ICduZXh0Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRwYXJhbXMuZnJvbXJldiA9IG9sZGlkIHx8IDA7XG5cdFx0XHRcdHBhcmFtcy50b3JldiA9IGRpZmYgfHwgMDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGFwaS5nZXQocGFyYW1zKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkID0gZGF0YS5jb21wYXJlLmZyb21yZXZpZDtcblx0XHRcdG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWQgPSBkYXRhLmNvbXBhcmUudG9yZXZpZDtcblx0XHRcdGFkZFJldmlld0xpbmsobmF2cG9wLCAncG9wdXBNaXNjVG9vbHMnKTtcblx0XHRcdGNvbnN0IGdvID0gKCkgPT4ge1xuXHRcdFx0XHRwZW5kaW5nTmF2cG9wVGFzayhuYXZwb3ApO1xuXHRcdFx0XHRsZXQgdXJsID0gYCR7cGcud2lraS5hcGl3aWtpYmFzZX0/Zm9ybWF0PWpzb24mZm9ybWF0dmVyc2lvbj0yJmFjdGlvbj1xdWVyeSZgO1xuXHRcdFx0XHR1cmwgKz0gYHJldmlkcz0ke25hdnBvcC5kaWZmRGF0YS5vbGRSZXYucmV2aWR9fCR7bmF2cG9wLmRpZmZEYXRhLm5ld1Jldi5yZXZpZH1gO1xuXHRcdFx0XHR1cmwgKz0gJyZwcm9wPXJldmlzaW9ucyZydnByb3A9aWRzfHRpbWVzdGFtcHxjb250ZW50Jztcblx0XHRcdFx0Z2V0UGFnZVdpdGhDYWNoaW5nKHVybCwgZG9uZURpZmYsIG5hdnBvcCk7XG5cdFx0XHRcdHJldHVybiB0cnVlOyAvLyByZW1vdmUgaG9vayBvbmNlIHJ1blxuXHRcdFx0fTtcblx0XHRcdGlmIChuYXZwb3AudmlzaWJsZSB8fCAhZ2V0VmFsdWVPZigncG9wdXBMYXp5RG93bmxvYWRzJykpIHtcblx0XHRcdFx0Z28oKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5hdnBvcC5hZGRIb29rKGdvLCAndW5oaWRlJywgJ2JlZm9yZScsICdET1dOTE9BRF9ESUZGUycpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHQvLyBQdXQgYSBcIm1hcmsgcGF0cm9sbGVkXCIgbGluayB0byBhbiBlbGVtZW50IHRhcmdldFxuXHQvLyBUT0RPOiBBbGxvdyBwYXRyb2wgYSByZXZpc2lvbiwgYXMgd2VsbCBhcyBhIGRpZmZcblx0Y29uc3QgYWRkUmV2aWV3TGluayA9IChuYXZwb3AsIHRhcmdldCkgPT4ge1xuXHRcdGlmICghcGcudXNlci5jYW5SZXZpZXcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gSWYgJ25ld1JldicgaXMgb2xkZXIgdGhhbiAnb2xkUmV2JyB0aGFuIGl0IGNvdWxkIGJlIGNvbmZ1c2luZywgc28gd2UgZG8gbm90IHNob3cgdGhlIHJldmlldyBsaW5rLlxuXHRcdGlmIChuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlkIDw9IG5hdnBvcC5kaWZmRGF0YS5vbGRSZXYucmV2aWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRwcm9wOiBbJ2luZm8nLCAnZmxhZ2dlZCddLFxuXHRcdFx0cmV2aWRzOiBuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkLFxuXHRcdH07XG5cdFx0Z2V0TXdBcGkoKVxuXHRcdFx0LmdldChwYXJhbXMpXG5cdFx0XHQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zdCBzdGFibGVfcmV2aWQgPSAoZGF0YS5xdWVyeS5wYWdlc1swXS5mbGFnZ2VkICYmIGRhdGEucXVlcnkucGFnZXNbMF0uZmxhZ2dlZC5zdGFibGVfcmV2aWQpIHx8IDA7XG5cdFx0XHRcdC8vIFRoZSBkaWZmIGNhbiBiZSByZXZpZXdlZCBpZiB0aGUgb2xkIHZlcnNpb24gaXMgdGhlIGxhc3QgcmV2aWV3ZWQgdmVyc2lvblxuXHRcdFx0XHQvLyBUT0RPOiBPdGhlciBwb3NzaWJsZSBjb25kaXRpb25zIHRoYXQgd2UgbWF5IHdhbnQgdG8gaW1wbGVtZW50IGluc3RlYWQgb2YgdGhpcyBvbmU6XG5cdFx0XHRcdC8vIC0gb2xkIHZlcnNpb24gaXMgcGF0cm9sbGVkIGFuZCB0aGUgbmV3IHZlcnNpb24gaXMgbm90IHBhdHJvbGxlZFxuXHRcdFx0XHQvLyAtIG9sZCB2ZXJzaW9uIGlzIHBhdHJvbGxlZCBhbmQgdGhlIG5ldyB2ZXJzaW9uIGlzIG1vcmUgcmVjZW50IHRoYW4gdGhlIGxhc3QgcmV2aWV3ZWQgdmVyc2lvblxuXHRcdFx0XHRpZiAoc3RhYmxlX3JldmlkID09PSBuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkKSB7XG5cdFx0XHRcdFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdFx0XHRhLmlubmVySFRNTCA9IHBvcHVwU3RyaW5nKCdtYXJrIHBhdHJvbGxlZCcpO1xuXHRcdFx0XHRcdGEudGl0bGUgPSBwb3B1cFN0cmluZygnbWFya3BhdHJvbGxlZEhpbnQnKTtcblx0XHRcdFx0XHRhLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdFx0XHRcdGFjdGlvbjogJ3JldmlldycsXG5cdFx0XHRcdFx0XHRcdGNvbW1lbnQ6IHRwcmludGYoJ2RlZmF1bHRwb3B1cFJldmlld2VkU3VtbWFyeScsIFtcblx0XHRcdFx0XHRcdFx0XHRuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkLFxuXHRcdFx0XHRcdFx0XHRcdG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWQsXG5cdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRyZXZpZDogbmF2cG9wLmRpZmZEYXRhLm5ld1Jldi5yZXZpZCxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRnZXRNd0FwaSgpXG5cdFx0XHRcdFx0XHRcdC5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW1zKVxuXHRcdFx0XHRcdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0YS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdFx0XHRcdC8vIFRPRE86IFVwZGF0ZSBjdXJyZW50IHBhZ2UgYW5kIG90aGVyIGFscmVhZHkgY29uc3RydWN0ZWQgcG9wdXBzXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdC5mYWlsKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShwb3B1cFN0cmluZygnQ291bGQgbm90IG1hcmtlZCB0aGlzIGVkaXQgYXMgcGF0cm9sbGVkJyksIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ3BvcHVwcycsXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHNldFBvcHVwSFRNTChhLCB0YXJnZXQsIG5hdnBvcC5pZE51bWJlciwgbnVsbCwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBkb25lRGlmZiA9IChkb3dubG9hZCkgPT4ge1xuXHRcdGlmICghZG93bmxvYWQub3duZXIgfHwgIWRvd25sb2FkLm93bmVyLmRpZmZEYXRhKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IG5hdnBvcCA9IGRvd25sb2FkLm93bmVyO1xuXHRcdGNvbXBsZXRlZE5hdnBvcFRhc2sobmF2cG9wKTtcblx0XHRsZXQgcGFnZXM7XG5cdFx0bGV0IHJldmlzaW9ucyA9IFtdO1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBQcm9jZXNzIHRoZSBkb3dubG9hZHNcblx0XHRcdCh7cGFnZXN9ID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSkucXVlcnkpO1xuXHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHBhZ2VzKSB7XG5cdFx0XHRcdHJldmlzaW9ucyA9IFsuLi5yZXZpc2lvbnMsIC4uLnBhZ2UucmV2aXNpb25zXTtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3QgcmV2aXNpb24gb2YgcmV2aXNpb25zKSB7XG5cdFx0XHRcdGlmIChyZXZpc2lvbi5yZXZpZCA9PT0gbmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCkge1xuXHRcdFx0XHRcdG5hdnBvcC5kaWZmRGF0YS5vbGRSZXYucmV2aXNpb24gPSByZXZpc2lvbjtcblx0XHRcdFx0fSBlbHNlIGlmIChyZXZpc2lvbi5yZXZpZCA9PT0gbmF2cG9wLmRpZmZEYXRhLm5ld1Jldi5yZXZpZCkge1xuXHRcdFx0XHRcdG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aXNpb24gPSByZXZpc2lvbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0ZXJybG9nKCdDb3VsZCBub3QgZ2V0IGRpZmYnKTtcblx0XHR9XG5cdFx0aW5zZXJ0RGlmZihuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBybUJvcmluZ0xpbmVzID0gKGEsIGIsIGNvbnRleHQpID0+IHtcblx0XHRpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb250ZXh0ID0gMjtcblx0XHR9XG5cdFx0Ly8gdGhpcyBpcyBmYWlybHkgc2xvdy4uLiBpIHRoaW5rIGl0J3MgcXVpY2tlciB0aGFuIGRvaW5nIGEgd29yZC1iYXNlZCBkaWZmIGZyb20gdGhlIG9mZiwgdGhvdWdoXG5cdFx0Y29uc3QgYWEgPSBbXTtcblx0XHRjb25zdCBhYWEgPSBbXTtcblx0XHRjb25zdCBiYiA9IFtdO1xuXHRcdGNvbnN0IGJiYiA9IFtdO1xuXHRcdGxldCBpO1xuXHRcdGxldCBqO1xuXHRcdC8vIGZpcnN0LCBnYXRoZXIgYWxsIGRpc2Nvbm5lY3RlZCBub2RlcyBpbiBhIGFuZCBhbGwgY3Jvc3Npbmcgbm9kZXMgaW4gYSBhbmQgYlxuXHRcdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoIWFbaV0ucGFpcmVkKSB7XG5cdFx0XHRcdGFhW2ldID0gMTtcblx0XHRcdH0gZWxzZSBpZiAoY291bnRDcm9zc2luZ3MoYiwgYSwgaSwgdHJ1ZSkpIHtcblx0XHRcdFx0YWFbaV0gPSAxO1xuXHRcdFx0XHRiYlthW2ldLnJvd10gPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBwaWNrIHVwIHJlbWFpbmluZyBkaXNjb25uZWN0ZWQgbm9kZXMgaW4gYlxuXHRcdGZvciAoaSA9IDA7IGkgPCBiLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoYmJbaV0gPT09IDEpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWJbaV0ucGFpcmVkKSB7XG5cdFx0XHRcdGJiW2ldID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gYW5vdGhlciBwYXNzIHRvIGdhdGhlciBjb250ZXh0OiB3ZSB3YW50IHRoZSBuZWlnaGJvdXJzIG9mIGluY2x1ZGVkIG5vZGVzIHdoaWNoIGFyZSBub3Rcblx0XHQvLyB5ZXQgaW5jbHVkZWQgd2UgaGF2ZSB0byBhZGQgaW4gcGFydG5lcnMgb2YgdGhlc2Ugbm9kZXMsIGJ1dCB3ZSBkb24ndCB3YW50IHRvIGFkZCBjb250ZXh0XG5cdFx0Ly8gZm9yICp0aG9zZSogbm9kZXMgaW4gdGhlIG5leHQgcGFzc1xuXHRcdGZvciAoaSA9IDA7IGkgPCBiLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoYmJbaV0gPT09IDEpIHtcblx0XHRcdFx0Zm9yIChqID0gTWF0aC5tYXgoMCwgaSAtIGNvbnRleHQpOyBqIDwgTWF0aC5taW4oYi5sZW5ndGgsIGkgKyBjb250ZXh0KTsgKytqKSB7XG5cdFx0XHRcdFx0aWYgKCFiYltqXSkge1xuXHRcdFx0XHRcdFx0YmJbal0gPSAxO1xuXHRcdFx0XHRcdFx0YWFbYltqXS5yb3ddID0gMC41O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGFhW2ldID09PSAxKSB7XG5cdFx0XHRcdGZvciAoaiA9IE1hdGgubWF4KDAsIGkgLSBjb250ZXh0KTsgaiA8IE1hdGgubWluKGEubGVuZ3RoLCBpICsgY29udGV4dCk7ICsraikge1xuXHRcdFx0XHRcdGlmICghYWFbal0pIHtcblx0XHRcdFx0XHRcdGFhW2pdID0gMTtcblx0XHRcdFx0XHRcdGJiW2Fbal0ucm93XSA9IDAuNTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChpID0gMDsgaSA8IGJiLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoYmJbaV0gPiAwKSB7XG5cdFx0XHRcdC8vIGl0J3MgYSByb3cgd2UgbmVlZFxuXHRcdFx0XHRpZiAoYltpXS5wYWlyZWQpIHtcblx0XHRcdFx0XHRiYmIucHVzaChiW2ldLnRleHQpOyAvLyBqb2luZWQ7IHBhcnRuZXIgc2hvdWxkIGJlIGluIGFhXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YmJiLnB1c2goYltpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChpID0gMDsgaSA8IGFhLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoYWFbaV0gPiAwKSB7XG5cdFx0XHRcdC8vIGl0J3MgYSByb3cgd2UgbmVlZFxuXHRcdFx0XHRpZiAoYVtpXS5wYWlyZWQpIHtcblx0XHRcdFx0XHRhYWEucHVzaChhW2ldLnRleHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIGpvaW5lZDsgcGFydG5lciBzaG91bGQgYmUgaW4gYWFcblx0XHRcdFx0XHRhYWEucHVzaChhW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0YTogYWFhLFxuXHRcdFx0YjogYmJiLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IHN0cmlwT3V0ZXJDb21tb25MaW5lcyA9IChhLCBiLCBjb250ZXh0KSA9PiB7XG5cdFx0bGV0IGkgPSAwO1xuXHRcdHdoaWxlIChpIDwgYS5sZW5ndGggJiYgaSA8IGIubGVuZ3RoICYmIGFbaV0gPT09IGJbaV0pIHtcblx0XHRcdCsraTtcblx0XHR9XG5cdFx0bGV0IGogPSBhLmxlbmd0aCAtIDE7XG5cdFx0bGV0IGsgPSBiLmxlbmd0aCAtIDE7XG5cdFx0d2hpbGUgKGogPj0gMCAmJiBrID49IDAgJiYgYVtqXSA9PT0gYltrXSkge1xuXHRcdFx0LS1qO1xuXHRcdFx0LS1rO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0YTogYS5zbGljZShNYXRoLm1heCgwLCBpIC0gMSAtIGNvbnRleHQpLCBNYXRoLm1pbihhLmxlbmd0aCArIDEsIGogKyBjb250ZXh0ICsgMSkpLFxuXHRcdFx0YjogYi5zbGljZShNYXRoLm1heCgwLCBpIC0gMSAtIGNvbnRleHQpLCBNYXRoLm1pbihiLmxlbmd0aCArIDEsIGsgKyBjb250ZXh0ICsgMSkpLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IGluc2VydERpZmYgPSAobmF2cG9wKSA9PiB7XG5cdFx0Ly8gZm9yIHNwZWVkIHJlYXNvbnMsIHdlIGZpcnN0IGRvIGEgbGluZS1iYXNlZCBkaWZmLCBkaXNjYXJkIHN0dWZmIHRoYXQgc2VlbXMgYm9yaW5nLCB0aGVuXG5cdFx0Ly8gZG8gYSB3b3JkLWJhc2VkIGRpZmZcblx0XHQvLyBGSVhNRTogc29tZXRpbWVzIHRoaXMgZ2l2ZXMgbWlzbGVhZGluZyBkaWZmcyBhcyBkaXN0YW50IGNodW5rcyBhcmUgc3F1YXNoZWQgdG9nZXRoZXJcblx0XHRsZXQgb2xkbGluZXMgPSBuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlzaW9uLmNvbnRlbnQuc3BsaXQoJ1xcbicpO1xuXHRcdGxldCBuZXdsaW5lcyA9IG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aXNpb24uY29udGVudC5zcGxpdCgnXFxuJyk7XG5cdFx0bGV0IGlubmVyID0gc3RyaXBPdXRlckNvbW1vbkxpbmVzKG9sZGxpbmVzLCBuZXdsaW5lcywgZ2V0VmFsdWVPZigncG9wdXBEaWZmQ29udGV4dExpbmVzJykpO1xuXHRcdG9sZGxpbmVzID0gaW5uZXIuYTtcblx0XHRuZXdsaW5lcyA9IGlubmVyLmI7XG5cdFx0bGV0IHRydW5jYXRlZCA9IGZhbHNlO1xuXHRcdGdldFZhbHVlT2YoJ3BvcHVwRGlmZk1heExpbmVzJyk7XG5cdFx0aWYgKG9sZGxpbmVzLmxlbmd0aCA+IHBnLm9wdGlvbi5wb3B1cERpZmZNYXhMaW5lcyB8fCBuZXdsaW5lcy5sZW5ndGggPiBwZy5vcHRpb24ucG9wdXBEaWZmTWF4TGluZXMpIHtcblx0XHRcdC8vIHRydW5jYXRlXG5cdFx0XHR0cnVuY2F0ZWQgPSB0cnVlO1xuXHRcdFx0aW5uZXIgPSBzdHJpcE91dGVyQ29tbW9uTGluZXMoXG5cdFx0XHRcdG9sZGxpbmVzLnNsaWNlKDAsIHBnLm9wdGlvbi5wb3B1cERpZmZNYXhMaW5lcyksXG5cdFx0XHRcdG5ld2xpbmVzLnNsaWNlKDAsIHBnLm9wdGlvbi5wb3B1cERpZmZNYXhMaW5lcyksXG5cdFx0XHRcdHBnLm9wdGlvbi5wb3B1cERpZmZDb250ZXh0TGluZXNcblx0XHRcdCk7XG5cdFx0XHRvbGRsaW5lcyA9IGlubmVyLmE7XG5cdFx0XHRuZXdsaW5lcyA9IGlubmVyLmI7XG5cdFx0fVxuXHRcdGNvbnN0IGxpbmVEaWZmID0gZGlmZihvbGRsaW5lcywgbmV3bGluZXMpO1xuXHRcdGNvbnN0IGxpbmVzMiA9IHJtQm9yaW5nTGluZXMobGluZURpZmYubywgbGluZURpZmYubik7XG5cdFx0Y29uc3Qgb2xkbGluZXMyID0gbGluZXMyLmE7XG5cdFx0Y29uc3QgbmV3bGluZXMyID0gbGluZXMyLmI7XG5cdFx0bGV0IGh0bWwgPSAnPGhyPic7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwRGlmZkRhdGVzJykpIHtcblx0XHRcdGh0bWwgKz0gZGlmZkRhdGVzVGFibGUobmF2cG9wKTtcblx0XHRcdGh0bWwgKz0gJzxocj4nO1xuXHRcdH1cblx0XHRodG1sICs9IHNob3J0ZW5EaWZmU3RyaW5nKFxuXHRcdFx0ZGlmZlN0cmluZyhvbGRsaW5lczIuam9pbignXFxuJyksIG5ld2xpbmVzMi5qb2luKCdcXG4nKSksXG5cdFx0XHRnZXRWYWx1ZU9mKCdwb3B1cERpZmZDb250ZXh0Q2hhcmFjdGVycycpXG5cdFx0KS5qb2luKCc8aHI+Jyk7XG5cdFx0c2V0UG9wdXBUaXBzQW5kSFRNTChcblx0XHRcdGh0bWwuc3BsaXQoJ1xcbicpLmpvaW4oJzxicj4nKSArXG5cdFx0XHRcdCh0cnVuY2F0ZWQgPyBgPGhyPjxiPiR7cG9wdXBTdHJpbmcoJ0RpZmYgdHJ1bmNhdGVkIGZvciBwZXJmb3JtYW5jZSByZWFzb25zJyl9PC9iPmAgOiAnJyksXG5cdFx0XHQncG9wdXBQcmV2aWV3Jyxcblx0XHRcdG5hdnBvcC5pZE51bWJlclxuXHRcdCk7XG5cdH07XG5cdGNvbnN0IGRpZmZEYXRlc1RhYmxlID0gKG5hdnBvcCkgPT4ge1xuXHRcdGxldCBodG1sID0gJzx0YWJsZSBjbGFzcz1cInBvcHVwX2RpZmZfZGF0ZXNcIj4nO1xuXHRcdGh0bWwgKz0gZGlmZkRhdGVzVGFibGVSb3cobmF2cG9wLmRpZmZEYXRhLm5ld1Jldi5yZXZpc2lvbiwgdHByaW50ZignTmV3IHJldmlzaW9uJykpO1xuXHRcdGh0bWwgKz0gZGlmZkRhdGVzVGFibGVSb3cobmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpc2lvbiwgdHByaW50ZignT2xkIHJldmlzaW9uJykpO1xuXHRcdGh0bWwgKz0gJzwvdGFibGU+Jztcblx0XHRyZXR1cm4gaHRtbDtcblx0fTtcblx0Y29uc3QgZGlmZkRhdGVzVGFibGVSb3cgPSAocmV2aXNpb24sIGxhYmVsKSA9PiB7XG5cdFx0bGV0IHR4dCA9ICcnO1xuXHRcdGNvbnN0IGxhc3RNb2RpZmllZERhdGUgPSBuZXcgRGF0ZShyZXZpc2lvbi50aW1lc3RhbXApO1xuXHRcdHR4dCA9IGZvcm1hdHRlZERhdGVUaW1lKGxhc3RNb2RpZmllZERhdGUpO1xuXHRcdGNvbnN0IHJldmxpbmsgPSBnZW5lcmFsTGluayh7XG5cdFx0XHR1cmw6IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0Jyl9P29sZGlkPSR7cmV2aXNpb24ucmV2aWR9YCxcblx0XHRcdHRleHQ6IGxhYmVsLFxuXHRcdFx0dGl0bGU6IGxhYmVsLFxuXHRcdH0pO1xuXHRcdHJldHVybiBzaW1wbGVQcmludGYoJzx0cj48dGQ+JXM8L3RkPjx0ZD4lczwvdGQ+PC90cj4nLCBbcmV2bGluaywgdHh0XSk7XG5cdH07XG5cdC8vIEVOREZJTEU6IGRpZmZwcmV2aWV3LmpzXG5cdC8vIFNUQVJURklMRTogbGlua3MuanNcblx0Ly8gTElOSyBHRU5FUkFUSU9OIC8vXG5cdC8vIHRpdGxlZERpZmZMaW5rIC0tPiB0aXRsZWRXaWtpTGluayAtLT4gZ2VuZXJhbExpbmtcblx0Ly8gd2lraUxpbmtcdCAgIC0tPiB0aXRsZWRXaWtpTGluayAtLT4gZ2VuZXJhbExpbmtcblx0Ly8gZWRpdENvdW50ZXJMaW5rIC0tPiBnZW5lcmFsTGlua1xuXHQvLyBUT0RPIE1ha2UgdGhlc2UgZnVuY3Rpb25zIHJldHVybiBFbGVtZW50IG9iamVjdHMsIG5vdCBqdXN0IHJhdyBIVE1MIHN0cmluZ3MuXG5cdGNvbnN0IHRpdGxlZERpZmZMaW5rID0gKGwpID0+IHtcblx0XHRyZXR1cm4gdGl0bGVkV2lraUxpbmsoe1xuXHRcdFx0YXJ0aWNsZTogbC5hcnRpY2xlLFxuXHRcdFx0YWN0aW9uOiBgJHtsLnRvfSZvbGRpZD0ke2wuZnJvbX1gLFxuXHRcdFx0bmV3V2luOiBsLm5ld1dpbixcblx0XHRcdG5vUG9wdXA6IGwubm9Qb3B1cCxcblx0XHRcdHRleHQ6IGwudGV4dCxcblx0XHRcdHRpdGxlOiBsLnRpdGxlLFxuXHRcdFx0LyogaGFjazogbm8gb2xkaWQgaGVyZSAqL1xuXHRcdFx0YWN0aW9uTmFtZTogJ2RpZmYnLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCB3aWtpTGluayA9IChsKSA9PiB7XG5cdFx0Ly8ge2FydGljbGU6YXJ0aWNsZSwgYWN0aW9uOmFjdGlvbiwgdGV4dDp0ZXh0LCBvbGRpZCwgbmV3aWR9KSB7XG5cdFx0aWYgKCEodHlwZW9mIGwuYXJ0aWNsZSA9PT0gdHlwZW9mIHt9ICYmIHR5cGVvZiBsLmFjdGlvbiA9PT0gdHlwZW9mICcnICYmIHR5cGVvZiBsLnRleHQgPT09IHR5cGVvZiAnJykpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAobC5vbGRpZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRsLm9sZGlkID0gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3Qgc2F2ZWRPbGRpZCA9IGwub2xkaWQ7XG5cdFx0aWYgKCEvXihlZGl0fHZpZXd8cmV2ZXJ0fHJlbmRlcikkfF5yYXcvLnRlc3QobC5hY3Rpb24pKSB7XG5cdFx0XHRsLm9sZGlkID0gbnVsbDtcblx0XHR9XG5cdFx0bGV0IGhpbnQgPSBwb3B1cFN0cmluZyhgJHtsLmFjdGlvbn1IaW50YCk7IC8vIHJldmVydEhpbnQgZXRjIGV0YyBldGNcblx0XHRjb25zdCBvbGRpZERhdGEgPSBbbC5vbGRpZCwgc2FmZURlY29kZVVSSShsLmFydGljbGUpXTtcblx0XHRsZXQgcmV2aXNpb25TdHJpbmcgPSB0cHJpbnRmKCdyZXZpc2lvbiAlcyBvZiAlcycsIG9sZGlkRGF0YSk7XG5cdFx0bG9nKGByZXZpc2lvblN0cmluZz0ke3JldmlzaW9uU3RyaW5nfWApO1xuXHRcdHN3aXRjaCAobC5hY3Rpb24pIHtcblx0XHRcdGNhc2UgJ2VkaXQmc2VjdGlvbj1uZXcnOlxuXHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ25ld1NlY3Rpb25IaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZWRpdCZ1bmRvPSc6XG5cdFx0XHRcdGlmIChsLmRpZmYgJiYgbC5kaWZmICE9PSAncHJldicgJiYgc2F2ZWRPbGRpZCkge1xuXHRcdFx0XHRcdGwuYWN0aW9uICs9IGAke2wuZGlmZn0mdW5kb2FmdGVyPSR7c2F2ZWRPbGRpZH1gO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNhdmVkT2xkaWQpIHtcblx0XHRcdFx0XHRsLmFjdGlvbiArPSBzYXZlZE9sZGlkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGhpbnQgPSBwb3B1cFN0cmluZygndW5kb0hpbnQnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdyYXcmY3R5cGU9dGV4dC9jc3MnOlxuXHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ3Jhd0hpbnQnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdyZXZlcnQnOiB7XG5cdFx0XHRcdGNvbnN0IHAgPSBwYXJzZVBhcmFtcyhwZy5jdXJyZW50LmxpbmsuaHJlZik7XG5cdFx0XHRcdGwuYWN0aW9uID0gYGVkaXQmYXV0b2NsaWNrPXdwU2F2ZSZhY3Rva2VuPSR7YXV0b0NsaWNrVG9rZW4oKX0mYXV0b2ltcGw9JHtwb3B1cFN0cmluZyhcblx0XHRcdFx0XHQnYXV0b2VkaXRfdmVyc2lvbidcblx0XHRcdFx0KX0mYXV0b3N1bW1hcnk9JHtyZXZlcnRTdW1tYXJ5KGwub2xkaWQsIHAuZGlmZil9YDtcblx0XHRcdFx0aWYgKHAuZGlmZiA9PT0gJ3ByZXYnKSB7XG5cdFx0XHRcdFx0bC5hY3Rpb24gKz0gJyZkaXJlY3Rpb249cHJldic7XG5cdFx0XHRcdFx0cmV2aXNpb25TdHJpbmcgPSB0cHJpbnRmKCd0aGUgcmV2aXNpb24gcHJpb3IgdG8gcmV2aXNpb24gJXMgb2YgJXMnLCBvbGRpZERhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFJldmVydFN1bW1hcnlQcm9tcHQnKSkge1xuXHRcdFx0XHRcdGwuYWN0aW9uICs9ICcmYXV0b3N1bW1hcnlwcm9tcHQ9dHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwTWlub3JSZXZlcnRzJykpIHtcblx0XHRcdFx0XHRsLmFjdGlvbiArPSAnJmF1dG9taW5vcj10cnVlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRsb2coYHJldmlzaW9uU3RyaW5nIGlzIG5vdyAke3JldmlzaW9uU3RyaW5nfWApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ251bGxFZGl0Jzpcblx0XHRcdFx0bC5hY3Rpb24gPSBgZWRpdCZhdXRvY2xpY2s9d3BTYXZlJmFjdG9rZW49JHthdXRvQ2xpY2tUb2tlbigpfSZhdXRvaW1wbD0ke3BvcHVwU3RyaW5nKFxuXHRcdFx0XHRcdCdhdXRvZWRpdF92ZXJzaW9uJ1xuXHRcdFx0XHQpfSZhdXRvc3VtbWFyeT1udWxsYDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoaXN0b3J5ZmVlZCc6XG5cdFx0XHRcdGwuYWN0aW9uID0gJ2hpc3RvcnkmZmVlZD1yc3MnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ21hcmtwYXRyb2xsZWQnOlxuXHRcdFx0XHRsLmFjdGlvbiA9IGBtYXJrcGF0cm9sbGVkJnJjaWQ9JHtsLnJjaWR9YDtcblx0XHR9XG5cdFx0aWYgKGhpbnQpIHtcblx0XHRcdGhpbnQgPSBsLm9sZGlkID8gc2ltcGxlUHJpbnRmKGhpbnQsIFtyZXZpc2lvblN0cmluZ10pIDogc2ltcGxlUHJpbnRmKGhpbnQsIFtzYWZlRGVjb2RlVVJJKGwuYXJ0aWNsZSldKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGludCA9IHNhZmVEZWNvZGVVUkkoYCR7bC5hcnRpY2xlfSZhY3Rpb249JHtsLmFjdGlvbn1gKSArIGwub2xkaWQgPyBgJm9sZGlkPSR7bC5vbGRpZH1gIDogJyc7XG5cdFx0fVxuXHRcdHJldHVybiB0aXRsZWRXaWtpTGluayh7XG5cdFx0XHRhcnRpY2xlOiBsLmFydGljbGUsXG5cdFx0XHRhY3Rpb246IGwuYWN0aW9uLFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bmV3V2luOiBsLm5ld1dpbixcblx0XHRcdHRpdGxlOiBoaW50LFxuXHRcdFx0b2xkaWQ6IGwub2xkaWQsXG5cdFx0XHRub1BvcHVwOiBsLm5vUG9wdXAsXG5cdFx0XHRvbmNsaWNrOiBsLm9uY2xpY2ssXG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHJldmVydFN1bW1hcnkgPSAob2xkaWQsIGRpZmYpID0+IHtcblx0XHRsZXQgcmV0ID0gJyc7XG5cdFx0cmV0ID1cblx0XHRcdGRpZmYgPT09ICdwcmV2J1xuXHRcdFx0XHQ/IGdldFZhbHVlT2YoJ3BvcHVwUXVlcmllZFJldmVydFRvUHJldmlvdXNTdW1tYXJ5Jylcblx0XHRcdFx0OiBnZXRWYWx1ZU9mKCdwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5Jyk7XG5cdFx0cmV0dXJuIGAke3JldH0mYXV0b3J2PSR7b2xkaWR9YDtcblx0fTtcblx0Y29uc3QgdGl0bGVkV2lraUxpbmsgPSAobCkgPT4ge1xuXHRcdC8vIHBvc3NpYmxlIHByb3BlcnRpZXMgb2YgYXJndW1lbnQ6XG5cdFx0Ly8gYXJ0aWNsZSwgYWN0aW9uLCB0ZXh0LCB0aXRsZSwgb2xkaWQsIGFjdGlvbk5hbWUsIGNsYXNzTmFtZSwgbm9Qb3B1cFxuXHRcdC8vIG9sZGlkID0gbnVsbCBpcyBmaW5lIGhlcmVcblx0XHQvLyBhcnRpY2xlIGFuZCBhY3Rpb24gYXJlIG1hbmRhdG9yeSBhcmdzXG5cdFx0aWYgKGwuYXJ0aWNsZSA9PT0gdW5kZWZpbmVkIHx8IGwuYWN0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGVycmxvZygnZ290IHVuZGVmaW5lZCBhcnRpY2xlIG9yIGFjdGlvbiBpbiB0aXRsZWRXaWtpTGluaycpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IGJhc2UgPSBwZy53aWtpLnRpdGxlYmFzZSArIGwuYXJ0aWNsZS51cmxTdHJpbmcoKTtcblx0XHRsZXQgdXJsID0gYmFzZTtcblx0XHRpZiAobC5hY3Rpb25OYW1lID09PSB1bmRlZmluZWQgfHwgIWwuYWN0aW9uTmFtZSkge1xuXHRcdFx0bC5hY3Rpb25OYW1lID0gJ2FjdGlvbic7XG5cdFx0fVxuXHRcdC8vIG5vIG5lZWQgdG8gYWRkICZhY3Rpb249dmlldywgYW5kIHRoaXMgY29uZnVzZXMgYW5jaG9yc1xuXHRcdGlmIChsLmFjdGlvbiAhPT0gJ3ZpZXcnKSB7XG5cdFx0XHR1cmwgPSBgJHtiYXNlfSYke2wuYWN0aW9uTmFtZX09JHtsLmFjdGlvbn1gO1xuXHRcdH1cblx0XHRpZiAobC5vbGRpZCAhPT0gdW5kZWZpbmVkICYmIGwub2xkaWQpIHtcblx0XHRcdHVybCArPSBgJm9sZGlkPSR7bC5vbGRpZH1gO1xuXHRcdH1cblx0XHRsZXQgY3NzQ2xhc3MgPSBwZy5taXNjLmRlZmF1bHROYXZsaW5rQ2xhc3NuYW1lO1xuXHRcdGlmIChsLmNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIGwuY2xhc3NOYW1lKSB7XG5cdFx0XHRjc3NDbGFzcyA9IGwuY2xhc3NOYW1lO1xuXHRcdH1cblx0XHRyZXR1cm4gZ2VuZXJhbE5hdkxpbmsoe1xuXHRcdFx0dXJsLFxuXHRcdFx0bmV3V2luOiBsLm5ld1dpbixcblx0XHRcdHRpdGxlOiBsLnRpdGxlID09PSB1bmRlZmluZWQgPyBudWxsIDogbC50aXRsZSxcblx0XHRcdHRleHQ6IGwudGV4dCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGwudGV4dCxcblx0XHRcdGNsYXNzTmFtZTogY3NzQ2xhc3MsXG5cdFx0XHRub1BvcHVwOiBsLm5vUG9wdXAsXG5cdFx0XHRvbmNsaWNrOiBsLm9uY2xpY2ssXG5cdFx0fSk7XG5cdH07XG5cdHBnLmZuLmdldExhc3RDb250cmliID0gKHdpa2lwYWdlLCBuZXdXaW4pID0+IHtcblx0XHRnZXRIaXN0b3J5SW5mbyh3aWtpcGFnZSwgKHgpID0+IHtcblx0XHRcdHByb2Nlc3NMYXN0Q29udHJpYkluZm8oeCwge3BhZ2U6IHdpa2lwYWdlLCBuZXdXaW59KTtcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgcHJvY2Vzc0xhc3RDb250cmliSW5mbyA9IChpbmZvLCBzdHVmZikgPT4ge1xuXHRcdGlmICghaW5mby5lZGl0cyB8fCBpbmZvLmVkaXRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoJ1BvcHVwczogYW4gb2RkIHRoaW5nIGhhcHBlbmVkLiBQbGVhc2UgcmV0cnkuJywge3RhZzogJ3BvcHVwcycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFpbmZvLmZpcnN0TmV3RWRpdG9yKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0dHByaW50ZignT25seSBmb3VuZCBvbmUgZWRpdG9yOiAlcyBtYWRlICVzIGVkaXRzJywgW2luZm8uZWRpdHNbMF0uZWRpdG9yLCBpbmZvLmVkaXRzLmxlbmd0aF0pLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGFnOiAncG9wdXBzJyxcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBuZXdVcmwgPSBgJHtwZy53aWtpLnRpdGxlYmFzZSArIG5ldyBUaXRsZShzdHVmZi5wYWdlKS51cmxTdHJpbmcoKX0mZGlmZj1jdXImb2xkaWQ9JHtcblx0XHRcdGluZm8uZmlyc3ROZXdFZGl0b3Iub2xkaWRcblx0XHR9YDtcblx0XHRkaXNwbGF5VXJsKG5ld1VybCwgc3R1ZmYubmV3V2luKTtcblx0fTtcblx0cGcuZm4uZ2V0RGlmZlNpbmNlTXlFZGl0ID0gKHdpa2lwYWdlLCBuZXdXaW4pID0+IHtcblx0XHRnZXRIaXN0b3J5SW5mbyh3aWtpcGFnZSwgKHgpID0+IHtcblx0XHRcdHByb2Nlc3NEaWZmU2luY2VNeUVkaXQoeCwge3BhZ2U6IHdpa2lwYWdlLCBuZXdXaW59KTtcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgcHJvY2Vzc0RpZmZTaW5jZU15RWRpdCA9IChpbmZvLCBzdHVmZikgPT4ge1xuXHRcdGlmICghaW5mby5lZGl0cyB8fCBpbmZvLmVkaXRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoJ1BvcHVwczogc29tZXRoaW5nIGZpc2h5IGhhcHBlbmVkLiBQbGVhc2UgdHJ5IGFnYWluLicsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGZyaWVuZGx5TmFtZSA9IHN0dWZmLnBhZ2Uuc3BsaXQoJ18nKS5qb2luKCcgJyk7XG5cdFx0aWYgKCFpbmZvLm15TGFzdEVkaXQpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR0cHJpbnRmKFwiQ291bGRuJ3QgZmluZCBhbiBlZGl0IGJ5ICVzXFxuaW4gdGhlIGxhc3QgJXMgZWRpdHMgdG9cXG4lc1wiLCBbXG5cdFx0XHRcdFx0aW5mby51c2VyTmFtZSxcblx0XHRcdFx0XHRnZXRWYWx1ZU9mKCdwb3B1cEhpc3RvcnlMaW1pdCcpLFxuXHRcdFx0XHRcdGZyaWVuZGx5TmFtZSxcblx0XHRcdFx0XSksXG5cdFx0XHRcdHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGluZm8ubXlMYXN0RWRpdC5pbmRleCA9PT0gMCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkodHByaW50ZignJXMgc2VlbXMgdG8gYmUgdGhlIGxhc3QgZWRpdG9yIHRvIHRoZSBwYWdlICVzJywgW2luZm8udXNlck5hbWUsIGZyaWVuZGx5TmFtZV0pLCB7XG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbmV3VXJsID0gYCR7cGcud2lraS50aXRsZWJhc2UgKyBuZXcgVGl0bGUoc3R1ZmYucGFnZSkudXJsU3RyaW5nKCl9JmRpZmY9Y3VyJm9sZGlkPSR7XG5cdFx0XHRpbmZvLm15TGFzdEVkaXQub2xkaWRcblx0XHR9YDtcblx0XHRkaXNwbGF5VXJsKG5ld1VybCwgc3R1ZmYubmV3V2luKTtcblx0fTtcblx0Y29uc3QgZGlzcGxheVVybCA9ICh1cmwsIG5ld1dpbikgPT4ge1xuXHRcdGlmIChuZXdXaW4pIHtcblx0XHRcdHdpbmRvdy5vcGVuKHVybCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmxvY2F0aW9uID0gdXJsO1xuXHRcdH1cblx0fTtcblx0cGcuZm4ucHVyZ2VQb3B1cHMgPSAoKSA9PiB7XG5cdFx0cHJvY2Vzc0FsbFBvcHVwcyh0cnVlKTtcblx0XHRzZXR1cENhY2hlKCk7IC8vIGRlbGV0ZXMgYWxsIGNhY2hlZCBpdGVtcyAobm90IGJyb3dzZXIgY2FjaGVkLCB0aG91Z2guLi4pXG5cdFx0cGcub3B0aW9uID0ge307XG5cdFx0YWJvcnRBbGxEb3dubG9hZHMoKTtcblx0fTtcblx0Y29uc3QgcHJvY2Vzc0FsbFBvcHVwcyA9IChudWxsaWZ5LCBiYW5pc2gpID0+IHtcblx0XHRmb3IgKGxldCBpID0gMDsgcGcuY3VycmVudC5saW5rcyAmJiBpIDwgcGcuY3VycmVudC5saW5rcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKCFwZy5jdXJyZW50LmxpbmtzW2ldLm5hdnBvcHVwKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG51bGxpZnkgfHwgYmFuaXNoKSB7XG5cdFx0XHRcdHBnLmN1cnJlbnQubGlua3NbaV0ubmF2cG9wdXAuYmFuaXNoKCk7XG5cdFx0XHR9XG5cdFx0XHRwZy5jdXJyZW50LmxpbmtzW2ldLnNpbXBsZU5vTW9yZSA9IGZhbHNlO1xuXHRcdFx0aWYgKG51bGxpZnkpIHtcblx0XHRcdFx0cGcuY3VycmVudC5saW5rc1tpXS5uYXZwb3B1cCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRwZy5mbi5kaXNhYmxlUG9wdXBzID0gKCkgPT4ge1xuXHRcdHByb2Nlc3NBbGxQb3B1cHMoZmFsc2UsIHRydWUpO1xuXHRcdHNldHVwVG9vbHRpcHMobnVsbCwgdHJ1ZSk7XG5cdH07XG5cdHBnLmZuLnRvZ2dsZVByZXZpZXdzID0gKCkgPT4ge1xuXHRcdHByb2Nlc3NBbGxQb3B1cHModHJ1ZSwgdHJ1ZSk7XG5cdFx0cGcub3B0aW9uLnNpbXBsZVBvcHVwcyA9ICFwZy5vcHRpb24uc2ltcGxlUG9wdXBzO1xuXHRcdGFib3J0QWxsRG93bmxvYWRzKCk7XG5cdH07XG5cdGNvbnN0IG1hZ2ljV2F0Y2hMaW5rID0gZnVuY3Rpb24gbWFnaWNXYXRjaExpbmsobCkge1xuXHRcdC8vIFl1Y2shISBXb3VsZCByZXF1aXJlIGEgdGhvcm91Z2ggcmVkZXNpZ24gdG8gYWRkIHRoaXMgYXMgYSBjbGljayBldmVudCB0aG91Z2ggLi4uXG5cdFx0bC5vbmNsaWNrID0gc2ltcGxlUHJpbnRmKFwicGcuZm4ubW9kaWZ5V2F0Y2hsaXN0KCclcycsJyVzJyk7cmV0dXJuIGZhbHNlO1wiLCBbXG5cdFx0XHRsLmFydGljbGVcblx0XHRcdFx0LnRvU3RyaW5nKHRydWUpXG5cdFx0XHRcdC5zcGxpdCgnXFxcXCcpXG5cdFx0XHRcdC5qb2luKCdcXFxcXFxcXCcpXG5cdFx0XHRcdC5zcGxpdChcIidcIilcblx0XHRcdFx0LmpvaW4oU3RyaW5nLnJhd2BcXCdgKSxcblx0XHRcdHRoaXMuaWQsXG5cdFx0XSk7XG5cdFx0cmV0dXJuIHdpa2lMaW5rKGwpO1xuXHR9O1xuXHRwZy5mbi5tb2RpZnlXYXRjaGxpc3QgPSBhc3luYyAodGl0bGUsIGFjdGlvbikgPT4ge1xuXHRcdGNvbnN0IHJlcURhdGEgPSB7XG5cdFx0XHRhY3Rpb246ICd3YXRjaCcsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdFx0dXNlbGFuZzogbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKSxcblx0XHR9O1xuXHRcdGlmIChhY3Rpb24gPT09ICd1bndhdGNoJykge1xuXHRcdFx0cmVxRGF0YS51bndhdGNoID0gdHJ1ZTtcblx0XHR9XG5cdFx0Ly8gTG9hZCB0aGUgQWRkZWR3YXRjaHRleHQgb3IgUmVtb3ZlZHdhdGNodGV4dCBtZXNzYWdlIGFuZCBzaG93IGl0XG5cdFx0Y29uc3QgbXdUaXRsZSA9IG13LlRpdGxlLm5ld0Zyb21UZXh0KHRpdGxlKTtcblx0XHRsZXQgbWVzc2FnZU5hbWU7XG5cdFx0aWYgKG13VGl0bGUgJiYgbXdUaXRsZS5nZXROYW1lc3BhY2VJZCgpID4gMCAmJiBtd1RpdGxlLmdldE5hbWVzcGFjZUlkKCkgJSAyID09PSAxKSB7XG5cdFx0XHRtZXNzYWdlTmFtZSA9IGFjdGlvbiA9PT0gJ3dhdGNoJyA/ICdhZGRlZHdhdGNodGV4dC10YWxrJyA6ICdyZW1vdmVkd2F0Y2h0ZXh0LXRhbGsnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZXNzYWdlTmFtZSA9IGFjdGlvbiA9PT0gJ3dhdGNoJyA/ICdhZGRlZHdhdGNodGV4dCcgOiAncmVtb3ZlZHdhdGNodGV4dCc7XG5cdFx0fVxuXHRcdGF3YWl0IGdldE13QXBpKCkucG9zdFdpdGhUb2tlbignd2F0Y2gnLCByZXFEYXRhKTtcblx0XHRhd2FpdCBnZXRNd0FwaSgpLmxvYWRNZXNzYWdlc0lmTWlzc2luZyhbbWVzc2FnZU5hbWVdKTtcblx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0Ly8gKiBzZWUgc3RyaW5nLmpzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdHZvaWQgbXcubm90aWZ5KG13Lm1lc3NhZ2UobWVzc2FnZU5hbWUsIHRpdGxlKS5wYXJzZURvbSgpLCB7dGFnOiAncG9wdXBzJ30pO1xuXHR9O1xuXHRjb25zdCBtYWdpY0hpc3RvcnlMaW5rID0gKGwpID0+IHtcblx0XHQvLyBGSVhNRSB1c2Ugb25jbGljayBjaGFuZ2UgaHJlZiB0cmljayB0byBzb3J0IHRoaXMgb3V0IGluc3RlYWQgb2Ygd2luZG93Lm9wZW5cblx0XHRsZXQganNVcmwgPSAnJztcblx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRsZXQgb25DbGljayA9ICcnO1xuXHRcdHN3aXRjaCAobC5pZCkge1xuXHRcdFx0Y2FzZSAnbGFzdENvbnRyaWInOlxuXHRcdFx0XHRvbkNsaWNrID0gc2ltcGxlUHJpbnRmKFwicGcuZm4uZ2V0TGFzdENvbnRyaWIoJyVzJywlcylcIiwgW1xuXHRcdFx0XHRcdGwuYXJ0aWNsZVxuXHRcdFx0XHRcdFx0LnRvU3RyaW5nKHRydWUpXG5cdFx0XHRcdFx0XHQuc3BsaXQoJ1xcXFwnKVxuXHRcdFx0XHRcdFx0LmpvaW4oJ1xcXFxcXFxcJylcblx0XHRcdFx0XHRcdC5zcGxpdChcIidcIilcblx0XHRcdFx0XHRcdC5qb2luKFN0cmluZy5yYXdgXFwnYCksXG5cdFx0XHRcdFx0bC5uZXdXaW4sXG5cdFx0XHRcdF0pO1xuXHRcdFx0XHR0aXRsZSA9IHBvcHVwU3RyaW5nKCdsYXN0Q29udHJpYkhpbnQnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzaW5jZU1lJzpcblx0XHRcdFx0b25DbGljayA9IHNpbXBsZVByaW50ZihcInBnLmZuLmdldERpZmZTaW5jZU15RWRpdCgnJXMnLCVzKVwiLCBbXG5cdFx0XHRcdFx0bC5hcnRpY2xlXG5cdFx0XHRcdFx0XHQudG9TdHJpbmcodHJ1ZSlcblx0XHRcdFx0XHRcdC5zcGxpdCgnXFxcXCcpXG5cdFx0XHRcdFx0XHQuam9pbignXFxcXFxcXFwnKVxuXHRcdFx0XHRcdFx0LnNwbGl0KFwiJ1wiKVxuXHRcdFx0XHRcdFx0LmpvaW4oU3RyaW5nLnJhd2BcXCdgKSxcblx0XHRcdFx0XHRsLm5ld1dpbixcblx0XHRcdFx0XSk7XG5cdFx0XHRcdHRpdGxlID0gcG9wdXBTdHJpbmcoJ3NpbmNlTWVIaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRqc1VybCA9IGBqYXZhc2NyaXB0OiR7b25DbGlja31gOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblx0XHRvbkNsaWNrICs9ICc7cmV0dXJuIGZhbHNlOyc7XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybDoganNVcmwsXG5cdFx0XHRuZXdXaW46IGZhbHNlLFxuXHRcdFx0dGl0bGUsXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHRub1BvcHVwOiBsLm5vUG9wdXAsXG5cdFx0XHRvbmNsaWNrOiBvbkNsaWNrLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBwb3B1cE1lbnVMaW5rID0gKGwpID0+IHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2NyaXB0LXVybFxuXHRcdGNvbnN0IGpzVXJsID0gc2ltcGxlUHJpbnRmKCdqYXZhc2NyaXB0OnBnLmZuLiVzKCknLCBbbC5pZF0pOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblx0XHRjb25zdCB0aXRsZSA9IHBvcHVwU3RyaW5nKHNpbXBsZVByaW50ZignJXNIaW50JywgW2wuaWRdKSk7XG5cdFx0Y29uc3Qgb25DbGljayA9IHNpbXBsZVByaW50ZigncGcuZm4uJXMoKTtyZXR1cm4gZmFsc2U7JywgW2wuaWRdKTtcblx0XHRyZXR1cm4gZ2VuZXJhbE5hdkxpbmsoe1xuXHRcdFx0dXJsOiBqc1VybCxcblx0XHRcdG5ld1dpbjogZmFsc2UsXG5cdFx0XHR0aXRsZSxcblx0XHRcdHRleHQ6IGwudGV4dCxcblx0XHRcdG5vUG9wdXA6IGwubm9Qb3B1cCxcblx0XHRcdG9uY2xpY2s6IG9uQ2xpY2ssXG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHNwZWNpYWxMaW5rID0gKGwpID0+IHtcblx0XHQvLyBwcm9wZXJ0aWVzOiBhcnRpY2xlLCBzcGVjaWFscGFnZSwgdGV4dCwgc2VwXG5cdFx0aWYgKGwuc3BlY2lhbHBhZ2UgPT09IHVuZGVmaW5lZCB8fCAhbC5zcGVjaWFscGFnZSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IGJhc2UgPSBgJHtwZy53aWtpLnRpdGxlYmFzZSArIG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zU3BlY2lhbElkXX06JHtsLnNwZWNpYWxwYWdlfWA7XG5cdFx0bC5zZXAgPz89ICcmdGFyZ2V0PSc7XG5cdFx0bGV0IGFydGljbGUgPSBsLmFydGljbGUudXJsU3RyaW5nKHtcblx0XHRcdGtlZXBTcGFjZXM6IGwuc3BlY2lhbHBhZ2UgPT09ICdTZWFyY2gnLFxuXHRcdH0pO1xuXHRcdGxldCBoaW50ID0gcG9wdXBTdHJpbmcoYCR7bC5zcGVjaWFscGFnZX1IaW50YCk7XG5cdFx0c3dpdGNoIChsLnNwZWNpYWxwYWdlKSB7XG5cdFx0XHRjYXNlICdMb2cnOlxuXHRcdFx0XHRzd2l0Y2ggKGwuc2VwKSB7XG5cdFx0XHRcdFx0Y2FzZSAnJnVzZXI9Jzpcblx0XHRcdFx0XHRcdGhpbnQgPSBwb3B1cFN0cmluZygndXNlckxvZ0hpbnQnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJyZ0eXBlPWJsb2NrJnBhZ2U9Jzpcblx0XHRcdFx0XHRcdGhpbnQgPSBwb3B1cFN0cmluZygnYmxvY2tMb2dIaW50Jyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICcmcGFnZT0nOlxuXHRcdFx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCdwYWdlTG9nSGludCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnJnR5cGU9cHJvdGVjdCZwYWdlPSc6XG5cdFx0XHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ3Byb3RlY3RMb2dIaW50Jyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICcmdHlwZT1kZWxldGUmcGFnZT0nOlxuXHRcdFx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCdkZWxldGVMb2dIaW50Jyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0bG9nKGBVbmtub3duIGxvZyB0eXBlLCBzZXA9JHtsLnNlcH1gKTtcblx0XHRcdFx0XHRcdGhpbnQgPSAnTWlzc2luZyBoaW50IChGSVhNRSknO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnUHJlZml4SW5kZXgnOlxuXHRcdFx0XHRhcnRpY2xlICs9ICcvJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGhpbnQgPSBoaW50ID8gc2ltcGxlUHJpbnRmKGhpbnQsIFtzYWZlRGVjb2RlVVJJKGwuYXJ0aWNsZSldKSA6IHNhZmVEZWNvZGVVUkkoYCR7bC5zcGVjaWFscGFnZX06JHtsLmFydGljbGV9YCk7XG5cdFx0Y29uc3QgdXJsID0gYmFzZSArIGwuc2VwICsgYXJ0aWNsZTtcblx0XHRyZXR1cm4gZ2VuZXJhbE5hdkxpbmsoe1xuXHRcdFx0dXJsLFxuXHRcdFx0dGl0bGU6IGhpbnQsXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHRuZXdXaW46IGwubmV3V2luLFxuXHRcdFx0bm9Qb3B1cDogbC5ub1BvcHVwLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBnZW5lcmFsTGluayA9IChsKSA9PiB7XG5cdFx0Ly8gbC51cmwsIGwudGV4dCwgbC50aXRsZSwgbC5uZXdXaW4sIGwuY2xhc3NOYW1lLCBsLm5vUG9wdXAsIGwub25jbGlja1xuXHRcdGlmIChsLnVybCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Ly8gb25seSBxdW90YXRpb24gbWFya3MgaW4gdGhlIHVybCBjYW4gc2NyZXcgdXMgdXAgbm93Li4uIEkgdGhpbmtcblx0XHRjb25zdCB1cmwgPSBsLnVybC5zcGxpdCgnXCInKS5qb2luKCclMjInKTtcblx0XHRsZXQgcmV0ID0gYDxhIGhyZWY9XCIke3VybH1cImA7XG5cdFx0aWYgKGwudGl0bGUgIT09IHVuZGVmaW5lZCAmJiBsLnRpdGxlKSB7XG5cdFx0XHRyZXQgKz0gYCB0aXRsZT1cIiR7cGcuZXNjYXBlUXVvdGVzSFRNTChsLnRpdGxlKX1cImA7XG5cdFx0fVxuXHRcdGlmIChsLm9uY2xpY2sgIT09IHVuZGVmaW5lZCAmJiBsLm9uY2xpY2spIHtcblx0XHRcdHJldCArPSBgIG9uY2xpY2s9XCIke3BnLmVzY2FwZVF1b3Rlc0hUTUwobC5vbmNsaWNrKX1cImA7XG5cdFx0fVxuXHRcdGlmIChsLm5vUG9wdXApIHtcblx0XHRcdHJldCArPSAnIG5vUG9wdXA9MSc7XG5cdFx0fVxuXHRcdGxldCBuZXdXaW47XG5cdFx0aWYgKGwubmV3V2luID09PSB1bmRlZmluZWQgfHwgbC5uZXdXaW4gPT09IG51bGwpIHtcblx0XHRcdG5ld1dpbiA9IGdldFZhbHVlT2YoJ3BvcHVwTmV3V2luZG93cycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQoe25ld1dpbn0gPSBsKTtcblx0XHR9XG5cdFx0aWYgKG5ld1dpbikge1xuXHRcdFx0cmV0ICs9ICcgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIic7XG5cdFx0fVxuXHRcdGlmIChsLmNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIGwuY2xhc3NOYW1lKSB7XG5cdFx0XHRyZXQgKz0gYCBjbGFzcz1cIiR7bC5jbGFzc05hbWV9XCJgO1xuXHRcdH1cblx0XHRyZXQgKz0gJz4nO1xuXHRcdGlmICh0eXBlb2YgbC50ZXh0ID09PSB0eXBlb2YgJycpIHtcblx0XHRcdC8vIFdlIG5lZWQgdG8gSFRNTC1lc2NhcGUgdGhpcyB0byBhdm9pZCBYU1MsIGJ1dCB3ZSBhbHNvIHdhbnQgdG9cblx0XHRcdC8vIGRpc3BsYXkgYW55IGV4aXN0aW5nIEhUTUwgZW50aXRpZXMgY29ycmVjdGx5LCBzbyB1bmVzY2FwZSBpdCBmaXJzdC5cblx0XHRcdC8vIEZvciBleGFtcGxlLCB0aGUgZGlzcGxheSB0ZXh0IG9mIHRoZSB1c2VyIHBhZ2UgbWVudSBpdGVtIGlzIGRlZmluZWRcblx0XHRcdC8vIGFzIFwidXNlciZuYnNwO3BhZ2VcIiwgc28gd2UgbmVlZCB0byB1bmVzY2FwZSBmaXJzdCB0byBhdm9pZCBpdCBiZWluZ1xuXHRcdFx0Ly8gZXNjYXBlZCB0byBcInVzZXImYW1wO25ic3A7cGFnZVwiLlxuXHRcdFx0cmV0ICs9IHBnLmVzY2FwZVF1b3Rlc0hUTUwocGcudW5lc2NhcGVRdW90ZXNIVE1MKGwudGV4dCkpO1xuXHRcdH1cblx0XHRyZXQgKz0gJzwvYT4nO1xuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IGFwcGVuZFBhcmFtc1RvTGluayA9IChsaW5rc3RyLCBwYXJhbXMpID0+IHtcblx0XHRjb25zdCBzcCA9IGxpbmtzdHIuc3BsaXQoLyhocmVmPVwiW15cIl0rPylcIi9pKTtcblx0XHRpZiAoc3AubGVuZ3RoIDwgMikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCByZXQgPSBzcC5zaGlmdCgpICsgc3Auc2hpZnQoKTtcblx0XHRyZXQgKz0gYCYke3BhcmFtc31cImA7XG5cdFx0cmV0ICs9IHNwLmpvaW4oJycpO1xuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IGNoYW5nZUxpbmtUYXJnZXRMaW5rID0gKHgpID0+IHtcblx0XHQvLyBuZXdUYXJnZXQsIHRleHQsIGhpbnQsIHN1bW1hcnksIGNsaWNrQnV0dG9uLCBtaW5vciwgdGl0bGUgKG9wdGlvbmFsKSwgYWxzb0NoYW5nZUxhYmVsIHtcblx0XHRpZiAoeC5uZXdUYXJnZXQpIHtcblx0XHRcdGxvZyhgY2hhbmdlTGlua1RhcmdldExpbms6IG5ld1RhcmdldD0ke3gubmV3VGFyZ2V0fWApO1xuXHRcdH1cblx0XHRpZiAoeC5vbGRUYXJnZXQgIT09IGRlY29kZVVSSUNvbXBvbmVudCh4Lm9sZFRhcmdldCkpIHtcblx0XHRcdGxvZyhgVGhpcyBtaWdodCBiZSBhbiBpbnB1dCBwcm9ibGVtOiAke3gub2xkVGFyZ2V0fWApO1xuXHRcdH1cblx0XHQvLyBGSVhNRTogZmlyc3QgY2hhcmFjdGVyIG9mIHBhZ2UgdGl0bGUgYXMgd2VsbCBhcyBuYW1lc3BhY2Ugc2hvdWxkIGJlIGNhc2UgaW5zZW5zaXRpdmVcblx0XHQvLyBlZyBbWzpjYXRlZ29yeTpYMV1dIGFuZCBbWzpDYXRlZ29yeTpYMV1dIGFyZSBlcXVpdmFsZW50XG5cdFx0Ly8gdGhpcydsbCBicmVhayBpZiBjaGFyQXQoMCkgaXMgbmFzdHlcblx0XHRjb25zdCBjQSA9IG13LnV0aWwuZXNjYXBlUmVnRXhwKHgub2xkVGFyZ2V0KTtcblx0XHRsZXQgY2hzID0gY0EuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG5cdFx0Y2hzID0gYFske2Noc30ke2Nocy50b0xvd2VyQ2FzZSgpfV1gO1xuXHRcdGxldCBjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0ID0gY2hzICsgY0Euc2xpY2UoMSk7XG5cdFx0Y3VycmVudEFydGljbGVSZWdleEJpdCA9IGN1cnJlbnRBcnRpY2xlUmVnZXhCaXRcblx0XHRcdC5zcGxpdCgvWyBfXSt8JTIwL2cpXG5cdFx0XHQuam9pbignKD86W18gXSt8JTIwKScpXG5cdFx0XHQuc3BsaXQoU3RyaW5nLnJhd2BcXChgKVxuXHRcdFx0LmpvaW4oU3RyaW5nLnJhd2AoPzolMjh8XFwoKWApXG5cdFx0XHQuc3BsaXQoU3RyaW5nLnJhd2BcXClgKVxuXHRcdFx0LmpvaW4oU3RyaW5nLnJhd2AoPzolMjl8XFwpKWApOyAvLyB3aHkgZG9lcyB0aGlzIG5lZWQgdG8gbWF0Y2ggZW5jb2RlZCBzdHJpbmdzID8gbGlua3MgaW4gdGhlIGRvY3VtZW50ID9cblxuXHRcdC8vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNwYWNlIHNob3VsZCBiZSBpZ25vcmVkLCBhbmQgYW5jaG9yIGJpdHMgb3B0aW9uYWw6XG5cdFx0Y3VycmVudEFydGljbGVSZWdleEJpdCA9IGBcXFxccyooJHtjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0fSg/OiNbXlxcXFxbXFxcXHxdKik/KVxcXFxzKmA7XG5cdFx0Ly8gZS5nLiBDb21wdXRlciAoYXJjaGFpYykgLT4gXFxzKihbQ2Ndb21wdXRlcltfIF0oPzolMjUyOHxcXCgpYXJjaGFpYyg/OiUyNTI4fFxcKSkpXFxzKlxuXHRcdC8vIGF1dG9lZGl0PXN+XFxbXFxbKFtDY11hZClcXF1cXF1+W1tDb21wdXRlci1haWRlZCUyMGRlc2lnbnwkMV1dfmc7c35cXFtcXFsoW0NjXUFEKVt8XX5bW0NvbXB1dGVyLWFpZGVkJTIwZGVzaWdufH5nXG5cdFx0Y29uc3QgdGl0bGUgPSB4LnRpdGxlIHx8IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5zcGxpdCgnXycpLmpvaW4oJyAnKTtcblx0XHRjb25zdCBsayA9IHRpdGxlZFdpa2lMaW5rKHtcblx0XHRcdGFydGljbGU6IG5ldyBUaXRsZSh0aXRsZSksXG5cdFx0XHRuZXdXaW46IHgubmV3V2luLFxuXHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHR0ZXh0OiB4LnRleHQsXG5cdFx0XHR0aXRsZTogeC5oaW50LFxuXHRcdFx0Y2xhc3NOYW1lOiAncG9wdXBfY2hhbmdlX3RpdGxlX2xpbmsnLFxuXHRcdH0pO1xuXHRcdGxldCBjbWQgPSAnJztcblx0XHRpZiAoeC5uZXdUYXJnZXQpIHtcblx0XHRcdC8vIGVzY2FwZSAnJicgYW5kIG90aGVyIG5hc3RpZXNcblx0XHRcdGNvbnN0IHQgPSB4Lm5ld1RhcmdldDtcblx0XHRcdGNvbnN0IHMgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cCh4Lm5ld1RhcmdldCk7XG5cdFx0XHRpZiAoeC5hbHNvQ2hhbmdlTGFiZWwpIHtcblx0XHRcdFx0Y21kICs9IGBzflxcXFxbXFxcXFske2N1cnJlbnRBcnRpY2xlUmVnZXhCaXR9XFxcXF1cXFxcXX5bWyR7dH1dXX5nO2A7XG5cdFx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0fVt8XX5bWyR7dH18fmc7YDtcblx0XHRcdFx0Y21kICs9IGBzflxcXFxbXFxcXFske3N9XFxcXHwke3N9XFxcXF1cXFxcXX5bWyR7dH1dXX5nYDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0fVxcXFxdXFxcXF1+W1ske3R9fCQxXV1+ZztgO1xuXHRcdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7Y3VycmVudEFydGljbGVSZWdleEJpdH1bfF1+W1ske3R9fH5nO2A7XG5cdFx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtzfVxcXFx8JHtzfVxcXFxdXFxcXF1+W1ske3R9XV1+Z2A7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0fVxcXFxdXFxcXF1+JDF+ZztgO1xuXHRcdFx0Y21kICs9IGBzflxcXFxbXFxcXFske2N1cnJlbnRBcnRpY2xlUmVnZXhCaXR9W3xdKC4qPylcXFxcXVxcXFxdfiQyfmdgO1xuXHRcdH1cblx0XHQvLyBCdWlsZCBxdWVyeVxuXHRcdGNtZCA9IGBhdXRvZWRpdD0ke2VuY29kZVVSSUNvbXBvbmVudChjbWQpfWA7XG5cdFx0Y21kICs9IGAmYXV0b2NsaWNrPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHguY2xpY2tCdXR0b24pfSZhY3Rva2VuPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGF1dG9DbGlja1Rva2VuKCkpfWA7XG5cdFx0Y21kICs9IHgubWlub3IgPT09IG51bGwgPyAnJyA6IGAmYXV0b21pbm9yPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHgubWlub3IpfWA7XG5cdFx0Y21kICs9IHgud2F0Y2ggPT09IG51bGwgPyAnJyA6IGAmYXV0b3dhdGNoPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHgud2F0Y2gpfWA7XG5cdFx0Y21kICs9IGAmYXV0b3N1bW1hcnk9JHtlbmNvZGVVUklDb21wb25lbnQoeC5zdW1tYXJ5KX1gO1xuXHRcdGNtZCArPSBgJmF1dG9pbXBsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBvcHVwU3RyaW5nKCdhdXRvZWRpdF92ZXJzaW9uJykpfWA7XG5cdFx0cmV0dXJuIGFwcGVuZFBhcmFtc1RvTGluayhsaywgY21kKTtcblx0fTtcblx0Y29uc3QgcmVkaXJMaW5rID0gKHJlZGlyTWF0Y2gsIGFydGljbGUpID0+IHtcblx0XHQvLyBOQiByZWRpck1hdGNoIGlzIGluIHdpa2lUZXh0XG5cdFx0bGV0IHJldCA9ICcnO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cEFwcGVuZFJlZGlyTmF2TGlua3MnKSAmJiBnZXRWYWx1ZU9mKCdwb3B1cE5hdkxpbmtzJykpIHtcblx0XHRcdHJldCArPSAnPGhyPic7XG5cdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBGaXhSZWRpcnMnKSAmJiBhdXRvRWRpdCAhPT0gdW5kZWZpbmVkICYmIGF1dG9FZGl0KSB7XG5cdFx0XHRcdHJldCArPSBwb3B1cFN0cmluZygnUmVkaXJlY3RzIHRvOiAoRml4ICcpO1xuXHRcdFx0XHRsb2coYHJlZGlyTGluazogbmV3VGFyZ2V0PSR7cmVkaXJNYXRjaH1gKTtcblx0XHRcdFx0cmV0ICs9IGFkZFBvcHVwU2hvcnRjdXQoXG5cdFx0XHRcdFx0Y2hhbmdlTGlua1RhcmdldExpbmsoe1xuXHRcdFx0XHRcdFx0bmV3VGFyZ2V0OiByZWRpck1hdGNoLFxuXHRcdFx0XHRcdFx0dGV4dDogcG9wdXBTdHJpbmcoJ3RhcmdldCcpLFxuXHRcdFx0XHRcdFx0aGludDogcG9wdXBTdHJpbmcoJ0ZpeCB0aGlzIHJlZGlyZWN0LCBjaGFuZ2luZyBqdXN0IHRoZSBsaW5rIHRhcmdldCcpLFxuXHRcdFx0XHRcdFx0c3VtbWFyeTogc2ltcGxlUHJpbnRmKGdldFZhbHVlT2YoJ3BvcHVwRml4UmVkaXJzU3VtbWFyeScpLCBbYXJ0aWNsZS50b1N0cmluZygpLCByZWRpck1hdGNoXSksXG5cdFx0XHRcdFx0XHRvbGRUYXJnZXQ6IGFydGljbGUudG9TdHJpbmcoKSxcblx0XHRcdFx0XHRcdGNsaWNrQnV0dG9uOiBnZXRWYWx1ZU9mKCdwb3B1cFJlZGlyQXV0b0NsaWNrJyksXG5cdFx0XHRcdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHRcdFx0XHRcdHdhdGNoOiBnZXRWYWx1ZU9mKCdwb3B1cFdhdGNoUmVkaXJyZWRQYWdlcycpLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdCdSJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXQgKz0gcG9wdXBTdHJpbmcoJyBvciAnKTtcblx0XHRcdFx0cmV0ICs9IGFkZFBvcHVwU2hvcnRjdXQoXG5cdFx0XHRcdFx0Y2hhbmdlTGlua1RhcmdldExpbmsoe1xuXHRcdFx0XHRcdFx0bmV3VGFyZ2V0OiByZWRpck1hdGNoLFxuXHRcdFx0XHRcdFx0dGV4dDogcG9wdXBTdHJpbmcoJ3RhcmdldCAmIGxhYmVsJyksXG5cdFx0XHRcdFx0XHRoaW50OiBwb3B1cFN0cmluZygnRml4IHRoaXMgcmVkaXJlY3QsIGNoYW5naW5nIHRoZSBsaW5rIHRhcmdldCBhbmQgbGFiZWwnKSxcblx0XHRcdFx0XHRcdHN1bW1hcnk6IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cEZpeFJlZGlyc1N1bW1hcnknKSwgW2FydGljbGUudG9TdHJpbmcoKSwgcmVkaXJNYXRjaF0pLFxuXHRcdFx0XHRcdFx0b2xkVGFyZ2V0OiBhcnRpY2xlLnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0XHRjbGlja0J1dHRvbjogZ2V0VmFsdWVPZigncG9wdXBSZWRpckF1dG9DbGljaycpLFxuXHRcdFx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHRcdFx0XHR3YXRjaDogZ2V0VmFsdWVPZigncG9wdXBXYXRjaFJlZGlycmVkUGFnZXMnKSxcblx0XHRcdFx0XHRcdGFsc29DaGFuZ2VMYWJlbDogdHJ1ZSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHQnUidcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0ICs9IHBvcHVwU3RyaW5nKCcpJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXQgKz0gcG9wdXBTdHJpbmcoJ1JlZGlyZWN0cycpICsgcG9wdXBTdHJpbmcoJyB0byAnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBgPGJyPiAke3BvcHVwU3RyaW5nKCdSZWRpcmVjdHMnKX0ke3BvcHVwU3RyaW5nKCcgdG8gJyl9JHt0aXRsZWRXaWtpTGluayh7XG5cdFx0XHRhcnRpY2xlOiBuZXcgVGl0bGUoKS5mcm9tV2lraVRleHQocmVkaXJNYXRjaCksXG5cdFx0XHRhY3Rpb246ICd2aWV3JyAvKiBGSVhNRTogbmV3V2luICovLFxuXHRcdFx0dGV4dDogc2FmZURlY29kZVVSSShyZWRpck1hdGNoKSxcblx0XHRcdHRpdGxlOiBwb3B1cFN0cmluZygnQnlwYXNzIHJlZGlyZWN0JyksXG5cdFx0fSl9YDtcblx0fTtcblx0Y29uc3QgYXJpbkxpbmsgPSAobCkgPT4ge1xuXHRcdGlmICghc2FuZUxpbmtDaGVjayhsKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmICghbC5hcnRpY2xlLmlzSXBVc2VyKCkgfHwgIXBnLndpa2kud2lraW1lZGlhKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgdU4gPSBsLmFydGljbGUudXNlck5hbWUoKTtcblx0XHRyZXR1cm4gZ2VuZXJhbE5hdkxpbmsoe1xuXHRcdFx0dXJsOiBgaHR0cDovL3dzLmFyaW4ubmV0L2NnaS1iaW4vd2hvaXMucGw/cXVlcnlpbnB1dD0ke2VuY29kZVVSSUNvbXBvbmVudCh1Til9YCxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHR0aXRsZTogdHByaW50ZignTG9vayB1cCAlcyBpbiBBUklOIHdob2lzIGRhdGFiYXNlJywgW3VOXSksXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHRub1BvcHVwOiAxLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCB0b29sRGJOYW1lID0gKGNvb2tpZVN0eWxlKSA9PiB7XG5cdFx0bGV0IHJldCA9IG13LmNvbmZpZy5nZXQoJ3dnREJuYW1lJyk7XG5cdFx0aWYgKCFjb29raWVTdHlsZSkge1xuXHRcdFx0cmV0ICs9ICdfcCc7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IHNhbmVMaW5rQ2hlY2sgPSAobCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgbC5hcnRpY2xlICE9PSB0eXBlb2Yge30gfHwgdHlwZW9mIGwudGV4dCAhPT0gdHlwZW9mICcnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXHRjb25zdCBlZGl0Q291bnRlckxpbmsgPSAobCkgPT4ge1xuXHRcdGlmICghc2FuZUxpbmtDaGVjayhsKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmICghcGcud2lraS53aWtpbWVkaWEpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCB1TiA9IGwuYXJ0aWNsZS51c2VyTmFtZSgpO1xuXHRcdGNvbnN0IHRvb2wgPSBnZXRWYWx1ZU9mKCdwb3B1cEVkaXRDb3VudGVyVG9vbCcpO1xuXHRcdGxldCB1cmw7XG5cdFx0Y29uc3QgZGVmYXVsdFRvb2xVcmwgPSAnLy90b29scy53bWZsYWJzLm9yZy9zdXBlcmNvdW50L2luZGV4LnBocD91c2VyPSQxJnByb2plY3Q9JDIuJDMnO1xuXHRcdHN3aXRjaCAodG9vbCkge1xuXHRcdFx0Y2FzZSAnY3VzdG9tJzpcblx0XHRcdFx0dXJsID0gc2ltcGxlUHJpbnRmKGdldFZhbHVlT2YoJ3BvcHVwRWRpdENvdW50ZXJVcmwnKSwgW2VuY29kZVVSSUNvbXBvbmVudCh1TiksIHRvb2xEYk5hbWUoKV0pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0Y29uc3QgdGhlV2lraSA9IHBnLndpa2kuaG9zdG5hbWUuc3BsaXQoJy4nKTtcblx0XHRcdFx0dXJsID0gc2ltcGxlUHJpbnRmKGRlZmF1bHRUb29sVXJsLCBbZW5jb2RlVVJJQ29tcG9uZW50KHVOKSwgdGhlV2lraVswXSwgdGhlV2lraVsxXV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZ2VuZXJhbE5hdkxpbmsoe1xuXHRcdFx0dXJsLFxuXHRcdFx0dGl0bGU6IHRwcmludGYoJ2VkaXRDb3VudGVyTGlua0hpbnQnLCBbdU5dKSxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHRub1BvcHVwOiAxLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBlZGl0b3JMaXN0TGluayA9IChsKSA9PiB7XG5cdFx0aWYgKCFzYW5lTGlua0NoZWNrKGwpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgYXJ0aWNsZSA9IGwuYXJ0aWNsZS5hcnRpY2xlRnJvbVRhbGtQYWdlKCkgfHwgbC5hcnRpY2xlO1xuXHRcdGNvbnN0IHVybCA9IGBodHRwczovL3h0b29scy53bWZsYWJzLm9yZy9hcnRpY2xlaW5mby8ke2VuY29kZVVSSShcblx0XHRcdHBnLndpa2kuaG9zdG5hbWVcblx0XHQpfS8ke2FydGljbGUudXJsU3RyaW5nKCl9P3VzZWxhbmc9JHttdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpfWA7XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybCxcblx0XHRcdHRpdGxlOiB0cHJpbnRmKCdlZGl0b3JMaXN0SGludCcsIFthcnRpY2xlXSksXG5cdFx0XHRuZXdXaW46IGwubmV3V2luLFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bm9Qb3B1cDogMSxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgZ2VuZXJhbE5hdkxpbmsgPSAobCkgPT4ge1xuXHRcdGwuY2xhc3NOYW1lID0gbC5jbGFzc05hbWUgPT09IG51bGwgPyAncG9wdXBOYXZMaW5rJyA6IGwuY2xhc3NOYW1lO1xuXHRcdHJldHVybiBnZW5lcmFsTGluayhsKTtcblx0fTtcblx0Ly8gbWFnaWMgaGlzdG9yeSBsaW5rc1xuXHQvL1xuXHRjb25zdCBnZXRIaXN0b3J5SW5mbyA9ICh3aWtpcGFnZSwgd2hhdE5leHQpID0+IHtcblx0XHRsb2coJ2dldEhpc3RvcnlJbmZvJyk7XG5cdFx0Z2V0SGlzdG9yeShcblx0XHRcdHdpa2lwYWdlLFxuXHRcdFx0d2hhdE5leHRcblx0XHRcdFx0PyAoZCkgPT4ge1xuXHRcdFx0XHRcdFx0d2hhdE5leHQocHJvY2Vzc0hpc3RvcnkoZCkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0OiBwcm9jZXNzSGlzdG9yeVxuXHRcdCk7XG5cdH07XG5cdC8vIEZJWE1FIGVsaW1pbmF0ZSBwZy5pZE51bWJlciAuLi4gaG93PyA6LShcblx0Y29uc3QgZ2V0SGlzdG9yeSA9ICh3aWtpcGFnZSwgb25Db21wbGV0ZSkgPT4ge1xuXHRcdGxvZygnZ2V0SGlzdG9yeScpO1xuXHRcdGNvbnN0IHVybCA9IGAke3BnLndpa2kuYXBpd2lraWJhc2V9P2Zvcm1hdD1qc29uJmZvcm1hdHZlcnNpb249MiZhY3Rpb249cXVlcnkmcHJvcD1yZXZpc2lvbnMmdGl0bGVzPSR7bmV3IFRpdGxlKFxuXHRcdFx0d2lraXBhZ2Vcblx0XHQpLnVybFN0cmluZygpfSZydmxpbWl0PSR7Z2V0VmFsdWVPZigncG9wdXBIaXN0b3J5TGltaXQnKX1gO1xuXHRcdGxvZyhgZ2V0SGlzdG9yeTogdXJsPSR7dXJsfWApO1xuXHRcdHJldHVybiBzdGFydERvd25sb2FkKHVybCwgYCR7cGcuaWROdW1iZXJ9aGlzdG9yeWAsIG9uQ29tcGxldGUpO1xuXHR9O1xuXHRjb25zdCBwcm9jZXNzSGlzdG9yeSA9IChkb3dubG9hZCkgPT4ge1xuXHRcdGNvbnN0IGpzb2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSk7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHtyZXZpc2lvbnN9ID0gYW55Q2hpbGQoanNvYmoucXVlcnkucGFnZXMpO1xuXHRcdFx0Y29uc3QgZWRpdHMgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgcmV2aXNpb24gb2YgcmV2aXNpb25zKSB7XG5cdFx0XHRcdGVkaXRzLnB1c2goe1xuXHRcdFx0XHRcdG9sZGlkOiByZXZpc2lvbi5yZXZpZCxcblx0XHRcdFx0XHRlZGl0b3I6IHJldmlzaW9uLnVzZXIsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0bG9nKGBwcm9jZXNzZWQgJHtlZGl0cy5sZW5ndGh9IGVkaXRzYCk7XG5cdFx0XHRyZXR1cm4gZmluaXNoUHJvY2Vzc0hpc3RvcnkoZWRpdHMsIG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRsb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggSlNPTiBidXNpbmVzcycpO1xuXHRcdFx0cmV0dXJuIGZpbmlzaFByb2Nlc3NIaXN0b3J5KFtdKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGZpbmlzaFByb2Nlc3NIaXN0b3J5ID0gKGVkaXRzLCB1c2VyTmFtZSkgPT4ge1xuXHRcdGNvbnN0IGhpc3RJbmZvID0ge307XG5cdFx0aGlzdEluZm8uZWRpdHMgPSBlZGl0cztcblx0XHRoaXN0SW5mby51c2VyTmFtZSA9IHVzZXJOYW1lO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWRpdHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChoaXN0SW5mby5teUxhc3RFZGl0ID09PSB1bmRlZmluZWQgJiYgdXNlck5hbWUgJiYgZWRpdHNbaV0uZWRpdG9yID09PSB1c2VyTmFtZSkge1xuXHRcdFx0XHRoaXN0SW5mby5teUxhc3RFZGl0ID0ge1xuXHRcdFx0XHRcdGluZGV4OiBpLFxuXHRcdFx0XHRcdG9sZGlkOiBlZGl0c1tpXS5vbGRpZCxcblx0XHRcdFx0XHRwcmV2aWQ6IGkgPT09IDAgPyBudWxsIDogZWRpdHNbaSAtIDFdLm9sZGlkLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGhpc3RJbmZvLmZpcnN0TmV3RWRpdG9yID09PSB1bmRlZmluZWQgJiYgZWRpdHNbaV0uZWRpdG9yICE9PSBlZGl0c1swXS5lZGl0b3IpIHtcblx0XHRcdFx0aGlzdEluZm8uZmlyc3ROZXdFZGl0b3IgPSB7XG5cdFx0XHRcdFx0aW5kZXg6IGksXG5cdFx0XHRcdFx0b2xkaWQ6IGVkaXRzW2ldLm9sZGlkLFxuXHRcdFx0XHRcdHByZXZpZDogaSA9PT0gMCA/IG51bGwgOiBlZGl0c1tpIC0gMV0ub2xkaWQsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHBnLm1pc2MuaGlzdG9yeUluZm89aGlzdEluZm87XG5cdFx0cmV0dXJuIGhpc3RJbmZvO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBsaW5rcy5qc1xuXHQvLyBTVEFSVEZJTEU6IG9wdGlvbnMuanNcblx0Ly8gb3B0aW9uc1xuXHQvLyBjaGVjayBmb3IgZXhpc3RpbmcgdmFsdWUsIGVsc2UgdXNlIGRlZmF1bHRcblx0Y29uc3QgZGVmYXVsdGl6ZSA9ICh4KSA9PiB7XG5cdFx0cGcub3B0aW9uW3hdID8/PSB3aW5kb3dbeF0gPT09IHVuZGVmaW5lZCA/IHBnLm9wdGlvbkRlZmF1bHRbeF0gOiB3aW5kb3dbeF07XG5cdH07XG5cdGNvbnN0IG5ld09wdGlvbiA9ICh4LCBkZWYpID0+IHtcblx0XHRwZy5vcHRpb25EZWZhdWx0W3hdID0gZGVmO1xuXHR9O1xuXHRjb25zdCBzZXREZWZhdWx0ID0gKHgsIGRlZikgPT4ge1xuXHRcdHJldHVybiBuZXdPcHRpb24oeCwgZGVmKTtcblx0fTtcblx0Y29uc3QgZ2V0VmFsdWVPZiA9ICh2YXJOYW1lKSA9PiB7XG5cdFx0ZGVmYXVsdGl6ZSh2YXJOYW1lKTtcblx0XHRyZXR1cm4gcGcub3B0aW9uW3Zhck5hbWVdO1xuXHR9O1xuXHRjb25zdCBzZXRPcHRpb25zID0gKCkgPT4ge1xuXHRcdC8vIHVzZXItc2V0dGFibGUgcGFyYW1ldGVycyBhbmQgZGVmYXVsdHNcblx0XHRsZXQgdXNlcklzU3lzb3AgPSBmYWxzZTtcblx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJykpIHtcblx0XHRcdGZvciAobGV0IGcgPSAwOyBnIDwgbXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJykubGVuZ3RoOyArK2cpIHtcblx0XHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpW2ddID09PSAnc3lzb3AnKSB7XG5cdFx0XHRcdFx0dXNlcklzU3lzb3AgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKVtnXSA9PT0gJ3N0ZXdhcmQnKSB7XG5cdFx0XHRcdFx0dXNlcklzU3lzb3AgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIEJhc2ljIG9wdGlvbnNcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGVsYXknLCAwLjUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBIaWRlRGVsYXknLCAwLjUpO1xuXHRcdG5ld09wdGlvbignc2ltcGxlUG9wdXBzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBTdHJ1Y3R1cmUnLCAnc2hvcnRtZW51cycpOyAvLyBzZWUgbGF0ZXIgLSBkZWZhdWx0IGZvciBwb3B1cFN0cnVjdHVyZSBpcyAnb3JpZ2luYWwnIGlmIHNpbXBsZVBvcHVwcyBpcyB0cnVlXG5cdFx0bmV3T3B0aW9uKCdwb3B1cEFjdGlvbnNNZW51JywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFNldHVwTWVudScsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBBZG1pbkxpbmtzJywgdXNlcklzU3lzb3ApO1xuXHRcdG5ld09wdGlvbigncG9wdXBTaG9ydGN1dEtleXMnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEhpc3RvcmljYWxMaW5rcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBPbmx5QXJ0aWNsZUxpbmtzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdyZW1vdmVUaXRsZXMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTWF4V2lkdGgnLCAzNTApO1xuXHRcdG5ld09wdGlvbigncG9wdXBTaW1wbGlmeU1haW5MaW5rJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEFwcGVuZFJlZGlyTmF2TGlua3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwVG9jTGlua3MnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFN1YnBvcHVwcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEcmFnSGFuZGxlJywgZmFsc2UgLyogJ3BvcHVwVG9wTGlua3MnICovKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTGF6eVByZXZpZXdzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cExhenlEb3dubG9hZHMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwQWxsRGFic1N0dWJzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEZWJ1Z2dpbmcnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEFjdGl2ZU5hdmxpbmtzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE1vZGlmaWVyJywgZmFsc2UpOyAvLyBjdHJsLCBzaGlmdCwgYWx0IG9yIG1ldGFcblx0XHRuZXdPcHRpb24oJ3BvcHVwTW9kaWZpZXJBY3Rpb24nLCAnZW5hYmxlJyk7IC8vIG9yICdkaXNhYmxlJ1xuXHRcdG5ld09wdGlvbigncG9wdXBEcmFnZ2FibGUnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmV2aWV3JywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBMb2NhbGUnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERhdGVUaW1lRm9ybWF0dGVyT3B0aW9ucycsIHtcblx0XHRcdHllYXI6ICdudW1lcmljJyxcblx0XHRcdG1vbnRoOiAnbG9uZycsXG5cdFx0XHRkYXk6ICdudW1lcmljJyxcblx0XHRcdGhvdXIxMjogZmFsc2UsXG5cdFx0XHRob3VyOiAnMi1kaWdpdCcsXG5cdFx0XHRtaW51dGU6ICcyLWRpZ2l0Jyxcblx0XHRcdHNlY29uZDogJzItZGlnaXQnLFxuXHRcdH0pO1xuXHRcdG5ld09wdGlvbigncG9wdXBEYXRlRm9ybWF0dGVyT3B0aW9ucycsIHtcblx0XHRcdHllYXI6ICdudW1lcmljJyxcblx0XHRcdG1vbnRoOiAnbG9uZycsXG5cdFx0XHRkYXk6ICdudW1lcmljJyxcblx0XHR9KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwVGltZUZvcm1hdHRlck9wdGlvbnMnLCB7XG5cdFx0XHRob3VyMTI6IGZhbHNlLFxuXHRcdFx0aG91cjogJzItZGlnaXQnLFxuXHRcdFx0bWludXRlOiAnMi1kaWdpdCcsXG5cdFx0XHRzZWNvbmQ6ICcyLWRpZ2l0Jyxcblx0XHR9KTtcblx0XHQvLyBpbWFnZXNcblx0XHRuZXdPcHRpb24oJ3BvcHVwSW1hZ2VzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdpbWFnZVBvcHVwc0ZvckltYWdlcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBOZXZlckdldFRodW1icycsIGZhbHNlKTtcblx0XHQvLyBuZXdPcHRpb24oJ3BvcHVwSW1hZ2VzVG9nZ2xlU2l6ZScsICAgICAgIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBUaHVtYkFjdGlvbicsICdpbWFnZXBhZ2UnKTsgLy8gJ3NpemV0b2dnbGUnKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSW1hZ2VTaXplJywgNjApO1xuXHRcdG5ld09wdGlvbigncG9wdXBJbWFnZVNpemVMYXJnZScsIDIwMCk7XG5cdFx0Ly8gcmVkaXJzLCBkYWJzLCByZXZlcnNpb25cblx0XHRuZXdPcHRpb24oJ3BvcHVwRml4UmVkaXJzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZWRpckF1dG9DbGljaycsICd3cERpZmYnKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRml4RGFicycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGFic0F1dG9DbGljaycsICd3cERpZmYnKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmV2ZXJ0U3VtbWFyeVByb21wdCcsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTWlub3JSZXZlcnRzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZWRsaW5rUmVtb3ZhbCcsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmVkbGlua0F1dG9DbGljaycsICd3cERpZmYnKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwV2F0Y2hEaXNhbWJpZ2dlZFBhZ2VzJywgbnVsbCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFdhdGNoUmVkaXJyZWRQYWdlcycsIG51bGwpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEYWJXaWt0aW9uYXJ5JywgJ2xhc3QnKTtcblx0XHQvLyBuYXZsaW5rc1xuXHRcdG5ld09wdGlvbigncG9wdXBOYXZMaW5rcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBOYXZMaW5rU2VwYXJhdG9yJywgJyAmc2RvdDsgJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cExhc3RFZGl0TGluaycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBFZGl0Q291bnRlclRvb2wnLCAnc3VwZXJjb3VudCcpO1xuXHRcdG5ld09wdGlvbigncG9wdXBFZGl0Q291bnRlclVybCcsICcnKTtcblx0XHQvLyBwcmV2aWV3cyBldGNcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwU3VtbWFyeURhdGEnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTWF4UHJldmlld1NlbnRlbmNlcycsIDUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBNYXhQcmV2aWV3Q2hhcmFjdGVycycsIDYwMCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cExhc3RNb2RpZmllZCcsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3S2lsbFRlbXBsYXRlcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3UmF3VGVtcGxhdGVzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdGaXJzdFBhck9ubHknLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld0N1dEhlYWRpbmdzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdCdXR0b24nLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdCdXR0b25FdmVudCcsICdjbGljaycpO1xuXHRcdC8vIGRpZmZzXG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdEaWZmcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEaWZmTWF4TGluZXMnLCAxMDApO1xuXHRcdG5ld09wdGlvbigncG9wdXBEaWZmQ29udGV4dExpbmVzJywgMik7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERpZmZDb250ZXh0Q2hhcmFjdGVycycsIDQwKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGlmZkRhdGVzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERpZmZEYXRlUHJpbnRlcicsICd0b0xvY2FsZVN0cmluZycpOyAvLyBubyBsb25nZXIgaW4gdXNlXG5cblx0XHQvLyBlZGl0IHN1bW1hcmllcy4gR29kLCB0aGVzZSBhcmUgdWdseS5cblx0XHRuZXdPcHRpb24oJ3BvcHVwUmV2aWV3ZWRTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFJldmlld2VkU3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRml4RGFic1N1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwRml4RGFic1N1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEV4dGVuZGVkUmV2ZXJ0U3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBFeHRlbmRlZFJldmVydFN1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJldmVydFN1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwUmV2ZXJ0U3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBRdWVyaWVkUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwUXVlcmllZFJldmVydFRvUHJldmlvdXNTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBGaXhSZWRpcnNTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cEZpeFJlZGlyc1N1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJlZGxpbmtTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFJlZGxpbmtTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSbURhYkxpbmtTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFJtRGFiTGlua1N1bW1hcnknKSk7XG5cdFx0Ly8gbWlzY1xuXHRcdG5ld09wdGlvbigncG9wdXBIaXN0b3J5TGltaXQnLCA1MCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEZpbHRlcnMnLCBbXG5cdFx0XHRwb3B1cEZpbHRlclN0dWJEZXRlY3QsXG5cdFx0XHRwb3B1cEZpbHRlckRpc2FtYmlnRGV0ZWN0LFxuXHRcdFx0cG9wdXBGaWx0ZXJQYWdlU2l6ZSxcblx0XHRcdHBvcHVwRmlsdGVyQ291bnRMaW5rcyxcblx0XHRcdHBvcHVwRmlsdGVyQ291bnRJbWFnZXMsXG5cdFx0XHRwb3B1cEZpbHRlckNvdW50Q2F0ZWdvcmllcyxcblx0XHRcdHBvcHVwRmlsdGVyTGFzdE1vZGlmaWVkLFxuXHRcdF0pO1xuXHRcdG5ld09wdGlvbignZXh0cmFQb3B1cEZpbHRlcnMnLCBbXSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE9uRWRpdFNlbGVjdGlvbicsICdjdXJzb3InKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld0hpc3RvcnknLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSW1hZ2VMaW5rcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBDYXRlZ29yeU1lbWJlcnMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwVXNlckluZm8nLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSGlzdG9yeVByZXZpZXdMaW1pdCcsIDI1KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwQ29udHJpYnNQcmV2aWV3TGltaXQnLCAyNSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJldkRlbFVybCcsICcvL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XaWtpcGVkaWE6UmV2aXNpb25fZGVsZXRpb24nKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwU2hvd0dlbmRlcicsIHRydWUpO1xuXHRcdC8vIG5ldyB3aW5kb3dzXG5cdFx0bmV3T3B0aW9uKCdwb3B1cE5ld1dpbmRvd3MnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cExpbmtzTmV3V2luZG93Jywge2xhc3RDb250cmliOiB0cnVlLCBzaW5jZU1lOiB0cnVlfSk7XG5cdFx0Ly8gcmVnZXhwc1xuXHRcdG5ld09wdGlvbihcblx0XHRcdCdwb3B1cERhYlJlZ2V4cCcsXG5cdFx0XHRTdHJpbmcucmF3YFxce1xce1xccyooZChhYnxpc2FtYihpZyh1YXRpb24pPyk/KXwoKChnZW98aG58cm9hZD98c2Nob29sfG51bWJlcilkaXMpfFsyMzRdW2xjXVthY3ddfChyb2FkfHNoaXApaW5kZXgpKVxccyooXFx8W159XSopP1xcfVxcfXxpcyBhIC4qZGlzYW1iaWd1YXRpb24uKnBhZ2VgXG5cdFx0KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwQW5jaG9yUmVnZXhwJywgJ2FuY2hvcnM/Jyk7IC8vIGhvdyB0byBpZGVudGlmeSBhbiBhbmNob3JzIHRlbXBsYXRlXG5cdFx0bmV3T3B0aW9uKCdwb3B1cFN0dWJSZWdleHAnLCAnKHNlY3QpP3N0dWJbfV1bfV18VGhpcyAuKi1yZWxhdGVkIGFydGljbGUgaXMgYSAuKnN0dWInKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSW1hZ2VWYXJzUmVnZXhwJywgJ2ltYWdlfGltYWdlXyg/OmZpbGV8c2t5bGluZXxuYW1lfGZsYWd8c2VhbCl8Y292ZXJ8YmFkZ2V8bG9nbycpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBvcHRpb25zLmpzXG5cdC8vIFNUQVJURklMRTogc3RyaW5ncy5qc1xuXHQvLyBUcmFuc2xhdGFibGUgc3RyaW5nc1xuXHQvL1xuXHQvLyBTZWUgaW5zdHJ1Y3Rpb25zIGF0XG5cdC8vIHtAbGluayBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHMvVHJhbnNsYXRpb259XG5cdHBnLnN0cmluZyA9IHtcblx0XHQvLyBzdW1tYXJ5IGRhdGEsIHNlYXJjaGluZyBldGMuXG5cdFx0YXJ0aWNsZTogJ2FydGljbGUnLFxuXHRcdGNhdGVnb3J5OiAnY2F0ZWdvcnknLFxuXHRcdGNhdGVnb3JpZXM6ICdjYXRlZ29yaWVzJyxcblx0XHRpbWFnZTogJ2ltYWdlJyxcblx0XHRpbWFnZXM6ICdpbWFnZXMnLFxuXHRcdHN0dWI6ICdzdHViJyxcblx0XHQnc2VjdGlvbiBzdHViJzogJ3NlY3Rpb24gc3R1YicsXG5cdFx0J0VtcHR5IHBhZ2UnOiAnRW1wdHkgcGFnZScsXG5cdFx0a0I6ICdrQicsXG5cdFx0Ynl0ZXM6ICdieXRlcycsXG5cdFx0ZGF5OiAnZGF5Jyxcblx0XHRkYXlzOiAnZGF5cycsXG5cdFx0aG91cjogJ2hvdXInLFxuXHRcdGhvdXJzOiAnaG91cnMnLFxuXHRcdG1pbnV0ZTogJ21pbnV0ZScsXG5cdFx0bWludXRlczogJ21pbnV0ZXMnLFxuXHRcdHNlY29uZDogJ3NlY29uZCcsXG5cdFx0c2Vjb25kczogJ3NlY29uZHMnLFxuXHRcdHdlZWs6ICd3ZWVrJyxcblx0XHR3ZWVrczogJ3dlZWtzJyxcblx0XHRzZWFyY2g6ICdzZWFyY2gnLFxuXHRcdFNlYXJjaEhpbnQ6ICdGaW5kIEVuZ2xpc2ggV2lraXBlZGlhIGFydGljbGVzIGNvbnRhaW5pbmcgJXMnLFxuXHRcdHdlYjogJ3dlYicsXG5cdFx0Z2xvYmFsOiAnZ2xvYmFsJyxcblx0XHQvLyBhcnRpY2xlLXJlbGF0ZWQgYWN0aW9ucyBhbmQgaW5mb1xuXHRcdC8vIChzb21lIGFjdGlvbnMgYWxzbyBhcHBseSB0byB1c2VyIHBhZ2VzKVxuXHRcdGFjdGlvbnM6ICdhY3Rpb25zJyxcblx0XHRwb3B1cHNNZW51OiAncG9wdXBzJyxcblx0XHR0b2dnbGVQcmV2aWV3c0hpbnQ6ICdUb2dnbGUgcHJldmlldyBnZW5lcmF0aW9uIGluIHBvcHVwcyBvbiB0aGlzIHBhZ2UnLFxuXHRcdCdlbmFibGUgcHJldmlld3MnOiAnZW5hYmxlIHByZXZpZXdzJyxcblx0XHQnZGlzYWJsZSBwcmV2aWV3cyc6ICdkaXNhYmxlIHByZXZpZXdzJyxcblx0XHQndG9nZ2xlIHByZXZpZXdzJzogJ3RvZ2dsZSBwcmV2aWV3cycsXG5cdFx0J3Nob3cgcHJldmlldyc6ICdzaG93IHByZXZpZXcnLFxuXHRcdHJlc2V0OiAncmVzZXQnLFxuXHRcdCdtb3JlLi4uJzogJ21vcmUuLi4nLFxuXHRcdGRpc2FibGU6ICdkaXNhYmxlIHBvcHVwcycsXG5cdFx0ZGlzYWJsZVBvcHVwc0hpbnQ6ICdEaXNhYmxlIHBvcHVwcyBvbiB0aGlzIHBhZ2UuIFJlbG9hZCBwYWdlIHRvIHJlLWVuYWJsZS4nLFxuXHRcdGhpc3RvcnlmZWVkSGludDogJ1JTUyBmZWVkIG9mIHJlY2VudCBjaGFuZ2VzIHRvIHRoaXMgcGFnZScsXG5cdFx0cHVyZ2VQb3B1cHNIaW50OiAnUmVzZXQgcG9wdXBzLCBjbGVhcmluZyBhbGwgY2FjaGVkIHBvcHVwIGRhdGEuJyxcblx0XHRQb3B1cHNIaW50OiAnUmVzZXQgcG9wdXBzLCBjbGVhcmluZyBhbGwgY2FjaGVkIHBvcHVwIGRhdGEuJyxcblx0XHRzcGFjZWJhcjogJ3NwYWNlJyxcblx0XHR2aWV3OiAndmlldycsXG5cdFx0J3ZpZXcgYXJ0aWNsZSc6ICd2aWV3IGFydGljbGUnLFxuXHRcdHZpZXdIaW50OiAnR28gdG8gJXMnLFxuXHRcdHRhbGs6ICd0YWxrJyxcblx0XHQndGFsayBwYWdlJzogJ3RhbGsgcGFnZScsXG5cdFx0J3RoaXMmbmJzcDtyZXZpc2lvbic6ICd0aGlzJm5ic3A7cmV2aXNpb24nLFxuXHRcdCdyZXZpc2lvbiAlcyBvZiAlcyc6ICdyZXZpc2lvbiAlcyBvZiAlcycsXG5cdFx0J1JldmlzaW9uICVzIG9mICVzJzogJ1JldmlzaW9uICVzIG9mICVzJyxcblx0XHQndGhlIHJldmlzaW9uIHByaW9yIHRvIHJldmlzaW9uICVzIG9mICVzJzogJ3RoZSByZXZpc2lvbiBwcmlvciB0byByZXZpc2lvbiAlcyBvZiAlcycsXG5cdFx0J1RvZ2dsZSBpbWFnZSBzaXplJzogJ0NsaWNrIHRvIHRvZ2dsZSBpbWFnZSBzaXplJyxcblx0XHRkZWw6ICdkZWwnLFxuXHRcdGRlbGV0ZTogJ2RlbGV0ZScsXG5cdFx0ZGVsZXRlSGludDogJ0RlbGV0ZSAlcycsXG5cdFx0dW5kZWxldGVTaG9ydDogJ3VuJyxcblx0XHRVbmRlbGV0ZUhpbnQ6ICdTaG93IHRoZSBkZWxldGlvbiBoaXN0b3J5IGZvciAlcycsXG5cdFx0cHJvdGVjdDogJ3Byb3RlY3QnLFxuXHRcdHByb3RlY3RIaW50OiAnUmVzdHJpY3QgZWRpdGluZyByaWdodHMgdG8gJXMnLFxuXHRcdHVucHJvdGVjdFNob3J0OiAndW4nLFxuXHRcdHVucHJvdGVjdEhpbnQ6ICdBbGxvdyAlcyB0byBiZSBlZGl0ZWQgYnkgYW55b25lIGFnYWluJyxcblx0XHQnc2VuZCB0aGFua3MnOiAnc2VuZCB0aGFua3MnLFxuXHRcdFRoYW5rc0hpbnQ6ICdTZW5kIGEgdGhhbmsgeW91IG5vdGlmaWNhdGlvbiB0byB0aGlzIHVzZXInLFxuXHRcdG1vdmU6ICdtb3ZlJyxcblx0XHQnbW92ZSBwYWdlJzogJ21vdmUgcGFnZScsXG5cdFx0TW92ZXBhZ2VIaW50OiAnQ2hhbmdlIHRoZSB0aXRsZSBvZiAlcycsXG5cdFx0ZWRpdDogJ2VkaXQnLFxuXHRcdCdlZGl0IGFydGljbGUnOiAnZWRpdCBhcnRpY2xlJyxcblx0XHRlZGl0SGludDogJ0NoYW5nZSB0aGUgY29udGVudCBvZiAlcycsXG5cdFx0J2VkaXQgdGFsayc6ICdlZGl0IHRhbGsnLFxuXHRcdG5ldzogJ25ldycsXG5cdFx0J25ldyB0b3BpYyc6ICduZXcgdG9waWMnLFxuXHRcdG5ld1NlY3Rpb25IaW50OiAnU3RhcnQgYSBuZXcgc2VjdGlvbiBvbiAlcycsXG5cdFx0J251bGwgZWRpdCc6ICdudWxsIGVkaXQnLFxuXHRcdG51bGxFZGl0SGludDogJ1N1Ym1pdCBhbiBlZGl0IHRvICVzLCBtYWtpbmcgbm8gY2hhbmdlcyAnLFxuXHRcdGhpc3Q6ICdoaXN0Jyxcblx0XHRoaXN0b3J5OiAnaGlzdG9yeScsXG5cdFx0aGlzdG9yeUhpbnQ6ICdMaXN0IHRoZSBjaGFuZ2VzIG1hZGUgdG8gJXMnLFxuXHRcdGxhc3Q6ICdwcmV2Jyxcblx0XHRsYXN0RWRpdDogJ2xhc3RFZGl0Jyxcblx0XHQnbWFyayBwYXRyb2xsZWQnOiAnbWFyayBwYXRyb2xsZWQnLFxuXHRcdG1hcmtwYXRyb2xsZWRIaW50OiAnTWFyayB0aGlzIGVkaXQgYXMgcGF0cm9sbGVkJyxcblx0XHQnQ291bGQgbm90IG1hcmtlZCB0aGlzIGVkaXQgYXMgcGF0cm9sbGVkJzogJ0NvdWxkIG5vdCBtYXJrZWQgdGhpcyBlZGl0IGFzIHBhdHJvbGxlZCcsXG5cdFx0J3Nob3cgbGFzdCBlZGl0JzogJ21vc3QgcmVjZW50IGVkaXQnLFxuXHRcdCdTaG93IHRoZSBsYXN0IGVkaXQnOiAnU2hvdyB0aGUgZWZmZWN0cyBvZiB0aGUgbW9zdCByZWNlbnQgY2hhbmdlJyxcblx0XHRsYXN0Q29udHJpYjogJ2xhc3RDb250cmliJyxcblx0XHQnbGFzdCBzZXQgb2YgZWRpdHMnOiAnbGF0ZXN0IGVkaXRzJyxcblx0XHRsYXN0Q29udHJpYkhpbnQ6ICdTaG93IHRoZSBuZXQgZWZmZWN0IG9mIGNoYW5nZXMgbWFkZSBieSB0aGUgbGFzdCBlZGl0b3InLFxuXHRcdGN1cjogJ2N1cicsXG5cdFx0ZGlmZkN1cjogJ2RpZmZDdXInLFxuXHRcdCdTaG93IGNoYW5nZXMgc2luY2UgcmV2aXNpb24gJXMnOiAnU2hvdyBjaGFuZ2VzIHNpbmNlIHJldmlzaW9uICVzJyxcblx0XHQnJXMgb2xkJzogJyVzIG9sZCcsXG5cdFx0b2xkRWRpdDogJ29sZEVkaXQnLFxuXHRcdHB1cmdlOiAncHVyZ2UnLFxuXHRcdHB1cmdlSGludDogJ0RlbWFuZCBhIGZyZXNoIGNvcHkgb2YgJXMnLFxuXHRcdHJhdzogJ3NvdXJjZScsXG5cdFx0cmF3SGludDogJ0Rvd25sb2FkIHRoZSBzb3VyY2Ugb2YgJXMnLFxuXHRcdHJlbmRlcjogJ3NpbXBsZScsXG5cdFx0cmVuZGVySGludDogJ1Nob3cgYSBwbGFpbiBIVE1MIHZlcnNpb24gb2YgJXMnLFxuXHRcdCdTaG93IHRoZSBlZGl0IG1hZGUgdG8gZ2V0IHJldmlzaW9uJzogJ1Nob3cgdGhlIGVkaXQgbWFkZSB0byBnZXQgcmV2aXNpb24nLFxuXHRcdHNpbmNlTWU6ICdzaW5jZU1lJyxcblx0XHQnY2hhbmdlcyBzaW5jZSBtaW5lJzogJ2RpZmYgbXkgZWRpdCcsXG5cdFx0c2luY2VNZUhpbnQ6ICdTaG93IGNoYW5nZXMgc2luY2UgbXkgbGFzdCBlZGl0Jyxcblx0XHRcIkNvdWxkbid0IGZpbmQgYW4gZWRpdCBieSAlc1xcbmluIHRoZSBsYXN0ICVzIGVkaXRzIHRvXFxuJXNcIjpcblx0XHRcdFwiQ291bGRuJ3QgZmluZCBhbiBlZGl0IGJ5ICVzXFxuaW4gdGhlIGxhc3QgJXMgZWRpdHMgdG9cXG4lc1wiLFxuXHRcdGVkczogJ2VkcycsXG5cdFx0ZWRpdG9yczogJ2VkaXRvcnMnLFxuXHRcdGVkaXRvckxpc3RIaW50OiAnTGlzdCB0aGUgdXNlcnMgd2hvIGhhdmUgZWRpdGVkICVzJyxcblx0XHRyZWxhdGVkOiAncmVsYXRlZCcsXG5cdFx0cmVsYXRlZENoYW5nZXM6ICdyZWxhdGVkQ2hhbmdlcycsXG5cdFx0J3JlbGF0ZWQgY2hhbmdlcyc6ICdyZWxhdGVkIGNoYW5nZXMnLFxuXHRcdFJlY2VudGNoYW5nZXNsaW5rZWRIaW50OiAnU2hvdyBjaGFuZ2VzIGluIGFydGljbGVzIHJlbGF0ZWQgdG8gJXMnLFxuXHRcdGVkaXRPbGQ6ICdlZGl0T2xkJyxcblx0XHRydjogJ3J2Jyxcblx0XHRyZXZlcnQ6ICdyZXZlcnQnLFxuXHRcdHJldmVydEhpbnQ6ICdSZXZlcnQgdG8gJXMnLFxuXHRcdGRlZmF1bHRwb3B1cFJldmlld2VkU3VtbWFyeTpcblx0XHRcdCdBY2NlcHRlZCBieSByZXZpZXdpbmcgdGhlIFtbU3BlY2lhbDpkaWZmLyVzLyVzfGRpZmZlcmVuY2VdXSBiZXR3ZWVuIHRoaXMgdmVyc2lvbiBhbmQgcHJldmlvdXNseSBhY2NlcHRlZCB2ZXJzaW9uIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cFJlZGxpbmtTdW1tYXJ5OlxuXHRcdFx0J1JlbW92aW5nIGxpbmsgdG8gZW1wdHkgcGFnZSBbWyVzXV0gdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwRml4RGFic1N1bW1hcnk6XG5cdFx0XHQnRGlzYW1iaWd1YXRlIFtbJXNdXSB0byBbWyVzXV0gdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwRml4UmVkaXJzU3VtbWFyeTpcblx0XHRcdCdSZWRpcmVjdCBieXBhc3MgZnJvbSBbWyVzXV0gdG8gW1slc11dIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cEV4dGVuZGVkUmV2ZXJ0U3VtbWFyeTpcblx0XHRcdCdSZXZlcnQgdG8gcmV2aXNpb24gZGF0ZWQgJXMgYnkgJXMsIG9sZGlkICVzIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cFJldmVydFRvUHJldmlvdXNTdW1tYXJ5OlxuXHRcdFx0J1JldmVydCB0byB0aGUgcmV2aXNpb24gcHJpb3IgdG8gcmV2aXNpb24gJXMgdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwUmV2ZXJ0U3VtbWFyeTogJ1JldmVydCB0byByZXZpc2lvbiAlcyB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBRdWVyaWVkUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnk6XG5cdFx0XHQnUmV2ZXJ0IHRvIHRoZSByZXZpc2lvbiBwcmlvciB0byByZXZpc2lvbiAkMSBkYXRlZCAkMiBieSAkMyB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBRdWVyaWVkUmV2ZXJ0U3VtbWFyeTpcblx0XHRcdCdSZXZlcnQgdG8gcmV2aXNpb24gJDEgZGF0ZWQgJDIgYnkgJDMgdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwUm1EYWJMaW5rU3VtbWFyeTpcblx0XHRcdCdSZW1vdmUgbGluayB0byBkYWIgcGFnZSBbWyVzXV0gdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0UmVkaXJlY3RzOiAnUmVkaXJlY3RzJyxcblx0XHQnIHRvICc6ICcgdG8gJyxcblx0XHQnQnlwYXNzIHJlZGlyZWN0JzogJ0J5cGFzcyByZWRpcmVjdCcsXG5cdFx0J0ZpeCB0aGlzIHJlZGlyZWN0JzogJ0ZpeCB0aGlzIHJlZGlyZWN0Jyxcblx0XHRkaXNhbWJpZzogJ2Rpc2FtYmlnJyxcblx0XHRkaXNhbWJpZ0hpbnQ6ICdEaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvIFtbJXNdXScsXG5cdFx0J0NsaWNrIHRvIGRpc2FtYmlndWF0ZSB0aGlzIGxpbmsgdG86JzogJ0NsaWNrIHRvIGRpc2FtYmlndWF0ZSB0aGlzIGxpbmsgdG86Jyxcblx0XHQncmVtb3ZlIHRoaXMgbGluayc6ICdyZW1vdmUgdGhpcyBsaW5rJyxcblx0XHQncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnOiAncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnLFxuXHRcdCdyZW1vdmUgYWxsIGxpbmtzIHRvIHRoaXMgZGlzYW1iaWcgcGFnZSBmcm9tIHRoaXMgYXJ0aWNsZSc6XG5cdFx0XHQncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIGRpc2FtYmlnIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnLFxuXHRcdG1haW5saW5rOiAnbWFpbmxpbmsnLFxuXHRcdHdpa2lMaW5rOiAnd2lraUxpbmsnLFxuXHRcdHdpa2lMaW5rczogJ3dpa2lMaW5rcycsXG5cdFx0J2xpbmtzIGhlcmUnOiAnbGlua3MgaGVyZScsXG5cdFx0d2hhdExpbmtzSGVyZTogJ3doYXRMaW5rc0hlcmUnLFxuXHRcdCd3aGF0IGxpbmtzIGhlcmUnOiAnd2hhdCBsaW5rcyBoZXJlJyxcblx0XHRXaGF0bGlua3NoZXJlSGludDogJ0xpc3QgdGhlIHBhZ2VzIHRoYXQgYXJlIGh5cGVybGlua2VkIHRvICVzJyxcblx0XHR1bndhdGNoU2hvcnQ6ICd1bicsXG5cdFx0d2F0Y2hUaGluZ3k6ICd3YXRjaCcsXG5cdFx0d2F0Y2hIaW50OiAnQWRkICVzIHRvIG15IHdhdGNobGlzdCcsXG5cdFx0dW53YXRjaEhpbnQ6ICdSZW1vdmUgJXMgZnJvbSBteSB3YXRjaGxpc3QnLFxuXHRcdCdPbmx5IGZvdW5kIG9uZSBlZGl0b3I6ICVzIG1hZGUgJXMgZWRpdHMnOiAnT25seSBmb3VuZCBvbmUgZWRpdG9yOiAlcyBtYWRlICVzIGVkaXRzJyxcblx0XHQnJXMgc2VlbXMgdG8gYmUgdGhlIGxhc3QgZWRpdG9yIHRvIHRoZSBwYWdlICVzJzogJyVzIHNlZW1zIHRvIGJlIHRoZSBsYXN0IGVkaXRvciB0byB0aGUgcGFnZSAlcycsXG5cdFx0cnNzOiAncnNzJyxcblx0XHQvLyBkaWZmIHByZXZpZXdzXG5cdFx0J0RpZmYgdHJ1bmNhdGVkIGZvciBwZXJmb3JtYW5jZSByZWFzb25zJzogJ0RpZmYgdHJ1bmNhdGVkIGZvciBwZXJmb3JtYW5jZSByZWFzb25zJyxcblx0XHQnT2xkIHJldmlzaW9uJzogJ09sZCByZXZpc2lvbicsXG5cdFx0J05ldyByZXZpc2lvbic6ICdOZXcgcmV2aXNpb24nLFxuXHRcdCdTb21ldGhpbmcgd2VudCB3cm9uZyA6LSgnOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcgOi0oJyxcblx0XHQnRW1wdHkgcmV2aXNpb24sIG1heWJlIG5vbi1leGlzdGVudCc6ICdFbXB0eSByZXZpc2lvbiwgbWF5YmUgbm9uLWV4aXN0ZW50Jyxcblx0XHQnVW5rbm93biBkYXRlJzogJ1Vua25vd24gZGF0ZScsXG5cdFx0Ly8gb3RoZXIgc3BlY2lhbCBwcmV2aWV3c1xuXHRcdCdFbXB0eSBjYXRlZ29yeSc6ICdFbXB0eSBjYXRlZ29yeScsXG5cdFx0J0NhdGVnb3J5IG1lbWJlcnMgKCVzIHNob3duKSc6ICdDYXRlZ29yeSBtZW1iZXJzICglcyBzaG93biknLFxuXHRcdCdObyBpbWFnZSBsaW5rcyBmb3VuZCc6ICdObyBpbWFnZSBsaW5rcyBmb3VuZCcsXG5cdFx0J0ZpbGUgbGlua3MnOiAnRmlsZSBsaW5rcycsXG5cdFx0J05vIGltYWdlIGZvdW5kJzogJ05vIGltYWdlIGZvdW5kJyxcblx0XHQnSW1hZ2UgZnJvbSBDb21tb25zJzogJ0ltYWdlIGZyb20gQ29tbW9ucycsXG5cdFx0J0Rlc2NyaXB0aW9uIHBhZ2UnOiAnRGVzY3JpcHRpb24gcGFnZScsXG5cdFx0J0FsdCB0ZXh0Oic6ICdBbHQgdGV4dDonLFxuXHRcdHJldmRlbDogJ0hpZGRlbiByZXZpc2lvbicsXG5cdFx0Ly8gdXNlci1yZWxhdGVkIGFjdGlvbnMgYW5kIGluZm9cblx0XHR1c2VyOiAndXNlcicsXG5cdFx0J3VzZXImbmJzcDtwYWdlJzogJ3VzZXImbmJzcDtwYWdlJyxcblx0XHQndXNlciB0YWxrJzogJ3VzZXIgdGFsaycsXG5cdFx0J2VkaXQgdXNlciB0YWxrJzogJ2VkaXQgdXNlciB0YWxrJyxcblx0XHQnbGVhdmUgY29tbWVudCc6ICdsZWF2ZSBjb21tZW50Jyxcblx0XHRlbWFpbDogJ2VtYWlsJyxcblx0XHQnZW1haWwgdXNlcic6ICdlbWFpbCB1c2VyJyxcblx0XHRFbWFpbHVzZXJIaW50OiAnU2VuZCBhbiBlbWFpbCB0byAlcycsXG5cdFx0c3BhY2U6ICdzcGFjZScsXG5cdFx0UHJlZml4SW5kZXhIaW50OiAnU2hvdyBwYWdlcyBpbiB0aGUgdXNlcnNwYWNlIG9mICVzJyxcblx0XHRjb3VudDogJ2NvdW50Jyxcblx0XHQnZWRpdCBjb3VudGVyJzogJ2VkaXQgY291bnRlcicsXG5cdFx0ZWRpdENvdW50ZXJMaW5rSGludDogJ0NvdW50IHRoZSBjb250cmlidXRpb25zIG1hZGUgYnkgJXMnLFxuXHRcdGNvbnRyaWJzOiAnY29udHJpYnMnLFxuXHRcdGNvbnRyaWJ1dGlvbnM6ICdjb250cmlidXRpb25zJyxcblx0XHRkZWxldGVkQ29udHJpYnM6ICdkZWxldGVkIGNvbnRyaWJ1dGlvbnMnLFxuXHRcdERlbGV0ZWRjb250cmlidXRpb25zSGludDogJ0xpc3QgZGVsZXRlZCBlZGl0cyBtYWRlIGJ5ICVzJyxcblx0XHRDb250cmlidXRpb25zSGludDogJ0xpc3QgdGhlIGNvbnRyaWJ1dGlvbnMgbWFkZSBieSAlcycsXG5cdFx0bG9nOiAnbG9nJyxcblx0XHQndXNlciBsb2cnOiAndXNlciBsb2cnLFxuXHRcdHVzZXJMb2dIaW50OiBcIlNob3cgJXMncyB1c2VyIGxvZ1wiLFxuXHRcdGFyaW46ICdBUklOIGxvb2t1cCcsXG5cdFx0J0xvb2sgdXAgJXMgaW4gQVJJTiB3aG9pcyBkYXRhYmFzZSc6ICdMb29rIHVwICVzIGluIHRoZSBBUklOIHdob2lzIGRhdGFiYXNlJyxcblx0XHR1bmJsb2NrU2hvcnQ6ICd1bicsXG5cdFx0YmxvY2s6ICdibG9jaycsXG5cdFx0J2Jsb2NrIHVzZXInOiAnYmxvY2sgdXNlcicsXG5cdFx0SXBibG9ja2xpc3RIaW50OiAnVW5ibG9jayAlcycsXG5cdFx0QmxvY2tpcEhpbnQ6ICdQcmV2ZW50ICVzIGZyb20gZWRpdGluZycsXG5cdFx0J2Jsb2NrIGxvZyc6ICdibG9jayBsb2cnLFxuXHRcdGJsb2NrTG9nSGludDogJ1Nob3cgdGhlIGJsb2NrIGxvZyBmb3IgJXMnLFxuXHRcdHByb3RlY3RMb2dIaW50OiAnU2hvdyB0aGUgcHJvdGVjdGlvbiBsb2cgZm9yICVzJyxcblx0XHRwYWdlTG9nSGludDogJ1Nob3cgdGhlIHBhZ2UgbG9nIGZvciAlcycsXG5cdFx0ZGVsZXRlTG9nSGludDogJ1Nob3cgdGhlIGRlbGV0aW9uIGxvZyBmb3IgJXMnLFxuXHRcdCdJbnZhbGlkICVzICVzJzogJ1RoZSBvcHRpb24gJXMgaXMgaW52YWxpZDogJXMnLFxuXHRcdCdObyBiYWNrbGlua3MgZm91bmQnOiAnTm8gYmFja2xpbmtzIGZvdW5kJyxcblx0XHQnIGFuZCBtb3JlJzogJyBhbmQgbW9yZScsXG5cdFx0dW5kbzogJ3VuZG8nLFxuXHRcdHVuZG9IaW50OiAndW5kbyB0aGlzIGVkaXQnLFxuXHRcdCdEb3dubG9hZCBwcmV2aWV3IGRhdGEnOiAnRG93bmxvYWQgcHJldmlldyBkYXRhJyxcblx0XHQnSW52YWxpZCBvciBJUCB1c2VyJzogJ0ludmFsaWQgb3IgSVAgdXNlcicsXG5cdFx0J05vdCBhIHJlZ2lzdGVyZWQgdXNlcm5hbWUnOiAnTm90IGEgcmVnaXN0ZXJlZCB1c2VybmFtZScsXG5cdFx0QkxPQ0tFRDogJ0JMT0NLRUQnLFxuXHRcdCdIYXMgYmxvY2tzJzogJ0hhcyBibG9ja3MnLFxuXHRcdCcgZWRpdHMgc2luY2U6ICc6ICcgZWRpdHMgc2luY2U6ICcsXG5cdFx0J2xhc3QgZWRpdCBvbiAnOiAnbGFzdCBlZGl0IG9uICcsXG5cdFx0J2hlL2hpbSc6ICdoZS9oaW0nLFxuXHRcdCdzaGUvaGVyJzogJ3NoZS9oZXInLFxuXHRcdC8vIEF1dG9lZGl0aW5nXG5cdFx0J0VudGVyIGEgbm9uLWVtcHR5IGVkaXQgc3VtbWFyeSBvciBwcmVzcyBjYW5jZWwgdG8gYWJvcnQnOlxuXHRcdFx0J0VudGVyIGEgbm9uLWVtcHR5IGVkaXQgc3VtbWFyeSBvciBwcmVzcyBjYW5jZWwgdG8gYWJvcnQnLFxuXHRcdCdGYWlsZWQgdG8gZ2V0IHJldmlzaW9uIGluZm9ybWF0aW9uLCBwbGVhc2UgZWRpdCBtYW51YWxseS5cXG5cXG4nOlxuXHRcdFx0J0ZhaWxlZCB0byBnZXQgcmV2aXNpb24gaW5mb3JtYXRpb24sIHBsZWFzZSBlZGl0IG1hbnVhbGx5LlxcblxcbicsXG5cdFx0J1RoZSAlcyBidXR0b24gaGFzIGJlZW4gYXV0b21hdGljYWxseSBjbGlja2VkLiBQbGVhc2Ugd2FpdCBmb3IgdGhlIG5leHQgcGFnZSB0byBsb2FkLic6XG5cdFx0XHQnVGhlICVzIGJ1dHRvbiBoYXMgYmVlbiBhdXRvbWF0aWNhbGx5IGNsaWNrZWQuIFBsZWFzZSB3YWl0IGZvciB0aGUgbmV4dCBwYWdlIHRvIGxvYWQuJyxcblx0XHQnQ291bGQgbm90IGZpbmQgYnV0dG9uICVzLiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGluIHlvdXIgamF2YXNjcmlwdCBmaWxlLic6XG5cdFx0XHQnQ291bGQgbm90IGZpbmQgYnV0dG9uICVzLiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGluIHlvdXIgamF2YXNjcmlwdCBmaWxlLicsXG5cdFx0Ly8gUG9wdXBzIHNldHVwXG5cdFx0J09wZW4gZnVsbC1zaXplIGltYWdlJzogJ09wZW4gZnVsbC1zaXplIGltYWdlJyxcblx0XHRhdXRvZWRpdF92ZXJzaW9uOiAnbnAyMDE0MDQxNicsXG5cdH07XG5cdGNvbnN0IHBvcHVwU3RyaW5nID0gKHN0cikgPT4ge1xuXHRcdGlmIChtZXNzYWdlICE9PSB1bmRlZmluZWQgJiYgbWVzc2FnZSAmJiBtZXNzYWdlW3N0cl0pIHtcblx0XHRcdHJldHVybiBtZXNzYWdlW3N0cl07XG5cdFx0fVxuXHRcdGlmIChwZy5zdHJpbmdbc3RyXSkge1xuXHRcdFx0cmV0dXJuIHBnLnN0cmluZ1tzdHJdO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RyO1xuXHR9O1xuXHRjb25zdCB0cHJpbnRmID0gKHN0ciwgc3VicykgPT4ge1xuXHRcdGlmICh0eXBlb2Ygc3VicyAhPT0gdHlwZW9mIFtdKSB7XG5cdFx0XHRzdWJzID0gW3N1YnNdO1xuXHRcdH1cblx0XHRyZXR1cm4gc2ltcGxlUHJpbnRmKHBvcHVwU3RyaW5nKHN0ciksIHN1YnMpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBzdHJpbmdzLmpzXG5cdC8vIFNUQVJURklMRTogcnVuLmpzXG5cdC8vIFJ1biB0aGluZ3Ncblx0Ly8gRm9yIHNvbWUgcmVhc29uIHBvcHVwcyByZXF1aXJlcyBhIGZ1bGx5IGxvYWRlZCBwYWdlIGpRdWVyeS5yZWFkeSguLi4pIGNhdXNlcyBwcm9ibGVtcyBmb3Igc29tZS5cblx0Ly8gVGhlIG9sZCBhZGRPbmxvYWRIb29rIGRpZCBzb21ldGhpbmcgc2ltaWxhciB0byB0aGUgYmVsb3dcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcblx0XHRhdXRvRWRpdCgpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIHdpbGwgc2V0dXAgcG9wdXBzXG5cdFx0JCh3aW5kb3cpLm9uKCdsb2FkJywgYXV0b0VkaXQpO1xuXHR9XG5cdC8vIFN1cHBvcnQgZm9yIE1lZGlhV2lraSdzIGxpdmUgcHJldmlldywgVmlzdWFsRWRpdG9yJ3Mgc2F2ZXMgYW5kIEVjaG8ncyBmbHlvdXQuXG5cdCgoKSA9PiB7XG5cdFx0bGV0IG9uY2UgPSB0cnVlO1xuXHRcdGNvbnN0IGR5bmFtaWNDb250ZW50SGFuZGxlciA9ICgkY29udGVudCkgPT4ge1xuXHRcdFx0Ly8gVHJ5IHRvIGRldGVjdCB0aGUgaG9vayBmaXJlZCBvbiBpbml0aWFsIHBhZ2UgbG9hZCBhbmQgZGlzcmVnYXJkXG5cdFx0XHQvLyBpdCwgd2UgYWxyZWFkeSBob29rIHRvIG9ubG9hZCAocG9zc2libHkgdG8gZGlmZmVyZW50IHBhcnRzIG9mXG5cdFx0XHQvLyBwYWdlIC0gaXQncyBjb25maWd1cmFibGUpIGFuZCBydW5uaW5nIHR3aWNlIG1pZ2h0IGJlIGJhZC4gVWdseS4uLlxuXHRcdFx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgPT09ICdtdy1jb250ZW50LXRleHQnICYmIG9uY2UpIHtcblx0XHRcdFx0b25jZSA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZWdpc3Rlckhvb2tzRm9yVmlzaWJsZU5hdnBvcHMgPSAoKSA9PiB7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBwZy5jdXJyZW50LmxpbmtzICYmIGkgPCBwZy5jdXJyZW50LmxpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmF2cG9wID0gcGcuY3VycmVudC5saW5rc1tpXS5uYXZwb3B1cDtcblx0XHRcdFx0XHRpZiAoIW5hdnBvcCB8fCAhbmF2cG9wLmlzVmlzaWJsZSgpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0TmF2cG9wdXAudHJhY2tlci5hZGRIb29rKHBvc0NoZWNrZXJIb29rKG5hdnBvcCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZG9JdCA9ICgpID0+IHtcblx0XHRcdFx0cmVnaXN0ZXJIb29rc0ZvclZpc2libGVOYXZwb3BzKCk7XG5cdFx0XHRcdCRjb250ZW50LmVhY2goKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdGVsZW1lbnQucmFuU2V0dXBUb29sdGlwc0FscmVhZHkgPSBmYWxzZTtcblx0XHRcdFx0XHRzZXR1cFRvb2x0aXBzKGVsZW1lbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRzZXR1cFBvcHVwcyhkb0l0KTtcblx0XHR9O1xuXHRcdC8vIFRoaXMgaG9vayBpcyBhbHNvIGZpcmVkIGFmdGVyIHBhZ2UgbG9hZC5cblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGR5bmFtaWNDb250ZW50SGFuZGxlcik7XG5cdFx0bXcuaG9vaygnZXh0LmVjaG8ub3ZlcmxheS5iZWZvcmVTaG93aW5nT3ZlcmxheScpLmFkZCgoJG92ZXJsYXkpID0+IHtcblx0XHRcdGR5bmFtaWNDb250ZW50SGFuZGxlcigkb3ZlcmxheS5maW5kKCcubXctZWNoby1zdGF0ZScpKTtcblx0XHR9KTtcblx0fSkoKTtcblx0Ly8gRU5ERklMRTogcnVuLmpzXG59O1xuXG5leHBvcnQge3BvcHVwc307XG4iLCAiaW1wb3J0ICcuL05hdmlnYXRpb25fcG9wdXBzLmxlc3MnO1xuaW1wb3J0IHtwb3B1cHN9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O01BQ1JuaEQsTUFBTTtNQUNORSxRQUFRO01BQ1JFLFFBQVE7SUFDVCxDQUFDO0FBRUQwZ0QsY0FBVSxlQUFlLElBQUk7QUFDN0JBLGNBQVUsd0JBQXdCLElBQUk7QUFDdENBLGNBQVUsdUJBQXVCLEtBQUs7QUFFdENBLGNBQVUsb0JBQW9CLFdBQVc7QUFDekNBLGNBQVUsa0JBQWtCLEVBQUU7QUFDOUJBLGNBQVUsdUJBQXVCLEdBQUc7QUFFcENBLGNBQVUsa0JBQWtCLEtBQUs7QUFDakNBLGNBQVUsdUJBQXVCLFFBQVE7QUFDekNBLGNBQVUsZ0JBQWdCLEtBQUs7QUFDL0JBLGNBQVUsc0JBQXNCLFFBQVE7QUFDeENBLGNBQVUsNEJBQTRCLEtBQUs7QUFDM0NBLGNBQVUscUJBQXFCLEtBQUs7QUFDcENBLGNBQVUsdUJBQXVCLEtBQUs7QUFDdENBLGNBQVUseUJBQXlCLFFBQVE7QUFDM0NBLGNBQVUsOEJBQThCLElBQUk7QUFDNUNBLGNBQVUsMkJBQTJCLElBQUk7QUFDekNBLGNBQVUsc0JBQXNCLE1BQU07QUFFdENBLGNBQVUsaUJBQWlCLElBQUk7QUFDL0JBLGNBQVUseUJBQXlCLFVBQVU7QUFDN0NBLGNBQVUscUJBQXFCLElBQUk7QUFDbkNBLGNBQVUsd0JBQXdCLFlBQVk7QUFDOUNBLGNBQVUsdUJBQXVCLEVBQUU7QUFFbkNBLGNBQVUsaUJBQWlCLElBQUk7QUFDL0JBLGNBQVUsb0JBQW9CLElBQUk7QUFDbENBLGNBQVUsNEJBQTRCLENBQUM7QUFDdkNBLGNBQVUsNkJBQTZCLEdBQUc7QUFDMUNBLGNBQVUscUJBQXFCLElBQUk7QUFDbkNBLGNBQVUsNkJBQTZCLElBQUk7QUFDM0NBLGNBQVUsNEJBQTRCLElBQUk7QUFDMUNBLGNBQVUsNEJBQTRCLElBQUk7QUFDMUNBLGNBQVUsMkJBQTJCLElBQUk7QUFDekNBLGNBQVUsc0JBQXNCLEtBQUs7QUFDckNBLGNBQVUsMkJBQTJCLE9BQU87QUFFNUNBLGNBQVUscUJBQXFCLElBQUk7QUFDbkNBLGNBQVUscUJBQXFCLEdBQUc7QUFDbENBLGNBQVUseUJB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bXRCLGVBQWVsckIsTUFBTSxDQUFDO1FBQ2hEO01BQ0Q7QUFDQSxZQUFNbXlDLE9BQU9BLE1BQU07QUFDbEJELHVDQUErQjtBQUMvQkQsaUJBQVNHLEtBQUssQ0FBQ0MsUUFBUWhrQyxZQUFZO0FBQ2xDQSxrQkFBUXJULDBCQUEwQjtBQUNsQ2Isd0JBQWNrVSxPQUFPO1FBQ3RCLENBQUM7TUFDRjtBQUNBOEIsa0JBQVlnaUMsSUFBSTtJQUNqQjtBQUVBdGlDLE9BQUd5d0IsS0FBSyxrQkFBa0IsRUFBRWdTLElBQUlOLHFCQUFxQjtBQUNyRG5pQyxPQUFHeXdCLEtBQUssdUNBQXVDLEVBQUVnUyxJQUFLQyxjQUFhO0FBQ2xFUCw0QkFBc0JPLFNBQVM5dUIsS0FBSyxnQkFBZ0IsQ0FBQztJQUN0RCxDQUFDO0VBQ0YsR0FBRztBQUVKOztBQ24rUEFELEVBQUV2cUIsTUFBTTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgIm1lc3NhZ2UiLCAiYXJ0aWNsZSIsICJ3aW5kb3ciLCAid2dVTFMiLCAiY2F0ZWdvcnkiLCAiY2F0ZWdvcmllcyIsICJpbWFnZSIsICJpbWFnZXMiLCAic3R1YiIsICJrQiIsICJieXRlcyIsICJkYXkiLCAiZGF5cyIsICJob3VyIiwgImhvdXJzIiwgIm1pbnV0ZSIsICJtaW51dGVzIiwgInNlY29uZCIsICJzZWNvbmRzIiwgIndlZWsiLCAid2Vla3MiLCAibW9udGgiLCAibW9udGhzIiwgInllYXIiLCAieWVhcnMiLCAic2VhcmNoIiwgIlNlYXJjaEhpbnQiLCAid2ViIiwgImdsb2JhbCIsICJhY3Rpb25zIiwgInBvcHVwc01lbnUiLCAidG9nZ2xlUHJldmlld3NIaW50IiwgInJlc2V0IiwgImRpc2FibGUiLCAiZGlzYWJsZVBvcHVwc0hpbnQiLCAicHVyZ2VQb3B1cHNIaW50IiwgIlBvcHVwc0hpbnQiLCAic3BhY2ViYXIiLCAidmlldyIsICJ2aWV3SGludCIsICJ0YWxrIiwgImRlbCIsICJkZWxldGUiLCAiZGVsZXRlSGludCIsICJ1bmRlbGV0ZVNob3J0IiwgIlVuZGVsZXRlSGludCIsICJwcm90ZWN0IiwgInByb3RlY3RIaW50IiwgInVucHJvdGVjdFNob3J0IiwgInVucHJvdGVjdEhpbnQiLCAibW92ZSIsICJNb3ZlcGFnZUhpbnQiLCAiZWRpdCIsICJlZGl0SGludCIsICJuZXciLCAibmV3U2VjdGlvbkhpbnQiLCAibnVsbEVkaXRIaW50IiwgImhpc3QiLCAiaGlzdG9yeSIsICJoaXN0b3J5SGludCIsICJsYXN0IiwgImxhc3RFZGl0IiwgImxhc3RDb250cmliIiwgImxhc3RDb250cmliSGludCIsICJjdXIiLCAiZGlmZkN1ciIsICJvbGRFZGl0IiwgInB1cmdlIiwgInB1cmdlSGludCIsICJyYXciLCAicmF3SGludCIsICJyZW5kZXIiLCAicmVuZGVySGludCIsICJzaW5jZU1lIiwgInNpbmNlTWVIaW50IiwgImVkcyIsICJlZGl0b3JzIiwgImVkaXRvckxpc3RIaW50IiwgInJlbGF0ZWQiLCAicmVsYXRlZENoYW5nZXMiLCAiUmVjZW50Y2hhbmdlc2xpbmtlZEhpbnQiLCAiZWRpdE9sZCIsICJydiIsICJyZXZlcnQiLCAicmV2ZXJ0SGludCIsICJ1bmRvIiwgInVuZG9IaW50IiwgImRlZmF1bHRwb3B1cFJlZGxpbmtTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cEZpeERhYnNTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cEZpeFJlZGlyc1N1bW1hcnkiLCAiZGVmYXVsdHBvcHVwRXh0ZW5kZWRSZXZlcnRTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFJldmVydFRvUHJldmlvdXNTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFJldmVydFN1bW1hcnkiLCAiZGVmYXVsdHBvcHVwUXVlcmllZFJldmVydFRvUHJldmlvdXNTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFJtRGFiTGlua1N1bW1hcnkiLCAiUmVkaXJlY3RzIiwgImRpc2FtYmlnIiwgImRpc2FtYmlnSGludCIsICJtYWlubGluayIsICJ3aWtpTGluayIsICJ3aWtpTGlua3MiLCAid2hhdExpbmtzSGVyZSIsICJXaGF0bGlua3NoZXJlSGludCIsICJ1bndhdGNoU2hvcnQiLCAid2F0Y2hUaGluZ3kiLCAid2F0Y2hIaW50IiwgInVud2F0Y2hIaW50IiwgInJzcyIsICJ1c2VyIiwgImVtYWlsIiwgIkVtYWlsdXNlckhpbnQiLCAic3BhY2UiLCAiUHJlZml4aW5kZXhIaW50IiwgImNvdW50IiwgImthdGVsaW5rSGludCIsICJjb250cmlicyIsICJjb250cmlidXRpb25zIiwgImRlbGV0ZWRDb250cmlicyIsICJDb250cmlidXRpb25zSGludCIsICJ0cmVlIiwgImNvbnRyaWJzVHJlZUhpbnQiLCAibG9nIiwgInVzZXJMb2dIaW50IiwgInVuYmxvY2tTaG9ydCIsICJibG9jayIsICJJcGJsb2NrbGlzdEhpbnQiLCAiQmxvY2tpcEhpbnQiLCAiYmxvY2tMb2dIaW50IiwgInByb3RlY3RMb2dIaW50IiwgInBhZ2VMb2dIaW50IiwgImRlbGV0ZUxvZ0hpbnQiLCAibSIsICJiaW5nU2VhcmNoSGludCIsICJoaXN0b3J5ZmVlZEhpbnQiLCAiVGhhbmtzSGludCIsICJtYXJrcGF0cm9sbGVkSGludCIsICJkZWZhdWx0cG9wdXBSZXZpZXdlZFN1bW1hcnkiLCAicmV2ZGVsIiwgIkRlbGV0ZWRjb250cmlidXRpb25zSGludCIsICJCTE9DS0VEIiwgIkVtYWlsVXNlckhpbnQiLCAiUkFOR0VCTE9DS0VEIiwgIkhJRERFTiIsICJMT0NLRUQiLCAiZGlmZiIsICJhdXRvZWRpdF92ZXJzaW9uIiwgIlByZWZpeEluZGV4SGludCIsICJudWxsRWRpdFN1bW1hcnkiLCAic2VwYXJhdG9yIiwgImNvbW1hIiwgInBvcHVwcyIsICJwZyIsICJyZSIsICJucyIsICJzdHJpbmciLCAid2lraSIsICJtaXNjIiwgIm9wdGlvbiIsICJvcHRpb25EZWZhdWx0IiwgImZsYWciLCAiY2FjaGUiLCAic3RydWN0dXJlcyIsICJ0aW1lciIsICJjb3VudGVyIiwgImN1cnJlbnQiLCAiZm4iLCAiZW5kb2ZsaXN0IiwgIkhUTUxFbGVtZW50IiwgInNldHVwVG9vbHRpcHMiLCAiY29udGFpbmVyIiwgInJlbW92ZSIsICJmb3JjZSIsICJwb3BEYXRhIiwgImNvbmNhdCIsICJnZXRWYWx1ZU9mIiwgImRvY3VtZW50IiwgImVkaXRmb3JtIiwgIndwVGV4dGJveDEiLCAib25tb3VzZXVwIiwgImRvU2VsZWN0aW9uUG9wdXAiLCAiZGVmYXVsdFBvcHVwc0NvbnRhaW5lciIsICJyYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSIsICJhbmNob3JzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAic2V0dXBUb29sdGlwc0xvb3AiLCAicXVlcnlTZWxlY3RvciIsICJzZXR1cFRvb2x0aXBzTG9vcDIiLCAiYmVnaW4iLCAiaG93bWFueSIsICJzbGVlcCIsICJhcmdzIiwgInNpbXBsZVByaW50ZiIsICJmaW5pc2giLCAibG9vcGVuZCIsICJNYXRoIiwgIm1pbiIsICJsZW5ndGgiLCAiaiIsICJkb1Rvb2x0aXAiLCAicmVtb3ZlVG9vbHRpcCIsICJhZGRUb29sdGlwIiwgImEiLCAiaHJlZiIsICJzZXRUaW1lb3V0IiwgInJtVG9jVG9vbHRpcHMiLCAiZmluaXNoZWRMb2FkaW5nIiwgInRvYyIsICJ0b2NMaW5rcyIsICJ0b2NMZW4iLCAiaXNQb3B1cExpbmsiLCAib25tb3VzZW92ZXIiLCAibW91c2VPdmVyV2lraUxpbmsiLCAib25tb3VzZW91dCIsICJtb3VzZU91dFdpa2lMaW5rIiwgIm9ubW91c2Vkb3duIiwgImtpbGxQb3B1cCIsICJoYXNQb3B1cCIsICJvcmlnaW5hbFRpdGxlIiwgInRpdGxlIiwgInJlbW92ZVRpdGxlIiwgInJlc3RvcmVUaXRsZSIsICJyZWdpc3Rlckhvb2tzIiwgIm5wIiwgInBvcHVwTWF4V2lkdGgiLCAic2V0TWF4V2lkdGgiLCAibWFpbkRpdiIsICJzdHlsZSIsICJtYXhXaWR0aCIsICJhZGRIb29rIiwgImFkZFBvcHVwU2hvcnRjdXRzIiwgInJtUG9wdXBTaG9ydGN1dHMiLCAicmVtb3ZlTW9kaWZpZXJLZXlMaXN0ZW5lciIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgIm1vZGlmaWVyS2V5TGlzdGVuZXIiLCAibW91c2VPdmVyV2lraUxpbmszIiwgImV2dCIsICJldmVudCIsICJhY3Rpb24iLCAia2V5IiwgInNlbGYiLCAiZXZ0MiIsICJtb3VzZU92ZXJXaWtpTGluazIiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJmb290bm90ZVRhcmdldCIsICJhVGl0bGUiLCAiVGl0bGUiLCAiZnJvbUFuY2hvciIsICJhbmNoIiwgImFuY2hvciIsICJ0ZXN0IiwgImxUaXRsZSIsICJmcm9tVVJMIiwgImxvY2F0aW9uIiwgInRvU3RyaW5nIiwgImVsIiwgIm5vZGVOYW1lIiwgIm50IiwgInRvTG93ZXJDYXNlIiwgInBhcmVudE5vZGUiLCAiZm9vdG5vdGVQcmV2aWV3IiwgIngiLCAibmF2cG9wIiwgInNldFBvcHVwSFRNTCIsICJpbm5lckhUTUwiLCAiaWROdW1iZXIiLCAibW9kaWZpZXJQcmVzc2VkIiwgIm1vZCIsICJpc0NvcnJlY3RNb2RpZmllciIsICJfYSIsICJsaW5rIiwgIm5hdnBvcHVwIiwgImlzVmlzaWJsZSIsICJwb3B1cFN0cnVjdHVyZSIsICJzZXREZWZhdWx0IiwgIm5ld05hdnBvcHVwIiwgImxpbmtzSGFzaCIsICJsaW5rcyIsICJwdXNoIiwgInBlbmRpbmciLCAic2ltcGxlUG9wdXBDb250ZW50IiwgInNob3dTb29uSWZTdGFibGUiLCAiZGVsYXkiLCAiY2xlYXJJbnRlcnZhbCIsICJjaGVja1BvcHVwUG9zaXRpb24iLCAic2V0SW50ZXJ2YWwiLCAic2ltcGxlTm9Nb3JlIiwgImQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicyIsICJhcHBlbmQiLCAiZGlzcGxheSIsICJub25zaW1wbGVQb3B1cENvbnRlbnQiLCAicG9wdXBTdHJpbmciLCAiaGFzUG9wdXBNZW51IiwgInNldElubmVySFRNTCIsICJwb3B1cEhUTUwiLCAiZmlsbEVtcHR5U3BhbnMiLCAiZHJhZ0hhbmRsZSIsICJtYWtlRHJhZ2dhYmxlIiwgInBvcHVwUmVkbGlua0hUTUwiLCAiZGVidWdEYXRhIiwgIk5hdnBvcHVwIiwgImZ1enoiLCAicGFyZW50QW5jaG9yIiwgInBhcmVudFBvcHVwIiwgIm93bmVyIiwgInNob3VsZFNob3dOb25TaW1wbGUiLCAic2hvdWxkU2hvdyIsICJkaWZmMiIsICJwYXJhbXMiLCAicGFyc2VQYXJhbXMiLCAib2xkaWQiLCAicmVmZXJlbmNlRWxlbWVudCIsICJsb2FkRGlmZiIsICJsb2FkQVBJUHJldmlldyIsICJiYWNrbGlua3MiLCAibmFtZXNwYWNlSWQiLCAibnNJbWFnZUlkIiwgImFuY2hvckNvbnRhaW5zSW1hZ2UiLCAibG9hZEltYWdlIiwgIm5zQ2F0ZWdvcnlJZCIsICJuc1VzZXJJZCIsICJuc1VzZXJ0YWxrSWQiLCAic3RhcnRBcnRpY2xlUHJldmlldyIsICJwZW5kaW5nTmF2cG9wVGFzayIsICJjb21wbGV0ZWROYXZwb3BUYXNrIiwgInJlZGlyIiwgImxvYWRQcmV2aWV3IiwgIm9yaWdpbmFsQXJ0aWNsZSIsICJsb2FkUHJldmlld0Zyb21SZWRpciIsICJyZWRpck1hdGNoIiwgInRhcmdldCIsICJmcm9tV2lraVRleHQiLCAicmVkaXJUYXJnZXQiLCAid2FyblJlZGlyIiwgInJlZGlyTGluayIsICJpbnNlcnRQcmV2aWV3IiwgImRvd25sb2FkIiwgInJlZGlyZWN0IiwgImV4ZWMiLCAiZGF0YSIsICJ2aXNpYmxlIiwgImluc2VydFByZXZpZXdOb3ciLCAiaWQiLCAid2lraVRleHQiLCAiYXJ0IiwgIm1ha2VGaXhEYWJzIiwgImdldFBhZ2VJbmZvIiwgInNldFBvcHVwVHJhaWxlciIsICJpbWFnZVBhZ2UiLCAiZ2V0VmFsaWRJbWFnZUZyb21XaWtpVGV4dCIsICJpbnNlcnRBcnRpY2xlUHJldmlldyIsICJuc1RlbXBsYXRlSWQiLCAiaCIsICJlbnRpZnkiLCAic3BsaXQiLCAiU3RyaW5nIiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgImpvaW4iLCAiX3RlbXBsYXRlT2JqZWN0MiIsICJwIiwgInByZXBQcmV2aWV3bWFrZXIiLCAic2hvd1ByZXZpZXciLCAiYW5jaG9yaXplIiwgImFuY2hvclN0cmluZyIsICJ1cmxCYXNlIiwgImpvaW5QYXRoIiwgImFydGljbGViYXNlIiwgInVybFN0cmluZyIsICJQcmV2aWV3bWFrZXIiLCAiYW5jaFJlIiwgIlJlZ0V4cCIsICJsaXRlcmFsaXplUmVnZXgiLCAicmVwbGFjZSIsICJtYXRjaCIsICJzbGljZSIsICJtYXgiLCAiaW5kZXhPZiIsICJsaW5lcyIsICJpIiwgImtpbGxQb3B1cDIiLCAiYmFuaXNoIiwgImFib3J0QWxsRG93bmxvYWRzIiwgIkRyYWciLCAiY29uc3RydWN0b3IiLCAic3RhcnRDb25kaXRpb24iLCAiZW5kSG9vayIsICJmaXhFIiwgImUiLCAibGF5ZXJYIiwgIm9mZnNldFgiLCAibGF5ZXJZIiwgIm9mZnNldFkiLCAiaW5pdCIsICJvIiwgIm9Sb290IiwgIm9iaiIsICJzdGFydCIsICJkcmFnZ2luZyIsICJwb3B1cHNfZHJhZ2dhYmxlIiwgImhtb2RlIiwgInZtb2RlIiwgInJvb3QiLCAiTnVtYmVyIiwgImlzTmFOIiwgInBhcnNlSW50IiwgImxlZnQiLCAidG9wIiwgIm9udGhpc1N0YXJ0IiwgIm9udGhpc0VuZCIsICJvbnRoaXMiLCAieSIsICJib3R0b20iLCAicmlnaHQiLCAibGFzdE1vdXNlWCIsICJjbGllbnRYIiwgImxhc3RNb3VzZVkiLCAiY2xpZW50WSIsICJvbm1vdXNlbW92ZURlZmF1bHQiLCAib25tb3VzZW1vdmUiLCAiZTIiLCAiZHJhZyIsICJlbmQiLCAiZXkiLCAiZXgiLCAibngiLCAibnkiLCAib3JpZ2luYWwiLCAicG9wdXBMYXlvdXQiLCAicG9wdXBSZWRpclNwYW5zIiwgInBvcHVwVGl0bGUiLCAibmF2bGlua1N0cmluZ1RvSFRNTCIsICJwb3B1cFRvcExpbmtzIiwgIm5hdkxpbmtzSFRNTCIsICJoaW50IiwgInBvcHVwSW1hZ2UiLCAiaW1hZ2VIVE1MIiwgInBvcHVwUmVkaXJUaXRsZSIsICJwb3B1cFJlZGlyVG9wTGlua3MiLCAiY29weVN0cnVjdHVyZSIsICJvbGRTdHJ1Y3R1cmUiLCAibmV3U3RydWN0dXJlIiwgInByb3AiLCAiT2JqZWN0IiwgImhhc093biIsICJub3N0YWxnaWEiLCAic3RyIiwgImVkaXRzdHIiLCAiZWRpdE9sZGlkU3RyIiwgImhpc3RvcnlzdHIiLCAid2F0Y2hzdHIiLCAiZmFuY3kiLCAid2F0Y2giLCAicG9wdXBPdGhlckxpbmtzIiwgImFkbWluIiwgIm5vcm1hbCIsICJwb3B1cFJlZGlyT3RoZXJMaW5rcyIsICJmYW5jeTIiLCAibWVudXMiLCAic2hvcnRlciIsICJkcm9wZGl2IiwgImVuZGRpdiIsICJsYXN0ZWRpdCIsICJ0aGFuayIsICJqc0hpc3RvcnkiLCAibGlua3NoZXJlIiwgIm51bGxQdXJnZSIsICJ2aWV3T3B0aW9ucyIsICJlZGl0Um93IiwgIm1hcmtQYXRyb2xsZWQiLCAibmV3VG9waWMiLCAicHJvdGVjdERlbGV0ZSIsICJtZW51VGl0bGUiLCAic2hvcnRtZW51cyIsICJsaXRlIiwgInN1YnN0aXR1dGUiLCAiY21kQm9keSIsICJmcm9tUmUiLCAiZnJvbSIsICJmbGFncyIsICJ0byIsICJleGVjQ21kcyIsICJjbWRMaXN0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJlcnIiLCAiZiIsICJwYXJzZUNtZCIsICJwYXJzZUNtZDIiLCAiY2hhckF0IiwgInBhcnNlU3Vic3RpdHV0ZSIsICJyZW1haW5kZXIiLCAidW5Fc2NhcGUiLCAic2VwIiwgIl90ZW1wbGF0ZU9iamVjdDMiLCAidG1wIiwgInNraXBPdmVyIiwgInNlZ21lbnQiLCAic2tpcFRvRW5kIiwgImVuZFNlZ21lbnQiLCAiZmluZE5leHQiLCAiX3NlcCIsICJjaCIsICJzZXRDaGVja2JveCIsICJwYXJhbSIsICJib3giLCAidmFsIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJjaGVja2VkIiwgImF1dG9FZGl0IiwgImF1dG9FZGl0NCIsICJzZXR1cFBvcHVwcyIsICJhdXRvQ2xpY2tUb2tlbiIsICJtb2RpZnlXYXRjaGxpc3QiLCAiYWxyZWFkeVJhbiIsICJjbWRTdHJpbmciLCAiZWRpdGJveCIsICJpbnB1dCIsICJvdXRwdXQiLCAid3BNaW5vcmVkaXQiLCAid3BXYXRjaHRoaXMiLCAicnZpZCIsICJ1cmwiLCAiYXBpd2lraWJhc2UiLCAic3RhcnREb3dubG9hZCIsICJhdXRvRWRpdDIiLCAic3VtbWFyeSIsICJzdW1tYXJ5cHJvbXB0IiwgInN1bW1hcnlub3RpY2UiLCAiZ2V0UnZTdW1tYXJ5IiwgInR4dCIsICJyZXNwb25zZSIsICJwcm9tcHQiLCAid3BTdW1tYXJ5IiwgImF1dG9FZGl0MyIsICJzZXNzaW9uSWQiLCAiYnRuIiwgImJ1dHRvbiIsICJtc2ciLCAidHByaW50ZiIsICJiYW5uZXJNZXNzYWdlIiwgImNsaWNrIiwgIm5vdGlmeSIsICJ0YWciLCAidHlwZSIsICJoZWFkaW5ncyIsICJkaXYiLCAiZXNjYXBlUXVvdGVzSFRNTCIsICJpbnNlcnRCZWZvcmUiLCAidGVtcGxhdGUiLCAianNvbiIsICJnZXRKc09iaiIsICJhbnlDaGlsZCIsICJxdWVyeSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAidGltZXN0YW1wIiwgInJldmlkIiwgInVzZXJoaWRkZW4iLCAiRG93bmxvYWRlciIsICJYTUxIdHRwUmVxdWVzdCIsICJodHRwIiwgImxhc3RNb2RpZmllZCIsICJjYWxsYmFja0Z1bmN0aW9uIiwgIm9uRmFpbHVyZSIsICJhYm9ydGVkIiwgIm1ldGhvZCIsICJhc3luYyIsICJzZW5kIiwgImFib3J0IiwgImdldERhdGEiLCAicmVzcG9uc2VUZXh0IiwgInNldFRhcmdldCIsICJvcGVuIiwgInNldFJlcXVlc3RIZWFkZXIiLCAidXNlckFnZW50IiwgImdldFJlYWR5U3RhdGUiLCAicmVhZHlTdGF0ZSIsICJkb3dubG9hZHNJblByb2dyZXNzIiwgImdldExhc3RNb2RpZmllZERhdGUiLCAibGFzdG1vZCIsICJnZXRSZXNwb25zZUhlYWRlciIsICJEYXRlIiwgInNldENhbGxiYWNrIiwgIm9ucmVhZHlzdGF0ZWNoYW5nZSIsICJnZXRTdGF0dXMiLCAic3RhdHVzIiwgIm5ld0Rvd25sb2FkIiwgIm5ld0Rvd25sb2FkMiIsICJjYWxsYmFjayIsICJvbmZhaWx1cmUiLCAiZmFrZURvd25sb2FkIiwgIkluc3RhIiwgInNldHVwTGl2ZVByZXZpZXciLCAiX2IiLCAiY29uZiIsICJiYXNlVXJsIiwgImxhbmciLCAiaW50ZXJ3aWtpIiwgImRlZmF1bHRfdGh1bWJfd2lkdGgiLCAicGF0aHMiLCAiYXJ0aWNsZXMiLCAiYXJ0aWNsZVBhdGgiLCAibWF0aCIsICJpbWFnZXNfZmFsbGJhY2siLCAibG9jYWxlIiwgImNvbmZpZyIsICJnZXQiLCAibmFtZSIsICJzaWduYXR1cmUiLCAiQkxPQ0tfSU1BR0UiLCAiZHVtcCIsICJjb252ZXJ0IiwgImxsIiwgInIiLCAicmVtYWluIiwgInNoIiwgInNoaWZ0IiwgInBzIiwgImYyIiwgImYzIiwgIm8yIiwgImMiLCAicDIiLCAiaHRtbF9lbnRpdGllcyIsICJodG1sZXNjYXBlX3RleHQiLCAiaHRtbGVzY2FwZV9hdHRyIiwgInN0cl9pbWF0Y2giLCAiYiIsICJsIiwgImNvbXBhcmVMaW5lU3RyaW5nT3JSZWciLCAiY29tcGFyZUxpbmVTdHJpbmciLCAiY2hhckF0UG9pbnQiLCAiZW5kbCIsICJwYXJzZV9saXN0IiwgInByZXYiLCAibF9tYXRjaCIsICJpcG9zIiwgInByZXZQb3MiLCAicGkiLCAibWF0Y2hQb3MiLCAibGkiLCAiYXQiLCAicGFyc2VfaW5saW5lX25vd2lraSIsICJkdF9tYXRjaCIsICJ1bnNoaWZ0IiwgInBhcnNlX3RhYmxlIiwgInBhcnNlX3RhYmxlX2RhdGEiLCAidGRfbGluZSIsICJtYXRjaF9pIiwgInRkX21hdGNoIiwgInBvcCIsICJ0YyIsICJ0ZCIsICJwYXJzZV9wcmUiLCAicGFyc2VfYmxvY2tfaW1hZ2UiLCAicGFyc2VfaW1hZ2UiLCAic3Vic3RyaW5nIiwgIndpZHRoIiwgImF0dHIiLCAiZmlsZW5hbWUiLCAiY2FwdGlvbiIsICJ0aHVtYiIsICJmcmFtZSIsICJjZW50ZXIiLCAiYWxpZ24iLCAibmVzdGluZyIsICJsYXN0X2F0dHIiLCAid19tYXRjaCIsICJsYXN0ZW5kIiwgInN1YnN0YXJ0IiwgIm5lc3RsZXYiLCAiY2xvc2UiLCAic3VibG9vcCIsICJodG1sIiwgInBhcnNlX2lubGluZV93aWtpIiwgInBhcnNlX2lubGluZV9pbWFnZXMiLCAibG9vcCIsICJ3aWtpMiIsICJwYXJzZV9pbmxpbmVfZm9ybWF0dGluZyIsICJlbSIsICJzdCIsICJkYXRlIiwgImdldFVUQ01pbnV0ZXMiLCAiZ2V0VVRDSG91cnMiLCAiZ2V0VVRDRGF0ZSIsICJnZXRVVENNb250aCIsICJnZXRVVENGdWxsWWVhciIsICJfJDAiLCAiJDEiLCAiJDIiLCAiJDMiLCAiJDQiLCAid2lraTJodG1sIiwgImJhc2V1cmwiLCAicG9wdXBGaWx0ZXJQYWdlU2l6ZSIsICJmb3JtYXRCeXRlcyIsICJwb3B1cEZpbHRlckNvdW50TGlua3MiLCAibnVtIiwgImNvdW50TGlua3MiLCAicG9wdXBGaWx0ZXJDb3VudEltYWdlcyIsICJjb3VudEltYWdlcyIsICJwb3B1cEZpbHRlckNvdW50Q2F0ZWdvcmllcyIsICJjb3VudENhdGVnb3JpZXMiLCAicG9wdXBGaWx0ZXJMYXN0TW9kaWZpZWQiLCAiX2RhdGEiLCAibm93IiwgImFnZSIsICJmb3JtYXRBZ2UiLCAiYWEiLCAic2VjbGVuIiwgIm1pbmxlbiIsICJob3VybGVuIiwgImRheWxlbiIsICJ3ZWVrbGVuIiwgIm51bXdlZWtzIiwgInN3ZWVrcyIsICJhZGR1bml0IiwgIm51bWRheXMiLCAic2RheXMiLCAibnVtaG91cnMiLCAic2hvdXJzIiwgIm51bW1pbnMiLCAic21pbnMiLCAibnVtc2VjcyIsICJzc2VjcyIsICJydW5Qb3B1cEZpbHRlcnMiLCAibGlzdCIsICJyZXQiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAicG9wdXBGaWx0ZXJzIiwgImV4dHJhUG9wdXBGaWx0ZXJzIiwgInBhZ2VJbmZvQXJyYXkiLCAicGFnZUluZm8iLCAidXBjYXNlRmlyc3QiLCAiaW1hZ2VCcmFja2V0Q291bnQiLCAiY2F0ZWdvcnlCcmFja2V0Q291bnQiLCAicG9wdXBGaWx0ZXJTdHViRGV0ZWN0IiwgIl9kb3dubG9hZCIsICJjb3VudHMiLCAic3R1YkNvdW50IiwgInJlYWwiLCAic2VjdCIsICJwb3B1cEZpbHRlckRpc2FtYmlnRGV0ZWN0IiwgIm5hbWVzcGFjZSIsICJpc0Rpc2FtYmlnIiwgInJvdW5kIiwgIlN0cmluZ3dyYXBwZXIiLCAiU3RyaW5nd3JhcHBlcjIiLCAic2V0VXRmIiwgIm9taXRBbmNob3IiLCAibGVuIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1cmxBbmNob3IiLCAiYW5jaG9yRnJvbVV0ZiIsICJlbmNvZGVVUklDb21wb25lbnQiLCAic3BsaXR0ZWQiLCAidSIsICJkZWNvZGVOYXN0aWVzIiwgInN0cmlwTmFtZXNwYWNlIiwgInNwZWNpYWxkaWZmIiwgIm5zU3BlY2lhbElkIiwgIm1haW4iLCAiZnJvbUJvdEludGVyZmFjZSIsICJleHRyYWN0ZWQiLCAiaXNTYWZhcmkiLCAidW5lc2NhcGUiLCAiZGVjb2RlVVJJIiwgImRlY29kZUVzY2FwZXMiLCAibXlEZWNvZGVVUkkiLCAiaGludFZhbHVlIiwgInNhZmVEZWNvZGVVUkkiLCAidG9Vc2VyTmFtZSIsICJ3aXRoTnMiLCAidXNlck5hbWUiLCAidCIsICJ0b1RhbGtQYWdlIiwgImxvY2FsaXplZE5hbWVzcGFjZSIsICJ0YWxrUGFnZSIsICJpc1RhbGtQYWdlIiwgInRvQXJ0aWNsZUZyb21UYWxrUGFnZSIsICJhcnRpY2xlRnJvbVRhbGtQYWdlIiwgImFydGljbGVGcm9tVGFsa09yQXJ0aWNsZSIsICJpc0lwVXNlciIsICJpcFVzZXIiLCAibnNNYWluc3BhY2VJZCIsICJzZXRVcmwiLCAidXJsZnJhZyIsICJ2IiwgImtlZXBTcGFjZXMiLCAiZW5jb2RlVVJJIiwgInJlbW92ZUFuY2hvciIsICJ0b1VybCIsICJ0aXRsZWJhc2UiLCAic3BlY2lhbERpZmYiLCAiaW5jbHVkZXMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAieiIsICJoZWxwZXIiLCAiZGVjb2RlRXh0cmFzIiwgInNlY3RTdHViIiwgInJlYWxTdHViIiwgImlzVmFsaWRJbWFnZU5hbWUiLCAiaXNJblN0cmlwcGFibGVOYW1lc3BhY2UiLCAiaXNJbk1haW5OYW1lc3BhY2UiLCAia2lkcyIsICJjaGlsZE5vZGVzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImtpZCIsICJtYXJrTm9wb3B1cFNwYW5MaW5rcyIsICJpbk5vcG9wdXBTcGFuIiwgImdldEF0dHJpYnV0ZSIsICJiYXNlbmFtZXMiLCAidXJsTm9Qb3B1cCIsICJtYXJrTm9wb3B1cFNwYW5MaW5rczIiLCAiZml4VmVjdG9yTWVudVBvcHVwcyIsICIkYm9keSIsICIkIiwgImZpbmQiLCAidG9BcnJheSIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJhcyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJnZXRQYWdlV2l0aENhY2hpbmciLCAib25Db21wbGV0ZSIsICJmaW5kSW5QYWdlQ2FjaGUiLCAiZ2V0UGFnZSIsICJhZGREb3dubG9hZCIsICJhZGRQYWdlVG9DYWNoZSIsICJwYWdlIiwgImpzb25fcmV0IiwgIkpTT04iLCAicGFyc2UiLCAid2FybmluZ3MiLCAidyIsICJlcnJvciIsICJlcnJsb2ciLCAiY29kZSIsICJpbmZvIiwgInRvVXBwZXJDYXNlIiwgImZpbmRJbkFycmF5IiwgImFyciIsICJmb28iLCAibmV4dE9uZSIsICJhcnJheSIsICJlc2NhcGVSZWdFeHAiLCAicHJvdG90eXBlIiwgInJlbW92ZU51bGxzIiwgImZpbHRlciIsICJzdWJzIiwgImNtZCIsICJpc1N0cmluZyIsICJpc051bWJlciIsICJpc1JlZ0V4cCIsICJpc0FycmF5IiwgIkFycmF5IiwgImlzT2JqZWN0IiwgImlzRnVuY3Rpb24iLCAiRnVuY3Rpb24iLCAicmVwZWF0U3RyaW5nIiwgIm11bHQiLCAiemVyb0ZpbGwiLCAibWFwIiwgIm1hcF9hcnJheSIsICJtYXBfb2JqZWN0IiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgInRleHQiLCAidW5lc2NhcGVRdW90ZXNIVE1MIiwgInJldGFyZ2V0RGFiIiwgIm5ld1RhcmdldCIsICJvbGRUYXJnZXQiLCAiZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWUiLCAidGl0bGVUb0VkaXQiLCAiY2hhbmdlTGlua1RhcmdldExpbmsiLCAiY2xpY2tCdXR0b24iLCAibWlub3IiLCAibGlzdExpbmtzIiwgIndpa2l0ZXh0IiwgInJlZyIsICJvbWl0UmVnZXgiLCAid2lrUG9zIiwgInJtRHVwZXNGcm9tU29ydGVkTGlzdCIsICJzb3J0IiwgIndpa1RhcmdldCIsICJtZXRoIiwgIl9pdGVyYXRvcjgiLCAiX3N0ZXA4IiwgIm1ha2VGaXhEYWIiLCAic2V0UG9wdXBIVE1MMiIsICJlbGVtZW50SWQiLCAicG9wdXBJZCIsICJvblN1Y2Nlc3MiLCAicG9wdXBFbGVtZW50IiwgInJjaWQiLCAic3RydWN0dXJlIiwgInNwYW5zIiwgImZsYXR0ZW4iLCAibGF5b3V0IiwgIm51bXNwYW5zIiwgInJlZGlycyIsICJyZWRpclNwYW5zIiwgImZvdW5kIiwgInN0cnVjdHVyZWZuIiwgInNldGZuIiwgInNldFBvcHVwVGlwc0FuZEhUTUwiLCAiZmxhdHRlbjIiLCAicG9wdXBIVE1MMiIsICJtYWtlRW1wdHlTcGFucyIsICJtYWtlRW1wdHlTcGFuczIiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAiZW1wdHlTcGFuSFRNTCIsICJub2RlVHlwZSIsICJlbXB0eVNwYW5IVE1MMiIsICJjbGFzc25hbWUiLCAiY2xhc3NBbGlhc2VzIiwgInBvcHVwU2Vjb25kUHJldmlldyIsICJfYXJ0aWNsZSIsICJwb3BUaXBzU29vbkZuIiwgIndoZW4iLCAicG9wVGlwcyIsICJkaXZuYW1lIiwgImlkbnVtYmVyIiwgImZ1enp5Q3Vyc29yT2ZmTWVudXMiLCAiX3giLCAiX3kiLCAiX2Z1enoiLCAicGFyZW50IiwgInVscyIsICJfaXRlcmF0b3IxMCIsICJfc3RlcDEwIiwgInVsIiwgIm9mZnNldFdpZHRoIiwgImxpbWl0SG9yaXpvbnRhbFBvc2l0aW9uIiwgIm1vdXNlT3V0V2lraUxpbmsyIiwgInRyYWNrZXIiLCAicG9zQ2hlY2tlckhvb2siLCAiZGlydHkiLCAibW91c2VPdmVyTmF2cG9wIiwgImlzV2l0aGluIiwgIm1vdXNlTGVhdmluZ1RpbWUiLCAicnVuU3RvcFBvcHVwVGltZXIiLCAic3RvcFBvcHVwVGltZXIiLCAib3JpZ2luYWxEYXRhIiwgIm1heENoYXJhY3RlcnMiLCAibWF4U2VudGVuY2VzIiwgInNldERhdGEiLCAibWF4U2l6ZSIsICJraWxsQ29tbWVudHMiLCAia2lsbERpdnMiLCAia2lsbEdhbGxlcmllcyIsICJraWxsIiwgIm9wZW5pbmciLCAiY2xvc2luZyIsICJzdWJvcGVuaW5nIiwgInN1YmNsb3NpbmciLCAicmVwbCIsICJvbGRrIiwgImsiLCAia2lsbFN0dWZmIiwgIm9wIiwgIm1ha2VSZWdleHAiLCAiY2wiLCAic2IiLCAic2MiLCAib3BSZXN1bHQiLCAiaW5kZXgiLCAiZGVwdGgiLCAicmVtb3ZhbCIsICJwcmVmaXgiLCAic3VmZml4IiwgInJlU3RyIiwgInNwIiwgImtpbGxCb3hUZW1wbGF0ZXMiLCAia2lsbFRlbXBsYXRlcyIsICJraWxsVGFibGVzIiwgImtpbGxJbWFnZXMiLCAiZm9yYmlkZGVuTmFtZXNwYWNlQWxpYXNlcyIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJsb2NhbGl6ZWROYW1lc3BhY2VMYyIsICJraWxsSFRNTCIsICJraWxsQ2h1bmtzIiwgIml0YWxpY0NodW5rUmVnZXgiLCAibW9wdXAiLCAiZmlyc3RCaXQiLCAic3R1ZmYiLCAibm90U2VudGVuY2VFbmRzIiwgImZpeFNlbnRlbmNlRW5kcyIsICJmdWxsTGVuZ3RoIiwgImRkIiwgImZpcnN0U2VudGVuY2VzIiwgInN0cnMiLCAia2lsbEJhZFdoaXRlc3BhY2UiLCAibWFrZVByZXZpZXciLCAia2lsbE11bHRpbGluZVRlbXBsYXRlcyIsICJmaXhIVE1MIiwgInN0cmlwTG9uZ1RlbXBsYXRlcyIsICJlc1dpa2kySHRtbFBhcnQiLCAicmVMaW5rcyIsICJsYXN0SW5kZXgiLCAicmVzdWx0IiwgInBvc3RmaXhJbmRleCIsICJfbWF0Y2gkIiwgImVkaXRTdW1tYXJ5UHJldmlldyIsICJyZUFlcyIsICJzZWN0aW9uIiwgInBvc3RmaXgiLCAic2VjdGlvbkxpbmsiLCAibW9yZSIsICJtb3JlTGluayIsICJvbmNsaWNrIiwgInF1ZXJ5VHlwZSIsICJodG1sR2VuZXJhdG9yIiwgInVzZXJuYW1lYXJ0IiwgIkFQSWhpc3RvcnlQcmV2aWV3SFRNTCIsICJBUEljYXRlZ29yeVByZXZpZXdIVE1MIiwgInVzZXJuYW1lIiwgIkFQSXVzZXJJbmZvUHJldmlld0hUTUwiLCAiQVBJY29udHJpYnNQcmV2aWV3SFRNTCIsICJ0cmFpbCIsICJBUElpbWFnZXBhZ2VQcmV2aWV3SFRNTCIsICJBUEliYWNrbGlua3NQcmV2aWV3SFRNTCIsICJBUElyZXZpc2lvblByZXZpZXdIVE1MIiwgImZldGNoVXNlckdyb3VwTmFtZXMiLCAidGhlbiIsICJzaG93QVBJUHJldmlldyIsICJnbyIsICJsaW5rTGlzdCIsICJidWYiLCAiX2l0ZXJhdG9yMTEiLCAiX3N0ZXAxMSIsICJnZXRUaW1lT2Zmc2V0IiwgInR6IiwgIm9wdGlvbnMiLCAiZ2V0VGltZVpvbmUiLCAidGltZVpvbmUiLCAidHpDb21wb25lbnRzIiwgInVzZVRpbWVPZmZzZXQiLCAiSW50bCIsICJEYXRlVGltZUZvcm1hdCIsICJmb3JtYXRUb1BhcnRzIiwgImdldExvY2FsZXMiLCAibG9jYWxlcyIsICJ1c2VyTGFuZ3VhZ2UiLCAiZ2V0TVdEYXRlRm9ybWF0IiwgInN1cHBvcnRlZExvY2FsZXNPZiIsICJuYXZpZ2F0b3IiLCAibGFuZ3VhZ2UiLCAiZWRpdFByZXZpZXdUYWJsZSIsICJyZWFsbHlDb250cmlicyIsICJjdXJhcnQiLCAibWFrZUZpcnN0Q29sdW1uTGlua3MiLCAiY3VycmVudFJldmlzaW9uIiwgImZpcnN0UmV2aWQiLCAiX2l0ZXJhdG9yMTIiLCAiX3N0ZXAxMiIsICJlZGl0RGF0ZSIsICJ0aGlzRGF5IiwgImZvcm1hdHRlZERhdGUiLCAidGhpc1RpbWUiLCAiZm9ybWF0dGVkVGltZSIsICJjb2wzdXJsIiwgImNvbDN0eHQiLCAiY29tbWVudCIsICJjb250ZW50IiwgImNvbW1lbnRoaWRkZW4iLCAiYWRqdXN0RGF0ZSIsICJvZmZzZXQiLCAiY29udmVydFRpbWVab25lIiwgInRvTG9jYWxlU3RyaW5nIiwgImZvcm1hdHRlZERhdGVUaW1lIiwgImQyIiwgImdldEZ1bGxZZWFyIiwgImdldE1vbnRoIiwgImdldERhdGUiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgInRvTG9jYWxlRGF0ZVN0cmluZyIsICJnZXRVVENTZWNvbmRzIiwgInRvTG9jYWxlVGltZVN0cmluZyIsICJ1c2VyaW5mb1Jlc3BvbnNlIiwgInF1ZXJ5T2JqIiwgInVzZXJzIiwgIm1lc3NhZ2VzIiwgImdyb3VwcyIsICJfaXRlcmF0b3IxMyIsICJfc3RlcDEzIiwgImdyb3VwTmFtZSIsICJnbG9iYWx1c2VyaW5mbyIsICJfaXRlcmF0b3IxNCIsICJfc3RlcDE0IiwgImdldE13QXBpIiwgImxvYWRNZXNzYWdlc0lmTWlzc2luZyIsICJqc09iaiIsICJtaXNzaW5nIiwgImNvbnRlbnRtb2RlbCIsICJfaXRlcmF0b3IxNSIsICJfc3RlcDE1IiwgImNvbnRpbnVlIiwgImJsY29udGludWUiLCAiQVBJc2hhcmVkSW1hZ2VQYWdlUHJldmlld0hUTUwiLCAicG9wdXBpZCIsICJyZXF1ZXN0aWQiLCAiYWx0IiwgImltYWdlcmVwb3NpdG9yeSIsICJlbmNhcnQiLCAic2hhcmVkX3VybCIsICJhcGljb21tb25zYmFzZSIsICJjb21tb25zYmFzZSIsICJsb2FkZXIiLCAibG9hZCIsICJBUElpbWFnZWxpbmtzUHJldmlld0hUTUwiLCAianNvYmoiLCAiaW1hZ2V1c2FnZSIsICJfaXRlcmF0b3IxNiIsICJfc3RlcDE2IiwgImNhdGVnb3J5bWVtYmVycyIsICJfaXRlcmF0b3IxNyIsICJfc3RlcDE3IiwgImNtY29udGludWUiLCAicXVlcnlvYmoiLCAiaW52YWxpZCIsICJibG9ja2VkYnkiLCAiYmxvY2twYXJ0aWFsIiwgImxvY2tlZFN1bEFjY291bnRJc0F0dGFjaGVkVG9UaGlzIiwgInVuYXR0YWNoZWQiLCAiZ2VuZGVyIiwgIl9pdGVyYXRvcjE4IiwgIl9zdGVwMTgiLCAiX2l0ZXJhdG9yMTkiLCAiX3N0ZXAxOSIsICJyZWdpc3RyYXRpb24iLCAiX3VzZXIkZWRpdGNvdW50IiwgImVkaXRjb3VudCIsICJ1c2VyY29udHJpYnMiLCAiYmxvY2tzIiwgInJic3RyIiwgInJhbmdlc3RhcnQiLCAicmFuZ2VlbmQiLCAicmVzdHJpY3Rpb25zIiwgInNwbGljZSIsICJfbmF2cG9wIiwgImVkaXRzIiwgInNldHVwRGVidWdnaW5nIiwgInBvcHVwRGVidWciLCAiY29uc29sZSIsICJwb3B1cHNJbnNlcnRJbWFnZSIsICJpbWFnZWluZm8iLCAiaW1hZ2VwYWdlIiwgInRodW1idXJsIiwgInNyYyIsICJtaW1lIiwgImRlc2NyaXB0aW9udXJsIiwgInRvZ2dsZVNpemUiLCAidG9nZ2xlU2l6ZTIiLCAiaW1nIiwgImZpcnN0Q2hpbGQiLCAibWF0Y2hlZCIsICJyZW1vdmVNYXRjaGVzVW5sZXNzIiwgInJlMSIsICJwYXJlbmNvdW50IiwgInJlMiIsICJzZXROYW1lc3BhY2VzIiwgInNldFJlZGlycyIsICJSIiwgInJlZGlyTGlzdHMiLCAiYXIiLCAiYmUiLCAiYmciLCAiYnMiLCAiYm4iLCAiY3MiLCAiY3kiLCAiZGUiLCAiZW8iLCAiZXMiLCAiZXQiLCAiZ2EiLCAiZ2wiLCAiaGUiLCAiaHUiLCAiaXMiLCAiaXQiLCAiamEiLCAibWsiLCAibmRzIiwgIm5sIiwgIm5uIiwgInBsIiwgInB0IiwgInJ1IiwgInNrIiwgInNyIiwgInR0IiwgInVrIiwgInZpIiwgInlpIiwgInpoIiwgInJlZGlyTGlzdCIsICJzZXRJbnRlcndpa2kiLCAid2lraW1lZGlhIiwgIm5zUmUiLCAiaW1hZ2VOYW1lc3BhY2VWYXJpYW50cyIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzMiIsICJfbG9jYWxpemVkTmFtZXNwYWNlTGMiLCAiX25hbWVzcGFjZUlkIiwgIm5zUmVJbWFnZSIsICJnZXRFZGl0Ym94U2VsZWN0aW9uIiwgInNlbGVjdGlvbiIsICJjcmVhdGVSYW5nZSIsICJzZWxTdGFydCIsICJzZWxlY3Rpb25TdGFydCIsICJzZWxFbmQiLCAic2VsZWN0aW9uRW5kIiwgInNlbCIsICJwaXBlIiwgImRvU2VwYXJhdGVTZWxlY3Rpb25Qb3B1cCIsICJNb3VzZXRyYWNrZXIiLCAibG9vcERlbGF5IiwgImFjdGl2ZSIsICJob29rcyIsICJydW5Ib29rcyIsICJyZW1vdmVPYmoiLCAicmVtb3ZlSG9va3MiLCAibmV3SG9va3MiLCAidHJhY2siLCAicGFnZVgiLCAicGFnZVkiLCAiZG9jRWx0IiwgImRvY3VtZW50RWxlbWVudCIsICJzY3JvbGxMZWZ0IiwgInNjcm9sbFRvcCIsICJzZXRQb3NpdGlvbiIsICJsYXN0SG9va194IiwgImxhc3RIb29rX3kiLCAiZW5hYmxlIiwgInNhdmVkTGlzdGVuZXIiLCAidWlkIiwgIm5vc2hvdyIsICJjcmVhdGUiLCAidW5oaWRlIiwgImhpZGUiLCAiaG9va0lkcyIsICJkb3dubG9hZHMiLCAiY29uc3RyYWluZWQiLCAiaGVpZ2h0IiwgImNyZWF0ZU1haW5EaXYiLCAicmVwb3NpdGlvbiIsICJub0xpbWl0SG9yIiwgInRvb1dpZGUiLCAidXBkYXRlRGltZW5zaW9ucyIsICJjV2lkdGgiLCAiY2xpZW50V2lkdGgiLCAibmF0dXJhbFdpZHRoIiwgIm5ld0xlZnQiLCAicmFpc2UiLCAiekluZGV4IiwgImhpZ2hlc3QiLCAic2hvdyIsICJ0aW1lIiwgInN0YWJsZV94IiwgInN0YWJsZV95IiwgInN0YWJsZVNob3ciLCAibmV3X3giLCAibmV3X3kiLCAiZHgiLCAiZHkiLCAiZnV6ejIiLCAic2hvd1Nvb25TdGFibGVUaW1lciIsICJrZXlIb29rcyIsICJSZWZsZWN0IiwgImFwcGx5IiwgImhvb2siLCAiaG9va0lkIiwgIl90aGlzJGNsYXNzTmFtZSIsICJvbmNsaWNrTGlzdGVuZXIiLCAicG9zaXRpb24iLCAibWluV2lkdGgiLCAiaGFuZGxlTmFtZSIsICJzaGlmdEtleSIsICJhYm9ydERvd25sb2FkcyIsICJvZmZzZXRIZWlnaHQiLCAiX2l0ZXJhdG9yMjAiLCAiX3N0ZXAyMCIsICJkZWxGbXQiLCAiaW5zRm10IiwgImNvdW50Q3Jvc3NpbmdzIiwgImVqZWN0IiwgInJvdyIsICJfaXRlcmF0b3IyMSIsICJfc3RlcDIxIiwgInNob3J0ZW5EaWZmU3RyaW5nIiwgInNob3J0ZW5EaWZmU3RyaW5nMiIsICJjb250ZXh0IiwgImRpZmZTdHJpbmciLCAib1NwbGl0dGVkIiwgIm5TcGxpdHRlZCIsICJvdXQiLCAiYWNjIiwgIm1heE91dHB1dFBhaXIiLCAicGFpcmVkIiwgImpzUmVzZXJ2ZWRQcm9wZXJ0aWVzIiwgImRpZmZCdWdBbGVydCIsICJkaWZmQnVnQWxlcnQyIiwgIndvcmQiLCAibWFrZURpZmZIYXNodGFibGUiLCAiX3NyYyRpIiwgIl9yZXQkX3NyYyRpIiwgIm9zIiwgInNldFNpdGVJbmZvIiwgInBvcHVwTG9jYWxEZWJ1ZyIsICJob3N0bmFtZSIsICJ3aWtpYSIsICJpc0xvY2FsIiwgInN0YXJ0c1dpdGgiLCAiY29tbW9ucyIsICJwb3J0IiwgInNpdGViYXNlIiwgInNldFVzZXJJbmZvIiwgInVzdXNlcnMiLCAidXNwcm9wIiwgImNhblJldmlldyIsICJyaWdodHMiLCAiZmV0Y2hTcGVjaWFsUGFnZU5hbWVzIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgIm1ldGEiLCAic2lwcm9wIiwgInVzZWxhbmciLCAic21heGFnZSIsICJtYXhhZ2UiLCAic3BlY2lhbHBhZ2VhbGlhc2VzIiwgInNldFRpdGxlQmFzZSIsICJwcm90b2NvbCIsICJib3RJbnRlcmZhY2VQYXRoIiwgIkFQSVBhdGgiLCAidGl0bGV0YWlsIiwgIndpa2liYXNlIiwgInNldE1haW5SZWdleCIsICJyZVN0YXJ0IiwgInByZVRpdGxlcyIsICJyZUVuZCIsICJidWlsZFNwZWNpYWxQYWdlR3JvdXAiLCAic3BlY2lhbFBhZ2VPYmoiLCAidmFyaWFudHMiLCAicmVhbG5hbWUiLCAiX2l0ZXJhdG9yMjIiLCAiYWxpYXNlcyIsICJfc3RlcDIyIiwgImFsaWFzIiwgInNldFJlZ2V4cHMiLCAiX2l0ZXJhdG9yMjMiLCAiX3N0ZXAyMyIsICJzcGVjaWFscGFnZSIsICJpbSIsICJfdGVtcGxhdGVPYmplY3Q0IiwgIl90ZW1wbGF0ZU9iamVjdDUiLCAic2V0dXBDYWNoZSIsICJzZXRNaXNjIiwgImNsaWVudCIsICJzZXR1cFBvcHVwczIiLCAiY29tcGxldGVkIiwgInNldE9wdGlvbnMiLCAiZGVmYXVsdE5hdmxpbmtTcGVjIiwgIl9oaW50IiwgImV4cGFuZENvbmRpdGlvbmFsTmF2bGlua1N0cmluZyIsICJleHBhbmRDb25kaXRpb25hbE5hdmxpbmtTdHJpbmcyIiwgInJlY3Vyc2lvbkNvdW50IiwgImNvbmRpdGlvbmFsU3BsaXRSZWdleCIsICJudW1QYXJlbnMiLCAidGVzdFN0cmluZyIsICJ0cnVlU3RyaW5nIiwgImZhbHNlU3RyaW5nIiwgInRlc3RSZXN1bHQiLCAibmF2bGlua1N0cmluZ1RvQXJyYXkiLCAiX2l0ZXJhdG9yMjQiLCAiX3N0ZXAyNCIsICJuYXZsaW5rVGFnIiwgInNzIiwgInNzcyIsICJuYXZsaW5rU3Vic3RpdHV0ZUhUTUwiLCAibmF2bGlua0RlcHRoIiwgIm1hZ2ljIiwgIm1lbnVkZXB0aCIsICJtZW51cm93ZGVwdGgiLCAiX2l0ZXJhdG9yMjUiLCAiX3N0ZXAyNSIsICJnZXROZXdXaW4iLCAiZ2V0UHJpbnRGdW5jdGlvbiIsICJ0YWdUeXBlIiwgInByaW50IiwgInNob3J0Y3V0IiwgImFkZFBvcHVwU2hvcnRjdXQiLCAicG9wdXBMaW5rc05ld1dpbmRvdyIsICJuZXdXaW4iLCAibm9Qb3B1cCIsICJzcGVjaWFsTGluayIsICJtYWdpY1dhdGNoTGluayIsICJ0aXRsZWRXaWtpTGluayIsICJfcGckY3VycmVudCRsaW5rJG9yaWciLCAiYXJpbkxpbmsiLCAiZWRpdENvdW50ZXJMaW5rIiwgImVkaXRvckxpc3RMaW5rIiwgInRpdGxlZERpZmZMaW5rIiwgIm1hZ2ljSGlzdG9yeUxpbmsiLCAic2ltcGxlUG9wdXBzIiwgInBvcHVwTWVudUxpbmsiLCAicG9wdXBIYW5kbGVLZXlwcmVzcyIsICJwb3B1cEhhbmRsZUtleXByZXNzMiIsICJfZXZ0JGtleUNvZGUiLCAia2V5Q29kZSIsICJ3aGljaCIsICJsZXR0ZXIiLCAiZnJvbUNvZGVQb2ludCIsICJzdGFydExpbmsiLCAibGFzdFBvcHVwTGlua1NlbGVjdGVkIiwgInByZXZlbnREZWZhdWx0IiwgImZvY3VzIiwgIm9sZFBvcHVwT25rZXlwcmVzcyIsICJvbmtleXByZXNzIiwgImFkZExpbmtQcm9wZXJ0eSIsICJwcm9wZXJ0eSIsICJkaWZmRGF0YSIsICJvbGRSZXYiLCAibmV3UmV2IiwgImFwaTIiLCAiZnJvbXRpdGxlIiwgInRvcmVsYXRpdmUiLCAiZnJvbXJldiIsICJ0b3JldiIsICJjb21wYXJlIiwgImZyb21yZXZpZCIsICJ0b3JldmlkIiwgImFkZFJldmlld0xpbmsiLCAiZG9uZURpZmYiLCAicmV2aWRzIiwgInN0YWJsZV9yZXZpZCIsICJmbGFnZ2VkIiwgInBhcmFtczIiLCAicG9zdFdpdGhUb2tlbiIsICJmYWlsIiwgIl9pdGVyYXRvcjI2IiwgIl9zdGVwMjYiLCAiX2kzIiwgIl9yZXZpc2lvbnMiLCAicmV2aXNpb24iLCAiaW5zZXJ0RGlmZiIsICJybUJvcmluZ0xpbmVzIiwgImFhYSIsICJiYiIsICJiYmIiLCAic3RyaXBPdXRlckNvbW1vbkxpbmVzIiwgIm9sZGxpbmVzIiwgIm5ld2xpbmVzIiwgImlubmVyIiwgInRydW5jYXRlZCIsICJwb3B1cERpZmZNYXhMaW5lcyIsICJwb3B1cERpZmZDb250ZXh0TGluZXMiLCAibGluZURpZmYiLCAibGluZXMyIiwgIm9sZGxpbmVzMiIsICJuZXdsaW5lczIiLCAiZGlmZkRhdGVzVGFibGUiLCAiZGlmZkRhdGVzVGFibGVSb3ciLCAibGFiZWwiLCAibGFzdE1vZGlmaWVkRGF0ZSIsICJyZXZsaW5rIiwgImdlbmVyYWxMaW5rIiwgImFjdGlvbk5hbWUiLCAic2F2ZWRPbGRpZCIsICJvbGRpZERhdGEiLCAicmV2aXNpb25TdHJpbmciLCAicmV2ZXJ0U3VtbWFyeSIsICJiYXNlIiwgImNzc0NsYXNzIiwgImRlZmF1bHROYXZsaW5rQ2xhc3NuYW1lIiwgImdlbmVyYWxOYXZMaW5rIiwgImdldExhc3RDb250cmliIiwgIndpa2lwYWdlIiwgImdldEhpc3RvcnlJbmZvIiwgInByb2Nlc3NMYXN0Q29udHJpYkluZm8iLCAiZmlyc3ROZXdFZGl0b3IiLCAiZWRpdG9yIiwgIm5ld1VybCIsICJkaXNwbGF5VXJsIiwgImdldERpZmZTaW5jZU15RWRpdCIsICJwcm9jZXNzRGlmZlNpbmNlTXlFZGl0IiwgImZyaWVuZGx5TmFtZSIsICJteUxhc3RFZGl0IiwgInB1cmdlUG9wdXBzIiwgInByb2Nlc3NBbGxQb3B1cHMiLCAibnVsbGlmeSIsICJkaXNhYmxlUG9wdXBzIiwgInRvZ2dsZVByZXZpZXdzIiwgIm1hZ2ljV2F0Y2hMaW5rMiIsICJfdGVtcGxhdGVPYmplY3Q2IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicmVxRGF0YSIsICJ0aXRsZXMiLCAidW53YXRjaCIsICJtd1RpdGxlIiwgIm5ld0Zyb21UZXh0IiwgIm1lc3NhZ2VOYW1lIiwgImdldE5hbWVzcGFjZUlkIiwgInBhcnNlRG9tIiwgIl94MiIsICJfeDMiLCAiYXJndW1lbnRzIiwgImpzVXJsIiwgIm9uQ2xpY2siLCAiX3RlbXBsYXRlT2JqZWN0NyIsICJfdGVtcGxhdGVPYmplY3Q4IiwgIl9sJHNlcCIsICJhcHBlbmRQYXJhbXNUb0xpbmsiLCAibGlua3N0ciIsICJjQSIsICJjaHMiLCAiY3VycmVudEFydGljbGVSZWdleEJpdCIsICJfdGVtcGxhdGVPYmplY3Q5IiwgIl90ZW1wbGF0ZU9iamVjdDEwIiwgIl90ZW1wbGF0ZU9iamVjdDExIiwgIl90ZW1wbGF0ZU9iamVjdDEyIiwgImxrIiwgImFsc29DaGFuZ2VMYWJlbCIsICJzYW5lTGlua0NoZWNrIiwgInVOIiwgInRvb2xEYk5hbWUiLCAiY29va2llU3R5bGUiLCAidG9vbCIsICJkZWZhdWx0VG9vbFVybCIsICJ0aGVXaWtpIiwgIndoYXROZXh0IiwgImdldEhpc3RvcnkiLCAicHJvY2Vzc0hpc3RvcnkiLCAiX2l0ZXJhdG9yMjciLCAiX3N0ZXAyNyIsICJmaW5pc2hQcm9jZXNzSGlzdG9yeSIsICJoaXN0SW5mbyIsICJwcmV2aWQiLCAiZGVmYXVsdGl6ZSIsICJfcGckb3B0aW9uIiwgIl9wZyRvcHRpb24keCIsICJuZXdPcHRpb24iLCAiZGVmIiwgInZhck5hbWUiLCAidXNlcklzU3lzb3AiLCAiZyIsICJob3VyMTIiLCAiX3RlbXBsYXRlT2JqZWN0MTMiLCAiZWRpdENvdW50ZXJMaW5rSGludCIsICJhcmluIiwgIm9uIiwgIm9uY2UiLCAiZHluYW1pY0NvbnRlbnRIYW5kbGVyIiwgIiRjb250ZW50IiwgInJlZ2lzdGVySG9va3NGb3JWaXNpYmxlTmF2cG9wcyIsICJkb0l0IiwgImVhY2giLCAiX2luZGV4IiwgImFkZCIsICIkb3ZlcmxheSJdCn0K
