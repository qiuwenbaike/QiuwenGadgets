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
      const content = page && page.revisions && page.revisions[0] && page.revisions[0].content ? page.revisions[0].content : null;
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
    onClick += ";return false;";
    return generalNavLink({
      newWin: false,
      title,
      text: l.text,
      noPopup: l.noPopup,
      onclick: onClick
    });
  };
  const popupMenuLink = (l) => {
    const title = popupString(simplePrintf("%sHint", [l.id]));
    const onClick = simplePrintf("pg.fn.%s();return false;", [l.id]);
    return generalNavLink({
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
    let ret = "<a";
    if (l.url) {
      const url = l.url.split('"').join("%22");
      ret += ' href="'.concat(url, '"');
    }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05hdmlnYXRpb25fcG9wdXBzL21vZHVsZXMvYXBpLnRzIiwgInNyYy9OYXZpZ2F0aW9uX3BvcHVwcy9tb2R1bGVzL3N0cmluZy50cyIsICJzcmMvTmF2aWdhdGlvbl9wb3B1cHMvbW9kdWxlcy9jb3JlLmpzIiwgInNyYy9OYXZpZ2F0aW9uX3BvcHVwcy9OYXZpZ2F0aW9uX3BvcHVwcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdOYXZpZ2F0aW9uIHBvcHVwcy8xLjAnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgIi8vIFRyYW5zbGF0YWJsZSBzdHJpbmdzXG5jb25zdCBtZXNzYWdlOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0Ly8gc3VtbWFyeSBkYXRhLCBzZWFyY2hpbmcgZXRjLlxuXHRhcnRpY2xlOiB3aW5kb3cud2dVTFMoJ+adoeebricsICfmop3nm64nKSxcblx0Y2F0ZWdvcnk6IHdpbmRvdy53Z1VMUygn5Liq5YiG57G7JywgJ+WAi+WIhumhnicpLFxuXHRjYXRlZ29yaWVzOiB3aW5kb3cud2dVTFMoJ+S4quWIhuexuycsICflgIvliIbpoZ4nKSxcblx0aW1hZ2U6IHdpbmRvdy53Z1VMUygn5Liq5paH5Lu2JywgJ+WAi+aqlOahiCcpLFxuXHRpbWFnZXM6IHdpbmRvdy53Z1VMUygn5Liq5paH5Lu2JywgJ+WAi+aqlOahiCcpLFxuXHRzdHViOiAn5bCP5L2c5ZOBJyxcblx0J3NlY3Rpb24gc3R1Yic6IHdpbmRvdy53Z1VMUygn5bCP56ug6IqCJywgJ+Wwj+eroOevgCcpLFxuXHQnRW1wdHkgcGFnZSc6IHdpbmRvdy53Z1VMUygn56m66aG16Z2iJywgJ+epuumggemdoicpLFxuXHRrQjogd2luZG93LndnVUxTKCfljYPlrZfoioI8c3ViPu+8iOS7pTEwMDDkuLrkuIDov5vvvIk8L3N1Yj4nLCAn5Y2D5L2N5YWD57WEPHN1Yj7vvIjku6UxMDAw54K65LiA6YCy77yJPC9zdWI+JyksXG5cdGJ5dGVzOiB3aW5kb3cud2dVTFMoJ+Wtl+iKgicsICfkvY3lhYPntYQnKSxcblx0ZGF5OiAn5aSpJyxcblx0ZGF5czogJ+WkqScsXG5cdGhvdXI6IHdpbmRvdy53Z1VMUygn5bCP5pe2JywgJ+Wwj+aZgicpLFxuXHRob3Vyczogd2luZG93LndnVUxTKCflsI/ml7YnLCAn5bCP5pmCJyksXG5cdG1pbnV0ZTogJ+WIhicsXG5cdG1pbnV0ZXM6ICfliIYnLFxuXHRzZWNvbmQ6ICfnp5InLFxuXHRzZWNvbmRzOiAn56eSJyxcblx0d2VlazogJ+WRqCcsXG5cdHdlZWtzOiAn5ZGoJyxcblx0bW9udGg6ICfmnIgnLFxuXHRtb250aHM6ICfmnIgnLFxuXHR5ZWFyOiAn5bm0Jyxcblx0eWVhcnM6ICflubQnLFxuXHRzZWFyY2g6IHdpbmRvdy53Z1VMUygn5pCc57SiJywgJ+aQnOWwiycpLFxuXHRTZWFyY2hIaW50OiB3aW5kb3cud2dVTFMoJ+aQnOe0ouWMheWQqyAlcyDnmoTpobXpnaInLCAn5pCc5bCL5YyF5ZCrICVzIOeahOmggemdoicpLFxuXHR3ZWI6ICdCaW5nJyxcblx0Z2xvYmFsOiAn5YWo5Z+fJyxcblx0J21vcmUuLi4nOiAn5pu05aSa4oCm4oCmJyxcblx0Ly8gYXJ0aWNsZS1yZWxhdGVkIGFjdGlvbnMgYW5kIGluZm9cblx0Ly8gKHNvbWUgYWN0aW9ucyBhbHNvIGFwcGx5IHRvIHVzZXIgcGFnZXMpXG5cdGFjdGlvbnM6IHdpbmRvdy53Z1VMUygn5pON5L2cJywgJ+WLleS9nCcpLFxuXHQvLyAvLy8gdmlldyBhcnRpY2xlcyBhbmQgdmlldyB0YWxrXG5cdHBvcHVwc01lbnU6ICdQb3B1cHMnLFxuXHQnZGlzYWJsZSBwcmV2aWV3cyc6IHdpbmRvdy53Z1VMUygn56aB55So6aKE6KeIJywgJ+emgeeUqOmgkOimvScpLFxuXHR0b2dnbGVQcmV2aWV3c0hpbnQ6IHdpbmRvdy53Z1VMUygn5YiH5o2i5pys6aG1IFBvcHVwcyDnmoTpooTop4jlvIDlhbMnLCAn5YiH5o+b5pys6aCBIFBvcHVwcyDnmoTpoJDopr3plovpl5wnKSxcblx0J3RvZ2dsZSBwcmV2aWV3cyc6IHdpbmRvdy53Z1VMUygn5YiH5o2i6aKE6KeI5byA5YWzJywgJ+WIh+aPm+mgkOimvemWi+mXnCcpLFxuXHRyZXNldDogd2luZG93LndnVUxTKCflpI3kvY0nLCAn6KSH5L2NJyksXG5cdGRpc2FibGU6ICfnpoHnlKggUG9wdXBzJyxcblx0ZGlzYWJsZVBvcHVwc0hpbnQ6IHdpbmRvdy53Z1VMUyhcblx0XHQn5Zyo5pys6aG156aB55SoIFBvcHVwc++8jOWIt+aWsOmhtemdouS7pemHjeaWsOWQr+eUqOOAgicsXG5cdFx0J+WcqOacrOmggeemgeeUqCBQb3B1cHPvvIzph43mlrDmlbTnkIbpoIHpnaLku6Xph43mlrDllZ/nlKjjgIInXG5cdCksXG5cdHB1cmdlUG9wdXBzSGludDogd2luZG93LndnVUxTKCflpI3kvY0gUG9wdXBz77yM5riF6Zmk5omA5pyJ57yT5a2Y5pWw5o2u44CCJywgJ+ikh+S9jSBQb3B1cHPvvIzmuIXpmaTmiYDmnInlv6vlj5bos4fmlpnjgIInKSxcblx0UG9wdXBzSGludDogd2luZG93LndnVUxTKCflpI3kvY0gUG9wdXBz77yM5riF6Zmk5omA5pyJ57yT5a2Y5pWw5o2u44CCJywgJ+ikh+S9jSBQb3B1cHPvvIzmuIXpmaTmiYDmnInlv6vlj5bos4fmlpnjgIInKSxcblx0c3BhY2ViYXI6ICfnqbrmoLwnLFxuXHR2aWV3OiB3aW5kb3cud2dVTFMoJ+afpeeciycsICfmqqLoppYnKSxcblx0J3ZpZXcgYXJ0aWNsZSc6IHdpbmRvdy53Z1VMUygn5p+l55yL5p2h55uuJywgJ+aqouimluaineebricpLFxuXHR2aWV3SGludDogd2luZG93LndnVUxTKCfliY3lvoAgJXMnLCAn5YmN5b6AICVzJyksXG5cdHRhbGs6IHdpbmRvdy53Z1VMUygn6K6o6K66JywgJ+iojuirlicpLFxuXHQndGFsayBwYWdlJzogd2luZG93LndnVUxTKCforqjorrrpobUnLCAn6KiO6KuW6aCBJyksXG5cdCd0aGlzJm5ic3A7cmV2aXNpb24nOiB3aW5kb3cud2dVTFMoJ+atpOS/ruiuoueJiOacrCcsICfmraTkv67oqILniYjmnKwnKSxcblx0J3JldmlzaW9uICVzIG9mICVzJzogd2luZG93LndnVUxTKCfpobXpnaIgJDIg55qE5L+u6K6i54mI5pysICQxJywgJ+mggemdoiAkMiDnmoTkv67oqILniYjmnKwgJDEnKSxcblx0J1JldmlzaW9uICVzIG9mICVzJzogd2luZG93LndnVUxTKCfpobXpnaIgJDIg55qE5L+u6K6i54mI5pysICQxJywgJ+mggemdoiAkMiDnmoTkv67oqILniYjmnKwgJDEnKSxcblx0J3RoZSByZXZpc2lvbiBwcmlvciB0byByZXZpc2lvbiAlcyBvZiAlcyc6IHdpbmRvdy53Z1VMUyhcblx0XHQn6aG16Z2iICQyIOeahOS/ruiuoueJiOacrCAkMSDkuYvliY3nmoTkv67orqLniYjmnKwnLFxuXHRcdCfpoIHpnaIgJDIg55qE5L+u6KiC54mI5pysICQxIOS5i+WJjeeahOS/ruiogueJiOacrCdcblx0KSxcblx0J1RvZ2dsZSBpbWFnZSBzaXplJzogd2luZG93LndnVUxTKCfngrnlh7vliIfmjaLlm77niYflpKflsI8nLCAn6bue5pOK5YiH5o+b5ZyW54mH5aSn5bCPJyksXG5cdGRlbDogd2luZG93LndnVUxTKCfliKDpmaQnLCAn5Yig6ZmkJyksXG5cdC8vIC8vLyBkZWxldGUsIHByb3RlY3QsIG1vdmVcblx0ZGVsZXRlOiB3aW5kb3cud2dVTFMoJ+WIoOmZpCcsICfliKDpmaQnKSxcblx0ZGVsZXRlSGludDogd2luZG93LndnVUxTKCfliKDpmaQgJXMnLCAn5Yig6ZmkICVzJyksXG5cdHVuZGVsZXRlU2hvcnQ6IHdpbmRvdy53Z1VMUygn5oGi5aSNJywgJ+aBouW+qScpLFxuXHRVbmRlbGV0ZUhpbnQ6IHdpbmRvdy53Z1VMUygn5oGi5aSNICVzJywgJ+aBouW+qSAlcycpLFxuXHRwcm90ZWN0OiB3aW5kb3cud2dVTFMoJ+S/neaKpCcsICfkv53orbcnKSxcblx0cHJvdGVjdEhpbnQ6IHdpbmRvdy53Z1VMUygn5L+d5oqkICVzJywgJ+S/neittyAlcycpLFxuXHR1bnByb3RlY3RTaG9ydDogd2luZG93LndnVUxTKCfop6PpmaQnLCAn6Kej6ZmkJyksXG5cdHVucHJvdGVjdEhpbnQ6IHdpbmRvdy53Z1VMUygn6Kej6Zmk5a+5ICVzIOeahOS/neaKpCcsICfop6PpmaTlsI0gJXMg55qE5L+d6K23JyksXG5cdG1vdmU6IHdpbmRvdy53Z1VMUygn56e75YqoJywgJ+enu+WLlScpLFxuXHQnbW92ZSBwYWdlJzogd2luZG93LndnVUxTKCfnp7vliqjpobXpnaInLCAn56e75YuV6aCB6Z2iJyksXG5cdE1vdmVwYWdlSGludDogd2luZG93LndnVUxTKCfkv67mlLkgJXMg55qE5qCH6aKYJywgJ+S/ruaUuSAlcyDnmoTmqJnpoYwnKSxcblx0ZWRpdDogd2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvJyksXG5cdC8vIC8vLyBlZGl0IGFydGljbGVzIGFuZCB0YWxrXG5cdCdlZGl0IGFydGljbGUnOiB3aW5kb3cud2dVTFMoJ+e8lui+keadoeebricsICfnt6jovK/mop3nm64nKSxcblx0ZWRpdEhpbnQ6IHdpbmRvdy53Z1VMUygn5L+u5pS5ICVzIOeahOWGheWuuScsICfkv67mlLkgJXMg55qE5YWn5a65JyksXG5cdCdlZGl0IHRhbGsnOiB3aW5kb3cud2dVTFMoJ+e8lui+keiuqOiuuumhtScsICfnt6jovK/lsI3oqbHpoIEnKSxcblx0bmV3OiB3aW5kb3cud2dVTFMoJ+aWsCcsICfmlrAnKSxcblx0J25ldyB0b3BpYyc6IHdpbmRvdy53Z1VMUygn5paw6K+d6aKYJywgJ+aWsOipsemhjCcpLFxuXHRuZXdTZWN0aW9uSGludDogd2luZG93LndnVUxTKCflnKggJXMg5aKe5Yqg5paw55qE6K6o6K666K+d6aKYJywgJ+WcqCAlcyDlop7liqDmlrDnmoToqI7oq5boqbHpoYwnKSxcblx0J251bGwgZWRpdCc6IHdpbmRvdy53Z1VMUygn56m657yW6L6RJywgJ+epuue3qOi8rycpLFxuXHRudWxsRWRpdEhpbnQ6IHdpbmRvdy53Z1VMUygn6L+b6KGM5LiA5qyh5a+5ICVzIOeahOepuue8lui+kScsICfoo73pgKDkuIDmrKHlsI0gJXMg55qE56m657eo6LyvJyksXG5cdGhpc3Q6IHdpbmRvdy53Z1VMUygn5Y6G5Y+yJywgJ+att+WPsicpLFxuXHQvLyAvLy8gaGlzdG9yeSwgZGlmZnMsIGVkaXRvcnMsIHJlbGF0ZWRcblx0aGlzdG9yeTogd2luZG93LndnVUxTKCfljoblj7InLCAn5q235Y+yJyksXG5cdGhpc3RvcnlIaW50OiB3aW5kb3cud2dVTFMoJyVzIOeahOS/ruiuouWOhuWPsicsICclcyDnmoTkv67oqILmrbflj7InKSxcblx0bGFzdDogd2luZG93LndnVUxTKCfkuYvliY0nLCAn5LmL5YmNJyksXG5cdC8vIFtbTWVkaWFXaWtpOkxhc3RdXVxuXHRsYXN0RWRpdDogd2luZG93LndnVUxTKCfmnIDov5Hmm7TmlLknLCAn5pyA6L+R5pu05pS5JyksXG5cdCdzaG93IGxhc3QgZWRpdCc6IHdpbmRvdy53Z1VMUygn5pyA6L+R5LiA5qyh5pu05pS5JywgJ+acgOaWsOS4gOasoeS/ruiogicpLFxuXHQnU2hvdyB0aGUgbGFzdCBlZGl0Jzogd2luZG93LndnVUxTKCfmmL7npLrmnIDov5HkuIDmrKHmm7TmlLnnmoTlt67lvIInLCAn6aGv56S65pyA5paw5LiA5qyh5L+u6KiC55qE5beu55WwJyksXG5cdGxhc3RDb250cmliOiB3aW5kb3cud2dVTFMoJ+acgOi/kee8lui+kScsICfmnIDov5Hnt6jovK8nKSxcblx0J2xhc3Qgc2V0IG9mIGVkaXRzJzogd2luZG93LndnVUxTKCfmnIDov5HnvJbovpEnLCAn5pyA6L+R57eo6LyvJyksXG5cdGxhc3RDb250cmliSGludDogd2luZG93LndnVUxTKCfmmL7npLrnlLHmnIDlkI7kuIDkvY3nvJbovpHogIXpgKDmiJDnmoTlt67lvIInLCAn6aGv56S655Sx5pyA5b6M5LiA5L2N57eo6Lyv6ICF6KO96YCg55qE5beu55WwJyksXG5cdGN1cjogd2luZG93LndnVUxTKCflvZPliY0nLCAn55W25YmNJyksXG5cdGRpZmZDdXI6IHdpbmRvdy53Z1VMUygn5LiO5b2T5YmN54mI5pys55qE5beu5byCJywgJ+iIh+ebruWJjeeJiOacrOeahOW3rueVsCcpLFxuXHQnU2hvdyBjaGFuZ2VzIHNpbmNlIHJldmlzaW9uICVzJzogd2luZG93LndnVUxTKCfmmL7npLroh6rkv67orqLniYjmnKwgJXMg55qE5beu5byCJywgJ+mhr+ekuuiHquS/ruiogueJiOacrCAlcyDnmoTlt67nlbAnKSxcblx0JyVzIG9sZCc6IHdpbmRvdy53Z1VMUygnJXMg5YmN55qE5pyA5ZCO54mI5pysJywgJyVzIOWJjeeahOacgOWQjueJiOacrCcpLFxuXHQvLyBhcyBpbiA0IHdlZWtzIG9sZFxuXHRvbGRFZGl0OiB3aW5kb3cud2dVTFMoJ+aXp+e8lui+kScsICfoiIrnt6jovK8nKSxcblx0cHVyZ2U6IHdpbmRvdy53Z1VMUygn5riF6Zmk57yT5a2YJywgJ+a4hemZpOW/q+WPlicpLFxuXHRwdXJnZUhpbnQ6IHdpbmRvdy53Z1VMUygn5riF6Zmk5pyN5Yqh5Zmo5LitICVzIOeahOe8k+WtmCcsICfmuIXpmaTkvLrmnI3lmajkuK0gJXMg55qE5b+r5Y+WJyksXG5cdHJhdzogd2luZG93LndnVUxTKCfmupDku6PnoIEnLCAn5Y6f5aeL56K8JyksXG5cdHJhd0hpbnQ6IHdpbmRvdy53Z1VMUygn5p+l55yLICVzIOeahOa6kOS7o+eggScsICfmqqLoppYgJXMg55qE5Y6f5aeL56K8JyksXG5cdHJlbmRlcjogd2luZG93LndnVUxTKCfku4XmraPmlocnLCAn5YOF5q2j5paHJyksXG5cdHJlbmRlckhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOe6r0hUTUzop6PmnpDvvIjku4XmraPmloflhoXlrrnvvIknLCAn6aGv56S6ICVzIOeahOe0lEhUTUzop6PmnpDvvIjlg4XmraPmloflhaflrrnvvIknKSxcblx0J1Nob3cgdGhlIGVkaXQgbWFkZSB0byBnZXQgcmV2aXNpb24nOiB3aW5kb3cud2dVTFMoJ+aYvuekuue8lui+keS7peW+l+WIsOS/ruiuoueJiOacrCcsICfpoa/npLrnt6jovK/ku6XlvpfliLDkv67oqILniYjmnKwnKSxcblx0c2luY2VNZTogd2luZG93LndnVUxTKCfoh6rmiJEnLCAn6Ieq5oiRJyksXG5cdCdjaGFuZ2VzIHNpbmNlIG1pbmUnOiB3aW5kb3cud2dVTFMoJ+iHquaIkeS/ruiuoueahOW3ruW8gicsICfoh6rmiJHkv67oqILnmoTlt67nlbAnKSxcblx0c2luY2VNZUhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S66Ieq5oiR5LiK5qyh5L+u5pS55Lul5p2l55qE5beu5byCJywgJ+mhr+ekuuiHquaIkeS4iuasoeS/ruaUueS7peS+hueahOW3rueVsCcpLFxuXHRcIkNvdWxkbid0IGZpbmQgYW4gZWRpdCBieSAlc1xcbmluIHRoZSBsYXN0ICVzIGVkaXRzIHRvXFxuJXNcIjogd2luZG93LndnVUxTKFxuXHRcdCflnKggJDMg5pyA6L+RICQyIOasoee8lui+keS4reaJvuS4jeWIsCAkMSDlgZrlh7rnmoTkv67mlLknLFxuXHRcdCflnKggJDMg5pyA6L+RICQyIOasoee3qOi8r+S4reaJvuS4jeWIsCAkMSDlgZrlh7rnmoTkv67mlLknXG5cdCksXG5cdGVkczogd2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvJyksXG5cdGVkaXRvcnM6IHdpbmRvdy53Z1VMUygn57yW6L6R6ICFJywgJ+e3qOi8r+iAhScpLFxuXHRlZGl0b3JMaXN0SGludDogd2luZG93LndnVUxTKCfliJflh7rnvJbovpHov4cgJXMg55qE55So5oi3JywgJ+WIl+WHuue3qOi8r+mBjiAlcyDnmoTkvb/nlKjogIUnKSxcblx0cmVsYXRlZDogd2luZG93LndnVUxTKCfnm7jlhbMnLCAn55u46ZecJyksXG5cdHJlbGF0ZWRDaGFuZ2VzOiB3aW5kb3cud2dVTFMoJ+ebuOWFs+abtOaUuScsICfnm7jpl5zmm7TmlLknKSxcblx0J3JlbGF0ZWQgY2hhbmdlcyc6IHdpbmRvdy53Z1VMUygn55u45YWz5pu05pS5JywgJ+ebuOmXnOabtOaUuScpLFxuXHRSZWNlbnRjaGFuZ2VzbGlua2VkSGludDogd2luZG93LndnVUxTKCfmmL7npLrnm7jlhbMgJXMg55qE5L+u5pS5JywgJ+mhr+ekuuebuOmXnCAlcyDnmoTkv67mlLknKSxcblx0ZWRpdE9sZDogd2luZG93LndnVUxTKCfnvJbovpHml6fniYgnLCAn57eo6Lyv6IiK54mIJyksXG5cdC8vIC8vLyBlZGl0IG9sZCB2ZXJzaW9uLCBvciByZXZlcnRcblx0cnY6IHdpbmRvdy53Z1VMUygn5Zue6YCAJywgJ+aBouW+qScpLFxuXHRyZXZlcnQ6IHdpbmRvdy53Z1VMUygn5Zue6YCAJywgJ+aBouW+qScpLFxuXHRyZXZlcnRIaW50OiB3aW5kb3cud2dVTFMoJ+WbnumAgOWIsCAlcycsICfmgaLlvqnliLAgJXMnKSxcblx0dW5kbzogd2luZG93LndnVUxTKCfmkqTplIAnLCAn5pKk6Yq3JyksXG5cdHVuZG9IaW50OiB3aW5kb3cud2dVTFMoJ+aSpOmUgOi/measoee8lui+kScsICfmkqTpirfpgJnmrKHnt6jovK8nKSxcblx0ZGVmYXVsdHBvcHVwUmVkbGlua1N1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn56e76Zmk5Yiw56m66aG16Z2iW1slc11d55qE6ZO+5o6l77yIUG9wdXBz77yJJyxcblx0XHQn56e76Zmk5Yiw56m66aCB6Z2iW1slc11d55qE6YCj57WQ77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBGaXhEYWJzU3VtbWFyeTogd2luZG93LndnVUxTKCfmtojmrafkuYlbWyVzXV3liLBbWyVzXV3vvIhQb3B1cHPvvIknLCAn5raI5q2n576pW1slc11d5YiwW1slc11d77yIUG9wdXBz77yJJyksXG5cdGRlZmF1bHRwb3B1cEZpeFJlZGlyc1N1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn5b+955Wl5LuOW1slc11d5YiwW1slc11d55qE6YeN5a6a5ZCR77yIUG9wdXBz77yJJyxcblx0XHQn5b+955Wl5b6eW1slc11d5YiwW1slc11d55qE6YeN5paw5bCO5ZCR77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBFeHRlbmRlZFJldmVydFN1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn5Zue6YCA5YiwJDLlnKgkMeaXtue8lui+keeahOS/ruiuoueJiOacrCQz77yIUG9wdXBz77yJJyxcblx0XHQn6YKE5Y6f5YiwJDLlnKgkMeaZguijveS9nOeahOS/ruiogueJiOacrCQz77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCflm57pgIDliLDkv67orqLniYjmnKwlc+eahOS4iuS4gOS4queJiOacrO+8iFBvcHVwc++8iScsXG5cdFx0J+mChOWOn+WIsOS/ruiogueJiOacrCVz55qE5LiK5LiA5YCL54mI5pys77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBSZXZlcnRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoJ+WbnumAgOWIsOS/ruiuoueJiOacrCVz77yIUG9wdXBz77yJJywgJ+mChOWOn+WIsOS/ruiogueJiOacrCVz77yIUG9wdXBz77yJJyksXG5cdGRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCflm57pgIDliLDkv67orqLniYjmnKwkMeeahOS4iuS4gOS4queJiOacrO+8jOeUsSQz5ZyoJDLml7bnvJbovpHvvIhQb3B1cHPvvIknLFxuXHRcdCfpgoTljp/liLDkv67oqILniYjmnKwkMeeahOS4iuS4gOWAi+eJiOacrO+8jOeUsSQz5ZyoJDLmmYLoo73kvZzvvIhQb3B1cHPvvIknXG5cdCksXG5cdGRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoXG5cdFx0J+WbnumAgOWIsCQz5ZyoJDLml7bnvJbovpHnmoTkv67orqLniYjmnKwkMe+8iFBvcHVwc++8iScsXG5cdFx0J+mChOWOn+WIsCQz5ZyoJDLmmYLoo73kvZznmoTkv67oqILniYjmnKwkMe+8iFBvcHVwc++8iSdcblx0KSxcblx0ZGVmYXVsdHBvcHVwUm1EYWJMaW5rU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCfnp7vpmaTliLDmtojmrafkuYnpobVbWyVzXV3nmoTpk77mjqXvvIhQb3B1cHPvvIknLFxuXHRcdCfnp7vpmaTliLDmtojmrafnvqnpoIFbWyVzXV3nmoTpgKPntZDvvIhQb3B1cHPvvIknXG5cdCksXG5cdFJlZGlyZWN0czogd2luZG93LndnVUxTKCfph43lrprlkJEnLCAn6YeN5a6a5ZCRJyksXG5cdC8vIGFzIGluIFJlZGlyZWN0cyB0byAuLi5cblx0Ly8gXCIgdG8gXCI6IHdpbmRvdy53Z1VMUyggXCLliLBcIixcIuWIsFwiICksXG5cdC8vIGFzIGluIFJlZGlyZWN0cyB0byAuLi5cblx0J0J5cGFzcyByZWRpcmVjdCc6IHdpbmRvdy53Z1VMUygn5b+955Wl6YeN5a6a5ZCRJywgJ+W/veeVpemHjeaWsOWwjuWQkScpLFxuXHQnRml4IHRoaXMgcmVkaXJlY3QnOiB3aW5kb3cud2dVTFMoJ+S/ruWkjemHjeWumuWQkScsICfkv67lvqnph43mlrDlsI7lkJEnKSxcblx0ZGlzYW1iaWc6IHdpbmRvdy53Z1VMUygn5raI5q2n5LmJJywgJ+a2iOatp+e+qScpLFxuXHQvLyAvLy8gYWRkIG9yIHJlbW92ZSBkYWIgZXRjLlxuXHRkaXNhbWJpZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5raI5q2n5LmJ6L+Z5Liq6ZO+5o6l5YiwIFtbJXNdXScsICfmtojmrafnvqnpgJnlgIvpgKPntZDliLAgW1slc11dJyksXG5cdCdDbGljayB0byBkaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvOic6IHdpbmRvdy53Z1VMUygn54K55Ye75Lul5raI5q2n5LmJ6L+Z5Liq6ZO+5o6l5Yiw77yaJywgJ+m7nuaTiuS7pea2iOatp+e+qemAmeWAi+mAo+e1kOWIsO+8micpLFxuXHQncmVtb3ZlIHRoaXMgbGluayc6IHdpbmRvdy53Z1VMUygn56e76Zmk6ZO+5o6lJywgJ+enu+mZpOmAo+e1kCcpLFxuXHQncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnOiB3aW5kb3cud2dVTFMoXG5cdFx0J+enu+mZpOatpOadoeebruWIsOi/memhteeahOaJgOaciemTvuaOpScsXG5cdFx0J+enu+mZpOatpOaineebruWIsOmAmemggeeahOaJgOaciemAo+e1kCdcblx0KSxcblx0J3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBkaXNhbWJpZyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJzogd2luZG93LndnVUxTKFxuXHRcdCfnp7vpmaTmraTmnaHnm67liLDov5nmtojmrafkuYnnmoTmiYDmnInpk77mjqUnLFxuXHRcdCfnp7vpmaTmraTmop3nm67liLDpgJnmtojmrafnvqnnmoTmiYDmnInpgKPntZAnXG5cdCksXG5cdG1haW5saW5rOiB3aW5kb3cud2dVTFMoJ+S4u+mTvuaOpScsICfkuLvpgKPntZAnKSxcblx0Ly8gLy8vIGxpbmtzLCB3YXRjaCwgdW53YXRjaFxuXHR3aWtpTGluazogd2luZG93LndnVUxTKCfkuKrlhoXpg6jpk77mjqUnLCAn5Liq5YWn6YOo6YCj57WQJyksXG5cdHdpa2lMaW5rczogd2luZG93LndnVUxTKCfkuKrlhoXpg6jpk77mjqUnLCAn5Liq5YWn6YOo6YCj57WQJyksXG5cdCdsaW5rcyBoZXJlJzogd2luZG93LndnVUxTKCfpk77lhaUnLCAn6Y+I5YWlJyksXG5cdHdoYXRMaW5rc0hlcmU6IHdpbmRvdy53Z1VMUygn6ZO+5YWl6aG16Z2iJywgJ+mPiOWFpemggemdoicpLFxuXHQnd2hhdCBsaW5rcyBoZXJlJzogd2luZG93LndnVUxTKCfpk77lhaXpobXpnaInLCAn6Y+I5YWl6aCB6Z2iJyksXG5cdFdoYXRsaW5rc2hlcmVIaW50OiB3aW5kb3cud2dVTFMoJ+aYvuekuumTvuaOpeWIsCAlcyDnmoTpobXpnaInLCAn6aGv56S66YCj57WQ5YiwICVzIOeahOmggemdoicpLFxuXHR1bndhdGNoU2hvcnQ6IHdpbmRvdy53Z1VMUygn5Y+W5raIJywgJ+WPlua2iCcpLFxuXHR3YXRjaFRoaW5neTogd2luZG93LndnVUxTKCfnm5Hop4YnLCAn55uj6KaWJyksXG5cdC8vIGNhbGxlZCB3YXRjaFRoaW5neSBiZWNhdXNlIHt9LndhdGNoIGlzIGEgZnVuY3Rpb25cblx0d2F0Y2hIaW50OiB3aW5kb3cud2dVTFMoJ+WKoOWFpSAlcyDliLDmiJHnmoTnm5Hop4bliJfooagnLCAn5Yqg5YWlICVzIOWIsOaIkeeahOebo+imluWIl+ihqCcpLFxuXHR1bndhdGNoSGludDogd2luZG93LndnVUxTKCfku47miJHnmoTnm5Hop4bliJfooajnp7vpmaQgJXMnLCAn5b6e5oiR55qE55uj6KaW5YiX6KGo56e76ZmkICVzJyksXG5cdCdPbmx5IGZvdW5kIG9uZSBlZGl0b3I6ICVzIG1hZGUgJXMgZWRpdHMnOiB3aW5kb3cud2dVTFMoXG5cdFx0J+S7heaJvuWIsOS4gOS9jee8luiAhe+8miVzIOWItumAoOS6hiAlcyDmrKHnvJbovpEnLFxuXHRcdCflg4Xmib7liLDkuIDkvY3nt6jogIXvvJolcyDoo73pgKDkuoYgJXMg5qyh57eo6LyvJ1xuXHQpLFxuXHQnJXMgc2VlbXMgdG8gYmUgdGhlIGxhc3QgZWRpdG9yIHRvIHRoZSBwYWdlICVzJzogd2luZG93LndnVUxTKFxuXHRcdCclcyDnnIvkuIrljrvmmK8gJXMg6L+Z6aG155qE5pyA5ZCO5LiA5L2N57yW6ICFJyxcblx0XHQnJXMg55yL5LiK5Y675pivICVzIOmAmemggeeahOacgOW+jOS4gOS9jee3qOiAhSdcblx0KSxcblx0cnNzOiB3aW5kb3cud2dVTFMoJ1JTUycsICdSU1MnKSxcblx0Ly8gZGlmZiBwcmV2aWV3c1xuXHQnRGlmZiB0cnVuY2F0ZWQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMnOiB3aW5kb3cud2dVTFMoJ+WHuuS6juaAp+iDveiAg+iZke+8jOW3ruW8guW3suiiq+aIquaWrScsICflh7rmlrzmlYjog73ogIPmha7vvIzlt67nlbDlt7LooqvmiKrmlrcnKSxcblx0J09sZCByZXZpc2lvbic6IHdpbmRvdy53Z1VMUygn5pen54mI5pysJywgJ+iIiueJiOacrCcpLFxuXHQnTmV3IHJldmlzaW9uJzogd2luZG93LndnVUxTKCfmlrDniYjmnKwnLCAn5paw54mI5pysJyksXG5cdCdTb21ldGhpbmcgd2VudCB3cm9uZyA6LSgnOiB3aW5kb3cud2dVTFMoJ+WHuumXrumimOS6hiA6LSgnLCAn5Ye65ZWP6aGM5LqGIDotKCcpLFxuXHQnRW1wdHkgcmV2aXNpb24sIG1heWJlIG5vbi1leGlzdGVudCc6IHdpbmRvdy53Z1VMUygn56m655qE5L+u6K6i77yM5Y+v6IO95bm25LiN5a2Y5ZyoJywgJ+epuueahOS/ruiogu+8jOWPr+iDveS4puS4jeWtmOWcqCcpLFxuXHQnVW5rbm93biBkYXRlJzogd2luZG93LndnVUxTKCfmnKrnn6Xml6XmnJ8nLCAn5pyq55+l5pel5pyfJyksXG5cdC8vIG90aGVyIHNwZWNpYWwgcHJldmlld3Ncblx0J0VtcHR5IGNhdGVnb3J5Jzogd2luZG93LndnVUxTKCfnqbrnmoTliIbnsbsnLCAn56m655qE5YiG6aGeJyksXG5cdCdDYXRlZ29yeSBtZW1iZXJzICglcyBzaG93biknOiB3aW5kb3cud2dVTFMoJ+WIhuexu+aIkOWRmO+8iCVzIOaYvuekuu+8iScsICfliIbpoZ7miJDlk6HvvIglcyDpoa/npLrvvIknKSxcblx0J05vIGltYWdlIGxpbmtzIGZvdW5kJzogd2luZG93LndnVUxTKCfmnKrmib7liLDmlofku7bpk77mjqUnLCAn5pyq5om+5Yiw5qqU5qGI6YCj57WQJyksXG5cdCdGaWxlIGxpbmtzJzogd2luZG93LndnVUxTKCfmlofku7bpk77mjqUnLCAn5qqU5qGI6YCj57WQJyksXG5cdCdub3QgY29tbW9ucyc6IHdpbmRvdy53Z1VMUygn57u05Z+65YWx5Lqr5Lit5peg5q2k5ZCN56ew55qE5paH5Lu244CCJywgJ+e2reWfuuWFseS6q+S4reeEoeatpOWQjeeoseeahOaqlOahiOOAgicpLFxuXHQnY29tbW9ucyBvbmx5Jzogd2luZG93LndnVUxTKCfmraTmlofku7bmnaXoh6rnu7Tln7rlhbHkuqvjgIInLCAn5q2k5qqU5qGI5L6G6Ieq57at5Z+65YWx5Lqr44CCJyksXG5cdCdObyBpbWFnZSBmb3VuZCc6IHdpbmRvdy53Z1VMUygn5om+5LiN5Yiw5paH5Lu2JywgJ+aJvuS4jeWIsOaqlOahiCcpLFxuXHQnY29tbW9ucyBkdXBlJzogd2luZG93LndnVUxTKCfnu7Tln7rlhbHkuqvkuK3lrZjlnKjmraTmlofku7bnmoTlia/mnKzjgIInLCAn57at5Z+65YWx5Lqr5Lit5a2Y5Zyo5q2k5qqU5qGI55qE5Ymv5pys44CCJyksXG5cdCdjb21tb25zIGNvbmZsaWN0Jzogd2luZG93LndnVUxTKCfnu7Tln7rlhbHkuqvkuK3lrZjlnKjmraTmlofku7blkI3np7DkuI3lkIznmoTlia/mnKzjgIInLCAn57at5Z+65YWx5Lqr5Lit5a2Y5Zyo5q2k5qqU5ZCN56ix5LiN5ZCM55qE5Ymv5pys44CCJyksXG5cdC8vIHVzZXItcmVsYXRlZCBhY3Rpb25zIGFuZCBpbmZvXG5cdHVzZXI6IHdpbmRvdy53Z1VMUygn55So5oi3JywgJ+S9v+eUqOiAhScpLFxuXHQvLyAvLy8gdXNlciBwYWdlLCB0YWxrLCBlbWFpbCwgc3BhY2Vcblx0J3VzZXImbmJzcDtwYWdlJzogd2luZG93LndnVUxTKCfnlKjmiLfpobUnLCAn5L2/55So6ICF6aCBJyksXG5cdCd1c2VyIHRhbGsnOiB3aW5kb3cud2dVTFMoJ+eUqOaIt+iuqOiuuicsICfkvb/nlKjogIXlsI3oqbEnKSxcblx0J2VkaXQgdXNlciB0YWxrJzogd2luZG93LndnVUxTKCfnvJbovpHnlKjmiLforqjorronLCAn57eo6Lyv5L2/55So6ICF5bCN6KmxJyksXG5cdCdsZWF2ZSBjb21tZW50Jzogd2luZG93LndnVUxTKCfnlZnoqIAnLCAn55WZ6KiAJyksXG5cdGVtYWlsOiB3aW5kb3cud2dVTFMoJ+eUtemCricsICfpm7vpg7UnKSxcblx0J2VtYWlsIHVzZXInOiB3aW5kb3cud2dVTFMoJ+eUtemCrueUqOaItycsICfpm7vpg7Xkvb/nlKjogIUnKSxcblx0RW1haWx1c2VySGludDogd2luZG93LndnVUxTKCfnu5kgJXMg5Y+R6YCB55S15a2Q6YKu5Lu2JywgJ+e1piAlcyDnmbzpgIHpm7vlrZDpg7Xku7YnKSxcblx0c3BhY2U6IHdpbmRvdy53Z1VMUygn5a2Q6aG16Z2iJywgJ+WtkOmggemdoicpLFxuXHQvLyBzaG9ydCBmb3JtIGZvciB1c2VyU3BhY2UgbGlua1xuXHRQcmVmaXhpbmRleEhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOeUqOaIt+mhteWtkOmhtemdoicsICfpoa/npLogJXMg55qE5L2/55So6ICF6aCB5a2Q6aCB6Z2iJyksXG5cdGNvdW50OiB3aW5kb3cud2dVTFMoJ+e7n+iuoScsICfntbHoqIgnKSxcblx0Ly8gLy8vIGNvbnRyaWJ1dGlvbnMsIHRyZWUsIGxvZ1xuXHQnZWRpdCBjb3VudGVyJzogd2luZG93LndnVUxTKCfnvJbovpHmrKHmlbAnLCAn57eo6Lyv5qyh5pW4JyksXG5cdGthdGVsaW5rSGludDogd2luZG93LndnVUxTKCclcyDnmoTnvJbovpHmrKHmlbAnLCAnJXMg55qE57eo6Lyv5qyh5pW4JyksXG5cdGNvbnRyaWJzOiB3aW5kb3cud2dVTFMoJ+i0oeeMricsICfosqLnjbsnKSxcblx0Y29udHJpYnV0aW9uczogd2luZG93LndnVUxTKCfotKHnjK4nLCAn6LKi5427JyksXG5cdGRlbGV0ZWRDb250cmliczogd2luZG93LndnVUxTKCflt7LliKDpmaTnmoTotKHnjK4nLCAn5bey5Yiq6Zmk55qE6LKi5427JyksXG5cdENvbnRyaWJ1dGlvbnNIaW50OiB3aW5kb3cud2dVTFMoJyVzIOeahOeUqOaIt+i0oeeMricsICclcyDnmoTkvb/nlKjogIXosqLnjbsnKSxcblx0dHJlZTogd2luZG93LndnVUxTKCfmoJEnLCAn5qi5JyksXG5cdGNvbnRyaWJzVHJlZUhpbnQ6IHdpbmRvdy53Z1VMUygn5qC55o2u5ZCN5a2X56m66Ze05p+l55yLICVzIOeahOi0oeeMricsICfmoLnmk5rlkb3lkI3nqbrplpPmqqLoppYgJXMg55qE6LKi5427JyksXG5cdGxvZzogd2luZG93LndnVUxTKCfml6Xlv5cnLCAn5pel6KqMJyksXG5cdCd1c2VyIGxvZyc6IHdpbmRvdy53Z1VMUygn55So5oi35pel5b+XJywgJ+S9v+eUqOiAheaXpeiqjCcpLFxuXHR1c2VyTG9nSGludDogd2luZG93LndnVUxTKCfmmL7npLogJXMg55qE55So5oi35pel5b+XJywgJ+mhr+ekuiAlcyDnmoTkvb/nlKjogIXml6XoqownKSxcblx0dW5ibG9ja1Nob3J0OiB3aW5kb3cud2dVTFMoJ+ino+mZpCcsICfop6PpmaQnKSxcblx0YmxvY2s6IHdpbmRvdy53Z1VMUygn5bCB56aBJywgJ+WwgemOlicpLFxuXHQnYmxvY2sgdXNlcic6IHdpbmRvdy53Z1VMUygn5bCB56aB55So5oi3JywgJ+WwgemOluS9v+eUqOiAhScpLFxuXHRJcGJsb2NrbGlzdEhpbnQ6IHdpbmRvdy53Z1VMUygn6Kej5bCBICVzJywgJ+ino+WwgSAlcycpLFxuXHRCbG9ja2lwSGludDogd2luZG93LndnVUxTKCflsIHnpoEgJXMnLCAn5bCB6Y6WICVzJyksXG5cdCdibG9jayBsb2cnOiB3aW5kb3cud2dVTFMoJ+WwgeemgeaXpeW/lycsICflsIHpjpbml6XoqownKSxcblx0YmxvY2tMb2dIaW50OiB3aW5kb3cud2dVTFMoJ+aYvuekuiAlcyDnmoTlsIHnpoHml6Xlv5cnLCAn6aGv56S6ICVzIOeahOWwgemOluaXpeiqjCcpLFxuXHRwcm90ZWN0TG9nSGludDogd2luZG93LndnVUxTKCfmmL7npLogJXMg55qE5L+d5oqk5pel5b+XJywgJ+mhr+ekuiAlcyDnmoTkv53orbfml6XoqownKSxcblx0cGFnZUxvZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOaXpeW/lycsICfpoa/npLogJXMg55qE5pel6KqMJyksXG5cdGRlbGV0ZUxvZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOWIoOmZpOaXpeW/lycsICfpoa/npLogJXMg55qE5Yiq6Zmk5pel6KqMJyksXG5cdCdJbnZhbGlkICVzICVzJzogd2luZG93LndnVUxTKCfpgInpobkgJXMg5LiN5Y+v55So77yaJXMnLCAn6YG46aCFICVzIOS4jeWPr+eUqO+8miVzJyksXG5cdG06ICflsI8nLFxuXHQvLyBBdXRvZWRpdGluZ1xuXHQnRW50ZXIgYSBub24tZW1wdHkgZWRpdCBzdW1tYXJ5IG9yIHByZXNzIGNhbmNlbCB0byBhYm9ydCc6IHdpbmRvdy53Z1VMUyhcblx0XHQn6L6T5YWl57yW6L6R5pGY6KaB77yM5oiW5oyJ5Y+W5raI5Lit5q2i5pON5L2cJyxcblx0XHQn6Ly45YWl57eo6Lyv5pGY6KaB77yM5oiW5oyJ5Y+W5raI5Lit5q2i5pON5L2cJ1xuXHQpLFxuXHQnRmFpbGVkIHRvIGdldCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgcGxlYXNlIGVkaXQgbWFudWFsbHkuXFxuXFxuJzogd2luZG93LndnVUxTKFxuXHRcdCfojrflj5bkv67orqLniYjmnKzkv6Hmga/lpLHotKXvvIzor7fmiYvliqjkv67mlLnjgIJcXG5cXG4nLFxuXHRcdCfnjbLlj5bkv67oqILniYjmnKzos4foqIrlpLHmlZfvvIzoq4vmiYvli5Xkv67mlLnjgIJcXG5cXG4nXG5cdCksXG5cdCdUaGUgJXMgYnV0dG9uIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgY2xpY2tlZC4gUGxlYXNlIHdhaXQgZm9yIHRoZSBuZXh0IHBhZ2UgdG8gbG9hZC4nOiB3aW5kb3cud2dVTFMoXG5cdFx0J+aMiemSriAlcyDlt7Looqvoh6rliqjngrnlh7vvvIzor7fnrYnlvoXkuIvkuIDkuKrpobXpnaLliqDovb3jgIInLFxuXHRcdCfmjInpiJUgJXMg5bey6KKr6Ieq5YuV6bue5pOK77yM6KuL562J5b6F5LiL5LiA5YCL6aCB6Z2i6LyJ5YWl44CCJ1xuXHQpLFxuXHQnQ291bGQgbm90IGZpbmQgYnV0dG9uICVzLiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGluIHlvdXIgamF2YXNjcmlwdCBmaWxlLic6IHdpbmRvdy53Z1VMUyhcblx0XHQn5om+5LiN5Yiw5oyJ6ZKuICVz77yM6K+35qOA5p+l5oKoIEphdmFTY3JpcHQg5paH5Lu25Lit55qE6K6+572u44CCJyxcblx0XHQn5om+5LiN5Yiw5oyJ6YiVICVz77yM6KuL5qqi5p+l5oKoIEphdmFTY3JpcHQg5qqU5qGI5Lit55qE6Kit5a6a44CCJ1xuXHQpLFxuXHQvLyBQb3B1cHMgc2V0dXBcblx0J09wZW4gZnVsbC1zaXplIGltYWdlJzogd2luZG93LndnVUxTKCfmn6XnnIvlhajlsLrlr7jlm77lg48nLCAn5qqi6KaW5YWo5bC65a+45b2x5YOPJyksXG5cdC8vIOS7peS4i+WGheWuueeUsSBBbm5BbmdlbGEg6KGl5q2jXG5cdGJpbmdTZWFyY2hIaW50OiB3aW5kb3cud2dVTFMoJ+WcqCBCaW5nIOS4iuaQnOe0ouKAnCVz4oCdJywgJ+WcqCBiaW5nIOS4iuaQnOWwi+OAjCVz44CNJyksXG5cdCdlbmFibGUgcHJldmlld3MnOiB3aW5kb3cud2dVTFMoJ+WQr+eUqOmihOiniCcsICfllZ/nlKjpoJDopr0nKSxcblx0J3Nob3cgcHJldmlldyc6IHdpbmRvdy53Z1VMUygn56aB55So6aKE6KeIJywgJ+emgeeUqOmgkOimvScpLFxuXHRoaXN0b3J5ZmVlZEhpbnQ6IHdpbmRvdy53Z1VMUygn6K+l6aG16Z2i55qE6L+R5pyf5pu05pS5IFJTUyBmZWVkJywgJ+ipsumggemdoueahOi/keacn+abtOaUuSBSU1MgZmVlZCcpLFxuXHQnc2VuZCB0aGFua3MnOiB3aW5kb3cud2dVTFMoJ+WPkemAgeaEn+iwoicsICflgrPpgIHmhJ/orJ0nKSxcblx0VGhhbmtzSGludDogd2luZG93LndnVUxTKCflkJHor6XnlKjmiLflj5HpgIHkuIDlsIHmhJ/osKLmtojmga8nLCAn5ZCR6Kmy5L2/55So6ICF5YKz6YCB5LiA5bCB5oSf6Kyd6KiK5oGvJyksXG5cdCdtYXJrIHBhdHJvbGxlZCc6IHdpbmRvdy53Z1VMUygn5qCH6K6w5Li65bey5beh5p+lJywgJ+aomeiomOeCuuW3suW3oeafpScpLFxuXHRtYXJrcGF0cm9sbGVkSGludDogd2luZG93LndnVUxTKCfmoIforrDor6XnvJbovpHkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY6Kmy57eo6Lyv54K65bey5beh5p+lJyksXG5cdCdDb3VsZCBub3QgbWFya2VkIHRoaXMgZWRpdCBhcyBwYXRyb2xsZWQnOiB3aW5kb3cud2dVTFMoJ+aXoOazleagh+iusOivpee8lui+keS4uuW3suW3oeafpScsICfnhKHms5XmqJnoqJjoqbLnt6jovK/ngrrlt7Llt6Hmn6UnKSxcblx0ZGVmYXVsdHBvcHVwUmV2aWV3ZWRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoJ+agh+iusOS7jueJiOacrCVz5YiwJXPpl7TnmoTnvJbovpHkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY5b6e54mI5pysJXPliLAlc+mWk+eahOe3qOi8r+eCuuW3suW3oeafpScpLFxuXHQnSW1hZ2UgZnJvbSBDb21tb25zJzogd2luZG93LndnVUxTKCfmnaXoh6rnu7Tln7rlhbHkuqvnmoTlm77niYcnLCAn5L6G6Ieq57at5Z+65YWx55So55qE5ZyW54mHJyksXG5cdCdEZXNjcmlwdGlvbiBwYWdlJzogd2luZG93LndnVUxTKCflm77niYfmj4/ov7DpobUnLCAn5ZyW54mH5o+P6L+w6aCBJyksXG5cdCdBbHQgdGV4dDonOiB3aW5kb3cud2dVTFMoJ+abv+aNouaWh+acrO+8iEFsdO+8ie+8micsICfmm7/mj5vmloflrZfvvIhBbHTvvInvvJonKSxcblx0cmV2ZGVsOiB3aW5kb3cud2dVTFMoJ+WOhuWPsueJiOacrOiiq+makOiXjycsICfmrbflj7LniYjmnKzooqvpmrHol48nKSxcblx0RGVsZXRlZGNvbnRyaWJ1dGlvbnNIaW50OiB3aW5kb3cud2dVTFMoJ+eUqOaItyVz55qE6KKr5Yig6Zmk57yW6L6R5qyh5pWwJywgJ+S9v+eUqOiAhSVz55qE6KKr5Yiq6Zmk57eo6Lyv5qyh5pW4JyksXG5cdCdObyBiYWNrbGlua3MgZm91bmQnOiB3aW5kb3cud2dVTFMoJ+aJvuS4jeWIsOmTvuWFpemhtemdoicsICfmib7kuI3liLDpj4jlhaXpoIHpnaInKSxcblx0JyBhbmQgbW9yZSc6IHdpbmRvdy53Z1VMUygn5Lul5Y+K5YW25LuW6aG16Z2iJywgJ+S7peWPiuWFtuS7lumggemdoicpLFxuXHQnRG93bmxvYWQgcHJldmlldyBkYXRhJzogd2luZG93LndnVUxTKCfkuIvovb3pooTop4jmlbDmja4nLCAn5LiL6LyJ6aCQ6Ka96LOH5paZJyksXG5cdCdOb3QgYSByZWdpc3RlcmVkIHVzZXJuYW1lJzogd2luZG93LndnVUxTKCfpnZ7lt7Lms6jlhoznmoTnlKjmiLcnLCAn6Z2e5bey6Ki75YaK55qE5L2/55So6ICFJyksXG5cdEJMT0NLRUQ6IHdpbmRvdy53Z1VMUygn6KKr5bCB56aBJywgJ+iiq+WwgemOlicpLFxuXHQnSGFzIGJsb2Nrcyc6IHdpbmRvdy53Z1VMUygn6KKr6YOo5YiG5bCB56aBJywgJ+iiq+mDqOWIhuWwgemOlicpLFxuXHQnIGVkaXRzIHNpbmNlOiAnOiB3aW5kb3cud2dVTFMoJ+asoee8lui+ke+8jOazqOWGjOaXpeacn+S4uicsICfmrKHnt6jovK/vvIzoqLvlhorml6XmnJ/ngronKSxcblx0J2xhc3QgZWRpdCBvbiAnOiB3aW5kb3cud2dVTFMoJ+acgOWQjuS4gOasoee8lui+keS6jicsICfmnIDlvozkuIDmrKHnt6jovK/mlrwnKSxcblx0RW1haWxVc2VySGludDogd2luZG93LndnVUxTKCfnu5kgJXMg5Y+R6YCB55S15a2Q6YKu5Lu2JywgJ+e1piAlcyDnmbzpgIHpm7vlrZDpg7Xku7YnKSxcblx0UkFOR0VCTE9DS0VEOiB3aW5kb3cud2dVTFMoJ0lQ5q616KKr5bCB56aBJywgJ0lQ5q616KKr5bCB6Y6WJyksXG5cdCdJUCB1c2VyJzogd2luZG93LndnVUxTKCdJUOeUqOaItycsICdJUOS9v+eUqOiAhScpLFxuXHQn4pmAJzogJ+KZgCcsXG5cdCfimYInOiAn4pmCJyxcblx0SElEREVOOiB3aW5kb3cud2dVTFMoJ+WFqOWfn+makOiXjycsICflhajln5/pmrHol48nKSxcblx0TE9DS0VEOiB3aW5kb3cud2dVTFMoJ+WFqOWfn+mUgeWumicsICflhajln5/pjpblrponKSxcblx0J0ludmFsaWQgdXNlcic6IHdpbmRvdy53Z1VMUygn6Z2e5rOV55So5oi35ZCNJywgJ+mdnuazleS9v+eUqOiAheWQjeeosScpLFxuXHRkaWZmOiB3aW5kb3cud2dVTFMoJ+W3ruW8gicsICflt67nlbAnKSxcblx0JyB0byAnOiAn6IezJyxcblxuXHRhdXRvZWRpdF92ZXJzaW9uOiAnbnAyMDE0MDQxNicsXG5cdFByZWZpeEluZGV4SGludDogd2luZG93LndnVUxTKCfmmL7npLrnlKjmiLclc+eahOWtkOmhtemdoicsICfpoa/npLrkvb/nlKjogIUlc+eahOWtkOmggemdoicpLFxuXHRudWxsRWRpdFN1bW1hcnk6IHdpbmRvdy53Z1VMUygn6L+b6KGM5LiA5qyh6Zu257yW6L6RJywgJ+mAsuihjOS4gOasoembtue3qOi8rycpLFxuXHQvLyDnlKjmiLfnu4TlkI3np7Dku47ns7vnu5/mtojmga/ojrflj5Zcblx0J2dyb3VwLW5vLWF1dG9jb25maXJtZWQnOiB3aW5kb3cud2dVTFMoJ+mdnuiHquWKqOehruiupOeUqOaItycsICfpnZ7oh6rli5Xnorroqo3kvb/nlKjogIUnKSxcblx0c2VwYXJhdG9yOiAn44CBJyxcblx0Y29tbWE6ICfvvIwnLFxufTtcblxuZXhwb3J0IHttZXNzYWdlfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSB1bmljb3JuL3ByZWZlci1xdWVyeS1zZWxlY3RvciAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge21lc3NhZ2V9IGZyb20gJy4vc3RyaW5nJztcblxuY29uc3QgcG9wdXBzID0gKCkgPT4ge1xuXHQvLyBTVEFSVEZJTEU6IG1haW4uanNcblx0Ly8gRml4IGxhdGVyXG5cdC8vIEdsb2JhbHNcblx0Ly9cblx0Ly8gVHJ5aW5nIHRvIHNob3ZlIGFzIG1hbnkgb2YgdGhlc2UgYXMgcG9zc2libGUgaW50byB0aGUgcGcgKHBvcHVwIGdsb2JhbHMpIG9iamVjdFxuXHRjb25zdCBwZyA9IHtcblx0XHRhcGk6IHt9LFxuXHRcdHJlOiB7fSxcblx0XHRuczoge30sXG5cdFx0c3RyaW5nOiB7fSxcblx0XHR3aWtpOiB7fSxcblx0XHR1c2VyOiB7fSxcblx0XHRtaXNjOiB7fSxcblx0XHRvcHRpb246IHt9LFxuXHRcdG9wdGlvbkRlZmF1bHQ6IHt9LFxuXHRcdGZsYWc6IHt9LFxuXHRcdGNhY2hlOiB7fSxcblx0XHRzdHJ1Y3R1cmVzOiB7fSxcblx0XHR0aW1lcjoge30sXG5cdFx0Y291bnRlcjoge30sXG5cdFx0Y3VycmVudDoge30sXG5cdFx0Zm46IHt9LFxuXHRcdGVuZG9mbGlzdDogbnVsbCxcblx0fTtcblx0LyogQmFpbCBpZiB0aGUgZ2FkZ2V0L3NjcmlwdCBpcyBiZWluZyBsb2FkZWQgdHdpY2UgKi9cblx0LyogQW4gZWxlbWVudCB3aXRoIGlkIFwicGdcIiB3b3VsZCBhZGQgYSB3aW5kb3cucGcgcHJvcGVydHksIGlnbm9yZSBzdWNoIHByb3BlcnR5ICovXG5cdGlmICh3aW5kb3cucGcgJiYgISh3aW5kb3cucGcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0LyogRXhwb3J0IHRvIGdsb2JhbCBjb250ZXh0ICovXG5cdHdpbmRvdy5wZyA9IHBnO1xuXHQvLyBFTkRGSUxFOiBtYWluLmpzXG5cdC8vIFNUQVJURklMRTogYWN0aW9ucy5qc1xuXHRjb25zdCBzZXR1cFRvb2x0aXBzID0gKGNvbnRhaW5lciwgcmVtb3ZlLCBmb3JjZSwgcG9wRGF0YSkgPT4ge1xuXHRcdGxvZyhgc2V0dXBUb29sdGlwcywgY29udGFpbmVyPSR7Y29udGFpbmVyfSwgcmVtb3ZlPSR7cmVtb3ZlfWApO1xuXHRcdGlmICghY29udGFpbmVyKSB7XG5cdFx0XHQvLyB0aGUgbWFpbiBpbml0aWFsIGNhbGxcblx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cE9uRWRpdFNlbGVjdGlvbicpICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmVkaXRmb3JtICYmIGRvY3VtZW50LmVkaXRmb3JtLndwVGV4dGJveDEpIHtcblx0XHRcdFx0ZG9jdW1lbnQuZWRpdGZvcm0ud3BUZXh0Ym94MS5vbm1vdXNldXAgPSBkb1NlbGVjdGlvblBvcHVwO1xuXHRcdFx0fVxuXHRcdFx0Ly8gYXJ0aWNsZS9jb250ZW50IGlzIGEgc3RydWN0dXJlLWRlcGVuZGVudCB0aGluZ1xuXHRcdFx0Y29udGFpbmVyID0gZGVmYXVsdFBvcHVwc0NvbnRhaW5lcigpO1xuXHRcdH1cblx0XHRpZiAoIXJlbW92ZSAmJiAhZm9yY2UgJiYgY29udGFpbmVyLnJhblNldHVwVG9vbHRpcHNBbHJlYWR5KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnRhaW5lci5yYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSA9ICFyZW1vdmU7XG5cdFx0Y29uc3QgYW5jaG9ycyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cdFx0c2V0dXBUb29sdGlwc0xvb3AoYW5jaG9ycywgMCwgMjUwLCAxMDAsIHJlbW92ZSwgcG9wRGF0YSk7XG5cdH07XG5cdGNvbnN0IGRlZmF1bHRQb3B1cHNDb250YWluZXIgPSAoKSA9PiB7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwT25seUFydGljbGVMaW5rcycpKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbi12ZWN0b3ItMjAyMiAudmVjdG9yLWJvZHknKSB8fFxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXdfY29udGVudCcpIHx8XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykgfHxcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FydGljbGUnKSB8fFxuXHRcdFx0XHRkb2N1bWVudFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGRvY3VtZW50O1xuXHR9O1xuXHRjb25zdCBzZXR1cFRvb2x0aXBzTG9vcCA9IGZ1bmN0aW9uIHNldHVwVG9vbHRpcHNMb29wKGFuY2hvcnMsIGJlZ2luLCBob3dtYW55LCBzbGVlcCwgcmVtb3ZlLCBwb3BEYXRhLCAuLi5hcmdzKSB7XG5cdFx0bG9nKFxuXHRcdFx0c2ltcGxlUHJpbnRmKCdzZXR1cFRvb2x0aXBzTG9vcCglcywlcywlcywlcywlcyknLCBbXG5cdFx0XHRcdGFuY2hvcnMsXG5cdFx0XHRcdGJlZ2luLFxuXHRcdFx0XHRob3dtYW55LFxuXHRcdFx0XHRzbGVlcCxcblx0XHRcdFx0cmVtb3ZlLFxuXHRcdFx0XHRwb3BEYXRhLFxuXHRcdFx0XHQuLi5hcmdzLFxuXHRcdFx0XSlcblx0XHQpO1xuXHRcdGNvbnN0IGZpbmlzaCA9IGJlZ2luICsgaG93bWFueTtcblx0XHRjb25zdCBsb29wZW5kID0gTWF0aC5taW4oZmluaXNoLCBhbmNob3JzLmxlbmd0aCk7XG5cdFx0bGV0IGogPSBsb29wZW5kIC0gYmVnaW47XG5cdFx0bG9nKFxuXHRcdFx0YHNldHVwVG9vbHRpcHM6IGFuY2hvcnMubGVuZ3RoPSR7YW5jaG9ycy5sZW5ndGh9LCBiZWdpbj0ke2JlZ2lufSwgaG93bWFueT0ke2hvd21hbnl9LCBsb29wZW5kPSR7bG9vcGVuZH0sIHJlbW92ZT0ke3JlbW92ZX1gXG5cdFx0KTtcblx0XHRjb25zdCBkb1Rvb2x0aXAgPSByZW1vdmUgPyByZW1vdmVUb29sdGlwIDogYWRkVG9vbHRpcDtcblx0XHQvLyB0cnkgYSBmYXN0ZXIgKD8pIGxvb3AgY29uc3RydWN0XG5cdFx0aWYgKGogPiAwKSB7XG5cdFx0XHRkbyB7XG5cdFx0XHRcdGNvbnN0IGEgPSBhbmNob3JzW2xvb3BlbmQgLSBqXTtcblx0XHRcdFx0aWYgKGEgPT09IHVuZGVmaW5lZCB8fCAhYSB8fCAhYS5ocmVmKSB7XG5cdFx0XHRcdFx0bG9nKGBnb3QgbnVsbCBhbmNob3IgYXQgaW5kZXggJHtsb29wZW5kfWAgLSBqKTtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkb1Rvb2x0aXAoYSwgcG9wRGF0YSk7XG5cdFx0XHR9IHdoaWxlICgtLWopO1xuXHRcdH1cblx0XHRpZiAoZmluaXNoIDwgYW5jaG9ycy5sZW5ndGgpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZXR1cFRvb2x0aXBzTG9vcChhbmNob3JzLCBmaW5pc2gsIGhvd21hbnksIHNsZWVwLCByZW1vdmUsIHBvcERhdGEpO1xuXHRcdFx0fSwgc2xlZXApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIXJlbW92ZSAmJiAhZ2V0VmFsdWVPZigncG9wdXBUb2NMaW5rcycpKSB7XG5cdFx0XHRcdHJtVG9jVG9vbHRpcHMoKTtcblx0XHRcdH1cblx0XHRcdHBnLmZsYWcuZmluaXNoZWRMb2FkaW5nID0gdHJ1ZTtcblx0XHR9XG5cdH07XG5cdC8vIGVsaW1pbmF0ZSBwb3B1cHMgZnJvbSB0aGUgVE9DXG5cdC8vIFRoaXMgYWxzbyBraWxscyBhbnkgb25jbGljayBzdHVmZiB0aGF0IHVzZWQgdG8gYmUgZ29pbmcgb24gaW4gdGhlIHRvY1xuXHRjb25zdCBybVRvY1Rvb2x0aXBzID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRvYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2MnKTtcblx0XHRpZiAodG9jKSB7XG5cdFx0XHRjb25zdCB0b2NMaW5rcyA9IHRvYy5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cdFx0XHRjb25zdCB0b2NMZW4gPSB0b2NMaW5rcy5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRvY0xlbjsgKytqKSB7XG5cdFx0XHRcdHJlbW92ZVRvb2x0aXAodG9jTGlua3Nbal0sIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgYWRkVG9vbHRpcCA9IChhLCBwb3BEYXRhKSA9PiB7XG5cdFx0aWYgKCFpc1BvcHVwTGluayhhKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRhLm9ubW91c2VvdmVyID0gbW91c2VPdmVyV2lraUxpbms7XG5cdFx0YS5vbm1vdXNlb3V0ID0gbW91c2VPdXRXaWtpTGluaztcblx0XHRhLm9ubW91c2Vkb3duID0ga2lsbFBvcHVwO1xuXHRcdGEuaGFzUG9wdXAgPSB0cnVlO1xuXHRcdGEucG9wRGF0YSA9IHBvcERhdGE7XG5cdH07XG5cdGNvbnN0IHJlbW92ZVRvb2x0aXAgPSAoYSkgPT4ge1xuXHRcdGlmICghYS5oYXNQb3B1cCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRhLm9ubW91c2VvdmVyID0gbnVsbDtcblx0XHRhLm9ubW91c2VvdXQgPSBudWxsO1xuXHRcdGlmIChhLm9yaWdpbmFsVGl0bGUpIHtcblx0XHRcdGEudGl0bGUgPSBhLm9yaWdpbmFsVGl0bGU7XG5cdFx0fVxuXHRcdGEuaGFzUG9wdXAgPSBmYWxzZTtcblx0fTtcblx0Y29uc3QgcmVtb3ZlVGl0bGUgPSAoYSkgPT4ge1xuXHRcdGEub3JpZ2luYWxUaXRsZSB8fD0gYS50aXRsZTtcblx0XHRhLnRpdGxlID0gJyc7XG5cdH07XG5cdGNvbnN0IHJlc3RvcmVUaXRsZSA9IChhKSA9PiB7XG5cdFx0aWYgKGEudGl0bGUgfHwgIWEub3JpZ2luYWxUaXRsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRhLnRpdGxlID0gYS5vcmlnaW5hbFRpdGxlO1xuXHR9O1xuXHRjb25zdCByZWdpc3Rlckhvb2tzID0gKG5wKSA9PiB7XG5cdFx0Y29uc3QgcG9wdXBNYXhXaWR0aCA9IGdldFZhbHVlT2YoJ3BvcHVwTWF4V2lkdGgnKTtcblx0XHRpZiAodHlwZW9mIHBvcHVwTWF4V2lkdGggPT09ICdudW1iZXInKSB7XG5cdFx0XHRjb25zdCBzZXRNYXhXaWR0aCA9ICgpID0+IHtcblx0XHRcdFx0bnAubWFpbkRpdi5zdHlsZS5tYXhXaWR0aCA9IGAke3BvcHVwTWF4V2lkdGh9cHhgO1xuXHRcdFx0XHRucC5tYXhXaWR0aCA9IHBvcHVwTWF4V2lkdGg7XG5cdFx0XHR9O1xuXHRcdFx0bnAuYWRkSG9vayhzZXRNYXhXaWR0aCwgJ3VuaGlkZScsICdiZWZvcmUnKTtcblx0XHR9XG5cdFx0bnAuYWRkSG9vayhhZGRQb3B1cFNob3J0Y3V0cywgJ3VuaGlkZScsICdhZnRlcicpO1xuXHRcdG5wLmFkZEhvb2socm1Qb3B1cFNob3J0Y3V0cywgJ2hpZGUnLCAnYmVmb3JlJyk7XG5cdH07XG5cdGNvbnN0IHJlbW92ZU1vZGlmaWVyS2V5TGlzdGVuZXIgPSAoYSkgPT4ge1xuXHRcdC8vIHJlbW92ZSBsaXN0ZW5lcnMgZm9yIG1vZGlmaWVyIGtleSBpZiBhbnkgdGhhdCB3ZXJlIGFkZGVkIGluIG1vdXNlT3Zlcldpa2lMaW5rXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGEubW9kaWZpZXJLZXlMaXN0ZW5lciwgZmFsc2UpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgYS5tb2RpZmllcktleUxpc3RlbmVyLCBmYWxzZSk7XG5cdH07XG5cdGNvbnN0IG1vdXNlT3Zlcldpa2lMaW5rID0gZnVuY3Rpb24gbW91c2VPdmVyV2lraUxpbmsoZXZ0KSB7XG5cdFx0aWYgKCFldnQgJiYgd2luZG93LmV2ZW50KSB7XG5cdFx0XHRldnQgPSB3aW5kb3cuZXZlbnQ7XG5cdFx0fVxuXHRcdC8vIGlmIHRoZSBtb2RpZmllciBpcyBuZWVkZWQsIGxpc3RlbiBmb3IgaXQsXG5cdFx0Ly8gd2Ugd2lsbCByZW1vdmUgdGhlIGxpc3RlbmVyIHdoZW4gd2UgbW91c2VvdXQgb2YgdGhpcyBsaW5rIG9yIGtpbGwgcG9wdXAuXG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwTW9kaWZpZXInKSkge1xuXHRcdFx0Ly8gaWYgcG9wdXBNb2RpZmllckFjdGlvbiA9IGVuYWJsZSwgd2Ugc2hvdWxkIHBvcHVwIHdoZW4gdGhlIG1vZGlmaWVyIGlzIHByZXNzZWRcblx0XHRcdC8vIGlmIHBvcHVwTW9kaWZpZXJBY3Rpb24gPSBkaXNhYmxlLCB3ZSBzaG91bGQgcG9wdXAgdW5sZXNzIHRoZSBtb2RpZmllciBpcyBwcmVzc2VkXG5cdFx0XHRjb25zdCBhY3Rpb24gPSBnZXRWYWx1ZU9mKCdwb3B1cE1vZGlmaWVyQWN0aW9uJyk7XG5cdFx0XHRjb25zdCBrZXkgPSBhY3Rpb24gPT09ICdkaXNhYmxlJyA/ICdrZXl1cCcgOiAna2V5ZG93bic7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHNlbGYubW9kaWZpZXJLZXlMaXN0ZW5lciA9IChldnQpID0+IHtcblx0XHRcdFx0bW91c2VPdmVyV2lraUxpbmsyKHNlbGYsIGV2dCk7XG5cdFx0XHR9O1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihrZXksIHNlbGYubW9kaWZpZXJLZXlMaXN0ZW5lciwgZmFsc2UpO1xuXHRcdH1cblx0XHRyZXR1cm4gbW91c2VPdmVyV2lraUxpbmsyKHRoaXMsIGV2dCk7XG5cdH07XG5cdC8qKlxuXHQgKiBHZXRzIHRoZSByZWZlcmVuY2VzIGxpc3QgaXRlbSB0aGF0IHRoZSBwcm92aWRlZCBmb290bm90ZSBsaW5rIHRhcmdldHMuIFRoaXNcblx0ICogaXMgdHlwaWNhbGx5IGEgbGkgZWxlbWVudCB3aXRoaW4gdGhlIG9sLnJlZmVyZW5jZXMgZWxlbWVudCBpbnNpZGUgdGhlIHJlZmxpc3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RWxlbWVudH0gYSAtIEEgZm9vdG5vdGUgbGluay5cblx0ICogQHJldHVybiB7RWxlbWVudHxib29sZWFufSBUaGUgdGFyZ2V0ZWQgZWxlbWVudCwgb3IgZmFsc2UgaWYgb25lIGNhbid0IGJlIGZvdW5kLlxuXHQgKi9cblx0Y29uc3QgZm9vdG5vdGVUYXJnZXQgPSAoYSkgPT4ge1xuXHRcdGNvbnN0IGFUaXRsZSA9IFRpdGxlLmZyb21BbmNob3IoYSk7XG5cdFx0Ly8gV2Ugd2FudCBcIi4zQVwiIHJhdGhlciB0aGFuIFwiJTNBXCIgb3IgXCI/XCIgaGVyZSwgc28gdXNlIHRoZSBhbmNob3IgcHJvcGVydHkgZGlyZWN0bHlcblx0XHRjb25zdCBhbmNoID0gYVRpdGxlLmFuY2hvcjtcblx0XHRpZiAoIS9eKGNpdGVfbm90ZS18X25vdGUtfGVuZG5vdGUpLy50ZXN0KGFuY2gpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IGxUaXRsZSA9IFRpdGxlLmZyb21VUkwobG9jYXRpb24uaHJlZik7XG5cdFx0aWYgKGxUaXRsZS50b1N0cmluZyh0cnVlKSAhPT0gYVRpdGxlLnRvU3RyaW5nKHRydWUpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2FuY2h9YCk7XG5cdFx0d2hpbGUgKGVsICYmIHR5cGVvZiBlbC5ub2RlTmFtZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdGNvbnN0IG50ID0gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdGlmIChudCA9PT0gJ2xpJykge1xuXHRcdFx0XHRyZXR1cm4gZWw7XG5cdFx0XHR9IGVsc2UgaWYgKG50ID09PSAnYm9keScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSBlbHNlIGlmIChlbC5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdGVsID0gZWwucGFyZW50Tm9kZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRjb25zdCBmb290bm90ZVByZXZpZXcgPSAoeCwgbmF2cG9wKSA9PiB7XG5cdFx0c2V0UG9wdXBIVE1MKGA8aHI+JHt4LmlubmVySFRNTH1gLCAncG9wdXBQcmV2aWV3JywgbmF2cG9wLmlkTnVtYmVyKTtcblx0fTtcblx0Y29uc3QgbW9kaWZpZXJQcmVzc2VkID0gKGV2dCkgPT4ge1xuXHRcdGNvbnN0IG1vZCA9IGdldFZhbHVlT2YoJ3BvcHVwTW9kaWZpZXInKTtcblx0XHRpZiAoIW1vZCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIWV2dCAmJiB3aW5kb3cuZXZlbnQpIHtcblx0XHRcdGV2dCA9IHdpbmRvdy5ldmVudDtcblx0XHR9XG5cdFx0cmV0dXJuIGV2dCAmJiBtb2QgJiYgZXZ0W2Ake21vZC50b0xvd2VyQ2FzZSgpfUtleWBdO1xuXHR9O1xuXHQvLyBDaGVja3MgaWYgdGhlIGNvcnJlY3QgbW9kaWZpZXIgcHJlc3NlZC91bnByZXNzZWQgaWYgbmVlZGVkXG5cdGNvbnN0IGlzQ29ycmVjdE1vZGlmaWVyID0gKF9hLCBldnQpID0+IHtcblx0XHRpZiAoIWdldFZhbHVlT2YoJ3BvcHVwTW9kaWZpZXInKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdC8vIGlmIHBvcHVwTW9kaWZpZXJBY3Rpb24gPSBlbmFibGUsIHdlIHNob3VsZCBwb3B1cCB3aGVuIHRoZSBtb2RpZmllciBpcyBwcmVzc2VkXG5cdFx0Ly8gaWYgcG9wdXBNb2RpZmllckFjdGlvbiA9IGRpc2FibGUsIHdlIHNob3VsZCBwb3B1cCB1bmxlc3MgdGhlIG1vZGlmaWVyIGlzIHByZXNzZWRcblx0XHRjb25zdCBhY3Rpb24gPSBnZXRWYWx1ZU9mKCdwb3B1cE1vZGlmaWVyQWN0aW9uJyk7XG5cdFx0cmV0dXJuIChhY3Rpb24gPT09ICdlbmFibGUnICYmIG1vZGlmaWVyUHJlc3NlZChldnQpKSB8fCAoYWN0aW9uID09PSAnZGlzYWJsZScgJiYgIW1vZGlmaWVyUHJlc3NlZChldnQpKTtcblx0fTtcblx0Y29uc3QgbW91c2VPdmVyV2lraUxpbmsyID0gKGEsIGV2dCkgPT4ge1xuXHRcdGlmICghaXNDb3JyZWN0TW9kaWZpZXIoYSwgZXZ0KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZ2V0VmFsdWVPZigncmVtb3ZlVGl0bGVzJykpIHtcblx0XHRcdHJlbW92ZVRpdGxlKGEpO1xuXHRcdH1cblx0XHRpZiAoYSA9PT0gcGcuY3VycmVudC5saW5rICYmIGEubmF2cG9wdXAgJiYgYS5uYXZwb3B1cC5pc1Zpc2libGUoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRwZy5jdXJyZW50LmxpbmsgPSBhO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdzaW1wbGVQb3B1cHMnKSAmJiAhcGcub3B0aW9uLnBvcHVwU3RydWN0dXJlKSB7XG5cdFx0XHQvLyByZXNldCAqZGVmYXVsdCB2YWx1ZSogb2YgcG9wdXBTdHJ1Y3R1cmVcblx0XHRcdHNldERlZmF1bHQoJ3BvcHVwU3RydWN0dXJlJywgJ29yaWdpbmFsJyk7XG5cdFx0fVxuXHRcdGNvbnN0IGFydGljbGUgPSBuZXcgVGl0bGUoKS5mcm9tQW5jaG9yKGEpO1xuXHRcdC8vIHNldCBnbG9iYWwgdmFyaWFibGUgKHVnaCkgdG8gaG9sZCBhcnRpY2xlICh3aWtpcGFnZSlcblx0XHRwZy5jdXJyZW50LmFydGljbGUgPSBhcnRpY2xlO1xuXHRcdGlmICghYS5uYXZwb3B1cCkge1xuXHRcdFx0YS5uYXZwb3B1cCA9IG5ld05hdnBvcHVwKGEsIGFydGljbGUpO1xuXHRcdFx0cGcuY3VycmVudC5saW5rc0hhc2hbYS5ocmVmXSA9IGEubmF2cG9wdXA7XG5cdFx0XHRwZy5jdXJyZW50LmxpbmtzLnB1c2goYSk7XG5cdFx0fVxuXHRcdGlmIChhLm5hdnBvcHVwLnBlbmRpbmcgPT09IG51bGwgfHwgYS5uYXZwb3B1cC5wZW5kaW5nICE9PSAwKSB7XG5cdFx0XHQvLyBlaXRoZXIgZnJlc2ggcG9wdXBzIG9yIHRob3NlIHdpdGggdW5maW5zaGVkIGJ1c2luZXNzIGFyZSByZWRvbmUgZnJvbSBzY3JhdGNoXG5cdFx0XHRzaW1wbGVQb3B1cENvbnRlbnQoYSwgYXJ0aWNsZSk7XG5cdFx0fVxuXHRcdGEubmF2cG9wdXAuc2hvd1Nvb25JZlN0YWJsZShhLm5hdnBvcHVwLmRlbGF5KTtcblx0XHRjbGVhckludGVydmFsKHBnLnRpbWVyLmNoZWNrUG9wdXBQb3NpdGlvbik7XG5cdFx0cGcudGltZXIuY2hlY2tQb3B1cFBvc2l0aW9uID0gc2V0SW50ZXJ2YWwoY2hlY2tQb3B1cFBvc2l0aW9uLCA2MDApO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdzaW1wbGVQb3B1cHMnKSAmJiBnZXRWYWx1ZU9mKCdwb3B1cFByZXZpZXdCdXR0b24nKSAmJiAhYS5zaW1wbGVOb01vcmUpIHtcblx0XHRcdGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGQuY2xhc3NOYW1lID0gJ3BvcHVwUHJldmlld0J1dHRvbkRpdic7XG5cdFx0XHRjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0ZC5hcHBlbmQocyk7XG5cdFx0XHRzLmNsYXNzTmFtZSA9ICdwb3B1cFByZXZpZXdCdXR0b24nO1xuXHRcdFx0c1tgb24ke2dldFZhbHVlT2YoJ3BvcHVwUHJldmlld0J1dHRvbkV2ZW50Jyl9YF0gPSAoKSA9PiB7XG5cdFx0XHRcdGEuc2ltcGxlTm9Nb3JlID0gdHJ1ZTtcblx0XHRcdFx0ZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRub25zaW1wbGVQb3B1cENvbnRlbnQoYSwgYXJ0aWNsZSk7XG5cdFx0XHR9O1xuXHRcdFx0cy5pbm5lckhUTUwgPSBwb3B1cFN0cmluZygnc2hvdyBwcmV2aWV3Jyk7XG5cdFx0XHRzZXRQb3B1cEhUTUwoZCwgJ3BvcHVwUHJldmlldycsIGEubmF2cG9wdXAuaWROdW1iZXIpO1xuXHRcdH1cblx0XHRpZiAoYS5uYXZwb3B1cC5wZW5kaW5nICE9PSAwKSB7XG5cdFx0XHRub25zaW1wbGVQb3B1cENvbnRlbnQoYSwgYXJ0aWNsZSk7XG5cdFx0fVxuXHR9O1xuXHQvLyBzaW1wbGVQb3B1cENvbnRlbnQ6IHRoZSBjb250ZW50IHRoYXQgZG8gbm90IHJlcXVpcmUgYWRkaXRpb25hbCBkb3dubG9hZFxuXHQvLyAoaXQgaXMgc2hvd24gZXZlbiB3aGVuIHNpbXBsZVBvcHVwcyBpcyB0cnVlKVxuXHRjb25zdCBzaW1wbGVQb3B1cENvbnRlbnQgPSAoYSwgYXJ0aWNsZSkgPT4ge1xuXHRcdC8qIEZJWE1FIGhhY2sgKi9cblx0XHRhLm5hdnBvcHVwLmhhc1BvcHVwTWVudSA9IGZhbHNlO1xuXHRcdGEubmF2cG9wdXAuc2V0SW5uZXJIVE1MKHBvcHVwSFRNTChhKSk7XG5cdFx0ZmlsbEVtcHR5U3BhbnMoe1xuXHRcdFx0bmF2cG9wdXA6IGEubmF2cG9wdXAsXG5cdFx0fSk7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwRHJhZ2dhYmxlJykpIHtcblx0XHRcdGxldCBkcmFnSGFuZGxlID0gZ2V0VmFsdWVPZigncG9wdXBEcmFnSGFuZGxlJykgfHwgbnVsbDtcblx0XHRcdGlmIChkcmFnSGFuZGxlICYmIGRyYWdIYW5kbGUgIT09ICdhbGwnKSB7XG5cdFx0XHRcdGRyYWdIYW5kbGUgKz0gYS5uYXZwb3B1cC5pZE51bWJlcjtcblx0XHRcdH1cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRhLm5hdnBvcHVwLm1ha2VEcmFnZ2FibGUoZHJhZ0hhbmRsZSk7XG5cdFx0XHR9LCAxNTApO1xuXHRcdH1cblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBSZWRsaW5rUmVtb3ZhbCcpICYmIGEuY2xhc3NOYW1lID09PSAnbmV3Jykge1xuXHRcdFx0c2V0UG9wdXBIVE1MKGA8YnI+JHtwb3B1cFJlZGxpbmtIVE1MKGFydGljbGUpfWAsICdwb3B1cFJlZGxpbmsnLCBhLm5hdnBvcHVwLmlkTnVtYmVyKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGRlYnVnRGF0YSA9IChuYXZwb3B1cCkgPT4ge1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cERlYnVnZ2luZycpICYmIG5hdnBvcHVwLmlkTnVtYmVyKSB7XG5cdFx0XHRzZXRQb3B1cEhUTUwoYGlkTnVtYmVyPSR7bmF2cG9wdXAuaWROdW1iZXJ9LCBwZW5kaW5nPSR7bmF2cG9wdXAucGVuZGluZ31gLCAncG9wdXBFcnJvcicsIG5hdnBvcHVwLmlkTnVtYmVyKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG5ld05hdnBvcHVwID0gKGEsIGFydGljbGUpID0+IHtcblx0XHRjb25zdCBuYXZwb3B1cCA9IG5ldyBOYXZwb3B1cCgpO1xuXHRcdG5hdnBvcHVwLmZ1enogPSA1O1xuXHRcdG5hdnBvcHVwLmRlbGF5ID0gZ2V0VmFsdWVPZigncG9wdXBEZWxheScpICogMTAwMDtcblx0XHQvLyBpbmNyZW1lbnQgZ2xvYmFsIGNvdW50ZXIgbm93XG5cdFx0bmF2cG9wdXAuaWROdW1iZXIgPSArK3BnLmlkTnVtYmVyO1xuXHRcdG5hdnBvcHVwLnBhcmVudEFuY2hvciA9IGE7XG5cdFx0bmF2cG9wdXAucGFyZW50UG9wdXAgPSBhLnBvcERhdGEgJiYgYS5wb3BEYXRhLm93bmVyO1xuXHRcdG5hdnBvcHVwLmFydGljbGUgPSBhcnRpY2xlO1xuXHRcdHJlZ2lzdGVySG9va3MobmF2cG9wdXApO1xuXHRcdHJldHVybiBuYXZwb3B1cDtcblx0fTtcblx0Ly8gU2hvdWxkIHdlIHNob3cgbm9uc2ltcGxlIGNvbnRleHQ/XG5cdC8vIElmIHNpbXBsZVBvcHVwcyBpcyBzZXQgdG8gdHJ1ZSwgdGhlbiB3ZSBkbyBub3Qgc2hvdyBub25zaW1wbGUgY29udGV4dCxcblx0Ly8gYnV0IGlmIGEgYm90dG9tIFwic2hvdyBwcmV2aWV3XCIgd2FzIGNsaWNrZWQgd2UgZG8gc2hvdyBub25zaW1wbGUgY29udGV4dFxuXHRjb25zdCBzaG91bGRTaG93Tm9uU2ltcGxlID0gKGEpID0+IHtcblx0XHRyZXR1cm4gIWdldFZhbHVlT2YoJ3NpbXBsZVBvcHVwcycpIHx8IGEuc2ltcGxlTm9Nb3JlO1xuXHR9O1xuXHQvLyBTaG91bGQgd2Ugc2hvdyBub25zaW1wbGUgY29udGV4dCBnb3Zlcm4gYnkgdGhlIG9wdGlvbiAoZS5nLiBwb3B1cFVzZXJJbmZvKT9cblx0Ly8gSWYgdGhlIHVzZXIgZXhwbGljaXRseSBhc2tlZCBmb3Igbm9uc2ltcGxlIGNvbnRleHQgYnkgc2V0dGluZyB0aGUgb3B0aW9uIHRvIHRydWUsXG5cdC8vIHRoZW4gd2Ugc2hvdyBpdCBldmVuIGluIG5vbnNpbXBsZSBtb2RlLlxuXHRjb25zdCBzaG91bGRTaG93ID0gKGEsIG9wdGlvbikgPT4ge1xuXHRcdGlmIChzaG91bGRTaG93Tm9uU2ltcGxlKGEpKSB7XG5cdFx0XHRyZXR1cm4gZ2V0VmFsdWVPZihvcHRpb24pO1xuXHRcdH1cblx0XHRyZXR1cm4gd2luZG93W29wdGlvbl0gIT09IHVuZGVmaW5lZCAmJiB3aW5kb3dbb3B0aW9uXTtcblx0fTtcblx0Y29uc3Qgbm9uc2ltcGxlUG9wdXBDb250ZW50ID0gKGEsIGFydGljbGUpID0+IHtcblx0XHRsZXQgZGlmZjtcblx0XHRsZXQgaGlzdG9yeTtcblx0XHRjb25zdCBwYXJhbXMgPSBwYXJzZVBhcmFtcyhhLmhyZWYpO1xuXHRcdGNvbnN0IG9sZGlkID0gcGFyYW1zLm9sZGlkID09PSB1bmRlZmluZWQgPyBudWxsIDogcGFyYW1zLm9sZGlkO1xuXHRcdGlmIChzaG91bGRTaG93KGEsICdwb3B1cFByZXZpZXdEaWZmcycpKSB7XG5cdFx0XHQoe2RpZmZ9ID0gcGFyYW1zKTtcblx0XHR9XG5cdFx0aWYgKHNob3VsZFNob3coYSwgJ3BvcHVwUHJldmlld0hpc3RvcnknKSkge1xuXHRcdFx0aGlzdG9yeSA9IHBhcmFtcy5hY3Rpb24gPT09ICdoaXN0b3J5Jztcblx0XHR9XG5cdFx0YS5uYXZwb3B1cC5wZW5kaW5nID0gMDtcblx0XHRjb25zdCByZWZlcmVuY2VFbGVtZW50ID0gZm9vdG5vdGVUYXJnZXQoYSk7XG5cdFx0aWYgKHJlZmVyZW5jZUVsZW1lbnQpIHtcblx0XHRcdGZvb3Rub3RlUHJldmlldyhyZWZlcmVuY2VFbGVtZW50LCBhLm5hdnBvcHVwKTtcblx0XHR9IGVsc2UgaWYgKGRpZmYgfHwgZGlmZiA9PT0gMCkge1xuXHRcdFx0bG9hZERpZmYoYXJ0aWNsZSwgb2xkaWQsIGRpZmYsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoaGlzdG9yeSkge1xuXHRcdFx0bG9hZEFQSVByZXZpZXcoJ2hpc3RvcnknLCBhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHR9IGVsc2UgaWYgKHNob3VsZFNob3dOb25TaW1wbGUoYSkgJiYgcGcucmUuY29udHJpYnMudGVzdChhLmhyZWYpKSB7XG5cdFx0XHRsb2FkQVBJUHJldmlldygnY29udHJpYnMnLCBhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHR9IGVsc2UgaWYgKHNob3VsZFNob3dOb25TaW1wbGUoYSkgJiYgcGcucmUuYmFja2xpbmtzLnRlc3QoYS5ocmVmKSkge1xuXHRcdFx0bG9hZEFQSVByZXZpZXcoJ2JhY2tsaW5rcycsIGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoXG5cdFx0XHQvLyBGSVhNRSBzaG91bGQgYmUgYWJsZSB0byBnZXQgYWxsIHByZXZpZXcgY29tYmluYXRpb25zIHdpdGggb3B0aW9uc1xuXHRcdFx0YXJ0aWNsZS5uYW1lc3BhY2VJZCgpID09PSBwZy5uc0ltYWdlSWQgJiZcblx0XHRcdChzaG91bGRTaG93KGEsICdpbWFnZVBvcHVwc0ZvckltYWdlcycpIHx8ICFhbmNob3JDb250YWluc0ltYWdlKGEpKVxuXHRcdCkge1xuXHRcdFx0bG9hZEFQSVByZXZpZXcoJ2ltYWdlcGFnZXByZXZpZXcnLCBhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHRcdGxvYWRJbWFnZShhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGFydGljbGUubmFtZXNwYWNlSWQoKSA9PT0gcGcubnNDYXRlZ29yeUlkICYmIHNob3VsZFNob3coYSwgJ3BvcHVwQ2F0ZWdvcnlNZW1iZXJzJykpIHtcblx0XHRcdFx0bG9hZEFQSVByZXZpZXcoJ2NhdGVnb3J5JywgYXJ0aWNsZSwgYS5uYXZwb3B1cCk7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHQoYXJ0aWNsZS5uYW1lc3BhY2VJZCgpID09PSBwZy5uc1VzZXJJZCB8fCBhcnRpY2xlLm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zVXNlcnRhbGtJZCkgJiZcblx0XHRcdFx0c2hvdWxkU2hvdyhhLCAncG9wdXBVc2VySW5mbycpXG5cdFx0XHQpIHtcblx0XHRcdFx0bG9hZEFQSVByZXZpZXcoJ3VzZXJpbmZvJywgYXJ0aWNsZSwgYS5uYXZwb3B1cCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2hvdWxkU2hvd05vblNpbXBsZShhKSkge1xuXHRcdFx0XHRzdGFydEFydGljbGVQcmV2aWV3KGFydGljbGUsIG9sZGlkLCBhLm5hdnBvcHVwKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHBlbmRpbmdOYXZwb3BUYXNrID0gKG5hdnBvcCkgPT4ge1xuXHRcdGlmIChuYXZwb3AgJiYgbmF2cG9wLnBlbmRpbmcgPT09IG51bGwpIHtcblx0XHRcdG5hdnBvcC5wZW5kaW5nID0gMDtcblx0XHR9XG5cdFx0KytuYXZwb3AucGVuZGluZztcblx0XHRkZWJ1Z0RhdGEobmF2cG9wKTtcblx0fTtcblx0Y29uc3QgY29tcGxldGVkTmF2cG9wVGFzayA9IChuYXZwb3ApID0+IHtcblx0XHRpZiAobmF2cG9wICYmIG5hdnBvcC5wZW5kaW5nKSB7XG5cdFx0XHQtLW5hdnBvcC5wZW5kaW5nO1xuXHRcdH1cblx0XHRkZWJ1Z0RhdGEobmF2cG9wKTtcblx0fTtcblx0Y29uc3Qgc3RhcnRBcnRpY2xlUHJldmlldyA9IChhcnRpY2xlLCBvbGRpZCwgbmF2cG9wKSA9PiB7XG5cdFx0bmF2cG9wLnJlZGlyID0gMDtcblx0XHRsb2FkUHJldmlldyhhcnRpY2xlLCBvbGRpZCwgbmF2cG9wKTtcblx0fTtcblx0Y29uc3QgbG9hZFByZXZpZXcgPSAoYXJ0aWNsZSwgb2xkaWQsIG5hdnBvcCkgPT4ge1xuXHRcdGlmICghbmF2cG9wLnJlZGlyKSB7XG5cdFx0XHRuYXZwb3Aub3JpZ2luYWxBcnRpY2xlID0gYXJ0aWNsZTtcblx0XHR9XG5cdFx0YXJ0aWNsZS5vbGRpZCA9IG9sZGlkO1xuXHRcdGxvYWRBUElQcmV2aWV3KCdyZXZpc2lvbicsIGFydGljbGUsIG5hdnBvcCk7XG5cdH07XG5cdGNvbnN0IGxvYWRQcmV2aWV3RnJvbVJlZGlyID0gKHJlZGlyTWF0Y2gsIG5hdnBvcCkgPT4ge1xuXHRcdC8vIHJlZGlyTWF0Y2ggaXMgYSByZWdleCBtYXRjaFxuXHRcdGNvbnN0IHRhcmdldCA9IG5ldyBUaXRsZSgpLmZyb21XaWtpVGV4dChyZWRpck1hdGNoWzJdKTtcblx0XHQvLyBvdmVyd3JpdGUgKG9yIGFkZCkgYW5jaG9yIGZyb20gb3JpZ2luYWwgdGFyZ2V0XG5cdFx0Ly8gbWVkaWF3aWtpIGRvZXMgb3ZlcndyaXRlXG5cdFx0aWYgKG5hdnBvcC5hcnRpY2xlLmFuY2hvcikge1xuXHRcdFx0dGFyZ2V0LmFuY2hvciA9IG5hdnBvcC5hcnRpY2xlLmFuY2hvcjtcblx0XHR9XG5cdFx0bmF2cG9wLnJlZGlyKys7XG5cdFx0bmF2cG9wLnJlZGlyVGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdGNvbnN0IHdhcm5SZWRpciA9IHJlZGlyTGluayh0YXJnZXQsIG5hdnBvcC5hcnRpY2xlKTtcblx0XHRzZXRQb3B1cEhUTUwod2FyblJlZGlyLCAncG9wdXBXYXJuUmVkaXInLCBuYXZwb3AuaWROdW1iZXIpO1xuXHRcdG5hdnBvcC5hcnRpY2xlID0gdGFyZ2V0O1xuXHRcdGZpbGxFbXB0eVNwYW5zKHtcblx0XHRcdHJlZGlyOiB0cnVlLFxuXHRcdFx0cmVkaXJUYXJnZXQ6IHRhcmdldCxcblx0XHRcdG5hdnBvcHVwOiBuYXZwb3AsXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGxvYWRQcmV2aWV3KHRhcmdldCwgbnVsbCwgbmF2cG9wKTtcblx0fTtcblx0Y29uc3QgaW5zZXJ0UHJldmlldyA9IChkb3dubG9hZCkgPT4ge1xuXHRcdGlmICghZG93bmxvYWQub3duZXIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcmVkaXJNYXRjaCA9IHBnLnJlLnJlZGlyZWN0LmV4ZWMoZG93bmxvYWQuZGF0YSk7XG5cdFx0aWYgKGRvd25sb2FkLm93bmVyLnJlZGlyID09PSAwICYmIHJlZGlyTWF0Y2gpIHtcblx0XHRcdGxvYWRQcmV2aWV3RnJvbVJlZGlyKHJlZGlyTWF0Y2gsIGRvd25sb2FkLm93bmVyKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGRvd25sb2FkLm93bmVyLnZpc2libGUgfHwgIWdldFZhbHVlT2YoJ3BvcHVwTGF6eVByZXZpZXdzJykpIHtcblx0XHRcdGluc2VydFByZXZpZXdOb3coZG93bmxvYWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBpZCA9IGRvd25sb2FkLm93bmVyLnJlZGlyID8gJ1BSRVZJRVdfUkVESVJfSE9PSycgOiAnUFJFVklFV19IT09LJztcblx0XHRcdGRvd25sb2FkLm93bmVyLmFkZEhvb2soXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRpbnNlcnRQcmV2aWV3Tm93KGRvd25sb2FkKTtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0J3VuaGlkZScsXG5cdFx0XHRcdCdhZnRlcicsXG5cdFx0XHRcdGlkXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgaW5zZXJ0UHJldmlld05vdyA9IChkb3dubG9hZCkgPT4ge1xuXHRcdGlmICghZG93bmxvYWQub3duZXIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3Qgd2lraVRleHQgPSBkb3dubG9hZC5kYXRhO1xuXHRcdGNvbnN0IG5hdnBvcCA9IGRvd25sb2FkLm93bmVyO1xuXHRcdGNvbnN0IGFydCA9IG5hdnBvcC5yZWRpclRhcmdldCB8fCBuYXZwb3Aub3JpZ2luYWxBcnRpY2xlO1xuXHRcdG1ha2VGaXhEYWJzKHdpa2lUZXh0LCBuYXZwb3ApO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFN1bW1hcnlEYXRhJykpIHtcblx0XHRcdGdldFBhZ2VJbmZvKHdpa2lUZXh0LCBkb3dubG9hZCk7XG5cdFx0XHRzZXRQb3B1cFRyYWlsZXIoZ2V0UGFnZUluZm8od2lraVRleHQsIGRvd25sb2FkKSwgbmF2cG9wLmlkTnVtYmVyKTtcblx0XHR9XG5cdFx0bGV0IGltYWdlUGFnZSA9ICcnO1xuXHRcdGltYWdlUGFnZSA9IGFydC5uYW1lc3BhY2VJZCgpID09PSBwZy5uc0ltYWdlSWQgPyBhcnQudG9TdHJpbmcoKSA6IGdldFZhbGlkSW1hZ2VGcm9tV2lraVRleHQod2lraVRleHQpO1xuXHRcdGlmIChpbWFnZVBhZ2UpIHtcblx0XHRcdGxvYWRJbWFnZShUaXRsZS5mcm9tV2lraVRleHQoaW1hZ2VQYWdlKSwgbmF2cG9wKTtcblx0XHR9XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwUHJldmlld3MnKSkge1xuXHRcdFx0aW5zZXJ0QXJ0aWNsZVByZXZpZXcoZG93bmxvYWQsIGFydCwgbmF2cG9wKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGluc2VydEFydGljbGVQcmV2aWV3ID0gKGRvd25sb2FkLCBhcnQsIG5hdnBvcCkgPT4ge1xuXHRcdGlmIChkb3dubG9hZCAmJiB0eXBlb2YgZG93bmxvYWQuZGF0YSA9PT0gdHlwZW9mICcnKSB7XG5cdFx0XHRpZiAoYXJ0Lm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zVGVtcGxhdGVJZCAmJiBnZXRWYWx1ZU9mKCdwb3B1cFByZXZpZXdSYXdUZW1wbGF0ZXMnKSkge1xuXHRcdFx0XHQvLyBGSVhNRSBjb21wYXJlL2NvbnNvbGlkYXRlIHdpdGggZGlmZiBlc2NhcGluZyBjb2RlIGZvciB3aWtpdGV4dFxuXHRcdFx0XHRjb25zdCBoID0gYDxocj48c3BhbiBzdHlsZT1cImZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XCI+JHtkb3dubG9hZC5kYXRhXG5cdFx0XHRcdFx0LmVudGlmeSgpXG5cdFx0XHRcdFx0LnNwbGl0KFN0cmluZy5yYXdgXFxuYClcblx0XHRcdFx0XHQuam9pbihTdHJpbmcucmF3YDxicj5cXG5gKX08L3NwYW4+YDtcblx0XHRcdFx0c2V0UG9wdXBIVE1MKGgsICdwb3B1cFByZXZpZXcnLCBuYXZwb3AuaWROdW1iZXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcCA9IHByZXBQcmV2aWV3bWFrZXIoZG93bmxvYWQuZGF0YSwgYXJ0LCBuYXZwb3ApO1xuXHRcdFx0XHRwLnNob3dQcmV2aWV3KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBwcmVwUHJldmlld21ha2VyID0gKGRhdGEsIGFydGljbGUsIG5hdnBvcCkgPT4ge1xuXHRcdC8vIGRlYWwgd2l0aCB0cmlja3N5IGFuY2hvcnNcblx0XHRjb25zdCBkID0gYW5jaG9yaXplKGRhdGEsIGFydGljbGUuYW5jaG9yU3RyaW5nKCkpO1xuXHRcdGNvbnN0IHVybEJhc2UgPSBqb2luUGF0aChbcGcud2lraS5hcnRpY2xlYmFzZSwgYXJ0aWNsZS51cmxTdHJpbmcoKV0pO1xuXHRcdGNvbnN0IHAgPSBuZXcgUHJldmlld21ha2VyKGQsIHVybEJhc2UsIG5hdnBvcCk7XG5cdFx0cmV0dXJuIHA7XG5cdH07XG5cdC8vIFRyeSB0byBpbWl0YXRlIHRoZSB3YXkgbWVkaWF3aWtpIGdlbmVyYXRlcyBIVE1MIGFuY2hvcnMgZnJvbSBzZWN0aW9uIHRpdGxlc1xuXHRjb25zdCBhbmNob3JpemUgPSAoZCwgYW5jaCkgPT4ge1xuXHRcdGlmICghYW5jaCkge1xuXHRcdFx0cmV0dXJuIGQ7XG5cdFx0fVxuXHRcdGNvbnN0IGFuY2hSZSA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgKD86PStcXFxccyoke2xpdGVyYWxpemVSZWdleChhbmNoKS5yZXBsYWNlKC9bIF9dL2csICdbXyBdJyl9XFxcXHMqPSt8XFxcXHtcXFxce1xcXFxzKiR7Z2V0VmFsdWVPZihcblx0XHRcdFx0J3BvcHVwQW5jaG9yUmVnZXhwJ1xuXHRcdFx0KX1cXFxccyooPzpcXFxcfFtefH1dKikqP1xcXFxzKiR7bGl0ZXJhbGl6ZVJlZ2V4KGFuY2gpfVxcXFxzKig/OlxcXFx8W159XSopP319KWBcblx0XHQpO1xuXHRcdGNvbnN0IG1hdGNoID0gZC5tYXRjaChhbmNoUmUpO1xuXHRcdGlmIChtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAwICYmIG1hdGNoWzBdKSB7XG5cdFx0XHRyZXR1cm4gZC5zbGljZShNYXRoLm1heCgwLCBkLmluZGV4T2YobWF0Y2hbMF0pKSk7XG5cdFx0fVxuXHRcdC8vIG5vdyB0cnkgdG8gZGVhbCB3aXRoID09PSBmb28gW1tiYXJ8YmF6XV0gYm9vbSA9PT0gLT4gI2Zvb19iYXpfYm9vbVxuXHRcdGNvbnN0IGxpbmVzID0gZC5zcGxpdCgnXFxuJyk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0bGluZXNbaV0gPSBsaW5lc1tpXVxuXHRcdFx0XHQucmVwbGFjZSgvXFxbezJ9KFteXFxdfF0qP1xcfCk/KC4qPyldezJ9L2csICckMicpXG5cdFx0XHRcdC5yZXBsYWNlKC8nJycoW14nXSkvZywgJyQxJylcblx0XHRcdFx0LnJlcGxhY2UoLycnKFteJ10pL2csICckMScpO1xuXHRcdFx0aWYgKGFuY2hSZS50ZXN0KGxpbmVzW2ldKSkge1xuXHRcdFx0XHRyZXR1cm4gZFxuXHRcdFx0XHRcdC5zcGxpdCgnXFxuJylcblx0XHRcdFx0XHQuc2xpY2UoaSlcblx0XHRcdFx0XHQuam9pbignXFxuJylcblx0XHRcdFx0XHQucmVwbGFjZSgvXltePV0qLywgJycpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZDtcblx0fTtcblx0Y29uc3Qga2lsbFBvcHVwID0gZnVuY3Rpb24ga2lsbFBvcHVwKCkge1xuXHRcdHJlbW92ZU1vZGlmaWVyS2V5TGlzdGVuZXIodGhpcyk7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwU2hvcnRjdXRLZXlzJykpIHtcblx0XHRcdHJtUG9wdXBTaG9ydGN1dHMoKTtcblx0XHR9XG5cdFx0aWYgKCFwZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAocGcuY3VycmVudC5saW5rICYmIHBnLmN1cnJlbnQubGluay5uYXZwb3B1cCkge1xuXHRcdFx0cGcuY3VycmVudC5saW5rLm5hdnBvcHVwLmJhbmlzaCgpO1xuXHRcdH1cblx0XHRwZy5jdXJyZW50LmxpbmsgPSBudWxsO1xuXHRcdGFib3J0QWxsRG93bmxvYWRzKCk7XG5cdFx0aWYgKHBnLnRpbWVyLmNoZWNrUG9wdXBQb3NpdGlvbikge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbChwZy50aW1lci5jaGVja1BvcHVwUG9zaXRpb24pO1xuXHRcdFx0cGcudGltZXIuY2hlY2tQb3B1cFBvc2l0aW9uID0gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7IC8vIHByZXNlcnZlIGRlZmF1bHQgYWN0aW9uXG5cdH07XG5cdC8vIEVOREZJTEU6IGFjdGlvbnMuanNcblx0Ly8gU1RBUlRGSUxFOiBkb21kcmFnLmpzXG5cdC8qKlxuXHQgKiBAZmlsZW92ZXJ2aWV3XG5cdCAqIFRoZSB7QHNvdXJjZSBEcmFnfSBvYmplY3QsIHdoaWNoIGVuYWJsZXMgb2JqZWN0cyB0byBiZSBkcmFnZ2VkIGFyb3VuZC5cblx0ICogPHByZT5cblx0ICpcblx0ICogZG9tLWRyYWcuanNcblx0ICogMDkuMjUuMjAwMVxuXHQgKiB3d3cueW91bmdwdXAubmV0XG5cdCAqXG5cdCAqIDEwLjI4LjIwMDEgLSBmaXhlZCBtaW5vciBidWcgd2hlcmUgZXZlbnRzXG5cdCAqXG5cdCAqIHNvbWV0aW1lcyBmaXJlZCBvZmYgdGhlIGhhbmRsZSwgbm90IHRoZSByb290LlxuXHQgKiBQYXJlZCBkb3duLCBzb21lIGhvb2tzIGFkZGVkIGJ5IEx1cGluXG5cdCAqIENvcHlyaWdodCBBYXJvbiBCb29kbWFuLlxuXHQgKiBTYXlpbmcgc3R1cGlkIHRoaW5ncyBkYWlseSBzaW5jZSBNYXJjaCAyMDAxLlxuXHQgKiA8L3ByZT5cblx0ICovXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IERyYWcgb2JqZWN0LiBUaGlzIGlzIHVzZWQgdG8gbWFrZSB2YXJpb3VzIERPTSBlbGVtZW50cyBkcmFnZ2FibGUuXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0Y2xhc3MgRHJhZyB7XG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHQvKipcblx0XHRcdCAqIENvbmRpdGlvbiB0byBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgdG8gZHJhZy4gVGhpcyBmdW5jdGlvbiBzaG91bGQgdGFrZSBvbmUgcGFyYW1ldGVyLFxuXHRcdFx0ICogYW4gRXZlbnQuICBUbyBkaXNhYmxlIHRoaXMsIHNldCBpdCB0byA8Y29kZT5udWxsPC9jb2RlPi5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBGdW5jdGlvblxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnN0YXJ0Q29uZGl0aW9uID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogSG9vayB0byBiZSBydW4gd2hlbiB0aGUgZHJhZyBmaW5pc2hlcy4gVGhpcyBpcyBwYXNzZWQgdGhlIGZpbmFsIGNvb3JkaW5hdGVzIG9mIHRoZVxuXHRcdFx0ICogZHJhZ2dlZCBvYmplY3QgKHR3byBpbnRlZ2VycywgeCBhbmQgeSkuIFRvIGRpc2FibGVzIHRoaXMsIHNldCBpdCB0byA8Y29kZT5udWxsPC9jb2RlPi5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBGdW5jdGlvblxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmVuZEhvb2sgPSBudWxsO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBHZXRzIGFuIGV2ZW50IGluIGEgY3Jvc3MtYnJvd3NlciBtYW5uZXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0V2ZW50fSBlXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRzdGF0aWMgZml4RShlKSB7XG5cdFx0XHRpZiAoZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGUgPSB3aW5kb3cuZXZlbnQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZS5sYXllclggPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRlLmxheWVyWCA9IGUub2Zmc2V0WDtcblx0XHRcdH1cblx0XHRcdGlmIChlLmxheWVyWSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGUubGF5ZXJZID0gZS5vZmZzZXRZO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGU7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEluaXRpYWxpc2VzIHRoZSBEcmFnIGluc3RhbmNlIGJ5IHRlbGxpbmcgaXQgd2hpY2ggb2JqZWN0IHlvdSB3YW50IHRvIGJlIGRyYWdnYWJsZSwgYW5kIHdoYXRcblx0XHQgKiB5b3Ugd2FudCB0byBkcmFnIGl0IGJ5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtET01FbGVtZW50fSBvIFRoZSBcImhhbmRsZVwiIGJ5IHdoaWNoIDxjb2RlPm9Sb290PC9jb2RlPiBpcyBkcmFnZ2VkLlxuXHRcdCAqIEBwYXJhbSB7RE9NRWxlbWVudH0gb1Jvb3QgVGhlIG9iamVjdCB3aGljaCBtb3ZlcyB3aGVuIDxjb2RlPm88L2NvZGU+IGlzIGRyYWdnZWQsIG9yIDxjb2RlPm88L2NvZGU+IGlmIG9taXR0ZWQuXG5cdFx0ICovXG5cdFx0aW5pdChvLCBvUm9vdCkge1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHR0aGlzLm9iaiA9IG87XG5cdFx0XHRvLm9ubW91c2Vkb3duID0gKGUpID0+IHtcblx0XHRcdFx0c2VsZi5zdGFydChlKTtcblx0XHRcdH07XG5cdFx0XHRvLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHRvLnBvcHVwc19kcmFnZ2FibGUgPSB0cnVlO1xuXHRcdFx0by5obW9kZSA9IHRydWU7XG5cdFx0XHRvLnZtb2RlID0gdHJ1ZTtcblx0XHRcdG8ucm9vdCA9IG9Sb290IHx8IG87XG5cdFx0XHRpZiAoTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUludChvLnJvb3Quc3R5bGUubGVmdCwgMTApKSkge1xuXHRcdFx0XHRvLnJvb3Quc3R5bGUubGVmdCA9ICcwcHgnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKE51bWJlci5pc05hTihOdW1iZXIucGFyc2VJbnQoby5yb290LnN0eWxlLnRvcCwgMTApKSkge1xuXHRcdFx0XHRvLnJvb3Quc3R5bGUudG9wID0gJzBweCc7XG5cdFx0XHR9XG5cdFx0XHRvLnJvb3Qub250aGlzU3RhcnQgPSAoKSA9PiB7fTtcblx0XHRcdG8ucm9vdC5vbnRoaXNFbmQgPSAoKSA9PiB7fTtcblx0XHRcdG8ucm9vdC5vbnRoaXMgPSAoKSA9PiB7fTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU3RhcnRzIHRoZSBkcmFnLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcGFyYW0ge0V2ZW50fSBlXG5cdFx0ICovXG5cdFx0c3RhcnQoZSkge1xuXHRcdFx0Y29uc3QgbyA9IHRoaXMub2JqOyAvLyA9IHRoaXM7XG5cdFx0XHRlID0gRHJhZy5maXhFKGUpO1xuXHRcdFx0aWYgKHRoaXMuc3RhcnRDb25kaXRpb24gJiYgIXRoaXMuc3RhcnRDb25kaXRpb24oZSkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgeSA9IE51bWJlci5wYXJzZUludChvLnZtb2RlID8gby5yb290LnN0eWxlLnRvcCA6IG8ucm9vdC5zdHlsZS5ib3R0b20sIDEwKTtcblx0XHRcdGNvbnN0IHggPSBOdW1iZXIucGFyc2VJbnQoby5obW9kZSA/IG8ucm9vdC5zdHlsZS5sZWZ0IDogby5yb290LnN0eWxlLnJpZ2h0LCAxMCk7XG5cdFx0XHRvLnJvb3Qub250aGlzU3RhcnQoeCwgeSk7XG5cdFx0XHRvLmxhc3RNb3VzZVggPSBlLmNsaWVudFg7XG5cdFx0XHRvLmxhc3RNb3VzZVkgPSBlLmNsaWVudFk7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdG8ub25tb3VzZW1vdmVEZWZhdWx0ID0gZG9jdW1lbnQub25tb3VzZW1vdmU7XG5cdFx0XHRvLmRyYWdnaW5nID0gdHJ1ZTtcblx0XHRcdGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gKGUpID0+IHtcblx0XHRcdFx0c2VsZi5kcmFnKGUpO1xuXHRcdFx0fTtcblx0XHRcdGRvY3VtZW50Lm9ubW91c2V1cCA9IChlKSA9PiB7XG5cdFx0XHRcdHNlbGYuZW5kKGUpO1xuXHRcdFx0fTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogRG9lcyB0aGUgZHJhZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGRyYWcoZSkge1xuXHRcdFx0ZSA9IERyYWcuZml4RShlKTtcblx0XHRcdGNvbnN0IG8gPSB0aGlzLm9iajtcblx0XHRcdGNvbnN0IGV5ID0gZS5jbGllbnRZO1xuXHRcdFx0Y29uc3QgZXggPSBlLmNsaWVudFg7XG5cdFx0XHRjb25zdCB5ID0gTnVtYmVyLnBhcnNlSW50KG8udm1vZGUgPyBvLnJvb3Quc3R5bGUudG9wIDogby5yb290LnN0eWxlLmJvdHRvbSwgMTApO1xuXHRcdFx0Y29uc3QgeCA9IE51bWJlci5wYXJzZUludChvLmhtb2RlID8gby5yb290LnN0eWxlLmxlZnQgOiBvLnJvb3Quc3R5bGUucmlnaHQsIDEwKTtcblx0XHRcdGNvbnN0IG54ID0geCArIChleCAtIG8ubGFzdE1vdXNlWCkgKiAoby5obW9kZSA/IDEgOiAtMSk7XG5cdFx0XHRjb25zdCBueSA9IHkgKyAoZXkgLSBvLmxhc3RNb3VzZVkpICogKG8udm1vZGUgPyAxIDogLTEpO1xuXHRcdFx0dGhpcy5vYmoucm9vdC5zdHlsZVtvLmhtb2RlID8gJ2xlZnQnIDogJ3JpZ2h0J10gPSBgJHtueH1weGA7XG5cdFx0XHR0aGlzLm9iai5yb290LnN0eWxlW28udm1vZGUgPyAndG9wJyA6ICdib3R0b20nXSA9IGAke255fXB4YDtcblx0XHRcdHRoaXMub2JqLmxhc3RNb3VzZVggPSBleDtcblx0XHRcdHRoaXMub2JqLmxhc3RNb3VzZVkgPSBleTtcblx0XHRcdHRoaXMub2JqLnJvb3Qub250aGlzKG54LCBueSk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEVuZHMgdGhlIGRyYWcuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGVuZCgpIHtcblx0XHRcdGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gdGhpcy5vYmoub25tb3VzZW1vdmVEZWZhdWx0O1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcblx0XHRcdHRoaXMub2JqLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHRpZiAodGhpcy5lbmRIb29rKSB7XG5cdFx0XHRcdHRoaXMuZW5kSG9vayhcblx0XHRcdFx0XHROdW1iZXIucGFyc2VJbnQodGhpcy5vYmoucm9vdC5zdHlsZVt0aGlzLm9iai5obW9kZSA/ICdsZWZ0JyA6ICdyaWdodCddLCAxMCksXG5cdFx0XHRcdFx0TnVtYmVyLnBhcnNlSW50KHRoaXMub2JqLnJvb3Quc3R5bGVbdGhpcy5vYmoudm1vZGUgPyAndG9wJyA6ICdib3R0b20nXSwgMTApXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIEVOREZJTEU6IGRvbWRyYWcuanNcblx0Ly8gU1RBUlRGSUxFOiBzdHJ1Y3R1cmVzLmpzXG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwgPSB7fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cExheW91dCA9ICgpID0+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0J3BvcHVwRXJyb3InLFxuXHRcdFx0J3BvcHVwSW1hZ2UnLFxuXHRcdFx0J3BvcHVwVG9wTGlua3MnLFxuXHRcdFx0J3BvcHVwVGl0bGUnLFxuXHRcdFx0J3BvcHVwVXNlckRhdGEnLFxuXHRcdFx0J3BvcHVwRGF0YScsXG5cdFx0XHQncG9wdXBPdGhlckxpbmtzJyxcblx0XHRcdCdwb3B1cFJlZGlyJyxcblx0XHRcdFsncG9wdXBXYXJuUmVkaXInLCAncG9wdXBSZWRpclRvcExpbmtzJywgJ3BvcHVwUmVkaXJUaXRsZScsICdwb3B1cFJlZGlyRGF0YScsICdwb3B1cFJlZGlyT3RoZXJMaW5rcyddLFxuXHRcdFx0J3BvcHVwTWlzY1Rvb2xzJyxcblx0XHRcdFsncG9wdXBSZWRsaW5rJ10sXG5cdFx0XHQncG9wdXBQcmVQcmV2aWV3U2VwJyxcblx0XHRcdCdwb3B1cFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwU2Vjb25kUHJldmlldycsXG5cdFx0XHQncG9wdXBQcmV2aWV3TW9yZScsXG5cdFx0XHQncG9wdXBQb3N0UHJldmlldycsXG5cdFx0XHQncG9wdXBGaXhEYWInLFxuXHRcdF07XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBSZWRpclNwYW5zID0gKCkgPT4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHQncG9wdXBSZWRpcicsXG5cdFx0XHQncG9wdXBXYXJuUmVkaXInLFxuXHRcdFx0J3BvcHVwUmVkaXJUb3BMaW5rcycsXG5cdFx0XHQncG9wdXBSZWRpclRpdGxlJyxcblx0XHRcdCdwb3B1cFJlZGlyRGF0YScsXG5cdFx0XHQncG9wdXBSZWRpck90aGVyTGlua3MnLFxuXHRcdF07XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBUaXRsZSA9ICh4KSA9PiB7XG5cdFx0bG9nKCdkZWZhdWx0c3RydWN0dXJlLnBvcHVwVGl0bGUnKTtcblx0XHRpZiAoIWdldFZhbHVlT2YoJ3BvcHVwTmF2TGlua3MnKSkge1xuXHRcdFx0cmV0dXJuIG5hdmxpbmtTdHJpbmdUb0hUTUwoJzxiPjw8bWFpbmxpbms+PjwvYj4nLCB4LmFydGljbGUsIHgucGFyYW1zKTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9O1xuXHRwZy5zdHJ1Y3R1cmVzLm9yaWdpbmFsLnBvcHVwVG9wTGlua3MgPSAoeCkgPT4ge1xuXHRcdGxvZygnZGVmYXVsdHN0cnVjdHVyZS5wb3B1cFRvcExpbmtzJyk7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwTmF2TGlua3MnKSkge1xuXHRcdFx0cmV0dXJuIG5hdkxpbmtzSFRNTCh4LmFydGljbGUsIHguaGludCwgeC5wYXJhbXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBJbWFnZSA9ICh4KSA9PiB7XG5cdFx0bG9nKGBvcmlnaW5hbC5wb3B1cEltYWdlLCB4LmFydGljbGU9JHt4LmFydGljbGV9LCB4Lm5hdnBvcC5pZE51bWJlcj0ke3gubmF2cG9wLmlkTnVtYmVyfWApO1xuXHRcdHJldHVybiBpbWFnZUhUTUwoeC5hcnRpY2xlLCB4Lm5hdnBvcC5pZE51bWJlcik7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBSZWRpclRpdGxlID0gcGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFRpdGxlO1xuXHRwZy5zdHJ1Y3R1cmVzLm9yaWdpbmFsLnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBUb3BMaW5rcztcblx0Y29uc3QgY29weVN0cnVjdHVyZSA9IChvbGRTdHJ1Y3R1cmUsIG5ld1N0cnVjdHVyZSkgPT4ge1xuXHRcdHBnLnN0cnVjdHVyZXNbbmV3U3RydWN0dXJlXSA9IHt9O1xuXHRcdGZvciAoY29uc3QgcHJvcCBpbiBwZy5zdHJ1Y3R1cmVzW29sZFN0cnVjdHVyZV0pIHtcblx0XHRcdGlmICghT2JqZWN0Lmhhc093bihwZy5zdHJ1Y3R1cmVzW29sZFN0cnVjdHVyZV0sIHByb3ApKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cGcuc3RydWN0dXJlc1tuZXdTdHJ1Y3R1cmVdW3Byb3BdID0gcGcuc3RydWN0dXJlc1tvbGRTdHJ1Y3R1cmVdW3Byb3BdO1xuXHRcdH1cblx0fTtcblx0Y29weVN0cnVjdHVyZSgnb3JpZ2luYWwnLCAnbm9zdGFsZ2lhJyk7XG5cdHBnLnN0cnVjdHVyZXMubm9zdGFsZ2lhLnBvcHVwVG9wTGlua3MgPSAoeCkgPT4ge1xuXHRcdGxldCBzdHIgPSAnJztcblx0XHRzdHIgKz0gJzxiPjw8bWFpbmxpbmt8c2hvcnRjdXQ9ID4+PC9iPic7XG5cdFx0Ly8gdXNlciBsaW5rc1xuXHRcdC8vIGNvbnRyaWJzIC0gbG9nIC0gY291bnQgLSBlbWFpbCAtIGJsb2NrXG5cdFx0Ly8gY291bnQgb25seSBpZiBhcHBsaWNhYmxlOyBibG9jayBvbmx5IGlmIHBvcHVwQWRtaW5MaW5rc1xuXHRcdHN0ciArPSAnaWYodXNlcil7PGJyPjw8Y29udHJpYnN8c2hvcnRjdXQ9Yz4+Jztcblx0XHRzdHIgKz0gJ2lmKHdpa2ltZWRpYSl7Kjw8Y291bnR8c2hvcnRjdXQ9Iz4+fSc7XG5cdFx0c3RyICs9ICdpZihpcHVzZXIpe31lbHNleyo8PGVtYWlsfHNob3J0Y3V0PUU+Pn1pZihhZG1pbil7Kjw8YmxvY2t8c2hvcnRjdXQ9Yj4+fX0nO1xuXHRcdC8vIGVkaXRpbmcgbGlua3Ncblx0XHQvLyB0YWxrcGFnZSAgIC0+IGVkaXR8bmV3IC0gaGlzdG9yeSAtIHVufHdhdGNoIC0gYXJ0aWNsZXxlZGl0XG5cdFx0Ly8gb3RoZXIgcGFnZSAtPiBlZGl0IC0gaGlzdG9yeSAtIHVufHdhdGNoIC0gdGFsa3xlZGl0fG5ld1xuXHRcdGNvbnN0IGVkaXRzdHIgPSAnPDxlZGl0fHNob3J0Y3V0PWU+Pic7XG5cdFx0Y29uc3QgZWRpdE9sZGlkU3RyID0gYGlmKG9sZGlkKXs8PGVkaXRPbGR8c2hvcnRjdXQ9ZT4+fDw8cmV2ZXJ0fHNob3J0Y3V0PXZ8cnY+Pnw8PGVkaXR8Y3VyPj59ZWxzZXske2VkaXRzdHJ9fWA7XG5cdFx0Y29uc3QgaGlzdG9yeXN0ciA9ICc8PGhpc3Rvcnl8c2hvcnRjdXQ9aD4+Jztcblx0XHRjb25zdCB3YXRjaHN0ciA9ICc8PHVud2F0Y2h8dW53YXRjaFNob3J0Pj58PDx3YXRjaHxzaG9ydGN1dD13fHdhdGNoVGhpbmd5Pj4nO1xuXHRcdHN0ciArPVxuXHRcdFx0YDxicj5pZih0YWxrKXske2VkaXRPbGRpZFN0cn18PDxuZXd8c2hvcnRjdXQ9Kz4+YCArXG5cdFx0XHRgKiR7aGlzdG9yeXN0cn0qJHt3YXRjaHN0cn0qYCArXG5cdFx0XHQnPGI+PDxhcnRpY2xlfHNob3J0Y3V0PWE+PjwvYj58PDxlZGl0QXJ0aWNsZXxlZGl0Pj4nICtcblx0XHRcdGB9ZWxzZXske1xuXHRcdFx0XHQvLyBub3QgYSB0YWxrIHBhZ2Vcblx0XHRcdFx0ZWRpdE9sZGlkU3RyXG5cdFx0XHR9KiR7aGlzdG9yeXN0cn0qJHt3YXRjaHN0cn0qYCArXG5cdFx0XHQnPGI+PDx0YWxrfHNob3J0Y3V0PXQ+PjwvYj58PDxlZGl0VGFsa3xlZGl0Pj58PDxuZXdUYWxrfHNob3J0Y3V0PSt8bmV3Pj59Jztcblx0XHQvLyBtaXNjIGxpbmtzXG5cdFx0c3RyICs9ICc8YnI+PDx3aGF0TGlua3NIZXJlfHNob3J0Y3V0PWw+Pio8PHJlbGF0ZWRDaGFuZ2VzfHNob3J0Y3V0PXI+Pic7XG5cdFx0c3RyICs9ICdpZihhZG1pbil7PGJyPn1lbHNleyp9PDxtb3ZlfHNob3J0Y3V0PW0+Pic7XG5cdFx0Ly8gYWRtaW4gbGlua3Ncblx0XHRzdHIgKz1cblx0XHRcdCdpZihhZG1pbil7Kjw8dW5wcm90ZWN0fHVucHJvdGVjdFNob3J0Pj58PDxwcm90ZWN0fHNob3J0Y3V0PXA+PionICtcblx0XHRcdCc8PHVuZGVsZXRlfHVuZGVsZXRlU2hvcnQ+Pnw8PGRlbGV0ZXxzaG9ydGN1dD1kPj59Jztcblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChzdHIsIHguYXJ0aWNsZSwgeC5wYXJhbXMpO1xuXHR9O1xuXHRwZy5zdHJ1Y3R1cmVzLm5vc3RhbGdpYS5wb3B1cFJlZGlyVG9wTGlua3MgPSBwZy5zdHJ1Y3R1cmVzLm5vc3RhbGdpYS5wb3B1cFRvcExpbmtzO1xuXHQvKiogLS0gZmFuY3kgLS0gKi9cblx0Y29weVN0cnVjdHVyZSgnb3JpZ2luYWwnLCAnZmFuY3knKTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFRpdGxlID0gKHgpID0+IHtcblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTCgnPGZvbnQgc2l6ZT0rMD48PG1haW5saW5rPj48L2ZvbnQ+JywgeC5hcnRpY2xlLCB4LnBhcmFtcyk7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBUb3BMaW5rcyA9ICh4KSA9PiB7XG5cdFx0Y29uc3QgaGlzdCA9ICc8PGhpc3Rvcnl8c2hvcnRjdXQ9aHxoaXN0Pj58PDxsYXN0RWRpdHxzaG9ydGN1dD0vfGxhc3Q+Pnw8PGVkaXRvcnN8c2hvcnRjdXQ9RXxlZHM+Pic7XG5cdFx0Y29uc3Qgd2F0Y2ggPSAnPDx1bndhdGNofHVud2F0Y2hTaG9ydD4+fDw8d2F0Y2h8c2hvcnRjdXQ9d3x3YXRjaFRoaW5neT4+Jztcblx0XHRjb25zdCBtb3ZlID0gJzw8bW92ZXxzaG9ydGN1dD1tfG1vdmU+Pic7XG5cdFx0cmV0dXJuIG5hdmxpbmtTdHJpbmdUb0hUTUwoXG5cdFx0XHQnaWYodGFsayl7JyArXG5cdFx0XHRcdGA8PGVkaXR8c2hvcnRjdXQ9ZT4+fDw8bmV3fHNob3J0Y3V0PSt8Kz4+KiR7aGlzdH0qYCArXG5cdFx0XHRcdCc8PGFydGljbGV8c2hvcnRjdXQ9YT4+fDw8ZWRpdEFydGljbGV8ZWRpdD4+JyArXG5cdFx0XHRcdGAqJHt3YXRjaH0qJHttb3ZlfX1lbHNlezw8ZWRpdHxzaG9ydGN1dD1lPj4qJHtoaXN0fSo8PHRhbGt8c2hvcnRjdXQ9dHw+Pnw8PGVkaXRUYWxrfGVkaXQ+Pnw8PG5ld1RhbGt8c2hvcnRjdXQ9K3xuZXc+PmAgK1xuXHRcdFx0XHRgKiR7d2F0Y2h9KiR7bW92ZX19PGJyPmAsXG5cdFx0XHR4LmFydGljbGUsXG5cdFx0XHR4LnBhcmFtc1xuXHRcdCk7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBPdGhlckxpbmtzID0gKHgpID0+IHtcblx0XHRjb25zdCBhZG1pbiA9XG5cdFx0XHQnPDx1bnByb3RlY3R8dW5wcm90ZWN0U2hvcnQ+Pnw8PHByb3RlY3R8c2hvcnRjdXQ9cD4+Kjw8dW5kZWxldGV8dW5kZWxldGVTaG9ydD4+fDw8ZGVsZXRlfHNob3J0Y3V0PWR8ZGVsPj4nO1xuXHRcdGxldCB1c2VyID0gJzw8Y29udHJpYnN8c2hvcnRjdXQ9Yz4+aWYod2lraW1lZGlhKXt8PDxjb3VudHxzaG9ydGN1dD0jfCM+Pn0nO1xuXHRcdHVzZXIgKz0gYGlmKGlwdXNlcil7fDw8YXJpbj4+fWVsc2V7Kjw8ZW1haWx8c2hvcnRjdXQ9RXwke3BvcHVwU3RyaW5nKFxuXHRcdFx0J2VtYWlsJ1xuXHRcdCl9Pj59aWYoYWRtaW4peyo8PGJsb2NrfHNob3J0Y3V0PWI+Pn1gO1xuXHRcdGNvbnN0IG5vcm1hbCA9ICc8PHdoYXRMaW5rc0hlcmV8c2hvcnRjdXQ9bHxsaW5rcyBoZXJlPj4qPDxyZWxhdGVkQ2hhbmdlc3xzaG9ydGN1dD1yfHJlbGF0ZWQ+Pic7XG5cdFx0cmV0dXJuIG5hdmxpbmtTdHJpbmdUb0hUTUwoXG5cdFx0XHRgPGJyPmlmKHVzZXIpeyR7dXNlcn0qfWlmKGFkbWluKXske2FkbWlufWlmKHVzZXIpezxicj59ZWxzZXsqfX0ke25vcm1hbH1gLFxuXHRcdFx0eC5hcnRpY2xlLFxuXHRcdFx0eC5wYXJhbXNcblx0XHQpO1xuXHR9O1xuXHRwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwUmVkaXJUaXRsZSA9IHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBUaXRsZTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFJlZGlyVG9wTGlua3MgPSBwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwVG9wTGlua3M7XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBSZWRpck90aGVyTGlua3MgPSBwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwT3RoZXJMaW5rcztcblx0LyoqIC0tIGZhbmN5MiAtLSAqL1xuXHQvLyBoYWNrIGZvciBNYWNHeXZlck1hZ2ljXG5cdGNvcHlTdHJ1Y3R1cmUoJ2ZhbmN5JywgJ2ZhbmN5MicpO1xuXHRwZy5zdHJ1Y3R1cmVzLmZhbmN5Mi5wb3B1cFRvcExpbmtzID0gLy8gaGFjayBvdXQgdGhlIDxicj4gYXQgdGhlIGVuZCBhbmQgcHV0IG9uZSBhdCB0aGUgYmVnaW5uaW5nXG5cdFx0KHgpID0+IHtcblx0XHRcdHJldHVybiBgPGJyPiR7cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFRvcExpbmtzKHgpLnJlcGxhY2UoLzxicj4kL2ksICcnKX1gO1xuXHRcdH07XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kyLnBvcHVwTGF5b3V0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHQncG9wdXBFcnJvcicsXG5cdFx0XHQncG9wdXBJbWFnZScsXG5cdFx0XHQncG9wdXBUaXRsZScsXG5cdFx0XHQncG9wdXBVc2VyRGF0YScsXG5cdFx0XHQncG9wdXBEYXRhJyxcblx0XHRcdCdwb3B1cFRvcExpbmtzJyxcblx0XHRcdCdwb3B1cE90aGVyTGlua3MnLFxuXHRcdFx0J3BvcHVwUmVkaXInLFxuXHRcdFx0Wydwb3B1cFdhcm5SZWRpcicsICdwb3B1cFJlZGlyVG9wTGlua3MnLCAncG9wdXBSZWRpclRpdGxlJywgJ3BvcHVwUmVkaXJEYXRhJywgJ3BvcHVwUmVkaXJPdGhlckxpbmtzJ10sXG5cdFx0XHQncG9wdXBNaXNjVG9vbHMnLFxuXHRcdFx0Wydwb3B1cFJlZGxpbmsnXSxcblx0XHRcdCdwb3B1cFByZVByZXZpZXdTZXAnLFxuXHRcdFx0J3BvcHVwUHJldmlldycsXG5cdFx0XHQncG9wdXBTZWNvbmRQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cFByZXZpZXdNb3JlJyxcblx0XHRcdCdwb3B1cFBvc3RQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cEZpeERhYicsXG5cdFx0XTtcblx0fTtcblx0LyoqIC0tIG1lbnVzIC0tICovXG5cdGNvcHlTdHJ1Y3R1cmUoJ29yaWdpbmFsJywgJ21lbnVzJyk7XG5cdHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBMYXlvdXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdCdwb3B1cEVycm9yJyxcblx0XHRcdCdwb3B1cEltYWdlJyxcblx0XHRcdCdwb3B1cFRvcExpbmtzJyxcblx0XHRcdCdwb3B1cFRpdGxlJyxcblx0XHRcdCdwb3B1cE90aGVyTGlua3MnLFxuXHRcdFx0J3BvcHVwUmVkaXInLFxuXHRcdFx0Wydwb3B1cFdhcm5SZWRpcicsICdwb3B1cFJlZGlyVG9wTGlua3MnLCAncG9wdXBSZWRpclRpdGxlJywgJ3BvcHVwUmVkaXJEYXRhJywgJ3BvcHVwUmVkaXJPdGhlckxpbmtzJ10sXG5cdFx0XHQncG9wdXBVc2VyRGF0YScsXG5cdFx0XHQncG9wdXBEYXRhJyxcblx0XHRcdCdwb3B1cE1pc2NUb29scycsXG5cdFx0XHRbJ3BvcHVwUmVkbGluayddLFxuXHRcdFx0J3BvcHVwUHJlUHJldmlld1NlcCcsXG5cdFx0XHQncG9wdXBQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cFNlY29uZFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwUHJldmlld01vcmUnLFxuXHRcdFx0J3BvcHVwUG9zdFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwRml4RGFiJyxcblx0XHRdO1xuXHR9O1xuXHRwZy5zdHJ1Y3R1cmVzLm1lbnVzLnBvcHVwVG9wTGlua3MgPSAoeCwgc2hvcnRlcikgPT4ge1xuXHRcdC8vIEZJWE1FIG1heWJlIHRoaXMgc3R1ZmYgc2hvdWxkIGJlIGNhY2hlZFxuXHRcdGNvbnN0IHMgPSBbXTtcblx0XHRjb25zdCBkcm9wZGl2ID0gJzxkaXYgY2xhc3M9XCJwb3B1cF9kcm9wXCI+Jztcblx0XHRjb25zdCBlbmRkaXYgPSAnPC9kaXY+Jztcblx0XHRsZXQgaGlzdCA9ICc8PGhpc3Rvcnl8c2hvcnRjdXQ9aD4+Jztcblx0XHRpZiAoIXNob3J0ZXIpIHtcblx0XHRcdGhpc3QgPSBgPG1lbnVyb3c+JHtoaXN0fXw8PGhpc3RvcnlmZWVkfHJzcz4+fDw8ZWRpdG9yc3xzaG9ydGN1dD1FPj48L21lbnVyb3c+YDtcblx0XHR9XG5cdFx0Y29uc3QgbGFzdGVkaXQgPSAnPDxsYXN0RWRpdHxzaG9ydGN1dD0vfHNob3cgbGFzdCBlZGl0Pj4nO1xuXHRcdGNvbnN0IHRoYW5rID0gJ2lmKGRpZmYpezw8dGhhbmt8c2VuZCB0aGFua3M+Pn0nO1xuXHRcdGNvbnN0IGpzSGlzdG9yeSA9ICc8PGxhc3RDb250cmlifGxhc3Qgc2V0IG9mIGVkaXRzPj48PHNpbmNlTWV8Y2hhbmdlcyBzaW5jZSBtaW5lPj4nO1xuXHRcdGNvbnN0IGxpbmtzaGVyZSA9ICc8PHdoYXRMaW5rc0hlcmV8c2hvcnRjdXQ9bHx3aGF0IGxpbmtzIGhlcmU+Pic7XG5cdFx0Y29uc3QgcmVsYXRlZCA9ICc8PHJlbGF0ZWRDaGFuZ2VzfHNob3J0Y3V0PXJ8cmVsYXRlZCBjaGFuZ2VzPj4nO1xuXHRcdGNvbnN0IHNlYXJjaCA9ICc8bWVudXJvdz48PHNlYXJjaHxzaG9ydGN1dD1zPj48L21lbnVyb3c+Jztcblx0XHRjb25zdCB3YXRjaCA9ICc8bWVudXJvdz48PHVud2F0Y2h8dW53YXRjaFNob3J0Pj58PDx3YXRjaHxzaG9ydGN1dD13fHdhdGNoVGhpbmd5Pj48L21lbnVyb3c+Jztcblx0XHRjb25zdCBwcm90ZWN0ID0gJzxtZW51cm93Pjw8dW5wcm90ZWN0fHVucHJvdGVjdFNob3J0Pj58PDxwcm90ZWN0fHNob3J0Y3V0PXA+Pnw8PHByb3RlY3Rsb2d8bG9nPj48L21lbnVyb3c+Jztcblx0XHRjb25zdCBkZWwgPSAnPG1lbnVyb3c+PDx1bmRlbGV0ZXx1bmRlbGV0ZVNob3J0Pj58PDxkZWxldGV8c2hvcnRjdXQ9ZD4+fDw8ZGVsZXRlbG9nfGxvZz4+PC9tZW51cm93Pic7XG5cdFx0Y29uc3QgbW92ZSA9ICc8PG1vdmV8c2hvcnRjdXQ9bXxtb3ZlIHBhZ2U+Pic7XG5cdFx0Y29uc3QgbnVsbFB1cmdlID0gJzxtZW51cm93Pjw8bnVsbEVkaXR8c2hvcnRjdXQ9bnxudWxsIGVkaXQ+Pnw8PHB1cmdlfHNob3J0Y3V0PVA+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IHZpZXdPcHRpb25zID0gJzxtZW51cm93Pjw8dmlld3xzaG9ydGN1dD12Pj58PDxyZW5kZXJ8c2hvcnRjdXQ9Uz4+fDw8cmF3Pj48L21lbnVyb3c+Jztcblx0XHRjb25zdCBlZGl0Um93ID1cblx0XHRcdCdpZihvbGRpZCl7JyArXG5cdFx0XHQnPG1lbnVyb3c+PDxlZGl0fHNob3J0Y3V0PWU+Pnw8PGVkaXRPbGR8c2hvcnRjdXQ9ZXx0aGlzJm5ic3A7cmV2aXNpb24+PjwvbWVudXJvdz4nICtcblx0XHRcdCc8bWVudXJvdz48PHJldmVydHxzaG9ydGN1dD12Pj58PDx1bmRvPj48L21lbnVyb3c+JyArXG5cdFx0XHQnfWVsc2V7PDxlZGl0fHNob3J0Y3V0PWU+Pn0nO1xuXHRcdGNvbnN0IG1hcmtQYXRyb2xsZWQgPSAnaWYocmNpZCl7PDxtYXJrcGF0cm9sbGVkfG1hcmsgcGF0cm9sbGVkPj59Jztcblx0XHRjb25zdCBuZXdUb3BpYyA9ICdpZih0YWxrKXs8PG5ld3xzaG9ydGN1dD0rfG5ldyB0b3BpYz4+fSc7XG5cdFx0Y29uc3QgcHJvdGVjdERlbGV0ZSA9IGBpZihhZG1pbil7JHtwcm90ZWN0fSR7ZGVsfX1gO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cEFjdGlvbnNNZW51JykpIHtcblx0XHRcdHMucHVzaChgPDxtYWlubGluaz4+KiR7ZHJvcGRpdn0ke21lbnVUaXRsZSgnYWN0aW9ucycpfWApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzLnB1c2goYCR7ZHJvcGRpdn08PG1haW5saW5rPj5gKTtcblx0XHR9XG5cdFx0cy5wdXNoKCc8bWVudT4nLCBlZGl0Um93ICsgbWFya1BhdHJvbGxlZCArIG5ld1RvcGljICsgaGlzdCArIGxhc3RlZGl0ICsgdGhhbmspO1xuXHRcdGlmICghc2hvcnRlcikge1xuXHRcdFx0cy5wdXNoKGpzSGlzdG9yeSk7XG5cdFx0fVxuXHRcdHMucHVzaChtb3ZlICsgbGlua3NoZXJlICsgcmVsYXRlZCk7XG5cdFx0aWYgKCFzaG9ydGVyKSB7XG5cdFx0XHRzLnB1c2gobnVsbFB1cmdlICsgc2VhcmNoKTtcblx0XHR9XG5cdFx0aWYgKCFzaG9ydGVyKSB7XG5cdFx0XHRzLnB1c2godmlld09wdGlvbnMpO1xuXHRcdH1cblx0XHRzLnB1c2goXG5cdFx0XHRgPGhyPiR7d2F0Y2h9JHtwcm90ZWN0RGVsZXRlfWAsXG5cdFx0XHQnPGhyPicgK1xuXHRcdFx0XHQnaWYodGFsayl7PDxhcnRpY2xlfHNob3J0Y3V0PWF8dmlldyBhcnRpY2xlPj48PGVkaXRBcnRpY2xlfGVkaXQgYXJ0aWNsZT4+fScgK1xuXHRcdFx0XHQnZWxzZXs8PHRhbGt8c2hvcnRjdXQ9dHx0YWxrIHBhZ2U+Pjw8ZWRpdFRhbGt8ZWRpdCB0YWxrPj4nICtcblx0XHRcdFx0YDw8bmV3VGFsa3xzaG9ydGN1dD0rfG5ldyB0b3BpYz4+fTwvbWVudT4ke2VuZGRpdn1gXG5cdFx0KTtcblx0XHQvLyB1c2VyIG1lbnUgc3RhcnRzIGhlcmVcblx0XHRjb25zdCBlbWFpbCA9ICc8PGVtYWlsfHNob3J0Y3V0PUV8ZW1haWwgdXNlcj4+Jztcblx0XHRjb25zdCBjb250cmlicyA9XG5cdFx0XHQnaWYod2lraW1lZGlhKXs8bWVudXJvdz59PDxjb250cmlic3xzaG9ydGN1dD1jfGNvbnRyaWJ1dGlvbnM+PmlmKHdpa2ltZWRpYSl7PC9tZW51cm93Pn0nICtcblx0XHRcdCdpZihhZG1pbil7PG1lbnVyb3c+PDxkZWxldGVkQ29udHJpYnM+PjwvbWVudXJvdz59Jztcblx0XHRzLnB1c2goXG5cdFx0XHRgaWYodXNlcil7KiR7ZHJvcGRpdn0ke21lbnVUaXRsZSgndXNlcicpfWAsXG5cdFx0XHQnPG1lbnU+Jyxcblx0XHRcdCc8bWVudXJvdz48PHVzZXJQYWdlfHNob3J0Y3V0PXV8dXNlciZuYnNwO3BhZ2U+Pnw8PHVzZXJTcGFjZXxzcGFjZT4+PC9tZW51cm93PicsXG5cdFx0XHQnPDx1c2VyVGFsa3xzaG9ydGN1dD10fHVzZXIgdGFsaz4+PDxlZGl0VXNlclRhbGt8ZWRpdCB1c2VyIHRhbGs+PicgK1xuXHRcdFx0XHQnPDxuZXdVc2VyVGFsa3xzaG9ydGN1dD0rfGxlYXZlIGNvbW1lbnQ+Pidcblx0XHQpO1xuXHRcdGlmIChzaG9ydGVyKSB7XG5cdFx0XHRzLnB1c2goYGlmKGlwdXNlcil7fWVsc2V7JHtlbWFpbH19YCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHMucHVzaChgaWYoaXB1c2VyKXs8PGFyaW4+Pn1lbHNleyR7ZW1haWx9fWApO1xuXHRcdH1cblx0XHRzLnB1c2goXG5cdFx0XHRgPGhyPiR7Y29udHJpYnN9PDx1c2VybG9nfHNob3J0Y3V0PUx8dXNlciBsb2c+PmAsXG5cdFx0XHQnaWYod2lraW1lZGlhKXs8PGNvdW50fHNob3J0Y3V0PSN8ZWRpdCBjb3VudGVyPj59Jyxcblx0XHRcdCdpZihhZG1pbil7PG1lbnVyb3c+PDx1bmJsb2NrfHVuYmxvY2tTaG9ydD4+fDw8YmxvY2t8c2hvcnRjdXQ9YnxibG9jayB1c2VyPj48L21lbnVyb3c+fScsXG5cdFx0XHQnPDxibG9ja2xvZ3xzaG9ydGN1dD1CfGJsb2NrIGxvZz4+Jyxcblx0XHRcdGA8L21lbnU+JHtlbmRkaXZ9fWBcblx0XHQpO1xuXHRcdC8vIHBvcHVwcyBtZW51IHN0YXJ0cyBoZXJlXG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwU2V0dXBNZW51JykgJiYgIXgubmF2cG9wLmhhc1BvcHVwTWVudSAvKiBGSVhNRTogaGFjayAqLykge1xuXHRcdFx0eC5uYXZwb3AuaGFzUG9wdXBNZW51ID0gdHJ1ZTtcblx0XHRcdHMucHVzaChcblx0XHRcdFx0YCoke2Ryb3BkaXZ9JHttZW51VGl0bGUoJ3BvcHVwc01lbnUnKX08bWVudT5gLFxuXHRcdFx0XHQnPDx0b2dnbGVQcmV2aWV3c3x0b2dnbGUgcHJldmlld3M+PicsXG5cdFx0XHRcdCc8PHB1cmdlUG9wdXBzfHJlc2V0Pj4nLFxuXHRcdFx0XHQnPDxkaXNhYmxlUG9wdXBzfGRpc2FibGU+PicsXG5cdFx0XHRcdGA8L21lbnU+JHtlbmRkaXZ9YFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIG5hdmxpbmtTdHJpbmdUb0hUTUwocy5qb2luKCcnKSwgeC5hcnRpY2xlLCB4LnBhcmFtcyk7XG5cdH07XG5cdGNvbnN0IG1lbnVUaXRsZSA9IChzKSA9PiB7XG5cdFx0cmV0dXJuIGA8YSBocmVmPVwiI1wiIG5vUG9wdXA9MT4ke3BvcHVwU3RyaW5nKHMpfTwvYT5gO1xuXHR9O1xuXHRwZy5zdHJ1Y3R1cmVzLm1lbnVzLnBvcHVwUmVkaXJUaXRsZSA9IHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBUaXRsZTtcblx0cGcuc3RydWN0dXJlcy5tZW51cy5wb3B1cFJlZGlyVG9wTGlua3MgPSBwZy5zdHJ1Y3R1cmVzLm1lbnVzLnBvcHVwVG9wTGlua3M7XG5cdGNvcHlTdHJ1Y3R1cmUoJ21lbnVzJywgJ3Nob3J0bWVudXMnKTtcblx0cGcuc3RydWN0dXJlcy5zaG9ydG1lbnVzLnBvcHVwVG9wTGlua3MgPSAoeCkgPT4ge1xuXHRcdHJldHVybiBwZy5zdHJ1Y3R1cmVzLm1lbnVzLnBvcHVwVG9wTGlua3MoeCwgdHJ1ZSk7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMuc2hvcnRtZW51cy5wb3B1cFJlZGlyVG9wTGlua3MgPSBwZy5zdHJ1Y3R1cmVzLnNob3J0bWVudXMucG9wdXBUb3BMaW5rcztcblx0cGcuc3RydWN0dXJlcy5saXRlID0ge307XG5cdHBnLnN0cnVjdHVyZXMubGl0ZS5wb3B1cExheW91dCA9ICgpID0+IHtcblx0XHRyZXR1cm4gWydwb3B1cFRpdGxlJywgJ3BvcHVwUHJldmlldyddO1xuXHR9O1xuXHRwZy5zdHJ1Y3R1cmVzLmxpdGUucG9wdXBUaXRsZSA9ICh4KSA9PiB7XG5cdFx0bG9nKGAke3guYXJ0aWNsZX06IHN0cnVjdHVyZXMubGl0ZS5wb3B1cFRpdGxlYCk7XG5cdFx0Ly8gcmV0dXJuIG5hdmxpbmtTdHJpbmdUb0hUTUwoJzxiPjw8bWFpbmxpbms+PjwvYj4nLHguYXJ0aWNsZSx4LnBhcmFtcyk7XG5cdFx0cmV0dXJuIGA8ZGl2PjxzcGFuIGNsYXNzPVwicG9wdXBfbWFpbmxpbmtcIj48Yj4ke3guYXJ0aWNsZS50b1N0cmluZygpfTwvYj48L3NwYW4+PC9kaXY+YDtcblx0fTtcblx0Ly8gRU5ERklMRTogc3RydWN0dXJlcy5qc1xuXHQvLyBTVEFSVEZJTEU6IGF1dG9lZGl0LmpzXG5cdGNvbnN0IHN1YnN0aXR1dGUgPSAoZGF0YSwgY21kQm9keSkgPT4ge1xuXHRcdC8vIG13Lm5vdGlmeShgc3ViXFxuZnJvbTogJHtjbWRCb2R5LmZyb219XFxudG86ICR7Y21kQm9keS50b31cXG5mbGFnczogJHtjbWRCb2R5LmZsYWdzfWAsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRjb25zdCBmcm9tUmUgPSBuZXcgUmVnRXhwKGNtZEJvZHkuZnJvbSwgY21kQm9keS5mbGFncyk7XG5cdFx0cmV0dXJuIGRhdGEucmVwbGFjZShmcm9tUmUsIGNtZEJvZHkudG8pO1xuXHR9O1xuXHRjb25zdCBleGVjQ21kcyA9IChkYXRhLCBjbWRMaXN0KSA9PiB7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGNtZExpc3QpIHtcblx0XHRcdGRhdGEgPSBlbGVtZW50LmFjdGlvbihkYXRhLCBlbGVtZW50KTtcblx0XHR9XG5cdFx0cmV0dXJuIGRhdGE7XG5cdH07XG5cdGNvbnN0IHBhcnNlQ21kID0gZnVuY3Rpb24gcGFyc2VDbWQoc3RyKSB7XG5cdFx0Ly8gcmV0dXJucyBhIGxpc3Qgb2YgY29tbWFuZHNcblx0XHRpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0XHRsZXQgcCA9IGZhbHNlO1xuXHRcdHN3aXRjaCAoc3RyLmNoYXJBdCgwKSkge1xuXHRcdFx0Y2FzZSAncyc6XG5cdFx0XHRcdHAgPSBwYXJzZVN1YnN0aXR1dGUoc3RyKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChwKSB7XG5cdFx0XHRyZXR1cm4gW3AsIHBhcnNlQ21kKHAucmVtYWluZGVyKV07XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0Ly8gRklYTUU6IE9ubHkgdXNlZCBvbmNlIGhlcmUsIGNvbmZ1c2luZyB3aXRoIG5hdGl2ZSAoYW5kIG1vcmUgd2lkZWx5LXVzZWQpIHVuZXNjYXBlLCBzaG91bGQgcHJvYmFibHkgYmUgcmVwbGFjZWRcblx0Ly8gVGhlbiBhZ2FpbiwgdW5lc2NhcGUgaXMgc2VtaS1zb2Z0LWRlcHJlY2F0ZWQsIHNvIHdlIHNob3VsZCBsb29rIGludG8gcmVwbGFjaW5nIHRoYXQgdG9vXG5cdGNvbnN0IHVuRXNjYXBlID0gKHN0ciwgc2VwKSA9PiB7XG5cdFx0cmV0dXJuIHN0clxuXHRcdFx0LnNwbGl0KCdcXFxcXFxcXCcpXG5cdFx0XHQuam9pbignXFxcXCcpXG5cdFx0XHQuc3BsaXQoYFxcXFwke3NlcH1gKVxuXHRcdFx0LmpvaW4oc2VwKVxuXHRcdFx0LnNwbGl0KFN0cmluZy5yYXdgXFxuYClcblx0XHRcdC5qb2luKCdcXG4nKTtcblx0fTtcblx0Y29uc3QgcGFyc2VTdWJzdGl0dXRlID0gKHN0cikgPT4ge1xuXHRcdC8vIHRha2VzIGEgc3RyaW5nIGxpa2Ugcy9hL2IvZmxhZ3M7b3RoZXJjbWRzIGFuZCBwYXJzZXMgaXRcblx0XHRsZXQgZnJvbTtcblx0XHRsZXQgdG87XG5cdFx0bGV0IGZsYWdzO1xuXHRcdGxldCB0bXA7XG5cdFx0aWYgKHN0ci5sZW5ndGggPCA0KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IHNlcCA9IHN0ci5jaGFyQXQoMSk7XG5cdFx0c3RyID0gc3RyLnNsaWNlKDIpO1xuXHRcdHRtcCA9IHNraXBPdmVyKHN0ciwgc2VwKTtcblx0XHRpZiAodG1wKSB7XG5cdFx0XHRmcm9tID0gdG1wLnNlZ21lbnQ7XG5cdFx0XHRzdHIgPSB0bXAucmVtYWluZGVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRtcCA9IHNraXBPdmVyKHN0ciwgc2VwKTtcblx0XHRpZiAodG1wKSB7XG5cdFx0XHR0byA9IHRtcC5zZWdtZW50O1xuXHRcdFx0c3RyID0gdG1wLnJlbWFpbmRlcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRmbGFncyA9ICcnO1xuXHRcdGlmIChzdHIubGVuZ3RoID4gMCkge1xuXHRcdFx0dG1wID0gc2tpcE92ZXIoc3RyLCAnOycpIHx8IHNraXBUb0VuZChzdHIsICc7Jyk7XG5cdFx0XHRpZiAodG1wKSB7XG5cdFx0XHRcdGZsYWdzID0gdG1wLnNlZ21lbnQ7XG5cdFx0XHRcdHN0ciA9IHRtcC5yZW1haW5kZXI7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRhY3Rpb246IHN1YnN0aXR1dGUsXG5cdFx0XHRmcm9tLFxuXHRcdFx0dG8sXG5cdFx0XHRmbGFncyxcblx0XHRcdHJlbWFpbmRlcjogc3RyLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IHNraXBPdmVyID0gKHN0ciwgc2VwKSA9PiB7XG5cdFx0Y29uc3QgZW5kU2VnbWVudCA9IGZpbmROZXh0KHN0ciwgc2VwKTtcblx0XHRpZiAoZW5kU2VnbWVudCA8IDApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3Qgc2VnbWVudCA9IHVuRXNjYXBlKHN0ci5zbGljZSgwLCBNYXRoLm1heCgwLCBlbmRTZWdtZW50KSksIHNlcCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlZ21lbnQsXG5cdFx0XHRyZW1haW5kZXI6IHN0ci5zbGljZShNYXRoLm1heCgwLCBlbmRTZWdtZW50ICsgMSkpLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IHNraXBUb0VuZCA9IChzdHIsIF9zZXApID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VnbWVudDogc3RyLFxuXHRcdFx0cmVtYWluZGVyOiAnJyxcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBmaW5kTmV4dCA9IChzdHIsIGNoKSA9PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChzdHIuY2hhckF0KGkpID09PSAnXFxcXCcpIHtcblx0XHRcdFx0aSArPSAyO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHN0ci5jaGFyQXQoaSkgPT09IGNoKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gLTE7XG5cdH07XG5cdGNvbnN0IHNldENoZWNrYm94ID0gKHBhcmFtLCBib3gpID0+IHtcblx0XHRjb25zdCB2YWwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUocGFyYW0pO1xuXHRcdGlmICh2YWwpIHtcblx0XHRcdHN3aXRjaCAodmFsKSB7XG5cdFx0XHRcdGNhc2UgJzEnOlxuXHRcdFx0XHRjYXNlICd5ZXMnOlxuXHRcdFx0XHRjYXNlICd0cnVlJzpcblx0XHRcdFx0XHRib3guY2hlY2tlZCA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJzAnOlxuXHRcdFx0XHRjYXNlICdubyc6XG5cdFx0XHRcdGNhc2UgJ2ZhbHNlJzpcblx0XHRcdFx0XHRib3guY2hlY2tlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgYXV0b0VkaXQgPSBmdW5jdGlvbiBhdXRvRWRpdCgpIHtcblx0XHRzZXR1cFBvcHVwcygoKSA9PiB7XG5cdFx0XHRpZiAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvaW1wbCcpICE9PSBwb3B1cFN0cmluZygnYXV0b2VkaXRfdmVyc2lvbicpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2F1dG93YXRjaGxpc3QnKSAmJiBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2FjdG9rZW4nKSA9PT0gYXV0b0NsaWNrVG9rZW4oKSkge1xuXHRcdFx0XHRwZy5mbi5tb2RpZnlXYXRjaGxpc3QobXcudXRpbC5nZXRQYXJhbVZhbHVlKCd0aXRsZScpLCBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2FjdGlvbicpKTtcblx0XHRcdH1cblx0XHRcdGlmICghZG9jdW1lbnQuZWRpdGZvcm0pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGF1dG9FZGl0LmFscmVhZHlSYW4pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0YXV0b0VkaXQuYWxyZWFkeVJhbiA9IHRydWU7XG5cdFx0XHRjb25zdCBjbWRTdHJpbmcgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2F1dG9lZGl0Jyk7XG5cdFx0XHRpZiAoY21kU3RyaW5nKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgZWRpdGJveCA9IGRvY3VtZW50LmVkaXRmb3JtLndwVGV4dGJveDE7XG5cdFx0XHRcdFx0Y29uc3QgY21kTGlzdCA9IHBhcnNlQ21kKGNtZFN0cmluZyk7XG5cdFx0XHRcdFx0Y29uc3QgaW5wdXQgPSBlZGl0Ym94LnZhbHVlO1xuXHRcdFx0XHRcdGNvbnN0IG91dHB1dCA9IGV4ZWNDbWRzKGlucHV0LCBjbWRMaXN0KTtcblx0XHRcdFx0XHRlZGl0Ym94LnZhbHVlID0gb3V0cHV0O1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNldENoZWNrYm94KCdhdXRvbWlub3InLCBkb2N1bWVudC5lZGl0Zm9ybS53cE1pbm9yZWRpdCk7XG5cdFx0XHRzZXRDaGVja2JveCgnYXV0b3dhdGNoJywgZG9jdW1lbnQuZWRpdGZvcm0ud3BXYXRjaHRoaXMpO1xuXHRcdFx0Y29uc3QgcnZpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3J2Jyk7XG5cdFx0XHRpZiAocnZpZCkge1xuXHRcdFx0XHRjb25zdCB1cmwgPSBgJHtwZy53aWtpLmFwaXdpa2liYXNlfT9hY3Rpb249cXVlcnkmZm9ybWF0PWpzb24mZm9ybWF0dmVyc2lvbj0yJnByb3A9cmV2aXNpb25zJnJldmlkcz0ke3J2aWR9YDtcblx0XHRcdFx0c3RhcnREb3dubG9hZCh1cmwsIG51bGwsIGF1dG9FZGl0Mik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhdXRvRWRpdDIoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblx0Y29uc3QgYXV0b0VkaXQyID0gKGQpID0+IHtcblx0XHRsZXQgc3VtbWFyeSA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3N1bW1hcnknKTtcblx0XHRsZXQgc3VtbWFyeXByb21wdCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3N1bW1hcnlwcm9tcHQnKTtcblx0XHRsZXQgc3VtbWFyeW5vdGljZSA9ICcnO1xuXHRcdGlmIChkICYmIGQuZGF0YSAmJiBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2F1dG9ydicpKSB7XG5cdFx0XHRjb25zdCBzID0gZ2V0UnZTdW1tYXJ5KHN1bW1hcnksIGQuZGF0YSk7XG5cdFx0XHRpZiAocyA9PT0gZmFsc2UpIHtcblx0XHRcdFx0c3VtbWFyeXByb21wdCA9IHRydWU7XG5cdFx0XHRcdHN1bW1hcnlub3RpY2UgPSBwb3B1cFN0cmluZygnRmFpbGVkIHRvIGdldCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgcGxlYXNlIGVkaXQgbWFudWFsbHkuXFxuXFxuJyk7XG5cdFx0XHRcdHN1bW1hcnkgPSBzaW1wbGVQcmludGYoc3VtbWFyeSwgW213LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3J2JyksICcodW5rbm93biknLCAnKHVua25vd24pJ10pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3VtbWFyeSA9IHM7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChzdW1tYXJ5cHJvbXB0KSB7XG5cdFx0XHRjb25zdCB0eHQgPSBzdW1tYXJ5bm90aWNlICsgcG9wdXBTdHJpbmcoJ0VudGVyIGEgbm9uLWVtcHR5IGVkaXQgc3VtbWFyeSBvciBwcmVzcyBjYW5jZWwgdG8gYWJvcnQnKTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gcHJvbXB0KHR4dCwgc3VtbWFyeSk7XG5cdFx0XHRpZiAocmVzcG9uc2UpIHtcblx0XHRcdFx0c3VtbWFyeSA9IHJlc3BvbnNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoc3VtbWFyeSkge1xuXHRcdFx0ZG9jdW1lbnQuZWRpdGZvcm0ud3BTdW1tYXJ5LnZhbHVlID0gc3VtbWFyeTtcblx0XHR9XG5cdFx0Ly8gQXR0ZW1wdCB0byBhdm9pZCBwb3NzaWJsZSBwcmVtYXR1cmUgY2xpY2tpbmcgb2YgdGhlIHNhdmUgYnV0dG9uXG5cdFx0Ly8gKG1heWJlIGRlbGF5cyBpbiB1cGRhdGVzIHRvIHRoZSBET00gYXJlIHRvIGJsYW1lPz8gb3IgYSByZWQgaGVycmluZylcblx0XHRzZXRUaW1lb3V0KGF1dG9FZGl0MywgMTAwKTtcblx0fTtcblx0Y29uc3QgYXV0b0NsaWNrVG9rZW4gPSAoKSA9PiB7XG5cdFx0cmV0dXJuIG13LnVzZXIuc2Vzc2lvbklkKCk7XG5cdH07XG5cdGNvbnN0IGF1dG9FZGl0MyA9ICgpID0+IHtcblx0XHRpZiAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhY3Rva2VuJykgIT09IGF1dG9DbGlja1Rva2VuKCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgYnRuID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvY2xpY2snKTtcblx0XHRpZiAoYnRuKSB7XG5cdFx0XHRpZiAoZG9jdW1lbnQuZWRpdGZvcm0gJiYgZG9jdW1lbnQuZWRpdGZvcm1bYnRuXSkge1xuXHRcdFx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5lZGl0Zm9ybVtidG5dO1xuXHRcdFx0XHRjb25zdCBtc2cgPSB0cHJpbnRmKFxuXHRcdFx0XHRcdCdUaGUgJXMgYnV0dG9uIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgY2xpY2tlZC4gUGxlYXNlIHdhaXQgZm9yIHRoZSBuZXh0IHBhZ2UgdG8gbG9hZC4nLFxuXHRcdFx0XHRcdFtidXR0b24udmFsdWVdXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGJhbm5lck1lc3NhZ2UobXNnKTtcblx0XHRcdFx0ZG9jdW1lbnQudGl0bGUgPSBgKCR7ZG9jdW1lbnQudGl0bGV9KWA7XG5cdFx0XHRcdGJ1dHRvbi5jbGljaygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0dHByaW50ZignQ291bGQgbm90IGZpbmQgYnV0dG9uICVzLiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGluIHlvdXIgamF2YXNjcmlwdCBmaWxlLicsIFtidG5dKSxcblx0XHRcdFx0XHR7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IGJhbm5lck1lc3NhZ2UgPSAocykgPT4ge1xuXHRcdGNvbnN0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaDEnKTtcblx0XHRpZiAoaGVhZGluZ3MpIHtcblx0XHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZGl2LmlubmVySFRNTCA9IGA8Zm9udCBzaXplPSsxPjxiPiR7cGcuZXNjYXBlUXVvdGVzSFRNTChzKX08L2I+PC9mb250PmA7XG5cdFx0XHRoZWFkaW5nc1swXS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXYsIGhlYWRpbmdzWzBdKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGdldFJ2U3VtbWFyeSA9ICh0ZW1wbGF0ZSwganNvbikgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBvID0gZ2V0SnNPYmooanNvbik7XG5cdFx0XHRjb25zdCBbZWRpdF0gPSBhbnlDaGlsZChvLnF1ZXJ5LnBhZ2VzKS5yZXZpc2lvbnM7XG5cdFx0XHRjb25zdCB0aW1lc3RhbXAgPSBlZGl0LnRpbWVzdGFtcFxuXHRcdFx0XHQuc3BsaXQoL1tBLVpdL2cpXG5cdFx0XHRcdC5qb2luKCcgJylcblx0XHRcdFx0LnJlcGxhY2UoL14gKnwgKiQvZywgJycpO1xuXHRcdFx0cmV0dXJuIHNpbXBsZVByaW50Zih0ZW1wbGF0ZSwgW2VkaXQucmV2aWQsIHRpbWVzdGFtcCwgZWRpdC51c2VyaGlkZGVuID8gJyhoaWRkZW4pJyA6IGVkaXQudXNlcl0pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcblx0Ly8gRU5ERklMRTogYXV0b2VkaXQuanNcblx0Ly8gU1RBUlRGSUxFOiBkb3dubG9hZGVyLmpzXG5cdC8qKlxuXHQgKiBAZmlsZW92ZXJ2aWV3XG5cdCAqIHtAc291cmNlIERvd25sb2FkZXJ9LCBhIHhtbGh0dHByZXF1ZXN0IHdyYXBwZXIsIGFuZCBoZWxwZXIgZnVuY3Rpb25zLlxuXHQgKi9cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgRG93bmxvYWRlclxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQGNsYXNzIFRoZSBEb3dubG9hZGVyIGNsYXNzLiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyB0byBkb3dubG9hZCBzdHVmZi5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIHRvIGRvd25sb2FkLiBUaGlzIGNhbiBiZSBvbWl0dGVkIGFuZCBzdXBwbGllZCBsYXRlci5cblx0ICovXG5cdGNsYXNzIERvd25sb2FkZXIge1xuXHRcdGNvbnN0cnVjdG9yKHVybCkge1xuXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0dGhpcy5odHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0XHR9XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSB1cmwgdG8gZG93bmxvYWRcblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy51cmwgPSB1cmw7XG5cdFx0XHQvKipcblx0XHRcdCAqIEEgdW5pdmVyc2FsbHkgdW5pcXVlIElEIG51bWJlclxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGludGVnZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5pZCA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIE1vZGlmaWNhdGlvbiBkYXRlLCB0byBiZSBjdWxsZWQgZnJvbSB0aGUgaW5jb21pbmcgaGVhZGVyc1xuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIERhdGVcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMubGFzdE1vZGlmaWVkID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogV2hhdCB0byBkbyB3aGVuIHRoZSBkb3dubG9hZCBjb21wbGV0ZXMgc3VjY2Vzc2Z1bGx5XG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgRnVuY3Rpb25cblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuY2FsbGJhY2tGdW5jdGlvbiA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIFdoYXQgdG8gZG8gb24gZmFpbHVyZVxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIEZ1bmN0aW9uXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLm9uRmFpbHVyZSA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIEZsYWcgc2V0IG9uIDxjb2RlPmFib3J0PC9jb2RlPlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5hYm9ydGVkID0gZmFsc2U7XG5cdFx0XHQvKipcblx0XHRcdCAqIEhUVFAgbWV0aG9kLiBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjOS5odG1sIGZvclxuXHRcdFx0ICogcG9zc2liaWxpdGllcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5tZXRob2QgPSAnR0VUJztcblx0XHRcdC8qKlxuXHRcdFx0ICogQXN5bmMgZmxhZy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuYXN5bmMgPSB0cnVlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTdWJtaXRzIHRoZSBodHRwIHJlcXVlc3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IHhcblx0XHQgKi9cblx0XHRzZW5kKHgpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5zZW5kKHgpO1xuXHRcdH1cblx0XHQvKiBBYm9ydHMgdGhlIGRvd25sb2FkLCBzZXR0aW5nIHRoZSA8Y29kZT5hYm9ydGVkPC9jb2RlPiBmaWVsZCB0byB0cnVlLiAqL1xuXHRcdGFib3J0KCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmFib3J0ZWQgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5hYm9ydCgpO1xuXHRcdH1cblx0XHQvKiogUmV0dXJucyB0aGUgZG93bmxvYWRlZCBkYXRhLiAqL1xuXHRcdGdldERhdGEoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLmh0dHAucmVzcG9uc2VUZXh0O1xuXHRcdH1cblx0XHQvKiogUHJlcGFyZXMgdGhlIGRvd25sb2FkLiAqL1xuXHRcdHNldFRhcmdldCgpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5odHRwLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJsLCB0aGlzLmFzeW5jKTtcblx0XHRcdHRoaXMuaHR0cC5zZXRSZXF1ZXN0SGVhZGVyKCdBcGktVXNlci1BZ2VudCcsIHBnLmFwaS51c2VyQWdlbnQpO1xuXHRcdH1cblx0XHQvKiogR2V0cyB0aGUgc3RhdGUgb2YgdGhlIGRvd25sb2FkLiAqL1xuXHRcdGdldFJlYWR5U3RhdGUoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLmh0dHAucmVhZHlTdGF0ZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU3RhcnRzIHRoZSBkb3dubG9hZC5cblx0XHQgKiBOb3RlIHRoYXQgc2V0VGFyZ2V0IHtAc291cmNlIERvd25sb2FkZXIjc2V0VGFyZ2V0fSBtdXN0IGJlIHJ1biBmaXJzdFxuXHRcdCAqL1xuXHRcdHN0YXJ0KCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3NbdGhpcy5pZF0gPSBzZWxmO1xuXHRcdFx0dGhpcy5odHRwLnNlbmQobnVsbCk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEdldHMgdGhlICdMYXN0LU1vZGlmaWVkJyBkYXRlIGZyb20gdGhlIGRvd25sb2FkIGhlYWRlcnMuXG5cdFx0ICogU2hvdWxkIGJlIHJ1biBhZnRlciB0aGUgZG93bmxvYWQgY29tcGxldGVzLlxuXHRcdCAqIFJldHVybnMgPGNvZGU+bnVsbDwvY29kZT4gb24gZmFpbHVyZS5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm4ge0RhdGV9XG5cdFx0ICovXG5cdFx0Z2V0TGFzdE1vZGlmaWVkRGF0ZSgpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGxhc3Rtb2Q7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRsYXN0bW9kID0gdGhpcy5odHRwLmdldFJlc3BvbnNlSGVhZGVyKCdMYXN0LU1vZGlmaWVkJyk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdH1cblx0XHRcdGlmIChsYXN0bW9kKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgRGF0ZShsYXN0bW9kKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IGYgY2FsbGJhY2sgZnVuY3Rpb24sIGNhbGxlZCBhcyA8Y29kZT5mKHRoaXMpPC9jb2RlPiBvbiBzdWNjZXNzXG5cdFx0ICovXG5cdFx0c2V0Q2FsbGJhY2soZikge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5odHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGY7XG5cdFx0fVxuXHRcdGdldFN0YXR1cygpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5zdGF0dXM7XG5cdFx0fVxuXHR9XG5cdG5ldyBEb3dubG9hZGVyKCk7XG5cdHBnLm1pc2MuZG93bmxvYWRzSW5Qcm9ncmVzcyA9IHt9O1xuXHQvLyBoZWxwZXIgZnVuY3Rpb25zXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IHtAc291cmNlIERvd25sb2FkZXJ9IGFuZCBwcmVwYXJlcyBpdCBmb3IgYWN0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gZG93bmxvYWRcblx0ICogQHBhcmFtIHtpbnRlZ2VyfSBpZCBUaGUgSUQgb2YgdGhlIHtAc291cmNlIERvd25sb2FkZXJ9IG9iamVjdFxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gaW52b2tlZCBvbiBzdWNjZXNzXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBvbmZhaWx1cmVcblx0ICogQHJldHVybiB7U3RyaW5nL0Rvd25sb2FkZXJ9IHRoZSB7QHNvdXJjZSBEb3dubG9hZGVyfSBvYmplY3QgY3JlYXRlZCwgb3IgJ29oZGVhcicgaWYgYW4gdW5zdXBwb3J0ZWQgYnJvd3NlclxuXHQgKi9cblx0Y29uc3QgbmV3RG93bmxvYWQgPSBmdW5jdGlvbiBuZXdEb3dubG9hZCh1cmwsIGlkLCBjYWxsYmFjaywgb25mYWlsdXJlKSB7XG5cdFx0Y29uc3QgZCA9IG5ldyBEb3dubG9hZGVyKHVybCk7XG5cdFx0aWYgKCFkLmh0dHApIHtcblx0XHRcdHJldHVybiAnb2hkZWFyJztcblx0XHR9XG5cdFx0ZC5pZCA9IGlkO1xuXHRcdGQuc2V0VGFyZ2V0KCk7XG5cdFx0b25mYWlsdXJlIHx8PSAyO1xuXHRcdGNvbnN0IGYgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoZC5nZXRSZWFkeVN0YXRlKCkgPT09IDQpIHtcblx0XHRcdFx0ZGVsZXRlIHBnLm1pc2MuZG93bmxvYWRzSW5Qcm9ncmVzc1t0aGlzLmlkXTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoZC5nZXRTdGF0dXMoKSA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRkLmRhdGEgPSBkLmdldERhdGEoKTtcblx0XHRcdFx0XHRcdGQubGFzdE1vZGlmaWVkID0gZC5nZXRMYXN0TW9kaWZpZWREYXRlKCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayhkKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBvbmZhaWx1cmUgPT09IHR5cGVvZiAxKSB7XG5cdFx0XHRcdFx0XHRpZiAob25mYWlsdXJlID4gMCkge1xuXHRcdFx0XHRcdFx0XHQvLyByZXRyeVxuXHRcdFx0XHRcdFx0XHRuZXdEb3dubG9hZCh1cmwsIGlkLCBjYWxsYmFjaywgb25mYWlsdXJlIC0gMSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygb25mYWlsdXJlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0XHRvbmZhaWx1cmUoZCwgdXJsLCBpZCwgY2FsbGJhY2spO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogaWdub3JlIGl0ICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdGQuc2V0Q2FsbGJhY2soZik7XG5cdFx0cmV0dXJuIGQ7XG5cdH07XG5cdC8qKlxuXHQgKiBTaW11bGF0ZXMgYSBkb3dubG9hZCBmcm9tIGNhY2hlZCBkYXRhLlxuXHQgKiBUaGUgc3VwcGxpZWQgZGF0YSBpcyBwdXQgaW50byBhIHtAc291cmNlIERvd25sb2FkZXJ9IGFzIGlmIGl0IGhhZCBkb3dubG9hZGVkIGl0LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwuXG5cdCAqIEBwYXJhbSB7aW50ZWdlcn0gaWQgVGhlIElELlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2ssIHdoaWNoIGlzIGludm9rZWQgaW1tZWRpYXRlbHkgYXMgPGNvZGU+Y2FsbGJhY2soZCk8L2NvZGU+LFxuXHQgKiB3aGVyZSA8Y29kZT5kPC9jb2RlPiBpcyB0aGUgbmV3IHtAc291cmNlIERvd25sb2FkZXJ9LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSBUaGUgKGNhY2hlZCkgZGF0YS5cblx0ICogQHBhcmFtIHtEYXRlfSBsYXN0TW9kaWZpZWQgVGhlIChjYWNoZWQpIGxhc3QgbW9kaWZpZWQgZGF0ZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IG93bmVyXG5cdCAqL1xuXHRjb25zdCBmYWtlRG93bmxvYWQgPSAodXJsLCBpZCwgY2FsbGJhY2ssIGRhdGEsIGxhc3RNb2RpZmllZCwgb3duZXIpID0+IHtcblx0XHRjb25zdCBkID0gbmV3RG93bmxvYWQodXJsLCBjYWxsYmFjayk7XG5cdFx0ZC5vd25lciA9IG93bmVyO1xuXHRcdGQuaWQgPSBpZDtcblx0XHRkLmRhdGEgPSBkYXRhO1xuXHRcdGQubGFzdE1vZGlmaWVkID0gbGFzdE1vZGlmaWVkO1xuXHRcdHJldHVybiBjYWxsYmFjayhkKTtcblx0fTtcblx0LyoqXG5cdCAqIFN0YXJ0cyBhIGRvd25sb2FkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gZG93bmxvYWRcblx0ICogQHBhcmFtIHtpbnRlZ2VyfSBpZCBUaGUgSUQgb2YgdGhlIHtAc291cmNlIERvd25sb2FkZXJ9IG9iamVjdFxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gaW52b2tlZCBvbiBzdWNjZXNzXG5cdCAqIEByZXR1cm4ge1N0cmluZy9Eb3dubG9hZGVyfSB0aGUge0Bzb3VyY2UgRG93bmxvYWRlcn0gb2JqZWN0IGNyZWF0ZWQsIG9yICdvaGRlYXInIGlmIGFuIHVuc3VwcG9ydGVkIGJyb3dzZXJcblx0ICovXG5cdGNvbnN0IHN0YXJ0RG93bmxvYWQgPSAodXJsLCBpZCwgY2FsbGJhY2spID0+IHtcblx0XHRjb25zdCBkID0gbmV3RG93bmxvYWQodXJsLCBpZCwgY2FsbGJhY2spO1xuXHRcdGlmICh0eXBlb2YgZCA9PT0gdHlwZW9mICcnKSB7XG5cdFx0XHRyZXR1cm4gZDtcblx0XHR9XG5cdFx0ZC5zdGFydCgpO1xuXHRcdHJldHVybiBkO1xuXHR9O1xuXHQvKipcblx0ICogQWJvcnRzIGFsbCBkb3dubG9hZHMgd2hpY2ggaGF2ZSBiZWVuIHN0YXJ0ZWQuXG5cdCAqL1xuXHRjb25zdCBhYm9ydEFsbERvd25sb2FkcyA9ICgpID0+IHtcblx0XHRmb3IgKGNvbnN0IHggaW4gcGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzLCB4KSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHBnLm1pc2MuZG93bmxvYWRzSW5Qcm9ncmVzc1t4XS5hYm9ydGVkID0gdHJ1ZTtcblx0XHRcdFx0cGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzW3hdLmFib3J0KCk7XG5cdFx0XHRcdGRlbGV0ZSBwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3NbeF07XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdC8vIEVOREZJTEU6IGRvd25sb2FkZXIuanNcblx0Ly8gU1RBUlRGSUxFOiBsaXZlcHJldmlldy5qc1xuXHQvLyBUT0RPOiBsb2NhdGlvbiBpcyBvZnRlbiBub3QgY29ycmVjdCAoZWcgcmVsYXRpdmUgbGlua3MgaW4gcHJldmlld3MpXG5cdC8vIE5PVEU6IHJlbW92ZWQgbWQ1IGFuZCBpbWFnZSBhbmQgbWF0aCBwYXJzaW5nLiB3YXMgYnJva2VuLCBsb3RzIG9mIGJ5dGVzLlxuXHQvKipcblx0ICogSW5zdGFWaWV3IC0gYSBNZWRpYXdpa2kgdG8gSFRNTCBjb252ZXJ0ZXIgaW4gSmF2YVNjcmlwdFxuXHQgKiBWZXJzaW9uIDAuNi4xXG5cdCAqIENvcHlyaWdodCAoQykgUGVkcm8gRmF5b2xsZSAyMDA1LTIwMDZcblx0ICoge0BsaW5rIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VzZXI6UGlsYWZ9XG5cdCAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgbGljZW5zZVxuXHQgKlxuXHQgKiBDaGFuZ2Vsb2c6XG5cdCAqXG5cdCAqIDAuNi4xXG5cdCAqIC0gRml4ZWQgcHJvYmxlbSBjYXVzZWQgYnkgXFxyIGNoYXJhY3RlcnNcblx0ICogLSBJbXByb3ZlZCBpbmxpbmUgZm9ybWF0dGluZyBwYXJzZXJcblx0ICpcblx0ICogMC42XG5cdCAqIC0gQ2hhbmdlZCBuYW1lIHRvIEluc3RhVmlld1xuXHQgKiAtIFNvbWUgbWFqb3IgY29kZSByZW9yZ2FuaXphdGlvbnMgYW5kIGZhY3RvcmVkIG91dCBzb21lIGNvbW1vbiBmdW5jdGlvbnNcblx0ICogLSBIYW5kbGVkIGNvbnZlcnNpb24gb2YgcmVsYXRpdmUgbGlua3MgKGkuZS4gW1svZm9vXV0pXG5cdCAqIC0gRml4ZWQgbWlzcmVuZGVyaW5nIG9mIGFkamFjZW50IGRlZmluaXRpb24gbGlzdCBpdGVtc1xuXHQgKiAtIEZpeGVkIGJ1ZyBpbiB0YWJsZSBoZWFkaW5ncyBoYW5kbGluZ1xuXHQgKiAtIENoYW5nZWQgZGF0ZSBmb3JtYXQgaW4gc2lnbmF0dXJlcyB0byByZWZsZWN0IE1lZGlhd2lraSdzXG5cdCAqIC0gRml4ZWQgaGFuZGxpbmcgb2YgW1s6SW1hZ2U6Li4uXV1cblx0ICogLSBVcGRhdGVkIE1ENSBmdW5jdGlvbiAoaG9wZWZ1bGx5IGl0IHdpbGwgd29yayB3aXRoIFVURi04KVxuXHQgKiAtIEZpeGVkIGJ1ZyBpbiBoYW5kbGluZyBvZiBsaW5rcyBpbnNpZGUgaW1hZ2VzXG5cdCAqXG5cdCAqIFRvIGRvOlxuXHQgKiAtIEJldHRlciBzdXBwb3J0IGZvciBtYXRoIHRhZ3Ncblx0ICogLSBGdWxsIHN1cHBvcnQgZm9yIG5vd2lraSB0YWdcblx0ICogLSBQYXJzZXItYmFzZWQgKGFzIG9wcG9zZWQgdG8gUmVnRXhwLWJhc2VkKSBpbmxpbmUgd2lraWNvZGUgaGFuZGxpbmcgKG1ha2UgaXQgb25lLXBhc3MgYW5kXG5cdCAqICAgYnVsbGV0LXByb29mKVxuXHQgKiAtIFN1cHBvcnQgZm9yIHRlbXBsYXRlcyAodGhyb3VnaCBBSkFYKVxuXHQgKiAtIFN1cHBvcnQgZm9yIGNvbG91cmVkIGxpbmtzIChBSkFYKVxuXHQgKi9cblx0Y29uc3QgSW5zdGEgPSB7fTtcblx0Y29uc3Qgc2V0dXBMaXZlUHJldmlldyA9ICgpID0+IHtcblx0XHRsZXQgX2I7XG5cdFx0Ly8gb3B0aW9uc1xuXHRcdEluc3RhLmNvbmYgPSB7XG5cdFx0XHRiYXNlVXJsOiAnJyxcblx0XHRcdHVzZXI6IHt9LFxuXHRcdFx0d2lraToge1xuXHRcdFx0XHRsYW5nOiBwZy53aWtpLmxhbmcsXG5cdFx0XHRcdGludGVyd2lraTogcGcud2lraS5pbnRlcndpa2ksXG5cdFx0XHRcdGRlZmF1bHRfdGh1bWJfd2lkdGg6IDE4MCxcblx0XHRcdH0sXG5cdFx0XHRwYXRoczoge1xuXHRcdFx0XHRhcnRpY2xlczogYCR7cGcud2lraS5hcnRpY2xlUGF0aH0vYCxcblx0XHRcdFx0Ly8gT25seSB1c2VkIGZvciBJbnN0YSBwcmV2aWV3cyB3aXRoIGltYWdlcy4gKG5vdCBpbiBwb3B1cHMpXG5cdFx0XHRcdG1hdGg6ICcvbWF0aC8nLFxuXHRcdFx0XHRpbWFnZXM6ICdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poLycsXG5cdFx0XHRcdGltYWdlc19mYWxsYmFjazogJy8vd20uemhvbmd3ZW4ud2lraS9jb21tb25zLycsXG5cdFx0XHR9LFxuXHRcdFx0bG9jYWxlOiB7XG5cdFx0XHRcdHVzZXI6IG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zVXNlcklkXSxcblx0XHRcdFx0aW1hZ2U6IG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zSW1hZ2VJZF0sXG5cdFx0XHRcdGNhdGVnb3J5OiBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc0NhdGVnb3J5SWRdLFxuXHRcdFx0XHQvLyBzaG91bGRuJ3QgYmUgdXNlZCBpbiBwb3B1cCBwcmV2aWV3cywgaSB0aGlua1xuXHRcdFx0XHRtb250aHM6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcblx0XHRcdH0sXG5cdFx0fTtcblx0XHQvLyBvcHRpb25zIHdpdGggZGVmYXVsdCB2YWx1ZXMgb3IgYmFja3JlZmVyZW5jZXNcblx0XHRJbnN0YS5jb25mLnVzZXIubmFtZSB8fD0gJ1FpdXdlbiBCYWlrZSBjb250cmlidXRvcnMnO1xuXHRcdEluc3RhLmNvbmYudXNlci5zaWduYXR1cmUgPSBgW1ske0luc3RhLmNvbmYubG9jYWxlLnVzZXJ9OiR7SW5zdGEuY29uZi51c2VyLm5hbWV9fCR7SW5zdGEuY29uZi51c2VyLm5hbWV9XV1gO1xuXHRcdC8vIGRlZmluZSBjb25zdGFudHNcblx0XHRJbnN0YS5CTE9DS19JTUFHRSA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgXlxcXFxbXFxcXFsoPzpGaWxlfEltYWdlfCR7SW5zdGEuY29uZi5sb2NhbGUuaW1hZ2V9KTouKj9cXFxcfC4qPyg/OmZyYW1lfHRodW1ibmFpbHx0aHVtYnxub25lfHJpZ2h0fGxlZnR8Y2VudGVyKWAsXG5cdFx0XHQnaSdcblx0XHQpO1xuXHR9O1xuXHRJbnN0YS5kdW1wID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG5cdFx0aWYgKHR5cGVvZiBmcm9tID09PSAnc3RyaW5nJykge1xuXHRcdFx0ZnJvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2Zyb219YCk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdG8gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RvfWApO1xuXHRcdH1cblx0XHR0by5pbm5lckhUTUwgPSB0aGlzLmNvbnZlcnQoZnJvbS52YWx1ZSk7XG5cdH07XG5cdEluc3RhLmNvbnZlcnQgPSAod2lraSkgPT4ge1xuXHRcdGNvbnN0IGxsID0gdHlwZW9mIHdpa2kgPT09ICdzdHJpbmcnID8gd2lraS5yZXBsYWNlKC9cXHIvZywgJycpLnNwbGl0KC9cXG4vKSA6IHdpa2k7IC8vIGxpbmVzIG9mIHdpa2ljb2RlXG5cdFx0bGV0IG8gPSAnJzsgLy8gcmVzdWx0IG9mIHBhc3NpbmcgYSByZWdleHAgdG8gY29tcGFyZUxpbmVTdHJpbmdPclJlZygpXG5cdFx0bGV0IHAgPSAwO1xuXHRcdGxldCByO1xuXHRcdC8vIHNvbWUgc2hvcnRoYW5kc1xuXHRcdGNvbnN0IHJlbWFpbiA9ICgpID0+IHtcblx0XHRcdHJldHVybiBsbC5sZW5ndGg7XG5cdFx0fTtcblx0XHRjb25zdCBzaCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBsbC5zaGlmdCgpO1xuXHRcdH07IC8vIHNoaWZ0XG5cdFx0Y29uc3QgcHMgPSAocykgPT4ge1xuXHRcdFx0byArPSBzO1xuXHRcdH07IC8vIHB1c2hcblxuXHRcdC8vIHNpbWlsYXIgdG8gQydzIHByaW50ZiwgdXNlcyA/IGFzIHBsYWNlaG9sZGVycywgPz8gdG8gZXNjYXBlIHF1ZXN0aW9uIG1hcmtzXG5cdFx0Y29uc3QgZiA9IGZ1bmN0aW9uIGYoLi4uYXJncykge1xuXHRcdFx0bGV0IGkgPSAxO1xuXHRcdFx0Y29uc3QgYSA9IGFyZ3M7XG5cdFx0XHRsZXQgW2ZdID0gYTtcblx0XHRcdGxldCBvID0gJyc7XG5cdFx0XHRsZXQgYztcblx0XHRcdGxldCBwO1xuXHRcdFx0Zm9yICg7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICgocCA9IGYuaW5kZXhPZignPycpKSArIDEpIHtcblx0XHRcdFx0XHQvLyBhbGxvdyBjaGFyYWN0ZXIgZXNjYXBpbmdcblx0XHRcdFx0XHRjID0gZi5jaGFyQXQocCArIDEpID09PSAnPycgPyAxIDogMDtcblx0XHRcdFx0XHRpIC09IGM7XG5cdFx0XHRcdFx0byArPSBmLnNsaWNlKDAsIE1hdGgubWF4KDAsIHApKSArIChjID8gJz8nIDogYVtpXSk7XG5cdFx0XHRcdFx0ZiA9IGYuc2xpY2UocCArIDEgKyBjKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG8gKyBmO1xuXHRcdH07XG5cdFx0Y29uc3QgaHRtbF9lbnRpdGllcyA9IChzKSA9PiB7XG5cdFx0XHRyZXR1cm4gcy5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG5cdFx0fTtcblx0XHQvLyBXaWtpIHRleHQgcGFyc2luZyB0byBodG1sIGlzIGEgbmlnaHRtYXJlLlxuXHRcdC8vIFRoZSBiZWxvdyBmdW5jdGlvbnMgZGVsaWJlcmF0ZWx5IGRvbid0IGVzY2FwZSB0aGUgYW1wZXJzYW5kIHNpbmNlIHRoaXMgd291bGQgbWFrZSBpdCBtb3JlXG5cdFx0Ly8gZGlmZmljdWx0LCBhbmQgd2UgZG9uJ3QgYWJzb2x1dGVseSBuZWVkIHRvIGZvciBob3cgd2UgbmVlZCBpdC4gVGhpcyBtZWFucyB0aGF0IGFueVxuXHRcdC8vIHVuZXNjYXBlZCBhbXBlcnNhbmRzIGluIHdpa2l0ZXh0IHdpbGwgcmVtYWluIHVuZXNjYXBlZCBhbmQgY2FuIGNhdXNlIGludmFsaWQgSFRNTC5cblx0XHQvLyBCcm93c2VycyBzaG91bGQgYWxsIGJlIGFibGUgdG8gaGFuZGxlIGl0IHRob3VnaC4gV2UgYWxzbyBlc2NhcGUgc2lnbmlmaWNhbnQgd2lraW1hcmt1cFxuXHRcdC8vIGNoYXJhY3RlcnMgdG8gcHJldmVudCBmdXJ0aGVyIG1hdGNoaW5nIG9uIHRoZSBwcm9jZXNzZWQgdGV4dC5cblx0XHRjb25zdCBodG1sZXNjYXBlX3RleHQgPSAocykgPT4ge1xuXHRcdFx0cmV0dXJuIHNcblx0XHRcdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdFx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0XHRcdC5yZXBsYWNlKC86L2csICcmIzU4OycpXG5cdFx0XHRcdC5yZXBsYWNlKC9cXFsvZywgJyYjOTE7Jylcblx0XHRcdFx0LnJlcGxhY2UoL10vZywgJyYjOTM7Jyk7XG5cdFx0fTtcblx0XHRjb25zdCBodG1sZXNjYXBlX2F0dHIgPSAocykgPT4ge1xuXHRcdFx0cmV0dXJuIGh0bWxlc2NhcGVfdGV4dChzKS5yZXBsYWNlKC8nL2csICcmIzM5OycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcblx0XHR9O1xuXHRcdC8vIHJldHVybiB0aGUgZmlyc3Qgbm9uIG1hdGNoaW5nIGNoYXJhY3RlciBwb3NpdGlvbiBiZXR3ZWVuIHR3byBzdHJpbmdzXG5cdFx0Y29uc3Qgc3RyX2ltYXRjaCA9IChhLCBiKSA9PiB7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGxldCBsO1xuXHRcdFx0Zm9yIChpID0gMCwgbCA9IE1hdGgubWluKGEubGVuZ3RoLCBiLmxlbmd0aCk7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0aWYgKGEuY2hhckF0KGkpICE9PSBiLmNoYXJBdChpKSkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9O1xuXHRcdC8vIGNvbXBhcmUgY3VycmVudCBsaW5lIGFnYWluc3QgYSBzdHJpbmcgb3IgcmVnZXhwXG5cdFx0Ly8gaWYgcGFzc2VkIGEgc3RyaW5nIGl0IHdpbGwgY29tcGFyZSBvbmx5IHRoZSBmaXJzdCBzdHJpbmcubGVuZ3RoIGNoYXJhY3RlcnNcblx0XHQvLyBpZiBwYXNzZWQgYSByZWdleHAgdGhlIHJlc3VsdCBpcyBzdG9yZWQgaW4gclxuXHRcdGNvbnN0IGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcgPSAoYykgPT4ge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiBjID09PSAnc3RyaW5nJyA/IGxsWzBdICYmIGxsWzBdLnNsaWNlKDAsIGMubGVuZ3RoKSA9PT0gYyA6IChyID0gbGxbMF0gJiYgbGxbMF0ubWF0Y2goYykpO1xuXHRcdH07XG5cdFx0Y29uc3QgY29tcGFyZUxpbmVTdHJpbmcgPSAoYykgPT4ge1xuXHRcdFx0cmV0dXJuIGxsWzBdID09PSBjO1xuXHRcdH07IC8vIGNvbXBhcmUgY3VycmVudCBsaW5lIGFnYWluc3QgYSBzdHJpbmdcblx0XHRjb25zdCBjaGFyQXRQb2ludCA9IChwKSA9PiB7XG5cdFx0XHRyZXR1cm4gbGxbMF0uY2hhckF0KHApO1xuXHRcdH07IC8vIHJldHVybiBjaGFyIGF0IHBvcyBwXG5cdFx0Y29uc3QgZW5kbCA9IChzKSA9PiB7XG5cdFx0XHRwcyhzKTtcblx0XHRcdHNoKCk7XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV9saXN0ID0gKCkgPT4ge1xuXHRcdFx0bGV0IHByZXYgPSAnJztcblx0XHRcdHdoaWxlIChyZW1haW4oKSAmJiBjb21wYXJlTGluZVN0cmluZ09yUmVnKC9eKFsjKjo7XSspKC4qKSQvKSkge1xuXHRcdFx0XHRjb25zdCBsX21hdGNoID0gcjtcblx0XHRcdFx0c2goKTtcblx0XHRcdFx0Y29uc3QgaXBvcyA9IHN0cl9pbWF0Y2gocHJldiwgbF9tYXRjaFsxXSk7XG5cdFx0XHRcdC8vIGNsb3NlIHVuY29udGludWVkIGxpc3RzXG5cdFx0XHRcdGZvciAobGV0IHByZXZQb3MgPSBwcmV2Lmxlbmd0aCAtIDE7IHByZXZQb3MgPj0gaXBvczsgcHJldlBvcy0tKSB7XG5cdFx0XHRcdFx0Y29uc3QgcGkgPSBwcmV2LmNoYXJBdChwcmV2UG9zKTtcblx0XHRcdFx0XHRpZiAocGkgPT09ICcqJykge1xuXHRcdFx0XHRcdFx0cHMoJzwvdWw+Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwaSA9PT0gJyMnKSB7XG5cdFx0XHRcdFx0XHRwcygnPC9vbD4nKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFsnJywgJyonLCAnIyddLmluZGV4T2YobF9tYXRjaFsxXS5jaGFyQXQocHJldlBvcykpKSB7XG5cdFx0XHRcdFx0XHQvLyBjbG9zZSBhIGRsIG9ubHkgaWYgdGhlIG5ldyBpdGVtIGlzIG5vdCBhIGRsIGl0ZW0gKDosIDsgb3IgZW1wdHkpXG5cdFx0XHRcdFx0XHRwcygnPC9kbD4nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gb3BlbiBuZXcgbGlzdHNcblx0XHRcdFx0Zm9yIChsZXQgbWF0Y2hQb3MgPSBpcG9zOyBtYXRjaFBvcyA8IGxfbWF0Y2hbMV0ubGVuZ3RoOyBtYXRjaFBvcysrKSB7XG5cdFx0XHRcdFx0Y29uc3QgbGkgPSBsX21hdGNoWzFdLmNoYXJBdChtYXRjaFBvcyk7XG5cdFx0XHRcdFx0aWYgKGxpID09PSAnKicpIHtcblx0XHRcdFx0XHRcdHBzKCc8dWw+Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChsaSA9PT0gJyMnKSB7XG5cdFx0XHRcdFx0XHRwcygnPG9sPicpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoWycnLCAnKicsICcjJ10uaW5kZXhPZihwcmV2LmNoYXJBdChtYXRjaFBvcykpKSB7XG5cdFx0XHRcdFx0XHQvLyBvcGVuIGEgbmV3IGRsIG9ubHkgaWYgdGhlIHByZXYgaXRlbSBpcyBub3QgYSBkbCBpdGVtICg6LCA7IG9yIGVtcHR5KVxuXHRcdFx0XHRcdFx0cHMoJzxkbD4nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c3dpdGNoIChsX21hdGNoWzFdLmF0KC0xKSkge1xuXHRcdFx0XHRcdGNhc2UgJyonOlxuXHRcdFx0XHRcdGNhc2UgJyMnOlxuXHRcdFx0XHRcdFx0cHMoYDxsaT4ke3BhcnNlX2lubGluZV9ub3dpa2kobF9tYXRjaFsyXSl9YCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICc7Jzoge1xuXHRcdFx0XHRcdFx0cHMoJzxkdD4nKTtcblx0XHRcdFx0XHRcdGNvbnN0IGR0X21hdGNoID0gbF9tYXRjaFsyXS5tYXRjaCgvKC4qPykoOi4qPykkLyk7XG5cdFx0XHRcdFx0XHQvLyBoYW5kbGUgO2R0IDpkZCBmb3JtYXRcblx0XHRcdFx0XHRcdGlmIChkdF9tYXRjaCkge1xuXHRcdFx0XHRcdFx0XHRwcyhwYXJzZV9pbmxpbmVfbm93aWtpKGR0X21hdGNoWzFdKSk7XG5cdFx0XHRcdFx0XHRcdGxsLnVuc2hpZnQoZHRfbWF0Y2hbMl0pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cHMocGFyc2VfaW5saW5lX25vd2lraShsX21hdGNoWzJdKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FzZSAnOic6XG5cdFx0XHRcdFx0XHRwcyhgPGRkPiR7cGFyc2VfaW5saW5lX25vd2lraShsX21hdGNoWzJdKX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRbLCBwcmV2XSA9IGxfbWF0Y2g7XG5cdFx0XHR9XG5cdFx0XHQvLyBjbG9zZSByZW1haW5pbmcgbGlzdHNcblx0XHRcdGZvciAobGV0IGkgPSBwcmV2Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdHBzKGYoJzwvPz4nLCBwcmV2LmNoYXJBdChpKSA9PT0gJyonID8gJ3VsJyA6IHByZXYuY2hhckF0KGkpID09PSAnIycgPyAnb2wnIDogJ2RsJykpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfdGFibGUgPSAoKSA9PiB7XG5cdFx0XHRlbmRsKGYoJzx0YWJsZT4nLCBjb21wYXJlTGluZVN0cmluZ09yUmVnKC9ee1xcfCggLiopJC8pID8gclsxXSA6ICcnKSk7XG5cdFx0XHRmb3IgKDsgcmVtYWluKCk7ICkge1xuXHRcdFx0XHRpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygnfCcpKSB7XG5cdFx0XHRcdFx0c3dpdGNoIChjaGFyQXRQb2ludCgxKSkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnfSc6XG5cdFx0XHRcdFx0XHRcdGVuZGwoJzwvdGFibGU+Jyk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdGNhc2UgJy0nOlxuXHRcdFx0XHRcdFx0XHRlbmRsKGYoJzx0cj4nLCBjb21wYXJlTGluZVN0cmluZ09yUmVnKC9cXHwtKiguKikvKVsxXSkpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdHBhcnNlX3RhYmxlX2RhdGEoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygnIScpKSB7XG5cdFx0XHRcdFx0cGFyc2VfdGFibGVfZGF0YSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX3RhYmxlX2RhdGEgPSAoKSA9PiB7XG5cdFx0XHRsZXQgdGRfbGluZTtcblx0XHRcdGxldCBtYXRjaF9pO1xuXHRcdFx0Ly8gMTogXCJ8K1wiLCAnfCcgb3IgJysnXG5cdFx0XHQvLyAyOiA/P1xuXHRcdFx0Ly8gMzogYXR0cmlidXRlcyA/P1xuXHRcdFx0Ly8gVE9ETzogZmluaXNoIGNvbW1lbnRpbmcgdGhpcyByZWdleHBcblx0XHRcdGNvbnN0IHRkX21hdGNoID0gc2goKS5tYXRjaCgvXihcXHxcXCt8XFx8fCEpKCg/OihbXlt8XSo/KVxcfCg/IVxcfCkpPyguKikpJC8pO1xuXHRcdFx0aWYgKHRkX21hdGNoWzFdID09PSAnfCsnKSB7XG5cdFx0XHRcdHBzKCc8Y2FwdGlvbicpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHMoYDx0JHt0ZF9tYXRjaFsxXSA9PT0gJ3wnID8gJ2QnIDogJ2gnfWApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRkX21hdGNoWzNdKSB7XG5cdFx0XHRcdC8vIHBzKCcgJyArIHRkX21hdGNoWzNdKVxuXHRcdFx0XHRtYXRjaF9pID0gNDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1hdGNoX2kgPSAyO1xuXHRcdFx0fVxuXHRcdFx0cHMoJz4nKTtcblx0XHRcdGlmICh0ZF9tYXRjaFsxXSA9PT0gJ3wrJykge1xuXHRcdFx0XHRwcyhwYXJzZV9pbmxpbmVfbm93aWtpKHRkX21hdGNoW21hdGNoX2ldKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyB1c2UgfHwgb3IgISEgYXMgYSBjZWxsIHNlcGFyYXRvciBkZXBlbmRpbmcgb24gY29udGV4dFxuXHRcdFx0XHQvLyBOT1RFOiB3aGVuIHNwbGl0KCkgaXMgcGFzc2VkIGEgcmVnZXhwIG1ha2Ugc3VyZSB0byB1c2Ugbm9uLWNhcHR1cmluZyBicmFja2V0c1xuXHRcdFx0XHR0ZF9saW5lID0gdGRfbWF0Y2hbbWF0Y2hfaV0uc3BsaXQodGRfbWF0Y2hbMV0gPT09ICd8JyA/ICd8fCcgOiAvXFx8XFx8fCEhLyk7XG5cdFx0XHRcdHBzKHBhcnNlX2lubGluZV9ub3dpa2kodGRfbGluZS5zaGlmdCgpKSk7XG5cdFx0XHRcdHdoaWxlICh0ZF9saW5lLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRsbC51bnNoaWZ0KHRkX21hdGNoWzFdICsgdGRfbGluZS5wb3AoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGxldCB0YyA9IDA7XG5cdFx0XHRjb25zdCB0ZCA9IFtdO1xuXHRcdFx0d2hpbGUgKHJlbWFpbigpKSB7XG5cdFx0XHRcdHRkLnB1c2goc2goKSk7XG5cdFx0XHRcdGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKCd8JykpIHtcblx0XHRcdFx0XHRpZiAoIXRjKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGNoYXJBdFBvaW50KDEpID09PSAnfScpIHtcblx0XHRcdFx0XHRcdC8vIHdlJ3JlIGF0IHRoZSBvdXRlci1tb3N0IGxldmVsIChubyBuZXN0ZWQgdGFibGVzKSwgc2tpcCB0byB0ZCBwYXJzZVxuXHRcdFx0XHRcdFx0dGMtLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoIXRjICYmIGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJyEnKSkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJ3t8JykpIHtcblx0XHRcdFx0XHR0YysrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRwcyhJbnN0YS5jb252ZXJ0KHRkKSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV9wcmUgPSAoKSA9PiB7XG5cdFx0XHRwcygnPHByZT4nKTtcblx0XHRcdGRvIHtcblx0XHRcdFx0ZW5kbChgJHtwYXJzZV9pbmxpbmVfbm93aWtpKGxsWzBdLnNsaWNlKDEpKX1cXG5gKTtcblx0XHRcdH0gd2hpbGUgKHJlbWFpbigpICYmIGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJyAnKSk7XG5cdFx0XHRwcygnPC9wcmU+Jyk7XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV9ibG9ja19pbWFnZSA9ICgpID0+IHtcblx0XHRcdHBzKHBhcnNlX2ltYWdlKHNoKCkpKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX2ltYWdlID0gKHN0cikgPT4ge1xuXHRcdFx0Ly8gZ2V0IHdoYXQncyBpbiBiZXR3ZWVuIFwiW1tJbWFnZTpcIiBhbmQgXCJdXVwiXG5cdFx0XHRsZXQgdGFnID0gc3RyLnN1YnN0cmluZyhzdHIuaW5kZXhPZignOicpICsgMSwgc3RyLmxlbmd0aCAtIDIpO1xuXHRcdFx0bGV0IHdpZHRoO1xuXHRcdFx0bGV0IGF0dHIgPSBbXTtcblx0XHRcdGxldCBmaWxlbmFtZTtcblx0XHRcdGxldCBjYXB0aW9uID0gJyc7XG5cdFx0XHRsZXQgdGh1bWIgPSAwO1xuXHRcdFx0bGV0IGZyYW1lID0gMDtcblx0XHRcdGxldCBjZW50ZXIgPSAwO1xuXHRcdFx0bGV0IGFsaWduID0gJyc7XG5cdFx0XHRpZiAoL1xcfC8udGVzdCh0YWcpKSB7XG5cdFx0XHRcdC8vIG1hbmFnZSBuZXN0ZWQgbGlua3Ncblx0XHRcdFx0bGV0IG5lc3RpbmcgPSAwO1xuXHRcdFx0XHRsZXQgbGFzdF9hdHRyO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gdGFnLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcblx0XHRcdFx0XHRpZiAodGFnLmNoYXJBdChpKSA9PT0gJ3wnICYmICFuZXN0aW5nKSB7XG5cdFx0XHRcdFx0XHRsYXN0X2F0dHIgPSB0YWcuc2xpY2UoaSArIDEpO1xuXHRcdFx0XHRcdFx0dGFnID0gdGFnLnNsaWNlKDAsIE1hdGgubWF4KDAsIGkpKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKHRhZy5zbGljZShpIC0gMSwgaSAtIDEgKyAyKSkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICddXSc6XG5cdFx0XHRcdFx0XHRcdFx0bmVzdGluZysrO1xuXHRcdFx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnW1snOlxuXHRcdFx0XHRcdFx0XHRcdG5lc3RpbmctLTtcblx0XHRcdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGF0dHIgPSB0YWcuc3BsaXQoL1xccypcXHxcXHMqLyk7XG5cdFx0XHRcdGF0dHIucHVzaChsYXN0X2F0dHIpO1xuXHRcdFx0XHRmaWxlbmFtZSA9IGF0dHIuc2hpZnQoKTtcblx0XHRcdFx0bGV0IHdfbWF0Y2g7XG5cdFx0XHRcdGZvciAoOyBhdHRyLmxlbmd0aCA+IDA7IGF0dHIuc2hpZnQoKSkge1xuXHRcdFx0XHRcdHdfbWF0Y2ggPSBhdHRyWzBdLm1hdGNoKC9eKFxcZCopKD86W3B4XSpcXGQqKT9weCQvKTtcblx0XHRcdFx0XHRpZiAod19tYXRjaCkge1xuXHRcdFx0XHRcdFx0Wywgd2lkdGhdID0gd19tYXRjaDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3dpdGNoIChhdHRyWzBdKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ3RodW1iJzpcblx0XHRcdFx0XHRcdFx0Y2FzZSAndGh1bWJuYWlsJzpcblx0XHRcdFx0XHRcdFx0XHR0aHVtYiA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0ZnJhbWUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdmcmFtZSc6XG5cdFx0XHRcdFx0XHRcdFx0ZnJhbWUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdub25lJzpcblx0XHRcdFx0XHRcdFx0Y2FzZSAncmlnaHQnOlxuXHRcdFx0XHRcdFx0XHRjYXNlICdsZWZ0Jzpcblx0XHRcdFx0XHRcdFx0XHRjZW50ZXIgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRbYWxpZ25dID0gYXR0cjtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0Y2FzZSAnY2VudGVyJzpcblx0XHRcdFx0XHRcdFx0XHRjZW50ZXIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdGFsaWduID0gJ25vbmUnO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdGlmIChhdHRyLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0W2NhcHRpb25dID0gYXR0cjtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmaWxlbmFtZSA9IHRhZztcblx0XHRcdH1cblx0XHRcdHJldHVybiAnJztcblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX2lubGluZV9ub3dpa2kgPSAoc3RyKSA9PiB7XG5cdFx0XHRsZXQgc3RhcnQ7XG5cdFx0XHRsZXQgbGFzdGVuZCA9IDA7XG5cdFx0XHRsZXQgc3Vic3RhcnQgPSAwO1xuXHRcdFx0bGV0IG5lc3RsZXYgPSAwO1xuXHRcdFx0bGV0IG9wZW47XG5cdFx0XHRsZXQgY2xvc2U7XG5cdFx0XHRsZXQgc3VibG9vcDtcblx0XHRcdGxldCBodG1sID0gJyc7XG5cdFx0XHR3aGlsZSAoKHN0YXJ0ID0gc3RyLmluZGV4T2YoJzxubycuY29uY2F0KCd3aWtpJywgJz4nKSwgc3Vic3RhcnQpKSAhPT0gLTEpIHtcblx0XHRcdFx0aHRtbCArPSBwYXJzZV9pbmxpbmVfd2lraShzdHIuc3Vic3RyaW5nKGxhc3RlbmQsIHN0YXJ0KSk7XG5cdFx0XHRcdHN0YXJ0ICs9IDg7XG5cdFx0XHRcdHN1YnN0YXJ0ID0gc3RhcnQ7XG5cdFx0XHRcdHN1Ymxvb3AgPSB0cnVlO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0b3BlbiA9IHN0ci5pbmRleE9mKCc8bm8nLmNvbmNhdCgnd2lraScsICc+JyksIHN1YnN0YXJ0KTtcblx0XHRcdFx0XHRjbG9zZSA9IHN0ci5pbmRleE9mKCc8L25vJy5jb25jYXQoJ3dpa2knLCAnPicpLCBzdWJzdGFydCk7XG5cdFx0XHRcdFx0aWYgKGNsb3NlIDw9IG9wZW4gfHwgb3BlbiA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdGlmIChjbG9zZSA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGh0bWwgKyBodG1sX2VudGl0aWVzKHN0ci5zbGljZShzdGFydCkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vic3RhcnQgPSBjbG9zZSArIDk7XG5cdFx0XHRcdFx0XHRpZiAobmVzdGxldikge1xuXHRcdFx0XHRcdFx0XHRuZXN0bGV2LS07XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRsYXN0ZW5kID0gc3Vic3RhcnQ7XG5cdFx0XHRcdFx0XHRcdGh0bWwgKz0gaHRtbF9lbnRpdGllcyhzdHIuc3Vic3RyaW5nKHN0YXJ0LCBsYXN0ZW5kIC0gOSkpO1xuXHRcdFx0XHRcdFx0XHRzdWJsb29wID0gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN1YnN0YXJ0ID0gb3BlbiArIDg7XG5cdFx0XHRcdFx0XHRuZXN0bGV2Kys7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IHdoaWxlIChzdWJsb29wKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBodG1sICsgcGFyc2VfaW5saW5lX3dpa2koc3RyLnNsaWNlKGxhc3RlbmQpKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX2lubGluZV9pbWFnZXMgPSAoc3RyKSA9PiB7XG5cdFx0XHRsZXQgc3RhcnQ7XG5cdFx0XHRsZXQgc3Vic3RhcnQgPSAwO1xuXHRcdFx0bGV0IG5lc3RsZXYgPSAwO1xuXHRcdFx0bGV0IGxvb3A7XG5cdFx0XHRsZXQgY2xvc2U7XG5cdFx0XHRsZXQgb3Blbjtcblx0XHRcdGxldCB3aWtpO1xuXHRcdFx0bGV0IGh0bWw7XG5cdFx0XHR3aGlsZSAoKHN0YXJ0ID0gc3RyLmluZGV4T2YoJ1tbJywgc3Vic3RhcnQpKSAhPT0gLTEpIHtcblx0XHRcdFx0aWYgKG5ldyBSZWdFeHAoYF4oSW1hZ2V8RmlsZXwke0luc3RhLmNvbmYubG9jYWxlLmltYWdlfSk6YCwgJ2knKS50ZXN0KHN0ci5zbGljZShzdGFydCArIDIpKSkge1xuXHRcdFx0XHRcdGxvb3AgPSB0cnVlO1xuXHRcdFx0XHRcdHN1YnN0YXJ0ID0gc3RhcnQ7XG5cdFx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdFx0c3Vic3RhcnQgKz0gMjtcblx0XHRcdFx0XHRcdGNsb3NlID0gc3RyLmluZGV4T2YoJ11dJywgc3Vic3RhcnQpO1xuXHRcdFx0XHRcdFx0b3BlbiA9IHN0ci5pbmRleE9mKCdbWycsIHN1YnN0YXJ0KTtcblx0XHRcdFx0XHRcdGlmIChjbG9zZSA8PSBvcGVuIHx8IG9wZW4gPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChjbG9zZSA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gc3RyO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHN1YnN0YXJ0ID0gY2xvc2U7XG5cdFx0XHRcdFx0XHRcdGlmIChuZXN0bGV2KSB7XG5cdFx0XHRcdFx0XHRcdFx0bmVzdGxldi0tO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHdpa2kgPSBzdHIuc3Vic3RyaW5nKHN0YXJ0LCBjbG9zZSArIDIpO1xuXHRcdFx0XHRcdFx0XHRcdGh0bWwgPSBwYXJzZV9pbWFnZSh3aWtpKTtcblx0XHRcdFx0XHRcdFx0XHRzdHIgPSBzdHIucmVwbGFjZSh3aWtpLCBodG1sKTtcblx0XHRcdFx0XHRcdFx0XHRzdWJzdGFydCA9IHN0YXJ0ICsgaHRtbC5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdFx0bG9vcCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzdWJzdGFydCA9IG9wZW47XG5cdFx0XHRcdFx0XHRcdG5lc3RsZXYrKztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IHdoaWxlIChsb29wKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9O1xuXHRcdC8vIHRoZSBvdXRwdXQgb2YgdGhpcyBmdW5jdGlvbiBkb2Vzbid0IHJlc3BlY3QgdGhlIEZJTE8gc3RydWN0dXJlIG9mIEhUTUxcblx0XHQvLyBidXQgc2luY2UgbW9zdCBicm93c2VycyBjYW4gaGFuZGxlIGl0IEknbGwgc2F2ZSBteXNlbGYgdGhlIGhhc3NsZVxuXHRcdGNvbnN0IHBhcnNlX2lubGluZV9mb3JtYXR0aW5nID0gKHN0cikgPT4ge1xuXHRcdFx0bGV0IGVtO1xuXHRcdFx0bGV0IHN0O1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRsZXQgbGk7XG5cdFx0XHRsZXQgbyA9ICcnO1xuXHRcdFx0d2hpbGUgKChpID0gc3RyLmluZGV4T2YoXCInJ1wiLCBsaSkpICsgMSkge1xuXHRcdFx0XHRvICs9IHN0ci5zdWJzdHJpbmcobGksIGkpO1xuXHRcdFx0XHRsaSA9IGkgKyAyO1xuXHRcdFx0XHRpZiAoc3RyLmNoYXJBdChpICsgMikgPT09IFwiJ1wiKSB7XG5cdFx0XHRcdFx0bGkrKztcblx0XHRcdFx0XHRzdCA9ICFzdDtcblx0XHRcdFx0XHRvICs9IHN0ID8gJzxzdHJvbmc+JyA6ICc8L3N0cm9uZz4nO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVtID0gIWVtO1xuXHRcdFx0XHRcdG8gKz0gZW0gPyAnPGVtPicgOiAnPC9lbT4nO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbyArIHN0ci5zbGljZShsaSk7XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV9pbmxpbmVfd2lraSA9IChzdHIpID0+IHtcblx0XHRcdHN0ciA9IHBhcnNlX2lubGluZV9pbWFnZXMoc3RyKTtcblx0XHRcdHN0ciA9IHBhcnNlX2lubGluZV9mb3JtYXR0aW5nKHN0cik7XG5cdFx0XHQvLyBtYXRoXG5cdFx0XHRzdHIgPSBzdHIucmVwbGFjZSgvPG1hdGg+KC4qPyk8XFwvbWF0aD4vZ2ksICcnKTtcblx0XHRcdC8vIEJ1aWxkIGEgTWVkaWF3aWtpLWZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuXHRcdFx0bGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0bGV0IG1pbnV0ZXMgPSBkYXRlLmdldFVUQ01pbnV0ZXMoKTtcblx0XHRcdGlmIChtaW51dGVzIDwgMTApIHtcblx0XHRcdFx0bWludXRlcyA9IGAwJHttaW51dGVzfWA7XG5cdFx0XHR9XG5cdFx0XHRkYXRlID0gZihcblx0XHRcdFx0Jz86PywgPyA/ID8gKFVUQyknLFxuXHRcdFx0XHRkYXRlLmdldFVUQ0hvdXJzKCksXG5cdFx0XHRcdG1pbnV0ZXMsXG5cdFx0XHRcdGRhdGUuZ2V0VVRDRGF0ZSgpLFxuXHRcdFx0XHRJbnN0YS5jb25mLmxvY2FsZS5tb250aHNbZGF0ZS5nZXRVVENNb250aCgpXSxcblx0XHRcdFx0ZGF0ZS5nZXRVVENGdWxsWWVhcigpXG5cdFx0XHQpO1xuXHRcdFx0Ly8gdGV4dCBmb3JtYXR0aW5nXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRzdHJcblx0XHRcdFx0XHQvLyBzaWduYXR1cmVzXG5cdFx0XHRcdFx0LnJlcGxhY2UoL357NX0oPyF+KS9nLCBkYXRlKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9+ezR9KD8hfikvZywgYCR7SW5zdGEuY29uZi51c2VyLm5hbWV9ICR7ZGF0ZX1gKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9+ezN9KD8hfikvZywgSW5zdGEuY29uZi51c2VyLm5hbWUpXG5cdFx0XHRcdFx0Ly8gW1s6Q2F0ZWdvcnk6Li4uXV0sIFtbOkltYWdlOi4uLl1dLCBldGMuLi5cblx0XHRcdFx0XHQucmVwbGFjZShcblx0XHRcdFx0XHRcdG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRcdGBcXFxcW1xcXFxbOigoPzoke0luc3RhLmNvbmYubG9jYWxlLmNhdGVnb3J5fXxJbWFnZXxGaWxlfCR7SW5zdGEuY29uZi5sb2NhbGUuaW1hZ2V9fCR7SW5zdGEuY29uZi53aWtpLmludGVyd2lraX0pOltefF0qPylcXFxcXVxcXFxdKFxcXFx3KilgLFxuXHRcdFx0XHRcdFx0XHQnZ2knXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0KF8kMCwgJDEsICQyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcdFwiPGEgaHJlZj0nPyc+PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0XHRJbnN0YS5jb25mLnBhdGhzLmFydGljbGVzICsgaHRtbGVzY2FwZV9hdHRyKCQxKSxcblx0XHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDEpICsgaHRtbGVzY2FwZV90ZXh0KCQyKVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQvLyByZW1vdmUgc3RyYWlnaHQgY2F0ZWdvcnkgYW5kIGludGVyd2lraSB0YWdzXG5cdFx0XHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0XHRgXFxcXFtcXFxcWyg/OiR7SW5zdGEuY29uZi5sb2NhbGUuY2F0ZWdvcnl9fCR7SW5zdGEuY29uZi53aWtpLmludGVyd2lraX0pOi4qP1xcXFxdXFxcXF1gLFxuXHRcdFx0XHRcdFx0XHQnZ2knXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0Jydcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0Ly8gW1s6Q2F0ZWdvcnk6Li4ufExpbmtzXV0sIFtbOkltYWdlOi4uLnxMaW5rc11dLCBldGMuLi5cblx0XHRcdFx0XHQucmVwbGFjZShcblx0XHRcdFx0XHRcdG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRcdGBcXFxcW1xcXFxbOigoPzoke0luc3RhLmNvbmYubG9jYWxlLmNhdGVnb3J5fXxJbWFnZXxGaWxlfCR7SW5zdGEuY29uZi5sb2NhbGUuaW1hZ2V9fCR7SW5zdGEuY29uZi53aWtpLmludGVyd2lraX0pOi4qPylcXFxcfChbXlxcXFxdXSs/KVxcXFxdXFxcXF0oXFxcXHcqKWAsXG5cdFx0XHRcdFx0XHRcdCdnaSdcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHQoXyQwLCAkMSwgJDIsICQzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcdFwiPGEgaHJlZj0nPyc+PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0XHRJbnN0YS5jb25mLnBhdGhzLmFydGljbGVzICsgaHRtbGVzY2FwZV9hdHRyKCQxKSxcblx0XHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDIpICsgaHRtbGVzY2FwZV90ZXh0KCQzKVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQvLyBbWy9SZWxhdGl2ZSBsaW5rc11dXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcW1xcWyhcXC9bXnxdKj8pXV0vZywgKF8kMCwgJDEpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFwiPGEgaHJlZj0nPyc+PzwvYT5cIiwgSW5zdGEuY29uZi5iYXNlVXJsICsgaHRtbGVzY2FwZV9hdHRyKCQxKSwgaHRtbGVzY2FwZV90ZXh0KCQxKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyBbWy9SZXBsYWNlZHxSZWxhdGl2ZSBsaW5rc11dXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcW1xcWyhcXC8uKj8pXFx8KC4rPyldXS9nLCAoXyQwLCAkMSwgJDIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFwiPGEgaHJlZj0nPyc+PzwvYT5cIiwgSW5zdGEuY29uZi5iYXNlVXJsICsgaHRtbGVzY2FwZV9hdHRyKCQxKSwgaHRtbGVzY2FwZV90ZXh0KCQyKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyBbW0NvbW1vbiBsaW5rc11dXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcW1xcWyhbXlt8XSo/KV1dKFxcdyopL2csIChfJDAsICQxLCAkMikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFwiPGEgaHJlZj0nPyc+PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0SW5zdGEuY29uZi5wYXRocy5hcnRpY2xlcyArIGh0bWxlc2NhcGVfYXR0cigkMSksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMSkgKyBodG1sZXNjYXBlX3RleHQoJDIpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Ly8gW1tSZXBsYWNlZHxMaW5rc11dXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcW1xcWyhbXltdKj8pXFx8KFteXFxdXSs/KV1dKFxcdyopL2csIChfJDAsICQxLCAkMiwgJDMpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcIjxhIGhyZWY9Jz8nPj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdEluc3RhLmNvbmYucGF0aHMuYXJ0aWNsZXMgKyBodG1sZXNjYXBlX2F0dHIoJDEpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDIpICsgaHRtbGVzY2FwZV90ZXh0KCQzKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIFtbU3RyaXBwZWQ6TmFtZXNwYWNlfE5hbWVzcGFjZV1dXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcW1xcWyhbXlxcXV0qPzopPyguKj8pKCAqXFwoLio/XFwpKT9cXHxdXS9nLCAoXyQwLCAkMSwgJDIsICQzKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XCI8YSBocmVmPSc/Jz4/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRJbnN0YS5jb25mLnBhdGhzLmFydGljbGVzICsgaHRtbGVzY2FwZV9hdHRyKCQxKSArIGh0bWxlc2NhcGVfYXR0cigkMikgKyBodG1sZXNjYXBlX2F0dHIoJDMpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDIpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Ly8gRXh0ZXJuYWwgbGlua3Ncblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbKGh0dHBzP3xuZXdzfGZ0cHxtYWlsdG98Z29waGVyfGlyYyk6KFxcLyopKFteXFxdXSo/KSAoLio/KV0vZywgKF8kMCwgJDEsICQyLCAkMywgJDQpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcIjxhIGNsYXNzPSdleHRlcm5hbCcgaHJlZj0nPzo/Jz4/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX2F0dHIoJDEpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX2F0dHIoJDIpICsgaHRtbGVzY2FwZV9hdHRyKCQzKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQ0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFtodHRwOlxcL1xcLyguKj8pXS9nLCAoXyQwLCAkMSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXCI8YSBjbGFzcz0nZXh0ZXJuYWwnIGhyZWY9J2h0dHA6Ly8/Jz5bI108L2E+XCIsIGh0bWxlc2NhcGVfYXR0cigkMSkpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcWyhuZXdzfGZ0cHxtYWlsdG98Z29waGVyfGlyYyk6KFxcLyopKC4qPyldL2csIChfJDAsICQxLCAkMiwgJDMpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcIjxhIGNsYXNzPSdleHRlcm5hbCcgaHJlZj0nPzo/Jz4/Oj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfYXR0cigkMSksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfYXR0cigkMikgKyBodG1sZXNjYXBlX2F0dHIoJDMpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDEpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDIpICsgaHRtbGVzY2FwZV90ZXh0KCQzKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0LyhefCApKGh0dHBzP3xuZXdzfGZ0cHxtYWlsdG98Z29waGVyfGlyYyk6KFxcLyopKFteICRdKlteICEkLC46Oz9dKS9nLFxuXHRcdFx0XHRcdFx0KF8kMCwgJDEsICQyLCAkMywgJDQpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFx0XCI/PGEgY2xhc3M9J2V4dGVybmFsJyBocmVmPSc/Oj8nPj86PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDEpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfYXR0cigkMiksXG5cdFx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV9hdHRyKCQzKSArIGh0bWxlc2NhcGVfYXR0cigkNCksXG5cdFx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQyKSxcblx0XHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDMpICsgaHRtbGVzY2FwZV90ZXh0KCQ0KVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQucmVwbGFjZSgnX19OT1RPQ19fJywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ19fTk9JTkRFWF9fJywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ19fSU5ERVhfXycsICcnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKCdfX05PRURJVFNFQ1RJT05fXycsICcnKVxuXHRcdFx0KTtcblx0XHR9O1xuXHRcdC8vIGJlZ2luIHBhcnNpbmdcblx0XHRmb3IgKDsgcmVtYWluKCk7ICkge1xuXHRcdFx0aWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoL14oPXsxLDZ9KSguKilcXDEoLiopJC8pKSB7XG5cdFx0XHRcdHAgPSAwO1xuXHRcdFx0XHRlbmRsKGYoJzxoPz4/PC9oPz4/JywgclsxXS5sZW5ndGgsIHBhcnNlX2lubGluZV9ub3dpa2koclsyXSksIHJbMV0ubGVuZ3RoLCByWzNdKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoL15bIyo6O10vKSkge1xuXHRcdFx0XHRwID0gMDtcblx0XHRcdFx0cGFyc2VfbGlzdCgpO1xuXHRcdFx0fSBlbHNlIGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKCcgJykpIHtcblx0XHRcdFx0cCA9IDA7XG5cdFx0XHRcdHBhcnNlX3ByZSgpO1xuXHRcdFx0fSBlbHNlIGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKCd7fCcpKSB7XG5cdFx0XHRcdHAgPSAwO1xuXHRcdFx0XHRwYXJzZV90YWJsZSgpO1xuXHRcdFx0fSBlbHNlIGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKC9eLS0tLSskLykpIHtcblx0XHRcdFx0cCA9IDA7XG5cdFx0XHRcdGVuZGwoJzxocj4nKTtcblx0XHRcdH0gZWxzZSBpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZyhJbnN0YS5CTE9DS19JTUFHRSkpIHtcblx0XHRcdFx0cCA9IDA7XG5cdFx0XHRcdHBhcnNlX2Jsb2NrX2ltYWdlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBoYW5kbGUgcGFyYWdyYXBoc1xuXHRcdFx0XHRpZiAoY29tcGFyZUxpbmVTdHJpbmcoJycpKSB7XG5cdFx0XHRcdFx0cCA9IHJlbWFpbigpID4gMSAmJiBsbFsxXSA9PT0gJyc7XG5cdFx0XHRcdFx0aWYgKHApIHtcblx0XHRcdFx0XHRcdGVuZGwoJzxwPjxicj4nKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKCFwKSB7XG5cdFx0XHRcdFx0XHRwcygnPHA+Jyk7XG5cdFx0XHRcdFx0XHRwID0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cHMoYCR7cGFyc2VfaW5saW5lX25vd2lraShsbFswXSl9IGApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNoKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvO1xuXHR9O1xuXHRjb25zdCB3aWtpMmh0bWwgPSAodHh0LCBiYXNldXJsKSA9PiB7XG5cdFx0SW5zdGEuY29uZi5iYXNlVXJsID0gYmFzZXVybDtcblx0XHRyZXR1cm4gSW5zdGEuY29udmVydCh0eHQpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBsaXZlcHJldmlldy5qc1xuXHQvLyBTVEFSVEZJTEU6IHBhZ2VpbmZvLmpzXG5cdGNvbnN0IHBvcHVwRmlsdGVyUGFnZVNpemUgPSAoZGF0YSkgPT4ge1xuXHRcdHJldHVybiBmb3JtYXRCeXRlcyhkYXRhLmxlbmd0aCk7XG5cdH07XG5cdGNvbnN0IHBvcHVwRmlsdGVyQ291bnRMaW5rcyA9IChkYXRhKSA9PiB7XG5cdFx0Y29uc3QgbnVtID0gY291bnRMaW5rcyhkYXRhKTtcblx0XHRyZXR1cm4gYCR7U3RyaW5nKG51bSl9Jm5ic3A7JHtudW0gPT09IDEgPyBwb3B1cFN0cmluZygnd2lraUxpbmsnKSA6IHBvcHVwU3RyaW5nKCd3aWtpTGlua3MnKX1gO1xuXHR9O1xuXHRjb25zdCBwb3B1cEZpbHRlckNvdW50SW1hZ2VzID0gKGRhdGEpID0+IHtcblx0XHRjb25zdCBudW0gPSBjb3VudEltYWdlcyhkYXRhKTtcblx0XHRyZXR1cm4gYCR7U3RyaW5nKG51bSl9Jm5ic3A7JHtudW0gPT09IDEgPyBwb3B1cFN0cmluZygnaW1hZ2UnKSA6IHBvcHVwU3RyaW5nKCdpbWFnZXMnKX1gO1xuXHR9O1xuXHRjb25zdCBwb3B1cEZpbHRlckNvdW50Q2F0ZWdvcmllcyA9IChkYXRhKSA9PiB7XG5cdFx0Y29uc3QgbnVtID0gY291bnRDYXRlZ29yaWVzKGRhdGEpO1xuXHRcdHJldHVybiBgJHtTdHJpbmcobnVtKX0mbmJzcDske251bSA9PT0gMSA/IHBvcHVwU3RyaW5nKCdjYXRlZ29yeScpIDogcG9wdXBTdHJpbmcoJ2NhdGVnb3JpZXMnKX1gO1xuXHR9O1xuXHRjb25zdCBwb3B1cEZpbHRlckxhc3RNb2RpZmllZCA9IChfZGF0YSwgZG93bmxvYWQpID0+IHtcblx0XHRjb25zdCBsYXN0bW9kID0gZG93bmxvYWQubGFzdE1vZGlmaWVkO1xuXHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgYWdlID0gbm93IC0gbGFzdG1vZDtcblx0XHRpZiAobGFzdG1vZCAmJiBnZXRWYWx1ZU9mKCdwb3B1cExhc3RNb2RpZmllZCcpKSB7XG5cdFx0XHRyZXR1cm4gdHByaW50ZignJXMgb2xkJywgW2Zvcm1hdEFnZShhZ2UpXSkucmVwbGFjZSgvIC9nLCAnJm5ic3A7Jyk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fTtcblx0Y29uc3QgZm9ybWF0QWdlID0gKGFnZSkgPT4ge1xuXHRcdC8vIGNvZXJjZSBpbnRvIGEgbnVtYmVyXG5cdFx0bGV0IGEgPSAwICsgYWdlO1xuXHRcdGNvbnN0IGFhID0gYTtcblx0XHRjb25zdCBzZWNsZW4gPSAxMDAwO1xuXHRcdGNvbnN0IG1pbmxlbiA9IDYwICogc2VjbGVuO1xuXHRcdGNvbnN0IGhvdXJsZW4gPSA2MCAqIG1pbmxlbjtcblx0XHRjb25zdCBkYXlsZW4gPSAyNCAqIGhvdXJsZW47XG5cdFx0Y29uc3Qgd2Vla2xlbiA9IDcgKiBkYXlsZW47XG5cdFx0Y29uc3QgbnVtd2Vla3MgPSAoYSAtIChhICUgd2Vla2xlbikpIC8gd2Vla2xlbjtcblx0XHRhIC09IG51bXdlZWtzICogd2Vla2xlbjtcblx0XHRjb25zdCBzd2Vla3MgPSBhZGR1bml0KG51bXdlZWtzLCAnd2VlaycpO1xuXHRcdGNvbnN0IG51bWRheXMgPSAoYSAtIChhICUgZGF5bGVuKSkgLyBkYXlsZW47XG5cdFx0YSAtPSBudW1kYXlzICogZGF5bGVuO1xuXHRcdGNvbnN0IHNkYXlzID0gYWRkdW5pdChudW1kYXlzLCAnZGF5Jyk7XG5cdFx0Y29uc3QgbnVtaG91cnMgPSAoYSAtIChhICUgaG91cmxlbikpIC8gaG91cmxlbjtcblx0XHRhIC09IG51bWhvdXJzICogaG91cmxlbjtcblx0XHRjb25zdCBzaG91cnMgPSBhZGR1bml0KG51bWhvdXJzLCAnaG91cicpO1xuXHRcdGNvbnN0IG51bW1pbnMgPSAoYSAtIChhICUgbWlubGVuKSkgLyBtaW5sZW47XG5cdFx0YSAtPSBudW1taW5zICogbWlubGVuO1xuXHRcdGNvbnN0IHNtaW5zID0gYWRkdW5pdChudW1taW5zLCAnbWludXRlJyk7XG5cdFx0Y29uc3QgbnVtc2VjcyA9IChhIC0gKGEgJSBzZWNsZW4pKSAvIHNlY2xlbjtcblx0XHRhIC09IG51bXNlY3MgKiBzZWNsZW47XG5cdFx0Y29uc3Qgc3NlY3MgPSBhZGR1bml0KG51bXNlY3MsICdzZWNvbmQnKTtcblx0XHRpZiAoYWEgPiA0ICogd2Vla2xlbikge1xuXHRcdFx0cmV0dXJuIHN3ZWVrcztcblx0XHR9XG5cdFx0aWYgKGFhID4gd2Vla2xlbikge1xuXHRcdFx0cmV0dXJuIGAke3N3ZWVrc30gJHtzZGF5c31gO1xuXHRcdH1cblx0XHRpZiAoYWEgPiBkYXlsZW4pIHtcblx0XHRcdHJldHVybiBgJHtzZGF5c30gJHtzaG91cnN9YDtcblx0XHR9XG5cdFx0aWYgKGFhID4gNiAqIGhvdXJsZW4pIHtcblx0XHRcdHJldHVybiBzaG91cnM7XG5cdFx0fVxuXHRcdGlmIChhYSA+IGhvdXJsZW4pIHtcblx0XHRcdHJldHVybiBgJHtzaG91cnN9ICR7c21pbnN9YDtcblx0XHR9XG5cdFx0aWYgKGFhID4gMTAgKiBtaW5sZW4pIHtcblx0XHRcdHJldHVybiBzbWlucztcblx0XHR9XG5cdFx0aWYgKGFhID4gbWlubGVuKSB7XG5cdFx0XHRyZXR1cm4gYCR7c21pbnN9ICR7c3NlY3N9YDtcblx0XHR9XG5cdFx0cmV0dXJuIHNzZWNzO1xuXHR9O1xuXHRjb25zdCBhZGR1bml0ID0gKG51bSwgc3RyKSA9PiB7XG5cdFx0cmV0dXJuIGAke251bX0gJHtudW0gPT09IDEgPyBwb3B1cFN0cmluZyhzdHIpIDogcG9wdXBTdHJpbmcoYCR7c3RyfXNgKX1gO1xuXHR9O1xuXHRjb25zdCBydW5Qb3B1cEZpbHRlcnMgPSAobGlzdCwgZGF0YSwgZG93bmxvYWQpID0+IHtcblx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0aWYgKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgcyA9IGVsZW1lbnQoZGF0YSwgZG93bmxvYWQsIGRvd25sb2FkLm93bmVyLmFydGljbGUpO1xuXHRcdFx0XHRpZiAocykge1xuXHRcdFx0XHRcdHJldC5wdXNoKHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IGdldFBhZ2VJbmZvID0gKGRhdGEsIGRvd25sb2FkKSA9PiB7XG5cdFx0aWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ0VtcHR5IHBhZ2UnKTtcblx0XHR9XG5cdFx0Y29uc3QgcG9wdXBGaWx0ZXJzID0gZ2V0VmFsdWVPZigncG9wdXBGaWx0ZXJzJykgfHwgW107XG5cdFx0Y29uc3QgZXh0cmFQb3B1cEZpbHRlcnMgPSBnZXRWYWx1ZU9mKCdleHRyYVBvcHVwRmlsdGVycycpIHx8IFtdO1xuXHRcdGNvbnN0IHBhZ2VJbmZvQXJyYXkgPSBydW5Qb3B1cEZpbHRlcnMoWy4uLnBvcHVwRmlsdGVycywgLi4uZXh0cmFQb3B1cEZpbHRlcnNdLCBkYXRhLCBkb3dubG9hZCk7XG5cdFx0bGV0IHBhZ2VJbmZvID0gcGFnZUluZm9BcnJheS5qb2luKCcsICcpO1xuXHRcdGlmIChwYWdlSW5mbyAhPT0gJycpIHtcblx0XHRcdHBhZ2VJbmZvID0gdXBjYXNlRmlyc3QocGFnZUluZm8pO1xuXHRcdH1cblx0XHRyZXR1cm4gcGFnZUluZm87XG5cdH07XG5cdC8vIHRoaXMgY291bGQgYmUgaW1wcm92ZWQhXG5cdGNvbnN0IGNvdW50TGlua3MgPSAod2lraVRleHQpID0+IHtcblx0XHRyZXR1cm4gd2lraVRleHQuc3BsaXQoJ1tbJykubGVuZ3RoIC0gMTtcblx0fTtcblx0Ly8gaWYgTiA9ICMgbWF0Y2hlcywgbiA9ICMgYnJhY2tldHMsIHRoZW5cblx0Ly8gU3RyaW5nLnNwbGl0KHJlZ2V4KSBpbnRlcnNwZXJzZXMgdGhlIE4rMSBzcGxpdCBlbGVtZW50c1xuXHQvLyB3aXRoIE5uIG90aGVyIGVsZW1lbnRzLiBTbyB0b3RhbCBsZW5ndGggaXNcblx0Ly8gTD0gTisxICsgTm4gPSBOKG4rMSkrMS4gU28gTj0oTC0xKS8obisxKS5cblx0Y29uc3QgY291bnRJbWFnZXMgPSAod2lraVRleHQpID0+IHtcblx0XHRyZXR1cm4gKHdpa2lUZXh0LnNwbGl0KHBnLnJlLmltYWdlKS5sZW5ndGggLSAxKSAvIChwZy5yZS5pbWFnZUJyYWNrZXRDb3VudCArIDEpO1xuXHR9O1xuXHRjb25zdCBjb3VudENhdGVnb3JpZXMgPSAod2lraVRleHQpID0+IHtcblx0XHRyZXR1cm4gKHdpa2lUZXh0LnNwbGl0KHBnLnJlLmNhdGVnb3J5KS5sZW5ndGggLSAxKSAvIChwZy5yZS5jYXRlZ29yeUJyYWNrZXRDb3VudCArIDEpO1xuXHR9O1xuXHRjb25zdCBwb3B1cEZpbHRlclN0dWJEZXRlY3QgPSAoZGF0YSwgX2Rvd25sb2FkLCBhcnRpY2xlKSA9PiB7XG5cdFx0Y29uc3QgY291bnRzID0gc3R1YkNvdW50KGRhdGEsIGFydGljbGUpO1xuXHRcdGlmIChjb3VudHMucmVhbCkge1xuXHRcdFx0cmV0dXJuIHBvcHVwU3RyaW5nKCdzdHViJyk7XG5cdFx0fVxuXHRcdGlmIChjb3VudHMuc2VjdCkge1xuXHRcdFx0cmV0dXJuIHBvcHVwU3RyaW5nKCdzZWN0aW9uIHN0dWInKTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9O1xuXHRjb25zdCBwb3B1cEZpbHRlckRpc2FtYmlnRGV0ZWN0ID0gKGRhdGEsIF9kb3dubG9hZCwgYXJ0aWNsZSkgPT4ge1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBBbGxEYWJzU3R1YnMnKSAmJiBhcnRpY2xlLm5hbWVzcGFjZSgpKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdHJldHVybiBpc0Rpc2FtYmlnKGRhdGEsIGFydGljbGUpID8gcG9wdXBTdHJpbmcoJ2Rpc2FtYmlnJykgOiAnJztcblx0fTtcblx0Y29uc3QgZm9ybWF0Qnl0ZXMgPSAobnVtKSA9PiB7XG5cdFx0cmV0dXJuIG51bSA+IDk0OSA/IE1hdGgucm91bmQobnVtIC8gMTAwKSAvIDEwICsgcG9wdXBTdHJpbmcoJ2tCJykgOiBgJHtudW19Jm5ic3A7JHtwb3B1cFN0cmluZygnYnl0ZXMnKX1gO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBwYWdlaW5mby5qc1xuXHQvLyBTVEFSVEZJTEU6IHRpdGxlcy5qc1xuXHQvKipcblx0ICogQGZpbGVvdmVydmlldyBEZWZpbmVzIHRoZSB7QHNvdXJjZSBUaXRsZX0gY2xhc3MsIGFuZCBhc3NvY2lhdGVkIGNydWZ0eSBmdW5jdGlvbnMuXG5cdCAqXG5cdCAqIDxjb2RlPlRpdGxlPC9jb2RlPiBkZWFscyB3aXRoIGFydGljbGUgdGl0bGVzIGFuZCB0aGVpciB2YXJpb3VzXG5cdCAqIGZvcm1zLiAge0Bzb3VyY2UgU3RyaW5nd3JhcHBlcn0gaXMgdGhlIHBhcmVudCBjbGFzcyBvZlxuXHQgKiA8Y29kZT5UaXRsZTwvY29kZT4sIHdoaWNoIGV4aXN0cyBzaW1wbHkgdG8gbWFrZSB0aGluZ3MgYSBsaXR0bGVcblx0ICogbmVhdGVyLlxuXHQgKi9cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgU3RyaW5nd3JhcHBlci5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqIEBjbGFzcyB0aGUgU3RyaW5nd3JhcHBlciBjbGFzcy4gVGhpcyBiYXNlIGNsYXNzIGlzIG5vdCByZWFsbHlcblx0ICogdXNlZnVsIG9uIGl0cyBvd247IGl0IGp1c3Qgd3JhcHMgdmFyaW91cyBjb21tb24gc3RyaW5nIG9wZXJhdGlvbnMuXG5cdCAqL1xuXHRjb25zdCBTdHJpbmd3cmFwcGVyID0gZnVuY3Rpb24gU3RyaW5nd3JhcHBlcigpIHtcblx0XHQvKipcblx0XHQgKiBXcmFwcGVyIGZvciB0aGlzLnRvU3RyaW5nKCkuaW5kZXhPZigpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30geFxuXHRcdCAqIEB0eXBlIGludGVnZXJcblx0XHQgKi9cblx0XHR0aGlzLmluZGV4T2YgPSBmdW5jdGlvbiAoeCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoKS5pbmRleE9mKHgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGlzLnZhbHVlLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0ICovXG5cdFx0dGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogV3JhcHBlciBmb3Ige0Bzb3VyY2UgU3RyaW5nI3BhcmVuU3BsaXR9IGFwcGxpZWQgdG8gdGhpcy50b1N0cmluZygpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1JlZ0V4cH0geFxuXHRcdCAqIEB0eXBlIEFycmF5XG5cdFx0ICovXG5cdFx0dGhpcy5zcGxpdCA9IGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZygpLnNwbGl0KHgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogV3JhcHBlciBmb3IgdGhpcy50b1N0cmluZygpLnN1YnN0cmluZygpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30geFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB5IChvcHRpb25hbClcblx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHQgKi9cblx0XHR0aGlzLnN1YnN0cmluZyA9IGZ1bmN0aW9uICh4LCB5KSB7XG5cdFx0XHRpZiAoeSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCkuc2xpY2UoTWF0aC5tYXgoMCwgeCkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoKS5zdWJzdHJpbmcoeCwgeSk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBXcmFwcGVyIGZvciB0aGlzLnRvU3RyaW5nKCkuc3BsaXQoKVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHhcblx0XHQgKiBAdHlwZSBBcnJheVxuXHRcdCAqL1xuXHRcdHRoaXMuc3BsaXQgPSBmdW5jdGlvbiAoeCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoKS5zcGxpdCh4KTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFdyYXBwZXIgZm9yIHRoaXMudG9TdHJpbmcoKS5yZXBsYWNlKClcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB4XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHlcblx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHQgKi9cblx0XHR0aGlzLnJlcGxhY2UgPSBmdW5jdGlvbiAoeCwgeSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoKS5yZXBsYWNlKHgsIHkpO1xuXHRcdH07XG5cdH07XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IDxjb2RlPlRpdGxlPC9jb2RlPi5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqIEBjbGFzcyBUaGUgVGl0bGUgY2xhc3MuIEhvbGRzIGFydGljbGUgdGl0bGVzIGFuZCBjb252ZXJ0cyB0aGVtIGludG9cblx0ICogdmFyaW91cyBmb3Jtcy4gQWxzbyBkZWFscyB3aXRoIGFuY2hvcnMsIGJ5IHdoaWNoIHdlIG1lYW4gdGhlIGJpdHNcblx0ICogb2YgdGhlIGFydGljbGUgVVJMIGFmdGVyIGEgIyBjaGFyYWN0ZXIsIHJlcHJlc2VudGluZyBsb2NhdGlvbnNcblx0ICogd2l0aGluIGFuIGFydGljbGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgaW5pdGlhbCB2YWx1ZSB0byBhc3NpZ24gdG8gdGhlXG5cdCAqIGFydGljbGUuIFRoaXMgbXVzdCBiZSB0aGUgY2Fub25pY2FsIHRpdGxlIChzZWUge0BsaW5rXG5cdCAqIFRpdGxlI3ZhbHVlfS4gT21pdCB0aGlzIGluIHRoZSBjb25zdHJ1Y3RvciBhbmQgdXNlIGFub3RoZXIgZnVuY3Rpb25cblx0ICogdG8gc2V0IHRoZSB0aXRsZSBpZiB0aGlzIGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0Y2xhc3MgVGl0bGUgZXh0ZW5kcyBTdHJpbmd3cmFwcGVyIHtcblx0XHRjb25zdHJ1Y3Rvcih2YWwpIHtcblx0XHRcdHN1cGVyKCk7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBjYW5vbmljYWwgYXJ0aWNsZSB0aXRsZS4gVGhpcyBtdXN0IGJlIGluIFVURi04IHdpdGggbm9cblx0XHRcdCAqIGVudGl0aWVzLCBlc2NhcGluZyBvciBuYXN0aWVzLiBBbHNvLCB1bmRlcnNjb3JlcyBzaG91bGQgYmVcblx0XHRcdCAqIHJlcGxhY2VkIHdpdGggc3BhY2VzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBjYW5vbmljYWwgZm9ybSBvZiB0aGUgYW5jaG9yLiBUaGlzIHNob3VsZCBiZSBleGFjdGx5IGFzXG5cdFx0XHQgKiBpdCBhcHBlYXJzIGluIHRoZSBVUkwsIGkuZS4gd2l0aCB0aGUgLkMzLjBBIGJpdHMgaW4uXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuYW5jaG9yID0gJyc7XG5cdFx0XHR0aGlzLnNldFV0Zih2YWwpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHRoZSBjYW5vbmljYWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGFydGljbGUgdGl0bGUsIG9wdGlvbmFsbHkgd2l0aG91dCBhbmNob3IuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IG9taXRBbmNob3Jcblx0XHQgKiBAZml4bWUgRGVjaWRlIHNwZWNzIGZvciBhbmNob3Jcblx0XHQgKiBAcmV0dXJuIFN0cmluZyBUaGUgYXJ0aWNsZSB0aXRsZSBhbmQgdGhlIGFuY2hvci5cblx0XHQgKi9cblx0XHR0b1N0cmluZyhvbWl0QW5jaG9yKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52YWx1ZSArICghb21pdEFuY2hvciAmJiB0aGlzLmFuY2hvciA/IGAjJHt0aGlzLmFuY2hvclN0cmluZygpfWAgOiAnJyk7XG5cdFx0fVxuXHRcdGFuY2hvclN0cmluZygpIHtcblx0XHRcdGlmICghdGhpcy5hbmNob3IpIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgc3BsaXQgPSB0aGlzLmFuY2hvci5zcGxpdCgvKCg/OlxcLltcXGRBLUZdezJ9KSspLyk7XG5cdFx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cdFx0XHRsZXQgdmFsdWU7XG5cdFx0XHRmb3IgKGxldCBqID0gMTsgaiA8IGxlbjsgaiArPSAyKSB7XG5cdFx0XHRcdC8vIEZJWE1FIHMvZGVjb2RlVVJJL2RlY29kZVVSSUNvbXBvbmVudC9nID9cblx0XHRcdFx0dmFsdWUgPSBzcGxpdFtqXS5zcGxpdCgnLicpLmpvaW4oJyUnKTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIGNhbm5vdCBkZWNvZGVcblx0XHRcdFx0fVxuXHRcdFx0XHRzcGxpdFtqXSA9IHZhbHVlLnNwbGl0KCdfJykuam9pbignICcpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNwbGl0LmpvaW4oJycpO1xuXHRcdH1cblx0XHR1cmxBbmNob3IoKSB7XG5cdFx0XHRjb25zdCBzcGxpdCA9IHRoaXMuYW5jaG9yLnNwbGl0KCcvKCg/OlslXVswLTlBLUZdezJ9KSspLycpO1xuXHRcdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXHRcdFx0Zm9yIChsZXQgaiA9IDE7IGogPCBsZW47IGogKz0gMikge1xuXHRcdFx0XHRzcGxpdFtqXSA9IHNwbGl0W2pdLnNwbGl0KCclJykuam9pbignLicpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNwbGl0LmpvaW4oJycpO1xuXHRcdH1cblx0XHRhbmNob3JGcm9tVXRmKHN0cikge1xuXHRcdFx0dGhpcy5hbmNob3IgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyLnNwbGl0KCcgJykuam9pbignXycpKVxuXHRcdFx0XHQuc3BsaXQoJyUzQScpXG5cdFx0XHRcdC5qb2luKCc6Jylcblx0XHRcdFx0LnNwbGl0KFwiJ1wiKVxuXHRcdFx0XHQuam9pbignJTI3Jylcblx0XHRcdFx0LnNwbGl0KCclJylcblx0XHRcdFx0LmpvaW4oJy4nKTtcblx0XHR9XG5cdFx0ZnJvbVVSTChoKSB7XG5cdFx0XHRpZiAodHlwZW9mIGggIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdC8vIE5PVEUgOiBwbGF5aW5nIHdpdGggZGVjb2RlVVJJLCBlbmNvZGVVUkksIGVzY2FwZSwgdW5lc2NhcGUsXG5cdFx0XHQvLyB3ZSBzZWVtIHRvIGJlIGFibGUgdG8gcmVwbGljYXRlIHRoZSBJRSBib3JrZWQgZW5jb2Rpbmdcblx0XHRcdC8vIElFIGRvZXNuJ3QgZG8gdGhpcyBuZXctZmFuZ2xlZCB1dGYtOCB0aGluZy5cblx0XHRcdC8vIGFuZCBpdCdzIHdvcnNlIHRoYW4gdGhhdC5cblx0XHRcdC8vIElFIHNlZW1zIHRvIHRyZWF0IHRoZSBxdWVyeSBzdHJpbmcgZGlmZmVyZW50bHkgdG8gdGhlIHJlc3Qgb2YgdGhlIHVybFxuXHRcdFx0Ly8gdGhlIHF1ZXJ5IGlzIHRyZWF0ZWQgYXMgYm9uYS1maWRlIHV0ZjgsIGJ1dCB0aGUgZmlyc3QgYml0IG9mIHRoZSB1cmwgaXMgcGlzc2VkIGFyb3VuZCB3aXRoXG5cdFx0XHQvLyB3ZSBmaXggdXAgJiBmb3IgYWxsIGJyb3dzZXJzLCBqdXN0IGluIGNhc2UuXG5cdFx0XHRjb25zdCBzcGxpdHRlZCA9IGguc3BsaXQoJz8nKTtcblx0XHRcdHNwbGl0dGVkWzBdID0gc3BsaXR0ZWRbMF0uc3BsaXQoJyYnKS5qb2luKCclMjYnKTtcblx0XHRcdGggPSBzcGxpdHRlZC5qb2luKCc/Jyk7XG5cdFx0XHRjb25zdCBjb250cmlicyA9IHBnLnJlLmNvbnRyaWJzLmV4ZWMoaCk7XG5cdFx0XHRpZiAoY29udHJpYnMpIHtcblx0XHRcdFx0aWYgKGNvbnRyaWJzWzFdID09PSAndGl0bGU9Jykge1xuXHRcdFx0XHRcdGNvbnRyaWJzWzNdID0gY29udHJpYnNbM10uc3BsaXQoJysnKS5qb2luKCcgJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdSA9IG5ldyBUaXRsZShjb250cmlic1szXSk7XG5cdFx0XHRcdHRoaXMuc2V0VXRmKFxuXHRcdFx0XHRcdFRpdGxlLmRlY29kZU5hc3RpZXMoYCR7bXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNVc2VySWRdfToke3Uuc3RyaXBOYW1lc3BhY2UoKX1gKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdGNvbnN0IGVtYWlsID0gcGcucmUuZW1haWwuZXhlYyhoKTtcblx0XHRcdGlmIChlbWFpbCkge1xuXHRcdFx0XHR0aGlzLnNldFV0Zihcblx0XHRcdFx0XHRUaXRsZS5kZWNvZGVOYXN0aWVzKFxuXHRcdFx0XHRcdFx0YCR7bXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNVc2VySWRdfToke25ldyBUaXRsZShlbWFpbFszXSkuc3RyaXBOYW1lc3BhY2UoKX1gXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdGNvbnN0IGJhY2tsaW5rcyA9IHBnLnJlLmJhY2tsaW5rcy5leGVjKGgpO1xuXHRcdFx0aWYgKGJhY2tsaW5rcykge1xuXHRcdFx0XHR0aGlzLnNldFV0ZihUaXRsZS5kZWNvZGVOYXN0aWVzKG5ldyBUaXRsZShiYWNrbGlua3NbM10pKSk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQSBkdW1teSB0aXRsZSBvYmplY3QgZm9yIGEgU3BlY2lhbDpEaWZmIGxpbmsuXG5cdFx0XHRjb25zdCBzcGVjaWFsZGlmZiA9IHBnLnJlLnNwZWNpYWxkaWZmLmV4ZWMoaCk7XG5cdFx0XHRpZiAoc3BlY2lhbGRpZmYpIHtcblx0XHRcdFx0dGhpcy5zZXRVdGYoXG5cdFx0XHRcdFx0VGl0bGUuZGVjb2RlTmFzdGllcyhuZXcgVGl0bGUoYCR7bXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNTcGVjaWFsSWRdfTpEaWZmYCkpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0Ly8gbm8gbW9yZSBzcGVjaWFsIGNhc2VzIHRvIGNoZWNrIC0tXG5cdFx0XHQvLyBob3BlZnVsbHkgaXQncyBub3QgYSBkaXNndWlzZWQgdXNlci1yZWxhdGVkIG9yIHNwZWNpYWxseSB0cmVhdGVkIHNwZWNpYWwgcGFnZVxuXHRcdFx0Ly8gSW5jbHVkZXMgcmVmZXJlbmNlc1xuXHRcdFx0Y29uc3QgbSA9IHBnLnJlLm1haW4uZXhlYyhoKTtcblx0XHRcdGlmIChtID09PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgZnJvbUJvdEludGVyZmFjZSA9IC9cXD8oLismKT90aXRsZT0vLnRlc3QoaCk7XG5cdFx0XHRcdGlmIChmcm9tQm90SW50ZXJmYWNlKSB7XG5cdFx0XHRcdFx0bVsyXSA9IG1bMl0uc3BsaXQoJysnKS5qb2luKCdfJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZXh0cmFjdGVkID0gbVsyXSArIChtWzNdID8gYCMke21bM119YCA6ICcnKTtcblx0XHRcdFx0aWYgKHBnLmZsYWcuaXNTYWZhcmkgJiYgLyUyNVtcXGRBLUZhLWZdezJ9Ly50ZXN0KGV4dHJhY3RlZCkpIHtcblx0XHRcdFx0XHQvLyBGaXggU2FmYXJpIGlzc3VlXG5cdFx0XHRcdFx0Ly8gU2FmYXJpIHNvbWV0aW1lcyBlbmNvZGVzICUgYXMgJTI1IGluIFVURi04IGVuY29kZWQgc3RyaW5ncyBsaWtlICVFNSVBMyAtPiAlMjVFNSUyNUEzLlxuXHRcdFx0XHRcdHRoaXMuc2V0VXRmKGRlY29kZVVSSUNvbXBvbmVudCh1bmVzY2FwZShleHRyYWN0ZWQpKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRVdGYoVGl0bGUuZGVjb2RlTmFzdGllcyhleHRyYWN0ZWQpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHN0YXRpYyBkZWNvZGVOYXN0aWVzKHR4dCkge1xuXHRcdFx0Ly8gbXlEZWNvZGVVUkkgdXNlcyBkZWNvZGVFeHRyYXMsIHdoaWNoIHJlbW92ZXMgXyxcblx0XHRcdC8vIHRodXMgcnVpbmluZyBjaXRhdGlvbnMgcHJldmlld3MsIHdoaWNoIGFyZSBmb3JtYXRlZCBhcyBcImNpdGVfbm90ZS0xXCJcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxldCByZXQgPSBkZWNvZGVVUkkoVGl0bGUuZGVjb2RlRXNjYXBlcyh0eHQpKTtcblx0XHRcdFx0cmV0ID0gcmV0LnJlcGxhY2UoL1sgX10qJC8sICcnKTtcblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRyZXR1cm4gdHh0OyAvLyBjYW5ub3QgZGVjb2RlXG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIERlY29kZSB2YWxpZCAlLWVuY29kaW5ncywgb3RoZXJ3aXNlIGVzY2FwZSB0aGVtXG5cdFx0c3RhdGljIGRlY29kZUVzY2FwZXModHh0KSB7XG5cdFx0XHRjb25zdCBzcGxpdCA9IHR4dC5zcGxpdCgvKCg/OiVbXFxkQS1GYS1mXXsyfSkrKS8pO1xuXHRcdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXHRcdFx0Ly8gTm8gJS1lbmNvZGVkIGl0ZW1zIGZvdW5kLCBzbyByZXBsYWNlIHRoZSBsaXRlcmFsICVcblx0XHRcdGlmIChsZW4gPT09IDEpIHtcblx0XHRcdFx0cmV0dXJuIHNwbGl0WzBdLnJlcGxhY2UoLyUoPyFbXFxkQS1GYS1mXXsyfSkvZywgJyUyNScpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBsZW47IGkgKz0gMikge1xuXHRcdFx0XHRzcGxpdFtpXSA9IGRlY29kZVVSSUNvbXBvbmVudChzcGxpdFtpXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3BsaXQuam9pbignJyk7XG5cdFx0fVxuXHRcdGZyb21BbmNob3IoYSkge1xuXHRcdFx0aWYgKCFhKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLmZyb21VUkwoYS5ocmVmKTtcblx0XHR9XG5cdFx0ZnJvbVdpa2lUZXh0KHR4dCkge1xuXHRcdFx0Ly8gRklYTUUgLSB0ZXN0aW5nIG5lZWRlZFxuXHRcdFx0dHh0ID0gbXlEZWNvZGVVUkkodHh0KTtcblx0XHRcdHRoaXMuc2V0VXRmKHR4dCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aGludFZhbHVlKCkge1xuXHRcdFx0aWYgKCF0aGlzLnZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblx0XHRcdHJldHVybiBzYWZlRGVjb2RlVVJJKHRoaXMudmFsdWUpO1xuXHRcdH1cblx0XHR0b1VzZXJOYW1lKHdpdGhOcykge1xuXHRcdFx0aWYgKHRoaXMubmFtZXNwYWNlSWQoKSAhPT0gcGcubnNVc2VySWQgJiYgdGhpcy5uYW1lc3BhY2VJZCgpICE9PSBwZy5uc1VzZXJ0YWxrSWQpIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMudmFsdWUgPVxuXHRcdFx0XHQod2l0aE5zID8gYCR7bXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNVc2VySWRdfTpgIDogJycpICtcblx0XHRcdFx0dGhpcy5zdHJpcE5hbWVzcGFjZSgpLnNwbGl0KCcvJylbMF07XG5cdFx0fVxuXHRcdHVzZXJOYW1lKHdpdGhOcykge1xuXHRcdFx0Y29uc3QgdCA9IG5ldyBUaXRsZSh0aGlzLnZhbHVlKTtcblx0XHRcdHQudG9Vc2VyTmFtZSh3aXRoTnMpO1xuXHRcdFx0aWYgKHQudmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0dG9UYWxrUGFnZSgpIHtcblx0XHRcdC8vIGNvbnZlcnQgYXJ0aWNsZSB0byBhIHRhbGsgcGFnZSwgb3IgaWYgd2UgY2FuJ3QsIHJldHVybiBudWxsXG5cdFx0XHQvLyBJbiBvdGhlciB3b3JkczogcmV0dXJuIG51bGwgaWYgdGhpcyBBTFJFQURZIElTIGEgdGFsayBwYWdlXG5cdFx0XHQvLyBhbmQgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIHRhbGsgcGFnZSBvdGhlcndpc2Vcblx0XHRcdC8vXG5cdFx0XHQvLyBQZXIge0BsaW5rIGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9NYW51YWw6TmFtZXNwYWNlI1N1YmplY3RfYW5kX3RhbGtfbmFtZXNwYWNlc31cblx0XHRcdC8vICogQWxsIGRpc2N1c3Npb24gbmFtZXNwYWNlcyBoYXZlIG9kZC1pbnRlZ2VyIGluZGljZXNcblx0XHRcdC8vICogVGhlIGRpc2N1c3Npb24gbmFtZXNwYWNlIGluZGV4IGZvciBhIHNwZWNpZmljIG5hbWVzcGFjZSB3aXRoIGluZGV4IG4gaXMgbiArIDFcblx0XHRcdGlmICh0aGlzLnZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbmFtZXNwYWNlSWQgPSB0aGlzLm5hbWVzcGFjZUlkKCk7XG5cdFx0XHRpZiAobmFtZXNwYWNlSWQgPj0gMCAmJiBuYW1lc3BhY2VJZCAlIDIgPT09IDApIHtcblx0XHRcdFx0Ly8gbm9uLXNwZWNpYWwgYW5kIHN1YmplY3QgbmFtZXNwYWNlXG5cdFx0XHRcdGNvbnN0IGxvY2FsaXplZE5hbWVzcGFjZSA9IG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW25hbWVzcGFjZUlkICsgMV07XG5cdFx0XHRcdGlmIChsb2NhbGl6ZWROYW1lc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPVxuXHRcdFx0XHRcdFx0bG9jYWxpemVkTmFtZXNwYWNlID09PSAnJ1xuXHRcdFx0XHRcdFx0XHQ/IHRoaXMuc3RyaXBOYW1lc3BhY2UoKVxuXHRcdFx0XHRcdFx0XHQ6IGAke2xvY2FsaXplZE5hbWVzcGFjZS5zcGxpdCgnICcpLmpvaW4oJ18nKX06JHt0aGlzLnN0cmlwTmFtZXNwYWNlKCl9YDtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Ly8gUmV0dXJuIGNhbm9uaWNhbCwgbG9jYWxpemVkIG5hbWVzcGFjZVxuXHRcdG5hbWVzcGFjZSgpIHtcblx0XHRcdHJldHVybiBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVt0aGlzLm5hbWVzcGFjZUlkKCldO1xuXHRcdH1cblx0XHRuYW1lc3BhY2VJZCgpIHtcblx0XHRcdGNvbnN0IG4gPSB0aGlzLnZhbHVlLmluZGV4T2YoJzonKTtcblx0XHRcdGlmIChuID09PSAtMSkge1xuXHRcdFx0XHRyZXR1cm4gMDsgLy8gbWFpbnNwYWNlXG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuYW1lc3BhY2VJZCA9XG5cdFx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlSWRzJylbdGhpcy52YWx1ZS5zbGljZSgwLCBNYXRoLm1heCgwLCBuKSkuc3BsaXQoJyAnKS5qb2luKCdfJykudG9Mb3dlckNhc2UoKV07XG5cdFx0XHRpZiAobmFtZXNwYWNlSWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4gMDsgLy8gbWFpbnNwYWNlXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbmFtZXNwYWNlSWQ7XG5cdFx0fVxuXHRcdHRhbGtQYWdlKCkge1xuXHRcdFx0Y29uc3QgdCA9IG5ldyBUaXRsZSh0aGlzLnZhbHVlKTtcblx0XHRcdHQudG9UYWxrUGFnZSgpO1xuXHRcdFx0aWYgKHQudmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aXNUYWxrUGFnZSgpIHtcblx0XHRcdGlmICh0aGlzLnRhbGtQYWdlKCkgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHRvQXJ0aWNsZUZyb21UYWxrUGFnZSgpIHtcblx0XHRcdC8vIGxhcmdlbHkgY29weS9wYXN0ZSBmcm9tIHRvVGFsa1BhZ2UgYWJvdmUuXG5cdFx0XHRpZiAodGhpcy52YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5hbWVzcGFjZUlkID0gdGhpcy5uYW1lc3BhY2VJZCgpO1xuXHRcdFx0aWYgKG5hbWVzcGFjZUlkID49IDAgJiYgbmFtZXNwYWNlSWQgJSAyID09PSAxKSB7XG5cdFx0XHRcdC8vIG5vbi1zcGVjaWFsIGFuZCB0YWxrIG5hbWVzcGFjZVxuXHRcdFx0XHRjb25zdCBsb2NhbGl6ZWROYW1lc3BhY2UgPSBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtuYW1lc3BhY2VJZCAtIDFdO1xuXHRcdFx0XHRpZiAobG9jYWxpemVkTmFtZXNwYWNlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLnZhbHVlID1cblx0XHRcdFx0XHRcdGxvY2FsaXplZE5hbWVzcGFjZSA9PT0gJydcblx0XHRcdFx0XHRcdFx0PyB0aGlzLnN0cmlwTmFtZXNwYWNlKClcblx0XHRcdFx0XHRcdFx0OiBgJHtsb2NhbGl6ZWROYW1lc3BhY2Uuc3BsaXQoJyAnKS5qb2luKCdfJyl9OiR7dGhpcy5zdHJpcE5hbWVzcGFjZSgpfWA7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMudmFsdWUgPSBudWxsO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGFydGljbGVGcm9tVGFsa1BhZ2UoKSB7XG5cdFx0XHRjb25zdCB0ID0gbmV3IFRpdGxlKHRoaXMudmFsdWUpO1xuXHRcdFx0dC50b0FydGljbGVGcm9tVGFsa1BhZ2UoKTtcblx0XHRcdGlmICh0LnZhbHVlKSB7XG5cdFx0XHRcdHJldHVybiB0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGFydGljbGVGcm9tVGFsa09yQXJ0aWNsZSgpIHtcblx0XHRcdGNvbnN0IHQgPSBuZXcgVGl0bGUodGhpcy52YWx1ZSk7XG5cdFx0XHRpZiAodC50b0FydGljbGVGcm9tVGFsa1BhZ2UoKSkge1xuXHRcdFx0XHRyZXR1cm4gdDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRpc0lwVXNlcigpIHtcblx0XHRcdHJldHVybiBwZy5yZS5pcFVzZXIudGVzdCh0aGlzLnVzZXJOYW1lKCkpO1xuXHRcdH1cblx0XHRzdHJpcE5hbWVzcGFjZSgpIHtcblx0XHRcdC8vIHJldHVybnMgYSBzdHJpbmcsIG5vdCBhIFRpdGxlXG5cdFx0XHRjb25zdCBuID0gdGhpcy52YWx1ZS5pbmRleE9mKCc6Jyk7XG5cdFx0XHRpZiAobiA9PT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuYW1lc3BhY2VJZCA9IHRoaXMubmFtZXNwYWNlSWQoKTtcblx0XHRcdGlmIChuYW1lc3BhY2VJZCA9PT0gcGcubnNNYWluc3BhY2VJZCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnZhbHVlLnNsaWNlKE1hdGgubWF4KDAsIG4gKyAxKSk7XG5cdFx0fVxuXHRcdHNldFV0Zih2YWx1ZSkge1xuXHRcdFx0aWYgKCF2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gJyc7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGFuY2ggPSB2YWx1ZS5pbmRleE9mKCcjJyk7XG5cdFx0XHRpZiAoYW5jaCA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlLnNwbGl0KCdfJykuam9pbignICcpO1xuXHRcdFx0XHR0aGlzLmFuY2hvciA9ICcnO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnZhbHVlID0gdmFsdWUuc2xpY2UoMCwgTWF0aC5tYXgoMCwgYW5jaCkpLnNwbGl0KCdfJykuam9pbignICcpO1xuXHRcdFx0dGhpcy5hbmNob3IgPSB2YWx1ZS5zbGljZShNYXRoLm1heCgwLCBhbmNoICsgMSkpO1xuXHRcdFx0dGhpcy5ucyA9IG51bGw7IC8vIHdhaXQgdW50aWwgbmFtZXNwYWNlKCkgaXMgY2FsbGVkXG5cdFx0fVxuXHRcdHNldFVybCh1cmxmcmFnKSB7XG5cdFx0XHRjb25zdCBhbmNoID0gdXJsZnJhZy5pbmRleE9mKCcjJyk7XG5cdFx0XHR0aGlzLnZhbHVlID0gc2FmZURlY29kZVVSSSh1cmxmcmFnLnNsaWNlKDAsIE1hdGgubWF4KDAsIGFuY2gpKSk7XG5cdFx0XHR0aGlzLmFuY2hvciA9IHRoaXMudmFsdWUuc2xpY2UoTWF0aC5tYXgoMCwgYW5jaCArIDEpKTtcblx0XHR9XG5cdFx0YXBwZW5kKHgpIHtcblx0XHRcdHRoaXMuc2V0VXRmKHRoaXMudmFsdWUgKyB4KTtcblx0XHR9XG5cdFx0dXJsU3RyaW5nKHgpIHtcblx0XHRcdHggfHw9IHt9O1xuXHRcdFx0bGV0IHYgPSB0aGlzLnRvU3RyaW5nKHRydWUpO1xuXHRcdFx0aWYgKCF4Lm9taXRBbmNob3IgJiYgdGhpcy5hbmNob3IpIHtcblx0XHRcdFx0diArPSBgIyR7dGhpcy51cmxBbmNob3IoKX1gO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCF4LmtlZXBTcGFjZXMpIHtcblx0XHRcdFx0diA9IHYuc3BsaXQoJyAnKS5qb2luKCdfJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZW5jb2RlVVJJKHYpLnNwbGl0KCcmJykuam9pbignJTI2Jykuc3BsaXQoJz8nKS5qb2luKCclM0YnKS5zcGxpdCgnKycpLmpvaW4oJyUyQicpO1xuXHRcdH1cblx0XHRyZW1vdmVBbmNob3IoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFRpdGxlKHRoaXMudG9TdHJpbmcodHJ1ZSkpO1xuXHRcdH1cblx0XHR0b1VybCgpIHtcblx0XHRcdHJldHVybiBwZy53aWtpLnRpdGxlYmFzZSArIHRoaXMudXJsU3RyaW5nKCk7XG5cdFx0fVxuXHR9XG5cdFRpdGxlLmZyb21VUkwgPSAoaCkgPT4ge1xuXHRcdHJldHVybiBuZXcgVGl0bGUoKS5mcm9tVVJMKGgpO1xuXHR9O1xuXHRUaXRsZS5mcm9tQW5jaG9yID0gKGEpID0+IHtcblx0XHRyZXR1cm4gbmV3IFRpdGxlKCkuZnJvbUFuY2hvcihhKTtcblx0fTtcblx0VGl0bGUuZnJvbVdpa2lUZXh0ID0gKHR4dCkgPT4ge1xuXHRcdHJldHVybiBuZXcgVGl0bGUoKS5mcm9tV2lraVRleHQodHh0KTtcblx0fTtcblx0Y29uc3QgcGFyc2VQYXJhbXMgPSAodXJsKSA9PiB7XG5cdFx0Y29uc3Qgc3BlY2lhbERpZmYgPSBwZy5yZS5zcGVjaWFsZGlmZi5leGVjKHVybCk7XG5cdFx0aWYgKHNwZWNpYWxEaWZmKSB7XG5cdFx0XHRjb25zdCBzcGxpdCA9IHNwZWNpYWxEaWZmWzFdLnNwbGl0KCcvJyk7XG5cdFx0XHRpZiAoc3BsaXQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0b2xkaWQ6IHNwbGl0WzBdLFxuXHRcdFx0XHRcdGRpZmY6ICdwcmV2Jyxcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSBpZiAoc3BsaXQubGVuZ3RoID09PSAyKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0b2xkaWQ6IHNwbGl0WzBdLFxuXHRcdFx0XHRcdGRpZmY6IHNwbGl0WzFdLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCByZXQgPSB7fTtcblx0XHRpZiAoIXVybC5pbmNsdWRlcygnPycpKSB7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblx0XHRbdXJsXSA9IHVybC5zcGxpdCgnIycpO1xuXHRcdGNvbnN0IHMgPSB1cmwuc3BsaXQoJz8nKS5zbGljZSgxKS5qb2luKCcsJyk7XG5cdFx0Y29uc3QgdCA9IHMuc3BsaXQoJyYnKTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdCkge1xuXHRcdFx0Y29uc3QgeiA9IGVsZW1lbnQuc3BsaXQoJz0nKTtcblx0XHRcdHoucHVzaChudWxsKTtcblx0XHRcdFssIHJldFt6WzBdXV0gPSB6O1xuXHRcdH1cblx0XHQvLyBEaWZmIHJldmlzaW9uIHdpdGggbm8gb2xkaWQgaXMgaW50ZXJwcmV0ZWQgYXMgYSBkaWZmIHRvIHRoZSBwcmV2aW91cyByZXZpc2lvbiBieSBNZWRpYVdpa2lcblx0XHRpZiAocmV0LmRpZmYgJiYgcmV0Lm9sZGlkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldC5vbGRpZCA9ICdwcmV2Jztcblx0XHR9XG5cdFx0Ly8gRG9jdW1lbnRhdGlvbiBzZWVtcyB0byBzYXkgc29tZXRoaW5nIGRpZmZlcmVudCwgYnV0IG9sZGlkIGNhbiBhbHNvIGFjY2VwdCBwcmV2L25leHQsIGFuZFxuXHRcdC8vIEVjaG8gaXMgZW1pdHRpbmcgc3VjaCBVUkxzLiBTaW1wbGUgZml4dXAgZHVyaW5nIHBhcmFtZXRlciBkZWNvZGluZzpcblx0XHRpZiAocmV0Lm9sZGlkICYmIChyZXQub2xkaWQgPT09ICdwcmV2JyB8fCByZXQub2xkaWQgPT09ICduZXh0JyB8fCByZXQub2xkaWQgPT09ICdjdXInKSkge1xuXHRcdFx0Y29uc3QgaGVscGVyID0gcmV0LmRpZmY7XG5cdFx0XHRyZXQuZGlmZiA9IHJldC5vbGRpZDtcblx0XHRcdHJldC5vbGRpZCA9IGhlbHBlcjtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Ly8gKGEpIG15RGVjb2RlVVJJIChmaXJzdCBzdGFuZGFyZCBkZWNvZGVVUkksIHRoZW4gcGcucmUudXJsTm9Qb3B1cClcblx0Ly8gKGIpIGNoYW5nZSBzcGFjZXMgdG8gdW5kZXJzY29yZXNcblx0Ly8gKGMpIGVuY29kZVVSSSAoanVzdCB0aGUgc3RyYWlnaHQgb25lLCBubyBwZy5yZS51cmxOb1BvcHVwKVxuXHRjb25zdCBteURlY29kZVVSSSA9IChzdHIpID0+IHtcblx0XHRsZXQgcmV0O1xuXHRcdC8vIEZJWE1FIGRlY29kZVVSSUNvbXBvbmVudD8/XG5cdFx0dHJ5IHtcblx0XHRcdHJldCA9IGRlY29kZVVSSShzdHIudG9TdHJpbmcoKSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gc3RyO1xuXHRcdH1cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBnLm1pc2MuZGVjb2RlRXh0cmFzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRjb25zdCB7ZnJvbX0gPSBwZy5taXNjLmRlY29kZUV4dHJhc1tpXTtcblx0XHRcdGNvbnN0IHt0b30gPSBwZy5taXNjLmRlY29kZUV4dHJhc1tpXTtcblx0XHRcdHJldCA9IHJldC5zcGxpdChmcm9tKS5qb2luKHRvKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3Qgc2FmZURlY29kZVVSSSA9IChzdHIpID0+IHtcblx0XHRjb25zdCByZXQgPSBteURlY29kZVVSSShzdHIpO1xuXHRcdHJldHVybiByZXQgfHwgc3RyO1xuXHR9O1xuXHQvLyBURVNUUyAvL1xuXHRjb25zdCBpc0Rpc2FtYmlnID0gKGRhdGEsIGFydGljbGUpID0+IHtcblx0XHRpZiAoIWdldFZhbHVlT2YoJ3BvcHVwQWxsRGFic1N0dWJzJykgJiYgYXJ0aWNsZS5uYW1lc3BhY2UoKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gIWFydGljbGUuaXNUYWxrUGFnZSgpICYmIHBnLnJlLmRpc2FtYmlnLnRlc3QoZGF0YSk7XG5cdH07XG5cdGNvbnN0IHN0dWJDb3VudCA9IChkYXRhLCBhcnRpY2xlKSA9PiB7XG5cdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cEFsbERhYnNTdHVicycpICYmIGFydGljbGUubmFtZXNwYWNlKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0bGV0IHNlY3RTdHViID0gMDtcblx0XHRsZXQgcmVhbFN0dWIgPSAwO1xuXHRcdGlmIChwZy5yZS5zdHViLnRlc3QoZGF0YSkpIHtcblx0XHRcdGNvbnN0IHMgPSBkYXRhLnNwbGl0KHBnLnJlLnN0dWIpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRcdGlmIChzW2ldKSB7XG5cdFx0XHRcdFx0KytzZWN0U3R1Yjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQrK3JlYWxTdHViO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRyZWFsOiByZWFsU3R1Yixcblx0XHRcdHNlY3Q6IHNlY3RTdHViLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IGlzVmFsaWRJbWFnZU5hbWUgPSAoc3RyKSA9PiB7XG5cdFx0cmV0dXJuICFzdHIuaW5jbHVkZXMoJ3snKTtcblx0fTtcblx0Y29uc3QgaXNJblN0cmlwcGFibGVOYW1lc3BhY2UgPSAoYXJ0aWNsZSkgPT4ge1xuXHRcdHJldHVybiBhcnRpY2xlLm5hbWVzcGFjZUlkKCkgIT09IDA7XG5cdH07XG5cdGNvbnN0IGlzSW5NYWluTmFtZXNwYWNlID0gKGFydGljbGUpID0+IHtcblx0XHRyZXR1cm4gYXJ0aWNsZS5uYW1lc3BhY2VJZCgpID09PSAwO1xuXHR9O1xuXHRjb25zdCBhbmNob3JDb250YWluc0ltYWdlID0gKGEpID0+IHtcblx0XHQvLyBpdGVyYXRlIG92ZXIgY2hpbGRyZW4gb2YgYW5jaG9yIGFcblx0XHQvLyBzZWUgaWYgYW55IGFyZSBpbWFnZXNcblx0XHRpZiAoYSA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBraWRzID0gYS5jaGlsZE5vZGVzO1xuXHRcdGZvciAoY29uc3Qga2lkIG9mIGtpZHMpIHtcblx0XHRcdGlmIChraWQubm9kZU5hbWUgPT09ICdJTUcnKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGNvbnN0IGlzUG9wdXBMaW5rID0gKGEpID0+IHtcblx0XHQvLyBOQiBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucywgVE9DIGxpbmtzIGdlbmVyYWxseSByZXR1cm4gdHJ1ZVxuXHRcdC8vIHRoZXkgc2hvdWxkIGJlIHN0cmlwcGVkIG91dCBsYXRlclxuXHRcdGlmICghbWFya05vcG9wdXBTcGFuTGlua3MuZG9uZSkge1xuXHRcdFx0bWFya05vcG9wdXBTcGFuTGlua3MoKTtcblx0XHR9XG5cdFx0aWYgKGEuaW5Ob3BvcHVwU3Bhbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvLyBGSVhNRSBpcyB0aGlzIGZhc3RlciBpbmxpbmU/XG5cdFx0aWYgKGEub25tb3VzZWRvd24gfHwgYS5nZXRBdHRyaWJ1dGUoJ25vcG9wdXAnKSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBoID0gYS5ocmVmO1xuXHRcdGlmIChoID09PSBgJHtkb2N1bWVudC5sb2NhdGlvbi5ocmVmfSNgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghcGcucmUuYmFzZW5hbWVzLnRlc3QoaCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCFwZy5yZS51cmxOb1BvcHVwLnRlc3QoaCkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0KHBnLnJlLmVtYWlsLnRlc3QoaCkgfHwgcGcucmUuY29udHJpYnMudGVzdChoKSB8fCBwZy5yZS5iYWNrbGlua3MudGVzdChoKSB8fCBwZy5yZS5zcGVjaWFsZGlmZi50ZXN0KGgpKSAmJlxuXHRcdFx0IWguaW5jbHVkZXMoJyZsaW1pdD0nKVxuXHRcdCk7XG5cdH07XG5cdGNvbnN0IG1hcmtOb3BvcHVwU3BhbkxpbmtzID0gZnVuY3Rpb24gbWFya05vcG9wdXBTcGFuTGlua3MoKSB7XG5cdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cE9ubHlBcnRpY2xlTGlua3MnKSkge1xuXHRcdFx0Zml4VmVjdG9yTWVudVBvcHVwcygpO1xuXHRcdH1cblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRjb25zdCBzID0gJGJvZHkuZmluZCgnLm5vcG9wdXBzJykudG9BcnJheSgpO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBzKSB7XG5cdFx0XHRjb25zdCBhcyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuXHRcdFx0Zm9yIChjb25zdCBhIG9mIGFzKSB7XG5cdFx0XHRcdGEuaW5Ob3BvcHVwU3BhbiA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG1hcmtOb3BvcHVwU3BhbkxpbmtzLmRvbmUgPSB0cnVlO1xuXHR9O1xuXHRjb25zdCBmaXhWZWN0b3JNZW51UG9wdXBzID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5LmZpbmQoJ25hdi52ZWN0b3ItbWVudSBoMzpmaXJzdCBhOmZpcnN0JykucHJvcCgnaW5Ob3BvcHVwU3BhbicsIHRydWUpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiB0aXRsZXMuanNcblx0Ly8gU1RBUlRGSUxFOiBnZXRwYWdlLmpzXG5cdC8vIFdpa2ktc3BlY2lmaWMgZG93bmxvYWRpbmdcblx0Ly9cblx0Ly8gU2NoZW1hdGljIGZvciBhIGdldFdpa2kgY2FsbFxuXHQvL1xuXHQvLyAgICAgICAgICAgICBnZXRQYWdlV2l0aENhY2hpbmdcblx0Ly9cdFx0XHRcdFx0fFxuXHQvL1x0ICAgZmFsc2VcdFx0fFx0XHQgIHRydWVcblx0Ly8gZ2V0UGFnZTwtW2ZpbmRQaWN0dXJlSW5DYWNoZV0tPi1vbkNvbXBsZXRlKGEgZmFrZSBkb3dubG9hZClcblx0Ly8gICBcXC5cblx0Ly9cdCAoYXN5bmMpLT5hZGRQYWdlVG9DYWNoZShkb3dubG9hZCktPi1vbkNvbXBsZXRlKGRvd25sb2FkKVxuXHQvLyBjaGVjayBjYWNoZSB0byBzZWUgaWYgcGFnZSBleGlzdHNcblx0Y29uc3QgZ2V0UGFnZVdpdGhDYWNoaW5nID0gKHVybCwgb25Db21wbGV0ZSwgb3duZXIpID0+IHtcblx0XHRsb2coYGdldFBhZ2VXaXRoQ2FjaGluZywgdXJsPSR7dXJsfWApO1xuXHRcdGNvbnN0IGkgPSBmaW5kSW5QYWdlQ2FjaGUodXJsKTtcblx0XHRsZXQgZDtcblx0XHRpZiAoaSA+IC0xKSB7XG5cdFx0XHRkID0gZmFrZURvd25sb2FkKFxuXHRcdFx0XHR1cmwsXG5cdFx0XHRcdG93bmVyLmlkTnVtYmVyLFxuXHRcdFx0XHRvbkNvbXBsZXRlLFxuXHRcdFx0XHRwZy5jYWNoZS5wYWdlc1tpXS5kYXRhLFxuXHRcdFx0XHRwZy5jYWNoZS5wYWdlc1tpXS5sYXN0TW9kaWZpZWQsXG5cdFx0XHRcdG93bmVyXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkID0gZ2V0UGFnZSh1cmwsIG9uQ29tcGxldGUsIG93bmVyKTtcblx0XHRcdGlmIChkICYmIG93bmVyICYmIG93bmVyLmFkZERvd25sb2FkKSB7XG5cdFx0XHRcdG93bmVyLmFkZERvd25sb2FkKGQpO1xuXHRcdFx0XHRkLm93bmVyID0gb3duZXI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBnZXRQYWdlID0gKHVybCwgb25Db21wbGV0ZSwgb3duZXIpID0+IHtcblx0XHRsb2coJ2dldFBhZ2UnKTtcblx0XHRjb25zdCBjYWxsYmFjayA9IChkKSA9PiB7XG5cdFx0XHRpZiAoIWQuYWJvcnRlZCkge1xuXHRcdFx0XHRhZGRQYWdlVG9DYWNoZShkKTtcblx0XHRcdFx0b25Db21wbGV0ZShkKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiBzdGFydERvd25sb2FkKHVybCwgb3duZXIuaWROdW1iZXIsIGNhbGxiYWNrKTtcblx0fTtcblx0Y29uc3QgZmluZEluUGFnZUNhY2hlID0gKHVybCkgPT4ge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGcuY2FjaGUucGFnZXMubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmICh1cmwgPT09IHBnLmNhY2hlLnBhZ2VzW2ldLnVybCkge1xuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9O1xuXHRjb25zdCBhZGRQYWdlVG9DYWNoZSA9IChkb3dubG9hZCkgPT4ge1xuXHRcdGxvZyhgYWRkUGFnZVRvQ2FjaGUgJHtkb3dubG9hZC51cmx9YCk7XG5cdFx0Y29uc3QgcGFnZSA9IHtcblx0XHRcdHVybDogZG93bmxvYWQudXJsLFxuXHRcdFx0ZGF0YTogZG93bmxvYWQuZGF0YSxcblx0XHRcdGxhc3RNb2RpZmllZDogZG93bmxvYWQubGFzdE1vZGlmaWVkLFxuXHRcdH07XG5cdFx0cmV0dXJuIHBnLmNhY2hlLnBhZ2VzLnB1c2gocGFnZSk7XG5cdH07XG5cdC8vIEVOREZJTEU6IGdldHBhZ2UuanNcblx0Ly8gU1RBUlRGSUxFOiB0b29scy5qc1xuXHQvLyBJRSBtYWRuZXNzIHdpdGggZW5jb2Rpbmdcblx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09XG5cdC8vXG5cdC8vIHN1cHBvc2UgdGhyb3VnaG91dCB0aGF0IHRoZSBwYWdlIGlzIGluIHV0ZjgsIGxpa2Ugd2lraXBlZGlhXG5cdC8vXG5cdC8vIGlmIGEgaXMgYW4gYW5jaG9yIERPTSBlbGVtZW50IGFuZCBhLmhyZWYgc2hvdWxkIGNvbnNpc3Qgb2Zcblx0Ly9cblx0Ly8gaHR0cDovL2hvc3QubmFtZS5oZXJlL3dpa2kvZm9vP2Jhcj1iYXpcblx0Ly9cblx0Ly8gdGhlbiBJRSBnaXZlcyBmb28gYXMgXCJsYXRpbjEtZW5jb2RlZFwiIHV0Zjg7IHdlIGhhdmUgZm9vID0gZGVjb2RlX3V0ZjgoZGVjb2RlVVJJKGZvb19pZSkpXG5cdC8vIGJ1dCBJRSBnaXZlcyBiYXI9YmF6IGNvcnJlY3RseSBhcyBwbGFpbiB1dGY4XG5cdC8vXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvL1xuXHQvLyBJRSdzIHhtbGh0dHAgZG9lc24ndCB1bmRlcnN0YW5kIHV0ZjggdXJscy4gSGF2ZSB0byB1c2UgZW5jb2RlVVJJIGhlcmUuXG5cdC8vXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvL1xuXHQvLyBzdW1tYXQgZWxzZVxuXHQvLyBTb3VyY2U6IGh0dHA6Ly9ha3R1ZWxsLmRlLnNlbGZodG1sLm9yZy9hcnRpa2VsL2phdmFzY3JpcHQvdXRmOGI2NC91dGY4Lmh0bVxuXHRjb25zdCBnZXRKc09iaiA9IChqc29uKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGpzb25fcmV0ID0gSlNPTi5wYXJzZShqc29uKTtcblx0XHRcdGlmIChqc29uX3JldC53YXJuaW5ncykge1xuXHRcdFx0XHRmb3IgKGxldCB3ID0gMDsgdyA8IGpzb25fcmV0Lndhcm5pbmdzLmxlbmd0aDsgdysrKSB7XG5cdFx0XHRcdFx0aWYgKGpzb25fcmV0Lndhcm5pbmdzW3ddWycqJ10pIHtcblx0XHRcdFx0XHRcdGxvZyhqc29uX3JldC53YXJuaW5nc1t3XVsnKiddKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bG9nKGpzb25fcmV0Lndhcm5pbmdzW3ddLndhcm5pbmdzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoanNvbl9yZXQuZXJyb3IpIHtcblx0XHRcdFx0ZXJybG9nKGAke2pzb25fcmV0LmVycm9yLmNvZGV9OiAke2pzb25fcmV0LmVycm9yLmluZm99YCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ganNvbl9yZXQ7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRlcnJsb2coYFNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggZ2V0SnNPYmosIGpzb249JHtqc29ufWApO1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBhbnlDaGlsZCA9IChvYmopID0+IHtcblx0XHRmb3IgKGNvbnN0IHAgaW4gb2JqKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ob2JqLCBwKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvYmpbcF07XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCB1cGNhc2VGaXJzdCA9IChzdHIpID0+IHtcblx0XHRpZiAodHlwZW9mIHN0ciAhPT0gdHlwZW9mICcnIHx8IHN0ciA9PT0gJycpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0fTtcblx0Y29uc3QgZmluZEluQXJyYXkgPSAoYXJyLCBmb28pID0+IHtcblx0XHRpZiAoIWFyciB8fCBhcnIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gLTE7XG5cdFx0fVxuXHRcdGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuXHRcdFx0aWYgKGFycltpXSA9PT0gZm9vKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gLTE7XG5cdH07XG5cdGNvbnN0IG5leHRPbmUgPSAoYXJyYXksIHZhbHVlKSA9PiB7XG5cdFx0Ly8gTkIgaWYgdGhlIGFycmF5IGhhcyB0d28gY29uc2VjdXRpdmUgZW50cmllcyBlcXVhbFxuXHRcdC8vXHR0aGVuIHRoaXMgd2lsbCBsb29wIG9uIHN1Y2Nlc3NpdmUgY2FsbHNcblx0XHRjb25zdCBpID0gZmluZEluQXJyYXkoYXJyYXksIHZhbHVlKTtcblx0XHRpZiAoaSA8IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gYXJyYXlbaSArIDFdO1xuXHR9O1xuXHRjb25zdCBsaXRlcmFsaXplUmVnZXggPSAoc3RyKSA9PiB7XG5cdFx0cmV0dXJuIG13LnV0aWwuZXNjYXBlUmVnRXhwKHN0cik7XG5cdH07XG5cdFN0cmluZy5wcm90b3R5cGUuZW50aWZ5ID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIGxldCBzaHkgPSAnJnNoeTsnO1xuXHRcdHJldHVybiB0aGlzLnNwbGl0KCcmJylcblx0XHRcdC5qb2luKCcmYW1wOycpXG5cdFx0XHQuc3BsaXQoJzwnKVxuXHRcdFx0LmpvaW4oJyZsdDsnKVxuXHRcdFx0LnNwbGl0KCc+Jylcblx0XHRcdC5qb2luKCcmZ3Q7JyAvKiArc2h5ICovKVxuXHRcdFx0LnNwbGl0KCdcIicpXG5cdFx0XHQuam9pbignJnF1b3Q7Jyk7XG5cdH07XG5cdC8vIEFycmF5IGZpbHRlciBmdW5jdGlvblxuXHRjb25zdCByZW1vdmVOdWxscyA9ICh2YWwpID0+IHtcblx0XHRyZXR1cm4gdmFsICE9PSBudWxsO1xuXHR9O1xuXHRjb25zdCBqb2luUGF0aCA9IChsaXN0KSA9PiB7XG5cdFx0cmV0dXJuIGxpc3QuZmlsdGVyKHJlbW92ZU51bGxzKS5qb2luKCcvJyk7XG5cdH07XG5cdGNvbnN0IHNpbXBsZVByaW50ZiA9IChzdHIsIHN1YnMpID0+IHtcblx0XHRpZiAoIXN0ciB8fCAhc3Vicykge1xuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9XG5cdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0Y29uc3QgcyA9IHN0ci5zcGxpdCgvKCVzfFxcJFxcZCspLyk7XG5cdFx0bGV0IGkgPSAwO1xuXHRcdGRvIHtcblx0XHRcdHJldC5wdXNoKHMuc2hpZnQoKSk7XG5cdFx0XHRpZiAocy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjbWQgPSBzLnNoaWZ0KCk7XG5cdFx0XHRpZiAoY21kID09PSAnJXMnKSB7XG5cdFx0XHRcdGlmIChpIDwgc3Vicy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXQucHVzaChzdWJzW2ldKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXQucHVzaChjbWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCsraTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IGogPSBOdW1iZXIucGFyc2VJbnQoY21kLnJlcGxhY2UoJyQnLCAnJyksIDEwKSAtIDE7XG5cdFx0XHRcdGlmIChqID4gLTEgJiYgaiA8IHN1YnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goc3Vic1tqXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goY21kKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gd2hpbGUgKHMubGVuZ3RoID4gMCk7XG5cdFx0cmV0dXJuIHJldC5qb2luKCcnKTtcblx0fTtcblx0Y29uc3QgaXNTdHJpbmcgPSAoeCkgPT4ge1xuXHRcdHJldHVybiB0eXBlb2YgeCA9PT0gJ3N0cmluZycgfHwgeCBpbnN0YW5jZW9mIFN0cmluZztcblx0fTtcblx0Y29uc3QgaXNOdW1iZXIgPSAoeCkgPT4ge1xuXHRcdHJldHVybiB0eXBlb2YgeCA9PT0gJ251bWJlcicgfHwgeCBpbnN0YW5jZW9mIE51bWJlcjtcblx0fTtcblx0Y29uc3QgaXNSZWdFeHAgPSAoeCkgPT4ge1xuXHRcdHJldHVybiB4IGluc3RhbmNlb2YgUmVnRXhwO1xuXHR9O1xuXHRjb25zdCBpc0FycmF5ID0gKHgpID0+IHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSh4KTtcblx0fTtcblx0Y29uc3QgaXNPYmplY3QgPSAoeCkgPT4ge1xuXHRcdHJldHVybiB4IGluc3RhbmNlb2YgT2JqZWN0O1xuXHR9O1xuXHRjb25zdCBpc0Z1bmN0aW9uID0gKHgpID0+IHtcblx0XHRyZXR1cm4gIWlzUmVnRXhwKHgpICYmICh0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyB8fCB4IGluc3RhbmNlb2YgRnVuY3Rpb24pO1xuXHR9O1xuXHRjb25zdCByZXBlYXRTdHJpbmcgPSAocywgbXVsdCkgPT4ge1xuXHRcdGxldCByZXQgPSAnJztcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG11bHQ7ICsraSkge1xuXHRcdFx0cmV0ICs9IHM7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IHplcm9GaWxsID0gKHMsIG1pbikgPT4ge1xuXHRcdG1pbiB8fD0gMjtcblx0XHRjb25zdCB0ID0gcy50b1N0cmluZygpO1xuXHRcdHJldHVybiByZXBlYXRTdHJpbmcoJzAnLCBtaW4gLSB0Lmxlbmd0aCkgKyB0O1xuXHR9O1xuXHRjb25zdCBtYXAgPSAoZiwgbykgPT4ge1xuXHRcdGlmIChpc0FycmF5KG8pKSB7XG5cdFx0XHRyZXR1cm4gbWFwX2FycmF5KGYsIG8pO1xuXHRcdH1cblx0XHRyZXR1cm4gbWFwX29iamVjdChmLCBvKTtcblx0fTtcblx0Y29uc3QgbWFwX2FycmF5ID0gKGYsIG8pID0+IHtcblx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygbykge1xuXHRcdFx0cmV0LnB1c2goZihlbGVtZW50KSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IG1hcF9vYmplY3QgPSAoZiwgbykgPT4ge1xuXHRcdGNvbnN0IHJldCA9IHt9O1xuXHRcdGZvciAoY29uc3QgaSBpbiBvKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24obywgaSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRyZXRbb10gPSBmKG9baV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRwZy5lc2NhcGVRdW90ZXNIVE1MID0gKHRleHQpID0+IHtcblx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuXHR9O1xuXHRwZy51bmVzY2FwZVF1b3Rlc0hUTUwgPSAoaHRtbCkgPT4ge1xuXHRcdC8vIEZyb20ge0BsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83Mzk0Nzg3fVxuXHRcdC8vIFRoaXMgc2VlbXMgdG8gYmUgaW1wbGVtZW50ZWQgY29ycmVjdGx5IG9uIGFsbCBtYWpvciBicm93c2VycyBub3csIHNvIHdlXG5cdFx0Ly8gZG9uJ3QgaGF2ZSB0byBtYWtlIG91ciBvd24gZnVuY3Rpb24uXG5cdFx0Y29uc3QgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblx0XHR0eHQuaW5uZXJIVE1MID0gaHRtbDtcblx0XHRyZXR1cm4gdHh0LnZhbHVlO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiB0b29scy5qc1xuXHQvLyBTVEFSVEZJTEU6IGRhYi5qc1xuXHQvLyBEYWItZml4aW5nIGNvZGVcblx0Ly9cblx0Y29uc3QgcmV0YXJnZXREYWIgPSAobmV3VGFyZ2V0LCBvbGRUYXJnZXQsIGZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lLCB0aXRsZVRvRWRpdCkgPT4ge1xuXHRcdGxvZyhgcmV0YXJnZXREYWI6IG5ld1RhcmdldD0ke25ld1RhcmdldH0gb2xkVGFyZ2V0PSR7b2xkVGFyZ2V0fWApO1xuXHRcdHJldHVybiBjaGFuZ2VMaW5rVGFyZ2V0TGluayh7XG5cdFx0XHRuZXdUYXJnZXQsXG5cdFx0XHR0ZXh0OiBuZXdUYXJnZXQuc3BsaXQoJyAnKS5qb2luKCcmbmJzcDsnKSxcblx0XHRcdGhpbnQ6IHRwcmludGYoJ2Rpc2FtYmlnSGludCcsIFtuZXdUYXJnZXRdKSxcblx0XHRcdHN1bW1hcnk6IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cEZpeERhYnNTdW1tYXJ5JyksIFtmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZSwgbmV3VGFyZ2V0XSksXG5cdFx0XHRjbGlja0J1dHRvbjogZ2V0VmFsdWVPZigncG9wdXBEYWJzQXV0b0NsaWNrJyksXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHRcdG9sZFRhcmdldCxcblx0XHRcdHdhdGNoOiBnZXRWYWx1ZU9mKCdwb3B1cFdhdGNoRGlzYW1iaWdnZWRQYWdlcycpLFxuXHRcdFx0dGl0bGU6IHRpdGxlVG9FZGl0LFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBsaXN0TGlua3MgPSAod2lraXRleHQsIG9sZFRhcmdldCwgdGl0bGVUb0VkaXQpID0+IHtcblx0XHQvLyBtZWRpYXdpa2kgc3RyaXBzIHRyYWlsaW5nIHNwYWNlcywgc28gd2UgZG8gdGhlIHNhbWVcblx0XHQvLyB0ZXN0Y2FzZToge0BsaW5rIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93L2luZGV4LnBocD90aXRsZT1SYWRpYWwmb2xkaWQ9OTczNjU2MzN9XG5cdFx0Y29uc3QgcmVnID0gL1xcW1xcWyhbXnxdKj8pICooXFx8fF1dKS9naTtcblx0XHRsZXQgcmV0ID0gW107XG5cdFx0Y29uc3Qgc3BsaXR0ZWQgPSB3aWtpdGV4dC5zcGxpdChyZWcpO1xuXHRcdC8vIF5bYS16XSsgc2hvdWxkIG1hdGNoIGludGVyd2lraSBsaW5rcywgaG9wZWZ1bGx5IChjYXNlLWluc2Vuc2l0aXZlKVxuXHRcdC8vIGFuZCBeW2Etel0qIHNob3VsZCBtYXRjaCB0aG9zZSBhbmQgW1s6Q2F0ZWdvcnkuLi5dXSBzdHlsZSBsaW5rcyB0b29cblx0XHRjb25zdCBvbWl0UmVnZXggPSAvXlthLXpdKjp8XltTc11wZWNpYWw6fF5bSWldbWFnZXxeW0NjXWF0ZWdvcnkvO1xuXHRcdGNvbnN0IGZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lID0gb2xkVGFyZ2V0LnRvU3RyaW5nKCk7XG5cdFx0Y29uc3Qgd2lrUG9zID0gZ2V0VmFsdWVPZigncG9wdXBEYWJXaWt0aW9uYXJ5Jyk7XG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBzcGxpdHRlZC5sZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0aWYgKHR5cGVvZiBzcGxpdHRlZFtpXSA9PT0gdHlwZW9mICdzdHJpbmcnICYmIHNwbGl0dGVkW2ldLmxlbmd0aCA+IDAgJiYgIW9taXRSZWdleC50ZXN0KHNwbGl0dGVkW2ldKSkge1xuXHRcdFx0XHRyZXQucHVzaChyZXRhcmdldERhYihzcGxpdHRlZFtpXSwgb2xkVGFyZ2V0LCBmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZSwgdGl0bGVUb0VkaXQpKTtcblx0XHRcdH0gLyogaWYgKi9cblx0XHR9IC8qIGZvciBsb29wICovXG5cdFx0cmV0ID0gcm1EdXBlc0Zyb21Tb3J0ZWRMaXN0KHJldC5zb3J0KCkpO1xuXHRcdGlmICh3aWtQb3MpIHtcblx0XHRcdGNvbnN0IHdpa1RhcmdldCA9IGB3aWt0aW9uYXJ5OiR7ZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWUucmVwbGFjZSgvXiguKylcXHMrXFwoW14pXStcXClcXHMqJC8sICckMScpfWA7XG5cdFx0XHRjb25zdCBtZXRoID0gd2lrUG9zLnRvTG93ZXJDYXNlKCkgPT09ICdmaXJzdCcgPyAndW5zaGlmdCcgOiAncHVzaCc7XG5cdFx0XHRyZXRbbWV0aF0ocmV0YXJnZXREYWIod2lrVGFyZ2V0LCBvbGRUYXJnZXQsIGZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lLCB0aXRsZVRvRWRpdCkpO1xuXHRcdH1cblx0XHRyZXQucHVzaChcblx0XHRcdGNoYW5nZUxpbmtUYXJnZXRMaW5rKHtcblx0XHRcdFx0bmV3VGFyZ2V0OiBudWxsLFxuXHRcdFx0XHR0ZXh0OiBwb3B1cFN0cmluZygncmVtb3ZlIHRoaXMgbGluaycpLnNwbGl0KCcgJykuam9pbignJm5ic3A7JyksXG5cdFx0XHRcdGhpbnQ6IHBvcHVwU3RyaW5nKCdyZW1vdmUgYWxsIGxpbmtzIHRvIHRoaXMgZGlzYW1iaWcgcGFnZSBmcm9tIHRoaXMgYXJ0aWNsZScpLFxuXHRcdFx0XHRjbGlja0J1dHRvbjogZ2V0VmFsdWVPZigncG9wdXBEYWJzQXV0b0NsaWNrJyksXG5cdFx0XHRcdG9sZFRhcmdldCxcblx0XHRcdFx0c3VtbWFyeTogc2ltcGxlUHJpbnRmKGdldFZhbHVlT2YoJ3BvcHVwUm1EYWJMaW5rU3VtbWFyeScpLCBbZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWVdKSxcblx0XHRcdFx0d2F0Y2g6IGdldFZhbHVlT2YoJ3BvcHVwV2F0Y2hEaXNhbWJpZ2dlZFBhZ2VzJyksXG5cdFx0XHRcdHRpdGxlOiB0aXRsZVRvRWRpdCxcblx0XHRcdH0pXG5cdFx0KTtcblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBybUR1cGVzRnJvbVNvcnRlZExpc3QgPSAobGlzdCkgPT4ge1xuXHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBsaXN0KSB7XG5cdFx0XHRpZiAocmV0Lmxlbmd0aCA9PT0gMCB8fCBlbGVtZW50ICE9PSByZXQuYXQoLTEpKSB7XG5cdFx0XHRcdHJldC5wdXNoKGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBtYWtlRml4RGFiID0gKGRhdGEsIG5hdnBvcCkgPT4ge1xuXHRcdC8vIGdyYWIgdGl0bGUgZnJvbSBwYXJlbnQgcG9wdXAgaWYgdGhlcmUgaXMgb25lOyBkZWZhdWx0IGV4aXN0cyBpbiBjaGFuZ2VMaW5rVGFyZ2V0TGlua1xuXHRcdGNvbnN0IHRpdGxlVG9FZGl0ID0gbmF2cG9wLnBhcmVudFBvcHVwICYmIG5hdnBvcC5wYXJlbnRQb3B1cC5hcnRpY2xlLnRvU3RyaW5nKCk7XG5cdFx0Y29uc3QgbGlzdCA9IGxpc3RMaW5rcyhkYXRhLCBuYXZwb3Aub3JpZ2luYWxBcnRpY2xlLCB0aXRsZVRvRWRpdCk7XG5cdFx0aWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRsb2coJ2xpc3RMaW5rcyByZXR1cm5lZCBlbXB0eSBsaXN0Jyk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IGh0bWwgPSBgPGhyPiR7cG9wdXBTdHJpbmcoJ0NsaWNrIHRvIGRpc2FtYmlndWF0ZSB0aGlzIGxpbmsgdG86Jyl9PGJyPmA7XG5cdFx0aHRtbCArPSBsaXN0LmpvaW4oJywgJyk7XG5cdFx0cmV0dXJuIGh0bWw7XG5cdH07XG5cdGNvbnN0IG1ha2VGaXhEYWJzID0gKHdpa2lUZXh0LCBuYXZwb3ApID0+IHtcblx0XHRpZiAoXG5cdFx0XHRnZXRWYWx1ZU9mKCdwb3B1cEZpeERhYnMnKSAmJlxuXHRcdFx0aXNEaXNhbWJpZyh3aWtpVGV4dCwgbmF2cG9wLmFydGljbGUpICYmXG5cdFx0XHRUaXRsZS5mcm9tVVJMKGxvY2F0aW9uLmhyZWYpLm5hbWVzcGFjZUlkKCkgIT09IHBnLm5zU3BlY2lhbElkICYmXG5cdFx0XHRuYXZwb3AuYXJ0aWNsZS50YWxrUGFnZSgpXG5cdFx0KSB7XG5cdFx0XHRzZXRQb3B1cEhUTUwobWFrZUZpeERhYih3aWtpVGV4dCwgbmF2cG9wKSwgJ3BvcHVwRml4RGFiJywgbmF2cG9wLmlkTnVtYmVyKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHBvcHVwUmVkbGlua0hUTUwgPSAoYXJ0aWNsZSkgPT4ge1xuXHRcdHJldHVybiBjaGFuZ2VMaW5rVGFyZ2V0TGluayh7XG5cdFx0XHRuZXdUYXJnZXQ6IG51bGwsXG5cdFx0XHR0ZXh0OiBwb3B1cFN0cmluZygncmVtb3ZlIHRoaXMgbGluaycpLnNwbGl0KCcgJykuam9pbignJm5ic3A7JyksXG5cdFx0XHRoaW50OiBwb3B1cFN0cmluZygncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnKSxcblx0XHRcdGNsaWNrQnV0dG9uOiBnZXRWYWx1ZU9mKCdwb3B1cFJlZGxpbmtBdXRvQ2xpY2snKSxcblx0XHRcdG9sZFRhcmdldDogYXJ0aWNsZS50b1N0cmluZygpLFxuXHRcdFx0c3VtbWFyeTogc2ltcGxlUHJpbnRmKGdldFZhbHVlT2YoJ3BvcHVwUmVkbGlua1N1bW1hcnknKSwgW2FydGljbGUudG9TdHJpbmcoKV0pLFxuXHRcdH0pO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBkYWIuanNcblx0Ly8gU1RBUlRGSUxFOiBodG1sb3V0cHV0LmpzXG5cdC8vIHRoaXMgaGFzIHRvIHVzZSBhIHRpbWVyIGxvb3AgYXMgd2UgZG9uJ3Qga25vdyBpZiB0aGUgRE9NIGVsZW1lbnQgZXhpc3RzIHdoZW4gd2Ugd2FudCB0byBzZXQgdGhlIHRleHRcblx0Y29uc3Qgc2V0UG9wdXBIVE1MID0gZnVuY3Rpb24gc2V0UG9wdXBIVE1MKHN0ciwgZWxlbWVudElkLCBwb3B1cElkLCBvblN1Y2Nlc3MsIGFwcGVuZCkge1xuXHRcdGlmIChwb3B1cElkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vIGNvbnNvbGUuZXJyb3IoJ1tQb3B1cHNdIHBvcHVwSWQgaXMgbm90IGRlZmluZWQgaW4gc2V0UG9wdXBIVE1MLCBodG1sPScrc3RyLnN1YnN0cmluZygwLDEwMCkpO1xuXHRcdFx0cG9wdXBJZCA9IHBnLmlkTnVtYmVyO1xuXHRcdH1cblx0XHRjb25zdCBwb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtlbGVtZW50SWR9JHtwb3B1cElkfWApO1xuXHRcdGlmIChwb3B1cEVsZW1lbnQpIHtcblx0XHRcdGlmICghYXBwZW5kKSB7XG5cdFx0XHRcdHBvcHVwRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblx0XHRcdH1cblx0XHRcdGlmIChpc1N0cmluZyhzdHIpKSB7XG5cdFx0XHRcdHBvcHVwRWxlbWVudC5pbm5lckhUTUwgKz0gc3RyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cG9wdXBFbGVtZW50LmFwcGVuZChzdHIpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG9uU3VjY2Vzcykge1xuXHRcdFx0XHRvblN1Y2Nlc3MoKTtcblx0XHRcdH1cblx0XHRcdHNldFRpbWVvdXQoY2hlY2tQb3B1cFBvc2l0aW9uLCAxMDApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdC8vIGNhbGwgdGhpcyBmdW5jdGlvbiBhZ2FpbiBpbiBhIGxpdHRsZSB3aGlsZS4uLlxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0c2V0UG9wdXBIVE1MKHN0ciwgZWxlbWVudElkLCBwb3B1cElkLCBvblN1Y2Nlc3MpO1xuXHRcdH0sIDYwMCk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IHNldFBvcHVwVHJhaWxlciA9IChzdHIsIGlkKSA9PiB7XG5cdFx0cmV0dXJuIHNldFBvcHVwSFRNTChzdHIsICdwb3B1cERhdGEnLCBpZCk7XG5cdH07XG5cdC8vIGFyZ3MubmF2cG9wdXAgaXMgbWFuZGF0b3J5XG5cdC8vIG9wdGlvbmFsOiBhcmdzLnJlZGlyLCBhcmdzLnJlZGlyVGFyZ2V0XG5cdC8vIEZJWE1FOiB5ZSBnb2RzLCB0aGlzIGlzIHVnbHkgc3R1ZmZcblx0Y29uc3QgZmlsbEVtcHR5U3BhbnMgPSAoYXJncykgPT4ge1xuXHRcdC8vIGlmIHJlZGlyIGlzIHByZXNlbnQgYW5kIHRydWUgdGhlbiByZWRpclRhcmdldCBpcyBtYW5kYXRvcnlcblx0XHRsZXQgcmVkaXIgPSB0cnVlO1xuXHRcdGxldCByY2lkO1xuXHRcdGlmICh0eXBlb2YgYXJncyAhPT0gJ29iamVjdCcgfHwgYXJncy5yZWRpciA9PT0gdW5kZWZpbmVkIHx8ICFhcmdzLnJlZGlyKSB7XG5cdFx0XHRyZWRpciA9IGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBhID0gYXJncy5uYXZwb3B1cC5wYXJlbnRBbmNob3I7XG5cdFx0bGV0IGFydGljbGU7XG5cdFx0bGV0IGhpbnQ7XG5cdFx0bGV0IG9sZGlkO1xuXHRcdGxldCBwYXJhbXMgPSB7fTtcblx0XHRpZiAocmVkaXIgJiYgdHlwZW9mIGFyZ3MucmVkaXJUYXJnZXQgPT09IHR5cGVvZiB7fSkge1xuXHRcdFx0YXJ0aWNsZSA9IGFyZ3MucmVkaXJUYXJnZXQ7XG5cdFx0XHQvLyBoaW50PWFydGljbGUuaGludFZhbHVlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFydGljbGUgPSBuZXcgVGl0bGUoKS5mcm9tQW5jaG9yKGEpO1xuXHRcdFx0aGludCA9IGEub3JpZ2luYWxUaXRsZSB8fCBhcnRpY2xlLmhpbnRWYWx1ZSgpO1xuXHRcdFx0cGFyYW1zID0gcGFyc2VQYXJhbXMoYS5ocmVmKTtcblx0XHRcdG9sZGlkID0gZ2V0VmFsdWVPZigncG9wdXBIaXN0b3JpY2FsTGlua3MnKSA/IHBhcmFtcy5vbGRpZCA6IG51bGw7XG5cdFx0XHQoe3JjaWR9ID0gcGFyYW1zKTtcblx0XHR9XG5cdFx0Y29uc3QgeCA9IHtcblx0XHRcdGFydGljbGUsXG5cdFx0XHRoaW50LFxuXHRcdFx0b2xkaWQsXG5cdFx0XHRyY2lkLFxuXHRcdFx0bmF2cG9wOiBhcmdzLm5hdnBvcHVwLFxuXHRcdFx0cGFyYW1zLFxuXHRcdH07XG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gcGcuc3RydWN0dXJlc1tnZXRWYWx1ZU9mKCdwb3B1cFN0cnVjdHVyZScpXTtcblx0XHRpZiAodHlwZW9mIHN0cnVjdHVyZSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHNldFBvcHVwSFRNTChcblx0XHRcdFx0J3BvcHVwRXJyb3InLFxuXHRcdFx0XHRgVW5rbm93biBzdHJ1Y3R1cmUgKHRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbik6ICR7cGcub3B0aW9uLnBvcHVwU3RydWN0dXJlfWAsXG5cdFx0XHRcdGFyZ3MubmF2cG9wdXAuaWROdW1iZXJcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHNwYW5zID0gZmxhdHRlbihwZy5taXNjLmxheW91dCk7XG5cdFx0Y29uc3QgbnVtc3BhbnMgPSBzcGFucy5sZW5ndGg7XG5cdFx0Y29uc3QgcmVkaXJzID0gcGcubWlzYy5yZWRpclNwYW5zO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbnVtc3BhbnM7ICsraSkge1xuXHRcdFx0Y29uc3QgZm91bmQgPSByZWRpcnMgJiYgcmVkaXJzLmluY2x1ZGVzKHNwYW5zW2ldKTtcblx0XHRcdC8vIGxvZygncmVkaXI9JyArIHJlZGlyICsgJywgZm91bmQ9JyArIGZvdW5kICsgJywgc3BhbnNbaV09JyArIHNwYW5zW2ldKTtcblx0XHRcdGlmICgoZm91bmQgJiYgIXJlZGlyKSB8fCAoIWZvdW5kICYmIHJlZGlyKSkge1xuXHRcdFx0XHQvLyBsb2coJ3NraXBwaW5nIHRoaXMgc2V0IG9mIHRoZSBsb29wJyk7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgc3RydWN0dXJlZm4gPSBzdHJ1Y3R1cmVbc3BhbnNbaV1dO1xuXHRcdFx0aWYgKHN0cnVjdHVyZWZuID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gbm90aGluZyB0byBkbyBmb3IgdGhpcyBzdHJ1Y3R1cmUgcGFydFxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGxldCBzZXRmbiA9IHNldFBvcHVwSFRNTDtcblx0XHRcdGlmIChcblx0XHRcdFx0Z2V0VmFsdWVPZigncG9wdXBBY3RpdmVOYXZsaW5rcycpICYmXG5cdFx0XHRcdChzcGFuc1tpXS5pbmRleE9mKCdwb3B1cFRvcExpbmtzJykgPT09IDAgfHwgc3BhbnNbaV0uaW5kZXhPZigncG9wdXBSZWRpclRvcExpbmtzJykgPT09IDApXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0Zm4gPSBzZXRQb3B1cFRpcHNBbmRIVE1MO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoICh0eXBlb2Ygc3RydWN0dXJlZm4pIHtcblx0XHRcdFx0Y2FzZSAnZnVuY3Rpb24nOlxuXHRcdFx0XHRcdGxvZyhgcnVubmluZyAke3NwYW5zW2ldfSh7XG5cdFx0XHRcdFx0XHRhcnRpY2xlOiR7eC5hcnRpY2xlfSwgaGludDoke3guaGludH0sIG9sZGlkOiAke3gub2xkaWR9fSlgKTtcblx0XHRcdFx0XHRzZXRmbihzdHJ1Y3R1cmVmbih4KSwgc3BhbnNbaV0sIGFyZ3MubmF2cG9wdXAuaWROdW1iZXIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdFx0XHRcdHNldGZuKHN0cnVjdHVyZWZuLCBzcGFuc1tpXSwgYXJncy5uYXZwb3B1cC5pZE51bWJlcik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0ZXJybG9nKGB1bmtub3duIHRoaW5nIHdpdGggbGFiZWwgJHtzcGFuc1tpXX0gKHNwYW4gaW5kZXggd2FzICR7aX0pYCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHQvLyBmbGF0dGVuIGFuIGFycmF5XG5cdGNvbnN0IGZsYXR0ZW4gPSBmdW5jdGlvbiBmbGF0dGVuKGxpc3QsIHN0YXJ0KSB7XG5cdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0aWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHN0YXJ0ID0gMDtcblx0XHR9XG5cdFx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKHR5cGVvZiBsaXN0W2ldID09PSB0eXBlb2YgW10pIHtcblx0XHRcdFx0cmV0dXJuIFsuLi5yZXQsIC4uLmZsYXR0ZW4obGlzdFtpXSksIC4uLmZsYXR0ZW4obGlzdCwgaSArIDEpXTtcblx0XHRcdH1cblx0XHRcdHJldC5wdXNoKGxpc3RbaV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHQvLyBHZW5lcmF0ZSBodG1sIGZvciB3aG9sZSBwb3B1cFxuXHRjb25zdCBwb3B1cEhUTUwgPSBmdW5jdGlvbiBwb3B1cEhUTUwoYSkge1xuXHRcdGdldFZhbHVlT2YoJ3BvcHVwU3RydWN0dXJlJyk7XG5cdFx0Y29uc3Qgc3RydWN0dXJlID0gcGcuc3RydWN0dXJlc1twZy5vcHRpb24ucG9wdXBTdHJ1Y3R1cmVdO1xuXHRcdGlmICh0eXBlb2Ygc3RydWN0dXJlICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0Ly8gcmV0dXJuICdVbmtub3duIHN0cnVjdHVyZTogJytwZy5vcHRpb24ucG9wdXBTdHJ1Y3R1cmU7XG5cdFx0XHQvLyBvdmVycmlkZSB1c2VyIGNob2ljZVxuXHRcdFx0cGcub3B0aW9uLnBvcHVwU3RydWN0dXJlID0gcGcub3B0aW9uRGVmYXVsdC5wb3B1cFN0cnVjdHVyZTtcblx0XHRcdHJldHVybiBwb3B1cEhUTUwoYSk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygc3RydWN0dXJlLnBvcHVwTGF5b3V0ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRyZXR1cm4gJ0JhZCBsYXlvdXQnO1xuXHRcdH1cblx0XHRwZy5taXNjLmxheW91dCA9IHN0cnVjdHVyZS5wb3B1cExheW91dCgpO1xuXHRcdHBnLm1pc2MucmVkaXJTcGFucyA9IHR5cGVvZiBzdHJ1Y3R1cmUucG9wdXBSZWRpclNwYW5zID09PSAnZnVuY3Rpb24nID8gc3RydWN0dXJlLnBvcHVwUmVkaXJTcGFucygpIDogW107XG5cdFx0cmV0dXJuIG1ha2VFbXB0eVNwYW5zKHBnLm1pc2MubGF5b3V0LCBhLm5hdnBvcHVwKTtcblx0fTtcblx0Y29uc3QgbWFrZUVtcHR5U3BhbnMgPSBmdW5jdGlvbiBtYWtlRW1wdHlTcGFucyhsaXN0LCBuYXZwb3ApIHtcblx0XHRsZXQgcmV0ID0gJyc7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGxpc3QpIHtcblx0XHRcdGlmICh0eXBlb2YgZWxlbWVudCA9PT0gdHlwZW9mICcnKSB7XG5cdFx0XHRcdHJldCArPSBlbXB0eVNwYW5IVE1MKGVsZW1lbnQsIG5hdnBvcC5pZE51bWJlciwgJ2RpdicpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gdHlwZW9mIFtdICYmIGVsZW1lbnQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRyZXQgPSByZXQuc3BsaXQoLyg8XFwvW14+XSo/PiQpLykuam9pbihtYWtlRW1wdHlTcGFucyhlbGVtZW50LCBuYXZwb3ApKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09IHR5cGVvZiB7fSAmJiBlbGVtZW50Lm5vZGVUeXBlKSB7XG5cdFx0XHRcdHJldCArPSBlbXB0eVNwYW5IVE1MKGVsZW1lbnQubmFtZSwgbmF2cG9wLmlkTnVtYmVyLCBlbGVtZW50Lm5vZGVUeXBlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgZW1wdHlTcGFuSFRNTCA9IGZ1bmN0aW9uIGVtcHR5U3BhbkhUTUwobmFtZSwgaWQsIHRhZywgY2xhc3NuYW1lKSB7XG5cdFx0dGFnIHx8PSAnc3Bhbic7XG5cdFx0Y2xhc3NuYW1lIHx8PSBlbXB0eVNwYW5IVE1MLmNsYXNzQWxpYXNlc1tuYW1lXTtcblx0XHRjbGFzc25hbWUgfHw9IG5hbWU7XG5cdFx0aWYgKG5hbWUgPT09IGdldFZhbHVlT2YoJ3BvcHVwRHJhZ0hhbmRsZScpKSB7XG5cdFx0XHRjbGFzc25hbWUgKz0gJyBwb3B1cERyYWdIYW5kbGUnO1xuXHRcdH1cblx0XHRyZXR1cm4gc2ltcGxlUHJpbnRmKCc8JXMgaWQ9XCIlc1wiIGNsYXNzPVwiJXNcIj48LyVzPicsIFt0YWcsIG5hbWUgKyBpZCwgY2xhc3NuYW1lLCB0YWddKTtcblx0fTtcblx0ZW1wdHlTcGFuSFRNTC5jbGFzc0FsaWFzZXMgPSB7XG5cdFx0cG9wdXBTZWNvbmRQcmV2aWV3OiAncG9wdXBQcmV2aWV3Jyxcblx0fTtcblx0Ly8gZ2VuZXJhdGUgaHRtbCBmb3IgcG9wdXAgaW1hZ2Vcblx0Ly8gPGEgaWQ9XCJwb3B1cEltYWdlTGlua25cIj48aW1nIGlkPVwicG9wdXBJbWFnZW5cIj5cblx0Ly8gd2hlcmUgbj1pZE51bWJlclxuXHRjb25zdCBpbWFnZUhUTUwgPSAoX2FydGljbGUsIGlkTnVtYmVyKSA9PiB7XG5cdFx0cmV0dXJuIHNpbXBsZVByaW50Zihcblx0XHRcdCc8YSBpZD1cInBvcHVwSW1hZ2VMaW5rJDFcIj4nICtcblx0XHRcdFx0JzxpbWcgYWxpZ249XCJyaWdodFwiIHZhbGlnbj1cInRvcFwiIGlkPVwicG9wdXBJbWckMVwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+PC9pbWc+JyArXG5cdFx0XHRcdCc8L2E+Jyxcblx0XHRcdFtpZE51bWJlcl1cblx0XHQpO1xuXHR9O1xuXHRjb25zdCBwb3BUaXBzU29vbkZuID0gKGlkLCB3aGVuLCBwb3BEYXRhKSA9PiB7XG5cdFx0d2hlbiB8fD0gMjUwO1xuXHRcdGNvbnN0IHBvcFRpcHMgPSAoKSA9PiB7XG5cdFx0XHRzZXR1cFRvb2x0aXBzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApLCBmYWxzZSwgdHJ1ZSwgcG9wRGF0YSk7XG5cdFx0fTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0c2V0VGltZW91dChwb3BUaXBzLCB3aGVuLCBwb3BEYXRhKTtcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBzZXRQb3B1cFRpcHNBbmRIVE1MID0gKGh0bWwsIGRpdm5hbWUsIGlkbnVtYmVyLCBwb3BEYXRhKSA9PiB7XG5cdFx0c2V0UG9wdXBIVE1MKFxuXHRcdFx0aHRtbCxcblx0XHRcdGRpdm5hbWUsXG5cdFx0XHRpZG51bWJlcixcblx0XHRcdGdldFZhbHVlT2YoJ3BvcHVwU3VicG9wdXBzJykgPyBwb3BUaXBzU29vbkZuKGRpdm5hbWUgKyBpZG51bWJlciwgbnVsbCwgcG9wRGF0YSkgOiBudWxsXG5cdFx0KTtcblx0fTtcblx0Ly8gRU5ERklMRTogaHRtbG91dHB1dC5qc1xuXHQvLyBTVEFSVEZJTEU6IG1vdXNlb3V0LmpzXG5cdC8vIGZ1enp5IGNoZWNrc1xuXHRjb25zdCBmdXp6eUN1cnNvck9mZk1lbnVzID0gKF94LCBfeSwgX2Z1enosIHBhcmVudCkgPT4ge1xuXHRcdGlmICghcGFyZW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgdWxzID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsJyk7XG5cdFx0Zm9yIChjb25zdCB1bCBvZiB1bHMpIHtcblx0XHRcdGlmICh1bC5jbGFzc05hbWUgPT09ICdwb3B1cF9tZW51JyAmJiB1bC5vZmZzZXRXaWR0aCA+IDApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSAvLyBlbHNlIHsgZG9jdW1lbnQudGl0bGUrPScuJzsgfVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0Y29uc3QgY2hlY2tQb3B1cFBvc2l0aW9uID0gKCkgPT4ge1xuXHRcdC8vIHN0b3AgdGhlIHBvcHVwIHJ1bm5pbmcgb2ZmIHRoZSByaWdodCBvZiB0aGUgc2NyZWVuXG5cdFx0Ly8gRklYTUUgYXZvaWQgcGcuY3VycmVudC5saW5rXG5cdFx0aWYgKHBnLmN1cnJlbnQubGluayAmJiBwZy5jdXJyZW50LmxpbmsubmF2cG9wdXApIHtcblx0XHRcdHBnLmN1cnJlbnQubGluay5uYXZwb3B1cC5saW1pdEhvcml6b250YWxQb3NpdGlvbigpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgbW91c2VPdXRXaWtpTGluayA9IGZ1bmN0aW9uIG1vdXNlT3V0V2lraUxpbmsoKSB7XG5cdFx0Ly8gY29uc29sZSAoJ21vdXNlT3V0V2lraUxpbmsnKTtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRyZW1vdmVNb2RpZmllcktleUxpc3RlbmVyKHNlbGYpO1xuXHRcdGlmIChzZWxmLm5hdnBvcHVwID09PSBudWxsIHx8IHNlbGYubmF2cG9wdXAgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXNlbGYubmF2cG9wdXAuaXNWaXNpYmxlKCkpIHtcblx0XHRcdHNlbGYubmF2cG9wdXAuYmFuaXNoKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJlc3RvcmVUaXRsZShzZWxmKTtcblx0XHROYXZwb3B1cC50cmFja2VyLmFkZEhvb2socG9zQ2hlY2tlckhvb2soc2VsZi5uYXZwb3B1cCkpO1xuXHR9O1xuXHRjb25zdCBwb3NDaGVja2VySG9vayA9IChuYXZwb3ApID0+IHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0aWYgKCFuYXZwb3AuaXNWaXNpYmxlKCkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7IC8qIHJlbW92ZSB0aGlzIGhvb2sgKi9cblx0XHRcdH1cblx0XHRcdGlmIChOYXZwb3B1cC50cmFja2VyLmRpcnR5KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHt4fSA9IE5hdnBvcHVwLnRyYWNrZXI7XG5cdFx0XHRjb25zdCB7eX0gPSBOYXZwb3B1cC50cmFja2VyO1xuXHRcdFx0Y29uc3QgbW91c2VPdmVyTmF2cG9wID1cblx0XHRcdFx0bmF2cG9wLmlzV2l0aGluKHgsIHksIG5hdnBvcC5mdXp6LCBuYXZwb3AubWFpbkRpdikgfHxcblx0XHRcdFx0IWZ1enp5Q3Vyc29yT2ZmTWVudXMoeCwgeSwgbmF2cG9wLmZ1enosIG5hdnBvcC5tYWluRGl2KTtcblx0XHRcdC8vIEZJWE1FIGl0J2QgYmUgcHJldHRpZXIgdG8gZG8gdGhpcyBpbnRlcm5hbCB0byB0aGUgTmF2cG9wdXAgb2JqZWN0c1xuXHRcdFx0bGV0IHQgPSBnZXRWYWx1ZU9mKCdwb3B1cEhpZGVEZWxheScpO1xuXHRcdFx0aWYgKHQpIHtcblx0XHRcdFx0dCAqPSAxMDAwO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCF0KSB7XG5cdFx0XHRcdGlmICghbW91c2VPdmVyTmF2cG9wKSB7XG5cdFx0XHRcdFx0aWYgKG5hdnBvcC5wYXJlbnRBbmNob3IpIHtcblx0XHRcdFx0XHRcdHJlc3RvcmVUaXRsZShuYXZwb3AucGFyZW50QW5jaG9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bmF2cG9wLmJhbmlzaCgpO1xuXHRcdFx0XHRcdHJldHVybiB0cnVlOyAvKiByZW1vdmUgdGhpcyBob29rICovXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gd2UgaGF2ZSBhIGhpZGUgZGVsYXkgc2V0XG5cdFx0XHRjb25zdCBkID0gRGF0ZS5ub3coKTtcblx0XHRcdGlmICghbmF2cG9wLm1vdXNlTGVhdmluZ1RpbWUpIHtcblx0XHRcdFx0bmF2cG9wLm1vdXNlTGVhdmluZ1RpbWUgPSBkO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAobW91c2VPdmVyTmF2cG9wKSB7XG5cdFx0XHRcdG5hdnBvcC5tb3VzZUxlYXZpbmdUaW1lID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGQgLSBuYXZwb3AubW91c2VMZWF2aW5nVGltZSA+IHQpIHtcblx0XHRcdFx0bmF2cG9wLm1vdXNlTGVhdmluZ1RpbWUgPSBudWxsO1xuXHRcdFx0XHRuYXZwb3AuYmFuaXNoKCk7XG5cdFx0XHRcdHJldHVybiB0cnVlOyAvKiByZW1vdmUgdGhpcyBob29rICovXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0fTtcblx0Y29uc3QgcnVuU3RvcFBvcHVwVGltZXIgPSAobmF2cG9wKSA9PiB7XG5cdFx0Ly8gYXQgdGhpcyBwb2ludCwgd2Ugc2hvdWxkIGhhdmUgbGVmdCB0aGUgbGluayBidXQgcmVtYWluIHdpdGhpbiB0aGUgcG9wdXBcblx0XHQvLyBzbyB3ZSBjYWxsIHRoaXMgZnVuY3Rpb24gYWdhaW4gdW50aWwgd2UgbGVhdmUgdGhlIHBvcHVwLlxuXHRcdGlmICghbmF2cG9wLnN0b3BQb3B1cFRpbWVyKSB7XG5cdFx0XHRuYXZwb3Auc3RvcFBvcHVwVGltZXIgPSBzZXRJbnRlcnZhbChwb3NDaGVja2VySG9vayhuYXZwb3ApLCA1MDApO1xuXHRcdFx0bmF2cG9wLmFkZEhvb2soXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKG5hdnBvcC5zdG9wUG9wdXBUaW1lcik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdoaWRlJyxcblx0XHRcdFx0J2JlZm9yZSdcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHQvLyBFTkRGSUxFOiBtb3VzZW91dC5qc1xuXHQvLyBTVEFSVEZJTEU6IHByZXZpZXdtYWtlci5qc1xuXHQvKipcblx0ICogQGZpbGVvdmVydmlld1xuXHQgKiBEZWZpbmVzIHRoZSB7QHNvdXJjZSBQcmV2aWV3bWFrZXJ9IG9iamVjdCwgd2hpY2ggZ2VuZXJhdGVzIHNob3J0IHByZXZpZXdzIGZyb20gd2lraSBtYXJrdXAuXG5cdCAqL1xuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBQcmV2aWV3bWFrZXJcblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBjbGFzcyBUaGUgUHJldmlld21ha2VyIGNsYXNzLiBVc2UgYW4gaW5zdGFuY2Ugb2YgdGhpcyB0byBnZW5lcmF0ZSBzaG9ydCBwcmV2aWV3cyBmcm9tIFdpa2l0ZXh0LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraVRleHQgVGhlIFdpa2l0ZXh0IHNvdXJjZSBvZiB0aGUgcGFnZSB3ZSB3aXNoIHRvIHByZXZpZXcuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVXJsIFRoZSB1cmwgd2Ugc2hvdWxkIHByZXBlbmQgd2hlbiBjcmVhdGluZyByZWxhdGl2ZSB1cmxzLlxuXHQgKiBAcGFyYW0ge05hdnBvcHVwfSBvd25lciBUaGUgbmF2cG9wIGFzc29jaWF0ZWQgdG8gdGhpcyBwcmV2aWV3IGdlbmVyYXRvclxuXHQgKi9cblx0Y2xhc3MgUHJldmlld21ha2VyIHtcblx0XHRjb25zdHJ1Y3Rvcih3aWtpVGV4dCwgYmFzZVVybCwgb3duZXIpIHtcblx0XHRcdC8qKiBUaGUgd2lraXRleHQgd2hpY2ggaXMgbWFuaXB1bGF0ZWQgdG8gZ2VuZXJhdGUgdGhlIHByZXZpZXcuICovXG5cdFx0XHR0aGlzLm9yaWdpbmFsRGF0YSA9IHdpa2lUZXh0O1xuXHRcdFx0dGhpcy5iYXNlVXJsID0gYmFzZVVybDtcblx0XHRcdHRoaXMub3duZXIgPSBvd25lcjtcblx0XHRcdHRoaXMubWF4Q2hhcmFjdGVycyA9IGdldFZhbHVlT2YoJ3BvcHVwTWF4UHJldmlld0NoYXJhY3RlcnMnKTtcblx0XHRcdHRoaXMubWF4U2VudGVuY2VzID0gZ2V0VmFsdWVPZigncG9wdXBNYXhQcmV2aWV3U2VudGVuY2VzJyk7XG5cdFx0XHR0aGlzLnNldERhdGEoKTtcblx0XHR9XG5cdFx0c2V0RGF0YSgpIHtcblx0XHRcdGNvbnN0IG1heFNpemUgPSBNYXRoLm1heCgxZTQsIDIgKiB0aGlzLm1heENoYXJhY3RlcnMpO1xuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5vcmlnaW5hbERhdGEuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbWF4U2l6ZSkpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgSFRNTCBjb21tZW50c1xuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsQ29tbWVudHMoKSB7XG5cdFx0XHQvLyB0aGlzIGFsc28ga2lsbHMgb25lIHRyYWlsaW5nIG5ld2xpbmUsIGVnIFtbZGlhbXlvXV1cblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9ePCEtLVteJF0qPy0tPlxcbnxcXG48IS0tW14kXSo/LS0+KD89XFxuKXw8IS0tW14kXSo/LS0+L2csICcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsRGl2cygpIHtcblx0XHRcdC8vIHNheSBnb29kYnllLCBkaXZzIChjYW4gYmUgbmVzdGVkLCBzbyB1c2UgKiBub3QgKj8pXG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvPCAqZGl2W14+XSogKj5bXFxTXFxzXSo/PCAqXFwvICpkaXYgKj4vZ2ksICcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsR2FsbGVyaWVzKCkge1xuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoLzwgKmdhbGxlcnlbXj5dKiAqPltcXFNcXHNdKj88ICpcXC8gKmdhbGxlcnkgKj4vZ2ksICcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IG9wZW5pbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gY2xvc2luZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBzdWJvcGVuaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHN1YmNsb3Npbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gcmVwbFxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbChvcGVuaW5nLCBjbG9zaW5nLCBzdWJvcGVuaW5nLCBzdWJjbG9zaW5nLCByZXBsKSB7XG5cdFx0XHRsZXQgb2xkayA9IHRoaXMuZGF0YTtcblx0XHRcdGxldCBrID0gUHJldmlld21ha2VyLmtpbGxTdHVmZih0aGlzLmRhdGEsIG9wZW5pbmcsIGNsb3NpbmcsIHN1Ym9wZW5pbmcsIHN1YmNsb3NpbmcsIHJlcGwpO1xuXHRcdFx0d2hpbGUgKGsubGVuZ3RoIDwgb2xkay5sZW5ndGgpIHtcblx0XHRcdFx0b2xkayA9IGs7XG5cdFx0XHRcdGsgPSBQcmV2aWV3bWFrZXIua2lsbFN0dWZmKGssIG9wZW5pbmcsIGNsb3NpbmcsIHN1Ym9wZW5pbmcsIHN1YmNsb3NpbmcsIHJlcGwpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kYXRhID0gaztcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHR4dFxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBvcGVuaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGNsb3Npbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gc3Vib3BlbmluZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBzdWJjbG9zaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHJlcGxcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHN0YXRpYyBraWxsU3R1ZmYodHh0LCBvcGVuaW5nLCBjbG9zaW5nLCBzdWJvcGVuaW5nLCBzdWJjbG9zaW5nLCByZXBsKSB7XG5cdFx0XHRjb25zdCBvcCA9IFByZXZpZXdtYWtlci5tYWtlUmVnZXhwKG9wZW5pbmcpO1xuXHRcdFx0Y29uc3QgY2wgPSBQcmV2aWV3bWFrZXIubWFrZVJlZ2V4cChjbG9zaW5nLCAnXicpO1xuXHRcdFx0Y29uc3Qgc2IgPSBzdWJvcGVuaW5nID8gUHJldmlld21ha2VyLm1ha2VSZWdleHAoc3Vib3BlbmluZywgJ14nKSA6IG51bGw7XG5cdFx0XHRjb25zdCBzYyA9IHN1YmNsb3NpbmcgPyBQcmV2aWV3bWFrZXIubWFrZVJlZ2V4cChzdWJjbG9zaW5nLCAnXicpIDogY2w7XG5cdFx0XHRpZiAoIW9wIHx8ICFjbCkge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeSgnTmF2aWdhdGlvbiBQb3B1cHMgZXJyb3I6IG9wIG9yIGNsIGlzIG51bGwhIHNvbWV0aGluZyBpcyB3cm9uZy4nLCB7XG5cdFx0XHRcdFx0dGFnOiAncG9wdXBzJyxcblx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFvcC50ZXN0KHR4dCkpIHtcblx0XHRcdFx0cmV0dXJuIHR4dDtcblx0XHRcdH1cblx0XHRcdGxldCByZXQgPSAnJztcblx0XHRcdGNvbnN0IG9wUmVzdWx0ID0gb3AuZXhlYyh0eHQpO1xuXHRcdFx0cmV0ID0gdHh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIG9wUmVzdWx0LmluZGV4KSk7XG5cdFx0XHR0eHQgPSB0eHQuc2xpY2UoTWF0aC5tYXgoMCwgb3BSZXN1bHQuaW5kZXggKyBvcFJlc3VsdFswXS5sZW5ndGgpKTtcblx0XHRcdGxldCBkZXB0aCA9IDE7XG5cdFx0XHR3aGlsZSAodHh0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bGV0IHJlbW92YWwgPSAwO1xuXHRcdFx0XHRpZiAoZGVwdGggPT09IDEgJiYgY2wudGVzdCh0eHQpKSB7XG5cdFx0XHRcdFx0ZGVwdGgtLTtcblx0XHRcdFx0XHRyZW1vdmFsID0gY2wuZXhlYyh0eHQpWzBdLmxlbmd0aDtcblx0XHRcdFx0fSBlbHNlIGlmIChkZXB0aCA+IDEgJiYgc2MudGVzdCh0eHQpKSB7XG5cdFx0XHRcdFx0ZGVwdGgtLTtcblx0XHRcdFx0XHRyZW1vdmFsID0gc2MuZXhlYyh0eHQpWzBdLmxlbmd0aDtcblx0XHRcdFx0fSBlbHNlIGlmIChzYiAmJiBzYi50ZXN0KHR4dCkpIHtcblx0XHRcdFx0XHRkZXB0aCsrO1xuXHRcdFx0XHRcdHJlbW92YWwgPSBzYi5leGVjKHR4dClbMF0ubGVuZ3RoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlbW92YWwgfHw9IDE7XG5cdFx0XHRcdHR4dCA9IHR4dC5zbGljZShNYXRoLm1heCgwLCByZW1vdmFsKSk7XG5cdFx0XHRcdGlmIChkZXB0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0ICsgKHJlcGwgfHwgJycpICsgdHh0O1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHhcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHByZWZpeFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gc3VmZml4XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRzdGF0aWMgbWFrZVJlZ2V4cCh4LCBwcmVmaXgsIHN1ZmZpeCkge1xuXHRcdFx0cHJlZml4IHx8PSAnJztcblx0XHRcdHN1ZmZpeCB8fD0gJyc7XG5cdFx0XHRsZXQgcmVTdHIgPSAnJztcblx0XHRcdGxldCBmbGFncyA9ICcnO1xuXHRcdFx0aWYgKGlzU3RyaW5nKHgpKSB7XG5cdFx0XHRcdHJlU3RyID0gcHJlZml4ICsgbGl0ZXJhbGl6ZVJlZ2V4KHgpICsgc3VmZml4O1xuXHRcdFx0fSBlbHNlIGlmIChpc1JlZ0V4cCh4KSkge1xuXHRcdFx0XHRsZXQgcyA9IHgudG9TdHJpbmcoKS5zbGljZSgxKTtcblx0XHRcdFx0Y29uc3Qgc3AgPSBzLnNwbGl0KCcvJyk7XG5cdFx0XHRcdGZsYWdzID0gc3AuYXQoLTEpO1xuXHRcdFx0XHRzcFtzcC5sZW5ndGggLSAxXSA9ICcnO1xuXHRcdFx0XHRzID0gc3Auam9pbignLycpO1xuXHRcdFx0XHRzID0gcy5zbGljZSgwLCBNYXRoLm1heCgwLCBzLmxlbmd0aCAtIDEpKTtcblx0XHRcdFx0cmVTdHIgPSBwcmVmaXggKyBzICsgc3VmZml4O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nKCdtYWtlUmVnZXhwIGZhaWxlZCcpO1xuXHRcdFx0fVxuXHRcdFx0bG9nKGBtYWtlUmVnZXhwOiBnb3QgcmVTdHI9JHtyZVN0cn0sIGZsYWdzPSR7ZmxhZ3N9YCk7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChyZVN0ciwgZmxhZ3MpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxCb3hUZW1wbGF0ZXMoKSB7XG5cdFx0XHQvLyB0YXhvYm94IHJlbW92YWwuLi4gaW4gZmFjdCwgdGhlcmUncyBhIHNhdWRpcHJpbmNlYm94X2JlZ2luLCBzbyBsZXQncyBiZSBtb3JlIGdlbmVyYWxcblx0XHRcdC8vIGFsc28sIGhhdmUgZmxvYXRfYmVnaW4sIC4uLiBmbG9hdF9lbmRcblx0XHRcdHRoaXMua2lsbCgve3tbXlxcc3t8fV0qPyhmbG9hdHxib3gpWyBfXShiZWdpbnxzdGFydCkvaSwgL319XFxzKi8sICd7eycpO1xuXHRcdFx0Ly8gaW5mb2JveGVzIGV0Y1xuXHRcdFx0Ly8gZnJvbSBaeXh3OiBraWxsIGZyYW1lcyB0b29cblx0XHRcdHRoaXMua2lsbCgve3tbXlxcc3t8fV0qPyhpbmZvYm94fGVsZW1lbnRib3h8ZnJhbWUpWyBfXS9pLCAvfX1cXHMqLywgJ3t7Jyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbFRlbXBsYXRlcygpIHtcblx0XHRcdHRoaXMua2lsbCgne3snLCAnfX0nLCAneycsICd9JywgJyAnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsVGFibGVzKCkge1xuXHRcdFx0Ly8gdGFibGVzIGFyZSBiYWQsIHRvb1xuXHRcdFx0Ly8gdGhpcyBjYW4gYmUgc2xvdywgYnV0IGl0J3MgYW4gaW5wcm92ZW1lbnQgb3ZlciBhIGJyb3dzZXIgaGFuZ1xuXHRcdFx0Ly8gdG9ydHVyZSB0ZXN0OiBbW0NvbXBhcmlzb25fb2ZfSW50ZWxfQ2VudHJhbF9Qcm9jZXNzaW5nX1VuaXRzXV1cblx0XHRcdHRoaXMua2lsbCgne3wnLCAvXFx8fVxccyovLCAne3wnKTtcblx0XHRcdHRoaXMua2lsbCgvPHRhYmxlLio/Pi9pLCAvPFxcL3RhYmxlLio/Pi9pLCAvPHRhYmxlLio/Pi9pKTtcblx0XHRcdC8vIHJlbW92ZSBsaW5lcyBzdGFydGluZyB3aXRoIGEgcGlwZSBmb3IgdGhlIGhlbGwgb2YgaXQgKD8pXG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXlxcfC4qJC9nbSwgJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxJbWFnZXMoKSB7XG5cdFx0XHRjb25zdCBmb3JiaWRkZW5OYW1lc3BhY2VBbGlhc2VzID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IFtsb2NhbGl6ZWROYW1lc3BhY2VMYywgbmFtZXNwYWNlSWRdIG9mIE9iamVjdC5lbnRyaWVzKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlSWRzJykpKSB7XG5cdFx0XHRcdGlmIChuYW1lc3BhY2VJZCAhPT0gcGcubnNJbWFnZUlkICYmIG5hbWVzcGFjZUlkICE9PSBwZy5uc0NhdGVnb3J5SWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yYmlkZGVuTmFtZXNwYWNlQWxpYXNlcy5wdXNoKGxvY2FsaXplZE5hbWVzcGFjZUxjLnNwbGl0KCcgJykuam9pbignWyBfXScpKTsgLy8gdG9kbzogZXNjYXBlIHJlZ2V4cCBmcmFnbWVudHMhXG5cdFx0XHR9XG5cdFx0XHQvLyBpbWFnZXMgYW5kIGNhdGVnb3JpZXMgYXJlIGEgbm9ub1xuXHRcdFx0dGhpcy5raWxsKG5ldyBSZWdFeHAoYFtbXVtbXVxcXFxzKigke2ZvcmJpZGRlbk5hbWVzcGFjZUFsaWFzZXMuam9pbignfCcpfSlcXFxccyo6YCwgJ2knKSwgL11dXFxzKi8sICdbJywgJ10nKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsSFRNTCgpIHtcblx0XHRcdC8vIGtpbGwgPHJlZiAuLi4+Li4uPC9yZWY+XG5cdFx0XHR0aGlzLmtpbGwoLzxyZWZcXGJbXi8+XSo/Pi9pLCAvPFxcL3JlZj4vaSk7XG5cdFx0XHQvLyBsZXQncyBhbHNvIGRlbGV0ZSBlbnRpcmUgbGluZXMgc3RhcnRpbmcgd2l0aCA8LiBpdCdzIHdvcnRoIGEgdHJ5LlxuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoLyhefFxcbikgKjwuKi9nLCAnXFxuJyk7XG5cdFx0XHQvLyBhbmQgdGhvc2UgcGVza3kgaHRtbCB0YWdzLCBidXQgbm90IG5vd2lraSBvciBibG9ja3F1b3RlIHRhZ3Ncblx0XHRcdGNvbnN0IHNwbGl0dGVkID0gdGhpcy5kYXRhLnNwbGl0KC8oPFtcXFdcXHddKj8oPzo+fCR8KD89PCkpKS8pO1xuXHRcdFx0Y29uc3QgbGVuID0gc3BsaXR0ZWQubGVuZ3RoO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBsZW47IGkgKz0gMikge1xuXHRcdFx0XHRzd2l0Y2ggKHNwbGl0dGVkW2ldKSB7XG5cdFx0XHRcdFx0Y2FzZSAnPG5vJy5jb25jYXQoJ3dpa2knLCAnPicpOlxuXHRcdFx0XHRcdGNhc2UgJzwvbm8nLmNvbmNhdCgnd2lraScsICc+Jyk6XG5cdFx0XHRcdFx0Y2FzZSAnPGJsb2NrJy5jb25jYXQoJ3F1b3RlJywgJz4nKTpcblx0XHRcdFx0XHRjYXNlICc8L2Jsb2NrJy5jb25jYXQoJ3F1b3RlJywgJz4nKTpcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRzcGxpdHRlZFtpXSA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRhdGEgPSBzcGxpdHRlZC5qb2luKCcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsQ2h1bmtzKCkge1xuXHRcdFx0Ly8gaGV1cmlzdGljcyBhbGVydFxuXHRcdFx0Ly8gY2h1bmtzIG9mIGl0YWxpYyB0ZXh0PyB5b3UgY3JhenksIG1hbj9cblx0XHRcdGNvbnN0IGl0YWxpY0NodW5rUmVnZXggPSAvKChefFxcbilcXHMqOipcXHMqJydbXiddKFteJ118JycnfCdbXiddKXsyMH0oLnxcXG5bXlxcbl0pKicnW1xccyEuP10qXFxuKSsvZztcblx0XHRcdC8vIGtlZXAgc3R1ZmYgc2VwYXJhdGVkLCB0aG91Z2gsIHNvIHN0aWNrIGluIFxcbiAoZml4ZXMgW1tVbmlvbiBKYWNrXV0/XG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShpdGFsaWNDaHVua1JlZ2V4LCAnXFxuJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0bW9wdXAoKSB7XG5cdFx0XHQvLyB3ZSBzaW1wbHkgKmNhbid0KiBiZSBkb2luZyB3aXRoIGhvcml6b250YWwgcnVsZXMgcmlnaHQgbm93XG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXi17NCx9L2dtLCAnJyk7XG5cdFx0XHQvLyBubyBpbmRlbnRlZCBsaW5lc1xuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoLyhefFxcbikgKjpbXlxcbl0qL2csICcnKTtcblx0XHRcdC8vIHJlcGxhY2UgX19UT0NfXywgX19OT1RPQ19fIGFuZCB3aGF0ZXZlciBlbHNlIHRoZXJlIGlzXG5cdFx0XHQvLyB0aGlzJ2xsIHByb2JhYmx5IGRvXG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXl9fW19hLXpdKl9fICokL2dpbSwgJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGZpcnN0Qml0KCkge1xuXHRcdFx0Ly8gZG9udCd0IGJlIGdpdmluJyBtZSBubyBzdWJzZXF1ZW50IHBhcmFncmFwaHMsIHlvdSBoZWFyIG1lP1xuXHRcdFx0Ly8gLyBmaXJzdCB3ZSBcIm5vcm1hbGl6ZVwiIHNlY3Rpb24gaGVhZGluZ3MsIHJlbW92aW5nIHdoaXRlc3BhY2UgYWZ0ZXIsIGFkZGluZyBiZWZvcmVcblx0XHRcdGxldCBkID0gdGhpcy5kYXRhO1xuXHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwUHJldmlld0N1dEhlYWRpbmdzJykpIHtcblx0XHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL1xccyooPT0rW149XSo9PSspXFxzKi9nLCAnXFxuXFxuJDEgJyk7XG5cdFx0XHRcdC8vIC8gdGhlbiB3ZSB3YW50IHRvIGdldCByaWQgb2YgcGFyYWdyYXBoIGJyZWFrcyB3aG9zZSB0ZXh0IGVuZHMgYmFkbHlcblx0XHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoLyhbOjtdKSAqXFxuezIsfS9nLCAnJDFcXG4nKTtcblx0XHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL15cXHMqLywgJycpO1xuXHRcdFx0XHRjb25zdCBzdHVmZiA9IC9eKFteXFxuXXxcXG5cXFMpKi8uZXhlYyh0aGlzLmRhdGEpO1xuXHRcdFx0XHRpZiAoc3R1ZmYpIHtcblx0XHRcdFx0XHRbZF0gPSBzdHVmZjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWdldFZhbHVlT2YoJ3BvcHVwUHJldmlld0ZpcnN0UGFyT25seScpKSB7XG5cdFx0XHRcdFx0ZCA9IHRoaXMuZGF0YTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyAvIG5vdyBwdXQgXFxuXFxuIGFmdGVyIHNlY3Rpb25zIHNvIHRoYXQgYnVsbGV0cyBhbmQgbnVtYmVyZWQgbGlzdHMgd29ya1xuXHRcdFx0XHRkID0gZC5yZXBsYWNlKC8oPT0rW149XSo9PSspXFxzKi9nLCAnJDFcXG5cXG4nKTtcblx0XHRcdH1cblx0XHRcdC8vIFNwbGl0IHNlbnRlbmNlcy4gU3VwZXJmbHVvdXMgc2VudGVuY2VzIGFyZSBSSUdIVCBPVVQuXG5cdFx0XHQvLyBub3RlOiBleGFjdGx5IDEgc2V0IG9mIHBhcmVucyBoZXJlIG5lZWRlZCB0byBtYWtlIHRoZSBzbGljZSB3b3JrXG5cdFx0XHRkID0gZC5zcGxpdCgvKFshLj9dK1tcIiddKlxccykvZyk7XG5cdFx0XHQvLyBsZWFkaW5nIHNwYWNlIGlzIGJhZCwgbW1rYXk/XG5cdFx0XHRkWzBdID0gZFswXS5yZXBsYWNlKC9eXFxzKi8sICcnKTtcblx0XHRcdGNvbnN0IG5vdFNlbnRlbmNlRW5kcyA9IC8oW14uXVthLXpdXFwuICpbYS16XXxldGN8c2ljfGRyfG1yfG1yc3xtc3xzdHxub3xvcHxjaXR8XFxbW15cXF1dKnxcXHNbYS16XSkkL2k7XG5cdFx0XHRkID0gdGhpcy5maXhTZW50ZW5jZUVuZHMoZCwgbm90U2VudGVuY2VFbmRzKTtcblx0XHRcdHRoaXMuZnVsbExlbmd0aCA9IGQuam9pbignJykubGVuZ3RoO1xuXHRcdFx0bGV0IG4gPSB0aGlzLm1heFNlbnRlbmNlcztcblx0XHRcdGxldCBkZCA9IFByZXZpZXdtYWtlci5maXJzdFNlbnRlbmNlcyhkLCBuKTtcblx0XHRcdGRvIHtcblx0XHRcdFx0ZGQgPSBQcmV2aWV3bWFrZXIuZmlyc3RTZW50ZW5jZXMoZCwgbik7XG5cdFx0XHRcdC0tbjtcblx0XHRcdH0gd2hpbGUgKGRkLmxlbmd0aCA+IHRoaXMubWF4Q2hhcmFjdGVycyAmJiBuICE9PSAwKTtcblx0XHRcdHRoaXMuZGF0YSA9IGRkO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3Ryc1xuXHRcdCAqIEBwYXJhbSB7UmVnRXhwfSByZWdcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGZpeFNlbnRlbmNlRW5kcyhzdHJzLCByZWcpIHtcblx0XHRcdC8vIHRha2UgYW4gYXJyYXkgb2Ygc3RyaW5ncywgc3Ryc1xuXHRcdFx0Ly8gam9pbiBzdHJzW2ldIHRvIHN0cnNbaSsxXSAmIHN0cnNbaSsyXSBpZiBzdHJzW2ldIG1hdGNoZXMgcmVnZXggcmVnXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0cnMubGVuZ3RoIC0gMjsgKytpKSB7XG5cdFx0XHRcdGlmIChyZWcudGVzdChzdHJzW2ldKSkge1xuXHRcdFx0XHRcdGNvbnN0IGEgPSBbXTtcblx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHN0cnMubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0XHRcdGlmIChqIDwgaSkge1xuXHRcdFx0XHRcdFx0XHRhW2pdID0gc3Ryc1tqXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChqID09PSBpKSB7XG5cdFx0XHRcdFx0XHRcdGFbaV0gPSBzdHJzW2ldICsgc3Ryc1tpICsgMV0gKyBzdHJzW2kgKyAyXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChqID4gaSArIDIpIHtcblx0XHRcdFx0XHRcdFx0YVtqIC0gMl0gPSBzdHJzW2pdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5maXhTZW50ZW5jZUVuZHMoYSwgcmVnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0cnM7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nW119IHN0cnNcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaG93bWFueVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0c3RhdGljIGZpcnN0U2VudGVuY2VzKHN0cnMsIGhvd21hbnkpIHtcblx0XHRcdGNvbnN0IHQgPSBzdHJzLnNsaWNlKDAsIDIgKiBob3dtYW55KTtcblx0XHRcdHJldHVybiB0LmpvaW4oJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxCYWRXaGl0ZXNwYWNlKCkge1xuXHRcdFx0Ly8gYWxzbyBjbGVhbnMgdXAgaXNvbGF0ZWQgJycnJ1xuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL14gKicrICokL2dtLCAnJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJ1bnMgdGhlIHZhcmlvdXMgbWV0aG9kcyB0byBnZW5lcmF0ZSB0aGUgcHJldmlldy5cblx0XHQgKiBUaGUgcHJldmlldyBpcyBzdG9yZWQgaW4gdGhlIDxjb2RlPmh0bWw8L2h0bWw+IGZpZWxkLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRtYWtlUHJldmlldygpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy5vd25lci5hcnRpY2xlLm5hbWVzcGFjZUlkKCkgIT09IHBnLm5zVGVtcGxhdGVJZCAmJlxuXHRcdFx0XHR0aGlzLm93bmVyLmFydGljbGUubmFtZXNwYWNlSWQoKSAhPT0gcGcubnNJbWFnZUlkXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5raWxsQ29tbWVudHMoKTtcblx0XHRcdFx0dGhpcy5raWxsRGl2cygpO1xuXHRcdFx0XHR0aGlzLmtpbGxHYWxsZXJpZXMoKTtcblx0XHRcdFx0dGhpcy5raWxsQm94VGVtcGxhdGVzKCk7XG5cdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFByZXZpZXdLaWxsVGVtcGxhdGVzJykpIHtcblx0XHRcdFx0XHR0aGlzLmtpbGxUZW1wbGF0ZXMoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmtpbGxNdWx0aWxpbmVUZW1wbGF0ZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmtpbGxUYWJsZXMoKTtcblx0XHRcdFx0dGhpcy5raWxsSW1hZ2VzKCk7XG5cdFx0XHRcdHRoaXMua2lsbEhUTUwoKTtcblx0XHRcdFx0dGhpcy5raWxsQ2h1bmtzKCk7XG5cdFx0XHRcdHRoaXMubW9wdXAoKTtcblx0XHRcdFx0dGhpcy5maXJzdEJpdCgpO1xuXHRcdFx0XHR0aGlzLmtpbGxCYWRXaGl0ZXNwYWNlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmtpbGxIVE1MKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmh0bWwgPSB3aWtpMmh0bWwodGhpcy5kYXRhLCB0aGlzLmJhc2VVcmwpOyAvLyBuZWVkcyBsaXZlcHJldmlld1xuXHRcdFx0dGhpcy5maXhIVE1MKCk7XG5cdFx0XHR0aGlzLnN0cmlwTG9uZ1RlbXBsYXRlcygpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZGF0YVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0c3RhdGljIGVzV2lraTJIdG1sUGFydChkYXRhKSB7XG5cdFx0XHRjb25zdCByZUxpbmtzID0gLyg/OlxcW1xcWyhbXlxcXXxdKikoPzpcXHwoW15cXF18XSopKSpdXShbYS16XSopKS9naTsgLy8gbWF0Y2ggYSB3aWtpbGlua1xuXHRcdFx0cmVMaW5rcy5sYXN0SW5kZXggPSAwOyAvLyByZXNldCByZWdleFxuXHRcdFx0bGV0IG1hdGNoO1xuXHRcdFx0bGV0IHJlc3VsdCA9ICcnO1xuXHRcdFx0bGV0IHBvc3RmaXhJbmRleCA9IDA7XG5cdFx0XHR3aGlsZSAoKG1hdGNoID0gcmVMaW5rcy5leGVjKGRhdGEpKSAhPT0gbnVsbCkge1xuXHRcdFx0XHQvLyBtYXRjaCBhbGwgd2lraWxpbmtzXG5cdFx0XHRcdC8vIEZJWE1FOiB0aGUgd2F5IHRoYXQgbGluayBpcyBidWlsdCBoZXJlIGlzbid0IHBlcmZlY3QuIEl0IGlzIGNsaWNrYWJsZSwgYnV0IHBvcHVwcyBwcmV2aWV3IHdvbid0IHJlY29nbml6ZSBpdCBpbiBzb21lIGNhc2VzLlxuXHRcdFx0XHRyZXN1bHQgKz0gYCR7cGcuZXNjYXBlUXVvdGVzSFRNTChkYXRhLnN1YnN0cmluZyhwb3N0Zml4SW5kZXgsIG1hdGNoLmluZGV4KSl9PGEgaHJlZj1cIiR7XG5cdFx0XHRcdFx0SW5zdGEuY29uZi5wYXRocy5hcnRpY2xlc1xuXHRcdFx0XHR9JHtwZy5lc2NhcGVRdW90ZXNIVE1MKG1hdGNoWzFdKX1cIj4ke3BnLmVzY2FwZVF1b3Rlc0hUTUwoKG1hdGNoWzJdID8/IG1hdGNoWzFdKSArIG1hdGNoWzNdKX08L2E+YDtcblx0XHRcdFx0cG9zdGZpeEluZGV4ID0gcmVMaW5rcy5sYXN0SW5kZXg7XG5cdFx0XHR9XG5cdFx0XHQvLyBhcHBlbmQgdGhlIHJlc3Rcblx0XHRcdHJlc3VsdCArPSBwZy5lc2NhcGVRdW90ZXNIVE1MKGRhdGEuc2xpY2UoTWF0aC5tYXgoMCwgcG9zdGZpeEluZGV4KSkpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0ZWRpdFN1bW1hcnlQcmV2aWV3KCkge1xuXHRcdFx0Y29uc3QgcmVBZXMgPSAvXFwvXFwqICooLio/KSAqXFwqXFwvL2c7IC8vIG1hdGNoIHRoZSBmaXJzdCBzZWN0aW9uIG1hcmtlclxuXHRcdFx0cmVBZXMubGFzdEluZGV4ID0gMDsgLy8gcmVzZXQgcmVnZXhcblx0XHRcdGNvbnN0IG1hdGNoID0gcmVBZXMuZXhlYyh0aGlzLmRhdGEpO1xuXHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdC8vIHdlIGhhdmUgYSBzZWN0aW9uIGxpbmsuIFNwbGl0IGl0LCBwcm9jZXNzIGl0LCBjb21iaW5lIGl0LlxuXHRcdFx0XHRjb25zdCBwcmVmaXggPSB0aGlzLmRhdGEuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbWF0Y2guaW5kZXggLSAxKSk7XG5cdFx0XHRcdGNvbnN0IFssIHNlY3Rpb25dID0gbWF0Y2g7XG5cdFx0XHRcdGNvbnN0IHBvc3RmaXggPSB0aGlzLmRhdGEuc2xpY2UoTWF0aC5tYXgoMCwgcmVBZXMubGFzdEluZGV4KSk7XG5cdFx0XHRcdGxldCBzdGFydCA9IFwiPHNwYW4gY2xhc3M9J2F1dG9jb21tZW50Jz5cIjtcblx0XHRcdFx0bGV0IGVuZCA9ICc8L3NwYW4+Jztcblx0XHRcdFx0aWYgKHByZWZpeC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c3RhcnQgPSBgJHtQcmV2aWV3bWFrZXIuZXNXaWtpMkh0bWxQYXJ0KHByZWZpeCl9ICR7c3RhcnR9LSBgO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwb3N0Zml4Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRlbmQgPSBgOiAke2VuZH0ke1ByZXZpZXdtYWtlci5lc1dpa2kySHRtbFBhcnQocG9zdGZpeCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB0ID0gbmV3IFRpdGxlKCkuZnJvbVVSTCh0aGlzLmJhc2VVcmwpO1xuXHRcdFx0XHR0LmFuY2hvckZyb21VdGYoc2VjdGlvbik7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25MaW5rID0gYCR7XG5cdFx0XHRcdFx0SW5zdGEuY29uZi5wYXRocy5hcnRpY2xlcyArIHBnLmVzY2FwZVF1b3Rlc0hUTUwodC50b1N0cmluZyh0cnVlKSlcblx0XHRcdFx0fSMke3BnLmVzY2FwZVF1b3Rlc0hUTUwodC5hbmNob3IpfWA7XG5cdFx0XHRcdHJldHVybiBgJHtzdGFydH08YSBocmVmPVwiJHtzZWN0aW9uTGlua31cIj4mcmFycjs8L2E+ICR7cGcuZXNjYXBlUXVvdGVzSFRNTChzZWN0aW9uKX0ke2VuZH1gO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZWxzZSB0aGVyZSdzIG5vIHNlY3Rpb24gbGluaywgaHRtbGlmeSB0aGUgd2hvbGUgdGhpbmcuXG5cdFx0XHRyZXR1cm4gUHJldmlld21ha2VyLmVzV2lraTJIdG1sUGFydCh0aGlzLmRhdGEpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBXb3JrcyBhcm91bmQgbGl2ZXByZXZpZXcgYnVncy5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0Zml4SFRNTCgpIHtcblx0XHRcdGlmICghdGhpcy5odG1sKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCByZXQgPSB0aGlzLmh0bWw7XG5cdFx0XHQvLyBmaXggcXVlc3Rpb24gbWFya3MgaW4gd2lraSBsaW5rc1xuXHRcdFx0Ly8gbWF5YmUgdGhpcydsbCBicmVhayBzb21lIHN0dWZmIDotKFxuXHRcdFx0cmV0ID0gcmV0LnJlcGxhY2UobmV3IFJlZ0V4cChgKDxhIGhyZWY9XCIke3BnLndpa2kuYXJ0aWNsZVBhdGh9L1teXCJdKilbP10oLio/XCIpYCwgJ2cnKSwgJyQxJTNGJDInKTtcblx0XHRcdHJldCA9IHJldC5yZXBsYWNlKG5ldyBSZWdFeHAoYCg8YSBocmVmPScke3BnLndpa2kuYXJ0aWNsZVBhdGh9L1teJ10qKVs/XSguKj8nKWAsICdnJyksICckMSUzRiQyJyk7XG5cdFx0XHQvLyBGSVhNRSBmaXggdXAgJSB0b29cblx0XHRcdHRoaXMuaHRtbCA9IHJldDtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogR2VuZXJhdGVzIHRoZSBwcmV2aWV3IGFuZCBkaXNwbGF5cyBpdCBpbiB0aGUgY3VycmVudCBwb3B1cC5cblx0XHQgKiBEb2VzIG5vdGhpbmcgaWYgdGhlIGdlbmVyYXRlZCBwcmV2aWV3IGlzIGludmFsaWQgb3IgY29uc2lzdHMgb2Ygd2hpdGVzcGFjZSBvbmx5LlxuXHRcdCAqIEFsc28gYWN0aXZhdGVzIHdpa2lsaW5rcyBpbiB0aGUgcHJldmlldyBmb3Igc3VicG9wdXBzIGlmIHRoZSBwb3B1cFN1YnBvcHVwcyBvcHRpb24gaXMgdHJ1ZS5cblx0XHQgKi9cblx0XHRzaG93UHJldmlldygpIHtcblx0XHRcdHRoaXMubWFrZVByZXZpZXcoKTtcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5odG1sICE9PSB0eXBlb2YgJycpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKC9eXFxzKiQvLnRlc3QodGhpcy5odG1sKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRzZXRQb3B1cEhUTUwoJzxocj4nLCAncG9wdXBQcmVQcmV2aWV3U2VwJywgdGhpcy5vd25lci5pZE51bWJlcik7XG5cdFx0XHRzZXRQb3B1cFRpcHNBbmRIVE1MKHRoaXMuaHRtbCwgJ3BvcHVwUHJldmlldycsIHRoaXMub3duZXIuaWROdW1iZXIsIHtcblx0XHRcdFx0b3duZXI6IHRoaXMub3duZXIsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IG1vcmUgPSB0aGlzLmZ1bGxMZW5ndGggPiB0aGlzLmRhdGEubGVuZ3RoID8gdGhpcy5tb3JlTGluaygpIDogJyc7XG5cdFx0XHRzZXRQb3B1cEhUTUwobW9yZSwgJ3BvcHVwUHJldmlld01vcmUnLCB0aGlzLm93bmVyLmlkTnVtYmVyKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRtb3JlTGluaygpIHtcblx0XHRcdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRhLmNsYXNzTmFtZSA9ICdwb3B1cE1vcmVMaW5rJztcblx0XHRcdGEuaW5uZXJIVE1MID0gcG9wdXBTdHJpbmcoJ21vcmUuLi4nKTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0YS5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0XHRzZWxmLm1heENoYXJhY3RlcnMgKz0gMjAwMDtcblx0XHRcdFx0c2VsZi5tYXhTZW50ZW5jZXMgKz0gMjA7XG5cdFx0XHRcdHNlbGYuc2V0RGF0YSgpO1xuXHRcdFx0XHRzZWxmLnNob3dQcmV2aWV3KCk7XG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIGE7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0c3RyaXBMb25nVGVtcGxhdGVzKCkge1xuXHRcdFx0Ly8gb3BlcmF0ZXMgb24gdGhlIEhUTUwhXG5cdFx0XHR0aGlzLmh0bWwgPSB0aGlzLmh0bWwucmVwbGFjZSgvXi57MCwxMDAwfXt7W159XSo/KDwocHxicikoIFxcLyk/PlxccyopezIsfShbXnt9XSo/fX0pPy9naSwgJycpO1xuXHRcdFx0dGhpcy5odG1sID0gdGhpcy5odG1sLnNwbGl0KCdcXG4nKS5qb2luKCcgJyk7IC8vIHdvcmthcm91bmQgZm9yIDxwcmU+IHRlbXBsYXRlc1xuXHRcdFx0dGhpcy5odG1sID0gdGhpcy5odG1sLnJlcGxhY2UoL3t7W159XSo8cHJlPltefV0qfX0vZ2ksICcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsTXVsdGlsaW5lVGVtcGxhdGVzKCkge1xuXHRcdFx0dGhpcy5raWxsKCd7e3snLCAnfX19Jyk7XG5cdFx0XHR0aGlzLmtpbGwoL1xccyp7e1tee31dKlxcbi8sICd9fScsICd7eycpO1xuXHRcdH1cblx0fVxuXHQvLyBFTkRGSUxFOiBwcmV2aWV3bWFrZXIuanNcblx0Ly8gU1RBUlRGSUxFOiBxdWVyeXByZXZpZXcuanNcblx0Y29uc3QgbG9hZEFQSVByZXZpZXcgPSAocXVlcnlUeXBlLCBhcnRpY2xlLCBuYXZwb3ApID0+IHtcblx0XHRjb25zdCBhcnQgPSBuZXcgVGl0bGUoYXJ0aWNsZSkudXJsU3RyaW5nKCk7XG5cdFx0bGV0IHVybCA9IGAke3BnLndpa2kuYXBpd2lraWJhc2V9P2Zvcm1hdD1qc29uJmZvcm1hdHZlcnNpb249MiZhY3Rpb249cXVlcnkmYDtcblx0XHRsZXQgaHRtbEdlbmVyYXRvciA9ICgpID0+IC8qIGEsIGQgKi8ge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoJ2ludmFsaWQgaHRtbCBnZW5lcmF0b3InLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdH07XG5cdFx0bGV0IHVzZXJuYW1lYXJ0ID0gJyc7XG5cdFx0c3dpdGNoIChxdWVyeVR5cGUpIHtcblx0XHRcdGNhc2UgJ2hpc3RvcnknOlxuXHRcdFx0XHR1cmwgKz0gYHRpdGxlcz0ke2FydH0mcHJvcD1yZXZpc2lvbnMmcnZsaW1pdD0ke2dldFZhbHVlT2YoJ3BvcHVwSGlzdG9yeVByZXZpZXdMaW1pdCcpfWA7XG5cdFx0XHRcdGh0bWxHZW5lcmF0b3IgPSBBUEloaXN0b3J5UHJldmlld0hUTUw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnY2F0ZWdvcnknOlxuXHRcdFx0XHR1cmwgKz0gYGxpc3Q9Y2F0ZWdvcnltZW1iZXJzJmNtdGl0bGU9JHthcnR9YDtcblx0XHRcdFx0aHRtbEdlbmVyYXRvciA9IEFQSWNhdGVnb3J5UHJldmlld0hUTUw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndXNlcmluZm8nOiB7XG5cdFx0XHRcdGNvbnN0IHVzZXJuYW1lID0gbmV3IFRpdGxlKGFydGljbGUpLnVzZXJOYW1lKCk7XG5cdFx0XHRcdHVzZXJuYW1lYXJ0ID0gZW5jb2RlVVJJQ29tcG9uZW50KHVzZXJuYW1lKTtcblx0XHRcdFx0dXJsICs9IHBnLnJlLmlwVXNlci50ZXN0KHVzZXJuYW1lKVxuXHRcdFx0XHRcdD8gYGxpc3Q9YmxvY2tzJmJrcHJvcD1yYW5nZXxyZXN0cmljdGlvbnMmYmtpcD0ke3VzZXJuYW1lYXJ0fWBcblx0XHRcdFx0XHQ6IGBsaXN0PXVzZXJzfHVzZXJjb250cmlicyZ1c3Byb3A9YmxvY2tpbmZvfGdyb3Vwc3xlZGl0Y291bnR8cmVnaXN0cmF0aW9ufGdlbmRlciZ1c3VzZXJzPSR7dXNlcm5hbWVhcnR9Jm1ldGE9Z2xvYmFsdXNlcmluZm8mZ3VpcHJvcD1ncm91cHN8dW5hdHRhY2hlZCZndWl1c2VyPSR7dXNlcm5hbWVhcnR9JnVjbGltaXQ9MSZ1Y3Byb3A9dGltZXN0YW1wJnVjdXNlcj0ke3VzZXJuYW1lYXJ0fWA7XG5cdFx0XHRcdGh0bWxHZW5lcmF0b3IgPSBBUEl1c2VySW5mb1ByZXZpZXdIVE1MO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ2NvbnRyaWJzJzpcblx0XHRcdFx0dXNlcm5hbWVhcnQgPSBlbmNvZGVVUklDb21wb25lbnQobmV3IFRpdGxlKGFydGljbGUpLnVzZXJOYW1lKCkpO1xuXHRcdFx0XHR1cmwgKz0gYGxpc3Q9dXNlcmNvbnRyaWJzJnVjdXNlcj0ke3VzZXJuYW1lYXJ0fSZ1Y2xpbWl0PSR7Z2V0VmFsdWVPZigncG9wdXBDb250cmlic1ByZXZpZXdMaW1pdCcpfWA7XG5cdFx0XHRcdGh0bWxHZW5lcmF0b3IgPSBBUEljb250cmlic1ByZXZpZXdIVE1MO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2ltYWdlcGFnZXByZXZpZXcnOiB7XG5cdFx0XHRcdGxldCB0cmFpbCA9ICcnO1xuXHRcdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBJbWFnZUxpbmtzJykpIHtcblx0XHRcdFx0XHR0cmFpbCA9IGAmbGlzdD1pbWFnZXVzYWdlJml1dGl0bGU9JHthcnR9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHR1cmwgKz0gYHRpdGxlcz0ke2FydH0mcHJvcD1yZXZpc2lvbnN8aW1hZ2VpbmZvJnJ2cHJvcD1jb250ZW50JHt0cmFpbH1gO1xuXHRcdFx0XHRodG1sR2VuZXJhdG9yID0gQVBJaW1hZ2VwYWdlUHJldmlld0hUTUw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnYmFja2xpbmtzJzpcblx0XHRcdFx0dXJsICs9IGBsaXN0PWJhY2tsaW5rcyZibHRpdGxlPSR7YXJ0fWA7XG5cdFx0XHRcdGh0bWxHZW5lcmF0b3IgPSBBUEliYWNrbGlua3NQcmV2aWV3SFRNTDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdyZXZpc2lvbic6XG5cdFx0XHRcdHVybCArPSBhcnRpY2xlLm9sZGlkID8gYHJldmlkcz0ke2FydGljbGUub2xkaWR9YCA6IGB0aXRsZXM9JHthcnRpY2xlLnJlbW92ZUFuY2hvcigpLnVybFN0cmluZygpfWA7XG5cdFx0XHRcdHVybCArPVxuXHRcdFx0XHRcdCcmcHJvcD1yZXZpc2lvbnN8cGFnZXByb3BzfGluZm98aW1hZ2VzfGNhdGVnb3JpZXMmcnZwcm9wPWlkc3x0aW1lc3RhbXB8ZmxhZ3N8Y29tbWVudHx1c2VyfGNvbnRlbnQmY2xsaW1pdD1tYXgmaW1saW1pdD1tYXgnO1xuXHRcdFx0XHRodG1sR2VuZXJhdG9yID0gQVBJcmV2aXNpb25QcmV2aWV3SFRNTDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHBlbmRpbmdOYXZwb3BUYXNrKG5hdnBvcCk7XG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAoZCkgPT4ge1xuXHRcdFx0bG9nKCdjYWxsYmFjayBvZiBBUEkgZnVuY3Rpb25zIHdhcyBoaXQnKTtcblx0XHRcdGlmIChxdWVyeVR5cGUgPT09ICd1c2VyaW5mbycpIHtcblx0XHRcdFx0Ly8gV2UgbmVlZCB0byBkbyBhbm90aGVyIEFQSSByZXF1ZXN0XG5cdFx0XHRcdGZldGNoVXNlckdyb3VwTmFtZXMoZC5kYXRhKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRzaG93QVBJUHJldmlldyhxdWVyeVR5cGUsIGh0bWxHZW5lcmF0b3IoYXJ0aWNsZSwgZCwgbmF2cG9wKSwgbmF2cG9wLmlkTnVtYmVyLCBuYXZwb3AsIGQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2hvd0FQSVByZXZpZXcocXVlcnlUeXBlLCBodG1sR2VuZXJhdG9yKGFydGljbGUsIGQsIG5hdnBvcCksIG5hdnBvcC5pZE51bWJlciwgbmF2cG9wLCBkKTtcblx0XHR9O1xuXHRcdGNvbnN0IGdvID0gKCkgPT4ge1xuXHRcdFx0Z2V0UGFnZVdpdGhDYWNoaW5nKHVybCwgY2FsbGJhY2ssIG5hdnBvcCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdGlmIChuYXZwb3AudmlzaWJsZSB8fCAhZ2V0VmFsdWVPZigncG9wdXBMYXp5RG93bmxvYWRzJykpIHtcblx0XHRcdGdvKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5hdnBvcC5hZGRIb29rKGdvLCAndW5oaWRlJywgJ2JlZm9yZScsIGBET1dOTE9BRF8ke3F1ZXJ5VHlwZX1fUVVFUllfREFUQWApO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgbGlua0xpc3QgPSAobGlzdCkgPT4ge1xuXHRcdGxpc3Quc29ydCgoeCwgeSkgPT4ge1xuXHRcdFx0cmV0dXJuIHggPT09IHkgPyAwIDogeCA8IHkgPyAtMSA6IDE7XG5cdFx0fSk7XG5cdFx0Y29uc3QgYnVmID0gW107XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGxpc3QpIHtcblx0XHRcdGJ1Zi5wdXNoKFxuXHRcdFx0XHR3aWtpTGluayh7XG5cdFx0XHRcdFx0YXJ0aWNsZTogbmV3IFRpdGxlKGVsZW1lbnQpLFxuXHRcdFx0XHRcdHRleHQ6IGVsZW1lbnQuc3BsaXQoJyAnKS5qb2luKCcmbmJzcDsnKSxcblx0XHRcdFx0XHRhY3Rpb246ICd2aWV3Jyxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBidWYuam9pbignLCAnKTtcblx0fTtcblx0Y29uc3QgZ2V0VGltZU9mZnNldCA9ICgpID0+IHtcblx0XHRjb25zdCB0eiA9IG13LnVzZXIub3B0aW9ucy5nZXQoJ3RpbWVjb3JyZWN0aW9uJyk7XG5cdFx0aWYgKHR6ICYmIHR6LmluY2x1ZGVzKCd8JykpIHtcblx0XHRcdC8vIE5ldyBmb3JtYXRcblx0XHRcdHJldHVybiBOdW1iZXIucGFyc2VJbnQodHouc3BsaXQoJ3wnKVsxXSwgMTApO1xuXHRcdH1cblx0XHRyZXR1cm4gMDtcblx0fTtcblx0Y29uc3QgZ2V0VGltZVpvbmUgPSAoKSA9PiB7XG5cdFx0aWYgKCFwZy51c2VyLnRpbWVab25lKSB7XG5cdFx0XHRjb25zdCB0eiA9IG13LnVzZXIub3B0aW9ucy5nZXQoJ3RpbWVjb3JyZWN0aW9uJyk7XG5cdFx0XHRwZy51c2VyLnRpbWVab25lID0gJ1VUQyc7XG5cdFx0XHRpZiAodHopIHtcblx0XHRcdFx0Y29uc3QgdHpDb21wb25lbnRzID0gdHouc3BsaXQoJ3wnKTtcblx0XHRcdFx0aWYgKHR6Q29tcG9uZW50cy5sZW5ndGggPT09IDMgJiYgdHpDb21wb25lbnRzWzBdID09PSAnWm9uZUluZm8nKSB7XG5cdFx0XHRcdFx0WywgLCBwZy51c2VyLnRpbWVab25lXSA9IHR6Q29tcG9uZW50cztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlcnJsb2coYFVuZXhwZWN0ZWQgdGltZXpvbmUgaW5mb3JtYXRpb246ICR7dHp9YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHBnLnVzZXIudGltZVpvbmU7XG5cdH07XG5cdC8qKlxuXHQgKiBTaG91bGQgd2UgdXNlIGFuIG9mZnNldCBvciBjYW4gd2UgdXNlIHByb3BlciB0aW1lem9uZXNcblx0ICovXG5cdGNvbnN0IHVzZVRpbWVPZmZzZXQgPSAoKSA9PiB7XG5cdFx0aWYgKEludGwuRGF0ZVRpbWVGb3JtYXQucHJvdG90eXBlLmZvcm1hdFRvUGFydHMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly8gSUUgMTFcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCB0eiA9IG13LnVzZXIub3B0aW9ucy5nZXQoJ3RpbWVjb3JyZWN0aW9uJyk7XG5cdFx0aWYgKHR6ICYmICF0ei5pbmNsdWRlcygnWm9uZUluZm98JykpIHtcblx0XHRcdC8vIFN5c3RlbXwgRGVmYXVsdCBzeXN0ZW0gdGltZSwgZGVmYXVsdCBmb3IgdXNlcnMgd2hvIGRpZG4ndCBjb25maWd1cmUgdGltZXpvbmVcblx0XHRcdC8vIE9mZnNldHwgTWFudWFsIGRlZmluZWQgb2Zmc2V0IGJ5IHVzZXJcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdC8qKlxuXHQgKiBBcnJheSBvZiBsb2NhbGVzIGZvciB0aGUgcHVycG9zZSBvZiBqYXZhc2NyaXB0IGxvY2FsZSBiYXNlZCBmb3JtYXR0aW5nXG5cdCAqIEZpbHRlcnMgZG93biB0byB0aG9zZSBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXIuIEVtcHR5IFtdID09PSBTeXN0ZW0ncyBkZWZhdWx0IGxvY2FsZVxuXHQgKi9cblx0Y29uc3QgZ2V0TG9jYWxlcyA9ICgpID0+IHtcblx0XHRpZiAoIXBnLnVzZXIubG9jYWxlcykge1xuXHRcdFx0bGV0IHVzZXJMYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5nZXRBdHRyaWJ1dGUoJ2xhbmcnKTsgLy8gbWFrZSBzdXJlIHdlIGhhdmUgSFRNTCBsb2NhbGVcblx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cExvY2FsZScpKSB7XG5cdFx0XHRcdHVzZXJMYW5ndWFnZSA9IGdldFZhbHVlT2YoJ3BvcHVwTG9jYWxlJyk7XG5cdFx0XHR9IGVsc2UgaWYgKHVzZXJMYW5ndWFnZSA9PT0gJ2VuJykge1xuXHRcdFx0XHQvLyBlbi53cCB0ZW5kcyB0byB0cmVhdCB0aGlzIGFzIGludGVybmF0aW9uYWwgZW5nbGlzaCAvIHVuc3BlY2lmaWVkXG5cdFx0XHRcdC8vIGJ1dCB3ZSBoYXZlIG1vcmUgc3BlY2lmaWMgc2V0dGluZ3MgaW4gdXNlciBvcHRpb25zXG5cdFx0XHRcdHVzZXJMYW5ndWFnZSA9IGdldE1XRGF0ZUZvcm1hdCgpID09PSAnbWR5JyA/ICdlbi1VUycgOiAnZW4tR0InO1xuXHRcdFx0fVxuXHRcdFx0cGcudXNlci5sb2NhbGVzID0gSW50bC5EYXRlVGltZUZvcm1hdC5zdXBwb3J0ZWRMb2NhbGVzT2YoW3VzZXJMYW5ndWFnZSwgbmF2aWdhdG9yLmxhbmd1YWdlXSk7XG5cdFx0fVxuXHRcdHJldHVybiBwZy51c2VyLmxvY2FsZXM7XG5cdH07XG5cdC8qKlxuXHQgKiBSZXRyaWV2ZSBjb25maWd1cmVkIE1XIGRhdGUgZm9ybWF0IGZvciB0aGlzIHVzZXJcblx0ICogVGhlc2UgY2FuIGJlXG5cdCAqIGRlZmF1bHRcblx0ICogZG15OiB0aW1lLCBkbXlcblx0ICogbWR5OiB0aW1lLCBtZHlcblx0ICogeW1kOiB0aW1lLCB5bWRcblx0ICogZG15dDogZG15LCB0aW1lXG5cdCAqIGRteXRzOiBkbXksIHRpbWUgKyBzZWNvbmRzXG5cdCAqIElTTyA4NjAxOiBZWVlZLU1NLUREVGhoOm1tOnNzIChsb2NhbCB0aW1lKVxuXHQgKlxuXHQgKiBUaGlzIGlzbid0IHRvbyB1c2VmdWwgZm9yIHVzLCBhcyBKUyBkb2Vzbid0IGhhdmUgZm9ybWF0dGVycyB0byBtYXRjaCB0aGVzZSBwcml2YXRlIHNwZWNpZmllcnNcblx0ICovXG5cdGNvbnN0IGdldE1XRGF0ZUZvcm1hdCA9ICgpID0+IHtcblx0XHRyZXR1cm4gbXcudXNlci5vcHRpb25zLmdldCgnZGF0ZScpO1xuXHR9O1xuXHQvKipcblx0ICogQ3JlYXRlcyBhIEhUTUwgdGFibGUgdGhhdCdzIHNob3duIGluIHRoZSBoaXN0b3J5IGFuZCB1c2VyLWNvbnRyaWJzIHBvcHVwcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFydGljbGVcblx0ICogQHBhcmFtIHtPYmplY3RbXX0gaCAtIGEgbGlzdCBvZiByZXZpc2lvbnMsIHJldHVybmVkIGZyb20gdGhlIEFQSVxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IHJlYWxseUNvbnRyaWJzIC0gdHJ1ZSBvbmx5IGlmIHdlJ3JlIGRpc3BsYXlpbmcgdXNlciBjb250cmlidXRpb25zXG5cdCAqL1xuXHRjb25zdCBlZGl0UHJldmlld1RhYmxlID0gKGFydGljbGUsIGgsIHJlYWxseUNvbnRyaWJzKSA9PiB7XG5cdFx0bGV0IGh0bWwgPSBbJzx0YWJsZT4nXTtcblx0XHRsZXQgZGF5O1xuXHRcdGxldCBjdXJhcnQgPSBhcnRpY2xlO1xuXHRcdGxldCBwYWdlO1xuXHRcdGxldCBtYWtlRmlyc3RDb2x1bW5MaW5rcztcblx0XHRpZiAocmVhbGx5Q29udHJpYnMpIHtcblx0XHRcdC8vIFdlJ3JlIHNob3dpbmcgdXNlciBjb250cmlidXRpb25zLCBzbyBtYWtlIChkaWZmIHwgaGlzdCkgbGlua3Ncblx0XHRcdG1ha2VGaXJzdENvbHVtbkxpbmtzID0gKGN1cnJlbnRSZXZpc2lvbikgPT4ge1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gJygnO1xuXHRcdFx0XHRyZXN1bHQgKz1cblx0XHRcdFx0XHRgPGEgaHJlZj1cIiR7cGcud2lraS50aXRsZWJhc2V9JHtuZXcgVGl0bGUoY3VycmVudFJldmlzaW9uLnRpdGxlKS51cmxTdHJpbmcoKX0mZGlmZj1wcmV2YCArXG5cdFx0XHRcdFx0YCZvbGRpZD0ke2N1cnJlbnRSZXZpc2lvbi5yZXZpZH1cIj4ke3BvcHVwU3RyaW5nKCdkaWZmJyl9PC9hPmA7XG5cdFx0XHRcdHJlc3VsdCArPSAnJm5ic3A7fCZuYnNwOyc7XG5cdFx0XHRcdHJlc3VsdCArPSBgPGEgaHJlZj1cIiR7cGcud2lraS50aXRsZWJhc2V9JHtuZXcgVGl0bGUoXG5cdFx0XHRcdFx0Y3VycmVudFJldmlzaW9uLnRpdGxlXG5cdFx0XHRcdCkudXJsU3RyaW5nKCl9JmFjdGlvbj1oaXN0b3J5XCI+JHtwb3B1cFN0cmluZygnaGlzdCcpfTwvYT5gO1xuXHRcdFx0XHRyZXN1bHQgKz0gJyknO1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gSXQncyBhIHJlZ3VsYXIgaGlzdG9yeSBwYWdlLCBzbyBtYWtlIChjdXIgfCBsYXN0KSBsaW5rc1xuXHRcdFx0Y29uc3QgZmlyc3RSZXZpZCA9IGhbMF0ucmV2aWQ7XG5cdFx0XHRtYWtlRmlyc3RDb2x1bW5MaW5rcyA9IChjdXJyZW50UmV2aXNpb24pID0+IHtcblx0XHRcdFx0bGV0IHJlc3VsdCA9ICcoJztcblx0XHRcdFx0cmVzdWx0ICs9IGA8YSBocmVmPVwiJHtwZy53aWtpLnRpdGxlYmFzZX0ke25ldyBUaXRsZShjdXJhcnQpLnVybFN0cmluZygpfSZkaWZmPSR7Zmlyc3RSZXZpZH0mb2xkaWQ9JHtcblx0XHRcdFx0XHRjdXJyZW50UmV2aXNpb24ucmV2aWRcblx0XHRcdFx0fVwiPiR7cG9wdXBTdHJpbmcoJ2N1cicpfTwvYT5gO1xuXHRcdFx0XHRyZXN1bHQgKz0gJyZuYnNwO3wmbmJzcDsnO1xuXHRcdFx0XHRyZXN1bHQgKz0gYDxhIGhyZWY9XCIke3BnLndpa2kudGl0bGViYXNlfSR7bmV3IFRpdGxlKGN1cmFydCkudXJsU3RyaW5nKCl9JmRpZmY9cHJldiZvbGRpZD0ke1xuXHRcdFx0XHRcdGN1cnJlbnRSZXZpc2lvbi5yZXZpZFxuXHRcdFx0XHR9XCI+JHtwb3B1cFN0cmluZygnbGFzdCcpfTwvYT5gO1xuXHRcdFx0XHRyZXN1bHQgKz0gJyknO1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBbaSwgZWxlbWVudF0gb2YgaC5lbnRyaWVzKCkpIHtcblx0XHRcdGlmIChyZWFsbHlDb250cmlicykge1xuXHRcdFx0XHRwYWdlID0gZWxlbWVudC50aXRsZTtcblx0XHRcdFx0Y3VyYXJ0ID0gbmV3IFRpdGxlKHBhZ2UpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbWlub3IgPSBlbGVtZW50Lm1pbm9yID8gJzxiPm0gPC9iPicgOiAnJztcblx0XHRcdGNvbnN0IGVkaXREYXRlID0gbmV3IERhdGUoZWxlbWVudC50aW1lc3RhbXApO1xuXHRcdFx0bGV0IHRoaXNEYXkgPSBmb3JtYXR0ZWREYXRlKGVkaXREYXRlKTtcblx0XHRcdGNvbnN0IHRoaXNUaW1lID0gZm9ybWF0dGVkVGltZShlZGl0RGF0ZSk7XG5cdFx0XHRpZiAodGhpc0RheSA9PT0gZGF5KSB7XG5cdFx0XHRcdHRoaXNEYXkgPSAnJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRheSA9IHRoaXNEYXk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpc0RheSkge1xuXHRcdFx0XHRodG1sLnB1c2goYDx0cj48dGQgY29sc3Bhbj0zPjxzcGFuIGNsYXNzPVwicG9wdXBfaGlzdG9yeV9kYXRlXCI+JHt0aGlzRGF5fTwvc3Bhbj48L3RkPjwvdHI+YCk7XG5cdFx0XHR9XG5cdFx0XHRodG1sLnB1c2goXG5cdFx0XHRcdGA8dHIgY2xhc3M9XCJwb3B1cF9oaXN0b3J5X3Jvd18ke2kgJSAyID8gJ29kZCcgOiAnZXZlbid9XCI+YCxcblx0XHRcdFx0YDx0ZD4ke21ha2VGaXJzdENvbHVtbkxpbmtzKGVsZW1lbnQpfTwvdGQ+YCxcblx0XHRcdFx0Jzx0ZD4nICtcblx0XHRcdFx0XHRgPGEgaHJlZj1cIiR7cGcud2lraS50aXRsZWJhc2V9JHtuZXcgVGl0bGUoY3VyYXJ0KS51cmxTdHJpbmcoKX0mb2xkaWQ9JHtcblx0XHRcdFx0XHRcdGVsZW1lbnQucmV2aWRcblx0XHRcdFx0XHR9XCI+JHt0aGlzVGltZX08L2E+PC90ZD5gXG5cdFx0XHQpO1xuXHRcdFx0bGV0IGNvbDN1cmwgPSAnJztcblx0XHRcdGxldCBjb2wzdHh0ID0gJyc7XG5cdFx0XHRpZiAocmVhbGx5Q29udHJpYnMpIHtcblx0XHRcdFx0Y29sM3VybCA9IHBnLndpa2kudGl0bGViYXNlICsgY3VyYXJ0LnVybFN0cmluZygpO1xuXHRcdFx0XHRjb2wzdHh0ID0gcGcuZXNjYXBlUXVvdGVzSFRNTChwYWdlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHt1c2VyfSA9IGVsZW1lbnQ7XG5cdFx0XHRcdGlmIChlbGVtZW50LnVzZXJoaWRkZW4pIHtcblx0XHRcdFx0XHRjb2wzdXJsID0gZ2V0VmFsdWVPZigncG9wdXBSZXZEZWxVcmwnKTtcblx0XHRcdFx0XHRjb2wzdHh0ID0gcGcuZXNjYXBlUXVvdGVzSFRNTChwb3B1cFN0cmluZygncmV2ZGVsJykpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbDN1cmwgPSBwZy5yZS5pcFVzZXIudGVzdCh1c2VyKVxuXHRcdFx0XHRcdFx0PyBgJHtcblx0XHRcdFx0XHRcdFx0XHRwZy53aWtpLnRpdGxlYmFzZSArIG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zU3BlY2lhbElkXVxuXHRcdFx0XHRcdFx0XHR9OkNvbnRyaWJ1dGlvbnMmdGFyZ2V0PSR7bmV3IFRpdGxlKHVzZXIpLnVybFN0cmluZygpfWBcblx0XHRcdFx0XHRcdDogYCR7cGcud2lraS50aXRsZWJhc2UgKyBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc1VzZXJJZF19OiR7bmV3IFRpdGxlKFxuXHRcdFx0XHRcdFx0XHRcdHVzZXJcblx0XHRcdFx0XHRcdFx0KS51cmxTdHJpbmcoKX1gO1xuXHRcdFx0XHRcdGNvbDN0eHQgPSBwZy5lc2NhcGVRdW90ZXNIVE1MKHVzZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRodG1sLnB1c2goYDx0ZD4ke3JlYWxseUNvbnRyaWJzID8gbWlub3IgOiAnJ308YSBocmVmPVwiJHtjb2wzdXJsfVwiPiR7Y29sM3R4dH08L2E+PC90ZD5gKTtcblx0XHRcdGxldCBjb21tZW50ID0gJyc7XG5cdFx0XHRjb25zdCBjID0gZWxlbWVudC5jb21tZW50IHx8IGVsZW1lbnQuY29udGVudDtcblx0XHRcdGlmIChjKSB7XG5cdFx0XHRcdGNvbW1lbnQgPSBuZXcgUHJldmlld21ha2VyKGMsIG5ldyBUaXRsZShjdXJhcnQpLnRvVXJsKCkpLmVkaXRTdW1tYXJ5UHJldmlldygpO1xuXHRcdFx0fSBlbHNlIGlmIChlbGVtZW50LmNvbW1lbnRoaWRkZW4pIHtcblx0XHRcdFx0Y29tbWVudCA9IHBvcHVwU3RyaW5nKCdyZXZkZWwnKTtcblx0XHRcdH1cblx0XHRcdGh0bWwucHVzaChgPHRkPiR7cmVhbGx5Q29udHJpYnMgPyAnJyA6IG1pbm9yfSR7Y29tbWVudH08L3RkPmAsICc8L3RyPicpO1xuXHRcdFx0aHRtbCA9IFtodG1sLmpvaW4oJycpXTtcblx0XHR9XG5cdFx0aHRtbC5wdXNoKCc8L3RhYmxlPicpO1xuXHRcdHJldHVybiBodG1sLmpvaW4oJycpO1xuXHR9O1xuXHRjb25zdCBhZGp1c3REYXRlID0gKGQsIG9mZnNldCkgPT4ge1xuXHRcdC8vIG9mZnNldCBpcyBpbiBtaW51dGVzXG5cdFx0Y29uc3QgbyA9IG9mZnNldCAqIDYwICogMTAwMDtcblx0XHRyZXR1cm4gbmV3IERhdGUoK2QgKyBvKTtcblx0fTtcblx0LyoqXG5cdCAqIFRoaXMgcmVsaWVzIG9uIHRoZSBEYXRlIHBhcnNlciB1bmRlcnN0YW5kaW5nIGVuLVVTIGRhdGVzLFxuXHQgKiB3aGljaCBpcyBwcmV0dHkgc2FmZSBhc3N1bXB0aW9uLCBidXQgbm90IHBlcmZlY3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGltZVpvbmVcblx0ICovXG5cdGNvbnN0IGNvbnZlcnRUaW1lWm9uZSA9IChkYXRlLCB0aW1lWm9uZSkgPT4ge1xuXHRcdHJldHVybiBuZXcgRGF0ZShkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHt0aW1lWm9uZX0pKTtcblx0fTtcblx0Y29uc3QgZm9ybWF0dGVkRGF0ZVRpbWUgPSAoZGF0ZSkgPT4ge1xuXHRcdC8vIGZhbGxiYWNrIGZvciBJRTExIGFuZCB1bmtub3duIHRpbWV6b25lc1xuXHRcdGlmICh1c2VUaW1lT2Zmc2V0KCkpIHtcblx0XHRcdHJldHVybiBgJHtmb3JtYXR0ZWREYXRlKGRhdGUpfSAke2Zvcm1hdHRlZFRpbWUoZGF0ZSl9YDtcblx0XHR9XG5cdFx0aWYgKGdldE1XRGF0ZUZvcm1hdCgpID09PSAnSVNPIDg2MDEnKSB7XG5cdFx0XHRjb25zdCBkMiA9IGNvbnZlcnRUaW1lWm9uZShkYXRlLCBnZXRUaW1lWm9uZSgpKTtcblx0XHRcdHJldHVybiBgJHttYXAoemVyb0ZpbGwsIFtkMi5nZXRGdWxsWWVhcigpLCBkMi5nZXRNb250aCgpICsgMSwgZDIuZ2V0RGF0ZSgpXSkuam9pbignLScpfVQke21hcCh6ZXJvRmlsbCwgW1xuXHRcdFx0XHRkMi5nZXRIb3VycygpLFxuXHRcdFx0XHRkMi5nZXRNaW51dGVzKCksXG5cdFx0XHRcdGQyLmdldFNlY29uZHMoKSxcblx0XHRcdF0pLmpvaW4oJzonKX1gO1xuXHRcdH1cblx0XHRjb25zdCBvcHRpb25zID0gZ2V0VmFsdWVPZigncG9wdXBEYXRlVGltZUZvcm1hdHRlck9wdGlvbnMnKTtcblx0XHRvcHRpb25zLnRpbWVab25lID0gZ2V0VGltZVpvbmUoKTtcblx0XHRyZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZyhnZXRMb2NhbGVzKCksIG9wdGlvbnMpO1xuXHR9O1xuXHRjb25zdCBmb3JtYXR0ZWREYXRlID0gKGRhdGUpID0+IHtcblx0XHRsZXQgZDI7XG5cdFx0Ly8gZmFsbGJhY2sgZm9yIElFMTEgYW5kIHVua25vd24gdGltZXpvbmVzXG5cdFx0aWYgKHVzZVRpbWVPZmZzZXQoKSkge1xuXHRcdFx0Ly8gd2UgYWRqdXN0IHRoZSBVVEMgdGltZSwgc28gd2UgcHJpbnQgdGhlIGFkanVzdGVkIFVUQywgYnV0IG5vdCByZWFsbHkgVVRDIHZhbHVlc1xuXHRcdFx0ZDIgPSBhZGp1c3REYXRlKGRhdGUsIGdldFRpbWVPZmZzZXQoKSk7XG5cdFx0XHRyZXR1cm4gbWFwKHplcm9GaWxsLCBbZDIuZ2V0VVRDRnVsbFllYXIoKSwgZDIuZ2V0VVRDTW9udGgoKSArIDEsIGQyLmdldFVUQ0RhdGUoKV0pLmpvaW4oJy0nKTtcblx0XHR9XG5cdFx0aWYgKGdldE1XRGF0ZUZvcm1hdCgpID09PSAnSVNPIDg2MDEnKSB7XG5cdFx0XHRkMiA9IGNvbnZlcnRUaW1lWm9uZShkYXRlLCBnZXRUaW1lWm9uZSgpKTtcblx0XHRcdHJldHVybiBtYXAoemVyb0ZpbGwsIFtkMi5nZXRGdWxsWWVhcigpLCBkMi5nZXRNb250aCgpICsgMSwgZDIuZ2V0RGF0ZSgpXSkuam9pbignLScpO1xuXHRcdH1cblx0XHRjb25zdCBvcHRpb25zID0gZ2V0VmFsdWVPZigncG9wdXBEYXRlRm9ybWF0dGVyT3B0aW9ucycpO1xuXHRcdG9wdGlvbnMudGltZVpvbmUgPSBnZXRUaW1lWm9uZSgpO1xuXHRcdHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhnZXRMb2NhbGVzKCksIG9wdGlvbnMpO1xuXHR9O1xuXHRjb25zdCBmb3JtYXR0ZWRUaW1lID0gKGRhdGUpID0+IHtcblx0XHRsZXQgZDI7XG5cdFx0Ly8gZmFsbGJhY2sgZm9yIElFMTEgYW5kIHVua25vd24gdGltZXpvbmVzXG5cdFx0aWYgKHVzZVRpbWVPZmZzZXQoKSkge1xuXHRcdFx0Ly8gd2UgYWRqdXN0IHRoZSBVVEMgdGltZSwgc28gd2UgcHJpbnQgdGhlIGFkanVzdGVkIFVUQywgYnV0IG5vdCByZWFsbHkgVVRDIHZhbHVlc1xuXHRcdFx0ZDIgPSBhZGp1c3REYXRlKGRhdGUsIGdldFRpbWVPZmZzZXQoKSk7XG5cdFx0XHRyZXR1cm4gbWFwKHplcm9GaWxsLCBbZDIuZ2V0VVRDSG91cnMoKSwgZDIuZ2V0VVRDTWludXRlcygpLCBkMi5nZXRVVENTZWNvbmRzKCldKS5qb2luKCc6Jyk7XG5cdFx0fVxuXHRcdGlmIChnZXRNV0RhdGVGb3JtYXQoKSA9PT0gJ0lTTyA4NjAxJykge1xuXHRcdFx0ZDIgPSBjb252ZXJ0VGltZVpvbmUoZGF0ZSwgZ2V0VGltZVpvbmUoKSk7XG5cdFx0XHRyZXR1cm4gbWFwKHplcm9GaWxsLCBbZDIuZ2V0SG91cnMoKSwgZDIuZ2V0TWludXRlcygpLCBkMi5nZXRTZWNvbmRzKCldKS5qb2luKCc6Jyk7XG5cdFx0fVxuXHRcdGNvbnN0IG9wdGlvbnMgPSBnZXRWYWx1ZU9mKCdwb3B1cFRpbWVGb3JtYXR0ZXJPcHRpb25zJyk7XG5cdFx0b3B0aW9ucy50aW1lWm9uZSA9IGdldFRpbWVab25lKCk7XG5cdFx0cmV0dXJuIGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKGdldExvY2FsZXMoKSwgb3B0aW9ucyk7XG5cdH07XG5cdC8vIEdldCB0aGUgcHJvcGVyIGdyb3VwbmFtZXMgZm9yIHRoZSB0ZWNobmljYWxncm91cHNcblx0Y29uc3QgZmV0Y2hVc2VyR3JvdXBOYW1lcyA9ICh1c2VyaW5mb1Jlc3BvbnNlKSA9PiB7XG5cdFx0Y29uc3QgcXVlcnlPYmogPSBnZXRKc09iaih1c2VyaW5mb1Jlc3BvbnNlKS5xdWVyeTtcblx0XHRjb25zdCB1c2VyID0gYW55Q2hpbGQocXVlcnlPYmoudXNlcnMpO1xuXHRcdGNvbnN0IG1lc3NhZ2VzID0gW107XG5cdFx0aWYgKHVzZXIuZ3JvdXBzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGdyb3VwTmFtZSBvZiB1c2VyLmdyb3Vwcykge1xuXHRcdFx0XHRpZiAoIVsnKicsICd1c2VyJywgJ2F1dG9jb25maXJtZWQnXS5pbmNsdWRlcyhncm91cE5hbWUpKSB7XG5cdFx0XHRcdFx0bWVzc2FnZXMucHVzaChgZ3JvdXAtJHtncm91cE5hbWV9LW1lbWJlcmApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChxdWVyeU9iai5nbG9iYWx1c2VyaW5mbyAmJiBxdWVyeU9iai5nbG9iYWx1c2VyaW5mby5ncm91cHMpIHtcblx0XHRcdGZvciAoY29uc3QgZ3JvdXBOYW1lIG9mIHF1ZXJ5T2JqLmdsb2JhbHVzZXJpbmZvLmdyb3Vwcykge1xuXHRcdFx0XHRtZXNzYWdlcy5wdXNoKGBncm91cC0ke2dyb3VwTmFtZX0tbWVtYmVyYCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBnZXRNd0FwaSgpLmxvYWRNZXNzYWdlc0lmTWlzc2luZyhtZXNzYWdlcyk7XG5cdH07XG5cdGNvbnN0IHNob3dBUElQcmV2aWV3ID0gKHF1ZXJ5VHlwZSwgaHRtbCwgaWQsIG5hdnBvcCwgZG93bmxvYWQpID0+IHtcblx0XHQvLyBESjogZG9uZVxuXHRcdGxldCB0YXJnZXQgPSAncG9wdXBQcmV2aWV3Jztcblx0XHRjb21wbGV0ZWROYXZwb3BUYXNrKG5hdnBvcCk7XG5cdFx0c3dpdGNoIChxdWVyeVR5cGUpIHtcblx0XHRcdGNhc2UgJ2ltYWdlbGlua3MnOlxuXHRcdFx0Y2FzZSAnY2F0ZWdvcnknOlxuXHRcdFx0XHR0YXJnZXQgPSAncG9wdXBQb3N0UHJldmlldyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndXNlcmluZm8nOlxuXHRcdFx0XHR0YXJnZXQgPSAncG9wdXBVc2VyRGF0YSc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmV2aXNpb24nOlxuXHRcdFx0XHRpbnNlcnRQcmV2aWV3KGRvd25sb2FkKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzZXRQb3B1cFRpcHNBbmRIVE1MKGh0bWwsIHRhcmdldCwgaWQpO1xuXHR9O1xuXHRjb25zdCBBUElyZXZpc2lvblByZXZpZXdIVE1MID0gKF9hcnRpY2xlLCBkb3dubG9hZCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBqc09iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpO1xuXHRcdFx0Y29uc3QgcGFnZSA9IGFueUNoaWxkKGpzT2JqLnF1ZXJ5LnBhZ2VzKTtcblx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0Ly8gVE9ETyB3ZSBuZWVkIHRvIGZpeCB0aGlzIHByb3BlciBsYXRlciBvblxuXHRcdFx0XHRkb3dubG9hZC5vd25lciA9IG51bGw7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGNvbnRlbnQgPVxuXHRcdFx0XHRwYWdlICYmIHBhZ2UucmV2aXNpb25zICYmIHBhZ2UucmV2aXNpb25zWzBdICYmIHBhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnRcblx0XHRcdFx0XHQ/IHBhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnRcblx0XHRcdFx0XHQ6IG51bGw7XG5cdFx0XHRpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGRvd25sb2FkLmRhdGEgPSBjb250ZW50O1xuXHRcdFx0XHRkb3dubG9hZC5sYXN0TW9kaWZpZWQgPSBuZXcgRGF0ZShwYWdlLnJldmlzaW9uc1swXS50aW1lc3RhbXApO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICdSZXZpc2lvbiBwcmV2aWV3IGZhaWxlZCA6KCc7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBBUEliYWNrbGlua3NQcmV2aWV3SFRNTCA9IChfYXJ0aWNsZSwgZG93bmxvYWQgLyogLCBuYXZwb3AgKi8pID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNPYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IGxpc3QgPSBqc09iai5xdWVyeS5iYWNrbGlua3M7XG5cdFx0XHRsZXQgaHRtbCA9IFtdO1xuXHRcdFx0aWYgKCFsaXN0KSB7XG5cdFx0XHRcdHJldHVybiBwb3B1cFN0cmluZygnTm8gYmFja2xpbmtzIGZvdW5kJyk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0XHRjb25zdCB0ID0gbmV3IFRpdGxlKGVsZW1lbnQudGl0bGUpO1xuXHRcdFx0XHRodG1sLnB1c2goYDxhIGhyZWY9XCIke3BnLndpa2kudGl0bGViYXNlfSR7dC51cmxTdHJpbmcoKX1cIj4ke3QudG9TdHJpbmcoKS5lbnRpZnkoKX08L2E+YCk7XG5cdFx0XHR9XG5cdFx0XHRodG1sID0gaHRtbC5qb2luKCcsICcpO1xuXHRcdFx0aWYgKGpzT2JqLmNvbnRpbnVlICYmIGpzT2JqLmNvbnRpbnVlLmJsY29udGludWUpIHtcblx0XHRcdFx0aHRtbCArPSBwb3B1cFN0cmluZygnIGFuZCBtb3JlJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gaHRtbDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnYmFja2xpbmtzUHJldmlld0hUTUwgd2VudCB3b25reSc7XG5cdFx0fVxuXHR9O1xuXHRwZy5mbi5BUElzaGFyZWRJbWFnZVBhZ2VQcmV2aWV3SFRNTCA9IChvYmopID0+IHtcblx0XHRsb2coJ0FQSXNoYXJlZEltYWdlUGFnZVByZXZpZXdIVE1MJyk7XG5cdFx0Y29uc3QgcG9wdXBpZCA9IG9iai5yZXF1ZXN0aWQ7XG5cdFx0aWYgKG9iai5xdWVyeSAmJiBvYmoucXVlcnkucGFnZXMpIHtcblx0XHRcdGNvbnN0IHBhZ2UgPSBhbnlDaGlsZChvYmoucXVlcnkucGFnZXMpO1xuXHRcdFx0Y29uc3QgY29udGVudCA9XG5cdFx0XHRcdHBhZ2UgJiYgcGFnZS5yZXZpc2lvbnMgJiYgcGFnZS5yZXZpc2lvbnNbMF0uY29udGVudG1vZGVsID09PSAnd2lraXRleHQnXG5cdFx0XHRcdFx0PyBwYWdlLnJldmlzaW9uc1swXS5jb250ZW50XG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0aWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyAmJiBwZyAmJiBwZy5jdXJyZW50ICYmIHBnLmN1cnJlbnQubGluayAmJiBwZy5jdXJyZW50LmxpbmsubmF2cG9wdXApIHtcblx0XHRcdFx0LyogTm90IGVudGlyZWx5IHNhZmUsIGJ1dCB0aGUgYmVzdCB3ZSBjYW4gZG8gKi9cblx0XHRcdFx0Y29uc3QgcCA9IG5ldyBQcmV2aWV3bWFrZXIoY29udGVudCwgcGcuY3VycmVudC5saW5rLm5hdnBvcHVwLmFydGljbGUsIHBnLmN1cnJlbnQubGluay5uYXZwb3B1cCk7XG5cdFx0XHRcdHAubWFrZVByZXZpZXcoKTtcblx0XHRcdFx0c2V0UG9wdXBIVE1MKHAuaHRtbCwgJ3BvcHVwU2Vjb25kUHJldmlldycsIHBvcHVwaWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgQVBJaW1hZ2VwYWdlUHJldmlld0hUTUwgPSAoYXJ0aWNsZSwgZG93bmxvYWQsIG5hdnBvcCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBqc09iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpO1xuXHRcdFx0Y29uc3QgcGFnZSA9IGFueUNoaWxkKGpzT2JqLnF1ZXJ5LnBhZ2VzKTtcblx0XHRcdGNvbnN0IGNvbnRlbnQgPVxuXHRcdFx0XHRwYWdlICYmIHBhZ2UucmV2aXNpb25zICYmIHBhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnRtb2RlbCA9PT0gJ3dpa2l0ZXh0J1xuXHRcdFx0XHRcdD8gcGFnZS5yZXZpc2lvbnNbMF0uY29udGVudFxuXHRcdFx0XHRcdDogbnVsbDtcblx0XHRcdGxldCByZXQgPSAnJztcblx0XHRcdGxldCBhbHQgPSAnJztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdFt7YWx0fV0gPSBuYXZwb3AucGFyZW50QW5jaG9yLmNoaWxkTm9kZXM7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdH1cblx0XHRcdGlmIChhbHQpIHtcblx0XHRcdFx0cmV0ID0gYCR7cmV0fTxocj48Yj4ke3BvcHVwU3RyaW5nKCdBbHQgdGV4dDonKX08L2I+ICR7cGcuZXNjYXBlUXVvdGVzSFRNTChhbHQpfWA7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGNvbnN0IHAgPSBwcmVwUHJldmlld21ha2VyKGNvbnRlbnQsIGFydGljbGUsIG5hdnBvcCk7XG5cdFx0XHRcdHAubWFrZVByZXZpZXcoKTtcblx0XHRcdFx0aWYgKHAuaHRtbCkge1xuXHRcdFx0XHRcdHJldCArPSBgPGhyPiR7cC5odG1sfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwU3VtbWFyeURhdGEnKSkge1xuXHRcdFx0XHRcdGNvbnN0IGluZm8gPSBnZXRQYWdlSW5mbyhjb250ZW50LCBkb3dubG9hZCk7XG5cdFx0XHRcdFx0bG9nKGluZm8pO1xuXHRcdFx0XHRcdHNldFBvcHVwVHJhaWxlcihpbmZvLCBuYXZwb3AuaWROdW1iZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFnZSAmJiBwYWdlLmltYWdlcmVwb3NpdG9yeSA9PT0gJ3NoYXJlZCcpIHtcblx0XHRcdFx0Y29uc3QgYXJ0ID0gbmV3IFRpdGxlKGFydGljbGUpO1xuXHRcdFx0XHRjb25zdCBlbmNhcnQgPSBlbmNvZGVVUklDb21wb25lbnQoYEZpbGU6JHthcnQuc3RyaXBOYW1lc3BhY2UoKX1gKTtcblx0XHRcdFx0Y29uc3Qgc2hhcmVkX3VybCA9XG5cdFx0XHRcdFx0YCR7cGcud2lraS5hcGljb21tb25zYmFzZX0/Zm9ybWF0PWpzb24mZm9ybWF0dmVyc2lvbj0yYCArXG5cdFx0XHRcdFx0JyZjYWxsYmFjaz1wZy5mbi5BUElzaGFyZWRJbWFnZVBhZ2VQcmV2aWV3SFRNTCcgK1xuXHRcdFx0XHRcdGAmcmVxdWVzdGlkPSR7bmF2cG9wLmlkTnVtYmVyfSZhY3Rpb249cXVlcnkmcHJvcD1yZXZpc2lvbnMmcnZwcm9wPWNvbnRlbnQmdGl0bGVzPSR7ZW5jYXJ0fWA7XG5cdFx0XHRcdHJldCA9IGAke3JldH08aHI+JHtwb3B1cFN0cmluZygnSW1hZ2UgZnJvbSBDb21tb25zJyl9OiA8YSBocmVmPVwiJHtcblx0XHRcdFx0XHRwZy53aWtpLmNvbW1vbnNiYXNlXG5cdFx0XHRcdH0/dGl0bGU9JHtlbmNhcnR9XCI+JHtwb3B1cFN0cmluZygnRGVzY3JpcHRpb24gcGFnZScpfTwvYT5gO1xuXHRcdFx0XHRtdy5sb2FkZXIubG9hZChzaGFyZWRfdXJsKTtcblx0XHRcdH1cblx0XHRcdHNob3dBUElQcmV2aWV3KCdpbWFnZWxpbmtzJywgQVBJaW1hZ2VsaW5rc1ByZXZpZXdIVE1MKGFydGljbGUsIGRvd25sb2FkKSwgbmF2cG9wLmlkTnVtYmVyLCBkb3dubG9hZCk7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICdBUEkgaW1hZ2VwYWdlIHByZXZpZXcgZmFpbGVkIDooJztcblx0XHR9XG5cdH07XG5cdGNvbnN0IEFQSWltYWdlbGlua3NQcmV2aWV3SFRNTCA9IChfYXJ0aWNsZSwgZG93bmxvYWQpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNvYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IGxpc3QgPSBqc29iai5xdWVyeS5pbWFnZXVzYWdlO1xuXHRcdFx0aWYgKGxpc3QpIHtcblx0XHRcdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBsaXN0KSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goZWxlbWVudC50aXRsZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJldC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ05vIGltYWdlIGxpbmtzIGZvdW5kJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGA8aDI+JHtwb3B1cFN0cmluZygnRmlsZSBsaW5rcycpfTwvaDI+JHtsaW5rTGlzdChyZXQpfWA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ05vIGltYWdlIGxpbmtzIGZvdW5kJyk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJ0ltYWdlIGxpbmtzIHByZXZpZXcgZ2VuZXJhdGlvbiBmYWlsZWQgOignO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgQVBJY2F0ZWdvcnlQcmV2aWV3SFRNTCA9IChfYXJ0aWNsZSwgZG93bmxvYWQpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNvYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IGxpc3QgPSBqc29iai5xdWVyeS5jYXRlZ29yeW1lbWJlcnM7XG5cdFx0XHRsZXQgcmV0ID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0XHRyZXQucHVzaChlbGVtZW50LnRpdGxlKTtcblx0XHRcdH1cblx0XHRcdGlmIChyZXQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiBwb3B1cFN0cmluZygnRW1wdHkgY2F0ZWdvcnknKTtcblx0XHRcdH1cblx0XHRcdHJldCA9IGA8aDI+JHt0cHJpbnRmKCdDYXRlZ29yeSBtZW1iZXJzICglcyBzaG93biknLCBbcmV0Lmxlbmd0aF0pfTwvaDI+JHtsaW5rTGlzdChyZXQpfWA7XG5cdFx0XHRpZiAoanNvYmouY29udGludWUgJiYganNvYmouY29udGludWUuY21jb250aW51ZSkge1xuXHRcdFx0XHRyZXQgKz0gcG9wdXBTdHJpbmcoJyBhbmQgbW9yZScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnQ2F0ZWdvcnkgcHJldmlldyBmYWlsZWQgOignO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgQVBJdXNlckluZm9QcmV2aWV3SFRNTCA9IChfYXJ0aWNsZSwgZG93bmxvYWQpID0+IHtcblx0XHRsZXQgcmV0ID0gW107XG5cdFx0bGV0IHF1ZXJ5b2JqID0ge307XG5cdFx0dHJ5IHtcblx0XHRcdHF1ZXJ5b2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSkucXVlcnk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJ1VzZXJpbmZvIHByZXZpZXcgZmFpbGVkIDooJztcblx0XHR9XG5cdFx0Y29uc3QgdXNlciA9IGFueUNoaWxkKHF1ZXJ5b2JqLnVzZXJzKTtcblx0XHRpZiAodXNlcikge1xuXHRcdFx0Y29uc3Qge2dsb2JhbHVzZXJpbmZvfSA9IHF1ZXJ5b2JqO1xuXHRcdFx0aWYgKHVzZXIuaW52YWxpZCA9PT0gJycpIHtcblx0XHRcdFx0cmV0LnB1c2gocG9wdXBTdHJpbmcoJ0ludmFsaWQgdXNlcicpKTtcblx0XHRcdH0gZWxzZSBpZiAodXNlci5taXNzaW5nID09PSAnJykge1xuXHRcdFx0XHRyZXQucHVzaChwb3B1cFN0cmluZygnTm90IGEgcmVnaXN0ZXJlZCB1c2VybmFtZScpKTtcblx0XHRcdH1cblx0XHRcdGlmICh1c2VyLmJsb2NrZWRieSkge1xuXHRcdFx0XHRpZiAodXNlci5ibG9ja3BhcnRpYWwpIHtcblx0XHRcdFx0XHRyZXQucHVzaChgPGI+JHtwb3B1cFN0cmluZygnSGFzIGJsb2NrcycpfTwvYj5gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXQucHVzaChgPGI+JHtwb3B1cFN0cmluZygnQkxPQ0tFRCcpfTwvYj5gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGdsb2JhbHVzZXJpbmZvICYmICgnbG9ja2VkJyBpbiBnbG9iYWx1c2VyaW5mbyB8fCAnaGlkZGVuJyBpbiBnbG9iYWx1c2VyaW5mbykpIHtcblx0XHRcdFx0bGV0IGxvY2tlZFN1bEFjY291bnRJc0F0dGFjaGVkVG9UaGlzID0gdHJ1ZTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGdsb2JhbHVzZXJpbmZvLnVuYXR0YWNoZWQgJiYgaSA8IGdsb2JhbHVzZXJpbmZvLnVuYXR0YWNoZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoZ2xvYmFsdXNlcmluZm8udW5hdHRhY2hlZFtpXS53aWtpID09PSBtdy5jb25maWcuZ2V0KCd3Z0RCbmFtZScpKSB7XG5cdFx0XHRcdFx0XHRsb2NrZWRTdWxBY2NvdW50SXNBdHRhY2hlZFRvVGhpcyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChsb2NrZWRTdWxBY2NvdW50SXNBdHRhY2hlZFRvVGhpcykge1xuXHRcdFx0XHRcdGlmICgnbG9ja2VkJyBpbiBnbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0XHRcdFx0cmV0LnB1c2goYDxiPjxpPiR7cG9wdXBTdHJpbmcoJ0xPQ0tFRCcpfTwvaT48L2I+YCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICgnaGlkZGVuJyBpbiBnbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0XHRcdFx0cmV0LnB1c2goYDxiPjxpPiR7cG9wdXBTdHJpbmcoJ0hJRERFTicpfTwvaT48L2I+YCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBTaG93R2VuZGVyJykgJiYgdXNlci5nZW5kZXIpIHtcblx0XHRcdFx0c3dpdGNoICh1c2VyLmdlbmRlcikge1xuXHRcdFx0XHRcdGNhc2UgJ21hbGUnOlxuXHRcdFx0XHRcdFx0cmV0LnB1c2goYCR7cG9wdXBTdHJpbmcoJ2hlL2hpbScpfSDCtyBgKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2ZlbWFsZSc6XG5cdFx0XHRcdFx0XHRyZXQucHVzaChgJHtwb3B1cFN0cmluZygnc2hlL2hlcicpfSDCtyBgKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodXNlci5ncm91cHMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBncm91cE5hbWUgb2YgdXNlci5ncm91cHMpIHtcblx0XHRcdFx0XHRpZiAoIVsnKicsICd1c2VyJywgJ2F1dG9jb25maXJtZWQnXS5pbmNsdWRlcyhncm91cE5hbWUpKSB7XG5cdFx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0XHQvLyAqIHNlZSBbW1NwZWNpYWw6UHJlZml4SW5kZXgvTWVkaWFXaWtpOkdyb3VwLV1dXG5cdFx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0XHRyZXQucHVzaChwZy5lc2NhcGVRdW90ZXNIVE1MKG13Lm1lc3NhZ2UoYGdyb3VwLSR7Z3JvdXBOYW1lfS1tZW1iZXJgLCB1c2VyLmdlbmRlcikudGV4dCgpKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZ2xvYmFsdXNlcmluZm8gJiYgZ2xvYmFsdXNlcmluZm8uZ3JvdXBzKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZ3JvdXBOYW1lIG9mIGdsb2JhbHVzZXJpbmZvLmdyb3Vwcykge1xuXHRcdFx0XHRcdHJldC5wdXNoKFxuXHRcdFx0XHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdFx0Ly8gKiBzZWUgW1tTcGVjaWFsOlByZWZpeEluZGV4L01lZGlhV2lraTpHcm91cC1dXVxuXHRcdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdFx0YDxpPiR7cGcuZXNjYXBlUXVvdGVzSFRNTChtdy5tZXNzYWdlKGBncm91cC0ke2dyb3VwTmFtZX0tbWVtYmVyYCwgdXNlci5nZW5kZXIpLnRleHQoKSl9PC9pPmBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodXNlci5yZWdpc3RyYXRpb24pIHtcblx0XHRcdFx0cmV0LnB1c2goXG5cdFx0XHRcdFx0cGcuZXNjYXBlUXVvdGVzSFRNTChcblx0XHRcdFx0XHRcdCh1c2VyLmVkaXRjb3VudCA/PyAnMCcpICtcblx0XHRcdFx0XHRcdFx0cG9wdXBTdHJpbmcoJyBlZGl0cyBzaW5jZTogJykgK1xuXHRcdFx0XHRcdFx0XHQodXNlci5yZWdpc3RyYXRpb24gPyBmb3JtYXR0ZWREYXRlKG5ldyBEYXRlKHVzZXIucmVnaXN0cmF0aW9uKSkgOiAnJylcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChxdWVyeW9iai51c2VyY29udHJpYnMgJiYgcXVlcnlvYmoudXNlcmNvbnRyaWJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldC5wdXNoKHBvcHVwU3RyaW5nKCdsYXN0IGVkaXQgb24gJykgKyBmb3JtYXR0ZWREYXRlKG5ldyBEYXRlKHF1ZXJ5b2JqLnVzZXJjb250cmlic1swXS50aW1lc3RhbXApKSk7XG5cdFx0fVxuXHRcdGlmIChxdWVyeW9iai5ibG9ja3MpIHtcblx0XHRcdHJldC5wdXNoKHBvcHVwU3RyaW5nKCdJUCB1c2VyJykpOyAvLyB3ZSBvbmx5IHJlcXVlc3QgbGlzdD1ibG9ja3MgZm9yIElQc1xuXHRcdFx0Zm9yIChsZXQgbCA9IDA7IGwgPCBxdWVyeW9iai5ibG9ja3MubGVuZ3RoOyBsKyspIHtcblx0XHRcdFx0bGV0IHJic3RyID0gcXVlcnlvYmouYmxvY2tzW2xdLnJhbmdlc3RhcnQgPT09IHF1ZXJ5b2JqLmJsb2Nrc1tsXS5yYW5nZWVuZCA/ICdCTE9DSycgOiAnUkFOR0VCTE9DSyc7XG5cdFx0XHRcdHJic3RyID0gQXJyYXkuaXNBcnJheShxdWVyeW9iai5ibG9ja3NbbF0ucmVzdHJpY3Rpb25zKSA/IGAke3Jic3RyfUVEYCA6IGBIYXMgJHtyYnN0ci50b0xvd2VyQ2FzZSgpfXNgO1xuXHRcdFx0XHRyZXQucHVzaChgPGI+JHtwb3B1cFN0cmluZyhyYnN0cil9PC9iPmApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBpZiBhbnkgZWxlbWVudCBvZiByZXQgZW5kcyB3aXRoICcgwrcgJywgbWVyZ2UgaXQgd2l0aCB0aGUgbmV4dCBlbGVtZW50IHRvIGF2b2lkXG5cdFx0Ly8gdGhlIC5qb2luKCcsICcpIGNhbGwgaW5zZXJ0aW5nIGEgY29tbWEgYWZ0ZXIgaXRcblx0XHRmb3IgKGxldCBtID0gMDsgbSA8IHJldC5sZW5ndGggLSAxOyBtKyspIHtcblx0XHRcdGlmIChyZXRbbV0ubGVuZ3RoID4gMyAmJiByZXRbbV0uc2xpY2UoTWF0aC5tYXgoMCwgcmV0W21dLmxlbmd0aCAtIDMpKSA9PT0gJyDCtyAnKSB7XG5cdFx0XHRcdHJldFttXSArPSByZXRbbSArIDFdO1xuXHRcdFx0XHRyZXQuc3BsaWNlKG0gKyAxLCAxKTsgLy8gZGVsZXRlIGVsZW1lbnQgYXQgaW5kZXggbSsxXG5cdFx0XHRcdG0tLTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0ID0gYDxocj4ke3JldC5qb2luKCcsICcpfWA7XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgQVBJY29udHJpYnNQcmV2aWV3SFRNTCA9IChhcnRpY2xlLCBkb3dubG9hZCwgbmF2cG9wKSA9PiB7XG5cdFx0cmV0dXJuIEFQSWhpc3RvcnlQcmV2aWV3SFRNTChhcnRpY2xlLCBkb3dubG9hZCwgbmF2cG9wLCB0cnVlKTtcblx0fTtcblx0Y29uc3QgQVBJaGlzdG9yeVByZXZpZXdIVE1MID0gKGFydGljbGUsIGRvd25sb2FkLCBfbmF2cG9wLCByZWFsbHlDb250cmlicykgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBqc29iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpO1xuXHRcdFx0bGV0IGVkaXRzID0gW107XG5cdFx0XHRlZGl0cyA9IHJlYWxseUNvbnRyaWJzID8ganNvYmoucXVlcnkudXNlcmNvbnRyaWJzIDogYW55Q2hpbGQoanNvYmoucXVlcnkucGFnZXMpLnJldmlzaW9ucztcblx0XHRcdGNvbnN0IHJldCA9IGVkaXRQcmV2aWV3VGFibGUoYXJ0aWNsZSwgZWRpdHMsIHJlYWxseUNvbnRyaWJzKTtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJ0hpc3RvcnkgcHJldmlldyBmYWlsZWQgOi0oJztcblx0XHR9XG5cdH07XG5cdC8vIEVOREZJTEU6IHF1ZXJ5cHJldmlldy5qc1xuXHQvLyBTVEFSVEZJTEU6IGRlYnVnLmpzXG5cdC8vIERlYnVnZ2luZyBmdW5jdGlvbnNcblx0Y29uc3Qgc2V0dXBEZWJ1Z2dpbmcgPSAoKSA9PiB7XG5cdFx0aWYgKHdpbmRvdy5wb3B1cERlYnVnKSB7XG5cdFx0XHQvLyBwb3B1cERlYnVnIGlzIHNldCBmcm9tIC52ZXJzaW9uXG5cdFx0XHR3aW5kb3cubG9nID0gKHgpID0+IHtcblx0XHRcdFx0Ly8gaWYgKGcgTXNnICE9PSAnJykgeyBnTXNnICs9ICdcXG4nOyBnTXNnKz10aW1lKCkgKyAnICcgKyB4OyB9XG5cdFx0XHRcdGNvbnNvbGUubG9nKHgpO1xuXHRcdFx0fTtcblx0XHRcdHdpbmRvdy5lcnJsb2cgPSAoeCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGBbUG9wdXBzXSAke3h9YCk7XG5cdFx0XHR9O1xuXHRcdFx0bG9nKCdJbml0aWFsaXppbmcgbG9nZ2VyJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5sb2cgPSAoKSA9PiB7fTtcblx0XHRcdHdpbmRvdy5lcnJsb2cgPSAoKSA9PiB7fTtcblx0XHR9XG5cdH07XG5cdC8vIEVOREZJTEU6IGRlYnVnLmpzXG5cdC8vIFNUQVJURklMRTogaW1hZ2VzLmpzXG5cdC8vIGxvYWQgaW1hZ2Ugb2YgdHlwZSBUaXRsZS5cblx0Y29uc3QgbG9hZEltYWdlID0gKGltYWdlLCBuYXZwb3ApID0+IHtcblx0XHRpZiAodHlwZW9mIGltYWdlLnN0cmlwTmFtZXNwYWNlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSgnbG9hZEltYWdlcyBiYWQnLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdH1cblx0XHQvLyBBUEkgY2FsbCB0byByZXRyaWV2ZSBpbWFnZSBpbmZvLlxuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBJbWFnZXMnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIWlzVmFsaWRJbWFnZU5hbWUoaW1hZ2UudG9TdHJpbmcoKSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgYXJ0ID0gaW1hZ2UudXJsU3RyaW5nKCk7XG5cdFx0bGV0IHVybCA9IGAke3BnLndpa2kuYXBpd2lraWJhc2V9P2Zvcm1hdD1qc29uJmZvcm1hdHZlcnNpb249MiZhY3Rpb249cXVlcnlgO1xuXHRcdHVybCArPSBgJnByb3A9aW1hZ2VpbmZvJmlpcHJvcD11cmx8bWltZSZpaXVybHdpZHRoPSR7Z2V0VmFsdWVPZigncG9wdXBJbWFnZVNpemVMYXJnZScpfWA7XG5cdFx0dXJsICs9IGAmdGl0bGVzPSR7YXJ0fWA7XG5cdFx0cGVuZGluZ05hdnBvcFRhc2sobmF2cG9wKTtcblx0XHRjb25zdCBjYWxsYmFjayA9IChkKSA9PiB7XG5cdFx0XHRwb3B1cHNJbnNlcnRJbWFnZShuYXZwb3AuaWROdW1iZXIsIG5hdnBvcCwgZCk7XG5cdFx0fTtcblx0XHRjb25zdCBnbyA9ICgpID0+IHtcblx0XHRcdGdldFBhZ2VXaXRoQ2FjaGluZyh1cmwsIGNhbGxiYWNrLCBuYXZwb3ApO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblx0XHRpZiAobmF2cG9wLnZpc2libGUgfHwgIWdldFZhbHVlT2YoJ3BvcHVwTGF6eURvd25sb2FkcycpKSB7XG5cdFx0XHRnbygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuYXZwb3AuYWRkSG9vayhnbywgJ3VuaGlkZScsICdhZnRlcicsICdET1dOTE9BRF9JTUFHRV9RVUVSWV9EQVRBJyk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBwb3B1cHNJbnNlcnRJbWFnZSA9IChpZCwgX25hdnBvcCwgZG93bmxvYWQpID0+IHtcblx0XHRsb2coJ3BvcHVwc0luc2VydEltYWdlJyk7XG5cdFx0bGV0IGltYWdlaW5mbztcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNPYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IGltYWdlcGFnZSA9IGFueUNoaWxkKGpzT2JqLnF1ZXJ5LnBhZ2VzKTtcblx0XHRcdGlmIChpbWFnZXBhZ2UuaW1hZ2VpbmZvID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0W2ltYWdlaW5mb10gPSBpbWFnZXBhZ2UuaW1hZ2VpbmZvO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9nKCdwb3B1cHNJbnNlcnRJbWFnZSBmYWlsZWQgOignKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcG9wdXBJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwb3B1cEltZyR7aWR9YCk7XG5cdFx0aWYgKCFwb3B1cEltYWdlKSB7XG5cdFx0XHRsb2coJ2NvdWxkIG5vdCBmaW5kIGluc2VydGlvbiBwb2ludCBmb3IgaW1hZ2UnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cG9wdXBJbWFnZS53aWR0aCA9IGdldFZhbHVlT2YoJ3BvcHVwSW1hZ2VTaXplJyk7XG5cdFx0cG9wdXBJbWFnZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cdFx0Ly8gU2V0IHRoZSBzb3VyY2UgZm9yIHRoZSBpbWFnZS5cblx0XHRpZiAoaW1hZ2VpbmZvLnRodW1idXJsKSB7XG5cdFx0XHRwb3B1cEltYWdlLnNyYyA9IGltYWdlaW5mby50aHVtYnVybDtcblx0XHR9IGVsc2UgaWYgKGltYWdlaW5mby5taW1lLmluZGV4T2YoJ2ltYWdlJykgPT09IDApIHtcblx0XHRcdHBvcHVwSW1hZ2Uuc3JjID0gaW1hZ2VpbmZvLnVybDtcblx0XHRcdGxvZygnYSB0aHVtYiBjb3VsZCBub3QgYmUgZm91bmQsIHVzaW5nIG9yaWdpbmFsIGltYWdlJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvZyhcImZ1bGxzaXplIGltYWdldGh1bWIsIGJ1dCBub3Qgc3VyZSBpZiBpdCdzIGFuIGltYWdlXCIpO1xuXHRcdH1cblx0XHRjb25zdCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3BvcHVwSW1hZ2VMaW5rJHtpZH1gKTtcblx0XHRpZiAoYSA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdC8vIERldGVybWluZSB0aGUgYWN0aW9uIG9mIHRoZSBzdXJyb3VkaW5nIGltYWdlbGluay5cblx0XHRzd2l0Y2ggKGdldFZhbHVlT2YoJ3BvcHVwVGh1bWJBY3Rpb24nKSkge1xuXHRcdFx0Y2FzZSAnaW1hZ2VwYWdlJzpcblx0XHRcdFx0aWYgKHBnLmN1cnJlbnQuYXJ0aWNsZS5uYW1lc3BhY2VJZCgpICE9PSBwZy5uc0ltYWdlSWQpIHtcblx0XHRcdFx0XHRhLmhyZWYgPSBpbWFnZWluZm8uZGVzY3JpcHRpb251cmw7XG5cdFx0XHRcdFx0Ly8gRklYTUU6IHVucmVsaWFibGUgcGcuaWROdW1iZXJcblx0XHRcdFx0XHRwb3BUaXBzU29vbkZuKGBwb3B1cEltYWdlJHtpZH1gKSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHQvKiBmYWxscyB0aHJvdWdoICovXG5cdFx0XHRjYXNlICdzaXpldG9nZ2xlJzpcblx0XHRcdFx0YS5vbmNsaWNrID0gdG9nZ2xlU2l6ZTtcblx0XHRcdFx0YS50aXRsZSA9IHBvcHVwU3RyaW5nKCdUb2dnbGUgaW1hZ2Ugc2l6ZScpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHRjYXNlICdsaW5rZnVsbCc6XG5cdFx0XHRcdGEuaHJlZiA9IGltYWdlaW5mby51cmw7XG5cdFx0XHRcdGEudGl0bGUgPSBwb3B1cFN0cmluZygnT3BlbiBmdWxsLXNpemUgaW1hZ2UnKTtcblx0XHR9XG5cdH07XG5cdC8vIFRvZ2dsZXMgdGhlIGltYWdlIGJldHdlZW4gaW5saW5lIHNtYWxsIGFuZCBuYXZwb3AgZnVsbHdpZHRoLlxuXHQvLyBJdCdzIHRoZSBzYW1lIGltYWdlLCBubyBhY3R1YWwgc2l6ZWNoYW5nZSBvY2N1cnMsIG9ubHkgZGlzcGxheSB3aWR0aC5cblx0Y29uc3QgdG9nZ2xlU2l6ZSA9IGZ1bmN0aW9uIHRvZ2dsZVNpemUoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0aWYgKCFzZWxmKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSgnc2VsZiBpcyBudWxsIDovJywge3RhZzogJ3BvcHVwcycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgaW1nID0gc2VsZi5maXJzdENoaWxkO1xuXHRcdGlmICghaW1nKSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSgnaW1nIGlzIG51bGwgOi8nLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbWcuc3R5bGUud2lkdGggPSAhaW1nLnN0eWxlLndpZHRoIHx8IGltZy5zdHlsZS53aWR0aCA9PT0gJycgPyAnMTAwJScgOiAnJztcblx0fTtcblx0Ly8gUmV0dXJucyBvbmUgdGl0bGUgb2YgYW4gaW1hZ2UgZnJvbSB3aWtpVGV4dC5cblx0Y29uc3QgZ2V0VmFsaWRJbWFnZUZyb21XaWtpVGV4dCA9ICh3aWtpVGV4dCkgPT4ge1xuXHRcdC8vIG5iIGluIHBnLnJlLmltYWdlIHdlJ3JlIGludGVyZXN0ZWQgaW4gdGhlIHNlY29uZCBicmFja2V0ZWQgZXhwcmVzc2lvblxuXHRcdC8vIHRoaXMgbWF5IGNoYW5nZSBpZiB0aGUgcmVnZXggY2hhbmdlcyA6LShcblx0XHQvLyBsZXQgbWF0Y2g9cGcucmUuaW1hZ2UuZXhlYyh3aWtpVGV4dCk7XG5cdFx0bGV0IG1hdGNoZWQ7XG5cdFx0bGV0IG1hdGNoO1xuXHRcdC8vIHN0cmlwIGh0bWwgY29tbWVudHMsIHVzZWQgYnkgZXZpbCBib3RzIDotKFxuXHRcdGNvbnN0IHQgPSByZW1vdmVNYXRjaGVzVW5sZXNzKHdpa2lUZXh0LCAvKDwhLS1bXFxTXFxzXSo/LS0+KS8sIDEsIC9ePCEtLVteW10qcG9wdXAvaSk7XG5cdFx0d2hpbGUgKChtYXRjaCA9IHBnLnJlLmltYWdlLmV4ZWModCkpICE9PSBudWxsKSB7XG5cdFx0XHQvLyBub3cgZmluZCBhIHNhbmUgaW1hZ2UgbmFtZSAtIGV4Y2x1ZGUgdGVtcGxhdGVzIGJ5IHNlZWtpbmcge1xuXHRcdFx0Y29uc3QgbSA9IG1hdGNoWzJdIHx8IG1hdGNoWzZdO1xuXHRcdFx0aWYgKGlzVmFsaWRJbWFnZU5hbWUobSkpIHtcblx0XHRcdFx0bWF0Y2hlZCA9IG07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwZy5yZS5pbWFnZS5sYXN0SW5kZXggPSAwO1xuXHRcdGlmICghbWF0Y2hlZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBgJHttdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc0ltYWdlSWRdfToke3VwY2FzZUZpcnN0KG1hdGNoZWQpfWA7XG5cdH07XG5cdGNvbnN0IHJlbW92ZU1hdGNoZXNVbmxlc3MgPSAoc3RyLCByZTEsIHBhcmVuY291bnQsIHJlMikgPT4ge1xuXHRcdGNvbnN0IHNwbGl0ID0gc3RyLnNwbGl0KHJlMSk7XG5cdFx0Y29uc3QgYyA9IHBhcmVuY291bnQgKyAxO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3BsaXQubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChpICUgYyA9PT0gMCB8fCByZTIudGVzdChzcGxpdFtpXSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRzcGxpdFtpXSA9ICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gc3BsaXQuam9pbignJyk7XG5cdH07XG5cdC8vIEVOREZJTEU6IGltYWdlcy5qc1xuXHQvLyBTVEFSVEZJTEU6IG5hbWVzcGFjZXMuanNcblx0Ly8gU2V0IHVwIG5hbWVzcGFjZXMgYW5kIG90aGVyIG5vbi1zdHJpbmdzLmpzIGxvY2FsaXphdGlvblxuXHQvLyAoY3VycmVudGx5IHRoYXQgbWVhbnMgcmVkaXJzIHRvbylcblx0Y29uc3Qgc2V0TmFtZXNwYWNlcyA9ICgpID0+IHtcblx0XHRwZy5uc1NwZWNpYWxJZCA9IC0xO1xuXHRcdHBnLm5zTWFpbnNwYWNlSWQgPSAwO1xuXHRcdHBnLm5zSW1hZ2VJZCA9IDY7XG5cdFx0cGcubnNVc2VySWQgPSAyO1xuXHRcdHBnLm5zVXNlcnRhbGtJZCA9IDM7XG5cdFx0cGcubnNDYXRlZ29yeUlkID0gMTQ7XG5cdFx0cGcubnNUZW1wbGF0ZUlkID0gMTA7XG5cdH07XG5cdGNvbnN0IHNldFJlZGlycyA9ICgpID0+IHtcblx0XHRjb25zdCByID0gJ3JlZGlyZWN0Jztcblx0XHRjb25zdCBSID0gJ1JFRElSRUNUJztcblx0XHRjb25zdCByZWRpckxpc3RzID0ge1xuXHRcdFx0YXI6IFtSLCAn2KrYrdmI2YrZhCddLFxuXHRcdFx0YmU6IFtyLCAn0L/QtdGA0LDQvdCw0LrRltGA0LDQstCw0L3RjNC90LUnXSxcblx0XHRcdGJnOiBbciwgJ9C/0YDQtdC90LDRgdC+0YfQstCw0L3QtScsICfQstC40LYnXSxcblx0XHRcdGJzOiBbciwgJ1ByZXVzbWplcmknLCAncHJldXNtamVyaScsICdQUkVVU01KRVJJJ10sXG5cdFx0XHRibjogW1IsICfgpqrgp4HgpqjgprDgp43gpqjgpr/gprDgp43gpqbgp4fgprYnXSxcblx0XHRcdGNzOiBbUiwgJ1DFmEVTTcSaUlVKJ10sXG5cdFx0XHRjeTogW3IsICdhaWwtY3lmZWlyaW8nXSxcblx0XHRcdGRlOiBbUiwgJ1dFSVRFUkxFSVRVTkcnXSxcblx0XHRcdGVsOiBbUiwgJ86Rzp3Okc6azpHOpM6VzqXOmM6lzp3Oo86XJ10sXG5cdFx0XHRlbzogW1IsICdBTElESVJFS1RVJywgJ0FMSURJUkVLVEknXSxcblx0XHRcdGVzOiBbUiwgJ1JFRElSRUNDScOTTiddLFxuXHRcdFx0ZXQ6IFtyLCAnc3V1bmEnXSxcblx0XHRcdGdhOiBbciwgJ2F0aHNoZW9sYWRoJ10sXG5cdFx0XHRnbDogW3IsICdSRURJUkVDQ0nDk04nLCAnUkVESVJFQ0lPTkFNRU5UTyddLFxuXHRcdFx0aGU6IFtSLCAn15TXpNeg15nXlCddLFxuXHRcdFx0aHU6IFtSLCAnw4FUSVLDgU5Zw41Uw4FTJ10sXG5cdFx0XHRpczogW3IsICd0aWx2w61zdW4nLCAnVElMVsONU1VOJ10sXG5cdFx0XHRpdDogW1IsICdSSU5WSUEnLCAnUmludmlhJ10sXG5cdFx0XHRqYTogW1IsICfou6LpgIEnXSxcblx0XHRcdG1rOiBbciwgJ9C/0YDQtdC90LDRgdC+0YfRg9Cy0LDRmtC1JywgJ9Cy0LjQtNC4J10sXG5cdFx0XHRuZHM6IFtyLCAnd2llZGVybGVpZGVuJ10sXG5cdFx0XHQnbmRzLW5sJzogW1IsICdERVVSVkVSV0lFWklORycsICdEVVVSVkVSV0lFWklORyddLFxuXHRcdFx0bmw6IFtSLCAnRE9PUlZFUldJSlpJTkcnXSxcblx0XHRcdG5uOiBbciwgJ29tZGlyaWdlciddLFxuXHRcdFx0cGw6IFtSLCAnUEFUUlonLCAnUFJaRUtJRVJVSicsICdUQU0nXSxcblx0XHRcdHB0OiBbUiwgJ3JlZGlyJ10sXG5cdFx0XHRydTogW1IsICfQn9CV0KDQldCd0JDQn9Cg0JDQktCb0JXQndCY0JUnLCAn0J/QldCg0JXQndCQ0J/QoCddLFxuXHRcdFx0c2s6IFtyLCAncHJlc21lcnVqJ10sXG5cdFx0XHRzcjogW3IsICfQn9GA0LXRg9GB0LzQtdGA0LgnLCAn0L/RgNC10YPRgdC80LXRgNC4JywgJ9Cf0KDQldCj0KHQnNCV0KDQmCcsICdQcmV1c21lcmknLCAncHJldXNtZXJpJywgJ1BSRVVTTUVSSSddLFxuXHRcdFx0dHQ6IFtSLCAnecO8bsOkbHTDvCcsICfQv9C10YDQtdC90LDQv9GA0LDQstC70LXQvdC40LUnLCAn0L/QtdGA0LXQvdCw0L/RgCddLFxuXHRcdFx0dWs6IFtSLCAn0J/QldCg0JXQndCQ0J/QoNCQ0JLQm9CV0J3QndCvJywgJ9Cf0JXQoNCV0J3QkNCf0KAnXSxcblx0XHRcdHZpOiBbciwgJ8SR4buVaSddLFxuXHRcdFx0eWk6IFtSLCAn15XXldeZ15nXmNei16jXpNeZ16jXnyddLFxuXHRcdFx0emg6IFtSLCAn6YeN5a6a5ZCRJ10sIC8vIG5vIGNvbW1hXG5cdFx0fTtcblx0XHRjb25zdCByZWRpckxpc3QgPSByZWRpckxpc3RzW3BnLndpa2kubGFuZ10gfHwgW3IsIFJdO1xuXHRcdC8vIE1lZGlhd2lraSBpcyB2ZXJ5IHRvbGVyYW50IGFib3V0IHdoYXQgY29tZXMgYWZ0ZXIgdGhlICNyZWRpcmVjdCBhdCB0aGUgc3RhcnRcblx0XHRwZy5yZS5yZWRpcmVjdCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgXlxcXFxzKlsjXSgke3JlZGlyTGlzdC5qb2luKCd8Jyl9KS4qP1xcXFxbezJ9KFteXFxcXHxcXFxcXV0qKSh8W15cXFxcXV0qKT9cXFxcXXsyfVxcXFxzKiguKilgLFxuXHRcdFx0J2knXG5cdFx0KTtcblx0fTtcblx0Y29uc3Qgc2V0SW50ZXJ3aWtpID0gKCkgPT4ge1xuXHRcdGlmIChwZy53aWtpLndpa2ltZWRpYSkge1xuXHRcdFx0Ly8gRnJvbSB7QGxpbmsgaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmcvd2lraS9MaXN0X29mX1dpa2lwZWRpYXN9XG5cdFx0XHQvLyB7QGxpbmsgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3cvYXBpLnBocD9hY3Rpb249c2l0ZW1hdHJpeCZmb3JtYXQ9anNvbiZzbXR5cGU9bGFuZ3VhZ2Umc21sYW5ncHJvcD1jb2RlJmZvcm1hdHZlcnNpb249Mn1cblx0XHRcdHBnLndpa2kuaW50ZXJ3aWtpID1cblx0XHRcdFx0J2FhfGFifGFjZXxhZnxha3xhbHN8YW18YW58YW5nfGFyfGFyY3xhcnp8YXN8YXN0fGF2fGF5fGF6fGJhfGJhcnxiYXQtc21nfGJjbHxiZXxiZS14LW9sZHxiZ3xiaHxiaXxiam58Ym18Ym58Ym98YnB5fGJyfGJzfGJ1Z3xieHJ8Y2F8Y2JrLXphbXxjZG98Y2V8Y2VifGNofGNob3xjaHJ8Y2h5fGNrYnxjb3xjcnxjcmh8Y3N8Y3NifGN1fGN2fGN5fGRhfGRlfGRpcXxkc2J8ZHZ8ZHp8ZWV8ZWx8ZW1sfGVufGVvfGVzfGV0fGV1fGV4dHxmYXxmZnxmaXxmaXUtdnJvfGZqfGZvfGZyfGZycHxmcnJ8ZnVyfGZ5fGdhfGdhZ3xnYW58Z2R8Z2x8Z2xrfGdufGdvdHxndXxndnxoYXxoYWt8aGF3fGhlfGhpfGhpZnxob3xocnxoc2J8aHR8aHV8aHl8aHp8aWF8aWR8aWV8aWd8aWl8aWt8aWxvfGlvfGlzfGl0fGl1fGphfGpib3xqdnxrYXxrYWF8a2FifGtiZHxrZ3xraXxranxra3xrbHxrbXxrbnxrb3xrb2l8a3J8a3JjfGtzfGtzaHxrdXxrdnxrd3xreXxsYXxsYWR8bGJ8bGJlfGxnfGxpfGxpanxsbW98bG58bG98bHR8bHRnfGx2fG1hcC1ibXN8bWRmfG1nfG1ofG1ocnxtaXxta3xtbHxtbnxtb3xtcnxtcmp8bXN8bXR8bXVzfG13bHxteXxteXZ8bXpufG5hfG5haHxuYXB8bmRzfG5kcy1ubHxuZXxuZXd8bmd8bmx8bm58bm98bm92fG5ybXxudnxueXxvY3xvbXxvcnxvc3xwYXxwYWd8cGFtfHBhcHxwY2R8cGRjfHBmbHxwaXxwaWh8cGx8cG1zfHBuYnxwbnR8cHN8cHR8cXV8cm18cm15fHJufHJvfHJvYS1ydXB8cm9hLXRhcmF8cnV8cnVlfHJ3fHNhfHNhaHxzY3xzY258c2NvfHNkfHNlfHNnfHNofHNpfHNpbXBsZXxza3xzbHxzbXxzbnxzb3xzcXxzcnxzcm58c3N8c3R8c3RxfHN1fHN2fHN3fHN6bHx0YXx0ZXx0ZXR8dGd8dGh8dGl8dGt8dGx8dG58dG98dHBpfHRyfHRzfHR0fHR1bXx0d3x0eXx1ZG18dWd8dWt8dXJ8dXp8dmV8dmVjfHZpfHZsc3x2b3x3YXx3YXJ8d298d3V1fHhhbHx4aHx5aXx5b3x6YXx6ZWF8emh8emgtY2xhc3NpY2FsfHpoLW1pbi1uYW58emgteXVlfHp1Jztcblx0XHRcdHBnLnJlLmludGVyd2lraSA9IG5ldyBSZWdFeHAoYF4ke3BnLndpa2kuaW50ZXJ3aWtpfTpgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGcud2lraS5pbnRlcndpa2kgPSBudWxsO1xuXHRcdFx0cGcucmUuaW50ZXJ3aWtpID0gL14kLztcblx0XHR9XG5cdH07XG5cdC8vIHJldHVybiBhIHJlZ2V4cCBwYXR0ZXJuIG1hdGNoaW5nIGFsbCB2YXJpYW50cyB0byB3cml0ZSB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdGNvbnN0IG5zUmUgPSAobmFtZXNwYWNlSWQpID0+IHtcblx0XHRjb25zdCBpbWFnZU5hbWVzcGFjZVZhcmlhbnRzID0gW107XG5cdFx0Zm9yIChjb25zdCBbX2xvY2FsaXplZE5hbWVzcGFjZUxjLCBfbmFtZXNwYWNlSWRdIG9mIE9iamVjdC5lbnRyaWVzKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlSWRzJykpKSB7XG5cdFx0XHRpZiAoX25hbWVzcGFjZUlkICE9PSBuYW1lc3BhY2VJZCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGxvY2FsaXplZE5hbWVzcGFjZUxjID0gdXBjYXNlRmlyc3QoX2xvY2FsaXplZE5hbWVzcGFjZUxjKTtcblx0XHRcdGltYWdlTmFtZXNwYWNlVmFyaWFudHMucHVzaChcblx0XHRcdFx0bXcudXRpbC5lc2NhcGVSZWdFeHAobG9jYWxpemVkTmFtZXNwYWNlTGMpLnNwbGl0KCcgJykuam9pbignWyBfXScpLFxuXHRcdFx0XHRtdy51dGlsLmVzY2FwZVJlZ0V4cChlbmNvZGVVUkkobG9jYWxpemVkTmFtZXNwYWNlTGMpKVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGAoPzoke2ltYWdlTmFtZXNwYWNlVmFyaWFudHMuam9pbignfCcpfSlgO1xuXHR9O1xuXHRjb25zdCBuc1JlSW1hZ2UgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIG5zUmUocGcubnNJbWFnZUlkKTtcblx0fTtcblx0Ly8gRU5ERklMRTogbmFtZXNwYWNlcy5qc1xuXHQvLyBTVEFSVEZJTEU6IHNlbHBvcC5qc1xuXHRjb25zdCBnZXRFZGl0Ym94U2VsZWN0aW9uID0gKCkgPT4ge1xuXHRcdC8vIHNlZSB7QGxpbmsgaHR0cDovL3d3dy53ZWJndXJ1c2ZvcnVtLmNvbS84LzEyLzB9XG5cdFx0bGV0IGVkaXRib3g7XG5cdFx0dHJ5IHtcblx0XHRcdGVkaXRib3ggPSBkb2N1bWVudC5lZGl0Zm9ybS53cFRleHRib3gxO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBJRSwgT3BlcmFcblx0XHRpZiAoZG9jdW1lbnQuc2VsZWN0aW9uKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkudGV4dDtcblx0XHR9XG5cdFx0Ly8gTW96aWxsYVxuXHRcdGNvbnN0IHNlbFN0YXJ0ID0gZWRpdGJveC5zZWxlY3Rpb25TdGFydDtcblx0XHRjb25zdCBzZWxFbmQgPSBlZGl0Ym94LnNlbGVjdGlvbkVuZDtcblx0XHRyZXR1cm4gZWRpdGJveC52YWx1ZS5zdWJzdHJpbmcoc2VsU3RhcnQsIHNlbEVuZCk7XG5cdH07XG5cdGNvbnN0IGRvU2VsZWN0aW9uUG9wdXAgPSAoKSA9PiB7XG5cdFx0Ly8gcG9wdXAgaWYgdGhlIHNlbGVjdGlvbiBsb29rcyBsaWtlIFtbZm9vfGFueXRoaW5nIGFmdGVyd2FyZHMgYXQgYWxsXG5cdFx0Ly8gb3IgW1tmb298YmFyXV10ZXh0IHdpdGhvdXQgJ11dJ1xuXHRcdC8vIG9yIFtbZm9vfGJhcl1dXG5cdFx0Y29uc3Qgc2VsID0gZ2V0RWRpdGJveFNlbGVjdGlvbigpO1xuXHRcdGNvbnN0IG9wZW4gPSBzZWwuaW5kZXhPZignW1snKTtcblx0XHRjb25zdCBwaXBlID0gc2VsLmluZGV4T2YoJ3wnKTtcblx0XHRjb25zdCBjbG9zZSA9IHNlbC5pbmRleE9mKCddXScpO1xuXHRcdGlmIChvcGVuID09PSAtMSB8fCAocGlwZSA9PT0gLTEgJiYgY2xvc2UgPT09IC0xKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoKHBpcGUgIT09IC0xICYmIG9wZW4gPiBwaXBlKSB8fCAoY2xvc2UgIT09IC0xICYmIG9wZW4gPiBjbG9zZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgYXJ0aWNsZSA9IG5ldyBUaXRsZShzZWwuc3Vic3RyaW5nKG9wZW4gKyAyLCBwaXBlIDwgMCA/IGNsb3NlIDogcGlwZSkpO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cE9uRWRpdFNlbGVjdGlvbicpID09PSAnYm94cHJldmlldycpIHtcblx0XHRcdHJldHVybiBkb1NlcGFyYXRlU2VsZWN0aW9uUG9wdXAoc2VsLCBhcnRpY2xlKTtcblx0XHR9XG5cdFx0aWYgKGNsb3NlID4gMCAmJiBzZWwuc2xpY2UoTWF0aC5tYXgoMCwgY2xvc2UgKyAyKSkuaW5jbHVkZXMoJ1tbJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRhLmhyZWYgPSBwZy53aWtpLnRpdGxlYmFzZSArIGFydGljbGUudXJsU3RyaW5nKCk7XG5cdFx0bW91c2VPdmVyV2lraUxpbmsyKGEpO1xuXHRcdGlmIChhLm5hdnBvcHVwKSB7XG5cdFx0XHRhLm5hdnBvcHVwLmFkZEhvb2soXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRydW5TdG9wUG9wdXBUaW1lcihhLm5hdnBvcHVwKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0J3VuaGlkZScsXG5cdFx0XHRcdCdhZnRlcidcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBkb1NlcGFyYXRlU2VsZWN0aW9uUG9wdXAgPSAoc3RyLCBhcnRpY2xlKSA9PiB7XG5cdFx0bGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3Rpb25QcmV2aWV3Jyk7XG5cdFx0aWYgKCFkaXYpIHtcblx0XHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZGl2LmlkID0gJ3NlbGVjdGlvblByZXZpZXcnO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgYm94ID0gZG9jdW1lbnQuZWRpdGZvcm0ud3BUZXh0Ym94MTtcblx0XHRcdFx0Ym94LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpdiwgYm94KTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IHAgPSBwcmVwUHJldmlld21ha2VyKHN0ciwgYXJ0aWNsZSwgbmV3TmF2cG9wdXAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpLCBhcnRpY2xlKSk7XG5cdFx0cC5tYWtlUHJldmlldygpO1xuXHRcdGlmIChwLmh0bWwpIHtcblx0XHRcdGRpdi5pbm5lckhUTUwgPSBwLmh0bWw7XG5cdFx0fVxuXHRcdGRpdi5yYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSA9IGZhbHNlO1xuXHRcdHBvcFRpcHNTb29uRm4oJ3NlbGVjdGlvblByZXZpZXcnKSgpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBzZWxwb3AuanNcblx0Ly8gU1RBUlRGSUxFOiBuYXZwb3B1cC5qc1xuXHQvKipcblx0ICogQGZpbGVvdmVydmlldyAgRGVmaW5lcyB0d28gY2xhc3Nlczoge0Bzb3VyY2UgTmF2cG9wdXB9IGFuZCB7QHNvdXJjZSBNb3VzZXRyYWNrZXJ9LlxuXHQgKlxuXHQgKiA8Y29kZT5OYXZwb3B1cDwvY29kZT4gZGVzY3JpYmVzIHBvcHVwczogd2hlbiB0aGV5IGFwcGVhciwgd2hlcmUsIHdoYXRcblx0ICogdGhleSBsb29rIGxpa2UgYW5kIHNvIG9uLlxuXHQgKlxuXHQgKiA8Y29kZT5Nb3VzZXRyYWNrZXI8L2NvZGU+IFwiY2FwdHVyZXNcIiB0aGUgbW91c2UgdXNpbmdcblx0ICogPGNvZGU+ZG9jdW1lbnQub25tb3VzZW1vdmU8L2NvZGU+LlxuXHQgKi9cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgTW91c2V0cmFja2VyLlxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQGNsYXNzIFRoZSBNb3VzZXRyYWNrZXIgY2xhc3MuIFRoaXMgbW9uaXRvcnMgbW91c2UgbW92ZW1lbnRzIGFuZCBtYW5hZ2VzIGFzc29jaWF0ZWQgaG9va3MuXG5cdCAqL1xuXHRjbGFzcyBNb3VzZXRyYWNrZXIge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBJbnRlcnZhbCB0byByZWd1bGFybHkgcnVuIHRoZSBob29rcyBhbnl3YXksIGluIG1pbGxpc2Vjb25kcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBJbnRlZ2VyXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMubG9vcERlbGF5ID0gNDAwO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaW1lciBmb3IgdGhlIGxvb3AuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgVGltZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy50aW1lciA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIEZsYWcgLSBhcmUgd2Ugc3dpdGNoZWQgb24/XG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgQm9vbGVhblxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBGbGFnIC0gYXJlIHdlIHByb2JhYmx5IGluYWNjdXJhdGUsIGkuZS4gbm90IHJlZmxlY3RpbmcgdGhlIGFjdHVhbCBtb3VzZSBwb3NpdGlvbj9cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5kaXJ0eSA9IHRydWU7XG5cdFx0XHQvKipcblx0XHRcdCAqIEFycmF5IG9mIGhvb2sgZnVuY3Rpb25zLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKiBAdHlwZSBBcnJheVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmhvb2tzID0gW107XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEFkZHMgYSBob29rLCB0byBiZSBjYWxsZWQgd2hlbiB3ZSBnZXQgZXZlbnRzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZiBBIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBhc1xuXHRcdCAqIDxjb2RlPmYoeCx5KTwvY29kZT4uIEl0IHNob3VsZCByZXR1cm4gPGNvZGU+dHJ1ZTwvY29kZT4gd2hlbiBpdFxuXHRcdCAqIHdhbnRzIHRvIGJlIHJlbW92ZWQsIGFuZCA8Y29kZT5mYWxzZTwvY29kZT4gb3RoZXJ3aXNlLlxuXHRcdCAqL1xuXHRcdGFkZEhvb2soZikge1xuXHRcdFx0dGhpcy5ob29rcy5wdXNoKGYpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSdW5zIGhvb2tzLCBwYXNzaW5nIHRoZW0gdGhlIHhcblx0XHQgKiBhbmQgeSBjb29yZHMgb2YgdGhlIG1vdXNlLiAgSG9vayBmdW5jdGlvbnMgdGhhdCByZXR1cm4gdHJ1ZSBhcmVcblx0XHQgKiBwYXNzZWQgdG8ge0Bzb3VyY2UgTW91c2V0cmFja2VyI3JlbW92ZUhvb2tzfSBmb3IgcmVtb3ZhbC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0cnVuSG9va3MoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaG9va3MgfHwgdGhpcy5ob29rcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gbG9nKCdNb3VzZXRyYWNrZXIucnVuSG9va3M7IHdlIGdvdCBzb21lIGhvb2tzIHRvIHJ1bicpO1xuXHRcdFx0bGV0IHJlbW92ZSA9IGZhbHNlO1xuXHRcdFx0Y29uc3QgcmVtb3ZlT2JqID0ge307XG5cdFx0XHQvLyB0aGlzIG1ldGhvZCBnZXRzIGNhbGxlZCBhIExPVCAtXG5cdFx0XHQvLyBwcmUtY2FjaGUgc29tZSB2YXJpYWJsZXNcblx0XHRcdGNvbnN0IHt4fSA9IHRoaXM7XG5cdFx0XHRjb25zdCB7eX0gPSB0aGlzO1xuXHRcdFx0Y29uc3QgbGVuID0gdGhpcy5ob29rcy5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG5cdFx0XHRcdC8vIH4gcnVuIHRoZSBob29rIGZ1bmN0aW9uLCBhbmQgcmVtb3ZlIGl0IGlmIGl0IHJldHVybnMgdHJ1ZVxuXHRcdFx0XHRpZiAodGhpcy5ob29rc1tpXSh4LCB5KSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHJlbW92ZSA9IHRydWU7XG5cdFx0XHRcdFx0cmVtb3ZlT2JqW2ldID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHJlbW92ZSkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUhvb2tzKHJlbW92ZU9iaik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZXMgaG9va3MuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdmVPYmogQW4gb2JqZWN0IHdob3NlIGtleXMgYXJlIHRoZSBpbmRleFxuXHRcdCAqIG51bWJlcnMgb2YgZnVuY3Rpb25zIGZvciByZW1vdmFsLCB3aXRoIHZhbHVlcyB0aGF0IGV2YWx1YXRlIHRvIHRydWVcblx0XHQgKi9cblx0XHRyZW1vdmVIb29rcyhyZW1vdmVPYmopIHtcblx0XHRcdGNvbnN0IG5ld0hvb2tzID0gW107XG5cdFx0XHRjb25zdCBsZW4gPSB0aGlzLmhvb2tzLmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcblx0XHRcdFx0aWYgKCFyZW1vdmVPYmpbaV0pIHtcblx0XHRcdFx0XHRuZXdIb29rcy5wdXNoKHRoaXMuaG9va3NbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhvb2tzID0gbmV3SG9va3M7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEV2ZW50IGxpc3RlbmVyIGZvciBtb3VzZSB3aWdnbGVzLlxuXHRcdCAqIFdlIHNpbXBseSBncmFiIHRoZSBldmVudCwgc2V0IHggYW5kIHkgYW5kIHJ1biB0aGUgaG9va3MuXG5cdFx0ICogVGhpcyBtYWtlcyB0aGUgY3B1IGFsbCBob3QgYW5kIGJvdGhlcmVkIDotKFxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcGFyYW0ge0V2ZW50fSBlIE1vdXNlbW92ZSBldmVudFxuXHRcdCAqL1xuXHRcdHRyYWNrKGUpIHtcblx0XHRcdC8vIH4gQXBwYXJlbnRseSB0aGlzIGlzIG5lZWRlZCBpbiBJRS5cblx0XHRcdGUgfHw9IHdpbmRvdy5ldmVudDtcblx0XHRcdGxldCB4O1xuXHRcdFx0bGV0IHk7XG5cdFx0XHRpZiAoZSkge1xuXHRcdFx0XHRpZiAoZS5wYWdlWCkge1xuXHRcdFx0XHRcdHggPSBlLnBhZ2VYO1xuXHRcdFx0XHRcdHkgPSBlLnBhZ2VZO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGUuY2xpZW50WCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldCBsZWZ0O1xuXHRcdFx0XHRcdGxldCB0b3A7XG5cdFx0XHRcdFx0Y29uc3QgZG9jRWx0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRcdFx0XHRcdGlmIChkb2NFbHQpIHtcblx0XHRcdFx0XHRcdGxlZnQgPSBkb2NFbHQuc2Nyb2xsTGVmdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGVmdCB8fD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuc2Nyb2xsTGVmdCB8fCAwO1xuXHRcdFx0XHRcdGlmIChkb2NFbHQpIHtcblx0XHRcdFx0XHRcdHRvcCA9IGRvY0VsdC5zY3JvbGxUb3A7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRvcCB8fD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnNjcm9sbFRvcCB8fCBkb2N1bWVudC5zY3JvbGxUb3AgfHwgMDtcblx0XHRcdFx0XHR4ID0gZS5jbGllbnRYICsgbGVmdDtcblx0XHRcdFx0XHR5ID0gZS5jbGllbnRZICsgdG9wO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc2V0UG9zaXRpb24oeCwgeSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIHggYW5kIHkgY29vcmRpbmF0ZXMgc3RvcmVkIGFuZCB0YWtlcyBhcHByb3ByaWF0ZSBhY3Rpb24sXG5cdFx0ICogcnVubmluZyBob29rcyBhcyBhcHByb3ByaWF0ZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7SW50ZWdlcn0geCwgeSBTY3JlZW4gY29vcmRpbmF0ZXMgdG8gc2V0XG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHhcblx0XHQgKiBAcGFyYW0ge251bWJlcn0geVxuXHRcdCAqL1xuXHRcdHNldFBvc2l0aW9uKHgsIHkpIHtcblx0XHRcdHRoaXMueCA9IHg7XG5cdFx0XHR0aGlzLnkgPSB5O1xuXHRcdFx0aWYgKHRoaXMuZGlydHkgfHwgdGhpcy5ob29rcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMubGFzdEhvb2tfeCAhPT0gJ251bWJlcicpIHtcblx0XHRcdFx0dGhpcy5sYXN0SG9va194ID0gLTEwMDtcblx0XHRcdFx0dGhpcy5sYXN0SG9va195ID0gLTEwMDtcblx0XHRcdH1cblx0XHRcdGxldCBkaWZmID0gKHRoaXMubGFzdEhvb2tfeCAtIHgpICogKHRoaXMubGFzdEhvb2tfeSAtIHkpO1xuXHRcdFx0ZGlmZiA9IGRpZmYgPj0gMCA/IGRpZmYgOiAtZGlmZjtcblx0XHRcdGlmIChkaWZmID4gMSkge1xuXHRcdFx0XHR0aGlzLmxhc3RIb29rX3ggPSB4O1xuXHRcdFx0XHR0aGlzLmxhc3RIb29rX3kgPSB5O1xuXHRcdFx0XHRpZiAodGhpcy5kaXJ0eSkge1xuXHRcdFx0XHRcdHRoaXMuZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJ1bkhvb2tzKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGluZ3MgaW4gbW90aW9uLCB1bmxlc3MgdGhleSBhcmUgYWxyZWFkeSB0aGF0IGlzLCByZWdpc3RlcmluZyBhbiBldmVudCBsaXN0ZW5lciBvblxuXHRcdCAqIDxjb2RlPmRvY3VtZW50Lm9ubW91c2Vtb3ZlPC9jb2RlPi4gQSBoYWxmLWhlYXJ0ZWQgYXR0ZW1wdCBpcyBtYWRlIHRvIHByZXNlcnZlIHRoZSBvbGQgZXZlbnRcblx0XHQgKiBsaXN0ZW5lciBpZiB0aGVyZSBpcyBvbmUuXG5cdFx0ICovXG5cdFx0ZW5hYmxlKCkge1xuXHRcdFx0aWYgKHRoaXMuYWN0aXZlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuYWN0aXZlID0gdHJ1ZTtcblx0XHRcdC8vIH4gU2F2ZSB0aGUgY3VycmVudCBsaXN0ZW5lciBmb3IgbW91c2Vtb3ZlIGV2ZW50cy4gVGhpcyBpc24ndCB0b29cblx0XHRcdC8vIH4gcm9idXN0LCBvZiBjb3Vyc2UuXG5cdFx0XHR0aGlzLnNhdmVkTGlzdGVuZXIgPSBkb2N1bWVudC5vbm1vdXNlbW92ZTtcblx0XHRcdC8vIH4gR290dGEgc2F2ZSBAdHR7dGhpc30gYWdhaW4gZm9yIHRoZSBjbG9zdXJlLCBhbmQgdXNlIGFwcGx5IGZvclxuXHRcdFx0Ly8gfiB0aGUgbWVtYmVyIGZ1bmN0aW9uLlxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRkb2N1bWVudC5vbm1vdXNlbW92ZSA9IChlKSA9PiB7XG5cdFx0XHRcdHNlbGYudHJhY2soZSk7XG5cdFx0XHR9O1xuXHRcdFx0aWYgKHRoaXMubG9vcERlbGF5KSB7XG5cdFx0XHRcdHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gbG9nKCdsb29wIGRlbGF5IGluIG1vdXNldHJhY2tlciBpcyB3b3JraW5nJyk7XG5cdFx0XHRcdFx0c2VsZi5ydW5Ib29rcygpO1xuXHRcdFx0XHR9LCB0aGlzLmxvb3BEZWxheSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIERpc2FibGVzIHRoZSB0cmFja2VyLCByZW1vdmluZyB0aGUgZXZlbnQgbGlzdGVuZXIuXG5cdFx0ICovXG5cdFx0ZGlzYWJsZSgpIHtcblx0XHRcdGlmICghdGhpcy5hY3RpdmUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnNhdmVkTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLnNhdmVkTGlzdGVuZXI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWxldGUgZG9jdW1lbnQub25tb3VzZW1vdmU7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy50aW1lcikge1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgTmF2cG9wdXAuXG5cdCAqIEdldHMgYSBVSUQgZm9yIHRoZSBwb3B1cCBhbmRcblx0ICpcblx0ICogQHBhcmFtIGluaXQgQ29udHJ1Y3RvciBvYmplY3QuIElmIDxjb2RlPmluaXQuZHJhZ2dhYmxlPC9jb2RlPiBpcyB0cnVlIG9yIGFic2VudCwgdGhlIHBvcHVwIGJlY29tZXMgZHJhZ2dhYmxlLlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQGNsYXNzIFRoZSBOYXZwb3B1cCBjbGFzcy4gVGhpcyBnZW5lcmF0ZXMgcG9wdXAgaGludHMsIGFuZCBkb2VzIHNvbWUgbWFuYWdlbWVudCBvZiB0aGVtLlxuXHQgKi9cblx0Y2xhc3MgTmF2cG9wdXAge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0Ly8gbXcubm90aWZ5KCduZXcgTmF2cG9wdXAoaW5pdCknLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHQvKipcblx0XHRcdCAqIFVJRCBmb3IgZWFjaCBOYXZwb3B1cCBpbnN0YW5jZS5cblx0XHRcdCAqIFJlYWQtb25seS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBpbnRlZ2VyXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudWlkID0gTmF2cG9wdXAudWlkKys7XG5cdFx0XHQvKipcblx0XHRcdCAqIFJlYWQtb25seSBmbGFnIGZvciBjdXJyZW50IHZpc2liaWxpdHkgb2YgdGhlIHBvcHVwLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBGbGFnIHRvIGJlIHNldCB3aGVuIHdlIHdhbnQgdG8gY2FuY2VsIGEgcHJldmlvdXMgcmVxdWVzdCB0b1xuXHRcdFx0ICogc2hvdyB0aGUgcG9wdXAgaW4gYSBsaXR0bGUgd2hpbGUuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5ub3Nob3cgPSBmYWxzZTtcblx0XHRcdC8qKlxuXHRcdFx0ICogQ2F0ZWdvcmlzZWQgbGlzdCBvZiBob29rcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAc2VlICNydW5Ib29rc1xuXHRcdFx0ICogQHNlZSAjYWRkSG9va1xuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqIEB0eXBlIE9iamVjdFxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmhvb2tzID0ge1xuXHRcdFx0XHRjcmVhdGU6IFtdLFxuXHRcdFx0XHR1bmhpZGU6IFtdLFxuXHRcdFx0XHRoaWRlOiBbXSxcblx0XHRcdH07XG5cdFx0XHQvKipcblx0XHRcdCAqIGxpc3Qgb2YgdW5pcXVlIElEcyBvZiBob29rIGZ1bmN0aW9ucywgdG8gYXZvaWQgZHVwbGljYXRlc1xuXHRcdFx0ICpcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuaG9va0lkcyA9IHt9O1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBMaXN0IG9mIGRvd25sb2FkcyBhc3NvY2lhdGVkIHdpdGggdGhlIHBvcHVwLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKiBAdHlwZSBBcnJheVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmRvd25sb2FkcyA9IFtdO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBOdW1iZXIgb2YgdW5jb21wbGV0ZWQgZG93bmxvYWRzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGludGVnZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5wZW5kaW5nID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogVG9sZXJhbmNlIGluIHBpeGVscyB3aGVuIGRldGVjdGluZyB3aGV0aGVyIHRoZSBtb3VzZSBoYXMgbGVmdCB0aGUgcG9wdXAuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmZ1enogPSA1O1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBGbGFnIHRvIHRvZ2dsZSBydW5uaW5nIHtAc291cmNlICNsaW1pdEhvcml6b250YWxQb3NpdGlvbn0gdG8gcmVndWxhdGUgdGhlIHBvcHVwJ3MgcG9zaXRpb24uXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmNvbnN0cmFpbmVkID0gdHJ1ZTtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIHBvcHVwIHdpZHRoIGluIHBpeGVscy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLndpZHRoID0gMDtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIHBvcHVwIHdpZHRoIGluIHBpeGVscy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmhlaWdodCA9IDA7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBtYWluIGNvbnRlbnQgRElWIGVsZW1lbnQuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgSFRNTERpdkVsZW1lbnRcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5tYWluRGl2ID0gbnVsbDtcblx0XHRcdHRoaXMuY3JlYXRlTWFpbkRpdigpO1xuXHRcdFx0Ly9cdGlmICghaW5pdCB8fCB0eXBlb2YgaW5pdC5wb3B1cHNfZHJhZ2dhYmxlPT0ndW5kZWZpbmVkJyB8fCBpbml0LnBvcHVwc19kcmFnZ2FibGUpIHtcblx0XHRcdC8vXHRcdHRoaXMubWFrZURyYWdnYWJsZSh0cnVlKTtcblx0XHRcdC8vXHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJldHJpZXZlcyB0aGUge0Bzb3VyY2UgI3Zpc2libGV9IGF0dHJpYnV0ZSwgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwb3B1cCBpcyBjdXJyZW50bHkgdmlzaWJsZS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHQgKi9cblx0XHRpc1Zpc2libGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aXNpYmxlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSZXBvc2l0aW9ucyBwb3B1cCB1c2luZyBDU1Mgc3R5bGUuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7aW50ZWdlcn0geCB4LWNvb3JkaW5hdGUgKHB4KVxuXHRcdCAqIEBwYXJhbSB7aW50ZWdlcn0geSB5LWNvb3JkaW5hdGUgKHB4KVxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gbm9MaW1pdEhvciBEb24ndCBjYWxsIHtAc291cmNlICNsaW1pdEhvcml6b250YWxQb3NpdGlvbn1cblx0XHQgKi9cblx0XHRyZXBvc2l0aW9uKHgsIHksIG5vTGltaXRIb3IpIHtcblx0XHRcdGxvZyhgcmVwb3NpdGlvbigke3h9LCR7eX0sJHtub0xpbWl0SG9yfSlgKTtcblx0XHRcdGlmICh4ICE9PSB1bmRlZmluZWQgJiYgeCAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLmxlZnQgPSB4O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHkgIT09IHVuZGVmaW5lZCAmJiB5ICE9PSBudWxsKSB7XG5cdFx0XHRcdHRoaXMudG9wID0geTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmxlZnQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRvcCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5sZWZ0fXB4YDtcblx0XHRcdFx0dGhpcy5tYWluRGl2LnN0eWxlLnRvcCA9IGAke3RoaXMudG9wfXB4YDtcblx0XHRcdH1cblx0XHRcdGlmICghbm9MaW1pdEhvcikge1xuXHRcdFx0XHR0aGlzLmxpbWl0SG9yaXpvbnRhbFBvc2l0aW9uKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFByZXZlbnRzIHBvcHVwcyBmcm9tIGJlaW5nIGluIHNpbGx5IGxvY2F0aW9ucy4gSG9wZWZ1bGx5LlxuXHRcdCAqIFNob3VsZCBub3QgYmUgcnVuIGlmIHtAc291cmNlICNjb25zdHJhaW5lZH0gaXMgdHJ1ZS5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0bGltaXRIb3Jpem9udGFsUG9zaXRpb24oKSB7XG5cdFx0XHRpZiAoIXRoaXMuY29uc3RyYWluZWQgfHwgdGhpcy50b29XaWRlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuXHRcdFx0Y29uc3QgeCA9IHRoaXMubGVmdDtcblx0XHRcdGNvbnN0IHcgPSB0aGlzLndpZHRoO1xuXHRcdFx0Y29uc3QgY1dpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsaWVudFdpZHRoO1xuXHRcdFx0Ly9cdGxvZygnbGltaXRIb3Jpem9udGFsUG9zaXRpb246IHg9Jyt4K1xuXHRcdFx0Ly9cdFx0XHQnLCB0aGlzLmxlZnQ9JyArIHRoaXMubGVmdCArXG5cdFx0XHQvL1x0XHRcdCcsIHRoaXMud2lkdGg9JyArIHRoaXMud2lkdGggK1xuXHRcdFx0Ly9cdFx0XHQnLCBjV2lkdGg9JyArIGNXaWR0aCk7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHggKyB3ID49IGNXaWR0aCB8fFxuXHRcdFx0XHQoeCA+IDAgJiZcblx0XHRcdFx0XHR0aGlzLm1heFdpZHRoICYmXG5cdFx0XHRcdFx0dGhpcy53aWR0aCA8IHRoaXMubWF4V2lkdGggJiZcblx0XHRcdFx0XHR0aGlzLmhlaWdodCA+IHRoaXMud2lkdGggJiZcblx0XHRcdFx0XHR4ID4gY1dpZHRoIC0gdGhpcy5tYXhXaWR0aClcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBUaGlzIGlzIGEgdmVyeSBuYXN0eSBoYWNrLiBUaGVyZSBoYXMgdG8gYmUgYSBiZXR0ZXIgd2F5IVxuXHRcdFx0XHQvLyBXZSBmaW5kIHRoZSBcIm5hdHVyYWxcIiB3aWR0aCBvZiB0aGUgZGl2IGJ5IHBvc2l0aW9uaW5nIGl0IGF0IHRoZSBmYXIgbGVmdFxuXHRcdFx0XHQvLyB0aGVuIHJlc2V0IGl0IHNvIHRoYXQgaXQgc2hvdWxkIGJlIGZsdXNoIHJpZ2h0ICh3ZWxsLCBuZWFybHkpXG5cdFx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS5sZWZ0ID0gJy0xMDAwMHB4Jztcblx0XHRcdFx0dGhpcy5tYWluRGl2LnN0eWxlLndpZHRoID0gYCR7dGhpcy5tYXhXaWR0aH1weGA7XG5cdFx0XHRcdGNvbnN0IG5hdHVyYWxXaWR0aCA9IE51bWJlci5wYXJzZUludCh0aGlzLm1haW5EaXYub2Zmc2V0V2lkdGgsIDEwKTtcblx0XHRcdFx0bGV0IG5ld0xlZnQgPSBjV2lkdGggLSBuYXR1cmFsV2lkdGggLSAxO1xuXHRcdFx0XHRpZiAobmV3TGVmdCA8IDApIHtcblx0XHRcdFx0XHRuZXdMZWZ0ID0gMDtcblx0XHRcdFx0XHR0aGlzLnRvb1dpZGUgPSB0cnVlO1xuXHRcdFx0XHR9IC8vIHN0aWxsIHVuc3RhYmxlIGZvciByZWFsbHkgd2lkZSBwb3B1cHM/XG5cdFx0XHRcdGxvZyhcblx0XHRcdFx0XHRgbGltaXRIb3Jpem9udGFsUG9zaXRpb246IG1vdmluZyB0byAoJHtuZXdMZWZ0fSwke3RoaXMudG9wfSk7YCArXG5cdFx0XHRcdFx0XHRgIG5hdHVyYWxXaWR0aD0ke25hdHVyYWxXaWR0aH0sIGNsaWVudFdpZHRoPSR7Y1dpZHRofWBcblx0XHRcdFx0KTtcblx0XHRcdFx0dGhpcy5yZXBvc2l0aW9uKG5ld0xlZnQsIG51bGwsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBCcmluZ3MgcG9wdXAgdG8gdGhlIHRvcCBvZiB0aGUgei1vcmRlci5cblx0XHQgKiBXZSBpbmNyZW1lbnQgdGhlIHtAc291cmNlICNoaWdoZXN0fSBwcm9wZXJ0eSBvZiB0aGUgY29udHJ1Y3RvciBoZXJlLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRyYWlzZSgpIHtcblx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS56SW5kZXggPSBOYXZwb3B1cC5oaWdoZXN0ICsgMTtcblx0XHRcdCsrTmF2cG9wdXAuaGlnaGVzdDtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU2hvd3MgdGhlIHBvcHVwIHByb3ZpZGVkIHtAc291cmNlICNub3Nob3d9IGlzIG5vdCB0cnVlLlxuXHRcdCAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uLCBicmluZ3MgdGhlIHBvcHVwIHRvIHRoZSB0b3Agb2YgdGhlIHotb3JkZXIgYW5kIHVuaGlkZXMgaXQuXG5cdFx0ICovXG5cdFx0c2hvdygpIHtcblx0XHRcdC8vIGRvY3VtZW50LnRpdGxlKz0ncyc7XG5cdFx0XHRpZiAodGhpcy5ub3Nob3cpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZG9jdW1lbnQudGl0bGUrPSd0Jztcblx0XHRcdHRoaXMucmVwb3NpdGlvbigpO1xuXHRcdFx0dGhpcy5yYWlzZSgpO1xuXHRcdFx0dGhpcy51bmhpZGUoKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQ2hlY2tzIHRvIHNlZSBpZiB0aGUgbW91c2UgcG9pbnRlciBoYXNcblx0XHQgKiBzdGFiaWxpc2VkIChjaGVja2luZyBldmVyeSA8Y29kZT50aW1lPC9jb2RlPi8yIG1pbGxpc2Vjb25kcykgYW5kIHJ1bnMgdGhlXG5cdFx0ICoge0Bzb3VyY2UgI3Nob3d9IG1ldGhvZCBpZiBpdCBoYXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2ludGVnZXJ9IHRpbWUgVGhlIG1pbmltdW0gdGltZSAobXMpIGJlZm9yZSB0aGUgcG9wdXAgbWF5IGJlIHNob3duLlxuXHRcdCAqL1xuXHRcdHNob3dTb29uSWZTdGFibGUodGltZSkge1xuXHRcdFx0bG9nKGBzaG93U29vbklmU3RhYmxlLCB0aW1lPSR7dGltZX1gKTtcblx0XHRcdGlmICh0aGlzLnZpc2libGUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ub3Nob3cgPSBmYWxzZTtcblx0XHRcdC8vIH4gaW5pdGlhbGl6ZSB0aGVzZSB2YXJpYWJsZXMgc28gdGhhdCB3ZSBuZXZlciBydW4gQHR0e3Nob3d9IGFmdGVyXG5cdFx0XHQvLyB+IGp1c3QgaGFsZiB0aGUgdGltZVxuXHRcdFx0dGhpcy5zdGFibGVfeCA9IC0xZTQ7XG5cdFx0XHR0aGlzLnN0YWJsZV95ID0gLTFlNDtcblx0XHRcdGNvbnN0IHN0YWJsZVNob3cgPSAoKSA9PiB7XG5cdFx0XHRcdGxvZygnc3RhYmxlU2hvdyBjYWxsZWQnKTtcblx0XHRcdFx0Y29uc3QgbmV3X3ggPSBOYXZwb3B1cC50cmFja2VyLng7XG5cdFx0XHRcdGNvbnN0IG5ld195ID0gTmF2cG9wdXAudHJhY2tlci55O1xuXHRcdFx0XHRjb25zdCBkeCA9IHNlbGYuc3RhYmxlX3ggLSBuZXdfeDtcblx0XHRcdFx0Y29uc3QgZHkgPSBzZWxmLnN0YWJsZV95IC0gbmV3X3k7XG5cdFx0XHRcdGNvbnN0IGZ1enoyID0gMDsgLy8gc2F2ZWRUaGlzLmZ1enogKiBzYXZlZFRoaXMuZnV6ejtcblx0XHRcdFx0Ly8gZG9jdW1lbnQudGl0bGUgKz0gJ1snICsgW3NhdmVkVGhpcy5zdGFibGVfeCxuZXdfeCwgc2F2ZWRUaGlzLnN0YWJsZV95LG5ld195LCBkeCwgZHksIGZ1enoyXS5qb2luKCcsJykgKyAnXSAnO1xuXHRcdFx0XHRpZiAoZHggKiBkeCA8PSBmdXp6MiAmJiBkeSAqIGR5IDw9IGZ1enoyKSB7XG5cdFx0XHRcdFx0bG9nKCdtb3VzZSBpcyBzdGFibGUnKTtcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHNlbGYuc2hvd1Nvb25TdGFibGVUaW1lcik7XG5cdFx0XHRcdFx0c2VsZi5yZXBvc2l0aW9uKG5ld194ICsgMiwgbmV3X3kgKyAyKTtcblx0XHRcdFx0XHRzZWxmLnNob3coKTtcblx0XHRcdFx0XHRzZWxmLmxpbWl0SG9yaXpvbnRhbFBvc2l0aW9uKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYuc3RhYmxlX3ggPSBuZXdfeDtcblx0XHRcdFx0c2VsZi5zdGFibGVfeSA9IG5ld195O1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0dGhpcy5zaG93U29vblN0YWJsZVRpbWVyID0gc2V0SW50ZXJ2YWwoc3RhYmxlU2hvdywgdGltZSAvIDIpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSB7QHNvdXJjZSAjbm9zaG93fSBmbGFnIGFuZCBoaWRlcyB0aGUgcG9wdXAuIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuXHRcdCAqIHdoZW4gdGhlIG1vdXNlIGxlYXZlcyB0aGUgbGluayBiZWZvcmVcblx0XHQgKiAob3IgYWZ0ZXIpIGl0J3MgYWN0dWFsbHkgYmVlbiBkaXNwbGF5ZWQuXG5cdFx0ICovXG5cdFx0YmFuaXNoKCkge1xuXHRcdFx0bG9nKCdiYW5pc2ggY2FsbGVkJyk7XG5cdFx0XHQvLyBoaWRlIGFuZCBwcmV2ZW50IHNob3dpbmcgd2l0aCBzaG93U29vbiBpbiB0aGUgZnV0dXJlXG5cdFx0XHR0aGlzLm5vc2hvdyA9IHRydWU7XG5cdFx0XHRpZiAodGhpcy5zaG93U29vblN0YWJsZVRpbWVyKSB7XG5cdFx0XHRcdGxvZygnY2xlYXJpbmcgc2hvd1Nvb25TdGFibGVUaW1lcicpO1xuXHRcdFx0XHRjbGVhckludGVydmFsKHRoaXMuc2hvd1Nvb25TdGFibGVUaW1lcik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhpZGUoKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUnVucyBob29rcyBhZGRlZCB3aXRoIHtAc291cmNlICNhZGRIb29rfS5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgbmFtZSBvZiB0aGUge0Bzb3VyY2UgI2hvb2tzfSBhcnJheSAtIG9uZSBvZiAnY3JlYXRlJywgJ3VuaGlkZScsICdoaWRlJ1xuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3aGVuIENvbnRyb2xzIGV4YWN0bHkgd2hlbiB0aGUgaG9vayBpcyBydW46IGVpdGhlciAnYmVmb3JlJyBvciAnYWZ0ZXInXG5cdFx0ICovXG5cdFx0cnVuSG9va3Moa2V5LCB3aGVuKSB7XG5cdFx0XHRpZiAoIXRoaXMuaG9va3Nba2V5XSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBrZXlIb29rcyA9IHRoaXMuaG9va3Nba2V5XTtcblx0XHRcdGNvbnN0IGxlbiA9IGtleUhvb2tzLmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcblx0XHRcdFx0aWYgKGtleUhvb2tzW2ldICYmIGtleUhvb2tzW2ldLndoZW4gPT09IHdoZW4gJiYgUmVmbGVjdC5hcHBseShrZXlIb29rc1tpXS5ob29rLCB0aGlzLCBbXSkpIHtcblx0XHRcdFx0XHQvLyByZW1vdmUgdGhlIGhvb2tcblx0XHRcdFx0XHRpZiAoa2V5SG9va3NbaV0uaG9va0lkKSB7XG5cdFx0XHRcdFx0XHRkZWxldGUgdGhpcy5ob29rSWRzW2tleUhvb2tzW2ldLmhvb2tJZF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGtleUhvb2tzW2ldID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBBZGRzIGEgaG9vayB0byB0aGUgcG9wdXAuIEhvb2sgZnVuY3Rpb25zIGFyZSBydW4gd2l0aCA8Y29kZT50aGlzPC9jb2RlPiBzZXQgdG8gcmVmZXIgdG8gdGhlXG5cdFx0ICogTmF2cG9wdXAgaW5zdGFuY2UsIGFuZCBubyBhcmd1bWVudHMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rIFRoZSBob29rIGZ1bmN0aW9uLiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gdHJ1ZSBhcmUgZGVsZXRlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30ga2V5IEtleSBuYW1lIG9mIHRoZSB7QHNvdXJjZSAjaG9va3N9IGFycmF5IC0gb25lIG9mICdjcmVhdGUnLCAndW5oaWRlJywgJ2hpZGUnXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHdoZW4gQ29udHJvbHMgZXhhY3RseSB3aGVuIHRoZSBob29rIGlzIHJ1bjogZWl0aGVyICdiZWZvcmUnIG9yICdhZnRlcidcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdWlkIEEgdHJ1dGh5IHN0cmluZyBpZGVudGlmeWluZyB0aGUgaG9vayBmdW5jdGlvbjsgaWYgaXQgbWF0Y2hlcyBhbm90aGVyIGhvb2tcblx0XHQgKiBpbiB0aGlzIHBvc2l0aW9uLCBpdCB3b24ndCBiZSBhZGRlZCBhZ2Fpbi5cblx0XHQgKi9cblx0XHRhZGRIb29rKGhvb2ssIGtleSwgd2hlbiwgdWlkKSB7XG5cdFx0XHR3aGVuIHx8PSAnYWZ0ZXInO1xuXHRcdFx0aWYgKCF0aGlzLmhvb2tzW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gaWYgdWlkIGlzIHNwZWNpZmllZCwgZG9uJ3QgYWRkIGR1cGxpY2F0ZXNcblx0XHRcdGxldCBob29rSWQ7XG5cdFx0XHRpZiAodWlkKSB7XG5cdFx0XHRcdGhvb2tJZCA9IFtrZXksIHdoZW4sIHVpZF0uam9pbignfCcpO1xuXHRcdFx0XHRpZiAodGhpcy5ob29rSWRzW2hvb2tJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5ob29rSWRzW2hvb2tJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ob29rc1trZXldLnB1c2goe1xuXHRcdFx0XHRob29rLFxuXHRcdFx0XHR3aGVuLFxuXHRcdFx0XHRob29rSWQsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyB0aGUgbWFpbiBESVYgZWxlbWVudCwgd2hpY2ggY29udGFpbnMgYWxsIHRoZSBhY3R1YWwgcG9wdXAgY29udGVudC5cblx0XHQgKiBSdW5zIGhvb2tzIHdpdGgga2V5ICdjcmVhdGUnLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRjcmVhdGVNYWluRGl2KCkge1xuXHRcdFx0aWYgKHRoaXMubWFpbkRpdikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJ1bkhvb2tzKCdjcmVhdGUnLCAnYmVmb3JlJyk7XG5cdFx0XHRjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdG1haW5EaXYub25jbGljayA9IChlKSA9PiB7XG5cdFx0XHRcdHNlbGYub25jbGlja0xpc3RlbmVyKGUpO1xuXHRcdFx0fTtcblx0XHRcdG1haW5EaXYuY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUgPz8gJ25hdnBvcHVwX21haW5kaXYnO1xuXHRcdFx0bWFpbkRpdi5pZCA9IG1haW5EaXYuY2xhc3NOYW1lICsgdGhpcy51aWQ7XG5cdFx0XHRtYWluRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdG1haW5EaXYuc3R5bGUubWluV2lkdGggPSAnMzUwcHgnO1xuXHRcdFx0bWFpbkRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0bWFpbkRpdi5jbGFzc05hbWUgPSAnbmF2cG9wdXAnO1xuXHRcdFx0Ly8gZWFzeSBhY2Nlc3MgdG8gamF2YXNjcmlwdCBvYmplY3QgdGhyb3VnaCBET00gZnVuY3Rpb25zXG5cdFx0XHRtYWluRGl2Lm5hdnBvcHVwID0gdGhpcztcblx0XHRcdHRoaXMubWFpbkRpdiA9IG1haW5EaXY7XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kKG1haW5EaXYpO1xuXHRcdFx0dGhpcy5ydW5Ib29rcygnY3JlYXRlJywgJ2FmdGVyJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIENhbGxzIHRoZSB7QHNvdXJjZSAjcmFpc2V9IG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0b25jbGlja0xpc3RlbmVyKCkge1xuXHRcdFx0dGhpcy5yYWlzZSgpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBNYWtlcyB0aGUgcG9wdXAgZHJhZ2dhYmxlLCB1c2luZyBhIHtAc291cmNlIERyYWd9IG9iamVjdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBoYW5kbGVOYW1lXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRtYWtlRHJhZ2dhYmxlKGhhbmRsZU5hbWUpIHtcblx0XHRcdGlmICghdGhpcy5tYWluRGl2KSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlTWFpbkRpdigpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZHJhZyA9IG5ldyBEcmFnKCk7XG5cdFx0XHRpZiAoIWhhbmRsZU5hbWUpIHtcblx0XHRcdFx0ZHJhZy5zdGFydENvbmRpdGlvbiA9IChlKSA9PiB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGlmICghZS5zaGlmdEtleSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0bGV0IGRyYWdIYW5kbGU7XG5cdFx0XHRpZiAoaGFuZGxlTmFtZSkge1xuXHRcdFx0XHRkcmFnSGFuZGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aGFuZGxlTmFtZX1gKTtcblx0XHRcdH1cblx0XHRcdGRyYWdIYW5kbGUgfHw9IHRoaXMubWFpbkRpdjtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0ZHJhZy5lbmRIb29rID0gKHgsIHkpID0+IHtcblx0XHRcdFx0TmF2cG9wdXAudHJhY2tlci5kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdHNlbGYucmVwb3NpdGlvbih4LCB5KTtcblx0XHRcdH07XG5cdFx0XHRkcmFnLmluaXQoZHJhZ0hhbmRsZSwgdGhpcy5tYWluRGl2KTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogSGlkZXMgdGhlIHBvcHVwIHVzaW5nIENTUy4gUnVucyBob29rcyB3aXRoIGtleSAnaGlkZScuXG5cdFx0ICogU2V0cyB7QHNvdXJjZSAjdmlzaWJsZX0gYXBwcm9wcmlhdGVseS5cblx0XHQgKiB7QHNvdXJjZSAjYmFuaXNofSBzaG91bGQgYmUgY2FsbGVkIGV4dGVybmFsbHkgaW5zdGVhZCBvZiB0aGlzIG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0aGlkZSgpIHtcblx0XHRcdHRoaXMucnVuSG9va3MoJ2hpZGUnLCAnYmVmb3JlJyk7XG5cdFx0XHR0aGlzLmFib3J0RG93bmxvYWRzKCk7XG5cdFx0XHRpZiAodGhpcy52aXNpYmxlICE9PSB1bmRlZmluZWQgJiYgdGhpcy52aXNpYmxlKSB7XG5cdFx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMucnVuSG9va3MoJ2hpZGUnLCAnYWZ0ZXInKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU2hvd3MgdGhlIHBvcHVwIHVzaW5nIENTUy4gUnVucyBob29rcyB3aXRoIGtleSAndW5oaWRlJy5cblx0XHQgKiBTZXRzIHtAc291cmNlICN2aXNpYmxlfSBhcHByb3ByaWF0ZWx5LiAgIHtAc291cmNlICNzaG93fSBzaG91bGQgYmUgY2FsbGVkIGV4dGVybmFsbHkgaW5zdGVhZCBvZiB0aGlzIG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dW5oaWRlKCkge1xuXHRcdFx0dGhpcy5ydW5Ib29rcygndW5oaWRlJywgJ2JlZm9yZScpO1xuXHRcdFx0aWYgKHRoaXMudmlzaWJsZSAhPT0gdW5kZWZpbmVkICYmICF0aGlzLnZpc2libGUpIHtcblx0XHRcdFx0dGhpcy5tYWluRGl2LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0XHRcdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMucnVuSG9va3MoJ3VuaGlkZScsICdhZnRlcicpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSA8Y29kZT5pbm5lckhUTUw8L2NvZGU+IGF0dHJpYnV0ZSBvZiB0aGUgbWFpbiBkaXYgY29udGFpbmluZyB0aGUgcG9wdXAgY29udGVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIFRoZSBIVE1MIHRvIHNldC5cblx0XHQgKi9cblx0XHRzZXRJbm5lckhUTUwoaHRtbCkge1xuXHRcdFx0dGhpcy5tYWluRGl2LmlubmVySFRNTCA9IGh0bWw7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZXMgdGhlIHtAc291cmNlICN3aWR0aH0gYW5kIHtAc291cmNlICNoZWlnaHR9IGF0dHJpYnV0ZXMgd2l0aCB0aGUgQ1NTIHByb3BlcnRpZXMuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHVwZGF0ZURpbWVuc2lvbnMoKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gTnVtYmVyLnBhcnNlSW50KHRoaXMubWFpbkRpdi5vZmZzZXRXaWR0aCwgMTApO1xuXHRcdFx0dGhpcy5oZWlnaHQgPSBOdW1iZXIucGFyc2VJbnQodGhpcy5tYWluRGl2Lm9mZnNldEhlaWdodCwgMTApO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBDaGVja3MgaWYgdGhlIHBvaW50ICh4LHkpIGlzIHdpdGhpbiB7QHNvdXJjZSAjZnV6en0gb2YgdGhlXG5cdFx0ICoge0Bzb3VyY2UgI21haW5EaXZ9LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSB4IHgtY29vcmRpbmF0ZSAocHgpXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSB5IHktY29vcmRpbmF0ZSAocHgpXG5cdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdCAqL1xuXHRcdGlzV2l0aGluKHgsIHkpIHtcblx0XHRcdC8vIH4gSWYgd2UncmUgbm90IGV2ZW4gdmlzaWJsZSwgbm8gcG9pbnQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXNcblx0XHRcdC8vIH4gYmVpbmcgd2l0aGluIHRoZSBwb3B1cC5cblx0XHRcdGlmICghdGhpcy52aXNpYmxlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuXHRcdFx0Y29uc3QgZnV6eiA9IHRoaXMuZnV6eiB8fCAwO1xuXHRcdFx0Ly8gfiBVc2UgYSBzaW1wbGUgYm94IG1ldHJpYyBoZXJlLlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0eCArIGZ1enogPj0gdGhpcy5sZWZ0ICYmXG5cdFx0XHRcdHggLSBmdXp6IDw9IHRoaXMubGVmdCArIHRoaXMud2lkdGggJiZcblx0XHRcdFx0eSArIGZ1enogPj0gdGhpcy50b3AgJiZcblx0XHRcdFx0eSAtIGZ1enogPD0gdGhpcy50b3AgKyB0aGlzLmhlaWdodFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQWRkcyBhIGRvd25sb2FkIHRvIHtAc291cmNlICNkb3dubG9hZHN9LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtEb3dubG9hZGVyfSBkb3dubG9hZFxuXHRcdCAqL1xuXHRcdGFkZERvd25sb2FkKGRvd25sb2FkKSB7XG5cdFx0XHRpZiAoIWRvd25sb2FkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuZG93bmxvYWRzLnB1c2goZG93bmxvYWQpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBBYm9ydHMgdGhlIGRvd25sb2FkcyBsaXN0ZWQgaW4ge0Bzb3VyY2UgI2Rvd25sb2Fkc30uXG5cdFx0ICpcblx0XHQgKiBAc2VlIERvd25sb2FkZXIjYWJvcnRcblx0XHQgKi9cblx0XHRhYm9ydERvd25sb2FkcygpIHtcblx0XHRcdGZvciAoY29uc3QgZCBvZiB0aGlzLmRvd25sb2Fkcykge1xuXHRcdFx0XHRpZiAoZCAmJiBkLmFib3J0KSB7XG5cdFx0XHRcdFx0ZC5hYm9ydCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRvd25sb2FkcyA9IFtdO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogQSBVSUQgZm9yIGVhY2ggTmF2cG9wdXAuIFRoaXMgY29uc3RydWN0b3IgcHJvcGVydHkgaXMganVzdCBhIGNvdW50ZXIuXG5cdCAqXG5cdCAqIEB0eXBlIGludGVnZXJcblx0ICogQHByaXZhdGVcblx0ICovXG5cdE5hdnBvcHVwLnVpZCA9IDA7XG5cdC8qKlxuXHQgKiBDb3VudGVyIGluZGljYXRpbmcgdGhlIHotb3JkZXIgb2YgdGhlIFwiaGlnaGVzdFwiIHBvcHVwLlxuXHQgKiBXZSBzdGFydCB0aGUgei1pbmRleCBhdCAxMDAwIHNvIHRoYXQgcG9wdXBzIGFyZSBhYm92ZSBldmVyeXRoaW5nXG5cdCAqIGVsc2Ugb24gdGhlIHNjcmVlbi5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHR5cGUgaW50ZWdlclxuXHQgKi9cblx0TmF2cG9wdXAuaGlnaGVzdCA9IDEwMDA7XG5cdC8qKlxuXHQgKiBBIHtAc291cmNlIE1vdXNldHJhY2tlcn0gaW5zdGFuY2Ugd2hpY2ggaXMgYSBwcm9wZXJ0eSBvZiB0aGUgY29uc3RydWN0b3IgKHBzZXVkby1nbG9iYWwpLlxuXHQgKi9cblx0TmF2cG9wdXAudHJhY2tlciA9IG5ldyBNb3VzZXRyYWNrZXIoKTtcblx0Ly8gRU5ERklMRTogbmF2cG9wdXAuanNcblx0Ly8gU1RBUlRGSUxFOiBkaWZmLmpzXG5cdC8qKlxuXHQgKiBKYXZhc2NyaXB0IERpZmYgQWxnb3JpdGhtIEJ5IEpvaG4gUmVzaWcgKGh0dHA6Ly9lam9obi5vcmcvKSBhbmQgTHVwaW5cblx0ICpcblx0ICogTW9yZSBJbmZvOiBodHRwOi8vZWpvaG4ub3JnL3Byb2plY3RzL2phdmFzY3JpcHQtZGlmZi1hbGdvcml0aG0vXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nW119IHhcblx0ICovXG5cdGNvbnN0IGRlbEZtdCA9ICh4KSA9PiB7XG5cdFx0aWYgKHgubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdHJldHVybiBgPGRlbCBjbGFzcz0ncG9wdXBEaWZmJz4ke3guam9pbignJyl9PC9kZWw+YDtcblx0fTtcblx0Y29uc3QgaW5zRm10ID0gKHgpID0+IHtcblx0XHRpZiAoeC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0cmV0dXJuIGA8aW5zIGNsYXNzPSdwb3B1cERpZmYnPiR7eC5qb2luKCcnKX08L2lucz5gO1xuXHR9O1xuXHRjb25zdCBjb3VudENyb3NzaW5ncyA9IChhLCBiLCBpLCBlamVjdCkgPT4ge1xuXHRcdC8vIGNvdW50IHRoZSBjcm9zc2luZ3Mgb24gdGhlIGVkZ2Ugc3RhcnRpbmcgYXQgYltpXVxuXHRcdGlmICghYltpXS5yb3cgJiYgYltpXS5yb3cgIT09IDApIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdFx0bGV0IGNvdW50ID0gMDtcblx0XHRmb3IgKGNvbnN0IFtqLCBlbGVtZW50XSBvZiBhLmVudHJpZXMoKSkge1xuXHRcdFx0aWYgKCFlbGVtZW50LnJvdyAmJiBlbGVtZW50LnJvdyAhPT0gMCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmICgoaiAtIGJbaV0ucm93KSAqIChpIC0gZWxlbWVudC5yb3cpID4gMCkge1xuXHRcdFx0XHRpZiAoZWplY3QpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY291bnQ7XG5cdH07XG5cdGNvbnN0IHNob3J0ZW5EaWZmU3RyaW5nID0gZnVuY3Rpb24gc2hvcnRlbkRpZmZTdHJpbmcoc3RyLCBjb250ZXh0KSB7XG5cdFx0Y29uc3QgcmUgPSAvKDxkZWxbXFxTXFxzXSo/PFxcL2RlbD58PGluc1tcXFNcXHNdKj88XFwvaW5zPikvO1xuXHRcdGNvbnN0IHNwbGl0dGVkID0gc3RyLnNwbGl0KHJlKTtcblx0XHRsZXQgcmV0ID0gWycnXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0dGVkLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRpZiAoc3BsaXR0ZWRbaV0ubGVuZ3RoIDwgMiAqIGNvbnRleHQpIHtcblx0XHRcdFx0cmV0W3JldC5sZW5ndGggLSAxXSArPSBzcGxpdHRlZFtpXTtcblx0XHRcdFx0aWYgKGkgKyAxIDwgc3BsaXR0ZWQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0W3JldC5sZW5ndGggLSAxXSArPSBzcGxpdHRlZFtpICsgMV07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoaSA+IDApIHtcblx0XHRcdFx0XHRyZXRbcmV0Lmxlbmd0aCAtIDFdICs9IHNwbGl0dGVkW2ldLnNsaWNlKDAsIE1hdGgubWF4KDAsIGNvbnRleHQpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaSArIDEgPCBzcGxpdHRlZC5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXQucHVzaChzcGxpdHRlZFtpXS5zbGljZShNYXRoLm1heCgwLCBzcGxpdHRlZFtpXS5sZW5ndGggLSBjb250ZXh0KSkgKyBzcGxpdHRlZFtpICsgMV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWxlIChyZXQubGVuZ3RoID4gMCAmJiAhcmV0WzBdKSB7XG5cdFx0XHRyZXQgPSByZXQuc2xpY2UoMSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IGRpZmZTdHJpbmcgPSAobywgbikgPT4ge1xuXHRcdC8vICBXZSBuZWVkIHRvIHNwbGl0IHRoZSBzdHJpbmdzIG8gYW5kIG4gZmlyc3QsIGFuZCBlbnRpZnkoKSB0aGUgcGFydHNcblx0XHQvLyAgaW5kaXZpZHVhbGx5LCBzbyB0aGF0IHRoZSBIVE1MIGVudGl0aWVzIGFyZSBuZXZlciBjdXQgYXBhcnQuIChBeGVsQm9sZHQpXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgb1NwbGl0dGVkID0gby5zcGxpdCgvXFxiLyk7XG5cdFx0Y29uc3QgblNwbGl0dGVkID0gbi5zcGxpdCgvXFxiLyk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IG9TcGxpdHRlZC5sZW5ndGg7ICsraSkge1xuXHRcdFx0b1NwbGl0dGVkW2ldID0gb1NwbGl0dGVkW2ldLmVudGlmeSgpO1xuXHRcdH1cblx0XHRmb3IgKGkgPSAwOyBpIDwgblNwbGl0dGVkLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRuU3BsaXR0ZWRbaV0gPSBuU3BsaXR0ZWRbaV0uZW50aWZ5KCk7XG5cdFx0fVxuXHRcdGNvbnN0IG91dCA9IGRpZmYob1NwbGl0dGVkLCBuU3BsaXR0ZWQpO1xuXHRcdGxldCBzdHIgPSAnJztcblx0XHRsZXQgYWNjID0gW107IC8vIGFjY3VtdWxhdG9yIGZvciBwcmV0dGllciBvdXRwdXRcblxuXHRcdC8vIGNyb3NzaW5nIHBhaXJpbmdzIC0tIGVnICdBIEInIHZzICdCIEEnIC0tIGNhdXNlIHByb2JsZW1zLCBzbyBsZXQncyBpcm9uIHRoZW0gb3V0XG5cdFx0Ly8gdGhpcyBkb2Vzbid0IGFsd2F5cyBkbyB0aGluZ3Mgb3B0aW1hbGx5IGJ1dCBpdCBzaG91bGQgYmUgZmFzdCBlbm91Z2hcblx0XHRsZXQgbWF4T3V0cHV0UGFpciA9IDA7XG5cdFx0Zm9yIChpID0gMDsgaSA8IG91dC5uLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAob3V0Lm5baV0ucGFpcmVkKSB7XG5cdFx0XHRcdGlmIChtYXhPdXRwdXRQYWlyID4gb3V0Lm5baV0ucm93KSB7XG5cdFx0XHRcdFx0Ly8gdGFuZ2xlIC0gZGVsZXRlIHBhaXJpbmdcblx0XHRcdFx0XHRvdXQub1tvdXQubltpXS5yb3ddID0gb3V0Lm9bb3V0Lm5baV0ucm93XS50ZXh0O1xuXHRcdFx0XHRcdG91dC5uW2ldID0gb3V0Lm5baV0udGV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobWF4T3V0cHV0UGFpciA8IG91dC5uW2ldLnJvdykge1xuXHRcdFx0XHRcdG1heE91dHB1dFBhaXIgPSBvdXQubltpXS5yb3c7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gb3V0cHV0IHRoZSBzdHVmZiBwcmVjZWRpbmcgdGhlIGZpcnN0IHBhaXJlZCBvbGQgbGluZVxuXHRcdGZvciAoaSA9IDA7IGkgPCBvdXQuby5sZW5ndGggJiYgIW91dC5vW2ldLnBhaXJlZDsgKytpKSB7XG5cdFx0XHRhY2MucHVzaChvdXQub1tpXSk7XG5cdFx0fVxuXHRcdHN0ciArPSBkZWxGbXQoYWNjKTtcblx0XHRhY2MgPSBbXTtcblx0XHQvLyBtYWluIGxvb3Bcblx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0Lm4ubGVuZ3RoOyArK2kpIHtcblx0XHRcdC8vIG91dHB1dCB1bnBhaXJlZCBuZXcgXCJsaW5lc1wiXG5cdFx0XHR3aGlsZSAoaSA8IG91dC5uLmxlbmd0aCAmJiAhb3V0Lm5baV0ucGFpcmVkKSB7XG5cdFx0XHRcdGFjYy5wdXNoKG91dC5uW2krK10pO1xuXHRcdFx0fVxuXHRcdFx0c3RyICs9IGluc0ZtdChhY2MpO1xuXHRcdFx0YWNjID0gW107XG5cdFx0XHRpZiAoaSA8IG91dC5uLmxlbmd0aCkge1xuXHRcdFx0XHQvLyB0aGlzIG5ldyBcImxpbmVcIiBpcyBwYWlyZWQgd2l0aCB0aGUgKG91dC5uW2ldLnJvdyl0aCBvbGQgXCJsaW5lXCJcblx0XHRcdFx0c3RyICs9IG91dC5uW2ldLnRleHQ7XG5cdFx0XHRcdC8vIG91dHB1dCB1bnBhaXJlZCBvbGQgcm93cyBzdGFydGluZyBhZnRlciB0aGlzIG5ldyBsaW5lJ3MgcGFydG5lclxuXHRcdFx0XHRsZXQgbSA9IG91dC5uW2ldLnJvdyArIDE7XG5cdFx0XHRcdHdoaWxlIChtIDwgb3V0Lm8ubGVuZ3RoICYmICFvdXQub1ttXS5wYWlyZWQpIHtcblx0XHRcdFx0XHRhY2MucHVzaChvdXQub1ttKytdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdHIgKz0gZGVsRm10KGFjYyk7XG5cdFx0XHRcdGFjYyA9IFtdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3RyO1xuXHR9O1xuXHQvLyBzZWUge0BsaW5rIGh0dHA6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9Db3JlX0phdmFTY3JpcHRfMS41X1JlZmVyZW5jZTpHbG9iYWxfT2JqZWN0czpPYmplY3R9XG5cdC8vIEZJWE1FOiB1c2Ugb2JqLmhhc093blByb3BlcnR5IGluc3RlYWQgb2YgdGhpcyBrbHVkZ2UhXG5cdGNvbnN0IGpzUmVzZXJ2ZWRQcm9wZXJ0aWVzID0gbmV3IFJlZ0V4cChcblx0XHQnXihjb25zdHJ1Y3Rvcnxwcm90b3R5cGV8X18oKGRlZmluZXxsb29rdXApW0dTXWV0dGVyKV9fJyArXG5cdFx0XHQnfGV2YWx8aGFzT3duUHJvcGVydHl8cHJvcGVydHlJc0VudW1lcmFibGUnICtcblx0XHRcdCd8dG8oU291cmNlfFN0cmluZ3xMb2NhbGVTdHJpbmcpfCh1bik/d2F0Y2h8dmFsdWVPZikkJ1xuXHQpO1xuXHRjb25zdCBkaWZmQnVnQWxlcnQgPSBmdW5jdGlvbiBkaWZmQnVnQWxlcnQod29yZCkge1xuXHRcdGlmICghZGlmZkJ1Z0FsZXJ0Lmxpc3Rbd29yZF0pIHtcblx0XHRcdGRpZmZCdWdBbGVydC5saXN0W3dvcmRdID0gMTtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGBCYWQgd29yZDogJHt3b3JkfVxcblxcblBsZWFzZSByZXBvcnQgdGhpcyBidWcuYCwge3RhZzogJ3BvcHVwcycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHR9XG5cdH07XG5cdGRpZmZCdWdBbGVydC5saXN0ID0ge307XG5cdGNvbnN0IG1ha2VEaWZmSGFzaHRhYmxlID0gKHNyYykgPT4ge1xuXHRcdGNvbnN0IHJldCA9IHt9O1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoanNSZXNlcnZlZFByb3BlcnRpZXMudGVzdChzcmNbaV0pKSB7XG5cdFx0XHRcdHNyY1tpXSArPSAnPCEtLSAtLT4nO1xuXHRcdFx0fVxuXHRcdFx0cmV0W3NyY1tpXV0gPz89IFtdO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0W3NyY1tpXV0ucHVzaChpKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRkaWZmQnVnQWxlcnQoc3JjW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgZGlmZiA9IChvLCBuKSA9PiB7XG5cdFx0Ly8gcGFzcyAxOiBtYWtlIGhhc2h0YWJsZSBucyB3aXRoIG5ldyByb3dzIGFzIGtleXNcblx0XHRjb25zdCBucyA9IG1ha2VEaWZmSGFzaHRhYmxlKG4pO1xuXHRcdC8vIHBhc3MgMjogbWFrZSBoYXNodGFibGUgb3Mgd2l0aCBvbGQgcm93cyBhcyBrZXlzXG5cdFx0Y29uc3Qgb3MgPSBtYWtlRGlmZkhhc2h0YWJsZShvKTtcblx0XHQvLyBwYXNzIDM6IHBhaXIgdW5pcXVlIG5ldyByb3dzIGFuZCBtYXRjaGluZyB1bmlxdWUgb2xkIHJvd3Ncblx0XHRsZXQgaTtcblx0XHRmb3IgKGkgaW4gbnMpIHtcblx0XHRcdGlmIChuc1tpXS5sZW5ndGggPT09IDEgJiYgb3NbaV0gJiYgb3NbaV0ubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdG5bbnNbaV1bMF1dID0ge1xuXHRcdFx0XHRcdHRleHQ6IG5bbnNbaV1bMF1dLFxuXHRcdFx0XHRcdHJvdzogb3NbaV1bMF0sXG5cdFx0XHRcdFx0cGFpcmVkOiB0cnVlLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRvW29zW2ldWzBdXSA9IHtcblx0XHRcdFx0XHR0ZXh0OiBvW29zW2ldWzBdXSxcblx0XHRcdFx0XHRyb3c6IG5zW2ldWzBdLFxuXHRcdFx0XHRcdHBhaXJlZDogdHJ1ZSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGFzcyA0OiBwYWlyIG1hdGNoaW5nIHJvd3MgaW1tZWRpYXRlbHkgZm9sbG93aW5nIHBhaXJlZCByb3dzIChub3QgbmVjZXNzYXJpbHkgdW5pcXVlKVxuXHRcdGZvciAoaSA9IDA7IGkgPCBuLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuW2ldLnBhaXJlZCAmJlxuXHRcdFx0XHQhbltpICsgMV0ucGFpcmVkICYmXG5cdFx0XHRcdG5baV0ucm93ICsgMSA8IG8ubGVuZ3RoICYmXG5cdFx0XHRcdCFvW25baV0ucm93ICsgMV0ucGFpcmVkICYmXG5cdFx0XHRcdG5baSArIDFdID09PSBvW25baV0ucm93ICsgMV1cblx0XHRcdCkge1xuXHRcdFx0XHRuW2kgKyAxXSA9IHtcblx0XHRcdFx0XHR0ZXh0OiBuW2kgKyAxXSxcblx0XHRcdFx0XHRyb3c6IG5baV0ucm93ICsgMSxcblx0XHRcdFx0XHRwYWlyZWQ6IHRydWUsXG5cdFx0XHRcdH07XG5cdFx0XHRcdG9bbltpXS5yb3cgKyAxXSA9IHtcblx0XHRcdFx0XHR0ZXh0OiBvW25baV0ucm93ICsgMV0sXG5cdFx0XHRcdFx0cm93OiBpICsgMSxcblx0XHRcdFx0XHRwYWlyZWQ6IHRydWUsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHBhc3MgNTogcGFpciBtYXRjaGluZyByb3dzIGltbWVkaWF0ZWx5IHByZWNlZGluZyBwYWlyZWQgcm93cyAobm90IG5lY2Vzc2FyaWx5IHVuaXF1ZSlcblx0XHRmb3IgKGkgPSBuLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bltpXS5wYWlyZWQgJiZcblx0XHRcdFx0IW5baSAtIDFdLnBhaXJlZCAmJlxuXHRcdFx0XHRuW2ldLnJvdyA+IDAgJiZcblx0XHRcdFx0IW9bbltpXS5yb3cgLSAxXS5wYWlyZWQgJiZcblx0XHRcdFx0bltpIC0gMV0gPT09IG9bbltpXS5yb3cgLSAxXVxuXHRcdFx0KSB7XG5cdFx0XHRcdG5baSAtIDFdID0ge1xuXHRcdFx0XHRcdHRleHQ6IG5baSAtIDFdLFxuXHRcdFx0XHRcdHJvdzogbltpXS5yb3cgLSAxLFxuXHRcdFx0XHRcdHBhaXJlZDogdHJ1ZSxcblx0XHRcdFx0fTtcblx0XHRcdFx0b1tuW2ldLnJvdyAtIDFdID0ge1xuXHRcdFx0XHRcdHRleHQ6IG9bbltpXS5yb3cgLSAxXSxcblx0XHRcdFx0XHRyb3c6IGkgLSAxLFxuXHRcdFx0XHRcdHBhaXJlZDogdHJ1ZSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdG8sXG5cdFx0XHRuLFxuXHRcdH07XG5cdH07XG5cdC8vIEVOREZJTEU6IGRpZmYuanNcblx0Ly8gU1RBUlRGSUxFOiBpbml0LmpzXG5cdGNvbnN0IHNldFNpdGVJbmZvID0gKCkgPT4ge1xuXHRcdGlmICh3aW5kb3cucG9wdXBMb2NhbERlYnVnKSB7XG5cdFx0XHRwZy53aWtpLmhvc3RuYW1lID0gJ2VuLndpa2lwZWRpYS5vcmcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwZy53aWtpLmhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWU7IC8vIHVzZSBpbiBwcmVmZXJlbmNlIHRvIGxvY2F0aW9uLmhvc3RuYW1lIGZvciBmbGV4aWJpbGl0eSAoPylcblx0XHR9XG5cdFx0cGcud2lraS53aWtpbWVkaWEgPVxuXHRcdFx0Lyh3aWtpKFttcF1lZGlhfHNvdXJjZXxib29rc3xuZXdzfHF1b3RlfHZlcnNpdHl8c3BlY2llc3x2b3lhZ2V8ZGF0YSl8bWV0YXdpa2l8d2lrdGlvbmFyeXxtZWRpYXdpa2kpXFwub3JnLy50ZXN0KFxuXHRcdFx0XHRwZy53aWtpLmhvc3RuYW1lXG5cdFx0XHQpO1xuXHRcdHBnLndpa2kud2lraWEgPSAvXFwud2lraWFcXC5jb20kL2kudGVzdChwZy53aWtpLmhvc3RuYW1lKTtcblx0XHRwZy53aWtpLmlzTG9jYWwgPSBwZy53aWtpLmhvc3RuYW1lLnN0YXJ0c1dpdGgoJ2xvY2FsaG9zdCcpO1xuXHRcdHBnLndpa2kuY29tbW9ucyA9XG5cdFx0XHRwZy53aWtpLndpa2ltZWRpYSAmJiBwZy53aWtpLmhvc3RuYW1lICE9PSAnY29tbW9ucy53aWtpbWVkaWEub3JnJyA/ICdjb21tb25zLndpa2ltZWRpYS5vcmcnIDogbnVsbDtcblx0XHRwZy53aWtpLmxhbmcgPSBtdy5jb25maWcuZ2V0KCd3Z0NvbnRlbnRMYW5ndWFnZScpO1xuXHRcdGNvbnN0IHBvcnQgPSBsb2NhdGlvbi5wb3J0ID8gYDoke2xvY2F0aW9uLnBvcnR9YCA6ICcnO1xuXHRcdHBnLndpa2kuc2l0ZWJhc2UgPSBwZy53aWtpLmhvc3RuYW1lICsgcG9ydDtcblx0fTtcblx0Y29uc3Qgc2V0VXNlckluZm8gPSAoKSA9PiB7XG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bGlzdDogJ3VzZXJzJyxcblx0XHRcdHVzdXNlcnM6IG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKSxcblx0XHRcdHVzcHJvcDogJ3JpZ2h0cycsXG5cdFx0fTtcblx0XHRwZy51c2VyLmNhblJldmlldyA9IGZhbHNlO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFJldmlldycpKSB7XG5cdFx0XHRnZXRNd0FwaSgpXG5cdFx0XHRcdC5nZXQocGFyYW1zKVxuXHRcdFx0XHQuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IFt7cmlnaHRzfV0gPSBkYXRhLnF1ZXJ5LnVzZXJzO1xuXHRcdFx0XHRcdHBnLnVzZXIuY2FuUmV2aWV3ID0gcmlnaHRzLmluY2x1ZGVzKCdyZXZpZXcnKTsgLy8gVE9ETzogU2hvdWxkIGl0IGJlIGEgZ2V0VmFsdWVPZignUmV2aWV3UmlnaHQnKSA/XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgZmV0Y2hTcGVjaWFsUGFnZU5hbWVzID0gKCkgPT4ge1xuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bWV0YTogJ3NpdGVpbmZvJyxcblx0XHRcdHNpcHJvcDogJ3NwZWNpYWxwYWdlYWxpYXNlcycsXG5cdFx0XHR1c2VsYW5nOiAnY29udGVudCcsXG5cdFx0XHQvLyBjYWNoZSBmb3IgYW4gaG91clxuXHRcdFx0c21heGFnZTogMzYwMCxcblx0XHRcdG1heGFnZTogMzYwMCxcblx0XHR9O1xuXHRcdHJldHVybiBnZXRNd0FwaSgpXG5cdFx0XHQuZ2V0KHBhcmFtcylcblx0XHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdHBnLndpa2kuc3BlY2lhbHBhZ2VhbGlhc2VzID0gZGF0YS5xdWVyeS5zcGVjaWFscGFnZWFsaWFzZXM7XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3Qgc2V0VGl0bGVCYXNlID0gKCkgPT4ge1xuXHRcdGNvbnN0IHByb3RvY29sID0gd2luZG93LnBvcHVwTG9jYWxEZWJ1ZyA/ICdodHRwOicgOiBsb2NhdGlvbi5wcm90b2NvbDtcblx0XHRwZy53aWtpLmFydGljbGVQYXRoID0gbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlUGF0aCcpLnJlcGxhY2UoL1xcL1xcJDEvLCAnJyk7IC8vIGFzIGluIGh0dHA6Ly9zb21lLnRoaW5nLmNvbS93aWtpL0FydGljbGVcblx0XHRwZy53aWtpLmJvdEludGVyZmFjZVBhdGggPSBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpO1xuXHRcdHBnLndpa2kuQVBJUGF0aCA9IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpfS9hcGkucGhwYDtcblx0XHQvLyBkZWZhdWx0IG1lZGlhd2lraSBzZXR0aW5nIGlzIHBhdGhzIGxpa2UgaHR0cDovL3NvbWUudGhpbmcuY29tL2FydGljbGVQYXRoL2luZGV4LnBocD90aXRsZT1mb29cblx0XHRjb25zdCB0aXRsZXRhaWwgPSBgJHtwZy53aWtpLmJvdEludGVyZmFjZVBhdGh9P3RpdGxlPWA7XG5cdFx0Ly8gbGV0IHRpdGxldGFpbDIgPSBqb2luUGF0aChbcGcud2lraS5ib3RJbnRlcmZhY2VQYXRoLCAnd2lraS5waHRtbD90aXRsZT0nXSk7XG5cdFx0Ly8gb3RoZXIgc2l0ZXMgbWF5IG5lZWQgdG8gYWRkIGNvZGUgaGVyZSB0byBzZXQgdGl0bGV0YWlsIGRlcGVuZGluZyBvbiBob3cgdGhlaXIgdXJscyB3b3JrXG5cdFx0cGcud2lraS50aXRsZWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3RpdGxldGFpbH1gO1xuXHRcdC8vIHBnLndpa2kudGl0bGViYXNlMiAgPSBwcm90b2NvbCArICcvLycgKyBqb2luUGF0aChbcGcud2lraS5zaXRlYmFzZSwgdGl0bGV0YWlsMl0pO1xuXHRcdHBnLndpa2kud2lraWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3BnLndpa2kuYm90SW50ZXJmYWNlUGF0aH1gO1xuXHRcdHBnLndpa2kuYXBpd2lraWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3BnLndpa2kuQVBJUGF0aH1gO1xuXHRcdHBnLndpa2kuYXJ0aWNsZWJhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5zaXRlYmFzZX0ke3BnLndpa2kuYXJ0aWNsZVBhdGh9YDtcblx0XHRwZy53aWtpLmNvbW1vbnNiYXNlID0gYCR7cHJvdG9jb2x9Ly8ke3BnLndpa2kuY29tbW9uc30ke3BnLndpa2kuYm90SW50ZXJmYWNlUGF0aH1gO1xuXHRcdHBnLndpa2kuYXBpY29tbW9uc2Jhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5jb21tb25zfSR7cGcud2lraS5BUElQYXRofWA7XG5cdFx0cGcucmUuYmFzZW5hbWVzID0gbmV3IFJlZ0V4cChgXigke21hcChsaXRlcmFsaXplUmVnZXgsIFtwZy53aWtpLnRpdGxlYmFzZSwgcGcud2lraS5hcnRpY2xlYmFzZV0pLmpvaW4oJ3wnKX0pYCk7XG5cdH07XG5cdC8vIEdsb2JhbCByZWdleHBzXG5cdGNvbnN0IHNldE1haW5SZWdleCA9ICgpID0+IHtcblx0XHRjb25zdCByZVN0YXJ0ID0gJ1teOl0qOi8vJztcblx0XHRsZXQgcHJlVGl0bGVzID0gYCR7bGl0ZXJhbGl6ZVJlZ2V4KG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpKX0vKD86aW5kZXhbLl1waHB8d2lraVsuXXBodG1sKVs/XXRpdGxlPWA7XG5cdFx0cHJlVGl0bGVzICs9IGB8JHtsaXRlcmFsaXplUmVnZXgoYCR7cGcud2lraS5hcnRpY2xlUGF0aH0vYCl9YDtcblx0XHRjb25zdCByZUVuZCA9IGAoJHtwcmVUaXRsZXN9KShbXiY/I10qKVteI10qKD86IyguKykpP2A7XG5cdFx0cGcucmUubWFpbiA9IG5ldyBSZWdFeHAocmVTdGFydCArIGxpdGVyYWxpemVSZWdleChwZy53aWtpLnNpdGViYXNlKSArIHJlRW5kKTtcblx0fTtcblx0Y29uc3QgYnVpbGRTcGVjaWFsUGFnZUdyb3VwID0gKHNwZWNpYWxQYWdlT2JqKSA9PiB7XG5cdFx0Y29uc3QgdmFyaWFudHMgPSBbXTtcblx0XHR2YXJpYW50cy5wdXNoKFxuXHRcdFx0bXcudXRpbC5lc2NhcGVSZWdFeHAoc3BlY2lhbFBhZ2VPYmoucmVhbG5hbWUpLFxuXHRcdFx0bXcudXRpbC5lc2NhcGVSZWdFeHAoZW5jb2RlVVJJKHNwZWNpYWxQYWdlT2JqLnJlYWxuYW1lKSlcblx0XHQpO1xuXHRcdGZvciAoY29uc3QgYWxpYXMgb2Ygc3BlY2lhbFBhZ2VPYmouYWxpYXNlcykge1xuXHRcdFx0dmFyaWFudHMucHVzaChtdy51dGlsLmVzY2FwZVJlZ0V4cChhbGlhcyksIG13LnV0aWwuZXNjYXBlUmVnRXhwKGVuY29kZVVSSShhbGlhcykpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhcmlhbnRzLmpvaW4oJ3wnKTtcblx0fTtcblx0Y29uc3Qgc2V0UmVnZXhwcyA9ICgpID0+IHtcblx0XHRzZXRNYWluUmVnZXgoKTtcblx0XHRjb25zdCBzcCA9IG5zUmUocGcubnNTcGVjaWFsSWQpO1xuXHRcdHBnLnJlLnVybE5vUG9wdXAgPSBuZXcgUmVnRXhwKGAoKHRpdGxlPXwvKSR7c3B9KD86JTNBfDopfHNlY3Rpb249WzAtOV18XiMkKWApO1xuXHRcdGZvciAoY29uc3Qgc3BlY2lhbHBhZ2Ugb2YgcGcud2lraS5zcGVjaWFscGFnZWFsaWFzZXMpIHtcblx0XHRcdHN3aXRjaCAoc3BlY2lhbHBhZ2UucmVhbG5hbWUpIHtcblx0XHRcdFx0Y2FzZSAnQ29udHJpYnV0aW9ucyc6XG5cdFx0XHRcdFx0cGcucmUuY29udHJpYnMgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YCh0aXRsZT18Lykke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pYCArXG5cdFx0XHRcdFx0XHRcdGAoJnRhcmdldD18L3wvJHtuc1JlKHBnLm5zVXNlcklkKX06KSguKilgLFxuXHRcdFx0XHRcdFx0J2knXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnRGlmZic6XG5cdFx0XHRcdFx0cGcucmUuc3BlY2lhbGRpZmYgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YC8ke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pLyhbXj8jXSopYCxcblx0XHRcdFx0XHRcdCdpJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ0VtYWlsdXNlcic6XG5cdFx0XHRcdFx0cGcucmUuZW1haWwgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YCh0aXRsZT18Lykke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pYCArXG5cdFx0XHRcdFx0XHRcdGAoJnRhcmdldD18L3wvKD86JHtuc1JlKHBnLm5zVXNlcklkKX06KT8pKC4qKWAsXG5cdFx0XHRcdFx0XHQnaSdcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdXaGF0bGlua3NoZXJlJzpcblx0XHRcdFx0XHRwZy5yZS5iYWNrbGlua3MgPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdFx0YCh0aXRsZT18Lykke3NwfSg/OiUzQXw6KSg/OiR7YnVpbGRTcGVjaWFsUGFnZUdyb3VwKHNwZWNpYWxwYWdlKX0pKCZ0YXJnZXQ9fC8pKFteJl0qKWAsXG5cdFx0XHRcdFx0XHQnaSdcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBpbSA9IG5zUmVJbWFnZSgpO1xuXHRcdC8vIG5vdGU6IHRyaWVzIHRvIGdldCBpbWFnZXMgaW4gaW5mb2JveCB0ZW1wbGF0ZXMgdG9vLCBlLmcuIG1vdmllIHBhZ2VzLCBhbGJ1bSBwYWdlcyBldGNcblx0XHQvL1x0XHRcdFx0XHQgIChefFxcW1xcWylpbWFnZTogKihbXnxcXF1dKltefFxcXSBdKSAqXG5cdFx0Ly9cdFx0XHRcdFx0ICAoXnxcXFtcXFspaW1hZ2U6ICooW158XFxdXSpbXnxcXF0gXSkoW14wLTlcXF1dKihbMC05XSspICpweCk/XG5cdFx0Ly9cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JDQgPSAxMjAgYXMgaW4gMTIwcHhcblx0XHRwZy5yZS5pbWFnZSA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgKF58XFxcXFtcXFxcWykke2ltfTogKihbXnxcXFxcXV0qW158XFxcXF0gXSkke1N0cmluZy5yYXdgKFteMC05XFxdXSooWzAtOV0rKSAqcHgpP3woPzpcXG4gKlt8XT98W3xdKSAqYH0oJHtnZXRWYWx1ZU9mKCdwb3B1cEltYWdlVmFyc1JlZ2V4cCcpfSlgICtcblx0XHRcdFx0YCAqPSAqKD86XFxcXFtcXFxcWyAqKT8oPzoke2ltfTopPyR7U3RyaW5nLnJhd2AoW158XSo/KSg/OlxcXVxcXSk/ICpbfF0/ICpcXG5gfWAsXG5cdFx0XHQnaW1nJ1xuXHRcdCk7XG5cdFx0cGcucmUuaW1hZ2VCcmFja2V0Q291bnQgPSA2O1xuXHRcdHBnLnJlLmNhdGVnb3J5ID0gbmV3IFJlZ0V4cChgXFxcXFtcXFxcWyR7bnNSZShwZy5uc0NhdGVnb3J5SWQpfTogKihbXnxcXFxcXV0qW158XFxcXF0gXSkgKmAsICdpJyk7XG5cdFx0cGcucmUuY2F0ZWdvcnlCcmFja2V0Q291bnQgPSAxO1xuXHRcdC8vIElQdjYgfCBJUHY0XG5cdFx0cGcucmUuaXBVc2VyID1cblx0XHRcdC9eKD86Oig/Ojp8KD86OltcXGRBLUZhLWZdezEsNH0pezEsN30pfFtcXGRBLUZhLWZdezEsNH0oPzo6W1xcZEEtRmEtZl17MSw0fSl7MCw2fTo6fFtcXGRBLUZhLWZdezEsNH0oPzo6W1xcZEEtRmEtZl17MSw0fSl7N30pfCgoKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV1cXGR8XFxkKVxcLil7M30oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XVxcZHxcXGQpKSQvO1xuXHRcdHBnLnJlLnN0dWIgPSBuZXcgUmVnRXhwKGdldFZhbHVlT2YoJ3BvcHVwU3R1YlJlZ2V4cCcpLCAnaW0nKTtcblx0XHRwZy5yZS5kaXNhbWJpZyA9IG5ldyBSZWdFeHAoZ2V0VmFsdWVPZigncG9wdXBEYWJSZWdleHAnKSwgJ2ltJyk7XG5cdFx0Ly8gRklYTUUgcmVwbGFjZSB3aXRoIGdlbmVyYWwgcGFyYW1ldGVyIHBhcnNpbmcgZnVuY3Rpb24sIHRoaXMgaXMgZGFmdFxuXHRcdHBnLnJlLm9sZGlkID0gL1smP11vbGRpZD0oW14mXSopLztcblx0XHRwZy5yZS5kaWZmID0gL1smP11kaWZmPShbXiZdKikvO1xuXHR9O1xuXHQvLyBtaXNjZWxsYW55XG5cdGNvbnN0IHNldHVwQ2FjaGUgPSAoKSA9PiB7XG5cdFx0Ly8gcGFnZSBjYWNoaW5nXG5cdFx0cGcuY2FjaGUucGFnZXMgPSBbXTtcblx0fTtcblx0Y29uc3Qgc2V0TWlzYyA9ICgpID0+IHtcblx0XHRwZy5jdXJyZW50LmxpbmsgPSBudWxsO1xuXHRcdHBnLmN1cnJlbnQubGlua3MgPSBbXTtcblx0XHRwZy5jdXJyZW50LmxpbmtzSGFzaCA9IHt9O1xuXHRcdHNldHVwQ2FjaGUoKTtcblx0XHRwZy50aW1lci5jaGVja1BvcHVwUG9zaXRpb24gPSBudWxsO1xuXHRcdHBnLmNvdW50ZXIubG9vcCA9IDA7XG5cdFx0Ly8gaWRzIGNoYW5nZSB3aXRoIGVhY2ggcG9wdXA6IHBvcHVwSW1hZ2UwLCBwb3B1cEltYWdlMSBldGNcblx0XHRwZy5pZE51bWJlciA9IDA7XG5cdFx0Ly8gZm9yIG15RGVjb2RlVVJJXG5cdFx0cGcubWlzYy5kZWNvZGVFeHRyYXMgPSBbXG5cdFx0XHR7ZnJvbTogJyUyQycsIHRvOiAnLCd9LFxuXHRcdFx0e2Zyb206ICdfJywgdG86ICcgJ30sXG5cdFx0XHR7ZnJvbTogJyUyNCcsIHRvOiAnJCd9LFxuXHRcdFx0e2Zyb206ICclMjYnLCB0bzogJyYnfSwgLy8gbm8gLFxuXHRcdF07XG5cdH07XG5cdGNvbnN0IGdldE13QXBpID0gKCkgPT4ge1xuXHRcdGlmICghcGcuYXBpLmNsaWVudCkge1xuXHRcdFx0cGcuYXBpLnVzZXJBZ2VudCA9ICdOYXZpZ2F0aW9uIHBvcHVwcy8xLjAnO1xuXHRcdFx0cGcuYXBpLmNsaWVudCA9IGFwaTtcblx0XHR9XG5cdFx0cmV0dXJuIHBnLmFwaS5jbGllbnQ7XG5cdH07XG5cdC8vIFdlIG5lZWQgYSBjYWxsYmFjayBzaW5jZSB0aGlzIG1pZ2h0IGVuZCB1cCBhc3luY2hyb25vdXMgYmVjYXVzZSBvZlxuXHQvLyB0aGUgbXcubG9hZGVyLnVzaW5nKCkgY2FsbC5cblx0Y29uc3Qgc2V0dXBQb3B1cHMgPSBmdW5jdGlvbiBzZXR1cFBvcHVwcyhjYWxsYmFjaykge1xuXHRcdGlmIChzZXR1cFBvcHVwcy5jb21wbGV0ZWQpIHtcblx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gVGhlc2UgZGVwZW5kZW5jaWVzIHNob3VsZCBhbHNlIGJlIGVuZm9yY2VkIGZyb20gdGhlIGdhZGdldCxcblx0XHQvLyBidXQgbm90IGV2ZXJ5b25lIGxvYWRzIHRoaXMgYXMgYSBnYWRnZXQsIHNvIGRvdWJsZSBjaGVja1xuXHRcdGZldGNoU3BlY2lhbFBhZ2VOYW1lcygpLnRoZW4oKCkgPT4ge1xuXHRcdFx0Ly8gTkIgdHJhbnNsYXRhYmxlIHN0cmluZ3Mgc2hvdWxkIGJlIHNldCB1cCBmaXJzdCAoc3RyaW5ncy5qcylcblx0XHRcdC8vIGJhc2ljc1xuXHRcdFx0c2V0dXBEZWJ1Z2dpbmcoKTtcblx0XHRcdHNldFNpdGVJbmZvKCk7XG5cdFx0XHRzZXRUaXRsZUJhc2UoKTtcblx0XHRcdHNldE9wdGlvbnMoKTsgLy8gc2VlIG9wdGlvbnMuanNcblx0XHRcdHNldFVzZXJJbmZvKCk7XG5cdFx0XHQvLyBuYW1lc3BhY2VzIGV0Y1xuXHRcdFx0c2V0TmFtZXNwYWNlcygpO1xuXHRcdFx0c2V0SW50ZXJ3aWtpKCk7XG5cdFx0XHQvLyByZWdleHBzXG5cdFx0XHRzZXRSZWdleHBzKCk7XG5cdFx0XHRzZXRSZWRpcnMoKTtcblx0XHRcdC8vIG90aGVyIHN0dWZmXG5cdFx0XHRzZXRNaXNjKCk7XG5cdFx0XHRzZXR1cExpdmVQcmV2aWV3KCk7XG5cdFx0XHQvLyBtYWluIGRlYWwgaGVyZVxuXHRcdFx0c2V0dXBUb29sdGlwcygpO1xuXHRcdFx0bG9nKCdJbiBzZXR1cFBvcHVwcygpLCBqdXN0IGNhbGxlZCBzZXR1cFRvb2x0aXBzKCknKTtcblx0XHRcdE5hdnBvcHVwLnRyYWNrZXIuZW5hYmxlKCk7XG5cdFx0XHRzZXR1cFBvcHVwcy5jb21wbGV0ZWQgPSB0cnVlO1xuXHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBpbml0LmpzXG5cdC8vIFNUQVJURklMRTogbmF2bGlua3MuanNcblx0Ly8gbmF2bGlua3MuLi4gbGV0IHRoZSBmdW4gYmVnaW5cblx0Ly9cblx0Y29uc3QgZGVmYXVsdE5hdmxpbmtTcGVjID0gKCkgPT4ge1xuXHRcdGxldCBzdHIgPSAnJztcblx0XHRzdHIgKz0gJzxiPjw8bWFpbmxpbmt8c2hvcnRjdXQ9ID4+PC9iPic7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwTGFzdEVkaXRMaW5rJykpIHtcblx0XHRcdHN0ciArPSAnKjw8bGFzdEVkaXR8c2hvcnRjdXQ9Lz4+fDw8bGFzdENvbnRyaWI+Pnw8PHNpbmNlTWU+PmlmKG9sZGlkKXt8PDxvbGRFZGl0Pj58PDxkaWZmQ3VyPj59Jztcblx0XHR9XG5cdFx0Ly8gdXNlciBsaW5rc1xuXHRcdC8vIGNvbnRyaWJzIC0gbG9nIC0gY291bnQgLSBlbWFpbCAtIGJsb2NrXG5cdFx0Ly8gY291bnQgb25seSBpZiBhcHBsaWNhYmxlOyBibG9jayBvbmx5IGlmIHBvcHVwQWRtaW5MaW5rc1xuXHRcdHN0ciArPSAnaWYodXNlcil7PGJyPjw8Y29udHJpYnN8c2hvcnRjdXQ9Yz4+Kjw8dXNlcmxvZ3xzaG9ydGN1dD1MfGxvZz4+Jztcblx0XHRzdHIgKz0gJ2lmKGlwdXNlcil7Kjw8YXJpbj4+fWlmKHdpa2ltZWRpYSl7Kjw8Y291bnR8c2hvcnRjdXQ9Iz4+fSc7XG5cdFx0c3RyICs9ICdpZihpcHVzZXIpe31lbHNleyo8PGVtYWlsfHNob3J0Y3V0PUU+Pn1pZihhZG1pbil7Kjw8YmxvY2t8c2hvcnRjdXQ9Yj4+fDw8YmxvY2tsb2d8bG9nPj59fSc7XG5cdFx0Ly8gZWRpdGluZyBsaW5rc1xuXHRcdC8vIHRhbGtwYWdlICAgLT4gZWRpdHxuZXcgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSBhcnRpY2xlfGVkaXRcblx0XHQvLyBvdGhlciBwYWdlIC0+IGVkaXQgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSB0YWxrfGVkaXR8bmV3XG5cdFx0Y29uc3QgZWRpdHN0ciA9ICc8PGVkaXR8c2hvcnRjdXQ9ZT4+Jztcblx0XHRjb25zdCBlZGl0T2xkaWRTdHIgPSBgaWYob2xkaWQpezw8ZWRpdE9sZHxzaG9ydGN1dD1lPj58PDxyZXZlcnR8c2hvcnRjdXQ9dnxydj4+fDw8ZWRpdHxjdXI+Pn1lbHNleyR7ZWRpdHN0cn19YDtcblx0XHRjb25zdCBoaXN0b3J5c3RyID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1oPj58PDxlZGl0b3JzfHNob3J0Y3V0PUV8Pj4nO1xuXHRcdGNvbnN0IHdhdGNoc3RyID0gJzw8dW53YXRjaHx1bndhdGNoU2hvcnQ+Pnw8PHdhdGNofHNob3J0Y3V0PXd8d2F0Y2hUaGluZ3k+Pic7XG5cdFx0c3RyICs9XG5cdFx0XHRgPGJyPmlmKHRhbGspeyR7ZWRpdE9sZGlkU3RyfXw8PG5ld3xzaG9ydGN1dD0rPj5gICtcblx0XHRcdGAqJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PGFydGljbGV8c2hvcnRjdXQ9YT4+PC9iPnw8PGVkaXRBcnRpY2xlfGVkaXQ+PicgK1xuXHRcdFx0YH1lbHNleyR7XG5cdFx0XHRcdC8vIG5vdCBhIHRhbGsgcGFnZVxuXHRcdFx0XHRlZGl0T2xkaWRTdHJcblx0XHRcdH0qJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PHRhbGt8c2hvcnRjdXQ9dD4+PC9iPnw8PGVkaXRUYWxrfGVkaXQ+Pnw8PG5ld1RhbGt8c2hvcnRjdXQ9K3xuZXc+Pn0nO1xuXHRcdC8vIG1pc2MgbGlua3Ncblx0XHRzdHIgKz0gJzxicj48PHdoYXRMaW5rc0hlcmV8c2hvcnRjdXQ9bD4+Kjw8cmVsYXRlZENoYW5nZXN8c2hvcnRjdXQ9cj4+Kjw8bW92ZXxzaG9ydGN1dD1tPj4nO1xuXHRcdC8vIGFkbWluIGxpbmtzXG5cdFx0c3RyICs9XG5cdFx0XHQnaWYoYWRtaW4pezxicj48PHVucHJvdGVjdHx1bnByb3RlY3RTaG9ydD4+fDw8cHJvdGVjdHxzaG9ydGN1dD1wPj58PDxwcm90ZWN0bG9nfGxvZz4+KicgK1xuXHRcdFx0Jzw8dW5kZWxldGV8dW5kZWxldGVTaG9ydD4+fDw8ZGVsZXRlfHNob3J0Y3V0PWQ+Pnw8PGRlbGV0ZWxvZ3xsb2c+Pn0nO1xuXHRcdHJldHVybiBzdHI7XG5cdH07XG5cdGNvbnN0IG5hdkxpbmtzSFRNTCA9IChhcnRpY2xlLCBfaGludCwgcGFyYW1zKSA9PiB7XG5cdFx0Ly8gb2xkaWQsIHJjaWQpIHtcblx0XHRjb25zdCBzdHIgPSBgPHNwYW4gY2xhc3M9XCJwb3B1cE5hdkxpbmtzXCI+JHtkZWZhdWx0TmF2bGlua1NwZWMoKX08L3NwYW4+YDtcblx0XHQvLyBCQU1cblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChzdHIsIGFydGljbGUsIHBhcmFtcyk7XG5cdH07XG5cdGNvbnN0IGV4cGFuZENvbmRpdGlvbmFsTmF2bGlua1N0cmluZyA9IGZ1bmN0aW9uIGV4cGFuZENvbmRpdGlvbmFsTmF2bGlua1N0cmluZyhzLCBhcnRpY2xlLCB6LCByZWN1cnNpb25Db3VudCkge1xuXHRcdGNvbnN0IHtvbGRpZH0gPSB6O1xuXHRcdGNvbnN0IHtyY2lkfSA9IHo7XG5cdFx0Y29uc3Qge2RpZmZ9ID0gejtcblx0XHQvLyBuZXN0ZWQgY29uZGl0aW9uYWxzICh1cCB0byAxMCBkZWVwKSBhcmUgb2ssIGhvcGVmdWxseSEgKHdvcmsgZnJvbSB0aGUgaW5zaWRlIG91dClcblx0XHRpZiAodHlwZW9mIHJlY3Vyc2lvbkNvdW50ICE9PSB0eXBlb2YgMCkge1xuXHRcdFx0cmVjdXJzaW9uQ291bnQgPSAwO1xuXHRcdH1cblx0XHQvLyAoMVx0IGlmXHRcXFxcKFx0KDJcdDIpXHRcXFxcKVx0ICB7KDNcdDMpfSAgKDQgICBlbHNlXHQgIHsoNVx0IDUpfSAgNCkxKVxuXHRcdGNvbnN0IGNvbmRpdGlvbmFsU3BsaXRSZWdleCA9IC8oOz9cXHMqaWZcXHMqXFwoXFxzKihcXHcqKVxccypcXClcXHMqeyhbXnt9XSopfShcXHMqZWxzZVxccyp7KFtee31dKj8pfXwpKS9pO1xuXHRcdGNvbnN0IHNwbGl0dGVkID0gcy5zcGxpdChjb25kaXRpb25hbFNwbGl0UmVnZXgpO1xuXHRcdC8vICQxOiB3aG9sZSBjb25kaXRpb25hbFxuXHRcdC8vICQyOiB0ZXN0IGNvbmRpdGlvblxuXHRcdC8vICQzOiB0cnVlIGV4cGFuc2lvblxuXHRcdC8vICQ0OiBlbHNlIGNsYXVzZSAocG9zc2libHkgZW1wdHkpXG5cdFx0Ly8gJDU6IGZhbHNlIGV4cGFuc2lvbiAocG9zc2libHkgbnVsbClcblx0XHRjb25zdCBudW1QYXJlbnMgPSA1O1xuXHRcdGxldCBbcmV0XSA9IHNwbGl0dGVkO1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgc3BsaXR0ZWQubGVuZ3RoOyBpID0gaSArIG51bVBhcmVucyArIDEpIHtcblx0XHRcdGNvbnN0IHRlc3RTdHJpbmcgPSBzcGxpdHRlZFtpICsgMiAtIDFdO1xuXHRcdFx0Y29uc3QgdHJ1ZVN0cmluZyA9IHNwbGl0dGVkW2kgKyAzIC0gMV07XG5cdFx0XHRsZXQgZmFsc2VTdHJpbmcgPSBzcGxpdHRlZFtpICsgNSAtIDFdO1xuXHRcdFx0aWYgKGZhbHNlU3RyaW5nID09PSB1bmRlZmluZWQgfHwgIWZhbHNlU3RyaW5nKSB7XG5cdFx0XHRcdGZhbHNlU3RyaW5nID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRsZXQgdGVzdFJlc3VsdDtcblx0XHRcdHN3aXRjaCAodGVzdFN0cmluZykge1xuXHRcdFx0XHRjYXNlICd1c2VyJzpcblx0XHRcdFx0XHR0ZXN0UmVzdWx0ID0gISFhcnRpY2xlLnVzZXJOYW1lKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3RhbGsnOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhYXJ0aWNsZS50YWxrUGFnZSgpOyAvLyB0YWxrUGFnZSBjb252ZXJ0cyBfYXJ0aWNsZXNfIHRvIHRhbGtQYWdlc1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdhZG1pbic6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhZ2V0VmFsdWVPZigncG9wdXBBZG1pbkxpbmtzJyk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ29sZGlkJzpcblx0XHRcdFx0XHR0ZXN0UmVzdWx0ID0gISEob2xkaWQgIT09IHVuZGVmaW5lZCAmJiBvbGRpZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JjaWQnOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhIShyY2lkICE9PSB1bmRlZmluZWQgJiYgcmNpZCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2lwdXNlcic6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhYXJ0aWNsZS5pc0lwVXNlcigpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtYWluc3BhY2VfZW4nOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSBpc0luTWFpbk5hbWVzcGFjZShhcnRpY2xlKSAmJiBwZy53aWtpLmhvc3RuYW1lID09PSAnZW4ud2lraXBlZGlhLm9yZyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3dpa2ltZWRpYSc6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhcGcud2lraS53aWtpbWVkaWE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2RpZmYnOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhIShkaWZmICE9PSB1bmRlZmluZWQgJiYgZGlmZik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHRlc3RSZXN1bHQpIHtcblx0XHRcdFx0Y2FzZSBudWxsOlxuXHRcdFx0XHRcdHJldCArPSBzcGxpdHRlZFtpXTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSB0cnVlOlxuXHRcdFx0XHRcdHJldCArPSB0cnVlU3RyaW5nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIGZhbHNlOlxuXHRcdFx0XHRcdHJldCArPSBmYWxzZVN0cmluZztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdC8vIGFwcGVuZCBub24tY29uZGl0aW9uYWwgc3RyaW5nXG5cdFx0XHRyZXQgKz0gc3BsaXR0ZWRbaSArIG51bVBhcmVuc107XG5cdFx0fVxuXHRcdGlmIChjb25kaXRpb25hbFNwbGl0UmVnZXgudGVzdChyZXQpICYmIHJlY3Vyc2lvbkNvdW50IDwgMTApIHtcblx0XHRcdHJldHVybiBleHBhbmRDb25kaXRpb25hbE5hdmxpbmtTdHJpbmcocmV0LCBhcnRpY2xlLCB6LCByZWN1cnNpb25Db3VudCArIDEpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBuYXZsaW5rU3RyaW5nVG9BcnJheSA9IChzLCBhcnRpY2xlLCBwYXJhbXMpID0+IHtcblx0XHRzID0gZXhwYW5kQ29uZGl0aW9uYWxOYXZsaW5rU3RyaW5nKHMsIGFydGljbGUsIHBhcmFtcyk7XG5cdFx0Y29uc3Qgc3BsaXR0ZWQgPSBzLnNwbGl0KC88PCguKj8pPj4vKTtcblx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRmb3IgKGNvbnN0IFtpLCBlbGVtZW50XSBvZiBzcGxpdHRlZC5lbnRyaWVzKCkpIHtcblx0XHRcdGlmIChpICUgMikge1xuXHRcdFx0XHQvLyBpIG9kZCwgc28gcyBpcyBhIHRhZ1xuXHRcdFx0XHRjb25zdCB0ID0gbmV3IG5hdmxpbmtUYWcoKTtcblx0XHRcdFx0Y29uc3Qgc3MgPSBlbGVtZW50LnNwbGl0KCd8Jyk7XG5cdFx0XHRcdFt0LmlkXSA9IHNzO1xuXHRcdFx0XHRmb3IgKGxldCBqID0gMTsgaiA8IHNzLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdFx0Y29uc3Qgc3NzID0gc3Nbal0uc3BsaXQoJz0nKTtcblx0XHRcdFx0XHRpZiAoc3NzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFssIHRbc3NzWzBdXV0gPSBzc3M7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIG5vIGFzc2lnbm1lbnQgKG5vIFwiPVwiKSwgc28gdHJlYXQgdGhpcyBhcyBhIHRpdGxlIChvdmVyd3JpdGluZyB0aGUgbGFzdCBvbmUpXG5cdFx0XHRcdFx0XHR0LnRleHQgPSBwb3B1cFN0cmluZyhzc3NbMF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0LmFydGljbGUgPSBhcnRpY2xlO1xuXHRcdFx0XHRjb25zdCB7b2xkaWR9ID0gcGFyYW1zO1xuXHRcdFx0XHRjb25zdCB7cmNpZH0gPSBwYXJhbXM7XG5cdFx0XHRcdGNvbnN0IHtkaWZmfSA9IHBhcmFtcztcblx0XHRcdFx0aWYgKG9sZGlkICE9PSB1bmRlZmluZWQgJiYgb2xkaWQgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0Lm9sZGlkID0gb2xkaWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJjaWQgIT09IHVuZGVmaW5lZCAmJiByY2lkICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dC5yY2lkID0gcmNpZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGlmZiAhPT0gdW5kZWZpbmVkICYmIGRpZmYgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0LmRpZmYgPSBkaWZmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghdC50ZXh0ICYmIHQuaWQgIT09ICdtYWlubGluaycpIHtcblx0XHRcdFx0XHR0LnRleHQgPSBwb3B1cFN0cmluZyh0LmlkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXQucHVzaCh0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHBsYWluIEhUTUxcblx0XHRcdFx0cmV0LnB1c2goZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IG5hdmxpbmtTdWJzdGl0dXRlSFRNTCA9IChzKSA9PiB7XG5cdFx0cmV0dXJuIHNcblx0XHRcdC5zcGxpdCgnKicpXG5cdFx0XHQuam9pbihnZXRWYWx1ZU9mKCdwb3B1cE5hdkxpbmtTZXBhcmF0b3InKSlcblx0XHRcdC5zcGxpdCgnPG1lbnVyb3c+Jylcblx0XHRcdC5qb2luKCc8bGkgY2xhc3M9XCJwb3B1cF9tZW51X3Jvd1wiPicpXG5cdFx0XHQuc3BsaXQoJzwvbWVudXJvdz4nKVxuXHRcdFx0LmpvaW4oJzwvbGk+Jylcblx0XHRcdC5zcGxpdCgnPG1lbnU+Jylcblx0XHRcdC5qb2luKCc8dWwgY2xhc3M9XCJwb3B1cF9tZW51XCI+Jylcblx0XHRcdC5zcGxpdCgnPC9tZW51PicpXG5cdFx0XHQuam9pbignPC91bD4nKTtcblx0fTtcblx0Y29uc3QgbmF2bGlua0RlcHRoID0gKG1hZ2ljLCBzKSA9PiB7XG5cdFx0cmV0dXJuIHMuc3BsaXQoYDwke21hZ2ljfT5gKS5sZW5ndGggLSBzLnNwbGl0KGA8LyR7bWFnaWN9PmApLmxlbmd0aDtcblx0fTtcblx0Ly8gbmF2bGlua1N0cmluZzogKiBiZWNvbWVzIHRoZSBzZXBhcmF0b3Jcblx0Ly9cdFx0XHRcdDw8Zm9vfGJhcj1iYXp8ZnViYXI+PiBiZWNvbWVzIGEgZm9vLWxpbmsgd2l0aCBhdHRyaWJ1dGUgYmFyPSdiYXonXG5cdC8vXHRcdFx0XHRcdFx0XHRcdFx0ICBhbmQgdmlzaWJsZSB0ZXh0ICdmdWJhcidcblx0Ly9cdFx0XHRcdGlmKHRlc3Qpey4uLn0gYW5kIGlmKHRlc3Qpey4uLn1lbHNley4uLn0gd29yayB0b28gKG5lc3RlZCBvaylcblx0Y29uc3QgbmF2bGlua1N0cmluZ1RvSFRNTCA9IChzLCBhcnRpY2xlLCBwYXJhbXMpID0+IHtcblx0XHQvLyBsaW1pdEFsZXJ0KG5hdmxpbmtTdHJpbmdUb0hUTUwsIDUsICduYXZsaW5rU3RyaW5nVG9IVE1MXFxuJyArIGFydGljbGUgKyAnXFxuJyArICh0eXBlb2YgYXJ0aWNsZSkpO1xuXHRcdGNvbnN0IHAgPSBuYXZsaW5rU3RyaW5nVG9BcnJheShzLCBhcnRpY2xlLCBwYXJhbXMpO1xuXHRcdGxldCBodG1sID0gJyc7XG5cdFx0bGV0IG1lbnVkZXB0aCA9IDA7IC8vIG5lc3RlZCBtZW51cyBub3QgY3VycmVudGx5IGFsbG93ZWQsIGJ1dCBkb2Vzbid0IGRvIGFueSBoYXJtIHRvIGNvZGUgZm9yIGl0XG5cdFx0bGV0IG1lbnVyb3dkZXB0aCA9IDA7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHApIHtcblx0XHRcdGlmICh0eXBlb2YgZWxlbWVudCA9PT0gdHlwZW9mICcnKSB7XG5cdFx0XHRcdGh0bWwgKz0gbmF2bGlua1N1YnN0aXR1dGVIVE1MKGVsZW1lbnQpO1xuXHRcdFx0XHRtZW51ZGVwdGggKz0gbmF2bGlua0RlcHRoKCdtZW51JywgZWxlbWVudCk7XG5cdFx0XHRcdG1lbnVyb3dkZXB0aCArPSBuYXZsaW5rRGVwdGgoJ21lbnVyb3cnLCBlbGVtZW50KTtcblx0XHRcdFx0Ly9cdFx0XHRpZiAobWVudWRlcHRoID09PSAwKSB7XG5cdFx0XHRcdC8vXHRcdFx0XHR0YWdUeXBlPSdzcGFuJztcblx0XHRcdFx0Ly9cdFx0XHR9IGVsc2UgaWYgKG1lbnVyb3dkZXB0aCA9PT0gMCkge1xuXHRcdFx0XHQvL1x0XHRcdFx0dGFnVHlwZT0nbGknO1xuXHRcdFx0XHQvL1x0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vXHRcdFx0XHR0YWdUeXBlID0gbnVsbDtcblx0XHRcdFx0Ly9cdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQudHlwZSAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnQudHlwZSA9PT0gJ25hdmxpbmtUYWcnKSB7XG5cdFx0XHRcdGh0bWwgKz1cblx0XHRcdFx0XHRtZW51ZGVwdGggPiAwICYmIG1lbnVyb3dkZXB0aCA9PT0gMFxuXHRcdFx0XHRcdFx0PyBgPGxpIGNsYXNzPVwicG9wdXBfbWVudV9pdGVtXCI+JHtlbGVtZW50Lmh0bWwoKX08L2xpPmBcblx0XHRcdFx0XHRcdDogZWxlbWVudC5odG1sKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBodG1sO1xuXHR9O1xuXHRjbGFzcyBuYXZsaW5rVGFnIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdHRoaXMudHlwZSA9ICduYXZsaW5rVGFnJztcblx0XHR9XG5cdFx0aHRtbCgpIHtcblx0XHRcdHRoaXMuZ2V0TmV3V2luKCk7XG5cdFx0XHR0aGlzLmdldFByaW50RnVuY3Rpb24oKTtcblx0XHRcdGxldCBodG1sID0gJyc7XG5cdFx0XHRsZXQgb3BlbmluZztcblx0XHRcdGxldCBjbG9zaW5nO1xuXHRcdFx0Y29uc3QgdGFnVHlwZSA9ICdzcGFuJztcblx0XHRcdGlmICh0YWdUeXBlKSB7XG5cdFx0XHRcdG9wZW5pbmcgPSBgPCR7dGFnVHlwZX0gY2xhc3M9XCJwb3B1cF8ke3RoaXMuaWR9XCI+YDtcblx0XHRcdFx0Y2xvc2luZyA9IGA8LyR7dGFnVHlwZX0+YDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9wZW5pbmcgPSAnJztcblx0XHRcdFx0Y2xvc2luZyA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnByaW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGh0bWwgPSB0aGlzLnByaW50KHRoaXMpO1xuXHRcdFx0XHRpZiAodHlwZW9mIGh0bWwgIT09IHR5cGVvZiAnJykge1xuXHRcdFx0XHRcdGh0bWwgPSAnJztcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnNob3J0Y3V0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRodG1sID0gYWRkUG9wdXBTaG9ydGN1dChodG1sLCB0aGlzLnNob3J0Y3V0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZXJybG9nKGBPaCBkZWFyIC0gaW52YWxpZCBwcmludCBmdW5jdGlvbiBmb3IgYSBuYXZsaW5rVGFnLCBpZD0ke3RoaXMuaWR9YCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb3BlbmluZyArIGh0bWwgKyBjbG9zaW5nO1xuXHRcdH1cblx0XHRnZXROZXdXaW4oKSB7XG5cdFx0XHRnZXRWYWx1ZU9mKCdwb3B1cExpbmtzTmV3V2luZG93Jyk7XG5cdFx0XHRpZiAocGcub3B0aW9uLnBvcHVwTGlua3NOZXdXaW5kb3dbdGhpcy5pZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLm5ld1dpbiA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5ld1dpbiA9IHBnLm9wdGlvbi5wb3B1cExpbmtzTmV3V2luZG93W3RoaXMuaWRdO1xuXHRcdH1cblx0XHRnZXRQcmludEZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gdGhpbmsgYWJvdXQgdGhpcyBzb21lIG1vcmVcblx0XHRcdC8vIHRoaXMuaWQgYW5kIHRoaXMuYXJ0aWNsZSBzaG91bGQgYWxyZWFkeSBiZSBkZWZpbmVkXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuaWQgIT09IHR5cGVvZiAnJyB8fCB0eXBlb2YgdGhpcy5hcnRpY2xlICE9PSB0eXBlb2Yge30pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ub1BvcHVwID0gMTtcblx0XHRcdHN3aXRjaCAodGhpcy5pZCkge1xuXHRcdFx0XHRjYXNlICdjb250cmlicyc6XG5cdFx0XHRcdGNhc2UgJ2hpc3RvcnknOlxuXHRcdFx0XHRjYXNlICd3aGF0TGlua3NIZXJlJzpcblx0XHRcdFx0Y2FzZSAndXNlclBhZ2UnOlxuXHRcdFx0XHRjYXNlICd1c2VyVGFsayc6XG5cdFx0XHRcdGNhc2UgJ3RhbGsnOlxuXHRcdFx0XHRjYXNlICdhcnRpY2xlJzpcblx0XHRcdFx0Y2FzZSAnbGFzdEVkaXQnOlxuXHRcdFx0XHRcdHRoaXMubm9Qb3B1cCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHRoaXMuaWQpIHtcblx0XHRcdFx0Y2FzZSAnZW1haWwnOlxuXHRcdFx0XHRjYXNlICdjb250cmlicyc6XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrJzpcblx0XHRcdFx0Y2FzZSAndW5ibG9jayc6XG5cdFx0XHRcdGNhc2UgJ3VzZXJsb2cnOlxuXHRcdFx0XHRjYXNlICd1c2VyU3BhY2UnOlxuXHRcdFx0XHRjYXNlICdkZWxldGVkQ29udHJpYnMnOlxuXHRcdFx0XHRcdHRoaXMuYXJ0aWNsZSA9IHRoaXMuYXJ0aWNsZS51c2VyTmFtZSgpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoICh0aGlzLmlkKSB7XG5cdFx0XHRcdGNhc2UgJ3VzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAnbmV3VXNlclRhbGsnOlxuXHRcdFx0XHRjYXNlICdlZGl0VXNlclRhbGsnOlxuXHRcdFx0XHRjYXNlICd1c2VyUGFnZSc6XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrbG9nJzpcblx0XHRcdFx0XHR0aGlzLmFydGljbGUgPSB0aGlzLmFydGljbGUudXNlck5hbWUodHJ1ZSk7XG5cdFx0XHRcdC8qIGZhbGxzIHRocm91Z2ggKi9cblx0XHRcdFx0Y2FzZSAncGFnZWxvZyc6XG5cdFx0XHRcdGNhc2UgJ2RlbGV0ZWxvZyc6XG5cdFx0XHRcdGNhc2UgJ3Byb3RlY3Rsb2cnOlxuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLm9sZGlkO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuaWQgIT09ICdtYWlubGluaycpIHtcblx0XHRcdFx0Ly8gRklYTUUgYW5jaG9yIGhhbmRsaW5nIHNob3VsZCBiZSBkb25lIGRpZmZlcmVudGx5IHdpdGggVGl0bGUgb2JqZWN0XG5cdFx0XHRcdHRoaXMuYXJ0aWNsZSA9IHRoaXMuYXJ0aWNsZS5yZW1vdmVBbmNob3IoKTtcblx0XHRcdFx0Ly8gaWYgKHR5cGVvZiB0aGlzLnRleHQ9PSd1bmRlZmluZWQnKSB7IHRoaXMudGV4dD1wb3B1cFN0cmluZyh0aGlzLmlkKTsgfVxuXHRcdFx0fVxuXHRcdFx0c3dpdGNoICh0aGlzLmlkKSB7XG5cdFx0XHRcdGNhc2UgJ3VuZGVsZXRlJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdVbmRlbGV0ZSc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnLyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3doYXRMaW5rc0hlcmUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1doYXRsaW5rc2hlcmUnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZWxhdGVkQ2hhbmdlcyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnUmVjZW50Y2hhbmdlc2xpbmtlZCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21vdmUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ01vdmVwYWdlJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY29udHJpYnMnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0NvbnRyaWJ1dGlvbnMnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkZWxldGVkQ29udHJpYnMnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0RlbGV0ZWRjb250cmlidXRpb25zJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZW1haWwnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0VtYWlsVXNlcic7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnLyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdCbG9ja2lwJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcmaXA9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndW5ibG9jayc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnSXBibG9ja2xpc3QnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZhY3Rpb249dW5ibG9jayZpcD0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1c2VybG9nJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdMb2cnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZ1c2VyPSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2Jsb2NrbG9nJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdMb2cnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZ0eXBlPWJsb2NrJnBhZ2U9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncGFnZWxvZyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnTG9nJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcmcGFnZT0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdwcm90ZWN0bG9nJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdMb2cnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZ0eXBlPXByb3RlY3QmcGFnZT0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkZWxldGVsb2cnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0xvZyc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJnR5cGU9ZGVsZXRlJnBhZ2U9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndXNlclNwYWNlJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdQcmVmaXhJbmRleCc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJm5hbWVzcGFjZT0yJnByZWZpeD0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzZWFyY2gnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1NlYXJjaCc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJmZ1bGx0ZXh0PVNlYXJjaCZzZWFyY2g9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndGhhbmsnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1RoYW5rcyc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnLyc7XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlLnZhbHVlID0gdGhpcy5kaWZmID09PSAncHJldicgPyB0aGlzLm9sZGlkIDogdGhpcy5kaWZmO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bndhdGNoJzpcblx0XHRcdFx0Y2FzZSAnd2F0Y2gnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBtYWdpY1dhdGNoTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9IGAke3RoaXMuaWR9JmF1dG93YXRjaGxpc3Q9MSZhdXRvaW1wbD0ke3BvcHVwU3RyaW5nKFxuXHRcdFx0XHRcdFx0J2F1dG9lZGl0X3ZlcnNpb24nXG5cdFx0XHRcdFx0KX0mYWN0b2tlbj0ke2F1dG9DbGlja1Rva2VuKCl9YDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaGlzdG9yeSc6XG5cdFx0XHRcdGNhc2UgJ2hpc3RvcnlmZWVkJzpcblx0XHRcdFx0Y2FzZSAndW5wcm90ZWN0Jzpcblx0XHRcdFx0Y2FzZSAncHJvdGVjdCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gdGhpcy5pZDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZGVsZXRlJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnZGVsZXRlJztcblx0XHRcdFx0XHRpZiAodGhpcy5hcnRpY2xlLm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zSW1hZ2VJZCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgaW1nID0gdGhpcy5hcnRpY2xlLnN0cmlwTmFtZXNwYWNlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLmFjdGlvbiArPSBgJmltYWdlPSR7aW1nfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtYXJrcGF0cm9sbGVkJzpcblx0XHRcdFx0Y2FzZSAnZWRpdCc6XG5cdFx0XHRcdFx0Ly8gZWRpdE9sZCBzaG91bGQga2VlcCB0aGUgb2xkaWQsIGJ1dCBlZGl0IHNob3VsZCBub3QuXG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMub2xkaWQ7XG5cdFx0XHRcdC8qIGZhbGxzIHRocm91Z2ggKi9cblx0XHRcdFx0Y2FzZSAndmlldyc6XG5cdFx0XHRcdGNhc2UgJ3B1cmdlJzpcblx0XHRcdFx0Y2FzZSAncmVuZGVyJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSB0aGlzLmlkO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyYXcnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdyYXcnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICduZXcnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdlZGl0JnNlY3Rpb249bmV3Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbWFpbmxpbmsnOlxuXHRcdFx0XHRcdGlmICh0aGlzLnRleHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy5hcnRpY2xlLnRvU3RyaW5nKCkuZW50aWZ5KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFNpbXBsaWZ5TWFpbkxpbmsnKSAmJiBpc0luU3RyaXBwYWJsZU5hbWVzcGFjZSh0aGlzLmFydGljbGUpKSB7XG5cdFx0XHRcdFx0XHQvLyBvbmx5IHNob3cgdGhlIC9zdWJwYWdlIHBhcnQgb2YgdGhlIHRpdGxlIHRleHRcblx0XHRcdFx0XHRcdGNvbnN0IHMgPSB0aGlzLnRleHQuc3BsaXQoJy8nKTtcblx0XHRcdFx0XHRcdHRoaXMudGV4dCA9IHMuYXQoLTEpO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMudGV4dCA9PT0gJycgJiYgcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGV4dCA9IHMuYXQoLTIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkV2lraUxpbms7XG5cdFx0XHRcdFx0aWYgKHRoaXMudGl0bGUgPT09IHVuZGVmaW5lZCAmJiBwZy5jdXJyZW50LmxpbmsgJiYgcGcuY3VycmVudC5saW5rLmhyZWYgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy50aXRsZSA9IHNhZmVEZWNvZGVVUkkocGcuY3VycmVudC5saW5rLm9yaWdpbmFsVGl0bGUgPz8gdGhpcy5hcnRpY2xlKTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLm9sZGlkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vbGRpZCkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRpdGxlID0gdHByaW50ZignUmV2aXNpb24gJXMgb2YgJXMnLCBbdGhpcy5vbGRpZCwgdGhpcy50aXRsZV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICd2aWV3Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndXNlclBhZ2UnOlxuXHRcdFx0XHRjYXNlICdhcnRpY2xlJzpcblx0XHRcdFx0Y2FzZSAnZWRpdEFydGljbGUnOlxuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLm9sZGlkO1xuXHRcdFx0XHRcdC8vIG13Lm5vdGlmeShgJHt0aGlzLmlkfVxcbiR7dGhpcy5hcnRpY2xlfVxcbiR7dHlwZW9mIHRoaXMuYXJ0aWNsZX1gLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLmFydGljbGVGcm9tVGFsa09yQXJ0aWNsZSgpO1xuXHRcdFx0XHRcdC8vIG13Lm5vdGlmeShgJHt0aGlzLmlkfVxcbiR7dGhpcy5hcnRpY2xlfVxcbiR7dHlwZW9mIHRoaXMuYXJ0aWNsZX1gLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gdGhpcy5pZC5pbmRleE9mKCdlZGl0JykgPT09IDAgPyAnZWRpdCcgOiAndmlldyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3VzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAndGFsayc6XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLnRhbGtQYWdlKCk7XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMub2xkaWQ7XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ3ZpZXcnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdhcmluJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gYXJpbkxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NvdW50Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gZWRpdENvdW50ZXJMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdlZGl0b3JzJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gZWRpdG9yTGlzdExpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2xhc3RFZGl0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkRGlmZkxpbms7XG5cdFx0XHRcdFx0dGhpcy50aXRsZSA9IHBvcHVwU3RyaW5nKCdTaG93IHRoZSBsYXN0IGVkaXQnKTtcblx0XHRcdFx0XHR0aGlzLmZyb20gPSAncHJldic7XG5cdFx0XHRcdFx0dGhpcy50byA9ICdjdXInO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdvbGRFZGl0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkRGlmZkxpbms7XG5cdFx0XHRcdFx0dGhpcy50aXRsZSA9IGAke3BvcHVwU3RyaW5nKCdTaG93IHRoZSBlZGl0IG1hZGUgdG8gZ2V0IHJldmlzaW9uJyl9ICR7dGhpcy5vbGRpZH1gO1xuXHRcdFx0XHRcdHRoaXMuZnJvbSA9ICdwcmV2Jztcblx0XHRcdFx0XHR0aGlzLnRvID0gdGhpcy5vbGRpZDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZWRpdE9sZCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ2VkaXQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bmRvJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnZWRpdCZ1bmRvPSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JldmVydCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ3JldmVydCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ251bGxFZGl0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnbnVsbEVkaXQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkaWZmQ3VyJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gdGl0bGVkRGlmZkxpbms7XG5cdFx0XHRcdFx0dGhpcy50aXRsZSA9IHRwcmludGYoJ1Nob3cgY2hhbmdlcyBzaW5jZSByZXZpc2lvbiAlcycsIFt0aGlzLm9sZGlkXSk7XG5cdFx0XHRcdFx0dGhpcy5mcm9tID0gdGhpcy5vbGRpZDtcblx0XHRcdFx0XHR0aGlzLnRvID0gJ2N1cic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2VkaXRVc2VyVGFsayc6XG5cdFx0XHRcdGNhc2UgJ2VkaXRUYWxrJzpcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5vbGRpZDtcblx0XHRcdFx0XHR0aGlzLmFydGljbGUgPSB0aGlzLmFydGljbGUudGFsa1BhZ2UoKTtcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdlZGl0Jztcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ25ld1VzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAnbmV3VGFsayc6XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLnRhbGtQYWdlKCk7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnZWRpdCZzZWN0aW9uPW5ldyc7XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdsYXN0Q29udHJpYic6XG5cdFx0XHRcdGNhc2UgJ3NpbmNlTWUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBtYWdpY0hpc3RvcnlMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd0b2dnbGVQcmV2aWV3cyc6XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gcG9wdXBTdHJpbmcocGcub3B0aW9uLnNpbXBsZVBvcHVwcyA/ICdlbmFibGUgcHJldmlld3MnIDogJ2Rpc2FibGUgcHJldmlld3MnKTtcblx0XHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdFx0XHRjYXNlICdkaXNhYmxlUG9wdXBzJzpcblx0XHRcdFx0Y2FzZSAncHVyZ2VQb3B1cHMnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBwb3B1cE1lbnVMaW5rO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYFVua25vd24gbmF2bGluayB0eXBlOiAke3RoaXMuaWR9YDtcblx0XHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvL1xuXHQvLyAgZW5kIG5hdmxpbmtzXG5cdC8vIEVOREZJTEU6IG5hdmxpbmtzLmpzXG5cdC8vIFNUQVJURklMRTogc2hvcnRjdXRrZXlzLmpzXG5cdGNvbnN0IHBvcHVwSGFuZGxlS2V5cHJlc3MgPSBmdW5jdGlvbiBwb3B1cEhhbmRsZUtleXByZXNzKGV2dCkge1xuXHRcdGNvbnN0IGtleUNvZGUgPSB3aW5kb3cuZXZlbnQgPyB3aW5kb3cuZXZlbnQua2V5Q29kZSA6IChldnQua2V5Q29kZSA/PyBldnQud2hpY2gpO1xuXHRcdGlmICgha2V5Q29kZSB8fCAhcGcuY3VycmVudC5saW5rIHx8ICFwZy5jdXJyZW50LmxpbmsubmF2cG9wdXApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGtleUNvZGUgPT09IDI3KSB7XG5cdFx0XHQvLyBlc2NhcGVcblx0XHRcdGtpbGxQb3B1cCgpO1xuXHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBzd2FsbG93IGtleXByZXNzXG5cdFx0fVxuXHRcdGNvbnN0IGxldHRlciA9IFN0cmluZy5mcm9tQ29kZVBvaW50KGtleUNvZGUpO1xuXHRcdGNvbnN0IGxpbmtzID0gcGcuY3VycmVudC5saW5rLm5hdnBvcHVwLm1haW5EaXYucXVlcnlTZWxlY3RvckFsbCgnQScpO1xuXHRcdGxldCBzdGFydExpbmsgPSAwO1xuXHRcdGxldCBpO1xuXHRcdGxldCBqO1xuXHRcdGlmIChwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCkge1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChsaW5rc1tpXSA9PT0gcG9wdXBIYW5kbGVLZXlwcmVzcy5sYXN0UG9wdXBMaW5rU2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRzdGFydExpbmsgPSBpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaiA9IDA7IGogPCBsaW5rcy5sZW5ndGg7ICsraikge1xuXHRcdFx0aSA9IChzdGFydExpbmsgKyBqICsgMSkgJSBsaW5rcy5sZW5ndGg7XG5cdFx0XHRpZiAobGlua3NbaV0uZ2V0QXR0cmlidXRlKCdwb3B1cGtleScpID09PSBsZXR0ZXIpIHtcblx0XHRcdFx0aWYgKGV2dCAmJiBldnQucHJldmVudERlZmF1bHQpIHtcblx0XHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaW5rc1tpXS5mb2N1cygpO1xuXHRcdFx0XHRwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCA9IGxpbmtzW2ldO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIHN3YWxsb3cga2V5cHJlc3Ncblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGFzcyBrZXlwcmVzcyBvblxuXHRcdGlmIChkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MoZXZ0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cdGNvbnN0IGFkZFBvcHVwU2hvcnRjdXRzID0gKCkgPT4ge1xuXHRcdGlmIChkb2N1bWVudC5vbmtleXByZXNzICE9PSBwb3B1cEhhbmRsZUtleXByZXNzKSB7XG5cdFx0XHRkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MgPSBkb2N1bWVudC5vbmtleXByZXNzO1xuXHRcdH1cblx0XHRkb2N1bWVudC5vbmtleXByZXNzID0gcG9wdXBIYW5kbGVLZXlwcmVzcztcblx0fTtcblx0Y29uc3Qgcm1Qb3B1cFNob3J0Y3V0cyA9ICgpID0+IHtcblx0XHRwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCA9IG51bGw7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MgJiYgZG9jdW1lbnQub2xkUG9wdXBPbmtleXByZXNzID09PSBwb3B1cEhhbmRsZUtleXByZXNzKSB7XG5cdFx0XHRcdC8vIHBhbmljXG5cdFx0XHRcdGRvY3VtZW50Lm9ua2V5cHJlc3MgPSBudWxsOyAvLyAoKSA9PiB7fTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0ZG9jdW1lbnQub25rZXlwcmVzcyA9IGRvY3VtZW50Lm9sZFBvcHVwT25rZXlwcmVzcztcblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIElFIGdvZXMgaGVyZSAqL1xuXHRcdH1cblx0fTtcblx0Y29uc3QgYWRkTGlua1Byb3BlcnR5ID0gKGh0bWwsIHByb3BlcnR5KSA9PiB7XG5cdFx0Ly8gdGFrZSBcIjxhIGhyZWY9Li4uPi4uLjwvYT4gYW5kIGFkZCBhIHByb3BlcnR5XG5cdFx0Ly8gbm90IHNvcGhpc3RpY2F0ZWQgYXQgYWxsLCBlYXNpbHkgYnJva2VuXG5cdFx0Y29uc3QgaSA9IGh0bWwuaW5kZXhPZignPicpO1xuXHRcdGlmIChpID09PSAtMSkge1xuXHRcdFx0cmV0dXJuIGh0bWw7XG5cdFx0fVxuXHRcdHJldHVybiBgJHtodG1sLnNsaWNlKDAsIE1hdGgubWF4KDAsIGkpKX0gJHtwcm9wZXJ0eX0ke2h0bWwuc2xpY2UoTWF0aC5tYXgoMCwgaSkpfWA7XG5cdH07XG5cdGNvbnN0IGFkZFBvcHVwU2hvcnRjdXQgPSAoaHRtbCwga2V5KSA9PiB7XG5cdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cFNob3J0Y3V0S2V5cycpKSB7XG5cdFx0XHRyZXR1cm4gaHRtbDtcblx0XHR9XG5cdFx0Y29uc3QgcmV0ID0gYWRkTGlua1Byb3BlcnR5KGh0bWwsIGBwb3B1cGtleT1cIiR7a2V5fVwiYCk7XG5cdFx0aWYgKGtleSA9PT0gJyAnKSB7XG5cdFx0XHRrZXkgPSBwb3B1cFN0cmluZygnc3BhY2ViYXInKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldC5yZXBsYWNlKC9eKC4qPykodGl0bGU9XCIpKC4qPykoXCIuKikkL2ksIGAkMSQyJDMgWyR7a2V5fV0kNGApO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBzaG9ydGN1dGtleXMuanNcblx0Ly8gU1RBUlRGSUxFOiBkaWZmcHJldmlldy5qc1xuXHQvLyBsZXRzIGp1bXAgdGhyb3VnaCBob29wcyB0byBmaW5kIHRoZSByZXYgaWRzIHdlIG5lZWQgdG8gcmV0cmlldmVcblx0Y29uc3QgbG9hZERpZmYgPSAoYXJ0aWNsZSwgb2xkaWQsIGRpZmYsIG5hdnBvcCkgPT4ge1xuXHRcdG5hdnBvcC5kaWZmRGF0YSA9IHtcblx0XHRcdG9sZFJldjoge30sXG5cdFx0XHRuZXdSZXY6IHt9LFxuXHRcdH07XG5cdFx0Y29uc3QgYXBpID0gZ2V0TXdBcGkoKTtcblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdjb21wYXJlJyxcblx0XHRcdHByb3A6IFsnaWRzJywgJ3RpdGxlJ10sXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHR9O1xuXHRcdGlmIChhcnRpY2xlLnRpdGxlKSB7XG5cdFx0XHRwYXJhbXMuZnJvbXRpdGxlID0gYXJ0aWNsZS50aXRsZTtcblx0XHR9XG5cdFx0c3dpdGNoIChkaWZmKSB7XG5cdFx0XHRjYXNlICdjdXInOlxuXHRcdFx0XHRzd2l0Y2ggKG9sZGlkKSB7XG5cdFx0XHRcdFx0Y2FzZSBudWxsOlxuXHRcdFx0XHRcdGNhc2UgJyc6XG5cdFx0XHRcdFx0Y2FzZSAncHJldic6XG5cdFx0XHRcdFx0XHQvLyB0aGlzIGNhbiBvbmx5IHdvcmsgaWYgd2UgaGF2ZSB0aGUgdGl0bGVcblx0XHRcdFx0XHRcdC8vIGN1ciAtPiBwcmV2XG5cdFx0XHRcdFx0XHRwYXJhbXMudG9yZWxhdGl2ZSA9ICdwcmV2Jztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRwYXJhbXMuZnJvbXJldiA9IG9sZGlkO1xuXHRcdFx0XHRcdFx0cGFyYW1zLnRvcmVsYXRpdmUgPSAnY3VyJztcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncHJldic6XG5cdFx0XHRcdGlmIChvbGRpZCkge1xuXHRcdFx0XHRcdHBhcmFtcy5mcm9tcmV2ID0gb2xkaWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFyYW1zLnRvcmVsYXRpdmUgPSAncHJldic7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbmV4dCc6XG5cdFx0XHRcdHBhcmFtcy5mcm9tcmV2ID0gb2xkaWQgfHwgMDtcblx0XHRcdFx0cGFyYW1zLnRvcmVsYXRpdmUgPSAnbmV4dCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cGFyYW1zLmZyb21yZXYgPSBvbGRpZCB8fCAwO1xuXHRcdFx0XHRwYXJhbXMudG9yZXYgPSBkaWZmIHx8IDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRhcGkuZ2V0KHBhcmFtcykudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0bmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCA9IGRhdGEuY29tcGFyZS5mcm9tcmV2aWQ7XG5cdFx0XHRuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlkID0gZGF0YS5jb21wYXJlLnRvcmV2aWQ7XG5cdFx0XHRhZGRSZXZpZXdMaW5rKG5hdnBvcCwgJ3BvcHVwTWlzY1Rvb2xzJyk7XG5cdFx0XHRjb25zdCBnbyA9ICgpID0+IHtcblx0XHRcdFx0cGVuZGluZ05hdnBvcFRhc2sobmF2cG9wKTtcblx0XHRcdFx0bGV0IHVybCA9IGAke3BnLndpa2kuYXBpd2lraWJhc2V9P2Zvcm1hdD1qc29uJmZvcm1hdHZlcnNpb249MiZhY3Rpb249cXVlcnkmYDtcblx0XHRcdFx0dXJsICs9IGByZXZpZHM9JHtuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkfXwke25hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWR9YDtcblx0XHRcdFx0dXJsICs9ICcmcHJvcD1yZXZpc2lvbnMmcnZwcm9wPWlkc3x0aW1lc3RhbXB8Y29udGVudCc7XG5cdFx0XHRcdGdldFBhZ2VXaXRoQ2FjaGluZyh1cmwsIGRvbmVEaWZmLCBuYXZwb3ApO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gcmVtb3ZlIGhvb2sgb25jZSBydW5cblx0XHRcdH07XG5cdFx0XHRpZiAobmF2cG9wLnZpc2libGUgfHwgIWdldFZhbHVlT2YoJ3BvcHVwTGF6eURvd25sb2FkcycpKSB7XG5cdFx0XHRcdGdvKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuYXZwb3AuYWRkSG9vayhnbywgJ3VuaGlkZScsICdiZWZvcmUnLCAnRE9XTkxPQURfRElGRlMnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblx0Ly8gUHV0IGEgXCJtYXJrIHBhdHJvbGxlZFwiIGxpbmsgdG8gYW4gZWxlbWVudCB0YXJnZXRcblx0Ly8gVE9ETzogQWxsb3cgcGF0cm9sIGEgcmV2aXNpb24sIGFzIHdlbGwgYXMgYSBkaWZmXG5cdGNvbnN0IGFkZFJldmlld0xpbmsgPSAobmF2cG9wLCB0YXJnZXQpID0+IHtcblx0XHRpZiAoIXBnLnVzZXIuY2FuUmV2aWV3KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIElmICduZXdSZXYnIGlzIG9sZGVyIHRoYW4gJ29sZFJldicgdGhhbiBpdCBjb3VsZCBiZSBjb25mdXNpbmcsIHNvIHdlIGRvIG5vdCBzaG93IHRoZSByZXZpZXcgbGluay5cblx0XHRpZiAobmF2cG9wLmRpZmZEYXRhLm5ld1Jldi5yZXZpZCA8PSBuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cHJvcDogWydpbmZvJywgJ2ZsYWdnZWQnXSxcblx0XHRcdHJldmlkczogbmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCxcblx0XHR9O1xuXHRcdGdldE13QXBpKClcblx0XHRcdC5nZXQocGFyYW1zKVxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgc3RhYmxlX3JldmlkID0gKGRhdGEucXVlcnkucGFnZXNbMF0uZmxhZ2dlZCAmJiBkYXRhLnF1ZXJ5LnBhZ2VzWzBdLmZsYWdnZWQuc3RhYmxlX3JldmlkKSB8fCAwO1xuXHRcdFx0XHQvLyBUaGUgZGlmZiBjYW4gYmUgcmV2aWV3ZWQgaWYgdGhlIG9sZCB2ZXJzaW9uIGlzIHRoZSBsYXN0IHJldmlld2VkIHZlcnNpb25cblx0XHRcdFx0Ly8gVE9ETzogT3RoZXIgcG9zc2libGUgY29uZGl0aW9ucyB0aGF0IHdlIG1heSB3YW50IHRvIGltcGxlbWVudCBpbnN0ZWFkIG9mIHRoaXMgb25lOlxuXHRcdFx0XHQvLyAtIG9sZCB2ZXJzaW9uIGlzIHBhdHJvbGxlZCBhbmQgdGhlIG5ldyB2ZXJzaW9uIGlzIG5vdCBwYXRyb2xsZWRcblx0XHRcdFx0Ly8gLSBvbGQgdmVyc2lvbiBpcyBwYXRyb2xsZWQgYW5kIHRoZSBuZXcgdmVyc2lvbiBpcyBtb3JlIHJlY2VudCB0aGFuIHRoZSBsYXN0IHJldmlld2VkIHZlcnNpb25cblx0XHRcdFx0aWYgKHN0YWJsZV9yZXZpZCA9PT0gbmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCkge1xuXHRcdFx0XHRcdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRcdFx0YS5pbm5lckhUTUwgPSBwb3B1cFN0cmluZygnbWFyayBwYXRyb2xsZWQnKTtcblx0XHRcdFx0XHRhLnRpdGxlID0gcG9wdXBTdHJpbmcoJ21hcmtwYXRyb2xsZWRIaW50Jyk7XG5cdFx0XHRcdFx0YS5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRcdFx0XHRhY3Rpb246ICdyZXZpZXcnLFxuXHRcdFx0XHRcdFx0XHRjb21tZW50OiB0cHJpbnRmKCdkZWZhdWx0cG9wdXBSZXZpZXdlZFN1bW1hcnknLCBbXG5cdFx0XHRcdFx0XHRcdFx0bmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCxcblx0XHRcdFx0XHRcdFx0XHRuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlkLFxuXHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0cmV2aWQ6IG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWQsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0Z2V0TXdBcGkoKVxuXHRcdFx0XHRcdFx0XHQucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtcylcblx0XHRcdFx0XHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBVcGRhdGUgY3VycmVudCBwYWdlIGFuZCBvdGhlciBhbHJlYWR5IGNvbnN0cnVjdGVkIHBvcHVwc1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuZmFpbCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkocG9wdXBTdHJpbmcoJ0NvdWxkIG5vdCBtYXJrZWQgdGhpcyBlZGl0IGFzIHBhdHJvbGxlZCcpLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdwb3B1cHMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRzZXRQb3B1cEhUTUwoYSwgdGFyZ2V0LCBuYXZwb3AuaWROdW1iZXIsIG51bGwsIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3QgZG9uZURpZmYgPSAoZG93bmxvYWQpID0+IHtcblx0XHRpZiAoIWRvd25sb2FkLm93bmVyIHx8ICFkb3dubG9hZC5vd25lci5kaWZmRGF0YSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBuYXZwb3AgPSBkb3dubG9hZC5vd25lcjtcblx0XHRjb21wbGV0ZWROYXZwb3BUYXNrKG5hdnBvcCk7XG5cdFx0bGV0IHBhZ2VzO1xuXHRcdGxldCByZXZpc2lvbnMgPSBbXTtcblx0XHR0cnkge1xuXHRcdFx0Ly8gUHJvY2VzcyB0aGUgZG93bmxvYWRzXG5cdFx0XHQoe3BhZ2VzfSA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpLnF1ZXJ5KTtcblx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBwYWdlcykge1xuXHRcdFx0XHRyZXZpc2lvbnMgPSBbLi4ucmV2aXNpb25zLCAuLi5wYWdlLnJldmlzaW9uc107XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IHJldmlzaW9uIG9mIHJldmlzaW9ucykge1xuXHRcdFx0XHRpZiAocmV2aXNpb24ucmV2aWQgPT09IG5hdnBvcC5kaWZmRGF0YS5vbGRSZXYucmV2aWQpIHtcblx0XHRcdFx0XHRuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlzaW9uID0gcmV2aXNpb247XG5cdFx0XHRcdH0gZWxzZSBpZiAocmV2aXNpb24ucmV2aWQgPT09IG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWQpIHtcblx0XHRcdFx0XHRuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlzaW9uID0gcmV2aXNpb247XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdGVycmxvZygnQ291bGQgbm90IGdldCBkaWZmJyk7XG5cdFx0fVxuXHRcdGluc2VydERpZmYobmF2cG9wKTtcblx0fTtcblx0Y29uc3Qgcm1Cb3JpbmdMaW5lcyA9IChhLCBiLCBjb250ZXh0KSA9PiB7XG5cdFx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29udGV4dCA9IDI7XG5cdFx0fVxuXHRcdC8vIHRoaXMgaXMgZmFpcmx5IHNsb3cuLi4gaSB0aGluayBpdCdzIHF1aWNrZXIgdGhhbiBkb2luZyBhIHdvcmQtYmFzZWQgZGlmZiBmcm9tIHRoZSBvZmYsIHRob3VnaFxuXHRcdGNvbnN0IGFhID0gW107XG5cdFx0Y29uc3QgYWFhID0gW107XG5cdFx0Y29uc3QgYmIgPSBbXTtcblx0XHRjb25zdCBiYmIgPSBbXTtcblx0XHRsZXQgaTtcblx0XHRsZXQgajtcblx0XHQvLyBmaXJzdCwgZ2F0aGVyIGFsbCBkaXNjb25uZWN0ZWQgbm9kZXMgaW4gYSBhbmQgYWxsIGNyb3NzaW5nIG5vZGVzIGluIGEgYW5kIGJcblx0XHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKCFhW2ldLnBhaXJlZCkge1xuXHRcdFx0XHRhYVtpXSA9IDE7XG5cdFx0XHR9IGVsc2UgaWYgKGNvdW50Q3Jvc3NpbmdzKGIsIGEsIGksIHRydWUpKSB7XG5cdFx0XHRcdGFhW2ldID0gMTtcblx0XHRcdFx0YmJbYVtpXS5yb3ddID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGljayB1cCByZW1haW5pbmcgZGlzY29ubmVjdGVkIG5vZGVzIGluIGJcblx0XHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGJiW2ldID09PSAxKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFiW2ldLnBhaXJlZCkge1xuXHRcdFx0XHRiYltpXSA9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGFub3RoZXIgcGFzcyB0byBnYXRoZXIgY29udGV4dDogd2Ugd2FudCB0aGUgbmVpZ2hib3VycyBvZiBpbmNsdWRlZCBub2RlcyB3aGljaCBhcmUgbm90XG5cdFx0Ly8geWV0IGluY2x1ZGVkIHdlIGhhdmUgdG8gYWRkIGluIHBhcnRuZXJzIG9mIHRoZXNlIG5vZGVzLCBidXQgd2UgZG9uJ3Qgd2FudCB0byBhZGQgY29udGV4dFxuXHRcdC8vIGZvciAqdGhvc2UqIG5vZGVzIGluIHRoZSBuZXh0IHBhc3Ncblx0XHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGJiW2ldID09PSAxKSB7XG5cdFx0XHRcdGZvciAoaiA9IE1hdGgubWF4KDAsIGkgLSBjb250ZXh0KTsgaiA8IE1hdGgubWluKGIubGVuZ3RoLCBpICsgY29udGV4dCk7ICsraikge1xuXHRcdFx0XHRcdGlmICghYmJbal0pIHtcblx0XHRcdFx0XHRcdGJiW2pdID0gMTtcblx0XHRcdFx0XHRcdGFhW2Jbal0ucm93XSA9IDAuNTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChhYVtpXSA9PT0gMSkge1xuXHRcdFx0XHRmb3IgKGogPSBNYXRoLm1heCgwLCBpIC0gY29udGV4dCk7IGogPCBNYXRoLm1pbihhLmxlbmd0aCwgaSArIGNvbnRleHQpOyArK2opIHtcblx0XHRcdFx0XHRpZiAoIWFhW2pdKSB7XG5cdFx0XHRcdFx0XHRhYVtqXSA9IDE7XG5cdFx0XHRcdFx0XHRiYlthW2pdLnJvd10gPSAwLjU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCBiYi5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGJiW2ldID4gMCkge1xuXHRcdFx0XHQvLyBpdCdzIGEgcm93IHdlIG5lZWRcblx0XHRcdFx0aWYgKGJbaV0ucGFpcmVkKSB7XG5cdFx0XHRcdFx0YmJiLnB1c2goYltpXS50ZXh0KTsgLy8gam9pbmVkOyBwYXJ0bmVyIHNob3VsZCBiZSBpbiBhYVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJiYi5wdXNoKGJbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCBhYS5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGFhW2ldID4gMCkge1xuXHRcdFx0XHQvLyBpdCdzIGEgcm93IHdlIG5lZWRcblx0XHRcdFx0aWYgKGFbaV0ucGFpcmVkKSB7XG5cdFx0XHRcdFx0YWFhLnB1c2goYVtpXS50ZXh0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBqb2luZWQ7IHBhcnRuZXIgc2hvdWxkIGJlIGluIGFhXG5cdFx0XHRcdFx0YWFhLnB1c2goYVtpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGE6IGFhYSxcblx0XHRcdGI6IGJiYixcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBzdHJpcE91dGVyQ29tbW9uTGluZXMgPSAoYSwgYiwgY29udGV4dCkgPT4ge1xuXHRcdGxldCBpID0gMDtcblx0XHR3aGlsZSAoaSA8IGEubGVuZ3RoICYmIGkgPCBiLmxlbmd0aCAmJiBhW2ldID09PSBiW2ldKSB7XG5cdFx0XHQrK2k7XG5cdFx0fVxuXHRcdGxldCBqID0gYS5sZW5ndGggLSAxO1xuXHRcdGxldCBrID0gYi5sZW5ndGggLSAxO1xuXHRcdHdoaWxlIChqID49IDAgJiYgayA+PSAwICYmIGFbal0gPT09IGJba10pIHtcblx0XHRcdC0tajtcblx0XHRcdC0taztcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGE6IGEuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIDEgLSBjb250ZXh0KSwgTWF0aC5taW4oYS5sZW5ndGggKyAxLCBqICsgY29udGV4dCArIDEpKSxcblx0XHRcdGI6IGIuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIDEgLSBjb250ZXh0KSwgTWF0aC5taW4oYi5sZW5ndGggKyAxLCBrICsgY29udGV4dCArIDEpKSxcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBpbnNlcnREaWZmID0gKG5hdnBvcCkgPT4ge1xuXHRcdC8vIGZvciBzcGVlZCByZWFzb25zLCB3ZSBmaXJzdCBkbyBhIGxpbmUtYmFzZWQgZGlmZiwgZGlzY2FyZCBzdHVmZiB0aGF0IHNlZW1zIGJvcmluZywgdGhlblxuXHRcdC8vIGRvIGEgd29yZC1iYXNlZCBkaWZmXG5cdFx0Ly8gRklYTUU6IHNvbWV0aW1lcyB0aGlzIGdpdmVzIG1pc2xlYWRpbmcgZGlmZnMgYXMgZGlzdGFudCBjaHVua3MgYXJlIHNxdWFzaGVkIHRvZ2V0aGVyXG5cdFx0bGV0IG9sZGxpbmVzID0gbmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpc2lvbi5jb250ZW50LnNwbGl0KCdcXG4nKTtcblx0XHRsZXQgbmV3bGluZXMgPSBuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlzaW9uLmNvbnRlbnQuc3BsaXQoJ1xcbicpO1xuXHRcdGxldCBpbm5lciA9IHN0cmlwT3V0ZXJDb21tb25MaW5lcyhvbGRsaW5lcywgbmV3bGluZXMsIGdldFZhbHVlT2YoJ3BvcHVwRGlmZkNvbnRleHRMaW5lcycpKTtcblx0XHRvbGRsaW5lcyA9IGlubmVyLmE7XG5cdFx0bmV3bGluZXMgPSBpbm5lci5iO1xuXHRcdGxldCB0cnVuY2F0ZWQgPSBmYWxzZTtcblx0XHRnZXRWYWx1ZU9mKCdwb3B1cERpZmZNYXhMaW5lcycpO1xuXHRcdGlmIChvbGRsaW5lcy5sZW5ndGggPiBwZy5vcHRpb24ucG9wdXBEaWZmTWF4TGluZXMgfHwgbmV3bGluZXMubGVuZ3RoID4gcGcub3B0aW9uLnBvcHVwRGlmZk1heExpbmVzKSB7XG5cdFx0XHQvLyB0cnVuY2F0ZVxuXHRcdFx0dHJ1bmNhdGVkID0gdHJ1ZTtcblx0XHRcdGlubmVyID0gc3RyaXBPdXRlckNvbW1vbkxpbmVzKFxuXHRcdFx0XHRvbGRsaW5lcy5zbGljZSgwLCBwZy5vcHRpb24ucG9wdXBEaWZmTWF4TGluZXMpLFxuXHRcdFx0XHRuZXdsaW5lcy5zbGljZSgwLCBwZy5vcHRpb24ucG9wdXBEaWZmTWF4TGluZXMpLFxuXHRcdFx0XHRwZy5vcHRpb24ucG9wdXBEaWZmQ29udGV4dExpbmVzXG5cdFx0XHQpO1xuXHRcdFx0b2xkbGluZXMgPSBpbm5lci5hO1xuXHRcdFx0bmV3bGluZXMgPSBpbm5lci5iO1xuXHRcdH1cblx0XHRjb25zdCBsaW5lRGlmZiA9IGRpZmYob2xkbGluZXMsIG5ld2xpbmVzKTtcblx0XHRjb25zdCBsaW5lczIgPSBybUJvcmluZ0xpbmVzKGxpbmVEaWZmLm8sIGxpbmVEaWZmLm4pO1xuXHRcdGNvbnN0IG9sZGxpbmVzMiA9IGxpbmVzMi5hO1xuXHRcdGNvbnN0IG5ld2xpbmVzMiA9IGxpbmVzMi5iO1xuXHRcdGxldCBodG1sID0gJzxocj4nO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cERpZmZEYXRlcycpKSB7XG5cdFx0XHRodG1sICs9IGRpZmZEYXRlc1RhYmxlKG5hdnBvcCk7XG5cdFx0XHRodG1sICs9ICc8aHI+Jztcblx0XHR9XG5cdFx0aHRtbCArPSBzaG9ydGVuRGlmZlN0cmluZyhcblx0XHRcdGRpZmZTdHJpbmcob2xkbGluZXMyLmpvaW4oJ1xcbicpLCBuZXdsaW5lczIuam9pbignXFxuJykpLFxuXHRcdFx0Z2V0VmFsdWVPZigncG9wdXBEaWZmQ29udGV4dENoYXJhY3RlcnMnKVxuXHRcdCkuam9pbignPGhyPicpO1xuXHRcdHNldFBvcHVwVGlwc0FuZEhUTUwoXG5cdFx0XHRodG1sLnNwbGl0KCdcXG4nKS5qb2luKCc8YnI+JykgK1xuXHRcdFx0XHQodHJ1bmNhdGVkID8gYDxocj48Yj4ke3BvcHVwU3RyaW5nKCdEaWZmIHRydW5jYXRlZCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucycpfTwvYj5gIDogJycpLFxuXHRcdFx0J3BvcHVwUHJldmlldycsXG5cdFx0XHRuYXZwb3AuaWROdW1iZXJcblx0XHQpO1xuXHR9O1xuXHRjb25zdCBkaWZmRGF0ZXNUYWJsZSA9IChuYXZwb3ApID0+IHtcblx0XHRsZXQgaHRtbCA9ICc8dGFibGUgY2xhc3M9XCJwb3B1cF9kaWZmX2RhdGVzXCI+Jztcblx0XHRodG1sICs9IGRpZmZEYXRlc1RhYmxlUm93KG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aXNpb24sIHRwcmludGYoJ05ldyByZXZpc2lvbicpKTtcblx0XHRodG1sICs9IGRpZmZEYXRlc1RhYmxlUm93KG5hdnBvcC5kaWZmRGF0YS5vbGRSZXYucmV2aXNpb24sIHRwcmludGYoJ09sZCByZXZpc2lvbicpKTtcblx0XHRodG1sICs9ICc8L3RhYmxlPic7XG5cdFx0cmV0dXJuIGh0bWw7XG5cdH07XG5cdGNvbnN0IGRpZmZEYXRlc1RhYmxlUm93ID0gKHJldmlzaW9uLCBsYWJlbCkgPT4ge1xuXHRcdGxldCB0eHQgPSAnJztcblx0XHRjb25zdCBsYXN0TW9kaWZpZWREYXRlID0gbmV3IERhdGUocmV2aXNpb24udGltZXN0YW1wKTtcblx0XHR0eHQgPSBmb3JtYXR0ZWREYXRlVGltZShsYXN0TW9kaWZpZWREYXRlKTtcblx0XHRjb25zdCByZXZsaW5rID0gZ2VuZXJhbExpbmsoe1xuXHRcdFx0dXJsOiBgJHttdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpfT9vbGRpZD0ke3JldmlzaW9uLnJldmlkfWAsXG5cdFx0XHR0ZXh0OiBsYWJlbCxcblx0XHRcdHRpdGxlOiBsYWJlbCxcblx0XHR9KTtcblx0XHRyZXR1cm4gc2ltcGxlUHJpbnRmKCc8dHI+PHRkPiVzPC90ZD48dGQ+JXM8L3RkPjwvdHI+JywgW3JldmxpbmssIHR4dF0pO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBkaWZmcHJldmlldy5qc1xuXHQvLyBTVEFSVEZJTEU6IGxpbmtzLmpzXG5cdC8vIExJTksgR0VORVJBVElPTiAvL1xuXHQvLyB0aXRsZWREaWZmTGluayAtLT4gdGl0bGVkV2lraUxpbmsgLS0+IGdlbmVyYWxMaW5rXG5cdC8vIHdpa2lMaW5rXHQgICAtLT4gdGl0bGVkV2lraUxpbmsgLS0+IGdlbmVyYWxMaW5rXG5cdC8vIGVkaXRDb3VudGVyTGluayAtLT4gZ2VuZXJhbExpbmtcblx0Ly8gVE9ETyBNYWtlIHRoZXNlIGZ1bmN0aW9ucyByZXR1cm4gRWxlbWVudCBvYmplY3RzLCBub3QganVzdCByYXcgSFRNTCBzdHJpbmdzLlxuXHRjb25zdCB0aXRsZWREaWZmTGluayA9IChsKSA9PiB7XG5cdFx0cmV0dXJuIHRpdGxlZFdpa2lMaW5rKHtcblx0XHRcdGFydGljbGU6IGwuYXJ0aWNsZSxcblx0XHRcdGFjdGlvbjogYCR7bC50b30mb2xkaWQ9JHtsLmZyb219YCxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHRub1BvcHVwOiBsLm5vUG9wdXAsXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHR0aXRsZTogbC50aXRsZSxcblx0XHRcdC8qIGhhY2s6IG5vIG9sZGlkIGhlcmUgKi9cblx0XHRcdGFjdGlvbk5hbWU6ICdkaWZmJyxcblx0XHR9KTtcblx0fTtcblx0Y29uc3Qgd2lraUxpbmsgPSAobCkgPT4ge1xuXHRcdC8vIHthcnRpY2xlOmFydGljbGUsIGFjdGlvbjphY3Rpb24sIHRleHQ6dGV4dCwgb2xkaWQsIG5ld2lkfSkge1xuXHRcdGlmICghKHR5cGVvZiBsLmFydGljbGUgPT09IHR5cGVvZiB7fSAmJiB0eXBlb2YgbC5hY3Rpb24gPT09IHR5cGVvZiAnJyAmJiB0eXBlb2YgbC50ZXh0ID09PSB0eXBlb2YgJycpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKGwub2xkaWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bC5vbGRpZCA9IG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHNhdmVkT2xkaWQgPSBsLm9sZGlkO1xuXHRcdGlmICghL14oZWRpdHx2aWV3fHJldmVydHxyZW5kZXIpJHxecmF3Ly50ZXN0KGwuYWN0aW9uKSkge1xuXHRcdFx0bC5vbGRpZCA9IG51bGw7XG5cdFx0fVxuXHRcdGxldCBoaW50ID0gcG9wdXBTdHJpbmcoYCR7bC5hY3Rpb259SGludGApOyAvLyByZXZlcnRIaW50IGV0YyBldGMgZXRjXG5cdFx0Y29uc3Qgb2xkaWREYXRhID0gW2wub2xkaWQsIHNhZmVEZWNvZGVVUkkobC5hcnRpY2xlKV07XG5cdFx0bGV0IHJldmlzaW9uU3RyaW5nID0gdHByaW50ZigncmV2aXNpb24gJXMgb2YgJXMnLCBvbGRpZERhdGEpO1xuXHRcdGxvZyhgcmV2aXNpb25TdHJpbmc9JHtyZXZpc2lvblN0cmluZ31gKTtcblx0XHRzd2l0Y2ggKGwuYWN0aW9uKSB7XG5cdFx0XHRjYXNlICdlZGl0JnNlY3Rpb249bmV3Jzpcblx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCduZXdTZWN0aW9uSGludCcpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2VkaXQmdW5kbz0nOlxuXHRcdFx0XHRpZiAobC5kaWZmICYmIGwuZGlmZiAhPT0gJ3ByZXYnICYmIHNhdmVkT2xkaWQpIHtcblx0XHRcdFx0XHRsLmFjdGlvbiArPSBgJHtsLmRpZmZ9JnVuZG9hZnRlcj0ke3NhdmVkT2xkaWR9YDtcblx0XHRcdFx0fSBlbHNlIGlmIChzYXZlZE9sZGlkKSB7XG5cdFx0XHRcdFx0bC5hY3Rpb24gKz0gc2F2ZWRPbGRpZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ3VuZG9IaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmF3JmN0eXBlPXRleHQvY3NzJzpcblx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCdyYXdIaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmV2ZXJ0Jzoge1xuXHRcdFx0XHRjb25zdCBwID0gcGFyc2VQYXJhbXMocGcuY3VycmVudC5saW5rLmhyZWYpO1xuXHRcdFx0XHRsLmFjdGlvbiA9IGBlZGl0JmF1dG9jbGljaz13cFNhdmUmYWN0b2tlbj0ke2F1dG9DbGlja1Rva2VuKCl9JmF1dG9pbXBsPSR7cG9wdXBTdHJpbmcoXG5cdFx0XHRcdFx0J2F1dG9lZGl0X3ZlcnNpb24nXG5cdFx0XHRcdCl9JmF1dG9zdW1tYXJ5PSR7cmV2ZXJ0U3VtbWFyeShsLm9sZGlkLCBwLmRpZmYpfWA7XG5cdFx0XHRcdGlmIChwLmRpZmYgPT09ICdwcmV2Jykge1xuXHRcdFx0XHRcdGwuYWN0aW9uICs9ICcmZGlyZWN0aW9uPXByZXYnO1xuXHRcdFx0XHRcdHJldmlzaW9uU3RyaW5nID0gdHByaW50ZigndGhlIHJldmlzaW9uIHByaW9yIHRvIHJldmlzaW9uICVzIG9mICVzJywgb2xkaWREYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBSZXZlcnRTdW1tYXJ5UHJvbXB0JykpIHtcblx0XHRcdFx0XHRsLmFjdGlvbiArPSAnJmF1dG9zdW1tYXJ5cHJvbXB0PXRydWUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cE1pbm9yUmV2ZXJ0cycpKSB7XG5cdFx0XHRcdFx0bC5hY3Rpb24gKz0gJyZhdXRvbWlub3I9dHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bG9nKGByZXZpc2lvblN0cmluZyBpcyBub3cgJHtyZXZpc2lvblN0cmluZ31gKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdudWxsRWRpdCc6XG5cdFx0XHRcdGwuYWN0aW9uID0gYGVkaXQmYXV0b2NsaWNrPXdwU2F2ZSZhY3Rva2VuPSR7YXV0b0NsaWNrVG9rZW4oKX0mYXV0b2ltcGw9JHtwb3B1cFN0cmluZyhcblx0XHRcdFx0XHQnYXV0b2VkaXRfdmVyc2lvbidcblx0XHRcdFx0KX0mYXV0b3N1bW1hcnk9bnVsbGA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaGlzdG9yeWZlZWQnOlxuXHRcdFx0XHRsLmFjdGlvbiA9ICdoaXN0b3J5JmZlZWQ9cnNzJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdtYXJrcGF0cm9sbGVkJzpcblx0XHRcdFx0bC5hY3Rpb24gPSBgbWFya3BhdHJvbGxlZCZyY2lkPSR7bC5yY2lkfWA7XG5cdFx0fVxuXHRcdGlmIChoaW50KSB7XG5cdFx0XHRoaW50ID0gbC5vbGRpZCA/IHNpbXBsZVByaW50ZihoaW50LCBbcmV2aXNpb25TdHJpbmddKSA6IHNpbXBsZVByaW50ZihoaW50LCBbc2FmZURlY29kZVVSSShsLmFydGljbGUpXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhpbnQgPSBzYWZlRGVjb2RlVVJJKGAke2wuYXJ0aWNsZX0mYWN0aW9uPSR7bC5hY3Rpb259YCkgKyBsLm9sZGlkID8gYCZvbGRpZD0ke2wub2xkaWR9YCA6ICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gdGl0bGVkV2lraUxpbmsoe1xuXHRcdFx0YXJ0aWNsZTogbC5hcnRpY2xlLFxuXHRcdFx0YWN0aW9uOiBsLmFjdGlvbixcblx0XHRcdHRleHQ6IGwudGV4dCxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHR0aXRsZTogaGludCxcblx0XHRcdG9sZGlkOiBsLm9sZGlkLFxuXHRcdFx0bm9Qb3B1cDogbC5ub1BvcHVwLFxuXHRcdFx0b25jbGljazogbC5vbmNsaWNrLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCByZXZlcnRTdW1tYXJ5ID0gKG9sZGlkLCBkaWZmKSA9PiB7XG5cdFx0bGV0IHJldCA9ICcnO1xuXHRcdHJldCA9XG5cdFx0XHRkaWZmID09PSAncHJldidcblx0XHRcdFx0PyBnZXRWYWx1ZU9mKCdwb3B1cFF1ZXJpZWRSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeScpXG5cdFx0XHRcdDogZ2V0VmFsdWVPZigncG9wdXBRdWVyaWVkUmV2ZXJ0U3VtbWFyeScpO1xuXHRcdHJldHVybiBgJHtyZXR9JmF1dG9ydj0ke29sZGlkfWA7XG5cdH07XG5cdGNvbnN0IHRpdGxlZFdpa2lMaW5rID0gKGwpID0+IHtcblx0XHQvLyBwb3NzaWJsZSBwcm9wZXJ0aWVzIG9mIGFyZ3VtZW50OlxuXHRcdC8vIGFydGljbGUsIGFjdGlvbiwgdGV4dCwgdGl0bGUsIG9sZGlkLCBhY3Rpb25OYW1lLCBjbGFzc05hbWUsIG5vUG9wdXBcblx0XHQvLyBvbGRpZCA9IG51bGwgaXMgZmluZSBoZXJlXG5cdFx0Ly8gYXJ0aWNsZSBhbmQgYWN0aW9uIGFyZSBtYW5kYXRvcnkgYXJnc1xuXHRcdGlmIChsLmFydGljbGUgPT09IHVuZGVmaW5lZCB8fCBsLmFjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRlcnJsb2coJ2dvdCB1bmRlZmluZWQgYXJ0aWNsZSBvciBhY3Rpb24gaW4gdGl0bGVkV2lraUxpbmsnKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBiYXNlID0gcGcud2lraS50aXRsZWJhc2UgKyBsLmFydGljbGUudXJsU3RyaW5nKCk7XG5cdFx0bGV0IHVybCA9IGJhc2U7XG5cdFx0aWYgKGwuYWN0aW9uTmFtZSA9PT0gdW5kZWZpbmVkIHx8ICFsLmFjdGlvbk5hbWUpIHtcblx0XHRcdGwuYWN0aW9uTmFtZSA9ICdhY3Rpb24nO1xuXHRcdH1cblx0XHQvLyBubyBuZWVkIHRvIGFkZCAmYWN0aW9uPXZpZXcsIGFuZCB0aGlzIGNvbmZ1c2VzIGFuY2hvcnNcblx0XHRpZiAobC5hY3Rpb24gIT09ICd2aWV3Jykge1xuXHRcdFx0dXJsID0gYCR7YmFzZX0mJHtsLmFjdGlvbk5hbWV9PSR7bC5hY3Rpb259YDtcblx0XHR9XG5cdFx0aWYgKGwub2xkaWQgIT09IHVuZGVmaW5lZCAmJiBsLm9sZGlkKSB7XG5cdFx0XHR1cmwgKz0gYCZvbGRpZD0ke2wub2xkaWR9YDtcblx0XHR9XG5cdFx0bGV0IGNzc0NsYXNzID0gcGcubWlzYy5kZWZhdWx0TmF2bGlua0NsYXNzbmFtZTtcblx0XHRpZiAobC5jbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBsLmNsYXNzTmFtZSkge1xuXHRcdFx0Y3NzQ2xhc3MgPSBsLmNsYXNzTmFtZTtcblx0XHR9XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybCxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHR0aXRsZTogbC50aXRsZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGwudGl0bGUsXG5cdFx0XHR0ZXh0OiBsLnRleHQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBsLnRleHQsXG5cdFx0XHRjbGFzc05hbWU6IGNzc0NsYXNzLFxuXHRcdFx0bm9Qb3B1cDogbC5ub1BvcHVwLFxuXHRcdFx0b25jbGljazogbC5vbmNsaWNrLFxuXHRcdH0pO1xuXHR9O1xuXHRwZy5mbi5nZXRMYXN0Q29udHJpYiA9ICh3aWtpcGFnZSwgbmV3V2luKSA9PiB7XG5cdFx0Z2V0SGlzdG9yeUluZm8od2lraXBhZ2UsICh4KSA9PiB7XG5cdFx0XHRwcm9jZXNzTGFzdENvbnRyaWJJbmZvKHgsIHtwYWdlOiB3aWtpcGFnZSwgbmV3V2lufSk7XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHByb2Nlc3NMYXN0Q29udHJpYkluZm8gPSAoaW5mbywgc3R1ZmYpID0+IHtcblx0XHRpZiAoIWluZm8uZWRpdHMgfHwgaW5mby5lZGl0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KCdQb3B1cHM6IGFuIG9kZCB0aGluZyBoYXBwZW5lZC4gUGxlYXNlIHJldHJ5LicsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghaW5mby5maXJzdE5ld0VkaXRvcikge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHRwcmludGYoJ09ubHkgZm91bmQgb25lIGVkaXRvcjogJXMgbWFkZSAlcyBlZGl0cycsIFtpbmZvLmVkaXRzWzBdLmVkaXRvciwgaW5mby5lZGl0cy5sZW5ndGhdKSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhZzogJ3BvcHVwcycsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbmV3VXJsID0gYCR7cGcud2lraS50aXRsZWJhc2UgKyBuZXcgVGl0bGUoc3R1ZmYucGFnZSkudXJsU3RyaW5nKCl9JmRpZmY9Y3VyJm9sZGlkPSR7XG5cdFx0XHRpbmZvLmZpcnN0TmV3RWRpdG9yLm9sZGlkXG5cdFx0fWA7XG5cdFx0ZGlzcGxheVVybChuZXdVcmwsIHN0dWZmLm5ld1dpbik7XG5cdH07XG5cdHBnLmZuLmdldERpZmZTaW5jZU15RWRpdCA9ICh3aWtpcGFnZSwgbmV3V2luKSA9PiB7XG5cdFx0Z2V0SGlzdG9yeUluZm8od2lraXBhZ2UsICh4KSA9PiB7XG5cdFx0XHRwcm9jZXNzRGlmZlNpbmNlTXlFZGl0KHgsIHtwYWdlOiB3aWtpcGFnZSwgbmV3V2lufSk7XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHByb2Nlc3NEaWZmU2luY2VNeUVkaXQgPSAoaW5mbywgc3R1ZmYpID0+IHtcblx0XHRpZiAoIWluZm8uZWRpdHMgfHwgaW5mby5lZGl0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KCdQb3B1cHM6IHNvbWV0aGluZyBmaXNoeSBoYXBwZW5lZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBmcmllbmRseU5hbWUgPSBzdHVmZi5wYWdlLnNwbGl0KCdfJykuam9pbignICcpO1xuXHRcdGlmICghaW5mby5teUxhc3RFZGl0KSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0dHByaW50ZihcIkNvdWxkbid0IGZpbmQgYW4gZWRpdCBieSAlc1xcbmluIHRoZSBsYXN0ICVzIGVkaXRzIHRvXFxuJXNcIiwgW1xuXHRcdFx0XHRcdGluZm8udXNlck5hbWUsXG5cdFx0XHRcdFx0Z2V0VmFsdWVPZigncG9wdXBIaXN0b3J5TGltaXQnKSxcblx0XHRcdFx0XHRmcmllbmRseU5hbWUsXG5cdFx0XHRcdF0pLFxuXHRcdFx0XHR7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChpbmZvLm15TGFzdEVkaXQuaW5kZXggPT09IDApIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KHRwcmludGYoJyVzIHNlZW1zIHRvIGJlIHRoZSBsYXN0IGVkaXRvciB0byB0aGUgcGFnZSAlcycsIFtpbmZvLnVzZXJOYW1lLCBmcmllbmRseU5hbWVdKSwge1xuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IG5ld1VybCA9IGAke3BnLndpa2kudGl0bGViYXNlICsgbmV3IFRpdGxlKHN0dWZmLnBhZ2UpLnVybFN0cmluZygpfSZkaWZmPWN1ciZvbGRpZD0ke1xuXHRcdFx0aW5mby5teUxhc3RFZGl0Lm9sZGlkXG5cdFx0fWA7XG5cdFx0ZGlzcGxheVVybChuZXdVcmwsIHN0dWZmLm5ld1dpbik7XG5cdH07XG5cdGNvbnN0IGRpc3BsYXlVcmwgPSAodXJsLCBuZXdXaW4pID0+IHtcblx0XHRpZiAobmV3V2luKSB7XG5cdFx0XHR3aW5kb3cub3Blbih1cmwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybDtcblx0XHR9XG5cdH07XG5cdHBnLmZuLnB1cmdlUG9wdXBzID0gKCkgPT4ge1xuXHRcdHByb2Nlc3NBbGxQb3B1cHModHJ1ZSk7XG5cdFx0c2V0dXBDYWNoZSgpOyAvLyBkZWxldGVzIGFsbCBjYWNoZWQgaXRlbXMgKG5vdCBicm93c2VyIGNhY2hlZCwgdGhvdWdoLi4uKVxuXHRcdHBnLm9wdGlvbiA9IHt9O1xuXHRcdGFib3J0QWxsRG93bmxvYWRzKCk7XG5cdH07XG5cdGNvbnN0IHByb2Nlc3NBbGxQb3B1cHMgPSAobnVsbGlmeSwgYmFuaXNoKSA9PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IHBnLmN1cnJlbnQubGlua3MgJiYgaSA8IHBnLmN1cnJlbnQubGlua3MubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmICghcGcuY3VycmVudC5saW5rc1tpXS5uYXZwb3B1cCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmIChudWxsaWZ5IHx8IGJhbmlzaCkge1xuXHRcdFx0XHRwZy5jdXJyZW50LmxpbmtzW2ldLm5hdnBvcHVwLmJhbmlzaCgpO1xuXHRcdFx0fVxuXHRcdFx0cGcuY3VycmVudC5saW5rc1tpXS5zaW1wbGVOb01vcmUgPSBmYWxzZTtcblx0XHRcdGlmIChudWxsaWZ5KSB7XG5cdFx0XHRcdHBnLmN1cnJlbnQubGlua3NbaV0ubmF2cG9wdXAgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cGcuZm4uZGlzYWJsZVBvcHVwcyA9ICgpID0+IHtcblx0XHRwcm9jZXNzQWxsUG9wdXBzKGZhbHNlLCB0cnVlKTtcblx0XHRzZXR1cFRvb2x0aXBzKG51bGwsIHRydWUpO1xuXHR9O1xuXHRwZy5mbi50b2dnbGVQcmV2aWV3cyA9ICgpID0+IHtcblx0XHRwcm9jZXNzQWxsUG9wdXBzKHRydWUsIHRydWUpO1xuXHRcdHBnLm9wdGlvbi5zaW1wbGVQb3B1cHMgPSAhcGcub3B0aW9uLnNpbXBsZVBvcHVwcztcblx0XHRhYm9ydEFsbERvd25sb2FkcygpO1xuXHR9O1xuXHRjb25zdCBtYWdpY1dhdGNoTGluayA9IGZ1bmN0aW9uIG1hZ2ljV2F0Y2hMaW5rKGwpIHtcblx0XHQvLyBZdWNrISEgV291bGQgcmVxdWlyZSBhIHRob3JvdWdoIHJlZGVzaWduIHRvIGFkZCB0aGlzIGFzIGEgY2xpY2sgZXZlbnQgdGhvdWdoIC4uLlxuXHRcdGwub25jbGljayA9IHNpbXBsZVByaW50ZihcInBnLmZuLm1vZGlmeVdhdGNobGlzdCgnJXMnLCclcycpO3JldHVybiBmYWxzZTtcIiwgW1xuXHRcdFx0bC5hcnRpY2xlXG5cdFx0XHRcdC50b1N0cmluZyh0cnVlKVxuXHRcdFx0XHQuc3BsaXQoJ1xcXFwnKVxuXHRcdFx0XHQuam9pbignXFxcXFxcXFwnKVxuXHRcdFx0XHQuc3BsaXQoXCInXCIpXG5cdFx0XHRcdC5qb2luKFN0cmluZy5yYXdgXFwnYCksXG5cdFx0XHR0aGlzLmlkLFxuXHRcdF0pO1xuXHRcdHJldHVybiB3aWtpTGluayhsKTtcblx0fTtcblx0cGcuZm4ubW9kaWZ5V2F0Y2hsaXN0ID0gYXN5bmMgKHRpdGxlLCBhY3Rpb24pID0+IHtcblx0XHRjb25zdCByZXFEYXRhID0ge1xuXHRcdFx0YWN0aW9uOiAnd2F0Y2gnLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdHVzZWxhbmc6IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyksXG5cdFx0fTtcblx0XHRpZiAoYWN0aW9uID09PSAndW53YXRjaCcpIHtcblx0XHRcdHJlcURhdGEudW53YXRjaCA9IHRydWU7XG5cdFx0fVxuXHRcdC8vIExvYWQgdGhlIEFkZGVkd2F0Y2h0ZXh0IG9yIFJlbW92ZWR3YXRjaHRleHQgbWVzc2FnZSBhbmQgc2hvdyBpdFxuXHRcdGNvbnN0IG13VGl0bGUgPSBtdy5UaXRsZS5uZXdGcm9tVGV4dCh0aXRsZSk7XG5cdFx0bGV0IG1lc3NhZ2VOYW1lO1xuXHRcdGlmIChtd1RpdGxlICYmIG13VGl0bGUuZ2V0TmFtZXNwYWNlSWQoKSA+IDAgJiYgbXdUaXRsZS5nZXROYW1lc3BhY2VJZCgpICUgMiA9PT0gMSkge1xuXHRcdFx0bWVzc2FnZU5hbWUgPSBhY3Rpb24gPT09ICd3YXRjaCcgPyAnYWRkZWR3YXRjaHRleHQtdGFsaycgOiAncmVtb3ZlZHdhdGNodGV4dC10YWxrJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWVzc2FnZU5hbWUgPSBhY3Rpb24gPT09ICd3YXRjaCcgPyAnYWRkZWR3YXRjaHRleHQnIDogJ3JlbW92ZWR3YXRjaHRleHQnO1xuXHRcdH1cblx0XHRhd2FpdCBnZXRNd0FwaSgpLnBvc3RXaXRoVG9rZW4oJ3dhdGNoJywgcmVxRGF0YSk7XG5cdFx0YXdhaXQgZ2V0TXdBcGkoKS5sb2FkTWVzc2FnZXNJZk1pc3NpbmcoW21lc3NhZ2VOYW1lXSk7XG5cdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIHN0cmluZy5qc1xuXHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHR2b2lkIG13Lm5vdGlmeShtdy5tZXNzYWdlKG1lc3NhZ2VOYW1lLCB0aXRsZSkucGFyc2VEb20oKSwge3RhZzogJ3BvcHVwcyd9KTtcblx0fTtcblx0Y29uc3QgbWFnaWNIaXN0b3J5TGluayA9IChsKSA9PiB7XG5cdFx0bGV0IHRpdGxlID0gJyc7XG5cdFx0bGV0IG9uQ2xpY2sgPSAnJztcblx0XHRzd2l0Y2ggKGwuaWQpIHtcblx0XHRcdGNhc2UgJ2xhc3RDb250cmliJzpcblx0XHRcdFx0b25DbGljayA9IHNpbXBsZVByaW50ZihcInBnLmZuLmdldExhc3RDb250cmliKCclcycsJXMpXCIsIFtcblx0XHRcdFx0XHRsLmFydGljbGVcblx0XHRcdFx0XHRcdC50b1N0cmluZyh0cnVlKVxuXHRcdFx0XHRcdFx0LnNwbGl0KCdcXFxcJylcblx0XHRcdFx0XHRcdC5qb2luKCdcXFxcXFxcXCcpXG5cdFx0XHRcdFx0XHQuc3BsaXQoXCInXCIpXG5cdFx0XHRcdFx0XHQuam9pbihTdHJpbmcucmF3YFxcJ2ApLFxuXHRcdFx0XHRcdGwubmV3V2luLFxuXHRcdFx0XHRdKTtcblx0XHRcdFx0dGl0bGUgPSBwb3B1cFN0cmluZygnbGFzdENvbnRyaWJIaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnc2luY2VNZSc6XG5cdFx0XHRcdG9uQ2xpY2sgPSBzaW1wbGVQcmludGYoXCJwZy5mbi5nZXREaWZmU2luY2VNeUVkaXQoJyVzJywlcylcIiwgW1xuXHRcdFx0XHRcdGwuYXJ0aWNsZVxuXHRcdFx0XHRcdFx0LnRvU3RyaW5nKHRydWUpXG5cdFx0XHRcdFx0XHQuc3BsaXQoJ1xcXFwnKVxuXHRcdFx0XHRcdFx0LmpvaW4oJ1xcXFxcXFxcJylcblx0XHRcdFx0XHRcdC5zcGxpdChcIidcIilcblx0XHRcdFx0XHRcdC5qb2luKFN0cmluZy5yYXdgXFwnYCksXG5cdFx0XHRcdFx0bC5uZXdXaW4sXG5cdFx0XHRcdF0pO1xuXHRcdFx0XHR0aXRsZSA9IHBvcHVwU3RyaW5nKCdzaW5jZU1lSGludCcpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0b25DbGljayArPSAnO3JldHVybiBmYWxzZTsnO1xuXHRcdHJldHVybiBnZW5lcmFsTmF2TGluayh7XG5cdFx0XHRuZXdXaW46IGZhbHNlLFxuXHRcdFx0dGl0bGUsXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHRub1BvcHVwOiBsLm5vUG9wdXAsXG5cdFx0XHRvbmNsaWNrOiBvbkNsaWNrLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBwb3B1cE1lbnVMaW5rID0gKGwpID0+IHtcblx0XHRjb25zdCB0aXRsZSA9IHBvcHVwU3RyaW5nKHNpbXBsZVByaW50ZignJXNIaW50JywgW2wuaWRdKSk7XG5cdFx0Y29uc3Qgb25DbGljayA9IHNpbXBsZVByaW50ZigncGcuZm4uJXMoKTtyZXR1cm4gZmFsc2U7JywgW2wuaWRdKTtcblx0XHRyZXR1cm4gZ2VuZXJhbE5hdkxpbmsoe1xuXHRcdFx0bmV3V2luOiBmYWxzZSxcblx0XHRcdHRpdGxlLFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bm9Qb3B1cDogbC5ub1BvcHVwLFxuXHRcdFx0b25jbGljazogb25DbGljayxcblx0XHR9KTtcblx0fTtcblx0Y29uc3Qgc3BlY2lhbExpbmsgPSAobCkgPT4ge1xuXHRcdC8vIHByb3BlcnRpZXM6IGFydGljbGUsIHNwZWNpYWxwYWdlLCB0ZXh0LCBzZXBcblx0XHRpZiAobC5zcGVjaWFscGFnZSA9PT0gdW5kZWZpbmVkIHx8ICFsLnNwZWNpYWxwYWdlKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgYmFzZSA9IGAke3BnLndpa2kudGl0bGViYXNlICsgbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNTcGVjaWFsSWRdfToke2wuc3BlY2lhbHBhZ2V9YDtcblx0XHRsLnNlcCA/Pz0gJyZ0YXJnZXQ9Jztcblx0XHRsZXQgYXJ0aWNsZSA9IGwuYXJ0aWNsZS51cmxTdHJpbmcoe1xuXHRcdFx0a2VlcFNwYWNlczogbC5zcGVjaWFscGFnZSA9PT0gJ1NlYXJjaCcsXG5cdFx0fSk7XG5cdFx0bGV0IGhpbnQgPSBwb3B1cFN0cmluZyhgJHtsLnNwZWNpYWxwYWdlfUhpbnRgKTtcblx0XHRzd2l0Y2ggKGwuc3BlY2lhbHBhZ2UpIHtcblx0XHRcdGNhc2UgJ0xvZyc6XG5cdFx0XHRcdHN3aXRjaCAobC5zZXApIHtcblx0XHRcdFx0XHRjYXNlICcmdXNlcj0nOlxuXHRcdFx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCd1c2VyTG9nSGludCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnJnR5cGU9YmxvY2smcGFnZT0nOlxuXHRcdFx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCdibG9ja0xvZ0hpbnQnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJyZwYWdlPSc6XG5cdFx0XHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ3BhZ2VMb2dIaW50Jyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICcmdHlwZT1wcm90ZWN0JnBhZ2U9Jzpcblx0XHRcdFx0XHRcdGhpbnQgPSBwb3B1cFN0cmluZygncHJvdGVjdExvZ0hpbnQnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJyZ0eXBlPWRlbGV0ZSZwYWdlPSc6XG5cdFx0XHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ2RlbGV0ZUxvZ0hpbnQnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRsb2coYFVua25vd24gbG9nIHR5cGUsIHNlcD0ke2wuc2VwfWApO1xuXHRcdFx0XHRcdFx0aGludCA9ICdNaXNzaW5nIGhpbnQgKEZJWE1FKSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdQcmVmaXhJbmRleCc6XG5cdFx0XHRcdGFydGljbGUgKz0gJy8nO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0aGludCA9IGhpbnQgPyBzaW1wbGVQcmludGYoaGludCwgW3NhZmVEZWNvZGVVUkkobC5hcnRpY2xlKV0pIDogc2FmZURlY29kZVVSSShgJHtsLnNwZWNpYWxwYWdlfToke2wuYXJ0aWNsZX1gKTtcblx0XHRjb25zdCB1cmwgPSBiYXNlICsgbC5zZXAgKyBhcnRpY2xlO1xuXHRcdHJldHVybiBnZW5lcmFsTmF2TGluayh7XG5cdFx0XHR1cmwsXG5cdFx0XHR0aXRsZTogaGludCxcblx0XHRcdHRleHQ6IGwudGV4dCxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHRub1BvcHVwOiBsLm5vUG9wdXAsXG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGdlbmVyYWxMaW5rID0gKGwpID0+IHtcblx0XHQvLyBsLnVybCwgbC50ZXh0LCBsLnRpdGxlLCBsLm5ld1dpbiwgbC5jbGFzc05hbWUsIGwubm9Qb3B1cCwgbC5vbmNsaWNrXG5cdFx0bGV0IHJldCA9ICc8YSc7XG5cdFx0aWYgKGwudXJsKSB7XG5cdFx0XHQvLyBvbmx5IHF1b3RhdGlvbiBtYXJrcyBpbiB0aGUgdXJsIGNhbiBzY3JldyB1cyB1cCBub3cuLi4gSSB0aGlua1xuXHRcdFx0Y29uc3QgdXJsID0gbC51cmwuc3BsaXQoJ1wiJykuam9pbignJTIyJyk7XG5cdFx0XHRyZXQgKz0gYCBocmVmPVwiJHt1cmx9XCJgO1xuXHRcdH1cblx0XHRpZiAobC50aXRsZSAhPT0gdW5kZWZpbmVkICYmIGwudGl0bGUpIHtcblx0XHRcdHJldCArPSBgIHRpdGxlPVwiJHtwZy5lc2NhcGVRdW90ZXNIVE1MKGwudGl0bGUpfVwiYDtcblx0XHR9XG5cdFx0aWYgKGwub25jbGljayAhPT0gdW5kZWZpbmVkICYmIGwub25jbGljaykge1xuXHRcdFx0cmV0ICs9IGAgb25jbGljaz1cIiR7cGcuZXNjYXBlUXVvdGVzSFRNTChsLm9uY2xpY2spfVwiYDtcblx0XHR9XG5cdFx0aWYgKGwubm9Qb3B1cCkge1xuXHRcdFx0cmV0ICs9ICcgbm9Qb3B1cD0xJztcblx0XHR9XG5cdFx0bGV0IG5ld1dpbjtcblx0XHRpZiAobC5uZXdXaW4gPT09IHVuZGVmaW5lZCB8fCBsLm5ld1dpbiA9PT0gbnVsbCkge1xuXHRcdFx0bmV3V2luID0gZ2V0VmFsdWVPZigncG9wdXBOZXdXaW5kb3dzJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCh7bmV3V2lufSA9IGwpO1xuXHRcdH1cblx0XHRpZiAobmV3V2luKSB7XG5cdFx0XHRyZXQgKz0gJyByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiJztcblx0XHR9XG5cdFx0aWYgKGwuY2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgbC5jbGFzc05hbWUpIHtcblx0XHRcdHJldCArPSBgIGNsYXNzPVwiJHtsLmNsYXNzTmFtZX1cImA7XG5cdFx0fVxuXHRcdHJldCArPSAnPic7XG5cdFx0aWYgKHR5cGVvZiBsLnRleHQgPT09IHR5cGVvZiAnJykge1xuXHRcdFx0Ly8gV2UgbmVlZCB0byBIVE1MLWVzY2FwZSB0aGlzIHRvIGF2b2lkIFhTUywgYnV0IHdlIGFsc28gd2FudCB0b1xuXHRcdFx0Ly8gZGlzcGxheSBhbnkgZXhpc3RpbmcgSFRNTCBlbnRpdGllcyBjb3JyZWN0bHksIHNvIHVuZXNjYXBlIGl0IGZpcnN0LlxuXHRcdFx0Ly8gRm9yIGV4YW1wbGUsIHRoZSBkaXNwbGF5IHRleHQgb2YgdGhlIHVzZXIgcGFnZSBtZW51IGl0ZW0gaXMgZGVmaW5lZFxuXHRcdFx0Ly8gYXMgXCJ1c2VyJm5ic3A7cGFnZVwiLCBzbyB3ZSBuZWVkIHRvIHVuZXNjYXBlIGZpcnN0IHRvIGF2b2lkIGl0IGJlaW5nXG5cdFx0XHQvLyBlc2NhcGVkIHRvIFwidXNlciZhbXA7bmJzcDtwYWdlXCIuXG5cdFx0XHRyZXQgKz0gcGcuZXNjYXBlUXVvdGVzSFRNTChwZy51bmVzY2FwZVF1b3Rlc0hUTUwobC50ZXh0KSk7XG5cdFx0fVxuXHRcdHJldCArPSAnPC9hPic7XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgYXBwZW5kUGFyYW1zVG9MaW5rID0gKGxpbmtzdHIsIHBhcmFtcykgPT4ge1xuXHRcdGNvbnN0IHNwID0gbGlua3N0ci5zcGxpdCgvKGhyZWY9XCJbXlwiXSs/KVwiL2kpO1xuXHRcdGlmIChzcC5sZW5ndGggPCAyKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IHJldCA9IHNwLnNoaWZ0KCkgKyBzcC5zaGlmdCgpO1xuXHRcdHJldCArPSBgJiR7cGFyYW1zfVwiYDtcblx0XHRyZXQgKz0gc3Auam9pbignJyk7XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgY2hhbmdlTGlua1RhcmdldExpbmsgPSAoeCkgPT4ge1xuXHRcdC8vIG5ld1RhcmdldCwgdGV4dCwgaGludCwgc3VtbWFyeSwgY2xpY2tCdXR0b24sIG1pbm9yLCB0aXRsZSAob3B0aW9uYWwpLCBhbHNvQ2hhbmdlTGFiZWwge1xuXHRcdGlmICh4Lm5ld1RhcmdldCkge1xuXHRcdFx0bG9nKGBjaGFuZ2VMaW5rVGFyZ2V0TGluazogbmV3VGFyZ2V0PSR7eC5uZXdUYXJnZXR9YCk7XG5cdFx0fVxuXHRcdGlmICh4Lm9sZFRhcmdldCAhPT0gZGVjb2RlVVJJQ29tcG9uZW50KHgub2xkVGFyZ2V0KSkge1xuXHRcdFx0bG9nKGBUaGlzIG1pZ2h0IGJlIGFuIGlucHV0IHByb2JsZW06ICR7eC5vbGRUYXJnZXR9YCk7XG5cdFx0fVxuXHRcdC8vIEZJWE1FOiBmaXJzdCBjaGFyYWN0ZXIgb2YgcGFnZSB0aXRsZSBhcyB3ZWxsIGFzIG5hbWVzcGFjZSBzaG91bGQgYmUgY2FzZSBpbnNlbnNpdGl2ZVxuXHRcdC8vIGVnIFtbOmNhdGVnb3J5OlgxXV0gYW5kIFtbOkNhdGVnb3J5OlgxXV0gYXJlIGVxdWl2YWxlbnRcblx0XHQvLyB0aGlzJ2xsIGJyZWFrIGlmIGNoYXJBdCgwKSBpcyBuYXN0eVxuXHRcdGNvbnN0IGNBID0gbXcudXRpbC5lc2NhcGVSZWdFeHAoeC5vbGRUYXJnZXQpO1xuXHRcdGxldCBjaHMgPSBjQS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcblx0XHRjaHMgPSBgWyR7Y2hzfSR7Y2hzLnRvTG93ZXJDYXNlKCl9XWA7XG5cdFx0bGV0IGN1cnJlbnRBcnRpY2xlUmVnZXhCaXQgPSBjaHMgKyBjQS5zbGljZSgxKTtcblx0XHRjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0ID0gY3VycmVudEFydGljbGVSZWdleEJpdFxuXHRcdFx0LnNwbGl0KC9bIF9dK3wlMjAvZylcblx0XHRcdC5qb2luKCcoPzpbXyBdK3wlMjApJylcblx0XHRcdC5zcGxpdChTdHJpbmcucmF3YFxcKGApXG5cdFx0XHQuam9pbihTdHJpbmcucmF3YCg/OiUyOHxcXCgpYClcblx0XHRcdC5zcGxpdChTdHJpbmcucmF3YFxcKWApXG5cdFx0XHQuam9pbihTdHJpbmcucmF3YCg/OiUyOXxcXCkpYCk7IC8vIHdoeSBkb2VzIHRoaXMgbmVlZCB0byBtYXRjaCBlbmNvZGVkIHN0cmluZ3MgPyBsaW5rcyBpbiB0aGUgZG9jdW1lbnQgP1xuXG5cdFx0Ly8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc3BhY2Ugc2hvdWxkIGJlIGlnbm9yZWQsIGFuZCBhbmNob3IgYml0cyBvcHRpb25hbDpcblx0XHRjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0ID0gYFxcXFxzKigke2N1cnJlbnRBcnRpY2xlUmVnZXhCaXR9KD86I1teXFxcXFtcXFxcfF0qKT8pXFxcXHMqYDtcblx0XHQvLyBlLmcuIENvbXB1dGVyIChhcmNoYWljKSAtPiBcXHMqKFtDY11vbXB1dGVyW18gXSg/OiUyNTI4fFxcKClhcmNoYWljKD86JTI1Mjh8XFwpKSlcXHMqXG5cdFx0Ly8gYXV0b2VkaXQ9c35cXFtcXFsoW0NjXWFkKVxcXVxcXX5bW0NvbXB1dGVyLWFpZGVkJTIwZGVzaWdufCQxXV1+ZztzflxcW1xcWyhbQ2NdQUQpW3xdfltbQ29tcHV0ZXItYWlkZWQlMjBkZXNpZ258fmdcblx0XHRjb25zdCB0aXRsZSA9IHgudGl0bGUgfHwgbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnNwbGl0KCdfJykuam9pbignICcpO1xuXHRcdGNvbnN0IGxrID0gdGl0bGVkV2lraUxpbmsoe1xuXHRcdFx0YXJ0aWNsZTogbmV3IFRpdGxlKHRpdGxlKSxcblx0XHRcdG5ld1dpbjogeC5uZXdXaW4sXG5cdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdHRleHQ6IHgudGV4dCxcblx0XHRcdHRpdGxlOiB4LmhpbnQsXG5cdFx0XHRjbGFzc05hbWU6ICdwb3B1cF9jaGFuZ2VfdGl0bGVfbGluaycsXG5cdFx0fSk7XG5cdFx0bGV0IGNtZCA9ICcnO1xuXHRcdGlmICh4Lm5ld1RhcmdldCkge1xuXHRcdFx0Ly8gZXNjYXBlICcmJyBhbmQgb3RoZXIgbmFzdGllc1xuXHRcdFx0Y29uc3QgdCA9IHgubmV3VGFyZ2V0O1xuXHRcdFx0Y29uc3QgcyA9IG13LnV0aWwuZXNjYXBlUmVnRXhwKHgubmV3VGFyZ2V0KTtcblx0XHRcdGlmICh4LmFsc29DaGFuZ2VMYWJlbCkge1xuXHRcdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7Y3VycmVudEFydGljbGVSZWdleEJpdH1cXFxcXVxcXFxdfltbJHt0fV1dfmc7YDtcblx0XHRcdFx0Y21kICs9IGBzflxcXFxbXFxcXFske2N1cnJlbnRBcnRpY2xlUmVnZXhCaXR9W3xdfltbJHt0fXx+ZztgO1xuXHRcdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7c31cXFxcfCR7c31cXFxcXVxcXFxdfltbJHt0fV1dfmdgO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y21kICs9IGBzflxcXFxbXFxcXFske2N1cnJlbnRBcnRpY2xlUmVnZXhCaXR9XFxcXF1cXFxcXX5bWyR7dH18JDFdXX5nO2A7XG5cdFx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0fVt8XX5bWyR7dH18fmc7YDtcblx0XHRcdFx0Y21kICs9IGBzflxcXFxbXFxcXFske3N9XFxcXHwke3N9XFxcXF1cXFxcXX5bWyR7dH1dXX5nYDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y21kICs9IGBzflxcXFxbXFxcXFske2N1cnJlbnRBcnRpY2xlUmVnZXhCaXR9XFxcXF1cXFxcXX4kMX5nO2A7XG5cdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7Y3VycmVudEFydGljbGVSZWdleEJpdH1bfF0oLio/KVxcXFxdXFxcXF1+JDJ+Z2A7XG5cdFx0fVxuXHRcdC8vIEJ1aWxkIHF1ZXJ5XG5cdFx0Y21kID0gYGF1dG9lZGl0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGNtZCl9YDtcblx0XHRjbWQgKz0gYCZhdXRvY2xpY2s9JHtlbmNvZGVVUklDb21wb25lbnQoeC5jbGlja0J1dHRvbil9JmFjdG9rZW49JHtlbmNvZGVVUklDb21wb25lbnQoYXV0b0NsaWNrVG9rZW4oKSl9YDtcblx0XHRjbWQgKz0geC5taW5vciA9PT0gbnVsbCA/ICcnIDogYCZhdXRvbWlub3I9JHtlbmNvZGVVUklDb21wb25lbnQoeC5taW5vcil9YDtcblx0XHRjbWQgKz0geC53YXRjaCA9PT0gbnVsbCA/ICcnIDogYCZhdXRvd2F0Y2g9JHtlbmNvZGVVUklDb21wb25lbnQoeC53YXRjaCl9YDtcblx0XHRjbWQgKz0gYCZhdXRvc3VtbWFyeT0ke2VuY29kZVVSSUNvbXBvbmVudCh4LnN1bW1hcnkpfWA7XG5cdFx0Y21kICs9IGAmYXV0b2ltcGw9JHtlbmNvZGVVUklDb21wb25lbnQocG9wdXBTdHJpbmcoJ2F1dG9lZGl0X3ZlcnNpb24nKSl9YDtcblx0XHRyZXR1cm4gYXBwZW5kUGFyYW1zVG9MaW5rKGxrLCBjbWQpO1xuXHR9O1xuXHRjb25zdCByZWRpckxpbmsgPSAocmVkaXJNYXRjaCwgYXJ0aWNsZSkgPT4ge1xuXHRcdC8vIE5CIHJlZGlyTWF0Y2ggaXMgaW4gd2lraVRleHRcblx0XHRsZXQgcmV0ID0gJyc7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwQXBwZW5kUmVkaXJOYXZMaW5rcycpICYmIGdldFZhbHVlT2YoJ3BvcHVwTmF2TGlua3MnKSkge1xuXHRcdFx0cmV0ICs9ICc8aHI+Jztcblx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cEZpeFJlZGlycycpICYmIGF1dG9FZGl0ICE9PSB1bmRlZmluZWQgJiYgYXV0b0VkaXQpIHtcblx0XHRcdFx0cmV0ICs9IHBvcHVwU3RyaW5nKCdSZWRpcmVjdHMgdG86IChGaXggJyk7XG5cdFx0XHRcdGxvZyhgcmVkaXJMaW5rOiBuZXdUYXJnZXQ9JHtyZWRpck1hdGNofWApO1xuXHRcdFx0XHRyZXQgKz0gYWRkUG9wdXBTaG9ydGN1dChcblx0XHRcdFx0XHRjaGFuZ2VMaW5rVGFyZ2V0TGluayh7XG5cdFx0XHRcdFx0XHRuZXdUYXJnZXQ6IHJlZGlyTWF0Y2gsXG5cdFx0XHRcdFx0XHR0ZXh0OiBwb3B1cFN0cmluZygndGFyZ2V0JyksXG5cdFx0XHRcdFx0XHRoaW50OiBwb3B1cFN0cmluZygnRml4IHRoaXMgcmVkaXJlY3QsIGNoYW5naW5nIGp1c3QgdGhlIGxpbmsgdGFyZ2V0JyksXG5cdFx0XHRcdFx0XHRzdW1tYXJ5OiBzaW1wbGVQcmludGYoZ2V0VmFsdWVPZigncG9wdXBGaXhSZWRpcnNTdW1tYXJ5JyksIFthcnRpY2xlLnRvU3RyaW5nKCksIHJlZGlyTWF0Y2hdKSxcblx0XHRcdFx0XHRcdG9sZFRhcmdldDogYXJ0aWNsZS50b1N0cmluZygpLFxuXHRcdFx0XHRcdFx0Y2xpY2tCdXR0b246IGdldFZhbHVlT2YoJ3BvcHVwUmVkaXJBdXRvQ2xpY2snKSxcblx0XHRcdFx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdFx0XHRcdFx0d2F0Y2g6IGdldFZhbHVlT2YoJ3BvcHVwV2F0Y2hSZWRpcnJlZFBhZ2VzJyksXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0J1InXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldCArPSBwb3B1cFN0cmluZygnIG9yICcpO1xuXHRcdFx0XHRyZXQgKz0gYWRkUG9wdXBTaG9ydGN1dChcblx0XHRcdFx0XHRjaGFuZ2VMaW5rVGFyZ2V0TGluayh7XG5cdFx0XHRcdFx0XHRuZXdUYXJnZXQ6IHJlZGlyTWF0Y2gsXG5cdFx0XHRcdFx0XHR0ZXh0OiBwb3B1cFN0cmluZygndGFyZ2V0ICYgbGFiZWwnKSxcblx0XHRcdFx0XHRcdGhpbnQ6IHBvcHVwU3RyaW5nKCdGaXggdGhpcyByZWRpcmVjdCwgY2hhbmdpbmcgdGhlIGxpbmsgdGFyZ2V0IGFuZCBsYWJlbCcpLFxuXHRcdFx0XHRcdFx0c3VtbWFyeTogc2ltcGxlUHJpbnRmKGdldFZhbHVlT2YoJ3BvcHVwRml4UmVkaXJzU3VtbWFyeScpLCBbYXJ0aWNsZS50b1N0cmluZygpLCByZWRpck1hdGNoXSksXG5cdFx0XHRcdFx0XHRvbGRUYXJnZXQ6IGFydGljbGUudG9TdHJpbmcoKSxcblx0XHRcdFx0XHRcdGNsaWNrQnV0dG9uOiBnZXRWYWx1ZU9mKCdwb3B1cFJlZGlyQXV0b0NsaWNrJyksXG5cdFx0XHRcdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHRcdFx0XHRcdHdhdGNoOiBnZXRWYWx1ZU9mKCdwb3B1cFdhdGNoUmVkaXJyZWRQYWdlcycpLFxuXHRcdFx0XHRcdFx0YWxzb0NoYW5nZUxhYmVsOiB0cnVlLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdCdSJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXQgKz0gcG9wdXBTdHJpbmcoJyknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldCArPSBwb3B1cFN0cmluZygnUmVkaXJlY3RzJykgKyBwb3B1cFN0cmluZygnIHRvICcpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cdFx0cmV0dXJuIGA8YnI+ICR7cG9wdXBTdHJpbmcoJ1JlZGlyZWN0cycpfSR7cG9wdXBTdHJpbmcoJyB0byAnKX0ke3RpdGxlZFdpa2lMaW5rKHtcblx0XHRcdGFydGljbGU6IG5ldyBUaXRsZSgpLmZyb21XaWtpVGV4dChyZWRpck1hdGNoKSxcblx0XHRcdGFjdGlvbjogJ3ZpZXcnIC8qIEZJWE1FOiBuZXdXaW4gKi8sXG5cdFx0XHR0ZXh0OiBzYWZlRGVjb2RlVVJJKHJlZGlyTWF0Y2gpLFxuXHRcdFx0dGl0bGU6IHBvcHVwU3RyaW5nKCdCeXBhc3MgcmVkaXJlY3QnKSxcblx0XHR9KX1gO1xuXHR9O1xuXHRjb25zdCBhcmluTGluayA9IChsKSA9PiB7XG5cdFx0aWYgKCFzYW5lTGlua0NoZWNrKGwpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKCFsLmFydGljbGUuaXNJcFVzZXIoKSB8fCAhcGcud2lraS53aWtpbWVkaWEpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCB1TiA9IGwuYXJ0aWNsZS51c2VyTmFtZSgpO1xuXHRcdHJldHVybiBnZW5lcmFsTmF2TGluayh7XG5cdFx0XHR1cmw6IGBodHRwOi8vd3MuYXJpbi5uZXQvY2dpLWJpbi93aG9pcy5wbD9xdWVyeWlucHV0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHVOKX1gLFxuXHRcdFx0bmV3V2luOiBsLm5ld1dpbixcblx0XHRcdHRpdGxlOiB0cHJpbnRmKCdMb29rIHVwICVzIGluIEFSSU4gd2hvaXMgZGF0YWJhc2UnLCBbdU5dKSxcblx0XHRcdHRleHQ6IGwudGV4dCxcblx0XHRcdG5vUG9wdXA6IDEsXG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHRvb2xEYk5hbWUgPSAoY29va2llU3R5bGUpID0+IHtcblx0XHRsZXQgcmV0ID0gbXcuY29uZmlnLmdldCgnd2dEQm5hbWUnKTtcblx0XHRpZiAoIWNvb2tpZVN0eWxlKSB7XG5cdFx0XHRyZXQgKz0gJ19wJztcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3Qgc2FuZUxpbmtDaGVjayA9IChsKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBsLmFydGljbGUgIT09IHR5cGVvZiB7fSB8fCB0eXBlb2YgbC50ZXh0ICE9PSB0eXBlb2YgJycpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cdGNvbnN0IGVkaXRDb3VudGVyTGluayA9IChsKSA9PiB7XG5cdFx0aWYgKCFzYW5lTGlua0NoZWNrKGwpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKCFwZy53aWtpLndpa2ltZWRpYSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHVOID0gbC5hcnRpY2xlLnVzZXJOYW1lKCk7XG5cdFx0Y29uc3QgdG9vbCA9IGdldFZhbHVlT2YoJ3BvcHVwRWRpdENvdW50ZXJUb29sJyk7XG5cdFx0bGV0IHVybDtcblx0XHRjb25zdCBkZWZhdWx0VG9vbFVybCA9ICcvL3Rvb2xzLndtZmxhYnMub3JnL3N1cGVyY291bnQvaW5kZXgucGhwP3VzZXI9JDEmcHJvamVjdD0kMi4kMyc7XG5cdFx0c3dpdGNoICh0b29sKSB7XG5cdFx0XHRjYXNlICdjdXN0b20nOlxuXHRcdFx0XHR1cmwgPSBzaW1wbGVQcmludGYoZ2V0VmFsdWVPZigncG9wdXBFZGl0Q291bnRlclVybCcpLCBbZW5jb2RlVVJJQ29tcG9uZW50KHVOKSwgdG9vbERiTmFtZSgpXSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRjb25zdCB0aGVXaWtpID0gcGcud2lraS5ob3N0bmFtZS5zcGxpdCgnLicpO1xuXHRcdFx0XHR1cmwgPSBzaW1wbGVQcmludGYoZGVmYXVsdFRvb2xVcmwsIFtlbmNvZGVVUklDb21wb25lbnQodU4pLCB0aGVXaWtpWzBdLCB0aGVXaWtpWzFdXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBnZW5lcmFsTmF2TGluayh7XG5cdFx0XHR1cmwsXG5cdFx0XHR0aXRsZTogdHByaW50ZignZWRpdENvdW50ZXJMaW5rSGludCcsIFt1Tl0pLFxuXHRcdFx0bmV3V2luOiBsLm5ld1dpbixcblx0XHRcdHRleHQ6IGwudGV4dCxcblx0XHRcdG5vUG9wdXA6IDEsXG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGVkaXRvckxpc3RMaW5rID0gKGwpID0+IHtcblx0XHRpZiAoIXNhbmVMaW5rQ2hlY2sobCkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBhcnRpY2xlID0gbC5hcnRpY2xlLmFydGljbGVGcm9tVGFsa1BhZ2UoKSB8fCBsLmFydGljbGU7XG5cdFx0Y29uc3QgdXJsID0gYGh0dHBzOi8veHRvb2xzLndtZmxhYnMub3JnL2FydGljbGVpbmZvLyR7ZW5jb2RlVVJJKFxuXHRcdFx0cGcud2lraS5ob3N0bmFtZVxuXHRcdCl9LyR7YXJ0aWNsZS51cmxTdHJpbmcoKX0/dXNlbGFuZz0ke213LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyl9YDtcblx0XHRyZXR1cm4gZ2VuZXJhbE5hdkxpbmsoe1xuXHRcdFx0dXJsLFxuXHRcdFx0dGl0bGU6IHRwcmludGYoJ2VkaXRvckxpc3RIaW50JywgW2FydGljbGVdKSxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHRub1BvcHVwOiAxLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBnZW5lcmFsTmF2TGluayA9IChsKSA9PiB7XG5cdFx0bC5jbGFzc05hbWUgPSBsLmNsYXNzTmFtZSA9PT0gbnVsbCA/ICdwb3B1cE5hdkxpbmsnIDogbC5jbGFzc05hbWU7XG5cdFx0cmV0dXJuIGdlbmVyYWxMaW5rKGwpO1xuXHR9O1xuXHQvLyBtYWdpYyBoaXN0b3J5IGxpbmtzXG5cdC8vXG5cdGNvbnN0IGdldEhpc3RvcnlJbmZvID0gKHdpa2lwYWdlLCB3aGF0TmV4dCkgPT4ge1xuXHRcdGxvZygnZ2V0SGlzdG9yeUluZm8nKTtcblx0XHRnZXRIaXN0b3J5KFxuXHRcdFx0d2lraXBhZ2UsXG5cdFx0XHR3aGF0TmV4dFxuXHRcdFx0XHQ/IChkKSA9PiB7XG5cdFx0XHRcdFx0XHR3aGF0TmV4dChwcm9jZXNzSGlzdG9yeShkKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ6IHByb2Nlc3NIaXN0b3J5XG5cdFx0KTtcblx0fTtcblx0Ly8gRklYTUUgZWxpbWluYXRlIHBnLmlkTnVtYmVyIC4uLiBob3c/IDotKFxuXHRjb25zdCBnZXRIaXN0b3J5ID0gKHdpa2lwYWdlLCBvbkNvbXBsZXRlKSA9PiB7XG5cdFx0bG9nKCdnZXRIaXN0b3J5Jyk7XG5cdFx0Y29uc3QgdXJsID0gYCR7cGcud2lraS5hcGl3aWtpYmFzZX0/Zm9ybWF0PWpzb24mZm9ybWF0dmVyc2lvbj0yJmFjdGlvbj1xdWVyeSZwcm9wPXJldmlzaW9ucyZ0aXRsZXM9JHtuZXcgVGl0bGUoXG5cdFx0XHR3aWtpcGFnZVxuXHRcdCkudXJsU3RyaW5nKCl9JnJ2bGltaXQ9JHtnZXRWYWx1ZU9mKCdwb3B1cEhpc3RvcnlMaW1pdCcpfWA7XG5cdFx0bG9nKGBnZXRIaXN0b3J5OiB1cmw9JHt1cmx9YCk7XG5cdFx0cmV0dXJuIHN0YXJ0RG93bmxvYWQodXJsLCBgJHtwZy5pZE51bWJlcn1oaXN0b3J5YCwgb25Db21wbGV0ZSk7XG5cdH07XG5cdGNvbnN0IHByb2Nlc3NIaXN0b3J5ID0gKGRvd25sb2FkKSA9PiB7XG5cdFx0Y29uc3QganNvYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qge3JldmlzaW9uc30gPSBhbnlDaGlsZChqc29iai5xdWVyeS5wYWdlcyk7XG5cdFx0XHRjb25zdCBlZGl0cyA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCByZXZpc2lvbiBvZiByZXZpc2lvbnMpIHtcblx0XHRcdFx0ZWRpdHMucHVzaCh7XG5cdFx0XHRcdFx0b2xkaWQ6IHJldmlzaW9uLnJldmlkLFxuXHRcdFx0XHRcdGVkaXRvcjogcmV2aXNpb24udXNlcixcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRsb2coYHByb2Nlc3NlZCAke2VkaXRzLmxlbmd0aH0gZWRpdHNgKTtcblx0XHRcdHJldHVybiBmaW5pc2hQcm9jZXNzSGlzdG9yeShlZGl0cywgbXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdGxvZygnU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCBKU09OIGJ1c2luZXNzJyk7XG5cdFx0XHRyZXR1cm4gZmluaXNoUHJvY2Vzc0hpc3RvcnkoW10pO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgZmluaXNoUHJvY2Vzc0hpc3RvcnkgPSAoZWRpdHMsIHVzZXJOYW1lKSA9PiB7XG5cdFx0Y29uc3QgaGlzdEluZm8gPSB7fTtcblx0XHRoaXN0SW5mby5lZGl0cyA9IGVkaXRzO1xuXHRcdGhpc3RJbmZvLnVzZXJOYW1lID0gdXNlck5hbWU7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGhpc3RJbmZvLm15TGFzdEVkaXQgPT09IHVuZGVmaW5lZCAmJiB1c2VyTmFtZSAmJiBlZGl0c1tpXS5lZGl0b3IgPT09IHVzZXJOYW1lKSB7XG5cdFx0XHRcdGhpc3RJbmZvLm15TGFzdEVkaXQgPSB7XG5cdFx0XHRcdFx0aW5kZXg6IGksXG5cdFx0XHRcdFx0b2xkaWQ6IGVkaXRzW2ldLm9sZGlkLFxuXHRcdFx0XHRcdHByZXZpZDogaSA9PT0gMCA/IG51bGwgOiBlZGl0c1tpIC0gMV0ub2xkaWQsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoaGlzdEluZm8uZmlyc3ROZXdFZGl0b3IgPT09IHVuZGVmaW5lZCAmJiBlZGl0c1tpXS5lZGl0b3IgIT09IGVkaXRzWzBdLmVkaXRvcikge1xuXHRcdFx0XHRoaXN0SW5mby5maXJzdE5ld0VkaXRvciA9IHtcblx0XHRcdFx0XHRpbmRleDogaSxcblx0XHRcdFx0XHRvbGRpZDogZWRpdHNbaV0ub2xkaWQsXG5cdFx0XHRcdFx0cHJldmlkOiBpID09PSAwID8gbnVsbCA6IGVkaXRzW2kgLSAxXS5vbGRpZCxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGcubWlzYy5oaXN0b3J5SW5mbz1oaXN0SW5mbztcblx0XHRyZXR1cm4gaGlzdEluZm87XG5cdH07XG5cdC8vIEVOREZJTEU6IGxpbmtzLmpzXG5cdC8vIFNUQVJURklMRTogb3B0aW9ucy5qc1xuXHQvLyBvcHRpb25zXG5cdC8vIGNoZWNrIGZvciBleGlzdGluZyB2YWx1ZSwgZWxzZSB1c2UgZGVmYXVsdFxuXHRjb25zdCBkZWZhdWx0aXplID0gKHgpID0+IHtcblx0XHRwZy5vcHRpb25beF0gPz89IHdpbmRvd1t4XSA9PT0gdW5kZWZpbmVkID8gcGcub3B0aW9uRGVmYXVsdFt4XSA6IHdpbmRvd1t4XTtcblx0fTtcblx0Y29uc3QgbmV3T3B0aW9uID0gKHgsIGRlZikgPT4ge1xuXHRcdHBnLm9wdGlvbkRlZmF1bHRbeF0gPSBkZWY7XG5cdH07XG5cdGNvbnN0IHNldERlZmF1bHQgPSAoeCwgZGVmKSA9PiB7XG5cdFx0cmV0dXJuIG5ld09wdGlvbih4LCBkZWYpO1xuXHR9O1xuXHRjb25zdCBnZXRWYWx1ZU9mID0gKHZhck5hbWUpID0+IHtcblx0XHRkZWZhdWx0aXplKHZhck5hbWUpO1xuXHRcdHJldHVybiBwZy5vcHRpb25bdmFyTmFtZV07XG5cdH07XG5cdGNvbnN0IHNldE9wdGlvbnMgPSAoKSA9PiB7XG5cdFx0Ly8gdXNlci1zZXR0YWJsZSBwYXJhbWV0ZXJzIGFuZCBkZWZhdWx0c1xuXHRcdGxldCB1c2VySXNTeXNvcCA9IGZhbHNlO1xuXHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKSkge1xuXHRcdFx0Zm9yIChsZXQgZyA9IDA7IGcgPCBtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKS5sZW5ndGg7ICsrZykge1xuXHRcdFx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJylbZ10gPT09ICdzeXNvcCcpIHtcblx0XHRcdFx0XHR1c2VySXNTeXNvcCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpW2ddID09PSAnc3Rld2FyZCcpIHtcblx0XHRcdFx0XHR1c2VySXNTeXNvcCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gQmFzaWMgb3B0aW9uc1xuXHRcdG5ld09wdGlvbigncG9wdXBEZWxheScsIDAuNSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEhpZGVEZWxheScsIDAuNSk7XG5cdFx0bmV3T3B0aW9uKCdzaW1wbGVQb3B1cHMnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFN0cnVjdHVyZScsICdzaG9ydG1lbnVzJyk7IC8vIHNlZSBsYXRlciAtIGRlZmF1bHQgZm9yIHBvcHVwU3RydWN0dXJlIGlzICdvcmlnaW5hbCcgaWYgc2ltcGxlUG9wdXBzIGlzIHRydWVcblx0XHRuZXdPcHRpb24oJ3BvcHVwQWN0aW9uc01lbnUnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwU2V0dXBNZW51JywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEFkbWluTGlua3MnLCB1c2VySXNTeXNvcCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFNob3J0Y3V0S2V5cycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSGlzdG9yaWNhbExpbmtzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE9ubHlBcnRpY2xlTGlua3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3JlbW92ZVRpdGxlcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBNYXhXaWR0aCcsIDM1MCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFNpbXBsaWZ5TWFpbkxpbmsnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwQXBwZW5kUmVkaXJOYXZMaW5rcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBUb2NMaW5rcycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwU3VicG9wdXBzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERyYWdIYW5kbGUnLCBmYWxzZSAvKiAncG9wdXBUb3BMaW5rcycgKi8pO1xuXHRcdG5ld09wdGlvbigncG9wdXBMYXp5UHJldmlld3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTGF6eURvd25sb2FkcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBBbGxEYWJzU3R1YnMnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERlYnVnZ2luZycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwQWN0aXZlTmF2bGlua3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTW9kaWZpZXInLCBmYWxzZSk7IC8vIGN0cmwsIHNoaWZ0LCBhbHQgb3IgbWV0YVxuXHRcdG5ld09wdGlvbigncG9wdXBNb2RpZmllckFjdGlvbicsICdlbmFibGUnKTsgLy8gb3IgJ2Rpc2FibGUnXG5cdFx0bmV3T3B0aW9uKCdwb3B1cERyYWdnYWJsZScsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZXZpZXcnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cExvY2FsZScsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGF0ZVRpbWVGb3JtYXR0ZXJPcHRpb25zJywge1xuXHRcdFx0eWVhcjogJ251bWVyaWMnLFxuXHRcdFx0bW9udGg6ICdsb25nJyxcblx0XHRcdGRheTogJ251bWVyaWMnLFxuXHRcdFx0aG91cjEyOiBmYWxzZSxcblx0XHRcdGhvdXI6ICcyLWRpZ2l0Jyxcblx0XHRcdG1pbnV0ZTogJzItZGlnaXQnLFxuXHRcdFx0c2Vjb25kOiAnMi1kaWdpdCcsXG5cdFx0fSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERhdGVGb3JtYXR0ZXJPcHRpb25zJywge1xuXHRcdFx0eWVhcjogJ251bWVyaWMnLFxuXHRcdFx0bW9udGg6ICdsb25nJyxcblx0XHRcdGRheTogJ251bWVyaWMnLFxuXHRcdH0pO1xuXHRcdG5ld09wdGlvbigncG9wdXBUaW1lRm9ybWF0dGVyT3B0aW9ucycsIHtcblx0XHRcdGhvdXIxMjogZmFsc2UsXG5cdFx0XHRob3VyOiAnMi1kaWdpdCcsXG5cdFx0XHRtaW51dGU6ICcyLWRpZ2l0Jyxcblx0XHRcdHNlY29uZDogJzItZGlnaXQnLFxuXHRcdH0pO1xuXHRcdC8vIGltYWdlc1xuXHRcdG5ld09wdGlvbigncG9wdXBJbWFnZXMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ2ltYWdlUG9wdXBzRm9ySW1hZ2VzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE5ldmVyR2V0VGh1bWJzJywgZmFsc2UpO1xuXHRcdC8vIG5ld09wdGlvbigncG9wdXBJbWFnZXNUb2dnbGVTaXplJywgICAgICAgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFRodW1iQWN0aW9uJywgJ2ltYWdlcGFnZScpOyAvLyAnc2l6ZXRvZ2dsZScpO1xuXHRcdG5ld09wdGlvbigncG9wdXBJbWFnZVNpemUnLCA2MCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEltYWdlU2l6ZUxhcmdlJywgMjAwKTtcblx0XHQvLyByZWRpcnMsIGRhYnMsIHJldmVyc2lvblxuXHRcdG5ld09wdGlvbigncG9wdXBGaXhSZWRpcnMnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJlZGlyQXV0b0NsaWNrJywgJ3dwRGlmZicpO1xuXHRcdG5ld09wdGlvbigncG9wdXBGaXhEYWJzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEYWJzQXV0b0NsaWNrJywgJ3dwRGlmZicpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZXZlcnRTdW1tYXJ5UHJvbXB0JywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBNaW5vclJldmVydHMnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJlZGxpbmtSZW1vdmFsJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZWRsaW5rQXV0b0NsaWNrJywgJ3dwRGlmZicpO1xuXHRcdG5ld09wdGlvbigncG9wdXBXYXRjaERpc2FtYmlnZ2VkUGFnZXMnLCBudWxsKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwV2F0Y2hSZWRpcnJlZFBhZ2VzJywgbnVsbCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERhYldpa3Rpb25hcnknLCAnbGFzdCcpO1xuXHRcdC8vIG5hdmxpbmtzXG5cdFx0bmV3T3B0aW9uKCdwb3B1cE5hdkxpbmtzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE5hdkxpbmtTZXBhcmF0b3InLCAnICZzZG90OyAnKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTGFzdEVkaXRMaW5rJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEVkaXRDb3VudGVyVG9vbCcsICdzdXBlcmNvdW50Jyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEVkaXRDb3VudGVyVXJsJywgJycpO1xuXHRcdC8vIHByZXZpZXdzIGV0Y1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3cycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBTdW1tYXJ5RGF0YScsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBNYXhQcmV2aWV3U2VudGVuY2VzJywgNSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE1heFByZXZpZXdDaGFyYWN0ZXJzJywgNjAwKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTGFzdE1vZGlmaWVkJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdLaWxsVGVtcGxhdGVzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdSYXdUZW1wbGF0ZXMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld0ZpcnN0UGFyT25seScsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3Q3V0SGVhZGluZ3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld0J1dHRvbicsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld0J1dHRvbkV2ZW50JywgJ2NsaWNrJyk7XG5cdFx0Ly8gZGlmZnNcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld0RpZmZzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERpZmZNYXhMaW5lcycsIDEwMCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERpZmZDb250ZXh0TGluZXMnLCAyKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGlmZkNvbnRleHRDaGFyYWN0ZXJzJywgNDApO1xuXHRcdG5ld09wdGlvbigncG9wdXBEaWZmRGF0ZXMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGlmZkRhdGVQcmludGVyJywgJ3RvTG9jYWxlU3RyaW5nJyk7IC8vIG5vIGxvbmdlciBpbiB1c2VcblxuXHRcdC8vIGVkaXQgc3VtbWFyaWVzLiBHb2QsIHRoZXNlIGFyZSB1Z2x5LlxuXHRcdG5ld09wdGlvbigncG9wdXBSZXZpZXdlZFN1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwUmV2aWV3ZWRTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBGaXhEYWJzU3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBGaXhEYWJzU3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRXh0ZW5kZWRSZXZlcnRTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cEV4dGVuZGVkUmV2ZXJ0U3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmV2ZXJ0U3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBSZXZlcnRTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUXVlcmllZFJldmVydFN1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwUXVlcmllZFJldmVydFN1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFF1ZXJpZWRSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBRdWVyaWVkUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEZpeFJlZGlyc1N1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwRml4UmVkaXJzU3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmVkbGlua1N1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwUmVkbGlua1N1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJtRGFiTGlua1N1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwUm1EYWJMaW5rU3VtbWFyeScpKTtcblx0XHQvLyBtaXNjXG5cdFx0bmV3T3B0aW9uKCdwb3B1cEhpc3RvcnlMaW1pdCcsIDUwKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRmlsdGVycycsIFtcblx0XHRcdHBvcHVwRmlsdGVyU3R1YkRldGVjdCxcblx0XHRcdHBvcHVwRmlsdGVyRGlzYW1iaWdEZXRlY3QsXG5cdFx0XHRwb3B1cEZpbHRlclBhZ2VTaXplLFxuXHRcdFx0cG9wdXBGaWx0ZXJDb3VudExpbmtzLFxuXHRcdFx0cG9wdXBGaWx0ZXJDb3VudEltYWdlcyxcblx0XHRcdHBvcHVwRmlsdGVyQ291bnRDYXRlZ29yaWVzLFxuXHRcdFx0cG9wdXBGaWx0ZXJMYXN0TW9kaWZpZWQsXG5cdFx0XSk7XG5cdFx0bmV3T3B0aW9uKCdleHRyYVBvcHVwRmlsdGVycycsIFtdKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwT25FZGl0U2VsZWN0aW9uJywgJ2N1cnNvcicpO1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3SGlzdG9yeScsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBJbWFnZUxpbmtzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cENhdGVnb3J5TWVtYmVycycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBVc2VySW5mbycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBIaXN0b3J5UHJldmlld0xpbWl0JywgMjUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBDb250cmlic1ByZXZpZXdMaW1pdCcsIDI1KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmV2RGVsVXJsJywgJy8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dpa2lwZWRpYTpSZXZpc2lvbl9kZWxldGlvbicpO1xuXHRcdG5ld09wdGlvbigncG9wdXBTaG93R2VuZGVyJywgdHJ1ZSk7XG5cdFx0Ly8gbmV3IHdpbmRvd3Ncblx0XHRuZXdPcHRpb24oJ3BvcHVwTmV3V2luZG93cycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTGlua3NOZXdXaW5kb3cnLCB7bGFzdENvbnRyaWI6IHRydWUsIHNpbmNlTWU6IHRydWV9KTtcblx0XHQvLyByZWdleHBzXG5cdFx0bmV3T3B0aW9uKFxuXHRcdFx0J3BvcHVwRGFiUmVnZXhwJyxcblx0XHRcdFN0cmluZy5yYXdgXFx7XFx7XFxzKihkKGFifGlzYW1iKGlnKHVhdGlvbik/KT8pfCgoKGdlb3xobnxyb2FkP3xzY2hvb2x8bnVtYmVyKWRpcyl8WzIzNF1bbGNdW2Fjd118KHJvYWR8c2hpcClpbmRleCkpXFxzKihcXHxbXn1dKik/XFx9XFx9fGlzIGEgLipkaXNhbWJpZ3VhdGlvbi4qcGFnZWBcblx0XHQpO1xuXHRcdG5ld09wdGlvbigncG9wdXBBbmNob3JSZWdleHAnLCAnYW5jaG9ycz8nKTsgLy8gaG93IHRvIGlkZW50aWZ5IGFuIGFuY2hvcnMgdGVtcGxhdGVcblx0XHRuZXdPcHRpb24oJ3BvcHVwU3R1YlJlZ2V4cCcsICcoc2VjdCk/c3R1Ylt9XVt9XXxUaGlzIC4qLXJlbGF0ZWQgYXJ0aWNsZSBpcyBhIC4qc3R1YicpO1xuXHRcdG5ld09wdGlvbigncG9wdXBJbWFnZVZhcnNSZWdleHAnLCAnaW1hZ2V8aW1hZ2VfKD86ZmlsZXxza3lsaW5lfG5hbWV8ZmxhZ3xzZWFsKXxjb3ZlcnxiYWRnZXxsb2dvJyk7XG5cdH07XG5cdC8vIEVOREZJTEU6IG9wdGlvbnMuanNcblx0Ly8gU1RBUlRGSUxFOiBzdHJpbmdzLmpzXG5cdC8vIFRyYW5zbGF0YWJsZSBzdHJpbmdzXG5cdC8vXG5cdC8vIFNlZSBpbnN0cnVjdGlvbnMgYXRcblx0Ly8ge0BsaW5rIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwcy9UcmFuc2xhdGlvbn1cblx0cGcuc3RyaW5nID0ge1xuXHRcdC8vIHN1bW1hcnkgZGF0YSwgc2VhcmNoaW5nIGV0Yy5cblx0XHRhcnRpY2xlOiAnYXJ0aWNsZScsXG5cdFx0Y2F0ZWdvcnk6ICdjYXRlZ29yeScsXG5cdFx0Y2F0ZWdvcmllczogJ2NhdGVnb3JpZXMnLFxuXHRcdGltYWdlOiAnaW1hZ2UnLFxuXHRcdGltYWdlczogJ2ltYWdlcycsXG5cdFx0c3R1YjogJ3N0dWInLFxuXHRcdCdzZWN0aW9uIHN0dWInOiAnc2VjdGlvbiBzdHViJyxcblx0XHQnRW1wdHkgcGFnZSc6ICdFbXB0eSBwYWdlJyxcblx0XHRrQjogJ2tCJyxcblx0XHRieXRlczogJ2J5dGVzJyxcblx0XHRkYXk6ICdkYXknLFxuXHRcdGRheXM6ICdkYXlzJyxcblx0XHRob3VyOiAnaG91cicsXG5cdFx0aG91cnM6ICdob3VycycsXG5cdFx0bWludXRlOiAnbWludXRlJyxcblx0XHRtaW51dGVzOiAnbWludXRlcycsXG5cdFx0c2Vjb25kOiAnc2Vjb25kJyxcblx0XHRzZWNvbmRzOiAnc2Vjb25kcycsXG5cdFx0d2VlazogJ3dlZWsnLFxuXHRcdHdlZWtzOiAnd2Vla3MnLFxuXHRcdHNlYXJjaDogJ3NlYXJjaCcsXG5cdFx0U2VhcmNoSGludDogJ0ZpbmQgRW5nbGlzaCBXaWtpcGVkaWEgYXJ0aWNsZXMgY29udGFpbmluZyAlcycsXG5cdFx0d2ViOiAnd2ViJyxcblx0XHRnbG9iYWw6ICdnbG9iYWwnLFxuXHRcdC8vIGFydGljbGUtcmVsYXRlZCBhY3Rpb25zIGFuZCBpbmZvXG5cdFx0Ly8gKHNvbWUgYWN0aW9ucyBhbHNvIGFwcGx5IHRvIHVzZXIgcGFnZXMpXG5cdFx0YWN0aW9uczogJ2FjdGlvbnMnLFxuXHRcdHBvcHVwc01lbnU6ICdwb3B1cHMnLFxuXHRcdHRvZ2dsZVByZXZpZXdzSGludDogJ1RvZ2dsZSBwcmV2aWV3IGdlbmVyYXRpb24gaW4gcG9wdXBzIG9uIHRoaXMgcGFnZScsXG5cdFx0J2VuYWJsZSBwcmV2aWV3cyc6ICdlbmFibGUgcHJldmlld3MnLFxuXHRcdCdkaXNhYmxlIHByZXZpZXdzJzogJ2Rpc2FibGUgcHJldmlld3MnLFxuXHRcdCd0b2dnbGUgcHJldmlld3MnOiAndG9nZ2xlIHByZXZpZXdzJyxcblx0XHQnc2hvdyBwcmV2aWV3JzogJ3Nob3cgcHJldmlldycsXG5cdFx0cmVzZXQ6ICdyZXNldCcsXG5cdFx0J21vcmUuLi4nOiAnbW9yZS4uLicsXG5cdFx0ZGlzYWJsZTogJ2Rpc2FibGUgcG9wdXBzJyxcblx0XHRkaXNhYmxlUG9wdXBzSGludDogJ0Rpc2FibGUgcG9wdXBzIG9uIHRoaXMgcGFnZS4gUmVsb2FkIHBhZ2UgdG8gcmUtZW5hYmxlLicsXG5cdFx0aGlzdG9yeWZlZWRIaW50OiAnUlNTIGZlZWQgb2YgcmVjZW50IGNoYW5nZXMgdG8gdGhpcyBwYWdlJyxcblx0XHRwdXJnZVBvcHVwc0hpbnQ6ICdSZXNldCBwb3B1cHMsIGNsZWFyaW5nIGFsbCBjYWNoZWQgcG9wdXAgZGF0YS4nLFxuXHRcdFBvcHVwc0hpbnQ6ICdSZXNldCBwb3B1cHMsIGNsZWFyaW5nIGFsbCBjYWNoZWQgcG9wdXAgZGF0YS4nLFxuXHRcdHNwYWNlYmFyOiAnc3BhY2UnLFxuXHRcdHZpZXc6ICd2aWV3Jyxcblx0XHQndmlldyBhcnRpY2xlJzogJ3ZpZXcgYXJ0aWNsZScsXG5cdFx0dmlld0hpbnQ6ICdHbyB0byAlcycsXG5cdFx0dGFsazogJ3RhbGsnLFxuXHRcdCd0YWxrIHBhZ2UnOiAndGFsayBwYWdlJyxcblx0XHQndGhpcyZuYnNwO3JldmlzaW9uJzogJ3RoaXMmbmJzcDtyZXZpc2lvbicsXG5cdFx0J3JldmlzaW9uICVzIG9mICVzJzogJ3JldmlzaW9uICVzIG9mICVzJyxcblx0XHQnUmV2aXNpb24gJXMgb2YgJXMnOiAnUmV2aXNpb24gJXMgb2YgJXMnLFxuXHRcdCd0aGUgcmV2aXNpb24gcHJpb3IgdG8gcmV2aXNpb24gJXMgb2YgJXMnOiAndGhlIHJldmlzaW9uIHByaW9yIHRvIHJldmlzaW9uICVzIG9mICVzJyxcblx0XHQnVG9nZ2xlIGltYWdlIHNpemUnOiAnQ2xpY2sgdG8gdG9nZ2xlIGltYWdlIHNpemUnLFxuXHRcdGRlbDogJ2RlbCcsXG5cdFx0ZGVsZXRlOiAnZGVsZXRlJyxcblx0XHRkZWxldGVIaW50OiAnRGVsZXRlICVzJyxcblx0XHR1bmRlbGV0ZVNob3J0OiAndW4nLFxuXHRcdFVuZGVsZXRlSGludDogJ1Nob3cgdGhlIGRlbGV0aW9uIGhpc3RvcnkgZm9yICVzJyxcblx0XHRwcm90ZWN0OiAncHJvdGVjdCcsXG5cdFx0cHJvdGVjdEhpbnQ6ICdSZXN0cmljdCBlZGl0aW5nIHJpZ2h0cyB0byAlcycsXG5cdFx0dW5wcm90ZWN0U2hvcnQ6ICd1bicsXG5cdFx0dW5wcm90ZWN0SGludDogJ0FsbG93ICVzIHRvIGJlIGVkaXRlZCBieSBhbnlvbmUgYWdhaW4nLFxuXHRcdCdzZW5kIHRoYW5rcyc6ICdzZW5kIHRoYW5rcycsXG5cdFx0VGhhbmtzSGludDogJ1NlbmQgYSB0aGFuayB5b3Ugbm90aWZpY2F0aW9uIHRvIHRoaXMgdXNlcicsXG5cdFx0bW92ZTogJ21vdmUnLFxuXHRcdCdtb3ZlIHBhZ2UnOiAnbW92ZSBwYWdlJyxcblx0XHRNb3ZlcGFnZUhpbnQ6ICdDaGFuZ2UgdGhlIHRpdGxlIG9mICVzJyxcblx0XHRlZGl0OiAnZWRpdCcsXG5cdFx0J2VkaXQgYXJ0aWNsZSc6ICdlZGl0IGFydGljbGUnLFxuXHRcdGVkaXRIaW50OiAnQ2hhbmdlIHRoZSBjb250ZW50IG9mICVzJyxcblx0XHQnZWRpdCB0YWxrJzogJ2VkaXQgdGFsaycsXG5cdFx0bmV3OiAnbmV3Jyxcblx0XHQnbmV3IHRvcGljJzogJ25ldyB0b3BpYycsXG5cdFx0bmV3U2VjdGlvbkhpbnQ6ICdTdGFydCBhIG5ldyBzZWN0aW9uIG9uICVzJyxcblx0XHQnbnVsbCBlZGl0JzogJ251bGwgZWRpdCcsXG5cdFx0bnVsbEVkaXRIaW50OiAnU3VibWl0IGFuIGVkaXQgdG8gJXMsIG1ha2luZyBubyBjaGFuZ2VzICcsXG5cdFx0aGlzdDogJ2hpc3QnLFxuXHRcdGhpc3Rvcnk6ICdoaXN0b3J5Jyxcblx0XHRoaXN0b3J5SGludDogJ0xpc3QgdGhlIGNoYW5nZXMgbWFkZSB0byAlcycsXG5cdFx0bGFzdDogJ3ByZXYnLFxuXHRcdGxhc3RFZGl0OiAnbGFzdEVkaXQnLFxuXHRcdCdtYXJrIHBhdHJvbGxlZCc6ICdtYXJrIHBhdHJvbGxlZCcsXG5cdFx0bWFya3BhdHJvbGxlZEhpbnQ6ICdNYXJrIHRoaXMgZWRpdCBhcyBwYXRyb2xsZWQnLFxuXHRcdCdDb3VsZCBub3QgbWFya2VkIHRoaXMgZWRpdCBhcyBwYXRyb2xsZWQnOiAnQ291bGQgbm90IG1hcmtlZCB0aGlzIGVkaXQgYXMgcGF0cm9sbGVkJyxcblx0XHQnc2hvdyBsYXN0IGVkaXQnOiAnbW9zdCByZWNlbnQgZWRpdCcsXG5cdFx0J1Nob3cgdGhlIGxhc3QgZWRpdCc6ICdTaG93IHRoZSBlZmZlY3RzIG9mIHRoZSBtb3N0IHJlY2VudCBjaGFuZ2UnLFxuXHRcdGxhc3RDb250cmliOiAnbGFzdENvbnRyaWInLFxuXHRcdCdsYXN0IHNldCBvZiBlZGl0cyc6ICdsYXRlc3QgZWRpdHMnLFxuXHRcdGxhc3RDb250cmliSGludDogJ1Nob3cgdGhlIG5ldCBlZmZlY3Qgb2YgY2hhbmdlcyBtYWRlIGJ5IHRoZSBsYXN0IGVkaXRvcicsXG5cdFx0Y3VyOiAnY3VyJyxcblx0XHRkaWZmQ3VyOiAnZGlmZkN1cicsXG5cdFx0J1Nob3cgY2hhbmdlcyBzaW5jZSByZXZpc2lvbiAlcyc6ICdTaG93IGNoYW5nZXMgc2luY2UgcmV2aXNpb24gJXMnLFxuXHRcdCclcyBvbGQnOiAnJXMgb2xkJyxcblx0XHRvbGRFZGl0OiAnb2xkRWRpdCcsXG5cdFx0cHVyZ2U6ICdwdXJnZScsXG5cdFx0cHVyZ2VIaW50OiAnRGVtYW5kIGEgZnJlc2ggY29weSBvZiAlcycsXG5cdFx0cmF3OiAnc291cmNlJyxcblx0XHRyYXdIaW50OiAnRG93bmxvYWQgdGhlIHNvdXJjZSBvZiAlcycsXG5cdFx0cmVuZGVyOiAnc2ltcGxlJyxcblx0XHRyZW5kZXJIaW50OiAnU2hvdyBhIHBsYWluIEhUTUwgdmVyc2lvbiBvZiAlcycsXG5cdFx0J1Nob3cgdGhlIGVkaXQgbWFkZSB0byBnZXQgcmV2aXNpb24nOiAnU2hvdyB0aGUgZWRpdCBtYWRlIHRvIGdldCByZXZpc2lvbicsXG5cdFx0c2luY2VNZTogJ3NpbmNlTWUnLFxuXHRcdCdjaGFuZ2VzIHNpbmNlIG1pbmUnOiAnZGlmZiBteSBlZGl0Jyxcblx0XHRzaW5jZU1lSGludDogJ1Nob3cgY2hhbmdlcyBzaW5jZSBteSBsYXN0IGVkaXQnLFxuXHRcdFwiQ291bGRuJ3QgZmluZCBhbiBlZGl0IGJ5ICVzXFxuaW4gdGhlIGxhc3QgJXMgZWRpdHMgdG9cXG4lc1wiOlxuXHRcdFx0XCJDb3VsZG4ndCBmaW5kIGFuIGVkaXQgYnkgJXNcXG5pbiB0aGUgbGFzdCAlcyBlZGl0cyB0b1xcbiVzXCIsXG5cdFx0ZWRzOiAnZWRzJyxcblx0XHRlZGl0b3JzOiAnZWRpdG9ycycsXG5cdFx0ZWRpdG9yTGlzdEhpbnQ6ICdMaXN0IHRoZSB1c2VycyB3aG8gaGF2ZSBlZGl0ZWQgJXMnLFxuXHRcdHJlbGF0ZWQ6ICdyZWxhdGVkJyxcblx0XHRyZWxhdGVkQ2hhbmdlczogJ3JlbGF0ZWRDaGFuZ2VzJyxcblx0XHQncmVsYXRlZCBjaGFuZ2VzJzogJ3JlbGF0ZWQgY2hhbmdlcycsXG5cdFx0UmVjZW50Y2hhbmdlc2xpbmtlZEhpbnQ6ICdTaG93IGNoYW5nZXMgaW4gYXJ0aWNsZXMgcmVsYXRlZCB0byAlcycsXG5cdFx0ZWRpdE9sZDogJ2VkaXRPbGQnLFxuXHRcdHJ2OiAncnYnLFxuXHRcdHJldmVydDogJ3JldmVydCcsXG5cdFx0cmV2ZXJ0SGludDogJ1JldmVydCB0byAlcycsXG5cdFx0ZGVmYXVsdHBvcHVwUmV2aWV3ZWRTdW1tYXJ5OlxuXHRcdFx0J0FjY2VwdGVkIGJ5IHJldmlld2luZyB0aGUgW1tTcGVjaWFsOmRpZmYvJXMvJXN8ZGlmZmVyZW5jZV1dIGJldHdlZW4gdGhpcyB2ZXJzaW9uIGFuZCBwcmV2aW91c2x5IGFjY2VwdGVkIHZlcnNpb24gdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwUmVkbGlua1N1bW1hcnk6XG5cdFx0XHQnUmVtb3ZpbmcgbGluayB0byBlbXB0eSBwYWdlIFtbJXNdXSB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBGaXhEYWJzU3VtbWFyeTpcblx0XHRcdCdEaXNhbWJpZ3VhdGUgW1slc11dIHRvIFtbJXNdXSB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBGaXhSZWRpcnNTdW1tYXJ5OlxuXHRcdFx0J1JlZGlyZWN0IGJ5cGFzcyBmcm9tIFtbJXNdXSB0byBbWyVzXV0gdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwRXh0ZW5kZWRSZXZlcnRTdW1tYXJ5OlxuXHRcdFx0J1JldmVydCB0byByZXZpc2lvbiBkYXRlZCAlcyBieSAlcywgb2xkaWQgJXMgdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnk6XG5cdFx0XHQnUmV2ZXJ0IHRvIHRoZSByZXZpc2lvbiBwcmlvciB0byByZXZpc2lvbiAlcyB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBSZXZlcnRTdW1tYXJ5OiAnUmV2ZXJ0IHRvIHJldmlzaW9uICVzIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeTpcblx0XHRcdCdSZXZlcnQgdG8gdGhlIHJldmlzaW9uIHByaW9yIHRvIHJldmlzaW9uICQxIGRhdGVkICQyIGJ5ICQzIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5OlxuXHRcdFx0J1JldmVydCB0byByZXZpc2lvbiAkMSBkYXRlZCAkMiBieSAkMyB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBSbURhYkxpbmtTdW1tYXJ5OlxuXHRcdFx0J1JlbW92ZSBsaW5rIHRvIGRhYiBwYWdlIFtbJXNdXSB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRSZWRpcmVjdHM6ICdSZWRpcmVjdHMnLFxuXHRcdCcgdG8gJzogJyB0byAnLFxuXHRcdCdCeXBhc3MgcmVkaXJlY3QnOiAnQnlwYXNzIHJlZGlyZWN0Jyxcblx0XHQnRml4IHRoaXMgcmVkaXJlY3QnOiAnRml4IHRoaXMgcmVkaXJlY3QnLFxuXHRcdGRpc2FtYmlnOiAnZGlzYW1iaWcnLFxuXHRcdGRpc2FtYmlnSGludDogJ0Rpc2FtYmlndWF0ZSB0aGlzIGxpbmsgdG8gW1slc11dJyxcblx0XHQnQ2xpY2sgdG8gZGlzYW1iaWd1YXRlIHRoaXMgbGluayB0bzonOiAnQ2xpY2sgdG8gZGlzYW1iaWd1YXRlIHRoaXMgbGluayB0bzonLFxuXHRcdCdyZW1vdmUgdGhpcyBsaW5rJzogJ3JlbW92ZSB0aGlzIGxpbmsnLFxuXHRcdCdyZW1vdmUgYWxsIGxpbmtzIHRvIHRoaXMgcGFnZSBmcm9tIHRoaXMgYXJ0aWNsZSc6ICdyZW1vdmUgYWxsIGxpbmtzIHRvIHRoaXMgcGFnZSBmcm9tIHRoaXMgYXJ0aWNsZScsXG5cdFx0J3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBkaXNhbWJpZyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJzpcblx0XHRcdCdyZW1vdmUgYWxsIGxpbmtzIHRvIHRoaXMgZGlzYW1iaWcgcGFnZSBmcm9tIHRoaXMgYXJ0aWNsZScsXG5cdFx0bWFpbmxpbms6ICdtYWlubGluaycsXG5cdFx0d2lraUxpbms6ICd3aWtpTGluaycsXG5cdFx0d2lraUxpbmtzOiAnd2lraUxpbmtzJyxcblx0XHQnbGlua3MgaGVyZSc6ICdsaW5rcyBoZXJlJyxcblx0XHR3aGF0TGlua3NIZXJlOiAnd2hhdExpbmtzSGVyZScsXG5cdFx0J3doYXQgbGlua3MgaGVyZSc6ICd3aGF0IGxpbmtzIGhlcmUnLFxuXHRcdFdoYXRsaW5rc2hlcmVIaW50OiAnTGlzdCB0aGUgcGFnZXMgdGhhdCBhcmUgaHlwZXJsaW5rZWQgdG8gJXMnLFxuXHRcdHVud2F0Y2hTaG9ydDogJ3VuJyxcblx0XHR3YXRjaFRoaW5neTogJ3dhdGNoJyxcblx0XHR3YXRjaEhpbnQ6ICdBZGQgJXMgdG8gbXkgd2F0Y2hsaXN0Jyxcblx0XHR1bndhdGNoSGludDogJ1JlbW92ZSAlcyBmcm9tIG15IHdhdGNobGlzdCcsXG5cdFx0J09ubHkgZm91bmQgb25lIGVkaXRvcjogJXMgbWFkZSAlcyBlZGl0cyc6ICdPbmx5IGZvdW5kIG9uZSBlZGl0b3I6ICVzIG1hZGUgJXMgZWRpdHMnLFxuXHRcdCclcyBzZWVtcyB0byBiZSB0aGUgbGFzdCBlZGl0b3IgdG8gdGhlIHBhZ2UgJXMnOiAnJXMgc2VlbXMgdG8gYmUgdGhlIGxhc3QgZWRpdG9yIHRvIHRoZSBwYWdlICVzJyxcblx0XHRyc3M6ICdyc3MnLFxuXHRcdC8vIGRpZmYgcHJldmlld3Ncblx0XHQnRGlmZiB0cnVuY2F0ZWQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMnOiAnRGlmZiB0cnVuY2F0ZWQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMnLFxuXHRcdCdPbGQgcmV2aXNpb24nOiAnT2xkIHJldmlzaW9uJyxcblx0XHQnTmV3IHJldmlzaW9uJzogJ05ldyByZXZpc2lvbicsXG5cdFx0J1NvbWV0aGluZyB3ZW50IHdyb25nIDotKCc6ICdTb21ldGhpbmcgd2VudCB3cm9uZyA6LSgnLFxuXHRcdCdFbXB0eSByZXZpc2lvbiwgbWF5YmUgbm9uLWV4aXN0ZW50JzogJ0VtcHR5IHJldmlzaW9uLCBtYXliZSBub24tZXhpc3RlbnQnLFxuXHRcdCdVbmtub3duIGRhdGUnOiAnVW5rbm93biBkYXRlJyxcblx0XHQvLyBvdGhlciBzcGVjaWFsIHByZXZpZXdzXG5cdFx0J0VtcHR5IGNhdGVnb3J5JzogJ0VtcHR5IGNhdGVnb3J5Jyxcblx0XHQnQ2F0ZWdvcnkgbWVtYmVycyAoJXMgc2hvd24pJzogJ0NhdGVnb3J5IG1lbWJlcnMgKCVzIHNob3duKScsXG5cdFx0J05vIGltYWdlIGxpbmtzIGZvdW5kJzogJ05vIGltYWdlIGxpbmtzIGZvdW5kJyxcblx0XHQnRmlsZSBsaW5rcyc6ICdGaWxlIGxpbmtzJyxcblx0XHQnTm8gaW1hZ2UgZm91bmQnOiAnTm8gaW1hZ2UgZm91bmQnLFxuXHRcdCdJbWFnZSBmcm9tIENvbW1vbnMnOiAnSW1hZ2UgZnJvbSBDb21tb25zJyxcblx0XHQnRGVzY3JpcHRpb24gcGFnZSc6ICdEZXNjcmlwdGlvbiBwYWdlJyxcblx0XHQnQWx0IHRleHQ6JzogJ0FsdCB0ZXh0OicsXG5cdFx0cmV2ZGVsOiAnSGlkZGVuIHJldmlzaW9uJyxcblx0XHQvLyB1c2VyLXJlbGF0ZWQgYWN0aW9ucyBhbmQgaW5mb1xuXHRcdHVzZXI6ICd1c2VyJyxcblx0XHQndXNlciZuYnNwO3BhZ2UnOiAndXNlciZuYnNwO3BhZ2UnLFxuXHRcdCd1c2VyIHRhbGsnOiAndXNlciB0YWxrJyxcblx0XHQnZWRpdCB1c2VyIHRhbGsnOiAnZWRpdCB1c2VyIHRhbGsnLFxuXHRcdCdsZWF2ZSBjb21tZW50JzogJ2xlYXZlIGNvbW1lbnQnLFxuXHRcdGVtYWlsOiAnZW1haWwnLFxuXHRcdCdlbWFpbCB1c2VyJzogJ2VtYWlsIHVzZXInLFxuXHRcdEVtYWlsdXNlckhpbnQ6ICdTZW5kIGFuIGVtYWlsIHRvICVzJyxcblx0XHRzcGFjZTogJ3NwYWNlJyxcblx0XHRQcmVmaXhJbmRleEhpbnQ6ICdTaG93IHBhZ2VzIGluIHRoZSB1c2Vyc3BhY2Ugb2YgJXMnLFxuXHRcdGNvdW50OiAnY291bnQnLFxuXHRcdCdlZGl0IGNvdW50ZXInOiAnZWRpdCBjb3VudGVyJyxcblx0XHRlZGl0Q291bnRlckxpbmtIaW50OiAnQ291bnQgdGhlIGNvbnRyaWJ1dGlvbnMgbWFkZSBieSAlcycsXG5cdFx0Y29udHJpYnM6ICdjb250cmlicycsXG5cdFx0Y29udHJpYnV0aW9uczogJ2NvbnRyaWJ1dGlvbnMnLFxuXHRcdGRlbGV0ZWRDb250cmliczogJ2RlbGV0ZWQgY29udHJpYnV0aW9ucycsXG5cdFx0RGVsZXRlZGNvbnRyaWJ1dGlvbnNIaW50OiAnTGlzdCBkZWxldGVkIGVkaXRzIG1hZGUgYnkgJXMnLFxuXHRcdENvbnRyaWJ1dGlvbnNIaW50OiAnTGlzdCB0aGUgY29udHJpYnV0aW9ucyBtYWRlIGJ5ICVzJyxcblx0XHRsb2c6ICdsb2cnLFxuXHRcdCd1c2VyIGxvZyc6ICd1c2VyIGxvZycsXG5cdFx0dXNlckxvZ0hpbnQ6IFwiU2hvdyAlcydzIHVzZXIgbG9nXCIsXG5cdFx0YXJpbjogJ0FSSU4gbG9va3VwJyxcblx0XHQnTG9vayB1cCAlcyBpbiBBUklOIHdob2lzIGRhdGFiYXNlJzogJ0xvb2sgdXAgJXMgaW4gdGhlIEFSSU4gd2hvaXMgZGF0YWJhc2UnLFxuXHRcdHVuYmxvY2tTaG9ydDogJ3VuJyxcblx0XHRibG9jazogJ2Jsb2NrJyxcblx0XHQnYmxvY2sgdXNlcic6ICdibG9jayB1c2VyJyxcblx0XHRJcGJsb2NrbGlzdEhpbnQ6ICdVbmJsb2NrICVzJyxcblx0XHRCbG9ja2lwSGludDogJ1ByZXZlbnQgJXMgZnJvbSBlZGl0aW5nJyxcblx0XHQnYmxvY2sgbG9nJzogJ2Jsb2NrIGxvZycsXG5cdFx0YmxvY2tMb2dIaW50OiAnU2hvdyB0aGUgYmxvY2sgbG9nIGZvciAlcycsXG5cdFx0cHJvdGVjdExvZ0hpbnQ6ICdTaG93IHRoZSBwcm90ZWN0aW9uIGxvZyBmb3IgJXMnLFxuXHRcdHBhZ2VMb2dIaW50OiAnU2hvdyB0aGUgcGFnZSBsb2cgZm9yICVzJyxcblx0XHRkZWxldGVMb2dIaW50OiAnU2hvdyB0aGUgZGVsZXRpb24gbG9nIGZvciAlcycsXG5cdFx0J0ludmFsaWQgJXMgJXMnOiAnVGhlIG9wdGlvbiAlcyBpcyBpbnZhbGlkOiAlcycsXG5cdFx0J05vIGJhY2tsaW5rcyBmb3VuZCc6ICdObyBiYWNrbGlua3MgZm91bmQnLFxuXHRcdCcgYW5kIG1vcmUnOiAnIGFuZCBtb3JlJyxcblx0XHR1bmRvOiAndW5kbycsXG5cdFx0dW5kb0hpbnQ6ICd1bmRvIHRoaXMgZWRpdCcsXG5cdFx0J0Rvd25sb2FkIHByZXZpZXcgZGF0YSc6ICdEb3dubG9hZCBwcmV2aWV3IGRhdGEnLFxuXHRcdCdJbnZhbGlkIG9yIElQIHVzZXInOiAnSW52YWxpZCBvciBJUCB1c2VyJyxcblx0XHQnTm90IGEgcmVnaXN0ZXJlZCB1c2VybmFtZSc6ICdOb3QgYSByZWdpc3RlcmVkIHVzZXJuYW1lJyxcblx0XHRCTE9DS0VEOiAnQkxPQ0tFRCcsXG5cdFx0J0hhcyBibG9ja3MnOiAnSGFzIGJsb2NrcycsXG5cdFx0JyBlZGl0cyBzaW5jZTogJzogJyBlZGl0cyBzaW5jZTogJyxcblx0XHQnbGFzdCBlZGl0IG9uICc6ICdsYXN0IGVkaXQgb24gJyxcblx0XHQnaGUvaGltJzogJ2hlL2hpbScsXG5cdFx0J3NoZS9oZXInOiAnc2hlL2hlcicsXG5cdFx0Ly8gQXV0b2VkaXRpbmdcblx0XHQnRW50ZXIgYSBub24tZW1wdHkgZWRpdCBzdW1tYXJ5IG9yIHByZXNzIGNhbmNlbCB0byBhYm9ydCc6XG5cdFx0XHQnRW50ZXIgYSBub24tZW1wdHkgZWRpdCBzdW1tYXJ5IG9yIHByZXNzIGNhbmNlbCB0byBhYm9ydCcsXG5cdFx0J0ZhaWxlZCB0byBnZXQgcmV2aXNpb24gaW5mb3JtYXRpb24sIHBsZWFzZSBlZGl0IG1hbnVhbGx5Llxcblxcbic6XG5cdFx0XHQnRmFpbGVkIHRvIGdldCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgcGxlYXNlIGVkaXQgbWFudWFsbHkuXFxuXFxuJyxcblx0XHQnVGhlICVzIGJ1dHRvbiBoYXMgYmVlbiBhdXRvbWF0aWNhbGx5IGNsaWNrZWQuIFBsZWFzZSB3YWl0IGZvciB0aGUgbmV4dCBwYWdlIHRvIGxvYWQuJzpcblx0XHRcdCdUaGUgJXMgYnV0dG9uIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgY2xpY2tlZC4gUGxlYXNlIHdhaXQgZm9yIHRoZSBuZXh0IHBhZ2UgdG8gbG9hZC4nLFxuXHRcdCdDb3VsZCBub3QgZmluZCBidXR0b24gJXMuIFBsZWFzZSBjaGVjayB0aGUgc2V0dGluZ3MgaW4geW91ciBqYXZhc2NyaXB0IGZpbGUuJzpcblx0XHRcdCdDb3VsZCBub3QgZmluZCBidXR0b24gJXMuIFBsZWFzZSBjaGVjayB0aGUgc2V0dGluZ3MgaW4geW91ciBqYXZhc2NyaXB0IGZpbGUuJyxcblx0XHQvLyBQb3B1cHMgc2V0dXBcblx0XHQnT3BlbiBmdWxsLXNpemUgaW1hZ2UnOiAnT3BlbiBmdWxsLXNpemUgaW1hZ2UnLFxuXHRcdGF1dG9lZGl0X3ZlcnNpb246ICducDIwMTQwNDE2Jyxcblx0fTtcblx0Y29uc3QgcG9wdXBTdHJpbmcgPSAoc3RyKSA9PiB7XG5cdFx0aWYgKG1lc3NhZ2UgIT09IHVuZGVmaW5lZCAmJiBtZXNzYWdlICYmIG1lc3NhZ2Vbc3RyXSkge1xuXHRcdFx0cmV0dXJuIG1lc3NhZ2Vbc3RyXTtcblx0XHR9XG5cdFx0aWYgKHBnLnN0cmluZ1tzdHJdKSB7XG5cdFx0XHRyZXR1cm4gcGcuc3RyaW5nW3N0cl07XG5cdFx0fVxuXHRcdHJldHVybiBzdHI7XG5cdH07XG5cdGNvbnN0IHRwcmludGYgPSAoc3RyLCBzdWJzKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBzdWJzICE9PSB0eXBlb2YgW10pIHtcblx0XHRcdHN1YnMgPSBbc3Vic107XG5cdFx0fVxuXHRcdHJldHVybiBzaW1wbGVQcmludGYocG9wdXBTdHJpbmcoc3RyKSwgc3Vicyk7XG5cdH07XG5cdC8vIEVOREZJTEU6IHN0cmluZ3MuanNcblx0Ly8gU1RBUlRGSUxFOiBydW4uanNcblx0Ly8gUnVuIHRoaW5nc1xuXHQvLyBGb3Igc29tZSByZWFzb24gcG9wdXBzIHJlcXVpcmVzIGEgZnVsbHkgbG9hZGVkIHBhZ2UgalF1ZXJ5LnJlYWR5KC4uLikgY2F1c2VzIHByb2JsZW1zIGZvciBzb21lLlxuXHQvLyBUaGUgb2xkIGFkZE9ubG9hZEhvb2sgZGlkIHNvbWV0aGluZyBzaW1pbGFyIHRvIHRoZSBiZWxvd1xuXHRpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuXHRcdGF1dG9FZGl0KCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gd2lsbCBzZXR1cCBwb3B1cHNcblx0XHQkKHdpbmRvdykub24oJ2xvYWQnLCBhdXRvRWRpdCk7XG5cdH1cblx0Ly8gU3VwcG9ydCBmb3IgTWVkaWFXaWtpJ3MgbGl2ZSBwcmV2aWV3LCBWaXN1YWxFZGl0b3IncyBzYXZlcyBhbmQgRWNobydzIGZseW91dC5cblx0KCgpID0+IHtcblx0XHRsZXQgb25jZSA9IHRydWU7XG5cdFx0Y29uc3QgZHluYW1pY0NvbnRlbnRIYW5kbGVyID0gKCRjb250ZW50KSA9PiB7XG5cdFx0XHQvLyBUcnkgdG8gZGV0ZWN0IHRoZSBob29rIGZpcmVkIG9uIGluaXRpYWwgcGFnZSBsb2FkIGFuZCBkaXNyZWdhcmRcblx0XHRcdC8vIGl0LCB3ZSBhbHJlYWR5IGhvb2sgdG8gb25sb2FkIChwb3NzaWJseSB0byBkaWZmZXJlbnQgcGFydHMgb2Zcblx0XHRcdC8vIHBhZ2UgLSBpdCdzIGNvbmZpZ3VyYWJsZSkgYW5kIHJ1bm5pbmcgdHdpY2UgbWlnaHQgYmUgYmFkLiBVZ2x5Li4uXG5cdFx0XHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSA9PT0gJ213LWNvbnRlbnQtdGV4dCcgJiYgb25jZSkge1xuXHRcdFx0XHRvbmNlID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlZ2lzdGVySG9va3NGb3JWaXNpYmxlTmF2cG9wcyA9ICgpID0+IHtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IHBnLmN1cnJlbnQubGlua3MgJiYgaSA8IHBnLmN1cnJlbnQubGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBuYXZwb3AgPSBwZy5jdXJyZW50LmxpbmtzW2ldLm5hdnBvcHVwO1xuXHRcdFx0XHRcdGlmICghbmF2cG9wIHx8ICFuYXZwb3AuaXNWaXNpYmxlKCkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHROYXZwb3B1cC50cmFja2VyLmFkZEhvb2socG9zQ2hlY2tlckhvb2sobmF2cG9wKSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRjb25zdCBkb0l0ID0gKCkgPT4ge1xuXHRcdFx0XHRyZWdpc3Rlckhvb2tzRm9yVmlzaWJsZU5hdnBvcHMoKTtcblx0XHRcdFx0JGNvbnRlbnQuZWFjaCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC5yYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSA9IGZhbHNlO1xuXHRcdFx0XHRcdHNldHVwVG9vbHRpcHMoZWxlbWVudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdHNldHVwUG9wdXBzKGRvSXQpO1xuXHRcdH07XG5cdFx0Ly8gVGhpcyBob29rIGlzIGFsc28gZmlyZWQgYWZ0ZXIgcGFnZSBsb2FkLlxuXHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZHluYW1pY0NvbnRlbnRIYW5kbGVyKTtcblx0XHRtdy5ob29rKCdleHQuZWNoby5vdmVybGF5LmJlZm9yZVNob3dpbmdPdmVybGF5JykuYWRkKCgkb3ZlcmxheSkgPT4ge1xuXHRcdFx0ZHluYW1pY0NvbnRlbnRIYW5kbGVyKCRvdmVybGF5LmZpbmQoJy5tdy1lY2hvLXN0YXRlJykpO1xuXHRcdH0pO1xuXHR9KSgpO1xuXHQvLyBFTkRGSUxFOiBydW4uanNcbn07XG5cbmV4cG9ydCB7cG9wdXBzfTtcbiIsICJpbXBvcnQgJy4vTmF2aWdhdGlvbl9wb3B1cHMubGVzcyc7XG5pbXBvcnQge3BvcHVwc30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG4kKHBvcHVwcyk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsT0FBQSxHQUFjRixrQkFBQUcsV0FBVSx1QkFBdUI7O0FDRHJELElBQU1DLFVBQW1DOztFQUV4Q0MsU0FBU0MsT0FBT0MsTUFBTSxNQUFNLElBQUk7RUFDaENDLFVBQVVGLE9BQU9DLE1BQU0sT0FBTyxLQUFLO0VBQ25DRSxZQUFZSCxPQUFPQyxNQUFNLE9BQU8sS0FBSztFQUNyQ0csT0FBT0os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QUFPO0FBRU53VCxNQUFFOXpCLE1BQU0sRUFBRW1pRCxHQUFHLFFBQVE3aEMsUUFBUTtFQUM5QjtBQUVBLEdBQUMsTUFBTTtBQUNOLFFBQUk4aEMsT0FBTztBQUNYLFVBQU1DLHdCQUF5QkMsY0FBYTtBQUkzQyxVQUFJQSxTQUFTejRCLEtBQUssSUFBSSxNQUFNLHFCQUFxQnU0QixNQUFNO0FBQ3REQSxlQUFPO0FBQ1A7TUFDRDtBQUNBLFlBQU1HLGlDQUFpQ0EsTUFBTTtBQUM1QyxpQkFBUzFxQyxJQUFJLEdBQUd2TyxHQUFHYSxRQUFRaUgsU0FBU3lHLElBQUl2TyxHQUFHYSxRQUFRaUgsTUFBTWpGLFFBQVEwTCxLQUFLO0FBQ3JFLGdCQUFNeEgsU0FBUy9HLEdBQUdhLFFBQVFpSCxNQUFNeUcsQ0FBQyxFQUFFL0c7QUFDbkMsY0FBSSxDQUFDVCxVQUFVLENBQUNBLE9BQU9VLFVBQVUsR0FBRztBQUNuQztVQUNEO0FBQ0ErQixtQkFBU3lvQixRQUFRcHRCLFFBQVFxdEIsZUFBZW5yQixNQUFNLENBQUM7UUFDaEQ7TUFDRDtBQUNBLFlBQU1teUMsT0FBT0EsTUFBTTtBQUNsQkQsdUNBQStCO0FBQy9CRCxpQkFBU0csS0FBSyxDQUFDQyxRQUFRaGtDLFlBQVk7QUFDbENBLGtCQUFRdFQsMEJBQTBCO0FBQ2xDYix3QkFBY21VLE9BQU87UUFDdEIsQ0FBQztNQUNGO0FBQ0E4QixrQkFBWWdpQyxJQUFJO0lBQ2pCO0FBRUF0aUMsT0FBRzB3QixLQUFLLGtCQUFrQixFQUFFK1IsSUFBSU4scUJBQXFCO0FBQ3JEbmlDLE9BQUcwd0IsS0FBSyx1Q0FBdUMsRUFBRStSLElBQUtDLGNBQWE7QUFDbEVQLDRCQUFzQk8sU0FBUzd1QixLQUFLLGdCQUFnQixDQUFDO0lBQ3RELENBQUM7RUFDRixHQUFHO0FBRUo7O0FDNTlQQUQsRUFBRXpxQixNQUFNOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAibWVzc2FnZSIsICJhcnRpY2xlIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJjYXRlZ29yeSIsICJjYXRlZ29yaWVzIiwgImltYWdlIiwgImltYWdlcyIsICJzdHViIiwgImtCIiwgImJ5dGVzIiwgImRheSIsICJkYXlzIiwgImhvdXIiLCAiaG91cnMiLCAibWludXRlIiwgIm1pbnV0ZXMiLCAic2Vjb25kIiwgInNlY29uZHMiLCAid2VlayIsICJ3ZWVrcyIsICJtb250aCIsICJtb250aHMiLCAieWVhciIsICJ5ZWFycyIsICJzZWFyY2giLCAiU2VhcmNoSGludCIsICJ3ZWIiLCAiZ2xvYmFsIiwgImFjdGlvbnMiLCAicG9wdXBzTWVudSIsICJ0b2dnbGVQcmV2aWV3c0hpbnQiLCAicmVzZXQiLCAiZGlzYWJsZSIsICJkaXNhYmxlUG9wdXBzSGludCIsICJwdXJnZVBvcHVwc0hpbnQiLCAiUG9wdXBzSGludCIsICJzcGFjZWJhciIsICJ2aWV3IiwgInZpZXdIaW50IiwgInRhbGsiLCAiZGVsIiwgImRlbGV0ZSIsICJkZWxldGVIaW50IiwgInVuZGVsZXRlU2hvcnQiLCAiVW5kZWxldGVIaW50IiwgInByb3RlY3QiLCAicHJvdGVjdEhpbnQiLCAidW5wcm90ZWN0U2hvcnQiLCAidW5wcm90ZWN0SGludCIsICJtb3ZlIiwgIk1vdmVwYWdlSGludCIsICJlZGl0IiwgImVkaXRIaW50IiwgIm5ldyIsICJuZXdTZWN0aW9uSGludCIsICJudWxsRWRpdEhpbnQiLCAiaGlzdCIsICJoaXN0b3J5IiwgImhpc3RvcnlIaW50IiwgImxhc3QiLCAibGFzdEVkaXQiLCAibGFzdENvbnRyaWIiLCAibGFzdENvbnRyaWJIaW50IiwgImN1ciIsICJkaWZmQ3VyIiwgIm9sZEVkaXQiLCAicHVyZ2UiLCAicHVyZ2VIaW50IiwgInJhdyIsICJyYXdIaW50IiwgInJlbmRlciIsICJyZW5kZXJIaW50IiwgInNpbmNlTWUiLCAic2luY2VNZUhpbnQiLCAiZWRzIiwgImVkaXRvcnMiLCAiZWRpdG9yTGlzdEhpbnQiLCAicmVsYXRlZCIsICJyZWxhdGVkQ2hhbmdlcyIsICJSZWNlbnRjaGFuZ2VzbGlua2VkSGludCIsICJlZGl0T2xkIiwgInJ2IiwgInJldmVydCIsICJyZXZlcnRIaW50IiwgInVuZG8iLCAidW5kb0hpbnQiLCAiZGVmYXVsdHBvcHVwUmVkbGlua1N1bW1hcnkiLCAiZGVmYXVsdHBvcHVwRml4RGFic1N1bW1hcnkiLCAiZGVmYXVsdHBvcHVwRml4UmVkaXJzU3VtbWFyeSIsICJkZWZhdWx0cG9wdXBFeHRlbmRlZFJldmVydFN1bW1hcnkiLCAiZGVmYXVsdHBvcHVwUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnkiLCAiZGVmYXVsdHBvcHVwUmV2ZXJ0U3VtbWFyeSIsICJkZWZhdWx0cG9wdXBRdWVyaWVkUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnkiLCAiZGVmYXVsdHBvcHVwUXVlcmllZFJldmVydFN1bW1hcnkiLCAiZGVmYXVsdHBvcHVwUm1EYWJMaW5rU3VtbWFyeSIsICJSZWRpcmVjdHMiLCAiZGlzYW1iaWciLCAiZGlzYW1iaWdIaW50IiwgIm1haW5saW5rIiwgIndpa2lMaW5rIiwgIndpa2lMaW5rcyIsICJ3aGF0TGlua3NIZXJlIiwgIldoYXRsaW5rc2hlcmVIaW50IiwgInVud2F0Y2hTaG9ydCIsICJ3YXRjaFRoaW5neSIsICJ3YXRjaEhpbnQiLCAidW53YXRjaEhpbnQiLCAicnNzIiwgInVzZXIiLCAiZW1haWwiLCAiRW1haWx1c2VySGludCIsICJzcGFjZSIsICJQcmVmaXhpbmRleEhpbnQiLCAiY291bnQiLCAia2F0ZWxpbmtIaW50IiwgImNvbnRyaWJzIiwgImNvbnRyaWJ1dGlvbnMiLCAiZGVsZXRlZENvbnRyaWJzIiwgIkNvbnRyaWJ1dGlvbnNIaW50IiwgInRyZWUiLCAiY29udHJpYnNUcmVlSGludCIsICJsb2ciLCAidXNlckxvZ0hpbnQiLCAidW5ibG9ja1Nob3J0IiwgImJsb2NrIiwgIklwYmxvY2tsaXN0SGludCIsICJCbG9ja2lwSGludCIsICJibG9ja0xvZ0hpbnQiLCAicHJvdGVjdExvZ0hpbnQiLCAicGFnZUxvZ0hpbnQiLCAiZGVsZXRlTG9nSGludCIsICJtIiwgImJpbmdTZWFyY2hIaW50IiwgImhpc3RvcnlmZWVkSGludCIsICJUaGFua3NIaW50IiwgIm1hcmtwYXRyb2xsZWRIaW50IiwgImRlZmF1bHRwb3B1cFJldmlld2VkU3VtbWFyeSIsICJyZXZkZWwiLCAiRGVsZXRlZGNvbnRyaWJ1dGlvbnNIaW50IiwgIkJMT0NLRUQiLCAiRW1haWxVc2VySGludCIsICJSQU5HRUJMT0NLRUQiLCAiSElEREVOIiwgIkxPQ0tFRCIsICJkaWZmIiwgImF1dG9lZGl0X3ZlcnNpb24iLCAiUHJlZml4SW5kZXhIaW50IiwgIm51bGxFZGl0U3VtbWFyeSIsICJzZXBhcmF0b3IiLCAiY29tbWEiLCAicG9wdXBzIiwgInBnIiwgInJlIiwgIm5zIiwgInN0cmluZyIsICJ3aWtpIiwgIm1pc2MiLCAib3B0aW9uIiwgIm9wdGlvbkRlZmF1bHQiLCAiZmxhZyIsICJjYWNoZSIsICJzdHJ1Y3R1cmVzIiwgInRpbWVyIiwgImNvdW50ZXIiLCAiY3VycmVudCIsICJmbiIsICJlbmRvZmxpc3QiLCAiSFRNTEVsZW1lbnQiLCAic2V0dXBUb29sdGlwcyIsICJjb250YWluZXIiLCAicmVtb3ZlIiwgImZvcmNlIiwgInBvcERhdGEiLCAiY29uY2F0IiwgImdldFZhbHVlT2YiLCAiZG9jdW1lbnQiLCAiZWRpdGZvcm0iLCAid3BUZXh0Ym94MSIsICJvbm1vdXNldXAiLCAiZG9TZWxlY3Rpb25Qb3B1cCIsICJkZWZhdWx0UG9wdXBzQ29udGFpbmVyIiwgInJhblNldHVwVG9vbHRpcHNBbHJlYWR5IiwgImFuY2hvcnMiLCAicXVlcnlTZWxlY3RvckFsbCIsICJzZXR1cFRvb2x0aXBzTG9vcCIsICJxdWVyeVNlbGVjdG9yIiwgInNldHVwVG9vbHRpcHNMb29wMiIsICJiZWdpbiIsICJob3dtYW55IiwgInNsZWVwIiwgImFyZ3MiLCAic2ltcGxlUHJpbnRmIiwgImZpbmlzaCIsICJsb29wZW5kIiwgIk1hdGgiLCAibWluIiwgImxlbmd0aCIsICJqIiwgImRvVG9vbHRpcCIsICJyZW1vdmVUb29sdGlwIiwgImFkZFRvb2x0aXAiLCAiYSIsICJocmVmIiwgInNldFRpbWVvdXQiLCAicm1Ub2NUb29sdGlwcyIsICJmaW5pc2hlZExvYWRpbmciLCAidG9jIiwgInRvY0xpbmtzIiwgInRvY0xlbiIsICJpc1BvcHVwTGluayIsICJvbm1vdXNlb3ZlciIsICJtb3VzZU92ZXJXaWtpTGluayIsICJvbm1vdXNlb3V0IiwgIm1vdXNlT3V0V2lraUxpbmsiLCAib25tb3VzZWRvd24iLCAia2lsbFBvcHVwIiwgImhhc1BvcHVwIiwgIm9yaWdpbmFsVGl0bGUiLCAidGl0bGUiLCAicmVtb3ZlVGl0bGUiLCAicmVzdG9yZVRpdGxlIiwgInJlZ2lzdGVySG9va3MiLCAibnAiLCAicG9wdXBNYXhXaWR0aCIsICJzZXRNYXhXaWR0aCIsICJtYWluRGl2IiwgInN0eWxlIiwgIm1heFdpZHRoIiwgImFkZEhvb2siLCAiYWRkUG9wdXBTaG9ydGN1dHMiLCAicm1Qb3B1cFNob3J0Y3V0cyIsICJyZW1vdmVNb2RpZmllcktleUxpc3RlbmVyIiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAibW9kaWZpZXJLZXlMaXN0ZW5lciIsICJtb3VzZU92ZXJXaWtpTGluazMiLCAiZXZ0IiwgImV2ZW50IiwgImFjdGlvbiIsICJrZXkiLCAic2VsZiIsICJldnQyIiwgIm1vdXNlT3Zlcldpa2lMaW5rMiIsICJhZGRFdmVudExpc3RlbmVyIiwgImZvb3Rub3RlVGFyZ2V0IiwgImFUaXRsZSIsICJUaXRsZSIsICJmcm9tQW5jaG9yIiwgImFuY2giLCAiYW5jaG9yIiwgInRlc3QiLCAibFRpdGxlIiwgImZyb21VUkwiLCAibG9jYXRpb24iLCAidG9TdHJpbmciLCAiZWwiLCAiZ2V0RWxlbWVudEJ5SWQiLCAibm9kZU5hbWUiLCAibnQiLCAidG9Mb3dlckNhc2UiLCAicGFyZW50Tm9kZSIsICJmb290bm90ZVByZXZpZXciLCAieCIsICJuYXZwb3AiLCAic2V0UG9wdXBIVE1MIiwgImlubmVySFRNTCIsICJpZE51bWJlciIsICJtb2RpZmllclByZXNzZWQiLCAibW9kIiwgImlzQ29ycmVjdE1vZGlmaWVyIiwgIl9hIiwgImxpbmsiLCAibmF2cG9wdXAiLCAiaXNWaXNpYmxlIiwgInBvcHVwU3RydWN0dXJlIiwgInNldERlZmF1bHQiLCAibmV3TmF2cG9wdXAiLCAibGlua3NIYXNoIiwgImxpbmtzIiwgInB1c2giLCAicGVuZGluZyIsICJzaW1wbGVQb3B1cENvbnRlbnQiLCAic2hvd1Nvb25JZlN0YWJsZSIsICJkZWxheSIsICJjbGVhckludGVydmFsIiwgImNoZWNrUG9wdXBQb3NpdGlvbiIsICJzZXRJbnRlcnZhbCIsICJzaW1wbGVOb01vcmUiLCAiZCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJzIiwgImFwcGVuZCIsICJkaXNwbGF5IiwgIm5vbnNpbXBsZVBvcHVwQ29udGVudCIsICJwb3B1cFN0cmluZyIsICJoYXNQb3B1cE1lbnUiLCAic2V0SW5uZXJIVE1MIiwgInBvcHVwSFRNTCIsICJmaWxsRW1wdHlTcGFucyIsICJkcmFnSGFuZGxlIiwgIm1ha2VEcmFnZ2FibGUiLCAicG9wdXBSZWRsaW5rSFRNTCIsICJkZWJ1Z0RhdGEiLCAiTmF2cG9wdXAiLCAiZnV6eiIsICJwYXJlbnRBbmNob3IiLCAicGFyZW50UG9wdXAiLCAib3duZXIiLCAic2hvdWxkU2hvd05vblNpbXBsZSIsICJzaG91bGRTaG93IiwgImRpZmYyIiwgInBhcmFtcyIsICJwYXJzZVBhcmFtcyIsICJvbGRpZCIsICJyZWZlcmVuY2VFbGVtZW50IiwgImxvYWREaWZmIiwgImxvYWRBUElQcmV2aWV3IiwgImJhY2tsaW5rcyIsICJuYW1lc3BhY2VJZCIsICJuc0ltYWdlSWQiLCAiYW5jaG9yQ29udGFpbnNJbWFnZSIsICJsb2FkSW1hZ2UiLCAibnNDYXRlZ29yeUlkIiwgIm5zVXNlcklkIiwgIm5zVXNlcnRhbGtJZCIsICJzdGFydEFydGljbGVQcmV2aWV3IiwgInBlbmRpbmdOYXZwb3BUYXNrIiwgImNvbXBsZXRlZE5hdnBvcFRhc2siLCAicmVkaXIiLCAibG9hZFByZXZpZXciLCAib3JpZ2luYWxBcnRpY2xlIiwgImxvYWRQcmV2aWV3RnJvbVJlZGlyIiwgInJlZGlyTWF0Y2giLCAidGFyZ2V0IiwgImZyb21XaWtpVGV4dCIsICJyZWRpclRhcmdldCIsICJ3YXJuUmVkaXIiLCAicmVkaXJMaW5rIiwgImluc2VydFByZXZpZXciLCAiZG93bmxvYWQiLCAicmVkaXJlY3QiLCAiZXhlYyIsICJkYXRhIiwgInZpc2libGUiLCAiaW5zZXJ0UHJldmlld05vdyIsICJpZCIsICJ3aWtpVGV4dCIsICJhcnQiLCAibWFrZUZpeERhYnMiLCAiZ2V0UGFnZUluZm8iLCAic2V0UG9wdXBUcmFpbGVyIiwgImltYWdlUGFnZSIsICJnZXRWYWxpZEltYWdlRnJvbVdpa2lUZXh0IiwgImluc2VydEFydGljbGVQcmV2aWV3IiwgIm5zVGVtcGxhdGVJZCIsICJoIiwgImVudGlmeSIsICJzcGxpdCIsICJTdHJpbmciLCAiX3RlbXBsYXRlT2JqZWN0IiwgIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCAiam9pbiIsICJfdGVtcGxhdGVPYmplY3QyIiwgInAiLCAicHJlcFByZXZpZXdtYWtlciIsICJzaG93UHJldmlldyIsICJhbmNob3JpemUiLCAiYW5jaG9yU3RyaW5nIiwgInVybEJhc2UiLCAiam9pblBhdGgiLCAiYXJ0aWNsZWJhc2UiLCAidXJsU3RyaW5nIiwgIlByZXZpZXdtYWtlciIsICJhbmNoUmUiLCAiUmVnRXhwIiwgImxpdGVyYWxpemVSZWdleCIsICJyZXBsYWNlIiwgIm1hdGNoIiwgInNsaWNlIiwgIm1heCIsICJpbmRleE9mIiwgImxpbmVzIiwgImkiLCAia2lsbFBvcHVwMiIsICJiYW5pc2giLCAiYWJvcnRBbGxEb3dubG9hZHMiLCAiRHJhZyIsICJjb25zdHJ1Y3RvciIsICJzdGFydENvbmRpdGlvbiIsICJlbmRIb29rIiwgImZpeEUiLCAiZSIsICJsYXllclgiLCAib2Zmc2V0WCIsICJsYXllclkiLCAib2Zmc2V0WSIsICJpbml0IiwgIm8iLCAib1Jvb3QiLCAib2JqIiwgInN0YXJ0IiwgImRyYWdnaW5nIiwgInBvcHVwc19kcmFnZ2FibGUiLCAiaG1vZGUiLCAidm1vZGUiLCAicm9vdCIsICJOdW1iZXIiLCAiaXNOYU4iLCAicGFyc2VJbnQiLCAibGVmdCIsICJ0b3AiLCAib250aGlzU3RhcnQiLCAib250aGlzRW5kIiwgIm9udGhpcyIsICJ5IiwgImJvdHRvbSIsICJyaWdodCIsICJsYXN0TW91c2VYIiwgImNsaWVudFgiLCAibGFzdE1vdXNlWSIsICJjbGllbnRZIiwgIm9ubW91c2Vtb3ZlRGVmYXVsdCIsICJvbm1vdXNlbW92ZSIsICJlMiIsICJkcmFnIiwgImVuZCIsICJleSIsICJleCIsICJueCIsICJueSIsICJvcmlnaW5hbCIsICJwb3B1cExheW91dCIsICJwb3B1cFJlZGlyU3BhbnMiLCAicG9wdXBUaXRsZSIsICJuYXZsaW5rU3RyaW5nVG9IVE1MIiwgInBvcHVwVG9wTGlua3MiLCAibmF2TGlua3NIVE1MIiwgImhpbnQiLCAicG9wdXBJbWFnZSIsICJpbWFnZUhUTUwiLCAicG9wdXBSZWRpclRpdGxlIiwgInBvcHVwUmVkaXJUb3BMaW5rcyIsICJjb3B5U3RydWN0dXJlIiwgIm9sZFN0cnVjdHVyZSIsICJuZXdTdHJ1Y3R1cmUiLCAicHJvcCIsICJPYmplY3QiLCAiaGFzT3duIiwgIm5vc3RhbGdpYSIsICJzdHIiLCAiZWRpdHN0ciIsICJlZGl0T2xkaWRTdHIiLCAiaGlzdG9yeXN0ciIsICJ3YXRjaHN0ciIsICJmYW5jeSIsICJ3YXRjaCIsICJwb3B1cE90aGVyTGlua3MiLCAiYWRtaW4iLCAibm9ybWFsIiwgInBvcHVwUmVkaXJPdGhlckxpbmtzIiwgImZhbmN5MiIsICJtZW51cyIsICJzaG9ydGVyIiwgImRyb3BkaXYiLCAiZW5kZGl2IiwgImxhc3RlZGl0IiwgInRoYW5rIiwgImpzSGlzdG9yeSIsICJsaW5rc2hlcmUiLCAibnVsbFB1cmdlIiwgInZpZXdPcHRpb25zIiwgImVkaXRSb3ciLCAibWFya1BhdHJvbGxlZCIsICJuZXdUb3BpYyIsICJwcm90ZWN0RGVsZXRlIiwgIm1lbnVUaXRsZSIsICJzaG9ydG1lbnVzIiwgImxpdGUiLCAic3Vic3RpdHV0ZSIsICJjbWRCb2R5IiwgImZyb21SZSIsICJmcm9tIiwgImZsYWdzIiwgInRvIiwgImV4ZWNDbWRzIiwgImNtZExpc3QiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgImVyciIsICJmIiwgInBhcnNlQ21kIiwgInBhcnNlQ21kMiIsICJjaGFyQXQiLCAicGFyc2VTdWJzdGl0dXRlIiwgInJlbWFpbmRlciIsICJ1bkVzY2FwZSIsICJzZXAiLCAiX3RlbXBsYXRlT2JqZWN0MyIsICJ0bXAiLCAic2tpcE92ZXIiLCAic2VnbWVudCIsICJza2lwVG9FbmQiLCAiZW5kU2VnbWVudCIsICJmaW5kTmV4dCIsICJfc2VwIiwgImNoIiwgInNldENoZWNrYm94IiwgInBhcmFtIiwgImJveCIsICJ2YWwiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImNoZWNrZWQiLCAiYXV0b0VkaXQiLCAiYXV0b0VkaXQ0IiwgInNldHVwUG9wdXBzIiwgImF1dG9DbGlja1Rva2VuIiwgIm1vZGlmeVdhdGNobGlzdCIsICJhbHJlYWR5UmFuIiwgImNtZFN0cmluZyIsICJlZGl0Ym94IiwgImlucHV0IiwgIm91dHB1dCIsICJ3cE1pbm9yZWRpdCIsICJ3cFdhdGNodGhpcyIsICJydmlkIiwgInVybCIsICJhcGl3aWtpYmFzZSIsICJzdGFydERvd25sb2FkIiwgImF1dG9FZGl0MiIsICJzdW1tYXJ5IiwgInN1bW1hcnlwcm9tcHQiLCAic3VtbWFyeW5vdGljZSIsICJnZXRSdlN1bW1hcnkiLCAidHh0IiwgInJlc3BvbnNlIiwgInByb21wdCIsICJ3cFN1bW1hcnkiLCAiYXV0b0VkaXQzIiwgInNlc3Npb25JZCIsICJidG4iLCAiYnV0dG9uIiwgIm1zZyIsICJ0cHJpbnRmIiwgImJhbm5lck1lc3NhZ2UiLCAiY2xpY2siLCAibm90aWZ5IiwgInRhZyIsICJ0eXBlIiwgImhlYWRpbmdzIiwgImRpdiIsICJlc2NhcGVRdW90ZXNIVE1MIiwgImluc2VydEJlZm9yZSIsICJ0ZW1wbGF0ZSIsICJqc29uIiwgImdldEpzT2JqIiwgImFueUNoaWxkIiwgInF1ZXJ5IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJ0aW1lc3RhbXAiLCAicmV2aWQiLCAidXNlcmhpZGRlbiIsICJEb3dubG9hZGVyIiwgIlhNTEh0dHBSZXF1ZXN0IiwgImh0dHAiLCAibGFzdE1vZGlmaWVkIiwgImNhbGxiYWNrRnVuY3Rpb24iLCAib25GYWlsdXJlIiwgImFib3J0ZWQiLCAibWV0aG9kIiwgImFzeW5jIiwgInNlbmQiLCAiYWJvcnQiLCAiZ2V0RGF0YSIsICJyZXNwb25zZVRleHQiLCAic2V0VGFyZ2V0IiwgIm9wZW4iLCAic2V0UmVxdWVzdEhlYWRlciIsICJ1c2VyQWdlbnQiLCAiZ2V0UmVhZHlTdGF0ZSIsICJyZWFkeVN0YXRlIiwgImRvd25sb2Fkc0luUHJvZ3Jlc3MiLCAiZ2V0TGFzdE1vZGlmaWVkRGF0ZSIsICJsYXN0bW9kIiwgImdldFJlc3BvbnNlSGVhZGVyIiwgIkRhdGUiLCAic2V0Q2FsbGJhY2siLCAib25yZWFkeXN0YXRlY2hhbmdlIiwgImdldFN0YXR1cyIsICJzdGF0dXMiLCAibmV3RG93bmxvYWQiLCAibmV3RG93bmxvYWQyIiwgImNhbGxiYWNrIiwgIm9uZmFpbHVyZSIsICJmYWtlRG93bmxvYWQiLCAiSW5zdGEiLCAic2V0dXBMaXZlUHJldmlldyIsICJfSW5zdGEkY29uZiR1c2VyIiwgIl9iIiwgImNvbmYiLCAiYmFzZVVybCIsICJsYW5nIiwgImludGVyd2lraSIsICJkZWZhdWx0X3RodW1iX3dpZHRoIiwgInBhdGhzIiwgImFydGljbGVzIiwgImFydGljbGVQYXRoIiwgIm1hdGgiLCAiaW1hZ2VzX2ZhbGxiYWNrIiwgImxvY2FsZSIsICJjb25maWciLCAiZ2V0IiwgIm5hbWUiLCAic2lnbmF0dXJlIiwgIkJMT0NLX0lNQUdFIiwgImR1bXAiLCAiY29udmVydCIsICJsbCIsICJyIiwgInJlbWFpbiIsICJzaCIsICJzaGlmdCIsICJwcyIsICJmMiIsICJmMyIsICJvMiIsICJjIiwgInAyIiwgImh0bWxfZW50aXRpZXMiLCAiaHRtbGVzY2FwZV90ZXh0IiwgImh0bWxlc2NhcGVfYXR0ciIsICJzdHJfaW1hdGNoIiwgImIiLCAibCIsICJjb21wYXJlTGluZVN0cmluZ09yUmVnIiwgImNvbXBhcmVMaW5lU3RyaW5nIiwgImNoYXJBdFBvaW50IiwgImVuZGwiLCAicGFyc2VfbGlzdCIsICJwcmV2IiwgImxfbWF0Y2giLCAiaXBvcyIsICJwcmV2UG9zIiwgInBpIiwgIm1hdGNoUG9zIiwgImxpIiwgImF0IiwgInBhcnNlX2lubGluZV9ub3dpa2kiLCAiZHRfbWF0Y2giLCAidW5zaGlmdCIsICJwYXJzZV90YWJsZSIsICJwYXJzZV90YWJsZV9kYXRhIiwgInRkX2xpbmUiLCAibWF0Y2hfaSIsICJ0ZF9tYXRjaCIsICJwb3AiLCAidGMiLCAidGQiLCAicGFyc2VfcHJlIiwgInBhcnNlX2Jsb2NrX2ltYWdlIiwgInBhcnNlX2ltYWdlIiwgInN1YnN0cmluZyIsICJ3aWR0aCIsICJhdHRyIiwgImZpbGVuYW1lIiwgImNhcHRpb24iLCAidGh1bWIiLCAiZnJhbWUiLCAiY2VudGVyIiwgImFsaWduIiwgIm5lc3RpbmciLCAibGFzdF9hdHRyIiwgIndfbWF0Y2giLCAibGFzdGVuZCIsICJzdWJzdGFydCIsICJuZXN0bGV2IiwgImNsb3NlIiwgInN1Ymxvb3AiLCAiaHRtbCIsICJwYXJzZV9pbmxpbmVfd2lraSIsICJwYXJzZV9pbmxpbmVfaW1hZ2VzIiwgImxvb3AiLCAid2lraTIiLCAicGFyc2VfaW5saW5lX2Zvcm1hdHRpbmciLCAiZW0iLCAic3QiLCAiZGF0ZSIsICJnZXRVVENNaW51dGVzIiwgImdldFVUQ0hvdXJzIiwgImdldFVUQ0RhdGUiLCAiZ2V0VVRDTW9udGgiLCAiZ2V0VVRDRnVsbFllYXIiLCAiXyQwIiwgIiQxIiwgIiQyIiwgIiQzIiwgIiQ0IiwgIndpa2kyaHRtbCIsICJiYXNldXJsIiwgInBvcHVwRmlsdGVyUGFnZVNpemUiLCAiZm9ybWF0Qnl0ZXMiLCAicG9wdXBGaWx0ZXJDb3VudExpbmtzIiwgIm51bSIsICJjb3VudExpbmtzIiwgInBvcHVwRmlsdGVyQ291bnRJbWFnZXMiLCAiY291bnRJbWFnZXMiLCAicG9wdXBGaWx0ZXJDb3VudENhdGVnb3JpZXMiLCAiY291bnRDYXRlZ29yaWVzIiwgInBvcHVwRmlsdGVyTGFzdE1vZGlmaWVkIiwgIl9kYXRhIiwgIm5vdyIsICJhZ2UiLCAiZm9ybWF0QWdlIiwgImFhIiwgInNlY2xlbiIsICJtaW5sZW4iLCAiaG91cmxlbiIsICJkYXlsZW4iLCAid2Vla2xlbiIsICJudW13ZWVrcyIsICJzd2Vla3MiLCAiYWRkdW5pdCIsICJudW1kYXlzIiwgInNkYXlzIiwgIm51bWhvdXJzIiwgInNob3VycyIsICJudW1taW5zIiwgInNtaW5zIiwgIm51bXNlY3MiLCAic3NlY3MiLCAicnVuUG9wdXBGaWx0ZXJzIiwgImxpc3QiLCAicmV0IiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInBvcHVwRmlsdGVycyIsICJleHRyYVBvcHVwRmlsdGVycyIsICJwYWdlSW5mb0FycmF5IiwgInBhZ2VJbmZvIiwgInVwY2FzZUZpcnN0IiwgImltYWdlQnJhY2tldENvdW50IiwgImNhdGVnb3J5QnJhY2tldENvdW50IiwgInBvcHVwRmlsdGVyU3R1YkRldGVjdCIsICJfZG93bmxvYWQiLCAiY291bnRzIiwgInN0dWJDb3VudCIsICJyZWFsIiwgInNlY3QiLCAicG9wdXBGaWx0ZXJEaXNhbWJpZ0RldGVjdCIsICJuYW1lc3BhY2UiLCAiaXNEaXNhbWJpZyIsICJyb3VuZCIsICJTdHJpbmd3cmFwcGVyIiwgIlN0cmluZ3dyYXBwZXIyIiwgInNldFV0ZiIsICJvbWl0QW5jaG9yIiwgImxlbiIsICJkZWNvZGVVUklDb21wb25lbnQiLCAidXJsQW5jaG9yIiwgImFuY2hvckZyb21VdGYiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgInNwbGl0dGVkIiwgInUiLCAiZGVjb2RlTmFzdGllcyIsICJzdHJpcE5hbWVzcGFjZSIsICJzcGVjaWFsZGlmZiIsICJuc1NwZWNpYWxJZCIsICJtYWluIiwgImZyb21Cb3RJbnRlcmZhY2UiLCAiZXh0cmFjdGVkIiwgImlzU2FmYXJpIiwgInVuZXNjYXBlIiwgImRlY29kZVVSSSIsICJkZWNvZGVFc2NhcGVzIiwgIm15RGVjb2RlVVJJIiwgImhpbnRWYWx1ZSIsICJzYWZlRGVjb2RlVVJJIiwgInRvVXNlck5hbWUiLCAid2l0aE5zIiwgInVzZXJOYW1lIiwgInQiLCAidG9UYWxrUGFnZSIsICJsb2NhbGl6ZWROYW1lc3BhY2UiLCAidGFsa1BhZ2UiLCAiaXNUYWxrUGFnZSIsICJ0b0FydGljbGVGcm9tVGFsa1BhZ2UiLCAiYXJ0aWNsZUZyb21UYWxrUGFnZSIsICJhcnRpY2xlRnJvbVRhbGtPckFydGljbGUiLCAiaXNJcFVzZXIiLCAiaXBVc2VyIiwgIm5zTWFpbnNwYWNlSWQiLCAic2V0VXJsIiwgInVybGZyYWciLCAidiIsICJrZWVwU3BhY2VzIiwgImVuY29kZVVSSSIsICJyZW1vdmVBbmNob3IiLCAidG9VcmwiLCAidGl0bGViYXNlIiwgInNwZWNpYWxEaWZmIiwgImluY2x1ZGVzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInoiLCAiaGVscGVyIiwgImRlY29kZUV4dHJhcyIsICJzZWN0U3R1YiIsICJyZWFsU3R1YiIsICJpc1ZhbGlkSW1hZ2VOYW1lIiwgImlzSW5TdHJpcHBhYmxlTmFtZXNwYWNlIiwgImlzSW5NYWluTmFtZXNwYWNlIiwgImtpZHMiLCAiY2hpbGROb2RlcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJraWQiLCAibWFya05vcG9wdXBTcGFuTGlua3MiLCAiaW5Ob3BvcHVwU3BhbiIsICJnZXRBdHRyaWJ1dGUiLCAiYmFzZW5hbWVzIiwgInVybE5vUG9wdXAiLCAibWFya05vcG9wdXBTcGFuTGlua3MyIiwgImZpeFZlY3Rvck1lbnVQb3B1cHMiLCAiJGJvZHkiLCAiJCIsICJmaW5kIiwgInRvQXJyYXkiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiYXMiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiZ2V0UGFnZVdpdGhDYWNoaW5nIiwgIm9uQ29tcGxldGUiLCAiZmluZEluUGFnZUNhY2hlIiwgImdldFBhZ2UiLCAiYWRkRG93bmxvYWQiLCAiYWRkUGFnZVRvQ2FjaGUiLCAicGFnZSIsICJqc29uX3JldCIsICJKU09OIiwgInBhcnNlIiwgIndhcm5pbmdzIiwgInciLCAiZXJyb3IiLCAiZXJybG9nIiwgImNvZGUiLCAiaW5mbyIsICJ0b1VwcGVyQ2FzZSIsICJmaW5kSW5BcnJheSIsICJhcnIiLCAiZm9vIiwgIm5leHRPbmUiLCAiYXJyYXkiLCAiZXNjYXBlUmVnRXhwIiwgInByb3RvdHlwZSIsICJyZW1vdmVOdWxscyIsICJmaWx0ZXIiLCAic3VicyIsICJjbWQiLCAiaXNTdHJpbmciLCAiaXNOdW1iZXIiLCAiaXNSZWdFeHAiLCAiaXNBcnJheSIsICJBcnJheSIsICJpc09iamVjdCIsICJpc0Z1bmN0aW9uIiwgIkZ1bmN0aW9uIiwgInJlcGVhdFN0cmluZyIsICJtdWx0IiwgInplcm9GaWxsIiwgIm1hcCIsICJtYXBfYXJyYXkiLCAibWFwX29iamVjdCIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJ0ZXh0IiwgInVuZXNjYXBlUXVvdGVzSFRNTCIsICJyZXRhcmdldERhYiIsICJuZXdUYXJnZXQiLCAib2xkVGFyZ2V0IiwgImZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lIiwgInRpdGxlVG9FZGl0IiwgImNoYW5nZUxpbmtUYXJnZXRMaW5rIiwgImNsaWNrQnV0dG9uIiwgIm1pbm9yIiwgImxpc3RMaW5rcyIsICJ3aWtpdGV4dCIsICJyZWciLCAib21pdFJlZ2V4IiwgIndpa1BvcyIsICJybUR1cGVzRnJvbVNvcnRlZExpc3QiLCAic29ydCIsICJ3aWtUYXJnZXQiLCAibWV0aCIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJtYWtlRml4RGFiIiwgInNldFBvcHVwSFRNTDIiLCAiZWxlbWVudElkIiwgInBvcHVwSWQiLCAib25TdWNjZXNzIiwgInBvcHVwRWxlbWVudCIsICJyY2lkIiwgInN0cnVjdHVyZSIsICJzcGFucyIsICJmbGF0dGVuIiwgImxheW91dCIsICJudW1zcGFucyIsICJyZWRpcnMiLCAicmVkaXJTcGFucyIsICJmb3VuZCIsICJzdHJ1Y3R1cmVmbiIsICJzZXRmbiIsICJzZXRQb3B1cFRpcHNBbmRIVE1MIiwgImZsYXR0ZW4yIiwgInBvcHVwSFRNTDIiLCAibWFrZUVtcHR5U3BhbnMiLCAibWFrZUVtcHR5U3BhbnMyIiwgIl9pdGVyYXRvcjkiLCAiX3N0ZXA5IiwgImVtcHR5U3BhbkhUTUwiLCAibm9kZVR5cGUiLCAiZW1wdHlTcGFuSFRNTDIiLCAiY2xhc3NuYW1lIiwgImNsYXNzQWxpYXNlcyIsICJwb3B1cFNlY29uZFByZXZpZXciLCAiX2FydGljbGUiLCAicG9wVGlwc1Nvb25GbiIsICJ3aGVuIiwgInBvcFRpcHMiLCAiZGl2bmFtZSIsICJpZG51bWJlciIsICJmdXp6eUN1cnNvck9mZk1lbnVzIiwgIl94IiwgIl95IiwgIl9mdXp6IiwgInBhcmVudCIsICJ1bHMiLCAiX2l0ZXJhdG9yMTAiLCAiX3N0ZXAxMCIsICJ1bCIsICJvZmZzZXRXaWR0aCIsICJsaW1pdEhvcml6b250YWxQb3NpdGlvbiIsICJtb3VzZU91dFdpa2lMaW5rMiIsICJ0cmFja2VyIiwgInBvc0NoZWNrZXJIb29rIiwgImRpcnR5IiwgIm1vdXNlT3Zlck5hdnBvcCIsICJpc1dpdGhpbiIsICJtb3VzZUxlYXZpbmdUaW1lIiwgInJ1blN0b3BQb3B1cFRpbWVyIiwgInN0b3BQb3B1cFRpbWVyIiwgIm9yaWdpbmFsRGF0YSIsICJtYXhDaGFyYWN0ZXJzIiwgIm1heFNlbnRlbmNlcyIsICJzZXREYXRhIiwgIm1heFNpemUiLCAia2lsbENvbW1lbnRzIiwgImtpbGxEaXZzIiwgImtpbGxHYWxsZXJpZXMiLCAia2lsbCIsICJvcGVuaW5nIiwgImNsb3NpbmciLCAic3Vib3BlbmluZyIsICJzdWJjbG9zaW5nIiwgInJlcGwiLCAib2xkayIsICJrIiwgImtpbGxTdHVmZiIsICJvcCIsICJtYWtlUmVnZXhwIiwgImNsIiwgInNiIiwgInNjIiwgIm9wUmVzdWx0IiwgImluZGV4IiwgImRlcHRoIiwgInJlbW92YWwiLCAicHJlZml4IiwgInN1ZmZpeCIsICJyZVN0ciIsICJzcCIsICJraWxsQm94VGVtcGxhdGVzIiwgImtpbGxUZW1wbGF0ZXMiLCAia2lsbFRhYmxlcyIsICJraWxsSW1hZ2VzIiwgImZvcmJpZGRlbk5hbWVzcGFjZUFsaWFzZXMiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgImVudHJpZXMiLCAibG9jYWxpemVkTmFtZXNwYWNlTGMiLCAia2lsbEhUTUwiLCAia2lsbENodW5rcyIsICJpdGFsaWNDaHVua1JlZ2V4IiwgIm1vcHVwIiwgImZpcnN0Qml0IiwgInN0dWZmIiwgIm5vdFNlbnRlbmNlRW5kcyIsICJmaXhTZW50ZW5jZUVuZHMiLCAiZnVsbExlbmd0aCIsICJkZCIsICJmaXJzdFNlbnRlbmNlcyIsICJzdHJzIiwgImtpbGxCYWRXaGl0ZXNwYWNlIiwgIm1ha2VQcmV2aWV3IiwgImtpbGxNdWx0aWxpbmVUZW1wbGF0ZXMiLCAiZml4SFRNTCIsICJzdHJpcExvbmdUZW1wbGF0ZXMiLCAiZXNXaWtpMkh0bWxQYXJ0IiwgInJlTGlua3MiLCAibGFzdEluZGV4IiwgInJlc3VsdCIsICJwb3N0Zml4SW5kZXgiLCAiX21hdGNoJCIsICJlZGl0U3VtbWFyeVByZXZpZXciLCAicmVBZXMiLCAic2VjdGlvbiIsICJwb3N0Zml4IiwgInNlY3Rpb25MaW5rIiwgIm1vcmUiLCAibW9yZUxpbmsiLCAib25jbGljayIsICJxdWVyeVR5cGUiLCAiaHRtbEdlbmVyYXRvciIsICJ1c2VybmFtZWFydCIsICJBUEloaXN0b3J5UHJldmlld0hUTUwiLCAiQVBJY2F0ZWdvcnlQcmV2aWV3SFRNTCIsICJ1c2VybmFtZSIsICJBUEl1c2VySW5mb1ByZXZpZXdIVE1MIiwgIkFQSWNvbnRyaWJzUHJldmlld0hUTUwiLCAidHJhaWwiLCAiQVBJaW1hZ2VwYWdlUHJldmlld0hUTUwiLCAiQVBJYmFja2xpbmtzUHJldmlld0hUTUwiLCAiQVBJcmV2aXNpb25QcmV2aWV3SFRNTCIsICJmZXRjaFVzZXJHcm91cE5hbWVzIiwgInRoZW4iLCAic2hvd0FQSVByZXZpZXciLCAiZ28iLCAibGlua0xpc3QiLCAiYnVmIiwgIl9pdGVyYXRvcjExIiwgIl9zdGVwMTEiLCAiZ2V0VGltZU9mZnNldCIsICJ0eiIsICJvcHRpb25zIiwgImdldFRpbWVab25lIiwgInRpbWVab25lIiwgInR6Q29tcG9uZW50cyIsICJ1c2VUaW1lT2Zmc2V0IiwgIkludGwiLCAiRGF0ZVRpbWVGb3JtYXQiLCAiZm9ybWF0VG9QYXJ0cyIsICJnZXRMb2NhbGVzIiwgImxvY2FsZXMiLCAidXNlckxhbmd1YWdlIiwgImdldE1XRGF0ZUZvcm1hdCIsICJzdXBwb3J0ZWRMb2NhbGVzT2YiLCAibmF2aWdhdG9yIiwgImxhbmd1YWdlIiwgImVkaXRQcmV2aWV3VGFibGUiLCAicmVhbGx5Q29udHJpYnMiLCAiY3VyYXJ0IiwgIm1ha2VGaXJzdENvbHVtbkxpbmtzIiwgImN1cnJlbnRSZXZpc2lvbiIsICJmaXJzdFJldmlkIiwgIl9pdGVyYXRvcjEyIiwgIl9zdGVwMTIiLCAiZWRpdERhdGUiLCAidGhpc0RheSIsICJmb3JtYXR0ZWREYXRlIiwgInRoaXNUaW1lIiwgImZvcm1hdHRlZFRpbWUiLCAiY29sM3VybCIsICJjb2wzdHh0IiwgImNvbW1lbnQiLCAiY29udGVudCIsICJjb21tZW50aGlkZGVuIiwgImFkanVzdERhdGUiLCAib2Zmc2V0IiwgImNvbnZlcnRUaW1lWm9uZSIsICJ0b0xvY2FsZVN0cmluZyIsICJmb3JtYXR0ZWREYXRlVGltZSIsICJkMiIsICJnZXRGdWxsWWVhciIsICJnZXRNb250aCIsICJnZXREYXRlIiwgImdldEhvdXJzIiwgImdldE1pbnV0ZXMiLCAiZ2V0U2Vjb25kcyIsICJ0b0xvY2FsZURhdGVTdHJpbmciLCAiZ2V0VVRDU2Vjb25kcyIsICJ0b0xvY2FsZVRpbWVTdHJpbmciLCAidXNlcmluZm9SZXNwb25zZSIsICJxdWVyeU9iaiIsICJ1c2VycyIsICJtZXNzYWdlcyIsICJncm91cHMiLCAiX2l0ZXJhdG9yMTMiLCAiX3N0ZXAxMyIsICJncm91cE5hbWUiLCAiZ2xvYmFsdXNlcmluZm8iLCAiX2l0ZXJhdG9yMTQiLCAiX3N0ZXAxNCIsICJnZXRNd0FwaSIsICJsb2FkTWVzc2FnZXNJZk1pc3NpbmciLCAianNPYmoiLCAibWlzc2luZyIsICJfaXRlcmF0b3IxNSIsICJfc3RlcDE1IiwgImNvbnRpbnVlIiwgImJsY29udGludWUiLCAiQVBJc2hhcmVkSW1hZ2VQYWdlUHJldmlld0hUTUwiLCAicG9wdXBpZCIsICJyZXF1ZXN0aWQiLCAiY29udGVudG1vZGVsIiwgImFsdCIsICJpbWFnZXJlcG9zaXRvcnkiLCAiZW5jYXJ0IiwgInNoYXJlZF91cmwiLCAiYXBpY29tbW9uc2Jhc2UiLCAiY29tbW9uc2Jhc2UiLCAibG9hZGVyIiwgImxvYWQiLCAiQVBJaW1hZ2VsaW5rc1ByZXZpZXdIVE1MIiwgImpzb2JqIiwgImltYWdldXNhZ2UiLCAiX2l0ZXJhdG9yMTYiLCAiX3N0ZXAxNiIsICJjYXRlZ29yeW1lbWJlcnMiLCAiX2l0ZXJhdG9yMTciLCAiX3N0ZXAxNyIsICJjbWNvbnRpbnVlIiwgInF1ZXJ5b2JqIiwgImludmFsaWQiLCAiYmxvY2tlZGJ5IiwgImJsb2NrcGFydGlhbCIsICJsb2NrZWRTdWxBY2NvdW50SXNBdHRhY2hlZFRvVGhpcyIsICJ1bmF0dGFjaGVkIiwgImdlbmRlciIsICJfaXRlcmF0b3IxOCIsICJfc3RlcDE4IiwgIl9pdGVyYXRvcjE5IiwgIl9zdGVwMTkiLCAicmVnaXN0cmF0aW9uIiwgIl91c2VyJGVkaXRjb3VudCIsICJlZGl0Y291bnQiLCAidXNlcmNvbnRyaWJzIiwgImJsb2NrcyIsICJyYnN0ciIsICJyYW5nZXN0YXJ0IiwgInJhbmdlZW5kIiwgInJlc3RyaWN0aW9ucyIsICJzcGxpY2UiLCAiX25hdnBvcCIsICJlZGl0cyIsICJzZXR1cERlYnVnZ2luZyIsICJwb3B1cERlYnVnIiwgImNvbnNvbGUiLCAicG9wdXBzSW5zZXJ0SW1hZ2UiLCAiaW1hZ2VpbmZvIiwgImltYWdlcGFnZSIsICJ0aHVtYnVybCIsICJzcmMiLCAibWltZSIsICJkZXNjcmlwdGlvbnVybCIsICJ0b2dnbGVTaXplIiwgInRvZ2dsZVNpemUyIiwgImltZyIsICJmaXJzdENoaWxkIiwgIm1hdGNoZWQiLCAicmVtb3ZlTWF0Y2hlc1VubGVzcyIsICJyZTEiLCAicGFyZW5jb3VudCIsICJyZTIiLCAic2V0TmFtZXNwYWNlcyIsICJzZXRSZWRpcnMiLCAiUiIsICJyZWRpckxpc3RzIiwgImFyIiwgImJlIiwgImJnIiwgImJzIiwgImJuIiwgImNzIiwgImN5IiwgImRlIiwgImVvIiwgImVzIiwgImV0IiwgImdhIiwgImdsIiwgImhlIiwgImh1IiwgImlzIiwgIml0IiwgImphIiwgIm1rIiwgIm5kcyIsICJubCIsICJubiIsICJwbCIsICJwdCIsICJydSIsICJzayIsICJzciIsICJ0dCIsICJ1ayIsICJ2aSIsICJ5aSIsICJ6aCIsICJyZWRpckxpc3QiLCAic2V0SW50ZXJ3aWtpIiwgIndpa2ltZWRpYSIsICJuc1JlIiwgImltYWdlTmFtZXNwYWNlVmFyaWFudHMiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllczIiLCAiX2xvY2FsaXplZE5hbWVzcGFjZUxjIiwgIl9uYW1lc3BhY2VJZCIsICJuc1JlSW1hZ2UiLCAiZ2V0RWRpdGJveFNlbGVjdGlvbiIsICJzZWxlY3Rpb24iLCAiY3JlYXRlUmFuZ2UiLCAic2VsU3RhcnQiLCAic2VsZWN0aW9uU3RhcnQiLCAic2VsRW5kIiwgInNlbGVjdGlvbkVuZCIsICJzZWwiLCAicGlwZSIsICJkb1NlcGFyYXRlU2VsZWN0aW9uUG9wdXAiLCAiTW91c2V0cmFja2VyIiwgImxvb3BEZWxheSIsICJhY3RpdmUiLCAiaG9va3MiLCAicnVuSG9va3MiLCAicmVtb3ZlT2JqIiwgInJlbW92ZUhvb2tzIiwgIm5ld0hvb2tzIiwgInRyYWNrIiwgInBhZ2VYIiwgInBhZ2VZIiwgImRvY0VsdCIsICJkb2N1bWVudEVsZW1lbnQiLCAic2Nyb2xsTGVmdCIsICJzY3JvbGxUb3AiLCAic2V0UG9zaXRpb24iLCAibGFzdEhvb2tfeCIsICJsYXN0SG9va195IiwgImVuYWJsZSIsICJzYXZlZExpc3RlbmVyIiwgInVpZCIsICJub3Nob3ciLCAiY3JlYXRlIiwgInVuaGlkZSIsICJoaWRlIiwgImhvb2tJZHMiLCAiZG93bmxvYWRzIiwgImNvbnN0cmFpbmVkIiwgImhlaWdodCIsICJjcmVhdGVNYWluRGl2IiwgInJlcG9zaXRpb24iLCAibm9MaW1pdEhvciIsICJ0b29XaWRlIiwgInVwZGF0ZURpbWVuc2lvbnMiLCAiY1dpZHRoIiwgImNsaWVudFdpZHRoIiwgIm5hdHVyYWxXaWR0aCIsICJuZXdMZWZ0IiwgInJhaXNlIiwgInpJbmRleCIsICJoaWdoZXN0IiwgInNob3ciLCAidGltZSIsICJzdGFibGVfeCIsICJzdGFibGVfeSIsICJzdGFibGVTaG93IiwgIm5ld194IiwgIm5ld195IiwgImR4IiwgImR5IiwgImZ1enoyIiwgInNob3dTb29uU3RhYmxlVGltZXIiLCAia2V5SG9va3MiLCAiUmVmbGVjdCIsICJhcHBseSIsICJob29rIiwgImhvb2tJZCIsICJfdGhpcyRjbGFzc05hbWUiLCAib25jbGlja0xpc3RlbmVyIiwgInBvc2l0aW9uIiwgIm1pbldpZHRoIiwgImhhbmRsZU5hbWUiLCAic2hpZnRLZXkiLCAiYWJvcnREb3dubG9hZHMiLCAib2Zmc2V0SGVpZ2h0IiwgIl9pdGVyYXRvcjIwIiwgIl9zdGVwMjAiLCAiZGVsRm10IiwgImluc0ZtdCIsICJjb3VudENyb3NzaW5ncyIsICJlamVjdCIsICJyb3ciLCAiX2l0ZXJhdG9yMjEiLCAiX3N0ZXAyMSIsICJzaG9ydGVuRGlmZlN0cmluZyIsICJzaG9ydGVuRGlmZlN0cmluZzIiLCAiY29udGV4dCIsICJkaWZmU3RyaW5nIiwgIm9TcGxpdHRlZCIsICJuU3BsaXR0ZWQiLCAib3V0IiwgImFjYyIsICJtYXhPdXRwdXRQYWlyIiwgInBhaXJlZCIsICJqc1Jlc2VydmVkUHJvcGVydGllcyIsICJkaWZmQnVnQWxlcnQiLCAiZGlmZkJ1Z0FsZXJ0MiIsICJ3b3JkIiwgIm1ha2VEaWZmSGFzaHRhYmxlIiwgIl9zcmMkaSIsICJfcmV0JF9zcmMkaSIsICJvcyIsICJzZXRTaXRlSW5mbyIsICJwb3B1cExvY2FsRGVidWciLCAiaG9zdG5hbWUiLCAid2lraWEiLCAiaXNMb2NhbCIsICJzdGFydHNXaXRoIiwgImNvbW1vbnMiLCAicG9ydCIsICJzaXRlYmFzZSIsICJzZXRVc2VySW5mbyIsICJ1c3VzZXJzIiwgInVzcHJvcCIsICJjYW5SZXZpZXciLCAicmlnaHRzIiwgImZldGNoU3BlY2lhbFBhZ2VOYW1lcyIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJtZXRhIiwgInNpcHJvcCIsICJ1c2VsYW5nIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInNwZWNpYWxwYWdlYWxpYXNlcyIsICJzZXRUaXRsZUJhc2UiLCAicHJvdG9jb2wiLCAiYm90SW50ZXJmYWNlUGF0aCIsICJBUElQYXRoIiwgInRpdGxldGFpbCIsICJ3aWtpYmFzZSIsICJzZXRNYWluUmVnZXgiLCAicmVTdGFydCIsICJwcmVUaXRsZXMiLCAicmVFbmQiLCAiYnVpbGRTcGVjaWFsUGFnZUdyb3VwIiwgInNwZWNpYWxQYWdlT2JqIiwgInZhcmlhbnRzIiwgInJlYWxuYW1lIiwgIl9pdGVyYXRvcjIyIiwgImFsaWFzZXMiLCAiX3N0ZXAyMiIsICJhbGlhcyIsICJzZXRSZWdleHBzIiwgIl9pdGVyYXRvcjIzIiwgIl9zdGVwMjMiLCAic3BlY2lhbHBhZ2UiLCAiaW0iLCAiX3RlbXBsYXRlT2JqZWN0NCIsICJfdGVtcGxhdGVPYmplY3Q1IiwgInNldHVwQ2FjaGUiLCAic2V0TWlzYyIsICJjbGllbnQiLCAic2V0dXBQb3B1cHMyIiwgImNvbXBsZXRlZCIsICJzZXRPcHRpb25zIiwgImRlZmF1bHROYXZsaW5rU3BlYyIsICJfaGludCIsICJleHBhbmRDb25kaXRpb25hbE5hdmxpbmtTdHJpbmciLCAiZXhwYW5kQ29uZGl0aW9uYWxOYXZsaW5rU3RyaW5nMiIsICJyZWN1cnNpb25Db3VudCIsICJjb25kaXRpb25hbFNwbGl0UmVnZXgiLCAibnVtUGFyZW5zIiwgInRlc3RTdHJpbmciLCAidHJ1ZVN0cmluZyIsICJmYWxzZVN0cmluZyIsICJ0ZXN0UmVzdWx0IiwgIm5hdmxpbmtTdHJpbmdUb0FycmF5IiwgIl9pdGVyYXRvcjI0IiwgIl9zdGVwMjQiLCAibmF2bGlua1RhZyIsICJzcyIsICJzc3MiLCAibmF2bGlua1N1YnN0aXR1dGVIVE1MIiwgIm5hdmxpbmtEZXB0aCIsICJtYWdpYyIsICJtZW51ZGVwdGgiLCAibWVudXJvd2RlcHRoIiwgIl9pdGVyYXRvcjI1IiwgIl9zdGVwMjUiLCAiZ2V0TmV3V2luIiwgImdldFByaW50RnVuY3Rpb24iLCAidGFnVHlwZSIsICJwcmludCIsICJzaG9ydGN1dCIsICJhZGRQb3B1cFNob3J0Y3V0IiwgInBvcHVwTGlua3NOZXdXaW5kb3ciLCAibmV3V2luIiwgIm5vUG9wdXAiLCAic3BlY2lhbExpbmsiLCAibWFnaWNXYXRjaExpbmsiLCAidGl0bGVkV2lraUxpbmsiLCAiX3BnJGN1cnJlbnQkbGluayRvcmlnIiwgImFyaW5MaW5rIiwgImVkaXRDb3VudGVyTGluayIsICJlZGl0b3JMaXN0TGluayIsICJ0aXRsZWREaWZmTGluayIsICJtYWdpY0hpc3RvcnlMaW5rIiwgInNpbXBsZVBvcHVwcyIsICJwb3B1cE1lbnVMaW5rIiwgInBvcHVwSGFuZGxlS2V5cHJlc3MiLCAicG9wdXBIYW5kbGVLZXlwcmVzczIiLCAiX2V2dCRrZXlDb2RlIiwgImtleUNvZGUiLCAid2hpY2giLCAibGV0dGVyIiwgImZyb21Db2RlUG9pbnQiLCAic3RhcnRMaW5rIiwgImxhc3RQb3B1cExpbmtTZWxlY3RlZCIsICJwcmV2ZW50RGVmYXVsdCIsICJmb2N1cyIsICJvbGRQb3B1cE9ua2V5cHJlc3MiLCAib25rZXlwcmVzcyIsICJhZGRMaW5rUHJvcGVydHkiLCAicHJvcGVydHkiLCAiZGlmZkRhdGEiLCAib2xkUmV2IiwgIm5ld1JldiIsICJhcGkyIiwgImZyb210aXRsZSIsICJ0b3JlbGF0aXZlIiwgImZyb21yZXYiLCAidG9yZXYiLCAiY29tcGFyZSIsICJmcm9tcmV2aWQiLCAidG9yZXZpZCIsICJhZGRSZXZpZXdMaW5rIiwgImRvbmVEaWZmIiwgInJldmlkcyIsICJzdGFibGVfcmV2aWQiLCAiZmxhZ2dlZCIsICJwYXJhbXMyIiwgInBvc3RXaXRoVG9rZW4iLCAiZmFpbCIsICJfaXRlcmF0b3IyNiIsICJfc3RlcDI2IiwgIl9pMyIsICJfcmV2aXNpb25zIiwgInJldmlzaW9uIiwgImluc2VydERpZmYiLCAicm1Cb3JpbmdMaW5lcyIsICJhYWEiLCAiYmIiLCAiYmJiIiwgInN0cmlwT3V0ZXJDb21tb25MaW5lcyIsICJvbGRsaW5lcyIsICJuZXdsaW5lcyIsICJpbm5lciIsICJ0cnVuY2F0ZWQiLCAicG9wdXBEaWZmTWF4TGluZXMiLCAicG9wdXBEaWZmQ29udGV4dExpbmVzIiwgImxpbmVEaWZmIiwgImxpbmVzMiIsICJvbGRsaW5lczIiLCAibmV3bGluZXMyIiwgImRpZmZEYXRlc1RhYmxlIiwgImRpZmZEYXRlc1RhYmxlUm93IiwgImxhYmVsIiwgImxhc3RNb2RpZmllZERhdGUiLCAicmV2bGluayIsICJnZW5lcmFsTGluayIsICJhY3Rpb25OYW1lIiwgInNhdmVkT2xkaWQiLCAib2xkaWREYXRhIiwgInJldmlzaW9uU3RyaW5nIiwgInJldmVydFN1bW1hcnkiLCAiYmFzZSIsICJjc3NDbGFzcyIsICJkZWZhdWx0TmF2bGlua0NsYXNzbmFtZSIsICJnZW5lcmFsTmF2TGluayIsICJnZXRMYXN0Q29udHJpYiIsICJ3aWtpcGFnZSIsICJnZXRIaXN0b3J5SW5mbyIsICJwcm9jZXNzTGFzdENvbnRyaWJJbmZvIiwgImZpcnN0TmV3RWRpdG9yIiwgImVkaXRvciIsICJuZXdVcmwiLCAiZGlzcGxheVVybCIsICJnZXREaWZmU2luY2VNeUVkaXQiLCAicHJvY2Vzc0RpZmZTaW5jZU15RWRpdCIsICJmcmllbmRseU5hbWUiLCAibXlMYXN0RWRpdCIsICJwdXJnZVBvcHVwcyIsICJwcm9jZXNzQWxsUG9wdXBzIiwgIm51bGxpZnkiLCAiZGlzYWJsZVBvcHVwcyIsICJ0b2dnbGVQcmV2aWV3cyIsICJtYWdpY1dhdGNoTGluazIiLCAiX3RlbXBsYXRlT2JqZWN0NiIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInJlcURhdGEiLCAidGl0bGVzIiwgInVud2F0Y2giLCAibXdUaXRsZSIsICJuZXdGcm9tVGV4dCIsICJtZXNzYWdlTmFtZSIsICJnZXROYW1lc3BhY2VJZCIsICJwYXJzZURvbSIsICJfeDIiLCAiX3gzIiwgImFyZ3VtZW50cyIsICJvbkNsaWNrIiwgIl90ZW1wbGF0ZU9iamVjdDciLCAiX3RlbXBsYXRlT2JqZWN0OCIsICJfbCRzZXAiLCAiYXBwZW5kUGFyYW1zVG9MaW5rIiwgImxpbmtzdHIiLCAiY0EiLCAiY2hzIiwgImN1cnJlbnRBcnRpY2xlUmVnZXhCaXQiLCAiX3RlbXBsYXRlT2JqZWN0OSIsICJfdGVtcGxhdGVPYmplY3QxMCIsICJfdGVtcGxhdGVPYmplY3QxMSIsICJfdGVtcGxhdGVPYmplY3QxMiIsICJsayIsICJhbHNvQ2hhbmdlTGFiZWwiLCAic2FuZUxpbmtDaGVjayIsICJ1TiIsICJ0b29sRGJOYW1lIiwgImNvb2tpZVN0eWxlIiwgInRvb2wiLCAiZGVmYXVsdFRvb2xVcmwiLCAidGhlV2lraSIsICJ3aGF0TmV4dCIsICJnZXRIaXN0b3J5IiwgInByb2Nlc3NIaXN0b3J5IiwgIl9pdGVyYXRvcjI3IiwgIl9zdGVwMjciLCAiZmluaXNoUHJvY2Vzc0hpc3RvcnkiLCAiaGlzdEluZm8iLCAicHJldmlkIiwgImRlZmF1bHRpemUiLCAiX3BnJG9wdGlvbiIsICJfcGckb3B0aW9uJHgiLCAibmV3T3B0aW9uIiwgImRlZiIsICJ2YXJOYW1lIiwgInVzZXJJc1N5c29wIiwgImciLCAiaG91cjEyIiwgIl90ZW1wbGF0ZU9iamVjdDEzIiwgImVkaXRDb3VudGVyTGlua0hpbnQiLCAiYXJpbiIsICJvbiIsICJvbmNlIiwgImR5bmFtaWNDb250ZW50SGFuZGxlciIsICIkY29udGVudCIsICJyZWdpc3Rlckhvb2tzRm9yVmlzaWJsZU5hdnBvcHMiLCAiZG9JdCIsICJlYWNoIiwgIl9pbmRleCIsICJhZGQiLCAiJG92ZXJsYXkiXQp9Cg==
