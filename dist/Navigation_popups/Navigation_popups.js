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
    let el = document.getElementById("".concat(anch));
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
    var _Insta$conf$user;
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
    (_Insta$conf$user = Insta.conf.user).name || (_Insta$conf$user.name = "Qiuwen Baike contributors");
    Insta.conf.user.signature = "[[".concat(Insta.conf.locale.user, ":").concat(Insta.conf.user.name, "|").concat(Insta.conf.user.name, "]]");
    Insta.BLOCK_IMAGE = new RegExp("^\\[\\[(?:File|Image|".concat(Insta.conf.locale.image, "):.*?\\|.*?(?:frame|thumbnail|thumb|none|right|left|center)"), "i");
  };
  Insta.dump = function(from, to) {
    if (typeof from === "string") {
      from = document.getElementById("".concat(from));
    }
    if (typeof to === "string") {
      to = document.getElementById("".concat(to));
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
      if (n === -1) {
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
      if (n === -1) {
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
      if (anch === -1) {
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
    const popupElement = document.getElementById("".concat(elementId).concat(popupId));
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
      setupTooltips(document.getElementById("".concat(id)), false, true, popData);
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
        dragHandle = document.getElementById("".concat(handleName));
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
    if (i === -1) {
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
      smaxage: 600,
      maxage: 600
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05hdmlnYXRpb25fcG9wdXBzL21vZHVsZXMvYXBpLnRzIiwgInNyYy9OYXZpZ2F0aW9uX3BvcHVwcy9tb2R1bGVzL3N0cmluZy50cyIsICJzcmMvTmF2aWdhdGlvbl9wb3B1cHMvbW9kdWxlcy9jb3JlLmpzIiwgInNyYy9OYXZpZ2F0aW9uX3BvcHVwcy9OYXZpZ2F0aW9uX3BvcHVwcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdOYXZpZ2F0aW9uIHBvcHVwcy8xLjAnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgIi8vIFRyYW5zbGF0YWJsZSBzdHJpbmdzXG5jb25zdCBtZXNzYWdlOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0Ly8gc3VtbWFyeSBkYXRhLCBzZWFyY2hpbmcgZXRjLlxuXHRhcnRpY2xlOiB3aW5kb3cud2dVTFMoJ+adoeebricsICfmop3nm64nKSxcblx0Y2F0ZWdvcnk6IHdpbmRvdy53Z1VMUygn5Liq5YiG57G7JywgJ+WAi+WIhumhnicpLFxuXHRjYXRlZ29yaWVzOiB3aW5kb3cud2dVTFMoJ+S4quWIhuexuycsICflgIvliIbpoZ4nKSxcblx0aW1hZ2U6IHdpbmRvdy53Z1VMUygn5Liq5paH5Lu2JywgJ+WAi+aqlOahiCcpLFxuXHRpbWFnZXM6IHdpbmRvdy53Z1VMUygn5Liq5paH5Lu2JywgJ+WAi+aqlOahiCcpLFxuXHRzdHViOiAn5bCP5L2c5ZOBJyxcblx0J3NlY3Rpb24gc3R1Yic6IHdpbmRvdy53Z1VMUygn5bCP56ug6IqCJywgJ+Wwj+eroOevgCcpLFxuXHQnRW1wdHkgcGFnZSc6IHdpbmRvdy53Z1VMUygn56m66aG16Z2iJywgJ+epuumggemdoicpLFxuXHRrQjogd2luZG93LndnVUxTKCfljYPlrZfoioI8c3ViPu+8iOS7pTEwMDDkuLrkuIDov5vvvIk8L3N1Yj4nLCAn5Y2D5L2N5YWD57WEPHN1Yj7vvIjku6UxMDAw54K65LiA6YCy77yJPC9zdWI+JyksXG5cdGJ5dGVzOiB3aW5kb3cud2dVTFMoJ+Wtl+iKgicsICfkvY3lhYPntYQnKSxcblx0ZGF5OiAn5aSpJyxcblx0ZGF5czogJ+WkqScsXG5cdGhvdXI6IHdpbmRvdy53Z1VMUygn5bCP5pe2JywgJ+Wwj+aZgicpLFxuXHRob3Vyczogd2luZG93LndnVUxTKCflsI/ml7YnLCAn5bCP5pmCJyksXG5cdG1pbnV0ZTogJ+WIhicsXG5cdG1pbnV0ZXM6ICfliIYnLFxuXHRzZWNvbmQ6ICfnp5InLFxuXHRzZWNvbmRzOiAn56eSJyxcblx0d2VlazogJ+WRqCcsXG5cdHdlZWtzOiAn5ZGoJyxcblx0bW9udGg6ICfmnIgnLFxuXHRtb250aHM6ICfmnIgnLFxuXHR5ZWFyOiAn5bm0Jyxcblx0eWVhcnM6ICflubQnLFxuXHRzZWFyY2g6IHdpbmRvdy53Z1VMUygn5pCc57SiJywgJ+aQnOWwiycpLFxuXHRTZWFyY2hIaW50OiB3aW5kb3cud2dVTFMoJ+aQnOe0ouWMheWQqyAlcyDnmoTpobXpnaInLCAn5pCc5bCL5YyF5ZCrICVzIOeahOmggemdoicpLFxuXHR3ZWI6ICdCaW5nJyxcblx0Z2xvYmFsOiAn5YWo5Z+fJyxcblx0J21vcmUuLi4nOiAn5pu05aSa4oCm4oCmJyxcblx0Ly8gYXJ0aWNsZS1yZWxhdGVkIGFjdGlvbnMgYW5kIGluZm9cblx0Ly8gKHNvbWUgYWN0aW9ucyBhbHNvIGFwcGx5IHRvIHVzZXIgcGFnZXMpXG5cdGFjdGlvbnM6IHdpbmRvdy53Z1VMUygn5pON5L2cJywgJ+WLleS9nCcpLFxuXHQvLyAvLy8gdmlldyBhcnRpY2xlcyBhbmQgdmlldyB0YWxrXG5cdHBvcHVwc01lbnU6ICdQb3B1cHMnLFxuXHQnZGlzYWJsZSBwcmV2aWV3cyc6IHdpbmRvdy53Z1VMUygn56aB55So6aKE6KeIJywgJ+emgeeUqOmgkOimvScpLFxuXHR0b2dnbGVQcmV2aWV3c0hpbnQ6IHdpbmRvdy53Z1VMUygn5YiH5o2i5pys6aG1IFBvcHVwcyDnmoTpooTop4jlvIDlhbMnLCAn5YiH5o+b5pys6aCBIFBvcHVwcyDnmoTpoJDopr3plovpl5wnKSxcblx0J3RvZ2dsZSBwcmV2aWV3cyc6IHdpbmRvdy53Z1VMUygn5YiH5o2i6aKE6KeI5byA5YWzJywgJ+WIh+aPm+mgkOimvemWi+mXnCcpLFxuXHRyZXNldDogd2luZG93LndnVUxTKCflpI3kvY0nLCAn6KSH5L2NJyksXG5cdGRpc2FibGU6ICfnpoHnlKggUG9wdXBzJyxcblx0ZGlzYWJsZVBvcHVwc0hpbnQ6IHdpbmRvdy53Z1VMUyhcblx0XHQn5Zyo5pys6aG156aB55SoIFBvcHVwc++8jOWIt+aWsOmhtemdouS7pemHjeaWsOWQr+eUqOOAgicsXG5cdFx0J+WcqOacrOmggeemgeeUqCBQb3B1cHPvvIzph43mlrDmlbTnkIbpoIHpnaLku6Xph43mlrDllZ/nlKjjgIInXG5cdCksXG5cdHB1cmdlUG9wdXBzSGludDogd2luZG93LndnVUxTKCflpI3kvY0gUG9wdXBz77yM5riF6Zmk5omA5pyJ57yT5a2Y5pWw5o2u44CCJywgJ+ikh+S9jSBQb3B1cHPvvIzmuIXpmaTmiYDmnInlv6vlj5bos4fmlpnjgIInKSxcblx0UG9wdXBzSGludDogd2luZG93LndnVUxTKCflpI3kvY0gUG9wdXBz77yM5riF6Zmk5omA5pyJ57yT5a2Y5pWw5o2u44CCJywgJ+ikh+S9jSBQb3B1cHPvvIzmuIXpmaTmiYDmnInlv6vlj5bos4fmlpnjgIInKSxcblx0c3BhY2ViYXI6ICfnqbrmoLwnLFxuXHR2aWV3OiB3aW5kb3cud2dVTFMoJ+afpeeciycsICfmqqLoppYnKSxcblx0J3ZpZXcgYXJ0aWNsZSc6IHdpbmRvdy53Z1VMUygn5p+l55yL5p2h55uuJywgJ+aqouimluaineebricpLFxuXHR2aWV3SGludDogd2luZG93LndnVUxTKCfliY3lvoAgJXMnLCAn5YmN5b6AICVzJyksXG5cdHRhbGs6IHdpbmRvdy53Z1VMUygn6K6o6K66JywgJ+iojuirlicpLFxuXHQndGFsayBwYWdlJzogd2luZG93LndnVUxTKCforqjorrrpobUnLCAn6KiO6KuW6aCBJyksXG5cdCd0aGlzJm5ic3A7cmV2aXNpb24nOiB3aW5kb3cud2dVTFMoJ+atpOS/ruiuoueJiOacrCcsICfmraTkv67oqILniYjmnKwnKSxcblx0J3JldmlzaW9uICVzIG9mICVzJzogd2luZG93LndnVUxTKCfpobXpnaIgJDIg55qE5L+u6K6i54mI5pysICQxJywgJ+mggemdoiAkMiDnmoTkv67oqILniYjmnKwgJDEnKSxcblx0J1JldmlzaW9uICVzIG9mICVzJzogd2luZG93LndnVUxTKCfpobXpnaIgJDIg55qE5L+u6K6i54mI5pysICQxJywgJ+mggemdoiAkMiDnmoTkv67oqILniYjmnKwgJDEnKSxcblx0J3RoZSByZXZpc2lvbiBwcmlvciB0byByZXZpc2lvbiAlcyBvZiAlcyc6IHdpbmRvdy53Z1VMUyhcblx0XHQn6aG16Z2iICQyIOeahOS/ruiuoueJiOacrCAkMSDkuYvliY3nmoTkv67orqLniYjmnKwnLFxuXHRcdCfpoIHpnaIgJDIg55qE5L+u6KiC54mI5pysICQxIOS5i+WJjeeahOS/ruiogueJiOacrCdcblx0KSxcblx0J1RvZ2dsZSBpbWFnZSBzaXplJzogd2luZG93LndnVUxTKCfngrnlh7vliIfmjaLlm77niYflpKflsI8nLCAn6bue5pOK5YiH5o+b5ZyW54mH5aSn5bCPJyksXG5cdGRlbDogd2luZG93LndnVUxTKCfliKDpmaQnLCAn5Yig6ZmkJyksXG5cdC8vIC8vLyBkZWxldGUsIHByb3RlY3QsIG1vdmVcblx0ZGVsZXRlOiB3aW5kb3cud2dVTFMoJ+WIoOmZpCcsICfliKDpmaQnKSxcblx0ZGVsZXRlSGludDogd2luZG93LndnVUxTKCfliKDpmaQgJXMnLCAn5Yig6ZmkICVzJyksXG5cdHVuZGVsZXRlU2hvcnQ6IHdpbmRvdy53Z1VMUygn5oGi5aSNJywgJ+aBouW+qScpLFxuXHRVbmRlbGV0ZUhpbnQ6IHdpbmRvdy53Z1VMUygn5oGi5aSNICVzJywgJ+aBouW+qSAlcycpLFxuXHRwcm90ZWN0OiB3aW5kb3cud2dVTFMoJ+S/neaKpCcsICfkv53orbcnKSxcblx0cHJvdGVjdEhpbnQ6IHdpbmRvdy53Z1VMUygn5L+d5oqkICVzJywgJ+S/neittyAlcycpLFxuXHR1bnByb3RlY3RTaG9ydDogd2luZG93LndnVUxTKCfop6PpmaQnLCAn6Kej6ZmkJyksXG5cdHVucHJvdGVjdEhpbnQ6IHdpbmRvdy53Z1VMUygn6Kej6Zmk5a+5ICVzIOeahOS/neaKpCcsICfop6PpmaTlsI0gJXMg55qE5L+d6K23JyksXG5cdG1vdmU6IHdpbmRvdy53Z1VMUygn56e75YqoJywgJ+enu+WLlScpLFxuXHQnbW92ZSBwYWdlJzogd2luZG93LndnVUxTKCfnp7vliqjpobXpnaInLCAn56e75YuV6aCB6Z2iJyksXG5cdE1vdmVwYWdlSGludDogd2luZG93LndnVUxTKCfkv67mlLkgJXMg55qE5qCH6aKYJywgJ+S/ruaUuSAlcyDnmoTmqJnpoYwnKSxcblx0ZWRpdDogd2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvJyksXG5cdC8vIC8vLyBlZGl0IGFydGljbGVzIGFuZCB0YWxrXG5cdCdlZGl0IGFydGljbGUnOiB3aW5kb3cud2dVTFMoJ+e8lui+keadoeebricsICfnt6jovK/mop3nm64nKSxcblx0ZWRpdEhpbnQ6IHdpbmRvdy53Z1VMUygn5L+u5pS5ICVzIOeahOWGheWuuScsICfkv67mlLkgJXMg55qE5YWn5a65JyksXG5cdCdlZGl0IHRhbGsnOiB3aW5kb3cud2dVTFMoJ+e8lui+keiuqOiuuumhtScsICfnt6jovK/lsI3oqbHpoIEnKSxcblx0bmV3OiB3aW5kb3cud2dVTFMoJ+aWsCcsICfmlrAnKSxcblx0J25ldyB0b3BpYyc6IHdpbmRvdy53Z1VMUygn5paw6K+d6aKYJywgJ+aWsOipsemhjCcpLFxuXHRuZXdTZWN0aW9uSGludDogd2luZG93LndnVUxTKCflnKggJXMg5aKe5Yqg5paw55qE6K6o6K666K+d6aKYJywgJ+WcqCAlcyDlop7liqDmlrDnmoToqI7oq5boqbHpoYwnKSxcblx0J251bGwgZWRpdCc6IHdpbmRvdy53Z1VMUygn56m657yW6L6RJywgJ+epuue3qOi8rycpLFxuXHRudWxsRWRpdEhpbnQ6IHdpbmRvdy53Z1VMUygn6L+b6KGM5LiA5qyh5a+5ICVzIOeahOepuue8lui+kScsICfoo73pgKDkuIDmrKHlsI0gJXMg55qE56m657eo6LyvJyksXG5cdGhpc3Q6IHdpbmRvdy53Z1VMUygn5Y6G5Y+yJywgJ+att+WPsicpLFxuXHQvLyAvLy8gaGlzdG9yeSwgZGlmZnMsIGVkaXRvcnMsIHJlbGF0ZWRcblx0aGlzdG9yeTogd2luZG93LndnVUxTKCfljoblj7InLCAn5q235Y+yJyksXG5cdGhpc3RvcnlIaW50OiB3aW5kb3cud2dVTFMoJyVzIOeahOS/ruiuouWOhuWPsicsICclcyDnmoTkv67oqILmrbflj7InKSxcblx0bGFzdDogd2luZG93LndnVUxTKCfkuYvliY0nLCAn5LmL5YmNJyksXG5cdC8vIFtbTWVkaWFXaWtpOkxhc3RdXVxuXHRsYXN0RWRpdDogd2luZG93LndnVUxTKCfmnIDov5Hmm7TmlLknLCAn5pyA6L+R5pu05pS5JyksXG5cdCdzaG93IGxhc3QgZWRpdCc6IHdpbmRvdy53Z1VMUygn5pyA6L+R5LiA5qyh5pu05pS5JywgJ+acgOaWsOS4gOasoeS/ruiogicpLFxuXHQnU2hvdyB0aGUgbGFzdCBlZGl0Jzogd2luZG93LndnVUxTKCfmmL7npLrmnIDov5HkuIDmrKHmm7TmlLnnmoTlt67lvIInLCAn6aGv56S65pyA5paw5LiA5qyh5L+u6KiC55qE5beu55WwJyksXG5cdGxhc3RDb250cmliOiB3aW5kb3cud2dVTFMoJ+acgOi/kee8lui+kScsICfmnIDov5Hnt6jovK8nKSxcblx0J2xhc3Qgc2V0IG9mIGVkaXRzJzogd2luZG93LndnVUxTKCfmnIDov5HnvJbovpEnLCAn5pyA6L+R57eo6LyvJyksXG5cdGxhc3RDb250cmliSGludDogd2luZG93LndnVUxTKCfmmL7npLrnlLHmnIDlkI7kuIDkvY3nvJbovpHogIXpgKDmiJDnmoTlt67lvIInLCAn6aGv56S655Sx5pyA5b6M5LiA5L2N57eo6Lyv6ICF6KO96YCg55qE5beu55WwJyksXG5cdGN1cjogd2luZG93LndnVUxTKCflvZPliY0nLCAn55W25YmNJyksXG5cdGRpZmZDdXI6IHdpbmRvdy53Z1VMUygn5LiO5b2T5YmN54mI5pys55qE5beu5byCJywgJ+iIh+ebruWJjeeJiOacrOeahOW3rueVsCcpLFxuXHQnU2hvdyBjaGFuZ2VzIHNpbmNlIHJldmlzaW9uICVzJzogd2luZG93LndnVUxTKCfmmL7npLroh6rkv67orqLniYjmnKwgJXMg55qE5beu5byCJywgJ+mhr+ekuuiHquS/ruiogueJiOacrCAlcyDnmoTlt67nlbAnKSxcblx0JyVzIG9sZCc6IHdpbmRvdy53Z1VMUygnJXMg5YmN55qE5pyA5ZCO54mI5pysJywgJyVzIOWJjeeahOacgOWQjueJiOacrCcpLFxuXHQvLyBhcyBpbiA0IHdlZWtzIG9sZFxuXHRvbGRFZGl0OiB3aW5kb3cud2dVTFMoJ+aXp+e8lui+kScsICfoiIrnt6jovK8nKSxcblx0cHVyZ2U6IHdpbmRvdy53Z1VMUygn5riF6Zmk57yT5a2YJywgJ+a4hemZpOW/q+WPlicpLFxuXHRwdXJnZUhpbnQ6IHdpbmRvdy53Z1VMUygn5riF6Zmk5pyN5Yqh5Zmo5LitICVzIOeahOe8k+WtmCcsICfmuIXpmaTkvLrmnI3lmajkuK0gJXMg55qE5b+r5Y+WJyksXG5cdHJhdzogd2luZG93LndnVUxTKCfmupDku6PnoIEnLCAn5Y6f5aeL56K8JyksXG5cdHJhd0hpbnQ6IHdpbmRvdy53Z1VMUygn5p+l55yLICVzIOeahOa6kOS7o+eggScsICfmqqLoppYgJXMg55qE5Y6f5aeL56K8JyksXG5cdHJlbmRlcjogd2luZG93LndnVUxTKCfku4XmraPmlocnLCAn5YOF5q2j5paHJyksXG5cdHJlbmRlckhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOe6r0hUTUzop6PmnpDvvIjku4XmraPmloflhoXlrrnvvIknLCAn6aGv56S6ICVzIOeahOe0lEhUTUzop6PmnpDvvIjlg4XmraPmloflhaflrrnvvIknKSxcblx0J1Nob3cgdGhlIGVkaXQgbWFkZSB0byBnZXQgcmV2aXNpb24nOiB3aW5kb3cud2dVTFMoJ+aYvuekuue8lui+keS7peW+l+WIsOS/ruiuoueJiOacrCcsICfpoa/npLrnt6jovK/ku6XlvpfliLDkv67oqILniYjmnKwnKSxcblx0c2luY2VNZTogd2luZG93LndnVUxTKCfoh6rmiJEnLCAn6Ieq5oiRJyksXG5cdCdjaGFuZ2VzIHNpbmNlIG1pbmUnOiB3aW5kb3cud2dVTFMoJ+iHquaIkeS/ruiuoueahOW3ruW8gicsICfoh6rmiJHkv67oqILnmoTlt67nlbAnKSxcblx0c2luY2VNZUhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S66Ieq5oiR5LiK5qyh5L+u5pS55Lul5p2l55qE5beu5byCJywgJ+mhr+ekuuiHquaIkeS4iuasoeS/ruaUueS7peS+hueahOW3rueVsCcpLFxuXHRcIkNvdWxkbid0IGZpbmQgYW4gZWRpdCBieSAlc1xcbmluIHRoZSBsYXN0ICVzIGVkaXRzIHRvXFxuJXNcIjogd2luZG93LndnVUxTKFxuXHRcdCflnKggJDMg5pyA6L+RICQyIOasoee8lui+keS4reaJvuS4jeWIsCAkMSDlgZrlh7rnmoTkv67mlLknLFxuXHRcdCflnKggJDMg5pyA6L+RICQyIOasoee3qOi8r+S4reaJvuS4jeWIsCAkMSDlgZrlh7rnmoTkv67mlLknXG5cdCksXG5cdGVkczogd2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvJyksXG5cdGVkaXRvcnM6IHdpbmRvdy53Z1VMUygn57yW6L6R6ICFJywgJ+e3qOi8r+iAhScpLFxuXHRlZGl0b3JMaXN0SGludDogd2luZG93LndnVUxTKCfliJflh7rnvJbovpHov4cgJXMg55qE55So5oi3JywgJ+WIl+WHuue3qOi8r+mBjiAlcyDnmoTkvb/nlKjogIUnKSxcblx0cmVsYXRlZDogd2luZG93LndnVUxTKCfnm7jlhbMnLCAn55u46ZecJyksXG5cdHJlbGF0ZWRDaGFuZ2VzOiB3aW5kb3cud2dVTFMoJ+ebuOWFs+abtOaUuScsICfnm7jpl5zmm7TmlLknKSxcblx0J3JlbGF0ZWQgY2hhbmdlcyc6IHdpbmRvdy53Z1VMUygn55u45YWz5pu05pS5JywgJ+ebuOmXnOabtOaUuScpLFxuXHRSZWNlbnRjaGFuZ2VzbGlua2VkSGludDogd2luZG93LndnVUxTKCfmmL7npLrnm7jlhbMgJXMg55qE5L+u5pS5JywgJ+mhr+ekuuebuOmXnCAlcyDnmoTkv67mlLknKSxcblx0ZWRpdE9sZDogd2luZG93LndnVUxTKCfnvJbovpHml6fniYgnLCAn57eo6Lyv6IiK54mIJyksXG5cdC8vIC8vLyBlZGl0IG9sZCB2ZXJzaW9uLCBvciByZXZlcnRcblx0cnY6IHdpbmRvdy53Z1VMUygn5Zue6YCAJywgJ+aBouW+qScpLFxuXHRyZXZlcnQ6IHdpbmRvdy53Z1VMUygn5Zue6YCAJywgJ+aBouW+qScpLFxuXHRyZXZlcnRIaW50OiB3aW5kb3cud2dVTFMoJ+WbnumAgOWIsCAlcycsICfmgaLlvqnliLAgJXMnKSxcblx0dW5kbzogd2luZG93LndnVUxTKCfmkqTplIAnLCAn5pKk6Yq3JyksXG5cdHVuZG9IaW50OiB3aW5kb3cud2dVTFMoJ+aSpOmUgOi/measoee8lui+kScsICfmkqTpirfpgJnmrKHnt6jovK8nKSxcblx0ZGVmYXVsdHBvcHVwUmVkbGlua1N1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn56e76Zmk5Yiw56m66aG16Z2iW1slc11d55qE6ZO+5o6l77yIUG9wdXBz77yJJyxcblx0XHQn56e76Zmk5Yiw56m66aCB6Z2iW1slc11d55qE6YCj57WQ77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBGaXhEYWJzU3VtbWFyeTogd2luZG93LndnVUxTKCfmtojmrafkuYlbWyVzXV3liLBbWyVzXV3vvIhQb3B1cHPvvIknLCAn5raI5q2n576pW1slc11d5YiwW1slc11d77yIUG9wdXBz77yJJyksXG5cdGRlZmF1bHRwb3B1cEZpeFJlZGlyc1N1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn5b+955Wl5LuOW1slc11d5YiwW1slc11d55qE6YeN5a6a5ZCR77yIUG9wdXBz77yJJyxcblx0XHQn5b+955Wl5b6eW1slc11d5YiwW1slc11d55qE6YeN5paw5bCO5ZCR77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBFeHRlbmRlZFJldmVydFN1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn5Zue6YCA5YiwJDLlnKgkMeaXtue8lui+keeahOS/ruiuoueJiOacrCQz77yIUG9wdXBz77yJJyxcblx0XHQn6YKE5Y6f5YiwJDLlnKgkMeaZguijveS9nOeahOS/ruiogueJiOacrCQz77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCflm57pgIDliLDkv67orqLniYjmnKwlc+eahOS4iuS4gOS4queJiOacrO+8iFBvcHVwc++8iScsXG5cdFx0J+mChOWOn+WIsOS/ruiogueJiOacrCVz55qE5LiK5LiA5YCL54mI5pys77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBSZXZlcnRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoJ+WbnumAgOWIsOS/ruiuoueJiOacrCVz77yIUG9wdXBz77yJJywgJ+mChOWOn+WIsOS/ruiogueJiOacrCVz77yIUG9wdXBz77yJJyksXG5cdGRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCflm57pgIDliLDkv67orqLniYjmnKwkMeeahOS4iuS4gOS4queJiOacrO+8jOeUsSQz5ZyoJDLml7bnvJbovpHvvIhQb3B1cHPvvIknLFxuXHRcdCfpgoTljp/liLDkv67oqILniYjmnKwkMeeahOS4iuS4gOWAi+eJiOacrO+8jOeUsSQz5ZyoJDLmmYLoo73kvZzvvIhQb3B1cHPvvIknXG5cdCksXG5cdGRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoXG5cdFx0J+WbnumAgOWIsCQz5ZyoJDLml7bnvJbovpHnmoTkv67orqLniYjmnKwkMe+8iFBvcHVwc++8iScsXG5cdFx0J+mChOWOn+WIsCQz5ZyoJDLmmYLoo73kvZznmoTkv67oqILniYjmnKwkMe+8iFBvcHVwc++8iSdcblx0KSxcblx0ZGVmYXVsdHBvcHVwUm1EYWJMaW5rU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCfnp7vpmaTliLDmtojmrafkuYnpobVbWyVzXV3nmoTpk77mjqXvvIhQb3B1cHPvvIknLFxuXHRcdCfnp7vpmaTliLDmtojmrafnvqnpoIFbWyVzXV3nmoTpgKPntZDvvIhQb3B1cHPvvIknXG5cdCksXG5cdFJlZGlyZWN0czogd2luZG93LndnVUxTKCfph43lrprlkJEnLCAn6YeN5a6a5ZCRJyksXG5cdC8vIGFzIGluIFJlZGlyZWN0cyB0byAuLi5cblx0Ly8gXCIgdG8gXCI6IHdpbmRvdy53Z1VMUyggXCLliLBcIixcIuWIsFwiICksXG5cdC8vIGFzIGluIFJlZGlyZWN0cyB0byAuLi5cblx0J0J5cGFzcyByZWRpcmVjdCc6IHdpbmRvdy53Z1VMUygn5b+955Wl6YeN5a6a5ZCRJywgJ+W/veeVpemHjeaWsOWwjuWQkScpLFxuXHQnRml4IHRoaXMgcmVkaXJlY3QnOiB3aW5kb3cud2dVTFMoJ+S/ruWkjemHjeWumuWQkScsICfkv67lvqnph43mlrDlsI7lkJEnKSxcblx0ZGlzYW1iaWc6IHdpbmRvdy53Z1VMUygn5raI5q2n5LmJJywgJ+a2iOatp+e+qScpLFxuXHQvLyAvLy8gYWRkIG9yIHJlbW92ZSBkYWIgZXRjLlxuXHRkaXNhbWJpZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5raI5q2n5LmJ6L+Z5Liq6ZO+5o6l5YiwIFtbJXNdXScsICfmtojmrafnvqnpgJnlgIvpgKPntZDliLAgW1slc11dJyksXG5cdCdDbGljayB0byBkaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvOic6IHdpbmRvdy53Z1VMUygn54K55Ye75Lul5raI5q2n5LmJ6L+Z5Liq6ZO+5o6l5Yiw77yaJywgJ+m7nuaTiuS7pea2iOatp+e+qemAmeWAi+mAo+e1kOWIsO+8micpLFxuXHQncmVtb3ZlIHRoaXMgbGluayc6IHdpbmRvdy53Z1VMUygn56e76Zmk6ZO+5o6lJywgJ+enu+mZpOmAo+e1kCcpLFxuXHQncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnOiB3aW5kb3cud2dVTFMoXG5cdFx0J+enu+mZpOatpOadoeebruWIsOi/memhteeahOaJgOaciemTvuaOpScsXG5cdFx0J+enu+mZpOatpOaineebruWIsOmAmemggeeahOaJgOaciemAo+e1kCdcblx0KSxcblx0J3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBkaXNhbWJpZyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJzogd2luZG93LndnVUxTKFxuXHRcdCfnp7vpmaTmraTmnaHnm67liLDov5nmtojmrafkuYnnmoTmiYDmnInpk77mjqUnLFxuXHRcdCfnp7vpmaTmraTmop3nm67liLDpgJnmtojmrafnvqnnmoTmiYDmnInpgKPntZAnXG5cdCksXG5cdG1haW5saW5rOiB3aW5kb3cud2dVTFMoJ+S4u+mTvuaOpScsICfkuLvpgKPntZAnKSxcblx0Ly8gLy8vIGxpbmtzLCB3YXRjaCwgdW53YXRjaFxuXHR3aWtpTGluazogd2luZG93LndnVUxTKCfkuKrlhoXpg6jpk77mjqUnLCAn5Liq5YWn6YOo6YCj57WQJyksXG5cdHdpa2lMaW5rczogd2luZG93LndnVUxTKCfkuKrlhoXpg6jpk77mjqUnLCAn5Liq5YWn6YOo6YCj57WQJyksXG5cdCdsaW5rcyBoZXJlJzogd2luZG93LndnVUxTKCfpk77lhaUnLCAn6Y+I5YWlJyksXG5cdHdoYXRMaW5rc0hlcmU6IHdpbmRvdy53Z1VMUygn6ZO+5YWl6aG16Z2iJywgJ+mPiOWFpemggemdoicpLFxuXHQnd2hhdCBsaW5rcyBoZXJlJzogd2luZG93LndnVUxTKCfpk77lhaXpobXpnaInLCAn6Y+I5YWl6aCB6Z2iJyksXG5cdFdoYXRsaW5rc2hlcmVIaW50OiB3aW5kb3cud2dVTFMoJ+aYvuekuumTvuaOpeWIsCAlcyDnmoTpobXpnaInLCAn6aGv56S66YCj57WQ5YiwICVzIOeahOmggemdoicpLFxuXHR1bndhdGNoU2hvcnQ6IHdpbmRvdy53Z1VMUygn5Y+W5raIJywgJ+WPlua2iCcpLFxuXHR3YXRjaFRoaW5neTogd2luZG93LndnVUxTKCfnm5Hop4YnLCAn55uj6KaWJyksXG5cdC8vIGNhbGxlZCB3YXRjaFRoaW5neSBiZWNhdXNlIHt9LndhdGNoIGlzIGEgZnVuY3Rpb25cblx0d2F0Y2hIaW50OiB3aW5kb3cud2dVTFMoJ+WKoOWFpSAlcyDliLDmiJHnmoTnm5Hop4bliJfooagnLCAn5Yqg5YWlICVzIOWIsOaIkeeahOebo+imluWIl+ihqCcpLFxuXHR1bndhdGNoSGludDogd2luZG93LndnVUxTKCfku47miJHnmoTnm5Hop4bliJfooajnp7vpmaQgJXMnLCAn5b6e5oiR55qE55uj6KaW5YiX6KGo56e76ZmkICVzJyksXG5cdCdPbmx5IGZvdW5kIG9uZSBlZGl0b3I6ICVzIG1hZGUgJXMgZWRpdHMnOiB3aW5kb3cud2dVTFMoXG5cdFx0J+S7heaJvuWIsOS4gOS9jee8luiAhe+8miVzIOWItumAoOS6hiAlcyDmrKHnvJbovpEnLFxuXHRcdCflg4Xmib7liLDkuIDkvY3nt6jogIXvvJolcyDoo73pgKDkuoYgJXMg5qyh57eo6LyvJ1xuXHQpLFxuXHQnJXMgc2VlbXMgdG8gYmUgdGhlIGxhc3QgZWRpdG9yIHRvIHRoZSBwYWdlICVzJzogd2luZG93LndnVUxTKFxuXHRcdCclcyDnnIvkuIrljrvmmK8gJXMg6L+Z6aG155qE5pyA5ZCO5LiA5L2N57yW6ICFJyxcblx0XHQnJXMg55yL5LiK5Y675pivICVzIOmAmemggeeahOacgOW+jOS4gOS9jee3qOiAhSdcblx0KSxcblx0cnNzOiB3aW5kb3cud2dVTFMoJ1JTUycsICdSU1MnKSxcblx0Ly8gZGlmZiBwcmV2aWV3c1xuXHQnRGlmZiB0cnVuY2F0ZWQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMnOiB3aW5kb3cud2dVTFMoJ+WHuuS6juaAp+iDveiAg+iZke+8jOW3ruW8guW3suiiq+aIquaWrScsICflh7rmlrzmlYjog73ogIPmha7vvIzlt67nlbDlt7LooqvmiKrmlrcnKSxcblx0J09sZCByZXZpc2lvbic6IHdpbmRvdy53Z1VMUygn5pen54mI5pysJywgJ+iIiueJiOacrCcpLFxuXHQnTmV3IHJldmlzaW9uJzogd2luZG93LndnVUxTKCfmlrDniYjmnKwnLCAn5paw54mI5pysJyksXG5cdCdTb21ldGhpbmcgd2VudCB3cm9uZyA6LSgnOiB3aW5kb3cud2dVTFMoJ+WHuumXrumimOS6hiA6LSgnLCAn5Ye65ZWP6aGM5LqGIDotKCcpLFxuXHQnRW1wdHkgcmV2aXNpb24sIG1heWJlIG5vbi1leGlzdGVudCc6IHdpbmRvdy53Z1VMUygn56m655qE5L+u6K6i77yM5Y+v6IO95bm25LiN5a2Y5ZyoJywgJ+epuueahOS/ruiogu+8jOWPr+iDveS4puS4jeWtmOWcqCcpLFxuXHQnVW5rbm93biBkYXRlJzogd2luZG93LndnVUxTKCfmnKrnn6Xml6XmnJ8nLCAn5pyq55+l5pel5pyfJyksXG5cdC8vIG90aGVyIHNwZWNpYWwgcHJldmlld3Ncblx0J0VtcHR5IGNhdGVnb3J5Jzogd2luZG93LndnVUxTKCfnqbrnmoTliIbnsbsnLCAn56m655qE5YiG6aGeJyksXG5cdCdDYXRlZ29yeSBtZW1iZXJzICglcyBzaG93biknOiB3aW5kb3cud2dVTFMoJ+WIhuexu+aIkOWRmO+8iCVzIOaYvuekuu+8iScsICfliIbpoZ7miJDlk6HvvIglcyDpoa/npLrvvIknKSxcblx0J05vIGltYWdlIGxpbmtzIGZvdW5kJzogd2luZG93LndnVUxTKCfmnKrmib7liLDmlofku7bpk77mjqUnLCAn5pyq5om+5Yiw5qqU5qGI6YCj57WQJyksXG5cdCdGaWxlIGxpbmtzJzogd2luZG93LndnVUxTKCfmlofku7bpk77mjqUnLCAn5qqU5qGI6YCj57WQJyksXG5cdCdub3QgY29tbW9ucyc6IHdpbmRvdy53Z1VMUygn57u05Z+65YWx5Lqr5Lit5peg5q2k5ZCN56ew55qE5paH5Lu244CCJywgJ+e2reWfuuWFseS6q+S4reeEoeatpOWQjeeoseeahOaqlOahiOOAgicpLFxuXHQnY29tbW9ucyBvbmx5Jzogd2luZG93LndnVUxTKCfmraTmlofku7bmnaXoh6rnu7Tln7rlhbHkuqvjgIInLCAn5q2k5qqU5qGI5L6G6Ieq57at5Z+65YWx5Lqr44CCJyksXG5cdCdObyBpbWFnZSBmb3VuZCc6IHdpbmRvdy53Z1VMUygn5om+5LiN5Yiw5paH5Lu2JywgJ+aJvuS4jeWIsOaqlOahiCcpLFxuXHQnY29tbW9ucyBkdXBlJzogd2luZG93LndnVUxTKCfnu7Tln7rlhbHkuqvkuK3lrZjlnKjmraTmlofku7bnmoTlia/mnKzjgIInLCAn57at5Z+65YWx5Lqr5Lit5a2Y5Zyo5q2k5qqU5qGI55qE5Ymv5pys44CCJyksXG5cdCdjb21tb25zIGNvbmZsaWN0Jzogd2luZG93LndnVUxTKCfnu7Tln7rlhbHkuqvkuK3lrZjlnKjmraTmlofku7blkI3np7DkuI3lkIznmoTlia/mnKzjgIInLCAn57at5Z+65YWx5Lqr5Lit5a2Y5Zyo5q2k5qqU5ZCN56ix5LiN5ZCM55qE5Ymv5pys44CCJyksXG5cdC8vIHVzZXItcmVsYXRlZCBhY3Rpb25zIGFuZCBpbmZvXG5cdHVzZXI6IHdpbmRvdy53Z1VMUygn55So5oi3JywgJ+S9v+eUqOiAhScpLFxuXHQvLyAvLy8gdXNlciBwYWdlLCB0YWxrLCBlbWFpbCwgc3BhY2Vcblx0J3VzZXImbmJzcDtwYWdlJzogd2luZG93LndnVUxTKCfnlKjmiLfpobUnLCAn5L2/55So6ICF6aCBJyksXG5cdCd1c2VyIHRhbGsnOiB3aW5kb3cud2dVTFMoJ+eUqOaIt+iuqOiuuicsICfkvb/nlKjogIXlsI3oqbEnKSxcblx0J2VkaXQgdXNlciB0YWxrJzogd2luZG93LndnVUxTKCfnvJbovpHnlKjmiLforqjorronLCAn57eo6Lyv5L2/55So6ICF5bCN6KmxJyksXG5cdCdsZWF2ZSBjb21tZW50Jzogd2luZG93LndnVUxTKCfnlZnoqIAnLCAn55WZ6KiAJyksXG5cdGVtYWlsOiB3aW5kb3cud2dVTFMoJ+eUtemCricsICfpm7vpg7UnKSxcblx0J2VtYWlsIHVzZXInOiB3aW5kb3cud2dVTFMoJ+eUtemCrueUqOaItycsICfpm7vpg7Xkvb/nlKjogIUnKSxcblx0RW1haWx1c2VySGludDogd2luZG93LndnVUxTKCfnu5kgJXMg5Y+R6YCB55S15a2Q6YKu5Lu2JywgJ+e1piAlcyDnmbzpgIHpm7vlrZDpg7Xku7YnKSxcblx0c3BhY2U6IHdpbmRvdy53Z1VMUygn5a2Q6aG16Z2iJywgJ+WtkOmggemdoicpLFxuXHQvLyBzaG9ydCBmb3JtIGZvciB1c2VyU3BhY2UgbGlua1xuXHRQcmVmaXhpbmRleEhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOeUqOaIt+mhteWtkOmhtemdoicsICfpoa/npLogJXMg55qE5L2/55So6ICF6aCB5a2Q6aCB6Z2iJyksXG5cdGNvdW50OiB3aW5kb3cud2dVTFMoJ+e7n+iuoScsICfntbHoqIgnKSxcblx0Ly8gLy8vIGNvbnRyaWJ1dGlvbnMsIHRyZWUsIGxvZ1xuXHQnZWRpdCBjb3VudGVyJzogd2luZG93LndnVUxTKCfnvJbovpHmrKHmlbAnLCAn57eo6Lyv5qyh5pW4JyksXG5cdGthdGVsaW5rSGludDogd2luZG93LndnVUxTKCclcyDnmoTnvJbovpHmrKHmlbAnLCAnJXMg55qE57eo6Lyv5qyh5pW4JyksXG5cdGNvbnRyaWJzOiB3aW5kb3cud2dVTFMoJ+i0oeeMricsICfosqLnjbsnKSxcblx0Y29udHJpYnV0aW9uczogd2luZG93LndnVUxTKCfotKHnjK4nLCAn6LKi5427JyksXG5cdGRlbGV0ZWRDb250cmliczogd2luZG93LndnVUxTKCflt7LliKDpmaTnmoTotKHnjK4nLCAn5bey5Yiq6Zmk55qE6LKi5427JyksXG5cdENvbnRyaWJ1dGlvbnNIaW50OiB3aW5kb3cud2dVTFMoJyVzIOeahOeUqOaIt+i0oeeMricsICclcyDnmoTkvb/nlKjogIXosqLnjbsnKSxcblx0dHJlZTogd2luZG93LndnVUxTKCfmoJEnLCAn5qi5JyksXG5cdGNvbnRyaWJzVHJlZUhpbnQ6IHdpbmRvdy53Z1VMUygn5qC55o2u5ZCN5a2X56m66Ze05p+l55yLICVzIOeahOi0oeeMricsICfmoLnmk5rlkb3lkI3nqbrplpPmqqLoppYgJXMg55qE6LKi5427JyksXG5cdGxvZzogd2luZG93LndnVUxTKCfml6Xlv5cnLCAn5pel6KqMJyksXG5cdCd1c2VyIGxvZyc6IHdpbmRvdy53Z1VMUygn55So5oi35pel5b+XJywgJ+S9v+eUqOiAheaXpeiqjCcpLFxuXHR1c2VyTG9nSGludDogd2luZG93LndnVUxTKCfmmL7npLogJXMg55qE55So5oi35pel5b+XJywgJ+mhr+ekuiAlcyDnmoTkvb/nlKjogIXml6XoqownKSxcblx0dW5ibG9ja1Nob3J0OiB3aW5kb3cud2dVTFMoJ+ino+mZpCcsICfop6PpmaQnKSxcblx0YmxvY2s6IHdpbmRvdy53Z1VMUygn5bCB56aBJywgJ+WwgemOlicpLFxuXHQnYmxvY2sgdXNlcic6IHdpbmRvdy53Z1VMUygn5bCB56aB55So5oi3JywgJ+WwgemOluS9v+eUqOiAhScpLFxuXHRJcGJsb2NrbGlzdEhpbnQ6IHdpbmRvdy53Z1VMUygn6Kej5bCBICVzJywgJ+ino+WwgSAlcycpLFxuXHRCbG9ja2lwSGludDogd2luZG93LndnVUxTKCflsIHnpoEgJXMnLCAn5bCB6Y6WICVzJyksXG5cdCdibG9jayBsb2cnOiB3aW5kb3cud2dVTFMoJ+WwgeemgeaXpeW/lycsICflsIHpjpbml6XoqownKSxcblx0YmxvY2tMb2dIaW50OiB3aW5kb3cud2dVTFMoJ+aYvuekuiAlcyDnmoTlsIHnpoHml6Xlv5cnLCAn6aGv56S6ICVzIOeahOWwgemOluaXpeiqjCcpLFxuXHRwcm90ZWN0TG9nSGludDogd2luZG93LndnVUxTKCfmmL7npLogJXMg55qE5L+d5oqk5pel5b+XJywgJ+mhr+ekuiAlcyDnmoTkv53orbfml6XoqownKSxcblx0cGFnZUxvZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOaXpeW/lycsICfpoa/npLogJXMg55qE5pel6KqMJyksXG5cdGRlbGV0ZUxvZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOWIoOmZpOaXpeW/lycsICfpoa/npLogJXMg55qE5Yiq6Zmk5pel6KqMJyksXG5cdCdJbnZhbGlkICVzICVzJzogd2luZG93LndnVUxTKCfpgInpobkgJXMg5LiN5Y+v55So77yaJXMnLCAn6YG46aCFICVzIOS4jeWPr+eUqO+8miVzJyksXG5cdG06ICflsI8nLFxuXHQvLyBBdXRvZWRpdGluZ1xuXHQnRW50ZXIgYSBub24tZW1wdHkgZWRpdCBzdW1tYXJ5IG9yIHByZXNzIGNhbmNlbCB0byBhYm9ydCc6IHdpbmRvdy53Z1VMUyhcblx0XHQn6L6T5YWl57yW6L6R5pGY6KaB77yM5oiW5oyJ5Y+W5raI5Lit5q2i5pON5L2cJyxcblx0XHQn6Ly45YWl57eo6Lyv5pGY6KaB77yM5oiW5oyJ5Y+W5raI5Lit5q2i5pON5L2cJ1xuXHQpLFxuXHQnRmFpbGVkIHRvIGdldCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgcGxlYXNlIGVkaXQgbWFudWFsbHkuXFxuXFxuJzogd2luZG93LndnVUxTKFxuXHRcdCfojrflj5bkv67orqLniYjmnKzkv6Hmga/lpLHotKXvvIzor7fmiYvliqjkv67mlLnjgIJcXG5cXG4nLFxuXHRcdCfnjbLlj5bkv67oqILniYjmnKzos4foqIrlpLHmlZfvvIzoq4vmiYvli5Xkv67mlLnjgIJcXG5cXG4nXG5cdCksXG5cdCdUaGUgJXMgYnV0dG9uIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgY2xpY2tlZC4gUGxlYXNlIHdhaXQgZm9yIHRoZSBuZXh0IHBhZ2UgdG8gbG9hZC4nOiB3aW5kb3cud2dVTFMoXG5cdFx0J+aMiemSriAlcyDlt7Looqvoh6rliqjngrnlh7vvvIzor7fnrYnlvoXkuIvkuIDkuKrpobXpnaLliqDovb3jgIInLFxuXHRcdCfmjInpiJUgJXMg5bey6KKr6Ieq5YuV6bue5pOK77yM6KuL562J5b6F5LiL5LiA5YCL6aCB6Z2i6LyJ5YWl44CCJ1xuXHQpLFxuXHQnQ291bGQgbm90IGZpbmQgYnV0dG9uICVzLiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGluIHlvdXIgamF2YXNjcmlwdCBmaWxlLic6IHdpbmRvdy53Z1VMUyhcblx0XHQn5om+5LiN5Yiw5oyJ6ZKuICVz77yM6K+35qOA5p+l5oKoIEphdmFTY3JpcHQg5paH5Lu25Lit55qE6K6+572u44CCJyxcblx0XHQn5om+5LiN5Yiw5oyJ6YiVICVz77yM6KuL5qqi5p+l5oKoIEphdmFTY3JpcHQg5qqU5qGI5Lit55qE6Kit5a6a44CCJ1xuXHQpLFxuXHQvLyBQb3B1cHMgc2V0dXBcblx0J09wZW4gZnVsbC1zaXplIGltYWdlJzogd2luZG93LndnVUxTKCfmn6XnnIvlhajlsLrlr7jlm77lg48nLCAn5qqi6KaW5YWo5bC65a+45b2x5YOPJyksXG5cdC8vIOS7peS4i+WGheWuueeUsSBBbm5BbmdlbGEg6KGl5q2jXG5cdGJpbmdTZWFyY2hIaW50OiB3aW5kb3cud2dVTFMoJ+WcqCBCaW5nIOS4iuaQnOe0ouKAnCVz4oCdJywgJ+WcqCBiaW5nIOS4iuaQnOWwi+OAjCVz44CNJyksXG5cdCdlbmFibGUgcHJldmlld3MnOiB3aW5kb3cud2dVTFMoJ+WQr+eUqOmihOiniCcsICfllZ/nlKjpoJDopr0nKSxcblx0J3Nob3cgcHJldmlldyc6IHdpbmRvdy53Z1VMUygn56aB55So6aKE6KeIJywgJ+emgeeUqOmgkOimvScpLFxuXHRoaXN0b3J5ZmVlZEhpbnQ6IHdpbmRvdy53Z1VMUygn6K+l6aG16Z2i55qE6L+R5pyf5pu05pS5IFJTUyBmZWVkJywgJ+ipsumggemdoueahOi/keacn+abtOaUuSBSU1MgZmVlZCcpLFxuXHQnc2VuZCB0aGFua3MnOiB3aW5kb3cud2dVTFMoJ+WPkemAgeaEn+iwoicsICflgrPpgIHmhJ/orJ0nKSxcblx0VGhhbmtzSGludDogd2luZG93LndnVUxTKCflkJHor6XnlKjmiLflj5HpgIHkuIDlsIHmhJ/osKLmtojmga8nLCAn5ZCR6Kmy5L2/55So6ICF5YKz6YCB5LiA5bCB5oSf6Kyd6KiK5oGvJyksXG5cdCdtYXJrIHBhdHJvbGxlZCc6IHdpbmRvdy53Z1VMUygn5qCH6K6w5Li65bey5beh5p+lJywgJ+aomeiomOeCuuW3suW3oeafpScpLFxuXHRtYXJrcGF0cm9sbGVkSGludDogd2luZG93LndnVUxTKCfmoIforrDor6XnvJbovpHkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY6Kmy57eo6Lyv54K65bey5beh5p+lJyksXG5cdCdDb3VsZCBub3QgbWFya2VkIHRoaXMgZWRpdCBhcyBwYXRyb2xsZWQnOiB3aW5kb3cud2dVTFMoJ+aXoOazleagh+iusOivpee8lui+keS4uuW3suW3oeafpScsICfnhKHms5XmqJnoqJjoqbLnt6jovK/ngrrlt7Llt6Hmn6UnKSxcblx0ZGVmYXVsdHBvcHVwUmV2aWV3ZWRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoJ+agh+iusOS7jueJiOacrCVz5YiwJXPpl7TnmoTnvJbovpHkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY5b6e54mI5pysJXPliLAlc+mWk+eahOe3qOi8r+eCuuW3suW3oeafpScpLFxuXHQnSW1hZ2UgZnJvbSBDb21tb25zJzogd2luZG93LndnVUxTKCfmnaXoh6rnu7Tln7rlhbHkuqvnmoTlm77niYcnLCAn5L6G6Ieq57at5Z+65YWx55So55qE5ZyW54mHJyksXG5cdCdEZXNjcmlwdGlvbiBwYWdlJzogd2luZG93LndnVUxTKCflm77niYfmj4/ov7DpobUnLCAn5ZyW54mH5o+P6L+w6aCBJyksXG5cdCdBbHQgdGV4dDonOiB3aW5kb3cud2dVTFMoJ+abv+aNouaWh+acrO+8iEFsdO+8ie+8micsICfmm7/mj5vmloflrZfvvIhBbHTvvInvvJonKSxcblx0cmV2ZGVsOiB3aW5kb3cud2dVTFMoJ+WOhuWPsueJiOacrOiiq+makOiXjycsICfmrbflj7LniYjmnKzooqvpmrHol48nKSxcblx0RGVsZXRlZGNvbnRyaWJ1dGlvbnNIaW50OiB3aW5kb3cud2dVTFMoJ+eUqOaItyVz55qE6KKr5Yig6Zmk57yW6L6R5qyh5pWwJywgJ+S9v+eUqOiAhSVz55qE6KKr5Yiq6Zmk57eo6Lyv5qyh5pW4JyksXG5cdCdObyBiYWNrbGlua3MgZm91bmQnOiB3aW5kb3cud2dVTFMoJ+aJvuS4jeWIsOmTvuWFpemhtemdoicsICfmib7kuI3liLDpj4jlhaXpoIHpnaInKSxcblx0JyBhbmQgbW9yZSc6IHdpbmRvdy53Z1VMUygn5Lul5Y+K5YW25LuW6aG16Z2iJywgJ+S7peWPiuWFtuS7lumggemdoicpLFxuXHQnRG93bmxvYWQgcHJldmlldyBkYXRhJzogd2luZG93LndnVUxTKCfkuIvovb3pooTop4jmlbDmja4nLCAn5LiL6LyJ6aCQ6Ka96LOH5paZJyksXG5cdCdOb3QgYSByZWdpc3RlcmVkIHVzZXJuYW1lJzogd2luZG93LndnVUxTKCfpnZ7lt7Lms6jlhoznmoTnlKjmiLcnLCAn6Z2e5bey6Ki75YaK55qE5L2/55So6ICFJyksXG5cdEJMT0NLRUQ6IHdpbmRvdy53Z1VMUygn6KKr5bCB56aBJywgJ+iiq+WwgemOlicpLFxuXHQnSGFzIGJsb2Nrcyc6IHdpbmRvdy53Z1VMUygn6KKr6YOo5YiG5bCB56aBJywgJ+iiq+mDqOWIhuWwgemOlicpLFxuXHQnIGVkaXRzIHNpbmNlOiAnOiB3aW5kb3cud2dVTFMoJ+asoee8lui+ke+8jOazqOWGjOaXpeacn+S4uicsICfmrKHnt6jovK/vvIzoqLvlhorml6XmnJ/ngronKSxcblx0J2xhc3QgZWRpdCBvbiAnOiB3aW5kb3cud2dVTFMoJ+acgOWQjuS4gOasoee8lui+keS6jicsICfmnIDlvozkuIDmrKHnt6jovK/mlrwnKSxcblx0RW1haWxVc2VySGludDogd2luZG93LndnVUxTKCfnu5kgJXMg5Y+R6YCB55S15a2Q6YKu5Lu2JywgJ+e1piAlcyDnmbzpgIHpm7vlrZDpg7Xku7YnKSxcblx0UkFOR0VCTE9DS0VEOiB3aW5kb3cud2dVTFMoJ0lQ5q616KKr5bCB56aBJywgJ0lQ5q616KKr5bCB6Y6WJyksXG5cdCdJUCB1c2VyJzogd2luZG93LndnVUxTKCdJUOeUqOaItycsICdJUOS9v+eUqOiAhScpLFxuXHQn4pmAJzogJ+KZgCcsXG5cdCfimYInOiAn4pmCJyxcblx0SElEREVOOiB3aW5kb3cud2dVTFMoJ+WFqOWfn+makOiXjycsICflhajln5/pmrHol48nKSxcblx0TE9DS0VEOiB3aW5kb3cud2dVTFMoJ+WFqOWfn+mUgeWumicsICflhajln5/pjpblrponKSxcblx0J0ludmFsaWQgdXNlcic6IHdpbmRvdy53Z1VMUygn6Z2e5rOV55So5oi35ZCNJywgJ+mdnuazleS9v+eUqOiAheWQjeeosScpLFxuXHRkaWZmOiB3aW5kb3cud2dVTFMoJ+W3ruW8gicsICflt67nlbAnKSxcblx0JyB0byAnOiAn6IezJyxcblxuXHRhdXRvZWRpdF92ZXJzaW9uOiAnbnAyMDE0MDQxNicsXG5cdFByZWZpeEluZGV4SGludDogd2luZG93LndnVUxTKCfmmL7npLrnlKjmiLclc+eahOWtkOmhtemdoicsICfpoa/npLrkvb/nlKjogIUlc+eahOWtkOmggemdoicpLFxuXHRudWxsRWRpdFN1bW1hcnk6IHdpbmRvdy53Z1VMUygn6L+b6KGM5LiA5qyh6Zu257yW6L6RJywgJ+mAsuihjOS4gOasoembtue3qOi8rycpLFxuXHQvLyDnlKjmiLfnu4TlkI3np7Dku47ns7vnu5/mtojmga/ojrflj5Zcblx0J2dyb3VwLW5vLWF1dG9jb25maXJtZWQnOiB3aW5kb3cud2dVTFMoJ+mdnuiHquWKqOehruiupOeUqOaItycsICfpnZ7oh6rli5Xnorroqo3kvb/nlKjogIUnKSxcblx0c2VwYXJhdG9yOiAn44CBJyxcblx0Y29tbWE6ICfvvIwnLFxufTtcblxuZXhwb3J0IHttZXNzYWdlfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSB1bmljb3JuL3ByZWZlci1xdWVyeS1zZWxlY3RvciAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge21lc3NhZ2V9IGZyb20gJy4vc3RyaW5nJztcblxuY29uc3QgcG9wdXBzID0gKCkgPT4ge1xuXHQvLyBTVEFSVEZJTEU6IG1haW4uanNcblx0Ly8gRml4IGxhdGVyXG5cdC8vIEdsb2JhbHNcblx0Ly9cblx0Ly8gVHJ5aW5nIHRvIHNob3ZlIGFzIG1hbnkgb2YgdGhlc2UgYXMgcG9zc2libGUgaW50byB0aGUgcGcgKHBvcHVwIGdsb2JhbHMpIG9iamVjdFxuXHRjb25zdCBwZyA9IHtcblx0XHRhcGk6IHt9LFxuXHRcdHJlOiB7fSxcblx0XHRuczoge30sXG5cdFx0c3RyaW5nOiB7fSxcblx0XHR3aWtpOiB7fSxcblx0XHR1c2VyOiB7fSxcblx0XHRtaXNjOiB7fSxcblx0XHRvcHRpb246IHt9LFxuXHRcdG9wdGlvbkRlZmF1bHQ6IHt9LFxuXHRcdGZsYWc6IHt9LFxuXHRcdGNhY2hlOiB7fSxcblx0XHRzdHJ1Y3R1cmVzOiB7fSxcblx0XHR0aW1lcjoge30sXG5cdFx0Y291bnRlcjoge30sXG5cdFx0Y3VycmVudDoge30sXG5cdFx0Zm46IHt9LFxuXHRcdGVuZG9mbGlzdDogbnVsbCxcblx0fTtcblx0LyogQmFpbCBpZiB0aGUgZ2FkZ2V0L3NjcmlwdCBpcyBiZWluZyBsb2FkZWQgdHdpY2UgKi9cblx0LyogQW4gZWxlbWVudCB3aXRoIGlkIFwicGdcIiB3b3VsZCBhZGQgYSB3aW5kb3cucGcgcHJvcGVydHksIGlnbm9yZSBzdWNoIHByb3BlcnR5ICovXG5cdGlmICh3aW5kb3cucGcgJiYgISh3aW5kb3cucGcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0LyogRXhwb3J0IHRvIGdsb2JhbCBjb250ZXh0ICovXG5cdHdpbmRvdy5wZyA9IHBnO1xuXHQvLyBFTkRGSUxFOiBtYWluLmpzXG5cdC8vIFNUQVJURklMRTogYWN0aW9ucy5qc1xuXHRjb25zdCBzZXR1cFRvb2x0aXBzID0gKGNvbnRhaW5lciwgcmVtb3ZlLCBmb3JjZSwgcG9wRGF0YSkgPT4ge1xuXHRcdGxvZyhgc2V0dXBUb29sdGlwcywgY29udGFpbmVyPSR7Y29udGFpbmVyfSwgcmVtb3ZlPSR7cmVtb3ZlfWApO1xuXHRcdGlmICghY29udGFpbmVyKSB7XG5cdFx0XHQvLyB0aGUgbWFpbiBpbml0aWFsIGNhbGxcblx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cE9uRWRpdFNlbGVjdGlvbicpICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmVkaXRmb3JtICYmIGRvY3VtZW50LmVkaXRmb3JtLndwVGV4dGJveDEpIHtcblx0XHRcdFx0ZG9jdW1lbnQuZWRpdGZvcm0ud3BUZXh0Ym94MS5vbm1vdXNldXAgPSBkb1NlbGVjdGlvblBvcHVwO1xuXHRcdFx0fVxuXHRcdFx0Ly8gYXJ0aWNsZS9jb250ZW50IGlzIGEgc3RydWN0dXJlLWRlcGVuZGVudCB0aGluZ1xuXHRcdFx0Y29udGFpbmVyID0gZGVmYXVsdFBvcHVwc0NvbnRhaW5lcigpO1xuXHRcdH1cblx0XHRpZiAoIXJlbW92ZSAmJiAhZm9yY2UgJiYgY29udGFpbmVyLnJhblNldHVwVG9vbHRpcHNBbHJlYWR5KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnRhaW5lci5yYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSA9ICFyZW1vdmU7XG5cdFx0Y29uc3QgYW5jaG9ycyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cdFx0c2V0dXBUb29sdGlwc0xvb3AoYW5jaG9ycywgMCwgMjUwLCAxMDAsIHJlbW92ZSwgcG9wRGF0YSk7XG5cdH07XG5cdGNvbnN0IGRlZmF1bHRQb3B1cHNDb250YWluZXIgPSAoKSA9PiB7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwT25seUFydGljbGVMaW5rcycpKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi12ZWN0b3ItMjAyMiAudmVjdG9yLWJvZHknKSB8fFxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXdfY29udGVudCcpIHx8XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykgfHxcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FydGljbGUnKSB8fFxuXHRcdFx0XHRkb2N1bWVudFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGRvY3VtZW50O1xuXHR9O1xuXHRjb25zdCBzZXR1cFRvb2x0aXBzTG9vcCA9IGZ1bmN0aW9uIHNldHVwVG9vbHRpcHNMb29wKGFuY2hvcnMsIGJlZ2luLCBob3dtYW55LCBzbGVlcCwgcmVtb3ZlLCBwb3BEYXRhLCAuLi5hcmdzKSB7XG5cdFx0bG9nKFxuXHRcdFx0c2ltcGxlUHJpbnRmKCdzZXR1cFRvb2x0aXBzTG9vcCglcywlcywlcywlcywlcyknLCBbXG5cdFx0XHRcdGFuY2hvcnMsXG5cdFx0XHRcdGJlZ2luLFxuXHRcdFx0XHRob3dtYW55LFxuXHRcdFx0XHRzbGVlcCxcblx0XHRcdFx0cmVtb3ZlLFxuXHRcdFx0XHRwb3BEYXRhLFxuXHRcdFx0XHQuLi5hcmdzLFxuXHRcdFx0XSlcblx0XHQpO1xuXHRcdGNvbnN0IGZpbmlzaCA9IGJlZ2luICsgaG93bWFueTtcblx0XHRjb25zdCBsb29wZW5kID0gTWF0aC5taW4oZmluaXNoLCBhbmNob3JzLmxlbmd0aCk7XG5cdFx0bGV0IGogPSBsb29wZW5kIC0gYmVnaW47XG5cdFx0bG9nKFxuXHRcdFx0YHNldHVwVG9vbHRpcHM6IGFuY2hvcnMubGVuZ3RoPSR7YW5jaG9ycy5sZW5ndGh9LCBiZWdpbj0ke2JlZ2lufSwgaG93bWFueT0ke2hvd21hbnl9LCBsb29wZW5kPSR7bG9vcGVuZH0sIHJlbW92ZT0ke3JlbW92ZX1gXG5cdFx0KTtcblx0XHRjb25zdCBkb1Rvb2x0aXAgPSByZW1vdmUgPyByZW1vdmVUb29sdGlwIDogYWRkVG9vbHRpcDtcblx0XHQvLyB0cnkgYSBmYXN0ZXIgKD8pIGxvb3AgY29uc3RydWN0XG5cdFx0aWYgKGogPiAwKSB7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdGNvbnN0IGEgPSBhbmNob3JzW2xvb3BlbmQgLSBqXTtcblx0XHRcdFx0aWYgKGEgPT09IHVuZGVmaW5lZCB8fCAhYSB8fCAhYS5ocmVmKSB7XG5cdFx0XHRcdFx0bG9nKGBnb3QgbnVsbCBhbmNob3IgYXQgaW5kZXggJHtsb29wZW5kfWAgLSBqKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkb1Rvb2x0aXAoYSwgcG9wRGF0YSk7XG5cdFx0XHR9IHdoaWxlICgtLWopO1xuXHRcdH1cblx0XHRpZiAoZmluaXNoIDwgYW5jaG9ycy5sZW5ndGgpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZXR1cFRvb2x0aXBzTG9vcChhbmNob3JzLCBmaW5pc2gsIGhvd21hbnksIHNsZWVwLCByZW1vdmUsIHBvcERhdGEpO1xuXHRcdFx0fSwgc2xlZXApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIXJlbW92ZSAmJiAhZ2V0VmFsdWVPZigncG9wdXBUb2NMaW5rcycpKSB7XG5cdFx0XHRcdHJtVG9jVG9vbHRpcHMoKTtcblx0XHRcdH1cblx0XHRcdHBnLmZsYWcuZmluaXNoZWRMb2FkaW5nID0gdHJ1ZTtcblx0XHR9XG5cdH07XG5cdC8vIGVsaW1pbmF0ZSBwb3B1cHMgZnJvbSB0aGUgVE9DXG5cdC8vIFRoaXMgYWxzbyBraWxscyBhbnkgb25jbGljayBzdHVmZiB0aGF0IHVzZWQgdG8gYmUgZ29pbmcgb24gaW4gdGhlIHRvY1xuXHRjb25zdCBybVRvY1Rvb2x0aXBzID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRvYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2MnKTtcblx0XHRpZiAodG9jKSB7XG5cdFx0XHRjb25zdCB0b2NMaW5rcyA9IHRvYy5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cdFx0XHRjb25zdCB0b2NMZW4gPSB0b2NMaW5rcy5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRvY0xlbjsgKytqKSB7XG5cdFx0XHRcdHJlbW92ZVRvb2x0aXAodG9jTGlua3Nbal0sIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgYWRkVG9vbHRpcCA9IChhLCBwb3BEYXRhKSA9PiB7XG5cdFx0aWYgKCFpc1BvcHVwTGluayhhKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRhLm9ubW91c2VvdmVyID0gbW91c2VPdmVyV2lraUxpbms7XG5cdFx0YS5vbm1vdXNlb3V0ID0gbW91c2VPdXRXaWtpTGluaztcblx0XHRhLm9ubW91c2Vkb3duID0ga2lsbFBvcHVwO1xuXHRcdGEuaGFzUG9wdXAgPSB0cnVlO1xuXHRcdGEucG9wRGF0YSA9IHBvcERhdGE7XG5cdH07XG5cdGNvbnN0IHJlbW92ZVRvb2x0aXAgPSAoYSkgPT4ge1xuXHRcdGlmICghYS5oYXNQb3B1cCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRhLm9ubW91c2VvdmVyID0gbnVsbDtcblx0XHRhLm9ubW91c2VvdXQgPSBudWxsO1xuXHRcdGlmIChhLm9yaWdpbmFsVGl0bGUpIHtcblx0XHRcdGEudGl0bGUgPSBhLm9yaWdpbmFsVGl0bGU7XG5cdFx0fVxuXHRcdGEuaGFzUG9wdXAgPSBmYWxzZTtcblx0fTtcblx0Y29uc3QgcmVtb3ZlVGl0bGUgPSAoYSkgPT4ge1xuXHRcdGEub3JpZ2luYWxUaXRsZSB8fD0gYS50aXRsZTtcblx0XHRhLnRpdGxlID0gJyc7XG5cdH07XG5cdGNvbnN0IHJlc3RvcmVUaXRsZSA9IChhKSA9PiB7XG5cdFx0aWYgKGEudGl0bGUgfHwgIWEub3JpZ2luYWxUaXRsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRhLnRpdGxlID0gYS5vcmlnaW5hbFRpdGxlO1xuXHR9O1xuXHRjb25zdCByZWdpc3Rlckhvb2tzID0gKG5wKSA9PiB7XG5cdFx0Y29uc3QgcG9wdXBNYXhXaWR0aCA9IGdldFZhbHVlT2YoJ3BvcHVwTWF4V2lkdGgnKTtcblx0XHRpZiAodHlwZW9mIHBvcHVwTWF4V2lkdGggPT09ICdudW1iZXInKSB7XG5cdFx0XHRjb25zdCBzZXRNYXhXaWR0aCA9ICgpID0+IHtcblx0XHRcdFx0bnAubWFpbkRpdi5zdHlsZS5tYXhXaWR0aCA9IGAke3BvcHVwTWF4V2lkdGh9cHhgO1xuXHRcdFx0XHRucC5tYXhXaWR0aCA9IHBvcHVwTWF4V2lkdGg7XG5cdFx0XHR9O1xuXHRcdFx0bnAuYWRkSG9vayhzZXRNYXhXaWR0aCwgJ3VuaGlkZScsICdiZWZvcmUnKTtcblx0XHR9XG5cdFx0bnAuYWRkSG9vayhhZGRQb3B1cFNob3J0Y3V0cywgJ3VuaGlkZScsICdhZnRlcicpO1xuXHRcdG5wLmFkZEhvb2socm1Qb3B1cFNob3J0Y3V0cywgJ2hpZGUnLCAnYmVmb3JlJyk7XG5cdH07XG5cdGNvbnN0IHJlbW92ZU1vZGlmaWVyS2V5TGlzdGVuZXIgPSAoYSkgPT4ge1xuXHRcdC8vIHJlbW92ZSBsaXN0ZW5lcnMgZm9yIG1vZGlmaWVyIGtleSBpZiBhbnkgdGhhdCB3ZXJlIGFkZGVkIGluIG1vdXNlT3Zlcldpa2lMaW5rXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGEubW9kaWZpZXJLZXlMaXN0ZW5lciwgZmFsc2UpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgYS5tb2RpZmllcktleUxpc3RlbmVyLCBmYWxzZSk7XG5cdH07XG5cdGNvbnN0IG1vdXNlT3Zlcldpa2lMaW5rID0gZnVuY3Rpb24gbW91c2VPdmVyV2lraUxpbmsoZXZ0KSB7XG5cdFx0aWYgKCFldnQgJiYgd2luZG93LmV2ZW50KSB7XG5cdFx0XHRldnQgPSB3aW5kb3cuZXZlbnQ7XG5cdFx0fVxuXHRcdC8vIGlmIHRoZSBtb2RpZmllciBpcyBuZWVkZWQsIGxpc3RlbiBmb3IgaXQsXG5cdFx0Ly8gd2Ugd2lsbCByZW1vdmUgdGhlIGxpc3RlbmVyIHdoZW4gd2UgbW91c2VvdXQgb2YgdGhpcyBsaW5rIG9yIGtpbGwgcG9wdXAuXG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwTW9kaWZpZXInKSkge1xuXHRcdFx0Ly8gaWYgcG9wdXBNb2RpZmllckFjdGlvbiA9IGVuYWJsZSwgd2Ugc2hvdWxkIHBvcHVwIHdoZW4gdGhlIG1vZGlmaWVyIGlzIHByZXNzZWRcblx0XHRcdC8vIGlmIHBvcHVwTW9kaWZpZXJBY3Rpb24gPSBkaXNhYmxlLCB3ZSBzaG91bGQgcG9wdXAgdW5sZXNzIHRoZSBtb2RpZmllciBpcyBwcmVzc2VkXG5cdFx0XHRjb25zdCBhY3Rpb24gPSBnZXRWYWx1ZU9mKCdwb3B1cE1vZGlmaWVyQWN0aW9uJyk7XG5cdFx0XHRjb25zdCBrZXkgPSBhY3Rpb24gPT09ICdkaXNhYmxlJyA/ICdrZXl1cCcgOiAna2V5ZG93bic7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHNlbGYubW9kaWZpZXJLZXlMaXN0ZW5lciA9IChldnQpID0+IHtcblx0XHRcdFx0bW91c2VPdmVyV2lraUxpbmsyKHNlbGYsIGV2dCk7XG5cdFx0XHR9O1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHNlbGYubW9kaWZpZXJLZXlMaXN0ZW5lciwgZmFsc2UpO1xuXHRcdH1cblx0XHRyZXR1cm4gbW91c2VPdmVyV2lraUxpbmsyKHRoaXMsIGV2dCk7XG5cdH07XG5cdC8qKlxuXHQgKiBHZXRzIHRoZSByZWZlcmVuY2VzIGxpc3QgaXRlbSB0aGF0IHRoZSBwcm92aWRlZCBmb290bm90ZSBsaW5rIHRhcmdldHMuIFRoaXNcblx0ICogaXMgdHlwaWNhbGx5IGEgbGkgZWxlbWVudCB3aXRoaW4gdGhlIG9sLnJlZmVyZW5jZXMgZWxlbWVudCBpbnNpZGUgdGhlIHJlZmxpc3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gYSAtIEEgZm9vdG5vdGUgbGluay5cblx0ICogQHJldHVybiB7RWxlbWVudHxib29sZWFufSBUaGUgdGFyZ2V0ZWQgZWxlbWVudCwgb3IgZmFsc2UgaWYgb25lIGNhbid0IGJlIGZvdW5kLlxuXHQgKi9cblx0Y29uc3QgZm9vdG5vdGVUYXJnZXQgPSAoYSkgPT4ge1xuXHRcdGNvbnN0IGFUaXRsZSA9IFRpdGxlLmZyb21BbmNob3IoYSk7XG5cdFx0Ly8gV2Ugd2FudCBcIi4zQVwiIHJhdGhlciB0aGFuIFwiJTNBXCIgb3IgXCI/XCIgaGVyZSwgc28gdXNlIHRoZSBhbmNob3IgcHJvcGVydHkgZGlyZWN0bHlcblx0XHRjb25zdCBhbmNoID0gYVRpdGxlLmFuY2hvcjtcblx0XHRpZiAoIS9eKGNpdGVfbm90ZS18X25vdGUtfGVuZG5vdGUpLy50ZXN0KGFuY2gpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IGxUaXRsZSA9IFRpdGxlLmZyb21VUkwobG9jYXRpb24uaHJlZik7XG5cdFx0aWYgKGxUaXRsZS50b1N0cmluZyh0cnVlKSAhPT0gYVRpdGxlLnRvU3RyaW5nKHRydWUpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2FuY2h9YCk7XG5cdFx0d2hpbGUgKGVsICYmIHR5cGVvZiBlbC5ub2RlTmFtZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGNvbnN0IG50ID0gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdGlmIChudCA9PT0gJ2xpJykge1xuXHRcdFx0XHRyZXR1cm4gZWw7XG5cdFx0XHR9IGVsc2UgaWYgKG50ID09PSAnYm9keScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSBlbHNlIGlmIChlbC5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdGVsID0gZWwucGFyZW50Tm9kZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRjb25zdCBmb290bm90ZVByZXZpZXcgPSAoeCwgbmF2cG9wKSA9PiB7XG5cdFx0c2V0UG9wdXBIVE1MKGA8aHI+JHt4LmlubmVySFRNTH1gLCAncG9wdXBQcmV2aWV3JywgbmF2cG9wLmlkTnVtYmVyKTtcblx0fTtcblx0Y29uc3QgbW9kaWZpZXJQcmVzc2VkID0gKGV2dCkgPT4ge1xuXHRcdGNvbnN0IG1vZCA9IGdldFZhbHVlT2YoJ3BvcHVwTW9kaWZpZXInKTtcblx0XHRpZiAoIW1vZCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIWV2dCAmJiB3aW5kb3cuZXZlbnQpIHtcblx0XHRcdGV2dCA9IHdpbmRvdy5ldmVudDtcblx0XHR9XG5cdFx0cmV0dXJuIGV2dCAmJiBtb2QgJiYgZXZ0W2Ake21vZC50b0xvd2VyQ2FzZSgpfUtleWBdO1xuXHR9O1xuXHQvLyBDaGVja3MgaWYgdGhlIGNvcnJlY3QgbW9kaWZpZXIgcHJlc3NlZC91bnByZXNzZWQgaWYgbmVlZGVkXG5cdGNvbnN0IGlzQ29ycmVjdE1vZGlmaWVyID0gKF9hLCBldnQpID0+IHtcblx0XHRpZiAoIWdldFZhbHVlT2YoJ3BvcHVwTW9kaWZpZXInKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdC8vIGlmIHBvcHVwTW9kaWZpZXJBY3Rpb24gPSBlbmFibGUsIHdlIHNob3VsZCBwb3B1cCB3aGVuIHRoZSBtb2RpZmllciBpcyBwcmVzc2VkXG5cdFx0Ly8gaWYgcG9wdXBNb2RpZmllckFjdGlvbiA9IGRpc2FibGUsIHdlIHNob3VsZCBwb3B1cCB1bmxlc3MgdGhlIG1vZGlmaWVyIGlzIHByZXNzZWRcblx0XHRjb25zdCBhY3Rpb24gPSBnZXRWYWx1ZU9mKCdwb3B1cE1vZGlmaWVyQWN0aW9uJyk7XG5cdFx0cmV0dXJuIChhY3Rpb24gPT09ICdlbmFibGUnICYmIG1vZGlmaWVyUHJlc3NlZChldnQpKSB8fCAoYWN0aW9uID09PSAnZGlzYWJsZScgJiYgIW1vZGlmaWVyUHJlc3NlZChldnQpKTtcblx0fTtcblx0Y29uc3QgbW91c2VPdmVyV2lraUxpbmsyID0gKGEsIGV2dCkgPT4ge1xuXHRcdGlmICghaXNDb3JyZWN0TW9kaWZpZXIoYSwgZXZ0KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZ2V0VmFsdWVPZigncmVtb3ZlVGl0bGVzJykpIHtcblx0XHRcdHJlbW92ZVRpdGxlKGEpO1xuXHRcdH1cblx0XHRpZiAoYSA9PT0gcGcuY3VycmVudC5saW5rICYmIGEubmF2cG9wdXAgJiYgYS5uYXZwb3B1cC5pc1Zpc2libGUoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRwZy5jdXJyZW50LmxpbmsgPSBhO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdzaW1wbGVQb3B1cHMnKSAmJiAhcGcub3B0aW9uLnBvcHVwU3RydWN0dXJlKSB7XG5cdFx0XHQvLyByZXNldCAqZGVmYXVsdCB2YWx1ZSogb2YgcG9wdXBTdHJ1Y3R1cmVcblx0XHRcdHNldERlZmF1bHQoJ3BvcHVwU3RydWN0dXJlJywgJ29yaWdpbmFsJyk7XG5cdFx0fVxuXHRcdGNvbnN0IGFydGljbGUgPSBuZXcgVGl0bGUoKS5mcm9tQW5jaG9yKGEpO1xuXHRcdC8vIHNldCBnbG9iYWwgdmFyaWFibGUgKHVnaCkgdG8gaG9sZCBhcnRpY2xlICh3aWtpcGFnZSlcblx0XHRwZy5jdXJyZW50LmFydGljbGUgPSBhcnRpY2xlO1xuXHRcdGlmICghYS5uYXZwb3B1cCkge1xuXHRcdFx0YS5uYXZwb3B1cCA9IG5ld05hdnBvcHVwKGEsIGFydGljbGUpO1xuXHRcdFx0cGcuY3VycmVudC5saW5rc0hhc2hbYS5ocmVmXSA9IGEubmF2cG9wdXA7XG5cdFx0XHRwZy5jdXJyZW50LmxpbmtzLnB1c2goYSk7XG5cdFx0fVxuXHRcdGlmIChhLm5hdnBvcHVwLnBlbmRpbmcgPT09IG51bGwgfHwgYS5uYXZwb3B1cC5wZW5kaW5nICE9PSAwKSB7XG5cdFx0XHQvLyBlaXRoZXIgZnJlc2ggcG9wdXBzIG9yIHRob3NlIHdpdGggdW5maW5zaGVkIGJ1c2luZXNzIGFyZSByZWRvbmUgZnJvbSBzY3JhdGNoXG5cdFx0XHRzaW1wbGVQb3B1cENvbnRlbnQoYSwgYXJ0aWNsZSk7XG5cdFx0fVxuXHRcdGEubmF2cG9wdXAuc2hvd1Nvb25JZlN0YWJsZShhLm5hdnBvcHVwLmRlbGF5KTtcblx0XHRjbGVhckludGVydmFsKHBnLnRpbWVyLmNoZWNrUG9wdXBQb3NpdGlvbik7XG5cdFx0cGcudGltZXIuY2hlY2tQb3B1cFBvc2l0aW9uID0gc2V0SW50ZXJ2YWwoY2hlY2tQb3B1cFBvc2l0aW9uLCA2MDApO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdzaW1wbGVQb3B1cHMnKSAmJiBnZXRWYWx1ZU9mKCdwb3B1cFByZXZpZXdCdXR0b24nKSAmJiAhYS5zaW1wbGVOb01vcmUpIHtcblx0XHRcdGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGQuY2xhc3NOYW1lID0gJ3BvcHVwUHJldmlld0J1dHRvbkRpdic7XG5cdFx0XHRjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0ZC5hcHBlbmQocyk7XG5cdFx0XHRzLmNsYXNzTmFtZSA9ICdwb3B1cFByZXZpZXdCdXR0b24nO1xuXHRcdFx0c1tgb24ke2dldFZhbHVlT2YoJ3BvcHVwUHJldmlld0J1dHRvbkV2ZW50Jyl9YF0gPSAoKSA9PiB7XG5cdFx0XHRcdGEuc2ltcGxlTm9Nb3JlID0gdHJ1ZTtcblx0XHRcdFx0ZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRub25zaW1wbGVQb3B1cENvbnRlbnQoYSwgYXJ0aWNsZSk7XG5cdFx0XHR9O1xuXHRcdFx0cy5pbm5lckhUTUwgPSBwb3B1cFN0cmluZygnc2hvdyBwcmV2aWV3Jyk7XG5cdFx0XHRzZXRQb3B1cEhUTUwoZCwgJ3BvcHVwUHJldmlldycsIGEubmF2cG9wdXAuaWROdW1iZXIpO1xuXHRcdH1cblx0XHRpZiAoYS5uYXZwb3B1cC5wZW5kaW5nICE9PSAwKSB7XG5cdFx0XHRub25zaW1wbGVQb3B1cENvbnRlbnQoYSwgYXJ0aWNsZSk7XG5cdFx0fVxuXHR9O1xuXHQvLyBzaW1wbGVQb3B1cENvbnRlbnQ6IHRoZSBjb250ZW50IHRoYXQgZG8gbm90IHJlcXVpcmUgYWRkaXRpb25hbCBkb3dubG9hZFxuXHQvLyAoaXQgaXMgc2hvd24gZXZlbiB3aGVuIHNpbXBsZVBvcHVwcyBpcyB0cnVlKVxuXHRjb25zdCBzaW1wbGVQb3B1cENvbnRlbnQgPSAoYSwgYXJ0aWNsZSkgPT4ge1xuXHRcdC8qIEZJWE1FIGhhY2sgKi9cblx0XHRhLm5hdnBvcHVwLmhhc1BvcHVwTWVudSA9IGZhbHNlO1xuXHRcdGEubmF2cG9wdXAuc2V0SW5uZXJIVE1MKHBvcHVwSFRNTChhKSk7XG5cdFx0ZmlsbEVtcHR5U3BhbnMoe1xuXHRcdFx0bmF2cG9wdXA6IGEubmF2cG9wdXAsXG5cdFx0fSk7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwRHJhZ2dhYmxlJykpIHtcblx0XHRcdGxldCBkcmFnSGFuZGxlID0gZ2V0VmFsdWVPZigncG9wdXBEcmFnSGFuZGxlJykgfHwgbnVsbDtcblx0XHRcdGlmIChkcmFnSGFuZGxlICYmIGRyYWdIYW5kbGUgIT09ICdhbGwnKSB7XG5cdFx0XHRcdGRyYWdIYW5kbGUgKz0gYS5uYXZwb3B1cC5pZE51bWJlcjtcblx0XHRcdH1cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRhLm5hdnBvcHVwLm1ha2VEcmFnZ2FibGUoZHJhZ0hhbmRsZSk7XG5cdFx0XHR9LCAxNTApO1xuXHRcdH1cblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBSZWRsaW5rUmVtb3ZhbCcpICYmIGEuY2xhc3NOYW1lID09PSAnbmV3Jykge1xuXHRcdFx0c2V0UG9wdXBIVE1MKGA8YnI+JHtwb3B1cFJlZGxpbmtIVE1MKGFydGljbGUpfWAsICdwb3B1cFJlZGxpbmsnLCBhLm5hdnBvcHVwLmlkTnVtYmVyKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGRlYnVnRGF0YSA9IChuYXZwb3B1cCkgPT4ge1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cERlYnVnZ2luZycpICYmIG5hdnBvcHVwLmlkTnVtYmVyKSB7XG5cdFx0XHRzZXRQb3B1cEhUTUwoYGlkTnVtYmVyPSR7bmF2cG9wdXAuaWROdW1iZXJ9LCBwZW5kaW5nPSR7bmF2cG9wdXAucGVuZGluZ31gLCAncG9wdXBFcnJvcicsIG5hdnBvcHVwLmlkTnVtYmVyKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG5ld05hdnBvcHVwID0gKGEsIGFydGljbGUpID0+IHtcblx0XHRjb25zdCBuYXZwb3B1cCA9IG5ldyBOYXZwb3B1cCgpO1xuXHRcdG5hdnBvcHVwLmZ1enogPSA1O1xuXHRcdG5hdnBvcHVwLmRlbGF5ID0gZ2V0VmFsdWVPZigncG9wdXBEZWxheScpICogMTAwMDtcblx0XHQvLyBpbmNyZW1lbnQgZ2xvYmFsIGNvdW50ZXIgbm93XG5cdFx0bmF2cG9wdXAuaWROdW1iZXIgPSArK3BnLmlkTnVtYmVyO1xuXHRcdG5hdnBvcHVwLnBhcmVudEFuY2hvciA9IGE7XG5cdFx0bmF2cG9wdXAucGFyZW50UG9wdXAgPSBhLnBvcERhdGEgJiYgYS5wb3BEYXRhLm93bmVyO1xuXHRcdG5hdnBvcHVwLmFydGljbGUgPSBhcnRpY2xlO1xuXHRcdHJlZ2lzdGVySG9va3MobmF2cG9wdXApO1xuXHRcdHJldHVybiBuYXZwb3B1cDtcblx0fTtcblx0Ly8gU2hvdWxkIHdlIHNob3cgbm9uc2ltcGxlIGNvbnRleHQ/XG5cdC8vIElmIHNpbXBsZVBvcHVwcyBpcyBzZXQgdG8gdHJ1ZSwgdGhlbiB3ZSBkbyBub3Qgc2hvdyBub25zaW1wbGUgY29udGV4dCxcblx0Ly8gYnV0IGlmIGEgYm90dG9tIFwic2hvdyBwcmV2aWV3XCIgd2FzIGNsaWNrZWQgd2UgZG8gc2hvdyBub25zaW1wbGUgY29udGV4dFxuXHRjb25zdCBzaG91bGRTaG93Tm9uU2ltcGxlID0gKGEpID0+IHtcblx0XHRyZXR1cm4gIWdldFZhbHVlT2YoJ3NpbXBsZVBvcHVwcycpIHx8IGEuc2ltcGxlTm9Nb3JlO1xuXHR9O1xuXHQvLyBTaG91bGQgd2Ugc2hvdyBub25zaW1wbGUgY29udGV4dCBnb3Zlcm4gYnkgdGhlIG9wdGlvbiAoZS5nLiBwb3B1cFVzZXJJbmZvKT9cblx0Ly8gSWYgdGhlIHVzZXIgZXhwbGljaXRseSBhc2tlZCBmb3Igbm9uc2ltcGxlIGNvbnRleHQgYnkgc2V0dGluZyB0aGUgb3B0aW9uIHRvIHRydWUsXG5cdC8vIHRoZW4gd2Ugc2hvdyBpdCBldmVuIGluIG5vbnNpbXBsZSBtb2RlLlxuXHRjb25zdCBzaG91bGRTaG93ID0gKGEsIG9wdGlvbikgPT4ge1xuXHRcdGlmIChzaG91bGRTaG93Tm9uU2ltcGxlKGEpKSB7XG5cdFx0XHRyZXR1cm4gZ2V0VmFsdWVPZihvcHRpb24pO1xuXHRcdH1cblx0XHRyZXR1cm4gd2luZG93W29wdGlvbl0gIT09IHVuZGVmaW5lZCAmJiB3aW5kb3dbb3B0aW9uXTtcblx0fTtcblx0Y29uc3Qgbm9uc2ltcGxlUG9wdXBDb250ZW50ID0gKGEsIGFydGljbGUpID0+IHtcblx0XHRsZXQgZGlmZjtcblx0XHRsZXQgaGlzdG9yeTtcblx0XHRjb25zdCBwYXJhbXMgPSBwYXJzZVBhcmFtcyhhLmhyZWYpO1xuXHRcdGNvbnN0IG9sZGlkID0gcGFyYW1zLm9sZGlkID09PSB1bmRlZmluZWQgPyBudWxsIDogcGFyYW1zLm9sZGlkO1xuXHRcdGlmIChzaG91bGRTaG93KGEsICdwb3B1cFByZXZpZXdEaWZmcycpKSB7XG5cdFx0XHQoe2RpZmZ9ID0gcGFyYW1zKTtcblx0XHR9XG5cdFx0aWYgKHNob3VsZFNob3coYSwgJ3BvcHVwUHJldmlld0hpc3RvcnknKSkge1xuXHRcdFx0aGlzdG9yeSA9IHBhcmFtcy5hY3Rpb24gPT09ICdoaXN0b3J5Jztcblx0XHR9XG5cdFx0YS5uYXZwb3B1cC5wZW5kaW5nID0gMDtcblx0XHRjb25zdCByZWZlcmVuY2VFbGVtZW50ID0gZm9vdG5vdGVUYXJnZXQoYSk7XG5cdFx0aWYgKHJlZmVyZW5jZUVsZW1lbnQpIHtcblx0XHRcdGZvb3Rub3RlUHJldmlldyhyZWZlcmVuY2VFbGVtZW50LCBhLm5hdnBvcHVwKTtcblx0XHR9IGVsc2UgaWYgKGRpZmYgfHwgZGlmZiA9PT0gMCkge1xuXHRcdFx0bG9hZERpZmYoYXJ0aWNsZSwgb2xkaWQsIGRpZmYsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoaGlzdG9yeSkge1xuXHRcdFx0bG9hZEFQSVByZXZpZXcoJ2hpc3RvcnknLCBhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHR9IGVsc2UgaWYgKHNob3VsZFNob3dOb25TaW1wbGUoYSkgJiYgcGcucmUuY29udHJpYnMudGVzdChhLmhyZWYpKSB7XG5cdFx0XHRsb2FkQVBJUHJldmlldygnY29udHJpYnMnLCBhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHR9IGVsc2UgaWYgKHNob3VsZFNob3dOb25TaW1wbGUoYSkgJiYgcGcucmUuYmFja2xpbmtzLnRlc3QoYS5ocmVmKSkge1xuXHRcdFx0bG9hZEFQSVByZXZpZXcoJ2JhY2tsaW5rcycsIGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHQvLyBGSVhNRSBzaG91bGQgYmUgYWJsZSB0byBnZXQgYWxsIHByZXZpZXcgY29tYmluYXRpb25zIHdpdGggb3B0aW9uc1xuXHRcdFx0YXJ0aWNsZS5uYW1lc3BhY2VJZCgpID09PSBwZy5uc0ltYWdlSWQgJiZcblx0XHRcdChzaG91bGRTaG93KGEsICdpbWFnZVBvcHVwc0ZvckltYWdlcycpIHx8ICFhbmNob3JDb250YWluc0ltYWdlKGEpKVxuXHRcdCkge1xuXHRcdFx0bG9hZEFQSVByZXZpZXcoJ2ltYWdlcGFnZXByZXZpZXcnLCBhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHRcdGxvYWRJbWFnZShhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGFydGljbGUubmFtZXNwYWNlSWQoKSA9PT0gcGcubnNDYXRlZ29yeUlkICYmIHNob3VsZFNob3coYSwgJ3BvcHVwQ2F0ZWdvcnlNZW1iZXJzJykpIHtcblx0XHRcdFx0bG9hZEFQSVByZXZpZXcoJ2NhdGVnb3J5JywgYXJ0aWNsZSwgYS5uYXZwb3B1cCk7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHQoYXJ0aWNsZS5uYW1lc3BhY2VJZCgpID09PSBwZy5uc1VzZXJJZCB8fCBhcnRpY2xlLm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zVXNlcnRhbGtJZCkgJiZcblx0XHRcdFx0c2hvdWxkU2hvdyhhLCAncG9wdXBVc2VySW5mbycpXG5cdFx0XHQpIHtcblx0XHRcdFx0bG9hZEFQSVByZXZpZXcoJ3VzZXJpbmZvJywgYXJ0aWNsZSwgYS5uYXZwb3B1cCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2hvdWxkU2hvd05vblNpbXBsZShhKSkge1xuXHRcdFx0XHRzdGFydEFydGljbGVQcmV2aWV3KGFydGljbGUsIG9sZGlkLCBhLm5hdnBvcHVwKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHBlbmRpbmdOYXZwb3BUYXNrID0gKG5hdnBvcCkgPT4ge1xuXHRcdGlmIChuYXZwb3AgJiYgbmF2cG9wLnBlbmRpbmcgPT09IG51bGwpIHtcblx0XHRcdG5hdnBvcC5wZW5kaW5nID0gMDtcblx0XHR9XG5cdFx0KytuYXZwb3AucGVuZGluZztcblx0XHRkZWJ1Z0RhdGEobmF2cG9wKTtcblx0fTtcblx0Y29uc3QgY29tcGxldGVkTmF2cG9wVGFzayA9IChuYXZwb3ApID0+IHtcblx0XHRpZiAobmF2cG9wICYmIG5hdnBvcC5wZW5kaW5nKSB7XG5cdFx0XHQtLW5hdnBvcC5wZW5kaW5nO1xuXHRcdH1cblx0XHRkZWJ1Z0RhdGEobmF2cG9wKTtcblx0fTtcblx0Y29uc3Qgc3RhcnRBcnRpY2xlUHJldmlldyA9IChhcnRpY2xlLCBvbGRpZCwgbmF2cG9wKSA9PiB7XG5cdFx0bmF2cG9wLnJlZGlyID0gMDtcblx0XHRsb2FkUHJldmlldyhhcnRpY2xlLCBvbGRpZCwgbmF2cG9wKTtcblx0fTtcblx0Y29uc3QgbG9hZFByZXZpZXcgPSAoYXJ0aWNsZSwgb2xkaWQsIG5hdnBvcCkgPT4ge1xuXHRcdGlmICghbmF2cG9wLnJlZGlyKSB7XG5cdFx0XHRuYXZwb3Aub3JpZ2luYWxBcnRpY2xlID0gYXJ0aWNsZTtcblx0XHR9XG5cdFx0YXJ0aWNsZS5vbGRpZCA9IG9sZGlkO1xuXHRcdGxvYWRBUElQcmV2aWV3KCdyZXZpc2lvbicsIGFydGljbGUsIG5hdnBvcCk7XG5cdH07XG5cdGNvbnN0IGxvYWRQcmV2aWV3RnJvbVJlZGlyID0gKHJlZGlyTWF0Y2gsIG5hdnBvcCkgPT4ge1xuXHRcdC8vIHJlZGlyTWF0Y2ggaXMgYSByZWdleCBtYXRjaFxuXHRcdGNvbnN0IHRhcmdldCA9IG5ldyBUaXRsZSgpLmZyb21XaWtpVGV4dChyZWRpck1hdGNoWzJdKTtcblx0XHQvLyBvdmVyd3JpdGUgKG9yIGFkZCkgYW5jaG9yIGZyb20gb3JpZ2luYWwgdGFyZ2V0XG5cdFx0Ly8gbWVkaWF3aWtpIGRvZXMgb3ZlcndyaXRlXG5cdFx0aWYgKG5hdnBvcC5hcnRpY2xlLmFuY2hvcikge1xuXHRcdFx0dGFyZ2V0LmFuY2hvciA9IG5hdnBvcC5hcnRpY2xlLmFuY2hvcjtcblx0XHR9XG5cdFx0bmF2cG9wLnJlZGlyKys7XG5cdFx0bmF2cG9wLnJlZGlyVGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdGNvbnN0IHdhcm5SZWRpciA9IHJlZGlyTGluayh0YXJnZXQsIG5hdnBvcC5hcnRpY2xlKTtcblx0XHRzZXRQb3B1cEhUTUwod2FyblJlZGlyLCAncG9wdXBXYXJuUmVkaXInLCBuYXZwb3AuaWROdW1iZXIpO1xuXHRcdG5hdnBvcC5hcnRpY2xlID0gdGFyZ2V0O1xuXHRcdGZpbGxFbXB0eVNwYW5zKHtcblx0XHRcdHJlZGlyOiB0cnVlLFxuXHRcdFx0cmVkaXJUYXJnZXQ6IHRhcmdldCxcblx0XHRcdG5hdnBvcHVwOiBuYXZwb3AsXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGxvYWRQcmV2aWV3KHRhcmdldCwgbnVsbCwgbmF2cG9wKTtcblx0fTtcblx0Y29uc3QgaW5zZXJ0UHJldmlldyA9IChkb3dubG9hZCkgPT4ge1xuXHRcdGlmICghZG93bmxvYWQub3duZXIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcmVkaXJNYXRjaCA9IHBnLnJlLnJlZGlyZWN0LmV4ZWMoZG93bmxvYWQuZGF0YSk7XG5cdFx0aWYgKGRvd25sb2FkLm93bmVyLnJlZGlyID09PSAwICYmIHJlZGlyTWF0Y2gpIHtcblx0XHRcdGxvYWRQcmV2aWV3RnJvbVJlZGlyKHJlZGlyTWF0Y2gsIGRvd25sb2FkLm93bmVyKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGRvd25sb2FkLm93bmVyLnZpc2libGUgfHwgIWdldFZhbHVlT2YoJ3BvcHVwTGF6eVByZXZpZXdzJykpIHtcblx0XHRcdGluc2VydFByZXZpZXdOb3coZG93bmxvYWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBpZCA9IGRvd25sb2FkLm93bmVyLnJlZGlyID8gJ1BSRVZJRVdfUkVESVJfSE9PSycgOiAnUFJFVklFV19IT09LJztcblx0XHRcdGRvd25sb2FkLm93bmVyLmFkZEhvb2soXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRpbnNlcnRQcmV2aWV3Tm93KGRvd25sb2FkKTtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0J3VuaGlkZScsXG5cdFx0XHRcdCdhZnRlcicsXG5cdFx0XHRcdGlkXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgaW5zZXJ0UHJldmlld05vdyA9IChkb3dubG9hZCkgPT4ge1xuXHRcdGlmICghZG93bmxvYWQub3duZXIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3Qgd2lraVRleHQgPSBkb3dubG9hZC5kYXRhO1xuXHRcdGNvbnN0IG5hdnBvcCA9IGRvd25sb2FkLm93bmVyO1xuXHRcdGNvbnN0IGFydCA9IG5hdnBvcC5yZWRpclRhcmdldCB8fCBuYXZwb3Aub3JpZ2luYWxBcnRpY2xlO1xuXHRcdG1ha2VGaXhEYWJzKHdpa2lUZXh0LCBuYXZwb3ApO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFN1bW1hcnlEYXRhJykpIHtcblx0XHRcdGdldFBhZ2VJbmZvKHdpa2lUZXh0LCBkb3dubG9hZCk7XG5cdFx0XHRzZXRQb3B1cFRyYWlsZXIoZ2V0UGFnZUluZm8od2lraVRleHQsIGRvd25sb2FkKSwgbmF2cG9wLmlkTnVtYmVyKTtcblx0XHR9XG5cdFx0bGV0IGltYWdlUGFnZSA9ICcnO1xuXHRcdGltYWdlUGFnZSA9IGFydC5uYW1lc3BhY2VJZCgpID09PSBwZy5uc0ltYWdlSWQgPyBhcnQudG9TdHJpbmcoKSA6IGdldFZhbGlkSW1hZ2VGcm9tV2lraVRleHQod2lraVRleHQpO1xuXHRcdGlmIChpbWFnZVBhZ2UpIHtcblx0XHRcdGxvYWRJbWFnZShUaXRsZS5mcm9tV2lraVRleHQoaW1hZ2VQYWdlKSwgbmF2cG9wKTtcblx0XHR9XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwUHJldmlld3MnKSkge1xuXHRcdFx0aW5zZXJ0QXJ0aWNsZVByZXZpZXcoZG93bmxvYWQsIGFydCwgbmF2cG9wKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGluc2VydEFydGljbGVQcmV2aWV3ID0gKGRvd25sb2FkLCBhcnQsIG5hdnBvcCkgPT4ge1xuXHRcdGlmIChkb3dubG9hZCAmJiB0eXBlb2YgZG93bmxvYWQuZGF0YSA9PT0gdHlwZW9mICcnKSB7XG5cdFx0XHRpZiAoYXJ0Lm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zVGVtcGxhdGVJZCAmJiBnZXRWYWx1ZU9mKCdwb3B1cFByZXZpZXdSYXdUZW1wbGF0ZXMnKSkge1xuXHRcdFx0XHQvLyBGSVhNRSBjb21wYXJlL2NvbnNvbGlkYXRlIHdpdGggZGlmZiBlc2NhcGluZyBjb2RlIGZvciB3aWtpdGV4dFxuXHRcdFx0XHRjb25zdCBoID0gYDxocj48c3BhbiBzdHlsZT1cImZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XCI+JHtkb3dubG9hZC5kYXRhXG5cdFx0XHRcdFx0LmVudGlmeSgpXG5cdFx0XHRcdFx0LnNwbGl0KFN0cmluZy5yYXdgXFxuYClcblx0XHRcdFx0XHQuam9pbihTdHJpbmcucmF3YDxicj5cXG5gKX08L3NwYW4+YDtcblx0XHRcdFx0c2V0UG9wdXBIVE1MKGgsICdwb3B1cFByZXZpZXcnLCBuYXZwb3AuaWROdW1iZXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcCA9IHByZXBQcmV2aWV3bWFrZXIoZG93bmxvYWQuZGF0YSwgYXJ0LCBuYXZwb3ApO1xuXHRcdFx0XHRwLnNob3dQcmV2aWV3KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBwcmVwUHJldmlld21ha2VyID0gKGRhdGEsIGFydGljbGUsIG5hdnBvcCkgPT4ge1xuXHRcdC8vIGRlYWwgd2l0aCB0cmlja3N5IGFuY2hvcnNcblx0XHRjb25zdCBkID0gYW5jaG9yaXplKGRhdGEsIGFydGljbGUuYW5jaG9yU3RyaW5nKCkpO1xuXHRcdGNvbnN0IHVybEJhc2UgPSBqb2luUGF0aChbcGcud2lraS5hcnRpY2xlYmFzZSwgYXJ0aWNsZS51cmxTdHJpbmcoKV0pO1xuXHRcdGNvbnN0IHAgPSBuZXcgUHJldmlld21ha2VyKGQsIHVybEJhc2UsIG5hdnBvcCk7XG5cdFx0cmV0dXJuIHA7XG5cdH07XG5cdC8vIFRyeSB0byBpbWl0YXRlIHRoZSB3YXkgbWVkaWF3aWtpIGdlbmVyYXRlcyBIVE1MIGFuY2hvcnMgZnJvbSBzZWN0aW9uIHRpdGxlc1xuXHRjb25zdCBhbmNob3JpemUgPSAoZCwgYW5jaCkgPT4ge1xuXHRcdGlmICghYW5jaCkge1xuXHRcdFx0cmV0dXJuIGQ7XG5cdFx0fVxuXHRcdGNvbnN0IGFuY2hSZSA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgKD86PStcXFxccyoke2xpdGVyYWxpemVSZWdleChhbmNoKS5yZXBsYWNlKC9bIF9dL2csICdbXyBdJyl9XFxcXHMqPSt8XFxcXHtcXFxce1xcXFxzKiR7Z2V0VmFsdWVPZihcblx0XHRcdFx0J3BvcHVwQW5jaG9yUmVnZXhwJ1xuXHRcdFx0KX1cXFxccyooPzpcXFxcfFtefH1dKikqP1xcXFxzKiR7bGl0ZXJhbGl6ZVJlZ2V4KGFuY2gpfVxcXFxzKig/OlxcXFx8W159XSopP319KWBcblx0XHQpO1xuXHRcdGNvbnN0IG1hdGNoID0gZC5tYXRjaChhbmNoUmUpO1xuXHRcdGlmIChtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAwICYmIG1hdGNoWzBdKSB7XG5cdFx0XHRyZXR1cm4gZC5zbGljZShNYXRoLm1heCgwLCBkLmluZGV4T2YobWF0Y2hbMF0pKSk7XG5cdFx0fVxuXHRcdC8vIG5vdyB0cnkgdG8gZGVhbCB3aXRoID09PSBmb28gW1tiYXJ8YmF6XV0gYm9vbSA9PT0gLT4gI2Zvb19iYXpfYm9vbVxuXHRcdGNvbnN0IGxpbmVzID0gZC5zcGxpdCgnXFxuJyk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0bGluZXNbaV0gPSBsaW5lc1tpXVxuXHRcdFx0XHQucmVwbGFjZSgvXFxbezJ9KFteXFxdfF0qP1xcfCk/KC4qPyldezJ9L2csICckMicpXG5cdFx0XHRcdC5yZXBsYWNlKC8nJycoW14nXSkvZywgJyQxJylcblx0XHRcdFx0LnJlcGxhY2UoLycnKFteJ10pL2csICckMScpO1xuXHRcdFx0aWYgKGFuY2hSZS50ZXN0KGxpbmVzW2ldKSkge1xuXHRcdFx0XHRyZXR1cm4gZFxuXHRcdFx0XHRcdC5zcGxpdCgnXFxuJylcblx0XHRcdFx0XHQuc2xpY2UoaSlcblx0XHRcdFx0XHQuam9pbignXFxuJylcblx0XHRcdFx0XHQucmVwbGFjZSgvXltePV0qLywgJycpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZDtcblx0fTtcblx0Y29uc3Qga2lsbFBvcHVwID0gZnVuY3Rpb24ga2lsbFBvcHVwKCkge1xuXHRcdHJlbW92ZU1vZGlmaWVyS2V5TGlzdGVuZXIodGhpcyk7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwU2hvcnRjdXRLZXlzJykpIHtcblx0XHRcdHJtUG9wdXBTaG9ydGN1dHMoKTtcblx0XHR9XG5cdFx0aWYgKCFwZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAocGcuY3VycmVudC5saW5rICYmIHBnLmN1cnJlbnQubGluay5uYXZwb3B1cCkge1xuXHRcdFx0cGcuY3VycmVudC5saW5rLm5hdnBvcHVwLmJhbmlzaCgpO1xuXHRcdH1cblx0XHRwZy5jdXJyZW50LmxpbmsgPSBudWxsO1xuXHRcdGFib3J0QWxsRG93bmxvYWRzKCk7XG5cdFx0aWYgKHBnLnRpbWVyLmNoZWNrUG9wdXBQb3NpdGlvbikge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbChwZy50aW1lci5jaGVja1BvcHVwUG9zaXRpb24pO1xuXHRcdFx0cGcudGltZXIuY2hlY2tQb3B1cFBvc2l0aW9uID0gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7IC8vIHByZXNlcnZlIGRlZmF1bHQgYWN0aW9uXG5cdH07XG5cdC8vIEVOREZJTEU6IGFjdGlvbnMuanNcblx0Ly8gU1RBUlRGSUxFOiBkb21kcmFnLmpzXG5cdC8qKlxuXHQgKiBAZmlsZW92ZXJ2aWV3XG5cdCAqIFRoZSB7QHNvdXJjZSBEcmFnfSBvYmplY3QsIHdoaWNoIGVuYWJsZXMgb2JqZWN0cyB0byBiZSBkcmFnZ2VkIGFyb3VuZC5cblx0ICogPHByZT5cblx0ICpcblx0ICogZG9tLWRyYWcuanNcblx0ICogMDkuMjUuMjAwMVxuXHQgKiB3d3cueW91bmdwdXAubmV0XG5cdCAqXG5cdCAqIDEwLjI4LjIwMDEgLSBmaXhlZCBtaW5vciBidWcgd2hlcmUgZXZlbnRzXG5cdCAqXG5cdCAqIHNvbWV0aW1lcyBmaXJlZCBvZmYgdGhlIGhhbmRsZSwgbm90IHRoZSByb290LlxuXHQgKiBQYXJlZCBkb3duLCBzb21lIGhvb2tzIGFkZGVkIGJ5IEx1cGluXG5cdCAqIENvcHlyaWdodCBBYXJvbiBCb29kbWFuLlxuXHQgKiBTYXlpbmcgc3R1cGlkIHRoaW5ncyBkYWlseSBzaW5jZSBNYXJjaCAyMDAxLlxuXHQgKiA8L3ByZT5cblx0ICovXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IERyYWcgb2JqZWN0LiBUaGlzIGlzIHVzZWQgdG8gbWFrZSB2YXJpb3VzIERPTSBlbGVtZW50cyBkcmFnZ2FibGUuXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0Y2xhc3MgRHJhZyB7XG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIENvbmRpdGlvbiB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgdG8gZHJhZy4gVGhpcyBmdW5jdGlvbiBzaG91bGQgdGFrZSBvbmUgcGFyYW1ldGVyLFxuXHRcdFx0ICogYW4gRXZlbnQuICBUbyBkaXNhYmxlIHRoaXMsIHNldCBpdCB0byA8Y29kZT5udWxsPC9jb2RlPi5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBGdW5jdGlvblxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnN0YXJ0Q29uZGl0aW9uID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogSG9vayB0byBiZSBydW4gd2hlbiB0aGUgZHJhZyBmaW5pc2hlcy4gVGhpcyBpcyBwYXNzZWQgdGhlIGZpbmFsIGNvb3JkaW5hdGVzIG9mIHRoZVxuXHRcdFx0ICogZHJhZ2dlZCBvYmplY3QgKHR3byBpbnRlZ2VycywgeCBhbmQgeSkuIFRvIGRpc2FibGVzIHRoaXMsIHNldCBpdCB0byA8Y29kZT5udWxsPC9jb2RlPi5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBGdW5jdGlvblxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmVuZEhvb2sgPSBudWxsO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBHZXRzIGFuIGV2ZW50IGluIGEgY3Jvc3MtYnJvd3NlciBtYW5uZXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0V2ZW50fSBlXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRzdGF0aWMgZml4RShlKSB7XG5cdFx0XHRpZiAoZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGUgPSB3aW5kb3cuZXZlbnQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZS5sYXllclggPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRlLmxheWVyWCA9IGUub2Zmc2V0WDtcblx0XHRcdH1cblx0XHRcdGlmIChlLmxheWVyWSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGUubGF5ZXJZID0gZS5vZmZzZXRZO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGU7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWxpc2VzIHRoZSBEcmFnIGluc3RhbmNlIGJ5IHRlbGxpbmcgaXQgd2hpY2ggb2JqZWN0IHlvdSB3YW50IHRvIGJlIGRyYWdnYWJsZSwgYW5kIHdoYXRcblx0XHQgKiB5b3Ugd2FudCB0byBkcmFnIGl0IGJ5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtET01FbGVtZW50fSBvIFRoZSBcImhhbmRsZVwiIGJ5IHdoaWNoIDxjb2RlPm9Sb290PC9jb2RlPiBpcyBkcmFnZ2VkLlxuXHRcdCAqIEBwYXJhbSB7RE9NRWxlbWVudH0gb1Jvb3QgVGhlIG9iamVjdCB3aGljaCBtb3ZlcyB3aGVuIDxjb2RlPm88L2NvZGU+IGlzIGRyYWdnZWQsIG9yIDxjb2RlPm88L2NvZGU+IGlmIG9taXR0ZWQuXG5cdFx0ICovXG5cdFx0aW5pdChvLCBvUm9vdCkge1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHR0aGlzLm9iaiA9IG87XG5cdFx0XHRvLm9ubW91c2Vkb3duID0gKGUpID0+IHtcblx0XHRcdFx0c2VsZi5zdGFydChlKTtcblx0XHRcdH07XG5cdFx0XHRvLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHRvLnBvcHVwc19kcmFnZ2FibGUgPSB0cnVlO1xuXHRcdFx0by5obW9kZSA9IHRydWU7XG5cdFx0XHRvLnZtb2RlID0gdHJ1ZTtcblx0XHRcdG8ucm9vdCA9IG9Sb290IHx8IG87XG5cdFx0XHRpZiAoTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUludChvLnJvb3Quc3R5bGUubGVmdCwgMTApKSkge1xuXHRcdFx0XHRvLnJvb3Quc3R5bGUubGVmdCA9ICcwcHgnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKE51bWJlci5pc05hTihOdW1iZXIucGFyc2VJbnQoby5yb290LnN0eWxlLnRvcCwgMTApKSkge1xuXHRcdFx0XHRvLnJvb3Quc3R5bGUudG9wID0gJzBweCc7XG5cdFx0XHR9XG5cdFx0XHRvLnJvb3Qub250aGlzU3RhcnQgPSAoKSA9PiB7fTtcblx0XHRcdG8ucm9vdC5vbnRoaXNFbmQgPSAoKSA9PiB7fTtcblx0XHRcdG8ucm9vdC5vbnRoaXMgPSAoKSA9PiB7fTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU3RhcnRzIHRoZSBkcmFnLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcGFyYW0ge0V2ZW50fSBlXG5cdFx0ICovXG5cdFx0c3RhcnQoZSkge1xuXHRcdFx0Y29uc3QgbyA9IHRoaXMub2JqOyAvLyA9IHRoaXM7XG5cdFx0XHRlID0gRHJhZy5maXhFKGUpO1xuXHRcdFx0aWYgKHRoaXMuc3RhcnRDb25kaXRpb24gJiYgIXRoaXMuc3RhcnRDb25kaXRpb24oZSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgeSA9IE51bWJlci5wYXJzZUludChvLnZtb2RlID8gby5yb290LnN0eWxlLnRvcCA6IG8ucm9vdC5zdHlsZS5ib3R0b20sIDEwKTtcblx0XHRcdGNvbnN0IHggPSBOdW1iZXIucGFyc2VJbnQoby5obW9kZSA/IG8ucm9vdC5zdHlsZS5sZWZ0IDogby5yb290LnN0eWxlLnJpZ2h0LCAxMCk7XG5cdFx0XHRvLnJvb3Qub250aGlzU3RhcnQoeCwgeSk7XG5cdFx0XHRvLmxhc3RNb3VzZVggPSBlLmNsaWVudFg7XG5cdFx0XHRvLmxhc3RNb3VzZVkgPSBlLmNsaWVudFk7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdG8ub25tb3VzZW1vdmVEZWZhdWx0ID0gZG9jdW1lbnQub25tb3VzZW1vdmU7XG5cdFx0XHRvLmRyYWdnaW5nID0gdHJ1ZTtcblx0XHRcdGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gKGUpID0+IHtcblx0XHRcdFx0c2VsZi5kcmFnKGUpO1xuXHRcdFx0fTtcblx0XHRcdGRvY3VtZW50Lm9ubW91c2V1cCA9IChlKSA9PiB7XG5cdFx0XHRcdHNlbGYuZW5kKGUpO1xuXHRcdFx0fTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogRG9lcyB0aGUgZHJhZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGRyYWcoZSkge1xuXHRcdFx0ZSA9IERyYWcuZml4RShlKTtcblx0XHRcdGNvbnN0IG8gPSB0aGlzLm9iajtcblx0XHRcdGNvbnN0IGV5ID0gZS5jbGllbnRZO1xuXHRcdFx0Y29uc3QgZXggPSBlLmNsaWVudFg7XG5cdFx0XHRjb25zdCB5ID0gTnVtYmVyLnBhcnNlSW50KG8udm1vZGUgPyBvLnJvb3Quc3R5bGUudG9wIDogby5yb290LnN0eWxlLmJvdHRvbSwgMTApO1xuXHRcdFx0Y29uc3QgeCA9IE51bWJlci5wYXJzZUludChvLmhtb2RlID8gby5yb290LnN0eWxlLmxlZnQgOiBvLnJvb3Quc3R5bGUucmlnaHQsIDEwKTtcblx0XHRcdGNvbnN0IG54ID0geCArIChleCAtIG8ubGFzdE1vdXNlWCkgKiAoby5obW9kZSA/IDEgOiAtMSk7XG5cdFx0XHRjb25zdCBueSA9IHkgKyAoZXkgLSBvLmxhc3RNb3VzZVkpICogKG8udm1vZGUgPyAxIDogLTEpO1xuXHRcdFx0dGhpcy5vYmoucm9vdC5zdHlsZVtvLmhtb2RlID8gJ2xlZnQnIDogJ3JpZ2h0J10gPSBgJHtueH1weGA7XG5cdFx0XHR0aGlzLm9iai5yb290LnN0eWxlW28udm1vZGUgPyAndG9wJyA6ICdib3R0b20nXSA9IGAke255fXB4YDtcblx0XHRcdHRoaXMub2JqLmxhc3RNb3VzZVggPSBleDtcblx0XHRcdHRoaXMub2JqLmxhc3RNb3VzZVkgPSBleTtcblx0XHRcdHRoaXMub2JqLnJvb3Qub250aGlzKG54LCBueSk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEVuZHMgdGhlIGRyYWcuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGVuZCgpIHtcblx0XHRcdGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gdGhpcy5vYmoub25tb3VzZW1vdmVEZWZhdWx0O1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcblx0XHRcdHRoaXMub2JqLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHRpZiAodGhpcy5lbmRIb29rKSB7XG5cdFx0XHRcdHRoaXMuZW5kSG9vayhcblx0XHRcdFx0XHROdW1iZXIucGFyc2VJbnQodGhpcy5vYmoucm9vdC5zdHlsZVt0aGlzLm9iai5obW9kZSA/ICdsZWZ0JyA6ICdyaWdodCddLCAxMCksXG5cdFx0XHRcdFx0TnVtYmVyLnBhcnNlSW50KHRoaXMub2JqLnJvb3Quc3R5bGVbdGhpcy5vYmoudm1vZGUgPyAndG9wJyA6ICdib3R0b20nXSwgMTApXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIEVOREZJTEU6IGRvbWRyYWcuanNcblx0Ly8gU1RBUlRGSUxFOiBzdHJ1Y3R1cmVzLmpzXG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwgPSB7fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cExheW91dCA9ICgpID0+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0J3BvcHVwRXJyb3InLFxuXHRcdFx0J3BvcHVwSW1hZ2UnLFxuXHRcdFx0J3BvcHVwVG9wTGlua3MnLFxuXHRcdFx0J3BvcHVwVGl0bGUnLFxuXHRcdFx0J3BvcHVwVXNlckRhdGEnLFxuXHRcdFx0J3BvcHVwRGF0YScsXG5cdFx0XHQncG9wdXBPdGhlckxpbmtzJyxcblx0XHRcdCdwb3B1cFJlZGlyJyxcblx0XHRcdFsncG9wdXBXYXJuUmVkaXInLCAncG9wdXBSZWRpclRvcExpbmtzJywgJ3BvcHVwUmVkaXJUaXRsZScsICdwb3B1cFJlZGlyRGF0YScsICdwb3B1cFJlZGlyT3RoZXJMaW5rcyddLFxuXHRcdFx0J3BvcHVwTWlzY1Rvb2xzJyxcblx0XHRcdFsncG9wdXBSZWRsaW5rJ10sXG5cdFx0XHQncG9wdXBQcmVQcmV2aWV3U2VwJyxcblx0XHRcdCdwb3B1cFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwU2Vjb25kUHJldmlldycsXG5cdFx0XHQncG9wdXBQcmV2aWV3TW9yZScsXG5cdFx0XHQncG9wdXBQb3N0UHJldmlldycsXG5cdFx0XHQncG9wdXBGaXhEYWInLFxuXHRcdF07XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBSZWRpclNwYW5zID0gKCkgPT4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHQncG9wdXBSZWRpcicsXG5cdFx0XHQncG9wdXBXYXJuUmVkaXInLFxuXHRcdFx0J3BvcHVwUmVkaXJUb3BMaW5rcycsXG5cdFx0XHQncG9wdXBSZWRpclRpdGxlJyxcblx0XHRcdCdwb3B1cFJlZGlyRGF0YScsXG5cdFx0XHQncG9wdXBSZWRpck90aGVyTGlua3MnLFxuXHRcdF07XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBUaXRsZSA9ICh4KSA9PiB7XG5cdFx0bG9nKCdkZWZhdWx0c3RydWN0dXJlLnBvcHVwVGl0bGUnKTtcblx0XHRpZiAoIWdldFZhbHVlT2YoJ3BvcHVwTmF2TGlua3MnKSkge1xuXHRcdFx0cmV0dXJuIG5hdmxpbmtTdHJpbmdUb0hUTUwoJzxiPjw8bWFpbmxpbms+PjwvYj4nLCB4LmFydGljbGUsIHgucGFyYW1zKTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9O1xuXHRwZy5zdHJ1Y3R1cmVzLm9yaWdpbmFsLnBvcHVwVG9wTGlua3MgPSAoeCkgPT4ge1xuXHRcdGxvZygnZGVmYXVsdHN0cnVjdHVyZS5wb3B1cFRvcExpbmtzJyk7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwTmF2TGlua3MnKSkge1xuXHRcdFx0cmV0dXJuIG5hdkxpbmtzSFRNTCh4LmFydGljbGUsIHguaGludCwgeC5wYXJhbXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBJbWFnZSA9ICh4KSA9PiB7XG5cdFx0bG9nKGBvcmlnaW5hbC5wb3B1cEltYWdlLCB4LmFydGljbGU9JHt4LmFydGljbGV9LCB4Lm5hdnBvcC5pZE51bWJlcj0ke3gubmF2cG9wLmlkTnVtYmVyfWApO1xuXHRcdHJldHVybiBpbWFnZUhUTUwoeC5hcnRpY2xlLCB4Lm5hdnBvcC5pZE51bWJlcik7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBSZWRpclRpdGxlID0gcGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFRpdGxlO1xuXHRwZy5zdHJ1Y3R1cmVzLm9yaWdpbmFsLnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBUb3BMaW5rcztcblx0Y29uc3QgY29weVN0cnVjdHVyZSA9IChvbGRTdHJ1Y3R1cmUsIG5ld1N0cnVjdHVyZSkgPT4ge1xuXHRcdHBnLnN0cnVjdHVyZXNbbmV3U3RydWN0dXJlXSA9IHt9O1xuXHRcdGZvciAoY29uc3QgcHJvcCBpbiBwZy5zdHJ1Y3R1cmVzW29sZFN0cnVjdHVyZV0pIHtcblx0XHRcdGlmICghT2JqZWN0Lmhhc093bihwZy5zdHJ1Y3R1cmVzW29sZFN0cnVjdHVyZV0sIHByb3ApKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cGcuc3RydWN0dXJlc1tuZXdTdHJ1Y3R1cmVdW3Byb3BdID0gcGcuc3RydWN0dXJlc1tvbGRTdHJ1Y3R1cmVdW3Byb3BdO1xuXHRcdH1cblx0fTtcblx0Y29weVN0cnVjdHVyZSgnb3JpZ2luYWwnLCAnbm9zdGFsZ2lhJyk7XG5cdHBnLnN0cnVjdHVyZXMubm9zdGFsZ2lhLnBvcHVwVG9wTGlua3MgPSAoeCkgPT4ge1xuXHRcdGxldCBzdHIgPSAnJztcblx0XHRzdHIgKz0gJzxiPjw8bWFpbmxpbmt8c2hvcnRjdXQ9ID4+PC9iPic7XG5cdFx0Ly8gdXNlciBsaW5rc1xuXHRcdC8vIGNvbnRyaWJzIC0gbG9nIC0gY291bnQgLSBlbWFpbCAtIGJsb2NrXG5cdFx0Ly8gY291bnQgb25seSBpZiBhcHBsaWNhYmxlOyBibG9jayBvbmx5IGlmIHBvcHVwQWRtaW5MaW5rc1xuXHRcdHN0ciArPSAnaWYodXNlcil7PGJyPjw8Y29udHJpYnN8c2hvcnRjdXQ9Yz4+Jztcblx0XHRzdHIgKz0gJ2lmKHdpa2ltZWRpYSl7Kjw8Y291bnR8c2hvcnRjdXQ9Iz4+fSc7XG5cdFx0c3RyICs9ICdpZihpcHVzZXIpe31lbHNleyo8PGVtYWlsfHNob3J0Y3V0PUU+Pn1pZihhZG1pbil7Kjw8YmxvY2t8c2hvcnRjdXQ9Yj4+fX0nO1xuXHRcdC8vIGVkaXRpbmcgbGlua3Ncblx0XHQvLyB0YWxrcGFnZSAgIC0+IGVkaXR8bmV3IC0gaGlzdG9yeSAtIHVufHdhdGNoIC0gYXJ0aWNsZXxlZGl0XG5cdFx0Ly8gb3RoZXIgcGFnZSAtPiBlZGl0IC0gaGlzdG9yeSAtIHVufHdhdGNoIC0gdGFsa3xlZGl0fG5ld1xuXHRcdGNvbnN0IGVkaXRzdHIgPSAnPDxlZGl0fHNob3J0Y3V0PWU+Pic7XG5cdFx0Y29uc3QgZWRpdE9sZGlkU3RyID0gYGlmKG9sZGlkKXs8PGVkaXRPbGR8c2hvcnRjdXQ9ZT4+fDw8cmV2ZXJ0fHNob3J0Y3V0PXZ8cnY+Pnw8PGVkaXR8Y3VyPj59ZWxzZXske2VkaXRzdHJ9fWA7XG5cdFx0Y29uc3QgaGlzdG9yeXN0ciA9ICc8PGhpc3Rvcnl8c2hvcnRjdXQ9aD4+Jztcblx0XHRjb25zdCB3YXRjaHN0ciA9ICc8PHVud2F0Y2h8dW53YXRjaFNob3J0Pj58PDx3YXRjaHxzaG9ydGN1dD13fHdhdGNoVGhpbmd5Pj4nO1xuXHRcdHN0ciArPVxuXHRcdFx0YDxicj5pZih0YWxrKXske2VkaXRPbGRpZFN0cn18PDxuZXd8c2hvcnRjdXQ9Kz4+YCArXG5cdFx0XHRgKiR7aGlzdG9yeXN0cn0qJHt3YXRjaHN0cn0qYCArXG5cdFx0XHQnPGI+PDxhcnRpY2xlfHNob3J0Y3V0PWE+PjwvYj58PDxlZGl0QXJ0aWNsZXxlZGl0Pj4nICtcblx0XHRcdGB9ZWxzZXske1xuXHRcdFx0XHQvLyBub3QgYSB0YWxrIHBhZ2Vcblx0XHRcdFx0ZWRpdE9sZGlkU3RyXG5cdFx0XHR9KiR7aGlzdG9yeXN0cn0qJHt3YXRjaHN0cn0qYCArXG5cdFx0XHQnPGI+PDx0YWxrfHNob3J0Y3V0PXQ+PjwvYj58PDxlZGl0VGFsa3xlZGl0Pj58PDxuZXdUYWxrfHNob3J0Y3V0PSt8bmV3Pj59Jztcblx0XHQvLyBtaXNjIGxpbmtzXG5cdFx0c3RyICs9ICc8YnI+PDx3aGF0TGlua3NIZXJlfHNob3J0Y3V0PWw+Pio8PHJlbGF0ZWRDaGFuZ2VzfHNob3J0Y3V0PXI+Pic7XG5cdFx0c3RyICs9ICdpZihhZG1pbil7PGJyPn1lbHNleyp9PDxtb3ZlfHNob3J0Y3V0PW0+Pic7XG5cdFx0Ly8gYWRtaW4gbGlua3Ncblx0XHRzdHIgKz1cblx0XHRcdCdpZihhZG1pbil7Kjw8dW5wcm90ZWN0fHVucHJvdGVjdFNob3J0Pj58PDxwcm90ZWN0fHNob3J0Y3V0PXA+PionICtcblx0XHRcdCc8PHVuZGVsZXRlfHVuZGVsZXRlU2hvcnQ+Pnw8PGRlbGV0ZXxzaG9ydGN1dD1kPj59Jztcblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChzdHIsIHguYXJ0aWNsZSwgeC5wYXJhbXMpO1xuXHR9O1xuXHRwZy5zdHJ1Y3R1cmVzLm5vc3RhbGdpYS5wb3B1cFJlZGlyVG9wTGlua3MgPSBwZy5zdHJ1Y3R1cmVzLm5vc3RhbGdpYS5wb3B1cFRvcExpbmtzO1xuXHQvKiogLS0gZmFuY3kgLS0gKi9cblx0Y29weVN0cnVjdHVyZSgnb3JpZ2luYWwnLCAnZmFuY3knKTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFRpdGxlID0gKHgpID0+IHtcblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTCgnPGZvbnQgc2l6ZT0rMD48PG1haW5saW5rPj48L2ZvbnQ+JywgeC5hcnRpY2xlLCB4LnBhcmFtcyk7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBUb3BMaW5rcyA9ICh4KSA9PiB7XG5cdFx0Y29uc3QgaGlzdCA9ICc8PGhpc3Rvcnl8c2hvcnRjdXQ9aHxoaXN0Pj58PDxsYXN0RWRpdHxzaG9ydGN1dD0vfGxhc3Q+Pnw8PGVkaXRvcnN8c2hvcnRjdXQ9RXxlZHM+Pic7XG5cdFx0Y29uc3Qgd2F0Y2ggPSAnPDx1bndhdGNofHVud2F0Y2hTaG9ydD4+fDw8d2F0Y2h8c2hvcnRjdXQ9d3x3YXRjaFRoaW5neT4+Jztcblx0XHRjb25zdCBtb3ZlID0gJzw8bW92ZXxzaG9ydGN1dD1tfG1vdmU+Pic7XG5cdFx0cmV0dXJuIG5hdmxpbmtTdHJpbmdUb0hUTUwoXG5cdFx0XHQnaWYodGFsayl7JyArXG5cdFx0XHRcdGA8PGVkaXR8c2hvcnRjdXQ9ZT4+fDw8bmV3fHNob3J0Y3V0PSt8Kz4+KiR7aGlzdH0qYCArXG5cdFx0XHRcdCc8PGFydGljbGV8c2hvcnRjdXQ9YT4+fDw8ZWRpdEFydGljbGV8ZWRpdD4+JyArXG5cdFx0XHRcdGAqJHt3YXRjaH0qJHttb3ZlfX1lbHNlezw8ZWRpdHxzaG9ydGN1dD1lPj4qJHtoaXN0fSo8PHRhbGt8c2hvcnRjdXQ9dHw+Pnw8PGVkaXRUYWxrfGVkaXQ+Pnw8PG5ld1RhbGt8c2hvcnRjdXQ9K3xuZXc+PmAgK1xuXHRcdFx0XHRgKiR7d2F0Y2h9KiR7bW92ZX19PGJyPmAsXG5cdFx0XHR4LmFydGljbGUsXG5cdFx0XHR4LnBhcmFtc1xuXHRcdCk7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBPdGhlckxpbmtzID0gKHgpID0+IHtcblx0XHRjb25zdCBhZG1pbiA9XG5cdFx0XHQnPDx1bnByb3RlY3R8dW5wcm90ZWN0U2hvcnQ+Pnw8PHByb3RlY3R8c2hvcnRjdXQ9cD4+Kjw8dW5kZWxldGV8dW5kZWxldGVTaG9ydD4+fDw8ZGVsZXRlfHNob3J0Y3V0PWR8ZGVsPj4nO1xuXHRcdGxldCB1c2VyID0gJzw8Y29udHJpYnN8c2hvcnRjdXQ9Yz4+aWYod2lraW1lZGlhKXt8PDxjb3VudHxzaG9ydGN1dD0jfCM+Pn0nO1xuXHRcdHVzZXIgKz0gYGlmKGlwdXNlcil7fDw8YXJpbj4+fWVsc2V7Kjw8ZW1haWx8c2hvcnRjdXQ9RXwke3BvcHVwU3RyaW5nKFxuXHRcdFx0J2VtYWlsJ1xuXHRcdCl9Pj59aWYoYWRtaW4peyo8PGJsb2NrfHNob3J0Y3V0PWI+Pn1gO1xuXHRcdGNvbnN0IG5vcm1hbCA9ICc8PHdoYXRMaW5rc0hlcmV8c2hvcnRjdXQ9bHxsaW5rcyBoZXJlPj4qPDxyZWxhdGVkQ2hhbmdlc3xzaG9ydGN1dD1yfHJlbGF0ZWQ+Pic7XG5cdFx0cmV0dXJuIG5hdmxpbmtTdHJpbmdUb0hUTUwoXG5cdFx0XHRgPGJyPmlmKHVzZXIpeyR7dXNlcn0qfWlmKGFkbWluKXske2FkbWlufWlmKHVzZXIpezxicj59ZWxzZXsqfX0ke25vcm1hbH1gLFxuXHRcdFx0eC5hcnRpY2xlLFxuXHRcdFx0eC5wYXJhbXNcblx0XHQpO1xuXHR9O1xuXHRwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwUmVkaXJUaXRsZSA9IHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBUaXRsZTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFJlZGlyVG9wTGlua3MgPSBwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwVG9wTGlua3M7XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBSZWRpck90aGVyTGlua3MgPSBwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwT3RoZXJMaW5rcztcblx0LyoqIC0tIGZhbmN5MiAtLSAqL1xuXHQvLyBoYWNrIGZvciBNYWNHeXZlck1hZ2ljXG5cdGNvcHlTdHJ1Y3R1cmUoJ2ZhbmN5JywgJ2ZhbmN5MicpO1xuXHRwZy5zdHJ1Y3R1cmVzLmZhbmN5Mi5wb3B1cFRvcExpbmtzID0gLy8gaGFjayBvdXQgdGhlIDxicj4gYXQgdGhlIGVuZCBhbmQgcHV0IG9uZSBhdCB0aGUgYmVnaW5uaW5nXG5cdFx0KHgpID0+IHtcblx0XHRcdHJldHVybiBgPGJyPiR7cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFRvcExpbmtzKHgpLnJlcGxhY2UoLzxicj4kL2ksICcnKX1gO1xuXHRcdH07XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kyLnBvcHVwTGF5b3V0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHQncG9wdXBFcnJvcicsXG5cdFx0XHQncG9wdXBJbWFnZScsXG5cdFx0XHQncG9wdXBUaXRsZScsXG5cdFx0XHQncG9wdXBVc2VyRGF0YScsXG5cdFx0XHQncG9wdXBEYXRhJyxcblx0XHRcdCdwb3B1cFRvcExpbmtzJyxcblx0XHRcdCdwb3B1cE90aGVyTGlua3MnLFxuXHRcdFx0J3BvcHVwUmVkaXInLFxuXHRcdFx0Wydwb3B1cFdhcm5SZWRpcicsICdwb3B1cFJlZGlyVG9wTGlua3MnLCAncG9wdXBSZWRpclRpdGxlJywgJ3BvcHVwUmVkaXJEYXRhJywgJ3BvcHVwUmVkaXJPdGhlckxpbmtzJ10sXG5cdFx0XHQncG9wdXBNaXNjVG9vbHMnLFxuXHRcdFx0Wydwb3B1cFJlZGxpbmsnXSxcblx0XHRcdCdwb3B1cFByZVByZXZpZXdTZXAnLFxuXHRcdFx0J3BvcHVwUHJldmlldycsXG5cdFx0XHQncG9wdXBTZWNvbmRQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cFByZXZpZXdNb3JlJyxcblx0XHRcdCdwb3B1cFBvc3RQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cEZpeERhYicsXG5cdFx0XTtcblx0fTtcblx0LyoqIC0tIG1lbnVzIC0tICovXG5cdGNvcHlTdHJ1Y3R1cmUoJ29yaWdpbmFsJywgJ21lbnVzJyk7XG5cdHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBMYXlvdXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdCdwb3B1cEVycm9yJyxcblx0XHRcdCdwb3B1cEltYWdlJyxcblx0XHRcdCdwb3B1cFRvcExpbmtzJyxcblx0XHRcdCdwb3B1cFRpdGxlJyxcblx0XHRcdCdwb3B1cE90aGVyTGlua3MnLFxuXHRcdFx0J3BvcHVwUmVkaXInLFxuXHRcdFx0Wydwb3B1cFdhcm5SZWRpcicsICdwb3B1cFJlZGlyVG9wTGlua3MnLCAncG9wdXBSZWRpclRpdGxlJywgJ3BvcHVwUmVkaXJEYXRhJywgJ3BvcHVwUmVkaXJPdGhlckxpbmtzJ10sXG5cdFx0XHQncG9wdXBVc2VyRGF0YScsXG5cdFx0XHQncG9wdXBEYXRhJyxcblx0XHRcdCdwb3B1cE1pc2NUb29scycsXG5cdFx0XHRbJ3BvcHVwUmVkbGluayddLFxuXHRcdFx0J3BvcHVwUHJlUHJldmlld1NlcCcsXG5cdFx0XHQncG9wdXBQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cFNlY29uZFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwUHJldmlld01vcmUnLFxuXHRcdFx0J3BvcHVwUG9zdFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwRml4RGFiJyxcblx0XHRdO1xuXHR9O1xuXHRwZy5zdHJ1Y3R1cmVzLm1lbnVzLnBvcHVwVG9wTGlua3MgPSAoeCwgc2hvcnRlcikgPT4ge1xuXHRcdC8vIEZJWE1FIG1heWJlIHRoaXMgc3R1ZmYgc2hvdWxkIGJlIGNhY2hlZFxuXHRcdGNvbnN0IHMgPSBbXTtcblx0XHRjb25zdCBkcm9wZGl2ID0gJzxkaXYgY2xhc3M9XCJwb3B1cF9kcm9wXCI+Jztcblx0XHRjb25zdCBlbmRkaXYgPSAnPC9kaXY+Jztcblx0XHRsZXQgaGlzdCA9ICc8PGhpc3Rvcnl8c2hvcnRjdXQ9aD4+Jztcblx0XHRpZiAoIXNob3J0ZXIpIHtcblx0XHRcdGhpc3QgPSBgPG1lbnVyb3c+JHtoaXN0fXw8PGhpc3RvcnlmZWVkfHJzcz4+fDw8ZWRpdG9yc3xzaG9ydGN1dD1FPj48L21lbnVyb3c+YDtcblx0XHR9XG5cdFx0Y29uc3QgbGFzdGVkaXQgPSAnPDxsYXN0RWRpdHxzaG9ydGN1dD0vfHNob3cgbGFzdCBlZGl0Pj4nO1xuXHRcdGNvbnN0IHRoYW5rID0gJ2lmKGRpZmYpezw8dGhhbmt8c2VuZCB0aGFua3M+Pn0nO1xuXHRcdGNvbnN0IGpzSGlzdG9yeSA9ICc8PGxhc3RDb250cmlifGxhc3Qgc2V0IG9mIGVkaXRzPj48PHNpbmNlTWV8Y2hhbmdlcyBzaW5jZSBtaW5lPj4nO1xuXHRcdGNvbnN0IGxpbmtzaGVyZSA9ICc8PHdoYXRMaW5rc0hlcmV8c2hvcnRjdXQ9bHx3aGF0IGxpbmtzIGhlcmU+Pic7XG5cdFx0Y29uc3QgcmVsYXRlZCA9ICc8PHJlbGF0ZWRDaGFuZ2VzfHNob3J0Y3V0PXJ8cmVsYXRlZCBjaGFuZ2VzPj4nO1xuXHRcdGNvbnN0IHNlYXJjaCA9ICc8bWVudXJvdz48PHNlYXJjaHxzaG9ydGN1dD1zPj48L21lbnVyb3c+Jztcblx0XHRjb25zdCB3YXRjaCA9ICc8bWVudXJvdz48PHVud2F0Y2h8dW53YXRjaFNob3J0Pj58PDx3YXRjaHxzaG9ydGN1dD13fHdhdGNoVGhpbmd5Pj48L21lbnVyb3c+Jztcblx0XHRjb25zdCBwcm90ZWN0ID0gJzxtZW51cm93Pjw8dW5wcm90ZWN0fHVucHJvdGVjdFNob3J0Pj58PDxwcm90ZWN0fHNob3J0Y3V0PXA+Pnw8PHByb3RlY3Rsb2d8bG9nPj48L21lbnVyb3c+Jztcblx0XHRjb25zdCBkZWwgPSAnPG1lbnVyb3c+PDx1bmRlbGV0ZXx1bmRlbGV0ZVNob3J0Pj58PDxkZWxldGV8c2hvcnRjdXQ9ZD4+fDw8ZGVsZXRlbG9nfGxvZz4+PC9tZW51cm93Pic7XG5cdFx0Y29uc3QgbW92ZSA9ICc8PG1vdmV8c2hvcnRjdXQ9bXxtb3ZlIHBhZ2U+Pic7XG5cdFx0Y29uc3QgbnVsbFB1cmdlID0gJzxtZW51cm93Pjw8bnVsbEVkaXR8c2hvcnRjdXQ9bnxudWxsIGVkaXQ+Pnw8PHB1cmdlfHNob3J0Y3V0PVA+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IHZpZXdPcHRpb25zID0gJzxtZW51cm93Pjw8dmlld3xzaG9ydGN1dD12Pj58PDxyZW5kZXJ8c2hvcnRjdXQ9Uz4+fDw8cmF3Pj48L21lbnVyb3c+Jztcblx0XHRjb25zdCBlZGl0Um93ID1cblx0XHRcdCdpZihvbGRpZCl7JyArXG5cdFx0XHQnPG1lbnVyb3c+PDxlZGl0fHNob3J0Y3V0PWU+Pnw8PGVkaXRPbGR8c2hvcnRjdXQ9ZXx0aGlzJm5ic3A7cmV2aXNpb24+PjwvbWVudXJvdz4nICtcblx0XHRcdCc8bWVudXJvdz48PHJldmVydHxzaG9ydGN1dD12Pj58PDx1bmRvPj48L21lbnVyb3c+JyArXG5cdFx0XHQnfWVsc2V7PDxlZGl0fHNob3J0Y3V0PWU+Pn0nO1xuXHRcdGNvbnN0IG1hcmtQYXRyb2xsZWQgPSAnaWYocmNpZCl7PDxtYXJrcGF0cm9sbGVkfG1hcmsgcGF0cm9sbGVkPj59Jztcblx0XHRjb25zdCBuZXdUb3BpYyA9ICdpZih0YWxrKXs8PG5ld3xzaG9ydGN1dD0rfG5ldyB0b3BpYz4+fSc7XG5cdFx0Y29uc3QgcHJvdGVjdERlbGV0ZSA9IGBpZihhZG1pbil7JHtwcm90ZWN0fSR7ZGVsfX1gO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cEFjdGlvbnNNZW51JykpIHtcblx0XHRcdHMucHVzaChgPDxtYWlubGluaz4+KiR7ZHJvcGRpdn0ke21lbnVUaXRsZSgnYWN0aW9ucycpfWApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzLnB1c2goYCR7ZHJvcGRpdn08PG1haW5saW5rPj5gKTtcblx0XHR9XG5cdFx0cy5wdXNoKCc8bWVudT4nLCBlZGl0Um93ICsgbWFya1BhdHJvbGxlZCArIG5ld1RvcGljICsgaGlzdCArIGxhc3RlZGl0ICsgdGhhbmspO1xuXHRcdGlmICghc2hvcnRlcikge1xuXHRcdFx0cy5wdXNoKGpzSGlzdG9yeSk7XG5cdFx0fVxuXHRcdHMucHVzaChtb3ZlICsgbGlua3NoZXJlICsgcmVsYXRlZCk7XG5cdFx0aWYgKCFzaG9ydGVyKSB7XG5cdFx0XHRzLnB1c2gobnVsbFB1cmdlICsgc2VhcmNoKTtcblx0XHR9XG5cdFx0aWYgKCFzaG9ydGVyKSB7XG5cdFx0XHRzLnB1c2godmlld09wdGlvbnMpO1xuXHRcdH1cblx0XHRzLnB1c2goXG5cdFx0XHRgPGhyPiR7d2F0Y2h9JHtwcm90ZWN0RGVsZXRlfWAsXG5cdFx0XHQnPGhyPicgK1xuXHRcdFx0XHQnaWYodGFsayl7PDxhcnRpY2xlfHNob3J0Y3V0PWF8dmlldyBhcnRpY2xlPj48PGVkaXRBcnRpY2xlfGVkaXQgYXJ0aWNsZT4+fScgK1xuXHRcdFx0XHQnZWxzZXs8PHRhbGt8c2hvcnRjdXQ9dHx0YWxrIHBhZ2U+Pjw8ZWRpdFRhbGt8ZWRpdCB0YWxrPj4nICtcblx0XHRcdFx0YDw8bmV3VGFsa3xzaG9ydGN1dD0rfG5ldyB0b3BpYz4+fTwvbWVudT4ke2VuZGRpdn1gXG5cdFx0KTtcblx0XHQvLyB1c2VyIG1lbnUgc3RhcnRzIGhlcmVcblx0XHRjb25zdCBlbWFpbCA9ICc8PGVtYWlsfHNob3J0Y3V0PUV8ZW1haWwgdXNlcj4+Jztcblx0XHRjb25zdCBjb250cmlicyA9XG5cdFx0XHQnaWYod2lraW1lZGlhKXs8bWVudXJvdz59PDxjb250cmlic3xzaG9ydGN1dD1jfGNvbnRyaWJ1dGlvbnM+PmlmKHdpa2ltZWRpYSl7PC9tZW51cm93Pn0nICtcblx0XHRcdCdpZihhZG1pbil7PG1lbnVyb3c+PDxkZWxldGVkQ29udHJpYnM+PjwvbWVudXJvdz59Jztcblx0XHRzLnB1c2goXG5cdFx0XHRgaWYodXNlcil7KiR7ZHJvcGRpdn0ke21lbnVUaXRsZSgndXNlcicpfWAsXG5cdFx0XHQnPG1lbnU+Jyxcblx0XHRcdCc8bWVudXJvdz48PHVzZXJQYWdlfHNob3J0Y3V0PXV8dXNlciZuYnNwO3BhZ2U+Pnw8PHVzZXJTcGFjZXxzcGFjZT4+PC9tZW51cm93PicsXG5cdFx0XHQnPDx1c2VyVGFsa3xzaG9ydGN1dD10fHVzZXIgdGFsaz4+PDxlZGl0VXNlclRhbGt8ZWRpdCB1c2VyIHRhbGs+PicgK1xuXHRcdFx0XHQnPDxuZXdVc2VyVGFsa3xzaG9ydGN1dD0rfGxlYXZlIGNvbW1lbnQ+Pidcblx0XHQpO1xuXHRcdGlmIChzaG9ydGVyKSB7XG5cdFx0XHRzLnB1c2goYGlmKGlwdXNlcil7fWVsc2V7JHtlbWFpbH19YCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHMucHVzaChgaWYoaXB1c2VyKXs8PGFyaW4+Pn1lbHNleyR7ZW1haWx9fWApO1xuXHRcdH1cblx0XHRzLnB1c2goXG5cdFx0XHRgPGhyPiR7Y29udHJpYnN9PDx1c2VybG9nfHNob3J0Y3V0PUx8dXNlciBsb2c+PmAsXG5cdFx0XHQnaWYod2lraW1lZGlhKXs8PGNvdW50fHNob3J0Y3V0PSN8ZWRpdCBjb3VudGVyPj59Jyxcblx0XHRcdCdpZihhZG1pbil7PG1lbnVyb3c+PDx1bmJsb2NrfHVuYmxvY2tTaG9ydD4+fDw8YmxvY2t8c2hvcnRjdXQ9YnxibG9jayB1c2VyPj48L21lbnVyb3c+fScsXG5cdFx0XHQnPDxibG9ja2xvZ3xzaG9ydGN1dD1CfGJsb2NrIGxvZz4+Jyxcblx0XHRcdGA8L21lbnU+JHtlbmRkaXZ9fWBcblx0XHQpO1xuXHRcdC8vIHBvcHVwcyBtZW51IHN0YXJ0cyBoZXJlXG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwU2V0dXBNZW51JykgJiYgIXgubmF2cG9wLmhhc1BvcHVwTWVudSAvKiBGSVhNRTogaGFjayAqLykge1xuXHRcdFx0eC5uYXZwb3AuaGFzUG9wdXBNZW51ID0gdHJ1ZTtcblx0XHRcdHMucHVzaChcblx0XHRcdFx0YCoke2Ryb3BkaXZ9JHttZW51VGl0bGUoJ3BvcHVwc01lbnUnKX08bWVudT5gLFxuXHRcdFx0XHQnPDx0b2dnbGVQcmV2aWV3c3x0b2dnbGUgcHJldmlld3M+PicsXG5cdFx0XHRcdCc8PHB1cmdlUG9wdXBzfHJlc2V0Pj4nLFxuXHRcdFx0XHQnPDxkaXNhYmxlUG9wdXBzfGRpc2FibGU+PicsXG5cdFx0XHRcdGA8L21lbnU+JHtlbmRkaXZ9YFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIG5hdmxpbmtTdHJpbmdUb0hUTUwocy5qb2luKCcnKSwgeC5hcnRpY2xlLCB4LnBhcmFtcyk7XG5cdH07XG5cdGNvbnN0IG1lbnVUaXRsZSA9IChzKSA9PiB7XG5cdFx0cmV0dXJuIGA8YSBocmVmPVwiI1wiIG5vUG9wdXA9MT4ke3BvcHVwU3RyaW5nKHMpfTwvYT5gO1xuXHR9O1xuXHRwZy5zdHJ1Y3R1cmVzLm1lbnVzLnBvcHVwUmVkaXJUaXRsZSA9IHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBUaXRsZTtcblx0cGcuc3RydWN0dXJlcy5tZW51cy5wb3B1cFJlZGlyVG9wTGlua3MgPSBwZy5zdHJ1Y3R1cmVzLm1lbnVzLnBvcHVwVG9wTGlua3M7XG5cdGNvcHlTdHJ1Y3R1cmUoJ21lbnVzJywgJ3Nob3J0bWVudXMnKTtcblx0cGcuc3RydWN0dXJlcy5zaG9ydG1lbnVzLnBvcHVwVG9wTGlua3MgPSAoeCkgPT4ge1xuXHRcdHJldHVybiBwZy5zdHJ1Y3R1cmVzLm1lbnVzLnBvcHVwVG9wTGlua3MoeCwgdHJ1ZSk7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMuc2hvcnRtZW51cy5wb3B1cFJlZGlyVG9wTGlua3MgPSBwZy5zdHJ1Y3R1cmVzLnNob3J0bWVudXMucG9wdXBUb3BMaW5rcztcblx0cGcuc3RydWN0dXJlcy5saXRlID0ge307XG5cdHBnLnN0cnVjdHVyZXMubGl0ZS5wb3B1cExheW91dCA9ICgpID0+IHtcblx0XHRyZXR1cm4gWydwb3B1cFRpdGxlJywgJ3BvcHVwUHJldmlldyddO1xuXHR9O1xuXHRwZy5zdHJ1Y3R1cmVzLmxpdGUucG9wdXBUaXRsZSA9ICh4KSA9PiB7XG5cdFx0bG9nKGAke3guYXJ0aWNsZX06IHN0cnVjdHVyZXMubGl0ZS5wb3B1cFRpdGxlYCk7XG5cdFx0Ly8gcmV0dXJuIG5hdmxpbmtTdHJpbmdUb0hUTUwoJzxiPjw8bWFpbmxpbms+PjwvYj4nLHguYXJ0aWNsZSx4LnBhcmFtcyk7XG5cdFx0cmV0dXJuIGA8ZGl2PjxzcGFuIGNsYXNzPVwicG9wdXBfbWFpbmxpbmtcIj48Yj4ke3guYXJ0aWNsZS50b1N0cmluZygpfTwvYj48L3NwYW4+PC9kaXY+YDtcblx0fTtcblx0Ly8gRU5ERklMRTogc3RydWN0dXJlcy5qc1xuXHQvLyBTVEFSVEZJTEU6IGF1dG9lZGl0LmpzXG5cdGNvbnN0IHN1YnN0aXR1dGUgPSAoZGF0YSwgY21kQm9keSkgPT4ge1xuXHRcdC8vIG13Lm5vdGlmeShgc3ViXFxuZnJvbTogJHtjbWRCb2R5LmZyb219XFxudG86ICR7Y21kQm9keS50b31cXG5mbGFnczogJHtjbWRCb2R5LmZsYWdzfWAsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRjb25zdCBmcm9tUmUgPSBuZXcgUmVnRXhwKGNtZEJvZHkuZnJvbSwgY21kQm9keS5mbGFncyk7XG5cdFx0cmV0dXJuIGRhdGEucmVwbGFjZShmcm9tUmUsIGNtZEJvZHkudG8pO1xuXHR9O1xuXHRjb25zdCBleGVjQ21kcyA9IChkYXRhLCBjbWRMaXN0KSA9PiB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGNtZExpc3QpIHtcblx0XHRcdGRhdGEgPSBlbGVtZW50LmFjdGlvbihkYXRhLCBlbGVtZW50KTtcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH07XG5cdGNvbnN0IHBhcnNlQ21kID0gZnVuY3Rpb24gcGFyc2VDbWQoc3RyKSB7XG5cdFx0Ly8gcmV0dXJucyBhIGxpc3Qgb2YgY29tbWFuZHNcblx0XHRpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0XHRsZXQgcCA9IGZhbHNlO1xuXHRcdHN3aXRjaCAoc3RyLmNoYXJBdCgwKSkge1xuXHRcdFx0Y2FzZSAncyc6XG5cdFx0XHRcdHAgPSBwYXJzZVN1YnN0aXR1dGUoc3RyKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChwKSB7XG5cdFx0XHRyZXR1cm4gW3AsIHBhcnNlQ21kKHAucmVtYWluZGVyKV07XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0Ly8gRklYTUU6IE9ubHkgdXNlZCBvbmNlIGhlcmUsIGNvbmZ1c2luZyB3aXRoIG5hdGl2ZSAoYW5kIG1vcmUgd2lkZWx5LXVzZWQpIHVuZXNjYXBlLCBzaG91bGQgcHJvYmFibHkgYmUgcmVwbGFjZWRcblx0Ly8gVGhlbiBhZ2FpbiwgdW5lc2NhcGUgaXMgc2VtaS1zb2Z0LWRlcHJlY2F0ZWQsIHNvIHdlIHNob3VsZCBsb29rIGludG8gcmVwbGFjaW5nIHRoYXQgdG9vXG5cdGNvbnN0IHVuRXNjYXBlID0gKHN0ciwgc2VwKSA9PiB7XG5cdFx0cmV0dXJuIHN0clxuXHRcdFx0LnNwbGl0KCdcXFxcXFxcXCcpXG5cdFx0XHQuam9pbignXFxcXCcpXG5cdFx0XHQuc3BsaXQoYFxcXFwke3NlcH1gKVxuXHRcdFx0LmpvaW4oc2VwKVxuXHRcdFx0LnNwbGl0KFN0cmluZy5yYXdgXFxuYClcblx0XHRcdC5qb2luKCdcXG4nKTtcblx0fTtcblx0Y29uc3QgcGFyc2VTdWJzdGl0dXRlID0gKHN0cikgPT4ge1xuXHRcdC8vIHRha2VzIGEgc3RyaW5nIGxpa2Ugcy9hL2IvZmxhZ3M7b3RoZXJjbWRzIGFuZCBwYXJzZXMgaXRcblx0XHRsZXQgZnJvbTtcblx0XHRsZXQgdG87XG5cdFx0bGV0IGZsYWdzO1xuXHRcdGxldCB0bXA7XG5cdFx0aWYgKHN0ci5sZW5ndGggPCA0KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IHNlcCA9IHN0ci5jaGFyQXQoMSk7XG5cdFx0c3RyID0gc3RyLnNsaWNlKDIpO1xuXHRcdHRtcCA9IHNraXBPdmVyKHN0ciwgc2VwKTtcblx0XHRpZiAodG1wKSB7XG5cdFx0XHRmcm9tID0gdG1wLnNlZ21lbnQ7XG5cdFx0XHRzdHIgPSB0bXAucmVtYWluZGVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRtcCA9IHNraXBPdmVyKHN0ciwgc2VwKTtcblx0XHRpZiAodG1wKSB7XG5cdFx0XHR0byA9IHRtcC5zZWdtZW50O1xuXHRcdFx0c3RyID0gdG1wLnJlbWFpbmRlcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRmbGFncyA9ICcnO1xuXHRcdGlmIChzdHIubGVuZ3RoID4gMCkge1xuXHRcdFx0dG1wID0gc2tpcE92ZXIoc3RyLCAnOycpIHx8IHNraXBUb0VuZChzdHIsICc7Jyk7XG5cdFx0XHRpZiAodG1wKSB7XG5cdFx0XHRcdGZsYWdzID0gdG1wLnNlZ21lbnQ7XG5cdFx0XHRcdHN0ciA9IHRtcC5yZW1haW5kZXI7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRhY3Rpb246IHN1YnN0aXR1dGUsXG5cdFx0XHRmcm9tLFxuXHRcdFx0dG8sXG5cdFx0XHRmbGFncyxcblx0XHRcdHJlbWFpbmRlcjogc3RyLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IHNraXBPdmVyID0gKHN0ciwgc2VwKSA9PiB7XG5cdFx0Y29uc3QgZW5kU2VnbWVudCA9IGZpbmROZXh0KHN0ciwgc2VwKTtcblx0XHRpZiAoZW5kU2VnbWVudCA8IDApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3Qgc2VnbWVudCA9IHVuRXNjYXBlKHN0ci5zbGljZSgwLCBNYXRoLm1heCgwLCBlbmRTZWdtZW50KSksIHNlcCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlZ21lbnQsXG5cdFx0XHRyZW1haW5kZXI6IHN0ci5zbGljZShNYXRoLm1heCgwLCBlbmRTZWdtZW50ICsgMSkpLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IHNraXBUb0VuZCA9IChzdHIsIF9zZXApID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VnbWVudDogc3RyLFxuXHRcdFx0cmVtYWluZGVyOiAnJyxcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBmaW5kTmV4dCA9IChzdHIsIGNoKSA9PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChzdHIuY2hhckF0KGkpID09PSAnXFxcXCcpIHtcblx0XHRcdFx0aSArPSAyO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHN0ci5jaGFyQXQoaSkgPT09IGNoKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gLTE7XG5cdH07XG5cdGNvbnN0IHNldENoZWNrYm94ID0gKHBhcmFtLCBib3gpID0+IHtcblx0XHRjb25zdCB2YWwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUocGFyYW0pO1xuXHRcdGlmICh2YWwpIHtcblx0XHRcdHN3aXRjaCAodmFsKSB7XG5cdFx0XHRcdGNhc2UgJzEnOlxuXHRcdFx0XHRjYXNlICd5ZXMnOlxuXHRcdFx0XHRjYXNlICd0cnVlJzpcblx0XHRcdFx0XHRib3guY2hlY2tlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJzAnOlxuXHRcdFx0XHRjYXNlICdubyc6XG5cdFx0XHRcdGNhc2UgJ2ZhbHNlJzpcblx0XHRcdFx0XHRib3guY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgYXV0b0VkaXQgPSBmdW5jdGlvbiBhdXRvRWRpdCgpIHtcblx0XHRzZXR1cFBvcHVwcygoKSA9PiB7XG5cdFx0XHRpZiAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvaW1wbCcpICE9PSBwb3B1cFN0cmluZygnYXV0b2VkaXRfdmVyc2lvbicpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2F1dG93YXRjaGxpc3QnKSAmJiBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2FjdG9rZW4nKSA9PT0gYXV0b0NsaWNrVG9rZW4oKSkge1xuXHRcdFx0XHRwZy5mbi5tb2RpZnlXYXRjaGxpc3QobXcudXRpbC5nZXRQYXJhbVZhbHVlKCd0aXRsZScpLCBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2FjdGlvbicpKTtcblx0XHRcdH1cblx0XHRcdGlmICghZG9jdW1lbnQuZWRpdGZvcm0pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGF1dG9FZGl0LmFscmVhZHlSYW4pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0YXV0b0VkaXQuYWxyZWFkeVJhbiA9IHRydWU7XG5cdFx0XHRjb25zdCBjbWRTdHJpbmcgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2F1dG9lZGl0Jyk7XG5cdFx0XHRpZiAoY21kU3RyaW5nKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgZWRpdGJveCA9IGRvY3VtZW50LmVkaXRmb3JtLndwVGV4dGJveDE7XG5cdFx0XHRcdFx0Y29uc3QgY21kTGlzdCA9IHBhcnNlQ21kKGNtZFN0cmluZyk7XG5cdFx0XHRcdFx0Y29uc3QgaW5wdXQgPSBlZGl0Ym94LnZhbHVlO1xuXHRcdFx0XHRcdGNvbnN0IG91dHB1dCA9IGV4ZWNDbWRzKGlucHV0LCBjbWRMaXN0KTtcblx0XHRcdFx0XHRlZGl0Ym94LnZhbHVlID0gb3V0cHV0O1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNldENoZWNrYm94KCdhdXRvbWlub3InLCBkb2N1bWVudC5lZGl0Zm9ybS53cE1pbm9yZWRpdCk7XG5cdFx0XHRzZXRDaGVja2JveCgnYXV0b3dhdGNoJywgZG9jdW1lbnQuZWRpdGZvcm0ud3BXYXRjaHRoaXMpO1xuXHRcdFx0Y29uc3QgcnZpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3J2Jyk7XG5cdFx0XHRpZiAocnZpZCkge1xuXHRcdFx0XHRjb25zdCB1cmwgPSBgJHtwZy53aWtpLmFwaXdpa2liYXNlfT9hY3Rpb249cXVlcnkmZm9ybWF0PWpzb24mZm9ybWF0dmVyc2lvbj0yJnByb3A9cmV2aXNpb25zJnJldmlkcz0ke3J2aWR9YDtcblx0XHRcdFx0c3RhcnREb3dubG9hZCh1cmwsIG51bGwsIGF1dG9FZGl0Mik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhdXRvRWRpdDIoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblx0Y29uc3QgYXV0b0VkaXQyID0gKGQpID0+IHtcblx0XHRsZXQgc3VtbWFyeSA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3N1bW1hcnknKTtcblx0XHRsZXQgc3VtbWFyeXByb21wdCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3N1bW1hcnlwcm9tcHQnKTtcblx0XHRsZXQgc3VtbWFyeW5vdGljZSA9ICcnO1xuXHRcdGlmIChkICYmIGQuZGF0YSAmJiBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2F1dG9ydicpKSB7XG5cdFx0XHRjb25zdCBzID0gZ2V0UnZTdW1tYXJ5KHN1bW1hcnksIGQuZGF0YSk7XG5cdFx0XHRpZiAocyA9PT0gZmFsc2UpIHtcblx0XHRcdFx0c3VtbWFyeXByb21wdCA9IHRydWU7XG5cdFx0XHRcdHN1bW1hcnlub3RpY2UgPSBwb3B1cFN0cmluZygnRmFpbGVkIHRvIGdldCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgcGxlYXNlIGVkaXQgbWFudWFsbHkuXFxuXFxuJyk7XG5cdFx0XHRcdHN1bW1hcnkgPSBzaW1wbGVQcmludGYoc3VtbWFyeSwgW213LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3J2JyksICcodW5rbm93biknLCAnKHVua25vd24pJ10pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3VtbWFyeSA9IHM7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChzdW1tYXJ5cHJvbXB0KSB7XG5cdFx0XHRjb25zdCB0eHQgPSBzdW1tYXJ5bm90aWNlICsgcG9wdXBTdHJpbmcoJ0VudGVyIGEgbm9uLWVtcHR5IGVkaXQgc3VtbWFyeSBvciBwcmVzcyBjYW5jZWwgdG8gYWJvcnQnKTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gcHJvbXB0KHR4dCwgc3VtbWFyeSk7XG5cdFx0XHRpZiAocmVzcG9uc2UpIHtcblx0XHRcdFx0c3VtbWFyeSA9IHJlc3BvbnNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoc3VtbWFyeSkge1xuXHRcdFx0ZG9jdW1lbnQuZWRpdGZvcm0ud3BTdW1tYXJ5LnZhbHVlID0gc3VtbWFyeTtcblx0XHR9XG5cdFx0Ly8gQXR0ZW1wdCB0byBhdm9pZCBwb3NzaWJsZSBwcmVtYXR1cmUgY2xpY2tpbmcgb2YgdGhlIHNhdmUgYnV0dG9uXG5cdFx0Ly8gKG1heWJlIGRlbGF5cyBpbiB1cGRhdGVzIHRvIHRoZSBET00gYXJlIHRvIGJsYW1lPz8gb3IgYSByZWQgaGVycmluZylcblx0XHRzZXRUaW1lb3V0KGF1dG9FZGl0MywgMTAwKTtcblx0fTtcblx0Y29uc3QgYXV0b0NsaWNrVG9rZW4gPSAoKSA9PiB7XG5cdFx0cmV0dXJuIG13LnVzZXIuc2Vzc2lvbklkKCk7XG5cdH07XG5cdGNvbnN0IGF1dG9FZGl0MyA9ICgpID0+IHtcblx0XHRpZiAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhY3Rva2VuJykgIT09IGF1dG9DbGlja1Rva2VuKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgYnRuID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvY2xpY2snKTtcblx0XHRpZiAoYnRuKSB7XG5cdFx0XHRpZiAoZG9jdW1lbnQuZWRpdGZvcm0gJiYgZG9jdW1lbnQuZWRpdGZvcm1bYnRuXSkge1xuXHRcdFx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5lZGl0Zm9ybVtidG5dO1xuXHRcdFx0XHRjb25zdCBtc2cgPSB0cHJpbnRmKFxuXHRcdFx0XHRcdCdUaGUgJXMgYnV0dG9uIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgY2xpY2tlZC4gUGxlYXNlIHdhaXQgZm9yIHRoZSBuZXh0IHBhZ2UgdG8gbG9hZC4nLFxuXHRcdFx0XHRcdFtidXR0b24udmFsdWVdXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJhbm5lck1lc3NhZ2UobXNnKTtcblx0XHRcdFx0ZG9jdW1lbnQudGl0bGUgPSBgKCR7ZG9jdW1lbnQudGl0bGV9KWA7XG5cdFx0XHRcdGJ1dHRvbi5jbGljaygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0dHByaW50ZignQ291bGQgbm90IGZpbmQgYnV0dG9uICVzLiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGluIHlvdXIgamF2YXNjcmlwdCBmaWxlLicsIFtidG5dKSxcblx0XHRcdFx0XHR7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IGJhbm5lck1lc3NhZ2UgPSAocykgPT4ge1xuXHRcdGNvbnN0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDEnKTtcblx0XHRpZiAoaGVhZGluZ3MpIHtcblx0XHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZGl2LmlubmVySFRNTCA9IGA8Zm9udCBzaXplPSsxPjxiPiR7cGcuZXNjYXBlUXVvdGVzSFRNTChzKX08L2I+PC9mb250PmA7XG5cdFx0XHRoZWFkaW5nc1swXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXYsIGhlYWRpbmdzWzBdKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGdldFJ2U3VtbWFyeSA9ICh0ZW1wbGF0ZSwganNvbikgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBvID0gZ2V0SnNPYmooanNvbik7XG5cdFx0XHRjb25zdCBbZWRpdF0gPSBhbnlDaGlsZChvLnF1ZXJ5LnBhZ2VzKS5yZXZpc2lvbnM7XG5cdFx0XHRjb25zdCB0aW1lc3RhbXAgPSBlZGl0LnRpbWVzdGFtcFxuXHRcdFx0XHQuc3BsaXQoL1tBLVpdL2cpXG5cdFx0XHRcdC5qb2luKCcgJylcblx0XHRcdFx0LnJlcGxhY2UoL14gKnwgKiQvZywgJycpO1xuXHRcdFx0cmV0dXJuIHNpbXBsZVByaW50Zih0ZW1wbGF0ZSwgW2VkaXQucmV2aWQsIHRpbWVzdGFtcCwgZWRpdC51c2VyaGlkZGVuID8gJyhoaWRkZW4pJyA6IGVkaXQudXNlcl0pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblx0Ly8gRU5ERklMRTogYXV0b2VkaXQuanNcblx0Ly8gU1RBUlRGSUxFOiBkb3dubG9hZGVyLmpzXG5cdC8qKlxuXHQgKiBAZmlsZW92ZXJ2aWV3XG5cdCAqIHtAc291cmNlIERvd25sb2FkZXJ9LCBhIHhtbGh0dHByZXF1ZXN0IHdyYXBwZXIsIGFuZCBoZWxwZXIgZnVuY3Rpb25zLlxuXHQgKi9cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgRG93bmxvYWRlclxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQGNsYXNzIFRoZSBEb3dubG9hZGVyIGNsYXNzLiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyB0byBkb3dubG9hZCBzdHVmZi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIGRvd25sb2FkLiBUaGlzIGNhbiBiZSBvbWl0dGVkIGFuZCBzdXBwbGllZCBsYXRlci5cblx0ICovXG5cdGNsYXNzIERvd25sb2FkZXIge1xuXHRcdGNvbnN0cnVjdG9yKHVybCkge1xuXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0dGhpcy5odHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0XHR9XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSB1cmwgdG8gZG93bmxvYWRcblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy51cmwgPSB1cmw7XG5cdFx0XHQvKipcblx0XHRcdCAqIEEgdW5pdmVyc2FsbHkgdW5pcXVlIElEIG51bWJlclxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGludGVnZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5pZCA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIE1vZGlmaWNhdGlvbiBkYXRlLCB0byBiZSBjdWxsZWQgZnJvbSB0aGUgaW5jb21pbmcgaGVhZGVyc1xuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIERhdGVcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMubGFzdE1vZGlmaWVkID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogV2hhdCB0byBkbyB3aGVuIHRoZSBkb3dubG9hZCBjb21wbGV0ZXMgc3VjY2Vzc2Z1bGx5XG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgRnVuY3Rpb25cblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuY2FsbGJhY2tGdW5jdGlvbiA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIFdoYXQgdG8gZG8gb24gZmFpbHVyZVxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIEZ1bmN0aW9uXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLm9uRmFpbHVyZSA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIEZsYWcgc2V0IG9uIDxjb2RlPmFib3J0PC9jb2RlPlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5hYm9ydGVkID0gZmFsc2U7XG5cdFx0XHQvKipcblx0XHRcdCAqIEhUVFAgbWV0aG9kLiBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjOS5odG1sIGZvclxuXHRcdFx0ICogcG9zc2liaWxpdGllcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5tZXRob2QgPSAnR0VUJztcblx0XHRcdC8qKlxuXHRcdFx0ICogQXN5bmMgZmxhZy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuYXN5bmMgPSB0cnVlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTdWJtaXRzIHRoZSBodHRwIHJlcXVlc3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IHhcblx0XHQgKi9cblx0XHRzZW5kKHgpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5zZW5kKHgpO1xuXHRcdH1cblx0XHQvKiBBYm9ydHMgdGhlIGRvd25sb2FkLCBzZXR0aW5nIHRoZSA8Y29kZT5hYm9ydGVkPC9jb2RlPiBmaWVsZCB0byB0cnVlLiAqL1xuXHRcdGFib3J0KCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmFib3J0ZWQgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5hYm9ydCgpO1xuXHRcdH1cblx0XHQvKiogUmV0dXJucyB0aGUgZG93bmxvYWRlZCBkYXRhLiAqL1xuXHRcdGdldERhdGEoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLmh0dHAucmVzcG9uc2VUZXh0O1xuXHRcdH1cblx0XHQvKiogUHJlcGFyZXMgdGhlIGRvd25sb2FkLiAqL1xuXHRcdHNldFRhcmdldCgpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5odHRwLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0aGlzLmFzeW5jKTtcblx0XHRcdHRoaXMuaHR0cC5zZXRSZXF1ZXN0SGVhZGVyKCdBcGktVXNlci1BZ2VudCcsIHBnLmFwaS51c2VyQWdlbnQpO1xuXHRcdH1cblx0XHQvKiogR2V0cyB0aGUgc3RhdGUgb2YgdGhlIGRvd25sb2FkLiAqL1xuXHRcdGdldFJlYWR5U3RhdGUoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLmh0dHAucmVhZHlTdGF0ZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU3RhcnRzIHRoZSBkb3dubG9hZC5cblx0XHQgKiBOb3RlIHRoYXQgc2V0VGFyZ2V0IHtAc291cmNlIERvd25sb2FkZXIjc2V0VGFyZ2V0fSBtdXN0IGJlIHJ1biBmaXJzdFxuXHRcdCAqL1xuXHRcdHN0YXJ0KCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3NbdGhpcy5pZF0gPSBzZWxmO1xuXHRcdFx0dGhpcy5odHRwLnNlbmQobnVsbCk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEdldHMgdGhlICdMYXN0LU1vZGlmaWVkJyBkYXRlIGZyb20gdGhlIGRvd25sb2FkIGhlYWRlcnMuXG5cdFx0ICogU2hvdWxkIGJlIHJ1biBhZnRlciB0aGUgZG93bmxvYWQgY29tcGxldGVzLlxuXHRcdCAqIFJldHVybnMgPGNvZGU+bnVsbDwvY29kZT4gb24gZmFpbHVyZS5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm4ge0RhdGV9XG5cdFx0ICovXG5cdFx0Z2V0TGFzdE1vZGlmaWVkRGF0ZSgpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGxhc3Rtb2Q7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRsYXN0bW9kID0gdGhpcy5odHRwLmdldFJlc3BvbnNlSGVhZGVyKCdMYXN0LU1vZGlmaWVkJyk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdH1cblx0XHRcdGlmIChsYXN0bW9kKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgRGF0ZShsYXN0bW9kKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IGYgY2FsbGJhY2sgZnVuY3Rpb24sIGNhbGxlZCBhcyA8Y29kZT5mKHRoaXMpPC9jb2RlPiBvbiBzdWNjZXNzXG5cdFx0ICovXG5cdFx0c2V0Q2FsbGJhY2soZikge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5odHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGY7XG5cdFx0fVxuXHRcdGdldFN0YXR1cygpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5zdGF0dXM7XG5cdFx0fVxuXHR9XG5cdG5ldyBEb3dubG9hZGVyKCk7XG5cdHBnLm1pc2MuZG93bmxvYWRzSW5Qcm9ncmVzcyA9IHt9O1xuXHQvLyBoZWxwZXIgZnVuY3Rpb25zXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IHtAc291cmNlIERvd25sb2FkZXJ9IGFuZCBwcmVwYXJlcyBpdCBmb3IgYWN0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gZG93bmxvYWRcblx0ICogQHBhcmFtIHtpbnRlZ2VyfSBpZCBUaGUgSUQgb2YgdGhlIHtAc291cmNlIERvd25sb2FkZXJ9IG9iamVjdFxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gaW52b2tlZCBvbiBzdWNjZXNzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBvbmZhaWx1cmVcblx0ICogQHJldHVybiB7U3RyaW5nL0Rvd25sb2FkZXJ9IHRoZSB7QHNvdXJjZSBEb3dubG9hZGVyfSBvYmplY3QgY3JlYXRlZCwgb3IgJ29oZGVhcicgaWYgYW4gdW5zdXBwb3J0ZWQgYnJvd3NlclxuXHQgKi9cblx0Y29uc3QgbmV3RG93bmxvYWQgPSBmdW5jdGlvbiBuZXdEb3dubG9hZCh1cmwsIGlkLCBjYWxsYmFjaywgb25mYWlsdXJlKSB7XG5cdFx0Y29uc3QgZCA9IG5ldyBEb3dubG9hZGVyKHVybCk7XG5cdFx0aWYgKCFkLmh0dHApIHtcblx0XHRcdHJldHVybiAnb2hkZWFyJztcblx0XHR9XG5cdFx0ZC5pZCA9IGlkO1xuXHRcdGQuc2V0VGFyZ2V0KCk7XG5cdFx0b25mYWlsdXJlIHx8PSAyO1xuXHRcdGNvbnN0IGYgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoZC5nZXRSZWFkeVN0YXRlKCkgPT09IDQpIHtcblx0XHRcdFx0ZGVsZXRlIHBnLm1pc2MuZG93bmxvYWRzSW5Qcm9ncmVzc1t0aGlzLmlkXTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoZC5nZXRTdGF0dXMoKSA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRkLmRhdGEgPSBkLmdldERhdGEoKTtcblx0XHRcdFx0XHRcdGQubGFzdE1vZGlmaWVkID0gZC5nZXRMYXN0TW9kaWZpZWREYXRlKCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayhkKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBvbmZhaWx1cmUgPT09IHR5cGVvZiAxKSB7XG5cdFx0XHRcdFx0XHRpZiAob25mYWlsdXJlID4gMCkge1xuXHRcdFx0XHRcdFx0XHQvLyByZXRyeVxuXHRcdFx0XHRcdFx0XHRuZXdEb3dubG9hZCh1cmwsIGlkLCBjYWxsYmFjaywgb25mYWlsdXJlIC0gMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygb25mYWlsdXJlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRvbmZhaWx1cmUoZCwgdXJsLCBpZCwgY2FsbGJhY2spO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogaWdub3JlIGl0ICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdGQuc2V0Q2FsbGJhY2soZik7XG5cdFx0cmV0dXJuIGQ7XG5cdH07XG5cdC8qKlxuXHQgKiBTaW11bGF0ZXMgYSBkb3dubG9hZCBmcm9tIGNhY2hlZCBkYXRhLlxuXHQgKiBUaGUgc3VwcGxpZWQgZGF0YSBpcyBwdXQgaW50byBhIHtAc291cmNlIERvd25sb2FkZXJ9IGFzIGlmIGl0IGhhZCBkb3dubG9hZGVkIGl0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwuXG5cdCAqIEBwYXJhbSB7aW50ZWdlcn0gaWQgVGhlIElELlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2ssIHdoaWNoIGlzIGludm9rZWQgaW1tZWRpYXRlbHkgYXMgPGNvZGU+Y2FsbGJhY2soZCk8L2NvZGU+LFxuXHQgKiB3aGVyZSA8Y29kZT5kPC9jb2RlPiBpcyB0aGUgbmV3IHtAc291cmNlIERvd25sb2FkZXJ9LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBUaGUgKGNhY2hlZCkgZGF0YS5cblx0ICogQHBhcmFtIHtEYXRlfSBsYXN0TW9kaWZpZWQgVGhlIChjYWNoZWQpIGxhc3QgbW9kaWZpZWQgZGF0ZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IG93bmVyXG5cdCAqL1xuXHRjb25zdCBmYWtlRG93bmxvYWQgPSAodXJsLCBpZCwgY2FsbGJhY2ssIGRhdGEsIGxhc3RNb2RpZmllZCwgb3duZXIpID0+IHtcblx0XHRjb25zdCBkID0gbmV3RG93bmxvYWQodXJsLCBjYWxsYmFjayk7XG5cdFx0ZC5vd25lciA9IG93bmVyO1xuXHRcdGQuaWQgPSBpZDtcblx0XHRkLmRhdGEgPSBkYXRhO1xuXHRcdGQubGFzdE1vZGlmaWVkID0gbGFzdE1vZGlmaWVkO1xuXHRcdHJldHVybiBjYWxsYmFjayhkKTtcblx0fTtcblx0LyoqXG5cdCAqIFN0YXJ0cyBhIGRvd25sb2FkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gZG93bmxvYWRcblx0ICogQHBhcmFtIHtpbnRlZ2VyfSBpZCBUaGUgSUQgb2YgdGhlIHtAc291cmNlIERvd25sb2FkZXJ9IG9iamVjdFxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gaW52b2tlZCBvbiBzdWNjZXNzXG5cdCAqIEByZXR1cm4ge1N0cmluZy9Eb3dubG9hZGVyfSB0aGUge0Bzb3VyY2UgRG93bmxvYWRlcn0gb2JqZWN0IGNyZWF0ZWQsIG9yICdvaGRlYXInIGlmIGFuIHVuc3VwcG9ydGVkIGJyb3dzZXJcblx0ICovXG5cdGNvbnN0IHN0YXJ0RG93bmxvYWQgPSAodXJsLCBpZCwgY2FsbGJhY2spID0+IHtcblx0XHRjb25zdCBkID0gbmV3RG93bmxvYWQodXJsLCBpZCwgY2FsbGJhY2spO1xuXHRcdGlmICh0eXBlb2YgZCA9PT0gdHlwZW9mICcnKSB7XG5cdFx0XHRyZXR1cm4gZDtcblx0XHR9XG5cdFx0ZC5zdGFydCgpO1xuXHRcdHJldHVybiBkO1xuXHR9O1xuXHQvKipcblx0ICogQWJvcnRzIGFsbCBkb3dubG9hZHMgd2hpY2ggaGF2ZSBiZWVuIHN0YXJ0ZWQuXG5cdCAqL1xuXHRjb25zdCBhYm9ydEFsbERvd25sb2FkcyA9ICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHggaW4gcGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzLCB4KSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHBnLm1pc2MuZG93bmxvYWRzSW5Qcm9ncmVzc1t4XS5hYm9ydGVkID0gdHJ1ZTtcblx0XHRcdFx0cGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzW3hdLmFib3J0KCk7XG5cdFx0XHRcdGRlbGV0ZSBwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3NbeF07XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdC8vIEVOREZJTEU6IGRvd25sb2FkZXIuanNcblx0Ly8gU1RBUlRGSUxFOiBsaXZlcHJldmlldy5qc1xuXHQvLyBUT0RPOiBsb2NhdGlvbiBpcyBvZnRlbiBub3QgY29ycmVjdCAoZWcgcmVsYXRpdmUgbGlua3MgaW4gcHJldmlld3MpXG5cdC8vIE5PVEU6IHJlbW92ZWQgbWQ1IGFuZCBpbWFnZSBhbmQgbWF0aCBwYXJzaW5nLiB3YXMgYnJva2VuLCBsb3RzIG9mIGJ5dGVzLlxuXHQvKipcblx0ICogSW5zdGFWaWV3IC0gYSBNZWRpYXdpa2kgdG8gSFRNTCBjb252ZXJ0ZXIgaW4gSmF2YVNjcmlwdFxuXHQgKiBWZXJzaW9uIDAuNi4xXG5cdCAqIENvcHlyaWdodCAoQykgUGVkcm8gRmF5b2xsZSAyMDA1LTIwMDZcblx0ICoge0BsaW5rIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VzZXI6UGlsYWZ9XG5cdCAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgbGljZW5zZVxuXHQgKlxuXHQgKiBDaGFuZ2Vsb2c6XG5cdCAqXG5cdCAqIDAuNi4xXG5cdCAqIC0gRml4ZWQgcHJvYmxlbSBjYXVzZWQgYnkgXFxyIGNoYXJhY3RlcnNcblx0ICogLSBJbXByb3ZlZCBpbmxpbmUgZm9ybWF0dGluZyBwYXJzZXJcblx0ICpcblx0ICogMC42XG5cdCAqIC0gQ2hhbmdlZCBuYW1lIHRvIEluc3RhVmlld1xuXHQgKiAtIFNvbWUgbWFqb3IgY29kZSByZW9yZ2FuaXphdGlvbnMgYW5kIGZhY3RvcmVkIG91dCBzb21lIGNvbW1vbiBmdW5jdGlvbnNcblx0ICogLSBIYW5kbGVkIGNvbnZlcnNpb24gb2YgcmVsYXRpdmUgbGlua3MgKGkuZS4gW1svZm9vXV0pXG5cdCAqIC0gRml4ZWQgbWlzcmVuZGVyaW5nIG9mIGFkamFjZW50IGRlZmluaXRpb24gbGlzdCBpdGVtc1xuXHQgKiAtIEZpeGVkIGJ1ZyBpbiB0YWJsZSBoZWFkaW5ncyBoYW5kbGluZ1xuXHQgKiAtIENoYW5nZWQgZGF0ZSBmb3JtYXQgaW4gc2lnbmF0dXJlcyB0byByZWZsZWN0IE1lZGlhd2lraSdzXG5cdCAqIC0gRml4ZWQgaGFuZGxpbmcgb2YgW1s6SW1hZ2U6Li4uXV1cblx0ICogLSBVcGRhdGVkIE1ENSBmdW5jdGlvbiAoaG9wZWZ1bGx5IGl0IHdpbGwgd29yayB3aXRoIFVURi04KVxuXHQgKiAtIEZpeGVkIGJ1ZyBpbiBoYW5kbGluZyBvZiBsaW5rcyBpbnNpZGUgaW1hZ2VzXG5cdCAqXG5cdCAqIFRvIGRvOlxuXHQgKiAtIEJldHRlciBzdXBwb3J0IGZvciBtYXRoIHRhZ3Ncblx0ICogLSBGdWxsIHN1cHBvcnQgZm9yIG5vd2lraSB0YWdcblx0ICogLSBQYXJzZXItYmFzZWQgKGFzIG9wcG9zZWQgdG8gUmVnRXhwLWJhc2VkKSBpbmxpbmUgd2lraWNvZGUgaGFuZGxpbmcgKG1ha2UgaXQgb25lLXBhc3MgYW5kXG5cdCAqICAgYnVsbGV0LXByb29mKVxuXHQgKiAtIFN1cHBvcnQgZm9yIHRlbXBsYXRlcyAodGhyb3VnaCBBSkFYKVxuXHQgKiAtIFN1cHBvcnQgZm9yIGNvbG91cmVkIGxpbmtzIChBSkFYKVxuXHQgKi9cblx0Y29uc3QgSW5zdGEgPSB7fTtcblx0Y29uc3Qgc2V0dXBMaXZlUHJldmlldyA9ICgpID0+IHtcblx0XHRsZXQgX2I7XG5cdFx0Ly8gb3B0aW9uc1xuXHRcdEluc3RhLmNvbmYgPSB7XG5cdFx0XHRiYXNlVXJsOiAnJyxcblx0XHRcdHVzZXI6IHt9LFxuXHRcdFx0d2lraToge1xuXHRcdFx0XHRsYW5nOiBwZy53aWtpLmxhbmcsXG5cdFx0XHRcdGludGVyd2lraTogcGcud2lraS5pbnRlcndpa2ksXG5cdFx0XHRcdGRlZmF1bHRfdGh1bWJfd2lkdGg6IDE4MCxcblx0XHRcdH0sXG5cdFx0XHRwYXRoczoge1xuXHRcdFx0XHRhcnRpY2xlczogYCR7cGcud2lraS5hcnRpY2xlUGF0aH0vYCxcblx0XHRcdFx0Ly8gT25seSB1c2VkIGZvciBJbnN0YSBwcmV2aWV3cyB3aXRoIGltYWdlcy4gKG5vdCBpbiBwb3B1cHMpXG5cdFx0XHRcdG1hdGg6ICcvbWF0aC8nLFxuXHRcdFx0XHRpbWFnZXM6ICdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poLycsXG5cdFx0XHRcdGltYWdlc19mYWxsYmFjazogJy8vd20uemhvbmd3ZW4ud2lraS9jb21tb25zLycsXG5cdFx0XHR9LFxuXHRcdFx0bG9jYWxlOiB7XG5cdFx0XHRcdHVzZXI6IG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zVXNlcklkXSxcblx0XHRcdFx0aW1hZ2U6IG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zSW1hZ2VJZF0sXG5cdFx0XHRcdGNhdGVnb3J5OiBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc0NhdGVnb3J5SWRdLFxuXHRcdFx0XHQvLyBzaG91bGRuJ3QgYmUgdXNlZCBpbiBwb3B1cCBwcmV2aWV3cywgaSB0aGlua1xuXHRcdFx0XHRtb250aHM6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcblx0XHRcdH0sXG5cdFx0fTtcblx0XHQvLyBvcHRpb25zIHdpdGggZGVmYXVsdCB2YWx1ZXMgb3IgYmFja3JlZmVyZW5jZXNcblx0XHRJbnN0YS5jb25mLnVzZXIubmFtZSB8fD0gJ1FpdXdlbiBCYWlrZSBjb250cmlidXRvcnMnO1xuXHRcdEluc3RhLmNvbmYudXNlci5zaWduYXR1cmUgPSBgW1ske0luc3RhLmNvbmYubG9jYWxlLnVzZXJ9OiR7SW5zdGEuY29uZi51c2VyLm5hbWV9fCR7SW5zdGEuY29uZi51c2VyLm5hbWV9XV1gO1xuXHRcdC8vIGRlZmluZSBjb25zdGFudHNcblx0XHRJbnN0YS5CTE9DS19JTUFHRSA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgXlxcXFxbXFxcXFsoPzpGaWxlfEltYWdlfCR7SW5zdGEuY29uZi5sb2NhbGUuaW1hZ2V9KTouKj9cXFxcfC4qPyg/OmZyYW1lfHRodW1ibmFpbHx0aHVtYnxub25lfHJpZ2h0fGxlZnR8Y2VudGVyKWAsXG5cdFx0XHQnaSdcblx0XHQpO1xuXHR9O1xuXHRJbnN0YS5kdW1wID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG5cdFx0aWYgKHR5cGVvZiBmcm9tID09PSAnc3RyaW5nJykge1xuXHRcdFx0ZnJvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2Zyb219YCk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdG8gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RvfWApO1xuXHRcdH1cblx0XHR0by5pbm5lckhUTUwgPSB0aGlzLmNvbnZlcnQoZnJvbS52YWx1ZSk7XG5cdH07XG5cdEluc3RhLmNvbnZlcnQgPSAod2lraSkgPT4ge1xuXHRcdGNvbnN0IGxsID0gdHlwZW9mIHdpa2kgPT09ICdzdHJpbmcnID8gd2lraS5yZXBsYWNlKC9cXHIvZywgJycpLnNwbGl0KC9cXG4vKSA6IHdpa2k7IC8vIGxpbmVzIG9mIHdpa2ljb2RlXG5cdFx0bGV0IG8gPSAnJzsgLy8gcmVzdWx0IG9mIHBhc3NpbmcgYSByZWdleHAgdG8gY29tcGFyZUxpbmVTdHJpbmdPclJlZygpXG5cdFx0bGV0IHAgPSAwO1xuXHRcdGxldCByO1xuXHRcdC8vIHNvbWUgc2hvcnRoYW5kc1xuXHRcdGNvbnN0IHJlbWFpbiA9ICgpID0+IHtcblx0XHRcdHJldHVybiBsbC5sZW5ndGg7XG5cdFx0fTtcblx0XHRjb25zdCBzaCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBsbC5zaGlmdCgpO1xuXHRcdH07IC8vIHNoaWZ0XG5cdFx0Y29uc3QgcHMgPSAocykgPT4ge1xuXHRcdFx0byArPSBzO1xuXHRcdH07IC8vIHB1c2hcblxuXHRcdC8vIHNpbWlsYXIgdG8gQydzIHByaW50ZiwgdXNlcyA/IGFzIHBsYWNlaG9sZGVycywgPz8gdG8gZXNjYXBlIHF1ZXN0aW9uIG1hcmtzXG5cdFx0Y29uc3QgZiA9IGZ1bmN0aW9uIGYoLi4uYXJncykge1xuXHRcdFx0bGV0IGkgPSAxO1xuXHRcdFx0Y29uc3QgYSA9IGFyZ3M7XG5cdFx0XHRsZXQgW2ZdID0gYTtcblx0XHRcdGxldCBvID0gJyc7XG5cdFx0XHRsZXQgYztcblx0XHRcdGxldCBwO1xuXHRcdFx0Zm9yICg7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICgocCA9IGYuaW5kZXhPZignPycpKSArIDEpIHtcblx0XHRcdFx0XHQvLyBhbGxvdyBjaGFyYWN0ZXIgZXNjYXBpbmdcblx0XHRcdFx0XHRjID0gZi5jaGFyQXQocCArIDEpID09PSAnPycgPyAxIDogMDtcblx0XHRcdFx0XHRpIC09IGM7XG5cdFx0XHRcdFx0byArPSBmLnNsaWNlKDAsIE1hdGgubWF4KDAsIHApKSArIChjID8gJz8nIDogYVtpXSk7XG5cdFx0XHRcdFx0ZiA9IGYuc2xpY2UocCArIDEgKyBjKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG8gKyBmO1xuXHRcdH07XG5cdFx0Y29uc3QgaHRtbF9lbnRpdGllcyA9IChzKSA9PiB7XG5cdFx0XHRyZXR1cm4gcy5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG5cdFx0fTtcblx0XHQvLyBXaWtpIHRleHQgcGFyc2luZyB0byBodG1sIGlzIGEgbmlnaHRtYXJlLlxuXHRcdC8vIFRoZSBiZWxvdyBmdW5jdGlvbnMgZGVsaWJlcmF0ZWx5IGRvbid0IGVzY2FwZSB0aGUgYW1wZXJzYW5kIHNpbmNlIHRoaXMgd291bGQgbWFrZSBpdCBtb3JlXG5cdFx0Ly8gZGlmZmljdWx0LCBhbmQgd2UgZG9uJ3QgYWJzb2x1dGVseSBuZWVkIHRvIGZvciBob3cgd2UgbmVlZCBpdC4gVGhpcyBtZWFucyB0aGF0IGFueVxuXHRcdC8vIHVuZXNjYXBlZCBhbXBlcnNhbmRzIGluIHdpa2l0ZXh0IHdpbGwgcmVtYWluIHVuZXNjYXBlZCBhbmQgY2FuIGNhdXNlIGludmFsaWQgSFRNTC5cblx0XHQvLyBCcm93c2VycyBzaG91bGQgYWxsIGJlIGFibGUgdG8gaGFuZGxlIGl0IHRob3VnaC4gV2UgYWxzbyBlc2NhcGUgc2lnbmlmaWNhbnQgd2lraW1hcmt1cFxuXHRcdC8vIGNoYXJhY3RlcnMgdG8gcHJldmVudCBmdXJ0aGVyIG1hdGNoaW5nIG9uIHRoZSBwcm9jZXNzZWQgdGV4dC5cblx0XHRjb25zdCBodG1sZXNjYXBlX3RleHQgPSAocykgPT4ge1xuXHRcdFx0cmV0dXJuIHNcblx0XHRcdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdFx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0XHRcdC5yZXBsYWNlKC86L2csICcmIzU4OycpXG5cdFx0XHRcdC5yZXBsYWNlKC9cXFsvZywgJyYjOTE7Jylcblx0XHRcdFx0LnJlcGxhY2UoL10vZywgJyYjOTM7Jyk7XG5cdFx0fTtcblx0XHRjb25zdCBodG1sZXNjYXBlX2F0dHIgPSAocykgPT4ge1xuXHRcdFx0cmV0dXJuIGh0bWxlc2NhcGVfdGV4dChzKS5yZXBsYWNlKC8nL2csICcmIzM5OycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcblx0XHR9O1xuXHRcdC8vIHJldHVybiB0aGUgZmlyc3Qgbm9uIG1hdGNoaW5nIGNoYXJhY3RlciBwb3NpdGlvbiBiZXR3ZWVuIHR3byBzdHJpbmdzXG5cdFx0Y29uc3Qgc3RyX2ltYXRjaCA9IChhLCBiKSA9PiB7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGxldCBsO1xuXHRcdFx0Zm9yIChpID0gMCwgbCA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aCk7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0aWYgKGEuY2hhckF0KGkpICE9PSBiLmNoYXJBdChpKSkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9O1xuXHRcdC8vIGNvbXBhcmUgY3VycmVudCBsaW5lIGFnYWluc3QgYSBzdHJpbmcgb3IgcmVnZXhwXG5cdFx0Ly8gaWYgcGFzc2VkIGEgc3RyaW5nIGl0IHdpbGwgY29tcGFyZSBvbmx5IHRoZSBmaXJzdCBzdHJpbmcubGVuZ3RoIGNoYXJhY3RlcnNcblx0XHQvLyBpZiBwYXNzZWQgYSByZWdleHAgdGhlIHJlc3VsdCBpcyBzdG9yZWQgaW4gclxuXHRcdGNvbnN0IGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcgPSAoYykgPT4ge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiBjID09PSAnc3RyaW5nJyA/IGxsWzBdICYmIGxsWzBdLnNsaWNlKDAsIGMubGVuZ3RoKSA9PT0gYyA6IChyID0gbGxbMF0gJiYgbGxbMF0ubWF0Y2goYykpO1xuXHRcdH07XG5cdFx0Y29uc3QgY29tcGFyZUxpbmVTdHJpbmcgPSAoYykgPT4ge1xuXHRcdFx0cmV0dXJuIGxsWzBdID09PSBjO1xuXHRcdH07IC8vIGNvbXBhcmUgY3VycmVudCBsaW5lIGFnYWluc3QgYSBzdHJpbmdcblx0XHRjb25zdCBjaGFyQXRQb2ludCA9IChwKSA9PiB7XG5cdFx0XHRyZXR1cm4gbGxbMF0uY2hhckF0KHApO1xuXHRcdH07IC8vIHJldHVybiBjaGFyIGF0IHBvcyBwXG5cdFx0Y29uc3QgZW5kbCA9IChzKSA9PiB7XG5cdFx0XHRwcyhzKTtcblx0XHRcdHNoKCk7XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV9saXN0ID0gKCkgPT4ge1xuXHRcdFx0bGV0IHByZXYgPSAnJztcblx0XHRcdHdoaWxlIChyZW1haW4oKSAmJiBjb21wYXJlTGluZVN0cmluZ09yUmVnKC9eKFsjKjo7XSspKC4qKSQvKSkge1xuXHRcdFx0XHRjb25zdCBsX21hdGNoID0gcjtcblx0XHRcdFx0c2goKTtcblx0XHRcdFx0Y29uc3QgaXBvcyA9IHN0cl9pbWF0Y2gocHJldiwgbF9tYXRjaFsxXSk7XG5cdFx0XHRcdC8vIGNsb3NlIHVuY29udGludWVkIGxpc3RzXG5cdFx0XHRcdGZvciAobGV0IHByZXZQb3MgPSBwcmV2Lmxlbmd0aCAtIDE7IHByZXZQb3MgPj0gaXBvczsgcHJldlBvcy0tKSB7XG5cdFx0XHRcdFx0Y29uc3QgcGkgPSBwcmV2LmNoYXJBdChwcmV2UG9zKTtcblx0XHRcdFx0XHRpZiAocGkgPT09ICcqJykge1xuXHRcdFx0XHRcdFx0cHMoJzwvdWw+Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwaSA9PT0gJyMnKSB7XG5cdFx0XHRcdFx0XHRwcygnPC9vbD4nKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFsnJywgJyonLCAnIyddLmluZGV4T2YobF9tYXRjaFsxXS5jaGFyQXQocHJldlBvcykpKSB7XG5cdFx0XHRcdFx0XHQvLyBjbG9zZSBhIGRsIG9ubHkgaWYgdGhlIG5ldyBpdGVtIGlzIG5vdCBhIGRsIGl0ZW0gKDosIDsgb3IgZW1wdHkpXG5cdFx0XHRcdFx0XHRwcygnPC9kbD4nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gb3BlbiBuZXcgbGlzdHNcblx0XHRcdFx0Zm9yIChsZXQgbWF0Y2hQb3MgPSBpcG9zOyBtYXRjaFBvcyA8IGxfbWF0Y2hbMV0ubGVuZ3RoOyBtYXRjaFBvcysrKSB7XG5cdFx0XHRcdFx0Y29uc3QgbGkgPSBsX21hdGNoWzFdLmNoYXJBdChtYXRjaFBvcyk7XG5cdFx0XHRcdFx0aWYgKGxpID09PSAnKicpIHtcblx0XHRcdFx0XHRcdHBzKCc8dWw+Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChsaSA9PT0gJyMnKSB7XG5cdFx0XHRcdFx0XHRwcygnPG9sPicpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoWycnLCAnKicsICcjJ10uaW5kZXhPZihwcmV2LmNoYXJBdChtYXRjaFBvcykpKSB7XG5cdFx0XHRcdFx0XHQvLyBvcGVuIGEgbmV3IGRsIG9ubHkgaWYgdGhlIHByZXYgaXRlbSBpcyBub3QgYSBkbCBpdGVtICg6LCA7IG9yIGVtcHR5KVxuXHRcdFx0XHRcdFx0cHMoJzxkbD4nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c3dpdGNoIChsX21hdGNoWzFdLmF0KC0xKSkge1xuXHRcdFx0XHRcdGNhc2UgJyonOlxuXHRcdFx0XHRcdGNhc2UgJyMnOlxuXHRcdFx0XHRcdFx0cHMoYDxsaT4ke3BhcnNlX2lubGluZV9ub3dpa2kobF9tYXRjaFsyXSl9YCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICc7Jzoge1xuXHRcdFx0XHRcdFx0cHMoJzxkdD4nKTtcblx0XHRcdFx0XHRcdGNvbnN0IGR0X21hdGNoID0gbF9tYXRjaFsyXS5tYXRjaCgvKC4qPykoOi4qPykkLyk7XG5cdFx0XHRcdFx0XHQvLyBoYW5kbGUgO2R0IDpkZCBmb3JtYXRcblx0XHRcdFx0XHRcdGlmIChkdF9tYXRjaCkge1xuXHRcdFx0XHRcdFx0XHRwcyhwYXJzZV9pbmxpbmVfbm93aWtpKGR0X21hdGNoWzFdKSk7XG5cdFx0XHRcdFx0XHRcdGxsLnVuc2hpZnQoZHRfbWF0Y2hbMl0pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cHMocGFyc2VfaW5saW5lX25vd2lraShsX21hdGNoWzJdKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FzZSAnOic6XG5cdFx0XHRcdFx0XHRwcyhgPGRkPiR7cGFyc2VfaW5saW5lX25vd2lraShsX21hdGNoWzJdKX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRbLCBwcmV2XSA9IGxfbWF0Y2g7XG5cdFx0XHR9XG5cdFx0XHQvLyBjbG9zZSByZW1haW5pbmcgbGlzdHNcblx0XHRcdGZvciAobGV0IGkgPSBwcmV2Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdHBzKGYoJzwvPz4nLCBwcmV2LmNoYXJBdChpKSA9PT0gJyonID8gJ3VsJyA6IHByZXYuY2hhckF0KGkpID09PSAnIycgPyAnb2wnIDogJ2RsJykpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfdGFibGUgPSAoKSA9PiB7XG5cdFx0XHRlbmRsKGYoJzx0YWJsZT4nLCBjb21wYXJlTGluZVN0cmluZ09yUmVnKC9ee1xcfCggLiopJC8pID8gclsxXSA6ICcnKSk7XG5cdFx0XHRmb3IgKDsgcmVtYWluKCk7ICkge1xuXHRcdFx0XHRpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygnfCcpKSB7XG5cdFx0XHRcdFx0c3dpdGNoIChjaGFyQXRQb2ludCgxKSkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnfSc6XG5cdFx0XHRcdFx0XHRcdGVuZGwoJzwvdGFibGU+Jyk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdGNhc2UgJy0nOlxuXHRcdFx0XHRcdFx0XHRlbmRsKGYoJzx0cj4nLCBjb21wYXJlTGluZVN0cmluZ09yUmVnKC9cXHwtKiguKikvKVsxXSkpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdHBhcnNlX3RhYmxlX2RhdGEoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygnIScpKSB7XG5cdFx0XHRcdFx0cGFyc2VfdGFibGVfZGF0YSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX3RhYmxlX2RhdGEgPSAoKSA9PiB7XG5cdFx0XHRsZXQgdGRfbGluZTtcblx0XHRcdGxldCBtYXRjaF9pO1xuXHRcdFx0Ly8gMTogXCJ8K1wiLCAnfCcgb3IgJysnXG5cdFx0XHQvLyAyOiA/P1xuXHRcdFx0Ly8gMzogYXR0cmlidXRlcyA/P1xuXHRcdFx0Ly8gVE9ETzogZmluaXNoIGNvbW1lbnRpbmcgdGhpcyByZWdleHBcblx0XHRcdGNvbnN0IHRkX21hdGNoID0gc2goKS5tYXRjaCgvXihcXHxcXCt8XFx8fCEpKCg/OihbXlt8XSo/KVxcfCg/IVxcfCkpPyguKikpJC8pO1xuXHRcdFx0aWYgKHRkX21hdGNoWzFdID09PSAnfCsnKSB7XG5cdFx0XHRcdHBzKCc8Y2FwdGlvbicpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHMoYDx0JHt0ZF9tYXRjaFsxXSA9PT0gJ3wnID8gJ2QnIDogJ2gnfWApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRkX21hdGNoWzNdKSB7XG5cdFx0XHRcdC8vIHBzKCcgJyArIHRkX21hdGNoWzNdKVxuXHRcdFx0XHRtYXRjaF9pID0gNDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1hdGNoX2kgPSAyO1xuXHRcdFx0fVxuXHRcdFx0cHMoJz4nKTtcblx0XHRcdGlmICh0ZF9tYXRjaFsxXSA9PT0gJ3wrJykge1xuXHRcdFx0XHRwcyhwYXJzZV9pbmxpbmVfbm93aWtpKHRkX21hdGNoW21hdGNoX2ldKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyB1c2UgfHwgb3IgISEgYXMgYSBjZWxsIHNlcGFyYXRvciBkZXBlbmRpbmcgb24gY29udGV4dFxuXHRcdFx0XHQvLyBOT1RFOiB3aGVuIHNwbGl0KCkgaXMgcGFzc2VkIGEgcmVnZXhwIG1ha2Ugc3VyZSB0byB1c2Ugbm9uLWNhcHR1cmluZyBicmFja2V0c1xuXHRcdFx0XHR0ZF9saW5lID0gdGRfbWF0Y2hbbWF0Y2hfaV0uc3BsaXQodGRfbWF0Y2hbMV0gPT09ICd8JyA/ICd8fCcgOiAvXFx8XFx8fCEhLyk7XG5cdFx0XHRcdHBzKHBhcnNlX2lubGluZV9ub3dpa2kodGRfbGluZS5zaGlmdCgpKSk7XG5cdFx0XHRcdHdoaWxlICh0ZF9saW5lLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRsbC51bnNoaWZ0KHRkX21hdGNoWzFdICsgdGRfbGluZS5wb3AoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGxldCB0YyA9IDA7XG5cdFx0XHRjb25zdCB0ZCA9IFtdO1xuXHRcdFx0d2hpbGUgKHJlbWFpbigpKSB7XG5cdFx0XHRcdHRkLnB1c2goc2goKSk7XG5cdFx0XHRcdGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKCd8JykpIHtcblx0XHRcdFx0XHRpZiAoIXRjKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGNoYXJBdFBvaW50KDEpID09PSAnfScpIHtcblx0XHRcdFx0XHRcdC8vIHdlJ3JlIGF0IHRoZSBvdXRlci1tb3N0IGxldmVsIChubyBuZXN0ZWQgdGFibGVzKSwgc2tpcCB0byB0ZCBwYXJzZVxuXHRcdFx0XHRcdFx0dGMtLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoIXRjICYmIGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJyEnKSkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJ3t8JykpIHtcblx0XHRcdFx0XHR0YysrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRwcyhJbnN0YS5jb252ZXJ0KHRkKSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV9wcmUgPSAoKSA9PiB7XG5cdFx0XHRwcygnPHByZT4nKTtcblx0XHRcdGRvIHtcblx0XHRcdFx0ZW5kbChgJHtwYXJzZV9pbmxpbmVfbm93aWtpKGxsWzBdLnNsaWNlKDEpKX1cXG5gKTtcblx0XHRcdH0gd2hpbGUgKHJlbWFpbigpICYmIGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJyAnKSk7XG5cdFx0XHRwcygnPC9wcmU+Jyk7XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV9ibG9ja19pbWFnZSA9ICgpID0+IHtcblx0XHRcdHBzKHBhcnNlX2ltYWdlKHNoKCkpKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX2ltYWdlID0gKHN0cikgPT4ge1xuXHRcdFx0Ly8gZ2V0IHdoYXQncyBpbiBiZXR3ZWVuIFwiW1tJbWFnZTpcIiBhbmQgXCJdXVwiXG5cdFx0XHRsZXQgdGFnID0gc3RyLnN1YnN0cmluZyhzdHIuaW5kZXhPZignOicpICsgMSwgc3RyLmxlbmd0aCAtIDIpO1xuXHRcdFx0bGV0IHdpZHRoO1xuXHRcdFx0bGV0IGF0dHIgPSBbXTtcblx0XHRcdGxldCBmaWxlbmFtZTtcblx0XHRcdGxldCBjYXB0aW9uID0gJyc7XG5cdFx0XHRsZXQgdGh1bWIgPSAwO1xuXHRcdFx0bGV0IGZyYW1lID0gMDtcblx0XHRcdGxldCBjZW50ZXIgPSAwO1xuXHRcdFx0bGV0IGFsaWduID0gJyc7XG5cdFx0XHRpZiAoL1xcfC8udGVzdCh0YWcpKSB7XG5cdFx0XHRcdC8vIG1hbmFnZSBuZXN0ZWQgbGlua3Ncblx0XHRcdFx0bGV0IG5lc3RpbmcgPSAwO1xuXHRcdFx0XHRsZXQgbGFzdF9hdHRyO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gdGFnLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcblx0XHRcdFx0XHRpZiAodGFnLmNoYXJBdChpKSA9PT0gJ3wnICYmICFuZXN0aW5nKSB7XG5cdFx0XHRcdFx0XHRsYXN0X2F0dHIgPSB0YWcuc2xpY2UoaSArIDEpO1xuXHRcdFx0XHRcdFx0dGFnID0gdGFnLnNsaWNlKDAsIE1hdGgubWF4KDAsIGkpKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKHRhZy5zbGljZShpIC0gMSwgaSAtIDEgKyAyKSkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICddXSc6XG5cdFx0XHRcdFx0XHRcdFx0bmVzdGluZysrO1xuXHRcdFx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnW1snOlxuXHRcdFx0XHRcdFx0XHRcdG5lc3RpbmctLTtcblx0XHRcdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGF0dHIgPSB0YWcuc3BsaXQoL1xccypcXHxcXHMqLyk7XG5cdFx0XHRcdGF0dHIucHVzaChsYXN0X2F0dHIpO1xuXHRcdFx0XHRmaWxlbmFtZSA9IGF0dHIuc2hpZnQoKTtcblx0XHRcdFx0bGV0IHdfbWF0Y2g7XG5cdFx0XHRcdGZvciAoOyBhdHRyLmxlbmd0aCA+IDA7IGF0dHIuc2hpZnQoKSkge1xuXHRcdFx0XHRcdHdfbWF0Y2ggPSBhdHRyWzBdLm1hdGNoKC9eKFxcZCopKD86W3B4XSpcXGQqKT9weCQvKTtcblx0XHRcdFx0XHRpZiAod19tYXRjaCkge1xuXHRcdFx0XHRcdFx0Wywgd2lkdGhdID0gd19tYXRjaDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3dpdGNoIChhdHRyWzBdKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ3RodW1iJzpcblx0XHRcdFx0XHRcdFx0Y2FzZSAndGh1bWJuYWlsJzpcblx0XHRcdFx0XHRcdFx0XHR0aHVtYiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0ZnJhbWUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdmcmFtZSc6XG5cdFx0XHRcdFx0XHRcdFx0ZnJhbWUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdub25lJzpcblx0XHRcdFx0XHRcdFx0Y2FzZSAncmlnaHQnOlxuXHRcdFx0XHRcdFx0XHRjYXNlICdsZWZ0Jzpcblx0XHRcdFx0XHRcdFx0XHRjZW50ZXIgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRbYWxpZ25dID0gYXR0cjtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnY2VudGVyJzpcblx0XHRcdFx0XHRcdFx0XHRjZW50ZXIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGFsaWduID0gJ25vbmUnO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdGlmIChhdHRyLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0W2NhcHRpb25dID0gYXR0cjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmaWxlbmFtZSA9IHRhZztcblx0XHRcdH1cblx0XHRcdHJldHVybiAnJztcblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX2lubGluZV9ub3dpa2kgPSAoc3RyKSA9PiB7XG5cdFx0XHRsZXQgc3RhcnQ7XG5cdFx0XHRsZXQgbGFzdGVuZCA9IDA7XG5cdFx0XHRsZXQgc3Vic3RhcnQgPSAwO1xuXHRcdFx0bGV0IG5lc3RsZXYgPSAwO1xuXHRcdFx0bGV0IG9wZW47XG5cdFx0XHRsZXQgY2xvc2U7XG5cdFx0XHRsZXQgc3VibG9vcDtcblx0XHRcdGxldCBodG1sID0gJyc7XG5cdFx0XHR3aGlsZSAoKHN0YXJ0ID0gc3RyLmluZGV4T2YoJzxubycuY29uY2F0KCd3aWtpJywgJz4nKSwgc3Vic3RhcnQpKSAhPT0gLTEpIHtcblx0XHRcdFx0aHRtbCArPSBwYXJzZV9pbmxpbmVfd2lraShzdHIuc3Vic3RyaW5nKGxhc3RlbmQsIHN0YXJ0KSk7XG5cdFx0XHRcdHN0YXJ0ICs9IDg7XG5cdFx0XHRcdHN1YnN0YXJ0ID0gc3RhcnQ7XG5cdFx0XHRcdHN1Ymxvb3AgPSB0cnVlO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0b3BlbiA9IHN0ci5pbmRleE9mKCc8bm8nLmNvbmNhdCgnd2lraScsICc+JyksIHN1YnN0YXJ0KTtcblx0XHRcdFx0XHRjbG9zZSA9IHN0ci5pbmRleE9mKCc8L25vJy5jb25jYXQoJ3dpa2knLCAnPicpLCBzdWJzdGFydCk7XG5cdFx0XHRcdFx0aWYgKGNsb3NlIDw9IG9wZW4gfHwgb3BlbiA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdGlmIChjbG9zZSA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGh0bWwgKyBodG1sX2VudGl0aWVzKHN0ci5zbGljZShzdGFydCkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vic3RhcnQgPSBjbG9zZSArIDk7XG5cdFx0XHRcdFx0XHRpZiAobmVzdGxldikge1xuXHRcdFx0XHRcdFx0XHRuZXN0bGV2LS07XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRsYXN0ZW5kID0gc3Vic3RhcnQ7XG5cdFx0XHRcdFx0XHRcdGh0bWwgKz0gaHRtbF9lbnRpdGllcyhzdHIuc3Vic3RyaW5nKHN0YXJ0LCBsYXN0ZW5kIC0gOSkpO1xuXHRcdFx0XHRcdFx0XHRzdWJsb29wID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN1YnN0YXJ0ID0gb3BlbiArIDg7XG5cdFx0XHRcdFx0XHRuZXN0bGV2Kys7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IHdoaWxlIChzdWJsb29wKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBodG1sICsgcGFyc2VfaW5saW5lX3dpa2koc3RyLnNsaWNlKGxhc3RlbmQpKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX2lubGluZV9pbWFnZXMgPSAoc3RyKSA9PiB7XG5cdFx0XHRsZXQgc3RhcnQ7XG5cdFx0XHRsZXQgc3Vic3RhcnQgPSAwO1xuXHRcdFx0bGV0IG5lc3RsZXYgPSAwO1xuXHRcdFx0bGV0IGxvb3A7XG5cdFx0XHRsZXQgY2xvc2U7XG5cdFx0XHRsZXQgb3Blbjtcblx0XHRcdGxldCB3aWtpO1xuXHRcdFx0bGV0IGh0bWw7XG5cdFx0XHR3aGlsZSAoKHN0YXJ0ID0gc3RyLmluZGV4T2YoJ1tbJywgc3Vic3RhcnQpKSAhPT0gLTEpIHtcblx0XHRcdFx0aWYgKG5ldyBSZWdFeHAoYF4oSW1hZ2V8RmlsZXwke0luc3RhLmNvbmYubG9jYWxlLmltYWdlfSk6YCwgJ2knKS50ZXN0KHN0ci5zbGljZShzdGFydCArIDIpKSkge1xuXHRcdFx0XHRcdGxvb3AgPSB0cnVlO1xuXHRcdFx0XHRcdHN1YnN0YXJ0ID0gc3RhcnQ7XG5cdFx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdFx0c3Vic3RhcnQgKz0gMjtcblx0XHRcdFx0XHRcdGNsb3NlID0gc3RyLmluZGV4T2YoJ11dJywgc3Vic3RhcnQpO1xuXHRcdFx0XHRcdFx0b3BlbiA9IHN0ci5pbmRleE9mKCdbWycsIHN1YnN0YXJ0KTtcblx0XHRcdFx0XHRcdGlmIChjbG9zZSA8PSBvcGVuIHx8IG9wZW4gPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChjbG9zZSA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc3RyO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHN1YnN0YXJ0ID0gY2xvc2U7XG5cdFx0XHRcdFx0XHRcdGlmIChuZXN0bGV2KSB7XG5cdFx0XHRcdFx0XHRcdFx0bmVzdGxldi0tO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHdpa2kgPSBzdHIuc3Vic3RyaW5nKHN0YXJ0LCBjbG9zZSArIDIpO1xuXHRcdFx0XHRcdFx0XHRcdGh0bWwgPSBwYXJzZV9pbWFnZSh3aWtpKTtcblx0XHRcdFx0XHRcdFx0XHRzdHIgPSBzdHIucmVwbGFjZSh3aWtpLCBodG1sKTtcblx0XHRcdFx0XHRcdFx0XHRzdWJzdGFydCA9IHN0YXJ0ICsgaHRtbC5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdFx0bG9vcCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzdWJzdGFydCA9IG9wZW47XG5cdFx0XHRcdFx0XHRcdG5lc3RsZXYrKztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IHdoaWxlIChsb29wKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9O1xuXHRcdC8vIHRoZSBvdXRwdXQgb2YgdGhpcyBmdW5jdGlvbiBkb2Vzbid0IHJlc3BlY3QgdGhlIEZJTE8gc3RydWN0dXJlIG9mIEhUTUxcblx0XHQvLyBidXQgc2luY2UgbW9zdCBicm93c2VycyBjYW4gaGFuZGxlIGl0IEknbGwgc2F2ZSBteXNlbGYgdGhlIGhhc3NsZVxuXHRcdGNvbnN0IHBhcnNlX2lubGluZV9mb3JtYXR0aW5nID0gKHN0cikgPT4ge1xuXHRcdFx0bGV0IGVtO1xuXHRcdFx0bGV0IHN0O1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRsZXQgbGk7XG5cdFx0XHRsZXQgbyA9ICcnO1xuXHRcdFx0d2hpbGUgKChpID0gc3RyLmluZGV4T2YoXCInJ1wiLCBsaSkpICsgMSkge1xuXHRcdFx0XHRvICs9IHN0ci5zdWJzdHJpbmcobGksIGkpO1xuXHRcdFx0XHRsaSA9IGkgKyAyO1xuXHRcdFx0XHRpZiAoc3RyLmNoYXJBdChpICsgMikgPT09IFwiJ1wiKSB7XG5cdFx0XHRcdFx0bGkrKztcblx0XHRcdFx0XHRzdCA9ICFzdDtcblx0XHRcdFx0XHRvICs9IHN0ID8gJzxzdHJvbmc+JyA6ICc8L3N0cm9uZz4nO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVtID0gIWVtO1xuXHRcdFx0XHRcdG8gKz0gZW0gPyAnPGVtPicgOiAnPC9lbT4nO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbyArIHN0ci5zbGljZShsaSk7XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV9pbmxpbmVfd2lraSA9IChzdHIpID0+IHtcblx0XHRcdHN0ciA9IHBhcnNlX2lubGluZV9pbWFnZXMoc3RyKTtcblx0XHRcdHN0ciA9IHBhcnNlX2lubGluZV9mb3JtYXR0aW5nKHN0cik7XG5cdFx0XHQvLyBtYXRoXG5cdFx0XHRzdHIgPSBzdHIucmVwbGFjZSgvPG1hdGg+KC4qPyk8XFwvbWF0aD4vZ2ksICcnKTtcblx0XHRcdC8vIEJ1aWxkIGEgTWVkaWF3aWtpLWZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuXHRcdFx0bGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0bGV0IG1pbnV0ZXMgPSBkYXRlLmdldFVUQ01pbnV0ZXMoKTtcblx0XHRcdGlmIChtaW51dGVzIDwgMTApIHtcblx0XHRcdFx0bWludXRlcyA9IGAwJHttaW51dGVzfWA7XG5cdFx0XHR9XG5cdFx0XHRkYXRlID0gZihcblx0XHRcdFx0Jz86PywgPyA/ID8gKFVUQyknLFxuXHRcdFx0XHRkYXRlLmdldFVUQ0hvdXJzKCksXG5cdFx0XHRcdG1pbnV0ZXMsXG5cdFx0XHRcdGRhdGUuZ2V0VVRDRGF0ZSgpLFxuXHRcdFx0XHRJbnN0YS5jb25mLmxvY2FsZS5tb250aHNbZGF0ZS5nZXRVVENNb250aCgpXSxcblx0XHRcdFx0ZGF0ZS5nZXRVVENGdWxsWWVhcigpXG5cdFx0XHQpO1xuXHRcdFx0Ly8gdGV4dCBmb3JtYXR0aW5nXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRzdHJcblx0XHRcdFx0XHQvLyBzaWduYXR1cmVzXG5cdFx0XHRcdFx0LnJlcGxhY2UoL357NX0oPyF+KS9nLCBkYXRlKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9+ezR9KD8hfikvZywgYCR7SW5zdGEuY29uZi51c2VyLm5hbWV9ICR7ZGF0ZX1gKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9+ezN9KD8hfikvZywgSW5zdGEuY29uZi51c2VyLm5hbWUpXG5cdFx0XHRcdFx0Ly8gW1s6Q2F0ZWdvcnk6Li4uXV0sIFtbOkltYWdlOi4uLl1dLCBldGMuLi5cblx0XHRcdFx0XHQucmVwbGFjZShcblx0XHRcdFx0XHRcdG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRcdGBcXFxcW1xcXFxbOigoPzoke0luc3RhLmNvbmYubG9jYWxlLmNhdGVnb3J5fXxJbWFnZXxGaWxlfCR7SW5zdGEuY29uZi5sb2NhbGUuaW1hZ2V9fCR7SW5zdGEuY29uZi53aWtpLmludGVyd2lraX0pOltefF0qPylcXFxcXVxcXFxdKFxcXFx3KilgLFxuXHRcdFx0XHRcdFx0XHQnZ2knXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0KF8kMCwgJDEsICQyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcdFwiPGEgaHJlZj0nPyc+PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0XHRJbnN0YS5jb25mLnBhdGhzLmFydGljbGVzICsgaHRtbGVzY2FwZV9hdHRyKCQxKSxcblx0XHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDEpICsgaHRtbGVzY2FwZV90ZXh0KCQyKVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQvLyByZW1vdmUgc3RyYWlnaHQgY2F0ZWdvcnkgYW5kIGludGVyd2lraSB0YWdzXG5cdFx0XHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0XHRgXFxcXFtcXFxcWyg/OiR7SW5zdGEuY29uZi5sb2NhbGUuY2F0ZWdvcnl9fCR7SW5zdGEuY29uZi53aWtpLmludGVyd2lraX0pOi4qP1xcXFxdXFxcXF1gLFxuXHRcdFx0XHRcdFx0XHQnZ2knXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0Jydcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0Ly8gW1s6Q2F0ZWdvcnk6Li4ufExpbmtzXV0sIFtbOkltYWdlOi4uLnxMaW5rc11dLCBldGMuLi5cblx0XHRcdFx0XHQucmVwbGFjZShcblx0XHRcdFx0XHRcdG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRcdGBcXFxcW1xcXFxbOigoPzoke0luc3RhLmNvbmYubG9jYWxlLmNhdGVnb3J5fXxJbWFnZXxGaWxlfCR7SW5zdGEuY29uZi5sb2NhbGUuaW1hZ2V9fCR7SW5zdGEuY29uZi53aWtpLmludGVyd2lraX0pOi4qPylcXFxcfChbXlxcXFxdXSs/KVxcXFxdXFxcXF0oXFxcXHcqKWAsXG5cdFx0XHRcdFx0XHRcdCdnaSdcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHQoXyQwLCAkMSwgJDIsICQzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcdFwiPGEgaHJlZj0nPyc+PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0XHRJbnN0YS5jb25mLnBhdGhzLmFydGljbGVzICsgaHRtbGVzY2FwZV9hdHRyKCQxKSxcblx0XHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDIpICsgaHRtbGVzY2FwZV90ZXh0KCQzKVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQvLyBbWy9SZWxhdGl2ZSBsaW5rc11dXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcW1xcWyhcXC9bXnxdKj8pXV0vZywgKF8kMCwgJDEpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFwiPGEgaHJlZj0nPyc+PzwvYT5cIiwgSW5zdGEuY29uZi5iYXNlVXJsICsgaHRtbGVzY2FwZV9hdHRyKCQxKSwgaHRtbGVzY2FwZV90ZXh0KCQxKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyBbWy9SZXBsYWNlZHxSZWxhdGl2ZSBsaW5rc11dXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcW1xcWyhcXC8uKj8pXFx8KC4rPyldXS9nLCAoXyQwLCAkMSwgJDIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFwiPGEgaHJlZj0nPyc+PzwvYT5cIiwgSW5zdGEuY29uZi5iYXNlVXJsICsgaHRtbGVzY2FwZV9hdHRyKCQxKSwgaHRtbGVzY2FwZV90ZXh0KCQyKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyBbW0NvbW1vbiBsaW5rc11dXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcW1xcWyhbXlt8XSo/KV1dKFxcdyopL2csIChfJDAsICQxLCAkMikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFwiPGEgaHJlZj0nPyc+PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0SW5zdGEuY29uZi5wYXRocy5hcnRpY2xlcyArIGh0bWxlc2NhcGVfYXR0cigkMSksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMSkgKyBodG1sZXNjYXBlX3RleHQoJDIpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Ly8gW1tSZXBsYWNlZHxMaW5rc11dXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcW1xcWyhbXltdKj8pXFx8KFteXFxdXSs/KV1dKFxcdyopL2csIChfJDAsICQxLCAkMiwgJDMpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcIjxhIGhyZWY9Jz8nPj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdEluc3RhLmNvbmYucGF0aHMuYXJ0aWNsZXMgKyBodG1sZXNjYXBlX2F0dHIoJDEpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDIpICsgaHRtbGVzY2FwZV90ZXh0KCQzKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIFtbU3RyaXBwZWQ6TmFtZXNwYWNlfE5hbWVzcGFjZV1dXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcW1xcWyhbXlxcXV0qPzopPyguKj8pKCAqXFwoLio/XFwpKT9cXHxdXS9nLCAoXyQwLCAkMSwgJDIsICQzKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XCI8YSBocmVmPSc/Jz4/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRJbnN0YS5jb25mLnBhdGhzLmFydGljbGVzICsgaHRtbGVzY2FwZV9hdHRyKCQxKSArIGh0bWxlc2NhcGVfYXR0cigkMikgKyBodG1sZXNjYXBlX2F0dHIoJDMpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDIpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Ly8gRXh0ZXJuYWwgbGlua3Ncblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbKGh0dHBzP3xuZXdzfGZ0cHxtYWlsdG98Z29waGVyfGlyYyk6KFxcLyopKFteXFxdXSo/KSAoLio/KV0vZywgKF8kMCwgJDEsICQyLCAkMywgJDQpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcIjxhIGNsYXNzPSdleHRlcm5hbCcgaHJlZj0nPzo/Jz4/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX2F0dHIoJDEpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX2F0dHIoJDIpICsgaHRtbGVzY2FwZV9hdHRyKCQzKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQ0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFtodHRwOlxcL1xcLyguKj8pXS9nLCAoXyQwLCAkMSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXCI8YSBjbGFzcz0nZXh0ZXJuYWwnIGhyZWY9J2h0dHA6Ly8/Jz5bI108L2E+XCIsIGh0bWxlc2NhcGVfYXR0cigkMSkpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcWyhuZXdzfGZ0cHxtYWlsdG98Z29waGVyfGlyYyk6KFxcLyopKC4qPyldL2csIChfJDAsICQxLCAkMiwgJDMpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcIjxhIGNsYXNzPSdleHRlcm5hbCcgaHJlZj0nPzo/Jz4/Oj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfYXR0cigkMSksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfYXR0cigkMikgKyBodG1sZXNjYXBlX2F0dHIoJDMpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDEpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDIpICsgaHRtbGVzY2FwZV90ZXh0KCQzKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0LyhefCApKGh0dHBzP3xuZXdzfGZ0cHxtYWlsdG98Z29waGVyfGlyYyk6KFxcLyopKFteICRdKlteICEkLC46Oz9dKS9nLFxuXHRcdFx0XHRcdFx0KF8kMCwgJDEsICQyLCAkMywgJDQpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFx0XCI/PGEgY2xhc3M9J2V4dGVybmFsJyBocmVmPSc/Oj8nPj86PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDEpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfYXR0cigkMiksXG5cdFx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV9hdHRyKCQzKSArIGh0bWxlc2NhcGVfYXR0cigkNCksXG5cdFx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQyKSxcblx0XHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDMpICsgaHRtbGVzY2FwZV90ZXh0KCQ0KVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQucmVwbGFjZSgnX19OT1RPQ19fJywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ19fTk9JTkRFWF9fJywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ19fSU5ERVhfXycsICcnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCdfX05PRURJVFNFQ1RJT05fXycsICcnKVxuXHRcdFx0KTtcblx0XHR9O1xuXHRcdC8vIGJlZ2luIHBhcnNpbmdcblx0XHRmb3IgKDsgcmVtYWluKCk7ICkge1xuXHRcdFx0aWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoL14oPXsxLDZ9KSguKilcXDEoLiopJC8pKSB7XG5cdFx0XHRcdHAgPSAwO1xuXHRcdFx0XHRlbmRsKGYoJzxoPz4/PC9oPz4/JywgclsxXS5sZW5ndGgsIHBhcnNlX2lubGluZV9ub3dpa2koclsyXSksIHJbMV0ubGVuZ3RoLCByWzNdKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoL15bIyo6O10vKSkge1xuXHRcdFx0XHRwID0gMDtcblx0XHRcdFx0cGFyc2VfbGlzdCgpO1xuXHRcdFx0fSBlbHNlIGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKCcgJykpIHtcblx0XHRcdFx0cCA9IDA7XG5cdFx0XHRcdHBhcnNlX3ByZSgpO1xuXHRcdFx0fSBlbHNlIGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKCd7fCcpKSB7XG5cdFx0XHRcdHAgPSAwO1xuXHRcdFx0XHRwYXJzZV90YWJsZSgpO1xuXHRcdFx0fSBlbHNlIGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKC9eLS0tLSskLykpIHtcblx0XHRcdFx0cCA9IDA7XG5cdFx0XHRcdGVuZGwoJzxocj4nKTtcblx0XHRcdH0gZWxzZSBpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZyhJbnN0YS5CTE9DS19JTUFHRSkpIHtcblx0XHRcdFx0cCA9IDA7XG5cdFx0XHRcdHBhcnNlX2Jsb2NrX2ltYWdlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBoYW5kbGUgcGFyYWdyYXBoc1xuXHRcdFx0XHRpZiAoY29tcGFyZUxpbmVTdHJpbmcoJycpKSB7XG5cdFx0XHRcdFx0cCA9IHJlbWFpbigpID4gMSAmJiBsbFsxXSA9PT0gJyc7XG5cdFx0XHRcdFx0aWYgKHApIHtcblx0XHRcdFx0XHRcdGVuZGwoJzxwPjxicj4nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKCFwKSB7XG5cdFx0XHRcdFx0XHRwcygnPHA+Jyk7XG5cdFx0XHRcdFx0XHRwID0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHMoYCR7cGFyc2VfaW5saW5lX25vd2lraShsbFswXSl9IGApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNoKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvO1xuXHR9O1xuXHRjb25zdCB3aWtpMmh0bWwgPSAodHh0LCBiYXNldXJsKSA9PiB7XG5cdFx0SW5zdGEuY29uZi5iYXNlVXJsID0gYmFzZXVybDtcblx0XHRyZXR1cm4gSW5zdGEuY29udmVydCh0eHQpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBsaXZlcHJldmlldy5qc1xuXHQvLyBTVEFSVEZJTEU6IHBhZ2VpbmZvLmpzXG5cdGNvbnN0IHBvcHVwRmlsdGVyUGFnZVNpemUgPSAoZGF0YSkgPT4ge1xuXHRcdHJldHVybiBmb3JtYXRCeXRlcyhkYXRhLmxlbmd0aCk7XG5cdH07XG5cdGNvbnN0IHBvcHVwRmlsdGVyQ291bnRMaW5rcyA9IChkYXRhKSA9PiB7XG5cdFx0Y29uc3QgbnVtID0gY291bnRMaW5rcyhkYXRhKTtcblx0XHRyZXR1cm4gYCR7U3RyaW5nKG51bSl9Jm5ic3A7JHtudW0gPT09IDEgPyBwb3B1cFN0cmluZygnd2lraUxpbmsnKSA6IHBvcHVwU3RyaW5nKCd3aWtpTGlua3MnKX1gO1xuXHR9O1xuXHRjb25zdCBwb3B1cEZpbHRlckNvdW50SW1hZ2VzID0gKGRhdGEpID0+IHtcblx0XHRjb25zdCBudW0gPSBjb3VudEltYWdlcyhkYXRhKTtcblx0XHRyZXR1cm4gYCR7U3RyaW5nKG51bSl9Jm5ic3A7JHtudW0gPT09IDEgPyBwb3B1cFN0cmluZygnaW1hZ2UnKSA6IHBvcHVwU3RyaW5nKCdpbWFnZXMnKX1gO1xuXHR9O1xuXHRjb25zdCBwb3B1cEZpbHRlckNvdW50Q2F0ZWdvcmllcyA9IChkYXRhKSA9PiB7XG5cdFx0Y29uc3QgbnVtID0gY291bnRDYXRlZ29yaWVzKGRhdGEpO1xuXHRcdHJldHVybiBgJHtTdHJpbmcobnVtKX0mbmJzcDske251bSA9PT0gMSA/IHBvcHVwU3RyaW5nKCdjYXRlZ29yeScpIDogcG9wdXBTdHJpbmcoJ2NhdGVnb3JpZXMnKX1gO1xuXHR9O1xuXHRjb25zdCBwb3B1cEZpbHRlckxhc3RNb2RpZmllZCA9IChfZGF0YSwgZG93bmxvYWQpID0+IHtcblx0XHRjb25zdCBsYXN0bW9kID0gZG93bmxvYWQubGFzdE1vZGlmaWVkO1xuXHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgYWdlID0gbm93IC0gbGFzdG1vZDtcblx0XHRpZiAobGFzdG1vZCAmJiBnZXRWYWx1ZU9mKCdwb3B1cExhc3RNb2RpZmllZCcpKSB7XG5cdFx0XHRyZXR1cm4gdHByaW50ZignJXMgb2xkJywgW2Zvcm1hdEFnZShhZ2UpXSkucmVwbGFjZSgvIC9nLCAnJm5ic3A7Jyk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fTtcblx0Y29uc3QgZm9ybWF0QWdlID0gKGFnZSkgPT4ge1xuXHRcdC8vIGNvZXJjZSBpbnRvIGEgbnVtYmVyXG5cdFx0bGV0IGEgPSAwICsgYWdlO1xuXHRcdGNvbnN0IGFhID0gYTtcblx0XHRjb25zdCBzZWNsZW4gPSAxMDAwO1xuXHRcdGNvbnN0IG1pbmxlbiA9IDYwICogc2VjbGVuO1xuXHRcdGNvbnN0IGhvdXJsZW4gPSA2MCAqIG1pbmxlbjtcblx0XHRjb25zdCBkYXlsZW4gPSAyNCAqIGhvdXJsZW47XG5cdFx0Y29uc3Qgd2Vla2xlbiA9IDcgKiBkYXlsZW47XG5cdFx0Y29uc3QgbnVtd2Vla3MgPSAoYSAtIChhICUgd2Vla2xlbikpIC8gd2Vla2xlbjtcblx0XHRhIC09IG51bXdlZWtzICogd2Vla2xlbjtcblx0XHRjb25zdCBzd2Vla3MgPSBhZGR1bml0KG51bXdlZWtzLCAnd2VlaycpO1xuXHRcdGNvbnN0IG51bWRheXMgPSAoYSAtIChhICUgZGF5bGVuKSkgLyBkYXlsZW47XG5cdFx0YSAtPSBudW1kYXlzICogZGF5bGVuO1xuXHRcdGNvbnN0IHNkYXlzID0gYWRkdW5pdChudW1kYXlzLCAnZGF5Jyk7XG5cdFx0Y29uc3QgbnVtaG91cnMgPSAoYSAtIChhICUgaG91cmxlbikpIC8gaG91cmxlbjtcblx0XHRhIC09IG51bWhvdXJzICogaG91cmxlbjtcblx0XHRjb25zdCBzaG91cnMgPSBhZGR1bml0KG51bWhvdXJzLCAnaG91cicpO1xuXHRcdGNvbnN0IG51bW1pbnMgPSAoYSAtIChhICUgbWlubGVuKSkgLyBtaW5sZW47XG5cdFx0YSAtPSBudW1taW5zICogbWlubGVuO1xuXHRcdGNvbnN0IHNtaW5zID0gYWRkdW5pdChudW1taW5zLCAnbWludXRlJyk7XG5cdFx0Y29uc3QgbnVtc2VjcyA9IChhIC0gKGEgJSBzZWNsZW4pKSAvIHNlY2xlbjtcblx0XHRhIC09IG51bXNlY3MgKiBzZWNsZW47XG5cdFx0Y29uc3Qgc3NlY3MgPSBhZGR1bml0KG51bXNlY3MsICdzZWNvbmQnKTtcblx0XHRpZiAoYWEgPiA0ICogd2Vla2xlbikge1xuXHRcdFx0cmV0dXJuIHN3ZWVrcztcblx0XHR9XG5cdFx0aWYgKGFhID4gd2Vla2xlbikge1xuXHRcdFx0cmV0dXJuIGAke3N3ZWVrc30gJHtzZGF5c31gO1xuXHRcdH1cblx0XHRpZiAoYWEgPiBkYXlsZW4pIHtcblx0XHRcdHJldHVybiBgJHtzZGF5c30gJHtzaG91cnN9YDtcblx0XHR9XG5cdFx0aWYgKGFhID4gNiAqIGhvdXJsZW4pIHtcblx0XHRcdHJldHVybiBzaG91cnM7XG5cdFx0fVxuXHRcdGlmIChhYSA+IGhvdXJsZW4pIHtcblx0XHRcdHJldHVybiBgJHtzaG91cnN9ICR7c21pbnN9YDtcblx0XHR9XG5cdFx0aWYgKGFhID4gMTAgKiBtaW5sZW4pIHtcblx0XHRcdHJldHVybiBzbWlucztcblx0XHR9XG5cdFx0aWYgKGFhID4gbWlubGVuKSB7XG5cdFx0XHRyZXR1cm4gYCR7c21pbnN9ICR7c3NlY3N9YDtcblx0XHR9XG5cdFx0cmV0dXJuIHNzZWNzO1xuXHR9O1xuXHRjb25zdCBhZGR1bml0ID0gKG51bSwgc3RyKSA9PiB7XG5cdFx0cmV0dXJuIGAke251bX0gJHtudW0gPT09IDEgPyBwb3B1cFN0cmluZyhzdHIpIDogcG9wdXBTdHJpbmcoYCR7c3RyfXNgKX1gO1xuXHR9O1xuXHRjb25zdCBydW5Qb3B1cEZpbHRlcnMgPSAobGlzdCwgZGF0YSwgZG93bmxvYWQpID0+IHtcblx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0aWYgKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgcyA9IGVsZW1lbnQoZGF0YSwgZG93bmxvYWQsIGRvd25sb2FkLm93bmVyLmFydGljbGUpO1xuXHRcdFx0XHRpZiAocykge1xuXHRcdFx0XHRcdHJldC5wdXNoKHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IGdldFBhZ2VJbmZvID0gKGRhdGEsIGRvd25sb2FkKSA9PiB7XG5cdFx0aWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ0VtcHR5IHBhZ2UnKTtcblx0XHR9XG5cdFx0Y29uc3QgcG9wdXBGaWx0ZXJzID0gZ2V0VmFsdWVPZigncG9wdXBGaWx0ZXJzJykgfHwgW107XG5cdFx0Y29uc3QgZXh0cmFQb3B1cEZpbHRlcnMgPSBnZXRWYWx1ZU9mKCdleHRyYVBvcHVwRmlsdGVycycpIHx8IFtdO1xuXHRcdGNvbnN0IHBhZ2VJbmZvQXJyYXkgPSBydW5Qb3B1cEZpbHRlcnMoWy4uLnBvcHVwRmlsdGVycywgLi4uZXh0cmFQb3B1cEZpbHRlcnNdLCBkYXRhLCBkb3dubG9hZCk7XG5cdFx0bGV0IHBhZ2VJbmZvID0gcGFnZUluZm9BcnJheS5qb2luKCcsICcpO1xuXHRcdGlmIChwYWdlSW5mbyAhPT0gJycpIHtcblx0XHRcdHBhZ2VJbmZvID0gdXBjYXNlRmlyc3QocGFnZUluZm8pO1xuXHRcdH1cblx0XHRyZXR1cm4gcGFnZUluZm87XG5cdH07XG5cdC8vIHRoaXMgY291bGQgYmUgaW1wcm92ZWQhXG5cdGNvbnN0IGNvdW50TGlua3MgPSAod2lraVRleHQpID0+IHtcblx0XHRyZXR1cm4gd2lraVRleHQuc3BsaXQoJ1tbJykubGVuZ3RoIC0gMTtcblx0fTtcblx0Ly8gaWYgTiA9ICMgbWF0Y2hlcywgbiA9ICMgYnJhY2tldHMsIHRoZW5cblx0Ly8gU3RyaW5nLnNwbGl0KHJlZ2V4KSBpbnRlcnNwZXJzZXMgdGhlIE4rMSBzcGxpdCBlbGVtZW50c1xuXHQvLyB3aXRoIE5uIG90aGVyIGVsZW1lbnRzLiBTbyB0b3RhbCBsZW5ndGggaXNcblx0Ly8gTD0gTisxICsgTm4gPSBOKG4rMSkrMS4gU28gTj0oTC0xKS8obisxKS5cblx0Y29uc3QgY291bnRJbWFnZXMgPSAod2lraVRleHQpID0+IHtcblx0XHRyZXR1cm4gKHdpa2lUZXh0LnNwbGl0KHBnLnJlLmltYWdlKS5sZW5ndGggLSAxKSAvIChwZy5yZS5pbWFnZUJyYWNrZXRDb3VudCArIDEpO1xuXHR9O1xuXHRjb25zdCBjb3VudENhdGVnb3JpZXMgPSAod2lraVRleHQpID0+IHtcblx0XHRyZXR1cm4gKHdpa2lUZXh0LnNwbGl0KHBnLnJlLmNhdGVnb3J5KS5sZW5ndGggLSAxKSAvIChwZy5yZS5jYXRlZ29yeUJyYWNrZXRDb3VudCArIDEpO1xuXHR9O1xuXHRjb25zdCBwb3B1cEZpbHRlclN0dWJEZXRlY3QgPSAoZGF0YSwgX2Rvd25sb2FkLCBhcnRpY2xlKSA9PiB7XG5cdFx0Y29uc3QgY291bnRzID0gc3R1YkNvdW50KGRhdGEsIGFydGljbGUpO1xuXHRcdGlmIChjb3VudHMucmVhbCkge1xuXHRcdFx0cmV0dXJuIHBvcHVwU3RyaW5nKCdzdHViJyk7XG5cdFx0fVxuXHRcdGlmIChjb3VudHMuc2VjdCkge1xuXHRcdFx0cmV0dXJuIHBvcHVwU3RyaW5nKCdzZWN0aW9uIHN0dWInKTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9O1xuXHRjb25zdCBwb3B1cEZpbHRlckRpc2FtYmlnRGV0ZWN0ID0gKGRhdGEsIF9kb3dubG9hZCwgYXJ0aWNsZSkgPT4ge1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBBbGxEYWJzU3R1YnMnKSAmJiBhcnRpY2xlLm5hbWVzcGFjZSgpKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdHJldHVybiBpc0Rpc2FtYmlnKGRhdGEsIGFydGljbGUpID8gcG9wdXBTdHJpbmcoJ2Rpc2FtYmlnJykgOiAnJztcblx0fTtcblx0Y29uc3QgZm9ybWF0Qnl0ZXMgPSAobnVtKSA9PiB7XG5cdFx0cmV0dXJuIG51bSA+IDk0OSA/IE1hdGgucm91bmQobnVtIC8gMTAwKSAvIDEwICsgcG9wdXBTdHJpbmcoJ2tCJykgOiBgJHtudW19Jm5ic3A7JHtwb3B1cFN0cmluZygnYnl0ZXMnKX1gO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBwYWdlaW5mby5qc1xuXHQvLyBTVEFSVEZJTEU6IHRpdGxlcy5qc1xuXHQvKipcblx0ICogQGZpbGVvdmVydmlldyBEZWZpbmVzIHRoZSB7QHNvdXJjZSBUaXRsZX0gY2xhc3MsIGFuZCBhc3NvY2lhdGVkIGNydWZ0eSBmdW5jdGlvbnMuXG5cdCAqXG5cdCAqIDxjb2RlPlRpdGxlPC9jb2RlPiBkZWFscyB3aXRoIGFydGljbGUgdGl0bGVzIGFuZCB0aGVpciB2YXJpb3VzXG5cdCAqIGZvcm1zLiAge0Bzb3VyY2UgU3RyaW5nd3JhcHBlcn0gaXMgdGhlIHBhcmVudCBjbGFzcyBvZlxuXHQgKiA8Y29kZT5UaXRsZTwvY29kZT4sIHdoaWNoIGV4aXN0cyBzaW1wbHkgdG8gbWFrZSB0aGluZ3MgYSBsaXR0bGVcblx0ICogbmVhdGVyLlxuXHQgKi9cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgU3RyaW5nd3JhcHBlci5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqIEBjbGFzcyB0aGUgU3RyaW5nd3JhcHBlciBjbGFzcy4gVGhpcyBiYXNlIGNsYXNzIGlzIG5vdCByZWFsbHlcblx0ICogdXNlZnVsIG9uIGl0cyBvd247IGl0IGp1c3Qgd3JhcHMgdmFyaW91cyBjb21tb24gc3RyaW5nIG9wZXJhdGlvbnMuXG5cdCAqL1xuXHRjb25zdCBTdHJpbmd3cmFwcGVyID0gZnVuY3Rpb24gU3RyaW5nd3JhcHBlcigpIHtcblx0XHQvKipcblx0XHQgKiBXcmFwcGVyIGZvciB0aGlzLnRvU3RyaW5nKCkuaW5kZXhPZigpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30geFxuXHRcdCAqIEB0eXBlIGludGVnZXJcblx0XHQgKi9cblx0XHR0aGlzLmluZGV4T2YgPSBmdW5jdGlvbiAoeCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoKS5pbmRleE9mKHgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGlzLnZhbHVlLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0ICovXG5cdFx0dGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogV3JhcHBlciBmb3Ige0Bzb3VyY2UgU3RyaW5nI3BhcmVuU3BsaXR9IGFwcGxpZWQgdG8gdGhpcy50b1N0cmluZygpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1JlZ0V4cH0geFxuXHRcdCAqIEB0eXBlIEFycmF5XG5cdFx0ICovXG5cdFx0dGhpcy5zcGxpdCA9IGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZygpLnNwbGl0KHgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogV3JhcHBlciBmb3IgdGhpcy50b1N0cmluZygpLnN1YnN0cmluZygpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30geFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB5IChvcHRpb25hbClcblx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHQgKi9cblx0XHR0aGlzLnN1YnN0cmluZyA9IGZ1bmN0aW9uICh4LCB5KSB7XG5cdFx0XHRpZiAoeSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCkuc2xpY2UoTWF0aC5tYXgoMCwgeCkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoKS5zdWJzdHJpbmcoeCwgeSk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBXcmFwcGVyIGZvciB0aGlzLnRvU3RyaW5nKCkuc3BsaXQoKVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHhcblx0XHQgKiBAdHlwZSBBcnJheVxuXHRcdCAqL1xuXHRcdHRoaXMuc3BsaXQgPSBmdW5jdGlvbiAoeCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoKS5zcGxpdCh4KTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFdyYXBwZXIgZm9yIHRoaXMudG9TdHJpbmcoKS5yZXBsYWNlKClcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB4XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHlcblx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHQgKi9cblx0XHR0aGlzLnJlcGxhY2UgPSBmdW5jdGlvbiAoeCwgeSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoKS5yZXBsYWNlKHgsIHkpO1xuXHRcdH07XG5cdH07XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IDxjb2RlPlRpdGxlPC9jb2RlPi5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqIEBjbGFzcyBUaGUgVGl0bGUgY2xhc3MuIEhvbGRzIGFydGljbGUgdGl0bGVzIGFuZCBjb252ZXJ0cyB0aGVtIGludG9cblx0ICogdmFyaW91cyBmb3Jtcy4gQWxzbyBkZWFscyB3aXRoIGFuY2hvcnMsIGJ5IHdoaWNoIHdlIG1lYW4gdGhlIGJpdHNcblx0ICogb2YgdGhlIGFydGljbGUgVVJMIGFmdGVyIGEgIyBjaGFyYWN0ZXIsIHJlcHJlc2VudGluZyBsb2NhdGlvbnNcblx0ICogd2l0aGluIGFuIGFydGljbGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgaW5pdGlhbCB2YWx1ZSB0byBhc3NpZ24gdG8gdGhlXG5cdCAqIGFydGljbGUuIFRoaXMgbXVzdCBiZSB0aGUgY2Fub25pY2FsIHRpdGxlIChzZWUge0BsaW5rXG5cdCAqIFRpdGxlI3ZhbHVlfS4gT21pdCB0aGlzIGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgdXNlIGFub3RoZXIgZnVuY3Rpb25cblx0ICogdG8gc2V0IHRoZSB0aXRsZSBpZiB0aGlzIGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0Y2xhc3MgVGl0bGUgZXh0ZW5kcyBTdHJpbmd3cmFwcGVyIHtcblx0XHRjb25zdHJ1Y3Rvcih2YWwpIHtcblx0XHRcdHN1cGVyKCk7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBjYW5vbmljYWwgYXJ0aWNsZSB0aXRsZS4gVGhpcyBtdXN0IGJlIGluIFVURi04IHdpdGggbm9cblx0XHRcdCAqIGVudGl0aWVzLCBlc2NhcGluZyBvciBuYXN0aWVzLiBBbHNvLCB1bmRlcnNjb3JlcyBzaG91bGQgYmVcblx0XHRcdCAqIHJlcGxhY2VkIHdpdGggc3BhY2VzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBjYW5vbmljYWwgZm9ybSBvZiB0aGUgYW5jaG9yLiBUaGlzIHNob3VsZCBiZSBleGFjdGx5IGFzXG5cdFx0XHQgKiBpdCBhcHBlYXJzIGluIHRoZSBVUkwsIGkuZS4gd2l0aCB0aGUgLkMzLjBBIGJpdHMgaW4uXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuYW5jaG9yID0gJyc7XG5cdFx0XHR0aGlzLnNldFV0Zih2YWwpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHRoZSBjYW5vbmljYWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGFydGljbGUgdGl0bGUsIG9wdGlvbmFsbHkgd2l0aG91dCBhbmNob3IuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IG9taXRBbmNob3Jcblx0XHQgKiBAZml4bWUgRGVjaWRlIHNwZWNzIGZvciBhbmNob3Jcblx0XHQgKiBAcmV0dXJuIFN0cmluZyBUaGUgYXJ0aWNsZSB0aXRsZSBhbmQgdGhlIGFuY2hvci5cblx0XHQgKi9cblx0XHR0b1N0cmluZyhvbWl0QW5jaG9yKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZSArICghb21pdEFuY2hvciAmJiB0aGlzLmFuY2hvciA/IGAjJHt0aGlzLmFuY2hvclN0cmluZygpfWAgOiAnJyk7XG5cdFx0fVxuXHRcdGFuY2hvclN0cmluZygpIHtcblx0XHRcdGlmICghdGhpcy5hbmNob3IpIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgc3BsaXQgPSB0aGlzLmFuY2hvci5zcGxpdCgvKCg/OlxcLltcXGRBLUZdezJ9KSspLyk7XG5cdFx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cdFx0XHRsZXQgdmFsdWU7XG5cdFx0XHRmb3IgKGxldCBqID0gMTsgaiA8IGxlbjsgaiArPSAyKSB7XG5cdFx0XHRcdC8vIEZJWE1FIHMvZGVjb2RlVVJJL2RlY29kZVVSSUNvbXBvbmVudC9nID9cblx0XHRcdFx0dmFsdWUgPSBzcGxpdFtqXS5zcGxpdCgnLicpLmpvaW4oJyUnKTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIGNhbm5vdCBkZWNvZGVcblx0XHRcdFx0fVxuXHRcdFx0XHRzcGxpdFtqXSA9IHZhbHVlLnNwbGl0KCdfJykuam9pbignICcpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNwbGl0LmpvaW4oJycpO1xuXHRcdH1cblx0XHR1cmxBbmNob3IoKSB7XG5cdFx0XHRjb25zdCBzcGxpdCA9IHRoaXMuYW5jaG9yLnNwbGl0KCcvKCg/OlslXVswLTlBLUZdezJ9KSspLycpO1xuXHRcdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXHRcdFx0Zm9yIChsZXQgaiA9IDE7IGogPCBsZW47IGogKz0gMikge1xuXHRcdFx0XHRzcGxpdFtqXSA9IHNwbGl0W2pdLnNwbGl0KCclJykuam9pbignLicpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNwbGl0LmpvaW4oJycpO1xuXHRcdH1cblx0XHRhbmNob3JGcm9tVXRmKHN0cikge1xuXHRcdFx0dGhpcy5hbmNob3IgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyLnNwbGl0KCcgJykuam9pbignXycpKVxuXHRcdFx0XHQuc3BsaXQoJyUzQScpXG5cdFx0XHRcdC5qb2luKCc6Jylcblx0XHRcdFx0LnNwbGl0KFwiJ1wiKVxuXHRcdFx0XHQuam9pbignJTI3Jylcblx0XHRcdFx0LnNwbGl0KCclJylcblx0XHRcdFx0LmpvaW4oJy4nKTtcblx0XHR9XG5cdFx0ZnJvbVVSTChoKSB7XG5cdFx0XHRpZiAodHlwZW9mIGggIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdC8vIE5PVEUgOiBwbGF5aW5nIHdpdGggZGVjb2RlVVJJLCBlbmNvZGVVUkksIGVzY2FwZSwgdW5lc2NhcGUsXG5cdFx0XHQvLyB3ZSBzZWVtIHRvIGJlIGFibGUgdG8gcmVwbGljYXRlIHRoZSBJRSBib3JrZWQgZW5jb2Rpbmdcblx0XHRcdC8vIElFIGRvZXNuJ3QgZG8gdGhpcyBuZXctZmFuZ2xlZCB1dGYtOCB0aGluZy5cblx0XHRcdC8vIGFuZCBpdCdzIHdvcnNlIHRoYW4gdGhhdC5cblx0XHRcdC8vIElFIHNlZW1zIHRvIHRyZWF0IHRoZSBxdWVyeSBzdHJpbmcgZGlmZmVyZW50bHkgdG8gdGhlIHJlc3Qgb2YgdGhlIHVybFxuXHRcdFx0Ly8gdGhlIHF1ZXJ5IGlzIHRyZWF0ZWQgYXMgYm9uYS1maWRlIHV0ZjgsIGJ1dCB0aGUgZmlyc3QgYml0IG9mIHRoZSB1cmwgaXMgcGlzc2VkIGFyb3VuZCB3aXRoXG5cdFx0XHQvLyB3ZSBmaXggdXAgJiBmb3IgYWxsIGJyb3dzZXJzLCBqdXN0IGluIGNhc2UuXG5cdFx0XHRjb25zdCBzcGxpdHRlZCA9IGguc3BsaXQoJz8nKTtcblx0XHRcdHNwbGl0dGVkWzBdID0gc3BsaXR0ZWRbMF0uc3BsaXQoJyYnKS5qb2luKCclMjYnKTtcblx0XHRcdGggPSBzcGxpdHRlZC5qb2luKCc/Jyk7XG5cdFx0XHRjb25zdCBjb250cmlicyA9IHBnLnJlLmNvbnRyaWJzLmV4ZWMoaCk7XG5cdFx0XHRpZiAoY29udHJpYnMpIHtcblx0XHRcdFx0aWYgKGNvbnRyaWJzWzFdID09PSAndGl0bGU9Jykge1xuXHRcdFx0XHRcdGNvbnRyaWJzWzNdID0gY29udHJpYnNbM10uc3BsaXQoJysnKS5qb2luKCcgJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdSA9IG5ldyBUaXRsZShjb250cmlic1szXSk7XG5cdFx0XHRcdHRoaXMuc2V0VXRmKFxuXHRcdFx0XHRcdFRpdGxlLmRlY29kZU5hc3RpZXMoYCR7bXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNVc2VySWRdfToke3Uuc3RyaXBOYW1lc3BhY2UoKX1gKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdGNvbnN0IGVtYWlsID0gcGcucmUuZW1haWwuZXhlYyhoKTtcblx0XHRcdGlmIChlbWFpbCkge1xuXHRcdFx0XHR0aGlzLnNldFV0Zihcblx0XHRcdFx0XHRUaXRsZS5kZWNvZGVOYXN0aWVzKFxuXHRcdFx0XHRcdFx0YCR7bXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNVc2VySWRdfToke25ldyBUaXRsZShlbWFpbFszXSkuc3RyaXBOYW1lc3BhY2UoKX1gXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdGNvbnN0IGJhY2tsaW5rcyA9IHBnLnJlLmJhY2tsaW5rcy5leGVjKGgpO1xuXHRcdFx0aWYgKGJhY2tsaW5rcykge1xuXHRcdFx0XHR0aGlzLnNldFV0ZihUaXRsZS5kZWNvZGVOYXN0aWVzKG5ldyBUaXRsZShiYWNrbGlua3NbM10pKSk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQSBkdW1teSB0aXRsZSBvYmplY3QgZm9yIGEgU3BlY2lhbDpEaWZmIGxpbmsuXG5cdFx0XHRjb25zdCBzcGVjaWFsZGlmZiA9IHBnLnJlLnNwZWNpYWxkaWZmLmV4ZWMoaCk7XG5cdFx0XHRpZiAoc3BlY2lhbGRpZmYpIHtcblx0XHRcdFx0dGhpcy5zZXRVdGYoXG5cdFx0XHRcdFx0VGl0bGUuZGVjb2RlTmFzdGllcyhuZXcgVGl0bGUoYCR7bXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNTcGVjaWFsSWRdfTpEaWZmYCkpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0Ly8gbm8gbW9yZSBzcGVjaWFsIGNhc2VzIHRvIGNoZWNrIC0tXG5cdFx0XHQvLyBob3BlZnVsbHkgaXQncyBub3QgYSBkaXNndWlzZWQgdXNlci1yZWxhdGVkIG9yIHNwZWNpYWxseSB0cmVhdGVkIHNwZWNpYWwgcGFnZVxuXHRcdFx0Ly8gSW5jbHVkZXMgcmVmZXJlbmNlc1xuXHRcdFx0Y29uc3QgbSA9IHBnLnJlLm1haW4uZXhlYyhoKTtcblx0XHRcdGlmIChtID09PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgZnJvbUJvdEludGVyZmFjZSA9IC9cXD8oLismKT90aXRsZT0vLnRlc3QoaCk7XG5cdFx0XHRcdGlmIChmcm9tQm90SW50ZXJmYWNlKSB7XG5cdFx0XHRcdFx0bVsyXSA9IG1bMl0uc3BsaXQoJysnKS5qb2luKCdfJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZXh0cmFjdGVkID0gbVsyXSArIChtWzNdID8gYCMke21bM119YCA6ICcnKTtcblx0XHRcdFx0aWYgKHBnLmZsYWcuaXNTYWZhcmkgJiYgLyUyNVtcXGRBLUZhLWZdezJ9Ly50ZXN0KGV4dHJhY3RlZCkpIHtcblx0XHRcdFx0XHQvLyBGaXggU2FmYXJpIGlzc3VlXG5cdFx0XHRcdFx0Ly8gU2FmYXJpIHNvbWV0aW1lcyBlbmNvZGVzICUgYXMgJTI1IGluIFVURi04IGVuY29kZWQgc3RyaW5ncyBsaWtlICVFNSVBMyAtPiAlMjVFNSUyNUEzLlxuXHRcdFx0XHRcdHRoaXMuc2V0VXRmKGRlY29kZVVSSUNvbXBvbmVudCh1bmVzY2FwZShleHRyYWN0ZWQpKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRVdGYoVGl0bGUuZGVjb2RlTmFzdGllcyhleHRyYWN0ZWQpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHN0YXRpYyBkZWNvZGVOYXN0aWVzKHR4dCkge1xuXHRcdFx0Ly8gbXlEZWNvZGVVUkkgdXNlcyBkZWNvZGVFeHRyYXMsIHdoaWNoIHJlbW92ZXMgXyxcblx0XHRcdC8vIHRodXMgcnVpbmluZyBjaXRhdGlvbnMgcHJldmlld3MsIHdoaWNoIGFyZSBmb3JtYXRlZCBhcyBcImNpdGVfbm90ZS0xXCJcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxldCByZXQgPSBkZWNvZGVVUkkoVGl0bGUuZGVjb2RlRXNjYXBlcyh0eHQpKTtcblx0XHRcdFx0cmV0ID0gcmV0LnJlcGxhY2UoL1sgX10qJC8sICcnKTtcblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRyZXR1cm4gdHh0OyAvLyBjYW5ub3QgZGVjb2RlXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIERlY29kZSB2YWxpZCAlLWVuY29kaW5ncywgb3RoZXJ3aXNlIGVzY2FwZSB0aGVtXG5cdFx0c3RhdGljIGRlY29kZUVzY2FwZXModHh0KSB7XG5cdFx0XHRjb25zdCBzcGxpdCA9IHR4dC5zcGxpdCgvKCg/OiVbXFxkQS1GYS1mXXsyfSkrKS8pO1xuXHRcdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXHRcdFx0Ly8gTm8gJS1lbmNvZGVkIGl0ZW1zIGZvdW5kLCBzbyByZXBsYWNlIHRoZSBsaXRlcmFsICVcblx0XHRcdGlmIChsZW4gPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIHNwbGl0WzBdLnJlcGxhY2UoLyUoPyFbXFxkQS1GYS1mXXsyfSkvZywgJyUyNScpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBsZW47IGkgKz0gMikge1xuXHRcdFx0XHRzcGxpdFtpXSA9IGRlY29kZVVSSUNvbXBvbmVudChzcGxpdFtpXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3BsaXQuam9pbignJyk7XG5cdFx0fVxuXHRcdGZyb21BbmNob3IoYSkge1xuXHRcdFx0aWYgKCFhKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLmZyb21VUkwoYS5ocmVmKTtcblx0XHR9XG5cdFx0ZnJvbVdpa2lUZXh0KHR4dCkge1xuXHRcdFx0Ly8gRklYTUUgLSB0ZXN0aW5nIG5lZWRlZFxuXHRcdFx0dHh0ID0gbXlEZWNvZGVVUkkodHh0KTtcblx0XHRcdHRoaXMuc2V0VXRmKHR4dCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aGludFZhbHVlKCkge1xuXHRcdFx0aWYgKCF0aGlzLnZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblx0XHRcdHJldHVybiBzYWZlRGVjb2RlVVJJKHRoaXMudmFsdWUpO1xuXHRcdH1cblx0XHR0b1VzZXJOYW1lKHdpdGhOcykge1xuXHRcdFx0aWYgKHRoaXMubmFtZXNwYWNlSWQoKSAhPT0gcGcubnNVc2VySWQgJiYgdGhpcy5uYW1lc3BhY2VJZCgpICE9PSBwZy5uc1VzZXJ0YWxrSWQpIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMudmFsdWUgPVxuXHRcdFx0XHQod2l0aE5zID8gYCR7bXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNVc2VySWRdfTpgIDogJycpICtcblx0XHRcdFx0dGhpcy5zdHJpcE5hbWVzcGFjZSgpLnNwbGl0KCcvJylbMF07XG5cdFx0fVxuXHRcdHVzZXJOYW1lKHdpdGhOcykge1xuXHRcdFx0Y29uc3QgdCA9IG5ldyBUaXRsZSh0aGlzLnZhbHVlKTtcblx0XHRcdHQudG9Vc2VyTmFtZSh3aXRoTnMpO1xuXHRcdFx0aWYgKHQudmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0dG9UYWxrUGFnZSgpIHtcblx0XHRcdC8vIGNvbnZlcnQgYXJ0aWNsZSB0byBhIHRhbGsgcGFnZSwgb3IgaWYgd2UgY2FuJ3QsIHJldHVybiBudWxsXG5cdFx0XHQvLyBJbiBvdGhlciB3b3JkczogcmV0dXJuIG51bGwgaWYgdGhpcyBBTFJFQURZIElTIGEgdGFsayBwYWdlXG5cdFx0XHQvLyBhbmQgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIHRhbGsgcGFnZSBvdGhlcndpc2Vcblx0XHRcdC8vXG5cdFx0XHQvLyBQZXIge0BsaW5rIGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9NYW51YWw6TmFtZXNwYWNlI1N1YmplY3RfYW5kX3RhbGtfbmFtZXNwYWNlc31cblx0XHRcdC8vICogQWxsIGRpc2N1c3Npb24gbmFtZXNwYWNlcyBoYXZlIG9kZC1pbnRlZ2VyIGluZGljZXNcblx0XHRcdC8vICogVGhlIGRpc2N1c3Npb24gbmFtZXNwYWNlIGluZGV4IGZvciBhIHNwZWNpZmljIG5hbWVzcGFjZSB3aXRoIGluZGV4IG4gaXMgbiArIDFcblx0XHRcdGlmICh0aGlzLnZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbmFtZXNwYWNlSWQgPSB0aGlzLm5hbWVzcGFjZUlkKCk7XG5cdFx0XHRpZiAobmFtZXNwYWNlSWQgPj0gMCAmJiBuYW1lc3BhY2VJZCAlIDIgPT09IDApIHtcblx0XHRcdFx0Ly8gbm9uLXNwZWNpYWwgYW5kIHN1YmplY3QgbmFtZXNwYWNlXG5cdFx0XHRcdGNvbnN0IGxvY2FsaXplZE5hbWVzcGFjZSA9IG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW25hbWVzcGFjZUlkICsgMV07XG5cdFx0XHRcdGlmIChsb2NhbGl6ZWROYW1lc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPVxuXHRcdFx0XHRcdFx0bG9jYWxpemVkTmFtZXNwYWNlID09PSAnJ1xuXHRcdFx0XHRcdFx0XHQ/IHRoaXMuc3RyaXBOYW1lc3BhY2UoKVxuXHRcdFx0XHRcdFx0XHQ6IGAke2xvY2FsaXplZE5hbWVzcGFjZS5zcGxpdCgnICcpLmpvaW4oJ18nKX06JHt0aGlzLnN0cmlwTmFtZXNwYWNlKCl9YDtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Ly8gUmV0dXJuIGNhbm9uaWNhbCwgbG9jYWxpemVkIG5hbWVzcGFjZVxuXHRcdG5hbWVzcGFjZSgpIHtcblx0XHRcdHJldHVybiBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVt0aGlzLm5hbWVzcGFjZUlkKCldO1xuXHRcdH1cblx0XHRuYW1lc3BhY2VJZCgpIHtcblx0XHRcdGNvbnN0IG4gPSB0aGlzLnZhbHVlLmluZGV4T2YoJzonKTtcblx0XHRcdGlmIChuID09PSAtMSkge1xuXHRcdFx0XHRyZXR1cm4gMDsgLy8gbWFpbnNwYWNlXG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuYW1lc3BhY2VJZCA9XG5cdFx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlSWRzJylbdGhpcy52YWx1ZS5zbGljZSgwLCBNYXRoLm1heCgwLCBuKSkuc3BsaXQoJyAnKS5qb2luKCdfJykudG9Mb3dlckNhc2UoKV07XG5cdFx0XHRpZiAobmFtZXNwYWNlSWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4gMDsgLy8gbWFpbnNwYWNlXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmFtZXNwYWNlSWQ7XG5cdFx0fVxuXHRcdHRhbGtQYWdlKCkge1xuXHRcdFx0Y29uc3QgdCA9IG5ldyBUaXRsZSh0aGlzLnZhbHVlKTtcblx0XHRcdHQudG9UYWxrUGFnZSgpO1xuXHRcdFx0aWYgKHQudmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aXNUYWxrUGFnZSgpIHtcblx0XHRcdGlmICh0aGlzLnRhbGtQYWdlKCkgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRvQXJ0aWNsZUZyb21UYWxrUGFnZSgpIHtcblx0XHRcdC8vIGxhcmdlbHkgY29weS9wYXN0ZSBmcm9tIHRvVGFsa1BhZ2UgYWJvdmUuXG5cdFx0XHRpZiAodGhpcy52YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5hbWVzcGFjZUlkID0gdGhpcy5uYW1lc3BhY2VJZCgpO1xuXHRcdFx0aWYgKG5hbWVzcGFjZUlkID49IDAgJiYgbmFtZXNwYWNlSWQgJSAyID09PSAxKSB7XG5cdFx0XHRcdC8vIG5vbi1zcGVjaWFsIGFuZCB0YWxrIG5hbWVzcGFjZVxuXHRcdFx0XHRjb25zdCBsb2NhbGl6ZWROYW1lc3BhY2UgPSBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtuYW1lc3BhY2VJZCAtIDFdO1xuXHRcdFx0XHRpZiAobG9jYWxpemVkTmFtZXNwYWNlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLnZhbHVlID1cblx0XHRcdFx0XHRcdGxvY2FsaXplZE5hbWVzcGFjZSA9PT0gJydcblx0XHRcdFx0XHRcdFx0PyB0aGlzLnN0cmlwTmFtZXNwYWNlKClcblx0XHRcdFx0XHRcdFx0OiBgJHtsb2NhbGl6ZWROYW1lc3BhY2Uuc3BsaXQoJyAnKS5qb2luKCdfJyl9OiR7dGhpcy5zdHJpcE5hbWVzcGFjZSgpfWA7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGFydGljbGVGcm9tVGFsa1BhZ2UoKSB7XG5cdFx0XHRjb25zdCB0ID0gbmV3IFRpdGxlKHRoaXMudmFsdWUpO1xuXHRcdFx0dC50b0FydGljbGVGcm9tVGFsa1BhZ2UoKTtcblx0XHRcdGlmICh0LnZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGFydGljbGVGcm9tVGFsa09yQXJ0aWNsZSgpIHtcblx0XHRcdGNvbnN0IHQgPSBuZXcgVGl0bGUodGhpcy52YWx1ZSk7XG5cdFx0XHRpZiAodC50b0FydGljbGVGcm9tVGFsa1BhZ2UoKSkge1xuXHRcdFx0XHRyZXR1cm4gdDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRpc0lwVXNlcigpIHtcblx0XHRcdHJldHVybiBwZy5yZS5pcFVzZXIudGVzdCh0aGlzLnVzZXJOYW1lKCkpO1xuXHRcdH1cblx0XHRzdHJpcE5hbWVzcGFjZSgpIHtcblx0XHRcdC8vIHJldHVybnMgYSBzdHJpbmcsIG5vdCBhIFRpdGxlXG5cdFx0XHRjb25zdCBuID0gdGhpcy52YWx1ZS5pbmRleE9mKCc6Jyk7XG5cdFx0XHRpZiAobiA9PT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuYW1lc3BhY2VJZCA9IHRoaXMubmFtZXNwYWNlSWQoKTtcblx0XHRcdGlmIChuYW1lc3BhY2VJZCA9PT0gcGcubnNNYWluc3BhY2VJZCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnZhbHVlLnNsaWNlKE1hdGgubWF4KDAsIG4gKyAxKSk7XG5cdFx0fVxuXHRcdHNldFV0Zih2YWx1ZSkge1xuXHRcdFx0aWYgKCF2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gJyc7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGFuY2ggPSB2YWx1ZS5pbmRleE9mKCcjJyk7XG5cdFx0XHRpZiAoYW5jaCA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlLnNwbGl0KCdfJykuam9pbignICcpO1xuXHRcdFx0XHR0aGlzLmFuY2hvciA9ICcnO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWUuc2xpY2UoMCwgTWF0aC5tYXgoMCwgYW5jaCkpLnNwbGl0KCdfJykuam9pbignICcpO1xuXHRcdFx0dGhpcy5hbmNob3IgPSB2YWx1ZS5zbGljZShNYXRoLm1heCgwLCBhbmNoICsgMSkpO1xuXHRcdFx0dGhpcy5ucyA9IG51bGw7IC8vIHdhaXQgdW50aWwgbmFtZXNwYWNlKCkgaXMgY2FsbGVkXG5cdFx0fVxuXHRcdHNldFVybCh1cmxmcmFnKSB7XG5cdFx0XHRjb25zdCBhbmNoID0gdXJsZnJhZy5pbmRleE9mKCcjJyk7XG5cdFx0XHR0aGlzLnZhbHVlID0gc2FmZURlY29kZVVSSSh1cmxmcmFnLnNsaWNlKDAsIE1hdGgubWF4KDAsIGFuY2gpKSk7XG5cdFx0XHR0aGlzLmFuY2hvciA9IHRoaXMudmFsdWUuc2xpY2UoTWF0aC5tYXgoMCwgYW5jaCArIDEpKTtcblx0XHR9XG5cdFx0YXBwZW5kKHgpIHtcblx0XHRcdHRoaXMuc2V0VXRmKHRoaXMudmFsdWUgKyB4KTtcblx0XHR9XG5cdFx0dXJsU3RyaW5nKHgpIHtcblx0XHRcdHggfHw9IHt9O1xuXHRcdFx0bGV0IHYgPSB0aGlzLnRvU3RyaW5nKHRydWUpO1xuXHRcdFx0aWYgKCF4Lm9taXRBbmNob3IgJiYgdGhpcy5hbmNob3IpIHtcblx0XHRcdFx0diArPSBgIyR7dGhpcy51cmxBbmNob3IoKX1gO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCF4LmtlZXBTcGFjZXMpIHtcblx0XHRcdFx0diA9IHYuc3BsaXQoJyAnKS5qb2luKCdfJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZW5jb2RlVVJJKHYpLnNwbGl0KCcmJykuam9pbignJTI2Jykuc3BsaXQoJz8nKS5qb2luKCclM0YnKS5zcGxpdCgnKycpLmpvaW4oJyUyQicpO1xuXHRcdH1cblx0XHRyZW1vdmVBbmNob3IoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRpdGxlKHRoaXMudG9TdHJpbmcodHJ1ZSkpO1xuXHRcdH1cblx0XHR0b1VybCgpIHtcblx0XHRcdHJldHVybiBwZy53aWtpLnRpdGxlYmFzZSArIHRoaXMudXJsU3RyaW5nKCk7XG5cdFx0fVxuXHR9XG5cdFRpdGxlLmZyb21VUkwgPSAoaCkgPT4ge1xuXHRcdHJldHVybiBuZXcgVGl0bGUoKS5mcm9tVVJMKGgpO1xuXHR9O1xuXHRUaXRsZS5mcm9tQW5jaG9yID0gKGEpID0+IHtcblx0XHRyZXR1cm4gbmV3IFRpdGxlKCkuZnJvbUFuY2hvcihhKTtcblx0fTtcblx0VGl0bGUuZnJvbVdpa2lUZXh0ID0gKHR4dCkgPT4ge1xuXHRcdHJldHVybiBuZXcgVGl0bGUoKS5mcm9tV2lraVRleHQodHh0KTtcblx0fTtcblx0Y29uc3QgcGFyc2VQYXJhbXMgPSAodXJsKSA9PiB7XG5cdFx0Y29uc3Qgc3BlY2lhbERpZmYgPSBwZy5yZS5zcGVjaWFsZGlmZi5leGVjKHVybCk7XG5cdFx0aWYgKHNwZWNpYWxEaWZmKSB7XG5cdFx0XHRjb25zdCBzcGxpdCA9IHNwZWNpYWxEaWZmWzFdLnNwbGl0KCcvJyk7XG5cdFx0XHRpZiAoc3BsaXQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0b2xkaWQ6IHNwbGl0WzBdLFxuXHRcdFx0XHRcdGRpZmY6ICdwcmV2Jyxcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSBpZiAoc3BsaXQubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0b2xkaWQ6IHNwbGl0WzBdLFxuXHRcdFx0XHRcdGRpZmY6IHNwbGl0WzFdLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCByZXQgPSB7fTtcblx0XHRpZiAoIXVybC5pbmNsdWRlcygnPycpKSB7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblx0XHRbdXJsXSA9IHVybC5zcGxpdCgnIycpO1xuXHRcdGNvbnN0IHMgPSB1cmwuc3BsaXQoJz8nKS5zbGljZSgxKS5qb2luKCcsJyk7XG5cdFx0Y29uc3QgdCA9IHMuc3BsaXQoJyYnKTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdCkge1xuXHRcdFx0Y29uc3QgeiA9IGVsZW1lbnQuc3BsaXQoJz0nKTtcblx0XHRcdHoucHVzaChudWxsKTtcblx0XHRcdFssIHJldFt6WzBdXV0gPSB6O1xuXHRcdH1cblx0XHQvLyBEaWZmIHJldmlzaW9uIHdpdGggbm8gb2xkaWQgaXMgaW50ZXJwcmV0ZWQgYXMgYSBkaWZmIHRvIHRoZSBwcmV2aW91cyByZXZpc2lvbiBieSBNZWRpYVdpa2lcblx0XHRpZiAocmV0LmRpZmYgJiYgcmV0Lm9sZGlkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldC5vbGRpZCA9ICdwcmV2Jztcblx0XHR9XG5cdFx0Ly8gRG9jdW1lbnRhdGlvbiBzZWVtcyB0byBzYXkgc29tZXRoaW5nIGRpZmZlcmVudCwgYnV0IG9sZGlkIGNhbiBhbHNvIGFjY2VwdCBwcmV2L25leHQsIGFuZFxuXHRcdC8vIEVjaG8gaXMgZW1pdHRpbmcgc3VjaCBVUkxzLiBTaW1wbGUgZml4dXAgZHVyaW5nIHBhcmFtZXRlciBkZWNvZGluZzpcblx0XHRpZiAocmV0Lm9sZGlkICYmIChyZXQub2xkaWQgPT09ICdwcmV2JyB8fCByZXQub2xkaWQgPT09ICduZXh0JyB8fCByZXQub2xkaWQgPT09ICdjdXInKSkge1xuXHRcdFx0Y29uc3QgaGVscGVyID0gcmV0LmRpZmY7XG5cdFx0XHRyZXQuZGlmZiA9IHJldC5vbGRpZDtcblx0XHRcdHJldC5vbGRpZCA9IGhlbHBlcjtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Ly8gKGEpIG15RGVjb2RlVVJJIChmaXJzdCBzdGFuZGFyZCBkZWNvZGVVUkksIHRoZW4gcGcucmUudXJsTm9Qb3B1cClcblx0Ly8gKGIpIGNoYW5nZSBzcGFjZXMgdG8gdW5kZXJzY29yZXNcblx0Ly8gKGMpIGVuY29kZVVSSSAoanVzdCB0aGUgc3RyYWlnaHQgb25lLCBubyBwZy5yZS51cmxOb1BvcHVwKVxuXHRjb25zdCBteURlY29kZVVSSSA9IChzdHIpID0+IHtcblx0XHRsZXQgcmV0O1xuXHRcdC8vIEZJWE1FIGRlY29kZVVSSUNvbXBvbmVudD8/XG5cdFx0dHJ5IHtcblx0XHRcdHJldCA9IGRlY29kZVVSSShzdHIudG9TdHJpbmcoKSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gc3RyO1xuXHRcdH1cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBnLm1pc2MuZGVjb2RlRXh0cmFzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRjb25zdCB7ZnJvbX0gPSBwZy5taXNjLmRlY29kZUV4dHJhc1tpXTtcblx0XHRcdGNvbnN0IHt0b30gPSBwZy5taXNjLmRlY29kZUV4dHJhc1tpXTtcblx0XHRcdHJldCA9IHJldC5zcGxpdChmcm9tKS5qb2luKHRvKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3Qgc2FmZURlY29kZVVSSSA9IChzdHIpID0+IHtcblx0XHRjb25zdCByZXQgPSBteURlY29kZVVSSShzdHIpO1xuXHRcdHJldHVybiByZXQgfHwgc3RyO1xuXHR9O1xuXHQvLyBURVNUUyAvL1xuXHRjb25zdCBpc0Rpc2FtYmlnID0gKGRhdGEsIGFydGljbGUpID0+IHtcblx0XHRpZiAoIWdldFZhbHVlT2YoJ3BvcHVwQWxsRGFic1N0dWJzJykgJiYgYXJ0aWNsZS5uYW1lc3BhY2UoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gIWFydGljbGUuaXNUYWxrUGFnZSgpICYmIHBnLnJlLmRpc2FtYmlnLnRlc3QoZGF0YSk7XG5cdH07XG5cdGNvbnN0IHN0dWJDb3VudCA9IChkYXRhLCBhcnRpY2xlKSA9PiB7XG5cdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cEFsbERhYnNTdHVicycpICYmIGFydGljbGUubmFtZXNwYWNlKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0bGV0IHNlY3RTdHViID0gMDtcblx0XHRsZXQgcmVhbFN0dWIgPSAwO1xuXHRcdGlmIChwZy5yZS5zdHViLnRlc3QoZGF0YSkpIHtcblx0XHRcdGNvbnN0IHMgPSBkYXRhLnNwbGl0KHBnLnJlLnN0dWIpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRcdGlmIChzW2ldKSB7XG5cdFx0XHRcdFx0KytzZWN0U3R1Yjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQrK3JlYWxTdHViO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRyZWFsOiByZWFsU3R1Yixcblx0XHRcdHNlY3Q6IHNlY3RTdHViLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IGlzVmFsaWRJbWFnZU5hbWUgPSAoc3RyKSA9PiB7XG5cdFx0cmV0dXJuICFzdHIuaW5jbHVkZXMoJ3snKTtcblx0fTtcblx0Y29uc3QgaXNJblN0cmlwcGFibGVOYW1lc3BhY2UgPSAoYXJ0aWNsZSkgPT4ge1xuXHRcdHJldHVybiBhcnRpY2xlLm5hbWVzcGFjZUlkKCkgIT09IDA7XG5cdH07XG5cdGNvbnN0IGlzSW5NYWluTmFtZXNwYWNlID0gKGFydGljbGUpID0+IHtcblx0XHRyZXR1cm4gYXJ0aWNsZS5uYW1lc3BhY2VJZCgpID09PSAwO1xuXHR9O1xuXHRjb25zdCBhbmNob3JDb250YWluc0ltYWdlID0gKGEpID0+IHtcblx0XHQvLyBpdGVyYXRlIG92ZXIgY2hpbGRyZW4gb2YgYW5jaG9yIGFcblx0XHQvLyBzZWUgaWYgYW55IGFyZSBpbWFnZXNcblx0XHRpZiAoYSA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBraWRzID0gYS5jaGlsZE5vZGVzO1xuXHRcdGZvciAoY29uc3Qga2lkIG9mIGtpZHMpIHtcblx0XHRcdGlmIChraWQubm9kZU5hbWUgPT09ICdJTUcnKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGNvbnN0IGlzUG9wdXBMaW5rID0gKGEpID0+IHtcblx0XHQvLyBOQiBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgVE9DIGxpbmtzIGdlbmVyYWxseSByZXR1cm4gdHJ1ZVxuXHRcdC8vIHRoZXkgc2hvdWxkIGJlIHN0cmlwcGVkIG91dCBsYXRlclxuXHRcdGlmICghbWFya05vcG9wdXBTcGFuTGlua3MuZG9uZSkge1xuXHRcdFx0bWFya05vcG9wdXBTcGFuTGlua3MoKTtcblx0XHR9XG5cdFx0aWYgKGEuaW5Ob3BvcHVwU3Bhbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvLyBGSVhNRSBpcyB0aGlzIGZhc3RlciBpbmxpbmU/XG5cdFx0aWYgKGEub25tb3VzZWRvd24gfHwgYS5nZXRBdHRyaWJ1dGUoJ25vcG9wdXAnKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBoID0gYS5ocmVmO1xuXHRcdGlmIChoID09PSBgJHtkb2N1bWVudC5sb2NhdGlvbi5ocmVmfSNgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghcGcucmUuYmFzZW5hbWVzLnRlc3QoaCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCFwZy5yZS51cmxOb1BvcHVwLnRlc3QoaCkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0KHBnLnJlLmVtYWlsLnRlc3QoaCkgfHwgcGcucmUuY29udHJpYnMudGVzdChoKSB8fCBwZy5yZS5iYWNrbGlua3MudGVzdChoKSB8fCBwZy5yZS5zcGVjaWFsZGlmZi50ZXN0KGgpKSAmJlxuXHRcdFx0IWguaW5jbHVkZXMoJyZsaW1pdD0nKVxuXHRcdCk7XG5cdH07XG5cdGNvbnN0IG1hcmtOb3BvcHVwU3BhbkxpbmtzID0gZnVuY3Rpb24gbWFya05vcG9wdXBTcGFuTGlua3MoKSB7XG5cdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cE9ubHlBcnRpY2xlTGlua3MnKSkge1xuXHRcdFx0Zml4VmVjdG9yTWVudVBvcHVwcygpO1xuXHRcdH1cblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRjb25zdCBzID0gJGJvZHkuZmluZCgnLm5vcG9wdXBzJykudG9BcnJheSgpO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBzKSB7XG5cdFx0XHRjb25zdCBhcyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuXHRcdFx0Zm9yIChjb25zdCBhIG9mIGFzKSB7XG5cdFx0XHRcdGEuaW5Ob3BvcHVwU3BhbiA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG1hcmtOb3BvcHVwU3BhbkxpbmtzLmRvbmUgPSB0cnVlO1xuXHR9O1xuXHRjb25zdCBmaXhWZWN0b3JNZW51UG9wdXBzID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5LmZpbmQoJ25hdi52ZWN0b3ItbWVudSBoMzpmaXJzdCBhOmZpcnN0JykucHJvcCgnaW5Ob3BvcHVwU3BhbicsIHRydWUpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiB0aXRsZXMuanNcblx0Ly8gU1RBUlRGSUxFOiBnZXRwYWdlLmpzXG5cdC8vIFdpa2ktc3BlY2lmaWMgZG93bmxvYWRpbmdcblx0Ly9cblx0Ly8gU2NoZW1hdGljIGZvciBhIGdldFdpa2kgY2FsbFxuXHQvL1xuXHQvLyAgICAgICAgICAgICBnZXRQYWdlV2l0aENhY2hpbmdcblx0Ly9cdFx0XHRcdFx0fFxuXHQvL1x0ICAgZmFsc2VcdFx0fFx0XHQgIHRydWVcblx0Ly8gZ2V0UGFnZTwtW2ZpbmRQaWN0dXJlSW5DYWNoZV0tPi1vbkNvbXBsZXRlKGEgZmFrZSBkb3dubG9hZClcblx0Ly8gICBcXC5cblx0Ly9cdCAoYXN5bmMpLT5hZGRQYWdlVG9DYWNoZShkb3dubG9hZCktPi1vbkNvbXBsZXRlKGRvd25sb2FkKVxuXHQvLyBjaGVjayBjYWNoZSB0byBzZWUgaWYgcGFnZSBleGlzdHNcblx0Y29uc3QgZ2V0UGFnZVdpdGhDYWNoaW5nID0gKHVybCwgb25Db21wbGV0ZSwgb3duZXIpID0+IHtcblx0XHRsb2coYGdldFBhZ2VXaXRoQ2FjaGluZywgdXJsPSR7dXJsfWApO1xuXHRcdGNvbnN0IGkgPSBmaW5kSW5QYWdlQ2FjaGUodXJsKTtcblx0XHRsZXQgZDtcblx0XHRpZiAoaSA+IC0xKSB7XG5cdFx0XHRkID0gZmFrZURvd25sb2FkKFxuXHRcdFx0XHR1cmwsXG5cdFx0XHRcdG93bmVyLmlkTnVtYmVyLFxuXHRcdFx0XHRvbkNvbXBsZXRlLFxuXHRcdFx0XHRwZy5jYWNoZS5wYWdlc1tpXS5kYXRhLFxuXHRcdFx0XHRwZy5jYWNoZS5wYWdlc1tpXS5sYXN0TW9kaWZpZWQsXG5cdFx0XHRcdG93bmVyXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkID0gZ2V0UGFnZSh1cmwsIG9uQ29tcGxldGUsIG93bmVyKTtcblx0XHRcdGlmIChkICYmIG93bmVyICYmIG93bmVyLmFkZERvd25sb2FkKSB7XG5cdFx0XHRcdG93bmVyLmFkZERvd25sb2FkKGQpO1xuXHRcdFx0XHRkLm93bmVyID0gb3duZXI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBnZXRQYWdlID0gKHVybCwgb25Db21wbGV0ZSwgb3duZXIpID0+IHtcblx0XHRsb2coJ2dldFBhZ2UnKTtcblx0XHRjb25zdCBjYWxsYmFjayA9IChkKSA9PiB7XG5cdFx0XHRpZiAoIWQuYWJvcnRlZCkge1xuXHRcdFx0XHRhZGRQYWdlVG9DYWNoZShkKTtcblx0XHRcdFx0b25Db21wbGV0ZShkKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiBzdGFydERvd25sb2FkKHVybCwgb3duZXIuaWROdW1iZXIsIGNhbGxiYWNrKTtcblx0fTtcblx0Y29uc3QgZmluZEluUGFnZUNhY2hlID0gKHVybCkgPT4ge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGcuY2FjaGUucGFnZXMubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmICh1cmwgPT09IHBnLmNhY2hlLnBhZ2VzW2ldLnVybCkge1xuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9O1xuXHRjb25zdCBhZGRQYWdlVG9DYWNoZSA9IChkb3dubG9hZCkgPT4ge1xuXHRcdGxvZyhgYWRkUGFnZVRvQ2FjaGUgJHtkb3dubG9hZC51cmx9YCk7XG5cdFx0Y29uc3QgcGFnZSA9IHtcblx0XHRcdHVybDogZG93bmxvYWQudXJsLFxuXHRcdFx0ZGF0YTogZG93bmxvYWQuZGF0YSxcblx0XHRcdGxhc3RNb2RpZmllZDogZG93bmxvYWQubGFzdE1vZGlmaWVkLFxuXHRcdH07XG5cdFx0cmV0dXJuIHBnLmNhY2hlLnBhZ2VzLnB1c2gocGFnZSk7XG5cdH07XG5cdC8vIEVOREZJTEU6IGdldHBhZ2UuanNcblx0Ly8gU1RBUlRGSUxFOiB0b29scy5qc1xuXHQvLyBJRSBtYWRuZXNzIHdpdGggZW5jb2Rpbmdcblx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09XG5cdC8vXG5cdC8vIHN1cHBvc2UgdGhyb3VnaG91dCB0aGF0IHRoZSBwYWdlIGlzIGluIHV0ZjgsIGxpa2Ugd2lraXBlZGlhXG5cdC8vXG5cdC8vIGlmIGEgaXMgYW4gYW5jaG9yIERPTSBlbGVtZW50IGFuZCBhLmhyZWYgc2hvdWxkIGNvbnNpc3Qgb2Zcblx0Ly9cblx0Ly8gaHR0cDovL2hvc3QubmFtZS5oZXJlL3dpa2kvZm9vP2Jhcj1iYXpcblx0Ly9cblx0Ly8gdGhlbiBJRSBnaXZlcyBmb28gYXMgXCJsYXRpbjEtZW5jb2RlZFwiIHV0Zjg7IHdlIGhhdmUgZm9vID0gZGVjb2RlX3V0ZjgoZGVjb2RlVVJJKGZvb19pZSkpXG5cdC8vIGJ1dCBJRSBnaXZlcyBiYXI9YmF6IGNvcnJlY3RseSBhcyBwbGFpbiB1dGY4XG5cdC8vXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvL1xuXHQvLyBJRSdzIHhtbGh0dHAgZG9lc24ndCB1bmRlcnN0YW5kIHV0ZjggdXJscy4gSGF2ZSB0byB1c2UgZW5jb2RlVVJJIGhlcmUuXG5cdC8vXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvL1xuXHQvLyBzdW1tYXQgZWxzZVxuXHQvLyBTb3VyY2U6IGh0dHA6Ly9ha3R1ZWxsLmRlLnNlbGZodG1sLm9yZy9hcnRpa2VsL2phdmFzY3JpcHQvdXRmOGI2NC91dGY4Lmh0bVxuXHRjb25zdCBnZXRKc09iaiA9IChqc29uKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGpzb25fcmV0ID0gSlNPTi5wYXJzZShqc29uKTtcblx0XHRcdGlmIChqc29uX3JldC53YXJuaW5ncykge1xuXHRcdFx0XHRmb3IgKGxldCB3ID0gMDsgdyA8IGpzb25fcmV0Lndhcm5pbmdzLmxlbmd0aDsgdysrKSB7XG5cdFx0XHRcdFx0aWYgKGpzb25fcmV0Lndhcm5pbmdzW3ddWycqJ10pIHtcblx0XHRcdFx0XHRcdGxvZyhqc29uX3JldC53YXJuaW5nc1t3XVsnKiddKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bG9nKGpzb25fcmV0Lndhcm5pbmdzW3ddLndhcm5pbmdzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoanNvbl9yZXQuZXJyb3IpIHtcblx0XHRcdFx0ZXJybG9nKGAke2pzb25fcmV0LmVycm9yLmNvZGV9OiAke2pzb25fcmV0LmVycm9yLmluZm99YCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ganNvbl9yZXQ7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRlcnJsb2coYFNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggZ2V0SnNPYmosIGpzb249JHtqc29ufWApO1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBhbnlDaGlsZCA9IChvYmopID0+IHtcblx0XHRmb3IgKGNvbnN0IHAgaW4gb2JqKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ob2JqLCBwKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmpbcF07XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCB1cGNhc2VGaXJzdCA9IChzdHIpID0+IHtcblx0XHRpZiAodHlwZW9mIHN0ciAhPT0gdHlwZW9mICcnIHx8IHN0ciA9PT0gJycpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0fTtcblx0Y29uc3QgZmluZEluQXJyYXkgPSAoYXJyLCBmb28pID0+IHtcblx0XHRpZiAoIWFyciB8fCBhcnIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fVxuXHRcdGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuXHRcdFx0aWYgKGFycltpXSA9PT0gZm9vKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gLTE7XG5cdH07XG5cdGNvbnN0IG5leHRPbmUgPSAoYXJyYXksIHZhbHVlKSA9PiB7XG5cdFx0Ly8gTkIgaWYgdGhlIGFycmF5IGhhcyB0d28gY29uc2VjdXRpdmUgZW50cmllcyBlcXVhbFxuXHRcdC8vXHR0aGVuIHRoaXMgd2lsbCBsb29wIG9uIHN1Y2Nlc3NpdmUgY2FsbHNcblx0XHRjb25zdCBpID0gZmluZEluQXJyYXkoYXJyYXksIHZhbHVlKTtcblx0XHRpZiAoaSA8IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gYXJyYXlbaSArIDFdO1xuXHR9O1xuXHRjb25zdCBsaXRlcmFsaXplUmVnZXggPSAoc3RyKSA9PiB7XG5cdFx0cmV0dXJuIG13LnV0aWwuZXNjYXBlUmVnRXhwKHN0cik7XG5cdH07XG5cdFN0cmluZy5wcm90b3R5cGUuZW50aWZ5ID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIGxldCBzaHkgPSAnJnNoeTsnO1xuXHRcdHJldHVybiB0aGlzLnNwbGl0KCcmJylcblx0XHRcdC5qb2luKCcmYW1wOycpXG5cdFx0XHQuc3BsaXQoJzwnKVxuXHRcdFx0LmpvaW4oJyZsdDsnKVxuXHRcdFx0LnNwbGl0KCc+Jylcblx0XHRcdC5qb2luKCcmZ3Q7JyAvKiArc2h5ICovKVxuXHRcdFx0LnNwbGl0KCdcIicpXG5cdFx0XHQuam9pbignJnF1b3Q7Jyk7XG5cdH07XG5cdC8vIEFycmF5IGZpbHRlciBmdW5jdGlvblxuXHRjb25zdCByZW1vdmVOdWxscyA9ICh2YWwpID0+IHtcblx0XHRyZXR1cm4gdmFsICE9PSBudWxsO1xuXHR9O1xuXHRjb25zdCBqb2luUGF0aCA9IChsaXN0KSA9PiB7XG5cdFx0cmV0dXJuIGxpc3QuZmlsdGVyKHJlbW92ZU51bGxzKS5qb2luKCcvJyk7XG5cdH07XG5cdGNvbnN0IHNpbXBsZVByaW50ZiA9IChzdHIsIHN1YnMpID0+IHtcblx0XHRpZiAoIXN0ciB8fCAhc3Vicykge1xuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9XG5cdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0Y29uc3QgcyA9IHN0ci5zcGxpdCgvKCVzfFxcJFxcZCspLyk7XG5cdFx0bGV0IGkgPSAwO1xuXHRcdGRvIHtcblx0XHRcdHJldC5wdXNoKHMuc2hpZnQoKSk7XG5cdFx0XHRpZiAocy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjbWQgPSBzLnNoaWZ0KCk7XG5cdFx0XHRpZiAoY21kID09PSAnJXMnKSB7XG5cdFx0XHRcdGlmIChpIDwgc3Vicy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXQucHVzaChzdWJzW2ldKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXQucHVzaChjbWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCsraTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IGogPSBOdW1iZXIucGFyc2VJbnQoY21kLnJlcGxhY2UoJyQnLCAnJyksIDEwKSAtIDE7XG5cdFx0XHRcdGlmIChqID4gLTEgJiYgaiA8IHN1YnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goc3Vic1tqXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goY21kKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gd2hpbGUgKHMubGVuZ3RoID4gMCk7XG5cdFx0cmV0dXJuIHJldC5qb2luKCcnKTtcblx0fTtcblx0Y29uc3QgaXNTdHJpbmcgPSAoeCkgPT4ge1xuXHRcdHJldHVybiB0eXBlb2YgeCA9PT0gJ3N0cmluZycgfHwgeCBpbnN0YW5jZW9mIFN0cmluZztcblx0fTtcblx0Y29uc3QgaXNOdW1iZXIgPSAoeCkgPT4ge1xuXHRcdHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcicgfHwgeCBpbnN0YW5jZW9mIE51bWJlcjtcblx0fTtcblx0Y29uc3QgaXNSZWdFeHAgPSAoeCkgPT4ge1xuXHRcdHJldHVybiB4IGluc3RhbmNlb2YgUmVnRXhwO1xuXHR9O1xuXHRjb25zdCBpc0FycmF5ID0gKHgpID0+IHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSh4KTtcblx0fTtcblx0Y29uc3QgaXNPYmplY3QgPSAoeCkgPT4ge1xuXHRcdHJldHVybiB4IGluc3RhbmNlb2YgT2JqZWN0O1xuXHR9O1xuXHRjb25zdCBpc0Z1bmN0aW9uID0gKHgpID0+IHtcblx0XHRyZXR1cm4gIWlzUmVnRXhwKHgpICYmICh0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCB4IGluc3RhbmNlb2YgRnVuY3Rpb24pO1xuXHR9O1xuXHRjb25zdCByZXBlYXRTdHJpbmcgPSAocywgbXVsdCkgPT4ge1xuXHRcdGxldCByZXQgPSAnJztcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG11bHQ7ICsraSkge1xuXHRcdFx0cmV0ICs9IHM7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IHplcm9GaWxsID0gKHMsIG1pbikgPT4ge1xuXHRcdG1pbiB8fD0gMjtcblx0XHRjb25zdCB0ID0gcy50b1N0cmluZygpO1xuXHRcdHJldHVybiByZXBlYXRTdHJpbmcoJzAnLCBtaW4gLSB0Lmxlbmd0aCkgKyB0O1xuXHR9O1xuXHRjb25zdCBtYXAgPSAoZiwgbykgPT4ge1xuXHRcdGlmIChpc0FycmF5KG8pKSB7XG5cdFx0XHRyZXR1cm4gbWFwX2FycmF5KGYsIG8pO1xuXHRcdH1cblx0XHRyZXR1cm4gbWFwX29iamVjdChmLCBvKTtcblx0fTtcblx0Y29uc3QgbWFwX2FycmF5ID0gKGYsIG8pID0+IHtcblx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygbykge1xuXHRcdFx0cmV0LnB1c2goZihlbGVtZW50KSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IG1hcF9vYmplY3QgPSAoZiwgbykgPT4ge1xuXHRcdGNvbnN0IHJldCA9IHt9O1xuXHRcdGZvciAoY29uc3QgaSBpbiBvKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24obywgaSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRyZXRbb10gPSBmKG9baV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRwZy5lc2NhcGVRdW90ZXNIVE1MID0gKHRleHQpID0+IHtcblx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuXHR9O1xuXHRwZy51bmVzY2FwZVF1b3Rlc0hUTUwgPSAoaHRtbCkgPT4ge1xuXHRcdC8vIEZyb20ge0BsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83Mzk0Nzg3fVxuXHRcdC8vIFRoaXMgc2VlbXMgdG8gYmUgaW1wbGVtZW50ZWQgY29ycmVjdGx5IG9uIGFsbCBtYWpvciBicm93c2VycyBub3csIHNvIHdlXG5cdFx0Ly8gZG9uJ3QgaGF2ZSB0byBtYWtlIG91ciBvd24gZnVuY3Rpb24uXG5cdFx0Y29uc3QgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblx0XHR0eHQuaW5uZXJIVE1MID0gaHRtbDtcblx0XHRyZXR1cm4gdHh0LnZhbHVlO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiB0b29scy5qc1xuXHQvLyBTVEFSVEZJTEU6IGRhYi5qc1xuXHQvLyBEYWItZml4aW5nIGNvZGVcblx0Ly9cblx0Y29uc3QgcmV0YXJnZXREYWIgPSAobmV3VGFyZ2V0LCBvbGRUYXJnZXQsIGZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lLCB0aXRsZVRvRWRpdCkgPT4ge1xuXHRcdGxvZyhgcmV0YXJnZXREYWI6IG5ld1RhcmdldD0ke25ld1RhcmdldH0gb2xkVGFyZ2V0PSR7b2xkVGFyZ2V0fWApO1xuXHRcdHJldHVybiBjaGFuZ2VMaW5rVGFyZ2V0TGluayh7XG5cdFx0XHRuZXdUYXJnZXQsXG5cdFx0XHR0ZXh0OiBuZXdUYXJnZXQuc3BsaXQoJyAnKS5qb2luKCcmbmJzcDsnKSxcblx0XHRcdGhpbnQ6IHRwcmludGYoJ2Rpc2FtYmlnSGludCcsIFtuZXdUYXJnZXRdKSxcblx0XHRcdHN1bW1hcnk6IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cEZpeERhYnNTdW1tYXJ5JyksIFtmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZSwgbmV3VGFyZ2V0XSksXG5cdFx0XHRjbGlja0J1dHRvbjogZ2V0VmFsdWVPZigncG9wdXBEYWJzQXV0b0NsaWNrJyksXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHRcdG9sZFRhcmdldCxcblx0XHRcdHdhdGNoOiBnZXRWYWx1ZU9mKCdwb3B1cFdhdGNoRGlzYW1iaWdnZWRQYWdlcycpLFxuXHRcdFx0dGl0bGU6IHRpdGxlVG9FZGl0LFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBsaXN0TGlua3MgPSAod2lraXRleHQsIG9sZFRhcmdldCwgdGl0bGVUb0VkaXQpID0+IHtcblx0XHQvLyBtZWRpYXdpa2kgc3RyaXBzIHRyYWlsaW5nIHNwYWNlcywgc28gd2UgZG8gdGhlIHNhbWVcblx0XHQvLyB0ZXN0Y2FzZToge0BsaW5rIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93L2luZGV4LnBocD90aXRsZT1SYWRpYWwmb2xkaWQ9OTczNjU2MzN9XG5cdFx0Y29uc3QgcmVnID0gL1xcW1xcWyhbXnxdKj8pICooXFx8fF1dKS9naTtcblx0XHRsZXQgcmV0ID0gW107XG5cdFx0Y29uc3Qgc3BsaXR0ZWQgPSB3aWtpdGV4dC5zcGxpdChyZWcpO1xuXHRcdC8vIF5bYS16XSsgc2hvdWxkIG1hdGNoIGludGVyd2lraSBsaW5rcywgaG9wZWZ1bGx5IChjYXNlLWluc2Vuc2l0aXZlKVxuXHRcdC8vIGFuZCBeW2Etel0qIHNob3VsZCBtYXRjaCB0aG9zZSBhbmQgW1s6Q2F0ZWdvcnkuLi5dXSBzdHlsZSBsaW5rcyB0b29cblx0XHRjb25zdCBvbWl0UmVnZXggPSAvXlthLXpdKjp8XltTc11wZWNpYWw6fF5bSWldbWFnZXxeW0NjXWF0ZWdvcnkvO1xuXHRcdGNvbnN0IGZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lID0gb2xkVGFyZ2V0LnRvU3RyaW5nKCk7XG5cdFx0Y29uc3Qgd2lrUG9zID0gZ2V0VmFsdWVPZigncG9wdXBEYWJXaWt0aW9uYXJ5Jyk7XG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBzcGxpdHRlZC5sZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0aWYgKHR5cGVvZiBzcGxpdHRlZFtpXSA9PT0gdHlwZW9mICdzdHJpbmcnICYmIHNwbGl0dGVkW2ldLmxlbmd0aCA+IDAgJiYgIW9taXRSZWdleC50ZXN0KHNwbGl0dGVkW2ldKSkge1xuXHRcdFx0XHRyZXQucHVzaChyZXRhcmdldERhYihzcGxpdHRlZFtpXSwgb2xkVGFyZ2V0LCBmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZSwgdGl0bGVUb0VkaXQpKTtcblx0XHRcdH0gLyogaWYgKi9cblx0XHR9IC8qIGZvciBsb29wICovXG5cdFx0cmV0ID0gcm1EdXBlc0Zyb21Tb3J0ZWRMaXN0KHJldC5zb3J0KCkpO1xuXHRcdGlmICh3aWtQb3MpIHtcblx0XHRcdGNvbnN0IHdpa1RhcmdldCA9IGB3aWt0aW9uYXJ5OiR7ZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWUucmVwbGFjZSgvXiguKylcXHMrXFwoW14pXStcXClcXHMqJC8sICckMScpfWA7XG5cdFx0XHRjb25zdCBtZXRoID0gd2lrUG9zLnRvTG93ZXJDYXNlKCkgPT09ICdmaXJzdCcgPyAndW5zaGlmdCcgOiAncHVzaCc7XG5cdFx0XHRyZXRbbWV0aF0ocmV0YXJnZXREYWIod2lrVGFyZ2V0LCBvbGRUYXJnZXQsIGZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lLCB0aXRsZVRvRWRpdCkpO1xuXHRcdH1cblx0XHRyZXQucHVzaChcblx0XHRcdGNoYW5nZUxpbmtUYXJnZXRMaW5rKHtcblx0XHRcdFx0bmV3VGFyZ2V0OiBudWxsLFxuXHRcdFx0XHR0ZXh0OiBwb3B1cFN0cmluZygncmVtb3ZlIHRoaXMgbGluaycpLnNwbGl0KCcgJykuam9pbignJm5ic3A7JyksXG5cdFx0XHRcdGhpbnQ6IHBvcHVwU3RyaW5nKCdyZW1vdmUgYWxsIGxpbmtzIHRvIHRoaXMgZGlzYW1iaWcgcGFnZSBmcm9tIHRoaXMgYXJ0aWNsZScpLFxuXHRcdFx0XHRjbGlja0J1dHRvbjogZ2V0VmFsdWVPZigncG9wdXBEYWJzQXV0b0NsaWNrJyksXG5cdFx0XHRcdG9sZFRhcmdldCxcblx0XHRcdFx0c3VtbWFyeTogc2ltcGxlUHJpbnRmKGdldFZhbHVlT2YoJ3BvcHVwUm1EYWJMaW5rU3VtbWFyeScpLCBbZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWVdKSxcblx0XHRcdFx0d2F0Y2g6IGdldFZhbHVlT2YoJ3BvcHVwV2F0Y2hEaXNhbWJpZ2dlZFBhZ2VzJyksXG5cdFx0XHRcdHRpdGxlOiB0aXRsZVRvRWRpdCxcblx0XHRcdH0pXG5cdFx0KTtcblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBybUR1cGVzRnJvbVNvcnRlZExpc3QgPSAobGlzdCkgPT4ge1xuXHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBsaXN0KSB7XG5cdFx0XHRpZiAocmV0Lmxlbmd0aCA9PT0gMCB8fCBlbGVtZW50ICE9PSByZXQuYXQoLTEpKSB7XG5cdFx0XHRcdHJldC5wdXNoKGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBtYWtlRml4RGFiID0gKGRhdGEsIG5hdnBvcCkgPT4ge1xuXHRcdC8vIGdyYWIgdGl0bGUgZnJvbSBwYXJlbnQgcG9wdXAgaWYgdGhlcmUgaXMgb25lOyBkZWZhdWx0IGV4aXN0cyBpbiBjaGFuZ2VMaW5rVGFyZ2V0TGlua1xuXHRcdGNvbnN0IHRpdGxlVG9FZGl0ID0gbmF2cG9wLnBhcmVudFBvcHVwICYmIG5hdnBvcC5wYXJlbnRQb3B1cC5hcnRpY2xlLnRvU3RyaW5nKCk7XG5cdFx0Y29uc3QgbGlzdCA9IGxpc3RMaW5rcyhkYXRhLCBuYXZwb3Aub3JpZ2luYWxBcnRpY2xlLCB0aXRsZVRvRWRpdCk7XG5cdFx0aWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRsb2coJ2xpc3RMaW5rcyByZXR1cm5lZCBlbXB0eSBsaXN0Jyk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IGh0bWwgPSBgPGhyPiR7cG9wdXBTdHJpbmcoJ0NsaWNrIHRvIGRpc2FtYmlndWF0ZSB0aGlzIGxpbmsgdG86Jyl9PGJyPmA7XG5cdFx0aHRtbCArPSBsaXN0LmpvaW4oJywgJyk7XG5cdFx0cmV0dXJuIGh0bWw7XG5cdH07XG5cdGNvbnN0IG1ha2VGaXhEYWJzID0gKHdpa2lUZXh0LCBuYXZwb3ApID0+IHtcblx0XHRpZiAoXG5cdFx0XHRnZXRWYWx1ZU9mKCdwb3B1cEZpeERhYnMnKSAmJlxuXHRcdFx0aXNEaXNhbWJpZyh3aWtpVGV4dCwgbmF2cG9wLmFydGljbGUpICYmXG5cdFx0XHRUaXRsZS5mcm9tVVJMKGxvY2F0aW9uLmhyZWYpLm5hbWVzcGFjZUlkKCkgIT09IHBnLm5zU3BlY2lhbElkICYmXG5cdFx0XHRuYXZwb3AuYXJ0aWNsZS50YWxrUGFnZSgpXG5cdFx0KSB7XG5cdFx0XHRzZXRQb3B1cEhUTUwobWFrZUZpeERhYih3aWtpVGV4dCwgbmF2cG9wKSwgJ3BvcHVwRml4RGFiJywgbmF2cG9wLmlkTnVtYmVyKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHBvcHVwUmVkbGlua0hUTUwgPSAoYXJ0aWNsZSkgPT4ge1xuXHRcdHJldHVybiBjaGFuZ2VMaW5rVGFyZ2V0TGluayh7XG5cdFx0XHRuZXdUYXJnZXQ6IG51bGwsXG5cdFx0XHR0ZXh0OiBwb3B1cFN0cmluZygncmVtb3ZlIHRoaXMgbGluaycpLnNwbGl0KCcgJykuam9pbignJm5ic3A7JyksXG5cdFx0XHRoaW50OiBwb3B1cFN0cmluZygncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnKSxcblx0XHRcdGNsaWNrQnV0dG9uOiBnZXRWYWx1ZU9mKCdwb3B1cFJlZGxpbmtBdXRvQ2xpY2snKSxcblx0XHRcdG9sZFRhcmdldDogYXJ0aWNsZS50b1N0cmluZygpLFxuXHRcdFx0c3VtbWFyeTogc2ltcGxlUHJpbnRmKGdldFZhbHVlT2YoJ3BvcHVwUmVkbGlua1N1bW1hcnknKSwgW2FydGljbGUudG9TdHJpbmcoKV0pLFxuXHRcdH0pO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBkYWIuanNcblx0Ly8gU1RBUlRGSUxFOiBodG1sb3V0cHV0LmpzXG5cdC8vIHRoaXMgaGFzIHRvIHVzZSBhIHRpbWVyIGxvb3AgYXMgd2UgZG9uJ3Qga25vdyBpZiB0aGUgRE9NIGVsZW1lbnQgZXhpc3RzIHdoZW4gd2Ugd2FudCB0byBzZXQgdGhlIHRleHRcblx0Y29uc3Qgc2V0UG9wdXBIVE1MID0gZnVuY3Rpb24gc2V0UG9wdXBIVE1MKHN0ciwgZWxlbWVudElkLCBwb3B1cElkLCBvblN1Y2Nlc3MsIGFwcGVuZCkge1xuXHRcdGlmIChwb3B1cElkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIGNvbnNvbGUuZXJyb3IoJ1tQb3B1cHNdIHBvcHVwSWQgaXMgbm90IGRlZmluZWQgaW4gc2V0UG9wdXBIVE1MLCBodG1sPScrc3RyLnN1YnN0cmluZygwLDEwMCkpO1xuXHRcdFx0cG9wdXBJZCA9IHBnLmlkTnVtYmVyO1xuXHRcdH1cblx0XHRjb25zdCBwb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtlbGVtZW50SWR9JHtwb3B1cElkfWApO1xuXHRcdGlmIChwb3B1cEVsZW1lbnQpIHtcblx0XHRcdGlmICghYXBwZW5kKSB7XG5cdFx0XHRcdHBvcHVwRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblx0XHRcdH1cblx0XHRcdGlmIChpc1N0cmluZyhzdHIpKSB7XG5cdFx0XHRcdHBvcHVwRWxlbWVudC5pbm5lckhUTUwgKz0gc3RyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cG9wdXBFbGVtZW50LmFwcGVuZChzdHIpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG9uU3VjY2Vzcykge1xuXHRcdFx0XHRvblN1Y2Nlc3MoKTtcblx0XHRcdH1cblx0XHRcdHNldFRpbWVvdXQoY2hlY2tQb3B1cFBvc2l0aW9uLCAxMDApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdC8vIGNhbGwgdGhpcyBmdW5jdGlvbiBhZ2FpbiBpbiBhIGxpdHRsZSB3aGlsZS4uLlxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0c2V0UG9wdXBIVE1MKHN0ciwgZWxlbWVudElkLCBwb3B1cElkLCBvblN1Y2Nlc3MpO1xuXHRcdH0sIDYwMCk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IHNldFBvcHVwVHJhaWxlciA9IChzdHIsIGlkKSA9PiB7XG5cdFx0cmV0dXJuIHNldFBvcHVwSFRNTChzdHIsICdwb3B1cERhdGEnLCBpZCk7XG5cdH07XG5cdC8vIGFyZ3MubmF2cG9wdXAgaXMgbWFuZGF0b3J5XG5cdC8vIG9wdGlvbmFsOiBhcmdzLnJlZGlyLCBhcmdzLnJlZGlyVGFyZ2V0XG5cdC8vIEZJWE1FOiB5ZSBnb2RzLCB0aGlzIGlzIHVnbHkgc3R1ZmZcblx0Y29uc3QgZmlsbEVtcHR5U3BhbnMgPSAoYXJncykgPT4ge1xuXHRcdC8vIGlmIHJlZGlyIGlzIHByZXNlbnQgYW5kIHRydWUgdGhlbiByZWRpclRhcmdldCBpcyBtYW5kYXRvcnlcblx0XHRsZXQgcmVkaXIgPSB0cnVlO1xuXHRcdGxldCByY2lkO1xuXHRcdGlmICh0eXBlb2YgYXJncyAhPT0gJ29iamVjdCcgfHwgYXJncy5yZWRpciA9PT0gdW5kZWZpbmVkIHx8ICFhcmdzLnJlZGlyKSB7XG5cdFx0XHRyZWRpciA9IGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBhID0gYXJncy5uYXZwb3B1cC5wYXJlbnRBbmNob3I7XG5cdFx0bGV0IGFydGljbGU7XG5cdFx0bGV0IGhpbnQ7XG5cdFx0bGV0IG9sZGlkO1xuXHRcdGxldCBwYXJhbXMgPSB7fTtcblx0XHRpZiAocmVkaXIgJiYgdHlwZW9mIGFyZ3MucmVkaXJUYXJnZXQgPT09IHR5cGVvZiB7fSkge1xuXHRcdFx0YXJ0aWNsZSA9IGFyZ3MucmVkaXJUYXJnZXQ7XG5cdFx0XHQvLyBoaW50PWFydGljbGUuaGludFZhbHVlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFydGljbGUgPSBuZXcgVGl0bGUoKS5mcm9tQW5jaG9yKGEpO1xuXHRcdFx0aGludCA9IGEub3JpZ2luYWxUaXRsZSB8fCBhcnRpY2xlLmhpbnRWYWx1ZSgpO1xuXHRcdFx0cGFyYW1zID0gcGFyc2VQYXJhbXMoYS5ocmVmKTtcblx0XHRcdG9sZGlkID0gZ2V0VmFsdWVPZigncG9wdXBIaXN0b3JpY2FsTGlua3MnKSA/IHBhcmFtcy5vbGRpZCA6IG51bGw7XG5cdFx0XHQoe3JjaWR9ID0gcGFyYW1zKTtcblx0XHR9XG5cdFx0Y29uc3QgeCA9IHtcblx0XHRcdGFydGljbGUsXG5cdFx0XHRoaW50LFxuXHRcdFx0b2xkaWQsXG5cdFx0XHRyY2lkLFxuXHRcdFx0bmF2cG9wOiBhcmdzLm5hdnBvcHVwLFxuXHRcdFx0cGFyYW1zLFxuXHRcdH07XG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gcGcuc3RydWN0dXJlc1tnZXRWYWx1ZU9mKCdwb3B1cFN0cnVjdHVyZScpXTtcblx0XHRpZiAodHlwZW9mIHN0cnVjdHVyZSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHNldFBvcHVwSFRNTChcblx0XHRcdFx0J3BvcHVwRXJyb3InLFxuXHRcdFx0XHRgVW5rbm93biBzdHJ1Y3R1cmUgKHRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbik6ICR7cGcub3B0aW9uLnBvcHVwU3RydWN0dXJlfWAsXG5cdFx0XHRcdGFyZ3MubmF2cG9wdXAuaWROdW1iZXJcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHNwYW5zID0gZmxhdHRlbihwZy5taXNjLmxheW91dCk7XG5cdFx0Y29uc3QgbnVtc3BhbnMgPSBzcGFucy5sZW5ndGg7XG5cdFx0Y29uc3QgcmVkaXJzID0gcGcubWlzYy5yZWRpclNwYW5zO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbnVtc3BhbnM7ICsraSkge1xuXHRcdFx0Y29uc3QgZm91bmQgPSByZWRpcnMgJiYgcmVkaXJzLmluY2x1ZGVzKHNwYW5zW2ldKTtcblx0XHRcdC8vIGxvZygncmVkaXI9JyArIHJlZGlyICsgJywgZm91bmQ9JyArIGZvdW5kICsgJywgc3BhbnNbaV09JyArIHNwYW5zW2ldKTtcblx0XHRcdGlmICgoZm91bmQgJiYgIXJlZGlyKSB8fCAoIWZvdW5kICYmIHJlZGlyKSkge1xuXHRcdFx0XHQvLyBsb2coJ3NraXBwaW5nIHRoaXMgc2V0IG9mIHRoZSBsb29wJyk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgc3RydWN0dXJlZm4gPSBzdHJ1Y3R1cmVbc3BhbnNbaV1dO1xuXHRcdFx0aWYgKHN0cnVjdHVyZWZuID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gbm90aGluZyB0byBkbyBmb3IgdGhpcyBzdHJ1Y3R1cmUgcGFydFxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGxldCBzZXRmbiA9IHNldFBvcHVwSFRNTDtcblx0XHRcdGlmIChcblx0XHRcdFx0Z2V0VmFsdWVPZigncG9wdXBBY3RpdmVOYXZsaW5rcycpICYmXG5cdFx0XHRcdChzcGFuc1tpXS5pbmRleE9mKCdwb3B1cFRvcExpbmtzJykgPT09IDAgfHwgc3BhbnNbaV0uaW5kZXhPZigncG9wdXBSZWRpclRvcExpbmtzJykgPT09IDApXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0Zm4gPSBzZXRQb3B1cFRpcHNBbmRIVE1MO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoICh0eXBlb2Ygc3RydWN0dXJlZm4pIHtcblx0XHRcdFx0Y2FzZSAnZnVuY3Rpb24nOlxuXHRcdFx0XHRcdGxvZyhgcnVubmluZyAke3NwYW5zW2ldfSh7XG5cdFx0XHRcdFx0XHRhcnRpY2xlOiR7eC5hcnRpY2xlfSwgaGludDoke3guaGludH0sIG9sZGlkOiAke3gub2xkaWR9fSlgKTtcblx0XHRcdFx0XHRzZXRmbihzdHJ1Y3R1cmVmbih4KSwgc3BhbnNbaV0sIGFyZ3MubmF2cG9wdXAuaWROdW1iZXIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdFx0XHRcdHNldGZuKHN0cnVjdHVyZWZuLCBzcGFuc1tpXSwgYXJncy5uYXZwb3B1cC5pZE51bWJlcik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0ZXJybG9nKGB1bmtub3duIHRoaW5nIHdpdGggbGFiZWwgJHtzcGFuc1tpXX0gKHNwYW4gaW5kZXggd2FzICR7aX0pYCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHQvLyBmbGF0dGVuIGFuIGFycmF5XG5cdGNvbnN0IGZsYXR0ZW4gPSBmdW5jdGlvbiBmbGF0dGVuKGxpc3QsIHN0YXJ0KSB7XG5cdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0aWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHN0YXJ0ID0gMDtcblx0XHR9XG5cdFx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKHR5cGVvZiBsaXN0W2ldID09PSB0eXBlb2YgW10pIHtcblx0XHRcdFx0cmV0dXJuIFsuLi5yZXQsIC4uLmZsYXR0ZW4obGlzdFtpXSksIC4uLmZsYXR0ZW4obGlzdCwgaSArIDEpXTtcblx0XHRcdH1cblx0XHRcdHJldC5wdXNoKGxpc3RbaV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHQvLyBHZW5lcmF0ZSBodG1sIGZvciB3aG9sZSBwb3B1cFxuXHRjb25zdCBwb3B1cEhUTUwgPSBmdW5jdGlvbiBwb3B1cEhUTUwoYSkge1xuXHRcdGdldFZhbHVlT2YoJ3BvcHVwU3RydWN0dXJlJyk7XG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gcGcuc3RydWN0dXJlc1twZy5vcHRpb24ucG9wdXBTdHJ1Y3R1cmVdO1xuXHRcdGlmICh0eXBlb2Ygc3RydWN0dXJlICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0Ly8gcmV0dXJuICdVbmtub3duIHN0cnVjdHVyZTogJytwZy5vcHRpb24ucG9wdXBTdHJ1Y3R1cmU7XG5cdFx0XHQvLyBvdmVycmlkZSB1c2VyIGNob2ljZVxuXHRcdFx0cGcub3B0aW9uLnBvcHVwU3RydWN0dXJlID0gcGcub3B0aW9uRGVmYXVsdC5wb3B1cFN0cnVjdHVyZTtcblx0XHRcdHJldHVybiBwb3B1cEhUTUwoYSk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygc3RydWN0dXJlLnBvcHVwTGF5b3V0ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gJ0JhZCBsYXlvdXQnO1xuXHRcdH1cblx0XHRwZy5taXNjLmxheW91dCA9IHN0cnVjdHVyZS5wb3B1cExheW91dCgpO1xuXHRcdHBnLm1pc2MucmVkaXJTcGFucyA9IHR5cGVvZiBzdHJ1Y3R1cmUucG9wdXBSZWRpclNwYW5zID09PSAnZnVuY3Rpb24nID8gc3RydWN0dXJlLnBvcHVwUmVkaXJTcGFucygpIDogW107XG5cdFx0cmV0dXJuIG1ha2VFbXB0eVNwYW5zKHBnLm1pc2MubGF5b3V0LCBhLm5hdnBvcHVwKTtcblx0fTtcblx0Y29uc3QgbWFrZUVtcHR5U3BhbnMgPSBmdW5jdGlvbiBtYWtlRW1wdHlTcGFucyhsaXN0LCBuYXZwb3ApIHtcblx0XHRsZXQgcmV0ID0gJyc7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGxpc3QpIHtcblx0XHRcdGlmICh0eXBlb2YgZWxlbWVudCA9PT0gdHlwZW9mICcnKSB7XG5cdFx0XHRcdHJldCArPSBlbXB0eVNwYW5IVE1MKGVsZW1lbnQsIG5hdnBvcC5pZE51bWJlciwgJ2RpdicpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gdHlwZW9mIFtdICYmIGVsZW1lbnQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRyZXQgPSByZXQuc3BsaXQoLyg8XFwvW14+XSo/PiQpLykuam9pbihtYWtlRW1wdHlTcGFucyhlbGVtZW50LCBuYXZwb3ApKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09IHR5cGVvZiB7fSAmJiBlbGVtZW50Lm5vZGVUeXBlKSB7XG5cdFx0XHRcdHJldCArPSBlbXB0eVNwYW5IVE1MKGVsZW1lbnQubmFtZSwgbmF2cG9wLmlkTnVtYmVyLCBlbGVtZW50Lm5vZGVUeXBlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgZW1wdHlTcGFuSFRNTCA9IGZ1bmN0aW9uIGVtcHR5U3BhbkhUTUwobmFtZSwgaWQsIHRhZywgY2xhc3NuYW1lKSB7XG5cdFx0dGFnIHx8PSAnc3Bhbic7XG5cdFx0Y2xhc3NuYW1lIHx8PSBlbXB0eVNwYW5IVE1MLmNsYXNzQWxpYXNlc1tuYW1lXTtcblx0XHRjbGFzc25hbWUgfHw9IG5hbWU7XG5cdFx0aWYgKG5hbWUgPT09IGdldFZhbHVlT2YoJ3BvcHVwRHJhZ0hhbmRsZScpKSB7XG5cdFx0XHRjbGFzc25hbWUgKz0gJyBwb3B1cERyYWdIYW5kbGUnO1xuXHRcdH1cblx0XHRyZXR1cm4gc2ltcGxlUHJpbnRmKCc8JXMgaWQ9XCIlc1wiIGNsYXNzPVwiJXNcIj48LyVzPicsIFt0YWcsIG5hbWUgKyBpZCwgY2xhc3NuYW1lLCB0YWddKTtcblx0fTtcblx0ZW1wdHlTcGFuSFRNTC5jbGFzc0FsaWFzZXMgPSB7XG5cdFx0cG9wdXBTZWNvbmRQcmV2aWV3OiAncG9wdXBQcmV2aWV3Jyxcblx0fTtcblx0Ly8gZ2VuZXJhdGUgaHRtbCBmb3IgcG9wdXAgaW1hZ2Vcblx0Ly8gPGEgaWQ9XCJwb3B1cEltYWdlTGlua25cIj48aW1nIGlkPVwicG9wdXBJbWFnZW5cIj5cblx0Ly8gd2hlcmUgbj1pZE51bWJlclxuXHRjb25zdCBpbWFnZUhUTUwgPSAoX2FydGljbGUsIGlkTnVtYmVyKSA9PiB7XG5cdFx0cmV0dXJuIHNpbXBsZVByaW50Zihcblx0XHRcdCc8YSBpZD1cInBvcHVwSW1hZ2VMaW5rJDFcIj4nICtcblx0XHRcdFx0JzxpbWcgYWxpZ249XCJyaWdodFwiIHZhbGlnbj1cInRvcFwiIGlkPVwicG9wdXBJbWckMVwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+PC9pbWc+JyArXG5cdFx0XHRcdCc8L2E+Jyxcblx0XHRcdFtpZE51bWJlcl1cblx0XHQpO1xuXHR9O1xuXHRjb25zdCBwb3BUaXBzU29vbkZuID0gKGlkLCB3aGVuLCBwb3BEYXRhKSA9PiB7XG5cdFx0d2hlbiB8fD0gMjUwO1xuXHRcdGNvbnN0IHBvcFRpcHMgPSAoKSA9PiB7XG5cdFx0XHRzZXR1cFRvb2x0aXBzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApLCBmYWxzZSwgdHJ1ZSwgcG9wRGF0YSk7XG5cdFx0fTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0c2V0VGltZW91dChwb3BUaXBzLCB3aGVuLCBwb3BEYXRhKTtcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBzZXRQb3B1cFRpcHNBbmRIVE1MID0gKGh0bWwsIGRpdm5hbWUsIGlkbnVtYmVyLCBwb3BEYXRhKSA9PiB7XG5cdFx0c2V0UG9wdXBIVE1MKFxuXHRcdFx0aHRtbCxcblx0XHRcdGRpdm5hbWUsXG5cdFx0XHRpZG51bWJlcixcblx0XHRcdGdldFZhbHVlT2YoJ3BvcHVwU3VicG9wdXBzJykgPyBwb3BUaXBzU29vbkZuKGRpdm5hbWUgKyBpZG51bWJlciwgbnVsbCwgcG9wRGF0YSkgOiBudWxsXG5cdFx0KTtcblx0fTtcblx0Ly8gRU5ERklMRTogaHRtbG91dHB1dC5qc1xuXHQvLyBTVEFSVEZJTEU6IG1vdXNlb3V0LmpzXG5cdC8vIGZ1enp5IGNoZWNrc1xuXHRjb25zdCBmdXp6eUN1cnNvck9mZk1lbnVzID0gKF94LCBfeSwgX2Z1enosIHBhcmVudCkgPT4ge1xuXHRcdGlmICghcGFyZW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgdWxzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsJyk7XG5cdFx0Zm9yIChjb25zdCB1bCBvZiB1bHMpIHtcblx0XHRcdGlmICh1bC5jbGFzc05hbWUgPT09ICdwb3B1cF9tZW51JyAmJiB1bC5vZmZzZXRXaWR0aCA+IDApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSAvLyBlbHNlIHsgZG9jdW1lbnQudGl0bGUrPScuJzsgfVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0Y29uc3QgY2hlY2tQb3B1cFBvc2l0aW9uID0gKCkgPT4ge1xuXHRcdC8vIHN0b3AgdGhlIHBvcHVwIHJ1bm5pbmcgb2ZmIHRoZSByaWdodCBvZiB0aGUgc2NyZWVuXG5cdFx0Ly8gRklYTUUgYXZvaWQgcGcuY3VycmVudC5saW5rXG5cdFx0aWYgKHBnLmN1cnJlbnQubGluayAmJiBwZy5jdXJyZW50LmxpbmsubmF2cG9wdXApIHtcblx0XHRcdHBnLmN1cnJlbnQubGluay5uYXZwb3B1cC5saW1pdEhvcml6b250YWxQb3NpdGlvbigpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgbW91c2VPdXRXaWtpTGluayA9IGZ1bmN0aW9uIG1vdXNlT3V0V2lraUxpbmsoKSB7XG5cdFx0Ly8gY29uc29sZSAoJ21vdXNlT3V0V2lraUxpbmsnKTtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRyZW1vdmVNb2RpZmllcktleUxpc3RlbmVyKHNlbGYpO1xuXHRcdGlmIChzZWxmLm5hdnBvcHVwID09PSBudWxsIHx8IHNlbGYubmF2cG9wdXAgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXNlbGYubmF2cG9wdXAuaXNWaXNpYmxlKCkpIHtcblx0XHRcdHNlbGYubmF2cG9wdXAuYmFuaXNoKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJlc3RvcmVUaXRsZShzZWxmKTtcblx0XHROYXZwb3B1cC50cmFja2VyLmFkZEhvb2socG9zQ2hlY2tlckhvb2soc2VsZi5uYXZwb3B1cCkpO1xuXHR9O1xuXHRjb25zdCBwb3NDaGVja2VySG9vayA9IChuYXZwb3ApID0+IHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0aWYgKCFuYXZwb3AuaXNWaXNpYmxlKCkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7IC8qIHJlbW92ZSB0aGlzIGhvb2sgKi9cblx0XHRcdH1cblx0XHRcdGlmIChOYXZwb3B1cC50cmFja2VyLmRpcnR5KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHt4fSA9IE5hdnBvcHVwLnRyYWNrZXI7XG5cdFx0XHRjb25zdCB7eX0gPSBOYXZwb3B1cC50cmFja2VyO1xuXHRcdFx0Y29uc3QgbW91c2VPdmVyTmF2cG9wID1cblx0XHRcdFx0bmF2cG9wLmlzV2l0aGluKHgsIHksIG5hdnBvcC5mdXp6LCBuYXZwb3AubWFpbkRpdikgfHxcblx0XHRcdFx0IWZ1enp5Q3Vyc29yT2ZmTWVudXMoeCwgeSwgbmF2cG9wLmZ1enosIG5hdnBvcC5tYWluRGl2KTtcblx0XHRcdC8vIEZJWE1FIGl0J2QgYmUgcHJldHRpZXIgdG8gZG8gdGhpcyBpbnRlcm5hbCB0byB0aGUgTmF2cG9wdXAgb2JqZWN0c1xuXHRcdFx0bGV0IHQgPSBnZXRWYWx1ZU9mKCdwb3B1cEhpZGVEZWxheScpO1xuXHRcdFx0aWYgKHQpIHtcblx0XHRcdFx0dCAqPSAxMDAwO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCF0KSB7XG5cdFx0XHRcdGlmICghbW91c2VPdmVyTmF2cG9wKSB7XG5cdFx0XHRcdFx0aWYgKG5hdnBvcC5wYXJlbnRBbmNob3IpIHtcblx0XHRcdFx0XHRcdHJlc3RvcmVUaXRsZShuYXZwb3AucGFyZW50QW5jaG9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bmF2cG9wLmJhbmlzaCgpO1xuXHRcdFx0XHRcdHJldHVybiB0cnVlOyAvKiByZW1vdmUgdGhpcyBob29rICovXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gd2UgaGF2ZSBhIGhpZGUgZGVsYXkgc2V0XG5cdFx0XHRjb25zdCBkID0gRGF0ZS5ub3coKTtcblx0XHRcdGlmICghbmF2cG9wLm1vdXNlTGVhdmluZ1RpbWUpIHtcblx0XHRcdFx0bmF2cG9wLm1vdXNlTGVhdmluZ1RpbWUgPSBkO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAobW91c2VPdmVyTmF2cG9wKSB7XG5cdFx0XHRcdG5hdnBvcC5tb3VzZUxlYXZpbmdUaW1lID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGQgLSBuYXZwb3AubW91c2VMZWF2aW5nVGltZSA+IHQpIHtcblx0XHRcdFx0bmF2cG9wLm1vdXNlTGVhdmluZ1RpbWUgPSBudWxsO1xuXHRcdFx0XHRuYXZwb3AuYmFuaXNoKCk7XG5cdFx0XHRcdHJldHVybiB0cnVlOyAvKiByZW1vdmUgdGhpcyBob29rICovXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0fTtcblx0Y29uc3QgcnVuU3RvcFBvcHVwVGltZXIgPSAobmF2cG9wKSA9PiB7XG5cdFx0Ly8gYXQgdGhpcyBwb2ludCwgd2Ugc2hvdWxkIGhhdmUgbGVmdCB0aGUgbGluayBidXQgcmVtYWluIHdpdGhpbiB0aGUgcG9wdXBcblx0XHQvLyBzbyB3ZSBjYWxsIHRoaXMgZnVuY3Rpb24gYWdhaW4gdW50aWwgd2UgbGVhdmUgdGhlIHBvcHVwLlxuXHRcdGlmICghbmF2cG9wLnN0b3BQb3B1cFRpbWVyKSB7XG5cdFx0XHRuYXZwb3Auc3RvcFBvcHVwVGltZXIgPSBzZXRJbnRlcnZhbChwb3NDaGVja2VySG9vayhuYXZwb3ApLCA1MDApO1xuXHRcdFx0bmF2cG9wLmFkZEhvb2soXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKG5hdnBvcC5zdG9wUG9wdXBUaW1lcik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdoaWRlJyxcblx0XHRcdFx0J2JlZm9yZSdcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHQvLyBFTkRGSUxFOiBtb3VzZW91dC5qc1xuXHQvLyBTVEFSVEZJTEU6IHByZXZpZXdtYWtlci5qc1xuXHQvKipcblx0ICogQGZpbGVvdmVydmlld1xuXHQgKiBEZWZpbmVzIHRoZSB7QHNvdXJjZSBQcmV2aWV3bWFrZXJ9IG9iamVjdCwgd2hpY2ggZ2VuZXJhdGVzIHNob3J0IHByZXZpZXdzIGZyb20gd2lraSBtYXJrdXAuXG5cdCAqL1xuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBQcmV2aWV3bWFrZXJcblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBjbGFzcyBUaGUgUHJldmlld21ha2VyIGNsYXNzLiBVc2UgYW4gaW5zdGFuY2Ugb2YgdGhpcyB0byBnZW5lcmF0ZSBzaG9ydCBwcmV2aWV3cyBmcm9tIFdpa2l0ZXh0LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraVRleHQgVGhlIFdpa2l0ZXh0IHNvdXJjZSBvZiB0aGUgcGFnZSB3ZSB3aXNoIHRvIHByZXZpZXcuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVXJsIFRoZSB1cmwgd2Ugc2hvdWxkIHByZXBlbmQgd2hlbiBjcmVhdGluZyByZWxhdGl2ZSB1cmxzLlxuXHQgKiBAcGFyYW0ge05hdnBvcHVwfSBvd25lciBUaGUgbmF2cG9wIGFzc29jaWF0ZWQgdG8gdGhpcyBwcmV2aWV3IGdlbmVyYXRvclxuXHQgKi9cblx0Y2xhc3MgUHJldmlld21ha2VyIHtcblx0XHRjb25zdHJ1Y3Rvcih3aWtpVGV4dCwgYmFzZVVybCwgb3duZXIpIHtcblx0XHRcdC8qKiBUaGUgd2lraXRleHQgd2hpY2ggaXMgbWFuaXB1bGF0ZWQgdG8gZ2VuZXJhdGUgdGhlIHByZXZpZXcuICovXG5cdFx0XHR0aGlzLm9yaWdpbmFsRGF0YSA9IHdpa2lUZXh0O1xuXHRcdFx0dGhpcy5iYXNlVXJsID0gYmFzZVVybDtcblx0XHRcdHRoaXMub3duZXIgPSBvd25lcjtcblx0XHRcdHRoaXMubWF4Q2hhcmFjdGVycyA9IGdldFZhbHVlT2YoJ3BvcHVwTWF4UHJldmlld0NoYXJhY3RlcnMnKTtcblx0XHRcdHRoaXMubWF4U2VudGVuY2VzID0gZ2V0VmFsdWVPZigncG9wdXBNYXhQcmV2aWV3U2VudGVuY2VzJyk7XG5cdFx0XHR0aGlzLnNldERhdGEoKTtcblx0XHR9XG5cdFx0c2V0RGF0YSgpIHtcblx0XHRcdGNvbnN0IG1heFNpemUgPSBNYXRoLm1heCgxZTQsIDIgKiB0aGlzLm1heENoYXJhY3RlcnMpO1xuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5vcmlnaW5hbERhdGEuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbWF4U2l6ZSkpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgSFRNTCBjb21tZW50c1xuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsQ29tbWVudHMoKSB7XG5cdFx0XHQvLyB0aGlzIGFsc28ga2lsbHMgb25lIHRyYWlsaW5nIG5ld2xpbmUsIGVnIFtbZGlhbXlvXV1cblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9ePCEtLVteJF0qPy0tPlxcbnxcXG48IS0tW14kXSo/LS0+KD89XFxuKXw8IS0tW14kXSo/LS0+L2csICcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsRGl2cygpIHtcblx0XHRcdC8vIHNheSBnb29kYnllLCBkaXZzIChjYW4gYmUgbmVzdGVkLCBzbyB1c2UgKiBub3QgKj8pXG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvPCAqZGl2W14+XSogKj5bXFxTXFxzXSo/PCAqXFwvICpkaXYgKj4vZ2ksICcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsR2FsbGVyaWVzKCkge1xuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoLzwgKmdhbGxlcnlbXj5dKiAqPltcXFNcXHNdKj88ICpcXC8gKmdhbGxlcnkgKj4vZ2ksICcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IG9wZW5pbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gY2xvc2luZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBzdWJvcGVuaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHN1YmNsb3Npbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gcmVwbFxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbChvcGVuaW5nLCBjbG9zaW5nLCBzdWJvcGVuaW5nLCBzdWJjbG9zaW5nLCByZXBsKSB7XG5cdFx0XHRsZXQgb2xkayA9IHRoaXMuZGF0YTtcblx0XHRcdGxldCBrID0gUHJldmlld21ha2VyLmtpbGxTdHVmZih0aGlzLmRhdGEsIG9wZW5pbmcsIGNsb3NpbmcsIHN1Ym9wZW5pbmcsIHN1YmNsb3NpbmcsIHJlcGwpO1xuXHRcdFx0d2hpbGUgKGsubGVuZ3RoIDwgb2xkay5sZW5ndGgpIHtcblx0XHRcdFx0b2xkayA9IGs7XG5cdFx0XHRcdGsgPSBQcmV2aWV3bWFrZXIua2lsbFN0dWZmKGssIG9wZW5pbmcsIGNsb3NpbmcsIHN1Ym9wZW5pbmcsIHN1YmNsb3NpbmcsIHJlcGwpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kYXRhID0gaztcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHR4dFxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBvcGVuaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGNsb3Npbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gc3Vib3BlbmluZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBzdWJjbG9zaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHJlcGxcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHN0YXRpYyBraWxsU3R1ZmYodHh0LCBvcGVuaW5nLCBjbG9zaW5nLCBzdWJvcGVuaW5nLCBzdWJjbG9zaW5nLCByZXBsKSB7XG5cdFx0XHRjb25zdCBvcCA9IFByZXZpZXdtYWtlci5tYWtlUmVnZXhwKG9wZW5pbmcpO1xuXHRcdFx0Y29uc3QgY2wgPSBQcmV2aWV3bWFrZXIubWFrZVJlZ2V4cChjbG9zaW5nLCAnXicpO1xuXHRcdFx0Y29uc3Qgc2IgPSBzdWJvcGVuaW5nID8gUHJldmlld21ha2VyLm1ha2VSZWdleHAoc3Vib3BlbmluZywgJ14nKSA6IG51bGw7XG5cdFx0XHRjb25zdCBzYyA9IHN1YmNsb3NpbmcgPyBQcmV2aWV3bWFrZXIubWFrZVJlZ2V4cChzdWJjbG9zaW5nLCAnXicpIDogY2w7XG5cdFx0XHRpZiAoIW9wIHx8ICFjbCkge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeSgnTmF2aWdhdGlvbiBQb3B1cHMgZXJyb3I6IG9wIG9yIGNsIGlzIG51bGwhIHNvbWV0aGluZyBpcyB3cm9uZy4nLCB7XG5cdFx0XHRcdFx0dGFnOiAncG9wdXBzJyxcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFvcC50ZXN0KHR4dCkpIHtcblx0XHRcdFx0cmV0dXJuIHR4dDtcblx0XHRcdH1cblx0XHRcdGxldCByZXQgPSAnJztcblx0XHRcdGNvbnN0IG9wUmVzdWx0ID0gb3AuZXhlYyh0eHQpO1xuXHRcdFx0cmV0ID0gdHh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIG9wUmVzdWx0LmluZGV4KSk7XG5cdFx0XHR0eHQgPSB0eHQuc2xpY2UoTWF0aC5tYXgoMCwgb3BSZXN1bHQuaW5kZXggKyBvcFJlc3VsdFswXS5sZW5ndGgpKTtcblx0XHRcdGxldCBkZXB0aCA9IDE7XG5cdFx0XHR3aGlsZSAodHh0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bGV0IHJlbW92YWwgPSAwO1xuXHRcdFx0XHRpZiAoZGVwdGggPT09IDEgJiYgY2wudGVzdCh0eHQpKSB7XG5cdFx0XHRcdFx0ZGVwdGgtLTtcblx0XHRcdFx0XHRyZW1vdmFsID0gY2wuZXhlYyh0eHQpWzBdLmxlbmd0aDtcblx0XHRcdFx0fSBlbHNlIGlmIChkZXB0aCA+IDEgJiYgc2MudGVzdCh0eHQpKSB7XG5cdFx0XHRcdFx0ZGVwdGgtLTtcblx0XHRcdFx0XHRyZW1vdmFsID0gc2MuZXhlYyh0eHQpWzBdLmxlbmd0aDtcblx0XHRcdFx0fSBlbHNlIGlmIChzYiAmJiBzYi50ZXN0KHR4dCkpIHtcblx0XHRcdFx0XHRkZXB0aCsrO1xuXHRcdFx0XHRcdHJlbW92YWwgPSBzYi5leGVjKHR4dClbMF0ubGVuZ3RoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlbW92YWwgfHw9IDE7XG5cdFx0XHRcdHR4dCA9IHR4dC5zbGljZShNYXRoLm1heCgwLCByZW1vdmFsKSk7XG5cdFx0XHRcdGlmIChkZXB0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0ICsgKHJlcGwgfHwgJycpICsgdHh0O1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHhcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHByZWZpeFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3VmZml4XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRzdGF0aWMgbWFrZVJlZ2V4cCh4LCBwcmVmaXgsIHN1ZmZpeCkge1xuXHRcdFx0cHJlZml4IHx8PSAnJztcblx0XHRcdHN1ZmZpeCB8fD0gJyc7XG5cdFx0XHRsZXQgcmVTdHIgPSAnJztcblx0XHRcdGxldCBmbGFncyA9ICcnO1xuXHRcdFx0aWYgKGlzU3RyaW5nKHgpKSB7XG5cdFx0XHRcdHJlU3RyID0gcHJlZml4ICsgbGl0ZXJhbGl6ZVJlZ2V4KHgpICsgc3VmZml4O1xuXHRcdFx0fSBlbHNlIGlmIChpc1JlZ0V4cCh4KSkge1xuXHRcdFx0XHRsZXQgcyA9IHgudG9TdHJpbmcoKS5zbGljZSgxKTtcblx0XHRcdFx0Y29uc3Qgc3AgPSBzLnNwbGl0KCcvJyk7XG5cdFx0XHRcdGZsYWdzID0gc3AuYXQoLTEpO1xuXHRcdFx0XHRzcFtzcC5sZW5ndGggLSAxXSA9ICcnO1xuXHRcdFx0XHRzID0gc3Auam9pbignLycpO1xuXHRcdFx0XHRzID0gcy5zbGljZSgwLCBNYXRoLm1heCgwLCBzLmxlbmd0aCAtIDEpKTtcblx0XHRcdFx0cmVTdHIgPSBwcmVmaXggKyBzICsgc3VmZml4O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nKCdtYWtlUmVnZXhwIGZhaWxlZCcpO1xuXHRcdFx0fVxuXHRcdFx0bG9nKGBtYWtlUmVnZXhwOiBnb3QgcmVTdHI9JHtyZVN0cn0sIGZsYWdzPSR7ZmxhZ3N9YCk7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChyZVN0ciwgZmxhZ3MpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxCb3hUZW1wbGF0ZXMoKSB7XG5cdFx0XHQvLyB0YXhvYm94IHJlbW92YWwuLi4gaW4gZmFjdCwgdGhlcmUncyBhIHNhdWRpcHJpbmNlYm94X2JlZ2luLCBzbyBsZXQncyBiZSBtb3JlIGdlbmVyYWxcblx0XHRcdC8vIGFsc28sIGhhdmUgZmxvYXRfYmVnaW4sIC4uLiBmbG9hdF9lbmRcblx0XHRcdHRoaXMua2lsbCgve3tbXlxcc3t8fV0qPyhmbG9hdHxib3gpWyBfXShiZWdpbnxzdGFydCkvaSwgL319XFxzKi8sICd7eycpO1xuXHRcdFx0Ly8gaW5mb2JveGVzIGV0Y1xuXHRcdFx0Ly8gZnJvbSBaeXh3OiBraWxsIGZyYW1lcyB0b29cblx0XHRcdHRoaXMua2lsbCgve3tbXlxcc3t8fV0qPyhpbmZvYm94fGVsZW1lbnRib3h8ZnJhbWUpWyBfXS9pLCAvfX1cXHMqLywgJ3t7Jyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbFRlbXBsYXRlcygpIHtcblx0XHRcdHRoaXMua2lsbCgne3snLCAnfX0nLCAneycsICd9JywgJyAnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsVGFibGVzKCkge1xuXHRcdFx0Ly8gdGFibGVzIGFyZSBiYWQsIHRvb1xuXHRcdFx0Ly8gdGhpcyBjYW4gYmUgc2xvdywgYnV0IGl0J3MgYW4gaW5wcm92ZW1lbnQgb3ZlciBhIGJyb3dzZXIgaGFuZ1xuXHRcdFx0Ly8gdG9ydHVyZSB0ZXN0OiBbW0NvbXBhcmlzb25fb2ZfSW50ZWxfQ2VudHJhbF9Qcm9jZXNzaW5nX1VuaXRzXV1cblx0XHRcdHRoaXMua2lsbCgne3wnLCAvXFx8fVxccyovLCAne3wnKTtcblx0XHRcdHRoaXMua2lsbCgvPHRhYmxlLio/Pi9pLCAvPFxcL3RhYmxlLio/Pi9pLCAvPHRhYmxlLio/Pi9pKTtcblx0XHRcdC8vIHJlbW92ZSBsaW5lcyBzdGFydGluZyB3aXRoIGEgcGlwZSBmb3IgdGhlIGhlbGwgb2YgaXQgKD8pXG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXlxcfC4qJC9nbSwgJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxJbWFnZXMoKSB7XG5cdFx0XHRjb25zdCBmb3JiaWRkZW5OYW1lc3BhY2VBbGlhc2VzID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IFtsb2NhbGl6ZWROYW1lc3BhY2VMYywgbmFtZXNwYWNlSWRdIG9mIE9iamVjdC5lbnRyaWVzKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlSWRzJykpKSB7XG5cdFx0XHRcdGlmIChuYW1lc3BhY2VJZCAhPT0gcGcubnNJbWFnZUlkICYmIG5hbWVzcGFjZUlkICE9PSBwZy5uc0NhdGVnb3J5SWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yYmlkZGVuTmFtZXNwYWNlQWxpYXNlcy5wdXNoKGxvY2FsaXplZE5hbWVzcGFjZUxjLnNwbGl0KCcgJykuam9pbignWyBfXScpKTsgLy8gdG9kbzogZXNjYXBlIHJlZ2V4cCBmcmFnbWVudHMhXG5cdFx0XHR9XG5cdFx0XHQvLyBpbWFnZXMgYW5kIGNhdGVnb3JpZXMgYXJlIGEgbm9ub1xuXHRcdFx0dGhpcy5raWxsKG5ldyBSZWdFeHAoYFtbXVtbXVxcXFxzKigke2ZvcmJpZGRlbk5hbWVzcGFjZUFsaWFzZXMuam9pbignfCcpfSlcXFxccyo6YCwgJ2knKSwgL11dXFxzKi8sICdbJywgJ10nKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsSFRNTCgpIHtcblx0XHRcdC8vIGtpbGwgPHJlZiAuLi4+Li4uPC9yZWY+XG5cdFx0XHR0aGlzLmtpbGwoLzxyZWZcXGJbXi8+XSo/Pi9pLCAvPFxcL3JlZj4vaSk7XG5cdFx0XHQvLyBsZXQncyBhbHNvIGRlbGV0ZSBlbnRpcmUgbGluZXMgc3RhcnRpbmcgd2l0aCA8LiBpdCdzIHdvcnRoIGEgdHJ5LlxuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoLyhefFxcbikgKjwuKi9nLCAnXFxuJyk7XG5cdFx0XHQvLyBhbmQgdGhvc2UgcGVza3kgaHRtbCB0YWdzLCBidXQgbm90IG5vd2lraSBvciBibG9ja3F1b3RlIHRhZ3Ncblx0XHRcdGNvbnN0IHNwbGl0dGVkID0gdGhpcy5kYXRhLnNwbGl0KC8oPFtcXFdcXHddKj8oPzo+fCR8KD89PCkpKS8pO1xuXHRcdFx0Y29uc3QgbGVuID0gc3BsaXR0ZWQubGVuZ3RoO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBsZW47IGkgKz0gMikge1xuXHRcdFx0XHRzd2l0Y2ggKHNwbGl0dGVkW2ldKSB7XG5cdFx0XHRcdFx0Y2FzZSAnPG5vJy5jb25jYXQoJ3dpa2knLCAnPicpOlxuXHRcdFx0XHRcdGNhc2UgJzwvbm8nLmNvbmNhdCgnd2lraScsICc+Jyk6XG5cdFx0XHRcdFx0Y2FzZSAnPGJsb2NrJy5jb25jYXQoJ3F1b3RlJywgJz4nKTpcblx0XHRcdFx0XHRjYXNlICc8L2Jsb2NrJy5jb25jYXQoJ3F1b3RlJywgJz4nKTpcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRzcGxpdHRlZFtpXSA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRhdGEgPSBzcGxpdHRlZC5qb2luKCcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsQ2h1bmtzKCkge1xuXHRcdFx0Ly8gaGV1cmlzdGljcyBhbGVydFxuXHRcdFx0Ly8gY2h1bmtzIG9mIGl0YWxpYyB0ZXh0PyB5b3UgY3JhenksIG1hbj9cblx0XHRcdGNvbnN0IGl0YWxpY0NodW5rUmVnZXggPSAvKChefFxcbilcXHMqOipcXHMqJydbXiddKFteJ118JycnfCdbXiddKXsyMH0oLnxcXG5bXlxcbl0pKicnW1xccyEuP10qXFxuKSsvZztcblx0XHRcdC8vIGtlZXAgc3R1ZmYgc2VwYXJhdGVkLCB0aG91Z2gsIHNvIHN0aWNrIGluIFxcbiAoZml4ZXMgW1tVbmlvbiBKYWNrXV0/XG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShpdGFsaWNDaHVua1JlZ2V4LCAnXFxuJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0bW9wdXAoKSB7XG5cdFx0XHQvLyB3ZSBzaW1wbHkgKmNhbid0KiBiZSBkb2luZyB3aXRoIGhvcml6b250YWwgcnVsZXMgcmlnaHQgbm93XG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXi17NCx9L2dtLCAnJyk7XG5cdFx0XHQvLyBubyBpbmRlbnRlZCBsaW5lc1xuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoLyhefFxcbikgKjpbXlxcbl0qL2csICcnKTtcblx0XHRcdC8vIHJlcGxhY2UgX19UT0NfXywgX19OT1RPQ19fIGFuZCB3aGF0ZXZlciBlbHNlIHRoZXJlIGlzXG5cdFx0XHQvLyB0aGlzJ2xsIHByb2JhYmx5IGRvXG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXl9fW19hLXpdKl9fICokL2dpbSwgJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGZpcnN0Qml0KCkge1xuXHRcdFx0Ly8gZG9udCd0IGJlIGdpdmluJyBtZSBubyBzdWJzZXF1ZW50IHBhcmFncmFwaHMsIHlvdSBoZWFyIG1lP1xuXHRcdFx0Ly8gLyBmaXJzdCB3ZSBcIm5vcm1hbGl6ZVwiIHNlY3Rpb24gaGVhZGluZ3MsIHJlbW92aW5nIHdoaXRlc3BhY2UgYWZ0ZXIsIGFkZGluZyBiZWZvcmVcblx0XHRcdGxldCBkID0gdGhpcy5kYXRhO1xuXHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwUHJldmlld0N1dEhlYWRpbmdzJykpIHtcblx0XHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL1xccyooPT0rW149XSo9PSspXFxzKi9nLCAnXFxuXFxuJDEgJyk7XG5cdFx0XHRcdC8vIC8gdGhlbiB3ZSB3YW50IHRvIGdldCByaWQgb2YgcGFyYWdyYXBoIGJyZWFrcyB3aG9zZSB0ZXh0IGVuZHMgYmFkbHlcblx0XHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoLyhbOjtdKSAqXFxuezIsfS9nLCAnJDFcXG4nKTtcblx0XHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL15cXHMqLywgJycpO1xuXHRcdFx0XHRjb25zdCBzdHVmZiA9IC9eKFteXFxuXXxcXG5cXFMpKi8uZXhlYyh0aGlzLmRhdGEpO1xuXHRcdFx0XHRpZiAoc3R1ZmYpIHtcblx0XHRcdFx0XHRbZF0gPSBzdHVmZjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWdldFZhbHVlT2YoJ3BvcHVwUHJldmlld0ZpcnN0UGFyT25seScpKSB7XG5cdFx0XHRcdFx0ZCA9IHRoaXMuZGF0YTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyAvIG5vdyBwdXQgXFxuXFxuIGFmdGVyIHNlY3Rpb25zIHNvIHRoYXQgYnVsbGV0cyBhbmQgbnVtYmVyZWQgbGlzdHMgd29ya1xuXHRcdFx0XHRkID0gZC5yZXBsYWNlKC8oPT0rW149XSo9PSspXFxzKi9nLCAnJDFcXG5cXG4nKTtcblx0XHRcdH1cblx0XHRcdC8vIFNwbGl0IHNlbnRlbmNlcy4gU3VwZXJmbHVvdXMgc2VudGVuY2VzIGFyZSBSSUdIVCBPVVQuXG5cdFx0XHQvLyBub3RlOiBleGFjdGx5IDEgc2V0IG9mIHBhcmVucyBoZXJlIG5lZWRlZCB0byBtYWtlIHRoZSBzbGljZSB3b3JrXG5cdFx0XHRkID0gZC5zcGxpdCgvKFshLj9dK1tcIiddKlxccykvZyk7XG5cdFx0XHQvLyBsZWFkaW5nIHNwYWNlIGlzIGJhZCwgbW1rYXk/XG5cdFx0XHRkWzBdID0gZFswXS5yZXBsYWNlKC9eXFxzKi8sICcnKTtcblx0XHRcdGNvbnN0IG5vdFNlbnRlbmNlRW5kcyA9IC8oW14uXVthLXpdXFwuICpbYS16XXxldGN8c2ljfGRyfG1yfG1yc3xtc3xzdHxub3xvcHxjaXR8XFxbW15cXF1dKnxcXHNbYS16XSkkL2k7XG5cdFx0XHRkID0gdGhpcy5maXhTZW50ZW5jZUVuZHMoZCwgbm90U2VudGVuY2VFbmRzKTtcblx0XHRcdHRoaXMuZnVsbExlbmd0aCA9IGQuam9pbignJykubGVuZ3RoO1xuXHRcdFx0bGV0IG4gPSB0aGlzLm1heFNlbnRlbmNlcztcblx0XHRcdGxldCBkZCA9IFByZXZpZXdtYWtlci5maXJzdFNlbnRlbmNlcyhkLCBuKTtcblx0XHRcdGRvIHtcblx0XHRcdFx0ZGQgPSBQcmV2aWV3bWFrZXIuZmlyc3RTZW50ZW5jZXMoZCwgbik7XG5cdFx0XHRcdC0tbjtcblx0XHRcdH0gd2hpbGUgKGRkLmxlbmd0aCA+IHRoaXMubWF4Q2hhcmFjdGVycyAmJiBuICE9PSAwKTtcblx0XHRcdHRoaXMuZGF0YSA9IGRkO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3Ryc1xuXHRcdCAqIEBwYXJhbSB7UmVnRXhwfSByZWdcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGZpeFNlbnRlbmNlRW5kcyhzdHJzLCByZWcpIHtcblx0XHRcdC8vIHRha2UgYW4gYXJyYXkgb2Ygc3RyaW5ncywgc3Ryc1xuXHRcdFx0Ly8gam9pbiBzdHJzW2ldIHRvIHN0cnNbaSsxXSAmIHN0cnNbaSsyXSBpZiBzdHJzW2ldIG1hdGNoZXMgcmVnZXggcmVnXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0cnMubGVuZ3RoIC0gMjsgKytpKSB7XG5cdFx0XHRcdGlmIChyZWcudGVzdChzdHJzW2ldKSkge1xuXHRcdFx0XHRcdGNvbnN0IGEgPSBbXTtcblx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHN0cnMubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0XHRcdGlmIChqIDwgaSkge1xuXHRcdFx0XHRcdFx0XHRhW2pdID0gc3Ryc1tqXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChqID09PSBpKSB7XG5cdFx0XHRcdFx0XHRcdGFbaV0gPSBzdHJzW2ldICsgc3Ryc1tpICsgMV0gKyBzdHJzW2kgKyAyXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChqID4gaSArIDIpIHtcblx0XHRcdFx0XHRcdFx0YVtqIC0gMl0gPSBzdHJzW2pdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5maXhTZW50ZW5jZUVuZHMoYSwgcmVnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0cnM7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nW119IHN0cnNcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaG93bWFueVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0c3RhdGljIGZpcnN0U2VudGVuY2VzKHN0cnMsIGhvd21hbnkpIHtcblx0XHRcdGNvbnN0IHQgPSBzdHJzLnNsaWNlKDAsIDIgKiBob3dtYW55KTtcblx0XHRcdHJldHVybiB0LmpvaW4oJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxCYWRXaGl0ZXNwYWNlKCkge1xuXHRcdFx0Ly8gYWxzbyBjbGVhbnMgdXAgaXNvbGF0ZWQgJycnJ1xuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL14gKicrICokL2dtLCAnJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJ1bnMgdGhlIHZhcmlvdXMgbWV0aG9kcyB0byBnZW5lcmF0ZSB0aGUgcHJldmlldy5cblx0XHQgKiBUaGUgcHJldmlldyBpcyBzdG9yZWQgaW4gdGhlIDxjb2RlPmh0bWw8L2h0bWw+IGZpZWxkLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRtYWtlUHJldmlldygpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy5vd25lci5hcnRpY2xlLm5hbWVzcGFjZUlkKCkgIT09IHBnLm5zVGVtcGxhdGVJZCAmJlxuXHRcdFx0XHR0aGlzLm93bmVyLmFydGljbGUubmFtZXNwYWNlSWQoKSAhPT0gcGcubnNJbWFnZUlkXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5raWxsQ29tbWVudHMoKTtcblx0XHRcdFx0dGhpcy5raWxsRGl2cygpO1xuXHRcdFx0XHR0aGlzLmtpbGxHYWxsZXJpZXMoKTtcblx0XHRcdFx0dGhpcy5raWxsQm94VGVtcGxhdGVzKCk7XG5cdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFByZXZpZXdLaWxsVGVtcGxhdGVzJykpIHtcblx0XHRcdFx0XHR0aGlzLmtpbGxUZW1wbGF0ZXMoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmtpbGxNdWx0aWxpbmVUZW1wbGF0ZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmtpbGxUYWJsZXMoKTtcblx0XHRcdFx0dGhpcy5raWxsSW1hZ2VzKCk7XG5cdFx0XHRcdHRoaXMua2lsbEhUTUwoKTtcblx0XHRcdFx0dGhpcy5raWxsQ2h1bmtzKCk7XG5cdFx0XHRcdHRoaXMubW9wdXAoKTtcblx0XHRcdFx0dGhpcy5maXJzdEJpdCgpO1xuXHRcdFx0XHR0aGlzLmtpbGxCYWRXaGl0ZXNwYWNlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmtpbGxIVE1MKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmh0bWwgPSB3aWtpMmh0bWwodGhpcy5kYXRhLCB0aGlzLmJhc2VVcmwpOyAvLyBuZWVkcyBsaXZlcHJldmlld1xuXHRcdFx0dGhpcy5maXhIVE1MKCk7XG5cdFx0XHR0aGlzLnN0cmlwTG9uZ1RlbXBsYXRlcygpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZGF0YVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0c3RhdGljIGVzV2lraTJIdG1sUGFydChkYXRhKSB7XG5cdFx0XHRjb25zdCByZUxpbmtzID0gLyg/OlxcW1xcWyhbXlxcXXxdKikoPzpcXHwoW15cXF18XSopKSpdXShbYS16XSopKS9naTsgLy8gbWF0Y2ggYSB3aWtpbGlua1xuXHRcdFx0cmVMaW5rcy5sYXN0SW5kZXggPSAwOyAvLyByZXNldCByZWdleFxuXHRcdFx0bGV0IG1hdGNoO1xuXHRcdFx0bGV0IHJlc3VsdCA9ICcnO1xuXHRcdFx0bGV0IHBvc3RmaXhJbmRleCA9IDA7XG5cdFx0XHR3aGlsZSAoKG1hdGNoID0gcmVMaW5rcy5leGVjKGRhdGEpKSAhPT0gbnVsbCkge1xuXHRcdFx0XHQvLyBtYXRjaCBhbGwgd2lraWxpbmtzXG5cdFx0XHRcdC8vIEZJWE1FOiB0aGUgd2F5IHRoYXQgbGluayBpcyBidWlsdCBoZXJlIGlzbid0IHBlcmZlY3QuIEl0IGlzIGNsaWNrYWJsZSwgYnV0IHBvcHVwcyBwcmV2aWV3IHdvbid0IHJlY29nbml6ZSBpdCBpbiBzb21lIGNhc2VzLlxuXHRcdFx0XHRyZXN1bHQgKz0gYCR7cGcuZXNjYXBlUXVvdGVzSFRNTChkYXRhLnN1YnN0cmluZyhwb3N0Zml4SW5kZXgsIG1hdGNoLmluZGV4KSl9PGEgaHJlZj1cIiR7XG5cdFx0XHRcdFx0SW5zdGEuY29uZi5wYXRocy5hcnRpY2xlc1xuXHRcdFx0XHR9JHtwZy5lc2NhcGVRdW90ZXNIVE1MKG1hdGNoWzFdKX1cIj4ke3BnLmVzY2FwZVF1b3Rlc0hUTUwoKG1hdGNoWzJdID8/IG1hdGNoWzFdKSArIG1hdGNoWzNdKX08L2E+YDtcblx0XHRcdFx0cG9zdGZpeEluZGV4ID0gcmVMaW5rcy5sYXN0SW5kZXg7XG5cdFx0XHR9XG5cdFx0XHQvLyBhcHBlbmQgdGhlIHJlc3Rcblx0XHRcdHJlc3VsdCArPSBwZy5lc2NhcGVRdW90ZXNIVE1MKGRhdGEuc2xpY2UoTWF0aC5tYXgoMCwgcG9zdGZpeEluZGV4KSkpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0ZWRpdFN1bW1hcnlQcmV2aWV3KCkge1xuXHRcdFx0Y29uc3QgcmVBZXMgPSAvXFwvXFwqICooLio/KSAqXFwqXFwvL2c7IC8vIG1hdGNoIHRoZSBmaXJzdCBzZWN0aW9uIG1hcmtlclxuXHRcdFx0cmVBZXMubGFzdEluZGV4ID0gMDsgLy8gcmVzZXQgcmVnZXhcblx0XHRcdGNvbnN0IG1hdGNoID0gcmVBZXMuZXhlYyh0aGlzLmRhdGEpO1xuXHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdC8vIHdlIGhhdmUgYSBzZWN0aW9uIGxpbmsuIFNwbGl0IGl0LCBwcm9jZXNzIGl0LCBjb21iaW5lIGl0LlxuXHRcdFx0XHRjb25zdCBwcmVmaXggPSB0aGlzLmRhdGEuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbWF0Y2guaW5kZXggLSAxKSk7XG5cdFx0XHRcdGNvbnN0IFssIHNlY3Rpb25dID0gbWF0Y2g7XG5cdFx0XHRcdGNvbnN0IHBvc3RmaXggPSB0aGlzLmRhdGEuc2xpY2UoTWF0aC5tYXgoMCwgcmVBZXMubGFzdEluZGV4KSk7XG5cdFx0XHRcdGxldCBzdGFydCA9IFwiPHNwYW4gY2xhc3M9J2F1dG9jb21tZW50Jz5cIjtcblx0XHRcdFx0bGV0IGVuZCA9ICc8L3NwYW4+Jztcblx0XHRcdFx0aWYgKHByZWZpeC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c3RhcnQgPSBgJHtQcmV2aWV3bWFrZXIuZXNXaWtpMkh0bWxQYXJ0KHByZWZpeCl9ICR7c3RhcnR9LSBgO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwb3N0Zml4Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRlbmQgPSBgOiAke2VuZH0ke1ByZXZpZXdtYWtlci5lc1dpa2kySHRtbFBhcnQocG9zdGZpeCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB0ID0gbmV3IFRpdGxlKCkuZnJvbVVSTCh0aGlzLmJhc2VVcmwpO1xuXHRcdFx0XHR0LmFuY2hvckZyb21VdGYoc2VjdGlvbik7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25MaW5rID0gYCR7XG5cdFx0XHRcdFx0SW5zdGEuY29uZi5wYXRocy5hcnRpY2xlcyArIHBnLmVzY2FwZVF1b3Rlc0hUTUwodC50b1N0cmluZyh0cnVlKSlcblx0XHRcdFx0fSMke3BnLmVzY2FwZVF1b3Rlc0hUTUwodC5hbmNob3IpfWA7XG5cdFx0XHRcdHJldHVybiBgJHtzdGFydH08YSBocmVmPVwiJHtzZWN0aW9uTGlua31cIj4mcmFycjs8L2E+ICR7cGcuZXNjYXBlUXVvdGVzSFRNTChzZWN0aW9uKX0ke2VuZH1gO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZWxzZSB0aGVyZSdzIG5vIHNlY3Rpb24gbGluaywgaHRtbGlmeSB0aGUgd2hvbGUgdGhpbmcuXG5cdFx0XHRyZXR1cm4gUHJldmlld21ha2VyLmVzV2lraTJIdG1sUGFydCh0aGlzLmRhdGEpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBXb3JrcyBhcm91bmQgbGl2ZXByZXZpZXcgYnVncy5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0Zml4SFRNTCgpIHtcblx0XHRcdGlmICghdGhpcy5odG1sKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCByZXQgPSB0aGlzLmh0bWw7XG5cdFx0XHQvLyBmaXggcXVlc3Rpb24gbWFya3MgaW4gd2lraSBsaW5rc1xuXHRcdFx0Ly8gbWF5YmUgdGhpcydsbCBicmVhayBzb21lIHN0dWZmIDotKFxuXHRcdFx0cmV0ID0gcmV0LnJlcGxhY2UobmV3IFJlZ0V4cChgKDxhIGhyZWY9XCIke3BnLndpa2kuYXJ0aWNsZVBhdGh9L1teXCJdKilbP10oLio/XCIpYCwgJ2cnKSwgJyQxJTNGJDInKTtcblx0XHRcdHJldCA9IHJldC5yZXBsYWNlKG5ldyBSZWdFeHAoYCg8YSBocmVmPScke3BnLndpa2kuYXJ0aWNsZVBhdGh9L1teJ10qKVs/XSguKj8nKWAsICdnJyksICckMSUzRiQyJyk7XG5cdFx0XHQvLyBGSVhNRSBmaXggdXAgJSB0b29cblx0XHRcdHRoaXMuaHRtbCA9IHJldDtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogR2VuZXJhdGVzIHRoZSBwcmV2aWV3IGFuZCBkaXNwbGF5cyBpdCBpbiB0aGUgY3VycmVudCBwb3B1cC5cblx0XHQgKiBEb2VzIG5vdGhpbmcgaWYgdGhlIGdlbmVyYXRlZCBwcmV2aWV3IGlzIGludmFsaWQgb3IgY29uc2lzdHMgb2Ygd2hpdGVzcGFjZSBvbmx5LlxuXHRcdCAqIEFsc28gYWN0aXZhdGVzIHdpa2lsaW5rcyBpbiB0aGUgcHJldmlldyBmb3Igc3VicG9wdXBzIGlmIHRoZSBwb3B1cFN1YnBvcHVwcyBvcHRpb24gaXMgdHJ1ZS5cblx0XHQgKi9cblx0XHRzaG93UHJldmlldygpIHtcblx0XHRcdHRoaXMubWFrZVByZXZpZXcoKTtcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5odG1sICE9PSB0eXBlb2YgJycpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKC9eXFxzKiQvLnRlc3QodGhpcy5odG1sKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRzZXRQb3B1cEhUTUwoJzxocj4nLCAncG9wdXBQcmVQcmV2aWV3U2VwJywgdGhpcy5vd25lci5pZE51bWJlcik7XG5cdFx0XHRzZXRQb3B1cFRpcHNBbmRIVE1MKHRoaXMuaHRtbCwgJ3BvcHVwUHJldmlldycsIHRoaXMub3duZXIuaWROdW1iZXIsIHtcblx0XHRcdFx0b3duZXI6IHRoaXMub3duZXIsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IG1vcmUgPSB0aGlzLmZ1bGxMZW5ndGggPiB0aGlzLmRhdGEubGVuZ3RoID8gdGhpcy5tb3JlTGluaygpIDogJyc7XG5cdFx0XHRzZXRQb3B1cEhUTUwobW9yZSwgJ3BvcHVwUHJldmlld01vcmUnLCB0aGlzLm93bmVyLmlkTnVtYmVyKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRtb3JlTGluaygpIHtcblx0XHRcdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRhLmNsYXNzTmFtZSA9ICdwb3B1cE1vcmVMaW5rJztcblx0XHRcdGEuaW5uZXJIVE1MID0gcG9wdXBTdHJpbmcoJ21vcmUuLi4nKTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0YS5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0XHRzZWxmLm1heENoYXJhY3RlcnMgKz0gMjAwMDtcblx0XHRcdFx0c2VsZi5tYXhTZW50ZW5jZXMgKz0gMjA7XG5cdFx0XHRcdHNlbGYuc2V0RGF0YSgpO1xuXHRcdFx0XHRzZWxmLnNob3dQcmV2aWV3KCk7XG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIGE7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0c3RyaXBMb25nVGVtcGxhdGVzKCkge1xuXHRcdFx0Ly8gb3BlcmF0ZXMgb24gdGhlIEhUTUwhXG5cdFx0XHR0aGlzLmh0bWwgPSB0aGlzLmh0bWwucmVwbGFjZSgvXi57MCwxMDAwfXt7W159XSo/KDwocHxicikoIFxcLyk/PlxccyopezIsfShbXnt9XSo/fX0pPy9naSwgJycpO1xuXHRcdFx0dGhpcy5odG1sID0gdGhpcy5odG1sLnNwbGl0KCdcXG4nKS5qb2luKCcgJyk7IC8vIHdvcmthcm91bmQgZm9yIDxwcmU+IHRlbXBsYXRlc1xuXHRcdFx0dGhpcy5odG1sID0gdGhpcy5odG1sLnJlcGxhY2UoL3t7W159XSo8cHJlPltefV0qfX0vZ2ksICcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsTXVsdGlsaW5lVGVtcGxhdGVzKCkge1xuXHRcdFx0dGhpcy5raWxsKCd7e3snLCAnfX19Jyk7XG5cdFx0XHR0aGlzLmtpbGwoL1xccyp7e1tee31dKlxcbi8sICd9fScsICd7eycpO1xuXHRcdH1cblx0fVxuXHQvLyBFTkRGSUxFOiBwcmV2aWV3bWFrZXIuanNcblx0Ly8gU1RBUlRGSUxFOiBxdWVyeXByZXZpZXcuanNcblx0Y29uc3QgbG9hZEFQSVByZXZpZXcgPSAocXVlcnlUeXBlLCBhcnRpY2xlLCBuYXZwb3ApID0+IHtcblx0XHRjb25zdCBhcnQgPSBuZXcgVGl0bGUoYXJ0aWNsZSkudXJsU3RyaW5nKCk7XG5cdFx0bGV0IHVybCA9IGAke3BnLndpa2kuYXBpd2lraWJhc2V9P2Zvcm1hdD1qc29uJmZvcm1hdHZlcnNpb249MiZhY3Rpb249cXVlcnkmYDtcblx0XHRsZXQgaHRtbEdlbmVyYXRvciA9ICgpID0+IC8qIGEsIGQgKi8ge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoJ2ludmFsaWQgaHRtbCBnZW5lcmF0b3InLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdH07XG5cdFx0bGV0IHVzZXJuYW1lYXJ0ID0gJyc7XG5cdFx0c3dpdGNoIChxdWVyeVR5cGUpIHtcblx0XHRcdGNhc2UgJ2hpc3RvcnknOlxuXHRcdFx0XHR1cmwgKz0gYHRpdGxlcz0ke2FydH0mcHJvcD1yZXZpc2lvbnMmcnZsaW1pdD0ke2dldFZhbHVlT2YoJ3BvcHVwSGlzdG9yeVByZXZpZXdMaW1pdCcpfWA7XG5cdFx0XHRcdGh0bWxHZW5lcmF0b3IgPSBBUEloaXN0b3J5UHJldmlld0hUTUw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnY2F0ZWdvcnknOlxuXHRcdFx0XHR1cmwgKz0gYGxpc3Q9Y2F0ZWdvcnltZW1iZXJzJmNtdGl0bGU9JHthcnR9YDtcblx0XHRcdFx0aHRtbEdlbmVyYXRvciA9IEFQSWNhdGVnb3J5UHJldmlld0hUTUw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndXNlcmluZm8nOiB7XG5cdFx0XHRcdGNvbnN0IHVzZXJuYW1lID0gbmV3IFRpdGxlKGFydGljbGUpLnVzZXJOYW1lKCk7XG5cdFx0XHRcdHVzZXJuYW1lYXJ0ID0gZW5jb2RlVVJJQ29tcG9uZW50KHVzZXJuYW1lKTtcblx0XHRcdFx0dXJsICs9IHBnLnJlLmlwVXNlci50ZXN0KHVzZXJuYW1lKVxuXHRcdFx0XHRcdD8gYGxpc3Q9YmxvY2tzJmJrcHJvcD1yYW5nZXxyZXN0cmljdGlvbnMmYmtpcD0ke3VzZXJuYW1lYXJ0fWBcblx0XHRcdFx0XHQ6IGBsaXN0PXVzZXJzfHVzZXJjb250cmlicyZ1c3Byb3A9YmxvY2tpbmZvfGdyb3Vwc3xlZGl0Y291bnR8cmVnaXN0cmF0aW9ufGdlbmRlciZ1c3VzZXJzPSR7dXNlcm5hbWVhcnR9Jm1ldGE9Z2xvYmFsdXNlcmluZm8mZ3VpcHJvcD1ncm91cHN8dW5hdHRhY2hlZCZndWl1c2VyPSR7dXNlcm5hbWVhcnR9JnVjbGltaXQ9MSZ1Y3Byb3A9dGltZXN0YW1wJnVjdXNlcj0ke3VzZXJuYW1lYXJ0fWA7XG5cdFx0XHRcdGh0bWxHZW5lcmF0b3IgPSBBUEl1c2VySW5mb1ByZXZpZXdIVE1MO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ2NvbnRyaWJzJzpcblx0XHRcdFx0dXNlcm5hbWVhcnQgPSBlbmNvZGVVUklDb21wb25lbnQobmV3IFRpdGxlKGFydGljbGUpLnVzZXJOYW1lKCkpO1xuXHRcdFx0XHR1cmwgKz0gYGxpc3Q9dXNlcmNvbnRyaWJzJnVjdXNlcj0ke3VzZXJuYW1lYXJ0fSZ1Y2xpbWl0PSR7Z2V0VmFsdWVPZigncG9wdXBDb250cmlic1ByZXZpZXdMaW1pdCcpfWA7XG5cdFx0XHRcdGh0bWxHZW5lcmF0b3IgPSBBUEljb250cmlic1ByZXZpZXdIVE1MO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2ltYWdlcGFnZXByZXZpZXcnOiB7XG5cdFx0XHRcdGxldCB0cmFpbCA9ICcnO1xuXHRcdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBJbWFnZUxpbmtzJykpIHtcblx0XHRcdFx0XHR0cmFpbCA9IGAmbGlzdD1pbWFnZXVzYWdlJml1dGl0bGU9JHthcnR9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHR1cmwgKz0gYHRpdGxlcz0ke2FydH0mcHJvcD1yZXZpc2lvbnN8aW1hZ2VpbmZvJnJ2cHJvcD1jb250ZW50JHt0cmFpbH1gO1xuXHRcdFx0XHRodG1sR2VuZXJhdG9yID0gQVBJaW1hZ2VwYWdlUHJldmlld0hUTUw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnYmFja2xpbmtzJzpcblx0XHRcdFx0dXJsICs9IGBsaXN0PWJhY2tsaW5rcyZibHRpdGxlPSR7YXJ0fWA7XG5cdFx0XHRcdGh0bWxHZW5lcmF0b3IgPSBBUEliYWNrbGlua3NQcmV2aWV3SFRNTDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdyZXZpc2lvbic6XG5cdFx0XHRcdHVybCArPSBhcnRpY2xlLm9sZGlkID8gYHJldmlkcz0ke2FydGljbGUub2xkaWR9YCA6IGB0aXRsZXM9JHthcnRpY2xlLnJlbW92ZUFuY2hvcigpLnVybFN0cmluZygpfWA7XG5cdFx0XHRcdHVybCArPVxuXHRcdFx0XHRcdCcmcHJvcD1yZXZpc2lvbnN8cGFnZXByb3BzfGluZm98aW1hZ2VzfGNhdGVnb3JpZXMmcnZwcm9wPWlkc3x0aW1lc3RhbXB8ZmxhZ3N8Y29tbWVudHx1c2VyfGNvbnRlbnQmY2xsaW1pdD1tYXgmaW1saW1pdD1tYXgnO1xuXHRcdFx0XHRodG1sR2VuZXJhdG9yID0gQVBJcmV2aXNpb25QcmV2aWV3SFRNTDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHBlbmRpbmdOYXZwb3BUYXNrKG5hdnBvcCk7XG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAoZCkgPT4ge1xuXHRcdFx0bG9nKCdjYWxsYmFjayBvZiBBUEkgZnVuY3Rpb25zIHdhcyBoaXQnKTtcblx0XHRcdGlmIChxdWVyeVR5cGUgPT09ICd1c2VyaW5mbycpIHtcblx0XHRcdFx0Ly8gV2UgbmVlZCB0byBkbyBhbm90aGVyIEFQSSByZXF1ZXN0XG5cdFx0XHRcdGZldGNoVXNlckdyb3VwTmFtZXMoZC5kYXRhKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRzaG93QVBJUHJldmlldyhxdWVyeVR5cGUsIGh0bWxHZW5lcmF0b3IoYXJ0aWNsZSwgZCwgbmF2cG9wKSwgbmF2cG9wLmlkTnVtYmVyLCBuYXZwb3AsIGQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2hvd0FQSVByZXZpZXcocXVlcnlUeXBlLCBodG1sR2VuZXJhdG9yKGFydGljbGUsIGQsIG5hdnBvcCksIG5hdnBvcC5pZE51bWJlciwgbmF2cG9wLCBkKTtcblx0XHR9O1xuXHRcdGNvbnN0IGdvID0gKCkgPT4ge1xuXHRcdFx0Z2V0UGFnZVdpdGhDYWNoaW5nKHVybCwgY2FsbGJhY2ssIG5hdnBvcCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdGlmIChuYXZwb3AudmlzaWJsZSB8fCAhZ2V0VmFsdWVPZigncG9wdXBMYXp5RG93bmxvYWRzJykpIHtcblx0XHRcdGdvKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5hdnBvcC5hZGRIb29rKGdvLCAndW5oaWRlJywgJ2JlZm9yZScsIGBET1dOTE9BRF8ke3F1ZXJ5VHlwZX1fUVVFUllfREFUQWApO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgbGlua0xpc3QgPSAobGlzdCkgPT4ge1xuXHRcdGxpc3Quc29ydCgoeCwgeSkgPT4ge1xuXHRcdFx0cmV0dXJuIHggPT09IHkgPyAwIDogeCA8IHkgPyAtMSA6IDE7XG5cdFx0fSk7XG5cdFx0Y29uc3QgYnVmID0gW107XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGxpc3QpIHtcblx0XHRcdGJ1Zi5wdXNoKFxuXHRcdFx0XHR3aWtpTGluayh7XG5cdFx0XHRcdFx0YXJ0aWNsZTogbmV3IFRpdGxlKGVsZW1lbnQpLFxuXHRcdFx0XHRcdHRleHQ6IGVsZW1lbnQuc3BsaXQoJyAnKS5qb2luKCcmbmJzcDsnKSxcblx0XHRcdFx0XHRhY3Rpb246ICd2aWV3Jyxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBidWYuam9pbignLCAnKTtcblx0fTtcblx0Y29uc3QgZ2V0VGltZU9mZnNldCA9ICgpID0+IHtcblx0XHRjb25zdCB0eiA9IG13LnVzZXIub3B0aW9ucy5nZXQoJ3RpbWVjb3JyZWN0aW9uJyk7XG5cdFx0aWYgKHR6ICYmIHR6LmluY2x1ZGVzKCd8JykpIHtcblx0XHRcdC8vIE5ldyBmb3JtYXRcblx0XHRcdHJldHVybiBOdW1iZXIucGFyc2VJbnQodHouc3BsaXQoJ3wnKVsxXSwgMTApO1xuXHRcdH1cblx0XHRyZXR1cm4gMDtcblx0fTtcblx0Y29uc3QgZ2V0VGltZVpvbmUgPSAoKSA9PiB7XG5cdFx0aWYgKCFwZy51c2VyLnRpbWVab25lKSB7XG5cdFx0XHRjb25zdCB0eiA9IG13LnVzZXIub3B0aW9ucy5nZXQoJ3RpbWVjb3JyZWN0aW9uJyk7XG5cdFx0XHRwZy51c2VyLnRpbWVab25lID0gJ1VUQyc7XG5cdFx0XHRpZiAodHopIHtcblx0XHRcdFx0Y29uc3QgdHpDb21wb25lbnRzID0gdHouc3BsaXQoJ3wnKTtcblx0XHRcdFx0aWYgKHR6Q29tcG9uZW50cy5sZW5ndGggPT09IDMgJiYgdHpDb21wb25lbnRzWzBdID09PSAnWm9uZUluZm8nKSB7XG5cdFx0XHRcdFx0WywgLCBwZy51c2VyLnRpbWVab25lXSA9IHR6Q29tcG9uZW50cztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlcnJsb2coYFVuZXhwZWN0ZWQgdGltZXpvbmUgaW5mb3JtYXRpb246ICR7dHp9YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHBnLnVzZXIudGltZVpvbmU7XG5cdH07XG5cdC8qKlxuXHQgKiBTaG91bGQgd2UgdXNlIGFuIG9mZnNldCBvciBjYW4gd2UgdXNlIHByb3BlciB0aW1lem9uZXNcblx0ICovXG5cdGNvbnN0IHVzZVRpbWVPZmZzZXQgPSAoKSA9PiB7XG5cdFx0aWYgKEludGwuRGF0ZVRpbWVGb3JtYXQucHJvdG90eXBlLmZvcm1hdFRvUGFydHMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gSUUgMTFcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCB0eiA9IG13LnVzZXIub3B0aW9ucy5nZXQoJ3RpbWVjb3JyZWN0aW9uJyk7XG5cdFx0aWYgKHR6ICYmICF0ei5pbmNsdWRlcygnWm9uZUluZm98JykpIHtcblx0XHRcdC8vIFN5c3RlbXwgRGVmYXVsdCBzeXN0ZW0gdGltZSwgZGVmYXVsdCBmb3IgdXNlcnMgd2hvIGRpZG4ndCBjb25maWd1cmUgdGltZXpvbmVcblx0XHRcdC8vIE9mZnNldHwgTWFudWFsIGRlZmluZWQgb2Zmc2V0IGJ5IHVzZXJcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdC8qKlxuXHQgKiBBcnJheSBvZiBsb2NhbGVzIGZvciB0aGUgcHVycG9zZSBvZiBqYXZhc2NyaXB0IGxvY2FsZSBiYXNlZCBmb3JtYXR0aW5nXG5cdCAqIEZpbHRlcnMgZG93biB0byB0aG9zZSBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXIuIEVtcHR5IFtdID09PSBTeXN0ZW0ncyBkZWZhdWx0IGxvY2FsZVxuXHQgKi9cblx0Y29uc3QgZ2V0TG9jYWxlcyA9ICgpID0+IHtcblx0XHRpZiAoIXBnLnVzZXIubG9jYWxlcykge1xuXHRcdFx0bGV0IHVzZXJMYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5nZXRBdHRyaWJ1dGUoJ2xhbmcnKTsgLy8gbWFrZSBzdXJlIHdlIGhhdmUgSFRNTCBsb2NhbGVcblx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cExvY2FsZScpKSB7XG5cdFx0XHRcdHVzZXJMYW5ndWFnZSA9IGdldFZhbHVlT2YoJ3BvcHVwTG9jYWxlJyk7XG5cdFx0XHR9IGVsc2UgaWYgKHVzZXJMYW5ndWFnZSA9PT0gJ2VuJykge1xuXHRcdFx0XHQvLyBlbi53cCB0ZW5kcyB0byB0cmVhdCB0aGlzIGFzIGludGVybmF0aW9uYWwgZW5nbGlzaCAvIHVuc3BlY2lmaWVkXG5cdFx0XHRcdC8vIGJ1dCB3ZSBoYXZlIG1vcmUgc3BlY2lmaWMgc2V0dGluZ3MgaW4gdXNlciBvcHRpb25zXG5cdFx0XHRcdHVzZXJMYW5ndWFnZSA9IGdldE1XRGF0ZUZvcm1hdCgpID09PSAnbWR5JyA/ICdlbi1VUycgOiAnZW4tR0InO1xuXHRcdFx0fVxuXHRcdFx0cGcudXNlci5sb2NhbGVzID0gSW50bC5EYXRlVGltZUZvcm1hdC5zdXBwb3J0ZWRMb2NhbGVzT2YoW3VzZXJMYW5ndWFnZSwgbmF2aWdhdG9yLmxhbmd1YWdlXSk7XG5cdFx0fVxuXHRcdHJldHVybiBwZy51c2VyLmxvY2FsZXM7XG5cdH07XG5cdC8qKlxuXHQgKiBSZXRyaWV2ZSBjb25maWd1cmVkIE1XIGRhdGUgZm9ybWF0IGZvciB0aGlzIHVzZXJcblx0ICogVGhlc2UgY2FuIGJlXG5cdCAqIGRlZmF1bHRcblx0ICogZG15OiB0aW1lLCBkbXlcblx0ICogbWR5OiB0aW1lLCBtZHlcblx0ICogeW1kOiB0aW1lLCB5bWRcblx0ICogZG15dDogZG15LCB0aW1lXG5cdCAqIGRteXRzOiBkbXksIHRpbWUgKyBzZWNvbmRzXG5cdCAqIElTTyA4NjAxOiBZWVlZLU1NLUREVGhoOm1tOnNzIChsb2NhbCB0aW1lKVxuXHQgKlxuXHQgKiBUaGlzIGlzbid0IHRvbyB1c2VmdWwgZm9yIHVzLCBhcyBKUyBkb2Vzbid0IGhhdmUgZm9ybWF0dGVycyB0byBtYXRjaCB0aGVzZSBwcml2YXRlIHNwZWNpZmllcnNcblx0ICovXG5cdGNvbnN0IGdldE1XRGF0ZUZvcm1hdCA9ICgpID0+IHtcblx0XHRyZXR1cm4gbXcudXNlci5vcHRpb25zLmdldCgnZGF0ZScpO1xuXHR9O1xuXHQvKipcblx0ICogQ3JlYXRlcyBhIEhUTUwgdGFibGUgdGhhdCdzIHNob3duIGluIHRoZSBoaXN0b3J5IGFuZCB1c2VyLWNvbnRyaWJzIHBvcHVwcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFydGljbGVcblx0ICogQHBhcmFtIHtPYmplY3RbXX0gaCAtIGEgbGlzdCBvZiByZXZpc2lvbnMsIHJldHVybmVkIGZyb20gdGhlIEFQSVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHJlYWxseUNvbnRyaWJzIC0gdHJ1ZSBvbmx5IGlmIHdlJ3JlIGRpc3BsYXlpbmcgdXNlciBjb250cmlidXRpb25zXG5cdCAqL1xuXHRjb25zdCBlZGl0UHJldmlld1RhYmxlID0gKGFydGljbGUsIGgsIHJlYWxseUNvbnRyaWJzKSA9PiB7XG5cdFx0bGV0IGh0bWwgPSBbJzx0YWJsZT4nXTtcblx0XHRsZXQgZGF5O1xuXHRcdGxldCBjdXJhcnQgPSBhcnRpY2xlO1xuXHRcdGxldCBwYWdlO1xuXHRcdGxldCBtYWtlRmlyc3RDb2x1bW5MaW5rcztcblx0XHRpZiAocmVhbGx5Q29udHJpYnMpIHtcblx0XHRcdC8vIFdlJ3JlIHNob3dpbmcgdXNlciBjb250cmlidXRpb25zLCBzbyBtYWtlIChkaWZmIHwgaGlzdCkgbGlua3Ncblx0XHRcdG1ha2VGaXJzdENvbHVtbkxpbmtzID0gKGN1cnJlbnRSZXZpc2lvbikgPT4ge1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gJygnO1xuXHRcdFx0XHRyZXN1bHQgKz1cblx0XHRcdFx0XHRgPGEgaHJlZj1cIiR7cGcud2lraS50aXRsZWJhc2V9JHtuZXcgVGl0bGUoY3VycmVudFJldmlzaW9uLnRpdGxlKS51cmxTdHJpbmcoKX0mZGlmZj1wcmV2YCArXG5cdFx0XHRcdFx0YCZvbGRpZD0ke2N1cnJlbnRSZXZpc2lvbi5yZXZpZH1cIj4ke3BvcHVwU3RyaW5nKCdkaWZmJyl9PC9hPmA7XG5cdFx0XHRcdHJlc3VsdCArPSAnJm5ic3A7fCZuYnNwOyc7XG5cdFx0XHRcdHJlc3VsdCArPSBgPGEgaHJlZj1cIiR7cGcud2lraS50aXRsZWJhc2V9JHtuZXcgVGl0bGUoXG5cdFx0XHRcdFx0Y3VycmVudFJldmlzaW9uLnRpdGxlXG5cdFx0XHRcdCkudXJsU3RyaW5nKCl9JmFjdGlvbj1oaXN0b3J5XCI+JHtwb3B1cFN0cmluZygnaGlzdCcpfTwvYT5gO1xuXHRcdFx0XHRyZXN1bHQgKz0gJyknO1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gSXQncyBhIHJlZ3VsYXIgaGlzdG9yeSBwYWdlLCBzbyBtYWtlIChjdXIgfCBsYXN0KSBsaW5rc1xuXHRcdFx0Y29uc3QgZmlyc3RSZXZpZCA9IGhbMF0ucmV2aWQ7XG5cdFx0XHRtYWtlRmlyc3RDb2x1bW5MaW5rcyA9IChjdXJyZW50UmV2aXNpb24pID0+IHtcblx0XHRcdFx0bGV0IHJlc3VsdCA9ICcoJztcblx0XHRcdFx0cmVzdWx0ICs9IGA8YSBocmVmPVwiJHtwZy53aWtpLnRpdGxlYmFzZX0ke25ldyBUaXRsZShjdXJhcnQpLnVybFN0cmluZygpfSZkaWZmPSR7Zmlyc3RSZXZpZH0mb2xkaWQ9JHtcblx0XHRcdFx0XHRjdXJyZW50UmV2aXNpb24ucmV2aWRcblx0XHRcdFx0fVwiPiR7cG9wdXBTdHJpbmcoJ2N1cicpfTwvYT5gO1xuXHRcdFx0XHRyZXN1bHQgKz0gJyZuYnNwO3wmbmJzcDsnO1xuXHRcdFx0XHRyZXN1bHQgKz0gYDxhIGhyZWY9XCIke3BnLndpa2kudGl0bGViYXNlfSR7bmV3IFRpdGxlKGN1cmFydCkudXJsU3RyaW5nKCl9JmRpZmY9cHJldiZvbGRpZD0ke1xuXHRcdFx0XHRcdGN1cnJlbnRSZXZpc2lvbi5yZXZpZFxuXHRcdFx0XHR9XCI+JHtwb3B1cFN0cmluZygnbGFzdCcpfTwvYT5gO1xuXHRcdFx0XHRyZXN1bHQgKz0gJyknO1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBbaSwgZWxlbWVudF0gb2YgaC5lbnRyaWVzKCkpIHtcblx0XHRcdGlmIChyZWFsbHlDb250cmlicykge1xuXHRcdFx0XHRwYWdlID0gZWxlbWVudC50aXRsZTtcblx0XHRcdFx0Y3VyYXJ0ID0gbmV3IFRpdGxlKHBhZ2UpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbWlub3IgPSBlbGVtZW50Lm1pbm9yID8gJzxiPm0gPC9iPicgOiAnJztcblx0XHRcdGNvbnN0IGVkaXREYXRlID0gbmV3IERhdGUoZWxlbWVudC50aW1lc3RhbXApO1xuXHRcdFx0bGV0IHRoaXNEYXkgPSBmb3JtYXR0ZWREYXRlKGVkaXREYXRlKTtcblx0XHRcdGNvbnN0IHRoaXNUaW1lID0gZm9ybWF0dGVkVGltZShlZGl0RGF0ZSk7XG5cdFx0XHRpZiAodGhpc0RheSA9PT0gZGF5KSB7XG5cdFx0XHRcdHRoaXNEYXkgPSAnJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRheSA9IHRoaXNEYXk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpc0RheSkge1xuXHRcdFx0XHRodG1sLnB1c2goYDx0cj48dGQgY29sc3Bhbj0zPjxzcGFuIGNsYXNzPVwicG9wdXBfaGlzdG9yeV9kYXRlXCI+JHt0aGlzRGF5fTwvc3Bhbj48L3RkPjwvdHI+YCk7XG5cdFx0XHR9XG5cdFx0XHRodG1sLnB1c2goXG5cdFx0XHRcdGA8dHIgY2xhc3M9XCJwb3B1cF9oaXN0b3J5X3Jvd18ke2kgJSAyID8gJ29kZCcgOiAnZXZlbid9XCI+YCxcblx0XHRcdFx0YDx0ZD4ke21ha2VGaXJzdENvbHVtbkxpbmtzKGVsZW1lbnQpfTwvdGQ+YCxcblx0XHRcdFx0Jzx0ZD4nICtcblx0XHRcdFx0XHRgPGEgaHJlZj1cIiR7cGcud2lraS50aXRsZWJhc2V9JHtuZXcgVGl0bGUoY3VyYXJ0KS51cmxTdHJpbmcoKX0mb2xkaWQ9JHtcblx0XHRcdFx0XHRcdGVsZW1lbnQucmV2aWRcblx0XHRcdFx0XHR9XCI+JHt0aGlzVGltZX08L2E+PC90ZD5gXG5cdFx0XHQpO1xuXHRcdFx0bGV0IGNvbDN1cmwgPSAnJztcblx0XHRcdGxldCBjb2wzdHh0ID0gJyc7XG5cdFx0XHRpZiAocmVhbGx5Q29udHJpYnMpIHtcblx0XHRcdFx0Y29sM3VybCA9IHBnLndpa2kudGl0bGViYXNlICsgY3VyYXJ0LnVybFN0cmluZygpO1xuXHRcdFx0XHRjb2wzdHh0ID0gcGcuZXNjYXBlUXVvdGVzSFRNTChwYWdlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHt1c2VyfSA9IGVsZW1lbnQ7XG5cdFx0XHRcdGlmIChlbGVtZW50LnVzZXJoaWRkZW4pIHtcblx0XHRcdFx0XHRjb2wzdXJsID0gZ2V0VmFsdWVPZigncG9wdXBSZXZEZWxVcmwnKTtcblx0XHRcdFx0XHRjb2wzdHh0ID0gcGcuZXNjYXBlUXVvdGVzSFRNTChwb3B1cFN0cmluZygncmV2ZGVsJykpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbDN1cmwgPSBwZy5yZS5pcFVzZXIudGVzdCh1c2VyKVxuXHRcdFx0XHRcdFx0PyBgJHtcblx0XHRcdFx0XHRcdFx0XHRwZy53aWtpLnRpdGxlYmFzZSArIG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zU3BlY2lhbElkXVxuXHRcdFx0XHRcdFx0XHR9OkNvbnRyaWJ1dGlvbnMmdGFyZ2V0PSR7bmV3IFRpdGxlKHVzZXIpLnVybFN0cmluZygpfWBcblx0XHRcdFx0XHRcdDogYCR7cGcud2lraS50aXRsZWJhc2UgKyBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc1VzZXJJZF19OiR7bmV3IFRpdGxlKFxuXHRcdFx0XHRcdFx0XHRcdHVzZXJcblx0XHRcdFx0XHRcdFx0KS51cmxTdHJpbmcoKX1gO1xuXHRcdFx0XHRcdGNvbDN0eHQgPSBwZy5lc2NhcGVRdW90ZXNIVE1MKHVzZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRodG1sLnB1c2goYDx0ZD4ke3JlYWxseUNvbnRyaWJzID8gbWlub3IgOiAnJ308YSBocmVmPVwiJHtjb2wzdXJsfVwiPiR7Y29sM3R4dH08L2E+PC90ZD5gKTtcblx0XHRcdGxldCBjb21tZW50ID0gJyc7XG5cdFx0XHRjb25zdCBjID0gZWxlbWVudC5jb21tZW50IHx8IGVsZW1lbnQuY29udGVudDtcblx0XHRcdGlmIChjKSB7XG5cdFx0XHRcdGNvbW1lbnQgPSBuZXcgUHJldmlld21ha2VyKGMsIG5ldyBUaXRsZShjdXJhcnQpLnRvVXJsKCkpLmVkaXRTdW1tYXJ5UHJldmlldygpO1xuXHRcdFx0fSBlbHNlIGlmIChlbGVtZW50LmNvbW1lbnRoaWRkZW4pIHtcblx0XHRcdFx0Y29tbWVudCA9IHBvcHVwU3RyaW5nKCdyZXZkZWwnKTtcblx0XHRcdH1cblx0XHRcdGh0bWwucHVzaChgPHRkPiR7cmVhbGx5Q29udHJpYnMgPyAnJyA6IG1pbm9yfSR7Y29tbWVudH08L3RkPmAsICc8L3RyPicpO1xuXHRcdFx0aHRtbCA9IFtodG1sLmpvaW4oJycpXTtcblx0XHR9XG5cdFx0aHRtbC5wdXNoKCc8L3RhYmxlPicpO1xuXHRcdHJldHVybiBodG1sLmpvaW4oJycpO1xuXHR9O1xuXHRjb25zdCBhZGp1c3REYXRlID0gKGQsIG9mZnNldCkgPT4ge1xuXHRcdC8vIG9mZnNldCBpcyBpbiBtaW51dGVzXG5cdFx0Y29uc3QgbyA9IG9mZnNldCAqIDYwICogMTAwMDtcblx0XHRyZXR1cm4gbmV3IERhdGUoK2QgKyBvKTtcblx0fTtcblx0LyoqXG5cdCAqIFRoaXMgcmVsaWVzIG9uIHRoZSBEYXRlIHBhcnNlciB1bmRlcnN0YW5kaW5nIGVuLVVTIGRhdGVzLFxuXHQgKiB3aGljaCBpcyBwcmV0dHkgc2FmZSBhc3N1bXB0aW9uLCBidXQgbm90IHBlcmZlY3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGltZVpvbmVcblx0ICovXG5cdGNvbnN0IGNvbnZlcnRUaW1lWm9uZSA9IChkYXRlLCB0aW1lWm9uZSkgPT4ge1xuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHt0aW1lWm9uZX0pKTtcblx0fTtcblx0Y29uc3QgZm9ybWF0dGVkRGF0ZVRpbWUgPSAoZGF0ZSkgPT4ge1xuXHRcdC8vIGZhbGxiYWNrIGZvciBJRTExIGFuZCB1bmtub3duIHRpbWV6b25lc1xuXHRcdGlmICh1c2VUaW1lT2Zmc2V0KCkpIHtcblx0XHRcdHJldHVybiBgJHtmb3JtYXR0ZWREYXRlKGRhdGUpfSAke2Zvcm1hdHRlZFRpbWUoZGF0ZSl9YDtcblx0XHR9XG5cdFx0aWYgKGdldE1XRGF0ZUZvcm1hdCgpID09PSAnSVNPIDg2MDEnKSB7XG5cdFx0XHRjb25zdCBkMiA9IGNvbnZlcnRUaW1lWm9uZShkYXRlLCBnZXRUaW1lWm9uZSgpKTtcblx0XHRcdHJldHVybiBgJHttYXAoemVyb0ZpbGwsIFtkMi5nZXRGdWxsWWVhcigpLCBkMi5nZXRNb250aCgpICsgMSwgZDIuZ2V0RGF0ZSgpXSkuam9pbignLScpfVQke21hcCh6ZXJvRmlsbCwgW1xuXHRcdFx0XHRkMi5nZXRIb3VycygpLFxuXHRcdFx0XHRkMi5nZXRNaW51dGVzKCksXG5cdFx0XHRcdGQyLmdldFNlY29uZHMoKSxcblx0XHRcdF0pLmpvaW4oJzonKX1gO1xuXHRcdH1cblx0XHRjb25zdCBvcHRpb25zID0gZ2V0VmFsdWVPZigncG9wdXBEYXRlVGltZUZvcm1hdHRlck9wdGlvbnMnKTtcblx0XHRvcHRpb25zLnRpbWVab25lID0gZ2V0VGltZVpvbmUoKTtcblx0XHRyZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZyhnZXRMb2NhbGVzKCksIG9wdGlvbnMpO1xuXHR9O1xuXHRjb25zdCBmb3JtYXR0ZWREYXRlID0gKGRhdGUpID0+IHtcblx0XHRsZXQgZDI7XG5cdFx0Ly8gZmFsbGJhY2sgZm9yIElFMTEgYW5kIHVua25vd24gdGltZXpvbmVzXG5cdFx0aWYgKHVzZVRpbWVPZmZzZXQoKSkge1xuXHRcdFx0Ly8gd2UgYWRqdXN0IHRoZSBVVEMgdGltZSwgc28gd2UgcHJpbnQgdGhlIGFkanVzdGVkIFVUQywgYnV0IG5vdCByZWFsbHkgVVRDIHZhbHVlc1xuXHRcdFx0ZDIgPSBhZGp1c3REYXRlKGRhdGUsIGdldFRpbWVPZmZzZXQoKSk7XG5cdFx0XHRyZXR1cm4gbWFwKHplcm9GaWxsLCBbZDIuZ2V0VVRDRnVsbFllYXIoKSwgZDIuZ2V0VVRDTW9udGgoKSArIDEsIGQyLmdldFVUQ0RhdGUoKV0pLmpvaW4oJy0nKTtcblx0XHR9XG5cdFx0aWYgKGdldE1XRGF0ZUZvcm1hdCgpID09PSAnSVNPIDg2MDEnKSB7XG5cdFx0XHRkMiA9IGNvbnZlcnRUaW1lWm9uZShkYXRlLCBnZXRUaW1lWm9uZSgpKTtcblx0XHRcdHJldHVybiBtYXAoemVyb0ZpbGwsIFtkMi5nZXRGdWxsWWVhcigpLCBkMi5nZXRNb250aCgpICsgMSwgZDIuZ2V0RGF0ZSgpXSkuam9pbignLScpO1xuXHRcdH1cblx0XHRjb25zdCBvcHRpb25zID0gZ2V0VmFsdWVPZigncG9wdXBEYXRlRm9ybWF0dGVyT3B0aW9ucycpO1xuXHRcdG9wdGlvbnMudGltZVpvbmUgPSBnZXRUaW1lWm9uZSgpO1xuXHRcdHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhnZXRMb2NhbGVzKCksIG9wdGlvbnMpO1xuXHR9O1xuXHRjb25zdCBmb3JtYXR0ZWRUaW1lID0gKGRhdGUpID0+IHtcblx0XHRsZXQgZDI7XG5cdFx0Ly8gZmFsbGJhY2sgZm9yIElFMTEgYW5kIHVua25vd24gdGltZXpvbmVzXG5cdFx0aWYgKHVzZVRpbWVPZmZzZXQoKSkge1xuXHRcdFx0Ly8gd2UgYWRqdXN0IHRoZSBVVEMgdGltZSwgc28gd2UgcHJpbnQgdGhlIGFkanVzdGVkIFVUQywgYnV0IG5vdCByZWFsbHkgVVRDIHZhbHVlc1xuXHRcdFx0ZDIgPSBhZGp1c3REYXRlKGRhdGUsIGdldFRpbWVPZmZzZXQoKSk7XG5cdFx0XHRyZXR1cm4gbWFwKHplcm9GaWxsLCBbZDIuZ2V0VVRDSG91cnMoKSwgZDIuZ2V0VVRDTWludXRlcygpLCBkMi5nZXRVVENTZWNvbmRzKCldKS5qb2luKCc6Jyk7XG5cdFx0fVxuXHRcdGlmIChnZXRNV0RhdGVGb3JtYXQoKSA9PT0gJ0lTTyA4NjAxJykge1xuXHRcdFx0ZDIgPSBjb252ZXJ0VGltZVpvbmUoZGF0ZSwgZ2V0VGltZVpvbmUoKSk7XG5cdFx0XHRyZXR1cm4gbWFwKHplcm9GaWxsLCBbZDIuZ2V0SG91cnMoKSwgZDIuZ2V0TWludXRlcygpLCBkMi5nZXRTZWNvbmRzKCldKS5qb2luKCc6Jyk7XG5cdFx0fVxuXHRcdGNvbnN0IG9wdGlvbnMgPSBnZXRWYWx1ZU9mKCdwb3B1cFRpbWVGb3JtYXR0ZXJPcHRpb25zJyk7XG5cdFx0b3B0aW9ucy50aW1lWm9uZSA9IGdldFRpbWVab25lKCk7XG5cdFx0cmV0dXJuIGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKGdldExvY2FsZXMoKSwgb3B0aW9ucyk7XG5cdH07XG5cdC8vIEdldCB0aGUgcHJvcGVyIGdyb3VwbmFtZXMgZm9yIHRoZSB0ZWNobmljYWxncm91cHNcblx0Y29uc3QgZmV0Y2hVc2VyR3JvdXBOYW1lcyA9ICh1c2VyaW5mb1Jlc3BvbnNlKSA9PiB7XG5cdFx0Y29uc3QgcXVlcnlPYmogPSBnZXRKc09iaih1c2VyaW5mb1Jlc3BvbnNlKS5xdWVyeTtcblx0XHRjb25zdCB1c2VyID0gYW55Q2hpbGQocXVlcnlPYmoudXNlcnMpO1xuXHRcdGNvbnN0IG1lc3NhZ2VzID0gW107XG5cdFx0aWYgKHVzZXIuZ3JvdXBzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGdyb3VwTmFtZSBvZiB1c2VyLmdyb3Vwcykge1xuXHRcdFx0XHRpZiAoIVsnKicsICd1c2VyJywgJ2F1dG9jb25maXJtZWQnXS5pbmNsdWRlcyhncm91cE5hbWUpKSB7XG5cdFx0XHRcdFx0bWVzc2FnZXMucHVzaChgZ3JvdXAtJHtncm91cE5hbWV9LW1lbWJlcmApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChxdWVyeU9iai5nbG9iYWx1c2VyaW5mbyAmJiBxdWVyeU9iai5nbG9iYWx1c2VyaW5mby5ncm91cHMpIHtcblx0XHRcdGZvciAoY29uc3QgZ3JvdXBOYW1lIG9mIHF1ZXJ5T2JqLmdsb2JhbHVzZXJpbmZvLmdyb3Vwcykge1xuXHRcdFx0XHRtZXNzYWdlcy5wdXNoKGBncm91cC0ke2dyb3VwTmFtZX0tbWVtYmVyYCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBnZXRNd0FwaSgpLmxvYWRNZXNzYWdlc0lmTWlzc2luZyhtZXNzYWdlcyk7XG5cdH07XG5cdGNvbnN0IHNob3dBUElQcmV2aWV3ID0gKHF1ZXJ5VHlwZSwgaHRtbCwgaWQsIG5hdnBvcCwgZG93bmxvYWQpID0+IHtcblx0XHQvLyBESjogZG9uZVxuXHRcdGxldCB0YXJnZXQgPSAncG9wdXBQcmV2aWV3Jztcblx0XHRjb21wbGV0ZWROYXZwb3BUYXNrKG5hdnBvcCk7XG5cdFx0c3dpdGNoIChxdWVyeVR5cGUpIHtcblx0XHRcdGNhc2UgJ2ltYWdlbGlua3MnOlxuXHRcdFx0Y2FzZSAnY2F0ZWdvcnknOlxuXHRcdFx0XHR0YXJnZXQgPSAncG9wdXBQb3N0UHJldmlldyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndXNlcmluZm8nOlxuXHRcdFx0XHR0YXJnZXQgPSAncG9wdXBVc2VyRGF0YSc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmV2aXNpb24nOlxuXHRcdFx0XHRpbnNlcnRQcmV2aWV3KGRvd25sb2FkKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzZXRQb3B1cFRpcHNBbmRIVE1MKGh0bWwsIHRhcmdldCwgaWQpO1xuXHR9O1xuXHRjb25zdCBBUElyZXZpc2lvblByZXZpZXdIVE1MID0gKF9hcnRpY2xlLCBkb3dubG9hZCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBqc09iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpO1xuXHRcdFx0Y29uc3QgcGFnZSA9IGFueUNoaWxkKGpzT2JqLnF1ZXJ5LnBhZ2VzKTtcblx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0Ly8gVE9ETyB3ZSBuZWVkIHRvIGZpeCB0aGlzIHByb3BlciBsYXRlciBvblxuXHRcdFx0XHRkb3dubG9hZC5vd25lciA9IG51bGw7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGNvbnRlbnQgPVxuXHRcdFx0XHRwYWdlICYmIHBhZ2UucmV2aXNpb25zICYmIHBhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnRtb2RlbCA9PT0gJ3dpa2l0ZXh0J1xuXHRcdFx0XHRcdD8gcGFnZS5yZXZpc2lvbnNbMF0uY29udGVudFxuXHRcdFx0XHRcdDogbnVsbDtcblx0XHRcdGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0ZG93bmxvYWQuZGF0YSA9IGNvbnRlbnQ7XG5cdFx0XHRcdGRvd25sb2FkLmxhc3RNb2RpZmllZCA9IG5ldyBEYXRlKHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcCk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJ1JldmlzaW9uIHByZXZpZXcgZmFpbGVkIDooJztcblx0XHR9XG5cdH07XG5cdGNvbnN0IEFQSWJhY2tsaW5rc1ByZXZpZXdIVE1MID0gKF9hcnRpY2xlLCBkb3dubG9hZCAvKiAsIG5hdnBvcCAqLykgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBqc09iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpO1xuXHRcdFx0Y29uc3QgbGlzdCA9IGpzT2JqLnF1ZXJ5LmJhY2tsaW5rcztcblx0XHRcdGxldCBodG1sID0gW107XG5cdFx0XHRpZiAoIWxpc3QpIHtcblx0XHRcdFx0cmV0dXJuIHBvcHVwU3RyaW5nKCdObyBiYWNrbGlua3MgZm91bmQnKTtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBsaXN0KSB7XG5cdFx0XHRcdGNvbnN0IHQgPSBuZXcgVGl0bGUoZWxlbWVudC50aXRsZSk7XG5cdFx0XHRcdGh0bWwucHVzaChgPGEgaHJlZj1cIiR7cGcud2lraS50aXRsZWJhc2V9JHt0LnVybFN0cmluZygpfVwiPiR7dC50b1N0cmluZygpLmVudGlmeSgpfTwvYT5gKTtcblx0XHRcdH1cblx0XHRcdGh0bWwgPSBodG1sLmpvaW4oJywgJyk7XG5cdFx0XHRpZiAoanNPYmouY29udGludWUgJiYganNPYmouY29udGludWUuYmxjb250aW51ZSkge1xuXHRcdFx0XHRodG1sICs9IHBvcHVwU3RyaW5nKCcgYW5kIG1vcmUnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBodG1sO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICdiYWNrbGlua3NQcmV2aWV3SFRNTCB3ZW50IHdvbmt5Jztcblx0XHR9XG5cdH07XG5cdHBnLmZuLkFQSXNoYXJlZEltYWdlUGFnZVByZXZpZXdIVE1MID0gKG9iaikgPT4ge1xuXHRcdGxvZygnQVBJc2hhcmVkSW1hZ2VQYWdlUHJldmlld0hUTUwnKTtcblx0XHRjb25zdCBwb3B1cGlkID0gb2JqLnJlcXVlc3RpZDtcblx0XHRpZiAob2JqLnF1ZXJ5ICYmIG9iai5xdWVyeS5wYWdlcykge1xuXHRcdFx0Y29uc3QgcGFnZSA9IGFueUNoaWxkKG9iai5xdWVyeS5wYWdlcyk7XG5cdFx0XHRjb25zdCBjb250ZW50ID1cblx0XHRcdFx0cGFnZSAmJiBwYWdlLnJldmlzaW9ucyAmJiBwYWdlLnJldmlzaW9uc1swXS5jb250ZW50bW9kZWwgPT09ICd3aWtpdGV4dCdcblx0XHRcdFx0XHQ/IHBhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnRcblx0XHRcdFx0XHQ6IG51bGw7XG5cdFx0XHRpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnICYmIHBnICYmIHBnLmN1cnJlbnQgJiYgcGcuY3VycmVudC5saW5rICYmIHBnLmN1cnJlbnQubGluay5uYXZwb3B1cCkge1xuXHRcdFx0XHQvKiBOb3QgZW50aXJlbHkgc2FmZSwgYnV0IHRoZSBiZXN0IHdlIGNhbiBkbyAqL1xuXHRcdFx0XHRjb25zdCBwID0gbmV3IFByZXZpZXdtYWtlcihjb250ZW50LCBwZy5jdXJyZW50LmxpbmsubmF2cG9wdXAuYXJ0aWNsZSwgcGcuY3VycmVudC5saW5rLm5hdnBvcHVwKTtcblx0XHRcdFx0cC5tYWtlUHJldmlldygpO1xuXHRcdFx0XHRzZXRQb3B1cEhUTUwocC5odG1sLCAncG9wdXBTZWNvbmRQcmV2aWV3JywgcG9wdXBpZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBBUElpbWFnZXBhZ2VQcmV2aWV3SFRNTCA9IChhcnRpY2xlLCBkb3dubG9hZCwgbmF2cG9wKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGpzT2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSk7XG5cdFx0XHRjb25zdCBwYWdlID0gYW55Q2hpbGQoanNPYmoucXVlcnkucGFnZXMpO1xuXHRcdFx0Y29uc3QgY29udGVudCA9XG5cdFx0XHRcdHBhZ2UgJiYgcGFnZS5yZXZpc2lvbnMgJiYgcGFnZS5yZXZpc2lvbnNbMF0uY29udGVudG1vZGVsID09PSAnd2lraXRleHQnXG5cdFx0XHRcdFx0PyBwYWdlLnJldmlzaW9uc1swXS5jb250ZW50XG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0bGV0IHJldCA9ICcnO1xuXHRcdFx0bGV0IGFsdCA9ICcnO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0W3thbHR9XSA9IG5hdnBvcC5wYXJlbnRBbmNob3IuY2hpbGROb2Rlcztcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFsdCkge1xuXHRcdFx0XHRyZXQgPSBgJHtyZXR9PGhyPjxiPiR7cG9wdXBTdHJpbmcoJ0FsdCB0ZXh0OicpfTwvYj4gJHtwZy5lc2NhcGVRdW90ZXNIVE1MKGFsdCl9YDtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Y29uc3QgcCA9IHByZXBQcmV2aWV3bWFrZXIoY29udGVudCwgYXJ0aWNsZSwgbmF2cG9wKTtcblx0XHRcdFx0cC5tYWtlUHJldmlldygpO1xuXHRcdFx0XHRpZiAocC5odG1sKSB7XG5cdFx0XHRcdFx0cmV0ICs9IGA8aHI+JHtwLmh0bWx9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBTdW1tYXJ5RGF0YScpKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW5mbyA9IGdldFBhZ2VJbmZvKGNvbnRlbnQsIGRvd25sb2FkKTtcblx0XHRcdFx0XHRsb2coaW5mbyk7XG5cdFx0XHRcdFx0c2V0UG9wdXBUcmFpbGVyKGluZm8sIG5hdnBvcC5pZE51bWJlcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChwYWdlICYmIHBhZ2UuaW1hZ2VyZXBvc2l0b3J5ID09PSAnc2hhcmVkJykge1xuXHRcdFx0XHRjb25zdCBhcnQgPSBuZXcgVGl0bGUoYXJ0aWNsZSk7XG5cdFx0XHRcdGNvbnN0IGVuY2FydCA9IGVuY29kZVVSSUNvbXBvbmVudChgRmlsZToke2FydC5zdHJpcE5hbWVzcGFjZSgpfWApO1xuXHRcdFx0XHRjb25zdCBzaGFyZWRfdXJsID1cblx0XHRcdFx0XHRgJHtwZy53aWtpLmFwaWNvbW1vbnNiYXNlfT9mb3JtYXQ9anNvbiZmb3JtYXR2ZXJzaW9uPTJgICtcblx0XHRcdFx0XHQnJmNhbGxiYWNrPXBnLmZuLkFQSXNoYXJlZEltYWdlUGFnZVByZXZpZXdIVE1MJyArXG5cdFx0XHRcdFx0YCZyZXF1ZXN0aWQ9JHtuYXZwb3AuaWROdW1iZXJ9JmFjdGlvbj1xdWVyeSZwcm9wPXJldmlzaW9ucyZydnByb3A9Y29udGVudCZ0aXRsZXM9JHtlbmNhcnR9YDtcblx0XHRcdFx0cmV0ID0gYCR7cmV0fTxocj4ke3BvcHVwU3RyaW5nKCdJbWFnZSBmcm9tIENvbW1vbnMnKX06IDxhIGhyZWY9XCIke1xuXHRcdFx0XHRcdHBnLndpa2kuY29tbW9uc2Jhc2Vcblx0XHRcdFx0fT90aXRsZT0ke2VuY2FydH1cIj4ke3BvcHVwU3RyaW5nKCdEZXNjcmlwdGlvbiBwYWdlJyl9PC9hPmA7XG5cdFx0XHRcdG13LmxvYWRlci5sb2FkKHNoYXJlZF91cmwpO1xuXHRcdFx0fVxuXHRcdFx0c2hvd0FQSVByZXZpZXcoJ2ltYWdlbGlua3MnLCBBUElpbWFnZWxpbmtzUHJldmlld0hUTUwoYXJ0aWNsZSwgZG93bmxvYWQpLCBuYXZwb3AuaWROdW1iZXIsIGRvd25sb2FkKTtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJ0FQSSBpbWFnZXBhZ2UgcHJldmlldyBmYWlsZWQgOignO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgQVBJaW1hZ2VsaW5rc1ByZXZpZXdIVE1MID0gKF9hcnRpY2xlLCBkb3dubG9hZCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBqc29iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpO1xuXHRcdFx0Y29uc3QgbGlzdCA9IGpzb2JqLnF1ZXJ5LmltYWdldXNhZ2U7XG5cdFx0XHRpZiAobGlzdCkge1xuXHRcdFx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGxpc3QpIHtcblx0XHRcdFx0XHRyZXQucHVzaChlbGVtZW50LnRpdGxlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmV0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiBwb3B1cFN0cmluZygnTm8gaW1hZ2UgbGlua3MgZm91bmQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gYDxoMj4ke3BvcHVwU3RyaW5nKCdGaWxlIGxpbmtzJyl9PC9oMj4ke2xpbmtMaXN0KHJldCl9YDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBwb3B1cFN0cmluZygnTm8gaW1hZ2UgbGlua3MgZm91bmQnKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnSW1hZ2UgbGlua3MgcHJldmlldyBnZW5lcmF0aW9uIGZhaWxlZCA6KCc7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBBUEljYXRlZ29yeVByZXZpZXdIVE1MID0gKF9hcnRpY2xlLCBkb3dubG9hZCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBqc29iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpO1xuXHRcdFx0Y29uc3QgbGlzdCA9IGpzb2JqLnF1ZXJ5LmNhdGVnb3J5bWVtYmVycztcblx0XHRcdGxldCByZXQgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBsaXN0KSB7XG5cdFx0XHRcdHJldC5wdXNoKGVsZW1lbnQudGl0bGUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHJldC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHBvcHVwU3RyaW5nKCdFbXB0eSBjYXRlZ29yeScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0ID0gYDxoMj4ke3RwcmludGYoJ0NhdGVnb3J5IG1lbWJlcnMgKCVzIHNob3duKScsIFtyZXQubGVuZ3RoXSl9PC9oMj4ke2xpbmtMaXN0KHJldCl9YDtcblx0XHRcdGlmIChqc29iai5jb250aW51ZSAmJiBqc29iai5jb250aW51ZS5jbWNvbnRpbnVlKSB7XG5cdFx0XHRcdHJldCArPSBwb3B1cFN0cmluZygnIGFuZCBtb3JlJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICdDYXRlZ29yeSBwcmV2aWV3IGZhaWxlZCA6KCc7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBBUEl1c2VySW5mb1ByZXZpZXdIVE1MID0gKF9hcnRpY2xlLCBkb3dubG9hZCkgPT4ge1xuXHRcdGxldCByZXQgPSBbXTtcblx0XHRsZXQgcXVlcnlvYmogPSB7fTtcblx0XHR0cnkge1xuXHRcdFx0cXVlcnlvYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKS5xdWVyeTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnVXNlcmluZm8gcHJldmlldyBmYWlsZWQgOignO1xuXHRcdH1cblx0XHRjb25zdCB1c2VyID0gYW55Q2hpbGQocXVlcnlvYmoudXNlcnMpO1xuXHRcdGlmICh1c2VyKSB7XG5cdFx0XHRjb25zdCB7Z2xvYmFsdXNlcmluZm99ID0gcXVlcnlvYmo7XG5cdFx0XHRpZiAodXNlci5pbnZhbGlkID09PSAnJykge1xuXHRcdFx0XHRyZXQucHVzaChwb3B1cFN0cmluZygnSW52YWxpZCB1c2VyJykpO1xuXHRcdFx0fSBlbHNlIGlmICh1c2VyLm1pc3NpbmcgPT09ICcnKSB7XG5cdFx0XHRcdHJldC5wdXNoKHBvcHVwU3RyaW5nKCdOb3QgYSByZWdpc3RlcmVkIHVzZXJuYW1lJykpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHVzZXIuYmxvY2tlZGJ5KSB7XG5cdFx0XHRcdGlmICh1c2VyLmJsb2NrcGFydGlhbCkge1xuXHRcdFx0XHRcdHJldC5wdXNoKGA8Yj4ke3BvcHVwU3RyaW5nKCdIYXMgYmxvY2tzJyl9PC9iPmApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldC5wdXNoKGA8Yj4ke3BvcHVwU3RyaW5nKCdCTE9DS0VEJyl9PC9iPmApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZ2xvYmFsdXNlcmluZm8gJiYgKCdsb2NrZWQnIGluIGdsb2JhbHVzZXJpbmZvIHx8ICdoaWRkZW4nIGluIGdsb2JhbHVzZXJpbmZvKSkge1xuXHRcdFx0XHRsZXQgbG9ja2VkU3VsQWNjb3VudElzQXR0YWNoZWRUb1RoaXMgPSB0cnVlO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgZ2xvYmFsdXNlcmluZm8udW5hdHRhY2hlZCAmJiBpIDwgZ2xvYmFsdXNlcmluZm8udW5hdHRhY2hlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChnbG9iYWx1c2VyaW5mby51bmF0dGFjaGVkW2ldLndpa2kgPT09IG13LmNvbmZpZy5nZXQoJ3dnREJuYW1lJykpIHtcblx0XHRcdFx0XHRcdGxvY2tlZFN1bEFjY291bnRJc0F0dGFjaGVkVG9UaGlzID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGxvY2tlZFN1bEFjY291bnRJc0F0dGFjaGVkVG9UaGlzKSB7XG5cdFx0XHRcdFx0aWYgKCdsb2NrZWQnIGluIGdsb2JhbHVzZXJpbmZvKSB7XG5cdFx0XHRcdFx0XHRyZXQucHVzaChgPGI+PGk+JHtwb3B1cFN0cmluZygnTE9DS0VEJyl9PC9pPjwvYj5gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCdoaWRkZW4nIGluIGdsb2JhbHVzZXJpbmZvKSB7XG5cdFx0XHRcdFx0XHRyZXQucHVzaChgPGI+PGk+JHtwb3B1cFN0cmluZygnSElEREVOJyl9PC9pPjwvYj5gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFNob3dHZW5kZXInKSAmJiB1c2VyLmdlbmRlcikge1xuXHRcdFx0XHRzd2l0Y2ggKHVzZXIuZ2VuZGVyKSB7XG5cdFx0XHRcdFx0Y2FzZSAnbWFsZSc6XG5cdFx0XHRcdFx0XHRyZXQucHVzaChgJHtwb3B1cFN0cmluZygnaGUvaGltJyl9IMK3IGApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnZmVtYWxlJzpcblx0XHRcdFx0XHRcdHJldC5wdXNoKGAke3BvcHVwU3RyaW5nKCdzaGUvaGVyJyl9IMK3IGApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh1c2VyLmdyb3Vwcykge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGdyb3VwTmFtZSBvZiB1c2VyLmdyb3Vwcykge1xuXHRcdFx0XHRcdGlmICghWycqJywgJ3VzZXInLCAnYXV0b2NvbmZpcm1lZCddLmluY2x1ZGVzKGdyb3VwTmFtZSkpIHtcblx0XHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHRcdC8vICogc2VlIFtbU3BlY2lhbDpQcmVmaXhJbmRleC9NZWRpYVdpa2k6R3JvdXAtXV1cblx0XHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHRcdHJldC5wdXNoKHBnLmVzY2FwZVF1b3Rlc0hUTUwobXcubWVzc2FnZShgZ3JvdXAtJHtncm91cE5hbWV9LW1lbWJlcmAsIHVzZXIuZ2VuZGVyKS50ZXh0KCkpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChnbG9iYWx1c2VyaW5mbyAmJiBnbG9iYWx1c2VyaW5mby5ncm91cHMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBncm91cE5hbWUgb2YgZ2xvYmFsdXNlcmluZm8uZ3JvdXBzKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goXG5cdFx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0XHQvLyAqIHNlZSBbW1NwZWNpYWw6UHJlZml4SW5kZXgvTWVkaWFXaWtpOkdyb3VwLV1dXG5cdFx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0XHRgPGk+JHtwZy5lc2NhcGVRdW90ZXNIVE1MKG13Lm1lc3NhZ2UoYGdyb3VwLSR7Z3JvdXBOYW1lfS1tZW1iZXJgLCB1c2VyLmdlbmRlcikudGV4dCgpKX08L2k+YFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh1c2VyLnJlZ2lzdHJhdGlvbikge1xuXHRcdFx0XHRyZXQucHVzaChcblx0XHRcdFx0XHRwZy5lc2NhcGVRdW90ZXNIVE1MKFxuXHRcdFx0XHRcdFx0KHVzZXIuZWRpdGNvdW50ID8/ICcwJykgK1xuXHRcdFx0XHRcdFx0XHRwb3B1cFN0cmluZygnIGVkaXRzIHNpbmNlOiAnKSArXG5cdFx0XHRcdFx0XHRcdCh1c2VyLnJlZ2lzdHJhdGlvbiA/IGZvcm1hdHRlZERhdGUobmV3IERhdGUodXNlci5yZWdpc3RyYXRpb24pKSA6ICcnKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHF1ZXJ5b2JqLnVzZXJjb250cmlicyAmJiBxdWVyeW9iai51c2VyY29udHJpYnMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0LnB1c2gocG9wdXBTdHJpbmcoJ2xhc3QgZWRpdCBvbiAnKSArIGZvcm1hdHRlZERhdGUobmV3IERhdGUocXVlcnlvYmoudXNlcmNvbnRyaWJzWzBdLnRpbWVzdGFtcCkpKTtcblx0XHR9XG5cdFx0aWYgKHF1ZXJ5b2JqLmJsb2Nrcykge1xuXHRcdFx0cmV0LnB1c2gocG9wdXBTdHJpbmcoJ0lQIHVzZXInKSk7IC8vIHdlIG9ubHkgcmVxdWVzdCBsaXN0PWJsb2NrcyBmb3IgSVBzXG5cdFx0XHRmb3IgKGxldCBsID0gMDsgbCA8IHF1ZXJ5b2JqLmJsb2Nrcy5sZW5ndGg7IGwrKykge1xuXHRcdFx0XHRsZXQgcmJzdHIgPSBxdWVyeW9iai5ibG9ja3NbbF0ucmFuZ2VzdGFydCA9PT0gcXVlcnlvYmouYmxvY2tzW2xdLnJhbmdlZW5kID8gJ0JMT0NLJyA6ICdSQU5HRUJMT0NLJztcblx0XHRcdFx0cmJzdHIgPSBBcnJheS5pc0FycmF5KHF1ZXJ5b2JqLmJsb2Nrc1tsXS5yZXN0cmljdGlvbnMpID8gYCR7cmJzdHJ9RURgIDogYEhhcyAke3Jic3RyLnRvTG93ZXJDYXNlKCl9c2A7XG5cdFx0XHRcdHJldC5wdXNoKGA8Yj4ke3BvcHVwU3RyaW5nKHJic3RyKX08L2I+YCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGlmIGFueSBlbGVtZW50IG9mIHJldCBlbmRzIHdpdGggJyDCtyAnLCBtZXJnZSBpdCB3aXRoIHRoZSBuZXh0IGVsZW1lbnQgdG8gYXZvaWRcblx0XHQvLyB0aGUgLmpvaW4oJywgJykgY2FsbCBpbnNlcnRpbmcgYSBjb21tYSBhZnRlciBpdFxuXHRcdGZvciAobGV0IG0gPSAwOyBtIDwgcmV0Lmxlbmd0aCAtIDE7IG0rKykge1xuXHRcdFx0aWYgKHJldFttXS5sZW5ndGggPiAzICYmIHJldFttXS5zbGljZShNYXRoLm1heCgwLCByZXRbbV0ubGVuZ3RoIC0gMykpID09PSAnIMK3ICcpIHtcblx0XHRcdFx0cmV0W21dICs9IHJldFttICsgMV07XG5cdFx0XHRcdHJldC5zcGxpY2UobSArIDEsIDEpOyAvLyBkZWxldGUgZWxlbWVudCBhdCBpbmRleCBtKzFcblx0XHRcdFx0bS0tO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXQgPSBgPGhyPiR7cmV0LmpvaW4oJywgJyl9YDtcblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBBUEljb250cmlic1ByZXZpZXdIVE1MID0gKGFydGljbGUsIGRvd25sb2FkLCBuYXZwb3ApID0+IHtcblx0XHRyZXR1cm4gQVBJaGlzdG9yeVByZXZpZXdIVE1MKGFydGljbGUsIGRvd25sb2FkLCBuYXZwb3AsIHRydWUpO1xuXHR9O1xuXHRjb25zdCBBUEloaXN0b3J5UHJldmlld0hUTUwgPSAoYXJ0aWNsZSwgZG93bmxvYWQsIF9uYXZwb3AsIHJlYWxseUNvbnRyaWJzKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGpzb2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSk7XG5cdFx0XHRsZXQgZWRpdHMgPSBbXTtcblx0XHRcdGVkaXRzID0gcmVhbGx5Q29udHJpYnMgPyBqc29iai5xdWVyeS51c2VyY29udHJpYnMgOiBhbnlDaGlsZChqc29iai5xdWVyeS5wYWdlcykucmV2aXNpb25zO1xuXHRcdFx0Y29uc3QgcmV0ID0gZWRpdFByZXZpZXdUYWJsZShhcnRpY2xlLCBlZGl0cywgcmVhbGx5Q29udHJpYnMpO1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnSGlzdG9yeSBwcmV2aWV3IGZhaWxlZCA6LSgnO1xuXHRcdH1cblx0fTtcblx0Ly8gRU5ERklMRTogcXVlcnlwcmV2aWV3LmpzXG5cdC8vIFNUQVJURklMRTogZGVidWcuanNcblx0Ly8gRGVidWdnaW5nIGZ1bmN0aW9uc1xuXHRjb25zdCBzZXR1cERlYnVnZ2luZyA9ICgpID0+IHtcblx0XHRpZiAod2luZG93LnBvcHVwRGVidWcpIHtcblx0XHRcdC8vIHBvcHVwRGVidWcgaXMgc2V0IGZyb20gLnZlcnNpb25cblx0XHRcdHdpbmRvdy5sb2cgPSAoeCkgPT4ge1xuXHRcdFx0XHQvLyBpZiAoZyBNc2cgIT09ICcnKSB7IGdNc2cgKz0gJ1xcbic7IGdNc2crPXRpbWUoKSArICcgJyArIHg7IH1cblx0XHRcdFx0Y29uc29sZS5sb2coeCk7XG5cdFx0XHR9O1xuXHRcdFx0d2luZG93LmVycmxvZyA9ICh4KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYFtQb3B1cHNdICR7eH1gKTtcblx0XHRcdH07XG5cdFx0XHRsb2coJ0luaXRpYWxpemluZyBsb2dnZXInKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2luZG93LmxvZyA9ICgpID0+IHt9O1xuXHRcdFx0d2luZG93LmVycmxvZyA9ICgpID0+IHt9O1xuXHRcdH1cblx0fTtcblx0Ly8gRU5ERklMRTogZGVidWcuanNcblx0Ly8gU1RBUlRGSUxFOiBpbWFnZXMuanNcblx0Ly8gbG9hZCBpbWFnZSBvZiB0eXBlIFRpdGxlLlxuXHRjb25zdCBsb2FkSW1hZ2UgPSAoaW1hZ2UsIG5hdnBvcCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgaW1hZ2Uuc3RyaXBOYW1lc3BhY2UgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KCdsb2FkSW1hZ2VzIGJhZCcsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0fVxuXHRcdC8vIEFQSSBjYWxsIHRvIHJldHJpZXZlIGltYWdlIGluZm8uXG5cdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cEltYWdlcycpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghaXNWYWxpZEltYWdlTmFtZShpbWFnZS50b1N0cmluZygpKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBhcnQgPSBpbWFnZS51cmxTdHJpbmcoKTtcblx0XHRsZXQgdXJsID0gYCR7cGcud2lraS5hcGl3aWtpYmFzZX0/Zm9ybWF0PWpzb24mZm9ybWF0dmVyc2lvbj0yJmFjdGlvbj1xdWVyeWA7XG5cdFx0dXJsICs9IGAmcHJvcD1pbWFnZWluZm8maWlwcm9wPXVybHxtaW1lJmlpdXJsd2lkdGg9JHtnZXRWYWx1ZU9mKCdwb3B1cEltYWdlU2l6ZUxhcmdlJyl9YDtcblx0XHR1cmwgKz0gYCZ0aXRsZXM9JHthcnR9YDtcblx0XHRwZW5kaW5nTmF2cG9wVGFzayhuYXZwb3ApO1xuXHRcdGNvbnN0IGNhbGxiYWNrID0gKGQpID0+IHtcblx0XHRcdHBvcHVwc0luc2VydEltYWdlKG5hdnBvcC5pZE51bWJlciwgbmF2cG9wLCBkKTtcblx0XHR9O1xuXHRcdGNvbnN0IGdvID0gKCkgPT4ge1xuXHRcdFx0Z2V0UGFnZVdpdGhDYWNoaW5nKHVybCwgY2FsbGJhY2ssIG5hdnBvcCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdGlmIChuYXZwb3AudmlzaWJsZSB8fCAhZ2V0VmFsdWVPZigncG9wdXBMYXp5RG93bmxvYWRzJykpIHtcblx0XHRcdGdvKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5hdnBvcC5hZGRIb29rKGdvLCAndW5oaWRlJywgJ2FmdGVyJywgJ0RPV05MT0FEX0lNQUdFX1FVRVJZX0RBVEEnKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHBvcHVwc0luc2VydEltYWdlID0gKGlkLCBfbmF2cG9wLCBkb3dubG9hZCkgPT4ge1xuXHRcdGxvZygncG9wdXBzSW5zZXJ0SW1hZ2UnKTtcblx0XHRsZXQgaW1hZ2VpbmZvO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBqc09iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpO1xuXHRcdFx0Y29uc3QgaW1hZ2VwYWdlID0gYW55Q2hpbGQoanNPYmoucXVlcnkucGFnZXMpO1xuXHRcdFx0aWYgKGltYWdlcGFnZS5pbWFnZWluZm8gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRbaW1hZ2VpbmZvXSA9IGltYWdlcGFnZS5pbWFnZWluZm87XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRsb2coJ3BvcHVwc0luc2VydEltYWdlIGZhaWxlZCA6KCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBwb3B1cEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BvcHVwSW1nJHtpZH1gKTtcblx0XHRpZiAoIXBvcHVwSW1hZ2UpIHtcblx0XHRcdGxvZygnY291bGQgbm90IGZpbmQgaW5zZXJ0aW9uIHBvaW50IGZvciBpbWFnZScpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRwb3B1cEltYWdlLndpZHRoID0gZ2V0VmFsdWVPZigncG9wdXBJbWFnZVNpemUnKTtcblx0XHRwb3B1cEltYWdlLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0XHQvLyBTZXQgdGhlIHNvdXJjZSBmb3IgdGhlIGltYWdlLlxuXHRcdGlmIChpbWFnZWluZm8udGh1bWJ1cmwpIHtcblx0XHRcdHBvcHVwSW1hZ2Uuc3JjID0gaW1hZ2VpbmZvLnRodW1idXJsO1xuXHRcdH0gZWxzZSBpZiAoaW1hZ2VpbmZvLm1pbWUuaW5kZXhPZignaW1hZ2UnKSA9PT0gMCkge1xuXHRcdFx0cG9wdXBJbWFnZS5zcmMgPSBpbWFnZWluZm8udXJsO1xuXHRcdFx0bG9nKCdhIHRodW1iIGNvdWxkIG5vdCBiZSBmb3VuZCwgdXNpbmcgb3JpZ2luYWwgaW1hZ2UnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9nKFwiZnVsbHNpemUgaW1hZ2V0aHVtYiwgYnV0IG5vdCBzdXJlIGlmIGl0J3MgYW4gaW1hZ2VcIik7XG5cdFx0fVxuXHRcdGNvbnN0IGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcG9wdXBJbWFnZUxpbmske2lkfWApO1xuXHRcdGlmIChhID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Ly8gRGV0ZXJtaW5lIHRoZSBhY3Rpb24gb2YgdGhlIHN1cnJvdWRpbmcgaW1hZ2VsaW5rLlxuXHRcdHN3aXRjaCAoZ2V0VmFsdWVPZigncG9wdXBUaHVtYkFjdGlvbicpKSB7XG5cdFx0XHRjYXNlICdpbWFnZXBhZ2UnOlxuXHRcdFx0XHRpZiAocGcuY3VycmVudC5hcnRpY2xlLm5hbWVzcGFjZUlkKCkgIT09IHBnLm5zSW1hZ2VJZCkge1xuXHRcdFx0XHRcdGEuaHJlZiA9IGltYWdlaW5mby5kZXNjcmlwdGlvbnVybDtcblx0XHRcdFx0XHQvLyBGSVhNRTogdW5yZWxpYWJsZSBwZy5pZE51bWJlclxuXHRcdFx0XHRcdHBvcFRpcHNTb29uRm4oYHBvcHVwSW1hZ2Uke2lkfWApKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdC8qIGZhbGxzIHRocm91Z2ggKi9cblx0XHRcdGNhc2UgJ3NpemV0b2dnbGUnOlxuXHRcdFx0XHRhLm9uY2xpY2sgPSB0b2dnbGVTaXplO1xuXHRcdFx0XHRhLnRpdGxlID0gcG9wdXBTdHJpbmcoJ1RvZ2dsZSBpbWFnZSBzaXplJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdGNhc2UgJ2xpbmtmdWxsJzpcblx0XHRcdFx0YS5ocmVmID0gaW1hZ2VpbmZvLnVybDtcblx0XHRcdFx0YS50aXRsZSA9IHBvcHVwU3RyaW5nKCdPcGVuIGZ1bGwtc2l6ZSBpbWFnZScpO1xuXHRcdH1cblx0fTtcblx0Ly8gVG9nZ2xlcyB0aGUgaW1hZ2UgYmV0d2VlbiBpbmxpbmUgc21hbGwgYW5kIG5hdnBvcCBmdWxsd2lkdGguXG5cdC8vIEl0J3MgdGhlIHNhbWUgaW1hZ2UsIG5vIGFjdHVhbCBzaXplY2hhbmdlIG9jY3Vycywgb25seSBkaXNwbGF5IHdpZHRoLlxuXHRjb25zdCB0b2dnbGVTaXplID0gZnVuY3Rpb24gdG9nZ2xlU2l6ZSgpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRpZiAoIXNlbGYpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KCdzZWxmIGlzIG51bGwgOi8nLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBpbWcgPSBzZWxmLmZpcnN0Q2hpbGQ7XG5cdFx0aWYgKCFpbWcpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KCdpbWcgaXMgbnVsbCA6LycsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGltZy5zdHlsZS53aWR0aCA9ICFpbWcuc3R5bGUud2lkdGggfHwgaW1nLnN0eWxlLndpZHRoID09PSAnJyA/ICcxMDAlJyA6ICcnO1xuXHR9O1xuXHQvLyBSZXR1cm5zIG9uZSB0aXRsZSBvZiBhbiBpbWFnZSBmcm9tIHdpa2lUZXh0LlxuXHRjb25zdCBnZXRWYWxpZEltYWdlRnJvbVdpa2lUZXh0ID0gKHdpa2lUZXh0KSA9PiB7XG5cdFx0Ly8gbmIgaW4gcGcucmUuaW1hZ2Ugd2UncmUgaW50ZXJlc3RlZCBpbiB0aGUgc2Vjb25kIGJyYWNrZXRlZCBleHByZXNzaW9uXG5cdFx0Ly8gdGhpcyBtYXkgY2hhbmdlIGlmIHRoZSByZWdleCBjaGFuZ2VzIDotKFxuXHRcdC8vIGxldCBtYXRjaD1wZy5yZS5pbWFnZS5leGVjKHdpa2lUZXh0KTtcblx0XHRsZXQgbWF0Y2hlZDtcblx0XHRsZXQgbWF0Y2g7XG5cdFx0Ly8gc3RyaXAgaHRtbCBjb21tZW50cywgdXNlZCBieSBldmlsIGJvdHMgOi0oXG5cdFx0Y29uc3QgdCA9IHJlbW92ZU1hdGNoZXNVbmxlc3Mod2lraVRleHQsIC8oPCEtLVtcXFNcXHNdKj8tLT4pLywgMSwgL148IS0tW15bXSpwb3B1cC9pKTtcblx0XHR3aGlsZSAoKG1hdGNoID0gcGcucmUuaW1hZ2UuZXhlYyh0KSkgIT09IG51bGwpIHtcblx0XHRcdC8vIG5vdyBmaW5kIGEgc2FuZSBpbWFnZSBuYW1lIC0gZXhjbHVkZSB0ZW1wbGF0ZXMgYnkgc2Vla2luZyB7XG5cdFx0XHRjb25zdCBtID0gbWF0Y2hbMl0gfHwgbWF0Y2hbNl07XG5cdFx0XHRpZiAoaXNWYWxpZEltYWdlTmFtZShtKSkge1xuXHRcdFx0XHRtYXRjaGVkID0gbTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHBnLnJlLmltYWdlLmxhc3RJbmRleCA9IDA7XG5cdFx0aWYgKCFtYXRjaGVkKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIGAke213LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zSW1hZ2VJZF19OiR7dXBjYXNlRmlyc3QobWF0Y2hlZCl9YDtcblx0fTtcblx0Y29uc3QgcmVtb3ZlTWF0Y2hlc1VubGVzcyA9IChzdHIsIHJlMSwgcGFyZW5jb3VudCwgcmUyKSA9PiB7XG5cdFx0Y29uc3Qgc3BsaXQgPSBzdHIuc3BsaXQocmUxKTtcblx0XHRjb25zdCBjID0gcGFyZW5jb3VudCArIDE7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGkgJSBjID09PSAwIHx8IHJlMi50ZXN0KHNwbGl0W2ldKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHNwbGl0W2ldID0gJyc7XG5cdFx0fVxuXHRcdHJldHVybiBzcGxpdC5qb2luKCcnKTtcblx0fTtcblx0Ly8gRU5ERklMRTogaW1hZ2VzLmpzXG5cdC8vIFNUQVJURklMRTogbmFtZXNwYWNlcy5qc1xuXHQvLyBTZXQgdXAgbmFtZXNwYWNlcyBhbmQgb3RoZXIgbm9uLXN0cmluZ3MuanMgbG9jYWxpemF0aW9uXG5cdC8vIChjdXJyZW50bHkgdGhhdCBtZWFucyByZWRpcnMgdG9vKVxuXHRjb25zdCBzZXROYW1lc3BhY2VzID0gKCkgPT4ge1xuXHRcdHBnLm5zU3BlY2lhbElkID0gLTE7XG5cdFx0cGcubnNNYWluc3BhY2VJZCA9IDA7XG5cdFx0cGcubnNJbWFnZUlkID0gNjtcblx0XHRwZy5uc1VzZXJJZCA9IDI7XG5cdFx0cGcubnNVc2VydGFsa0lkID0gMztcblx0XHRwZy5uc0NhdGVnb3J5SWQgPSAxNDtcblx0XHRwZy5uc1RlbXBsYXRlSWQgPSAxMDtcblx0fTtcblx0Y29uc3Qgc2V0UmVkaXJzID0gKCkgPT4ge1xuXHRcdGNvbnN0IHIgPSAncmVkaXJlY3QnO1xuXHRcdGNvbnN0IFIgPSAnUkVESVJFQ1QnO1xuXHRcdGNvbnN0IHJlZGlyTGlzdHMgPSB7XG5cdFx0XHRhcjogW1IsICfYqtit2YjZitmEJ10sXG5cdFx0XHRiZTogW3IsICfQv9C10YDQsNC90LDQutGW0YDQsNCy0LDQvdGM0L3QtSddLFxuXHRcdFx0Ymc6IFtyLCAn0L/RgNC10L3QsNGB0L7Rh9Cy0LDQvdC1JywgJ9Cy0LjQtiddLFxuXHRcdFx0YnM6IFtyLCAnUHJldXNtamVyaScsICdwcmV1c21qZXJpJywgJ1BSRVVTTUpFUkknXSxcblx0XHRcdGJuOiBbUiwgJ+CmquCngeCmqOCmsOCnjeCmqOCmv+CmsOCnjeCmpuCnh+CmtiddLFxuXHRcdFx0Y3M6IFtSLCAnUMWYRVNNxJpSVUonXSxcblx0XHRcdGN5OiBbciwgJ2FpbC1jeWZlaXJpbyddLFxuXHRcdFx0ZGU6IFtSLCAnV0VJVEVSTEVJVFVORyddLFxuXHRcdFx0ZWw6IFtSLCAnzpHOnc6RzprOkc6kzpXOpc6YzqXOnc6jzpcnXSxcblx0XHRcdGVvOiBbUiwgJ0FMSURJUkVLVFUnLCAnQUxJRElSRUtUSSddLFxuXHRcdFx0ZXM6IFtSLCAnUkVESVJFQ0NJw5NOJ10sXG5cdFx0XHRldDogW3IsICdzdXVuYSddLFxuXHRcdFx0Z2E6IFtyLCAnYXRoc2hlb2xhZGgnXSxcblx0XHRcdGdsOiBbciwgJ1JFRElSRUNDScOTTicsICdSRURJUkVDSU9OQU1FTlRPJ10sXG5cdFx0XHRoZTogW1IsICfXlNek16DXmdeUJ10sXG5cdFx0XHRodTogW1IsICfDgVRJUsOBTlnDjVTDgVMnXSxcblx0XHRcdGlzOiBbciwgJ3RpbHbDrXN1bicsICdUSUxWw41TVU4nXSxcblx0XHRcdGl0OiBbUiwgJ1JJTlZJQScsICdSaW52aWEnXSxcblx0XHRcdGphOiBbUiwgJ+i7oumAgSddLFxuXHRcdFx0bWs6IFtyLCAn0L/RgNC10L3QsNGB0L7Rh9GD0LLQsNGa0LUnLCAn0LLQuNC00LgnXSxcblx0XHRcdG5kczogW3IsICd3aWVkZXJsZWlkZW4nXSxcblx0XHRcdCduZHMtbmwnOiBbUiwgJ0RFVVJWRVJXSUVaSU5HJywgJ0RVVVJWRVJXSUVaSU5HJ10sXG5cdFx0XHRubDogW1IsICdET09SVkVSV0lKWklORyddLFxuXHRcdFx0bm46IFtyLCAnb21kaXJpZ2VyJ10sXG5cdFx0XHRwbDogW1IsICdQQVRSWicsICdQUlpFS0lFUlVKJywgJ1RBTSddLFxuXHRcdFx0cHQ6IFtSLCAncmVkaXInXSxcblx0XHRcdHJ1OiBbUiwgJ9Cf0JXQoNCV0J3QkNCf0KDQkNCS0JvQldCd0JjQlScsICfQn9CV0KDQldCd0JDQn9CgJ10sXG5cdFx0XHRzazogW3IsICdwcmVzbWVydWonXSxcblx0XHRcdHNyOiBbciwgJ9Cf0YDQtdGD0YHQvNC10YDQuCcsICfQv9GA0LXRg9GB0LzQtdGA0LgnLCAn0J/QoNCV0KPQodCc0JXQoNCYJywgJ1ByZXVzbWVyaScsICdwcmV1c21lcmknLCAnUFJFVVNNRVJJJ10sXG5cdFx0XHR0dDogW1IsICd5w7xuw6RsdMO8JywgJ9C/0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90LjQtScsICfQv9C10YDQtdC90LDQv9GAJ10sXG5cdFx0XHR1azogW1IsICfQn9CV0KDQldCd0JDQn9Cg0JDQktCb0JXQndCd0K8nLCAn0J/QldCg0JXQndCQ0J/QoCddLFxuXHRcdFx0dmk6IFtyLCAnxJHhu5VpJ10sXG5cdFx0XHR5aTogW1IsICfXldeV15nXmdeY16LXqNek15nXqNefJ10sXG5cdFx0XHR6aDogW1IsICfph43lrprlkJEnXSwgLy8gbm8gY29tbWFcblx0XHR9O1xuXHRcdGNvbnN0IHJlZGlyTGlzdCA9IHJlZGlyTGlzdHNbcGcud2lraS5sYW5nXSB8fCBbciwgUl07XG5cdFx0Ly8gTWVkaWF3aWtpIGlzIHZlcnkgdG9sZXJhbnQgYWJvdXQgd2hhdCBjb21lcyBhZnRlciB0aGUgI3JlZGlyZWN0IGF0IHRoZSBzdGFydFxuXHRcdHBnLnJlLnJlZGlyZWN0ID0gbmV3IFJlZ0V4cChcblx0XHRcdGBeXFxcXHMqWyNdKCR7cmVkaXJMaXN0LmpvaW4oJ3wnKX0pLio/XFxcXFt7Mn0oW15cXFxcfFxcXFxdXSopKHxbXlxcXFxdXSopP1xcXFxdezJ9XFxcXHMqKC4qKWAsXG5cdFx0XHQnaSdcblx0XHQpO1xuXHR9O1xuXHRjb25zdCBzZXRJbnRlcndpa2kgPSAoKSA9PiB7XG5cdFx0aWYgKHBnLndpa2kud2lraW1lZGlhKSB7XG5cdFx0XHQvLyBGcm9tIHtAbGluayBodHRwczovL21ldGEud2lraW1lZGlhLm9yZy93aWtpL0xpc3Rfb2ZfV2lraXBlZGlhc31cblx0XHRcdC8vIHtAbGluayBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvdy9hcGkucGhwP2FjdGlvbj1zaXRlbWF0cml4JmZvcm1hdD1qc29uJnNtdHlwZT1sYW5ndWFnZSZzbWxhbmdwcm9wPWNvZGUmZm9ybWF0dmVyc2lvbj0yfVxuXHRcdFx0cGcud2lraS5pbnRlcndpa2kgPVxuXHRcdFx0XHQnYWF8YWJ8YWNlfGFmfGFrfGFsc3xhbXxhbnxhbmd8YXJ8YXJjfGFyenxhc3xhc3R8YXZ8YXl8YXp8YmF8YmFyfGJhdC1zbWd8YmNsfGJlfGJlLXgtb2xkfGJnfGJofGJpfGJqbnxibXxibnxib3xicHl8YnJ8YnN8YnVnfGJ4cnxjYXxjYmstemFtfGNkb3xjZXxjZWJ8Y2h8Y2hvfGNocnxjaHl8Y2tifGNvfGNyfGNyaHxjc3xjc2J8Y3V8Y3Z8Y3l8ZGF8ZGV8ZGlxfGRzYnxkdnxkenxlZXxlbHxlbWx8ZW58ZW98ZXN8ZXR8ZXV8ZXh0fGZhfGZmfGZpfGZpdS12cm98Zmp8Zm98ZnJ8ZnJwfGZycnxmdXJ8Znl8Z2F8Z2FnfGdhbnxnZHxnbHxnbGt8Z258Z290fGd1fGd2fGhhfGhha3xoYXd8aGV8aGl8aGlmfGhvfGhyfGhzYnxodHxodXxoeXxoenxpYXxpZHxpZXxpZ3xpaXxpa3xpbG98aW98aXN8aXR8aXV8amF8amJvfGp2fGthfGthYXxrYWJ8a2JkfGtnfGtpfGtqfGtrfGtsfGttfGtufGtvfGtvaXxrcnxrcmN8a3N8a3NofGt1fGt2fGt3fGt5fGxhfGxhZHxsYnxsYmV8bGd8bGl8bGlqfGxtb3xsbnxsb3xsdHxsdGd8bHZ8bWFwLWJtc3xtZGZ8bWd8bWh8bWhyfG1pfG1rfG1sfG1ufG1vfG1yfG1yanxtc3xtdHxtdXN8bXdsfG15fG15dnxtem58bmF8bmFofG5hcHxuZHN8bmRzLW5sfG5lfG5ld3xuZ3xubHxubnxub3xub3Z8bnJtfG52fG55fG9jfG9tfG9yfG9zfHBhfHBhZ3xwYW18cGFwfHBjZHxwZGN8cGZsfHBpfHBpaHxwbHxwbXN8cG5ifHBudHxwc3xwdHxxdXxybXxybXl8cm58cm98cm9hLXJ1cHxyb2EtdGFyYXxydXxydWV8cnd8c2F8c2FofHNjfHNjbnxzY298c2R8c2V8c2d8c2h8c2l8c2ltcGxlfHNrfHNsfHNtfHNufHNvfHNxfHNyfHNybnxzc3xzdHxzdHF8c3V8c3Z8c3d8c3psfHRhfHRlfHRldHx0Z3x0aHx0aXx0a3x0bHx0bnx0b3x0cGl8dHJ8dHN8dHR8dHVtfHR3fHR5fHVkbXx1Z3x1a3x1cnx1enx2ZXx2ZWN8dml8dmxzfHZvfHdhfHdhcnx3b3x3dXV8eGFsfHhofHlpfHlvfHphfHplYXx6aHx6aC1jbGFzc2ljYWx8emgtbWluLW5hbnx6aC15dWV8enUnO1xuXHRcdFx0cGcucmUuaW50ZXJ3aWtpID0gbmV3IFJlZ0V4cChgXiR7cGcud2lraS5pbnRlcndpa2l9OmApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwZy53aWtpLmludGVyd2lraSA9IG51bGw7XG5cdFx0XHRwZy5yZS5pbnRlcndpa2kgPSAvXiQvO1xuXHRcdH1cblx0fTtcblx0Ly8gcmV0dXJuIGEgcmVnZXhwIHBhdHRlcm4gbWF0Y2hpbmcgYWxsIHZhcmlhbnRzIHRvIHdyaXRlIHRoZSBnaXZlbiBuYW1lc3BhY2Vcblx0Y29uc3QgbnNSZSA9IChuYW1lc3BhY2VJZCkgPT4ge1xuXHRcdGNvbnN0IGltYWdlTmFtZXNwYWNlVmFyaWFudHMgPSBbXTtcblx0XHRmb3IgKGNvbnN0IFtfbG9jYWxpemVkTmFtZXNwYWNlTGMsIF9uYW1lc3BhY2VJZF0gb2YgT2JqZWN0LmVudHJpZXMobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VJZHMnKSkpIHtcblx0XHRcdGlmIChfbmFtZXNwYWNlSWQgIT09IG5hbWVzcGFjZUlkKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbG9jYWxpemVkTmFtZXNwYWNlTGMgPSB1cGNhc2VGaXJzdChfbG9jYWxpemVkTmFtZXNwYWNlTGMpO1xuXHRcdFx0aW1hZ2VOYW1lc3BhY2VWYXJpYW50cy5wdXNoKFxuXHRcdFx0XHRtdy51dGlsLmVzY2FwZVJlZ0V4cChsb2NhbGl6ZWROYW1lc3BhY2VMYykuc3BsaXQoJyAnKS5qb2luKCdbIF9dJyksXG5cdFx0XHRcdG13LnV0aWwuZXNjYXBlUmVnRXhwKGVuY29kZVVSSShsb2NhbGl6ZWROYW1lc3BhY2VMYykpXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gYCg/OiR7aW1hZ2VOYW1lc3BhY2VWYXJpYW50cy5qb2luKCd8Jyl9KWA7XG5cdH07XG5cdGNvbnN0IG5zUmVJbWFnZSA9ICgpID0+IHtcblx0XHRyZXR1cm4gbnNSZShwZy5uc0ltYWdlSWQpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBuYW1lc3BhY2VzLmpzXG5cdC8vIFNUQVJURklMRTogc2VscG9wLmpzXG5cdGNvbnN0IGdldEVkaXRib3hTZWxlY3Rpb24gPSAoKSA9PiB7XG5cdFx0Ly8gc2VlIHtAbGluayBodHRwOi8vd3d3LndlYmd1cnVzZm9ydW0uY29tLzgvMTIvMH1cblx0XHRsZXQgZWRpdGJveDtcblx0XHR0cnkge1xuXHRcdFx0ZWRpdGJveCA9IGRvY3VtZW50LmVkaXRmb3JtLndwVGV4dGJveDE7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIElFLCBPcGVyYVxuXHRcdGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS50ZXh0O1xuXHRcdH1cblx0XHQvLyBNb3ppbGxhXG5cdFx0Y29uc3Qgc2VsU3RhcnQgPSBlZGl0Ym94LnNlbGVjdGlvblN0YXJ0O1xuXHRcdGNvbnN0IHNlbEVuZCA9IGVkaXRib3guc2VsZWN0aW9uRW5kO1xuXHRcdHJldHVybiBlZGl0Ym94LnZhbHVlLnN1YnN0cmluZyhzZWxTdGFydCwgc2VsRW5kKTtcblx0fTtcblx0Y29uc3QgZG9TZWxlY3Rpb25Qb3B1cCA9ICgpID0+IHtcblx0XHQvLyBwb3B1cCBpZiB0aGUgc2VsZWN0aW9uIGxvb2tzIGxpa2UgW1tmb298YW55dGhpbmcgYWZ0ZXJ3YXJkcyBhdCBhbGxcblx0XHQvLyBvciBbW2Zvb3xiYXJdXXRleHQgd2l0aG91dCAnXV0nXG5cdFx0Ly8gb3IgW1tmb298YmFyXV1cblx0XHRjb25zdCBzZWwgPSBnZXRFZGl0Ym94U2VsZWN0aW9uKCk7XG5cdFx0Y29uc3Qgb3BlbiA9IHNlbC5pbmRleE9mKCdbWycpO1xuXHRcdGNvbnN0IHBpcGUgPSBzZWwuaW5kZXhPZignfCcpO1xuXHRcdGNvbnN0IGNsb3NlID0gc2VsLmluZGV4T2YoJ11dJyk7XG5cdFx0aWYgKG9wZW4gPT09IC0xIHx8IChwaXBlID09PSAtMSAmJiBjbG9zZSA9PT0gLTEpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICgocGlwZSAhPT0gLTEgJiYgb3BlbiA+IHBpcGUpIHx8IChjbG9zZSAhPT0gLTEgJiYgb3BlbiA+IGNsb3NlKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBhcnRpY2xlID0gbmV3IFRpdGxlKHNlbC5zdWJzdHJpbmcob3BlbiArIDIsIHBpcGUgPCAwID8gY2xvc2UgOiBwaXBlKSk7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwT25FZGl0U2VsZWN0aW9uJykgPT09ICdib3hwcmV2aWV3Jykge1xuXHRcdFx0cmV0dXJuIGRvU2VwYXJhdGVTZWxlY3Rpb25Qb3B1cChzZWwsIGFydGljbGUpO1xuXHRcdH1cblx0XHRpZiAoY2xvc2UgPiAwICYmIHNlbC5zbGljZShNYXRoLm1heCgwLCBjbG9zZSArIDIpKS5pbmNsdWRlcygnW1snKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdGEuaHJlZiA9IHBnLndpa2kudGl0bGViYXNlICsgYXJ0aWNsZS51cmxTdHJpbmcoKTtcblx0XHRtb3VzZU92ZXJXaWtpTGluazIoYSk7XG5cdFx0aWYgKGEubmF2cG9wdXApIHtcblx0XHRcdGEubmF2cG9wdXAuYWRkSG9vayhcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdHJ1blN0b3BQb3B1cFRpbWVyKGEubmF2cG9wdXApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQndW5oaWRlJyxcblx0XHRcdFx0J2FmdGVyJ1xuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGRvU2VwYXJhdGVTZWxlY3Rpb25Qb3B1cCA9IChzdHIsIGFydGljbGUpID0+IHtcblx0XHRsZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdGlvblByZXZpZXcnKTtcblx0XHRpZiAoIWRpdikge1xuXHRcdFx0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRkaXYuaWQgPSAnc2VsZWN0aW9uUHJldmlldyc7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBib3ggPSBkb2N1bWVudC5lZGl0Zm9ybS53cFRleHRib3gxO1xuXHRcdFx0XHRib3gucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZGl2LCBib3gpO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgcCA9IHByZXBQcmV2aWV3bWFrZXIoc3RyLCBhcnRpY2xlLCBuZXdOYXZwb3B1cChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyksIGFydGljbGUpKTtcblx0XHRwLm1ha2VQcmV2aWV3KCk7XG5cdFx0aWYgKHAuaHRtbCkge1xuXHRcdFx0ZGl2LmlubmVySFRNTCA9IHAuaHRtbDtcblx0XHR9XG5cdFx0ZGl2LnJhblNldHVwVG9vbHRpcHNBbHJlYWR5ID0gZmFsc2U7XG5cdFx0cG9wVGlwc1Nvb25Gbignc2VsZWN0aW9uUHJldmlldycpKCk7XG5cdH07XG5cdC8vIEVOREZJTEU6IHNlbHBvcC5qc1xuXHQvLyBTVEFSVEZJTEU6IG5hdnBvcHVwLmpzXG5cdC8qKlxuXHQgKiBAZmlsZW92ZXJ2aWV3ICBEZWZpbmVzIHR3byBjbGFzc2VzOiB7QHNvdXJjZSBOYXZwb3B1cH0gYW5kIHtAc291cmNlIE1vdXNldHJhY2tlcn0uXG5cdCAqXG5cdCAqIDxjb2RlPk5hdnBvcHVwPC9jb2RlPiBkZXNjcmliZXMgcG9wdXBzOiB3aGVuIHRoZXkgYXBwZWFyLCB3aGVyZSwgd2hhdFxuXHQgKiB0aGV5IGxvb2sgbGlrZSBhbmQgc28gb24uXG5cdCAqXG5cdCAqIDxjb2RlPk1vdXNldHJhY2tlcjwvY29kZT4gXCJjYXB0dXJlc1wiIHRoZSBtb3VzZSB1c2luZ1xuXHQgKiA8Y29kZT5kb2N1bWVudC5vbm1vdXNlbW92ZTwvY29kZT4uXG5cdCAqL1xuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBNb3VzZXRyYWNrZXIuXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAY2xhc3MgVGhlIE1vdXNldHJhY2tlciBjbGFzcy4gVGhpcyBtb25pdG9ycyBtb3VzZSBtb3ZlbWVudHMgYW5kIG1hbmFnZXMgYXNzb2NpYXRlZCBob29rcy5cblx0ICovXG5cdGNsYXNzIE1vdXNldHJhY2tlciB7XG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIEludGVydmFsIHRvIHJlZ3VsYXJseSBydW4gdGhlIGhvb2tzIGFueXdheSwgaW4gbWlsbGlzZWNvbmRzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIEludGVnZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5sb29wRGVsYXkgPSA0MDA7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRpbWVyIGZvciB0aGUgbG9vcC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBUaW1lclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnRpbWVyID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogRmxhZyAtIGFyZSB3ZSBzd2l0Y2hlZCBvbj9cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBCb29sZWFuXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHQvKipcblx0XHRcdCAqIEZsYWcgLSBhcmUgd2UgcHJvYmFibHkgaW5hY2N1cmF0ZSwgaS5lLiBub3QgcmVmbGVjdGluZyB0aGUgYWN0dWFsIG1vdXNlIHBvc2l0aW9uP1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmRpcnR5ID0gdHJ1ZTtcblx0XHRcdC8qKlxuXHRcdFx0ICogQXJyYXkgb2YgaG9vayBmdW5jdGlvbnMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqIEB0eXBlIEFycmF5XG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuaG9va3MgPSBbXTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQWRkcyBhIGhvb2ssIHRvIGJlIGNhbGxlZCB3aGVuIHdlIGdldCBldmVudHMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIEEgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGFzXG5cdFx0ICogPGNvZGU+Zih4LHkpPC9jb2RlPi4gSXQgc2hvdWxkIHJldHVybiA8Y29kZT50cnVlPC9jb2RlPiB3aGVuIGl0XG5cdFx0ICogd2FudHMgdG8gYmUgcmVtb3ZlZCwgYW5kIDxjb2RlPmZhbHNlPC9jb2RlPiBvdGhlcndpc2UuXG5cdFx0ICovXG5cdFx0YWRkSG9vayhmKSB7XG5cdFx0XHR0aGlzLmhvb2tzLnB1c2goZik7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJ1bnMgaG9va3MsIHBhc3NpbmcgdGhlbSB0aGUgeFxuXHRcdCAqIGFuZCB5IGNvb3JkcyBvZiB0aGUgbW91c2UuICBIb29rIGZ1bmN0aW9ucyB0aGF0IHJldHVybiB0cnVlIGFyZVxuXHRcdCAqIHBhc3NlZCB0byB7QHNvdXJjZSBNb3VzZXRyYWNrZXIjcmVtb3ZlSG9va3N9IGZvciByZW1vdmFsLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRydW5Ib29rcygpIHtcblx0XHRcdGlmICghdGhpcy5ob29rcyB8fCB0aGlzLmhvb2tzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBsb2coJ01vdXNldHJhY2tlci5ydW5Ib29rczsgd2UgZ290IHNvbWUgaG9va3MgdG8gcnVuJyk7XG5cdFx0XHRsZXQgcmVtb3ZlID0gZmFsc2U7XG5cdFx0XHRjb25zdCByZW1vdmVPYmogPSB7fTtcblx0XHRcdC8vIHRoaXMgbWV0aG9kIGdldHMgY2FsbGVkIGEgTE9UIC1cblx0XHRcdC8vIHByZS1jYWNoZSBzb21lIHZhcmlhYmxlc1xuXHRcdFx0Y29uc3Qge3h9ID0gdGhpcztcblx0XHRcdGNvbnN0IHt5fSA9IHRoaXM7XG5cdFx0XHRjb25zdCBsZW4gPSB0aGlzLmhvb2tzLmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcblx0XHRcdFx0Ly8gfiBydW4gdGhlIGhvb2sgZnVuY3Rpb24sIGFuZCByZW1vdmUgaXQgaWYgaXQgcmV0dXJucyB0cnVlXG5cdFx0XHRcdGlmICh0aGlzLmhvb2tzW2ldKHgsIHkpID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0cmVtb3ZlID0gdHJ1ZTtcblx0XHRcdFx0XHRyZW1vdmVPYmpbaV0gPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocmVtb3ZlKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlSG9va3MocmVtb3ZlT2JqKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlcyBob29rcy5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHJlbW92ZU9iaiBBbiBvYmplY3Qgd2hvc2Uga2V5cyBhcmUgdGhlIGluZGV4XG5cdFx0ICogbnVtYmVycyBvZiBmdW5jdGlvbnMgZm9yIHJlbW92YWwsIHdpdGggdmFsdWVzIHRoYXQgZXZhbHVhdGUgdG8gdHJ1ZVxuXHRcdCAqL1xuXHRcdHJlbW92ZUhvb2tzKHJlbW92ZU9iaikge1xuXHRcdFx0Y29uc3QgbmV3SG9va3MgPSBbXTtcblx0XHRcdGNvbnN0IGxlbiA9IHRoaXMuaG9va3MubGVuZ3RoO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuXHRcdFx0XHRpZiAoIXJlbW92ZU9ialtpXSkge1xuXHRcdFx0XHRcdG5ld0hvb2tzLnB1c2godGhpcy5ob29rc1tpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuaG9va3MgPSBuZXdIb29rcztcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogRXZlbnQgbGlzdGVuZXIgZm9yIG1vdXNlIHdpZ2dsZXMuXG5cdFx0ICogV2Ugc2ltcGx5IGdyYWIgdGhlIGV2ZW50LCBzZXQgeCBhbmQgeSBhbmQgcnVuIHRoZSBob29rcy5cblx0XHQgKiBUaGlzIG1ha2VzIHRoZSBjcHUgYWxsIGhvdCBhbmQgYm90aGVyZWQgOi0oXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7RXZlbnR9IGUgTW91c2Vtb3ZlIGV2ZW50XG5cdFx0ICovXG5cdFx0dHJhY2soZSkge1xuXHRcdFx0Ly8gfiBBcHBhcmVudGx5IHRoaXMgaXMgbmVlZGVkIGluIElFLlxuXHRcdFx0ZSB8fD0gd2luZG93LmV2ZW50O1xuXHRcdFx0bGV0IHg7XG5cdFx0XHRsZXQgeTtcblx0XHRcdGlmIChlKSB7XG5cdFx0XHRcdGlmIChlLnBhZ2VYKSB7XG5cdFx0XHRcdFx0eCA9IGUucGFnZVg7XG5cdFx0XHRcdFx0eSA9IGUucGFnZVk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZS5jbGllbnRYID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV0IGxlZnQ7XG5cdFx0XHRcdFx0bGV0IHRvcDtcblx0XHRcdFx0XHRjb25zdCBkb2NFbHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0XHRcdFx0aWYgKGRvY0VsdCkge1xuXHRcdFx0XHRcdFx0bGVmdCA9IGRvY0VsdC5zY3JvbGxMZWZ0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsZWZ0IHx8PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5zY3JvbGxMZWZ0IHx8IDA7XG5cdFx0XHRcdFx0aWYgKGRvY0VsdCkge1xuXHRcdFx0XHRcdFx0dG9wID0gZG9jRWx0LnNjcm9sbFRvcDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dG9wIHx8PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LnNjcm9sbFRvcCB8fCAwO1xuXHRcdFx0XHRcdHggPSBlLmNsaWVudFggKyBsZWZ0O1xuXHRcdFx0XHRcdHkgPSBlLmNsaWVudFkgKyB0b3A7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zZXRQb3NpdGlvbih4LCB5KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgeCBhbmQgeSBjb29yZGluYXRlcyBzdG9yZWQgYW5kIHRha2VzIGFwcHJvcHJpYXRlIGFjdGlvbixcblx0XHQgKiBydW5uaW5nIGhvb2tzIGFzIGFwcHJvcHJpYXRlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtJbnRlZ2VyfSB4LCB5IFNjcmVlbiBjb29yZGluYXRlcyB0byBzZXRcblx0XHQgKiBAcGFyYW0ge251bWJlcn0geFxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSB5XG5cdFx0ICovXG5cdFx0c2V0UG9zaXRpb24oeCwgeSkge1xuXHRcdFx0dGhpcy54ID0geDtcblx0XHRcdHRoaXMueSA9IHk7XG5cdFx0XHRpZiAodGhpcy5kaXJ0eSB8fCB0aGlzLmhvb2tzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLmRpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5sYXN0SG9va194ICE9PSAnbnVtYmVyJykge1xuXHRcdFx0XHR0aGlzLmxhc3RIb29rX3ggPSAtMTAwO1xuXHRcdFx0XHR0aGlzLmxhc3RIb29rX3kgPSAtMTAwO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGRpZmYgPSAodGhpcy5sYXN0SG9va194IC0geCkgKiAodGhpcy5sYXN0SG9va195IC0geSk7XG5cdFx0XHRkaWZmID0gZGlmZiA+PSAwID8gZGlmZiA6IC1kaWZmO1xuXHRcdFx0aWYgKGRpZmYgPiAxKSB7XG5cdFx0XHRcdHRoaXMubGFzdEhvb2tfeCA9IHg7XG5cdFx0XHRcdHRoaXMubGFzdEhvb2tfeSA9IHk7XG5cdFx0XHRcdGlmICh0aGlzLmRpcnR5KSB7XG5cdFx0XHRcdFx0dGhpcy5kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMucnVuSG9va3MoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTZXRzIHRoaW5ncyBpbiBtb3Rpb24sIHVubGVzcyB0aGV5IGFyZSBhbHJlYWR5IHRoYXQgaXMsIHJlZ2lzdGVyaW5nIGFuIGV2ZW50IGxpc3RlbmVyIG9uXG5cdFx0ICogPGNvZGU+ZG9jdW1lbnQub25tb3VzZW1vdmU8L2NvZGU+LiBBIGhhbGYtaGVhcnRlZCBhdHRlbXB0IGlzIG1hZGUgdG8gcHJlc2VydmUgdGhlIG9sZCBldmVudFxuXHRcdCAqIGxpc3RlbmVyIGlmIHRoZXJlIGlzIG9uZS5cblx0XHQgKi9cblx0XHRlbmFibGUoKSB7XG5cdFx0XHRpZiAodGhpcy5hY3RpdmUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0Ly8gfiBTYXZlIHRoZSBjdXJyZW50IGxpc3RlbmVyIGZvciBtb3VzZW1vdmUgZXZlbnRzLiBUaGlzIGlzbid0IHRvb1xuXHRcdFx0Ly8gfiByb2J1c3QsIG9mIGNvdXJzZS5cblx0XHRcdHRoaXMuc2F2ZWRMaXN0ZW5lciA9IGRvY3VtZW50Lm9ubW91c2Vtb3ZlO1xuXHRcdFx0Ly8gfiBHb3R0YSBzYXZlIEB0dHt0aGlzfSBhZ2FpbiBmb3IgdGhlIGNsb3N1cmUsIGFuZCB1c2UgYXBwbHkgZm9yXG5cdFx0XHQvLyB+IHRoZSBtZW1iZXIgZnVuY3Rpb24uXG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gKGUpID0+IHtcblx0XHRcdFx0c2VsZi50cmFjayhlKTtcblx0XHRcdH07XG5cdFx0XHRpZiAodGhpcy5sb29wRGVsYXkpIHtcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHQvLyBsb2coJ2xvb3AgZGVsYXkgaW4gbW91c2V0cmFja2VyIGlzIHdvcmtpbmcnKTtcblx0XHRcdFx0XHRzZWxmLnJ1bkhvb2tzKCk7XG5cdFx0XHRcdH0sIHRoaXMubG9vcERlbGF5KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogRGlzYWJsZXMgdGhlIHRyYWNrZXIsIHJlbW92aW5nIHRoZSBldmVudCBsaXN0ZW5lci5cblx0XHQgKi9cblx0XHRkaXNhYmxlKCkge1xuXHRcdFx0aWYgKCF0aGlzLmFjdGl2ZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuc2F2ZWRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRkb2N1bWVudC5vbm1vdXNlbW92ZSA9IHRoaXMuc2F2ZWRMaXN0ZW5lcjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlbGV0ZSBkb2N1bWVudC5vbm1vdXNlbW92ZTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnRpbWVyKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBOYXZwb3B1cC5cblx0ICogR2V0cyBhIFVJRCBmb3IgdGhlIHBvcHVwIGFuZFxuXHQgKlxuXHQgKiBAcGFyYW0gaW5pdCBDb250cnVjdG9yIG9iamVjdC4gSWYgPGNvZGU+aW5pdC5kcmFnZ2FibGU8L2NvZGU+IGlzIHRydWUgb3IgYWJzZW50LCB0aGUgcG9wdXAgYmVjb21lcyBkcmFnZ2FibGUuXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAY2xhc3MgVGhlIE5hdnBvcHVwIGNsYXNzLiBUaGlzIGdlbmVyYXRlcyBwb3B1cCBoaW50cywgYW5kIGRvZXMgc29tZSBtYW5hZ2VtZW50IG9mIHRoZW0uXG5cdCAqL1xuXHRjbGFzcyBOYXZwb3B1cCB7XG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHQvLyBtdy5ub3RpZnkoJ25ldyBOYXZwb3B1cChpbml0KScsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdC8qKlxuXHRcdFx0ICogVUlEIGZvciBlYWNoIE5hdnBvcHVwIGluc3RhbmNlLlxuXHRcdFx0ICogUmVhZC1vbmx5LlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGludGVnZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy51aWQgPSBOYXZwb3B1cC51aWQrKztcblx0XHRcdC8qKlxuXHRcdFx0ICogUmVhZC1vbmx5IGZsYWcgZm9yIGN1cnJlbnQgdmlzaWJpbGl0eSBvZiB0aGUgcG9wdXAuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHQvKipcblx0XHRcdCAqIEZsYWcgdG8gYmUgc2V0IHdoZW4gd2Ugd2FudCB0byBjYW5jZWwgYSBwcmV2aW91cyByZXF1ZXN0IHRvXG5cdFx0XHQgKiBzaG93IHRoZSBwb3B1cCBpbiBhIGxpdHRsZSB3aGlsZS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLm5vc2hvdyA9IGZhbHNlO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBDYXRlZ29yaXNlZCBsaXN0IG9mIGhvb2tzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBzZWUgI3J1bkhvb2tzXG5cdFx0XHQgKiBAc2VlICNhZGRIb29rXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICogQHR5cGUgT2JqZWN0XG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuaG9va3MgPSB7XG5cdFx0XHRcdGNyZWF0ZTogW10sXG5cdFx0XHRcdHVuaGlkZTogW10sXG5cdFx0XHRcdGhpZGU6IFtdLFxuXHRcdFx0fTtcblx0XHRcdC8qKlxuXHRcdFx0ICogbGlzdCBvZiB1bmlxdWUgSURzIG9mIGhvb2sgZnVuY3Rpb25zLCB0byBhdm9pZCBkdXBsaWNhdGVzXG5cdFx0XHQgKlxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5ob29rSWRzID0ge307XG5cdFx0XHQvKipcblx0XHRcdCAqIExpc3Qgb2YgZG93bmxvYWRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcG9wdXAuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqIEB0eXBlIEFycmF5XG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuZG93bmxvYWRzID0gW107XG5cdFx0XHQvKipcblx0XHRcdCAqIE51bWJlciBvZiB1bmNvbXBsZXRlZCBkb3dubG9hZHMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnBlbmRpbmcgPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUb2xlcmFuY2UgaW4gcGl4ZWxzIHdoZW4gZGV0ZWN0aW5nIHdoZXRoZXIgdGhlIG1vdXNlIGhhcyBsZWZ0IHRoZSBwb3B1cC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBpbnRlZ2VyXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuZnV6eiA9IDU7XG5cdFx0XHQvKipcblx0XHRcdCAqIEZsYWcgdG8gdG9nZ2xlIHJ1bm5pbmcge0Bzb3VyY2UgI2xpbWl0SG9yaXpvbnRhbFBvc2l0aW9ufSB0byByZWd1bGF0ZSB0aGUgcG9wdXAncyBwb3NpdGlvbi5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuY29uc3RyYWluZWQgPSB0cnVlO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaGUgcG9wdXAgd2lkdGggaW4gcGl4ZWxzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKiBAdHlwZSBpbnRlZ2VyXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMud2lkdGggPSAwO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaGUgcG9wdXAgd2lkdGggaW4gcGl4ZWxzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKiBAdHlwZSBpbnRlZ2VyXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuaGVpZ2h0ID0gMDtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIG1haW4gY29udGVudCBESVYgZWxlbWVudC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBIVE1MRGl2RWxlbWVudFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLm1haW5EaXYgPSBudWxsO1xuXHRcdFx0dGhpcy5jcmVhdGVNYWluRGl2KCk7XG5cdFx0XHQvL1x0aWYgKCFpbml0IHx8IHR5cGVvZiBpbml0LnBvcHVwc19kcmFnZ2FibGU9PSd1bmRlZmluZWQnIHx8IGluaXQucG9wdXBzX2RyYWdnYWJsZSkge1xuXHRcdFx0Ly9cdFx0dGhpcy5tYWtlRHJhZ2dhYmxlKHRydWUpO1xuXHRcdFx0Ly9cdH1cblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUmV0cmlldmVzIHRoZSB7QHNvdXJjZSAjdmlzaWJsZX0gYXR0cmlidXRlLCBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHBvcHVwIGlzIGN1cnJlbnRseSB2aXNpYmxlLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdCAqL1xuXHRcdGlzVmlzaWJsZSgpIHtcblx0XHRcdHJldHVybiB0aGlzLnZpc2libGU7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJlcG9zaXRpb25zIHBvcHVwIHVzaW5nIENTUyBzdHlsZS5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSB4IHgtY29vcmRpbmF0ZSAocHgpXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSB5IHktY29vcmRpbmF0ZSAocHgpXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBub0xpbWl0SG9yIERvbid0IGNhbGwge0Bzb3VyY2UgI2xpbWl0SG9yaXpvbnRhbFBvc2l0aW9ufVxuXHRcdCAqL1xuXHRcdHJlcG9zaXRpb24oeCwgeSwgbm9MaW1pdEhvcikge1xuXHRcdFx0bG9nKGByZXBvc2l0aW9uKCR7eH0sJHt5fSwke25vTGltaXRIb3J9KWApO1xuXHRcdFx0aWYgKHggIT09IHVuZGVmaW5lZCAmJiB4ICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMubGVmdCA9IHg7XG5cdFx0XHR9XG5cdFx0XHRpZiAoeSAhPT0gdW5kZWZpbmVkICYmIHkgIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy50b3AgPSB5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMubGVmdCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudG9wICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5tYWluRGl2LnN0eWxlLmxlZnQgPSBgJHt0aGlzLmxlZnR9cHhgO1xuXHRcdFx0XHR0aGlzLm1haW5EaXYuc3R5bGUudG9wID0gYCR7dGhpcy50b3B9cHhgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFub0xpbWl0SG9yKSB7XG5cdFx0XHRcdHRoaXMubGltaXRIb3Jpem9udGFsUG9zaXRpb24oKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUHJldmVudHMgcG9wdXBzIGZyb20gYmVpbmcgaW4gc2lsbHkgbG9jYXRpb25zLiBIb3BlZnVsbHkuXG5cdFx0ICogU2hvdWxkIG5vdCBiZSBydW4gaWYge0Bzb3VyY2UgI2NvbnN0cmFpbmVkfSBpcyB0cnVlLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRsaW1pdEhvcml6b250YWxQb3NpdGlvbigpIHtcblx0XHRcdGlmICghdGhpcy5jb25zdHJhaW5lZCB8fCB0aGlzLnRvb1dpZGUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG5cdFx0XHRjb25zdCB4ID0gdGhpcy5sZWZ0O1xuXHRcdFx0Y29uc3QgdyA9IHRoaXMud2lkdGg7XG5cdFx0XHRjb25zdCBjV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xpZW50V2lkdGg7XG5cdFx0XHQvL1x0bG9nKCdsaW1pdEhvcml6b250YWxQb3NpdGlvbjogeD0nK3grXG5cdFx0XHQvL1x0XHRcdCcsIHRoaXMubGVmdD0nICsgdGhpcy5sZWZ0ICtcblx0XHRcdC8vXHRcdFx0JywgdGhpcy53aWR0aD0nICsgdGhpcy53aWR0aCArXG5cdFx0XHQvL1x0XHRcdCcsIGNXaWR0aD0nICsgY1dpZHRoKTtcblx0XHRcdGlmIChcblx0XHRcdFx0eCArIHcgPj0gY1dpZHRoIHx8XG5cdFx0XHRcdCh4ID4gMCAmJlxuXHRcdFx0XHRcdHRoaXMubWF4V2lkdGggJiZcblx0XHRcdFx0XHR0aGlzLndpZHRoIDwgdGhpcy5tYXhXaWR0aCAmJlxuXHRcdFx0XHRcdHRoaXMuaGVpZ2h0ID4gdGhpcy53aWR0aCAmJlxuXHRcdFx0XHRcdHggPiBjV2lkdGggLSB0aGlzLm1heFdpZHRoKVxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIFRoaXMgaXMgYSB2ZXJ5IG5hc3R5IGhhY2suIFRoZXJlIGhhcyB0byBiZSBhIGJldHRlciB3YXkhXG5cdFx0XHRcdC8vIFdlIGZpbmQgdGhlIFwibmF0dXJhbFwiIHdpZHRoIG9mIHRoZSBkaXYgYnkgcG9zaXRpb25pbmcgaXQgYXQgdGhlIGZhciBsZWZ0XG5cdFx0XHRcdC8vIHRoZW4gcmVzZXQgaXQgc28gdGhhdCBpdCBzaG91bGQgYmUgZmx1c2ggcmlnaHQgKHdlbGwsIG5lYXJseSlcblx0XHRcdFx0dGhpcy5tYWluRGl2LnN0eWxlLmxlZnQgPSAnLTEwMDAwcHgnO1xuXHRcdFx0XHR0aGlzLm1haW5EaXYuc3R5bGUud2lkdGggPSBgJHt0aGlzLm1heFdpZHRofXB4YDtcblx0XHRcdFx0Y29uc3QgbmF0dXJhbFdpZHRoID0gTnVtYmVyLnBhcnNlSW50KHRoaXMubWFpbkRpdi5vZmZzZXRXaWR0aCwgMTApO1xuXHRcdFx0XHRsZXQgbmV3TGVmdCA9IGNXaWR0aCAtIG5hdHVyYWxXaWR0aCAtIDE7XG5cdFx0XHRcdGlmIChuZXdMZWZ0IDwgMCkge1xuXHRcdFx0XHRcdG5ld0xlZnQgPSAwO1xuXHRcdFx0XHRcdHRoaXMudG9vV2lkZSA9IHRydWU7XG5cdFx0XHRcdH0gLy8gc3RpbGwgdW5zdGFibGUgZm9yIHJlYWxseSB3aWRlIHBvcHVwcz9cblx0XHRcdFx0bG9nKFxuXHRcdFx0XHRcdGBsaW1pdEhvcml6b250YWxQb3NpdGlvbjogbW92aW5nIHRvICgke25ld0xlZnR9LCR7dGhpcy50b3B9KTtgICtcblx0XHRcdFx0XHRcdGAgbmF0dXJhbFdpZHRoPSR7bmF0dXJhbFdpZHRofSwgY2xpZW50V2lkdGg9JHtjV2lkdGh9YFxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0aGlzLnJlcG9zaXRpb24obmV3TGVmdCwgbnVsbCwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEJyaW5ncyBwb3B1cCB0byB0aGUgdG9wIG9mIHRoZSB6LW9yZGVyLlxuXHRcdCAqIFdlIGluY3JlbWVudCB0aGUge0Bzb3VyY2UgI2hpZ2hlc3R9IHByb3BlcnR5IG9mIHRoZSBjb250cnVjdG9yIGhlcmUuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHJhaXNlKCkge1xuXHRcdFx0dGhpcy5tYWluRGl2LnN0eWxlLnpJbmRleCA9IE5hdnBvcHVwLmhpZ2hlc3QgKyAxO1xuXHRcdFx0KytOYXZwb3B1cC5oaWdoZXN0O1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTaG93cyB0aGUgcG9wdXAgcHJvdmlkZWQge0Bzb3VyY2UgI25vc2hvd30gaXMgbm90IHRydWUuXG5cdFx0ICogVXBkYXRlcyB0aGUgcG9zaXRpb24sIGJyaW5ncyB0aGUgcG9wdXAgdG8gdGhlIHRvcCBvZiB0aGUgei1vcmRlciBhbmQgdW5oaWRlcyBpdC5cblx0XHQgKi9cblx0XHRzaG93KCkge1xuXHRcdFx0Ly8gZG9jdW1lbnQudGl0bGUrPSdzJztcblx0XHRcdGlmICh0aGlzLm5vc2hvdykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBkb2N1bWVudC50aXRsZSs9J3QnO1xuXHRcdFx0dGhpcy5yZXBvc2l0aW9uKCk7XG5cdFx0XHR0aGlzLnJhaXNlKCk7XG5cdFx0XHR0aGlzLnVuaGlkZSgpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBDaGVja3MgdG8gc2VlIGlmIHRoZSBtb3VzZSBwb2ludGVyIGhhc1xuXHRcdCAqIHN0YWJpbGlzZWQgKGNoZWNraW5nIGV2ZXJ5IDxjb2RlPnRpbWU8L2NvZGU+LzIgbWlsbGlzZWNvbmRzKSBhbmQgcnVucyB0aGVcblx0XHQgKiB7QHNvdXJjZSAjc2hvd30gbWV0aG9kIGlmIGl0IGhhcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7aW50ZWdlcn0gdGltZSBUaGUgbWluaW11bSB0aW1lIChtcykgYmVmb3JlIHRoZSBwb3B1cCBtYXkgYmUgc2hvd24uXG5cdFx0ICovXG5cdFx0c2hvd1Nvb25JZlN0YWJsZSh0aW1lKSB7XG5cdFx0XHRsb2coYHNob3dTb29uSWZTdGFibGUsIHRpbWU9JHt0aW1lfWApO1xuXHRcdFx0aWYgKHRoaXMudmlzaWJsZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5vc2hvdyA9IGZhbHNlO1xuXHRcdFx0Ly8gfiBpbml0aWFsaXplIHRoZXNlIHZhcmlhYmxlcyBzbyB0aGF0IHdlIG5ldmVyIHJ1biBAdHR7c2hvd30gYWZ0ZXJcblx0XHRcdC8vIH4ganVzdCBoYWxmIHRoZSB0aW1lXG5cdFx0XHR0aGlzLnN0YWJsZV94ID0gLTFlNDtcblx0XHRcdHRoaXMuc3RhYmxlX3kgPSAtMWU0O1xuXHRcdFx0Y29uc3Qgc3RhYmxlU2hvdyA9ICgpID0+IHtcblx0XHRcdFx0bG9nKCdzdGFibGVTaG93IGNhbGxlZCcpO1xuXHRcdFx0XHRjb25zdCBuZXdfeCA9IE5hdnBvcHVwLnRyYWNrZXIueDtcblx0XHRcdFx0Y29uc3QgbmV3X3kgPSBOYXZwb3B1cC50cmFja2VyLnk7XG5cdFx0XHRcdGNvbnN0IGR4ID0gc2VsZi5zdGFibGVfeCAtIG5ld194O1xuXHRcdFx0XHRjb25zdCBkeSA9IHNlbGYuc3RhYmxlX3kgLSBuZXdfeTtcblx0XHRcdFx0Y29uc3QgZnV6ejIgPSAwOyAvLyBzYXZlZFRoaXMuZnV6eiAqIHNhdmVkVGhpcy5mdXp6O1xuXHRcdFx0XHQvLyBkb2N1bWVudC50aXRsZSArPSAnWycgKyBbc2F2ZWRUaGlzLnN0YWJsZV94LG5ld194LCBzYXZlZFRoaXMuc3RhYmxlX3ksbmV3X3ksIGR4LCBkeSwgZnV6ejJdLmpvaW4oJywnKSArICddICc7XG5cdFx0XHRcdGlmIChkeCAqIGR4IDw9IGZ1enoyICYmIGR5ICogZHkgPD0gZnV6ejIpIHtcblx0XHRcdFx0XHRsb2coJ21vdXNlIGlzIHN0YWJsZScpO1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoc2VsZi5zaG93U29vblN0YWJsZVRpbWVyKTtcblx0XHRcdFx0XHRzZWxmLnJlcG9zaXRpb24obmV3X3ggKyAyLCBuZXdfeSArIDIpO1xuXHRcdFx0XHRcdHNlbGYuc2hvdygpO1xuXHRcdFx0XHRcdHNlbGYubGltaXRIb3Jpem9udGFsUG9zaXRpb24oKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi5zdGFibGVfeCA9IG5ld194O1xuXHRcdFx0XHRzZWxmLnN0YWJsZV95ID0gbmV3X3k7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHR0aGlzLnNob3dTb29uU3RhYmxlVGltZXIgPSBzZXRJbnRlcnZhbChzdGFibGVTaG93LCB0aW1lIC8gMik7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIHtAc291cmNlICNub3Nob3d9IGZsYWcgYW5kIGhpZGVzIHRoZSBwb3B1cC4gVGhpcyBzaG91bGQgYmUgY2FsbGVkXG5cdFx0ICogd2hlbiB0aGUgbW91c2UgbGVhdmVzIHRoZSBsaW5rIGJlZm9yZVxuXHRcdCAqIChvciBhZnRlcikgaXQncyBhY3R1YWxseSBiZWVuIGRpc3BsYXllZC5cblx0XHQgKi9cblx0XHRiYW5pc2goKSB7XG5cdFx0XHRsb2coJ2JhbmlzaCBjYWxsZWQnKTtcblx0XHRcdC8vIGhpZGUgYW5kIHByZXZlbnQgc2hvd2luZyB3aXRoIHNob3dTb29uIGluIHRoZSBmdXR1cmVcblx0XHRcdHRoaXMubm9zaG93ID0gdHJ1ZTtcblx0XHRcdGlmICh0aGlzLnNob3dTb29uU3RhYmxlVGltZXIpIHtcblx0XHRcdFx0bG9nKCdjbGVhcmluZyBzaG93U29vblN0YWJsZVRpbWVyJyk7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zaG93U29vblN0YWJsZVRpbWVyKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaGlkZSgpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSdW5zIGhvb2tzIGFkZGVkIHdpdGgge0Bzb3VyY2UgI2FkZEhvb2t9LlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleSBuYW1lIG9mIHRoZSB7QHNvdXJjZSAjaG9va3N9IGFycmF5IC0gb25lIG9mICdjcmVhdGUnLCAndW5oaWRlJywgJ2hpZGUnXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHdoZW4gQ29udHJvbHMgZXhhY3RseSB3aGVuIHRoZSBob29rIGlzIHJ1bjogZWl0aGVyICdiZWZvcmUnIG9yICdhZnRlcidcblx0XHQgKi9cblx0XHRydW5Ib29rcyhrZXksIHdoZW4pIHtcblx0XHRcdGlmICghdGhpcy5ob29rc1trZXldKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGtleUhvb2tzID0gdGhpcy5ob29rc1trZXldO1xuXHRcdFx0Y29uc3QgbGVuID0ga2V5SG9va3MubGVuZ3RoO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuXHRcdFx0XHRpZiAoa2V5SG9va3NbaV0gJiYga2V5SG9va3NbaV0ud2hlbiA9PT0gd2hlbiAmJiBSZWZsZWN0LmFwcGx5KGtleUhvb2tzW2ldLmhvb2ssIHRoaXMsIFtdKSkge1xuXHRcdFx0XHRcdC8vIHJlbW92ZSB0aGUgaG9va1xuXHRcdFx0XHRcdGlmIChrZXlIb29rc1tpXS5ob29rSWQpIHtcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmhvb2tJZHNba2V5SG9va3NbaV0uaG9va0lkXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0a2V5SG9va3NbaV0gPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEFkZHMgYSBob29rIHRvIHRoZSBwb3B1cC4gSG9vayBmdW5jdGlvbnMgYXJlIHJ1biB3aXRoIDxjb2RlPnRoaXM8L2NvZGU+IHNldCB0byByZWZlciB0byB0aGVcblx0XHQgKiBOYXZwb3B1cCBpbnN0YW5jZSwgYW5kIG5vIGFyZ3VtZW50cy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IGhvb2sgVGhlIGhvb2sgZnVuY3Rpb24uIEZ1bmN0aW9ucyB0aGF0IHJldHVybiB0cnVlIGFyZSBkZWxldGVkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IG5hbWUgb2YgdGhlIHtAc291cmNlICNob29rc30gYXJyYXkgLSBvbmUgb2YgJ2NyZWF0ZScsICd1bmhpZGUnLCAnaGlkZSdcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gd2hlbiBDb250cm9scyBleGFjdGx5IHdoZW4gdGhlIGhvb2sgaXMgcnVuOiBlaXRoZXIgJ2JlZm9yZScgb3IgJ2FmdGVyJ1xuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB1aWQgQSB0cnV0aHkgc3RyaW5nIGlkZW50aWZ5aW5nIHRoZSBob29rIGZ1bmN0aW9uOyBpZiBpdCBtYXRjaGVzIGFub3RoZXIgaG9va1xuXHRcdCAqIGluIHRoaXMgcG9zaXRpb24sIGl0IHdvbid0IGJlIGFkZGVkIGFnYWluLlxuXHRcdCAqL1xuXHRcdGFkZEhvb2soaG9vaywga2V5LCB3aGVuLCB1aWQpIHtcblx0XHRcdHdoZW4gfHw9ICdhZnRlcic7XG5cdFx0XHRpZiAoIXRoaXMuaG9va3Nba2V5XSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBpZiB1aWQgaXMgc3BlY2lmaWVkLCBkb24ndCBhZGQgZHVwbGljYXRlc1xuXHRcdFx0bGV0IGhvb2tJZDtcblx0XHRcdGlmICh1aWQpIHtcblx0XHRcdFx0aG9va0lkID0gW2tleSwgd2hlbiwgdWlkXS5qb2luKCd8Jyk7XG5cdFx0XHRcdGlmICh0aGlzLmhvb2tJZHNbaG9va0lkXSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmhvb2tJZHNbaG9va0lkXSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhvb2tzW2tleV0ucHVzaCh7XG5cdFx0XHRcdGhvb2ssXG5cdFx0XHRcdHdoZW4sXG5cdFx0XHRcdGhvb2tJZCxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBDcmVhdGVzIHRoZSBtYWluIERJViBlbGVtZW50LCB3aGljaCBjb250YWlucyBhbGwgdGhlIGFjdHVhbCBwb3B1cCBjb250ZW50LlxuXHRcdCAqIFJ1bnMgaG9va3Mgd2l0aCBrZXkgJ2NyZWF0ZScuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGNyZWF0ZU1haW5EaXYoKSB7XG5cdFx0XHRpZiAodGhpcy5tYWluRGl2KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMucnVuSG9va3MoJ2NyZWF0ZScsICdiZWZvcmUnKTtcblx0XHRcdGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0bWFpbkRpdi5vbmNsaWNrID0gKGUpID0+IHtcblx0XHRcdFx0c2VsZi5vbmNsaWNrTGlzdGVuZXIoZSk7XG5cdFx0XHR9O1xuXHRcdFx0bWFpbkRpdi5jbGFzc05hbWUgPSB0aGlzLmNsYXNzTmFtZSA/PyAnbmF2cG9wdXBfbWFpbmRpdic7XG5cdFx0XHRtYWluRGl2LmlkID0gbWFpbkRpdi5jbGFzc05hbWUgKyB0aGlzLnVpZDtcblx0XHRcdG1haW5EaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0bWFpbkRpdi5zdHlsZS5taW5XaWR0aCA9ICczNTBweCc7XG5cdFx0XHRtYWluRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRtYWluRGl2LmNsYXNzTmFtZSA9ICduYXZwb3B1cCc7XG5cdFx0XHQvLyBlYXN5IGFjY2VzcyB0byBqYXZhc2NyaXB0IG9iamVjdCB0aHJvdWdoIERPTSBmdW5jdGlvbnNcblx0XHRcdG1haW5EaXYubmF2cG9wdXAgPSB0aGlzO1xuXHRcdFx0dGhpcy5tYWluRGl2ID0gbWFpbkRpdjtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmQobWFpbkRpdik7XG5cdFx0XHR0aGlzLnJ1bkhvb2tzKCdjcmVhdGUnLCAnYWZ0ZXInKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQ2FsbHMgdGhlIHtAc291cmNlICNyYWlzZX0gbWV0aG9kLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRvbmNsaWNrTGlzdGVuZXIoKSB7XG5cdFx0XHR0aGlzLnJhaXNlKCk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIE1ha2VzIHRoZSBwb3B1cCBkcmFnZ2FibGUsIHVzaW5nIGEge0Bzb3VyY2UgRHJhZ30gb2JqZWN0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGhhbmRsZU5hbWVcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdG1ha2VEcmFnZ2FibGUoaGFuZGxlTmFtZSkge1xuXHRcdFx0aWYgKCF0aGlzLm1haW5EaXYpIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVNYWluRGl2KCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBkcmFnID0gbmV3IERyYWcoKTtcblx0XHRcdGlmICghaGFuZGxlTmFtZSkge1xuXHRcdFx0XHRkcmFnLnN0YXJ0Q29uZGl0aW9uID0gKGUpID0+IHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0aWYgKCFlLnNoaWZ0S2V5KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRsZXQgZHJhZ0hhbmRsZTtcblx0XHRcdGlmIChoYW5kbGVOYW1lKSB7XG5cdFx0XHRcdGRyYWdIYW5kbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtoYW5kbGVOYW1lfWApO1xuXHRcdFx0fVxuXHRcdFx0ZHJhZ0hhbmRsZSB8fD0gdGhpcy5tYWluRGl2O1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRkcmFnLmVuZEhvb2sgPSAoeCwgeSkgPT4ge1xuXHRcdFx0XHROYXZwb3B1cC50cmFja2VyLmRpcnR5ID0gdHJ1ZTtcblx0XHRcdFx0c2VsZi5yZXBvc2l0aW9uKHgsIHkpO1xuXHRcdFx0fTtcblx0XHRcdGRyYWcuaW5pdChkcmFnSGFuZGxlLCB0aGlzLm1haW5EaXYpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBIaWRlcyB0aGUgcG9wdXAgdXNpbmcgQ1NTLiBSdW5zIGhvb2tzIHdpdGgga2V5ICdoaWRlJy5cblx0XHQgKiBTZXRzIHtAc291cmNlICN2aXNpYmxlfSBhcHByb3ByaWF0ZWx5LlxuXHRcdCAqIHtAc291cmNlICNiYW5pc2h9IHNob3VsZCBiZSBjYWxsZWQgZXh0ZXJuYWxseSBpbnN0ZWFkIG9mIHRoaXMgbWV0aG9kLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRoaWRlKCkge1xuXHRcdFx0dGhpcy5ydW5Ib29rcygnaGlkZScsICdiZWZvcmUnKTtcblx0XHRcdHRoaXMuYWJvcnREb3dubG9hZHMoKTtcblx0XHRcdGlmICh0aGlzLnZpc2libGUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnZpc2libGUpIHtcblx0XHRcdFx0dGhpcy5tYWluRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ydW5Ib29rcygnaGlkZScsICdhZnRlcicpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTaG93cyB0aGUgcG9wdXAgdXNpbmcgQ1NTLiBSdW5zIGhvb2tzIHdpdGgga2V5ICd1bmhpZGUnLlxuXHRcdCAqIFNldHMge0Bzb3VyY2UgI3Zpc2libGV9IGFwcHJvcHJpYXRlbHkuICAge0Bzb3VyY2UgI3Nob3d9IHNob3VsZCBiZSBjYWxsZWQgZXh0ZXJuYWxseSBpbnN0ZWFkIG9mIHRoaXMgbWV0aG9kLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR1bmhpZGUoKSB7XG5cdFx0XHR0aGlzLnJ1bkhvb2tzKCd1bmhpZGUnLCAnYmVmb3JlJyk7XG5cdFx0XHRpZiAodGhpcy52aXNpYmxlICE9PSB1bmRlZmluZWQgJiYgIXRoaXMudmlzaWJsZSkge1xuXHRcdFx0XHR0aGlzLm1haW5EaXYuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHRcdFx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ydW5Ib29rcygndW5oaWRlJywgJ2FmdGVyJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIDxjb2RlPmlubmVySFRNTDwvY29kZT4gYXR0cmlidXRlIG9mIHRoZSBtYWluIGRpdiBjb250YWluaW5nIHRoZSBwb3B1cCBjb250ZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGh0bWwgVGhlIEhUTUwgdG8gc2V0LlxuXHRcdCAqL1xuXHRcdHNldElubmVySFRNTChodG1sKSB7XG5cdFx0XHR0aGlzLm1haW5EaXYuaW5uZXJIVE1MID0gaHRtbDtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlcyB0aGUge0Bzb3VyY2UgI3dpZHRofSBhbmQge0Bzb3VyY2UgI2hlaWdodH0gYXR0cmlidXRlcyB3aXRoIHRoZSBDU1MgcHJvcGVydGllcy5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dXBkYXRlRGltZW5zaW9ucygpIHtcblx0XHRcdHRoaXMud2lkdGggPSBOdW1iZXIucGFyc2VJbnQodGhpcy5tYWluRGl2Lm9mZnNldFdpZHRoLCAxMCk7XG5cdFx0XHR0aGlzLmhlaWdodCA9IE51bWJlci5wYXJzZUludCh0aGlzLm1haW5EaXYub2Zmc2V0SGVpZ2h0LCAxMCk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIENoZWNrcyBpZiB0aGUgcG9pbnQgKHgseSkgaXMgd2l0aGluIHtAc291cmNlICNmdXp6fSBvZiB0aGVcblx0XHQgKiB7QHNvdXJjZSAjbWFpbkRpdn0uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2ludGVnZXJ9IHggeC1jb29yZGluYXRlIChweClcblx0XHQgKiBAcGFyYW0ge2ludGVnZXJ9IHkgeS1jb29yZGluYXRlIChweClcblx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0ICovXG5cdFx0aXNXaXRoaW4oeCwgeSkge1xuXHRcdFx0Ly8gfiBJZiB3ZSdyZSBub3QgZXZlbiB2aXNpYmxlLCBubyBwb2ludCBzaG91bGQgYmUgY29uc2lkZXJlZCBhc1xuXHRcdFx0Ly8gfiBiZWluZyB3aXRoaW4gdGhlIHBvcHVwLlxuXHRcdFx0aWYgKCF0aGlzLnZpc2libGUpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy51cGRhdGVEaW1lbnNpb25zKCk7XG5cdFx0XHRjb25zdCBmdXp6ID0gdGhpcy5mdXp6IHx8IDA7XG5cdFx0XHQvLyB+IFVzZSBhIHNpbXBsZSBib3ggbWV0cmljIGhlcmUuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR4ICsgZnV6eiA+PSB0aGlzLmxlZnQgJiZcblx0XHRcdFx0eCAtIGZ1enogPD0gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aCAmJlxuXHRcdFx0XHR5ICsgZnV6eiA+PSB0aGlzLnRvcCAmJlxuXHRcdFx0XHR5IC0gZnV6eiA8PSB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0XG5cdFx0XHQpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBBZGRzIGEgZG93bmxvYWQgdG8ge0Bzb3VyY2UgI2Rvd25sb2Fkc30uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Rvd25sb2FkZXJ9IGRvd25sb2FkXG5cdFx0ICovXG5cdFx0YWRkRG93bmxvYWQoZG93bmxvYWQpIHtcblx0XHRcdGlmICghZG93bmxvYWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kb3dubG9hZHMucHVzaChkb3dubG9hZCk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEFib3J0cyB0aGUgZG93bmxvYWRzIGxpc3RlZCBpbiB7QHNvdXJjZSAjZG93bmxvYWRzfS5cblx0XHQgKlxuXHRcdCAqIEBzZWUgRG93bmxvYWRlciNhYm9ydFxuXHRcdCAqL1xuXHRcdGFib3J0RG93bmxvYWRzKCkge1xuXHRcdFx0Zm9yIChjb25zdCBkIG9mIHRoaXMuZG93bmxvYWRzKSB7XG5cdFx0XHRcdGlmIChkICYmIGQuYWJvcnQpIHtcblx0XHRcdFx0XHRkLmFib3J0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuZG93bmxvYWRzID0gW107XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBBIFVJRCBmb3IgZWFjaCBOYXZwb3B1cC4gVGhpcyBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBpcyBqdXN0IGEgY291bnRlci5cblx0ICpcblx0ICogQHR5cGUgaW50ZWdlclxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0TmF2cG9wdXAudWlkID0gMDtcblx0LyoqXG5cdCAqIENvdW50ZXIgaW5kaWNhdGluZyB0aGUgei1vcmRlciBvZiB0aGUgXCJoaWdoZXN0XCIgcG9wdXAuXG5cdCAqIFdlIHN0YXJ0IHRoZSB6LWluZGV4IGF0IDEwMDAgc28gdGhhdCBwb3B1cHMgYXJlIGFib3ZlIGV2ZXJ5dGhpbmdcblx0ICogZWxzZSBvbiB0aGUgc2NyZWVuLlxuXHQgKlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAdHlwZSBpbnRlZ2VyXG5cdCAqL1xuXHROYXZwb3B1cC5oaWdoZXN0ID0gMTAwMDtcblx0LyoqXG5cdCAqIEEge0Bzb3VyY2UgTW91c2V0cmFja2VyfSBpbnN0YW5jZSB3aGljaCBpcyBhIHByb3BlcnR5IG9mIHRoZSBjb25zdHJ1Y3RvciAocHNldWRvLWdsb2JhbCkuXG5cdCAqL1xuXHROYXZwb3B1cC50cmFja2VyID0gbmV3IE1vdXNldHJhY2tlcigpO1xuXHQvLyBFTkRGSUxFOiBuYXZwb3B1cC5qc1xuXHQvLyBTVEFSVEZJTEU6IGRpZmYuanNcblx0LyoqXG5cdCAqIEphdmFzY3JpcHQgRGlmZiBBbGdvcml0aG0gQnkgSm9obiBSZXNpZyAoaHR0cDovL2Vqb2huLm9yZy8pIGFuZCBMdXBpblxuXHQgKlxuXHQgKiBNb3JlIEluZm86IGh0dHA6Ly9lam9obi5vcmcvcHJvamVjdHMvamF2YXNjcmlwdC1kaWZmLWFsZ29yaXRobS9cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmdbXX0geFxuXHQgKi9cblx0Y29uc3QgZGVsRm10ID0gKHgpID0+IHtcblx0XHRpZiAoeC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0cmV0dXJuIGA8ZGVsIGNsYXNzPSdwb3B1cERpZmYnPiR7eC5qb2luKCcnKX08L2RlbD5gO1xuXHR9O1xuXHRjb25zdCBpbnNGbXQgPSAoeCkgPT4ge1xuXHRcdGlmICh4Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gYDxpbnMgY2xhc3M9J3BvcHVwRGlmZic+JHt4LmpvaW4oJycpfTwvaW5zPmA7XG5cdH07XG5cdGNvbnN0IGNvdW50Q3Jvc3NpbmdzID0gKGEsIGIsIGksIGVqZWN0KSA9PiB7XG5cdFx0Ly8gY291bnQgdGhlIGNyb3NzaW5ncyBvbiB0aGUgZWRnZSBzdGFydGluZyBhdCBiW2ldXG5cdFx0aWYgKCFiW2ldLnJvdyAmJiBiW2ldLnJvdyAhPT0gMCkge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblx0XHRsZXQgY291bnQgPSAwO1xuXHRcdGZvciAoY29uc3QgW2osIGVsZW1lbnRdIG9mIGEuZW50cmllcygpKSB7XG5cdFx0XHRpZiAoIWVsZW1lbnQucm93ICYmIGVsZW1lbnQucm93ICE9PSAwKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChqIC0gYltpXS5yb3cpICogKGkgLSBlbGVtZW50LnJvdykgPiAwKSB7XG5cdFx0XHRcdGlmIChlamVjdCkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvdW50Kys7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjb3VudDtcblx0fTtcblx0Y29uc3Qgc2hvcnRlbkRpZmZTdHJpbmcgPSBmdW5jdGlvbiBzaG9ydGVuRGlmZlN0cmluZyhzdHIsIGNvbnRleHQpIHtcblx0XHRjb25zdCByZSA9IC8oPGRlbFtcXFNcXHNdKj88XFwvZGVsPnw8aW5zW1xcU1xcc10qPzxcXC9pbnM+KS87XG5cdFx0Y29uc3Qgc3BsaXR0ZWQgPSBzdHIuc3BsaXQocmUpO1xuXHRcdGxldCByZXQgPSBbJyddO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXR0ZWQubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdGlmIChzcGxpdHRlZFtpXS5sZW5ndGggPCAyICogY29udGV4dCkge1xuXHRcdFx0XHRyZXRbcmV0Lmxlbmd0aCAtIDFdICs9IHNwbGl0dGVkW2ldO1xuXHRcdFx0XHRpZiAoaSArIDEgPCBzcGxpdHRlZC5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXRbcmV0Lmxlbmd0aCAtIDFdICs9IHNwbGl0dGVkW2kgKyAxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChpID4gMCkge1xuXHRcdFx0XHRcdHJldFtyZXQubGVuZ3RoIC0gMV0gKz0gc3BsaXR0ZWRbaV0uc2xpY2UoMCwgTWF0aC5tYXgoMCwgY29udGV4dCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpICsgMSA8IHNwbGl0dGVkLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldC5wdXNoKHNwbGl0dGVkW2ldLnNsaWNlKE1hdGgubWF4KDAsIHNwbGl0dGVkW2ldLmxlbmd0aCAtIGNvbnRleHQpKSArIHNwbGl0dGVkW2kgKyAxXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0d2hpbGUgKHJldC5sZW5ndGggPiAwICYmICFyZXRbMF0pIHtcblx0XHRcdHJldCA9IHJldC5zbGljZSgxKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgZGlmZlN0cmluZyA9IChvLCBuKSA9PiB7XG5cdFx0Ly8gIFdlIG5lZWQgdG8gc3BsaXQgdGhlIHN0cmluZ3MgbyBhbmQgbiBmaXJzdCwgYW5kIGVudGlmeSgpIHRoZSBwYXJ0c1xuXHRcdC8vICBpbmRpdmlkdWFsbHksIHNvIHRoYXQgdGhlIEhUTUwgZW50aXRpZXMgYXJlIG5ldmVyIGN1dCBhcGFydC4gKEF4ZWxCb2xkdClcblx0XHRsZXQgaTtcblx0XHRjb25zdCBvU3BsaXR0ZWQgPSBvLnNwbGl0KC9cXGIvKTtcblx0XHRjb25zdCBuU3BsaXR0ZWQgPSBuLnNwbGl0KC9cXGIvKTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgb1NwbGl0dGVkLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRvU3BsaXR0ZWRbaV0gPSBvU3BsaXR0ZWRbaV0uZW50aWZ5KCk7XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCBuU3BsaXR0ZWQubGVuZ3RoOyArK2kpIHtcblx0XHRcdG5TcGxpdHRlZFtpXSA9IG5TcGxpdHRlZFtpXS5lbnRpZnkoKTtcblx0XHR9XG5cdFx0Y29uc3Qgb3V0ID0gZGlmZihvU3BsaXR0ZWQsIG5TcGxpdHRlZCk7XG5cdFx0bGV0IHN0ciA9ICcnO1xuXHRcdGxldCBhY2MgPSBbXTsgLy8gYWNjdW11bGF0b3IgZm9yIHByZXR0aWVyIG91dHB1dFxuXG5cdFx0Ly8gY3Jvc3NpbmcgcGFpcmluZ3MgLS0gZWcgJ0EgQicgdnMgJ0IgQScgLS0gY2F1c2UgcHJvYmxlbXMsIHNvIGxldCdzIGlyb24gdGhlbSBvdXRcblx0XHQvLyB0aGlzIGRvZXNuJ3QgYWx3YXlzIGRvIHRoaW5ncyBvcHRpbWFsbHkgYnV0IGl0IHNob3VsZCBiZSBmYXN0IGVub3VnaFxuXHRcdGxldCBtYXhPdXRwdXRQYWlyID0gMDtcblx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0Lm4ubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChvdXQubltpXS5wYWlyZWQpIHtcblx0XHRcdFx0aWYgKG1heE91dHB1dFBhaXIgPiBvdXQubltpXS5yb3cpIHtcblx0XHRcdFx0XHQvLyB0YW5nbGUgLSBkZWxldGUgcGFpcmluZ1xuXHRcdFx0XHRcdG91dC5vW291dC5uW2ldLnJvd10gPSBvdXQub1tvdXQubltpXS5yb3ddLnRleHQ7XG5cdFx0XHRcdFx0b3V0Lm5baV0gPSBvdXQubltpXS50ZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChtYXhPdXRwdXRQYWlyIDwgb3V0Lm5baV0ucm93KSB7XG5cdFx0XHRcdFx0bWF4T3V0cHV0UGFpciA9IG91dC5uW2ldLnJvdztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBvdXRwdXQgdGhlIHN0dWZmIHByZWNlZGluZyB0aGUgZmlyc3QgcGFpcmVkIG9sZCBsaW5lXG5cdFx0Zm9yIChpID0gMDsgaSA8IG91dC5vLmxlbmd0aCAmJiAhb3V0Lm9baV0ucGFpcmVkOyArK2kpIHtcblx0XHRcdGFjYy5wdXNoKG91dC5vW2ldKTtcblx0XHR9XG5cdFx0c3RyICs9IGRlbEZtdChhY2MpO1xuXHRcdGFjYyA9IFtdO1xuXHRcdC8vIG1haW4gbG9vcFxuXHRcdGZvciAoaSA9IDA7IGkgPCBvdXQubi5sZW5ndGg7ICsraSkge1xuXHRcdFx0Ly8gb3V0cHV0IHVucGFpcmVkIG5ldyBcImxpbmVzXCJcblx0XHRcdHdoaWxlIChpIDwgb3V0Lm4ubGVuZ3RoICYmICFvdXQubltpXS5wYWlyZWQpIHtcblx0XHRcdFx0YWNjLnB1c2gob3V0Lm5baSsrXSk7XG5cdFx0XHR9XG5cdFx0XHRzdHIgKz0gaW5zRm10KGFjYyk7XG5cdFx0XHRhY2MgPSBbXTtcblx0XHRcdGlmIChpIDwgb3V0Lm4ubGVuZ3RoKSB7XG5cdFx0XHRcdC8vIHRoaXMgbmV3IFwibGluZVwiIGlzIHBhaXJlZCB3aXRoIHRoZSAob3V0Lm5baV0ucm93KXRoIG9sZCBcImxpbmVcIlxuXHRcdFx0XHRzdHIgKz0gb3V0Lm5baV0udGV4dDtcblx0XHRcdFx0Ly8gb3V0cHV0IHVucGFpcmVkIG9sZCByb3dzIHN0YXJ0aW5nIGFmdGVyIHRoaXMgbmV3IGxpbmUncyBwYXJ0bmVyXG5cdFx0XHRcdGxldCBtID0gb3V0Lm5baV0ucm93ICsgMTtcblx0XHRcdFx0d2hpbGUgKG0gPCBvdXQuby5sZW5ndGggJiYgIW91dC5vW21dLnBhaXJlZCkge1xuXHRcdFx0XHRcdGFjYy5wdXNoKG91dC5vW20rK10pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0ciArPSBkZWxGbXQoYWNjKTtcblx0XHRcdFx0YWNjID0gW107XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBzdHI7XG5cdH07XG5cdC8vIHNlZSB7QGxpbmsgaHR0cDovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL0NvcmVfSmF2YVNjcmlwdF8xLjVfUmVmZXJlbmNlOkdsb2JhbF9PYmplY3RzOk9iamVjdH1cblx0Ly8gRklYTUU6IHVzZSBvYmouaGFzT3duUHJvcGVydHkgaW5zdGVhZCBvZiB0aGlzIGtsdWRnZSFcblx0Y29uc3QganNSZXNlcnZlZFByb3BlcnRpZXMgPSBuZXcgUmVnRXhwKFxuXHRcdCdeKGNvbnN0cnVjdG9yfHByb3RvdHlwZXxfXygoZGVmaW5lfGxvb2t1cClbR1NdZXR0ZXIpX18nICtcblx0XHRcdCd8ZXZhbHxoYXNPd25Qcm9wZXJ0eXxwcm9wZXJ0eUlzRW51bWVyYWJsZScgK1xuXHRcdFx0J3x0byhTb3VyY2V8U3RyaW5nfExvY2FsZVN0cmluZyl8KHVuKT93YXRjaHx2YWx1ZU9mKSQnXG5cdCk7XG5cdGNvbnN0IGRpZmZCdWdBbGVydCA9IGZ1bmN0aW9uIGRpZmZCdWdBbGVydCh3b3JkKSB7XG5cdFx0aWYgKCFkaWZmQnVnQWxlcnQubGlzdFt3b3JkXSkge1xuXHRcdFx0ZGlmZkJ1Z0FsZXJ0Lmxpc3Rbd29yZF0gPSAxO1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoYEJhZCB3b3JkOiAke3dvcmR9XFxuXFxuUGxlYXNlIHJlcG9ydCB0aGlzIGJ1Zy5gLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdH1cblx0fTtcblx0ZGlmZkJ1Z0FsZXJ0Lmxpc3QgPSB7fTtcblx0Y29uc3QgbWFrZURpZmZIYXNodGFibGUgPSAoc3JjKSA9PiB7XG5cdFx0Y29uc3QgcmV0ID0ge307XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChqc1Jlc2VydmVkUHJvcGVydGllcy50ZXN0KHNyY1tpXSkpIHtcblx0XHRcdFx0c3JjW2ldICs9ICc8IS0tIC0tPic7XG5cdFx0XHR9XG5cdFx0XHRyZXRbc3JjW2ldXSA/Pz0gW107XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXRbc3JjW2ldXS5wdXNoKGkpO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdGRpZmZCdWdBbGVydChzcmNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBkaWZmID0gKG8sIG4pID0+IHtcblx0XHQvLyBwYXNzIDE6IG1ha2UgaGFzaHRhYmxlIG5zIHdpdGggbmV3IHJvd3MgYXMga2V5c1xuXHRcdGNvbnN0IG5zID0gbWFrZURpZmZIYXNodGFibGUobik7XG5cdFx0Ly8gcGFzcyAyOiBtYWtlIGhhc2h0YWJsZSBvcyB3aXRoIG9sZCByb3dzIGFzIGtleXNcblx0XHRjb25zdCBvcyA9IG1ha2VEaWZmSGFzaHRhYmxlKG8pO1xuXHRcdC8vIHBhc3MgMzogcGFpciB1bmlxdWUgbmV3IHJvd3MgYW5kIG1hdGNoaW5nIHVuaXF1ZSBvbGQgcm93c1xuXHRcdGxldCBpO1xuXHRcdGZvciAoaSBpbiBucykge1xuXHRcdFx0aWYgKG5zW2ldLmxlbmd0aCA9PT0gMSAmJiBvc1tpXSAmJiBvc1tpXS5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0bltuc1tpXVswXV0gPSB7XG5cdFx0XHRcdFx0dGV4dDogbltuc1tpXVswXV0sXG5cdFx0XHRcdFx0cm93OiBvc1tpXVswXSxcblx0XHRcdFx0XHRwYWlyZWQ6IHRydWUsXG5cdFx0XHRcdH07XG5cdFx0XHRcdG9bb3NbaV1bMF1dID0ge1xuXHRcdFx0XHRcdHRleHQ6IG9bb3NbaV1bMF1dLFxuXHRcdFx0XHRcdHJvdzogbnNbaV1bMF0sXG5cdFx0XHRcdFx0cGFpcmVkOiB0cnVlLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBwYXNzIDQ6IHBhaXIgbWF0Y2hpbmcgcm93cyBpbW1lZGlhdGVseSBmb2xsb3dpbmcgcGFpcmVkIHJvd3MgKG5vdCBuZWNlc3NhcmlseSB1bmlxdWUpXG5cdFx0Zm9yIChpID0gMDsgaSA8IG4ubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5baV0ucGFpcmVkICYmXG5cdFx0XHRcdCFuW2kgKyAxXS5wYWlyZWQgJiZcblx0XHRcdFx0bltpXS5yb3cgKyAxIDwgby5sZW5ndGggJiZcblx0XHRcdFx0IW9bbltpXS5yb3cgKyAxXS5wYWlyZWQgJiZcblx0XHRcdFx0bltpICsgMV0gPT09IG9bbltpXS5yb3cgKyAxXVxuXHRcdFx0KSB7XG5cdFx0XHRcdG5baSArIDFdID0ge1xuXHRcdFx0XHRcdHRleHQ6IG5baSArIDFdLFxuXHRcdFx0XHRcdHJvdzogbltpXS5yb3cgKyAxLFxuXHRcdFx0XHRcdHBhaXJlZDogdHJ1ZSxcblx0XHRcdFx0fTtcblx0XHRcdFx0b1tuW2ldLnJvdyArIDFdID0ge1xuXHRcdFx0XHRcdHRleHQ6IG9bbltpXS5yb3cgKyAxXSxcblx0XHRcdFx0XHRyb3c6IGkgKyAxLFxuXHRcdFx0XHRcdHBhaXJlZDogdHJ1ZSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGFzcyA1OiBwYWlyIG1hdGNoaW5nIHJvd3MgaW1tZWRpYXRlbHkgcHJlY2VkaW5nIHBhaXJlZCByb3dzIChub3QgbmVjZXNzYXJpbHkgdW5pcXVlKVxuXHRcdGZvciAoaSA9IG4ubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuW2ldLnBhaXJlZCAmJlxuXHRcdFx0XHQhbltpIC0gMV0ucGFpcmVkICYmXG5cdFx0XHRcdG5baV0ucm93ID4gMCAmJlxuXHRcdFx0XHQhb1tuW2ldLnJvdyAtIDFdLnBhaXJlZCAmJlxuXHRcdFx0XHRuW2kgLSAxXSA9PT0gb1tuW2ldLnJvdyAtIDFdXG5cdFx0XHQpIHtcblx0XHRcdFx0bltpIC0gMV0gPSB7XG5cdFx0XHRcdFx0dGV4dDogbltpIC0gMV0sXG5cdFx0XHRcdFx0cm93OiBuW2ldLnJvdyAtIDEsXG5cdFx0XHRcdFx0cGFpcmVkOiB0cnVlLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRvW25baV0ucm93IC0gMV0gPSB7XG5cdFx0XHRcdFx0dGV4dDogb1tuW2ldLnJvdyAtIDFdLFxuXHRcdFx0XHRcdHJvdzogaSAtIDEsXG5cdFx0XHRcdFx0cGFpcmVkOiB0cnVlLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0byxcblx0XHRcdG4sXG5cdFx0fTtcblx0fTtcblx0Ly8gRU5ERklMRTogZGlmZi5qc1xuXHQvLyBTVEFSVEZJTEU6IGluaXQuanNcblx0Y29uc3Qgc2V0U2l0ZUluZm8gPSAoKSA9PiB7XG5cdFx0aWYgKHdpbmRvdy5wb3B1cExvY2FsRGVidWcpIHtcblx0XHRcdHBnLndpa2kuaG9zdG5hbWUgPSAnZW4ud2lraXBlZGlhLm9yZyc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBnLndpa2kuaG9zdG5hbWUgPSBsb2NhdGlvbi5ob3N0bmFtZTsgLy8gdXNlIGluIHByZWZlcmVuY2UgdG8gbG9jYXRpb24uaG9zdG5hbWUgZm9yIGZsZXhpYmlsaXR5ICg/KVxuXHRcdH1cblx0XHRwZy53aWtpLndpa2ltZWRpYSA9XG5cdFx0XHQvKHdpa2koW21wXWVkaWF8c291cmNlfGJvb2tzfG5ld3N8cXVvdGV8dmVyc2l0eXxzcGVjaWVzfHZveWFnZXxkYXRhKXxtZXRhd2lraXx3aWt0aW9uYXJ5fG1lZGlhd2lraSlcXC5vcmcvLnRlc3QoXG5cdFx0XHRcdHBnLndpa2kuaG9zdG5hbWVcblx0XHRcdCk7XG5cdFx0cGcud2lraS53aWtpYSA9IC9cXC53aWtpYVxcLmNvbSQvaS50ZXN0KHBnLndpa2kuaG9zdG5hbWUpO1xuXHRcdHBnLndpa2kuaXNMb2NhbCA9IHBnLndpa2kuaG9zdG5hbWUuc3RhcnRzV2l0aCgnbG9jYWxob3N0Jyk7XG5cdFx0cGcud2lraS5jb21tb25zID1cblx0XHRcdHBnLndpa2kud2lraW1lZGlhICYmIHBnLndpa2kuaG9zdG5hbWUgIT09ICdjb21tb25zLndpa2ltZWRpYS5vcmcnID8gJ2NvbW1vbnMud2lraW1lZGlhLm9yZycgOiBudWxsO1xuXHRcdHBnLndpa2kubGFuZyA9IG13LmNvbmZpZy5nZXQoJ3dnQ29udGVudExhbmd1YWdlJyk7XG5cdFx0Y29uc3QgcG9ydCA9IGxvY2F0aW9uLnBvcnQgPyBgOiR7bG9jYXRpb24ucG9ydH1gIDogJyc7XG5cdFx0cGcud2lraS5zaXRlYmFzZSA9IHBnLndpa2kuaG9zdG5hbWUgKyBwb3J0O1xuXHR9O1xuXHRjb25zdCBzZXRVc2VySW5mbyA9ICgpID0+IHtcblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdFx0dXN1c2VyczogbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpLFxuXHRcdFx0dXNwcm9wOiAncmlnaHRzJyxcblx0XHR9O1xuXHRcdHBnLnVzZXIuY2FuUmV2aWV3ID0gZmFsc2U7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwUmV2aWV3JykpIHtcblx0XHRcdGdldE13QXBpKClcblx0XHRcdFx0LmdldChwYXJhbXMpXG5cdFx0XHRcdC5kb25lKChkYXRhKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgW3tyaWdodHN9XSA9IGRhdGEucXVlcnkudXNlcnM7XG5cdFx0XHRcdFx0cGcudXNlci5jYW5SZXZpZXcgPSByaWdodHMuaW5jbHVkZXMoJ3JldmlldycpOyAvLyBUT0RPOiBTaG91bGQgaXQgYmUgYSBnZXRWYWx1ZU9mKCdSZXZpZXdSaWdodCcpID9cblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBmZXRjaFNwZWNpYWxQYWdlTmFtZXMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRtZXRhOiAnc2l0ZWluZm8nLFxuXHRcdFx0c2lwcm9wOiAnc3BlY2lhbHBhZ2VhbGlhc2VzJyxcblx0XHRcdHVzZWxhbmc6ICdjb250ZW50Jyxcblx0XHRcdC8vIGNhY2hlIGZvciBhbiBob3VyXG5cdFx0XHRzbWF4YWdlOiAzNjAwLFxuXHRcdFx0bWF4YWdlOiAzNjAwLFxuXHRcdH07XG5cdFx0cmV0dXJuIGdldE13QXBpKClcblx0XHRcdC5nZXQocGFyYW1zKVxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0cGcud2lraS5zcGVjaWFscGFnZWFsaWFzZXMgPSBkYXRhLnF1ZXJ5LnNwZWNpYWxwYWdlYWxpYXNlcztcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBzZXRUaXRsZUJhc2UgPSAoKSA9PiB7XG5cdFx0Y29uc3QgcHJvdG9jb2wgPSB3aW5kb3cucG9wdXBMb2NhbERlYnVnID8gJ2h0dHA6JyA6IGxvY2F0aW9uLnByb3RvY29sO1xuXHRcdHBnLndpa2kuYXJ0aWNsZVBhdGggPSBtdy5jb25maWcuZ2V0KCd3Z0FydGljbGVQYXRoJykucmVwbGFjZSgvXFwvXFwkMS8sICcnKTsgLy8gYXMgaW4gaHR0cDovL3NvbWUudGhpbmcuY29tL3dpa2kvQXJ0aWNsZVxuXHRcdHBnLndpa2kuYm90SW50ZXJmYWNlUGF0aCA9IG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0Jyk7XG5cdFx0cGcud2lraS5BUElQYXRoID0gYCR7bXcuY29uZmlnLmdldCgnd2dTY3JpcHRQYXRoJyl9L2FwaS5waHBgO1xuXHRcdC8vIGRlZmF1bHQgbWVkaWF3aWtpIHNldHRpbmcgaXMgcGF0aHMgbGlrZSBodHRwOi8vc29tZS50aGluZy5jb20vYXJ0aWNsZVBhdGgvaW5kZXgucGhwP3RpdGxlPWZvb1xuXHRcdGNvbnN0IHRpdGxldGFpbCA9IGAke3BnLndpa2kuYm90SW50ZXJmYWNlUGF0aH0/dGl0bGU9YDtcblx0XHQvLyBsZXQgdGl0bGV0YWlsMiA9IGpvaW5QYXRoKFtwZy53aWtpLmJvdEludGVyZmFjZVBhdGgsICd3aWtpLnBodG1sP3RpdGxlPSddKTtcblx0XHQvLyBvdGhlciBzaXRlcyBtYXkgbmVlZCB0byBhZGQgY29kZSBoZXJlIHRvIHNldCB0aXRsZXRhaWwgZGVwZW5kaW5nIG9uIGhvdyB0aGVpciB1cmxzIHdvcmtcblx0XHRwZy53aWtpLnRpdGxlYmFzZSA9IGAke3Byb3RvY29sfS8vJHtwZy53aWtpLnNpdGViYXNlfSR7dGl0bGV0YWlsfWA7XG5cdFx0Ly8gcGcud2lraS50aXRsZWJhc2UyICA9IHByb3RvY29sICsgJy8vJyArIGpvaW5QYXRoKFtwZy53aWtpLnNpdGViYXNlLCB0aXRsZXRhaWwyXSk7XG5cdFx0cGcud2lraS53aWtpYmFzZSA9IGAke3Byb3RvY29sfS8vJHtwZy53aWtpLnNpdGViYXNlfSR7cGcud2lraS5ib3RJbnRlcmZhY2VQYXRofWA7XG5cdFx0cGcud2lraS5hcGl3aWtpYmFzZSA9IGAke3Byb3RvY29sfS8vJHtwZy53aWtpLnNpdGViYXNlfSR7cGcud2lraS5BUElQYXRofWA7XG5cdFx0cGcud2lraS5hcnRpY2xlYmFzZSA9IGAke3Byb3RvY29sfS8vJHtwZy53aWtpLnNpdGViYXNlfSR7cGcud2lraS5hcnRpY2xlUGF0aH1gO1xuXHRcdHBnLndpa2kuY29tbW9uc2Jhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5jb21tb25zfSR7cGcud2lraS5ib3RJbnRlcmZhY2VQYXRofWA7XG5cdFx0cGcud2lraS5hcGljb21tb25zYmFzZSA9IGAke3Byb3RvY29sfS8vJHtwZy53aWtpLmNvbW1vbnN9JHtwZy53aWtpLkFQSVBhdGh9YDtcblx0XHRwZy5yZS5iYXNlbmFtZXMgPSBuZXcgUmVnRXhwKGBeKCR7bWFwKGxpdGVyYWxpemVSZWdleCwgW3BnLndpa2kudGl0bGViYXNlLCBwZy53aWtpLmFydGljbGViYXNlXSkuam9pbignfCcpfSlgKTtcblx0fTtcblx0Ly8gR2xvYmFsIHJlZ2V4cHNcblx0Y29uc3Qgc2V0TWFpblJlZ2V4ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHJlU3RhcnQgPSAnW146XSo6Ly8nO1xuXHRcdGxldCBwcmVUaXRsZXMgPSBgJHtsaXRlcmFsaXplUmVnZXgobXcuY29uZmlnLmdldCgnd2dTY3JpcHRQYXRoJykpfS8oPzppbmRleFsuXXBocHx3aWtpWy5dcGh0bWwpWz9ddGl0bGU9YDtcblx0XHRwcmVUaXRsZXMgKz0gYHwke2xpdGVyYWxpemVSZWdleChgJHtwZy53aWtpLmFydGljbGVQYXRofS9gKX1gO1xuXHRcdGNvbnN0IHJlRW5kID0gYCgke3ByZVRpdGxlc30pKFteJj8jXSopW14jXSooPzojKC4rKSk/YDtcblx0XHRwZy5yZS5tYWluID0gbmV3IFJlZ0V4cChyZVN0YXJ0ICsgbGl0ZXJhbGl6ZVJlZ2V4KHBnLndpa2kuc2l0ZWJhc2UpICsgcmVFbmQpO1xuXHR9O1xuXHRjb25zdCBidWlsZFNwZWNpYWxQYWdlR3JvdXAgPSAoc3BlY2lhbFBhZ2VPYmopID0+IHtcblx0XHRjb25zdCB2YXJpYW50cyA9IFtdO1xuXHRcdHZhcmlhbnRzLnB1c2goXG5cdFx0XHRtdy51dGlsLmVzY2FwZVJlZ0V4cChzcGVjaWFsUGFnZU9iai5yZWFsbmFtZSksXG5cdFx0XHRtdy51dGlsLmVzY2FwZVJlZ0V4cChlbmNvZGVVUkkoc3BlY2lhbFBhZ2VPYmoucmVhbG5hbWUpKVxuXHRcdCk7XG5cdFx0Zm9yIChjb25zdCBhbGlhcyBvZiBzcGVjaWFsUGFnZU9iai5hbGlhc2VzKSB7XG5cdFx0XHR2YXJpYW50cy5wdXNoKG13LnV0aWwuZXNjYXBlUmVnRXhwKGFsaWFzKSwgbXcudXRpbC5lc2NhcGVSZWdFeHAoZW5jb2RlVVJJKGFsaWFzKSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFyaWFudHMuam9pbignfCcpO1xuXHR9O1xuXHRjb25zdCBzZXRSZWdleHBzID0gKCkgPT4ge1xuXHRcdHNldE1haW5SZWdleCgpO1xuXHRcdGNvbnN0IHNwID0gbnNSZShwZy5uc1NwZWNpYWxJZCk7XG5cdFx0cGcucmUudXJsTm9Qb3B1cCA9IG5ldyBSZWdFeHAoYCgodGl0bGU9fC8pJHtzcH0oPzolM0F8Oil8c2VjdGlvbj1bMC05XXxeIyQpYCk7XG5cdFx0Zm9yIChjb25zdCBzcGVjaWFscGFnZSBvZiBwZy53aWtpLnNwZWNpYWxwYWdlYWxpYXNlcykge1xuXHRcdFx0c3dpdGNoIChzcGVjaWFscGFnZS5yZWFsbmFtZSkge1xuXHRcdFx0XHRjYXNlICdDb250cmlidXRpb25zJzpcblx0XHRcdFx0XHRwZy5yZS5jb250cmlicyA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRgKHRpdGxlPXwvKSR7c3B9KD86JTNBfDopKD86JHtidWlsZFNwZWNpYWxQYWdlR3JvdXAoc3BlY2lhbHBhZ2UpfSlgICtcblx0XHRcdFx0XHRcdFx0YCgmdGFyZ2V0PXwvfC8ke25zUmUocGcubnNVc2VySWQpfTopKC4qKWAsXG5cdFx0XHRcdFx0XHQnaSdcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdEaWZmJzpcblx0XHRcdFx0XHRwZy5yZS5zcGVjaWFsZGlmZiA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRgLyR7c3B9KD86JTNBfDopKD86JHtidWlsZFNwZWNpYWxQYWdlR3JvdXAoc3BlY2lhbHBhZ2UpfSkvKFtePyNdKilgLFxuXHRcdFx0XHRcdFx0J2knXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnRW1haWx1c2VyJzpcblx0XHRcdFx0XHRwZy5yZS5lbWFpbCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRgKHRpdGxlPXwvKSR7c3B9KD86JTNBfDopKD86JHtidWlsZFNwZWNpYWxQYWdlR3JvdXAoc3BlY2lhbHBhZ2UpfSlgICtcblx0XHRcdFx0XHRcdFx0YCgmdGFyZ2V0PXwvfC8oPzoke25zUmUocGcubnNVc2VySWQpfTopPykoLiopYCxcblx0XHRcdFx0XHRcdCdpJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ1doYXRsaW5rc2hlcmUnOlxuXHRcdFx0XHRcdHBnLnJlLmJhY2tsaW5rcyA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRgKHRpdGxlPXwvKSR7c3B9KD86JTNBfDopKD86JHtidWlsZFNwZWNpYWxQYWdlR3JvdXAoc3BlY2lhbHBhZ2UpfSkoJnRhcmdldD18LykoW14mXSopYCxcblx0XHRcdFx0XHRcdCdpJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IGltID0gbnNSZUltYWdlKCk7XG5cdFx0Ly8gbm90ZTogdHJpZXMgdG8gZ2V0IGltYWdlcyBpbiBpbmZvYm94IHRlbXBsYXRlcyB0b28sIGUuZy4gbW92aWUgcGFnZXMsIGFsYnVtIHBhZ2VzIGV0Y1xuXHRcdC8vXHRcdFx0XHRcdCAgKF58XFxbXFxbKWltYWdlOiAqKFtefFxcXV0qW158XFxdIF0pICpcblx0XHQvL1x0XHRcdFx0XHQgIChefFxcW1xcWylpbWFnZTogKihbXnxcXF1dKltefFxcXSBdKShbXjAtOVxcXV0qKFswLTldKykgKnB4KT9cblx0XHQvL1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkNCA9IDEyMCBhcyBpbiAxMjBweFxuXHRcdHBnLnJlLmltYWdlID0gbmV3IFJlZ0V4cChcblx0XHRcdGAoXnxcXFxcW1xcXFxbKSR7aW19OiAqKFtefFxcXFxdXSpbXnxcXFxcXSBdKSR7U3RyaW5nLnJhd2AoW14wLTlcXF1dKihbMC05XSspICpweCk/fCg/OlxcbiAqW3xdP3xbfF0pICpgfSgke2dldFZhbHVlT2YoJ3BvcHVwSW1hZ2VWYXJzUmVnZXhwJyl9KWAgK1xuXHRcdFx0XHRgICo9ICooPzpcXFxcW1xcXFxbICopPyg/OiR7aW19Oik/JHtTdHJpbmcucmF3YChbXnxdKj8pKD86XFxdXFxdKT8gKlt8XT8gKlxcbmB9YCxcblx0XHRcdCdpbWcnXG5cdFx0KTtcblx0XHRwZy5yZS5pbWFnZUJyYWNrZXRDb3VudCA9IDY7XG5cdFx0cGcucmUuY2F0ZWdvcnkgPSBuZXcgUmVnRXhwKGBcXFxcW1xcXFxbJHtuc1JlKHBnLm5zQ2F0ZWdvcnlJZCl9OiAqKFtefFxcXFxdXSpbXnxcXFxcXSBdKSAqYCwgJ2knKTtcblx0XHRwZy5yZS5jYXRlZ29yeUJyYWNrZXRDb3VudCA9IDE7XG5cdFx0Ly8gSVB2NiB8IElQdjRcblx0XHRwZy5yZS5pcFVzZXIgPVxuXHRcdFx0L14oPzo6KD86OnwoPzo6W1xcZEEtRmEtZl17MSw0fSl7MSw3fSl8W1xcZEEtRmEtZl17MSw0fSg/OjpbXFxkQS1GYS1mXXsxLDR9KXswLDZ9Ojp8W1xcZEEtRmEtZl17MSw0fSg/OjpbXFxkQS1GYS1mXXsxLDR9KXs3fSl8KCgoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XVxcZHxcXGQpXFwuKXszfSgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldXFxkfFxcZCkpJC87XG5cdFx0cGcucmUuc3R1YiA9IG5ldyBSZWdFeHAoZ2V0VmFsdWVPZigncG9wdXBTdHViUmVnZXhwJyksICdpbScpO1xuXHRcdHBnLnJlLmRpc2FtYmlnID0gbmV3IFJlZ0V4cChnZXRWYWx1ZU9mKCdwb3B1cERhYlJlZ2V4cCcpLCAnaW0nKTtcblx0XHQvLyBGSVhNRSByZXBsYWNlIHdpdGggZ2VuZXJhbCBwYXJhbWV0ZXIgcGFyc2luZyBmdW5jdGlvbiwgdGhpcyBpcyBkYWZ0XG5cdFx0cGcucmUub2xkaWQgPSAvWyY/XW9sZGlkPShbXiZdKikvO1xuXHRcdHBnLnJlLmRpZmYgPSAvWyY/XWRpZmY9KFteJl0qKS87XG5cdH07XG5cdC8vIG1pc2NlbGxhbnlcblx0Y29uc3Qgc2V0dXBDYWNoZSA9ICgpID0+IHtcblx0XHQvLyBwYWdlIGNhY2hpbmdcblx0XHRwZy5jYWNoZS5wYWdlcyA9IFtdO1xuXHR9O1xuXHRjb25zdCBzZXRNaXNjID0gKCkgPT4ge1xuXHRcdHBnLmN1cnJlbnQubGluayA9IG51bGw7XG5cdFx0cGcuY3VycmVudC5saW5rcyA9IFtdO1xuXHRcdHBnLmN1cnJlbnQubGlua3NIYXNoID0ge307XG5cdFx0c2V0dXBDYWNoZSgpO1xuXHRcdHBnLnRpbWVyLmNoZWNrUG9wdXBQb3NpdGlvbiA9IG51bGw7XG5cdFx0cGcuY291bnRlci5sb29wID0gMDtcblx0XHQvLyBpZHMgY2hhbmdlIHdpdGggZWFjaCBwb3B1cDogcG9wdXBJbWFnZTAsIHBvcHVwSW1hZ2UxIGV0Y1xuXHRcdHBnLmlkTnVtYmVyID0gMDtcblx0XHQvLyBmb3IgbXlEZWNvZGVVUklcblx0XHRwZy5taXNjLmRlY29kZUV4dHJhcyA9IFtcblx0XHRcdHtmcm9tOiAnJTJDJywgdG86ICcsJ30sXG5cdFx0XHR7ZnJvbTogJ18nLCB0bzogJyAnfSxcblx0XHRcdHtmcm9tOiAnJTI0JywgdG86ICckJ30sXG5cdFx0XHR7ZnJvbTogJyUyNicsIHRvOiAnJid9LCAvLyBubyAsXG5cdFx0XTtcblx0fTtcblx0Y29uc3QgZ2V0TXdBcGkgPSAoKSA9PiB7XG5cdFx0aWYgKCFwZy5hcGkuY2xpZW50KSB7XG5cdFx0XHRwZy5hcGkudXNlckFnZW50ID0gJ05hdmlnYXRpb24gcG9wdXBzLzEuMCc7XG5cdFx0XHRwZy5hcGkuY2xpZW50ID0gYXBpO1xuXHRcdH1cblx0XHRyZXR1cm4gcGcuYXBpLmNsaWVudDtcblx0fTtcblx0Ly8gV2UgbmVlZCBhIGNhbGxiYWNrIHNpbmNlIHRoaXMgbWlnaHQgZW5kIHVwIGFzeW5jaHJvbm91cyBiZWNhdXNlIG9mXG5cdC8vIHRoZSBtdy5sb2FkZXIudXNpbmcoKSBjYWxsLlxuXHRjb25zdCBzZXR1cFBvcHVwcyA9IGZ1bmN0aW9uIHNldHVwUG9wdXBzKGNhbGxiYWNrKSB7XG5cdFx0aWYgKHNldHVwUG9wdXBzLmNvbXBsZXRlZCkge1xuXHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBUaGVzZSBkZXBlbmRlbmNpZXMgc2hvdWxkIGFsc2UgYmUgZW5mb3JjZWQgZnJvbSB0aGUgZ2FkZ2V0LFxuXHRcdC8vIGJ1dCBub3QgZXZlcnlvbmUgbG9hZHMgdGhpcyBhcyBhIGdhZGdldCwgc28gZG91YmxlIGNoZWNrXG5cdFx0ZmV0Y2hTcGVjaWFsUGFnZU5hbWVzKCkudGhlbigoKSA9PiB7XG5cdFx0XHQvLyBOQiB0cmFuc2xhdGFibGUgc3RyaW5ncyBzaG91bGQgYmUgc2V0IHVwIGZpcnN0IChzdHJpbmdzLmpzKVxuXHRcdFx0Ly8gYmFzaWNzXG5cdFx0XHRzZXR1cERlYnVnZ2luZygpO1xuXHRcdFx0c2V0U2l0ZUluZm8oKTtcblx0XHRcdHNldFRpdGxlQmFzZSgpO1xuXHRcdFx0c2V0T3B0aW9ucygpOyAvLyBzZWUgb3B0aW9ucy5qc1xuXHRcdFx0c2V0VXNlckluZm8oKTtcblx0XHRcdC8vIG5hbWVzcGFjZXMgZXRjXG5cdFx0XHRzZXROYW1lc3BhY2VzKCk7XG5cdFx0XHRzZXRJbnRlcndpa2koKTtcblx0XHRcdC8vIHJlZ2V4cHNcblx0XHRcdHNldFJlZ2V4cHMoKTtcblx0XHRcdHNldFJlZGlycygpO1xuXHRcdFx0Ly8gb3RoZXIgc3R1ZmZcblx0XHRcdHNldE1pc2MoKTtcblx0XHRcdHNldHVwTGl2ZVByZXZpZXcoKTtcblx0XHRcdC8vIG1haW4gZGVhbCBoZXJlXG5cdFx0XHRzZXR1cFRvb2x0aXBzKCk7XG5cdFx0XHRsb2coJ0luIHNldHVwUG9wdXBzKCksIGp1c3QgY2FsbGVkIHNldHVwVG9vbHRpcHMoKScpO1xuXHRcdFx0TmF2cG9wdXAudHJhY2tlci5lbmFibGUoKTtcblx0XHRcdHNldHVwUG9wdXBzLmNvbXBsZXRlZCA9IHRydWU7XG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cdC8vIEVOREZJTEU6IGluaXQuanNcblx0Ly8gU1RBUlRGSUxFOiBuYXZsaW5rcy5qc1xuXHQvLyBuYXZsaW5rcy4uLiBsZXQgdGhlIGZ1biBiZWdpblxuXHQvL1xuXHRjb25zdCBkZWZhdWx0TmF2bGlua1NwZWMgPSAoKSA9PiB7XG5cdFx0bGV0IHN0ciA9ICcnO1xuXHRcdHN0ciArPSAnPGI+PDxtYWlubGlua3xzaG9ydGN1dD0gPj48L2I+Jztcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBMYXN0RWRpdExpbmsnKSkge1xuXHRcdFx0c3RyICs9ICcqPDxsYXN0RWRpdHxzaG9ydGN1dD0vPj58PDxsYXN0Q29udHJpYj4+fDw8c2luY2VNZT4+aWYob2xkaWQpe3w8PG9sZEVkaXQ+Pnw8PGRpZmZDdXI+Pn0nO1xuXHRcdH1cblx0XHQvLyB1c2VyIGxpbmtzXG5cdFx0Ly8gY29udHJpYnMgLSBsb2cgLSBjb3VudCAtIGVtYWlsIC0gYmxvY2tcblx0XHQvLyBjb3VudCBvbmx5IGlmIGFwcGxpY2FibGU7IGJsb2NrIG9ubHkgaWYgcG9wdXBBZG1pbkxpbmtzXG5cdFx0c3RyICs9ICdpZih1c2VyKXs8YnI+PDxjb250cmlic3xzaG9ydGN1dD1jPj4qPDx1c2VybG9nfHNob3J0Y3V0PUx8bG9nPj4nO1xuXHRcdHN0ciArPSAnaWYoaXB1c2VyKXsqPDxhcmluPj59aWYod2lraW1lZGlhKXsqPDxjb3VudHxzaG9ydGN1dD0jPj59Jztcblx0XHRzdHIgKz0gJ2lmKGlwdXNlcil7fWVsc2V7Kjw8ZW1haWx8c2hvcnRjdXQ9RT4+fWlmKGFkbWluKXsqPDxibG9ja3xzaG9ydGN1dD1iPj58PDxibG9ja2xvZ3xsb2c+Pn19Jztcblx0XHQvLyBlZGl0aW5nIGxpbmtzXG5cdFx0Ly8gdGFsa3BhZ2UgICAtPiBlZGl0fG5ldyAtIGhpc3RvcnkgLSB1bnx3YXRjaCAtIGFydGljbGV8ZWRpdFxuXHRcdC8vIG90aGVyIHBhZ2UgLT4gZWRpdCAtIGhpc3RvcnkgLSB1bnx3YXRjaCAtIHRhbGt8ZWRpdHxuZXdcblx0XHRjb25zdCBlZGl0c3RyID0gJzw8ZWRpdHxzaG9ydGN1dD1lPj4nO1xuXHRcdGNvbnN0IGVkaXRPbGRpZFN0ciA9IGBpZihvbGRpZCl7PDxlZGl0T2xkfHNob3J0Y3V0PWU+Pnw8PHJldmVydHxzaG9ydGN1dD12fHJ2Pj58PDxlZGl0fGN1cj4+fWVsc2V7JHtlZGl0c3RyfX1gO1xuXHRcdGNvbnN0IGhpc3RvcnlzdHIgPSAnPDxoaXN0b3J5fHNob3J0Y3V0PWg+Pnw8PGVkaXRvcnN8c2hvcnRjdXQ9RXw+Pic7XG5cdFx0Y29uc3Qgd2F0Y2hzdHIgPSAnPDx1bndhdGNofHVud2F0Y2hTaG9ydD4+fDw8d2F0Y2h8c2hvcnRjdXQ9d3x3YXRjaFRoaW5neT4+Jztcblx0XHRzdHIgKz1cblx0XHRcdGA8YnI+aWYodGFsayl7JHtlZGl0T2xkaWRTdHJ9fDw8bmV3fHNob3J0Y3V0PSs+PmAgK1xuXHRcdFx0YCoke2hpc3RvcnlzdHJ9KiR7d2F0Y2hzdHJ9KmAgK1xuXHRcdFx0JzxiPjw8YXJ0aWNsZXxzaG9ydGN1dD1hPj48L2I+fDw8ZWRpdEFydGljbGV8ZWRpdD4+JyArXG5cdFx0XHRgfWVsc2V7JHtcblx0XHRcdFx0Ly8gbm90IGEgdGFsayBwYWdlXG5cdFx0XHRcdGVkaXRPbGRpZFN0clxuXHRcdFx0fSoke2hpc3RvcnlzdHJ9KiR7d2F0Y2hzdHJ9KmAgK1xuXHRcdFx0JzxiPjw8dGFsa3xzaG9ydGN1dD10Pj48L2I+fDw8ZWRpdFRhbGt8ZWRpdD4+fDw8bmV3VGFsa3xzaG9ydGN1dD0rfG5ldz4+fSc7XG5cdFx0Ly8gbWlzYyBsaW5rc1xuXHRcdHN0ciArPSAnPGJyPjw8d2hhdExpbmtzSGVyZXxzaG9ydGN1dD1sPj4qPDxyZWxhdGVkQ2hhbmdlc3xzaG9ydGN1dD1yPj4qPDxtb3ZlfHNob3J0Y3V0PW0+Pic7XG5cdFx0Ly8gYWRtaW4gbGlua3Ncblx0XHRzdHIgKz1cblx0XHRcdCdpZihhZG1pbil7PGJyPjw8dW5wcm90ZWN0fHVucHJvdGVjdFNob3J0Pj58PDxwcm90ZWN0fHNob3J0Y3V0PXA+Pnw8PHByb3RlY3Rsb2d8bG9nPj4qJyArXG5cdFx0XHQnPDx1bmRlbGV0ZXx1bmRlbGV0ZVNob3J0Pj58PDxkZWxldGV8c2hvcnRjdXQ9ZD4+fDw8ZGVsZXRlbG9nfGxvZz4+fSc7XG5cdFx0cmV0dXJuIHN0cjtcblx0fTtcblx0Y29uc3QgbmF2TGlua3NIVE1MID0gKGFydGljbGUsIF9oaW50LCBwYXJhbXMpID0+IHtcblx0XHQvLyBvbGRpZCwgcmNpZCkge1xuXHRcdGNvbnN0IHN0ciA9IGA8c3BhbiBjbGFzcz1cInBvcHVwTmF2TGlua3NcIj4ke2RlZmF1bHROYXZsaW5rU3BlYygpfTwvc3Bhbj5gO1xuXHRcdC8vIEJBTVxuXHRcdHJldHVybiBuYXZsaW5rU3RyaW5nVG9IVE1MKHN0ciwgYXJ0aWNsZSwgcGFyYW1zKTtcblx0fTtcblx0Y29uc3QgZXhwYW5kQ29uZGl0aW9uYWxOYXZsaW5rU3RyaW5nID0gZnVuY3Rpb24gZXhwYW5kQ29uZGl0aW9uYWxOYXZsaW5rU3RyaW5nKHMsIGFydGljbGUsIHosIHJlY3Vyc2lvbkNvdW50KSB7XG5cdFx0Y29uc3Qge29sZGlkfSA9IHo7XG5cdFx0Y29uc3Qge3JjaWR9ID0gejtcblx0XHRjb25zdCB7ZGlmZn0gPSB6O1xuXHRcdC8vIG5lc3RlZCBjb25kaXRpb25hbHMgKHVwIHRvIDEwIGRlZXApIGFyZSBvaywgaG9wZWZ1bGx5ISAod29yayBmcm9tIHRoZSBpbnNpZGUgb3V0KVxuXHRcdGlmICh0eXBlb2YgcmVjdXJzaW9uQ291bnQgIT09IHR5cGVvZiAwKSB7XG5cdFx0XHRyZWN1cnNpb25Db3VudCA9IDA7XG5cdFx0fVxuXHRcdC8vICgxXHQgaWZcdFxcXFwoXHQoMlx0MilcdFxcXFwpXHQgIHsoM1x0Myl9ICAoNCAgIGVsc2VcdCAgeyg1XHQgNSl9ICA0KTEpXG5cdFx0Y29uc3QgY29uZGl0aW9uYWxTcGxpdFJlZ2V4ID0gLyg7P1xccyppZlxccypcXChcXHMqKFxcdyopXFxzKlxcKVxccyp7KFtee31dKil9KFxccyplbHNlXFxzKnsoW157fV0qPyl9fCkpL2k7XG5cdFx0Y29uc3Qgc3BsaXR0ZWQgPSBzLnNwbGl0KGNvbmRpdGlvbmFsU3BsaXRSZWdleCk7XG5cdFx0Ly8gJDE6IHdob2xlIGNvbmRpdGlvbmFsXG5cdFx0Ly8gJDI6IHRlc3QgY29uZGl0aW9uXG5cdFx0Ly8gJDM6IHRydWUgZXhwYW5zaW9uXG5cdFx0Ly8gJDQ6IGVsc2UgY2xhdXNlIChwb3NzaWJseSBlbXB0eSlcblx0XHQvLyAkNTogZmFsc2UgZXhwYW5zaW9uIChwb3NzaWJseSBudWxsKVxuXHRcdGNvbnN0IG51bVBhcmVucyA9IDU7XG5cdFx0bGV0IFtyZXRdID0gc3BsaXR0ZWQ7XG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBzcGxpdHRlZC5sZW5ndGg7IGkgPSBpICsgbnVtUGFyZW5zICsgMSkge1xuXHRcdFx0Y29uc3QgdGVzdFN0cmluZyA9IHNwbGl0dGVkW2kgKyAyIC0gMV07XG5cdFx0XHRjb25zdCB0cnVlU3RyaW5nID0gc3BsaXR0ZWRbaSArIDMgLSAxXTtcblx0XHRcdGxldCBmYWxzZVN0cmluZyA9IHNwbGl0dGVkW2kgKyA1IC0gMV07XG5cdFx0XHRpZiAoZmFsc2VTdHJpbmcgPT09IHVuZGVmaW5lZCB8fCAhZmFsc2VTdHJpbmcpIHtcblx0XHRcdFx0ZmFsc2VTdHJpbmcgPSAnJztcblx0XHRcdH1cblx0XHRcdGxldCB0ZXN0UmVzdWx0O1xuXHRcdFx0c3dpdGNoICh0ZXN0U3RyaW5nKSB7XG5cdFx0XHRcdGNhc2UgJ3VzZXInOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhIWFydGljbGUudXNlck5hbWUoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndGFsayc6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICFhcnRpY2xlLnRhbGtQYWdlKCk7IC8vIHRhbGtQYWdlIGNvbnZlcnRzIF9hcnRpY2xlc18gdG8gdGFsa1BhZ2VzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2FkbWluJzpcblx0XHRcdFx0XHR0ZXN0UmVzdWx0ID0gISFnZXRWYWx1ZU9mKCdwb3B1cEFkbWluTGlua3MnKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnb2xkaWQnOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhIShvbGRpZCAhPT0gdW5kZWZpbmVkICYmIG9sZGlkKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmNpZCc6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhKHJjaWQgIT09IHVuZGVmaW5lZCAmJiByY2lkKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaXB1c2VyJzpcblx0XHRcdFx0XHR0ZXN0UmVzdWx0ID0gISFhcnRpY2xlLmlzSXBVc2VyKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21haW5zcGFjZV9lbic6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9IGlzSW5NYWluTmFtZXNwYWNlKGFydGljbGUpICYmIHBnLndpa2kuaG9zdG5hbWUgPT09ICdlbi53aWtpcGVkaWEub3JnJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnd2lraW1lZGlhJzpcblx0XHRcdFx0XHR0ZXN0UmVzdWx0ID0gISFwZy53aWtpLndpa2ltZWRpYTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZGlmZic6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhKGRpZmYgIT09IHVuZGVmaW5lZCAmJiBkaWZmKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAodGVzdFJlc3VsdCkge1xuXHRcdFx0XHRjYXNlIG51bGw6XG5cdFx0XHRcdFx0cmV0ICs9IHNwbGl0dGVkW2ldO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIHRydWU6XG5cdFx0XHRcdFx0cmV0ICs9IHRydWVTdHJpbmc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgZmFsc2U6XG5cdFx0XHRcdFx0cmV0ICs9IGZhbHNlU3RyaW5nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Ly8gYXBwZW5kIG5vbi1jb25kaXRpb25hbCBzdHJpbmdcblx0XHRcdHJldCArPSBzcGxpdHRlZFtpICsgbnVtUGFyZW5zXTtcblx0XHR9XG5cdFx0aWYgKGNvbmRpdGlvbmFsU3BsaXRSZWdleC50ZXN0KHJldCkgJiYgcmVjdXJzaW9uQ291bnQgPCAxMCkge1xuXHRcdFx0cmV0dXJuIGV4cGFuZENvbmRpdGlvbmFsTmF2bGlua1N0cmluZyhyZXQsIGFydGljbGUsIHosIHJlY3Vyc2lvbkNvdW50ICsgMSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IG5hdmxpbmtTdHJpbmdUb0FycmF5ID0gKHMsIGFydGljbGUsIHBhcmFtcykgPT4ge1xuXHRcdHMgPSBleHBhbmRDb25kaXRpb25hbE5hdmxpbmtTdHJpbmcocywgYXJ0aWNsZSwgcGFyYW1zKTtcblx0XHRjb25zdCBzcGxpdHRlZCA9IHMuc3BsaXQoLzw8KC4qPyk+Pi8pO1xuXHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdGZvciAoY29uc3QgW2ksIGVsZW1lbnRdIG9mIHNwbGl0dGVkLmVudHJpZXMoKSkge1xuXHRcdFx0aWYgKGkgJSAyKSB7XG5cdFx0XHRcdC8vIGkgb2RkLCBzbyBzIGlzIGEgdGFnXG5cdFx0XHRcdGNvbnN0IHQgPSBuZXcgbmF2bGlua1RhZygpO1xuXHRcdFx0XHRjb25zdCBzcyA9IGVsZW1lbnQuc3BsaXQoJ3wnKTtcblx0XHRcdFx0W3QuaWRdID0gc3M7XG5cdFx0XHRcdGZvciAobGV0IGogPSAxOyBqIDwgc3MubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0XHRjb25zdCBzc3MgPSBzc1tqXS5zcGxpdCgnPScpO1xuXHRcdFx0XHRcdGlmIChzc3MubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0WywgdFtzc3NbMF1dXSA9IHNzcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gbm8gYXNzaWdubWVudCAobm8gXCI9XCIpLCBzbyB0cmVhdCB0aGlzIGFzIGEgdGl0bGUgKG92ZXJ3cml0aW5nIHRoZSBsYXN0IG9uZSlcblx0XHRcdFx0XHRcdHQudGV4dCA9IHBvcHVwU3RyaW5nKHNzc1swXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHQuYXJ0aWNsZSA9IGFydGljbGU7XG5cdFx0XHRcdGNvbnN0IHtvbGRpZH0gPSBwYXJhbXM7XG5cdFx0XHRcdGNvbnN0IHtyY2lkfSA9IHBhcmFtcztcblx0XHRcdFx0Y29uc3Qge2RpZmZ9ID0gcGFyYW1zO1xuXHRcdFx0XHRpZiAob2xkaWQgIT09IHVuZGVmaW5lZCAmJiBvbGRpZCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHQub2xkaWQgPSBvbGRpZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmNpZCAhPT0gdW5kZWZpbmVkICYmIHJjaWQgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0LnJjaWQgPSByY2lkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkaWZmICE9PSB1bmRlZmluZWQgJiYgZGlmZiAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHQuZGlmZiA9IGRpZmY7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCF0LnRleHQgJiYgdC5pZCAhPT0gJ21haW5saW5rJykge1xuXHRcdFx0XHRcdHQudGV4dCA9IHBvcHVwU3RyaW5nKHQuaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldC5wdXNoKHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gcGxhaW4gSFRNTFxuXHRcdFx0XHRyZXQucHVzaChlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgbmF2bGlua1N1YnN0aXR1dGVIVE1MID0gKHMpID0+IHtcblx0XHRyZXR1cm4gc1xuXHRcdFx0LnNwbGl0KCcqJylcblx0XHRcdC5qb2luKGdldFZhbHVlT2YoJ3BvcHVwTmF2TGlua1NlcGFyYXRvcicpKVxuXHRcdFx0LnNwbGl0KCc8bWVudXJvdz4nKVxuXHRcdFx0LmpvaW4oJzxsaSBjbGFzcz1cInBvcHVwX21lbnVfcm93XCI+Jylcblx0XHRcdC5zcGxpdCgnPC9tZW51cm93PicpXG5cdFx0XHQuam9pbignPC9saT4nKVxuXHRcdFx0LnNwbGl0KCc8bWVudT4nKVxuXHRcdFx0LmpvaW4oJzx1bCBjbGFzcz1cInBvcHVwX21lbnVcIj4nKVxuXHRcdFx0LnNwbGl0KCc8L21lbnU+Jylcblx0XHRcdC5qb2luKCc8L3VsPicpO1xuXHR9O1xuXHRjb25zdCBuYXZsaW5rRGVwdGggPSAobWFnaWMsIHMpID0+IHtcblx0XHRyZXR1cm4gcy5zcGxpdChgPCR7bWFnaWN9PmApLmxlbmd0aCAtIHMuc3BsaXQoYDwvJHttYWdpY30+YCkubGVuZ3RoO1xuXHR9O1xuXHQvLyBuYXZsaW5rU3RyaW5nOiAqIGJlY29tZXMgdGhlIHNlcGFyYXRvclxuXHQvL1x0XHRcdFx0PDxmb298YmFyPWJhenxmdWJhcj4+IGJlY29tZXMgYSBmb28tbGluayB3aXRoIGF0dHJpYnV0ZSBiYXI9J2Jheidcblx0Ly9cdFx0XHRcdFx0XHRcdFx0XHQgIGFuZCB2aXNpYmxlIHRleHQgJ2Z1YmFyJ1xuXHQvL1x0XHRcdFx0aWYodGVzdCl7Li4ufSBhbmQgaWYodGVzdCl7Li4ufWVsc2V7Li4ufSB3b3JrIHRvbyAobmVzdGVkIG9rKVxuXHRjb25zdCBuYXZsaW5rU3RyaW5nVG9IVE1MID0gKHMsIGFydGljbGUsIHBhcmFtcykgPT4ge1xuXHRcdC8vIGxpbWl0QWxlcnQobmF2bGlua1N0cmluZ1RvSFRNTCwgNSwgJ25hdmxpbmtTdHJpbmdUb0hUTUxcXG4nICsgYXJ0aWNsZSArICdcXG4nICsgKHR5cGVvZiBhcnRpY2xlKSk7XG5cdFx0Y29uc3QgcCA9IG5hdmxpbmtTdHJpbmdUb0FycmF5KHMsIGFydGljbGUsIHBhcmFtcyk7XG5cdFx0bGV0IGh0bWwgPSAnJztcblx0XHRsZXQgbWVudWRlcHRoID0gMDsgLy8gbmVzdGVkIG1lbnVzIG5vdCBjdXJyZW50bHkgYWxsb3dlZCwgYnV0IGRvZXNuJ3QgZG8gYW55IGhhcm0gdG8gY29kZSBmb3IgaXRcblx0XHRsZXQgbWVudXJvd2RlcHRoID0gMDtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcCkge1xuXHRcdFx0aWYgKHR5cGVvZiBlbGVtZW50ID09PSB0eXBlb2YgJycpIHtcblx0XHRcdFx0aHRtbCArPSBuYXZsaW5rU3Vic3RpdHV0ZUhUTUwoZWxlbWVudCk7XG5cdFx0XHRcdG1lbnVkZXB0aCArPSBuYXZsaW5rRGVwdGgoJ21lbnUnLCBlbGVtZW50KTtcblx0XHRcdFx0bWVudXJvd2RlcHRoICs9IG5hdmxpbmtEZXB0aCgnbWVudXJvdycsIGVsZW1lbnQpO1xuXHRcdFx0XHQvL1x0XHRcdGlmIChtZW51ZGVwdGggPT09IDApIHtcblx0XHRcdFx0Ly9cdFx0XHRcdHRhZ1R5cGU9J3NwYW4nO1xuXHRcdFx0XHQvL1x0XHRcdH0gZWxzZSBpZiAobWVudXJvd2RlcHRoID09PSAwKSB7XG5cdFx0XHRcdC8vXHRcdFx0XHR0YWdUeXBlPSdsaSc7XG5cdFx0XHRcdC8vXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly9cdFx0XHRcdHRhZ1R5cGUgPSBudWxsO1xuXHRcdFx0XHQvL1x0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudC50eXBlICE9PSB1bmRlZmluZWQgJiYgZWxlbWVudC50eXBlID09PSAnbmF2bGlua1RhZycpIHtcblx0XHRcdFx0aHRtbCArPVxuXHRcdFx0XHRcdG1lbnVkZXB0aCA+IDAgJiYgbWVudXJvd2RlcHRoID09PSAwXG5cdFx0XHRcdFx0XHQ/IGA8bGkgY2xhc3M9XCJwb3B1cF9tZW51X2l0ZW1cIj4ke2VsZW1lbnQuaHRtbCgpfTwvbGk+YFxuXHRcdFx0XHRcdFx0OiBlbGVtZW50Lmh0bWwoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGh0bWw7XG5cdH07XG5cdGNsYXNzIG5hdmxpbmtUYWcge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0dGhpcy50eXBlID0gJ25hdmxpbmtUYWcnO1xuXHRcdH1cblx0XHRodG1sKCkge1xuXHRcdFx0dGhpcy5nZXROZXdXaW4oKTtcblx0XHRcdHRoaXMuZ2V0UHJpbnRGdW5jdGlvbigpO1xuXHRcdFx0bGV0IGh0bWwgPSAnJztcblx0XHRcdGxldCBvcGVuaW5nO1xuXHRcdFx0bGV0IGNsb3Npbmc7XG5cdFx0XHRjb25zdCB0YWdUeXBlID0gJ3NwYW4nO1xuXHRcdFx0aWYgKHRhZ1R5cGUpIHtcblx0XHRcdFx0b3BlbmluZyA9IGA8JHt0YWdUeXBlfSBjbGFzcz1cInBvcHVwXyR7dGhpcy5pZH1cIj5gO1xuXHRcdFx0XHRjbG9zaW5nID0gYDwvJHt0YWdUeXBlfT5gO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3BlbmluZyA9ICcnO1xuXHRcdFx0XHRjbG9zaW5nID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucHJpbnQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aHRtbCA9IHRoaXMucHJpbnQodGhpcyk7XG5cdFx0XHRcdGlmICh0eXBlb2YgaHRtbCAhPT0gdHlwZW9mICcnKSB7XG5cdFx0XHRcdFx0aHRtbCA9ICcnO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuc2hvcnRjdXQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGh0bWwgPSBhZGRQb3B1cFNob3J0Y3V0KGh0bWwsIHRoaXMuc2hvcnRjdXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlcnJsb2coYE9oIGRlYXIgLSBpbnZhbGlkIHByaW50IGZ1bmN0aW9uIGZvciBhIG5hdmxpbmtUYWcsIGlkPSR7dGhpcy5pZH1gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvcGVuaW5nICsgaHRtbCArIGNsb3Npbmc7XG5cdFx0fVxuXHRcdGdldE5ld1dpbigpIHtcblx0XHRcdGdldFZhbHVlT2YoJ3BvcHVwTGlua3NOZXdXaW5kb3cnKTtcblx0XHRcdGlmIChwZy5vcHRpb24ucG9wdXBMaW5rc05ld1dpbmRvd1t0aGlzLmlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMubmV3V2luID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHRoaXMubmV3V2luID0gcGcub3B0aW9uLnBvcHVwTGlua3NOZXdXaW5kb3dbdGhpcy5pZF07XG5cdFx0fVxuXHRcdGdldFByaW50RnVuY3Rpb24oKSB7XG5cdFx0XHQvLyB0aGluayBhYm91dCB0aGlzIHNvbWUgbW9yZVxuXHRcdFx0Ly8gdGhpcy5pZCBhbmQgdGhpcy5hcnRpY2xlIHNob3VsZCBhbHJlYWR5IGJlIGRlZmluZWRcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5pZCAhPT0gdHlwZW9mICcnIHx8IHR5cGVvZiB0aGlzLmFydGljbGUgIT09IHR5cGVvZiB7fSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5vUG9wdXAgPSAxO1xuXHRcdFx0c3dpdGNoICh0aGlzLmlkKSB7XG5cdFx0XHRcdGNhc2UgJ2NvbnRyaWJzJzpcblx0XHRcdFx0Y2FzZSAnaGlzdG9yeSc6XG5cdFx0XHRcdGNhc2UgJ3doYXRMaW5rc0hlcmUnOlxuXHRcdFx0XHRjYXNlICd1c2VyUGFnZSc6XG5cdFx0XHRcdGNhc2UgJ3VzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAndGFsayc6XG5cdFx0XHRcdGNhc2UgJ2FydGljbGUnOlxuXHRcdFx0XHRjYXNlICdsYXN0RWRpdCc6XG5cdFx0XHRcdFx0dGhpcy5ub1BvcHVwID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAodGhpcy5pZCkge1xuXHRcdFx0XHRjYXNlICdlbWFpbCc6XG5cdFx0XHRcdGNhc2UgJ2NvbnRyaWJzJzpcblx0XHRcdFx0Y2FzZSAnYmxvY2snOlxuXHRcdFx0XHRjYXNlICd1bmJsb2NrJzpcblx0XHRcdFx0Y2FzZSAndXNlcmxvZyc6XG5cdFx0XHRcdGNhc2UgJ3VzZXJTcGFjZSc6XG5cdFx0XHRcdGNhc2UgJ2RlbGV0ZWRDb250cmlicyc6XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLnVzZXJOYW1lKCk7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHRoaXMuaWQpIHtcblx0XHRcdFx0Y2FzZSAndXNlclRhbGsnOlxuXHRcdFx0XHRjYXNlICduZXdVc2VyVGFsayc6XG5cdFx0XHRcdGNhc2UgJ2VkaXRVc2VyVGFsayc6XG5cdFx0XHRcdGNhc2UgJ3VzZXJQYWdlJzpcblx0XHRcdFx0Y2FzZSAnYmxvY2tsb2cnOlxuXHRcdFx0XHRcdHRoaXMuYXJ0aWNsZSA9IHRoaXMuYXJ0aWNsZS51c2VyTmFtZSh0cnVlKTtcblx0XHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdFx0XHRjYXNlICdwYWdlbG9nJzpcblx0XHRcdFx0Y2FzZSAnZGVsZXRlbG9nJzpcblx0XHRcdFx0Y2FzZSAncHJvdGVjdGxvZyc6XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMub2xkaWQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5pZCAhPT0gJ21haW5saW5rJykge1xuXHRcdFx0XHQvLyBGSVhNRSBhbmNob3IgaGFuZGxpbmcgc2hvdWxkIGJlIGRvbmUgZGlmZmVyZW50bHkgd2l0aCBUaXRsZSBvYmplY3Rcblx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLnJlbW92ZUFuY2hvcigpO1xuXHRcdFx0XHQvLyBpZiAodHlwZW9mIHRoaXMudGV4dD09J3VuZGVmaW5lZCcpIHsgdGhpcy50ZXh0PXBvcHVwU3RyaW5nKHRoaXMuaWQpOyB9XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHRoaXMuaWQpIHtcblx0XHRcdFx0Y2FzZSAndW5kZWxldGUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1VuZGVsZXRlJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcvJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnd2hhdExpbmtzSGVyZSc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnV2hhdGxpbmtzaGVyZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JlbGF0ZWRDaGFuZ2VzJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdSZWNlbnRjaGFuZ2VzbGlua2VkJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbW92ZSc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnTW92ZXBhZ2UnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjb250cmlicyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnQ29udHJpYnV0aW9ucyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2RlbGV0ZWRDb250cmlicyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnRGVsZXRlZGNvbnRyaWJ1dGlvbnMnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdlbWFpbCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnRW1haWxVc2VyJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcvJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnYmxvY2snOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0Jsb2NraXAnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZpcD0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bmJsb2NrJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdJcGJsb2NrbGlzdCc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJmFjdGlvbj11bmJsb2NrJmlwPSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3VzZXJsb2cnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0xvZyc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJnVzZXI9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnYmxvY2tsb2cnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0xvZyc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJnR5cGU9YmxvY2smcGFnZT0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdwYWdlbG9nJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdMb2cnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZwYWdlPSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3Byb3RlY3Rsb2cnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0xvZyc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJnR5cGU9cHJvdGVjdCZwYWdlPSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2RlbGV0ZWxvZyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnTG9nJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcmdHlwZT1kZWxldGUmcGFnZT0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1c2VyU3BhY2UnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1ByZWZpeEluZGV4Jztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcmbmFtZXNwYWNlPTImcHJlZml4PSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3NlYXJjaCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnU2VhcmNoJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcmZnVsbHRleHQ9U2VhcmNoJnNlYXJjaD0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd0aGFuayc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnVGhhbmtzJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcvJztcblx0XHRcdFx0XHR0aGlzLmFydGljbGUudmFsdWUgPSB0aGlzLmRpZmYgPT09ICdwcmV2JyA/IHRoaXMub2xkaWQgOiB0aGlzLmRpZmY7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3Vud2F0Y2gnOlxuXHRcdFx0XHRjYXNlICd3YXRjaCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IG1hZ2ljV2F0Y2hMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gYCR7dGhpcy5pZH0mYXV0b3dhdGNobGlzdD0xJmF1dG9pbXBsPSR7cG9wdXBTdHJpbmcoXG5cdFx0XHRcdFx0XHQnYXV0b2VkaXRfdmVyc2lvbidcblx0XHRcdFx0XHQpfSZhY3Rva2VuPSR7YXV0b0NsaWNrVG9rZW4oKX1gO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdoaXN0b3J5Jzpcblx0XHRcdFx0Y2FzZSAnaGlzdG9yeWZlZWQnOlxuXHRcdFx0XHRjYXNlICd1bnByb3RlY3QnOlxuXHRcdFx0XHRjYXNlICdwcm90ZWN0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSB0aGlzLmlkO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkZWxldGUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdkZWxldGUnO1xuXHRcdFx0XHRcdGlmICh0aGlzLmFydGljbGUubmFtZXNwYWNlSWQoKSA9PT0gcGcubnNJbWFnZUlkKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBpbWcgPSB0aGlzLmFydGljbGUuc3RyaXBOYW1lc3BhY2UoKTtcblx0XHRcdFx0XHRcdHRoaXMuYWN0aW9uICs9IGAmaW1hZ2U9JHtpbWd9YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21hcmtwYXRyb2xsZWQnOlxuXHRcdFx0XHRjYXNlICdlZGl0Jzpcblx0XHRcdFx0XHQvLyBlZGl0T2xkIHNob3VsZCBrZWVwIHRoZSBvbGRpZCwgYnV0IGVkaXQgc2hvdWxkIG5vdC5cblx0XHRcdFx0XHRkZWxldGUgdGhpcy5vbGRpZDtcblx0XHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdFx0XHRjYXNlICd2aWV3Jzpcblx0XHRcdFx0Y2FzZSAncHVyZ2UnOlxuXHRcdFx0XHRjYXNlICdyZW5kZXInOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9IHRoaXMuaWQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3Jhdyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ3Jhdyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ25ldyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ2VkaXQmc2VjdGlvbj1uZXcnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtYWlubGluayc6XG5cdFx0XHRcdFx0aWYgKHRoaXMudGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLmFydGljbGUudG9TdHJpbmcoKS5lbnRpZnkoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwU2ltcGxpZnlNYWluTGluaycpICYmIGlzSW5TdHJpcHBhYmxlTmFtZXNwYWNlKHRoaXMuYXJ0aWNsZSkpIHtcblx0XHRcdFx0XHRcdC8vIG9ubHkgc2hvdyB0aGUgL3N1YnBhZ2UgcGFydCBvZiB0aGUgdGl0bGUgdGV4dFxuXHRcdFx0XHRcdFx0Y29uc3QgcyA9IHRoaXMudGV4dC5zcGxpdCgnLycpO1xuXHRcdFx0XHRcdFx0dGhpcy50ZXh0ID0gcy5hdCgtMSk7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy50ZXh0ID09PSAnJyAmJiBzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy50ZXh0ID0gcy5hdCgtMik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB0aXRsZWRXaWtpTGluaztcblx0XHRcdFx0XHRpZiAodGhpcy50aXRsZSA9PT0gdW5kZWZpbmVkICYmIHBnLmN1cnJlbnQubGluayAmJiBwZy5jdXJyZW50LmxpbmsuaHJlZiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpdGxlID0gc2FmZURlY29kZVVSSShwZy5jdXJyZW50Lmxpbmsub3JpZ2luYWxUaXRsZSA/PyB0aGlzLmFydGljbGUpO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMub2xkaWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9sZGlkKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGl0bGUgPSB0cHJpbnRmKCdSZXZpc2lvbiAlcyBvZiAlcycsIFt0aGlzLm9sZGlkLCB0aGlzLnRpdGxlXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ3ZpZXcnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1c2VyUGFnZSc6XG5cdFx0XHRcdGNhc2UgJ2FydGljbGUnOlxuXHRcdFx0XHRjYXNlICdlZGl0QXJ0aWNsZSc6XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMub2xkaWQ7XG5cdFx0XHRcdFx0Ly8gbXcubm90aWZ5KGAke3RoaXMuaWR9XFxuJHt0aGlzLmFydGljbGV9XFxuJHt0eXBlb2YgdGhpcy5hcnRpY2xlfWAsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdFx0XHR0aGlzLmFydGljbGUgPSB0aGlzLmFydGljbGUuYXJ0aWNsZUZyb21UYWxrT3JBcnRpY2xlKCk7XG5cdFx0XHRcdFx0Ly8gbXcubm90aWZ5KGAke3RoaXMuaWR9XFxuJHt0aGlzLmFydGljbGV9XFxuJHt0eXBlb2YgdGhpcy5hcnRpY2xlfWAsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSB0aGlzLmlkLmluZGV4T2YoJ2VkaXQnKSA9PT0gMCA/ICdlZGl0JyA6ICd2aWV3Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndXNlclRhbGsnOlxuXHRcdFx0XHRjYXNlICd0YWxrJzpcblx0XHRcdFx0XHR0aGlzLmFydGljbGUgPSB0aGlzLmFydGljbGUudGFsa1BhZ2UoKTtcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5vbGRpZDtcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAndmlldyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2FyaW4nOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBhcmluTGluaztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY291bnQnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBlZGl0Q291bnRlckxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2VkaXRvcnMnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBlZGl0b3JMaXN0TGluaztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbGFzdEVkaXQnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB0aXRsZWREaWZmTGluaztcblx0XHRcdFx0XHR0aGlzLnRpdGxlID0gcG9wdXBTdHJpbmcoJ1Nob3cgdGhlIGxhc3QgZWRpdCcpO1xuXHRcdFx0XHRcdHRoaXMuZnJvbSA9ICdwcmV2Jztcblx0XHRcdFx0XHR0aGlzLnRvID0gJ2N1cic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ29sZEVkaXQnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB0aXRsZWREaWZmTGluaztcblx0XHRcdFx0XHR0aGlzLnRpdGxlID0gYCR7cG9wdXBTdHJpbmcoJ1Nob3cgdGhlIGVkaXQgbWFkZSB0byBnZXQgcmV2aXNpb24nKX0gJHt0aGlzLm9sZGlkfWA7XG5cdFx0XHRcdFx0dGhpcy5mcm9tID0gJ3ByZXYnO1xuXHRcdFx0XHRcdHRoaXMudG8gPSB0aGlzLm9sZGlkO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdlZGl0T2xkJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnZWRpdCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3VuZG8nOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdlZGl0JnVuZG89Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmV2ZXJ0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAncmV2ZXJ0Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbnVsbEVkaXQnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdudWxsRWRpdCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2RpZmZDdXInOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB0aXRsZWREaWZmTGluaztcblx0XHRcdFx0XHR0aGlzLnRpdGxlID0gdHByaW50ZignU2hvdyBjaGFuZ2VzIHNpbmNlIHJldmlzaW9uICVzJywgW3RoaXMub2xkaWRdKTtcblx0XHRcdFx0XHR0aGlzLmZyb20gPSB0aGlzLm9sZGlkO1xuXHRcdFx0XHRcdHRoaXMudG8gPSAnY3VyJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZWRpdFVzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAnZWRpdFRhbGsnOlxuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLm9sZGlkO1xuXHRcdFx0XHRcdHRoaXMuYXJ0aWNsZSA9IHRoaXMuYXJ0aWNsZS50YWxrUGFnZSgpO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ2VkaXQnO1xuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbmV3VXNlclRhbGsnOlxuXHRcdFx0XHRjYXNlICduZXdUYWxrJzpcblx0XHRcdFx0XHR0aGlzLmFydGljbGUgPSB0aGlzLmFydGljbGUudGFsa1BhZ2UoKTtcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdlZGl0JnNlY3Rpb249bmV3Jztcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2xhc3RDb250cmliJzpcblx0XHRcdFx0Y2FzZSAnc2luY2VNZSc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IG1hZ2ljSGlzdG9yeUxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3RvZ2dsZVByZXZpZXdzJzpcblx0XHRcdFx0XHR0aGlzLnRleHQgPSBwb3B1cFN0cmluZyhwZy5vcHRpb24uc2ltcGxlUG9wdXBzID8gJ2VuYWJsZSBwcmV2aWV3cycgOiAnZGlzYWJsZSBwcmV2aWV3cycpO1xuXHRcdFx0XHQvKiBmYWxscyB0aHJvdWdoICovXG5cdFx0XHRcdGNhc2UgJ2Rpc2FibGVQb3B1cHMnOlxuXHRcdFx0XHRjYXNlICdwdXJnZVBvcHVwcyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHBvcHVwTWVudUxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBgVW5rbm93biBuYXZsaW5rIHR5cGU6ICR7dGhpcy5pZH1gO1xuXHRcdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vXG5cdC8vICBlbmQgbmF2bGlua3Ncblx0Ly8gRU5ERklMRTogbmF2bGlua3MuanNcblx0Ly8gU1RBUlRGSUxFOiBzaG9ydGN1dGtleXMuanNcblx0Y29uc3QgcG9wdXBIYW5kbGVLZXlwcmVzcyA9IGZ1bmN0aW9uIHBvcHVwSGFuZGxlS2V5cHJlc3MoZXZ0KSB7XG5cdFx0Y29uc3Qga2V5Q29kZSA9IHdpbmRvdy5ldmVudCA/IHdpbmRvdy5ldmVudC5rZXlDb2RlIDogKGV2dC5rZXlDb2RlID8/IGV2dC53aGljaCk7XG5cdFx0aWYgKCFrZXlDb2RlIHx8ICFwZy5jdXJyZW50LmxpbmsgfHwgIXBnLmN1cnJlbnQubGluay5uYXZwb3B1cCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoa2V5Q29kZSA9PT0gMjcpIHtcblx0XHRcdC8vIGVzY2FwZVxuXHRcdFx0a2lsbFBvcHVwKCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7IC8vIHN3YWxsb3cga2V5cHJlc3Ncblx0XHR9XG5cdFx0Y29uc3QgbGV0dGVyID0gU3RyaW5nLmZyb21Db2RlUG9pbnQoa2V5Q29kZSk7XG5cdFx0Y29uc3QgbGlua3MgPSBwZy5jdXJyZW50LmxpbmsubmF2cG9wdXAubWFpbkRpdi5xdWVyeVNlbGVjdG9yQWxsKCdBJyk7XG5cdFx0bGV0IHN0YXJ0TGluayA9IDA7XG5cdFx0bGV0IGk7XG5cdFx0bGV0IGo7XG5cdFx0aWYgKHBvcHVwSGFuZGxlS2V5cHJlc3MubGFzdFBvcHVwTGlua1NlbGVjdGVkKSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKGxpbmtzW2ldID09PSBwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCkge1xuXHRcdFx0XHRcdHN0YXJ0TGluayA9IGk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChqID0gMDsgaiA8IGxpbmtzLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRpID0gKHN0YXJ0TGluayArIGogKyAxKSAlIGxpbmtzLmxlbmd0aDtcblx0XHRcdGlmIChsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoJ3BvcHVwa2V5JykgPT09IGxldHRlcikge1xuXHRcdFx0XHRpZiAoZXZ0ICYmIGV2dC5wcmV2ZW50RGVmYXVsdCkge1xuXHRcdFx0XHRcdGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpbmtzW2ldLmZvY3VzKCk7XG5cdFx0XHRcdHBvcHVwSGFuZGxlS2V5cHJlc3MubGFzdFBvcHVwTGlua1NlbGVjdGVkID0gbGlua3NbaV07XG5cdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gc3dhbGxvdyBrZXlwcmVzc1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBwYXNzIGtleXByZXNzIG9uXG5cdFx0aWYgKGRvY3VtZW50Lm9sZFBvcHVwT25rZXlwcmVzcykge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50Lm9sZFBvcHVwT25rZXlwcmVzcyhldnQpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0Y29uc3QgYWRkUG9wdXBTaG9ydGN1dHMgPSAoKSA9PiB7XG5cdFx0aWYgKGRvY3VtZW50Lm9ua2V5cHJlc3MgIT09IHBvcHVwSGFuZGxlS2V5cHJlc3MpIHtcblx0XHRcdGRvY3VtZW50Lm9sZFBvcHVwT25rZXlwcmVzcyA9IGRvY3VtZW50Lm9ua2V5cHJlc3M7XG5cdFx0fVxuXHRcdGRvY3VtZW50Lm9ua2V5cHJlc3MgPSBwb3B1cEhhbmRsZUtleXByZXNzO1xuXHR9O1xuXHRjb25zdCBybVBvcHVwU2hvcnRjdXRzID0gKCkgPT4ge1xuXHRcdHBvcHVwSGFuZGxlS2V5cHJlc3MubGFzdFBvcHVwTGlua1NlbGVjdGVkID0gbnVsbDtcblx0XHR0cnkge1xuXHRcdFx0aWYgKGRvY3VtZW50Lm9sZFBvcHVwT25rZXlwcmVzcyAmJiBkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MgPT09IHBvcHVwSGFuZGxlS2V5cHJlc3MpIHtcblx0XHRcdFx0Ly8gcGFuaWNcblx0XHRcdFx0ZG9jdW1lbnQub25rZXlwcmVzcyA9IG51bGw7IC8vICgpID0+IHt9O1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRkb2N1bWVudC5vbmtleXByZXNzID0gZG9jdW1lbnQub2xkUG9wdXBPbmtleXByZXNzO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0LyogSUUgZ29lcyBoZXJlICovXG5cdFx0fVxuXHR9O1xuXHRjb25zdCBhZGRMaW5rUHJvcGVydHkgPSAoaHRtbCwgcHJvcGVydHkpID0+IHtcblx0XHQvLyB0YWtlIFwiPGEgaHJlZj0uLi4+Li4uPC9hPiBhbmQgYWRkIGEgcHJvcGVydHlcblx0XHQvLyBub3Qgc29waGlzdGljYXRlZCBhdCBhbGwsIGVhc2lseSBicm9rZW5cblx0XHRjb25zdCBpID0gaHRtbC5pbmRleE9mKCc+Jyk7XG5cdFx0aWYgKGkgPT09IC0xKSB7XG5cdFx0XHRyZXR1cm4gaHRtbDtcblx0XHR9XG5cdFx0cmV0dXJuIGAke2h0bWwuc2xpY2UoMCwgTWF0aC5tYXgoMCwgaSkpfSAke3Byb3BlcnR5fSR7aHRtbC5zbGljZShNYXRoLm1heCgwLCBpKSl9YDtcblx0fTtcblx0Y29uc3QgYWRkUG9wdXBTaG9ydGN1dCA9IChodG1sLCBrZXkpID0+IHtcblx0XHRpZiAoIWdldFZhbHVlT2YoJ3BvcHVwU2hvcnRjdXRLZXlzJykpIHtcblx0XHRcdHJldHVybiBodG1sO1xuXHRcdH1cblx0XHRjb25zdCByZXQgPSBhZGRMaW5rUHJvcGVydHkoaHRtbCwgYHBvcHVwa2V5PVwiJHtrZXl9XCJgKTtcblx0XHRpZiAoa2V5ID09PSAnICcpIHtcblx0XHRcdGtleSA9IHBvcHVwU3RyaW5nKCdzcGFjZWJhcicpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0LnJlcGxhY2UoL14oLio/KSh0aXRsZT1cIikoLio/KShcIi4qKSQvaSwgYCQxJDIkMyBbJHtrZXl9XSQ0YCk7XG5cdH07XG5cdC8vIEVOREZJTEU6IHNob3J0Y3V0a2V5cy5qc1xuXHQvLyBTVEFSVEZJTEU6IGRpZmZwcmV2aWV3LmpzXG5cdC8vIGxldHMganVtcCB0aHJvdWdoIGhvb3BzIHRvIGZpbmQgdGhlIHJldiBpZHMgd2UgbmVlZCB0byByZXRyaWV2ZVxuXHRjb25zdCBsb2FkRGlmZiA9IChhcnRpY2xlLCBvbGRpZCwgZGlmZiwgbmF2cG9wKSA9PiB7XG5cdFx0bmF2cG9wLmRpZmZEYXRhID0ge1xuXHRcdFx0b2xkUmV2OiB7fSxcblx0XHRcdG5ld1Jldjoge30sXG5cdFx0fTtcblx0XHRjb25zdCBhcGkgPSBnZXRNd0FwaSgpO1xuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ2NvbXBhcmUnLFxuXHRcdFx0cHJvcDogWydpZHMnLCAndGl0bGUnXSxcblx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdG1heGFnZTogNjAwLFxuXHRcdH07XG5cdFx0aWYgKGFydGljbGUudGl0bGUpIHtcblx0XHRcdHBhcmFtcy5mcm9tdGl0bGUgPSBhcnRpY2xlLnRpdGxlO1xuXHRcdH1cblx0XHRzd2l0Y2ggKGRpZmYpIHtcblx0XHRcdGNhc2UgJ2N1cic6XG5cdFx0XHRcdHN3aXRjaCAob2xkaWQpIHtcblx0XHRcdFx0XHRjYXNlIG51bGw6XG5cdFx0XHRcdFx0Y2FzZSAnJzpcblx0XHRcdFx0XHRjYXNlICdwcmV2Jzpcblx0XHRcdFx0XHRcdC8vIHRoaXMgY2FuIG9ubHkgd29yayBpZiB3ZSBoYXZlIHRoZSB0aXRsZVxuXHRcdFx0XHRcdFx0Ly8gY3VyIC0+IHByZXZcblx0XHRcdFx0XHRcdHBhcmFtcy50b3JlbGF0aXZlID0gJ3ByZXYnO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHBhcmFtcy5mcm9tcmV2ID0gb2xkaWQ7XG5cdFx0XHRcdFx0XHRwYXJhbXMudG9yZWxhdGl2ZSA9ICdjdXInO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdwcmV2Jzpcblx0XHRcdFx0aWYgKG9sZGlkKSB7XG5cdFx0XHRcdFx0cGFyYW1zLmZyb21yZXYgPSBvbGRpZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRwYXJhbXMudG9yZWxhdGl2ZSA9ICdwcmV2Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICduZXh0Jzpcblx0XHRcdFx0cGFyYW1zLmZyb21yZXYgPSBvbGRpZCB8fCAwO1xuXHRcdFx0XHRwYXJhbXMudG9yZWxhdGl2ZSA9ICduZXh0Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRwYXJhbXMuZnJvbXJldiA9IG9sZGlkIHx8IDA7XG5cdFx0XHRcdHBhcmFtcy50b3JldiA9IGRpZmYgfHwgMDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGFwaS5nZXQocGFyYW1zKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkID0gZGF0YS5jb21wYXJlLmZyb21yZXZpZDtcblx0XHRcdG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWQgPSBkYXRhLmNvbXBhcmUudG9yZXZpZDtcblx0XHRcdGFkZFJldmlld0xpbmsobmF2cG9wLCAncG9wdXBNaXNjVG9vbHMnKTtcblx0XHRcdGNvbnN0IGdvID0gKCkgPT4ge1xuXHRcdFx0XHRwZW5kaW5nTmF2cG9wVGFzayhuYXZwb3ApO1xuXHRcdFx0XHRsZXQgdXJsID0gYCR7cGcud2lraS5hcGl3aWtpYmFzZX0/Zm9ybWF0PWpzb24mZm9ybWF0dmVyc2lvbj0yJmFjdGlvbj1xdWVyeSZgO1xuXHRcdFx0XHR1cmwgKz0gYHJldmlkcz0ke25hdnBvcC5kaWZmRGF0YS5vbGRSZXYucmV2aWR9fCR7bmF2cG9wLmRpZmZEYXRhLm5ld1Jldi5yZXZpZH1gO1xuXHRcdFx0XHR1cmwgKz0gJyZwcm9wPXJldmlzaW9ucyZydnByb3A9aWRzfHRpbWVzdGFtcHxjb250ZW50Jztcblx0XHRcdFx0Z2V0UGFnZVdpdGhDYWNoaW5nKHVybCwgZG9uZURpZmYsIG5hdnBvcCk7XG5cdFx0XHRcdHJldHVybiB0cnVlOyAvLyByZW1vdmUgaG9vayBvbmNlIHJ1blxuXHRcdFx0fTtcblx0XHRcdGlmIChuYXZwb3AudmlzaWJsZSB8fCAhZ2V0VmFsdWVPZigncG9wdXBMYXp5RG93bmxvYWRzJykpIHtcblx0XHRcdFx0Z28oKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5hdnBvcC5hZGRIb29rKGdvLCAndW5oaWRlJywgJ2JlZm9yZScsICdET1dOTE9BRF9ESUZGUycpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHQvLyBQdXQgYSBcIm1hcmsgcGF0cm9sbGVkXCIgbGluayB0byBhbiBlbGVtZW50IHRhcmdldFxuXHQvLyBUT0RPOiBBbGxvdyBwYXRyb2wgYSByZXZpc2lvbiwgYXMgd2VsbCBhcyBhIGRpZmZcblx0Y29uc3QgYWRkUmV2aWV3TGluayA9IChuYXZwb3AsIHRhcmdldCkgPT4ge1xuXHRcdGlmICghcGcudXNlci5jYW5SZXZpZXcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gSWYgJ25ld1JldicgaXMgb2xkZXIgdGhhbiAnb2xkUmV2JyB0aGFuIGl0IGNvdWxkIGJlIGNvbmZ1c2luZywgc28gd2UgZG8gbm90IHNob3cgdGhlIHJldmlldyBsaW5rLlxuXHRcdGlmIChuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlkIDw9IG5hdnBvcC5kaWZmRGF0YS5vbGRSZXYucmV2aWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRwcm9wOiBbJ2luZm8nLCAnZmxhZ2dlZCddLFxuXHRcdFx0cmV2aWRzOiBuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkLFxuXHRcdH07XG5cdFx0Z2V0TXdBcGkoKVxuXHRcdFx0LmdldChwYXJhbXMpXG5cdFx0XHQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zdCBzdGFibGVfcmV2aWQgPSAoZGF0YS5xdWVyeS5wYWdlc1swXS5mbGFnZ2VkICYmIGRhdGEucXVlcnkucGFnZXNbMF0uZmxhZ2dlZC5zdGFibGVfcmV2aWQpIHx8IDA7XG5cdFx0XHRcdC8vIFRoZSBkaWZmIGNhbiBiZSByZXZpZXdlZCBpZiB0aGUgb2xkIHZlcnNpb24gaXMgdGhlIGxhc3QgcmV2aWV3ZWQgdmVyc2lvblxuXHRcdFx0XHQvLyBUT0RPOiBPdGhlciBwb3NzaWJsZSBjb25kaXRpb25zIHRoYXQgd2UgbWF5IHdhbnQgdG8gaW1wbGVtZW50IGluc3RlYWQgb2YgdGhpcyBvbmU6XG5cdFx0XHRcdC8vIC0gb2xkIHZlcnNpb24gaXMgcGF0cm9sbGVkIGFuZCB0aGUgbmV3IHZlcnNpb24gaXMgbm90IHBhdHJvbGxlZFxuXHRcdFx0XHQvLyAtIG9sZCB2ZXJzaW9uIGlzIHBhdHJvbGxlZCBhbmQgdGhlIG5ldyB2ZXJzaW9uIGlzIG1vcmUgcmVjZW50IHRoYW4gdGhlIGxhc3QgcmV2aWV3ZWQgdmVyc2lvblxuXHRcdFx0XHRpZiAoc3RhYmxlX3JldmlkID09PSBuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkKSB7XG5cdFx0XHRcdFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdFx0XHRhLmlubmVySFRNTCA9IHBvcHVwU3RyaW5nKCdtYXJrIHBhdHJvbGxlZCcpO1xuXHRcdFx0XHRcdGEudGl0bGUgPSBwb3B1cFN0cmluZygnbWFya3BhdHJvbGxlZEhpbnQnKTtcblx0XHRcdFx0XHRhLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdFx0XHRcdGFjdGlvbjogJ3JldmlldycsXG5cdFx0XHRcdFx0XHRcdGNvbW1lbnQ6IHRwcmludGYoJ2RlZmF1bHRwb3B1cFJldmlld2VkU3VtbWFyeScsIFtcblx0XHRcdFx0XHRcdFx0XHRuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkLFxuXHRcdFx0XHRcdFx0XHRcdG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWQsXG5cdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRyZXZpZDogbmF2cG9wLmRpZmZEYXRhLm5ld1Jldi5yZXZpZCxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRnZXRNd0FwaSgpXG5cdFx0XHRcdFx0XHRcdC5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW1zKVxuXHRcdFx0XHRcdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0YS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdFx0XHRcdC8vIFRPRE86IFVwZGF0ZSBjdXJyZW50IHBhZ2UgYW5kIG90aGVyIGFscmVhZHkgY29uc3RydWN0ZWQgcG9wdXBzXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdC5mYWlsKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShwb3B1cFN0cmluZygnQ291bGQgbm90IG1hcmtlZCB0aGlzIGVkaXQgYXMgcGF0cm9sbGVkJyksIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRhZzogJ3BvcHVwcycsXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHNldFBvcHVwSFRNTChhLCB0YXJnZXQsIG5hdnBvcC5pZE51bWJlciwgbnVsbCwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBkb25lRGlmZiA9IChkb3dubG9hZCkgPT4ge1xuXHRcdGlmICghZG93bmxvYWQub3duZXIgfHwgIWRvd25sb2FkLm93bmVyLmRpZmZEYXRhKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IG5hdnBvcCA9IGRvd25sb2FkLm93bmVyO1xuXHRcdGNvbXBsZXRlZE5hdnBvcFRhc2sobmF2cG9wKTtcblx0XHRsZXQgcGFnZXM7XG5cdFx0bGV0IHJldmlzaW9ucyA9IFtdO1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBQcm9jZXNzIHRoZSBkb3dubG9hZHNcblx0XHRcdCh7cGFnZXN9ID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSkucXVlcnkpO1xuXHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIHBhZ2VzKSB7XG5cdFx0XHRcdHJldmlzaW9ucyA9IFsuLi5yZXZpc2lvbnMsIC4uLnBhZ2UucmV2aXNpb25zXTtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3QgcmV2aXNpb24gb2YgcmV2aXNpb25zKSB7XG5cdFx0XHRcdGlmIChyZXZpc2lvbi5yZXZpZCA9PT0gbmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCkge1xuXHRcdFx0XHRcdG5hdnBvcC5kaWZmRGF0YS5vbGRSZXYucmV2aXNpb24gPSByZXZpc2lvbjtcblx0XHRcdFx0fSBlbHNlIGlmIChyZXZpc2lvbi5yZXZpZCA9PT0gbmF2cG9wLmRpZmZEYXRhLm5ld1Jldi5yZXZpZCkge1xuXHRcdFx0XHRcdG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aXNpb24gPSByZXZpc2lvbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0ZXJybG9nKCdDb3VsZCBub3QgZ2V0IGRpZmYnKTtcblx0XHR9XG5cdFx0aW5zZXJ0RGlmZihuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBybUJvcmluZ0xpbmVzID0gKGEsIGIsIGNvbnRleHQpID0+IHtcblx0XHRpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjb250ZXh0ID0gMjtcblx0XHR9XG5cdFx0Ly8gdGhpcyBpcyBmYWlybHkgc2xvdy4uLiBpIHRoaW5rIGl0J3MgcXVpY2tlciB0aGFuIGRvaW5nIGEgd29yZC1iYXNlZCBkaWZmIGZyb20gdGhlIG9mZiwgdGhvdWdoXG5cdFx0Y29uc3QgYWEgPSBbXTtcblx0XHRjb25zdCBhYWEgPSBbXTtcblx0XHRjb25zdCBiYiA9IFtdO1xuXHRcdGNvbnN0IGJiYiA9IFtdO1xuXHRcdGxldCBpO1xuXHRcdGxldCBqO1xuXHRcdC8vIGZpcnN0LCBnYXRoZXIgYWxsIGRpc2Nvbm5lY3RlZCBub2RlcyBpbiBhIGFuZCBhbGwgY3Jvc3Npbmcgbm9kZXMgaW4gYSBhbmQgYlxuXHRcdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoIWFbaV0ucGFpcmVkKSB7XG5cdFx0XHRcdGFhW2ldID0gMTtcblx0XHRcdH0gZWxzZSBpZiAoY291bnRDcm9zc2luZ3MoYiwgYSwgaSwgdHJ1ZSkpIHtcblx0XHRcdFx0YWFbaV0gPSAxO1xuXHRcdFx0XHRiYlthW2ldLnJvd10gPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBwaWNrIHVwIHJlbWFpbmluZyBkaXNjb25uZWN0ZWQgbm9kZXMgaW4gYlxuXHRcdGZvciAoaSA9IDA7IGkgPCBiLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoYmJbaV0gPT09IDEpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWJbaV0ucGFpcmVkKSB7XG5cdFx0XHRcdGJiW2ldID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gYW5vdGhlciBwYXNzIHRvIGdhdGhlciBjb250ZXh0OiB3ZSB3YW50IHRoZSBuZWlnaGJvdXJzIG9mIGluY2x1ZGVkIG5vZGVzIHdoaWNoIGFyZSBub3Rcblx0XHQvLyB5ZXQgaW5jbHVkZWQgd2UgaGF2ZSB0byBhZGQgaW4gcGFydG5lcnMgb2YgdGhlc2Ugbm9kZXMsIGJ1dCB3ZSBkb24ndCB3YW50IHRvIGFkZCBjb250ZXh0XG5cdFx0Ly8gZm9yICp0aG9zZSogbm9kZXMgaW4gdGhlIG5leHQgcGFzc1xuXHRcdGZvciAoaSA9IDA7IGkgPCBiLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoYmJbaV0gPT09IDEpIHtcblx0XHRcdFx0Zm9yIChqID0gTWF0aC5tYXgoMCwgaSAtIGNvbnRleHQpOyBqIDwgTWF0aC5taW4oYi5sZW5ndGgsIGkgKyBjb250ZXh0KTsgKytqKSB7XG5cdFx0XHRcdFx0aWYgKCFiYltqXSkge1xuXHRcdFx0XHRcdFx0YmJbal0gPSAxO1xuXHRcdFx0XHRcdFx0YWFbYltqXS5yb3ddID0gMC41O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGFhW2ldID09PSAxKSB7XG5cdFx0XHRcdGZvciAoaiA9IE1hdGgubWF4KDAsIGkgLSBjb250ZXh0KTsgaiA8IE1hdGgubWluKGEubGVuZ3RoLCBpICsgY29udGV4dCk7ICsraikge1xuXHRcdFx0XHRcdGlmICghYWFbal0pIHtcblx0XHRcdFx0XHRcdGFhW2pdID0gMTtcblx0XHRcdFx0XHRcdGJiW2Fbal0ucm93XSA9IDAuNTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChpID0gMDsgaSA8IGJiLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoYmJbaV0gPiAwKSB7XG5cdFx0XHRcdC8vIGl0J3MgYSByb3cgd2UgbmVlZFxuXHRcdFx0XHRpZiAoYltpXS5wYWlyZWQpIHtcblx0XHRcdFx0XHRiYmIucHVzaChiW2ldLnRleHQpOyAvLyBqb2luZWQ7IHBhcnRuZXIgc2hvdWxkIGJlIGluIGFhXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YmJiLnB1c2goYltpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChpID0gMDsgaSA8IGFhLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoYWFbaV0gPiAwKSB7XG5cdFx0XHRcdC8vIGl0J3MgYSByb3cgd2UgbmVlZFxuXHRcdFx0XHRpZiAoYVtpXS5wYWlyZWQpIHtcblx0XHRcdFx0XHRhYWEucHVzaChhW2ldLnRleHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIGpvaW5lZDsgcGFydG5lciBzaG91bGQgYmUgaW4gYWFcblx0XHRcdFx0XHRhYWEucHVzaChhW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0YTogYWFhLFxuXHRcdFx0YjogYmJiLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IHN0cmlwT3V0ZXJDb21tb25MaW5lcyA9IChhLCBiLCBjb250ZXh0KSA9PiB7XG5cdFx0bGV0IGkgPSAwO1xuXHRcdHdoaWxlIChpIDwgYS5sZW5ndGggJiYgaSA8IGIubGVuZ3RoICYmIGFbaV0gPT09IGJbaV0pIHtcblx0XHRcdCsraTtcblx0XHR9XG5cdFx0bGV0IGogPSBhLmxlbmd0aCAtIDE7XG5cdFx0bGV0IGsgPSBiLmxlbmd0aCAtIDE7XG5cdFx0d2hpbGUgKGogPj0gMCAmJiBrID49IDAgJiYgYVtqXSA9PT0gYltrXSkge1xuXHRcdFx0LS1qO1xuXHRcdFx0LS1rO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0YTogYS5zbGljZShNYXRoLm1heCgwLCBpIC0gMSAtIGNvbnRleHQpLCBNYXRoLm1pbihhLmxlbmd0aCArIDEsIGogKyBjb250ZXh0ICsgMSkpLFxuXHRcdFx0YjogYi5zbGljZShNYXRoLm1heCgwLCBpIC0gMSAtIGNvbnRleHQpLCBNYXRoLm1pbihiLmxlbmd0aCArIDEsIGsgKyBjb250ZXh0ICsgMSkpLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IGluc2VydERpZmYgPSAobmF2cG9wKSA9PiB7XG5cdFx0Ly8gZm9yIHNwZWVkIHJlYXNvbnMsIHdlIGZpcnN0IGRvIGEgbGluZS1iYXNlZCBkaWZmLCBkaXNjYXJkIHN0dWZmIHRoYXQgc2VlbXMgYm9yaW5nLCB0aGVuXG5cdFx0Ly8gZG8gYSB3b3JkLWJhc2VkIGRpZmZcblx0XHQvLyBGSVhNRTogc29tZXRpbWVzIHRoaXMgZ2l2ZXMgbWlzbGVhZGluZyBkaWZmcyBhcyBkaXN0YW50IGNodW5rcyBhcmUgc3F1YXNoZWQgdG9nZXRoZXJcblx0XHRsZXQgb2xkbGluZXMgPSBuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlzaW9uLmNvbnRlbnQuc3BsaXQoJ1xcbicpO1xuXHRcdGxldCBuZXdsaW5lcyA9IG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aXNpb24uY29udGVudC5zcGxpdCgnXFxuJyk7XG5cdFx0bGV0IGlubmVyID0gc3RyaXBPdXRlckNvbW1vbkxpbmVzKG9sZGxpbmVzLCBuZXdsaW5lcywgZ2V0VmFsdWVPZigncG9wdXBEaWZmQ29udGV4dExpbmVzJykpO1xuXHRcdG9sZGxpbmVzID0gaW5uZXIuYTtcblx0XHRuZXdsaW5lcyA9IGlubmVyLmI7XG5cdFx0bGV0IHRydW5jYXRlZCA9IGZhbHNlO1xuXHRcdGdldFZhbHVlT2YoJ3BvcHVwRGlmZk1heExpbmVzJyk7XG5cdFx0aWYgKG9sZGxpbmVzLmxlbmd0aCA+IHBnLm9wdGlvbi5wb3B1cERpZmZNYXhMaW5lcyB8fCBuZXdsaW5lcy5sZW5ndGggPiBwZy5vcHRpb24ucG9wdXBEaWZmTWF4TGluZXMpIHtcblx0XHRcdC8vIHRydW5jYXRlXG5cdFx0XHR0cnVuY2F0ZWQgPSB0cnVlO1xuXHRcdFx0aW5uZXIgPSBzdHJpcE91dGVyQ29tbW9uTGluZXMoXG5cdFx0XHRcdG9sZGxpbmVzLnNsaWNlKDAsIHBnLm9wdGlvbi5wb3B1cERpZmZNYXhMaW5lcyksXG5cdFx0XHRcdG5ld2xpbmVzLnNsaWNlKDAsIHBnLm9wdGlvbi5wb3B1cERpZmZNYXhMaW5lcyksXG5cdFx0XHRcdHBnLm9wdGlvbi5wb3B1cERpZmZDb250ZXh0TGluZXNcblx0XHRcdCk7XG5cdFx0XHRvbGRsaW5lcyA9IGlubmVyLmE7XG5cdFx0XHRuZXdsaW5lcyA9IGlubmVyLmI7XG5cdFx0fVxuXHRcdGNvbnN0IGxpbmVEaWZmID0gZGlmZihvbGRsaW5lcywgbmV3bGluZXMpO1xuXHRcdGNvbnN0IGxpbmVzMiA9IHJtQm9yaW5nTGluZXMobGluZURpZmYubywgbGluZURpZmYubik7XG5cdFx0Y29uc3Qgb2xkbGluZXMyID0gbGluZXMyLmE7XG5cdFx0Y29uc3QgbmV3bGluZXMyID0gbGluZXMyLmI7XG5cdFx0bGV0IGh0bWwgPSAnPGhyPic7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwRGlmZkRhdGVzJykpIHtcblx0XHRcdGh0bWwgKz0gZGlmZkRhdGVzVGFibGUobmF2cG9wKTtcblx0XHRcdGh0bWwgKz0gJzxocj4nO1xuXHRcdH1cblx0XHRodG1sICs9IHNob3J0ZW5EaWZmU3RyaW5nKFxuXHRcdFx0ZGlmZlN0cmluZyhvbGRsaW5lczIuam9pbignXFxuJyksIG5ld2xpbmVzMi5qb2luKCdcXG4nKSksXG5cdFx0XHRnZXRWYWx1ZU9mKCdwb3B1cERpZmZDb250ZXh0Q2hhcmFjdGVycycpXG5cdFx0KS5qb2luKCc8aHI+Jyk7XG5cdFx0c2V0UG9wdXBUaXBzQW5kSFRNTChcblx0XHRcdGh0bWwuc3BsaXQoJ1xcbicpLmpvaW4oJzxicj4nKSArXG5cdFx0XHRcdCh0cnVuY2F0ZWQgPyBgPGhyPjxiPiR7cG9wdXBTdHJpbmcoJ0RpZmYgdHJ1bmNhdGVkIGZvciBwZXJmb3JtYW5jZSByZWFzb25zJyl9PC9iPmAgOiAnJyksXG5cdFx0XHQncG9wdXBQcmV2aWV3Jyxcblx0XHRcdG5hdnBvcC5pZE51bWJlclxuXHRcdCk7XG5cdH07XG5cdGNvbnN0IGRpZmZEYXRlc1RhYmxlID0gKG5hdnBvcCkgPT4ge1xuXHRcdGxldCBodG1sID0gJzx0YWJsZSBjbGFzcz1cInBvcHVwX2RpZmZfZGF0ZXNcIj4nO1xuXHRcdGh0bWwgKz0gZGlmZkRhdGVzVGFibGVSb3cobmF2cG9wLmRpZmZEYXRhLm5ld1Jldi5yZXZpc2lvbiwgdHByaW50ZignTmV3IHJldmlzaW9uJykpO1xuXHRcdGh0bWwgKz0gZGlmZkRhdGVzVGFibGVSb3cobmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpc2lvbiwgdHByaW50ZignT2xkIHJldmlzaW9uJykpO1xuXHRcdGh0bWwgKz0gJzwvdGFibGU+Jztcblx0XHRyZXR1cm4gaHRtbDtcblx0fTtcblx0Y29uc3QgZGlmZkRhdGVzVGFibGVSb3cgPSAocmV2aXNpb24sIGxhYmVsKSA9PiB7XG5cdFx0bGV0IHR4dCA9ICcnO1xuXHRcdGNvbnN0IGxhc3RNb2RpZmllZERhdGUgPSBuZXcgRGF0ZShyZXZpc2lvbi50aW1lc3RhbXApO1xuXHRcdHR4dCA9IGZvcm1hdHRlZERhdGVUaW1lKGxhc3RNb2RpZmllZERhdGUpO1xuXHRcdGNvbnN0IHJldmxpbmsgPSBnZW5lcmFsTGluayh7XG5cdFx0XHR1cmw6IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0Jyl9P29sZGlkPSR7cmV2aXNpb24ucmV2aWR9YCxcblx0XHRcdHRleHQ6IGxhYmVsLFxuXHRcdFx0dGl0bGU6IGxhYmVsLFxuXHRcdH0pO1xuXHRcdHJldHVybiBzaW1wbGVQcmludGYoJzx0cj48dGQ+JXM8L3RkPjx0ZD4lczwvdGQ+PC90cj4nLCBbcmV2bGluaywgdHh0XSk7XG5cdH07XG5cdC8vIEVOREZJTEU6IGRpZmZwcmV2aWV3LmpzXG5cdC8vIFNUQVJURklMRTogbGlua3MuanNcblx0Ly8gTElOSyBHRU5FUkFUSU9OIC8vXG5cdC8vIHRpdGxlZERpZmZMaW5rIC0tPiB0aXRsZWRXaWtpTGluayAtLT4gZ2VuZXJhbExpbmtcblx0Ly8gd2lraUxpbmtcdCAgIC0tPiB0aXRsZWRXaWtpTGluayAtLT4gZ2VuZXJhbExpbmtcblx0Ly8gZWRpdENvdW50ZXJMaW5rIC0tPiBnZW5lcmFsTGlua1xuXHQvLyBUT0RPIE1ha2UgdGhlc2UgZnVuY3Rpb25zIHJldHVybiBFbGVtZW50IG9iamVjdHMsIG5vdCBqdXN0IHJhdyBIVE1MIHN0cmluZ3MuXG5cdGNvbnN0IHRpdGxlZERpZmZMaW5rID0gKGwpID0+IHtcblx0XHRyZXR1cm4gdGl0bGVkV2lraUxpbmsoe1xuXHRcdFx0YXJ0aWNsZTogbC5hcnRpY2xlLFxuXHRcdFx0YWN0aW9uOiBgJHtsLnRvfSZvbGRpZD0ke2wuZnJvbX1gLFxuXHRcdFx0bmV3V2luOiBsLm5ld1dpbixcblx0XHRcdG5vUG9wdXA6IGwubm9Qb3B1cCxcblx0XHRcdHRleHQ6IGwudGV4dCxcblx0XHRcdHRpdGxlOiBsLnRpdGxlLFxuXHRcdFx0LyogaGFjazogbm8gb2xkaWQgaGVyZSAqL1xuXHRcdFx0YWN0aW9uTmFtZTogJ2RpZmYnLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCB3aWtpTGluayA9IChsKSA9PiB7XG5cdFx0Ly8ge2FydGljbGU6YXJ0aWNsZSwgYWN0aW9uOmFjdGlvbiwgdGV4dDp0ZXh0LCBvbGRpZCwgbmV3aWR9KSB7XG5cdFx0aWYgKCEodHlwZW9mIGwuYXJ0aWNsZSA9PT0gdHlwZW9mIHt9ICYmIHR5cGVvZiBsLmFjdGlvbiA9PT0gdHlwZW9mICcnICYmIHR5cGVvZiBsLnRleHQgPT09IHR5cGVvZiAnJykpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAobC5vbGRpZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRsLm9sZGlkID0gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3Qgc2F2ZWRPbGRpZCA9IGwub2xkaWQ7XG5cdFx0aWYgKCEvXihlZGl0fHZpZXd8cmV2ZXJ0fHJlbmRlcikkfF5yYXcvLnRlc3QobC5hY3Rpb24pKSB7XG5cdFx0XHRsLm9sZGlkID0gbnVsbDtcblx0XHR9XG5cdFx0bGV0IGhpbnQgPSBwb3B1cFN0cmluZyhgJHtsLmFjdGlvbn1IaW50YCk7IC8vIHJldmVydEhpbnQgZXRjIGV0YyBldGNcblx0XHRjb25zdCBvbGRpZERhdGEgPSBbbC5vbGRpZCwgc2FmZURlY29kZVVSSShsLmFydGljbGUpXTtcblx0XHRsZXQgcmV2aXNpb25TdHJpbmcgPSB0cHJpbnRmKCdyZXZpc2lvbiAlcyBvZiAlcycsIG9sZGlkRGF0YSk7XG5cdFx0bG9nKGByZXZpc2lvblN0cmluZz0ke3JldmlzaW9uU3RyaW5nfWApO1xuXHRcdHN3aXRjaCAobC5hY3Rpb24pIHtcblx0XHRcdGNhc2UgJ2VkaXQmc2VjdGlvbj1uZXcnOlxuXHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ25ld1NlY3Rpb25IaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZWRpdCZ1bmRvPSc6XG5cdFx0XHRcdGlmIChsLmRpZmYgJiYgbC5kaWZmICE9PSAncHJldicgJiYgc2F2ZWRPbGRpZCkge1xuXHRcdFx0XHRcdGwuYWN0aW9uICs9IGAke2wuZGlmZn0mdW5kb2FmdGVyPSR7c2F2ZWRPbGRpZH1gO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNhdmVkT2xkaWQpIHtcblx0XHRcdFx0XHRsLmFjdGlvbiArPSBzYXZlZE9sZGlkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGhpbnQgPSBwb3B1cFN0cmluZygndW5kb0hpbnQnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdyYXcmY3R5cGU9dGV4dC9jc3MnOlxuXHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ3Jhd0hpbnQnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdyZXZlcnQnOiB7XG5cdFx0XHRcdGNvbnN0IHAgPSBwYXJzZVBhcmFtcyhwZy5jdXJyZW50LmxpbmsuaHJlZik7XG5cdFx0XHRcdGwuYWN0aW9uID0gYGVkaXQmYXV0b2NsaWNrPXdwU2F2ZSZhY3Rva2VuPSR7YXV0b0NsaWNrVG9rZW4oKX0mYXV0b2ltcGw9JHtwb3B1cFN0cmluZyhcblx0XHRcdFx0XHQnYXV0b2VkaXRfdmVyc2lvbidcblx0XHRcdFx0KX0mYXV0b3N1bW1hcnk9JHtyZXZlcnRTdW1tYXJ5KGwub2xkaWQsIHAuZGlmZil9YDtcblx0XHRcdFx0aWYgKHAuZGlmZiA9PT0gJ3ByZXYnKSB7XG5cdFx0XHRcdFx0bC5hY3Rpb24gKz0gJyZkaXJlY3Rpb249cHJldic7XG5cdFx0XHRcdFx0cmV2aXNpb25TdHJpbmcgPSB0cHJpbnRmKCd0aGUgcmV2aXNpb24gcHJpb3IgdG8gcmV2aXNpb24gJXMgb2YgJXMnLCBvbGRpZERhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFJldmVydFN1bW1hcnlQcm9tcHQnKSkge1xuXHRcdFx0XHRcdGwuYWN0aW9uICs9ICcmYXV0b3N1bW1hcnlwcm9tcHQ9dHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwTWlub3JSZXZlcnRzJykpIHtcblx0XHRcdFx0XHRsLmFjdGlvbiArPSAnJmF1dG9taW5vcj10cnVlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRsb2coYHJldmlzaW9uU3RyaW5nIGlzIG5vdyAke3JldmlzaW9uU3RyaW5nfWApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ251bGxFZGl0Jzpcblx0XHRcdFx0bC5hY3Rpb24gPSBgZWRpdCZhdXRvY2xpY2s9d3BTYXZlJmFjdG9rZW49JHthdXRvQ2xpY2tUb2tlbigpfSZhdXRvaW1wbD0ke3BvcHVwU3RyaW5nKFxuXHRcdFx0XHRcdCdhdXRvZWRpdF92ZXJzaW9uJ1xuXHRcdFx0XHQpfSZhdXRvc3VtbWFyeT1udWxsYDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoaXN0b3J5ZmVlZCc6XG5cdFx0XHRcdGwuYWN0aW9uID0gJ2hpc3RvcnkmZmVlZD1yc3MnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ21hcmtwYXRyb2xsZWQnOlxuXHRcdFx0XHRsLmFjdGlvbiA9IGBtYXJrcGF0cm9sbGVkJnJjaWQ9JHtsLnJjaWR9YDtcblx0XHR9XG5cdFx0aWYgKGhpbnQpIHtcblx0XHRcdGhpbnQgPSBsLm9sZGlkID8gc2ltcGxlUHJpbnRmKGhpbnQsIFtyZXZpc2lvblN0cmluZ10pIDogc2ltcGxlUHJpbnRmKGhpbnQsIFtzYWZlRGVjb2RlVVJJKGwuYXJ0aWNsZSldKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGludCA9IHNhZmVEZWNvZGVVUkkoYCR7bC5hcnRpY2xlfSZhY3Rpb249JHtsLmFjdGlvbn1gKSArIGwub2xkaWQgPyBgJm9sZGlkPSR7bC5vbGRpZH1gIDogJyc7XG5cdFx0fVxuXHRcdHJldHVybiB0aXRsZWRXaWtpTGluayh7XG5cdFx0XHRhcnRpY2xlOiBsLmFydGljbGUsXG5cdFx0XHRhY3Rpb246IGwuYWN0aW9uLFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bmV3V2luOiBsLm5ld1dpbixcblx0XHRcdHRpdGxlOiBoaW50LFxuXHRcdFx0b2xkaWQ6IGwub2xkaWQsXG5cdFx0XHRub1BvcHVwOiBsLm5vUG9wdXAsXG5cdFx0XHRvbmNsaWNrOiBsLm9uY2xpY2ssXG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHJldmVydFN1bW1hcnkgPSAob2xkaWQsIGRpZmYpID0+IHtcblx0XHRsZXQgcmV0ID0gJyc7XG5cdFx0cmV0ID1cblx0XHRcdGRpZmYgPT09ICdwcmV2J1xuXHRcdFx0XHQ/IGdldFZhbHVlT2YoJ3BvcHVwUXVlcmllZFJldmVydFRvUHJldmlvdXNTdW1tYXJ5Jylcblx0XHRcdFx0OiBnZXRWYWx1ZU9mKCdwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5Jyk7XG5cdFx0cmV0dXJuIGAke3JldH0mYXV0b3J2PSR7b2xkaWR9YDtcblx0fTtcblx0Y29uc3QgdGl0bGVkV2lraUxpbmsgPSAobCkgPT4ge1xuXHRcdC8vIHBvc3NpYmxlIHByb3BlcnRpZXMgb2YgYXJndW1lbnQ6XG5cdFx0Ly8gYXJ0aWNsZSwgYWN0aW9uLCB0ZXh0LCB0aXRsZSwgb2xkaWQsIGFjdGlvbk5hbWUsIGNsYXNzTmFtZSwgbm9Qb3B1cFxuXHRcdC8vIG9sZGlkID0gbnVsbCBpcyBmaW5lIGhlcmVcblx0XHQvLyBhcnRpY2xlIGFuZCBhY3Rpb24gYXJlIG1hbmRhdG9yeSBhcmdzXG5cdFx0aWYgKGwuYXJ0aWNsZSA9PT0gdW5kZWZpbmVkIHx8IGwuYWN0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGVycmxvZygnZ290IHVuZGVmaW5lZCBhcnRpY2xlIG9yIGFjdGlvbiBpbiB0aXRsZWRXaWtpTGluaycpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IGJhc2UgPSBwZy53aWtpLnRpdGxlYmFzZSArIGwuYXJ0aWNsZS51cmxTdHJpbmcoKTtcblx0XHRsZXQgdXJsID0gYmFzZTtcblx0XHRpZiAobC5hY3Rpb25OYW1lID09PSB1bmRlZmluZWQgfHwgIWwuYWN0aW9uTmFtZSkge1xuXHRcdFx0bC5hY3Rpb25OYW1lID0gJ2FjdGlvbic7XG5cdFx0fVxuXHRcdC8vIG5vIG5lZWQgdG8gYWRkICZhY3Rpb249dmlldywgYW5kIHRoaXMgY29uZnVzZXMgYW5jaG9yc1xuXHRcdGlmIChsLmFjdGlvbiAhPT0gJ3ZpZXcnKSB7XG5cdFx0XHR1cmwgPSBgJHtiYXNlfSYke2wuYWN0aW9uTmFtZX09JHtsLmFjdGlvbn1gO1xuXHRcdH1cblx0XHRpZiAobC5vbGRpZCAhPT0gdW5kZWZpbmVkICYmIGwub2xkaWQpIHtcblx0XHRcdHVybCArPSBgJm9sZGlkPSR7bC5vbGRpZH1gO1xuXHRcdH1cblx0XHRsZXQgY3NzQ2xhc3MgPSBwZy5taXNjLmRlZmF1bHROYXZsaW5rQ2xhc3NuYW1lO1xuXHRcdGlmIChsLmNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIGwuY2xhc3NOYW1lKSB7XG5cdFx0XHRjc3NDbGFzcyA9IGwuY2xhc3NOYW1lO1xuXHRcdH1cblx0XHRyZXR1cm4gZ2VuZXJhbE5hdkxpbmsoe1xuXHRcdFx0dXJsLFxuXHRcdFx0bmV3V2luOiBsLm5ld1dpbixcblx0XHRcdHRpdGxlOiBsLnRpdGxlID09PSB1bmRlZmluZWQgPyBudWxsIDogbC50aXRsZSxcblx0XHRcdHRleHQ6IGwudGV4dCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGwudGV4dCxcblx0XHRcdGNsYXNzTmFtZTogY3NzQ2xhc3MsXG5cdFx0XHRub1BvcHVwOiBsLm5vUG9wdXAsXG5cdFx0XHRvbmNsaWNrOiBsLm9uY2xpY2ssXG5cdFx0fSk7XG5cdH07XG5cdHBnLmZuLmdldExhc3RDb250cmliID0gKHdpa2lwYWdlLCBuZXdXaW4pID0+IHtcblx0XHRnZXRIaXN0b3J5SW5mbyh3aWtpcGFnZSwgKHgpID0+IHtcblx0XHRcdHByb2Nlc3NMYXN0Q29udHJpYkluZm8oeCwge3BhZ2U6IHdpa2lwYWdlLCBuZXdXaW59KTtcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgcHJvY2Vzc0xhc3RDb250cmliSW5mbyA9IChpbmZvLCBzdHVmZikgPT4ge1xuXHRcdGlmICghaW5mby5lZGl0cyB8fCBpbmZvLmVkaXRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoJ1BvcHVwczogYW4gb2RkIHRoaW5nIGhhcHBlbmVkLiBQbGVhc2UgcmV0cnkuJywge3RhZzogJ3BvcHVwcycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFpbmZvLmZpcnN0TmV3RWRpdG9yKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0dHByaW50ZignT25seSBmb3VuZCBvbmUgZWRpdG9yOiAlcyBtYWRlICVzIGVkaXRzJywgW2luZm8uZWRpdHNbMF0uZWRpdG9yLCBpbmZvLmVkaXRzLmxlbmd0aF0pLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGFnOiAncG9wdXBzJyxcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBuZXdVcmwgPSBgJHtwZy53aWtpLnRpdGxlYmFzZSArIG5ldyBUaXRsZShzdHVmZi5wYWdlKS51cmxTdHJpbmcoKX0mZGlmZj1jdXImb2xkaWQ9JHtcblx0XHRcdGluZm8uZmlyc3ROZXdFZGl0b3Iub2xkaWRcblx0XHR9YDtcblx0XHRkaXNwbGF5VXJsKG5ld1VybCwgc3R1ZmYubmV3V2luKTtcblx0fTtcblx0cGcuZm4uZ2V0RGlmZlNpbmNlTXlFZGl0ID0gKHdpa2lwYWdlLCBuZXdXaW4pID0+IHtcblx0XHRnZXRIaXN0b3J5SW5mbyh3aWtpcGFnZSwgKHgpID0+IHtcblx0XHRcdHByb2Nlc3NEaWZmU2luY2VNeUVkaXQoeCwge3BhZ2U6IHdpa2lwYWdlLCBuZXdXaW59KTtcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgcHJvY2Vzc0RpZmZTaW5jZU15RWRpdCA9IChpbmZvLCBzdHVmZikgPT4ge1xuXHRcdGlmICghaW5mby5lZGl0cyB8fCBpbmZvLmVkaXRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoJ1BvcHVwczogc29tZXRoaW5nIGZpc2h5IGhhcHBlbmVkLiBQbGVhc2UgdHJ5IGFnYWluLicsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGZyaWVuZGx5TmFtZSA9IHN0dWZmLnBhZ2Uuc3BsaXQoJ18nKS5qb2luKCcgJyk7XG5cdFx0aWYgKCFpbmZvLm15TGFzdEVkaXQpIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR0cHJpbnRmKFwiQ291bGRuJ3QgZmluZCBhbiBlZGl0IGJ5ICVzXFxuaW4gdGhlIGxhc3QgJXMgZWRpdHMgdG9cXG4lc1wiLCBbXG5cdFx0XHRcdFx0aW5mby51c2VyTmFtZSxcblx0XHRcdFx0XHRnZXRWYWx1ZU9mKCdwb3B1cEhpc3RvcnlMaW1pdCcpLFxuXHRcdFx0XHRcdGZyaWVuZGx5TmFtZSxcblx0XHRcdFx0XSksXG5cdFx0XHRcdHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGluZm8ubXlMYXN0RWRpdC5pbmRleCA9PT0gMCkge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkodHByaW50ZignJXMgc2VlbXMgdG8gYmUgdGhlIGxhc3QgZWRpdG9yIHRvIHRoZSBwYWdlICVzJywgW2luZm8udXNlck5hbWUsIGZyaWVuZGx5TmFtZV0pLCB7XG5cdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbmV3VXJsID0gYCR7cGcud2lraS50aXRsZWJhc2UgKyBuZXcgVGl0bGUoc3R1ZmYucGFnZSkudXJsU3RyaW5nKCl9JmRpZmY9Y3VyJm9sZGlkPSR7XG5cdFx0XHRpbmZvLm15TGFzdEVkaXQub2xkaWRcblx0XHR9YDtcblx0XHRkaXNwbGF5VXJsKG5ld1VybCwgc3R1ZmYubmV3V2luKTtcblx0fTtcblx0Y29uc3QgZGlzcGxheVVybCA9ICh1cmwsIG5ld1dpbikgPT4ge1xuXHRcdGlmIChuZXdXaW4pIHtcblx0XHRcdHdpbmRvdy5vcGVuKHVybCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmxvY2F0aW9uID0gdXJsO1xuXHRcdH1cblx0fTtcblx0cGcuZm4ucHVyZ2VQb3B1cHMgPSAoKSA9PiB7XG5cdFx0cHJvY2Vzc0FsbFBvcHVwcyh0cnVlKTtcblx0XHRzZXR1cENhY2hlKCk7IC8vIGRlbGV0ZXMgYWxsIGNhY2hlZCBpdGVtcyAobm90IGJyb3dzZXIgY2FjaGVkLCB0aG91Z2guLi4pXG5cdFx0cGcub3B0aW9uID0ge307XG5cdFx0YWJvcnRBbGxEb3dubG9hZHMoKTtcblx0fTtcblx0Y29uc3QgcHJvY2Vzc0FsbFBvcHVwcyA9IChudWxsaWZ5LCBiYW5pc2gpID0+IHtcblx0XHRmb3IgKGxldCBpID0gMDsgcGcuY3VycmVudC5saW5rcyAmJiBpIDwgcGcuY3VycmVudC5saW5rcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKCFwZy5jdXJyZW50LmxpbmtzW2ldLm5hdnBvcHVwKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG51bGxpZnkgfHwgYmFuaXNoKSB7XG5cdFx0XHRcdHBnLmN1cnJlbnQubGlua3NbaV0ubmF2cG9wdXAuYmFuaXNoKCk7XG5cdFx0XHR9XG5cdFx0XHRwZy5jdXJyZW50LmxpbmtzW2ldLnNpbXBsZU5vTW9yZSA9IGZhbHNlO1xuXHRcdFx0aWYgKG51bGxpZnkpIHtcblx0XHRcdFx0cGcuY3VycmVudC5saW5rc1tpXS5uYXZwb3B1cCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRwZy5mbi5kaXNhYmxlUG9wdXBzID0gKCkgPT4ge1xuXHRcdHByb2Nlc3NBbGxQb3B1cHMoZmFsc2UsIHRydWUpO1xuXHRcdHNldHVwVG9vbHRpcHMobnVsbCwgdHJ1ZSk7XG5cdH07XG5cdHBnLmZuLnRvZ2dsZVByZXZpZXdzID0gKCkgPT4ge1xuXHRcdHByb2Nlc3NBbGxQb3B1cHModHJ1ZSwgdHJ1ZSk7XG5cdFx0cGcub3B0aW9uLnNpbXBsZVBvcHVwcyA9ICFwZy5vcHRpb24uc2ltcGxlUG9wdXBzO1xuXHRcdGFib3J0QWxsRG93bmxvYWRzKCk7XG5cdH07XG5cdGNvbnN0IG1hZ2ljV2F0Y2hMaW5rID0gZnVuY3Rpb24gbWFnaWNXYXRjaExpbmsobCkge1xuXHRcdC8vIFl1Y2shISBXb3VsZCByZXF1aXJlIGEgdGhvcm91Z2ggcmVkZXNpZ24gdG8gYWRkIHRoaXMgYXMgYSBjbGljayBldmVudCB0aG91Z2ggLi4uXG5cdFx0bC5vbmNsaWNrID0gc2ltcGxlUHJpbnRmKFwicGcuZm4ubW9kaWZ5V2F0Y2hsaXN0KCclcycsJyVzJyk7cmV0dXJuIGZhbHNlO1wiLCBbXG5cdFx0XHRsLmFydGljbGVcblx0XHRcdFx0LnRvU3RyaW5nKHRydWUpXG5cdFx0XHRcdC5zcGxpdCgnXFxcXCcpXG5cdFx0XHRcdC5qb2luKCdcXFxcXFxcXCcpXG5cdFx0XHRcdC5zcGxpdChcIidcIilcblx0XHRcdFx0LmpvaW4oU3RyaW5nLnJhd2BcXCdgKSxcblx0XHRcdHRoaXMuaWQsXG5cdFx0XSk7XG5cdFx0cmV0dXJuIHdpa2lMaW5rKGwpO1xuXHR9O1xuXHRwZy5mbi5tb2RpZnlXYXRjaGxpc3QgPSBhc3luYyAodGl0bGUsIGFjdGlvbikgPT4ge1xuXHRcdGNvbnN0IHJlcURhdGEgPSB7XG5cdFx0XHRhY3Rpb246ICd3YXRjaCcsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdFx0dXNlbGFuZzogbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKSxcblx0XHR9O1xuXHRcdGlmIChhY3Rpb24gPT09ICd1bndhdGNoJykge1xuXHRcdFx0cmVxRGF0YS51bndhdGNoID0gdHJ1ZTtcblx0XHR9XG5cdFx0Ly8gTG9hZCB0aGUgQWRkZWR3YXRjaHRleHQgb3IgUmVtb3ZlZHdhdGNodGV4dCBtZXNzYWdlIGFuZCBzaG93IGl0XG5cdFx0Y29uc3QgbXdUaXRsZSA9IG13LlRpdGxlLm5ld0Zyb21UZXh0KHRpdGxlKTtcblx0XHRsZXQgbWVzc2FnZU5hbWU7XG5cdFx0aWYgKG13VGl0bGUgJiYgbXdUaXRsZS5nZXROYW1lc3BhY2VJZCgpID4gMCAmJiBtd1RpdGxlLmdldE5hbWVzcGFjZUlkKCkgJSAyID09PSAxKSB7XG5cdFx0XHRtZXNzYWdlTmFtZSA9IGFjdGlvbiA9PT0gJ3dhdGNoJyA/ICdhZGRlZHdhdGNodGV4dC10YWxrJyA6ICdyZW1vdmVkd2F0Y2h0ZXh0LXRhbGsnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZXNzYWdlTmFtZSA9IGFjdGlvbiA9PT0gJ3dhdGNoJyA/ICdhZGRlZHdhdGNodGV4dCcgOiAncmVtb3ZlZHdhdGNodGV4dCc7XG5cdFx0fVxuXHRcdGF3YWl0IGdldE13QXBpKCkucG9zdFdpdGhUb2tlbignd2F0Y2gnLCByZXFEYXRhKTtcblx0XHRhd2FpdCBnZXRNd0FwaSgpLmxvYWRNZXNzYWdlc0lmTWlzc2luZyhbbWVzc2FnZU5hbWVdKTtcblx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0Ly8gKiBzZWUgc3RyaW5nLmpzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdHZvaWQgbXcubm90aWZ5KG13Lm1lc3NhZ2UobWVzc2FnZU5hbWUsIHRpdGxlKS5wYXJzZURvbSgpLCB7dGFnOiAncG9wdXBzJ30pO1xuXHR9O1xuXHRjb25zdCBtYWdpY0hpc3RvcnlMaW5rID0gKGwpID0+IHtcblx0XHQvLyBGSVhNRSB1c2Ugb25jbGljayBjaGFuZ2UgaHJlZiB0cmljayB0byBzb3J0IHRoaXMgb3V0IGluc3RlYWQgb2Ygd2luZG93Lm9wZW5cblx0XHRsZXQganNVcmwgPSAnJztcblx0XHRsZXQgdGl0bGUgPSAnJztcblx0XHRsZXQgb25DbGljayA9ICcnO1xuXHRcdHN3aXRjaCAobC5pZCkge1xuXHRcdFx0Y2FzZSAnbGFzdENvbnRyaWInOlxuXHRcdFx0XHRvbkNsaWNrID0gc2ltcGxlUHJpbnRmKFwicGcuZm4uZ2V0TGFzdENvbnRyaWIoJyVzJywlcylcIiwgW1xuXHRcdFx0XHRcdGwuYXJ0aWNsZVxuXHRcdFx0XHRcdFx0LnRvU3RyaW5nKHRydWUpXG5cdFx0XHRcdFx0XHQuc3BsaXQoJ1xcXFwnKVxuXHRcdFx0XHRcdFx0LmpvaW4oJ1xcXFxcXFxcJylcblx0XHRcdFx0XHRcdC5zcGxpdChcIidcIilcblx0XHRcdFx0XHRcdC5qb2luKFN0cmluZy5yYXdgXFwnYCksXG5cdFx0XHRcdFx0bC5uZXdXaW4sXG5cdFx0XHRcdF0pO1xuXHRcdFx0XHR0aXRsZSA9IHBvcHVwU3RyaW5nKCdsYXN0Q29udHJpYkhpbnQnKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzaW5jZU1lJzpcblx0XHRcdFx0b25DbGljayA9IHNpbXBsZVByaW50ZihcInBnLmZuLmdldERpZmZTaW5jZU15RWRpdCgnJXMnLCVzKVwiLCBbXG5cdFx0XHRcdFx0bC5hcnRpY2xlXG5cdFx0XHRcdFx0XHQudG9TdHJpbmcodHJ1ZSlcblx0XHRcdFx0XHRcdC5zcGxpdCgnXFxcXCcpXG5cdFx0XHRcdFx0XHQuam9pbignXFxcXFxcXFwnKVxuXHRcdFx0XHRcdFx0LnNwbGl0KFwiJ1wiKVxuXHRcdFx0XHRcdFx0LmpvaW4oU3RyaW5nLnJhd2BcXCdgKSxcblx0XHRcdFx0XHRsLm5ld1dpbixcblx0XHRcdFx0XSk7XG5cdFx0XHRcdHRpdGxlID0gcG9wdXBTdHJpbmcoJ3NpbmNlTWVIaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRqc1VybCA9IGBqYXZhc2NyaXB0OiR7b25DbGlja31gOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblx0XHRvbkNsaWNrICs9ICc7cmV0dXJuIGZhbHNlOyc7XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybDoganNVcmwsXG5cdFx0XHRuZXdXaW46IGZhbHNlLFxuXHRcdFx0dGl0bGUsXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHRub1BvcHVwOiBsLm5vUG9wdXAsXG5cdFx0XHRvbmNsaWNrOiBvbkNsaWNrLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBwb3B1cE1lbnVMaW5rID0gKGwpID0+IHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2NyaXB0LXVybFxuXHRcdGNvbnN0IGpzVXJsID0gc2ltcGxlUHJpbnRmKCdqYXZhc2NyaXB0OnBnLmZuLiVzKCknLCBbbC5pZF0pOyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblx0XHRjb25zdCB0aXRsZSA9IHBvcHVwU3RyaW5nKHNpbXBsZVByaW50ZignJXNIaW50JywgW2wuaWRdKSk7XG5cdFx0Y29uc3Qgb25DbGljayA9IHNpbXBsZVByaW50ZigncGcuZm4uJXMoKTtyZXR1cm4gZmFsc2U7JywgW2wuaWRdKTtcblx0XHRyZXR1cm4gZ2VuZXJhbE5hdkxpbmsoe1xuXHRcdFx0dXJsOiBqc1VybCxcblx0XHRcdG5ld1dpbjogZmFsc2UsXG5cdFx0XHR0aXRsZSxcblx0XHRcdHRleHQ6IGwudGV4dCxcblx0XHRcdG5vUG9wdXA6IGwubm9Qb3B1cCxcblx0XHRcdG9uY2xpY2s6IG9uQ2xpY2ssXG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHNwZWNpYWxMaW5rID0gKGwpID0+IHtcblx0XHQvLyBwcm9wZXJ0aWVzOiBhcnRpY2xlLCBzcGVjaWFscGFnZSwgdGV4dCwgc2VwXG5cdFx0aWYgKGwuc3BlY2lhbHBhZ2UgPT09IHVuZGVmaW5lZCB8fCAhbC5zcGVjaWFscGFnZSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IGJhc2UgPSBgJHtwZy53aWtpLnRpdGxlYmFzZSArIG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zU3BlY2lhbElkXX06JHtsLnNwZWNpYWxwYWdlfWA7XG5cdFx0bC5zZXAgPz89ICcmdGFyZ2V0PSc7XG5cdFx0bGV0IGFydGljbGUgPSBsLmFydGljbGUudXJsU3RyaW5nKHtcblx0XHRcdGtlZXBTcGFjZXM6IGwuc3BlY2lhbHBhZ2UgPT09ICdTZWFyY2gnLFxuXHRcdH0pO1xuXHRcdGxldCBoaW50ID0gcG9wdXBTdHJpbmcoYCR7bC5zcGVjaWFscGFnZX1IaW50YCk7XG5cdFx0c3dpdGNoIChsLnNwZWNpYWxwYWdlKSB7XG5cdFx0XHRjYXNlICdMb2cnOlxuXHRcdFx0XHRzd2l0Y2ggKGwuc2VwKSB7XG5cdFx0XHRcdFx0Y2FzZSAnJnVzZXI9Jzpcblx0XHRcdFx0XHRcdGhpbnQgPSBwb3B1cFN0cmluZygndXNlckxvZ0hpbnQnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJyZ0eXBlPWJsb2NrJnBhZ2U9Jzpcblx0XHRcdFx0XHRcdGhpbnQgPSBwb3B1cFN0cmluZygnYmxvY2tMb2dIaW50Jyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICcmcGFnZT0nOlxuXHRcdFx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCdwYWdlTG9nSGludCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnJnR5cGU9cHJvdGVjdCZwYWdlPSc6XG5cdFx0XHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ3Byb3RlY3RMb2dIaW50Jyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICcmdHlwZT1kZWxldGUmcGFnZT0nOlxuXHRcdFx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCdkZWxldGVMb2dIaW50Jyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0bG9nKGBVbmtub3duIGxvZyB0eXBlLCBzZXA9JHtsLnNlcH1gKTtcblx0XHRcdFx0XHRcdGhpbnQgPSAnTWlzc2luZyBoaW50IChGSVhNRSknO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnUHJlZml4SW5kZXgnOlxuXHRcdFx0XHRhcnRpY2xlICs9ICcvJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGhpbnQgPSBoaW50ID8gc2ltcGxlUHJpbnRmKGhpbnQsIFtzYWZlRGVjb2RlVVJJKGwuYXJ0aWNsZSldKSA6IHNhZmVEZWNvZGVVUkkoYCR7bC5zcGVjaWFscGFnZX06JHtsLmFydGljbGV9YCk7XG5cdFx0Y29uc3QgdXJsID0gYmFzZSArIGwuc2VwICsgYXJ0aWNsZTtcblx0XHRyZXR1cm4gZ2VuZXJhbE5hdkxpbmsoe1xuXHRcdFx0dXJsLFxuXHRcdFx0dGl0bGU6IGhpbnQsXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHRuZXdXaW46IGwubmV3V2luLFxuXHRcdFx0bm9Qb3B1cDogbC5ub1BvcHVwLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBnZW5lcmFsTGluayA9IChsKSA9PiB7XG5cdFx0Ly8gbC51cmwsIGwudGV4dCwgbC50aXRsZSwgbC5uZXdXaW4sIGwuY2xhc3NOYW1lLCBsLm5vUG9wdXAsIGwub25jbGlja1xuXHRcdGlmIChsLnVybCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Ly8gb25seSBxdW90YXRpb24gbWFya3MgaW4gdGhlIHVybCBjYW4gc2NyZXcgdXMgdXAgbm93Li4uIEkgdGhpbmtcblx0XHRjb25zdCB1cmwgPSBsLnVybC5zcGxpdCgnXCInKS5qb2luKCclMjInKTtcblx0XHRsZXQgcmV0ID0gYDxhIGhyZWY9XCIke3VybH1cImA7XG5cdFx0aWYgKGwudGl0bGUgIT09IHVuZGVmaW5lZCAmJiBsLnRpdGxlKSB7XG5cdFx0XHRyZXQgKz0gYCB0aXRsZT1cIiR7cGcuZXNjYXBlUXVvdGVzSFRNTChsLnRpdGxlKX1cImA7XG5cdFx0fVxuXHRcdGlmIChsLm9uY2xpY2sgIT09IHVuZGVmaW5lZCAmJiBsLm9uY2xpY2spIHtcblx0XHRcdHJldCArPSBgIG9uY2xpY2s9XCIke3BnLmVzY2FwZVF1b3Rlc0hUTUwobC5vbmNsaWNrKX1cImA7XG5cdFx0fVxuXHRcdGlmIChsLm5vUG9wdXApIHtcblx0XHRcdHJldCArPSAnIG5vUG9wdXA9MSc7XG5cdFx0fVxuXHRcdGxldCBuZXdXaW47XG5cdFx0aWYgKGwubmV3V2luID09PSB1bmRlZmluZWQgfHwgbC5uZXdXaW4gPT09IG51bGwpIHtcblx0XHRcdG5ld1dpbiA9IGdldFZhbHVlT2YoJ3BvcHVwTmV3V2luZG93cycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQoe25ld1dpbn0gPSBsKTtcblx0XHR9XG5cdFx0aWYgKG5ld1dpbikge1xuXHRcdFx0cmV0ICs9ICcgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIic7XG5cdFx0fVxuXHRcdGlmIChsLmNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkICYmIGwuY2xhc3NOYW1lKSB7XG5cdFx0XHRyZXQgKz0gYCBjbGFzcz1cIiR7bC5jbGFzc05hbWV9XCJgO1xuXHRcdH1cblx0XHRyZXQgKz0gJz4nO1xuXHRcdGlmICh0eXBlb2YgbC50ZXh0ID09PSB0eXBlb2YgJycpIHtcblx0XHRcdC8vIFdlIG5lZWQgdG8gSFRNTC1lc2NhcGUgdGhpcyB0byBhdm9pZCBYU1MsIGJ1dCB3ZSBhbHNvIHdhbnQgdG9cblx0XHRcdC8vIGRpc3BsYXkgYW55IGV4aXN0aW5nIEhUTUwgZW50aXRpZXMgY29ycmVjdGx5LCBzbyB1bmVzY2FwZSBpdCBmaXJzdC5cblx0XHRcdC8vIEZvciBleGFtcGxlLCB0aGUgZGlzcGxheSB0ZXh0IG9mIHRoZSB1c2VyIHBhZ2UgbWVudSBpdGVtIGlzIGRlZmluZWRcblx0XHRcdC8vIGFzIFwidXNlciZuYnNwO3BhZ2VcIiwgc28gd2UgbmVlZCB0byB1bmVzY2FwZSBmaXJzdCB0byBhdm9pZCBpdCBiZWluZ1xuXHRcdFx0Ly8gZXNjYXBlZCB0byBcInVzZXImYW1wO25ic3A7cGFnZVwiLlxuXHRcdFx0cmV0ICs9IHBnLmVzY2FwZVF1b3Rlc0hUTUwocGcudW5lc2NhcGVRdW90ZXNIVE1MKGwudGV4dCkpO1xuXHRcdH1cblx0XHRyZXQgKz0gJzwvYT4nO1xuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IGFwcGVuZFBhcmFtc1RvTGluayA9IChsaW5rc3RyLCBwYXJhbXMpID0+IHtcblx0XHRjb25zdCBzcCA9IGxpbmtzdHIuc3BsaXQoLyhocmVmPVwiW15cIl0rPylcIi9pKTtcblx0XHRpZiAoc3AubGVuZ3RoIDwgMikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCByZXQgPSBzcC5zaGlmdCgpICsgc3Auc2hpZnQoKTtcblx0XHRyZXQgKz0gYCYke3BhcmFtc31cImA7XG5cdFx0cmV0ICs9IHNwLmpvaW4oJycpO1xuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IGNoYW5nZUxpbmtUYXJnZXRMaW5rID0gKHgpID0+IHtcblx0XHQvLyBuZXdUYXJnZXQsIHRleHQsIGhpbnQsIHN1bW1hcnksIGNsaWNrQnV0dG9uLCBtaW5vciwgdGl0bGUgKG9wdGlvbmFsKSwgYWxzb0NoYW5nZUxhYmVsIHtcblx0XHRpZiAoeC5uZXdUYXJnZXQpIHtcblx0XHRcdGxvZyhgY2hhbmdlTGlua1RhcmdldExpbms6IG5ld1RhcmdldD0ke3gubmV3VGFyZ2V0fWApO1xuXHRcdH1cblx0XHRpZiAoeC5vbGRUYXJnZXQgIT09IGRlY29kZVVSSUNvbXBvbmVudCh4Lm9sZFRhcmdldCkpIHtcblx0XHRcdGxvZyhgVGhpcyBtaWdodCBiZSBhbiBpbnB1dCBwcm9ibGVtOiAke3gub2xkVGFyZ2V0fWApO1xuXHRcdH1cblx0XHQvLyBGSVhNRTogZmlyc3QgY2hhcmFjdGVyIG9mIHBhZ2UgdGl0bGUgYXMgd2VsbCBhcyBuYW1lc3BhY2Ugc2hvdWxkIGJlIGNhc2UgaW5zZW5zaXRpdmVcblx0XHQvLyBlZyBbWzpjYXRlZ29yeTpYMV1dIGFuZCBbWzpDYXRlZ29yeTpYMV1dIGFyZSBlcXVpdmFsZW50XG5cdFx0Ly8gdGhpcydsbCBicmVhayBpZiBjaGFyQXQoMCkgaXMgbmFzdHlcblx0XHRjb25zdCBjQSA9IG13LnV0aWwuZXNjYXBlUmVnRXhwKHgub2xkVGFyZ2V0KTtcblx0XHRsZXQgY2hzID0gY0EuY2hhckF0KDApLnRvVXBwZXJDYXNlKCk7XG5cdFx0Y2hzID0gYFske2Noc30ke2Nocy50b0xvd2VyQ2FzZSgpfV1gO1xuXHRcdGxldCBjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0ID0gY2hzICsgY0Euc2xpY2UoMSk7XG5cdFx0Y3VycmVudEFydGljbGVSZWdleEJpdCA9IGN1cnJlbnRBcnRpY2xlUmVnZXhCaXRcblx0XHRcdC5zcGxpdCgvWyBfXSt8JTIwL2cpXG5cdFx0XHQuam9pbignKD86W18gXSt8JTIwKScpXG5cdFx0XHQuc3BsaXQoU3RyaW5nLnJhd2BcXChgKVxuXHRcdFx0LmpvaW4oU3RyaW5nLnJhd2AoPzolMjh8XFwoKWApXG5cdFx0XHQuc3BsaXQoU3RyaW5nLnJhd2BcXClgKVxuXHRcdFx0LmpvaW4oU3RyaW5nLnJhd2AoPzolMjl8XFwpKWApOyAvLyB3aHkgZG9lcyB0aGlzIG5lZWQgdG8gbWF0Y2ggZW5jb2RlZCBzdHJpbmdzID8gbGlua3MgaW4gdGhlIGRvY3VtZW50ID9cblxuXHRcdC8vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNwYWNlIHNob3VsZCBiZSBpZ25vcmVkLCBhbmQgYW5jaG9yIGJpdHMgb3B0aW9uYWw6XG5cdFx0Y3VycmVudEFydGljbGVSZWdleEJpdCA9IGBcXFxccyooJHtjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0fSg/OiNbXlxcXFxbXFxcXHxdKik/KVxcXFxzKmA7XG5cdFx0Ly8gZS5nLiBDb21wdXRlciAoYXJjaGFpYykgLT4gXFxzKihbQ2Ndb21wdXRlcltfIF0oPzolMjUyOHxcXCgpYXJjaGFpYyg/OiUyNTI4fFxcKSkpXFxzKlxuXHRcdC8vIGF1dG9lZGl0PXN+XFxbXFxbKFtDY11hZClcXF1cXF1+W1tDb21wdXRlci1haWRlZCUyMGRlc2lnbnwkMV1dfmc7c35cXFtcXFsoW0NjXUFEKVt8XX5bW0NvbXB1dGVyLWFpZGVkJTIwZGVzaWdufH5nXG5cdFx0Y29uc3QgdGl0bGUgPSB4LnRpdGxlIHx8IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5zcGxpdCgnXycpLmpvaW4oJyAnKTtcblx0XHRjb25zdCBsayA9IHRpdGxlZFdpa2lMaW5rKHtcblx0XHRcdGFydGljbGU6IG5ldyBUaXRsZSh0aXRsZSksXG5cdFx0XHRuZXdXaW46IHgubmV3V2luLFxuXHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHR0ZXh0OiB4LnRleHQsXG5cdFx0XHR0aXRsZTogeC5oaW50LFxuXHRcdFx0Y2xhc3NOYW1lOiAncG9wdXBfY2hhbmdlX3RpdGxlX2xpbmsnLFxuXHRcdH0pO1xuXHRcdGxldCBjbWQgPSAnJztcblx0XHRpZiAoeC5uZXdUYXJnZXQpIHtcblx0XHRcdC8vIGVzY2FwZSAnJicgYW5kIG90aGVyIG5hc3RpZXNcblx0XHRcdGNvbnN0IHQgPSB4Lm5ld1RhcmdldDtcblx0XHRcdGNvbnN0IHMgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cCh4Lm5ld1RhcmdldCk7XG5cdFx0XHRpZiAoeC5hbHNvQ2hhbmdlTGFiZWwpIHtcblx0XHRcdFx0Y21kICs9IGBzflxcXFxbXFxcXFske2N1cnJlbnRBcnRpY2xlUmVnZXhCaXR9XFxcXF1cXFxcXX5bWyR7dH1dXX5nO2A7XG5cdFx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0fVt8XX5bWyR7dH18fmc7YDtcblx0XHRcdFx0Y21kICs9IGBzflxcXFxbXFxcXFske3N9XFxcXHwke3N9XFxcXF1cXFxcXX5bWyR7dH1dXX5nYDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0fVxcXFxdXFxcXF1+W1ske3R9fCQxXV1+ZztgO1xuXHRcdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7Y3VycmVudEFydGljbGVSZWdleEJpdH1bfF1+W1ske3R9fH5nO2A7XG5cdFx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtzfVxcXFx8JHtzfVxcXFxdXFxcXF1+W1ske3R9XV1+Z2A7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0fVxcXFxdXFxcXF1+JDF+ZztgO1xuXHRcdFx0Y21kICs9IGBzflxcXFxbXFxcXFske2N1cnJlbnRBcnRpY2xlUmVnZXhCaXR9W3xdKC4qPylcXFxcXVxcXFxdfiQyfmdgO1xuXHRcdH1cblx0XHQvLyBCdWlsZCBxdWVyeVxuXHRcdGNtZCA9IGBhdXRvZWRpdD0ke2VuY29kZVVSSUNvbXBvbmVudChjbWQpfWA7XG5cdFx0Y21kICs9IGAmYXV0b2NsaWNrPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHguY2xpY2tCdXR0b24pfSZhY3Rva2VuPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGF1dG9DbGlja1Rva2VuKCkpfWA7XG5cdFx0Y21kICs9IHgubWlub3IgPT09IG51bGwgPyAnJyA6IGAmYXV0b21pbm9yPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHgubWlub3IpfWA7XG5cdFx0Y21kICs9IHgud2F0Y2ggPT09IG51bGwgPyAnJyA6IGAmYXV0b3dhdGNoPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHgud2F0Y2gpfWA7XG5cdFx0Y21kICs9IGAmYXV0b3N1bW1hcnk9JHtlbmNvZGVVUklDb21wb25lbnQoeC5zdW1tYXJ5KX1gO1xuXHRcdGNtZCArPSBgJmF1dG9pbXBsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBvcHVwU3RyaW5nKCdhdXRvZWRpdF92ZXJzaW9uJykpfWA7XG5cdFx0cmV0dXJuIGFwcGVuZFBhcmFtc1RvTGluayhsaywgY21kKTtcblx0fTtcblx0Y29uc3QgcmVkaXJMaW5rID0gKHJlZGlyTWF0Y2gsIGFydGljbGUpID0+IHtcblx0XHQvLyBOQiByZWRpck1hdGNoIGlzIGluIHdpa2lUZXh0XG5cdFx0bGV0IHJldCA9ICcnO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cEFwcGVuZFJlZGlyTmF2TGlua3MnKSAmJiBnZXRWYWx1ZU9mKCdwb3B1cE5hdkxpbmtzJykpIHtcblx0XHRcdHJldCArPSAnPGhyPic7XG5cdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBGaXhSZWRpcnMnKSAmJiBhdXRvRWRpdCAhPT0gdW5kZWZpbmVkICYmIGF1dG9FZGl0KSB7XG5cdFx0XHRcdHJldCArPSBwb3B1cFN0cmluZygnUmVkaXJlY3RzIHRvOiAoRml4ICcpO1xuXHRcdFx0XHRsb2coYHJlZGlyTGluazogbmV3VGFyZ2V0PSR7cmVkaXJNYXRjaH1gKTtcblx0XHRcdFx0cmV0ICs9IGFkZFBvcHVwU2hvcnRjdXQoXG5cdFx0XHRcdFx0Y2hhbmdlTGlua1RhcmdldExpbmsoe1xuXHRcdFx0XHRcdFx0bmV3VGFyZ2V0OiByZWRpck1hdGNoLFxuXHRcdFx0XHRcdFx0dGV4dDogcG9wdXBTdHJpbmcoJ3RhcmdldCcpLFxuXHRcdFx0XHRcdFx0aGludDogcG9wdXBTdHJpbmcoJ0ZpeCB0aGlzIHJlZGlyZWN0LCBjaGFuZ2luZyBqdXN0IHRoZSBsaW5rIHRhcmdldCcpLFxuXHRcdFx0XHRcdFx0c3VtbWFyeTogc2ltcGxlUHJpbnRmKGdldFZhbHVlT2YoJ3BvcHVwRml4UmVkaXJzU3VtbWFyeScpLCBbYXJ0aWNsZS50b1N0cmluZygpLCByZWRpck1hdGNoXSksXG5cdFx0XHRcdFx0XHRvbGRUYXJnZXQ6IGFydGljbGUudG9TdHJpbmcoKSxcblx0XHRcdFx0XHRcdGNsaWNrQnV0dG9uOiBnZXRWYWx1ZU9mKCdwb3B1cFJlZGlyQXV0b0NsaWNrJyksXG5cdFx0XHRcdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHRcdFx0XHRcdHdhdGNoOiBnZXRWYWx1ZU9mKCdwb3B1cFdhdGNoUmVkaXJyZWRQYWdlcycpLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdCdSJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXQgKz0gcG9wdXBTdHJpbmcoJyBvciAnKTtcblx0XHRcdFx0cmV0ICs9IGFkZFBvcHVwU2hvcnRjdXQoXG5cdFx0XHRcdFx0Y2hhbmdlTGlua1RhcmdldExpbmsoe1xuXHRcdFx0XHRcdFx0bmV3VGFyZ2V0OiByZWRpck1hdGNoLFxuXHRcdFx0XHRcdFx0dGV4dDogcG9wdXBTdHJpbmcoJ3RhcmdldCAmIGxhYmVsJyksXG5cdFx0XHRcdFx0XHRoaW50OiBwb3B1cFN0cmluZygnRml4IHRoaXMgcmVkaXJlY3QsIGNoYW5naW5nIHRoZSBsaW5rIHRhcmdldCBhbmQgbGFiZWwnKSxcblx0XHRcdFx0XHRcdHN1bW1hcnk6IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cEZpeFJlZGlyc1N1bW1hcnknKSwgW2FydGljbGUudG9TdHJpbmcoKSwgcmVkaXJNYXRjaF0pLFxuXHRcdFx0XHRcdFx0b2xkVGFyZ2V0OiBhcnRpY2xlLnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0XHRjbGlja0J1dHRvbjogZ2V0VmFsdWVPZigncG9wdXBSZWRpckF1dG9DbGljaycpLFxuXHRcdFx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHRcdFx0XHR3YXRjaDogZ2V0VmFsdWVPZigncG9wdXBXYXRjaFJlZGlycmVkUGFnZXMnKSxcblx0XHRcdFx0XHRcdGFsc29DaGFuZ2VMYWJlbDogdHJ1ZSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHQnUidcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0ICs9IHBvcHVwU3RyaW5nKCcpJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXQgKz0gcG9wdXBTdHJpbmcoJ1JlZGlyZWN0cycpICsgcG9wdXBTdHJpbmcoJyB0byAnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBgPGJyPiAke3BvcHVwU3RyaW5nKCdSZWRpcmVjdHMnKX0ke3BvcHVwU3RyaW5nKCcgdG8gJyl9JHt0aXRsZWRXaWtpTGluayh7XG5cdFx0XHRhcnRpY2xlOiBuZXcgVGl0bGUoKS5mcm9tV2lraVRleHQocmVkaXJNYXRjaCksXG5cdFx0XHRhY3Rpb246ICd2aWV3JyAvKiBGSVhNRTogbmV3V2luICovLFxuXHRcdFx0dGV4dDogc2FmZURlY29kZVVSSShyZWRpck1hdGNoKSxcblx0XHRcdHRpdGxlOiBwb3B1cFN0cmluZygnQnlwYXNzIHJlZGlyZWN0JyksXG5cdFx0fSl9YDtcblx0fTtcblx0Y29uc3QgYXJpbkxpbmsgPSAobCkgPT4ge1xuXHRcdGlmICghc2FuZUxpbmtDaGVjayhsKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmICghbC5hcnRpY2xlLmlzSXBVc2VyKCkgfHwgIXBnLndpa2kud2lraW1lZGlhKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgdU4gPSBsLmFydGljbGUudXNlck5hbWUoKTtcblx0XHRyZXR1cm4gZ2VuZXJhbE5hdkxpbmsoe1xuXHRcdFx0dXJsOiBgaHR0cDovL3dzLmFyaW4ubmV0L2NnaS1iaW4vd2hvaXMucGw/cXVlcnlpbnB1dD0ke2VuY29kZVVSSUNvbXBvbmVudCh1Til9YCxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHR0aXRsZTogdHByaW50ZignTG9vayB1cCAlcyBpbiBBUklOIHdob2lzIGRhdGFiYXNlJywgW3VOXSksXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHRub1BvcHVwOiAxLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCB0b29sRGJOYW1lID0gKGNvb2tpZVN0eWxlKSA9PiB7XG5cdFx0bGV0IHJldCA9IG13LmNvbmZpZy5nZXQoJ3dnREJuYW1lJyk7XG5cdFx0aWYgKCFjb29raWVTdHlsZSkge1xuXHRcdFx0cmV0ICs9ICdfcCc7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IHNhbmVMaW5rQ2hlY2sgPSAobCkgPT4ge1xuXHRcdGlmICh0eXBlb2YgbC5hcnRpY2xlICE9PSB0eXBlb2Yge30gfHwgdHlwZW9mIGwudGV4dCAhPT0gdHlwZW9mICcnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXHRjb25zdCBlZGl0Q291bnRlckxpbmsgPSAobCkgPT4ge1xuXHRcdGlmICghc2FuZUxpbmtDaGVjayhsKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmICghcGcud2lraS53aWtpbWVkaWEpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCB1TiA9IGwuYXJ0aWNsZS51c2VyTmFtZSgpO1xuXHRcdGNvbnN0IHRvb2wgPSBnZXRWYWx1ZU9mKCdwb3B1cEVkaXRDb3VudGVyVG9vbCcpO1xuXHRcdGxldCB1cmw7XG5cdFx0Y29uc3QgZGVmYXVsdFRvb2xVcmwgPSAnLy90b29scy53bWZsYWJzLm9yZy9zdXBlcmNvdW50L2luZGV4LnBocD91c2VyPSQxJnByb2plY3Q9JDIuJDMnO1xuXHRcdHN3aXRjaCAodG9vbCkge1xuXHRcdFx0Y2FzZSAnY3VzdG9tJzpcblx0XHRcdFx0dXJsID0gc2ltcGxlUHJpbnRmKGdldFZhbHVlT2YoJ3BvcHVwRWRpdENvdW50ZXJVcmwnKSwgW2VuY29kZVVSSUNvbXBvbmVudCh1TiksIHRvb2xEYk5hbWUoKV0pO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0Y29uc3QgdGhlV2lraSA9IHBnLndpa2kuaG9zdG5hbWUuc3BsaXQoJy4nKTtcblx0XHRcdFx0dXJsID0gc2ltcGxlUHJpbnRmKGRlZmF1bHRUb29sVXJsLCBbZW5jb2RlVVJJQ29tcG9uZW50KHVOKSwgdGhlV2lraVswXSwgdGhlV2lraVsxXV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZ2VuZXJhbE5hdkxpbmsoe1xuXHRcdFx0dXJsLFxuXHRcdFx0dGl0bGU6IHRwcmludGYoJ2VkaXRDb3VudGVyTGlua0hpbnQnLCBbdU5dKSxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHRub1BvcHVwOiAxLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBlZGl0b3JMaXN0TGluayA9IChsKSA9PiB7XG5cdFx0aWYgKCFzYW5lTGlua0NoZWNrKGwpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgYXJ0aWNsZSA9IGwuYXJ0aWNsZS5hcnRpY2xlRnJvbVRhbGtQYWdlKCkgfHwgbC5hcnRpY2xlO1xuXHRcdGNvbnN0IHVybCA9IGBodHRwczovL3h0b29scy53bWZsYWJzLm9yZy9hcnRpY2xlaW5mby8ke2VuY29kZVVSSShcblx0XHRcdHBnLndpa2kuaG9zdG5hbWVcblx0XHQpfS8ke2FydGljbGUudXJsU3RyaW5nKCl9P3VzZWxhbmc9JHttdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpfWA7XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybCxcblx0XHRcdHRpdGxlOiB0cHJpbnRmKCdlZGl0b3JMaXN0SGludCcsIFthcnRpY2xlXSksXG5cdFx0XHRuZXdXaW46IGwubmV3V2luLFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bm9Qb3B1cDogMSxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgZ2VuZXJhbE5hdkxpbmsgPSAobCkgPT4ge1xuXHRcdGwuY2xhc3NOYW1lID0gbC5jbGFzc05hbWUgPT09IG51bGwgPyAncG9wdXBOYXZMaW5rJyA6IGwuY2xhc3NOYW1lO1xuXHRcdHJldHVybiBnZW5lcmFsTGluayhsKTtcblx0fTtcblx0Ly8gbWFnaWMgaGlzdG9yeSBsaW5rc1xuXHQvL1xuXHRjb25zdCBnZXRIaXN0b3J5SW5mbyA9ICh3aWtpcGFnZSwgd2hhdE5leHQpID0+IHtcblx0XHRsb2coJ2dldEhpc3RvcnlJbmZvJyk7XG5cdFx0Z2V0SGlzdG9yeShcblx0XHRcdHdpa2lwYWdlLFxuXHRcdFx0d2hhdE5leHRcblx0XHRcdFx0PyAoZCkgPT4ge1xuXHRcdFx0XHRcdFx0d2hhdE5leHQocHJvY2Vzc0hpc3RvcnkoZCkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0OiBwcm9jZXNzSGlzdG9yeVxuXHRcdCk7XG5cdH07XG5cdC8vIEZJWE1FIGVsaW1pbmF0ZSBwZy5pZE51bWJlciAuLi4gaG93PyA6LShcblx0Y29uc3QgZ2V0SGlzdG9yeSA9ICh3aWtpcGFnZSwgb25Db21wbGV0ZSkgPT4ge1xuXHRcdGxvZygnZ2V0SGlzdG9yeScpO1xuXHRcdGNvbnN0IHVybCA9IGAke3BnLndpa2kuYXBpd2lraWJhc2V9P2Zvcm1hdD1qc29uJmZvcm1hdHZlcnNpb249MiZhY3Rpb249cXVlcnkmcHJvcD1yZXZpc2lvbnMmdGl0bGVzPSR7bmV3IFRpdGxlKFxuXHRcdFx0d2lraXBhZ2Vcblx0XHQpLnVybFN0cmluZygpfSZydmxpbWl0PSR7Z2V0VmFsdWVPZigncG9wdXBIaXN0b3J5TGltaXQnKX1gO1xuXHRcdGxvZyhgZ2V0SGlzdG9yeTogdXJsPSR7dXJsfWApO1xuXHRcdHJldHVybiBzdGFydERvd25sb2FkKHVybCwgYCR7cGcuaWROdW1iZXJ9aGlzdG9yeWAsIG9uQ29tcGxldGUpO1xuXHR9O1xuXHRjb25zdCBwcm9jZXNzSGlzdG9yeSA9IChkb3dubG9hZCkgPT4ge1xuXHRcdGNvbnN0IGpzb2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSk7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHtyZXZpc2lvbnN9ID0gYW55Q2hpbGQoanNvYmoucXVlcnkucGFnZXMpO1xuXHRcdFx0Y29uc3QgZWRpdHMgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgcmV2aXNpb24gb2YgcmV2aXNpb25zKSB7XG5cdFx0XHRcdGVkaXRzLnB1c2goe1xuXHRcdFx0XHRcdG9sZGlkOiByZXZpc2lvbi5yZXZpZCxcblx0XHRcdFx0XHRlZGl0b3I6IHJldmlzaW9uLnVzZXIsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0bG9nKGBwcm9jZXNzZWQgJHtlZGl0cy5sZW5ndGh9IGVkaXRzYCk7XG5cdFx0XHRyZXR1cm4gZmluaXNoUHJvY2Vzc0hpc3RvcnkoZWRpdHMsIG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRsb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggSlNPTiBidXNpbmVzcycpO1xuXHRcdFx0cmV0dXJuIGZpbmlzaFByb2Nlc3NIaXN0b3J5KFtdKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGZpbmlzaFByb2Nlc3NIaXN0b3J5ID0gKGVkaXRzLCB1c2VyTmFtZSkgPT4ge1xuXHRcdGNvbnN0IGhpc3RJbmZvID0ge307XG5cdFx0aGlzdEluZm8uZWRpdHMgPSBlZGl0cztcblx0XHRoaXN0SW5mby51c2VyTmFtZSA9IHVzZXJOYW1lO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWRpdHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChoaXN0SW5mby5teUxhc3RFZGl0ID09PSB1bmRlZmluZWQgJiYgdXNlck5hbWUgJiYgZWRpdHNbaV0uZWRpdG9yID09PSB1c2VyTmFtZSkge1xuXHRcdFx0XHRoaXN0SW5mby5teUxhc3RFZGl0ID0ge1xuXHRcdFx0XHRcdGluZGV4OiBpLFxuXHRcdFx0XHRcdG9sZGlkOiBlZGl0c1tpXS5vbGRpZCxcblx0XHRcdFx0XHRwcmV2aWQ6IGkgPT09IDAgPyBudWxsIDogZWRpdHNbaSAtIDFdLm9sZGlkLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGhpc3RJbmZvLmZpcnN0TmV3RWRpdG9yID09PSB1bmRlZmluZWQgJiYgZWRpdHNbaV0uZWRpdG9yICE9PSBlZGl0c1swXS5lZGl0b3IpIHtcblx0XHRcdFx0aGlzdEluZm8uZmlyc3ROZXdFZGl0b3IgPSB7XG5cdFx0XHRcdFx0aW5kZXg6IGksXG5cdFx0XHRcdFx0b2xkaWQ6IGVkaXRzW2ldLm9sZGlkLFxuXHRcdFx0XHRcdHByZXZpZDogaSA9PT0gMCA/IG51bGwgOiBlZGl0c1tpIC0gMV0ub2xkaWQsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHBnLm1pc2MuaGlzdG9yeUluZm89aGlzdEluZm87XG5cdFx0cmV0dXJuIGhpc3RJbmZvO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBsaW5rcy5qc1xuXHQvLyBTVEFSVEZJTEU6IG9wdGlvbnMuanNcblx0Ly8gb3B0aW9uc1xuXHQvLyBjaGVjayBmb3IgZXhpc3RpbmcgdmFsdWUsIGVsc2UgdXNlIGRlZmF1bHRcblx0Y29uc3QgZGVmYXVsdGl6ZSA9ICh4KSA9PiB7XG5cdFx0cGcub3B0aW9uW3hdID8/PSB3aW5kb3dbeF0gPT09IHVuZGVmaW5lZCA/IHBnLm9wdGlvbkRlZmF1bHRbeF0gOiB3aW5kb3dbeF07XG5cdH07XG5cdGNvbnN0IG5ld09wdGlvbiA9ICh4LCBkZWYpID0+IHtcblx0XHRwZy5vcHRpb25EZWZhdWx0W3hdID0gZGVmO1xuXHR9O1xuXHRjb25zdCBzZXREZWZhdWx0ID0gKHgsIGRlZikgPT4ge1xuXHRcdHJldHVybiBuZXdPcHRpb24oeCwgZGVmKTtcblx0fTtcblx0Y29uc3QgZ2V0VmFsdWVPZiA9ICh2YXJOYW1lKSA9PiB7XG5cdFx0ZGVmYXVsdGl6ZSh2YXJOYW1lKTtcblx0XHRyZXR1cm4gcGcub3B0aW9uW3Zhck5hbWVdO1xuXHR9O1xuXHRjb25zdCBzZXRPcHRpb25zID0gKCkgPT4ge1xuXHRcdC8vIHVzZXItc2V0dGFibGUgcGFyYW1ldGVycyBhbmQgZGVmYXVsdHNcblx0XHRsZXQgdXNlcklzU3lzb3AgPSBmYWxzZTtcblx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJykpIHtcblx0XHRcdGZvciAobGV0IGcgPSAwOyBnIDwgbXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJykubGVuZ3RoOyArK2cpIHtcblx0XHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpW2ddID09PSAnc3lzb3AnKSB7XG5cdFx0XHRcdFx0dXNlcklzU3lzb3AgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKVtnXSA9PT0gJ3N0ZXdhcmQnKSB7XG5cdFx0XHRcdFx0dXNlcklzU3lzb3AgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIEJhc2ljIG9wdGlvbnNcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGVsYXknLCAwLjUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBIaWRlRGVsYXknLCAwLjUpO1xuXHRcdG5ld09wdGlvbignc2ltcGxlUG9wdXBzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBTdHJ1Y3R1cmUnLCAnc2hvcnRtZW51cycpOyAvLyBzZWUgbGF0ZXIgLSBkZWZhdWx0IGZvciBwb3B1cFN0cnVjdHVyZSBpcyAnb3JpZ2luYWwnIGlmIHNpbXBsZVBvcHVwcyBpcyB0cnVlXG5cdFx0bmV3T3B0aW9uKCdwb3B1cEFjdGlvbnNNZW51JywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFNldHVwTWVudScsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBBZG1pbkxpbmtzJywgdXNlcklzU3lzb3ApO1xuXHRcdG5ld09wdGlvbigncG9wdXBTaG9ydGN1dEtleXMnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEhpc3RvcmljYWxMaW5rcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBPbmx5QXJ0aWNsZUxpbmtzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdyZW1vdmVUaXRsZXMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTWF4V2lkdGgnLCAzNTApO1xuXHRcdG5ld09wdGlvbigncG9wdXBTaW1wbGlmeU1haW5MaW5rJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEFwcGVuZFJlZGlyTmF2TGlua3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwVG9jTGlua3MnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFN1YnBvcHVwcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEcmFnSGFuZGxlJywgZmFsc2UgLyogJ3BvcHVwVG9wTGlua3MnICovKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTGF6eVByZXZpZXdzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cExhenlEb3dubG9hZHMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwQWxsRGFic1N0dWJzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEZWJ1Z2dpbmcnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEFjdGl2ZU5hdmxpbmtzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE1vZGlmaWVyJywgZmFsc2UpOyAvLyBjdHJsLCBzaGlmdCwgYWx0IG9yIG1ldGFcblx0XHRuZXdPcHRpb24oJ3BvcHVwTW9kaWZpZXJBY3Rpb24nLCAnZW5hYmxlJyk7IC8vIG9yICdkaXNhYmxlJ1xuXHRcdG5ld09wdGlvbigncG9wdXBEcmFnZ2FibGUnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmV2aWV3JywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBMb2NhbGUnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERhdGVUaW1lRm9ybWF0dGVyT3B0aW9ucycsIHtcblx0XHRcdHllYXI6ICdudW1lcmljJyxcblx0XHRcdG1vbnRoOiAnbG9uZycsXG5cdFx0XHRkYXk6ICdudW1lcmljJyxcblx0XHRcdGhvdXIxMjogZmFsc2UsXG5cdFx0XHRob3VyOiAnMi1kaWdpdCcsXG5cdFx0XHRtaW51dGU6ICcyLWRpZ2l0Jyxcblx0XHRcdHNlY29uZDogJzItZGlnaXQnLFxuXHRcdH0pO1xuXHRcdG5ld09wdGlvbigncG9wdXBEYXRlRm9ybWF0dGVyT3B0aW9ucycsIHtcblx0XHRcdHllYXI6ICdudW1lcmljJyxcblx0XHRcdG1vbnRoOiAnbG9uZycsXG5cdFx0XHRkYXk6ICdudW1lcmljJyxcblx0XHR9KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwVGltZUZvcm1hdHRlck9wdGlvbnMnLCB7XG5cdFx0XHRob3VyMTI6IGZhbHNlLFxuXHRcdFx0aG91cjogJzItZGlnaXQnLFxuXHRcdFx0bWludXRlOiAnMi1kaWdpdCcsXG5cdFx0XHRzZWNvbmQ6ICcyLWRpZ2l0Jyxcblx0XHR9KTtcblx0XHQvLyBpbWFnZXNcblx0XHRuZXdPcHRpb24oJ3BvcHVwSW1hZ2VzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdpbWFnZVBvcHVwc0ZvckltYWdlcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBOZXZlckdldFRodW1icycsIGZhbHNlKTtcblx0XHQvLyBuZXdPcHRpb24oJ3BvcHVwSW1hZ2VzVG9nZ2xlU2l6ZScsICAgICAgIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBUaHVtYkFjdGlvbicsICdpbWFnZXBhZ2UnKTsgLy8gJ3NpemV0b2dnbGUnKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSW1hZ2VTaXplJywgNjApO1xuXHRcdG5ld09wdGlvbigncG9wdXBJbWFnZVNpemVMYXJnZScsIDIwMCk7XG5cdFx0Ly8gcmVkaXJzLCBkYWJzLCByZXZlcnNpb25cblx0XHRuZXdPcHRpb24oJ3BvcHVwRml4UmVkaXJzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZWRpckF1dG9DbGljaycsICd3cERpZmYnKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRml4RGFicycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGFic0F1dG9DbGljaycsICd3cERpZmYnKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmV2ZXJ0U3VtbWFyeVByb21wdCcsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTWlub3JSZXZlcnRzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZWRsaW5rUmVtb3ZhbCcsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmVkbGlua0F1dG9DbGljaycsICd3cERpZmYnKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwV2F0Y2hEaXNhbWJpZ2dlZFBhZ2VzJywgbnVsbCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFdhdGNoUmVkaXJyZWRQYWdlcycsIG51bGwpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEYWJXaWt0aW9uYXJ5JywgJ2xhc3QnKTtcblx0XHQvLyBuYXZsaW5rc1xuXHRcdG5ld09wdGlvbigncG9wdXBOYXZMaW5rcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBOYXZMaW5rU2VwYXJhdG9yJywgJyAmc2RvdDsgJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cExhc3RFZGl0TGluaycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBFZGl0Q291bnRlclRvb2wnLCAnc3VwZXJjb3VudCcpO1xuXHRcdG5ld09wdGlvbigncG9wdXBFZGl0Q291bnRlclVybCcsICcnKTtcblx0XHQvLyBwcmV2aWV3cyBldGNcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwU3VtbWFyeURhdGEnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTWF4UHJldmlld1NlbnRlbmNlcycsIDUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBNYXhQcmV2aWV3Q2hhcmFjdGVycycsIDYwMCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cExhc3RNb2RpZmllZCcsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3S2lsbFRlbXBsYXRlcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3UmF3VGVtcGxhdGVzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdGaXJzdFBhck9ubHknLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld0N1dEhlYWRpbmdzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdCdXR0b24nLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdCdXR0b25FdmVudCcsICdjbGljaycpO1xuXHRcdC8vIGRpZmZzXG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdEaWZmcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEaWZmTWF4TGluZXMnLCAxMDApO1xuXHRcdG5ld09wdGlvbigncG9wdXBEaWZmQ29udGV4dExpbmVzJywgMik7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERpZmZDb250ZXh0Q2hhcmFjdGVycycsIDQwKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGlmZkRhdGVzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERpZmZEYXRlUHJpbnRlcicsICd0b0xvY2FsZVN0cmluZycpOyAvLyBubyBsb25nZXIgaW4gdXNlXG5cblx0XHQvLyBlZGl0IHN1bW1hcmllcy4gR29kLCB0aGVzZSBhcmUgdWdseS5cblx0XHRuZXdPcHRpb24oJ3BvcHVwUmV2aWV3ZWRTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFJldmlld2VkU3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRml4RGFic1N1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwRml4RGFic1N1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEV4dGVuZGVkUmV2ZXJ0U3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBFeHRlbmRlZFJldmVydFN1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJldmVydFN1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwUmV2ZXJ0U3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBRdWVyaWVkUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwUXVlcmllZFJldmVydFRvUHJldmlvdXNTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBGaXhSZWRpcnNTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cEZpeFJlZGlyc1N1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJlZGxpbmtTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFJlZGxpbmtTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSbURhYkxpbmtTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFJtRGFiTGlua1N1bW1hcnknKSk7XG5cdFx0Ly8gbWlzY1xuXHRcdG5ld09wdGlvbigncG9wdXBIaXN0b3J5TGltaXQnLCA1MCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEZpbHRlcnMnLCBbXG5cdFx0XHRwb3B1cEZpbHRlclN0dWJEZXRlY3QsXG5cdFx0XHRwb3B1cEZpbHRlckRpc2FtYmlnRGV0ZWN0LFxuXHRcdFx0cG9wdXBGaWx0ZXJQYWdlU2l6ZSxcblx0XHRcdHBvcHVwRmlsdGVyQ291bnRMaW5rcyxcblx0XHRcdHBvcHVwRmlsdGVyQ291bnRJbWFnZXMsXG5cdFx0XHRwb3B1cEZpbHRlckNvdW50Q2F0ZWdvcmllcyxcblx0XHRcdHBvcHVwRmlsdGVyTGFzdE1vZGlmaWVkLFxuXHRcdF0pO1xuXHRcdG5ld09wdGlvbignZXh0cmFQb3B1cEZpbHRlcnMnLCBbXSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE9uRWRpdFNlbGVjdGlvbicsICdjdXJzb3InKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld0hpc3RvcnknLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSW1hZ2VMaW5rcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBDYXRlZ29yeU1lbWJlcnMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwVXNlckluZm8nLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSGlzdG9yeVByZXZpZXdMaW1pdCcsIDI1KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwQ29udHJpYnNQcmV2aWV3TGltaXQnLCAyNSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJldkRlbFVybCcsICcvL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XaWtpcGVkaWE6UmV2aXNpb25fZGVsZXRpb24nKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwU2hvd0dlbmRlcicsIHRydWUpO1xuXHRcdC8vIG5ldyB3aW5kb3dzXG5cdFx0bmV3T3B0aW9uKCdwb3B1cE5ld1dpbmRvd3MnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cExpbmtzTmV3V2luZG93Jywge2xhc3RDb250cmliOiB0cnVlLCBzaW5jZU1lOiB0cnVlfSk7XG5cdFx0Ly8gcmVnZXhwc1xuXHRcdG5ld09wdGlvbihcblx0XHRcdCdwb3B1cERhYlJlZ2V4cCcsXG5cdFx0XHRTdHJpbmcucmF3YFxce1xce1xccyooZChhYnxpc2FtYihpZyh1YXRpb24pPyk/KXwoKChnZW98aG58cm9hZD98c2Nob29sfG51bWJlcilkaXMpfFsyMzRdW2xjXVthY3ddfChyb2FkfHNoaXApaW5kZXgpKVxccyooXFx8W159XSopP1xcfVxcfXxpcyBhIC4qZGlzYW1iaWd1YXRpb24uKnBhZ2VgXG5cdFx0KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwQW5jaG9yUmVnZXhwJywgJ2FuY2hvcnM/Jyk7IC8vIGhvdyB0byBpZGVudGlmeSBhbiBhbmNob3JzIHRlbXBsYXRlXG5cdFx0bmV3T3B0aW9uKCdwb3B1cFN0dWJSZWdleHAnLCAnKHNlY3QpP3N0dWJbfV1bfV18VGhpcyAuKi1yZWxhdGVkIGFydGljbGUgaXMgYSAuKnN0dWInKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSW1hZ2VWYXJzUmVnZXhwJywgJ2ltYWdlfGltYWdlXyg/OmZpbGV8c2t5bGluZXxuYW1lfGZsYWd8c2VhbCl8Y292ZXJ8YmFkZ2V8bG9nbycpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBvcHRpb25zLmpzXG5cdC8vIFNUQVJURklMRTogc3RyaW5ncy5qc1xuXHQvLyBUcmFuc2xhdGFibGUgc3RyaW5nc1xuXHQvL1xuXHQvLyBTZWUgaW5zdHJ1Y3Rpb25zIGF0XG5cdC8vIHtAbGluayBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHMvVHJhbnNsYXRpb259XG5cdHBnLnN0cmluZyA9IHtcblx0XHQvLyBzdW1tYXJ5IGRhdGEsIHNlYXJjaGluZyBldGMuXG5cdFx0YXJ0aWNsZTogJ2FydGljbGUnLFxuXHRcdGNhdGVnb3J5OiAnY2F0ZWdvcnknLFxuXHRcdGNhdGVnb3JpZXM6ICdjYXRlZ29yaWVzJyxcblx0XHRpbWFnZTogJ2ltYWdlJyxcblx0XHRpbWFnZXM6ICdpbWFnZXMnLFxuXHRcdHN0dWI6ICdzdHViJyxcblx0XHQnc2VjdGlvbiBzdHViJzogJ3NlY3Rpb24gc3R1YicsXG5cdFx0J0VtcHR5IHBhZ2UnOiAnRW1wdHkgcGFnZScsXG5cdFx0a0I6ICdrQicsXG5cdFx0Ynl0ZXM6ICdieXRlcycsXG5cdFx0ZGF5OiAnZGF5Jyxcblx0XHRkYXlzOiAnZGF5cycsXG5cdFx0aG91cjogJ2hvdXInLFxuXHRcdGhvdXJzOiAnaG91cnMnLFxuXHRcdG1pbnV0ZTogJ21pbnV0ZScsXG5cdFx0bWludXRlczogJ21pbnV0ZXMnLFxuXHRcdHNlY29uZDogJ3NlY29uZCcsXG5cdFx0c2Vjb25kczogJ3NlY29uZHMnLFxuXHRcdHdlZWs6ICd3ZWVrJyxcblx0XHR3ZWVrczogJ3dlZWtzJyxcblx0XHRzZWFyY2g6ICdzZWFyY2gnLFxuXHRcdFNlYXJjaEhpbnQ6ICdGaW5kIEVuZ2xpc2ggV2lraXBlZGlhIGFydGljbGVzIGNvbnRhaW5pbmcgJXMnLFxuXHRcdHdlYjogJ3dlYicsXG5cdFx0Z2xvYmFsOiAnZ2xvYmFsJyxcblx0XHQvLyBhcnRpY2xlLXJlbGF0ZWQgYWN0aW9ucyBhbmQgaW5mb1xuXHRcdC8vIChzb21lIGFjdGlvbnMgYWxzbyBhcHBseSB0byB1c2VyIHBhZ2VzKVxuXHRcdGFjdGlvbnM6ICdhY3Rpb25zJyxcblx0XHRwb3B1cHNNZW51OiAncG9wdXBzJyxcblx0XHR0b2dnbGVQcmV2aWV3c0hpbnQ6ICdUb2dnbGUgcHJldmlldyBnZW5lcmF0aW9uIGluIHBvcHVwcyBvbiB0aGlzIHBhZ2UnLFxuXHRcdCdlbmFibGUgcHJldmlld3MnOiAnZW5hYmxlIHByZXZpZXdzJyxcblx0XHQnZGlzYWJsZSBwcmV2aWV3cyc6ICdkaXNhYmxlIHByZXZpZXdzJyxcblx0XHQndG9nZ2xlIHByZXZpZXdzJzogJ3RvZ2dsZSBwcmV2aWV3cycsXG5cdFx0J3Nob3cgcHJldmlldyc6ICdzaG93IHByZXZpZXcnLFxuXHRcdHJlc2V0OiAncmVzZXQnLFxuXHRcdCdtb3JlLi4uJzogJ21vcmUuLi4nLFxuXHRcdGRpc2FibGU6ICdkaXNhYmxlIHBvcHVwcycsXG5cdFx0ZGlzYWJsZVBvcHVwc0hpbnQ6ICdEaXNhYmxlIHBvcHVwcyBvbiB0aGlzIHBhZ2UuIFJlbG9hZCBwYWdlIHRvIHJlLWVuYWJsZS4nLFxuXHRcdGhpc3RvcnlmZWVkSGludDogJ1JTUyBmZWVkIG9mIHJlY2VudCBjaGFuZ2VzIHRvIHRoaXMgcGFnZScsXG5cdFx0cHVyZ2VQb3B1cHNIaW50OiAnUmVzZXQgcG9wdXBzLCBjbGVhcmluZyBhbGwgY2FjaGVkIHBvcHVwIGRhdGEuJyxcblx0XHRQb3B1cHNIaW50OiAnUmVzZXQgcG9wdXBzLCBjbGVhcmluZyBhbGwgY2FjaGVkIHBvcHVwIGRhdGEuJyxcblx0XHRzcGFjZWJhcjogJ3NwYWNlJyxcblx0XHR2aWV3OiAndmlldycsXG5cdFx0J3ZpZXcgYXJ0aWNsZSc6ICd2aWV3IGFydGljbGUnLFxuXHRcdHZpZXdIaW50OiAnR28gdG8gJXMnLFxuXHRcdHRhbGs6ICd0YWxrJyxcblx0XHQndGFsayBwYWdlJzogJ3RhbGsgcGFnZScsXG5cdFx0J3RoaXMmbmJzcDtyZXZpc2lvbic6ICd0aGlzJm5ic3A7cmV2aXNpb24nLFxuXHRcdCdyZXZpc2lvbiAlcyBvZiAlcyc6ICdyZXZpc2lvbiAlcyBvZiAlcycsXG5cdFx0J1JldmlzaW9uICVzIG9mICVzJzogJ1JldmlzaW9uICVzIG9mICVzJyxcblx0XHQndGhlIHJldmlzaW9uIHByaW9yIHRvIHJldmlzaW9uICVzIG9mICVzJzogJ3RoZSByZXZpc2lvbiBwcmlvciB0byByZXZpc2lvbiAlcyBvZiAlcycsXG5cdFx0J1RvZ2dsZSBpbWFnZSBzaXplJzogJ0NsaWNrIHRvIHRvZ2dsZSBpbWFnZSBzaXplJyxcblx0XHRkZWw6ICdkZWwnLFxuXHRcdGRlbGV0ZTogJ2RlbGV0ZScsXG5cdFx0ZGVsZXRlSGludDogJ0RlbGV0ZSAlcycsXG5cdFx0dW5kZWxldGVTaG9ydDogJ3VuJyxcblx0XHRVbmRlbGV0ZUhpbnQ6ICdTaG93IHRoZSBkZWxldGlvbiBoaXN0b3J5IGZvciAlcycsXG5cdFx0cHJvdGVjdDogJ3Byb3RlY3QnLFxuXHRcdHByb3RlY3RIaW50OiAnUmVzdHJpY3QgZWRpdGluZyByaWdodHMgdG8gJXMnLFxuXHRcdHVucHJvdGVjdFNob3J0OiAndW4nLFxuXHRcdHVucHJvdGVjdEhpbnQ6ICdBbGxvdyAlcyB0byBiZSBlZGl0ZWQgYnkgYW55b25lIGFnYWluJyxcblx0XHQnc2VuZCB0aGFua3MnOiAnc2VuZCB0aGFua3MnLFxuXHRcdFRoYW5rc0hpbnQ6ICdTZW5kIGEgdGhhbmsgeW91IG5vdGlmaWNhdGlvbiB0byB0aGlzIHVzZXInLFxuXHRcdG1vdmU6ICdtb3ZlJyxcblx0XHQnbW92ZSBwYWdlJzogJ21vdmUgcGFnZScsXG5cdFx0TW92ZXBhZ2VIaW50OiAnQ2hhbmdlIHRoZSB0aXRsZSBvZiAlcycsXG5cdFx0ZWRpdDogJ2VkaXQnLFxuXHRcdCdlZGl0IGFydGljbGUnOiAnZWRpdCBhcnRpY2xlJyxcblx0XHRlZGl0SGludDogJ0NoYW5nZSB0aGUgY29udGVudCBvZiAlcycsXG5cdFx0J2VkaXQgdGFsayc6ICdlZGl0IHRhbGsnLFxuXHRcdG5ldzogJ25ldycsXG5cdFx0J25ldyB0b3BpYyc6ICduZXcgdG9waWMnLFxuXHRcdG5ld1NlY3Rpb25IaW50OiAnU3RhcnQgYSBuZXcgc2VjdGlvbiBvbiAlcycsXG5cdFx0J251bGwgZWRpdCc6ICdudWxsIGVkaXQnLFxuXHRcdG51bGxFZGl0SGludDogJ1N1Ym1pdCBhbiBlZGl0IHRvICVzLCBtYWtpbmcgbm8gY2hhbmdlcyAnLFxuXHRcdGhpc3Q6ICdoaXN0Jyxcblx0XHRoaXN0b3J5OiAnaGlzdG9yeScsXG5cdFx0aGlzdG9yeUhpbnQ6ICdMaXN0IHRoZSBjaGFuZ2VzIG1hZGUgdG8gJXMnLFxuXHRcdGxhc3Q6ICdwcmV2Jyxcblx0XHRsYXN0RWRpdDogJ2xhc3RFZGl0Jyxcblx0XHQnbWFyayBwYXRyb2xsZWQnOiAnbWFyayBwYXRyb2xsZWQnLFxuXHRcdG1hcmtwYXRyb2xsZWRIaW50OiAnTWFyayB0aGlzIGVkaXQgYXMgcGF0cm9sbGVkJyxcblx0XHQnQ291bGQgbm90IG1hcmtlZCB0aGlzIGVkaXQgYXMgcGF0cm9sbGVkJzogJ0NvdWxkIG5vdCBtYXJrZWQgdGhpcyBlZGl0IGFzIHBhdHJvbGxlZCcsXG5cdFx0J3Nob3cgbGFzdCBlZGl0JzogJ21vc3QgcmVjZW50IGVkaXQnLFxuXHRcdCdTaG93IHRoZSBsYXN0IGVkaXQnOiAnU2hvdyB0aGUgZWZmZWN0cyBvZiB0aGUgbW9zdCByZWNlbnQgY2hhbmdlJyxcblx0XHRsYXN0Q29udHJpYjogJ2xhc3RDb250cmliJyxcblx0XHQnbGFzdCBzZXQgb2YgZWRpdHMnOiAnbGF0ZXN0IGVkaXRzJyxcblx0XHRsYXN0Q29udHJpYkhpbnQ6ICdTaG93IHRoZSBuZXQgZWZmZWN0IG9mIGNoYW5nZXMgbWFkZSBieSB0aGUgbGFzdCBlZGl0b3InLFxuXHRcdGN1cjogJ2N1cicsXG5cdFx0ZGlmZkN1cjogJ2RpZmZDdXInLFxuXHRcdCdTaG93IGNoYW5nZXMgc2luY2UgcmV2aXNpb24gJXMnOiAnU2hvdyBjaGFuZ2VzIHNpbmNlIHJldmlzaW9uICVzJyxcblx0XHQnJXMgb2xkJzogJyVzIG9sZCcsXG5cdFx0b2xkRWRpdDogJ29sZEVkaXQnLFxuXHRcdHB1cmdlOiAncHVyZ2UnLFxuXHRcdHB1cmdlSGludDogJ0RlbWFuZCBhIGZyZXNoIGNvcHkgb2YgJXMnLFxuXHRcdHJhdzogJ3NvdXJjZScsXG5cdFx0cmF3SGludDogJ0Rvd25sb2FkIHRoZSBzb3VyY2Ugb2YgJXMnLFxuXHRcdHJlbmRlcjogJ3NpbXBsZScsXG5cdFx0cmVuZGVySGludDogJ1Nob3cgYSBwbGFpbiBIVE1MIHZlcnNpb24gb2YgJXMnLFxuXHRcdCdTaG93IHRoZSBlZGl0IG1hZGUgdG8gZ2V0IHJldmlzaW9uJzogJ1Nob3cgdGhlIGVkaXQgbWFkZSB0byBnZXQgcmV2aXNpb24nLFxuXHRcdHNpbmNlTWU6ICdzaW5jZU1lJyxcblx0XHQnY2hhbmdlcyBzaW5jZSBtaW5lJzogJ2RpZmYgbXkgZWRpdCcsXG5cdFx0c2luY2VNZUhpbnQ6ICdTaG93IGNoYW5nZXMgc2luY2UgbXkgbGFzdCBlZGl0Jyxcblx0XHRcIkNvdWxkbid0IGZpbmQgYW4gZWRpdCBieSAlc1xcbmluIHRoZSBsYXN0ICVzIGVkaXRzIHRvXFxuJXNcIjpcblx0XHRcdFwiQ291bGRuJ3QgZmluZCBhbiBlZGl0IGJ5ICVzXFxuaW4gdGhlIGxhc3QgJXMgZWRpdHMgdG9cXG4lc1wiLFxuXHRcdGVkczogJ2VkcycsXG5cdFx0ZWRpdG9yczogJ2VkaXRvcnMnLFxuXHRcdGVkaXRvckxpc3RIaW50OiAnTGlzdCB0aGUgdXNlcnMgd2hvIGhhdmUgZWRpdGVkICVzJyxcblx0XHRyZWxhdGVkOiAncmVsYXRlZCcsXG5cdFx0cmVsYXRlZENoYW5nZXM6ICdyZWxhdGVkQ2hhbmdlcycsXG5cdFx0J3JlbGF0ZWQgY2hhbmdlcyc6ICdyZWxhdGVkIGNoYW5nZXMnLFxuXHRcdFJlY2VudGNoYW5nZXNsaW5rZWRIaW50OiAnU2hvdyBjaGFuZ2VzIGluIGFydGljbGVzIHJlbGF0ZWQgdG8gJXMnLFxuXHRcdGVkaXRPbGQ6ICdlZGl0T2xkJyxcblx0XHRydjogJ3J2Jyxcblx0XHRyZXZlcnQ6ICdyZXZlcnQnLFxuXHRcdHJldmVydEhpbnQ6ICdSZXZlcnQgdG8gJXMnLFxuXHRcdGRlZmF1bHRwb3B1cFJldmlld2VkU3VtbWFyeTpcblx0XHRcdCdBY2NlcHRlZCBieSByZXZpZXdpbmcgdGhlIFtbU3BlY2lhbDpkaWZmLyVzLyVzfGRpZmZlcmVuY2VdXSBiZXR3ZWVuIHRoaXMgdmVyc2lvbiBhbmQgcHJldmlvdXNseSBhY2NlcHRlZCB2ZXJzaW9uIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cFJlZGxpbmtTdW1tYXJ5OlxuXHRcdFx0J1JlbW92aW5nIGxpbmsgdG8gZW1wdHkgcGFnZSBbWyVzXV0gdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwRml4RGFic1N1bW1hcnk6XG5cdFx0XHQnRGlzYW1iaWd1YXRlIFtbJXNdXSB0byBbWyVzXV0gdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwRml4UmVkaXJzU3VtbWFyeTpcblx0XHRcdCdSZWRpcmVjdCBieXBhc3MgZnJvbSBbWyVzXV0gdG8gW1slc11dIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cEV4dGVuZGVkUmV2ZXJ0U3VtbWFyeTpcblx0XHRcdCdSZXZlcnQgdG8gcmV2aXNpb24gZGF0ZWQgJXMgYnkgJXMsIG9sZGlkICVzIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cFJldmVydFRvUHJldmlvdXNTdW1tYXJ5OlxuXHRcdFx0J1JldmVydCB0byB0aGUgcmV2aXNpb24gcHJpb3IgdG8gcmV2aXNpb24gJXMgdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwUmV2ZXJ0U3VtbWFyeTogJ1JldmVydCB0byByZXZpc2lvbiAlcyB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBRdWVyaWVkUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnk6XG5cdFx0XHQnUmV2ZXJ0IHRvIHRoZSByZXZpc2lvbiBwcmlvciB0byByZXZpc2lvbiAkMSBkYXRlZCAkMiBieSAkMyB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBRdWVyaWVkUmV2ZXJ0U3VtbWFyeTpcblx0XHRcdCdSZXZlcnQgdG8gcmV2aXNpb24gJDEgZGF0ZWQgJDIgYnkgJDMgdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwUm1EYWJMaW5rU3VtbWFyeTpcblx0XHRcdCdSZW1vdmUgbGluayB0byBkYWIgcGFnZSBbWyVzXV0gdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0UmVkaXJlY3RzOiAnUmVkaXJlY3RzJyxcblx0XHQnIHRvICc6ICcgdG8gJyxcblx0XHQnQnlwYXNzIHJlZGlyZWN0JzogJ0J5cGFzcyByZWRpcmVjdCcsXG5cdFx0J0ZpeCB0aGlzIHJlZGlyZWN0JzogJ0ZpeCB0aGlzIHJlZGlyZWN0Jyxcblx0XHRkaXNhbWJpZzogJ2Rpc2FtYmlnJyxcblx0XHRkaXNhbWJpZ0hpbnQ6ICdEaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvIFtbJXNdXScsXG5cdFx0J0NsaWNrIHRvIGRpc2FtYmlndWF0ZSB0aGlzIGxpbmsgdG86JzogJ0NsaWNrIHRvIGRpc2FtYmlndWF0ZSB0aGlzIGxpbmsgdG86Jyxcblx0XHQncmVtb3ZlIHRoaXMgbGluayc6ICdyZW1vdmUgdGhpcyBsaW5rJyxcblx0XHQncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnOiAncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnLFxuXHRcdCdyZW1vdmUgYWxsIGxpbmtzIHRvIHRoaXMgZGlzYW1iaWcgcGFnZSBmcm9tIHRoaXMgYXJ0aWNsZSc6XG5cdFx0XHQncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIGRpc2FtYmlnIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnLFxuXHRcdG1haW5saW5rOiAnbWFpbmxpbmsnLFxuXHRcdHdpa2lMaW5rOiAnd2lraUxpbmsnLFxuXHRcdHdpa2lMaW5rczogJ3dpa2lMaW5rcycsXG5cdFx0J2xpbmtzIGhlcmUnOiAnbGlua3MgaGVyZScsXG5cdFx0d2hhdExpbmtzSGVyZTogJ3doYXRMaW5rc0hlcmUnLFxuXHRcdCd3aGF0IGxpbmtzIGhlcmUnOiAnd2hhdCBsaW5rcyBoZXJlJyxcblx0XHRXaGF0bGlua3NoZXJlSGludDogJ0xpc3QgdGhlIHBhZ2VzIHRoYXQgYXJlIGh5cGVybGlua2VkIHRvICVzJyxcblx0XHR1bndhdGNoU2hvcnQ6ICd1bicsXG5cdFx0d2F0Y2hUaGluZ3k6ICd3YXRjaCcsXG5cdFx0d2F0Y2hIaW50OiAnQWRkICVzIHRvIG15IHdhdGNobGlzdCcsXG5cdFx0dW53YXRjaEhpbnQ6ICdSZW1vdmUgJXMgZnJvbSBteSB3YXRjaGxpc3QnLFxuXHRcdCdPbmx5IGZvdW5kIG9uZSBlZGl0b3I6ICVzIG1hZGUgJXMgZWRpdHMnOiAnT25seSBmb3VuZCBvbmUgZWRpdG9yOiAlcyBtYWRlICVzIGVkaXRzJyxcblx0XHQnJXMgc2VlbXMgdG8gYmUgdGhlIGxhc3QgZWRpdG9yIHRvIHRoZSBwYWdlICVzJzogJyVzIHNlZW1zIHRvIGJlIHRoZSBsYXN0IGVkaXRvciB0byB0aGUgcGFnZSAlcycsXG5cdFx0cnNzOiAncnNzJyxcblx0XHQvLyBkaWZmIHByZXZpZXdzXG5cdFx0J0RpZmYgdHJ1bmNhdGVkIGZvciBwZXJmb3JtYW5jZSByZWFzb25zJzogJ0RpZmYgdHJ1bmNhdGVkIGZvciBwZXJmb3JtYW5jZSByZWFzb25zJyxcblx0XHQnT2xkIHJldmlzaW9uJzogJ09sZCByZXZpc2lvbicsXG5cdFx0J05ldyByZXZpc2lvbic6ICdOZXcgcmV2aXNpb24nLFxuXHRcdCdTb21ldGhpbmcgd2VudCB3cm9uZyA6LSgnOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcgOi0oJyxcblx0XHQnRW1wdHkgcmV2aXNpb24sIG1heWJlIG5vbi1leGlzdGVudCc6ICdFbXB0eSByZXZpc2lvbiwgbWF5YmUgbm9uLWV4aXN0ZW50Jyxcblx0XHQnVW5rbm93biBkYXRlJzogJ1Vua25vd24gZGF0ZScsXG5cdFx0Ly8gb3RoZXIgc3BlY2lhbCBwcmV2aWV3c1xuXHRcdCdFbXB0eSBjYXRlZ29yeSc6ICdFbXB0eSBjYXRlZ29yeScsXG5cdFx0J0NhdGVnb3J5IG1lbWJlcnMgKCVzIHNob3duKSc6ICdDYXRlZ29yeSBtZW1iZXJzICglcyBzaG93biknLFxuXHRcdCdObyBpbWFnZSBsaW5rcyBmb3VuZCc6ICdObyBpbWFnZSBsaW5rcyBmb3VuZCcsXG5cdFx0J0ZpbGUgbGlua3MnOiAnRmlsZSBsaW5rcycsXG5cdFx0J05vIGltYWdlIGZvdW5kJzogJ05vIGltYWdlIGZvdW5kJyxcblx0XHQnSW1hZ2UgZnJvbSBDb21tb25zJzogJ0ltYWdlIGZyb20gQ29tbW9ucycsXG5cdFx0J0Rlc2NyaXB0aW9uIHBhZ2UnOiAnRGVzY3JpcHRpb24gcGFnZScsXG5cdFx0J0FsdCB0ZXh0Oic6ICdBbHQgdGV4dDonLFxuXHRcdHJldmRlbDogJ0hpZGRlbiByZXZpc2lvbicsXG5cdFx0Ly8gdXNlci1yZWxhdGVkIGFjdGlvbnMgYW5kIGluZm9cblx0XHR1c2VyOiAndXNlcicsXG5cdFx0J3VzZXImbmJzcDtwYWdlJzogJ3VzZXImbmJzcDtwYWdlJyxcblx0XHQndXNlciB0YWxrJzogJ3VzZXIgdGFsaycsXG5cdFx0J2VkaXQgdXNlciB0YWxrJzogJ2VkaXQgdXNlciB0YWxrJyxcblx0XHQnbGVhdmUgY29tbWVudCc6ICdsZWF2ZSBjb21tZW50Jyxcblx0XHRlbWFpbDogJ2VtYWlsJyxcblx0XHQnZW1haWwgdXNlcic6ICdlbWFpbCB1c2VyJyxcblx0XHRFbWFpbHVzZXJIaW50OiAnU2VuZCBhbiBlbWFpbCB0byAlcycsXG5cdFx0c3BhY2U6ICdzcGFjZScsXG5cdFx0UHJlZml4SW5kZXhIaW50OiAnU2hvdyBwYWdlcyBpbiB0aGUgdXNlcnNwYWNlIG9mICVzJyxcblx0XHRjb3VudDogJ2NvdW50Jyxcblx0XHQnZWRpdCBjb3VudGVyJzogJ2VkaXQgY291bnRlcicsXG5cdFx0ZWRpdENvdW50ZXJMaW5rSGludDogJ0NvdW50IHRoZSBjb250cmlidXRpb25zIG1hZGUgYnkgJXMnLFxuXHRcdGNvbnRyaWJzOiAnY29udHJpYnMnLFxuXHRcdGNvbnRyaWJ1dGlvbnM6ICdjb250cmlidXRpb25zJyxcblx0XHRkZWxldGVkQ29udHJpYnM6ICdkZWxldGVkIGNvbnRyaWJ1dGlvbnMnLFxuXHRcdERlbGV0ZWRjb250cmlidXRpb25zSGludDogJ0xpc3QgZGVsZXRlZCBlZGl0cyBtYWRlIGJ5ICVzJyxcblx0XHRDb250cmlidXRpb25zSGludDogJ0xpc3QgdGhlIGNvbnRyaWJ1dGlvbnMgbWFkZSBieSAlcycsXG5cdFx0bG9nOiAnbG9nJyxcblx0XHQndXNlciBsb2cnOiAndXNlciBsb2cnLFxuXHRcdHVzZXJMb2dIaW50OiBcIlNob3cgJXMncyB1c2VyIGxvZ1wiLFxuXHRcdGFyaW46ICdBUklOIGxvb2t1cCcsXG5cdFx0J0xvb2sgdXAgJXMgaW4gQVJJTiB3aG9pcyBkYXRhYmFzZSc6ICdMb29rIHVwICVzIGluIHRoZSBBUklOIHdob2lzIGRhdGFiYXNlJyxcblx0XHR1bmJsb2NrU2hvcnQ6ICd1bicsXG5cdFx0YmxvY2s6ICdibG9jaycsXG5cdFx0J2Jsb2NrIHVzZXInOiAnYmxvY2sgdXNlcicsXG5cdFx0SXBibG9ja2xpc3RIaW50OiAnVW5ibG9jayAlcycsXG5cdFx0QmxvY2tpcEhpbnQ6ICdQcmV2ZW50ICVzIGZyb20gZWRpdGluZycsXG5cdFx0J2Jsb2NrIGxvZyc6ICdibG9jayBsb2cnLFxuXHRcdGJsb2NrTG9nSGludDogJ1Nob3cgdGhlIGJsb2NrIGxvZyBmb3IgJXMnLFxuXHRcdHByb3RlY3RMb2dIaW50OiAnU2hvdyB0aGUgcHJvdGVjdGlvbiBsb2cgZm9yICVzJyxcblx0XHRwYWdlTG9nSGludDogJ1Nob3cgdGhlIHBhZ2UgbG9nIGZvciAlcycsXG5cdFx0ZGVsZXRlTG9nSGludDogJ1Nob3cgdGhlIGRlbGV0aW9uIGxvZyBmb3IgJXMnLFxuXHRcdCdJbnZhbGlkICVzICVzJzogJ1RoZSBvcHRpb24gJXMgaXMgaW52YWxpZDogJXMnLFxuXHRcdCdObyBiYWNrbGlua3MgZm91bmQnOiAnTm8gYmFja2xpbmtzIGZvdW5kJyxcblx0XHQnIGFuZCBtb3JlJzogJyBhbmQgbW9yZScsXG5cdFx0dW5kbzogJ3VuZG8nLFxuXHRcdHVuZG9IaW50OiAndW5kbyB0aGlzIGVkaXQnLFxuXHRcdCdEb3dubG9hZCBwcmV2aWV3IGRhdGEnOiAnRG93bmxvYWQgcHJldmlldyBkYXRhJyxcblx0XHQnSW52YWxpZCBvciBJUCB1c2VyJzogJ0ludmFsaWQgb3IgSVAgdXNlcicsXG5cdFx0J05vdCBhIHJlZ2lzdGVyZWQgdXNlcm5hbWUnOiAnTm90IGEgcmVnaXN0ZXJlZCB1c2VybmFtZScsXG5cdFx0QkxPQ0tFRDogJ0JMT0NLRUQnLFxuXHRcdCdIYXMgYmxvY2tzJzogJ0hhcyBibG9ja3MnLFxuXHRcdCcgZWRpdHMgc2luY2U6ICc6ICcgZWRpdHMgc2luY2U6ICcsXG5cdFx0J2xhc3QgZWRpdCBvbiAnOiAnbGFzdCBlZGl0IG9uICcsXG5cdFx0J2hlL2hpbSc6ICdoZS9oaW0nLFxuXHRcdCdzaGUvaGVyJzogJ3NoZS9oZXInLFxuXHRcdC8vIEF1dG9lZGl0aW5nXG5cdFx0J0VudGVyIGEgbm9uLWVtcHR5IGVkaXQgc3VtbWFyeSBvciBwcmVzcyBjYW5jZWwgdG8gYWJvcnQnOlxuXHRcdFx0J0VudGVyIGEgbm9uLWVtcHR5IGVkaXQgc3VtbWFyeSBvciBwcmVzcyBjYW5jZWwgdG8gYWJvcnQnLFxuXHRcdCdGYWlsZWQgdG8gZ2V0IHJldmlzaW9uIGluZm9ybWF0aW9uLCBwbGVhc2UgZWRpdCBtYW51YWxseS5cXG5cXG4nOlxuXHRcdFx0J0ZhaWxlZCB0byBnZXQgcmV2aXNpb24gaW5mb3JtYXRpb24sIHBsZWFzZSBlZGl0IG1hbnVhbGx5LlxcblxcbicsXG5cdFx0J1RoZSAlcyBidXR0b24gaGFzIGJlZW4gYXV0b21hdGljYWxseSBjbGlja2VkLiBQbGVhc2Ugd2FpdCBmb3IgdGhlIG5leHQgcGFnZSB0byBsb2FkLic6XG5cdFx0XHQnVGhlICVzIGJ1dHRvbiBoYXMgYmVlbiBhdXRvbWF0aWNhbGx5IGNsaWNrZWQuIFBsZWFzZSB3YWl0IGZvciB0aGUgbmV4dCBwYWdlIHRvIGxvYWQuJyxcblx0XHQnQ291bGQgbm90IGZpbmQgYnV0dG9uICVzLiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGluIHlvdXIgamF2YXNjcmlwdCBmaWxlLic6XG5cdFx0XHQnQ291bGQgbm90IGZpbmQgYnV0dG9uICVzLiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGluIHlvdXIgamF2YXNjcmlwdCBmaWxlLicsXG5cdFx0Ly8gUG9wdXBzIHNldHVwXG5cdFx0J09wZW4gZnVsbC1zaXplIGltYWdlJzogJ09wZW4gZnVsbC1zaXplIGltYWdlJyxcblx0XHRhdXRvZWRpdF92ZXJzaW9uOiAnbnAyMDE0MDQxNicsXG5cdH07XG5cdGNvbnN0IHBvcHVwU3RyaW5nID0gKHN0cikgPT4ge1xuXHRcdGlmIChtZXNzYWdlICE9PSB1bmRlZmluZWQgJiYgbWVzc2FnZSAmJiBtZXNzYWdlW3N0cl0pIHtcblx0XHRcdHJldHVybiBtZXNzYWdlW3N0cl07XG5cdFx0fVxuXHRcdGlmIChwZy5zdHJpbmdbc3RyXSkge1xuXHRcdFx0cmV0dXJuIHBnLnN0cmluZ1tzdHJdO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RyO1xuXHR9O1xuXHRjb25zdCB0cHJpbnRmID0gKHN0ciwgc3VicykgPT4ge1xuXHRcdGlmICh0eXBlb2Ygc3VicyAhPT0gdHlwZW9mIFtdKSB7XG5cdFx0XHRzdWJzID0gW3N1YnNdO1xuXHRcdH1cblx0XHRyZXR1cm4gc2ltcGxlUHJpbnRmKHBvcHVwU3RyaW5nKHN0ciksIHN1YnMpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBzdHJpbmdzLmpzXG5cdC8vIFNUQVJURklMRTogcnVuLmpzXG5cdC8vIFJ1biB0aGluZ3Ncblx0Ly8gRm9yIHNvbWUgcmVhc29uIHBvcHVwcyByZXF1aXJlcyBhIGZ1bGx5IGxvYWRlZCBwYWdlIGpRdWVyeS5yZWFkeSguLi4pIGNhdXNlcyBwcm9ibGVtcyBmb3Igc29tZS5cblx0Ly8gVGhlIG9sZCBhZGRPbmxvYWRIb29rIGRpZCBzb21ldGhpbmcgc2ltaWxhciB0byB0aGUgYmVsb3dcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcblx0XHRhdXRvRWRpdCgpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIHdpbGwgc2V0dXAgcG9wdXBzXG5cdFx0JCh3aW5kb3cpLm9uKCdsb2FkJywgYXV0b0VkaXQpO1xuXHR9XG5cdC8vIFN1cHBvcnQgZm9yIE1lZGlhV2lraSdzIGxpdmUgcHJldmlldywgVmlzdWFsRWRpdG9yJ3Mgc2F2ZXMgYW5kIEVjaG8ncyBmbHlvdXQuXG5cdCgoKSA9PiB7XG5cdFx0bGV0IG9uY2UgPSB0cnVlO1xuXHRcdGNvbnN0IGR5bmFtaWNDb250ZW50SGFuZGxlciA9ICgkY29udGVudCkgPT4ge1xuXHRcdFx0Ly8gVHJ5IHRvIGRldGVjdCB0aGUgaG9vayBmaXJlZCBvbiBpbml0aWFsIHBhZ2UgbG9hZCBhbmQgZGlzcmVnYXJkXG5cdFx0XHQvLyBpdCwgd2UgYWxyZWFkeSBob29rIHRvIG9ubG9hZCAocG9zc2libHkgdG8gZGlmZmVyZW50IHBhcnRzIG9mXG5cdFx0XHQvLyBwYWdlIC0gaXQncyBjb25maWd1cmFibGUpIGFuZCBydW5uaW5nIHR3aWNlIG1pZ2h0IGJlIGJhZC4gVWdseS4uLlxuXHRcdFx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgPT09ICdtdy1jb250ZW50LXRleHQnICYmIG9uY2UpIHtcblx0XHRcdFx0b25jZSA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZWdpc3Rlckhvb2tzRm9yVmlzaWJsZU5hdnBvcHMgPSAoKSA9PiB7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBwZy5jdXJyZW50LmxpbmtzICYmIGkgPCBwZy5jdXJyZW50LmxpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmF2cG9wID0gcGcuY3VycmVudC5saW5rc1tpXS5uYXZwb3B1cDtcblx0XHRcdFx0XHRpZiAoIW5hdnBvcCB8fCAhbmF2cG9wLmlzVmlzaWJsZSgpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0TmF2cG9wdXAudHJhY2tlci5hZGRIb29rKHBvc0NoZWNrZXJIb29rKG5hdnBvcCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZG9JdCA9ICgpID0+IHtcblx0XHRcdFx0cmVnaXN0ZXJIb29rc0ZvclZpc2libGVOYXZwb3BzKCk7XG5cdFx0XHRcdCRjb250ZW50LmVhY2goKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdGVsZW1lbnQucmFuU2V0dXBUb29sdGlwc0FscmVhZHkgPSBmYWxzZTtcblx0XHRcdFx0XHRzZXR1cFRvb2x0aXBzKGVsZW1lbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRzZXR1cFBvcHVwcyhkb0l0KTtcblx0XHR9O1xuXHRcdC8vIFRoaXMgaG9vayBpcyBhbHNvIGZpcmVkIGFmdGVyIHBhZ2UgbG9hZC5cblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGR5bmFtaWNDb250ZW50SGFuZGxlcik7XG5cdFx0bXcuaG9vaygnZXh0LmVjaG8ub3ZlcmxheS5iZWZvcmVTaG93aW5nT3ZlcmxheScpLmFkZCgoJG92ZXJsYXkpID0+IHtcblx0XHRcdGR5bmFtaWNDb250ZW50SGFuZGxlcigkb3ZlcmxheS5maW5kKCcubXctZWNoby1zdGF0ZScpKTtcblx0XHR9KTtcblx0fSkoKTtcblx0Ly8gRU5ERklMRTogcnVuLmpzXG59O1xuXG5leHBvcnQge3BvcHVwc307XG4iLCAiaW1wb3J0ICcuL05hdmlnYXRpb25fcG9wdXBzLmxlc3MnO1xuaW1wb3J0IHtwb3B1cHN9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuJChwb3B1cHMpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQVUsdUJBQXVCOztBQ0RyRCxJQUFNQyxVQUFtQzs7RUFFeENDLFNBQVNDLE9BQU9DLE1BQU0sTUFBTSxJQUFJO0VBQ2hDQyxVQUFVRixPQUFPQyxNQUFNLE9BQU8sS0FBSztFQUNuQ0UsWUFBWUgsT0FBT0MsTUFBTSxPQUFPLEtBQUs7RUFDckNHLE9BQU9KLE9BQU9DLE1BQU0sT0FBTyxLQUFLO0VBQ2hDSSxRQUFRTCxPQUFPQyxNQUFNLE9BQU8sS0FBSztFQUNqQ0ssTUFBTTtFQUNOLGdCQUFnQk4sT0FBT0MsTUFBTSxPQUFPLEtBQUs7RUFDekMsY0FBY0QsT0FBT0MsTUFBTSxPQUFPLEtBQUs7RUFDdkNNLElBQUlQLE9BQU9DLE1BQU0sNEJBQTRCLDJCQUEyQjtFQUN4RU8sT0FBT1IsT0FBT0MsTUFBTSxNQUFNLEtBQUs7RUFDL0JRLEtBQUs7RUFDTEMsTUFBTTtFQUNOQyxNQUFNWCxPQUFPQyxNQUFNLE1BQU0sSUFBSTtFQUM3QlcsT0FBT1osT0FBT0MsTUFBTSxNQUFNLElBQUk7RUFDOUJZLFFBQVE7RUFDUkMsU0FBUztFQUNUQyxRQUFRO0VBQ1JDLFNBQVM7RUFDVEMsTUFBTTtFQUNOQyxPQUFPO0VBQ1BDLE9BQU87RUFDUEMsUUFBUTtFQUNSQyxNQUFNO0VBQ05DLE9BQU87RUFDUEMsUUFBUXZCLE9BQU9DLE1BQU0sTUFBTSxJQUFJO0VBQy9CdUIsWUFBWXhCLE9BQU9DLE1BQU0sZUFBZSxhQUFhO0VBQ3JEd0IsS0FBSztFQUNMQyxRQUFRO0VBQ1IsV0FBVzs7O0VBR1hDLFNBQVMzQixPQUFPQyxNQUFNLE1BQU0sSUFBSTs7RUFFaEMyQixZQUFZO0VBQ1osb0JBQW9CNUIsT0FBT0MsTUFBTSxRQUFRLE1BQU07RUFDL0M0QixvQkFBb0I3QixPQUFPQyxNQUFNLHFCQUFxQixtQkFBbUI7RUFDekUsbUJBQW1CRCxPQUFPQyxNQUFNLFVBQVUsUUFBUTtFQUNsRDZCLE9BQU85QixPQUFPQyxNQUFNLE1BQU0sSUFBSTtFQUM5QjhCLFNBQVM7RUFDVEMsbUJBQW1CaEMsT0FBT0MsTUFDekIsMkJBQ0EsMkJBQ0Q7RUFDQWdDLGlCQUFpQmpDLE9BQU9DLE1BQU0sdUJBQXVCLHFCQUFxQjtFQUMxRWlDLFlBQVlsQyxPQUFPQyxNQUFNLHVCQUF1QixxQkFBcUI7RUFDckVrQyxVQUFVO0VBQ1ZDLE1BQU1wQyxPQUFPQyxNQUFNLE1BQU0sSUFBSTtFQUM3QixnQkFBZ0JELE9BQU9DLE1BQU0sUUFBUSxNQUFNO0VBQzNDb0MsVUFBVXJDLE9BQU9DLE1BQU0sU0FBUyxPQUFPO0VBQ3ZDcUMsTUFBTXRDLE9BQU9DLE1BQU0sTUFBTSxJQUFJO0VBQzdCLGFBQWFELE9BQU9DLE1BQU0sT0FBTyxLQUFLO0VBQ3RDLHNCQUFzQkQsT0FBT0MsTUFBTSxTQUFTLE9BQU87RUFDbkQscUJBQXFCRCxPQUFPQyxNQUFNLGtCQUFrQixnQkFBZ0I7RUFDcEUscUJBQXFCRCxPQUFPQyxNQUFNLGtCQUFrQixnQkFBZ0I7RUFDcEUsMkNBQTJDRCxPQUFPQyxNQUNqRCwwQkFDQSx3QkFDRDtFQUNBLHFCQUFxQkQsT0FBT0MsTUFBTSxZQUFZLFVBQVU7RUFDeERzQyxLQUFLdkMsT0FBT0MsTUFBTSxNQUFNLElBQUk7O0VBRTVCdUMsUUFBUXhDLE9BQU9DLE1BQU0sTUFBTSxJQUFJO0VBQy9Cd0MsWUFBWXpDLE9BQU9DLE1BQU0sU0FBUyxPQUFPO0VBQ3pDeUMsZUFBZTFDLE9BQU9DLE1BQU0sTUFBTSxJQUFJO0VBQ3RDMEMsY0FBYzNDLE9BQU9DLE1BQU0sU0FBUyxPQUFPO0VBQzNDMkMsU0FBUzVDLE9BQU9DLE1BQU0sTUFBTSxJQUFJO0VBQ2hDNEMsYUFBYTdDLE9BQU9DLE1BQU0sU0FBUyxPQUFPO0VBQzFDNkMsZ0JBQWdCOUMsT0FBT0MsTUFBTSxNQUFNLElBQUk7RUFDdkM4QyxlQUFlL0MsT0FBT0MsTUFBTSxjQUFjLFlBQVk7RUFDdEQrQyxNQUFNaEQsT0FBT0MsTUFBTSxNQUFNLElBQUk7RUFDN0IsYUFBYUQsT0FBT0MsTUFBTSxRQUFRLE1BQU07RUFDeENnRCxjQUFjakQsT0FBT0MsTUFBTSxhQUFhLFdBQVc7RUFDbkRpRCxNQUFNbEQsT0FBT0MsTUFBTSxNQUFNLElBQUk7O0VBRTdCLGdCQUFnQkQsT0FBT0MsTUFBTSxRQUFRLE1BQU07RUFDM0NrRCxVQUFVbkQsT0FBT0MsTUFBTSxhQUFhLFdBQVc7RUFDL0MsYUFBYUQsT0FBT0MsTUFBTSxTQUFTLE9BQU87RUFDMUNtRCxLQUFLcEQsT0FBT0MsTUFBTSxLQUFLLEdBQUc7RUFDMUIsYUFBYUQsT0FBT0MsTUFBTSxPQUFPLEtBQUs7RUFDdENvRCxnQkFBZ0JyRCxPQUFPQyxNQUFNLGlCQUFpQixlQUFlO0VBQzdELGFBQWFELE9BQU9DLE1BQU0sT0FBTyxLQUFLO0VBQ3RDcUQsY0FBY3RELE9BQU9DLE1BQU0saUJBQWlCLGVBQWU7RUFDM0RzRCxNQUFNdkQsT0FBT0MsTUFBTSxNQUFNLElBQUk7O0VBRTdCdUQsU0FBU3hELE9BQU9DLE1BQU0sTUFBTSxJQUFJO0VBQ2hDd0QsYUFBYXpELE9BQU9DLE1BQU0sWUFBWSxVQUFVO0VBQ2hEeUQsTUFBTTFELE9BQU9DLE1BQU0sTUFBTSxJQUFJOztFQUU3QjBELFVBQVUzRCxPQUFPQyxNQUFNLFFBQVEsTUFBTTtFQUNyQyxrQkFBa0JELE9BQU9DLE1BQU0sVUFBVSxRQUFRO0VBQ2pELHNCQUFzQkQsT0FBT0MsTUFBTSxlQUFlLGFBQWE7RUFDL0QyRCxhQUFhNUQsT0FBT0MsTUFBTSxRQUFRLE1BQU07RUFDeEMscUJBQXFCRCxPQUFPQyxNQUFNLFFBQVEsTUFBTTtFQUNoRDRELGlCQUFpQjdELE9BQU9DLE1BQU0sbUJBQW1CLGlCQUFpQjtFQUNsRTZELEtBQUs5RCxPQUFPQyxNQUFNLE1BQU0sSUFBSTtFQUM1QjhELFNBQVMvRCxPQUFPQyxNQUFNLFlBQVksVUFBVTtFQUM1QyxrQ0FBa0NELE9BQU9DLE1BQU0sa0JBQWtCLGdCQUFnQjtFQUNqRixVQUFVRCxPQUFPQyxNQUFNLGFBQWEsV0FBVzs7RUFFL0MrRCxTQUFTaEUsT0FBT0MsTUFBTSxPQUFPLEtBQUs7RUFDbENnRSxPQUFPakUsT0FBT0MsTUFBTSxRQUFRLE1BQU07RUFDbENpRSxXQUFXbEUsT0FBT0MsTUFBTSxpQkFBaUIsZUFBZTtFQUN4RGtFLEtBQUtuRSxPQUFPQyxNQUFNLE9BQU8sS0FBSztFQUM5Qm1FLFNBQVNwRSxPQUFPQyxNQUFNLGNBQWMsWUFBWTtFQUNoRG9FLFFBQVFyRSxPQUFPQyxNQUFNLE9BQU8sS0FBSztFQUNqQ3FFLFlBQVl0RSxPQUFPQyxNQUFNLHlCQUF5Qix1QkFBdUI7RUFDekUsc0NBQXNDRCxPQUFPQyxNQUFNLGVBQWUsYUFBYTtFQUMvRXNFLFNBQVN2RSxPQUFPQyxNQUFNLE1BQU0sSUFBSTtFQUNoQyxzQkFBc0JELE9BQU9DLE1BQU0sV0FBVyxTQUFTO0VBQ3ZEdUUsYUFBYXhFLE9BQU9DLE1BQU0saUJBQWlCLGVBQWU7RUFDMUQsNERBQTRERCxPQUFPQyxNQUNsRSwrQkFDQSw2QkFDRDtFQUNBd0UsS0FBS3pFLE9BQU9DLE1BQU0sTUFBTSxJQUFJO0VBQzVCeUUsU0FBUzFFLE9BQU9DLE1BQU0sT0FBTyxLQUFLO0VBQ2xDMEUsZ0JBQWdCM0UsT0FBT0MsTUFBTSxnQkFBZ0IsZUFBZTtFQUM1RDJFLFNBQVM1RSxPQUFPQyxNQUFNLE1BQU0sSUFBSTtFQUNoQzRFLGdCQUFnQjdFLE9BQU9DLE1BQU0sUUFBUSxNQUFNO0VBQzNDLG1CQUFtQkQsT0FBT0MsTUFBTSxRQUFRLE1BQU07RUFDOUM2RSx5QkFBeUI5RSxPQUFPQyxNQUFNLGVBQWUsYUFBYTtFQUNsRThFLFNBQVMvRSxPQUFPQyxNQUFNLFFBQVEsTUFBTTs7RUFFcEMrRSxJQUFJaEYsT0FBT0MsTUFBTSxNQUFNLElBQUk7RUFDM0JnRixRQUFRakYsT0FBT0MsTUFBTSxNQUFNLElBQUk7RUFDL0JpRixZQUFZbEYsT0FBT0MsTUFBTSxVQUFVLFFBQVE7RUFDM0NrRixNQUFNbkYsT0FBT0MsTUFBTSxNQUFNLElBQUk7RUFDN0JtRixVQUFVcEYsT0FBT0MsTUFBTSxVQUFVLFFBQVE7RUFDekNvRiw0QkFBNEJyRixPQUFPQyxNQUNsQywyQkFDQSx5QkFDRDtFQUNBcUYsNEJBQTRCdEYsT0FBT0MsTUFBTSw0QkFBNEIsMEJBQTBCO0VBQy9Gc0YsOEJBQThCdkYsT0FBT0MsTUFDcEMsZ0NBQ0EsK0JBQ0Q7RUFDQXVGLG1DQUFtQ3hGLE9BQU9DLE1BQ3pDLDhCQUNBLDRCQUNEO0VBQ0F3RixxQ0FBcUN6RixPQUFPQyxNQUMzQywyQkFDQSx5QkFDRDtFQUNBeUYsMkJBQTJCMUYsT0FBT0MsTUFBTSxxQkFBcUIsbUJBQW1CO0VBQ2hGMEYsNENBQTRDM0YsT0FBT0MsTUFDbEQscUNBQ0EsbUNBQ0Q7RUFDQTJGLGtDQUFrQzVGLE9BQU9DLE1BQ3hDLDhCQUNBLDRCQUNEO0VBQ0E0Riw4QkFBOEI3RixPQUFPQyxNQUNwQyw0QkFDQSwwQkFDRDtFQUNBNkYsV0FBVzlGLE9BQU9DLE1BQU0sT0FBTyxLQUFLOzs7O0VBSXBDLG1CQUFtQkQsT0FBT0MsTUFBTSxTQUFTLFFBQVE7RUFDakQscUJBQXFCRCxPQUFPQyxNQUFNLFNBQVMsUUFBUTtFQUNuRDhGLFVBQVUvRixPQUFPQyxNQUFNLE9BQU8sS0FBSzs7RUFFbkMrRixjQUFjaEcsT0FBT0MsTUFBTSxtQkFBbUIsaUJBQWlCO0VBQy9ELHVDQUF1Q0QsT0FBT0MsTUFBTSxnQkFBZ0IsY0FBYztFQUNsRixvQkFBb0JELE9BQU9DLE1BQU0sUUFBUSxNQUFNO0VBQy9DLG1EQUFtREQsT0FBT0MsTUFDekQsaUJBQ0EsZUFDRDtFQUNBLDREQUE0REQsT0FBT0MsTUFDbEUsbUJBQ0EsaUJBQ0Q7RUFDQWdHLFVBQVVqRyxPQUFPQyxNQUFNLE9BQU8sS0FBSzs7RUFFbkNpRyxVQUFVbEcsT0FBT0MsTUFBTSxTQUFTLE9BQU87RUFDdkNrRyxXQUFXbkcsT0FBT0MsTUFBTSxTQUFTLE9BQU87RUFDeEMsY0FBY0QsT0FBT0MsTUFBTSxNQUFNLElBQUk7RUFDckNtRyxlQUFlcEcsT0FBT0MsTUFBTSxRQUFRLE1BQU07RUFDMUMsbUJBQW1CRCxPQUFPQyxNQUFNLFFBQVEsTUFBTTtFQUM5Q29HLG1CQUFtQnJHLE9BQU9DLE1BQU0sZ0JBQWdCLGNBQWM7RUFDOURxRyxjQUFjdEcsT0FBT0MsTUFBTSxNQUFNLElBQUk7RUFDckNzRyxhQUFhdkcsT0FBT0MsTUFBTSxNQUFNLElBQUk7O0VBRXBDdUcsV0FBV3hHLE9BQU9DLE1BQU0saUJBQWlCLGVBQWU7RUFDeER3RyxhQUFhekcsT0FBT0MsTUFBTSxnQkFBZ0IsY0FBYztFQUN4RCwyQ0FBMkNELE9BQU9DLE1BQ2pELHlCQUNBLHVCQUNEO0VBQ0EsaURBQWlERCxPQUFPQyxNQUN2RCx3QkFDQSxzQkFDRDtFQUNBeUcsS0FBSzFHLE9BQU9DLE1BQU0sT0FBTyxLQUFLOztFQUU5QiwwQ0FBMENELE9BQU9DLE1BQU0saUJBQWlCLGVBQWU7RUFDdkYsZ0JBQWdCRCxPQUFPQyxNQUFNLE9BQU8sS0FBSztFQUN6QyxnQkFBZ0JELE9BQU9DLE1BQU0sT0FBTyxLQUFLO0VBQ3pDLDRCQUE0QkQsT0FBT0MsTUFBTSxZQUFZLFVBQVU7RUFDL0Qsc0NBQXNDRCxPQUFPQyxNQUFNLGVBQWUsYUFBYTtFQUMvRSxnQkFBZ0JELE9BQU9DLE1BQU0sUUFBUSxNQUFNOztFQUUzQyxrQkFBa0JELE9BQU9DLE1BQU0sUUFBUSxNQUFNO0VBQzdDLCtCQUErQkQsT0FBT0MsTUFBTSxlQUFlLGFBQWE7RUFDeEUsd0JBQXdCRCxPQUFPQyxNQUFNLFdBQVcsU0FBUztFQUN6RCxjQUFjRCxPQUFPQyxNQUFNLFFBQVEsTUFBTTtFQUN6QyxlQUFlRCxPQUFPQyxNQUFNLGlCQUFpQixlQUFlO0VBQzVELGdCQUFnQkQsT0FBT0MsTUFBTSxjQUFjLFlBQVk7RUFDdkQsa0JBQWtCRCxPQUFPQyxNQUFNLFNBQVMsT0FBTztFQUMvQyxnQkFBZ0JELE9BQU9DLE1BQU0sa0JBQWtCLGdCQUFnQjtFQUMvRCxvQkFBb0JELE9BQU9DLE1BQU0sc0JBQXNCLG1CQUFtQjs7RUFFMUUwRyxNQUFNM0csT0FBT0MsTUFBTSxNQUFNLEtBQUs7O0VBRTlCLGtCQUFrQkQsT0FBT0MsTUFBTSxPQUFPLE1BQU07RUFDNUMsYUFBYUQsT0FBT0MsTUFBTSxRQUFRLE9BQU87RUFDekMsa0JBQWtCRCxPQUFPQyxNQUFNLFVBQVUsU0FBUztFQUNsRCxpQkFBaUJELE9BQU9DLE1BQU0sTUFBTSxJQUFJO0VBQ3hDMkcsT0FBTzVHLE9BQU9DLE1BQU0sTUFBTSxJQUFJO0VBQzlCLGNBQWNELE9BQU9DLE1BQU0sUUFBUSxPQUFPO0VBQzFDNEcsZUFBZTdHLE9BQU9DLE1BQU0sZUFBZSxhQUFhO0VBQ3hENkcsT0FBTzlHLE9BQU9DLE1BQU0sT0FBTyxLQUFLOztFQUVoQzhHLGlCQUFpQi9HLE9BQU9DLE1BQU0saUJBQWlCLGdCQUFnQjtFQUMvRCtHLE9BQU9oSCxPQUFPQyxNQUFNLE1BQU0sSUFBSTs7RUFFOUIsZ0JBQWdCRCxPQUFPQyxNQUFNLFFBQVEsTUFBTTtFQUMzQ2dILGNBQWNqSCxPQUFPQyxNQUFNLFlBQVksVUFBVTtFQUNqRGlILFVBQVVsSCxPQUFPQyxNQUFNLE1BQU0sSUFBSTtFQUNqQ2tILGVBQWVuSCxPQUFPQyxNQUFNLE1BQU0sSUFBSTtFQUN0Q21ILGlCQUFpQnBILE9BQU9DLE1BQU0sVUFBVSxRQUFRO0VBQ2hEb0gsbUJBQW1CckgsT0FBT0MsTUFBTSxZQUFZLFdBQVc7RUFDdkRxSCxNQUFNdEgsT0FBT0MsTUFBTSxLQUFLLEdBQUc7RUFDM0JzSCxrQkFBa0J2SCxPQUFPQyxNQUFNLG1CQUFtQixpQkFBaUI7RUFDbkV1SCxLQUFLeEgsT0FBT0MsTUFBTSxNQUFNLElBQUk7RUFDNUIsWUFBWUQsT0FBT0MsTUFBTSxRQUFRLE9BQU87RUFDeEN3SCxhQUFhekgsT0FBT0MsTUFBTSxlQUFlLGNBQWM7RUFDdkR5SCxjQUFjMUgsT0FBT0MsTUFBTSxNQUFNLElBQUk7RUFDckMwSCxPQUFPM0gsT0FBT0MsTUFBTSxNQUFNLElBQUk7RUFDOUIsY0FBY0QsT0FBT0MsTUFBTSxRQUFRLE9BQU87RUFDMUMySCxpQkFBaUI1SCxPQUFPQyxNQUFNLFNBQVMsT0FBTztFQUM5QzRILGFBQWE3SCxPQUFPQyxNQUFNLFNBQVMsT0FBTztFQUMxQyxhQUFhRCxPQUFPQyxNQUFNLFFBQVEsTUFBTTtFQUN4QzZILGNBQWM5SCxPQUFPQyxNQUFNLGVBQWUsYUFBYTtFQUN2RDhILGdCQUFnQi9ILE9BQU9DLE1BQU0sZUFBZSxhQUFhO0VBQ3pEK0gsYUFBYWhJLE9BQU9DLE1BQU0sYUFBYSxXQUFXO0VBQ2xEZ0ksZUFBZWpJLE9BQU9DLE1BQU0sZUFBZSxhQUFhO0VBQ3hELGlCQUFpQkQsT0FBT0MsTUFBTSxnQkFBZ0IsY0FBYztFQUM1RGlJLEdBQUc7O0VBRUgsMkRBQTJEbEksT0FBT0MsTUFDakUsbUJBQ0EsaUJBQ0Q7RUFDQSxpRUFBaUVELE9BQU9DLE1BQ3ZFLHlCQUNBLHVCQUNEO0VBQ0Esd0ZBQXdGRCxPQUFPQyxNQUM5Riw0QkFDQSwwQkFDRDtFQUNBLGdGQUFnRkQsT0FBT0MsTUFDdEYsb0NBQ0Esa0NBQ0Q7O0VBRUEsd0JBQXdCRCxPQUFPQyxNQUFNLFdBQVcsU0FBUzs7RUFFekRrSSxnQkFBZ0JuSSxPQUFPQyxNQUFNLGtCQUFrQixnQkFBZ0I7RUFDL0QsbUJBQW1CRCxPQUFPQyxNQUFNLFFBQVEsTUFBTTtFQUM5QyxnQkFBZ0JELE9BQU9DLE1BQU0sUUFBUSxNQUFNO0VBQzNDbUksaUJBQWlCcEksT0FBT0MsTUFBTSxxQkFBcUIsbUJBQW1CO0VBQ3RFLGVBQWVELE9BQU9DLE1BQU0sUUFBUSxNQUFNO0VBQzFDb0ksWUFBWXJJLE9BQU9DLE1BQU0sZ0JBQWdCLGVBQWU7RUFDeEQsa0JBQWtCRCxPQUFPQyxNQUFNLFVBQVUsUUFBUTtFQUNqRHFJLG1CQUFtQnRJLE9BQU9DLE1BQU0sYUFBYSxXQUFXO0VBQ3hELDJDQUEyQ0QsT0FBT0MsTUFBTSxlQUFlLGFBQWE7RUFDcEZzSSw2QkFBNkJ2SSxPQUFPQyxNQUFNLHNCQUFzQixvQkFBb0I7RUFDcEYsc0JBQXNCRCxPQUFPQyxNQUFNLGFBQWEsV0FBVztFQUMzRCxvQkFBb0JELE9BQU9DLE1BQU0sU0FBUyxPQUFPO0VBQ2pELGFBQWFELE9BQU9DLE1BQU0sY0FBYyxZQUFZO0VBQ3BEdUksUUFBUXhJLE9BQU9DLE1BQU0sV0FBVyxTQUFTO0VBQ3pDd0ksMEJBQTBCekksT0FBT0MsTUFBTSxnQkFBZ0IsZUFBZTtFQUN0RSxzQkFBc0JELE9BQU9DLE1BQU0sV0FBVyxTQUFTO0VBQ3ZELGFBQWFELE9BQU9DLE1BQU0sVUFBVSxRQUFRO0VBQzVDLHlCQUF5QkQsT0FBT0MsTUFBTSxVQUFVLFFBQVE7RUFDeEQsNkJBQTZCRCxPQUFPQyxNQUFNLFdBQVcsVUFBVTtFQUMvRHlJLFNBQVMxSSxPQUFPQyxNQUFNLE9BQU8sS0FBSztFQUNsQyxjQUFjRCxPQUFPQyxNQUFNLFNBQVMsT0FBTztFQUMzQyxrQkFBa0JELE9BQU9DLE1BQU0sYUFBYSxXQUFXO0VBQ3ZELGlCQUFpQkQsT0FBT0MsTUFBTSxXQUFXLFNBQVM7RUFDbEQwSSxlQUFlM0ksT0FBT0MsTUFBTSxlQUFlLGFBQWE7RUFDeEQySSxjQUFjNUksT0FBT0MsTUFBTSxVQUFVLFFBQVE7RUFDN0MsV0FBV0QsT0FBT0MsTUFBTSxRQUFRLE9BQU87RUFDdkMsS0FBSztFQUNMLEtBQUs7RUFDTDRJLFFBQVE3SSxPQUFPQyxNQUFNLFFBQVEsTUFBTTtFQUNuQzZJLFFBQVE5SSxPQUFPQyxNQUFNLFFBQVEsTUFBTTtFQUNuQyxnQkFBZ0JELE9BQU9DLE1BQU0sU0FBUyxTQUFTO0VBQy9DOEksTUFBTS9JLE9BQU9DLE1BQU0sTUFBTSxJQUFJO0VBQzdCLFFBQVE7RUFFUitJLGtCQUFrQjtFQUNsQkMsaUJBQWlCakosT0FBT0MsTUFBTSxjQUFjLGFBQWE7RUFDekRpSixpQkFBaUJsSixPQUFPQyxNQUFNLFdBQVcsU0FBUzs7RUFFbEQsMEJBQTBCRCxPQUFPQyxNQUFNLFdBQVcsVUFBVTtFQUM1RGtKLFdBQVc7RUFDWEMsT0FBTztBQUNSOztBQ3hUQSxJQUFNQyxTQUFTQSxNQUFNO0FBTXBCLFFBQU1DLEtBQUs7SUFDVjFKLEtBQUssQ0FBQztJQUNOMkosSUFBSSxDQUFDO0lBQ0xDLElBQUksQ0FBQztJQUNMQyxRQUFRLENBQUM7SUFDVEMsTUFBTSxDQUFDO0lBQ1AvQyxNQUFNLENBQUM7SUFDUGdELE1BQU0sQ0FBQztJQUNQQyxRQUFRLENBQUM7SUFDVEMsZUFBZSxDQUFDO0lBQ2hCQyxNQUFNLENBQUM7SUFDUEMsT0FBTyxDQUFDO0lBQ1JDLFlBQVksQ0FBQztJQUNiQyxPQUFPLENBQUM7SUFDUkMsU0FBUyxDQUFDO0lBQ1ZDLFNBQVMsQ0FBQztJQUNWQyxJQUFJLENBQUM7SUFDTEMsV0FBVztFQUNaO0FBR0EsTUFBSXJLLE9BQU9zSixNQUFNLEVBQUV0SixPQUFPc0osY0FBY2dCLGNBQWM7QUFDckQ7RUFDRDtBQUVBdEssU0FBT3NKLEtBQUtBO0FBR1osUUFBTWlCLGdCQUFnQkEsQ0FBQ0MsV0FBV0MsUUFBUUMsT0FBT0MsWUFBWTtBQUM1RG5ELFFBQUEsNEJBQUFvRCxPQUFnQ0osV0FBUyxXQUFBLEVBQUFJLE9BQVlILE1BQU0sQ0FBRTtBQUM3RCxRQUFJLENBQUNELFdBQVc7QUFFZixVQUFJSyxXQUFXLHNCQUFzQixLQUFLQyxZQUFZQSxTQUFTQyxZQUFZRCxTQUFTQyxTQUFTQyxZQUFZO0FBQ3hHRixpQkFBU0MsU0FBU0MsV0FBV0MsWUFBWUM7TUFDMUM7QUFFQVYsa0JBQVlXLHVCQUF1QjtJQUNwQztBQUNBLFFBQUksQ0FBQ1YsVUFBVSxDQUFDQyxTQUFTRixVQUFVWSx5QkFBeUI7QUFDM0Q7SUFDRDtBQUNBWixjQUFVWSwwQkFBMEIsQ0FBQ1g7QUFDckMsVUFBTVksVUFBVWIsVUFBVWMsaUJBQWlCLEdBQUc7QUFDOUNDLHNCQUFrQkYsU0FBUyxHQUFHLEtBQUssS0FBS1osUUFBUUUsT0FBTztFQUN4RDtBQUNBLFFBQU1RLHlCQUF5QkEsTUFBTTtBQUNwQyxRQUFJTixXQUFXLHVCQUF1QixHQUFHO0FBQ3hDLGFBQ0NDLFNBQVNVLGNBQWMsZ0NBQWdDLEtBQ3ZEVixTQUFTVSxjQUFjLGFBQWEsS0FDcENWLFNBQVNVLGNBQWMsVUFBVSxLQUNqQ1YsU0FBU1UsY0FBYyxVQUFVLEtBQ2pDVjtJQUVGO0FBQ0EsV0FBT0E7RUFDUjtBQUNBLFFBQU1TLG9CQUFvQixTQUFTRSxtQkFBa0JKLFNBQVNLLE9BQU9DLFNBQVNDLE9BQU9uQixRQUFRRSxZQUFZa0IsTUFBTTtBQUM5R3JFLFFBQ0NzRSxhQUFhLHFDQUFxQyxDQUNqRFQsU0FDQUssT0FDQUMsU0FDQUMsT0FDQW5CLFFBQ0FFLFNBQ0EsR0FBR2tCLElBQUEsQ0FDSCxDQUNGO0FBQ0EsVUFBTUUsU0FBU0wsUUFBUUM7QUFDdkIsVUFBTUssVUFBVUMsS0FBS0MsSUFBSUgsUUFBUVYsUUFBUWMsTUFBTTtBQUMvQyxRQUFJQyxJQUFJSixVQUFVTjtBQUNsQmxFLFFBQUEsaUNBQUFvRCxPQUNrQ1MsUUFBUWMsUUFBTSxVQUFBLEVBQUF2QixPQUFXYyxPQUFLLFlBQUEsRUFBQWQsT0FBYWUsU0FBTyxZQUFBLEVBQUFmLE9BQWFvQixTQUFPLFdBQUEsRUFBQXBCLE9BQVlILE1BQU0sQ0FDMUg7QUFDQSxVQUFNNEIsWUFBWTVCLFNBQVM2QixnQkFBZ0JDO0FBRTNDLFFBQUlILElBQUksR0FBRztBQUNWLFNBQUc7QUFDRixjQUFNSSxJQUFJbkIsUUFBUVcsVUFBVUksQ0FBQztBQUM3QixZQUFJSSxNQUFNLFVBQWEsQ0FBQ0EsS0FBSyxDQUFDQSxFQUFFQyxNQUFNO0FBQ3JDakYsY0FBSSw0QkFBQW9ELE9BQTRCb0IsT0FBTyxJQUFLSSxDQUFDO0FBQzdDO1FBQ0Q7QUFDQUMsa0JBQVVHLEdBQUc3QixPQUFPO01BQ3JCLFNBQVMsRUFBRXlCO0lBQ1o7QUFDQSxRQUFJTCxTQUFTVixRQUFRYyxRQUFRO0FBQzVCTyxpQkFBVyxNQUFNO0FBQ2hCakIsMkJBQWtCSixTQUFTVSxRQUFRSixTQUFTQyxPQUFPbkIsUUFBUUUsT0FBTztNQUNuRSxHQUFHaUIsS0FBSztJQUNULE9BQU87QUFDTixVQUFJLENBQUNuQixVQUFVLENBQUNJLFdBQVcsZUFBZSxHQUFHO0FBQzVDOEIsc0JBQWM7TUFDZjtBQUNBckQsU0FBR1EsS0FBSzhDLGtCQUFrQjtJQUMzQjtFQUNEO0FBR0EsUUFBTUQsZ0JBQWdCQSxNQUFNO0FBQzNCLFVBQU1FLE1BQU0vQixTQUFTVSxjQUFjLE1BQU07QUFDekMsUUFBSXFCLEtBQUs7QUFDUixZQUFNQyxXQUFXRCxJQUFJdkIsaUJBQWlCLEdBQUc7QUFDekMsWUFBTXlCLFNBQVNELFNBQVNYO0FBQ3hCLGVBQVNDLElBQUksR0FBR0EsSUFBSVcsUUFBUSxFQUFFWCxHQUFHO0FBQ2hDRSxzQkFBY1EsU0FBU1YsQ0FBQyxHQUFHLElBQUk7TUFDaEM7SUFDRDtFQUNEO0FBQ0EsUUFBTUcsYUFBYUEsQ0FBQ0MsR0FBRzdCLFlBQVk7QUFDbEMsUUFBSSxDQUFDcUMsWUFBWVIsQ0FBQyxHQUFHO0FBQ3BCO0lBQ0Q7QUFDQUEsTUFBRVMsY0FBY0M7QUFDaEJWLE1BQUVXLGFBQWFDO0FBQ2ZaLE1BQUVhLGNBQWNDO0FBQ2hCZCxNQUFFZSxXQUFXO0FBQ2JmLE1BQUU3QixVQUFVQTtFQUNiO0FBQ0EsUUFBTTJCLGdCQUFpQkUsT0FBTTtBQUM1QixRQUFJLENBQUNBLEVBQUVlLFVBQVU7QUFDaEI7SUFDRDtBQUNBZixNQUFFUyxjQUFjO0FBQ2hCVCxNQUFFVyxhQUFhO0FBQ2YsUUFBSVgsRUFBRWdCLGVBQWU7QUFDcEJoQixRQUFFaUIsUUFBUWpCLEVBQUVnQjtJQUNiO0FBQ0FoQixNQUFFZSxXQUFXO0VBQ2Q7QUFDQSxRQUFNRyxjQUFlbEIsT0FBTTtBQUMxQkEsTUFBRWdCLGtCQUFGaEIsRUFBRWdCLGdCQUFrQmhCLEVBQUVpQjtBQUN0QmpCLE1BQUVpQixRQUFRO0VBQ1g7QUFDQSxRQUFNRSxlQUFnQm5CLE9BQU07QUFDM0IsUUFBSUEsRUFBRWlCLFNBQVMsQ0FBQ2pCLEVBQUVnQixlQUFlO0FBQ2hDO0lBQ0Q7QUFDQWhCLE1BQUVpQixRQUFRakIsRUFBRWdCO0VBQ2I7QUFDQSxRQUFNSSxnQkFBaUJDLFFBQU87QUFDN0IsVUFBTUMsZ0JBQWdCakQsV0FBVyxlQUFlO0FBQ2hELFFBQUksT0FBT2lELGtCQUFrQixVQUFVO0FBQ3RDLFlBQU1DLGNBQWNBLE1BQU07QUFDekJGLFdBQUdHLFFBQVFDLE1BQU1DLFdBQUEsR0FBQXRELE9BQWNrRCxlQUFhLElBQUE7QUFDNUNELFdBQUdLLFdBQVdKO01BQ2Y7QUFDQUQsU0FBR00sUUFBUUosYUFBYSxVQUFVLFFBQVE7SUFDM0M7QUFDQUYsT0FBR00sUUFBUUMsbUJBQW1CLFVBQVUsT0FBTztBQUMvQ1AsT0FBR00sUUFBUUUsa0JBQWtCLFFBQVEsUUFBUTtFQUM5QztBQUNBLFFBQU1DLDRCQUE2QjlCLE9BQU07QUFFeEMxQixhQUFTeUQsb0JBQW9CLFdBQVcvQixFQUFFZ0MscUJBQXFCLEtBQUs7QUFDcEUxRCxhQUFTeUQsb0JBQW9CLFNBQVMvQixFQUFFZ0MscUJBQXFCLEtBQUs7RUFDbkU7QUFDQSxRQUFNdEIsb0JBQW9CLFNBQVN1QixtQkFBa0JDLEtBQUs7QUFDekQsUUFBSSxDQUFDQSxPQUFPMU8sT0FBTzJPLE9BQU87QUFDekJELFlBQU0xTyxPQUFPMk87SUFDZDtBQUdBLFFBQUk5RCxXQUFXLGVBQWUsR0FBRztBQUdoQyxZQUFNK0QsU0FBUy9ELFdBQVcscUJBQXFCO0FBQy9DLFlBQU1nRSxNQUFNRCxXQUFXLFlBQVksVUFBVTtBQUM3QyxZQUFNRSxPQUFPO0FBQ2JBLFdBQUtOLHNCQUF1Qk8sVUFBUTtBQUNuQ0MsMkJBQW1CRixNQUFNQyxJQUFHO01BQzdCO0FBQ0FqRSxlQUFTbUUsaUJBQWlCSixLQUFLQyxLQUFLTixxQkFBcUIsS0FBSztJQUMvRDtBQUNBLFdBQU9RLG1CQUFtQixNQUFNTixHQUFHO0VBQ3BDO0FBUUEsUUFBTVEsaUJBQWtCMUMsT0FBTTtBQUM3QixVQUFNMkMsU0FBU0MsTUFBTUMsV0FBVzdDLENBQUM7QUFFakMsVUFBTThDLE9BQU9ILE9BQU9JO0FBQ3BCLFFBQUksQ0FBQywrQkFBK0JDLEtBQUtGLElBQUksR0FBRztBQUMvQyxhQUFPO0lBQ1I7QUFDQSxVQUFNRyxTQUFTTCxNQUFNTSxRQUFRQyxTQUFTbEQsSUFBSTtBQUMxQyxRQUFJZ0QsT0FBT0csU0FBUyxJQUFJLE1BQU1ULE9BQU9TLFNBQVMsSUFBSSxHQUFHO0FBQ3BELGFBQU87SUFDUjtBQUNBLFFBQUlDLEtBQUsvRSxTQUFTZ0YsZUFBQSxHQUFBbEYsT0FBa0IwRSxJQUFJLENBQUU7QUFDMUMsV0FBT08sTUFBTSxPQUFPQSxHQUFHRSxhQUFhLFVBQVU7QUFDN0MsWUFBTUMsS0FBS0gsR0FBR0UsU0FBU0UsWUFBWTtBQUNuQyxVQUFJRCxPQUFPLE1BQU07QUFDaEIsZUFBT0g7TUFDUixXQUFXRyxPQUFPLFFBQVE7QUFDekIsZUFBTztNQUNSLFdBQVdILEdBQUdLLFlBQVk7QUFDekJMLGFBQUtBLEdBQUdLO01BQ1QsT0FBTztBQUNOLGVBQU87TUFDUjtJQUNEO0FBQ0EsV0FBTztFQUNSO0FBQ0EsUUFBTUMsa0JBQWtCQSxDQUFDQyxHQUFHQyxXQUFXO0FBQ3RDQyxpQkFBQSxPQUFBMUYsT0FBb0J3RixFQUFFRyxTQUFTLEdBQUksZ0JBQWdCRixPQUFPRyxRQUFRO0VBQ25FO0FBQ0EsUUFBTUMsa0JBQW1CL0IsU0FBUTtBQUNoQyxVQUFNZ0MsTUFBTTdGLFdBQVcsZUFBZTtBQUN0QyxRQUFJLENBQUM2RixLQUFLO0FBQ1QsYUFBTztJQUNSO0FBQ0EsUUFBSSxDQUFDaEMsT0FBTzFPLE9BQU8yTyxPQUFPO0FBQ3pCRCxZQUFNMU8sT0FBTzJPO0lBQ2Q7QUFDQSxXQUFPRCxPQUFPZ0MsT0FBT2hDLElBQUEsR0FBQTlELE9BQU84RixJQUFJVCxZQUFZLEdBQUMsS0FBQSxDQUFBO0VBQzlDO0FBRUEsUUFBTVUsb0JBQW9CQSxDQUFDQyxJQUFJbEMsUUFBUTtBQUN0QyxRQUFJLENBQUM3RCxXQUFXLGVBQWUsR0FBRztBQUNqQyxhQUFPO0lBQ1I7QUFHQSxVQUFNK0QsU0FBUy9ELFdBQVcscUJBQXFCO0FBQy9DLFdBQVErRCxXQUFXLFlBQVk2QixnQkFBZ0IvQixHQUFHLEtBQU9FLFdBQVcsYUFBYSxDQUFDNkIsZ0JBQWdCL0IsR0FBRztFQUN0RztBQUNBLFFBQU1NLHFCQUFxQkEsQ0FBQ3hDLEdBQUdrQyxRQUFRO0FBQ3RDLFFBQUksQ0FBQ2lDLGtCQUFrQm5FLEdBQUdrQyxHQUFHLEdBQUc7QUFDL0I7SUFDRDtBQUNBLFFBQUk3RCxXQUFXLGNBQWMsR0FBRztBQUMvQjZDLGtCQUFZbEIsQ0FBQztJQUNkO0FBQ0EsUUFBSUEsTUFBTWxELEdBQUdhLFFBQVEwRyxRQUFRckUsRUFBRXNFLFlBQVl0RSxFQUFFc0UsU0FBU0MsVUFBVSxHQUFHO0FBQ2xFO0lBQ0Q7QUFDQXpILE9BQUdhLFFBQVEwRyxPQUFPckU7QUFDbEIsUUFBSTNCLFdBQVcsY0FBYyxLQUFLLENBQUN2QixHQUFHTSxPQUFPb0gsZ0JBQWdCO0FBRTVEQyxpQkFBVyxrQkFBa0IsVUFBVTtJQUN4QztBQUNBLFVBQU1sUixVQUFVLElBQUlxUCxNQUFNLEVBQUVDLFdBQVc3QyxDQUFDO0FBRXhDbEQsT0FBR2EsUUFBUXBLLFVBQVVBO0FBQ3JCLFFBQUksQ0FBQ3lNLEVBQUVzRSxVQUFVO0FBQ2hCdEUsUUFBRXNFLFdBQVdJLFlBQVkxRSxHQUFHek0sT0FBTztBQUNuQ3VKLFNBQUdhLFFBQVFnSCxVQUFVM0UsRUFBRUMsSUFBSSxJQUFJRCxFQUFFc0U7QUFDakN4SCxTQUFHYSxRQUFRaUgsTUFBTUMsS0FBSzdFLENBQUM7SUFDeEI7QUFDQSxRQUFJQSxFQUFFc0UsU0FBU1EsWUFBWSxRQUFROUUsRUFBRXNFLFNBQVNRLFlBQVksR0FBRztBQUU1REMseUJBQW1CL0UsR0FBR3pNLE9BQU87SUFDOUI7QUFDQXlNLE1BQUVzRSxTQUFTVSxpQkFBaUJoRixFQUFFc0UsU0FBU1csS0FBSztBQUM1Q0Msa0JBQWNwSSxHQUFHVyxNQUFNMEgsa0JBQWtCO0FBQ3pDckksT0FBR1csTUFBTTBILHFCQUFxQkMsWUFBWUQsb0JBQW9CLEdBQUc7QUFDakUsUUFBSTlHLFdBQVcsY0FBYyxLQUFLQSxXQUFXLG9CQUFvQixLQUFLLENBQUMyQixFQUFFcUYsY0FBYztBQUN0RixZQUFNQyxJQUFJaEgsU0FBU2lILGNBQWMsS0FBSztBQUN0Q0QsUUFBRUUsWUFBWTtBQUNkLFlBQU1DLElBQUluSCxTQUFTaUgsY0FBYyxNQUFNO0FBQ3ZDRCxRQUFFSSxPQUFPRCxDQUFDO0FBQ1ZBLFFBQUVELFlBQVk7QUFDZEMsUUFBQSxLQUFBckgsT0FBT0MsV0FBVyx5QkFBeUIsQ0FBQyxDQUFBLElBQU0sTUFBTTtBQUN2RDJCLFVBQUVxRixlQUFlO0FBQ2pCQyxVQUFFN0QsTUFBTWtFLFVBQVU7QUFDbEJDLDhCQUFzQjVGLEdBQUd6TSxPQUFPO01BQ2pDO0FBQ0FrUyxRQUFFMUIsWUFBWThCLFlBQVksY0FBYztBQUN4Qy9CLG1CQUFhd0IsR0FBRyxnQkFBZ0J0RixFQUFFc0UsU0FBU04sUUFBUTtJQUNwRDtBQUNBLFFBQUloRSxFQUFFc0UsU0FBU1EsWUFBWSxHQUFHO0FBQzdCYyw0QkFBc0I1RixHQUFHek0sT0FBTztJQUNqQztFQUNEO0FBR0EsUUFBTXdSLHFCQUFxQkEsQ0FBQy9FLEdBQUd6TSxZQUFZO0FBRTFDeU0sTUFBRXNFLFNBQVN3QixlQUFlO0FBQzFCOUYsTUFBRXNFLFNBQVN5QixhQUFhQyxVQUFVaEcsQ0FBQyxDQUFDO0FBQ3BDaUcsbUJBQWU7TUFDZDNCLFVBQVV0RSxFQUFFc0U7SUFDYixDQUFDO0FBQ0QsUUFBSWpHLFdBQVcsZ0JBQWdCLEdBQUc7QUFDakMsVUFBSTZILGFBQWE3SCxXQUFXLGlCQUFpQixLQUFLO0FBQ2xELFVBQUk2SCxjQUFjQSxlQUFlLE9BQU87QUFDdkNBLHNCQUFjbEcsRUFBRXNFLFNBQVNOO01BQzFCO0FBQ0E5RCxpQkFBVyxNQUFNO0FBQ2hCRixVQUFFc0UsU0FBUzZCLGNBQWNELFVBQVU7TUFDcEMsR0FBRyxHQUFHO0lBQ1A7QUFDQSxRQUFJN0gsV0FBVyxxQkFBcUIsS0FBSzJCLEVBQUV3RixjQUFjLE9BQU87QUFDL0QxQixtQkFBQSxPQUFBMUYsT0FBb0JnSSxpQkFBaUI3UyxPQUFPLENBQUMsR0FBSSxnQkFBZ0J5TSxFQUFFc0UsU0FBU04sUUFBUTtJQUNyRjtFQUNEO0FBQ0EsUUFBTXFDLFlBQWEvQixjQUFhO0FBQy9CLFFBQUlqRyxXQUFXLGdCQUFnQixLQUFLaUcsU0FBU04sVUFBVTtBQUN0REYsbUJBQUEsWUFBQTFGLE9BQXlCa0csU0FBU04sVUFBUSxZQUFBLEVBQUE1RixPQUFha0csU0FBU1EsT0FBTyxHQUFJLGNBQWNSLFNBQVNOLFFBQVE7SUFDM0c7RUFDRDtBQUNBLFFBQU1VLGNBQWNBLENBQUMxRSxHQUFHek0sWUFBWTtBQUNuQyxVQUFNK1EsV0FBVyxJQUFJZ0MsU0FBUztBQUM5QmhDLGFBQVNpQyxPQUFPO0FBQ2hCakMsYUFBU1csUUFBUTVHLFdBQVcsWUFBWSxJQUFJO0FBRTVDaUcsYUFBU04sV0FBVyxFQUFFbEgsR0FBR2tIO0FBQ3pCTSxhQUFTa0MsZUFBZXhHO0FBQ3hCc0UsYUFBU21DLGNBQWN6RyxFQUFFN0IsV0FBVzZCLEVBQUU3QixRQUFRdUk7QUFDOUNwQyxhQUFTL1EsVUFBVUE7QUFDbkI2TixrQkFBY2tELFFBQVE7QUFDdEIsV0FBT0E7RUFDUjtBQUlBLFFBQU1xQyxzQkFBdUIzRyxPQUFNO0FBQ2xDLFdBQU8sQ0FBQzNCLFdBQVcsY0FBYyxLQUFLMkIsRUFBRXFGO0VBQ3pDO0FBSUEsUUFBTXVCLGFBQWFBLENBQUM1RyxHQUFHNUMsV0FBVztBQUNqQyxRQUFJdUosb0JBQW9CM0csQ0FBQyxHQUFHO0FBQzNCLGFBQU8zQixXQUFXakIsTUFBTTtJQUN6QjtBQUNBLFdBQU81SixPQUFPNEosTUFBTSxNQUFNLFVBQWE1SixPQUFPNEosTUFBTTtFQUNyRDtBQUNBLFFBQU13SSx3QkFBd0JBLENBQUM1RixHQUFHek0sWUFBWTtBQUM3QyxRQUFJc1Q7QUFDSixRQUFJN1A7QUFDSixVQUFNOFAsU0FBU0MsWUFBWS9HLEVBQUVDLElBQUk7QUFDakMsVUFBTStHLFFBQVFGLE9BQU9FLFVBQVUsU0FBWSxPQUFPRixPQUFPRTtBQUN6RCxRQUFJSixXQUFXNUcsR0FBRyxtQkFBbUIsR0FBRztBQUN2QyxPQUFDO1FBQUN6RCxNQUFBc0s7TUFBSSxJQUFJQztJQUNYO0FBQ0EsUUFBSUYsV0FBVzVHLEdBQUcscUJBQXFCLEdBQUc7QUFDekNoSixnQkFBVThQLE9BQU8xRSxXQUFXO0lBQzdCO0FBQ0FwQyxNQUFFc0UsU0FBU1EsVUFBVTtBQUNyQixVQUFNbUMsbUJBQW1CdkUsZUFBZTFDLENBQUM7QUFDekMsUUFBSWlILGtCQUFrQjtBQUNyQnRELHNCQUFnQnNELGtCQUFrQmpILEVBQUVzRSxRQUFRO0lBQzdDLFdBQVd1QyxTQUFRQSxVQUFTLEdBQUc7QUFDOUJLLGVBQVMzVCxTQUFTeVQsT0FBT0gsT0FBTTdHLEVBQUVzRSxRQUFRO0lBQzFDLFdBQVd0TixTQUFTO0FBQ25CbVEscUJBQWUsV0FBVzVULFNBQVN5TSxFQUFFc0UsUUFBUTtJQUM5QyxXQUFXcUMsb0JBQW9CM0csQ0FBQyxLQUFLbEQsR0FBR0MsR0FBR3JDLFNBQVNzSSxLQUFLaEQsRUFBRUMsSUFBSSxHQUFHO0FBQ2pFa0gscUJBQWUsWUFBWTVULFNBQVN5TSxFQUFFc0UsUUFBUTtJQUMvQyxXQUFXcUMsb0JBQW9CM0csQ0FBQyxLQUFLbEQsR0FBR0MsR0FBR3FLLFVBQVVwRSxLQUFLaEQsRUFBRUMsSUFBSSxHQUFHO0FBQ2xFa0gscUJBQWUsYUFBYTVULFNBQVN5TSxFQUFFc0UsUUFBUTtJQUNoRDs7TUFFQy9RLFFBQVE4VCxZQUFZLE1BQU12SyxHQUFHd0ssY0FDNUJWLFdBQVc1RyxHQUFHLHNCQUFzQixLQUFLLENBQUN1SCxvQkFBb0J2SCxDQUFDO01BQy9EO0FBQ0RtSCxxQkFBZSxvQkFBb0I1VCxTQUFTeU0sRUFBRXNFLFFBQVE7QUFDdERrRCxnQkFBVWpVLFNBQVN5TSxFQUFFc0UsUUFBUTtJQUM5QixPQUFPO0FBQ04sVUFBSS9RLFFBQVE4VCxZQUFZLE1BQU12SyxHQUFHMkssZ0JBQWdCYixXQUFXNUcsR0FBRyxzQkFBc0IsR0FBRztBQUN2Rm1ILHVCQUFlLFlBQVk1VCxTQUFTeU0sRUFBRXNFLFFBQVE7TUFDL0MsWUFDRS9RLFFBQVE4VCxZQUFZLE1BQU12SyxHQUFHNEssWUFBWW5VLFFBQVE4VCxZQUFZLE1BQU12SyxHQUFHNkssaUJBQ3ZFZixXQUFXNUcsR0FBRyxlQUFlLEdBQzVCO0FBQ0RtSCx1QkFBZSxZQUFZNVQsU0FBU3lNLEVBQUVzRSxRQUFRO01BQy9DO0FBQ0EsVUFBSXFDLG9CQUFvQjNHLENBQUMsR0FBRztBQUMzQjRILDRCQUFvQnJVLFNBQVN5VCxPQUFPaEgsRUFBRXNFLFFBQVE7TUFDL0M7SUFDRDtFQUNEO0FBQ0EsUUFBTXVELG9CQUFxQmhFLFlBQVc7QUFDckMsUUFBSUEsVUFBVUEsT0FBT2lCLFlBQVksTUFBTTtBQUN0Q2pCLGFBQU9pQixVQUFVO0lBQ2xCO0FBQ0EsTUFBRWpCLE9BQU9pQjtBQUNUdUIsY0FBVXhDLE1BQU07RUFDakI7QUFDQSxRQUFNaUUsc0JBQXVCakUsWUFBVztBQUN2QyxRQUFJQSxVQUFVQSxPQUFPaUIsU0FBUztBQUM3QixRQUFFakIsT0FBT2lCO0lBQ1Y7QUFDQXVCLGNBQVV4QyxNQUFNO0VBQ2pCO0FBQ0EsUUFBTStELHNCQUFzQkEsQ0FBQ3JVLFNBQVN5VCxPQUFPbkQsV0FBVztBQUN2REEsV0FBT2tFLFFBQVE7QUFDZkMsZ0JBQVl6VSxTQUFTeVQsT0FBT25ELE1BQU07RUFDbkM7QUFDQSxRQUFNbUUsY0FBY0EsQ0FBQ3pVLFNBQVN5VCxPQUFPbkQsV0FBVztBQUMvQyxRQUFJLENBQUNBLE9BQU9rRSxPQUFPO0FBQ2xCbEUsYUFBT29FLGtCQUFrQjFVO0lBQzFCO0FBQ0FBLFlBQVF5VCxRQUFRQTtBQUNoQkcsbUJBQWUsWUFBWTVULFNBQVNzUSxNQUFNO0VBQzNDO0FBQ0EsUUFBTXFFLHVCQUF1QkEsQ0FBQ0MsWUFBWXRFLFdBQVc7QUFFcEQsVUFBTXVFLFNBQVMsSUFBSXhGLE1BQU0sRUFBRXlGLGFBQWFGLFdBQVcsQ0FBQyxDQUFDO0FBR3JELFFBQUl0RSxPQUFPdFEsUUFBUXdQLFFBQVE7QUFDMUJxRixhQUFPckYsU0FBU2MsT0FBT3RRLFFBQVF3UDtJQUNoQztBQUNBYyxXQUFPa0U7QUFDUGxFLFdBQU95RSxjQUFjRjtBQUNyQixVQUFNRyxZQUFZQyxVQUFVSixRQUFRdkUsT0FBT3RRLE9BQU87QUFDbER1USxpQkFBYXlFLFdBQVcsa0JBQWtCMUUsT0FBT0csUUFBUTtBQUN6REgsV0FBT3RRLFVBQVU2VTtBQUNqQm5DLG1CQUFlO01BQ2Q4QixPQUFPO01BQ1BPLGFBQWFGO01BQ2I5RCxVQUFVVDtJQUNYLENBQUM7QUFDRCxXQUFPbUUsWUFBWUksUUFBUSxNQUFNdkUsTUFBTTtFQUN4QztBQUNBLFFBQU00RSxnQkFBaUJDLGNBQWE7QUFDbkMsUUFBSSxDQUFDQSxTQUFTaEMsT0FBTztBQUNwQjtJQUNEO0FBQ0EsVUFBTXlCLGFBQWFyTCxHQUFHQyxHQUFHNEwsU0FBU0MsS0FBS0YsU0FBU0csSUFBSTtBQUNwRCxRQUFJSCxTQUFTaEMsTUFBTXFCLFVBQVUsS0FBS0ksWUFBWTtBQUM3Q0QsMkJBQXFCQyxZQUFZTyxTQUFTaEMsS0FBSztBQUMvQztJQUNEO0FBQ0EsUUFBSWdDLFNBQVNoQyxNQUFNb0MsV0FBVyxDQUFDekssV0FBVyxtQkFBbUIsR0FBRztBQUMvRDBLLHVCQUFpQkwsUUFBUTtJQUMxQixPQUFPO0FBQ04sWUFBTU0sS0FBS04sU0FBU2hDLE1BQU1xQixRQUFRLHVCQUF1QjtBQUN6RFcsZUFBU2hDLE1BQU0vRSxRQUNkLE1BQU07QUFDTG9ILHlCQUFpQkwsUUFBUTtBQUN6QixlQUFPO01BQ1IsR0FDQSxVQUNBLFNBQ0FNLEVBQ0Q7SUFDRDtFQUNEO0FBQ0EsUUFBTUQsbUJBQW9CTCxjQUFhO0FBQ3RDLFFBQUksQ0FBQ0EsU0FBU2hDLE9BQU87QUFDcEI7SUFDRDtBQUNBLFVBQU11QyxXQUFXUCxTQUFTRztBQUMxQixVQUFNaEYsU0FBUzZFLFNBQVNoQztBQUN4QixVQUFNd0MsTUFBTXJGLE9BQU95RSxlQUFlekUsT0FBT29FO0FBQ3pDa0IsZ0JBQVlGLFVBQVVwRixNQUFNO0FBQzVCLFFBQUl4RixXQUFXLGtCQUFrQixHQUFHO0FBQ25DK0ssa0JBQVlILFVBQVVQLFFBQVE7QUFDOUJXLHNCQUFnQkQsWUFBWUgsVUFBVVAsUUFBUSxHQUFHN0UsT0FBT0csUUFBUTtJQUNqRTtBQUNBLFFBQUlzRixZQUFZO0FBQ2hCQSxnQkFBWUosSUFBSTdCLFlBQVksTUFBTXZLLEdBQUd3SyxZQUFZNEIsSUFBSTlGLFNBQVMsSUFBSW1HLDBCQUEwQk4sUUFBUTtBQUNwRyxRQUFJSyxXQUFXO0FBQ2Q5QixnQkFBVTVFLE1BQU15RixhQUFhaUIsU0FBUyxHQUFHekYsTUFBTTtJQUNoRDtBQUNBLFFBQUl4RixXQUFXLGVBQWUsR0FBRztBQUNoQ21MLDJCQUFxQmQsVUFBVVEsS0FBS3JGLE1BQU07SUFDM0M7RUFDRDtBQUNBLFFBQU0yRix1QkFBdUJBLENBQUNkLFVBQVVRLEtBQUtyRixXQUFXO0FBQ3ZELFFBQUk2RSxZQUFZLE9BQU9BLFNBQVNHLFNBQVMsVUFBVztBQUNuRCxVQUFJSyxJQUFJN0IsWUFBWSxNQUFNdkssR0FBRzJNLGdCQUFnQnBMLFdBQVcsMEJBQTBCLEdBQUc7QUFFcEYsY0FBTXFMLElBQUEsNkNBQUF0TCxPQUFpRHNLLFNBQVNHLEtBQzlEYyxPQUFPLEVBQ1BDLE1BQU1DLE9BQU9sUyxJQUFBbVMsb0JBQUFBLGtCQUFBQyx1QkFBQSxDQUFBLElBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBLENBQU8sRUFDcEJDLEtBQUtILE9BQU9sUyxJQUFBc1MscUJBQUFBLG1CQUFBRix1QkFBQSxDQUFBLFFBQUEsR0FBQSxDQUFBLFNBQUEsQ0FBQSxFQUFBLENBQVcsR0FBQyxTQUFBO0FBQzFCakcscUJBQWE0RixHQUFHLGdCQUFnQjdGLE9BQU9HLFFBQVE7TUFDaEQsT0FBTztBQUNOLGNBQU1rRyxJQUFJQyxpQkFBaUJ6QixTQUFTRyxNQUFNSyxLQUFLckYsTUFBTTtBQUNyRHFHLFVBQUVFLFlBQVk7TUFDZjtJQUNEO0VBQ0Q7QUFDQSxRQUFNRCxtQkFBbUJBLENBQUN0QixNQUFNdFYsU0FBU3NRLFdBQVc7QUFFbkQsVUFBTXlCLElBQUkrRSxVQUFVeEIsTUFBTXRWLFFBQVErVyxhQUFhLENBQUM7QUFDaEQsVUFBTUMsVUFBVUMsU0FBUyxDQUFDMU4sR0FBR0ksS0FBS3VOLGFBQWFsWCxRQUFRbVgsVUFBVSxDQUFDLENBQUM7QUFDbkUsVUFBTVIsSUFBSSxJQUFJUyxhQUFhckYsR0FBR2lGLFNBQVMxRyxNQUFNO0FBQzdDLFdBQU9xRztFQUNSO0FBRUEsUUFBTUcsWUFBWUEsQ0FBQy9FLEdBQUd4QyxTQUFTO0FBQzlCLFFBQUksQ0FBQ0EsTUFBTTtBQUNWLGFBQU93QztJQUNSO0FBQ0EsVUFBTXNGLFNBQVMsSUFBSUMsT0FBQSxZQUFBek0sT0FDTjBNLGdCQUFnQmhJLElBQUksRUFBRWlJLFFBQVEsU0FBUyxNQUFNLEdBQUMsbUJBQUEsRUFBQTNNLE9BQW9CQyxXQUM3RSxtQkFDRCxHQUFDLHlCQUFBLEVBQUFELE9BQTBCME0sZ0JBQWdCaEksSUFBSSxHQUFDLHNCQUFBLENBQ2pEO0FBQ0EsVUFBTWtJLFFBQVExRixFQUFFMEYsTUFBTUosTUFBTTtBQUM1QixRQUFJSSxTQUFTQSxNQUFNckwsU0FBUyxLQUFLcUwsTUFBTSxDQUFDLEdBQUc7QUFDMUMsYUFBTzFGLEVBQUUyRixNQUFNeEwsS0FBS3lMLElBQUksR0FBRzVGLEVBQUU2RixRQUFRSCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQ7QUFFQSxVQUFNSSxRQUFROUYsRUFBRXNFLE1BQU0sSUFBSTtBQUMxQixhQUFTeUIsSUFBSSxHQUFHQSxJQUFJRCxNQUFNekwsUUFBUSxFQUFFMEwsR0FBRztBQUN0Q0QsWUFBTUMsQ0FBQyxJQUFJRCxNQUFNQyxDQUFDLEVBQ2hCTixRQUFRLGdDQUFnQyxJQUFJLEVBQzVDQSxRQUFRLGNBQWMsSUFBSSxFQUMxQkEsUUFBUSxhQUFhLElBQUk7QUFDM0IsVUFBSUgsT0FBTzVILEtBQUtvSSxNQUFNQyxDQUFDLENBQUMsR0FBRztBQUMxQixlQUFPL0YsRUFDTHNFLE1BQU0sSUFBSSxFQUNWcUIsTUFBTUksQ0FBQyxFQUNQckIsS0FBSyxJQUFJLEVBQ1RlLFFBQVEsVUFBVSxFQUFFO01BQ3ZCO0lBQ0Q7QUFDQSxXQUFPekY7RUFDUjtBQUNBLFFBQU14RSxZQUFZLFNBQVN3SyxhQUFZO0FBQ3RDeEosOEJBQTBCLElBQUk7QUFDOUIsUUFBSXpELFdBQVcsbUJBQW1CLEdBQUc7QUFDcEN3RCx1QkFBaUI7SUFDbEI7QUFDQSxRQUFJLENBQUMvRSxJQUFJO0FBQ1I7SUFDRDtBQUNBLFFBQUlBLEdBQUdhLFFBQVEwRyxRQUFRdkgsR0FBR2EsUUFBUTBHLEtBQUtDLFVBQVU7QUFDaER4SCxTQUFHYSxRQUFRMEcsS0FBS0MsU0FBU2lILE9BQU87SUFDakM7QUFDQXpPLE9BQUdhLFFBQVEwRyxPQUFPO0FBQ2xCbUgsc0JBQWtCO0FBQ2xCLFFBQUkxTyxHQUFHVyxNQUFNMEgsb0JBQW9CO0FBQ2hDRCxvQkFBY3BJLEdBQUdXLE1BQU0wSCxrQkFBa0I7QUFDekNySSxTQUFHVyxNQUFNMEgscUJBQXFCO0lBQy9CO0FBQ0EsV0FBTztFQUNSO0VBeUJBLE1BQU1zRyxLQUFLO0lBQ1ZDLGNBQWM7QUFPYixXQUFLQyxpQkFBaUI7QUFPdEIsV0FBS0MsVUFBVTtJQUNoQjs7Ozs7OztJQU9BLE9BQU9DLEtBQUtDLEdBQUc7QUFDZCxVQUFJQSxNQUFNLFFBQVc7QUFDcEJBLFlBQUl0WSxPQUFPMk87TUFDWjtBQUNBLFVBQUkySixFQUFFQyxXQUFXLFFBQVc7QUFDM0JELFVBQUVDLFNBQVNELEVBQUVFO01BQ2Q7QUFDQSxVQUFJRixFQUFFRyxXQUFXLFFBQVc7QUFDM0JILFVBQUVHLFNBQVNILEVBQUVJO01BQ2Q7QUFDQSxhQUFPSjtJQUNSOzs7Ozs7OztJQVFBSyxLQUFLQyxHQUFHQyxPQUFPO0FBQ2QsWUFBTS9KLE9BQU87QUFDYixXQUFLZ0ssTUFBTUY7QUFDWEEsUUFBRXZMLGNBQWVpTCxPQUFNO0FBQ3RCeEosYUFBS2lLLE1BQU1ULENBQUM7TUFDYjtBQUNBTSxRQUFFSSxXQUFXO0FBQ2JKLFFBQUVLLG1CQUFtQjtBQUNyQkwsUUFBRU0sUUFBUTtBQUNWTixRQUFFTyxRQUFRO0FBQ1ZQLFFBQUVRLE9BQU9QLFNBQVNEO0FBQ2xCLFVBQUlTLE9BQU9DLE1BQU1ELE9BQU9FLFNBQVNYLEVBQUVRLEtBQUtuTCxNQUFNdUwsTUFBTSxFQUFFLENBQUMsR0FBRztBQUN6RFosVUFBRVEsS0FBS25MLE1BQU11TCxPQUFPO01BQ3JCO0FBQ0EsVUFBSUgsT0FBT0MsTUFBTUQsT0FBT0UsU0FBU1gsRUFBRVEsS0FBS25MLE1BQU13TCxLQUFLLEVBQUUsQ0FBQyxHQUFHO0FBQ3hEYixVQUFFUSxLQUFLbkwsTUFBTXdMLE1BQU07TUFDcEI7QUFDQWIsUUFBRVEsS0FBS00sY0FBYyxNQUFNO01BQUM7QUFDNUJkLFFBQUVRLEtBQUtPLFlBQVksTUFBTTtNQUFDO0FBQzFCZixRQUFFUSxLQUFLUSxTQUFTLE1BQU07TUFBQztJQUN4Qjs7Ozs7OztJQU9BYixNQUFNVCxHQUFHO0FBQ1IsWUFBTU0sSUFBSSxLQUFLRTtBQUNmUixVQUFJTCxLQUFLSSxLQUFLQyxDQUFDO0FBQ2YsVUFBSSxLQUFLSCxrQkFBa0IsQ0FBQyxLQUFLQSxlQUFlRyxDQUFDLEdBQUc7QUFDbkQ7TUFDRDtBQUNBLFlBQU11QixJQUFJUixPQUFPRSxTQUFTWCxFQUFFTyxRQUFRUCxFQUFFUSxLQUFLbkwsTUFBTXdMLE1BQU1iLEVBQUVRLEtBQUtuTCxNQUFNNkwsUUFBUSxFQUFFO0FBQzlFLFlBQU0xSixJQUFJaUosT0FBT0UsU0FBU1gsRUFBRU0sUUFBUU4sRUFBRVEsS0FBS25MLE1BQU11TCxPQUFPWixFQUFFUSxLQUFLbkwsTUFBTThMLE9BQU8sRUFBRTtBQUM5RW5CLFFBQUVRLEtBQUtNLFlBQVl0SixHQUFHeUosQ0FBQztBQUN2QmpCLFFBQUVvQixhQUFhMUIsRUFBRTJCO0FBQ2pCckIsUUFBRXNCLGFBQWE1QixFQUFFNkI7QUFDakIsWUFBTXJMLE9BQU87QUFDYjhKLFFBQUV3QixxQkFBcUJ0UCxTQUFTdVA7QUFDaEN6QixRQUFFSSxXQUFXO0FBQ2JsTyxlQUFTdVAsY0FBZUMsUUFBTTtBQUM3QnhMLGFBQUt5TCxLQUFLRCxFQUFDO01BQ1o7QUFDQXhQLGVBQVNHLFlBQWFxUCxRQUFNO0FBQzNCeEwsYUFBSzBMLElBQUlGLEVBQUM7TUFDWDtBQUNBLGFBQU87SUFDUjs7Ozs7OztJQU9BQyxLQUFLakMsR0FBRztBQUNQQSxVQUFJTCxLQUFLSSxLQUFLQyxDQUFDO0FBQ2YsWUFBTU0sSUFBSSxLQUFLRTtBQUNmLFlBQU0yQixLQUFLbkMsRUFBRTZCO0FBQ2IsWUFBTU8sS0FBS3BDLEVBQUUyQjtBQUNiLFlBQU1KLElBQUlSLE9BQU9FLFNBQVNYLEVBQUVPLFFBQVFQLEVBQUVRLEtBQUtuTCxNQUFNd0wsTUFBTWIsRUFBRVEsS0FBS25MLE1BQU02TCxRQUFRLEVBQUU7QUFDOUUsWUFBTTFKLElBQUlpSixPQUFPRSxTQUFTWCxFQUFFTSxRQUFRTixFQUFFUSxLQUFLbkwsTUFBTXVMLE9BQU9aLEVBQUVRLEtBQUtuTCxNQUFNOEwsT0FBTyxFQUFFO0FBQzlFLFlBQU1ZLEtBQUt2SyxLQUFLc0ssS0FBSzlCLEVBQUVvQixlQUFlcEIsRUFBRU0sUUFBUSxJQUFJO0FBQ3BELFlBQU0wQixLQUFLZixLQUFLWSxLQUFLN0IsRUFBRXNCLGVBQWV0QixFQUFFTyxRQUFRLElBQUk7QUFDcEQsV0FBS0wsSUFBSU0sS0FBS25MLE1BQU0ySyxFQUFFTSxRQUFRLFNBQVMsT0FBTyxJQUFBLEdBQUF0TyxPQUFPK1AsSUFBRSxJQUFBO0FBQ3ZELFdBQUs3QixJQUFJTSxLQUFLbkwsTUFBTTJLLEVBQUVPLFFBQVEsUUFBUSxRQUFRLElBQUEsR0FBQXZPLE9BQU9nUSxJQUFFLElBQUE7QUFDdkQsV0FBSzlCLElBQUlrQixhQUFhVTtBQUN0QixXQUFLNUIsSUFBSW9CLGFBQWFPO0FBQ3RCLFdBQUszQixJQUFJTSxLQUFLUSxPQUFPZSxJQUFJQyxFQUFFO0FBQzNCLGFBQU87SUFDUjs7Ozs7O0lBTUFKLE1BQU07QUFDTDFQLGVBQVN1UCxjQUFjLEtBQUt2QixJQUFJc0I7QUFDaEN0UCxlQUFTRyxZQUFZO0FBQ3JCLFdBQUs2TixJQUFJRSxXQUFXO0FBQ3BCLFVBQUksS0FBS1osU0FBUztBQUNqQixhQUFLQSxRQUNKaUIsT0FBT0UsU0FBUyxLQUFLVCxJQUFJTSxLQUFLbkwsTUFBTSxLQUFLNkssSUFBSUksUUFBUSxTQUFTLE9BQU8sR0FBRyxFQUFFLEdBQzFFRyxPQUFPRSxTQUFTLEtBQUtULElBQUlNLEtBQUtuTCxNQUFNLEtBQUs2SyxJQUFJSyxRQUFRLFFBQVEsUUFBUSxHQUFHLEVBQUUsQ0FDM0U7TUFDRDtJQUNEO0VBQ0Q7QUFHQTdQLEtBQUdVLFdBQVc2USxXQUFXLENBQUM7QUFDMUJ2UixLQUFHVSxXQUFXNlEsU0FBU0MsY0FBYyxNQUFNO0FBQzFDLFdBQU8sQ0FDTixjQUNBLGNBQ0EsaUJBQ0EsY0FDQSxpQkFDQSxhQUNBLG1CQUNBLGNBQ0EsQ0FBQyxrQkFBa0Isc0JBQXNCLG1CQUFtQixrQkFBa0Isc0JBQXNCLEdBQ3BHLGtCQUNBLENBQUMsY0FBYyxHQUNmLHNCQUNBLGdCQUNBLHNCQUNBLG9CQUNBLG9CQUNBLGFBQUE7RUFFRjtBQUNBeFIsS0FBR1UsV0FBVzZRLFNBQVNFLGtCQUFrQixNQUFNO0FBQzlDLFdBQU8sQ0FDTixjQUNBLGtCQUNBLHNCQUNBLG1CQUNBLGtCQUNBLHNCQUFBO0VBRUY7QUFDQXpSLEtBQUdVLFdBQVc2USxTQUFTRyxhQUFjNUssT0FBTTtBQUMxQzVJLFFBQUksNkJBQTZCO0FBQ2pDLFFBQUksQ0FBQ3FELFdBQVcsZUFBZSxHQUFHO0FBQ2pDLGFBQU9vUSxvQkFBb0IsdUJBQXVCN0ssRUFBRXJRLFNBQVNxUSxFQUFFa0QsTUFBTTtJQUN0RTtBQUNBLFdBQU87RUFDUjtBQUNBaEssS0FBR1UsV0FBVzZRLFNBQVNLLGdCQUFpQjlLLE9BQU07QUFDN0M1SSxRQUFJLGdDQUFnQztBQUNwQyxRQUFJcUQsV0FBVyxlQUFlLEdBQUc7QUFDaEMsYUFBT3NRLGFBQWEvSyxFQUFFclEsU0FBU3FRLEVBQUVnTCxNQUFNaEwsRUFBRWtELE1BQU07SUFDaEQ7QUFDQSxXQUFPO0VBQ1I7QUFDQWhLLEtBQUdVLFdBQVc2USxTQUFTUSxhQUFjakwsT0FBTTtBQUMxQzVJLFFBQUEsa0NBQUFvRCxPQUFzQ3dGLEVBQUVyUSxTQUFPLHNCQUFBLEVBQUE2SyxPQUF1QndGLEVBQUVDLE9BQU9HLFFBQVEsQ0FBRTtBQUN6RixXQUFPOEssVUFBVWxMLEVBQUVyUSxTQUFTcVEsRUFBRUMsT0FBT0csUUFBUTtFQUM5QztBQUNBbEgsS0FBR1UsV0FBVzZRLFNBQVNVLGtCQUFrQmpTLEdBQUdVLFdBQVc2USxTQUFTRztBQUNoRTFSLEtBQUdVLFdBQVc2USxTQUFTVyxxQkFBcUJsUyxHQUFHVSxXQUFXNlEsU0FBU0s7QUFDbkUsUUFBTU8sZ0JBQWdCQSxDQUFDQyxjQUFjQyxpQkFBaUI7QUFDckRyUyxPQUFHVSxXQUFXMlIsWUFBWSxJQUFJLENBQUM7QUFDL0IsZUFBV0MsUUFBUXRTLEdBQUdVLFdBQVcwUixZQUFZLEdBQUc7QUFDL0MsVUFBSSxDQUFDRyxPQUFPQyxPQUFPeFMsR0FBR1UsV0FBVzBSLFlBQVksR0FBR0UsSUFBSSxHQUFHO0FBQ3REO01BQ0Q7QUFDQXRTLFNBQUdVLFdBQVcyUixZQUFZLEVBQUVDLElBQUksSUFBSXRTLEdBQUdVLFdBQVcwUixZQUFZLEVBQUVFLElBQUk7SUFDckU7RUFDRDtBQUNBSCxnQkFBYyxZQUFZLFdBQVc7QUFDckNuUyxLQUFHVSxXQUFXK1IsVUFBVWIsZ0JBQWlCOUssT0FBTTtBQUM5QyxRQUFJNEwsTUFBTTtBQUNWQSxXQUFPO0FBSVBBLFdBQU87QUFDUEEsV0FBTztBQUNQQSxXQUFPO0FBSVAsVUFBTUMsVUFBVTtBQUNoQixVQUFNQyxlQUFBLCtFQUFBdFIsT0FBOEZxUixTQUFPLEdBQUE7QUFDM0csVUFBTUUsYUFBYTtBQUNuQixVQUFNQyxXQUFXO0FBQ2pCSixXQUFBLGdCQUFBcFIsT0FDaUJzUixjQUFZLHNCQUFBLEVBQUF0UixPQUN4QnVSLFlBQVUsR0FBQSxFQUFBdlIsT0FBSXdSLFVBQVEsMkRBQUEsRUFBQXhSOztNQUl6QnNSO01BQ0Q7SUFBQSxFQUFBdFIsT0FBSXVSLFlBQVUsR0FBQSxFQUFBdlIsT0FBSXdSLFVBQVEsMkVBQUE7QUFHM0JKLFdBQU87QUFDUEEsV0FBTztBQUVQQSxXQUNDO0FBRUQsV0FBT2Ysb0JBQW9CZSxLQUFLNUwsRUFBRXJRLFNBQVNxUSxFQUFFa0QsTUFBTTtFQUNwRDtBQUNBaEssS0FBR1UsV0FBVytSLFVBQVVQLHFCQUFxQmxTLEdBQUdVLFdBQVcrUixVQUFVYjtBQUVyRU8sZ0JBQWMsWUFBWSxPQUFPO0FBQ2pDblMsS0FBR1UsV0FBV3FTLE1BQU1yQixhQUFjNUssT0FBTTtBQUN2QyxXQUFPNkssb0JBQW9CLHFDQUFxQzdLLEVBQUVyUSxTQUFTcVEsRUFBRWtELE1BQU07RUFDcEY7QUFDQWhLLEtBQUdVLFdBQVdxUyxNQUFNbkIsZ0JBQWlCOUssT0FBTTtBQUMxQyxVQUFNN00sT0FBTztBQUNiLFVBQU0rWSxRQUFRO0FBQ2QsVUFBTXRaLE9BQU87QUFDYixXQUFPaVksb0JBQUEscURBQUFyUSxPQUV1Q3JILE1BQUksK0NBQUEsRUFBQXFILE9BRTVDMFIsT0FBSyxHQUFBLEVBQUExUixPQUFJNUgsTUFBSSw0QkFBQSxFQUFBNEgsT0FBNkJySCxNQUFJLHFFQUFBLEVBQUFxSCxPQUM5QzBSLE9BQUssR0FBQSxFQUFBMVIsT0FBSTVILE1BQUksT0FBQSxHQUNsQm9OLEVBQUVyUSxTQUNGcVEsRUFBRWtELE1BQ0g7RUFDRDtBQUNBaEssS0FBR1UsV0FBV3FTLE1BQU1FLGtCQUFtQm5NLE9BQU07QUFDNUMsVUFBTW9NLFFBQ0w7QUFDRCxRQUFJN1YsT0FBTztBQUNYQSxZQUFBLGlEQUFBaUUsT0FBeUR5SCxZQUN4RCxPQUNELEdBQUMscUNBQUE7QUFDRCxVQUFNb0ssU0FBUztBQUNmLFdBQU94QixvQkFBQSxnQkFBQXJRLE9BQ1VqRSxNQUFJLGNBQUEsRUFBQWlFLE9BQWU0UixPQUFLLHdCQUFBLEVBQUE1UixPQUF5QjZSLE1BQU0sR0FDdkVyTSxFQUFFclEsU0FDRnFRLEVBQUVrRCxNQUNIO0VBQ0Q7QUFDQWhLLEtBQUdVLFdBQVdxUyxNQUFNZCxrQkFBa0JqUyxHQUFHVSxXQUFXcVMsTUFBTXJCO0FBQzFEMVIsS0FBR1UsV0FBV3FTLE1BQU1iLHFCQUFxQmxTLEdBQUdVLFdBQVdxUyxNQUFNbkI7QUFDN0Q1UixLQUFHVSxXQUFXcVMsTUFBTUssdUJBQXVCcFQsR0FBR1UsV0FBV3FTLE1BQU1FO0FBRy9EZCxnQkFBYyxTQUFTLFFBQVE7QUFDL0JuUyxLQUFHVSxXQUFXMlMsT0FBT3pCO0VBQ25COUssT0FBTTtBQUNOLFdBQUEsT0FBQXhGLE9BQWN0QixHQUFHVSxXQUFXcVMsTUFBTW5CLGNBQWM5SyxDQUFDLEVBQUVtSCxRQUFRLFVBQVUsRUFBRSxDQUFDO0VBQ3pFO0FBQ0RqTyxLQUFHVSxXQUFXMlMsT0FBTzdCLGNBQWMsTUFBTTtBQUN4QyxXQUFPLENBQ04sY0FDQSxjQUNBLGNBQ0EsaUJBQ0EsYUFDQSxpQkFDQSxtQkFDQSxjQUNBLENBQUMsa0JBQWtCLHNCQUFzQixtQkFBbUIsa0JBQWtCLHNCQUFzQixHQUNwRyxrQkFDQSxDQUFDLGNBQWMsR0FDZixzQkFDQSxnQkFDQSxzQkFDQSxvQkFDQSxvQkFDQSxhQUFBO0VBRUY7QUFFQVcsZ0JBQWMsWUFBWSxPQUFPO0FBQ2pDblMsS0FBR1UsV0FBVzRTLE1BQU05QixjQUFjLE1BQU07QUFDdkMsV0FBTyxDQUNOLGNBQ0EsY0FDQSxpQkFDQSxjQUNBLG1CQUNBLGNBQ0EsQ0FBQyxrQkFBa0Isc0JBQXNCLG1CQUFtQixrQkFBa0Isc0JBQXNCLEdBQ3BHLGlCQUNBLGFBQ0Esa0JBQ0EsQ0FBQyxjQUFjLEdBQ2Ysc0JBQ0EsZ0JBQ0Esc0JBQ0Esb0JBQ0Esb0JBQ0EsYUFBQTtFQUVGO0FBQ0F4UixLQUFHVSxXQUFXNFMsTUFBTTFCLGdCQUFnQixDQUFDOUssR0FBR3lNLFlBQVk7QUFFbkQsVUFBTTVLLElBQUksQ0FBQTtBQUNWLFVBQU02SyxVQUFVO0FBQ2hCLFVBQU1DLFNBQVM7QUFDZixRQUFJeFosT0FBTztBQUNYLFFBQUksQ0FBQ3NaLFNBQVM7QUFDYnRaLGFBQUEsWUFBQXFILE9BQW1CckgsTUFBSSx1REFBQTtJQUN4QjtBQUNBLFVBQU15WixXQUFXO0FBQ2pCLFVBQU1DLFFBQVE7QUFDZCxVQUFNQyxZQUFZO0FBQ2xCLFVBQU1DLFlBQVk7QUFDbEIsVUFBTXZZLFVBQVU7QUFDaEIsVUFBTXJELFNBQVM7QUFDZixVQUFNK2EsUUFBUTtBQUNkLFVBQU0xWixVQUFVO0FBQ2hCLFVBQU1MLE1BQU07QUFDWixVQUFNUyxPQUFPO0FBQ2IsVUFBTW9hLFlBQVk7QUFDbEIsVUFBTUMsY0FBYztBQUNwQixVQUFNQyxVQUNMO0FBSUQsVUFBTUMsZ0JBQWdCO0FBQ3RCLFVBQU1DLFdBQVc7QUFDakIsVUFBTUMsZ0JBQUEsYUFBQTdTLE9BQTZCaEksT0FBTyxFQUFBZ0ksT0FBR3JJLEtBQUcsR0FBQTtBQUNoRCxRQUFJc0ksV0FBVyxrQkFBa0IsR0FBRztBQUNuQ29ILFFBQUVaLEtBQUEsZ0JBQUF6RyxPQUFxQmtTLE9BQU8sRUFBQWxTLE9BQUc4UyxVQUFVLFNBQVMsQ0FBQyxDQUFFO0lBQ3hELE9BQU87QUFDTnpMLFFBQUVaLEtBQUEsR0FBQXpHLE9BQVFrUyxTQUFPLGNBQUEsQ0FBYztJQUNoQztBQUNBN0ssTUFBRVosS0FBSyxVQUFVaU0sVUFBVUMsZ0JBQWdCQyxXQUFXamEsT0FBT3laLFdBQVdDLEtBQUs7QUFDN0UsUUFBSSxDQUFDSixTQUFTO0FBQ2I1SyxRQUFFWixLQUFLNkwsU0FBUztJQUNqQjtBQUNBakwsTUFBRVosS0FBS3JPLE9BQU9tYSxZQUFZdlksT0FBTztBQUNqQyxRQUFJLENBQUNpWSxTQUFTO0FBQ2I1SyxRQUFFWixLQUFLK0wsWUFBWTdiLE1BQU07SUFDMUI7QUFDQSxRQUFJLENBQUNzYixTQUFTO0FBQ2I1SyxRQUFFWixLQUFLZ00sV0FBVztJQUNuQjtBQUNBcEwsTUFBRVosS0FBQSxPQUFBekcsT0FDTTBSLEtBQUssRUFBQTFSLE9BQUc2UyxhQUFhLEdBQUEsZ0xBQUE3UyxPQUlnQm1TLE1BQU0sQ0FDbkQ7QUFFQSxVQUFNblcsUUFBUTtBQUNkLFVBQU1NLFdBQ0w7QUFFRCtLLE1BQUVaLEtBQUEsYUFBQXpHLE9BQ1lrUyxPQUFPLEVBQUFsUyxPQUFHOFMsVUFBVSxNQUFNLENBQUMsR0FDeEMsVUFDQSxpRkFDQSwwR0FFRDtBQUNBLFFBQUliLFNBQVM7QUFDWjVLLFFBQUVaLEtBQUEsb0JBQUF6RyxPQUF5QmhFLE9BQUssR0FBQSxDQUFHO0lBQ3BDLE9BQU87QUFDTnFMLFFBQUVaLEtBQUEsNEJBQUF6RyxPQUFpQ2hFLE9BQUssR0FBQSxDQUFHO0lBQzVDO0FBQ0FxTCxNQUFFWixLQUFBLE9BQUF6RyxPQUNNMUQsVUFBUSxpQ0FBQSxHQUNmLG9EQUNBLDBGQUNBLHFDQUFBLFVBQUEwRCxPQUNVbVMsUUFBTSxHQUFBLENBQ2pCO0FBRUEsUUFBSWxTLFdBQVcsZ0JBQWdCLEtBQUssQ0FBQ3VGLEVBQUVDLE9BQU9pQyxjQUFnQztBQUM3RWxDLFFBQUVDLE9BQU9pQyxlQUFlO0FBQ3hCTCxRQUFFWixLQUFBLElBQUF6RyxPQUNHa1MsT0FBTyxFQUFBbFMsT0FBRzhTLFVBQVUsWUFBWSxHQUFDLFFBQUEsR0FDckMsc0NBQ0EseUJBQ0EsNkJBQUEsVUFBQTlTLE9BQ1VtUyxNQUFNLENBQ2pCO0lBQ0Q7QUFDQSxXQUFPOUIsb0JBQW9CaEosRUFBRXVFLEtBQUssRUFBRSxHQUFHcEcsRUFBRXJRLFNBQVNxUSxFQUFFa0QsTUFBTTtFQUMzRDtBQUNBLFFBQU1vSyxZQUFhekwsT0FBTTtBQUN4QixXQUFBLHlCQUFBckgsT0FBZ0N5SCxZQUFZSixDQUFDLEdBQUMsTUFBQTtFQUMvQztBQUNBM0ksS0FBR1UsV0FBVzRTLE1BQU1yQixrQkFBa0JqUyxHQUFHVSxXQUFXNFMsTUFBTTVCO0FBQzFEMVIsS0FBR1UsV0FBVzRTLE1BQU1wQixxQkFBcUJsUyxHQUFHVSxXQUFXNFMsTUFBTTFCO0FBQzdETyxnQkFBYyxTQUFTLFlBQVk7QUFDbkNuUyxLQUFHVSxXQUFXMlQsV0FBV3pDLGdCQUFpQjlLLE9BQU07QUFDL0MsV0FBTzlHLEdBQUdVLFdBQVc0UyxNQUFNMUIsY0FBYzlLLEdBQUcsSUFBSTtFQUNqRDtBQUNBOUcsS0FBR1UsV0FBVzJULFdBQVduQyxxQkFBcUJsUyxHQUFHVSxXQUFXMlQsV0FBV3pDO0FBQ3ZFNVIsS0FBR1UsV0FBVzRULE9BQU8sQ0FBQztBQUN0QnRVLEtBQUdVLFdBQVc0VCxLQUFLOUMsY0FBYyxNQUFNO0FBQ3RDLFdBQU8sQ0FBQyxjQUFjLGNBQWM7RUFDckM7QUFDQXhSLEtBQUdVLFdBQVc0VCxLQUFLNUMsYUFBYzVLLE9BQU07QUFDdEM1SSxRQUFBLEdBQUFvRCxPQUFPd0YsRUFBRXJRLFNBQU8sOEJBQUEsQ0FBOEI7QUFFOUMsV0FBQSx3Q0FBQTZLLE9BQStDd0YsRUFBRXJRLFFBQVE2UCxTQUFTLEdBQUMsbUJBQUE7RUFDcEU7QUFHQSxRQUFNaU8sYUFBYUEsQ0FBQ3hJLE1BQU15SSxZQUFZO0FBRXJDLFVBQU1DLFNBQVMsSUFBSTFHLE9BQU95RyxRQUFRRSxNQUFNRixRQUFRRyxLQUFLO0FBQ3JELFdBQU81SSxLQUFLa0MsUUFBUXdHLFFBQVFELFFBQVFJLEVBQUU7RUFDdkM7QUFDQSxRQUFNQyxXQUFXQSxDQUFDOUksTUFBTStJLFlBQVk7QUFBQSxRQUFBQyxZQUFBQywyQkFDYkYsT0FBQSxHQUFBRztBQUFBLFFBQUE7QUFBdEIsV0FBQUYsVUFBQXBNLEVBQUEsR0FBQSxFQUFBc00sUUFBQUYsVUFBQUcsRUFBQSxHQUFBQyxRQUErQjtBQUFBLGNBQXBCQyxVQUFBSCxNQUFBSTtBQUNWdEosZUFBT3FKLFFBQVE5UCxPQUFPeUcsTUFBTXFKLE9BQU87TUFDcEM7SUFBQSxTQUFBRSxLQUFBO0FBQUFQLGdCQUFBL0YsRUFBQXNHLEdBQUE7SUFBQSxVQUFBO0FBQUFQLGdCQUFBUSxFQUFBO0lBQUE7QUFDQSxXQUFPeEo7RUFDUjtBQUNBLFFBQU15SixXQUFXLFNBQVNDLFVBQVMvQyxLQUFLO0FBRXZDLFFBQUlBLElBQUk3UCxXQUFXLEdBQUc7QUFDckIsYUFBTyxDQUFBO0lBQ1I7QUFDQSxRQUFJdUssSUFBSTtBQUNSLFlBQVFzRixJQUFJZ0QsT0FBTyxDQUFDLEdBQUE7TUFDbkIsS0FBSztBQUNKdEksWUFBSXVJLGdCQUFnQmpELEdBQUc7QUFDdkI7TUFDRDtBQUNDLGVBQU87SUFDVDtBQUNBLFFBQUl0RixHQUFHO0FBQ04sYUFBTyxDQUFDQSxHQUFHcUksVUFBU3JJLEVBQUV3SSxTQUFTLENBQUM7SUFDakM7QUFDQSxXQUFPO0VBQ1I7QUFHQSxRQUFNQyxXQUFXQSxDQUFDbkQsS0FBS29ELFFBQVE7QUFDOUIsV0FBT3BELElBQ0w1RixNQUFNLE1BQU0sRUFDWkksS0FBSyxJQUFJLEVBQ1RKLE1BQUEsS0FBQXhMLE9BQVd3VSxHQUFHLENBQUUsRUFDaEI1SSxLQUFLNEksR0FBRyxFQUNSaEosTUFBTUMsT0FBT2xTLElBQUFrYixxQkFBQUEsbUJBQUE5SSx1QkFBQSxDQUFBLElBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBLENBQU8sRUFDcEJDLEtBQUssSUFBSTtFQUNaO0FBQ0EsUUFBTXlJLGtCQUFtQmpELFNBQVE7QUFFaEMsUUFBSWdDO0FBQ0osUUFBSUU7QUFDSixRQUFJRDtBQUNKLFFBQUlxQjtBQUNKLFFBQUl0RCxJQUFJN1AsU0FBUyxHQUFHO0FBQ25CLGFBQU87SUFDUjtBQUNBLFVBQU1pVCxNQUFNcEQsSUFBSWdELE9BQU8sQ0FBQztBQUN4QmhELFVBQU1BLElBQUl2RSxNQUFNLENBQUM7QUFDakI2SCxVQUFNQyxTQUFTdkQsS0FBS29ELEdBQUc7QUFDdkIsUUFBSUUsS0FBSztBQUNSdEIsYUFBT3NCLElBQUlFO0FBQ1h4RCxZQUFNc0QsSUFBSUo7SUFDWCxPQUFPO0FBQ04sYUFBTztJQUNSO0FBQ0FJLFVBQU1DLFNBQVN2RCxLQUFLb0QsR0FBRztBQUN2QixRQUFJRSxLQUFLO0FBQ1JwQixXQUFLb0IsSUFBSUU7QUFDVHhELFlBQU1zRCxJQUFJSjtJQUNYLE9BQU87QUFDTixhQUFPO0lBQ1I7QUFDQWpCLFlBQVE7QUFDUixRQUFJakMsSUFBSTdQLFNBQVMsR0FBRztBQUNuQm1ULFlBQU1DLFNBQVN2RCxLQUFLLEdBQUcsS0FBS3lELFVBQVV6RCxLQUFLLEdBQUc7QUFDOUMsVUFBSXNELEtBQUs7QUFDUnJCLGdCQUFRcUIsSUFBSUU7QUFDWnhELGNBQU1zRCxJQUFJSjtNQUNYO0lBQ0Q7QUFDQSxXQUFPO01BQ050USxRQUFRaVA7TUFDUkc7TUFDQUU7TUFDQUQ7TUFDQWlCLFdBQVdsRDtJQUNaO0VBQ0Q7QUFDQSxRQUFNdUQsV0FBV0EsQ0FBQ3ZELEtBQUtvRCxRQUFRO0FBQzlCLFVBQU1NLGFBQWFDLFNBQVMzRCxLQUFLb0QsR0FBRztBQUNwQyxRQUFJTSxhQUFhLEdBQUc7QUFDbkIsYUFBTztJQUNSO0FBQ0EsVUFBTUYsVUFBVUwsU0FBU25ELElBQUl2RSxNQUFNLEdBQUd4TCxLQUFLeUwsSUFBSSxHQUFHZ0ksVUFBVSxDQUFDLEdBQUdOLEdBQUc7QUFDbkUsV0FBTztNQUNOSTtNQUNBTixXQUFXbEQsSUFBSXZFLE1BQU14TCxLQUFLeUwsSUFBSSxHQUFHZ0ksYUFBYSxDQUFDLENBQUM7SUFDakQ7RUFDRDtBQUNBLFFBQU1ELFlBQVlBLENBQUN6RCxLQUFLNEQsU0FBUztBQUNoQyxXQUFPO01BQ05KLFNBQVN4RDtNQUNUa0QsV0FBVztJQUNaO0VBQ0Q7QUFDQSxRQUFNUyxXQUFXQSxDQUFDM0QsS0FBSzZELE9BQU87QUFDN0IsYUFBU2hJLElBQUksR0FBR0EsSUFBSW1FLElBQUk3UCxRQUFRLEVBQUUwTCxHQUFHO0FBQ3BDLFVBQUltRSxJQUFJZ0QsT0FBT25ILENBQUMsTUFBTSxNQUFNO0FBQzNCQSxhQUFLO01BQ047QUFDQSxVQUFJbUUsSUFBSWdELE9BQU9uSCxDQUFDLE1BQU1nSSxJQUFJO0FBQ3pCLGVBQU9oSTtNQUNSO0lBQ0Q7QUFDQSxXQUFPO0VBQ1I7QUFDQSxRQUFNaUksY0FBY0EsQ0FBQ0MsT0FBT0MsUUFBUTtBQUNuQyxVQUFNQyxNQUFNQyxHQUFHQyxLQUFLQyxjQUFjTCxLQUFLO0FBQ3ZDLFFBQUlFLEtBQUs7QUFDUixjQUFRQSxLQUFBO1FBQ1AsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO0FBQ0pELGNBQUlLLFVBQVU7QUFDZDtRQUNELEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztBQUNKTCxjQUFJSyxVQUFVO01BQ2hCO0lBQ0Q7RUFDRDtBQUNBLFFBQU1DLFdBQVcsU0FBU0MsWUFBVztBQUNwQ0MsZ0JBQVksTUFBTTtBQUNqQixVQUFJTixHQUFHQyxLQUFLQyxjQUFjLFVBQVUsTUFBTS9OLFlBQVksa0JBQWtCLEdBQUc7QUFDMUUsZUFBTztNQUNSO0FBQ0EsVUFBSTZOLEdBQUdDLEtBQUtDLGNBQWMsZUFBZSxLQUFLRixHQUFHQyxLQUFLQyxjQUFjLFNBQVMsTUFBTUssZUFBZSxHQUFHO0FBQ3BHblgsV0FBR2MsR0FBR3NXLGdCQUFnQlIsR0FBR0MsS0FBS0MsY0FBYyxPQUFPLEdBQUdGLEdBQUdDLEtBQUtDLGNBQWMsUUFBUSxDQUFDO01BQ3RGO0FBQ0EsVUFBSSxDQUFDdFYsU0FBU0MsVUFBVTtBQUN2QixlQUFPO01BQ1I7QUFDQSxVQUFJd1YsVUFBU0ksWUFBWTtBQUN4QixlQUFPO01BQ1I7QUFDQUosZ0JBQVNJLGFBQWE7QUFDdEIsWUFBTUMsWUFBWVYsR0FBR0MsS0FBS0MsY0FBYyxVQUFVO0FBQ2xELFVBQUlRLFdBQVc7QUFDZCxZQUFJO0FBQ0gsZ0JBQU1DLFVBQVUvVixTQUFTQyxTQUFTQztBQUNsQyxnQkFBTW9ULFVBQVVVLFNBQVM4QixTQUFTO0FBQ2xDLGdCQUFNRSxRQUFRRCxRQUFRbEM7QUFDdEIsZ0JBQU1vQyxTQUFTNUMsU0FBUzJDLE9BQU8xQyxPQUFPO0FBQ3RDeUMsa0JBQVFsQyxRQUFRb0M7UUFDakIsUUFBUTtBQUNQO1FBQ0Q7TUFDRDtBQUNBakIsa0JBQVksYUFBYWhWLFNBQVNDLFNBQVNpVyxXQUFXO0FBQ3REbEIsa0JBQVksYUFBYWhWLFNBQVNDLFNBQVNrVyxXQUFXO0FBQ3RELFlBQU1DLE9BQU9oQixHQUFHQyxLQUFLQyxjQUFjLFFBQVE7QUFDM0MsVUFBSWMsTUFBTTtBQUNULGNBQU1DLE1BQUEsR0FBQXZXLE9BQVN0QixHQUFHSSxLQUFLMFgsYUFBVyxrRUFBQSxFQUFBeFcsT0FBbUVzVyxJQUFJO0FBQ3pHRyxzQkFBY0YsS0FBSyxNQUFNRyxTQUFTO01BQ25DLE9BQU87QUFDTkEsa0JBQVU7TUFDWDtJQUNELENBQUM7RUFDRjtBQUNBLFFBQU1BLFlBQWF4UCxPQUFNO0FBQ3hCLFFBQUl5UCxVQUFVckIsR0FBR0MsS0FBS0MsY0FBYyxhQUFhO0FBQ2pELFFBQUlvQixnQkFBZ0J0QixHQUFHQyxLQUFLQyxjQUFjLG1CQUFtQjtBQUM3RCxRQUFJcUIsZ0JBQWdCO0FBQ3BCLFFBQUkzUCxLQUFLQSxFQUFFdUQsUUFBUTZLLEdBQUdDLEtBQUtDLGNBQWMsUUFBUSxHQUFHO0FBQ25ELFlBQU1uTyxJQUFJeVAsYUFBYUgsU0FBU3pQLEVBQUV1RCxJQUFJO0FBQ3RDLFVBQUlwRCxNQUFNLE9BQU87QUFDaEJ1UCx3QkFBZ0I7QUFDaEJDLHdCQUFnQnBQLFlBQVksK0RBQStEO0FBQzNGa1Asa0JBQVV6VixhQUFheVYsU0FBUyxDQUFDckIsR0FBR0MsS0FBS0MsY0FBYyxRQUFRLEdBQUcsYUFBYSxXQUFXLENBQUM7TUFDNUYsT0FBTztBQUNObUIsa0JBQVV0UDtNQUNYO0lBQ0Q7QUFDQSxRQUFJdVAsZUFBZTtBQUNsQixZQUFNRyxNQUFNRixnQkFBZ0JwUCxZQUFZLHlEQUF5RDtBQUNqRyxZQUFNdVAsV0FBV0MsT0FBT0YsS0FBS0osT0FBTztBQUNwQyxVQUFJSyxVQUFVO0FBQ2JMLGtCQUFVSztNQUNYLE9BQU87QUFDTjtNQUNEO0lBQ0Q7QUFDQSxRQUFJTCxTQUFTO0FBQ1p6VyxlQUFTQyxTQUFTK1csVUFBVW5ELFFBQVE0QztJQUNyQztBQUdBN1UsZUFBV3FWLFdBQVcsR0FBRztFQUMxQjtBQUNBLFFBQU10QixpQkFBaUJBLE1BQU07QUFDNUIsV0FBT1AsR0FBR3ZaLEtBQUtxYixVQUFVO0VBQzFCO0FBQ0EsUUFBTUQsWUFBWUEsTUFBTTtBQUN2QixRQUFJN0IsR0FBR0MsS0FBS0MsY0FBYyxTQUFTLE1BQU1LLGVBQWUsR0FBRztBQUMxRDtJQUNEO0FBQ0EsVUFBTXdCLE1BQU0vQixHQUFHQyxLQUFLQyxjQUFjLFdBQVc7QUFDN0MsUUFBSTZCLEtBQUs7QUFDUixVQUFJblgsU0FBU0MsWUFBWUQsU0FBU0MsU0FBU2tYLEdBQUcsR0FBRztBQUNoRCxjQUFNQyxTQUFTcFgsU0FBU0MsU0FBU2tYLEdBQUc7QUFDcEMsY0FBTUUsTUFBTUMsUUFDWCx3RkFDQSxDQUFDRixPQUFPdkQsS0FBSyxDQUNkO0FBQ0EwRCxzQkFBY0YsR0FBRztBQUNqQnJYLGlCQUFTMkMsUUFBQSxJQUFBN0MsT0FBWUUsU0FBUzJDLE9BQUssR0FBQTtBQUNuQ3lVLGVBQU9JLE1BQU07TUFDZCxPQUFPO0FBQ04sYUFBS3BDLEdBQUdxQyxPQUNQSCxRQUFRLGdGQUFnRixDQUFDSCxHQUFHLENBQUMsR0FDN0Y7VUFBQ08sS0FBSztVQUFVQyxNQUFNO1FBQU8sQ0FDOUI7TUFDRDtJQUNEO0VBQ0Q7QUFDQSxRQUFNSixnQkFBaUJwUSxPQUFNO0FBQzVCLFVBQU15USxXQUFXNVgsU0FBU1EsaUJBQWlCLElBQUk7QUFDL0MsUUFBSW9YLFVBQVU7QUFDYixZQUFNQyxNQUFNN1gsU0FBU2lILGNBQWMsS0FBSztBQUN4QzRRLFVBQUlwUyxZQUFBLG9CQUFBM0YsT0FBZ0N0QixHQUFHc1osaUJBQWlCM1EsQ0FBQyxHQUFDLGFBQUE7QUFDMUR5USxlQUFTLENBQUMsRUFBRXhTLFdBQVcyUyxhQUFhRixLQUFLRCxTQUFTLENBQUMsQ0FBQztJQUNyRDtFQUNEO0FBQ0EsUUFBTWhCLGVBQWVBLENBQUNvQixVQUFVQyxTQUFTO0FBQ3hDLFFBQUk7QUFDSCxZQUFNbkssSUFBSW9LLFNBQVNELElBQUk7QUFDdkIsWUFBTSxDQUFDN2YsSUFBSSxJQUFJK2YsU0FBU3JLLEVBQUVzSyxNQUFNQyxLQUFLLEVBQUVDO0FBQ3ZDLFlBQU1DLFlBQVluZ0IsS0FBS21nQixVQUNyQmpOLE1BQU0sUUFBUSxFQUNkSSxLQUFLLEdBQUcsRUFDUmUsUUFBUSxZQUFZLEVBQUU7QUFDeEIsYUFBT3pMLGFBQWFnWCxVQUFVLENBQUM1ZixLQUFLb2dCLE9BQU9ELFdBQVduZ0IsS0FBS3FnQixhQUFhLGFBQWFyZ0IsS0FBS3lELElBQUksQ0FBQztJQUNoRyxRQUFRO0FBQ1AsYUFBTztJQUNSO0VBQ0Q7RUFjQSxNQUFNNmMsV0FBVztJQUNoQnRMLFlBQVlpSixLQUFLO0FBQ2hCLFVBQUksT0FBT3NDLG1CQUFtQixhQUFhO0FBQzFDLGFBQUtDLE9BQU8sSUFBSUQsZUFBZTtNQUNoQztBQU1BLFdBQUt0QyxNQUFNQTtBQU1YLFdBQUszTCxLQUFLO0FBT1YsV0FBS21PLGVBQWU7QUFPcEIsV0FBS0MsbUJBQW1CO0FBT3hCLFdBQUtDLFlBQVk7QUFNakIsV0FBS0MsVUFBVTtBQU9mLFdBQUtDLFNBQVM7QUFNZCxXQUFLQyxRQUFRO0lBQ2Q7Ozs7OztJQU1BQyxLQUFLN1QsR0FBRztBQUNQLFVBQUksQ0FBQyxLQUFLc1QsTUFBTTtBQUNmLGVBQU87TUFDUjtBQUNBLGFBQU8sS0FBS0EsS0FBS08sS0FBSzdULENBQUM7SUFDeEI7O0lBRUE4VCxRQUFRO0FBQ1AsVUFBSSxDQUFDLEtBQUtSLE1BQU07QUFDZixlQUFPO01BQ1I7QUFDQSxXQUFLSSxVQUFVO0FBQ2YsYUFBTyxLQUFLSixLQUFLUSxNQUFNO0lBQ3hCOztJQUVBQyxVQUFVO0FBQ1QsVUFBSSxDQUFDLEtBQUtULE1BQU07QUFDZixlQUFPO01BQ1I7QUFDQSxhQUFPLEtBQUtBLEtBQUtVO0lBQ2xCOztJQUVBQyxZQUFZO0FBQ1gsVUFBSSxDQUFDLEtBQUtYLE1BQU07QUFDZixlQUFPO01BQ1I7QUFDQSxXQUFLQSxLQUFLWSxLQUFLLEtBQUtQLFFBQVEsS0FBSzVDLEtBQUssS0FBSzZDLEtBQUs7QUFDaEQsV0FBS04sS0FBS2EsaUJBQWlCLGtCQUFrQmpiLEdBQUcxSixJQUFJNGtCLFNBQVM7SUFDOUQ7O0lBRUFDLGdCQUFnQjtBQUNmLFVBQUksQ0FBQyxLQUFLZixNQUFNO0FBQ2YsZUFBTztNQUNSO0FBQ0EsYUFBTyxLQUFLQSxLQUFLZ0I7SUFDbEI7Ozs7O0lBS0EzTCxRQUFRO0FBQ1AsVUFBSSxDQUFDLEtBQUsySyxNQUFNO0FBQ2Y7TUFDRDtBQUNBLFlBQU01VSxPQUFPO0FBQ2J4RixTQUFHSyxLQUFLZ2Isb0JBQW9CLEtBQUtuUCxFQUFFLElBQUkxRztBQUN2QyxXQUFLNFUsS0FBS08sS0FBSyxJQUFJO0lBQ3BCOzs7Ozs7OztJQVFBVyxzQkFBc0I7QUFDckIsVUFBSSxDQUFDLEtBQUtsQixNQUFNO0FBQ2YsZUFBTztNQUNSO0FBQ0EsVUFBSW1CO0FBQ0osVUFBSTtBQUNIQSxrQkFBVSxLQUFLbkIsS0FBS29CLGtCQUFrQixlQUFlO01BQ3RELFFBQVE7TUFFUjtBQUNBLFVBQUlELFNBQVM7QUFDWixlQUFPLElBQUlFLEtBQUtGLE9BQU87TUFDeEI7QUFDQSxhQUFPO0lBQ1I7Ozs7OztJQU1BRyxZQUFZbkcsR0FBRztBQUNkLFVBQUksQ0FBQyxLQUFLNkUsTUFBTTtBQUNmO01BQ0Q7QUFDQSxXQUFLQSxLQUFLdUIscUJBQXFCcEc7SUFDaEM7SUFDQXFHLFlBQVk7QUFDWCxVQUFJLENBQUMsS0FBS3hCLE1BQU07QUFDZixlQUFPO01BQ1I7QUFDQSxhQUFPLEtBQUtBLEtBQUt5QjtJQUNsQjtFQUNEO0FBQ0EsTUFBSTNCLFdBQVc7QUFDZmxhLEtBQUdLLEtBQUtnYixzQkFBc0IsQ0FBQztBQVcvQixRQUFNUyxjQUFjLFNBQVNDLGFBQVlsRSxLQUFLM0wsSUFBSThQLFVBQVVDLFdBQVc7QUFDdEUsVUFBTXpULElBQUksSUFBSTBSLFdBQVdyQyxHQUFHO0FBQzVCLFFBQUksQ0FBQ3JQLEVBQUU0UixNQUFNO0FBQ1osYUFBTztJQUNSO0FBQ0E1UixNQUFFMEQsS0FBS0E7QUFDUDFELE1BQUV1UyxVQUFVO0FBQ1prQixrQkFBQUEsWUFBYztBQUNkLFVBQU0xRyxJQUFJLFdBQVk7QUFDckIsVUFBSS9NLEVBQUUyUyxjQUFjLE1BQU0sR0FBRztBQUM1QixlQUFPbmIsR0FBR0ssS0FBS2diLG9CQUFvQixLQUFLblAsRUFBRTtBQUMxQyxZQUFJO0FBQ0gsY0FBSTFELEVBQUVvVCxVQUFVLE1BQU0sS0FBSztBQUMxQnBULGNBQUV1RCxPQUFPdkQsRUFBRXFTLFFBQVE7QUFDbkJyUyxjQUFFNlIsZUFBZTdSLEVBQUU4UyxvQkFBb0I7QUFDdkNVLHFCQUFTeFQsQ0FBQztVQUNYLFdBQVcsT0FBT3lULGNBQWMsVUFBVTtBQUN6QyxnQkFBSUEsWUFBWSxHQUFHO0FBRWxCRiwyQkFBWWxFLEtBQUszTCxJQUFJOFAsVUFBVUMsWUFBWSxDQUFDO1lBQzdDO1VBQ0QsV0FBVyxPQUFPQSxjQUFjLFlBQVk7QUFDM0NBLHNCQUFVelQsR0FBR3FQLEtBQUszTCxJQUFJOFAsUUFBUTtVQUMvQjtRQUNELFFBQVE7UUFFUjtNQUNEO0lBQ0Q7QUFDQXhULE1BQUVrVCxZQUFZbkcsQ0FBQztBQUNmLFdBQU8vTTtFQUNSO0FBYUEsUUFBTTBULGVBQWVBLENBQUNyRSxLQUFLM0wsSUFBSThQLFVBQVVqUSxNQUFNc08sY0FBY3pRLFVBQVU7QUFDdEUsVUFBTXBCLElBQUlzVCxZQUFZakUsS0FBS21FLFFBQVE7QUFDbkN4VCxNQUFFb0IsUUFBUUE7QUFDVnBCLE1BQUUwRCxLQUFLQTtBQUNQMUQsTUFBRXVELE9BQU9BO0FBQ1R2RCxNQUFFNlIsZUFBZUE7QUFDakIsV0FBTzJCLFNBQVN4VCxDQUFDO0VBQ2xCO0FBU0EsUUFBTXVQLGdCQUFnQkEsQ0FBQ0YsS0FBSzNMLElBQUk4UCxhQUFhO0FBQzVDLFVBQU14VCxJQUFJc1QsWUFBWWpFLEtBQUszTCxJQUFJOFAsUUFBUTtBQUN2QyxRQUFJLE9BQU94VCxNQUFNLFVBQVc7QUFDM0IsYUFBT0E7SUFDUjtBQUNBQSxNQUFFaUgsTUFBTTtBQUNSLFdBQU9qSDtFQUNSO0FBSUEsUUFBTWtHLG9CQUFvQkEsTUFBTTtBQUMvQixlQUFXNUgsS0FBSzlHLEdBQUdLLEtBQUtnYixxQkFBcUI7QUFDNUMsVUFBSSxDQUFDOUksT0FBT0MsT0FBT3hTLEdBQUdLLEtBQUtnYixxQkFBcUJ2VSxDQUFDLEdBQUc7QUFDbkQ7TUFDRDtBQUNBLFVBQUk7QUFDSDlHLFdBQUdLLEtBQUtnYixvQkFBb0J2VSxDQUFDLEVBQUUwVCxVQUFVO0FBQ3pDeGEsV0FBR0ssS0FBS2diLG9CQUFvQnZVLENBQUMsRUFBRThULE1BQU07QUFDckMsZUFBTzVhLEdBQUdLLEtBQUtnYixvQkFBb0J2VSxDQUFDO01BQ3JDLFFBQVE7TUFFUjtJQUNEO0VBQ0Q7QUFxQ0EsUUFBTXFWLFFBQVEsQ0FBQztBQUNmLFFBQU1DLG1CQUFtQkEsTUFBTTtBQUFBLFFBQUFDO0FBQzlCLFFBQUlDO0FBRUpILFVBQU1JLE9BQU87TUFDWkMsU0FBUztNQUNUbmYsTUFBTSxDQUFDO01BQ1ArQyxNQUFNO1FBQ0xxYyxNQUFNemMsR0FBR0ksS0FBS3FjO1FBQ2RDLFdBQVcxYyxHQUFHSSxLQUFLc2M7UUFDbkJDLHFCQUFxQjtNQUN0QjtNQUNBQyxPQUFPO1FBQ05DLFVBQUEsR0FBQXZiLE9BQWF0QixHQUFHSSxLQUFLMGMsYUFBVyxHQUFBOztRQUVoQ0MsTUFBTTtRQUNOaG1CLFFBQVE7UUFDUmltQixpQkFBaUI7TUFDbEI7TUFDQUMsUUFBUTtRQUNQNWYsTUFBTXVaLEdBQUdzRyxPQUFPQyxJQUFJLHVCQUF1QixFQUFFbmQsR0FBRzRLLFFBQVE7UUFDeEQ5VCxPQUFPOGYsR0FBR3NHLE9BQU9DLElBQUksdUJBQXVCLEVBQUVuZCxHQUFHd0ssU0FBUztRQUMxRDVULFVBQVVnZ0IsR0FBR3NHLE9BQU9DLElBQUksdUJBQXVCLEVBQUVuZCxHQUFHMkssWUFBWTs7UUFFaEU3UyxRQUFRLENBQUMsT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLEtBQUs7TUFDNUY7SUFDRDtBQUVBLEtBQUF1a0IsbUJBQUFGLE1BQU1JLEtBQUtsZixNQUFLK2YsU0FBaEJmLGlCQUFnQmUsT0FBUztBQUN6QmpCLFVBQU1JLEtBQUtsZixLQUFLZ2dCLFlBQUEsS0FBQS9iLE9BQWlCNmEsTUFBTUksS0FBS1UsT0FBTzVmLE1BQUksR0FBQSxFQUFBaUUsT0FBSTZhLE1BQU1JLEtBQUtsZixLQUFLK2YsTUFBSSxHQUFBLEVBQUE5YixPQUFJNmEsTUFBTUksS0FBS2xmLEtBQUsrZixNQUFJLElBQUE7QUFFdkdqQixVQUFNbUIsY0FBYyxJQUFJdlAsT0FBQSx3QkFBQXpNLE9BQ0M2YSxNQUFNSSxLQUFLVSxPQUFPbm1CLE9BQUssNkRBQUEsR0FDL0MsR0FDRDtFQUNEO0FBQ0FxbEIsUUFBTW9CLE9BQU8sU0FBVTdJLE1BQU1FLElBQUk7QUFDaEMsUUFBSSxPQUFPRixTQUFTLFVBQVU7QUFDN0JBLGFBQU9sVCxTQUFTZ0YsZUFBQSxHQUFBbEYsT0FBa0JvVCxJQUFJLENBQUU7SUFDekM7QUFDQSxRQUFJLE9BQU9FLE9BQU8sVUFBVTtBQUMzQkEsV0FBS3BULFNBQVNnRixlQUFBLEdBQUFsRixPQUFrQnNULEVBQUUsQ0FBRTtJQUNyQztBQUNBQSxPQUFHM04sWUFBWSxLQUFLdVcsUUFBUTlJLEtBQUtXLEtBQUs7RUFDdkM7QUFDQThHLFFBQU1xQixVQUFXcGQsVUFBUztBQUN6QixVQUFNcWQsS0FBSyxPQUFPcmQsU0FBUyxXQUFXQSxLQUFLNk4sUUFBUSxPQUFPLEVBQUUsRUFBRW5CLE1BQU0sSUFBSSxJQUFJMU07QUFDNUUsUUFBSWtQLElBQUk7QUFDUixRQUFJbEMsSUFBSTtBQUNSLFFBQUlzUTtBQUVKLFVBQU1DLFNBQVNBLE1BQU07QUFDcEIsYUFBT0YsR0FBRzVhO0lBQ1g7QUFDQSxVQUFNK2EsS0FBS0EsTUFBTTtBQUNoQixhQUFPSCxHQUFHSSxNQUFNO0lBQ2pCO0FBQ0EsVUFBTUMsS0FBTW5WLE9BQU07QUFDakIyRyxXQUFLM0c7SUFDTjtBQUdBLFVBQU00TSxJQUFJLFNBQVN3SSxNQUFLeGIsTUFBTTtBQUM3QixVQUFJZ00sSUFBSTtBQUNSLFlBQU1yTCxJQUFJWDtBQUNWLFVBQUksQ0FBQ3liLEVBQUMsSUFBSTlhO0FBQ1YsVUFBSSthLEtBQUk7QUFDUixVQUFJQztBQUNKLFVBQUlDO0FBQ0osYUFBTzVQLElBQUlyTCxFQUFFTCxRQUFRMEwsS0FBSztBQUN6QixhQUFLNFAsS0FBSUgsR0FBRTNQLFFBQVEsR0FBRyxLQUFLLEdBQUc7QUFFN0I2UCxjQUFJRixHQUFFdEksT0FBT3lJLEtBQUksQ0FBQyxNQUFNLE1BQU0sSUFBSTtBQUNsQzVQLGVBQUsyUDtBQUNMRCxnQkFBS0QsR0FBRTdQLE1BQU0sR0FBR3hMLEtBQUt5TCxJQUFJLEdBQUcrUCxFQUFDLENBQUMsS0FBS0QsSUFBSSxNQUFNaGIsRUFBRXFMLENBQUM7QUFDaER5UCxlQUFJQSxHQUFFN1AsTUFBTWdRLEtBQUksSUFBSUQsQ0FBQztRQUN0QixPQUFPO0FBQ047UUFDRDtNQUNEO0FBQ0EsYUFBT0QsS0FBSUQ7SUFDWjtBQUNBLFVBQU1JLGdCQUFpQnpWLE9BQU07QUFDNUIsYUFBT0EsRUFBRXNGLFFBQVEsTUFBTSxPQUFPLEVBQUVBLFFBQVEsTUFBTSxNQUFNLEVBQUVBLFFBQVEsTUFBTSxNQUFNO0lBQzNFO0FBT0EsVUFBTW9RLGtCQUFtQjFWLE9BQU07QUFDOUIsYUFBT0EsRUFDTHNGLFFBQVEsTUFBTSxNQUFNLEVBQ3BCQSxRQUFRLE1BQU0sTUFBTSxFQUNwQkEsUUFBUSxNQUFNLE9BQU8sRUFDckJBLFFBQVEsT0FBTyxPQUFPLEVBQ3RCQSxRQUFRLE1BQU0sT0FBTztJQUN4QjtBQUNBLFVBQU1xUSxrQkFBbUIzVixPQUFNO0FBQzlCLGFBQU8wVixnQkFBZ0IxVixDQUFDLEVBQUVzRixRQUFRLE1BQU0sT0FBTyxFQUFFQSxRQUFRLE1BQU0sUUFBUTtJQUN4RTtBQUVBLFVBQU1zUSxhQUFhQSxDQUFDcmIsR0FBR3NiLE1BQU07QUFDNUIsVUFBSWpRO0FBQ0osVUFBSWtRO0FBQ0osV0FBS2xRLElBQUksR0FBR2tRLElBQUk5YixLQUFLQyxJQUFJTSxFQUFFTCxRQUFRMmIsRUFBRTNiLE1BQU0sR0FBRzBMLElBQUlrUSxHQUFHbFEsS0FBSztBQUN6RCxZQUFJckwsRUFBRXdTLE9BQU9uSCxDQUFDLE1BQU1pUSxFQUFFOUksT0FBT25ILENBQUMsR0FBRztBQUNoQztRQUNEO01BQ0Q7QUFDQSxhQUFPQTtJQUNSO0FBSUEsVUFBTW1RLHlCQUEwQlIsT0FBTTtBQUNyQyxhQUFPLE9BQU9BLE1BQU0sV0FBV1QsR0FBRyxDQUFDLEtBQUtBLEdBQUcsQ0FBQyxFQUFFdFAsTUFBTSxHQUFHK1AsRUFBRXJiLE1BQU0sTUFBTXFiLElBQUtSLElBQUlELEdBQUcsQ0FBQyxLQUFLQSxHQUFHLENBQUMsRUFBRXZQLE1BQU1nUSxDQUFDO0lBQ3JHO0FBQ0EsVUFBTVMsb0JBQXFCVCxPQUFNO0FBQ2hDLGFBQU9ULEdBQUcsQ0FBQyxNQUFNUztJQUNsQjtBQUNBLFVBQU1VLGNBQWVULFFBQU07QUFDMUIsYUFBT1YsR0FBRyxDQUFDLEVBQUUvSCxPQUFPeUksRUFBQztJQUN0QjtBQUNBLFVBQU1VLE9BQVFsVyxPQUFNO0FBQ25CbVYsU0FBR25WLENBQUM7QUFDSmlWLFNBQUc7SUFDSjtBQUNBLFVBQU1rQixhQUFhQSxNQUFNO0FBQ3hCLFVBQUlDLE9BQU87QUFDWCxhQUFPcEIsT0FBTyxLQUFLZSx1QkFBdUIsaUJBQWlCLEdBQUc7QUFDN0QsY0FBTU0sVUFBVXRCO0FBQ2hCRSxXQUFHO0FBQ0gsY0FBTXFCLE9BQU9WLFdBQVdRLE1BQU1DLFFBQVEsQ0FBQyxDQUFDO0FBRXhDLGlCQUFTRSxVQUFVSCxLQUFLbGMsU0FBUyxHQUFHcWMsV0FBV0QsTUFBTUMsV0FBVztBQUMvRCxnQkFBTUMsS0FBS0osS0FBS3JKLE9BQU93SixPQUFPO0FBQzlCLGNBQUlDLE9BQU8sS0FBSztBQUNmckIsZUFBRyxPQUFPO1VBQ1gsV0FBV3FCLE9BQU8sS0FBSztBQUN0QnJCLGVBQUcsT0FBTztVQUNYLFdBQVcsQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFelAsUUFBUTJRLFFBQVEsQ0FBQyxFQUFFdEosT0FBT3dKLE9BQU8sQ0FBQyxHQUFHO0FBRTlEcEIsZUFBRyxPQUFPO1VBQ1g7UUFDRDtBQUVBLGlCQUFTc0IsV0FBV0gsTUFBTUcsV0FBV0osUUFBUSxDQUFDLEVBQUVuYyxRQUFRdWMsWUFBWTtBQUNuRSxnQkFBTUMsS0FBS0wsUUFBUSxDQUFDLEVBQUV0SixPQUFPMEosUUFBUTtBQUNyQyxjQUFJQyxPQUFPLEtBQUs7QUFDZnZCLGVBQUcsTUFBTTtVQUNWLFdBQVd1QixPQUFPLEtBQUs7QUFDdEJ2QixlQUFHLE1BQU07VUFDVixXQUFXLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRXpQLFFBQVEwUSxLQUFLckosT0FBTzBKLFFBQVEsQ0FBQyxHQUFHO0FBRXpEdEIsZUFBRyxNQUFNO1VBQ1Y7UUFDRDtBQUNBLGdCQUFRa0IsUUFBUSxDQUFDLEVBQUVNLEdBQUcsRUFBRSxHQUFBO1VBQ3ZCLEtBQUs7VUFDTCxLQUFLO0FBQ0p4QixlQUFBLE9BQUF4YyxPQUFVaWUsb0JBQW9CUCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUU7QUFDM0M7VUFDRCxLQUFLLEtBQUs7QUFDVGxCLGVBQUcsTUFBTTtBQUNULGtCQUFNMEIsV0FBV1IsUUFBUSxDQUFDLEVBQUU5USxNQUFNLGNBQWM7QUFFaEQsZ0JBQUlzUixVQUFVO0FBQ2IxQixpQkFBR3lCLG9CQUFvQkMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNuQy9CLGlCQUFHZ0MsUUFBUUQsU0FBUyxDQUFDLENBQUM7WUFDdkIsT0FBTztBQUNOMUIsaUJBQUd5QixvQkFBb0JQLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkM7QUFDQTtVQUNEO1VBQ0EsS0FBSztBQUNKbEIsZUFBQSxPQUFBeGMsT0FBVWllLG9CQUFvQlAsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFFO1FBQzdDO0FBQ0EsU0FBQSxFQUFHRCxJQUFJLElBQUlDO01BQ1o7QUFFQSxlQUFTelEsSUFBSXdRLEtBQUtsYyxTQUFTLEdBQUcwTCxLQUFLLEdBQUdBLEtBQUs7QUFDMUN1UCxXQUFHdkksRUFBRSxRQUFRd0osS0FBS3JKLE9BQU9uSCxDQUFDLE1BQU0sTUFBTSxPQUFPd1EsS0FBS3JKLE9BQU9uSCxDQUFDLE1BQU0sTUFBTSxPQUFPLElBQUksQ0FBQztNQUNuRjtJQUNEO0FBQ0EsVUFBTW1SLGNBQWNBLE1BQU07QUFDekJiLFdBQUt0SixFQUFFLFdBQVdtSix1QkFBdUIsWUFBWSxJQUFJaEIsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ25FLGFBQU9DLE9BQU8sS0FBSztBQUNsQixZQUFJZSx1QkFBdUIsR0FBRyxHQUFHO0FBQ2hDLGtCQUFRRSxZQUFZLENBQUMsR0FBQTtZQUNwQixLQUFLO0FBQ0pDLG1CQUFLLFVBQVU7QUFDZjtZQUNELEtBQUs7QUFDSkEsbUJBQUt0SixFQUFFLFFBQVFtSix1QkFBdUIsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JEO1lBQ0Q7QUFDQ2lCLCtCQUFpQjtVQUNuQjtRQUNELFdBQVdqQix1QkFBdUIsR0FBRyxHQUFHO0FBQ3ZDaUIsMkJBQWlCO1FBQ2xCLE9BQU87QUFDTi9CLGFBQUc7UUFDSjtNQUNEO0lBQ0Q7QUFDQSxVQUFNK0IsbUJBQW1CQSxNQUFNO0FBQzlCLFVBQUlDO0FBQ0osVUFBSUM7QUFLSixZQUFNQyxXQUFXbEMsR0FBRyxFQUFFMVAsTUFBTSwyQ0FBMkM7QUFDdkUsVUFBSTRSLFNBQVMsQ0FBQyxNQUFNLE1BQU07QUFDekJoQyxXQUFHLFVBQVU7TUFDZCxPQUFPO0FBQ05BLFdBQUEsS0FBQXhjLE9BQVF3ZSxTQUFTLENBQUMsTUFBTSxNQUFNLE1BQU0sR0FBRyxDQUFFO01BQzFDO0FBQ0EsVUFBSUEsU0FBUyxDQUFDLEdBQUc7QUFFaEJELGtCQUFVO01BQ1gsT0FBTztBQUNOQSxrQkFBVTtNQUNYO0FBQ0EvQixTQUFHLEdBQUc7QUFDTixVQUFJZ0MsU0FBUyxDQUFDLE1BQU0sTUFBTTtBQUN6QmhDLFdBQUd5QixvQkFBb0JPLFNBQVNELE9BQU8sQ0FBQyxDQUFDO01BQzFDLE9BQU87QUFHTkQsa0JBQVVFLFNBQVNELE9BQU8sRUFBRS9TLE1BQU1nVCxTQUFTLENBQUMsTUFBTSxNQUFNLE9BQU8sU0FBUztBQUN4RWhDLFdBQUd5QixvQkFBb0JLLFFBQVEvQixNQUFNLENBQUMsQ0FBQztBQUN2QyxlQUFPK0IsUUFBUS9jLFNBQVMsR0FBRztBQUMxQjRhLGFBQUdnQyxRQUFRSyxTQUFTLENBQUMsSUFBSUYsUUFBUUcsSUFBSSxDQUFDO1FBQ3ZDO01BQ0Q7QUFDQSxVQUFJQyxLQUFLO0FBQ1QsWUFBTUMsS0FBSyxDQUFBO0FBQ1gsYUFBT3RDLE9BQU8sR0FBRztBQUNoQnNDLFdBQUdsWSxLQUFLNlYsR0FBRyxDQUFDO0FBQ1osWUFBSWMsdUJBQXVCLEdBQUcsR0FBRztBQUNoQyxjQUFJLENBQUNzQixJQUFJO0FBQ1I7VUFDRCxXQUFXcEIsWUFBWSxDQUFDLE1BQU0sS0FBSztBQUVsQ29CO1VBQ0Q7UUFDRCxXQUFXLENBQUNBLE1BQU10Qix1QkFBdUIsR0FBRyxHQUFHO0FBQzlDO1FBQ0QsV0FBV0EsdUJBQXVCLElBQUksR0FBRztBQUN4Q3NCO1FBQ0Q7TUFDRDtBQUNBLFVBQUlDLEdBQUdwZCxTQUFTLEdBQUc7QUFDbEJpYixXQUFHM0IsTUFBTXFCLFFBQVF5QyxFQUFFLENBQUM7TUFDckI7SUFDRDtBQUNBLFVBQU1DLFlBQVlBLE1BQU07QUFDdkJwQyxTQUFHLE9BQU87QUFDVixTQUFHO0FBQ0ZlLGFBQUEsR0FBQXZkLE9BQVFpZSxvQkFBb0I5QixHQUFHLENBQUMsRUFBRXRQLE1BQU0sQ0FBQyxDQUFDLEdBQUMsSUFBQSxDQUFJO01BQ2hELFNBQVN3UCxPQUFPLEtBQUtlLHVCQUF1QixHQUFHO0FBQy9DWixTQUFHLFFBQVE7SUFDWjtBQUNBLFVBQU1xQyxvQkFBb0JBLE1BQU07QUFDL0JyQyxTQUFHc0MsWUFBWXhDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCO0FBQ0EsVUFBTXdDLGNBQWUxTixTQUFRO0FBRTVCLFVBQUl3RyxNQUFNeEcsSUFBSTJOLFVBQVUzTixJQUFJckUsUUFBUSxHQUFHLElBQUksR0FBR3FFLElBQUk3UCxTQUFTLENBQUM7QUFDNUQsVUFBSXlkO0FBQ0osVUFBSUMsT0FBTyxDQUFBO0FBQ1gsVUFBSUM7QUFDSixVQUFJQyxVQUFVO0FBQ2QsVUFBSUMsUUFBUTtBQUNaLFVBQUlDLFFBQVE7QUFDWixVQUFJQyxTQUFTO0FBQ2IsVUFBSUMsUUFBUTtBQUNaLFVBQUksS0FBSzNhLEtBQUtnVCxHQUFHLEdBQUc7QUFFbkIsWUFBSTRILFVBQVU7QUFDZCxZQUFJQztBQUNKLGlCQUFTeFMsSUFBSTJLLElBQUlyVyxTQUFTLEdBQUcwTCxJQUFJLEdBQUdBLEtBQUs7QUFDeEMsY0FBSTJLLElBQUl4RCxPQUFPbkgsQ0FBQyxNQUFNLE9BQU8sQ0FBQ3VTLFNBQVM7QUFDdENDLHdCQUFZN0gsSUFBSS9LLE1BQU1JLElBQUksQ0FBQztBQUMzQjJLLGtCQUFNQSxJQUFJL0ssTUFBTSxHQUFHeEwsS0FBS3lMLElBQUksR0FBR0csQ0FBQyxDQUFDO0FBQ2pDO1VBQ0QsT0FBTztBQUNOLG9CQUFRMkssSUFBSS9LLE1BQU1JLElBQUksR0FBR0EsSUFBSSxJQUFJLENBQUMsR0FBQTtjQUNqQyxLQUFLO0FBQ0p1UztBQUNBdlM7QUFDQTtjQUNELEtBQUs7QUFDSnVTO0FBQ0F2UztZQUNGO1VBQ0Q7UUFDRDtBQUNBZ1MsZUFBT3JILElBQUlwTSxNQUFNLFVBQVU7QUFDM0J5VCxhQUFLeFksS0FBS2daLFNBQVM7QUFDbkJQLG1CQUFXRCxLQUFLMUMsTUFBTTtBQUN0QixZQUFJbUQ7QUFDSixlQUFPVCxLQUFLMWQsU0FBUyxHQUFHMGQsS0FBSzFDLE1BQU0sR0FBRztBQUNyQ21ELG9CQUFVVCxLQUFLLENBQUMsRUFBRXJTLE1BQU0sd0JBQXdCO0FBQ2hELGNBQUk4UyxTQUFTO0FBQ1osYUFBQSxFQUFHVixLQUFLLElBQUlVO1VBQ2IsT0FBTztBQUNOLG9CQUFRVCxLQUFLLENBQUMsR0FBQTtjQUNiLEtBQUs7Y0FDTCxLQUFLO0FBQ0pHLHdCQUFRO0FBQ1JDLHdCQUFRO0FBQ1I7Y0FDRCxLQUFLO0FBQ0pBLHdCQUFRO0FBQ1I7Y0FDRCxLQUFLO2NBQ0wsS0FBSztjQUNMLEtBQUs7QUFDSkMseUJBQVM7QUFDVCxpQkFBQ0MsS0FBSyxJQUFJTjtBQUNWO2NBQ0QsS0FBSztBQUNKSyx5QkFBUztBQUNUQyx3QkFBUTtBQUNSO2NBQ0Q7QUFDQyxvQkFBSU4sS0FBSzFkLFdBQVcsR0FBRztBQUN0QixtQkFBQzRkLE9BQU8sSUFBSUY7Z0JBQ2I7WUFDRjtVQUNEO1FBQ0Q7TUFDRCxPQUFPO0FBQ05DLG1CQUFXdEg7TUFDWjtBQUNBLGFBQU87SUFDUjtBQUNBLFVBQU1xRyxzQkFBdUI3TSxTQUFRO0FBQ3BDLFVBQUlqRDtBQUNKLFVBQUl3UixVQUFVO0FBQ2QsVUFBSUMsV0FBVztBQUNmLFVBQUlDLFVBQVU7QUFDZCxVQUFJbkc7QUFDSixVQUFJb0c7QUFDSixVQUFJQztBQUNKLFVBQUlDLE9BQU87QUFDWCxjQUFRN1IsUUFBUWlELElBQUlyRSxRQUFRLE1BQU0vTSxPQUFPLFFBQVEsR0FBRyxHQUFHNGYsUUFBUSxPQUFPLElBQUk7QUFDekVJLGdCQUFRQyxrQkFBa0I3TyxJQUFJMk4sVUFBVVksU0FBU3hSLEtBQUssQ0FBQztBQUN2REEsaUJBQVM7QUFDVHlSLG1CQUFXelI7QUFDWDRSLGtCQUFVO0FBQ1YsV0FBRztBQUNGckcsaUJBQU90SSxJQUFJckUsUUFBUSxNQUFNL00sT0FBTyxRQUFRLEdBQUcsR0FBRzRmLFFBQVE7QUFDdERFLGtCQUFRMU8sSUFBSXJFLFFBQVEsT0FBTy9NLE9BQU8sUUFBUSxHQUFHLEdBQUc0ZixRQUFRO0FBQ3hELGNBQUlFLFNBQVNwRyxRQUFRQSxTQUFTLElBQUk7QUFDakMsZ0JBQUlvRyxVQUFVLElBQUk7QUFDakIscUJBQU9FLE9BQU9sRCxjQUFjMUwsSUFBSXZFLE1BQU1zQixLQUFLLENBQUM7WUFDN0M7QUFDQXlSLHVCQUFXRSxRQUFRO0FBQ25CLGdCQUFJRCxTQUFTO0FBQ1pBO1lBQ0QsT0FBTztBQUNORix3QkFBVUM7QUFDVkksc0JBQVFsRCxjQUFjMUwsSUFBSTJOLFVBQVU1USxPQUFPd1IsVUFBVSxDQUFDLENBQUM7QUFDdkRJLHdCQUFVO1lBQ1g7VUFDRCxPQUFPO0FBQ05ILHVCQUFXbEcsT0FBTztBQUNsQm1HO1VBQ0Q7UUFDRCxTQUFTRTtNQUNWO0FBQ0EsYUFBT0MsT0FBT0Msa0JBQWtCN08sSUFBSXZFLE1BQU04UyxPQUFPLENBQUM7SUFDbkQ7QUFDQSxVQUFNTyxzQkFBdUI5TyxTQUFRO0FBQ3BDLFVBQUlqRDtBQUNKLFVBQUl5UixXQUFXO0FBQ2YsVUFBSUMsVUFBVTtBQUNkLFVBQUlNO0FBQ0osVUFBSUw7QUFDSixVQUFJcEc7QUFDSixVQUFJMEc7QUFDSixVQUFJSjtBQUNKLGNBQVE3UixRQUFRaUQsSUFBSXJFLFFBQVEsTUFBTTZTLFFBQVEsT0FBTyxJQUFJO0FBQ3BELFlBQUksSUFBSW5ULE9BQUEsZ0JBQUF6TSxPQUF1QjZhLE1BQU1JLEtBQUtVLE9BQU9ubUIsT0FBSyxJQUFBLEdBQU0sR0FBRyxFQUFFb1AsS0FBS3dNLElBQUl2RSxNQUFNc0IsUUFBUSxDQUFDLENBQUMsR0FBRztBQUM1RmdTLGlCQUFPO0FBQ1BQLHFCQUFXelI7QUFDWCxhQUFHO0FBQ0Z5Uix3QkFBWTtBQUNaRSxvQkFBUTFPLElBQUlyRSxRQUFRLE1BQU02UyxRQUFRO0FBQ2xDbEcsbUJBQU90SSxJQUFJckUsUUFBUSxNQUFNNlMsUUFBUTtBQUNqQyxnQkFBSUUsU0FBU3BHLFFBQVFBLFNBQVMsSUFBSTtBQUNqQyxrQkFBSW9HLFVBQVUsSUFBSTtBQUNqQix1QkFBTzFPO2NBQ1I7QUFDQXdPLHlCQUFXRTtBQUNYLGtCQUFJRCxTQUFTO0FBQ1pBO2NBQ0QsT0FBTztBQUNOTyx3QkFBT2hQLElBQUkyTixVQUFVNVEsT0FBTzJSLFFBQVEsQ0FBQztBQUNyQ0UsdUJBQU9sQixZQUFZc0IsS0FBSTtBQUN2QmhQLHNCQUFNQSxJQUFJekUsUUFBUXlULE9BQU1KLElBQUk7QUFDNUJKLDJCQUFXelIsUUFBUTZSLEtBQUt6ZTtBQUN4QjRlLHVCQUFPO2NBQ1I7WUFDRCxPQUFPO0FBQ05QLHlCQUFXbEc7QUFDWG1HO1lBQ0Q7VUFDRCxTQUFTTTtRQUNWLE9BQU87QUFDTjtRQUNEO01BQ0Q7QUFDQSxhQUFPL087SUFDUjtBQUdBLFVBQU1pUCwwQkFBMkJqUCxTQUFRO0FBQ3hDLFVBQUlrUDtBQUNKLFVBQUlDO0FBQ0osVUFBSXRUO0FBQ0osVUFBSThRO0FBQ0osVUFBSXBCLEtBQUk7QUFDUixjQUFRMVAsSUFBSW1FLElBQUlyRSxRQUFRLE1BQU1nUixFQUFFLEtBQUssR0FBRztBQUN2Q3BCLGNBQUt2TCxJQUFJMk4sVUFBVWhCLElBQUk5USxDQUFDO0FBQ3hCOFEsYUFBSzlRLElBQUk7QUFDVCxZQUFJbUUsSUFBSWdELE9BQU9uSCxJQUFJLENBQUMsTUFBTSxLQUFLO0FBQzlCOFE7QUFDQXdDLGVBQUssQ0FBQ0E7QUFDTjVELGdCQUFLNEQsS0FBSyxhQUFhO1FBQ3hCLE9BQU87QUFDTkQsZUFBSyxDQUFDQTtBQUNOM0QsZ0JBQUsyRCxLQUFLLFNBQVM7UUFDcEI7TUFDRDtBQUNBLGFBQU8zRCxLQUFJdkwsSUFBSXZFLE1BQU1rUixFQUFFO0lBQ3hCO0FBQ0EsVUFBTWtDLG9CQUFxQjdPLFNBQVE7QUFDbENBLFlBQU04TyxvQkFBb0I5TyxHQUFHO0FBQzdCQSxZQUFNaVAsd0JBQXdCalAsR0FBRztBQUVqQ0EsWUFBTUEsSUFBSXpFLFFBQVEseUJBQXlCLEVBQUU7QUFFN0MsVUFBSTZULE9BQU8sb0JBQUlyRyxLQUFLO0FBQ3BCLFVBQUlqa0IsVUFBVXNxQixLQUFLQyxjQUFjO0FBQ2pDLFVBQUl2cUIsVUFBVSxJQUFJO0FBQ2pCQSxrQkFBQSxJQUFBOEosT0FBYzlKLE9BQU87TUFDdEI7QUFDQXNxQixhQUFPdk0sRUFDTixvQkFDQXVNLEtBQUtFLFlBQVksR0FDakJ4cUIsU0FDQXNxQixLQUFLRyxXQUFXLEdBQ2hCOUYsTUFBTUksS0FBS1UsT0FBT25sQixPQUFPZ3FCLEtBQUtJLFlBQVksQ0FBQyxHQUMzQ0osS0FBS0ssZUFBZSxDQUNyQjtBQUVBLGFBQ0N6UCxJQUVFekUsUUFBUSxjQUFjNlQsSUFBSSxFQUMxQjdULFFBQVEsY0FBQSxHQUFBM00sT0FBaUI2YSxNQUFNSSxLQUFLbGYsS0FBSytmLE1BQUksR0FBQSxFQUFBOWIsT0FBSXdnQixJQUFJLENBQUUsRUFDdkQ3VCxRQUFRLGNBQWNrTyxNQUFNSSxLQUFLbGYsS0FBSytmLElBQUksRUFFMUNuUCxRQUNBLElBQUlGLE9BQUEsY0FBQXpNLE9BQ1c2YSxNQUFNSSxLQUFLVSxPQUFPcm1CLFVBQVEsY0FBQSxFQUFBMEssT0FBZTZhLE1BQU1JLEtBQUtVLE9BQU9ubUIsT0FBSyxHQUFBLEVBQUF3SyxPQUFJNmEsTUFBTUksS0FBS25jLEtBQUtzYyxXQUFTLHVCQUFBLEdBQzNHLElBQ0QsR0FDQSxDQUFDMEYsS0FBS0MsSUFBSUMsT0FBTztBQUNoQixlQUFPL00sRUFDTixxQkFDQTRHLE1BQU1JLEtBQUtLLE1BQU1DLFdBQVd5QixnQkFBZ0IrRCxFQUFFLEdBQzlDaEUsZ0JBQWdCZ0UsRUFBRSxJQUFJaEUsZ0JBQWdCaUUsRUFBRSxDQUN6QztNQUNELENBQ0QsRUFFQ3JVLFFBQ0EsSUFBSUYsT0FBQSxZQUFBek0sT0FDUzZhLE1BQU1JLEtBQUtVLE9BQU9ybUIsVUFBUSxHQUFBLEVBQUEwSyxPQUFJNmEsTUFBTUksS0FBS25jLEtBQUtzYyxXQUFTLGFBQUEsR0FDbkUsSUFDRCxHQUNBLEVBQ0QsRUFFQ3pPLFFBQ0EsSUFBSUYsT0FBQSxjQUFBek0sT0FDVzZhLE1BQU1JLEtBQUtVLE9BQU9ybUIsVUFBUSxjQUFBLEVBQUEwSyxPQUFlNmEsTUFBTUksS0FBS1UsT0FBT25tQixPQUFLLEdBQUEsRUFBQXdLLE9BQUk2YSxNQUFNSSxLQUFLbmMsS0FBS3NjLFdBQVMsaUNBQUEsR0FDM0csSUFDRCxHQUNBLENBQUMwRixLQUFLQyxJQUFJQyxJQUFJQyxPQUFPO0FBQ3BCLGVBQU9oTixFQUNOLHFCQUNBNEcsTUFBTUksS0FBS0ssTUFBTUMsV0FBV3lCLGdCQUFnQitELEVBQUUsR0FDOUNoRSxnQkFBZ0JpRSxFQUFFLElBQUlqRSxnQkFBZ0JrRSxFQUFFLENBQ3pDO01BQ0QsQ0FDRCxFQUVDdFUsUUFBUSxxQkFBcUIsQ0FBQ21VLEtBQUtDLE9BQU87QUFDMUMsZUFBTzlNLEVBQUUscUJBQXFCNEcsTUFBTUksS0FBS0MsVUFBVThCLGdCQUFnQitELEVBQUUsR0FBR2hFLGdCQUFnQmdFLEVBQUUsQ0FBQztNQUM1RixDQUFDLEVBRUFwVSxRQUFRLHlCQUF5QixDQUFDbVUsS0FBS0MsSUFBSUMsT0FBTztBQUNsRCxlQUFPL00sRUFBRSxxQkFBcUI0RyxNQUFNSSxLQUFLQyxVQUFVOEIsZ0JBQWdCK0QsRUFBRSxHQUFHaEUsZ0JBQWdCaUUsRUFBRSxDQUFDO01BQzVGLENBQUMsRUFFQXJVLFFBQVEseUJBQXlCLENBQUNtVSxLQUFLQyxJQUFJQyxPQUFPO0FBQ2xELGVBQU8vTSxFQUNOLHFCQUNBNEcsTUFBTUksS0FBS0ssTUFBTUMsV0FBV3lCLGdCQUFnQitELEVBQUUsR0FDOUNoRSxnQkFBZ0JnRSxFQUFFLElBQUloRSxnQkFBZ0JpRSxFQUFFLENBQ3pDO01BQ0QsQ0FBQyxFQUVBclUsUUFBUSxtQ0FBbUMsQ0FBQ21VLEtBQUtDLElBQUlDLElBQUlDLE9BQU87QUFDaEUsZUFBT2hOLEVBQ04scUJBQ0E0RyxNQUFNSSxLQUFLSyxNQUFNQyxXQUFXeUIsZ0JBQWdCK0QsRUFBRSxHQUM5Q2hFLGdCQUFnQmlFLEVBQUUsSUFBSWpFLGdCQUFnQmtFLEVBQUUsQ0FDekM7TUFDRCxDQUFDLEVBRUF0VSxRQUFRLHlDQUF5QyxDQUFDbVUsS0FBS0MsSUFBSUMsSUFBSUMsT0FBTztBQUN0RSxlQUFPaE4sRUFDTixxQkFDQTRHLE1BQU1JLEtBQUtLLE1BQU1DLFdBQVd5QixnQkFBZ0IrRCxFQUFFLElBQUkvRCxnQkFBZ0JnRSxFQUFFLElBQUloRSxnQkFBZ0JpRSxFQUFFLEdBQzFGbEUsZ0JBQWdCaUUsRUFBRSxDQUNuQjtNQUNELENBQUMsRUFFQXJVLFFBQVEsZ0VBQWdFLENBQUNtVSxLQUFLQyxJQUFJQyxJQUFJQyxJQUFJQyxPQUFPO0FBQ2pHLGVBQU9qTixFQUNOLHdDQUNBK0ksZ0JBQWdCK0QsRUFBRSxHQUNsQi9ELGdCQUFnQmdFLEVBQUUsSUFBSWhFLGdCQUFnQmlFLEVBQUUsR0FDeENsRSxnQkFBZ0JtRSxFQUFFLENBQ25CO01BQ0QsQ0FBQyxFQUNBdlUsUUFBUSxzQkFBc0IsQ0FBQ21VLEtBQUtDLE9BQU87QUFDM0MsZUFBTzlNLEVBQUUsK0NBQStDK0ksZ0JBQWdCK0QsRUFBRSxDQUFDO01BQzVFLENBQUMsRUFDQXBVLFFBQVEsK0NBQStDLENBQUNtVSxLQUFLQyxJQUFJQyxJQUFJQyxPQUFPO0FBQzVFLGVBQU9oTixFQUNOLDBDQUNBK0ksZ0JBQWdCK0QsRUFBRSxHQUNsQi9ELGdCQUFnQmdFLEVBQUUsSUFBSWhFLGdCQUFnQmlFLEVBQUUsR0FDeENsRSxnQkFBZ0JnRSxFQUFFLEdBQ2xCaEUsZ0JBQWdCaUUsRUFBRSxJQUFJakUsZ0JBQWdCa0UsRUFBRSxDQUN6QztNQUNELENBQUMsRUFDQXRVLFFBQ0Esc0VBQ0EsQ0FBQ21VLEtBQUtDLElBQUlDLElBQUlDLElBQUlDLE9BQU87QUFDeEIsZUFBT2pOLEVBQ04sMkNBQ0E4SSxnQkFBZ0JnRSxFQUFFLEdBQ2xCL0QsZ0JBQWdCZ0UsRUFBRSxHQUNsQmhFLGdCQUFnQmlFLEVBQUUsSUFBSWpFLGdCQUFnQmtFLEVBQUUsR0FDeENuRSxnQkFBZ0JpRSxFQUFFLEdBQ2xCakUsZ0JBQWdCa0UsRUFBRSxJQUFJbEUsZ0JBQWdCbUUsRUFBRSxDQUN6QztNQUNELENBQ0QsRUFDQ3ZVLFFBQVEsYUFBYSxFQUFFLEVBQ3ZCQSxRQUFRLGVBQWUsRUFBRSxFQUN6QkEsUUFBUSxhQUFhLEVBQUUsRUFDdkJBLFFBQVEscUJBQXFCLEVBQUU7SUFFbkM7QUFFQSxXQUFPMFAsT0FBTyxLQUFLO0FBQ2xCLFVBQUllLHVCQUF1QixzQkFBc0IsR0FBRztBQUNuRHRSLFlBQUk7QUFDSnlSLGFBQUt0SixFQUFFLGVBQWVtSSxFQUFFLENBQUMsRUFBRTdhLFFBQVEwYyxvQkFBb0I3QixFQUFFLENBQUMsQ0FBQyxHQUFHQSxFQUFFLENBQUMsRUFBRTdhLFFBQVE2YSxFQUFFLENBQUMsQ0FBQyxDQUFDO01BQ2pGLFdBQVdnQix1QkFBdUIsU0FBUyxHQUFHO0FBQzdDdFIsWUFBSTtBQUNKMFIsbUJBQVc7TUFDWixXQUFXSix1QkFBdUIsR0FBRyxHQUFHO0FBQ3ZDdFIsWUFBSTtBQUNKOFMsa0JBQVU7TUFDWCxXQUFXeEIsdUJBQXVCLElBQUksR0FBRztBQUN4Q3RSLFlBQUk7QUFDSnNTLG9CQUFZO01BQ2IsV0FBV2hCLHVCQUF1QixTQUFTLEdBQUc7QUFDN0N0UixZQUFJO0FBQ0p5UixhQUFLLE1BQU07TUFDWixXQUFXSCx1QkFBdUJ2QyxNQUFNbUIsV0FBVyxHQUFHO0FBQ3JEbFEsWUFBSTtBQUNKK1MsMEJBQWtCO01BQ25CLE9BQU87QUFFTixZQUFJeEIsa0JBQWtCLEVBQUUsR0FBRztBQUMxQnZSLGNBQUl1USxPQUFPLElBQUksS0FBS0YsR0FBRyxDQUFDLE1BQU07QUFDOUIsY0FBSXJRLEdBQUc7QUFDTnlSLGlCQUFLLFNBQVM7VUFDZjtRQUNELE9BQU87QUFDTixjQUFJLENBQUN6UixHQUFHO0FBQ1AwUSxlQUFHLEtBQUs7QUFDUjFRLGdCQUFJO1VBQ0w7QUFDQTBRLGFBQUEsR0FBQXhjLE9BQU1pZSxvQkFBb0I5QixHQUFHLENBQUMsQ0FBQyxHQUFDLEdBQUEsQ0FBRztRQUNwQztBQUNBRyxXQUFHO01BQ0o7SUFDRDtBQUNBLFdBQU90TztFQUNSO0FBQ0EsUUFBTW1ULFlBQVlBLENBQUNwSyxLQUFLcUssWUFBWTtBQUNuQ3ZHLFVBQU1JLEtBQUtDLFVBQVVrRztBQUNyQixXQUFPdkcsTUFBTXFCLFFBQVFuRixHQUFHO0VBQ3pCO0FBR0EsUUFBTXNLLHNCQUF1QjVXLFVBQVM7QUFDckMsV0FBTzZXLFlBQVk3VyxLQUFLbEosTUFBTTtFQUMvQjtBQUNBLFFBQU1nZ0Isd0JBQXlCOVcsVUFBUztBQUN2QyxVQUFNK1csTUFBTUMsV0FBV2hYLElBQUk7QUFDM0IsV0FBQSxHQUFBekssT0FBVXlMLE9BQU8rVixHQUFHLEdBQUMsUUFBQSxFQUFBeGhCLE9BQVN3aEIsUUFBUSxJQUFJL1osWUFBWSxVQUFVLElBQUlBLFlBQVksV0FBVyxDQUFDO0VBQzdGO0FBQ0EsUUFBTWlhLHlCQUEwQmpYLFVBQVM7QUFDeEMsVUFBTStXLE1BQU1HLFlBQVlsWCxJQUFJO0FBQzVCLFdBQUEsR0FBQXpLLE9BQVV5TCxPQUFPK1YsR0FBRyxHQUFDLFFBQUEsRUFBQXhoQixPQUFTd2hCLFFBQVEsSUFBSS9aLFlBQVksT0FBTyxJQUFJQSxZQUFZLFFBQVEsQ0FBQztFQUN2RjtBQUNBLFFBQU1tYSw2QkFBOEJuWCxVQUFTO0FBQzVDLFVBQU0rVyxNQUFNSyxnQkFBZ0JwWCxJQUFJO0FBQ2hDLFdBQUEsR0FBQXpLLE9BQVV5TCxPQUFPK1YsR0FBRyxHQUFDLFFBQUEsRUFBQXhoQixPQUFTd2hCLFFBQVEsSUFBSS9aLFlBQVksVUFBVSxJQUFJQSxZQUFZLFlBQVksQ0FBQztFQUM5RjtBQUNBLFFBQU1xYSwwQkFBMEJBLENBQUNDLE9BQU96WCxhQUFhO0FBQ3BELFVBQU0yUCxVQUFVM1AsU0FBU3lPO0FBQ3pCLFVBQU1pSixNQUFNLG9CQUFJN0gsS0FBSztBQUNyQixVQUFNOEgsTUFBTUQsTUFBTS9IO0FBQ2xCLFFBQUlBLFdBQVdoYSxXQUFXLG1CQUFtQixHQUFHO0FBQy9DLGFBQU91WCxRQUFRLFVBQVUsQ0FBQzBLLFVBQVVELEdBQUcsQ0FBQyxDQUFDLEVBQUV0VixRQUFRLE1BQU0sUUFBUTtJQUNsRTtBQUNBLFdBQU87RUFDUjtBQUNBLFFBQU11VixZQUFhRCxTQUFRO0FBRTFCLFFBQUlyZ0IsSUFBSSxJQUFJcWdCO0FBQ1osVUFBTUUsS0FBS3ZnQjtBQUNYLFVBQU13Z0IsU0FBUztBQUNmLFVBQU1DLFNBQVMsS0FBS0Q7QUFDcEIsVUFBTUUsVUFBVSxLQUFLRDtBQUNyQixVQUFNRSxTQUFTLEtBQUtEO0FBQ3BCLFVBQU1FLFVBQVUsSUFBSUQ7QUFDcEIsVUFBTUUsWUFBWTdnQixJQUFLQSxJQUFJNGdCLFdBQVlBO0FBQ3ZDNWdCLFNBQUs2Z0IsV0FBV0Q7QUFDaEIsVUFBTUUsU0FBU0MsUUFBUUYsVUFBVSxNQUFNO0FBQ3ZDLFVBQU1HLFdBQVdoaEIsSUFBS0EsSUFBSTJnQixVQUFXQTtBQUNyQzNnQixTQUFLZ2hCLFVBQVVMO0FBQ2YsVUFBTU0sUUFBUUYsUUFBUUMsU0FBUyxLQUFLO0FBQ3BDLFVBQU1FLFlBQVlsaEIsSUFBS0EsSUFBSTBnQixXQUFZQTtBQUN2QzFnQixTQUFLa2hCLFdBQVdSO0FBQ2hCLFVBQU1TLFNBQVNKLFFBQVFHLFVBQVUsTUFBTTtBQUN2QyxVQUFNRSxXQUFXcGhCLElBQUtBLElBQUl5Z0IsVUFBV0E7QUFDckN6Z0IsU0FBS29oQixVQUFVWDtBQUNmLFVBQU1ZLFFBQVFOLFFBQVFLLFNBQVMsUUFBUTtBQUN2QyxVQUFNRSxXQUFXdGhCLElBQUtBLElBQUl3Z0IsVUFBV0E7QUFDckN4Z0IsU0FBS3NoQixVQUFVZDtBQUNmLFVBQU1lLFFBQVFSLFFBQVFPLFNBQVMsUUFBUTtBQUN2QyxRQUFJZixLQUFLLElBQUlLLFNBQVM7QUFDckIsYUFBT0U7SUFDUjtBQUNBLFFBQUlQLEtBQUtLLFNBQVM7QUFDakIsYUFBQSxHQUFBeGlCLE9BQVUwaUIsUUFBTSxHQUFBLEVBQUExaUIsT0FBSTZpQixLQUFLO0lBQzFCO0FBQ0EsUUFBSVYsS0FBS0ksUUFBUTtBQUNoQixhQUFBLEdBQUF2aUIsT0FBVTZpQixPQUFLLEdBQUEsRUFBQTdpQixPQUFJK2lCLE1BQU07SUFDMUI7QUFDQSxRQUFJWixLQUFLLElBQUlHLFNBQVM7QUFDckIsYUFBT1M7SUFDUjtBQUNBLFFBQUlaLEtBQUtHLFNBQVM7QUFDakIsYUFBQSxHQUFBdGlCLE9BQVUraUIsUUFBTSxHQUFBLEVBQUEvaUIsT0FBSWlqQixLQUFLO0lBQzFCO0FBQ0EsUUFBSWQsS0FBSyxLQUFLRSxRQUFRO0FBQ3JCLGFBQU9ZO0lBQ1I7QUFDQSxRQUFJZCxLQUFLRSxRQUFRO0FBQ2hCLGFBQUEsR0FBQXJpQixPQUFVaWpCLE9BQUssR0FBQSxFQUFBampCLE9BQUltakIsS0FBSztJQUN6QjtBQUNBLFdBQU9BO0VBQ1I7QUFDQSxRQUFNUixVQUFVQSxDQUFDbkIsS0FBS3BRLFFBQVE7QUFDN0IsV0FBQSxHQUFBcFIsT0FBVXdoQixLQUFHLEdBQUEsRUFBQXhoQixPQUFJd2hCLFFBQVEsSUFBSS9aLFlBQVkySixHQUFHLElBQUkzSixZQUFBLEdBQUF6SCxPQUFlb1IsS0FBRyxHQUFBLENBQUcsQ0FBQztFQUN2RTtBQUNBLFFBQU1nUyxrQkFBa0JBLENBQUNDLE1BQU01WSxNQUFNSCxhQUFhO0FBQ2pELFVBQU1nWixNQUFNLENBQUE7QUFBQyxRQUFBQyxhQUFBN1AsMkJBQ1MyUCxJQUFBLEdBQUFHO0FBQUEsUUFBQTtBQUF0QixXQUFBRCxXQUFBbGMsRUFBQSxHQUFBLEVBQUFtYyxTQUFBRCxXQUFBM1AsRUFBQSxHQUFBQyxRQUE0QjtBQUFBLGNBQWpCQyxVQUFBMFAsT0FBQXpQO0FBQ1YsWUFBSUQsV0FBVyxPQUFPQSxZQUFZLFlBQVk7QUFDN0MsZ0JBQU16TSxJQUFJeU0sUUFBUXJKLE1BQU1ILFVBQVVBLFNBQVNoQyxNQUFNblQsT0FBTztBQUN4RCxjQUFJa1MsR0FBRztBQUNOaWMsZ0JBQUk3YyxLQUFLWSxDQUFDO1VBQ1g7UUFDRDtNQUNEO0lBQUEsU0FBQTJNLEtBQUE7QUFBQXVQLGlCQUFBN1YsRUFBQXNHLEdBQUE7SUFBQSxVQUFBO0FBQUF1UCxpQkFBQXRQLEVBQUE7SUFBQTtBQUNBLFdBQU9xUDtFQUNSO0FBQ0EsUUFBTXRZLGNBQWNBLENBQUNQLE1BQU1ILGFBQWE7QUFDdkMsUUFBSSxDQUFDRyxRQUFRQSxLQUFLbEosV0FBVyxHQUFHO0FBQy9CLGFBQU9rRyxZQUFZLFlBQVk7SUFDaEM7QUFDQSxVQUFNZ2MsZUFBZXhqQixXQUFXLGNBQWMsS0FBSyxDQUFBO0FBQ25ELFVBQU15akIsb0JBQW9CempCLFdBQVcsbUJBQW1CLEtBQUssQ0FBQTtBQUM3RCxVQUFNMGpCLGdCQUFnQlAsZ0JBQWdCLENBQUMsR0FBR0ssY0FBYyxHQUFHQyxpQkFBaUIsR0FBR2paLE1BQU1ILFFBQVE7QUFDN0YsUUFBSXNaLFdBQVdELGNBQWMvWCxLQUFLLElBQUk7QUFDdEMsUUFBSWdZLGFBQWEsSUFBSTtBQUNwQkEsaUJBQVdDLFlBQVlELFFBQVE7SUFDaEM7QUFDQSxXQUFPQTtFQUNSO0FBRUEsUUFBTW5DLGFBQWM1VyxjQUFhO0FBQ2hDLFdBQU9BLFNBQVNXLE1BQU0sSUFBSSxFQUFFakssU0FBUztFQUN0QztBQUtBLFFBQU1vZ0IsY0FBZTlXLGNBQWE7QUFDakMsWUFBUUEsU0FBU1csTUFBTTlNLEdBQUdDLEdBQUduSixLQUFLLEVBQUUrTCxTQUFTLE1BQU03QyxHQUFHQyxHQUFHbWxCLG9CQUFvQjtFQUM5RTtBQUNBLFFBQU1qQyxrQkFBbUJoWCxjQUFhO0FBQ3JDLFlBQVFBLFNBQVNXLE1BQU05TSxHQUFHQyxHQUFHckosUUFBUSxFQUFFaU0sU0FBUyxNQUFNN0MsR0FBR0MsR0FBR29sQix1QkFBdUI7RUFDcEY7QUFDQSxRQUFNQyx3QkFBd0JBLENBQUN2WixNQUFNd1osV0FBVzl1QixZQUFZO0FBQzNELFVBQU0rdUIsU0FBU0MsVUFBVTFaLE1BQU10VixPQUFPO0FBQ3RDLFFBQUkrdUIsT0FBT0UsTUFBTTtBQUNoQixhQUFPM2MsWUFBWSxNQUFNO0lBQzFCO0FBQ0EsUUFBSXljLE9BQU9HLE1BQU07QUFDaEIsYUFBTzVjLFlBQVksY0FBYztJQUNsQztBQUNBLFdBQU87RUFDUjtBQUNBLFFBQU02Yyw0QkFBNEJBLENBQUM3WixNQUFNd1osV0FBVzl1QixZQUFZO0FBQy9ELFFBQUksQ0FBQzhLLFdBQVcsbUJBQW1CLEtBQUs5SyxRQUFRb3ZCLFVBQVUsR0FBRztBQUM1RCxhQUFPO0lBQ1I7QUFDQSxXQUFPQyxXQUFXL1osTUFBTXRWLE9BQU8sSUFBSXNTLFlBQVksVUFBVSxJQUFJO0VBQzlEO0FBQ0EsUUFBTTZaLGNBQWVFLFNBQVE7QUFDNUIsV0FBT0EsTUFBTSxNQUFNbmdCLEtBQUtvakIsTUFBTWpELE1BQU0sR0FBRyxJQUFJLEtBQUsvWixZQUFZLElBQUksSUFBQSxHQUFBekgsT0FBT3doQixLQUFHLFFBQUEsRUFBQXhoQixPQUFTeUgsWUFBWSxPQUFPLENBQUM7RUFDeEc7QUFtQkEsUUFBTWlkLGdCQUFnQixTQUFTQyxpQkFBZ0I7QUFPOUMsU0FBSzVYLFVBQVUsU0FBVXZILEdBQUc7QUFDM0IsYUFBTyxLQUFLUixTQUFTLEVBQUUrSCxRQUFRdkgsQ0FBQztJQUNqQztBQU1BLFNBQUtSLFdBQVcsV0FBWTtBQUMzQixhQUFPLEtBQUsrTztJQUNiO0FBT0EsU0FBS3ZJLFFBQVEsU0FBVWhHLEdBQUc7QUFDekIsYUFBTyxLQUFLUixTQUFTLEVBQUV3RyxNQUFNaEcsQ0FBQztJQUMvQjtBQVFBLFNBQUt1WixZQUFZLFNBQVV2WixHQUFHeUosR0FBRztBQUNoQyxVQUFJQSxNQUFNLFFBQVc7QUFDcEIsZUFBTyxLQUFLakssU0FBUyxFQUFFNkgsTUFBTXhMLEtBQUt5TCxJQUFJLEdBQUd0SCxDQUFDLENBQUM7TUFDNUM7QUFDQSxhQUFPLEtBQUtSLFNBQVMsRUFBRStaLFVBQVV2WixHQUFHeUosQ0FBQztJQUN0QztBQU9BLFNBQUt6RCxRQUFRLFNBQVVoRyxHQUFHO0FBQ3pCLGFBQU8sS0FBS1IsU0FBUyxFQUFFd0csTUFBTWhHLENBQUM7SUFDL0I7QUFRQSxTQUFLbUgsVUFBVSxTQUFVbkgsR0FBR3lKLEdBQUc7QUFDOUIsYUFBTyxLQUFLakssU0FBUyxFQUFFMkgsUUFBUW5ILEdBQUd5SixDQUFDO0lBQ3BDO0VBQ0Q7RUFnQkEsTUFBTXpLLGNBQWNrZ0IsY0FBYztJQUNqQ3BYLFlBQVkrSCxLQUFLO0FBQ2hCLFlBQU07QUFTTixXQUFLdEIsUUFBUTtBQU9iLFdBQUtwUCxTQUFTO0FBQ2QsV0FBS2lnQixPQUFPdlAsR0FBRztJQUNoQjs7Ozs7Ozs7SUFRQXJRLFNBQVM2ZixZQUFZO0FBQ3BCLGFBQU8sS0FBSzlRLFNBQVMsQ0FBQzhRLGNBQWMsS0FBS2xnQixTQUFBLElBQUEzRSxPQUFhLEtBQUtrTSxhQUFhLENBQUMsSUFBSztJQUMvRTtJQUNBQSxlQUFlO0FBQ2QsVUFBSSxDQUFDLEtBQUt2SCxRQUFRO0FBQ2pCLGVBQU87TUFDUjtBQUNBLFlBQU02RyxRQUFRLEtBQUs3RyxPQUFPNkcsTUFBTSxxQkFBcUI7QUFDckQsWUFBTXNaLE1BQU10WixNQUFNaks7QUFDbEIsVUFBSXdTO0FBQ0osZUFBU3ZTLElBQUksR0FBR0EsSUFBSXNqQixLQUFLdGpCLEtBQUssR0FBRztBQUVoQ3VTLGdCQUFRdkksTUFBTWhLLENBQUMsRUFBRWdLLE1BQU0sR0FBRyxFQUFFSSxLQUFLLEdBQUc7QUFDcEMsWUFBSTtBQUNIbUksa0JBQVFnUixtQkFBbUJoUixLQUFLO1FBQ2pDLFFBQVE7UUFFUjtBQUNBdkksY0FBTWhLLENBQUMsSUFBSXVTLE1BQU12SSxNQUFNLEdBQUcsRUFBRUksS0FBSyxHQUFHO01BQ3JDO0FBQ0EsYUFBT0osTUFBTUksS0FBSyxFQUFFO0lBQ3JCO0lBQ0FvWixZQUFZO0FBQ1gsWUFBTXhaLFFBQVEsS0FBSzdHLE9BQU82RyxNQUFNLHlCQUF5QjtBQUN6RCxZQUFNc1osTUFBTXRaLE1BQU1qSztBQUNsQixlQUFTQyxJQUFJLEdBQUdBLElBQUlzakIsS0FBS3RqQixLQUFLLEdBQUc7QUFDaENnSyxjQUFNaEssQ0FBQyxJQUFJZ0ssTUFBTWhLLENBQUMsRUFBRWdLLE1BQU0sR0FBRyxFQUFFSSxLQUFLLEdBQUc7TUFDeEM7QUFDQSxhQUFPSixNQUFNSSxLQUFLLEVBQUU7SUFDckI7SUFDQXFaLGNBQWM3VCxLQUFLO0FBQ2xCLFdBQUt6TSxTQUFTdWdCLG1CQUFtQjlULElBQUk1RixNQUFNLEdBQUcsRUFBRUksS0FBSyxHQUFHLENBQUMsRUFDdkRKLE1BQU0sS0FBSyxFQUNYSSxLQUFLLEdBQUcsRUFDUkosTUFBTSxHQUFHLEVBQ1RJLEtBQUssS0FBSyxFQUNWSixNQUFNLEdBQUcsRUFDVEksS0FBSyxHQUFHO0lBQ1g7SUFDQTlHLFFBQVF3RyxHQUFHO0FBQ1YsVUFBSSxPQUFPQSxNQUFNLFVBQVU7QUFDMUIsYUFBS3lJLFFBQVE7QUFDYixlQUFPO01BQ1I7QUFRQSxZQUFNb1IsV0FBVzdaLEVBQUVFLE1BQU0sR0FBRztBQUM1QjJaLGVBQVMsQ0FBQyxJQUFJQSxTQUFTLENBQUMsRUFBRTNaLE1BQU0sR0FBRyxFQUFFSSxLQUFLLEtBQUs7QUFDL0NOLFVBQUk2WixTQUFTdlosS0FBSyxHQUFHO0FBQ3JCLFlBQU10UCxXQUFXb0MsR0FBR0MsR0FBR3JDLFNBQVNrTyxLQUFLYyxDQUFDO0FBQ3RDLFVBQUloUCxVQUFVO0FBQ2IsWUFBSUEsU0FBUyxDQUFDLE1BQU0sVUFBVTtBQUM3QkEsbUJBQVMsQ0FBQyxJQUFJQSxTQUFTLENBQUMsRUFBRWtQLE1BQU0sR0FBRyxFQUFFSSxLQUFLLEdBQUc7UUFDOUM7QUFDQSxjQUFNd1osSUFBSSxJQUFJNWdCLE1BQU1sSSxTQUFTLENBQUMsQ0FBQztBQUMvQixhQUFLc29CLE9BQ0pwZ0IsTUFBTTZnQixjQUFBLEdBQUFybEIsT0FBaUJzVixHQUFHc0csT0FBT0MsSUFBSSx1QkFBdUIsRUFBRW5kLEdBQUc0SyxRQUFRLEdBQUMsR0FBQSxFQUFBdEosT0FBSW9sQixFQUFFRSxlQUFlLENBQUMsQ0FBRSxDQUNuRztBQUNBLGVBQU87TUFDUjtBQUNBLFlBQU10cEIsUUFBUTBDLEdBQUdDLEdBQUczQyxNQUFNd08sS0FBS2MsQ0FBQztBQUNoQyxVQUFJdFAsT0FBTztBQUNWLGFBQUs0b0IsT0FDSnBnQixNQUFNNmdCLGNBQUEsR0FBQXJsQixPQUNGc1YsR0FBR3NHLE9BQU9DLElBQUksdUJBQXVCLEVBQUVuZCxHQUFHNEssUUFBUSxHQUFDLEdBQUEsRUFBQXRKLE9BQUksSUFBSXdFLE1BQU14SSxNQUFNLENBQUMsQ0FBQyxFQUFFc3BCLGVBQWUsQ0FBQyxDQUMvRixDQUNEO0FBQ0EsZUFBTztNQUNSO0FBQ0EsWUFBTXRjLFlBQVl0SyxHQUFHQyxHQUFHcUssVUFBVXdCLEtBQUtjLENBQUM7QUFDeEMsVUFBSXRDLFdBQVc7QUFDZCxhQUFLNGIsT0FBT3BnQixNQUFNNmdCLGNBQWMsSUFBSTdnQixNQUFNd0UsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hELGVBQU87TUFDUjtBQUVBLFlBQU11YyxjQUFjN21CLEdBQUdDLEdBQUc0bUIsWUFBWS9hLEtBQUtjLENBQUM7QUFDNUMsVUFBSWlhLGFBQWE7QUFDaEIsYUFBS1gsT0FDSnBnQixNQUFNNmdCLGNBQWMsSUFBSTdnQixNQUFBLEdBQUF4RSxPQUFTc1YsR0FBR3NHLE9BQU9DLElBQUksdUJBQXVCLEVBQUVuZCxHQUFHOG1CLFdBQVcsR0FBQyxPQUFBLENBQU8sQ0FBQyxDQUNoRztBQUNBLGVBQU87TUFDUjtBQUlBLFlBQU1sb0IsSUFBSW9CLEdBQUdDLEdBQUc4bUIsS0FBS2piLEtBQUtjLENBQUM7QUFDM0IsVUFBSWhPLE1BQU0sTUFBTTtBQUNmLGFBQUt5VyxRQUFRO01BQ2QsT0FBTztBQUNOLGNBQU0yUixtQkFBbUIsaUJBQWlCOWdCLEtBQUswRyxDQUFDO0FBQ2hELFlBQUlvYSxrQkFBa0I7QUFDckJwb0IsWUFBRSxDQUFDLElBQUlBLEVBQUUsQ0FBQyxFQUFFa08sTUFBTSxHQUFHLEVBQUVJLEtBQUssR0FBRztRQUNoQztBQUNBLGNBQU0rWixZQUFZcm9CLEVBQUUsQ0FBQyxLQUFLQSxFQUFFLENBQUMsSUFBQSxJQUFBMEMsT0FBUTFDLEVBQUUsQ0FBQyxDQUFDLElBQUs7QUFDOUMsWUFBSW9CLEdBQUdRLEtBQUswbUIsWUFBWSxtQkFBbUJoaEIsS0FBSytnQixTQUFTLEdBQUc7QUFHM0QsZUFBS2YsT0FBT0csbUJBQW1CYyxTQUFTRixTQUFTLENBQUMsQ0FBQztRQUNwRCxPQUFPO0FBQ04sZUFBS2YsT0FBT3BnQixNQUFNNmdCLGNBQWNNLFNBQVMsQ0FBQztRQUMzQztNQUNEO0FBQ0EsYUFBTztJQUNSO0lBQ0EsT0FBT04sY0FBY3RPLEtBQUs7QUFHekIsVUFBSTtBQUNILFlBQUl1TSxNQUFNd0MsVUFBVXRoQixNQUFNdWhCLGNBQWNoUCxHQUFHLENBQUM7QUFDNUN1TSxjQUFNQSxJQUFJM1csUUFBUSxVQUFVLEVBQUU7QUFDOUIsZUFBTzJXO01BQ1IsUUFBUTtBQUNQLGVBQU92TTtNQUNSO0lBQ0Q7O0lBRUEsT0FBT2dQLGNBQWNoUCxLQUFLO0FBQ3pCLFlBQU12TCxRQUFRdUwsSUFBSXZMLE1BQU0sdUJBQXVCO0FBQy9DLFlBQU1zWixNQUFNdFosTUFBTWpLO0FBRWxCLFVBQUl1akIsUUFBUSxHQUFHO0FBQ2QsZUFBT3RaLE1BQU0sQ0FBQyxFQUFFbUIsUUFBUSx1QkFBdUIsS0FBSztNQUNyRDtBQUNBLGVBQVNNLElBQUksR0FBR0EsSUFBSTZYLEtBQUs3WCxLQUFLLEdBQUc7QUFDaEN6QixjQUFNeUIsQ0FBQyxJQUFJOFgsbUJBQW1CdlosTUFBTXlCLENBQUMsQ0FBQztNQUN2QztBQUNBLGFBQU96QixNQUFNSSxLQUFLLEVBQUU7SUFDckI7SUFDQW5ILFdBQVc3QyxHQUFHO0FBQ2IsVUFBSSxDQUFDQSxHQUFHO0FBQ1AsYUFBS21TLFFBQVE7QUFDYixlQUFPO01BQ1I7QUFDQSxhQUFPLEtBQUtqUCxRQUFRbEQsRUFBRUMsSUFBSTtJQUMzQjtJQUNBb0ksYUFBYThNLEtBQUs7QUFFakJBLFlBQU1pUCxZQUFZalAsR0FBRztBQUNyQixXQUFLNk4sT0FBTzdOLEdBQUc7QUFDZixhQUFPO0lBQ1I7SUFDQWtQLFlBQVk7QUFDWCxVQUFJLENBQUMsS0FBS2xTLE9BQU87QUFDaEIsZUFBTztNQUNSO0FBQ0EsYUFBT21TLGNBQWMsS0FBS25TLEtBQUs7SUFDaEM7SUFDQW9TLFdBQVdDLFFBQVE7QUFDbEIsVUFBSSxLQUFLbmQsWUFBWSxNQUFNdkssR0FBRzRLLFlBQVksS0FBS0wsWUFBWSxNQUFNdkssR0FBRzZLLGNBQWM7QUFDakYsYUFBS3dLLFFBQVE7QUFDYjtNQUNEO0FBQ0EsV0FBS0EsU0FDSHFTLFNBQUEsR0FBQXBtQixPQUFZc1YsR0FBR3NHLE9BQU9DLElBQUksdUJBQXVCLEVBQUVuZCxHQUFHNEssUUFBUSxHQUFDLEdBQUEsSUFBTSxNQUN0RSxLQUFLZ2MsZUFBZSxFQUFFOVosTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNwQztJQUNBNmEsU0FBU0QsUUFBUTtBQUNoQixZQUFNRSxJQUFJLElBQUk5aEIsTUFBTSxLQUFLdVAsS0FBSztBQUM5QnVTLFFBQUVILFdBQVdDLE1BQU07QUFDbkIsVUFBSUUsRUFBRXZTLE9BQU87QUFDWixlQUFPdVM7TUFDUjtBQUNBLGFBQU87SUFDUjtJQUNBQyxhQUFhO0FBUVosVUFBSSxLQUFLeFMsVUFBVSxNQUFNO0FBQ3hCLGVBQU87TUFDUjtBQUNBLFlBQU05SyxjQUFjLEtBQUtBLFlBQVk7QUFDckMsVUFBSUEsZUFBZSxLQUFLQSxjQUFjLE1BQU0sR0FBRztBQUU5QyxjQUFNdWQscUJBQXFCbFIsR0FBR3NHLE9BQU9DLElBQUksdUJBQXVCLEVBQUU1UyxjQUFjLENBQUM7QUFDakYsWUFBSXVkLHVCQUF1QixRQUFXO0FBQ3JDLGVBQUt6UyxRQUNKeVMsdUJBQXVCLEtBQ3BCLEtBQUtsQixlQUFlLElBQUEsR0FBQXRsQixPQUNqQndtQixtQkFBbUJoYixNQUFNLEdBQUcsRUFBRUksS0FBSyxHQUFHLEdBQUMsR0FBQSxFQUFBNUwsT0FBSSxLQUFLc2xCLGVBQWUsQ0FBQztBQUN2RSxpQkFBTyxLQUFLdlI7UUFDYjtNQUNEO0FBQ0EsV0FBS0EsUUFBUTtBQUNiLGFBQU87SUFDUjs7SUFFQXdRLFlBQVk7QUFDWCxhQUFPalAsR0FBR3NHLE9BQU9DLElBQUksdUJBQXVCLEVBQUUsS0FBSzVTLFlBQVksQ0FBQztJQUNqRTtJQUNBQSxjQUFjO0FBQ2IsWUFBTTJLLElBQUksS0FBS0csTUFBTWhILFFBQVEsR0FBRztBQUNoQyxVQUFJNkcsTUFBTSxJQUFJO0FBQ2IsZUFBTztNQUNSO0FBQ0EsWUFBTTNLLGNBQ0xxTSxHQUFHc0csT0FBT0MsSUFBSSxnQkFBZ0IsRUFBRSxLQUFLOUgsTUFBTWxILE1BQU0sR0FBR3hMLEtBQUt5TCxJQUFJLEdBQUc4RyxDQUFDLENBQUMsRUFBRXBJLE1BQU0sR0FBRyxFQUFFSSxLQUFLLEdBQUcsRUFBRXZHLFlBQVksQ0FBQztBQUN2RyxVQUFJNEQsZ0JBQWdCLFFBQVc7QUFDOUIsZUFBTztNQUNSO0FBQ0EsYUFBT0E7SUFDUjtJQUNBd2QsV0FBVztBQUNWLFlBQU1ILElBQUksSUFBSTloQixNQUFNLEtBQUt1UCxLQUFLO0FBQzlCdVMsUUFBRUMsV0FBVztBQUNiLFVBQUlELEVBQUV2UyxPQUFPO0FBQ1osZUFBT3VTO01BQ1I7QUFDQSxhQUFPO0lBQ1I7SUFDQUksYUFBYTtBQUNaLFVBQUksS0FBS0QsU0FBUyxNQUFNLE1BQU07QUFDN0IsZUFBTztNQUNSO0FBQ0EsYUFBTztJQUNSO0lBQ0FFLHdCQUF3QjtBQUV2QixVQUFJLEtBQUs1UyxVQUFVLE1BQU07QUFDeEIsZUFBTztNQUNSO0FBQ0EsWUFBTTlLLGNBQWMsS0FBS0EsWUFBWTtBQUNyQyxVQUFJQSxlQUFlLEtBQUtBLGNBQWMsTUFBTSxHQUFHO0FBRTlDLGNBQU11ZCxxQkFBcUJsUixHQUFHc0csT0FBT0MsSUFBSSx1QkFBdUIsRUFBRTVTLGNBQWMsQ0FBQztBQUNqRixZQUFJdWQsdUJBQXVCLFFBQVc7QUFDckMsZUFBS3pTLFFBQ0p5Uyx1QkFBdUIsS0FDcEIsS0FBS2xCLGVBQWUsSUFBQSxHQUFBdGxCLE9BQ2pCd21CLG1CQUFtQmhiLE1BQU0sR0FBRyxFQUFFSSxLQUFLLEdBQUcsR0FBQyxHQUFBLEVBQUE1TCxPQUFJLEtBQUtzbEIsZUFBZSxDQUFDO0FBQ3ZFLGlCQUFPLEtBQUt2UjtRQUNiO01BQ0Q7QUFDQSxXQUFLQSxRQUFRO0FBQ2IsYUFBTztJQUNSO0lBQ0E2UyxzQkFBc0I7QUFDckIsWUFBTU4sSUFBSSxJQUFJOWhCLE1BQU0sS0FBS3VQLEtBQUs7QUFDOUJ1UyxRQUFFSyxzQkFBc0I7QUFDeEIsVUFBSUwsRUFBRXZTLE9BQU87QUFDWixlQUFPdVM7TUFDUjtBQUNBLGFBQU87SUFDUjtJQUNBTywyQkFBMkI7QUFDMUIsWUFBTVAsSUFBSSxJQUFJOWhCLE1BQU0sS0FBS3VQLEtBQUs7QUFDOUIsVUFBSXVTLEVBQUVLLHNCQUFzQixHQUFHO0FBQzlCLGVBQU9MO01BQ1I7QUFDQSxhQUFPO0lBQ1I7SUFDQVEsV0FBVztBQUNWLGFBQU9wb0IsR0FBR0MsR0FBR29vQixPQUFPbmlCLEtBQUssS0FBS3loQixTQUFTLENBQUM7SUFDekM7SUFDQWYsaUJBQWlCO0FBRWhCLFlBQU0xUixJQUFJLEtBQUtHLE1BQU1oSCxRQUFRLEdBQUc7QUFDaEMsVUFBSTZHLE1BQU0sSUFBSTtBQUNiLGVBQU8sS0FBS0c7TUFDYjtBQUNBLFlBQU05SyxjQUFjLEtBQUtBLFlBQVk7QUFDckMsVUFBSUEsZ0JBQWdCdkssR0FBR3NvQixlQUFlO0FBQ3JDLGVBQU8sS0FBS2pUO01BQ2I7QUFDQSxhQUFPLEtBQUtBLE1BQU1sSCxNQUFNeEwsS0FBS3lMLElBQUksR0FBRzhHLElBQUksQ0FBQyxDQUFDO0lBQzNDO0lBQ0FnUixPQUFPN1EsT0FBTztBQUNiLFVBQUksQ0FBQ0EsT0FBTztBQUNYLGFBQUtBLFFBQVE7QUFDYjtNQUNEO0FBQ0EsWUFBTXJQLE9BQU9xUCxNQUFNaEgsUUFBUSxHQUFHO0FBQzlCLFVBQUlySSxTQUFTLElBQUk7QUFDaEIsYUFBS3FQLFFBQVFBLE1BQU12SSxNQUFNLEdBQUcsRUFBRUksS0FBSyxHQUFHO0FBQ3RDLGFBQUtqSCxTQUFTO0FBQ2Q7TUFDRDtBQUNBLFdBQUtvUCxRQUFRQSxNQUFNbEgsTUFBTSxHQUFHeEwsS0FBS3lMLElBQUksR0FBR3BJLElBQUksQ0FBQyxFQUFFOEcsTUFBTSxHQUFHLEVBQUVJLEtBQUssR0FBRztBQUNsRSxXQUFLakgsU0FBU29QLE1BQU1sSCxNQUFNeEwsS0FBS3lMLElBQUksR0FBR3BJLE9BQU8sQ0FBQyxDQUFDO0FBQy9DLFdBQUs5RixLQUFLO0lBQ1g7SUFDQXFvQixPQUFPQyxTQUFTO0FBQ2YsWUFBTXhpQixPQUFPd2lCLFFBQVFuYSxRQUFRLEdBQUc7QUFDaEMsV0FBS2dILFFBQVFtUyxjQUFjZ0IsUUFBUXJhLE1BQU0sR0FBR3hMLEtBQUt5TCxJQUFJLEdBQUdwSSxJQUFJLENBQUMsQ0FBQztBQUM5RCxXQUFLQyxTQUFTLEtBQUtvUCxNQUFNbEgsTUFBTXhMLEtBQUt5TCxJQUFJLEdBQUdwSSxPQUFPLENBQUMsQ0FBQztJQUNyRDtJQUNBNEMsT0FBTzlCLEdBQUc7QUFDVCxXQUFLb2YsT0FBTyxLQUFLN1EsUUFBUXZPLENBQUM7SUFDM0I7SUFDQThHLFVBQVU5RyxHQUFHO0FBQ1pBLFlBQUFBLElBQU0sQ0FBQztBQUNQLFVBQUkyaEIsSUFBSSxLQUFLbmlCLFNBQVMsSUFBSTtBQUMxQixVQUFJLENBQUNRLEVBQUVxZixjQUFjLEtBQUtsZ0IsUUFBUTtBQUNqQ3dpQixhQUFBLElBQUFubkIsT0FBUyxLQUFLZ2xCLFVBQVUsQ0FBQztNQUMxQjtBQUNBLFVBQUksQ0FBQ3hmLEVBQUU0aEIsWUFBWTtBQUNsQkQsWUFBSUEsRUFBRTNiLE1BQU0sR0FBRyxFQUFFSSxLQUFLLEdBQUc7TUFDMUI7QUFDQSxhQUFPeWIsVUFBVUYsQ0FBQyxFQUFFM2IsTUFBTSxHQUFHLEVBQUVJLEtBQUssS0FBSyxFQUFFSixNQUFNLEdBQUcsRUFBRUksS0FBSyxLQUFLLEVBQUVKLE1BQU0sR0FBRyxFQUFFSSxLQUFLLEtBQUs7SUFDeEY7SUFDQTBiLGVBQWU7QUFDZCxhQUFPLElBQUk5aUIsTUFBTSxLQUFLUSxTQUFTLElBQUksQ0FBQztJQUNyQztJQUNBdWlCLFFBQVE7QUFDUCxhQUFPN29CLEdBQUdJLEtBQUswb0IsWUFBWSxLQUFLbGIsVUFBVTtJQUMzQztFQUNEO0FBQ0E5SCxRQUFNTSxVQUFXd0csT0FBTTtBQUN0QixXQUFPLElBQUk5RyxNQUFNLEVBQUVNLFFBQVF3RyxDQUFDO0VBQzdCO0FBQ0E5RyxRQUFNQyxhQUFjN0MsT0FBTTtBQUN6QixXQUFPLElBQUk0QyxNQUFNLEVBQUVDLFdBQVc3QyxDQUFDO0VBQ2hDO0FBQ0E0QyxRQUFNeUYsZUFBZ0I4TSxTQUFRO0FBQzdCLFdBQU8sSUFBSXZTLE1BQU0sRUFBRXlGLGFBQWE4TSxHQUFHO0VBQ3BDO0FBQ0EsUUFBTXBPLGNBQWU0TixTQUFRO0FBQzVCLFVBQU1rUixjQUFjL29CLEdBQUdDLEdBQUc0bUIsWUFBWS9hLEtBQUsrTCxHQUFHO0FBQzlDLFFBQUlrUixhQUFhO0FBQ2hCLFlBQU1qYyxRQUFRaWMsWUFBWSxDQUFDLEVBQUVqYyxNQUFNLEdBQUc7QUFDdEMsVUFBSUEsTUFBTWpLLFdBQVcsR0FBRztBQUN2QixlQUFPO1VBQ05xSCxPQUFPNEMsTUFBTSxDQUFDO1VBQ2RyTixNQUFNO1FBQ1A7TUFDRCxXQUFXcU4sTUFBTWpLLFdBQVcsR0FBRztBQUM5QixlQUFPO1VBQ05xSCxPQUFPNEMsTUFBTSxDQUFDO1VBQ2RyTixNQUFNcU4sTUFBTSxDQUFDO1FBQ2Q7TUFDRDtJQUNEO0FBQ0EsVUFBTThYLE1BQU0sQ0FBQztBQUNiLFFBQUksQ0FBQy9NLElBQUltUixTQUFTLEdBQUcsR0FBRztBQUN2QixhQUFPcEU7SUFDUjtBQUNBLEtBQUMvTSxHQUFHLElBQUlBLElBQUkvSyxNQUFNLEdBQUc7QUFDckIsVUFBTW5FLElBQUlrUCxJQUFJL0ssTUFBTSxHQUFHLEVBQUVxQixNQUFNLENBQUMsRUFBRWpCLEtBQUssR0FBRztBQUMxQyxVQUFNMGEsSUFBSWpmLEVBQUVtRSxNQUFNLEdBQUc7QUFBQSxRQUFBbWMsYUFBQWpVLDJCQUNDNFMsQ0FBQSxHQUFBc0I7QUFBQSxRQUFBO0FBQXRCLFdBQUFELFdBQUF0Z0IsRUFBQSxHQUFBLEVBQUF1Z0IsU0FBQUQsV0FBQS9ULEVBQUEsR0FBQUMsUUFBeUI7QUFBQSxjQUFkQyxVQUFBOFQsT0FBQTdUO0FBQ1YsY0FBTThULElBQUkvVCxRQUFRdEksTUFBTSxHQUFHO0FBQzNCcWMsVUFBRXBoQixLQUFLLElBQUk7QUFDWCxTQUFBLEVBQUc2YyxJQUFJdUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJQTtNQUNqQjtJQUFBLFNBQUE3VCxLQUFBO0FBQUEyVCxpQkFBQWphLEVBQUFzRyxHQUFBO0lBQUEsVUFBQTtBQUFBMlQsaUJBQUExVCxFQUFBO0lBQUE7QUFFQSxRQUFJcVAsSUFBSW5sQixRQUFRbWxCLElBQUkxYSxVQUFVLFFBQVc7QUFDeEMwYSxVQUFJMWEsUUFBUTtJQUNiO0FBR0EsUUFBSTBhLElBQUkxYSxVQUFVMGEsSUFBSTFhLFVBQVUsVUFBVTBhLElBQUkxYSxVQUFVLFVBQVUwYSxJQUFJMWEsVUFBVSxRQUFRO0FBQ3ZGLFlBQU1rZixTQUFTeEUsSUFBSW5sQjtBQUNuQm1sQixVQUFJbmxCLE9BQU9tbEIsSUFBSTFhO0FBQ2YwYSxVQUFJMWEsUUFBUWtmO0lBQ2I7QUFDQSxXQUFPeEU7RUFDUjtBQUlBLFFBQU0wQyxjQUFlNVUsU0FBUTtBQUM1QixRQUFJa1M7QUFFSixRQUFJO0FBQ0hBLFlBQU13QyxVQUFVMVUsSUFBSXBNLFNBQVMsQ0FBQztJQUMvQixRQUFRO0FBQ1AsYUFBT29NO0lBQ1I7QUFDQSxhQUFTbkUsSUFBSSxHQUFHQSxJQUFJdk8sR0FBR0ssS0FBS2dwQixhQUFheG1CLFFBQVEsRUFBRTBMLEdBQUc7QUFDckQsWUFBTTtRQUFDbUc7TUFBSSxJQUFJMVUsR0FBR0ssS0FBS2dwQixhQUFhOWEsQ0FBQztBQUNyQyxZQUFNO1FBQUNxRztNQUFFLElBQUk1VSxHQUFHSyxLQUFLZ3BCLGFBQWE5YSxDQUFDO0FBQ25DcVcsWUFBTUEsSUFBSTlYLE1BQU00SCxJQUFJLEVBQUV4SCxLQUFLMEgsRUFBRTtJQUM5QjtBQUNBLFdBQU9nUTtFQUNSO0FBQ0EsUUFBTTRDLGdCQUFpQjlVLFNBQVE7QUFDOUIsVUFBTWtTLE1BQU0wQyxZQUFZNVUsR0FBRztBQUMzQixXQUFPa1MsT0FBT2xTO0VBQ2Y7QUFFQSxRQUFNb1QsYUFBYUEsQ0FBQy9aLE1BQU10VixZQUFZO0FBQ3JDLFFBQUksQ0FBQzhLLFdBQVcsbUJBQW1CLEtBQUs5SyxRQUFRb3ZCLFVBQVUsR0FBRztBQUM1RCxhQUFPO0lBQ1I7QUFDQSxXQUFPLENBQUNwdkIsUUFBUXV4QixXQUFXLEtBQUtob0IsR0FBR0MsR0FBR3hELFNBQVN5SixLQUFLNkYsSUFBSTtFQUN6RDtBQUNBLFFBQU0wWixZQUFZQSxDQUFDMVosTUFBTXRWLFlBQVk7QUFDcEMsUUFBSSxDQUFDOEssV0FBVyxtQkFBbUIsS0FBSzlLLFFBQVFvdkIsVUFBVSxHQUFHO0FBQzVELGFBQU87SUFDUjtBQUNBLFFBQUl5RCxXQUFXO0FBQ2YsUUFBSUMsV0FBVztBQUNmLFFBQUl2cEIsR0FBR0MsR0FBR2pKLEtBQUtrUCxLQUFLNkYsSUFBSSxHQUFHO0FBQzFCLFlBQU1wRCxJQUFJb0QsS0FBS2UsTUFBTTlNLEdBQUdDLEdBQUdqSixJQUFJO0FBQy9CLGVBQVN1WCxJQUFJLEdBQUdBLElBQUk1RixFQUFFOUYsUUFBUTBMLEtBQUssR0FBRztBQUNyQyxZQUFJNUYsRUFBRTRGLENBQUMsR0FBRztBQUNULFlBQUUrYTtRQUNILE9BQU87QUFDTixZQUFFQztRQUNIO01BQ0Q7SUFDRDtBQUNBLFdBQU87TUFDTjdELE1BQU02RDtNQUNONUQsTUFBTTJEO0lBQ1A7RUFDRDtBQUNBLFFBQU1FLG1CQUFvQjlXLFNBQVE7QUFDakMsV0FBTyxDQUFDQSxJQUFJc1csU0FBUyxHQUFHO0VBQ3pCO0FBQ0EsUUFBTVMsMEJBQTJCaHpCLGFBQVk7QUFDNUMsV0FBT0EsUUFBUThULFlBQVksTUFBTTtFQUNsQztBQUNBLFFBQU1tZixvQkFBcUJqekIsYUFBWTtBQUN0QyxXQUFPQSxRQUFROFQsWUFBWSxNQUFNO0VBQ2xDO0FBQ0EsUUFBTUUsc0JBQXVCdkgsT0FBTTtBQUdsQyxRQUFJQSxNQUFNLE1BQU07QUFDZixhQUFPO0lBQ1I7QUFDQSxVQUFNeW1CLE9BQU96bUIsRUFBRTBtQjtBQUFBLFFBQUFDLGFBQUE3VSwyQkFDRzJVLElBQUEsR0FBQUc7QUFBQSxRQUFBO0FBQWxCLFdBQUFELFdBQUFsaEIsRUFBQSxHQUFBLEVBQUFtaEIsU0FBQUQsV0FBQTNVLEVBQUEsR0FBQUMsUUFBd0I7QUFBQSxjQUFiNFUsTUFBQUQsT0FBQXpVO0FBQ1YsWUFBSTBVLElBQUl0akIsYUFBYSxPQUFPO0FBQzNCLGlCQUFPO1FBQ1I7TUFDRDtJQUFBLFNBQUE2TyxLQUFBO0FBQUF1VSxpQkFBQTdhLEVBQUFzRyxHQUFBO0lBQUEsVUFBQTtBQUFBdVUsaUJBQUF0VSxFQUFBO0lBQUE7QUFDQSxXQUFPO0VBQ1I7QUFDQSxRQUFNN1IsY0FBZVIsT0FBTTtBQUcxQixRQUFJLENBQUM4bUIscUJBQXFCN1UsTUFBTTtBQUMvQjZVLDJCQUFxQjtJQUN0QjtBQUNBLFFBQUk5bUIsRUFBRSttQixlQUFlO0FBQ3BCLGFBQU87SUFDUjtBQUVBLFFBQUkvbUIsRUFBRWEsZUFBZWIsRUFBRWduQixhQUFhLFNBQVMsR0FBRztBQUMvQyxhQUFPO0lBQ1I7QUFDQSxVQUFNdGQsSUFBSTFKLEVBQUVDO0FBQ1osUUFBSXlKLE1BQUEsR0FBQXRMLE9BQVNFLFNBQVM2RSxTQUFTbEQsTUFBSSxHQUFBLEdBQUs7QUFDdkMsYUFBTztJQUNSO0FBQ0EsUUFBSSxDQUFDbkQsR0FBR0MsR0FBR2txQixVQUFVamtCLEtBQUswRyxDQUFDLEdBQUc7QUFDN0IsYUFBTztJQUNSO0FBQ0EsUUFBSSxDQUFDNU0sR0FBR0MsR0FBR21xQixXQUFXbGtCLEtBQUswRyxDQUFDLEdBQUc7QUFDOUIsYUFBTztJQUNSO0FBQ0EsWUFDRTVNLEdBQUdDLEdBQUczQyxNQUFNNEksS0FBSzBHLENBQUMsS0FBSzVNLEdBQUdDLEdBQUdyQyxTQUFTc0ksS0FBSzBHLENBQUMsS0FBSzVNLEdBQUdDLEdBQUdxSyxVQUFVcEUsS0FBSzBHLENBQUMsS0FBSzVNLEdBQUdDLEdBQUc0bUIsWUFBWTNnQixLQUFLMEcsQ0FBQyxNQUNyRyxDQUFDQSxFQUFFb2MsU0FBUyxTQUFTO0VBRXZCO0FBQ0EsUUFBTWdCLHVCQUF1QixTQUFTSyx3QkFBdUI7QUFDNUQsUUFBSSxDQUFDOW9CLFdBQVcsdUJBQXVCLEdBQUc7QUFDekMrb0IsMEJBQW9CO0lBQ3JCO0FBQ0EsVUFBTUMsUUFBUUMsRUFBRSxNQUFNO0FBQ3RCLFVBQU03aEIsSUFBSTRoQixNQUFNRSxLQUFLLFdBQVcsRUFBRUMsUUFBUTtBQUFBLFFBQUFDLGFBQUEzViwyQkFDcEJyTSxDQUFBLEdBQUFpaUI7QUFBQSxRQUFBO0FBQXRCLFdBQUFELFdBQUFoaUIsRUFBQSxHQUFBLEVBQUFpaUIsU0FBQUQsV0FBQXpWLEVBQUEsR0FBQUMsUUFBeUI7QUFBQSxjQUFkQyxVQUFBd1YsT0FBQXZWO0FBQ1YsY0FBTXdWLEtBQUt6VixRQUFRcFQsaUJBQWlCLEdBQUc7QUFBQSxZQUFBOG9CLGFBQUE5ViwyQkFDdkI2VixFQUFBLEdBQUFFO0FBQUEsWUFBQTtBQUFoQixlQUFBRCxXQUFBbmlCLEVBQUEsR0FBQSxFQUFBb2lCLFNBQUFELFdBQUE1VixFQUFBLEdBQUFDLFFBQW9CO0FBQUEsa0JBQVRqUyxJQUFBNm5CLE9BQUExVjtBQUNWblMsY0FBRSttQixnQkFBZ0I7VUFDbkI7UUFBQSxTQUFBM1UsS0FBQTtBQUFBd1YscUJBQUE5YixFQUFBc0csR0FBQTtRQUFBLFVBQUE7QUFBQXdWLHFCQUFBdlYsRUFBQTtRQUFBO01BQ0Q7SUFBQSxTQUFBRCxLQUFBO0FBQUFxVixpQkFBQTNiLEVBQUFzRyxHQUFBO0lBQUEsVUFBQTtBQUFBcVYsaUJBQUFwVixFQUFBO0lBQUE7QUFDQThVLDBCQUFxQmxWLE9BQU87RUFDN0I7QUFDQSxRQUFNbVYsc0JBQXNCQSxNQUFNO0FBQ2pDLFVBQU1DLFFBQVFDLEVBQUUsTUFBTTtBQUN0QkQsVUFBTUUsS0FBSyxrQ0FBa0MsRUFBRW5ZLEtBQUssaUJBQWlCLElBQUk7RUFDMUU7QUFjQSxRQUFNMFkscUJBQXFCQSxDQUFDblQsS0FBS29ULFlBQVlyaEIsVUFBVTtBQUN0RDFMLFFBQUEsMkJBQUFvRCxPQUErQnVXLEdBQUcsQ0FBRTtBQUNwQyxVQUFNdEosSUFBSTJjLGdCQUFnQnJULEdBQUc7QUFDN0IsUUFBSXJQO0FBQ0osUUFBSStGLElBQUksSUFBSTtBQUNYL0YsVUFBSTBULGFBQ0hyRSxLQUNBak8sTUFBTTFDLFVBQ04rakIsWUFDQWpyQixHQUFHUyxNQUFNb1osTUFBTXRMLENBQUMsRUFBRXhDLE1BQ2xCL0wsR0FBR1MsTUFBTW9aLE1BQU10TCxDQUFDLEVBQUU4TCxjQUNsQnpRLEtBQ0Q7SUFDRCxPQUFPO0FBQ05wQixVQUFJMmlCLFFBQVF0VCxLQUFLb1QsWUFBWXJoQixLQUFLO0FBQ2xDLFVBQUlwQixLQUFLb0IsU0FBU0EsTUFBTXdoQixhQUFhO0FBQ3BDeGhCLGNBQU13aEIsWUFBWTVpQixDQUFDO0FBQ25CQSxVQUFFb0IsUUFBUUE7TUFDWDtJQUNEO0VBQ0Q7QUFDQSxRQUFNdWhCLFVBQVVBLENBQUN0VCxLQUFLb1QsWUFBWXJoQixVQUFVO0FBQzNDMUwsUUFBSSxTQUFTO0FBQ2IsVUFBTThkLFdBQVl4VCxPQUFNO0FBQ3ZCLFVBQUksQ0FBQ0EsRUFBRWdTLFNBQVM7QUFDZjZRLHVCQUFlN2lCLENBQUM7QUFDaEJ5aUIsbUJBQVd6aUIsQ0FBQztNQUNiO0lBQ0Q7QUFDQSxXQUFPdVAsY0FBY0YsS0FBS2pPLE1BQU0xQyxVQUFVOFUsUUFBUTtFQUNuRDtBQUNBLFFBQU1rUCxrQkFBbUJyVCxTQUFRO0FBQ2hDLGFBQVN0SixJQUFJLEdBQUdBLElBQUl2TyxHQUFHUyxNQUFNb1osTUFBTWhYLFFBQVEsRUFBRTBMLEdBQUc7QUFDL0MsVUFBSXNKLFFBQVE3WCxHQUFHUyxNQUFNb1osTUFBTXRMLENBQUMsRUFBRXNKLEtBQUs7QUFDbEMsZUFBT3RKO01BQ1I7SUFDRDtBQUNBLFdBQU87RUFDUjtBQUNBLFFBQU04YyxpQkFBa0J6ZixjQUFhO0FBQ3BDMU4sUUFBQSxrQkFBQW9ELE9BQXNCc0ssU0FBU2lNLEdBQUcsQ0FBRTtBQUNwQyxVQUFNeVQsT0FBTztNQUNaelQsS0FBS2pNLFNBQVNpTTtNQUNkOUwsTUFBTUgsU0FBU0c7TUFDZnNPLGNBQWN6TyxTQUFTeU87SUFDeEI7QUFDQSxXQUFPcmEsR0FBR1MsTUFBTW9aLE1BQU05UixLQUFLdWpCLElBQUk7RUFDaEM7QUF1QkEsUUFBTTVSLFdBQVlELFVBQVM7QUFDMUIsUUFBSTtBQUNILFlBQU04UixXQUFXQyxLQUFLQyxNQUFNaFMsSUFBSTtBQUNoQyxVQUFJOFIsU0FBU0csVUFBVTtBQUN0QixpQkFBU0MsSUFBSSxHQUFHQSxJQUFJSixTQUFTRyxTQUFTN29CLFFBQVE4b0IsS0FBSztBQUNsRCxjQUFJSixTQUFTRyxTQUFTQyxDQUFDLEVBQUUsR0FBRyxHQUFHO0FBQzlCenRCLGdCQUFJcXRCLFNBQVNHLFNBQVNDLENBQUMsRUFBRSxHQUFHLENBQUM7VUFDOUIsT0FBTztBQUNOenRCLGdCQUFJcXRCLFNBQVNHLFNBQVNDLENBQUMsRUFBRUQsUUFBUTtVQUNsQztRQUNEO01BQ0QsV0FBV0gsU0FBU0ssT0FBTztBQUMxQkMsZUFBQSxHQUFBdnFCLE9BQVVpcUIsU0FBU0ssTUFBTUUsTUFBSSxJQUFBLEVBQUF4cUIsT0FBS2lxQixTQUFTSyxNQUFNRyxJQUFJLENBQUU7TUFDeEQ7QUFDQSxhQUFPUjtJQUNSLFFBQVE7QUFDUE0sYUFBQSw0Q0FBQXZxQixPQUFtRG1ZLElBQUksQ0FBRTtBQUN6RCxhQUFPO0lBQ1I7RUFDRDtBQUNBLFFBQU1FLFdBQVluSyxTQUFRO0FBQ3pCLGVBQVdwQyxLQUFLb0MsS0FBSztBQUNwQixVQUFJLENBQUMrQyxPQUFPQyxPQUFPaEQsS0FBS3BDLENBQUMsR0FBRztBQUMzQjtNQUNEO0FBQ0EsYUFBT29DLElBQUlwQyxDQUFDO0lBQ2I7QUFDQSxXQUFPO0VBQ1I7QUFDQSxRQUFNK1gsY0FBZXpTLFNBQVE7QUFDNUIsUUFBSSxPQUFPQSxRQUFRLFlBQWFBLFFBQVEsSUFBSTtBQUMzQztJQUNEO0FBQ0EsV0FBT0EsSUFBSWdELE9BQU8sQ0FBQyxFQUFFc1csWUFBWSxJQUFJdFosSUFBSXZFLE1BQU0sQ0FBQztFQUNqRDtBQUNBLFFBQU04ZCxjQUFjQSxDQUFDQyxLQUFLQyxRQUFRO0FBQ2pDLFFBQUksQ0FBQ0QsT0FBT0EsSUFBSXJwQixXQUFXLEdBQUc7QUFDN0IsYUFBTztJQUNSO0FBQ0EsVUFBTXVqQixNQUFNOEYsSUFBSXJwQjtBQUNoQixhQUFTMEwsSUFBSSxHQUFHQSxJQUFJNlgsS0FBSyxFQUFFN1gsR0FBRztBQUM3QixVQUFJMmQsSUFBSTNkLENBQUMsTUFBTTRkLEtBQUs7QUFDbkIsZUFBTzVkO01BQ1I7SUFDRDtBQUNBLFdBQU87RUFDUjtBQUNBLFFBQU02ZCxVQUFVQSxDQUFDQyxPQUFPaFgsVUFBVTtBQUdqQyxVQUFNOUcsSUFBSTBkLFlBQVlJLE9BQU9oWCxLQUFLO0FBQ2xDLFFBQUk5RyxJQUFJLEdBQUc7QUFDVixhQUFPO0lBQ1I7QUFDQSxXQUFPOGQsTUFBTTlkLElBQUksQ0FBQztFQUNuQjtBQUNBLFFBQU1QLGtCQUFtQjBFLFNBQVE7QUFDaEMsV0FBT2tFLEdBQUdDLEtBQUt5VixhQUFhNVosR0FBRztFQUNoQztBQUNBM0YsU0FBT3dmLFVBQVUxZixTQUFTLFdBQVk7QUFFckMsV0FBTyxLQUFLQyxNQUFNLEdBQUcsRUFDbkJJLEtBQUssT0FBTyxFQUNaSixNQUFNLEdBQUcsRUFDVEksS0FBSyxNQUFNLEVBQ1hKLE1BQU0sR0FBRyxFQUNUSTtNQUFLOztJQUFpQixFQUN0QkosTUFBTSxHQUFHLEVBQ1RJLEtBQUssUUFBUTtFQUNoQjtBQUVBLFFBQU1zZixjQUFlN1YsU0FBUTtBQUM1QixXQUFPQSxRQUFRO0VBQ2hCO0FBQ0EsUUFBTWpKLFdBQVlpWCxVQUFTO0FBQzFCLFdBQU9BLEtBQUs4SCxPQUFPRCxXQUFXLEVBQUV0ZixLQUFLLEdBQUc7RUFDekM7QUFDQSxRQUFNMUssZUFBZUEsQ0FBQ2tRLEtBQUtnYSxTQUFTO0FBQ25DLFFBQUksQ0FBQ2hhLE9BQU8sQ0FBQ2dhLE1BQU07QUFDbEIsYUFBT2hhO0lBQ1I7QUFDQSxVQUFNa1MsTUFBTSxDQUFBO0FBQ1osVUFBTWpjLElBQUkrSixJQUFJNUYsTUFBTSxZQUFZO0FBQ2hDLFFBQUl5QixJQUFJO0FBQ1IsT0FBRztBQUNGcVcsVUFBSTdjLEtBQUtZLEVBQUVrVixNQUFNLENBQUM7QUFDbEIsVUFBSWxWLEVBQUU5RixXQUFXLEdBQUc7QUFDbkI7TUFDRDtBQUNBLFlBQU04cEIsTUFBTWhrQixFQUFFa1YsTUFBTTtBQUNwQixVQUFJOE8sUUFBUSxNQUFNO0FBQ2pCLFlBQUlwZSxJQUFJbWUsS0FBSzdwQixRQUFRO0FBQ3BCK2hCLGNBQUk3YyxLQUFLMmtCLEtBQUtuZSxDQUFDLENBQUM7UUFDakIsT0FBTztBQUNOcVcsY0FBSTdjLEtBQUs0a0IsR0FBRztRQUNiO0FBQ0EsVUFBRXBlO01BQ0gsT0FBTztBQUNOLGNBQU16TCxJQUFJaU4sT0FBT0UsU0FBUzBjLElBQUkxZSxRQUFRLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSTtBQUN0RCxZQUFJbkwsSUFBSSxNQUFNQSxJQUFJNHBCLEtBQUs3cEIsUUFBUTtBQUM5QitoQixjQUFJN2MsS0FBSzJrQixLQUFLNXBCLENBQUMsQ0FBQztRQUNqQixPQUFPO0FBQ044aEIsY0FBSTdjLEtBQUs0a0IsR0FBRztRQUNiO01BQ0Q7SUFDRCxTQUFTaGtCLEVBQUU5RixTQUFTO0FBQ3BCLFdBQU8raEIsSUFBSTFYLEtBQUssRUFBRTtFQUNuQjtBQUNBLFFBQU0wZixXQUFZOWxCLE9BQU07QUFDdkIsV0FBTyxPQUFPQSxNQUFNLFlBQVlBLGFBQWFpRztFQUM5QztBQUNBLFFBQU04ZixXQUFZL2xCLE9BQU07QUFDdkIsV0FBTyxPQUFPQSxNQUFNLFlBQVlBLGFBQWFpSjtFQUM5QztBQUNBLFFBQU0rYyxXQUFZaG1CLE9BQU07QUFDdkIsV0FBT0EsYUFBYWlIO0VBQ3JCO0FBQ0EsUUFBTWdmLFVBQVdqbUIsT0FBTTtBQUN0QixXQUFPa21CLE1BQU1ELFFBQVFqbUIsQ0FBQztFQUN2QjtBQUNBLFFBQU1tbUIsV0FBWW5tQixPQUFNO0FBQ3ZCLFdBQU9BLGFBQWF5TDtFQUNyQjtBQUNBLFFBQU0yYSxhQUFjcG1CLE9BQU07QUFDekIsV0FBTyxDQUFDZ21CLFNBQVNobUIsQ0FBQyxNQUFNLE9BQU9BLE1BQU0sY0FBY0EsYUFBYXFtQjtFQUNqRTtBQUNBLFFBQU1DLGVBQWVBLENBQUN6a0IsR0FBRzBrQixTQUFTO0FBQ2pDLFFBQUl6SSxNQUFNO0FBQ1YsYUFBU3JXLElBQUksR0FBR0EsSUFBSThlLE1BQU0sRUFBRTllLEdBQUc7QUFDOUJxVyxhQUFPamM7SUFDUjtBQUNBLFdBQU9pYztFQUNSO0FBQ0EsUUFBTTBJLFdBQVdBLENBQUMza0IsR0FBRy9GLFFBQVE7QUFDNUJBLFlBQUFBLE1BQVE7QUFDUixVQUFNZ2xCLElBQUlqZixFQUFFckMsU0FBUztBQUNyQixXQUFPOG1CLGFBQWEsS0FBS3hxQixNQUFNZ2xCLEVBQUUva0IsTUFBTSxJQUFJK2tCO0VBQzVDO0FBQ0EsUUFBTTJGLE1BQU1BLENBQUNoWSxHQUFHakcsTUFBTTtBQUNyQixRQUFJeWQsUUFBUXpkLENBQUMsR0FBRztBQUNmLGFBQU9rZSxVQUFValksR0FBR2pHLENBQUM7SUFDdEI7QUFDQSxXQUFPbWUsV0FBV2xZLEdBQUdqRyxDQUFDO0VBQ3ZCO0FBQ0EsUUFBTWtlLFlBQVlBLENBQUNqWSxHQUFHakcsTUFBTTtBQUMzQixVQUFNc1YsTUFBTSxDQUFBO0FBQUMsUUFBQThJLGFBQUExWSwyQkFDUzFGLENBQUEsR0FBQXFlO0FBQUEsUUFBQTtBQUF0QixXQUFBRCxXQUFBL2tCLEVBQUEsR0FBQSxFQUFBZ2xCLFNBQUFELFdBQUF4WSxFQUFBLEdBQUFDLFFBQXlCO0FBQUEsY0FBZEMsVUFBQXVZLE9BQUF0WTtBQUNWdVAsWUFBSTdjLEtBQUt3TixFQUFFSCxPQUFPLENBQUM7TUFDcEI7SUFBQSxTQUFBRSxLQUFBO0FBQUFvWSxpQkFBQTFlLEVBQUFzRyxHQUFBO0lBQUEsVUFBQTtBQUFBb1ksaUJBQUFuWSxFQUFBO0lBQUE7QUFDQSxXQUFPcVA7RUFDUjtBQUNBLFFBQU02SSxhQUFhQSxDQUFDbFksR0FBR2pHLE1BQU07QUFDNUIsVUFBTXNWLE1BQU0sQ0FBQztBQUNiLGVBQVdyVyxLQUFLZSxHQUFHO0FBQ2xCLFVBQUksQ0FBQ2lELE9BQU9DLE9BQU9sRCxHQUFHZixDQUFDLEdBQUc7QUFDekI7TUFDRDtBQUNBcVcsVUFBSXRWLENBQUMsSUFBSWlHLEVBQUVqRyxFQUFFZixDQUFDLENBQUM7SUFDaEI7QUFDQSxXQUFPcVc7RUFDUjtBQUNBNWtCLEtBQUdzWixtQkFBb0JzVSxVQUFTO0FBQy9CLFdBQU9BLEtBQUszZixRQUFRLE1BQU0sT0FBTyxFQUFFQSxRQUFRLE1BQU0sUUFBUSxFQUFFQSxRQUFRLE1BQU0sTUFBTSxFQUFFQSxRQUFRLE1BQU0sTUFBTTtFQUN0RztBQUNBak8sS0FBRzZ0QixxQkFBc0J2TSxVQUFTO0FBSWpDLFVBQU1qSixNQUFNN1csU0FBU2lILGNBQWMsVUFBVTtBQUM3QzRQLFFBQUlwUixZQUFZcWE7QUFDaEIsV0FBT2pKLElBQUloRDtFQUNaO0FBS0EsUUFBTXlZLGNBQWNBLENBQUNDLFdBQVdDLFdBQVdDLDRCQUE0QkMsZ0JBQWdCO0FBQ3RGaHdCLFFBQUEsMEJBQUFvRCxPQUE4QnlzQixXQUFTLGFBQUEsRUFBQXpzQixPQUFjMHNCLFNBQVMsQ0FBRTtBQUNoRSxXQUFPRyxxQkFBcUI7TUFDM0JKO01BQ0FILE1BQU1HLFVBQVVqaEIsTUFBTSxHQUFHLEVBQUVJLEtBQUssUUFBUTtNQUN4QzRFLE1BQU1nSCxRQUFRLGdCQUFnQixDQUFDaVYsU0FBUyxDQUFDO01BQ3pDOVYsU0FBU3pWLGFBQWFqQixXQUFXLHFCQUFxQixHQUFHLENBQUMwc0IsNEJBQTRCRixTQUFTLENBQUM7TUFDaEdLLGFBQWE3c0IsV0FBVyxvQkFBb0I7TUFDNUM4c0IsT0FBTztNQUNQTDtNQUNBaGIsT0FBT3pSLFdBQVcsNEJBQTRCO01BQzlDNEMsT0FBTytwQjtJQUNSLENBQUM7RUFDRjtBQUNBLFFBQU1JLFlBQVlBLENBQUNDLFVBQVVQLFdBQVdFLGdCQUFnQjtBQUd2RCxVQUFNTSxNQUFNO0FBQ1osUUFBSTVKLE1BQU0sQ0FBQTtBQUNWLFVBQU02QixXQUFXOEgsU0FBU3poQixNQUFNMGhCLEdBQUc7QUFHbkMsVUFBTUMsWUFBWTtBQUNsQixVQUFNUiw2QkFBNkJELFVBQVUxbkIsU0FBUztBQUN0RCxVQUFNb29CLFNBQVNudEIsV0FBVyxvQkFBb0I7QUFDOUMsYUFBU2dOLElBQUksR0FBR0EsSUFBSWtZLFNBQVM1akIsUUFBUTBMLEtBQUssR0FBRztBQUM1QyxVQUFJLE9BQU9rWSxTQUFTbFksQ0FBQyxNQUFNLFlBQW1Ca1ksU0FBU2xZLENBQUMsRUFBRTFMLFNBQVMsS0FBSyxDQUFDNHJCLFVBQVV2b0IsS0FBS3VnQixTQUFTbFksQ0FBQyxDQUFDLEdBQUc7QUFDckdxVyxZQUFJN2MsS0FBSytsQixZQUFZckgsU0FBU2xZLENBQUMsR0FBR3lmLFdBQVdDLDRCQUE0QkMsV0FBVyxDQUFDO01BQ3RGO0lBQ0Q7QUFDQXRKLFVBQU0rSixzQkFBc0IvSixJQUFJZ0ssS0FBSyxDQUFDO0FBQ3RDLFFBQUlGLFFBQVE7QUFDWCxZQUFNRyxZQUFBLGNBQUF2dEIsT0FBMEIyc0IsMkJBQTJCaGdCLFFBQVEseUJBQXlCLElBQUksQ0FBQztBQUNqRyxZQUFNNmdCLE9BQU9KLE9BQU8vbkIsWUFBWSxNQUFNLFVBQVUsWUFBWTtBQUM1RGllLFVBQUlrSyxJQUFJLEVBQUVoQixZQUFZZSxXQUFXYixXQUFXQyw0QkFBNEJDLFdBQVcsQ0FBQztJQUNyRjtBQUNBdEosUUFBSTdjLEtBQ0hvbUIscUJBQXFCO01BQ3BCSixXQUFXO01BQ1hILE1BQU03a0IsWUFBWSxrQkFBa0IsRUFBRStELE1BQU0sR0FBRyxFQUFFSSxLQUFLLFFBQVE7TUFDOUQ0RSxNQUFNL0ksWUFBWSwwREFBMEQ7TUFDNUVxbEIsYUFBYTdzQixXQUFXLG9CQUFvQjtNQUM1Q3lzQjtNQUNBL1YsU0FBU3pWLGFBQWFqQixXQUFXLHVCQUF1QixHQUFHLENBQUMwc0IsMEJBQTBCLENBQUM7TUFDdkZqYixPQUFPelIsV0FBVyw0QkFBNEI7TUFDOUM0QyxPQUFPK3BCO0lBQ1IsQ0FBQyxDQUNGO0FBQ0EsV0FBT3RKO0VBQ1I7QUFDQSxRQUFNK0osd0JBQXlCaEssVUFBUztBQUN2QyxVQUFNQyxNQUFNLENBQUE7QUFBQyxRQUFBbUssYUFBQS9aLDJCQUNTMlAsSUFBQSxHQUFBcUs7QUFBQSxRQUFBO0FBQXRCLFdBQUFELFdBQUFwbUIsRUFBQSxHQUFBLEVBQUFxbUIsU0FBQUQsV0FBQTdaLEVBQUEsR0FBQUMsUUFBNEI7QUFBQSxjQUFqQkMsVUFBQTRaLE9BQUEzWjtBQUNWLFlBQUl1UCxJQUFJL2hCLFdBQVcsS0FBS3VTLFlBQVl3UCxJQUFJdEYsR0FBRyxFQUFFLEdBQUc7QUFDL0NzRixjQUFJN2MsS0FBS3FOLE9BQU87UUFDakI7TUFDRDtJQUFBLFNBQUFFLEtBQUE7QUFBQXlaLGlCQUFBL2YsRUFBQXNHLEdBQUE7SUFBQSxVQUFBO0FBQUF5WixpQkFBQXhaLEVBQUE7SUFBQTtBQUNBLFdBQU9xUDtFQUNSO0FBQ0EsUUFBTXFLLGFBQWFBLENBQUNsakIsTUFBTWhGLFdBQVc7QUFFcEMsVUFBTW1uQixjQUFjbm5CLE9BQU80QyxlQUFlNUMsT0FBTzRDLFlBQVlsVCxRQUFRNlAsU0FBUztBQUM5RSxVQUFNcWUsT0FBTzJKLFVBQVV2aUIsTUFBTWhGLE9BQU9vRSxpQkFBaUIraUIsV0FBVztBQUNoRSxRQUFJdkosS0FBSzloQixXQUFXLEdBQUc7QUFDdEIzRSxVQUFJLCtCQUErQjtBQUNuQyxhQUFPO0lBQ1I7QUFDQSxRQUFJb2pCLE9BQUEsT0FBQWhnQixPQUFjeUgsWUFBWSxxQ0FBcUMsR0FBQyxNQUFBO0FBQ3BFdVksWUFBUXFELEtBQUt6WCxLQUFLLElBQUk7QUFDdEIsV0FBT29VO0VBQ1I7QUFDQSxRQUFNalYsY0FBY0EsQ0FBQ0YsVUFBVXBGLFdBQVc7QUFDekMsUUFDQ3hGLFdBQVcsY0FBYyxLQUN6QnVrQixXQUFXM1osVUFBVXBGLE9BQU90USxPQUFPLEtBQ25DcVAsTUFBTU0sUUFBUUMsU0FBU2xELElBQUksRUFBRW9ILFlBQVksTUFBTXZLLEdBQUc4bUIsZUFDbEQvZixPQUFPdFEsUUFBUXN4QixTQUFTLEdBQ3ZCO0FBQ0QvZ0IsbUJBQWFpb0IsV0FBVzlpQixVQUFVcEYsTUFBTSxHQUFHLGVBQWVBLE9BQU9HLFFBQVE7SUFDMUU7RUFDRDtBQUNBLFFBQU1vQyxtQkFBb0I3UyxhQUFZO0FBQ3JDLFdBQU8wM0IscUJBQXFCO01BQzNCSixXQUFXO01BQ1hILE1BQU03a0IsWUFBWSxrQkFBa0IsRUFBRStELE1BQU0sR0FBRyxFQUFFSSxLQUFLLFFBQVE7TUFDOUQ0RSxNQUFNL0ksWUFBWSxpREFBaUQ7TUFDbkVxbEIsYUFBYTdzQixXQUFXLHVCQUF1QjtNQUMvQ3lzQixXQUFXdjNCLFFBQVE2UCxTQUFTO01BQzVCMlIsU0FBU3pWLGFBQWFqQixXQUFXLHFCQUFxQixHQUFHLENBQUM5SyxRQUFRNlAsU0FBUyxDQUFDLENBQUM7SUFDOUUsQ0FBQztFQUNGO0FBSUEsUUFBTVUsZUFBZSxTQUFTa29CLGNBQWF4YyxLQUFLeWMsV0FBV0MsU0FBU0MsV0FBV3ptQixRQUFRO0FBQ3RGLFFBQUl3bUIsWUFBWSxRQUFXO0FBRTFCQSxnQkFBVXB2QixHQUFHa0g7SUFDZDtBQUNBLFVBQU1vb0IsZUFBZTl0QixTQUFTZ0YsZUFBQSxHQUFBbEYsT0FBa0I2dEIsU0FBUyxFQUFBN3RCLE9BQUc4dEIsT0FBTyxDQUFFO0FBQ3JFLFFBQUlFLGNBQWM7QUFDakIsVUFBSSxDQUFDMW1CLFFBQVE7QUFDWjBtQixxQkFBYXJvQixZQUFZO01BQzFCO0FBQ0EsVUFBSTJsQixTQUFTbGEsR0FBRyxHQUFHO0FBQ2xCNGMscUJBQWFyb0IsYUFBYXlMO01BQzNCLE9BQU87QUFDTjRjLHFCQUFhMW1CLE9BQU84SixHQUFHO01BQ3hCO0FBQ0EsVUFBSTJjLFdBQVc7QUFDZEEsa0JBQVU7TUFDWDtBQUNBanNCLGlCQUFXaUYsb0JBQW9CLEdBQUc7QUFDbEMsYUFBTztJQUNSO0FBRUFqRixlQUFXLE1BQU07QUFDaEI4ckIsb0JBQWF4YyxLQUFLeWMsV0FBV0MsU0FBU0MsU0FBUztJQUNoRCxHQUFHLEdBQUc7QUFDTixXQUFPO0VBQ1I7QUFDQSxRQUFNOWlCLGtCQUFrQkEsQ0FBQ21HLEtBQUt4RyxPQUFPO0FBQ3BDLFdBQU9sRixhQUFhMEwsS0FBSyxhQUFheEcsRUFBRTtFQUN6QztBQUlBLFFBQU0vQyxpQkFBa0I1RyxVQUFTO0FBRWhDLFFBQUkwSSxRQUFRO0FBQ1osUUFBSXNrQjtBQUNKLFFBQUksT0FBT2h0QixTQUFTLFlBQVlBLEtBQUswSSxVQUFVLFVBQWEsQ0FBQzFJLEtBQUswSSxPQUFPO0FBQ3hFQSxjQUFRO0lBQ1Q7QUFDQSxVQUFNL0gsSUFBSVgsS0FBS2lGLFNBQVNrQztBQUN4QixRQUFJalQ7QUFDSixRQUFJcWI7QUFDSixRQUFJNUg7QUFDSixRQUFJRixTQUFTLENBQUM7QUFDZCxRQUFJaUIsU0FBUyxPQUFPMUksS0FBS2lKLGdCQUFnQixPQUFPLENBQUMsR0FBRztBQUNuRC9VLGdCQUFVOEwsS0FBS2lKO0lBRWhCLE9BQU87QUFDTi9VLGdCQUFVLElBQUlxUCxNQUFNLEVBQUVDLFdBQVc3QyxDQUFDO0FBQ2xDNE8sYUFBTzVPLEVBQUVnQixpQkFBaUJ6TixRQUFROHdCLFVBQVU7QUFDNUN2ZCxlQUFTQyxZQUFZL0csRUFBRUMsSUFBSTtBQUMzQitHLGNBQVEzSSxXQUFXLHNCQUFzQixJQUFJeUksT0FBT0UsUUFBUTtBQUM1RCxPQUFDO1FBQUNxbEI7TUFBSSxJQUFJdmxCO0lBQ1g7QUFDQSxVQUFNbEQsSUFBSTtNQUNUclE7TUFDQXFiO01BQ0E1SDtNQUNBcWxCO01BQ0F4b0IsUUFBUXhFLEtBQUtpRjtNQUNid0M7SUFDRDtBQUNBLFVBQU13bEIsWUFBWXh2QixHQUFHVSxXQUFXYSxXQUFXLGdCQUFnQixDQUFDO0FBQzVELFFBQUksT0FBT2l1QixjQUFjLFVBQVU7QUFDbEN4b0IsbUJBQ0MsY0FBQSxpREFBQTFGLE9BQ2lEdEIsR0FBR00sT0FBT29ILGNBQWMsR0FDekVuRixLQUFLaUYsU0FBU04sUUFDZjtBQUNBO0lBQ0Q7QUFDQSxVQUFNdW9CLFFBQVFDLFFBQVExdkIsR0FBR0ssS0FBS3N2QixNQUFNO0FBQ3BDLFVBQU1DLFdBQVdILE1BQU01c0I7QUFDdkIsVUFBTWd0QixTQUFTN3ZCLEdBQUdLLEtBQUt5dkI7QUFDdkIsYUFBU3ZoQixJQUFJLEdBQUdBLElBQUlxaEIsVUFBVSxFQUFFcmhCLEdBQUc7QUFDbEMsWUFBTXdoQixRQUFRRixVQUFVQSxPQUFPN0csU0FBU3lHLE1BQU1saEIsQ0FBQyxDQUFDO0FBRWhELFVBQUt3aEIsU0FBUyxDQUFDOWtCLFNBQVcsQ0FBQzhrQixTQUFTOWtCLE9BQVE7QUFFM0M7TUFDRDtBQUNBLFlBQU0ra0IsY0FBY1IsVUFBVUMsTUFBTWxoQixDQUFDLENBQUM7QUFDdEMsVUFBSXloQixnQkFBZ0IsUUFBVztBQUU5QjtNQUNEO0FBQ0EsVUFBSUMsUUFBUWpwQjtBQUNaLFVBQ0N6RixXQUFXLHFCQUFxQixNQUMvQmt1QixNQUFNbGhCLENBQUMsRUFBRUYsUUFBUSxlQUFlLE1BQU0sS0FBS29oQixNQUFNbGhCLENBQUMsRUFBRUYsUUFBUSxvQkFBb0IsTUFBTSxJQUN0RjtBQUNENGhCLGdCQUFRQztNQUNUO0FBQ0EsY0FBUSxPQUFPRixhQUFBO1FBQ2QsS0FBSztBQUNKOXhCLGNBQUEsV0FBQW9ELE9BQWVtdUIsTUFBTWxoQixDQUFDLEdBQUMsb0JBQUEsRUFBQWpOLE9BQ1p3RixFQUFFclEsU0FBTyxTQUFBLEVBQUE2SyxPQUFVd0YsRUFBRWdMLE1BQUksV0FBQSxFQUFBeFEsT0FBWXdGLEVBQUVvRCxPQUFLLElBQUEsQ0FBSTtBQUMzRCtsQixnQkFBTUQsWUFBWWxwQixDQUFDLEdBQUcyb0IsTUFBTWxoQixDQUFDLEdBQUdoTSxLQUFLaUYsU0FBU04sUUFBUTtBQUN0RDtRQUNELEtBQUs7QUFDSitvQixnQkFBTUQsYUFBYVAsTUFBTWxoQixDQUFDLEdBQUdoTSxLQUFLaUYsU0FBU04sUUFBUTtBQUNuRDtRQUNEO0FBQ0Mya0IsaUJBQUEsNEJBQUF2cUIsT0FBbUNtdUIsTUFBTWxoQixDQUFDLEdBQUMsbUJBQUEsRUFBQWpOLE9BQW9CaU4sR0FBQyxHQUFBLENBQUc7QUFDbkU7TUFDRjtJQUNEO0VBQ0Q7QUFFQSxRQUFNbWhCLFVBQVUsU0FBU1MsU0FBUXhMLE1BQU1sVixPQUFPO0FBQzdDLFVBQU1tVixNQUFNLENBQUE7QUFDWixRQUFJblYsVUFBVSxRQUFXO0FBQ3hCQSxjQUFRO0lBQ1Q7QUFDQSxhQUFTbEIsSUFBSWtCLE9BQU9sQixJQUFJb1csS0FBSzloQixRQUFRLEVBQUUwTCxHQUFHO0FBQ3pDLFVBQUksT0FBT29XLEtBQUtwVyxDQUFDLE1BQU0sT0FBTyxDQUFBLEdBQUk7QUFDakMsZUFBTyxDQUFDLEdBQUdxVyxLQUFLLEdBQUd1TCxTQUFReEwsS0FBS3BXLENBQUMsQ0FBQyxHQUFHLEdBQUc0aEIsU0FBUXhMLE1BQU1wVyxJQUFJLENBQUMsQ0FBQztNQUM3RDtBQUNBcVcsVUFBSTdjLEtBQUs0YyxLQUFLcFcsQ0FBQyxDQUFDO0lBQ2pCO0FBQ0EsV0FBT3FXO0VBQ1I7QUFFQSxRQUFNMWIsWUFBWSxTQUFTa25CLFdBQVVsdEIsR0FBRztBQUN2QzNCLGVBQVcsZ0JBQWdCO0FBQzNCLFVBQU1pdUIsWUFBWXh2QixHQUFHVSxXQUFXVixHQUFHTSxPQUFPb0gsY0FBYztBQUN4RCxRQUFJLE9BQU84bkIsY0FBYyxVQUFVO0FBR2xDeHZCLFNBQUdNLE9BQU9vSCxpQkFBaUIxSCxHQUFHTyxjQUFjbUg7QUFDNUMsYUFBTzBvQixXQUFVbHRCLENBQUM7SUFDbkI7QUFDQSxRQUFJLE9BQU9zc0IsVUFBVWhlLGdCQUFnQixZQUFZO0FBQ2hELGFBQU87SUFDUjtBQUNBeFIsT0FBR0ssS0FBS3N2QixTQUFTSCxVQUFVaGUsWUFBWTtBQUN2Q3hSLE9BQUdLLEtBQUt5dkIsYUFBYSxPQUFPTixVQUFVL2Qsb0JBQW9CLGFBQWErZCxVQUFVL2QsZ0JBQWdCLElBQUksQ0FBQTtBQUNyRyxXQUFPNGUsZUFBZXJ3QixHQUFHSyxLQUFLc3ZCLFFBQVF6c0IsRUFBRXNFLFFBQVE7RUFDakQ7QUFDQSxRQUFNNm9CLGlCQUFpQixTQUFTQyxnQkFBZTNMLE1BQU01ZCxRQUFRO0FBQzVELFFBQUk2ZCxNQUFNO0FBQUEsUUFBQTJMLGFBQUF2YiwyQkFDWTJQLElBQUEsR0FBQTZMO0FBQUEsUUFBQTtBQUF0QixXQUFBRCxXQUFBNW5CLEVBQUEsR0FBQSxFQUFBNm5CLFNBQUFELFdBQUFyYixFQUFBLEdBQUFDLFFBQTRCO0FBQUEsY0FBakJDLFVBQUFvYixPQUFBbmI7QUFDVixZQUFJLE9BQU9ELFlBQVksVUFBVztBQUNqQ3dQLGlCQUFPNkwsY0FBY3JiLFNBQVNyTyxPQUFPRyxVQUFVLEtBQUs7UUFDckQsV0FBVyxPQUFPa08sWUFBWSxPQUFPLENBQUEsS0FBTUEsUUFBUXZTLFNBQVMsR0FBRztBQUM5RCtoQixnQkFBTUEsSUFBSTlYLE1BQU0sZUFBZSxFQUFFSSxLQUFLb2pCLGdCQUFlbGIsU0FBU3JPLE1BQU0sQ0FBQztRQUN0RSxXQUFXLE9BQU9xTyxZQUFZLE9BQU8sQ0FBQyxLQUFLQSxRQUFRc2IsVUFBVTtBQUM1RDlMLGlCQUFPNkwsY0FBY3JiLFFBQVFnSSxNQUFNclcsT0FBT0csVUFBVWtPLFFBQVFzYixRQUFRO1FBQ3JFO01BQ0Q7SUFBQSxTQUFBcGIsS0FBQTtBQUFBaWIsaUJBQUF2aEIsRUFBQXNHLEdBQUE7SUFBQSxVQUFBO0FBQUFpYixpQkFBQWhiLEVBQUE7SUFBQTtBQUNBLFdBQU9xUDtFQUNSO0FBQ0EsUUFBTTZMLGdCQUFnQixTQUFTRSxlQUFjdlQsTUFBTWxSLElBQUlnTixLQUFLMFgsV0FBVztBQUN0RTFYLFlBQUFBLE1BQVE7QUFDUjBYLGtCQUFBQSxZQUFjRCxlQUFjRSxhQUFhelQsSUFBSTtBQUM3Q3dULGtCQUFBQSxZQUFjeFQ7QUFDZCxRQUFJQSxTQUFTN2IsV0FBVyxpQkFBaUIsR0FBRztBQUMzQ3F2QixtQkFBYTtJQUNkO0FBQ0EsV0FBT3B1QixhQUFhLGdDQUFnQyxDQUFDMFcsS0FBS2tFLE9BQU9sUixJQUFJMGtCLFdBQVcxWCxHQUFHLENBQUM7RUFDckY7QUFDQXVYLGdCQUFjSSxlQUFlO0lBQzVCQyxvQkFBb0I7RUFDckI7QUFJQSxRQUFNOWUsWUFBWUEsQ0FBQytlLFVBQVU3cEIsYUFBYTtBQUN6QyxXQUFPMUUsYUFDTiw0R0FHQSxDQUFDMEUsUUFBUSxDQUNWO0VBQ0Q7QUFDQSxRQUFNOHBCLGdCQUFnQkEsQ0FBQzlrQixJQUFJK2tCLE1BQU01dkIsWUFBWTtBQUM1QzR2QixhQUFBQSxPQUFTO0FBQ1QsVUFBTUMsVUFBVUEsTUFBTTtBQUNyQmp3QixvQkFBY08sU0FBU2dGLGVBQUEsR0FBQWxGLE9BQWtCNEssRUFBRSxDQUFFLEdBQUcsT0FBTyxNQUFNN0ssT0FBTztJQUNyRTtBQUNBLFdBQU8sTUFBTTtBQUNaK0IsaUJBQVc4dEIsU0FBU0QsTUFBTTV2QixPQUFPO0lBQ2xDO0VBQ0Q7QUFDQSxRQUFNNnVCLHNCQUFzQkEsQ0FBQzVPLE1BQU02UCxTQUFTQyxVQUFVL3ZCLFlBQVk7QUFDakUyRixpQkFDQ3NhLE1BQ0E2UCxTQUNBQyxVQUNBN3ZCLFdBQVcsZ0JBQWdCLElBQUl5dkIsY0FBY0csVUFBVUMsVUFBVSxNQUFNL3ZCLE9BQU8sSUFBSSxJQUNuRjtFQUNEO0FBSUEsUUFBTWd3QixzQkFBc0JBLENBQUNDLElBQUlDLElBQUlDLE9BQU9DLFdBQVc7QUFDdEQsUUFBSSxDQUFDQSxRQUFRO0FBQ1osYUFBTztJQUNSO0FBQ0EsVUFBTUMsTUFBTUQsT0FBT3p2QixpQkFBaUIsSUFBSTtBQUFBLFFBQUEydkIsY0FBQTNjLDJCQUN2QjBjLEdBQUEsR0FBQUU7QUFBQSxRQUFBO0FBQWpCLFdBQUFELFlBQUFocEIsRUFBQSxHQUFBLEVBQUFpcEIsVUFBQUQsWUFBQXpjLEVBQUEsR0FBQUMsUUFBc0I7QUFBQSxjQUFYMGMsS0FBQUQsUUFBQXZjO0FBQ1YsWUFBSXdjLEdBQUducEIsY0FBYyxnQkFBZ0JtcEIsR0FBR0MsY0FBYyxHQUFHO0FBQ3hELGlCQUFPO1FBQ1I7TUFDRDtJQUFBLFNBQUF4YyxLQUFBO0FBQUFxYyxrQkFBQTNpQixFQUFBc0csR0FBQTtJQUFBLFVBQUE7QUFBQXFjLGtCQUFBcGMsRUFBQTtJQUFBO0FBQ0EsV0FBTztFQUNSO0FBQ0EsUUFBTWxOLHFCQUFxQkEsTUFBTTtBQUdoQyxRQUFJckksR0FBR2EsUUFBUTBHLFFBQVF2SCxHQUFHYSxRQUFRMEcsS0FBS0MsVUFBVTtBQUNoRHhILFNBQUdhLFFBQVEwRyxLQUFLQyxTQUFTdXFCLHdCQUF3QjtJQUNsRDtFQUNEO0FBQ0EsUUFBTWp1QixtQkFBbUIsU0FBU2t1QixvQkFBbUI7QUFFcEQsVUFBTXhzQixPQUFPO0FBQ2JSLDhCQUEwQlEsSUFBSTtBQUM5QixRQUFJQSxLQUFLZ0MsYUFBYSxRQUFRaEMsS0FBS2dDLGFBQWEsUUFBVztBQUMxRDtJQUNEO0FBQ0EsUUFBSSxDQUFDaEMsS0FBS2dDLFNBQVNDLFVBQVUsR0FBRztBQUMvQmpDLFdBQUtnQyxTQUFTaUgsT0FBTztBQUNyQjtJQUNEO0FBQ0FwSyxpQkFBYW1CLElBQUk7QUFDakJnRSxhQUFTeW9CLFFBQVFwdEIsUUFBUXF0QixlQUFlMXNCLEtBQUtnQyxRQUFRLENBQUM7RUFDdkQ7QUFDQSxRQUFNMHFCLGlCQUFrQm5yQixZQUFXO0FBQ2xDLFdBQU8sTUFBTTtBQUNaLFVBQUksQ0FBQ0EsT0FBT1UsVUFBVSxHQUFHO0FBQ3hCLGVBQU87TUFDUjtBQUNBLFVBQUkrQixTQUFTeW9CLFFBQVFFLE9BQU87QUFDM0IsZUFBTztNQUNSO0FBQ0EsWUFBTTtRQUFDcnJCO01BQUMsSUFBSTBDLFNBQVN5b0I7QUFDckIsWUFBTTtRQUFDMWhCO01BQUMsSUFBSS9HLFNBQVN5b0I7QUFDckIsWUFBTUcsa0JBQ0xyckIsT0FBT3NyQixTQUFTdnJCLEdBQUd5SixHQUFHeEosT0FBTzBDLE1BQU0xQyxPQUFPckMsT0FBTyxLQUNqRCxDQUFDMnNCLG9CQUFvQnZxQixHQUFHeUosR0FBR3hKLE9BQU8wQyxNQUFNMUMsT0FBT3JDLE9BQU87QUFFdkQsVUFBSWtqQixJQUFJcm1CLFdBQVcsZ0JBQWdCO0FBQ25DLFVBQUlxbUIsR0FBRztBQUNOQSxhQUFLO01BQ047QUFDQSxVQUFJLENBQUNBLEdBQUc7QUFDUCxZQUFJLENBQUN3SyxpQkFBaUI7QUFDckIsY0FBSXJyQixPQUFPMkMsY0FBYztBQUN4QnJGLHlCQUFhMEMsT0FBTzJDLFlBQVk7VUFDakM7QUFDQTNDLGlCQUFPMEgsT0FBTztBQUNkLGlCQUFPO1FBQ1I7QUFDQSxlQUFPO01BQ1I7QUFFQSxZQUFNakcsSUFBSWlULEtBQUs2SCxJQUFJO0FBQ25CLFVBQUksQ0FBQ3ZjLE9BQU91ckIsa0JBQWtCO0FBQzdCdnJCLGVBQU91ckIsbUJBQW1COXBCO0FBQzFCLGVBQU87TUFDUjtBQUNBLFVBQUk0cEIsaUJBQWlCO0FBQ3BCcnJCLGVBQU91ckIsbUJBQW1CO0FBQzFCLGVBQU87TUFDUjtBQUNBLFVBQUk5cEIsSUFBSXpCLE9BQU91ckIsbUJBQW1CMUssR0FBRztBQUNwQzdnQixlQUFPdXJCLG1CQUFtQjtBQUMxQnZyQixlQUFPMEgsT0FBTztBQUNkLGVBQU87TUFDUjtBQUNBLGFBQU87SUFDUjtFQUNEO0FBQ0EsUUFBTThqQixvQkFBcUJ4ckIsWUFBVztBQUdyQyxRQUFJLENBQUNBLE9BQU95ckIsZ0JBQWdCO0FBQzNCenJCLGFBQU95ckIsaUJBQWlCbHFCLFlBQVk0cEIsZUFBZW5yQixNQUFNLEdBQUcsR0FBRztBQUMvREEsYUFBT2xDLFFBQ04sTUFBTTtBQUNMdUQsc0JBQWNyQixPQUFPeXJCLGNBQWM7TUFDcEMsR0FDQSxRQUNBLFFBQ0Q7SUFDRDtFQUNEO0VBZ0JBLE1BQU0za0IsYUFBYTtJQUNsQmUsWUFBWXpDLFVBQVVxUSxTQUFTNVMsT0FBTztBQUVyQyxXQUFLNm9CLGVBQWV0bUI7QUFDcEIsV0FBS3FRLFVBQVVBO0FBQ2YsV0FBSzVTLFFBQVFBO0FBQ2IsV0FBSzhvQixnQkFBZ0JueEIsV0FBVywyQkFBMkI7QUFDM0QsV0FBS294QixlQUFlcHhCLFdBQVcsMEJBQTBCO0FBQ3pELFdBQUtxeEIsUUFBUTtJQUNkO0lBQ0FBLFVBQVU7QUFDVCxZQUFNQyxVQUFVbHdCLEtBQUt5TCxJQUFJLEtBQUssSUFBSSxLQUFLc2tCLGFBQWE7QUFDcEQsV0FBSzNtQixPQUFPLEtBQUswbUIsYUFBYXRrQixNQUFNLEdBQUd4TCxLQUFLeUwsSUFBSSxHQUFHeWtCLE9BQU8sQ0FBQztJQUM1RDs7Ozs7O0lBTUFDLGVBQWU7QUFFZCxXQUFLL21CLE9BQU8sS0FBS0EsS0FBS2tDLFFBQVEseURBQXlELEVBQUU7SUFDMUY7Ozs7SUFJQThrQixXQUFXO0FBRVYsV0FBS2huQixPQUFPLEtBQUtBLEtBQUtrQyxRQUFRLHlDQUF5QyxFQUFFO0lBQzFFOzs7O0lBSUEra0IsZ0JBQWdCO0FBQ2YsV0FBS2puQixPQUFPLEtBQUtBLEtBQUtrQyxRQUFRLGlEQUFpRCxFQUFFO0lBQ2xGOzs7Ozs7Ozs7SUFTQWdsQixLQUFLQyxTQUFTQyxTQUFTQyxZQUFZQyxZQUFZQyxNQUFNO0FBQ3BELFVBQUlDLE9BQU8sS0FBS3huQjtBQUNoQixVQUFJeW5CLElBQUkzbEIsYUFBYTRsQixVQUFVLEtBQUsxbkIsTUFBTW1uQixTQUFTQyxTQUFTQyxZQUFZQyxZQUFZQyxJQUFJO0FBQ3hGLGFBQU9FLEVBQUUzd0IsU0FBUzB3QixLQUFLMXdCLFFBQVE7QUFDOUIwd0IsZUFBT0M7QUFDUEEsWUFBSTNsQixhQUFhNGxCLFVBQVVELEdBQUdOLFNBQVNDLFNBQVNDLFlBQVlDLFlBQVlDLElBQUk7TUFDN0U7QUFDQSxXQUFLdm5CLE9BQU95bkI7SUFDYjs7Ozs7Ozs7OztJQVVBLE9BQU9DLFVBQVVwYixLQUFLNmEsU0FBU0MsU0FBU0MsWUFBWUMsWUFBWUMsTUFBTTtBQUNyRSxZQUFNSSxLQUFLN2xCLGFBQWE4bEIsV0FBV1QsT0FBTztBQUMxQyxZQUFNVSxLQUFLL2xCLGFBQWE4bEIsV0FBV1IsU0FBUyxHQUFHO0FBQy9DLFlBQU1VLEtBQUtULGFBQWF2bEIsYUFBYThsQixXQUFXUCxZQUFZLEdBQUcsSUFBSTtBQUNuRSxZQUFNVSxLQUFLVCxhQUFheGxCLGFBQWE4bEIsV0FBV04sWUFBWSxHQUFHLElBQUlPO0FBQ25FLFVBQUksQ0FBQ0YsTUFBTSxDQUFDRSxJQUFJO0FBQ2YsYUFBS2hkLEdBQUdxQyxPQUFPLGtFQUFrRTtVQUNoRkMsS0FBSztVQUNMQyxNQUFNO1FBQ1AsQ0FBQztBQUNEO01BQ0Q7QUFDQSxVQUFJLENBQUN1YSxHQUFHeHRCLEtBQUttUyxHQUFHLEdBQUc7QUFDbEIsZUFBT0E7TUFDUjtBQUNBLFVBQUl1TSxNQUFNO0FBQ1YsWUFBTW1QLFdBQVdMLEdBQUc1bkIsS0FBS3VNLEdBQUc7QUFDNUJ1TSxZQUFNdk0sSUFBSWxLLE1BQU0sR0FBR3hMLEtBQUt5TCxJQUFJLEdBQUcybEIsU0FBU0MsS0FBSyxDQUFDO0FBQzlDM2IsWUFBTUEsSUFBSWxLLE1BQU14TCxLQUFLeUwsSUFBSSxHQUFHMmxCLFNBQVNDLFFBQVFELFNBQVMsQ0FBQyxFQUFFbHhCLE1BQU0sQ0FBQztBQUNoRSxVQUFJb3hCLFFBQVE7QUFDWixhQUFPNWIsSUFBSXhWLFNBQVMsR0FBRztBQUN0QixZQUFJcXhCLFVBQVU7QUFDZCxZQUFJRCxVQUFVLEtBQUtMLEdBQUcxdEIsS0FBS21TLEdBQUcsR0FBRztBQUNoQzRiO0FBQ0FDLG9CQUFVTixHQUFHOW5CLEtBQUt1TSxHQUFHLEVBQUUsQ0FBQyxFQUFFeFY7UUFDM0IsV0FBV294QixRQUFRLEtBQUtILEdBQUc1dEIsS0FBS21TLEdBQUcsR0FBRztBQUNyQzRiO0FBQ0FDLG9CQUFVSixHQUFHaG9CLEtBQUt1TSxHQUFHLEVBQUUsQ0FBQyxFQUFFeFY7UUFDM0IsV0FBV2d4QixNQUFNQSxHQUFHM3RCLEtBQUttUyxHQUFHLEdBQUc7QUFDOUI0YjtBQUNBQyxvQkFBVUwsR0FBRy9uQixLQUFLdU0sR0FBRyxFQUFFLENBQUMsRUFBRXhWO1FBQzNCO0FBQ0FxeEIsb0JBQUFBLFVBQVk7QUFDWjdiLGNBQU1BLElBQUlsSyxNQUFNeEwsS0FBS3lMLElBQUksR0FBRzhsQixPQUFPLENBQUM7QUFDcEMsWUFBSUQsVUFBVSxHQUFHO0FBQ2hCO1FBQ0Q7TUFDRDtBQUNBLGFBQU9yUCxPQUFPME8sUUFBUSxNQUFNamI7SUFDN0I7Ozs7Ozs7SUFPQSxPQUFPc2IsV0FBVzdzQixHQUFHcXRCLFFBQVFDLFFBQVE7QUFDcENELGlCQUFBQSxTQUFXO0FBQ1hDLGlCQUFBQSxTQUFXO0FBQ1gsVUFBSUMsUUFBUTtBQUNaLFVBQUkxZixRQUFRO0FBQ1osVUFBSWlZLFNBQVM5bEIsQ0FBQyxHQUFHO0FBQ2hCdXRCLGdCQUFRRixTQUFTbm1CLGdCQUFnQmxILENBQUMsSUFBSXN0QjtNQUN2QyxXQUFXdEgsU0FBU2htQixDQUFDLEdBQUc7QUFDdkIsWUFBSTZCLElBQUk3QixFQUFFUixTQUFTLEVBQUU2SCxNQUFNLENBQUM7QUFDNUIsY0FBTW1tQixLQUFLM3JCLEVBQUVtRSxNQUFNLEdBQUc7QUFDdEI2SCxnQkFBUTJmLEdBQUdoVixHQUFHLEVBQUU7QUFDaEJnVixXQUFHQSxHQUFHenhCLFNBQVMsQ0FBQyxJQUFJO0FBQ3BCOEYsWUFBSTJyQixHQUFHcG5CLEtBQUssR0FBRztBQUNmdkUsWUFBSUEsRUFBRXdGLE1BQU0sR0FBR3hMLEtBQUt5TCxJQUFJLEdBQUd6RixFQUFFOUYsU0FBUyxDQUFDLENBQUM7QUFDeEN3eEIsZ0JBQVFGLFNBQVN4ckIsSUFBSXlyQjtNQUN0QixPQUFPO0FBQ05sMkIsWUFBSSxtQkFBbUI7TUFDeEI7QUFDQUEsVUFBQSx5QkFBQW9ELE9BQTZCK3lCLE9BQUssVUFBQSxFQUFBL3lCLE9BQVdxVCxLQUFLLENBQUU7QUFDcEQsYUFBTyxJQUFJNUcsT0FBT3NtQixPQUFPMWYsS0FBSztJQUMvQjs7OztJQUlBNGYsbUJBQW1CO0FBR2xCLFdBQUt0QixLQUFLLDZDQUE2QyxTQUFTLElBQUk7QUFHcEUsV0FBS0EsS0FBSywrQ0FBK0MsU0FBUyxJQUFJO0lBQ3ZFOzs7O0lBSUF1QixnQkFBZ0I7QUFDZixXQUFLdkIsS0FBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLEdBQUc7SUFDcEM7Ozs7SUFJQXdCLGFBQWE7QUFJWixXQUFLeEIsS0FBSyxNQUFNLFVBQVUsSUFBSTtBQUM5QixXQUFLQSxLQUFLLGVBQWUsaUJBQWlCLGFBQWE7QUFFdkQsV0FBS2xuQixPQUFPLEtBQUtBLEtBQUtrQyxRQUFRLFlBQVksRUFBRTtJQUM3Qzs7OztJQUlBeW1CLGFBQWE7QUFDWixZQUFNQyw0QkFBNEIsQ0FBQTtBQUNsQyxlQUFBQyxLQUFBLEdBQUFDLGtCQUFrRHRpQixPQUFPdWlCLFFBQVFsZSxHQUFHc0csT0FBT0MsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFBeVgsS0FBQUMsZ0JBQUFoeUIsUUFBQSt4QixNQUFHO0FBQW5HLGNBQVcsQ0FBQ0csc0JBQXNCeHFCLFdBQVcsSUFBQXNxQixnQkFBQUQsRUFBQTtBQUM1QyxZQUFJcnFCLGdCQUFnQnZLLEdBQUd3SyxhQUFhRCxnQkFBZ0J2SyxHQUFHMkssY0FBYztBQUNwRTtRQUNEO0FBQ0FncUIsa0NBQTBCNXNCLEtBQUtndEIscUJBQXFCam9CLE1BQU0sR0FBRyxFQUFFSSxLQUFLLE1BQU0sQ0FBQztNQUM1RTtBQUVBLFdBQUsrbEIsS0FBSyxJQUFJbGxCLE9BQUEsY0FBQXpNLE9BQXFCcXpCLDBCQUEwQnpuQixLQUFLLEdBQUcsR0FBQyxRQUFBLEdBQVUsR0FBRyxHQUFHLFNBQVMsS0FBSyxHQUFHO0lBQ3hHOzs7O0lBSUE4bkIsV0FBVztBQUVWLFdBQUsvQixLQUFLLG1CQUFtQixVQUFVO0FBRXZDLFdBQUtsbkIsT0FBTyxLQUFLQSxLQUFLa0MsUUFBUSxnQkFBZ0IsSUFBSTtBQUVsRCxZQUFNd1ksV0FBVyxLQUFLMWEsS0FBS2UsTUFBTSwwQkFBMEI7QUFDM0QsWUFBTXNaLE1BQU1LLFNBQVM1akI7QUFDckIsZUFBUzBMLElBQUksR0FBR0EsSUFBSTZYLEtBQUs3WCxLQUFLLEdBQUc7QUFDaEMsZ0JBQVFrWSxTQUFTbFksQ0FBQyxHQUFBO1VBQ2pCLEtBQUssTUFBTWpOLE9BQU8sUUFBUSxHQUFHO1VBQzdCLEtBQUssT0FBT0EsT0FBTyxRQUFRLEdBQUc7VUFDOUIsS0FBSyxTQUFTQSxPQUFPLFNBQVMsR0FBRztVQUNqQyxLQUFLLFVBQVVBLE9BQU8sU0FBUyxHQUFHO0FBQ2pDO1VBQ0Q7QUFDQ21sQixxQkFBU2xZLENBQUMsSUFBSTtRQUNoQjtNQUNEO0FBQ0EsV0FBS3hDLE9BQU8wYSxTQUFTdlosS0FBSyxFQUFFO0lBQzdCOzs7O0lBSUErbkIsYUFBYTtBQUdaLFlBQU1DLG1CQUFtQjtBQUV6QixXQUFLbnBCLE9BQU8sS0FBS0EsS0FBS2tDLFFBQVFpbkIsa0JBQWtCLElBQUk7SUFDckQ7Ozs7SUFJQUMsUUFBUTtBQUVQLFdBQUtwcEIsT0FBTyxLQUFLQSxLQUFLa0MsUUFBUSxZQUFZLEVBQUU7QUFFNUMsV0FBS2xDLE9BQU8sS0FBS0EsS0FBS2tDLFFBQVEsb0JBQW9CLEVBQUU7QUFHcEQsV0FBS2xDLE9BQU8sS0FBS0EsS0FBS2tDLFFBQVEsc0JBQXNCLEVBQUU7SUFDdkQ7Ozs7SUFJQW1uQixXQUFXO0FBR1YsVUFBSTVzQixJQUFJLEtBQUt1RDtBQUNiLFVBQUl4SyxXQUFXLHlCQUF5QixHQUFHO0FBQzFDLGFBQUt3SyxPQUFPLEtBQUtBLEtBQUtrQyxRQUFRLHdCQUF3QixTQUFTO0FBRS9ELGFBQUtsQyxPQUFPLEtBQUtBLEtBQUtrQyxRQUFRLG1CQUFtQixNQUFNO0FBQ3ZELGFBQUtsQyxPQUFPLEtBQUtBLEtBQUtrQyxRQUFRLFFBQVEsRUFBRTtBQUN4QyxjQUFNb25CLFFBQVEsaUJBQWlCdnBCLEtBQUssS0FBS0MsSUFBSTtBQUM3QyxZQUFJc3BCLE9BQU87QUFDVixXQUFDN3NCLENBQUMsSUFBSTZzQjtRQUNQO0FBQ0EsWUFBSSxDQUFDOXpCLFdBQVcsMEJBQTBCLEdBQUc7QUFDNUNpSCxjQUFJLEtBQUt1RDtRQUNWO0FBRUF2RCxZQUFJQSxFQUFFeUYsUUFBUSxxQkFBcUIsUUFBUTtNQUM1QztBQUdBekYsVUFBSUEsRUFBRXNFLE1BQU0sa0JBQWtCO0FBRTlCdEUsUUFBRSxDQUFDLElBQUlBLEVBQUUsQ0FBQyxFQUFFeUYsUUFBUSxRQUFRLEVBQUU7QUFDOUIsWUFBTXFuQixrQkFBa0I7QUFDeEI5c0IsVUFBSSxLQUFLK3NCLGdCQUFnQi9zQixHQUFHOHNCLGVBQWU7QUFDM0MsV0FBS0UsYUFBYWh0QixFQUFFMEUsS0FBSyxFQUFFLEVBQUVySztBQUM3QixVQUFJcVMsSUFBSSxLQUFLeWQ7QUFDYixVQUFJOEMsS0FBSzVuQixhQUFhNm5CLGVBQWVsdEIsR0FBRzBNLENBQUM7QUFDekMsU0FBRztBQUNGdWdCLGFBQUs1bkIsYUFBYTZuQixlQUFlbHRCLEdBQUcwTSxDQUFDO0FBQ3JDLFVBQUVBO01BQ0gsU0FBU3VnQixHQUFHNXlCLFNBQVMsS0FBSzZ2QixpQkFBaUJ4ZCxNQUFNO0FBQ2pELFdBQUtuSixPQUFPMHBCO0lBQ2I7Ozs7OztJQU1BRixnQkFBZ0JJLE1BQU1uSCxLQUFLO0FBRzFCLGVBQVNqZ0IsSUFBSSxHQUFHQSxJQUFJb25CLEtBQUs5eUIsU0FBUyxHQUFHLEVBQUUwTCxHQUFHO0FBQ3pDLFlBQUlpZ0IsSUFBSXRvQixLQUFLeXZCLEtBQUtwbkIsQ0FBQyxDQUFDLEdBQUc7QUFDdEIsZ0JBQU1yTCxJQUFJLENBQUE7QUFDVixtQkFBU0osSUFBSSxHQUFHQSxJQUFJNnlCLEtBQUs5eUIsUUFBUSxFQUFFQyxHQUFHO0FBQ3JDLGdCQUFJQSxJQUFJeUwsR0FBRztBQUNWckwsZ0JBQUVKLENBQUMsSUFBSTZ5QixLQUFLN3lCLENBQUM7WUFDZDtBQUNBLGdCQUFJQSxNQUFNeUwsR0FBRztBQUNackwsZ0JBQUVxTCxDQUFDLElBQUlvbkIsS0FBS3BuQixDQUFDLElBQUlvbkIsS0FBS3BuQixJQUFJLENBQUMsSUFBSW9uQixLQUFLcG5CLElBQUksQ0FBQztZQUMxQztBQUNBLGdCQUFJekwsSUFBSXlMLElBQUksR0FBRztBQUNkckwsZ0JBQUVKLElBQUksQ0FBQyxJQUFJNnlCLEtBQUs3eUIsQ0FBQztZQUNsQjtVQUNEO0FBQ0EsaUJBQU8sS0FBS3l5QixnQkFBZ0JyeUIsR0FBR3NyQixHQUFHO1FBQ25DO01BQ0Q7QUFDQSxhQUFPbUg7SUFDUjs7Ozs7O0lBTUEsT0FBT0QsZUFBZUMsTUFBTXR6QixTQUFTO0FBQ3BDLFlBQU11bEIsSUFBSStOLEtBQUt4bkIsTUFBTSxHQUFHLElBQUk5TCxPQUFPO0FBQ25DLGFBQU91bEIsRUFBRTFhLEtBQUssRUFBRTtJQUNqQjs7OztJQUlBMG9CLG9CQUFvQjtBQUVuQixXQUFLN3BCLE9BQU8sS0FBS0EsS0FBS2tDLFFBQVEsY0FBYyxFQUFFO0lBQy9DOzs7Ozs7O0lBT0E0bkIsY0FBYztBQUNiLFVBQ0MsS0FBS2pzQixNQUFNblQsUUFBUThULFlBQVksTUFBTXZLLEdBQUcyTSxnQkFDeEMsS0FBSy9DLE1BQU1uVCxRQUFROFQsWUFBWSxNQUFNdkssR0FBR3dLLFdBQ3ZDO0FBQ0QsYUFBS3NvQixhQUFhO0FBQ2xCLGFBQUtDLFNBQVM7QUFDZCxhQUFLQyxjQUFjO0FBQ25CLGFBQUt1QixpQkFBaUI7QUFDdEIsWUFBSWh6QixXQUFXLDJCQUEyQixHQUFHO0FBQzVDLGVBQUtpekIsY0FBYztRQUNwQixPQUFPO0FBQ04sZUFBS3NCLHVCQUF1QjtRQUM3QjtBQUNBLGFBQUtyQixXQUFXO0FBQ2hCLGFBQUtDLFdBQVc7QUFDaEIsYUFBS00sU0FBUztBQUNkLGFBQUtDLFdBQVc7QUFDaEIsYUFBS0UsTUFBTTtBQUNYLGFBQUtDLFNBQVM7QUFDZCxhQUFLUSxrQkFBa0I7TUFDeEIsT0FBTztBQUNOLGFBQUtaLFNBQVM7TUFDZjtBQUNBLFdBQUsxVCxPQUFPbUIsVUFBVSxLQUFLMVcsTUFBTSxLQUFLeVEsT0FBTztBQUM3QyxXQUFLdVosUUFBUTtBQUNiLFdBQUtDLG1CQUFtQjtJQUN6Qjs7Ozs7SUFLQSxPQUFPQyxnQkFBZ0JscUIsTUFBTTtBQUM1QixZQUFNbXFCLFVBQVU7QUFDaEJBLGNBQVFDLFlBQVk7QUFDcEIsVUFBSWpvQjtBQUNKLFVBQUlrb0IsU0FBUztBQUNiLFVBQUlDLGVBQWU7QUFDbkIsY0FBUW5vQixRQUFRZ29CLFFBQVFwcUIsS0FBS0MsSUFBSSxPQUFPLE1BQU07QUFBQSxZQUFBdXFCO0FBRzdDRixrQkFBQSxHQUFBOTBCLE9BQWF0QixHQUFHc1osaUJBQWlCdk4sS0FBS3NVLFVBQVVnVyxjQUFjbm9CLE1BQU04bEIsS0FBSyxDQUFDLEdBQUMsV0FBQSxFQUFBMXlCLE9BQzFFNmEsTUFBTUksS0FBS0ssTUFBTUMsUUFDbEIsRUFBQXZiLE9BQUd0QixHQUFHc1osaUJBQWlCcEwsTUFBTSxDQUFDLENBQUMsR0FBQyxJQUFBLEVBQUE1TSxPQUFLdEIsR0FBR3NaLG1CQUFBZ2QsVUFBa0Jwb0IsTUFBTSxDQUFDLE9BQUEsUUFBQW9vQixZQUFBLFNBQUFBLFVBQUtwb0IsTUFBTSxDQUFDLEtBQUtBLE1BQU0sQ0FBQyxDQUFDLEdBQUMsTUFBQTtBQUMzRm1vQix1QkFBZUgsUUFBUUM7TUFDeEI7QUFFQUMsZ0JBQVVwMkIsR0FBR3NaLGlCQUFpQnZOLEtBQUtvQyxNQUFNeEwsS0FBS3lMLElBQUksR0FBR2lvQixZQUFZLENBQUMsQ0FBQztBQUNuRSxhQUFPRDtJQUNSO0lBQ0FHLHFCQUFxQjtBQUNwQixZQUFNQyxRQUFRO0FBQ2RBLFlBQU1MLFlBQVk7QUFDbEIsWUFBTWpvQixRQUFRc29CLE1BQU0xcUIsS0FBSyxLQUFLQyxJQUFJO0FBQ2xDLFVBQUltQyxPQUFPO0FBRVYsY0FBTWltQixTQUFTLEtBQUtwb0IsS0FBS29DLE1BQU0sR0FBR3hMLEtBQUt5TCxJQUFJLEdBQUdGLE1BQU04bEIsUUFBUSxDQUFDLENBQUM7QUFDOUQsY0FBTSxDQUFBLEVBQUd5QyxPQUFPLElBQUl2b0I7QUFDcEIsY0FBTXdvQixVQUFVLEtBQUszcUIsS0FBS29DLE1BQU14TCxLQUFLeUwsSUFBSSxHQUFHb29CLE1BQU1MLFNBQVMsQ0FBQztBQUM1RCxZQUFJMW1CLFFBQVE7QUFDWixZQUFJeUIsTUFBTTtBQUNWLFlBQUlpakIsT0FBT3R4QixTQUFTLEdBQUc7QUFDdEI0TSxrQkFBQSxHQUFBbk8sT0FBV3VNLGFBQWFvb0IsZ0JBQWdCOUIsTUFBTSxHQUFDLEdBQUEsRUFBQTd5QixPQUFJbU8sT0FBSyxJQUFBO1FBQ3pEO0FBQ0EsWUFBSWluQixRQUFRN3pCLFNBQVMsR0FBRztBQUN2QnFPLGdCQUFBLEtBQUE1UCxPQUFXNFAsR0FBRyxFQUFBNVAsT0FBR3VNLGFBQWFvb0IsZ0JBQWdCUyxPQUFPLENBQUM7UUFDdkQ7QUFDQSxjQUFNOU8sSUFBSSxJQUFJOWhCLE1BQU0sRUFBRU0sUUFBUSxLQUFLb1csT0FBTztBQUMxQ29MLFVBQUVyQixjQUFja1EsT0FBTztBQUN2QixjQUFNRSxjQUFBLEdBQUFyMUIsT0FDTDZhLE1BQU1JLEtBQUtLLE1BQU1DLFdBQVc3YyxHQUFHc1osaUJBQWlCc08sRUFBRXRoQixTQUFTLElBQUksQ0FBQyxHQUNqRSxHQUFBLEVBQUFoRixPQUFJdEIsR0FBR3NaLGlCQUFpQnNPLEVBQUUzaEIsTUFBTSxDQUFDO0FBQ2pDLGVBQUEsR0FBQTNFLE9BQVVtTyxPQUFLLFdBQUEsRUFBQW5PLE9BQVlxMUIsYUFBVyxlQUFBLEVBQUFyMUIsT0FBZ0J0QixHQUFHc1osaUJBQWlCbWQsT0FBTyxDQUFDLEVBQUFuMUIsT0FBRzRQLEdBQUc7TUFDekY7QUFFQSxhQUFPckQsYUFBYW9vQixnQkFBZ0IsS0FBS2xxQixJQUFJO0lBQzlDOzs7Ozs7SUFNQWdxQixVQUFVO0FBQ1QsVUFBSSxDQUFDLEtBQUt6VSxNQUFNO0FBQ2Y7TUFDRDtBQUNBLFVBQUlzRCxNQUFNLEtBQUt0RDtBQUdmc0QsWUFBTUEsSUFBSTNXLFFBQVEsSUFBSUYsT0FBQSxhQUFBek0sT0FBb0J0QixHQUFHSSxLQUFLMGMsYUFBVyxrQkFBQSxHQUFvQixHQUFHLEdBQUcsU0FBUztBQUNoRzhILFlBQU1BLElBQUkzVyxRQUFRLElBQUlGLE9BQUEsYUFBQXpNLE9BQW9CdEIsR0FBR0ksS0FBSzBjLGFBQVcsa0JBQUEsR0FBb0IsR0FBRyxHQUFHLFNBQVM7QUFFaEcsV0FBS3dFLE9BQU9zRDtJQUNiOzs7Ozs7SUFNQXRYLGNBQWM7QUFDYixXQUFLdW9CLFlBQVk7QUFDakIsVUFBSSxPQUFPLEtBQUt2VSxTQUFTLFVBQVc7QUFDbkM7TUFDRDtBQUNBLFVBQUksUUFBUXBiLEtBQUssS0FBS29iLElBQUksR0FBRztBQUM1QjtNQUNEO0FBQ0F0YSxtQkFBYSxRQUFRLHNCQUFzQixLQUFLNEMsTUFBTTFDLFFBQVE7QUFDOURncEIsMEJBQW9CLEtBQUs1TyxNQUFNLGdCQUFnQixLQUFLMVgsTUFBTTFDLFVBQVU7UUFDbkUwQyxPQUFPLEtBQUtBO01BQ2IsQ0FBQztBQUNELFlBQU1ndEIsT0FBTyxLQUFLcEIsYUFBYSxLQUFLenBCLEtBQUtsSixTQUFTLEtBQUtnMEIsU0FBUyxJQUFJO0FBQ3BFN3ZCLG1CQUFhNHZCLE1BQU0sb0JBQW9CLEtBQUtodEIsTUFBTTFDLFFBQVE7SUFDM0Q7Ozs7SUFJQTJ2QixXQUFXO0FBQ1YsWUFBTTN6QixJQUFJMUIsU0FBU2lILGNBQWMsR0FBRztBQUNwQ3ZGLFFBQUV3RixZQUFZO0FBQ2R4RixRQUFFK0QsWUFBWThCLFlBQVksU0FBUztBQUNuQyxZQUFNdkQsT0FBTztBQUNidEMsUUFBRTR6QixVQUFVLE1BQU07QUFDakJ0eEIsYUFBS2t0QixpQkFBaUI7QUFDdEJsdEIsYUFBS210QixnQkFBZ0I7QUFDckJudEIsYUFBS290QixRQUFRO0FBQ2JwdEIsYUFBSzhILFlBQVk7TUFDbEI7QUFDQSxhQUFPcEs7SUFDUjs7OztJQUlBOHlCLHFCQUFxQjtBQUVwQixXQUFLMVUsT0FBTyxLQUFLQSxLQUFLclQsUUFBUSwyREFBMkQsRUFBRTtBQUMzRixXQUFLcVQsT0FBTyxLQUFLQSxLQUFLeFUsTUFBTSxJQUFJLEVBQUVJLEtBQUssR0FBRztBQUMxQyxXQUFLb1UsT0FBTyxLQUFLQSxLQUFLclQsUUFBUSx5QkFBeUIsRUFBRTtJQUMxRDs7OztJQUlBNm5CLHlCQUF5QjtBQUN4QixXQUFLN0MsS0FBSyxPQUFPLEtBQUs7QUFDdEIsV0FBS0EsS0FBSyxpQkFBaUIsTUFBTSxJQUFJO0lBQ3RDO0VBQ0Q7QUFHQSxRQUFNNW9CLGlCQUFpQkEsQ0FBQzBzQixXQUFXdGdDLFNBQVNzUSxXQUFXO0FBQ3RELFVBQU1xRixNQUFNLElBQUl0RyxNQUFNclAsT0FBTyxFQUFFbVgsVUFBVTtBQUN6QyxRQUFJaUssTUFBQSxHQUFBdlcsT0FBU3RCLEdBQUdJLEtBQUswWCxhQUFXLDRDQUFBO0FBQ2hDLFFBQUlrZixnQkFBZ0JBLE1BQWlCO0FBQ3BDLFdBQUtwZ0IsR0FBR3FDLE9BQU8sMEJBQTBCO1FBQUNDLEtBQUs7UUFBVUMsTUFBTTtNQUFPLENBQUM7SUFDeEU7QUFDQSxRQUFJOGQsY0FBYztBQUNsQixZQUFRRixXQUFBO01BQ1AsS0FBSztBQUNKbGYsZUFBQSxVQUFBdlcsT0FBaUI4SyxLQUFHLDBCQUFBLEVBQUE5SyxPQUEyQkMsV0FBVywwQkFBMEIsQ0FBQztBQUNyRnkxQix3QkFBZ0JFO0FBQ2hCO01BQ0QsS0FBSztBQUNKcmYsZUFBQSxnQ0FBQXZXLE9BQXVDOEssR0FBRztBQUMxQzRxQix3QkFBZ0JHO0FBQ2hCO01BQ0QsS0FBSyxZQUFZO0FBQ2hCLGNBQU1DLFdBQVcsSUFBSXR4QixNQUFNclAsT0FBTyxFQUFFa3hCLFNBQVM7QUFDN0NzUCxzQkFBY3pRLG1CQUFtQjRRLFFBQVE7QUFDekN2ZixlQUFPN1gsR0FBR0MsR0FBR29vQixPQUFPbmlCLEtBQUtreEIsUUFBUSxJQUFBLDhDQUFBOTFCLE9BQ2dCMjFCLFdBQVcsSUFBQSx5RkFBQTMxQixPQUNnQzIxQixhQUFXLHlEQUFBLEVBQUEzMUIsT0FBMEQyMUIsYUFBVyxxQ0FBQSxFQUFBMzFCLE9BQXNDMjFCLFdBQVc7QUFDN05ELHdCQUFnQks7QUFDaEI7TUFDRDtNQUNBLEtBQUs7QUFDSkosc0JBQWN6USxtQkFBbUIsSUFBSTFnQixNQUFNclAsT0FBTyxFQUFFa3hCLFNBQVMsQ0FBQztBQUM5RDlQLGVBQUEsNEJBQUF2VyxPQUFtQzIxQixhQUFXLFdBQUEsRUFBQTMxQixPQUFZQyxXQUFXLDJCQUEyQixDQUFDO0FBQ2pHeTFCLHdCQUFnQk07QUFDaEI7TUFDRCxLQUFLLG9CQUFvQjtBQUN4QixZQUFJQyxRQUFRO0FBQ1osWUFBSWgyQixXQUFXLGlCQUFpQixHQUFHO0FBQ2xDZzJCLGtCQUFBLDRCQUFBajJCLE9BQW9DOEssR0FBRztRQUN4QztBQUNBeUwsZUFBQSxVQUFBdlcsT0FBaUI4SyxLQUFHLDBDQUFBLEVBQUE5SyxPQUEyQ2kyQixLQUFLO0FBQ3BFUCx3QkFBZ0JRO0FBQ2hCO01BQ0Q7TUFDQSxLQUFLO0FBQ0ozZixlQUFBLDBCQUFBdlcsT0FBaUM4SyxHQUFHO0FBQ3BDNHFCLHdCQUFnQlM7QUFDaEI7TUFDRCxLQUFLO0FBQ0o1ZixlQUFPcGhCLFFBQVF5VCxRQUFBLFVBQUE1SSxPQUFrQjdLLFFBQVF5VCxLQUFLLElBQUEsVUFBQTVJLE9BQWU3SyxRQUFRbXlCLGFBQWEsRUFBRWhiLFVBQVUsQ0FBQztBQUMvRmlLLGVBQ0M7QUFDRG1mLHdCQUFnQlU7QUFDaEI7SUFDRjtBQUNBM3NCLHNCQUFrQmhFLE1BQU07QUFDeEIsVUFBTWlWLFdBQVl4VCxPQUFNO0FBQ3ZCdEssVUFBSSxtQ0FBbUM7QUFDdkMsVUFBSTY0QixjQUFjLFlBQVk7QUFFN0JZLDRCQUFvQm52QixFQUFFdUQsSUFBSSxFQUFFNnJCLEtBQUssTUFBTTtBQUN0Q0MseUJBQWVkLFdBQVdDLGNBQWN2Z0MsU0FBUytSLEdBQUd6QixNQUFNLEdBQUdBLE9BQU9HLFVBQVVILFFBQVF5QixDQUFDO1FBQ3hGLENBQUM7QUFDRDtNQUNEO0FBQ0FxdkIscUJBQWVkLFdBQVdDLGNBQWN2Z0MsU0FBUytSLEdBQUd6QixNQUFNLEdBQUdBLE9BQU9HLFVBQVVILFFBQVF5QixDQUFDO0lBQ3hGO0FBQ0EsVUFBTXN2QixLQUFLQSxNQUFNO0FBQ2hCOU0seUJBQW1CblQsS0FBS21FLFVBQVVqVixNQUFNO0FBQ3hDLGFBQU87SUFDUjtBQUNBLFFBQUlBLE9BQU9pRixXQUFXLENBQUN6SyxXQUFXLG9CQUFvQixHQUFHO0FBQ3hEdTJCLFNBQUc7SUFDSixPQUFPO0FBQ04vd0IsYUFBT2xDLFFBQVFpekIsSUFBSSxVQUFVLFVBQUEsWUFBQXgyQixPQUFzQnkxQixXQUFTLGFBQUEsQ0FBYTtJQUMxRTtFQUNEO0FBQ0EsUUFBTWdCLFdBQVlwVCxVQUFTO0FBQzFCQSxTQUFLaUssS0FBSyxDQUFDOW5CLEdBQUd5SixNQUFNO0FBQ25CLGFBQU96SixNQUFNeUosSUFBSSxJQUFJekosSUFBSXlKLElBQUksS0FBSztJQUNuQyxDQUFDO0FBQ0QsVUFBTXluQixNQUFNLENBQUE7QUFBQyxRQUFBQyxjQUFBampCLDJCQUNTMlAsSUFBQSxHQUFBdVQ7QUFBQSxRQUFBO0FBQXRCLFdBQUFELFlBQUF0dkIsRUFBQSxHQUFBLEVBQUF1dkIsVUFBQUQsWUFBQS9pQixFQUFBLEdBQUFDLFFBQTRCO0FBQUEsY0FBakJDLFVBQUE4aUIsUUFBQTdpQjtBQUNWMmlCLFlBQUlqd0IsS0FDSG5MLFNBQVM7VUFDUm5HLFNBQVMsSUFBSXFQLE1BQU1zUCxPQUFPO1VBQzFCd1ksTUFBTXhZLFFBQVF0SSxNQUFNLEdBQUcsRUFBRUksS0FBSyxRQUFRO1VBQ3RDNUgsUUFBUTtRQUNULENBQUMsQ0FDRjtNQUNEO0lBQUEsU0FBQWdRLEtBQUE7QUFBQTJpQixrQkFBQWpwQixFQUFBc0csR0FBQTtJQUFBLFVBQUE7QUFBQTJpQixrQkFBQTFpQixFQUFBO0lBQUE7QUFDQSxXQUFPeWlCLElBQUk5cUIsS0FBSyxJQUFJO0VBQ3JCO0FBQ0EsUUFBTWlyQixnQkFBZ0JBLE1BQU07QUFDM0IsVUFBTUMsS0FBS3hoQixHQUFHdlosS0FBS2c3QixRQUFRbGIsSUFBSSxnQkFBZ0I7QUFDL0MsUUFBSWliLE1BQU1BLEdBQUdwUCxTQUFTLEdBQUcsR0FBRztBQUUzQixhQUFPalosT0FBT0UsU0FBU21vQixHQUFHdHJCLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFO0lBQzVDO0FBQ0EsV0FBTztFQUNSO0FBQ0EsUUFBTXdyQixjQUFjQSxNQUFNO0FBQ3pCLFFBQUksQ0FBQ3Q0QixHQUFHM0MsS0FBS2s3QixVQUFVO0FBQ3RCLFlBQU1ILEtBQUt4aEIsR0FBR3ZaLEtBQUtnN0IsUUFBUWxiLElBQUksZ0JBQWdCO0FBQy9DbmQsU0FBRzNDLEtBQUtrN0IsV0FBVztBQUNuQixVQUFJSCxJQUFJO0FBQ1AsY0FBTUksZUFBZUosR0FBR3RyQixNQUFNLEdBQUc7QUFDakMsWUFBSTByQixhQUFhMzFCLFdBQVcsS0FBSzIxQixhQUFhLENBQUMsTUFBTSxZQUFZO0FBQ2hFLFdBQUEsRUFBQSxFQUFLeDRCLEdBQUczQyxLQUFLazdCLFFBQVEsSUFBSUM7UUFDMUIsT0FBTztBQUNOM00saUJBQUEsb0NBQUF2cUIsT0FBMkM4MkIsRUFBRSxDQUFFO1FBQ2hEO01BQ0Q7SUFDRDtBQUNBLFdBQU9wNEIsR0FBRzNDLEtBQUtrN0I7RUFDaEI7QUFJQSxRQUFNRSxnQkFBZ0JBLE1BQU07QUFDM0IsUUFBSUMsS0FBS0MsZUFBZXBNLFVBQVVxTSxrQkFBa0IsUUFBVztBQUU5RCxhQUFPO0lBQ1I7QUFDQSxVQUFNUixLQUFLeGhCLEdBQUd2WixLQUFLZzdCLFFBQVFsYixJQUFJLGdCQUFnQjtBQUMvQyxRQUFJaWIsTUFBTSxDQUFDQSxHQUFHcFAsU0FBUyxXQUFXLEdBQUc7QUFHcEMsYUFBTztJQUNSO0FBQ0EsV0FBTztFQUNSO0FBS0EsUUFBTTZQLGFBQWFBLE1BQU07QUFDeEIsUUFBSSxDQUFDNzRCLEdBQUczQyxLQUFLeTdCLFNBQVM7QUFDckIsVUFBSUMsZUFBZXYzQixTQUFTVSxjQUFjLE1BQU0sRUFBRWdvQixhQUFhLE1BQU07QUFDckUsVUFBSTNvQixXQUFXLGFBQWEsR0FBRztBQUM5QnczQix1QkFBZXgzQixXQUFXLGFBQWE7TUFDeEMsV0FBV3czQixpQkFBaUIsTUFBTTtBQUdqQ0EsdUJBQWVDLGdCQUFnQixNQUFNLFFBQVEsVUFBVTtNQUN4RDtBQUNBaDVCLFNBQUczQyxLQUFLeTdCLFVBQVVKLEtBQUtDLGVBQWVNLG1CQUFtQixDQUFDRixjQUFjRyxVQUFVQyxRQUFRLENBQUM7SUFDNUY7QUFDQSxXQUFPbjVCLEdBQUczQyxLQUFLeTdCO0VBQ2hCO0FBY0EsUUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFdBQU9waUIsR0FBR3ZaLEtBQUtnN0IsUUFBUWxiLElBQUksTUFBTTtFQUNsQztBQVFBLFFBQU1pYyxtQkFBbUJBLENBQUMzaUMsU0FBU21XLEdBQUd5c0IsbUJBQW1CO0FBQ3hELFFBQUkvWCxPQUFPLENBQUMsU0FBUztBQUNyQixRQUFJbnFCO0FBQ0osUUFBSW1pQyxTQUFTN2lDO0FBQ2IsUUFBSTYwQjtBQUNKLFFBQUlpTztBQUNKLFFBQUlGLGdCQUFnQjtBQUVuQkUsNkJBQXdCQyxxQkFBb0I7QUFDM0MsWUFBSXBELFNBQVM7QUFDYkEsa0JBQUEsWUFBQTkwQixPQUNhdEIsR0FBR0ksS0FBSzBvQixTQUFTLEVBQUF4bkIsT0FBRyxJQUFJd0UsTUFBTTB6QixnQkFBZ0JyMUIsS0FBSyxFQUFFeUosVUFBVSxHQUFDLG1CQUFBLEVBQUF0TSxPQUNsRWs0QixnQkFBZ0J4ZixPQUFLLElBQUEsRUFBQTFZLE9BQUt5SCxZQUFZLE1BQU0sR0FBQyxNQUFBO0FBQ3hEcXRCLGtCQUFVO0FBQ1ZBLGtCQUFBLFlBQUE5MEIsT0FBc0J0QixHQUFHSSxLQUFLMG9CLFNBQVMsRUFBQXhuQixPQUFHLElBQUl3RSxNQUM3QzB6QixnQkFBZ0JyMUIsS0FDakIsRUFBRXlKLFVBQVUsR0FBQyxtQkFBQSxFQUFBdE0sT0FBb0J5SCxZQUFZLE1BQU0sR0FBQyxNQUFBO0FBQ3BEcXRCLGtCQUFVO0FBQ1YsZUFBT0E7TUFDUjtJQUNELE9BQU87QUFFTixZQUFNcUQsYUFBYTdzQixFQUFFLENBQUMsRUFBRW9OO0FBQ3hCdWYsNkJBQXdCQyxxQkFBb0I7QUFDM0MsWUFBSXBELFNBQVM7QUFDYkEsa0JBQUEsWUFBQTkwQixPQUFzQnRCLEdBQUdJLEtBQUswb0IsU0FBUyxFQUFBeG5CLE9BQUcsSUFBSXdFLE1BQU13ekIsTUFBTSxFQUFFMXJCLFVBQVUsR0FBQyxRQUFBLEVBQUF0TSxPQUFTbTRCLFlBQVUsU0FBQSxFQUFBbjRCLE9BQ3pGazRCLGdCQUFnQnhmLE9BQ2pCLElBQUEsRUFBQTFZLE9BQUt5SCxZQUFZLEtBQUssR0FBQyxNQUFBO0FBQ3ZCcXRCLGtCQUFVO0FBQ1ZBLGtCQUFBLFlBQUE5MEIsT0FBc0J0QixHQUFHSSxLQUFLMG9CLFNBQVMsRUFBQXhuQixPQUFHLElBQUl3RSxNQUFNd3pCLE1BQU0sRUFBRTFyQixVQUFVLEdBQUMsbUJBQUEsRUFBQXRNLE9BQ3RFazRCLGdCQUFnQnhmLE9BQ2pCLElBQUEsRUFBQTFZLE9BQUt5SCxZQUFZLE1BQU0sR0FBQyxNQUFBO0FBQ3hCcXRCLGtCQUFVO0FBQ1YsZUFBT0E7TUFDUjtJQUNEO0FBQUEsUUFBQXNELGNBQUExa0IsMkJBQzJCcEksRUFBRWtvQixRQUFRLENBQUEsR0FBQTZFO0FBQUEsUUFBQTtBQUFyQyxXQUFBRCxZQUFBL3dCLEVBQUEsR0FBQSxFQUFBZ3hCLFVBQUFELFlBQUF4a0IsRUFBQSxHQUFBQyxRQUF3QztBQUFBLGNBQTdCLENBQUM1RyxHQUFHNkcsT0FBTyxJQUFBdWtCLFFBQUF0a0I7QUFDckIsWUFBSWdrQixnQkFBZ0I7QUFDbkIvTixpQkFBT2xXLFFBQVFqUjtBQUNmbTFCLG1CQUFTLElBQUl4ekIsTUFBTXdsQixJQUFJO1FBQ3hCO0FBQ0EsY0FBTStDLFFBQVFqWixRQUFRaVosUUFBUSxjQUFjO0FBQzVDLGNBQU11TCxXQUFXLElBQUluZSxLQUFLckcsUUFBUTJFLFNBQVM7QUFDM0MsWUFBSThmLFVBQVVDLGNBQWNGLFFBQVE7QUFDcEMsY0FBTUcsV0FBV0MsY0FBY0osUUFBUTtBQUN2QyxZQUFJQyxZQUFZMWlDLEtBQUs7QUFDcEIwaUMsb0JBQVU7UUFDWCxPQUFPO0FBQ04xaUMsZ0JBQU0waUM7UUFDUDtBQUNBLFlBQUlBLFNBQVM7QUFDWnZZLGVBQUt2WixLQUFBLHNEQUFBekcsT0FBMkR1NEIsU0FBTyxtQkFBQSxDQUFtQjtRQUMzRjtBQUNBdlksYUFBS3ZaLEtBQUEsZ0NBQUF6RyxPQUM0QmlOLElBQUksSUFBSSxRQUFRLFFBQU0sSUFBQSxHQUFBLE9BQUFqTixPQUMvQ2k0QixxQkFBcUJua0IsT0FBTyxHQUFDLE9BQUEsR0FBQSxnQkFBQTlULE9BRXZCdEIsR0FBR0ksS0FBSzBvQixTQUFTLEVBQUF4bkIsT0FBRyxJQUFJd0UsTUFBTXd6QixNQUFNLEVBQUUxckIsVUFBVSxHQUFDLFNBQUEsRUFBQXRNLE9BQzVEOFQsUUFBUTRFLE9BQ1QsSUFBQSxFQUFBMVksT0FBS3k0QixVQUFRLFdBQUEsQ0FDZjtBQUNBLFlBQUlFLFVBQVU7QUFDZCxZQUFJQyxVQUFVO0FBQ2QsWUFBSWIsZ0JBQWdCO0FBQ25CWSxvQkFBVWo2QixHQUFHSSxLQUFLMG9CLFlBQVl3USxPQUFPMXJCLFVBQVU7QUFDL0Nzc0Isb0JBQVVsNkIsR0FBR3NaLGlCQUFpQmdTLElBQUk7UUFDbkMsT0FBTztBQUNOLGdCQUFNO1lBQUNqdUI7VUFBSSxJQUFJK1g7QUFDZixjQUFJQSxRQUFRNkUsWUFBWTtBQUN2QmdnQixzQkFBVTE0QixXQUFXLGdCQUFnQjtBQUNyQzI0QixzQkFBVWw2QixHQUFHc1osaUJBQWlCdlEsWUFBWSxRQUFRLENBQUM7VUFDcEQsT0FBTztBQUNOa3hCLHNCQUFVajZCLEdBQUdDLEdBQUdvb0IsT0FBT25pQixLQUFLN0ksSUFBSSxJQUFBLEdBQUFpRSxPQUU3QnRCLEdBQUdJLEtBQUswb0IsWUFBWWxTLEdBQUdzRyxPQUFPQyxJQUFJLHVCQUF1QixFQUFFbmQsR0FBRzhtQixXQUFXLEdBQzFFLHdCQUFBLEVBQUF4bEIsT0FBeUIsSUFBSXdFLE1BQU16SSxJQUFJLEVBQUV1USxVQUFVLENBQUMsSUFBQSxHQUFBdE0sT0FDaER0QixHQUFHSSxLQUFLMG9CLFlBQVlsUyxHQUFHc0csT0FBT0MsSUFBSSx1QkFBdUIsRUFBRW5kLEdBQUc0SyxRQUFRLEdBQUMsR0FBQSxFQUFBdEosT0FBSSxJQUFJd0UsTUFDbEZ6SSxJQUNELEVBQUV1USxVQUFVLENBQUM7QUFDZnNzQixzQkFBVWw2QixHQUFHc1osaUJBQWlCamMsSUFBSTtVQUNuQztRQUNEO0FBQ0Fpa0IsYUFBS3ZaLEtBQUEsT0FBQXpHLE9BQVkrM0IsaUJBQWlCaEwsUUFBUSxJQUFFLFdBQUEsRUFBQS9zQixPQUFZMjRCLFNBQU8sSUFBQSxFQUFBMzRCLE9BQUs0NEIsU0FBTyxXQUFBLENBQVc7QUFDdEYsWUFBSUMsVUFBVTtBQUNkLGNBQU1qYyxJQUFJOUksUUFBUStrQixXQUFXL2tCLFFBQVFnbEI7QUFDckMsWUFBSWxjLEdBQUc7QUFDTmljLG9CQUFVLElBQUl0c0IsYUFBYXFRLEdBQUcsSUFBSXBZLE1BQU13ekIsTUFBTSxFQUFFelEsTUFBTSxDQUFDLEVBQUUwTixtQkFBbUI7UUFDN0UsV0FBV25oQixRQUFRaWxCLGVBQWU7QUFDakNGLG9CQUFVcHhCLFlBQVksUUFBUTtRQUMvQjtBQUNBdVksYUFBS3ZaLEtBQUEsT0FBQXpHLE9BQVkrM0IsaUJBQWlCLEtBQUtoTCxLQUFLLEVBQUEvc0IsT0FBRzY0QixTQUFPLE9BQUEsR0FBUyxPQUFPO0FBQ3RFN1ksZUFBTyxDQUFDQSxLQUFLcFUsS0FBSyxFQUFFLENBQUM7TUFDdEI7SUFBQSxTQUFBb0ksS0FBQTtBQUFBb2tCLGtCQUFBMXFCLEVBQUFzRyxHQUFBO0lBQUEsVUFBQTtBQUFBb2tCLGtCQUFBbmtCLEVBQUE7SUFBQTtBQUNBK0wsU0FBS3ZaLEtBQUssVUFBVTtBQUNwQixXQUFPdVosS0FBS3BVLEtBQUssRUFBRTtFQUNwQjtBQUNBLFFBQU1vdEIsYUFBYUEsQ0FBQzl4QixHQUFHK3hCLFdBQVc7QUFFakMsVUFBTWpyQixJQUFJaXJCLFNBQVMsS0FBSztBQUN4QixXQUFPLElBQUk5ZSxLQUFLLENBQUNqVCxJQUFJOEcsQ0FBQztFQUN2QjtBQVFBLFFBQU1rckIsa0JBQWtCQSxDQUFDMVksTUFBTXlXLGFBQWE7QUFDM0MsV0FBTyxJQUFJOWMsS0FBS3FHLEtBQUsyWSxlQUFlLFNBQVM7TUFBQ2xDO0lBQVEsQ0FBQyxDQUFDO0VBQ3pEO0FBQ0EsUUFBTW1DLG9CQUFxQjVZLFVBQVM7QUFFbkMsUUFBSTJXLGNBQWMsR0FBRztBQUNwQixhQUFBLEdBQUFuM0IsT0FBVXc0QixjQUFjaFksSUFBSSxHQUFDLEdBQUEsRUFBQXhnQixPQUFJMDRCLGNBQWNsWSxJQUFJLENBQUM7SUFDckQ7QUFDQSxRQUFJa1gsZ0JBQWdCLE1BQU0sWUFBWTtBQUNyQyxZQUFNMkIsS0FBS0gsZ0JBQWdCMVksTUFBTXdXLFlBQVksQ0FBQztBQUM5QyxhQUFBLEdBQUFoM0IsT0FBVWlzQixJQUFJRCxVQUFVLENBQUNxTixHQUFHQyxZQUFZLEdBQUdELEdBQUdFLFNBQVMsSUFBSSxHQUFHRixHQUFHRyxRQUFRLENBQUMsQ0FBQyxFQUFFNXRCLEtBQUssR0FBRyxHQUFDLEdBQUEsRUFBQTVMLE9BQUlpc0IsSUFBSUQsVUFBVSxDQUN2R3FOLEdBQUdJLFNBQVMsR0FDWkosR0FBR0ssV0FBVyxHQUNkTCxHQUFHTSxXQUFXLENBQUEsQ0FDZCxFQUFFL3RCLEtBQUssR0FBRyxDQUFDO0lBQ2I7QUFDQSxVQUFNbXJCLFVBQVU5MkIsV0FBVywrQkFBK0I7QUFDMUQ4MkIsWUFBUUUsV0FBV0QsWUFBWTtBQUMvQixXQUFPeFcsS0FBSzJZLGVBQWU1QixXQUFXLEdBQUdSLE9BQU87RUFDakQ7QUFDQSxRQUFNeUIsZ0JBQWlCaFksVUFBUztBQUMvQixRQUFJNlk7QUFFSixRQUFJbEMsY0FBYyxHQUFHO0FBRXBCa0MsV0FBS0wsV0FBV3hZLE1BQU1xVyxjQUFjLENBQUM7QUFDckMsYUFBTzVLLElBQUlELFVBQVUsQ0FBQ3FOLEdBQUd4WSxlQUFlLEdBQUd3WSxHQUFHelksWUFBWSxJQUFJLEdBQUd5WSxHQUFHMVksV0FBVyxDQUFDLENBQUMsRUFBRS9VLEtBQUssR0FBRztJQUM1RjtBQUNBLFFBQUk4ckIsZ0JBQWdCLE1BQU0sWUFBWTtBQUNyQzJCLFdBQUtILGdCQUFnQjFZLE1BQU13VyxZQUFZLENBQUM7QUFDeEMsYUFBTy9LLElBQUlELFVBQVUsQ0FBQ3FOLEdBQUdDLFlBQVksR0FBR0QsR0FBR0UsU0FBUyxJQUFJLEdBQUdGLEdBQUdHLFFBQVEsQ0FBQyxDQUFDLEVBQUU1dEIsS0FBSyxHQUFHO0lBQ25GO0FBQ0EsVUFBTW1yQixVQUFVOTJCLFdBQVcsMkJBQTJCO0FBQ3REODJCLFlBQVFFLFdBQVdELFlBQVk7QUFDL0IsV0FBT3hXLEtBQUtvWixtQkFBbUJyQyxXQUFXLEdBQUdSLE9BQU87RUFDckQ7QUFDQSxRQUFNMkIsZ0JBQWlCbFksVUFBUztBQUMvQixRQUFJNlk7QUFFSixRQUFJbEMsY0FBYyxHQUFHO0FBRXBCa0MsV0FBS0wsV0FBV3hZLE1BQU1xVyxjQUFjLENBQUM7QUFDckMsYUFBTzVLLElBQUlELFVBQVUsQ0FBQ3FOLEdBQUczWSxZQUFZLEdBQUcyWSxHQUFHNVksY0FBYyxHQUFHNFksR0FBR1EsY0FBYyxDQUFDLENBQUMsRUFBRWp1QixLQUFLLEdBQUc7SUFDMUY7QUFDQSxRQUFJOHJCLGdCQUFnQixNQUFNLFlBQVk7QUFDckMyQixXQUFLSCxnQkFBZ0IxWSxNQUFNd1csWUFBWSxDQUFDO0FBQ3hDLGFBQU8vSyxJQUFJRCxVQUFVLENBQUNxTixHQUFHSSxTQUFTLEdBQUdKLEdBQUdLLFdBQVcsR0FBR0wsR0FBR00sV0FBVyxDQUFDLENBQUMsRUFBRS90QixLQUFLLEdBQUc7SUFDakY7QUFDQSxVQUFNbXJCLFVBQVU5MkIsV0FBVywyQkFBMkI7QUFDdEQ4MkIsWUFBUUUsV0FBV0QsWUFBWTtBQUMvQixXQUFPeFcsS0FBS3NaLG1CQUFtQnZDLFdBQVcsR0FBR1IsT0FBTztFQUNyRDtBQUVBLFFBQU1WLHNCQUF1QjBELHNCQUFxQjtBQUNqRCxVQUFNQyxXQUFXNWhCLFNBQVMyaEIsZ0JBQWdCLEVBQUV6aEI7QUFDNUMsVUFBTXZjLE9BQU9zYyxTQUFTMmhCLFNBQVNDLEtBQUs7QUFDcEMsVUFBTUMsV0FBVyxDQUFBO0FBQ2pCLFFBQUluK0IsS0FBS28rQixRQUFRO0FBQUEsVUFBQUMsY0FBQTFtQiwyQkFDUTNYLEtBQUtvK0IsTUFBQSxHQUFBRTtBQUFBLFVBQUE7QUFBN0IsYUFBQUQsWUFBQS95QixFQUFBLEdBQUEsRUFBQWd6QixVQUFBRCxZQUFBeG1CLEVBQUEsR0FBQUMsUUFBcUM7QUFBQSxnQkFBMUJ5bUIsWUFBQUQsUUFBQXRtQjtBQUNWLGNBQUksQ0FBQyxDQUFDLEtBQUssUUFBUSxlQUFlLEVBQUUyVCxTQUFTNFMsU0FBUyxHQUFHO0FBQ3hESixxQkFBU3p6QixLQUFBLFNBQUF6RyxPQUFjczZCLFdBQVMsU0FBQSxDQUFTO1VBQzFDO1FBQ0Q7TUFBQSxTQUFBdG1CLEtBQUE7QUFBQW9tQixvQkFBQTFzQixFQUFBc0csR0FBQTtNQUFBLFVBQUE7QUFBQW9tQixvQkFBQW5tQixFQUFBO01BQUE7SUFDRDtBQUNBLFFBQUkrbEIsU0FBU08sa0JBQWtCUCxTQUFTTyxlQUFlSixRQUFRO0FBQUEsVUFBQUssY0FBQTltQiwyQkFDdENzbUIsU0FBU08sZUFBZUosTUFBQSxHQUFBTTtBQUFBLFVBQUE7QUFBaEQsYUFBQUQsWUFBQW56QixFQUFBLEdBQUEsRUFBQW96QixVQUFBRCxZQUFBNW1CLEVBQUEsR0FBQUMsUUFBd0Q7QUFBQSxnQkFBN0N5bUIsWUFBQUcsUUFBQTFtQjtBQUNWbW1CLG1CQUFTenpCLEtBQUEsU0FBQXpHLE9BQWNzNkIsV0FBUyxTQUFBLENBQVM7UUFDMUM7TUFBQSxTQUFBdG1CLEtBQUE7QUFBQXdtQixvQkFBQTlzQixFQUFBc0csR0FBQTtNQUFBLFVBQUE7QUFBQXdtQixvQkFBQXZtQixFQUFBO01BQUE7SUFDRDtBQUNBLFdBQU95bUIsU0FBUyxFQUFFQyxzQkFBc0JULFFBQVE7RUFDakQ7QUFDQSxRQUFNM0QsaUJBQWlCQSxDQUFDZCxXQUFXelYsTUFBTXBWLElBQUluRixRQUFRNkUsYUFBYTtBQUVqRSxRQUFJTixTQUFTO0FBQ2JOLHdCQUFvQmpFLE1BQU07QUFDMUIsWUFBUWd3QixXQUFBO01BQ1AsS0FBSztNQUNMLEtBQUs7QUFDSnpyQixpQkFBUztBQUNUO01BQ0QsS0FBSztBQUNKQSxpQkFBUztBQUNUO01BQ0QsS0FBSztBQUNKSyxzQkFBY0MsUUFBUTtBQUN0QjtJQUNGO0FBQ0Fza0Isd0JBQW9CNU8sTUFBTWhXLFFBQVFZLEVBQUU7RUFDckM7QUFDQSxRQUFNd3JCLHlCQUF5QkEsQ0FBQzNHLFVBQVVubEIsYUFBYTtBQUN0RCxRQUFJO0FBQ0gsWUFBTXN3QixRQUFReGlCLFNBQVM5TixTQUFTRyxJQUFJO0FBQ3BDLFlBQU11ZixPQUFPM1IsU0FBU3VpQixNQUFNdGlCLE1BQU1DLEtBQUs7QUFDdkMsVUFBSXlSLEtBQUs2USxTQUFTO0FBRWpCdndCLGlCQUFTaEMsUUFBUTtBQUNqQjtNQUNEO0FBQ0EsWUFBTXd3QixVQUNMOU8sUUFBUUEsS0FBS3hSLGFBQWF3UixLQUFLeFIsVUFBVSxDQUFDLEVBQUVzaUIsaUJBQWlCLGFBQzFEOVEsS0FBS3hSLFVBQVUsQ0FBQyxFQUFFc2dCLFVBQ2xCO0FBQ0osVUFBSSxPQUFPQSxZQUFZLFVBQVU7QUFDaEN4dUIsaUJBQVNHLE9BQU9xdUI7QUFDaEJ4dUIsaUJBQVN5TyxlQUFlLElBQUlvQixLQUFLNlAsS0FBS3hSLFVBQVUsQ0FBQyxFQUFFQyxTQUFTO01BQzdEO0lBQ0QsUUFBUTtBQUNQLGFBQU87SUFDUjtFQUNEO0FBQ0EsUUFBTTBkLDBCQUEwQkEsQ0FBQzFHLFVBQVVubEIsYUFBNEI7QUFDdEUsUUFBSTtBQUNILFlBQU1zd0IsUUFBUXhpQixTQUFTOU4sU0FBU0csSUFBSTtBQUNwQyxZQUFNNFksT0FBT3VYLE1BQU10aUIsTUFBTXRQO0FBQ3pCLFVBQUlnWCxPQUFPLENBQUE7QUFDWCxVQUFJLENBQUNxRCxNQUFNO0FBQ1YsZUFBTzViLFlBQVksb0JBQW9CO01BQ3hDO0FBQUEsVUFBQXN6QixjQUFBcm5CLDJCQUNzQjJQLElBQUEsR0FBQTJYO0FBQUEsVUFBQTtBQUF0QixhQUFBRCxZQUFBMXpCLEVBQUEsR0FBQSxFQUFBMnpCLFVBQUFELFlBQUFubkIsRUFBQSxHQUFBQyxRQUE0QjtBQUFBLGdCQUFqQkMsVUFBQWtuQixRQUFBam5CO0FBQ1YsZ0JBQU11UyxJQUFJLElBQUk5aEIsTUFBTXNQLFFBQVFqUixLQUFLO0FBQ2pDbWQsZUFBS3ZaLEtBQUEsWUFBQXpHLE9BQWlCdEIsR0FBR0ksS0FBSzBvQixTQUFTLEVBQUF4bkIsT0FBR3NtQixFQUFFaGEsVUFBVSxHQUFDLElBQUEsRUFBQXRNLE9BQUtzbUIsRUFBRXRoQixTQUFTLEVBQUV1RyxPQUFPLEdBQUMsTUFBQSxDQUFNO1FBQ3hGO01BQUEsU0FBQXlJLEtBQUE7QUFBQSttQixvQkFBQXJ0QixFQUFBc0csR0FBQTtNQUFBLFVBQUE7QUFBQSttQixvQkFBQTltQixFQUFBO01BQUE7QUFDQStMLGFBQU9BLEtBQUtwVSxLQUFLLElBQUk7QUFDckIsVUFBSWd2QixNQUFNSyxZQUFZTCxNQUFNSyxTQUFTQyxZQUFZO0FBQ2hEbGIsZ0JBQVF2WSxZQUFZLFdBQVc7TUFDaEM7QUFDQSxhQUFPdVk7SUFDUixRQUFRO0FBQ1AsYUFBTztJQUNSO0VBQ0Q7QUFDQXRoQixLQUFHYyxHQUFHMjdCLGdDQUFpQ2p0QixTQUFRO0FBQzlDdFIsUUFBSSwrQkFBK0I7QUFDbkMsVUFBTXcrQixVQUFVbHRCLElBQUltdEI7QUFDcEIsUUFBSW50QixJQUFJb0ssU0FBU3BLLElBQUlvSyxNQUFNQyxPQUFPO0FBQ2pDLFlBQU15UixPQUFPM1IsU0FBU25LLElBQUlvSyxNQUFNQyxLQUFLO0FBQ3JDLFlBQU11Z0IsVUFDTDlPLFFBQVFBLEtBQUt4UixhQUFhd1IsS0FBS3hSLFVBQVUsQ0FBQyxFQUFFc2lCLGlCQUFpQixhQUMxRDlRLEtBQUt4UixVQUFVLENBQUMsRUFBRXNnQixVQUNsQjtBQUNKLFVBQUksT0FBT0EsWUFBWSxZQUFZcDZCLE1BQU1BLEdBQUdhLFdBQVdiLEdBQUdhLFFBQVEwRyxRQUFRdkgsR0FBR2EsUUFBUTBHLEtBQUtDLFVBQVU7QUFFbkcsY0FBTTRGLElBQUksSUFBSVMsYUFBYXVzQixTQUFTcDZCLEdBQUdhLFFBQVEwRyxLQUFLQyxTQUFTL1EsU0FBU3VKLEdBQUdhLFFBQVEwRyxLQUFLQyxRQUFRO0FBQzlGNEYsVUFBRXlvQixZQUFZO0FBQ2Q3dUIscUJBQWFvRyxFQUFFa1UsTUFBTSxzQkFBc0JvYixPQUFPO01BQ25EO0lBQ0Q7RUFDRDtBQUNBLFFBQU1sRiwwQkFBMEJBLENBQUMvZ0MsU0FBU21WLFVBQVU3RSxXQUFXO0FBQzlELFFBQUk7QUFDSCxZQUFNbTFCLFFBQVF4aUIsU0FBUzlOLFNBQVNHLElBQUk7QUFDcEMsWUFBTXVmLE9BQU8zUixTQUFTdWlCLE1BQU10aUIsTUFBTUMsS0FBSztBQUN2QyxZQUFNdWdCLFVBQ0w5TyxRQUFRQSxLQUFLeFIsYUFBYXdSLEtBQUt4UixVQUFVLENBQUMsRUFBRXNpQixpQkFBaUIsYUFDMUQ5USxLQUFLeFIsVUFBVSxDQUFDLEVBQUVzZ0IsVUFDbEI7QUFDSixVQUFJeFYsTUFBTTtBQUNWLFVBQUlnWSxNQUFNO0FBQ1YsVUFBSTtBQUNILFNBQUM7VUFBQ0E7UUFBRyxDQUFDLElBQUk3MUIsT0FBTzJDLGFBQWFrZ0I7TUFDL0IsUUFBUTtNQUVSO0FBQ0EsVUFBSWdULEtBQUs7QUFDUmhZLGNBQUEsR0FBQXRqQixPQUFTc2pCLEtBQUcsU0FBQSxFQUFBdGpCLE9BQVV5SCxZQUFZLFdBQVcsR0FBQyxPQUFBLEVBQUF6SCxPQUFRdEIsR0FBR3NaLGlCQUFpQnNqQixHQUFHLENBQUM7TUFDL0U7QUFDQSxVQUFJLE9BQU94QyxZQUFZLFVBQVU7QUFDaEMsY0FBTWh0QixJQUFJQyxpQkFBaUIrc0IsU0FBUzNqQyxTQUFTc1EsTUFBTTtBQUNuRHFHLFVBQUV5b0IsWUFBWTtBQUNkLFlBQUl6b0IsRUFBRWtVLE1BQU07QUFDWHNELGlCQUFBLE9BQUF0akIsT0FBYzhMLEVBQUVrVSxJQUFJO1FBQ3JCO0FBQ0EsWUFBSS9mLFdBQVcsa0JBQWtCLEdBQUc7QUFDbkMsZ0JBQU13cUIsT0FBT3pmLFlBQVk4dEIsU0FBU3h1QixRQUFRO0FBQzFDMU4sY0FBSTZ0QixJQUFJO0FBQ1J4ZiwwQkFBZ0J3ZixNQUFNaGxCLE9BQU9HLFFBQVE7UUFDdEM7TUFDRDtBQUNBLFVBQUlva0IsUUFBUUEsS0FBS3VSLG9CQUFvQixVQUFVO0FBQzlDLGNBQU16d0IsTUFBTSxJQUFJdEcsTUFBTXJQLE9BQU87QUFDN0IsY0FBTXFtQyxTQUFTdFcsbUJBQUEsUUFBQWxsQixPQUEyQjhLLElBQUl3YSxlQUFlLENBQUMsQ0FBRTtBQUNoRSxjQUFNbVcsYUFBQSxHQUFBejdCLE9BQ0Z0QixHQUFHSSxLQUFLNDhCLGdCQUFjLHNGQUFBLEVBQUExN0IsT0FFWHlGLE9BQU9HLFVBQVEscURBQUEsRUFBQTVGLE9BQXNEdzdCLE1BQU07QUFDMUZsWSxjQUFBLEdBQUF0akIsT0FBU3NqQixLQUFHLE1BQUEsRUFBQXRqQixPQUFPeUgsWUFBWSxvQkFBb0IsR0FBQyxhQUFBLEVBQUF6SCxPQUNuRHRCLEdBQUdJLEtBQUs2OEIsYUFDVCxTQUFBLEVBQUEzN0IsT0FBVXc3QixRQUFNLElBQUEsRUFBQXg3QixPQUFLeUgsWUFBWSxrQkFBa0IsR0FBQyxNQUFBO0FBQ3BENk4sV0FBR3NtQixPQUFPQyxLQUFLSixVQUFVO01BQzFCO0FBQ0FsRixxQkFBZSxjQUFjdUYseUJBQXlCM21DLFNBQVNtVixRQUFRLEdBQUc3RSxPQUFPRyxVQUFVMEUsUUFBUTtBQUNuRyxhQUFPZ1o7SUFDUixRQUFRO0FBQ1AsYUFBTztJQUNSO0VBQ0Q7QUFDQSxRQUFNd1ksMkJBQTJCQSxDQUFDck0sVUFBVW5sQixhQUFhO0FBQ3hELFFBQUk7QUFDSCxZQUFNeXhCLFFBQVEzakIsU0FBUzlOLFNBQVNHLElBQUk7QUFDcEMsWUFBTTRZLE9BQU8wWSxNQUFNempCLE1BQU0wakI7QUFDekIsVUFBSTNZLE1BQU07QUFDVCxjQUFNQyxNQUFNLENBQUE7QUFBQyxZQUFBMlksY0FBQXZvQiwyQkFDUzJQLElBQUEsR0FBQTZZO0FBQUEsWUFBQTtBQUF0QixlQUFBRCxZQUFBNTBCLEVBQUEsR0FBQSxFQUFBNjBCLFVBQUFELFlBQUFyb0IsRUFBQSxHQUFBQyxRQUE0QjtBQUFBLGtCQUFqQkMsVUFBQW9vQixRQUFBbm9CO0FBQ1Z1UCxnQkFBSTdjLEtBQUtxTixRQUFRalIsS0FBSztVQUN2QjtRQUFBLFNBQUFtUixLQUFBO0FBQUFpb0Isc0JBQUF2dUIsRUFBQXNHLEdBQUE7UUFBQSxVQUFBO0FBQUFpb0Isc0JBQUFob0IsRUFBQTtRQUFBO0FBQ0EsWUFBSXFQLElBQUkvaEIsV0FBVyxHQUFHO0FBQ3JCLGlCQUFPa0csWUFBWSxzQkFBc0I7UUFDMUM7QUFDQSxlQUFBLE9BQUF6SCxPQUFjeUgsWUFBWSxZQUFZLEdBQUMsT0FBQSxFQUFBekgsT0FBUXkyQixTQUFTblQsR0FBRyxDQUFDO01BQzdEO0FBQ0EsYUFBTzdiLFlBQVksc0JBQXNCO0lBQzFDLFFBQVE7QUFDUCxhQUFPO0lBQ1I7RUFDRDtBQUNBLFFBQU1vdUIseUJBQXlCQSxDQUFDcEcsVUFBVW5sQixhQUFhO0FBQ3RELFFBQUk7QUFDSCxZQUFNeXhCLFFBQVEzakIsU0FBUzlOLFNBQVNHLElBQUk7QUFDcEMsWUFBTTRZLE9BQU8wWSxNQUFNempCLE1BQU02akI7QUFDekIsVUFBSTdZLE1BQU0sQ0FBQTtBQUFDLFVBQUE4WSxjQUFBMW9CLDJCQUNXMlAsSUFBQSxHQUFBZ1o7QUFBQSxVQUFBO0FBQXRCLGFBQUFELFlBQUEvMEIsRUFBQSxHQUFBLEVBQUFnMUIsVUFBQUQsWUFBQXhvQixFQUFBLEdBQUFDLFFBQTRCO0FBQUEsZ0JBQWpCQyxVQUFBdW9CLFFBQUF0b0I7QUFDVnVQLGNBQUk3YyxLQUFLcU4sUUFBUWpSLEtBQUs7UUFDdkI7TUFBQSxTQUFBbVIsS0FBQTtBQUFBb29CLG9CQUFBMXVCLEVBQUFzRyxHQUFBO01BQUEsVUFBQTtBQUFBb29CLG9CQUFBbm9CLEVBQUE7TUFBQTtBQUNBLFVBQUlxUCxJQUFJL2hCLFdBQVcsR0FBRztBQUNyQixlQUFPa0csWUFBWSxnQkFBZ0I7TUFDcEM7QUFDQTZiLFlBQUEsT0FBQXRqQixPQUFhd1gsUUFBUSwrQkFBK0IsQ0FBQzhMLElBQUkvaEIsTUFBTSxDQUFDLEdBQUMsT0FBQSxFQUFBdkIsT0FBUXkyQixTQUFTblQsR0FBRyxDQUFDO0FBQ3RGLFVBQUl5WSxNQUFNZCxZQUFZYyxNQUFNZCxTQUFTcUIsWUFBWTtBQUNoRGhaLGVBQU83YixZQUFZLFdBQVc7TUFDL0I7QUFDQSxhQUFPNmI7SUFDUixRQUFRO0FBQ1AsYUFBTztJQUNSO0VBQ0Q7QUFDQSxRQUFNeVMseUJBQXlCQSxDQUFDdEcsVUFBVW5sQixhQUFhO0FBQ3RELFFBQUlnWixNQUFNLENBQUE7QUFDVixRQUFJaVosV0FBVyxDQUFDO0FBQ2hCLFFBQUk7QUFDSEEsaUJBQVdua0IsU0FBUzlOLFNBQVNHLElBQUksRUFBRTZOO0lBQ3BDLFFBQVE7QUFDUCxhQUFPO0lBQ1I7QUFDQSxVQUFNdmMsT0FBT3NjLFNBQVNra0IsU0FBU3RDLEtBQUs7QUFDcEMsUUFBSWwrQixNQUFNO0FBQ1QsWUFBTTtRQUFDdytCO01BQWMsSUFBSWdDO0FBQ3pCLFVBQUl4Z0MsS0FBS3lnQyxZQUFZLElBQUk7QUFDeEJsWixZQUFJN2MsS0FBS2dCLFlBQVksY0FBYyxDQUFDO01BQ3JDLFdBQVcxTCxLQUFLOCtCLFlBQVksSUFBSTtBQUMvQnZYLFlBQUk3YyxLQUFLZ0IsWUFBWSwyQkFBMkIsQ0FBQztNQUNsRDtBQUNBLFVBQUkxTCxLQUFLMGdDLFdBQVc7QUFDbkIsWUFBSTFnQyxLQUFLMmdDLGNBQWM7QUFDdEJwWixjQUFJN2MsS0FBQSxNQUFBekcsT0FBV3lILFlBQVksWUFBWSxHQUFDLE1BQUEsQ0FBTTtRQUMvQyxPQUFPO0FBQ042YixjQUFJN2MsS0FBQSxNQUFBekcsT0FBV3lILFlBQVksU0FBUyxHQUFDLE1BQUEsQ0FBTTtRQUM1QztNQUNEO0FBQ0EsVUFBSTh5QixtQkFBbUIsWUFBWUEsa0JBQWtCLFlBQVlBLGlCQUFpQjtBQUNqRixZQUFJb0MsbUNBQW1DO0FBQ3ZDLGlCQUFTMXZCLElBQUksR0FBR3N0QixlQUFlcUMsY0FBYzN2QixJQUFJc3RCLGVBQWVxQyxXQUFXcjdCLFFBQVEwTCxLQUFLO0FBQ3ZGLGNBQUlzdEIsZUFBZXFDLFdBQVczdkIsQ0FBQyxFQUFFbk8sU0FBU3dXLEdBQUdzRyxPQUFPQyxJQUFJLFVBQVUsR0FBRztBQUNwRThnQiwrQ0FBbUM7QUFDbkM7VUFDRDtRQUNEO0FBQ0EsWUFBSUEsa0NBQWtDO0FBQ3JDLGNBQUksWUFBWXBDLGdCQUFnQjtBQUMvQmpYLGdCQUFJN2MsS0FBQSxTQUFBekcsT0FBY3lILFlBQVksUUFBUSxHQUFDLFVBQUEsQ0FBVTtVQUNsRDtBQUNBLGNBQUksWUFBWTh5QixnQkFBZ0I7QUFDL0JqWCxnQkFBSTdjLEtBQUEsU0FBQXpHLE9BQWN5SCxZQUFZLFFBQVEsR0FBQyxVQUFBLENBQVU7VUFDbEQ7UUFDRDtNQUNEO0FBQ0EsVUFBSXhILFdBQVcsaUJBQWlCLEtBQUtsRSxLQUFLOGdDLFFBQVE7QUFDakQsZ0JBQVE5Z0MsS0FBSzhnQyxRQUFBO1VBQ1osS0FBSztBQUNKdlosZ0JBQUk3YyxLQUFBLEdBQUF6RyxPQUFReUgsWUFBWSxRQUFRLEdBQUMsS0FBQSxDQUFLO0FBQ3RDO1VBQ0QsS0FBSztBQUNKNmIsZ0JBQUk3YyxLQUFBLEdBQUF6RyxPQUFReUgsWUFBWSxTQUFTLEdBQUMsS0FBQSxDQUFLO0FBQ3ZDO1FBQ0Y7TUFDRDtBQUNBLFVBQUkxTCxLQUFLbytCLFFBQVE7QUFBQSxZQUFBMkMsY0FBQXBwQiwyQkFDUTNYLEtBQUtvK0IsTUFBQSxHQUFBNEM7QUFBQSxZQUFBO0FBQTdCLGVBQUFELFlBQUF6MUIsRUFBQSxHQUFBLEVBQUEwMUIsVUFBQUQsWUFBQWxwQixFQUFBLEdBQUFDLFFBQXFDO0FBQUEsa0JBQTFCeW1CLFlBQUF5QyxRQUFBaHBCO0FBQ1YsZ0JBQUksQ0FBQyxDQUFDLEtBQUssUUFBUSxlQUFlLEVBQUUyVCxTQUFTNFMsU0FBUyxHQUFHO0FBSXhEaFgsa0JBQUk3YyxLQUFLL0gsR0FBR3NaLGlCQUFpQjFDLEdBQUdwZ0IsUUFBQSxTQUFBOEssT0FBaUJzNkIsV0FBUyxTQUFBLEdBQVd2K0IsS0FBSzhnQyxNQUFNLEVBQUV2USxLQUFLLENBQUMsQ0FBQztZQUMxRjtVQUNEO1FBQUEsU0FBQXRZLEtBQUE7QUFBQThvQixzQkFBQXB2QixFQUFBc0csR0FBQTtRQUFBLFVBQUE7QUFBQThvQixzQkFBQTdvQixFQUFBO1FBQUE7TUFDRDtBQUNBLFVBQUlzbUIsa0JBQWtCQSxlQUFlSixRQUFRO0FBQUEsWUFBQTZDLGNBQUF0cEIsMkJBQ3BCNm1CLGVBQWVKLE1BQUEsR0FBQThDO0FBQUEsWUFBQTtBQUF2QyxlQUFBRCxZQUFBMzFCLEVBQUEsR0FBQSxFQUFBNDFCLFVBQUFELFlBQUFwcEIsRUFBQSxHQUFBQyxRQUErQztBQUFBLGtCQUFwQ3ltQixZQUFBMkMsUUFBQWxwQjtBQUNWdVAsZ0JBQUk3Yzs7OztjQUFBLE1BQUF6RyxPQUlHdEIsR0FBR3NaLGlCQUFpQjFDLEdBQUdwZ0IsUUFBQSxTQUFBOEssT0FBaUJzNkIsV0FBUyxTQUFBLEdBQVd2K0IsS0FBSzhnQyxNQUFNLEVBQUV2USxLQUFLLENBQUMsR0FBQyxNQUFBO1lBQ3ZGO1VBQ0Q7UUFBQSxTQUFBdFksS0FBQTtBQUFBZ3BCLHNCQUFBdHZCLEVBQUFzRyxHQUFBO1FBQUEsVUFBQTtBQUFBZ3BCLHNCQUFBL29CLEVBQUE7UUFBQTtNQUNEO0FBQ0EsVUFBSWxZLEtBQUttaEMsY0FBYztBQUFBLFlBQUFDO0FBQ3RCN1osWUFBSTdjLEtBQ0gvSCxHQUFHc1osbUJBQUFtbEIsa0JBQ0RwaEMsS0FBS3FoQyxlQUFBLFFBQUFELG9CQUFBLFNBQUFBLGtCQUFhLE9BQ2xCMTFCLFlBQVksZ0JBQWdCLEtBQzNCMUwsS0FBS21oQyxlQUFlMUUsY0FBYyxJQUFJcmUsS0FBS3BlLEtBQUttaEMsWUFBWSxDQUFDLElBQUksR0FDcEUsQ0FDRDtNQUNEO0lBQ0Q7QUFDQSxRQUFJWCxTQUFTYyxnQkFBZ0JkLFNBQVNjLGFBQWE5N0IsU0FBUyxHQUFHO0FBQzlEK2hCLFVBQUk3YyxLQUFLZ0IsWUFBWSxlQUFlLElBQUkrd0IsY0FBYyxJQUFJcmUsS0FBS29pQixTQUFTYyxhQUFhLENBQUMsRUFBRTVrQixTQUFTLENBQUMsQ0FBQztJQUNwRztBQUNBLFFBQUk4akIsU0FBU2UsUUFBUTtBQUNwQmhhLFVBQUk3YyxLQUFLZ0IsWUFBWSxTQUFTLENBQUM7QUFDL0IsZUFBUzBWLElBQUksR0FBR0EsSUFBSW9mLFNBQVNlLE9BQU8vN0IsUUFBUTRiLEtBQUs7QUFDaEQsWUFBSW9nQixRQUFRaEIsU0FBU2UsT0FBT25nQixDQUFDLEVBQUVxZ0IsZUFBZWpCLFNBQVNlLE9BQU9uZ0IsQ0FBQyxFQUFFc2dCLFdBQVcsVUFBVTtBQUN0RkYsZ0JBQVE3UixNQUFNRCxRQUFROFEsU0FBU2UsT0FBT25nQixDQUFDLEVBQUV1Z0IsWUFBWSxJQUFBLEdBQUExOUIsT0FBT3U5QixPQUFLLElBQUEsSUFBQSxPQUFBdjlCLE9BQWN1OUIsTUFBTWw0QixZQUFZLEdBQUMsR0FBQTtBQUNsR2llLFlBQUk3YyxLQUFBLE1BQUF6RyxPQUFXeUgsWUFBWTgxQixLQUFLLEdBQUMsTUFBQSxDQUFNO01BQ3hDO0lBQ0Q7QUFHQSxhQUFTamdDLElBQUksR0FBR0EsSUFBSWdtQixJQUFJL2hCLFNBQVMsR0FBR2pFLEtBQUs7QUFDeEMsVUFBSWdtQixJQUFJaG1CLENBQUMsRUFBRWlFLFNBQVMsS0FBSytoQixJQUFJaG1CLENBQUMsRUFBRXVQLE1BQU14TCxLQUFLeUwsSUFBSSxHQUFHd1csSUFBSWhtQixDQUFDLEVBQUVpRSxTQUFTLENBQUMsQ0FBQyxNQUFNLE9BQU87QUFDaEYraEIsWUFBSWhtQixDQUFDLEtBQUtnbUIsSUFBSWhtQixJQUFJLENBQUM7QUFDbkJnbUIsWUFBSXFhLE9BQU9yZ0MsSUFBSSxHQUFHLENBQUM7QUFDbkJBO01BQ0Q7SUFDRDtBQUNBZ21CLFVBQUEsT0FBQXRqQixPQUFhc2pCLElBQUkxWCxLQUFLLElBQUksQ0FBQztBQUMzQixXQUFPMFg7RUFDUjtBQUNBLFFBQU0wUyx5QkFBeUJBLENBQUM3Z0MsU0FBU21WLFVBQVU3RSxXQUFXO0FBQzdELFdBQU9td0Isc0JBQXNCemdDLFNBQVNtVixVQUFVN0UsUUFBUSxJQUFJO0VBQzdEO0FBQ0EsUUFBTW13Qix3QkFBd0JBLENBQUN6Z0MsU0FBU21WLFVBQVVzekIsU0FBUzdGLG1CQUFtQjtBQUM3RSxRQUFJO0FBQ0gsWUFBTWdFLFFBQVEzakIsU0FBUzlOLFNBQVNHLElBQUk7QUFDcEMsVUFBSW96QixRQUFRLENBQUE7QUFDWkEsY0FBUTlGLGlCQUFpQmdFLE1BQU16akIsTUFBTStrQixlQUFlaGxCLFNBQVMwakIsTUFBTXpqQixNQUFNQyxLQUFLLEVBQUVDO0FBQ2hGLFlBQU04SyxNQUFNd1UsaUJBQWlCM2lDLFNBQVMwb0MsT0FBTzlGLGNBQWM7QUFDM0QsYUFBT3pVO0lBQ1IsUUFBUTtBQUNQLGFBQU87SUFDUjtFQUNEO0FBSUEsUUFBTXdhLGlCQUFpQkEsTUFBTTtBQUM1QixRQUFJMW9DLE9BQU8yb0MsWUFBWTtBQUV0QjNvQyxhQUFPd0gsTUFBTzRJLE9BQU07QUFFbkJ3NEIsZ0JBQVFwaEMsSUFBSTRJLENBQUM7TUFDZDtBQUNBcFEsYUFBT20xQixTQUFVL2tCLE9BQU07QUFDdEJ3NEIsZ0JBQVExVCxNQUFBLFlBQUF0cUIsT0FBa0J3RixDQUFDLENBQUU7TUFDOUI7QUFDQTVJLFVBQUkscUJBQXFCO0lBQzFCLE9BQU87QUFDTnhILGFBQU93SCxNQUFNLE1BQU07TUFBQztBQUNwQnhILGFBQU9tMUIsU0FBUyxNQUFNO01BQUM7SUFDeEI7RUFDRDtBQUlBLFFBQU1uaEIsWUFBWUEsQ0FBQzVULE9BQU9pUSxXQUFXO0FBQ3BDLFFBQUksT0FBT2pRLE1BQU04dkIsbUJBQW1CLFlBQVk7QUFDL0MsV0FBS2hRLEdBQUdxQyxPQUFPLGtCQUFrQjtRQUFDQyxLQUFLO1FBQVVDLE1BQU07TUFBTyxDQUFDO0lBQ2hFO0FBRUEsUUFBSSxDQUFDNVgsV0FBVyxhQUFhLEdBQUc7QUFDL0I7SUFDRDtBQUNBLFFBQUksQ0FBQ2lvQixpQkFBaUIxeUIsTUFBTXdQLFNBQVMsQ0FBQyxHQUFHO0FBQ3hDLGFBQU87SUFDUjtBQUNBLFVBQU04RixNQUFNdFYsTUFBTThXLFVBQVU7QUFDNUIsUUFBSWlLLE1BQUEsR0FBQXZXLE9BQVN0QixHQUFHSSxLQUFLMFgsYUFBVywyQ0FBQTtBQUNoQ0QsV0FBQSw4Q0FBQXZXLE9BQXFEQyxXQUFXLHFCQUFxQixDQUFDO0FBQ3RGc1csV0FBQSxXQUFBdlcsT0FBa0I4SyxHQUFHO0FBQ3JCckIsc0JBQWtCaEUsTUFBTTtBQUN4QixVQUFNaVYsV0FBWXhULE9BQU07QUFDdkIrMkIsd0JBQWtCeDRCLE9BQU9HLFVBQVVILFFBQVF5QixDQUFDO0lBQzdDO0FBQ0EsVUFBTXN2QixLQUFLQSxNQUFNO0FBQ2hCOU0seUJBQW1CblQsS0FBS21FLFVBQVVqVixNQUFNO0FBQ3hDLGFBQU87SUFDUjtBQUNBLFFBQUlBLE9BQU9pRixXQUFXLENBQUN6SyxXQUFXLG9CQUFvQixHQUFHO0FBQ3hEdTJCLFNBQUc7SUFDSixPQUFPO0FBQ04vd0IsYUFBT2xDLFFBQVFpekIsSUFBSSxVQUFVLFNBQVMsMkJBQTJCO0lBQ2xFO0VBQ0Q7QUFDQSxRQUFNeUgsb0JBQW9CQSxDQUFDcnpCLElBQUlnekIsU0FBU3R6QixhQUFhO0FBQ3BEMU4sUUFBSSxtQkFBbUI7QUFDdkIsUUFBSXNoQztBQUNKLFFBQUk7QUFDSCxZQUFNdEQsUUFBUXhpQixTQUFTOU4sU0FBU0csSUFBSTtBQUNwQyxZQUFNMHpCLFlBQVk5bEIsU0FBU3VpQixNQUFNdGlCLE1BQU1DLEtBQUs7QUFDNUMsVUFBSTRsQixVQUFVRCxjQUFjLFFBQVc7QUFDdEM7TUFDRDtBQUNBLE9BQUNBLFNBQVMsSUFBSUMsVUFBVUQ7SUFDekIsUUFBUTtBQUNQdGhDLFVBQUksNkJBQTZCO0FBQ2pDO0lBQ0Q7QUFDQSxVQUFNNlQsYUFBYXZRLFNBQVNVLGNBQUEsWUFBQVosT0FBMEI0SyxFQUFFLENBQUU7QUFDMUQsUUFBSSxDQUFDNkYsWUFBWTtBQUNoQjdULFVBQUksMENBQTBDO0FBQzlDO0lBQ0Q7QUFDQTZULGVBQVd1TyxRQUFRL2UsV0FBVyxnQkFBZ0I7QUFDOUN3USxlQUFXcE4sTUFBTWtFLFVBQVU7QUFFM0IsUUFBSTIyQixVQUFVRSxVQUFVO0FBQ3ZCM3RCLGlCQUFXNHRCLE1BQU1ILFVBQVVFO0lBQzVCLFdBQVdGLFVBQVVJLEtBQUt2eEIsUUFBUSxPQUFPLE1BQU0sR0FBRztBQUNqRDBELGlCQUFXNHRCLE1BQU1ILFVBQVUzbkI7QUFDM0IzWixVQUFJLGtEQUFrRDtJQUN2RCxPQUFPO0FBQ05BLFVBQUksb0RBQW9EO0lBQ3pEO0FBQ0EsVUFBTWdGLElBQUkxQixTQUFTVSxjQUFBLGtCQUFBWixPQUFnQzRLLEVBQUUsQ0FBRTtBQUN2RCxRQUFJaEosTUFBTSxNQUFNO0FBQ2YsYUFBTztJQUNSO0FBRUEsWUFBUTNCLFdBQVcsa0JBQWtCLEdBQUE7TUFDcEMsS0FBSztBQUNKLFlBQUl2QixHQUFHYSxRQUFRcEssUUFBUThULFlBQVksTUFBTXZLLEdBQUd3SyxXQUFXO0FBQ3REdEgsWUFBRUMsT0FBT3E4QixVQUFVSztBQUVuQjdPLHdCQUFBLGFBQUExdkIsT0FBMkI0SyxFQUFFLENBQUUsRUFBRTtBQUNqQztRQUNEOztNQUVELEtBQUs7QUFDSmhKLFVBQUU0ekIsVUFBVWdKO0FBQ1o1OEIsVUFBRWlCLFFBQVE0RSxZQUFZLG1CQUFtQjtBQUN6QztNQUNELEtBQUs7QUFDSjdGLFVBQUVDLE9BQU9xOEIsVUFBVTNuQjtBQUNuQjNVLFVBQUVpQixRQUFRNEUsWUFBWSxzQkFBc0I7SUFDOUM7RUFDRDtBQUdBLFFBQU0rMkIsYUFBYSxTQUFTQyxjQUFhO0FBQ3hDLFVBQU12NkIsT0FBTztBQUNiLFFBQUksQ0FBQ0EsTUFBTTtBQUNWLFdBQUtvUixHQUFHcUMsT0FBTyxtQkFBbUI7UUFBQ0MsS0FBSztRQUFVQyxNQUFNO01BQU8sQ0FBQztBQUNoRTtJQUNEO0FBQ0EsVUFBTTZtQixNQUFNeDZCLEtBQUt5NkI7QUFDakIsUUFBSSxDQUFDRCxLQUFLO0FBQ1QsV0FBS3BwQixHQUFHcUMsT0FBTyxrQkFBa0I7UUFBQ0MsS0FBSztRQUFVQyxNQUFNO01BQU8sQ0FBQztBQUMvRDtJQUNEO0FBQ0E2bUIsUUFBSXI3QixNQUFNMmIsUUFBUSxDQUFDMGYsSUFBSXI3QixNQUFNMmIsU0FBUzBmLElBQUlyN0IsTUFBTTJiLFVBQVUsS0FBSyxTQUFTO0VBQ3pFO0FBRUEsUUFBTTdULDRCQUE2Qk4sY0FBYTtBQUkvQyxRQUFJK3pCO0FBQ0osUUFBSWh5QjtBQUVKLFVBQU0wWixJQUFJdVksb0JBQW9CaDBCLFVBQVUscUJBQXFCLEdBQUcsa0JBQWtCO0FBQ2xGLFlBQVErQixRQUFRbE8sR0FBR0MsR0FBR25KLE1BQU1nVixLQUFLOGIsQ0FBQyxPQUFPLE1BQU07QUFFOUMsWUFBTWhwQixJQUFJc1AsTUFBTSxDQUFDLEtBQUtBLE1BQU0sQ0FBQztBQUM3QixVQUFJc2IsaUJBQWlCNXFCLENBQUMsR0FBRztBQUN4QnNoQyxrQkFBVXRoQztBQUNWO01BQ0Q7SUFDRDtBQUNBb0IsT0FBR0MsR0FBR25KLE1BQU1xL0IsWUFBWTtBQUN4QixRQUFJLENBQUMrSixTQUFTO0FBQ2IsYUFBTztJQUNSO0FBQ0EsV0FBQSxHQUFBNStCLE9BQVVzVixHQUFHc0csT0FBT0MsSUFBSSx1QkFBdUIsRUFBRW5kLEdBQUd3SyxTQUFTLEdBQUMsR0FBQSxFQUFBbEosT0FBSTZqQixZQUFZK2EsT0FBTyxDQUFDO0VBQ3ZGO0FBQ0EsUUFBTUMsc0JBQXNCQSxDQUFDenRCLEtBQUswdEIsS0FBS0MsWUFBWUMsUUFBUTtBQUMxRCxVQUFNeHpCLFFBQVE0RixJQUFJNUYsTUFBTXN6QixHQUFHO0FBQzNCLFVBQU1saUIsSUFBSW1pQixhQUFhO0FBQ3ZCLGFBQVM5eEIsSUFBSSxHQUFHQSxJQUFJekIsTUFBTWpLLFFBQVEsRUFBRTBMLEdBQUc7QUFDdEMsVUFBSUEsSUFBSTJQLE1BQU0sS0FBS29pQixJQUFJcDZCLEtBQUs0RyxNQUFNeUIsQ0FBQyxDQUFDLEdBQUc7QUFDdEM7TUFDRDtBQUNBekIsWUFBTXlCLENBQUMsSUFBSTtJQUNaO0FBQ0EsV0FBT3pCLE1BQU1JLEtBQUssRUFBRTtFQUNyQjtBQUtBLFFBQU1xekIsZ0JBQWdCQSxNQUFNO0FBQzNCdmdDLE9BQUc4bUIsY0FBYztBQUNqQjltQixPQUFHc29CLGdCQUFnQjtBQUNuQnRvQixPQUFHd0ssWUFBWTtBQUNmeEssT0FBRzRLLFdBQVc7QUFDZDVLLE9BQUc2SyxlQUFlO0FBQ2xCN0ssT0FBRzJLLGVBQWU7QUFDbEIzSyxPQUFHMk0sZUFBZTtFQUNuQjtBQUNBLFFBQU02ekIsWUFBWUEsTUFBTTtBQUN2QixVQUFNOWlCLElBQUk7QUFDVixVQUFNK2lCLElBQUk7QUFDVixVQUFNQyxhQUFhO01BQ2xCQyxJQUFJLENBQUNGLEdBQUcsT0FBTztNQUNmRyxJQUFJLENBQUNsakIsR0FBRyxrQkFBa0I7TUFDMUJtakIsSUFBSSxDQUFDbmpCLEdBQUcsZ0JBQWdCLEtBQUs7TUFDN0JvakIsSUFBSSxDQUFDcGpCLEdBQUcsY0FBYyxjQUFjLFlBQVk7TUFDaERxakIsSUFBSSxDQUFDTixHQUFHLGNBQWM7TUFDdEJPLElBQUksQ0FBQ1AsR0FBRyxXQUFXO01BQ25CUSxJQUFJLENBQUN2akIsR0FBRyxjQUFjO01BQ3RCd2pCLElBQUksQ0FBQ1QsR0FBRyxlQUFlO01BQ3ZCbDZCLElBQUksQ0FBQ2s2QixHQUFHLGVBQWU7TUFDdkJVLElBQUksQ0FBQ1YsR0FBRyxjQUFjLFlBQVk7TUFDbENXLElBQUksQ0FBQ1gsR0FBRyxhQUFhO01BQ3JCWSxJQUFJLENBQUMzakIsR0FBRyxPQUFPO01BQ2Y0akIsSUFBSSxDQUFDNWpCLEdBQUcsYUFBYTtNQUNyQjZqQixJQUFJLENBQUM3akIsR0FBRyxlQUFlLGtCQUFrQjtNQUN6QzhqQixJQUFJLENBQUNmLEdBQUcsT0FBTztNQUNmZ0IsSUFBSSxDQUFDaEIsR0FBRyxhQUFhO01BQ3JCaUIsSUFBSSxDQUFDaGtCLEdBQUcsWUFBWSxVQUFVO01BQzlCaWtCLElBQUksQ0FBQ2xCLEdBQUcsVUFBVSxRQUFRO01BQzFCbUIsSUFBSSxDQUFDbkIsR0FBRyxJQUFJO01BQ1pvQixJQUFJLENBQUNua0IsR0FBRyxpQkFBaUIsTUFBTTtNQUMvQm9rQixLQUFLLENBQUNwa0IsR0FBRyxjQUFjO01BQ3ZCLFVBQVUsQ0FBQytpQixHQUFHLGtCQUFrQixnQkFBZ0I7TUFDaERzQixJQUFJLENBQUN0QixHQUFHLGdCQUFnQjtNQUN4QnVCLElBQUksQ0FBQ3RrQixHQUFHLFdBQVc7TUFDbkJ1a0IsSUFBSSxDQUFDeEIsR0FBRyxTQUFTLGNBQWMsS0FBSztNQUNwQ3lCLElBQUksQ0FBQ3pCLEdBQUcsT0FBTztNQUNmMEIsSUFBSSxDQUFDMUIsR0FBRyxtQkFBbUIsVUFBVTtNQUNyQzJCLElBQUksQ0FBQzFrQixHQUFHLFdBQVc7TUFDbkIya0IsSUFBSSxDQUFDM2tCLEdBQUcsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVc7TUFDcEY0a0IsSUFBSSxDQUFDN0IsR0FBRyxXQUFXLG1CQUFtQixVQUFVO01BQ2hEOEIsSUFBSSxDQUFDOUIsR0FBRyxtQkFBbUIsVUFBVTtNQUNyQytCLElBQUksQ0FBQzlrQixHQUFHLEtBQUs7TUFDYitrQixJQUFJLENBQUNoQyxHQUFHLGFBQWE7TUFDckJpQyxJQUFJLENBQUNqQyxHQUFHLEtBQUs7O0lBQ2Q7QUFDQSxVQUFNa0MsWUFBWWpDLFdBQVcxZ0MsR0FBR0ksS0FBS3FjLElBQUksS0FBSyxDQUFDaUIsR0FBRytpQixDQUFDO0FBRW5EemdDLE9BQUdDLEdBQUc0TCxXQUFXLElBQUlrQyxPQUFBLFlBQUF6TSxPQUNScWhDLFVBQVV6MUIsS0FBSyxHQUFHLEdBQUMsaURBQUEsR0FDL0IsR0FDRDtFQUNEO0FBQ0EsUUFBTTAxQixlQUFlQSxNQUFNO0FBQzFCLFFBQUk1aUMsR0FBR0ksS0FBS3lpQyxXQUFXO0FBR3RCN2lDLFNBQUdJLEtBQUtzYyxZQUNQO0FBQ0QxYyxTQUFHQyxHQUFHeWMsWUFBWSxJQUFJM08sT0FBQSxJQUFBek0sT0FBV3RCLEdBQUdJLEtBQUtzYyxXQUFTLEdBQUEsQ0FBRztJQUN0RCxPQUFPO0FBQ04xYyxTQUFHSSxLQUFLc2MsWUFBWTtBQUNwQjFjLFNBQUdDLEdBQUd5YyxZQUFZO0lBQ25CO0VBQ0Q7QUFFQSxRQUFNb21CLE9BQVF2NEIsaUJBQWdCO0FBQzdCLFVBQU13NEIseUJBQXlCLENBQUE7QUFDL0IsYUFBQUMsTUFBQSxHQUFBQyxtQkFBb0Qxd0IsT0FBT3VpQixRQUFRbGUsR0FBR3NHLE9BQU9DLElBQUksZ0JBQWdCLENBQUMsR0FBQTZsQixNQUFBQyxpQkFBQXBnQyxRQUFBbWdDLE9BQUc7QUFBckcsWUFBVyxDQUFDRSx1QkFBdUJDLFlBQVksSUFBQUYsaUJBQUFELEdBQUE7QUFDOUMsVUFBSUcsaUJBQWlCNTRCLGFBQWE7QUFDakM7TUFDRDtBQUNBLFlBQU13cUIsdUJBQXVCNVAsWUFBWStkLHFCQUFxQjtBQUM5REgsNkJBQXVCaDdCLEtBQ3RCNk8sR0FBR0MsS0FBS3lWLGFBQWF5SSxvQkFBb0IsRUFBRWpvQixNQUFNLEdBQUcsRUFBRUksS0FBSyxNQUFNLEdBQ2pFMEosR0FBR0MsS0FBS3lWLGFBQWEzRCxVQUFVb00sb0JBQW9CLENBQUMsQ0FDckQ7SUFDRDtBQUNBLFdBQUEsTUFBQXp6QixPQUFheWhDLHVCQUF1QjcxQixLQUFLLEdBQUcsR0FBQyxHQUFBO0VBQzlDO0FBQ0EsUUFBTWsyQixZQUFZQSxNQUFNO0FBQ3ZCLFdBQU9OLEtBQUs5aUMsR0FBR3dLLFNBQVM7RUFDekI7QUFHQSxRQUFNNjRCLHNCQUFzQkEsTUFBTTtBQUVqQyxRQUFJOXJCO0FBQ0osUUFBSTtBQUNIQSxnQkFBVS9WLFNBQVNDLFNBQVNDO0lBQzdCLFFBQVE7QUFDUDtJQUNEO0FBRUEsUUFBSUYsU0FBUzhoQyxXQUFXO0FBQ3ZCLGFBQU85aEMsU0FBUzhoQyxVQUFVQyxZQUFZLEVBQUUzVjtJQUN6QztBQUVBLFVBQU00VixXQUFXanNCLFFBQVFrc0I7QUFDekIsVUFBTUMsU0FBU25zQixRQUFRb3NCO0FBQ3ZCLFdBQU9wc0IsUUFBUWxDLE1BQU1nTCxVQUFVbWpCLFVBQVVFLE1BQU07RUFDaEQ7QUFDQSxRQUFNOWhDLG1CQUFtQkEsTUFBTTtBQUk5QixVQUFNZ2lDLE1BQU1QLG9CQUFvQjtBQUNoQyxVQUFNcm9CLE9BQU80b0IsSUFBSXYxQixRQUFRLElBQUk7QUFDN0IsVUFBTXcxQixPQUFPRCxJQUFJdjFCLFFBQVEsR0FBRztBQUM1QixVQUFNK1MsUUFBUXdpQixJQUFJdjFCLFFBQVEsSUFBSTtBQUM5QixRQUFJMk0sU0FBUyxNQUFPNm9CLFNBQVMsTUFBTXppQixVQUFVLElBQUs7QUFDakQ7SUFDRDtBQUNBLFFBQUt5aUIsU0FBUyxNQUFNN29CLE9BQU82b0IsUUFBVXppQixVQUFVLE1BQU1wRyxPQUFPb0csT0FBUTtBQUNuRTtJQUNEO0FBQ0EsVUFBTTNxQixVQUFVLElBQUlxUCxNQUFNODlCLElBQUl2akIsVUFBVXJGLE9BQU8sR0FBRzZvQixPQUFPLElBQUl6aUIsUUFBUXlpQixJQUFJLENBQUM7QUFDMUUsUUFBSXRpQyxXQUFXLHNCQUFzQixNQUFNLGNBQWM7QUFDeEQsYUFBT3VpQyx5QkFBeUJGLEtBQUtudEMsT0FBTztJQUM3QztBQUNBLFFBQUkycUIsUUFBUSxLQUFLd2lCLElBQUl6MUIsTUFBTXhMLEtBQUt5TCxJQUFJLEdBQUdnVCxRQUFRLENBQUMsQ0FBQyxFQUFFNEgsU0FBUyxJQUFJLEdBQUc7QUFDbEU7SUFDRDtBQUNBLFVBQU05bEIsSUFBSTFCLFNBQVNpSCxjQUFjLEdBQUc7QUFDcEN2RixNQUFFQyxPQUFPbkQsR0FBR0ksS0FBSzBvQixZQUFZcnlCLFFBQVFtWCxVQUFVO0FBQy9DbEksdUJBQW1CeEMsQ0FBQztBQUNwQixRQUFJQSxFQUFFc0UsVUFBVTtBQUNmdEUsUUFBRXNFLFNBQVMzQyxRQUNWLE1BQU07QUFDTDB0QiwwQkFBa0JydkIsRUFBRXNFLFFBQVE7TUFDN0IsR0FDQSxVQUNBLE9BQ0Q7SUFDRDtFQUNEO0FBQ0EsUUFBTXM4QiwyQkFBMkJBLENBQUNweEIsS0FBS2pjLFlBQVk7QUFDbEQsUUFBSTRpQixNQUFNN1gsU0FBU1UsY0FBYyxtQkFBbUI7QUFDcEQsUUFBSSxDQUFDbVgsS0FBSztBQUNUQSxZQUFNN1gsU0FBU2lILGNBQWMsS0FBSztBQUNsQzRRLFVBQUluTixLQUFLO0FBQ1QsVUFBSTtBQUNILGNBQU13SyxNQUFNbFYsU0FBU0MsU0FBU0M7QUFDOUJnVixZQUFJOVAsV0FBVzJTLGFBQWFGLEtBQUszQyxHQUFHO01BQ3JDLFFBQVE7QUFDUDtNQUNEO0lBQ0Q7QUFDQSxVQUFNdEosSUFBSUMsaUJBQWlCcUYsS0FBS2pjLFNBQVNtUixZQUFZcEcsU0FBU2lILGNBQWMsR0FBRyxHQUFHaFMsT0FBTyxDQUFDO0FBQzFGMlcsTUFBRXlvQixZQUFZO0FBQ2QsUUFBSXpvQixFQUFFa1UsTUFBTTtBQUNYakksVUFBSXBTLFlBQVltRyxFQUFFa1U7SUFDbkI7QUFDQWpJLFFBQUl2WCwwQkFBMEI7QUFDOUJrdkIsa0JBQWMsa0JBQWtCLEVBQUU7RUFDbkM7RUFrQkEsTUFBTStTLGFBQWE7SUFDbEJuMUIsY0FBYztBQU1iLFdBQUtvMUIsWUFBWTtBQU1qQixXQUFLcmpDLFFBQVE7QUFNYixXQUFLc2pDLFNBQVM7QUFJZCxXQUFLOVIsUUFBUTtBQU9iLFdBQUsrUixRQUFRLENBQUE7SUFDZDs7Ozs7Ozs7SUFRQXIvQixRQUFRMFEsR0FBRztBQUNWLFdBQUsydUIsTUFBTW44QixLQUFLd04sQ0FBQztJQUNsQjs7Ozs7Ozs7SUFRQTR1QixXQUFXO0FBQ1YsVUFBSSxDQUFDLEtBQUtELFNBQVMsS0FBS0EsTUFBTXJoQyxXQUFXLEdBQUc7QUFDM0M7TUFDRDtBQUVBLFVBQUkxQixTQUFTO0FBQ2IsWUFBTWlqQyxZQUFZLENBQUM7QUFHbkIsWUFBTTtRQUFDdDlCO01BQUMsSUFBSTtBQUNaLFlBQU07UUFBQ3lKO01BQUMsSUFBSTtBQUNaLFlBQU02VixNQUFNLEtBQUs4ZCxNQUFNcmhDO0FBQ3ZCLGVBQVMwTCxJQUFJLEdBQUdBLElBQUk2WCxLQUFLLEVBQUU3WCxHQUFHO0FBRTdCLFlBQUksS0FBSzIxQixNQUFNMzFCLENBQUMsRUFBRXpILEdBQUd5SixDQUFDLE1BQU0sTUFBTTtBQUNqQ3BQLG1CQUFTO0FBQ1RpakMsb0JBQVU3MUIsQ0FBQyxJQUFJO1FBQ2hCO01BQ0Q7QUFDQSxVQUFJcE4sUUFBUTtBQUNYLGFBQUtrakMsWUFBWUQsU0FBUztNQUMzQjtJQUNEOzs7Ozs7OztJQVFBQyxZQUFZRCxXQUFXO0FBQ3RCLFlBQU1FLFdBQVcsQ0FBQTtBQUNqQixZQUFNbGUsTUFBTSxLQUFLOGQsTUFBTXJoQztBQUN2QixlQUFTMEwsSUFBSSxHQUFHQSxJQUFJNlgsS0FBSyxFQUFFN1gsR0FBRztBQUM3QixZQUFJLENBQUM2MUIsVUFBVTcxQixDQUFDLEdBQUc7QUFDbEIrMUIsbUJBQVN2OEIsS0FBSyxLQUFLbThCLE1BQU0zMUIsQ0FBQyxDQUFDO1FBQzVCO01BQ0Q7QUFDQSxXQUFLMjFCLFFBQVFJO0lBQ2Q7Ozs7Ozs7OztJQVNBQyxNQUFNdjFCLEdBQUc7QUFFUkEsWUFBQUEsSUFBTXRZLE9BQU8yTztBQUNiLFVBQUl5QjtBQUNKLFVBQUl5SjtBQUNKLFVBQUl2QixHQUFHO0FBQ04sWUFBSUEsRUFBRXcxQixPQUFPO0FBQ1oxOUIsY0FBSWtJLEVBQUV3MUI7QUFDTmowQixjQUFJdkIsRUFBRXkxQjtRQUNQLFdBQVd6MUIsRUFBRTJCLFlBQVksUUFBVztBQUNuQztRQUNELE9BQU87QUFDTixjQUFJVDtBQUNKLGNBQUlDO0FBQ0osZ0JBQU11MEIsU0FBU2xqQyxTQUFTbWpDO0FBQ3hCLGNBQUlELFFBQVE7QUFDWHgwQixtQkFBT3cwQixPQUFPRTtVQUNmO0FBQ0ExMEIsbUJBQUFBLE9BQVMxTyxTQUFTVSxjQUFjLE1BQU0sRUFBRTBpQyxjQUFjcGpDLFNBQVNvakMsY0FBYztBQUM3RSxjQUFJRixRQUFRO0FBQ1h2MEIsa0JBQU11MEIsT0FBT0c7VUFDZDtBQUNBMTBCLGtCQUFBQSxNQUFRM08sU0FBU1UsY0FBYyxNQUFNLEVBQUUyaUMsYUFBYXJqQyxTQUFTcWpDLGFBQWE7QUFDMUUvOUIsY0FBSWtJLEVBQUUyQixVQUFVVDtBQUNoQkssY0FBSXZCLEVBQUU2QixVQUFVVjtRQUNqQjtBQUNBLGFBQUsyMEIsWUFBWWgrQixHQUFHeUosQ0FBQztNQUN0QjtJQUNEOzs7Ozs7Ozs7SUFTQXUwQixZQUFZaCtCLEdBQUd5SixHQUFHO0FBQ2pCLFdBQUt6SixJQUFJQTtBQUNULFdBQUt5SixJQUFJQTtBQUNULFVBQUksS0FBSzRoQixTQUFTLEtBQUsrUixNQUFNcmhDLFdBQVcsR0FBRztBQUMxQyxhQUFLc3ZCLFFBQVE7QUFDYjtNQUNEO0FBQ0EsVUFBSSxPQUFPLEtBQUs0UyxlQUFlLFVBQVU7QUFDeEMsYUFBS0EsYUFBYTtBQUNsQixhQUFLQyxhQUFhO01BQ25CO0FBQ0EsVUFBSWo3QixTQUFRLEtBQUtnN0IsYUFBYWorQixNQUFNLEtBQUtrK0IsYUFBYXowQjtBQUN0RHhHLGNBQU9BLFNBQVEsSUFBSUEsUUFBTyxDQUFDQTtBQUMzQixVQUFJQSxRQUFPLEdBQUc7QUFDYixhQUFLZzdCLGFBQWFqK0I7QUFDbEIsYUFBS2srQixhQUFhejBCO0FBQ2xCLFlBQUksS0FBSzRoQixPQUFPO0FBQ2YsZUFBS0EsUUFBUTtRQUNkLE9BQU87QUFDTixlQUFLZ1MsU0FBUztRQUNmO01BQ0Q7SUFDRDs7Ozs7O0lBTUFjLFNBQVM7QUFDUixVQUFJLEtBQUtoQixRQUFRO0FBQ2hCO01BQ0Q7QUFDQSxXQUFLQSxTQUFTO0FBR2QsV0FBS2lCLGdCQUFnQjFqQyxTQUFTdVA7QUFHOUIsWUFBTXZMLE9BQU87QUFDYmhFLGVBQVN1UCxjQUFlL0IsT0FBTTtBQUM3QnhKLGFBQUsrK0IsTUFBTXYxQixDQUFDO01BQ2I7QUFDQSxVQUFJLEtBQUtnMUIsV0FBVztBQUNuQixhQUFLcmpDLFFBQVEySCxZQUFZLE1BQU07QUFFOUI5QyxlQUFLMitCLFNBQVM7UUFDZixHQUFHLEtBQUtILFNBQVM7TUFDbEI7SUFDRDs7OztJQUlBdnJDLFVBQVU7QUFDVCxVQUFJLENBQUMsS0FBS3dyQyxRQUFRO0FBQ2pCO01BQ0Q7QUFDQSxVQUFJLE9BQU8sS0FBS2lCLGtCQUFrQixZQUFZO0FBQzdDMWpDLGlCQUFTdVAsY0FBYyxLQUFLbTBCO01BQzdCLE9BQU87QUFDTixlQUFPMWpDLFNBQVN1UDtNQUNqQjtBQUNBLFVBQUksS0FBS3BRLE9BQU87QUFDZnlILHNCQUFjLEtBQUt6SCxLQUFLO01BQ3pCO0FBQ0EsV0FBS3NqQyxTQUFTO0lBQ2Y7RUFDRDtFQVNBLE1BQU16NkIsU0FBUztJQUNkb0YsY0FBYztBQVFiLFdBQUt1MkIsTUFBTTM3QixTQUFTMjdCO0FBT3BCLFdBQUtuNUIsVUFBVTtBQVFmLFdBQUtvNUIsU0FBUztBQVNkLFdBQUtsQixRQUFRO1FBQ1ptQixRQUFRLENBQUE7UUFDUkMsUUFBUSxDQUFBO1FBQ1JDLE1BQU0sQ0FBQTtNQUNQO0FBTUEsV0FBS0MsVUFBVSxDQUFDO0FBT2hCLFdBQUtDLFlBQVksQ0FBQTtBQU1qQixXQUFLejlCLFVBQVU7QUFNZixXQUFLeUIsT0FBTztBQU1aLFdBQUtpOEIsY0FBYztBQU9uQixXQUFLcGxCLFFBQVE7QUFPYixXQUFLcWxCLFNBQVM7QUFNZCxXQUFLamhDLFVBQVU7QUFDZixXQUFLa2hDLGNBQWM7SUFJcEI7Ozs7OztJQU1BbitCLFlBQVk7QUFDWCxhQUFPLEtBQUt1RTtJQUNiOzs7Ozs7Ozs7SUFTQTY1QixXQUFXLytCLEdBQUd5SixHQUFHdTFCLFlBQVk7QUFDNUI1bkMsVUFBQSxjQUFBb0QsT0FBa0J3RixHQUFDLEdBQUEsRUFBQXhGLE9BQUlpUCxHQUFDLEdBQUEsRUFBQWpQLE9BQUl3a0MsWUFBVSxHQUFBLENBQUc7QUFDekMsVUFBSWgvQixNQUFNLFVBQWFBLE1BQU0sTUFBTTtBQUNsQyxhQUFLb0osT0FBT3BKO01BQ2I7QUFDQSxVQUFJeUosTUFBTSxVQUFhQSxNQUFNLE1BQU07QUFDbEMsYUFBS0osTUFBTUk7TUFDWjtBQUNBLFVBQUksS0FBS0wsU0FBUyxVQUFhLEtBQUtDLFFBQVEsUUFBVztBQUN0RCxhQUFLekwsUUFBUUMsTUFBTXVMLE9BQUEsR0FBQTVPLE9BQVUsS0FBSzRPLE1BQUksSUFBQTtBQUN0QyxhQUFLeEwsUUFBUUMsTUFBTXdMLE1BQUEsR0FBQTdPLE9BQVMsS0FBSzZPLEtBQUcsSUFBQTtNQUNyQztBQUNBLFVBQUksQ0FBQzIxQixZQUFZO0FBQ2hCLGFBQUsvVCx3QkFBd0I7TUFDOUI7SUFDRDs7Ozs7OztJQU9BQSwwQkFBMEI7QUFDekIsVUFBSSxDQUFDLEtBQUsyVCxlQUFlLEtBQUtLLFNBQVM7QUFDdEM7TUFDRDtBQUNBLFdBQUtDLGlCQUFpQjtBQUN0QixZQUFNbC9CLElBQUksS0FBS29KO0FBQ2YsWUFBTXliLElBQUksS0FBS3JMO0FBQ2YsWUFBTTJsQixTQUFTemtDLFNBQVNVLGNBQWMsTUFBTSxFQUFFZ2tDO0FBSzlDLFVBQ0NwL0IsSUFBSTZrQixLQUFLc2EsVUFDUm4vQixJQUFJLEtBQ0osS0FBS2xDLFlBQ0wsS0FBSzBiLFFBQVEsS0FBSzFiLFlBQ2xCLEtBQUsrZ0MsU0FBUyxLQUFLcmxCLFNBQ25CeFosSUFBSW0vQixTQUFTLEtBQUtyaEMsVUFDbEI7QUFJRCxhQUFLRixRQUFRQyxNQUFNdUwsT0FBTztBQUMxQixhQUFLeEwsUUFBUUMsTUFBTTJiLFFBQUEsR0FBQWhmLE9BQVcsS0FBS3NELFVBQVEsSUFBQTtBQUMzQyxjQUFNdWhDLGVBQWVwMkIsT0FBT0UsU0FBUyxLQUFLdkwsUUFBUW90QixhQUFhLEVBQUU7QUFDakUsWUFBSXNVLFVBQVVILFNBQVNFLGVBQWU7QUFDdEMsWUFBSUMsVUFBVSxHQUFHO0FBQ2hCQSxvQkFBVTtBQUNWLGVBQUtMLFVBQVU7UUFDaEI7QUFDQTduQyxZQUFBLHVDQUFBb0QsT0FDd0M4a0MsU0FBTyxHQUFBLEVBQUE5a0MsT0FBSSxLQUFLNk8sS0FBRyxrQkFBQSxFQUFBN08sT0FDeEM2a0MsY0FBWSxnQkFBQSxFQUFBN2tDLE9BQWlCMmtDLE1BQU0sQ0FDdEQ7QUFDQSxhQUFLSixXQUFXTyxTQUFTLE1BQU0sSUFBSTtNQUNwQztJQUNEOzs7Ozs7O0lBT0FDLFFBQVE7QUFDUCxXQUFLM2hDLFFBQVFDLE1BQU0yaEMsU0FBUzk4QixTQUFTKzhCLFVBQVU7QUFDL0MsUUFBRS84QixTQUFTKzhCO0lBQ1o7Ozs7O0lBS0FDLE9BQU87QUFFTixVQUFJLEtBQUtwQixRQUFRO0FBQ2hCO01BQ0Q7QUFFQSxXQUFLUyxXQUFXO0FBQ2hCLFdBQUtRLE1BQU07QUFDWCxXQUFLZixPQUFPO0lBQ2I7Ozs7Ozs7O0lBUUFwOUIsaUJBQWlCdStCLE1BQU07QUFDdEJ2b0MsVUFBQSwwQkFBQW9ELE9BQThCbWxDLElBQUksQ0FBRTtBQUNwQyxVQUFJLEtBQUt6NkIsU0FBUztBQUNqQjtNQUNEO0FBQ0EsV0FBS281QixTQUFTO0FBR2QsV0FBS3NCLFdBQVc7QUFDaEIsV0FBS0MsV0FBVztBQUNoQixZQUFNQyxhQUFhQSxNQUFNO0FBQ3hCMW9DLFlBQUksbUJBQW1CO0FBQ3ZCLGNBQU0yb0MsUUFBUXI5QixTQUFTeW9CLFFBQVFuckI7QUFDL0IsY0FBTWdnQyxRQUFRdDlCLFNBQVN5b0IsUUFBUTFoQjtBQUMvQixjQUFNdzJCLEtBQUt2aEMsS0FBS2toQyxXQUFXRztBQUMzQixjQUFNRyxLQUFLeGhDLEtBQUttaEMsV0FBV0c7QUFDM0IsY0FBTUcsUUFBUTtBQUVkLFlBQUlGLEtBQUtBLE1BQU1FLFNBQVNELEtBQUtBLE1BQU1DLE9BQU87QUFDekMvb0MsY0FBSSxpQkFBaUI7QUFDckJrSyx3QkFBYzVDLEtBQUswaEMsbUJBQW1CO0FBQ3RDMWhDLGVBQUtxZ0MsV0FBV2dCLFFBQVEsR0FBR0MsUUFBUSxDQUFDO0FBQ3BDdGhDLGVBQUtnaEMsS0FBSztBQUNWaGhDLGVBQUt1c0Isd0JBQXdCO0FBQzdCO1FBQ0Q7QUFDQXZzQixhQUFLa2hDLFdBQVdHO0FBQ2hCcmhDLGFBQUttaEMsV0FBV0c7TUFDakI7QUFDQSxZQUFNdGhDLE9BQU87QUFDYixXQUFLMGhDLHNCQUFzQjUrQixZQUFZcytCLFlBQVlILE9BQU8sQ0FBQztJQUM1RDs7Ozs7O0lBTUFoNEIsU0FBUztBQUNSdlEsVUFBSSxlQUFlO0FBRW5CLFdBQUtrbkMsU0FBUztBQUNkLFVBQUksS0FBSzhCLHFCQUFxQjtBQUM3QmhwQyxZQUFJLDhCQUE4QjtBQUNsQ2tLLHNCQUFjLEtBQUs4K0IsbUJBQW1CO01BQ3ZDO0FBQ0EsV0FBSzNCLEtBQUs7SUFDWDs7Ozs7Ozs7SUFRQXBCLFNBQVM1K0IsS0FBSzByQixNQUFNO0FBQ25CLFVBQUksQ0FBQyxLQUFLaVQsTUFBTTMrQixHQUFHLEdBQUc7QUFDckI7TUFDRDtBQUNBLFlBQU00aEMsV0FBVyxLQUFLakQsTUFBTTMrQixHQUFHO0FBQy9CLFlBQU02Z0IsTUFBTStnQixTQUFTdGtDO0FBQ3JCLGVBQVMwTCxJQUFJLEdBQUdBLElBQUk2WCxLQUFLLEVBQUU3WCxHQUFHO0FBQzdCLFlBQUk0NEIsU0FBUzU0QixDQUFDLEtBQUs0NEIsU0FBUzU0QixDQUFDLEVBQUUwaUIsU0FBU0EsUUFBUW1XLFFBQVFDLE1BQU1GLFNBQVM1NEIsQ0FBQyxFQUFFKzRCLE1BQU0sTUFBTSxDQUFBLENBQUUsR0FBRztBQUUxRixjQUFJSCxTQUFTNTRCLENBQUMsRUFBRWc1QixRQUFRO0FBQ3ZCLG1CQUFPLEtBQUsvQixRQUFRMkIsU0FBUzU0QixDQUFDLEVBQUVnNUIsTUFBTTtVQUN2QztBQUNBSixtQkFBUzU0QixDQUFDLElBQUk7UUFDZjtNQUNEO0lBQ0Q7Ozs7Ozs7Ozs7O0lBV0ExSixRQUFReWlDLE1BQU0vaEMsS0FBSzByQixNQUFNa1UsS0FBSztBQUM3QmxVLGVBQUFBLE9BQVM7QUFDVCxVQUFJLENBQUMsS0FBS2lULE1BQU0zK0IsR0FBRyxHQUFHO0FBQ3JCO01BQ0Q7QUFFQSxVQUFJZ2lDO0FBQ0osVUFBSXBDLEtBQUs7QUFDUm9DLGlCQUFTLENBQUNoaUMsS0FBSzByQixNQUFNa1UsR0FBRyxFQUFFajRCLEtBQUssR0FBRztBQUNsQyxZQUFJLEtBQUtzNEIsUUFBUStCLE1BQU0sR0FBRztBQUN6QjtRQUNEO0FBQ0EsYUFBSy9CLFFBQVErQixNQUFNLElBQUk7TUFDeEI7QUFDQSxXQUFLckQsTUFBTTMrQixHQUFHLEVBQUV3QyxLQUFLO1FBQ3BCdS9CO1FBQ0FyVztRQUNBc1c7TUFDRCxDQUFDO0lBQ0Y7Ozs7Ozs7SUFPQTNCLGdCQUFnQjtBQUFBLFVBQUE0QjtBQUNmLFVBQUksS0FBSzlpQyxTQUFTO0FBQ2pCO01BQ0Q7QUFDQSxXQUFLeS9CLFNBQVMsVUFBVSxRQUFRO0FBQ2hDLFlBQU16L0IsVUFBVWxELFNBQVNpSCxjQUFjLEtBQUs7QUFDNUMsWUFBTWpELE9BQU87QUFDYmQsY0FBUW95QixVQUFXOW5CLE9BQU07QUFDeEJ4SixhQUFLaWlDLGdCQUFnQno0QixDQUFDO01BQ3ZCO0FBQ0F0SyxjQUFRZ0UsYUFBQTgrQixrQkFBWSxLQUFLOStCLGVBQUEsUUFBQTgrQixvQkFBQSxTQUFBQSxrQkFBYTtBQUN0QzlpQyxjQUFRd0gsS0FBS3hILFFBQVFnRSxZQUFZLEtBQUt5OEI7QUFDdEN6Z0MsY0FBUUMsTUFBTStpQyxXQUFXO0FBQ3pCaGpDLGNBQVFDLE1BQU1nakMsV0FBVztBQUN6QmpqQyxjQUFRQyxNQUFNa0UsVUFBVTtBQUN4Qm5FLGNBQVFnRSxZQUFZO0FBRXBCaEUsY0FBUThDLFdBQVc7QUFDbkIsV0FBSzlDLFVBQVVBO0FBQ2ZsRCxlQUFTVSxjQUFjLE1BQU0sRUFBRTBHLE9BQU9sRSxPQUFPO0FBQzdDLFdBQUt5L0IsU0FBUyxVQUFVLE9BQU87SUFDaEM7Ozs7OztJQU1Bc0Qsa0JBQWtCO0FBQ2pCLFdBQUtwQixNQUFNO0lBQ1o7Ozs7Ozs7SUFPQWg5QixjQUFjdStCLFlBQVk7QUFDekIsVUFBSSxDQUFDLEtBQUtsakMsU0FBUztBQUNsQixhQUFLa2hDLGNBQWM7TUFDcEI7QUFDQSxZQUFNMzBCLE9BQU8sSUFBSXRDLEtBQUs7QUFDdEIsVUFBSSxDQUFDaTVCLFlBQVk7QUFDaEIzMkIsYUFBS3BDLGlCQUFrQkcsT0FBTTtBQUM1QixjQUFJO0FBQ0gsZ0JBQUksQ0FBQ0EsRUFBRTY0QixVQUFVO0FBQ2hCLHFCQUFPO1lBQ1I7VUFDRCxRQUFRO0FBQ1AsbUJBQU87VUFDUjtBQUNBLGlCQUFPO1FBQ1I7TUFDRDtBQUNBLFVBQUl6K0I7QUFDSixVQUFJdytCLFlBQVk7QUFDZngrQixxQkFBYTVILFNBQVNnRixlQUFBLEdBQUFsRixPQUFrQnNtQyxVQUFVLENBQUU7TUFDckQ7QUFDQXgrQixxQkFBQUEsYUFBZSxLQUFLMUU7QUFDcEIsWUFBTWMsT0FBTztBQUNieUwsV0FBS25DLFVBQVUsQ0FBQ2hJLEdBQUd5SixNQUFNO0FBQ3hCL0csaUJBQVN5b0IsUUFBUUUsUUFBUTtBQUN6QjNzQixhQUFLcWdDLFdBQVcvK0IsR0FBR3lKLENBQUM7TUFDckI7QUFDQVUsV0FBSzVCLEtBQUtqRyxZQUFZLEtBQUsxRSxPQUFPO0lBQ25DOzs7Ozs7OztJQVFBNmdDLE9BQU87QUFDTixXQUFLcEIsU0FBUyxRQUFRLFFBQVE7QUFDOUIsV0FBSzJELGVBQWU7QUFDcEIsVUFBSSxLQUFLOTdCLFlBQVksVUFBYSxLQUFLQSxTQUFTO0FBQy9DLGFBQUt0SCxRQUFRQyxNQUFNa0UsVUFBVTtBQUM3QixhQUFLbUQsVUFBVTtNQUNoQjtBQUNBLFdBQUttNEIsU0FBUyxRQUFRLE9BQU87SUFDOUI7Ozs7Ozs7SUFPQW1CLFNBQVM7QUFDUixXQUFLbkIsU0FBUyxVQUFVLFFBQVE7QUFDaEMsVUFBSSxLQUFLbjRCLFlBQVksVUFBYSxDQUFDLEtBQUtBLFNBQVM7QUFDaEQsYUFBS3RILFFBQVFDLE1BQU1rRSxVQUFVO0FBQzdCLGFBQUttRCxVQUFVO01BQ2hCO0FBQ0EsV0FBS200QixTQUFTLFVBQVUsT0FBTztJQUNoQzs7Ozs7O0lBTUFsN0IsYUFBYXFZLE1BQU07QUFDbEIsV0FBSzVjLFFBQVF1QyxZQUFZcWE7SUFDMUI7Ozs7OztJQU1BMGtCLG1CQUFtQjtBQUNsQixXQUFLMWxCLFFBQVF2USxPQUFPRSxTQUFTLEtBQUt2TCxRQUFRb3RCLGFBQWEsRUFBRTtBQUN6RCxXQUFLNlQsU0FBUzUxQixPQUFPRSxTQUFTLEtBQUt2TCxRQUFRcWpDLGNBQWMsRUFBRTtJQUM1RDs7Ozs7Ozs7O0lBU0ExVixTQUFTdnJCLEdBQUd5SixHQUFHO0FBR2QsVUFBSSxDQUFDLEtBQUt2RSxTQUFTO0FBQ2xCLGVBQU87TUFDUjtBQUNBLFdBQUtnNkIsaUJBQWlCO0FBQ3RCLFlBQU12OEIsT0FBTyxLQUFLQSxRQUFRO0FBRTFCLGFBQ0MzQyxJQUFJMkMsUUFBUSxLQUFLeUcsUUFDakJwSixJQUFJMkMsUUFBUSxLQUFLeUcsT0FBTyxLQUFLb1EsU0FDN0IvUCxJQUFJOUcsUUFBUSxLQUFLMEcsT0FDakJJLElBQUk5RyxRQUFRLEtBQUswRyxNQUFNLEtBQUt3MUI7SUFFOUI7Ozs7OztJQU1BdmEsWUFBWXhmLFVBQVU7QUFDckIsVUFBSSxDQUFDQSxVQUFVO0FBQ2Q7TUFDRDtBQUNBLFdBQUs2NUIsVUFBVTE5QixLQUFLNkQsUUFBUTtJQUM3Qjs7Ozs7O0lBTUFrOEIsaUJBQWlCO0FBQUEsVUFBQUUsY0FBQWh6QiwyQkFDQSxLQUFLeXdCLFNBQUEsR0FBQXdDO0FBQUEsVUFBQTtBQUFyQixhQUFBRCxZQUFBci9CLEVBQUEsR0FBQSxFQUFBcy9CLFVBQUFELFlBQUE5eUIsRUFBQSxHQUFBQyxRQUFnQztBQUFBLGdCQUFyQjNNLElBQUF5L0IsUUFBQTV5QjtBQUNWLGNBQUk3TSxLQUFLQSxFQUFFb1MsT0FBTztBQUNqQnBTLGNBQUVvUyxNQUFNO1VBQ1Q7UUFDRDtNQUFBLFNBQUF0RixLQUFBO0FBQUEweUIsb0JBQUFoNUIsRUFBQXNHLEdBQUE7TUFBQSxVQUFBO0FBQUEweUIsb0JBQUF6eUIsRUFBQTtNQUFBO0FBQ0EsV0FBS2t3QixZQUFZLENBQUE7SUFDbEI7RUFDRDtBQU9BajhCLFdBQVMyN0IsTUFBTTtBQVNmMzdCLFdBQVMrOEIsVUFBVTtBQUluQi84QixXQUFTeW9CLFVBQVUsSUFBSThSLGFBQWE7QUFVcEMsUUFBTW1FLFNBQVVwaEMsT0FBTTtBQUNyQixRQUFJQSxFQUFFakUsV0FBVyxHQUFHO0FBQ25CLGFBQU87SUFDUjtBQUNBLFdBQUEsMEJBQUF2QixPQUFpQ3dGLEVBQUVvRyxLQUFLLEVBQUUsR0FBQyxRQUFBO0VBQzVDO0FBQ0EsUUFBTWk3QixTQUFVcmhDLE9BQU07QUFDckIsUUFBSUEsRUFBRWpFLFdBQVcsR0FBRztBQUNuQixhQUFPO0lBQ1I7QUFDQSxXQUFBLDBCQUFBdkIsT0FBaUN3RixFQUFFb0csS0FBSyxFQUFFLEdBQUMsUUFBQTtFQUM1QztBQUNBLFFBQU1rN0IsaUJBQWlCQSxDQUFDbGxDLEdBQUdzYixHQUFHalEsR0FBRzg1QixVQUFVO0FBRTFDLFFBQUksQ0FBQzdwQixFQUFFalEsQ0FBQyxFQUFFKzVCLE9BQU85cEIsRUFBRWpRLENBQUMsRUFBRSs1QixRQUFRLEdBQUc7QUFDaEMsYUFBTztJQUNSO0FBQ0EsUUFBSTVxQyxRQUFRO0FBQUEsUUFBQTZxQyxjQUFBdnpCLDJCQUNlOVIsRUFBRTR4QixRQUFRLENBQUEsR0FBQTBUO0FBQUEsUUFBQTtBQUFyQyxXQUFBRCxZQUFBNS9CLEVBQUEsR0FBQSxFQUFBNi9CLFVBQUFELFlBQUFyekIsRUFBQSxHQUFBQyxRQUF3QztBQUFBLGNBQTdCLENBQUNyUyxHQUFHc1MsT0FBTyxJQUFBb3pCLFFBQUFuekI7QUFDckIsWUFBSSxDQUFDRCxRQUFRa3pCLE9BQU9sekIsUUFBUWt6QixRQUFRLEdBQUc7QUFDdEM7UUFDRDtBQUNBLGFBQUt4bEMsSUFBSTBiLEVBQUVqUSxDQUFDLEVBQUUrNUIsUUFBUS81QixJQUFJNkcsUUFBUWt6QixPQUFPLEdBQUc7QUFDM0MsY0FBSUQsT0FBTztBQUNWLG1CQUFPO1VBQ1I7QUFDQTNxQztRQUNEO01BQ0Q7SUFBQSxTQUFBNFgsS0FBQTtBQUFBaXpCLGtCQUFBdjVCLEVBQUFzRyxHQUFBO0lBQUEsVUFBQTtBQUFBaXpCLGtCQUFBaHpCLEVBQUE7SUFBQTtBQUNBLFdBQU83WDtFQUNSO0FBQ0EsUUFBTStxQyxvQkFBb0IsU0FBU0MsbUJBQWtCaDJCLEtBQUtpMkIsU0FBUztBQUNsRSxVQUFNMW9DLEtBQUs7QUFDWCxVQUFNd21CLFdBQVcvVCxJQUFJNUYsTUFBTTdNLEVBQUU7QUFDN0IsUUFBSTJrQixNQUFNLENBQUMsRUFBRTtBQUNiLGFBQVNyVyxJQUFJLEdBQUdBLElBQUlrWSxTQUFTNWpCLFFBQVEwTCxLQUFLLEdBQUc7QUFDNUMsVUFBSWtZLFNBQVNsWSxDQUFDLEVBQUUxTCxTQUFTLElBQUk4bEMsU0FBUztBQUNyQy9qQixZQUFJQSxJQUFJL2hCLFNBQVMsQ0FBQyxLQUFLNGpCLFNBQVNsWSxDQUFDO0FBQ2pDLFlBQUlBLElBQUksSUFBSWtZLFNBQVM1akIsUUFBUTtBQUM1QitoQixjQUFJQSxJQUFJL2hCLFNBQVMsQ0FBQyxLQUFLNGpCLFNBQVNsWSxJQUFJLENBQUM7UUFDdEM7QUFDQTtNQUNELE9BQU87QUFDTixZQUFJQSxJQUFJLEdBQUc7QUFDVnFXLGNBQUlBLElBQUkvaEIsU0FBUyxDQUFDLEtBQUs0akIsU0FBU2xZLENBQUMsRUFBRUosTUFBTSxHQUFHeEwsS0FBS3lMLElBQUksR0FBR3U2QixPQUFPLENBQUM7UUFDakU7QUFDQSxZQUFJcDZCLElBQUksSUFBSWtZLFNBQVM1akIsUUFBUTtBQUM1QitoQixjQUFJN2MsS0FBSzBlLFNBQVNsWSxDQUFDLEVBQUVKLE1BQU14TCxLQUFLeUwsSUFBSSxHQUFHcVksU0FBU2xZLENBQUMsRUFBRTFMLFNBQVM4bEMsT0FBTyxDQUFDLElBQUlsaUIsU0FBU2xZLElBQUksQ0FBQyxDQUFDO1FBQ3hGO01BQ0Q7SUFDRDtBQUNBLFdBQU9xVyxJQUFJL2hCLFNBQVMsS0FBSyxDQUFDK2hCLElBQUksQ0FBQyxHQUFHO0FBQ2pDQSxZQUFNQSxJQUFJelcsTUFBTSxDQUFDO0lBQ2xCO0FBQ0EsV0FBT3lXO0VBQ1I7QUFDQSxRQUFNZ2tCLGFBQWFBLENBQUN0NUIsR0FBRzRGLE1BQU07QUFHNUIsUUFBSTNHO0FBQ0osVUFBTXM2QixZQUFZdjVCLEVBQUV4QyxNQUFNLElBQUk7QUFDOUIsVUFBTWc4QixZQUFZNXpCLEVBQUVwSSxNQUFNLElBQUk7QUFDOUIsU0FBS3lCLElBQUksR0FBR0EsSUFBSXM2QixVQUFVaG1DLFFBQVEsRUFBRTBMLEdBQUc7QUFDdENzNkIsZ0JBQVV0NkIsQ0FBQyxJQUFJczZCLFVBQVV0NkIsQ0FBQyxFQUFFMUIsT0FBTztJQUNwQztBQUNBLFNBQUswQixJQUFJLEdBQUdBLElBQUl1NkIsVUFBVWptQyxRQUFRLEVBQUUwTCxHQUFHO0FBQ3RDdTZCLGdCQUFVdjZCLENBQUMsSUFBSXU2QixVQUFVdjZCLENBQUMsRUFBRTFCLE9BQU87SUFDcEM7QUFDQSxVQUFNazhCLE1BQU10cEMsS0FBS29wQyxXQUFXQyxTQUFTO0FBQ3JDLFFBQUlwMkIsTUFBTTtBQUNWLFFBQUlzMkIsTUFBTSxDQUFBO0FBSVYsUUFBSUMsZ0JBQWdCO0FBQ3BCLFNBQUsxNkIsSUFBSSxHQUFHQSxJQUFJdzZCLElBQUk3ekIsRUFBRXJTLFFBQVEsRUFBRTBMLEdBQUc7QUFDbEMsVUFBSXc2QixJQUFJN3pCLEVBQUUzRyxDQUFDLEVBQUUyNkIsUUFBUTtBQUNwQixZQUFJRCxnQkFBZ0JGLElBQUk3ekIsRUFBRTNHLENBQUMsRUFBRSs1QixLQUFLO0FBRWpDUyxjQUFJejVCLEVBQUV5NUIsSUFBSTd6QixFQUFFM0csQ0FBQyxFQUFFKzVCLEdBQUcsSUFBSVMsSUFBSXo1QixFQUFFeTVCLElBQUk3ekIsRUFBRTNHLENBQUMsRUFBRSs1QixHQUFHLEVBQUUxYTtBQUMxQ21iLGNBQUk3ekIsRUFBRTNHLENBQUMsSUFBSXc2QixJQUFJN3pCLEVBQUUzRyxDQUFDLEVBQUVxZjtRQUNyQjtBQUNBLFlBQUlxYixnQkFBZ0JGLElBQUk3ekIsRUFBRTNHLENBQUMsRUFBRSs1QixLQUFLO0FBQ2pDVywwQkFBZ0JGLElBQUk3ekIsRUFBRTNHLENBQUMsRUFBRSs1QjtRQUMxQjtNQUNEO0lBQ0Q7QUFFQSxTQUFLLzVCLElBQUksR0FBR0EsSUFBSXc2QixJQUFJejVCLEVBQUV6TSxVQUFVLENBQUNrbUMsSUFBSXo1QixFQUFFZixDQUFDLEVBQUUyNkIsUUFBUSxFQUFFMzZCLEdBQUc7QUFDdER5NkIsVUFBSWpoQyxLQUFLZ2hDLElBQUl6NUIsRUFBRWYsQ0FBQyxDQUFDO0lBQ2xCO0FBQ0FtRSxXQUFPdzFCLE9BQU9jLEdBQUc7QUFDakJBLFVBQU0sQ0FBQTtBQUVOLFNBQUt6NkIsSUFBSSxHQUFHQSxJQUFJdzZCLElBQUk3ekIsRUFBRXJTLFFBQVEsRUFBRTBMLEdBQUc7QUFFbEMsYUFBT0EsSUFBSXc2QixJQUFJN3pCLEVBQUVyUyxVQUFVLENBQUNrbUMsSUFBSTd6QixFQUFFM0csQ0FBQyxFQUFFMjZCLFFBQVE7QUFDNUNGLFlBQUlqaEMsS0FBS2doQyxJQUFJN3pCLEVBQUUzRyxHQUFHLENBQUM7TUFDcEI7QUFDQW1FLGFBQU95MUIsT0FBT2EsR0FBRztBQUNqQkEsWUFBTSxDQUFBO0FBQ04sVUFBSXo2QixJQUFJdzZCLElBQUk3ekIsRUFBRXJTLFFBQVE7QUFFckI2UCxlQUFPcTJCLElBQUk3ekIsRUFBRTNHLENBQUMsRUFBRXFmO0FBRWhCLFlBQUlodkIsSUFBSW1xQyxJQUFJN3pCLEVBQUUzRyxDQUFDLEVBQUUrNUIsTUFBTTtBQUN2QixlQUFPMXBDLElBQUltcUMsSUFBSXo1QixFQUFFek0sVUFBVSxDQUFDa21DLElBQUl6NUIsRUFBRTFRLENBQUMsRUFBRXNxQyxRQUFRO0FBQzVDRixjQUFJamhDLEtBQUtnaEMsSUFBSXo1QixFQUFFMVEsR0FBRyxDQUFDO1FBQ3BCO0FBQ0E4VCxlQUFPdzFCLE9BQU9jLEdBQUc7QUFDakJBLGNBQU0sQ0FBQTtNQUNQO0lBQ0Q7QUFDQSxXQUFPdDJCO0VBQ1I7QUFHQSxRQUFNeTJCLHVCQUF1QixJQUFJcDdCLE9BQ2hDLHFKQUdEO0FBQ0EsUUFBTXE3QixlQUFlLFNBQVNDLGNBQWFDLE1BQU07QUFDaEQsUUFBSSxDQUFDRCxjQUFhMWtCLEtBQUsya0IsSUFBSSxHQUFHO0FBQzdCRCxvQkFBYTFrQixLQUFLMmtCLElBQUksSUFBSTtBQUMxQixXQUFLMXlCLEdBQUdxQyxPQUFBLGFBQUEzWCxPQUFvQmdvQyxNQUFJLDZCQUFBLEdBQStCO1FBQUNwd0IsS0FBSztRQUFVQyxNQUFNO01BQU8sQ0FBQztJQUM5RjtFQUNEO0FBQ0Fpd0IsZUFBYXprQixPQUFPLENBQUM7QUFDckIsUUFBTTRrQixvQkFBcUI1SixTQUFRO0FBQ2xDLFVBQU0vYSxNQUFNLENBQUM7QUFDYixhQUFTclcsSUFBSSxHQUFHQSxJQUFJb3hCLElBQUk5OEIsUUFBUTBMLEtBQUs7QUFBQSxVQUFBaTdCLFFBQUFDO0FBQ3BDLFVBQUlOLHFCQUFxQmpqQyxLQUFLeTVCLElBQUlweEIsQ0FBQyxDQUFDLEdBQUc7QUFDdENveEIsWUFBSXB4QixDQUFDLEtBQUs7TUFDWDtBQUNBLE9BQUFrN0IsY0FBQTdrQixJQUFBNGtCLFNBQUk3SixJQUFJcHhCLENBQUMsQ0FBQyxPQUFBLFFBQUFrN0IsZ0JBQUEsU0FBQUEsY0FBVjdrQixJQUFBNGtCLE1BQUEsSUFBZ0IsQ0FBQTtBQUNoQixVQUFJO0FBQ0g1a0IsWUFBSSthLElBQUlweEIsQ0FBQyxDQUFDLEVBQUV4RyxLQUFLd0csQ0FBQztNQUNuQixRQUFRO0FBQ1A2NkIscUJBQWF6SixJQUFJcHhCLENBQUMsQ0FBQztNQUNwQjtJQUNEO0FBQ0EsV0FBT3FXO0VBQ1I7QUFDQSxRQUFNbmxCLE9BQU9BLENBQUM2UCxHQUFHNEYsTUFBTTtBQUV0QixVQUFNaFYsS0FBS3FwQyxrQkFBa0JyMEIsQ0FBQztBQUU5QixVQUFNdzBCLEtBQUtILGtCQUFrQmo2QixDQUFDO0FBRTlCLFFBQUlmO0FBQ0osU0FBS0EsS0FBS3JPLElBQUk7QUFDYixVQUFJQSxHQUFHcU8sQ0FBQyxFQUFFMUwsV0FBVyxLQUFLNm1DLEdBQUduN0IsQ0FBQyxLQUFLbTdCLEdBQUduN0IsQ0FBQyxFQUFFMUwsV0FBVyxHQUFHO0FBQ3REcVMsVUFBRWhWLEdBQUdxTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUk7VUFDYnFmLE1BQU0xWSxFQUFFaFYsR0FBR3FPLENBQUMsRUFBRSxDQUFDLENBQUM7VUFDaEIrNUIsS0FBS29CLEdBQUduN0IsQ0FBQyxFQUFFLENBQUM7VUFDWjI2QixRQUFRO1FBQ1Q7QUFDQTU1QixVQUFFbzZCLEdBQUduN0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJO1VBQ2JxZixNQUFNdGUsRUFBRW82QixHQUFHbjdCLENBQUMsRUFBRSxDQUFDLENBQUM7VUFDaEIrNUIsS0FBS3BvQyxHQUFHcU8sQ0FBQyxFQUFFLENBQUM7VUFDWjI2QixRQUFRO1FBQ1Q7TUFDRDtJQUNEO0FBRUEsU0FBSzM2QixJQUFJLEdBQUdBLElBQUkyRyxFQUFFclMsU0FBUyxHQUFHMEwsS0FBSztBQUNsQyxVQUNDMkcsRUFBRTNHLENBQUMsRUFBRTI2QixVQUNMLENBQUNoMEIsRUFBRTNHLElBQUksQ0FBQyxFQUFFMjZCLFVBQ1ZoMEIsRUFBRTNHLENBQUMsRUFBRSs1QixNQUFNLElBQUloNUIsRUFBRXpNLFVBQ2pCLENBQUN5TSxFQUFFNEYsRUFBRTNHLENBQUMsRUFBRSs1QixNQUFNLENBQUMsRUFBRVksVUFDakJoMEIsRUFBRTNHLElBQUksQ0FBQyxNQUFNZSxFQUFFNEYsRUFBRTNHLENBQUMsRUFBRSs1QixNQUFNLENBQUMsR0FDMUI7QUFDRHB6QixVQUFFM0csSUFBSSxDQUFDLElBQUk7VUFDVnFmLE1BQU0xWSxFQUFFM0csSUFBSSxDQUFDO1VBQ2IrNUIsS0FBS3B6QixFQUFFM0csQ0FBQyxFQUFFKzVCLE1BQU07VUFDaEJZLFFBQVE7UUFDVDtBQUNBNTVCLFVBQUU0RixFQUFFM0csQ0FBQyxFQUFFKzVCLE1BQU0sQ0FBQyxJQUFJO1VBQ2pCMWEsTUFBTXRlLEVBQUU0RixFQUFFM0csQ0FBQyxFQUFFKzVCLE1BQU0sQ0FBQztVQUNwQkEsS0FBSy81QixJQUFJO1VBQ1QyNkIsUUFBUTtRQUNUO01BQ0Q7SUFDRDtBQUVBLFNBQUszNkIsSUFBSTJHLEVBQUVyUyxTQUFTLEdBQUcwTCxJQUFJLEdBQUdBLEtBQUs7QUFDbEMsVUFDQzJHLEVBQUUzRyxDQUFDLEVBQUUyNkIsVUFDTCxDQUFDaDBCLEVBQUUzRyxJQUFJLENBQUMsRUFBRTI2QixVQUNWaDBCLEVBQUUzRyxDQUFDLEVBQUUrNUIsTUFBTSxLQUNYLENBQUNoNUIsRUFBRTRGLEVBQUUzRyxDQUFDLEVBQUUrNUIsTUFBTSxDQUFDLEVBQUVZLFVBQ2pCaDBCLEVBQUUzRyxJQUFJLENBQUMsTUFBTWUsRUFBRTRGLEVBQUUzRyxDQUFDLEVBQUUrNUIsTUFBTSxDQUFDLEdBQzFCO0FBQ0RwekIsVUFBRTNHLElBQUksQ0FBQyxJQUFJO1VBQ1ZxZixNQUFNMVksRUFBRTNHLElBQUksQ0FBQztVQUNiKzVCLEtBQUtwekIsRUFBRTNHLENBQUMsRUFBRSs1QixNQUFNO1VBQ2hCWSxRQUFRO1FBQ1Q7QUFDQTU1QixVQUFFNEYsRUFBRTNHLENBQUMsRUFBRSs1QixNQUFNLENBQUMsSUFBSTtVQUNqQjFhLE1BQU10ZSxFQUFFNEYsRUFBRTNHLENBQUMsRUFBRSs1QixNQUFNLENBQUM7VUFDcEJBLEtBQUsvNUIsSUFBSTtVQUNUMjZCLFFBQVE7UUFDVDtNQUNEO0lBQ0Q7QUFDQSxXQUFPO01BQ041NUI7TUFDQTRGO0lBQ0Q7RUFDRDtBQUdBLFFBQU15MEIsY0FBY0EsTUFBTTtBQUN6QixRQUFJanpDLE9BQU9rekMsaUJBQWlCO0FBQzNCNXBDLFNBQUdJLEtBQUt5cEMsV0FBVztJQUNwQixPQUFPO0FBQ043cEMsU0FBR0ksS0FBS3lwQyxXQUFXeGpDLFNBQVN3akM7SUFDN0I7QUFDQTdwQyxPQUFHSSxLQUFLeWlDLFlBQ1AsMEdBQTBHMzhCLEtBQ3pHbEcsR0FBR0ksS0FBS3lwQyxRQUNUO0FBQ0Q3cEMsT0FBR0ksS0FBSzBwQyxRQUFRLGlCQUFpQjVqQyxLQUFLbEcsR0FBR0ksS0FBS3lwQyxRQUFRO0FBQ3REN3BDLE9BQUdJLEtBQUsycEMsVUFBVS9wQyxHQUFHSSxLQUFLeXBDLFNBQVNHLFdBQVcsV0FBVztBQUN6RGhxQyxPQUFHSSxLQUFLNnBDLFVBQ1BqcUMsR0FBR0ksS0FBS3lpQyxhQUFhN2lDLEdBQUdJLEtBQUt5cEMsYUFBYSwwQkFBMEIsMEJBQTBCO0FBQy9GN3BDLE9BQUdJLEtBQUtxYyxPQUFPN0YsR0FBR3NHLE9BQU9DLElBQUksbUJBQW1CO0FBQ2hELFVBQU0rc0IsT0FBTzdqQyxTQUFTNmpDLE9BQUEsSUFBQTVvQyxPQUFXK0UsU0FBUzZqQyxJQUFJLElBQUs7QUFDbkRscUMsT0FBR0ksS0FBSytwQyxXQUFXbnFDLEdBQUdJLEtBQUt5cEMsV0FBV0s7RUFDdkM7QUFDQSxRQUFNRSxjQUFjQSxNQUFNO0FBQ3pCLFVBQU1wZ0MsU0FBUztNQUNkMUUsUUFBUTtNQUNScWYsTUFBTTtNQUNOMGxCLFNBQVN6ekIsR0FBR3NHLE9BQU9DLElBQUksWUFBWTtNQUNuQ210QixRQUFRO0lBQ1Q7QUFDQXRxQyxPQUFHM0MsS0FBS2t0QyxZQUFZO0FBQ3BCLFFBQUlocEMsV0FBVyxhQUFhLEdBQUc7QUFDOUJ5NkIsZUFBUyxFQUNQN2UsSUFBSW5ULE1BQU0sRUFDVm1MLEtBQU1wSixVQUFTO0FBQ2YsY0FBTSxDQUFDO1VBQUN5K0I7UUFBTSxDQUFDLElBQUl6K0IsS0FBSzZOLE1BQU0yaEI7QUFDOUJ2N0IsV0FBRzNDLEtBQUtrdEMsWUFBWUMsT0FBT3hoQixTQUFTLFFBQVE7TUFDN0MsQ0FBQztJQUNIO0VBQ0Q7QUFDQSxRQUFNeWhCLHdCQUF3QkEsTUFBTTtBQUNuQyxVQUFNemdDLFNBQVM7TUFDZDFFLFFBQVE7TUFDUm9sQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsTUFBTTtNQUNOQyxRQUFRO01BQ1JDLFNBQVM7O01BRVRDLFNBQVM7TUFDVEMsUUFBUTtJQUNUO0FBQ0EsV0FBT2hQLFNBQVMsRUFDZDdlLElBQUluVCxNQUFNLEVBQ1Y0dEIsS0FBTTdyQixVQUFTO0FBQ2YvTCxTQUFHSSxLQUFLNnFDLHFCQUFxQmwvQixLQUFLNk4sTUFBTXF4QjtJQUN6QyxDQUFDO0VBQ0g7QUFDQSxRQUFNQyxlQUFlQSxNQUFNO0FBQzFCLFVBQU1DLFdBQVd6MEMsT0FBT2t6QyxrQkFBa0IsVUFBVXZqQyxTQUFTOGtDO0FBQzdEbnJDLE9BQUdJLEtBQUswYyxjQUFjbEcsR0FBR3NHLE9BQU9DLElBQUksZUFBZSxFQUFFbFAsUUFBUSxTQUFTLEVBQUU7QUFDeEVqTyxPQUFHSSxLQUFLZ3JDLG1CQUFtQngwQixHQUFHc0csT0FBT0MsSUFBSSxVQUFVO0FBQ25EbmQsT0FBR0ksS0FBS2lyQyxVQUFBLEdBQUEvcEMsT0FBYXNWLEdBQUdzRyxPQUFPQyxJQUFJLGNBQWMsR0FBQyxVQUFBO0FBRWxELFVBQU1tdUIsWUFBQSxHQUFBaHFDLE9BQWV0QixHQUFHSSxLQUFLZ3JDLGtCQUFnQixTQUFBO0FBRzdDcHJDLE9BQUdJLEtBQUswb0IsWUFBQSxHQUFBeG5CLE9BQWU2cEMsVUFBUSxJQUFBLEVBQUE3cEMsT0FBS3RCLEdBQUdJLEtBQUsrcEMsUUFBUSxFQUFBN29DLE9BQUdncUMsU0FBUztBQUVoRXRyQyxPQUFHSSxLQUFLbXJDLFdBQUEsR0FBQWpxQyxPQUFjNnBDLFVBQVEsSUFBQSxFQUFBN3BDLE9BQUt0QixHQUFHSSxLQUFLK3BDLFFBQVEsRUFBQTdvQyxPQUFHdEIsR0FBR0ksS0FBS2dyQyxnQkFBZ0I7QUFDOUVwckMsT0FBR0ksS0FBSzBYLGNBQUEsR0FBQXhXLE9BQWlCNnBDLFVBQVEsSUFBQSxFQUFBN3BDLE9BQUt0QixHQUFHSSxLQUFLK3BDLFFBQVEsRUFBQTdvQyxPQUFHdEIsR0FBR0ksS0FBS2lyQyxPQUFPO0FBQ3hFcnJDLE9BQUdJLEtBQUt1TixjQUFBLEdBQUFyTSxPQUFpQjZwQyxVQUFRLElBQUEsRUFBQTdwQyxPQUFLdEIsR0FBR0ksS0FBSytwQyxRQUFRLEVBQUE3b0MsT0FBR3RCLEdBQUdJLEtBQUswYyxXQUFXO0FBQzVFOWMsT0FBR0ksS0FBSzY4QixjQUFBLEdBQUEzN0IsT0FBaUI2cEMsVUFBUSxJQUFBLEVBQUE3cEMsT0FBS3RCLEdBQUdJLEtBQUs2cEMsT0FBTyxFQUFBM29DLE9BQUd0QixHQUFHSSxLQUFLZ3JDLGdCQUFnQjtBQUNoRnByQyxPQUFHSSxLQUFLNDhCLGlCQUFBLEdBQUExN0IsT0FBb0I2cEMsVUFBUSxJQUFBLEVBQUE3cEMsT0FBS3RCLEdBQUdJLEtBQUs2cEMsT0FBTyxFQUFBM29DLE9BQUd0QixHQUFHSSxLQUFLaXJDLE9BQU87QUFDMUVyckMsT0FBR0MsR0FBR2txQixZQUFZLElBQUlwYyxPQUFBLEtBQUF6TSxPQUFZaXNCLElBQUl2ZixpQkFBaUIsQ0FBQ2hPLEdBQUdJLEtBQUswb0IsV0FBVzlvQixHQUFHSSxLQUFLdU4sV0FBVyxDQUFDLEVBQUVULEtBQUssR0FBRyxHQUFDLEdBQUEsQ0FBRztFQUM5RztBQUVBLFFBQU1zK0IsZUFBZUEsTUFBTTtBQUMxQixVQUFNQyxVQUFVO0FBQ2hCLFFBQUlDLFlBQUEsR0FBQXBxQyxPQUFlME0sZ0JBQWdCNEksR0FBR3NHLE9BQU9DLElBQUksY0FBYyxDQUFDLEdBQUMsd0NBQUE7QUFDakV1dUIsaUJBQUEsSUFBQXBxQyxPQUFpQjBNLGdCQUFBLEdBQUExTSxPQUFtQnRCLEdBQUdJLEtBQUswYyxhQUFXLEdBQUEsQ0FBRyxDQUFDO0FBQzNELFVBQU02dUIsUUFBQSxJQUFBcnFDLE9BQVlvcUMsV0FBUywyQkFBQTtBQUMzQjFyQyxPQUFHQyxHQUFHOG1CLE9BQU8sSUFBSWhaLE9BQU8wOUIsVUFBVXo5QixnQkFBZ0JoTyxHQUFHSSxLQUFLK3BDLFFBQVEsSUFBSXdCLEtBQUs7RUFDNUU7QUFDQSxRQUFNQyx3QkFBeUJDLG9CQUFtQjtBQUNqRCxVQUFNQyxXQUFXLENBQUE7QUFDakJBLGFBQVMvakMsS0FDUjZPLEdBQUdDLEtBQUt5VixhQUFhdWYsZUFBZUUsUUFBUSxHQUM1Q24xQixHQUFHQyxLQUFLeVYsYUFBYTNELFVBQVVrakIsZUFBZUUsUUFBUSxDQUFDLENBQ3hEO0FBQUEsUUFBQUMsY0FBQWgzQiwyQkFDb0I2MkIsZUFBZUksT0FBQSxHQUFBQztBQUFBLFFBQUE7QUFBbkMsV0FBQUYsWUFBQXJqQyxFQUFBLEdBQUEsRUFBQXVqQyxVQUFBRixZQUFBOTJCLEVBQUEsR0FBQUMsUUFBNEM7QUFBQSxjQUFqQ2czQixRQUFBRCxRQUFBNzJCO0FBQ1Z5MkIsaUJBQVMvakMsS0FBSzZPLEdBQUdDLEtBQUt5VixhQUFhNmYsS0FBSyxHQUFHdjFCLEdBQUdDLEtBQUt5VixhQUFhM0QsVUFBVXdqQixLQUFLLENBQUMsQ0FBQztNQUNsRjtJQUFBLFNBQUE3MkIsS0FBQTtBQUFBMDJCLGtCQUFBaDlCLEVBQUFzRyxHQUFBO0lBQUEsVUFBQTtBQUFBMDJCLGtCQUFBejJCLEVBQUE7SUFBQTtBQUNBLFdBQU91MkIsU0FBUzUrQixLQUFLLEdBQUc7RUFDekI7QUFDQSxRQUFNay9CLGFBQWFBLE1BQU07QUFDeEJaLGlCQUFhO0FBQ2IsVUFBTWxYLEtBQUt3TyxLQUFLOWlDLEdBQUc4bUIsV0FBVztBQUM5QjltQixPQUFHQyxHQUFHbXFCLGFBQWEsSUFBSXJjLE9BQUEsY0FBQXpNLE9BQXFCZ3pCLElBQUUsOEJBQUEsQ0FBOEI7QUFBQSxRQUFBK1gsY0FBQXIzQiwyQkFDbERoVixHQUFHSSxLQUFLNnFDLGtCQUFBLEdBQUFxQjtBQUFBLFFBQUE7QUFBbEMsV0FBQUQsWUFBQTFqQyxFQUFBLEdBQUEsRUFBQTJqQyxVQUFBRCxZQUFBbjNCLEVBQUEsR0FBQUMsUUFBc0Q7QUFBQSxjQUEzQ28zQixjQUFBRCxRQUFBajNCO0FBQ1YsZ0JBQVFrM0IsWUFBWVIsVUFBQTtVQUNuQixLQUFLO0FBQ0ovckMsZUFBR0MsR0FBR3JDLFdBQVcsSUFBSW1RLE9BQUEsYUFBQXpNLE9BQ1BnekIsSUFBRSxjQUFBLEVBQUFoekIsT0FBZXNxQyxzQkFBc0JXLFdBQVcsR0FBQyxnQkFBQSxFQUFBanJDLE9BQy9Dd2hDLEtBQUs5aUMsR0FBRzRLLFFBQVEsR0FBQyxRQUFBLEdBQ2xDLEdBQ0Q7QUFDQTtVQUNELEtBQUs7QUFDSjVLLGVBQUdDLEdBQUc0bUIsY0FBYyxJQUFJOVksT0FBQSxJQUFBek0sT0FDbkJnekIsSUFBRSxjQUFBLEVBQUFoekIsT0FBZXNxQyxzQkFBc0JXLFdBQVcsR0FBQyxZQUFBLEdBQ3ZELEdBQ0Q7QUFDQTtVQUNELEtBQUs7QUFDSnZzQyxlQUFHQyxHQUFHM0MsUUFBUSxJQUFJeVEsT0FBQSxhQUFBek0sT0FDSmd6QixJQUFFLGNBQUEsRUFBQWh6QixPQUFlc3FDLHNCQUFzQlcsV0FBVyxHQUFDLG1CQUFBLEVBQUFqckMsT0FDNUN3aEMsS0FBSzlpQyxHQUFHNEssUUFBUSxHQUFDLFVBQUEsR0FDckMsR0FDRDtBQUNBO1VBQ0QsS0FBSztBQUNKNUssZUFBR0MsR0FBR3FLLFlBQVksSUFBSXlELE9BQUEsYUFBQXpNLE9BQ1JnekIsSUFBRSxjQUFBLEVBQUFoekIsT0FBZXNxQyxzQkFBc0JXLFdBQVcsR0FBQyxzQkFBQSxHQUNoRSxHQUNEO0FBQ0E7UUFDRjtNQUNEO0lBQUEsU0FBQWozQixLQUFBO0FBQUErMkIsa0JBQUFyOUIsRUFBQXNHLEdBQUE7SUFBQSxVQUFBO0FBQUErMkIsa0JBQUE5MkIsRUFBQTtJQUFBO0FBQ0EsVUFBTWkzQixLQUFLcEosVUFBVTtBQUtyQnBqQyxPQUFHQyxHQUFHbkosUUFBUSxJQUFJaVgsT0FBQSxhQUFBek0sT0FDSmtyQyxJQUFFLHVCQUFBLEVBQUFsckMsT0FBd0J5TCxPQUFPbFMsSUFBQTR4QyxxQkFBQUEsbUJBQUF4L0IsdUJBQUEsQ0FBQSw0Q0FBQSxHQUFBLENBQUEsK0NBQUEsQ0FBQSxFQUFBLEdBQUEsR0FBQSxFQUFBM0wsT0FBb0RDLFdBQVcsc0JBQXNCLEdBQUMsd0JBQUEsRUFBQUQsT0FDM0drckMsSUFBRSxLQUFBLEVBQUFsckMsT0FBTXlMLE9BQU9sUyxJQUFBNnhDLHFCQUFBQSxtQkFBQXovQix1QkFBQSxDQUFBLDJCQUFBLEdBQUEsQ0FBQSxnQ0FBQSxDQUFBLEVBQUEsQ0FBQSxHQUN4QyxLQUNEO0FBQ0FqTixPQUFHQyxHQUFHbWxCLG9CQUFvQjtBQUMxQnBsQixPQUFHQyxHQUFHckosV0FBVyxJQUFJbVgsT0FBQSxTQUFBek0sT0FBZ0J3aEMsS0FBSzlpQyxHQUFHMkssWUFBWSxHQUFDLHlCQUFBLEdBQTJCLEdBQUc7QUFDeEYzSyxPQUFHQyxHQUFHb2xCLHVCQUF1QjtBQUU3QnJsQixPQUFHQyxHQUFHb29CLFNBQ0w7QUFDRHJvQixPQUFHQyxHQUFHakosT0FBTyxJQUFJK1csT0FBT3hNLFdBQVcsaUJBQWlCLEdBQUcsSUFBSTtBQUMzRHZCLE9BQUdDLEdBQUd4RCxXQUFXLElBQUlzUixPQUFPeE0sV0FBVyxnQkFBZ0IsR0FBRyxJQUFJO0FBRTlEdkIsT0FBR0MsR0FBR2lLLFFBQVE7QUFDZGxLLE9BQUdDLEdBQUdSLE9BQU87RUFDZDtBQUVBLFFBQU1rdEMsYUFBYUEsTUFBTTtBQUV4QjNzQyxPQUFHUyxNQUFNb1osUUFBUSxDQUFBO0VBQ2xCO0FBQ0EsUUFBTSt5QixVQUFVQSxNQUFNO0FBQ3JCNXNDLE9BQUdhLFFBQVEwRyxPQUFPO0FBQ2xCdkgsT0FBR2EsUUFBUWlILFFBQVEsQ0FBQTtBQUNuQjlILE9BQUdhLFFBQVFnSCxZQUFZLENBQUM7QUFDeEI4a0MsZUFBVztBQUNYM3NDLE9BQUdXLE1BQU0wSCxxQkFBcUI7QUFDOUJySSxPQUFHWSxRQUFRNmdCLE9BQU87QUFFbEJ6aEIsT0FBR2tILFdBQVc7QUFFZGxILE9BQUdLLEtBQUtncEIsZUFBZTtNQUN0QjtRQUFDM1UsTUFBTTtRQUFPRSxJQUFJO01BQUc7TUFDckI7UUFBQ0YsTUFBTTtRQUFLRSxJQUFJO01BQUc7TUFDbkI7UUFBQ0YsTUFBTTtRQUFPRSxJQUFJO01BQUc7TUFDckI7UUFBQ0YsTUFBTTtRQUFPRSxJQUFJO01BQUc7O0lBQUE7RUFFdkI7QUFDQSxRQUFNb25CLFdBQVdBLE1BQU07QUFDdEIsUUFBSSxDQUFDaDhCLEdBQUcxSixJQUFJdTJDLFFBQVE7QUFDbkI3c0MsU0FBRzFKLElBQUk0a0IsWUFBWTtBQUNuQmxiLFNBQUcxSixJQUFJdTJDLFNBQVN2MkM7SUFDakI7QUFDQSxXQUFPMEosR0FBRzFKLElBQUl1MkM7RUFDZjtBQUdBLFFBQU0zMUIsY0FBYyxTQUFTNDFCLGFBQVk5d0IsVUFBVTtBQUNsRCxRQUFJOHdCLGFBQVlDLFdBQVc7QUFDMUIsVUFBSSxPQUFPL3dCLGFBQWEsWUFBWTtBQUNuQ0EsaUJBQVM7TUFDVjtBQUNBO0lBQ0Q7QUFHQXl1QiwwQkFBc0IsRUFBRTdTLEtBQUssTUFBTTtBQUdsQ3dILHFCQUFlO0FBQ2Z1SyxrQkFBWTtBQUNadUIsbUJBQWE7QUFDYjhCLGlCQUFXO0FBQ1g1QyxrQkFBWTtBQUVaN0osb0JBQWM7QUFDZHFDLG1CQUFhO0FBRWJ3SixpQkFBVztBQUNYNUwsZ0JBQVU7QUFFVm9NLGNBQVE7QUFDUnh3Qix1QkFBaUI7QUFFakJuYixvQkFBYztBQUNkL0MsVUFBSSwrQ0FBK0M7QUFDbkRzTCxlQUFTeW9CLFFBQVFnVCxPQUFPO0FBQ3hCNkgsbUJBQVlDLFlBQVk7QUFDeEIsVUFBSSxPQUFPL3dCLGFBQWEsWUFBWTtBQUNuQ0EsaUJBQVM7TUFDVjtJQUNELENBQUM7RUFDRjtBQUtBLFFBQU1peEIscUJBQXFCQSxNQUFNO0FBQ2hDLFFBQUl2NkIsTUFBTTtBQUNWQSxXQUFPO0FBQ1AsUUFBSW5SLFdBQVcsbUJBQW1CLEdBQUc7QUFDcENtUixhQUFPO0lBQ1I7QUFJQUEsV0FBTztBQUNQQSxXQUFPO0FBQ1BBLFdBQU87QUFJUCxVQUFNQyxVQUFVO0FBQ2hCLFVBQU1DLGVBQUEsK0VBQUF0UixPQUE4RnFSLFNBQU8sR0FBQTtBQUMzRyxVQUFNRSxhQUFhO0FBQ25CLFVBQU1DLFdBQVc7QUFDakJKLFdBQUEsZ0JBQUFwUixPQUNpQnNSLGNBQVksc0JBQUEsRUFBQXRSLE9BQ3hCdVIsWUFBVSxHQUFBLEVBQUF2UixPQUFJd1IsVUFBUSwyREFBQSxFQUFBeFI7O01BSXpCc1I7TUFDRDtJQUFBLEVBQUF0UixPQUFJdVIsWUFBVSxHQUFBLEVBQUF2UixPQUFJd1IsVUFBUSwyRUFBQTtBQUczQkosV0FBTztBQUVQQSxXQUNDO0FBRUQsV0FBT0E7RUFDUjtBQUNBLFFBQU1iLGVBQWVBLENBQUNwYixTQUFTeTJDLE9BQU9sakMsV0FBVztBQUVoRCxVQUFNMEksTUFBQSwrQkFBQXBSLE9BQXFDMnJDLG1CQUFtQixHQUFDLFNBQUE7QUFFL0QsV0FBT3Q3QixvQkFBb0JlLEtBQUtqYyxTQUFTdVQsTUFBTTtFQUNoRDtBQUNBLFFBQU1takMsaUNBQWlDLFNBQVNDLGdDQUErQnprQyxHQUFHbFMsU0FBUzB5QixHQUFHa2tCLGdCQUFnQjtBQUM3RyxVQUFNO01BQUNuakM7SUFBSyxJQUFJaWY7QUFDaEIsVUFBTTtNQUFDb0c7SUFBSSxJQUFJcEc7QUFDZixVQUFNO01BQUMxcEIsTUFBQXNLO0lBQUksSUFBSW9mO0FBRWYsUUFBSSxPQUFPa2tCLG1CQUFtQixVQUFVO0FBQ3ZDQSx1QkFBaUI7SUFDbEI7QUFFQSxVQUFNQyx3QkFBd0I7QUFDOUIsVUFBTTdtQixXQUFXOWQsRUFBRW1FLE1BQU13Z0MscUJBQXFCO0FBTTlDLFVBQU1DLFlBQVk7QUFDbEIsUUFBSSxDQUFDM29CLEdBQUcsSUFBSTZCO0FBQ1osYUFBU2xZLElBQUksR0FBR0EsSUFBSWtZLFNBQVM1akIsUUFBUTBMLElBQUlBLElBQUlnL0IsWUFBWSxHQUFHO0FBQzNELFlBQU1DLGFBQWEvbUIsU0FBU2xZLElBQUksSUFBSSxDQUFDO0FBQ3JDLFlBQU1rL0IsYUFBYWhuQixTQUFTbFksSUFBSSxJQUFJLENBQUM7QUFDckMsVUFBSW0vQixjQUFjam5CLFNBQVNsWSxJQUFJLElBQUksQ0FBQztBQUNwQyxVQUFJbS9CLGdCQUFnQixVQUFhLENBQUNBLGFBQWE7QUFDOUNBLHNCQUFjO01BQ2Y7QUFDQSxVQUFJQztBQUNKLGNBQVFILFlBQUE7UUFDUCxLQUFLO0FBQ0pHLHVCQUFhLENBQUMsQ0FBQ2wzQyxRQUFRa3hCLFNBQVM7QUFDaEM7UUFDRCxLQUFLO0FBQ0pnbUIsdUJBQWEsQ0FBQ2wzQyxRQUFRc3hCLFNBQVM7QUFDL0I7UUFDRCxLQUFLO0FBQ0o0bEIsdUJBQWEsQ0FBQyxDQUFDcHNDLFdBQVcsaUJBQWlCO0FBQzNDO1FBQ0QsS0FBSztBQUNKb3NDLHVCQUFhLENBQUMsRUFBRXpqQyxVQUFVLFVBQWFBO0FBQ3ZDO1FBQ0QsS0FBSztBQUNKeWpDLHVCQUFhLENBQUMsRUFBRXBlLFNBQVMsVUFBYUE7QUFDdEM7UUFDRCxLQUFLO0FBQ0pvZSx1QkFBYSxDQUFDLENBQUNsM0MsUUFBUTJ4QixTQUFTO0FBQ2hDO1FBQ0QsS0FBSztBQUNKdWxCLHVCQUFhamtCLGtCQUFrQmp6QixPQUFPLEtBQUt1SixHQUFHSSxLQUFLeXBDLGFBQWE7QUFDaEU7UUFDRCxLQUFLO0FBQ0o4RCx1QkFBYSxDQUFDLENBQUMzdEMsR0FBR0ksS0FBS3lpQztBQUN2QjtRQUNELEtBQUs7QUFDSjhLLHVCQUFhLENBQUMsRUFBRTVqQyxVQUFTLFVBQWFBO0FBQ3RDO01BQ0Y7QUFDQSxjQUFRNGpDLFlBQUE7UUFDUCxLQUFLO0FBQ0ovb0IsaUJBQU82QixTQUFTbFksQ0FBQztBQUNqQjtRQUNELEtBQUs7QUFDSnFXLGlCQUFPNm9CO0FBQ1A7UUFDRCxLQUFLO0FBQ0o3b0IsaUJBQU84b0I7QUFDUDtNQUNGO0FBRUE5b0IsYUFBTzZCLFNBQVNsWSxJQUFJZy9CLFNBQVM7SUFDOUI7QUFDQSxRQUFJRCxzQkFBc0JwbkMsS0FBSzBlLEdBQUcsS0FBS3lvQixpQkFBaUIsSUFBSTtBQUMzRCxhQUFPRCxnQ0FBK0J4b0IsS0FBS251QixTQUFTMHlCLEdBQUdra0IsaUJBQWlCLENBQUM7SUFDMUU7QUFDQSxXQUFPem9CO0VBQ1I7QUFDQSxRQUFNZ3BCLHVCQUF1QkEsQ0FBQ2psQyxHQUFHbFMsU0FBU3VULFdBQVc7QUFDcERyQixRQUFJd2tDLCtCQUErQnhrQyxHQUFHbFMsU0FBU3VULE1BQU07QUFDckQsVUFBTXljLFdBQVc5ZCxFQUFFbUUsTUFBTSxXQUFXO0FBQ3BDLFVBQU04WCxNQUFNLENBQUE7QUFBQyxRQUFBaXBCLGNBQUE3NEIsMkJBQ2N5UixTQUFTcU8sUUFBUSxDQUFBLEdBQUFnWjtBQUFBLFFBQUE7QUFBNUMsV0FBQUQsWUFBQWxsQyxFQUFBLEdBQUEsRUFBQW1sQyxVQUFBRCxZQUFBMzRCLEVBQUEsR0FBQUMsUUFBK0M7QUFBQSxjQUFwQyxDQUFDNUcsR0FBRzZHLE9BQU8sSUFBQTA0QixRQUFBejRCO0FBQ3JCLFlBQUk5RyxJQUFJLEdBQUc7QUFFVixnQkFBTXFaLElBQUksSUFBSW1tQixXQUFXO0FBQ3pCLGdCQUFNQyxLQUFLNTRCLFFBQVF0SSxNQUFNLEdBQUc7QUFDNUIsV0FBQzhhLEVBQUUxYixFQUFFLElBQUk4aEM7QUFDVCxtQkFBU2xyQyxJQUFJLEdBQUdBLElBQUlrckMsR0FBR25yQyxRQUFRLEVBQUVDLEdBQUc7QUFDbkMsa0JBQU1tckMsTUFBTUQsR0FBR2xyQyxDQUFDLEVBQUVnSyxNQUFNLEdBQUc7QUFDM0IsZ0JBQUltaEMsSUFBSXByQyxTQUFTLEdBQUc7QUFDbkIsZUFBQSxFQUFHK2tCLEVBQUVxbUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJQTtZQUNqQixPQUFPO0FBRU5ybUIsZ0JBQUVnRyxPQUFPN2tCLFlBQVlrbEMsSUFBSSxDQUFDLENBQUM7WUFDNUI7VUFDRDtBQUNBcm1CLFlBQUVueEIsVUFBVUE7QUFDWixnQkFBTTtZQUFDeVQ7VUFBSyxJQUFJRjtBQUNoQixnQkFBTTtZQUFDdWxCO1VBQUksSUFBSXZsQjtBQUNmLGdCQUFNO1lBQUN2SyxNQUFBc0s7VUFBSSxJQUFJQztBQUNmLGNBQUlFLFVBQVUsVUFBYUEsVUFBVSxNQUFNO0FBQzFDMGQsY0FBRTFkLFFBQVFBO1VBQ1g7QUFDQSxjQUFJcWxCLFNBQVMsVUFBYUEsU0FBUyxNQUFNO0FBQ3hDM0gsY0FBRTJILE9BQU9BO1VBQ1Y7QUFDQSxjQUFJeGxCLFVBQVMsVUFBYUEsVUFBUyxNQUFNO0FBQ3hDNmQsY0FBRW5vQixPQUFPc0s7VUFDVjtBQUNBLGNBQUksQ0FBQzZkLEVBQUVnRyxRQUFRaEcsRUFBRTFiLE9BQU8sWUFBWTtBQUNuQzBiLGNBQUVnRyxPQUFPN2tCLFlBQVk2ZSxFQUFFMWIsRUFBRTtVQUMxQjtBQUNBMFksY0FBSTdjLEtBQUs2ZixDQUFDO1FBQ1gsT0FBTztBQUVOaEQsY0FBSTdjLEtBQUtxTixPQUFPO1FBQ2pCO01BQ0Q7SUFBQSxTQUFBRSxLQUFBO0FBQUF1NEIsa0JBQUE3K0IsRUFBQXNHLEdBQUE7SUFBQSxVQUFBO0FBQUF1NEIsa0JBQUF0NEIsRUFBQTtJQUFBO0FBQ0EsV0FBT3FQO0VBQ1I7QUFDQSxRQUFNc3BCLHdCQUF5QnZsQyxPQUFNO0FBQ3BDLFdBQU9BLEVBQ0xtRSxNQUFNLEdBQUcsRUFDVEksS0FBSzNMLFdBQVcsdUJBQXVCLENBQUMsRUFDeEN1TCxNQUFNLFdBQVcsRUFDakJJLEtBQUssNkJBQTZCLEVBQ2xDSixNQUFNLFlBQVksRUFDbEJJLEtBQUssT0FBTyxFQUNaSixNQUFNLFFBQVEsRUFDZEksS0FBSyx5QkFBeUIsRUFDOUJKLE1BQU0sU0FBUyxFQUNmSSxLQUFLLE9BQU87RUFDZjtBQUNBLFFBQU1paEMsZUFBZUEsQ0FBQ0MsT0FBT3psQyxNQUFNO0FBQ2xDLFdBQU9BLEVBQUVtRSxNQUFBLElBQUF4TCxPQUFVOHNDLE9BQUssR0FBQSxDQUFHLEVBQUV2ckMsU0FBUzhGLEVBQUVtRSxNQUFBLEtBQUF4TCxPQUFXOHNDLE9BQUssR0FBQSxDQUFHLEVBQUV2ckM7RUFDOUQ7QUFLQSxRQUFNOE8sc0JBQXNCQSxDQUFDaEosR0FBR2xTLFNBQVN1VCxXQUFXO0FBRW5ELFVBQU1vRCxJQUFJd2dDLHFCQUFxQmpsQyxHQUFHbFMsU0FBU3VULE1BQU07QUFDakQsUUFBSXNYLE9BQU87QUFDWCxRQUFJK3NCLFlBQVk7QUFDaEIsUUFBSUMsZUFBZTtBQUFBLFFBQUFDLGNBQUF2NUIsMkJBQ0c1SCxDQUFBLEdBQUFvaEM7QUFBQSxRQUFBO0FBQXRCLFdBQUFELFlBQUE1bEMsRUFBQSxHQUFBLEVBQUE2bEMsVUFBQUQsWUFBQXI1QixFQUFBLEdBQUFDLFFBQXlCO0FBQUEsY0FBZEMsVUFBQW81QixRQUFBbjVCO0FBQ1YsWUFBSSxPQUFPRCxZQUFZLFVBQVc7QUFDakNrTSxrQkFBUTRzQixzQkFBc0I5NEIsT0FBTztBQUNyQ2k1Qix1QkFBYUYsYUFBYSxRQUFRLzRCLE9BQU87QUFDekNrNUIsMEJBQWdCSCxhQUFhLFdBQVcvNEIsT0FBTztRQVFoRCxXQUFXQSxRQUFRK0QsU0FBUyxVQUFhL0QsUUFBUStELFNBQVMsY0FBYztBQUN2RW1JLGtCQUNDK3NCLFlBQVksS0FBS0MsaUJBQWlCLElBQUEsK0JBQUFodEMsT0FDQThULFFBQVFrTSxLQUFLLEdBQUMsT0FBQSxJQUM3Q2xNLFFBQVFrTSxLQUFLO1FBQ2xCO01BQ0Q7SUFBQSxTQUFBaE0sS0FBQTtBQUFBaTVCLGtCQUFBdi9CLEVBQUFzRyxHQUFBO0lBQUEsVUFBQTtBQUFBaTVCLGtCQUFBaDVCLEVBQUE7SUFBQTtBQUNBLFdBQU8rTDtFQUNSO0VBQ0EsTUFBTXlzQixXQUFXO0lBQ2hCbi9CLGNBQWM7QUFDYixXQUFLdUssT0FBTztJQUNiO0lBQ0FtSSxPQUFPO0FBQ04sV0FBS210QixVQUFVO0FBQ2YsV0FBS0MsaUJBQWlCO0FBQ3RCLFVBQUlwdEIsT0FBTztBQUNYLFVBQUk0UjtBQUNKLFVBQUlDO0FBQ0osWUFBTXdiLFVBQVU7QUFDaEIsVUFBSUEsU0FBUztBQUNaemIsa0JBQUEsSUFBQTV4QixPQUFjcXRDLFNBQU8sZ0JBQUEsRUFBQXJ0QyxPQUFpQixLQUFLNEssSUFBRSxJQUFBO0FBQzdDaW5CLGtCQUFBLEtBQUE3eEIsT0FBZXF0QyxTQUFPLEdBQUE7TUFDdkIsT0FBTztBQUNOemIsa0JBQVU7QUFDVkMsa0JBQVU7TUFDWDtBQUNBLFVBQUksT0FBTyxLQUFLeWIsVUFBVSxZQUFZO0FBQ3JDdHRCLGVBQU8sS0FBS3N0QixNQUFNLElBQUk7QUFDdEIsWUFBSSxPQUFPdHRCLFNBQVMsVUFBVztBQUM5QkEsaUJBQU87UUFDUixXQUFXLEtBQUt1dEIsYUFBYSxRQUFXO0FBQ3ZDdnRCLGlCQUFPd3RCLGlCQUFpQnh0QixNQUFNLEtBQUt1dEIsUUFBUTtRQUM1QztNQUNELE9BQU87QUFDTmhqQixlQUFBLHlEQUFBdnFCLE9BQWdFLEtBQUs0SyxFQUFFLENBQUU7TUFDMUU7QUFDQSxhQUFPZ25CLFVBQVU1UixPQUFPNlI7SUFDekI7SUFDQXNiLFlBQVk7QUFDWGx0QyxpQkFBVyxxQkFBcUI7QUFDaEMsVUFBSXZCLEdBQUdNLE9BQU95dUMsb0JBQW9CLEtBQUs3aUMsRUFBRSxNQUFNLFFBQVc7QUFDekQsYUFBSzhpQyxTQUFTO01BQ2Y7QUFDQSxXQUFLQSxTQUFTaHZDLEdBQUdNLE9BQU95dUMsb0JBQW9CLEtBQUs3aUMsRUFBRTtJQUNwRDtJQUNBd2lDLG1CQUFtQjtBQUdsQixVQUFJLE9BQU8sS0FBS3hpQyxPQUFPLFlBQWEsT0FBTyxLQUFLelYsWUFBWSxPQUFPLENBQUMsR0FBRztBQUN0RTtNQUNEO0FBQ0EsV0FBS3c0QyxVQUFVO0FBQ2YsY0FBUSxLQUFLL2lDLElBQUE7UUFDWixLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztBQUNKLGVBQUsraUMsVUFBVTtNQUNqQjtBQUNBLGNBQVEsS0FBSy9pQyxJQUFBO1FBQ1osS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztBQUNKLGVBQUt6VixVQUFVLEtBQUtBLFFBQVFreEIsU0FBUztNQUN2QztBQUNBLGNBQVEsS0FBS3piLElBQUE7UUFDWixLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztBQUNKLGVBQUt6VixVQUFVLEtBQUtBLFFBQVFreEIsU0FBUyxJQUFJOztRQUUxQyxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7QUFDSixpQkFBTyxLQUFLemQ7TUFDZDtBQUNBLFVBQUksS0FBS2dDLE9BQU8sWUFBWTtBQUUzQixhQUFLelYsVUFBVSxLQUFLQSxRQUFRbXlCLGFBQWE7TUFFMUM7QUFDQSxjQUFRLEtBQUsxYyxJQUFBO1FBQ1osS0FBSztBQUNKLGVBQUswaUMsUUFBUU07QUFDYixlQUFLM0MsY0FBYztBQUNuQixlQUFLejJCLE1BQU07QUFDWDtRQUNELEtBQUs7QUFDSixlQUFLODRCLFFBQVFNO0FBQ2IsZUFBSzNDLGNBQWM7QUFDbkI7UUFDRCxLQUFLO0FBQ0osZUFBS3FDLFFBQVFNO0FBQ2IsZUFBSzNDLGNBQWM7QUFDbkI7UUFDRCxLQUFLO0FBQ0osZUFBS3FDLFFBQVFNO0FBQ2IsZUFBSzNDLGNBQWM7QUFDbkI7UUFDRCxLQUFLO0FBQ0osZUFBS3FDLFFBQVFNO0FBQ2IsZUFBSzNDLGNBQWM7QUFDbkI7UUFDRCxLQUFLO0FBQ0osZUFBS3FDLFFBQVFNO0FBQ2IsZUFBSzNDLGNBQWM7QUFDbkI7UUFDRCxLQUFLO0FBQ0osZUFBS3FDLFFBQVFNO0FBQ2IsZUFBSzNDLGNBQWM7QUFDbkIsZUFBS3oyQixNQUFNO0FBQ1g7UUFDRCxLQUFLO0FBQ0osZUFBSzg0QixRQUFRTTtBQUNiLGVBQUszQyxjQUFjO0FBQ25CLGVBQUt6MkIsTUFBTTtBQUNYO1FBQ0QsS0FBSztBQUNKLGVBQUs4NEIsUUFBUU07QUFDYixlQUFLM0MsY0FBYztBQUNuQixlQUFLejJCLE1BQU07QUFDWDtRQUNELEtBQUs7QUFDSixlQUFLODRCLFFBQVFNO0FBQ2IsZUFBSzNDLGNBQWM7QUFDbkIsZUFBS3oyQixNQUFNO0FBQ1g7UUFDRCxLQUFLO0FBQ0osZUFBSzg0QixRQUFRTTtBQUNiLGVBQUszQyxjQUFjO0FBQ25CLGVBQUt6MkIsTUFBTTtBQUNYO1FBQ0QsS0FBSztBQUNKLGVBQUs4NEIsUUFBUU07QUFDYixlQUFLM0MsY0FBYztBQUNuQixlQUFLejJCLE1BQU07QUFDWDtRQUNELEtBQUs7QUFDSixlQUFLODRCLFFBQVFNO0FBQ2IsZUFBSzNDLGNBQWM7QUFDbkIsZUFBS3oyQixNQUFNO0FBQ1g7UUFDRCxLQUFLO0FBQ0osZUFBSzg0QixRQUFRTTtBQUNiLGVBQUszQyxjQUFjO0FBQ25CLGVBQUt6MkIsTUFBTTtBQUNYO1FBQ0QsS0FBSztBQUNKLGVBQUs4NEIsUUFBUU07QUFDYixlQUFLM0MsY0FBYztBQUNuQixlQUFLejJCLE1BQU07QUFDWDtRQUNELEtBQUs7QUFDSixlQUFLODRCLFFBQVFNO0FBQ2IsZUFBSzNDLGNBQWM7QUFDbkIsZUFBS3oyQixNQUFNO0FBQ1g7UUFDRCxLQUFLO0FBQ0osZUFBSzg0QixRQUFRTTtBQUNiLGVBQUszQyxjQUFjO0FBQ25CLGVBQUt6MkIsTUFBTTtBQUNYLGVBQUtyZixRQUFRNGUsUUFBUSxLQUFLNVYsU0FBUyxTQUFTLEtBQUt5SyxRQUFRLEtBQUt6SztBQUM5RDtRQUNELEtBQUs7UUFDTCxLQUFLO0FBQ0osZUFBS212QyxRQUFRTztBQUNiLGVBQUs3cEMsU0FBQSxHQUFBaEUsT0FBWSxLQUFLNEssSUFBRSw0QkFBQSxFQUFBNUssT0FBNkJ5SCxZQUNwRCxrQkFDRCxHQUFDLFdBQUEsRUFBQXpILE9BQVk2VixlQUFlLENBQUM7QUFDN0I7UUFDRCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO0FBQ0osZUFBS3kzQixRQUFRaHlDO0FBQ2IsZUFBSzBJLFNBQVMsS0FBSzRHO0FBQ25CO1FBQ0QsS0FBSztBQUNKLGVBQUswaUMsUUFBUWh5QztBQUNiLGVBQUswSSxTQUFTO0FBQ2QsY0FBSSxLQUFLN08sUUFBUThULFlBQVksTUFBTXZLLEdBQUd3SyxXQUFXO0FBQ2hELGtCQUFNdzFCLE1BQU0sS0FBS3ZwQyxRQUFRbXdCLGVBQWU7QUFDeEMsaUJBQUt0aEIsVUFBQSxVQUFBaEUsT0FBb0IwK0IsR0FBRztVQUM3QjtBQUNBO1FBQ0QsS0FBSztRQUNMLEtBQUs7QUFFSixpQkFBTyxLQUFLOTFCOztRQUViLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztBQUNKLGVBQUswa0MsUUFBUWh5QztBQUNiLGVBQUswSSxTQUFTLEtBQUs0RztBQUNuQjtRQUNELEtBQUs7QUFDSixlQUFLMGlDLFFBQVFoeUM7QUFDYixlQUFLMEksU0FBUztBQUNkO1FBQ0QsS0FBSztBQUNKLGVBQUtzcEMsUUFBUWh5QztBQUNiLGVBQUswSSxTQUFTO0FBQ2Q7UUFDRCxLQUFLO0FBQ0osY0FBSSxLQUFLc29CLFNBQVMsUUFBVztBQUM1QixpQkFBS0EsT0FBTyxLQUFLbjNCLFFBQVE2UCxTQUFTLEVBQUV1RyxPQUFPO1VBQzVDO0FBQ0EsY0FBSXRMLFdBQVcsdUJBQXVCLEtBQUtrb0Isd0JBQXdCLEtBQUtoekIsT0FBTyxHQUFHO0FBRWpGLGtCQUFNa1MsSUFBSSxLQUFLaWxCLEtBQUs5Z0IsTUFBTSxHQUFHO0FBQzdCLGlCQUFLOGdCLE9BQU9qbEIsRUFBRTJXLEdBQUcsRUFBRTtBQUNuQixnQkFBSSxLQUFLc08sU0FBUyxNQUFNamxCLEVBQUU5RixTQUFTLEdBQUc7QUFDckMsbUJBQUsrcUIsT0FBT2psQixFQUFFMlcsR0FBRyxFQUFFO1lBQ3BCO1VBQ0Q7QUFDQSxlQUFLc3ZCLFFBQVFRO0FBQ2IsY0FBSSxLQUFLanJDLFVBQVUsVUFBYW5FLEdBQUdhLFFBQVEwRyxRQUFRdkgsR0FBR2EsUUFBUTBHLEtBQUtwRSxTQUFTLFFBQVc7QUFBQSxnQkFBQWtzQztBQUN0RixpQkFBS2xyQyxRQUFRcWpCLGVBQUE2bkIsd0JBQWNydkMsR0FBR2EsUUFBUTBHLEtBQUtyRCxtQkFBQSxRQUFBbXJDLDBCQUFBLFNBQUFBLHdCQUFpQixLQUFLNTRDLE9BQU87QUFDeEUsZ0JBQUksS0FBS3lULFVBQVUsVUFBYSxLQUFLQSxPQUFPO0FBQzNDLG1CQUFLL0YsUUFBUTJVLFFBQVEscUJBQXFCLENBQUMsS0FBSzVPLE9BQU8sS0FBSy9GLEtBQUssQ0FBQztZQUNuRTtVQUNEO0FBQ0EsZUFBS21CLFNBQVM7QUFDZDtRQUNELEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztBQUNKLGlCQUFPLEtBQUs0RTtBQUVaLGVBQUt6VCxVQUFVLEtBQUtBLFFBQVEweEIseUJBQXlCO0FBRXJELGVBQUt5bUIsUUFBUWh5QztBQUNiLGVBQUswSSxTQUFTLEtBQUs0RyxHQUFHbUMsUUFBUSxNQUFNLE1BQU0sSUFBSSxTQUFTO0FBQ3ZEO1FBQ0QsS0FBSztRQUNMLEtBQUs7QUFDSixlQUFLNVgsVUFBVSxLQUFLQSxRQUFRc3hCLFNBQVM7QUFDckMsaUJBQU8sS0FBSzdkO0FBQ1osZUFBSzBrQyxRQUFRaHlDO0FBQ2IsZUFBSzBJLFNBQVM7QUFDZDtRQUNELEtBQUs7QUFDSixlQUFLc3BDLFFBQVFVO0FBQ2I7UUFDRCxLQUFLO0FBQ0osZUFBS1YsUUFBUVc7QUFDYjtRQUNELEtBQUs7QUFDSixlQUFLWCxRQUFRWTtBQUNiO1FBQ0QsS0FBSztBQUNKLGVBQUtaLFFBQVFhO0FBQ2IsZUFBS3RyQyxRQUFRNEUsWUFBWSxvQkFBb0I7QUFDN0MsZUFBSzJMLE9BQU87QUFDWixlQUFLRSxLQUFLO0FBQ1Y7UUFDRCxLQUFLO0FBQ0osZUFBS2c2QixRQUFRYTtBQUNiLGVBQUt0ckMsUUFBQSxHQUFBN0MsT0FBV3lILFlBQVksb0NBQW9DLEdBQUMsR0FBQSxFQUFBekgsT0FBSSxLQUFLNEksS0FBSztBQUMvRSxlQUFLd0ssT0FBTztBQUNaLGVBQUtFLEtBQUssS0FBSzFLO0FBQ2Y7UUFDRCxLQUFLO0FBQ0osZUFBSzBrQyxRQUFRaHlDO0FBQ2IsZUFBSzBJLFNBQVM7QUFDZDtRQUNELEtBQUs7QUFDSixlQUFLc3BDLFFBQVFoeUM7QUFDYixlQUFLMEksU0FBUztBQUNkO1FBQ0QsS0FBSztBQUNKLGVBQUtzcEMsUUFBUWh5QztBQUNiLGVBQUswSSxTQUFTO0FBQ2Q7UUFDRCxLQUFLO0FBQ0osZUFBS3NwQyxRQUFRaHlDO0FBQ2IsZUFBSzBJLFNBQVM7QUFDZDtRQUNELEtBQUs7QUFDSixlQUFLc3BDLFFBQVFhO0FBQ2IsZUFBS3RyQyxRQUFRMlUsUUFBUSxrQ0FBa0MsQ0FBQyxLQUFLNU8sS0FBSyxDQUFDO0FBQ25FLGVBQUt3SyxPQUFPLEtBQUt4SztBQUNqQixlQUFLMEssS0FBSztBQUNWO1FBQ0QsS0FBSztRQUNMLEtBQUs7QUFDSixpQkFBTyxLQUFLMUs7QUFDWixlQUFLelQsVUFBVSxLQUFLQSxRQUFRc3hCLFNBQVM7QUFDckMsZUFBS3ppQixTQUFTO0FBQ2QsZUFBS3NwQyxRQUFRaHlDO0FBQ2I7UUFDRCxLQUFLO1FBQ0wsS0FBSztBQUNKLGVBQUtuRyxVQUFVLEtBQUtBLFFBQVFzeEIsU0FBUztBQUNyQyxlQUFLemlCLFNBQVM7QUFDZCxlQUFLc3BDLFFBQVFoeUM7QUFDYjtRQUNELEtBQUs7UUFDTCxLQUFLO0FBQ0osZUFBS2d5QyxRQUFRYztBQUNiO1FBQ0QsS0FBSztBQUNKLGVBQUs5aEIsT0FBTzdrQixZQUFZL0ksR0FBR00sT0FBT3F2QyxlQUFlLG9CQUFvQixrQkFBa0I7O1FBRXhGLEtBQUs7UUFDTCxLQUFLO0FBQ0osZUFBS2YsUUFBUWdCO0FBQ2I7UUFDRDtBQUNDLGVBQUtoQixRQUFRLFdBQVk7QUFDeEIsbUJBQUEseUJBQUF0dEMsT0FBZ0MsS0FBSzRLLEVBQUU7VUFDeEM7TUFDRjtJQUNEO0VBQ0Q7QUFLQSxRQUFNMmpDLHNCQUFzQixTQUFTQyxxQkFBb0IxcUMsS0FBSztBQUFBLFFBQUEycUM7QUFDN0QsVUFBTUMsVUFBVXQ1QyxPQUFPMk8sUUFBUTNPLE9BQU8yTyxNQUFNMnFDLFdBQUFELGVBQVczcUMsSUFBSTRxQyxhQUFBLFFBQUFELGlCQUFBLFNBQUFBLGVBQVczcUMsSUFBSTZxQztBQUMxRSxRQUFJLENBQUNELFdBQVcsQ0FBQ2h3QyxHQUFHYSxRQUFRMEcsUUFBUSxDQUFDdkgsR0FBR2EsUUFBUTBHLEtBQUtDLFVBQVU7QUFDOUQ7SUFDRDtBQUNBLFFBQUl3b0MsWUFBWSxJQUFJO0FBRW5CaHNDLGdCQUFVO0FBQ1YsYUFBTztJQUNSO0FBQ0EsVUFBTWtzQyxTQUFTbmpDLE9BQU9vakMsY0FBY0gsT0FBTztBQUMzQyxVQUFNbG9DLFFBQVE5SCxHQUFHYSxRQUFRMEcsS0FBS0MsU0FBUzlDLFFBQVExQyxpQkFBaUIsR0FBRztBQUNuRSxRQUFJb3VDLFlBQVk7QUFDaEIsUUFBSTdoQztBQUNKLFFBQUl6TDtBQUNKLFFBQUlndEMscUJBQW9CTyx1QkFBdUI7QUFDOUMsV0FBSzloQyxJQUFJLEdBQUdBLElBQUl6RyxNQUFNakYsUUFBUSxFQUFFMEwsR0FBRztBQUNsQyxZQUFJekcsTUFBTXlHLENBQUMsTUFBTXVoQyxxQkFBb0JPLHVCQUF1QjtBQUMzREQsc0JBQVk3aEM7UUFDYjtNQUNEO0lBQ0Q7QUFDQSxTQUFLekwsSUFBSSxHQUFHQSxJQUFJZ0YsTUFBTWpGLFFBQVEsRUFBRUMsR0FBRztBQUNsQ3lMLFdBQUs2aEMsWUFBWXR0QyxJQUFJLEtBQUtnRixNQUFNakY7QUFDaEMsVUFBSWlGLE1BQU15RyxDQUFDLEVBQUUyYixhQUFhLFVBQVUsTUFBTWdtQixRQUFRO0FBQ2pELFlBQUk5cUMsT0FBT0EsSUFBSWtyQyxnQkFBZ0I7QUFDOUJsckMsY0FBSWtyQyxlQUFlO1FBQ3BCO0FBQ0F4b0MsY0FBTXlHLENBQUMsRUFBRWdpQyxNQUFNO0FBQ2ZULDZCQUFvQk8sd0JBQXdCdm9DLE1BQU15RyxDQUFDO0FBQ25ELGVBQU87TUFDUjtJQUNEO0FBRUEsUUFBSS9NLFNBQVNndkMsb0JBQW9CO0FBQ2hDLGFBQU9odkMsU0FBU2d2QyxtQkFBbUJwckMsR0FBRztJQUN2QztBQUNBLFdBQU87RUFDUjtBQUNBLFFBQU1OLG9CQUFvQkEsTUFBTTtBQUMvQixRQUFJdEQsU0FBU2l2QyxlQUFlWixxQkFBcUI7QUFDaERydUMsZUFBU2d2QyxxQkFBcUJodkMsU0FBU2l2QztJQUN4QztBQUNBanZDLGFBQVNpdkMsYUFBYVo7RUFDdkI7QUFDQSxRQUFNOXFDLG1CQUFtQkEsTUFBTTtBQUM5QjhxQyx3QkFBb0JRLHdCQUF3QjtBQUM1QyxRQUFJO0FBQ0gsVUFBSTd1QyxTQUFTZ3ZDLHNCQUFzQmh2QyxTQUFTZ3ZDLHVCQUF1QlgscUJBQXFCO0FBRXZGcnVDLGlCQUFTaXZDLGFBQWE7QUFDdEI7TUFDRDtBQUNBanZDLGVBQVNpdkMsYUFBYWp2QyxTQUFTZ3ZDO0lBQ2hDLFFBQVE7SUFFUjtFQUNEO0FBQ0EsUUFBTUUsa0JBQWtCQSxDQUFDcHZCLE1BQU1xdkIsYUFBYTtBQUczQyxVQUFNcGlDLElBQUkrUyxLQUFLalQsUUFBUSxHQUFHO0FBQzFCLFFBQUlFLE1BQU0sSUFBSTtBQUNiLGFBQU8rUztJQUNSO0FBQ0EsV0FBQSxHQUFBaGdCLE9BQVVnZ0IsS0FBS25ULE1BQU0sR0FBR3hMLEtBQUt5TCxJQUFJLEdBQUdHLENBQUMsQ0FBQyxHQUFDLEdBQUEsRUFBQWpOLE9BQUlxdkMsUUFBUSxFQUFBcnZDLE9BQUdnZ0IsS0FBS25ULE1BQU14TCxLQUFLeUwsSUFBSSxHQUFHRyxDQUFDLENBQUMsQ0FBQztFQUNqRjtBQUNBLFFBQU11Z0MsbUJBQW1CQSxDQUFDeHRCLE1BQU0vYixRQUFRO0FBQ3ZDLFFBQUksQ0FBQ2hFLFdBQVcsbUJBQW1CLEdBQUc7QUFDckMsYUFBTytmO0lBQ1I7QUFDQSxVQUFNc0QsTUFBTThyQixnQkFBZ0JwdkIsTUFBQSxhQUFBaGdCLE9BQW1CaUUsS0FBRyxHQUFBLENBQUc7QUFDckQsUUFBSUEsUUFBUSxLQUFLO0FBQ2hCQSxZQUFNd0QsWUFBWSxVQUFVO0lBQzdCO0FBQ0EsV0FBTzZiLElBQUkzVyxRQUFRLCtCQUFBLFdBQUEzTSxPQUEwQ2lFLEtBQUcsS0FBQSxDQUFLO0VBQ3RFO0FBSUEsUUFBTTZFLFdBQVdBLENBQUMzVCxTQUFTeVQsT0FBT0gsT0FBTWhELFdBQVc7QUFDbERBLFdBQU82cEMsV0FBVztNQUNqQkMsUUFBUSxDQUFDO01BQ1RDLFFBQVEsQ0FBQztJQUNWO0FBQ0EsVUFBTUMsT0FBTS9VLFNBQVM7QUFDckIsVUFBTWh5QixTQUFTO01BQ2QxRSxRQUFRO01BQ1JnTixNQUFNLENBQUMsT0FBTyxPQUFPO01BQ3JCeTRCLFNBQVM7TUFDVEMsUUFBUTtJQUNUO0FBQ0EsUUFBSXYwQyxRQUFRME4sT0FBTztBQUNsQjZGLGFBQU9nbkMsWUFBWXY2QyxRQUFRME47SUFDNUI7QUFDQSxZQUFRNEYsT0FBQTtNQUNQLEtBQUs7QUFDSixnQkFBUUcsT0FBQTtVQUNQLEtBQUs7VUFDTCxLQUFLO1VBQ0wsS0FBSztBQUdKRixtQkFBT2luQyxhQUFhO0FBQ3BCO1VBQ0Q7QUFDQ2puQyxtQkFBT2tuQyxVQUFVaG5DO0FBQ2pCRixtQkFBT2luQyxhQUFhO0FBQ3BCO1FBQ0Y7QUFDQTtNQUNELEtBQUs7QUFDSixZQUFJL21DLE9BQU87QUFDVkYsaUJBQU9rbkMsVUFBVWhuQztRQUNsQjtBQUNBRixlQUFPaW5DLGFBQWE7QUFDcEI7TUFDRCxLQUFLO0FBQ0pqbkMsZUFBT2tuQyxVQUFVaG5DLFNBQVM7QUFDMUJGLGVBQU9pbkMsYUFBYTtBQUNwQjtNQUNEO0FBQ0NqbkMsZUFBT2tuQyxVQUFVaG5DLFNBQVM7QUFDMUJGLGVBQU9tbkMsUUFBUXBuQyxTQUFRO0FBQ3ZCO0lBQ0Y7QUFDQWduQyxTQUFJNXpCLElBQUluVCxNQUFNLEVBQUU0dEIsS0FBTTdyQixVQUFTO0FBQzlCaEYsYUFBTzZwQyxTQUFTQyxPQUFPNzJCLFFBQVFqTyxLQUFLcWxDLFFBQVFDO0FBQzVDdHFDLGFBQU82cEMsU0FBU0UsT0FBTzkyQixRQUFRak8sS0FBS3FsQyxRQUFRRTtBQUM1Q0Msb0JBQWN4cUMsUUFBUSxnQkFBZ0I7QUFDdEMsWUFBTSt3QixLQUFLQSxNQUFNO0FBQ2hCL3NCLDBCQUFrQmhFLE1BQU07QUFDeEIsWUFBSThRLE1BQUEsR0FBQXZXLE9BQVN0QixHQUFHSSxLQUFLMFgsYUFBVyw0Q0FBQTtBQUNoQ0QsZUFBQSxVQUFBdlcsT0FBaUJ5RixPQUFPNnBDLFNBQVNDLE9BQU83MkIsT0FBSyxHQUFBLEVBQUExWSxPQUFJeUYsT0FBTzZwQyxTQUFTRSxPQUFPOTJCLEtBQUs7QUFDN0VuQyxlQUFPO0FBQ1BtVCwyQkFBbUJuVCxLQUFLMjVCLFVBQVV6cUMsTUFBTTtBQUN4QyxlQUFPO01BQ1I7QUFDQSxVQUFJQSxPQUFPaUYsV0FBVyxDQUFDekssV0FBVyxvQkFBb0IsR0FBRztBQUN4RHUyQixXQUFHO01BQ0osT0FBTztBQUNOL3dCLGVBQU9sQyxRQUFRaXpCLElBQUksVUFBVSxVQUFVLGdCQUFnQjtNQUN4RDtJQUNELENBQUM7RUFDRjtBQUdBLFFBQU15WixnQkFBZ0JBLENBQUN4cUMsUUFBUXVFLFdBQVc7QUFDekMsUUFBSSxDQUFDdEwsR0FBRzNDLEtBQUtrdEMsV0FBVztBQUN2QjtJQUNEO0FBRUEsUUFBSXhqQyxPQUFPNnBDLFNBQVNFLE9BQU85MkIsU0FBU2pULE9BQU82cEMsU0FBU0MsT0FBTzcyQixPQUFPO0FBQ2pFO0lBQ0Q7QUFDQSxVQUFNaFEsU0FBUztNQUNkMUUsUUFBUTtNQUNSb2xDLFFBQVE7TUFDUkMsZUFBZTtNQUNmcjRCLE1BQU0sQ0FBQyxRQUFRLFNBQVM7TUFDeEJtL0IsUUFBUTFxQyxPQUFPNnBDLFNBQVNDLE9BQU83MkI7SUFDaEM7QUFDQWdpQixhQUFTLEVBQ1A3ZSxJQUFJblQsTUFBTSxFQUNWNHRCLEtBQU03ckIsVUFBUztBQUNmLFlBQU0ybEMsZUFBZ0IzbEMsS0FBSzZOLE1BQU1DLE1BQU0sQ0FBQyxFQUFFODNCLFdBQVc1bEMsS0FBSzZOLE1BQU1DLE1BQU0sQ0FBQyxFQUFFODNCLFFBQVFELGdCQUFpQjtBQUtsRyxVQUFJQSxpQkFBaUIzcUMsT0FBTzZwQyxTQUFTQyxPQUFPNzJCLE9BQU87QUFDbEQsY0FBTTlXLElBQUkxQixTQUFTaUgsY0FBYyxHQUFHO0FBQ3BDdkYsVUFBRStELFlBQVk4QixZQUFZLGdCQUFnQjtBQUMxQzdGLFVBQUVpQixRQUFRNEUsWUFBWSxtQkFBbUI7QUFDekM3RixVQUFFNHpCLFVBQVUsTUFBTTtBQUNqQixnQkFBTThhLFVBQVM7WUFDZHRzQyxRQUFRO1lBQ1I2MEIsU0FBU3JoQixRQUFRLCtCQUErQixDQUMvQy9SLE9BQU82cEMsU0FBU0MsT0FBTzcyQixPQUN2QmpULE9BQU82cEMsU0FBU0UsT0FBTzkyQixLQUFBLENBQ3ZCO1lBQ0RBLE9BQU9qVCxPQUFPNnBDLFNBQVNFLE9BQU85MkI7VUFDL0I7QUFDQWdpQixtQkFBUyxFQUNQNlYsY0FBYyxRQUFRRCxPQUFNLEVBQzVCejhCLEtBQUssTUFBTTtBQUNYalMsY0FBRXlCLE1BQU1rRSxVQUFVO1VBRW5CLENBQUMsRUFDQWlwQyxLQUFLLE1BQU07QUFDWCxpQkFBS2w3QixHQUFHcUMsT0FBT2xRLFlBQVkseUNBQXlDLEdBQUc7Y0FDdEVtUSxLQUFLO2NBQ0xDLE1BQU07WUFDUCxDQUFDO1VBQ0YsQ0FBQztRQUNIO0FBQ0FuUyxxQkFBYTlELEdBQUdvSSxRQUFRdkUsT0FBT0csVUFBVSxNQUFNLElBQUk7TUFDcEQ7SUFDRCxDQUFDO0VBQ0g7QUFDQSxRQUFNc3FDLFdBQVk1bEMsY0FBYTtBQUM5QixRQUFJLENBQUNBLFNBQVNoQyxTQUFTLENBQUNnQyxTQUFTaEMsTUFBTWduQyxVQUFVO0FBQ2hEO0lBQ0Q7QUFDQSxVQUFNN3BDLFNBQVM2RSxTQUFTaEM7QUFDeEJvQix3QkFBb0JqRSxNQUFNO0FBQzFCLFFBQUk4UztBQUNKLFFBQUlDLFlBQVksQ0FBQTtBQUNoQixRQUFJO0FBRUgsT0FBQztRQUFDRDtNQUFLLElBQUlILFNBQVM5TixTQUFTRyxJQUFJLEVBQUU2TjtBQUFBLFVBQUFtNEIsY0FBQS84QiwyQkFDaEI2RSxLQUFBLEdBQUFtNEI7QUFBQSxVQUFBO0FBQW5CLGFBQUFELFlBQUFwcEMsRUFBQSxHQUFBLEVBQUFxcEMsVUFBQUQsWUFBQTc4QixFQUFBLEdBQUFDLFFBQTBCO0FBQUEsZ0JBQWZtVyxPQUFBMG1CLFFBQUEzOEI7QUFDVnlFLHNCQUFZLENBQUMsR0FBR0EsV0FBVyxHQUFHd1IsS0FBS3hSLFNBQVM7UUFDN0M7TUFBQSxTQUFBeEUsS0FBQTtBQUFBeThCLG9CQUFBL2lDLEVBQUFzRyxHQUFBO01BQUEsVUFBQTtBQUFBeThCLG9CQUFBeDhCLEVBQUE7TUFBQTtBQUNBLGVBQUEwOEIsTUFBQSxHQUFBQyxhQUF1QnA0QixXQUFBbTRCLE1BQUFDLFdBQUFydkMsUUFBQW92QyxPQUFXO0FBQWxDLGNBQVdFLFdBQUFELFdBQUFELEdBQUE7QUFDVixZQUFJRSxTQUFTbjRCLFVBQVVqVCxPQUFPNnBDLFNBQVNDLE9BQU83MkIsT0FBTztBQUNwRGpULGlCQUFPNnBDLFNBQVNDLE9BQU9zQixXQUFXQTtRQUNuQyxXQUFXQSxTQUFTbjRCLFVBQVVqVCxPQUFPNnBDLFNBQVNFLE9BQU85MkIsT0FBTztBQUMzRGpULGlCQUFPNnBDLFNBQVNFLE9BQU9xQixXQUFXQTtRQUNuQztNQUNEO0lBQ0QsUUFBUTtBQUNQdG1CLGFBQU8sb0JBQW9CO0lBQzVCO0FBQ0F1bUIsZUFBV3JyQyxNQUFNO0VBQ2xCO0FBQ0EsUUFBTXNyQyxnQkFBZ0JBLENBQUNudkMsR0FBR3NiLEdBQUdtcUIsWUFBWTtBQUN4QyxRQUFJQSxZQUFZLFFBQVc7QUFDMUJBLGdCQUFVO0lBQ1g7QUFFQSxVQUFNbGxCLEtBQUssQ0FBQTtBQUNYLFVBQU02dUIsTUFBTSxDQUFBO0FBQ1osVUFBTUMsS0FBSyxDQUFBO0FBQ1gsVUFBTUMsTUFBTSxDQUFBO0FBQ1osUUFBSWprQztBQUNKLFFBQUl6TDtBQUVKLFNBQUt5TCxJQUFJLEdBQUdBLElBQUlyTCxFQUFFTCxRQUFRLEVBQUUwTCxHQUFHO0FBQzlCLFVBQUksQ0FBQ3JMLEVBQUVxTCxDQUFDLEVBQUUyNkIsUUFBUTtBQUNqQnpsQixXQUFHbFYsQ0FBQyxJQUFJO01BQ1QsV0FBVzY1QixlQUFlNXBCLEdBQUd0YixHQUFHcUwsR0FBRyxJQUFJLEdBQUc7QUFDekNrVixXQUFHbFYsQ0FBQyxJQUFJO0FBQ1Jna0MsV0FBR3J2QyxFQUFFcUwsQ0FBQyxFQUFFKzVCLEdBQUcsSUFBSTtNQUNoQjtJQUNEO0FBRUEsU0FBSy81QixJQUFJLEdBQUdBLElBQUlpUSxFQUFFM2IsUUFBUSxFQUFFMEwsR0FBRztBQUM5QixVQUFJZ2tDLEdBQUdoa0MsQ0FBQyxNQUFNLEdBQUc7QUFDaEI7TUFDRDtBQUNBLFVBQUksQ0FBQ2lRLEVBQUVqUSxDQUFDLEVBQUUyNkIsUUFBUTtBQUNqQnFKLFdBQUdoa0MsQ0FBQyxJQUFJO01BQ1Q7SUFDRDtBQUlBLFNBQUtBLElBQUksR0FBR0EsSUFBSWlRLEVBQUUzYixRQUFRLEVBQUUwTCxHQUFHO0FBQzlCLFVBQUlna0MsR0FBR2hrQyxDQUFDLE1BQU0sR0FBRztBQUNoQixhQUFLekwsSUFBSUgsS0FBS3lMLElBQUksR0FBR0csSUFBSW82QixPQUFPLEdBQUc3bEMsSUFBSUgsS0FBS0MsSUFBSTRiLEVBQUUzYixRQUFRMEwsSUFBSW82QixPQUFPLEdBQUcsRUFBRTdsQyxHQUFHO0FBQzVFLGNBQUksQ0FBQ3l2QyxHQUFHenZDLENBQUMsR0FBRztBQUNYeXZDLGVBQUd6dkMsQ0FBQyxJQUFJO0FBQ1IyZ0IsZUFBR2pGLEVBQUUxYixDQUFDLEVBQUV3bEMsR0FBRyxJQUFJO1VBQ2hCO1FBQ0Q7TUFDRDtJQUNEO0FBQ0EsU0FBSy81QixJQUFJLEdBQUdBLElBQUlyTCxFQUFFTCxRQUFRLEVBQUUwTCxHQUFHO0FBQzlCLFVBQUlrVixHQUFHbFYsQ0FBQyxNQUFNLEdBQUc7QUFDaEIsYUFBS3pMLElBQUlILEtBQUt5TCxJQUFJLEdBQUdHLElBQUlvNkIsT0FBTyxHQUFHN2xDLElBQUlILEtBQUtDLElBQUlNLEVBQUVMLFFBQVEwTCxJQUFJbzZCLE9BQU8sR0FBRyxFQUFFN2xDLEdBQUc7QUFDNUUsY0FBSSxDQUFDMmdCLEdBQUczZ0IsQ0FBQyxHQUFHO0FBQ1gyZ0IsZUFBRzNnQixDQUFDLElBQUk7QUFDUnl2QyxlQUFHcnZDLEVBQUVKLENBQUMsRUFBRXdsQyxHQUFHLElBQUk7VUFDaEI7UUFDRDtNQUNEO0lBQ0Q7QUFDQSxTQUFLLzVCLElBQUksR0FBR0EsSUFBSWdrQyxHQUFHMXZDLFFBQVEsRUFBRTBMLEdBQUc7QUFDL0IsVUFBSWdrQyxHQUFHaGtDLENBQUMsSUFBSSxHQUFHO0FBRWQsWUFBSWlRLEVBQUVqUSxDQUFDLEVBQUUyNkIsUUFBUTtBQUNoQnNKLGNBQUl6cUMsS0FBS3lXLEVBQUVqUSxDQUFDLEVBQUVxZixJQUFJO1FBQ25CLE9BQU87QUFDTjRrQixjQUFJenFDLEtBQUt5VyxFQUFFalEsQ0FBQyxDQUFDO1FBQ2Q7TUFDRDtJQUNEO0FBQ0EsU0FBS0EsSUFBSSxHQUFHQSxJQUFJa1YsR0FBRzVnQixRQUFRLEVBQUUwTCxHQUFHO0FBQy9CLFVBQUlrVixHQUFHbFYsQ0FBQyxJQUFJLEdBQUc7QUFFZCxZQUFJckwsRUFBRXFMLENBQUMsRUFBRTI2QixRQUFRO0FBQ2hCb0osY0FBSXZxQyxLQUFLN0UsRUFBRXFMLENBQUMsRUFBRXFmLElBQUk7UUFDbkIsT0FBTztBQUVOMGtCLGNBQUl2cUMsS0FBSzdFLEVBQUVxTCxDQUFDLENBQUM7UUFDZDtNQUNEO0lBQ0Q7QUFDQSxXQUFPO01BQ05yTCxHQUFHb3ZDO01BQ0g5ekIsR0FBR2cwQjtJQUNKO0VBQ0Q7QUFDQSxRQUFNQyx3QkFBd0JBLENBQUN2dkMsR0FBR3NiLEdBQUdtcUIsWUFBWTtBQUNoRCxRQUFJcDZCLElBQUk7QUFDUixXQUFPQSxJQUFJckwsRUFBRUwsVUFBVTBMLElBQUlpUSxFQUFFM2IsVUFBVUssRUFBRXFMLENBQUMsTUFBTWlRLEVBQUVqUSxDQUFDLEdBQUc7QUFDckQsUUFBRUE7SUFDSDtBQUNBLFFBQUl6TCxJQUFJSSxFQUFFTCxTQUFTO0FBQ25CLFFBQUkyd0IsSUFBSWhWLEVBQUUzYixTQUFTO0FBQ25CLFdBQU9DLEtBQUssS0FBSzB3QixLQUFLLEtBQUt0d0IsRUFBRUosQ0FBQyxNQUFNMGIsRUFBRWdWLENBQUMsR0FBRztBQUN6QyxRQUFFMXdCO0FBQ0YsUUFBRTB3QjtJQUNIO0FBQ0EsV0FBTztNQUNOdHdCLEdBQUdBLEVBQUVpTCxNQUFNeEwsS0FBS3lMLElBQUksR0FBR0csSUFBSSxJQUFJbzZCLE9BQU8sR0FBR2htQyxLQUFLQyxJQUFJTSxFQUFFTCxTQUFTLEdBQUdDLElBQUk2bEMsVUFBVSxDQUFDLENBQUM7TUFDaEZucUIsR0FBR0EsRUFBRXJRLE1BQU14TCxLQUFLeUwsSUFBSSxHQUFHRyxJQUFJLElBQUlvNkIsT0FBTyxHQUFHaG1DLEtBQUtDLElBQUk0YixFQUFFM2IsU0FBUyxHQUFHMndCLElBQUltVixVQUFVLENBQUMsQ0FBQztJQUNqRjtFQUNEO0FBQ0EsUUFBTXlKLGFBQWNyckMsWUFBVztBQUk5QixRQUFJMnJDLFdBQVczckMsT0FBTzZwQyxTQUFTQyxPQUFPc0IsU0FBUy9YLFFBQVF0dEIsTUFBTSxJQUFJO0FBQ2pFLFFBQUk2bEMsV0FBVzVyQyxPQUFPNnBDLFNBQVNFLE9BQU9xQixTQUFTL1gsUUFBUXR0QixNQUFNLElBQUk7QUFDakUsUUFBSThsQyxRQUFRSCxzQkFBc0JDLFVBQVVDLFVBQVVweEMsV0FBVyx1QkFBdUIsQ0FBQztBQUN6Rm14QyxlQUFXRSxNQUFNMXZDO0FBQ2pCeXZDLGVBQVdDLE1BQU1wMEI7QUFDakIsUUFBSXEwQixZQUFZO0FBQ2hCdHhDLGVBQVcsbUJBQW1CO0FBQzlCLFFBQUlteEMsU0FBUzd2QyxTQUFTN0MsR0FBR00sT0FBT3d5QyxxQkFBcUJILFNBQVM5dkMsU0FBUzdDLEdBQUdNLE9BQU93eUMsbUJBQW1CO0FBRW5HRCxrQkFBWTtBQUNaRCxjQUFRSCxzQkFDUEMsU0FBU3ZrQyxNQUFNLEdBQUduTyxHQUFHTSxPQUFPd3lDLGlCQUFpQixHQUM3Q0gsU0FBU3hrQyxNQUFNLEdBQUduTyxHQUFHTSxPQUFPd3lDLGlCQUFpQixHQUM3Qzl5QyxHQUFHTSxPQUFPeXlDLHFCQUNYO0FBQ0FMLGlCQUFXRSxNQUFNMXZDO0FBQ2pCeXZDLGlCQUFXQyxNQUFNcDBCO0lBQ2xCO0FBQ0EsVUFBTXcwQixXQUFXdnpDLEtBQUtpekMsVUFBVUMsUUFBUTtBQUN4QyxVQUFNTSxTQUFTWixjQUFjVyxTQUFTMWpDLEdBQUcwakMsU0FBUzk5QixDQUFDO0FBQ25ELFVBQU1nK0IsWUFBWUQsT0FBTy92QztBQUN6QixVQUFNaXdDLFlBQVlGLE9BQU96MEI7QUFDekIsUUFBSThDLE9BQU87QUFDWCxRQUFJL2YsV0FBVyxnQkFBZ0IsR0FBRztBQUNqQytmLGNBQVE4eEIsZUFBZXJzQyxNQUFNO0FBQzdCdWEsY0FBUTtJQUNUO0FBQ0FBLFlBQVFtbkIsa0JBQ1BHLFdBQVdzSyxVQUFVaG1DLEtBQUssSUFBSSxHQUFHaW1DLFVBQVVqbUMsS0FBSyxJQUFJLENBQUMsR0FDckQzTCxXQUFXLDRCQUE0QixDQUN4QyxFQUFFMkwsS0FBSyxNQUFNO0FBQ2JnakIsd0JBQ0M1TyxLQUFLeFUsTUFBTSxJQUFJLEVBQUVJLEtBQUssTUFBTSxLQUMxQjJsQyxZQUFBLFVBQUF2eEMsT0FBc0J5SCxZQUFZLHdDQUF3QyxHQUFDLE1BQUEsSUFBUyxLQUN0RixnQkFDQWhDLE9BQU9HLFFBQ1I7RUFDRDtBQUNBLFFBQU1rc0MsaUJBQWtCcnNDLFlBQVc7QUFDbEMsUUFBSXVhLE9BQU87QUFDWEEsWUFBUSt4QixrQkFBa0J0c0MsT0FBTzZwQyxTQUFTRSxPQUFPcUIsVUFBVXI1QixRQUFRLGNBQWMsQ0FBQztBQUNsRndJLFlBQVEreEIsa0JBQWtCdHNDLE9BQU82cEMsU0FBU0MsT0FBT3NCLFVBQVVyNUIsUUFBUSxjQUFjLENBQUM7QUFDbEZ3SSxZQUFRO0FBQ1IsV0FBT0E7RUFDUjtBQUNBLFFBQU0reEIsb0JBQW9CQSxDQUFDbEIsVUFBVW1CLFVBQVU7QUFDOUMsUUFBSWo3QixNQUFNO0FBQ1YsVUFBTWs3QixtQkFBbUIsSUFBSTkzQixLQUFLMDJCLFNBQVNwNEIsU0FBUztBQUNwRDFCLFVBQU1xaUIsa0JBQWtCNlksZ0JBQWdCO0FBQ3hDLFVBQU1DLFVBQVVDLFlBQVk7TUFDM0I1N0IsS0FBQSxHQUFBdlcsT0FBUXNWLEdBQUdzRyxPQUFPQyxJQUFJLFVBQVUsR0FBQyxTQUFBLEVBQUE3YixPQUFVNndDLFNBQVNuNEIsS0FBSztNQUN6RDRULE1BQU0wbEI7TUFDTm52QyxPQUFPbXZDO0lBQ1IsQ0FBQztBQUNELFdBQU85d0MsYUFBYSxtQ0FBbUMsQ0FBQ2d4QyxTQUFTbjdCLEdBQUcsQ0FBQztFQUN0RTtBQVFBLFFBQU1vM0IsaUJBQWtCaHhCLE9BQU07QUFDN0IsV0FBTzJ3QixlQUFlO01BQ3JCMzRDLFNBQVNnb0IsRUFBRWhvQjtNQUNYNk8sUUFBQSxHQUFBaEUsT0FBV21kLEVBQUU3SixJQUFFLFNBQUEsRUFBQXRULE9BQVVtZCxFQUFFL0osSUFBSTtNQUMvQnM2QixRQUFRdndCLEVBQUV1d0I7TUFDVkMsU0FBU3h3QixFQUFFd3dCO01BQ1hyaEIsTUFBTW5QLEVBQUVtUDtNQUNSenBCLE9BQU9zYSxFQUFFdGE7O01BRVR1dkMsWUFBWTtJQUNiLENBQUM7RUFDRjtBQUNBLFFBQU05MkMsV0FBWTZoQixPQUFNO0FBRXZCLFFBQUksRUFBRSxPQUFPQSxFQUFFaG9CLFlBQVksT0FBTyxDQUFDLEtBQUssT0FBT2dvQixFQUFFblosV0FBVyxZQUFhLE9BQU9tWixFQUFFbVAsU0FBUyxXQUFZO0FBQ3RHLGFBQU87SUFDUjtBQUNBLFFBQUluUCxFQUFFdlUsVUFBVSxRQUFXO0FBQzFCdVUsUUFBRXZVLFFBQVE7SUFDWDtBQUNBLFVBQU15cEMsYUFBYWwxQixFQUFFdlU7QUFDckIsUUFBSSxDQUFDLG1DQUFtQ2hFLEtBQUt1WSxFQUFFblosTUFBTSxHQUFHO0FBQ3ZEbVosUUFBRXZVLFFBQVE7SUFDWDtBQUNBLFFBQUk0SCxPQUFPL0ksWUFBQSxHQUFBekgsT0FBZW1kLEVBQUVuWixRQUFNLE1BQUEsQ0FBTTtBQUN4QyxVQUFNc3VDLFlBQVksQ0FBQ24xQixFQUFFdlUsT0FBT3NkLGNBQWMvSSxFQUFFaG9CLE9BQU8sQ0FBQztBQUNwRCxRQUFJbzlDLGlCQUFpQi82QixRQUFRLHFCQUFxQjg2QixTQUFTO0FBQzNEMTFDLFFBQUEsa0JBQUFvRCxPQUFzQnV5QyxjQUFjLENBQUU7QUFDdEMsWUFBUXAxQixFQUFFblosUUFBQTtNQUNULEtBQUs7QUFDSndNLGVBQU8vSSxZQUFZLGdCQUFnQjtBQUNuQztNQUNELEtBQUs7QUFDSixZQUFJMFYsRUFBRWhmLFFBQVFnZixFQUFFaGYsU0FBUyxVQUFVazBDLFlBQVk7QUFDOUNsMUIsWUFBRW5aLFVBQUEsR0FBQWhFLE9BQWFtZCxFQUFFaGYsTUFBSSxhQUFBLEVBQUE2QixPQUFjcXlDLFVBQVU7UUFDOUMsV0FBV0EsWUFBWTtBQUN0QmwxQixZQUFFblosVUFBVXF1QztRQUNiO0FBQ0E3aEMsZUFBTy9JLFlBQVksVUFBVTtBQUM3QjtNQUNELEtBQUs7QUFDSitJLGVBQU8vSSxZQUFZLFNBQVM7QUFDNUI7TUFDRCxLQUFLLFVBQVU7QUFDZCxjQUFNcUUsSUFBSW5ELFlBQVlqSyxHQUFHYSxRQUFRMEcsS0FBS3BFLElBQUk7QUFDMUNzYixVQUFFblosU0FBQSxpQ0FBQWhFLE9BQTBDNlYsZUFBZSxHQUFDLFlBQUEsRUFBQTdWLE9BQWF5SCxZQUN4RSxrQkFDRCxHQUFDLGVBQUEsRUFBQXpILE9BQWdCd3lDLGNBQWNyMUIsRUFBRXZVLE9BQU9rRCxFQUFFM04sSUFBSSxDQUFDO0FBQy9DLFlBQUkyTixFQUFFM04sU0FBUyxRQUFRO0FBQ3RCZ2YsWUFBRW5aLFVBQVU7QUFDWnV1QywyQkFBaUIvNkIsUUFBUSwyQ0FBMkM4NkIsU0FBUztRQUM5RTtBQUNBLFlBQUlyeUMsV0FBVywwQkFBMEIsR0FBRztBQUMzQ2tkLFlBQUVuWixVQUFVO1FBQ2I7QUFDQSxZQUFJL0QsV0FBVyxtQkFBbUIsR0FBRztBQUNwQ2tkLFlBQUVuWixVQUFVO1FBQ2I7QUFDQXBILFlBQUEseUJBQUFvRCxPQUE2QnV5QyxjQUFjLENBQUU7QUFDN0M7TUFDRDtNQUNBLEtBQUs7QUFDSnAxQixVQUFFblosU0FBQSxpQ0FBQWhFLE9BQTBDNlYsZUFBZSxHQUFDLFlBQUEsRUFBQTdWLE9BQWF5SCxZQUN4RSxrQkFDRCxHQUFDLG1CQUFBO0FBQ0Q7TUFDRCxLQUFLO0FBQ0owVixVQUFFblosU0FBUztBQUNYO01BQ0QsS0FBSztBQUNKbVosVUFBRW5aLFNBQUEsc0JBQUFoRSxPQUErQm1kLEVBQUU4USxJQUFJO0lBQ3pDO0FBQ0EsUUFBSXpkLE1BQU07QUFDVEEsYUFBTzJNLEVBQUV2VSxRQUFRMUgsYUFBYXNQLE1BQU0sQ0FBQytoQyxjQUFjLENBQUMsSUFBSXJ4QyxhQUFhc1AsTUFBTSxDQUFDMFYsY0FBYy9JLEVBQUVob0IsT0FBTyxDQUFDLENBQUM7SUFDdEcsT0FBTztBQUNOcWIsYUFBTzBWLGNBQUEsR0FBQWxtQixPQUFpQm1kLEVBQUVob0IsU0FBTyxVQUFBLEVBQUE2SyxPQUFXbWQsRUFBRW5aLE1BQU0sQ0FBRSxJQUFJbVosRUFBRXZVLFFBQUEsVUFBQTVJLE9BQWtCbWQsRUFBRXZVLEtBQUssSUFBSztJQUMzRjtBQUNBLFdBQU9rbEMsZUFBZTtNQUNyQjM0QyxTQUFTZ29CLEVBQUVob0I7TUFDWDZPLFFBQVFtWixFQUFFblo7TUFDVnNvQixNQUFNblAsRUFBRW1QO01BQ1JvaEIsUUFBUXZ3QixFQUFFdXdCO01BQ1Y3cUMsT0FBTzJOO01BQ1A1SCxPQUFPdVUsRUFBRXZVO01BQ1Qra0MsU0FBU3h3QixFQUFFd3dCO01BQ1huWSxTQUFTclksRUFBRXFZO0lBQ1osQ0FBQztFQUNGO0FBQ0EsUUFBTWdkLGdCQUFnQkEsQ0FBQzVwQyxPQUFPSCxVQUFTO0FBQ3RDLFFBQUk2YSxNQUFNO0FBQ1ZBLFVBQ0M3YSxVQUFTLFNBQ054SSxXQUFXLHFDQUFxQyxJQUNoREEsV0FBVywyQkFBMkI7QUFDMUMsV0FBQSxHQUFBRCxPQUFVc2pCLEtBQUcsVUFBQSxFQUFBdGpCLE9BQVc0SSxLQUFLO0VBQzlCO0FBQ0EsUUFBTWtsQyxpQkFBa0Izd0IsT0FBTTtBQUs3QixRQUFJQSxFQUFFaG9CLFlBQVksVUFBYWdvQixFQUFFblosV0FBVyxRQUFXO0FBQ3REdW1CLGFBQU8sbURBQW1EO0FBQzFELGFBQU87SUFDUjtBQUNBLFVBQU1rb0IsT0FBTy96QyxHQUFHSSxLQUFLMG9CLFlBQVlySyxFQUFFaG9CLFFBQVFtWCxVQUFVO0FBQ3JELFFBQUlpSyxNQUFNazhCO0FBQ1YsUUFBSXQxQixFQUFFaTFCLGVBQWUsVUFBYSxDQUFDajFCLEVBQUVpMUIsWUFBWTtBQUNoRGoxQixRQUFFaTFCLGFBQWE7SUFDaEI7QUFFQSxRQUFJajFCLEVBQUVuWixXQUFXLFFBQVE7QUFDeEJ1UyxZQUFBLEdBQUF2VyxPQUFTeXlDLE1BQUksR0FBQSxFQUFBenlDLE9BQUltZCxFQUFFaTFCLFlBQVUsR0FBQSxFQUFBcHlDLE9BQUltZCxFQUFFblosTUFBTTtJQUMxQztBQUNBLFFBQUltWixFQUFFdlUsVUFBVSxVQUFhdVUsRUFBRXZVLE9BQU87QUFDckMyTixhQUFBLFVBQUF2VyxPQUFpQm1kLEVBQUV2VSxLQUFLO0lBQ3pCO0FBQ0EsUUFBSThwQyxXQUFXaDBDLEdBQUdLLEtBQUs0ekM7QUFDdkIsUUFBSXgxQixFQUFFL1YsY0FBYyxVQUFhK1YsRUFBRS9WLFdBQVc7QUFDN0NzckMsaUJBQVd2MUIsRUFBRS9WO0lBQ2Q7QUFDQSxXQUFPd3JDLGVBQWU7TUFDckJyOEI7TUFDQW0zQixRQUFRdndCLEVBQUV1d0I7TUFDVjdxQyxPQUFPc2EsRUFBRXRhLFVBQVUsU0FBWSxPQUFPc2EsRUFBRXRhO01BQ3hDeXBCLE1BQU1uUCxFQUFFbVAsU0FBUyxTQUFZLE9BQU9uUCxFQUFFbVA7TUFDdENsbEIsV0FBV3NyQztNQUNYL0UsU0FBU3h3QixFQUFFd3dCO01BQ1huWSxTQUFTclksRUFBRXFZO0lBQ1osQ0FBQztFQUNGO0FBQ0E5MkIsS0FBR2MsR0FBR3F6QyxpQkFBaUIsQ0FBQ0MsVUFBVXBGLFdBQVc7QUFDNUNxRixtQkFBZUQsVUFBV3R0QyxPQUFNO0FBQy9Cd3RDLDZCQUF1Qnh0QyxHQUFHO1FBQUN3a0IsTUFBTThvQjtRQUFVcEY7TUFBTSxDQUFDO0lBQ25ELENBQUM7RUFDRjtBQUNBLFFBQU1zRix5QkFBeUJBLENBQUN2b0IsTUFBTXNKLFVBQVU7QUFDL0MsUUFBSSxDQUFDdEosS0FBS29ULFNBQVNwVCxLQUFLb1QsTUFBTXQ4QixXQUFXLEdBQUc7QUFDM0MsV0FBSytULEdBQUdxQyxPQUFPLGdEQUFnRDtRQUFDQyxLQUFLO1FBQVVDLE1BQU07TUFBTyxDQUFDO0FBQzdGO0lBQ0Q7QUFDQSxRQUFJLENBQUM0UyxLQUFLd29CLGdCQUFnQjtBQUN6QixXQUFLMzlCLEdBQUdxQyxPQUNQSCxRQUFRLDJDQUEyQyxDQUFDaVQsS0FBS29ULE1BQU0sQ0FBQyxFQUFFcVYsUUFBUXpvQixLQUFLb1QsTUFBTXQ4QixNQUFNLENBQUMsR0FDNUY7UUFDQ3FXLEtBQUs7UUFDTEMsTUFBTTtNQUNQLENBQ0Q7QUFDQTtJQUNEO0FBQ0EsVUFBTXM3QixTQUFBLEdBQUFuekMsT0FBWXRCLEdBQUdJLEtBQUswb0IsWUFBWSxJQUFJaGpCLE1BQU11dkIsTUFBTS9KLElBQUksRUFBRTFkLFVBQVUsR0FBQyxrQkFBQSxFQUFBdE0sT0FDdEV5cUIsS0FBS3dvQixlQUFlcnFDLEtBQ3JCO0FBQ0F3cUMsZUFBV0QsUUFBUXBmLE1BQU0yWixNQUFNO0VBQ2hDO0FBQ0FodkMsS0FBR2MsR0FBRzZ6QyxxQkFBcUIsQ0FBQ1AsVUFBVXBGLFdBQVc7QUFDaERxRixtQkFBZUQsVUFBV3R0QyxPQUFNO0FBQy9COHRDLDZCQUF1Qjl0QyxHQUFHO1FBQUN3a0IsTUFBTThvQjtRQUFVcEY7TUFBTSxDQUFDO0lBQ25ELENBQUM7RUFDRjtBQUNBLFFBQU00Rix5QkFBeUJBLENBQUM3b0IsTUFBTXNKLFVBQVU7QUFDL0MsUUFBSSxDQUFDdEosS0FBS29ULFNBQVNwVCxLQUFLb1QsTUFBTXQ4QixXQUFXLEdBQUc7QUFDM0MsV0FBSytULEdBQUdxQyxPQUFPLHVEQUF1RDtRQUFDQyxLQUFLO1FBQVVDLE1BQU07TUFBTyxDQUFDO0FBQ3BHO0lBQ0Q7QUFDQSxVQUFNMDdCLGVBQWV4ZixNQUFNL0osS0FBS3hlLE1BQU0sR0FBRyxFQUFFSSxLQUFLLEdBQUc7QUFDbkQsUUFBSSxDQUFDNmUsS0FBSytvQixZQUFZO0FBQ3JCLFdBQUtsK0IsR0FBR3FDLE9BQ1BILFFBQVEsNERBQTRELENBQ25FaVQsS0FBS3BFLFVBQ0xwbUIsV0FBVyxtQkFBbUIsR0FDOUJzekMsWUFBQSxDQUNBLEdBQ0Q7UUFBQzM3QixLQUFLO1FBQVVDLE1BQU07TUFBTyxDQUM5QjtBQUNBO0lBQ0Q7QUFDQSxRQUFJNFMsS0FBSytvQixXQUFXOWdCLFVBQVUsR0FBRztBQUNoQyxXQUFLcGQsR0FBR3FDLE9BQU9ILFFBQVEsaURBQWlELENBQUNpVCxLQUFLcEUsVUFBVWt0QixZQUFZLENBQUMsR0FBRztRQUN2RzE3QixNQUFNO01BQ1AsQ0FBQztBQUNEO0lBQ0Q7QUFDQSxVQUFNczdCLFNBQUEsR0FBQW56QyxPQUFZdEIsR0FBR0ksS0FBSzBvQixZQUFZLElBQUloakIsTUFBTXV2QixNQUFNL0osSUFBSSxFQUFFMWQsVUFBVSxHQUFDLGtCQUFBLEVBQUF0TSxPQUN0RXlxQixLQUFLK29CLFdBQVc1cUMsS0FDakI7QUFDQXdxQyxlQUFXRCxRQUFRcGYsTUFBTTJaLE1BQU07RUFDaEM7QUFDQSxRQUFNMEYsYUFBYUEsQ0FBQzc4QixLQUFLbTNCLFdBQVc7QUFDbkMsUUFBSUEsUUFBUTtBQUNYdDRDLGFBQU9za0IsS0FBS25ELEdBQUc7SUFDaEIsT0FBTztBQUNOclcsZUFBUzZFLFdBQVd3UjtJQUNyQjtFQUNEO0FBQ0E3WCxLQUFHYyxHQUFHaTBDLGNBQWMsTUFBTTtBQUN6QkMscUJBQWlCLElBQUk7QUFDckJySSxlQUFXO0FBQ1gzc0MsT0FBR00sU0FBUyxDQUFDO0FBQ2JvTyxzQkFBa0I7RUFDbkI7QUFDQSxRQUFNc21DLG1CQUFtQkEsQ0FBQ0MsU0FBU3htQyxXQUFXO0FBQzdDLGFBQVNGLElBQUksR0FBR3ZPLEdBQUdhLFFBQVFpSCxTQUFTeUcsSUFBSXZPLEdBQUdhLFFBQVFpSCxNQUFNakYsUUFBUSxFQUFFMEwsR0FBRztBQUNyRSxVQUFJLENBQUN2TyxHQUFHYSxRQUFRaUgsTUFBTXlHLENBQUMsRUFBRS9HLFVBQVU7QUFDbEM7TUFDRDtBQUNBLFVBQUl5dEMsV0FBV3htQyxRQUFRO0FBQ3RCek8sV0FBR2EsUUFBUWlILE1BQU15RyxDQUFDLEVBQUUvRyxTQUFTaUgsT0FBTztNQUNyQztBQUNBek8sU0FBR2EsUUFBUWlILE1BQU15RyxDQUFDLEVBQUVoRyxlQUFlO0FBQ25DLFVBQUkwc0MsU0FBUztBQUNaajFDLFdBQUdhLFFBQVFpSCxNQUFNeUcsQ0FBQyxFQUFFL0csV0FBVztNQUNoQztJQUNEO0VBQ0Q7QUFDQXhILEtBQUdjLEdBQUdvMEMsZ0JBQWdCLE1BQU07QUFDM0JGLHFCQUFpQixPQUFPLElBQUk7QUFDNUIvekMsa0JBQWMsTUFBTSxJQUFJO0VBQ3pCO0FBQ0FqQixLQUFHYyxHQUFHcTBDLGlCQUFpQixNQUFNO0FBQzVCSCxxQkFBaUIsTUFBTSxJQUFJO0FBQzNCaDFDLE9BQUdNLE9BQU9xdkMsZUFBZSxDQUFDM3ZDLEdBQUdNLE9BQU9xdkM7QUFDcENqaEMsc0JBQWtCO0VBQ25CO0FBQ0EsUUFBTXlnQyxpQkFBaUIsU0FBU2lHLGdCQUFlMzJCLEdBQUc7QUFFakRBLE1BQUVxWSxVQUFVdDBCLGFBQWEsa0RBQWtELENBQzFFaWMsRUFBRWhvQixRQUNBNlAsU0FBUyxJQUFJLEVBQ2J3RyxNQUFNLElBQUksRUFDVkksS0FBSyxNQUFNLEVBQ1hKLE1BQU0sR0FBRyxFQUNUSSxLQUFLSCxPQUFPbFMsSUFBQXc2QyxxQkFBQUEsbUJBQUFwb0MsdUJBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsRUFBQSxDQUFPLEdBQ3JCLEtBQUtmLEVBQUEsQ0FDTDtBQUNELFdBQU90UCxTQUFTNmhCLENBQUM7RUFDbEI7QUFDQXplLEtBQUdjLEdBQUdzVyxrQkFBQSwyQkFBQTtBQUFBLFFBQUFrK0IsT0FBQUMsa0JBQWtCLFdBQU9weEMsT0FBT21CLFFBQVc7QUFDaEQsWUFBTWt3QyxVQUFVO1FBQ2Zsd0MsUUFBUTtRQUNScWxDLGVBQWU7UUFDZjhLLFFBQVF0eEM7UUFDUjJtQyxTQUFTbDBCLEdBQUdzRyxPQUFPQyxJQUFJLGdCQUFnQjtNQUN4QztBQUNBLFVBQUk3WCxXQUFXLFdBQVc7QUFDekJrd0MsZ0JBQVFFLFVBQVU7TUFDbkI7QUFFQSxZQUFNQyxVQUFVLytCLEdBQUc5USxNQUFNOHZDLFlBQVl6eEMsS0FBSztBQUMxQyxVQUFJMHhDO0FBQ0osVUFBSUYsV0FBV0EsUUFBUUcsZUFBZSxJQUFJLEtBQUtILFFBQVFHLGVBQWUsSUFBSSxNQUFNLEdBQUc7QUFDbEZELHNCQUFjdndDLFdBQVcsVUFBVSx3QkFBd0I7TUFDNUQsT0FBTztBQUNOdXdDLHNCQUFjdndDLFdBQVcsVUFBVSxtQkFBbUI7TUFDdkQ7QUFDQSxZQUFNMDJCLFNBQVMsRUFBRTZWLGNBQWMsU0FBUzJELE9BQU87QUFDL0MsWUFBTXhaLFNBQVMsRUFBRUMsc0JBQXNCLENBQUM0WixXQUFXLENBQUM7QUFJcEQsV0FBS2ovQixHQUFHcUMsT0FBT3JDLEdBQUdwZ0IsUUFBUXEvQyxhQUFhMXhDLEtBQUssRUFBRTR4QyxTQUFTLEdBQUc7UUFBQzc4QixLQUFLO01BQVEsQ0FBQztJQUMxRSxDQUFBO0FBQUEsV0FBQSxTQUFBODhCLEtBQUFDLEtBQUE7QUFBQSxhQUFBWCxLQUFBak8sTUFBQSxNQUFBNk8sU0FBQTtJQUFBO0VBQUEsRUFBQTtBQUNBLFFBQU14RyxtQkFBb0JqeEIsT0FBTTtBQUUvQixRQUFJMDNCLFFBQVE7QUFDWixRQUFJaHlDLFFBQVE7QUFDWixRQUFJaXlDLFVBQVU7QUFDZCxZQUFRMzNCLEVBQUV2UyxJQUFBO01BQ1QsS0FBSztBQUNKa3FDLGtCQUFVNXpDLGFBQWEsaUNBQWlDLENBQ3ZEaWMsRUFBRWhvQixRQUNBNlAsU0FBUyxJQUFJLEVBQ2J3RyxNQUFNLElBQUksRUFDVkksS0FBSyxNQUFNLEVBQ1hKLE1BQU0sR0FBRyxFQUNUSSxLQUFLSCxPQUFPbFMsSUFBQXc3QyxxQkFBQUEsbUJBQUFwcEMsdUJBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsRUFBQSxDQUFPLEdBQ3JCd1IsRUFBRXV3QixNQUFBLENBQ0Y7QUFDRDdxQyxnQkFBUTRFLFlBQVksaUJBQWlCO0FBQ3JDO01BQ0QsS0FBSztBQUNKcXRDLGtCQUFVNXpDLGFBQWEscUNBQXFDLENBQzNEaWMsRUFBRWhvQixRQUNBNlAsU0FBUyxJQUFJLEVBQ2J3RyxNQUFNLElBQUksRUFDVkksS0FBSyxNQUFNLEVBQ1hKLE1BQU0sR0FBRyxFQUNUSSxLQUFLSCxPQUFPbFMsSUFBQXk3QyxxQkFBQUEsbUJBQUFycEMsdUJBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsRUFBQSxDQUFPLEdBQ3JCd1IsRUFBRXV3QixNQUFBLENBQ0Y7QUFDRDdxQyxnQkFBUTRFLFlBQVksYUFBYTtBQUNqQztJQUNGO0FBQ0FvdEMsWUFBQSxjQUFBNzBDLE9BQXNCODBDLE9BQU87QUFDN0JBLGVBQVc7QUFDWCxXQUFPbEMsZUFBZTtNQUNyQnI4QixLQUFLcytCO01BQ0xuSCxRQUFRO01BQ1I3cUM7TUFDQXlwQixNQUFNblAsRUFBRW1QO01BQ1JxaEIsU0FBU3h3QixFQUFFd3dCO01BQ1huWSxTQUFTc2Y7SUFDVixDQUFDO0VBQ0Y7QUFDQSxRQUFNeEcsZ0JBQWlCbnhCLE9BQU07QUFFNUIsVUFBTTAzQixRQUFRM3pDLGFBQWEseUJBQXlCLENBQUNpYyxFQUFFdlMsRUFBRSxDQUFDO0FBQzFELFVBQU0vSCxRQUFRNEUsWUFBWXZHLGFBQWEsVUFBVSxDQUFDaWMsRUFBRXZTLEVBQUUsQ0FBQyxDQUFDO0FBQ3hELFVBQU1rcUMsVUFBVTV6QyxhQUFhLDRCQUE0QixDQUFDaWMsRUFBRXZTLEVBQUUsQ0FBQztBQUMvRCxXQUFPZ29DLGVBQWU7TUFDckJyOEIsS0FBS3MrQjtNQUNMbkgsUUFBUTtNQUNSN3FDO01BQ0F5cEIsTUFBTW5QLEVBQUVtUDtNQUNScWhCLFNBQVN4d0IsRUFBRXd3QjtNQUNYblksU0FBU3NmO0lBQ1YsQ0FBQztFQUNGO0FBQ0EsUUFBTWxILGNBQWV6d0IsT0FBTTtBQUFBLFFBQUE4M0I7QUFFMUIsUUFBSTkzQixFQUFFOHRCLGdCQUFnQixVQUFhLENBQUM5dEIsRUFBRTh0QixhQUFhO0FBQ2xELGFBQU87SUFDUjtBQUNBLFVBQU13SCxPQUFBLEdBQUF6eUMsT0FBVXRCLEdBQUdJLEtBQUswb0IsWUFBWWxTLEdBQUdzRyxPQUFPQyxJQUFJLHVCQUF1QixFQUFFbmQsR0FBRzhtQixXQUFXLEdBQUMsR0FBQSxFQUFBeGxCLE9BQUltZCxFQUFFOHRCLFdBQVc7QUFDM0csS0FBQWdLLFNBQUE5M0IsRUFBRTNJLFNBQUEsUUFBQXlnQyxXQUFBLFNBQUFBLFNBQUY5M0IsRUFBRTNJLE1BQVE7QUFDVixRQUFJcmYsVUFBVWdvQixFQUFFaG9CLFFBQVFtWCxVQUFVO01BQ2pDOGEsWUFBWWpLLEVBQUU4dEIsZ0JBQWdCO0lBQy9CLENBQUM7QUFDRCxRQUFJejZCLE9BQU8vSSxZQUFBLEdBQUF6SCxPQUFlbWQsRUFBRTh0QixhQUFXLE1BQUEsQ0FBTTtBQUM3QyxZQUFROXRCLEVBQUU4dEIsYUFBQTtNQUNULEtBQUs7QUFDSixnQkFBUTl0QixFQUFFM0ksS0FBQTtVQUNULEtBQUs7QUFDSmhFLG1CQUFPL0ksWUFBWSxhQUFhO0FBQ2hDO1VBQ0QsS0FBSztBQUNKK0ksbUJBQU8vSSxZQUFZLGNBQWM7QUFDakM7VUFDRCxLQUFLO0FBQ0orSSxtQkFBTy9JLFlBQVksYUFBYTtBQUNoQztVQUNELEtBQUs7QUFDSitJLG1CQUFPL0ksWUFBWSxnQkFBZ0I7QUFDbkM7VUFDRCxLQUFLO0FBQ0orSSxtQkFBTy9JLFlBQVksZUFBZTtBQUNsQztVQUNEO0FBQ0M3SyxnQkFBQSx5QkFBQW9ELE9BQTZCbWQsRUFBRTNJLEdBQUcsQ0FBRTtBQUNwQ2hFLG1CQUFPO1FBQ1Q7QUFDQTtNQUNELEtBQUs7QUFDSnJiLG1CQUFXO0FBQ1g7SUFDRjtBQUNBcWIsV0FBT0EsT0FBT3RQLGFBQWFzUCxNQUFNLENBQUMwVixjQUFjL0ksRUFBRWhvQixPQUFPLENBQUMsQ0FBQyxJQUFJK3dCLGNBQUEsR0FBQWxtQixPQUFpQm1kLEVBQUU4dEIsYUFBVyxHQUFBLEVBQUFqckMsT0FBSW1kLEVBQUVob0IsT0FBTyxDQUFFO0FBQzVHLFVBQU1vaEIsTUFBTWs4QixPQUFPdDFCLEVBQUUzSSxNQUFNcmY7QUFDM0IsV0FBT3k5QyxlQUFlO01BQ3JCcjhCO01BQ0ExVCxPQUFPMk47TUFDUDhiLE1BQU1uUCxFQUFFbVA7TUFDUm9oQixRQUFRdndCLEVBQUV1d0I7TUFDVkMsU0FBU3h3QixFQUFFd3dCO0lBQ1osQ0FBQztFQUNGO0FBQ0EsUUFBTXdFLGNBQWVoMUIsT0FBTTtBQUUxQixRQUFJQSxFQUFFNUcsUUFBUSxRQUFXO0FBQ3hCLGFBQU87SUFDUjtBQUVBLFVBQU1BLE1BQU00RyxFQUFFNUcsSUFBSS9LLE1BQU0sR0FBRyxFQUFFSSxLQUFLLEtBQUs7QUFDdkMsUUFBSTBYLE1BQUEsWUFBQXRqQixPQUFrQnVXLEtBQUcsR0FBQTtBQUN6QixRQUFJNEcsRUFBRXRhLFVBQVUsVUFBYXNhLEVBQUV0YSxPQUFPO0FBQ3JDeWdCLGFBQUEsV0FBQXRqQixPQUFrQnRCLEdBQUdzWixpQkFBaUJtRixFQUFFdGEsS0FBSyxHQUFDLEdBQUE7SUFDL0M7QUFDQSxRQUFJc2EsRUFBRXFZLFlBQVksVUFBYXJZLEVBQUVxWSxTQUFTO0FBQ3pDbFMsYUFBQSxhQUFBdGpCLE9BQW9CdEIsR0FBR3NaLGlCQUFpQm1GLEVBQUVxWSxPQUFPLEdBQUMsR0FBQTtJQUNuRDtBQUNBLFFBQUlyWSxFQUFFd3dCLFNBQVM7QUFDZHJxQixhQUFPO0lBQ1I7QUFDQSxRQUFJb3FCO0FBQ0osUUFBSXZ3QixFQUFFdXdCLFdBQVcsVUFBYXZ3QixFQUFFdXdCLFdBQVcsTUFBTTtBQUNoREEsZUFBU3p0QyxXQUFXLGlCQUFpQjtJQUN0QyxPQUFPO0FBQ04sT0FBQztRQUFDeXRDO01BQU0sSUFBSXZ3QjtJQUNiO0FBQ0EsUUFBSXV3QixRQUFRO0FBQ1hwcUIsYUFBTztJQUNSO0FBQ0EsUUFBSW5HLEVBQUUvVixjQUFjLFVBQWErVixFQUFFL1YsV0FBVztBQUM3Q2tjLGFBQUEsV0FBQXRqQixPQUFrQm1kLEVBQUUvVixXQUFTLEdBQUE7SUFDOUI7QUFDQWtjLFdBQU87QUFDUCxRQUFJLE9BQU9uRyxFQUFFbVAsU0FBUyxVQUFXO0FBTWhDaEosYUFBTzVrQixHQUFHc1osaUJBQWlCdFosR0FBRzZ0QixtQkFBbUJwUCxFQUFFbVAsSUFBSSxDQUFDO0lBQ3pEO0FBQ0FoSixXQUFPO0FBQ1AsV0FBT0E7RUFDUjtBQUNBLFFBQU00eEIscUJBQXFCQSxDQUFDQyxTQUFTenNDLFdBQVc7QUFDL0MsVUFBTXNxQixLQUFLbWlCLFFBQVEzcEMsTUFBTSxrQkFBa0I7QUFDM0MsUUFBSXduQixHQUFHenhCLFNBQVMsR0FBRztBQUNsQixhQUFPO0lBQ1I7QUFDQSxRQUFJK2hCLE1BQU0wUCxHQUFHelcsTUFBTSxJQUFJeVcsR0FBR3pXLE1BQU07QUFDaEMrRyxXQUFBLElBQUF0akIsT0FBVzBJLFFBQU0sR0FBQTtBQUNqQjRhLFdBQU8wUCxHQUFHcG5CLEtBQUssRUFBRTtBQUNqQixXQUFPMFg7RUFDUjtBQUNBLFFBQU11Six1QkFBd0JybkIsT0FBTTtBQUVuQyxRQUFJQSxFQUFFaW5CLFdBQVc7QUFDaEI3dkIsVUFBQSxtQ0FBQW9ELE9BQXVDd0YsRUFBRWluQixTQUFTLENBQUU7SUFDckQ7QUFDQSxRQUFJam5CLEVBQUVrbkIsY0FBYzNILG1CQUFtQnZmLEVBQUVrbkIsU0FBUyxHQUFHO0FBQ3BEOXZCLFVBQUEsbUNBQUFvRCxPQUF1Q3dGLEVBQUVrbkIsU0FBUyxDQUFFO0lBQ3JEO0FBSUEsVUFBTTBvQixLQUFLOS9CLEdBQUdDLEtBQUt5VixhQUFheGxCLEVBQUVrbkIsU0FBUztBQUMzQyxRQUFJMm9CLE1BQU1ELEdBQUdoaEMsT0FBTyxDQUFDLEVBQUVzVyxZQUFZO0FBQ25DMnFCLFVBQUEsSUFBQXIxQyxPQUFVcTFDLEdBQUcsRUFBQXIxQyxPQUFHcTFDLElBQUlod0MsWUFBWSxHQUFDLEdBQUE7QUFDakMsUUFBSWl3Qyx5QkFBeUJELE1BQU1ELEdBQUd2b0MsTUFBTSxDQUFDO0FBQzdDeW9DLDZCQUF5QkEsdUJBQ3ZCOXBDLE1BQU0sWUFBWSxFQUNsQkksS0FBSyxlQUFlLEVBQ3BCSixNQUFNQyxPQUFPbFMsSUFBQWc4QyxxQkFBQUEsbUJBQUE1cEMsdUJBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsRUFBQSxDQUFPLEVBQ3BCQyxLQUFLSCxPQUFPbFMsSUFBQWk4QyxzQkFBQUEsb0JBQUE3cEMsdUJBQUEsQ0FBQSxXQUFBLEdBQUEsQ0FBQSxhQUFBLENBQUEsRUFBQSxDQUFlLEVBQzNCSCxNQUFNQyxPQUFPbFMsSUFBQWs4QyxzQkFBQUEsb0JBQUE5cEMsdUJBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsRUFBQSxDQUFPLEVBQ3BCQyxLQUFLSCxPQUFPbFMsSUFBQW04QyxzQkFBQUEsb0JBQUEvcEMsdUJBQUEsQ0FBQSxXQUFBLEdBQUEsQ0FBQSxhQUFBLENBQUEsRUFBQSxDQUFlO0FBRzdCMnBDLDZCQUFBLFFBQUF0MUMsT0FBaUNzMUMsd0JBQXNCLHVCQUFBO0FBR3ZELFVBQU16eUMsUUFBUTJDLEVBQUUzQyxTQUFTeVMsR0FBR3NHLE9BQU9DLElBQUksWUFBWSxFQUFFclEsTUFBTSxHQUFHLEVBQUVJLEtBQUssR0FBRztBQUN4RSxVQUFNK3BDLEtBQUs3SCxlQUFlO01BQ3pCMzRDLFNBQVMsSUFBSXFQLE1BQU0zQixLQUFLO01BQ3hCNnFDLFFBQVFsb0MsRUFBRWtvQztNQUNWMXBDLFFBQVE7TUFDUnNvQixNQUFNOW1CLEVBQUU4bUI7TUFDUnpwQixPQUFPMkMsRUFBRWdMO01BQ1RwSixXQUFXO0lBQ1osQ0FBQztBQUNELFFBQUlpa0IsTUFBTTtBQUNWLFFBQUk3bEIsRUFBRWluQixXQUFXO0FBRWhCLFlBQU1uRyxJQUFJOWdCLEVBQUVpbkI7QUFDWixZQUFNcGxCLElBQUlpTyxHQUFHQyxLQUFLeVYsYUFBYXhsQixFQUFFaW5CLFNBQVM7QUFDMUMsVUFBSWpuQixFQUFFb3dDLGlCQUFpQjtBQUN0QnZxQixlQUFBLFdBQUFyckIsT0FBa0JzMUMsd0JBQXNCLFdBQUEsRUFBQXQxQyxPQUFZc21CLEdBQUMsT0FBQTtBQUNyRCtFLGVBQUEsV0FBQXJyQixPQUFrQnMxQyx3QkFBc0IsUUFBQSxFQUFBdDFDLE9BQVNzbUIsR0FBQyxNQUFBO0FBQ2xEK0UsZUFBQSxXQUFBcnJCLE9BQWtCcUgsR0FBQyxLQUFBLEVBQUFySCxPQUFNcUgsR0FBQyxXQUFBLEVBQUFySCxPQUFZc21CLEdBQUMsTUFBQTtNQUN4QyxPQUFPO0FBQ04rRSxlQUFBLFdBQUFyckIsT0FBa0JzMUMsd0JBQXNCLFdBQUEsRUFBQXQxQyxPQUFZc21CLEdBQUMsVUFBQTtBQUNyRCtFLGVBQUEsV0FBQXJyQixPQUFrQnMxQyx3QkFBc0IsUUFBQSxFQUFBdDFDLE9BQVNzbUIsR0FBQyxNQUFBO0FBQ2xEK0UsZUFBQSxXQUFBcnJCLE9BQWtCcUgsR0FBQyxLQUFBLEVBQUFySCxPQUFNcUgsR0FBQyxXQUFBLEVBQUFySCxPQUFZc21CLEdBQUMsTUFBQTtNQUN4QztJQUNELE9BQU87QUFDTitFLGFBQUEsV0FBQXJyQixPQUFrQnMxQyx3QkFBc0IsY0FBQTtBQUN4Q2pxQixhQUFBLFdBQUFyckIsT0FBa0JzMUMsd0JBQXNCLHFCQUFBO0lBQ3pDO0FBRUFqcUIsVUFBQSxZQUFBcnJCLE9BQWtCa2xCLG1CQUFtQm1HLEdBQUcsQ0FBQztBQUN6Q0EsV0FBQSxjQUFBcnJCLE9BQXFCa2xCLG1CQUFtQjFmLEVBQUVzbkIsV0FBVyxHQUFDLFdBQUEsRUFBQTlzQixPQUFZa2xCLG1CQUFtQnJQLGVBQWUsQ0FBQyxDQUFDO0FBQ3RHd1YsV0FBTzdsQixFQUFFdW5CLFVBQVUsT0FBTyxLQUFBLGNBQUEvc0IsT0FBbUJrbEIsbUJBQW1CMWYsRUFBRXVuQixLQUFLLENBQUM7QUFDeEUxQixXQUFPN2xCLEVBQUVrTSxVQUFVLE9BQU8sS0FBQSxjQUFBMVIsT0FBbUJrbEIsbUJBQW1CMWYsRUFBRWtNLEtBQUssQ0FBQztBQUN4RTJaLFdBQUEsZ0JBQUFyckIsT0FBdUJrbEIsbUJBQW1CMWYsRUFBRW1SLE9BQU8sQ0FBQztBQUNwRDBVLFdBQUEsYUFBQXJyQixPQUFvQmtsQixtQkFBbUJ6ZCxZQUFZLGtCQUFrQixDQUFDLENBQUM7QUFDdkUsV0FBT3l0QyxtQkFBbUJTLElBQUl0cUIsR0FBRztFQUNsQztBQUNBLFFBQU1qaEIsWUFBWUEsQ0FBQ0wsWUFBWTVVLFlBQVk7QUFFMUMsUUFBSW11QixNQUFNO0FBQ1YsUUFBSXJqQixXQUFXLDBCQUEwQixLQUFLQSxXQUFXLGVBQWUsR0FBRztBQUMxRXFqQixhQUFPO0FBQ1AsVUFBSXJqQixXQUFXLGdCQUFnQixLQUFLeVYsYUFBYSxVQUFhQSxVQUFVO0FBQ3ZFNE4sZUFBTzdiLFlBQVkscUJBQXFCO0FBQ3hDN0ssWUFBQSx3QkFBQW9ELE9BQTRCK0osVUFBVSxDQUFFO0FBQ3hDdVosZUFBT2txQixpQkFDTjNnQixxQkFBcUI7VUFDcEJKLFdBQVcxaUI7VUFDWHVpQixNQUFNN2tCLFlBQVksUUFBUTtVQUMxQitJLE1BQU0vSSxZQUFZLGtEQUFrRDtVQUNwRWtQLFNBQVN6VixhQUFhakIsV0FBVyx1QkFBdUIsR0FBRyxDQUFDOUssUUFBUTZQLFNBQVMsR0FBRytFLFVBQVUsQ0FBQztVQUMzRjJpQixXQUFXdjNCLFFBQVE2UCxTQUFTO1VBQzVCOG5CLGFBQWE3c0IsV0FBVyxxQkFBcUI7VUFDN0M4c0IsT0FBTztVQUNQcmIsT0FBT3pSLFdBQVcseUJBQXlCO1FBQzVDLENBQUMsR0FDRCxHQUNEO0FBQ0FxakIsZUFBTzdiLFlBQVksTUFBTTtBQUN6QjZiLGVBQU9rcUIsaUJBQ04zZ0IscUJBQXFCO1VBQ3BCSixXQUFXMWlCO1VBQ1h1aUIsTUFBTTdrQixZQUFZLGdCQUFnQjtVQUNsQytJLE1BQU0vSSxZQUFZLHVEQUF1RDtVQUN6RWtQLFNBQVN6VixhQUFhakIsV0FBVyx1QkFBdUIsR0FBRyxDQUFDOUssUUFBUTZQLFNBQVMsR0FBRytFLFVBQVUsQ0FBQztVQUMzRjJpQixXQUFXdjNCLFFBQVE2UCxTQUFTO1VBQzVCOG5CLGFBQWE3c0IsV0FBVyxxQkFBcUI7VUFDN0M4c0IsT0FBTztVQUNQcmIsT0FBT3pSLFdBQVcseUJBQXlCO1VBQzNDMjFDLGlCQUFpQjtRQUNsQixDQUFDLEdBQ0QsR0FDRDtBQUNBdHlCLGVBQU83YixZQUFZLEdBQUc7TUFDdkIsT0FBTztBQUNONmIsZUFBTzdiLFlBQVksV0FBVyxJQUFJQSxZQUFZLE1BQU07TUFDckQ7QUFDQSxhQUFPNmI7SUFDUjtBQUNBLFdBQUEsUUFBQXRqQixPQUFleUgsWUFBWSxXQUFXLENBQUMsRUFBQXpILE9BQUd5SCxZQUFZLE1BQU0sQ0FBQyxFQUFBekgsT0FBRzh0QyxlQUFlO01BQzlFMzRDLFNBQVMsSUFBSXFQLE1BQU0sRUFBRXlGLGFBQWFGLFVBQVU7TUFDNUMvRixRQUFRO01BQ1Jzb0IsTUFBTXBHLGNBQWNuYyxVQUFVO01BQzlCbEgsT0FBTzRFLFlBQVksaUJBQWlCO0lBQ3JDLENBQUMsQ0FBQztFQUNIO0FBQ0EsUUFBTXVtQyxXQUFZN3dCLE9BQU07QUFDdkIsUUFBSSxDQUFDMDRCLGNBQWMxNEIsQ0FBQyxHQUFHO0FBQ3RCLGFBQU87SUFDUjtBQUNBLFFBQUksQ0FBQ0EsRUFBRWhvQixRQUFRMnhCLFNBQVMsS0FBSyxDQUFDcG9CLEdBQUdJLEtBQUt5aUMsV0FBVztBQUNoRCxhQUFPO0lBQ1I7QUFDQSxVQUFNdVUsS0FBSzM0QixFQUFFaG9CLFFBQVFreEIsU0FBUztBQUM5QixXQUFPdXNCLGVBQWU7TUFDckJyOEIsS0FBQSxrREFBQXZXLE9BQXVEa2xCLG1CQUFtQjR3QixFQUFFLENBQUM7TUFDN0VwSSxRQUFRdndCLEVBQUV1d0I7TUFDVjdxQyxPQUFPMlUsUUFBUSxxQ0FBcUMsQ0FBQ3MrQixFQUFFLENBQUM7TUFDeER4cEIsTUFBTW5QLEVBQUVtUDtNQUNScWhCLFNBQVM7SUFDVixDQUFDO0VBQ0Y7QUFDQSxRQUFNb0ksYUFBY0MsaUJBQWdCO0FBQ25DLFFBQUkxeUIsTUFBTWhPLEdBQUdzRyxPQUFPQyxJQUFJLFVBQVU7QUFDbEMsUUFBSSxDQUFDbTZCLGFBQWE7QUFDakIxeUIsYUFBTztJQUNSO0FBQ0EsV0FBT0E7RUFDUjtBQUNBLFFBQU11eUIsZ0JBQWlCMTRCLE9BQU07QUFDNUIsUUFBSSxPQUFPQSxFQUFFaG9CLFlBQVksT0FBTyxDQUFDLEtBQUssT0FBT2dvQixFQUFFbVAsU0FBUyxVQUFXO0FBQ2xFLGFBQU87SUFDUjtBQUNBLFdBQU87RUFDUjtBQUNBLFFBQU0yaEIsa0JBQW1COXdCLE9BQU07QUFDOUIsUUFBSSxDQUFDMDRCLGNBQWMxNEIsQ0FBQyxHQUFHO0FBQ3RCLGFBQU87SUFDUjtBQUNBLFFBQUksQ0FBQ3plLEdBQUdJLEtBQUt5aUMsV0FBVztBQUN2QixhQUFPO0lBQ1I7QUFDQSxVQUFNdVUsS0FBSzM0QixFQUFFaG9CLFFBQVFreEIsU0FBUztBQUM5QixVQUFNNHZCLE9BQU9oMkMsV0FBVyxzQkFBc0I7QUFDOUMsUUFBSXNXO0FBQ0osVUFBTTIvQixpQkFBaUI7QUFDdkIsWUFBUUQsTUFBQTtNQUNQLEtBQUs7QUFDSjEvQixjQUFNclYsYUFBYWpCLFdBQVcscUJBQXFCLEdBQUcsQ0FBQ2lsQixtQkFBbUI0d0IsRUFBRSxHQUFHQyxXQUFXLENBQUMsQ0FBQztBQUM1RjtNQUNELFNBQVM7QUFDUixjQUFNSSxVQUFVejNDLEdBQUdJLEtBQUt5cEMsU0FBUy84QixNQUFNLEdBQUc7QUFDMUMrSyxjQUFNclYsYUFBYWcxQyxnQkFBZ0IsQ0FBQ2h4QixtQkFBbUI0d0IsRUFBRSxHQUFHSyxRQUFRLENBQUMsR0FBR0EsUUFBUSxDQUFDLENBQUMsQ0FBQztNQUNwRjtJQUNEO0FBQ0EsV0FBT3ZELGVBQWU7TUFDckJyOEI7TUFDQTFULE9BQU8yVSxRQUFRLHVCQUF1QixDQUFDcytCLEVBQUUsQ0FBQztNQUMxQ3BJLFFBQVF2d0IsRUFBRXV3QjtNQUNWcGhCLE1BQU1uUCxFQUFFbVA7TUFDUnFoQixTQUFTO0lBQ1YsQ0FBQztFQUNGO0FBQ0EsUUFBTU8saUJBQWtCL3dCLE9BQU07QUFDN0IsUUFBSSxDQUFDMDRCLGNBQWMxNEIsQ0FBQyxHQUFHO0FBQ3RCLGFBQU87SUFDUjtBQUNBLFVBQU1ob0IsVUFBVWdvQixFQUFFaG9CLFFBQVF5eEIsb0JBQW9CLEtBQUt6SixFQUFFaG9CO0FBQ3JELFVBQU1vaEIsTUFBQSwwQ0FBQXZXLE9BQWdEcW5CLFVBQ3JEM29CLEdBQUdJLEtBQUt5cEMsUUFDVCxHQUFDLEdBQUEsRUFBQXZvQyxPQUFJN0ssUUFBUW1YLFVBQVUsR0FBQyxXQUFBLEVBQUF0TSxPQUFZc1YsR0FBR3NHLE9BQU9DLElBQUksZ0JBQWdCLENBQUM7QUFDbkUsV0FBTysyQixlQUFlO01BQ3JCcjhCO01BQ0ExVCxPQUFPMlUsUUFBUSxrQkFBa0IsQ0FBQ3JpQixPQUFPLENBQUM7TUFDMUN1NEMsUUFBUXZ3QixFQUFFdXdCO01BQ1ZwaEIsTUFBTW5QLEVBQUVtUDtNQUNScWhCLFNBQVM7SUFDVixDQUFDO0VBQ0Y7QUFDQSxRQUFNaUYsaUJBQWtCejFCLE9BQU07QUFDN0JBLE1BQUUvVixZQUFZK1YsRUFBRS9WLGNBQWMsT0FBTyxpQkFBaUIrVixFQUFFL1Y7QUFDeEQsV0FBTytxQyxZQUFZaDFCLENBQUM7RUFDckI7QUFHQSxRQUFNNDFCLGlCQUFpQkEsQ0FBQ0QsVUFBVXNELGFBQWE7QUFDOUN4NUMsUUFBSSxnQkFBZ0I7QUFDcEJ5NUMsZUFDQ3ZELFVBQ0FzRCxXQUNJbHZDLE9BQU07QUFDUGt2QyxlQUFTRSxlQUFlcHZDLENBQUMsQ0FBQztJQUMzQixJQUNDb3ZDLGNBQ0o7RUFDRDtBQUVBLFFBQU1ELGFBQWFBLENBQUN2RCxVQUFVbnBCLGVBQWU7QUFDNUMvc0IsUUFBSSxZQUFZO0FBQ2hCLFVBQU0yWixNQUFBLEdBQUF2VyxPQUFTdEIsR0FBR0ksS0FBSzBYLGFBQVcsa0VBQUEsRUFBQXhXLE9BQW1FLElBQUl3RSxNQUN4R3N1QyxRQUNELEVBQUV4bUMsVUFBVSxHQUFDLFdBQUEsRUFBQXRNLE9BQVlDLFdBQVcsbUJBQW1CLENBQUM7QUFDeERyRCxRQUFBLG1CQUFBb0QsT0FBdUJ1VyxHQUFHLENBQUU7QUFDNUIsV0FBT0UsY0FBY0YsS0FBQSxHQUFBdlcsT0FBUXRCLEdBQUdrSCxVQUFRLFNBQUEsR0FBVytqQixVQUFVO0VBQzlEO0FBQ0EsUUFBTTJzQixpQkFBa0Joc0MsY0FBYTtBQUNwQyxVQUFNeXhCLFFBQVEzakIsU0FBUzlOLFNBQVNHLElBQUk7QUFDcEMsUUFBSTtBQUNILFlBQU07UUFBQytOO01BQVMsSUFBSUgsU0FBUzBqQixNQUFNempCLE1BQU1DLEtBQUs7QUFDOUMsWUFBTXNsQixRQUFRLENBQUE7QUFBQyxVQUFBMFksY0FBQTdpQywyQkFDUThFLFNBQUEsR0FBQWcrQjtBQUFBLFVBQUE7QUFBdkIsYUFBQUQsWUFBQWx2QyxFQUFBLEdBQUEsRUFBQW12QyxVQUFBRCxZQUFBM2lDLEVBQUEsR0FBQUMsUUFBa0M7QUFBQSxnQkFBdkJnOUIsV0FBQTJGLFFBQUF6aUM7QUFDVjhwQixnQkFBTXAzQixLQUFLO1lBQ1ZtQyxPQUFPaW9DLFNBQVNuNEI7WUFDaEJ3NkIsUUFBUXJDLFNBQVM5MEM7VUFDbEIsQ0FBQztRQUNGO01BQUEsU0FBQWlZLEtBQUE7QUFBQXVpQyxvQkFBQTdvQyxFQUFBc0csR0FBQTtNQUFBLFVBQUE7QUFBQXVpQyxvQkFBQXRpQyxFQUFBO01BQUE7QUFDQXJYLFVBQUEsYUFBQW9ELE9BQWlCNjlCLE1BQU10OEIsUUFBTSxRQUFBLENBQVE7QUFDckMsYUFBT2sxQyxxQkFBcUI1WSxPQUFPdm9CLEdBQUdzRyxPQUFPQyxJQUFJLFlBQVksQ0FBQztJQUMvRCxRQUFRO0FBQ1BqZixVQUFJLHlDQUF5QztBQUM3QyxhQUFPNjVDLHFCQUFxQixDQUFBLENBQUU7SUFDL0I7RUFDRDtBQUNBLFFBQU1BLHVCQUF1QkEsQ0FBQzVZLE9BQU94WCxhQUFhO0FBQ2pELFVBQU1xd0IsV0FBVyxDQUFDO0FBQ2xCQSxhQUFTN1ksUUFBUUE7QUFDakI2WSxhQUFTcndCLFdBQVdBO0FBQ3BCLGFBQVNwWixJQUFJLEdBQUdBLElBQUk0d0IsTUFBTXQ4QixRQUFRLEVBQUUwTCxHQUFHO0FBQ3RDLFVBQUl5cEMsU0FBU2xELGVBQWUsVUFBYW50QixZQUFZd1gsTUFBTTV3QixDQUFDLEVBQUVpbUMsV0FBVzdzQixVQUFVO0FBQ2xGcXdCLGlCQUFTbEQsYUFBYTtVQUNyQjlnQixPQUFPemxCO1VBQ1ByRSxPQUFPaTFCLE1BQU01d0IsQ0FBQyxFQUFFckU7VUFDaEIrdEMsUUFBUTFwQyxNQUFNLElBQUksT0FBTzR3QixNQUFNNXdCLElBQUksQ0FBQyxFQUFFckU7UUFDdkM7TUFDRDtBQUNBLFVBQUk4dEMsU0FBU3pELG1CQUFtQixVQUFhcFYsTUFBTTV3QixDQUFDLEVBQUVpbUMsV0FBV3JWLE1BQU0sQ0FBQyxFQUFFcVYsUUFBUTtBQUNqRndELGlCQUFTekQsaUJBQWlCO1VBQ3pCdmdCLE9BQU96bEI7VUFDUHJFLE9BQU9pMUIsTUFBTTV3QixDQUFDLEVBQUVyRTtVQUNoQit0QyxRQUFRMXBDLE1BQU0sSUFBSSxPQUFPNHdCLE1BQU01d0IsSUFBSSxDQUFDLEVBQUVyRTtRQUN2QztNQUNEO0lBQ0Q7QUFFQSxXQUFPOHRDO0VBQ1I7QUFLQSxRQUFNRSxhQUFjcHhDLE9BQU07QUFBQSxRQUFBcXhDLFlBQUFDO0FBQ3pCLEtBQUFBLGdCQUFBRCxhQUFBbjRDLEdBQUdNLFFBQU93RyxDQUFDLE9BQUEsUUFBQXN4QyxpQkFBQSxTQUFBQSxlQUFYRCxXQUFVcnhDLENBQUMsSUFBTXBRLE9BQU9vUSxDQUFDLE1BQU0sU0FBWTlHLEdBQUdPLGNBQWN1RyxDQUFDLElBQUlwUSxPQUFPb1EsQ0FBQztFQUMxRTtBQUNBLFFBQU11eEMsWUFBWUEsQ0FBQ3Z4QyxHQUFHd3hDLFFBQVE7QUFDN0J0NEMsT0FBR08sY0FBY3VHLENBQUMsSUFBSXd4QztFQUN2QjtBQUNBLFFBQU0zd0MsYUFBYUEsQ0FBQ2IsR0FBR3d4QyxRQUFRO0FBQzlCLFdBQU9ELFVBQVV2eEMsR0FBR3d4QyxHQUFHO0VBQ3hCO0FBQ0EsUUFBTS8yQyxhQUFjZzNDLGFBQVk7QUFDL0JMLGVBQVdLLE9BQU87QUFDbEIsV0FBT3Y0QyxHQUFHTSxPQUFPaTRDLE9BQU87RUFDekI7QUFDQSxRQUFNdkwsYUFBYUEsTUFBTTtBQUV4QixRQUFJd0wsY0FBYztBQUNsQixRQUFJNWhDLEdBQUdzRyxPQUFPQyxJQUFJLGNBQWMsR0FBRztBQUNsQyxlQUFTczdCLElBQUksR0FBR0EsSUFBSTdoQyxHQUFHc0csT0FBT0MsSUFBSSxjQUFjLEVBQUV0YSxRQUFRLEVBQUU0MUMsR0FBRztBQUM5RCxZQUFJN2hDLEdBQUdzRyxPQUFPQyxJQUFJLGNBQWMsRUFBRXM3QixDQUFDLE1BQU0sU0FBUztBQUNqREQsd0JBQWM7UUFDZjtBQUNBLFlBQUk1aEMsR0FBR3NHLE9BQU9DLElBQUksY0FBYyxFQUFFczdCLENBQUMsTUFBTSxXQUFXO0FBQ25ERCx3QkFBYztRQUNmO01BQ0Q7SUFDRDtBQUVBSCxjQUFVLGNBQWMsR0FBRztBQUMzQkEsY0FBVSxrQkFBa0IsR0FBRztBQUMvQkEsY0FBVSxnQkFBZ0IsS0FBSztBQUMvQkEsY0FBVSxrQkFBa0IsWUFBWTtBQUN4Q0EsY0FBVSxvQkFBb0IsSUFBSTtBQUNsQ0EsY0FBVSxrQkFBa0IsSUFBSTtBQUNoQ0EsY0FBVSxtQkFBbUJHLFdBQVc7QUFDeENILGNBQVUscUJBQXFCLEtBQUs7QUFDcENBLGNBQVUsd0JBQXdCLElBQUk7QUFDdENBLGNBQVUseUJBQXlCLElBQUk7QUFDdkNBLGNBQVUsZ0JBQWdCLElBQUk7QUFDOUJBLGNBQVUsaUJBQWlCLEdBQUc7QUFDOUJBLGNBQVUseUJBQXlCLElBQUk7QUFDdkNBLGNBQVUsNEJBQTRCLElBQUk7QUFDMUNBLGNBQVUsaUJBQWlCLEtBQUs7QUFDaENBLGNBQVUsa0JBQWtCLElBQUk7QUFDaENBO01BQVU7TUFBbUI7O0lBQTJCO0FBQ3hEQSxjQUFVLHFCQUFxQixJQUFJO0FBQ25DQSxjQUFVLHNCQUFzQixJQUFJO0FBQ3BDQSxjQUFVLHFCQUFxQixLQUFLO0FBQ3BDQSxjQUFVLGtCQUFrQixLQUFLO0FBQ2pDQSxjQUFVLHVCQUF1QixJQUFJO0FBQ3JDQSxjQUFVLGlCQUFpQixLQUFLO0FBQ2hDQSxjQUFVLHVCQUF1QixRQUFRO0FBQ3pDQSxjQUFVLGtCQUFrQixJQUFJO0FBQ2hDQSxjQUFVLGVBQWUsS0FBSztBQUM5QkEsY0FBVSxlQUFlLEtBQUs7QUFDOUJBLGNBQVUsaUNBQWlDO01BQzFDdGdELE1BQU07TUFDTkYsT0FBTztNQUNQVixLQUFLO01BQ0x1aEQsUUFBUTtNQUNScmhELE1BQU07TUFDTkUsUUFBUTtNQUNSRSxRQUFRO0lBQ1QsQ0FBQztBQUNENGdELGNBQVUsNkJBQTZCO01BQ3RDdGdELE1BQU07TUFDTkYsT0FBTztNQUNQVixLQUFLO0lBQ04sQ0FBQztBQUNEa2hELGNBQVUsNkJBQTZCO01BQ3RDSyxRQUFRO01BQ1JyaEQsTUFBTTtNQUNORSxRQUFRO01BQ1JFLFFBQVE7SUFDVCxDQUFDO0FBRUQ0Z0QsY0FBVSxlQUFlLElBQUk7QUFDN0JBLGNBQVUsd0JBQXdCLElBQUk7QUFDdENBLGNBQVUsdUJBQXVCLEtBQUs7QUFFdENBLGNBQVUsb0JBQW9CLFdBQVc7QUFDekNBLGNBQVUsa0JBQWtCLEVBQUU7QUFDOUJBLGNBQVUsdUJBQXVCLEdBQUc7QUFFcENBLGNBQVUsa0JBQWtCLEtBQUs7QUFDakNBLGNBQVUsdUJBQXVCLFFBQVE7QUFDekNBLGNBQVUsZ0JBQWdCLEtBQUs7QUFDL0JBLGNBQVUsc0JBQXNCLFFBQVE7QUFDeENBLGNBQVUsNEJBQTRCLEtBQUs7QUFDM0NBLGNBQVUscUJBQXFCLEtBQUs7QUFDcENBLGNBQVUsdUJBQXVCLEtBQUs7QUFDdENBLGNBQVUseUJBQXlCLFFBQVE7QUFDM0NBLGNBQVUsOEJBQThCLElBQUk7QUFDNUNBLGNBQVUsMkJBQTJCLElBQUk7QUFDekNBLGNBQVUsc0JBQXNCLE1BQU07QUFFdENBLGNBQVUsaUJBQWlCLElBQUk7QUFDL0JBLGNBQVUseUJBQXlCLFVBQVU7QUFDN0NBLGNBQVUscUJBQXFCLElBQUk7QUFDbkNBLGNBQVUsd0JBQXdCLFlBQVk7QUFDOUNBLGNBQVUsdUJBQXVCLEVBQUU7QUFFbkNBLGNBQVUsaUJBQWlCLElBQUk7QUFDL0JBLGNBQVUsb0JBQW9CLElBQUk7QUFDbENBLGNBQVUsNEJBQTRCLENBQUM7QUFDdkNBLGNBQVUsNkJBQTZCLEdBQUc7QUFDMUNBLGNBQVUscUJBQXFCLElBQUk7QUFDbkNBLGNBQVUsNkJBQTZCLElBQUk7QUFDM0NBLGNBQVUsNEJBQTRCLElBQUk7QUFDMUNBLGNBQVUsNEJBQTRCLElBQUk7QUFDMUNBLGNBQVUsMkJBQTJCLElBQUk7QUFDekNBLGNBQVUsc0JBQXNCLEtBQUs7QUFDckNBLGNBQVUsMkJBQTJCLE9BQU87QUFFNUNBLGNBQVUscUJBQXFCLElBQUk7QUFDbkNBLGNBQVUscUJBQXFCLEdBQUc7QUFDbENB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UXB0QixRQUFRcXRCLGVBQWVuckIsTUFBTSxDQUFDO1FBQ2hEO01BQ0Q7QUFDQSxZQUFNb3lDLE9BQU9BLE1BQU07QUFDbEJELHVDQUErQjtBQUMvQkQsaUJBQVNHLEtBQUssQ0FBQ0MsUUFBUWprQyxZQUFZO0FBQ2xDQSxrQkFBUXRULDBCQUEwQjtBQUNsQ2Isd0JBQWNtVSxPQUFPO1FBQ3RCLENBQUM7TUFDRjtBQUNBOEIsa0JBQVlpaUMsSUFBSTtJQUNqQjtBQUVBdmlDLE9BQUcwd0IsS0FBSyxrQkFBa0IsRUFBRWdTLElBQUlOLHFCQUFxQjtBQUNyRHBpQyxPQUFHMHdCLEtBQUssdUNBQXVDLEVBQUVnUyxJQUFLQyxjQUFhO0FBQ2xFUCw0QkFBc0JPLFNBQVM5dUIsS0FBSyxnQkFBZ0IsQ0FBQztJQUN0RCxDQUFDO0VBQ0YsR0FBRztBQUVKOztBQ24rUEFELEVBQUV6cUIsTUFBTTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgIm1lc3NhZ2UiLCAiYXJ0aWNsZSIsICJ3aW5kb3ciLCAid2dVTFMiLCAiY2F0ZWdvcnkiLCAiY2F0ZWdvcmllcyIsICJpbWFnZSIsICJpbWFnZXMiLCAic3R1YiIsICJrQiIsICJieXRlcyIsICJkYXkiLCAiZGF5cyIsICJob3VyIiwgImhvdXJzIiwgIm1pbnV0ZSIsICJtaW51dGVzIiwgInNlY29uZCIsICJzZWNvbmRzIiwgIndlZWsiLCAid2Vla3MiLCAibW9udGgiLCAibW9udGhzIiwgInllYXIiLCAieWVhcnMiLCAic2VhcmNoIiwgIlNlYXJjaEhpbnQiLCAid2ViIiwgImdsb2JhbCIsICJhY3Rpb25zIiwgInBvcHVwc01lbnUiLCAidG9nZ2xlUHJldmlld3NIaW50IiwgInJlc2V0IiwgImRpc2FibGUiLCAiZGlzYWJsZVBvcHVwc0hpbnQiLCAicHVyZ2VQb3B1cHNIaW50IiwgIlBvcHVwc0hpbnQiLCAic3BhY2ViYXIiLCAidmlldyIsICJ2aWV3SGludCIsICJ0YWxrIiwgImRlbCIsICJkZWxldGUiLCAiZGVsZXRlSGludCIsICJ1bmRlbGV0ZVNob3J0IiwgIlVuZGVsZXRlSGludCIsICJwcm90ZWN0IiwgInByb3RlY3RIaW50IiwgInVucHJvdGVjdFNob3J0IiwgInVucHJvdGVjdEhpbnQiLCAibW92ZSIsICJNb3ZlcGFnZUhpbnQiLCAiZWRpdCIsICJlZGl0SGludCIsICJuZXciLCAibmV3U2VjdGlvbkhpbnQiLCAibnVsbEVkaXRIaW50IiwgImhpc3QiLCAiaGlzdG9yeSIsICJoaXN0b3J5SGludCIsICJsYXN0IiwgImxhc3RFZGl0IiwgImxhc3RDb250cmliIiwgImxhc3RDb250cmliSGludCIsICJjdXIiLCAiZGlmZkN1ciIsICJvbGRFZGl0IiwgInB1cmdlIiwgInB1cmdlSGludCIsICJyYXciLCAicmF3SGludCIsICJyZW5kZXIiLCAicmVuZGVySGludCIsICJzaW5jZU1lIiwgInNpbmNlTWVIaW50IiwgImVkcyIsICJlZGl0b3JzIiwgImVkaXRvckxpc3RIaW50IiwgInJlbGF0ZWQiLCAicmVsYXRlZENoYW5nZXMiLCAiUmVjZW50Y2hhbmdlc2xpbmtlZEhpbnQiLCAiZWRpdE9sZCIsICJydiIsICJyZXZlcnQiLCAicmV2ZXJ0SGludCIsICJ1bmRvIiwgInVuZG9IaW50IiwgImRlZmF1bHRwb3B1cFJlZGxpbmtTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cEZpeERhYnNTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cEZpeFJlZGlyc1N1bW1hcnkiLCAiZGVmYXVsdHBvcHVwRXh0ZW5kZWRSZXZlcnRTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFJldmVydFRvUHJldmlvdXNTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFJldmVydFN1bW1hcnkiLCAiZGVmYXVsdHBvcHVwUXVlcmllZFJldmVydFRvUHJldmlvdXNTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFJtRGFiTGlua1N1bW1hcnkiLCAiUmVkaXJlY3RzIiwgImRpc2FtYmlnIiwgImRpc2FtYmlnSGludCIsICJtYWlubGluayIsICJ3aWtpTGluayIsICJ3aWtpTGlua3MiLCAid2hhdExpbmtzSGVyZSIsICJXaGF0bGlua3NoZXJlSGludCIsICJ1bndhdGNoU2hvcnQiLCAid2F0Y2hUaGluZ3kiLCAid2F0Y2hIaW50IiwgInVud2F0Y2hIaW50IiwgInJzcyIsICJ1c2VyIiwgImVtYWlsIiwgIkVtYWlsdXNlckhpbnQiLCAic3BhY2UiLCAiUHJlZml4aW5kZXhIaW50IiwgImNvdW50IiwgImthdGVsaW5rSGludCIsICJjb250cmlicyIsICJjb250cmlidXRpb25zIiwgImRlbGV0ZWRDb250cmlicyIsICJDb250cmlidXRpb25zSGludCIsICJ0cmVlIiwgImNvbnRyaWJzVHJlZUhpbnQiLCAibG9nIiwgInVzZXJMb2dIaW50IiwgInVuYmxvY2tTaG9ydCIsICJibG9jayIsICJJcGJsb2NrbGlzdEhpbnQiLCAiQmxvY2tpcEhpbnQiLCAiYmxvY2tMb2dIaW50IiwgInByb3RlY3RMb2dIaW50IiwgInBhZ2VMb2dIaW50IiwgImRlbGV0ZUxvZ0hpbnQiLCAibSIsICJiaW5nU2VhcmNoSGludCIsICJoaXN0b3J5ZmVlZEhpbnQiLCAiVGhhbmtzSGludCIsICJtYXJrcGF0cm9sbGVkSGludCIsICJkZWZhdWx0cG9wdXBSZXZpZXdlZFN1bW1hcnkiLCAicmV2ZGVsIiwgIkRlbGV0ZWRjb250cmlidXRpb25zSGludCIsICJCTE9DS0VEIiwgIkVtYWlsVXNlckhpbnQiLCAiUkFOR0VCTE9DS0VEIiwgIkhJRERFTiIsICJMT0NLRUQiLCAiZGlmZiIsICJhdXRvZWRpdF92ZXJzaW9uIiwgIlByZWZpeEluZGV4SGludCIsICJudWxsRWRpdFN1bW1hcnkiLCAic2VwYXJhdG9yIiwgImNvbW1hIiwgInBvcHVwcyIsICJwZyIsICJyZSIsICJucyIsICJzdHJpbmciLCAid2lraSIsICJtaXNjIiwgIm9wdGlvbiIsICJvcHRpb25EZWZhdWx0IiwgImZsYWciLCAiY2FjaGUiLCAic3RydWN0dXJlcyIsICJ0aW1lciIsICJjb3VudGVyIiwgImN1cnJlbnQiLCAiZm4iLCAiZW5kb2ZsaXN0IiwgIkhUTUxFbGVtZW50IiwgInNldHVwVG9vbHRpcHMiLCAiY29udGFpbmVyIiwgInJlbW92ZSIsICJmb3JjZSIsICJwb3BEYXRhIiwgImNvbmNhdCIsICJnZXRWYWx1ZU9mIiwgImRvY3VtZW50IiwgImVkaXRmb3JtIiwgIndwVGV4dGJveDEiLCAib25tb3VzZXVwIiwgImRvU2VsZWN0aW9uUG9wdXAiLCAiZGVmYXVsdFBvcHVwc0NvbnRhaW5lciIsICJyYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSIsICJhbmNob3JzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAic2V0dXBUb29sdGlwc0xvb3AiLCAicXVlcnlTZWxlY3RvciIsICJzZXR1cFRvb2x0aXBzTG9vcDIiLCAiYmVnaW4iLCAiaG93bWFueSIsICJzbGVlcCIsICJhcmdzIiwgInNpbXBsZVByaW50ZiIsICJmaW5pc2giLCAibG9vcGVuZCIsICJNYXRoIiwgIm1pbiIsICJsZW5ndGgiLCAiaiIsICJkb1Rvb2x0aXAiLCAicmVtb3ZlVG9vbHRpcCIsICJhZGRUb29sdGlwIiwgImEiLCAiaHJlZiIsICJzZXRUaW1lb3V0IiwgInJtVG9jVG9vbHRpcHMiLCAiZmluaXNoZWRMb2FkaW5nIiwgInRvYyIsICJ0b2NMaW5rcyIsICJ0b2NMZW4iLCAiaXNQb3B1cExpbmsiLCAib25tb3VzZW92ZXIiLCAibW91c2VPdmVyV2lraUxpbmsiLCAib25tb3VzZW91dCIsICJtb3VzZU91dFdpa2lMaW5rIiwgIm9ubW91c2Vkb3duIiwgImtpbGxQb3B1cCIsICJoYXNQb3B1cCIsICJvcmlnaW5hbFRpdGxlIiwgInRpdGxlIiwgInJlbW92ZVRpdGxlIiwgInJlc3RvcmVUaXRsZSIsICJyZWdpc3Rlckhvb2tzIiwgIm5wIiwgInBvcHVwTWF4V2lkdGgiLCAic2V0TWF4V2lkdGgiLCAibWFpbkRpdiIsICJzdHlsZSIsICJtYXhXaWR0aCIsICJhZGRIb29rIiwgImFkZFBvcHVwU2hvcnRjdXRzIiwgInJtUG9wdXBTaG9ydGN1dHMiLCAicmVtb3ZlTW9kaWZpZXJLZXlMaXN0ZW5lciIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgIm1vZGlmaWVyS2V5TGlzdGVuZXIiLCAibW91c2VPdmVyV2lraUxpbmszIiwgImV2dCIsICJldmVudCIsICJhY3Rpb24iLCAia2V5IiwgInNlbGYiLCAiZXZ0MiIsICJtb3VzZU92ZXJXaWtpTGluazIiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJmb290bm90ZVRhcmdldCIsICJhVGl0bGUiLCAiVGl0bGUiLCAiZnJvbUFuY2hvciIsICJhbmNoIiwgImFuY2hvciIsICJ0ZXN0IiwgImxUaXRsZSIsICJmcm9tVVJMIiwgImxvY2F0aW9uIiwgInRvU3RyaW5nIiwgImVsIiwgImdldEVsZW1lbnRCeUlkIiwgIm5vZGVOYW1lIiwgIm50IiwgInRvTG93ZXJDYXNlIiwgInBhcmVudE5vZGUiLCAiZm9vdG5vdGVQcmV2aWV3IiwgIngiLCAibmF2cG9wIiwgInNldFBvcHVwSFRNTCIsICJpbm5lckhUTUwiLCAiaWROdW1iZXIiLCAibW9kaWZpZXJQcmVzc2VkIiwgIm1vZCIsICJpc0NvcnJlY3RNb2RpZmllciIsICJfYSIsICJsaW5rIiwgIm5hdnBvcHVwIiwgImlzVmlzaWJsZSIsICJwb3B1cFN0cnVjdHVyZSIsICJzZXREZWZhdWx0IiwgIm5ld05hdnBvcHVwIiwgImxpbmtzSGFzaCIsICJsaW5rcyIsICJwdXNoIiwgInBlbmRpbmciLCAic2ltcGxlUG9wdXBDb250ZW50IiwgInNob3dTb29uSWZTdGFibGUiLCAiZGVsYXkiLCAiY2xlYXJJbnRlcnZhbCIsICJjaGVja1BvcHVwUG9zaXRpb24iLCAic2V0SW50ZXJ2YWwiLCAic2ltcGxlTm9Nb3JlIiwgImQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicyIsICJhcHBlbmQiLCAiZGlzcGxheSIsICJub25zaW1wbGVQb3B1cENvbnRlbnQiLCAicG9wdXBTdHJpbmciLCAiaGFzUG9wdXBNZW51IiwgInNldElubmVySFRNTCIsICJwb3B1cEhUTUwiLCAiZmlsbEVtcHR5U3BhbnMiLCAiZHJhZ0hhbmRsZSIsICJtYWtlRHJhZ2dhYmxlIiwgInBvcHVwUmVkbGlua0hUTUwiLCAiZGVidWdEYXRhIiwgIk5hdnBvcHVwIiwgImZ1enoiLCAicGFyZW50QW5jaG9yIiwgInBhcmVudFBvcHVwIiwgIm93bmVyIiwgInNob3VsZFNob3dOb25TaW1wbGUiLCAic2hvdWxkU2hvdyIsICJkaWZmMiIsICJwYXJhbXMiLCAicGFyc2VQYXJhbXMiLCAib2xkaWQiLCAicmVmZXJlbmNlRWxlbWVudCIsICJsb2FkRGlmZiIsICJsb2FkQVBJUHJldmlldyIsICJiYWNrbGlua3MiLCAibmFtZXNwYWNlSWQiLCAibnNJbWFnZUlkIiwgImFuY2hvckNvbnRhaW5zSW1hZ2UiLCAibG9hZEltYWdlIiwgIm5zQ2F0ZWdvcnlJZCIsICJuc1VzZXJJZCIsICJuc1VzZXJ0YWxrSWQiLCAic3RhcnRBcnRpY2xlUHJldmlldyIsICJwZW5kaW5nTmF2cG9wVGFzayIsICJjb21wbGV0ZWROYXZwb3BUYXNrIiwgInJlZGlyIiwgImxvYWRQcmV2aWV3IiwgIm9yaWdpbmFsQXJ0aWNsZSIsICJsb2FkUHJldmlld0Zyb21SZWRpciIsICJyZWRpck1hdGNoIiwgInRhcmdldCIsICJmcm9tV2lraVRleHQiLCAicmVkaXJUYXJnZXQiLCAid2FyblJlZGlyIiwgInJlZGlyTGluayIsICJpbnNlcnRQcmV2aWV3IiwgImRvd25sb2FkIiwgInJlZGlyZWN0IiwgImV4ZWMiLCAiZGF0YSIsICJ2aXNpYmxlIiwgImluc2VydFByZXZpZXdOb3ciLCAiaWQiLCAid2lraVRleHQiLCAiYXJ0IiwgIm1ha2VGaXhEYWJzIiwgImdldFBhZ2VJbmZvIiwgInNldFBvcHVwVHJhaWxlciIsICJpbWFnZVBhZ2UiLCAiZ2V0VmFsaWRJbWFnZUZyb21XaWtpVGV4dCIsICJpbnNlcnRBcnRpY2xlUHJldmlldyIsICJuc1RlbXBsYXRlSWQiLCAiaCIsICJlbnRpZnkiLCAic3BsaXQiLCAiU3RyaW5nIiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgImpvaW4iLCAiX3RlbXBsYXRlT2JqZWN0MiIsICJwIiwgInByZXBQcmV2aWV3bWFrZXIiLCAic2hvd1ByZXZpZXciLCAiYW5jaG9yaXplIiwgImFuY2hvclN0cmluZyIsICJ1cmxCYXNlIiwgImpvaW5QYXRoIiwgImFydGljbGViYXNlIiwgInVybFN0cmluZyIsICJQcmV2aWV3bWFrZXIiLCAiYW5jaFJlIiwgIlJlZ0V4cCIsICJsaXRlcmFsaXplUmVnZXgiLCAicmVwbGFjZSIsICJtYXRjaCIsICJzbGljZSIsICJtYXgiLCAiaW5kZXhPZiIsICJsaW5lcyIsICJpIiwgImtpbGxQb3B1cDIiLCAiYmFuaXNoIiwgImFib3J0QWxsRG93bmxvYWRzIiwgIkRyYWciLCAiY29uc3RydWN0b3IiLCAic3RhcnRDb25kaXRpb24iLCAiZW5kSG9vayIsICJmaXhFIiwgImUiLCAibGF5ZXJYIiwgIm9mZnNldFgiLCAibGF5ZXJZIiwgIm9mZnNldFkiLCAiaW5pdCIsICJvIiwgIm9Sb290IiwgIm9iaiIsICJzdGFydCIsICJkcmFnZ2luZyIsICJwb3B1cHNfZHJhZ2dhYmxlIiwgImhtb2RlIiwgInZtb2RlIiwgInJvb3QiLCAiTnVtYmVyIiwgImlzTmFOIiwgInBhcnNlSW50IiwgImxlZnQiLCAidG9wIiwgIm9udGhpc1N0YXJ0IiwgIm9udGhpc0VuZCIsICJvbnRoaXMiLCAieSIsICJib3R0b20iLCAicmlnaHQiLCAibGFzdE1vdXNlWCIsICJjbGllbnRYIiwgImxhc3RNb3VzZVkiLCAiY2xpZW50WSIsICJvbm1vdXNlbW92ZURlZmF1bHQiLCAib25tb3VzZW1vdmUiLCAiZTIiLCAiZHJhZyIsICJlbmQiLCAiZXkiLCAiZXgiLCAibngiLCAibnkiLCAib3JpZ2luYWwiLCAicG9wdXBMYXlvdXQiLCAicG9wdXBSZWRpclNwYW5zIiwgInBvcHVwVGl0bGUiLCAibmF2bGlua1N0cmluZ1RvSFRNTCIsICJwb3B1cFRvcExpbmtzIiwgIm5hdkxpbmtzSFRNTCIsICJoaW50IiwgInBvcHVwSW1hZ2UiLCAiaW1hZ2VIVE1MIiwgInBvcHVwUmVkaXJUaXRsZSIsICJwb3B1cFJlZGlyVG9wTGlua3MiLCAiY29weVN0cnVjdHVyZSIsICJvbGRTdHJ1Y3R1cmUiLCAibmV3U3RydWN0dXJlIiwgInByb3AiLCAiT2JqZWN0IiwgImhhc093biIsICJub3N0YWxnaWEiLCAic3RyIiwgImVkaXRzdHIiLCAiZWRpdE9sZGlkU3RyIiwgImhpc3RvcnlzdHIiLCAid2F0Y2hzdHIiLCAiZmFuY3kiLCAid2F0Y2giLCAicG9wdXBPdGhlckxpbmtzIiwgImFkbWluIiwgIm5vcm1hbCIsICJwb3B1cFJlZGlyT3RoZXJMaW5rcyIsICJmYW5jeTIiLCAibWVudXMiLCAic2hvcnRlciIsICJkcm9wZGl2IiwgImVuZGRpdiIsICJsYXN0ZWRpdCIsICJ0aGFuayIsICJqc0hpc3RvcnkiLCAibGlua3NoZXJlIiwgIm51bGxQdXJnZSIsICJ2aWV3T3B0aW9ucyIsICJlZGl0Um93IiwgIm1hcmtQYXRyb2xsZWQiLCAibmV3VG9waWMiLCAicHJvdGVjdERlbGV0ZSIsICJtZW51VGl0bGUiLCAic2hvcnRtZW51cyIsICJsaXRlIiwgInN1YnN0aXR1dGUiLCAiY21kQm9keSIsICJmcm9tUmUiLCAiZnJvbSIsICJmbGFncyIsICJ0byIsICJleGVjQ21kcyIsICJjbWRMaXN0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJlcnIiLCAiZiIsICJwYXJzZUNtZCIsICJwYXJzZUNtZDIiLCAiY2hhckF0IiwgInBhcnNlU3Vic3RpdHV0ZSIsICJyZW1haW5kZXIiLCAidW5Fc2NhcGUiLCAic2VwIiwgIl90ZW1wbGF0ZU9iamVjdDMiLCAidG1wIiwgInNraXBPdmVyIiwgInNlZ21lbnQiLCAic2tpcFRvRW5kIiwgImVuZFNlZ21lbnQiLCAiZmluZE5leHQiLCAiX3NlcCIsICJjaCIsICJzZXRDaGVja2JveCIsICJwYXJhbSIsICJib3giLCAidmFsIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJjaGVja2VkIiwgImF1dG9FZGl0IiwgImF1dG9FZGl0NCIsICJzZXR1cFBvcHVwcyIsICJhdXRvQ2xpY2tUb2tlbiIsICJtb2RpZnlXYXRjaGxpc3QiLCAiYWxyZWFkeVJhbiIsICJjbWRTdHJpbmciLCAiZWRpdGJveCIsICJpbnB1dCIsICJvdXRwdXQiLCAid3BNaW5vcmVkaXQiLCAid3BXYXRjaHRoaXMiLCAicnZpZCIsICJ1cmwiLCAiYXBpd2lraWJhc2UiLCAic3RhcnREb3dubG9hZCIsICJhdXRvRWRpdDIiLCAic3VtbWFyeSIsICJzdW1tYXJ5cHJvbXB0IiwgInN1bW1hcnlub3RpY2UiLCAiZ2V0UnZTdW1tYXJ5IiwgInR4dCIsICJyZXNwb25zZSIsICJwcm9tcHQiLCAid3BTdW1tYXJ5IiwgImF1dG9FZGl0MyIsICJzZXNzaW9uSWQiLCAiYnRuIiwgImJ1dHRvbiIsICJtc2ciLCAidHByaW50ZiIsICJiYW5uZXJNZXNzYWdlIiwgImNsaWNrIiwgIm5vdGlmeSIsICJ0YWciLCAidHlwZSIsICJoZWFkaW5ncyIsICJkaXYiLCAiZXNjYXBlUXVvdGVzSFRNTCIsICJpbnNlcnRCZWZvcmUiLCAidGVtcGxhdGUiLCAianNvbiIsICJnZXRKc09iaiIsICJhbnlDaGlsZCIsICJxdWVyeSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAidGltZXN0YW1wIiwgInJldmlkIiwgInVzZXJoaWRkZW4iLCAiRG93bmxvYWRlciIsICJYTUxIdHRwUmVxdWVzdCIsICJodHRwIiwgImxhc3RNb2RpZmllZCIsICJjYWxsYmFja0Z1bmN0aW9uIiwgIm9uRmFpbHVyZSIsICJhYm9ydGVkIiwgIm1ldGhvZCIsICJhc3luYyIsICJzZW5kIiwgImFib3J0IiwgImdldERhdGEiLCAicmVzcG9uc2VUZXh0IiwgInNldFRhcmdldCIsICJvcGVuIiwgInNldFJlcXVlc3RIZWFkZXIiLCAidXNlckFnZW50IiwgImdldFJlYWR5U3RhdGUiLCAicmVhZHlTdGF0ZSIsICJkb3dubG9hZHNJblByb2dyZXNzIiwgImdldExhc3RNb2RpZmllZERhdGUiLCAibGFzdG1vZCIsICJnZXRSZXNwb25zZUhlYWRlciIsICJEYXRlIiwgInNldENhbGxiYWNrIiwgIm9ucmVhZHlzdGF0ZWNoYW5nZSIsICJnZXRTdGF0dXMiLCAic3RhdHVzIiwgIm5ld0Rvd25sb2FkIiwgIm5ld0Rvd25sb2FkMiIsICJjYWxsYmFjayIsICJvbmZhaWx1cmUiLCAiZmFrZURvd25sb2FkIiwgIkluc3RhIiwgInNldHVwTGl2ZVByZXZpZXciLCAiX0luc3RhJGNvbmYkdXNlciIsICJfYiIsICJjb25mIiwgImJhc2VVcmwiLCAibGFuZyIsICJpbnRlcndpa2kiLCAiZGVmYXVsdF90aHVtYl93aWR0aCIsICJwYXRocyIsICJhcnRpY2xlcyIsICJhcnRpY2xlUGF0aCIsICJtYXRoIiwgImltYWdlc19mYWxsYmFjayIsICJsb2NhbGUiLCAiY29uZmlnIiwgImdldCIsICJuYW1lIiwgInNpZ25hdHVyZSIsICJCTE9DS19JTUFHRSIsICJkdW1wIiwgImNvbnZlcnQiLCAibGwiLCAiciIsICJyZW1haW4iLCAic2giLCAic2hpZnQiLCAicHMiLCAiZjIiLCAiZjMiLCAibzIiLCAiYyIsICJwMiIsICJodG1sX2VudGl0aWVzIiwgImh0bWxlc2NhcGVfdGV4dCIsICJodG1sZXNjYXBlX2F0dHIiLCAic3RyX2ltYXRjaCIsICJiIiwgImwiLCAiY29tcGFyZUxpbmVTdHJpbmdPclJlZyIsICJjb21wYXJlTGluZVN0cmluZyIsICJjaGFyQXRQb2ludCIsICJlbmRsIiwgInBhcnNlX2xpc3QiLCAicHJldiIsICJsX21hdGNoIiwgImlwb3MiLCAicHJldlBvcyIsICJwaSIsICJtYXRjaFBvcyIsICJsaSIsICJhdCIsICJwYXJzZV9pbmxpbmVfbm93aWtpIiwgImR0X21hdGNoIiwgInVuc2hpZnQiLCAicGFyc2VfdGFibGUiLCAicGFyc2VfdGFibGVfZGF0YSIsICJ0ZF9saW5lIiwgIm1hdGNoX2kiLCAidGRfbWF0Y2giLCAicG9wIiwgInRjIiwgInRkIiwgInBhcnNlX3ByZSIsICJwYXJzZV9ibG9ja19pbWFnZSIsICJwYXJzZV9pbWFnZSIsICJzdWJzdHJpbmciLCAid2lkdGgiLCAiYXR0ciIsICJmaWxlbmFtZSIsICJjYXB0aW9uIiwgInRodW1iIiwgImZyYW1lIiwgImNlbnRlciIsICJhbGlnbiIsICJuZXN0aW5nIiwgImxhc3RfYXR0ciIsICJ3X21hdGNoIiwgImxhc3RlbmQiLCAic3Vic3RhcnQiLCAibmVzdGxldiIsICJjbG9zZSIsICJzdWJsb29wIiwgImh0bWwiLCAicGFyc2VfaW5saW5lX3dpa2kiLCAicGFyc2VfaW5saW5lX2ltYWdlcyIsICJsb29wIiwgIndpa2kyIiwgInBhcnNlX2lubGluZV9mb3JtYXR0aW5nIiwgImVtIiwgInN0IiwgImRhdGUiLCAiZ2V0VVRDTWludXRlcyIsICJnZXRVVENIb3VycyIsICJnZXRVVENEYXRlIiwgImdldFVUQ01vbnRoIiwgImdldFVUQ0Z1bGxZZWFyIiwgIl8kMCIsICIkMSIsICIkMiIsICIkMyIsICIkNCIsICJ3aWtpMmh0bWwiLCAiYmFzZXVybCIsICJwb3B1cEZpbHRlclBhZ2VTaXplIiwgImZvcm1hdEJ5dGVzIiwgInBvcHVwRmlsdGVyQ291bnRMaW5rcyIsICJudW0iLCAiY291bnRMaW5rcyIsICJwb3B1cEZpbHRlckNvdW50SW1hZ2VzIiwgImNvdW50SW1hZ2VzIiwgInBvcHVwRmlsdGVyQ291bnRDYXRlZ29yaWVzIiwgImNvdW50Q2F0ZWdvcmllcyIsICJwb3B1cEZpbHRlckxhc3RNb2RpZmllZCIsICJfZGF0YSIsICJub3ciLCAiYWdlIiwgImZvcm1hdEFnZSIsICJhYSIsICJzZWNsZW4iLCAibWlubGVuIiwgImhvdXJsZW4iLCAiZGF5bGVuIiwgIndlZWtsZW4iLCAibnVtd2Vla3MiLCAic3dlZWtzIiwgImFkZHVuaXQiLCAibnVtZGF5cyIsICJzZGF5cyIsICJudW1ob3VycyIsICJzaG91cnMiLCAibnVtbWlucyIsICJzbWlucyIsICJudW1zZWNzIiwgInNzZWNzIiwgInJ1blBvcHVwRmlsdGVycyIsICJsaXN0IiwgInJldCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJwb3B1cEZpbHRlcnMiLCAiZXh0cmFQb3B1cEZpbHRlcnMiLCAicGFnZUluZm9BcnJheSIsICJwYWdlSW5mbyIsICJ1cGNhc2VGaXJzdCIsICJpbWFnZUJyYWNrZXRDb3VudCIsICJjYXRlZ29yeUJyYWNrZXRDb3VudCIsICJwb3B1cEZpbHRlclN0dWJEZXRlY3QiLCAiX2Rvd25sb2FkIiwgImNvdW50cyIsICJzdHViQ291bnQiLCAicmVhbCIsICJzZWN0IiwgInBvcHVwRmlsdGVyRGlzYW1iaWdEZXRlY3QiLCAibmFtZXNwYWNlIiwgImlzRGlzYW1iaWciLCAicm91bmQiLCAiU3RyaW5nd3JhcHBlciIsICJTdHJpbmd3cmFwcGVyMiIsICJzZXRVdGYiLCAib21pdEFuY2hvciIsICJsZW4iLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInVybEFuY2hvciIsICJhbmNob3JGcm9tVXRmIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJzcGxpdHRlZCIsICJ1IiwgImRlY29kZU5hc3RpZXMiLCAic3RyaXBOYW1lc3BhY2UiLCAic3BlY2lhbGRpZmYiLCAibnNTcGVjaWFsSWQiLCAibWFpbiIsICJmcm9tQm90SW50ZXJmYWNlIiwgImV4dHJhY3RlZCIsICJpc1NhZmFyaSIsICJ1bmVzY2FwZSIsICJkZWNvZGVVUkkiLCAiZGVjb2RlRXNjYXBlcyIsICJteURlY29kZVVSSSIsICJoaW50VmFsdWUiLCAic2FmZURlY29kZVVSSSIsICJ0b1VzZXJOYW1lIiwgIndpdGhOcyIsICJ1c2VyTmFtZSIsICJ0IiwgInRvVGFsa1BhZ2UiLCAibG9jYWxpemVkTmFtZXNwYWNlIiwgInRhbGtQYWdlIiwgImlzVGFsa1BhZ2UiLCAidG9BcnRpY2xlRnJvbVRhbGtQYWdlIiwgImFydGljbGVGcm9tVGFsa1BhZ2UiLCAiYXJ0aWNsZUZyb21UYWxrT3JBcnRpY2xlIiwgImlzSXBVc2VyIiwgImlwVXNlciIsICJuc01haW5zcGFjZUlkIiwgInNldFVybCIsICJ1cmxmcmFnIiwgInYiLCAia2VlcFNwYWNlcyIsICJlbmNvZGVVUkkiLCAicmVtb3ZlQW5jaG9yIiwgInRvVXJsIiwgInRpdGxlYmFzZSIsICJzcGVjaWFsRGlmZiIsICJpbmNsdWRlcyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ6IiwgImhlbHBlciIsICJkZWNvZGVFeHRyYXMiLCAic2VjdFN0dWIiLCAicmVhbFN0dWIiLCAiaXNWYWxpZEltYWdlTmFtZSIsICJpc0luU3RyaXBwYWJsZU5hbWVzcGFjZSIsICJpc0luTWFpbk5hbWVzcGFjZSIsICJraWRzIiwgImNoaWxkTm9kZXMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAia2lkIiwgIm1hcmtOb3BvcHVwU3BhbkxpbmtzIiwgImluTm9wb3B1cFNwYW4iLCAiZ2V0QXR0cmlidXRlIiwgImJhc2VuYW1lcyIsICJ1cmxOb1BvcHVwIiwgIm1hcmtOb3BvcHVwU3BhbkxpbmtzMiIsICJmaXhWZWN0b3JNZW51UG9wdXBzIiwgIiRib2R5IiwgIiQiLCAiZmluZCIsICJ0b0FycmF5IiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImFzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImdldFBhZ2VXaXRoQ2FjaGluZyIsICJvbkNvbXBsZXRlIiwgImZpbmRJblBhZ2VDYWNoZSIsICJnZXRQYWdlIiwgImFkZERvd25sb2FkIiwgImFkZFBhZ2VUb0NhY2hlIiwgInBhZ2UiLCAianNvbl9yZXQiLCAiSlNPTiIsICJwYXJzZSIsICJ3YXJuaW5ncyIsICJ3IiwgImVycm9yIiwgImVycmxvZyIsICJjb2RlIiwgImluZm8iLCAidG9VcHBlckNhc2UiLCAiZmluZEluQXJyYXkiLCAiYXJyIiwgImZvbyIsICJuZXh0T25lIiwgImFycmF5IiwgImVzY2FwZVJlZ0V4cCIsICJwcm90b3R5cGUiLCAicmVtb3ZlTnVsbHMiLCAiZmlsdGVyIiwgInN1YnMiLCAiY21kIiwgImlzU3RyaW5nIiwgImlzTnVtYmVyIiwgImlzUmVnRXhwIiwgImlzQXJyYXkiLCAiQXJyYXkiLCAiaXNPYmplY3QiLCAiaXNGdW5jdGlvbiIsICJGdW5jdGlvbiIsICJyZXBlYXRTdHJpbmciLCAibXVsdCIsICJ6ZXJvRmlsbCIsICJtYXAiLCAibWFwX2FycmF5IiwgIm1hcF9vYmplY3QiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAidGV4dCIsICJ1bmVzY2FwZVF1b3Rlc0hUTUwiLCAicmV0YXJnZXREYWIiLCAibmV3VGFyZ2V0IiwgIm9sZFRhcmdldCIsICJmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZSIsICJ0aXRsZVRvRWRpdCIsICJjaGFuZ2VMaW5rVGFyZ2V0TGluayIsICJjbGlja0J1dHRvbiIsICJtaW5vciIsICJsaXN0TGlua3MiLCAid2lraXRleHQiLCAicmVnIiwgIm9taXRSZWdleCIsICJ3aWtQb3MiLCAicm1EdXBlc0Zyb21Tb3J0ZWRMaXN0IiwgInNvcnQiLCAid2lrVGFyZ2V0IiwgIm1ldGgiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAibWFrZUZpeERhYiIsICJzZXRQb3B1cEhUTUwyIiwgImVsZW1lbnRJZCIsICJwb3B1cElkIiwgIm9uU3VjY2VzcyIsICJwb3B1cEVsZW1lbnQiLCAicmNpZCIsICJzdHJ1Y3R1cmUiLCAic3BhbnMiLCAiZmxhdHRlbiIsICJsYXlvdXQiLCAibnVtc3BhbnMiLCAicmVkaXJzIiwgInJlZGlyU3BhbnMiLCAiZm91bmQiLCAic3RydWN0dXJlZm4iLCAic2V0Zm4iLCAic2V0UG9wdXBUaXBzQW5kSFRNTCIsICJmbGF0dGVuMiIsICJwb3B1cEhUTUwyIiwgIm1ha2VFbXB0eVNwYW5zIiwgIm1ha2VFbXB0eVNwYW5zMiIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJlbXB0eVNwYW5IVE1MIiwgIm5vZGVUeXBlIiwgImVtcHR5U3BhbkhUTUwyIiwgImNsYXNzbmFtZSIsICJjbGFzc0FsaWFzZXMiLCAicG9wdXBTZWNvbmRQcmV2aWV3IiwgIl9hcnRpY2xlIiwgInBvcFRpcHNTb29uRm4iLCAid2hlbiIsICJwb3BUaXBzIiwgImRpdm5hbWUiLCAiaWRudW1iZXIiLCAiZnV6enlDdXJzb3JPZmZNZW51cyIsICJfeCIsICJfeSIsICJfZnV6eiIsICJwYXJlbnQiLCAidWxzIiwgIl9pdGVyYXRvcjEwIiwgIl9zdGVwMTAiLCAidWwiLCAib2Zmc2V0V2lkdGgiLCAibGltaXRIb3Jpem9udGFsUG9zaXRpb24iLCAibW91c2VPdXRXaWtpTGluazIiLCAidHJhY2tlciIsICJwb3NDaGVja2VySG9vayIsICJkaXJ0eSIsICJtb3VzZU92ZXJOYXZwb3AiLCAiaXNXaXRoaW4iLCAibW91c2VMZWF2aW5nVGltZSIsICJydW5TdG9wUG9wdXBUaW1lciIsICJzdG9wUG9wdXBUaW1lciIsICJvcmlnaW5hbERhdGEiLCAibWF4Q2hhcmFjdGVycyIsICJtYXhTZW50ZW5jZXMiLCAic2V0RGF0YSIsICJtYXhTaXplIiwgImtpbGxDb21tZW50cyIsICJraWxsRGl2cyIsICJraWxsR2FsbGVyaWVzIiwgImtpbGwiLCAib3BlbmluZyIsICJjbG9zaW5nIiwgInN1Ym9wZW5pbmciLCAic3ViY2xvc2luZyIsICJyZXBsIiwgIm9sZGsiLCAiayIsICJraWxsU3R1ZmYiLCAib3AiLCAibWFrZVJlZ2V4cCIsICJjbCIsICJzYiIsICJzYyIsICJvcFJlc3VsdCIsICJpbmRleCIsICJkZXB0aCIsICJyZW1vdmFsIiwgInByZWZpeCIsICJzdWZmaXgiLCAicmVTdHIiLCAic3AiLCAia2lsbEJveFRlbXBsYXRlcyIsICJraWxsVGVtcGxhdGVzIiwgImtpbGxUYWJsZXMiLCAia2lsbEltYWdlcyIsICJmb3JiaWRkZW5OYW1lc3BhY2VBbGlhc2VzIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgImxvY2FsaXplZE5hbWVzcGFjZUxjIiwgImtpbGxIVE1MIiwgImtpbGxDaHVua3MiLCAiaXRhbGljQ2h1bmtSZWdleCIsICJtb3B1cCIsICJmaXJzdEJpdCIsICJzdHVmZiIsICJub3RTZW50ZW5jZUVuZHMiLCAiZml4U2VudGVuY2VFbmRzIiwgImZ1bGxMZW5ndGgiLCAiZGQiLCAiZmlyc3RTZW50ZW5jZXMiLCAic3RycyIsICJraWxsQmFkV2hpdGVzcGFjZSIsICJtYWtlUHJldmlldyIsICJraWxsTXVsdGlsaW5lVGVtcGxhdGVzIiwgImZpeEhUTUwiLCAic3RyaXBMb25nVGVtcGxhdGVzIiwgImVzV2lraTJIdG1sUGFydCIsICJyZUxpbmtzIiwgImxhc3RJbmRleCIsICJyZXN1bHQiLCAicG9zdGZpeEluZGV4IiwgIl9tYXRjaCQiLCAiZWRpdFN1bW1hcnlQcmV2aWV3IiwgInJlQWVzIiwgInNlY3Rpb24iLCAicG9zdGZpeCIsICJzZWN0aW9uTGluayIsICJtb3JlIiwgIm1vcmVMaW5rIiwgIm9uY2xpY2siLCAicXVlcnlUeXBlIiwgImh0bWxHZW5lcmF0b3IiLCAidXNlcm5hbWVhcnQiLCAiQVBJaGlzdG9yeVByZXZpZXdIVE1MIiwgIkFQSWNhdGVnb3J5UHJldmlld0hUTUwiLCAidXNlcm5hbWUiLCAiQVBJdXNlckluZm9QcmV2aWV3SFRNTCIsICJBUEljb250cmlic1ByZXZpZXdIVE1MIiwgInRyYWlsIiwgIkFQSWltYWdlcGFnZVByZXZpZXdIVE1MIiwgIkFQSWJhY2tsaW5rc1ByZXZpZXdIVE1MIiwgIkFQSXJldmlzaW9uUHJldmlld0hUTUwiLCAiZmV0Y2hVc2VyR3JvdXBOYW1lcyIsICJ0aGVuIiwgInNob3dBUElQcmV2aWV3IiwgImdvIiwgImxpbmtMaXN0IiwgImJ1ZiIsICJfaXRlcmF0b3IxMSIsICJfc3RlcDExIiwgImdldFRpbWVPZmZzZXQiLCAidHoiLCAib3B0aW9ucyIsICJnZXRUaW1lWm9uZSIsICJ0aW1lWm9uZSIsICJ0ekNvbXBvbmVudHMiLCAidXNlVGltZU9mZnNldCIsICJJbnRsIiwgIkRhdGVUaW1lRm9ybWF0IiwgImZvcm1hdFRvUGFydHMiLCAiZ2V0TG9jYWxlcyIsICJsb2NhbGVzIiwgInVzZXJMYW5ndWFnZSIsICJnZXRNV0RhdGVGb3JtYXQiLCAic3VwcG9ydGVkTG9jYWxlc09mIiwgIm5hdmlnYXRvciIsICJsYW5ndWFnZSIsICJlZGl0UHJldmlld1RhYmxlIiwgInJlYWxseUNvbnRyaWJzIiwgImN1cmFydCIsICJtYWtlRmlyc3RDb2x1bW5MaW5rcyIsICJjdXJyZW50UmV2aXNpb24iLCAiZmlyc3RSZXZpZCIsICJfaXRlcmF0b3IxMiIsICJfc3RlcDEyIiwgImVkaXREYXRlIiwgInRoaXNEYXkiLCAiZm9ybWF0dGVkRGF0ZSIsICJ0aGlzVGltZSIsICJmb3JtYXR0ZWRUaW1lIiwgImNvbDN1cmwiLCAiY29sM3R4dCIsICJjb21tZW50IiwgImNvbnRlbnQiLCAiY29tbWVudGhpZGRlbiIsICJhZGp1c3REYXRlIiwgIm9mZnNldCIsICJjb252ZXJ0VGltZVpvbmUiLCAidG9Mb2NhbGVTdHJpbmciLCAiZm9ybWF0dGVkRGF0ZVRpbWUiLCAiZDIiLCAiZ2V0RnVsbFllYXIiLCAiZ2V0TW9udGgiLCAiZ2V0RGF0ZSIsICJnZXRIb3VycyIsICJnZXRNaW51dGVzIiwgImdldFNlY29uZHMiLCAidG9Mb2NhbGVEYXRlU3RyaW5nIiwgImdldFVUQ1NlY29uZHMiLCAidG9Mb2NhbGVUaW1lU3RyaW5nIiwgInVzZXJpbmZvUmVzcG9uc2UiLCAicXVlcnlPYmoiLCAidXNlcnMiLCAibWVzc2FnZXMiLCAiZ3JvdXBzIiwgIl9pdGVyYXRvcjEzIiwgIl9zdGVwMTMiLCAiZ3JvdXBOYW1lIiwgImdsb2JhbHVzZXJpbmZvIiwgIl9pdGVyYXRvcjE0IiwgIl9zdGVwMTQiLCAiZ2V0TXdBcGkiLCAibG9hZE1lc3NhZ2VzSWZNaXNzaW5nIiwgImpzT2JqIiwgIm1pc3NpbmciLCAiY29udGVudG1vZGVsIiwgIl9pdGVyYXRvcjE1IiwgIl9zdGVwMTUiLCAiY29udGludWUiLCAiYmxjb250aW51ZSIsICJBUElzaGFyZWRJbWFnZVBhZ2VQcmV2aWV3SFRNTCIsICJwb3B1cGlkIiwgInJlcXVlc3RpZCIsICJhbHQiLCAiaW1hZ2VyZXBvc2l0b3J5IiwgImVuY2FydCIsICJzaGFyZWRfdXJsIiwgImFwaWNvbW1vbnNiYXNlIiwgImNvbW1vbnNiYXNlIiwgImxvYWRlciIsICJsb2FkIiwgIkFQSWltYWdlbGlua3NQcmV2aWV3SFRNTCIsICJqc29iaiIsICJpbWFnZXVzYWdlIiwgIl9pdGVyYXRvcjE2IiwgIl9zdGVwMTYiLCAiY2F0ZWdvcnltZW1iZXJzIiwgIl9pdGVyYXRvcjE3IiwgIl9zdGVwMTciLCAiY21jb250aW51ZSIsICJxdWVyeW9iaiIsICJpbnZhbGlkIiwgImJsb2NrZWRieSIsICJibG9ja3BhcnRpYWwiLCAibG9ja2VkU3VsQWNjb3VudElzQXR0YWNoZWRUb1RoaXMiLCAidW5hdHRhY2hlZCIsICJnZW5kZXIiLCAiX2l0ZXJhdG9yMTgiLCAiX3N0ZXAxOCIsICJfaXRlcmF0b3IxOSIsICJfc3RlcDE5IiwgInJlZ2lzdHJhdGlvbiIsICJfdXNlciRlZGl0Y291bnQiLCAiZWRpdGNvdW50IiwgInVzZXJjb250cmlicyIsICJibG9ja3MiLCAicmJzdHIiLCAicmFuZ2VzdGFydCIsICJyYW5nZWVuZCIsICJyZXN0cmljdGlvbnMiLCAic3BsaWNlIiwgIl9uYXZwb3AiLCAiZWRpdHMiLCAic2V0dXBEZWJ1Z2dpbmciLCAicG9wdXBEZWJ1ZyIsICJjb25zb2xlIiwgInBvcHVwc0luc2VydEltYWdlIiwgImltYWdlaW5mbyIsICJpbWFnZXBhZ2UiLCAidGh1bWJ1cmwiLCAic3JjIiwgIm1pbWUiLCAiZGVzY3JpcHRpb251cmwiLCAidG9nZ2xlU2l6ZSIsICJ0b2dnbGVTaXplMiIsICJpbWciLCAiZmlyc3RDaGlsZCIsICJtYXRjaGVkIiwgInJlbW92ZU1hdGNoZXNVbmxlc3MiLCAicmUxIiwgInBhcmVuY291bnQiLCAicmUyIiwgInNldE5hbWVzcGFjZXMiLCAic2V0UmVkaXJzIiwgIlIiLCAicmVkaXJMaXN0cyIsICJhciIsICJiZSIsICJiZyIsICJicyIsICJibiIsICJjcyIsICJjeSIsICJkZSIsICJlbyIsICJlcyIsICJldCIsICJnYSIsICJnbCIsICJoZSIsICJodSIsICJpcyIsICJpdCIsICJqYSIsICJtayIsICJuZHMiLCAibmwiLCAibm4iLCAicGwiLCAicHQiLCAicnUiLCAic2siLCAic3IiLCAidHQiLCAidWsiLCAidmkiLCAieWkiLCAiemgiLCAicmVkaXJMaXN0IiwgInNldEludGVyd2lraSIsICJ3aWtpbWVkaWEiLCAibnNSZSIsICJpbWFnZU5hbWVzcGFjZVZhcmlhbnRzIiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMyIiwgIl9sb2NhbGl6ZWROYW1lc3BhY2VMYyIsICJfbmFtZXNwYWNlSWQiLCAibnNSZUltYWdlIiwgImdldEVkaXRib3hTZWxlY3Rpb24iLCAic2VsZWN0aW9uIiwgImNyZWF0ZVJhbmdlIiwgInNlbFN0YXJ0IiwgInNlbGVjdGlvblN0YXJ0IiwgInNlbEVuZCIsICJzZWxlY3Rpb25FbmQiLCAic2VsIiwgInBpcGUiLCAiZG9TZXBhcmF0ZVNlbGVjdGlvblBvcHVwIiwgIk1vdXNldHJhY2tlciIsICJsb29wRGVsYXkiLCAiYWN0aXZlIiwgImhvb2tzIiwgInJ1bkhvb2tzIiwgInJlbW92ZU9iaiIsICJyZW1vdmVIb29rcyIsICJuZXdIb29rcyIsICJ0cmFjayIsICJwYWdlWCIsICJwYWdlWSIsICJkb2NFbHQiLCAiZG9jdW1lbnRFbGVtZW50IiwgInNjcm9sbExlZnQiLCAic2Nyb2xsVG9wIiwgInNldFBvc2l0aW9uIiwgImxhc3RIb29rX3giLCAibGFzdEhvb2tfeSIsICJlbmFibGUiLCAic2F2ZWRMaXN0ZW5lciIsICJ1aWQiLCAibm9zaG93IiwgImNyZWF0ZSIsICJ1bmhpZGUiLCAiaGlkZSIsICJob29rSWRzIiwgImRvd25sb2FkcyIsICJjb25zdHJhaW5lZCIsICJoZWlnaHQiLCAiY3JlYXRlTWFpbkRpdiIsICJyZXBvc2l0aW9uIiwgIm5vTGltaXRIb3IiLCAidG9vV2lkZSIsICJ1cGRhdGVEaW1lbnNpb25zIiwgImNXaWR0aCIsICJjbGllbnRXaWR0aCIsICJuYXR1cmFsV2lkdGgiLCAibmV3TGVmdCIsICJyYWlzZSIsICJ6SW5kZXgiLCAiaGlnaGVzdCIsICJzaG93IiwgInRpbWUiLCAic3RhYmxlX3giLCAic3RhYmxlX3kiLCAic3RhYmxlU2hvdyIsICJuZXdfeCIsICJuZXdfeSIsICJkeCIsICJkeSIsICJmdXp6MiIsICJzaG93U29vblN0YWJsZVRpbWVyIiwgImtleUhvb2tzIiwgIlJlZmxlY3QiLCAiYXBwbHkiLCAiaG9vayIsICJob29rSWQiLCAiX3RoaXMkY2xhc3NOYW1lIiwgIm9uY2xpY2tMaXN0ZW5lciIsICJwb3NpdGlvbiIsICJtaW5XaWR0aCIsICJoYW5kbGVOYW1lIiwgInNoaWZ0S2V5IiwgImFib3J0RG93bmxvYWRzIiwgIm9mZnNldEhlaWdodCIsICJfaXRlcmF0b3IyMCIsICJfc3RlcDIwIiwgImRlbEZtdCIsICJpbnNGbXQiLCAiY291bnRDcm9zc2luZ3MiLCAiZWplY3QiLCAicm93IiwgIl9pdGVyYXRvcjIxIiwgIl9zdGVwMjEiLCAic2hvcnRlbkRpZmZTdHJpbmciLCAic2hvcnRlbkRpZmZTdHJpbmcyIiwgImNvbnRleHQiLCAiZGlmZlN0cmluZyIsICJvU3BsaXR0ZWQiLCAiblNwbGl0dGVkIiwgIm91dCIsICJhY2MiLCAibWF4T3V0cHV0UGFpciIsICJwYWlyZWQiLCAianNSZXNlcnZlZFByb3BlcnRpZXMiLCAiZGlmZkJ1Z0FsZXJ0IiwgImRpZmZCdWdBbGVydDIiLCAid29yZCIsICJtYWtlRGlmZkhhc2h0YWJsZSIsICJfc3JjJGkiLCAiX3JldCRfc3JjJGkiLCAib3MiLCAic2V0U2l0ZUluZm8iLCAicG9wdXBMb2NhbERlYnVnIiwgImhvc3RuYW1lIiwgIndpa2lhIiwgImlzTG9jYWwiLCAic3RhcnRzV2l0aCIsICJjb21tb25zIiwgInBvcnQiLCAic2l0ZWJhc2UiLCAic2V0VXNlckluZm8iLCAidXN1c2VycyIsICJ1c3Byb3AiLCAiY2FuUmV2aWV3IiwgInJpZ2h0cyIsICJmZXRjaFNwZWNpYWxQYWdlTmFtZXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibWV0YSIsICJzaXByb3AiLCAidXNlbGFuZyIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJzcGVjaWFscGFnZWFsaWFzZXMiLCAic2V0VGl0bGVCYXNlIiwgInByb3RvY29sIiwgImJvdEludGVyZmFjZVBhdGgiLCAiQVBJUGF0aCIsICJ0aXRsZXRhaWwiLCAid2lraWJhc2UiLCAic2V0TWFpblJlZ2V4IiwgInJlU3RhcnQiLCAicHJlVGl0bGVzIiwgInJlRW5kIiwgImJ1aWxkU3BlY2lhbFBhZ2VHcm91cCIsICJzcGVjaWFsUGFnZU9iaiIsICJ2YXJpYW50cyIsICJyZWFsbmFtZSIsICJfaXRlcmF0b3IyMiIsICJhbGlhc2VzIiwgIl9zdGVwMjIiLCAiYWxpYXMiLCAic2V0UmVnZXhwcyIsICJfaXRlcmF0b3IyMyIsICJfc3RlcDIzIiwgInNwZWNpYWxwYWdlIiwgImltIiwgIl90ZW1wbGF0ZU9iamVjdDQiLCAiX3RlbXBsYXRlT2JqZWN0NSIsICJzZXR1cENhY2hlIiwgInNldE1pc2MiLCAiY2xpZW50IiwgInNldHVwUG9wdXBzMiIsICJjb21wbGV0ZWQiLCAic2V0T3B0aW9ucyIsICJkZWZhdWx0TmF2bGlua1NwZWMiLCAiX2hpbnQiLCAiZXhwYW5kQ29uZGl0aW9uYWxOYXZsaW5rU3RyaW5nIiwgImV4cGFuZENvbmRpdGlvbmFsTmF2bGlua1N0cmluZzIiLCAicmVjdXJzaW9uQ291bnQiLCAiY29uZGl0aW9uYWxTcGxpdFJlZ2V4IiwgIm51bVBhcmVucyIsICJ0ZXN0U3RyaW5nIiwgInRydWVTdHJpbmciLCAiZmFsc2VTdHJpbmciLCAidGVzdFJlc3VsdCIsICJuYXZsaW5rU3RyaW5nVG9BcnJheSIsICJfaXRlcmF0b3IyNCIsICJfc3RlcDI0IiwgIm5hdmxpbmtUYWciLCAic3MiLCAic3NzIiwgIm5hdmxpbmtTdWJzdGl0dXRlSFRNTCIsICJuYXZsaW5rRGVwdGgiLCAibWFnaWMiLCAibWVudWRlcHRoIiwgIm1lbnVyb3dkZXB0aCIsICJfaXRlcmF0b3IyNSIsICJfc3RlcDI1IiwgImdldE5ld1dpbiIsICJnZXRQcmludEZ1bmN0aW9uIiwgInRhZ1R5cGUiLCAicHJpbnQiLCAic2hvcnRjdXQiLCAiYWRkUG9wdXBTaG9ydGN1dCIsICJwb3B1cExpbmtzTmV3V2luZG93IiwgIm5ld1dpbiIsICJub1BvcHVwIiwgInNwZWNpYWxMaW5rIiwgIm1hZ2ljV2F0Y2hMaW5rIiwgInRpdGxlZFdpa2lMaW5rIiwgIl9wZyRjdXJyZW50JGxpbmskb3JpZyIsICJhcmluTGluayIsICJlZGl0Q291bnRlckxpbmsiLCAiZWRpdG9yTGlzdExpbmsiLCAidGl0bGVkRGlmZkxpbmsiLCAibWFnaWNIaXN0b3J5TGluayIsICJzaW1wbGVQb3B1cHMiLCAicG9wdXBNZW51TGluayIsICJwb3B1cEhhbmRsZUtleXByZXNzIiwgInBvcHVwSGFuZGxlS2V5cHJlc3MyIiwgIl9ldnQka2V5Q29kZSIsICJrZXlDb2RlIiwgIndoaWNoIiwgImxldHRlciIsICJmcm9tQ29kZVBvaW50IiwgInN0YXJ0TGluayIsICJsYXN0UG9wdXBMaW5rU2VsZWN0ZWQiLCAicHJldmVudERlZmF1bHQiLCAiZm9jdXMiLCAib2xkUG9wdXBPbmtleXByZXNzIiwgIm9ua2V5cHJlc3MiLCAiYWRkTGlua1Byb3BlcnR5IiwgInByb3BlcnR5IiwgImRpZmZEYXRhIiwgIm9sZFJldiIsICJuZXdSZXYiLCAiYXBpMiIsICJmcm9tdGl0bGUiLCAidG9yZWxhdGl2ZSIsICJmcm9tcmV2IiwgInRvcmV2IiwgImNvbXBhcmUiLCAiZnJvbXJldmlkIiwgInRvcmV2aWQiLCAiYWRkUmV2aWV3TGluayIsICJkb25lRGlmZiIsICJyZXZpZHMiLCAic3RhYmxlX3JldmlkIiwgImZsYWdnZWQiLCAicGFyYW1zMiIsICJwb3N0V2l0aFRva2VuIiwgImZhaWwiLCAiX2l0ZXJhdG9yMjYiLCAiX3N0ZXAyNiIsICJfaTMiLCAiX3JldmlzaW9ucyIsICJyZXZpc2lvbiIsICJpbnNlcnREaWZmIiwgInJtQm9yaW5nTGluZXMiLCAiYWFhIiwgImJiIiwgImJiYiIsICJzdHJpcE91dGVyQ29tbW9uTGluZXMiLCAib2xkbGluZXMiLCAibmV3bGluZXMiLCAiaW5uZXIiLCAidHJ1bmNhdGVkIiwgInBvcHVwRGlmZk1heExpbmVzIiwgInBvcHVwRGlmZkNvbnRleHRMaW5lcyIsICJsaW5lRGlmZiIsICJsaW5lczIiLCAib2xkbGluZXMyIiwgIm5ld2xpbmVzMiIsICJkaWZmRGF0ZXNUYWJsZSIsICJkaWZmRGF0ZXNUYWJsZVJvdyIsICJsYWJlbCIsICJsYXN0TW9kaWZpZWREYXRlIiwgInJldmxpbmsiLCAiZ2VuZXJhbExpbmsiLCAiYWN0aW9uTmFtZSIsICJzYXZlZE9sZGlkIiwgIm9sZGlkRGF0YSIsICJyZXZpc2lvblN0cmluZyIsICJyZXZlcnRTdW1tYXJ5IiwgImJhc2UiLCAiY3NzQ2xhc3MiLCAiZGVmYXVsdE5hdmxpbmtDbGFzc25hbWUiLCAiZ2VuZXJhbE5hdkxpbmsiLCAiZ2V0TGFzdENvbnRyaWIiLCAid2lraXBhZ2UiLCAiZ2V0SGlzdG9yeUluZm8iLCAicHJvY2Vzc0xhc3RDb250cmliSW5mbyIsICJmaXJzdE5ld0VkaXRvciIsICJlZGl0b3IiLCAibmV3VXJsIiwgImRpc3BsYXlVcmwiLCAiZ2V0RGlmZlNpbmNlTXlFZGl0IiwgInByb2Nlc3NEaWZmU2luY2VNeUVkaXQiLCAiZnJpZW5kbHlOYW1lIiwgIm15TGFzdEVkaXQiLCAicHVyZ2VQb3B1cHMiLCAicHJvY2Vzc0FsbFBvcHVwcyIsICJudWxsaWZ5IiwgImRpc2FibGVQb3B1cHMiLCAidG9nZ2xlUHJldmlld3MiLCAibWFnaWNXYXRjaExpbmsyIiwgIl90ZW1wbGF0ZU9iamVjdDYiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJyZXFEYXRhIiwgInRpdGxlcyIsICJ1bndhdGNoIiwgIm13VGl0bGUiLCAibmV3RnJvbVRleHQiLCAibWVzc2FnZU5hbWUiLCAiZ2V0TmFtZXNwYWNlSWQiLCAicGFyc2VEb20iLCAiX3gyIiwgIl94MyIsICJhcmd1bWVudHMiLCAianNVcmwiLCAib25DbGljayIsICJfdGVtcGxhdGVPYmplY3Q3IiwgIl90ZW1wbGF0ZU9iamVjdDgiLCAiX2wkc2VwIiwgImFwcGVuZFBhcmFtc1RvTGluayIsICJsaW5rc3RyIiwgImNBIiwgImNocyIsICJjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0IiwgIl90ZW1wbGF0ZU9iamVjdDkiLCAiX3RlbXBsYXRlT2JqZWN0MTAiLCAiX3RlbXBsYXRlT2JqZWN0MTEiLCAiX3RlbXBsYXRlT2JqZWN0MTIiLCAibGsiLCAiYWxzb0NoYW5nZUxhYmVsIiwgInNhbmVMaW5rQ2hlY2siLCAidU4iLCAidG9vbERiTmFtZSIsICJjb29raWVTdHlsZSIsICJ0b29sIiwgImRlZmF1bHRUb29sVXJsIiwgInRoZVdpa2kiLCAid2hhdE5leHQiLCAiZ2V0SGlzdG9yeSIsICJwcm9jZXNzSGlzdG9yeSIsICJfaXRlcmF0b3IyNyIsICJfc3RlcDI3IiwgImZpbmlzaFByb2Nlc3NIaXN0b3J5IiwgImhpc3RJbmZvIiwgInByZXZpZCIsICJkZWZhdWx0aXplIiwgIl9wZyRvcHRpb24iLCAiX3BnJG9wdGlvbiR4IiwgIm5ld09wdGlvbiIsICJkZWYiLCAidmFyTmFtZSIsICJ1c2VySXNTeXNvcCIsICJnIiwgImhvdXIxMiIsICJfdGVtcGxhdGVPYmplY3QxMyIsICJlZGl0Q291bnRlckxpbmtIaW50IiwgImFyaW4iLCAib24iLCAib25jZSIsICJkeW5hbWljQ29udGVudEhhbmRsZXIiLCAiJGNvbnRlbnQiLCAicmVnaXN0ZXJIb29rc0ZvclZpc2libGVOYXZwb3BzIiwgImRvSXQiLCAiZWFjaCIsICJfaW5kZXgiLCAiYWRkIiwgIiRvdmVybGF5Il0KfQo=
