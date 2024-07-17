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
      maxage: 3600,
      meta: "siteinfo",
      siprop: "specialpagealiases",
      // cache for an hour
      uselang: "content"
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
      prop: ["ids", "title"]
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
        } else {
          params.fromtitle;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05hdmlnYXRpb25fcG9wdXBzL21vZHVsZXMvYXBpLnRzIiwgInNyYy9OYXZpZ2F0aW9uX3BvcHVwcy9tb2R1bGVzL3N0cmluZy50cyIsICJzcmMvTmF2aWdhdGlvbl9wb3B1cHMvbW9kdWxlcy9jb3JlLmpzIiwgInNyYy9OYXZpZ2F0aW9uX3BvcHVwcy9OYXZpZ2F0aW9uX3BvcHVwcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdOYXZpZ2F0aW9uIHBvcHVwcy8xLjAnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgIi8vIFRyYW5zbGF0YWJsZSBzdHJpbmdzXG5jb25zdCBtZXNzYWdlOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0Ly8gc3VtbWFyeSBkYXRhLCBzZWFyY2hpbmcgZXRjLlxuXHRhcnRpY2xlOiB3aW5kb3cud2dVTFMoJ+adoeebricsICfmop3nm64nKSxcblx0Y2F0ZWdvcnk6IHdpbmRvdy53Z1VMUygn5Liq5YiG57G7JywgJ+WAi+WIhumhnicpLFxuXHRjYXRlZ29yaWVzOiB3aW5kb3cud2dVTFMoJ+S4quWIhuexuycsICflgIvliIbpoZ4nKSxcblx0aW1hZ2U6IHdpbmRvdy53Z1VMUygn5Liq5paH5Lu2JywgJ+WAi+aqlOahiCcpLFxuXHRpbWFnZXM6IHdpbmRvdy53Z1VMUygn5Liq5paH5Lu2JywgJ+WAi+aqlOahiCcpLFxuXHRzdHViOiAn5bCP5L2c5ZOBJyxcblx0J3NlY3Rpb24gc3R1Yic6IHdpbmRvdy53Z1VMUygn5bCP56ug6IqCJywgJ+Wwj+eroOevgCcpLFxuXHQnRW1wdHkgcGFnZSc6IHdpbmRvdy53Z1VMUygn56m66aG16Z2iJywgJ+epuumggemdoicpLFxuXHRrQjogd2luZG93LndnVUxTKCfljYPlrZfoioI8c3ViPu+8iOS7pTEwMDDkuLrkuIDov5vvvIk8L3N1Yj4nLCAn5Y2D5L2N5YWD57WEPHN1Yj7vvIjku6UxMDAw54K65LiA6YCy77yJPC9zdWI+JyksXG5cdGJ5dGVzOiB3aW5kb3cud2dVTFMoJ+Wtl+iKgicsICfkvY3lhYPntYQnKSxcblx0ZGF5OiAn5aSpJyxcblx0ZGF5czogJ+WkqScsXG5cdGhvdXI6IHdpbmRvdy53Z1VMUygn5bCP5pe2JywgJ+Wwj+aZgicpLFxuXHRob3Vyczogd2luZG93LndnVUxTKCflsI/ml7YnLCAn5bCP5pmCJyksXG5cdG1pbnV0ZTogJ+WIhicsXG5cdG1pbnV0ZXM6ICfliIYnLFxuXHRzZWNvbmQ6ICfnp5InLFxuXHRzZWNvbmRzOiAn56eSJyxcblx0d2VlazogJ+WRqCcsXG5cdHdlZWtzOiAn5ZGoJyxcblx0bW9udGg6ICfmnIgnLFxuXHRtb250aHM6ICfmnIgnLFxuXHR5ZWFyOiAn5bm0Jyxcblx0eWVhcnM6ICflubQnLFxuXHRzZWFyY2g6IHdpbmRvdy53Z1VMUygn5pCc57SiJywgJ+aQnOWwiycpLFxuXHRTZWFyY2hIaW50OiB3aW5kb3cud2dVTFMoJ+aQnOe0ouWMheWQqyAlcyDnmoTpobXpnaInLCAn5pCc5bCL5YyF5ZCrICVzIOeahOmggemdoicpLFxuXHR3ZWI6ICdCaW5nJyxcblx0Z2xvYmFsOiAn5YWo5Z+fJyxcblx0J21vcmUuLi4nOiAn5pu05aSa4oCm4oCmJyxcblx0Ly8gYXJ0aWNsZS1yZWxhdGVkIGFjdGlvbnMgYW5kIGluZm9cblx0Ly8gKHNvbWUgYWN0aW9ucyBhbHNvIGFwcGx5IHRvIHVzZXIgcGFnZXMpXG5cdGFjdGlvbnM6IHdpbmRvdy53Z1VMUygn5pON5L2cJywgJ+WLleS9nCcpLFxuXHQvLyAvLy8gdmlldyBhcnRpY2xlcyBhbmQgdmlldyB0YWxrXG5cdHBvcHVwc01lbnU6ICdQb3B1cHMnLFxuXHQnZGlzYWJsZSBwcmV2aWV3cyc6IHdpbmRvdy53Z1VMUygn56aB55So6aKE6KeIJywgJ+emgeeUqOmgkOimvScpLFxuXHR0b2dnbGVQcmV2aWV3c0hpbnQ6IHdpbmRvdy53Z1VMUygn5YiH5o2i5pys6aG1IFBvcHVwcyDnmoTpooTop4jlvIDlhbMnLCAn5YiH5o+b5pys6aCBIFBvcHVwcyDnmoTpoJDopr3plovpl5wnKSxcblx0J3RvZ2dsZSBwcmV2aWV3cyc6IHdpbmRvdy53Z1VMUygn5YiH5o2i6aKE6KeI5byA5YWzJywgJ+WIh+aPm+mgkOimvemWi+mXnCcpLFxuXHRyZXNldDogd2luZG93LndnVUxTKCflpI3kvY0nLCAn6KSH5L2NJyksXG5cdGRpc2FibGU6ICfnpoHnlKggUG9wdXBzJyxcblx0ZGlzYWJsZVBvcHVwc0hpbnQ6IHdpbmRvdy53Z1VMUyhcblx0XHQn5Zyo5pys6aG156aB55SoIFBvcHVwc++8jOWIt+aWsOmhtemdouS7pemHjeaWsOWQr+eUqOOAgicsXG5cdFx0J+WcqOacrOmggeemgeeUqCBQb3B1cHPvvIzph43mlrDmlbTnkIbpoIHpnaLku6Xph43mlrDllZ/nlKjjgIInXG5cdCksXG5cdHB1cmdlUG9wdXBzSGludDogd2luZG93LndnVUxTKCflpI3kvY0gUG9wdXBz77yM5riF6Zmk5omA5pyJ57yT5a2Y5pWw5o2u44CCJywgJ+ikh+S9jSBQb3B1cHPvvIzmuIXpmaTmiYDmnInlv6vlj5bos4fmlpnjgIInKSxcblx0UG9wdXBzSGludDogd2luZG93LndnVUxTKCflpI3kvY0gUG9wdXBz77yM5riF6Zmk5omA5pyJ57yT5a2Y5pWw5o2u44CCJywgJ+ikh+S9jSBQb3B1cHPvvIzmuIXpmaTmiYDmnInlv6vlj5bos4fmlpnjgIInKSxcblx0c3BhY2ViYXI6ICfnqbrmoLwnLFxuXHR2aWV3OiB3aW5kb3cud2dVTFMoJ+afpeeciycsICfmqqLoppYnKSxcblx0J3ZpZXcgYXJ0aWNsZSc6IHdpbmRvdy53Z1VMUygn5p+l55yL5p2h55uuJywgJ+aqouimluaineebricpLFxuXHR2aWV3SGludDogd2luZG93LndnVUxTKCfliY3lvoAgJXMnLCAn5YmN5b6AICVzJyksXG5cdHRhbGs6IHdpbmRvdy53Z1VMUygn6K6o6K66JywgJ+iojuirlicpLFxuXHQndGFsayBwYWdlJzogd2luZG93LndnVUxTKCforqjorrrpobUnLCAn6KiO6KuW6aCBJyksXG5cdCd0aGlzJm5ic3A7cmV2aXNpb24nOiB3aW5kb3cud2dVTFMoJ+atpOS/ruiuoueJiOacrCcsICfmraTkv67oqILniYjmnKwnKSxcblx0J3JldmlzaW9uICVzIG9mICVzJzogd2luZG93LndnVUxTKCfpobXpnaIgJDIg55qE5L+u6K6i54mI5pysICQxJywgJ+mggemdoiAkMiDnmoTkv67oqILniYjmnKwgJDEnKSxcblx0J1JldmlzaW9uICVzIG9mICVzJzogd2luZG93LndnVUxTKCfpobXpnaIgJDIg55qE5L+u6K6i54mI5pysICQxJywgJ+mggemdoiAkMiDnmoTkv67oqILniYjmnKwgJDEnKSxcblx0J3RoZSByZXZpc2lvbiBwcmlvciB0byByZXZpc2lvbiAlcyBvZiAlcyc6IHdpbmRvdy53Z1VMUyhcblx0XHQn6aG16Z2iICQyIOeahOS/ruiuoueJiOacrCAkMSDkuYvliY3nmoTkv67orqLniYjmnKwnLFxuXHRcdCfpoIHpnaIgJDIg55qE5L+u6KiC54mI5pysICQxIOS5i+WJjeeahOS/ruiogueJiOacrCdcblx0KSxcblx0J1RvZ2dsZSBpbWFnZSBzaXplJzogd2luZG93LndnVUxTKCfngrnlh7vliIfmjaLlm77niYflpKflsI8nLCAn6bue5pOK5YiH5o+b5ZyW54mH5aSn5bCPJyksXG5cdGRlbDogd2luZG93LndnVUxTKCfliKDpmaQnLCAn5Yig6ZmkJyksXG5cdC8vIC8vLyBkZWxldGUsIHByb3RlY3QsIG1vdmVcblx0ZGVsZXRlOiB3aW5kb3cud2dVTFMoJ+WIoOmZpCcsICfliKDpmaQnKSxcblx0ZGVsZXRlSGludDogd2luZG93LndnVUxTKCfliKDpmaQgJXMnLCAn5Yig6ZmkICVzJyksXG5cdHVuZGVsZXRlU2hvcnQ6IHdpbmRvdy53Z1VMUygn5oGi5aSNJywgJ+aBouW+qScpLFxuXHRVbmRlbGV0ZUhpbnQ6IHdpbmRvdy53Z1VMUygn5oGi5aSNICVzJywgJ+aBouW+qSAlcycpLFxuXHRwcm90ZWN0OiB3aW5kb3cud2dVTFMoJ+S/neaKpCcsICfkv53orbcnKSxcblx0cHJvdGVjdEhpbnQ6IHdpbmRvdy53Z1VMUygn5L+d5oqkICVzJywgJ+S/neittyAlcycpLFxuXHR1bnByb3RlY3RTaG9ydDogd2luZG93LndnVUxTKCfop6PpmaQnLCAn6Kej6ZmkJyksXG5cdHVucHJvdGVjdEhpbnQ6IHdpbmRvdy53Z1VMUygn6Kej6Zmk5a+5ICVzIOeahOS/neaKpCcsICfop6PpmaTlsI0gJXMg55qE5L+d6K23JyksXG5cdG1vdmU6IHdpbmRvdy53Z1VMUygn56e75YqoJywgJ+enu+WLlScpLFxuXHQnbW92ZSBwYWdlJzogd2luZG93LndnVUxTKCfnp7vliqjpobXpnaInLCAn56e75YuV6aCB6Z2iJyksXG5cdE1vdmVwYWdlSGludDogd2luZG93LndnVUxTKCfkv67mlLkgJXMg55qE5qCH6aKYJywgJ+S/ruaUuSAlcyDnmoTmqJnpoYwnKSxcblx0ZWRpdDogd2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvJyksXG5cdC8vIC8vLyBlZGl0IGFydGljbGVzIGFuZCB0YWxrXG5cdCdlZGl0IGFydGljbGUnOiB3aW5kb3cud2dVTFMoJ+e8lui+keadoeebricsICfnt6jovK/mop3nm64nKSxcblx0ZWRpdEhpbnQ6IHdpbmRvdy53Z1VMUygn5L+u5pS5ICVzIOeahOWGheWuuScsICfkv67mlLkgJXMg55qE5YWn5a65JyksXG5cdCdlZGl0IHRhbGsnOiB3aW5kb3cud2dVTFMoJ+e8lui+keiuqOiuuumhtScsICfnt6jovK/lsI3oqbHpoIEnKSxcblx0bmV3OiB3aW5kb3cud2dVTFMoJ+aWsCcsICfmlrAnKSxcblx0J25ldyB0b3BpYyc6IHdpbmRvdy53Z1VMUygn5paw6K+d6aKYJywgJ+aWsOipsemhjCcpLFxuXHRuZXdTZWN0aW9uSGludDogd2luZG93LndnVUxTKCflnKggJXMg5aKe5Yqg5paw55qE6K6o6K666K+d6aKYJywgJ+WcqCAlcyDlop7liqDmlrDnmoToqI7oq5boqbHpoYwnKSxcblx0J251bGwgZWRpdCc6IHdpbmRvdy53Z1VMUygn56m657yW6L6RJywgJ+epuue3qOi8rycpLFxuXHRudWxsRWRpdEhpbnQ6IHdpbmRvdy53Z1VMUygn6L+b6KGM5LiA5qyh5a+5ICVzIOeahOepuue8lui+kScsICfoo73pgKDkuIDmrKHlsI0gJXMg55qE56m657eo6LyvJyksXG5cdGhpc3Q6IHdpbmRvdy53Z1VMUygn5Y6G5Y+yJywgJ+att+WPsicpLFxuXHQvLyAvLy8gaGlzdG9yeSwgZGlmZnMsIGVkaXRvcnMsIHJlbGF0ZWRcblx0aGlzdG9yeTogd2luZG93LndnVUxTKCfljoblj7InLCAn5q235Y+yJyksXG5cdGhpc3RvcnlIaW50OiB3aW5kb3cud2dVTFMoJyVzIOeahOS/ruiuouWOhuWPsicsICclcyDnmoTkv67oqILmrbflj7InKSxcblx0bGFzdDogd2luZG93LndnVUxTKCfkuYvliY0nLCAn5LmL5YmNJyksXG5cdC8vIFtbTWVkaWFXaWtpOkxhc3RdXVxuXHRsYXN0RWRpdDogd2luZG93LndnVUxTKCfmnIDov5Hmm7TmlLknLCAn5pyA6L+R5pu05pS5JyksXG5cdCdzaG93IGxhc3QgZWRpdCc6IHdpbmRvdy53Z1VMUygn5pyA6L+R5LiA5qyh5pu05pS5JywgJ+acgOaWsOS4gOasoeS/ruiogicpLFxuXHQnU2hvdyB0aGUgbGFzdCBlZGl0Jzogd2luZG93LndnVUxTKCfmmL7npLrmnIDov5HkuIDmrKHmm7TmlLnnmoTlt67lvIInLCAn6aGv56S65pyA5paw5LiA5qyh5L+u6KiC55qE5beu55WwJyksXG5cdGxhc3RDb250cmliOiB3aW5kb3cud2dVTFMoJ+acgOi/kee8lui+kScsICfmnIDov5Hnt6jovK8nKSxcblx0J2xhc3Qgc2V0IG9mIGVkaXRzJzogd2luZG93LndnVUxTKCfmnIDov5HnvJbovpEnLCAn5pyA6L+R57eo6LyvJyksXG5cdGxhc3RDb250cmliSGludDogd2luZG93LndnVUxTKCfmmL7npLrnlLHmnIDlkI7kuIDkvY3nvJbovpHogIXpgKDmiJDnmoTlt67lvIInLCAn6aGv56S655Sx5pyA5b6M5LiA5L2N57eo6Lyv6ICF6KO96YCg55qE5beu55WwJyksXG5cdGN1cjogd2luZG93LndnVUxTKCflvZPliY0nLCAn55W25YmNJyksXG5cdGRpZmZDdXI6IHdpbmRvdy53Z1VMUygn5LiO5b2T5YmN54mI5pys55qE5beu5byCJywgJ+iIh+ebruWJjeeJiOacrOeahOW3rueVsCcpLFxuXHQnU2hvdyBjaGFuZ2VzIHNpbmNlIHJldmlzaW9uICVzJzogd2luZG93LndnVUxTKCfmmL7npLroh6rkv67orqLniYjmnKwgJXMg55qE5beu5byCJywgJ+mhr+ekuuiHquS/ruiogueJiOacrCAlcyDnmoTlt67nlbAnKSxcblx0JyVzIG9sZCc6IHdpbmRvdy53Z1VMUygnJXMg5YmN55qE5pyA5ZCO54mI5pysJywgJyVzIOWJjeeahOacgOWQjueJiOacrCcpLFxuXHQvLyBhcyBpbiA0IHdlZWtzIG9sZFxuXHRvbGRFZGl0OiB3aW5kb3cud2dVTFMoJ+aXp+e8lui+kScsICfoiIrnt6jovK8nKSxcblx0cHVyZ2U6IHdpbmRvdy53Z1VMUygn5riF6Zmk57yT5a2YJywgJ+a4hemZpOW/q+WPlicpLFxuXHRwdXJnZUhpbnQ6IHdpbmRvdy53Z1VMUygn5riF6Zmk5pyN5Yqh5Zmo5LitICVzIOeahOe8k+WtmCcsICfmuIXpmaTkvLrmnI3lmajkuK0gJXMg55qE5b+r5Y+WJyksXG5cdHJhdzogd2luZG93LndnVUxTKCfmupDku6PnoIEnLCAn5Y6f5aeL56K8JyksXG5cdHJhd0hpbnQ6IHdpbmRvdy53Z1VMUygn5p+l55yLICVzIOeahOa6kOS7o+eggScsICfmqqLoppYgJXMg55qE5Y6f5aeL56K8JyksXG5cdHJlbmRlcjogd2luZG93LndnVUxTKCfku4XmraPmlocnLCAn5YOF5q2j5paHJyksXG5cdHJlbmRlckhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOe6r0hUTUzop6PmnpDvvIjku4XmraPmloflhoXlrrnvvIknLCAn6aGv56S6ICVzIOeahOe0lEhUTUzop6PmnpDvvIjlg4XmraPmloflhaflrrnvvIknKSxcblx0J1Nob3cgdGhlIGVkaXQgbWFkZSB0byBnZXQgcmV2aXNpb24nOiB3aW5kb3cud2dVTFMoJ+aYvuekuue8lui+keS7peW+l+WIsOS/ruiuoueJiOacrCcsICfpoa/npLrnt6jovK/ku6XlvpfliLDkv67oqILniYjmnKwnKSxcblx0c2luY2VNZTogd2luZG93LndnVUxTKCfoh6rmiJEnLCAn6Ieq5oiRJyksXG5cdCdjaGFuZ2VzIHNpbmNlIG1pbmUnOiB3aW5kb3cud2dVTFMoJ+iHquaIkeS/ruiuoueahOW3ruW8gicsICfoh6rmiJHkv67oqILnmoTlt67nlbAnKSxcblx0c2luY2VNZUhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S66Ieq5oiR5LiK5qyh5L+u5pS55Lul5p2l55qE5beu5byCJywgJ+mhr+ekuuiHquaIkeS4iuasoeS/ruaUueS7peS+hueahOW3rueVsCcpLFxuXHRcIkNvdWxkbid0IGZpbmQgYW4gZWRpdCBieSAlc1xcbmluIHRoZSBsYXN0ICVzIGVkaXRzIHRvXFxuJXNcIjogd2luZG93LndnVUxTKFxuXHRcdCflnKggJDMg5pyA6L+RICQyIOasoee8lui+keS4reaJvuS4jeWIsCAkMSDlgZrlh7rnmoTkv67mlLknLFxuXHRcdCflnKggJDMg5pyA6L+RICQyIOasoee3qOi8r+S4reaJvuS4jeWIsCAkMSDlgZrlh7rnmoTkv67mlLknXG5cdCksXG5cdGVkczogd2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvJyksXG5cdGVkaXRvcnM6IHdpbmRvdy53Z1VMUygn57yW6L6R6ICFJywgJ+e3qOi8r+iAhScpLFxuXHRlZGl0b3JMaXN0SGludDogd2luZG93LndnVUxTKCfliJflh7rnvJbovpHov4cgJXMg55qE55So5oi3JywgJ+WIl+WHuue3qOi8r+mBjiAlcyDnmoTkvb/nlKjogIUnKSxcblx0cmVsYXRlZDogd2luZG93LndnVUxTKCfnm7jlhbMnLCAn55u46ZecJyksXG5cdHJlbGF0ZWRDaGFuZ2VzOiB3aW5kb3cud2dVTFMoJ+ebuOWFs+abtOaUuScsICfnm7jpl5zmm7TmlLknKSxcblx0J3JlbGF0ZWQgY2hhbmdlcyc6IHdpbmRvdy53Z1VMUygn55u45YWz5pu05pS5JywgJ+ebuOmXnOabtOaUuScpLFxuXHRSZWNlbnRjaGFuZ2VzbGlua2VkSGludDogd2luZG93LndnVUxTKCfmmL7npLrnm7jlhbMgJXMg55qE5L+u5pS5JywgJ+mhr+ekuuebuOmXnCAlcyDnmoTkv67mlLknKSxcblx0ZWRpdE9sZDogd2luZG93LndnVUxTKCfnvJbovpHml6fniYgnLCAn57eo6Lyv6IiK54mIJyksXG5cdC8vIC8vLyBlZGl0IG9sZCB2ZXJzaW9uLCBvciByZXZlcnRcblx0cnY6IHdpbmRvdy53Z1VMUygn5Zue6YCAJywgJ+aBouW+qScpLFxuXHRyZXZlcnQ6IHdpbmRvdy53Z1VMUygn5Zue6YCAJywgJ+aBouW+qScpLFxuXHRyZXZlcnRIaW50OiB3aW5kb3cud2dVTFMoJ+WbnumAgOWIsCAlcycsICfmgaLlvqnliLAgJXMnKSxcblx0dW5kbzogd2luZG93LndnVUxTKCfmkqTplIAnLCAn5pKk6Yq3JyksXG5cdHVuZG9IaW50OiB3aW5kb3cud2dVTFMoJ+aSpOmUgOi/measoee8lui+kScsICfmkqTpirfpgJnmrKHnt6jovK8nKSxcblx0ZGVmYXVsdHBvcHVwUmVkbGlua1N1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn56e76Zmk5Yiw56m66aG16Z2iW1slc11d55qE6ZO+5o6l77yIUG9wdXBz77yJJyxcblx0XHQn56e76Zmk5Yiw56m66aCB6Z2iW1slc11d55qE6YCj57WQ77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBGaXhEYWJzU3VtbWFyeTogd2luZG93LndnVUxTKCfmtojmrafkuYlbWyVzXV3liLBbWyVzXV3vvIhQb3B1cHPvvIknLCAn5raI5q2n576pW1slc11d5YiwW1slc11d77yIUG9wdXBz77yJJyksXG5cdGRlZmF1bHRwb3B1cEZpeFJlZGlyc1N1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn5b+955Wl5LuOW1slc11d5YiwW1slc11d55qE6YeN5a6a5ZCR77yIUG9wdXBz77yJJyxcblx0XHQn5b+955Wl5b6eW1slc11d5YiwW1slc11d55qE6YeN5paw5bCO5ZCR77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBFeHRlbmRlZFJldmVydFN1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn5Zue6YCA5YiwJDLlnKgkMeaXtue8lui+keeahOS/ruiuoueJiOacrCQz77yIUG9wdXBz77yJJyxcblx0XHQn6YKE5Y6f5YiwJDLlnKgkMeaZguijveS9nOeahOS/ruiogueJiOacrCQz77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCflm57pgIDliLDkv67orqLniYjmnKwlc+eahOS4iuS4gOS4queJiOacrO+8iFBvcHVwc++8iScsXG5cdFx0J+mChOWOn+WIsOS/ruiogueJiOacrCVz55qE5LiK5LiA5YCL54mI5pys77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBSZXZlcnRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoJ+WbnumAgOWIsOS/ruiuoueJiOacrCVz77yIUG9wdXBz77yJJywgJ+mChOWOn+WIsOS/ruiogueJiOacrCVz77yIUG9wdXBz77yJJyksXG5cdGRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCflm57pgIDliLDkv67orqLniYjmnKwkMeeahOS4iuS4gOS4queJiOacrO+8jOeUsSQz5ZyoJDLml7bnvJbovpHvvIhQb3B1cHPvvIknLFxuXHRcdCfpgoTljp/liLDkv67oqILniYjmnKwkMeeahOS4iuS4gOWAi+eJiOacrO+8jOeUsSQz5ZyoJDLmmYLoo73kvZzvvIhQb3B1cHPvvIknXG5cdCksXG5cdGRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoXG5cdFx0J+WbnumAgOWIsCQz5ZyoJDLml7bnvJbovpHnmoTkv67orqLniYjmnKwkMe+8iFBvcHVwc++8iScsXG5cdFx0J+mChOWOn+WIsCQz5ZyoJDLmmYLoo73kvZznmoTkv67oqILniYjmnKwkMe+8iFBvcHVwc++8iSdcblx0KSxcblx0ZGVmYXVsdHBvcHVwUm1EYWJMaW5rU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCfnp7vpmaTliLDmtojmrafkuYnpobVbWyVzXV3nmoTpk77mjqXvvIhQb3B1cHPvvIknLFxuXHRcdCfnp7vpmaTliLDmtojmrafnvqnpoIFbWyVzXV3nmoTpgKPntZDvvIhQb3B1cHPvvIknXG5cdCksXG5cdFJlZGlyZWN0czogd2luZG93LndnVUxTKCfph43lrprlkJEnLCAn6YeN5a6a5ZCRJyksXG5cdC8vIGFzIGluIFJlZGlyZWN0cyB0byAuLi5cblx0Ly8gXCIgdG8gXCI6IHdpbmRvdy53Z1VMUyggXCLliLBcIixcIuWIsFwiICksXG5cdC8vIGFzIGluIFJlZGlyZWN0cyB0byAuLi5cblx0J0J5cGFzcyByZWRpcmVjdCc6IHdpbmRvdy53Z1VMUygn5b+955Wl6YeN5a6a5ZCRJywgJ+W/veeVpemHjeaWsOWwjuWQkScpLFxuXHQnRml4IHRoaXMgcmVkaXJlY3QnOiB3aW5kb3cud2dVTFMoJ+S/ruWkjemHjeWumuWQkScsICfkv67lvqnph43mlrDlsI7lkJEnKSxcblx0ZGlzYW1iaWc6IHdpbmRvdy53Z1VMUygn5raI5q2n5LmJJywgJ+a2iOatp+e+qScpLFxuXHQvLyAvLy8gYWRkIG9yIHJlbW92ZSBkYWIgZXRjLlxuXHRkaXNhbWJpZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5raI5q2n5LmJ6L+Z5Liq6ZO+5o6l5YiwIFtbJXNdXScsICfmtojmrafnvqnpgJnlgIvpgKPntZDliLAgW1slc11dJyksXG5cdCdDbGljayB0byBkaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvOic6IHdpbmRvdy53Z1VMUygn54K55Ye75Lul5raI5q2n5LmJ6L+Z5Liq6ZO+5o6l5Yiw77yaJywgJ+m7nuaTiuS7pea2iOatp+e+qemAmeWAi+mAo+e1kOWIsO+8micpLFxuXHQncmVtb3ZlIHRoaXMgbGluayc6IHdpbmRvdy53Z1VMUygn56e76Zmk6ZO+5o6lJywgJ+enu+mZpOmAo+e1kCcpLFxuXHQncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnOiB3aW5kb3cud2dVTFMoXG5cdFx0J+enu+mZpOatpOadoeebruWIsOi/memhteeahOaJgOaciemTvuaOpScsXG5cdFx0J+enu+mZpOatpOaineebruWIsOmAmemggeeahOaJgOaciemAo+e1kCdcblx0KSxcblx0J3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBkaXNhbWJpZyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJzogd2luZG93LndnVUxTKFxuXHRcdCfnp7vpmaTmraTmnaHnm67liLDov5nmtojmrafkuYnnmoTmiYDmnInpk77mjqUnLFxuXHRcdCfnp7vpmaTmraTmop3nm67liLDpgJnmtojmrafnvqnnmoTmiYDmnInpgKPntZAnXG5cdCksXG5cdG1haW5saW5rOiB3aW5kb3cud2dVTFMoJ+S4u+mTvuaOpScsICfkuLvpgKPntZAnKSxcblx0Ly8gLy8vIGxpbmtzLCB3YXRjaCwgdW53YXRjaFxuXHR3aWtpTGluazogd2luZG93LndnVUxTKCfkuKrlhoXpg6jpk77mjqUnLCAn5Liq5YWn6YOo6YCj57WQJyksXG5cdHdpa2lMaW5rczogd2luZG93LndnVUxTKCfkuKrlhoXpg6jpk77mjqUnLCAn5Liq5YWn6YOo6YCj57WQJyksXG5cdCdsaW5rcyBoZXJlJzogd2luZG93LndnVUxTKCfpk77lhaUnLCAn6Y+I5YWlJyksXG5cdHdoYXRMaW5rc0hlcmU6IHdpbmRvdy53Z1VMUygn6ZO+5YWl6aG16Z2iJywgJ+mPiOWFpemggemdoicpLFxuXHQnd2hhdCBsaW5rcyBoZXJlJzogd2luZG93LndnVUxTKCfpk77lhaXpobXpnaInLCAn6Y+I5YWl6aCB6Z2iJyksXG5cdFdoYXRsaW5rc2hlcmVIaW50OiB3aW5kb3cud2dVTFMoJ+aYvuekuumTvuaOpeWIsCAlcyDnmoTpobXpnaInLCAn6aGv56S66YCj57WQ5YiwICVzIOeahOmggemdoicpLFxuXHR1bndhdGNoU2hvcnQ6IHdpbmRvdy53Z1VMUygn5Y+W5raIJywgJ+WPlua2iCcpLFxuXHR3YXRjaFRoaW5neTogd2luZG93LndnVUxTKCfnm5Hop4YnLCAn55uj6KaWJyksXG5cdC8vIGNhbGxlZCB3YXRjaFRoaW5neSBiZWNhdXNlIHt9LndhdGNoIGlzIGEgZnVuY3Rpb25cblx0d2F0Y2hIaW50OiB3aW5kb3cud2dVTFMoJ+WKoOWFpSAlcyDliLDmiJHnmoTnm5Hop4bliJfooagnLCAn5Yqg5YWlICVzIOWIsOaIkeeahOebo+imluWIl+ihqCcpLFxuXHR1bndhdGNoSGludDogd2luZG93LndnVUxTKCfku47miJHnmoTnm5Hop4bliJfooajnp7vpmaQgJXMnLCAn5b6e5oiR55qE55uj6KaW5YiX6KGo56e76ZmkICVzJyksXG5cdCdPbmx5IGZvdW5kIG9uZSBlZGl0b3I6ICVzIG1hZGUgJXMgZWRpdHMnOiB3aW5kb3cud2dVTFMoXG5cdFx0J+S7heaJvuWIsOS4gOS9jee8luiAhe+8miVzIOWItumAoOS6hiAlcyDmrKHnvJbovpEnLFxuXHRcdCflg4Xmib7liLDkuIDkvY3nt6jogIXvvJolcyDoo73pgKDkuoYgJXMg5qyh57eo6LyvJ1xuXHQpLFxuXHQnJXMgc2VlbXMgdG8gYmUgdGhlIGxhc3QgZWRpdG9yIHRvIHRoZSBwYWdlICVzJzogd2luZG93LndnVUxTKFxuXHRcdCclcyDnnIvkuIrljrvmmK8gJXMg6L+Z6aG155qE5pyA5ZCO5LiA5L2N57yW6ICFJyxcblx0XHQnJXMg55yL5LiK5Y675pivICVzIOmAmemggeeahOacgOW+jOS4gOS9jee3qOiAhSdcblx0KSxcblx0cnNzOiB3aW5kb3cud2dVTFMoJ1JTUycsICdSU1MnKSxcblx0Ly8gZGlmZiBwcmV2aWV3c1xuXHQnRGlmZiB0cnVuY2F0ZWQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMnOiB3aW5kb3cud2dVTFMoJ+WHuuS6juaAp+iDveiAg+iZke+8jOW3ruW8guW3suiiq+aIquaWrScsICflh7rmlrzmlYjog73ogIPmha7vvIzlt67nlbDlt7LooqvmiKrmlrcnKSxcblx0J09sZCByZXZpc2lvbic6IHdpbmRvdy53Z1VMUygn5pen54mI5pysJywgJ+iIiueJiOacrCcpLFxuXHQnTmV3IHJldmlzaW9uJzogd2luZG93LndnVUxTKCfmlrDniYjmnKwnLCAn5paw54mI5pysJyksXG5cdCdTb21ldGhpbmcgd2VudCB3cm9uZyA6LSgnOiB3aW5kb3cud2dVTFMoJ+WHuumXrumimOS6hiA6LSgnLCAn5Ye65ZWP6aGM5LqGIDotKCcpLFxuXHQnRW1wdHkgcmV2aXNpb24sIG1heWJlIG5vbi1leGlzdGVudCc6IHdpbmRvdy53Z1VMUygn56m655qE5L+u6K6i77yM5Y+v6IO95bm25LiN5a2Y5ZyoJywgJ+epuueahOS/ruiogu+8jOWPr+iDveS4puS4jeWtmOWcqCcpLFxuXHQnVW5rbm93biBkYXRlJzogd2luZG93LndnVUxTKCfmnKrnn6Xml6XmnJ8nLCAn5pyq55+l5pel5pyfJyksXG5cdC8vIG90aGVyIHNwZWNpYWwgcHJldmlld3Ncblx0J0VtcHR5IGNhdGVnb3J5Jzogd2luZG93LndnVUxTKCfnqbrnmoTliIbnsbsnLCAn56m655qE5YiG6aGeJyksXG5cdCdDYXRlZ29yeSBtZW1iZXJzICglcyBzaG93biknOiB3aW5kb3cud2dVTFMoJ+WIhuexu+aIkOWRmO+8iCVzIOaYvuekuu+8iScsICfliIbpoZ7miJDlk6HvvIglcyDpoa/npLrvvIknKSxcblx0J05vIGltYWdlIGxpbmtzIGZvdW5kJzogd2luZG93LndnVUxTKCfmnKrmib7liLDmlofku7bpk77mjqUnLCAn5pyq5om+5Yiw5qqU5qGI6YCj57WQJyksXG5cdCdGaWxlIGxpbmtzJzogd2luZG93LndnVUxTKCfmlofku7bpk77mjqUnLCAn5qqU5qGI6YCj57WQJyksXG5cdCdub3QgY29tbW9ucyc6IHdpbmRvdy53Z1VMUygn57u05Z+65YWx5Lqr5Lit5peg5q2k5ZCN56ew55qE5paH5Lu244CCJywgJ+e2reWfuuWFseS6q+S4reeEoeatpOWQjeeoseeahOaqlOahiOOAgicpLFxuXHQnY29tbW9ucyBvbmx5Jzogd2luZG93LndnVUxTKCfmraTmlofku7bmnaXoh6rnu7Tln7rlhbHkuqvjgIInLCAn5q2k5qqU5qGI5L6G6Ieq57at5Z+65YWx5Lqr44CCJyksXG5cdCdObyBpbWFnZSBmb3VuZCc6IHdpbmRvdy53Z1VMUygn5om+5LiN5Yiw5paH5Lu2JywgJ+aJvuS4jeWIsOaqlOahiCcpLFxuXHQnY29tbW9ucyBkdXBlJzogd2luZG93LndnVUxTKCfnu7Tln7rlhbHkuqvkuK3lrZjlnKjmraTmlofku7bnmoTlia/mnKzjgIInLCAn57at5Z+65YWx5Lqr5Lit5a2Y5Zyo5q2k5qqU5qGI55qE5Ymv5pys44CCJyksXG5cdCdjb21tb25zIGNvbmZsaWN0Jzogd2luZG93LndnVUxTKCfnu7Tln7rlhbHkuqvkuK3lrZjlnKjmraTmlofku7blkI3np7DkuI3lkIznmoTlia/mnKzjgIInLCAn57at5Z+65YWx5Lqr5Lit5a2Y5Zyo5q2k5qqU5ZCN56ix5LiN5ZCM55qE5Ymv5pys44CCJyksXG5cdC8vIHVzZXItcmVsYXRlZCBhY3Rpb25zIGFuZCBpbmZvXG5cdHVzZXI6IHdpbmRvdy53Z1VMUygn55So5oi3JywgJ+S9v+eUqOiAhScpLFxuXHQvLyAvLy8gdXNlciBwYWdlLCB0YWxrLCBlbWFpbCwgc3BhY2Vcblx0J3VzZXImbmJzcDtwYWdlJzogd2luZG93LndnVUxTKCfnlKjmiLfpobUnLCAn5L2/55So6ICF6aCBJyksXG5cdCd1c2VyIHRhbGsnOiB3aW5kb3cud2dVTFMoJ+eUqOaIt+iuqOiuuicsICfkvb/nlKjogIXlsI3oqbEnKSxcblx0J2VkaXQgdXNlciB0YWxrJzogd2luZG93LndnVUxTKCfnvJbovpHnlKjmiLforqjorronLCAn57eo6Lyv5L2/55So6ICF5bCN6KmxJyksXG5cdCdsZWF2ZSBjb21tZW50Jzogd2luZG93LndnVUxTKCfnlZnoqIAnLCAn55WZ6KiAJyksXG5cdGVtYWlsOiB3aW5kb3cud2dVTFMoJ+eUtemCricsICfpm7vpg7UnKSxcblx0J2VtYWlsIHVzZXInOiB3aW5kb3cud2dVTFMoJ+eUtemCrueUqOaItycsICfpm7vpg7Xkvb/nlKjogIUnKSxcblx0RW1haWx1c2VySGludDogd2luZG93LndnVUxTKCfnu5kgJXMg5Y+R6YCB55S15a2Q6YKu5Lu2JywgJ+e1piAlcyDnmbzpgIHpm7vlrZDpg7Xku7YnKSxcblx0c3BhY2U6IHdpbmRvdy53Z1VMUygn5a2Q6aG16Z2iJywgJ+WtkOmggemdoicpLFxuXHQvLyBzaG9ydCBmb3JtIGZvciB1c2VyU3BhY2UgbGlua1xuXHRQcmVmaXhpbmRleEhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOeUqOaIt+mhteWtkOmhtemdoicsICfpoa/npLogJXMg55qE5L2/55So6ICF6aCB5a2Q6aCB6Z2iJyksXG5cdGNvdW50OiB3aW5kb3cud2dVTFMoJ+e7n+iuoScsICfntbHoqIgnKSxcblx0Ly8gLy8vIGNvbnRyaWJ1dGlvbnMsIHRyZWUsIGxvZ1xuXHQnZWRpdCBjb3VudGVyJzogd2luZG93LndnVUxTKCfnvJbovpHmrKHmlbAnLCAn57eo6Lyv5qyh5pW4JyksXG5cdGthdGVsaW5rSGludDogd2luZG93LndnVUxTKCclcyDnmoTnvJbovpHmrKHmlbAnLCAnJXMg55qE57eo6Lyv5qyh5pW4JyksXG5cdGNvbnRyaWJzOiB3aW5kb3cud2dVTFMoJ+i0oeeMricsICfosqLnjbsnKSxcblx0Y29udHJpYnV0aW9uczogd2luZG93LndnVUxTKCfotKHnjK4nLCAn6LKi5427JyksXG5cdGRlbGV0ZWRDb250cmliczogd2luZG93LndnVUxTKCflt7LliKDpmaTnmoTotKHnjK4nLCAn5bey5Yiq6Zmk55qE6LKi5427JyksXG5cdENvbnRyaWJ1dGlvbnNIaW50OiB3aW5kb3cud2dVTFMoJyVzIOeahOeUqOaIt+i0oeeMricsICclcyDnmoTkvb/nlKjogIXosqLnjbsnKSxcblx0dHJlZTogd2luZG93LndnVUxTKCfmoJEnLCAn5qi5JyksXG5cdGNvbnRyaWJzVHJlZUhpbnQ6IHdpbmRvdy53Z1VMUygn5qC55o2u5ZCN5a2X56m66Ze05p+l55yLICVzIOeahOi0oeeMricsICfmoLnmk5rlkb3lkI3nqbrplpPmqqLoppYgJXMg55qE6LKi5427JyksXG5cdGxvZzogd2luZG93LndnVUxTKCfml6Xlv5cnLCAn5pel6KqMJyksXG5cdCd1c2VyIGxvZyc6IHdpbmRvdy53Z1VMUygn55So5oi35pel5b+XJywgJ+S9v+eUqOiAheaXpeiqjCcpLFxuXHR1c2VyTG9nSGludDogd2luZG93LndnVUxTKCfmmL7npLogJXMg55qE55So5oi35pel5b+XJywgJ+mhr+ekuiAlcyDnmoTkvb/nlKjogIXml6XoqownKSxcblx0dW5ibG9ja1Nob3J0OiB3aW5kb3cud2dVTFMoJ+ino+mZpCcsICfop6PpmaQnKSxcblx0YmxvY2s6IHdpbmRvdy53Z1VMUygn5bCB56aBJywgJ+WwgemOlicpLFxuXHQnYmxvY2sgdXNlcic6IHdpbmRvdy53Z1VMUygn5bCB56aB55So5oi3JywgJ+WwgemOluS9v+eUqOiAhScpLFxuXHRJcGJsb2NrbGlzdEhpbnQ6IHdpbmRvdy53Z1VMUygn6Kej5bCBICVzJywgJ+ino+WwgSAlcycpLFxuXHRCbG9ja2lwSGludDogd2luZG93LndnVUxTKCflsIHnpoEgJXMnLCAn5bCB6Y6WICVzJyksXG5cdCdibG9jayBsb2cnOiB3aW5kb3cud2dVTFMoJ+WwgeemgeaXpeW/lycsICflsIHpjpbml6XoqownKSxcblx0YmxvY2tMb2dIaW50OiB3aW5kb3cud2dVTFMoJ+aYvuekuiAlcyDnmoTlsIHnpoHml6Xlv5cnLCAn6aGv56S6ICVzIOeahOWwgemOluaXpeiqjCcpLFxuXHRwcm90ZWN0TG9nSGludDogd2luZG93LndnVUxTKCfmmL7npLogJXMg55qE5L+d5oqk5pel5b+XJywgJ+mhr+ekuiAlcyDnmoTkv53orbfml6XoqownKSxcblx0cGFnZUxvZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOaXpeW/lycsICfpoa/npLogJXMg55qE5pel6KqMJyksXG5cdGRlbGV0ZUxvZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOWIoOmZpOaXpeW/lycsICfpoa/npLogJXMg55qE5Yiq6Zmk5pel6KqMJyksXG5cdCdJbnZhbGlkICVzICVzJzogd2luZG93LndnVUxTKCfpgInpobkgJXMg5LiN5Y+v55So77yaJXMnLCAn6YG46aCFICVzIOS4jeWPr+eUqO+8miVzJyksXG5cdG06ICflsI8nLFxuXHQvLyBBdXRvZWRpdGluZ1xuXHQnRW50ZXIgYSBub24tZW1wdHkgZWRpdCBzdW1tYXJ5IG9yIHByZXNzIGNhbmNlbCB0byBhYm9ydCc6IHdpbmRvdy53Z1VMUyhcblx0XHQn6L6T5YWl57yW6L6R5pGY6KaB77yM5oiW5oyJ5Y+W5raI5Lit5q2i5pON5L2cJyxcblx0XHQn6Ly45YWl57eo6Lyv5pGY6KaB77yM5oiW5oyJ5Y+W5raI5Lit5q2i5pON5L2cJ1xuXHQpLFxuXHQnRmFpbGVkIHRvIGdldCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgcGxlYXNlIGVkaXQgbWFudWFsbHkuXFxuXFxuJzogd2luZG93LndnVUxTKFxuXHRcdCfojrflj5bkv67orqLniYjmnKzkv6Hmga/lpLHotKXvvIzor7fmiYvliqjkv67mlLnjgIJcXG5cXG4nLFxuXHRcdCfnjbLlj5bkv67oqILniYjmnKzos4foqIrlpLHmlZfvvIzoq4vmiYvli5Xkv67mlLnjgIJcXG5cXG4nXG5cdCksXG5cdCdUaGUgJXMgYnV0dG9uIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgY2xpY2tlZC4gUGxlYXNlIHdhaXQgZm9yIHRoZSBuZXh0IHBhZ2UgdG8gbG9hZC4nOiB3aW5kb3cud2dVTFMoXG5cdFx0J+aMiemSriAlcyDlt7Looqvoh6rliqjngrnlh7vvvIzor7fnrYnlvoXkuIvkuIDkuKrpobXpnaLliqDovb3jgIInLFxuXHRcdCfmjInpiJUgJXMg5bey6KKr6Ieq5YuV6bue5pOK77yM6KuL562J5b6F5LiL5LiA5YCL6aCB6Z2i6LyJ5YWl44CCJ1xuXHQpLFxuXHQnQ291bGQgbm90IGZpbmQgYnV0dG9uICVzLiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGluIHlvdXIgamF2YXNjcmlwdCBmaWxlLic6IHdpbmRvdy53Z1VMUyhcblx0XHQn5om+5LiN5Yiw5oyJ6ZKuICVz77yM6K+35qOA5p+l5oKoIEphdmFTY3JpcHQg5paH5Lu25Lit55qE6K6+572u44CCJyxcblx0XHQn5om+5LiN5Yiw5oyJ6YiVICVz77yM6KuL5qqi5p+l5oKoIEphdmFTY3JpcHQg5qqU5qGI5Lit55qE6Kit5a6a44CCJ1xuXHQpLFxuXHQvLyBQb3B1cHMgc2V0dXBcblx0J09wZW4gZnVsbC1zaXplIGltYWdlJzogd2luZG93LndnVUxTKCfmn6XnnIvlhajlsLrlr7jlm77lg48nLCAn5qqi6KaW5YWo5bC65a+45b2x5YOPJyksXG5cdC8vIOS7peS4i+WGheWuueeUsSBBbm5BbmdlbGEg6KGl5q2jXG5cdGJpbmdTZWFyY2hIaW50OiB3aW5kb3cud2dVTFMoJ+WcqCBCaW5nIOS4iuaQnOe0ouKAnCVz4oCdJywgJ+WcqCBiaW5nIOS4iuaQnOWwi+OAjCVz44CNJyksXG5cdCdlbmFibGUgcHJldmlld3MnOiB3aW5kb3cud2dVTFMoJ+WQr+eUqOmihOiniCcsICfllZ/nlKjpoJDopr0nKSxcblx0J3Nob3cgcHJldmlldyc6IHdpbmRvdy53Z1VMUygn56aB55So6aKE6KeIJywgJ+emgeeUqOmgkOimvScpLFxuXHRoaXN0b3J5ZmVlZEhpbnQ6IHdpbmRvdy53Z1VMUygn6K+l6aG16Z2i55qE6L+R5pyf5pu05pS5IFJTUyBmZWVkJywgJ+ipsumggemdoueahOi/keacn+abtOaUuSBSU1MgZmVlZCcpLFxuXHQnc2VuZCB0aGFua3MnOiB3aW5kb3cud2dVTFMoJ+WPkemAgeaEn+iwoicsICflgrPpgIHmhJ/orJ0nKSxcblx0VGhhbmtzSGludDogd2luZG93LndnVUxTKCflkJHor6XnlKjmiLflj5HpgIHkuIDlsIHmhJ/osKLmtojmga8nLCAn5ZCR6Kmy5L2/55So6ICF5YKz6YCB5LiA5bCB5oSf6Kyd6KiK5oGvJyksXG5cdCdtYXJrIHBhdHJvbGxlZCc6IHdpbmRvdy53Z1VMUygn5qCH6K6w5Li65bey5beh5p+lJywgJ+aomeiomOeCuuW3suW3oeafpScpLFxuXHRtYXJrcGF0cm9sbGVkSGludDogd2luZG93LndnVUxTKCfmoIforrDor6XnvJbovpHkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY6Kmy57eo6Lyv54K65bey5beh5p+lJyksXG5cdCdDb3VsZCBub3QgbWFya2VkIHRoaXMgZWRpdCBhcyBwYXRyb2xsZWQnOiB3aW5kb3cud2dVTFMoJ+aXoOazleagh+iusOivpee8lui+keS4uuW3suW3oeafpScsICfnhKHms5XmqJnoqJjoqbLnt6jovK/ngrrlt7Llt6Hmn6UnKSxcblx0ZGVmYXVsdHBvcHVwUmV2aWV3ZWRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoJ+agh+iusOS7jueJiOacrCVz5YiwJXPpl7TnmoTnvJbovpHkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY5b6e54mI5pysJXPliLAlc+mWk+eahOe3qOi8r+eCuuW3suW3oeafpScpLFxuXHQnSW1hZ2UgZnJvbSBDb21tb25zJzogd2luZG93LndnVUxTKCfmnaXoh6rnu7Tln7rlhbHkuqvnmoTlm77niYcnLCAn5L6G6Ieq57at5Z+65YWx55So55qE5ZyW54mHJyksXG5cdCdEZXNjcmlwdGlvbiBwYWdlJzogd2luZG93LndnVUxTKCflm77niYfmj4/ov7DpobUnLCAn5ZyW54mH5o+P6L+w6aCBJyksXG5cdCdBbHQgdGV4dDonOiB3aW5kb3cud2dVTFMoJ+abv+aNouaWh+acrO+8iEFsdO+8ie+8micsICfmm7/mj5vmloflrZfvvIhBbHTvvInvvJonKSxcblx0cmV2ZGVsOiB3aW5kb3cud2dVTFMoJ+WOhuWPsueJiOacrOiiq+makOiXjycsICfmrbflj7LniYjmnKzooqvpmrHol48nKSxcblx0RGVsZXRlZGNvbnRyaWJ1dGlvbnNIaW50OiB3aW5kb3cud2dVTFMoJ+eUqOaItyVz55qE6KKr5Yig6Zmk57yW6L6R5qyh5pWwJywgJ+S9v+eUqOiAhSVz55qE6KKr5Yiq6Zmk57eo6Lyv5qyh5pW4JyksXG5cdCdObyBiYWNrbGlua3MgZm91bmQnOiB3aW5kb3cud2dVTFMoJ+aJvuS4jeWIsOmTvuWFpemhtemdoicsICfmib7kuI3liLDpj4jlhaXpoIHpnaInKSxcblx0JyBhbmQgbW9yZSc6IHdpbmRvdy53Z1VMUygn5Lul5Y+K5YW25LuW6aG16Z2iJywgJ+S7peWPiuWFtuS7lumggemdoicpLFxuXHQnRG93bmxvYWQgcHJldmlldyBkYXRhJzogd2luZG93LndnVUxTKCfkuIvovb3pooTop4jmlbDmja4nLCAn5LiL6LyJ6aCQ6Ka96LOH5paZJyksXG5cdCdOb3QgYSByZWdpc3RlcmVkIHVzZXJuYW1lJzogd2luZG93LndnVUxTKCfpnZ7lt7Lms6jlhoznmoTnlKjmiLcnLCAn6Z2e5bey6Ki75YaK55qE5L2/55So6ICFJyksXG5cdEJMT0NLRUQ6IHdpbmRvdy53Z1VMUygn6KKr5bCB56aBJywgJ+iiq+WwgemOlicpLFxuXHQnSGFzIGJsb2Nrcyc6IHdpbmRvdy53Z1VMUygn6KKr6YOo5YiG5bCB56aBJywgJ+iiq+mDqOWIhuWwgemOlicpLFxuXHQnIGVkaXRzIHNpbmNlOiAnOiB3aW5kb3cud2dVTFMoJ+asoee8lui+ke+8jOazqOWGjOaXpeacn+S4uicsICfmrKHnt6jovK/vvIzoqLvlhorml6XmnJ/ngronKSxcblx0J2xhc3QgZWRpdCBvbiAnOiB3aW5kb3cud2dVTFMoJ+acgOWQjuS4gOasoee8lui+keS6jicsICfmnIDlvozkuIDmrKHnt6jovK/mlrwnKSxcblx0RW1haWxVc2VySGludDogd2luZG93LndnVUxTKCfnu5kgJXMg5Y+R6YCB55S15a2Q6YKu5Lu2JywgJ+e1piAlcyDnmbzpgIHpm7vlrZDpg7Xku7YnKSxcblx0UkFOR0VCTE9DS0VEOiB3aW5kb3cud2dVTFMoJ0lQ5q616KKr5bCB56aBJywgJ0lQ5q616KKr5bCB6Y6WJyksXG5cdCdJUCB1c2VyJzogd2luZG93LndnVUxTKCdJUOeUqOaItycsICdJUOS9v+eUqOiAhScpLFxuXHQn4pmAJzogJ+KZgCcsXG5cdCfimYInOiAn4pmCJyxcblx0SElEREVOOiB3aW5kb3cud2dVTFMoJ+WFqOWfn+makOiXjycsICflhajln5/pmrHol48nKSxcblx0TE9DS0VEOiB3aW5kb3cud2dVTFMoJ+WFqOWfn+mUgeWumicsICflhajln5/pjpblrponKSxcblx0J0ludmFsaWQgdXNlcic6IHdpbmRvdy53Z1VMUygn6Z2e5rOV55So5oi35ZCNJywgJ+mdnuazleS9v+eUqOiAheWQjeeosScpLFxuXHRkaWZmOiB3aW5kb3cud2dVTFMoJ+W3ruW8gicsICflt67nlbAnKSxcblx0JyB0byAnOiAn6IezJyxcblxuXHRhdXRvZWRpdF92ZXJzaW9uOiAnbnAyMDE0MDQxNicsXG5cdFByZWZpeEluZGV4SGludDogd2luZG93LndnVUxTKCfmmL7npLrnlKjmiLclc+eahOWtkOmhtemdoicsICfpoa/npLrkvb/nlKjogIUlc+eahOWtkOmggemdoicpLFxuXHRudWxsRWRpdFN1bW1hcnk6IHdpbmRvdy53Z1VMUygn6L+b6KGM5LiA5qyh6Zu257yW6L6RJywgJ+mAsuihjOS4gOasoembtue3qOi8rycpLFxuXHQvLyDnlKjmiLfnu4TlkI3np7Dku47ns7vnu5/mtojmga/ojrflj5Zcblx0J2dyb3VwLW5vLWF1dG9jb25maXJtZWQnOiB3aW5kb3cud2dVTFMoJ+mdnuiHquWKqOehruiupOeUqOaItycsICfpnZ7oh6rli5Xnorroqo3kvb/nlKjogIUnKSxcblx0c2VwYXJhdG9yOiAn44CBJyxcblx0Y29tbWE6ICfvvIwnLFxufTtcblxuZXhwb3J0IHttZXNzYWdlfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7bWVzc2FnZX0gZnJvbSAnLi9zdHJpbmcnO1xuXG5jb25zdCBwb3B1cHMgPSAoKSA9PiB7XG5cdC8vIFNUQVJURklMRTogbWFpbi5qc1xuXHQvLyBGaXggbGF0ZXJcblx0Ly8gR2xvYmFsc1xuXHQvL1xuXHQvLyBUcnlpbmcgdG8gc2hvdmUgYXMgbWFueSBvZiB0aGVzZSBhcyBwb3NzaWJsZSBpbnRvIHRoZSBwZyAocG9wdXAgZ2xvYmFscykgb2JqZWN0XG5cdGNvbnN0IHBnID0ge1xuXHRcdGFwaToge30sXG5cdFx0cmU6IHt9LFxuXHRcdG5zOiB7fSxcblx0XHRzdHJpbmc6IHt9LFxuXHRcdHdpa2k6IHt9LFxuXHRcdHVzZXI6IHt9LFxuXHRcdG1pc2M6IHt9LFxuXHRcdG9wdGlvbjoge30sXG5cdFx0b3B0aW9uRGVmYXVsdDoge30sXG5cdFx0ZmxhZzoge30sXG5cdFx0Y2FjaGU6IHt9LFxuXHRcdHN0cnVjdHVyZXM6IHt9LFxuXHRcdHRpbWVyOiB7fSxcblx0XHRjb3VudGVyOiB7fSxcblx0XHRjdXJyZW50OiB7fSxcblx0XHRmbjoge30sXG5cdFx0ZW5kb2ZsaXN0OiBudWxsLFxuXHR9O1xuXHQvKiBCYWlsIGlmIHRoZSBnYWRnZXQvc2NyaXB0IGlzIGJlaW5nIGxvYWRlZCB0d2ljZSAqL1xuXHQvKiBBbiBlbGVtZW50IHdpdGggaWQgXCJwZ1wiIHdvdWxkIGFkZCBhIHdpbmRvdy5wZyBwcm9wZXJ0eSwgaWdub3JlIHN1Y2ggcHJvcGVydHkgKi9cblx0aWYgKHdpbmRvdy5wZyAmJiAhKHdpbmRvdy5wZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvKiBFeHBvcnQgdG8gZ2xvYmFsIGNvbnRleHQgKi9cblx0d2luZG93LnBnID0gcGc7XG5cdC8vIEVOREZJTEU6IG1haW4uanNcblx0Ly8gU1RBUlRGSUxFOiBhY3Rpb25zLmpzXG5cdGNvbnN0IHNldHVwVG9vbHRpcHMgPSAoY29udGFpbmVyLCByZW1vdmUsIGZvcmNlLCBwb3BEYXRhKSA9PiB7XG5cdFx0bG9nKGBzZXR1cFRvb2x0aXBzLCBjb250YWluZXI9JHtjb250YWluZXJ9LCByZW1vdmU9JHtyZW1vdmV9YCk7XG5cdFx0aWYgKCFjb250YWluZXIpIHtcblx0XHRcdC8vIHRoZSBtYWluIGluaXRpYWwgY2FsbFxuXHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwT25FZGl0U2VsZWN0aW9uJykgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuZWRpdGZvcm0gJiYgZG9jdW1lbnQuZWRpdGZvcm0ud3BUZXh0Ym94MSkge1xuXHRcdFx0XHRkb2N1bWVudC5lZGl0Zm9ybS53cFRleHRib3gxLm9ubW91c2V1cCA9IGRvU2VsZWN0aW9uUG9wdXA7XG5cdFx0XHR9XG5cdFx0XHQvLyBhcnRpY2xlL2NvbnRlbnQgaXMgYSBzdHJ1Y3R1cmUtZGVwZW5kZW50IHRoaW5nXG5cdFx0XHRjb250YWluZXIgPSBkZWZhdWx0UG9wdXBzQ29udGFpbmVyKCk7XG5cdFx0fVxuXHRcdGlmICghcmVtb3ZlICYmICFmb3JjZSAmJiBjb250YWluZXIucmFuU2V0dXBUb29sdGlwc0FscmVhZHkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29udGFpbmVyLnJhblNldHVwVG9vbHRpcHNBbHJlYWR5ID0gIXJlbW92ZTtcblx0XHRjb25zdCBhbmNob3JzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRzZXR1cFRvb2x0aXBzTG9vcChhbmNob3JzLCAwLCAyNTAsIDEwMCwgcmVtb3ZlLCBwb3BEYXRhKTtcblx0fTtcblx0Y29uc3QgZGVmYXVsdFBvcHVwc0NvbnRhaW5lciA9ICgpID0+IHtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBPbmx5QXJ0aWNsZUxpbmtzJykpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLXZlY3Rvci0yMDIyIC52ZWN0b3ItYm9keScpIHx8XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtd19jb250ZW50JykgfHxcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKSB8fFxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJ0aWNsZScpIHx8XG5cdFx0XHRcdGRvY3VtZW50XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gZG9jdW1lbnQ7XG5cdH07XG5cdGNvbnN0IHNldHVwVG9vbHRpcHNMb29wID0gZnVuY3Rpb24gc2V0dXBUb29sdGlwc0xvb3AoYW5jaG9ycywgYmVnaW4sIGhvd21hbnksIHNsZWVwLCByZW1vdmUsIHBvcERhdGEsIC4uLmFyZ3MpIHtcblx0XHRsb2coXG5cdFx0XHRzaW1wbGVQcmludGYoJ3NldHVwVG9vbHRpcHNMb29wKCVzLCVzLCVzLCVzLCVzKScsIFtcblx0XHRcdFx0YW5jaG9ycyxcblx0XHRcdFx0YmVnaW4sXG5cdFx0XHRcdGhvd21hbnksXG5cdFx0XHRcdHNsZWVwLFxuXHRcdFx0XHRyZW1vdmUsXG5cdFx0XHRcdHBvcERhdGEsXG5cdFx0XHRcdC4uLmFyZ3MsXG5cdFx0XHRdKVxuXHRcdCk7XG5cdFx0Y29uc3QgZmluaXNoID0gYmVnaW4gKyBob3dtYW55O1xuXHRcdGNvbnN0IGxvb3BlbmQgPSBNYXRoLm1pbihmaW5pc2gsIGFuY2hvcnMubGVuZ3RoKTtcblx0XHRsZXQgaiA9IGxvb3BlbmQgLSBiZWdpbjtcblx0XHRsb2coXG5cdFx0XHRgc2V0dXBUb29sdGlwczogYW5jaG9ycy5sZW5ndGg9JHthbmNob3JzLmxlbmd0aH0sIGJlZ2luPSR7YmVnaW59LCBob3dtYW55PSR7aG93bWFueX0sIGxvb3BlbmQ9JHtsb29wZW5kfSwgcmVtb3ZlPSR7cmVtb3ZlfWBcblx0XHQpO1xuXHRcdGNvbnN0IGRvVG9vbHRpcCA9IHJlbW92ZSA/IHJlbW92ZVRvb2x0aXAgOiBhZGRUb29sdGlwO1xuXHRcdC8vIHRyeSBhIGZhc3RlciAoPykgbG9vcCBjb25zdHJ1Y3Rcblx0XHRpZiAoaiA+IDApIHtcblx0XHRcdGRvIHtcblx0XHRcdFx0Y29uc3QgYSA9IGFuY2hvcnNbbG9vcGVuZCAtIGpdO1xuXHRcdFx0XHRpZiAoYSA9PT0gdW5kZWZpbmVkIHx8ICFhIHx8ICFhLmhyZWYpIHtcblx0XHRcdFx0XHRsb2coYGdvdCBudWxsIGFuY2hvciBhdCBpbmRleCAke2xvb3BlbmR9YCAtIGopO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRvVG9vbHRpcChhLCBwb3BEYXRhKTtcblx0XHRcdH0gd2hpbGUgKC0taik7XG5cdFx0fVxuXHRcdGlmIChmaW5pc2ggPCBhbmNob3JzLmxlbmd0aCkge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldHVwVG9vbHRpcHNMb29wKGFuY2hvcnMsIGZpbmlzaCwgaG93bWFueSwgc2xlZXAsIHJlbW92ZSwgcG9wRGF0YSk7XG5cdFx0XHR9LCBzbGVlcCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghcmVtb3ZlICYmICFnZXRWYWx1ZU9mKCdwb3B1cFRvY0xpbmtzJykpIHtcblx0XHRcdFx0cm1Ub2NUb29sdGlwcygpO1xuXHRcdFx0fVxuXHRcdFx0cGcuZmxhZy5maW5pc2hlZExvYWRpbmcgPSB0cnVlO1xuXHRcdH1cblx0fTtcblx0Ly8gZWxpbWluYXRlIHBvcHVwcyBmcm9tIHRoZSBUT0Ncblx0Ly8gVGhpcyBhbHNvIGtpbGxzIGFueSBvbmNsaWNrIHN0dWZmIHRoYXQgdXNlZCB0byBiZSBnb2luZyBvbiBpbiB0aGUgdG9jXG5cdGNvbnN0IHJtVG9jVG9vbHRpcHMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvYycpO1xuXHRcdGlmICh0b2MpIHtcblx0XHRcdGNvbnN0IHRvY0xpbmtzID0gdG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRcdGNvbnN0IHRvY0xlbiA9IHRvY0xpbmtzLmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdG9jTGVuOyArK2opIHtcblx0XHRcdFx0cmVtb3ZlVG9vbHRpcCh0b2NMaW5rc1tqXSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBhZGRUb29sdGlwID0gKGEsIHBvcERhdGEpID0+IHtcblx0XHRpZiAoIWlzUG9wdXBMaW5rKGEpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGEub25tb3VzZW92ZXIgPSBtb3VzZU92ZXJXaWtpTGluaztcblx0XHRhLm9ubW91c2VvdXQgPSBtb3VzZU91dFdpa2lMaW5rO1xuXHRcdGEub25tb3VzZWRvd24gPSBraWxsUG9wdXA7XG5cdFx0YS5oYXNQb3B1cCA9IHRydWU7XG5cdFx0YS5wb3BEYXRhID0gcG9wRGF0YTtcblx0fTtcblx0Y29uc3QgcmVtb3ZlVG9vbHRpcCA9IChhKSA9PiB7XG5cdFx0aWYgKCFhLmhhc1BvcHVwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGEub25tb3VzZW92ZXIgPSBudWxsO1xuXHRcdGEub25tb3VzZW91dCA9IG51bGw7XG5cdFx0aWYgKGEub3JpZ2luYWxUaXRsZSkge1xuXHRcdFx0YS50aXRsZSA9IGEub3JpZ2luYWxUaXRsZTtcblx0XHR9XG5cdFx0YS5oYXNQb3B1cCA9IGZhbHNlO1xuXHR9O1xuXHRjb25zdCByZW1vdmVUaXRsZSA9IChhKSA9PiB7XG5cdFx0YS5vcmlnaW5hbFRpdGxlIHx8PSBhLnRpdGxlO1xuXHRcdGEudGl0bGUgPSAnJztcblx0fTtcblx0Y29uc3QgcmVzdG9yZVRpdGxlID0gKGEpID0+IHtcblx0XHRpZiAoYS50aXRsZSB8fCAhYS5vcmlnaW5hbFRpdGxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGEudGl0bGUgPSBhLm9yaWdpbmFsVGl0bGU7XG5cdH07XG5cdGNvbnN0IHJlZ2lzdGVySG9va3MgPSAobnApID0+IHtcblx0XHRjb25zdCBwb3B1cE1heFdpZHRoID0gZ2V0VmFsdWVPZigncG9wdXBNYXhXaWR0aCcpO1xuXHRcdGlmICh0eXBlb2YgcG9wdXBNYXhXaWR0aCA9PT0gJ251bWJlcicpIHtcblx0XHRcdGNvbnN0IHNldE1heFdpZHRoID0gKCkgPT4ge1xuXHRcdFx0XHRucC5tYWluRGl2LnN0eWxlLm1heFdpZHRoID0gYCR7cG9wdXBNYXhXaWR0aH1weGA7XG5cdFx0XHRcdG5wLm1heFdpZHRoID0gcG9wdXBNYXhXaWR0aDtcblx0XHRcdH07XG5cdFx0XHRucC5hZGRIb29rKHNldE1heFdpZHRoLCAndW5oaWRlJywgJ2JlZm9yZScpO1xuXHRcdH1cblx0XHRucC5hZGRIb29rKGFkZFBvcHVwU2hvcnRjdXRzLCAndW5oaWRlJywgJ2FmdGVyJyk7XG5cdFx0bnAuYWRkSG9vayhybVBvcHVwU2hvcnRjdXRzLCAnaGlkZScsICdiZWZvcmUnKTtcblx0fTtcblx0Y29uc3QgcmVtb3ZlTW9kaWZpZXJLZXlMaXN0ZW5lciA9IChhKSA9PiB7XG5cdFx0Ly8gcmVtb3ZlIGxpc3RlbmVycyBmb3IgbW9kaWZpZXIga2V5IGlmIGFueSB0aGF0IHdlcmUgYWRkZWQgaW4gbW91c2VPdmVyV2lraUxpbmtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYS5tb2RpZmllcktleUxpc3RlbmVyLCBmYWxzZSk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBhLm1vZGlmaWVyS2V5TGlzdGVuZXIsIGZhbHNlKTtcblx0fTtcblx0Y29uc3QgbW91c2VPdmVyV2lraUxpbmsgPSBmdW5jdGlvbiBtb3VzZU92ZXJXaWtpTGluayhldnQpIHtcblx0XHRpZiAoIWV2dCAmJiB3aW5kb3cuZXZlbnQpIHtcblx0XHRcdGV2dCA9IHdpbmRvdy5ldmVudDtcblx0XHR9XG5cdFx0Ly8gaWYgdGhlIG1vZGlmaWVyIGlzIG5lZWRlZCwgbGlzdGVuIGZvciBpdCxcblx0XHQvLyB3ZSB3aWxsIHJlbW92ZSB0aGUgbGlzdGVuZXIgd2hlbiB3ZSBtb3VzZW91dCBvZiB0aGlzIGxpbmsgb3Iga2lsbCBwb3B1cC5cblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBNb2RpZmllcicpKSB7XG5cdFx0XHQvLyBpZiBwb3B1cE1vZGlmaWVyQWN0aW9uID0gZW5hYmxlLCB3ZSBzaG91bGQgcG9wdXAgd2hlbiB0aGUgbW9kaWZpZXIgaXMgcHJlc3NlZFxuXHRcdFx0Ly8gaWYgcG9wdXBNb2RpZmllckFjdGlvbiA9IGRpc2FibGUsIHdlIHNob3VsZCBwb3B1cCB1bmxlc3MgdGhlIG1vZGlmaWVyIGlzIHByZXNzZWRcblx0XHRcdGNvbnN0IGFjdGlvbiA9IGdldFZhbHVlT2YoJ3BvcHVwTW9kaWZpZXJBY3Rpb24nKTtcblx0XHRcdGNvbnN0IGtleSA9IGFjdGlvbiA9PT0gJ2Rpc2FibGUnID8gJ2tleXVwJyA6ICdrZXlkb3duJztcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5tb2RpZmllcktleUxpc3RlbmVyID0gKGV2dCkgPT4ge1xuXHRcdFx0XHRtb3VzZU92ZXJXaWtpTGluazIoc2VsZiwgZXZ0KTtcblx0XHRcdH07XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGtleSwgc2VsZi5tb2RpZmllcktleUxpc3RlbmVyLCBmYWxzZSk7XG5cdFx0fVxuXHRcdHJldHVybiBtb3VzZU92ZXJXaWtpTGluazIodGhpcywgZXZ0KTtcblx0fTtcblx0LyoqXG5cdCAqIEdldHMgdGhlIHJlZmVyZW5jZXMgbGlzdCBpdGVtIHRoYXQgdGhlIHByb3ZpZGVkIGZvb3Rub3RlIGxpbmsgdGFyZ2V0cy4gVGhpc1xuXHQgKiBpcyB0eXBpY2FsbHkgYSBsaSBlbGVtZW50IHdpdGhpbiB0aGUgb2wucmVmZXJlbmNlcyBlbGVtZW50IGluc2lkZSB0aGUgcmVmbGlzdC5cblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBhIC0gQSBmb290bm90ZSBsaW5rLlxuXHQgKiBAcmV0dXJuIHtFbGVtZW50fGJvb2xlYW59IFRoZSB0YXJnZXRlZCBlbGVtZW50LCBvciBmYWxzZSBpZiBvbmUgY2FuJ3QgYmUgZm91bmQuXG5cdCAqL1xuXHRjb25zdCBmb290bm90ZVRhcmdldCA9IChhKSA9PiB7XG5cdFx0Y29uc3QgYVRpdGxlID0gVGl0bGUuZnJvbUFuY2hvcihhKTtcblx0XHQvLyBXZSB3YW50IFwiLjNBXCIgcmF0aGVyIHRoYW4gXCIlM0FcIiBvciBcIj9cIiBoZXJlLCBzbyB1c2UgdGhlIGFuY2hvciBwcm9wZXJ0eSBkaXJlY3RseVxuXHRcdGNvbnN0IGFuY2ggPSBhVGl0bGUuYW5jaG9yO1xuXHRcdGlmICghL14oY2l0ZV9ub3RlLXxfbm90ZS18ZW5kbm90ZSkvLnRlc3QoYW5jaCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgbFRpdGxlID0gVGl0bGUuZnJvbVVSTChsb2NhdGlvbi5ocmVmKTtcblx0XHRpZiAobFRpdGxlLnRvU3RyaW5nKHRydWUpICE9PSBhVGl0bGUudG9TdHJpbmcodHJ1ZSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0bGV0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YW5jaH1gKTtcblx0XHR3aGlsZSAoZWwgJiYgdHlwZW9mIGVsLm5vZGVOYW1lID09PSAnc3RyaW5nJykge1xuXHRcdFx0Y29uc3QgbnQgPSBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aWYgKG50ID09PSAnbGknKSB7XG5cdFx0XHRcdHJldHVybiBlbDtcblx0XHRcdH0gZWxzZSBpZiAobnQgPT09ICdib2R5Jykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9IGVsc2UgaWYgKGVsLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0ZWwgPSBlbC5wYXJlbnROb2RlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGNvbnN0IGZvb3Rub3RlUHJldmlldyA9ICh4LCBuYXZwb3ApID0+IHtcblx0XHRzZXRQb3B1cEhUTUwoYDxocj4ke3guaW5uZXJIVE1MfWAsICdwb3B1cFByZXZpZXcnLCBuYXZwb3AuaWROdW1iZXIpO1xuXHR9O1xuXHRjb25zdCBtb2RpZmllclByZXNzZWQgPSAoZXZ0KSA9PiB7XG5cdFx0Y29uc3QgbW9kID0gZ2V0VmFsdWVPZigncG9wdXBNb2RpZmllcicpO1xuXHRcdGlmICghbW9kKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghZXZ0ICYmIHdpbmRvdy5ldmVudCkge1xuXHRcdFx0ZXZ0ID0gd2luZG93LmV2ZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gZXZ0ICYmIG1vZCAmJiBldnRbYCR7bW9kLnRvTG93ZXJDYXNlKCl9S2V5YF07XG5cdH07XG5cdC8vIENoZWNrcyBpZiB0aGUgY29ycmVjdCBtb2RpZmllciBwcmVzc2VkL3VucHJlc3NlZCBpZiBuZWVkZWRcblx0Y29uc3QgaXNDb3JyZWN0TW9kaWZpZXIgPSAoX2EsIGV2dCkgPT4ge1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBNb2RpZmllcicpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Ly8gaWYgcG9wdXBNb2RpZmllckFjdGlvbiA9IGVuYWJsZSwgd2Ugc2hvdWxkIHBvcHVwIHdoZW4gdGhlIG1vZGlmaWVyIGlzIHByZXNzZWRcblx0XHQvLyBpZiBwb3B1cE1vZGlmaWVyQWN0aW9uID0gZGlzYWJsZSwgd2Ugc2hvdWxkIHBvcHVwIHVubGVzcyB0aGUgbW9kaWZpZXIgaXMgcHJlc3NlZFxuXHRcdGNvbnN0IGFjdGlvbiA9IGdldFZhbHVlT2YoJ3BvcHVwTW9kaWZpZXJBY3Rpb24nKTtcblx0XHRyZXR1cm4gKGFjdGlvbiA9PT0gJ2VuYWJsZScgJiYgbW9kaWZpZXJQcmVzc2VkKGV2dCkpIHx8IChhY3Rpb24gPT09ICdkaXNhYmxlJyAmJiAhbW9kaWZpZXJQcmVzc2VkKGV2dCkpO1xuXHR9O1xuXHRjb25zdCBtb3VzZU92ZXJXaWtpTGluazIgPSAoYSwgZXZ0KSA9PiB7XG5cdFx0aWYgKCFpc0NvcnJlY3RNb2RpZmllcihhLCBldnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChnZXRWYWx1ZU9mKCdyZW1vdmVUaXRsZXMnKSkge1xuXHRcdFx0cmVtb3ZlVGl0bGUoYSk7XG5cdFx0fVxuXHRcdGlmIChhID09PSBwZy5jdXJyZW50LmxpbmsgJiYgYS5uYXZwb3B1cCAmJiBhLm5hdnBvcHVwLmlzVmlzaWJsZSgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHBnLmN1cnJlbnQubGluayA9IGE7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3NpbXBsZVBvcHVwcycpICYmICFwZy5vcHRpb24ucG9wdXBTdHJ1Y3R1cmUpIHtcblx0XHRcdC8vIHJlc2V0ICpkZWZhdWx0IHZhbHVlKiBvZiBwb3B1cFN0cnVjdHVyZVxuXHRcdFx0c2V0RGVmYXVsdCgncG9wdXBTdHJ1Y3R1cmUnLCAnb3JpZ2luYWwnKTtcblx0XHR9XG5cdFx0Y29uc3QgYXJ0aWNsZSA9IG5ldyBUaXRsZSgpLmZyb21BbmNob3IoYSk7XG5cdFx0Ly8gc2V0IGdsb2JhbCB2YXJpYWJsZSAodWdoKSB0byBob2xkIGFydGljbGUgKHdpa2lwYWdlKVxuXHRcdHBnLmN1cnJlbnQuYXJ0aWNsZSA9IGFydGljbGU7XG5cdFx0aWYgKCFhLm5hdnBvcHVwKSB7XG5cdFx0XHRhLm5hdnBvcHVwID0gbmV3TmF2cG9wdXAoYSwgYXJ0aWNsZSk7XG5cdFx0XHRwZy5jdXJyZW50LmxpbmtzSGFzaFthLmhyZWZdID0gYS5uYXZwb3B1cDtcblx0XHRcdHBnLmN1cnJlbnQubGlua3MucHVzaChhKTtcblx0XHR9XG5cdFx0aWYgKGEubmF2cG9wdXAucGVuZGluZyA9PT0gbnVsbCB8fCBhLm5hdnBvcHVwLnBlbmRpbmcgIT09IDApIHtcblx0XHRcdC8vIGVpdGhlciBmcmVzaCBwb3B1cHMgb3IgdGhvc2Ugd2l0aCB1bmZpbnNoZWQgYnVzaW5lc3MgYXJlIHJlZG9uZSBmcm9tIHNjcmF0Y2hcblx0XHRcdHNpbXBsZVBvcHVwQ29udGVudChhLCBhcnRpY2xlKTtcblx0XHR9XG5cdFx0YS5uYXZwb3B1cC5zaG93U29vbklmU3RhYmxlKGEubmF2cG9wdXAuZGVsYXkpO1xuXHRcdGNsZWFySW50ZXJ2YWwocGcudGltZXIuY2hlY2tQb3B1cFBvc2l0aW9uKTtcblx0XHRwZy50aW1lci5jaGVja1BvcHVwUG9zaXRpb24gPSBzZXRJbnRlcnZhbChjaGVja1BvcHVwUG9zaXRpb24sIDYwMCk7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3NpbXBsZVBvcHVwcycpICYmIGdldFZhbHVlT2YoJ3BvcHVwUHJldmlld0J1dHRvbicpICYmICFhLnNpbXBsZU5vTW9yZSkge1xuXHRcdFx0Y29uc3QgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZC5jbGFzc05hbWUgPSAncG9wdXBQcmV2aWV3QnV0dG9uRGl2Jztcblx0XHRcdGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRkLmFwcGVuZChzKTtcblx0XHRcdHMuY2xhc3NOYW1lID0gJ3BvcHVwUHJldmlld0J1dHRvbic7XG5cdFx0XHRzW2BvbiR7Z2V0VmFsdWVPZigncG9wdXBQcmV2aWV3QnV0dG9uRXZlbnQnKX1gXSA9ICgpID0+IHtcblx0XHRcdFx0YS5zaW1wbGVOb01vcmUgPSB0cnVlO1xuXHRcdFx0XHRkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdG5vbnNpbXBsZVBvcHVwQ29udGVudChhLCBhcnRpY2xlKTtcblx0XHRcdH07XG5cdFx0XHRzLmlubmVySFRNTCA9IHBvcHVwU3RyaW5nKCdzaG93IHByZXZpZXcnKTtcblx0XHRcdHNldFBvcHVwSFRNTChkLCAncG9wdXBQcmV2aWV3JywgYS5uYXZwb3B1cC5pZE51bWJlcik7XG5cdFx0fVxuXHRcdGlmIChhLm5hdnBvcHVwLnBlbmRpbmcgIT09IDApIHtcblx0XHRcdG5vbnNpbXBsZVBvcHVwQ29udGVudChhLCBhcnRpY2xlKTtcblx0XHR9XG5cdH07XG5cdC8vIHNpbXBsZVBvcHVwQ29udGVudDogdGhlIGNvbnRlbnQgdGhhdCBkbyBub3QgcmVxdWlyZSBhZGRpdGlvbmFsIGRvd25sb2FkXG5cdC8vIChpdCBpcyBzaG93biBldmVuIHdoZW4gc2ltcGxlUG9wdXBzIGlzIHRydWUpXG5cdGNvbnN0IHNpbXBsZVBvcHVwQ29udGVudCA9IChhLCBhcnRpY2xlKSA9PiB7XG5cdFx0LyogRklYTUUgaGFjayAqL1xuXHRcdGEubmF2cG9wdXAuaGFzUG9wdXBNZW51ID0gZmFsc2U7XG5cdFx0YS5uYXZwb3B1cC5zZXRJbm5lckhUTUwocG9wdXBIVE1MKGEpKTtcblx0XHRmaWxsRW1wdHlTcGFucyh7XG5cdFx0XHRuYXZwb3B1cDogYS5uYXZwb3B1cCxcblx0XHR9KTtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBEcmFnZ2FibGUnKSkge1xuXHRcdFx0bGV0IGRyYWdIYW5kbGUgPSBnZXRWYWx1ZU9mKCdwb3B1cERyYWdIYW5kbGUnKSB8fCBudWxsO1xuXHRcdFx0aWYgKGRyYWdIYW5kbGUgJiYgZHJhZ0hhbmRsZSAhPT0gJ2FsbCcpIHtcblx0XHRcdFx0ZHJhZ0hhbmRsZSArPSBhLm5hdnBvcHVwLmlkTnVtYmVyO1xuXHRcdFx0fVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGEubmF2cG9wdXAubWFrZURyYWdnYWJsZShkcmFnSGFuZGxlKTtcblx0XHRcdH0sIDE1MCk7XG5cdFx0fVxuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFJlZGxpbmtSZW1vdmFsJykgJiYgYS5jbGFzc05hbWUgPT09ICduZXcnKSB7XG5cdFx0XHRzZXRQb3B1cEhUTUwoYDxicj4ke3BvcHVwUmVkbGlua0hUTUwoYXJ0aWNsZSl9YCwgJ3BvcHVwUmVkbGluaycsIGEubmF2cG9wdXAuaWROdW1iZXIpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgZGVidWdEYXRhID0gKG5hdnBvcHVwKSA9PiB7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwRGVidWdnaW5nJykgJiYgbmF2cG9wdXAuaWROdW1iZXIpIHtcblx0XHRcdHNldFBvcHVwSFRNTChgaWROdW1iZXI9JHtuYXZwb3B1cC5pZE51bWJlcn0sIHBlbmRpbmc9JHtuYXZwb3B1cC5wZW5kaW5nfWAsICdwb3B1cEVycm9yJywgbmF2cG9wdXAuaWROdW1iZXIpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgbmV3TmF2cG9wdXAgPSAoYSwgYXJ0aWNsZSkgPT4ge1xuXHRcdGNvbnN0IG5hdnBvcHVwID0gbmV3IE5hdnBvcHVwKCk7XG5cdFx0bmF2cG9wdXAuZnV6eiA9IDU7XG5cdFx0bmF2cG9wdXAuZGVsYXkgPSBnZXRWYWx1ZU9mKCdwb3B1cERlbGF5JykgKiAxMDAwO1xuXHRcdC8vIGluY3JlbWVudCBnbG9iYWwgY291bnRlciBub3dcblx0XHRuYXZwb3B1cC5pZE51bWJlciA9ICsrcGcuaWROdW1iZXI7XG5cdFx0bmF2cG9wdXAucGFyZW50QW5jaG9yID0gYTtcblx0XHRuYXZwb3B1cC5wYXJlbnRQb3B1cCA9IGEucG9wRGF0YSAmJiBhLnBvcERhdGEub3duZXI7XG5cdFx0bmF2cG9wdXAuYXJ0aWNsZSA9IGFydGljbGU7XG5cdFx0cmVnaXN0ZXJIb29rcyhuYXZwb3B1cCk7XG5cdFx0cmV0dXJuIG5hdnBvcHVwO1xuXHR9O1xuXHQvLyBTaG91bGQgd2Ugc2hvdyBub25zaW1wbGUgY29udGV4dD9cblx0Ly8gSWYgc2ltcGxlUG9wdXBzIGlzIHNldCB0byB0cnVlLCB0aGVuIHdlIGRvIG5vdCBzaG93IG5vbnNpbXBsZSBjb250ZXh0LFxuXHQvLyBidXQgaWYgYSBib3R0b20gXCJzaG93IHByZXZpZXdcIiB3YXMgY2xpY2tlZCB3ZSBkbyBzaG93IG5vbnNpbXBsZSBjb250ZXh0XG5cdGNvbnN0IHNob3VsZFNob3dOb25TaW1wbGUgPSAoYSkgPT4ge1xuXHRcdHJldHVybiAhZ2V0VmFsdWVPZignc2ltcGxlUG9wdXBzJykgfHwgYS5zaW1wbGVOb01vcmU7XG5cdH07XG5cdC8vIFNob3VsZCB3ZSBzaG93IG5vbnNpbXBsZSBjb250ZXh0IGdvdmVybiBieSB0aGUgb3B0aW9uIChlLmcuIHBvcHVwVXNlckluZm8pP1xuXHQvLyBJZiB0aGUgdXNlciBleHBsaWNpdGx5IGFza2VkIGZvciBub25zaW1wbGUgY29udGV4dCBieSBzZXR0aW5nIHRoZSBvcHRpb24gdG8gdHJ1ZSxcblx0Ly8gdGhlbiB3ZSBzaG93IGl0IGV2ZW4gaW4gbm9uc2ltcGxlIG1vZGUuXG5cdGNvbnN0IHNob3VsZFNob3cgPSAoYSwgb3B0aW9uKSA9PiB7XG5cdFx0aWYgKHNob3VsZFNob3dOb25TaW1wbGUoYSkpIHtcblx0XHRcdHJldHVybiBnZXRWYWx1ZU9mKG9wdGlvbik7XG5cdFx0fVxuXHRcdHJldHVybiB3aW5kb3dbb3B0aW9uXSAhPT0gdW5kZWZpbmVkICYmIHdpbmRvd1tvcHRpb25dO1xuXHR9O1xuXHRjb25zdCBub25zaW1wbGVQb3B1cENvbnRlbnQgPSAoYSwgYXJ0aWNsZSkgPT4ge1xuXHRcdGxldCBkaWZmO1xuXHRcdGxldCBoaXN0b3J5O1xuXHRcdGNvbnN0IHBhcmFtcyA9IHBhcnNlUGFyYW1zKGEuaHJlZik7XG5cdFx0Y29uc3Qgb2xkaWQgPSBwYXJhbXMub2xkaWQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBwYXJhbXMub2xkaWQ7XG5cdFx0aWYgKHNob3VsZFNob3coYSwgJ3BvcHVwUHJldmlld0RpZmZzJykpIHtcblx0XHRcdCh7ZGlmZn0gPSBwYXJhbXMpO1xuXHRcdH1cblx0XHRpZiAoc2hvdWxkU2hvdyhhLCAncG9wdXBQcmV2aWV3SGlzdG9yeScpKSB7XG5cdFx0XHRoaXN0b3J5ID0gcGFyYW1zLmFjdGlvbiA9PT0gJ2hpc3RvcnknO1xuXHRcdH1cblx0XHRhLm5hdnBvcHVwLnBlbmRpbmcgPSAwO1xuXHRcdGNvbnN0IHJlZmVyZW5jZUVsZW1lbnQgPSBmb290bm90ZVRhcmdldChhKTtcblx0XHRpZiAocmVmZXJlbmNlRWxlbWVudCkge1xuXHRcdFx0Zm9vdG5vdGVQcmV2aWV3KHJlZmVyZW5jZUVsZW1lbnQsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoZGlmZiB8fCBkaWZmID09PSAwKSB7XG5cdFx0XHRsb2FkRGlmZihhcnRpY2xlLCBvbGRpZCwgZGlmZiwgYS5uYXZwb3B1cCk7XG5cdFx0fSBlbHNlIGlmIChoaXN0b3J5KSB7XG5cdFx0XHRsb2FkQVBJUHJldmlldygnaGlzdG9yeScsIGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoc2hvdWxkU2hvd05vblNpbXBsZShhKSAmJiBwZy5yZS5jb250cmlicy50ZXN0KGEuaHJlZikpIHtcblx0XHRcdGxvYWRBUElQcmV2aWV3KCdjb250cmlicycsIGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoc2hvdWxkU2hvd05vblNpbXBsZShhKSAmJiBwZy5yZS5iYWNrbGlua3MudGVzdChhLmhyZWYpKSB7XG5cdFx0XHRsb2FkQVBJUHJldmlldygnYmFja2xpbmtzJywgYXJ0aWNsZSwgYS5uYXZwb3B1cCk7XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdC8vIEZJWE1FIHNob3VsZCBiZSBhYmxlIHRvIGdldCBhbGwgcHJldmlldyBjb21iaW5hdGlvbnMgd2l0aCBvcHRpb25zXG5cdFx0XHRhcnRpY2xlLm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zSW1hZ2VJZCAmJlxuXHRcdFx0KHNob3VsZFNob3coYSwgJ2ltYWdlUG9wdXBzRm9ySW1hZ2VzJykgfHwgIWFuY2hvckNvbnRhaW5zSW1hZ2UoYSkpXG5cdFx0KSB7XG5cdFx0XHRsb2FkQVBJUHJldmlldygnaW1hZ2VwYWdlcHJldmlldycsIGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdFx0bG9hZEltYWdlKGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoYXJ0aWNsZS5uYW1lc3BhY2VJZCgpID09PSBwZy5uc0NhdGVnb3J5SWQgJiYgc2hvdWxkU2hvdyhhLCAncG9wdXBDYXRlZ29yeU1lbWJlcnMnKSkge1xuXHRcdFx0XHRsb2FkQVBJUHJldmlldygnY2F0ZWdvcnknLCBhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdChhcnRpY2xlLm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zVXNlcklkIHx8IGFydGljbGUubmFtZXNwYWNlSWQoKSA9PT0gcGcubnNVc2VydGFsa0lkKSAmJlxuXHRcdFx0XHRzaG91bGRTaG93KGEsICdwb3B1cFVzZXJJbmZvJylcblx0XHRcdCkge1xuXHRcdFx0XHRsb2FkQVBJUHJldmlldygndXNlcmluZm8nLCBhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHRcdH1cblx0XHRcdGlmIChzaG91bGRTaG93Tm9uU2ltcGxlKGEpKSB7XG5cdFx0XHRcdHN0YXJ0QXJ0aWNsZVByZXZpZXcoYXJ0aWNsZSwgb2xkaWQsIGEubmF2cG9wdXApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgcGVuZGluZ05hdnBvcFRhc2sgPSAobmF2cG9wKSA9PiB7XG5cdFx0aWYgKG5hdnBvcCAmJiBuYXZwb3AucGVuZGluZyA9PT0gbnVsbCkge1xuXHRcdFx0bmF2cG9wLnBlbmRpbmcgPSAwO1xuXHRcdH1cblx0XHQrK25hdnBvcC5wZW5kaW5nO1xuXHRcdGRlYnVnRGF0YShuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBjb21wbGV0ZWROYXZwb3BUYXNrID0gKG5hdnBvcCkgPT4ge1xuXHRcdGlmIChuYXZwb3AgJiYgbmF2cG9wLnBlbmRpbmcpIHtcblx0XHRcdC0tbmF2cG9wLnBlbmRpbmc7XG5cdFx0fVxuXHRcdGRlYnVnRGF0YShuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBzdGFydEFydGljbGVQcmV2aWV3ID0gKGFydGljbGUsIG9sZGlkLCBuYXZwb3ApID0+IHtcblx0XHRuYXZwb3AucmVkaXIgPSAwO1xuXHRcdGxvYWRQcmV2aWV3KGFydGljbGUsIG9sZGlkLCBuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBsb2FkUHJldmlldyA9IChhcnRpY2xlLCBvbGRpZCwgbmF2cG9wKSA9PiB7XG5cdFx0aWYgKCFuYXZwb3AucmVkaXIpIHtcblx0XHRcdG5hdnBvcC5vcmlnaW5hbEFydGljbGUgPSBhcnRpY2xlO1xuXHRcdH1cblx0XHRhcnRpY2xlLm9sZGlkID0gb2xkaWQ7XG5cdFx0bG9hZEFQSVByZXZpZXcoJ3JldmlzaW9uJywgYXJ0aWNsZSwgbmF2cG9wKTtcblx0fTtcblx0Y29uc3QgbG9hZFByZXZpZXdGcm9tUmVkaXIgPSAocmVkaXJNYXRjaCwgbmF2cG9wKSA9PiB7XG5cdFx0Ly8gcmVkaXJNYXRjaCBpcyBhIHJlZ2V4IG1hdGNoXG5cdFx0Y29uc3QgdGFyZ2V0ID0gbmV3IFRpdGxlKCkuZnJvbVdpa2lUZXh0KHJlZGlyTWF0Y2hbMl0pO1xuXHRcdC8vIG92ZXJ3cml0ZSAob3IgYWRkKSBhbmNob3IgZnJvbSBvcmlnaW5hbCB0YXJnZXRcblx0XHQvLyBtZWRpYXdpa2kgZG9lcyBvdmVyd3JpdGVcblx0XHRpZiAobmF2cG9wLmFydGljbGUuYW5jaG9yKSB7XG5cdFx0XHR0YXJnZXQuYW5jaG9yID0gbmF2cG9wLmFydGljbGUuYW5jaG9yO1xuXHRcdH1cblx0XHRuYXZwb3AucmVkaXIrKztcblx0XHRuYXZwb3AucmVkaXJUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0Y29uc3Qgd2FyblJlZGlyID0gcmVkaXJMaW5rKHRhcmdldCwgbmF2cG9wLmFydGljbGUpO1xuXHRcdHNldFBvcHVwSFRNTCh3YXJuUmVkaXIsICdwb3B1cFdhcm5SZWRpcicsIG5hdnBvcC5pZE51bWJlcik7XG5cdFx0bmF2cG9wLmFydGljbGUgPSB0YXJnZXQ7XG5cdFx0ZmlsbEVtcHR5U3BhbnMoe1xuXHRcdFx0cmVkaXI6IHRydWUsXG5cdFx0XHRyZWRpclRhcmdldDogdGFyZ2V0LFxuXHRcdFx0bmF2cG9wdXA6IG5hdnBvcCxcblx0XHR9KTtcblx0XHRyZXR1cm4gbG9hZFByZXZpZXcodGFyZ2V0LCBudWxsLCBuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBpbnNlcnRQcmV2aWV3ID0gKGRvd25sb2FkKSA9PiB7XG5cdFx0aWYgKCFkb3dubG9hZC5vd25lcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZWRpck1hdGNoID0gcGcucmUucmVkaXJlY3QuZXhlYyhkb3dubG9hZC5kYXRhKTtcblx0XHRpZiAoZG93bmxvYWQub3duZXIucmVkaXIgPT09IDAgJiYgcmVkaXJNYXRjaCkge1xuXHRcdFx0bG9hZFByZXZpZXdGcm9tUmVkaXIocmVkaXJNYXRjaCwgZG93bmxvYWQub3duZXIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZG93bmxvYWQub3duZXIudmlzaWJsZSB8fCAhZ2V0VmFsdWVPZigncG9wdXBMYXp5UHJldmlld3MnKSkge1xuXHRcdFx0aW5zZXJ0UHJldmlld05vdyhkb3dubG9hZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGlkID0gZG93bmxvYWQub3duZXIucmVkaXIgPyAnUFJFVklFV19SRURJUl9IT09LJyA6ICdQUkVWSUVXX0hPT0snO1xuXHRcdFx0ZG93bmxvYWQub3duZXIuYWRkSG9vayhcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdGluc2VydFByZXZpZXdOb3coZG93bmxvYWQpO1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQndW5oaWRlJyxcblx0XHRcdFx0J2FmdGVyJyxcblx0XHRcdFx0aWRcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBpbnNlcnRQcmV2aWV3Tm93ID0gKGRvd25sb2FkKSA9PiB7XG5cdFx0aWYgKCFkb3dubG9hZC5vd25lcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB3aWtpVGV4dCA9IGRvd25sb2FkLmRhdGE7XG5cdFx0Y29uc3QgbmF2cG9wID0gZG93bmxvYWQub3duZXI7XG5cdFx0Y29uc3QgYXJ0ID0gbmF2cG9wLnJlZGlyVGFyZ2V0IHx8IG5hdnBvcC5vcmlnaW5hbEFydGljbGU7XG5cdFx0bWFrZUZpeERhYnMod2lraVRleHQsIG5hdnBvcCk7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwU3VtbWFyeURhdGEnKSkge1xuXHRcdFx0Z2V0UGFnZUluZm8od2lraVRleHQsIGRvd25sb2FkKTtcblx0XHRcdHNldFBvcHVwVHJhaWxlcihnZXRQYWdlSW5mbyh3aWtpVGV4dCwgZG93bmxvYWQpLCBuYXZwb3AuaWROdW1iZXIpO1xuXHRcdH1cblx0XHRsZXQgaW1hZ2VQYWdlID0gJyc7XG5cdFx0aW1hZ2VQYWdlID0gYXJ0Lm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zSW1hZ2VJZCA/IGFydC50b1N0cmluZygpIDogZ2V0VmFsaWRJbWFnZUZyb21XaWtpVGV4dCh3aWtpVGV4dCk7XG5cdFx0aWYgKGltYWdlUGFnZSkge1xuXHRcdFx0bG9hZEltYWdlKFRpdGxlLmZyb21XaWtpVGV4dChpbWFnZVBhZ2UpLCBuYXZwb3ApO1xuXHRcdH1cblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBQcmV2aWV3cycpKSB7XG5cdFx0XHRpbnNlcnRBcnRpY2xlUHJldmlldyhkb3dubG9hZCwgYXJ0LCBuYXZwb3ApO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgaW5zZXJ0QXJ0aWNsZVByZXZpZXcgPSAoZG93bmxvYWQsIGFydCwgbmF2cG9wKSA9PiB7XG5cdFx0aWYgKGRvd25sb2FkICYmIHR5cGVvZiBkb3dubG9hZC5kYXRhID09PSB0eXBlb2YgJycpIHtcblx0XHRcdGlmIChhcnQubmFtZXNwYWNlSWQoKSA9PT0gcGcubnNUZW1wbGF0ZUlkICYmIGdldFZhbHVlT2YoJ3BvcHVwUHJldmlld1Jhd1RlbXBsYXRlcycpKSB7XG5cdFx0XHRcdC8vIEZJWE1FIGNvbXBhcmUvY29uc29saWRhdGUgd2l0aCBkaWZmIGVzY2FwaW5nIGNvZGUgZm9yIHdpa2l0ZXh0XG5cdFx0XHRcdGNvbnN0IGggPSBgPGhyPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcIj4ke2Rvd25sb2FkLmRhdGFcblx0XHRcdFx0XHQuZW50aWZ5KClcblx0XHRcdFx0XHQuc3BsaXQoU3RyaW5nLnJhd2BcXG5gKVxuXHRcdFx0XHRcdC5qb2luKFN0cmluZy5yYXdgPGJyPlxcbmApfTwvc3Bhbj5gO1xuXHRcdFx0XHRzZXRQb3B1cEhUTUwoaCwgJ3BvcHVwUHJldmlldycsIG5hdnBvcC5pZE51bWJlcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBwID0gcHJlcFByZXZpZXdtYWtlcihkb3dubG9hZC5kYXRhLCBhcnQsIG5hdnBvcCk7XG5cdFx0XHRcdHAuc2hvd1ByZXZpZXcoKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHByZXBQcmV2aWV3bWFrZXIgPSAoZGF0YSwgYXJ0aWNsZSwgbmF2cG9wKSA9PiB7XG5cdFx0Ly8gZGVhbCB3aXRoIHRyaWNrc3kgYW5jaG9yc1xuXHRcdGNvbnN0IGQgPSBhbmNob3JpemUoZGF0YSwgYXJ0aWNsZS5hbmNob3JTdHJpbmcoKSk7XG5cdFx0Y29uc3QgdXJsQmFzZSA9IGpvaW5QYXRoKFtwZy53aWtpLmFydGljbGViYXNlLCBhcnRpY2xlLnVybFN0cmluZygpXSk7XG5cdFx0Y29uc3QgcCA9IG5ldyBQcmV2aWV3bWFrZXIoZCwgdXJsQmFzZSwgbmF2cG9wKTtcblx0XHRyZXR1cm4gcDtcblx0fTtcblx0Ly8gVHJ5IHRvIGltaXRhdGUgdGhlIHdheSBtZWRpYXdpa2kgZ2VuZXJhdGVzIEhUTUwgYW5jaG9ycyBmcm9tIHNlY3Rpb24gdGl0bGVzXG5cdGNvbnN0IGFuY2hvcml6ZSA9IChkLCBhbmNoKSA9PiB7XG5cdFx0aWYgKCFhbmNoKSB7XG5cdFx0XHRyZXR1cm4gZDtcblx0XHR9XG5cdFx0Y29uc3QgYW5jaFJlID0gbmV3IFJlZ0V4cChcblx0XHRcdGAoPzo9K1xcXFxzKiR7bGl0ZXJhbGl6ZVJlZ2V4KGFuY2gpLnJlcGxhY2UoL1sgX10vZywgJ1tfIF0nKX1cXFxccyo9K3xcXFxce1xcXFx7XFxcXHMqJHtnZXRWYWx1ZU9mKFxuXHRcdFx0XHQncG9wdXBBbmNob3JSZWdleHAnXG5cdFx0XHQpfVxcXFxzKig/OlxcXFx8W158fV0qKSo/XFxcXHMqJHtsaXRlcmFsaXplUmVnZXgoYW5jaCl9XFxcXHMqKD86XFxcXHxbXn1dKik/fX0pYFxuXHRcdCk7XG5cdFx0Y29uc3QgbWF0Y2ggPSBkLm1hdGNoKGFuY2hSZSk7XG5cdFx0aWYgKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDAgJiYgbWF0Y2hbMF0pIHtcblx0XHRcdHJldHVybiBkLnNsaWNlKE1hdGgubWF4KDAsIGQuaW5kZXhPZihtYXRjaFswXSkpKTtcblx0XHR9XG5cdFx0Ly8gbm93IHRyeSB0byBkZWFsIHdpdGggPT09IGZvbyBbW2JhcnxiYXpdXSBib29tID09PSAtPiAjZm9vX2Jhel9ib29tXG5cdFx0Y29uc3QgbGluZXMgPSBkLnNwbGl0KCdcXG4nKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRsaW5lc1tpXSA9IGxpbmVzW2ldXG5cdFx0XHRcdC5yZXBsYWNlKC9cXFt7Mn0oW15cXF18XSo/XFx8KT8oLio/KV17Mn0vZywgJyQyJylcblx0XHRcdFx0LnJlcGxhY2UoLycnJyhbXiddKS9nLCAnJDEnKVxuXHRcdFx0XHQucmVwbGFjZSgvJycoW14nXSkvZywgJyQxJyk7XG5cdFx0XHRpZiAoYW5jaFJlLnRlc3QobGluZXNbaV0pKSB7XG5cdFx0XHRcdHJldHVybiBkXG5cdFx0XHRcdFx0LnNwbGl0KCdcXG4nKVxuXHRcdFx0XHRcdC5zbGljZShpKVxuXHRcdFx0XHRcdC5qb2luKCdcXG4nKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9eW149XSovLCAnJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkO1xuXHR9O1xuXHRjb25zdCBraWxsUG9wdXAgPSBmdW5jdGlvbiBraWxsUG9wdXAoKSB7XG5cdFx0cmVtb3ZlTW9kaWZpZXJLZXlMaXN0ZW5lcih0aGlzKTtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBTaG9ydGN1dEtleXMnKSkge1xuXHRcdFx0cm1Qb3B1cFNob3J0Y3V0cygpO1xuXHRcdH1cblx0XHRpZiAoIXBnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChwZy5jdXJyZW50LmxpbmsgJiYgcGcuY3VycmVudC5saW5rLm5hdnBvcHVwKSB7XG5cdFx0XHRwZy5jdXJyZW50LmxpbmsubmF2cG9wdXAuYmFuaXNoKCk7XG5cdFx0fVxuXHRcdHBnLmN1cnJlbnQubGluayA9IG51bGw7XG5cdFx0YWJvcnRBbGxEb3dubG9hZHMoKTtcblx0XHRpZiAocGcudGltZXIuY2hlY2tQb3B1cFBvc2l0aW9uKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHBnLnRpbWVyLmNoZWNrUG9wdXBQb3NpdGlvbik7XG5cdFx0XHRwZy50aW1lci5jaGVja1BvcHVwUG9zaXRpb24gPSBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTsgLy8gcHJlc2VydmUgZGVmYXVsdCBhY3Rpb25cblx0fTtcblx0Ly8gRU5ERklMRTogYWN0aW9ucy5qc1xuXHQvLyBTVEFSVEZJTEU6IGRvbWRyYWcuanNcblx0LyoqXG5cdCAqIEBmaWxlb3ZlcnZpZXdcblx0ICogVGhlIHtAc291cmNlIERyYWd9IG9iamVjdCwgd2hpY2ggZW5hYmxlcyBvYmplY3RzIHRvIGJlIGRyYWdnZWQgYXJvdW5kLlxuXHQgKiA8cHJlPlxuXHQgKlxuXHQgKiBkb20tZHJhZy5qc1xuXHQgKiAwOS4yNS4yMDAxXG5cdCAqIHd3dy55b3VuZ3B1cC5uZXRcblx0ICpcblx0ICogMTAuMjguMjAwMSAtIGZpeGVkIG1pbm9yIGJ1ZyB3aGVyZSBldmVudHNcblx0ICpcblx0ICogc29tZXRpbWVzIGZpcmVkIG9mZiB0aGUgaGFuZGxlLCBub3QgdGhlIHJvb3QuXG5cdCAqIFBhcmVkIGRvd24sIHNvbWUgaG9va3MgYWRkZWQgYnkgTHVwaW5cblx0ICogQ29weXJpZ2h0IEFhcm9uIEJvb2RtYW4uXG5cdCAqIFNheWluZyBzdHVwaWQgdGhpbmdzIGRhaWx5IHNpbmNlIE1hcmNoIDIwMDEuXG5cdCAqIDwvcHJlPlxuXHQgKi9cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgRHJhZyBvYmplY3QuIFRoaXMgaXMgdXNlZCB0byBtYWtlIHZhcmlvdXMgRE9NIGVsZW1lbnRzIGRyYWdnYWJsZS5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRjbGFzcyBEcmFnIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQ29uZGl0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0byBkcmFnLiBUaGlzIGZ1bmN0aW9uIHNob3VsZCB0YWtlIG9uZSBwYXJhbWV0ZXIsXG5cdFx0XHQgKiBhbiBFdmVudC4gIFRvIGRpc2FibGUgdGhpcywgc2V0IGl0IHRvIDxjb2RlPm51bGw8L2NvZGU+LlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIEZ1bmN0aW9uXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuc3RhcnRDb25kaXRpb24gPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBIb29rIHRvIGJlIHJ1biB3aGVuIHRoZSBkcmFnIGZpbmlzaGVzLiBUaGlzIGlzIHBhc3NlZCB0aGUgZmluYWwgY29vcmRpbmF0ZXMgb2YgdGhlXG5cdFx0XHQgKiBkcmFnZ2VkIG9iamVjdCAodHdvIGludGVnZXJzLCB4IGFuZCB5KS4gVG8gZGlzYWJsZXMgdGhpcywgc2V0IGl0IHRvIDxjb2RlPm51bGw8L2NvZGU+LlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIEZ1bmN0aW9uXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuZW5kSG9vayA9IG51bGw7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEdldHMgYW4gZXZlbnQgaW4gYSBjcm9zcy1icm93c2VyIG1hbm5lci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHN0YXRpYyBmaXhFKGUpIHtcblx0XHRcdGlmIChlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZSA9IHdpbmRvdy5ldmVudDtcblx0XHRcdH1cblx0XHRcdGlmIChlLmxheWVyWCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGUubGF5ZXJYID0gZS5vZmZzZXRYO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGUubGF5ZXJZID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZS5sYXllclkgPSBlLm9mZnNldFk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGlzZXMgdGhlIERyYWcgaW5zdGFuY2UgYnkgdGVsbGluZyBpdCB3aGljaCBvYmplY3QgeW91IHdhbnQgdG8gYmUgZHJhZ2dhYmxlLCBhbmQgd2hhdFxuXHRcdCAqIHlvdSB3YW50IHRvIGRyYWcgaXQgYnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0RPTUVsZW1lbnR9IG8gVGhlIFwiaGFuZGxlXCIgYnkgd2hpY2ggPGNvZGU+b1Jvb3Q8L2NvZGU+IGlzIGRyYWdnZWQuXG5cdFx0ICogQHBhcmFtIHtET01FbGVtZW50fSBvUm9vdCBUaGUgb2JqZWN0IHdoaWNoIG1vdmVzIHdoZW4gPGNvZGU+bzwvY29kZT4gaXMgZHJhZ2dlZCwgb3IgPGNvZGU+bzwvY29kZT4gaWYgb21pdHRlZC5cblx0XHQgKi9cblx0XHRpbml0KG8sIG9Sb290KSB7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHRoaXMub2JqID0gbztcblx0XHRcdG8ub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuXHRcdFx0XHRzZWxmLnN0YXJ0KGUpO1xuXHRcdFx0fTtcblx0XHRcdG8uZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdG8ucG9wdXBzX2RyYWdnYWJsZSA9IHRydWU7XG5cdFx0XHRvLmhtb2RlID0gdHJ1ZTtcblx0XHRcdG8udm1vZGUgPSB0cnVlO1xuXHRcdFx0by5yb290ID0gb1Jvb3QgfHwgbztcblx0XHRcdGlmIChOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlSW50KG8ucm9vdC5zdHlsZS5sZWZ0LCAxMCkpKSB7XG5cdFx0XHRcdG8ucm9vdC5zdHlsZS5sZWZ0ID0gJzBweCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUludChvLnJvb3Quc3R5bGUudG9wLCAxMCkpKSB7XG5cdFx0XHRcdG8ucm9vdC5zdHlsZS50b3AgPSAnMHB4Jztcblx0XHRcdH1cblx0XHRcdG8ucm9vdC5vbnRoaXNTdGFydCA9ICgpID0+IHt9O1xuXHRcdFx0by5yb290Lm9udGhpc0VuZCA9ICgpID0+IHt9O1xuXHRcdFx0by5yb290Lm9udGhpcyA9ICgpID0+IHt9O1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTdGFydHMgdGhlIGRyYWcuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0XHQgKi9cblx0XHRzdGFydChlKSB7XG5cdFx0XHRjb25zdCBvID0gdGhpcy5vYmo7IC8vID0gdGhpcztcblx0XHRcdGUgPSBEcmFnLmZpeEUoZSk7XG5cdFx0XHRpZiAodGhpcy5zdGFydENvbmRpdGlvbiAmJiAhdGhpcy5zdGFydENvbmRpdGlvbihlKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB5ID0gTnVtYmVyLnBhcnNlSW50KG8udm1vZGUgPyBvLnJvb3Quc3R5bGUudG9wIDogby5yb290LnN0eWxlLmJvdHRvbSwgMTApO1xuXHRcdFx0Y29uc3QgeCA9IE51bWJlci5wYXJzZUludChvLmhtb2RlID8gby5yb290LnN0eWxlLmxlZnQgOiBvLnJvb3Quc3R5bGUucmlnaHQsIDEwKTtcblx0XHRcdG8ucm9vdC5vbnRoaXNTdGFydCh4LCB5KTtcblx0XHRcdG8ubGFzdE1vdXNlWCA9IGUuY2xpZW50WDtcblx0XHRcdG8ubGFzdE1vdXNlWSA9IGUuY2xpZW50WTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0by5vbm1vdXNlbW92ZURlZmF1bHQgPSBkb2N1bWVudC5vbm1vdXNlbW92ZTtcblx0XHRcdG8uZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSAoZSkgPT4ge1xuXHRcdFx0XHRzZWxmLmRyYWcoZSk7XG5cdFx0XHR9O1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZXVwID0gKGUpID0+IHtcblx0XHRcdFx0c2VsZi5lbmQoZSk7XG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBEb2VzIHRoZSBkcmFnLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtFdmVudH0gZVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0ZHJhZyhlKSB7XG5cdFx0XHRlID0gRHJhZy5maXhFKGUpO1xuXHRcdFx0Y29uc3QgbyA9IHRoaXMub2JqO1xuXHRcdFx0Y29uc3QgZXkgPSBlLmNsaWVudFk7XG5cdFx0XHRjb25zdCBleCA9IGUuY2xpZW50WDtcblx0XHRcdGNvbnN0IHkgPSBOdW1iZXIucGFyc2VJbnQoby52bW9kZSA/IG8ucm9vdC5zdHlsZS50b3AgOiBvLnJvb3Quc3R5bGUuYm90dG9tLCAxMCk7XG5cdFx0XHRjb25zdCB4ID0gTnVtYmVyLnBhcnNlSW50KG8uaG1vZGUgPyBvLnJvb3Quc3R5bGUubGVmdCA6IG8ucm9vdC5zdHlsZS5yaWdodCwgMTApO1xuXHRcdFx0Y29uc3QgbnggPSB4ICsgKGV4IC0gby5sYXN0TW91c2VYKSAqIChvLmhtb2RlID8gMSA6IC0xKTtcblx0XHRcdGNvbnN0IG55ID0geSArIChleSAtIG8ubGFzdE1vdXNlWSkgKiAoby52bW9kZSA/IDEgOiAtMSk7XG5cdFx0XHR0aGlzLm9iai5yb290LnN0eWxlW28uaG1vZGUgPyAnbGVmdCcgOiAncmlnaHQnXSA9IGAke254fXB4YDtcblx0XHRcdHRoaXMub2JqLnJvb3Quc3R5bGVbby52bW9kZSA/ICd0b3AnIDogJ2JvdHRvbSddID0gYCR7bnl9cHhgO1xuXHRcdFx0dGhpcy5vYmoubGFzdE1vdXNlWCA9IGV4O1xuXHRcdFx0dGhpcy5vYmoubGFzdE1vdXNlWSA9IGV5O1xuXHRcdFx0dGhpcy5vYmoucm9vdC5vbnRoaXMobngsIG55KTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogRW5kcyB0aGUgZHJhZy5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0ZW5kKCkge1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLm9iai5vbm1vdXNlbW92ZURlZmF1bHQ7XG5cdFx0XHRkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuXHRcdFx0dGhpcy5vYmouZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdGlmICh0aGlzLmVuZEhvb2spIHtcblx0XHRcdFx0dGhpcy5lbmRIb29rKFxuXHRcdFx0XHRcdE51bWJlci5wYXJzZUludCh0aGlzLm9iai5yb290LnN0eWxlW3RoaXMub2JqLmhtb2RlID8gJ2xlZnQnIDogJ3JpZ2h0J10sIDEwKSxcblx0XHRcdFx0XHROdW1iZXIucGFyc2VJbnQodGhpcy5vYmoucm9vdC5zdHlsZVt0aGlzLm9iai52bW9kZSA/ICd0b3AnIDogJ2JvdHRvbSddLCAxMClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gRU5ERklMRTogZG9tZHJhZy5qc1xuXHQvLyBTVEFSVEZJTEU6IHN0cnVjdHVyZXMuanNcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbCA9IHt9O1xuXHRwZy5zdHJ1Y3R1cmVzLm9yaWdpbmFsLnBvcHVwTGF5b3V0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHQncG9wdXBFcnJvcicsXG5cdFx0XHQncG9wdXBJbWFnZScsXG5cdFx0XHQncG9wdXBUb3BMaW5rcycsXG5cdFx0XHQncG9wdXBUaXRsZScsXG5cdFx0XHQncG9wdXBVc2VyRGF0YScsXG5cdFx0XHQncG9wdXBEYXRhJyxcblx0XHRcdCdwb3B1cE90aGVyTGlua3MnLFxuXHRcdFx0J3BvcHVwUmVkaXInLFxuXHRcdFx0Wydwb3B1cFdhcm5SZWRpcicsICdwb3B1cFJlZGlyVG9wTGlua3MnLCAncG9wdXBSZWRpclRpdGxlJywgJ3BvcHVwUmVkaXJEYXRhJywgJ3BvcHVwUmVkaXJPdGhlckxpbmtzJ10sXG5cdFx0XHQncG9wdXBNaXNjVG9vbHMnLFxuXHRcdFx0Wydwb3B1cFJlZGxpbmsnXSxcblx0XHRcdCdwb3B1cFByZVByZXZpZXdTZXAnLFxuXHRcdFx0J3BvcHVwUHJldmlldycsXG5cdFx0XHQncG9wdXBTZWNvbmRQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cFByZXZpZXdNb3JlJyxcblx0XHRcdCdwb3B1cFBvc3RQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cEZpeERhYicsXG5cdFx0XTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFJlZGlyU3BhbnMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdCdwb3B1cFJlZGlyJyxcblx0XHRcdCdwb3B1cFdhcm5SZWRpcicsXG5cdFx0XHQncG9wdXBSZWRpclRvcExpbmtzJyxcblx0XHRcdCdwb3B1cFJlZGlyVGl0bGUnLFxuXHRcdFx0J3BvcHVwUmVkaXJEYXRhJyxcblx0XHRcdCdwb3B1cFJlZGlyT3RoZXJMaW5rcycsXG5cdFx0XTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFRpdGxlID0gKHgpID0+IHtcblx0XHRsb2coJ2RlZmF1bHRzdHJ1Y3R1cmUucG9wdXBUaXRsZScpO1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBOYXZMaW5rcycpKSB7XG5cdFx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTCgnPGI+PDxtYWlubGluaz4+PC9iPicsIHguYXJ0aWNsZSwgeC5wYXJhbXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBUb3BMaW5rcyA9ICh4KSA9PiB7XG5cdFx0bG9nKCdkZWZhdWx0c3RydWN0dXJlLnBvcHVwVG9wTGlua3MnKTtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBOYXZMaW5rcycpKSB7XG5cdFx0XHRyZXR1cm4gbmF2TGlua3NIVE1MKHguYXJ0aWNsZSwgeC5oaW50LCB4LnBhcmFtcyk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cEltYWdlID0gKHgpID0+IHtcblx0XHRsb2coYG9yaWdpbmFsLnBvcHVwSW1hZ2UsIHguYXJ0aWNsZT0ke3guYXJ0aWNsZX0sIHgubmF2cG9wLmlkTnVtYmVyPSR7eC5uYXZwb3AuaWROdW1iZXJ9YCk7XG5cdFx0cmV0dXJuIGltYWdlSFRNTCh4LmFydGljbGUsIHgubmF2cG9wLmlkTnVtYmVyKTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFJlZGlyVGl0bGUgPSBwZy5zdHJ1Y3R1cmVzLm9yaWdpbmFsLnBvcHVwVGl0bGU7XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBSZWRpclRvcExpbmtzID0gcGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFRvcExpbmtzO1xuXHRjb25zdCBjb3B5U3RydWN0dXJlID0gKG9sZFN0cnVjdHVyZSwgbmV3U3RydWN0dXJlKSA9PiB7XG5cdFx0cGcuc3RydWN0dXJlc1tuZXdTdHJ1Y3R1cmVdID0ge307XG5cdFx0Zm9yIChjb25zdCBwcm9wIGluIHBnLnN0cnVjdHVyZXNbb2xkU3RydWN0dXJlXSkge1xuXHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHBnLnN0cnVjdHVyZXNbb2xkU3RydWN0dXJlXSwgcHJvcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRwZy5zdHJ1Y3R1cmVzW25ld1N0cnVjdHVyZV1bcHJvcF0gPSBwZy5zdHJ1Y3R1cmVzW29sZFN0cnVjdHVyZV1bcHJvcF07XG5cdFx0fVxuXHR9O1xuXHRjb3B5U3RydWN0dXJlKCdvcmlnaW5hbCcsICdub3N0YWxnaWEnKTtcblx0cGcuc3RydWN0dXJlcy5ub3N0YWxnaWEucG9wdXBUb3BMaW5rcyA9ICh4KSA9PiB7XG5cdFx0bGV0IHN0ciA9ICcnO1xuXHRcdHN0ciArPSAnPGI+PDxtYWlubGlua3xzaG9ydGN1dD0gPj48L2I+Jztcblx0XHQvLyB1c2VyIGxpbmtzXG5cdFx0Ly8gY29udHJpYnMgLSBsb2cgLSBjb3VudCAtIGVtYWlsIC0gYmxvY2tcblx0XHQvLyBjb3VudCBvbmx5IGlmIGFwcGxpY2FibGU7IGJsb2NrIG9ubHkgaWYgcG9wdXBBZG1pbkxpbmtzXG5cdFx0c3RyICs9ICdpZih1c2VyKXs8YnI+PDxjb250cmlic3xzaG9ydGN1dD1jPj4nO1xuXHRcdHN0ciArPSAnaWYod2lraW1lZGlhKXsqPDxjb3VudHxzaG9ydGN1dD0jPj59Jztcblx0XHRzdHIgKz0gJ2lmKGlwdXNlcil7fWVsc2V7Kjw8ZW1haWx8c2hvcnRjdXQ9RT4+fWlmKGFkbWluKXsqPDxibG9ja3xzaG9ydGN1dD1iPj59fSc7XG5cdFx0Ly8gZWRpdGluZyBsaW5rc1xuXHRcdC8vIHRhbGtwYWdlICAgLT4gZWRpdHxuZXcgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSBhcnRpY2xlfGVkaXRcblx0XHQvLyBvdGhlciBwYWdlIC0+IGVkaXQgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSB0YWxrfGVkaXR8bmV3XG5cdFx0Y29uc3QgZWRpdHN0ciA9ICc8PGVkaXR8c2hvcnRjdXQ9ZT4+Jztcblx0XHRjb25zdCBlZGl0T2xkaWRTdHIgPSBgaWYob2xkaWQpezw8ZWRpdE9sZHxzaG9ydGN1dD1lPj58PDxyZXZlcnR8c2hvcnRjdXQ9dnxydj4+fDw8ZWRpdHxjdXI+Pn1lbHNleyR7ZWRpdHN0cn19YDtcblx0XHRjb25zdCBoaXN0b3J5c3RyID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1oPj4nO1xuXHRcdGNvbnN0IHdhdGNoc3RyID0gJzw8dW53YXRjaHx1bndhdGNoU2hvcnQ+Pnw8PHdhdGNofHNob3J0Y3V0PXd8d2F0Y2hUaGluZ3k+Pic7XG5cdFx0c3RyICs9XG5cdFx0XHRgPGJyPmlmKHRhbGspeyR7ZWRpdE9sZGlkU3RyfXw8PG5ld3xzaG9ydGN1dD0rPj5gICtcblx0XHRcdGAqJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PGFydGljbGV8c2hvcnRjdXQ9YT4+PC9iPnw8PGVkaXRBcnRpY2xlfGVkaXQ+PicgK1xuXHRcdFx0YH1lbHNleyR7XG5cdFx0XHRcdC8vIG5vdCBhIHRhbGsgcGFnZVxuXHRcdFx0XHRlZGl0T2xkaWRTdHJcblx0XHRcdH0qJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PHRhbGt8c2hvcnRjdXQ9dD4+PC9iPnw8PGVkaXRUYWxrfGVkaXQ+Pnw8PG5ld1RhbGt8c2hvcnRjdXQ9K3xuZXc+Pn0nO1xuXHRcdC8vIG1pc2MgbGlua3Ncblx0XHRzdHIgKz0gJzxicj48PHdoYXRMaW5rc0hlcmV8c2hvcnRjdXQ9bD4+Kjw8cmVsYXRlZENoYW5nZXN8c2hvcnRjdXQ9cj4+Jztcblx0XHRzdHIgKz0gJ2lmKGFkbWluKXs8YnI+fWVsc2V7Kn08PG1vdmV8c2hvcnRjdXQ9bT4+Jztcblx0XHQvLyBhZG1pbiBsaW5rc1xuXHRcdHN0ciArPVxuXHRcdFx0J2lmKGFkbWluKXsqPDx1bnByb3RlY3R8dW5wcm90ZWN0U2hvcnQ+Pnw8PHByb3RlY3R8c2hvcnRjdXQ9cD4+KicgK1xuXHRcdFx0Jzw8dW5kZWxldGV8dW5kZWxldGVTaG9ydD4+fDw8ZGVsZXRlfHNob3J0Y3V0PWQ+Pn0nO1xuXHRcdHJldHVybiBuYXZsaW5rU3RyaW5nVG9IVE1MKHN0ciwgeC5hcnRpY2xlLCB4LnBhcmFtcyk7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubm9zdGFsZ2lhLnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMubm9zdGFsZ2lhLnBvcHVwVG9wTGlua3M7XG5cdC8qKiAtLSBmYW5jeSAtLSAqL1xuXHRjb3B5U3RydWN0dXJlKCdvcmlnaW5hbCcsICdmYW5jeScpO1xuXHRwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwVGl0bGUgPSAoeCkgPT4ge1xuXHRcdHJldHVybiBuYXZsaW5rU3RyaW5nVG9IVE1MKCc8Zm9udCBzaXplPSswPjw8bWFpbmxpbms+PjwvZm9udD4nLCB4LmFydGljbGUsIHgucGFyYW1zKTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFRvcExpbmtzID0gKHgpID0+IHtcblx0XHRjb25zdCBoaXN0ID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1ofGhpc3Q+Pnw8PGxhc3RFZGl0fHNob3J0Y3V0PS98bGFzdD4+fDw8ZWRpdG9yc3xzaG9ydGN1dD1FfGVkcz4+Jztcblx0XHRjb25zdCB3YXRjaCA9ICc8PHVud2F0Y2h8dW53YXRjaFNob3J0Pj58PDx3YXRjaHxzaG9ydGN1dD13fHdhdGNoVGhpbmd5Pj4nO1xuXHRcdGNvbnN0IG1vdmUgPSAnPDxtb3ZlfHNob3J0Y3V0PW18bW92ZT4+Jztcblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChcblx0XHRcdCdpZih0YWxrKXsnICtcblx0XHRcdFx0YDw8ZWRpdHxzaG9ydGN1dD1lPj58PDxuZXd8c2hvcnRjdXQ9K3wrPj4qJHtoaXN0fSpgICtcblx0XHRcdFx0Jzw8YXJ0aWNsZXxzaG9ydGN1dD1hPj58PDxlZGl0QXJ0aWNsZXxlZGl0Pj4nICtcblx0XHRcdFx0YCoke3dhdGNofSoke21vdmV9fWVsc2V7PDxlZGl0fHNob3J0Y3V0PWU+Pioke2hpc3R9Kjw8dGFsa3xzaG9ydGN1dD10fD4+fDw8ZWRpdFRhbGt8ZWRpdD4+fDw8bmV3VGFsa3xzaG9ydGN1dD0rfG5ldz4+YCArXG5cdFx0XHRcdGAqJHt3YXRjaH0qJHttb3ZlfX08YnI+YCxcblx0XHRcdHguYXJ0aWNsZSxcblx0XHRcdHgucGFyYW1zXG5cdFx0KTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cE90aGVyTGlua3MgPSAoeCkgPT4ge1xuXHRcdGNvbnN0IGFkbWluID1cblx0XHRcdCc8PHVucHJvdGVjdHx1bnByb3RlY3RTaG9ydD4+fDw8cHJvdGVjdHxzaG9ydGN1dD1wPj4qPDx1bmRlbGV0ZXx1bmRlbGV0ZVNob3J0Pj58PDxkZWxldGV8c2hvcnRjdXQ9ZHxkZWw+Pic7XG5cdFx0bGV0IHVzZXIgPSAnPDxjb250cmlic3xzaG9ydGN1dD1jPj5pZih3aWtpbWVkaWEpe3w8PGNvdW50fHNob3J0Y3V0PSN8Iz4+fSc7XG5cdFx0dXNlciArPSBgaWYoaXB1c2VyKXt8PDxhcmluPj59ZWxzZXsqPDxlbWFpbHxzaG9ydGN1dD1FfCR7cG9wdXBTdHJpbmcoXG5cdFx0XHQnZW1haWwnXG5cdFx0KX0+Pn1pZihhZG1pbil7Kjw8YmxvY2t8c2hvcnRjdXQ9Yj4+fWA7XG5cdFx0Y29uc3Qgbm9ybWFsID0gJzw8d2hhdExpbmtzSGVyZXxzaG9ydGN1dD1sfGxpbmtzIGhlcmU+Pio8PHJlbGF0ZWRDaGFuZ2VzfHNob3J0Y3V0PXJ8cmVsYXRlZD4+Jztcblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChcblx0XHRcdGA8YnI+aWYodXNlcil7JHt1c2VyfSp9aWYoYWRtaW4peyR7YWRtaW59aWYodXNlcil7PGJyPn1lbHNleyp9fSR7bm9ybWFsfWAsXG5cdFx0XHR4LmFydGljbGUsXG5cdFx0XHR4LnBhcmFtc1xuXHRcdCk7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBSZWRpclRpdGxlID0gcGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFRpdGxlO1xuXHRwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBUb3BMaW5rcztcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFJlZGlyT3RoZXJMaW5rcyA9IHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBPdGhlckxpbmtzO1xuXHQvKiogLS0gZmFuY3kyIC0tICovXG5cdC8vIGhhY2sgZm9yIE1hY0d5dmVyTWFnaWNcblx0Y29weVN0cnVjdHVyZSgnZmFuY3knLCAnZmFuY3kyJyk7XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kyLnBvcHVwVG9wTGlua3MgPSAvLyBoYWNrIG91dCB0aGUgPGJyPiBhdCB0aGUgZW5kIGFuZCBwdXQgb25lIGF0IHRoZSBiZWdpbm5pbmdcblx0XHQoeCkgPT4ge1xuXHRcdFx0cmV0dXJuIGA8YnI+JHtwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwVG9wTGlua3MoeCkucmVwbGFjZSgvPGJyPiQvaSwgJycpfWA7XG5cdFx0fTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeTIucG9wdXBMYXlvdXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdCdwb3B1cEVycm9yJyxcblx0XHRcdCdwb3B1cEltYWdlJyxcblx0XHRcdCdwb3B1cFRpdGxlJyxcblx0XHRcdCdwb3B1cFVzZXJEYXRhJyxcblx0XHRcdCdwb3B1cERhdGEnLFxuXHRcdFx0J3BvcHVwVG9wTGlua3MnLFxuXHRcdFx0J3BvcHVwT3RoZXJMaW5rcycsXG5cdFx0XHQncG9wdXBSZWRpcicsXG5cdFx0XHRbJ3BvcHVwV2FyblJlZGlyJywgJ3BvcHVwUmVkaXJUb3BMaW5rcycsICdwb3B1cFJlZGlyVGl0bGUnLCAncG9wdXBSZWRpckRhdGEnLCAncG9wdXBSZWRpck90aGVyTGlua3MnXSxcblx0XHRcdCdwb3B1cE1pc2NUb29scycsXG5cdFx0XHRbJ3BvcHVwUmVkbGluayddLFxuXHRcdFx0J3BvcHVwUHJlUHJldmlld1NlcCcsXG5cdFx0XHQncG9wdXBQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cFNlY29uZFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwUHJldmlld01vcmUnLFxuXHRcdFx0J3BvcHVwUG9zdFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwRml4RGFiJyxcblx0XHRdO1xuXHR9O1xuXHQvKiogLS0gbWVudXMgLS0gKi9cblx0Y29weVN0cnVjdHVyZSgnb3JpZ2luYWwnLCAnbWVudXMnKTtcblx0cGcuc3RydWN0dXJlcy5tZW51cy5wb3B1cExheW91dCA9ICgpID0+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0J3BvcHVwRXJyb3InLFxuXHRcdFx0J3BvcHVwSW1hZ2UnLFxuXHRcdFx0J3BvcHVwVG9wTGlua3MnLFxuXHRcdFx0J3BvcHVwVGl0bGUnLFxuXHRcdFx0J3BvcHVwT3RoZXJMaW5rcycsXG5cdFx0XHQncG9wdXBSZWRpcicsXG5cdFx0XHRbJ3BvcHVwV2FyblJlZGlyJywgJ3BvcHVwUmVkaXJUb3BMaW5rcycsICdwb3B1cFJlZGlyVGl0bGUnLCAncG9wdXBSZWRpckRhdGEnLCAncG9wdXBSZWRpck90aGVyTGlua3MnXSxcblx0XHRcdCdwb3B1cFVzZXJEYXRhJyxcblx0XHRcdCdwb3B1cERhdGEnLFxuXHRcdFx0J3BvcHVwTWlzY1Rvb2xzJyxcblx0XHRcdFsncG9wdXBSZWRsaW5rJ10sXG5cdFx0XHQncG9wdXBQcmVQcmV2aWV3U2VwJyxcblx0XHRcdCdwb3B1cFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwU2Vjb25kUHJldmlldycsXG5cdFx0XHQncG9wdXBQcmV2aWV3TW9yZScsXG5cdFx0XHQncG9wdXBQb3N0UHJldmlldycsXG5cdFx0XHQncG9wdXBGaXhEYWInLFxuXHRcdF07XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBUb3BMaW5rcyA9ICh4LCBzaG9ydGVyKSA9PiB7XG5cdFx0Ly8gRklYTUUgbWF5YmUgdGhpcyBzdHVmZiBzaG91bGQgYmUgY2FjaGVkXG5cdFx0Y29uc3QgcyA9IFtdO1xuXHRcdGNvbnN0IGRyb3BkaXYgPSAnPGRpdiBjbGFzcz1cInBvcHVwX2Ryb3BcIj4nO1xuXHRcdGNvbnN0IGVuZGRpdiA9ICc8L2Rpdj4nO1xuXHRcdGxldCBoaXN0ID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1oPj4nO1xuXHRcdGlmICghc2hvcnRlcikge1xuXHRcdFx0aGlzdCA9IGA8bWVudXJvdz4ke2hpc3R9fDw8aGlzdG9yeWZlZWR8cnNzPj58PDxlZGl0b3JzfHNob3J0Y3V0PUU+PjwvbWVudXJvdz5gO1xuXHRcdH1cblx0XHRjb25zdCBsYXN0ZWRpdCA9ICc8PGxhc3RFZGl0fHNob3J0Y3V0PS98c2hvdyBsYXN0IGVkaXQ+Pic7XG5cdFx0Y29uc3QgdGhhbmsgPSAnaWYoZGlmZil7PDx0aGFua3xzZW5kIHRoYW5rcz4+fSc7XG5cdFx0Y29uc3QganNIaXN0b3J5ID0gJzw8bGFzdENvbnRyaWJ8bGFzdCBzZXQgb2YgZWRpdHM+Pjw8c2luY2VNZXxjaGFuZ2VzIHNpbmNlIG1pbmU+Pic7XG5cdFx0Y29uc3QgbGlua3NoZXJlID0gJzw8d2hhdExpbmtzSGVyZXxzaG9ydGN1dD1sfHdoYXQgbGlua3MgaGVyZT4+Jztcblx0XHRjb25zdCByZWxhdGVkID0gJzw8cmVsYXRlZENoYW5nZXN8c2hvcnRjdXQ9cnxyZWxhdGVkIGNoYW5nZXM+Pic7XG5cdFx0Y29uc3Qgc2VhcmNoID0gJzxtZW51cm93Pjw8c2VhcmNofHNob3J0Y3V0PXM+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IHdhdGNoID0gJzxtZW51cm93Pjw8dW53YXRjaHx1bndhdGNoU2hvcnQ+Pnw8PHdhdGNofHNob3J0Y3V0PXd8d2F0Y2hUaGluZ3k+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IHByb3RlY3QgPSAnPG1lbnVyb3c+PDx1bnByb3RlY3R8dW5wcm90ZWN0U2hvcnQ+Pnw8PHByb3RlY3R8c2hvcnRjdXQ9cD4+fDw8cHJvdGVjdGxvZ3xsb2c+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IGRlbCA9ICc8bWVudXJvdz48PHVuZGVsZXRlfHVuZGVsZXRlU2hvcnQ+Pnw8PGRlbGV0ZXxzaG9ydGN1dD1kPj58PDxkZWxldGVsb2d8bG9nPj48L21lbnVyb3c+Jztcblx0XHRjb25zdCBtb3ZlID0gJzw8bW92ZXxzaG9ydGN1dD1tfG1vdmUgcGFnZT4+Jztcblx0XHRjb25zdCBudWxsUHVyZ2UgPSAnPG1lbnVyb3c+PDxudWxsRWRpdHxzaG9ydGN1dD1ufG51bGwgZWRpdD4+fDw8cHVyZ2V8c2hvcnRjdXQ9UD4+PC9tZW51cm93Pic7XG5cdFx0Y29uc3Qgdmlld09wdGlvbnMgPSAnPG1lbnVyb3c+PDx2aWV3fHNob3J0Y3V0PXY+Pnw8PHJlbmRlcnxzaG9ydGN1dD1TPj58PDxyYXc+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IGVkaXRSb3cgPVxuXHRcdFx0J2lmKG9sZGlkKXsnICtcblx0XHRcdCc8bWVudXJvdz48PGVkaXR8c2hvcnRjdXQ9ZT4+fDw8ZWRpdE9sZHxzaG9ydGN1dD1lfHRoaXMmbmJzcDtyZXZpc2lvbj4+PC9tZW51cm93PicgK1xuXHRcdFx0JzxtZW51cm93Pjw8cmV2ZXJ0fHNob3J0Y3V0PXY+Pnw8PHVuZG8+PjwvbWVudXJvdz4nICtcblx0XHRcdCd9ZWxzZXs8PGVkaXR8c2hvcnRjdXQ9ZT4+fSc7XG5cdFx0Y29uc3QgbWFya1BhdHJvbGxlZCA9ICdpZihyY2lkKXs8PG1hcmtwYXRyb2xsZWR8bWFyayBwYXRyb2xsZWQ+Pn0nO1xuXHRcdGNvbnN0IG5ld1RvcGljID0gJ2lmKHRhbGspezw8bmV3fHNob3J0Y3V0PSt8bmV3IHRvcGljPj59Jztcblx0XHRjb25zdCBwcm90ZWN0RGVsZXRlID0gYGlmKGFkbWluKXske3Byb3RlY3R9JHtkZWx9fWA7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwQWN0aW9uc01lbnUnKSkge1xuXHRcdFx0cy5wdXNoKGA8PG1haW5saW5rPj4qJHtkcm9wZGl2fSR7bWVudVRpdGxlKCdhY3Rpb25zJyl9YCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHMucHVzaChgJHtkcm9wZGl2fTw8bWFpbmxpbms+PmApO1xuXHRcdH1cblx0XHRzLnB1c2goJzxtZW51PicsIGVkaXRSb3cgKyBtYXJrUGF0cm9sbGVkICsgbmV3VG9waWMgKyBoaXN0ICsgbGFzdGVkaXQgKyB0aGFuayk7XG5cdFx0aWYgKCFzaG9ydGVyKSB7XG5cdFx0XHRzLnB1c2goanNIaXN0b3J5KTtcblx0XHR9XG5cdFx0cy5wdXNoKG1vdmUgKyBsaW5rc2hlcmUgKyByZWxhdGVkKTtcblx0XHRpZiAoIXNob3J0ZXIpIHtcblx0XHRcdHMucHVzaChudWxsUHVyZ2UgKyBzZWFyY2gpO1xuXHRcdH1cblx0XHRpZiAoIXNob3J0ZXIpIHtcblx0XHRcdHMucHVzaCh2aWV3T3B0aW9ucyk7XG5cdFx0fVxuXHRcdHMucHVzaChcblx0XHRcdGA8aHI+JHt3YXRjaH0ke3Byb3RlY3REZWxldGV9YCxcblx0XHRcdCc8aHI+JyArXG5cdFx0XHRcdCdpZih0YWxrKXs8PGFydGljbGV8c2hvcnRjdXQ9YXx2aWV3IGFydGljbGU+Pjw8ZWRpdEFydGljbGV8ZWRpdCBhcnRpY2xlPj59JyArXG5cdFx0XHRcdCdlbHNlezw8dGFsa3xzaG9ydGN1dD10fHRhbGsgcGFnZT4+PDxlZGl0VGFsa3xlZGl0IHRhbGs+PicgK1xuXHRcdFx0XHRgPDxuZXdUYWxrfHNob3J0Y3V0PSt8bmV3IHRvcGljPj59PC9tZW51PiR7ZW5kZGl2fWBcblx0XHQpO1xuXHRcdC8vIHVzZXIgbWVudSBzdGFydHMgaGVyZVxuXHRcdGNvbnN0IGVtYWlsID0gJzw8ZW1haWx8c2hvcnRjdXQ9RXxlbWFpbCB1c2VyPj4nO1xuXHRcdGNvbnN0IGNvbnRyaWJzID1cblx0XHRcdCdpZih3aWtpbWVkaWEpezxtZW51cm93Pn08PGNvbnRyaWJzfHNob3J0Y3V0PWN8Y29udHJpYnV0aW9ucz4+aWYod2lraW1lZGlhKXs8L21lbnVyb3c+fScgK1xuXHRcdFx0J2lmKGFkbWluKXs8bWVudXJvdz48PGRlbGV0ZWRDb250cmlicz4+PC9tZW51cm93Pn0nO1xuXHRcdHMucHVzaChcblx0XHRcdGBpZih1c2VyKXsqJHtkcm9wZGl2fSR7bWVudVRpdGxlKCd1c2VyJyl9YCxcblx0XHRcdCc8bWVudT4nLFxuXHRcdFx0JzxtZW51cm93Pjw8dXNlclBhZ2V8c2hvcnRjdXQ9dXx1c2VyJm5ic3A7cGFnZT4+fDw8dXNlclNwYWNlfHNwYWNlPj48L21lbnVyb3c+Jyxcblx0XHRcdCc8PHVzZXJUYWxrfHNob3J0Y3V0PXR8dXNlciB0YWxrPj48PGVkaXRVc2VyVGFsa3xlZGl0IHVzZXIgdGFsaz4+JyArXG5cdFx0XHRcdCc8PG5ld1VzZXJUYWxrfHNob3J0Y3V0PSt8bGVhdmUgY29tbWVudD4+J1xuXHRcdCk7XG5cdFx0aWYgKHNob3J0ZXIpIHtcblx0XHRcdHMucHVzaChgaWYoaXB1c2VyKXt9ZWxzZXske2VtYWlsfX1gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cy5wdXNoKGBpZihpcHVzZXIpezw8YXJpbj4+fWVsc2V7JHtlbWFpbH19YCk7XG5cdFx0fVxuXHRcdHMucHVzaChcblx0XHRcdGA8aHI+JHtjb250cmlic308PHVzZXJsb2d8c2hvcnRjdXQ9THx1c2VyIGxvZz4+YCxcblx0XHRcdCdpZih3aWtpbWVkaWEpezw8Y291bnR8c2hvcnRjdXQ9I3xlZGl0IGNvdW50ZXI+Pn0nLFxuXHRcdFx0J2lmKGFkbWluKXs8bWVudXJvdz48PHVuYmxvY2t8dW5ibG9ja1Nob3J0Pj58PDxibG9ja3xzaG9ydGN1dD1ifGJsb2NrIHVzZXI+PjwvbWVudXJvdz59Jyxcblx0XHRcdCc8PGJsb2NrbG9nfHNob3J0Y3V0PUJ8YmxvY2sgbG9nPj4nLFxuXHRcdFx0YDwvbWVudT4ke2VuZGRpdn19YFxuXHRcdCk7XG5cdFx0Ly8gcG9wdXBzIG1lbnUgc3RhcnRzIGhlcmVcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBTZXR1cE1lbnUnKSAmJiAheC5uYXZwb3AuaGFzUG9wdXBNZW51IC8qIEZJWE1FOiBoYWNrICovKSB7XG5cdFx0XHR4Lm5hdnBvcC5oYXNQb3B1cE1lbnUgPSB0cnVlO1xuXHRcdFx0cy5wdXNoKFxuXHRcdFx0XHRgKiR7ZHJvcGRpdn0ke21lbnVUaXRsZSgncG9wdXBzTWVudScpfTxtZW51PmAsXG5cdFx0XHRcdCc8PHRvZ2dsZVByZXZpZXdzfHRvZ2dsZSBwcmV2aWV3cz4+Jyxcblx0XHRcdFx0Jzw8cHVyZ2VQb3B1cHN8cmVzZXQ+PicsXG5cdFx0XHRcdCc8PGRpc2FibGVQb3B1cHN8ZGlzYWJsZT4+Jyxcblx0XHRcdFx0YDwvbWVudT4ke2VuZGRpdn1gXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChzLmpvaW4oJycpLCB4LmFydGljbGUsIHgucGFyYW1zKTtcblx0fTtcblx0Y29uc3QgbWVudVRpdGxlID0gKHMpID0+IHtcblx0XHRyZXR1cm4gYDxhIGhyZWY9XCIjXCIgbm9Qb3B1cD0xPiR7cG9wdXBTdHJpbmcocyl9PC9hPmA7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBSZWRpclRpdGxlID0gcGcuc3RydWN0dXJlcy5tZW51cy5wb3B1cFRpdGxlO1xuXHRwZy5zdHJ1Y3R1cmVzLm1lbnVzLnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBUb3BMaW5rcztcblx0Y29weVN0cnVjdHVyZSgnbWVudXMnLCAnc2hvcnRtZW51cycpO1xuXHRwZy5zdHJ1Y3R1cmVzLnNob3J0bWVudXMucG9wdXBUb3BMaW5rcyA9ICh4KSA9PiB7XG5cdFx0cmV0dXJuIHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBUb3BMaW5rcyh4LCB0cnVlKTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5zaG9ydG1lbnVzLnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMuc2hvcnRtZW51cy5wb3B1cFRvcExpbmtzO1xuXHRwZy5zdHJ1Y3R1cmVzLmxpdGUgPSB7fTtcblx0cGcuc3RydWN0dXJlcy5saXRlLnBvcHVwTGF5b3V0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBbJ3BvcHVwVGl0bGUnLCAncG9wdXBQcmV2aWV3J107XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubGl0ZS5wb3B1cFRpdGxlID0gKHgpID0+IHtcblx0XHRsb2coYCR7eC5hcnRpY2xlfTogc3RydWN0dXJlcy5saXRlLnBvcHVwVGl0bGVgKTtcblx0XHQvLyByZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTCgnPGI+PDxtYWlubGluaz4+PC9iPicseC5hcnRpY2xlLHgucGFyYW1zKTtcblx0XHRyZXR1cm4gYDxkaXY+PHNwYW4gY2xhc3M9XCJwb3B1cF9tYWlubGlua1wiPjxiPiR7eC5hcnRpY2xlLnRvU3RyaW5nKCl9PC9iPjwvc3Bhbj48L2Rpdj5gO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBzdHJ1Y3R1cmVzLmpzXG5cdC8vIFNUQVJURklMRTogYXV0b2VkaXQuanNcblx0Y29uc3Qgc3Vic3RpdHV0ZSA9IChkYXRhLCBjbWRCb2R5KSA9PiB7XG5cdFx0Ly8gbXcubm90aWZ5KGBzdWJcXG5mcm9tOiAke2NtZEJvZHkuZnJvbX1cXG50bzogJHtjbWRCb2R5LnRvfVxcbmZsYWdzOiAke2NtZEJvZHkuZmxhZ3N9YCwge3RhZzogJ3BvcHVwcycsIHR5cGU6ICd3YXJuJ30pO1xuXHRcdGNvbnN0IGZyb21SZSA9IG5ldyBSZWdFeHAoY21kQm9keS5mcm9tLCBjbWRCb2R5LmZsYWdzKTtcblx0XHRyZXR1cm4gZGF0YS5yZXBsYWNlKGZyb21SZSwgY21kQm9keS50byk7XG5cdH07XG5cdGNvbnN0IGV4ZWNDbWRzID0gKGRhdGEsIGNtZExpc3QpID0+IHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgY21kTGlzdCkge1xuXHRcdFx0ZGF0YSA9IGVsZW1lbnQuYWN0aW9uKGRhdGEsIGVsZW1lbnQpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGF0YTtcblx0fTtcblx0Y29uc3QgcGFyc2VDbWQgPSBmdW5jdGlvbiBwYXJzZUNtZChzdHIpIHtcblx0XHQvLyByZXR1cm5zIGEgbGlzdCBvZiBjb21tYW5kc1xuXHRcdGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGxldCBwID0gZmFsc2U7XG5cdFx0c3dpdGNoIChzdHIuY2hhckF0KDApKSB7XG5cdFx0XHRjYXNlICdzJzpcblx0XHRcdFx0cCA9IHBhcnNlU3Vic3RpdHV0ZShzdHIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHApIHtcblx0XHRcdHJldHVybiBbcCwgcGFyc2VDbWQocC5yZW1haW5kZXIpXTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHQvLyBGSVhNRTogT25seSB1c2VkIG9uY2UgaGVyZSwgY29uZnVzaW5nIHdpdGggbmF0aXZlIChhbmQgbW9yZSB3aWRlbHktdXNlZCkgdW5lc2NhcGUsIHNob3VsZCBwcm9iYWJseSBiZSByZXBsYWNlZFxuXHQvLyBUaGVuIGFnYWluLCB1bmVzY2FwZSBpcyBzZW1pLXNvZnQtZGVwcmVjYXRlZCwgc28gd2Ugc2hvdWxkIGxvb2sgaW50byByZXBsYWNpbmcgdGhhdCB0b29cblx0Y29uc3QgdW5Fc2NhcGUgPSAoc3RyLCBzZXApID0+IHtcblx0XHRyZXR1cm4gc3RyXG5cdFx0XHQuc3BsaXQoJ1xcXFxcXFxcJylcblx0XHRcdC5qb2luKCdcXFxcJylcblx0XHRcdC5zcGxpdChgXFxcXCR7c2VwfWApXG5cdFx0XHQuam9pbihzZXApXG5cdFx0XHQuc3BsaXQoU3RyaW5nLnJhd2BcXG5gKVxuXHRcdFx0LmpvaW4oJ1xcbicpO1xuXHR9O1xuXHRjb25zdCBwYXJzZVN1YnN0aXR1dGUgPSAoc3RyKSA9PiB7XG5cdFx0Ly8gdGFrZXMgYSBzdHJpbmcgbGlrZSBzL2EvYi9mbGFncztvdGhlcmNtZHMgYW5kIHBhcnNlcyBpdFxuXHRcdGxldCBmcm9tO1xuXHRcdGxldCB0bztcblx0XHRsZXQgZmxhZ3M7XG5cdFx0bGV0IHRtcDtcblx0XHRpZiAoc3RyLmxlbmd0aCA8IDQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3Qgc2VwID0gc3RyLmNoYXJBdCgxKTtcblx0XHRzdHIgPSBzdHIuc2xpY2UoMik7XG5cdFx0dG1wID0gc2tpcE92ZXIoc3RyLCBzZXApO1xuXHRcdGlmICh0bXApIHtcblx0XHRcdGZyb20gPSB0bXAuc2VnbWVudDtcblx0XHRcdHN0ciA9IHRtcC5yZW1haW5kZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dG1wID0gc2tpcE92ZXIoc3RyLCBzZXApO1xuXHRcdGlmICh0bXApIHtcblx0XHRcdHRvID0gdG1wLnNlZ21lbnQ7XG5cdFx0XHRzdHIgPSB0bXAucmVtYWluZGVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGZsYWdzID0gJyc7XG5cdFx0aWYgKHN0ci5sZW5ndGggPiAwKSB7XG5cdFx0XHR0bXAgPSBza2lwT3ZlcihzdHIsICc7JykgfHwgc2tpcFRvRW5kKHN0ciwgJzsnKTtcblx0XHRcdGlmICh0bXApIHtcblx0XHRcdFx0ZmxhZ3MgPSB0bXAuc2VnbWVudDtcblx0XHRcdFx0c3RyID0gdG1wLnJlbWFpbmRlcjtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGlvbjogc3Vic3RpdHV0ZSxcblx0XHRcdGZyb20sXG5cdFx0XHR0byxcblx0XHRcdGZsYWdzLFxuXHRcdFx0cmVtYWluZGVyOiBzdHIsXG5cdFx0fTtcblx0fTtcblx0Y29uc3Qgc2tpcE92ZXIgPSAoc3RyLCBzZXApID0+IHtcblx0XHRjb25zdCBlbmRTZWdtZW50ID0gZmluZE5leHQoc3RyLCBzZXApO1xuXHRcdGlmIChlbmRTZWdtZW50IDwgMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBzZWdtZW50ID0gdW5Fc2NhcGUoc3RyLnNsaWNlKDAsIE1hdGgubWF4KDAsIGVuZFNlZ21lbnQpKSwgc2VwKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VnbWVudCxcblx0XHRcdHJlbWFpbmRlcjogc3RyLnNsaWNlKE1hdGgubWF4KDAsIGVuZFNlZ21lbnQgKyAxKSksXG5cdFx0fTtcblx0fTtcblx0Y29uc3Qgc2tpcFRvRW5kID0gKHN0ciwgX3NlcCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZWdtZW50OiBzdHIsXG5cdFx0XHRyZW1haW5kZXI6ICcnLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IGZpbmROZXh0ID0gKHN0ciwgY2gpID0+IHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKHN0ci5jaGFyQXQoaSkgPT09ICdcXFxcJykge1xuXHRcdFx0XHRpICs9IDI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc3RyLmNoYXJBdChpKSA9PT0gY2gpIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fTtcblx0Y29uc3Qgc2V0Q2hlY2tib3ggPSAocGFyYW0sIGJveCkgPT4ge1xuXHRcdGNvbnN0IHZhbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZShwYXJhbSk7XG5cdFx0aWYgKHZhbCkge1xuXHRcdFx0c3dpdGNoICh2YWwpIHtcblx0XHRcdFx0Y2FzZSAnMSc6XG5cdFx0XHRcdGNhc2UgJ3llcyc6XG5cdFx0XHRcdGNhc2UgJ3RydWUnOlxuXHRcdFx0XHRcdGJveC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnMCc6XG5cdFx0XHRcdGNhc2UgJ25vJzpcblx0XHRcdFx0Y2FzZSAnZmFsc2UnOlxuXHRcdFx0XHRcdGJveC5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBhdXRvRWRpdCA9IGZ1bmN0aW9uIGF1dG9FZGl0KCkge1xuXHRcdHNldHVwUG9wdXBzKCgpID0+IHtcblx0XHRcdGlmIChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2F1dG9pbXBsJykgIT09IHBvcHVwU3RyaW5nKCdhdXRvZWRpdF92ZXJzaW9uJykpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3dhdGNobGlzdCcpICYmIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYWN0b2tlbicpID09PSBhdXRvQ2xpY2tUb2tlbigpKSB7XG5cdFx0XHRcdHBnLmZuLm1vZGlmeVdhdGNobGlzdChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3RpdGxlJyksIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYWN0aW9uJykpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFkb2N1bWVudC5lZGl0Zm9ybSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYXV0b0VkaXQuYWxyZWFkeVJhbikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRhdXRvRWRpdC5hbHJlYWR5UmFuID0gdHJ1ZTtcblx0XHRcdGNvbnN0IGNtZFN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b2VkaXQnKTtcblx0XHRcdGlmIChjbWRTdHJpbmcpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBlZGl0Ym94ID0gZG9jdW1lbnQuZWRpdGZvcm0ud3BUZXh0Ym94MTtcblx0XHRcdFx0XHRjb25zdCBjbWRMaXN0ID0gcGFyc2VDbWQoY21kU3RyaW5nKTtcblx0XHRcdFx0XHRjb25zdCBpbnB1dCA9IGVkaXRib3gudmFsdWU7XG5cdFx0XHRcdFx0Y29uc3Qgb3V0cHV0ID0gZXhlY0NtZHMoaW5wdXQsIGNtZExpc3QpO1xuXHRcdFx0XHRcdGVkaXRib3gudmFsdWUgPSBvdXRwdXQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2V0Q2hlY2tib3goJ2F1dG9taW5vcicsIGRvY3VtZW50LmVkaXRmb3JtLndwTWlub3JlZGl0KTtcblx0XHRcdHNldENoZWNrYm94KCdhdXRvd2F0Y2gnLCBkb2N1bWVudC5lZGl0Zm9ybS53cFdhdGNodGhpcyk7XG5cdFx0XHRjb25zdCBydmlkID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvcnYnKTtcblx0XHRcdGlmIChydmlkKSB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IGAke3BnLndpa2kuYXBpd2lraWJhc2V9P2FjdGlvbj1xdWVyeSZmb3JtYXQ9anNvbiZmb3JtYXR2ZXJzaW9uPTImcHJvcD1yZXZpc2lvbnMmcmV2aWRzPSR7cnZpZH1gO1xuXHRcdFx0XHRzdGFydERvd25sb2FkKHVybCwgbnVsbCwgYXV0b0VkaXQyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGF1dG9FZGl0MigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBhdXRvRWRpdDIgPSAoZCkgPT4ge1xuXHRcdGxldCBzdW1tYXJ5ID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvc3VtbWFyeScpO1xuXHRcdGxldCBzdW1tYXJ5cHJvbXB0ID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvc3VtbWFyeXByb21wdCcpO1xuXHRcdGxldCBzdW1tYXJ5bm90aWNlID0gJyc7XG5cdFx0aWYgKGQgJiYgZC5kYXRhICYmIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3J2JykpIHtcblx0XHRcdGNvbnN0IHMgPSBnZXRSdlN1bW1hcnkoc3VtbWFyeSwgZC5kYXRhKTtcblx0XHRcdGlmIChzID09PSBmYWxzZSkge1xuXHRcdFx0XHRzdW1tYXJ5cHJvbXB0ID0gdHJ1ZTtcblx0XHRcdFx0c3VtbWFyeW5vdGljZSA9IHBvcHVwU3RyaW5nKCdGYWlsZWQgdG8gZ2V0IHJldmlzaW9uIGluZm9ybWF0aW9uLCBwbGVhc2UgZWRpdCBtYW51YWxseS5cXG5cXG4nKTtcblx0XHRcdFx0c3VtbWFyeSA9IHNpbXBsZVByaW50ZihzdW1tYXJ5LCBbbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvcnYnKSwgJyh1bmtub3duKScsICcodW5rbm93biknXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdW1tYXJ5ID0gcztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHN1bW1hcnlwcm9tcHQpIHtcblx0XHRcdGNvbnN0IHR4dCA9IHN1bW1hcnlub3RpY2UgKyBwb3B1cFN0cmluZygnRW50ZXIgYSBub24tZW1wdHkgZWRpdCBzdW1tYXJ5IG9yIHByZXNzIGNhbmNlbCB0byBhYm9ydCcpO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBwcm9tcHQodHh0LCBzdW1tYXJ5KTtcblx0XHRcdGlmIChyZXNwb25zZSkge1xuXHRcdFx0XHRzdW1tYXJ5ID0gcmVzcG9uc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChzdW1tYXJ5KSB7XG5cdFx0XHRkb2N1bWVudC5lZGl0Zm9ybS53cFN1bW1hcnkudmFsdWUgPSBzdW1tYXJ5O1xuXHRcdH1cblx0XHQvLyBBdHRlbXB0IHRvIGF2b2lkIHBvc3NpYmxlIHByZW1hdHVyZSBjbGlja2luZyBvZiB0aGUgc2F2ZSBidXR0b25cblx0XHQvLyAobWF5YmUgZGVsYXlzIGluIHVwZGF0ZXMgdG8gdGhlIERPTSBhcmUgdG8gYmxhbWU/PyBvciBhIHJlZCBoZXJyaW5nKVxuXHRcdHNldFRpbWVvdXQoYXV0b0VkaXQzLCAxMDApO1xuXHR9O1xuXHRjb25zdCBhdXRvQ2xpY2tUb2tlbiA9ICgpID0+IHtcblx0XHRyZXR1cm4gbXcudXNlci5zZXNzaW9uSWQoKTtcblx0fTtcblx0Y29uc3QgYXV0b0VkaXQzID0gKCkgPT4ge1xuXHRcdGlmIChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2FjdG9rZW4nKSAhPT0gYXV0b0NsaWNrVG9rZW4oKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBidG4gPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2F1dG9jbGljaycpO1xuXHRcdGlmIChidG4pIHtcblx0XHRcdGlmIChkb2N1bWVudC5lZGl0Zm9ybSAmJiBkb2N1bWVudC5lZGl0Zm9ybVtidG5dKSB7XG5cdFx0XHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmVkaXRmb3JtW2J0bl07XG5cdFx0XHRcdGNvbnN0IG1zZyA9IHRwcmludGYoXG5cdFx0XHRcdFx0J1RoZSAlcyBidXR0b24gaGFzIGJlZW4gYXV0b21hdGljYWxseSBjbGlja2VkLiBQbGVhc2Ugd2FpdCBmb3IgdGhlIG5leHQgcGFnZSB0byBsb2FkLicsXG5cdFx0XHRcdFx0W2J1dHRvbi52YWx1ZV1cblx0XHRcdFx0KTtcblx0XHRcdFx0YmFubmVyTWVzc2FnZShtc2cpO1xuXHRcdFx0XHRkb2N1bWVudC50aXRsZSA9IGAoJHtkb2N1bWVudC50aXRsZX0pYDtcblx0XHRcdFx0YnV0dG9uLmNsaWNrKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHR0cHJpbnRmKCdDb3VsZCBub3QgZmluZCBidXR0b24gJXMuIFBsZWFzZSBjaGVjayB0aGUgc2V0dGluZ3MgaW4geW91ciBqYXZhc2NyaXB0IGZpbGUuJywgW2J0bl0pLFxuXHRcdFx0XHRcdHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgYmFubmVyTWVzc2FnZSA9IChzKSA9PiB7XG5cdFx0Y29uc3QgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoMScpO1xuXHRcdGlmIChoZWFkaW5ncykge1xuXHRcdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRkaXYuaW5uZXJIVE1MID0gYDxmb250IHNpemU9KzE+PGI+JHtwZy5lc2NhcGVRdW90ZXNIVE1MKHMpfTwvYj48L2ZvbnQ+YDtcblx0XHRcdGhlYWRpbmdzWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpdiwgaGVhZGluZ3NbMF0pO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgZ2V0UnZTdW1tYXJ5ID0gKHRlbXBsYXRlLCBqc29uKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IG8gPSBnZXRKc09iaihqc29uKTtcblx0XHRcdGNvbnN0IFtlZGl0XSA9IGFueUNoaWxkKG8ucXVlcnkucGFnZXMpLnJldmlzaW9ucztcblx0XHRcdGNvbnN0IHRpbWVzdGFtcCA9IGVkaXQudGltZXN0YW1wXG5cdFx0XHRcdC5zcGxpdCgvW0EtWl0vZylcblx0XHRcdFx0LmpvaW4oJyAnKVxuXHRcdFx0XHQucmVwbGFjZSgvXiAqfCAqJC9nLCAnJyk7XG5cdFx0XHRyZXR1cm4gc2ltcGxlUHJpbnRmKHRlbXBsYXRlLCBbZWRpdC5yZXZpZCwgdGltZXN0YW1wLCBlZGl0LnVzZXJoaWRkZW4gPyAnKGhpZGRlbiknIDogZWRpdC51c2VyXSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXHQvLyBFTkRGSUxFOiBhdXRvZWRpdC5qc1xuXHQvLyBTVEFSVEZJTEU6IGRvd25sb2FkZXIuanNcblx0LyoqXG5cdCAqIEBmaWxlb3ZlcnZpZXdcblx0ICoge0Bzb3VyY2UgRG93bmxvYWRlcn0sIGEgeG1saHR0cHJlcXVlc3Qgd3JhcHBlciwgYW5kIGhlbHBlciBmdW5jdGlvbnMuXG5cdCAqL1xuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBEb3dubG9hZGVyXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAY2xhc3MgVGhlIERvd25sb2FkZXIgY2xhc3MuIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIHRvIGRvd25sb2FkIHN0dWZmLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gZG93bmxvYWQuIFRoaXMgY2FuIGJlIG9taXR0ZWQgYW5kIHN1cHBsaWVkIGxhdGVyLlxuXHQgKi9cblx0Y2xhc3MgRG93bmxvYWRlciB7XG5cdFx0Y29uc3RydWN0b3IodXJsKSB7XG5cdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR0aGlzLmh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRcdH1cblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIHVybCB0byBkb3dubG9hZFxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnVybCA9IHVybDtcblx0XHRcdC8qKlxuXHRcdFx0ICogQSB1bml2ZXJzYWxseSB1bmlxdWUgSUQgbnVtYmVyXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmlkID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogTW9kaWZpY2F0aW9uIGRhdGUsIHRvIGJlIGN1bGxlZCBmcm9tIHRoZSBpbmNvbWluZyBoZWFkZXJzXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgRGF0ZVxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5sYXN0TW9kaWZpZWQgPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBXaGF0IHRvIGRvIHdoZW4gdGhlIGRvd25sb2FkIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBGdW5jdGlvblxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5jYWxsYmFja0Z1bmN0aW9uID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogV2hhdCB0byBkbyBvbiBmYWlsdXJlXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgRnVuY3Rpb25cblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMub25GYWlsdXJlID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogRmxhZyBzZXQgb24gPGNvZGU+YWJvcnQ8L2NvZGU+XG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmFib3J0ZWQgPSBmYWxzZTtcblx0XHRcdC8qKlxuXHRcdFx0ICogSFRUUCBtZXRob2QuIFNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWM5Lmh0bWwgZm9yXG5cdFx0XHQgKiBwb3NzaWJpbGl0aWVzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLm1ldGhvZCA9ICdHRVQnO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBBc3luYyBmbGFnLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5hc3luYyA9IHRydWU7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFN1Ym1pdHMgdGhlIGh0dHAgcmVxdWVzdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0geFxuXHRcdCAqL1xuXHRcdHNlbmQoeCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLnNlbmQoeCk7XG5cdFx0fVxuXHRcdC8qIEFib3J0cyB0aGUgZG93bmxvYWQsIHNldHRpbmcgdGhlIDxjb2RlPmFib3J0ZWQ8L2NvZGU+IGZpZWxkIHRvIHRydWUuICovXG5cdFx0YWJvcnQoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHRoaXMuYWJvcnRlZCA9IHRydWU7XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLmFib3J0KCk7XG5cdFx0fVxuXHRcdC8qKiBSZXR1cm5zIHRoZSBkb3dubG9hZGVkIGRhdGEuICovXG5cdFx0Z2V0RGF0YSgpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5yZXNwb25zZVRleHQ7XG5cdFx0fVxuXHRcdC8qKiBQcmVwYXJlcyB0aGUgZG93bmxvYWQuICovXG5cdFx0c2V0VGFyZ2V0KCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmh0dHAub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmwsIHRoaXMuYXN5bmMpO1xuXHRcdFx0dGhpcy5odHRwLnNldFJlcXVlc3RIZWFkZXIoJ0FwaS1Vc2VyLUFnZW50JywgcGcuYXBpLnVzZXJBZ2VudCk7XG5cdFx0fVxuXHRcdC8qKiBHZXRzIHRoZSBzdGF0ZSBvZiB0aGUgZG93bmxvYWQuICovXG5cdFx0Z2V0UmVhZHlTdGF0ZSgpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5yZWFkeVN0YXRlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTdGFydHMgdGhlIGRvd25sb2FkLlxuXHRcdCAqIE5vdGUgdGhhdCBzZXRUYXJnZXQge0Bzb3VyY2UgRG93bmxvYWRlciNzZXRUYXJnZXR9IG11c3QgYmUgcnVuIGZpcnN0XG5cdFx0ICovXG5cdFx0c3RhcnQoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHBnLm1pc2MuZG93bmxvYWRzSW5Qcm9ncmVzc1t0aGlzLmlkXSA9IHNlbGY7XG5cdFx0XHR0aGlzLmh0dHAuc2VuZChudWxsKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogR2V0cyB0aGUgJ0xhc3QtTW9kaWZpZWQnIGRhdGUgZnJvbSB0aGUgZG93bmxvYWQgaGVhZGVycy5cblx0XHQgKiBTaG91bGQgYmUgcnVuIGFmdGVyIHRoZSBkb3dubG9hZCBjb21wbGV0ZXMuXG5cdFx0ICogUmV0dXJucyA8Y29kZT5udWxsPC9jb2RlPiBvbiBmYWlsdXJlLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybiB7RGF0ZX1cblx0XHQgKi9cblx0XHRnZXRMYXN0TW9kaWZpZWREYXRlKCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRsZXQgbGFzdG1vZDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxhc3Rtb2QgPSB0aGlzLmh0dHAuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xhc3QtTW9kaWZpZWQnKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxhc3Rtb2QpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBEYXRlKGxhc3Rtb2QpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZiBjYWxsYmFjayBmdW5jdGlvbiwgY2FsbGVkIGFzIDxjb2RlPmYodGhpcyk8L2NvZGU+IG9uIHN1Y2Nlc3Ncblx0XHQgKi9cblx0XHRzZXRDYWxsYmFjayhmKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZjtcblx0XHR9XG5cdFx0Z2V0U3RhdHVzKCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLnN0YXR1cztcblx0XHR9XG5cdH1cblx0bmV3IERvd25sb2FkZXIoKTtcblx0cGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzID0ge307XG5cdC8vIGhlbHBlciBmdW5jdGlvbnNcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcge0Bzb3VyY2UgRG93bmxvYWRlcn0gYW5kIHByZXBhcmVzIGl0IGZvciBhY3Rpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBkb3dubG9hZFxuXHQgKiBAcGFyYW0ge2ludGVnZXJ9IGlkIFRoZSBJRCBvZiB0aGUge0Bzb3VyY2UgRG93bmxvYWRlcn0gb2JqZWN0XG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBpbnZva2VkIG9uIHN1Y2Nlc3Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IG9uZmFpbHVyZVxuXHQgKiBAcmV0dXJuIHtTdHJpbmcvRG93bmxvYWRlcn0gdGhlIHtAc291cmNlIERvd25sb2FkZXJ9IG9iamVjdCBjcmVhdGVkLCBvciAnb2hkZWFyJyBpZiBhbiB1bnN1cHBvcnRlZCBicm93c2VyXG5cdCAqL1xuXHRjb25zdCBuZXdEb3dubG9hZCA9IGZ1bmN0aW9uIG5ld0Rvd25sb2FkKHVybCwgaWQsIGNhbGxiYWNrLCBvbmZhaWx1cmUpIHtcblx0XHRjb25zdCBkID0gbmV3IERvd25sb2FkZXIodXJsKTtcblx0XHRpZiAoIWQuaHR0cCkge1xuXHRcdFx0cmV0dXJuICdvaGRlYXInO1xuXHRcdH1cblx0XHRkLmlkID0gaWQ7XG5cdFx0ZC5zZXRUYXJnZXQoKTtcblx0XHRvbmZhaWx1cmUgfHw9IDI7XG5cdFx0Y29uc3QgZiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChkLmdldFJlYWR5U3RhdGUoKSA9PT0gNCkge1xuXHRcdFx0XHRkZWxldGUgcGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzW3RoaXMuaWRdO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmIChkLmdldFN0YXR1cygpID09PSAyMDApIHtcblx0XHRcdFx0XHRcdGQuZGF0YSA9IGQuZ2V0RGF0YSgpO1xuXHRcdFx0XHRcdFx0ZC5sYXN0TW9kaWZpZWQgPSBkLmdldExhc3RNb2RpZmllZERhdGUoKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKGQpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIG9uZmFpbHVyZSA9PT0gdHlwZW9mIDEpIHtcblx0XHRcdFx0XHRcdGlmIChvbmZhaWx1cmUgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdC8vIHJldHJ5XG5cdFx0XHRcdFx0XHRcdG5ld0Rvd25sb2FkKHVybCwgaWQsIGNhbGxiYWNrLCBvbmZhaWx1cmUgLSAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBvbmZhaWx1cmUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdG9uZmFpbHVyZShkLCB1cmwsIGlkLCBjYWxsYmFjayk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBpZ25vcmUgaXQgKi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0ZC5zZXRDYWxsYmFjayhmKTtcblx0XHRyZXR1cm4gZDtcblx0fTtcblx0LyoqXG5cdCAqIFNpbXVsYXRlcyBhIGRvd25sb2FkIGZyb20gY2FjaGVkIGRhdGEuXG5cdCAqIFRoZSBzdXBwbGllZCBkYXRhIGlzIHB1dCBpbnRvIGEge0Bzb3VyY2UgRG93bmxvYWRlcn0gYXMgaWYgaXQgaGFkIGRvd25sb2FkZWQgaXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybC5cblx0ICogQHBhcmFtIHtpbnRlZ2VyfSBpZCBUaGUgSUQuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjaywgd2hpY2ggaXMgaW52b2tlZCBpbW1lZGlhdGVseSBhcyA8Y29kZT5jYWxsYmFjayhkKTwvY29kZT4sXG5cdCAqIHdoZXJlIDxjb2RlPmQ8L2NvZGU+IGlzIHRoZSBuZXcge0Bzb3VyY2UgRG93bmxvYWRlcn0uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIFRoZSAoY2FjaGVkKSBkYXRhLlxuXHQgKiBAcGFyYW0ge0RhdGV9IGxhc3RNb2RpZmllZCBUaGUgKGNhY2hlZCkgbGFzdCBtb2RpZmllZCBkYXRlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gb3duZXJcblx0ICovXG5cdGNvbnN0IGZha2VEb3dubG9hZCA9ICh1cmwsIGlkLCBjYWxsYmFjaywgZGF0YSwgbGFzdE1vZGlmaWVkLCBvd25lcikgPT4ge1xuXHRcdGNvbnN0IGQgPSBuZXdEb3dubG9hZCh1cmwsIGNhbGxiYWNrKTtcblx0XHRkLm93bmVyID0gb3duZXI7XG5cdFx0ZC5pZCA9IGlkO1xuXHRcdGQuZGF0YSA9IGRhdGE7XG5cdFx0ZC5sYXN0TW9kaWZpZWQgPSBsYXN0TW9kaWZpZWQ7XG5cdFx0cmV0dXJuIGNhbGxiYWNrKGQpO1xuXHR9O1xuXHQvKipcblx0ICogU3RhcnRzIGEgZG93bmxvYWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBkb3dubG9hZFxuXHQgKiBAcGFyYW0ge2ludGVnZXJ9IGlkIFRoZSBJRCBvZiB0aGUge0Bzb3VyY2UgRG93bmxvYWRlcn0gb2JqZWN0XG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBpbnZva2VkIG9uIHN1Y2Nlc3Ncblx0ICogQHJldHVybiB7U3RyaW5nL0Rvd25sb2FkZXJ9IHRoZSB7QHNvdXJjZSBEb3dubG9hZGVyfSBvYmplY3QgY3JlYXRlZCwgb3IgJ29oZGVhcicgaWYgYW4gdW5zdXBwb3J0ZWQgYnJvd3NlclxuXHQgKi9cblx0Y29uc3Qgc3RhcnREb3dubG9hZCA9ICh1cmwsIGlkLCBjYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IGQgPSBuZXdEb3dubG9hZCh1cmwsIGlkLCBjYWxsYmFjayk7XG5cdFx0aWYgKHR5cGVvZiBkID09PSB0eXBlb2YgJycpIHtcblx0XHRcdHJldHVybiBkO1xuXHRcdH1cblx0XHRkLnN0YXJ0KCk7XG5cdFx0cmV0dXJuIGQ7XG5cdH07XG5cdC8qKlxuXHQgKiBBYm9ydHMgYWxsIGRvd25sb2FkcyB3aGljaCBoYXZlIGJlZW4gc3RhcnRlZC5cblx0ICovXG5cdGNvbnN0IGFib3J0QWxsRG93bmxvYWRzID0gKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgeCBpbiBwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3MpIHtcblx0XHRcdGlmICghT2JqZWN0Lmhhc093bihwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3MsIHgpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzW3hdLmFib3J0ZWQgPSB0cnVlO1xuXHRcdFx0XHRwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3NbeF0uYWJvcnQoKTtcblx0XHRcdFx0ZGVsZXRlIHBnLm1pc2MuZG93bmxvYWRzSW5Qcm9ncmVzc1t4XTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Ly8gRU5ERklMRTogZG93bmxvYWRlci5qc1xuXHQvLyBTVEFSVEZJTEU6IGxpdmVwcmV2aWV3LmpzXG5cdC8vIFRPRE86IGxvY2F0aW9uIGlzIG9mdGVuIG5vdCBjb3JyZWN0IChlZyByZWxhdGl2ZSBsaW5rcyBpbiBwcmV2aWV3cylcblx0Ly8gTk9URTogcmVtb3ZlZCBtZDUgYW5kIGltYWdlIGFuZCBtYXRoIHBhcnNpbmcuIHdhcyBicm9rZW4sIGxvdHMgb2YgYnl0ZXMuXG5cdC8qKlxuXHQgKiBJbnN0YVZpZXcgLSBhIE1lZGlhd2lraSB0byBIVE1MIGNvbnZlcnRlciBpbiBKYXZhU2NyaXB0XG5cdCAqIFZlcnNpb24gMC42LjFcblx0ICogQ29weXJpZ2h0IChDKSBQZWRybyBGYXlvbGxlIDIwMDUtMjAwNlxuXHQgKiB7QGxpbmsgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVXNlcjpQaWxhZn1cblx0ICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBsaWNlbnNlXG5cdCAqXG5cdCAqIENoYW5nZWxvZzpcblx0ICpcblx0ICogMC42LjFcblx0ICogLSBGaXhlZCBwcm9ibGVtIGNhdXNlZCBieSBcXHIgY2hhcmFjdGVyc1xuXHQgKiAtIEltcHJvdmVkIGlubGluZSBmb3JtYXR0aW5nIHBhcnNlclxuXHQgKlxuXHQgKiAwLjZcblx0ICogLSBDaGFuZ2VkIG5hbWUgdG8gSW5zdGFWaWV3XG5cdCAqIC0gU29tZSBtYWpvciBjb2RlIHJlb3JnYW5pemF0aW9ucyBhbmQgZmFjdG9yZWQgb3V0IHNvbWUgY29tbW9uIGZ1bmN0aW9uc1xuXHQgKiAtIEhhbmRsZWQgY29udmVyc2lvbiBvZiByZWxhdGl2ZSBsaW5rcyAoaS5lLiBbWy9mb29dXSlcblx0ICogLSBGaXhlZCBtaXNyZW5kZXJpbmcgb2YgYWRqYWNlbnQgZGVmaW5pdGlvbiBsaXN0IGl0ZW1zXG5cdCAqIC0gRml4ZWQgYnVnIGluIHRhYmxlIGhlYWRpbmdzIGhhbmRsaW5nXG5cdCAqIC0gQ2hhbmdlZCBkYXRlIGZvcm1hdCBpbiBzaWduYXR1cmVzIHRvIHJlZmxlY3QgTWVkaWF3aWtpJ3Ncblx0ICogLSBGaXhlZCBoYW5kbGluZyBvZiBbWzpJbWFnZTouLi5dXVxuXHQgKiAtIFVwZGF0ZWQgTUQ1IGZ1bmN0aW9uIChob3BlZnVsbHkgaXQgd2lsbCB3b3JrIHdpdGggVVRGLTgpXG5cdCAqIC0gRml4ZWQgYnVnIGluIGhhbmRsaW5nIG9mIGxpbmtzIGluc2lkZSBpbWFnZXNcblx0ICpcblx0ICogVG8gZG86XG5cdCAqIC0gQmV0dGVyIHN1cHBvcnQgZm9yIG1hdGggdGFnc1xuXHQgKiAtIEZ1bGwgc3VwcG9ydCBmb3Igbm93aWtpIHRhZ1xuXHQgKiAtIFBhcnNlci1iYXNlZCAoYXMgb3Bwb3NlZCB0byBSZWdFeHAtYmFzZWQpIGlubGluZSB3aWtpY29kZSBoYW5kbGluZyAobWFrZSBpdCBvbmUtcGFzcyBhbmRcblx0ICogICBidWxsZXQtcHJvb2YpXG5cdCAqIC0gU3VwcG9ydCBmb3IgdGVtcGxhdGVzICh0aHJvdWdoIEFKQVgpXG5cdCAqIC0gU3VwcG9ydCBmb3IgY29sb3VyZWQgbGlua3MgKEFKQVgpXG5cdCAqL1xuXHRjb25zdCBJbnN0YSA9IHt9O1xuXHRjb25zdCBzZXR1cExpdmVQcmV2aWV3ID0gKCkgPT4ge1xuXHRcdGxldCBfYjtcblx0XHQvLyBvcHRpb25zXG5cdFx0SW5zdGEuY29uZiA9IHtcblx0XHRcdGJhc2VVcmw6ICcnLFxuXHRcdFx0dXNlcjoge30sXG5cdFx0XHR3aWtpOiB7XG5cdFx0XHRcdGxhbmc6IHBnLndpa2kubGFuZyxcblx0XHRcdFx0aW50ZXJ3aWtpOiBwZy53aWtpLmludGVyd2lraSxcblx0XHRcdFx0ZGVmYXVsdF90aHVtYl93aWR0aDogMTgwLFxuXHRcdFx0fSxcblx0XHRcdHBhdGhzOiB7XG5cdFx0XHRcdGFydGljbGVzOiBgJHtwZy53aWtpLmFydGljbGVQYXRofS9gLFxuXHRcdFx0XHQvLyBPbmx5IHVzZWQgZm9yIEluc3RhIHByZXZpZXdzIHdpdGggaW1hZ2VzLiAobm90IGluIHBvcHVwcylcblx0XHRcdFx0bWF0aDogJy9tYXRoLycsXG5cdFx0XHRcdGltYWdlczogJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvJyxcblx0XHRcdFx0aW1hZ2VzX2ZhbGxiYWNrOiAnLy93bS56aG9uZ3dlbi53aWtpL2NvbW1vbnMvJyxcblx0XHRcdH0sXG5cdFx0XHRsb2NhbGU6IHtcblx0XHRcdFx0dXNlcjogbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNVc2VySWRdLFxuXHRcdFx0XHRpbWFnZTogbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNJbWFnZUlkXSxcblx0XHRcdFx0Y2F0ZWdvcnk6IG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zQ2F0ZWdvcnlJZF0sXG5cdFx0XHRcdC8vIHNob3VsZG4ndCBiZSB1c2VkIGluIHBvcHVwIHByZXZpZXdzLCBpIHRoaW5rXG5cdFx0XHRcdG1vbnRoczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdC8vIG9wdGlvbnMgd2l0aCBkZWZhdWx0IHZhbHVlcyBvciBiYWNrcmVmZXJlbmNlc1xuXHRcdChfYiA9IEluc3RhLmNvbmYudXNlcikubmFtZSB8fCAoX2IubmFtZSA9ICdRaXV3ZW4gQmFpa2UgY29udHJpYnV0b3JzJyk7XG5cdFx0SW5zdGEuY29uZi51c2VyLnNpZ25hdHVyZSA9IGBbWyR7SW5zdGEuY29uZi5sb2NhbGUudXNlcn06JHtJbnN0YS5jb25mLnVzZXIubmFtZX18JHtJbnN0YS5jb25mLnVzZXIubmFtZX1dXWA7XG5cdFx0Ly8gZGVmaW5lIGNvbnN0YW50c1xuXHRcdEluc3RhLkJMT0NLX0lNQUdFID0gbmV3IFJlZ0V4cChcblx0XHRcdGBeXFxcXFtcXFxcWyg/OkZpbGV8SW1hZ2V8JHtJbnN0YS5jb25mLmxvY2FsZS5pbWFnZX0pOi4qP1xcXFx8Lio/KD86ZnJhbWV8dGh1bWJuYWlsfHRodW1ifG5vbmV8cmlnaHR8bGVmdHxjZW50ZXIpYCxcblx0XHRcdCdpJ1xuXHRcdCk7XG5cdH07XG5cdEluc3RhLmR1bXAgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcblx0XHRpZiAodHlwZW9mIGZyb20gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRmcm9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZnJvbX1gKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB0byA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dG99YCk7XG5cdFx0fVxuXHRcdHRvLmlubmVySFRNTCA9IHRoaXMuY29udmVydChmcm9tLnZhbHVlKTtcblx0fTtcblx0SW5zdGEuY29udmVydCA9ICh3aWtpKSA9PiB7XG5cdFx0Y29uc3QgbGwgPSB0eXBlb2Ygd2lraSA9PT0gJ3N0cmluZycgPyB3aWtpLnJlcGxhY2UoL1xcci9nLCAnJykuc3BsaXQoL1xcbi8pIDogd2lraTsgLy8gbGluZXMgb2Ygd2lraWNvZGVcblx0XHRsZXQgbyA9ICcnOyAvLyByZXN1bHQgb2YgcGFzc2luZyBhIHJlZ2V4cCB0byBjb21wYXJlTGluZVN0cmluZ09yUmVnKClcblx0XHRsZXQgcCA9IDA7XG5cdFx0bGV0IHI7XG5cdFx0Ly8gc29tZSBzaG9ydGhhbmRzXG5cdFx0Y29uc3QgcmVtYWluID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGxsLmxlbmd0aDtcblx0XHR9O1xuXHRcdGNvbnN0IHNoID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGxsLnNoaWZ0KCk7XG5cdFx0fTsgLy8gc2hpZnRcblx0XHRjb25zdCBwcyA9IChzKSA9PiB7XG5cdFx0XHRvICs9IHM7XG5cdFx0fTsgLy8gcHVzaFxuXG5cdFx0Ly8gc2ltaWxhciB0byBDJ3MgcHJpbnRmLCB1c2VzID8gYXMgcGxhY2Vob2xkZXJzLCA/PyB0byBlc2NhcGUgcXVlc3Rpb24gbWFya3Ncblx0XHRjb25zdCBmID0gZnVuY3Rpb24gZiguLi5hcmdzKSB7XG5cdFx0XHRsZXQgaSA9IDE7XG5cdFx0XHRjb25zdCBhID0gYXJncztcblx0XHRcdGxldCBbZl0gPSBhO1xuXHRcdFx0bGV0IG8gPSAnJztcblx0XHRcdGxldCBjO1xuXHRcdFx0bGV0IHA7XG5cdFx0XHRmb3IgKDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKChwID0gZi5pbmRleE9mKCc/JykpICsgMSkge1xuXHRcdFx0XHRcdC8vIGFsbG93IGNoYXJhY3RlciBlc2NhcGluZ1xuXHRcdFx0XHRcdGMgPSBmLmNoYXJBdChwICsgMSkgPT09ICc/JyA/IDEgOiAwO1xuXHRcdFx0XHRcdGkgLT0gYztcblx0XHRcdFx0XHRvICs9IGYuc2xpY2UoMCwgTWF0aC5tYXgoMCwgcCkpICsgKGMgPyAnPycgOiBhW2ldKTtcblx0XHRcdFx0XHRmID0gZi5zbGljZShwICsgMSArIGMpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbyArIGY7XG5cdFx0fTtcblx0XHRjb25zdCBodG1sX2VudGl0aWVzID0gKHMpID0+IHtcblx0XHRcdHJldHVybiBzLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcblx0XHR9O1xuXHRcdC8vIFdpa2kgdGV4dCBwYXJzaW5nIHRvIGh0bWwgaXMgYSBuaWdodG1hcmUuXG5cdFx0Ly8gVGhlIGJlbG93IGZ1bmN0aW9ucyBkZWxpYmVyYXRlbHkgZG9uJ3QgZXNjYXBlIHRoZSBhbXBlcnNhbmQgc2luY2UgdGhpcyB3b3VsZCBtYWtlIGl0IG1vcmVcblx0XHQvLyBkaWZmaWN1bHQsIGFuZCB3ZSBkb24ndCBhYnNvbHV0ZWx5IG5lZWQgdG8gZm9yIGhvdyB3ZSBuZWVkIGl0LiBUaGlzIG1lYW5zIHRoYXQgYW55XG5cdFx0Ly8gdW5lc2NhcGVkIGFtcGVyc2FuZHMgaW4gd2lraXRleHQgd2lsbCByZW1haW4gdW5lc2NhcGVkIGFuZCBjYW4gY2F1c2UgaW52YWxpZCBIVE1MLlxuXHRcdC8vIEJyb3dzZXJzIHNob3VsZCBhbGwgYmUgYWJsZSB0byBoYW5kbGUgaXQgdGhvdWdoLiBXZSBhbHNvIGVzY2FwZSBzaWduaWZpY2FudCB3aWtpbWFya3VwXG5cdFx0Ly8gY2hhcmFjdGVycyB0byBwcmV2ZW50IGZ1cnRoZXIgbWF0Y2hpbmcgb24gdGhlIHByb2Nlc3NlZCB0ZXh0LlxuXHRcdGNvbnN0IGh0bWxlc2NhcGVfdGV4dCA9IChzKSA9PiB7XG5cdFx0XHRyZXR1cm4gc1xuXHRcdFx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0XHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHRcdFx0LnJlcGxhY2UoLzovZywgJyYjNTg7Jylcblx0XHRcdFx0LnJlcGxhY2UoL1xcWy9nLCAnJiM5MTsnKVxuXHRcdFx0XHQucmVwbGFjZSgvXS9nLCAnJiM5MzsnKTtcblx0XHR9O1xuXHRcdGNvbnN0IGh0bWxlc2NhcGVfYXR0ciA9IChzKSA9PiB7XG5cdFx0XHRyZXR1cm4gaHRtbGVzY2FwZV90ZXh0KHMpLnJlcGxhY2UoLycvZywgJyYjMzk7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXHRcdH07XG5cdFx0Ly8gcmV0dXJuIHRoZSBmaXJzdCBub24gbWF0Y2hpbmcgY2hhcmFjdGVyIHBvc2l0aW9uIGJldHdlZW4gdHdvIHN0cmluZ3Ncblx0XHRjb25zdCBzdHJfaW1hdGNoID0gKGEsIGIpID0+IHtcblx0XHRcdGxldCBpO1xuXHRcdFx0bGV0IGw7XG5cdFx0XHRmb3IgKGkgPSAwLCBsID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRpZiAoYS5jaGFyQXQoaSkgIT09IGIuY2hhckF0KGkpKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBpO1xuXHRcdH07XG5cdFx0Ly8gY29tcGFyZSBjdXJyZW50IGxpbmUgYWdhaW5zdCBhIHN0cmluZyBvciByZWdleHBcblx0XHQvLyBpZiBwYXNzZWQgYSBzdHJpbmcgaXQgd2lsbCBjb21wYXJlIG9ubHkgdGhlIGZpcnN0IHN0cmluZy5sZW5ndGggY2hhcmFjdGVyc1xuXHRcdC8vIGlmIHBhc3NlZCBhIHJlZ2V4cCB0aGUgcmVzdWx0IGlzIHN0b3JlZCBpbiByXG5cdFx0Y29uc3QgY29tcGFyZUxpbmVTdHJpbmdPclJlZyA9IChjKSA9PiB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIGMgPT09ICdzdHJpbmcnID8gbGxbMF0gJiYgbGxbMF0uc2xpY2UoMCwgYy5sZW5ndGgpID09PSBjIDogKHIgPSBsbFswXSAmJiBsbFswXS5tYXRjaChjKSk7XG5cdFx0fTtcblx0XHRjb25zdCBjb21wYXJlTGluZVN0cmluZyA9IChjKSA9PiB7XG5cdFx0XHRyZXR1cm4gbGxbMF0gPT09IGM7XG5cdFx0fTsgLy8gY29tcGFyZSBjdXJyZW50IGxpbmUgYWdhaW5zdCBhIHN0cmluZ1xuXHRcdGNvbnN0IGNoYXJBdFBvaW50ID0gKHApID0+IHtcblx0XHRcdHJldHVybiBsbFswXS5jaGFyQXQocCk7XG5cdFx0fTsgLy8gcmV0dXJuIGNoYXIgYXQgcG9zIHBcblx0XHRjb25zdCBlbmRsID0gKHMpID0+IHtcblx0XHRcdHBzKHMpO1xuXHRcdFx0c2goKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX2xpc3QgPSAoKSA9PiB7XG5cdFx0XHRsZXQgcHJldiA9ICcnO1xuXHRcdFx0d2hpbGUgKHJlbWFpbigpICYmIGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoL14oWyMqOjtdKykoLiopJC8pKSB7XG5cdFx0XHRcdGNvbnN0IGxfbWF0Y2ggPSByO1xuXHRcdFx0XHRzaCgpO1xuXHRcdFx0XHRjb25zdCBpcG9zID0gc3RyX2ltYXRjaChwcmV2LCBsX21hdGNoWzFdKTtcblx0XHRcdFx0Ly8gY2xvc2UgdW5jb250aW51ZWQgbGlzdHNcblx0XHRcdFx0Zm9yIChsZXQgcHJldlBvcyA9IHByZXYubGVuZ3RoIC0gMTsgcHJldlBvcyA+PSBpcG9zOyBwcmV2UG9zLS0pIHtcblx0XHRcdFx0XHRjb25zdCBwaSA9IHByZXYuY2hhckF0KHByZXZQb3MpO1xuXHRcdFx0XHRcdGlmIChwaSA9PT0gJyonKSB7XG5cdFx0XHRcdFx0XHRwcygnPC91bD4nKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBpID09PSAnIycpIHtcblx0XHRcdFx0XHRcdHBzKCc8L29sPicpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoWycnLCAnKicsICcjJ10uaW5kZXhPZihsX21hdGNoWzFdLmNoYXJBdChwcmV2UG9zKSkpIHtcblx0XHRcdFx0XHRcdC8vIGNsb3NlIGEgZGwgb25seSBpZiB0aGUgbmV3IGl0ZW0gaXMgbm90IGEgZGwgaXRlbSAoOiwgOyBvciBlbXB0eSlcblx0XHRcdFx0XHRcdHBzKCc8L2RsPicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBvcGVuIG5ldyBsaXN0c1xuXHRcdFx0XHRmb3IgKGxldCBtYXRjaFBvcyA9IGlwb3M7IG1hdGNoUG9zIDwgbF9tYXRjaFsxXS5sZW5ndGg7IG1hdGNoUG9zKyspIHtcblx0XHRcdFx0XHRjb25zdCBsaSA9IGxfbWF0Y2hbMV0uY2hhckF0KG1hdGNoUG9zKTtcblx0XHRcdFx0XHRpZiAobGkgPT09ICcqJykge1xuXHRcdFx0XHRcdFx0cHMoJzx1bD4nKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGxpID09PSAnIycpIHtcblx0XHRcdFx0XHRcdHBzKCc8b2w+Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChbJycsICcqJywgJyMnXS5pbmRleE9mKHByZXYuY2hhckF0KG1hdGNoUG9zKSkpIHtcblx0XHRcdFx0XHRcdC8vIG9wZW4gYSBuZXcgZGwgb25seSBpZiB0aGUgcHJldiBpdGVtIGlzIG5vdCBhIGRsIGl0ZW0gKDosIDsgb3IgZW1wdHkpXG5cdFx0XHRcdFx0XHRwcygnPGRsPicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRzd2l0Y2ggKGxfbWF0Y2hbMV0uYXQoLTEpKSB7XG5cdFx0XHRcdFx0Y2FzZSAnKic6XG5cdFx0XHRcdFx0Y2FzZSAnIyc6XG5cdFx0XHRcdFx0XHRwcyhgPGxpPiR7cGFyc2VfaW5saW5lX25vd2lraShsX21hdGNoWzJdKX1gKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJzsnOiB7XG5cdFx0XHRcdFx0XHRwcygnPGR0PicpO1xuXHRcdFx0XHRcdFx0Y29uc3QgZHRfbWF0Y2ggPSBsX21hdGNoWzJdLm1hdGNoKC8oLio/KSg6Lio/KSQvKTtcblx0XHRcdFx0XHRcdC8vIGhhbmRsZSA7ZHQgOmRkIGZvcm1hdFxuXHRcdFx0XHRcdFx0aWYgKGR0X21hdGNoKSB7XG5cdFx0XHRcdFx0XHRcdHBzKHBhcnNlX2lubGluZV9ub3dpa2koZHRfbWF0Y2hbMV0pKTtcblx0XHRcdFx0XHRcdFx0bGwudW5zaGlmdChkdF9tYXRjaFsyXSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRwcyhwYXJzZV9pbmxpbmVfbm93aWtpKGxfbWF0Y2hbMl0pKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlICc6Jzpcblx0XHRcdFx0XHRcdHBzKGA8ZGQ+JHtwYXJzZV9pbmxpbmVfbm93aWtpKGxfbWF0Y2hbMl0pfWApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFssIHByZXZdID0gbF9tYXRjaDtcblx0XHRcdH1cblx0XHRcdC8vIGNsb3NlIHJlbWFpbmluZyBsaXN0c1xuXHRcdFx0Zm9yIChsZXQgaSA9IHByZXYubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0cHMoZignPC8/PicsIHByZXYuY2hhckF0KGkpID09PSAnKicgPyAndWwnIDogcHJldi5jaGFyQXQoaSkgPT09ICcjJyA/ICdvbCcgOiAnZGwnKSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV90YWJsZSA9ICgpID0+IHtcblx0XHRcdGVuZGwoZignPHRhYmxlPicsIGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoL157XFx8KCAuKikkLykgPyByWzFdIDogJycpKTtcblx0XHRcdGZvciAoOyByZW1haW4oKTsgKSB7XG5cdFx0XHRcdGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKCd8JykpIHtcblx0XHRcdFx0XHRzd2l0Y2ggKGNoYXJBdFBvaW50KDEpKSB7XG5cdFx0XHRcdFx0XHRjYXNlICd9Jzpcblx0XHRcdFx0XHRcdFx0ZW5kbCgnPC90YWJsZT4nKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0Y2FzZSAnLSc6XG5cdFx0XHRcdFx0XHRcdGVuZGwoZignPHRyPicsIGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoL1xcfC0qKC4qKS8pWzFdKSk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0cGFyc2VfdGFibGVfZGF0YSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKCchJykpIHtcblx0XHRcdFx0XHRwYXJzZV90YWJsZV9kYXRhKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2goKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfdGFibGVfZGF0YSA9ICgpID0+IHtcblx0XHRcdGxldCB0ZF9saW5lO1xuXHRcdFx0bGV0IG1hdGNoX2k7XG5cdFx0XHQvLyAxOiBcInwrXCIsICd8JyBvciAnKydcblx0XHRcdC8vIDI6ID8/XG5cdFx0XHQvLyAzOiBhdHRyaWJ1dGVzID8/XG5cdFx0XHQvLyBUT0RPOiBmaW5pc2ggY29tbWVudGluZyB0aGlzIHJlZ2V4cFxuXHRcdFx0Y29uc3QgdGRfbWF0Y2ggPSBzaCgpLm1hdGNoKC9eKFxcfFxcK3xcXHx8ISkoKD86KFteW3xdKj8pXFx8KD8hXFx8KSk/KC4qKSkkLyk7XG5cdFx0XHRpZiAodGRfbWF0Y2hbMV0gPT09ICd8KycpIHtcblx0XHRcdFx0cHMoJzxjYXB0aW9uJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwcyhgPHQke3RkX21hdGNoWzFdID09PSAnfCcgPyAnZCcgOiAnaCd9YCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGRfbWF0Y2hbM10pIHtcblx0XHRcdFx0Ly8gcHMoJyAnICsgdGRfbWF0Y2hbM10pXG5cdFx0XHRcdG1hdGNoX2kgPSA0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWF0Y2hfaSA9IDI7XG5cdFx0XHR9XG5cdFx0XHRwcygnPicpO1xuXHRcdFx0aWYgKHRkX21hdGNoWzFdID09PSAnfCsnKSB7XG5cdFx0XHRcdHBzKHBhcnNlX2lubGluZV9ub3dpa2kodGRfbWF0Y2hbbWF0Y2hfaV0pKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHVzZSB8fCBvciAhISBhcyBhIGNlbGwgc2VwYXJhdG9yIGRlcGVuZGluZyBvbiBjb250ZXh0XG5cdFx0XHRcdC8vIE5PVEU6IHdoZW4gc3BsaXQoKSBpcyBwYXNzZWQgYSByZWdleHAgbWFrZSBzdXJlIHRvIHVzZSBub24tY2FwdHVyaW5nIGJyYWNrZXRzXG5cdFx0XHRcdHRkX2xpbmUgPSB0ZF9tYXRjaFttYXRjaF9pXS5zcGxpdCh0ZF9tYXRjaFsxXSA9PT0gJ3wnID8gJ3x8JyA6IC9cXHxcXHx8ISEvKTtcblx0XHRcdFx0cHMocGFyc2VfaW5saW5lX25vd2lraSh0ZF9saW5lLnNoaWZ0KCkpKTtcblx0XHRcdFx0d2hpbGUgKHRkX2xpbmUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGxsLnVuc2hpZnQodGRfbWF0Y2hbMV0gKyB0ZF9saW5lLnBvcCgpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGV0IHRjID0gMDtcblx0XHRcdGNvbnN0IHRkID0gW107XG5cdFx0XHR3aGlsZSAocmVtYWluKCkpIHtcblx0XHRcdFx0dGQucHVzaChzaCgpKTtcblx0XHRcdFx0aWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJ3wnKSkge1xuXHRcdFx0XHRcdGlmICghdGMpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY2hhckF0UG9pbnQoMSkgPT09ICd9Jykge1xuXHRcdFx0XHRcdFx0Ly8gd2UncmUgYXQgdGhlIG91dGVyLW1vc3QgbGV2ZWwgKG5vIG5lc3RlZCB0YWJsZXMpLCBza2lwIHRvIHRkIHBhcnNlXG5cdFx0XHRcdFx0XHR0Yy0tO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmICghdGMgJiYgY29tcGFyZUxpbmVTdHJpbmdPclJlZygnIScpKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygne3wnKSkge1xuXHRcdFx0XHRcdHRjKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0ZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHBzKEluc3RhLmNvbnZlcnQodGQpKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX3ByZSA9ICgpID0+IHtcblx0XHRcdHBzKCc8cHJlPicpO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRlbmRsKGAke3BhcnNlX2lubGluZV9ub3dpa2kobGxbMF0uc2xpY2UoMSkpfVxcbmApO1xuXHRcdFx0fSB3aGlsZSAocmVtYWluKCkgJiYgY29tcGFyZUxpbmVTdHJpbmdPclJlZygnICcpKTtcblx0XHRcdHBzKCc8L3ByZT4nKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX2Jsb2NrX2ltYWdlID0gKCkgPT4ge1xuXHRcdFx0cHMocGFyc2VfaW1hZ2Uoc2goKSkpO1xuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfaW1hZ2UgPSAoc3RyKSA9PiB7XG5cdFx0XHQvLyBnZXQgd2hhdCdzIGluIGJldHdlZW4gXCJbW0ltYWdlOlwiIGFuZCBcIl1dXCJcblx0XHRcdGxldCB0YWcgPSBzdHIuc3Vic3RyaW5nKHN0ci5pbmRleE9mKCc6JykgKyAxLCBzdHIubGVuZ3RoIC0gMik7XG5cdFx0XHRsZXQgd2lkdGg7XG5cdFx0XHRsZXQgYXR0ciA9IFtdO1xuXHRcdFx0bGV0IGZpbGVuYW1lO1xuXHRcdFx0bGV0IGNhcHRpb24gPSAnJztcblx0XHRcdGxldCB0aHVtYiA9IDA7XG5cdFx0XHRsZXQgZnJhbWUgPSAwO1xuXHRcdFx0bGV0IGNlbnRlciA9IDA7XG5cdFx0XHRsZXQgYWxpZ24gPSAnJztcblx0XHRcdGlmICgvXFx8Ly50ZXN0KHRhZykpIHtcblx0XHRcdFx0Ly8gbWFuYWdlIG5lc3RlZCBsaW5rc1xuXHRcdFx0XHRsZXQgbmVzdGluZyA9IDA7XG5cdFx0XHRcdGxldCBsYXN0X2F0dHI7XG5cdFx0XHRcdGZvciAobGV0IGkgPSB0YWcubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuXHRcdFx0XHRcdGlmICh0YWcuY2hhckF0KGkpID09PSAnfCcgJiYgIW5lc3RpbmcpIHtcblx0XHRcdFx0XHRcdGxhc3RfYXR0ciA9IHRhZy5zbGljZShpICsgMSk7XG5cdFx0XHRcdFx0XHR0YWcgPSB0YWcuc2xpY2UoMCwgTWF0aC5tYXgoMCwgaSkpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN3aXRjaCAodGFnLnNsaWNlKGkgLSAxLCBpIC0gMSArIDIpKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ11dJzpcblx0XHRcdFx0XHRcdFx0XHRuZXN0aW5nKys7XG5cdFx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdbWyc6XG5cdFx0XHRcdFx0XHRcdFx0bmVzdGluZy0tO1xuXHRcdFx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YXR0ciA9IHRhZy5zcGxpdCgvXFxzKlxcfFxccyovKTtcblx0XHRcdFx0YXR0ci5wdXNoKGxhc3RfYXR0cik7XG5cdFx0XHRcdGZpbGVuYW1lID0gYXR0ci5zaGlmdCgpO1xuXHRcdFx0XHRsZXQgd19tYXRjaDtcblx0XHRcdFx0Zm9yICg7IGF0dHIubGVuZ3RoID4gMDsgYXR0ci5zaGlmdCgpKSB7XG5cdFx0XHRcdFx0d19tYXRjaCA9IGF0dHJbMF0ubWF0Y2goL14oXFxkKikoPzpbcHhdKlxcZCopP3B4JC8pO1xuXHRcdFx0XHRcdGlmICh3X21hdGNoKSB7XG5cdFx0XHRcdFx0XHRbLCB3aWR0aF0gPSB3X21hdGNoO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKGF0dHJbMF0pIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAndGh1bWInOlxuXHRcdFx0XHRcdFx0XHRjYXNlICd0aHVtYm5haWwnOlxuXHRcdFx0XHRcdFx0XHRcdHRodW1iID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRmcmFtZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2ZyYW1lJzpcblx0XHRcdFx0XHRcdFx0XHRmcmFtZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ25vbmUnOlxuXHRcdFx0XHRcdFx0XHRjYXNlICdyaWdodCc6XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2xlZnQnOlxuXHRcdFx0XHRcdFx0XHRcdGNlbnRlciA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFthbGlnbl0gPSBhdHRyO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdjZW50ZXInOlxuXHRcdFx0XHRcdFx0XHRcdGNlbnRlciA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0YWxpZ24gPSAnbm9uZSc7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGF0dHIubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRbY2FwdGlvbl0gPSBhdHRyO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZpbGVuYW1lID0gdGFnO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfaW5saW5lX25vd2lraSA9IChzdHIpID0+IHtcblx0XHRcdGxldCBzdGFydDtcblx0XHRcdGxldCBsYXN0ZW5kID0gMDtcblx0XHRcdGxldCBzdWJzdGFydCA9IDA7XG5cdFx0XHRsZXQgbmVzdGxldiA9IDA7XG5cdFx0XHRsZXQgb3Blbjtcblx0XHRcdGxldCBjbG9zZTtcblx0XHRcdGxldCBzdWJsb29wO1xuXHRcdFx0bGV0IGh0bWwgPSAnJztcblx0XHRcdHdoaWxlICgoc3RhcnQgPSBzdHIuaW5kZXhPZignPG5vJy5jb25jYXQoJ3dpa2knLCAnPicpLCBzdWJzdGFydCkpICE9PSAtMSkge1xuXHRcdFx0XHRodG1sICs9IHBhcnNlX2lubGluZV93aWtpKHN0ci5zdWJzdHJpbmcobGFzdGVuZCwgc3RhcnQpKTtcblx0XHRcdFx0c3RhcnQgKz0gODtcblx0XHRcdFx0c3Vic3RhcnQgPSBzdGFydDtcblx0XHRcdFx0c3VibG9vcCA9IHRydWU7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRvcGVuID0gc3RyLmluZGV4T2YoJzxubycuY29uY2F0KCd3aWtpJywgJz4nKSwgc3Vic3RhcnQpO1xuXHRcdFx0XHRcdGNsb3NlID0gc3RyLmluZGV4T2YoJzwvbm8nLmNvbmNhdCgnd2lraScsICc+JyksIHN1YnN0YXJ0KTtcblx0XHRcdFx0XHRpZiAoY2xvc2UgPD0gb3BlbiB8fCBvcGVuID09PSAtMSkge1xuXHRcdFx0XHRcdFx0aWYgKGNsb3NlID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaHRtbCArIGh0bWxfZW50aXRpZXMoc3RyLnNsaWNlKHN0YXJ0KSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzdWJzdGFydCA9IGNsb3NlICsgOTtcblx0XHRcdFx0XHRcdGlmIChuZXN0bGV2KSB7XG5cdFx0XHRcdFx0XHRcdG5lc3RsZXYtLTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGxhc3RlbmQgPSBzdWJzdGFydDtcblx0XHRcdFx0XHRcdFx0aHRtbCArPSBodG1sX2VudGl0aWVzKHN0ci5zdWJzdHJpbmcoc3RhcnQsIGxhc3RlbmQgLSA5KSk7XG5cdFx0XHRcdFx0XHRcdHN1Ymxvb3AgPSBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3Vic3RhcnQgPSBvcGVuICsgODtcblx0XHRcdFx0XHRcdG5lc3RsZXYrKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gd2hpbGUgKHN1Ymxvb3ApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGh0bWwgKyBwYXJzZV9pbmxpbmVfd2lraShzdHIuc2xpY2UobGFzdGVuZCkpO1xuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfaW5saW5lX2ltYWdlcyA9IChzdHIpID0+IHtcblx0XHRcdGxldCBzdGFydDtcblx0XHRcdGxldCBzdWJzdGFydCA9IDA7XG5cdFx0XHRsZXQgbmVzdGxldiA9IDA7XG5cdFx0XHRsZXQgbG9vcDtcblx0XHRcdGxldCBjbG9zZTtcblx0XHRcdGxldCBvcGVuO1xuXHRcdFx0bGV0IHdpa2k7XG5cdFx0XHRsZXQgaHRtbDtcblx0XHRcdHdoaWxlICgoc3RhcnQgPSBzdHIuaW5kZXhPZignW1snLCBzdWJzdGFydCkpICE9PSAtMSkge1xuXHRcdFx0XHRpZiAobmV3IFJlZ0V4cChgXihJbWFnZXxGaWxlfCR7SW5zdGEuY29uZi5sb2NhbGUuaW1hZ2V9KTpgLCAnaScpLnRlc3Qoc3RyLnNsaWNlKHN0YXJ0ICsgMikpKSB7XG5cdFx0XHRcdFx0bG9vcCA9IHRydWU7XG5cdFx0XHRcdFx0c3Vic3RhcnQgPSBzdGFydDtcblx0XHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0XHRzdWJzdGFydCArPSAyO1xuXHRcdFx0XHRcdFx0Y2xvc2UgPSBzdHIuaW5kZXhPZignXV0nLCBzdWJzdGFydCk7XG5cdFx0XHRcdFx0XHRvcGVuID0gc3RyLmluZGV4T2YoJ1tbJywgc3Vic3RhcnQpO1xuXHRcdFx0XHRcdFx0aWYgKGNsb3NlIDw9IG9wZW4gfHwgb3BlbiA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGNsb3NlID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBzdHI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0c3Vic3RhcnQgPSBjbG9zZTtcblx0XHRcdFx0XHRcdFx0aWYgKG5lc3RsZXYpIHtcblx0XHRcdFx0XHRcdFx0XHRuZXN0bGV2LS07XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0d2lraSA9IHN0ci5zdWJzdHJpbmcoc3RhcnQsIGNsb3NlICsgMik7XG5cdFx0XHRcdFx0XHRcdFx0aHRtbCA9IHBhcnNlX2ltYWdlKHdpa2kpO1xuXHRcdFx0XHRcdFx0XHRcdHN0ciA9IHN0ci5yZXBsYWNlKHdpa2ksIGh0bWwpO1xuXHRcdFx0XHRcdFx0XHRcdHN1YnN0YXJ0ID0gc3RhcnQgKyBodG1sLmxlbmd0aDtcblx0XHRcdFx0XHRcdFx0XHRsb29wID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHN1YnN0YXJ0ID0gb3Blbjtcblx0XHRcdFx0XHRcdFx0bmVzdGxldisrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gd2hpbGUgKGxvb3ApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyO1xuXHRcdH07XG5cdFx0Ly8gdGhlIG91dHB1dCBvZiB0aGlzIGZ1bmN0aW9uIGRvZXNuJ3QgcmVzcGVjdCB0aGUgRklMTyBzdHJ1Y3R1cmUgb2YgSFRNTFxuXHRcdC8vIGJ1dCBzaW5jZSBtb3N0IGJyb3dzZXJzIGNhbiBoYW5kbGUgaXQgSSdsbCBzYXZlIG15c2VsZiB0aGUgaGFzc2xlXG5cdFx0Y29uc3QgcGFyc2VfaW5saW5lX2Zvcm1hdHRpbmcgPSAoc3RyKSA9PiB7XG5cdFx0XHRsZXQgZW07XG5cdFx0XHRsZXQgc3Q7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGxldCBsaTtcblx0XHRcdGxldCBvID0gJyc7XG5cdFx0XHR3aGlsZSAoKGkgPSBzdHIuaW5kZXhPZihcIicnXCIsIGxpKSkgKyAxKSB7XG5cdFx0XHRcdG8gKz0gc3RyLnN1YnN0cmluZyhsaSwgaSk7XG5cdFx0XHRcdGxpID0gaSArIDI7XG5cdFx0XHRcdGlmIChzdHIuY2hhckF0KGkgKyAyKSA9PT0gXCInXCIpIHtcblx0XHRcdFx0XHRsaSsrO1xuXHRcdFx0XHRcdHN0ID0gIXN0O1xuXHRcdFx0XHRcdG8gKz0gc3QgPyAnPHN0cm9uZz4nIDogJzwvc3Ryb25nPic7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZW0gPSAhZW07XG5cdFx0XHRcdFx0byArPSBlbSA/ICc8ZW0+JyA6ICc8L2VtPic7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBvICsgc3RyLnNsaWNlKGxpKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX2lubGluZV93aWtpID0gKHN0cikgPT4ge1xuXHRcdFx0c3RyID0gcGFyc2VfaW5saW5lX2ltYWdlcyhzdHIpO1xuXHRcdFx0c3RyID0gcGFyc2VfaW5saW5lX2Zvcm1hdHRpbmcoc3RyKTtcblx0XHRcdC8vIG1hdGhcblx0XHRcdHN0ciA9IHN0ci5yZXBsYWNlKC88bWF0aD4oLio/KTxcXC9tYXRoPi9naSwgJycpO1xuXHRcdFx0Ly8gQnVpbGQgYSBNZWRpYXdpa2ktZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG5cdFx0XHRsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRsZXQgbWludXRlcyA9IGRhdGUuZ2V0VVRDTWludXRlcygpO1xuXHRcdFx0aWYgKG1pbnV0ZXMgPCAxMCkge1xuXHRcdFx0XHRtaW51dGVzID0gYDAke21pbnV0ZXN9YDtcblx0XHRcdH1cblx0XHRcdGRhdGUgPSBmKFxuXHRcdFx0XHQnPzo/LCA/ID8gPyAoVVRDKScsXG5cdFx0XHRcdGRhdGUuZ2V0VVRDSG91cnMoKSxcblx0XHRcdFx0bWludXRlcyxcblx0XHRcdFx0ZGF0ZS5nZXRVVENEYXRlKCksXG5cdFx0XHRcdEluc3RhLmNvbmYubG9jYWxlLm1vbnRoc1tkYXRlLmdldFVUQ01vbnRoKCldLFxuXHRcdFx0XHRkYXRlLmdldFVUQ0Z1bGxZZWFyKClcblx0XHRcdCk7XG5cdFx0XHQvLyB0ZXh0IGZvcm1hdHRpbmdcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHN0clxuXHRcdFx0XHRcdC8vIHNpZ25hdHVyZXNcblx0XHRcdFx0XHQucmVwbGFjZSgvfns1fSg/IX4pL2csIGRhdGUpXG5cdFx0XHRcdFx0LnJlcGxhY2UoL357NH0oPyF+KS9nLCBgJHtJbnN0YS5jb25mLnVzZXIubmFtZX0gJHtkYXRlfWApXG5cdFx0XHRcdFx0LnJlcGxhY2UoL357M30oPyF+KS9nLCBJbnN0YS5jb25mLnVzZXIubmFtZSlcblx0XHRcdFx0XHQvLyBbWzpDYXRlZ29yeTouLi5dXSwgW1s6SW1hZ2U6Li4uXV0sIGV0Yy4uLlxuXHRcdFx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0bmV3IFJlZ0V4cChcblx0XHRcdFx0XHRcdFx0YFxcXFxbXFxcXFs6KCg/OiR7SW5zdGEuY29uZi5sb2NhbGUuY2F0ZWdvcnl9fEltYWdlfEZpbGV8JHtJbnN0YS5jb25mLmxvY2FsZS5pbWFnZX18JHtJbnN0YS5jb25mLndpa2kuaW50ZXJ3aWtpfSk6W158XSo/KVxcXFxdXFxcXF0oXFxcXHcqKWAsXG5cdFx0XHRcdFx0XHRcdCdnaSdcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHQoXyQwLCAkMSwgJDIpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFx0XCI8YSBocmVmPSc/Jz4/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRcdEluc3RhLmNvbmYucGF0aHMuYXJ0aWNsZXMgKyBodG1sZXNjYXBlX2F0dHIoJDEpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMSkgKyBodG1sZXNjYXBlX3RleHQoJDIpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC8vIHJlbW92ZSBzdHJhaWdodCBjYXRlZ29yeSBhbmQgaW50ZXJ3aWtpIHRhZ3Ncblx0XHRcdFx0XHQucmVwbGFjZShcblx0XHRcdFx0XHRcdG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRcdGBcXFxcW1xcXFxbKD86JHtJbnN0YS5jb25mLmxvY2FsZS5jYXRlZ29yeX18JHtJbnN0YS5jb25mLndpa2kuaW50ZXJ3aWtpfSk6Lio/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdFx0XHRcdCdnaSdcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHQnJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQvLyBbWzpDYXRlZ29yeTouLi58TGlua3NdXSwgW1s6SW1hZ2U6Li4ufExpbmtzXV0sIGV0Yy4uLlxuXHRcdFx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0bmV3IFJlZ0V4cChcblx0XHRcdFx0XHRcdFx0YFxcXFxbXFxcXFs6KCg/OiR7SW5zdGEuY29uZi5sb2NhbGUuY2F0ZWdvcnl9fEltYWdlfEZpbGV8JHtJbnN0YS5jb25mLmxvY2FsZS5pbWFnZX18JHtJbnN0YS5jb25mLndpa2kuaW50ZXJ3aWtpfSk6Lio/KVxcXFx8KFteXFxcXF1dKz8pXFxcXF1cXFxcXShcXFxcdyopYCxcblx0XHRcdFx0XHRcdFx0J2dpJ1xuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdChfJDAsICQxLCAkMiwgJDMpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFx0XCI8YSBocmVmPSc/Jz4/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRcdEluc3RhLmNvbmYucGF0aHMuYXJ0aWNsZXMgKyBodG1sZXNjYXBlX2F0dHIoJDEpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMikgKyBodG1sZXNjYXBlX3RleHQoJDMpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC8vIFtbL1JlbGF0aXZlIGxpbmtzXV1cblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbKFxcL1tefF0qPyldXS9nLCAoXyQwLCAkMSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXCI8YSBocmVmPSc/Jz4/PC9hPlwiLCBJbnN0YS5jb25mLmJhc2VVcmwgKyBodG1sZXNjYXBlX2F0dHIoJDEpLCBodG1sZXNjYXBlX3RleHQoJDEpKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIFtbL1JlcGxhY2VkfFJlbGF0aXZlIGxpbmtzXV1cblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbKFxcLy4qPylcXHwoLis/KV1dL2csIChfJDAsICQxLCAkMikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXCI8YSBocmVmPSc/Jz4/PC9hPlwiLCBJbnN0YS5jb25mLmJhc2VVcmwgKyBodG1sZXNjYXBlX2F0dHIoJDEpLCBodG1sZXNjYXBlX3RleHQoJDIpKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIFtbQ29tbW9uIGxpbmtzXV1cblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbKFteW3xdKj8pXV0oXFx3KikvZywgKF8kMCwgJDEsICQyKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XCI8YSBocmVmPSc/Jz4/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRJbnN0YS5jb25mLnBhdGhzLmFydGljbGVzICsgaHRtbGVzY2FwZV9hdHRyKCQxKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQxKSArIGh0bWxlc2NhcGVfdGV4dCgkMilcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyBbW1JlcGxhY2VkfExpbmtzXV1cblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbKFteW10qPylcXHwoW15cXF1dKz8pXV0oXFx3KikvZywgKF8kMCwgJDEsICQyLCAkMykgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFwiPGEgaHJlZj0nPyc+PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0SW5zdGEuY29uZi5wYXRocy5hcnRpY2xlcyArIGh0bWxlc2NhcGVfYXR0cigkMSksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMikgKyBodG1sZXNjYXBlX3RleHQoJDMpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Ly8gW1tTdHJpcHBlZDpOYW1lc3BhY2V8TmFtZXNwYWNlXV1cblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbKFteXFxdXSo/Oik/KC4qPykoICpcXCguKj9cXCkpP1xcfF1dL2csIChfJDAsICQxLCAkMiwgJDMpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcIjxhIGhyZWY9Jz8nPj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdEluc3RhLmNvbmYucGF0aHMuYXJ0aWNsZXMgKyBodG1sZXNjYXBlX2F0dHIoJDEpICsgaHRtbGVzY2FwZV9hdHRyKCQyKSArIGh0bWxlc2NhcGVfYXR0cigkMyksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMilcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyBFeHRlcm5hbCBsaW5rc1xuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFsoaHR0cHM/fG5ld3N8ZnRwfG1haWx0b3xnb3BoZXJ8aXJjKTooXFwvKikoW15cXF1dKj8pICguKj8pXS9nLCAoXyQwLCAkMSwgJDIsICQzLCAkNCkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFwiPGEgY2xhc3M9J2V4dGVybmFsJyBocmVmPSc/Oj8nPj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfYXR0cigkMSksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfYXR0cigkMikgKyBodG1sZXNjYXBlX2F0dHIoJDMpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcW2h0dHA6XFwvXFwvKC4qPyldL2csIChfJDAsICQxKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcIjxhIGNsYXNzPSdleHRlcm5hbCcgaHJlZj0naHR0cDovLz8nPlsjXTwvYT5cIiwgaHRtbGVzY2FwZV9hdHRyKCQxKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbKG5ld3N8ZnRwfG1haWx0b3xnb3BoZXJ8aXJjKTooXFwvKikoLio/KV0vZywgKF8kMCwgJDEsICQyLCAkMykgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFwiPGEgY2xhc3M9J2V4dGVybmFsJyBocmVmPSc/Oj8nPj86PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV9hdHRyKCQxKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV9hdHRyKCQyKSArIGh0bWxlc2NhcGVfYXR0cigkMyksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMSksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMikgKyBodG1sZXNjYXBlX3RleHQoJDMpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHQvKF58ICkoaHR0cHM/fG5ld3N8ZnRwfG1haWx0b3xnb3BoZXJ8aXJjKTooXFwvKikoW14gJF0qW14gISQsLjo7P10pL2csXG5cdFx0XHRcdFx0XHQoXyQwLCAkMSwgJDIsICQzLCAkNCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XHRcIj88YSBjbGFzcz0nZXh0ZXJuYWwnIGhyZWY9Jz86Pyc+Pzo/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMSksXG5cdFx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV9hdHRyKCQyKSxcblx0XHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX2F0dHIoJDMpICsgaHRtbGVzY2FwZV9hdHRyKCQ0KSxcblx0XHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDIpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMykgKyBodG1sZXNjYXBlX3RleHQoJDQpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5yZXBsYWNlKCdfX05PVE9DX18nLCAnJylcblx0XHRcdFx0XHQucmVwbGFjZSgnX19OT0lOREVYX18nLCAnJylcblx0XHRcdFx0XHQucmVwbGFjZSgnX19JTkRFWF9fJywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ19fTk9FRElUU0VDVElPTl9fJywgJycpXG5cdFx0XHQpO1xuXHRcdH07XG5cdFx0Ly8gYmVnaW4gcGFyc2luZ1xuXHRcdGZvciAoOyByZW1haW4oKTsgKSB7XG5cdFx0XHRpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygvXig9ezEsNn0pKC4qKVxcMSguKikkLykpIHtcblx0XHRcdFx0cCA9IDA7XG5cdFx0XHRcdGVuZGwoZignPGg/Pj88L2g/Pj8nLCByWzFdLmxlbmd0aCwgcGFyc2VfaW5saW5lX25vd2lraShyWzJdKSwgclsxXS5sZW5ndGgsIHJbM10pKTtcblx0XHRcdH0gZWxzZSBpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygvXlsjKjo7XS8pKSB7XG5cdFx0XHRcdHAgPSAwO1xuXHRcdFx0XHRwYXJzZV9saXN0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJyAnKSkge1xuXHRcdFx0XHRwID0gMDtcblx0XHRcdFx0cGFyc2VfcHJlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJ3t8JykpIHtcblx0XHRcdFx0cCA9IDA7XG5cdFx0XHRcdHBhcnNlX3RhYmxlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoL14tLS0tKyQvKSkge1xuXHRcdFx0XHRwID0gMDtcblx0XHRcdFx0ZW5kbCgnPGhyPicpO1xuXHRcdFx0fSBlbHNlIGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKEluc3RhLkJMT0NLX0lNQUdFKSkge1xuXHRcdFx0XHRwID0gMDtcblx0XHRcdFx0cGFyc2VfYmxvY2tfaW1hZ2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGhhbmRsZSBwYXJhZ3JhcGhzXG5cdFx0XHRcdGlmIChjb21wYXJlTGluZVN0cmluZygnJykpIHtcblx0XHRcdFx0XHRwID0gcmVtYWluKCkgPiAxICYmIGxsWzFdID09PSAnJztcblx0XHRcdFx0XHRpZiAocCkge1xuXHRcdFx0XHRcdFx0ZW5kbCgnPHA+PGJyPicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoIXApIHtcblx0XHRcdFx0XHRcdHBzKCc8cD4nKTtcblx0XHRcdFx0XHRcdHAgPSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwcyhgJHtwYXJzZV9pbmxpbmVfbm93aWtpKGxsWzBdKX0gYCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2goKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG87XG5cdH07XG5cdGNvbnN0IHdpa2kyaHRtbCA9ICh0eHQsIGJhc2V1cmwpID0+IHtcblx0XHRJbnN0YS5jb25mLmJhc2VVcmwgPSBiYXNldXJsO1xuXHRcdHJldHVybiBJbnN0YS5jb252ZXJ0KHR4dCk7XG5cdH07XG5cdC8vIEVOREZJTEU6IGxpdmVwcmV2aWV3LmpzXG5cdC8vIFNUQVJURklMRTogcGFnZWluZm8uanNcblx0Y29uc3QgcG9wdXBGaWx0ZXJQYWdlU2l6ZSA9IChkYXRhKSA9PiB7XG5cdFx0cmV0dXJuIGZvcm1hdEJ5dGVzKGRhdGEubGVuZ3RoKTtcblx0fTtcblx0Y29uc3QgcG9wdXBGaWx0ZXJDb3VudExpbmtzID0gKGRhdGEpID0+IHtcblx0XHRjb25zdCBudW0gPSBjb3VudExpbmtzKGRhdGEpO1xuXHRcdHJldHVybiBgJHtTdHJpbmcobnVtKX0mbmJzcDske251bSA9PT0gMSA/IHBvcHVwU3RyaW5nKCd3aWtpTGluaycpIDogcG9wdXBTdHJpbmcoJ3dpa2lMaW5rcycpfWA7XG5cdH07XG5cdGNvbnN0IHBvcHVwRmlsdGVyQ291bnRJbWFnZXMgPSAoZGF0YSkgPT4ge1xuXHRcdGNvbnN0IG51bSA9IGNvdW50SW1hZ2VzKGRhdGEpO1xuXHRcdHJldHVybiBgJHtTdHJpbmcobnVtKX0mbmJzcDske251bSA9PT0gMSA/IHBvcHVwU3RyaW5nKCdpbWFnZScpIDogcG9wdXBTdHJpbmcoJ2ltYWdlcycpfWA7XG5cdH07XG5cdGNvbnN0IHBvcHVwRmlsdGVyQ291bnRDYXRlZ29yaWVzID0gKGRhdGEpID0+IHtcblx0XHRjb25zdCBudW0gPSBjb3VudENhdGVnb3JpZXMoZGF0YSk7XG5cdFx0cmV0dXJuIGAke1N0cmluZyhudW0pfSZuYnNwOyR7bnVtID09PSAxID8gcG9wdXBTdHJpbmcoJ2NhdGVnb3J5JykgOiBwb3B1cFN0cmluZygnY2F0ZWdvcmllcycpfWA7XG5cdH07XG5cdGNvbnN0IHBvcHVwRmlsdGVyTGFzdE1vZGlmaWVkID0gKF9kYXRhLCBkb3dubG9hZCkgPT4ge1xuXHRcdGNvbnN0IGxhc3Rtb2QgPSBkb3dubG9hZC5sYXN0TW9kaWZpZWQ7XG5cdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBhZ2UgPSBub3cgLSBsYXN0bW9kO1xuXHRcdGlmIChsYXN0bW9kICYmIGdldFZhbHVlT2YoJ3BvcHVwTGFzdE1vZGlmaWVkJykpIHtcblx0XHRcdHJldHVybiB0cHJpbnRmKCclcyBvbGQnLCBbZm9ybWF0QWdlKGFnZSldKS5yZXBsYWNlKC8gL2csICcmbmJzcDsnKTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9O1xuXHRjb25zdCBmb3JtYXRBZ2UgPSAoYWdlKSA9PiB7XG5cdFx0Ly8gY29lcmNlIGludG8gYSBudW1iZXJcblx0XHRsZXQgYSA9IDAgKyBhZ2U7XG5cdFx0Y29uc3QgYWEgPSBhO1xuXHRcdGNvbnN0IHNlY2xlbiA9IDEwMDA7XG5cdFx0Y29uc3QgbWlubGVuID0gNjAgKiBzZWNsZW47XG5cdFx0Y29uc3QgaG91cmxlbiA9IDYwICogbWlubGVuO1xuXHRcdGNvbnN0IGRheWxlbiA9IDI0ICogaG91cmxlbjtcblx0XHRjb25zdCB3ZWVrbGVuID0gNyAqIGRheWxlbjtcblx0XHRjb25zdCBudW13ZWVrcyA9IChhIC0gKGEgJSB3ZWVrbGVuKSkgLyB3ZWVrbGVuO1xuXHRcdGEgLT0gbnVtd2Vla3MgKiB3ZWVrbGVuO1xuXHRcdGNvbnN0IHN3ZWVrcyA9IGFkZHVuaXQobnVtd2Vla3MsICd3ZWVrJyk7XG5cdFx0Y29uc3QgbnVtZGF5cyA9IChhIC0gKGEgJSBkYXlsZW4pKSAvIGRheWxlbjtcblx0XHRhIC09IG51bWRheXMgKiBkYXlsZW47XG5cdFx0Y29uc3Qgc2RheXMgPSBhZGR1bml0KG51bWRheXMsICdkYXknKTtcblx0XHRjb25zdCBudW1ob3VycyA9IChhIC0gKGEgJSBob3VybGVuKSkgLyBob3VybGVuO1xuXHRcdGEgLT0gbnVtaG91cnMgKiBob3VybGVuO1xuXHRcdGNvbnN0IHNob3VycyA9IGFkZHVuaXQobnVtaG91cnMsICdob3VyJyk7XG5cdFx0Y29uc3QgbnVtbWlucyA9IChhIC0gKGEgJSBtaW5sZW4pKSAvIG1pbmxlbjtcblx0XHRhIC09IG51bW1pbnMgKiBtaW5sZW47XG5cdFx0Y29uc3Qgc21pbnMgPSBhZGR1bml0KG51bW1pbnMsICdtaW51dGUnKTtcblx0XHRjb25zdCBudW1zZWNzID0gKGEgLSAoYSAlIHNlY2xlbikpIC8gc2VjbGVuO1xuXHRcdGEgLT0gbnVtc2VjcyAqIHNlY2xlbjtcblx0XHRjb25zdCBzc2VjcyA9IGFkZHVuaXQobnVtc2VjcywgJ3NlY29uZCcpO1xuXHRcdGlmIChhYSA+IDQgKiB3ZWVrbGVuKSB7XG5cdFx0XHRyZXR1cm4gc3dlZWtzO1xuXHRcdH1cblx0XHRpZiAoYWEgPiB3ZWVrbGVuKSB7XG5cdFx0XHRyZXR1cm4gYCR7c3dlZWtzfSAke3NkYXlzfWA7XG5cdFx0fVxuXHRcdGlmIChhYSA+IGRheWxlbikge1xuXHRcdFx0cmV0dXJuIGAke3NkYXlzfSAke3Nob3Vyc31gO1xuXHRcdH1cblx0XHRpZiAoYWEgPiA2ICogaG91cmxlbikge1xuXHRcdFx0cmV0dXJuIHNob3Vycztcblx0XHR9XG5cdFx0aWYgKGFhID4gaG91cmxlbikge1xuXHRcdFx0cmV0dXJuIGAke3Nob3Vyc30gJHtzbWluc31gO1xuXHRcdH1cblx0XHRpZiAoYWEgPiAxMCAqIG1pbmxlbikge1xuXHRcdFx0cmV0dXJuIHNtaW5zO1xuXHRcdH1cblx0XHRpZiAoYWEgPiBtaW5sZW4pIHtcblx0XHRcdHJldHVybiBgJHtzbWluc30gJHtzc2Vjc31gO1xuXHRcdH1cblx0XHRyZXR1cm4gc3NlY3M7XG5cdH07XG5cdGNvbnN0IGFkZHVuaXQgPSAobnVtLCBzdHIpID0+IHtcblx0XHRyZXR1cm4gYCR7bnVtfSAke251bSA9PT0gMSA/IHBvcHVwU3RyaW5nKHN0cikgOiBwb3B1cFN0cmluZyhgJHtzdHJ9c2ApfWA7XG5cdH07XG5cdGNvbnN0IHJ1blBvcHVwRmlsdGVycyA9IChsaXN0LCBkYXRhLCBkb3dubG9hZCkgPT4ge1xuXHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBsaXN0KSB7XG5cdFx0XHRpZiAoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCBzID0gZWxlbWVudChkYXRhLCBkb3dubG9hZCwgZG93bmxvYWQub3duZXIuYXJ0aWNsZSk7XG5cdFx0XHRcdGlmIChzKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2gocyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgZ2V0UGFnZUluZm8gPSAoZGF0YSwgZG93bmxvYWQpID0+IHtcblx0XHRpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBwb3B1cFN0cmluZygnRW1wdHkgcGFnZScpO1xuXHRcdH1cblx0XHRjb25zdCBwb3B1cEZpbHRlcnMgPSBnZXRWYWx1ZU9mKCdwb3B1cEZpbHRlcnMnKSB8fCBbXTtcblx0XHRjb25zdCBleHRyYVBvcHVwRmlsdGVycyA9IGdldFZhbHVlT2YoJ2V4dHJhUG9wdXBGaWx0ZXJzJykgfHwgW107XG5cdFx0Y29uc3QgcGFnZUluZm9BcnJheSA9IHJ1blBvcHVwRmlsdGVycyhbLi4ucG9wdXBGaWx0ZXJzLCAuLi5leHRyYVBvcHVwRmlsdGVyc10sIGRhdGEsIGRvd25sb2FkKTtcblx0XHRsZXQgcGFnZUluZm8gPSBwYWdlSW5mb0FycmF5LmpvaW4oJywgJyk7XG5cdFx0aWYgKHBhZ2VJbmZvICE9PSAnJykge1xuXHRcdFx0cGFnZUluZm8gPSB1cGNhc2VGaXJzdChwYWdlSW5mbyk7XG5cdFx0fVxuXHRcdHJldHVybiBwYWdlSW5mbztcblx0fTtcblx0Ly8gdGhpcyBjb3VsZCBiZSBpbXByb3ZlZCFcblx0Y29uc3QgY291bnRMaW5rcyA9ICh3aWtpVGV4dCkgPT4ge1xuXHRcdHJldHVybiB3aWtpVGV4dC5zcGxpdCgnW1snKS5sZW5ndGggLSAxO1xuXHR9O1xuXHQvLyBpZiBOID0gIyBtYXRjaGVzLCBuID0gIyBicmFja2V0cywgdGhlblxuXHQvLyBTdHJpbmcuc3BsaXQocmVnZXgpIGludGVyc3BlcnNlcyB0aGUgTisxIHNwbGl0IGVsZW1lbnRzXG5cdC8vIHdpdGggTm4gb3RoZXIgZWxlbWVudHMuIFNvIHRvdGFsIGxlbmd0aCBpc1xuXHQvLyBMPSBOKzEgKyBObiA9IE4obisxKSsxLiBTbyBOPShMLTEpLyhuKzEpLlxuXHRjb25zdCBjb3VudEltYWdlcyA9ICh3aWtpVGV4dCkgPT4ge1xuXHRcdHJldHVybiAod2lraVRleHQuc3BsaXQocGcucmUuaW1hZ2UpLmxlbmd0aCAtIDEpIC8gKHBnLnJlLmltYWdlQnJhY2tldENvdW50ICsgMSk7XG5cdH07XG5cdGNvbnN0IGNvdW50Q2F0ZWdvcmllcyA9ICh3aWtpVGV4dCkgPT4ge1xuXHRcdHJldHVybiAod2lraVRleHQuc3BsaXQocGcucmUuY2F0ZWdvcnkpLmxlbmd0aCAtIDEpIC8gKHBnLnJlLmNhdGVnb3J5QnJhY2tldENvdW50ICsgMSk7XG5cdH07XG5cdGNvbnN0IHBvcHVwRmlsdGVyU3R1YkRldGVjdCA9IChkYXRhLCBfZG93bmxvYWQsIGFydGljbGUpID0+IHtcblx0XHRjb25zdCBjb3VudHMgPSBzdHViQ291bnQoZGF0YSwgYXJ0aWNsZSk7XG5cdFx0aWYgKGNvdW50cy5yZWFsKSB7XG5cdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ3N0dWInKTtcblx0XHR9XG5cdFx0aWYgKGNvdW50cy5zZWN0KSB7XG5cdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ3NlY3Rpb24gc3R1YicpO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cdGNvbnN0IHBvcHVwRmlsdGVyRGlzYW1iaWdEZXRlY3QgPSAoZGF0YSwgX2Rvd25sb2FkLCBhcnRpY2xlKSA9PiB7XG5cdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cEFsbERhYnNTdHVicycpICYmIGFydGljbGUubmFtZXNwYWNlKCkpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0cmV0dXJuIGlzRGlzYW1iaWcoZGF0YSwgYXJ0aWNsZSkgPyBwb3B1cFN0cmluZygnZGlzYW1iaWcnKSA6ICcnO1xuXHR9O1xuXHRjb25zdCBmb3JtYXRCeXRlcyA9IChudW0pID0+IHtcblx0XHRyZXR1cm4gbnVtID4gOTQ5ID8gTWF0aC5yb3VuZChudW0gLyAxMDApIC8gMTAgKyBwb3B1cFN0cmluZygna0InKSA6IGAke251bX0mbmJzcDske3BvcHVwU3RyaW5nKCdieXRlcycpfWA7XG5cdH07XG5cdC8vIEVOREZJTEU6IHBhZ2VpbmZvLmpzXG5cdC8vIFNUQVJURklMRTogdGl0bGVzLmpzXG5cdC8qKlxuXHQgKiBAZmlsZW92ZXJ2aWV3IERlZmluZXMgdGhlIHtAc291cmNlIFRpdGxlfSBjbGFzcywgYW5kIGFzc29jaWF0ZWQgY3J1ZnR5IGZ1bmN0aW9ucy5cblx0ICpcblx0ICogPGNvZGU+VGl0bGU8L2NvZGU+IGRlYWxzIHdpdGggYXJ0aWNsZSB0aXRsZXMgYW5kIHRoZWlyIHZhcmlvdXNcblx0ICogZm9ybXMuICB7QHNvdXJjZSBTdHJpbmd3cmFwcGVyfSBpcyB0aGUgcGFyZW50IGNsYXNzIG9mXG5cdCAqIDxjb2RlPlRpdGxlPC9jb2RlPiwgd2hpY2ggZXhpc3RzIHNpbXBseSB0byBtYWtlIHRoaW5ncyBhIGxpdHRsZVxuXHQgKiBuZWF0ZXIuXG5cdCAqL1xuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBTdHJpbmd3cmFwcGVyLlxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICpcblx0ICogQGNsYXNzIHRoZSBTdHJpbmd3cmFwcGVyIGNsYXNzLiBUaGlzIGJhc2UgY2xhc3MgaXMgbm90IHJlYWxseVxuXHQgKiB1c2VmdWwgb24gaXRzIG93bjsgaXQganVzdCB3cmFwcyB2YXJpb3VzIGNvbW1vbiBzdHJpbmcgb3BlcmF0aW9ucy5cblx0ICovXG5cdGNvbnN0IFN0cmluZ3dyYXBwZXIgPSBmdW5jdGlvbiBTdHJpbmd3cmFwcGVyKCkge1xuXHRcdC8qKlxuXHRcdCAqIFdyYXBwZXIgZm9yIHRoaXMudG9TdHJpbmcoKS5pbmRleE9mKClcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB4XG5cdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdCAqL1xuXHRcdHRoaXMuaW5kZXhPZiA9IGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZygpLmluZGV4T2YoeCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHRoaXMudmFsdWUuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHQgKi9cblx0XHR0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBXcmFwcGVyIGZvciB7QHNvdXJjZSBTdHJpbmcjcGFyZW5TcGxpdH0gYXBwbGllZCB0byB0aGlzLnRvU3RyaW5nKClcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7UmVnRXhwfSB4XG5cdFx0ICogQHR5cGUgQXJyYXlcblx0XHQgKi9cblx0XHR0aGlzLnNwbGl0ID0gZnVuY3Rpb24gKHgpIHtcblx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCkuc3BsaXQoeCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBXcmFwcGVyIGZvciB0aGlzLnRvU3RyaW5nKCkuc3Vic3RyaW5nKClcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB4XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHkgKG9wdGlvbmFsKVxuXHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdCAqL1xuXHRcdHRoaXMuc3Vic3RyaW5nID0gZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRcdGlmICh5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoKS5zbGljZShNYXRoLm1heCgwLCB4KSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZygpLnN1YnN0cmluZyh4LCB5KTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFdyYXBwZXIgZm9yIHRoaXMudG9TdHJpbmcoKS5zcGxpdCgpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30geFxuXHRcdCAqIEB0eXBlIEFycmF5XG5cdFx0ICovXG5cdFx0dGhpcy5zcGxpdCA9IGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZygpLnNwbGl0KHgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogV3JhcHBlciBmb3IgdGhpcy50b1N0cmluZygpLnJlcGxhY2UoKVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHhcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30geVxuXHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdCAqL1xuXHRcdHRoaXMucmVwbGFjZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoeCwgeSk7XG5cdFx0fTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgPGNvZGU+VGl0bGU8L2NvZGU+LlxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICpcblx0ICogQGNsYXNzIFRoZSBUaXRsZSBjbGFzcy4gSG9sZHMgYXJ0aWNsZSB0aXRsZXMgYW5kIGNvbnZlcnRzIHRoZW0gaW50b1xuXHQgKiB2YXJpb3VzIGZvcm1zLiBBbHNvIGRlYWxzIHdpdGggYW5jaG9ycywgYnkgd2hpY2ggd2UgbWVhbiB0aGUgYml0c1xuXHQgKiBvZiB0aGUgYXJ0aWNsZSBVUkwgYWZ0ZXIgYSAjIGNoYXJhY3RlciwgcmVwcmVzZW50aW5nIGxvY2F0aW9uc1xuXHQgKiB3aXRoaW4gYW4gYXJ0aWNsZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBpbml0aWFsIHZhbHVlIHRvIGFzc2lnbiB0byB0aGVcblx0ICogYXJ0aWNsZS4gVGhpcyBtdXN0IGJlIHRoZSBjYW5vbmljYWwgdGl0bGUgKHNlZSB7QGxpbmtcblx0ICogVGl0bGUjdmFsdWV9LiBPbWl0IHRoaXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCB1c2UgYW5vdGhlciBmdW5jdGlvblxuXHQgKiB0byBzZXQgdGhlIHRpdGxlIGlmIHRoaXMgaXMgdW5hdmFpbGFibGUuXG5cdCAqL1xuXHRjbGFzcyBUaXRsZSBleHRlbmRzIFN0cmluZ3dyYXBwZXIge1xuXHRcdGNvbnN0cnVjdG9yKHZhbCkge1xuXHRcdFx0c3VwZXIoKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIGNhbm9uaWNhbCBhcnRpY2xlIHRpdGxlLiBUaGlzIG11c3QgYmUgaW4gVVRGLTggd2l0aCBub1xuXHRcdFx0ICogZW50aXRpZXMsIGVzY2FwaW5nIG9yIG5hc3RpZXMuIEFsc28sIHVuZGVyc2NvcmVzIHNob3VsZCBiZVxuXHRcdFx0ICogcmVwbGFjZWQgd2l0aCBzcGFjZXMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIGNhbm9uaWNhbCBmb3JtIG9mIHRoZSBhbmNob3IuIFRoaXMgc2hvdWxkIGJlIGV4YWN0bHkgYXNcblx0XHRcdCAqIGl0IGFwcGVhcnMgaW4gdGhlIFVSTCwgaS5lLiB3aXRoIHRoZSAuQzMuMEEgYml0cyBpbi5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5hbmNob3IgPSAnJztcblx0XHRcdHRoaXMuc2V0VXRmKHZhbCk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIGNhbm9uaWNhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXJ0aWNsZSB0aXRsZSwgb3B0aW9uYWxseSB3aXRob3V0IGFuY2hvci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gb21pdEFuY2hvclxuXHRcdCAqIEBmaXhtZSBEZWNpZGUgc3BlY3MgZm9yIGFuY2hvclxuXHRcdCAqIEByZXR1cm4gU3RyaW5nIFRoZSBhcnRpY2xlIHRpdGxlIGFuZCB0aGUgYW5jaG9yLlxuXHRcdCAqL1xuXHRcdHRvU3RyaW5nKG9taXRBbmNob3IpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlICsgKCFvbWl0QW5jaG9yICYmIHRoaXMuYW5jaG9yID8gYCMke3RoaXMuYW5jaG9yU3RyaW5nKCl9YCA6ICcnKTtcblx0XHR9XG5cdFx0YW5jaG9yU3RyaW5nKCkge1xuXHRcdFx0aWYgKCF0aGlzLmFuY2hvcikge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzcGxpdCA9IHRoaXMuYW5jaG9yLnNwbGl0KC8oKD86XFwuW1xcZEEtRl17Mn0pKykvKTtcblx0XHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblx0XHRcdGxldCB2YWx1ZTtcblx0XHRcdGZvciAobGV0IGogPSAxOyBqIDwgbGVuOyBqICs9IDIpIHtcblx0XHRcdFx0Ly8gRklYTUUgcy9kZWNvZGVVUkkvZGVjb2RlVVJJQ29tcG9uZW50L2cgP1xuXHRcdFx0XHR2YWx1ZSA9IHNwbGl0W2pdLnNwbGl0KCcuJykuam9pbignJScpO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0Ly8gY2Fubm90IGRlY29kZVxuXHRcdFx0XHR9XG5cdFx0XHRcdHNwbGl0W2pdID0gdmFsdWUuc3BsaXQoJ18nKS5qb2luKCcgJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3BsaXQuam9pbignJyk7XG5cdFx0fVxuXHRcdHVybEFuY2hvcigpIHtcblx0XHRcdGNvbnN0IHNwbGl0ID0gdGhpcy5hbmNob3Iuc3BsaXQoJy8oKD86WyVdWzAtOUEtRl17Mn0pKykvJyk7XG5cdFx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBqID0gMTsgaiA8IGxlbjsgaiArPSAyKSB7XG5cdFx0XHRcdHNwbGl0W2pdID0gc3BsaXRbal0uc3BsaXQoJyUnKS5qb2luKCcuJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3BsaXQuam9pbignJyk7XG5cdFx0fVxuXHRcdGFuY2hvckZyb21VdGYoc3RyKSB7XG5cdFx0XHR0aGlzLmFuY2hvciA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc3BsaXQoJyAnKS5qb2luKCdfJykpXG5cdFx0XHRcdC5zcGxpdCgnJTNBJylcblx0XHRcdFx0LmpvaW4oJzonKVxuXHRcdFx0XHQuc3BsaXQoXCInXCIpXG5cdFx0XHRcdC5qb2luKCclMjcnKVxuXHRcdFx0XHQuc3BsaXQoJyUnKVxuXHRcdFx0XHQuam9pbignLicpO1xuXHRcdH1cblx0XHRmcm9tVVJMKGgpIHtcblx0XHRcdGlmICh0eXBlb2YgaCAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0Ly8gTk9URSA6IHBsYXlpbmcgd2l0aCBkZWNvZGVVUkksIGVuY29kZVVSSSwgZXNjYXBlLCB1bmVzY2FwZSxcblx0XHRcdC8vIHdlIHNlZW0gdG8gYmUgYWJsZSB0byByZXBsaWNhdGUgdGhlIElFIGJvcmtlZCBlbmNvZGluZ1xuXHRcdFx0Ly8gSUUgZG9lc24ndCBkbyB0aGlzIG5ldy1mYW5nbGVkIHV0Zi04IHRoaW5nLlxuXHRcdFx0Ly8gYW5kIGl0J3Mgd29yc2UgdGhhbiB0aGF0LlxuXHRcdFx0Ly8gSUUgc2VlbXMgdG8gdHJlYXQgdGhlIHF1ZXJ5IHN0cmluZyBkaWZmZXJlbnRseSB0byB0aGUgcmVzdCBvZiB0aGUgdXJsXG5cdFx0XHQvLyB0aGUgcXVlcnkgaXMgdHJlYXRlZCBhcyBib25hLWZpZGUgdXRmOCwgYnV0IHRoZSBmaXJzdCBiaXQgb2YgdGhlIHVybCBpcyBwaXNzZWQgYXJvdW5kIHdpdGhcblx0XHRcdC8vIHdlIGZpeCB1cCAmIGZvciBhbGwgYnJvd3NlcnMsIGp1c3QgaW4gY2FzZS5cblx0XHRcdGNvbnN0IHNwbGl0dGVkID0gaC5zcGxpdCgnPycpO1xuXHRcdFx0c3BsaXR0ZWRbMF0gPSBzcGxpdHRlZFswXS5zcGxpdCgnJicpLmpvaW4oJyUyNicpO1xuXHRcdFx0aCA9IHNwbGl0dGVkLmpvaW4oJz8nKTtcblx0XHRcdGNvbnN0IGNvbnRyaWJzID0gcGcucmUuY29udHJpYnMuZXhlYyhoKTtcblx0XHRcdGlmIChjb250cmlicykge1xuXHRcdFx0XHRpZiAoY29udHJpYnNbMV0gPT09ICd0aXRsZT0nKSB7XG5cdFx0XHRcdFx0Y29udHJpYnNbM10gPSBjb250cmlic1szXS5zcGxpdCgnKycpLmpvaW4oJyAnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB1ID0gbmV3IFRpdGxlKGNvbnRyaWJzWzNdKTtcblx0XHRcdFx0dGhpcy5zZXRVdGYoXG5cdFx0XHRcdFx0VGl0bGUuZGVjb2RlTmFzdGllcyhgJHttdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc1VzZXJJZF19OiR7dS5zdHJpcE5hbWVzcGFjZSgpfWApXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZW1haWwgPSBwZy5yZS5lbWFpbC5leGVjKGgpO1xuXHRcdFx0aWYgKGVtYWlsKSB7XG5cdFx0XHRcdHRoaXMuc2V0VXRmKFxuXHRcdFx0XHRcdFRpdGxlLmRlY29kZU5hc3RpZXMoXG5cdFx0XHRcdFx0XHRgJHttdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc1VzZXJJZF19OiR7bmV3IFRpdGxlKGVtYWlsWzNdKS5zdHJpcE5hbWVzcGFjZSgpfWBcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgYmFja2xpbmtzID0gcGcucmUuYmFja2xpbmtzLmV4ZWMoaCk7XG5cdFx0XHRpZiAoYmFja2xpbmtzKSB7XG5cdFx0XHRcdHRoaXMuc2V0VXRmKFRpdGxlLmRlY29kZU5hc3RpZXMobmV3IFRpdGxlKGJhY2tsaW5rc1szXSkpKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHQvLyBBIGR1bW15IHRpdGxlIG9iamVjdCBmb3IgYSBTcGVjaWFsOkRpZmYgbGluay5cblx0XHRcdGNvbnN0IHNwZWNpYWxkaWZmID0gcGcucmUuc3BlY2lhbGRpZmYuZXhlYyhoKTtcblx0XHRcdGlmIChzcGVjaWFsZGlmZikge1xuXHRcdFx0XHR0aGlzLnNldFV0Zihcblx0XHRcdFx0XHRUaXRsZS5kZWNvZGVOYXN0aWVzKG5ldyBUaXRsZShgJHttdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc1NwZWNpYWxJZF19OkRpZmZgKSlcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHQvLyBubyBtb3JlIHNwZWNpYWwgY2FzZXMgdG8gY2hlY2sgLS1cblx0XHRcdC8vIGhvcGVmdWxseSBpdCdzIG5vdCBhIGRpc2d1aXNlZCB1c2VyLXJlbGF0ZWQgb3Igc3BlY2lhbGx5IHRyZWF0ZWQgc3BlY2lhbCBwYWdlXG5cdFx0XHQvLyBJbmNsdWRlcyByZWZlcmVuY2VzXG5cdFx0XHRjb25zdCBtID0gcGcucmUubWFpbi5leGVjKGgpO1xuXHRcdFx0aWYgKG0gPT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBmcm9tQm90SW50ZXJmYWNlID0gL1xcPyguKyYpP3RpdGxlPS8udGVzdChoKTtcblx0XHRcdFx0aWYgKGZyb21Cb3RJbnRlcmZhY2UpIHtcblx0XHRcdFx0XHRtWzJdID0gbVsyXS5zcGxpdCgnKycpLmpvaW4oJ18nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBleHRyYWN0ZWQgPSBtWzJdICsgKG1bM10gPyBgIyR7bVszXX1gIDogJycpO1xuXHRcdFx0XHRpZiAocGcuZmxhZy5pc1NhZmFyaSAmJiAvJTI1W1xcZEEtRmEtZl17Mn0vLnRlc3QoZXh0cmFjdGVkKSkge1xuXHRcdFx0XHRcdC8vIEZpeCBTYWZhcmkgaXNzdWVcblx0XHRcdFx0XHQvLyBTYWZhcmkgc29tZXRpbWVzIGVuY29kZXMgJSBhcyAlMjUgaW4gVVRGLTggZW5jb2RlZCBzdHJpbmdzIGxpa2UgJUU1JUEzIC0+ICUyNUU1JTI1QTMuXG5cdFx0XHRcdFx0dGhpcy5zZXRVdGYoZGVjb2RlVVJJQ29tcG9uZW50KHVuZXNjYXBlKGV4dHJhY3RlZCkpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNldFV0ZihUaXRsZS5kZWNvZGVOYXN0aWVzKGV4dHJhY3RlZCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0c3RhdGljIGRlY29kZU5hc3RpZXModHh0KSB7XG5cdFx0XHQvLyBteURlY29kZVVSSSB1c2VzIGRlY29kZUV4dHJhcywgd2hpY2ggcmVtb3ZlcyBfLFxuXHRcdFx0Ly8gdGh1cyBydWluaW5nIGNpdGF0aW9ucyBwcmV2aWV3cywgd2hpY2ggYXJlIGZvcm1hdGVkIGFzIFwiY2l0ZV9ub3RlLTFcIlxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bGV0IHJldCA9IGRlY29kZVVSSShUaXRsZS5kZWNvZGVFc2NhcGVzKHR4dCkpO1xuXHRcdFx0XHRyZXQgPSByZXQucmVwbGFjZSgvWyBfXSokLywgJycpO1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdHJldHVybiB0eHQ7IC8vIGNhbm5vdCBkZWNvZGVcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gRGVjb2RlIHZhbGlkICUtZW5jb2RpbmdzLCBvdGhlcndpc2UgZXNjYXBlIHRoZW1cblx0XHRzdGF0aWMgZGVjb2RlRXNjYXBlcyh0eHQpIHtcblx0XHRcdGNvbnN0IHNwbGl0ID0gdHh0LnNwbGl0KC8oKD86JVtcXGRBLUZhLWZdezJ9KSspLyk7XG5cdFx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cdFx0XHQvLyBObyAlLWVuY29kZWQgaXRlbXMgZm91bmQsIHNvIHJlcGxhY2UgdGhlIGxpdGVyYWwgJVxuXHRcdFx0aWYgKGxlbiA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gc3BsaXRbMF0ucmVwbGFjZSgvJSg/IVtcXGRBLUZhLWZdezJ9KS9nLCAnJTI1Jyk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSArPSAyKSB7XG5cdFx0XHRcdHNwbGl0W2ldID0gZGVjb2RlVVJJQ29tcG9uZW50KHNwbGl0W2ldKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzcGxpdC5qb2luKCcnKTtcblx0XHR9XG5cdFx0ZnJvbUFuY2hvcihhKSB7XG5cdFx0XHRpZiAoIWEpIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuZnJvbVVSTChhLmhyZWYpO1xuXHRcdH1cblx0XHRmcm9tV2lraVRleHQodHh0KSB7XG5cdFx0XHQvLyBGSVhNRSAtIHRlc3RpbmcgbmVlZGVkXG5cdFx0XHR0eHQgPSBteURlY29kZVVSSSh0eHQpO1xuXHRcdFx0dGhpcy5zZXRVdGYodHh0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRoaW50VmFsdWUoKSB7XG5cdFx0XHRpZiAoIXRoaXMudmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNhZmVEZWNvZGVVUkkodGhpcy52YWx1ZSk7XG5cdFx0fVxuXHRcdHRvVXNlck5hbWUod2l0aE5zKSB7XG5cdFx0XHRpZiAodGhpcy5uYW1lc3BhY2VJZCgpICE9PSBwZy5uc1VzZXJJZCAmJiB0aGlzLm5hbWVzcGFjZUlkKCkgIT09IHBnLm5zVXNlcnRhbGtJZCkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy52YWx1ZSA9XG5cdFx0XHRcdCh3aXRoTnMgPyBgJHttdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc1VzZXJJZF19OmAgOiAnJykgK1xuXHRcdFx0XHR0aGlzLnN0cmlwTmFtZXNwYWNlKCkuc3BsaXQoJy8nKVswXTtcblx0XHR9XG5cdFx0dXNlck5hbWUod2l0aE5zKSB7XG5cdFx0XHRjb25zdCB0ID0gbmV3IFRpdGxlKHRoaXMudmFsdWUpO1xuXHRcdFx0dC50b1VzZXJOYW1lKHdpdGhOcyk7XG5cdFx0XHRpZiAodC52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHR0b1RhbGtQYWdlKCkge1xuXHRcdFx0Ly8gY29udmVydCBhcnRpY2xlIHRvIGEgdGFsayBwYWdlLCBvciBpZiB3ZSBjYW4ndCwgcmV0dXJuIG51bGxcblx0XHRcdC8vIEluIG90aGVyIHdvcmRzOiByZXR1cm4gbnVsbCBpZiB0aGlzIEFMUkVBRFkgSVMgYSB0YWxrIHBhZ2Vcblx0XHRcdC8vIGFuZCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgdGFsayBwYWdlIG90aGVyd2lzZVxuXHRcdFx0Ly9cblx0XHRcdC8vIFBlciB7QGxpbmsgaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL01hbnVhbDpOYW1lc3BhY2UjU3ViamVjdF9hbmRfdGFsa19uYW1lc3BhY2VzfVxuXHRcdFx0Ly8gKiBBbGwgZGlzY3Vzc2lvbiBuYW1lc3BhY2VzIGhhdmUgb2RkLWludGVnZXIgaW5kaWNlc1xuXHRcdFx0Ly8gKiBUaGUgZGlzY3Vzc2lvbiBuYW1lc3BhY2UgaW5kZXggZm9yIGEgc3BlY2lmaWMgbmFtZXNwYWNlIHdpdGggaW5kZXggbiBpcyBuICsgMVxuXHRcdFx0aWYgKHRoaXMudmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuYW1lc3BhY2VJZCA9IHRoaXMubmFtZXNwYWNlSWQoKTtcblx0XHRcdGlmIChuYW1lc3BhY2VJZCA+PSAwICYmIG5hbWVzcGFjZUlkICUgMiA9PT0gMCkge1xuXHRcdFx0XHQvLyBub24tc3BlY2lhbCBhbmQgc3ViamVjdCBuYW1lc3BhY2Vcblx0XHRcdFx0Y29uc3QgbG9jYWxpemVkTmFtZXNwYWNlID0gbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbbmFtZXNwYWNlSWQgKyAxXTtcblx0XHRcdFx0aWYgKGxvY2FsaXplZE5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9XG5cdFx0XHRcdFx0XHRsb2NhbGl6ZWROYW1lc3BhY2UgPT09ICcnXG5cdFx0XHRcdFx0XHRcdD8gdGhpcy5zdHJpcE5hbWVzcGFjZSgpXG5cdFx0XHRcdFx0XHRcdDogYCR7bG9jYWxpemVkTmFtZXNwYWNlLnNwbGl0KCcgJykuam9pbignXycpfToke3RoaXMuc3RyaXBOYW1lc3BhY2UoKX1gO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHQvLyBSZXR1cm4gY2Fub25pY2FsLCBsb2NhbGl6ZWQgbmFtZXNwYWNlXG5cdFx0bmFtZXNwYWNlKCkge1xuXHRcdFx0cmV0dXJuIG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3RoaXMubmFtZXNwYWNlSWQoKV07XG5cdFx0fVxuXHRcdG5hbWVzcGFjZUlkKCkge1xuXHRcdFx0Y29uc3QgbiA9IHRoaXMudmFsdWUuaW5kZXhPZignOicpO1xuXHRcdFx0aWYgKG4gPCAwKSB7XG5cdFx0XHRcdHJldHVybiAwOyAvLyBtYWluc3BhY2Vcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5hbWVzcGFjZUlkID1cblx0XHRcdFx0bXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VJZHMnKVt0aGlzLnZhbHVlLnNsaWNlKDAsIE1hdGgubWF4KDAsIG4pKS5zcGxpdCgnICcpLmpvaW4oJ18nKS50b0xvd2VyQ2FzZSgpXTtcblx0XHRcdGlmIChuYW1lc3BhY2VJZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybiAwOyAvLyBtYWluc3BhY2Vcblx0XHRcdH1cblx0XHRcdHJldHVybiBuYW1lc3BhY2VJZDtcblx0XHR9XG5cdFx0dGFsa1BhZ2UoKSB7XG5cdFx0XHRjb25zdCB0ID0gbmV3IFRpdGxlKHRoaXMudmFsdWUpO1xuXHRcdFx0dC50b1RhbGtQYWdlKCk7XG5cdFx0XHRpZiAodC52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpc1RhbGtQYWdlKCkge1xuXHRcdFx0aWYgKHRoaXMudGFsa1BhZ2UoKSA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dG9BcnRpY2xlRnJvbVRhbGtQYWdlKCkge1xuXHRcdFx0Ly8gbGFyZ2VseSBjb3B5L3Bhc3RlIGZyb20gdG9UYWxrUGFnZSBhYm92ZS5cblx0XHRcdGlmICh0aGlzLnZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbmFtZXNwYWNlSWQgPSB0aGlzLm5hbWVzcGFjZUlkKCk7XG5cdFx0XHRpZiAobmFtZXNwYWNlSWQgPj0gMCAmJiBuYW1lc3BhY2VJZCAlIDIgPT09IDEpIHtcblx0XHRcdFx0Ly8gbm9uLXNwZWNpYWwgYW5kIHRhbGsgbmFtZXNwYWNlXG5cdFx0XHRcdGNvbnN0IGxvY2FsaXplZE5hbWVzcGFjZSA9IG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW25hbWVzcGFjZUlkIC0gMV07XG5cdFx0XHRcdGlmIChsb2NhbGl6ZWROYW1lc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPVxuXHRcdFx0XHRcdFx0bG9jYWxpemVkTmFtZXNwYWNlID09PSAnJ1xuXHRcdFx0XHRcdFx0XHQ/IHRoaXMuc3RyaXBOYW1lc3BhY2UoKVxuXHRcdFx0XHRcdFx0XHQ6IGAke2xvY2FsaXplZE5hbWVzcGFjZS5zcGxpdCgnICcpLmpvaW4oJ18nKX06JHt0aGlzLnN0cmlwTmFtZXNwYWNlKCl9YDtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0YXJ0aWNsZUZyb21UYWxrUGFnZSgpIHtcblx0XHRcdGNvbnN0IHQgPSBuZXcgVGl0bGUodGhpcy52YWx1ZSk7XG5cdFx0XHR0LnRvQXJ0aWNsZUZyb21UYWxrUGFnZSgpO1xuXHRcdFx0aWYgKHQudmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0YXJ0aWNsZUZyb21UYWxrT3JBcnRpY2xlKCkge1xuXHRcdFx0Y29uc3QgdCA9IG5ldyBUaXRsZSh0aGlzLnZhbHVlKTtcblx0XHRcdGlmICh0LnRvQXJ0aWNsZUZyb21UYWxrUGFnZSgpKSB7XG5cdFx0XHRcdHJldHVybiB0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlzSXBVc2VyKCkge1xuXHRcdFx0cmV0dXJuIHBnLnJlLmlwVXNlci50ZXN0KHRoaXMudXNlck5hbWUoKSk7XG5cdFx0fVxuXHRcdHN0cmlwTmFtZXNwYWNlKCkge1xuXHRcdFx0Ly8gcmV0dXJucyBhIHN0cmluZywgbm90IGEgVGl0bGVcblx0XHRcdGNvbnN0IG4gPSB0aGlzLnZhbHVlLmluZGV4T2YoJzonKTtcblx0XHRcdGlmIChuIDwgMCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5hbWVzcGFjZUlkID0gdGhpcy5uYW1lc3BhY2VJZCgpO1xuXHRcdFx0aWYgKG5hbWVzcGFjZUlkID09PSBwZy5uc01haW5zcGFjZUlkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWUuc2xpY2UoTWF0aC5tYXgoMCwgbiArIDEpKTtcblx0XHR9XG5cdFx0c2V0VXRmKHZhbHVlKSB7XG5cdFx0XHRpZiAoIXZhbHVlKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSAnJztcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgYW5jaCA9IHZhbHVlLmluZGV4T2YoJyMnKTtcblx0XHRcdGlmIChhbmNoIDwgMCkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gdmFsdWUuc3BsaXQoJ18nKS5qb2luKCcgJyk7XG5cdFx0XHRcdHRoaXMuYW5jaG9yID0gJyc7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBNYXRoLm1heCgwLCBhbmNoKSkuc3BsaXQoJ18nKS5qb2luKCcgJyk7XG5cdFx0XHR0aGlzLmFuY2hvciA9IHZhbHVlLnNsaWNlKE1hdGgubWF4KDAsIGFuY2ggKyAxKSk7XG5cdFx0XHR0aGlzLm5zID0gbnVsbDsgLy8gd2FpdCB1bnRpbCBuYW1lc3BhY2UoKSBpcyBjYWxsZWRcblx0XHR9XG5cdFx0c2V0VXJsKHVybGZyYWcpIHtcblx0XHRcdGNvbnN0IGFuY2ggPSB1cmxmcmFnLmluZGV4T2YoJyMnKTtcblx0XHRcdHRoaXMudmFsdWUgPSBzYWZlRGVjb2RlVVJJKHVybGZyYWcuc2xpY2UoMCwgTWF0aC5tYXgoMCwgYW5jaCkpKTtcblx0XHRcdHRoaXMuYW5jaG9yID0gdGhpcy52YWx1ZS5zbGljZShNYXRoLm1heCgwLCBhbmNoICsgMSkpO1xuXHRcdH1cblx0XHRhcHBlbmQoeCkge1xuXHRcdFx0dGhpcy5zZXRVdGYodGhpcy52YWx1ZSArIHgpO1xuXHRcdH1cblx0XHR1cmxTdHJpbmcoeCkge1xuXHRcdFx0eCB8fD0ge307XG5cdFx0XHRsZXQgdiA9IHRoaXMudG9TdHJpbmcodHJ1ZSk7XG5cdFx0XHRpZiAoIXgub21pdEFuY2hvciAmJiB0aGlzLmFuY2hvcikge1xuXHRcdFx0XHR2ICs9IGAjJHt0aGlzLnVybEFuY2hvcigpfWA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXgua2VlcFNwYWNlcykge1xuXHRcdFx0XHR2ID0gdi5zcGxpdCgnICcpLmpvaW4oJ18nKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBlbmNvZGVVUkkodikuc3BsaXQoJyYnKS5qb2luKCclMjYnKS5zcGxpdCgnPycpLmpvaW4oJyUzRicpLnNwbGl0KCcrJykuam9pbignJTJCJyk7XG5cdFx0fVxuXHRcdHJlbW92ZUFuY2hvcigpIHtcblx0XHRcdHJldHVybiBuZXcgVGl0bGUodGhpcy50b1N0cmluZyh0cnVlKSk7XG5cdFx0fVxuXHRcdHRvVXJsKCkge1xuXHRcdFx0cmV0dXJuIHBnLndpa2kudGl0bGViYXNlICsgdGhpcy51cmxTdHJpbmcoKTtcblx0XHR9XG5cdH1cblx0VGl0bGUuZnJvbVVSTCA9IChoKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBUaXRsZSgpLmZyb21VUkwoaCk7XG5cdH07XG5cdFRpdGxlLmZyb21BbmNob3IgPSAoYSkgPT4ge1xuXHRcdHJldHVybiBuZXcgVGl0bGUoKS5mcm9tQW5jaG9yKGEpO1xuXHR9O1xuXHRUaXRsZS5mcm9tV2lraVRleHQgPSAodHh0KSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBUaXRsZSgpLmZyb21XaWtpVGV4dCh0eHQpO1xuXHR9O1xuXHRjb25zdCBwYXJzZVBhcmFtcyA9ICh1cmwpID0+IHtcblx0XHRjb25zdCBzcGVjaWFsRGlmZiA9IHBnLnJlLnNwZWNpYWxkaWZmLmV4ZWModXJsKTtcblx0XHRpZiAoc3BlY2lhbERpZmYpIHtcblx0XHRcdGNvbnN0IHNwbGl0ID0gc3BlY2lhbERpZmZbMV0uc3BsaXQoJy8nKTtcblx0XHRcdGlmIChzcGxpdC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRvbGRpZDogc3BsaXRbMF0sXG5cdFx0XHRcdFx0ZGlmZjogJ3ByZXYnLFxuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIGlmIChzcGxpdC5sZW5ndGggPT09IDIpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRvbGRpZDogc3BsaXRbMF0sXG5cdFx0XHRcdFx0ZGlmZjogc3BsaXRbMV0sXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IHJldCA9IHt9O1xuXHRcdGlmICghdXJsLmluY2x1ZGVzKCc/JykpIHtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXHRcdFt1cmxdID0gdXJsLnNwbGl0KCcjJyk7XG5cdFx0Y29uc3QgcyA9IHVybC5zcGxpdCgnPycpLnNsaWNlKDEpLmpvaW4oJywnKTtcblx0XHRjb25zdCB0ID0gcy5zcGxpdCgnJicpO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiB0KSB7XG5cdFx0XHRjb25zdCB6ID0gZWxlbWVudC5zcGxpdCgnPScpO1xuXHRcdFx0ei5wdXNoKG51bGwpO1xuXHRcdFx0WywgcmV0W3pbMF1dXSA9IHo7XG5cdFx0fVxuXHRcdC8vIERpZmYgcmV2aXNpb24gd2l0aCBubyBvbGRpZCBpcyBpbnRlcnByZXRlZCBhcyBhIGRpZmYgdG8gdGhlIHByZXZpb3VzIHJldmlzaW9uIGJ5IE1lZGlhV2lraVxuXHRcdGlmIChyZXQuZGlmZiAmJiByZXQub2xkaWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0Lm9sZGlkID0gJ3ByZXYnO1xuXHRcdH1cblx0XHQvLyBEb2N1bWVudGF0aW9uIHNlZW1zIHRvIHNheSBzb21ldGhpbmcgZGlmZmVyZW50LCBidXQgb2xkaWQgY2FuIGFsc28gYWNjZXB0IHByZXYvbmV4dCwgYW5kXG5cdFx0Ly8gRWNobyBpcyBlbWl0dGluZyBzdWNoIFVSTHMuIFNpbXBsZSBmaXh1cCBkdXJpbmcgcGFyYW1ldGVyIGRlY29kaW5nOlxuXHRcdGlmIChyZXQub2xkaWQgJiYgKHJldC5vbGRpZCA9PT0gJ3ByZXYnIHx8IHJldC5vbGRpZCA9PT0gJ25leHQnIHx8IHJldC5vbGRpZCA9PT0gJ2N1cicpKSB7XG5cdFx0XHRjb25zdCBoZWxwZXIgPSByZXQuZGlmZjtcblx0XHRcdHJldC5kaWZmID0gcmV0Lm9sZGlkO1xuXHRcdFx0cmV0Lm9sZGlkID0gaGVscGVyO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHQvLyAoYSkgbXlEZWNvZGVVUkkgKGZpcnN0IHN0YW5kYXJkIGRlY29kZVVSSSwgdGhlbiBwZy5yZS51cmxOb1BvcHVwKVxuXHQvLyAoYikgY2hhbmdlIHNwYWNlcyB0byB1bmRlcnNjb3Jlc1xuXHQvLyAoYykgZW5jb2RlVVJJIChqdXN0IHRoZSBzdHJhaWdodCBvbmUsIG5vIHBnLnJlLnVybE5vUG9wdXApXG5cdGNvbnN0IG15RGVjb2RlVVJJID0gKHN0cikgPT4ge1xuXHRcdGxldCByZXQ7XG5cdFx0Ly8gRklYTUUgZGVjb2RlVVJJQ29tcG9uZW50Pz9cblx0XHR0cnkge1xuXHRcdFx0cmV0ID0gZGVjb2RlVVJJKHN0ci50b1N0cmluZygpKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGcubWlzYy5kZWNvZGVFeHRyYXMubGVuZ3RoOyArK2kpIHtcblx0XHRcdGNvbnN0IHtmcm9tfSA9IHBnLm1pc2MuZGVjb2RlRXh0cmFzW2ldO1xuXHRcdFx0Y29uc3Qge3RvfSA9IHBnLm1pc2MuZGVjb2RlRXh0cmFzW2ldO1xuXHRcdFx0cmV0ID0gcmV0LnNwbGl0KGZyb20pLmpvaW4odG8pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBzYWZlRGVjb2RlVVJJID0gKHN0cikgPT4ge1xuXHRcdGNvbnN0IHJldCA9IG15RGVjb2RlVVJJKHN0cik7XG5cdFx0cmV0dXJuIHJldCB8fCBzdHI7XG5cdH07XG5cdC8vIFRFU1RTIC8vXG5cdGNvbnN0IGlzRGlzYW1iaWcgPSAoZGF0YSwgYXJ0aWNsZSkgPT4ge1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBBbGxEYWJzU3R1YnMnKSAmJiBhcnRpY2xlLm5hbWVzcGFjZSgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiAhYXJ0aWNsZS5pc1RhbGtQYWdlKCkgJiYgcGcucmUuZGlzYW1iaWcudGVzdChkYXRhKTtcblx0fTtcblx0Y29uc3Qgc3R1YkNvdW50ID0gKGRhdGEsIGFydGljbGUpID0+IHtcblx0XHRpZiAoIWdldFZhbHVlT2YoJ3BvcHVwQWxsRGFic1N0dWJzJykgJiYgYXJ0aWNsZS5uYW1lc3BhY2UoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRsZXQgc2VjdFN0dWIgPSAwO1xuXHRcdGxldCByZWFsU3R1YiA9IDA7XG5cdFx0aWYgKHBnLnJlLnN0dWIudGVzdChkYXRhKSkge1xuXHRcdFx0Y29uc3QgcyA9IGRhdGEuc3BsaXQocGcucmUuc3R1Yik7XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHMubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdFx0aWYgKHNbaV0pIHtcblx0XHRcdFx0XHQrK3NlY3RTdHViO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCsrcmVhbFN0dWI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHJlYWw6IHJlYWxTdHViLFxuXHRcdFx0c2VjdDogc2VjdFN0dWIsXG5cdFx0fTtcblx0fTtcblx0Y29uc3QgaXNWYWxpZEltYWdlTmFtZSA9IChzdHIpID0+IHtcblx0XHRyZXR1cm4gIXN0ci5pbmNsdWRlcygneycpO1xuXHR9O1xuXHRjb25zdCBpc0luU3RyaXBwYWJsZU5hbWVzcGFjZSA9IChhcnRpY2xlKSA9PiB7XG5cdFx0cmV0dXJuIGFydGljbGUubmFtZXNwYWNlSWQoKSAhPT0gMDtcblx0fTtcblx0Y29uc3QgaXNJbk1haW5OYW1lc3BhY2UgPSAoYXJ0aWNsZSkgPT4ge1xuXHRcdHJldHVybiBhcnRpY2xlLm5hbWVzcGFjZUlkKCkgPT09IDA7XG5cdH07XG5cdGNvbnN0IGFuY2hvckNvbnRhaW5zSW1hZ2UgPSAoYSkgPT4ge1xuXHRcdC8vIGl0ZXJhdGUgb3ZlciBjaGlsZHJlbiBvZiBhbmNob3IgYVxuXHRcdC8vIHNlZSBpZiBhbnkgYXJlIGltYWdlc1xuXHRcdGlmIChhID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IGtpZHMgPSBhLmNoaWxkTm9kZXM7XG5cdFx0Zm9yIChjb25zdCBraWQgb2Yga2lkcykge1xuXHRcdFx0aWYgKGtpZC5ub2RlTmFtZSA9PT0gJ0lNRycpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0Y29uc3QgaXNQb3B1cExpbmsgPSAoYSkgPT4ge1xuXHRcdC8vIE5CIGZvciBwZXJmb3JtYW5jZSByZWFzb25zLCBUT0MgbGlua3MgZ2VuZXJhbGx5IHJldHVybiB0cnVlXG5cdFx0Ly8gdGhleSBzaG91bGQgYmUgc3RyaXBwZWQgb3V0IGxhdGVyXG5cdFx0aWYgKCFtYXJrTm9wb3B1cFNwYW5MaW5rcy5kb25lKSB7XG5cdFx0XHRtYXJrTm9wb3B1cFNwYW5MaW5rcygpO1xuXHRcdH1cblx0XHRpZiAoYS5pbk5vcG9wdXBTcGFuKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdC8vIEZJWE1FIGlzIHRoaXMgZmFzdGVyIGlubGluZT9cblx0XHRpZiAoYS5vbm1vdXNlZG93biB8fCBhLmdldEF0dHJpYnV0ZSgnbm9wb3B1cCcpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IGggPSBhLmhyZWY7XG5cdFx0aWYgKGggPT09IGAke2RvY3VtZW50LmxvY2F0aW9uLmhyZWZ9I2ApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCFwZy5yZS5iYXNlbmFtZXMudGVzdChoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIXBnLnJlLnVybE5vUG9wdXAudGVzdChoKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQocGcucmUuZW1haWwudGVzdChoKSB8fCBwZy5yZS5jb250cmlicy50ZXN0KGgpIHx8IHBnLnJlLmJhY2tsaW5rcy50ZXN0KGgpIHx8IHBnLnJlLnNwZWNpYWxkaWZmLnRlc3QoaCkpICYmXG5cdFx0XHQhaC5pbmNsdWRlcygnJmxpbWl0PScpXG5cdFx0KTtcblx0fTtcblx0Y29uc3QgbWFya05vcG9wdXBTcGFuTGlua3MgPSBmdW5jdGlvbiBtYXJrTm9wb3B1cFNwYW5MaW5rcygpIHtcblx0XHRpZiAoIWdldFZhbHVlT2YoJ3BvcHVwT25seUFydGljbGVMaW5rcycpKSB7XG5cdFx0XHRmaXhWZWN0b3JNZW51UG9wdXBzKCk7XG5cdFx0fVxuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdGNvbnN0IHMgPSAkYm9keS5maW5kKCcubm9wb3B1cHMnKS50b0FycmF5KCk7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHMpIHtcblx0XHRcdGNvbnN0IGFzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cdFx0XHRmb3IgKGNvbnN0IGEgb2YgYXMpIHtcblx0XHRcdFx0YS5pbk5vcG9wdXBTcGFuID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0bWFya05vcG9wdXBTcGFuTGlua3MuZG9uZSA9IHRydWU7XG5cdH07XG5cdGNvbnN0IGZpeFZlY3Rvck1lbnVQb3B1cHMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHkuZmluZCgnbmF2LnZlY3Rvci1tZW51IGgzOmZpcnN0IGE6Zmlyc3QnKS5wcm9wKCdpbk5vcG9wdXBTcGFuJywgdHJ1ZSk7XG5cdH07XG5cdC8vIEVOREZJTEU6IHRpdGxlcy5qc1xuXHQvLyBTVEFSVEZJTEU6IGdldHBhZ2UuanNcblx0Ly8gV2lraS1zcGVjaWZpYyBkb3dubG9hZGluZ1xuXHQvL1xuXHQvLyBTY2hlbWF0aWMgZm9yIGEgZ2V0V2lraSBjYWxsXG5cdC8vXG5cdC8vICAgICAgICAgICAgIGdldFBhZ2VXaXRoQ2FjaGluZ1xuXHQvL1x0XHRcdFx0XHR8XG5cdC8vXHQgICBmYWxzZVx0XHR8XHRcdCAgdHJ1ZVxuXHQvLyBnZXRQYWdlPC1bZmluZFBpY3R1cmVJbkNhY2hlXS0+LW9uQ29tcGxldGUoYSBmYWtlIGRvd25sb2FkKVxuXHQvLyAgIFxcLlxuXHQvL1x0IChhc3luYyktPmFkZFBhZ2VUb0NhY2hlKGRvd25sb2FkKS0+LW9uQ29tcGxldGUoZG93bmxvYWQpXG5cdC8vIGNoZWNrIGNhY2hlIHRvIHNlZSBpZiBwYWdlIGV4aXN0c1xuXHRjb25zdCBnZXRQYWdlV2l0aENhY2hpbmcgPSAodXJsLCBvbkNvbXBsZXRlLCBvd25lcikgPT4ge1xuXHRcdGxvZyhgZ2V0UGFnZVdpdGhDYWNoaW5nLCB1cmw9JHt1cmx9YCk7XG5cdFx0Y29uc3QgaSA9IGZpbmRJblBhZ2VDYWNoZSh1cmwpO1xuXHRcdGxldCBkO1xuXHRcdGlmIChpID4gLTEpIHtcblx0XHRcdGQgPSBmYWtlRG93bmxvYWQoXG5cdFx0XHRcdHVybCxcblx0XHRcdFx0b3duZXIuaWROdW1iZXIsXG5cdFx0XHRcdG9uQ29tcGxldGUsXG5cdFx0XHRcdHBnLmNhY2hlLnBhZ2VzW2ldLmRhdGEsXG5cdFx0XHRcdHBnLmNhY2hlLnBhZ2VzW2ldLmxhc3RNb2RpZmllZCxcblx0XHRcdFx0b3duZXJcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGQgPSBnZXRQYWdlKHVybCwgb25Db21wbGV0ZSwgb3duZXIpO1xuXHRcdFx0aWYgKGQgJiYgb3duZXIgJiYgb3duZXIuYWRkRG93bmxvYWQpIHtcblx0XHRcdFx0b3duZXIuYWRkRG93bmxvYWQoZCk7XG5cdFx0XHRcdGQub3duZXIgPSBvd25lcjtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IGdldFBhZ2UgPSAodXJsLCBvbkNvbXBsZXRlLCBvd25lcikgPT4ge1xuXHRcdGxvZygnZ2V0UGFnZScpO1xuXHRcdGNvbnN0IGNhbGxiYWNrID0gKGQpID0+IHtcblx0XHRcdGlmICghZC5hYm9ydGVkKSB7XG5cdFx0XHRcdGFkZFBhZ2VUb0NhY2hlKGQpO1xuXHRcdFx0XHRvbkNvbXBsZXRlKGQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIHN0YXJ0RG93bmxvYWQodXJsLCBvd25lci5pZE51bWJlciwgY2FsbGJhY2spO1xuXHR9O1xuXHRjb25zdCBmaW5kSW5QYWdlQ2FjaGUgPSAodXJsKSA9PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwZy5jYWNoZS5wYWdlcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKHVybCA9PT0gcGcuY2FjaGUucGFnZXNbaV0udXJsKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gLTE7XG5cdH07XG5cdGNvbnN0IGFkZFBhZ2VUb0NhY2hlID0gKGRvd25sb2FkKSA9PiB7XG5cdFx0bG9nKGBhZGRQYWdlVG9DYWNoZSAke2Rvd25sb2FkLnVybH1gKTtcblx0XHRjb25zdCBwYWdlID0ge1xuXHRcdFx0dXJsOiBkb3dubG9hZC51cmwsXG5cdFx0XHRkYXRhOiBkb3dubG9hZC5kYXRhLFxuXHRcdFx0bGFzdE1vZGlmaWVkOiBkb3dubG9hZC5sYXN0TW9kaWZpZWQsXG5cdFx0fTtcblx0XHRyZXR1cm4gcGcuY2FjaGUucGFnZXMucHVzaChwYWdlKTtcblx0fTtcblx0Ly8gRU5ERklMRTogZ2V0cGFnZS5qc1xuXHQvLyBTVEFSVEZJTEU6IHRvb2xzLmpzXG5cdC8vIElFIG1hZG5lc3Mgd2l0aCBlbmNvZGluZ1xuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cblx0Ly9cblx0Ly8gc3VwcG9zZSB0aHJvdWdob3V0IHRoYXQgdGhlIHBhZ2UgaXMgaW4gdXRmOCwgbGlrZSB3aWtpcGVkaWFcblx0Ly9cblx0Ly8gaWYgYSBpcyBhbiBhbmNob3IgRE9NIGVsZW1lbnQgYW5kIGEuaHJlZiBzaG91bGQgY29uc2lzdCBvZlxuXHQvL1xuXHQvLyBodHRwOi8vaG9zdC5uYW1lLmhlcmUvd2lraS9mb28/YmFyPWJhelxuXHQvL1xuXHQvLyB0aGVuIElFIGdpdmVzIGZvbyBhcyBcImxhdGluMS1lbmNvZGVkXCIgdXRmODsgd2UgaGF2ZSBmb28gPSBkZWNvZGVfdXRmOChkZWNvZGVVUkkoZm9vX2llKSlcblx0Ly8gYnV0IElFIGdpdmVzIGJhcj1iYXogY29ycmVjdGx5IGFzIHBsYWluIHV0Zjhcblx0Ly9cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vXG5cdC8vIElFJ3MgeG1saHR0cCBkb2Vzbid0IHVuZGVyc3RhbmQgdXRmOCB1cmxzLiBIYXZlIHRvIHVzZSBlbmNvZGVVUkkgaGVyZS5cblx0Ly9cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vXG5cdC8vIHN1bW1hdCBlbHNlXG5cdC8vIFNvdXJjZTogaHR0cDovL2FrdHVlbGwuZGUuc2VsZmh0bWwub3JnL2FydGlrZWwvamF2YXNjcmlwdC91dGY4YjY0L3V0ZjguaHRtXG5cdGNvbnN0IGdldEpzT2JqID0gKGpzb24pID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNvbl9yZXQgPSBKU09OLnBhcnNlKGpzb24pO1xuXHRcdFx0aWYgKGpzb25fcmV0Lndhcm5pbmdzKSB7XG5cdFx0XHRcdGZvciAobGV0IHcgPSAwOyB3IDwganNvbl9yZXQud2FybmluZ3MubGVuZ3RoOyB3KyspIHtcblx0XHRcdFx0XHRpZiAoanNvbl9yZXQud2FybmluZ3Nbd11bJyonXSkge1xuXHRcdFx0XHRcdFx0bG9nKGpzb25fcmV0Lndhcm5pbmdzW3ddWycqJ10pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsb2coanNvbl9yZXQud2FybmluZ3Nbd10ud2FybmluZ3MpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChqc29uX3JldC5lcnJvcikge1xuXHRcdFx0XHRlcnJsb2coYCR7anNvbl9yZXQuZXJyb3IuY29kZX06ICR7anNvbl9yZXQuZXJyb3IuaW5mb31gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBqc29uX3JldDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdGVycmxvZyhgU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCBnZXRKc09iaiwganNvbj0ke2pzb259YCk7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGFueUNoaWxkID0gKG9iaikgPT4ge1xuXHRcdGZvciAoY29uc3QgcCBpbiBvYmopIHtcblx0XHRcdGlmICghT2JqZWN0Lmhhc093bihvYmosIHApKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9ialtwXTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IHVwY2FzZUZpcnN0ID0gKHN0cikgPT4ge1xuXHRcdGlmICh0eXBlb2Ygc3RyICE9PSB0eXBlb2YgJycgfHwgc3RyID09PSAnJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXHR9O1xuXHRjb25zdCBmaW5kSW5BcnJheSA9IChhcnIsIGZvbykgPT4ge1xuXHRcdGlmICghYXJyIHx8IGFyci5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdFx0Y29uc3QgbGVuID0gYXJyLmxlbmd0aDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG5cdFx0XHRpZiAoYXJyW2ldID09PSBmb28pIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fTtcblx0Y29uc3QgbmV4dE9uZSA9IChhcnJheSwgdmFsdWUpID0+IHtcblx0XHQvLyBOQiBpZiB0aGUgYXJyYXkgaGFzIHR3byBjb25zZWN1dGl2ZSBlbnRyaWVzIGVxdWFsXG5cdFx0Ly9cdHRoZW4gdGhpcyB3aWxsIGxvb3Agb24gc3VjY2Vzc2l2ZSBjYWxsc1xuXHRcdGNvbnN0IGkgPSBmaW5kSW5BcnJheShhcnJheSwgdmFsdWUpO1xuXHRcdGlmIChpIDwgMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBhcnJheVtpICsgMV07XG5cdH07XG5cdGNvbnN0IGxpdGVyYWxpemVSZWdleCA9IChzdHIpID0+IHtcblx0XHRyZXR1cm4gbXcudXRpbC5lc2NhcGVSZWdFeHAoc3RyKTtcblx0fTtcblx0U3RyaW5nLnByb3RvdHlwZS5lbnRpZnkgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gbGV0IHNoeSA9ICcmc2h5Oyc7XG5cdFx0cmV0dXJuIHRoaXMuc3BsaXQoJyYnKVxuXHRcdFx0LmpvaW4oJyZhbXA7Jylcblx0XHRcdC5zcGxpdCgnPCcpXG5cdFx0XHQuam9pbignJmx0OycpXG5cdFx0XHQuc3BsaXQoJz4nKVxuXHRcdFx0LmpvaW4oJyZndDsnIC8qICtzaHkgKi8pXG5cdFx0XHQuc3BsaXQoJ1wiJylcblx0XHRcdC5qb2luKCcmcXVvdDsnKTtcblx0fTtcblx0Ly8gQXJyYXkgZmlsdGVyIGZ1bmN0aW9uXG5cdGNvbnN0IHJlbW92ZU51bGxzID0gKHZhbCkgPT4ge1xuXHRcdHJldHVybiB2YWwgIT09IG51bGw7XG5cdH07XG5cdGNvbnN0IGpvaW5QYXRoID0gKGxpc3QpID0+IHtcblx0XHRyZXR1cm4gbGlzdC5maWx0ZXIocmVtb3ZlTnVsbHMpLmpvaW4oJy8nKTtcblx0fTtcblx0Y29uc3Qgc2ltcGxlUHJpbnRmID0gKHN0ciwgc3VicykgPT4ge1xuXHRcdGlmICghc3RyIHx8ICFzdWJzKSB7XG5cdFx0XHRyZXR1cm4gc3RyO1xuXHRcdH1cblx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRjb25zdCBzID0gc3RyLnNwbGl0KC8oJXN8XFwkXFxkKykvKTtcblx0XHRsZXQgaSA9IDA7XG5cdFx0ZG8ge1xuXHRcdFx0cmV0LnB1c2gocy5zaGlmdCgpKTtcblx0XHRcdGlmIChzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNvbnN0IGNtZCA9IHMuc2hpZnQoKTtcblx0XHRcdGlmIChjbWQgPT09ICclcycpIHtcblx0XHRcdFx0aWYgKGkgPCBzdWJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldC5wdXNoKHN1YnNbaV0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldC5wdXNoKGNtZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0KytpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgaiA9IE51bWJlci5wYXJzZUludChjbWQucmVwbGFjZSgnJCcsICcnKSwgMTApIC0gMTtcblx0XHRcdFx0aWYgKGogPiAtMSAmJiBqIDwgc3Vicy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXQucHVzaChzdWJzW2pdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXQucHVzaChjbWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSB3aGlsZSAocy5sZW5ndGggPiAwKTtcblx0XHRyZXR1cm4gcmV0LmpvaW4oJycpO1xuXHR9O1xuXHRjb25zdCBpc1N0cmluZyA9ICh4KSA9PiB7XG5cdFx0cmV0dXJuIHR5cGVvZiB4ID09PSAnc3RyaW5nJyB8fCB4IGluc3RhbmNlb2YgU3RyaW5nO1xuXHR9O1xuXHRjb25zdCBpc051bWJlciA9ICh4KSA9PiB7XG5cdFx0cmV0dXJuIHR5cGVvZiB4ID09PSAnbnVtYmVyJyB8fCB4IGluc3RhbmNlb2YgTnVtYmVyO1xuXHR9O1xuXHRjb25zdCBpc1JlZ0V4cCA9ICh4KSA9PiB7XG5cdFx0cmV0dXJuIHggaW5zdGFuY2VvZiBSZWdFeHA7XG5cdH07XG5cdGNvbnN0IGlzQXJyYXkgPSAoeCkgPT4ge1xuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KHgpO1xuXHR9O1xuXHRjb25zdCBpc09iamVjdCA9ICh4KSA9PiB7XG5cdFx0cmV0dXJuIHggaW5zdGFuY2VvZiBPYmplY3Q7XG5cdH07XG5cdGNvbnN0IGlzRnVuY3Rpb24gPSAoeCkgPT4ge1xuXHRcdHJldHVybiAhaXNSZWdFeHAoeCkgJiYgKHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nIHx8IHggaW5zdGFuY2VvZiBGdW5jdGlvbik7XG5cdH07XG5cdGNvbnN0IHJlcGVhdFN0cmluZyA9IChzLCBtdWx0KSA9PiB7XG5cdFx0bGV0IHJldCA9ICcnO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbXVsdDsgKytpKSB7XG5cdFx0XHRyZXQgKz0gcztcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgemVyb0ZpbGwgPSAocywgbWluKSA9PiB7XG5cdFx0bWluIHx8PSAyO1xuXHRcdGNvbnN0IHQgPSBzLnRvU3RyaW5nKCk7XG5cdFx0cmV0dXJuIHJlcGVhdFN0cmluZygnMCcsIG1pbiAtIHQubGVuZ3RoKSArIHQ7XG5cdH07XG5cdGNvbnN0IG1hcCA9IChmLCBvKSA9PiB7XG5cdFx0aWYgKGlzQXJyYXkobykpIHtcblx0XHRcdHJldHVybiBtYXBfYXJyYXkoZiwgbyk7XG5cdFx0fVxuXHRcdHJldHVybiBtYXBfb2JqZWN0KGYsIG8pO1xuXHR9O1xuXHRjb25zdCBtYXBfYXJyYXkgPSAoZiwgbykgPT4ge1xuXHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBvKSB7XG5cdFx0XHRyZXQucHVzaChmKGVsZW1lbnQpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgbWFwX29iamVjdCA9IChmLCBvKSA9PiB7XG5cdFx0Y29uc3QgcmV0ID0ge307XG5cdFx0Zm9yIChjb25zdCBpIGluIG8pIHtcblx0XHRcdGlmICghT2JqZWN0Lmhhc093bihvLCBpKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJldFtvXSA9IGYob1tpXSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdHBnLmVzY2FwZVF1b3Rlc0hUTUwgPSAodGV4dCkgPT4ge1xuXHRcdHJldHVybiB0ZXh0LnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG5cdH07XG5cdHBnLnVuZXNjYXBlUXVvdGVzSFRNTCA9IChodG1sKSA9PiB7XG5cdFx0Ly8gRnJvbSB7QGxpbmsgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzczOTQ3ODd9XG5cdFx0Ly8gVGhpcyBzZWVtcyB0byBiZSBpbXBsZW1lbnRlZCBjb3JyZWN0bHkgb24gYWxsIG1ham9yIGJyb3dzZXJzIG5vdywgc28gd2Vcblx0XHQvLyBkb24ndCBoYXZlIHRvIG1ha2Ugb3VyIG93biBmdW5jdGlvbi5cblx0XHRjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXHRcdHR4dC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdHJldHVybiB0eHQudmFsdWU7XG5cdH07XG5cdC8vIEVOREZJTEU6IHRvb2xzLmpzXG5cdC8vIFNUQVJURklMRTogZGFiLmpzXG5cdC8vIERhYi1maXhpbmcgY29kZVxuXHQvL1xuXHRjb25zdCByZXRhcmdldERhYiA9IChuZXdUYXJnZXQsIG9sZFRhcmdldCwgZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWUsIHRpdGxlVG9FZGl0KSA9PiB7XG5cdFx0bG9nKGByZXRhcmdldERhYjogbmV3VGFyZ2V0PSR7bmV3VGFyZ2V0fSBvbGRUYXJnZXQ9JHtvbGRUYXJnZXR9YCk7XG5cdFx0cmV0dXJuIGNoYW5nZUxpbmtUYXJnZXRMaW5rKHtcblx0XHRcdG5ld1RhcmdldCxcblx0XHRcdHRleHQ6IG5ld1RhcmdldC5zcGxpdCgnICcpLmpvaW4oJyZuYnNwOycpLFxuXHRcdFx0aGludDogdHByaW50ZignZGlzYW1iaWdIaW50JywgW25ld1RhcmdldF0pLFxuXHRcdFx0c3VtbWFyeTogc2ltcGxlUHJpbnRmKGdldFZhbHVlT2YoJ3BvcHVwRml4RGFic1N1bW1hcnknKSwgW2ZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lLCBuZXdUYXJnZXRdKSxcblx0XHRcdGNsaWNrQnV0dG9uOiBnZXRWYWx1ZU9mKCdwb3B1cERhYnNBdXRvQ2xpY2snKSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdFx0b2xkVGFyZ2V0LFxuXHRcdFx0d2F0Y2g6IGdldFZhbHVlT2YoJ3BvcHVwV2F0Y2hEaXNhbWJpZ2dlZFBhZ2VzJyksXG5cdFx0XHR0aXRsZTogdGl0bGVUb0VkaXQsXG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGxpc3RMaW5rcyA9ICh3aWtpdGV4dCwgb2xkVGFyZ2V0LCB0aXRsZVRvRWRpdCkgPT4ge1xuXHRcdC8vIG1lZGlhd2lraSBzdHJpcHMgdHJhaWxpbmcgc3BhY2VzLCBzbyB3ZSBkbyB0aGUgc2FtZVxuXHRcdC8vIHRlc3RjYXNlOiB7QGxpbmsgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3cvaW5kZXgucGhwP3RpdGxlPVJhZGlhbCZvbGRpZD05NzM2NTYzM31cblx0XHRjb25zdCByZWcgPSAvXFxbXFxbKFtefF0qPykgKihcXHx8XV0pL2dpO1xuXHRcdGxldCByZXQgPSBbXTtcblx0XHRjb25zdCBzcGxpdHRlZCA9IHdpa2l0ZXh0LnNwbGl0KHJlZyk7XG5cdFx0Ly8gXlthLXpdKyBzaG91bGQgbWF0Y2ggaW50ZXJ3aWtpIGxpbmtzLCBob3BlZnVsbHkgKGNhc2UtaW5zZW5zaXRpdmUpXG5cdFx0Ly8gYW5kIF5bYS16XSogc2hvdWxkIG1hdGNoIHRob3NlIGFuZCBbWzpDYXRlZ29yeS4uLl1dIHN0eWxlIGxpbmtzIHRvb1xuXHRcdGNvbnN0IG9taXRSZWdleCA9IC9eW2Etel0qOnxeW1NzXXBlY2lhbDp8XltJaV1tYWdlfF5bQ2NdYXRlZ29yeS87XG5cdFx0Y29uc3QgZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWUgPSBvbGRUYXJnZXQudG9TdHJpbmcoKTtcblx0XHRjb25zdCB3aWtQb3MgPSBnZXRWYWx1ZU9mKCdwb3B1cERhYldpa3Rpb25hcnknKTtcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHNwbGl0dGVkLmxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHRpZiAodHlwZW9mIHNwbGl0dGVkW2ldID09PSB0eXBlb2YgJ3N0cmluZycgJiYgc3BsaXR0ZWRbaV0ubGVuZ3RoID4gMCAmJiAhb21pdFJlZ2V4LnRlc3Qoc3BsaXR0ZWRbaV0pKSB7XG5cdFx0XHRcdHJldC5wdXNoKHJldGFyZ2V0RGFiKHNwbGl0dGVkW2ldLCBvbGRUYXJnZXQsIGZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lLCB0aXRsZVRvRWRpdCkpO1xuXHRcdFx0fSAvKiBpZiAqL1xuXHRcdH0gLyogZm9yIGxvb3AgKi9cblx0XHRyZXQgPSBybUR1cGVzRnJvbVNvcnRlZExpc3QocmV0LnNvcnQoKSk7XG5cdFx0aWYgKHdpa1Bvcykge1xuXHRcdFx0Y29uc3Qgd2lrVGFyZ2V0ID0gYHdpa3Rpb25hcnk6JHtmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZS5yZXBsYWNlKC9eKC4rKVxccytcXChbXildK1xcKVxccyokLywgJyQxJyl9YDtcblx0XHRcdGNvbnN0IG1ldGggPSB3aWtQb3MudG9Mb3dlckNhc2UoKSA9PT0gJ2ZpcnN0JyA/ICd1bnNoaWZ0JyA6ICdwdXNoJztcblx0XHRcdHJldFttZXRoXShyZXRhcmdldERhYih3aWtUYXJnZXQsIG9sZFRhcmdldCwgZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWUsIHRpdGxlVG9FZGl0KSk7XG5cdFx0fVxuXHRcdHJldC5wdXNoKFxuXHRcdFx0Y2hhbmdlTGlua1RhcmdldExpbmsoe1xuXHRcdFx0XHRuZXdUYXJnZXQ6IG51bGwsXG5cdFx0XHRcdHRleHQ6IHBvcHVwU3RyaW5nKCdyZW1vdmUgdGhpcyBsaW5rJykuc3BsaXQoJyAnKS5qb2luKCcmbmJzcDsnKSxcblx0XHRcdFx0aGludDogcG9wdXBTdHJpbmcoJ3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBkaXNhbWJpZyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJyksXG5cdFx0XHRcdGNsaWNrQnV0dG9uOiBnZXRWYWx1ZU9mKCdwb3B1cERhYnNBdXRvQ2xpY2snKSxcblx0XHRcdFx0b2xkVGFyZ2V0LFxuXHRcdFx0XHRzdW1tYXJ5OiBzaW1wbGVQcmludGYoZ2V0VmFsdWVPZigncG9wdXBSbURhYkxpbmtTdW1tYXJ5JyksIFtmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZV0pLFxuXHRcdFx0XHR3YXRjaDogZ2V0VmFsdWVPZigncG9wdXBXYXRjaERpc2FtYmlnZ2VkUGFnZXMnKSxcblx0XHRcdFx0dGl0bGU6IHRpdGxlVG9FZGl0LFxuXHRcdFx0fSlcblx0XHQpO1xuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IHJtRHVwZXNGcm9tU29ydGVkTGlzdCA9IChsaXN0KSA9PiB7XG5cdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGxpc3QpIHtcblx0XHRcdGlmIChyZXQubGVuZ3RoID09PSAwIHx8IGVsZW1lbnQgIT09IHJldC5hdCgtMSkpIHtcblx0XHRcdFx0cmV0LnB1c2goZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IG1ha2VGaXhEYWIgPSAoZGF0YSwgbmF2cG9wKSA9PiB7XG5cdFx0Ly8gZ3JhYiB0aXRsZSBmcm9tIHBhcmVudCBwb3B1cCBpZiB0aGVyZSBpcyBvbmU7IGRlZmF1bHQgZXhpc3RzIGluIGNoYW5nZUxpbmtUYXJnZXRMaW5rXG5cdFx0Y29uc3QgdGl0bGVUb0VkaXQgPSBuYXZwb3AucGFyZW50UG9wdXAgJiYgbmF2cG9wLnBhcmVudFBvcHVwLmFydGljbGUudG9TdHJpbmcoKTtcblx0XHRjb25zdCBsaXN0ID0gbGlzdExpbmtzKGRhdGEsIG5hdnBvcC5vcmlnaW5hbEFydGljbGUsIHRpdGxlVG9FZGl0KTtcblx0XHRpZiAobGlzdC5sZW5ndGggPT09IDApIHtcblx0XHRcdGxvZygnbGlzdExpbmtzIHJldHVybmVkIGVtcHR5IGxpc3QnKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgaHRtbCA9IGA8aHI+JHtwb3B1cFN0cmluZygnQ2xpY2sgdG8gZGlzYW1iaWd1YXRlIHRoaXMgbGluayB0bzonKX08YnI+YDtcblx0XHRodG1sICs9IGxpc3Quam9pbignLCAnKTtcblx0XHRyZXR1cm4gaHRtbDtcblx0fTtcblx0Y29uc3QgbWFrZUZpeERhYnMgPSAod2lraVRleHQsIG5hdnBvcCkgPT4ge1xuXHRcdGlmIChcblx0XHRcdGdldFZhbHVlT2YoJ3BvcHVwRml4RGFicycpICYmXG5cdFx0XHRpc0Rpc2FtYmlnKHdpa2lUZXh0LCBuYXZwb3AuYXJ0aWNsZSkgJiZcblx0XHRcdFRpdGxlLmZyb21VUkwobG9jYXRpb24uaHJlZikubmFtZXNwYWNlSWQoKSAhPT0gcGcubnNTcGVjaWFsSWQgJiZcblx0XHRcdG5hdnBvcC5hcnRpY2xlLnRhbGtQYWdlKClcblx0XHQpIHtcblx0XHRcdHNldFBvcHVwSFRNTChtYWtlRml4RGFiKHdpa2lUZXh0LCBuYXZwb3ApLCAncG9wdXBGaXhEYWInLCBuYXZwb3AuaWROdW1iZXIpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcG9wdXBSZWRsaW5rSFRNTCA9IChhcnRpY2xlKSA9PiB7XG5cdFx0cmV0dXJuIGNoYW5nZUxpbmtUYXJnZXRMaW5rKHtcblx0XHRcdG5ld1RhcmdldDogbnVsbCxcblx0XHRcdHRleHQ6IHBvcHVwU3RyaW5nKCdyZW1vdmUgdGhpcyBsaW5rJykuc3BsaXQoJyAnKS5qb2luKCcmbmJzcDsnKSxcblx0XHRcdGhpbnQ6IHBvcHVwU3RyaW5nKCdyZW1vdmUgYWxsIGxpbmtzIHRvIHRoaXMgcGFnZSBmcm9tIHRoaXMgYXJ0aWNsZScpLFxuXHRcdFx0Y2xpY2tCdXR0b246IGdldFZhbHVlT2YoJ3BvcHVwUmVkbGlua0F1dG9DbGljaycpLFxuXHRcdFx0b2xkVGFyZ2V0OiBhcnRpY2xlLnRvU3RyaW5nKCksXG5cdFx0XHRzdW1tYXJ5OiBzaW1wbGVQcmludGYoZ2V0VmFsdWVPZigncG9wdXBSZWRsaW5rU3VtbWFyeScpLCBbYXJ0aWNsZS50b1N0cmluZygpXSksXG5cdFx0fSk7XG5cdH07XG5cdC8vIEVOREZJTEU6IGRhYi5qc1xuXHQvLyBTVEFSVEZJTEU6IGh0bWxvdXRwdXQuanNcblx0Ly8gdGhpcyBoYXMgdG8gdXNlIGEgdGltZXIgbG9vcCBhcyB3ZSBkb24ndCBrbm93IGlmIHRoZSBET00gZWxlbWVudCBleGlzdHMgd2hlbiB3ZSB3YW50IHRvIHNldCB0aGUgdGV4dFxuXHRjb25zdCBzZXRQb3B1cEhUTUwgPSBmdW5jdGlvbiBzZXRQb3B1cEhUTUwoc3RyLCBlbGVtZW50SWQsIHBvcHVwSWQsIG9uU3VjY2VzcywgYXBwZW5kKSB7XG5cdFx0aWYgKHBvcHVwSWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gY29uc29sZS5lcnJvcignW1BvcHVwc10gcG9wdXBJZCBpcyBub3QgZGVmaW5lZCBpbiBzZXRQb3B1cEhUTUwsIGh0bWw9JytzdHIuc3Vic3RyaW5nKDAsMTAwKSk7XG5cdFx0XHRwb3B1cElkID0gcGcuaWROdW1iZXI7XG5cdFx0fVxuXHRcdGNvbnN0IHBvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2VsZW1lbnRJZH0ke3BvcHVwSWR9YCk7XG5cdFx0aWYgKHBvcHVwRWxlbWVudCkge1xuXHRcdFx0aWYgKCFhcHBlbmQpIHtcblx0XHRcdFx0cG9wdXBFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGlzU3RyaW5nKHN0cikpIHtcblx0XHRcdFx0cG9wdXBFbGVtZW50LmlubmVySFRNTCArPSBzdHI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwb3B1cEVsZW1lbnQuYXBwZW5kKHN0cik7XG5cdFx0XHR9XG5cdFx0XHRpZiAob25TdWNjZXNzKSB7XG5cdFx0XHRcdG9uU3VjY2VzcygpO1xuXHRcdFx0fVxuXHRcdFx0c2V0VGltZW91dChjaGVja1BvcHVwUG9zaXRpb24sIDEwMCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Ly8gY2FsbCB0aGlzIGZ1bmN0aW9uIGFnYWluIGluIGEgbGl0dGxlIHdoaWxlLi4uXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzZXRQb3B1cEhUTUwoc3RyLCBlbGVtZW50SWQsIHBvcHVwSWQsIG9uU3VjY2Vzcyk7XG5cdFx0fSwgNjAwKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3Qgc2V0UG9wdXBUcmFpbGVyID0gKHN0ciwgaWQpID0+IHtcblx0XHRyZXR1cm4gc2V0UG9wdXBIVE1MKHN0ciwgJ3BvcHVwRGF0YScsIGlkKTtcblx0fTtcblx0Ly8gYXJncy5uYXZwb3B1cCBpcyBtYW5kYXRvcnlcblx0Ly8gb3B0aW9uYWw6IGFyZ3MucmVkaXIsIGFyZ3MucmVkaXJUYXJnZXRcblx0Ly8gRklYTUU6IHllIGdvZHMsIHRoaXMgaXMgdWdseSBzdHVmZlxuXHRjb25zdCBmaWxsRW1wdHlTcGFucyA9IChhcmdzKSA9PiB7XG5cdFx0Ly8gaWYgcmVkaXIgaXMgcHJlc2VudCBhbmQgdHJ1ZSB0aGVuIHJlZGlyVGFyZ2V0IGlzIG1hbmRhdG9yeVxuXHRcdGxldCByZWRpciA9IHRydWU7XG5cdFx0bGV0IHJjaWQ7XG5cdFx0aWYgKHR5cGVvZiBhcmdzICE9PSAnb2JqZWN0JyB8fCBhcmdzLnJlZGlyID09PSB1bmRlZmluZWQgfHwgIWFyZ3MucmVkaXIpIHtcblx0XHRcdHJlZGlyID0gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IGEgPSBhcmdzLm5hdnBvcHVwLnBhcmVudEFuY2hvcjtcblx0XHRsZXQgYXJ0aWNsZTtcblx0XHRsZXQgaGludDtcblx0XHRsZXQgb2xkaWQ7XG5cdFx0bGV0IHBhcmFtcyA9IHt9O1xuXHRcdGlmIChyZWRpciAmJiB0eXBlb2YgYXJncy5yZWRpclRhcmdldCA9PT0gdHlwZW9mIHt9KSB7XG5cdFx0XHRhcnRpY2xlID0gYXJncy5yZWRpclRhcmdldDtcblx0XHRcdC8vIGhpbnQ9YXJ0aWNsZS5oaW50VmFsdWUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJ0aWNsZSA9IG5ldyBUaXRsZSgpLmZyb21BbmNob3IoYSk7XG5cdFx0XHRoaW50ID0gYS5vcmlnaW5hbFRpdGxlIHx8IGFydGljbGUuaGludFZhbHVlKCk7XG5cdFx0XHRwYXJhbXMgPSBwYXJzZVBhcmFtcyhhLmhyZWYpO1xuXHRcdFx0b2xkaWQgPSBnZXRWYWx1ZU9mKCdwb3B1cEhpc3RvcmljYWxMaW5rcycpID8gcGFyYW1zLm9sZGlkIDogbnVsbDtcblx0XHRcdCh7cmNpZH0gPSBwYXJhbXMpO1xuXHRcdH1cblx0XHRjb25zdCB4ID0ge1xuXHRcdFx0YXJ0aWNsZSxcblx0XHRcdGhpbnQsXG5cdFx0XHRvbGRpZCxcblx0XHRcdHJjaWQsXG5cdFx0XHRuYXZwb3A6IGFyZ3MubmF2cG9wdXAsXG5cdFx0XHRwYXJhbXMsXG5cdFx0fTtcblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSBwZy5zdHJ1Y3R1cmVzW2dldFZhbHVlT2YoJ3BvcHVwU3RydWN0dXJlJyldO1xuXHRcdGlmICh0eXBlb2Ygc3RydWN0dXJlICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0c2V0UG9wdXBIVE1MKFxuXHRcdFx0XHQncG9wdXBFcnJvcicsXG5cdFx0XHRcdGBVbmtub3duIHN0cnVjdHVyZSAodGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuKTogJHtwZy5vcHRpb24ucG9wdXBTdHJ1Y3R1cmV9YCxcblx0XHRcdFx0YXJncy5uYXZwb3B1cC5pZE51bWJlclxuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3Qgc3BhbnMgPSBmbGF0dGVuKHBnLm1pc2MubGF5b3V0KTtcblx0XHRjb25zdCBudW1zcGFucyA9IHNwYW5zLmxlbmd0aDtcblx0XHRjb25zdCByZWRpcnMgPSBwZy5taXNjLnJlZGlyU3BhbnM7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBudW1zcGFuczsgKytpKSB7XG5cdFx0XHRjb25zdCBmb3VuZCA9IHJlZGlycyAmJiByZWRpcnMuaW5jbHVkZXMoc3BhbnNbaV0pO1xuXHRcdFx0Ly8gbG9nKCdyZWRpcj0nICsgcmVkaXIgKyAnLCBmb3VuZD0nICsgZm91bmQgKyAnLCBzcGFuc1tpXT0nICsgc3BhbnNbaV0pO1xuXHRcdFx0aWYgKChmb3VuZCAmJiAhcmVkaXIpIHx8ICghZm91bmQgJiYgcmVkaXIpKSB7XG5cdFx0XHRcdC8vIGxvZygnc2tpcHBpbmcgdGhpcyBzZXQgb2YgdGhlIGxvb3AnKTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzdHJ1Y3R1cmVmbiA9IHN0cnVjdHVyZVtzcGFuc1tpXV07XG5cdFx0XHRpZiAoc3RydWN0dXJlZm4gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBub3RoaW5nIHRvIGRvIGZvciB0aGlzIHN0cnVjdHVyZSBwYXJ0XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHNldGZuID0gc2V0UG9wdXBIVE1MO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRnZXRWYWx1ZU9mKCdwb3B1cEFjdGl2ZU5hdmxpbmtzJykgJiZcblx0XHRcdFx0KHNwYW5zW2ldLmluZGV4T2YoJ3BvcHVwVG9wTGlua3MnKSA9PT0gMCB8fCBzcGFuc1tpXS5pbmRleE9mKCdwb3B1cFJlZGlyVG9wTGlua3MnKSA9PT0gMClcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRmbiA9IHNldFBvcHVwVGlwc0FuZEhUTUw7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHR5cGVvZiBzdHJ1Y3R1cmVmbikge1xuXHRcdFx0XHRjYXNlICdmdW5jdGlvbic6XG5cdFx0XHRcdFx0bG9nKGBydW5uaW5nICR7c3BhbnNbaV19KHtcblx0XHRcdFx0XHRcdGFydGljbGU6JHt4LmFydGljbGV9LCBoaW50OiR7eC5oaW50fSwgb2xkaWQ6ICR7eC5vbGRpZH19KWApO1xuXHRcdFx0XHRcdHNldGZuKHN0cnVjdHVyZWZuKHgpLCBzcGFuc1tpXSwgYXJncy5uYXZwb3B1cC5pZE51bWJlcik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3N0cmluZyc6XG5cdFx0XHRcdFx0c2V0Zm4oc3RydWN0dXJlZm4sIHNwYW5zW2ldLCBhcmdzLm5hdnBvcHVwLmlkTnVtYmVyKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRlcnJsb2coYHVua25vd24gdGhpbmcgd2l0aCBsYWJlbCAke3NwYW5zW2ldfSAoc3BhbiBpbmRleCB3YXMgJHtpfSlgKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdC8vIGZsYXR0ZW4gYW4gYXJyYXlcblx0Y29uc3QgZmxhdHRlbiA9IGZ1bmN0aW9uIGZsYXR0ZW4obGlzdCwgc3RhcnQpIHtcblx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0c3RhcnQgPSAwO1xuXHRcdH1cblx0XHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAodHlwZW9mIGxpc3RbaV0gPT09IHR5cGVvZiBbXSkge1xuXHRcdFx0XHRyZXR1cm4gWy4uLnJldCwgLi4uZmxhdHRlbihsaXN0W2ldKSwgLi4uZmxhdHRlbihsaXN0LCBpICsgMSldO1xuXHRcdFx0fVxuXHRcdFx0cmV0LnB1c2gobGlzdFtpXSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdC8vIEdlbmVyYXRlIGh0bWwgZm9yIHdob2xlIHBvcHVwXG5cdGNvbnN0IHBvcHVwSFRNTCA9IGZ1bmN0aW9uIHBvcHVwSFRNTChhKSB7XG5cdFx0Z2V0VmFsdWVPZigncG9wdXBTdHJ1Y3R1cmUnKTtcblx0XHRjb25zdCBzdHJ1Y3R1cmUgPSBwZy5zdHJ1Y3R1cmVzW3BnLm9wdGlvbi5wb3B1cFN0cnVjdHVyZV07XG5cdFx0aWYgKHR5cGVvZiBzdHJ1Y3R1cmUgIT09ICdvYmplY3QnKSB7XG5cdFx0XHQvLyByZXR1cm4gJ1Vua25vd24gc3RydWN0dXJlOiAnK3BnLm9wdGlvbi5wb3B1cFN0cnVjdHVyZTtcblx0XHRcdC8vIG92ZXJyaWRlIHVzZXIgY2hvaWNlXG5cdFx0XHRwZy5vcHRpb24ucG9wdXBTdHJ1Y3R1cmUgPSBwZy5vcHRpb25EZWZhdWx0LnBvcHVwU3RydWN0dXJlO1xuXHRcdFx0cmV0dXJuIHBvcHVwSFRNTChhKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBzdHJ1Y3R1cmUucG9wdXBMYXlvdXQgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiAnQmFkIGxheW91dCc7XG5cdFx0fVxuXHRcdHBnLm1pc2MubGF5b3V0ID0gc3RydWN0dXJlLnBvcHVwTGF5b3V0KCk7XG5cdFx0cGcubWlzYy5yZWRpclNwYW5zID0gdHlwZW9mIHN0cnVjdHVyZS5wb3B1cFJlZGlyU3BhbnMgPT09ICdmdW5jdGlvbicgPyBzdHJ1Y3R1cmUucG9wdXBSZWRpclNwYW5zKCkgOiBbXTtcblx0XHRyZXR1cm4gbWFrZUVtcHR5U3BhbnMocGcubWlzYy5sYXlvdXQsIGEubmF2cG9wdXApO1xuXHR9O1xuXHRjb25zdCBtYWtlRW1wdHlTcGFucyA9IGZ1bmN0aW9uIG1ha2VFbXB0eVNwYW5zKGxpc3QsIG5hdnBvcCkge1xuXHRcdGxldCByZXQgPSAnJztcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0aWYgKHR5cGVvZiBlbGVtZW50ID09PSB0eXBlb2YgJycpIHtcblx0XHRcdFx0cmV0ICs9IGVtcHR5U3BhbkhUTUwoZWxlbWVudCwgbmF2cG9wLmlkTnVtYmVyLCAnZGl2Jyk7XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSB0eXBlb2YgW10gJiYgZWxlbWVudC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJldCA9IHJldC5zcGxpdCgvKDxcXC9bXj5dKj8+JCkvKS5qb2luKG1ha2VFbXB0eVNwYW5zKGVsZW1lbnQsIG5hdnBvcCkpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gdHlwZW9mIHt9ICYmIGVsZW1lbnQubm9kZVR5cGUpIHtcblx0XHRcdFx0cmV0ICs9IGVtcHR5U3BhbkhUTUwoZWxlbWVudC5uYW1lLCBuYXZwb3AuaWROdW1iZXIsIGVsZW1lbnQubm9kZVR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBlbXB0eVNwYW5IVE1MID0gZnVuY3Rpb24gZW1wdHlTcGFuSFRNTChuYW1lLCBpZCwgdGFnLCBjbGFzc25hbWUpIHtcblx0XHR0YWcgfHw9ICdzcGFuJztcblx0XHRjbGFzc25hbWUgfHw9IGVtcHR5U3BhbkhUTUwuY2xhc3NBbGlhc2VzW25hbWVdO1xuXHRcdGNsYXNzbmFtZSB8fD0gbmFtZTtcblx0XHRpZiAobmFtZSA9PT0gZ2V0VmFsdWVPZigncG9wdXBEcmFnSGFuZGxlJykpIHtcblx0XHRcdGNsYXNzbmFtZSArPSAnIHBvcHVwRHJhZ0hhbmRsZSc7XG5cdFx0fVxuXHRcdHJldHVybiBzaW1wbGVQcmludGYoJzwlcyBpZD1cIiVzXCIgY2xhc3M9XCIlc1wiPjwvJXM+JywgW3RhZywgbmFtZSArIGlkLCBjbGFzc25hbWUsIHRhZ10pO1xuXHR9O1xuXHRlbXB0eVNwYW5IVE1MLmNsYXNzQWxpYXNlcyA9IHtcblx0XHRwb3B1cFNlY29uZFByZXZpZXc6ICdwb3B1cFByZXZpZXcnLFxuXHR9O1xuXHQvLyBnZW5lcmF0ZSBodG1sIGZvciBwb3B1cCBpbWFnZVxuXHQvLyA8YSBpZD1cInBvcHVwSW1hZ2VMaW5rblwiPjxpbWcgaWQ9XCJwb3B1cEltYWdlblwiPlxuXHQvLyB3aGVyZSBuPWlkTnVtYmVyXG5cdGNvbnN0IGltYWdlSFRNTCA9IChfYXJ0aWNsZSwgaWROdW1iZXIpID0+IHtcblx0XHRyZXR1cm4gc2ltcGxlUHJpbnRmKFxuXHRcdFx0JzxhIGlkPVwicG9wdXBJbWFnZUxpbmskMVwiPicgK1xuXHRcdFx0XHQnPGltZyBhbGlnbj1cInJpZ2h0XCIgdmFsaWduPVwidG9wXCIgaWQ9XCJwb3B1cEltZyQxXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj48L2ltZz4nICtcblx0XHRcdFx0JzwvYT4nLFxuXHRcdFx0W2lkTnVtYmVyXVxuXHRcdCk7XG5cdH07XG5cdGNvbnN0IHBvcFRpcHNTb29uRm4gPSAoaWQsIHdoZW4sIHBvcERhdGEpID0+IHtcblx0XHR3aGVuIHx8PSAyNTA7XG5cdFx0Y29uc3QgcG9wVGlwcyA9ICgpID0+IHtcblx0XHRcdHNldHVwVG9vbHRpcHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCksIGZhbHNlLCB0cnVlLCBwb3BEYXRhKTtcblx0XHR9O1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRzZXRUaW1lb3V0KHBvcFRpcHMsIHdoZW4sIHBvcERhdGEpO1xuXHRcdH07XG5cdH07XG5cdGNvbnN0IHNldFBvcHVwVGlwc0FuZEhUTUwgPSAoaHRtbCwgZGl2bmFtZSwgaWRudW1iZXIsIHBvcERhdGEpID0+IHtcblx0XHRzZXRQb3B1cEhUTUwoXG5cdFx0XHRodG1sLFxuXHRcdFx0ZGl2bmFtZSxcblx0XHRcdGlkbnVtYmVyLFxuXHRcdFx0Z2V0VmFsdWVPZigncG9wdXBTdWJwb3B1cHMnKSA/IHBvcFRpcHNTb29uRm4oZGl2bmFtZSArIGlkbnVtYmVyLCBudWxsLCBwb3BEYXRhKSA6IG51bGxcblx0XHQpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBodG1sb3V0cHV0LmpzXG5cdC8vIFNUQVJURklMRTogbW91c2VvdXQuanNcblx0Ly8gZnV6enkgY2hlY2tzXG5cdGNvbnN0IGZ1enp5Q3Vyc29yT2ZmTWVudXMgPSAoX3gsIF95LCBfZnV6eiwgcGFyZW50KSA9PiB7XG5cdFx0aWYgKCFwYXJlbnQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCB1bHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgndWwnKTtcblx0XHRmb3IgKGNvbnN0IHVsIG9mIHVscykge1xuXHRcdFx0aWYgKHVsLmNsYXNzTmFtZSA9PT0gJ3BvcHVwX21lbnUnICYmIHVsLm9mZnNldFdpZHRoID4gMCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9IC8vIGVsc2UgeyBkb2N1bWVudC50aXRsZSs9Jy4nOyB9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXHRjb25zdCBjaGVja1BvcHVwUG9zaXRpb24gPSAoKSA9PiB7XG5cdFx0Ly8gc3RvcCB0aGUgcG9wdXAgcnVubmluZyBvZmYgdGhlIHJpZ2h0IG9mIHRoZSBzY3JlZW5cblx0XHQvLyBGSVhNRSBhdm9pZCBwZy5jdXJyZW50Lmxpbmtcblx0XHRpZiAocGcuY3VycmVudC5saW5rICYmIHBnLmN1cnJlbnQubGluay5uYXZwb3B1cCkge1xuXHRcdFx0cGcuY3VycmVudC5saW5rLm5hdnBvcHVwLmxpbWl0SG9yaXpvbnRhbFBvc2l0aW9uKCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBtb3VzZU91dFdpa2lMaW5rID0gZnVuY3Rpb24gbW91c2VPdXRXaWtpTGluaygpIHtcblx0XHQvLyBjb25zb2xlICgnbW91c2VPdXRXaWtpTGluaycpO1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHJlbW92ZU1vZGlmaWVyS2V5TGlzdGVuZXIoc2VsZik7XG5cdFx0aWYgKHNlbGYubmF2cG9wdXAgPT09IG51bGwgfHwgc2VsZi5uYXZwb3B1cCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghc2VsZi5uYXZwb3B1cC5pc1Zpc2libGUoKSkge1xuXHRcdFx0c2VsZi5uYXZwb3B1cC5iYW5pc2goKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmVzdG9yZVRpdGxlKHNlbGYpO1xuXHRcdE5hdnBvcHVwLnRyYWNrZXIuYWRkSG9vayhwb3NDaGVja2VySG9vayhzZWxmLm5hdnBvcHVwKSk7XG5cdH07XG5cdGNvbnN0IHBvc0NoZWNrZXJIb29rID0gKG5hdnBvcCkgPT4ge1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRpZiAoIW5hdnBvcC5pc1Zpc2libGUoKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLyogcmVtb3ZlIHRoaXMgaG9vayAqL1xuXHRcdFx0fVxuXHRcdFx0aWYgKE5hdnBvcHVwLnRyYWNrZXIuZGlydHkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qge3h9ID0gTmF2cG9wdXAudHJhY2tlcjtcblx0XHRcdGNvbnN0IHt5fSA9IE5hdnBvcHVwLnRyYWNrZXI7XG5cdFx0XHRjb25zdCBtb3VzZU92ZXJOYXZwb3AgPVxuXHRcdFx0XHRuYXZwb3AuaXNXaXRoaW4oeCwgeSwgbmF2cG9wLmZ1enosIG5hdnBvcC5tYWluRGl2KSB8fFxuXHRcdFx0XHQhZnV6enlDdXJzb3JPZmZNZW51cyh4LCB5LCBuYXZwb3AuZnV6eiwgbmF2cG9wLm1haW5EaXYpO1xuXHRcdFx0Ly8gRklYTUUgaXQnZCBiZSBwcmV0dGllciB0byBkbyB0aGlzIGludGVybmFsIHRvIHRoZSBOYXZwb3B1cCBvYmplY3RzXG5cdFx0XHRsZXQgdCA9IGdldFZhbHVlT2YoJ3BvcHVwSGlkZURlbGF5Jyk7XG5cdFx0XHRpZiAodCkge1xuXHRcdFx0XHR0ICo9IDEwMDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXQpIHtcblx0XHRcdFx0aWYgKCFtb3VzZU92ZXJOYXZwb3ApIHtcblx0XHRcdFx0XHRpZiAobmF2cG9wLnBhcmVudEFuY2hvcikge1xuXHRcdFx0XHRcdFx0cmVzdG9yZVRpdGxlKG5hdnBvcC5wYXJlbnRBbmNob3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuYXZwb3AuYmFuaXNoKCk7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7IC8qIHJlbW92ZSB0aGlzIGhvb2sgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyB3ZSBoYXZlIGEgaGlkZSBkZWxheSBzZXRcblx0XHRcdGNvbnN0IGQgPSBEYXRlLm5vdygpO1xuXHRcdFx0aWYgKCFuYXZwb3AubW91c2VMZWF2aW5nVGltZSkge1xuXHRcdFx0XHRuYXZwb3AubW91c2VMZWF2aW5nVGltZSA9IGQ7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChtb3VzZU92ZXJOYXZwb3ApIHtcblx0XHRcdFx0bmF2cG9wLm1vdXNlTGVhdmluZ1RpbWUgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZCAtIG5hdnBvcC5tb3VzZUxlYXZpbmdUaW1lID4gdCkge1xuXHRcdFx0XHRuYXZwb3AubW91c2VMZWF2aW5nVGltZSA9IG51bGw7XG5cdFx0XHRcdG5hdnBvcC5iYW5pc2goKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7IC8qIHJlbW92ZSB0aGlzIGhvb2sgKi9cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBydW5TdG9wUG9wdXBUaW1lciA9IChuYXZwb3ApID0+IHtcblx0XHQvLyBhdCB0aGlzIHBvaW50LCB3ZSBzaG91bGQgaGF2ZSBsZWZ0IHRoZSBsaW5rIGJ1dCByZW1haW4gd2l0aGluIHRoZSBwb3B1cFxuXHRcdC8vIHNvIHdlIGNhbGwgdGhpcyBmdW5jdGlvbiBhZ2FpbiB1bnRpbCB3ZSBsZWF2ZSB0aGUgcG9wdXAuXG5cdFx0aWYgKCFuYXZwb3Auc3RvcFBvcHVwVGltZXIpIHtcblx0XHRcdG5hdnBvcC5zdG9wUG9wdXBUaW1lciA9IHNldEludGVydmFsKHBvc0NoZWNrZXJIb29rKG5hdnBvcCksIDUwMCk7XG5cdFx0XHRuYXZwb3AuYWRkSG9vayhcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwobmF2cG9wLnN0b3BQb3B1cFRpbWVyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0J2hpZGUnLFxuXHRcdFx0XHQnYmVmb3JlJ1xuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdC8vIEVOREZJTEU6IG1vdXNlb3V0LmpzXG5cdC8vIFNUQVJURklMRTogcHJldmlld21ha2VyLmpzXG5cdC8qKlxuXHQgKiBAZmlsZW92ZXJ2aWV3XG5cdCAqIERlZmluZXMgdGhlIHtAc291cmNlIFByZXZpZXdtYWtlcn0gb2JqZWN0LCB3aGljaCBnZW5lcmF0ZXMgc2hvcnQgcHJldmlld3MgZnJvbSB3aWtpIG1hcmt1cC5cblx0ICovXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IFByZXZpZXdtYWtlclxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQGNsYXNzIFRoZSBQcmV2aWV3bWFrZXIgY2xhc3MuIFVzZSBhbiBpbnN0YW5jZSBvZiB0aGlzIHRvIGdlbmVyYXRlIHNob3J0IHByZXZpZXdzIGZyb20gV2lraXRleHQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpVGV4dCBUaGUgV2lraXRleHQgc291cmNlIG9mIHRoZSBwYWdlIHdlIHdpc2ggdG8gcHJldmlldy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmwgVGhlIHVybCB3ZSBzaG91bGQgcHJlcGVuZCB3aGVuIGNyZWF0aW5nIHJlbGF0aXZlIHVybHMuXG5cdCAqIEBwYXJhbSB7TmF2cG9wdXB9IG93bmVyIFRoZSBuYXZwb3AgYXNzb2NpYXRlZCB0byB0aGlzIHByZXZpZXcgZ2VuZXJhdG9yXG5cdCAqL1xuXHRjbGFzcyBQcmV2aWV3bWFrZXIge1xuXHRcdGNvbnN0cnVjdG9yKHdpa2lUZXh0LCBiYXNlVXJsLCBvd25lcikge1xuXHRcdFx0LyoqIFRoZSB3aWtpdGV4dCB3aGljaCBpcyBtYW5pcHVsYXRlZCB0byBnZW5lcmF0ZSB0aGUgcHJldmlldy4gKi9cblx0XHRcdHRoaXMub3JpZ2luYWxEYXRhID0gd2lraVRleHQ7XG5cdFx0XHR0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xuXHRcdFx0dGhpcy5vd25lciA9IG93bmVyO1xuXHRcdFx0dGhpcy5tYXhDaGFyYWN0ZXJzID0gZ2V0VmFsdWVPZigncG9wdXBNYXhQcmV2aWV3Q2hhcmFjdGVycycpO1xuXHRcdFx0dGhpcy5tYXhTZW50ZW5jZXMgPSBnZXRWYWx1ZU9mKCdwb3B1cE1heFByZXZpZXdTZW50ZW5jZXMnKTtcblx0XHRcdHRoaXMuc2V0RGF0YSgpO1xuXHRcdH1cblx0XHRzZXREYXRhKCkge1xuXHRcdFx0Y29uc3QgbWF4U2l6ZSA9IE1hdGgubWF4KDFlNCwgMiAqIHRoaXMubWF4Q2hhcmFjdGVycyk7XG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLm9yaWdpbmFsRGF0YS5zbGljZSgwLCBNYXRoLm1heCgwLCBtYXhTaXplKSk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBIVE1MIGNvbW1lbnRzXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxDb21tZW50cygpIHtcblx0XHRcdC8vIHRoaXMgYWxzbyBraWxscyBvbmUgdHJhaWxpbmcgbmV3bGluZSwgZWcgW1tkaWFteW9dXVxuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL148IS0tW14kXSo/LS0+XFxufFxcbjwhLS1bXiRdKj8tLT4oPz1cXG4pfDwhLS1bXiRdKj8tLT4vZywgJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxEaXZzKCkge1xuXHRcdFx0Ly8gc2F5IGdvb2RieWUsIGRpdnMgKGNhbiBiZSBuZXN0ZWQsIHNvIHVzZSAqIG5vdCAqPylcblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC88ICpkaXZbXj5dKiAqPltcXFNcXHNdKj88ICpcXC8gKmRpdiAqPi9naSwgJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxHYWxsZXJpZXMoKSB7XG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvPCAqZ2FsbGVyeVtePl0qICo+W1xcU1xcc10qPzwgKlxcLyAqZ2FsbGVyeSAqPi9naSwgJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gb3BlbmluZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBjbG9zaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHN1Ym9wZW5pbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gc3ViY2xvc2luZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSByZXBsXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsKG9wZW5pbmcsIGNsb3NpbmcsIHN1Ym9wZW5pbmcsIHN1YmNsb3NpbmcsIHJlcGwpIHtcblx0XHRcdGxldCBvbGRrID0gdGhpcy5kYXRhO1xuXHRcdFx0bGV0IGsgPSBQcmV2aWV3bWFrZXIua2lsbFN0dWZmKHRoaXMuZGF0YSwgb3BlbmluZywgY2xvc2luZywgc3Vib3BlbmluZywgc3ViY2xvc2luZywgcmVwbCk7XG5cdFx0XHR3aGlsZSAoay5sZW5ndGggPCBvbGRrLmxlbmd0aCkge1xuXHRcdFx0XHRvbGRrID0gaztcblx0XHRcdFx0ayA9IFByZXZpZXdtYWtlci5raWxsU3R1ZmYoaywgb3BlbmluZywgY2xvc2luZywgc3Vib3BlbmluZywgc3ViY2xvc2luZywgcmVwbCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRhdGEgPSBrO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gdHh0XG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IG9wZW5pbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gY2xvc2luZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBzdWJvcGVuaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHN1YmNsb3Npbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gcmVwbFxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0c3RhdGljIGtpbGxTdHVmZih0eHQsIG9wZW5pbmcsIGNsb3NpbmcsIHN1Ym9wZW5pbmcsIHN1YmNsb3NpbmcsIHJlcGwpIHtcblx0XHRcdGNvbnN0IG9wID0gUHJldmlld21ha2VyLm1ha2VSZWdleHAob3BlbmluZyk7XG5cdFx0XHRjb25zdCBjbCA9IFByZXZpZXdtYWtlci5tYWtlUmVnZXhwKGNsb3NpbmcsICdeJyk7XG5cdFx0XHRjb25zdCBzYiA9IHN1Ym9wZW5pbmcgPyBQcmV2aWV3bWFrZXIubWFrZVJlZ2V4cChzdWJvcGVuaW5nLCAnXicpIDogbnVsbDtcblx0XHRcdGNvbnN0IHNjID0gc3ViY2xvc2luZyA/IFByZXZpZXdtYWtlci5tYWtlUmVnZXhwKHN1YmNsb3NpbmcsICdeJykgOiBjbDtcblx0XHRcdGlmICghb3AgfHwgIWNsKSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KCdOYXZpZ2F0aW9uIFBvcHVwcyBlcnJvcjogb3Agb3IgY2wgaXMgbnVsbCEgc29tZXRoaW5nIGlzIHdyb25nLicsIHtcblx0XHRcdFx0XHR0YWc6ICdwb3B1cHMnLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW9wLnRlc3QodHh0KSkge1xuXHRcdFx0XHRyZXR1cm4gdHh0O1xuXHRcdFx0fVxuXHRcdFx0bGV0IHJldCA9ICcnO1xuXHRcdFx0Y29uc3Qgb3BSZXN1bHQgPSBvcC5leGVjKHR4dCk7XG5cdFx0XHRyZXQgPSB0eHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgb3BSZXN1bHQuaW5kZXgpKTtcblx0XHRcdHR4dCA9IHR4dC5zbGljZShNYXRoLm1heCgwLCBvcFJlc3VsdC5pbmRleCArIG9wUmVzdWx0WzBdLmxlbmd0aCkpO1xuXHRcdFx0bGV0IGRlcHRoID0gMTtcblx0XHRcdHdoaWxlICh0eHQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRsZXQgcmVtb3ZhbCA9IDA7XG5cdFx0XHRcdGlmIChkZXB0aCA9PT0gMSAmJiBjbC50ZXN0KHR4dCkpIHtcblx0XHRcdFx0XHRkZXB0aC0tO1xuXHRcdFx0XHRcdHJlbW92YWwgPSBjbC5leGVjKHR4dClbMF0ubGVuZ3RoO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGRlcHRoID4gMSAmJiBzYy50ZXN0KHR4dCkpIHtcblx0XHRcdFx0XHRkZXB0aC0tO1xuXHRcdFx0XHRcdHJlbW92YWwgPSBzYy5leGVjKHR4dClbMF0ubGVuZ3RoO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNiICYmIHNiLnRlc3QodHh0KSkge1xuXHRcdFx0XHRcdGRlcHRoKys7XG5cdFx0XHRcdFx0cmVtb3ZhbCA9IHNiLmV4ZWModHh0KVswXS5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVtb3ZhbCB8fD0gMTtcblx0XHRcdFx0dHh0ID0gdHh0LnNsaWNlKE1hdGgubWF4KDAsIHJlbW92YWwpKTtcblx0XHRcdFx0aWYgKGRlcHRoID09PSAwKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQgKyAocmVwbCB8fCAnJykgKyB0eHQ7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0geFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gcHJlZml4XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBzdWZmaXhcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHN0YXRpYyBtYWtlUmVnZXhwKHgsIHByZWZpeCwgc3VmZml4KSB7XG5cdFx0XHRwcmVmaXggfHw9ICcnO1xuXHRcdFx0c3VmZml4IHx8PSAnJztcblx0XHRcdGxldCByZVN0ciA9ICcnO1xuXHRcdFx0bGV0IGZsYWdzID0gJyc7XG5cdFx0XHRpZiAoaXNTdHJpbmcoeCkpIHtcblx0XHRcdFx0cmVTdHIgPSBwcmVmaXggKyBsaXRlcmFsaXplUmVnZXgoeCkgKyBzdWZmaXg7XG5cdFx0XHR9IGVsc2UgaWYgKGlzUmVnRXhwKHgpKSB7XG5cdFx0XHRcdGxldCBzID0geC50b1N0cmluZygpLnNsaWNlKDEpO1xuXHRcdFx0XHRjb25zdCBzcCA9IHMuc3BsaXQoJy8nKTtcblx0XHRcdFx0ZmxhZ3MgPSBzcC5hdCgtMSk7XG5cdFx0XHRcdHNwW3NwLmxlbmd0aCAtIDFdID0gJyc7XG5cdFx0XHRcdHMgPSBzcC5qb2luKCcvJyk7XG5cdFx0XHRcdHMgPSBzLnNsaWNlKDAsIE1hdGgubWF4KDAsIHMubGVuZ3RoIC0gMSkpO1xuXHRcdFx0XHRyZVN0ciA9IHByZWZpeCArIHMgKyBzdWZmaXg7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2coJ21ha2VSZWdleHAgZmFpbGVkJyk7XG5cdFx0XHR9XG5cdFx0XHRsb2coYG1ha2VSZWdleHA6IGdvdCByZVN0cj0ke3JlU3RyfSwgZmxhZ3M9JHtmbGFnc31gKTtcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKHJlU3RyLCBmbGFncyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbEJveFRlbXBsYXRlcygpIHtcblx0XHRcdC8vIHRheG9ib3ggcmVtb3ZhbC4uLiBpbiBmYWN0LCB0aGVyZSdzIGEgc2F1ZGlwcmluY2Vib3hfYmVnaW4sIHNvIGxldCdzIGJlIG1vcmUgZ2VuZXJhbFxuXHRcdFx0Ly8gYWxzbywgaGF2ZSBmbG9hdF9iZWdpbiwgLi4uIGZsb2F0X2VuZFxuXHRcdFx0dGhpcy5raWxsKC97e1teXFxze3x9XSo/KGZsb2F0fGJveClbIF9dKGJlZ2lufHN0YXJ0KS9pLCAvfX1cXHMqLywgJ3t7Jyk7XG5cdFx0XHQvLyBpbmZvYm94ZXMgZXRjXG5cdFx0XHQvLyBmcm9tIFp5eHc6IGtpbGwgZnJhbWVzIHRvb1xuXHRcdFx0dGhpcy5raWxsKC97e1teXFxze3x9XSo/KGluZm9ib3h8ZWxlbWVudGJveHxmcmFtZSlbIF9dL2ksIC99fVxccyovLCAne3snKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsVGVtcGxhdGVzKCkge1xuXHRcdFx0dGhpcy5raWxsKCd7eycsICd9fScsICd7JywgJ30nLCAnICcpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxUYWJsZXMoKSB7XG5cdFx0XHQvLyB0YWJsZXMgYXJlIGJhZCwgdG9vXG5cdFx0XHQvLyB0aGlzIGNhbiBiZSBzbG93LCBidXQgaXQncyBhbiBpbnByb3ZlbWVudCBvdmVyIGEgYnJvd3NlciBoYW5nXG5cdFx0XHQvLyB0b3J0dXJlIHRlc3Q6IFtbQ29tcGFyaXNvbl9vZl9JbnRlbF9DZW50cmFsX1Byb2Nlc3NpbmdfVW5pdHNdXVxuXHRcdFx0dGhpcy5raWxsKCd7fCcsIC9cXHx9XFxzKi8sICd7fCcpO1xuXHRcdFx0dGhpcy5raWxsKC88dGFibGUuKj8+L2ksIC88XFwvdGFibGUuKj8+L2ksIC88dGFibGUuKj8+L2kpO1xuXHRcdFx0Ly8gcmVtb3ZlIGxpbmVzIHN0YXJ0aW5nIHdpdGggYSBwaXBlIGZvciB0aGUgaGVsbCBvZiBpdCAoPylcblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eXFx8LiokL2dtLCAnJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbEltYWdlcygpIHtcblx0XHRcdGNvbnN0IGZvcmJpZGRlbk5hbWVzcGFjZUFsaWFzZXMgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgW2xvY2FsaXplZE5hbWVzcGFjZUxjLCBuYW1lc3BhY2VJZF0gb2YgT2JqZWN0LmVudHJpZXMobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VJZHMnKSkpIHtcblx0XHRcdFx0aWYgKG5hbWVzcGFjZUlkICE9PSBwZy5uc0ltYWdlSWQgJiYgbmFtZXNwYWNlSWQgIT09IHBnLm5zQ2F0ZWdvcnlJZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3JiaWRkZW5OYW1lc3BhY2VBbGlhc2VzLnB1c2gobG9jYWxpemVkTmFtZXNwYWNlTGMuc3BsaXQoJyAnKS5qb2luKCdbIF9dJykpOyAvLyB0b2RvOiBlc2NhcGUgcmVnZXhwIGZyYWdtZW50cyFcblx0XHRcdH1cblx0XHRcdC8vIGltYWdlcyBhbmQgY2F0ZWdvcmllcyBhcmUgYSBub25vXG5cdFx0XHR0aGlzLmtpbGwobmV3IFJlZ0V4cChgW1tdW1tdXFxcXHMqKCR7Zm9yYmlkZGVuTmFtZXNwYWNlQWxpYXNlcy5qb2luKCd8Jyl9KVxcXFxzKjpgLCAnaScpLCAvXV1cXHMqLywgJ1snLCAnXScpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxIVE1MKCkge1xuXHRcdFx0Ly8ga2lsbCA8cmVmIC4uLj4uLi48L3JlZj5cblx0XHRcdHRoaXMua2lsbCgvPHJlZlxcYlteLz5dKj8+L2ksIC88XFwvcmVmPi9pKTtcblx0XHRcdC8vIGxldCdzIGFsc28gZGVsZXRlIGVudGlyZSBsaW5lcyBzdGFydGluZyB3aXRoIDwuIGl0J3Mgd29ydGggYSB0cnkuXG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvKF58XFxuKSAqPC4qL2csICdcXG4nKTtcblx0XHRcdC8vIGFuZCB0aG9zZSBwZXNreSBodG1sIHRhZ3MsIGJ1dCBub3Qgbm93aWtpIG9yIGJsb2NrcXVvdGUgdGFnc1xuXHRcdFx0Y29uc3Qgc3BsaXR0ZWQgPSB0aGlzLmRhdGEuc3BsaXQoLyg8W1xcV1xcd10qPyg/Oj58JHwoPz08KSkpLyk7XG5cdFx0XHRjb25zdCBsZW4gPSBzcGxpdHRlZC5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSArPSAyKSB7XG5cdFx0XHRcdHN3aXRjaCAoc3BsaXR0ZWRbaV0pIHtcblx0XHRcdFx0XHRjYXNlICc8bm8nLmNvbmNhdCgnd2lraScsICc+Jyk6XG5cdFx0XHRcdFx0Y2FzZSAnPC9ubycuY29uY2F0KCd3aWtpJywgJz4nKTpcblx0XHRcdFx0XHRjYXNlICc8YmxvY2snLmNvbmNhdCgncXVvdGUnLCAnPicpOlxuXHRcdFx0XHRcdGNhc2UgJzwvYmxvY2snLmNvbmNhdCgncXVvdGUnLCAnPicpOlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHNwbGl0dGVkW2ldID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuZGF0YSA9IHNwbGl0dGVkLmpvaW4oJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxDaHVua3MoKSB7XG5cdFx0XHQvLyBoZXVyaXN0aWNzIGFsZXJ0XG5cdFx0XHQvLyBjaHVua3Mgb2YgaXRhbGljIHRleHQ/IHlvdSBjcmF6eSwgbWFuP1xuXHRcdFx0Y29uc3QgaXRhbGljQ2h1bmtSZWdleCA9IC8oKF58XFxuKVxccyo6KlxccyonJ1teJ10oW14nXXwnJyd8J1teJ10pezIwfSgufFxcblteXFxuXSkqJydbXFxzIS4/XSpcXG4pKy9nO1xuXHRcdFx0Ly8ga2VlcCBzdHVmZiBzZXBhcmF0ZWQsIHRob3VnaCwgc28gc3RpY2sgaW4gXFxuIChmaXhlcyBbW1VuaW9uIEphY2tdXT9cblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKGl0YWxpY0NodW5rUmVnZXgsICdcXG4nKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRtb3B1cCgpIHtcblx0XHRcdC8vIHdlIHNpbXBseSAqY2FuJ3QqIGJlIGRvaW5nIHdpdGggaG9yaXpvbnRhbCBydWxlcyByaWdodCBub3dcblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eLXs0LH0vZ20sICcnKTtcblx0XHRcdC8vIG5vIGluZGVudGVkIGxpbmVzXG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvKF58XFxuKSAqOlteXFxuXSovZywgJycpO1xuXHRcdFx0Ly8gcmVwbGFjZSBfX1RPQ19fLCBfX05PVE9DX18gYW5kIHdoYXRldmVyIGVsc2UgdGhlcmUgaXNcblx0XHRcdC8vIHRoaXMnbGwgcHJvYmFibHkgZG9cblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eX19bX2Etel0qX18gKiQvZ2ltLCAnJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0Zmlyc3RCaXQoKSB7XG5cdFx0XHQvLyBkb250J3QgYmUgZ2l2aW4nIG1lIG5vIHN1YnNlcXVlbnQgcGFyYWdyYXBocywgeW91IGhlYXIgbWU/XG5cdFx0XHQvLyAvIGZpcnN0IHdlIFwibm9ybWFsaXplXCIgc2VjdGlvbiBoZWFkaW5ncywgcmVtb3Zpbmcgd2hpdGVzcGFjZSBhZnRlciwgYWRkaW5nIGJlZm9yZVxuXHRcdFx0bGV0IGQgPSB0aGlzLmRhdGE7XG5cdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBQcmV2aWV3Q3V0SGVhZGluZ3MnKSkge1xuXHRcdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXFxzKig9PStbXj1dKj09KylcXHMqL2csICdcXG5cXG4kMSAnKTtcblx0XHRcdFx0Ly8gLyB0aGVuIHdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBwYXJhZ3JhcGggYnJlYWtzIHdob3NlIHRleHQgZW5kcyBiYWRseVxuXHRcdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvKFs6O10pICpcXG57Mix9L2csICckMVxcbicpO1xuXHRcdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXlxccyovLCAnJyk7XG5cdFx0XHRcdGNvbnN0IHN0dWZmID0gL14oW15cXG5dfFxcblxcUykqLy5leGVjKHRoaXMuZGF0YSk7XG5cdFx0XHRcdGlmIChzdHVmZikge1xuXHRcdFx0XHRcdFtkXSA9IHN0dWZmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBQcmV2aWV3Rmlyc3RQYXJPbmx5JykpIHtcblx0XHRcdFx0XHRkID0gdGhpcy5kYXRhO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIC8gbm93IHB1dCBcXG5cXG4gYWZ0ZXIgc2VjdGlvbnMgc28gdGhhdCBidWxsZXRzIGFuZCBudW1iZXJlZCBsaXN0cyB3b3JrXG5cdFx0XHRcdGQgPSBkLnJlcGxhY2UoLyg9PStbXj1dKj09KylcXHMqL2csICckMVxcblxcbicpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU3BsaXQgc2VudGVuY2VzLiBTdXBlcmZsdW91cyBzZW50ZW5jZXMgYXJlIFJJR0hUIE9VVC5cblx0XHRcdC8vIG5vdGU6IGV4YWN0bHkgMSBzZXQgb2YgcGFyZW5zIGhlcmUgbmVlZGVkIHRvIG1ha2UgdGhlIHNsaWNlIHdvcmtcblx0XHRcdGQgPSBkLnNwbGl0KC8oWyEuP10rW1wiJ10qXFxzKS9nKTtcblx0XHRcdC8vIGxlYWRpbmcgc3BhY2UgaXMgYmFkLCBtbWtheT9cblx0XHRcdGRbMF0gPSBkWzBdLnJlcGxhY2UoL15cXHMqLywgJycpO1xuXHRcdFx0Y29uc3Qgbm90U2VudGVuY2VFbmRzID0gLyhbXi5dW2Etel1cXC4gKlthLXpdfGV0Y3xzaWN8ZHJ8bXJ8bXJzfG1zfHN0fG5vfG9wfGNpdHxcXFtbXlxcXV0qfFxcc1thLXpdKSQvaTtcblx0XHRcdGQgPSB0aGlzLmZpeFNlbnRlbmNlRW5kcyhkLCBub3RTZW50ZW5jZUVuZHMpO1xuXHRcdFx0dGhpcy5mdWxsTGVuZ3RoID0gZC5qb2luKCcnKS5sZW5ndGg7XG5cdFx0XHRsZXQgbiA9IHRoaXMubWF4U2VudGVuY2VzO1xuXHRcdFx0bGV0IGRkID0gUHJldmlld21ha2VyLmZpcnN0U2VudGVuY2VzKGQsIG4pO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRkZCA9IFByZXZpZXdtYWtlci5maXJzdFNlbnRlbmNlcyhkLCBuKTtcblx0XHRcdFx0LS1uO1xuXHRcdFx0fSB3aGlsZSAoZGQubGVuZ3RoID4gdGhpcy5tYXhDaGFyYWN0ZXJzICYmIG4gIT09IDApO1xuXHRcdFx0dGhpcy5kYXRhID0gZGQ7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJzXG5cdFx0ICogQHBhcmFtIHtSZWdFeHB9IHJlZ1xuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0Zml4U2VudGVuY2VFbmRzKHN0cnMsIHJlZykge1xuXHRcdFx0Ly8gdGFrZSBhbiBhcnJheSBvZiBzdHJpbmdzLCBzdHJzXG5cdFx0XHQvLyBqb2luIHN0cnNbaV0gdG8gc3Ryc1tpKzFdICYgc3Ryc1tpKzJdIGlmIHN0cnNbaV0gbWF0Y2hlcyByZWdleCByZWdcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3Rycy5sZW5ndGggLSAyOyArK2kpIHtcblx0XHRcdFx0aWYgKHJlZy50ZXN0KHN0cnNbaV0pKSB7XG5cdFx0XHRcdFx0Y29uc3QgYSA9IFtdO1xuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgc3Rycy5sZW5ndGg7ICsraikge1xuXHRcdFx0XHRcdFx0aWYgKGogPCBpKSB7XG5cdFx0XHRcdFx0XHRcdGFbal0gPSBzdHJzW2pdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGogPT09IGkpIHtcblx0XHRcdFx0XHRcdFx0YVtpXSA9IHN0cnNbaV0gKyBzdHJzW2kgKyAxXSArIHN0cnNbaSArIDJdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGogPiBpICsgMikge1xuXHRcdFx0XHRcdFx0XHRhW2ogLSAyXSA9IHN0cnNbal07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZpeFNlbnRlbmNlRW5kcyhhLCByZWcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3Rycztcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmdbXX0gc3Ryc1xuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBob3dtYW55XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRzdGF0aWMgZmlyc3RTZW50ZW5jZXMoc3RycywgaG93bWFueSkge1xuXHRcdFx0Y29uc3QgdCA9IHN0cnMuc2xpY2UoMCwgMiAqIGhvd21hbnkpO1xuXHRcdFx0cmV0dXJuIHQuam9pbignJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbEJhZFdoaXRlc3BhY2UoKSB7XG5cdFx0XHQvLyBhbHNvIGNsZWFucyB1cCBpc29sYXRlZCAnJycnXG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXiAqJysgKiQvZ20sICcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUnVucyB0aGUgdmFyaW91cyBtZXRob2RzIHRvIGdlbmVyYXRlIHRoZSBwcmV2aWV3LlxuXHRcdCAqIFRoZSBwcmV2aWV3IGlzIHN0b3JlZCBpbiB0aGUgPGNvZGU+aHRtbDwvaHRtbD4gZmllbGQuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdG1ha2VQcmV2aWV3KCkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLm93bmVyLmFydGljbGUubmFtZXNwYWNlSWQoKSAhPT0gcGcubnNUZW1wbGF0ZUlkICYmXG5cdFx0XHRcdHRoaXMub3duZXIuYXJ0aWNsZS5uYW1lc3BhY2VJZCgpICE9PSBwZy5uc0ltYWdlSWRcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmtpbGxDb21tZW50cygpO1xuXHRcdFx0XHR0aGlzLmtpbGxEaXZzKCk7XG5cdFx0XHRcdHRoaXMua2lsbEdhbGxlcmllcygpO1xuXHRcdFx0XHR0aGlzLmtpbGxCb3hUZW1wbGF0ZXMoKTtcblx0XHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwUHJldmlld0tpbGxUZW1wbGF0ZXMnKSkge1xuXHRcdFx0XHRcdHRoaXMua2lsbFRlbXBsYXRlcygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMua2lsbE11bHRpbGluZVRlbXBsYXRlcygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMua2lsbFRhYmxlcygpO1xuXHRcdFx0XHR0aGlzLmtpbGxJbWFnZXMoKTtcblx0XHRcdFx0dGhpcy5raWxsSFRNTCgpO1xuXHRcdFx0XHR0aGlzLmtpbGxDaHVua3MoKTtcblx0XHRcdFx0dGhpcy5tb3B1cCgpO1xuXHRcdFx0XHR0aGlzLmZpcnN0Qml0KCk7XG5cdFx0XHRcdHRoaXMua2lsbEJhZFdoaXRlc3BhY2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMua2lsbEhUTUwoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaHRtbCA9IHdpa2kyaHRtbCh0aGlzLmRhdGEsIHRoaXMuYmFzZVVybCk7IC8vIG5lZWRzIGxpdmVwcmV2aWV3XG5cdFx0XHR0aGlzLmZpeEhUTUwoKTtcblx0XHRcdHRoaXMuc3RyaXBMb25nVGVtcGxhdGVzKCk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRzdGF0aWMgZXNXaWtpMkh0bWxQYXJ0KGRhdGEpIHtcblx0XHRcdGNvbnN0IHJlTGlua3MgPSAvKD86XFxbXFxbKFteXFxdfF0qKSg/OlxcfChbXlxcXXxdKikpKl1dKFthLXpdKikpL2dpOyAvLyBtYXRjaCBhIHdpa2lsaW5rXG5cdFx0XHRyZUxpbmtzLmxhc3RJbmRleCA9IDA7IC8vIHJlc2V0IHJlZ2V4XG5cdFx0XHRsZXQgbWF0Y2g7XG5cdFx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cdFx0XHRsZXQgcG9zdGZpeEluZGV4ID0gMDtcblx0XHRcdHdoaWxlICgobWF0Y2ggPSByZUxpbmtzLmV4ZWMoZGF0YSkpICE9PSBudWxsKSB7XG5cdFx0XHRcdC8vIG1hdGNoIGFsbCB3aWtpbGlua3Ncblx0XHRcdFx0Ly8gRklYTUU6IHRoZSB3YXkgdGhhdCBsaW5rIGlzIGJ1aWx0IGhlcmUgaXNuJ3QgcGVyZmVjdC4gSXQgaXMgY2xpY2thYmxlLCBidXQgcG9wdXBzIHByZXZpZXcgd29uJ3QgcmVjb2duaXplIGl0IGluIHNvbWUgY2FzZXMuXG5cdFx0XHRcdHJlc3VsdCArPSBgJHtwZy5lc2NhcGVRdW90ZXNIVE1MKGRhdGEuc3Vic3RyaW5nKHBvc3RmaXhJbmRleCwgbWF0Y2guaW5kZXgpKX08YSBocmVmPVwiJHtcblx0XHRcdFx0XHRJbnN0YS5jb25mLnBhdGhzLmFydGljbGVzXG5cdFx0XHRcdH0ke3BnLmVzY2FwZVF1b3Rlc0hUTUwobWF0Y2hbMV0pfVwiPiR7cGcuZXNjYXBlUXVvdGVzSFRNTCgobWF0Y2hbMl0gPz8gbWF0Y2hbMV0pICsgbWF0Y2hbM10pfTwvYT5gO1xuXHRcdFx0XHRwb3N0Zml4SW5kZXggPSByZUxpbmtzLmxhc3RJbmRleDtcblx0XHRcdH1cblx0XHRcdC8vIGFwcGVuZCB0aGUgcmVzdFxuXHRcdFx0cmVzdWx0ICs9IHBnLmVzY2FwZVF1b3Rlc0hUTUwoZGF0YS5zbGljZShNYXRoLm1heCgwLCBwb3N0Zml4SW5kZXgpKSk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRlZGl0U3VtbWFyeVByZXZpZXcoKSB7XG5cdFx0XHRjb25zdCByZUFlcyA9IC9cXC9cXCogKiguKj8pICpcXCpcXC8vZzsgLy8gbWF0Y2ggdGhlIGZpcnN0IHNlY3Rpb24gbWFya2VyXG5cdFx0XHRyZUFlcy5sYXN0SW5kZXggPSAwOyAvLyByZXNldCByZWdleFxuXHRcdFx0Y29uc3QgbWF0Y2ggPSByZUFlcy5leGVjKHRoaXMuZGF0YSk7XG5cdFx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdFx0Ly8gd2UgaGF2ZSBhIHNlY3Rpb24gbGluay4gU3BsaXQgaXQsIHByb2Nlc3MgaXQsIGNvbWJpbmUgaXQuXG5cdFx0XHRcdGNvbnN0IHByZWZpeCA9IHRoaXMuZGF0YS5zbGljZSgwLCBNYXRoLm1heCgwLCBtYXRjaC5pbmRleCAtIDEpKTtcblx0XHRcdFx0Y29uc3QgWywgc2VjdGlvbl0gPSBtYXRjaDtcblx0XHRcdFx0Y29uc3QgcG9zdGZpeCA9IHRoaXMuZGF0YS5zbGljZShNYXRoLm1heCgwLCByZUFlcy5sYXN0SW5kZXgpKTtcblx0XHRcdFx0bGV0IHN0YXJ0ID0gXCI8c3BhbiBjbGFzcz0nYXV0b2NvbW1lbnQnPlwiO1xuXHRcdFx0XHRsZXQgZW5kID0gJzwvc3Bhbj4nO1xuXHRcdFx0XHRpZiAocHJlZml4Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzdGFydCA9IGAke1ByZXZpZXdtYWtlci5lc1dpa2kySHRtbFBhcnQocHJlZml4KX0gJHtzdGFydH0tIGA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHBvc3RmaXgubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGVuZCA9IGA6ICR7ZW5kfSR7UHJldmlld21ha2VyLmVzV2lraTJIdG1sUGFydChwb3N0Zml4KX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHQgPSBuZXcgVGl0bGUoKS5mcm9tVVJMKHRoaXMuYmFzZVVybCk7XG5cdFx0XHRcdHQuYW5jaG9yRnJvbVV0ZihzZWN0aW9uKTtcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbkxpbmsgPSBgJHtcblx0XHRcdFx0XHRJbnN0YS5jb25mLnBhdGhzLmFydGljbGVzICsgcGcuZXNjYXBlUXVvdGVzSFRNTCh0LnRvU3RyaW5nKHRydWUpKVxuXHRcdFx0XHR9IyR7cGcuZXNjYXBlUXVvdGVzSFRNTCh0LmFuY2hvcil9YDtcblx0XHRcdFx0cmV0dXJuIGAke3N0YXJ0fTxhIGhyZWY9XCIke3NlY3Rpb25MaW5rfVwiPiZyYXJyOzwvYT4gJHtwZy5lc2NhcGVRdW90ZXNIVE1MKHNlY3Rpb24pfSR7ZW5kfWA7XG5cdFx0XHR9XG5cdFx0XHQvLyBlbHNlIHRoZXJlJ3Mgbm8gc2VjdGlvbiBsaW5rLCBodG1saWZ5IHRoZSB3aG9sZSB0aGluZy5cblx0XHRcdHJldHVybiBQcmV2aWV3bWFrZXIuZXNXaWtpMkh0bWxQYXJ0KHRoaXMuZGF0YSk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFdvcmtzIGFyb3VuZCBsaXZlcHJldmlldyBidWdzLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRmaXhIVE1MKCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0bWwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHJldCA9IHRoaXMuaHRtbDtcblx0XHRcdC8vIGZpeCBxdWVzdGlvbiBtYXJrcyBpbiB3aWtpIGxpbmtzXG5cdFx0XHQvLyBtYXliZSB0aGlzJ2xsIGJyZWFrIHNvbWUgc3R1ZmYgOi0oXG5cdFx0XHRyZXQgPSByZXQucmVwbGFjZShuZXcgUmVnRXhwKGAoPGEgaHJlZj1cIiR7cGcud2lraS5hcnRpY2xlUGF0aH0vW15cIl0qKVs/XSguKj9cIilgLCAnZycpLCAnJDElM0YkMicpO1xuXHRcdFx0cmV0ID0gcmV0LnJlcGxhY2UobmV3IFJlZ0V4cChgKDxhIGhyZWY9JyR7cGcud2lraS5hcnRpY2xlUGF0aH0vW14nXSopWz9dKC4qPycpYCwgJ2cnKSwgJyQxJTNGJDInKTtcblx0XHRcdC8vIEZJWE1FIGZpeCB1cCAlIHRvb1xuXHRcdFx0dGhpcy5odG1sID0gcmV0O1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBHZW5lcmF0ZXMgdGhlIHByZXZpZXcgYW5kIGRpc3BsYXlzIGl0IGluIHRoZSBjdXJyZW50IHBvcHVwLlxuXHRcdCAqIERvZXMgbm90aGluZyBpZiB0aGUgZ2VuZXJhdGVkIHByZXZpZXcgaXMgaW52YWxpZCBvciBjb25zaXN0cyBvZiB3aGl0ZXNwYWNlIG9ubHkuXG5cdFx0ICogQWxzbyBhY3RpdmF0ZXMgd2lraWxpbmtzIGluIHRoZSBwcmV2aWV3IGZvciBzdWJwb3B1cHMgaWYgdGhlIHBvcHVwU3VicG9wdXBzIG9wdGlvbiBpcyB0cnVlLlxuXHRcdCAqL1xuXHRcdHNob3dQcmV2aWV3KCkge1xuXHRcdFx0dGhpcy5tYWtlUHJldmlldygpO1xuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLmh0bWwgIT09IHR5cGVvZiAnJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoL15cXHMqJC8udGVzdCh0aGlzLmh0bWwpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHNldFBvcHVwSFRNTCgnPGhyPicsICdwb3B1cFByZVByZXZpZXdTZXAnLCB0aGlzLm93bmVyLmlkTnVtYmVyKTtcblx0XHRcdHNldFBvcHVwVGlwc0FuZEhUTUwodGhpcy5odG1sLCAncG9wdXBQcmV2aWV3JywgdGhpcy5vd25lci5pZE51bWJlciwge1xuXHRcdFx0XHRvd25lcjogdGhpcy5vd25lcixcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgbW9yZSA9IHRoaXMuZnVsbExlbmd0aCA+IHRoaXMuZGF0YS5sZW5ndGggPyB0aGlzLm1vcmVMaW5rKCkgOiAnJztcblx0XHRcdHNldFBvcHVwSFRNTChtb3JlLCAncG9wdXBQcmV2aWV3TW9yZScsIHRoaXMub3duZXIuaWROdW1iZXIpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdG1vcmVMaW5rKCkge1xuXHRcdFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdGEuY2xhc3NOYW1lID0gJ3BvcHVwTW9yZUxpbmsnO1xuXHRcdFx0YS5pbm5lckhUTUwgPSBwb3B1cFN0cmluZygnbW9yZS4uLicpO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRhLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHRcdHNlbGYubWF4Q2hhcmFjdGVycyArPSAyMDAwO1xuXHRcdFx0XHRzZWxmLm1heFNlbnRlbmNlcyArPSAyMDtcblx0XHRcdFx0c2VsZi5zZXREYXRhKCk7XG5cdFx0XHRcdHNlbGYuc2hvd1ByZXZpZXcoKTtcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gYTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRzdHJpcExvbmdUZW1wbGF0ZXMoKSB7XG5cdFx0XHQvLyBvcGVyYXRlcyBvbiB0aGUgSFRNTCFcblx0XHRcdHRoaXMuaHRtbCA9IHRoaXMuaHRtbC5yZXBsYWNlKC9eLnswLDEwMDB9e3tbXn1dKj8oPChwfGJyKSggXFwvKT8+XFxzKil7Mix9KFtee31dKj99fSk/L2dpLCAnJyk7XG5cdFx0XHR0aGlzLmh0bWwgPSB0aGlzLmh0bWwuc3BsaXQoJ1xcbicpLmpvaW4oJyAnKTsgLy8gd29ya2Fyb3VuZCBmb3IgPHByZT4gdGVtcGxhdGVzXG5cdFx0XHR0aGlzLmh0bWwgPSB0aGlzLmh0bWwucmVwbGFjZSgve3tbXn1dKjxwcmU+W159XSp9fS9naSwgJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxNdWx0aWxpbmVUZW1wbGF0ZXMoKSB7XG5cdFx0XHR0aGlzLmtpbGwoJ3t7eycsICd9fX0nKTtcblx0XHRcdHRoaXMua2lsbCgvXFxzKnt7W157fV0qXFxuLywgJ319JywgJ3t7Jyk7XG5cdFx0fVxuXHR9XG5cdC8vIEVOREZJTEU6IHByZXZpZXdtYWtlci5qc1xuXHQvLyBTVEFSVEZJTEU6IHF1ZXJ5cHJldmlldy5qc1xuXHRjb25zdCBsb2FkQVBJUHJldmlldyA9IChxdWVyeVR5cGUsIGFydGljbGUsIG5hdnBvcCkgPT4ge1xuXHRcdGNvbnN0IGFydCA9IG5ldyBUaXRsZShhcnRpY2xlKS51cmxTdHJpbmcoKTtcblx0XHRsZXQgdXJsID0gYCR7cGcud2lraS5hcGl3aWtpYmFzZX0/Zm9ybWF0PWpzb24mZm9ybWF0dmVyc2lvbj0yJmFjdGlvbj1xdWVyeSZgO1xuXHRcdGxldCBodG1sR2VuZXJhdG9yID0gKCkgPT4gLyogYSwgZCAqLyB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSgnaW52YWxpZCBodG1sIGdlbmVyYXRvcicsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0fTtcblx0XHRsZXQgdXNlcm5hbWVhcnQgPSAnJztcblx0XHRzd2l0Y2ggKHF1ZXJ5VHlwZSkge1xuXHRcdFx0Y2FzZSAnaGlzdG9yeSc6XG5cdFx0XHRcdHVybCArPSBgdGl0bGVzPSR7YXJ0fSZwcm9wPXJldmlzaW9ucyZydmxpbWl0PSR7Z2V0VmFsdWVPZigncG9wdXBIaXN0b3J5UHJldmlld0xpbWl0Jyl9YDtcblx0XHRcdFx0aHRtbEdlbmVyYXRvciA9IEFQSWhpc3RvcnlQcmV2aWV3SFRNTDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjYXRlZ29yeSc6XG5cdFx0XHRcdHVybCArPSBgbGlzdD1jYXRlZ29yeW1lbWJlcnMmY210aXRsZT0ke2FydH1gO1xuXHRcdFx0XHRodG1sR2VuZXJhdG9yID0gQVBJY2F0ZWdvcnlQcmV2aWV3SFRNTDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd1c2VyaW5mbyc6IHtcblx0XHRcdFx0Y29uc3QgdXNlcm5hbWUgPSBuZXcgVGl0bGUoYXJ0aWNsZSkudXNlck5hbWUoKTtcblx0XHRcdFx0dXNlcm5hbWVhcnQgPSBlbmNvZGVVUklDb21wb25lbnQodXNlcm5hbWUpO1xuXHRcdFx0XHR1cmwgKz0gcGcucmUuaXBVc2VyLnRlc3QodXNlcm5hbWUpXG5cdFx0XHRcdFx0PyBgbGlzdD1ibG9ja3MmYmtwcm9wPXJhbmdlfHJlc3RyaWN0aW9ucyZia2lwPSR7dXNlcm5hbWVhcnR9YFxuXHRcdFx0XHRcdDogYGxpc3Q9dXNlcnN8dXNlcmNvbnRyaWJzJnVzcHJvcD1ibG9ja2luZm98Z3JvdXBzfGVkaXRjb3VudHxyZWdpc3RyYXRpb258Z2VuZGVyJnVzdXNlcnM9JHt1c2VybmFtZWFydH0mbWV0YT1nbG9iYWx1c2VyaW5mbyZndWlwcm9wPWdyb3Vwc3x1bmF0dGFjaGVkJmd1aXVzZXI9JHt1c2VybmFtZWFydH0mdWNsaW1pdD0xJnVjcHJvcD10aW1lc3RhbXAmdWN1c2VyPSR7dXNlcm5hbWVhcnR9YDtcblx0XHRcdFx0aHRtbEdlbmVyYXRvciA9IEFQSXVzZXJJbmZvUHJldmlld0hUTUw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnY29udHJpYnMnOlxuXHRcdFx0XHR1c2VybmFtZWFydCA9IGVuY29kZVVSSUNvbXBvbmVudChuZXcgVGl0bGUoYXJ0aWNsZSkudXNlck5hbWUoKSk7XG5cdFx0XHRcdHVybCArPSBgbGlzdD11c2VyY29udHJpYnMmdWN1c2VyPSR7dXNlcm5hbWVhcnR9JnVjbGltaXQ9JHtnZXRWYWx1ZU9mKCdwb3B1cENvbnRyaWJzUHJldmlld0xpbWl0Jyl9YDtcblx0XHRcdFx0aHRtbEdlbmVyYXRvciA9IEFQSWNvbnRyaWJzUHJldmlld0hUTUw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaW1hZ2VwYWdlcHJldmlldyc6IHtcblx0XHRcdFx0bGV0IHRyYWlsID0gJyc7XG5cdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cEltYWdlTGlua3MnKSkge1xuXHRcdFx0XHRcdHRyYWlsID0gYCZsaXN0PWltYWdldXNhZ2UmaXV0aXRsZT0ke2FydH1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHVybCArPSBgdGl0bGVzPSR7YXJ0fSZwcm9wPXJldmlzaW9uc3xpbWFnZWluZm8mcnZwcm9wPWNvbnRlbnQke3RyYWlsfWA7XG5cdFx0XHRcdGh0bWxHZW5lcmF0b3IgPSBBUElpbWFnZXBhZ2VQcmV2aWV3SFRNTDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdiYWNrbGlua3MnOlxuXHRcdFx0XHR1cmwgKz0gYGxpc3Q9YmFja2xpbmtzJmJsdGl0bGU9JHthcnR9YDtcblx0XHRcdFx0aHRtbEdlbmVyYXRvciA9IEFQSWJhY2tsaW5rc1ByZXZpZXdIVE1MO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3JldmlzaW9uJzpcblx0XHRcdFx0dXJsICs9IGFydGljbGUub2xkaWQgPyBgcmV2aWRzPSR7YXJ0aWNsZS5vbGRpZH1gIDogYHRpdGxlcz0ke2FydGljbGUucmVtb3ZlQW5jaG9yKCkudXJsU3RyaW5nKCl9YDtcblx0XHRcdFx0dXJsICs9XG5cdFx0XHRcdFx0JyZwcm9wPXJldmlzaW9uc3xwYWdlcHJvcHN8aW5mb3xpbWFnZXN8Y2F0ZWdvcmllcyZydnByb3A9aWRzfHRpbWVzdGFtcHxmbGFnc3xjb21tZW50fHVzZXJ8Y29udGVudCZjbGxpbWl0PW1heCZpbWxpbWl0PW1heCc7XG5cdFx0XHRcdGh0bWxHZW5lcmF0b3IgPSBBUElyZXZpc2lvblByZXZpZXdIVE1MO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cGVuZGluZ05hdnBvcFRhc2sobmF2cG9wKTtcblx0XHRjb25zdCBjYWxsYmFjayA9IChkKSA9PiB7XG5cdFx0XHRsb2coJ2NhbGxiYWNrIG9mIEFQSSBmdW5jdGlvbnMgd2FzIGhpdCcpO1xuXHRcdFx0aWYgKHF1ZXJ5VHlwZSA9PT0gJ3VzZXJpbmZvJykge1xuXHRcdFx0XHQvLyBXZSBuZWVkIHRvIGRvIGFub3RoZXIgQVBJIHJlcXVlc3Rcblx0XHRcdFx0ZmV0Y2hVc2VyR3JvdXBOYW1lcyhkLmRhdGEpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdHNob3dBUElQcmV2aWV3KHF1ZXJ5VHlwZSwgaHRtbEdlbmVyYXRvcihhcnRpY2xlLCBkLCBuYXZwb3ApLCBuYXZwb3AuaWROdW1iZXIsIG5hdnBvcCwgZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRzaG93QVBJUHJldmlldyhxdWVyeVR5cGUsIGh0bWxHZW5lcmF0b3IoYXJ0aWNsZSwgZCwgbmF2cG9wKSwgbmF2cG9wLmlkTnVtYmVyLCBuYXZwb3AsIGQpO1xuXHRcdH07XG5cdFx0Y29uc3QgZ28gPSAoKSA9PiB7XG5cdFx0XHRnZXRQYWdlV2l0aENhY2hpbmcodXJsLCBjYWxsYmFjaywgbmF2cG9wKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cdFx0aWYgKG5hdnBvcC52aXNpYmxlIHx8ICFnZXRWYWx1ZU9mKCdwb3B1cExhenlEb3dubG9hZHMnKSkge1xuXHRcdFx0Z28oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmF2cG9wLmFkZEhvb2soZ28sICd1bmhpZGUnLCAnYmVmb3JlJywgYERPV05MT0FEXyR7cXVlcnlUeXBlfV9RVUVSWV9EQVRBYCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBsaW5rTGlzdCA9IChsaXN0KSA9PiB7XG5cdFx0bGlzdC5zb3J0KCh4LCB5KSA9PiB7XG5cdFx0XHRyZXR1cm4geCA9PT0geSA/IDAgOiB4IDwgeSA/IC0xIDogMTtcblx0XHR9KTtcblx0XHRjb25zdCBidWYgPSBbXTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0YnVmLnB1c2goXG5cdFx0XHRcdHdpa2lMaW5rKHtcblx0XHRcdFx0XHRhcnRpY2xlOiBuZXcgVGl0bGUoZWxlbWVudCksXG5cdFx0XHRcdFx0dGV4dDogZWxlbWVudC5zcGxpdCgnICcpLmpvaW4oJyZuYnNwOycpLFxuXHRcdFx0XHRcdGFjdGlvbjogJ3ZpZXcnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGJ1Zi5qb2luKCcsICcpO1xuXHR9O1xuXHRjb25zdCBnZXRUaW1lT2Zmc2V0ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHR6ID0gbXcudXNlci5vcHRpb25zLmdldCgndGltZWNvcnJlY3Rpb24nKTtcblx0XHRpZiAodHogJiYgdHouaW5jbHVkZXMoJ3wnKSkge1xuXHRcdFx0Ly8gTmV3IGZvcm1hdFxuXHRcdFx0cmV0dXJuIE51bWJlci5wYXJzZUludCh0ei5zcGxpdCgnfCcpWzFdLCAxMCk7XG5cdFx0fVxuXHRcdHJldHVybiAwO1xuXHR9O1xuXHRjb25zdCBnZXRUaW1lWm9uZSA9ICgpID0+IHtcblx0XHRpZiAoIXBnLnVzZXIudGltZVpvbmUpIHtcblx0XHRcdGNvbnN0IHR6ID0gbXcudXNlci5vcHRpb25zLmdldCgndGltZWNvcnJlY3Rpb24nKTtcblx0XHRcdHBnLnVzZXIudGltZVpvbmUgPSAnVVRDJztcblx0XHRcdGlmICh0eikge1xuXHRcdFx0XHRjb25zdCB0ekNvbXBvbmVudHMgPSB0ei5zcGxpdCgnfCcpO1xuXHRcdFx0XHRpZiAodHpDb21wb25lbnRzLmxlbmd0aCA9PT0gMyAmJiB0ekNvbXBvbmVudHNbMF0gPT09ICdab25lSW5mbycpIHtcblx0XHRcdFx0XHRbLCAsIHBnLnVzZXIudGltZVpvbmVdID0gdHpDb21wb25lbnRzO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVycmxvZyhgVW5leHBlY3RlZCB0aW1lem9uZSBpbmZvcm1hdGlvbjogJHt0en1gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcGcudXNlci50aW1lWm9uZTtcblx0fTtcblx0LyoqXG5cdCAqIFNob3VsZCB3ZSB1c2UgYW4gb2Zmc2V0IG9yIGNhbiB3ZSB1c2UgcHJvcGVyIHRpbWV6b25lc1xuXHQgKi9cblx0Y29uc3QgdXNlVGltZU9mZnNldCA9ICgpID0+IHtcblx0XHRpZiAoSW50bC5EYXRlVGltZUZvcm1hdC5wcm90b3R5cGUuZm9ybWF0VG9QYXJ0cyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBJRSAxMVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGNvbnN0IHR6ID0gbXcudXNlci5vcHRpb25zLmdldCgndGltZWNvcnJlY3Rpb24nKTtcblx0XHRpZiAodHogJiYgIXR6LmluY2x1ZGVzKCdab25lSW5mb3wnKSkge1xuXHRcdFx0Ly8gU3lzdGVtfCBEZWZhdWx0IHN5c3RlbSB0aW1lLCBkZWZhdWx0IGZvciB1c2VycyB3aG8gZGlkbid0IGNvbmZpZ3VyZSB0aW1lem9uZVxuXHRcdFx0Ly8gT2Zmc2V0fCBNYW51YWwgZGVmaW5lZCBvZmZzZXQgYnkgdXNlclxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0LyoqXG5cdCAqIEFycmF5IG9mIGxvY2FsZXMgZm9yIHRoZSBwdXJwb3NlIG9mIGphdmFzY3JpcHQgbG9jYWxlIGJhc2VkIGZvcm1hdHRpbmdcblx0ICogRmlsdGVycyBkb3duIHRvIHRob3NlIHN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci4gRW1wdHkgW10gPT09IFN5c3RlbSdzIGRlZmF1bHQgbG9jYWxlXG5cdCAqL1xuXHRjb25zdCBnZXRMb2NhbGVzID0gKCkgPT4ge1xuXHRcdGlmICghcGcudXNlci5sb2NhbGVzKSB7XG5cdFx0XHRsZXQgdXNlckxhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmdldEF0dHJpYnV0ZSgnbGFuZycpOyAvLyBtYWtlIHN1cmUgd2UgaGF2ZSBIVE1MIGxvY2FsZVxuXHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwTG9jYWxlJykpIHtcblx0XHRcdFx0dXNlckxhbmd1YWdlID0gZ2V0VmFsdWVPZigncG9wdXBMb2NhbGUnKTtcblx0XHRcdH0gZWxzZSBpZiAodXNlckxhbmd1YWdlID09PSAnZW4nKSB7XG5cdFx0XHRcdC8vIGVuLndwIHRlbmRzIHRvIHRyZWF0IHRoaXMgYXMgaW50ZXJuYXRpb25hbCBlbmdsaXNoIC8gdW5zcGVjaWZpZWRcblx0XHRcdFx0Ly8gYnV0IHdlIGhhdmUgbW9yZSBzcGVjaWZpYyBzZXR0aW5ncyBpbiB1c2VyIG9wdGlvbnNcblx0XHRcdFx0dXNlckxhbmd1YWdlID0gZ2V0TVdEYXRlRm9ybWF0KCkgPT09ICdtZHknID8gJ2VuLVVTJyA6ICdlbi1HQic7XG5cdFx0XHR9XG5cdFx0XHRwZy51c2VyLmxvY2FsZXMgPSBJbnRsLkRhdGVUaW1lRm9ybWF0LnN1cHBvcnRlZExvY2FsZXNPZihbdXNlckxhbmd1YWdlLCBuYXZpZ2F0b3IubGFuZ3VhZ2VdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHBnLnVzZXIubG9jYWxlcztcblx0fTtcblx0LyoqXG5cdCAqIFJldHJpZXZlIGNvbmZpZ3VyZWQgTVcgZGF0ZSBmb3JtYXQgZm9yIHRoaXMgdXNlclxuXHQgKiBUaGVzZSBjYW4gYmVcblx0ICogZGVmYXVsdFxuXHQgKiBkbXk6IHRpbWUsIGRteVxuXHQgKiBtZHk6IHRpbWUsIG1keVxuXHQgKiB5bWQ6IHRpbWUsIHltZFxuXHQgKiBkbXl0OiBkbXksIHRpbWVcblx0ICogZG15dHM6IGRteSwgdGltZSArIHNlY29uZHNcblx0ICogSVNPIDg2MDE6IFlZWVktTU0tRERUaGg6bW06c3MgKGxvY2FsIHRpbWUpXG5cdCAqXG5cdCAqIFRoaXMgaXNuJ3QgdG9vIHVzZWZ1bCBmb3IgdXMsIGFzIEpTIGRvZXNuJ3QgaGF2ZSBmb3JtYXR0ZXJzIHRvIG1hdGNoIHRoZXNlIHByaXZhdGUgc3BlY2lmaWVyc1xuXHQgKi9cblx0Y29uc3QgZ2V0TVdEYXRlRm9ybWF0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBtdy51c2VyLm9wdGlvbnMuZ2V0KCdkYXRlJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgSFRNTCB0YWJsZSB0aGF0J3Mgc2hvd24gaW4gdGhlIGhpc3RvcnkgYW5kIHVzZXItY29udHJpYnMgcG9wdXBzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYXJ0aWNsZVxuXHQgKiBAcGFyYW0ge09iamVjdFtdfSBoIC0gYSBsaXN0IG9mIHJldmlzaW9ucywgcmV0dXJuZWQgZnJvbSB0aGUgQVBJXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVhbGx5Q29udHJpYnMgLSB0cnVlIG9ubHkgaWYgd2UncmUgZGlzcGxheWluZyB1c2VyIGNvbnRyaWJ1dGlvbnNcblx0ICovXG5cdGNvbnN0IGVkaXRQcmV2aWV3VGFibGUgPSAoYXJ0aWNsZSwgaCwgcmVhbGx5Q29udHJpYnMpID0+IHtcblx0XHRsZXQgaHRtbCA9IFsnPHRhYmxlPiddO1xuXHRcdGxldCBkYXk7XG5cdFx0bGV0IGN1cmFydCA9IGFydGljbGU7XG5cdFx0bGV0IHBhZ2U7XG5cdFx0bGV0IG1ha2VGaXJzdENvbHVtbkxpbmtzO1xuXHRcdGlmIChyZWFsbHlDb250cmlicykge1xuXHRcdFx0Ly8gV2UncmUgc2hvd2luZyB1c2VyIGNvbnRyaWJ1dGlvbnMsIHNvIG1ha2UgKGRpZmYgfCBoaXN0KSBsaW5rc1xuXHRcdFx0bWFrZUZpcnN0Q29sdW1uTGlua3MgPSAoY3VycmVudFJldmlzaW9uKSA9PiB7XG5cdFx0XHRcdGxldCByZXN1bHQgPSAnKCc7XG5cdFx0XHRcdHJlc3VsdCArPVxuXHRcdFx0XHRcdGA8YSBocmVmPVwiJHtwZy53aWtpLnRpdGxlYmFzZX0ke25ldyBUaXRsZShjdXJyZW50UmV2aXNpb24udGl0bGUpLnVybFN0cmluZygpfSZkaWZmPXByZXZgICtcblx0XHRcdFx0XHRgJm9sZGlkPSR7Y3VycmVudFJldmlzaW9uLnJldmlkfVwiPiR7cG9wdXBTdHJpbmcoJ2RpZmYnKX08L2E+YDtcblx0XHRcdFx0cmVzdWx0ICs9ICcmbmJzcDt8Jm5ic3A7Jztcblx0XHRcdFx0cmVzdWx0ICs9IGA8YSBocmVmPVwiJHtwZy53aWtpLnRpdGxlYmFzZX0ke25ldyBUaXRsZShcblx0XHRcdFx0XHRjdXJyZW50UmV2aXNpb24udGl0bGVcblx0XHRcdFx0KS51cmxTdHJpbmcoKX0mYWN0aW9uPWhpc3RvcnlcIj4ke3BvcHVwU3RyaW5nKCdoaXN0Jyl9PC9hPmA7XG5cdFx0XHRcdHJlc3VsdCArPSAnKSc7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBJdCdzIGEgcmVndWxhciBoaXN0b3J5IHBhZ2UsIHNvIG1ha2UgKGN1ciB8IGxhc3QpIGxpbmtzXG5cdFx0XHRjb25zdCBmaXJzdFJldmlkID0gaFswXS5yZXZpZDtcblx0XHRcdG1ha2VGaXJzdENvbHVtbkxpbmtzID0gKGN1cnJlbnRSZXZpc2lvbikgPT4ge1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gJygnO1xuXHRcdFx0XHRyZXN1bHQgKz0gYDxhIGhyZWY9XCIke3BnLndpa2kudGl0bGViYXNlfSR7bmV3IFRpdGxlKGN1cmFydCkudXJsU3RyaW5nKCl9JmRpZmY9JHtmaXJzdFJldmlkfSZvbGRpZD0ke1xuXHRcdFx0XHRcdGN1cnJlbnRSZXZpc2lvbi5yZXZpZFxuXHRcdFx0XHR9XCI+JHtwb3B1cFN0cmluZygnY3VyJyl9PC9hPmA7XG5cdFx0XHRcdHJlc3VsdCArPSAnJm5ic3A7fCZuYnNwOyc7XG5cdFx0XHRcdHJlc3VsdCArPSBgPGEgaHJlZj1cIiR7cGcud2lraS50aXRsZWJhc2V9JHtuZXcgVGl0bGUoY3VyYXJ0KS51cmxTdHJpbmcoKX0mZGlmZj1wcmV2Jm9sZGlkPSR7XG5cdFx0XHRcdFx0Y3VycmVudFJldmlzaW9uLnJldmlkXG5cdFx0XHRcdH1cIj4ke3BvcHVwU3RyaW5nKCdsYXN0Jyl9PC9hPmA7XG5cdFx0XHRcdHJlc3VsdCArPSAnKSc7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IFtpLCBlbGVtZW50XSBvZiBoLmVudHJpZXMoKSkge1xuXHRcdFx0aWYgKHJlYWxseUNvbnRyaWJzKSB7XG5cdFx0XHRcdHBhZ2UgPSBlbGVtZW50LnRpdGxlO1xuXHRcdFx0XHRjdXJhcnQgPSBuZXcgVGl0bGUocGFnZSk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBtaW5vciA9IGVsZW1lbnQubWlub3IgPyAnPGI+bSA8L2I+JyA6ICcnO1xuXHRcdFx0Y29uc3QgZWRpdERhdGUgPSBuZXcgRGF0ZShlbGVtZW50LnRpbWVzdGFtcCk7XG5cdFx0XHRsZXQgdGhpc0RheSA9IGZvcm1hdHRlZERhdGUoZWRpdERhdGUpO1xuXHRcdFx0Y29uc3QgdGhpc1RpbWUgPSBmb3JtYXR0ZWRUaW1lKGVkaXREYXRlKTtcblx0XHRcdGlmICh0aGlzRGF5ID09PSBkYXkpIHtcblx0XHRcdFx0dGhpc0RheSA9ICcnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGF5ID0gdGhpc0RheTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzRGF5KSB7XG5cdFx0XHRcdGh0bWwucHVzaChgPHRyPjx0ZCBjb2xzcGFuPTM+PHNwYW4gY2xhc3M9XCJwb3B1cF9oaXN0b3J5X2RhdGVcIj4ke3RoaXNEYXl9PC9zcGFuPjwvdGQ+PC90cj5gKTtcblx0XHRcdH1cblx0XHRcdGh0bWwucHVzaChcblx0XHRcdFx0YDx0ciBjbGFzcz1cInBvcHVwX2hpc3Rvcnlfcm93XyR7aSAlIDIgPyAnb2RkJyA6ICdldmVuJ31cIj5gLFxuXHRcdFx0XHRgPHRkPiR7bWFrZUZpcnN0Q29sdW1uTGlua3MoZWxlbWVudCl9PC90ZD5gLFxuXHRcdFx0XHQnPHRkPicgK1xuXHRcdFx0XHRcdGA8YSBocmVmPVwiJHtwZy53aWtpLnRpdGxlYmFzZX0ke25ldyBUaXRsZShjdXJhcnQpLnVybFN0cmluZygpfSZvbGRpZD0ke1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5yZXZpZFxuXHRcdFx0XHRcdH1cIj4ke3RoaXNUaW1lfTwvYT48L3RkPmBcblx0XHRcdCk7XG5cdFx0XHRsZXQgY29sM3VybCA9ICcnO1xuXHRcdFx0bGV0IGNvbDN0eHQgPSAnJztcblx0XHRcdGlmIChyZWFsbHlDb250cmlicykge1xuXHRcdFx0XHRjb2wzdXJsID0gcGcud2lraS50aXRsZWJhc2UgKyBjdXJhcnQudXJsU3RyaW5nKCk7XG5cdFx0XHRcdGNvbDN0eHQgPSBwZy5lc2NhcGVRdW90ZXNIVE1MKHBhZ2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3Qge3VzZXJ9ID0gZWxlbWVudDtcblx0XHRcdFx0aWYgKGVsZW1lbnQudXNlcmhpZGRlbikge1xuXHRcdFx0XHRcdGNvbDN1cmwgPSBnZXRWYWx1ZU9mKCdwb3B1cFJldkRlbFVybCcpO1xuXHRcdFx0XHRcdGNvbDN0eHQgPSBwZy5lc2NhcGVRdW90ZXNIVE1MKHBvcHVwU3RyaW5nKCdyZXZkZWwnKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29sM3VybCA9IHBnLnJlLmlwVXNlci50ZXN0KHVzZXIpXG5cdFx0XHRcdFx0XHQ/IGAke1xuXHRcdFx0XHRcdFx0XHRcdHBnLndpa2kudGl0bGViYXNlICsgbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNTcGVjaWFsSWRdXG5cdFx0XHRcdFx0XHRcdH06Q29udHJpYnV0aW9ucyZ0YXJnZXQ9JHtuZXcgVGl0bGUodXNlcikudXJsU3RyaW5nKCl9YFxuXHRcdFx0XHRcdFx0OiBgJHtwZy53aWtpLnRpdGxlYmFzZSArIG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zVXNlcklkXX06JHtuZXcgVGl0bGUoXG5cdFx0XHRcdFx0XHRcdFx0dXNlclxuXHRcdFx0XHRcdFx0XHQpLnVybFN0cmluZygpfWA7XG5cdFx0XHRcdFx0Y29sM3R4dCA9IHBnLmVzY2FwZVF1b3Rlc0hUTUwodXNlcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGh0bWwucHVzaChgPHRkPiR7cmVhbGx5Q29udHJpYnMgPyBtaW5vciA6ICcnfTxhIGhyZWY9XCIke2NvbDN1cmx9XCI+JHtjb2wzdHh0fTwvYT48L3RkPmApO1xuXHRcdFx0bGV0IGNvbW1lbnQgPSAnJztcblx0XHRcdGNvbnN0IGMgPSBlbGVtZW50LmNvbW1lbnQgfHwgZWxlbWVudC5jb250ZW50O1xuXHRcdFx0aWYgKGMpIHtcblx0XHRcdFx0Y29tbWVudCA9IG5ldyBQcmV2aWV3bWFrZXIoYywgbmV3IFRpdGxlKGN1cmFydCkudG9VcmwoKSkuZWRpdFN1bW1hcnlQcmV2aWV3KCk7XG5cdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQuY29tbWVudGhpZGRlbikge1xuXHRcdFx0XHRjb21tZW50ID0gcG9wdXBTdHJpbmcoJ3JldmRlbCcpO1xuXHRcdFx0fVxuXHRcdFx0aHRtbC5wdXNoKGA8dGQ+JHtyZWFsbHlDb250cmlicyA/ICcnIDogbWlub3J9JHtjb21tZW50fTwvdGQ+YCwgJzwvdHI+Jyk7XG5cdFx0XHRodG1sID0gW2h0bWwuam9pbignJyldO1xuXHRcdH1cblx0XHRodG1sLnB1c2goJzwvdGFibGU+Jyk7XG5cdFx0cmV0dXJuIGh0bWwuam9pbignJyk7XG5cdH07XG5cdGNvbnN0IGFkanVzdERhdGUgPSAoZCwgb2Zmc2V0KSA9PiB7XG5cdFx0Ly8gb2Zmc2V0IGlzIGluIG1pbnV0ZXNcblx0XHRjb25zdCBvID0gb2Zmc2V0ICogNjAgKiAxMDAwO1xuXHRcdHJldHVybiBuZXcgRGF0ZSgrZCArIG8pO1xuXHR9O1xuXHQvKipcblx0ICogVGhpcyByZWxpZXMgb24gdGhlIERhdGUgcGFyc2VyIHVuZGVyc3RhbmRpbmcgZW4tVVMgZGF0ZXMsXG5cdCAqIHdoaWNoIGlzIHByZXR0eSBzYWZlIGFzc3VtcHRpb24sIGJ1dCBub3QgcGVyZmVjdC5cblx0ICpcblx0ICogQHBhcmFtIHtEYXRlfSBkYXRlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lWm9uZVxuXHQgKi9cblx0Y29uc3QgY29udmVydFRpbWVab25lID0gKGRhdGUsIHRpbWVab25lKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge3RpbWVab25lfSkpO1xuXHR9O1xuXHRjb25zdCBmb3JtYXR0ZWREYXRlVGltZSA9IChkYXRlKSA9PiB7XG5cdFx0Ly8gZmFsbGJhY2sgZm9yIElFMTEgYW5kIHVua25vd24gdGltZXpvbmVzXG5cdFx0aWYgKHVzZVRpbWVPZmZzZXQoKSkge1xuXHRcdFx0cmV0dXJuIGAke2Zvcm1hdHRlZERhdGUoZGF0ZSl9ICR7Zm9ybWF0dGVkVGltZShkYXRlKX1gO1xuXHRcdH1cblx0XHRpZiAoZ2V0TVdEYXRlRm9ybWF0KCkgPT09ICdJU08gODYwMScpIHtcblx0XHRcdGNvbnN0IGQyID0gY29udmVydFRpbWVab25lKGRhdGUsIGdldFRpbWVab25lKCkpO1xuXHRcdFx0cmV0dXJuIGAke21hcCh6ZXJvRmlsbCwgW2QyLmdldEZ1bGxZZWFyKCksIGQyLmdldE1vbnRoKCkgKyAxLCBkMi5nZXREYXRlKCldKS5qb2luKCctJyl9VCR7bWFwKHplcm9GaWxsLCBbXG5cdFx0XHRcdGQyLmdldEhvdXJzKCksXG5cdFx0XHRcdGQyLmdldE1pbnV0ZXMoKSxcblx0XHRcdFx0ZDIuZ2V0U2Vjb25kcygpLFxuXHRcdFx0XSkuam9pbignOicpfWA7XG5cdFx0fVxuXHRcdGNvbnN0IG9wdGlvbnMgPSBnZXRWYWx1ZU9mKCdwb3B1cERhdGVUaW1lRm9ybWF0dGVyT3B0aW9ucycpO1xuXHRcdG9wdGlvbnMudGltZVpvbmUgPSBnZXRUaW1lWm9uZSgpO1xuXHRcdHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKGdldExvY2FsZXMoKSwgb3B0aW9ucyk7XG5cdH07XG5cdGNvbnN0IGZvcm1hdHRlZERhdGUgPSAoZGF0ZSkgPT4ge1xuXHRcdGxldCBkMjtcblx0XHQvLyBmYWxsYmFjayBmb3IgSUUxMSBhbmQgdW5rbm93biB0aW1lem9uZXNcblx0XHRpZiAodXNlVGltZU9mZnNldCgpKSB7XG5cdFx0XHQvLyB3ZSBhZGp1c3QgdGhlIFVUQyB0aW1lLCBzbyB3ZSBwcmludCB0aGUgYWRqdXN0ZWQgVVRDLCBidXQgbm90IHJlYWxseSBVVEMgdmFsdWVzXG5cdFx0XHRkMiA9IGFkanVzdERhdGUoZGF0ZSwgZ2V0VGltZU9mZnNldCgpKTtcblx0XHRcdHJldHVybiBtYXAoemVyb0ZpbGwsIFtkMi5nZXRVVENGdWxsWWVhcigpLCBkMi5nZXRVVENNb250aCgpICsgMSwgZDIuZ2V0VVRDRGF0ZSgpXSkuam9pbignLScpO1xuXHRcdH1cblx0XHRpZiAoZ2V0TVdEYXRlRm9ybWF0KCkgPT09ICdJU08gODYwMScpIHtcblx0XHRcdGQyID0gY29udmVydFRpbWVab25lKGRhdGUsIGdldFRpbWVab25lKCkpO1xuXHRcdFx0cmV0dXJuIG1hcCh6ZXJvRmlsbCwgW2QyLmdldEZ1bGxZZWFyKCksIGQyLmdldE1vbnRoKCkgKyAxLCBkMi5nZXREYXRlKCldKS5qb2luKCctJyk7XG5cdFx0fVxuXHRcdGNvbnN0IG9wdGlvbnMgPSBnZXRWYWx1ZU9mKCdwb3B1cERhdGVGb3JtYXR0ZXJPcHRpb25zJyk7XG5cdFx0b3B0aW9ucy50aW1lWm9uZSA9IGdldFRpbWVab25lKCk7XG5cdFx0cmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKGdldExvY2FsZXMoKSwgb3B0aW9ucyk7XG5cdH07XG5cdGNvbnN0IGZvcm1hdHRlZFRpbWUgPSAoZGF0ZSkgPT4ge1xuXHRcdGxldCBkMjtcblx0XHQvLyBmYWxsYmFjayBmb3IgSUUxMSBhbmQgdW5rbm93biB0aW1lem9uZXNcblx0XHRpZiAodXNlVGltZU9mZnNldCgpKSB7XG5cdFx0XHQvLyB3ZSBhZGp1c3QgdGhlIFVUQyB0aW1lLCBzbyB3ZSBwcmludCB0aGUgYWRqdXN0ZWQgVVRDLCBidXQgbm90IHJlYWxseSBVVEMgdmFsdWVzXG5cdFx0XHRkMiA9IGFkanVzdERhdGUoZGF0ZSwgZ2V0VGltZU9mZnNldCgpKTtcblx0XHRcdHJldHVybiBtYXAoemVyb0ZpbGwsIFtkMi5nZXRVVENIb3VycygpLCBkMi5nZXRVVENNaW51dGVzKCksIGQyLmdldFVUQ1NlY29uZHMoKV0pLmpvaW4oJzonKTtcblx0XHR9XG5cdFx0aWYgKGdldE1XRGF0ZUZvcm1hdCgpID09PSAnSVNPIDg2MDEnKSB7XG5cdFx0XHRkMiA9IGNvbnZlcnRUaW1lWm9uZShkYXRlLCBnZXRUaW1lWm9uZSgpKTtcblx0XHRcdHJldHVybiBtYXAoemVyb0ZpbGwsIFtkMi5nZXRIb3VycygpLCBkMi5nZXRNaW51dGVzKCksIGQyLmdldFNlY29uZHMoKV0pLmpvaW4oJzonKTtcblx0XHR9XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IGdldFZhbHVlT2YoJ3BvcHVwVGltZUZvcm1hdHRlck9wdGlvbnMnKTtcblx0XHRvcHRpb25zLnRpbWVab25lID0gZ2V0VGltZVpvbmUoKTtcblx0XHRyZXR1cm4gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoZ2V0TG9jYWxlcygpLCBvcHRpb25zKTtcblx0fTtcblx0Ly8gR2V0IHRoZSBwcm9wZXIgZ3JvdXBuYW1lcyBmb3IgdGhlIHRlY2huaWNhbGdyb3Vwc1xuXHRjb25zdCBmZXRjaFVzZXJHcm91cE5hbWVzID0gKHVzZXJpbmZvUmVzcG9uc2UpID0+IHtcblx0XHRjb25zdCBxdWVyeU9iaiA9IGdldEpzT2JqKHVzZXJpbmZvUmVzcG9uc2UpLnF1ZXJ5O1xuXHRcdGNvbnN0IHVzZXIgPSBhbnlDaGlsZChxdWVyeU9iai51c2Vycyk7XG5cdFx0Y29uc3QgbWVzc2FnZXMgPSBbXTtcblx0XHRpZiAodXNlci5ncm91cHMpIHtcblx0XHRcdGZvciAoY29uc3QgZ3JvdXBOYW1lIG9mIHVzZXIuZ3JvdXBzKSB7XG5cdFx0XHRcdGlmICghWycqJywgJ3VzZXInLCAnYXV0b2NvbmZpcm1lZCddLmluY2x1ZGVzKGdyb3VwTmFtZSkpIHtcblx0XHRcdFx0XHRtZXNzYWdlcy5wdXNoKGBncm91cC0ke2dyb3VwTmFtZX0tbWVtYmVyYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHF1ZXJ5T2JqLmdsb2JhbHVzZXJpbmZvICYmIHF1ZXJ5T2JqLmdsb2JhbHVzZXJpbmZvLmdyb3Vwcykge1xuXHRcdFx0Zm9yIChjb25zdCBncm91cE5hbWUgb2YgcXVlcnlPYmouZ2xvYmFsdXNlcmluZm8uZ3JvdXBzKSB7XG5cdFx0XHRcdG1lc3NhZ2VzLnB1c2goYGdyb3VwLSR7Z3JvdXBOYW1lfS1tZW1iZXJgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGdldE13QXBpKCkubG9hZE1lc3NhZ2VzSWZNaXNzaW5nKG1lc3NhZ2VzKTtcblx0fTtcblx0Y29uc3Qgc2hvd0FQSVByZXZpZXcgPSAocXVlcnlUeXBlLCBodG1sLCBpZCwgbmF2cG9wLCBkb3dubG9hZCkgPT4ge1xuXHRcdC8vIERKOiBkb25lXG5cdFx0bGV0IHRhcmdldCA9ICdwb3B1cFByZXZpZXcnO1xuXHRcdGNvbXBsZXRlZE5hdnBvcFRhc2sobmF2cG9wKTtcblx0XHRzd2l0Y2ggKHF1ZXJ5VHlwZSkge1xuXHRcdFx0Y2FzZSAnaW1hZ2VsaW5rcyc6XG5cdFx0XHRjYXNlICdjYXRlZ29yeSc6XG5cdFx0XHRcdHRhcmdldCA9ICdwb3B1cFBvc3RQcmV2aWV3Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd1c2VyaW5mbyc6XG5cdFx0XHRcdHRhcmdldCA9ICdwb3B1cFVzZXJEYXRhJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdyZXZpc2lvbic6XG5cdFx0XHRcdGluc2VydFByZXZpZXcoZG93bmxvYWQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNldFBvcHVwVGlwc0FuZEhUTUwoaHRtbCwgdGFyZ2V0LCBpZCk7XG5cdH07XG5cdGNvbnN0IEFQSXJldmlzaW9uUHJldmlld0hUTUwgPSAoX2FydGljbGUsIGRvd25sb2FkKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGpzT2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSk7XG5cdFx0XHRjb25zdCBwYWdlID0gYW55Q2hpbGQoanNPYmoucXVlcnkucGFnZXMpO1xuXHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHQvLyBUT0RPIHdlIG5lZWQgdG8gZml4IHRoaXMgcHJvcGVyIGxhdGVyIG9uXG5cdFx0XHRcdGRvd25sb2FkLm93bmVyID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY29udGVudCA9XG5cdFx0XHRcdHBhZ2UgJiYgcGFnZS5yZXZpc2lvbnMgJiYgcGFnZS5yZXZpc2lvbnNbMF0uY29udGVudG1vZGVsID09PSAnd2lraXRleHQnXG5cdFx0XHRcdFx0PyBwYWdlLnJldmlzaW9uc1swXS5jb250ZW50XG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0aWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRkb3dubG9hZC5kYXRhID0gY29udGVudDtcblx0XHRcdFx0ZG93bmxvYWQubGFzdE1vZGlmaWVkID0gbmV3IERhdGUocGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnUmV2aXNpb24gcHJldmlldyBmYWlsZWQgOignO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgQVBJYmFja2xpbmtzUHJldmlld0hUTUwgPSAoX2FydGljbGUsIGRvd25sb2FkIC8qICwgbmF2cG9wICovKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGpzT2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSk7XG5cdFx0XHRjb25zdCBsaXN0ID0ganNPYmoucXVlcnkuYmFja2xpbmtzO1xuXHRcdFx0bGV0IGh0bWwgPSBbXTtcblx0XHRcdGlmICghbGlzdCkge1xuXHRcdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ05vIGJhY2tsaW5rcyBmb3VuZCcpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGxpc3QpIHtcblx0XHRcdFx0Y29uc3QgdCA9IG5ldyBUaXRsZShlbGVtZW50LnRpdGxlKTtcblx0XHRcdFx0aHRtbC5wdXNoKGA8YSBocmVmPVwiJHtwZy53aWtpLnRpdGxlYmFzZX0ke3QudXJsU3RyaW5nKCl9XCI+JHt0LnRvU3RyaW5nKCkuZW50aWZ5KCl9PC9hPmApO1xuXHRcdFx0fVxuXHRcdFx0aHRtbCA9IGh0bWwuam9pbignLCAnKTtcblx0XHRcdGlmIChqc09iai5jb250aW51ZSAmJiBqc09iai5jb250aW51ZS5ibGNvbnRpbnVlKSB7XG5cdFx0XHRcdGh0bWwgKz0gcG9wdXBTdHJpbmcoJyBhbmQgbW9yZScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGh0bWw7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJ2JhY2tsaW5rc1ByZXZpZXdIVE1MIHdlbnQgd29ua3knO1xuXHRcdH1cblx0fTtcblx0cGcuZm4uQVBJc2hhcmVkSW1hZ2VQYWdlUHJldmlld0hUTUwgPSAob2JqKSA9PiB7XG5cdFx0bG9nKCdBUElzaGFyZWRJbWFnZVBhZ2VQcmV2aWV3SFRNTCcpO1xuXHRcdGNvbnN0IHBvcHVwaWQgPSBvYmoucmVxdWVzdGlkO1xuXHRcdGlmIChvYmoucXVlcnkgJiYgb2JqLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRjb25zdCBwYWdlID0gYW55Q2hpbGQob2JqLnF1ZXJ5LnBhZ2VzKTtcblx0XHRcdGNvbnN0IGNvbnRlbnQgPVxuXHRcdFx0XHRwYWdlICYmIHBhZ2UucmV2aXNpb25zICYmIHBhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnRtb2RlbCA9PT0gJ3dpa2l0ZXh0J1xuXHRcdFx0XHRcdD8gcGFnZS5yZXZpc2lvbnNbMF0uY29udGVudFxuXHRcdFx0XHRcdDogbnVsbDtcblx0XHRcdGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycgJiYgcGcgJiYgcGcuY3VycmVudCAmJiBwZy5jdXJyZW50LmxpbmsgJiYgcGcuY3VycmVudC5saW5rLm5hdnBvcHVwKSB7XG5cdFx0XHRcdC8qIE5vdCBlbnRpcmVseSBzYWZlLCBidXQgdGhlIGJlc3Qgd2UgY2FuIGRvICovXG5cdFx0XHRcdGNvbnN0IHAgPSBuZXcgUHJldmlld21ha2VyKGNvbnRlbnQsIHBnLmN1cnJlbnQubGluay5uYXZwb3B1cC5hcnRpY2xlLCBwZy5jdXJyZW50LmxpbmsubmF2cG9wdXApO1xuXHRcdFx0XHRwLm1ha2VQcmV2aWV3KCk7XG5cdFx0XHRcdHNldFBvcHVwSFRNTChwLmh0bWwsICdwb3B1cFNlY29uZFByZXZpZXcnLCBwb3B1cGlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IEFQSWltYWdlcGFnZVByZXZpZXdIVE1MID0gKGFydGljbGUsIGRvd25sb2FkLCBuYXZwb3ApID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNPYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IHBhZ2UgPSBhbnlDaGlsZChqc09iai5xdWVyeS5wYWdlcyk7XG5cdFx0XHRjb25zdCBjb250ZW50ID1cblx0XHRcdFx0cGFnZSAmJiBwYWdlLnJldmlzaW9ucyAmJiBwYWdlLnJldmlzaW9uc1swXS5jb250ZW50bW9kZWwgPT09ICd3aWtpdGV4dCdcblx0XHRcdFx0XHQ/IHBhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnRcblx0XHRcdFx0XHQ6IG51bGw7XG5cdFx0XHRsZXQgcmV0ID0gJyc7XG5cdFx0XHRsZXQgYWx0ID0gJyc7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRbe2FsdH1dID0gbmF2cG9wLnBhcmVudEFuY2hvci5jaGlsZE5vZGVzO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHR9XG5cdFx0XHRpZiAoYWx0KSB7XG5cdFx0XHRcdHJldCA9IGAke3JldH08aHI+PGI+JHtwb3B1cFN0cmluZygnQWx0IHRleHQ6Jyl9PC9iPiAke3BnLmVzY2FwZVF1b3Rlc0hUTUwoYWx0KX1gO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRjb25zdCBwID0gcHJlcFByZXZpZXdtYWtlcihjb250ZW50LCBhcnRpY2xlLCBuYXZwb3ApO1xuXHRcdFx0XHRwLm1ha2VQcmV2aWV3KCk7XG5cdFx0XHRcdGlmIChwLmh0bWwpIHtcblx0XHRcdFx0XHRyZXQgKz0gYDxocj4ke3AuaHRtbH1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFN1bW1hcnlEYXRhJykpIHtcblx0XHRcdFx0XHRjb25zdCBpbmZvID0gZ2V0UGFnZUluZm8oY29udGVudCwgZG93bmxvYWQpO1xuXHRcdFx0XHRcdGxvZyhpbmZvKTtcblx0XHRcdFx0XHRzZXRQb3B1cFRyYWlsZXIoaW5mbywgbmF2cG9wLmlkTnVtYmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHBhZ2UgJiYgcGFnZS5pbWFnZXJlcG9zaXRvcnkgPT09ICdzaGFyZWQnKSB7XG5cdFx0XHRcdGNvbnN0IGFydCA9IG5ldyBUaXRsZShhcnRpY2xlKTtcblx0XHRcdFx0Y29uc3QgZW5jYXJ0ID0gZW5jb2RlVVJJQ29tcG9uZW50KGBGaWxlOiR7YXJ0LnN0cmlwTmFtZXNwYWNlKCl9YCk7XG5cdFx0XHRcdGNvbnN0IHNoYXJlZF91cmwgPVxuXHRcdFx0XHRcdGAke3BnLndpa2kuYXBpY29tbW9uc2Jhc2V9P2Zvcm1hdD1qc29uJmZvcm1hdHZlcnNpb249MmAgK1xuXHRcdFx0XHRcdCcmY2FsbGJhY2s9cGcuZm4uQVBJc2hhcmVkSW1hZ2VQYWdlUHJldmlld0hUTUwnICtcblx0XHRcdFx0XHRgJnJlcXVlc3RpZD0ke25hdnBvcC5pZE51bWJlcn0mYWN0aW9uPXF1ZXJ5JnByb3A9cmV2aXNpb25zJnJ2cHJvcD1jb250ZW50JnRpdGxlcz0ke2VuY2FydH1gO1xuXHRcdFx0XHRyZXQgPSBgJHtyZXR9PGhyPiR7cG9wdXBTdHJpbmcoJ0ltYWdlIGZyb20gQ29tbW9ucycpfTogPGEgaHJlZj1cIiR7XG5cdFx0XHRcdFx0cGcud2lraS5jb21tb25zYmFzZVxuXHRcdFx0XHR9P3RpdGxlPSR7ZW5jYXJ0fVwiPiR7cG9wdXBTdHJpbmcoJ0Rlc2NyaXB0aW9uIHBhZ2UnKX08L2E+YDtcblx0XHRcdFx0bXcubG9hZGVyLmxvYWQoc2hhcmVkX3VybCk7XG5cdFx0XHR9XG5cdFx0XHRzaG93QVBJUHJldmlldygnaW1hZ2VsaW5rcycsIEFQSWltYWdlbGlua3NQcmV2aWV3SFRNTChhcnRpY2xlLCBkb3dubG9hZCksIG5hdnBvcC5pZE51bWJlciwgZG93bmxvYWQpO1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnQVBJIGltYWdlcGFnZSBwcmV2aWV3IGZhaWxlZCA6KCc7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBBUElpbWFnZWxpbmtzUHJldmlld0hUTUwgPSAoX2FydGljbGUsIGRvd25sb2FkKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGpzb2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSk7XG5cdFx0XHRjb25zdCBsaXN0ID0ganNvYmoucXVlcnkuaW1hZ2V1c2FnZTtcblx0XHRcdGlmIChsaXN0KSB7XG5cdFx0XHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0XHRcdHJldC5wdXNoKGVsZW1lbnQudGl0bGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZXQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBvcHVwU3RyaW5nKCdObyBpbWFnZSBsaW5rcyBmb3VuZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBgPGgyPiR7cG9wdXBTdHJpbmcoJ0ZpbGUgbGlua3MnKX08L2gyPiR7bGlua0xpc3QocmV0KX1gO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHBvcHVwU3RyaW5nKCdObyBpbWFnZSBsaW5rcyBmb3VuZCcpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICdJbWFnZSBsaW5rcyBwcmV2aWV3IGdlbmVyYXRpb24gZmFpbGVkIDooJztcblx0XHR9XG5cdH07XG5cdGNvbnN0IEFQSWNhdGVnb3J5UHJldmlld0hUTUwgPSAoX2FydGljbGUsIGRvd25sb2FkKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGpzb2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSk7XG5cdFx0XHRjb25zdCBsaXN0ID0ganNvYmoucXVlcnkuY2F0ZWdvcnltZW1iZXJzO1xuXHRcdFx0bGV0IHJldCA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGxpc3QpIHtcblx0XHRcdFx0cmV0LnB1c2goZWxlbWVudC50aXRsZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAocmV0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ0VtcHR5IGNhdGVnb3J5Jyk7XG5cdFx0XHR9XG5cdFx0XHRyZXQgPSBgPGgyPiR7dHByaW50ZignQ2F0ZWdvcnkgbWVtYmVycyAoJXMgc2hvd24pJywgW3JldC5sZW5ndGhdKX08L2gyPiR7bGlua0xpc3QocmV0KX1gO1xuXHRcdFx0aWYgKGpzb2JqLmNvbnRpbnVlICYmIGpzb2JqLmNvbnRpbnVlLmNtY29udGludWUpIHtcblx0XHRcdFx0cmV0ICs9IHBvcHVwU3RyaW5nKCcgYW5kIG1vcmUnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJ0NhdGVnb3J5IHByZXZpZXcgZmFpbGVkIDooJztcblx0XHR9XG5cdH07XG5cdGNvbnN0IEFQSXVzZXJJbmZvUHJldmlld0hUTUwgPSAoX2FydGljbGUsIGRvd25sb2FkKSA9PiB7XG5cdFx0bGV0IHJldCA9IFtdO1xuXHRcdGxldCBxdWVyeW9iaiA9IHt9O1xuXHRcdHRyeSB7XG5cdFx0XHRxdWVyeW9iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpLnF1ZXJ5O1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICdVc2VyaW5mbyBwcmV2aWV3IGZhaWxlZCA6KCc7XG5cdFx0fVxuXHRcdGNvbnN0IHVzZXIgPSBhbnlDaGlsZChxdWVyeW9iai51c2Vycyk7XG5cdFx0aWYgKHVzZXIpIHtcblx0XHRcdGNvbnN0IHtnbG9iYWx1c2VyaW5mb30gPSBxdWVyeW9iajtcblx0XHRcdGlmICh1c2VyLmludmFsaWQgPT09ICcnKSB7XG5cdFx0XHRcdHJldC5wdXNoKHBvcHVwU3RyaW5nKCdJbnZhbGlkIHVzZXInKSk7XG5cdFx0XHR9IGVsc2UgaWYgKHVzZXIubWlzc2luZyA9PT0gJycpIHtcblx0XHRcdFx0cmV0LnB1c2gocG9wdXBTdHJpbmcoJ05vdCBhIHJlZ2lzdGVyZWQgdXNlcm5hbWUnKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodXNlci5ibG9ja2VkYnkpIHtcblx0XHRcdFx0aWYgKHVzZXIuYmxvY2twYXJ0aWFsKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goYDxiPiR7cG9wdXBTdHJpbmcoJ0hhcyBibG9ja3MnKX08L2I+YCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goYDxiPiR7cG9wdXBTdHJpbmcoJ0JMT0NLRUQnKX08L2I+YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChnbG9iYWx1c2VyaW5mbyAmJiAoJ2xvY2tlZCcgaW4gZ2xvYmFsdXNlcmluZm8gfHwgJ2hpZGRlbicgaW4gZ2xvYmFsdXNlcmluZm8pKSB7XG5cdFx0XHRcdGxldCBsb2NrZWRTdWxBY2NvdW50SXNBdHRhY2hlZFRvVGhpcyA9IHRydWU7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBnbG9iYWx1c2VyaW5mby51bmF0dGFjaGVkICYmIGkgPCBnbG9iYWx1c2VyaW5mby51bmF0dGFjaGVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGdsb2JhbHVzZXJpbmZvLnVuYXR0YWNoZWRbaV0ud2lraSA9PT0gbXcuY29uZmlnLmdldCgnd2dEQm5hbWUnKSkge1xuXHRcdFx0XHRcdFx0bG9ja2VkU3VsQWNjb3VudElzQXR0YWNoZWRUb1RoaXMgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobG9ja2VkU3VsQWNjb3VudElzQXR0YWNoZWRUb1RoaXMpIHtcblx0XHRcdFx0XHRpZiAoJ2xvY2tlZCcgaW4gZ2xvYmFsdXNlcmluZm8pIHtcblx0XHRcdFx0XHRcdHJldC5wdXNoKGA8Yj48aT4ke3BvcHVwU3RyaW5nKCdMT0NLRUQnKX08L2k+PC9iPmApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoJ2hpZGRlbicgaW4gZ2xvYmFsdXNlcmluZm8pIHtcblx0XHRcdFx0XHRcdHJldC5wdXNoKGA8Yj48aT4ke3BvcHVwU3RyaW5nKCdISURERU4nKX08L2k+PC9iPmApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwU2hvd0dlbmRlcicpICYmIHVzZXIuZ2VuZGVyKSB7XG5cdFx0XHRcdHN3aXRjaCAodXNlci5nZW5kZXIpIHtcblx0XHRcdFx0XHRjYXNlICdtYWxlJzpcblx0XHRcdFx0XHRcdHJldC5wdXNoKGAke3BvcHVwU3RyaW5nKCdoZS9oaW0nKX0gwrcgYCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdmZW1hbGUnOlxuXHRcdFx0XHRcdFx0cmV0LnB1c2goYCR7cG9wdXBTdHJpbmcoJ3NoZS9oZXInKX0gwrcgYCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHVzZXIuZ3JvdXBzKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZ3JvdXBOYW1lIG9mIHVzZXIuZ3JvdXBzKSB7XG5cdFx0XHRcdFx0aWYgKCFbJyonLCAndXNlcicsICdhdXRvY29uZmlybWVkJ10uaW5jbHVkZXMoZ3JvdXBOYW1lKSkge1xuXHRcdFx0XHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdFx0Ly8gKiBzZWUgW1tTcGVjaWFsOlByZWZpeEluZGV4L01lZGlhV2lraTpHcm91cC1dXVxuXHRcdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdFx0cmV0LnB1c2gocGcuZXNjYXBlUXVvdGVzSFRNTChtdy5tZXNzYWdlKGBncm91cC0ke2dyb3VwTmFtZX0tbWVtYmVyYCwgdXNlci5nZW5kZXIpLnRleHQoKSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGdsb2JhbHVzZXJpbmZvICYmIGdsb2JhbHVzZXJpbmZvLmdyb3Vwcykge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGdyb3VwTmFtZSBvZiBnbG9iYWx1c2VyaW5mby5ncm91cHMpIHtcblx0XHRcdFx0XHRyZXQucHVzaChcblx0XHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHRcdC8vICogc2VlIFtbU3BlY2lhbDpQcmVmaXhJbmRleC9NZWRpYVdpa2k6R3JvdXAtXV1cblx0XHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHRcdGA8aT4ke3BnLmVzY2FwZVF1b3Rlc0hUTUwobXcubWVzc2FnZShgZ3JvdXAtJHtncm91cE5hbWV9LW1lbWJlcmAsIHVzZXIuZ2VuZGVyKS50ZXh0KCkpfTwvaT5gXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHVzZXIucmVnaXN0cmF0aW9uKSB7XG5cdFx0XHRcdHJldC5wdXNoKFxuXHRcdFx0XHRcdHBnLmVzY2FwZVF1b3Rlc0hUTUwoXG5cdFx0XHRcdFx0XHQodXNlci5lZGl0Y291bnQgPz8gJzAnKSArXG5cdFx0XHRcdFx0XHRcdHBvcHVwU3RyaW5nKCcgZWRpdHMgc2luY2U6ICcpICtcblx0XHRcdFx0XHRcdFx0KHVzZXIucmVnaXN0cmF0aW9uID8gZm9ybWF0dGVkRGF0ZShuZXcgRGF0ZSh1c2VyLnJlZ2lzdHJhdGlvbikpIDogJycpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAocXVlcnlvYmoudXNlcmNvbnRyaWJzICYmIHF1ZXJ5b2JqLnVzZXJjb250cmlicy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXQucHVzaChwb3B1cFN0cmluZygnbGFzdCBlZGl0IG9uICcpICsgZm9ybWF0dGVkRGF0ZShuZXcgRGF0ZShxdWVyeW9iai51c2VyY29udHJpYnNbMF0udGltZXN0YW1wKSkpO1xuXHRcdH1cblx0XHRpZiAocXVlcnlvYmouYmxvY2tzKSB7XG5cdFx0XHRyZXQucHVzaChwb3B1cFN0cmluZygnSVAgdXNlcicpKTsgLy8gd2Ugb25seSByZXF1ZXN0IGxpc3Q9YmxvY2tzIGZvciBJUHNcblx0XHRcdGZvciAobGV0IGwgPSAwOyBsIDwgcXVlcnlvYmouYmxvY2tzLmxlbmd0aDsgbCsrKSB7XG5cdFx0XHRcdGxldCByYnN0ciA9IHF1ZXJ5b2JqLmJsb2Nrc1tsXS5yYW5nZXN0YXJ0ID09PSBxdWVyeW9iai5ibG9ja3NbbF0ucmFuZ2VlbmQgPyAnQkxPQ0snIDogJ1JBTkdFQkxPQ0snO1xuXHRcdFx0XHRyYnN0ciA9IEFycmF5LmlzQXJyYXkocXVlcnlvYmouYmxvY2tzW2xdLnJlc3RyaWN0aW9ucykgPyBgJHtyYnN0cn1FRGAgOiBgSGFzICR7cmJzdHIudG9Mb3dlckNhc2UoKX1zYDtcblx0XHRcdFx0cmV0LnB1c2goYDxiPiR7cG9wdXBTdHJpbmcocmJzdHIpfTwvYj5gKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gaWYgYW55IGVsZW1lbnQgb2YgcmV0IGVuZHMgd2l0aCAnIMK3ICcsIG1lcmdlIGl0IHdpdGggdGhlIG5leHQgZWxlbWVudCB0byBhdm9pZFxuXHRcdC8vIHRoZSAuam9pbignLCAnKSBjYWxsIGluc2VydGluZyBhIGNvbW1hIGFmdGVyIGl0XG5cdFx0Zm9yIChsZXQgbSA9IDA7IG0gPCByZXQubGVuZ3RoIC0gMTsgbSsrKSB7XG5cdFx0XHRpZiAocmV0W21dLmxlbmd0aCA+IDMgJiYgcmV0W21dLnNsaWNlKE1hdGgubWF4KDAsIHJldFttXS5sZW5ndGggLSAzKSkgPT09ICcgwrcgJykge1xuXHRcdFx0XHRyZXRbbV0gKz0gcmV0W20gKyAxXTtcblx0XHRcdFx0cmV0LnNwbGljZShtICsgMSwgMSk7IC8vIGRlbGV0ZSBlbGVtZW50IGF0IGluZGV4IG0rMVxuXHRcdFx0XHRtLS07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldCA9IGA8aHI+JHtyZXQuam9pbignLCAnKX1gO1xuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IEFQSWNvbnRyaWJzUHJldmlld0hUTUwgPSAoYXJ0aWNsZSwgZG93bmxvYWQsIG5hdnBvcCkgPT4ge1xuXHRcdHJldHVybiBBUEloaXN0b3J5UHJldmlld0hUTUwoYXJ0aWNsZSwgZG93bmxvYWQsIG5hdnBvcCwgdHJ1ZSk7XG5cdH07XG5cdGNvbnN0IEFQSWhpc3RvcnlQcmV2aWV3SFRNTCA9IChhcnRpY2xlLCBkb3dubG9hZCwgX25hdnBvcCwgcmVhbGx5Q29udHJpYnMpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNvYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGxldCBlZGl0cyA9IFtdO1xuXHRcdFx0ZWRpdHMgPSByZWFsbHlDb250cmlicyA/IGpzb2JqLnF1ZXJ5LnVzZXJjb250cmlicyA6IGFueUNoaWxkKGpzb2JqLnF1ZXJ5LnBhZ2VzKS5yZXZpc2lvbnM7XG5cdFx0XHRjb25zdCByZXQgPSBlZGl0UHJldmlld1RhYmxlKGFydGljbGUsIGVkaXRzLCByZWFsbHlDb250cmlicyk7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICdIaXN0b3J5IHByZXZpZXcgZmFpbGVkIDotKCc7XG5cdFx0fVxuXHR9O1xuXHQvLyBFTkRGSUxFOiBxdWVyeXByZXZpZXcuanNcblx0Ly8gU1RBUlRGSUxFOiBkZWJ1Zy5qc1xuXHQvLyBEZWJ1Z2dpbmcgZnVuY3Rpb25zXG5cdGNvbnN0IHNldHVwRGVidWdnaW5nID0gKCkgPT4ge1xuXHRcdGlmICh3aW5kb3cucG9wdXBEZWJ1Zykge1xuXHRcdFx0Ly8gcG9wdXBEZWJ1ZyBpcyBzZXQgZnJvbSAudmVyc2lvblxuXHRcdFx0d2luZG93LmxvZyA9ICh4KSA9PiB7XG5cdFx0XHRcdC8vIGlmIChnIE1zZyAhPT0gJycpIHsgZ01zZyArPSAnXFxuJzsgZ01zZys9dGltZSgpICsgJyAnICsgeDsgfVxuXHRcdFx0XHRjb25zb2xlLmxvZyh4KTtcblx0XHRcdH07XG5cdFx0XHR3aW5kb3cuZXJybG9nID0gKHgpID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgW1BvcHVwc10gJHt4fWApO1xuXHRcdFx0fTtcblx0XHRcdGxvZygnSW5pdGlhbGl6aW5nIGxvZ2dlcicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cubG9nID0gKCkgPT4ge307XG5cdFx0XHR3aW5kb3cuZXJybG9nID0gKCkgPT4ge307XG5cdFx0fVxuXHR9O1xuXHQvLyBFTkRGSUxFOiBkZWJ1Zy5qc1xuXHQvLyBTVEFSVEZJTEU6IGltYWdlcy5qc1xuXHQvLyBsb2FkIGltYWdlIG9mIHR5cGUgVGl0bGUuXG5cdGNvbnN0IGxvYWRJbWFnZSA9IChpbWFnZSwgbmF2cG9wKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBpbWFnZS5zdHJpcE5hbWVzcGFjZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoJ2xvYWRJbWFnZXMgYmFkJywge3RhZzogJ3BvcHVwcycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHR9XG5cdFx0Ly8gQVBJIGNhbGwgdG8gcmV0cmlldmUgaW1hZ2UgaW5mby5cblx0XHRpZiAoIWdldFZhbHVlT2YoJ3BvcHVwSW1hZ2VzJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFpc1ZhbGlkSW1hZ2VOYW1lKGltYWdlLnRvU3RyaW5nKCkpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IGFydCA9IGltYWdlLnVybFN0cmluZygpO1xuXHRcdGxldCB1cmwgPSBgJHtwZy53aWtpLmFwaXdpa2liYXNlfT9mb3JtYXQ9anNvbiZmb3JtYXR2ZXJzaW9uPTImYWN0aW9uPXF1ZXJ5YDtcblx0XHR1cmwgKz0gYCZwcm9wPWltYWdlaW5mbyZpaXByb3A9dXJsfG1pbWUmaWl1cmx3aWR0aD0ke2dldFZhbHVlT2YoJ3BvcHVwSW1hZ2VTaXplTGFyZ2UnKX1gO1xuXHRcdHVybCArPSBgJnRpdGxlcz0ke2FydH1gO1xuXHRcdHBlbmRpbmdOYXZwb3BUYXNrKG5hdnBvcCk7XG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAoZCkgPT4ge1xuXHRcdFx0cG9wdXBzSW5zZXJ0SW1hZ2UobmF2cG9wLmlkTnVtYmVyLCBuYXZwb3AsIGQpO1xuXHRcdH07XG5cdFx0Y29uc3QgZ28gPSAoKSA9PiB7XG5cdFx0XHRnZXRQYWdlV2l0aENhY2hpbmcodXJsLCBjYWxsYmFjaywgbmF2cG9wKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cdFx0aWYgKG5hdnBvcC52aXNpYmxlIHx8ICFnZXRWYWx1ZU9mKCdwb3B1cExhenlEb3dubG9hZHMnKSkge1xuXHRcdFx0Z28oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmF2cG9wLmFkZEhvb2soZ28sICd1bmhpZGUnLCAnYWZ0ZXInLCAnRE9XTkxPQURfSU1BR0VfUVVFUllfREFUQScpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcG9wdXBzSW5zZXJ0SW1hZ2UgPSAoaWQsIF9uYXZwb3AsIGRvd25sb2FkKSA9PiB7XG5cdFx0bG9nKCdwb3B1cHNJbnNlcnRJbWFnZScpO1xuXHRcdGxldCBpbWFnZWluZm87XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGpzT2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSk7XG5cdFx0XHRjb25zdCBpbWFnZXBhZ2UgPSBhbnlDaGlsZChqc09iai5xdWVyeS5wYWdlcyk7XG5cdFx0XHRpZiAoaW1hZ2VwYWdlLmltYWdlaW5mbyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdFtpbWFnZWluZm9dID0gaW1hZ2VwYWdlLmltYWdlaW5mbztcblx0XHR9IGNhdGNoIHtcblx0XHRcdGxvZygncG9wdXBzSW5zZXJ0SW1hZ2UgZmFpbGVkIDooJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHBvcHVwSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcG9wdXBJbWcke2lkfWApO1xuXHRcdGlmICghcG9wdXBJbWFnZSkge1xuXHRcdFx0bG9nKCdjb3VsZCBub3QgZmluZCBpbnNlcnRpb24gcG9pbnQgZm9yIGltYWdlJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHBvcHVwSW1hZ2Uud2lkdGggPSBnZXRWYWx1ZU9mKCdwb3B1cEltYWdlU2l6ZScpO1xuXHRcdHBvcHVwSW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHRcdC8vIFNldCB0aGUgc291cmNlIGZvciB0aGUgaW1hZ2UuXG5cdFx0aWYgKGltYWdlaW5mby50aHVtYnVybCkge1xuXHRcdFx0cG9wdXBJbWFnZS5zcmMgPSBpbWFnZWluZm8udGh1bWJ1cmw7XG5cdFx0fSBlbHNlIGlmIChpbWFnZWluZm8ubWltZS5pbmRleE9mKCdpbWFnZScpID09PSAwKSB7XG5cdFx0XHRwb3B1cEltYWdlLnNyYyA9IGltYWdlaW5mby51cmw7XG5cdFx0XHRsb2coJ2EgdGh1bWIgY291bGQgbm90IGJlIGZvdW5kLCB1c2luZyBvcmlnaW5hbCBpbWFnZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsb2coXCJmdWxsc2l6ZSBpbWFnZXRodW1iLCBidXQgbm90IHN1cmUgaWYgaXQncyBhbiBpbWFnZVwiKTtcblx0XHR9XG5cdFx0Y29uc3QgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwb3B1cEltYWdlTGluayR7aWR9YCk7XG5cdFx0aWYgKGEgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHQvLyBEZXRlcm1pbmUgdGhlIGFjdGlvbiBvZiB0aGUgc3Vycm91ZGluZyBpbWFnZWxpbmsuXG5cdFx0c3dpdGNoIChnZXRWYWx1ZU9mKCdwb3B1cFRodW1iQWN0aW9uJykpIHtcblx0XHRcdGNhc2UgJ2ltYWdlcGFnZSc6XG5cdFx0XHRcdGlmIChwZy5jdXJyZW50LmFydGljbGUubmFtZXNwYWNlSWQoKSAhPT0gcGcubnNJbWFnZUlkKSB7XG5cdFx0XHRcdFx0YS5ocmVmID0gaW1hZ2VpbmZvLmRlc2NyaXB0aW9udXJsO1xuXHRcdFx0XHRcdC8vIEZJWE1FOiB1bnJlbGlhYmxlIHBnLmlkTnVtYmVyXG5cdFx0XHRcdFx0cG9wVGlwc1Nvb25GbihgcG9wdXBJbWFnZSR7aWR9YCkoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdFx0Y2FzZSAnc2l6ZXRvZ2dsZSc6XG5cdFx0XHRcdGEub25jbGljayA9IHRvZ2dsZVNpemU7XG5cdFx0XHRcdGEudGl0bGUgPSBwb3B1cFN0cmluZygnVG9nZ2xlIGltYWdlIHNpemUnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0Y2FzZSAnbGlua2Z1bGwnOlxuXHRcdFx0XHRhLmhyZWYgPSBpbWFnZWluZm8udXJsO1xuXHRcdFx0XHRhLnRpdGxlID0gcG9wdXBTdHJpbmcoJ09wZW4gZnVsbC1zaXplIGltYWdlJyk7XG5cdFx0fVxuXHR9O1xuXHQvLyBUb2dnbGVzIHRoZSBpbWFnZSBiZXR3ZWVuIGlubGluZSBzbWFsbCBhbmQgbmF2cG9wIGZ1bGx3aWR0aC5cblx0Ly8gSXQncyB0aGUgc2FtZSBpbWFnZSwgbm8gYWN0dWFsIHNpemVjaGFuZ2Ugb2NjdXJzLCBvbmx5IGRpc3BsYXkgd2lkdGguXG5cdGNvbnN0IHRvZ2dsZVNpemUgPSBmdW5jdGlvbiB0b2dnbGVTaXplKCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGlmICghc2VsZikge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoJ3NlbGYgaXMgbnVsbCA6LycsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGltZyA9IHNlbGYuZmlyc3RDaGlsZDtcblx0XHRpZiAoIWltZykge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoJ2ltZyBpcyBudWxsIDovJywge3RhZzogJ3BvcHVwcycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW1nLnN0eWxlLndpZHRoID0gIWltZy5zdHlsZS53aWR0aCB8fCBpbWcuc3R5bGUud2lkdGggPT09ICcnID8gJzEwMCUnIDogJyc7XG5cdH07XG5cdC8vIFJldHVybnMgb25lIHRpdGxlIG9mIGFuIGltYWdlIGZyb20gd2lraVRleHQuXG5cdGNvbnN0IGdldFZhbGlkSW1hZ2VGcm9tV2lraVRleHQgPSAod2lraVRleHQpID0+IHtcblx0XHQvLyBuYiBpbiBwZy5yZS5pbWFnZSB3ZSdyZSBpbnRlcmVzdGVkIGluIHRoZSBzZWNvbmQgYnJhY2tldGVkIGV4cHJlc3Npb25cblx0XHQvLyB0aGlzIG1heSBjaGFuZ2UgaWYgdGhlIHJlZ2V4IGNoYW5nZXMgOi0oXG5cdFx0Ly8gbGV0IG1hdGNoPXBnLnJlLmltYWdlLmV4ZWMod2lraVRleHQpO1xuXHRcdGxldCBtYXRjaGVkO1xuXHRcdGxldCBtYXRjaDtcblx0XHQvLyBzdHJpcCBodG1sIGNvbW1lbnRzLCB1c2VkIGJ5IGV2aWwgYm90cyA6LShcblx0XHRjb25zdCB0ID0gcmVtb3ZlTWF0Y2hlc1VubGVzcyh3aWtpVGV4dCwgLyg8IS0tW1xcU1xcc10qPy0tPikvLCAxLCAvXjwhLS1bXltdKnBvcHVwL2kpO1xuXHRcdHdoaWxlICgobWF0Y2ggPSBwZy5yZS5pbWFnZS5leGVjKHQpKSAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gbm93IGZpbmQgYSBzYW5lIGltYWdlIG5hbWUgLSBleGNsdWRlIHRlbXBsYXRlcyBieSBzZWVraW5nIHtcblx0XHRcdGNvbnN0IG0gPSBtYXRjaFsyXSB8fCBtYXRjaFs2XTtcblx0XHRcdGlmIChpc1ZhbGlkSW1hZ2VOYW1lKG0pKSB7XG5cdFx0XHRcdG1hdGNoZWQgPSBtO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cGcucmUuaW1hZ2UubGFzdEluZGV4ID0gMDtcblx0XHRpZiAoIW1hdGNoZWQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gYCR7bXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNJbWFnZUlkXX06JHt1cGNhc2VGaXJzdChtYXRjaGVkKX1gO1xuXHR9O1xuXHRjb25zdCByZW1vdmVNYXRjaGVzVW5sZXNzID0gKHN0ciwgcmUxLCBwYXJlbmNvdW50LCByZTIpID0+IHtcblx0XHRjb25zdCBzcGxpdCA9IHN0ci5zcGxpdChyZTEpO1xuXHRcdGNvbnN0IGMgPSBwYXJlbmNvdW50ICsgMTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoaSAlIGMgPT09IDAgfHwgcmUyLnRlc3Qoc3BsaXRbaV0pKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0c3BsaXRbaV0gPSAnJztcblx0XHR9XG5cdFx0cmV0dXJuIHNwbGl0LmpvaW4oJycpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBpbWFnZXMuanNcblx0Ly8gU1RBUlRGSUxFOiBuYW1lc3BhY2VzLmpzXG5cdC8vIFNldCB1cCBuYW1lc3BhY2VzIGFuZCBvdGhlciBub24tc3RyaW5ncy5qcyBsb2NhbGl6YXRpb25cblx0Ly8gKGN1cnJlbnRseSB0aGF0IG1lYW5zIHJlZGlycyB0b28pXG5cdGNvbnN0IHNldE5hbWVzcGFjZXMgPSAoKSA9PiB7XG5cdFx0cGcubnNTcGVjaWFsSWQgPSAtMTtcblx0XHRwZy5uc01haW5zcGFjZUlkID0gMDtcblx0XHRwZy5uc0ltYWdlSWQgPSA2O1xuXHRcdHBnLm5zVXNlcklkID0gMjtcblx0XHRwZy5uc1VzZXJ0YWxrSWQgPSAzO1xuXHRcdHBnLm5zQ2F0ZWdvcnlJZCA9IDE0O1xuXHRcdHBnLm5zVGVtcGxhdGVJZCA9IDEwO1xuXHR9O1xuXHRjb25zdCBzZXRSZWRpcnMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgciA9ICdyZWRpcmVjdCc7XG5cdFx0Y29uc3QgUiA9ICdSRURJUkVDVCc7XG5cdFx0Y29uc3QgcmVkaXJMaXN0cyA9IHtcblx0XHRcdGFyOiBbUiwgJ9iq2K3ZiNmK2YQnXSxcblx0XHRcdGJlOiBbciwgJ9C/0LXRgNCw0L3QsNC60ZbRgNCw0LLQsNC90YzQvdC1J10sXG5cdFx0XHRiZzogW3IsICfQv9GA0LXQvdCw0YHQvtGH0LLQsNC90LUnLCAn0LLQuNC2J10sXG5cdFx0XHRiczogW3IsICdQcmV1c21qZXJpJywgJ3ByZXVzbWplcmknLCAnUFJFVVNNSkVSSSddLFxuXHRcdFx0Ym46IFtSLCAn4Kaq4KeB4Kao4Kaw4KeN4Kao4Ka/4Kaw4KeN4Kam4KeH4Ka2J10sXG5cdFx0XHRjczogW1IsICdQxZhFU03EmlJVSiddLFxuXHRcdFx0Y3k6IFtyLCAnYWlsLWN5ZmVpcmlvJ10sXG5cdFx0XHRkZTogW1IsICdXRUlURVJMRUlUVU5HJ10sXG5cdFx0XHRlbDogW1IsICfOkc6dzpHOms6RzqTOlc6lzpjOpc6dzqPOlyddLFxuXHRcdFx0ZW86IFtSLCAnQUxJRElSRUtUVScsICdBTElESVJFS1RJJ10sXG5cdFx0XHRlczogW1IsICdSRURJUkVDQ0nDk04nXSxcblx0XHRcdGV0OiBbciwgJ3N1dW5hJ10sXG5cdFx0XHRnYTogW3IsICdhdGhzaGVvbGFkaCddLFxuXHRcdFx0Z2w6IFtyLCAnUkVESVJFQ0NJw5NOJywgJ1JFRElSRUNJT05BTUVOVE8nXSxcblx0XHRcdGhlOiBbUiwgJ9eU16TXoNeZ15QnXSxcblx0XHRcdGh1OiBbUiwgJ8OBVElSw4FOWcONVMOBUyddLFxuXHRcdFx0aXM6IFtyLCAndGlsdsOtc3VuJywgJ1RJTFbDjVNVTiddLFxuXHRcdFx0aXQ6IFtSLCAnUklOVklBJywgJ1JpbnZpYSddLFxuXHRcdFx0amE6IFtSLCAn6Lui6YCBJ10sXG5cdFx0XHRtazogW3IsICfQv9GA0LXQvdCw0YHQvtGH0YPQstCw0ZrQtScsICfQstC40LTQuCddLFxuXHRcdFx0bmRzOiBbciwgJ3dpZWRlcmxlaWRlbiddLFxuXHRcdFx0J25kcy1ubCc6IFtSLCAnREVVUlZFUldJRVpJTkcnLCAnRFVVUlZFUldJRVpJTkcnXSxcblx0XHRcdG5sOiBbUiwgJ0RPT1JWRVJXSUpaSU5HJ10sXG5cdFx0XHRubjogW3IsICdvbWRpcmlnZXInXSxcblx0XHRcdHBsOiBbUiwgJ1BBVFJaJywgJ1BSWkVLSUVSVUonLCAnVEFNJ10sXG5cdFx0XHRwdDogW1IsICdyZWRpciddLFxuXHRcdFx0cnU6IFtSLCAn0J/QldCg0JXQndCQ0J/QoNCQ0JLQm9CV0J3QmNCVJywgJ9Cf0JXQoNCV0J3QkNCf0KAnXSxcblx0XHRcdHNrOiBbciwgJ3ByZXNtZXJ1aiddLFxuXHRcdFx0c3I6IFtyLCAn0J/RgNC10YPRgdC80LXRgNC4JywgJ9C/0YDQtdGD0YHQvNC10YDQuCcsICfQn9Cg0JXQo9Ch0JzQldCg0JgnLCAnUHJldXNtZXJpJywgJ3ByZXVzbWVyaScsICdQUkVVU01FUkknXSxcblx0XHRcdHR0OiBbUiwgJ3nDvG7DpGx0w7wnLCAn0L/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3QuNC1JywgJ9C/0LXRgNC10L3QsNC/0YAnXSxcblx0XHRcdHVrOiBbUiwgJ9Cf0JXQoNCV0J3QkNCf0KDQkNCS0JvQldCd0J3QrycsICfQn9CV0KDQldCd0JDQn9CgJ10sXG5cdFx0XHR2aTogW3IsICfEkeG7lWknXSxcblx0XHRcdHlpOiBbUiwgJ9eV15XXmdeZ15jXoteo16TXmdeo158nXSxcblx0XHRcdHpoOiBbUiwgJ+mHjeWumuWQkSddLCAvLyBubyBjb21tYVxuXHRcdH07XG5cdFx0Y29uc3QgcmVkaXJMaXN0ID0gcmVkaXJMaXN0c1twZy53aWtpLmxhbmddIHx8IFtyLCBSXTtcblx0XHQvLyBNZWRpYXdpa2kgaXMgdmVyeSB0b2xlcmFudCBhYm91dCB3aGF0IGNvbWVzIGFmdGVyIHRoZSAjcmVkaXJlY3QgYXQgdGhlIHN0YXJ0XG5cdFx0cGcucmUucmVkaXJlY3QgPSBuZXcgUmVnRXhwKFxuXHRcdFx0YF5cXFxccypbI10oJHtyZWRpckxpc3Quam9pbignfCcpfSkuKj9cXFxcW3syfShbXlxcXFx8XFxcXF1dKikofFteXFxcXF1dKik/XFxcXF17Mn1cXFxccyooLiopYCxcblx0XHRcdCdpJ1xuXHRcdCk7XG5cdH07XG5cdGNvbnN0IHNldEludGVyd2lraSA9ICgpID0+IHtcblx0XHRpZiAocGcud2lraS53aWtpbWVkaWEpIHtcblx0XHRcdC8vIEZyb20ge0BsaW5rIGh0dHBzOi8vbWV0YS53aWtpbWVkaWEub3JnL3dpa2kvTGlzdF9vZl9XaWtpcGVkaWFzfVxuXHRcdFx0Ly8ge0BsaW5rIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93L2FwaS5waHA/YWN0aW9uPXNpdGVtYXRyaXgmZm9ybWF0PWpzb24mc210eXBlPWxhbmd1YWdlJnNtbGFuZ3Byb3A9Y29kZSZmb3JtYXR2ZXJzaW9uPTJ9XG5cdFx0XHRwZy53aWtpLmludGVyd2lraSA9XG5cdFx0XHRcdCdhYXxhYnxhY2V8YWZ8YWt8YWxzfGFtfGFufGFuZ3xhcnxhcmN8YXJ6fGFzfGFzdHxhdnxheXxhenxiYXxiYXJ8YmF0LXNtZ3xiY2x8YmV8YmUteC1vbGR8Ymd8Ymh8Yml8YmpufGJtfGJufGJvfGJweXxicnxic3xidWd8YnhyfGNhfGNiay16YW18Y2RvfGNlfGNlYnxjaHxjaG98Y2hyfGNoeXxja2J8Y298Y3J8Y3JofGNzfGNzYnxjdXxjdnxjeXxkYXxkZXxkaXF8ZHNifGR2fGR6fGVlfGVsfGVtbHxlbnxlb3xlc3xldHxldXxleHR8ZmF8ZmZ8Zml8Zml1LXZyb3xmanxmb3xmcnxmcnB8ZnJyfGZ1cnxmeXxnYXxnYWd8Z2FufGdkfGdsfGdsa3xnbnxnb3R8Z3V8Z3Z8aGF8aGFrfGhhd3xoZXxoaXxoaWZ8aG98aHJ8aHNifGh0fGh1fGh5fGh6fGlhfGlkfGllfGlnfGlpfGlrfGlsb3xpb3xpc3xpdHxpdXxqYXxqYm98anZ8a2F8a2FhfGthYnxrYmR8a2d8a2l8a2p8a2t8a2x8a218a258a298a29pfGtyfGtyY3xrc3xrc2h8a3V8a3Z8a3d8a3l8bGF8bGFkfGxifGxiZXxsZ3xsaXxsaWp8bG1vfGxufGxvfGx0fGx0Z3xsdnxtYXAtYm1zfG1kZnxtZ3xtaHxtaHJ8bWl8bWt8bWx8bW58bW98bXJ8bXJqfG1zfG10fG11c3xtd2x8bXl8bXl2fG16bnxuYXxuYWh8bmFwfG5kc3xuZHMtbmx8bmV8bmV3fG5nfG5sfG5ufG5vfG5vdnxucm18bnZ8bnl8b2N8b218b3J8b3N8cGF8cGFnfHBhbXxwYXB8cGNkfHBkY3xwZmx8cGl8cGlofHBsfHBtc3xwbmJ8cG50fHBzfHB0fHF1fHJtfHJteXxybnxyb3xyb2EtcnVwfHJvYS10YXJhfHJ1fHJ1ZXxyd3xzYXxzYWh8c2N8c2NufHNjb3xzZHxzZXxzZ3xzaHxzaXxzaW1wbGV8c2t8c2x8c218c258c298c3F8c3J8c3JufHNzfHN0fHN0cXxzdXxzdnxzd3xzemx8dGF8dGV8dGV0fHRnfHRofHRpfHRrfHRsfHRufHRvfHRwaXx0cnx0c3x0dHx0dW18dHd8dHl8dWRtfHVnfHVrfHVyfHV6fHZlfHZlY3x2aXx2bHN8dm98d2F8d2FyfHdvfHd1dXx4YWx8eGh8eWl8eW98emF8emVhfHpofHpoLWNsYXNzaWNhbHx6aC1taW4tbmFufHpoLXl1ZXx6dSc7XG5cdFx0XHRwZy5yZS5pbnRlcndpa2kgPSBuZXcgUmVnRXhwKGBeJHtwZy53aWtpLmludGVyd2lraX06YCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBnLndpa2kuaW50ZXJ3aWtpID0gbnVsbDtcblx0XHRcdHBnLnJlLmludGVyd2lraSA9IC9eJC87XG5cdFx0fVxuXHR9O1xuXHQvLyByZXR1cm4gYSByZWdleHAgcGF0dGVybiBtYXRjaGluZyBhbGwgdmFyaWFudHMgdG8gd3JpdGUgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHRjb25zdCBuc1JlID0gKG5hbWVzcGFjZUlkKSA9PiB7XG5cdFx0Y29uc3QgaW1hZ2VOYW1lc3BhY2VWYXJpYW50cyA9IFtdO1xuXHRcdGZvciAoY29uc3QgW19sb2NhbGl6ZWROYW1lc3BhY2VMYywgX25hbWVzcGFjZUlkXSBvZiBPYmplY3QuZW50cmllcyhtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZUlkcycpKSkge1xuXHRcdFx0aWYgKF9uYW1lc3BhY2VJZCAhPT0gbmFtZXNwYWNlSWQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBsb2NhbGl6ZWROYW1lc3BhY2VMYyA9IHVwY2FzZUZpcnN0KF9sb2NhbGl6ZWROYW1lc3BhY2VMYyk7XG5cdFx0XHRpbWFnZU5hbWVzcGFjZVZhcmlhbnRzLnB1c2goXG5cdFx0XHRcdG13LnV0aWwuZXNjYXBlUmVnRXhwKGxvY2FsaXplZE5hbWVzcGFjZUxjKS5zcGxpdCgnICcpLmpvaW4oJ1sgX10nKSxcblx0XHRcdFx0bXcudXRpbC5lc2NhcGVSZWdFeHAoZW5jb2RlVVJJKGxvY2FsaXplZE5hbWVzcGFjZUxjKSlcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBgKD86JHtpbWFnZU5hbWVzcGFjZVZhcmlhbnRzLmpvaW4oJ3wnKX0pYDtcblx0fTtcblx0Y29uc3QgbnNSZUltYWdlID0gKCkgPT4ge1xuXHRcdHJldHVybiBuc1JlKHBnLm5zSW1hZ2VJZCk7XG5cdH07XG5cdC8vIEVOREZJTEU6IG5hbWVzcGFjZXMuanNcblx0Ly8gU1RBUlRGSUxFOiBzZWxwb3AuanNcblx0Y29uc3QgZ2V0RWRpdGJveFNlbGVjdGlvbiA9ICgpID0+IHtcblx0XHQvLyBzZWUge0BsaW5rIGh0dHA6Ly93d3cud2ViZ3VydXNmb3J1bS5jb20vOC8xMi8wfVxuXHRcdGxldCBlZGl0Ym94O1xuXHRcdHRyeSB7XG5cdFx0XHRlZGl0Ym94ID0gZG9jdW1lbnQuZWRpdGZvcm0ud3BUZXh0Ym94MTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gSUUsIE9wZXJhXG5cdFx0aWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLnRleHQ7XG5cdFx0fVxuXHRcdC8vIE1vemlsbGFcblx0XHRjb25zdCBzZWxTdGFydCA9IGVkaXRib3guc2VsZWN0aW9uU3RhcnQ7XG5cdFx0Y29uc3Qgc2VsRW5kID0gZWRpdGJveC5zZWxlY3Rpb25FbmQ7XG5cdFx0cmV0dXJuIGVkaXRib3gudmFsdWUuc3Vic3RyaW5nKHNlbFN0YXJ0LCBzZWxFbmQpO1xuXHR9O1xuXHRjb25zdCBkb1NlbGVjdGlvblBvcHVwID0gKCkgPT4ge1xuXHRcdC8vIHBvcHVwIGlmIHRoZSBzZWxlY3Rpb24gbG9va3MgbGlrZSBbW2Zvb3xhbnl0aGluZyBhZnRlcndhcmRzIGF0IGFsbFxuXHRcdC8vIG9yIFtbZm9vfGJhcl1ddGV4dCB3aXRob3V0ICddXSdcblx0XHQvLyBvciBbW2Zvb3xiYXJdXVxuXHRcdGNvbnN0IHNlbCA9IGdldEVkaXRib3hTZWxlY3Rpb24oKTtcblx0XHRjb25zdCBvcGVuID0gc2VsLmluZGV4T2YoJ1tbJyk7XG5cdFx0Y29uc3QgcGlwZSA9IHNlbC5pbmRleE9mKCd8Jyk7XG5cdFx0Y29uc3QgY2xvc2UgPSBzZWwuaW5kZXhPZignXV0nKTtcblx0XHRpZiAob3BlbiA9PT0gLTEgfHwgKHBpcGUgPT09IC0xICYmIGNsb3NlID09PSAtMSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKChwaXBlICE9PSAtMSAmJiBvcGVuID4gcGlwZSkgfHwgKGNsb3NlICE9PSAtMSAmJiBvcGVuID4gY2xvc2UpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGFydGljbGUgPSBuZXcgVGl0bGUoc2VsLnN1YnN0cmluZyhvcGVuICsgMiwgcGlwZSA8IDAgPyBjbG9zZSA6IHBpcGUpKTtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBPbkVkaXRTZWxlY3Rpb24nKSA9PT0gJ2JveHByZXZpZXcnKSB7XG5cdFx0XHRyZXR1cm4gZG9TZXBhcmF0ZVNlbGVjdGlvblBvcHVwKHNlbCwgYXJ0aWNsZSk7XG5cdFx0fVxuXHRcdGlmIChjbG9zZSA+IDAgJiYgc2VsLnNsaWNlKE1hdGgubWF4KDAsIGNsb3NlICsgMikpLmluY2x1ZGVzKCdbWycpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0YS5ocmVmID0gcGcud2lraS50aXRsZWJhc2UgKyBhcnRpY2xlLnVybFN0cmluZygpO1xuXHRcdG1vdXNlT3Zlcldpa2lMaW5rMihhKTtcblx0XHRpZiAoYS5uYXZwb3B1cCkge1xuXHRcdFx0YS5uYXZwb3B1cC5hZGRIb29rKFxuXHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0cnVuU3RvcFBvcHVwVGltZXIoYS5uYXZwb3B1cCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCd1bmhpZGUnLFxuXHRcdFx0XHQnYWZ0ZXInXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgZG9TZXBhcmF0ZVNlbGVjdGlvblBvcHVwID0gKHN0ciwgYXJ0aWNsZSkgPT4ge1xuXHRcdGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0aW9uUHJldmlldycpO1xuXHRcdGlmICghZGl2KSB7XG5cdFx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGRpdi5pZCA9ICdzZWxlY3Rpb25QcmV2aWV3Jztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGJveCA9IGRvY3VtZW50LmVkaXRmb3JtLndwVGV4dGJveDE7XG5cdFx0XHRcdGJveC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXYsIGJveCk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBwID0gcHJlcFByZXZpZXdtYWtlcihzdHIsIGFydGljbGUsIG5ld05hdnBvcHVwKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSwgYXJ0aWNsZSkpO1xuXHRcdHAubWFrZVByZXZpZXcoKTtcblx0XHRpZiAocC5odG1sKSB7XG5cdFx0XHRkaXYuaW5uZXJIVE1MID0gcC5odG1sO1xuXHRcdH1cblx0XHRkaXYucmFuU2V0dXBUb29sdGlwc0FscmVhZHkgPSBmYWxzZTtcblx0XHRwb3BUaXBzU29vbkZuKCdzZWxlY3Rpb25QcmV2aWV3JykoKTtcblx0fTtcblx0Ly8gRU5ERklMRTogc2VscG9wLmpzXG5cdC8vIFNUQVJURklMRTogbmF2cG9wdXAuanNcblx0LyoqXG5cdCAqIEBmaWxlb3ZlcnZpZXcgIERlZmluZXMgdHdvIGNsYXNzZXM6IHtAc291cmNlIE5hdnBvcHVwfSBhbmQge0Bzb3VyY2UgTW91c2V0cmFja2VyfS5cblx0ICpcblx0ICogPGNvZGU+TmF2cG9wdXA8L2NvZGU+IGRlc2NyaWJlcyBwb3B1cHM6IHdoZW4gdGhleSBhcHBlYXIsIHdoZXJlLCB3aGF0XG5cdCAqIHRoZXkgbG9vayBsaWtlIGFuZCBzbyBvbi5cblx0ICpcblx0ICogPGNvZGU+TW91c2V0cmFja2VyPC9jb2RlPiBcImNhcHR1cmVzXCIgdGhlIG1vdXNlIHVzaW5nXG5cdCAqIDxjb2RlPmRvY3VtZW50Lm9ubW91c2Vtb3ZlPC9jb2RlPi5cblx0ICovXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IE1vdXNldHJhY2tlci5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBjbGFzcyBUaGUgTW91c2V0cmFja2VyIGNsYXNzLiBUaGlzIG1vbml0b3JzIG1vdXNlIG1vdmVtZW50cyBhbmQgbWFuYWdlcyBhc3NvY2lhdGVkIGhvb2tzLlxuXHQgKi9cblx0Y2xhc3MgTW91c2V0cmFja2VyIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogSW50ZXJ2YWwgdG8gcmVndWxhcmx5IHJ1biB0aGUgaG9va3MgYW55d2F5LCBpbiBtaWxsaXNlY29uZHMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgSW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmxvb3BEZWxheSA9IDQwMDtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGltZXIgZm9yIHRoZSBsb29wLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIFRpbWVyXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudGltZXIgPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBGbGFnIC0gYXJlIHdlIHN3aXRjaGVkIG9uP1xuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIEJvb2xlYW5cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdC8qKlxuXHRcdFx0ICogRmxhZyAtIGFyZSB3ZSBwcm9iYWJseSBpbmFjY3VyYXRlLCBpLmUuIG5vdCByZWZsZWN0aW5nIHRoZSBhY3R1YWwgbW91c2UgcG9zaXRpb24/XG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBBcnJheSBvZiBob29rIGZ1bmN0aW9ucy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICogQHR5cGUgQXJyYXlcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5ob29rcyA9IFtdO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBBZGRzIGEgaG9vaywgdG8gYmUgY2FsbGVkIHdoZW4gd2UgZ2V0IGV2ZW50cy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IGYgQSBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgYXNcblx0XHQgKiA8Y29kZT5mKHgseSk8L2NvZGU+LiBJdCBzaG91bGQgcmV0dXJuIDxjb2RlPnRydWU8L2NvZGU+IHdoZW4gaXRcblx0XHQgKiB3YW50cyB0byBiZSByZW1vdmVkLCBhbmQgPGNvZGU+ZmFsc2U8L2NvZGU+IG90aGVyd2lzZS5cblx0XHQgKi9cblx0XHRhZGRIb29rKGYpIHtcblx0XHRcdHRoaXMuaG9va3MucHVzaChmKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUnVucyBob29rcywgcGFzc2luZyB0aGVtIHRoZSB4XG5cdFx0ICogYW5kIHkgY29vcmRzIG9mIHRoZSBtb3VzZS4gIEhvb2sgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIHRydWUgYXJlXG5cdFx0ICogcGFzc2VkIHRvIHtAc291cmNlIE1vdXNldHJhY2tlciNyZW1vdmVIb29rc30gZm9yIHJlbW92YWwuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHJ1bkhvb2tzKCkge1xuXHRcdFx0aWYgKCF0aGlzLmhvb2tzIHx8IHRoaXMuaG9va3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGxvZygnTW91c2V0cmFja2VyLnJ1bkhvb2tzOyB3ZSBnb3Qgc29tZSBob29rcyB0byBydW4nKTtcblx0XHRcdGxldCByZW1vdmUgPSBmYWxzZTtcblx0XHRcdGNvbnN0IHJlbW92ZU9iaiA9IHt9O1xuXHRcdFx0Ly8gdGhpcyBtZXRob2QgZ2V0cyBjYWxsZWQgYSBMT1QgLVxuXHRcdFx0Ly8gcHJlLWNhY2hlIHNvbWUgdmFyaWFibGVzXG5cdFx0XHRjb25zdCB7eH0gPSB0aGlzO1xuXHRcdFx0Y29uc3Qge3l9ID0gdGhpcztcblx0XHRcdGNvbnN0IGxlbiA9IHRoaXMuaG9va3MubGVuZ3RoO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuXHRcdFx0XHQvLyB+IHJ1biB0aGUgaG9vayBmdW5jdGlvbiwgYW5kIHJlbW92ZSBpdCBpZiBpdCByZXR1cm5zIHRydWVcblx0XHRcdFx0aWYgKHRoaXMuaG9va3NbaV0oeCwgeSkgPT09IHRydWUpIHtcblx0XHRcdFx0XHRyZW1vdmUgPSB0cnVlO1xuXHRcdFx0XHRcdHJlbW92ZU9ialtpXSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChyZW1vdmUpIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVIb29rcyhyZW1vdmVPYmopO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSZW1vdmVzIGhvb2tzLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gcmVtb3ZlT2JqIEFuIG9iamVjdCB3aG9zZSBrZXlzIGFyZSB0aGUgaW5kZXhcblx0XHQgKiBudW1iZXJzIG9mIGZ1bmN0aW9ucyBmb3IgcmVtb3ZhbCwgd2l0aCB2YWx1ZXMgdGhhdCBldmFsdWF0ZSB0byB0cnVlXG5cdFx0ICovXG5cdFx0cmVtb3ZlSG9va3MocmVtb3ZlT2JqKSB7XG5cdFx0XHRjb25zdCBuZXdIb29rcyA9IFtdO1xuXHRcdFx0Y29uc3QgbGVuID0gdGhpcy5ob29rcy5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG5cdFx0XHRcdGlmICghcmVtb3ZlT2JqW2ldKSB7XG5cdFx0XHRcdFx0bmV3SG9va3MucHVzaCh0aGlzLmhvb2tzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5ob29rcyA9IG5ld0hvb2tzO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBFdmVudCBsaXN0ZW5lciBmb3IgbW91c2Ugd2lnZ2xlcy5cblx0XHQgKiBXZSBzaW1wbHkgZ3JhYiB0aGUgZXZlbnQsIHNldCB4IGFuZCB5IGFuZCBydW4gdGhlIGhvb2tzLlxuXHRcdCAqIFRoaXMgbWFrZXMgdGhlIGNwdSBhbGwgaG90IGFuZCBib3RoZXJlZCA6LShcblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICogQHBhcmFtIHtFdmVudH0gZSBNb3VzZW1vdmUgZXZlbnRcblx0XHQgKi9cblx0XHR0cmFjayhlKSB7XG5cdFx0XHQvLyB+IEFwcGFyZW50bHkgdGhpcyBpcyBuZWVkZWQgaW4gSUUuXG5cdFx0XHRlIHx8PSB3aW5kb3cuZXZlbnQ7XG5cdFx0XHRsZXQgeDtcblx0XHRcdGxldCB5O1xuXHRcdFx0aWYgKGUpIHtcblx0XHRcdFx0aWYgKGUucGFnZVgpIHtcblx0XHRcdFx0XHR4ID0gZS5wYWdlWDtcblx0XHRcdFx0XHR5ID0gZS5wYWdlWTtcblx0XHRcdFx0fSBlbHNlIGlmIChlLmNsaWVudFggPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXQgbGVmdDtcblx0XHRcdFx0XHRsZXQgdG9wO1xuXHRcdFx0XHRcdGNvbnN0IGRvY0VsdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0XHRcdFx0XHRpZiAoZG9jRWx0KSB7XG5cdFx0XHRcdFx0XHRsZWZ0ID0gZG9jRWx0LnNjcm9sbExlZnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxlZnQgfHw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LnNjcm9sbExlZnQgfHwgMDtcblx0XHRcdFx0XHRpZiAoZG9jRWx0KSB7XG5cdFx0XHRcdFx0XHR0b3AgPSBkb2NFbHQuc2Nyb2xsVG9wO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0b3AgfHw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuc2Nyb2xsVG9wIHx8IDA7XG5cdFx0XHRcdFx0eCA9IGUuY2xpZW50WCArIGxlZnQ7XG5cdFx0XHRcdFx0eSA9IGUuY2xpZW50WSArIHRvcDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnNldFBvc2l0aW9uKHgsIHkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIHN0b3JlZCBhbmQgdGFrZXMgYXBwcm9wcmlhdGUgYWN0aW9uLFxuXHRcdCAqIHJ1bm5pbmcgaG9va3MgYXMgYXBwcm9wcmlhdGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0ludGVnZXJ9IHgsIHkgU2NyZWVuIGNvb3JkaW5hdGVzIHRvIHNldFxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSB4XG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHlcblx0XHQgKi9cblx0XHRzZXRQb3NpdGlvbih4LCB5KSB7XG5cdFx0XHR0aGlzLnggPSB4O1xuXHRcdFx0dGhpcy55ID0geTtcblx0XHRcdGlmICh0aGlzLmRpcnR5IHx8IHRoaXMuaG9va3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLmxhc3RIb29rX3ggIT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHRoaXMubGFzdEhvb2tfeCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMubGFzdEhvb2tfeSA9IC0xMDA7XG5cdFx0XHR9XG5cdFx0XHRsZXQgZGlmZiA9ICh0aGlzLmxhc3RIb29rX3ggLSB4KSAqICh0aGlzLmxhc3RIb29rX3kgLSB5KTtcblx0XHRcdGRpZmYgPSBkaWZmID49IDAgPyBkaWZmIDogLWRpZmY7XG5cdFx0XHRpZiAoZGlmZiA+IDEpIHtcblx0XHRcdFx0dGhpcy5sYXN0SG9va194ID0geDtcblx0XHRcdFx0dGhpcy5sYXN0SG9va195ID0geTtcblx0XHRcdFx0aWYgKHRoaXMuZGlydHkpIHtcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5ydW5Ib29rcygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhpbmdzIGluIG1vdGlvbiwgdW5sZXNzIHRoZXkgYXJlIGFscmVhZHkgdGhhdCBpcywgcmVnaXN0ZXJpbmcgYW4gZXZlbnQgbGlzdGVuZXIgb25cblx0XHQgKiA8Y29kZT5kb2N1bWVudC5vbm1vdXNlbW92ZTwvY29kZT4uIEEgaGFsZi1oZWFydGVkIGF0dGVtcHQgaXMgbWFkZSB0byBwcmVzZXJ2ZSB0aGUgb2xkIGV2ZW50XG5cdFx0ICogbGlzdGVuZXIgaWYgdGhlcmUgaXMgb25lLlxuXHRcdCAqL1xuXHRcdGVuYWJsZSgpIHtcblx0XHRcdGlmICh0aGlzLmFjdGl2ZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmFjdGl2ZSA9IHRydWU7XG5cdFx0XHQvLyB+IFNhdmUgdGhlIGN1cnJlbnQgbGlzdGVuZXIgZm9yIG1vdXNlbW92ZSBldmVudHMuIFRoaXMgaXNuJ3QgdG9vXG5cdFx0XHQvLyB+IHJvYnVzdCwgb2YgY291cnNlLlxuXHRcdFx0dGhpcy5zYXZlZExpc3RlbmVyID0gZG9jdW1lbnQub25tb3VzZW1vdmU7XG5cdFx0XHQvLyB+IEdvdHRhIHNhdmUgQHR0e3RoaXN9IGFnYWluIGZvciB0aGUgY2xvc3VyZSwgYW5kIHVzZSBhcHBseSBmb3Jcblx0XHRcdC8vIH4gdGhlIG1lbWJlciBmdW5jdGlvbi5cblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSAoZSkgPT4ge1xuXHRcdFx0XHRzZWxmLnRyYWNrKGUpO1xuXHRcdFx0fTtcblx0XHRcdGlmICh0aGlzLmxvb3BEZWxheSkge1xuXHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdC8vIGxvZygnbG9vcCBkZWxheSBpbiBtb3VzZXRyYWNrZXIgaXMgd29ya2luZycpO1xuXHRcdFx0XHRcdHNlbGYucnVuSG9va3MoKTtcblx0XHRcdFx0fSwgdGhpcy5sb29wRGVsYXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBEaXNhYmxlcyB0aGUgdHJhY2tlciwgcmVtb3ZpbmcgdGhlIGV2ZW50IGxpc3RlbmVyLlxuXHRcdCAqL1xuXHRcdGRpc2FibGUoKSB7XG5cdFx0XHRpZiAoIXRoaXMuYWN0aXZlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5zYXZlZExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gdGhpcy5zYXZlZExpc3RlbmVyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVsZXRlIGRvY3VtZW50Lm9ubW91c2Vtb3ZlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudGltZXIpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IE5hdnBvcHVwLlxuXHQgKiBHZXRzIGEgVUlEIGZvciB0aGUgcG9wdXAgYW5kXG5cdCAqXG5cdCAqIEBwYXJhbSBpbml0IENvbnRydWN0b3Igb2JqZWN0LiBJZiA8Y29kZT5pbml0LmRyYWdnYWJsZTwvY29kZT4gaXMgdHJ1ZSBvciBhYnNlbnQsIHRoZSBwb3B1cCBiZWNvbWVzIGRyYWdnYWJsZS5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBjbGFzcyBUaGUgTmF2cG9wdXAgY2xhc3MuIFRoaXMgZ2VuZXJhdGVzIHBvcHVwIGhpbnRzLCBhbmQgZG9lcyBzb21lIG1hbmFnZW1lbnQgb2YgdGhlbS5cblx0ICovXG5cdGNsYXNzIE5hdnBvcHVwIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdC8vIG13Lm5vdGlmeSgnbmV3IE5hdnBvcHVwKGluaXQpJywge3RhZzogJ3BvcHVwcycsIHR5cGU6ICd3YXJuJ30pO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBVSUQgZm9yIGVhY2ggTmF2cG9wdXAgaW5zdGFuY2UuXG5cdFx0XHQgKiBSZWFkLW9ubHkuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnVpZCA9IE5hdnBvcHVwLnVpZCsrO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZWFkLW9ubHkgZmxhZyBmb3IgY3VycmVudCB2aXNpYmlsaXR5IG9mIHRoZSBwb3B1cC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdC8qKlxuXHRcdFx0ICogRmxhZyB0byBiZSBzZXQgd2hlbiB3ZSB3YW50IHRvIGNhbmNlbCBhIHByZXZpb3VzIHJlcXVlc3QgdG9cblx0XHRcdCAqIHNob3cgdGhlIHBvcHVwIGluIGEgbGl0dGxlIHdoaWxlLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMubm9zaG93ID0gZmFsc2U7XG5cdFx0XHQvKipcblx0XHRcdCAqIENhdGVnb3Jpc2VkIGxpc3Qgb2YgaG9va3MuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHNlZSAjcnVuSG9va3Ncblx0XHRcdCAqIEBzZWUgI2FkZEhvb2tcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKiBAdHlwZSBPYmplY3Rcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5ob29rcyA9IHtcblx0XHRcdFx0Y3JlYXRlOiBbXSxcblx0XHRcdFx0dW5oaWRlOiBbXSxcblx0XHRcdFx0aGlkZTogW10sXG5cdFx0XHR9O1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBsaXN0IG9mIHVuaXF1ZSBJRHMgb2YgaG9vayBmdW5jdGlvbnMsIHRvIGF2b2lkIGR1cGxpY2F0ZXNcblx0XHRcdCAqXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmhvb2tJZHMgPSB7fTtcblx0XHRcdC8qKlxuXHRcdFx0ICogTGlzdCBvZiBkb3dubG9hZHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBwb3B1cC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICogQHR5cGUgQXJyYXlcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5kb3dubG9hZHMgPSBbXTtcblx0XHRcdC8qKlxuXHRcdFx0ICogTnVtYmVyIG9mIHVuY29tcGxldGVkIGRvd25sb2Fkcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBpbnRlZ2VyXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRvbGVyYW5jZSBpbiBwaXhlbHMgd2hlbiBkZXRlY3Rpbmcgd2hldGhlciB0aGUgbW91c2UgaGFzIGxlZnQgdGhlIHBvcHVwLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGludGVnZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5mdXp6ID0gNTtcblx0XHRcdC8qKlxuXHRcdFx0ICogRmxhZyB0byB0b2dnbGUgcnVubmluZyB7QHNvdXJjZSAjbGltaXRIb3Jpem9udGFsUG9zaXRpb259IHRvIHJlZ3VsYXRlIHRoZSBwb3B1cCdzIHBvc2l0aW9uLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5jb25zdHJhaW5lZCA9IHRydWU7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBwb3B1cCB3aWR0aCBpbiBwaXhlbHMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqIEB0eXBlIGludGVnZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy53aWR0aCA9IDA7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBwb3B1cCB3aWR0aCBpbiBwaXhlbHMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqIEB0eXBlIGludGVnZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5oZWlnaHQgPSAwO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaGUgbWFpbiBjb250ZW50IERJViBlbGVtZW50LlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIEhUTUxEaXZFbGVtZW50XG5cdFx0XHQgKi9cblx0XHRcdHRoaXMubWFpbkRpdiA9IG51bGw7XG5cdFx0XHR0aGlzLmNyZWF0ZU1haW5EaXYoKTtcblx0XHRcdC8vXHRpZiAoIWluaXQgfHwgdHlwZW9mIGluaXQucG9wdXBzX2RyYWdnYWJsZT09J3VuZGVmaW5lZCcgfHwgaW5pdC5wb3B1cHNfZHJhZ2dhYmxlKSB7XG5cdFx0XHQvL1x0XHR0aGlzLm1ha2VEcmFnZ2FibGUodHJ1ZSk7XG5cdFx0XHQvL1x0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSZXRyaWV2ZXMgdGhlIHtAc291cmNlICN2aXNpYmxlfSBhdHRyaWJ1dGUsIGluZGljYXRpbmcgd2hldGhlciB0aGUgcG9wdXAgaXMgY3VycmVudGx5IHZpc2libGUuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0ICovXG5cdFx0aXNWaXNpYmxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmlzaWJsZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUmVwb3NpdGlvbnMgcG9wdXAgdXNpbmcgQ1NTIHN0eWxlLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcGFyYW0ge2ludGVnZXJ9IHggeC1jb29yZGluYXRlIChweClcblx0XHQgKiBAcGFyYW0ge2ludGVnZXJ9IHkgeS1jb29yZGluYXRlIChweClcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IG5vTGltaXRIb3IgRG9uJ3QgY2FsbCB7QHNvdXJjZSAjbGltaXRIb3Jpem9udGFsUG9zaXRpb259XG5cdFx0ICovXG5cdFx0cmVwb3NpdGlvbih4LCB5LCBub0xpbWl0SG9yKSB7XG5cdFx0XHRsb2coYHJlcG9zaXRpb24oJHt4fSwke3l9LCR7bm9MaW1pdEhvcn0pYCk7XG5cdFx0XHRpZiAoeCAhPT0gdW5kZWZpbmVkICYmIHggIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5sZWZ0ID0geDtcblx0XHRcdH1cblx0XHRcdGlmICh5ICE9PSB1bmRlZmluZWQgJiYgeSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnRvcCA9IHk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5sZWZ0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy50b3AgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLm1haW5EaXYuc3R5bGUubGVmdCA9IGAke3RoaXMubGVmdH1weGA7XG5cdFx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS50b3AgPSBgJHt0aGlzLnRvcH1weGA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW5vTGltaXRIb3IpIHtcblx0XHRcdFx0dGhpcy5saW1pdEhvcml6b250YWxQb3NpdGlvbigpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBQcmV2ZW50cyBwb3B1cHMgZnJvbSBiZWluZyBpbiBzaWxseSBsb2NhdGlvbnMuIEhvcGVmdWxseS5cblx0XHQgKiBTaG91bGQgbm90IGJlIHJ1biBpZiB7QHNvdXJjZSAjY29uc3RyYWluZWR9IGlzIHRydWUuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGxpbWl0SG9yaXpvbnRhbFBvc2l0aW9uKCkge1xuXHRcdFx0aWYgKCF0aGlzLmNvbnN0cmFpbmVkIHx8IHRoaXMudG9vV2lkZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTtcblx0XHRcdGNvbnN0IHggPSB0aGlzLmxlZnQ7XG5cdFx0XHRjb25zdCB3ID0gdGhpcy53aWR0aDtcblx0XHRcdGNvbnN0IGNXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGllbnRXaWR0aDtcblx0XHRcdC8vXHRsb2coJ2xpbWl0SG9yaXpvbnRhbFBvc2l0aW9uOiB4PScreCtcblx0XHRcdC8vXHRcdFx0JywgdGhpcy5sZWZ0PScgKyB0aGlzLmxlZnQgK1xuXHRcdFx0Ly9cdFx0XHQnLCB0aGlzLndpZHRoPScgKyB0aGlzLndpZHRoICtcblx0XHRcdC8vXHRcdFx0JywgY1dpZHRoPScgKyBjV2lkdGgpO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR4ICsgdyA+PSBjV2lkdGggfHxcblx0XHRcdFx0KHggPiAwICYmXG5cdFx0XHRcdFx0dGhpcy5tYXhXaWR0aCAmJlxuXHRcdFx0XHRcdHRoaXMud2lkdGggPCB0aGlzLm1heFdpZHRoICYmXG5cdFx0XHRcdFx0dGhpcy5oZWlnaHQgPiB0aGlzLndpZHRoICYmXG5cdFx0XHRcdFx0eCA+IGNXaWR0aCAtIHRoaXMubWF4V2lkdGgpXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gVGhpcyBpcyBhIHZlcnkgbmFzdHkgaGFjay4gVGhlcmUgaGFzIHRvIGJlIGEgYmV0dGVyIHdheSFcblx0XHRcdFx0Ly8gV2UgZmluZCB0aGUgXCJuYXR1cmFsXCIgd2lkdGggb2YgdGhlIGRpdiBieSBwb3NpdGlvbmluZyBpdCBhdCB0aGUgZmFyIGxlZnRcblx0XHRcdFx0Ly8gdGhlbiByZXNldCBpdCBzbyB0aGF0IGl0IHNob3VsZCBiZSBmbHVzaCByaWdodCAod2VsbCwgbmVhcmx5KVxuXHRcdFx0XHR0aGlzLm1haW5EaXYuc3R5bGUubGVmdCA9ICctMTAwMDBweCc7XG5cdFx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS53aWR0aCA9IGAke3RoaXMubWF4V2lkdGh9cHhgO1xuXHRcdFx0XHRjb25zdCBuYXR1cmFsV2lkdGggPSBOdW1iZXIucGFyc2VJbnQodGhpcy5tYWluRGl2Lm9mZnNldFdpZHRoLCAxMCk7XG5cdFx0XHRcdGxldCBuZXdMZWZ0ID0gY1dpZHRoIC0gbmF0dXJhbFdpZHRoIC0gMTtcblx0XHRcdFx0aWYgKG5ld0xlZnQgPCAwKSB7XG5cdFx0XHRcdFx0bmV3TGVmdCA9IDA7XG5cdFx0XHRcdFx0dGhpcy50b29XaWRlID0gdHJ1ZTtcblx0XHRcdFx0fSAvLyBzdGlsbCB1bnN0YWJsZSBmb3IgcmVhbGx5IHdpZGUgcG9wdXBzP1xuXHRcdFx0XHRsb2coXG5cdFx0XHRcdFx0YGxpbWl0SG9yaXpvbnRhbFBvc2l0aW9uOiBtb3ZpbmcgdG8gKCR7bmV3TGVmdH0sJHt0aGlzLnRvcH0pO2AgK1xuXHRcdFx0XHRcdFx0YCBuYXR1cmFsV2lkdGg9JHtuYXR1cmFsV2lkdGh9LCBjbGllbnRXaWR0aD0ke2NXaWR0aH1gXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRoaXMucmVwb3NpdGlvbihuZXdMZWZ0LCBudWxsLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQnJpbmdzIHBvcHVwIHRvIHRoZSB0b3Agb2YgdGhlIHotb3JkZXIuXG5cdFx0ICogV2UgaW5jcmVtZW50IHRoZSB7QHNvdXJjZSAjaGlnaGVzdH0gcHJvcGVydHkgb2YgdGhlIGNvbnRydWN0b3IgaGVyZS5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0cmFpc2UoKSB7XG5cdFx0XHR0aGlzLm1haW5EaXYuc3R5bGUuekluZGV4ID0gTmF2cG9wdXAuaGlnaGVzdCArIDE7XG5cdFx0XHQrK05hdnBvcHVwLmhpZ2hlc3Q7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFNob3dzIHRoZSBwb3B1cCBwcm92aWRlZCB7QHNvdXJjZSAjbm9zaG93fSBpcyBub3QgdHJ1ZS5cblx0XHQgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiwgYnJpbmdzIHRoZSBwb3B1cCB0byB0aGUgdG9wIG9mIHRoZSB6LW9yZGVyIGFuZCB1bmhpZGVzIGl0LlxuXHRcdCAqL1xuXHRcdHNob3coKSB7XG5cdFx0XHQvLyBkb2N1bWVudC50aXRsZSs9J3MnO1xuXHRcdFx0aWYgKHRoaXMubm9zaG93KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGRvY3VtZW50LnRpdGxlKz0ndCc7XG5cdFx0XHR0aGlzLnJlcG9zaXRpb24oKTtcblx0XHRcdHRoaXMucmFpc2UoKTtcblx0XHRcdHRoaXMudW5oaWRlKCk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG1vdXNlIHBvaW50ZXIgaGFzXG5cdFx0ICogc3RhYmlsaXNlZCAoY2hlY2tpbmcgZXZlcnkgPGNvZGU+dGltZTwvY29kZT4vMiBtaWxsaXNlY29uZHMpIGFuZCBydW5zIHRoZVxuXHRcdCAqIHtAc291cmNlICNzaG93fSBtZXRob2QgaWYgaXQgaGFzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSB0aW1lIFRoZSBtaW5pbXVtIHRpbWUgKG1zKSBiZWZvcmUgdGhlIHBvcHVwIG1heSBiZSBzaG93bi5cblx0XHQgKi9cblx0XHRzaG93U29vbklmU3RhYmxlKHRpbWUpIHtcblx0XHRcdGxvZyhgc2hvd1Nvb25JZlN0YWJsZSwgdGltZT0ke3RpbWV9YCk7XG5cdFx0XHRpZiAodGhpcy52aXNpYmxlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMubm9zaG93ID0gZmFsc2U7XG5cdFx0XHQvLyB+IGluaXRpYWxpemUgdGhlc2UgdmFyaWFibGVzIHNvIHRoYXQgd2UgbmV2ZXIgcnVuIEB0dHtzaG93fSBhZnRlclxuXHRcdFx0Ly8gfiBqdXN0IGhhbGYgdGhlIHRpbWVcblx0XHRcdHRoaXMuc3RhYmxlX3ggPSAtMWU0O1xuXHRcdFx0dGhpcy5zdGFibGVfeSA9IC0xZTQ7XG5cdFx0XHRjb25zdCBzdGFibGVTaG93ID0gKCkgPT4ge1xuXHRcdFx0XHRsb2coJ3N0YWJsZVNob3cgY2FsbGVkJyk7XG5cdFx0XHRcdGNvbnN0IG5ld194ID0gTmF2cG9wdXAudHJhY2tlci54O1xuXHRcdFx0XHRjb25zdCBuZXdfeSA9IE5hdnBvcHVwLnRyYWNrZXIueTtcblx0XHRcdFx0Y29uc3QgZHggPSBzZWxmLnN0YWJsZV94IC0gbmV3X3g7XG5cdFx0XHRcdGNvbnN0IGR5ID0gc2VsZi5zdGFibGVfeSAtIG5ld195O1xuXHRcdFx0XHRjb25zdCBmdXp6MiA9IDA7IC8vIHNhdmVkVGhpcy5mdXp6ICogc2F2ZWRUaGlzLmZ1eno7XG5cdFx0XHRcdC8vIGRvY3VtZW50LnRpdGxlICs9ICdbJyArIFtzYXZlZFRoaXMuc3RhYmxlX3gsbmV3X3gsIHNhdmVkVGhpcy5zdGFibGVfeSxuZXdfeSwgZHgsIGR5LCBmdXp6Ml0uam9pbignLCcpICsgJ10gJztcblx0XHRcdFx0aWYgKGR4ICogZHggPD0gZnV6ejIgJiYgZHkgKiBkeSA8PSBmdXp6Mikge1xuXHRcdFx0XHRcdGxvZygnbW91c2UgaXMgc3RhYmxlJyk7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChzZWxmLnNob3dTb29uU3RhYmxlVGltZXIpO1xuXHRcdFx0XHRcdHNlbGYucmVwb3NpdGlvbihuZXdfeCArIDIsIG5ld195ICsgMik7XG5cdFx0XHRcdFx0c2VsZi5zaG93KCk7XG5cdFx0XHRcdFx0c2VsZi5saW1pdEhvcml6b250YWxQb3NpdGlvbigpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxmLnN0YWJsZV94ID0gbmV3X3g7XG5cdFx0XHRcdHNlbGYuc3RhYmxlX3kgPSBuZXdfeTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHRoaXMuc2hvd1Nvb25TdGFibGVUaW1lciA9IHNldEludGVydmFsKHN0YWJsZVNob3csIHRpbWUgLyAyKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUge0Bzb3VyY2UgI25vc2hvd30gZmxhZyBhbmQgaGlkZXMgdGhlIHBvcHVwLiBUaGlzIHNob3VsZCBiZSBjYWxsZWRcblx0XHQgKiB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIGxpbmsgYmVmb3JlXG5cdFx0ICogKG9yIGFmdGVyKSBpdCdzIGFjdHVhbGx5IGJlZW4gZGlzcGxheWVkLlxuXHRcdCAqL1xuXHRcdGJhbmlzaCgpIHtcblx0XHRcdGxvZygnYmFuaXNoIGNhbGxlZCcpO1xuXHRcdFx0Ly8gaGlkZSBhbmQgcHJldmVudCBzaG93aW5nIHdpdGggc2hvd1Nvb24gaW4gdGhlIGZ1dHVyZVxuXHRcdFx0dGhpcy5ub3Nob3cgPSB0cnVlO1xuXHRcdFx0aWYgKHRoaXMuc2hvd1Nvb25TdGFibGVUaW1lcikge1xuXHRcdFx0XHRsb2coJ2NsZWFyaW5nIHNob3dTb29uU3RhYmxlVGltZXInKTtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNob3dTb29uU3RhYmxlVGltZXIpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJ1bnMgaG9va3MgYWRkZWQgd2l0aCB7QHNvdXJjZSAjYWRkSG9va30uXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IG5hbWUgb2YgdGhlIHtAc291cmNlICNob29rc30gYXJyYXkgLSBvbmUgb2YgJ2NyZWF0ZScsICd1bmhpZGUnLCAnaGlkZSdcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gd2hlbiBDb250cm9scyBleGFjdGx5IHdoZW4gdGhlIGhvb2sgaXMgcnVuOiBlaXRoZXIgJ2JlZm9yZScgb3IgJ2FmdGVyJ1xuXHRcdCAqL1xuXHRcdHJ1bkhvb2tzKGtleSwgd2hlbikge1xuXHRcdFx0aWYgKCF0aGlzLmhvb2tzW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qga2V5SG9va3MgPSB0aGlzLmhvb2tzW2tleV07XG5cdFx0XHRjb25zdCBsZW4gPSBrZXlIb29rcy5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG5cdFx0XHRcdGlmIChrZXlIb29rc1tpXSAmJiBrZXlIb29rc1tpXS53aGVuID09PSB3aGVuICYmIFJlZmxlY3QuYXBwbHkoa2V5SG9va3NbaV0uaG9vaywgdGhpcywgW10pKSB7XG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBob29rXG5cdFx0XHRcdFx0aWYgKGtleUhvb2tzW2ldLmhvb2tJZCkge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuaG9va0lkc1trZXlIb29rc1tpXS5ob29rSWRdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRrZXlIb29rc1tpXSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQWRkcyBhIGhvb2sgdG8gdGhlIHBvcHVwLiBIb29rIGZ1bmN0aW9ucyBhcmUgcnVuIHdpdGggPGNvZGU+dGhpczwvY29kZT4gc2V0IHRvIHJlZmVyIHRvIHRoZVxuXHRcdCAqIE5hdnBvcHVwIGluc3RhbmNlLCBhbmQgbm8gYXJndW1lbnRzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gaG9vayBUaGUgaG9vayBmdW5jdGlvbi4gRnVuY3Rpb25zIHRoYXQgcmV0dXJuIHRydWUgYXJlIGRlbGV0ZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgbmFtZSBvZiB0aGUge0Bzb3VyY2UgI2hvb2tzfSBhcnJheSAtIG9uZSBvZiAnY3JlYXRlJywgJ3VuaGlkZScsICdoaWRlJ1xuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3aGVuIENvbnRyb2xzIGV4YWN0bHkgd2hlbiB0aGUgaG9vayBpcyBydW46IGVpdGhlciAnYmVmb3JlJyBvciAnYWZ0ZXInXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHVpZCBBIHRydXRoeSBzdHJpbmcgaWRlbnRpZnlpbmcgdGhlIGhvb2sgZnVuY3Rpb247IGlmIGl0IG1hdGNoZXMgYW5vdGhlciBob29rXG5cdFx0ICogaW4gdGhpcyBwb3NpdGlvbiwgaXQgd29uJ3QgYmUgYWRkZWQgYWdhaW4uXG5cdFx0ICovXG5cdFx0YWRkSG9vayhob29rLCBrZXksIHdoZW4sIHVpZCkge1xuXHRcdFx0d2hlbiB8fD0gJ2FmdGVyJztcblx0XHRcdGlmICghdGhpcy5ob29rc1trZXldKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGlmIHVpZCBpcyBzcGVjaWZpZWQsIGRvbid0IGFkZCBkdXBsaWNhdGVzXG5cdFx0XHRsZXQgaG9va0lkO1xuXHRcdFx0aWYgKHVpZCkge1xuXHRcdFx0XHRob29rSWQgPSBba2V5LCB3aGVuLCB1aWRdLmpvaW4oJ3wnKTtcblx0XHRcdFx0aWYgKHRoaXMuaG9va0lkc1tob29rSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaG9va0lkc1tob29rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaG9va3Nba2V5XS5wdXNoKHtcblx0XHRcdFx0aG9vayxcblx0XHRcdFx0d2hlbixcblx0XHRcdFx0aG9va0lkLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZXMgdGhlIG1haW4gRElWIGVsZW1lbnQsIHdoaWNoIGNvbnRhaW5zIGFsbCB0aGUgYWN0dWFsIHBvcHVwIGNvbnRlbnQuXG5cdFx0ICogUnVucyBob29rcyB3aXRoIGtleSAnY3JlYXRlJy5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0Y3JlYXRlTWFpbkRpdigpIHtcblx0XHRcdGlmICh0aGlzLm1haW5EaXYpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ydW5Ib29rcygnY3JlYXRlJywgJ2JlZm9yZScpO1xuXHRcdFx0Y29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRtYWluRGl2Lm9uY2xpY2sgPSAoZSkgPT4ge1xuXHRcdFx0XHRzZWxmLm9uY2xpY2tMaXN0ZW5lcihlKTtcblx0XHRcdH07XG5cdFx0XHRtYWluRGl2LmNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lID8/ICduYXZwb3B1cF9tYWluZGl2Jztcblx0XHRcdG1haW5EaXYuaWQgPSBtYWluRGl2LmNsYXNzTmFtZSArIHRoaXMudWlkO1xuXHRcdFx0bWFpbkRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0XHRtYWluRGl2LnN0eWxlLm1pbldpZHRoID0gJzM1MHB4Jztcblx0XHRcdG1haW5EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdG1haW5EaXYuY2xhc3NOYW1lID0gJ25hdnBvcHVwJztcblx0XHRcdC8vIGVhc3kgYWNjZXNzIHRvIGphdmFzY3JpcHQgb2JqZWN0IHRocm91Z2ggRE9NIGZ1bmN0aW9uc1xuXHRcdFx0bWFpbkRpdi5uYXZwb3B1cCA9IHRoaXM7XG5cdFx0XHR0aGlzLm1haW5EaXYgPSBtYWluRGl2O1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZChtYWluRGl2KTtcblx0XHRcdHRoaXMucnVuSG9va3MoJ2NyZWF0ZScsICdhZnRlcicpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBDYWxscyB0aGUge0Bzb3VyY2UgI3JhaXNlfSBtZXRob2QuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdG9uY2xpY2tMaXN0ZW5lcigpIHtcblx0XHRcdHRoaXMucmFpc2UoKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogTWFrZXMgdGhlIHBvcHVwIGRyYWdnYWJsZSwgdXNpbmcgYSB7QHNvdXJjZSBEcmFnfSBvYmplY3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaGFuZGxlTmFtZVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0bWFrZURyYWdnYWJsZShoYW5kbGVOYW1lKSB7XG5cdFx0XHRpZiAoIXRoaXMubWFpbkRpdikge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZU1haW5EaXYoKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGRyYWcgPSBuZXcgRHJhZygpO1xuXHRcdFx0aWYgKCFoYW5kbGVOYW1lKSB7XG5cdFx0XHRcdGRyYWcuc3RhcnRDb25kaXRpb24gPSAoZSkgPT4ge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRpZiAoIWUuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGxldCBkcmFnSGFuZGxlO1xuXHRcdFx0aWYgKGhhbmRsZU5hbWUpIHtcblx0XHRcdFx0ZHJhZ0hhbmRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2hhbmRsZU5hbWV9YCk7XG5cdFx0XHR9XG5cdFx0XHRkcmFnSGFuZGxlIHx8PSB0aGlzLm1haW5EaXY7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGRyYWcuZW5kSG9vayA9ICh4LCB5KSA9PiB7XG5cdFx0XHRcdE5hdnBvcHVwLnRyYWNrZXIuZGlydHkgPSB0cnVlO1xuXHRcdFx0XHRzZWxmLnJlcG9zaXRpb24oeCwgeSk7XG5cdFx0XHR9O1xuXHRcdFx0ZHJhZy5pbml0KGRyYWdIYW5kbGUsIHRoaXMubWFpbkRpdik7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEhpZGVzIHRoZSBwb3B1cCB1c2luZyBDU1MuIFJ1bnMgaG9va3Mgd2l0aCBrZXkgJ2hpZGUnLlxuXHRcdCAqIFNldHMge0Bzb3VyY2UgI3Zpc2libGV9IGFwcHJvcHJpYXRlbHkuXG5cdFx0ICoge0Bzb3VyY2UgI2JhbmlzaH0gc2hvdWxkIGJlIGNhbGxlZCBleHRlcm5hbGx5IGluc3RlYWQgb2YgdGhpcyBtZXRob2QuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGhpZGUoKSB7XG5cdFx0XHR0aGlzLnJ1bkhvb2tzKCdoaWRlJywgJ2JlZm9yZScpO1xuXHRcdFx0dGhpcy5hYm9ydERvd25sb2FkcygpO1xuXHRcdFx0aWYgKHRoaXMudmlzaWJsZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMudmlzaWJsZSkge1xuXHRcdFx0XHR0aGlzLm1haW5EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0dGhpcy52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJ1bkhvb2tzKCdoaWRlJywgJ2FmdGVyJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFNob3dzIHRoZSBwb3B1cCB1c2luZyBDU1MuIFJ1bnMgaG9va3Mgd2l0aCBrZXkgJ3VuaGlkZScuXG5cdFx0ICogU2V0cyB7QHNvdXJjZSAjdmlzaWJsZX0gYXBwcm9wcmlhdGVseS4gICB7QHNvdXJjZSAjc2hvd30gc2hvdWxkIGJlIGNhbGxlZCBleHRlcm5hbGx5IGluc3RlYWQgb2YgdGhpcyBtZXRob2QuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHVuaGlkZSgpIHtcblx0XHRcdHRoaXMucnVuSG9va3MoJ3VuaGlkZScsICdiZWZvcmUnKTtcblx0XHRcdGlmICh0aGlzLnZpc2libGUgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy52aXNpYmxlKSB7XG5cdFx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cdFx0XHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJ1bkhvb2tzKCd1bmhpZGUnLCAnYWZ0ZXInKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgPGNvZGU+aW5uZXJIVE1MPC9jb2RlPiBhdHRyaWJ1dGUgb2YgdGhlIG1haW4gZGl2IGNvbnRhaW5pbmcgdGhlIHBvcHVwIGNvbnRlbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaHRtbCBUaGUgSFRNTCB0byBzZXQuXG5cdFx0ICovXG5cdFx0c2V0SW5uZXJIVE1MKGh0bWwpIHtcblx0XHRcdHRoaXMubWFpbkRpdi5pbm5lckhUTUwgPSBodG1sO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBVcGRhdGVzIHRoZSB7QHNvdXJjZSAjd2lkdGh9IGFuZCB7QHNvdXJjZSAjaGVpZ2h0fSBhdHRyaWJ1dGVzIHdpdGggdGhlIENTUyBwcm9wZXJ0aWVzLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHR1cGRhdGVEaW1lbnNpb25zKCkge1xuXHRcdFx0dGhpcy53aWR0aCA9IE51bWJlci5wYXJzZUludCh0aGlzLm1haW5EaXYub2Zmc2V0V2lkdGgsIDEwKTtcblx0XHRcdHRoaXMuaGVpZ2h0ID0gTnVtYmVyLnBhcnNlSW50KHRoaXMubWFpbkRpdi5vZmZzZXRIZWlnaHQsIDEwKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQ2hlY2tzIGlmIHRoZSBwb2ludCAoeCx5KSBpcyB3aXRoaW4ge0Bzb3VyY2UgI2Z1enp9IG9mIHRoZVxuXHRcdCAqIHtAc291cmNlICNtYWluRGl2fS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7aW50ZWdlcn0geCB4LWNvb3JkaW5hdGUgKHB4KVxuXHRcdCAqIEBwYXJhbSB7aW50ZWdlcn0geSB5LWNvb3JkaW5hdGUgKHB4KVxuXHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHQgKi9cblx0XHRpc1dpdGhpbih4LCB5KSB7XG5cdFx0XHQvLyB+IElmIHdlJ3JlIG5vdCBldmVuIHZpc2libGUsIG5vIHBvaW50IHNob3VsZCBiZSBjb25zaWRlcmVkIGFzXG5cdFx0XHQvLyB+IGJlaW5nIHdpdGhpbiB0aGUgcG9wdXAuXG5cdFx0XHRpZiAoIXRoaXMudmlzaWJsZSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTtcblx0XHRcdGNvbnN0IGZ1enogPSB0aGlzLmZ1enogfHwgMDtcblx0XHRcdC8vIH4gVXNlIGEgc2ltcGxlIGJveCBtZXRyaWMgaGVyZS5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHggKyBmdXp6ID49IHRoaXMubGVmdCAmJlxuXHRcdFx0XHR4IC0gZnV6eiA8PSB0aGlzLmxlZnQgKyB0aGlzLndpZHRoICYmXG5cdFx0XHRcdHkgKyBmdXp6ID49IHRoaXMudG9wICYmXG5cdFx0XHRcdHkgLSBmdXp6IDw9IHRoaXMudG9wICsgdGhpcy5oZWlnaHRcblx0XHRcdCk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEFkZHMgYSBkb3dubG9hZCB0byB7QHNvdXJjZSAjZG93bmxvYWRzfS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RG93bmxvYWRlcn0gZG93bmxvYWRcblx0XHQgKi9cblx0XHRhZGREb3dubG9hZChkb3dubG9hZCkge1xuXHRcdFx0aWYgKCFkb3dubG9hZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRvd25sb2Fkcy5wdXNoKGRvd25sb2FkKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQWJvcnRzIHRoZSBkb3dubG9hZHMgbGlzdGVkIGluIHtAc291cmNlICNkb3dubG9hZHN9LlxuXHRcdCAqXG5cdFx0ICogQHNlZSBEb3dubG9hZGVyI2Fib3J0XG5cdFx0ICovXG5cdFx0YWJvcnREb3dubG9hZHMoKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGQgb2YgdGhpcy5kb3dubG9hZHMpIHtcblx0XHRcdFx0aWYgKGQgJiYgZC5hYm9ydCkge1xuXHRcdFx0XHRcdGQuYWJvcnQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5kb3dubG9hZHMgPSBbXTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIEEgVUlEIGZvciBlYWNoIE5hdnBvcHVwLiBUaGlzIGNvbnN0cnVjdG9yIHByb3BlcnR5IGlzIGp1c3QgYSBjb3VudGVyLlxuXHQgKlxuXHQgKiBAdHlwZSBpbnRlZ2VyXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHROYXZwb3B1cC51aWQgPSAwO1xuXHQvKipcblx0ICogQ291bnRlciBpbmRpY2F0aW5nIHRoZSB6LW9yZGVyIG9mIHRoZSBcImhpZ2hlc3RcIiBwb3B1cC5cblx0ICogV2Ugc3RhcnQgdGhlIHotaW5kZXggYXQgMTAwMCBzbyB0aGF0IHBvcHVwcyBhcmUgYWJvdmUgZXZlcnl0aGluZ1xuXHQgKiBlbHNlIG9uIHRoZSBzY3JlZW4uXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqIEB0eXBlIGludGVnZXJcblx0ICovXG5cdE5hdnBvcHVwLmhpZ2hlc3QgPSAxMDAwO1xuXHQvKipcblx0ICogQSB7QHNvdXJjZSBNb3VzZXRyYWNrZXJ9IGluc3RhbmNlIHdoaWNoIGlzIGEgcHJvcGVydHkgb2YgdGhlIGNvbnN0cnVjdG9yIChwc2V1ZG8tZ2xvYmFsKS5cblx0ICovXG5cdE5hdnBvcHVwLnRyYWNrZXIgPSBuZXcgTW91c2V0cmFja2VyKCk7XG5cdC8vIEVOREZJTEU6IG5hdnBvcHVwLmpzXG5cdC8vIFNUQVJURklMRTogZGlmZi5qc1xuXHQvKipcblx0ICogSmF2YXNjcmlwdCBEaWZmIEFsZ29yaXRobSBCeSBKb2huIFJlc2lnIChodHRwOi8vZWpvaG4ub3JnLykgYW5kIEx1cGluXG5cdCAqXG5cdCAqIE1vcmUgSW5mbzogaHR0cDovL2Vqb2huLm9yZy9wcm9qZWN0cy9qYXZhc2NyaXB0LWRpZmYtYWxnb3JpdGhtL1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ1tdfSB4XG5cdCAqL1xuXHRjb25zdCBkZWxGbXQgPSAoeCkgPT4ge1xuXHRcdGlmICh4Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gYDxkZWwgY2xhc3M9J3BvcHVwRGlmZic+JHt4LmpvaW4oJycpfTwvZGVsPmA7XG5cdH07XG5cdGNvbnN0IGluc0ZtdCA9ICh4KSA9PiB7XG5cdFx0aWYgKHgubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdHJldHVybiBgPGlucyBjbGFzcz0ncG9wdXBEaWZmJz4ke3guam9pbignJyl9PC9pbnM+YDtcblx0fTtcblx0Y29uc3QgY291bnRDcm9zc2luZ3MgPSAoYSwgYiwgaSwgZWplY3QpID0+IHtcblx0XHQvLyBjb3VudCB0aGUgY3Jvc3NpbmdzIG9uIHRoZSBlZGdlIHN0YXJ0aW5nIGF0IGJbaV1cblx0XHRpZiAoIWJbaV0ucm93ICYmIGJbaV0ucm93ICE9PSAwKSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fVxuXHRcdGxldCBjb3VudCA9IDA7XG5cdFx0Zm9yIChjb25zdCBbaiwgZWxlbWVudF0gb2YgYS5lbnRyaWVzKCkpIHtcblx0XHRcdGlmICghZWxlbWVudC5yb3cgJiYgZWxlbWVudC5yb3cgIT09IDApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKGogLSBiW2ldLnJvdykgKiAoaSAtIGVsZW1lbnQucm93KSA+IDApIHtcblx0XHRcdFx0aWYgKGVqZWN0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y291bnQrKztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNvdW50O1xuXHR9O1xuXHRjb25zdCBzaG9ydGVuRGlmZlN0cmluZyA9IGZ1bmN0aW9uIHNob3J0ZW5EaWZmU3RyaW5nKHN0ciwgY29udGV4dCkge1xuXHRcdGNvbnN0IHJlID0gLyg8ZGVsW1xcU1xcc10qPzxcXC9kZWw+fDxpbnNbXFxTXFxzXSo/PFxcL2lucz4pLztcblx0XHRjb25zdCBzcGxpdHRlZCA9IHN0ci5zcGxpdChyZSk7XG5cdFx0bGV0IHJldCA9IFsnJ107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdHRlZC5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0aWYgKHNwbGl0dGVkW2ldLmxlbmd0aCA8IDIgKiBjb250ZXh0KSB7XG5cdFx0XHRcdHJldFtyZXQubGVuZ3RoIC0gMV0gKz0gc3BsaXR0ZWRbaV07XG5cdFx0XHRcdGlmIChpICsgMSA8IHNwbGl0dGVkLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldFtyZXQubGVuZ3RoIC0gMV0gKz0gc3BsaXR0ZWRbaSArIDFdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGkgPiAwKSB7XG5cdFx0XHRcdFx0cmV0W3JldC5sZW5ndGggLSAxXSArPSBzcGxpdHRlZFtpXS5zbGljZSgwLCBNYXRoLm1heCgwLCBjb250ZXh0KSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGkgKyAxIDwgc3BsaXR0ZWQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goc3BsaXR0ZWRbaV0uc2xpY2UoTWF0aC5tYXgoMCwgc3BsaXR0ZWRbaV0ubGVuZ3RoIC0gY29udGV4dCkpICsgc3BsaXR0ZWRbaSArIDFdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHR3aGlsZSAocmV0Lmxlbmd0aCA+IDAgJiYgIXJldFswXSkge1xuXHRcdFx0cmV0ID0gcmV0LnNsaWNlKDEpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBkaWZmU3RyaW5nID0gKG8sIG4pID0+IHtcblx0XHQvLyAgV2UgbmVlZCB0byBzcGxpdCB0aGUgc3RyaW5ncyBvIGFuZCBuIGZpcnN0LCBhbmQgZW50aWZ5KCkgdGhlIHBhcnRzXG5cdFx0Ly8gIGluZGl2aWR1YWxseSwgc28gdGhhdCB0aGUgSFRNTCBlbnRpdGllcyBhcmUgbmV2ZXIgY3V0IGFwYXJ0LiAoQXhlbEJvbGR0KVxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IG9TcGxpdHRlZCA9IG8uc3BsaXQoL1xcYi8pO1xuXHRcdGNvbnN0IG5TcGxpdHRlZCA9IG4uc3BsaXQoL1xcYi8pO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBvU3BsaXR0ZWQubGVuZ3RoOyArK2kpIHtcblx0XHRcdG9TcGxpdHRlZFtpXSA9IG9TcGxpdHRlZFtpXS5lbnRpZnkoKTtcblx0XHR9XG5cdFx0Zm9yIChpID0gMDsgaSA8IG5TcGxpdHRlZC5sZW5ndGg7ICsraSkge1xuXHRcdFx0blNwbGl0dGVkW2ldID0gblNwbGl0dGVkW2ldLmVudGlmeSgpO1xuXHRcdH1cblx0XHRjb25zdCBvdXQgPSBkaWZmKG9TcGxpdHRlZCwgblNwbGl0dGVkKTtcblx0XHRsZXQgc3RyID0gJyc7XG5cdFx0bGV0IGFjYyA9IFtdOyAvLyBhY2N1bXVsYXRvciBmb3IgcHJldHRpZXIgb3V0cHV0XG5cblx0XHQvLyBjcm9zc2luZyBwYWlyaW5ncyAtLSBlZyAnQSBCJyB2cyAnQiBBJyAtLSBjYXVzZSBwcm9ibGVtcywgc28gbGV0J3MgaXJvbiB0aGVtIG91dFxuXHRcdC8vIHRoaXMgZG9lc24ndCBhbHdheXMgZG8gdGhpbmdzIG9wdGltYWxseSBidXQgaXQgc2hvdWxkIGJlIGZhc3QgZW5vdWdoXG5cdFx0bGV0IG1heE91dHB1dFBhaXIgPSAwO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBvdXQubi5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKG91dC5uW2ldLnBhaXJlZCkge1xuXHRcdFx0XHRpZiAobWF4T3V0cHV0UGFpciA+IG91dC5uW2ldLnJvdykge1xuXHRcdFx0XHRcdC8vIHRhbmdsZSAtIGRlbGV0ZSBwYWlyaW5nXG5cdFx0XHRcdFx0b3V0Lm9bb3V0Lm5baV0ucm93XSA9IG91dC5vW291dC5uW2ldLnJvd10udGV4dDtcblx0XHRcdFx0XHRvdXQubltpXSA9IG91dC5uW2ldLnRleHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG1heE91dHB1dFBhaXIgPCBvdXQubltpXS5yb3cpIHtcblx0XHRcdFx0XHRtYXhPdXRwdXRQYWlyID0gb3V0Lm5baV0ucm93O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIG91dHB1dCB0aGUgc3R1ZmYgcHJlY2VkaW5nIHRoZSBmaXJzdCBwYWlyZWQgb2xkIGxpbmVcblx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0Lm8ubGVuZ3RoICYmICFvdXQub1tpXS5wYWlyZWQ7ICsraSkge1xuXHRcdFx0YWNjLnB1c2gob3V0Lm9baV0pO1xuXHRcdH1cblx0XHRzdHIgKz0gZGVsRm10KGFjYyk7XG5cdFx0YWNjID0gW107XG5cdFx0Ly8gbWFpbiBsb29wXG5cdFx0Zm9yIChpID0gMDsgaSA8IG91dC5uLmxlbmd0aDsgKytpKSB7XG5cdFx0XHQvLyBvdXRwdXQgdW5wYWlyZWQgbmV3IFwibGluZXNcIlxuXHRcdFx0d2hpbGUgKGkgPCBvdXQubi5sZW5ndGggJiYgIW91dC5uW2ldLnBhaXJlZCkge1xuXHRcdFx0XHRhY2MucHVzaChvdXQubltpKytdKTtcblx0XHRcdH1cblx0XHRcdHN0ciArPSBpbnNGbXQoYWNjKTtcblx0XHRcdGFjYyA9IFtdO1xuXHRcdFx0aWYgKGkgPCBvdXQubi5sZW5ndGgpIHtcblx0XHRcdFx0Ly8gdGhpcyBuZXcgXCJsaW5lXCIgaXMgcGFpcmVkIHdpdGggdGhlIChvdXQubltpXS5yb3cpdGggb2xkIFwibGluZVwiXG5cdFx0XHRcdHN0ciArPSBvdXQubltpXS50ZXh0O1xuXHRcdFx0XHQvLyBvdXRwdXQgdW5wYWlyZWQgb2xkIHJvd3Mgc3RhcnRpbmcgYWZ0ZXIgdGhpcyBuZXcgbGluZSdzIHBhcnRuZXJcblx0XHRcdFx0bGV0IG0gPSBvdXQubltpXS5yb3cgKyAxO1xuXHRcdFx0XHR3aGlsZSAobSA8IG91dC5vLmxlbmd0aCAmJiAhb3V0Lm9bbV0ucGFpcmVkKSB7XG5cdFx0XHRcdFx0YWNjLnB1c2gob3V0Lm9bbSsrXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyICs9IGRlbEZtdChhY2MpO1xuXHRcdFx0XHRhY2MgPSBbXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHN0cjtcblx0fTtcblx0Ly8gc2VlIHtAbGluayBodHRwOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvQ29yZV9KYXZhU2NyaXB0XzEuNV9SZWZlcmVuY2U6R2xvYmFsX09iamVjdHM6T2JqZWN0fVxuXHQvLyBGSVhNRTogdXNlIG9iai5oYXNPd25Qcm9wZXJ0eSBpbnN0ZWFkIG9mIHRoaXMga2x1ZGdlIVxuXHRjb25zdCBqc1Jlc2VydmVkUHJvcGVydGllcyA9IG5ldyBSZWdFeHAoXG5cdFx0J14oY29uc3RydWN0b3J8cHJvdG90eXBlfF9fKChkZWZpbmV8bG9va3VwKVtHU11ldHRlcilfXycgK1xuXHRcdFx0J3xldmFsfGhhc093blByb3BlcnR5fHByb3BlcnR5SXNFbnVtZXJhYmxlJyArXG5cdFx0XHQnfHRvKFNvdXJjZXxTdHJpbmd8TG9jYWxlU3RyaW5nKXwodW4pP3dhdGNofHZhbHVlT2YpJCdcblx0KTtcblx0Y29uc3QgZGlmZkJ1Z0FsZXJ0ID0gZnVuY3Rpb24gZGlmZkJ1Z0FsZXJ0KHdvcmQpIHtcblx0XHRpZiAoIWRpZmZCdWdBbGVydC5saXN0W3dvcmRdKSB7XG5cdFx0XHRkaWZmQnVnQWxlcnQubGlzdFt3b3JkXSA9IDE7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShgQmFkIHdvcmQ6ICR7d29yZH1cXG5cXG5QbGVhc2UgcmVwb3J0IHRoaXMgYnVnLmAsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0fVxuXHR9O1xuXHRkaWZmQnVnQWxlcnQubGlzdCA9IHt9O1xuXHRjb25zdCBtYWtlRGlmZkhhc2h0YWJsZSA9IChzcmMpID0+IHtcblx0XHRjb25zdCByZXQgPSB7fTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGpzUmVzZXJ2ZWRQcm9wZXJ0aWVzLnRlc3Qoc3JjW2ldKSkge1xuXHRcdFx0XHRzcmNbaV0gKz0gJzwhLS0gLS0+Jztcblx0XHRcdH1cblx0XHRcdHJldFtzcmNbaV1dID8/PSBbXTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJldFtzcmNbaV1dLnB1c2goaSk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0ZGlmZkJ1Z0FsZXJ0KHNyY1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IGRpZmYgPSAobywgbikgPT4ge1xuXHRcdC8vIHBhc3MgMTogbWFrZSBoYXNodGFibGUgbnMgd2l0aCBuZXcgcm93cyBhcyBrZXlzXG5cdFx0Y29uc3QgbnMgPSBtYWtlRGlmZkhhc2h0YWJsZShuKTtcblx0XHQvLyBwYXNzIDI6IG1ha2UgaGFzaHRhYmxlIG9zIHdpdGggb2xkIHJvd3MgYXMga2V5c1xuXHRcdGNvbnN0IG9zID0gbWFrZURpZmZIYXNodGFibGUobyk7XG5cdFx0Ly8gcGFzcyAzOiBwYWlyIHVuaXF1ZSBuZXcgcm93cyBhbmQgbWF0Y2hpbmcgdW5pcXVlIG9sZCByb3dzXG5cdFx0bGV0IGk7XG5cdFx0Zm9yIChpIGluIG5zKSB7XG5cdFx0XHRpZiAobnNbaV0ubGVuZ3RoID09PSAxICYmIG9zW2ldICYmIG9zW2ldLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRuW25zW2ldWzBdXSA9IHtcblx0XHRcdFx0XHR0ZXh0OiBuW25zW2ldWzBdXSxcblx0XHRcdFx0XHRyb3c6IG9zW2ldWzBdLFxuXHRcdFx0XHRcdHBhaXJlZDogdHJ1ZSxcblx0XHRcdFx0fTtcblx0XHRcdFx0b1tvc1tpXVswXV0gPSB7XG5cdFx0XHRcdFx0dGV4dDogb1tvc1tpXVswXV0sXG5cdFx0XHRcdFx0cm93OiBuc1tpXVswXSxcblx0XHRcdFx0XHRwYWlyZWQ6IHRydWUsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHBhc3MgNDogcGFpciBtYXRjaGluZyByb3dzIGltbWVkaWF0ZWx5IGZvbGxvd2luZyBwYWlyZWQgcm93cyAobm90IG5lY2Vzc2FyaWx5IHVuaXF1ZSlcblx0XHRmb3IgKGkgPSAwOyBpIDwgbi5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bltpXS5wYWlyZWQgJiZcblx0XHRcdFx0IW5baSArIDFdLnBhaXJlZCAmJlxuXHRcdFx0XHRuW2ldLnJvdyArIDEgPCBvLmxlbmd0aCAmJlxuXHRcdFx0XHQhb1tuW2ldLnJvdyArIDFdLnBhaXJlZCAmJlxuXHRcdFx0XHRuW2kgKyAxXSA9PT0gb1tuW2ldLnJvdyArIDFdXG5cdFx0XHQpIHtcblx0XHRcdFx0bltpICsgMV0gPSB7XG5cdFx0XHRcdFx0dGV4dDogbltpICsgMV0sXG5cdFx0XHRcdFx0cm93OiBuW2ldLnJvdyArIDEsXG5cdFx0XHRcdFx0cGFpcmVkOiB0cnVlLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRvW25baV0ucm93ICsgMV0gPSB7XG5cdFx0XHRcdFx0dGV4dDogb1tuW2ldLnJvdyArIDFdLFxuXHRcdFx0XHRcdHJvdzogaSArIDEsXG5cdFx0XHRcdFx0cGFpcmVkOiB0cnVlLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBwYXNzIDU6IHBhaXIgbWF0Y2hpbmcgcm93cyBpbW1lZGlhdGVseSBwcmVjZWRpbmcgcGFpcmVkIHJvd3MgKG5vdCBuZWNlc3NhcmlseSB1bmlxdWUpXG5cdFx0Zm9yIChpID0gbi5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5baV0ucGFpcmVkICYmXG5cdFx0XHRcdCFuW2kgLSAxXS5wYWlyZWQgJiZcblx0XHRcdFx0bltpXS5yb3cgPiAwICYmXG5cdFx0XHRcdCFvW25baV0ucm93IC0gMV0ucGFpcmVkICYmXG5cdFx0XHRcdG5baSAtIDFdID09PSBvW25baV0ucm93IC0gMV1cblx0XHRcdCkge1xuXHRcdFx0XHRuW2kgLSAxXSA9IHtcblx0XHRcdFx0XHR0ZXh0OiBuW2kgLSAxXSxcblx0XHRcdFx0XHRyb3c6IG5baV0ucm93IC0gMSxcblx0XHRcdFx0XHRwYWlyZWQ6IHRydWUsXG5cdFx0XHRcdH07XG5cdFx0XHRcdG9bbltpXS5yb3cgLSAxXSA9IHtcblx0XHRcdFx0XHR0ZXh0OiBvW25baV0ucm93IC0gMV0sXG5cdFx0XHRcdFx0cm93OiBpIC0gMSxcblx0XHRcdFx0XHRwYWlyZWQ6IHRydWUsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRvLFxuXHRcdFx0bixcblx0XHR9O1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBkaWZmLmpzXG5cdC8vIFNUQVJURklMRTogaW5pdC5qc1xuXHRjb25zdCBzZXRTaXRlSW5mbyA9ICgpID0+IHtcblx0XHRpZiAod2luZG93LnBvcHVwTG9jYWxEZWJ1Zykge1xuXHRcdFx0cGcud2lraS5ob3N0bmFtZSA9ICdlbi53aWtpcGVkaWEub3JnJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGcud2lraS5ob3N0bmFtZSA9IGxvY2F0aW9uLmhvc3RuYW1lOyAvLyB1c2UgaW4gcHJlZmVyZW5jZSB0byBsb2NhdGlvbi5ob3N0bmFtZSBmb3IgZmxleGliaWxpdHkgKD8pXG5cdFx0fVxuXHRcdHBnLndpa2kud2lraW1lZGlhID1cblx0XHRcdC8od2lraShbbXBdZWRpYXxzb3VyY2V8Ym9va3N8bmV3c3xxdW90ZXx2ZXJzaXR5fHNwZWNpZXN8dm95YWdlfGRhdGEpfG1ldGF3aWtpfHdpa3Rpb25hcnl8bWVkaWF3aWtpKVxcLm9yZy8udGVzdChcblx0XHRcdFx0cGcud2lraS5ob3N0bmFtZVxuXHRcdFx0KTtcblx0XHRwZy53aWtpLndpa2lhID0gL1xcLndpa2lhXFwuY29tJC9pLnRlc3QocGcud2lraS5ob3N0bmFtZSk7XG5cdFx0cGcud2lraS5pc0xvY2FsID0gcGcud2lraS5ob3N0bmFtZS5zdGFydHNXaXRoKCdsb2NhbGhvc3QnKTtcblx0XHRwZy53aWtpLmNvbW1vbnMgPVxuXHRcdFx0cGcud2lraS53aWtpbWVkaWEgJiYgcGcud2lraS5ob3N0bmFtZSAhPT0gJ2NvbW1vbnMud2lraW1lZGlhLm9yZycgPyAnY29tbW9ucy53aWtpbWVkaWEub3JnJyA6IG51bGw7XG5cdFx0cGcud2lraS5sYW5nID0gbXcuY29uZmlnLmdldCgnd2dDb250ZW50TGFuZ3VhZ2UnKTtcblx0XHRjb25zdCBwb3J0ID0gbG9jYXRpb24ucG9ydCA/IGA6JHtsb2NhdGlvbi5wb3J0fWAgOiAnJztcblx0XHRwZy53aWtpLnNpdGViYXNlID0gcGcud2lraS5ob3N0bmFtZSArIHBvcnQ7XG5cdH07XG5cdGNvbnN0IHNldFVzZXJJbmZvID0gKCkgPT4ge1xuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0XHR1c3VzZXJzOiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyksXG5cdFx0XHR1c3Byb3A6ICdyaWdodHMnLFxuXHRcdH07XG5cdFx0cGcudXNlci5jYW5SZXZpZXcgPSBmYWxzZTtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBSZXZpZXcnKSkge1xuXHRcdFx0Z2V0TXdBcGkoKVxuXHRcdFx0XHQuZ2V0KHBhcmFtcylcblx0XHRcdFx0LmRvbmUoKGRhdGEpID0+IHtcblx0XHRcdFx0XHRjb25zdCBbe3JpZ2h0c31dID0gZGF0YS5xdWVyeS51c2Vycztcblx0XHRcdFx0XHRwZy51c2VyLmNhblJldmlldyA9IHJpZ2h0cy5pbmNsdWRlcygncmV2aWV3Jyk7IC8vIFRPRE86IFNob3VsZCBpdCBiZSBhIGdldFZhbHVlT2YoJ1Jldmlld1JpZ2h0JykgP1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGZldGNoU3BlY2lhbFBhZ2VOYW1lcyA9ICgpID0+IHtcblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdG1heGFnZTogMzYwMCxcblx0XHRcdG1ldGE6ICdzaXRlaW5mbycsXG5cdFx0XHRzaXByb3A6ICdzcGVjaWFscGFnZWFsaWFzZXMnLFxuXHRcdFx0Ly8gY2FjaGUgZm9yIGFuIGhvdXJcblx0XHRcdHVzZWxhbmc6ICdjb250ZW50Jyxcblx0XHR9O1xuXHRcdHJldHVybiBnZXRNd0FwaSgpXG5cdFx0XHQuZ2V0KHBhcmFtcylcblx0XHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdHBnLndpa2kuc3BlY2lhbHBhZ2VhbGlhc2VzID0gZGF0YS5xdWVyeS5zcGVjaWFscGFnZWFsaWFzZXM7XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3Qgc2V0VGl0bGVCYXNlID0gKCkgPT4ge1xuXHRcdGNvbnN0IHByb3RvY29sID0gd2luZG93LnBvcHVwTG9jYWxEZWJ1ZyA/ICdodHRwOicgOiBsb2NhdGlvbi5wcm90b2NvbDtcblx0XHRwZy53aWtpLmFydGljbGVQYXRoID0gbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlUGF0aCcpLnJlcGxhY2UoL1xcL1xcJDEvLCAnJyk7IC8vIGFzIGluIGh0dHA6Ly9zb21lLnRoaW5nLmNvbS93aWtpL0FydGljbGVcblx0XHRwZy53aWtpLmJvdEludGVyZmFjZVBhdGggPSBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpO1xuXHRcdHBnLndpa2kuQVBJUGF0aCA9IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpfS9hcGkucGhwYDtcblx0XHQvLyBkZWZhdWx0IG1lZGlhd2lraSBzZXR0aW5nIGlzIHBhdGhzIGxpa2UgaHR0cDovL3NvbWUudGhpbmcuY29tL2FydGljbGVQYXRoL2luZGV4LnBocD90aXRsZT1mb29cblx0XHRjb25zdCB0aXRsZXRhaWwgPSBgJHtwZy53aWtpLmJvdEludGVyZmFjZVBhdGh9P3RpdGxlPWA7XG5cdFx0Ly8gbGV0IHRpdGxldGFpbDIgPSBqb2luUGF0aChbcGcud2lraS5ib3RJbnRlcmZhY2VQYXRoLCAnd2lraS5waHRtbD90aXRsZT0nXSk7XG5cdFx0Ly8gb3RoZXIgc2l0ZXMgbWF5IG5lZWQgdG8gYWRkIGNvZGUgaGVyZSB0byBzZXQgdGl0bGV0YWlsIGRlcGVuZGluZyBvbiBob3cgdGhlaXIgdXJscyB3b3JrXG5cdFx0cGcud2lraS50aXRsZWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3RpdGxldGFpbH1gO1xuXHRcdC8vIHBnLndpa2kudGl0bGViYXNlMiAgPSBwcm90b2NvbCArICcvLycgKyBqb2luUGF0aChbcGcud2lraS5zaXRlYmFzZSwgdGl0bGV0YWlsMl0pO1xuXHRcdHBnLndpa2kud2lraWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3BnLndpa2kuYm90SW50ZXJmYWNlUGF0aH1gO1xuXHRcdHBnLndpa2kuYXBpd2lraWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3BnLndpa2kuQVBJUGF0aH1gO1xuXHRcdHBnLndpa2kuYXJ0aWNsZWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3BnLndpa2kuYXJ0aWNsZVBhdGh9YDtcblx0XHRwZy53aWtpLmNvbW1vbnNiYXNlID0gYCR7cHJvdG9jb2x9Ly8ke3BnLndpa2kuY29tbW9uc30ke3BnLndpa2kuYm90SW50ZXJmYWNlUGF0aH1gO1xuXHRcdHBnLndpa2kuYXBpY29tbW9uc2Jhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5jb21tb25zfSR7cGcud2lraS5BUElQYXRofWA7XG5cdFx0cGcucmUuYmFzZW5hbWVzID0gbmV3IFJlZ0V4cChgXigke21hcChsaXRlcmFsaXplUmVnZXgsIFtwZy53aWtpLnRpdGxlYmFzZSwgcGcud2lraS5hcnRpY2xlYmFzZV0pLmpvaW4oJ3wnKX0pYCk7XG5cdH07XG5cdC8vIEdsb2JhbCByZWdleHBzXG5cdGNvbnN0IHNldE1haW5SZWdleCA9ICgpID0+IHtcblx0XHRjb25zdCByZVN0YXJ0ID0gJ1teOl0qOi8vJztcblx0XHRsZXQgcHJlVGl0bGVzID0gYCR7bGl0ZXJhbGl6ZVJlZ2V4KG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpKX0vKD86aW5kZXhbLl1waHB8d2lraVsuXXBodG1sKVs/XXRpdGxlPWA7XG5cdFx0cHJlVGl0bGVzICs9IGB8JHtsaXRlcmFsaXplUmVnZXgoYCR7cGcud2lraS5hcnRpY2xlUGF0aH0vYCl9YDtcblx0XHRjb25zdCByZUVuZCA9IGAoJHtwcmVUaXRsZXN9KShbXiY/I10qKVteI10qKD86IyguKykpP2A7XG5cdFx0cGcucmUubWFpbiA9IG5ldyBSZWdFeHAocmVTdGFydCArIGxpdGVyYWxpemVSZWdleChwZy53aWtpLnNpdGViYXNlKSArIHJlRW5kKTtcblx0fTtcblx0Y29uc3QgYnVpbGRTcGVjaWFsUGFnZUdyb3VwID0gKHNwZWNpYWxQYWdlT2JqKSA9PiB7XG5cdFx0Y29uc3QgdmFyaWFudHMgPSBbXTtcblx0XHR2YXJpYW50cy5wdXNoKFxuXHRcdFx0bXcudXRpbC5lc2NhcGVSZWdFeHAoc3BlY2lhbFBhZ2VPYmoucmVhbG5hbWUpLFxuXHRcdFx0bXcudXRpbC5lc2NhcGVSZWdFeHAoZW5jb2RlVVJJKHNwZWNpYWxQYWdlT2JqLnJlYWxuYW1lKSlcblx0XHQpO1xuXHRcdGZvciAoY29uc3QgYWxpYXMgb2Ygc3BlY2lhbFBhZ2VPYmouYWxpYXNlcykge1xuXHRcdFx0dmFyaWFudHMucHVzaChtdy51dGlsLmVzY2FwZVJlZ0V4cChhbGlhcyksIG13LnV0aWwuZXNjYXBlUmVnRXhwKGVuY29kZVVSSShhbGlhcykpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhcmlhbnRzLmpvaW4oJ3wnKTtcblx0fTtcblx0Y29uc3Qgc2V0UmVnZXhwcyA9ICgpID0+IHtcblx0XHRzZXRNYWluUmVnZXgoKTtcblx0XHRjb25zdCBzcCA9IG5zUmUocGcubnNTcGVjaWFsSWQpO1xuXHRcdHBnLnJlLnVybE5vUG9wdXAgPSBuZXcgUmVnRXhwKGAoKHRpdGxlPXwvKSR7c3B9KD86JTNBfDopfHNlY3Rpb249WzAtOV18XiMkKWApO1xuXHRcdGZvciAoY29uc3Qgc3BlY2lhbHBhZ2Ugb2YgcGcud2lraS5zcGVjaWFscGFnZWFsaWFzZXMpIHtcblx0XHRcdHN3aXRjaCAoc3BlY2lhbHBhZ2UucmVhbG5hbWUpIHtcblx0XHRcdFx0Y2FzZSAnQ29udHJpYnV0aW9ucyc6XG5cdFx0XHRcdFx0cGcucmUuY29udHJpYnMgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YCh0aXRsZT18Lykke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pYCArXG5cdFx0XHRcdFx0XHRcdGAoJnRhcmdldD18L3wvJHtuc1JlKHBnLm5zVXNlcklkKX06KSguKilgLFxuXHRcdFx0XHRcdFx0J2knXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnRGlmZic6XG5cdFx0XHRcdFx0cGcucmUuc3BlY2lhbGRpZmYgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YC8ke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pLyhbXj8jXSopYCxcblx0XHRcdFx0XHRcdCdpJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ0VtYWlsdXNlcic6XG5cdFx0XHRcdFx0cGcucmUuZW1haWwgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YCh0aXRsZT18Lykke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pYCArXG5cdFx0XHRcdFx0XHRcdGAoJnRhcmdldD18L3wvKD86JHtuc1JlKHBnLm5zVXNlcklkKX06KT8pKC4qKWAsXG5cdFx0XHRcdFx0XHQnaSdcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdXaGF0bGlua3NoZXJlJzpcblx0XHRcdFx0XHRwZy5yZS5iYWNrbGlua3MgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YCh0aXRsZT18Lykke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pKCZ0YXJnZXQ9fC8pKFteJl0qKWAsXG5cdFx0XHRcdFx0XHQnaSdcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBpbSA9IG5zUmVJbWFnZSgpO1xuXHRcdC8vIG5vdGU6IHRyaWVzIHRvIGdldCBpbWFnZXMgaW4gaW5mb2JveCB0ZW1wbGF0ZXMgdG9vLCBlLmcuIG1vdmllIHBhZ2VzLCBhbGJ1bSBwYWdlcyBldGNcblx0XHQvL1x0XHRcdFx0XHQgIChefFxcW1xcWylpbWFnZTogKihbXnxcXF1dKltefFxcXSBdKSAqXG5cdFx0Ly9cdFx0XHRcdFx0ICAoXnxcXFtcXFspaW1hZ2U6ICooW158XFxdXSpbXnxcXF0gXSkoW14wLTlcXF1dKihbMC05XSspICpweCk/XG5cdFx0Ly9cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JDQgPSAxMjAgYXMgaW4gMTIwcHhcblx0XHRwZy5yZS5pbWFnZSA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgKF58XFxcXFtcXFxcWykke2ltfTogKihbXnxcXFxcXV0qW158XFxcXF0gXSkke1N0cmluZy5yYXdgKFteMC05XFxdXSooWzAtOV0rKSAqcHgpP3woPzpcXG4gKlt8XT98W3xdKSAqYH0oJHtnZXRWYWx1ZU9mKCdwb3B1cEltYWdlVmFyc1JlZ2V4cCcpfSlgICtcblx0XHRcdFx0YCAqPSAqKD86XFxcXFtcXFxcWyAqKT8oPzoke2ltfTopPyR7U3RyaW5nLnJhd2AoW158XSo/KSg/OlxcXVxcXSk/ICpbfF0/ICpcXG5gfWAsXG5cdFx0XHQnaW1nJ1xuXHRcdCk7XG5cdFx0cGcucmUuaW1hZ2VCcmFja2V0Q291bnQgPSA2O1xuXHRcdHBnLnJlLmNhdGVnb3J5ID0gbmV3IFJlZ0V4cChgXFxcXFtcXFxcWyR7bnNSZShwZy5uc0NhdGVnb3J5SWQpfTogKihbXnxcXFxcXV0qW158XFxcXF0gXSkgKmAsICdpJyk7XG5cdFx0cGcucmUuY2F0ZWdvcnlCcmFja2V0Q291bnQgPSAxO1xuXHRcdC8vIElQdjYgfCBJUHY0XG5cdFx0cGcucmUuaXBVc2VyID1cblx0XHRcdC9eKD86Oig/Ojp8KD86OltcXGRBLUZhLWZdezEsNH0pezEsN30pfFtcXGRBLUZhLWZdezEsNH0oPzo6W1xcZEEtRmEtZl17MSw0fSl7MCw2fTo6fFtcXGRBLUZhLWZdezEsNH0oPzo6W1xcZEEtRmEtZl17MSw0fSl7N30pfCgoKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV1cXGR8XFxkKVxcLil7M30oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XVxcZHxcXGQpKSQvO1xuXHRcdHBnLnJlLnN0dWIgPSBuZXcgUmVnRXhwKGdldFZhbHVlT2YoJ3BvcHVwU3R1YlJlZ2V4cCcpLCAnaW0nKTtcblx0XHRwZy5yZS5kaXNhbWJpZyA9IG5ldyBSZWdFeHAoZ2V0VmFsdWVPZigncG9wdXBEYWJSZWdleHAnKSwgJ2ltJyk7XG5cdFx0Ly8gRklYTUUgcmVwbGFjZSB3aXRoIGdlbmVyYWwgcGFyYW1ldGVyIHBhcnNpbmcgZnVuY3Rpb24sIHRoaXMgaXMgZGFmdFxuXHRcdHBnLnJlLm9sZGlkID0gL1smP11vbGRpZD0oW14mXSopLztcblx0XHRwZy5yZS5kaWZmID0gL1smP11kaWZmPShbXiZdKikvO1xuXHR9O1xuXHQvLyBtaXNjZWxsYW55XG5cdGNvbnN0IHNldHVwQ2FjaGUgPSAoKSA9PiB7XG5cdFx0Ly8gcGFnZSBjYWNoaW5nXG5cdFx0cGcuY2FjaGUucGFnZXMgPSBbXTtcblx0fTtcblx0Y29uc3Qgc2V0TWlzYyA9ICgpID0+IHtcblx0XHRwZy5jdXJyZW50LmxpbmsgPSBudWxsO1xuXHRcdHBnLmN1cnJlbnQubGlua3MgPSBbXTtcblx0XHRwZy5jdXJyZW50LmxpbmtzSGFzaCA9IHt9O1xuXHRcdHNldHVwQ2FjaGUoKTtcblx0XHRwZy50aW1lci5jaGVja1BvcHVwUG9zaXRpb24gPSBudWxsO1xuXHRcdHBnLmNvdW50ZXIubG9vcCA9IDA7XG5cdFx0Ly8gaWRzIGNoYW5nZSB3aXRoIGVhY2ggcG9wdXA6IHBvcHVwSW1hZ2UwLCBwb3B1cEltYWdlMSBldGNcblx0XHRwZy5pZE51bWJlciA9IDA7XG5cdFx0Ly8gZm9yIG15RGVjb2RlVVJJXG5cdFx0cGcubWlzYy5kZWNvZGVFeHRyYXMgPSBbXG5cdFx0XHR7ZnJvbTogJyUyQycsIHRvOiAnLCd9LFxuXHRcdFx0e2Zyb206ICdfJywgdG86ICcgJ30sXG5cdFx0XHR7ZnJvbTogJyUyNCcsIHRvOiAnJCd9LFxuXHRcdFx0e2Zyb206ICclMjYnLCB0bzogJyYnfSwgLy8gbm8gLFxuXHRcdF07XG5cdH07XG5cdGNvbnN0IGdldE13QXBpID0gKCkgPT4ge1xuXHRcdGlmICghcGcuYXBpLmNsaWVudCkge1xuXHRcdFx0cGcuYXBpLnVzZXJBZ2VudCA9ICdOYXZpZ2F0aW9uIHBvcHVwcy8xLjAnO1xuXHRcdFx0cGcuYXBpLmNsaWVudCA9IGFwaTtcblx0XHR9XG5cdFx0cmV0dXJuIHBnLmFwaS5jbGllbnQ7XG5cdH07XG5cdC8vIFdlIG5lZWQgYSBjYWxsYmFjayBzaW5jZSB0aGlzIG1pZ2h0IGVuZCB1cCBhc3luY2hyb25vdXMgYmVjYXVzZSBvZlxuXHQvLyB0aGUgbXcubG9hZGVyLnVzaW5nKCkgY2FsbC5cblx0Y29uc3Qgc2V0dXBQb3B1cHMgPSBmdW5jdGlvbiBzZXR1cFBvcHVwcyhjYWxsYmFjaykge1xuXHRcdGlmIChzZXR1cFBvcHVwcy5jb21wbGV0ZWQpIHtcblx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gVGhlc2UgZGVwZW5kZW5jaWVzIHNob3VsZCBhbHNlIGJlIGVuZm9yY2VkIGZyb20gdGhlIGdhZGdldCxcblx0XHQvLyBidXQgbm90IGV2ZXJ5b25lIGxvYWRzIHRoaXMgYXMgYSBnYWRnZXQsIHNvIGRvdWJsZSBjaGVja1xuXHRcdGZldGNoU3BlY2lhbFBhZ2VOYW1lcygpLnRoZW4oKCkgPT4ge1xuXHRcdFx0Ly8gTkIgdHJhbnNsYXRhYmxlIHN0cmluZ3Mgc2hvdWxkIGJlIHNldCB1cCBmaXJzdCAoc3RyaW5ncy5qcylcblx0XHRcdC8vIGJhc2ljc1xuXHRcdFx0c2V0dXBEZWJ1Z2dpbmcoKTtcblx0XHRcdHNldFNpdGVJbmZvKCk7XG5cdFx0XHRzZXRUaXRsZUJhc2UoKTtcblx0XHRcdHNldE9wdGlvbnMoKTsgLy8gc2VlIG9wdGlvbnMuanNcblx0XHRcdHNldFVzZXJJbmZvKCk7XG5cdFx0XHQvLyBuYW1lc3BhY2VzIGV0Y1xuXHRcdFx0c2V0TmFtZXNwYWNlcygpO1xuXHRcdFx0c2V0SW50ZXJ3aWtpKCk7XG5cdFx0XHQvLyByZWdleHBzXG5cdFx0XHRzZXRSZWdleHBzKCk7XG5cdFx0XHRzZXRSZWRpcnMoKTtcblx0XHRcdC8vIG90aGVyIHN0dWZmXG5cdFx0XHRzZXRNaXNjKCk7XG5cdFx0XHRzZXR1cExpdmVQcmV2aWV3KCk7XG5cdFx0XHQvLyBtYWluIGRlYWwgaGVyZVxuXHRcdFx0c2V0dXBUb29sdGlwcygpO1xuXHRcdFx0bG9nKCdJbiBzZXR1cFBvcHVwcygpLCBqdXN0IGNhbGxlZCBzZXR1cFRvb2x0aXBzKCknKTtcblx0XHRcdE5hdnBvcHVwLnRyYWNrZXIuZW5hYmxlKCk7XG5cdFx0XHRzZXR1cFBvcHVwcy5jb21wbGV0ZWQgPSB0cnVlO1xuXHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBpbml0LmpzXG5cdC8vIFNUQVJURklMRTogbmF2bGlua3MuanNcblx0Ly8gbmF2bGlua3MuLi4gbGV0IHRoZSBmdW4gYmVnaW5cblx0Ly9cblx0Y29uc3QgZGVmYXVsdE5hdmxpbmtTcGVjID0gKCkgPT4ge1xuXHRcdGxldCBzdHIgPSAnJztcblx0XHRzdHIgKz0gJzxiPjw8bWFpbmxpbmt8c2hvcnRjdXQ9ID4+PC9iPic7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwTGFzdEVkaXRMaW5rJykpIHtcblx0XHRcdHN0ciArPSAnKjw8bGFzdEVkaXR8c2hvcnRjdXQ9Lz4+fDw8bGFzdENvbnRyaWI+Pnw8PHNpbmNlTWU+PmlmKG9sZGlkKXt8PDxvbGRFZGl0Pj58PDxkaWZmQ3VyPj59Jztcblx0XHR9XG5cdFx0Ly8gdXNlciBsaW5rc1xuXHRcdC8vIGNvbnRyaWJzIC0gbG9nIC0gY291bnQgLSBlbWFpbCAtIGJsb2NrXG5cdFx0Ly8gY291bnQgb25seSBpZiBhcHBsaWNhYmxlOyBibG9jayBvbmx5IGlmIHBvcHVwQWRtaW5MaW5rc1xuXHRcdHN0ciArPSAnaWYodXNlcil7PGJyPjw8Y29udHJpYnN8c2hvcnRjdXQ9Yz4+Kjw8dXNlcmxvZ3xzaG9ydGN1dD1MfGxvZz4+Jztcblx0XHRzdHIgKz0gJ2lmKGlwdXNlcil7Kjw8YXJpbj4+fWlmKHdpa2ltZWRpYSl7Kjw8Y291bnR8c2hvcnRjdXQ9Iz4+fSc7XG5cdFx0c3RyICs9ICdpZihpcHVzZXIpe31lbHNleyo8PGVtYWlsfHNob3J0Y3V0PUU+Pn1pZihhZG1pbil7Kjw8YmxvY2t8c2hvcnRjdXQ9Yj4+fDw8YmxvY2tsb2d8bG9nPj59fSc7XG5cdFx0Ly8gZWRpdGluZyBsaW5rc1xuXHRcdC8vIHRhbGtwYWdlICAgLT4gZWRpdHxuZXcgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSBhcnRpY2xlfGVkaXRcblx0XHQvLyBvdGhlciBwYWdlIC0+IGVkaXQgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSB0YWxrfGVkaXR8bmV3XG5cdFx0Y29uc3QgZWRpdHN0ciA9ICc8PGVkaXR8c2hvcnRjdXQ9ZT4+Jztcblx0XHRjb25zdCBlZGl0T2xkaWRTdHIgPSBgaWYob2xkaWQpezw8ZWRpdE9sZHxzaG9ydGN1dD1lPj58PDxyZXZlcnR8c2hvcnRjdXQ9dnxydj4+fDw8ZWRpdHxjdXI+Pn1lbHNleyR7ZWRpdHN0cn19YDtcblx0XHRjb25zdCBoaXN0b3J5c3RyID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1oPj58PDxlZGl0b3JzfHNob3J0Y3V0PUV8Pj4nO1xuXHRcdGNvbnN0IHdhdGNoc3RyID0gJzw8dW53YXRjaHx1bndhdGNoU2hvcnQ+Pnw8PHdhdGNofHNob3J0Y3V0PXd8d2F0Y2hUaGluZ3k+Pic7XG5cdFx0c3RyICs9XG5cdFx0XHRgPGJyPmlmKHRhbGspeyR7ZWRpdE9sZGlkU3RyfXw8PG5ld3xzaG9ydGN1dD0rPj5gICtcblx0XHRcdGAqJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PGFydGljbGV8c2hvcnRjdXQ9YT4+PC9iPnw8PGVkaXRBcnRpY2xlfGVkaXQ+PicgK1xuXHRcdFx0YH1lbHNleyR7XG5cdFx0XHRcdC8vIG5vdCBhIHRhbGsgcGFnZVxuXHRcdFx0XHRlZGl0T2xkaWRTdHJcblx0XHRcdH0qJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PHRhbGt8c2hvcnRjdXQ9dD4+PC9iPnw8PGVkaXRUYWxrfGVkaXQ+Pnw8PG5ld1RhbGt8c2hvcnRjdXQ9K3xuZXc+Pn0nO1xuXHRcdC8vIG1pc2MgbGlua3Ncblx0XHRzdHIgKz0gJzxicj48PHdoYXRMaW5rc0hlcmV8c2hvcnRjdXQ9bD4+Kjw8cmVsYXRlZENoYW5nZXN8c2hvcnRjdXQ9cj4+Kjw8bW92ZXxzaG9ydGN1dD1tPj4nO1xuXHRcdC8vIGFkbWluIGxpbmtzXG5cdFx0c3RyICs9XG5cdFx0XHQnaWYoYWRtaW4pezxicj48PHVucHJvdGVjdHx1bnByb3RlY3RTaG9ydD4+fDw8cHJvdGVjdHxzaG9ydGN1dD1wPj58PDxwcm90ZWN0bG9nfGxvZz4+KicgK1xuXHRcdFx0Jzw8dW5kZWxldGV8dW5kZWxldGVTaG9ydD4+fDw8ZGVsZXRlfHNob3J0Y3V0PWQ+Pnw8PGRlbGV0ZWxvZ3xsb2c+Pn0nO1xuXHRcdHJldHVybiBzdHI7XG5cdH07XG5cdGNvbnN0IG5hdkxpbmtzSFRNTCA9IChhcnRpY2xlLCBfaGludCwgcGFyYW1zKSA9PiB7XG5cdFx0Ly8gb2xkaWQsIHJjaWQpIHtcblx0XHRjb25zdCBzdHIgPSBgPHNwYW4gY2xhc3M9XCJwb3B1cE5hdkxpbmtzXCI+JHtkZWZhdWx0TmF2bGlua1NwZWMoKX08L3NwYW4+YDtcblx0XHQvLyBCQU1cblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChzdHIsIGFydGljbGUsIHBhcmFtcyk7XG5cdH07XG5cdGNvbnN0IGV4cGFuZENvbmRpdGlvbmFsTmF2bGlua1N0cmluZyA9IGZ1bmN0aW9uIGV4cGFuZENvbmRpdGlvbmFsTmF2bGlua1N0cmluZyhzLCBhcnRpY2xlLCB6LCByZWN1cnNpb25Db3VudCkge1xuXHRcdGNvbnN0IHtvbGRpZH0gPSB6O1xuXHRcdGNvbnN0IHtyY2lkfSA9IHo7XG5cdFx0Y29uc3Qge2RpZmZ9ID0gejtcblx0XHQvLyBuZXN0ZWQgY29uZGl0aW9uYWxzICh1cCB0byAxMCBkZWVwKSBhcmUgb2ssIGhvcGVmdWxseSEgKHdvcmsgZnJvbSB0aGUgaW5zaWRlIG91dClcblx0XHRpZiAodHlwZW9mIHJlY3Vyc2lvbkNvdW50ICE9PSB0eXBlb2YgMCkge1xuXHRcdFx0cmVjdXJzaW9uQ291bnQgPSAwO1xuXHRcdH1cblx0XHQvLyAoMVx0IGlmXHRcXFxcKFx0KDJcdDIpXHRcXFxcKVx0ICB7KDNcdDMpfSAgKDQgICBlbHNlXHQgIHsoNVx0IDUpfSAgNCkxKVxuXHRcdGNvbnN0IGNvbmRpdGlvbmFsU3BsaXRSZWdleCA9IC8oOz9cXHMqaWZcXHMqXFwoXFxzKihcXHcqKVxccypcXClcXHMqeyhbXnt9XSopfShcXHMqZWxzZVxccyp7KFtee31dKj8pfXwpKS9pO1xuXHRcdGNvbnN0IHNwbGl0dGVkID0gcy5zcGxpdChjb25kaXRpb25hbFNwbGl0UmVnZXgpO1xuXHRcdC8vICQxOiB3aG9sZSBjb25kaXRpb25hbFxuXHRcdC8vICQyOiB0ZXN0IGNvbmRpdGlvblxuXHRcdC8vICQzOiB0cnVlIGV4cGFuc2lvblxuXHRcdC8vICQ0OiBlbHNlIGNsYXVzZSAocG9zc2libHkgZW1wdHkpXG5cdFx0Ly8gJDU6IGZhbHNlIGV4cGFuc2lvbiAocG9zc2libHkgbnVsbClcblx0XHRjb25zdCBudW1QYXJlbnMgPSA1O1xuXHRcdGxldCBbcmV0XSA9IHNwbGl0dGVkO1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgc3BsaXR0ZWQubGVuZ3RoOyBpID0gaSArIG51bVBhcmVucyArIDEpIHtcblx0XHRcdGNvbnN0IHRlc3RTdHJpbmcgPSBzcGxpdHRlZFtpICsgMiAtIDFdO1xuXHRcdFx0Y29uc3QgdHJ1ZVN0cmluZyA9IHNwbGl0dGVkW2kgKyAzIC0gMV07XG5cdFx0XHRsZXQgZmFsc2VTdHJpbmcgPSBzcGxpdHRlZFtpICsgNSAtIDFdO1xuXHRcdFx0aWYgKGZhbHNlU3RyaW5nID09PSB1bmRlZmluZWQgfHwgIWZhbHNlU3RyaW5nKSB7XG5cdFx0XHRcdGZhbHNlU3RyaW5nID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRsZXQgdGVzdFJlc3VsdDtcblx0XHRcdHN3aXRjaCAodGVzdFN0cmluZykge1xuXHRcdFx0XHRjYXNlICd1c2VyJzpcblx0XHRcdFx0XHR0ZXN0UmVzdWx0ID0gISFhcnRpY2xlLnVzZXJOYW1lKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3RhbGsnOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhYXJ0aWNsZS50YWxrUGFnZSgpOyAvLyB0YWxrUGFnZSBjb252ZXJ0cyBfYXJ0aWNsZXNfIHRvIHRhbGtQYWdlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdhZG1pbic6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhZ2V0VmFsdWVPZigncG9wdXBBZG1pbkxpbmtzJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ29sZGlkJzpcblx0XHRcdFx0XHR0ZXN0UmVzdWx0ID0gISEob2xkaWQgIT09IHVuZGVmaW5lZCAmJiBvbGRpZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JjaWQnOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhIShyY2lkICE9PSB1bmRlZmluZWQgJiYgcmNpZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2lwdXNlcic6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhYXJ0aWNsZS5pc0lwVXNlcigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtYWluc3BhY2VfZW4nOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSBpc0luTWFpbk5hbWVzcGFjZShhcnRpY2xlKSAmJiBwZy53aWtpLmhvc3RuYW1lID09PSAnZW4ud2lraXBlZGlhLm9yZyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3dpa2ltZWRpYSc6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhcGcud2lraS53aWtpbWVkaWE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2RpZmYnOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhIShkaWZmICE9PSB1bmRlZmluZWQgJiYgZGlmZik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHRlc3RSZXN1bHQpIHtcblx0XHRcdFx0Y2FzZSBudWxsOlxuXHRcdFx0XHRcdHJldCArPSBzcGxpdHRlZFtpXTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSB0cnVlOlxuXHRcdFx0XHRcdHJldCArPSB0cnVlU3RyaW5nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIGZhbHNlOlxuXHRcdFx0XHRcdHJldCArPSBmYWxzZVN0cmluZztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdC8vIGFwcGVuZCBub24tY29uZGl0aW9uYWwgc3RyaW5nXG5cdFx0XHRyZXQgKz0gc3BsaXR0ZWRbaSArIG51bVBhcmVuc107XG5cdFx0fVxuXHRcdGlmIChjb25kaXRpb25hbFNwbGl0UmVnZXgudGVzdChyZXQpICYmIHJlY3Vyc2lvbkNvdW50IDwgMTApIHtcblx0XHRcdHJldHVybiBleHBhbmRDb25kaXRpb25hbE5hdmxpbmtTdHJpbmcocmV0LCBhcnRpY2xlLCB6LCByZWN1cnNpb25Db3VudCArIDEpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBuYXZsaW5rU3RyaW5nVG9BcnJheSA9IChzLCBhcnRpY2xlLCBwYXJhbXMpID0+IHtcblx0XHRzID0gZXhwYW5kQ29uZGl0aW9uYWxOYXZsaW5rU3RyaW5nKHMsIGFydGljbGUsIHBhcmFtcyk7XG5cdFx0Y29uc3Qgc3BsaXR0ZWQgPSBzLnNwbGl0KC88PCguKj8pPj4vKTtcblx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRmb3IgKGNvbnN0IFtpLCBlbGVtZW50XSBvZiBzcGxpdHRlZC5lbnRyaWVzKCkpIHtcblx0XHRcdGlmIChpICUgMikge1xuXHRcdFx0XHQvLyBpIG9kZCwgc28gcyBpcyBhIHRhZ1xuXHRcdFx0XHRjb25zdCB0ID0gbmV3IG5hdmxpbmtUYWcoKTtcblx0XHRcdFx0Y29uc3Qgc3MgPSBlbGVtZW50LnNwbGl0KCd8Jyk7XG5cdFx0XHRcdFt0LmlkXSA9IHNzO1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMTsgaiA8IHNzLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc3NzID0gc3Nbal0uc3BsaXQoJz0nKTtcblx0XHRcdFx0XHRpZiAoc3NzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFssIHRbc3NzWzBdXV0gPSBzc3M7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIG5vIGFzc2lnbm1lbnQgKG5vIFwiPVwiKSwgc28gdHJlYXQgdGhpcyBhcyBhIHRpdGxlIChvdmVyd3JpdGluZyB0aGUgbGFzdCBvbmUpXG5cdFx0XHRcdFx0XHR0LnRleHQgPSBwb3B1cFN0cmluZyhzc3NbMF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0LmFydGljbGUgPSBhcnRpY2xlO1xuXHRcdFx0XHRjb25zdCB7b2xkaWR9ID0gcGFyYW1zO1xuXHRcdFx0XHRjb25zdCB7cmNpZH0gPSBwYXJhbXM7XG5cdFx0XHRcdGNvbnN0IHtkaWZmfSA9IHBhcmFtcztcblx0XHRcdFx0aWYgKG9sZGlkICE9PSB1bmRlZmluZWQgJiYgb2xkaWQgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0Lm9sZGlkID0gb2xkaWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJjaWQgIT09IHVuZGVmaW5lZCAmJiByY2lkICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dC5yY2lkID0gcmNpZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGlmZiAhPT0gdW5kZWZpbmVkICYmIGRpZmYgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0LmRpZmYgPSBkaWZmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghdC50ZXh0ICYmIHQuaWQgIT09ICdtYWlubGluaycpIHtcblx0XHRcdFx0XHR0LnRleHQgPSBwb3B1cFN0cmluZyh0LmlkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXQucHVzaCh0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHBsYWluIEhUTUxcblx0XHRcdFx0cmV0LnB1c2goZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IG5hdmxpbmtTdWJzdGl0dXRlSFRNTCA9IChzKSA9PiB7XG5cdFx0cmV0dXJuIHNcblx0XHRcdC5zcGxpdCgnKicpXG5cdFx0XHQuam9pbihnZXRWYWx1ZU9mKCdwb3B1cE5hdkxpbmtTZXBhcmF0b3InKSlcblx0XHRcdC5zcGxpdCgnPG1lbnVyb3c+Jylcblx0XHRcdC5qb2luKCc8bGkgY2xhc3M9XCJwb3B1cF9tZW51X3Jvd1wiPicpXG5cdFx0XHQuc3BsaXQoJzwvbWVudXJvdz4nKVxuXHRcdFx0LmpvaW4oJzwvbGk+Jylcblx0XHRcdC5zcGxpdCgnPG1lbnU+Jylcblx0XHRcdC5qb2luKCc8dWwgY2xhc3M9XCJwb3B1cF9tZW51XCI+Jylcblx0XHRcdC5zcGxpdCgnPC9tZW51PicpXG5cdFx0XHQuam9pbignPC91bD4nKTtcblx0fTtcblx0Y29uc3QgbmF2bGlua0RlcHRoID0gKG1hZ2ljLCBzKSA9PiB7XG5cdFx0cmV0dXJuIHMuc3BsaXQoYDwke21hZ2ljfT5gKS5sZW5ndGggLSBzLnNwbGl0KGA8LyR7bWFnaWN9PmApLmxlbmd0aDtcblx0fTtcblx0Ly8gbmF2bGlua1N0cmluZzogKiBiZWNvbWVzIHRoZSBzZXBhcmF0b3Jcblx0Ly9cdFx0XHRcdDw8Zm9vfGJhcj1iYXp8ZnViYXI+PiBiZWNvbWVzIGEgZm9vLWxpbmsgd2l0aCBhdHRyaWJ1dGUgYmFyPSdiYXonXG5cdC8vXHRcdFx0XHRcdFx0XHRcdFx0ICBhbmQgdmlzaWJsZSB0ZXh0ICdmdWJhcidcblx0Ly9cdFx0XHRcdGlmKHRlc3Qpey4uLn0gYW5kIGlmKHRlc3Qpey4uLn1lbHNley4uLn0gd29yayB0b28gKG5lc3RlZCBvaylcblx0Y29uc3QgbmF2bGlua1N0cmluZ1RvSFRNTCA9IChzLCBhcnRpY2xlLCBwYXJhbXMpID0+IHtcblx0XHQvLyBsaW1pdEFsZXJ0KG5hdmxpbmtTdHJpbmdUb0hUTUwsIDUsICduYXZsaW5rU3RyaW5nVG9IVE1MXFxuJyArIGFydGljbGUgKyAnXFxuJyArICh0eXBlb2YgYXJ0aWNsZSkpO1xuXHRcdGNvbnN0IHAgPSBuYXZsaW5rU3RyaW5nVG9BcnJheShzLCBhcnRpY2xlLCBwYXJhbXMpO1xuXHRcdGxldCBodG1sID0gJyc7XG5cdFx0bGV0IG1lbnVkZXB0aCA9IDA7IC8vIG5lc3RlZCBtZW51cyBub3QgY3VycmVudGx5IGFsbG93ZWQsIGJ1dCBkb2Vzbid0IGRvIGFueSBoYXJtIHRvIGNvZGUgZm9yIGl0XG5cdFx0bGV0IG1lbnVyb3dkZXB0aCA9IDA7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHApIHtcblx0XHRcdGlmICh0eXBlb2YgZWxlbWVudCA9PT0gdHlwZW9mICcnKSB7XG5cdFx0XHRcdGh0bWwgKz0gbmF2bGlua1N1YnN0aXR1dGVIVE1MKGVsZW1lbnQpO1xuXHRcdFx0XHRtZW51ZGVwdGggKz0gbmF2bGlua0RlcHRoKCdtZW51JywgZWxlbWVudCk7XG5cdFx0XHRcdG1lbnVyb3dkZXB0aCArPSBuYXZsaW5rRGVwdGgoJ21lbnVyb3cnLCBlbGVtZW50KTtcblx0XHRcdFx0Ly9cdFx0XHRpZiAobWVudWRlcHRoID09PSAwKSB7XG5cdFx0XHRcdC8vXHRcdFx0XHR0YWdUeXBlPSdzcGFuJztcblx0XHRcdFx0Ly9cdFx0XHR9IGVsc2UgaWYgKG1lbnVyb3dkZXB0aCA9PT0gMCkge1xuXHRcdFx0XHQvL1x0XHRcdFx0dGFnVHlwZT0nbGknO1xuXHRcdFx0XHQvL1x0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vXHRcdFx0XHR0YWdUeXBlID0gbnVsbDtcblx0XHRcdFx0Ly9cdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQudHlwZSAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnQudHlwZSA9PT0gJ25hdmxpbmtUYWcnKSB7XG5cdFx0XHRcdGh0bWwgKz1cblx0XHRcdFx0XHRtZW51ZGVwdGggPiAwICYmIG1lbnVyb3dkZXB0aCA9PT0gMFxuXHRcdFx0XHRcdFx0PyBgPGxpIGNsYXNzPVwicG9wdXBfbWVudV9pdGVtXCI+JHtlbGVtZW50Lmh0bWwoKX08L2xpPmBcblx0XHRcdFx0XHRcdDogZWxlbWVudC5odG1sKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBodG1sO1xuXHR9O1xuXHRjbGFzcyBuYXZsaW5rVGFnIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHRoaXMudHlwZSA9ICduYXZsaW5rVGFnJztcblx0XHR9XG5cdFx0aHRtbCgpIHtcblx0XHRcdHRoaXMuZ2V0TmV3V2luKCk7XG5cdFx0XHR0aGlzLmdldFByaW50RnVuY3Rpb24oKTtcblx0XHRcdGxldCBodG1sID0gJyc7XG5cdFx0XHRsZXQgb3BlbmluZztcblx0XHRcdGxldCBjbG9zaW5nO1xuXHRcdFx0Y29uc3QgdGFnVHlwZSA9ICdzcGFuJztcblx0XHRcdGlmICh0YWdUeXBlKSB7XG5cdFx0XHRcdG9wZW5pbmcgPSBgPCR7dGFnVHlwZX0gY2xhc3M9XCJwb3B1cF8ke3RoaXMuaWR9XCI+YDtcblx0XHRcdFx0Y2xvc2luZyA9IGA8LyR7dGFnVHlwZX0+YDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wZW5pbmcgPSAnJztcblx0XHRcdFx0Y2xvc2luZyA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByaW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGh0bWwgPSB0aGlzLnByaW50KHRoaXMpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGh0bWwgIT09IHR5cGVvZiAnJykge1xuXHRcdFx0XHRcdGh0bWwgPSAnJztcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnNob3J0Y3V0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRodG1sID0gYWRkUG9wdXBTaG9ydGN1dChodG1sLCB0aGlzLnNob3J0Y3V0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZXJybG9nKGBPaCBkZWFyIC0gaW52YWxpZCBwcmludCBmdW5jdGlvbiBmb3IgYSBuYXZsaW5rVGFnLCBpZD0ke3RoaXMuaWR9YCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb3BlbmluZyArIGh0bWwgKyBjbG9zaW5nO1xuXHRcdH1cblx0XHRnZXROZXdXaW4oKSB7XG5cdFx0XHRnZXRWYWx1ZU9mKCdwb3B1cExpbmtzTmV3V2luZG93Jyk7XG5cdFx0XHRpZiAocGcub3B0aW9uLnBvcHVwTGlua3NOZXdXaW5kb3dbdGhpcy5pZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLm5ld1dpbiA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5ld1dpbiA9IHBnLm9wdGlvbi5wb3B1cExpbmtzTmV3V2luZG93W3RoaXMuaWRdO1xuXHRcdH1cblx0XHRnZXRQcmludEZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gdGhpbmsgYWJvdXQgdGhpcyBzb21lIG1vcmVcblx0XHRcdC8vIHRoaXMuaWQgYW5kIHRoaXMuYXJ0aWNsZSBzaG91bGQgYWxyZWFkeSBiZSBkZWZpbmVkXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuaWQgIT09IHR5cGVvZiAnJyB8fCB0eXBlb2YgdGhpcy5hcnRpY2xlICE9PSB0eXBlb2Yge30pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ub1BvcHVwID0gMTtcblx0XHRcdHN3aXRjaCAodGhpcy5pZCkge1xuXHRcdFx0XHRjYXNlICdjb250cmlicyc6XG5cdFx0XHRcdGNhc2UgJ2hpc3RvcnknOlxuXHRcdFx0XHRjYXNlICd3aGF0TGlua3NIZXJlJzpcblx0XHRcdFx0Y2FzZSAndXNlclBhZ2UnOlxuXHRcdFx0XHRjYXNlICd1c2VyVGFsayc6XG5cdFx0XHRcdGNhc2UgJ3RhbGsnOlxuXHRcdFx0XHRjYXNlICdhcnRpY2xlJzpcblx0XHRcdFx0Y2FzZSAnbGFzdEVkaXQnOlxuXHRcdFx0XHRcdHRoaXMubm9Qb3B1cCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHRoaXMuaWQpIHtcblx0XHRcdFx0Y2FzZSAnZW1haWwnOlxuXHRcdFx0XHRjYXNlICdjb250cmlicyc6XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrJzpcblx0XHRcdFx0Y2FzZSAndW5ibG9jayc6XG5cdFx0XHRcdGNhc2UgJ3VzZXJsb2cnOlxuXHRcdFx0XHRjYXNlICd1c2VyU3BhY2UnOlxuXHRcdFx0XHRjYXNlICdkZWxldGVkQ29udHJpYnMnOlxuXHRcdFx0XHRcdHRoaXMuYXJ0aWNsZSA9IHRoaXMuYXJ0aWNsZS51c2VyTmFtZSgpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoICh0aGlzLmlkKSB7XG5cdFx0XHRcdGNhc2UgJ3VzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAnbmV3VXNlclRhbGsnOlxuXHRcdFx0XHRjYXNlICdlZGl0VXNlclRhbGsnOlxuXHRcdFx0XHRjYXNlICd1c2VyUGFnZSc6XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrbG9nJzpcblx0XHRcdFx0XHR0aGlzLmFydGljbGUgPSB0aGlzLmFydGljbGUudXNlck5hbWUodHJ1ZSk7XG5cdFx0XHRcdC8qIGZhbGxzIHRocm91Z2ggKi9cblx0XHRcdFx0Y2FzZSAncGFnZWxvZyc6XG5cdFx0XHRcdGNhc2UgJ2RlbGV0ZWxvZyc6XG5cdFx0XHRcdGNhc2UgJ3Byb3RlY3Rsb2cnOlxuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLm9sZGlkO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuaWQgIT09ICdtYWlubGluaycpIHtcblx0XHRcdFx0Ly8gRklYTUUgYW5jaG9yIGhhbmRsaW5nIHNob3VsZCBiZSBkb25lIGRpZmZlcmVudGx5IHdpdGggVGl0bGUgb2JqZWN0XG5cdFx0XHRcdHRoaXMuYXJ0aWNsZSA9IHRoaXMuYXJ0aWNsZS5yZW1vdmVBbmNob3IoKTtcblx0XHRcdFx0Ly8gaWYgKHR5cGVvZiB0aGlzLnRleHQ9PSd1bmRlZmluZWQnKSB7IHRoaXMudGV4dD1wb3B1cFN0cmluZyh0aGlzLmlkKTsgfVxuXHRcdFx0fVxuXHRcdFx0c3dpdGNoICh0aGlzLmlkKSB7XG5cdFx0XHRcdGNhc2UgJ3VuZGVsZXRlJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdVbmRlbGV0ZSc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnLyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3doYXRMaW5rc0hlcmUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1doYXRsaW5rc2hlcmUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZWxhdGVkQ2hhbmdlcyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnUmVjZW50Y2hhbmdlc2xpbmtlZCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21vdmUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ01vdmVwYWdlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY29udHJpYnMnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0NvbnRyaWJ1dGlvbnMnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkZWxldGVkQ29udHJpYnMnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0RlbGV0ZWRjb250cmlidXRpb25zJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZW1haWwnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0VtYWlsVXNlcic7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnLyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdCbG9ja2lwJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcmaXA9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndW5ibG9jayc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnSXBibG9ja2xpc3QnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZhY3Rpb249dW5ibG9jayZpcD0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1c2VybG9nJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdMb2cnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZ1c2VyPSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrbG9nJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdMb2cnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZ0eXBlPWJsb2NrJnBhZ2U9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncGFnZWxvZyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnTG9nJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcmcGFnZT0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdwcm90ZWN0bG9nJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdMb2cnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZ0eXBlPXByb3RlY3QmcGFnZT0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkZWxldGVsb2cnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0xvZyc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJnR5cGU9ZGVsZXRlJnBhZ2U9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndXNlclNwYWNlJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdQcmVmaXhJbmRleCc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJm5hbWVzcGFjZT0yJnByZWZpeD0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzZWFyY2gnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1NlYXJjaCc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJmZ1bGx0ZXh0PVNlYXJjaCZzZWFyY2g9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndGhhbmsnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1RoYW5rcyc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnLyc7XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlLnZhbHVlID0gdGhpcy5kaWZmID09PSAncHJldicgPyB0aGlzLm9sZGlkIDogdGhpcy5kaWZmO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bndhdGNoJzpcblx0XHRcdFx0Y2FzZSAnd2F0Y2gnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBtYWdpY1dhdGNoTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9IGAke3RoaXMuaWR9JmF1dG93YXRjaGxpc3Q9MSZhdXRvaW1wbD0ke3BvcHVwU3RyaW5nKFxuXHRcdFx0XHRcdFx0J2F1dG9lZGl0X3ZlcnNpb24nXG5cdFx0XHRcdFx0KX0mYWN0b2tlbj0ke2F1dG9DbGlja1Rva2VuKCl9YDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaGlzdG9yeSc6XG5cdFx0XHRcdGNhc2UgJ2hpc3RvcnlmZWVkJzpcblx0XHRcdFx0Y2FzZSAndW5wcm90ZWN0Jzpcblx0XHRcdFx0Y2FzZSAncHJvdGVjdCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gdGhpcy5pZDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZGVsZXRlJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnZGVsZXRlJztcblx0XHRcdFx0XHRpZiAodGhpcy5hcnRpY2xlLm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zSW1hZ2VJZCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgaW1nID0gdGhpcy5hcnRpY2xlLnN0cmlwTmFtZXNwYWNlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmFjdGlvbiArPSBgJmltYWdlPSR7aW1nfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtYXJrcGF0cm9sbGVkJzpcblx0XHRcdFx0Y2FzZSAnZWRpdCc6XG5cdFx0XHRcdFx0Ly8gZWRpdE9sZCBzaG91bGQga2VlcCB0aGUgb2xkaWQsIGJ1dCBlZGl0IHNob3VsZCBub3QuXG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMub2xkaWQ7XG5cdFx0XHRcdC8qIGZhbGxzIHRocm91Z2ggKi9cblx0XHRcdFx0Y2FzZSAndmlldyc6XG5cdFx0XHRcdGNhc2UgJ3B1cmdlJzpcblx0XHRcdFx0Y2FzZSAncmVuZGVyJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSB0aGlzLmlkO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyYXcnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdyYXcnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICduZXcnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdlZGl0JnNlY3Rpb249bmV3Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbWFpbmxpbmsnOlxuXHRcdFx0XHRcdGlmICh0aGlzLnRleHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy5hcnRpY2xlLnRvU3RyaW5nKCkuZW50aWZ5KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFNpbXBsaWZ5TWFpbkxpbmsnKSAmJiBpc0luU3RyaXBwYWJsZU5hbWVzcGFjZSh0aGlzLmFydGljbGUpKSB7XG5cdFx0XHRcdFx0XHQvLyBvbmx5IHNob3cgdGhlIC9zdWJwYWdlIHBhcnQgb2YgdGhlIHRpdGxlIHRleHRcblx0XHRcdFx0XHRcdGNvbnN0IHMgPSB0aGlzLnRleHQuc3BsaXQoJy8nKTtcblx0XHRcdFx0XHRcdHRoaXMudGV4dCA9IHMuYXQoLTEpO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMudGV4dCA9PT0gJycgJiYgcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGV4dCA9IHMuYXQoLTIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkV2lraUxpbms7XG5cdFx0XHRcdFx0aWYgKHRoaXMudGl0bGUgPT09IHVuZGVmaW5lZCAmJiBwZy5jdXJyZW50LmxpbmsgJiYgcGcuY3VycmVudC5saW5rLmhyZWYgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy50aXRsZSA9IHNhZmVEZWNvZGVVUkkocGcuY3VycmVudC5saW5rLm9yaWdpbmFsVGl0bGUgPz8gdGhpcy5hcnRpY2xlKTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLm9sZGlkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vbGRpZCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRpdGxlID0gdHByaW50ZignUmV2aXNpb24gJXMgb2YgJXMnLCBbdGhpcy5vbGRpZCwgdGhpcy50aXRsZV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICd2aWV3Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndXNlclBhZ2UnOlxuXHRcdFx0XHRjYXNlICdhcnRpY2xlJzpcblx0XHRcdFx0Y2FzZSAnZWRpdEFydGljbGUnOlxuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLm9sZGlkO1xuXHRcdFx0XHRcdC8vIG13Lm5vdGlmeShgJHt0aGlzLmlkfVxcbiR7dGhpcy5hcnRpY2xlfVxcbiR7dHlwZW9mIHRoaXMuYXJ0aWNsZX1gLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLmFydGljbGVGcm9tVGFsa09yQXJ0aWNsZSgpO1xuXHRcdFx0XHRcdC8vIG13Lm5vdGlmeShgJHt0aGlzLmlkfVxcbiR7dGhpcy5hcnRpY2xlfVxcbiR7dHlwZW9mIHRoaXMuYXJ0aWNsZX1gLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gdGhpcy5pZC5pbmRleE9mKCdlZGl0JykgPT09IDAgPyAnZWRpdCcgOiAndmlldyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3VzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAndGFsayc6XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLnRhbGtQYWdlKCk7XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMub2xkaWQ7XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ3ZpZXcnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdhcmluJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gYXJpbkxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NvdW50Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gZWRpdENvdW50ZXJMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdlZGl0b3JzJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gZWRpdG9yTGlzdExpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2xhc3RFZGl0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkRGlmZkxpbms7XG5cdFx0XHRcdFx0dGhpcy50aXRsZSA9IHBvcHVwU3RyaW5nKCdTaG93IHRoZSBsYXN0IGVkaXQnKTtcblx0XHRcdFx0XHR0aGlzLmZyb20gPSAncHJldic7XG5cdFx0XHRcdFx0dGhpcy50byA9ICdjdXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdvbGRFZGl0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkRGlmZkxpbms7XG5cdFx0XHRcdFx0dGhpcy50aXRsZSA9IGAke3BvcHVwU3RyaW5nKCdTaG93IHRoZSBlZGl0IG1hZGUgdG8gZ2V0IHJldmlzaW9uJyl9ICR7dGhpcy5vbGRpZH1gO1xuXHRcdFx0XHRcdHRoaXMuZnJvbSA9ICdwcmV2Jztcblx0XHRcdFx0XHR0aGlzLnRvID0gdGhpcy5vbGRpZDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZWRpdE9sZCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ2VkaXQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bmRvJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnZWRpdCZ1bmRvPSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JldmVydCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ3JldmVydCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ251bGxFZGl0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnbnVsbEVkaXQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkaWZmQ3VyJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkRGlmZkxpbms7XG5cdFx0XHRcdFx0dGhpcy50aXRsZSA9IHRwcmludGYoJ1Nob3cgY2hhbmdlcyBzaW5jZSByZXZpc2lvbiAlcycsIFt0aGlzLm9sZGlkXSk7XG5cdFx0XHRcdFx0dGhpcy5mcm9tID0gdGhpcy5vbGRpZDtcblx0XHRcdFx0XHR0aGlzLnRvID0gJ2N1cic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2VkaXRVc2VyVGFsayc6XG5cdFx0XHRcdGNhc2UgJ2VkaXRUYWxrJzpcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5vbGRpZDtcblx0XHRcdFx0XHR0aGlzLmFydGljbGUgPSB0aGlzLmFydGljbGUudGFsa1BhZ2UoKTtcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdlZGl0Jztcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ25ld1VzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAnbmV3VGFsayc6XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLnRhbGtQYWdlKCk7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnZWRpdCZzZWN0aW9uPW5ldyc7XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdsYXN0Q29udHJpYic6XG5cdFx0XHRcdGNhc2UgJ3NpbmNlTWUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBtYWdpY0hpc3RvcnlMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd0b2dnbGVQcmV2aWV3cyc6XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gcG9wdXBTdHJpbmcocGcub3B0aW9uLnNpbXBsZVBvcHVwcyA/ICdlbmFibGUgcHJldmlld3MnIDogJ2Rpc2FibGUgcHJldmlld3MnKTtcblx0XHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdFx0XHRjYXNlICdkaXNhYmxlUG9wdXBzJzpcblx0XHRcdFx0Y2FzZSAncHVyZ2VQb3B1cHMnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBwb3B1cE1lbnVMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYFVua25vd24gbmF2bGluayB0eXBlOiAke3RoaXMuaWR9YDtcblx0XHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvL1xuXHQvLyAgZW5kIG5hdmxpbmtzXG5cdC8vIEVOREZJTEU6IG5hdmxpbmtzLmpzXG5cdC8vIFNUQVJURklMRTogc2hvcnRjdXRrZXlzLmpzXG5cdGNvbnN0IHBvcHVwSGFuZGxlS2V5cHJlc3MgPSBmdW5jdGlvbiBwb3B1cEhhbmRsZUtleXByZXNzKGV2dCkge1xuXHRcdGNvbnN0IGtleUNvZGUgPSB3aW5kb3cuZXZlbnQgPyB3aW5kb3cuZXZlbnQua2V5Q29kZSA6IChldnQua2V5Q29kZSA/PyBldnQud2hpY2gpO1xuXHRcdGlmICgha2V5Q29kZSB8fCAhcGcuY3VycmVudC5saW5rIHx8ICFwZy5jdXJyZW50LmxpbmsubmF2cG9wdXApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGtleUNvZGUgPT09IDI3KSB7XG5cdFx0XHQvLyBlc2NhcGVcblx0XHRcdGtpbGxQb3B1cCgpO1xuXHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBzd2FsbG93IGtleXByZXNzXG5cdFx0fVxuXHRcdGNvbnN0IGxldHRlciA9IFN0cmluZy5mcm9tQ29kZVBvaW50KGtleUNvZGUpO1xuXHRcdGNvbnN0IGxpbmtzID0gcGcuY3VycmVudC5saW5rLm5hdnBvcHVwLm1haW5EaXYucXVlcnlTZWxlY3RvckFsbCgnQScpO1xuXHRcdGxldCBzdGFydExpbmsgPSAwO1xuXHRcdGxldCBpO1xuXHRcdGxldCBqO1xuXHRcdGlmIChwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCkge1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChsaW5rc1tpXSA9PT0gcG9wdXBIYW5kbGVLZXlwcmVzcy5sYXN0UG9wdXBMaW5rU2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRzdGFydExpbmsgPSBpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaiA9IDA7IGogPCBsaW5rcy5sZW5ndGg7ICsraikge1xuXHRcdFx0aSA9IChzdGFydExpbmsgKyBqICsgMSkgJSBsaW5rcy5sZW5ndGg7XG5cdFx0XHRpZiAobGlua3NbaV0uZ2V0QXR0cmlidXRlKCdwb3B1cGtleScpID09PSBsZXR0ZXIpIHtcblx0XHRcdFx0aWYgKGV2dCAmJiBldnQucHJldmVudERlZmF1bHQpIHtcblx0XHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaW5rc1tpXS5mb2N1cygpO1xuXHRcdFx0XHRwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCA9IGxpbmtzW2ldO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIHN3YWxsb3cga2V5cHJlc3Ncblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGFzcyBrZXlwcmVzcyBvblxuXHRcdGlmIChkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MoZXZ0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cdGNvbnN0IGFkZFBvcHVwU2hvcnRjdXRzID0gKCkgPT4ge1xuXHRcdGlmIChkb2N1bWVudC5vbmtleXByZXNzICE9PSBwb3B1cEhhbmRsZUtleXByZXNzKSB7XG5cdFx0XHRkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MgPSBkb2N1bWVudC5vbmtleXByZXNzO1xuXHRcdH1cblx0XHRkb2N1bWVudC5vbmtleXByZXNzID0gcG9wdXBIYW5kbGVLZXlwcmVzcztcblx0fTtcblx0Y29uc3Qgcm1Qb3B1cFNob3J0Y3V0cyA9ICgpID0+IHtcblx0XHRwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCA9IG51bGw7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MgJiYgZG9jdW1lbnQub2xkUG9wdXBPbmtleXByZXNzID09PSBwb3B1cEhhbmRsZUtleXByZXNzKSB7XG5cdFx0XHRcdC8vIHBhbmljXG5cdFx0XHRcdGRvY3VtZW50Lm9ua2V5cHJlc3MgPSBudWxsOyAvLyAoKSA9PiB7fTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0ZG9jdW1lbnQub25rZXlwcmVzcyA9IGRvY3VtZW50Lm9sZFBvcHVwT25rZXlwcmVzcztcblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIElFIGdvZXMgaGVyZSAqL1xuXHRcdH1cblx0fTtcblx0Y29uc3QgYWRkTGlua1Byb3BlcnR5ID0gKGh0bWwsIHByb3BlcnR5KSA9PiB7XG5cdFx0Ly8gdGFrZSBcIjxhIGhyZWY9Li4uPi4uLjwvYT4gYW5kIGFkZCBhIHByb3BlcnR5XG5cdFx0Ly8gbm90IHNvcGhpc3RpY2F0ZWQgYXQgYWxsLCBlYXNpbHkgYnJva2VuXG5cdFx0Y29uc3QgaSA9IGh0bWwuaW5kZXhPZignPicpO1xuXHRcdGlmIChpIDwgMCkge1xuXHRcdFx0cmV0dXJuIGh0bWw7XG5cdFx0fVxuXHRcdHJldHVybiBgJHtodG1sLnNsaWNlKDAsIE1hdGgubWF4KDAsIGkpKX0gJHtwcm9wZXJ0eX0ke2h0bWwuc2xpY2UoTWF0aC5tYXgoMCwgaSkpfWA7XG5cdH07XG5cdGNvbnN0IGFkZFBvcHVwU2hvcnRjdXQgPSAoaHRtbCwga2V5KSA9PiB7XG5cdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cFNob3J0Y3V0S2V5cycpKSB7XG5cdFx0XHRyZXR1cm4gaHRtbDtcblx0XHR9XG5cdFx0Y29uc3QgcmV0ID0gYWRkTGlua1Byb3BlcnR5KGh0bWwsIGBwb3B1cGtleT1cIiR7a2V5fVwiYCk7XG5cdFx0aWYgKGtleSA9PT0gJyAnKSB7XG5cdFx0XHRrZXkgPSBwb3B1cFN0cmluZygnc3BhY2ViYXInKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldC5yZXBsYWNlKC9eKC4qPykodGl0bGU9XCIpKC4qPykoXCIuKikkL2ksIGAkMSQyJDMgWyR7a2V5fV0kNGApO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBzaG9ydGN1dGtleXMuanNcblx0Ly8gU1RBUlRGSUxFOiBkaWZmcHJldmlldy5qc1xuXHQvLyBsZXRzIGp1bXAgdGhyb3VnaCBob29wcyB0byBmaW5kIHRoZSByZXYgaWRzIHdlIG5lZWQgdG8gcmV0cmlldmVcblx0Y29uc3QgbG9hZERpZmYgPSAoYXJ0aWNsZSwgb2xkaWQsIGRpZmYsIG5hdnBvcCkgPT4ge1xuXHRcdG5hdnBvcC5kaWZmRGF0YSA9IHtcblx0XHRcdG9sZFJldjoge30sXG5cdFx0XHRuZXdSZXY6IHt9LFxuXHRcdH07XG5cdFx0Y29uc3QgYXBpID0gZ2V0TXdBcGkoKTtcblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdjb21wYXJlJyxcblx0XHRcdHByb3A6IFsnaWRzJywgJ3RpdGxlJ10sXG5cdFx0fTtcblx0XHRpZiAoYXJ0aWNsZS50aXRsZSkge1xuXHRcdFx0cGFyYW1zLmZyb210aXRsZSA9IGFydGljbGUudGl0bGU7XG5cdFx0fVxuXHRcdHN3aXRjaCAoZGlmZikge1xuXHRcdFx0Y2FzZSAnY3VyJzpcblx0XHRcdFx0c3dpdGNoIChvbGRpZCkge1xuXHRcdFx0XHRcdGNhc2UgbnVsbDpcblx0XHRcdFx0XHRjYXNlICcnOlxuXHRcdFx0XHRcdGNhc2UgJ3ByZXYnOlxuXHRcdFx0XHRcdFx0Ly8gdGhpcyBjYW4gb25seSB3b3JrIGlmIHdlIGhhdmUgdGhlIHRpdGxlXG5cdFx0XHRcdFx0XHQvLyBjdXIgLT4gcHJldlxuXHRcdFx0XHRcdFx0cGFyYW1zLnRvcmVsYXRpdmUgPSAncHJldic7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cGFyYW1zLmZyb21yZXYgPSBvbGRpZDtcblx0XHRcdFx0XHRcdHBhcmFtcy50b3JlbGF0aXZlID0gJ2N1cic7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3ByZXYnOlxuXHRcdFx0XHRpZiAob2xkaWQpIHtcblx0XHRcdFx0XHRwYXJhbXMuZnJvbXJldiA9IG9sZGlkO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBhcmFtcy5mcm9tdGl0bGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFyYW1zLnRvcmVsYXRpdmUgPSAncHJldic7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbmV4dCc6XG5cdFx0XHRcdHBhcmFtcy5mcm9tcmV2ID0gb2xkaWQgfHwgMDtcblx0XHRcdFx0cGFyYW1zLnRvcmVsYXRpdmUgPSAnbmV4dCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cGFyYW1zLmZyb21yZXYgPSBvbGRpZCB8fCAwO1xuXHRcdFx0XHRwYXJhbXMudG9yZXYgPSBkaWZmIHx8IDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRhcGkuZ2V0KHBhcmFtcykudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0bmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCA9IGRhdGEuY29tcGFyZS5mcm9tcmV2aWQ7XG5cdFx0XHRuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlkID0gZGF0YS5jb21wYXJlLnRvcmV2aWQ7XG5cdFx0XHRhZGRSZXZpZXdMaW5rKG5hdnBvcCwgJ3BvcHVwTWlzY1Rvb2xzJyk7XG5cdFx0XHRjb25zdCBnbyA9ICgpID0+IHtcblx0XHRcdFx0cGVuZGluZ05hdnBvcFRhc2sobmF2cG9wKTtcblx0XHRcdFx0bGV0IHVybCA9IGAke3BnLndpa2kuYXBpd2lraWJhc2V9P2Zvcm1hdD1qc29uJmZvcm1hdHZlcnNpb249MiZhY3Rpb249cXVlcnkmYDtcblx0XHRcdFx0dXJsICs9IGByZXZpZHM9JHtuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkfXwke25hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWR9YDtcblx0XHRcdFx0dXJsICs9ICcmcHJvcD1yZXZpc2lvbnMmcnZwcm9wPWlkc3x0aW1lc3RhbXB8Y29udGVudCc7XG5cdFx0XHRcdGdldFBhZ2VXaXRoQ2FjaGluZyh1cmwsIGRvbmVEaWZmLCBuYXZwb3ApO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gcmVtb3ZlIGhvb2sgb25jZSBydW5cblx0XHRcdH07XG5cdFx0XHRpZiAobmF2cG9wLnZpc2libGUgfHwgIWdldFZhbHVlT2YoJ3BvcHVwTGF6eURvd25sb2FkcycpKSB7XG5cdFx0XHRcdGdvKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuYXZwb3AuYWRkSG9vayhnbywgJ3VuaGlkZScsICdiZWZvcmUnLCAnRE9XTkxPQURfRElGRlMnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblx0Ly8gUHV0IGEgXCJtYXJrIHBhdHJvbGxlZFwiIGxpbmsgdG8gYW4gZWxlbWVudCB0YXJnZXRcblx0Ly8gVE9ETzogQWxsb3cgcGF0cm9sIGEgcmV2aXNpb24sIGFzIHdlbGwgYXMgYSBkaWZmXG5cdGNvbnN0IGFkZFJldmlld0xpbmsgPSAobmF2cG9wLCB0YXJnZXQpID0+IHtcblx0XHRpZiAoIXBnLnVzZXIuY2FuUmV2aWV3KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIElmICduZXdSZXYnIGlzIG9sZGVyIHRoYW4gJ29sZFJldicgdGhhbiBpdCBjb3VsZCBiZSBjb25mdXNpbmcsIHNvIHdlIGRvIG5vdCBzaG93IHRoZSByZXZpZXcgbGluay5cblx0XHRpZiAobmF2cG9wLmRpZmZEYXRhLm5ld1Jldi5yZXZpZCA8PSBuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cHJvcDogWydpbmZvJywgJ2ZsYWdnZWQnXSxcblx0XHRcdHJldmlkczogbmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCxcblx0XHR9O1xuXHRcdGdldE13QXBpKClcblx0XHRcdC5nZXQocGFyYW1zKVxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgc3RhYmxlX3JldmlkID0gKGRhdGEucXVlcnkucGFnZXNbMF0uZmxhZ2dlZCAmJiBkYXRhLnF1ZXJ5LnBhZ2VzWzBdLmZsYWdnZWQuc3RhYmxlX3JldmlkKSB8fCAwO1xuXHRcdFx0XHQvLyBUaGUgZGlmZiBjYW4gYmUgcmV2aWV3ZWQgaWYgdGhlIG9sZCB2ZXJzaW9uIGlzIHRoZSBsYXN0IHJldmlld2VkIHZlcnNpb25cblx0XHRcdFx0Ly8gVE9ETzogT3RoZXIgcG9zc2libGUgY29uZGl0aW9ucyB0aGF0IHdlIG1heSB3YW50IHRvIGltcGxlbWVudCBpbnN0ZWFkIG9mIHRoaXMgb25lOlxuXHRcdFx0XHQvLyAtIG9sZCB2ZXJzaW9uIGlzIHBhdHJvbGxlZCBhbmQgdGhlIG5ldyB2ZXJzaW9uIGlzIG5vdCBwYXRyb2xsZWRcblx0XHRcdFx0Ly8gLSBvbGQgdmVyc2lvbiBpcyBwYXRyb2xsZWQgYW5kIHRoZSBuZXcgdmVyc2lvbiBpcyBtb3JlIHJlY2VudCB0aGFuIHRoZSBsYXN0IHJldmlld2VkIHZlcnNpb25cblx0XHRcdFx0aWYgKHN0YWJsZV9yZXZpZCA9PT0gbmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCkge1xuXHRcdFx0XHRcdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRcdFx0YS5pbm5lckhUTUwgPSBwb3B1cFN0cmluZygnbWFyayBwYXRyb2xsZWQnKTtcblx0XHRcdFx0XHRhLnRpdGxlID0gcG9wdXBTdHJpbmcoJ21hcmtwYXRyb2xsZWRIaW50Jyk7XG5cdFx0XHRcdFx0YS5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRcdFx0XHRhY3Rpb246ICdyZXZpZXcnLFxuXHRcdFx0XHRcdFx0XHRjb21tZW50OiB0cHJpbnRmKCdkZWZhdWx0cG9wdXBSZXZpZXdlZFN1bW1hcnknLCBbXG5cdFx0XHRcdFx0XHRcdFx0bmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCxcblx0XHRcdFx0XHRcdFx0XHRuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlkLFxuXHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0cmV2aWQ6IG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWQsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0Z2V0TXdBcGkoKVxuXHRcdFx0XHRcdFx0XHQucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtcylcblx0XHRcdFx0XHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBVcGRhdGUgY3VycmVudCBwYWdlIGFuZCBvdGhlciBhbHJlYWR5IGNvbnN0cnVjdGVkIHBvcHVwc1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuZmFpbCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkocG9wdXBTdHJpbmcoJ0NvdWxkIG5vdCBtYXJrZWQgdGhpcyBlZGl0IGFzIHBhdHJvbGxlZCcpLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdwb3B1cHMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRzZXRQb3B1cEhUTUwoYSwgdGFyZ2V0LCBuYXZwb3AuaWROdW1iZXIsIG51bGwsIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3QgZG9uZURpZmYgPSAoZG93bmxvYWQpID0+IHtcblx0XHRpZiAoIWRvd25sb2FkLm93bmVyIHx8ICFkb3dubG9hZC5vd25lci5kaWZmRGF0YSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBuYXZwb3AgPSBkb3dubG9hZC5vd25lcjtcblx0XHRjb21wbGV0ZWROYXZwb3BUYXNrKG5hdnBvcCk7XG5cdFx0bGV0IHBhZ2VzO1xuXHRcdGxldCByZXZpc2lvbnMgPSBbXTtcblx0XHR0cnkge1xuXHRcdFx0Ly8gUHJvY2VzcyB0aGUgZG93bmxvYWRzXG5cdFx0XHQoe3BhZ2VzfSA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpLnF1ZXJ5KTtcblx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBwYWdlcykge1xuXHRcdFx0XHRyZXZpc2lvbnMgPSBbLi4ucmV2aXNpb25zLCAuLi5wYWdlLnJldmlzaW9uc107XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IHJldmlzaW9uIG9mIHJldmlzaW9ucykge1xuXHRcdFx0XHRpZiAocmV2aXNpb24ucmV2aWQgPT09IG5hdnBvcC5kaWZmRGF0YS5vbGRSZXYucmV2aWQpIHtcblx0XHRcdFx0XHRuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlzaW9uID0gcmV2aXNpb247XG5cdFx0XHRcdH0gZWxzZSBpZiAocmV2aXNpb24ucmV2aWQgPT09IG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWQpIHtcblx0XHRcdFx0XHRuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlzaW9uID0gcmV2aXNpb247XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdGVycmxvZygnQ291bGQgbm90IGdldCBkaWZmJyk7XG5cdFx0fVxuXHRcdGluc2VydERpZmYobmF2cG9wKTtcblx0fTtcblx0Y29uc3Qgcm1Cb3JpbmdMaW5lcyA9IChhLCBiLCBjb250ZXh0KSA9PiB7XG5cdFx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29udGV4dCA9IDI7XG5cdFx0fVxuXHRcdC8vIHRoaXMgaXMgZmFpcmx5IHNsb3cuLi4gaSB0aGluayBpdCdzIHF1aWNrZXIgdGhhbiBkb2luZyBhIHdvcmQtYmFzZWQgZGlmZiBmcm9tIHRoZSBvZmYsIHRob3VnaFxuXHRcdGNvbnN0IGFhID0gW107XG5cdFx0Y29uc3QgYWFhID0gW107XG5cdFx0Y29uc3QgYmIgPSBbXTtcblx0XHRjb25zdCBiYmIgPSBbXTtcblx0XHRsZXQgaTtcblx0XHRsZXQgajtcblx0XHQvLyBmaXJzdCwgZ2F0aGVyIGFsbCBkaXNjb25uZWN0ZWQgbm9kZXMgaW4gYSBhbmQgYWxsIGNyb3NzaW5nIG5vZGVzIGluIGEgYW5kIGJcblx0XHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKCFhW2ldLnBhaXJlZCkge1xuXHRcdFx0XHRhYVtpXSA9IDE7XG5cdFx0XHR9IGVsc2UgaWYgKGNvdW50Q3Jvc3NpbmdzKGIsIGEsIGksIHRydWUpKSB7XG5cdFx0XHRcdGFhW2ldID0gMTtcblx0XHRcdFx0YmJbYVtpXS5yb3ddID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGljayB1cCByZW1haW5pbmcgZGlzY29ubmVjdGVkIG5vZGVzIGluIGJcblx0XHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGJiW2ldID09PSAxKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFiW2ldLnBhaXJlZCkge1xuXHRcdFx0XHRiYltpXSA9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGFub3RoZXIgcGFzcyB0byBnYXRoZXIgY29udGV4dDogd2Ugd2FudCB0aGUgbmVpZ2hib3VycyBvZiBpbmNsdWRlZCBub2RlcyB3aGljaCBhcmUgbm90XG5cdFx0Ly8geWV0IGluY2x1ZGVkIHdlIGhhdmUgdG8gYWRkIGluIHBhcnRuZXJzIG9mIHRoZXNlIG5vZGVzLCBidXQgd2UgZG9uJ3Qgd2FudCB0byBhZGQgY29udGV4dFxuXHRcdC8vIGZvciAqdGhvc2UqIG5vZGVzIGluIHRoZSBuZXh0IHBhc3Ncblx0XHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGJiW2ldID09PSAxKSB7XG5cdFx0XHRcdGZvciAoaiA9IE1hdGgubWF4KDAsIGkgLSBjb250ZXh0KTsgaiA8IE1hdGgubWluKGIubGVuZ3RoLCBpICsgY29udGV4dCk7ICsraikge1xuXHRcdFx0XHRcdGlmICghYmJbal0pIHtcblx0XHRcdFx0XHRcdGJiW2pdID0gMTtcblx0XHRcdFx0XHRcdGFhW2Jbal0ucm93XSA9IDAuNTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChhYVtpXSA9PT0gMSkge1xuXHRcdFx0XHRmb3IgKGogPSBNYXRoLm1heCgwLCBpIC0gY29udGV4dCk7IGogPCBNYXRoLm1pbihhLmxlbmd0aCwgaSArIGNvbnRleHQpOyArK2opIHtcblx0XHRcdFx0XHRpZiAoIWFhW2pdKSB7XG5cdFx0XHRcdFx0XHRhYVtqXSA9IDE7XG5cdFx0XHRcdFx0XHRiYlthW2pdLnJvd10gPSAwLjU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCBiYi5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGJiW2ldID4gMCkge1xuXHRcdFx0XHQvLyBpdCdzIGEgcm93IHdlIG5lZWRcblx0XHRcdFx0aWYgKGJbaV0ucGFpcmVkKSB7XG5cdFx0XHRcdFx0YmJiLnB1c2goYltpXS50ZXh0KTsgLy8gam9pbmVkOyBwYXJ0bmVyIHNob3VsZCBiZSBpbiBhYVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJiYi5wdXNoKGJbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCBhYS5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGFhW2ldID4gMCkge1xuXHRcdFx0XHQvLyBpdCdzIGEgcm93IHdlIG5lZWRcblx0XHRcdFx0aWYgKGFbaV0ucGFpcmVkKSB7XG5cdFx0XHRcdFx0YWFhLnB1c2goYVtpXS50ZXh0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBqb2luZWQ7IHBhcnRuZXIgc2hvdWxkIGJlIGluIGFhXG5cdFx0XHRcdFx0YWFhLnB1c2goYVtpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGE6IGFhYSxcblx0XHRcdGI6IGJiYixcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBzdHJpcE91dGVyQ29tbW9uTGluZXMgPSAoYSwgYiwgY29udGV4dCkgPT4ge1xuXHRcdGxldCBpID0gMDtcblx0XHR3aGlsZSAoaSA8IGEubGVuZ3RoICYmIGkgPCBiLmxlbmd0aCAmJiBhW2ldID09PSBiW2ldKSB7XG5cdFx0XHQrK2k7XG5cdFx0fVxuXHRcdGxldCBqID0gYS5sZW5ndGggLSAxO1xuXHRcdGxldCBrID0gYi5sZW5ndGggLSAxO1xuXHRcdHdoaWxlIChqID49IDAgJiYgayA+PSAwICYmIGFbal0gPT09IGJba10pIHtcblx0XHRcdC0tajtcblx0XHRcdC0taztcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGE6IGEuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIDEgLSBjb250ZXh0KSwgTWF0aC5taW4oYS5sZW5ndGggKyAxLCBqICsgY29udGV4dCArIDEpKSxcblx0XHRcdGI6IGIuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIDEgLSBjb250ZXh0KSwgTWF0aC5taW4oYi5sZW5ndGggKyAxLCBrICsgY29udGV4dCArIDEpKSxcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBpbnNlcnREaWZmID0gKG5hdnBvcCkgPT4ge1xuXHRcdC8vIGZvciBzcGVlZCByZWFzb25zLCB3ZSBmaXJzdCBkbyBhIGxpbmUtYmFzZWQgZGlmZiwgZGlzY2FyZCBzdHVmZiB0aGF0IHNlZW1zIGJvcmluZywgdGhlblxuXHRcdC8vIGRvIGEgd29yZC1iYXNlZCBkaWZmXG5cdFx0Ly8gRklYTUU6IHNvbWV0aW1lcyB0aGlzIGdpdmVzIG1pc2xlYWRpbmcgZGlmZnMgYXMgZGlzdGFudCBjaHVua3MgYXJlIHNxdWFzaGVkIHRvZ2V0aGVyXG5cdFx0bGV0IG9sZGxpbmVzID0gbmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpc2lvbi5jb250ZW50LnNwbGl0KCdcXG4nKTtcblx0XHRsZXQgbmV3bGluZXMgPSBuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlzaW9uLmNvbnRlbnQuc3BsaXQoJ1xcbicpO1xuXHRcdGxldCBpbm5lciA9IHN0cmlwT3V0ZXJDb21tb25MaW5lcyhvbGRsaW5lcywgbmV3bGluZXMsIGdldFZhbHVlT2YoJ3BvcHVwRGlmZkNvbnRleHRMaW5lcycpKTtcblx0XHRvbGRsaW5lcyA9IGlubmVyLmE7XG5cdFx0bmV3bGluZXMgPSBpbm5lci5iO1xuXHRcdGxldCB0cnVuY2F0ZWQgPSBmYWxzZTtcblx0XHRnZXRWYWx1ZU9mKCdwb3B1cERpZmZNYXhMaW5lcycpO1xuXHRcdGlmIChvbGRsaW5lcy5sZW5ndGggPiBwZy5vcHRpb24ucG9wdXBEaWZmTWF4TGluZXMgfHwgbmV3bGluZXMubGVuZ3RoID4gcGcub3B0aW9uLnBvcHVwRGlmZk1heExpbmVzKSB7XG5cdFx0XHQvLyB0cnVuY2F0ZVxuXHRcdFx0dHJ1bmNhdGVkID0gdHJ1ZTtcblx0XHRcdGlubmVyID0gc3RyaXBPdXRlckNvbW1vbkxpbmVzKFxuXHRcdFx0XHRvbGRsaW5lcy5zbGljZSgwLCBwZy5vcHRpb24ucG9wdXBEaWZmTWF4TGluZXMpLFxuXHRcdFx0XHRuZXdsaW5lcy5zbGljZSgwLCBwZy5vcHRpb24ucG9wdXBEaWZmTWF4TGluZXMpLFxuXHRcdFx0XHRwZy5vcHRpb24ucG9wdXBEaWZmQ29udGV4dExpbmVzXG5cdFx0XHQpO1xuXHRcdFx0b2xkbGluZXMgPSBpbm5lci5hO1xuXHRcdFx0bmV3bGluZXMgPSBpbm5lci5iO1xuXHRcdH1cblx0XHRjb25zdCBsaW5lRGlmZiA9IGRpZmYob2xkbGluZXMsIG5ld2xpbmVzKTtcblx0XHRjb25zdCBsaW5lczIgPSBybUJvcmluZ0xpbmVzKGxpbmVEaWZmLm8sIGxpbmVEaWZmLm4pO1xuXHRcdGNvbnN0IG9sZGxpbmVzMiA9IGxpbmVzMi5hO1xuXHRcdGNvbnN0IG5ld2xpbmVzMiA9IGxpbmVzMi5iO1xuXHRcdGxldCBodG1sID0gJzxocj4nO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cERpZmZEYXRlcycpKSB7XG5cdFx0XHRodG1sICs9IGRpZmZEYXRlc1RhYmxlKG5hdnBvcCk7XG5cdFx0XHRodG1sICs9ICc8aHI+Jztcblx0XHR9XG5cdFx0aHRtbCArPSBzaG9ydGVuRGlmZlN0cmluZyhcblx0XHRcdGRpZmZTdHJpbmcob2xkbGluZXMyLmpvaW4oJ1xcbicpLCBuZXdsaW5lczIuam9pbignXFxuJykpLFxuXHRcdFx0Z2V0VmFsdWVPZigncG9wdXBEaWZmQ29udGV4dENoYXJhY3RlcnMnKVxuXHRcdCkuam9pbignPGhyPicpO1xuXHRcdHNldFBvcHVwVGlwc0FuZEhUTUwoXG5cdFx0XHRodG1sLnNwbGl0KCdcXG4nKS5qb2luKCc8YnI+JykgK1xuXHRcdFx0XHQodHJ1bmNhdGVkID8gYDxocj48Yj4ke3BvcHVwU3RyaW5nKCdEaWZmIHRydW5jYXRlZCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucycpfTwvYj5gIDogJycpLFxuXHRcdFx0J3BvcHVwUHJldmlldycsXG5cdFx0XHRuYXZwb3AuaWROdW1iZXJcblx0XHQpO1xuXHR9O1xuXHRjb25zdCBkaWZmRGF0ZXNUYWJsZSA9IChuYXZwb3ApID0+IHtcblx0XHRsZXQgaHRtbCA9ICc8dGFibGUgY2xhc3M9XCJwb3B1cF9kaWZmX2RhdGVzXCI+Jztcblx0XHRodG1sICs9IGRpZmZEYXRlc1RhYmxlUm93KG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aXNpb24sIHRwcmludGYoJ05ldyByZXZpc2lvbicpKTtcblx0XHRodG1sICs9IGRpZmZEYXRlc1RhYmxlUm93KG5hdnBvcC5kaWZmRGF0YS5vbGRSZXYucmV2aXNpb24sIHRwcmludGYoJ09sZCByZXZpc2lvbicpKTtcblx0XHRodG1sICs9ICc8L3RhYmxlPic7XG5cdFx0cmV0dXJuIGh0bWw7XG5cdH07XG5cdGNvbnN0IGRpZmZEYXRlc1RhYmxlUm93ID0gKHJldmlzaW9uLCBsYWJlbCkgPT4ge1xuXHRcdGxldCB0eHQgPSAnJztcblx0XHRjb25zdCBsYXN0TW9kaWZpZWREYXRlID0gbmV3IERhdGUocmV2aXNpb24udGltZXN0YW1wKTtcblx0XHR0eHQgPSBmb3JtYXR0ZWREYXRlVGltZShsYXN0TW9kaWZpZWREYXRlKTtcblx0XHRjb25zdCByZXZsaW5rID0gZ2VuZXJhbExpbmsoe1xuXHRcdFx0dXJsOiBgJHttdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpfT9vbGRpZD0ke3JldmlzaW9uLnJldmlkfWAsXG5cdFx0XHR0ZXh0OiBsYWJlbCxcblx0XHRcdHRpdGxlOiBsYWJlbCxcblx0XHR9KTtcblx0XHRyZXR1cm4gc2ltcGxlUHJpbnRmKCc8dHI+PHRkPiVzPC90ZD48dGQ+JXM8L3RkPjwvdHI+JywgW3JldmxpbmssIHR4dF0pO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBkaWZmcHJldmlldy5qc1xuXHQvLyBTVEFSVEZJTEU6IGxpbmtzLmpzXG5cdC8vIExJTksgR0VORVJBVElPTiAvL1xuXHQvLyB0aXRsZWREaWZmTGluayAtLT4gdGl0bGVkV2lraUxpbmsgLS0+IGdlbmVyYWxMaW5rXG5cdC8vIHdpa2lMaW5rXHQgICAtLT4gdGl0bGVkV2lraUxpbmsgLS0+IGdlbmVyYWxMaW5rXG5cdC8vIGVkaXRDb3VudGVyTGluayAtLT4gZ2VuZXJhbExpbmtcblx0Ly8gVE9ETyBNYWtlIHRoZXNlIGZ1bmN0aW9ucyByZXR1cm4gRWxlbWVudCBvYmplY3RzLCBub3QganVzdCByYXcgSFRNTCBzdHJpbmdzLlxuXHRjb25zdCB0aXRsZWREaWZmTGluayA9IChsKSA9PiB7XG5cdFx0cmV0dXJuIHRpdGxlZFdpa2lMaW5rKHtcblx0XHRcdGFydGljbGU6IGwuYXJ0aWNsZSxcblx0XHRcdGFjdGlvbjogYCR7bC50b30mb2xkaWQ9JHtsLmZyb219YCxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHRub1BvcHVwOiBsLm5vUG9wdXAsXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHR0aXRsZTogbC50aXRsZSxcblx0XHRcdC8qIGhhY2s6IG5vIG9sZGlkIGhlcmUgKi9cblx0XHRcdGFjdGlvbk5hbWU6ICdkaWZmJyxcblx0XHR9KTtcblx0fTtcblx0Y29uc3Qgd2lraUxpbmsgPSAobCkgPT4ge1xuXHRcdC8vIHthcnRpY2xlOmFydGljbGUsIGFjdGlvbjphY3Rpb24sIHRleHQ6dGV4dCwgb2xkaWQsIG5ld2lkfSkge1xuXHRcdGlmICghKHR5cGVvZiBsLmFydGljbGUgPT09IHR5cGVvZiB7fSAmJiB0eXBlb2YgbC5hY3Rpb24gPT09IHR5cGVvZiAnJyAmJiB0eXBlb2YgbC50ZXh0ID09PSB0eXBlb2YgJycpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKGwub2xkaWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bC5vbGRpZCA9IG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHNhdmVkT2xkaWQgPSBsLm9sZGlkO1xuXHRcdGlmICghL14oZWRpdHx2aWV3fHJldmVydHxyZW5kZXIpJHxecmF3Ly50ZXN0KGwuYWN0aW9uKSkge1xuXHRcdFx0bC5vbGRpZCA9IG51bGw7XG5cdFx0fVxuXHRcdGxldCBoaW50ID0gcG9wdXBTdHJpbmcoYCR7bC5hY3Rpb259SGludGApOyAvLyByZXZlcnRIaW50IGV0YyBldGMgZXRjXG5cdFx0Y29uc3Qgb2xkaWREYXRhID0gW2wub2xkaWQsIHNhZmVEZWNvZGVVUkkobC5hcnRpY2xlKV07XG5cdFx0bGV0IHJldmlzaW9uU3RyaW5nID0gdHByaW50ZigncmV2aXNpb24gJXMgb2YgJXMnLCBvbGRpZERhdGEpO1xuXHRcdGxvZyhgcmV2aXNpb25TdHJpbmc9JHtyZXZpc2lvblN0cmluZ31gKTtcblx0XHRzd2l0Y2ggKGwuYWN0aW9uKSB7XG5cdFx0XHRjYXNlICdlZGl0JnNlY3Rpb249bmV3Jzpcblx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCduZXdTZWN0aW9uSGludCcpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2VkaXQmdW5kbz0nOlxuXHRcdFx0XHRpZiAobC5kaWZmICYmIGwuZGlmZiAhPT0gJ3ByZXYnICYmIHNhdmVkT2xkaWQpIHtcblx0XHRcdFx0XHRsLmFjdGlvbiArPSBgJHtsLmRpZmZ9JnVuZG9hZnRlcj0ke3NhdmVkT2xkaWR9YDtcblx0XHRcdFx0fSBlbHNlIGlmIChzYXZlZE9sZGlkKSB7XG5cdFx0XHRcdFx0bC5hY3Rpb24gKz0gc2F2ZWRPbGRpZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ3VuZG9IaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmF3JmN0eXBlPXRleHQvY3NzJzpcblx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCdyYXdIaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmV2ZXJ0Jzoge1xuXHRcdFx0XHRjb25zdCBwID0gcGFyc2VQYXJhbXMocGcuY3VycmVudC5saW5rLmhyZWYpO1xuXHRcdFx0XHRsLmFjdGlvbiA9IGBlZGl0JmF1dG9jbGljaz13cFNhdmUmYWN0b2tlbj0ke2F1dG9DbGlja1Rva2VuKCl9JmF1dG9pbXBsPSR7cG9wdXBTdHJpbmcoXG5cdFx0XHRcdFx0J2F1dG9lZGl0X3ZlcnNpb24nXG5cdFx0XHRcdCl9JmF1dG9zdW1tYXJ5PSR7cmV2ZXJ0U3VtbWFyeShsLm9sZGlkLCBwLmRpZmYpfWA7XG5cdFx0XHRcdGlmIChwLmRpZmYgPT09ICdwcmV2Jykge1xuXHRcdFx0XHRcdGwuYWN0aW9uICs9ICcmZGlyZWN0aW9uPXByZXYnO1xuXHRcdFx0XHRcdHJldmlzaW9uU3RyaW5nID0gdHByaW50ZigndGhlIHJldmlzaW9uIHByaW9yIHRvIHJldmlzaW9uICVzIG9mICVzJywgb2xkaWREYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBSZXZlcnRTdW1tYXJ5UHJvbXB0JykpIHtcblx0XHRcdFx0XHRsLmFjdGlvbiArPSAnJmF1dG9zdW1tYXJ5cHJvbXB0PXRydWUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cE1pbm9yUmV2ZXJ0cycpKSB7XG5cdFx0XHRcdFx0bC5hY3Rpb24gKz0gJyZhdXRvbWlub3I9dHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bG9nKGByZXZpc2lvblN0cmluZyBpcyBub3cgJHtyZXZpc2lvblN0cmluZ31gKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdudWxsRWRpdCc6XG5cdFx0XHRcdGwuYWN0aW9uID0gYGVkaXQmYXV0b2NsaWNrPXdwU2F2ZSZhY3Rva2VuPSR7YXV0b0NsaWNrVG9rZW4oKX0mYXV0b2ltcGw9JHtwb3B1cFN0cmluZyhcblx0XHRcdFx0XHQnYXV0b2VkaXRfdmVyc2lvbidcblx0XHRcdFx0KX0mYXV0b3N1bW1hcnk9bnVsbGA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaGlzdG9yeWZlZWQnOlxuXHRcdFx0XHRsLmFjdGlvbiA9ICdoaXN0b3J5JmZlZWQ9cnNzJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdtYXJrcGF0cm9sbGVkJzpcblx0XHRcdFx0bC5hY3Rpb24gPSBgbWFya3BhdHJvbGxlZCZyY2lkPSR7bC5yY2lkfWA7XG5cdFx0fVxuXHRcdGlmIChoaW50KSB7XG5cdFx0XHRoaW50ID0gbC5vbGRpZCA/IHNpbXBsZVByaW50ZihoaW50LCBbcmV2aXNpb25TdHJpbmddKSA6IHNpbXBsZVByaW50ZihoaW50LCBbc2FmZURlY29kZVVSSShsLmFydGljbGUpXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhpbnQgPSBzYWZlRGVjb2RlVVJJKGAke2wuYXJ0aWNsZX0mYWN0aW9uPSR7bC5hY3Rpb259YCkgKyBsLm9sZGlkID8gYCZvbGRpZD0ke2wub2xkaWR9YCA6ICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gdGl0bGVkV2lraUxpbmsoe1xuXHRcdFx0YXJ0aWNsZTogbC5hcnRpY2xlLFxuXHRcdFx0YWN0aW9uOiBsLmFjdGlvbixcblx0XHRcdHRleHQ6IGwudGV4dCxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHR0aXRsZTogaGludCxcblx0XHRcdG9sZGlkOiBsLm9sZGlkLFxuXHRcdFx0bm9Qb3B1cDogbC5ub1BvcHVwLFxuXHRcdFx0b25jbGljazogbC5vbmNsaWNrLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCByZXZlcnRTdW1tYXJ5ID0gKG9sZGlkLCBkaWZmKSA9PiB7XG5cdFx0bGV0IHJldCA9ICcnO1xuXHRcdHJldCA9XG5cdFx0XHRkaWZmID09PSAncHJldidcblx0XHRcdFx0PyBnZXRWYWx1ZU9mKCdwb3B1cFF1ZXJpZWRSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeScpXG5cdFx0XHRcdDogZ2V0VmFsdWVPZigncG9wdXBRdWVyaWVkUmV2ZXJ0U3VtbWFyeScpO1xuXHRcdHJldHVybiBgJHtyZXR9JmF1dG9ydj0ke29sZGlkfWA7XG5cdH07XG5cdGNvbnN0IHRpdGxlZFdpa2lMaW5rID0gKGwpID0+IHtcblx0XHQvLyBwb3NzaWJsZSBwcm9wZXJ0aWVzIG9mIGFyZ3VtZW50OlxuXHRcdC8vIGFydGljbGUsIGFjdGlvbiwgdGV4dCwgdGl0bGUsIG9sZGlkLCBhY3Rpb25OYW1lLCBjbGFzc05hbWUsIG5vUG9wdXBcblx0XHQvLyBvbGRpZCA9IG51bGwgaXMgZmluZSBoZXJlXG5cdFx0Ly8gYXJ0aWNsZSBhbmQgYWN0aW9uIGFyZSBtYW5kYXRvcnkgYXJnc1xuXHRcdGlmIChsLmFydGljbGUgPT09IHVuZGVmaW5lZCB8fCBsLmFjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRlcnJsb2coJ2dvdCB1bmRlZmluZWQgYXJ0aWNsZSBvciBhY3Rpb24gaW4gdGl0bGVkV2lraUxpbmsnKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBiYXNlID0gcGcud2lraS50aXRsZWJhc2UgKyBsLmFydGljbGUudXJsU3RyaW5nKCk7XG5cdFx0bGV0IHVybCA9IGJhc2U7XG5cdFx0aWYgKGwuYWN0aW9uTmFtZSA9PT0gdW5kZWZpbmVkIHx8ICFsLmFjdGlvbk5hbWUpIHtcblx0XHRcdGwuYWN0aW9uTmFtZSA9ICdhY3Rpb24nO1xuXHRcdH1cblx0XHQvLyBubyBuZWVkIHRvIGFkZCAmYWN0aW9uPXZpZXcsIGFuZCB0aGlzIGNvbmZ1c2VzIGFuY2hvcnNcblx0XHRpZiAobC5hY3Rpb24gIT09ICd2aWV3Jykge1xuXHRcdFx0dXJsID0gYCR7YmFzZX0mJHtsLmFjdGlvbk5hbWV9PSR7bC5hY3Rpb259YDtcblx0XHR9XG5cdFx0aWYgKGwub2xkaWQgIT09IHVuZGVmaW5lZCAmJiBsLm9sZGlkKSB7XG5cdFx0XHR1cmwgKz0gYCZvbGRpZD0ke2wub2xkaWR9YDtcblx0XHR9XG5cdFx0bGV0IGNzc0NsYXNzID0gcGcubWlzYy5kZWZhdWx0TmF2bGlua0NsYXNzbmFtZTtcblx0XHRpZiAobC5jbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBsLmNsYXNzTmFtZSkge1xuXHRcdFx0Y3NzQ2xhc3MgPSBsLmNsYXNzTmFtZTtcblx0XHR9XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybCxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHR0aXRsZTogbC50aXRsZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGwudGl0bGUsXG5cdFx0XHR0ZXh0OiBsLnRleHQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBsLnRleHQsXG5cdFx0XHRjbGFzc05hbWU6IGNzc0NsYXNzLFxuXHRcdFx0bm9Qb3B1cDogbC5ub1BvcHVwLFxuXHRcdFx0b25jbGljazogbC5vbmNsaWNrLFxuXHRcdH0pO1xuXHR9O1xuXHRwZy5mbi5nZXRMYXN0Q29udHJpYiA9ICh3aWtpcGFnZSwgbmV3V2luKSA9PiB7XG5cdFx0Z2V0SGlzdG9yeUluZm8od2lraXBhZ2UsICh4KSA9PiB7XG5cdFx0XHRwcm9jZXNzTGFzdENvbnRyaWJJbmZvKHgsIHtwYWdlOiB3aWtpcGFnZSwgbmV3V2lufSk7XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHByb2Nlc3NMYXN0Q29udHJpYkluZm8gPSAoaW5mbywgc3R1ZmYpID0+IHtcblx0XHRpZiAoIWluZm8uZWRpdHMgfHwgaW5mby5lZGl0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KCdQb3B1cHM6IGFuIG9kZCB0aGluZyBoYXBwZW5lZC4gUGxlYXNlIHJldHJ5LicsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghaW5mby5maXJzdE5ld0VkaXRvcikge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHRwcmludGYoJ09ubHkgZm91bmQgb25lIGVkaXRvcjogJXMgbWFkZSAlcyBlZGl0cycsIFtpbmZvLmVkaXRzWzBdLmVkaXRvciwgaW5mby5lZGl0cy5sZW5ndGhdKSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhZzogJ3BvcHVwcycsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbmV3VXJsID0gYCR7cGcud2lraS50aXRsZWJhc2UgKyBuZXcgVGl0bGUoc3R1ZmYucGFnZSkudXJsU3RyaW5nKCl9JmRpZmY9Y3VyJm9sZGlkPSR7XG5cdFx0XHRpbmZvLmZpcnN0TmV3RWRpdG9yLm9sZGlkXG5cdFx0fWA7XG5cdFx0ZGlzcGxheVVybChuZXdVcmwsIHN0dWZmLm5ld1dpbik7XG5cdH07XG5cdHBnLmZuLmdldERpZmZTaW5jZU15RWRpdCA9ICh3aWtpcGFnZSwgbmV3V2luKSA9PiB7XG5cdFx0Z2V0SGlzdG9yeUluZm8od2lraXBhZ2UsICh4KSA9PiB7XG5cdFx0XHRwcm9jZXNzRGlmZlNpbmNlTXlFZGl0KHgsIHtwYWdlOiB3aWtpcGFnZSwgbmV3V2lufSk7XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHByb2Nlc3NEaWZmU2luY2VNeUVkaXQgPSAoaW5mbywgc3R1ZmYpID0+IHtcblx0XHRpZiAoIWluZm8uZWRpdHMgfHwgaW5mby5lZGl0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KCdQb3B1cHM6IHNvbWV0aGluZyBmaXNoeSBoYXBwZW5lZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBmcmllbmRseU5hbWUgPSBzdHVmZi5wYWdlLnNwbGl0KCdfJykuam9pbignICcpO1xuXHRcdGlmICghaW5mby5teUxhc3RFZGl0KSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0dHByaW50ZihcIkNvdWxkbid0IGZpbmQgYW4gZWRpdCBieSAlc1xcbmluIHRoZSBsYXN0ICVzIGVkaXRzIHRvXFxuJXNcIiwgW1xuXHRcdFx0XHRcdGluZm8udXNlck5hbWUsXG5cdFx0XHRcdFx0Z2V0VmFsdWVPZigncG9wdXBIaXN0b3J5TGltaXQnKSxcblx0XHRcdFx0XHRmcmllbmRseU5hbWUsXG5cdFx0XHRcdF0pLFxuXHRcdFx0XHR7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChpbmZvLm15TGFzdEVkaXQuaW5kZXggPT09IDApIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KHRwcmludGYoJyVzIHNlZW1zIHRvIGJlIHRoZSBsYXN0IGVkaXRvciB0byB0aGUgcGFnZSAlcycsIFtpbmZvLnVzZXJOYW1lLCBmcmllbmRseU5hbWVdKSwge1xuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IG5ld1VybCA9IGAke3BnLndpa2kudGl0bGViYXNlICsgbmV3IFRpdGxlKHN0dWZmLnBhZ2UpLnVybFN0cmluZygpfSZkaWZmPWN1ciZvbGRpZD0ke1xuXHRcdFx0aW5mby5teUxhc3RFZGl0Lm9sZGlkXG5cdFx0fWA7XG5cdFx0ZGlzcGxheVVybChuZXdVcmwsIHN0dWZmLm5ld1dpbik7XG5cdH07XG5cdGNvbnN0IGRpc3BsYXlVcmwgPSAodXJsLCBuZXdXaW4pID0+IHtcblx0XHRpZiAobmV3V2luKSB7XG5cdFx0XHR3aW5kb3cub3Blbih1cmwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybDtcblx0XHR9XG5cdH07XG5cdHBnLmZuLnB1cmdlUG9wdXBzID0gKCkgPT4ge1xuXHRcdHByb2Nlc3NBbGxQb3B1cHModHJ1ZSk7XG5cdFx0c2V0dXBDYWNoZSgpOyAvLyBkZWxldGVzIGFsbCBjYWNoZWQgaXRlbXMgKG5vdCBicm93c2VyIGNhY2hlZCwgdGhvdWdoLi4uKVxuXHRcdHBnLm9wdGlvbiA9IHt9O1xuXHRcdGFib3J0QWxsRG93bmxvYWRzKCk7XG5cdH07XG5cdGNvbnN0IHByb2Nlc3NBbGxQb3B1cHMgPSAobnVsbGlmeSwgYmFuaXNoKSA9PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IHBnLmN1cnJlbnQubGlua3MgJiYgaSA8IHBnLmN1cnJlbnQubGlua3MubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmICghcGcuY3VycmVudC5saW5rc1tpXS5uYXZwb3B1cCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmIChudWxsaWZ5IHx8IGJhbmlzaCkge1xuXHRcdFx0XHRwZy5jdXJyZW50LmxpbmtzW2ldLm5hdnBvcHVwLmJhbmlzaCgpO1xuXHRcdFx0fVxuXHRcdFx0cGcuY3VycmVudC5saW5rc1tpXS5zaW1wbGVOb01vcmUgPSBmYWxzZTtcblx0XHRcdGlmIChudWxsaWZ5KSB7XG5cdFx0XHRcdHBnLmN1cnJlbnQubGlua3NbaV0ubmF2cG9wdXAgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cGcuZm4uZGlzYWJsZVBvcHVwcyA9ICgpID0+IHtcblx0XHRwcm9jZXNzQWxsUG9wdXBzKGZhbHNlLCB0cnVlKTtcblx0XHRzZXR1cFRvb2x0aXBzKG51bGwsIHRydWUpO1xuXHR9O1xuXHRwZy5mbi50b2dnbGVQcmV2aWV3cyA9ICgpID0+IHtcblx0XHRwcm9jZXNzQWxsUG9wdXBzKHRydWUsIHRydWUpO1xuXHRcdHBnLm9wdGlvbi5zaW1wbGVQb3B1cHMgPSAhcGcub3B0aW9uLnNpbXBsZVBvcHVwcztcblx0XHRhYm9ydEFsbERvd25sb2FkcygpO1xuXHR9O1xuXHRjb25zdCBtYWdpY1dhdGNoTGluayA9IGZ1bmN0aW9uIG1hZ2ljV2F0Y2hMaW5rKGwpIHtcblx0XHQvLyBZdWNrISEgV291bGQgcmVxdWlyZSBhIHRob3JvdWdoIHJlZGVzaWduIHRvIGFkZCB0aGlzIGFzIGEgY2xpY2sgZXZlbnQgdGhvdWdoIC4uLlxuXHRcdGwub25jbGljayA9IHNpbXBsZVByaW50ZihcInBnLmZuLm1vZGlmeVdhdGNobGlzdCgnJXMnLCclcycpO3JldHVybiBmYWxzZTtcIiwgW1xuXHRcdFx0bC5hcnRpY2xlXG5cdFx0XHRcdC50b1N0cmluZyh0cnVlKVxuXHRcdFx0XHQuc3BsaXQoJ1xcXFwnKVxuXHRcdFx0XHQuam9pbignXFxcXFxcXFwnKVxuXHRcdFx0XHQuc3BsaXQoXCInXCIpXG5cdFx0XHRcdC5qb2luKFN0cmluZy5yYXdgXFwnYCksXG5cdFx0XHR0aGlzLmlkLFxuXHRcdF0pO1xuXHRcdHJldHVybiB3aWtpTGluayhsKTtcblx0fTtcblx0cGcuZm4ubW9kaWZ5V2F0Y2hsaXN0ID0gYXN5bmMgKHRpdGxlLCBhY3Rpb24pID0+IHtcblx0XHRjb25zdCByZXFEYXRhID0ge1xuXHRcdFx0YWN0aW9uOiAnd2F0Y2gnLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdHVzZWxhbmc6IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyksXG5cdFx0fTtcblx0XHRpZiAoYWN0aW9uID09PSAndW53YXRjaCcpIHtcblx0XHRcdHJlcURhdGEudW53YXRjaCA9IHRydWU7XG5cdFx0fVxuXHRcdC8vIExvYWQgdGhlIEFkZGVkd2F0Y2h0ZXh0IG9yIFJlbW92ZWR3YXRjaHRleHQgbWVzc2FnZSBhbmQgc2hvdyBpdFxuXHRcdGNvbnN0IG13VGl0bGUgPSBtdy5UaXRsZS5uZXdGcm9tVGV4dCh0aXRsZSk7XG5cdFx0bGV0IG1lc3NhZ2VOYW1lO1xuXHRcdGlmIChtd1RpdGxlICYmIG13VGl0bGUuZ2V0TmFtZXNwYWNlSWQoKSA+IDAgJiYgbXdUaXRsZS5nZXROYW1lc3BhY2VJZCgpICUgMiA9PT0gMSkge1xuXHRcdFx0bWVzc2FnZU5hbWUgPSBhY3Rpb24gPT09ICd3YXRjaCcgPyAnYWRkZWR3YXRjaHRleHQtdGFsaycgOiAncmVtb3ZlZHdhdGNodGV4dC10YWxrJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWVzc2FnZU5hbWUgPSBhY3Rpb24gPT09ICd3YXRjaCcgPyAnYWRkZWR3YXRjaHRleHQnIDogJ3JlbW92ZWR3YXRjaHRleHQnO1xuXHRcdH1cblx0XHRhd2FpdCBnZXRNd0FwaSgpLnBvc3RXaXRoVG9rZW4oJ3dhdGNoJywgcmVxRGF0YSk7XG5cdFx0YXdhaXQgZ2V0TXdBcGkoKS5sb2FkTWVzc2FnZXNJZk1pc3NpbmcoW21lc3NhZ2VOYW1lXSk7XG5cdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIHN0cmluZy5qc1xuXHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHR2b2lkIG13Lm5vdGlmeShtdy5tZXNzYWdlKG1lc3NhZ2VOYW1lLCB0aXRsZSkucGFyc2VEb20oKSwge3RhZzogJ3BvcHVwcyd9KTtcblx0fTtcblx0Y29uc3QgbWFnaWNIaXN0b3J5TGluayA9IChsKSA9PiB7XG5cdFx0Ly8gRklYTUUgdXNlIG9uY2xpY2sgY2hhbmdlIGhyZWYgdHJpY2sgdG8gc29ydCB0aGlzIG91dCBpbnN0ZWFkIG9mIHdpbmRvdy5vcGVuXG5cdFx0bGV0IGpzVXJsID0gJyc7XG5cdFx0bGV0IHRpdGxlID0gJyc7XG5cdFx0bGV0IG9uQ2xpY2sgPSAnJztcblx0XHRzd2l0Y2ggKGwuaWQpIHtcblx0XHRcdGNhc2UgJ2xhc3RDb250cmliJzpcblx0XHRcdFx0b25DbGljayA9IHNpbXBsZVByaW50ZihcInBnLmZuLmdldExhc3RDb250cmliKCclcycsJXMpXCIsIFtcblx0XHRcdFx0XHRsLmFydGljbGVcblx0XHRcdFx0XHRcdC50b1N0cmluZyh0cnVlKVxuXHRcdFx0XHRcdFx0LnNwbGl0KCdcXFxcJylcblx0XHRcdFx0XHRcdC5qb2luKCdcXFxcXFxcXCcpXG5cdFx0XHRcdFx0XHQuc3BsaXQoXCInXCIpXG5cdFx0XHRcdFx0XHQuam9pbihTdHJpbmcucmF3YFxcJ2ApLFxuXHRcdFx0XHRcdGwubmV3V2luLFxuXHRcdFx0XHRdKTtcblx0XHRcdFx0dGl0bGUgPSBwb3B1cFN0cmluZygnbGFzdENvbnRyaWJIaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnc2luY2VNZSc6XG5cdFx0XHRcdG9uQ2xpY2sgPSBzaW1wbGVQcmludGYoXCJwZy5mbi5nZXREaWZmU2luY2VNeUVkaXQoJyVzJywlcylcIiwgW1xuXHRcdFx0XHRcdGwuYXJ0aWNsZVxuXHRcdFx0XHRcdFx0LnRvU3RyaW5nKHRydWUpXG5cdFx0XHRcdFx0XHQuc3BsaXQoJ1xcXFwnKVxuXHRcdFx0XHRcdFx0LmpvaW4oJ1xcXFxcXFxcJylcblx0XHRcdFx0XHRcdC5zcGxpdChcIidcIilcblx0XHRcdFx0XHRcdC5qb2luKFN0cmluZy5yYXdgXFwnYCksXG5cdFx0XHRcdFx0bC5uZXdXaW4sXG5cdFx0XHRcdF0pO1xuXHRcdFx0XHR0aXRsZSA9IHBvcHVwU3RyaW5nKCdzaW5jZU1lSGludCcpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0anNVcmwgPSBgamF2YXNjcmlwdDoke29uQ2xpY2t9YDsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cdFx0b25DbGljayArPSAnO3JldHVybiBmYWxzZTsnO1xuXHRcdHJldHVybiBnZW5lcmFsTmF2TGluayh7XG5cdFx0XHR1cmw6IGpzVXJsLFxuXHRcdFx0bmV3V2luOiBmYWxzZSxcblx0XHRcdHRpdGxlLFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bm9Qb3B1cDogbC5ub1BvcHVwLFxuXHRcdFx0b25jbGljazogb25DbGljayxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgcG9wdXBNZW51TGluayA9IChsKSA9PiB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNjcmlwdC11cmxcblx0XHRjb25zdCBqc1VybCA9IHNpbXBsZVByaW50ZignamF2YXNjcmlwdDpwZy5mbi4lcygpJywgW2wuaWRdKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cdFx0Y29uc3QgdGl0bGUgPSBwb3B1cFN0cmluZyhzaW1wbGVQcmludGYoJyVzSGludCcsIFtsLmlkXSkpO1xuXHRcdGNvbnN0IG9uQ2xpY2sgPSBzaW1wbGVQcmludGYoJ3BnLmZuLiVzKCk7cmV0dXJuIGZhbHNlOycsIFtsLmlkXSk7XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybDoganNVcmwsXG5cdFx0XHRuZXdXaW46IGZhbHNlLFxuXHRcdFx0dGl0bGUsXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHRub1BvcHVwOiBsLm5vUG9wdXAsXG5cdFx0XHRvbmNsaWNrOiBvbkNsaWNrLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBzcGVjaWFsTGluayA9IChsKSA9PiB7XG5cdFx0Ly8gcHJvcGVydGllczogYXJ0aWNsZSwgc3BlY2lhbHBhZ2UsIHRleHQsIHNlcFxuXHRcdGlmIChsLnNwZWNpYWxwYWdlID09PSB1bmRlZmluZWQgfHwgIWwuc3BlY2lhbHBhZ2UpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBiYXNlID0gYCR7cGcud2lraS50aXRsZWJhc2UgKyBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc1NwZWNpYWxJZF19OiR7bC5zcGVjaWFscGFnZX1gO1xuXHRcdGwuc2VwID8/PSAnJnRhcmdldD0nO1xuXHRcdGxldCBhcnRpY2xlID0gbC5hcnRpY2xlLnVybFN0cmluZyh7XG5cdFx0XHRrZWVwU3BhY2VzOiBsLnNwZWNpYWxwYWdlID09PSAnU2VhcmNoJyxcblx0XHR9KTtcblx0XHRsZXQgaGludCA9IHBvcHVwU3RyaW5nKGAke2wuc3BlY2lhbHBhZ2V9SGludGApO1xuXHRcdHN3aXRjaCAobC5zcGVjaWFscGFnZSkge1xuXHRcdFx0Y2FzZSAnTG9nJzpcblx0XHRcdFx0c3dpdGNoIChsLnNlcCkge1xuXHRcdFx0XHRcdGNhc2UgJyZ1c2VyPSc6XG5cdFx0XHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ3VzZXJMb2dIaW50Jyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICcmdHlwZT1ibG9jayZwYWdlPSc6XG5cdFx0XHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ2Jsb2NrTG9nSGludCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnJnBhZ2U9Jzpcblx0XHRcdFx0XHRcdGhpbnQgPSBwb3B1cFN0cmluZygncGFnZUxvZ0hpbnQnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJyZ0eXBlPXByb3RlY3QmcGFnZT0nOlxuXHRcdFx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCdwcm90ZWN0TG9nSGludCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnJnR5cGU9ZGVsZXRlJnBhZ2U9Jzpcblx0XHRcdFx0XHRcdGhpbnQgPSBwb3B1cFN0cmluZygnZGVsZXRlTG9nSGludCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGxvZyhgVW5rbm93biBsb2cgdHlwZSwgc2VwPSR7bC5zZXB9YCk7XG5cdFx0XHRcdFx0XHRoaW50ID0gJ01pc3NpbmcgaGludCAoRklYTUUpJztcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ1ByZWZpeEluZGV4Jzpcblx0XHRcdFx0YXJ0aWNsZSArPSAnLyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRoaW50ID0gaGludCA/IHNpbXBsZVByaW50ZihoaW50LCBbc2FmZURlY29kZVVSSShsLmFydGljbGUpXSkgOiBzYWZlRGVjb2RlVVJJKGAke2wuc3BlY2lhbHBhZ2V9OiR7bC5hcnRpY2xlfWApO1xuXHRcdGNvbnN0IHVybCA9IGJhc2UgKyBsLnNlcCArIGFydGljbGU7XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybCxcblx0XHRcdHRpdGxlOiBoaW50LFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bmV3V2luOiBsLm5ld1dpbixcblx0XHRcdG5vUG9wdXA6IGwubm9Qb3B1cCxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgZ2VuZXJhbExpbmsgPSAobCkgPT4ge1xuXHRcdC8vIGwudXJsLCBsLnRleHQsIGwudGl0bGUsIGwubmV3V2luLCBsLmNsYXNzTmFtZSwgbC5ub1BvcHVwLCBsLm9uY2xpY2tcblx0XHRpZiAobC51cmwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdC8vIG9ubHkgcXVvdGF0aW9uIG1hcmtzIGluIHRoZSB1cmwgY2FuIHNjcmV3IHVzIHVwIG5vdy4uLiBJIHRoaW5rXG5cdFx0Y29uc3QgdXJsID0gbC51cmwuc3BsaXQoJ1wiJykuam9pbignJTIyJyk7XG5cdFx0bGV0IHJldCA9IGA8YSBocmVmPVwiJHt1cmx9XCJgO1xuXHRcdGlmIChsLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgbC50aXRsZSkge1xuXHRcdFx0cmV0ICs9IGAgdGl0bGU9XCIke3BnLmVzY2FwZVF1b3Rlc0hUTUwobC50aXRsZSl9XCJgO1xuXHRcdH1cblx0XHRpZiAobC5vbmNsaWNrICE9PSB1bmRlZmluZWQgJiYgbC5vbmNsaWNrKSB7XG5cdFx0XHRyZXQgKz0gYCBvbmNsaWNrPVwiJHtwZy5lc2NhcGVRdW90ZXNIVE1MKGwub25jbGljayl9XCJgO1xuXHRcdH1cblx0XHRpZiAobC5ub1BvcHVwKSB7XG5cdFx0XHRyZXQgKz0gJyBub1BvcHVwPTEnO1xuXHRcdH1cblx0XHRsZXQgbmV3V2luO1xuXHRcdGlmIChsLm5ld1dpbiA9PT0gdW5kZWZpbmVkIHx8IGwubmV3V2luID09PSBudWxsKSB7XG5cdFx0XHRuZXdXaW4gPSBnZXRWYWx1ZU9mKCdwb3B1cE5ld1dpbmRvd3MnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0KHtuZXdXaW59ID0gbCk7XG5cdFx0fVxuXHRcdGlmIChuZXdXaW4pIHtcblx0XHRcdHJldCArPSAnIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCInO1xuXHRcdH1cblx0XHRpZiAobC5jbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBsLmNsYXNzTmFtZSkge1xuXHRcdFx0cmV0ICs9IGAgY2xhc3M9XCIke2wuY2xhc3NOYW1lfVwiYDtcblx0XHR9XG5cdFx0cmV0ICs9ICc+Jztcblx0XHRpZiAodHlwZW9mIGwudGV4dCA9PT0gdHlwZW9mICcnKSB7XG5cdFx0XHQvLyBXZSBuZWVkIHRvIEhUTUwtZXNjYXBlIHRoaXMgdG8gYXZvaWQgWFNTLCBidXQgd2UgYWxzbyB3YW50IHRvXG5cdFx0XHQvLyBkaXNwbGF5IGFueSBleGlzdGluZyBIVE1MIGVudGl0aWVzIGNvcnJlY3RseSwgc28gdW5lc2NhcGUgaXQgZmlyc3QuXG5cdFx0XHQvLyBGb3IgZXhhbXBsZSwgdGhlIGRpc3BsYXkgdGV4dCBvZiB0aGUgdXNlciBwYWdlIG1lbnUgaXRlbSBpcyBkZWZpbmVkXG5cdFx0XHQvLyBhcyBcInVzZXImbmJzcDtwYWdlXCIsIHNvIHdlIG5lZWQgdG8gdW5lc2NhcGUgZmlyc3QgdG8gYXZvaWQgaXQgYmVpbmdcblx0XHRcdC8vIGVzY2FwZWQgdG8gXCJ1c2VyJmFtcDtuYnNwO3BhZ2VcIi5cblx0XHRcdHJldCArPSBwZy5lc2NhcGVRdW90ZXNIVE1MKHBnLnVuZXNjYXBlUXVvdGVzSFRNTChsLnRleHQpKTtcblx0XHR9XG5cdFx0cmV0ICs9ICc8L2E+Jztcblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBhcHBlbmRQYXJhbXNUb0xpbmsgPSAobGlua3N0ciwgcGFyYW1zKSA9PiB7XG5cdFx0Y29uc3Qgc3AgPSBsaW5rc3RyLnNwbGl0KC8oaHJlZj1cIlteXCJdKz8pXCIvaSk7XG5cdFx0aWYgKHNwLmxlbmd0aCA8IDIpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgcmV0ID0gc3Auc2hpZnQoKSArIHNwLnNoaWZ0KCk7XG5cdFx0cmV0ICs9IGAmJHtwYXJhbXN9XCJgO1xuXHRcdHJldCArPSBzcC5qb2luKCcnKTtcblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBjaGFuZ2VMaW5rVGFyZ2V0TGluayA9ICh4KSA9PiB7XG5cdFx0Ly8gbmV3VGFyZ2V0LCB0ZXh0LCBoaW50LCBzdW1tYXJ5LCBjbGlja0J1dHRvbiwgbWlub3IsIHRpdGxlIChvcHRpb25hbCksIGFsc29DaGFuZ2VMYWJlbCB7XG5cdFx0aWYgKHgubmV3VGFyZ2V0KSB7XG5cdFx0XHRsb2coYGNoYW5nZUxpbmtUYXJnZXRMaW5rOiBuZXdUYXJnZXQ9JHt4Lm5ld1RhcmdldH1gKTtcblx0XHR9XG5cdFx0aWYgKHgub2xkVGFyZ2V0ICE9PSBkZWNvZGVVUklDb21wb25lbnQoeC5vbGRUYXJnZXQpKSB7XG5cdFx0XHRsb2coYFRoaXMgbWlnaHQgYmUgYW4gaW5wdXQgcHJvYmxlbTogJHt4Lm9sZFRhcmdldH1gKTtcblx0XHR9XG5cdFx0Ly8gRklYTUU6IGZpcnN0IGNoYXJhY3RlciBvZiBwYWdlIHRpdGxlIGFzIHdlbGwgYXMgbmFtZXNwYWNlIHNob3VsZCBiZSBjYXNlIGluc2Vuc2l0aXZlXG5cdFx0Ly8gZWcgW1s6Y2F0ZWdvcnk6WDFdXSBhbmQgW1s6Q2F0ZWdvcnk6WDFdXSBhcmUgZXF1aXZhbGVudFxuXHRcdC8vIHRoaXMnbGwgYnJlYWsgaWYgY2hhckF0KDApIGlzIG5hc3R5XG5cdFx0Y29uc3QgY0EgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cCh4Lm9sZFRhcmdldCk7XG5cdFx0bGV0IGNocyA9IGNBLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuXHRcdGNocyA9IGBbJHtjaHN9JHtjaHMudG9Mb3dlckNhc2UoKX1dYDtcblx0XHRsZXQgY3VycmVudEFydGljbGVSZWdleEJpdCA9IGNocyArIGNBLnNsaWNlKDEpO1xuXHRcdGN1cnJlbnRBcnRpY2xlUmVnZXhCaXQgPSBjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0XG5cdFx0XHQuc3BsaXQoL1sgX10rfCUyMC9nKVxuXHRcdFx0LmpvaW4oJyg/OltfIF0rfCUyMCknKVxuXHRcdFx0LnNwbGl0KFN0cmluZy5yYXdgXFwoYClcblx0XHRcdC5qb2luKFN0cmluZy5yYXdgKD86JTI4fFxcKClgKVxuXHRcdFx0LnNwbGl0KFN0cmluZy5yYXdgXFwpYClcblx0XHRcdC5qb2luKFN0cmluZy5yYXdgKD86JTI5fFxcKSlgKTsgLy8gd2h5IGRvZXMgdGhpcyBuZWVkIHRvIG1hdGNoIGVuY29kZWQgc3RyaW5ncyA/IGxpbmtzIGluIHRoZSBkb2N1bWVudCA/XG5cblx0XHQvLyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzcGFjZSBzaG91bGQgYmUgaWdub3JlZCwgYW5kIGFuY2hvciBiaXRzIG9wdGlvbmFsOlxuXHRcdGN1cnJlbnRBcnRpY2xlUmVnZXhCaXQgPSBgXFxcXHMqKCR7Y3VycmVudEFydGljbGVSZWdleEJpdH0oPzojW15cXFxcW1xcXFx8XSopPylcXFxccypgO1xuXHRcdC8vIGUuZy4gQ29tcHV0ZXIgKGFyY2hhaWMpIC0+IFxccyooW0NjXW9tcHV0ZXJbXyBdKD86JTI1Mjh8XFwoKWFyY2hhaWMoPzolMjUyOHxcXCkpKVxccypcblx0XHQvLyBhdXRvZWRpdD1zflxcW1xcWyhbQ2NdYWQpXFxdXFxdfltbQ29tcHV0ZXItYWlkZWQlMjBkZXNpZ258JDFdXX5nO3N+XFxbXFxbKFtDY11BRClbfF1+W1tDb21wdXRlci1haWRlZCUyMGRlc2lnbnx+Z1xuXHRcdGNvbnN0IHRpdGxlID0geC50aXRsZSB8fCBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykuc3BsaXQoJ18nKS5qb2luKCcgJyk7XG5cdFx0Y29uc3QgbGsgPSB0aXRsZWRXaWtpTGluayh7XG5cdFx0XHRhcnRpY2xlOiBuZXcgVGl0bGUodGl0bGUpLFxuXHRcdFx0bmV3V2luOiB4Lm5ld1dpbixcblx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0dGV4dDogeC50ZXh0LFxuXHRcdFx0dGl0bGU6IHguaGludCxcblx0XHRcdGNsYXNzTmFtZTogJ3BvcHVwX2NoYW5nZV90aXRsZV9saW5rJyxcblx0XHR9KTtcblx0XHRsZXQgY21kID0gJyc7XG5cdFx0aWYgKHgubmV3VGFyZ2V0KSB7XG5cdFx0XHQvLyBlc2NhcGUgJyYnIGFuZCBvdGhlciBuYXN0aWVzXG5cdFx0XHRjb25zdCB0ID0geC5uZXdUYXJnZXQ7XG5cdFx0XHRjb25zdCBzID0gbXcudXRpbC5lc2NhcGVSZWdFeHAoeC5uZXdUYXJnZXQpO1xuXHRcdFx0aWYgKHguYWxzb0NoYW5nZUxhYmVsKSB7XG5cdFx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0fVxcXFxdXFxcXF1+W1ske3R9XV1+ZztgO1xuXHRcdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7Y3VycmVudEFydGljbGVSZWdleEJpdH1bfF1+W1ske3R9fH5nO2A7XG5cdFx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtzfVxcXFx8JHtzfVxcXFxdXFxcXF1+W1ske3R9XV1+Z2A7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7Y3VycmVudEFydGljbGVSZWdleEJpdH1cXFxcXVxcXFxdfltbJHt0fXwkMV1dfmc7YDtcblx0XHRcdFx0Y21kICs9IGBzflxcXFxbXFxcXFske2N1cnJlbnRBcnRpY2xlUmVnZXhCaXR9W3xdfltbJHt0fXx+ZztgO1xuXHRcdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7c31cXFxcfCR7c31cXFxcXVxcXFxdfltbJHt0fV1dfmdgO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7Y3VycmVudEFydGljbGVSZWdleEJpdH1cXFxcXVxcXFxdfiQxfmc7YDtcblx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0fVt8XSguKj8pXFxcXF1cXFxcXX4kMn5nYDtcblx0XHR9XG5cdFx0Ly8gQnVpbGQgcXVlcnlcblx0XHRjbWQgPSBgYXV0b2VkaXQ9JHtlbmNvZGVVUklDb21wb25lbnQoY21kKX1gO1xuXHRcdGNtZCArPSBgJmF1dG9jbGljaz0ke2VuY29kZVVSSUNvbXBvbmVudCh4LmNsaWNrQnV0dG9uKX0mYWN0b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudChhdXRvQ2xpY2tUb2tlbigpKX1gO1xuXHRcdGNtZCArPSB4Lm1pbm9yID09PSBudWxsID8gJycgOiBgJmF1dG9taW5vcj0ke2VuY29kZVVSSUNvbXBvbmVudCh4Lm1pbm9yKX1gO1xuXHRcdGNtZCArPSB4LndhdGNoID09PSBudWxsID8gJycgOiBgJmF1dG93YXRjaD0ke2VuY29kZVVSSUNvbXBvbmVudCh4LndhdGNoKX1gO1xuXHRcdGNtZCArPSBgJmF1dG9zdW1tYXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHguc3VtbWFyeSl9YDtcblx0XHRjbWQgKz0gYCZhdXRvaW1wbD0ke2VuY29kZVVSSUNvbXBvbmVudChwb3B1cFN0cmluZygnYXV0b2VkaXRfdmVyc2lvbicpKX1gO1xuXHRcdHJldHVybiBhcHBlbmRQYXJhbXNUb0xpbmsobGssIGNtZCk7XG5cdH07XG5cdGNvbnN0IHJlZGlyTGluayA9IChyZWRpck1hdGNoLCBhcnRpY2xlKSA9PiB7XG5cdFx0Ly8gTkIgcmVkaXJNYXRjaCBpcyBpbiB3aWtpVGV4dFxuXHRcdGxldCByZXQgPSAnJztcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBBcHBlbmRSZWRpck5hdkxpbmtzJykgJiYgZ2V0VmFsdWVPZigncG9wdXBOYXZMaW5rcycpKSB7XG5cdFx0XHRyZXQgKz0gJzxocj4nO1xuXHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwRml4UmVkaXJzJykgJiYgYXV0b0VkaXQgIT09IHVuZGVmaW5lZCAmJiBhdXRvRWRpdCkge1xuXHRcdFx0XHRyZXQgKz0gcG9wdXBTdHJpbmcoJ1JlZGlyZWN0cyB0bzogKEZpeCAnKTtcblx0XHRcdFx0bG9nKGByZWRpckxpbms6IG5ld1RhcmdldD0ke3JlZGlyTWF0Y2h9YCk7XG5cdFx0XHRcdHJldCArPSBhZGRQb3B1cFNob3J0Y3V0KFxuXHRcdFx0XHRcdGNoYW5nZUxpbmtUYXJnZXRMaW5rKHtcblx0XHRcdFx0XHRcdG5ld1RhcmdldDogcmVkaXJNYXRjaCxcblx0XHRcdFx0XHRcdHRleHQ6IHBvcHVwU3RyaW5nKCd0YXJnZXQnKSxcblx0XHRcdFx0XHRcdGhpbnQ6IHBvcHVwU3RyaW5nKCdGaXggdGhpcyByZWRpcmVjdCwgY2hhbmdpbmcganVzdCB0aGUgbGluayB0YXJnZXQnKSxcblx0XHRcdFx0XHRcdHN1bW1hcnk6IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cEZpeFJlZGlyc1N1bW1hcnknKSwgW2FydGljbGUudG9TdHJpbmcoKSwgcmVkaXJNYXRjaF0pLFxuXHRcdFx0XHRcdFx0b2xkVGFyZ2V0OiBhcnRpY2xlLnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0XHRjbGlja0J1dHRvbjogZ2V0VmFsdWVPZigncG9wdXBSZWRpckF1dG9DbGljaycpLFxuXHRcdFx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHRcdFx0XHR3YXRjaDogZ2V0VmFsdWVPZigncG9wdXBXYXRjaFJlZGlycmVkUGFnZXMnKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHQnUidcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0ICs9IHBvcHVwU3RyaW5nKCcgb3IgJyk7XG5cdFx0XHRcdHJldCArPSBhZGRQb3B1cFNob3J0Y3V0KFxuXHRcdFx0XHRcdGNoYW5nZUxpbmtUYXJnZXRMaW5rKHtcblx0XHRcdFx0XHRcdG5ld1RhcmdldDogcmVkaXJNYXRjaCxcblx0XHRcdFx0XHRcdHRleHQ6IHBvcHVwU3RyaW5nKCd0YXJnZXQgJiBsYWJlbCcpLFxuXHRcdFx0XHRcdFx0aGludDogcG9wdXBTdHJpbmcoJ0ZpeCB0aGlzIHJlZGlyZWN0LCBjaGFuZ2luZyB0aGUgbGluayB0YXJnZXQgYW5kIGxhYmVsJyksXG5cdFx0XHRcdFx0XHRzdW1tYXJ5OiBzaW1wbGVQcmludGYoZ2V0VmFsdWVPZigncG9wdXBGaXhSZWRpcnNTdW1tYXJ5JyksIFthcnRpY2xlLnRvU3RyaW5nKCksIHJlZGlyTWF0Y2hdKSxcblx0XHRcdFx0XHRcdG9sZFRhcmdldDogYXJ0aWNsZS50b1N0cmluZygpLFxuXHRcdFx0XHRcdFx0Y2xpY2tCdXR0b246IGdldFZhbHVlT2YoJ3BvcHVwUmVkaXJBdXRvQ2xpY2snKSxcblx0XHRcdFx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdFx0XHRcdFx0d2F0Y2g6IGdldFZhbHVlT2YoJ3BvcHVwV2F0Y2hSZWRpcnJlZFBhZ2VzJyksXG5cdFx0XHRcdFx0XHRhbHNvQ2hhbmdlTGFiZWw6IHRydWUsXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0J1InXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldCArPSBwb3B1cFN0cmluZygnKScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0ICs9IHBvcHVwU3RyaW5nKCdSZWRpcmVjdHMnKSArIHBvcHVwU3RyaW5nKCcgdG8gJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblx0XHRyZXR1cm4gYDxicj4gJHtwb3B1cFN0cmluZygnUmVkaXJlY3RzJyl9JHtwb3B1cFN0cmluZygnIHRvICcpfSR7dGl0bGVkV2lraUxpbmsoe1xuXHRcdFx0YXJ0aWNsZTogbmV3IFRpdGxlKCkuZnJvbVdpa2lUZXh0KHJlZGlyTWF0Y2gpLFxuXHRcdFx0YWN0aW9uOiAndmlldycgLyogRklYTUU6IG5ld1dpbiAqLyxcblx0XHRcdHRleHQ6IHNhZmVEZWNvZGVVUkkocmVkaXJNYXRjaCksXG5cdFx0XHR0aXRsZTogcG9wdXBTdHJpbmcoJ0J5cGFzcyByZWRpcmVjdCcpLFxuXHRcdH0pfWA7XG5cdH07XG5cdGNvbnN0IGFyaW5MaW5rID0gKGwpID0+IHtcblx0XHRpZiAoIXNhbmVMaW5rQ2hlY2sobCkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAoIWwuYXJ0aWNsZS5pc0lwVXNlcigpIHx8ICFwZy53aWtpLndpa2ltZWRpYSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHVOID0gbC5hcnRpY2xlLnVzZXJOYW1lKCk7XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybDogYGh0dHA6Ly93cy5hcmluLm5ldC9jZ2ktYmluL3dob2lzLnBsP3F1ZXJ5aW5wdXQ9JHtlbmNvZGVVUklDb21wb25lbnQodU4pfWAsXG5cdFx0XHRuZXdXaW46IGwubmV3V2luLFxuXHRcdFx0dGl0bGU6IHRwcmludGYoJ0xvb2sgdXAgJXMgaW4gQVJJTiB3aG9pcyBkYXRhYmFzZScsIFt1Tl0pLFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bm9Qb3B1cDogMSxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgdG9vbERiTmFtZSA9IChjb29raWVTdHlsZSkgPT4ge1xuXHRcdGxldCByZXQgPSBtdy5jb25maWcuZ2V0KCd3Z0RCbmFtZScpO1xuXHRcdGlmICghY29va2llU3R5bGUpIHtcblx0XHRcdHJldCArPSAnX3AnO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBzYW5lTGlua0NoZWNrID0gKGwpID0+IHtcblx0XHRpZiAodHlwZW9mIGwuYXJ0aWNsZSAhPT0gdHlwZW9mIHt9IHx8IHR5cGVvZiBsLnRleHQgIT09IHR5cGVvZiAnJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0Y29uc3QgZWRpdENvdW50ZXJMaW5rID0gKGwpID0+IHtcblx0XHRpZiAoIXNhbmVMaW5rQ2hlY2sobCkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAoIXBnLndpa2kud2lraW1lZGlhKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgdU4gPSBsLmFydGljbGUudXNlck5hbWUoKTtcblx0XHRjb25zdCB0b29sID0gZ2V0VmFsdWVPZigncG9wdXBFZGl0Q291bnRlclRvb2wnKTtcblx0XHRsZXQgdXJsO1xuXHRcdGNvbnN0IGRlZmF1bHRUb29sVXJsID0gJy8vdG9vbHMud21mbGFicy5vcmcvc3VwZXJjb3VudC9pbmRleC5waHA/dXNlcj0kMSZwcm9qZWN0PSQyLiQzJztcblx0XHRzd2l0Y2ggKHRvb2wpIHtcblx0XHRcdGNhc2UgJ2N1c3RvbSc6XG5cdFx0XHRcdHVybCA9IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cEVkaXRDb3VudGVyVXJsJyksIFtlbmNvZGVVUklDb21wb25lbnQodU4pLCB0b29sRGJOYW1lKCldKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdGNvbnN0IHRoZVdpa2kgPSBwZy53aWtpLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG5cdFx0XHRcdHVybCA9IHNpbXBsZVByaW50ZihkZWZhdWx0VG9vbFVybCwgW2VuY29kZVVSSUNvbXBvbmVudCh1TiksIHRoZVdpa2lbMF0sIHRoZVdpa2lbMV1dKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybCxcblx0XHRcdHRpdGxlOiB0cHJpbnRmKCdlZGl0Q291bnRlckxpbmtIaW50JywgW3VOXSksXG5cdFx0XHRuZXdXaW46IGwubmV3V2luLFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bm9Qb3B1cDogMSxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgZWRpdG9yTGlzdExpbmsgPSAobCkgPT4ge1xuXHRcdGlmICghc2FuZUxpbmtDaGVjayhsKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IGFydGljbGUgPSBsLmFydGljbGUuYXJ0aWNsZUZyb21UYWxrUGFnZSgpIHx8IGwuYXJ0aWNsZTtcblx0XHRjb25zdCB1cmwgPSBgaHR0cHM6Ly94dG9vbHMud21mbGFicy5vcmcvYXJ0aWNsZWluZm8vJHtlbmNvZGVVUkkoXG5cdFx0XHRwZy53aWtpLmhvc3RuYW1lXG5cdFx0KX0vJHthcnRpY2xlLnVybFN0cmluZygpfT91c2VsYW5nPSR7bXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKX1gO1xuXHRcdHJldHVybiBnZW5lcmFsTmF2TGluayh7XG5cdFx0XHR1cmwsXG5cdFx0XHR0aXRsZTogdHByaW50ZignZWRpdG9yTGlzdEhpbnQnLCBbYXJ0aWNsZV0pLFxuXHRcdFx0bmV3V2luOiBsLm5ld1dpbixcblx0XHRcdHRleHQ6IGwudGV4dCxcblx0XHRcdG5vUG9wdXA6IDEsXG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGdlbmVyYWxOYXZMaW5rID0gKGwpID0+IHtcblx0XHRsLmNsYXNzTmFtZSA9IGwuY2xhc3NOYW1lID09PSBudWxsID8gJ3BvcHVwTmF2TGluaycgOiBsLmNsYXNzTmFtZTtcblx0XHRyZXR1cm4gZ2VuZXJhbExpbmsobCk7XG5cdH07XG5cdC8vIG1hZ2ljIGhpc3RvcnkgbGlua3Ncblx0Ly9cblx0Y29uc3QgZ2V0SGlzdG9yeUluZm8gPSAod2lraXBhZ2UsIHdoYXROZXh0KSA9PiB7XG5cdFx0bG9nKCdnZXRIaXN0b3J5SW5mbycpO1xuXHRcdGdldEhpc3RvcnkoXG5cdFx0XHR3aWtpcGFnZSxcblx0XHRcdHdoYXROZXh0XG5cdFx0XHRcdD8gKGQpID0+IHtcblx0XHRcdFx0XHRcdHdoYXROZXh0KHByb2Nlc3NIaXN0b3J5KGQpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDogcHJvY2Vzc0hpc3Rvcnlcblx0XHQpO1xuXHR9O1xuXHQvLyBGSVhNRSBlbGltaW5hdGUgcGcuaWROdW1iZXIgLi4uIGhvdz8gOi0oXG5cdGNvbnN0IGdldEhpc3RvcnkgPSAod2lraXBhZ2UsIG9uQ29tcGxldGUpID0+IHtcblx0XHRsb2coJ2dldEhpc3RvcnknKTtcblx0XHRjb25zdCB1cmwgPSBgJHtwZy53aWtpLmFwaXdpa2liYXNlfT9mb3JtYXQ9anNvbiZmb3JtYXR2ZXJzaW9uPTImYWN0aW9uPXF1ZXJ5JnByb3A9cmV2aXNpb25zJnRpdGxlcz0ke25ldyBUaXRsZShcblx0XHRcdHdpa2lwYWdlXG5cdFx0KS51cmxTdHJpbmcoKX0mcnZsaW1pdD0ke2dldFZhbHVlT2YoJ3BvcHVwSGlzdG9yeUxpbWl0Jyl9YDtcblx0XHRsb2coYGdldEhpc3Rvcnk6IHVybD0ke3VybH1gKTtcblx0XHRyZXR1cm4gc3RhcnREb3dubG9hZCh1cmwsIGAke3BnLmlkTnVtYmVyfWhpc3RvcnlgLCBvbkNvbXBsZXRlKTtcblx0fTtcblx0Y29uc3QgcHJvY2Vzc0hpc3RvcnkgPSAoZG93bmxvYWQpID0+IHtcblx0XHRjb25zdCBqc29iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB7cmV2aXNpb25zfSA9IGFueUNoaWxkKGpzb2JqLnF1ZXJ5LnBhZ2VzKTtcblx0XHRcdGNvbnN0IGVkaXRzID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IHJldmlzaW9uIG9mIHJldmlzaW9ucykge1xuXHRcdFx0XHRlZGl0cy5wdXNoKHtcblx0XHRcdFx0XHRvbGRpZDogcmV2aXNpb24ucmV2aWQsXG5cdFx0XHRcdFx0ZWRpdG9yOiByZXZpc2lvbi51c2VyLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGxvZyhgcHJvY2Vzc2VkICR7ZWRpdHMubGVuZ3RofSBlZGl0c2ApO1xuXHRcdFx0cmV0dXJuIGZpbmlzaFByb2Nlc3NIaXN0b3J5KGVkaXRzLCBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9nKCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIEpTT04gYnVzaW5lc3MnKTtcblx0XHRcdHJldHVybiBmaW5pc2hQcm9jZXNzSGlzdG9yeShbXSk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBmaW5pc2hQcm9jZXNzSGlzdG9yeSA9IChlZGl0cywgdXNlck5hbWUpID0+IHtcblx0XHRjb25zdCBoaXN0SW5mbyA9IHt9O1xuXHRcdGhpc3RJbmZvLmVkaXRzID0gZWRpdHM7XG5cdFx0aGlzdEluZm8udXNlck5hbWUgPSB1c2VyTmFtZTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoaGlzdEluZm8ubXlMYXN0RWRpdCA9PT0gdW5kZWZpbmVkICYmIHVzZXJOYW1lICYmIGVkaXRzW2ldLmVkaXRvciA9PT0gdXNlck5hbWUpIHtcblx0XHRcdFx0aGlzdEluZm8ubXlMYXN0RWRpdCA9IHtcblx0XHRcdFx0XHRpbmRleDogaSxcblx0XHRcdFx0XHRvbGRpZDogZWRpdHNbaV0ub2xkaWQsXG5cdFx0XHRcdFx0cHJldmlkOiBpID09PSAwID8gbnVsbCA6IGVkaXRzW2kgLSAxXS5vbGRpZCxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChoaXN0SW5mby5maXJzdE5ld0VkaXRvciA9PT0gdW5kZWZpbmVkICYmIGVkaXRzW2ldLmVkaXRvciAhPT0gZWRpdHNbMF0uZWRpdG9yKSB7XG5cdFx0XHRcdGhpc3RJbmZvLmZpcnN0TmV3RWRpdG9yID0ge1xuXHRcdFx0XHRcdGluZGV4OiBpLFxuXHRcdFx0XHRcdG9sZGlkOiBlZGl0c1tpXS5vbGRpZCxcblx0XHRcdFx0XHRwcmV2aWQ6IGkgPT09IDAgPyBudWxsIDogZWRpdHNbaSAtIDFdLm9sZGlkLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBwZy5taXNjLmhpc3RvcnlJbmZvPWhpc3RJbmZvO1xuXHRcdHJldHVybiBoaXN0SW5mbztcblx0fTtcblx0Ly8gRU5ERklMRTogbGlua3MuanNcblx0Ly8gU1RBUlRGSUxFOiBvcHRpb25zLmpzXG5cdC8vIG9wdGlvbnNcblx0Ly8gY2hlY2sgZm9yIGV4aXN0aW5nIHZhbHVlLCBlbHNlIHVzZSBkZWZhdWx0XG5cdGNvbnN0IGRlZmF1bHRpemUgPSAoeCkgPT4ge1xuXHRcdHBnLm9wdGlvblt4XSA/Pz0gd2luZG93W3hdID09PSB1bmRlZmluZWQgPyBwZy5vcHRpb25EZWZhdWx0W3hdIDogd2luZG93W3hdO1xuXHR9O1xuXHRjb25zdCBuZXdPcHRpb24gPSAoeCwgZGVmKSA9PiB7XG5cdFx0cGcub3B0aW9uRGVmYXVsdFt4XSA9IGRlZjtcblx0fTtcblx0Y29uc3Qgc2V0RGVmYXVsdCA9ICh4LCBkZWYpID0+IHtcblx0XHRyZXR1cm4gbmV3T3B0aW9uKHgsIGRlZik7XG5cdH07XG5cdGNvbnN0IGdldFZhbHVlT2YgPSAodmFyTmFtZSkgPT4ge1xuXHRcdGRlZmF1bHRpemUodmFyTmFtZSk7XG5cdFx0cmV0dXJuIHBnLm9wdGlvblt2YXJOYW1lXTtcblx0fTtcblx0Y29uc3Qgc2V0T3B0aW9ucyA9ICgpID0+IHtcblx0XHQvLyB1c2VyLXNldHRhYmxlIHBhcmFtZXRlcnMgYW5kIGRlZmF1bHRzXG5cdFx0bGV0IHVzZXJJc1N5c29wID0gZmFsc2U7XG5cdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpKSB7XG5cdFx0XHRmb3IgKGxldCBnID0gMDsgZyA8IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpLmxlbmd0aDsgKytnKSB7XG5cdFx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKVtnXSA9PT0gJ3N5c29wJykge1xuXHRcdFx0XHRcdHVzZXJJc1N5c29wID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJylbZ10gPT09ICdzdGV3YXJkJykge1xuXHRcdFx0XHRcdHVzZXJJc1N5c29wID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBCYXNpYyBvcHRpb25zXG5cdFx0bmV3T3B0aW9uKCdwb3B1cERlbGF5JywgMC41KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSGlkZURlbGF5JywgMC41KTtcblx0XHRuZXdPcHRpb24oJ3NpbXBsZVBvcHVwcycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwU3RydWN0dXJlJywgJ3Nob3J0bWVudXMnKTsgLy8gc2VlIGxhdGVyIC0gZGVmYXVsdCBmb3IgcG9wdXBTdHJ1Y3R1cmUgaXMgJ29yaWdpbmFsJyBpZiBzaW1wbGVQb3B1cHMgaXMgdHJ1ZVxuXHRcdG5ld09wdGlvbigncG9wdXBBY3Rpb25zTWVudScsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBTZXR1cE1lbnUnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwQWRtaW5MaW5rcycsIHVzZXJJc1N5c29wKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwU2hvcnRjdXRLZXlzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBIaXN0b3JpY2FsTGlua3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwT25seUFydGljbGVMaW5rcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncmVtb3ZlVGl0bGVzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE1heFdpZHRoJywgMzUwKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwU2ltcGxpZnlNYWluTGluaycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBBcHBlbmRSZWRpck5hdkxpbmtzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFRvY0xpbmtzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBTdWJwb3B1cHMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRHJhZ0hhbmRsZScsIGZhbHNlIC8qICdwb3B1cFRvcExpbmtzJyAqLyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cExhenlQcmV2aWV3cycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBMYXp5RG93bmxvYWRzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEFsbERhYnNTdHVicycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGVidWdnaW5nJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBBY3RpdmVOYXZsaW5rcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBNb2RpZmllcicsIGZhbHNlKTsgLy8gY3RybCwgc2hpZnQsIGFsdCBvciBtZXRhXG5cdFx0bmV3T3B0aW9uKCdwb3B1cE1vZGlmaWVyQWN0aW9uJywgJ2VuYWJsZScpOyAvLyBvciAnZGlzYWJsZSdcblx0XHRuZXdPcHRpb24oJ3BvcHVwRHJhZ2dhYmxlJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJldmlldycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTG9jYWxlJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEYXRlVGltZUZvcm1hdHRlck9wdGlvbnMnLCB7XG5cdFx0XHR5ZWFyOiAnbnVtZXJpYycsXG5cdFx0XHRtb250aDogJ2xvbmcnLFxuXHRcdFx0ZGF5OiAnbnVtZXJpYycsXG5cdFx0XHRob3VyMTI6IGZhbHNlLFxuXHRcdFx0aG91cjogJzItZGlnaXQnLFxuXHRcdFx0bWludXRlOiAnMi1kaWdpdCcsXG5cdFx0XHRzZWNvbmQ6ICcyLWRpZ2l0Jyxcblx0XHR9KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGF0ZUZvcm1hdHRlck9wdGlvbnMnLCB7XG5cdFx0XHR5ZWFyOiAnbnVtZXJpYycsXG5cdFx0XHRtb250aDogJ2xvbmcnLFxuXHRcdFx0ZGF5OiAnbnVtZXJpYycsXG5cdFx0fSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFRpbWVGb3JtYXR0ZXJPcHRpb25zJywge1xuXHRcdFx0aG91cjEyOiBmYWxzZSxcblx0XHRcdGhvdXI6ICcyLWRpZ2l0Jyxcblx0XHRcdG1pbnV0ZTogJzItZGlnaXQnLFxuXHRcdFx0c2Vjb25kOiAnMi1kaWdpdCcsXG5cdFx0fSk7XG5cdFx0Ly8gaW1hZ2VzXG5cdFx0bmV3T3B0aW9uKCdwb3B1cEltYWdlcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbignaW1hZ2VQb3B1cHNGb3JJbWFnZXMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTmV2ZXJHZXRUaHVtYnMnLCBmYWxzZSk7XG5cdFx0Ly8gbmV3T3B0aW9uKCdwb3B1cEltYWdlc1RvZ2dsZVNpemUnLCAgICAgICB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwVGh1bWJBY3Rpb24nLCAnaW1hZ2VwYWdlJyk7IC8vICdzaXpldG9nZ2xlJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEltYWdlU2l6ZScsIDYwKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSW1hZ2VTaXplTGFyZ2UnLCAyMDApO1xuXHRcdC8vIHJlZGlycywgZGFicywgcmV2ZXJzaW9uXG5cdFx0bmV3T3B0aW9uKCdwb3B1cEZpeFJlZGlycycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmVkaXJBdXRvQ2xpY2snLCAnd3BEaWZmJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEZpeERhYnMnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERhYnNBdXRvQ2xpY2snLCAnd3BEaWZmJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJldmVydFN1bW1hcnlQcm9tcHQnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE1pbm9yUmV2ZXJ0cycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmVkbGlua1JlbW92YWwnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJlZGxpbmtBdXRvQ2xpY2snLCAnd3BEaWZmJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFdhdGNoRGlzYW1iaWdnZWRQYWdlcycsIG51bGwpO1xuXHRcdG5ld09wdGlvbigncG9wdXBXYXRjaFJlZGlycmVkUGFnZXMnLCBudWxsKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGFiV2lrdGlvbmFyeScsICdsYXN0Jyk7XG5cdFx0Ly8gbmF2bGlua3Ncblx0XHRuZXdPcHRpb24oJ3BvcHVwTmF2TGlua3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTmF2TGlua1NlcGFyYXRvcicsICcgJnNkb3Q7ICcpO1xuXHRcdG5ld09wdGlvbigncG9wdXBMYXN0RWRpdExpbmsnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRWRpdENvdW50ZXJUb29sJywgJ3N1cGVyY291bnQnKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRWRpdENvdW50ZXJVcmwnLCAnJyk7XG5cdFx0Ly8gcHJldmlld3MgZXRjXG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFN1bW1hcnlEYXRhJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE1heFByZXZpZXdTZW50ZW5jZXMnLCA1KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTWF4UHJldmlld0NoYXJhY3RlcnMnLCA2MDApO1xuXHRcdG5ld09wdGlvbigncG9wdXBMYXN0TW9kaWZpZWQnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld0tpbGxUZW1wbGF0ZXMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld1Jhd1RlbXBsYXRlcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3Rmlyc3RQYXJPbmx5JywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdDdXRIZWFkaW5ncycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3QnV0dG9uJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3QnV0dG9uRXZlbnQnLCAnY2xpY2snKTtcblx0XHQvLyBkaWZmc1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3RGlmZnMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGlmZk1heExpbmVzJywgMTAwKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGlmZkNvbnRleHRMaW5lcycsIDIpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEaWZmQ29udGV4dENoYXJhY3RlcnMnLCA0MCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERpZmZEYXRlcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEaWZmRGF0ZVByaW50ZXInLCAndG9Mb2NhbGVTdHJpbmcnKTsgLy8gbm8gbG9uZ2VyIGluIHVzZVxuXG5cdFx0Ly8gZWRpdCBzdW1tYXJpZXMuIEdvZCwgdGhlc2UgYXJlIHVnbHkuXG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJldmlld2VkU3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBSZXZpZXdlZFN1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEZpeERhYnNTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cEZpeERhYnNTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBFeHRlbmRlZFJldmVydFN1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwRXh0ZW5kZWRSZXZlcnRTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZXZlcnRTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFJldmVydFN1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJldmVydFRvUHJldmlvdXNTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFJldmVydFRvUHJldmlvdXNTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBRdWVyaWVkUmV2ZXJ0U3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBRdWVyaWVkUmV2ZXJ0U3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUXVlcmllZFJldmVydFRvUHJldmlvdXNTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRml4UmVkaXJzU3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBGaXhSZWRpcnNTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZWRsaW5rU3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBSZWRsaW5rU3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUm1EYWJMaW5rU3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBSbURhYkxpbmtTdW1tYXJ5JykpO1xuXHRcdC8vIG1pc2Ncblx0XHRuZXdPcHRpb24oJ3BvcHVwSGlzdG9yeUxpbWl0JywgNTApO1xuXHRcdG5ld09wdGlvbigncG9wdXBGaWx0ZXJzJywgW1xuXHRcdFx0cG9wdXBGaWx0ZXJTdHViRGV0ZWN0LFxuXHRcdFx0cG9wdXBGaWx0ZXJEaXNhbWJpZ0RldGVjdCxcblx0XHRcdHBvcHVwRmlsdGVyUGFnZVNpemUsXG5cdFx0XHRwb3B1cEZpbHRlckNvdW50TGlua3MsXG5cdFx0XHRwb3B1cEZpbHRlckNvdW50SW1hZ2VzLFxuXHRcdFx0cG9wdXBGaWx0ZXJDb3VudENhdGVnb3JpZXMsXG5cdFx0XHRwb3B1cEZpbHRlckxhc3RNb2RpZmllZCxcblx0XHRdKTtcblx0XHRuZXdPcHRpb24oJ2V4dHJhUG9wdXBGaWx0ZXJzJywgW10pO1xuXHRcdG5ld09wdGlvbigncG9wdXBPbkVkaXRTZWxlY3Rpb24nLCAnY3Vyc29yJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdIaXN0b3J5JywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEltYWdlTGlua3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwQ2F0ZWdvcnlNZW1iZXJzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFVzZXJJbmZvJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEhpc3RvcnlQcmV2aWV3TGltaXQnLCAyNSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cENvbnRyaWJzUHJldmlld0xpbWl0JywgMjUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZXZEZWxVcmwnLCAnLy9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2lraXBlZGlhOlJldmlzaW9uX2RlbGV0aW9uJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFNob3dHZW5kZXInLCB0cnVlKTtcblx0XHQvLyBuZXcgd2luZG93c1xuXHRcdG5ld09wdGlvbigncG9wdXBOZXdXaW5kb3dzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBMaW5rc05ld1dpbmRvdycsIHtsYXN0Q29udHJpYjogdHJ1ZSwgc2luY2VNZTogdHJ1ZX0pO1xuXHRcdC8vIHJlZ2V4cHNcblx0XHRuZXdPcHRpb24oXG5cdFx0XHQncG9wdXBEYWJSZWdleHAnLFxuXHRcdFx0U3RyaW5nLnJhd2BcXHtcXHtcXHMqKGQoYWJ8aXNhbWIoaWcodWF0aW9uKT8pPyl8KCgoZ2VvfGhufHJvYWQ/fHNjaG9vbHxudW1iZXIpZGlzKXxbMjM0XVtsY11bYWN3XXwocm9hZHxzaGlwKWluZGV4KSlcXHMqKFxcfFtefV0qKT9cXH1cXH18aXMgYSAuKmRpc2FtYmlndWF0aW9uLipwYWdlYFxuXHRcdCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEFuY2hvclJlZ2V4cCcsICdhbmNob3JzPycpOyAvLyBob3cgdG8gaWRlbnRpZnkgYW4gYW5jaG9ycyB0ZW1wbGF0ZVxuXHRcdG5ld09wdGlvbigncG9wdXBTdHViUmVnZXhwJywgJyhzZWN0KT9zdHViW31dW31dfFRoaXMgLiotcmVsYXRlZCBhcnRpY2xlIGlzIGEgLipzdHViJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEltYWdlVmFyc1JlZ2V4cCcsICdpbWFnZXxpbWFnZV8oPzpmaWxlfHNreWxpbmV8bmFtZXxmbGFnfHNlYWwpfGNvdmVyfGJhZGdlfGxvZ28nKTtcblx0fTtcblx0Ly8gRU5ERklMRTogb3B0aW9ucy5qc1xuXHQvLyBTVEFSVEZJTEU6IHN0cmluZ3MuanNcblx0Ly8gVHJhbnNsYXRhYmxlIHN0cmluZ3Ncblx0Ly9cblx0Ly8gU2VlIGluc3RydWN0aW9ucyBhdFxuXHQvLyB7QGxpbmsgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzL1RyYW5zbGF0aW9ufVxuXHRwZy5zdHJpbmcgPSB7XG5cdFx0Ly8gc3VtbWFyeSBkYXRhLCBzZWFyY2hpbmcgZXRjLlxuXHRcdGFydGljbGU6ICdhcnRpY2xlJyxcblx0XHRjYXRlZ29yeTogJ2NhdGVnb3J5Jyxcblx0XHRjYXRlZ29yaWVzOiAnY2F0ZWdvcmllcycsXG5cdFx0aW1hZ2U6ICdpbWFnZScsXG5cdFx0aW1hZ2VzOiAnaW1hZ2VzJyxcblx0XHRzdHViOiAnc3R1YicsXG5cdFx0J3NlY3Rpb24gc3R1Yic6ICdzZWN0aW9uIHN0dWInLFxuXHRcdCdFbXB0eSBwYWdlJzogJ0VtcHR5IHBhZ2UnLFxuXHRcdGtCOiAna0InLFxuXHRcdGJ5dGVzOiAnYnl0ZXMnLFxuXHRcdGRheTogJ2RheScsXG5cdFx0ZGF5czogJ2RheXMnLFxuXHRcdGhvdXI6ICdob3VyJyxcblx0XHRob3VyczogJ2hvdXJzJyxcblx0XHRtaW51dGU6ICdtaW51dGUnLFxuXHRcdG1pbnV0ZXM6ICdtaW51dGVzJyxcblx0XHRzZWNvbmQ6ICdzZWNvbmQnLFxuXHRcdHNlY29uZHM6ICdzZWNvbmRzJyxcblx0XHR3ZWVrOiAnd2VlaycsXG5cdFx0d2Vla3M6ICd3ZWVrcycsXG5cdFx0c2VhcmNoOiAnc2VhcmNoJyxcblx0XHRTZWFyY2hIaW50OiAnRmluZCBFbmdsaXNoIFdpa2lwZWRpYSBhcnRpY2xlcyBjb250YWluaW5nICVzJyxcblx0XHR3ZWI6ICd3ZWInLFxuXHRcdGdsb2JhbDogJ2dsb2JhbCcsXG5cdFx0Ly8gYXJ0aWNsZS1yZWxhdGVkIGFjdGlvbnMgYW5kIGluZm9cblx0XHQvLyAoc29tZSBhY3Rpb25zIGFsc28gYXBwbHkgdG8gdXNlciBwYWdlcylcblx0XHRhY3Rpb25zOiAnYWN0aW9ucycsXG5cdFx0cG9wdXBzTWVudTogJ3BvcHVwcycsXG5cdFx0dG9nZ2xlUHJldmlld3NIaW50OiAnVG9nZ2xlIHByZXZpZXcgZ2VuZXJhdGlvbiBpbiBwb3B1cHMgb24gdGhpcyBwYWdlJyxcblx0XHQnZW5hYmxlIHByZXZpZXdzJzogJ2VuYWJsZSBwcmV2aWV3cycsXG5cdFx0J2Rpc2FibGUgcHJldmlld3MnOiAnZGlzYWJsZSBwcmV2aWV3cycsXG5cdFx0J3RvZ2dsZSBwcmV2aWV3cyc6ICd0b2dnbGUgcHJldmlld3MnLFxuXHRcdCdzaG93IHByZXZpZXcnOiAnc2hvdyBwcmV2aWV3Jyxcblx0XHRyZXNldDogJ3Jlc2V0Jyxcblx0XHQnbW9yZS4uLic6ICdtb3JlLi4uJyxcblx0XHRkaXNhYmxlOiAnZGlzYWJsZSBwb3B1cHMnLFxuXHRcdGRpc2FibGVQb3B1cHNIaW50OiAnRGlzYWJsZSBwb3B1cHMgb24gdGhpcyBwYWdlLiBSZWxvYWQgcGFnZSB0byByZS1lbmFibGUuJyxcblx0XHRoaXN0b3J5ZmVlZEhpbnQ6ICdSU1MgZmVlZCBvZiByZWNlbnQgY2hhbmdlcyB0byB0aGlzIHBhZ2UnLFxuXHRcdHB1cmdlUG9wdXBzSGludDogJ1Jlc2V0IHBvcHVwcywgY2xlYXJpbmcgYWxsIGNhY2hlZCBwb3B1cCBkYXRhLicsXG5cdFx0UG9wdXBzSGludDogJ1Jlc2V0IHBvcHVwcywgY2xlYXJpbmcgYWxsIGNhY2hlZCBwb3B1cCBkYXRhLicsXG5cdFx0c3BhY2ViYXI6ICdzcGFjZScsXG5cdFx0dmlldzogJ3ZpZXcnLFxuXHRcdCd2aWV3IGFydGljbGUnOiAndmlldyBhcnRpY2xlJyxcblx0XHR2aWV3SGludDogJ0dvIHRvICVzJyxcblx0XHR0YWxrOiAndGFsaycsXG5cdFx0J3RhbGsgcGFnZSc6ICd0YWxrIHBhZ2UnLFxuXHRcdCd0aGlzJm5ic3A7cmV2aXNpb24nOiAndGhpcyZuYnNwO3JldmlzaW9uJyxcblx0XHQncmV2aXNpb24gJXMgb2YgJXMnOiAncmV2aXNpb24gJXMgb2YgJXMnLFxuXHRcdCdSZXZpc2lvbiAlcyBvZiAlcyc6ICdSZXZpc2lvbiAlcyBvZiAlcycsXG5cdFx0J3RoZSByZXZpc2lvbiBwcmlvciB0byByZXZpc2lvbiAlcyBvZiAlcyc6ICd0aGUgcmV2aXNpb24gcHJpb3IgdG8gcmV2aXNpb24gJXMgb2YgJXMnLFxuXHRcdCdUb2dnbGUgaW1hZ2Ugc2l6ZSc6ICdDbGljayB0byB0b2dnbGUgaW1hZ2Ugc2l6ZScsXG5cdFx0ZGVsOiAnZGVsJyxcblx0XHRkZWxldGU6ICdkZWxldGUnLFxuXHRcdGRlbGV0ZUhpbnQ6ICdEZWxldGUgJXMnLFxuXHRcdHVuZGVsZXRlU2hvcnQ6ICd1bicsXG5cdFx0VW5kZWxldGVIaW50OiAnU2hvdyB0aGUgZGVsZXRpb24gaGlzdG9yeSBmb3IgJXMnLFxuXHRcdHByb3RlY3Q6ICdwcm90ZWN0Jyxcblx0XHRwcm90ZWN0SGludDogJ1Jlc3RyaWN0IGVkaXRpbmcgcmlnaHRzIHRvICVzJyxcblx0XHR1bnByb3RlY3RTaG9ydDogJ3VuJyxcblx0XHR1bnByb3RlY3RIaW50OiAnQWxsb3cgJXMgdG8gYmUgZWRpdGVkIGJ5IGFueW9uZSBhZ2FpbicsXG5cdFx0J3NlbmQgdGhhbmtzJzogJ3NlbmQgdGhhbmtzJyxcblx0XHRUaGFua3NIaW50OiAnU2VuZCBhIHRoYW5rIHlvdSBub3RpZmljYXRpb24gdG8gdGhpcyB1c2VyJyxcblx0XHRtb3ZlOiAnbW92ZScsXG5cdFx0J21vdmUgcGFnZSc6ICdtb3ZlIHBhZ2UnLFxuXHRcdE1vdmVwYWdlSGludDogJ0NoYW5nZSB0aGUgdGl0bGUgb2YgJXMnLFxuXHRcdGVkaXQ6ICdlZGl0Jyxcblx0XHQnZWRpdCBhcnRpY2xlJzogJ2VkaXQgYXJ0aWNsZScsXG5cdFx0ZWRpdEhpbnQ6ICdDaGFuZ2UgdGhlIGNvbnRlbnQgb2YgJXMnLFxuXHRcdCdlZGl0IHRhbGsnOiAnZWRpdCB0YWxrJyxcblx0XHRuZXc6ICduZXcnLFxuXHRcdCduZXcgdG9waWMnOiAnbmV3IHRvcGljJyxcblx0XHRuZXdTZWN0aW9uSGludDogJ1N0YXJ0IGEgbmV3IHNlY3Rpb24gb24gJXMnLFxuXHRcdCdudWxsIGVkaXQnOiAnbnVsbCBlZGl0Jyxcblx0XHRudWxsRWRpdEhpbnQ6ICdTdWJtaXQgYW4gZWRpdCB0byAlcywgbWFraW5nIG5vIGNoYW5nZXMgJyxcblx0XHRoaXN0OiAnaGlzdCcsXG5cdFx0aGlzdG9yeTogJ2hpc3RvcnknLFxuXHRcdGhpc3RvcnlIaW50OiAnTGlzdCB0aGUgY2hhbmdlcyBtYWRlIHRvICVzJyxcblx0XHRsYXN0OiAncHJldicsXG5cdFx0bGFzdEVkaXQ6ICdsYXN0RWRpdCcsXG5cdFx0J21hcmsgcGF0cm9sbGVkJzogJ21hcmsgcGF0cm9sbGVkJyxcblx0XHRtYXJrcGF0cm9sbGVkSGludDogJ01hcmsgdGhpcyBlZGl0IGFzIHBhdHJvbGxlZCcsXG5cdFx0J0NvdWxkIG5vdCBtYXJrZWQgdGhpcyBlZGl0IGFzIHBhdHJvbGxlZCc6ICdDb3VsZCBub3QgbWFya2VkIHRoaXMgZWRpdCBhcyBwYXRyb2xsZWQnLFxuXHRcdCdzaG93IGxhc3QgZWRpdCc6ICdtb3N0IHJlY2VudCBlZGl0Jyxcblx0XHQnU2hvdyB0aGUgbGFzdCBlZGl0JzogJ1Nob3cgdGhlIGVmZmVjdHMgb2YgdGhlIG1vc3QgcmVjZW50IGNoYW5nZScsXG5cdFx0bGFzdENvbnRyaWI6ICdsYXN0Q29udHJpYicsXG5cdFx0J2xhc3Qgc2V0IG9mIGVkaXRzJzogJ2xhdGVzdCBlZGl0cycsXG5cdFx0bGFzdENvbnRyaWJIaW50OiAnU2hvdyB0aGUgbmV0IGVmZmVjdCBvZiBjaGFuZ2VzIG1hZGUgYnkgdGhlIGxhc3QgZWRpdG9yJyxcblx0XHRjdXI6ICdjdXInLFxuXHRcdGRpZmZDdXI6ICdkaWZmQ3VyJyxcblx0XHQnU2hvdyBjaGFuZ2VzIHNpbmNlIHJldmlzaW9uICVzJzogJ1Nob3cgY2hhbmdlcyBzaW5jZSByZXZpc2lvbiAlcycsXG5cdFx0JyVzIG9sZCc6ICclcyBvbGQnLFxuXHRcdG9sZEVkaXQ6ICdvbGRFZGl0Jyxcblx0XHRwdXJnZTogJ3B1cmdlJyxcblx0XHRwdXJnZUhpbnQ6ICdEZW1hbmQgYSBmcmVzaCBjb3B5IG9mICVzJyxcblx0XHRyYXc6ICdzb3VyY2UnLFxuXHRcdHJhd0hpbnQ6ICdEb3dubG9hZCB0aGUgc291cmNlIG9mICVzJyxcblx0XHRyZW5kZXI6ICdzaW1wbGUnLFxuXHRcdHJlbmRlckhpbnQ6ICdTaG93IGEgcGxhaW4gSFRNTCB2ZXJzaW9uIG9mICVzJyxcblx0XHQnU2hvdyB0aGUgZWRpdCBtYWRlIHRvIGdldCByZXZpc2lvbic6ICdTaG93IHRoZSBlZGl0IG1hZGUgdG8gZ2V0IHJldmlzaW9uJyxcblx0XHRzaW5jZU1lOiAnc2luY2VNZScsXG5cdFx0J2NoYW5nZXMgc2luY2UgbWluZSc6ICdkaWZmIG15IGVkaXQnLFxuXHRcdHNpbmNlTWVIaW50OiAnU2hvdyBjaGFuZ2VzIHNpbmNlIG15IGxhc3QgZWRpdCcsXG5cdFx0XCJDb3VsZG4ndCBmaW5kIGFuIGVkaXQgYnkgJXNcXG5pbiB0aGUgbGFzdCAlcyBlZGl0cyB0b1xcbiVzXCI6XG5cdFx0XHRcIkNvdWxkbid0IGZpbmQgYW4gZWRpdCBieSAlc1xcbmluIHRoZSBsYXN0ICVzIGVkaXRzIHRvXFxuJXNcIixcblx0XHRlZHM6ICdlZHMnLFxuXHRcdGVkaXRvcnM6ICdlZGl0b3JzJyxcblx0XHRlZGl0b3JMaXN0SGludDogJ0xpc3QgdGhlIHVzZXJzIHdobyBoYXZlIGVkaXRlZCAlcycsXG5cdFx0cmVsYXRlZDogJ3JlbGF0ZWQnLFxuXHRcdHJlbGF0ZWRDaGFuZ2VzOiAncmVsYXRlZENoYW5nZXMnLFxuXHRcdCdyZWxhdGVkIGNoYW5nZXMnOiAncmVsYXRlZCBjaGFuZ2VzJyxcblx0XHRSZWNlbnRjaGFuZ2VzbGlua2VkSGludDogJ1Nob3cgY2hhbmdlcyBpbiBhcnRpY2xlcyByZWxhdGVkIHRvICVzJyxcblx0XHRlZGl0T2xkOiAnZWRpdE9sZCcsXG5cdFx0cnY6ICdydicsXG5cdFx0cmV2ZXJ0OiAncmV2ZXJ0Jyxcblx0XHRyZXZlcnRIaW50OiAnUmV2ZXJ0IHRvICVzJyxcblx0XHRkZWZhdWx0cG9wdXBSZXZpZXdlZFN1bW1hcnk6XG5cdFx0XHQnQWNjZXB0ZWQgYnkgcmV2aWV3aW5nIHRoZSBbW1NwZWNpYWw6ZGlmZi8lcy8lc3xkaWZmZXJlbmNlXV0gYmV0d2VlbiB0aGlzIHZlcnNpb24gYW5kIHByZXZpb3VzbHkgYWNjZXB0ZWQgdmVyc2lvbiB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBSZWRsaW5rU3VtbWFyeTpcblx0XHRcdCdSZW1vdmluZyBsaW5rIHRvIGVtcHR5IHBhZ2UgW1slc11dIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cEZpeERhYnNTdW1tYXJ5OlxuXHRcdFx0J0Rpc2FtYmlndWF0ZSBbWyVzXV0gdG8gW1slc11dIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cEZpeFJlZGlyc1N1bW1hcnk6XG5cdFx0XHQnUmVkaXJlY3QgYnlwYXNzIGZyb20gW1slc11dIHRvIFtbJXNdXSB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBFeHRlbmRlZFJldmVydFN1bW1hcnk6XG5cdFx0XHQnUmV2ZXJ0IHRvIHJldmlzaW9uIGRhdGVkICVzIGJ5ICVzLCBvbGRpZCAlcyB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeTpcblx0XHRcdCdSZXZlcnQgdG8gdGhlIHJldmlzaW9uIHByaW9yIHRvIHJldmlzaW9uICVzIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cFJldmVydFN1bW1hcnk6ICdSZXZlcnQgdG8gcmV2aXNpb24gJXMgdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwUXVlcmllZFJldmVydFRvUHJldmlvdXNTdW1tYXJ5OlxuXHRcdFx0J1JldmVydCB0byB0aGUgcmV2aXNpb24gcHJpb3IgdG8gcmV2aXNpb24gJDEgZGF0ZWQgJDIgYnkgJDMgdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwUXVlcmllZFJldmVydFN1bW1hcnk6XG5cdFx0XHQnUmV2ZXJ0IHRvIHJldmlzaW9uICQxIGRhdGVkICQyIGJ5ICQzIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cFJtRGFiTGlua1N1bW1hcnk6XG5cdFx0XHQnUmVtb3ZlIGxpbmsgdG8gZGFiIHBhZ2UgW1slc11dIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdFJlZGlyZWN0czogJ1JlZGlyZWN0cycsXG5cdFx0JyB0byAnOiAnIHRvICcsXG5cdFx0J0J5cGFzcyByZWRpcmVjdCc6ICdCeXBhc3MgcmVkaXJlY3QnLFxuXHRcdCdGaXggdGhpcyByZWRpcmVjdCc6ICdGaXggdGhpcyByZWRpcmVjdCcsXG5cdFx0ZGlzYW1iaWc6ICdkaXNhbWJpZycsXG5cdFx0ZGlzYW1iaWdIaW50OiAnRGlzYW1iaWd1YXRlIHRoaXMgbGluayB0byBbWyVzXV0nLFxuXHRcdCdDbGljayB0byBkaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvOic6ICdDbGljayB0byBkaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvOicsXG5cdFx0J3JlbW92ZSB0aGlzIGxpbmsnOiAncmVtb3ZlIHRoaXMgbGluaycsXG5cdFx0J3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJzogJ3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJyxcblx0XHQncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIGRpc2FtYmlnIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnOlxuXHRcdFx0J3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBkaXNhbWJpZyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJyxcblx0XHRtYWlubGluazogJ21haW5saW5rJyxcblx0XHR3aWtpTGluazogJ3dpa2lMaW5rJyxcblx0XHR3aWtpTGlua3M6ICd3aWtpTGlua3MnLFxuXHRcdCdsaW5rcyBoZXJlJzogJ2xpbmtzIGhlcmUnLFxuXHRcdHdoYXRMaW5rc0hlcmU6ICd3aGF0TGlua3NIZXJlJyxcblx0XHQnd2hhdCBsaW5rcyBoZXJlJzogJ3doYXQgbGlua3MgaGVyZScsXG5cdFx0V2hhdGxpbmtzaGVyZUhpbnQ6ICdMaXN0IHRoZSBwYWdlcyB0aGF0IGFyZSBoeXBlcmxpbmtlZCB0byAlcycsXG5cdFx0dW53YXRjaFNob3J0OiAndW4nLFxuXHRcdHdhdGNoVGhpbmd5OiAnd2F0Y2gnLFxuXHRcdHdhdGNoSGludDogJ0FkZCAlcyB0byBteSB3YXRjaGxpc3QnLFxuXHRcdHVud2F0Y2hIaW50OiAnUmVtb3ZlICVzIGZyb20gbXkgd2F0Y2hsaXN0Jyxcblx0XHQnT25seSBmb3VuZCBvbmUgZWRpdG9yOiAlcyBtYWRlICVzIGVkaXRzJzogJ09ubHkgZm91bmQgb25lIGVkaXRvcjogJXMgbWFkZSAlcyBlZGl0cycsXG5cdFx0JyVzIHNlZW1zIHRvIGJlIHRoZSBsYXN0IGVkaXRvciB0byB0aGUgcGFnZSAlcyc6ICclcyBzZWVtcyB0byBiZSB0aGUgbGFzdCBlZGl0b3IgdG8gdGhlIHBhZ2UgJXMnLFxuXHRcdHJzczogJ3JzcycsXG5cdFx0Ly8gZGlmZiBwcmV2aWV3c1xuXHRcdCdEaWZmIHRydW5jYXRlZCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucyc6ICdEaWZmIHRydW5jYXRlZCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucycsXG5cdFx0J09sZCByZXZpc2lvbic6ICdPbGQgcmV2aXNpb24nLFxuXHRcdCdOZXcgcmV2aXNpb24nOiAnTmV3IHJldmlzaW9uJyxcblx0XHQnU29tZXRoaW5nIHdlbnQgd3JvbmcgOi0oJzogJ1NvbWV0aGluZyB3ZW50IHdyb25nIDotKCcsXG5cdFx0J0VtcHR5IHJldmlzaW9uLCBtYXliZSBub24tZXhpc3RlbnQnOiAnRW1wdHkgcmV2aXNpb24sIG1heWJlIG5vbi1leGlzdGVudCcsXG5cdFx0J1Vua25vd24gZGF0ZSc6ICdVbmtub3duIGRhdGUnLFxuXHRcdC8vIG90aGVyIHNwZWNpYWwgcHJldmlld3Ncblx0XHQnRW1wdHkgY2F0ZWdvcnknOiAnRW1wdHkgY2F0ZWdvcnknLFxuXHRcdCdDYXRlZ29yeSBtZW1iZXJzICglcyBzaG93biknOiAnQ2F0ZWdvcnkgbWVtYmVycyAoJXMgc2hvd24pJyxcblx0XHQnTm8gaW1hZ2UgbGlua3MgZm91bmQnOiAnTm8gaW1hZ2UgbGlua3MgZm91bmQnLFxuXHRcdCdGaWxlIGxpbmtzJzogJ0ZpbGUgbGlua3MnLFxuXHRcdCdObyBpbWFnZSBmb3VuZCc6ICdObyBpbWFnZSBmb3VuZCcsXG5cdFx0J0ltYWdlIGZyb20gQ29tbW9ucyc6ICdJbWFnZSBmcm9tIENvbW1vbnMnLFxuXHRcdCdEZXNjcmlwdGlvbiBwYWdlJzogJ0Rlc2NyaXB0aW9uIHBhZ2UnLFxuXHRcdCdBbHQgdGV4dDonOiAnQWx0IHRleHQ6Jyxcblx0XHRyZXZkZWw6ICdIaWRkZW4gcmV2aXNpb24nLFxuXHRcdC8vIHVzZXItcmVsYXRlZCBhY3Rpb25zIGFuZCBpbmZvXG5cdFx0dXNlcjogJ3VzZXInLFxuXHRcdCd1c2VyJm5ic3A7cGFnZSc6ICd1c2VyJm5ic3A7cGFnZScsXG5cdFx0J3VzZXIgdGFsayc6ICd1c2VyIHRhbGsnLFxuXHRcdCdlZGl0IHVzZXIgdGFsayc6ICdlZGl0IHVzZXIgdGFsaycsXG5cdFx0J2xlYXZlIGNvbW1lbnQnOiAnbGVhdmUgY29tbWVudCcsXG5cdFx0ZW1haWw6ICdlbWFpbCcsXG5cdFx0J2VtYWlsIHVzZXInOiAnZW1haWwgdXNlcicsXG5cdFx0RW1haWx1c2VySGludDogJ1NlbmQgYW4gZW1haWwgdG8gJXMnLFxuXHRcdHNwYWNlOiAnc3BhY2UnLFxuXHRcdFByZWZpeEluZGV4SGludDogJ1Nob3cgcGFnZXMgaW4gdGhlIHVzZXJzcGFjZSBvZiAlcycsXG5cdFx0Y291bnQ6ICdjb3VudCcsXG5cdFx0J2VkaXQgY291bnRlcic6ICdlZGl0IGNvdW50ZXInLFxuXHRcdGVkaXRDb3VudGVyTGlua0hpbnQ6ICdDb3VudCB0aGUgY29udHJpYnV0aW9ucyBtYWRlIGJ5ICVzJyxcblx0XHRjb250cmliczogJ2NvbnRyaWJzJyxcblx0XHRjb250cmlidXRpb25zOiAnY29udHJpYnV0aW9ucycsXG5cdFx0ZGVsZXRlZENvbnRyaWJzOiAnZGVsZXRlZCBjb250cmlidXRpb25zJyxcblx0XHREZWxldGVkY29udHJpYnV0aW9uc0hpbnQ6ICdMaXN0IGRlbGV0ZWQgZWRpdHMgbWFkZSBieSAlcycsXG5cdFx0Q29udHJpYnV0aW9uc0hpbnQ6ICdMaXN0IHRoZSBjb250cmlidXRpb25zIG1hZGUgYnkgJXMnLFxuXHRcdGxvZzogJ2xvZycsXG5cdFx0J3VzZXIgbG9nJzogJ3VzZXIgbG9nJyxcblx0XHR1c2VyTG9nSGludDogXCJTaG93ICVzJ3MgdXNlciBsb2dcIixcblx0XHRhcmluOiAnQVJJTiBsb29rdXAnLFxuXHRcdCdMb29rIHVwICVzIGluIEFSSU4gd2hvaXMgZGF0YWJhc2UnOiAnTG9vayB1cCAlcyBpbiB0aGUgQVJJTiB3aG9pcyBkYXRhYmFzZScsXG5cdFx0dW5ibG9ja1Nob3J0OiAndW4nLFxuXHRcdGJsb2NrOiAnYmxvY2snLFxuXHRcdCdibG9jayB1c2VyJzogJ2Jsb2NrIHVzZXInLFxuXHRcdElwYmxvY2tsaXN0SGludDogJ1VuYmxvY2sgJXMnLFxuXHRcdEJsb2NraXBIaW50OiAnUHJldmVudCAlcyBmcm9tIGVkaXRpbmcnLFxuXHRcdCdibG9jayBsb2cnOiAnYmxvY2sgbG9nJyxcblx0XHRibG9ja0xvZ0hpbnQ6ICdTaG93IHRoZSBibG9jayBsb2cgZm9yICVzJyxcblx0XHRwcm90ZWN0TG9nSGludDogJ1Nob3cgdGhlIHByb3RlY3Rpb24gbG9nIGZvciAlcycsXG5cdFx0cGFnZUxvZ0hpbnQ6ICdTaG93IHRoZSBwYWdlIGxvZyBmb3IgJXMnLFxuXHRcdGRlbGV0ZUxvZ0hpbnQ6ICdTaG93IHRoZSBkZWxldGlvbiBsb2cgZm9yICVzJyxcblx0XHQnSW52YWxpZCAlcyAlcyc6ICdUaGUgb3B0aW9uICVzIGlzIGludmFsaWQ6ICVzJyxcblx0XHQnTm8gYmFja2xpbmtzIGZvdW5kJzogJ05vIGJhY2tsaW5rcyBmb3VuZCcsXG5cdFx0JyBhbmQgbW9yZSc6ICcgYW5kIG1vcmUnLFxuXHRcdHVuZG86ICd1bmRvJyxcblx0XHR1bmRvSGludDogJ3VuZG8gdGhpcyBlZGl0Jyxcblx0XHQnRG93bmxvYWQgcHJldmlldyBkYXRhJzogJ0Rvd25sb2FkIHByZXZpZXcgZGF0YScsXG5cdFx0J0ludmFsaWQgb3IgSVAgdXNlcic6ICdJbnZhbGlkIG9yIElQIHVzZXInLFxuXHRcdCdOb3QgYSByZWdpc3RlcmVkIHVzZXJuYW1lJzogJ05vdCBhIHJlZ2lzdGVyZWQgdXNlcm5hbWUnLFxuXHRcdEJMT0NLRUQ6ICdCTE9DS0VEJyxcblx0XHQnSGFzIGJsb2Nrcyc6ICdIYXMgYmxvY2tzJyxcblx0XHQnIGVkaXRzIHNpbmNlOiAnOiAnIGVkaXRzIHNpbmNlOiAnLFxuXHRcdCdsYXN0IGVkaXQgb24gJzogJ2xhc3QgZWRpdCBvbiAnLFxuXHRcdCdoZS9oaW0nOiAnaGUvaGltJyxcblx0XHQnc2hlL2hlcic6ICdzaGUvaGVyJyxcblx0XHQvLyBBdXRvZWRpdGluZ1xuXHRcdCdFbnRlciBhIG5vbi1lbXB0eSBlZGl0IHN1bW1hcnkgb3IgcHJlc3MgY2FuY2VsIHRvIGFib3J0Jzpcblx0XHRcdCdFbnRlciBhIG5vbi1lbXB0eSBlZGl0IHN1bW1hcnkgb3IgcHJlc3MgY2FuY2VsIHRvIGFib3J0Jyxcblx0XHQnRmFpbGVkIHRvIGdldCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgcGxlYXNlIGVkaXQgbWFudWFsbHkuXFxuXFxuJzpcblx0XHRcdCdGYWlsZWQgdG8gZ2V0IHJldmlzaW9uIGluZm9ybWF0aW9uLCBwbGVhc2UgZWRpdCBtYW51YWxseS5cXG5cXG4nLFxuXHRcdCdUaGUgJXMgYnV0dG9uIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgY2xpY2tlZC4gUGxlYXNlIHdhaXQgZm9yIHRoZSBuZXh0IHBhZ2UgdG8gbG9hZC4nOlxuXHRcdFx0J1RoZSAlcyBidXR0b24gaGFzIGJlZW4gYXV0b21hdGljYWxseSBjbGlja2VkLiBQbGVhc2Ugd2FpdCBmb3IgdGhlIG5leHQgcGFnZSB0byBsb2FkLicsXG5cdFx0J0NvdWxkIG5vdCBmaW5kIGJ1dHRvbiAlcy4gUGxlYXNlIGNoZWNrIHRoZSBzZXR0aW5ncyBpbiB5b3VyIGphdmFzY3JpcHQgZmlsZS4nOlxuXHRcdFx0J0NvdWxkIG5vdCBmaW5kIGJ1dHRvbiAlcy4gUGxlYXNlIGNoZWNrIHRoZSBzZXR0aW5ncyBpbiB5b3VyIGphdmFzY3JpcHQgZmlsZS4nLFxuXHRcdC8vIFBvcHVwcyBzZXR1cFxuXHRcdCdPcGVuIGZ1bGwtc2l6ZSBpbWFnZSc6ICdPcGVuIGZ1bGwtc2l6ZSBpbWFnZScsXG5cdFx0YXV0b2VkaXRfdmVyc2lvbjogJ25wMjAxNDA0MTYnLFxuXHR9O1xuXHRjb25zdCBwb3B1cFN0cmluZyA9IChzdHIpID0+IHtcblx0XHRpZiAobWVzc2FnZSAhPT0gdW5kZWZpbmVkICYmIG1lc3NhZ2UgJiYgbWVzc2FnZVtzdHJdKSB7XG5cdFx0XHRyZXR1cm4gbWVzc2FnZVtzdHJdO1xuXHRcdH1cblx0XHRpZiAocGcuc3RyaW5nW3N0cl0pIHtcblx0XHRcdHJldHVybiBwZy5zdHJpbmdbc3RyXTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0cjtcblx0fTtcblx0Y29uc3QgdHByaW50ZiA9IChzdHIsIHN1YnMpID0+IHtcblx0XHRpZiAodHlwZW9mIHN1YnMgIT09IHR5cGVvZiBbXSkge1xuXHRcdFx0c3VicyA9IFtzdWJzXTtcblx0XHR9XG5cdFx0cmV0dXJuIHNpbXBsZVByaW50Zihwb3B1cFN0cmluZyhzdHIpLCBzdWJzKTtcblx0fTtcblx0Ly8gRU5ERklMRTogc3RyaW5ncy5qc1xuXHQvLyBTVEFSVEZJTEU6IHJ1bi5qc1xuXHQvLyBSdW4gdGhpbmdzXG5cdC8vIEZvciBzb21lIHJlYXNvbiBwb3B1cHMgcmVxdWlyZXMgYSBmdWxseSBsb2FkZWQgcGFnZSBqUXVlcnkucmVhZHkoLi4uKSBjYXVzZXMgcHJvYmxlbXMgZm9yIHNvbWUuXG5cdC8vIFRoZSBvbGQgYWRkT25sb2FkSG9vayBkaWQgc29tZXRoaW5nIHNpbWlsYXIgdG8gdGhlIGJlbG93XG5cdGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG5cdFx0YXV0b0VkaXQoKTtcblx0fSBlbHNlIHtcblx0XHQvLyB3aWxsIHNldHVwIHBvcHVwc1xuXHRcdCQod2luZG93KS5vbignbG9hZCcsIGF1dG9FZGl0KTtcblx0fVxuXHQvLyBTdXBwb3J0IGZvciBNZWRpYVdpa2kncyBsaXZlIHByZXZpZXcsIFZpc3VhbEVkaXRvcidzIHNhdmVzIGFuZCBFY2hvJ3MgZmx5b3V0LlxuXHQoKCkgPT4ge1xuXHRcdGxldCBvbmNlID0gdHJ1ZTtcblx0XHRjb25zdCBkeW5hbWljQ29udGVudEhhbmRsZXIgPSAoJGNvbnRlbnQpID0+IHtcblx0XHRcdC8vIFRyeSB0byBkZXRlY3QgdGhlIGhvb2sgZmlyZWQgb24gaW5pdGlhbCBwYWdlIGxvYWQgYW5kIGRpc3JlZ2FyZFxuXHRcdFx0Ly8gaXQsIHdlIGFscmVhZHkgaG9vayB0byBvbmxvYWQgKHBvc3NpYmx5IHRvIGRpZmZlcmVudCBwYXJ0cyBvZlxuXHRcdFx0Ly8gcGFnZSAtIGl0J3MgY29uZmlndXJhYmxlKSBhbmQgcnVubmluZyB0d2ljZSBtaWdodCBiZSBiYWQuIFVnbHkuLi5cblx0XHRcdGlmICgkY29udGVudC5hdHRyKCdpZCcpID09PSAnbXctY29udGVudC10ZXh0JyAmJiBvbmNlKSB7XG5cdFx0XHRcdG9uY2UgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVnaXN0ZXJIb29rc0ZvclZpc2libGVOYXZwb3BzID0gKCkgPT4ge1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgcGcuY3VycmVudC5saW5rcyAmJiBpIDwgcGcuY3VycmVudC5saW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGNvbnN0IG5hdnBvcCA9IHBnLmN1cnJlbnQubGlua3NbaV0ubmF2cG9wdXA7XG5cdFx0XHRcdFx0aWYgKCFuYXZwb3AgfHwgIW5hdnBvcC5pc1Zpc2libGUoKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdE5hdnBvcHVwLnRyYWNrZXIuYWRkSG9vayhwb3NDaGVja2VySG9vayhuYXZwb3ApKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGRvSXQgPSAoKSA9PiB7XG5cdFx0XHRcdHJlZ2lzdGVySG9va3NGb3JWaXNpYmxlTmF2cG9wcygpO1xuXHRcdFx0XHQkY29udGVudC5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRlbGVtZW50LnJhblNldHVwVG9vbHRpcHNBbHJlYWR5ID0gZmFsc2U7XG5cdFx0XHRcdFx0c2V0dXBUb29sdGlwcyhlbGVtZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0c2V0dXBQb3B1cHMoZG9JdCk7XG5cdFx0fTtcblx0XHQvLyBUaGlzIGhvb2sgaXMgYWxzbyBmaXJlZCBhZnRlciBwYWdlIGxvYWQuXG5cdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChkeW5hbWljQ29udGVudEhhbmRsZXIpO1xuXHRcdG13Lmhvb2soJ2V4dC5lY2hvLm92ZXJsYXkuYmVmb3JlU2hvd2luZ092ZXJsYXknKS5hZGQoKCRvdmVybGF5KSA9PiB7XG5cdFx0XHRkeW5hbWljQ29udGVudEhhbmRsZXIoJG92ZXJsYXkuZmluZCgnLm13LWVjaG8tc3RhdGUnKSk7XG5cdFx0fSk7XG5cdH0pKCk7XG5cdC8vIEVOREZJTEU6IHJ1bi5qc1xufTtcblxuZXhwb3J0IHtwb3B1cHN9O1xuIiwgImltcG9ydCAnLi9OYXZpZ2F0aW9uX3BvcHVwcy5sZXNzJztcbmltcG9ydCB7cG9wdXBzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbiQocG9wdXBzKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFZO0FBQ2xDQSxrQkFBUXJULDBCQUEwQjtBQUNsQ2Isd0JBQWNrVSxPQUFPO1FBQ3RCLENBQUM7TUFDRjtBQUNBOEIsa0JBQVkraEMsSUFBSTtJQUNqQjtBQUVBcmlDLE9BQUd5d0IsS0FBSyxrQkFBa0IsRUFBRStSLElBQUlOLHFCQUFxQjtBQUNyRGxpQyxPQUFHeXdCLEtBQUssdUNBQXVDLEVBQUUrUixJQUFLQyxjQUFhO0FBQ2xFUCw0QkFBc0JPLFNBQVM3dUIsS0FBSyxnQkFBZ0IsQ0FBQztJQUN0RCxDQUFDO0VBQ0YsR0FBRztBQUVKOztBQ2orUEFELEVBQUV2cUIsTUFBTTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgIm1lc3NhZ2UiLCAiYXJ0aWNsZSIsICJ3aW5kb3ciLCAid2dVTFMiLCAiY2F0ZWdvcnkiLCAiY2F0ZWdvcmllcyIsICJpbWFnZSIsICJpbWFnZXMiLCAic3R1YiIsICJrQiIsICJieXRlcyIsICJkYXkiLCAiZGF5cyIsICJob3VyIiwgImhvdXJzIiwgIm1pbnV0ZSIsICJtaW51dGVzIiwgInNlY29uZCIsICJzZWNvbmRzIiwgIndlZWsiLCAid2Vla3MiLCAibW9udGgiLCAibW9udGhzIiwgInllYXIiLCAieWVhcnMiLCAic2VhcmNoIiwgIlNlYXJjaEhpbnQiLCAid2ViIiwgImdsb2JhbCIsICJhY3Rpb25zIiwgInBvcHVwc01lbnUiLCAidG9nZ2xlUHJldmlld3NIaW50IiwgInJlc2V0IiwgImRpc2FibGUiLCAiZGlzYWJsZVBvcHVwc0hpbnQiLCAicHVyZ2VQb3B1cHNIaW50IiwgIlBvcHVwc0hpbnQiLCAic3BhY2ViYXIiLCAidmlldyIsICJ2aWV3SGludCIsICJ0YWxrIiwgImRlbCIsICJkZWxldGUiLCAiZGVsZXRlSGludCIsICJ1bmRlbGV0ZVNob3J0IiwgIlVuZGVsZXRlSGludCIsICJwcm90ZWN0IiwgInByb3RlY3RIaW50IiwgInVucHJvdGVjdFNob3J0IiwgInVucHJvdGVjdEhpbnQiLCAibW92ZSIsICJNb3ZlcGFnZUhpbnQiLCAiZWRpdCIsICJlZGl0SGludCIsICJuZXciLCAibmV3U2VjdGlvbkhpbnQiLCAibnVsbEVkaXRIaW50IiwgImhpc3QiLCAiaGlzdG9yeSIsICJoaXN0b3J5SGludCIsICJsYXN0IiwgImxhc3RFZGl0IiwgImxhc3RDb250cmliIiwgImxhc3RDb250cmliSGludCIsICJjdXIiLCAiZGlmZkN1ciIsICJvbGRFZGl0IiwgInB1cmdlIiwgInB1cmdlSGludCIsICJyYXciLCAicmF3SGludCIsICJyZW5kZXIiLCAicmVuZGVySGludCIsICJzaW5jZU1lIiwgInNpbmNlTWVIaW50IiwgImVkcyIsICJlZGl0b3JzIiwgImVkaXRvckxpc3RIaW50IiwgInJlbGF0ZWQiLCAicmVsYXRlZENoYW5nZXMiLCAiUmVjZW50Y2hhbmdlc2xpbmtlZEhpbnQiLCAiZWRpdE9sZCIsICJydiIsICJyZXZlcnQiLCAicmV2ZXJ0SGludCIsICJ1bmRvIiwgInVuZG9IaW50IiwgImRlZmF1bHRwb3B1cFJlZGxpbmtTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cEZpeERhYnNTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cEZpeFJlZGlyc1N1bW1hcnkiLCAiZGVmYXVsdHBvcHVwRXh0ZW5kZWRSZXZlcnRTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFJldmVydFRvUHJldmlvdXNTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFJldmVydFN1bW1hcnkiLCAiZGVmYXVsdHBvcHVwUXVlcmllZFJldmVydFRvUHJldmlvdXNTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFJtRGFiTGlua1N1bW1hcnkiLCAiUmVkaXJlY3RzIiwgImRpc2FtYmlnIiwgImRpc2FtYmlnSGludCIsICJtYWlubGluayIsICJ3aWtpTGluayIsICJ3aWtpTGlua3MiLCAid2hhdExpbmtzSGVyZSIsICJXaGF0bGlua3NoZXJlSGludCIsICJ1bndhdGNoU2hvcnQiLCAid2F0Y2hUaGluZ3kiLCAid2F0Y2hIaW50IiwgInVud2F0Y2hIaW50IiwgInJzcyIsICJ1c2VyIiwgImVtYWlsIiwgIkVtYWlsdXNlckhpbnQiLCAic3BhY2UiLCAiUHJlZml4aW5kZXhIaW50IiwgImNvdW50IiwgImthdGVsaW5rSGludCIsICJjb250cmlicyIsICJjb250cmlidXRpb25zIiwgImRlbGV0ZWRDb250cmlicyIsICJDb250cmlidXRpb25zSGludCIsICJ0cmVlIiwgImNvbnRyaWJzVHJlZUhpbnQiLCAibG9nIiwgInVzZXJMb2dIaW50IiwgInVuYmxvY2tTaG9ydCIsICJibG9jayIsICJJcGJsb2NrbGlzdEhpbnQiLCAiQmxvY2tpcEhpbnQiLCAiYmxvY2tMb2dIaW50IiwgInByb3RlY3RMb2dIaW50IiwgInBhZ2VMb2dIaW50IiwgImRlbGV0ZUxvZ0hpbnQiLCAibSIsICJiaW5nU2VhcmNoSGludCIsICJoaXN0b3J5ZmVlZEhpbnQiLCAiVGhhbmtzSGludCIsICJtYXJrcGF0cm9sbGVkSGludCIsICJkZWZhdWx0cG9wdXBSZXZpZXdlZFN1bW1hcnkiLCAicmV2ZGVsIiwgIkRlbGV0ZWRjb250cmlidXRpb25zSGludCIsICJCTE9DS0VEIiwgIkVtYWlsVXNlckhpbnQiLCAiUkFOR0VCTE9DS0VEIiwgIkhJRERFTiIsICJMT0NLRUQiLCAiZGlmZiIsICJhdXRvZWRpdF92ZXJzaW9uIiwgIlByZWZpeEluZGV4SGludCIsICJudWxsRWRpdFN1bW1hcnkiLCAic2VwYXJhdG9yIiwgImNvbW1hIiwgInBvcHVwcyIsICJwZyIsICJyZSIsICJucyIsICJzdHJpbmciLCAid2lraSIsICJtaXNjIiwgIm9wdGlvbiIsICJvcHRpb25EZWZhdWx0IiwgImZsYWciLCAiY2FjaGUiLCAic3RydWN0dXJlcyIsICJ0aW1lciIsICJjb3VudGVyIiwgImN1cnJlbnQiLCAiZm4iLCAiZW5kb2ZsaXN0IiwgIkhUTUxFbGVtZW50IiwgInNldHVwVG9vbHRpcHMiLCAiY29udGFpbmVyIiwgInJlbW92ZSIsICJmb3JjZSIsICJwb3BEYXRhIiwgImNvbmNhdCIsICJnZXRWYWx1ZU9mIiwgImRvY3VtZW50IiwgImVkaXRmb3JtIiwgIndwVGV4dGJveDEiLCAib25tb3VzZXVwIiwgImRvU2VsZWN0aW9uUG9wdXAiLCAiZGVmYXVsdFBvcHVwc0NvbnRhaW5lciIsICJyYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSIsICJhbmNob3JzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAic2V0dXBUb29sdGlwc0xvb3AiLCAicXVlcnlTZWxlY3RvciIsICJzZXR1cFRvb2x0aXBzTG9vcDIiLCAiYmVnaW4iLCAiaG93bWFueSIsICJzbGVlcCIsICJhcmdzIiwgInNpbXBsZVByaW50ZiIsICJmaW5pc2giLCAibG9vcGVuZCIsICJNYXRoIiwgIm1pbiIsICJsZW5ndGgiLCAiaiIsICJkb1Rvb2x0aXAiLCAicmVtb3ZlVG9vbHRpcCIsICJhZGRUb29sdGlwIiwgImEiLCAiaHJlZiIsICJzZXRUaW1lb3V0IiwgInJtVG9jVG9vbHRpcHMiLCAiZmluaXNoZWRMb2FkaW5nIiwgInRvYyIsICJ0b2NMaW5rcyIsICJ0b2NMZW4iLCAiaXNQb3B1cExpbmsiLCAib25tb3VzZW92ZXIiLCAibW91c2VPdmVyV2lraUxpbmsiLCAib25tb3VzZW91dCIsICJtb3VzZU91dFdpa2lMaW5rIiwgIm9ubW91c2Vkb3duIiwgImtpbGxQb3B1cCIsICJoYXNQb3B1cCIsICJvcmlnaW5hbFRpdGxlIiwgInRpdGxlIiwgInJlbW92ZVRpdGxlIiwgInJlc3RvcmVUaXRsZSIsICJyZWdpc3Rlckhvb2tzIiwgIm5wIiwgInBvcHVwTWF4V2lkdGgiLCAic2V0TWF4V2lkdGgiLCAibWFpbkRpdiIsICJzdHlsZSIsICJtYXhXaWR0aCIsICJhZGRIb29rIiwgImFkZFBvcHVwU2hvcnRjdXRzIiwgInJtUG9wdXBTaG9ydGN1dHMiLCAicmVtb3ZlTW9kaWZpZXJLZXlMaXN0ZW5lciIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgIm1vZGlmaWVyS2V5TGlzdGVuZXIiLCAibW91c2VPdmVyV2lraUxpbmszIiwgImV2dCIsICJldmVudCIsICJhY3Rpb24iLCAia2V5IiwgInNlbGYiLCAiZXZ0MiIsICJtb3VzZU92ZXJXaWtpTGluazIiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJmb290bm90ZVRhcmdldCIsICJhVGl0bGUiLCAiVGl0bGUiLCAiZnJvbUFuY2hvciIsICJhbmNoIiwgImFuY2hvciIsICJ0ZXN0IiwgImxUaXRsZSIsICJmcm9tVVJMIiwgImxvY2F0aW9uIiwgInRvU3RyaW5nIiwgImVsIiwgIm5vZGVOYW1lIiwgIm50IiwgInRvTG93ZXJDYXNlIiwgInBhcmVudE5vZGUiLCAiZm9vdG5vdGVQcmV2aWV3IiwgIngiLCAibmF2cG9wIiwgInNldFBvcHVwSFRNTCIsICJpbm5lckhUTUwiLCAiaWROdW1iZXIiLCAibW9kaWZpZXJQcmVzc2VkIiwgIm1vZCIsICJpc0NvcnJlY3RNb2RpZmllciIsICJfYSIsICJsaW5rIiwgIm5hdnBvcHVwIiwgImlzVmlzaWJsZSIsICJwb3B1cFN0cnVjdHVyZSIsICJzZXREZWZhdWx0IiwgIm5ld05hdnBvcHVwIiwgImxpbmtzSGFzaCIsICJsaW5rcyIsICJwdXNoIiwgInBlbmRpbmciLCAic2ltcGxlUG9wdXBDb250ZW50IiwgInNob3dTb29uSWZTdGFibGUiLCAiZGVsYXkiLCAiY2xlYXJJbnRlcnZhbCIsICJjaGVja1BvcHVwUG9zaXRpb24iLCAic2V0SW50ZXJ2YWwiLCAic2ltcGxlTm9Nb3JlIiwgImQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicyIsICJhcHBlbmQiLCAiZGlzcGxheSIsICJub25zaW1wbGVQb3B1cENvbnRlbnQiLCAicG9wdXBTdHJpbmciLCAiaGFzUG9wdXBNZW51IiwgInNldElubmVySFRNTCIsICJwb3B1cEhUTUwiLCAiZmlsbEVtcHR5U3BhbnMiLCAiZHJhZ0hhbmRsZSIsICJtYWtlRHJhZ2dhYmxlIiwgInBvcHVwUmVkbGlua0hUTUwiLCAiZGVidWdEYXRhIiwgIk5hdnBvcHVwIiwgImZ1enoiLCAicGFyZW50QW5jaG9yIiwgInBhcmVudFBvcHVwIiwgIm93bmVyIiwgInNob3VsZFNob3dOb25TaW1wbGUiLCAic2hvdWxkU2hvdyIsICJkaWZmMiIsICJwYXJhbXMiLCAicGFyc2VQYXJhbXMiLCAib2xkaWQiLCAicmVmZXJlbmNlRWxlbWVudCIsICJsb2FkRGlmZiIsICJsb2FkQVBJUHJldmlldyIsICJiYWNrbGlua3MiLCAibmFtZXNwYWNlSWQiLCAibnNJbWFnZUlkIiwgImFuY2hvckNvbnRhaW5zSW1hZ2UiLCAibG9hZEltYWdlIiwgIm5zQ2F0ZWdvcnlJZCIsICJuc1VzZXJJZCIsICJuc1VzZXJ0YWxrSWQiLCAic3RhcnRBcnRpY2xlUHJldmlldyIsICJwZW5kaW5nTmF2cG9wVGFzayIsICJjb21wbGV0ZWROYXZwb3BUYXNrIiwgInJlZGlyIiwgImxvYWRQcmV2aWV3IiwgIm9yaWdpbmFsQXJ0aWNsZSIsICJsb2FkUHJldmlld0Zyb21SZWRpciIsICJyZWRpck1hdGNoIiwgInRhcmdldCIsICJmcm9tV2lraVRleHQiLCAicmVkaXJUYXJnZXQiLCAid2FyblJlZGlyIiwgInJlZGlyTGluayIsICJpbnNlcnRQcmV2aWV3IiwgImRvd25sb2FkIiwgInJlZGlyZWN0IiwgImV4ZWMiLCAiZGF0YSIsICJ2aXNpYmxlIiwgImluc2VydFByZXZpZXdOb3ciLCAiaWQiLCAid2lraVRleHQiLCAiYXJ0IiwgIm1ha2VGaXhEYWJzIiwgImdldFBhZ2VJbmZvIiwgInNldFBvcHVwVHJhaWxlciIsICJpbWFnZVBhZ2UiLCAiZ2V0VmFsaWRJbWFnZUZyb21XaWtpVGV4dCIsICJpbnNlcnRBcnRpY2xlUHJldmlldyIsICJuc1RlbXBsYXRlSWQiLCAiaCIsICJlbnRpZnkiLCAic3BsaXQiLCAiU3RyaW5nIiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgImpvaW4iLCAiX3RlbXBsYXRlT2JqZWN0MiIsICJwIiwgInByZXBQcmV2aWV3bWFrZXIiLCAic2hvd1ByZXZpZXciLCAiYW5jaG9yaXplIiwgImFuY2hvclN0cmluZyIsICJ1cmxCYXNlIiwgImpvaW5QYXRoIiwgImFydGljbGViYXNlIiwgInVybFN0cmluZyIsICJQcmV2aWV3bWFrZXIiLCAiYW5jaFJlIiwgIlJlZ0V4cCIsICJsaXRlcmFsaXplUmVnZXgiLCAicmVwbGFjZSIsICJtYXRjaCIsICJzbGljZSIsICJtYXgiLCAiaW5kZXhPZiIsICJsaW5lcyIsICJpIiwgImtpbGxQb3B1cDIiLCAiYmFuaXNoIiwgImFib3J0QWxsRG93bmxvYWRzIiwgIkRyYWciLCAiY29uc3RydWN0b3IiLCAic3RhcnRDb25kaXRpb24iLCAiZW5kSG9vayIsICJmaXhFIiwgImUiLCAibGF5ZXJYIiwgIm9mZnNldFgiLCAibGF5ZXJZIiwgIm9mZnNldFkiLCAiaW5pdCIsICJvIiwgIm9Sb290IiwgIm9iaiIsICJzdGFydCIsICJkcmFnZ2luZyIsICJwb3B1cHNfZHJhZ2dhYmxlIiwgImhtb2RlIiwgInZtb2RlIiwgInJvb3QiLCAiTnVtYmVyIiwgImlzTmFOIiwgInBhcnNlSW50IiwgImxlZnQiLCAidG9wIiwgIm9udGhpc1N0YXJ0IiwgIm9udGhpc0VuZCIsICJvbnRoaXMiLCAieSIsICJib3R0b20iLCAicmlnaHQiLCAibGFzdE1vdXNlWCIsICJjbGllbnRYIiwgImxhc3RNb3VzZVkiLCAiY2xpZW50WSIsICJvbm1vdXNlbW92ZURlZmF1bHQiLCAib25tb3VzZW1vdmUiLCAiZTIiLCAiZHJhZyIsICJlbmQiLCAiZXkiLCAiZXgiLCAibngiLCAibnkiLCAib3JpZ2luYWwiLCAicG9wdXBMYXlvdXQiLCAicG9wdXBSZWRpclNwYW5zIiwgInBvcHVwVGl0bGUiLCAibmF2bGlua1N0cmluZ1RvSFRNTCIsICJwb3B1cFRvcExpbmtzIiwgIm5hdkxpbmtzSFRNTCIsICJoaW50IiwgInBvcHVwSW1hZ2UiLCAiaW1hZ2VIVE1MIiwgInBvcHVwUmVkaXJUaXRsZSIsICJwb3B1cFJlZGlyVG9wTGlua3MiLCAiY29weVN0cnVjdHVyZSIsICJvbGRTdHJ1Y3R1cmUiLCAibmV3U3RydWN0dXJlIiwgInByb3AiLCAiT2JqZWN0IiwgImhhc093biIsICJub3N0YWxnaWEiLCAic3RyIiwgImVkaXRzdHIiLCAiZWRpdE9sZGlkU3RyIiwgImhpc3RvcnlzdHIiLCAid2F0Y2hzdHIiLCAiZmFuY3kiLCAid2F0Y2giLCAicG9wdXBPdGhlckxpbmtzIiwgImFkbWluIiwgIm5vcm1hbCIsICJwb3B1cFJlZGlyT3RoZXJMaW5rcyIsICJmYW5jeTIiLCAibWVudXMiLCAic2hvcnRlciIsICJkcm9wZGl2IiwgImVuZGRpdiIsICJsYXN0ZWRpdCIsICJ0aGFuayIsICJqc0hpc3RvcnkiLCAibGlua3NoZXJlIiwgIm51bGxQdXJnZSIsICJ2aWV3T3B0aW9ucyIsICJlZGl0Um93IiwgIm1hcmtQYXRyb2xsZWQiLCAibmV3VG9waWMiLCAicHJvdGVjdERlbGV0ZSIsICJtZW51VGl0bGUiLCAic2hvcnRtZW51cyIsICJsaXRlIiwgInN1YnN0aXR1dGUiLCAiY21kQm9keSIsICJmcm9tUmUiLCAiZnJvbSIsICJmbGFncyIsICJ0byIsICJleGVjQ21kcyIsICJjbWRMaXN0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJlcnIiLCAiZiIsICJwYXJzZUNtZCIsICJwYXJzZUNtZDIiLCAiY2hhckF0IiwgInBhcnNlU3Vic3RpdHV0ZSIsICJyZW1haW5kZXIiLCAidW5Fc2NhcGUiLCAic2VwIiwgIl90ZW1wbGF0ZU9iamVjdDMiLCAidG1wIiwgInNraXBPdmVyIiwgInNlZ21lbnQiLCAic2tpcFRvRW5kIiwgImVuZFNlZ21lbnQiLCAiZmluZE5leHQiLCAiX3NlcCIsICJjaCIsICJzZXRDaGVja2JveCIsICJwYXJhbSIsICJib3giLCAidmFsIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJjaGVja2VkIiwgImF1dG9FZGl0IiwgImF1dG9FZGl0NCIsICJzZXR1cFBvcHVwcyIsICJhdXRvQ2xpY2tUb2tlbiIsICJtb2RpZnlXYXRjaGxpc3QiLCAiYWxyZWFkeVJhbiIsICJjbWRTdHJpbmciLCAiZWRpdGJveCIsICJpbnB1dCIsICJvdXRwdXQiLCAid3BNaW5vcmVkaXQiLCAid3BXYXRjaHRoaXMiLCAicnZpZCIsICJ1cmwiLCAiYXBpd2lraWJhc2UiLCAic3RhcnREb3dubG9hZCIsICJhdXRvRWRpdDIiLCAic3VtbWFyeSIsICJzdW1tYXJ5cHJvbXB0IiwgInN1bW1hcnlub3RpY2UiLCAiZ2V0UnZTdW1tYXJ5IiwgInR4dCIsICJyZXNwb25zZSIsICJwcm9tcHQiLCAid3BTdW1tYXJ5IiwgImF1dG9FZGl0MyIsICJzZXNzaW9uSWQiLCAiYnRuIiwgImJ1dHRvbiIsICJtc2ciLCAidHByaW50ZiIsICJiYW5uZXJNZXNzYWdlIiwgImNsaWNrIiwgIm5vdGlmeSIsICJ0YWciLCAidHlwZSIsICJoZWFkaW5ncyIsICJkaXYiLCAiZXNjYXBlUXVvdGVzSFRNTCIsICJpbnNlcnRCZWZvcmUiLCAidGVtcGxhdGUiLCAianNvbiIsICJnZXRKc09iaiIsICJhbnlDaGlsZCIsICJxdWVyeSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAidGltZXN0YW1wIiwgInJldmlkIiwgInVzZXJoaWRkZW4iLCAiRG93bmxvYWRlciIsICJYTUxIdHRwUmVxdWVzdCIsICJodHRwIiwgImxhc3RNb2RpZmllZCIsICJjYWxsYmFja0Z1bmN0aW9uIiwgIm9uRmFpbHVyZSIsICJhYm9ydGVkIiwgIm1ldGhvZCIsICJhc3luYyIsICJzZW5kIiwgImFib3J0IiwgImdldERhdGEiLCAicmVzcG9uc2VUZXh0IiwgInNldFRhcmdldCIsICJvcGVuIiwgInNldFJlcXVlc3RIZWFkZXIiLCAidXNlckFnZW50IiwgImdldFJlYWR5U3RhdGUiLCAicmVhZHlTdGF0ZSIsICJkb3dubG9hZHNJblByb2dyZXNzIiwgImdldExhc3RNb2RpZmllZERhdGUiLCAibGFzdG1vZCIsICJnZXRSZXNwb25zZUhlYWRlciIsICJEYXRlIiwgInNldENhbGxiYWNrIiwgIm9ucmVhZHlzdGF0ZWNoYW5nZSIsICJnZXRTdGF0dXMiLCAic3RhdHVzIiwgIm5ld0Rvd25sb2FkIiwgIm5ld0Rvd25sb2FkMiIsICJjYWxsYmFjayIsICJvbmZhaWx1cmUiLCAiZmFrZURvd25sb2FkIiwgIkluc3RhIiwgInNldHVwTGl2ZVByZXZpZXciLCAiX2IiLCAiY29uZiIsICJiYXNlVXJsIiwgImxhbmciLCAiaW50ZXJ3aWtpIiwgImRlZmF1bHRfdGh1bWJfd2lkdGgiLCAicGF0aHMiLCAiYXJ0aWNsZXMiLCAiYXJ0aWNsZVBhdGgiLCAibWF0aCIsICJpbWFnZXNfZmFsbGJhY2siLCAibG9jYWxlIiwgImNvbmZpZyIsICJnZXQiLCAibmFtZSIsICJzaWduYXR1cmUiLCAiQkxPQ0tfSU1BR0UiLCAiZHVtcCIsICJjb252ZXJ0IiwgImxsIiwgInIiLCAicmVtYWluIiwgInNoIiwgInNoaWZ0IiwgInBzIiwgImYyIiwgImYzIiwgIm8yIiwgImMiLCAicDIiLCAiaHRtbF9lbnRpdGllcyIsICJodG1sZXNjYXBlX3RleHQiLCAiaHRtbGVzY2FwZV9hdHRyIiwgInN0cl9pbWF0Y2giLCAiYiIsICJsIiwgImNvbXBhcmVMaW5lU3RyaW5nT3JSZWciLCAiY29tcGFyZUxpbmVTdHJpbmciLCAiY2hhckF0UG9pbnQiLCAiZW5kbCIsICJwYXJzZV9saXN0IiwgInByZXYiLCAibF9tYXRjaCIsICJpcG9zIiwgInByZXZQb3MiLCAicGkiLCAibWF0Y2hQb3MiLCAibGkiLCAiYXQiLCAicGFyc2VfaW5saW5lX25vd2lraSIsICJkdF9tYXRjaCIsICJ1bnNoaWZ0IiwgInBhcnNlX3RhYmxlIiwgInBhcnNlX3RhYmxlX2RhdGEiLCAidGRfbGluZSIsICJtYXRjaF9pIiwgInRkX21hdGNoIiwgInBvcCIsICJ0YyIsICJ0ZCIsICJwYXJzZV9wcmUiLCAicGFyc2VfYmxvY2tfaW1hZ2UiLCAicGFyc2VfaW1hZ2UiLCAic3Vic3RyaW5nIiwgIndpZHRoIiwgImF0dHIiLCAiZmlsZW5hbWUiLCAiY2FwdGlvbiIsICJ0aHVtYiIsICJmcmFtZSIsICJjZW50ZXIiLCAiYWxpZ24iLCAibmVzdGluZyIsICJsYXN0X2F0dHIiLCAid19tYXRjaCIsICJsYXN0ZW5kIiwgInN1YnN0YXJ0IiwgIm5lc3RsZXYiLCAiY2xvc2UiLCAic3VibG9vcCIsICJodG1sIiwgInBhcnNlX2lubGluZV93aWtpIiwgInBhcnNlX2lubGluZV9pbWFnZXMiLCAibG9vcCIsICJ3aWtpMiIsICJwYXJzZV9pbmxpbmVfZm9ybWF0dGluZyIsICJlbSIsICJzdCIsICJkYXRlIiwgImdldFVUQ01pbnV0ZXMiLCAiZ2V0VVRDSG91cnMiLCAiZ2V0VVRDRGF0ZSIsICJnZXRVVENNb250aCIsICJnZXRVVENGdWxsWWVhciIsICJfJDAiLCAiJDEiLCAiJDIiLCAiJDMiLCAiJDQiLCAid2lraTJodG1sIiwgImJhc2V1cmwiLCAicG9wdXBGaWx0ZXJQYWdlU2l6ZSIsICJmb3JtYXRCeXRlcyIsICJwb3B1cEZpbHRlckNvdW50TGlua3MiLCAibnVtIiwgImNvdW50TGlua3MiLCAicG9wdXBGaWx0ZXJDb3VudEltYWdlcyIsICJjb3VudEltYWdlcyIsICJwb3B1cEZpbHRlckNvdW50Q2F0ZWdvcmllcyIsICJjb3VudENhdGVnb3JpZXMiLCAicG9wdXBGaWx0ZXJMYXN0TW9kaWZpZWQiLCAiX2RhdGEiLCAibm93IiwgImFnZSIsICJmb3JtYXRBZ2UiLCAiYWEiLCAic2VjbGVuIiwgIm1pbmxlbiIsICJob3VybGVuIiwgImRheWxlbiIsICJ3ZWVrbGVuIiwgIm51bXdlZWtzIiwgInN3ZWVrcyIsICJhZGR1bml0IiwgIm51bWRheXMiLCAic2RheXMiLCAibnVtaG91cnMiLCAic2hvdXJzIiwgIm51bW1pbnMiLCAic21pbnMiLCAibnVtc2VjcyIsICJzc2VjcyIsICJydW5Qb3B1cEZpbHRlcnMiLCAibGlzdCIsICJyZXQiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAicG9wdXBGaWx0ZXJzIiwgImV4dHJhUG9wdXBGaWx0ZXJzIiwgInBhZ2VJbmZvQXJyYXkiLCAicGFnZUluZm8iLCAidXBjYXNlRmlyc3QiLCAiaW1hZ2VCcmFja2V0Q291bnQiLCAiY2F0ZWdvcnlCcmFja2V0Q291bnQiLCAicG9wdXBGaWx0ZXJTdHViRGV0ZWN0IiwgIl9kb3dubG9hZCIsICJjb3VudHMiLCAic3R1YkNvdW50IiwgInJlYWwiLCAic2VjdCIsICJwb3B1cEZpbHRlckRpc2FtYmlnRGV0ZWN0IiwgIm5hbWVzcGFjZSIsICJpc0Rpc2FtYmlnIiwgInJvdW5kIiwgIlN0cmluZ3dyYXBwZXIiLCAiU3RyaW5nd3JhcHBlcjIiLCAic2V0VXRmIiwgIm9taXRBbmNob3IiLCAibGVuIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1cmxBbmNob3IiLCAiYW5jaG9yRnJvbVV0ZiIsICJlbmNvZGVVUklDb21wb25lbnQiLCAic3BsaXR0ZWQiLCAidSIsICJkZWNvZGVOYXN0aWVzIiwgInN0cmlwTmFtZXNwYWNlIiwgInNwZWNpYWxkaWZmIiwgIm5zU3BlY2lhbElkIiwgIm1haW4iLCAiZnJvbUJvdEludGVyZmFjZSIsICJleHRyYWN0ZWQiLCAiaXNTYWZhcmkiLCAidW5lc2NhcGUiLCAiZGVjb2RlVVJJIiwgImRlY29kZUVzY2FwZXMiLCAibXlEZWNvZGVVUkkiLCAiaGludFZhbHVlIiwgInNhZmVEZWNvZGVVUkkiLCAidG9Vc2VyTmFtZSIsICJ3aXRoTnMiLCAidXNlck5hbWUiLCAidCIsICJ0b1RhbGtQYWdlIiwgImxvY2FsaXplZE5hbWVzcGFjZSIsICJ0YWxrUGFnZSIsICJpc1RhbGtQYWdlIiwgInRvQXJ0aWNsZUZyb21UYWxrUGFnZSIsICJhcnRpY2xlRnJvbVRhbGtQYWdlIiwgImFydGljbGVGcm9tVGFsa09yQXJ0aWNsZSIsICJpc0lwVXNlciIsICJpcFVzZXIiLCAibnNNYWluc3BhY2VJZCIsICJzZXRVcmwiLCAidXJsZnJhZyIsICJ2IiwgImtlZXBTcGFjZXMiLCAiZW5jb2RlVVJJIiwgInJlbW92ZUFuY2hvciIsICJ0b1VybCIsICJ0aXRsZWJhc2UiLCAic3BlY2lhbERpZmYiLCAiaW5jbHVkZXMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAieiIsICJoZWxwZXIiLCAiZGVjb2RlRXh0cmFzIiwgInNlY3RTdHViIiwgInJlYWxTdHViIiwgImlzVmFsaWRJbWFnZU5hbWUiLCAiaXNJblN0cmlwcGFibGVOYW1lc3BhY2UiLCAiaXNJbk1haW5OYW1lc3BhY2UiLCAia2lkcyIsICJjaGlsZE5vZGVzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImtpZCIsICJtYXJrTm9wb3B1cFNwYW5MaW5rcyIsICJpbk5vcG9wdXBTcGFuIiwgImdldEF0dHJpYnV0ZSIsICJiYXNlbmFtZXMiLCAidXJsTm9Qb3B1cCIsICJtYXJrTm9wb3B1cFNwYW5MaW5rczIiLCAiZml4VmVjdG9yTWVudVBvcHVwcyIsICIkYm9keSIsICIkIiwgImZpbmQiLCAidG9BcnJheSIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJhcyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJnZXRQYWdlV2l0aENhY2hpbmciLCAib25Db21wbGV0ZSIsICJmaW5kSW5QYWdlQ2FjaGUiLCAiZ2V0UGFnZSIsICJhZGREb3dubG9hZCIsICJhZGRQYWdlVG9DYWNoZSIsICJwYWdlIiwgImpzb25fcmV0IiwgIkpTT04iLCAicGFyc2UiLCAid2FybmluZ3MiLCAidyIsICJlcnJvciIsICJlcnJsb2ciLCAiY29kZSIsICJpbmZvIiwgInRvVXBwZXJDYXNlIiwgImZpbmRJbkFycmF5IiwgImFyciIsICJmb28iLCAibmV4dE9uZSIsICJhcnJheSIsICJlc2NhcGVSZWdFeHAiLCAicHJvdG90eXBlIiwgInJlbW92ZU51bGxzIiwgImZpbHRlciIsICJzdWJzIiwgImNtZCIsICJpc1N0cmluZyIsICJpc051bWJlciIsICJpc1JlZ0V4cCIsICJpc0FycmF5IiwgIkFycmF5IiwgImlzT2JqZWN0IiwgImlzRnVuY3Rpb24iLCAiRnVuY3Rpb24iLCAicmVwZWF0U3RyaW5nIiwgIm11bHQiLCAiemVyb0ZpbGwiLCAibWFwIiwgIm1hcF9hcnJheSIsICJtYXBfb2JqZWN0IiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgInRleHQiLCAidW5lc2NhcGVRdW90ZXNIVE1MIiwgInJldGFyZ2V0RGFiIiwgIm5ld1RhcmdldCIsICJvbGRUYXJnZXQiLCAiZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWUiLCAidGl0bGVUb0VkaXQiLCAiY2hhbmdlTGlua1RhcmdldExpbmsiLCAiY2xpY2tCdXR0b24iLCAibWlub3IiLCAibGlzdExpbmtzIiwgIndpa2l0ZXh0IiwgInJlZyIsICJvbWl0UmVnZXgiLCAid2lrUG9zIiwgInJtRHVwZXNGcm9tU29ydGVkTGlzdCIsICJzb3J0IiwgIndpa1RhcmdldCIsICJtZXRoIiwgIl9pdGVyYXRvcjgiLCAiX3N0ZXA4IiwgIm1ha2VGaXhEYWIiLCAic2V0UG9wdXBIVE1MMiIsICJlbGVtZW50SWQiLCAicG9wdXBJZCIsICJvblN1Y2Nlc3MiLCAicG9wdXBFbGVtZW50IiwgInJjaWQiLCAic3RydWN0dXJlIiwgInNwYW5zIiwgImZsYXR0ZW4iLCAibGF5b3V0IiwgIm51bXNwYW5zIiwgInJlZGlycyIsICJyZWRpclNwYW5zIiwgImZvdW5kIiwgInN0cnVjdHVyZWZuIiwgInNldGZuIiwgInNldFBvcHVwVGlwc0FuZEhUTUwiLCAiZmxhdHRlbjIiLCAicG9wdXBIVE1MMiIsICJtYWtlRW1wdHlTcGFucyIsICJtYWtlRW1wdHlTcGFuczIiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAiZW1wdHlTcGFuSFRNTCIsICJub2RlVHlwZSIsICJlbXB0eVNwYW5IVE1MMiIsICJjbGFzc25hbWUiLCAiY2xhc3NBbGlhc2VzIiwgInBvcHVwU2Vjb25kUHJldmlldyIsICJfYXJ0aWNsZSIsICJwb3BUaXBzU29vbkZuIiwgIndoZW4iLCAicG9wVGlwcyIsICJkaXZuYW1lIiwgImlkbnVtYmVyIiwgImZ1enp5Q3Vyc29yT2ZmTWVudXMiLCAiX3giLCAiX3kiLCAiX2Z1enoiLCAicGFyZW50IiwgInVscyIsICJfaXRlcmF0b3IxMCIsICJfc3RlcDEwIiwgInVsIiwgIm9mZnNldFdpZHRoIiwgImxpbWl0SG9yaXpvbnRhbFBvc2l0aW9uIiwgIm1vdXNlT3V0V2lraUxpbmsyIiwgInRyYWNrZXIiLCAicG9zQ2hlY2tlckhvb2siLCAiZGlydHkiLCAibW91c2VPdmVyTmF2cG9wIiwgImlzV2l0aGluIiwgIm1vdXNlTGVhdmluZ1RpbWUiLCAicnVuU3RvcFBvcHVwVGltZXIiLCAic3RvcFBvcHVwVGltZXIiLCAib3JpZ2luYWxEYXRhIiwgIm1heENoYXJhY3RlcnMiLCAibWF4U2VudGVuY2VzIiwgInNldERhdGEiLCAibWF4U2l6ZSIsICJraWxsQ29tbWVudHMiLCAia2lsbERpdnMiLCAia2lsbEdhbGxlcmllcyIsICJraWxsIiwgIm9wZW5pbmciLCAiY2xvc2luZyIsICJzdWJvcGVuaW5nIiwgInN1YmNsb3NpbmciLCAicmVwbCIsICJvbGRrIiwgImsiLCAia2lsbFN0dWZmIiwgIm9wIiwgIm1ha2VSZWdleHAiLCAiY2wiLCAic2IiLCAic2MiLCAib3BSZXN1bHQiLCAiaW5kZXgiLCAiZGVwdGgiLCAicmVtb3ZhbCIsICJwcmVmaXgiLCAic3VmZml4IiwgInJlU3RyIiwgInNwIiwgImtpbGxCb3hUZW1wbGF0ZXMiLCAia2lsbFRlbXBsYXRlcyIsICJraWxsVGFibGVzIiwgImtpbGxJbWFnZXMiLCAiZm9yYmlkZGVuTmFtZXNwYWNlQWxpYXNlcyIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJsb2NhbGl6ZWROYW1lc3BhY2VMYyIsICJraWxsSFRNTCIsICJraWxsQ2h1bmtzIiwgIml0YWxpY0NodW5rUmVnZXgiLCAibW9wdXAiLCAiZmlyc3RCaXQiLCAic3R1ZmYiLCAibm90U2VudGVuY2VFbmRzIiwgImZpeFNlbnRlbmNlRW5kcyIsICJmdWxsTGVuZ3RoIiwgImRkIiwgImZpcnN0U2VudGVuY2VzIiwgInN0cnMiLCAia2lsbEJhZFdoaXRlc3BhY2UiLCAibWFrZVByZXZpZXciLCAia2lsbE11bHRpbGluZVRlbXBsYXRlcyIsICJmaXhIVE1MIiwgInN0cmlwTG9uZ1RlbXBsYXRlcyIsICJlc1dpa2kySHRtbFBhcnQiLCAicmVMaW5rcyIsICJsYXN0SW5kZXgiLCAicmVzdWx0IiwgInBvc3RmaXhJbmRleCIsICJfbWF0Y2gkIiwgImVkaXRTdW1tYXJ5UHJldmlldyIsICJyZUFlcyIsICJzZWN0aW9uIiwgInBvc3RmaXgiLCAic2VjdGlvbkxpbmsiLCAibW9yZSIsICJtb3JlTGluayIsICJvbmNsaWNrIiwgInF1ZXJ5VHlwZSIsICJodG1sR2VuZXJhdG9yIiwgInVzZXJuYW1lYXJ0IiwgIkFQSWhpc3RvcnlQcmV2aWV3SFRNTCIsICJBUEljYXRlZ29yeVByZXZpZXdIVE1MIiwgInVzZXJuYW1lIiwgIkFQSXVzZXJJbmZvUHJldmlld0hUTUwiLCAiQVBJY29udHJpYnNQcmV2aWV3SFRNTCIsICJ0cmFpbCIsICJBUElpbWFnZXBhZ2VQcmV2aWV3SFRNTCIsICJBUEliYWNrbGlua3NQcmV2aWV3SFRNTCIsICJBUElyZXZpc2lvblByZXZpZXdIVE1MIiwgImZldGNoVXNlckdyb3VwTmFtZXMiLCAidGhlbiIsICJzaG93QVBJUHJldmlldyIsICJnbyIsICJsaW5rTGlzdCIsICJidWYiLCAiX2l0ZXJhdG9yMTEiLCAiX3N0ZXAxMSIsICJnZXRUaW1lT2Zmc2V0IiwgInR6IiwgIm9wdGlvbnMiLCAiZ2V0VGltZVpvbmUiLCAidGltZVpvbmUiLCAidHpDb21wb25lbnRzIiwgInVzZVRpbWVPZmZzZXQiLCAiSW50bCIsICJEYXRlVGltZUZvcm1hdCIsICJmb3JtYXRUb1BhcnRzIiwgImdldExvY2FsZXMiLCAibG9jYWxlcyIsICJ1c2VyTGFuZ3VhZ2UiLCAiZ2V0TVdEYXRlRm9ybWF0IiwgInN1cHBvcnRlZExvY2FsZXNPZiIsICJuYXZpZ2F0b3IiLCAibGFuZ3VhZ2UiLCAiZWRpdFByZXZpZXdUYWJsZSIsICJyZWFsbHlDb250cmlicyIsICJjdXJhcnQiLCAibWFrZUZpcnN0Q29sdW1uTGlua3MiLCAiY3VycmVudFJldmlzaW9uIiwgImZpcnN0UmV2aWQiLCAiX2l0ZXJhdG9yMTIiLCAiX3N0ZXAxMiIsICJlZGl0RGF0ZSIsICJ0aGlzRGF5IiwgImZvcm1hdHRlZERhdGUiLCAidGhpc1RpbWUiLCAiZm9ybWF0dGVkVGltZSIsICJjb2wzdXJsIiwgImNvbDN0eHQiLCAiY29tbWVudCIsICJjb250ZW50IiwgImNvbW1lbnRoaWRkZW4iLCAiYWRqdXN0RGF0ZSIsICJvZmZzZXQiLCAiY29udmVydFRpbWVab25lIiwgInRvTG9jYWxlU3RyaW5nIiwgImZvcm1hdHRlZERhdGVUaW1lIiwgImQyIiwgImdldEZ1bGxZZWFyIiwgImdldE1vbnRoIiwgImdldERhdGUiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgInRvTG9jYWxlRGF0ZVN0cmluZyIsICJnZXRVVENTZWNvbmRzIiwgInRvTG9jYWxlVGltZVN0cmluZyIsICJ1c2VyaW5mb1Jlc3BvbnNlIiwgInF1ZXJ5T2JqIiwgInVzZXJzIiwgIm1lc3NhZ2VzIiwgImdyb3VwcyIsICJfaXRlcmF0b3IxMyIsICJfc3RlcDEzIiwgImdyb3VwTmFtZSIsICJnbG9iYWx1c2VyaW5mbyIsICJfaXRlcmF0b3IxNCIsICJfc3RlcDE0IiwgImdldE13QXBpIiwgImxvYWRNZXNzYWdlc0lmTWlzc2luZyIsICJqc09iaiIsICJtaXNzaW5nIiwgImNvbnRlbnRtb2RlbCIsICJfaXRlcmF0b3IxNSIsICJfc3RlcDE1IiwgImNvbnRpbnVlIiwgImJsY29udGludWUiLCAiQVBJc2hhcmVkSW1hZ2VQYWdlUHJldmlld0hUTUwiLCAicG9wdXBpZCIsICJyZXF1ZXN0aWQiLCAiYWx0IiwgImltYWdlcmVwb3NpdG9yeSIsICJlbmNhcnQiLCAic2hhcmVkX3VybCIsICJhcGljb21tb25zYmFzZSIsICJjb21tb25zYmFzZSIsICJsb2FkZXIiLCAibG9hZCIsICJBUElpbWFnZWxpbmtzUHJldmlld0hUTUwiLCAianNvYmoiLCAiaW1hZ2V1c2FnZSIsICJfaXRlcmF0b3IxNiIsICJfc3RlcDE2IiwgImNhdGVnb3J5bWVtYmVycyIsICJfaXRlcmF0b3IxNyIsICJfc3RlcDE3IiwgImNtY29udGludWUiLCAicXVlcnlvYmoiLCAiaW52YWxpZCIsICJibG9ja2VkYnkiLCAiYmxvY2twYXJ0aWFsIiwgImxvY2tlZFN1bEFjY291bnRJc0F0dGFjaGVkVG9UaGlzIiwgInVuYXR0YWNoZWQiLCAiZ2VuZGVyIiwgIl9pdGVyYXRvcjE4IiwgIl9zdGVwMTgiLCAiX2l0ZXJhdG9yMTkiLCAiX3N0ZXAxOSIsICJyZWdpc3RyYXRpb24iLCAiX3VzZXIkZWRpdGNvdW50IiwgImVkaXRjb3VudCIsICJ1c2VyY29udHJpYnMiLCAiYmxvY2tzIiwgInJic3RyIiwgInJhbmdlc3RhcnQiLCAicmFuZ2VlbmQiLCAicmVzdHJpY3Rpb25zIiwgInNwbGljZSIsICJfbmF2cG9wIiwgImVkaXRzIiwgInNldHVwRGVidWdnaW5nIiwgInBvcHVwRGVidWciLCAiY29uc29sZSIsICJwb3B1cHNJbnNlcnRJbWFnZSIsICJpbWFnZWluZm8iLCAiaW1hZ2VwYWdlIiwgInRodW1idXJsIiwgInNyYyIsICJtaW1lIiwgImRlc2NyaXB0aW9udXJsIiwgInRvZ2dsZVNpemUiLCAidG9nZ2xlU2l6ZTIiLCAiaW1nIiwgImZpcnN0Q2hpbGQiLCAibWF0Y2hlZCIsICJyZW1vdmVNYXRjaGVzVW5sZXNzIiwgInJlMSIsICJwYXJlbmNvdW50IiwgInJlMiIsICJzZXROYW1lc3BhY2VzIiwgInNldFJlZGlycyIsICJSIiwgInJlZGlyTGlzdHMiLCAiYXIiLCAiYmUiLCAiYmciLCAiYnMiLCAiYm4iLCAiY3MiLCAiY3kiLCAiZGUiLCAiZW8iLCAiZXMiLCAiZXQiLCAiZ2EiLCAiZ2wiLCAiaGUiLCAiaHUiLCAiaXMiLCAiaXQiLCAiamEiLCAibWsiLCAibmRzIiwgIm5sIiwgIm5uIiwgInBsIiwgInB0IiwgInJ1IiwgInNrIiwgInNyIiwgInR0IiwgInVrIiwgInZpIiwgInlpIiwgInpoIiwgInJlZGlyTGlzdCIsICJzZXRJbnRlcndpa2kiLCAid2lraW1lZGlhIiwgIm5zUmUiLCAiaW1hZ2VOYW1lc3BhY2VWYXJpYW50cyIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzMiIsICJfbG9jYWxpemVkTmFtZXNwYWNlTGMiLCAiX25hbWVzcGFjZUlkIiwgIm5zUmVJbWFnZSIsICJnZXRFZGl0Ym94U2VsZWN0aW9uIiwgInNlbGVjdGlvbiIsICJjcmVhdGVSYW5nZSIsICJzZWxTdGFydCIsICJzZWxlY3Rpb25TdGFydCIsICJzZWxFbmQiLCAic2VsZWN0aW9uRW5kIiwgInNlbCIsICJwaXBlIiwgImRvU2VwYXJhdGVTZWxlY3Rpb25Qb3B1cCIsICJNb3VzZXRyYWNrZXIiLCAibG9vcERlbGF5IiwgImFjdGl2ZSIsICJob29rcyIsICJydW5Ib29rcyIsICJyZW1vdmVPYmoiLCAicmVtb3ZlSG9va3MiLCAibmV3SG9va3MiLCAidHJhY2siLCAicGFnZVgiLCAicGFnZVkiLCAiZG9jRWx0IiwgImRvY3VtZW50RWxlbWVudCIsICJzY3JvbGxMZWZ0IiwgInNjcm9sbFRvcCIsICJzZXRQb3NpdGlvbiIsICJsYXN0SG9va194IiwgImxhc3RIb29rX3kiLCAiZW5hYmxlIiwgInNhdmVkTGlzdGVuZXIiLCAidWlkIiwgIm5vc2hvdyIsICJjcmVhdGUiLCAidW5oaWRlIiwgImhpZGUiLCAiaG9va0lkcyIsICJkb3dubG9hZHMiLCAiY29uc3RyYWluZWQiLCAiaGVpZ2h0IiwgImNyZWF0ZU1haW5EaXYiLCAicmVwb3NpdGlvbiIsICJub0xpbWl0SG9yIiwgInRvb1dpZGUiLCAidXBkYXRlRGltZW5zaW9ucyIsICJjV2lkdGgiLCAiY2xpZW50V2lkdGgiLCAibmF0dXJhbFdpZHRoIiwgIm5ld0xlZnQiLCAicmFpc2UiLCAiekluZGV4IiwgImhpZ2hlc3QiLCAic2hvdyIsICJ0aW1lIiwgInN0YWJsZV94IiwgInN0YWJsZV95IiwgInN0YWJsZVNob3ciLCAibmV3X3giLCAibmV3X3kiLCAiZHgiLCAiZHkiLCAiZnV6ejIiLCAic2hvd1Nvb25TdGFibGVUaW1lciIsICJrZXlIb29rcyIsICJSZWZsZWN0IiwgImFwcGx5IiwgImhvb2siLCAiaG9va0lkIiwgIl90aGlzJGNsYXNzTmFtZSIsICJvbmNsaWNrTGlzdGVuZXIiLCAicG9zaXRpb24iLCAibWluV2lkdGgiLCAiaGFuZGxlTmFtZSIsICJzaGlmdEtleSIsICJhYm9ydERvd25sb2FkcyIsICJvZmZzZXRIZWlnaHQiLCAiX2l0ZXJhdG9yMjAiLCAiX3N0ZXAyMCIsICJkZWxGbXQiLCAiaW5zRm10IiwgImNvdW50Q3Jvc3NpbmdzIiwgImVqZWN0IiwgInJvdyIsICJfaXRlcmF0b3IyMSIsICJfc3RlcDIxIiwgInNob3J0ZW5EaWZmU3RyaW5nIiwgInNob3J0ZW5EaWZmU3RyaW5nMiIsICJjb250ZXh0IiwgImRpZmZTdHJpbmciLCAib1NwbGl0dGVkIiwgIm5TcGxpdHRlZCIsICJvdXQiLCAiYWNjIiwgIm1heE91dHB1dFBhaXIiLCAicGFpcmVkIiwgImpzUmVzZXJ2ZWRQcm9wZXJ0aWVzIiwgImRpZmZCdWdBbGVydCIsICJkaWZmQnVnQWxlcnQyIiwgIndvcmQiLCAibWFrZURpZmZIYXNodGFibGUiLCAiX3NyYyRpIiwgIl9yZXQkX3NyYyRpIiwgIm9zIiwgInNldFNpdGVJbmZvIiwgInBvcHVwTG9jYWxEZWJ1ZyIsICJob3N0bmFtZSIsICJ3aWtpYSIsICJpc0xvY2FsIiwgInN0YXJ0c1dpdGgiLCAiY29tbW9ucyIsICJwb3J0IiwgInNpdGViYXNlIiwgInNldFVzZXJJbmZvIiwgInVzdXNlcnMiLCAidXNwcm9wIiwgImNhblJldmlldyIsICJyaWdodHMiLCAiZmV0Y2hTcGVjaWFsUGFnZU5hbWVzIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgIm1heGFnZSIsICJtZXRhIiwgInNpcHJvcCIsICJ1c2VsYW5nIiwgInNwZWNpYWxwYWdlYWxpYXNlcyIsICJzZXRUaXRsZUJhc2UiLCAicHJvdG9jb2wiLCAiYm90SW50ZXJmYWNlUGF0aCIsICJBUElQYXRoIiwgInRpdGxldGFpbCIsICJ3aWtpYmFzZSIsICJzZXRNYWluUmVnZXgiLCAicmVTdGFydCIsICJwcmVUaXRsZXMiLCAicmVFbmQiLCAiYnVpbGRTcGVjaWFsUGFnZUdyb3VwIiwgInNwZWNpYWxQYWdlT2JqIiwgInZhcmlhbnRzIiwgInJlYWxuYW1lIiwgIl9pdGVyYXRvcjIyIiwgImFsaWFzZXMiLCAiX3N0ZXAyMiIsICJhbGlhcyIsICJzZXRSZWdleHBzIiwgIl9pdGVyYXRvcjIzIiwgIl9zdGVwMjMiLCAic3BlY2lhbHBhZ2UiLCAiaW0iLCAiX3RlbXBsYXRlT2JqZWN0NCIsICJfdGVtcGxhdGVPYmplY3Q1IiwgInNldHVwQ2FjaGUiLCAic2V0TWlzYyIsICJjbGllbnQiLCAic2V0dXBQb3B1cHMyIiwgImNvbXBsZXRlZCIsICJzZXRPcHRpb25zIiwgImRlZmF1bHROYXZsaW5rU3BlYyIsICJfaGludCIsICJleHBhbmRDb25kaXRpb25hbE5hdmxpbmtTdHJpbmciLCAiZXhwYW5kQ29uZGl0aW9uYWxOYXZsaW5rU3RyaW5nMiIsICJyZWN1cnNpb25Db3VudCIsICJjb25kaXRpb25hbFNwbGl0UmVnZXgiLCAibnVtUGFyZW5zIiwgInRlc3RTdHJpbmciLCAidHJ1ZVN0cmluZyIsICJmYWxzZVN0cmluZyIsICJ0ZXN0UmVzdWx0IiwgIm5hdmxpbmtTdHJpbmdUb0FycmF5IiwgIl9pdGVyYXRvcjI0IiwgIl9zdGVwMjQiLCAibmF2bGlua1RhZyIsICJzcyIsICJzc3MiLCAibmF2bGlua1N1YnN0aXR1dGVIVE1MIiwgIm5hdmxpbmtEZXB0aCIsICJtYWdpYyIsICJtZW51ZGVwdGgiLCAibWVudXJvd2RlcHRoIiwgIl9pdGVyYXRvcjI1IiwgIl9zdGVwMjUiLCAiZ2V0TmV3V2luIiwgImdldFByaW50RnVuY3Rpb24iLCAidGFnVHlwZSIsICJwcmludCIsICJzaG9ydGN1dCIsICJhZGRQb3B1cFNob3J0Y3V0IiwgInBvcHVwTGlua3NOZXdXaW5kb3ciLCAibmV3V2luIiwgIm5vUG9wdXAiLCAic3BlY2lhbExpbmsiLCAibWFnaWNXYXRjaExpbmsiLCAidGl0bGVkV2lraUxpbmsiLCAiX3BnJGN1cnJlbnQkbGluayRvcmlnIiwgImFyaW5MaW5rIiwgImVkaXRDb3VudGVyTGluayIsICJlZGl0b3JMaXN0TGluayIsICJ0aXRsZWREaWZmTGluayIsICJtYWdpY0hpc3RvcnlMaW5rIiwgInNpbXBsZVBvcHVwcyIsICJwb3B1cE1lbnVMaW5rIiwgInBvcHVwSGFuZGxlS2V5cHJlc3MiLCAicG9wdXBIYW5kbGVLZXlwcmVzczIiLCAiX2V2dCRrZXlDb2RlIiwgImtleUNvZGUiLCAid2hpY2giLCAibGV0dGVyIiwgImZyb21Db2RlUG9pbnQiLCAic3RhcnRMaW5rIiwgImxhc3RQb3B1cExpbmtTZWxlY3RlZCIsICJwcmV2ZW50RGVmYXVsdCIsICJmb2N1cyIsICJvbGRQb3B1cE9ua2V5cHJlc3MiLCAib25rZXlwcmVzcyIsICJhZGRMaW5rUHJvcGVydHkiLCAicHJvcGVydHkiLCAiZGlmZkRhdGEiLCAib2xkUmV2IiwgIm5ld1JldiIsICJhcGkyIiwgImZyb210aXRsZSIsICJ0b3JlbGF0aXZlIiwgImZyb21yZXYiLCAidG9yZXYiLCAiY29tcGFyZSIsICJmcm9tcmV2aWQiLCAidG9yZXZpZCIsICJhZGRSZXZpZXdMaW5rIiwgImRvbmVEaWZmIiwgInJldmlkcyIsICJzdGFibGVfcmV2aWQiLCAiZmxhZ2dlZCIsICJwYXJhbXMyIiwgInBvc3RXaXRoVG9rZW4iLCAiZmFpbCIsICJfaXRlcmF0b3IyNiIsICJfc3RlcDI2IiwgIl9pMyIsICJfcmV2aXNpb25zIiwgInJldmlzaW9uIiwgImluc2VydERpZmYiLCAicm1Cb3JpbmdMaW5lcyIsICJhYWEiLCAiYmIiLCAiYmJiIiwgInN0cmlwT3V0ZXJDb21tb25MaW5lcyIsICJvbGRsaW5lcyIsICJuZXdsaW5lcyIsICJpbm5lciIsICJ0cnVuY2F0ZWQiLCAicG9wdXBEaWZmTWF4TGluZXMiLCAicG9wdXBEaWZmQ29udGV4dExpbmVzIiwgImxpbmVEaWZmIiwgImxpbmVzMiIsICJvbGRsaW5lczIiLCAibmV3bGluZXMyIiwgImRpZmZEYXRlc1RhYmxlIiwgImRpZmZEYXRlc1RhYmxlUm93IiwgImxhYmVsIiwgImxhc3RNb2RpZmllZERhdGUiLCAicmV2bGluayIsICJnZW5lcmFsTGluayIsICJhY3Rpb25OYW1lIiwgInNhdmVkT2xkaWQiLCAib2xkaWREYXRhIiwgInJldmlzaW9uU3RyaW5nIiwgInJldmVydFN1bW1hcnkiLCAiYmFzZSIsICJjc3NDbGFzcyIsICJkZWZhdWx0TmF2bGlua0NsYXNzbmFtZSIsICJnZW5lcmFsTmF2TGluayIsICJnZXRMYXN0Q29udHJpYiIsICJ3aWtpcGFnZSIsICJnZXRIaXN0b3J5SW5mbyIsICJwcm9jZXNzTGFzdENvbnRyaWJJbmZvIiwgImZpcnN0TmV3RWRpdG9yIiwgImVkaXRvciIsICJuZXdVcmwiLCAiZGlzcGxheVVybCIsICJnZXREaWZmU2luY2VNeUVkaXQiLCAicHJvY2Vzc0RpZmZTaW5jZU15RWRpdCIsICJmcmllbmRseU5hbWUiLCAibXlMYXN0RWRpdCIsICJwdXJnZVBvcHVwcyIsICJwcm9jZXNzQWxsUG9wdXBzIiwgIm51bGxpZnkiLCAiZGlzYWJsZVBvcHVwcyIsICJ0b2dnbGVQcmV2aWV3cyIsICJtYWdpY1dhdGNoTGluazIiLCAiX3RlbXBsYXRlT2JqZWN0NiIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInJlcURhdGEiLCAidGl0bGVzIiwgInVud2F0Y2giLCAibXdUaXRsZSIsICJuZXdGcm9tVGV4dCIsICJtZXNzYWdlTmFtZSIsICJnZXROYW1lc3BhY2VJZCIsICJwYXJzZURvbSIsICJfeDIiLCAiX3gzIiwgImFyZ3VtZW50cyIsICJqc1VybCIsICJvbkNsaWNrIiwgIl90ZW1wbGF0ZU9iamVjdDciLCAiX3RlbXBsYXRlT2JqZWN0OCIsICJfbCRzZXAiLCAiYXBwZW5kUGFyYW1zVG9MaW5rIiwgImxpbmtzdHIiLCAiY0EiLCAiY2hzIiwgImN1cnJlbnRBcnRpY2xlUmVnZXhCaXQiLCAiX3RlbXBsYXRlT2JqZWN0OSIsICJfdGVtcGxhdGVPYmplY3QxMCIsICJfdGVtcGxhdGVPYmplY3QxMSIsICJfdGVtcGxhdGVPYmplY3QxMiIsICJsayIsICJhbHNvQ2hhbmdlTGFiZWwiLCAic2FuZUxpbmtDaGVjayIsICJ1TiIsICJ0b29sRGJOYW1lIiwgImNvb2tpZVN0eWxlIiwgInRvb2wiLCAiZGVmYXVsdFRvb2xVcmwiLCAidGhlV2lraSIsICJ3aGF0TmV4dCIsICJnZXRIaXN0b3J5IiwgInByb2Nlc3NIaXN0b3J5IiwgIl9pdGVyYXRvcjI3IiwgIl9zdGVwMjciLCAiZmluaXNoUHJvY2Vzc0hpc3RvcnkiLCAiaGlzdEluZm8iLCAicHJldmlkIiwgImRlZmF1bHRpemUiLCAiX3BnJG9wdGlvbiIsICJfcGckb3B0aW9uJHgiLCAibmV3T3B0aW9uIiwgImRlZiIsICJ2YXJOYW1lIiwgInVzZXJJc1N5c29wIiwgImciLCAiaG91cjEyIiwgIl90ZW1wbGF0ZU9iamVjdDEzIiwgImVkaXRDb3VudGVyTGlua0hpbnQiLCAiYXJpbiIsICJvbiIsICJvbmNlIiwgImR5bmFtaWNDb250ZW50SGFuZGxlciIsICIkY29udGVudCIsICJyZWdpc3Rlckhvb2tzRm9yVmlzaWJsZU5hdnBvcHMiLCAiZG9JdCIsICJlYWNoIiwgIl9pbmRleCIsICJhZGQiLCAiJG92ZXJsYXkiXQp9Cg==
