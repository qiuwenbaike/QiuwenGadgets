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
    if (!a.originalTitle) {
      a.originalTitle = a.title;
    }
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
    if (!onfailure) {
      onfailure = 2;
    }
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
      if (!x) {
        x = {};
      }
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
    if (!classname) {
      classname = emptySpanHTML2.classAliases[name];
    }
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
    if (!when) {
      when = 250;
    }
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
        if (!removal) {
          removal = 1;
        }
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
      if (!dragHandle) {
        dragHandle = this.mainDiv;
      }
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
      if (jsReservedProperties.test(src[i])) {
        src[i] += "<!-- -->";
      }
      if (!ret[src[i]]) {
        ret[src[i]] = [];
      }
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
    if (l.specialpage === void 0 || !l.specialpage) {
      return null;
    }
    const base = "".concat(pg.wiki.titlebase + mw.config.get("wgFormattedNamespaces")[pg.nsSpecialId], ":").concat(l.specialpage);
    if (l.sep === void 0 || l.sep === null) {
      l.sep = "&target=";
    }
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
    if (pg.option[x] === null || pg.option[x] === void 0) {
      pg.option[x] = window[x] === void 0 ? pg.optionDefault[x] : window[x];
    }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05hdmlnYXRpb25fcG9wdXBzL21vZHVsZXMvYXBpLnRzIiwgInNyYy9OYXZpZ2F0aW9uX3BvcHVwcy9tb2R1bGVzL3N0cmluZy50cyIsICJzcmMvTmF2aWdhdGlvbl9wb3B1cHMvbW9kdWxlcy9jb3JlLmpzIiwgInNyYy9OYXZpZ2F0aW9uX3BvcHVwcy9OYXZpZ2F0aW9uX3BvcHVwcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdOYXZpZ2F0aW9uIHBvcHVwcy8xLjAnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgIi8vIFRyYW5zbGF0YWJsZSBzdHJpbmdzXG5jb25zdCBtZXNzYWdlOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcblx0Ly8gc3VtbWFyeSBkYXRhLCBzZWFyY2hpbmcgZXRjLlxuXHRhcnRpY2xlOiB3aW5kb3cud2dVTFMoJ+adoeebricsICfmop3nm64nKSxcblx0Y2F0ZWdvcnk6IHdpbmRvdy53Z1VMUygn5Liq5YiG57G7JywgJ+WAi+WIhumhnicpLFxuXHRjYXRlZ29yaWVzOiB3aW5kb3cud2dVTFMoJ+S4quWIhuexuycsICflgIvliIbpoZ4nKSxcblx0aW1hZ2U6IHdpbmRvdy53Z1VMUygn5Liq5paH5Lu2JywgJ+WAi+aqlOahiCcpLFxuXHRpbWFnZXM6IHdpbmRvdy53Z1VMUygn5Liq5paH5Lu2JywgJ+WAi+aqlOahiCcpLFxuXHRzdHViOiAn5bCP5L2c5ZOBJyxcblx0J3NlY3Rpb24gc3R1Yic6IHdpbmRvdy53Z1VMUygn5bCP56ug6IqCJywgJ+Wwj+eroOevgCcpLFxuXHQnRW1wdHkgcGFnZSc6IHdpbmRvdy53Z1VMUygn56m66aG16Z2iJywgJ+epuumggemdoicpLFxuXHRrQjogd2luZG93LndnVUxTKCfljYPlrZfoioI8c3ViPu+8iOS7pTEwMDDkuLrkuIDov5vvvIk8L3N1Yj4nLCAn5Y2D5L2N5YWD57WEPHN1Yj7vvIjku6UxMDAw54K65LiA6YCy77yJPC9zdWI+JyksXG5cdGJ5dGVzOiB3aW5kb3cud2dVTFMoJ+Wtl+iKgicsICfkvY3lhYPntYQnKSxcblx0ZGF5OiAn5aSpJyxcblx0ZGF5czogJ+WkqScsXG5cdGhvdXI6IHdpbmRvdy53Z1VMUygn5bCP5pe2JywgJ+Wwj+aZgicpLFxuXHRob3Vyczogd2luZG93LndnVUxTKCflsI/ml7YnLCAn5bCP5pmCJyksXG5cdG1pbnV0ZTogJ+WIhicsXG5cdG1pbnV0ZXM6ICfliIYnLFxuXHRzZWNvbmQ6ICfnp5InLFxuXHRzZWNvbmRzOiAn56eSJyxcblx0d2VlazogJ+WRqCcsXG5cdHdlZWtzOiAn5ZGoJyxcblx0bW9udGg6ICfmnIgnLFxuXHRtb250aHM6ICfmnIgnLFxuXHR5ZWFyOiAn5bm0Jyxcblx0eWVhcnM6ICflubQnLFxuXHRzZWFyY2g6IHdpbmRvdy53Z1VMUygn5pCc57SiJywgJ+aQnOWwiycpLFxuXHRTZWFyY2hIaW50OiB3aW5kb3cud2dVTFMoJ+aQnOe0ouWMheWQqyAlcyDnmoTpobXpnaInLCAn5pCc5bCL5YyF5ZCrICVzIOeahOmggemdoicpLFxuXHR3ZWI6ICdCaW5nJyxcblx0Z2xvYmFsOiAn5YWo5Z+fJyxcblx0J21vcmUuLi4nOiAn5pu05aSa4oCm4oCmJyxcblx0Ly8gYXJ0aWNsZS1yZWxhdGVkIGFjdGlvbnMgYW5kIGluZm9cblx0Ly8gKHNvbWUgYWN0aW9ucyBhbHNvIGFwcGx5IHRvIHVzZXIgcGFnZXMpXG5cdGFjdGlvbnM6IHdpbmRvdy53Z1VMUygn5pON5L2cJywgJ+WLleS9nCcpLFxuXHQvLyAvLy8gdmlldyBhcnRpY2xlcyBhbmQgdmlldyB0YWxrXG5cdHBvcHVwc01lbnU6ICdQb3B1cHMnLFxuXHQnZGlzYWJsZSBwcmV2aWV3cyc6IHdpbmRvdy53Z1VMUygn56aB55So6aKE6KeIJywgJ+emgeeUqOmgkOimvScpLFxuXHR0b2dnbGVQcmV2aWV3c0hpbnQ6IHdpbmRvdy53Z1VMUygn5YiH5o2i5pys6aG1IFBvcHVwcyDnmoTpooTop4jlvIDlhbMnLCAn5YiH5o+b5pys6aCBIFBvcHVwcyDnmoTpoJDopr3plovpl5wnKSxcblx0J3RvZ2dsZSBwcmV2aWV3cyc6IHdpbmRvdy53Z1VMUygn5YiH5o2i6aKE6KeI5byA5YWzJywgJ+WIh+aPm+mgkOimvemWi+mXnCcpLFxuXHRyZXNldDogd2luZG93LndnVUxTKCflpI3kvY0nLCAn6KSH5L2NJyksXG5cdGRpc2FibGU6ICfnpoHnlKggUG9wdXBzJyxcblx0ZGlzYWJsZVBvcHVwc0hpbnQ6IHdpbmRvdy53Z1VMUyhcblx0XHQn5Zyo5pys6aG156aB55SoIFBvcHVwc++8jOWIt+aWsOmhtemdouS7pemHjeaWsOWQr+eUqOOAgicsXG5cdFx0J+WcqOacrOmggeemgeeUqCBQb3B1cHPvvIzph43mlrDmlbTnkIbpoIHpnaLku6Xph43mlrDllZ/nlKjjgIInXG5cdCksXG5cdHB1cmdlUG9wdXBzSGludDogd2luZG93LndnVUxTKCflpI3kvY0gUG9wdXBz77yM5riF6Zmk5omA5pyJ57yT5a2Y5pWw5o2u44CCJywgJ+ikh+S9jSBQb3B1cHPvvIzmuIXpmaTmiYDmnInlv6vlj5bos4fmlpnjgIInKSxcblx0UG9wdXBzSGludDogd2luZG93LndnVUxTKCflpI3kvY0gUG9wdXBz77yM5riF6Zmk5omA5pyJ57yT5a2Y5pWw5o2u44CCJywgJ+ikh+S9jSBQb3B1cHPvvIzmuIXpmaTmiYDmnInlv6vlj5bos4fmlpnjgIInKSxcblx0c3BhY2ViYXI6ICfnqbrmoLwnLFxuXHR2aWV3OiB3aW5kb3cud2dVTFMoJ+afpeeciycsICfmqqLoppYnKSxcblx0J3ZpZXcgYXJ0aWNsZSc6IHdpbmRvdy53Z1VMUygn5p+l55yL5p2h55uuJywgJ+aqouimluaineebricpLFxuXHR2aWV3SGludDogd2luZG93LndnVUxTKCfliY3lvoAgJXMnLCAn5YmN5b6AICVzJyksXG5cdHRhbGs6IHdpbmRvdy53Z1VMUygn6K6o6K66JywgJ+iojuirlicpLFxuXHQndGFsayBwYWdlJzogd2luZG93LndnVUxTKCforqjorrrpobUnLCAn6KiO6KuW6aCBJyksXG5cdCd0aGlzJm5ic3A7cmV2aXNpb24nOiB3aW5kb3cud2dVTFMoJ+atpOS/ruiuoueJiOacrCcsICfmraTkv67oqILniYjmnKwnKSxcblx0J3JldmlzaW9uICVzIG9mICVzJzogd2luZG93LndnVUxTKCfpobXpnaIgJDIg55qE5L+u6K6i54mI5pysICQxJywgJ+mggemdoiAkMiDnmoTkv67oqILniYjmnKwgJDEnKSxcblx0J1JldmlzaW9uICVzIG9mICVzJzogd2luZG93LndnVUxTKCfpobXpnaIgJDIg55qE5L+u6K6i54mI5pysICQxJywgJ+mggemdoiAkMiDnmoTkv67oqILniYjmnKwgJDEnKSxcblx0J3RoZSByZXZpc2lvbiBwcmlvciB0byByZXZpc2lvbiAlcyBvZiAlcyc6IHdpbmRvdy53Z1VMUyhcblx0XHQn6aG16Z2iICQyIOeahOS/ruiuoueJiOacrCAkMSDkuYvliY3nmoTkv67orqLniYjmnKwnLFxuXHRcdCfpoIHpnaIgJDIg55qE5L+u6KiC54mI5pysICQxIOS5i+WJjeeahOS/ruiogueJiOacrCdcblx0KSxcblx0J1RvZ2dsZSBpbWFnZSBzaXplJzogd2luZG93LndnVUxTKCfngrnlh7vliIfmjaLlm77niYflpKflsI8nLCAn6bue5pOK5YiH5o+b5ZyW54mH5aSn5bCPJyksXG5cdGRlbDogd2luZG93LndnVUxTKCfliKDpmaQnLCAn5Yig6ZmkJyksXG5cdC8vIC8vLyBkZWxldGUsIHByb3RlY3QsIG1vdmVcblx0ZGVsZXRlOiB3aW5kb3cud2dVTFMoJ+WIoOmZpCcsICfliKDpmaQnKSxcblx0ZGVsZXRlSGludDogd2luZG93LndnVUxTKCfliKDpmaQgJXMnLCAn5Yig6ZmkICVzJyksXG5cdHVuZGVsZXRlU2hvcnQ6IHdpbmRvdy53Z1VMUygn5oGi5aSNJywgJ+aBouW+qScpLFxuXHRVbmRlbGV0ZUhpbnQ6IHdpbmRvdy53Z1VMUygn5oGi5aSNICVzJywgJ+aBouW+qSAlcycpLFxuXHRwcm90ZWN0OiB3aW5kb3cud2dVTFMoJ+S/neaKpCcsICfkv53orbcnKSxcblx0cHJvdGVjdEhpbnQ6IHdpbmRvdy53Z1VMUygn5L+d5oqkICVzJywgJ+S/neittyAlcycpLFxuXHR1bnByb3RlY3RTaG9ydDogd2luZG93LndnVUxTKCfop6PpmaQnLCAn6Kej6ZmkJyksXG5cdHVucHJvdGVjdEhpbnQ6IHdpbmRvdy53Z1VMUygn6Kej6Zmk5a+5ICVzIOeahOS/neaKpCcsICfop6PpmaTlsI0gJXMg55qE5L+d6K23JyksXG5cdG1vdmU6IHdpbmRvdy53Z1VMUygn56e75YqoJywgJ+enu+WLlScpLFxuXHQnbW92ZSBwYWdlJzogd2luZG93LndnVUxTKCfnp7vliqjpobXpnaInLCAn56e75YuV6aCB6Z2iJyksXG5cdE1vdmVwYWdlSGludDogd2luZG93LndnVUxTKCfkv67mlLkgJXMg55qE5qCH6aKYJywgJ+S/ruaUuSAlcyDnmoTmqJnpoYwnKSxcblx0ZWRpdDogd2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvJyksXG5cdC8vIC8vLyBlZGl0IGFydGljbGVzIGFuZCB0YWxrXG5cdCdlZGl0IGFydGljbGUnOiB3aW5kb3cud2dVTFMoJ+e8lui+keadoeebricsICfnt6jovK/mop3nm64nKSxcblx0ZWRpdEhpbnQ6IHdpbmRvdy53Z1VMUygn5L+u5pS5ICVzIOeahOWGheWuuScsICfkv67mlLkgJXMg55qE5YWn5a65JyksXG5cdCdlZGl0IHRhbGsnOiB3aW5kb3cud2dVTFMoJ+e8lui+keiuqOiuuumhtScsICfnt6jovK/lsI3oqbHpoIEnKSxcblx0bmV3OiB3aW5kb3cud2dVTFMoJ+aWsCcsICfmlrAnKSxcblx0J25ldyB0b3BpYyc6IHdpbmRvdy53Z1VMUygn5paw6K+d6aKYJywgJ+aWsOipsemhjCcpLFxuXHRuZXdTZWN0aW9uSGludDogd2luZG93LndnVUxTKCflnKggJXMg5aKe5Yqg5paw55qE6K6o6K666K+d6aKYJywgJ+WcqCAlcyDlop7liqDmlrDnmoToqI7oq5boqbHpoYwnKSxcblx0J251bGwgZWRpdCc6IHdpbmRvdy53Z1VMUygn56m657yW6L6RJywgJ+epuue3qOi8rycpLFxuXHRudWxsRWRpdEhpbnQ6IHdpbmRvdy53Z1VMUygn6L+b6KGM5LiA5qyh5a+5ICVzIOeahOepuue8lui+kScsICfoo73pgKDkuIDmrKHlsI0gJXMg55qE56m657eo6LyvJyksXG5cdGhpc3Q6IHdpbmRvdy53Z1VMUygn5Y6G5Y+yJywgJ+att+WPsicpLFxuXHQvLyAvLy8gaGlzdG9yeSwgZGlmZnMsIGVkaXRvcnMsIHJlbGF0ZWRcblx0aGlzdG9yeTogd2luZG93LndnVUxTKCfljoblj7InLCAn5q235Y+yJyksXG5cdGhpc3RvcnlIaW50OiB3aW5kb3cud2dVTFMoJyVzIOeahOS/ruiuouWOhuWPsicsICclcyDnmoTkv67oqILmrbflj7InKSxcblx0bGFzdDogd2luZG93LndnVUxTKCfkuYvliY0nLCAn5LmL5YmNJyksXG5cdC8vIFtbTWVkaWFXaWtpOkxhc3RdXVxuXHRsYXN0RWRpdDogd2luZG93LndnVUxTKCfmnIDov5Hmm7TmlLknLCAn5pyA6L+R5pu05pS5JyksXG5cdCdzaG93IGxhc3QgZWRpdCc6IHdpbmRvdy53Z1VMUygn5pyA6L+R5LiA5qyh5pu05pS5JywgJ+acgOaWsOS4gOasoeS/ruiogicpLFxuXHQnU2hvdyB0aGUgbGFzdCBlZGl0Jzogd2luZG93LndnVUxTKCfmmL7npLrmnIDov5HkuIDmrKHmm7TmlLnnmoTlt67lvIInLCAn6aGv56S65pyA5paw5LiA5qyh5L+u6KiC55qE5beu55WwJyksXG5cdGxhc3RDb250cmliOiB3aW5kb3cud2dVTFMoJ+acgOi/kee8lui+kScsICfmnIDov5Hnt6jovK8nKSxcblx0J2xhc3Qgc2V0IG9mIGVkaXRzJzogd2luZG93LndnVUxTKCfmnIDov5HnvJbovpEnLCAn5pyA6L+R57eo6LyvJyksXG5cdGxhc3RDb250cmliSGludDogd2luZG93LndnVUxTKCfmmL7npLrnlLHmnIDlkI7kuIDkvY3nvJbovpHogIXpgKDmiJDnmoTlt67lvIInLCAn6aGv56S655Sx5pyA5b6M5LiA5L2N57eo6Lyv6ICF6KO96YCg55qE5beu55WwJyksXG5cdGN1cjogd2luZG93LndnVUxTKCflvZPliY0nLCAn55W25YmNJyksXG5cdGRpZmZDdXI6IHdpbmRvdy53Z1VMUygn5LiO5b2T5YmN54mI5pys55qE5beu5byCJywgJ+iIh+ebruWJjeeJiOacrOeahOW3rueVsCcpLFxuXHQnU2hvdyBjaGFuZ2VzIHNpbmNlIHJldmlzaW9uICVzJzogd2luZG93LndnVUxTKCfmmL7npLroh6rkv67orqLniYjmnKwgJXMg55qE5beu5byCJywgJ+mhr+ekuuiHquS/ruiogueJiOacrCAlcyDnmoTlt67nlbAnKSxcblx0JyVzIG9sZCc6IHdpbmRvdy53Z1VMUygnJXMg5YmN55qE5pyA5ZCO54mI5pysJywgJyVzIOWJjeeahOacgOWQjueJiOacrCcpLFxuXHQvLyBhcyBpbiA0IHdlZWtzIG9sZFxuXHRvbGRFZGl0OiB3aW5kb3cud2dVTFMoJ+aXp+e8lui+kScsICfoiIrnt6jovK8nKSxcblx0cHVyZ2U6IHdpbmRvdy53Z1VMUygn5riF6Zmk57yT5a2YJywgJ+a4hemZpOW/q+WPlicpLFxuXHRwdXJnZUhpbnQ6IHdpbmRvdy53Z1VMUygn5riF6Zmk5pyN5Yqh5Zmo5LitICVzIOeahOe8k+WtmCcsICfmuIXpmaTkvLrmnI3lmajkuK0gJXMg55qE5b+r5Y+WJyksXG5cdHJhdzogd2luZG93LndnVUxTKCfmupDku6PnoIEnLCAn5Y6f5aeL56K8JyksXG5cdHJhd0hpbnQ6IHdpbmRvdy53Z1VMUygn5p+l55yLICVzIOeahOa6kOS7o+eggScsICfmqqLoppYgJXMg55qE5Y6f5aeL56K8JyksXG5cdHJlbmRlcjogd2luZG93LndnVUxTKCfku4XmraPmlocnLCAn5YOF5q2j5paHJyksXG5cdHJlbmRlckhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOe6r0hUTUzop6PmnpDvvIjku4XmraPmloflhoXlrrnvvIknLCAn6aGv56S6ICVzIOeahOe0lEhUTUzop6PmnpDvvIjlg4XmraPmloflhaflrrnvvIknKSxcblx0J1Nob3cgdGhlIGVkaXQgbWFkZSB0byBnZXQgcmV2aXNpb24nOiB3aW5kb3cud2dVTFMoJ+aYvuekuue8lui+keS7peW+l+WIsOS/ruiuoueJiOacrCcsICfpoa/npLrnt6jovK/ku6XlvpfliLDkv67oqILniYjmnKwnKSxcblx0c2luY2VNZTogd2luZG93LndnVUxTKCfoh6rmiJEnLCAn6Ieq5oiRJyksXG5cdCdjaGFuZ2VzIHNpbmNlIG1pbmUnOiB3aW5kb3cud2dVTFMoJ+iHquaIkeS/ruiuoueahOW3ruW8gicsICfoh6rmiJHkv67oqILnmoTlt67nlbAnKSxcblx0c2luY2VNZUhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S66Ieq5oiR5LiK5qyh5L+u5pS55Lul5p2l55qE5beu5byCJywgJ+mhr+ekuuiHquaIkeS4iuasoeS/ruaUueS7peS+hueahOW3rueVsCcpLFxuXHRcIkNvdWxkbid0IGZpbmQgYW4gZWRpdCBieSAlc1xcbmluIHRoZSBsYXN0ICVzIGVkaXRzIHRvXFxuJXNcIjogd2luZG93LndnVUxTKFxuXHRcdCflnKggJDMg5pyA6L+RICQyIOasoee8lui+keS4reaJvuS4jeWIsCAkMSDlgZrlh7rnmoTkv67mlLknLFxuXHRcdCflnKggJDMg5pyA6L+RICQyIOasoee3qOi8r+S4reaJvuS4jeWIsCAkMSDlgZrlh7rnmoTkv67mlLknXG5cdCksXG5cdGVkczogd2luZG93LndnVUxTKCfnvJbovpEnLCAn57eo6LyvJyksXG5cdGVkaXRvcnM6IHdpbmRvdy53Z1VMUygn57yW6L6R6ICFJywgJ+e3qOi8r+iAhScpLFxuXHRlZGl0b3JMaXN0SGludDogd2luZG93LndnVUxTKCfliJflh7rnvJbovpHov4cgJXMg55qE55So5oi3JywgJ+WIl+WHuue3qOi8r+mBjiAlcyDnmoTkvb/nlKjogIUnKSxcblx0cmVsYXRlZDogd2luZG93LndnVUxTKCfnm7jlhbMnLCAn55u46ZecJyksXG5cdHJlbGF0ZWRDaGFuZ2VzOiB3aW5kb3cud2dVTFMoJ+ebuOWFs+abtOaUuScsICfnm7jpl5zmm7TmlLknKSxcblx0J3JlbGF0ZWQgY2hhbmdlcyc6IHdpbmRvdy53Z1VMUygn55u45YWz5pu05pS5JywgJ+ebuOmXnOabtOaUuScpLFxuXHRSZWNlbnRjaGFuZ2VzbGlua2VkSGludDogd2luZG93LndnVUxTKCfmmL7npLrnm7jlhbMgJXMg55qE5L+u5pS5JywgJ+mhr+ekuuebuOmXnCAlcyDnmoTkv67mlLknKSxcblx0ZWRpdE9sZDogd2luZG93LndnVUxTKCfnvJbovpHml6fniYgnLCAn57eo6Lyv6IiK54mIJyksXG5cdC8vIC8vLyBlZGl0IG9sZCB2ZXJzaW9uLCBvciByZXZlcnRcblx0cnY6IHdpbmRvdy53Z1VMUygn5Zue6YCAJywgJ+aBouW+qScpLFxuXHRyZXZlcnQ6IHdpbmRvdy53Z1VMUygn5Zue6YCAJywgJ+aBouW+qScpLFxuXHRyZXZlcnRIaW50OiB3aW5kb3cud2dVTFMoJ+WbnumAgOWIsCAlcycsICfmgaLlvqnliLAgJXMnKSxcblx0dW5kbzogd2luZG93LndnVUxTKCfmkqTplIAnLCAn5pKk6Yq3JyksXG5cdHVuZG9IaW50OiB3aW5kb3cud2dVTFMoJ+aSpOmUgOi/measoee8lui+kScsICfmkqTpirfpgJnmrKHnt6jovK8nKSxcblx0ZGVmYXVsdHBvcHVwUmVkbGlua1N1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn56e76Zmk5Yiw56m66aG16Z2iW1slc11d55qE6ZO+5o6l77yIUG9wdXBz77yJJyxcblx0XHQn56e76Zmk5Yiw56m66aCB6Z2iW1slc11d55qE6YCj57WQ77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBGaXhEYWJzU3VtbWFyeTogd2luZG93LndnVUxTKCfmtojmrafkuYlbWyVzXV3liLBbWyVzXV3vvIhQb3B1cHPvvIknLCAn5raI5q2n576pW1slc11d5YiwW1slc11d77yIUG9wdXBz77yJJyksXG5cdGRlZmF1bHRwb3B1cEZpeFJlZGlyc1N1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn5b+955Wl5LuOW1slc11d5YiwW1slc11d55qE6YeN5a6a5ZCR77yIUG9wdXBz77yJJyxcblx0XHQn5b+955Wl5b6eW1slc11d5YiwW1slc11d55qE6YeN5paw5bCO5ZCR77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBFeHRlbmRlZFJldmVydFN1bW1hcnk6IHdpbmRvdy53Z1VMUyhcblx0XHQn5Zue6YCA5YiwJDLlnKgkMeaXtue8lui+keeahOS/ruiuoueJiOacrCQz77yIUG9wdXBz77yJJyxcblx0XHQn6YKE5Y6f5YiwJDLlnKgkMeaZguijveS9nOeahOS/ruiogueJiOacrCQz77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCflm57pgIDliLDkv67orqLniYjmnKwlc+eahOS4iuS4gOS4queJiOacrO+8iFBvcHVwc++8iScsXG5cdFx0J+mChOWOn+WIsOS/ruiogueJiOacrCVz55qE5LiK5LiA5YCL54mI5pys77yIUG9wdXBz77yJJ1xuXHQpLFxuXHRkZWZhdWx0cG9wdXBSZXZlcnRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoJ+WbnumAgOWIsOS/ruiuoueJiOacrCVz77yIUG9wdXBz77yJJywgJ+mChOWOn+WIsOS/ruiogueJiOacrCVz77yIUG9wdXBz77yJJyksXG5cdGRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCflm57pgIDliLDkv67orqLniYjmnKwkMeeahOS4iuS4gOS4queJiOacrO+8jOeUsSQz5ZyoJDLml7bnvJbovpHvvIhQb3B1cHPvvIknLFxuXHRcdCfpgoTljp/liLDkv67oqILniYjmnKwkMeeahOS4iuS4gOWAi+eJiOacrO+8jOeUsSQz5ZyoJDLmmYLoo73kvZzvvIhQb3B1cHPvvIknXG5cdCksXG5cdGRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoXG5cdFx0J+WbnumAgOWIsCQz5ZyoJDLml7bnvJbovpHnmoTkv67orqLniYjmnKwkMe+8iFBvcHVwc++8iScsXG5cdFx0J+mChOWOn+WIsCQz5ZyoJDLmmYLoo73kvZznmoTkv67oqILniYjmnKwkMe+8iFBvcHVwc++8iSdcblx0KSxcblx0ZGVmYXVsdHBvcHVwUm1EYWJMaW5rU3VtbWFyeTogd2luZG93LndnVUxTKFxuXHRcdCfnp7vpmaTliLDmtojmrafkuYnpobVbWyVzXV3nmoTpk77mjqXvvIhQb3B1cHPvvIknLFxuXHRcdCfnp7vpmaTliLDmtojmrafnvqnpoIFbWyVzXV3nmoTpgKPntZDvvIhQb3B1cHPvvIknXG5cdCksXG5cdFJlZGlyZWN0czogd2luZG93LndnVUxTKCfph43lrprlkJEnLCAn6YeN5a6a5ZCRJyksXG5cdC8vIGFzIGluIFJlZGlyZWN0cyB0byAuLi5cblx0Ly8gXCIgdG8gXCI6IHdpbmRvdy53Z1VMUyggXCLliLBcIixcIuWIsFwiICksXG5cdC8vIGFzIGluIFJlZGlyZWN0cyB0byAuLi5cblx0J0J5cGFzcyByZWRpcmVjdCc6IHdpbmRvdy53Z1VMUygn5b+955Wl6YeN5a6a5ZCRJywgJ+W/veeVpemHjeaWsOWwjuWQkScpLFxuXHQnRml4IHRoaXMgcmVkaXJlY3QnOiB3aW5kb3cud2dVTFMoJ+S/ruWkjemHjeWumuWQkScsICfkv67lvqnph43mlrDlsI7lkJEnKSxcblx0ZGlzYW1iaWc6IHdpbmRvdy53Z1VMUygn5raI5q2n5LmJJywgJ+a2iOatp+e+qScpLFxuXHQvLyAvLy8gYWRkIG9yIHJlbW92ZSBkYWIgZXRjLlxuXHRkaXNhbWJpZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5raI5q2n5LmJ6L+Z5Liq6ZO+5o6l5YiwIFtbJXNdXScsICfmtojmrafnvqnpgJnlgIvpgKPntZDliLAgW1slc11dJyksXG5cdCdDbGljayB0byBkaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvOic6IHdpbmRvdy53Z1VMUygn54K55Ye75Lul5raI5q2n5LmJ6L+Z5Liq6ZO+5o6l5Yiw77yaJywgJ+m7nuaTiuS7pea2iOatp+e+qemAmeWAi+mAo+e1kOWIsO+8micpLFxuXHQncmVtb3ZlIHRoaXMgbGluayc6IHdpbmRvdy53Z1VMUygn56e76Zmk6ZO+5o6lJywgJ+enu+mZpOmAo+e1kCcpLFxuXHQncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnOiB3aW5kb3cud2dVTFMoXG5cdFx0J+enu+mZpOatpOadoeebruWIsOi/memhteeahOaJgOaciemTvuaOpScsXG5cdFx0J+enu+mZpOatpOaineebruWIsOmAmemggeeahOaJgOaciemAo+e1kCdcblx0KSxcblx0J3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBkaXNhbWJpZyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJzogd2luZG93LndnVUxTKFxuXHRcdCfnp7vpmaTmraTmnaHnm67liLDov5nmtojmrafkuYnnmoTmiYDmnInpk77mjqUnLFxuXHRcdCfnp7vpmaTmraTmop3nm67liLDpgJnmtojmrafnvqnnmoTmiYDmnInpgKPntZAnXG5cdCksXG5cdG1haW5saW5rOiB3aW5kb3cud2dVTFMoJ+S4u+mTvuaOpScsICfkuLvpgKPntZAnKSxcblx0Ly8gLy8vIGxpbmtzLCB3YXRjaCwgdW53YXRjaFxuXHR3aWtpTGluazogd2luZG93LndnVUxTKCfkuKrlhoXpg6jpk77mjqUnLCAn5Liq5YWn6YOo6YCj57WQJyksXG5cdHdpa2lMaW5rczogd2luZG93LndnVUxTKCfkuKrlhoXpg6jpk77mjqUnLCAn5Liq5YWn6YOo6YCj57WQJyksXG5cdCdsaW5rcyBoZXJlJzogd2luZG93LndnVUxTKCfpk77lhaUnLCAn6Y+I5YWlJyksXG5cdHdoYXRMaW5rc0hlcmU6IHdpbmRvdy53Z1VMUygn6ZO+5YWl6aG16Z2iJywgJ+mPiOWFpemggemdoicpLFxuXHQnd2hhdCBsaW5rcyBoZXJlJzogd2luZG93LndnVUxTKCfpk77lhaXpobXpnaInLCAn6Y+I5YWl6aCB6Z2iJyksXG5cdFdoYXRsaW5rc2hlcmVIaW50OiB3aW5kb3cud2dVTFMoJ+aYvuekuumTvuaOpeWIsCAlcyDnmoTpobXpnaInLCAn6aGv56S66YCj57WQ5YiwICVzIOeahOmggemdoicpLFxuXHR1bndhdGNoU2hvcnQ6IHdpbmRvdy53Z1VMUygn5Y+W5raIJywgJ+WPlua2iCcpLFxuXHR3YXRjaFRoaW5neTogd2luZG93LndnVUxTKCfnm5Hop4YnLCAn55uj6KaWJyksXG5cdC8vIGNhbGxlZCB3YXRjaFRoaW5neSBiZWNhdXNlIHt9LndhdGNoIGlzIGEgZnVuY3Rpb25cblx0d2F0Y2hIaW50OiB3aW5kb3cud2dVTFMoJ+WKoOWFpSAlcyDliLDmiJHnmoTnm5Hop4bliJfooagnLCAn5Yqg5YWlICVzIOWIsOaIkeeahOebo+imluWIl+ihqCcpLFxuXHR1bndhdGNoSGludDogd2luZG93LndnVUxTKCfku47miJHnmoTnm5Hop4bliJfooajnp7vpmaQgJXMnLCAn5b6e5oiR55qE55uj6KaW5YiX6KGo56e76ZmkICVzJyksXG5cdCdPbmx5IGZvdW5kIG9uZSBlZGl0b3I6ICVzIG1hZGUgJXMgZWRpdHMnOiB3aW5kb3cud2dVTFMoXG5cdFx0J+S7heaJvuWIsOS4gOS9jee8luiAhe+8miVzIOWItumAoOS6hiAlcyDmrKHnvJbovpEnLFxuXHRcdCflg4Xmib7liLDkuIDkvY3nt6jogIXvvJolcyDoo73pgKDkuoYgJXMg5qyh57eo6LyvJ1xuXHQpLFxuXHQnJXMgc2VlbXMgdG8gYmUgdGhlIGxhc3QgZWRpdG9yIHRvIHRoZSBwYWdlICVzJzogd2luZG93LndnVUxTKFxuXHRcdCclcyDnnIvkuIrljrvmmK8gJXMg6L+Z6aG155qE5pyA5ZCO5LiA5L2N57yW6ICFJyxcblx0XHQnJXMg55yL5LiK5Y675pivICVzIOmAmemggeeahOacgOW+jOS4gOS9jee3qOiAhSdcblx0KSxcblx0cnNzOiB3aW5kb3cud2dVTFMoJ1JTUycsICdSU1MnKSxcblx0Ly8gZGlmZiBwcmV2aWV3c1xuXHQnRGlmZiB0cnVuY2F0ZWQgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMnOiB3aW5kb3cud2dVTFMoJ+WHuuS6juaAp+iDveiAg+iZke+8jOW3ruW8guW3suiiq+aIquaWrScsICflh7rmlrzmlYjog73ogIPmha7vvIzlt67nlbDlt7LooqvmiKrmlrcnKSxcblx0J09sZCByZXZpc2lvbic6IHdpbmRvdy53Z1VMUygn5pen54mI5pysJywgJ+iIiueJiOacrCcpLFxuXHQnTmV3IHJldmlzaW9uJzogd2luZG93LndnVUxTKCfmlrDniYjmnKwnLCAn5paw54mI5pysJyksXG5cdCdTb21ldGhpbmcgd2VudCB3cm9uZyA6LSgnOiB3aW5kb3cud2dVTFMoJ+WHuumXrumimOS6hiA6LSgnLCAn5Ye65ZWP6aGM5LqGIDotKCcpLFxuXHQnRW1wdHkgcmV2aXNpb24sIG1heWJlIG5vbi1leGlzdGVudCc6IHdpbmRvdy53Z1VMUygn56m655qE5L+u6K6i77yM5Y+v6IO95bm25LiN5a2Y5ZyoJywgJ+epuueahOS/ruiogu+8jOWPr+iDveS4puS4jeWtmOWcqCcpLFxuXHQnVW5rbm93biBkYXRlJzogd2luZG93LndnVUxTKCfmnKrnn6Xml6XmnJ8nLCAn5pyq55+l5pel5pyfJyksXG5cdC8vIG90aGVyIHNwZWNpYWwgcHJldmlld3Ncblx0J0VtcHR5IGNhdGVnb3J5Jzogd2luZG93LndnVUxTKCfnqbrnmoTliIbnsbsnLCAn56m655qE5YiG6aGeJyksXG5cdCdDYXRlZ29yeSBtZW1iZXJzICglcyBzaG93biknOiB3aW5kb3cud2dVTFMoJ+WIhuexu+aIkOWRmO+8iCVzIOaYvuekuu+8iScsICfliIbpoZ7miJDlk6HvvIglcyDpoa/npLrvvIknKSxcblx0J05vIGltYWdlIGxpbmtzIGZvdW5kJzogd2luZG93LndnVUxTKCfmnKrmib7liLDmlofku7bpk77mjqUnLCAn5pyq5om+5Yiw5qqU5qGI6YCj57WQJyksXG5cdCdGaWxlIGxpbmtzJzogd2luZG93LndnVUxTKCfmlofku7bpk77mjqUnLCAn5qqU5qGI6YCj57WQJyksXG5cdCdub3QgY29tbW9ucyc6IHdpbmRvdy53Z1VMUygn57u05Z+65YWx5Lqr5Lit5peg5q2k5ZCN56ew55qE5paH5Lu244CCJywgJ+e2reWfuuWFseS6q+S4reeEoeatpOWQjeeoseeahOaqlOahiOOAgicpLFxuXHQnY29tbW9ucyBvbmx5Jzogd2luZG93LndnVUxTKCfmraTmlofku7bmnaXoh6rnu7Tln7rlhbHkuqvjgIInLCAn5q2k5qqU5qGI5L6G6Ieq57at5Z+65YWx5Lqr44CCJyksXG5cdCdObyBpbWFnZSBmb3VuZCc6IHdpbmRvdy53Z1VMUygn5om+5LiN5Yiw5paH5Lu2JywgJ+aJvuS4jeWIsOaqlOahiCcpLFxuXHQnY29tbW9ucyBkdXBlJzogd2luZG93LndnVUxTKCfnu7Tln7rlhbHkuqvkuK3lrZjlnKjmraTmlofku7bnmoTlia/mnKzjgIInLCAn57at5Z+65YWx5Lqr5Lit5a2Y5Zyo5q2k5qqU5qGI55qE5Ymv5pys44CCJyksXG5cdCdjb21tb25zIGNvbmZsaWN0Jzogd2luZG93LndnVUxTKCfnu7Tln7rlhbHkuqvkuK3lrZjlnKjmraTmlofku7blkI3np7DkuI3lkIznmoTlia/mnKzjgIInLCAn57at5Z+65YWx5Lqr5Lit5a2Y5Zyo5q2k5qqU5ZCN56ix5LiN5ZCM55qE5Ymv5pys44CCJyksXG5cdC8vIHVzZXItcmVsYXRlZCBhY3Rpb25zIGFuZCBpbmZvXG5cdHVzZXI6IHdpbmRvdy53Z1VMUygn55So5oi3JywgJ+S9v+eUqOiAhScpLFxuXHQvLyAvLy8gdXNlciBwYWdlLCB0YWxrLCBlbWFpbCwgc3BhY2Vcblx0J3VzZXImbmJzcDtwYWdlJzogd2luZG93LndnVUxTKCfnlKjmiLfpobUnLCAn5L2/55So6ICF6aCBJyksXG5cdCd1c2VyIHRhbGsnOiB3aW5kb3cud2dVTFMoJ+eUqOaIt+iuqOiuuicsICfkvb/nlKjogIXlsI3oqbEnKSxcblx0J2VkaXQgdXNlciB0YWxrJzogd2luZG93LndnVUxTKCfnvJbovpHnlKjmiLforqjorronLCAn57eo6Lyv5L2/55So6ICF5bCN6KmxJyksXG5cdCdsZWF2ZSBjb21tZW50Jzogd2luZG93LndnVUxTKCfnlZnoqIAnLCAn55WZ6KiAJyksXG5cdGVtYWlsOiB3aW5kb3cud2dVTFMoJ+eUtemCricsICfpm7vpg7UnKSxcblx0J2VtYWlsIHVzZXInOiB3aW5kb3cud2dVTFMoJ+eUtemCrueUqOaItycsICfpm7vpg7Xkvb/nlKjogIUnKSxcblx0RW1haWx1c2VySGludDogd2luZG93LndnVUxTKCfnu5kgJXMg5Y+R6YCB55S15a2Q6YKu5Lu2JywgJ+e1piAlcyDnmbzpgIHpm7vlrZDpg7Xku7YnKSxcblx0c3BhY2U6IHdpbmRvdy53Z1VMUygn5a2Q6aG16Z2iJywgJ+WtkOmggemdoicpLFxuXHQvLyBzaG9ydCBmb3JtIGZvciB1c2VyU3BhY2UgbGlua1xuXHRQcmVmaXhpbmRleEhpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOeUqOaIt+mhteWtkOmhtemdoicsICfpoa/npLogJXMg55qE5L2/55So6ICF6aCB5a2Q6aCB6Z2iJyksXG5cdGNvdW50OiB3aW5kb3cud2dVTFMoJ+e7n+iuoScsICfntbHoqIgnKSxcblx0Ly8gLy8vIGNvbnRyaWJ1dGlvbnMsIHRyZWUsIGxvZ1xuXHQnZWRpdCBjb3VudGVyJzogd2luZG93LndnVUxTKCfnvJbovpHmrKHmlbAnLCAn57eo6Lyv5qyh5pW4JyksXG5cdGthdGVsaW5rSGludDogd2luZG93LndnVUxTKCclcyDnmoTnvJbovpHmrKHmlbAnLCAnJXMg55qE57eo6Lyv5qyh5pW4JyksXG5cdGNvbnRyaWJzOiB3aW5kb3cud2dVTFMoJ+i0oeeMricsICfosqLnjbsnKSxcblx0Y29udHJpYnV0aW9uczogd2luZG93LndnVUxTKCfotKHnjK4nLCAn6LKi5427JyksXG5cdGRlbGV0ZWRDb250cmliczogd2luZG93LndnVUxTKCflt7LliKDpmaTnmoTotKHnjK4nLCAn5bey5Yiq6Zmk55qE6LKi5427JyksXG5cdENvbnRyaWJ1dGlvbnNIaW50OiB3aW5kb3cud2dVTFMoJyVzIOeahOeUqOaIt+i0oeeMricsICclcyDnmoTkvb/nlKjogIXosqLnjbsnKSxcblx0dHJlZTogd2luZG93LndnVUxTKCfmoJEnLCAn5qi5JyksXG5cdGNvbnRyaWJzVHJlZUhpbnQ6IHdpbmRvdy53Z1VMUygn5qC55o2u5ZCN5a2X56m66Ze05p+l55yLICVzIOeahOi0oeeMricsICfmoLnmk5rlkb3lkI3nqbrplpPmqqLoppYgJXMg55qE6LKi5427JyksXG5cdGxvZzogd2luZG93LndnVUxTKCfml6Xlv5cnLCAn5pel6KqMJyksXG5cdCd1c2VyIGxvZyc6IHdpbmRvdy53Z1VMUygn55So5oi35pel5b+XJywgJ+S9v+eUqOiAheaXpeiqjCcpLFxuXHR1c2VyTG9nSGludDogd2luZG93LndnVUxTKCfmmL7npLogJXMg55qE55So5oi35pel5b+XJywgJ+mhr+ekuiAlcyDnmoTkvb/nlKjogIXml6XoqownKSxcblx0dW5ibG9ja1Nob3J0OiB3aW5kb3cud2dVTFMoJ+ino+mZpCcsICfop6PpmaQnKSxcblx0YmxvY2s6IHdpbmRvdy53Z1VMUygn5bCB56aBJywgJ+WwgemOlicpLFxuXHQnYmxvY2sgdXNlcic6IHdpbmRvdy53Z1VMUygn5bCB56aB55So5oi3JywgJ+WwgemOluS9v+eUqOiAhScpLFxuXHRJcGJsb2NrbGlzdEhpbnQ6IHdpbmRvdy53Z1VMUygn6Kej5bCBICVzJywgJ+ino+WwgSAlcycpLFxuXHRCbG9ja2lwSGludDogd2luZG93LndnVUxTKCflsIHnpoEgJXMnLCAn5bCB6Y6WICVzJyksXG5cdCdibG9jayBsb2cnOiB3aW5kb3cud2dVTFMoJ+WwgeemgeaXpeW/lycsICflsIHpjpbml6XoqownKSxcblx0YmxvY2tMb2dIaW50OiB3aW5kb3cud2dVTFMoJ+aYvuekuiAlcyDnmoTlsIHnpoHml6Xlv5cnLCAn6aGv56S6ICVzIOeahOWwgemOluaXpeiqjCcpLFxuXHRwcm90ZWN0TG9nSGludDogd2luZG93LndnVUxTKCfmmL7npLogJXMg55qE5L+d5oqk5pel5b+XJywgJ+mhr+ekuiAlcyDnmoTkv53orbfml6XoqownKSxcblx0cGFnZUxvZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOaXpeW/lycsICfpoa/npLogJXMg55qE5pel6KqMJyksXG5cdGRlbGV0ZUxvZ0hpbnQ6IHdpbmRvdy53Z1VMUygn5pi+56S6ICVzIOeahOWIoOmZpOaXpeW/lycsICfpoa/npLogJXMg55qE5Yiq6Zmk5pel6KqMJyksXG5cdCdJbnZhbGlkICVzICVzJzogd2luZG93LndnVUxTKCfpgInpobkgJXMg5LiN5Y+v55So77yaJXMnLCAn6YG46aCFICVzIOS4jeWPr+eUqO+8miVzJyksXG5cdG06ICflsI8nLFxuXHQvLyBBdXRvZWRpdGluZ1xuXHQnRW50ZXIgYSBub24tZW1wdHkgZWRpdCBzdW1tYXJ5IG9yIHByZXNzIGNhbmNlbCB0byBhYm9ydCc6IHdpbmRvdy53Z1VMUyhcblx0XHQn6L6T5YWl57yW6L6R5pGY6KaB77yM5oiW5oyJ5Y+W5raI5Lit5q2i5pON5L2cJyxcblx0XHQn6Ly45YWl57eo6Lyv5pGY6KaB77yM5oiW5oyJ5Y+W5raI5Lit5q2i5pON5L2cJ1xuXHQpLFxuXHQnRmFpbGVkIHRvIGdldCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgcGxlYXNlIGVkaXQgbWFudWFsbHkuXFxuXFxuJzogd2luZG93LndnVUxTKFxuXHRcdCfojrflj5bkv67orqLniYjmnKzkv6Hmga/lpLHotKXvvIzor7fmiYvliqjkv67mlLnjgIJcXG5cXG4nLFxuXHRcdCfnjbLlj5bkv67oqILniYjmnKzos4foqIrlpLHmlZfvvIzoq4vmiYvli5Xkv67mlLnjgIJcXG5cXG4nXG5cdCksXG5cdCdUaGUgJXMgYnV0dG9uIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgY2xpY2tlZC4gUGxlYXNlIHdhaXQgZm9yIHRoZSBuZXh0IHBhZ2UgdG8gbG9hZC4nOiB3aW5kb3cud2dVTFMoXG5cdFx0J+aMiemSriAlcyDlt7Looqvoh6rliqjngrnlh7vvvIzor7fnrYnlvoXkuIvkuIDkuKrpobXpnaLliqDovb3jgIInLFxuXHRcdCfmjInpiJUgJXMg5bey6KKr6Ieq5YuV6bue5pOK77yM6KuL562J5b6F5LiL5LiA5YCL6aCB6Z2i6LyJ5YWl44CCJ1xuXHQpLFxuXHQnQ291bGQgbm90IGZpbmQgYnV0dG9uICVzLiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGluIHlvdXIgamF2YXNjcmlwdCBmaWxlLic6IHdpbmRvdy53Z1VMUyhcblx0XHQn5om+5LiN5Yiw5oyJ6ZKuICVz77yM6K+35qOA5p+l5oKoIEphdmFTY3JpcHQg5paH5Lu25Lit55qE6K6+572u44CCJyxcblx0XHQn5om+5LiN5Yiw5oyJ6YiVICVz77yM6KuL5qqi5p+l5oKoIEphdmFTY3JpcHQg5qqU5qGI5Lit55qE6Kit5a6a44CCJ1xuXHQpLFxuXHQvLyBQb3B1cHMgc2V0dXBcblx0J09wZW4gZnVsbC1zaXplIGltYWdlJzogd2luZG93LndnVUxTKCfmn6XnnIvlhajlsLrlr7jlm77lg48nLCAn5qqi6KaW5YWo5bC65a+45b2x5YOPJyksXG5cdC8vIOS7peS4i+WGheWuueeUsSBBbm5BbmdlbGEg6KGl5q2jXG5cdGJpbmdTZWFyY2hIaW50OiB3aW5kb3cud2dVTFMoJ+WcqCBCaW5nIOS4iuaQnOe0ouKAnCVz4oCdJywgJ+WcqCBiaW5nIOS4iuaQnOWwi+OAjCVz44CNJyksXG5cdCdlbmFibGUgcHJldmlld3MnOiB3aW5kb3cud2dVTFMoJ+WQr+eUqOmihOiniCcsICfllZ/nlKjpoJDopr0nKSxcblx0J3Nob3cgcHJldmlldyc6IHdpbmRvdy53Z1VMUygn56aB55So6aKE6KeIJywgJ+emgeeUqOmgkOimvScpLFxuXHRoaXN0b3J5ZmVlZEhpbnQ6IHdpbmRvdy53Z1VMUygn6K+l6aG16Z2i55qE6L+R5pyf5pu05pS5IFJTUyBmZWVkJywgJ+ipsumggemdoueahOi/keacn+abtOaUuSBSU1MgZmVlZCcpLFxuXHQnc2VuZCB0aGFua3MnOiB3aW5kb3cud2dVTFMoJ+WPkemAgeaEn+iwoicsICflgrPpgIHmhJ/orJ0nKSxcblx0VGhhbmtzSGludDogd2luZG93LndnVUxTKCflkJHor6XnlKjmiLflj5HpgIHkuIDlsIHmhJ/osKLmtojmga8nLCAn5ZCR6Kmy5L2/55So6ICF5YKz6YCB5LiA5bCB5oSf6Kyd6KiK5oGvJyksXG5cdCdtYXJrIHBhdHJvbGxlZCc6IHdpbmRvdy53Z1VMUygn5qCH6K6w5Li65bey5beh5p+lJywgJ+aomeiomOeCuuW3suW3oeafpScpLFxuXHRtYXJrcGF0cm9sbGVkSGludDogd2luZG93LndnVUxTKCfmoIforrDor6XnvJbovpHkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY6Kmy57eo6Lyv54K65bey5beh5p+lJyksXG5cdCdDb3VsZCBub3QgbWFya2VkIHRoaXMgZWRpdCBhcyBwYXRyb2xsZWQnOiB3aW5kb3cud2dVTFMoJ+aXoOazleagh+iusOivpee8lui+keS4uuW3suW3oeafpScsICfnhKHms5XmqJnoqJjoqbLnt6jovK/ngrrlt7Llt6Hmn6UnKSxcblx0ZGVmYXVsdHBvcHVwUmV2aWV3ZWRTdW1tYXJ5OiB3aW5kb3cud2dVTFMoJ+agh+iusOS7jueJiOacrCVz5YiwJXPpl7TnmoTnvJbovpHkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY5b6e54mI5pysJXPliLAlc+mWk+eahOe3qOi8r+eCuuW3suW3oeafpScpLFxuXHQnSW1hZ2UgZnJvbSBDb21tb25zJzogd2luZG93LndnVUxTKCfmnaXoh6rnu7Tln7rlhbHkuqvnmoTlm77niYcnLCAn5L6G6Ieq57at5Z+65YWx55So55qE5ZyW54mHJyksXG5cdCdEZXNjcmlwdGlvbiBwYWdlJzogd2luZG93LndnVUxTKCflm77niYfmj4/ov7DpobUnLCAn5ZyW54mH5o+P6L+w6aCBJyksXG5cdCdBbHQgdGV4dDonOiB3aW5kb3cud2dVTFMoJ+abv+aNouaWh+acrO+8iEFsdO+8ie+8micsICfmm7/mj5vmloflrZfvvIhBbHTvvInvvJonKSxcblx0cmV2ZGVsOiB3aW5kb3cud2dVTFMoJ+WOhuWPsueJiOacrOiiq+makOiXjycsICfmrbflj7LniYjmnKzooqvpmrHol48nKSxcblx0RGVsZXRlZGNvbnRyaWJ1dGlvbnNIaW50OiB3aW5kb3cud2dVTFMoJ+eUqOaItyVz55qE6KKr5Yig6Zmk57yW6L6R5qyh5pWwJywgJ+S9v+eUqOiAhSVz55qE6KKr5Yiq6Zmk57eo6Lyv5qyh5pW4JyksXG5cdCdObyBiYWNrbGlua3MgZm91bmQnOiB3aW5kb3cud2dVTFMoJ+aJvuS4jeWIsOmTvuWFpemhtemdoicsICfmib7kuI3liLDpj4jlhaXpoIHpnaInKSxcblx0JyBhbmQgbW9yZSc6IHdpbmRvdy53Z1VMUygn5Lul5Y+K5YW25LuW6aG16Z2iJywgJ+S7peWPiuWFtuS7lumggemdoicpLFxuXHQnRG93bmxvYWQgcHJldmlldyBkYXRhJzogd2luZG93LndnVUxTKCfkuIvovb3pooTop4jmlbDmja4nLCAn5LiL6LyJ6aCQ6Ka96LOH5paZJyksXG5cdCdOb3QgYSByZWdpc3RlcmVkIHVzZXJuYW1lJzogd2luZG93LndnVUxTKCfpnZ7lt7Lms6jlhoznmoTnlKjmiLcnLCAn6Z2e5bey6Ki75YaK55qE5L2/55So6ICFJyksXG5cdEJMT0NLRUQ6IHdpbmRvdy53Z1VMUygn6KKr5bCB56aBJywgJ+iiq+WwgemOlicpLFxuXHQnSGFzIGJsb2Nrcyc6IHdpbmRvdy53Z1VMUygn6KKr6YOo5YiG5bCB56aBJywgJ+iiq+mDqOWIhuWwgemOlicpLFxuXHQnIGVkaXRzIHNpbmNlOiAnOiB3aW5kb3cud2dVTFMoJ+asoee8lui+ke+8jOazqOWGjOaXpeacn+S4uicsICfmrKHnt6jovK/vvIzoqLvlhorml6XmnJ/ngronKSxcblx0J2xhc3QgZWRpdCBvbiAnOiB3aW5kb3cud2dVTFMoJ+acgOWQjuS4gOasoee8lui+keS6jicsICfmnIDlvozkuIDmrKHnt6jovK/mlrwnKSxcblx0RW1haWxVc2VySGludDogd2luZG93LndnVUxTKCfnu5kgJXMg5Y+R6YCB55S15a2Q6YKu5Lu2JywgJ+e1piAlcyDnmbzpgIHpm7vlrZDpg7Xku7YnKSxcblx0UkFOR0VCTE9DS0VEOiB3aW5kb3cud2dVTFMoJ0lQ5q616KKr5bCB56aBJywgJ0lQ5q616KKr5bCB6Y6WJyksXG5cdCdJUCB1c2VyJzogd2luZG93LndnVUxTKCdJUOeUqOaItycsICdJUOS9v+eUqOiAhScpLFxuXHQn4pmAJzogJ+KZgCcsXG5cdCfimYInOiAn4pmCJyxcblx0SElEREVOOiB3aW5kb3cud2dVTFMoJ+WFqOWfn+makOiXjycsICflhajln5/pmrHol48nKSxcblx0TE9DS0VEOiB3aW5kb3cud2dVTFMoJ+WFqOWfn+mUgeWumicsICflhajln5/pjpblrponKSxcblx0J0ludmFsaWQgdXNlcic6IHdpbmRvdy53Z1VMUygn6Z2e5rOV55So5oi35ZCNJywgJ+mdnuazleS9v+eUqOiAheWQjeeosScpLFxuXHRkaWZmOiB3aW5kb3cud2dVTFMoJ+W3ruW8gicsICflt67nlbAnKSxcblx0JyB0byAnOiAn6IezJyxcblxuXHRhdXRvZWRpdF92ZXJzaW9uOiAnbnAyMDE0MDQxNicsXG5cdFByZWZpeEluZGV4SGludDogd2luZG93LndnVUxTKCfmmL7npLrnlKjmiLclc+eahOWtkOmhtemdoicsICfpoa/npLrkvb/nlKjogIUlc+eahOWtkOmggemdoicpLFxuXHRudWxsRWRpdFN1bW1hcnk6IHdpbmRvdy53Z1VMUygn6L+b6KGM5LiA5qyh6Zu257yW6L6RJywgJ+mAsuihjOS4gOasoembtue3qOi8rycpLFxuXHQvLyDnlKjmiLfnu4TlkI3np7Dku47ns7vnu5/mtojmga/ojrflj5Zcblx0J2dyb3VwLW5vLWF1dG9jb25maXJtZWQnOiB3aW5kb3cud2dVTFMoJ+mdnuiHquWKqOehruiupOeUqOaItycsICfpnZ7oh6rli5Xnorroqo3kvb/nlKjogIUnKSxcblx0c2VwYXJhdG9yOiAn44CBJyxcblx0Y29tbWE6ICfvvIwnLFxufTtcblxuZXhwb3J0IHttZXNzYWdlfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7bWVzc2FnZX0gZnJvbSAnLi9zdHJpbmcnO1xuXG5jb25zdCBwb3B1cHMgPSAoKSA9PiB7XG5cdC8vIFNUQVJURklMRTogbWFpbi5qc1xuXHQvLyBGaXggbGF0ZXJcblx0Ly8gR2xvYmFsc1xuXHQvL1xuXHQvLyBUcnlpbmcgdG8gc2hvdmUgYXMgbWFueSBvZiB0aGVzZSBhcyBwb3NzaWJsZSBpbnRvIHRoZSBwZyAocG9wdXAgZ2xvYmFscykgb2JqZWN0XG5cdGNvbnN0IHBnID0ge1xuXHRcdGFwaToge30sXG5cdFx0cmU6IHt9LFxuXHRcdG5zOiB7fSxcblx0XHRzdHJpbmc6IHt9LFxuXHRcdHdpa2k6IHt9LFxuXHRcdHVzZXI6IHt9LFxuXHRcdG1pc2M6IHt9LFxuXHRcdG9wdGlvbjoge30sXG5cdFx0b3B0aW9uRGVmYXVsdDoge30sXG5cdFx0ZmxhZzoge30sXG5cdFx0Y2FjaGU6IHt9LFxuXHRcdHN0cnVjdHVyZXM6IHt9LFxuXHRcdHRpbWVyOiB7fSxcblx0XHRjb3VudGVyOiB7fSxcblx0XHRjdXJyZW50OiB7fSxcblx0XHRmbjoge30sXG5cdFx0ZW5kb2ZsaXN0OiBudWxsLFxuXHR9O1xuXHQvKiBCYWlsIGlmIHRoZSBnYWRnZXQvc2NyaXB0IGlzIGJlaW5nIGxvYWRlZCB0d2ljZSAqL1xuXHQvKiBBbiBlbGVtZW50IHdpdGggaWQgXCJwZ1wiIHdvdWxkIGFkZCBhIHdpbmRvdy5wZyBwcm9wZXJ0eSwgaWdub3JlIHN1Y2ggcHJvcGVydHkgKi9cblx0aWYgKHdpbmRvdy5wZyAmJiAhKHdpbmRvdy5wZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvKiBFeHBvcnQgdG8gZ2xvYmFsIGNvbnRleHQgKi9cblx0d2luZG93LnBnID0gcGc7XG5cdC8vIEVOREZJTEU6IG1haW4uanNcblx0Ly8gU1RBUlRGSUxFOiBhY3Rpb25zLmpzXG5cdGNvbnN0IHNldHVwVG9vbHRpcHMgPSAoY29udGFpbmVyLCByZW1vdmUsIGZvcmNlLCBwb3BEYXRhKSA9PiB7XG5cdFx0bG9nKGBzZXR1cFRvb2x0aXBzLCBjb250YWluZXI9JHtjb250YWluZXJ9LCByZW1vdmU9JHtyZW1vdmV9YCk7XG5cdFx0aWYgKCFjb250YWluZXIpIHtcblx0XHRcdC8vIHRoZSBtYWluIGluaXRpYWwgY2FsbFxuXHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwT25FZGl0U2VsZWN0aW9uJykgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuZWRpdGZvcm0gJiYgZG9jdW1lbnQuZWRpdGZvcm0ud3BUZXh0Ym94MSkge1xuXHRcdFx0XHRkb2N1bWVudC5lZGl0Zm9ybS53cFRleHRib3gxLm9ubW91c2V1cCA9IGRvU2VsZWN0aW9uUG9wdXA7XG5cdFx0XHR9XG5cdFx0XHQvLyBhcnRpY2xlL2NvbnRlbnQgaXMgYSBzdHJ1Y3R1cmUtZGVwZW5kZW50IHRoaW5nXG5cdFx0XHRjb250YWluZXIgPSBkZWZhdWx0UG9wdXBzQ29udGFpbmVyKCk7XG5cdFx0fVxuXHRcdGlmICghcmVtb3ZlICYmICFmb3JjZSAmJiBjb250YWluZXIucmFuU2V0dXBUb29sdGlwc0FscmVhZHkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29udGFpbmVyLnJhblNldHVwVG9vbHRpcHNBbHJlYWR5ID0gIXJlbW92ZTtcblx0XHRjb25zdCBhbmNob3JzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRzZXR1cFRvb2x0aXBzTG9vcChhbmNob3JzLCAwLCAyNTAsIDEwMCwgcmVtb3ZlLCBwb3BEYXRhKTtcblx0fTtcblx0Y29uc3QgZGVmYXVsdFBvcHVwc0NvbnRhaW5lciA9ICgpID0+IHtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBPbmx5QXJ0aWNsZUxpbmtzJykpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2luLXZlY3Rvci0yMDIyIC52ZWN0b3ItYm9keScpIHx8XG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtd19jb250ZW50JykgfHxcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKSB8fFxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJ0aWNsZScpIHx8XG5cdFx0XHRcdGRvY3VtZW50XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gZG9jdW1lbnQ7XG5cdH07XG5cdGNvbnN0IHNldHVwVG9vbHRpcHNMb29wID0gZnVuY3Rpb24gc2V0dXBUb29sdGlwc0xvb3AoYW5jaG9ycywgYmVnaW4sIGhvd21hbnksIHNsZWVwLCByZW1vdmUsIHBvcERhdGEsIC4uLmFyZ3MpIHtcblx0XHRsb2coXG5cdFx0XHRzaW1wbGVQcmludGYoJ3NldHVwVG9vbHRpcHNMb29wKCVzLCVzLCVzLCVzLCVzKScsIFtcblx0XHRcdFx0YW5jaG9ycyxcblx0XHRcdFx0YmVnaW4sXG5cdFx0XHRcdGhvd21hbnksXG5cdFx0XHRcdHNsZWVwLFxuXHRcdFx0XHRyZW1vdmUsXG5cdFx0XHRcdHBvcERhdGEsXG5cdFx0XHRcdC4uLmFyZ3MsXG5cdFx0XHRdKVxuXHRcdCk7XG5cdFx0Y29uc3QgZmluaXNoID0gYmVnaW4gKyBob3dtYW55O1xuXHRcdGNvbnN0IGxvb3BlbmQgPSBNYXRoLm1pbihmaW5pc2gsIGFuY2hvcnMubGVuZ3RoKTtcblx0XHRsZXQgaiA9IGxvb3BlbmQgLSBiZWdpbjtcblx0XHRsb2coXG5cdFx0XHRgc2V0dXBUb29sdGlwczogYW5jaG9ycy5sZW5ndGg9JHthbmNob3JzLmxlbmd0aH0sIGJlZ2luPSR7YmVnaW59LCBob3dtYW55PSR7aG93bWFueX0sIGxvb3BlbmQ9JHtsb29wZW5kfSwgcmVtb3ZlPSR7cmVtb3ZlfWBcblx0XHQpO1xuXHRcdGNvbnN0IGRvVG9vbHRpcCA9IHJlbW92ZSA/IHJlbW92ZVRvb2x0aXAgOiBhZGRUb29sdGlwO1xuXHRcdC8vIHRyeSBhIGZhc3RlciAoPykgbG9vcCBjb25zdHJ1Y3Rcblx0XHRpZiAoaiA+IDApIHtcblx0XHRcdGRvIHtcblx0XHRcdFx0Y29uc3QgYSA9IGFuY2hvcnNbbG9vcGVuZCAtIGpdO1xuXHRcdFx0XHRpZiAoYSA9PT0gdW5kZWZpbmVkIHx8ICFhIHx8ICFhLmhyZWYpIHtcblx0XHRcdFx0XHRsb2coYGdvdCBudWxsIGFuY2hvciBhdCBpbmRleCAke2xvb3BlbmR9YCAtIGopO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRvVG9vbHRpcChhLCBwb3BEYXRhKTtcblx0XHRcdH0gd2hpbGUgKC0taik7XG5cdFx0fVxuXHRcdGlmIChmaW5pc2ggPCBhbmNob3JzLmxlbmd0aCkge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldHVwVG9vbHRpcHNMb29wKGFuY2hvcnMsIGZpbmlzaCwgaG93bWFueSwgc2xlZXAsIHJlbW92ZSwgcG9wRGF0YSk7XG5cdFx0XHR9LCBzbGVlcCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghcmVtb3ZlICYmICFnZXRWYWx1ZU9mKCdwb3B1cFRvY0xpbmtzJykpIHtcblx0XHRcdFx0cm1Ub2NUb29sdGlwcygpO1xuXHRcdFx0fVxuXHRcdFx0cGcuZmxhZy5maW5pc2hlZExvYWRpbmcgPSB0cnVlO1xuXHRcdH1cblx0fTtcblx0Ly8gZWxpbWluYXRlIHBvcHVwcyBmcm9tIHRoZSBUT0Ncblx0Ly8gVGhpcyBhbHNvIGtpbGxzIGFueSBvbmNsaWNrIHN0dWZmIHRoYXQgdXNlZCB0byBiZSBnb2luZyBvbiBpbiB0aGUgdG9jXG5cdGNvbnN0IHJtVG9jVG9vbHRpcHMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9jID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvYycpO1xuXHRcdGlmICh0b2MpIHtcblx0XHRcdGNvbnN0IHRvY0xpbmtzID0gdG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRcdGNvbnN0IHRvY0xlbiA9IHRvY0xpbmtzLmxlbmd0aDtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdG9jTGVuOyArK2opIHtcblx0XHRcdFx0cmVtb3ZlVG9vbHRpcCh0b2NMaW5rc1tqXSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBhZGRUb29sdGlwID0gKGEsIHBvcERhdGEpID0+IHtcblx0XHRpZiAoIWlzUG9wdXBMaW5rKGEpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGEub25tb3VzZW92ZXIgPSBtb3VzZU92ZXJXaWtpTGluaztcblx0XHRhLm9ubW91c2VvdXQgPSBtb3VzZU91dFdpa2lMaW5rO1xuXHRcdGEub25tb3VzZWRvd24gPSBraWxsUG9wdXA7XG5cdFx0YS5oYXNQb3B1cCA9IHRydWU7XG5cdFx0YS5wb3BEYXRhID0gcG9wRGF0YTtcblx0fTtcblx0Y29uc3QgcmVtb3ZlVG9vbHRpcCA9IChhKSA9PiB7XG5cdFx0aWYgKCFhLmhhc1BvcHVwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGEub25tb3VzZW92ZXIgPSBudWxsO1xuXHRcdGEub25tb3VzZW91dCA9IG51bGw7XG5cdFx0aWYgKGEub3JpZ2luYWxUaXRsZSkge1xuXHRcdFx0YS50aXRsZSA9IGEub3JpZ2luYWxUaXRsZTtcblx0XHR9XG5cdFx0YS5oYXNQb3B1cCA9IGZhbHNlO1xuXHR9O1xuXHRjb25zdCByZW1vdmVUaXRsZSA9IChhKSA9PiB7XG5cdFx0aWYgKCFhLm9yaWdpbmFsVGl0bGUpIHtcblx0XHRcdGEub3JpZ2luYWxUaXRsZSA9IGEudGl0bGU7XG5cdFx0fVxuXHRcdGEudGl0bGUgPSAnJztcblx0fTtcblx0Y29uc3QgcmVzdG9yZVRpdGxlID0gKGEpID0+IHtcblx0XHRpZiAoYS50aXRsZSB8fCAhYS5vcmlnaW5hbFRpdGxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGEudGl0bGUgPSBhLm9yaWdpbmFsVGl0bGU7XG5cdH07XG5cdGNvbnN0IHJlZ2lzdGVySG9va3MgPSAobnApID0+IHtcblx0XHRjb25zdCBwb3B1cE1heFdpZHRoID0gZ2V0VmFsdWVPZigncG9wdXBNYXhXaWR0aCcpO1xuXHRcdGlmICh0eXBlb2YgcG9wdXBNYXhXaWR0aCA9PT0gJ251bWJlcicpIHtcblx0XHRcdGNvbnN0IHNldE1heFdpZHRoID0gKCkgPT4ge1xuXHRcdFx0XHRucC5tYWluRGl2LnN0eWxlLm1heFdpZHRoID0gYCR7cG9wdXBNYXhXaWR0aH1weGA7XG5cdFx0XHRcdG5wLm1heFdpZHRoID0gcG9wdXBNYXhXaWR0aDtcblx0XHRcdH07XG5cdFx0XHRucC5hZGRIb29rKHNldE1heFdpZHRoLCAndW5oaWRlJywgJ2JlZm9yZScpO1xuXHRcdH1cblx0XHRucC5hZGRIb29rKGFkZFBvcHVwU2hvcnRjdXRzLCAndW5oaWRlJywgJ2FmdGVyJyk7XG5cdFx0bnAuYWRkSG9vayhybVBvcHVwU2hvcnRjdXRzLCAnaGlkZScsICdiZWZvcmUnKTtcblx0fTtcblx0Y29uc3QgcmVtb3ZlTW9kaWZpZXJLZXlMaXN0ZW5lciA9IChhKSA9PiB7XG5cdFx0Ly8gcmVtb3ZlIGxpc3RlbmVycyBmb3IgbW9kaWZpZXIga2V5IGlmIGFueSB0aGF0IHdlcmUgYWRkZWQgaW4gbW91c2VPdmVyV2lraUxpbmtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYS5tb2RpZmllcktleUxpc3RlbmVyLCBmYWxzZSk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBhLm1vZGlmaWVyS2V5TGlzdGVuZXIsIGZhbHNlKTtcblx0fTtcblx0Y29uc3QgbW91c2VPdmVyV2lraUxpbmsgPSBmdW5jdGlvbiBtb3VzZU92ZXJXaWtpTGluayhldnQpIHtcblx0XHRpZiAoIWV2dCAmJiB3aW5kb3cuZXZlbnQpIHtcblx0XHRcdGV2dCA9IHdpbmRvdy5ldmVudDtcblx0XHR9XG5cdFx0Ly8gaWYgdGhlIG1vZGlmaWVyIGlzIG5lZWRlZCwgbGlzdGVuIGZvciBpdCxcblx0XHQvLyB3ZSB3aWxsIHJlbW92ZSB0aGUgbGlzdGVuZXIgd2hlbiB3ZSBtb3VzZW91dCBvZiB0aGlzIGxpbmsgb3Iga2lsbCBwb3B1cC5cblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBNb2RpZmllcicpKSB7XG5cdFx0XHQvLyBpZiBwb3B1cE1vZGlmaWVyQWN0aW9uID0gZW5hYmxlLCB3ZSBzaG91bGQgcG9wdXAgd2hlbiB0aGUgbW9kaWZpZXIgaXMgcHJlc3NlZFxuXHRcdFx0Ly8gaWYgcG9wdXBNb2RpZmllckFjdGlvbiA9IGRpc2FibGUsIHdlIHNob3VsZCBwb3B1cCB1bmxlc3MgdGhlIG1vZGlmaWVyIGlzIHByZXNzZWRcblx0XHRcdGNvbnN0IGFjdGlvbiA9IGdldFZhbHVlT2YoJ3BvcHVwTW9kaWZpZXJBY3Rpb24nKTtcblx0XHRcdGNvbnN0IGtleSA9IGFjdGlvbiA9PT0gJ2Rpc2FibGUnID8gJ2tleXVwJyA6ICdrZXlkb3duJztcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2VsZi5tb2RpZmllcktleUxpc3RlbmVyID0gKGV2dCkgPT4ge1xuXHRcdFx0XHRtb3VzZU92ZXJXaWtpTGluazIoc2VsZiwgZXZ0KTtcblx0XHRcdH07XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGtleSwgc2VsZi5tb2RpZmllcktleUxpc3RlbmVyLCBmYWxzZSk7XG5cdFx0fVxuXHRcdHJldHVybiBtb3VzZU92ZXJXaWtpTGluazIodGhpcywgZXZ0KTtcblx0fTtcblx0LyoqXG5cdCAqIEdldHMgdGhlIHJlZmVyZW5jZXMgbGlzdCBpdGVtIHRoYXQgdGhlIHByb3ZpZGVkIGZvb3Rub3RlIGxpbmsgdGFyZ2V0cy4gVGhpc1xuXHQgKiBpcyB0eXBpY2FsbHkgYSBsaSBlbGVtZW50IHdpdGhpbiB0aGUgb2wucmVmZXJlbmNlcyBlbGVtZW50IGluc2lkZSB0aGUgcmVmbGlzdC5cblx0ICpcblx0ICogQHBhcmFtIHtFbGVtZW50fSBhIC0gQSBmb290bm90ZSBsaW5rLlxuXHQgKiBAcmV0dXJuIHtFbGVtZW50fGJvb2xlYW59IFRoZSB0YXJnZXRlZCBlbGVtZW50LCBvciBmYWxzZSBpZiBvbmUgY2FuJ3QgYmUgZm91bmQuXG5cdCAqL1xuXHRjb25zdCBmb290bm90ZVRhcmdldCA9IChhKSA9PiB7XG5cdFx0Y29uc3QgYVRpdGxlID0gVGl0bGUuZnJvbUFuY2hvcihhKTtcblx0XHQvLyBXZSB3YW50IFwiLjNBXCIgcmF0aGVyIHRoYW4gXCIlM0FcIiBvciBcIj9cIiBoZXJlLCBzbyB1c2UgdGhlIGFuY2hvciBwcm9wZXJ0eSBkaXJlY3RseVxuXHRcdGNvbnN0IGFuY2ggPSBhVGl0bGUuYW5jaG9yO1xuXHRcdGlmICghL14oY2l0ZV9ub3RlLXxfbm90ZS18ZW5kbm90ZSkvLnRlc3QoYW5jaCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgbFRpdGxlID0gVGl0bGUuZnJvbVVSTChsb2NhdGlvbi5ocmVmKTtcblx0XHRpZiAobFRpdGxlLnRvU3RyaW5nKHRydWUpICE9PSBhVGl0bGUudG9TdHJpbmcodHJ1ZSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0bGV0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YW5jaH1gKTtcblx0XHR3aGlsZSAoZWwgJiYgdHlwZW9mIGVsLm5vZGVOYW1lID09PSAnc3RyaW5nJykge1xuXHRcdFx0Y29uc3QgbnQgPSBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aWYgKG50ID09PSAnbGknKSB7XG5cdFx0XHRcdHJldHVybiBlbDtcblx0XHRcdH0gZWxzZSBpZiAobnQgPT09ICdib2R5Jykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9IGVsc2UgaWYgKGVsLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0ZWwgPSBlbC5wYXJlbnROb2RlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGNvbnN0IGZvb3Rub3RlUHJldmlldyA9ICh4LCBuYXZwb3ApID0+IHtcblx0XHRzZXRQb3B1cEhUTUwoYDxocj4ke3guaW5uZXJIVE1MfWAsICdwb3B1cFByZXZpZXcnLCBuYXZwb3AuaWROdW1iZXIpO1xuXHR9O1xuXHRjb25zdCBtb2RpZmllclByZXNzZWQgPSAoZXZ0KSA9PiB7XG5cdFx0Y29uc3QgbW9kID0gZ2V0VmFsdWVPZigncG9wdXBNb2RpZmllcicpO1xuXHRcdGlmICghbW9kKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghZXZ0ICYmIHdpbmRvdy5ldmVudCkge1xuXHRcdFx0ZXZ0ID0gd2luZG93LmV2ZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gZXZ0ICYmIG1vZCAmJiBldnRbYCR7bW9kLnRvTG93ZXJDYXNlKCl9S2V5YF07XG5cdH07XG5cdC8vIENoZWNrcyBpZiB0aGUgY29ycmVjdCBtb2RpZmllciBwcmVzc2VkL3VucHJlc3NlZCBpZiBuZWVkZWRcblx0Y29uc3QgaXNDb3JyZWN0TW9kaWZpZXIgPSAoX2EsIGV2dCkgPT4ge1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBNb2RpZmllcicpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Ly8gaWYgcG9wdXBNb2RpZmllckFjdGlvbiA9IGVuYWJsZSwgd2Ugc2hvdWxkIHBvcHVwIHdoZW4gdGhlIG1vZGlmaWVyIGlzIHByZXNzZWRcblx0XHQvLyBpZiBwb3B1cE1vZGlmaWVyQWN0aW9uID0gZGlzYWJsZSwgd2Ugc2hvdWxkIHBvcHVwIHVubGVzcyB0aGUgbW9kaWZpZXIgaXMgcHJlc3NlZFxuXHRcdGNvbnN0IGFjdGlvbiA9IGdldFZhbHVlT2YoJ3BvcHVwTW9kaWZpZXJBY3Rpb24nKTtcblx0XHRyZXR1cm4gKGFjdGlvbiA9PT0gJ2VuYWJsZScgJiYgbW9kaWZpZXJQcmVzc2VkKGV2dCkpIHx8IChhY3Rpb24gPT09ICdkaXNhYmxlJyAmJiAhbW9kaWZpZXJQcmVzc2VkKGV2dCkpO1xuXHR9O1xuXHRjb25zdCBtb3VzZU92ZXJXaWtpTGluazIgPSAoYSwgZXZ0KSA9PiB7XG5cdFx0aWYgKCFpc0NvcnJlY3RNb2RpZmllcihhLCBldnQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChnZXRWYWx1ZU9mKCdyZW1vdmVUaXRsZXMnKSkge1xuXHRcdFx0cmVtb3ZlVGl0bGUoYSk7XG5cdFx0fVxuXHRcdGlmIChhID09PSBwZy5jdXJyZW50LmxpbmsgJiYgYS5uYXZwb3B1cCAmJiBhLm5hdnBvcHVwLmlzVmlzaWJsZSgpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHBnLmN1cnJlbnQubGluayA9IGE7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3NpbXBsZVBvcHVwcycpICYmICFwZy5vcHRpb24ucG9wdXBTdHJ1Y3R1cmUpIHtcblx0XHRcdC8vIHJlc2V0ICpkZWZhdWx0IHZhbHVlKiBvZiBwb3B1cFN0cnVjdHVyZVxuXHRcdFx0c2V0RGVmYXVsdCgncG9wdXBTdHJ1Y3R1cmUnLCAnb3JpZ2luYWwnKTtcblx0XHR9XG5cdFx0Y29uc3QgYXJ0aWNsZSA9IG5ldyBUaXRsZSgpLmZyb21BbmNob3IoYSk7XG5cdFx0Ly8gc2V0IGdsb2JhbCB2YXJpYWJsZSAodWdoKSB0byBob2xkIGFydGljbGUgKHdpa2lwYWdlKVxuXHRcdHBnLmN1cnJlbnQuYXJ0aWNsZSA9IGFydGljbGU7XG5cdFx0aWYgKCFhLm5hdnBvcHVwKSB7XG5cdFx0XHRhLm5hdnBvcHVwID0gbmV3TmF2cG9wdXAoYSwgYXJ0aWNsZSk7XG5cdFx0XHRwZy5jdXJyZW50LmxpbmtzSGFzaFthLmhyZWZdID0gYS5uYXZwb3B1cDtcblx0XHRcdHBnLmN1cnJlbnQubGlua3MucHVzaChhKTtcblx0XHR9XG5cdFx0aWYgKGEubmF2cG9wdXAucGVuZGluZyA9PT0gbnVsbCB8fCBhLm5hdnBvcHVwLnBlbmRpbmcgIT09IDApIHtcblx0XHRcdC8vIGVpdGhlciBmcmVzaCBwb3B1cHMgb3IgdGhvc2Ugd2l0aCB1bmZpbnNoZWQgYnVzaW5lc3MgYXJlIHJlZG9uZSBmcm9tIHNjcmF0Y2hcblx0XHRcdHNpbXBsZVBvcHVwQ29udGVudChhLCBhcnRpY2xlKTtcblx0XHR9XG5cdFx0YS5uYXZwb3B1cC5zaG93U29vbklmU3RhYmxlKGEubmF2cG9wdXAuZGVsYXkpO1xuXHRcdGNsZWFySW50ZXJ2YWwocGcudGltZXIuY2hlY2tQb3B1cFBvc2l0aW9uKTtcblx0XHRwZy50aW1lci5jaGVja1BvcHVwUG9zaXRpb24gPSBzZXRJbnRlcnZhbChjaGVja1BvcHVwUG9zaXRpb24sIDYwMCk7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3NpbXBsZVBvcHVwcycpICYmIGdldFZhbHVlT2YoJ3BvcHVwUHJldmlld0J1dHRvbicpICYmICFhLnNpbXBsZU5vTW9yZSkge1xuXHRcdFx0Y29uc3QgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZC5jbGFzc05hbWUgPSAncG9wdXBQcmV2aWV3QnV0dG9uRGl2Jztcblx0XHRcdGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRkLmFwcGVuZChzKTtcblx0XHRcdHMuY2xhc3NOYW1lID0gJ3BvcHVwUHJldmlld0J1dHRvbic7XG5cdFx0XHRzW2BvbiR7Z2V0VmFsdWVPZigncG9wdXBQcmV2aWV3QnV0dG9uRXZlbnQnKX1gXSA9ICgpID0+IHtcblx0XHRcdFx0YS5zaW1wbGVOb01vcmUgPSB0cnVlO1xuXHRcdFx0XHRkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdG5vbnNpbXBsZVBvcHVwQ29udGVudChhLCBhcnRpY2xlKTtcblx0XHRcdH07XG5cdFx0XHRzLmlubmVySFRNTCA9IHBvcHVwU3RyaW5nKCdzaG93IHByZXZpZXcnKTtcblx0XHRcdHNldFBvcHVwSFRNTChkLCAncG9wdXBQcmV2aWV3JywgYS5uYXZwb3B1cC5pZE51bWJlcik7XG5cdFx0fVxuXHRcdGlmIChhLm5hdnBvcHVwLnBlbmRpbmcgIT09IDApIHtcblx0XHRcdG5vbnNpbXBsZVBvcHVwQ29udGVudChhLCBhcnRpY2xlKTtcblx0XHR9XG5cdH07XG5cdC8vIHNpbXBsZVBvcHVwQ29udGVudDogdGhlIGNvbnRlbnQgdGhhdCBkbyBub3QgcmVxdWlyZSBhZGRpdGlvbmFsIGRvd25sb2FkXG5cdC8vIChpdCBpcyBzaG93biBldmVuIHdoZW4gc2ltcGxlUG9wdXBzIGlzIHRydWUpXG5cdGNvbnN0IHNpbXBsZVBvcHVwQ29udGVudCA9IChhLCBhcnRpY2xlKSA9PiB7XG5cdFx0LyogRklYTUUgaGFjayAqL1xuXHRcdGEubmF2cG9wdXAuaGFzUG9wdXBNZW51ID0gZmFsc2U7XG5cdFx0YS5uYXZwb3B1cC5zZXRJbm5lckhUTUwocG9wdXBIVE1MKGEpKTtcblx0XHRmaWxsRW1wdHlTcGFucyh7XG5cdFx0XHRuYXZwb3B1cDogYS5uYXZwb3B1cCxcblx0XHR9KTtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBEcmFnZ2FibGUnKSkge1xuXHRcdFx0bGV0IGRyYWdIYW5kbGUgPSBnZXRWYWx1ZU9mKCdwb3B1cERyYWdIYW5kbGUnKSB8fCBudWxsO1xuXHRcdFx0aWYgKGRyYWdIYW5kbGUgJiYgZHJhZ0hhbmRsZSAhPT0gJ2FsbCcpIHtcblx0XHRcdFx0ZHJhZ0hhbmRsZSArPSBhLm5hdnBvcHVwLmlkTnVtYmVyO1xuXHRcdFx0fVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGEubmF2cG9wdXAubWFrZURyYWdnYWJsZShkcmFnSGFuZGxlKTtcblx0XHRcdH0sIDE1MCk7XG5cdFx0fVxuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFJlZGxpbmtSZW1vdmFsJykgJiYgYS5jbGFzc05hbWUgPT09ICduZXcnKSB7XG5cdFx0XHRzZXRQb3B1cEhUTUwoYDxicj4ke3BvcHVwUmVkbGlua0hUTUwoYXJ0aWNsZSl9YCwgJ3BvcHVwUmVkbGluaycsIGEubmF2cG9wdXAuaWROdW1iZXIpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgZGVidWdEYXRhID0gKG5hdnBvcHVwKSA9PiB7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwRGVidWdnaW5nJykgJiYgbmF2cG9wdXAuaWROdW1iZXIpIHtcblx0XHRcdHNldFBvcHVwSFRNTChgaWROdW1iZXI9JHtuYXZwb3B1cC5pZE51bWJlcn0sIHBlbmRpbmc9JHtuYXZwb3B1cC5wZW5kaW5nfWAsICdwb3B1cEVycm9yJywgbmF2cG9wdXAuaWROdW1iZXIpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgbmV3TmF2cG9wdXAgPSAoYSwgYXJ0aWNsZSkgPT4ge1xuXHRcdGNvbnN0IG5hdnBvcHVwID0gbmV3IE5hdnBvcHVwKCk7XG5cdFx0bmF2cG9wdXAuZnV6eiA9IDU7XG5cdFx0bmF2cG9wdXAuZGVsYXkgPSBnZXRWYWx1ZU9mKCdwb3B1cERlbGF5JykgKiAxMDAwO1xuXHRcdC8vIGluY3JlbWVudCBnbG9iYWwgY291bnRlciBub3dcblx0XHRuYXZwb3B1cC5pZE51bWJlciA9ICsrcGcuaWROdW1iZXI7XG5cdFx0bmF2cG9wdXAucGFyZW50QW5jaG9yID0gYTtcblx0XHRuYXZwb3B1cC5wYXJlbnRQb3B1cCA9IGEucG9wRGF0YSAmJiBhLnBvcERhdGEub3duZXI7XG5cdFx0bmF2cG9wdXAuYXJ0aWNsZSA9IGFydGljbGU7XG5cdFx0cmVnaXN0ZXJIb29rcyhuYXZwb3B1cCk7XG5cdFx0cmV0dXJuIG5hdnBvcHVwO1xuXHR9O1xuXHQvLyBTaG91bGQgd2Ugc2hvdyBub25zaW1wbGUgY29udGV4dD9cblx0Ly8gSWYgc2ltcGxlUG9wdXBzIGlzIHNldCB0byB0cnVlLCB0aGVuIHdlIGRvIG5vdCBzaG93IG5vbnNpbXBsZSBjb250ZXh0LFxuXHQvLyBidXQgaWYgYSBib3R0b20gXCJzaG93IHByZXZpZXdcIiB3YXMgY2xpY2tlZCB3ZSBkbyBzaG93IG5vbnNpbXBsZSBjb250ZXh0XG5cdGNvbnN0IHNob3VsZFNob3dOb25TaW1wbGUgPSAoYSkgPT4ge1xuXHRcdHJldHVybiAhZ2V0VmFsdWVPZignc2ltcGxlUG9wdXBzJykgfHwgYS5zaW1wbGVOb01vcmU7XG5cdH07XG5cdC8vIFNob3VsZCB3ZSBzaG93IG5vbnNpbXBsZSBjb250ZXh0IGdvdmVybiBieSB0aGUgb3B0aW9uIChlLmcuIHBvcHVwVXNlckluZm8pP1xuXHQvLyBJZiB0aGUgdXNlciBleHBsaWNpdGx5IGFza2VkIGZvciBub25zaW1wbGUgY29udGV4dCBieSBzZXR0aW5nIHRoZSBvcHRpb24gdG8gdHJ1ZSxcblx0Ly8gdGhlbiB3ZSBzaG93IGl0IGV2ZW4gaW4gbm9uc2ltcGxlIG1vZGUuXG5cdGNvbnN0IHNob3VsZFNob3cgPSAoYSwgb3B0aW9uKSA9PiB7XG5cdFx0aWYgKHNob3VsZFNob3dOb25TaW1wbGUoYSkpIHtcblx0XHRcdHJldHVybiBnZXRWYWx1ZU9mKG9wdGlvbik7XG5cdFx0fVxuXHRcdHJldHVybiB3aW5kb3dbb3B0aW9uXSAhPT0gdW5kZWZpbmVkICYmIHdpbmRvd1tvcHRpb25dO1xuXHR9O1xuXHRjb25zdCBub25zaW1wbGVQb3B1cENvbnRlbnQgPSAoYSwgYXJ0aWNsZSkgPT4ge1xuXHRcdGxldCBkaWZmO1xuXHRcdGxldCBoaXN0b3J5O1xuXHRcdGNvbnN0IHBhcmFtcyA9IHBhcnNlUGFyYW1zKGEuaHJlZik7XG5cdFx0Y29uc3Qgb2xkaWQgPSBwYXJhbXMub2xkaWQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBwYXJhbXMub2xkaWQ7XG5cdFx0aWYgKHNob3VsZFNob3coYSwgJ3BvcHVwUHJldmlld0RpZmZzJykpIHtcblx0XHRcdCh7ZGlmZn0gPSBwYXJhbXMpO1xuXHRcdH1cblx0XHRpZiAoc2hvdWxkU2hvdyhhLCAncG9wdXBQcmV2aWV3SGlzdG9yeScpKSB7XG5cdFx0XHRoaXN0b3J5ID0gcGFyYW1zLmFjdGlvbiA9PT0gJ2hpc3RvcnknO1xuXHRcdH1cblx0XHRhLm5hdnBvcHVwLnBlbmRpbmcgPSAwO1xuXHRcdGNvbnN0IHJlZmVyZW5jZUVsZW1lbnQgPSBmb290bm90ZVRhcmdldChhKTtcblx0XHRpZiAocmVmZXJlbmNlRWxlbWVudCkge1xuXHRcdFx0Zm9vdG5vdGVQcmV2aWV3KHJlZmVyZW5jZUVsZW1lbnQsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoZGlmZiB8fCBkaWZmID09PSAwKSB7XG5cdFx0XHRsb2FkRGlmZihhcnRpY2xlLCBvbGRpZCwgZGlmZiwgYS5uYXZwb3B1cCk7XG5cdFx0fSBlbHNlIGlmIChoaXN0b3J5KSB7XG5cdFx0XHRsb2FkQVBJUHJldmlldygnaGlzdG9yeScsIGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoc2hvdWxkU2hvd05vblNpbXBsZShhKSAmJiBwZy5yZS5jb250cmlicy50ZXN0KGEuaHJlZikpIHtcblx0XHRcdGxvYWRBUElQcmV2aWV3KCdjb250cmlicycsIGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSBpZiAoc2hvdWxkU2hvd05vblNpbXBsZShhKSAmJiBwZy5yZS5iYWNrbGlua3MudGVzdChhLmhyZWYpKSB7XG5cdFx0XHRsb2FkQVBJUHJldmlldygnYmFja2xpbmtzJywgYXJ0aWNsZSwgYS5uYXZwb3B1cCk7XG5cdFx0fSBlbHNlIGlmIChcblx0XHRcdC8vIEZJWE1FIHNob3VsZCBiZSBhYmxlIHRvIGdldCBhbGwgcHJldmlldyBjb21iaW5hdGlvbnMgd2l0aCBvcHRpb25zXG5cdFx0XHRhcnRpY2xlLm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zSW1hZ2VJZCAmJlxuXHRcdFx0KHNob3VsZFNob3coYSwgJ2ltYWdlUG9wdXBzRm9ySW1hZ2VzJykgfHwgIWFuY2hvckNvbnRhaW5zSW1hZ2UoYSkpXG5cdFx0KSB7XG5cdFx0XHRsb2FkQVBJUHJldmlldygnaW1hZ2VwYWdlcHJldmlldycsIGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdFx0bG9hZEltYWdlKGFydGljbGUsIGEubmF2cG9wdXApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoYXJ0aWNsZS5uYW1lc3BhY2VJZCgpID09PSBwZy5uc0NhdGVnb3J5SWQgJiYgc2hvdWxkU2hvdyhhLCAncG9wdXBDYXRlZ29yeU1lbWJlcnMnKSkge1xuXHRcdFx0XHRsb2FkQVBJUHJldmlldygnY2F0ZWdvcnknLCBhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdChhcnRpY2xlLm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zVXNlcklkIHx8IGFydGljbGUubmFtZXNwYWNlSWQoKSA9PT0gcGcubnNVc2VydGFsa0lkKSAmJlxuXHRcdFx0XHRzaG91bGRTaG93KGEsICdwb3B1cFVzZXJJbmZvJylcblx0XHRcdCkge1xuXHRcdFx0XHRsb2FkQVBJUHJldmlldygndXNlcmluZm8nLCBhcnRpY2xlLCBhLm5hdnBvcHVwKTtcblx0XHRcdH1cblx0XHRcdGlmIChzaG91bGRTaG93Tm9uU2ltcGxlKGEpKSB7XG5cdFx0XHRcdHN0YXJ0QXJ0aWNsZVByZXZpZXcoYXJ0aWNsZSwgb2xkaWQsIGEubmF2cG9wdXApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgcGVuZGluZ05hdnBvcFRhc2sgPSAobmF2cG9wKSA9PiB7XG5cdFx0aWYgKG5hdnBvcCAmJiBuYXZwb3AucGVuZGluZyA9PT0gbnVsbCkge1xuXHRcdFx0bmF2cG9wLnBlbmRpbmcgPSAwO1xuXHRcdH1cblx0XHQrK25hdnBvcC5wZW5kaW5nO1xuXHRcdGRlYnVnRGF0YShuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBjb21wbGV0ZWROYXZwb3BUYXNrID0gKG5hdnBvcCkgPT4ge1xuXHRcdGlmIChuYXZwb3AgJiYgbmF2cG9wLnBlbmRpbmcpIHtcblx0XHRcdC0tbmF2cG9wLnBlbmRpbmc7XG5cdFx0fVxuXHRcdGRlYnVnRGF0YShuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBzdGFydEFydGljbGVQcmV2aWV3ID0gKGFydGljbGUsIG9sZGlkLCBuYXZwb3ApID0+IHtcblx0XHRuYXZwb3AucmVkaXIgPSAwO1xuXHRcdGxvYWRQcmV2aWV3KGFydGljbGUsIG9sZGlkLCBuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBsb2FkUHJldmlldyA9IChhcnRpY2xlLCBvbGRpZCwgbmF2cG9wKSA9PiB7XG5cdFx0aWYgKCFuYXZwb3AucmVkaXIpIHtcblx0XHRcdG5hdnBvcC5vcmlnaW5hbEFydGljbGUgPSBhcnRpY2xlO1xuXHRcdH1cblx0XHRhcnRpY2xlLm9sZGlkID0gb2xkaWQ7XG5cdFx0bG9hZEFQSVByZXZpZXcoJ3JldmlzaW9uJywgYXJ0aWNsZSwgbmF2cG9wKTtcblx0fTtcblx0Y29uc3QgbG9hZFByZXZpZXdGcm9tUmVkaXIgPSAocmVkaXJNYXRjaCwgbmF2cG9wKSA9PiB7XG5cdFx0Ly8gcmVkaXJNYXRjaCBpcyBhIHJlZ2V4IG1hdGNoXG5cdFx0Y29uc3QgdGFyZ2V0ID0gbmV3IFRpdGxlKCkuZnJvbVdpa2lUZXh0KHJlZGlyTWF0Y2hbMl0pO1xuXHRcdC8vIG92ZXJ3cml0ZSAob3IgYWRkKSBhbmNob3IgZnJvbSBvcmlnaW5hbCB0YXJnZXRcblx0XHQvLyBtZWRpYXdpa2kgZG9lcyBvdmVyd3JpdGVcblx0XHRpZiAobmF2cG9wLmFydGljbGUuYW5jaG9yKSB7XG5cdFx0XHR0YXJnZXQuYW5jaG9yID0gbmF2cG9wLmFydGljbGUuYW5jaG9yO1xuXHRcdH1cblx0XHRuYXZwb3AucmVkaXIrKztcblx0XHRuYXZwb3AucmVkaXJUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0Y29uc3Qgd2FyblJlZGlyID0gcmVkaXJMaW5rKHRhcmdldCwgbmF2cG9wLmFydGljbGUpO1xuXHRcdHNldFBvcHVwSFRNTCh3YXJuUmVkaXIsICdwb3B1cFdhcm5SZWRpcicsIG5hdnBvcC5pZE51bWJlcik7XG5cdFx0bmF2cG9wLmFydGljbGUgPSB0YXJnZXQ7XG5cdFx0ZmlsbEVtcHR5U3BhbnMoe1xuXHRcdFx0cmVkaXI6IHRydWUsXG5cdFx0XHRyZWRpclRhcmdldDogdGFyZ2V0LFxuXHRcdFx0bmF2cG9wdXA6IG5hdnBvcCxcblx0XHR9KTtcblx0XHRyZXR1cm4gbG9hZFByZXZpZXcodGFyZ2V0LCBudWxsLCBuYXZwb3ApO1xuXHR9O1xuXHRjb25zdCBpbnNlcnRQcmV2aWV3ID0gKGRvd25sb2FkKSA9PiB7XG5cdFx0aWYgKCFkb3dubG9hZC5vd25lcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZWRpck1hdGNoID0gcGcucmUucmVkaXJlY3QuZXhlYyhkb3dubG9hZC5kYXRhKTtcblx0XHRpZiAoZG93bmxvYWQub3duZXIucmVkaXIgPT09IDAgJiYgcmVkaXJNYXRjaCkge1xuXHRcdFx0bG9hZFByZXZpZXdGcm9tUmVkaXIocmVkaXJNYXRjaCwgZG93bmxvYWQub3duZXIpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZG93bmxvYWQub3duZXIudmlzaWJsZSB8fCAhZ2V0VmFsdWVPZigncG9wdXBMYXp5UHJldmlld3MnKSkge1xuXHRcdFx0aW5zZXJ0UHJldmlld05vdyhkb3dubG9hZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGlkID0gZG93bmxvYWQub3duZXIucmVkaXIgPyAnUFJFVklFV19SRURJUl9IT09LJyA6ICdQUkVWSUVXX0hPT0snO1xuXHRcdFx0ZG93bmxvYWQub3duZXIuYWRkSG9vayhcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdGluc2VydFByZXZpZXdOb3coZG93bmxvYWQpO1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQndW5oaWRlJyxcblx0XHRcdFx0J2FmdGVyJyxcblx0XHRcdFx0aWRcblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBpbnNlcnRQcmV2aWV3Tm93ID0gKGRvd25sb2FkKSA9PiB7XG5cdFx0aWYgKCFkb3dubG9hZC5vd25lcikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB3aWtpVGV4dCA9IGRvd25sb2FkLmRhdGE7XG5cdFx0Y29uc3QgbmF2cG9wID0gZG93bmxvYWQub3duZXI7XG5cdFx0Y29uc3QgYXJ0ID0gbmF2cG9wLnJlZGlyVGFyZ2V0IHx8IG5hdnBvcC5vcmlnaW5hbEFydGljbGU7XG5cdFx0bWFrZUZpeERhYnMod2lraVRleHQsIG5hdnBvcCk7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwU3VtbWFyeURhdGEnKSkge1xuXHRcdFx0Z2V0UGFnZUluZm8od2lraVRleHQsIGRvd25sb2FkKTtcblx0XHRcdHNldFBvcHVwVHJhaWxlcihnZXRQYWdlSW5mbyh3aWtpVGV4dCwgZG93bmxvYWQpLCBuYXZwb3AuaWROdW1iZXIpO1xuXHRcdH1cblx0XHRsZXQgaW1hZ2VQYWdlID0gJyc7XG5cdFx0aW1hZ2VQYWdlID0gYXJ0Lm5hbWVzcGFjZUlkKCkgPT09IHBnLm5zSW1hZ2VJZCA/IGFydC50b1N0cmluZygpIDogZ2V0VmFsaWRJbWFnZUZyb21XaWtpVGV4dCh3aWtpVGV4dCk7XG5cdFx0aWYgKGltYWdlUGFnZSkge1xuXHRcdFx0bG9hZEltYWdlKFRpdGxlLmZyb21XaWtpVGV4dChpbWFnZVBhZ2UpLCBuYXZwb3ApO1xuXHRcdH1cblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBQcmV2aWV3cycpKSB7XG5cdFx0XHRpbnNlcnRBcnRpY2xlUHJldmlldyhkb3dubG9hZCwgYXJ0LCBuYXZwb3ApO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgaW5zZXJ0QXJ0aWNsZVByZXZpZXcgPSAoZG93bmxvYWQsIGFydCwgbmF2cG9wKSA9PiB7XG5cdFx0aWYgKGRvd25sb2FkICYmIHR5cGVvZiBkb3dubG9hZC5kYXRhID09PSB0eXBlb2YgJycpIHtcblx0XHRcdGlmIChhcnQubmFtZXNwYWNlSWQoKSA9PT0gcGcubnNUZW1wbGF0ZUlkICYmIGdldFZhbHVlT2YoJ3BvcHVwUHJldmlld1Jhd1RlbXBsYXRlcycpKSB7XG5cdFx0XHRcdC8vIEZJWE1FIGNvbXBhcmUvY29uc29saWRhdGUgd2l0aCBkaWZmIGVzY2FwaW5nIGNvZGUgZm9yIHdpa2l0ZXh0XG5cdFx0XHRcdGNvbnN0IGggPSBgPGhyPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcIj4ke2Rvd25sb2FkLmRhdGFcblx0XHRcdFx0XHQuZW50aWZ5KClcblx0XHRcdFx0XHQuc3BsaXQoU3RyaW5nLnJhd2BcXG5gKVxuXHRcdFx0XHRcdC5qb2luKFN0cmluZy5yYXdgPGJyPlxcbmApfTwvc3Bhbj5gO1xuXHRcdFx0XHRzZXRQb3B1cEhUTUwoaCwgJ3BvcHVwUHJldmlldycsIG5hdnBvcC5pZE51bWJlcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBwID0gcHJlcFByZXZpZXdtYWtlcihkb3dubG9hZC5kYXRhLCBhcnQsIG5hdnBvcCk7XG5cdFx0XHRcdHAuc2hvd1ByZXZpZXcoKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHByZXBQcmV2aWV3bWFrZXIgPSAoZGF0YSwgYXJ0aWNsZSwgbmF2cG9wKSA9PiB7XG5cdFx0Ly8gZGVhbCB3aXRoIHRyaWNrc3kgYW5jaG9yc1xuXHRcdGNvbnN0IGQgPSBhbmNob3JpemUoZGF0YSwgYXJ0aWNsZS5hbmNob3JTdHJpbmcoKSk7XG5cdFx0Y29uc3QgdXJsQmFzZSA9IGpvaW5QYXRoKFtwZy53aWtpLmFydGljbGViYXNlLCBhcnRpY2xlLnVybFN0cmluZygpXSk7XG5cdFx0Y29uc3QgcCA9IG5ldyBQcmV2aWV3bWFrZXIoZCwgdXJsQmFzZSwgbmF2cG9wKTtcblx0XHRyZXR1cm4gcDtcblx0fTtcblx0Ly8gVHJ5IHRvIGltaXRhdGUgdGhlIHdheSBtZWRpYXdpa2kgZ2VuZXJhdGVzIEhUTUwgYW5jaG9ycyBmcm9tIHNlY3Rpb24gdGl0bGVzXG5cdGNvbnN0IGFuY2hvcml6ZSA9IChkLCBhbmNoKSA9PiB7XG5cdFx0aWYgKCFhbmNoKSB7XG5cdFx0XHRyZXR1cm4gZDtcblx0XHR9XG5cdFx0Y29uc3QgYW5jaFJlID0gbmV3IFJlZ0V4cChcblx0XHRcdGAoPzo9K1xcXFxzKiR7bGl0ZXJhbGl6ZVJlZ2V4KGFuY2gpLnJlcGxhY2UoL1sgX10vZywgJ1tfIF0nKX1cXFxccyo9K3xcXFxce1xcXFx7XFxcXHMqJHtnZXRWYWx1ZU9mKFxuXHRcdFx0XHQncG9wdXBBbmNob3JSZWdleHAnXG5cdFx0XHQpfVxcXFxzKig/OlxcXFx8W158fV0qKSo/XFxcXHMqJHtsaXRlcmFsaXplUmVnZXgoYW5jaCl9XFxcXHMqKD86XFxcXHxbXn1dKik/fX0pYFxuXHRcdCk7XG5cdFx0Y29uc3QgbWF0Y2ggPSBkLm1hdGNoKGFuY2hSZSk7XG5cdFx0aWYgKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDAgJiYgbWF0Y2hbMF0pIHtcblx0XHRcdHJldHVybiBkLnNsaWNlKE1hdGgubWF4KDAsIGQuaW5kZXhPZihtYXRjaFswXSkpKTtcblx0XHR9XG5cdFx0Ly8gbm93IHRyeSB0byBkZWFsIHdpdGggPT09IGZvbyBbW2JhcnxiYXpdXSBib29tID09PSAtPiAjZm9vX2Jhel9ib29tXG5cdFx0Y29uc3QgbGluZXMgPSBkLnNwbGl0KCdcXG4nKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRsaW5lc1tpXSA9IGxpbmVzW2ldXG5cdFx0XHRcdC5yZXBsYWNlKC9cXFt7Mn0oW15cXF18XSo/XFx8KT8oLio/KV17Mn0vZywgJyQyJylcblx0XHRcdFx0LnJlcGxhY2UoLycnJyhbXiddKS9nLCAnJDEnKVxuXHRcdFx0XHQucmVwbGFjZSgvJycoW14nXSkvZywgJyQxJyk7XG5cdFx0XHRpZiAoYW5jaFJlLnRlc3QobGluZXNbaV0pKSB7XG5cdFx0XHRcdHJldHVybiBkXG5cdFx0XHRcdFx0LnNwbGl0KCdcXG4nKVxuXHRcdFx0XHRcdC5zbGljZShpKVxuXHRcdFx0XHRcdC5qb2luKCdcXG4nKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9eW149XSovLCAnJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkO1xuXHR9O1xuXHRjb25zdCBraWxsUG9wdXAgPSBmdW5jdGlvbiBraWxsUG9wdXAoKSB7XG5cdFx0cmVtb3ZlTW9kaWZpZXJLZXlMaXN0ZW5lcih0aGlzKTtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBTaG9ydGN1dEtleXMnKSkge1xuXHRcdFx0cm1Qb3B1cFNob3J0Y3V0cygpO1xuXHRcdH1cblx0XHRpZiAoIXBnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChwZy5jdXJyZW50LmxpbmsgJiYgcGcuY3VycmVudC5saW5rLm5hdnBvcHVwKSB7XG5cdFx0XHRwZy5jdXJyZW50LmxpbmsubmF2cG9wdXAuYmFuaXNoKCk7XG5cdFx0fVxuXHRcdHBnLmN1cnJlbnQubGluayA9IG51bGw7XG5cdFx0YWJvcnRBbGxEb3dubG9hZHMoKTtcblx0XHRpZiAocGcudGltZXIuY2hlY2tQb3B1cFBvc2l0aW9uKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHBnLnRpbWVyLmNoZWNrUG9wdXBQb3NpdGlvbik7XG5cdFx0XHRwZy50aW1lci5jaGVja1BvcHVwUG9zaXRpb24gPSBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTsgLy8gcHJlc2VydmUgZGVmYXVsdCBhY3Rpb25cblx0fTtcblx0Ly8gRU5ERklMRTogYWN0aW9ucy5qc1xuXHQvLyBTVEFSVEZJTEU6IGRvbWRyYWcuanNcblx0LyoqXG5cdCAqIEBmaWxlb3ZlcnZpZXdcblx0ICogVGhlIHtAc291cmNlIERyYWd9IG9iamVjdCwgd2hpY2ggZW5hYmxlcyBvYmplY3RzIHRvIGJlIGRyYWdnZWQgYXJvdW5kLlxuXHQgKiA8cHJlPlxuXHQgKlxuXHQgKiBkb20tZHJhZy5qc1xuXHQgKiAwOS4yNS4yMDAxXG5cdCAqIHd3dy55b3VuZ3B1cC5uZXRcblx0ICpcblx0ICogMTAuMjguMjAwMSAtIGZpeGVkIG1pbm9yIGJ1ZyB3aGVyZSBldmVudHNcblx0ICpcblx0ICogc29tZXRpbWVzIGZpcmVkIG9mZiB0aGUgaGFuZGxlLCBub3QgdGhlIHJvb3QuXG5cdCAqIFBhcmVkIGRvd24sIHNvbWUgaG9va3MgYWRkZWQgYnkgTHVwaW5cblx0ICogQ29weXJpZ2h0IEFhcm9uIEJvb2RtYW4uXG5cdCAqIFNheWluZyBzdHVwaWQgdGhpbmdzIGRhaWx5IHNpbmNlIE1hcmNoIDIwMDEuXG5cdCAqIDwvcHJlPlxuXHQgKi9cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgRHJhZyBvYmplY3QuIFRoaXMgaXMgdXNlZCB0byBtYWtlIHZhcmlvdXMgRE9NIGVsZW1lbnRzIGRyYWdnYWJsZS5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuXHRjbGFzcyBEcmFnIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQ29uZGl0aW9uIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCB0byBkcmFnLiBUaGlzIGZ1bmN0aW9uIHNob3VsZCB0YWtlIG9uZSBwYXJhbWV0ZXIsXG5cdFx0XHQgKiBhbiBFdmVudC4gIFRvIGRpc2FibGUgdGhpcywgc2V0IGl0IHRvIDxjb2RlPm51bGw8L2NvZGU+LlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIEZ1bmN0aW9uXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuc3RhcnRDb25kaXRpb24gPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBIb29rIHRvIGJlIHJ1biB3aGVuIHRoZSBkcmFnIGZpbmlzaGVzLiBUaGlzIGlzIHBhc3NlZCB0aGUgZmluYWwgY29vcmRpbmF0ZXMgb2YgdGhlXG5cdFx0XHQgKiBkcmFnZ2VkIG9iamVjdCAodHdvIGludGVnZXJzLCB4IGFuZCB5KS4gVG8gZGlzYWJsZXMgdGhpcywgc2V0IGl0IHRvIDxjb2RlPm51bGw8L2NvZGU+LlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIEZ1bmN0aW9uXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuZW5kSG9vayA9IG51bGw7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEdldHMgYW4gZXZlbnQgaW4gYSBjcm9zcy1icm93c2VyIG1hbm5lci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHN0YXRpYyBmaXhFKGUpIHtcblx0XHRcdGlmIChlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZSA9IHdpbmRvdy5ldmVudDtcblx0XHRcdH1cblx0XHRcdGlmIChlLmxheWVyWCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGUubGF5ZXJYID0gZS5vZmZzZXRYO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGUubGF5ZXJZID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZS5sYXllclkgPSBlLm9mZnNldFk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogSW5pdGlhbGlzZXMgdGhlIERyYWcgaW5zdGFuY2UgYnkgdGVsbGluZyBpdCB3aGljaCBvYmplY3QgeW91IHdhbnQgdG8gYmUgZHJhZ2dhYmxlLCBhbmQgd2hhdFxuXHRcdCAqIHlvdSB3YW50IHRvIGRyYWcgaXQgYnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0RPTUVsZW1lbnR9IG8gVGhlIFwiaGFuZGxlXCIgYnkgd2hpY2ggPGNvZGU+b1Jvb3Q8L2NvZGU+IGlzIGRyYWdnZWQuXG5cdFx0ICogQHBhcmFtIHtET01FbGVtZW50fSBvUm9vdCBUaGUgb2JqZWN0IHdoaWNoIG1vdmVzIHdoZW4gPGNvZGU+bzwvY29kZT4gaXMgZHJhZ2dlZCwgb3IgPGNvZGU+bzwvY29kZT4gaWYgb21pdHRlZC5cblx0XHQgKi9cblx0XHRpbml0KG8sIG9Sb290KSB7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHRoaXMub2JqID0gbztcblx0XHRcdG8ub25tb3VzZWRvd24gPSAoZSkgPT4ge1xuXHRcdFx0XHRzZWxmLnN0YXJ0KGUpO1xuXHRcdFx0fTtcblx0XHRcdG8uZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdG8ucG9wdXBzX2RyYWdnYWJsZSA9IHRydWU7XG5cdFx0XHRvLmhtb2RlID0gdHJ1ZTtcblx0XHRcdG8udm1vZGUgPSB0cnVlO1xuXHRcdFx0by5yb290ID0gb1Jvb3QgfHwgbztcblx0XHRcdGlmIChOdW1iZXIuaXNOYU4oTnVtYmVyLnBhcnNlSW50KG8ucm9vdC5zdHlsZS5sZWZ0LCAxMCkpKSB7XG5cdFx0XHRcdG8ucm9vdC5zdHlsZS5sZWZ0ID0gJzBweCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoTnVtYmVyLmlzTmFOKE51bWJlci5wYXJzZUludChvLnJvb3Quc3R5bGUudG9wLCAxMCkpKSB7XG5cdFx0XHRcdG8ucm9vdC5zdHlsZS50b3AgPSAnMHB4Jztcblx0XHRcdH1cblx0XHRcdG8ucm9vdC5vbnRoaXNTdGFydCA9ICgpID0+IHt9O1xuXHRcdFx0by5yb290Lm9udGhpc0VuZCA9ICgpID0+IHt9O1xuXHRcdFx0by5yb290Lm9udGhpcyA9ICgpID0+IHt9O1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTdGFydHMgdGhlIGRyYWcuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7RXZlbnR9IGVcblx0XHQgKi9cblx0XHRzdGFydChlKSB7XG5cdFx0XHRjb25zdCBvID0gdGhpcy5vYmo7IC8vID0gdGhpcztcblx0XHRcdGUgPSBEcmFnLmZpeEUoZSk7XG5cdFx0XHRpZiAodGhpcy5zdGFydENvbmRpdGlvbiAmJiAhdGhpcy5zdGFydENvbmRpdGlvbihlKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB5ID0gTnVtYmVyLnBhcnNlSW50KG8udm1vZGUgPyBvLnJvb3Quc3R5bGUudG9wIDogby5yb290LnN0eWxlLmJvdHRvbSwgMTApO1xuXHRcdFx0Y29uc3QgeCA9IE51bWJlci5wYXJzZUludChvLmhtb2RlID8gby5yb290LnN0eWxlLmxlZnQgOiBvLnJvb3Quc3R5bGUucmlnaHQsIDEwKTtcblx0XHRcdG8ucm9vdC5vbnRoaXNTdGFydCh4LCB5KTtcblx0XHRcdG8ubGFzdE1vdXNlWCA9IGUuY2xpZW50WDtcblx0XHRcdG8ubGFzdE1vdXNlWSA9IGUuY2xpZW50WTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0by5vbm1vdXNlbW92ZURlZmF1bHQgPSBkb2N1bWVudC5vbm1vdXNlbW92ZTtcblx0XHRcdG8uZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSAoZSkgPT4ge1xuXHRcdFx0XHRzZWxmLmRyYWcoZSk7XG5cdFx0XHR9O1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZXVwID0gKGUpID0+IHtcblx0XHRcdFx0c2VsZi5lbmQoZSk7XG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBEb2VzIHRoZSBkcmFnLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtFdmVudH0gZVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0ZHJhZyhlKSB7XG5cdFx0XHRlID0gRHJhZy5maXhFKGUpO1xuXHRcdFx0Y29uc3QgbyA9IHRoaXMub2JqO1xuXHRcdFx0Y29uc3QgZXkgPSBlLmNsaWVudFk7XG5cdFx0XHRjb25zdCBleCA9IGUuY2xpZW50WDtcblx0XHRcdGNvbnN0IHkgPSBOdW1iZXIucGFyc2VJbnQoby52bW9kZSA/IG8ucm9vdC5zdHlsZS50b3AgOiBvLnJvb3Quc3R5bGUuYm90dG9tLCAxMCk7XG5cdFx0XHRjb25zdCB4ID0gTnVtYmVyLnBhcnNlSW50KG8uaG1vZGUgPyBvLnJvb3Quc3R5bGUubGVmdCA6IG8ucm9vdC5zdHlsZS5yaWdodCwgMTApO1xuXHRcdFx0Y29uc3QgbnggPSB4ICsgKGV4IC0gby5sYXN0TW91c2VYKSAqIChvLmhtb2RlID8gMSA6IC0xKTtcblx0XHRcdGNvbnN0IG55ID0geSArIChleSAtIG8ubGFzdE1vdXNlWSkgKiAoby52bW9kZSA/IDEgOiAtMSk7XG5cdFx0XHR0aGlzLm9iai5yb290LnN0eWxlW28uaG1vZGUgPyAnbGVmdCcgOiAncmlnaHQnXSA9IGAke254fXB4YDtcblx0XHRcdHRoaXMub2JqLnJvb3Quc3R5bGVbby52bW9kZSA/ICd0b3AnIDogJ2JvdHRvbSddID0gYCR7bnl9cHhgO1xuXHRcdFx0dGhpcy5vYmoubGFzdE1vdXNlWCA9IGV4O1xuXHRcdFx0dGhpcy5vYmoubGFzdE1vdXNlWSA9IGV5O1xuXHRcdFx0dGhpcy5vYmoucm9vdC5vbnRoaXMobngsIG55KTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogRW5kcyB0aGUgZHJhZy5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0ZW5kKCkge1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLm9iai5vbm1vdXNlbW92ZURlZmF1bHQ7XG5cdFx0XHRkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuXHRcdFx0dGhpcy5vYmouZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdGlmICh0aGlzLmVuZEhvb2spIHtcblx0XHRcdFx0dGhpcy5lbmRIb29rKFxuXHRcdFx0XHRcdE51bWJlci5wYXJzZUludCh0aGlzLm9iai5yb290LnN0eWxlW3RoaXMub2JqLmhtb2RlID8gJ2xlZnQnIDogJ3JpZ2h0J10sIDEwKSxcblx0XHRcdFx0XHROdW1iZXIucGFyc2VJbnQodGhpcy5vYmoucm9vdC5zdHlsZVt0aGlzLm9iai52bW9kZSA/ICd0b3AnIDogJ2JvdHRvbSddLCAxMClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gRU5ERklMRTogZG9tZHJhZy5qc1xuXHQvLyBTVEFSVEZJTEU6IHN0cnVjdHVyZXMuanNcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbCA9IHt9O1xuXHRwZy5zdHJ1Y3R1cmVzLm9yaWdpbmFsLnBvcHVwTGF5b3V0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHQncG9wdXBFcnJvcicsXG5cdFx0XHQncG9wdXBJbWFnZScsXG5cdFx0XHQncG9wdXBUb3BMaW5rcycsXG5cdFx0XHQncG9wdXBUaXRsZScsXG5cdFx0XHQncG9wdXBVc2VyRGF0YScsXG5cdFx0XHQncG9wdXBEYXRhJyxcblx0XHRcdCdwb3B1cE90aGVyTGlua3MnLFxuXHRcdFx0J3BvcHVwUmVkaXInLFxuXHRcdFx0Wydwb3B1cFdhcm5SZWRpcicsICdwb3B1cFJlZGlyVG9wTGlua3MnLCAncG9wdXBSZWRpclRpdGxlJywgJ3BvcHVwUmVkaXJEYXRhJywgJ3BvcHVwUmVkaXJPdGhlckxpbmtzJ10sXG5cdFx0XHQncG9wdXBNaXNjVG9vbHMnLFxuXHRcdFx0Wydwb3B1cFJlZGxpbmsnXSxcblx0XHRcdCdwb3B1cFByZVByZXZpZXdTZXAnLFxuXHRcdFx0J3BvcHVwUHJldmlldycsXG5cdFx0XHQncG9wdXBTZWNvbmRQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cFByZXZpZXdNb3JlJyxcblx0XHRcdCdwb3B1cFBvc3RQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cEZpeERhYicsXG5cdFx0XTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFJlZGlyU3BhbnMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdCdwb3B1cFJlZGlyJyxcblx0XHRcdCdwb3B1cFdhcm5SZWRpcicsXG5cdFx0XHQncG9wdXBSZWRpclRvcExpbmtzJyxcblx0XHRcdCdwb3B1cFJlZGlyVGl0bGUnLFxuXHRcdFx0J3BvcHVwUmVkaXJEYXRhJyxcblx0XHRcdCdwb3B1cFJlZGlyT3RoZXJMaW5rcycsXG5cdFx0XTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFRpdGxlID0gKHgpID0+IHtcblx0XHRsb2coJ2RlZmF1bHRzdHJ1Y3R1cmUucG9wdXBUaXRsZScpO1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBOYXZMaW5rcycpKSB7XG5cdFx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTCgnPGI+PDxtYWlubGluaz4+PC9iPicsIHguYXJ0aWNsZSwgeC5wYXJhbXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBUb3BMaW5rcyA9ICh4KSA9PiB7XG5cdFx0bG9nKCdkZWZhdWx0c3RydWN0dXJlLnBvcHVwVG9wTGlua3MnKTtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBOYXZMaW5rcycpKSB7XG5cdFx0XHRyZXR1cm4gbmF2TGlua3NIVE1MKHguYXJ0aWNsZSwgeC5oaW50LCB4LnBhcmFtcyk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cEltYWdlID0gKHgpID0+IHtcblx0XHRsb2coYG9yaWdpbmFsLnBvcHVwSW1hZ2UsIHguYXJ0aWNsZT0ke3guYXJ0aWNsZX0sIHgubmF2cG9wLmlkTnVtYmVyPSR7eC5uYXZwb3AuaWROdW1iZXJ9YCk7XG5cdFx0cmV0dXJuIGltYWdlSFRNTCh4LmFydGljbGUsIHgubmF2cG9wLmlkTnVtYmVyKTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFJlZGlyVGl0bGUgPSBwZy5zdHJ1Y3R1cmVzLm9yaWdpbmFsLnBvcHVwVGl0bGU7XG5cdHBnLnN0cnVjdHVyZXMub3JpZ2luYWwucG9wdXBSZWRpclRvcExpbmtzID0gcGcuc3RydWN0dXJlcy5vcmlnaW5hbC5wb3B1cFRvcExpbmtzO1xuXHRjb25zdCBjb3B5U3RydWN0dXJlID0gKG9sZFN0cnVjdHVyZSwgbmV3U3RydWN0dXJlKSA9PiB7XG5cdFx0cGcuc3RydWN0dXJlc1tuZXdTdHJ1Y3R1cmVdID0ge307XG5cdFx0Zm9yIChjb25zdCBwcm9wIGluIHBnLnN0cnVjdHVyZXNbb2xkU3RydWN0dXJlXSkge1xuXHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHBnLnN0cnVjdHVyZXNbb2xkU3RydWN0dXJlXSwgcHJvcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRwZy5zdHJ1Y3R1cmVzW25ld1N0cnVjdHVyZV1bcHJvcF0gPSBwZy5zdHJ1Y3R1cmVzW29sZFN0cnVjdHVyZV1bcHJvcF07XG5cdFx0fVxuXHR9O1xuXHRjb3B5U3RydWN0dXJlKCdvcmlnaW5hbCcsICdub3N0YWxnaWEnKTtcblx0cGcuc3RydWN0dXJlcy5ub3N0YWxnaWEucG9wdXBUb3BMaW5rcyA9ICh4KSA9PiB7XG5cdFx0bGV0IHN0ciA9ICcnO1xuXHRcdHN0ciArPSAnPGI+PDxtYWlubGlua3xzaG9ydGN1dD0gPj48L2I+Jztcblx0XHQvLyB1c2VyIGxpbmtzXG5cdFx0Ly8gY29udHJpYnMgLSBsb2cgLSBjb3VudCAtIGVtYWlsIC0gYmxvY2tcblx0XHQvLyBjb3VudCBvbmx5IGlmIGFwcGxpY2FibGU7IGJsb2NrIG9ubHkgaWYgcG9wdXBBZG1pbkxpbmtzXG5cdFx0c3RyICs9ICdpZih1c2VyKXs8YnI+PDxjb250cmlic3xzaG9ydGN1dD1jPj4nO1xuXHRcdHN0ciArPSAnaWYod2lraW1lZGlhKXsqPDxjb3VudHxzaG9ydGN1dD0jPj59Jztcblx0XHRzdHIgKz0gJ2lmKGlwdXNlcil7fWVsc2V7Kjw8ZW1haWx8c2hvcnRjdXQ9RT4+fWlmKGFkbWluKXsqPDxibG9ja3xzaG9ydGN1dD1iPj59fSc7XG5cdFx0Ly8gZWRpdGluZyBsaW5rc1xuXHRcdC8vIHRhbGtwYWdlICAgLT4gZWRpdHxuZXcgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSBhcnRpY2xlfGVkaXRcblx0XHQvLyBvdGhlciBwYWdlIC0+IGVkaXQgLSBoaXN0b3J5IC0gdW58d2F0Y2ggLSB0YWxrfGVkaXR8bmV3XG5cdFx0Y29uc3QgZWRpdHN0ciA9ICc8PGVkaXR8c2hvcnRjdXQ9ZT4+Jztcblx0XHRjb25zdCBlZGl0T2xkaWRTdHIgPSBgaWYob2xkaWQpezw8ZWRpdE9sZHxzaG9ydGN1dD1lPj58PDxyZXZlcnR8c2hvcnRjdXQ9dnxydj4+fDw8ZWRpdHxjdXI+Pn1lbHNleyR7ZWRpdHN0cn19YDtcblx0XHRjb25zdCBoaXN0b3J5c3RyID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1oPj4nO1xuXHRcdGNvbnN0IHdhdGNoc3RyID0gJzw8dW53YXRjaHx1bndhdGNoU2hvcnQ+Pnw8PHdhdGNofHNob3J0Y3V0PXd8d2F0Y2hUaGluZ3k+Pic7XG5cdFx0c3RyICs9XG5cdFx0XHRgPGJyPmlmKHRhbGspeyR7ZWRpdE9sZGlkU3RyfXw8PG5ld3xzaG9ydGN1dD0rPj5gICtcblx0XHRcdGAqJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PGFydGljbGV8c2hvcnRjdXQ9YT4+PC9iPnw8PGVkaXRBcnRpY2xlfGVkaXQ+PicgK1xuXHRcdFx0YH1lbHNleyR7XG5cdFx0XHRcdC8vIG5vdCBhIHRhbGsgcGFnZVxuXHRcdFx0XHRlZGl0T2xkaWRTdHJcblx0XHRcdH0qJHtoaXN0b3J5c3RyfSoke3dhdGNoc3RyfSpgICtcblx0XHRcdCc8Yj48PHRhbGt8c2hvcnRjdXQ9dD4+PC9iPnw8PGVkaXRUYWxrfGVkaXQ+Pnw8PG5ld1RhbGt8c2hvcnRjdXQ9K3xuZXc+Pn0nO1xuXHRcdC8vIG1pc2MgbGlua3Ncblx0XHRzdHIgKz0gJzxicj48PHdoYXRMaW5rc0hlcmV8c2hvcnRjdXQ9bD4+Kjw8cmVsYXRlZENoYW5nZXN8c2hvcnRjdXQ9cj4+Jztcblx0XHRzdHIgKz0gJ2lmKGFkbWluKXs8YnI+fWVsc2V7Kn08PG1vdmV8c2hvcnRjdXQ9bT4+Jztcblx0XHQvLyBhZG1pbiBsaW5rc1xuXHRcdHN0ciArPVxuXHRcdFx0J2lmKGFkbWluKXsqPDx1bnByb3RlY3R8dW5wcm90ZWN0U2hvcnQ+Pnw8PHByb3RlY3R8c2hvcnRjdXQ9cD4+KicgK1xuXHRcdFx0Jzw8dW5kZWxldGV8dW5kZWxldGVTaG9ydD4+fDw8ZGVsZXRlfHNob3J0Y3V0PWQ+Pn0nO1xuXHRcdHJldHVybiBuYXZsaW5rU3RyaW5nVG9IVE1MKHN0ciwgeC5hcnRpY2xlLCB4LnBhcmFtcyk7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubm9zdGFsZ2lhLnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMubm9zdGFsZ2lhLnBvcHVwVG9wTGlua3M7XG5cdC8qKiAtLSBmYW5jeSAtLSAqL1xuXHRjb3B5U3RydWN0dXJlKCdvcmlnaW5hbCcsICdmYW5jeScpO1xuXHRwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwVGl0bGUgPSAoeCkgPT4ge1xuXHRcdHJldHVybiBuYXZsaW5rU3RyaW5nVG9IVE1MKCc8Zm9udCBzaXplPSswPjw8bWFpbmxpbms+PjwvZm9udD4nLCB4LmFydGljbGUsIHgucGFyYW1zKTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFRvcExpbmtzID0gKHgpID0+IHtcblx0XHRjb25zdCBoaXN0ID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1ofGhpc3Q+Pnw8PGxhc3RFZGl0fHNob3J0Y3V0PS98bGFzdD4+fDw8ZWRpdG9yc3xzaG9ydGN1dD1FfGVkcz4+Jztcblx0XHRjb25zdCB3YXRjaCA9ICc8PHVud2F0Y2h8dW53YXRjaFNob3J0Pj58PDx3YXRjaHxzaG9ydGN1dD13fHdhdGNoVGhpbmd5Pj4nO1xuXHRcdGNvbnN0IG1vdmUgPSAnPDxtb3ZlfHNob3J0Y3V0PW18bW92ZT4+Jztcblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChcblx0XHRcdCdpZih0YWxrKXsnICtcblx0XHRcdFx0YDw8ZWRpdHxzaG9ydGN1dD1lPj58PDxuZXd8c2hvcnRjdXQ9K3wrPj4qJHtoaXN0fSpgICtcblx0XHRcdFx0Jzw8YXJ0aWNsZXxzaG9ydGN1dD1hPj58PDxlZGl0QXJ0aWNsZXxlZGl0Pj4nICtcblx0XHRcdFx0YCoke3dhdGNofSoke21vdmV9fWVsc2V7PDxlZGl0fHNob3J0Y3V0PWU+Pioke2hpc3R9Kjw8dGFsa3xzaG9ydGN1dD10fD4+fDw8ZWRpdFRhbGt8ZWRpdD4+fDw8bmV3VGFsa3xzaG9ydGN1dD0rfG5ldz4+YCArXG5cdFx0XHRcdGAqJHt3YXRjaH0qJHttb3ZlfX08YnI+YCxcblx0XHRcdHguYXJ0aWNsZSxcblx0XHRcdHgucGFyYW1zXG5cdFx0KTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cE90aGVyTGlua3MgPSAoeCkgPT4ge1xuXHRcdGNvbnN0IGFkbWluID1cblx0XHRcdCc8PHVucHJvdGVjdHx1bnByb3RlY3RTaG9ydD4+fDw8cHJvdGVjdHxzaG9ydGN1dD1wPj4qPDx1bmRlbGV0ZXx1bmRlbGV0ZVNob3J0Pj58PDxkZWxldGV8c2hvcnRjdXQ9ZHxkZWw+Pic7XG5cdFx0bGV0IHVzZXIgPSAnPDxjb250cmlic3xzaG9ydGN1dD1jPj5pZih3aWtpbWVkaWEpe3w8PGNvdW50fHNob3J0Y3V0PSN8Iz4+fSc7XG5cdFx0dXNlciArPSBgaWYoaXB1c2VyKXt8PDxhcmluPj59ZWxzZXsqPDxlbWFpbHxzaG9ydGN1dD1FfCR7cG9wdXBTdHJpbmcoXG5cdFx0XHQnZW1haWwnXG5cdFx0KX0+Pn1pZihhZG1pbil7Kjw8YmxvY2t8c2hvcnRjdXQ9Yj4+fWA7XG5cdFx0Y29uc3Qgbm9ybWFsID0gJzw8d2hhdExpbmtzSGVyZXxzaG9ydGN1dD1sfGxpbmtzIGhlcmU+Pio8PHJlbGF0ZWRDaGFuZ2VzfHNob3J0Y3V0PXJ8cmVsYXRlZD4+Jztcblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChcblx0XHRcdGA8YnI+aWYodXNlcil7JHt1c2VyfSp9aWYoYWRtaW4peyR7YWRtaW59aWYodXNlcil7PGJyPn1lbHNleyp9fSR7bm9ybWFsfWAsXG5cdFx0XHR4LmFydGljbGUsXG5cdFx0XHR4LnBhcmFtc1xuXHRcdCk7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBSZWRpclRpdGxlID0gcGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFRpdGxlO1xuXHRwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBUb3BMaW5rcztcblx0cGcuc3RydWN0dXJlcy5mYW5jeS5wb3B1cFJlZGlyT3RoZXJMaW5rcyA9IHBnLnN0cnVjdHVyZXMuZmFuY3kucG9wdXBPdGhlckxpbmtzO1xuXHQvKiogLS0gZmFuY3kyIC0tICovXG5cdC8vIGhhY2sgZm9yIE1hY0d5dmVyTWFnaWNcblx0Y29weVN0cnVjdHVyZSgnZmFuY3knLCAnZmFuY3kyJyk7XG5cdHBnLnN0cnVjdHVyZXMuZmFuY3kyLnBvcHVwVG9wTGlua3MgPSAvLyBoYWNrIG91dCB0aGUgPGJyPiBhdCB0aGUgZW5kIGFuZCBwdXQgb25lIGF0IHRoZSBiZWdpbm5pbmdcblx0XHQoeCkgPT4ge1xuXHRcdFx0cmV0dXJuIGA8YnI+JHtwZy5zdHJ1Y3R1cmVzLmZhbmN5LnBvcHVwVG9wTGlua3MoeCkucmVwbGFjZSgvPGJyPiQvaSwgJycpfWA7XG5cdFx0fTtcblx0cGcuc3RydWN0dXJlcy5mYW5jeTIucG9wdXBMYXlvdXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdCdwb3B1cEVycm9yJyxcblx0XHRcdCdwb3B1cEltYWdlJyxcblx0XHRcdCdwb3B1cFRpdGxlJyxcblx0XHRcdCdwb3B1cFVzZXJEYXRhJyxcblx0XHRcdCdwb3B1cERhdGEnLFxuXHRcdFx0J3BvcHVwVG9wTGlua3MnLFxuXHRcdFx0J3BvcHVwT3RoZXJMaW5rcycsXG5cdFx0XHQncG9wdXBSZWRpcicsXG5cdFx0XHRbJ3BvcHVwV2FyblJlZGlyJywgJ3BvcHVwUmVkaXJUb3BMaW5rcycsICdwb3B1cFJlZGlyVGl0bGUnLCAncG9wdXBSZWRpckRhdGEnLCAncG9wdXBSZWRpck90aGVyTGlua3MnXSxcblx0XHRcdCdwb3B1cE1pc2NUb29scycsXG5cdFx0XHRbJ3BvcHVwUmVkbGluayddLFxuXHRcdFx0J3BvcHVwUHJlUHJldmlld1NlcCcsXG5cdFx0XHQncG9wdXBQcmV2aWV3Jyxcblx0XHRcdCdwb3B1cFNlY29uZFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwUHJldmlld01vcmUnLFxuXHRcdFx0J3BvcHVwUG9zdFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwRml4RGFiJyxcblx0XHRdO1xuXHR9O1xuXHQvKiogLS0gbWVudXMgLS0gKi9cblx0Y29weVN0cnVjdHVyZSgnb3JpZ2luYWwnLCAnbWVudXMnKTtcblx0cGcuc3RydWN0dXJlcy5tZW51cy5wb3B1cExheW91dCA9ICgpID0+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0J3BvcHVwRXJyb3InLFxuXHRcdFx0J3BvcHVwSW1hZ2UnLFxuXHRcdFx0J3BvcHVwVG9wTGlua3MnLFxuXHRcdFx0J3BvcHVwVGl0bGUnLFxuXHRcdFx0J3BvcHVwT3RoZXJMaW5rcycsXG5cdFx0XHQncG9wdXBSZWRpcicsXG5cdFx0XHRbJ3BvcHVwV2FyblJlZGlyJywgJ3BvcHVwUmVkaXJUb3BMaW5rcycsICdwb3B1cFJlZGlyVGl0bGUnLCAncG9wdXBSZWRpckRhdGEnLCAncG9wdXBSZWRpck90aGVyTGlua3MnXSxcblx0XHRcdCdwb3B1cFVzZXJEYXRhJyxcblx0XHRcdCdwb3B1cERhdGEnLFxuXHRcdFx0J3BvcHVwTWlzY1Rvb2xzJyxcblx0XHRcdFsncG9wdXBSZWRsaW5rJ10sXG5cdFx0XHQncG9wdXBQcmVQcmV2aWV3U2VwJyxcblx0XHRcdCdwb3B1cFByZXZpZXcnLFxuXHRcdFx0J3BvcHVwU2Vjb25kUHJldmlldycsXG5cdFx0XHQncG9wdXBQcmV2aWV3TW9yZScsXG5cdFx0XHQncG9wdXBQb3N0UHJldmlldycsXG5cdFx0XHQncG9wdXBGaXhEYWInLFxuXHRcdF07XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBUb3BMaW5rcyA9ICh4LCBzaG9ydGVyKSA9PiB7XG5cdFx0Ly8gRklYTUUgbWF5YmUgdGhpcyBzdHVmZiBzaG91bGQgYmUgY2FjaGVkXG5cdFx0Y29uc3QgcyA9IFtdO1xuXHRcdGNvbnN0IGRyb3BkaXYgPSAnPGRpdiBjbGFzcz1cInBvcHVwX2Ryb3BcIj4nO1xuXHRcdGNvbnN0IGVuZGRpdiA9ICc8L2Rpdj4nO1xuXHRcdGxldCBoaXN0ID0gJzw8aGlzdG9yeXxzaG9ydGN1dD1oPj4nO1xuXHRcdGlmICghc2hvcnRlcikge1xuXHRcdFx0aGlzdCA9IGA8bWVudXJvdz4ke2hpc3R9fDw8aGlzdG9yeWZlZWR8cnNzPj58PDxlZGl0b3JzfHNob3J0Y3V0PUU+PjwvbWVudXJvdz5gO1xuXHRcdH1cblx0XHRjb25zdCBsYXN0ZWRpdCA9ICc8PGxhc3RFZGl0fHNob3J0Y3V0PS98c2hvdyBsYXN0IGVkaXQ+Pic7XG5cdFx0Y29uc3QgdGhhbmsgPSAnaWYoZGlmZil7PDx0aGFua3xzZW5kIHRoYW5rcz4+fSc7XG5cdFx0Y29uc3QganNIaXN0b3J5ID0gJzw8bGFzdENvbnRyaWJ8bGFzdCBzZXQgb2YgZWRpdHM+Pjw8c2luY2VNZXxjaGFuZ2VzIHNpbmNlIG1pbmU+Pic7XG5cdFx0Y29uc3QgbGlua3NoZXJlID0gJzw8d2hhdExpbmtzSGVyZXxzaG9ydGN1dD1sfHdoYXQgbGlua3MgaGVyZT4+Jztcblx0XHRjb25zdCByZWxhdGVkID0gJzw8cmVsYXRlZENoYW5nZXN8c2hvcnRjdXQ9cnxyZWxhdGVkIGNoYW5nZXM+Pic7XG5cdFx0Y29uc3Qgc2VhcmNoID0gJzxtZW51cm93Pjw8c2VhcmNofHNob3J0Y3V0PXM+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IHdhdGNoID0gJzxtZW51cm93Pjw8dW53YXRjaHx1bndhdGNoU2hvcnQ+Pnw8PHdhdGNofHNob3J0Y3V0PXd8d2F0Y2hUaGluZ3k+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IHByb3RlY3QgPSAnPG1lbnVyb3c+PDx1bnByb3RlY3R8dW5wcm90ZWN0U2hvcnQ+Pnw8PHByb3RlY3R8c2hvcnRjdXQ9cD4+fDw8cHJvdGVjdGxvZ3xsb2c+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IGRlbCA9ICc8bWVudXJvdz48PHVuZGVsZXRlfHVuZGVsZXRlU2hvcnQ+Pnw8PGRlbGV0ZXxzaG9ydGN1dD1kPj58PDxkZWxldGVsb2d8bG9nPj48L21lbnVyb3c+Jztcblx0XHRjb25zdCBtb3ZlID0gJzw8bW92ZXxzaG9ydGN1dD1tfG1vdmUgcGFnZT4+Jztcblx0XHRjb25zdCBudWxsUHVyZ2UgPSAnPG1lbnVyb3c+PDxudWxsRWRpdHxzaG9ydGN1dD1ufG51bGwgZWRpdD4+fDw8cHVyZ2V8c2hvcnRjdXQ9UD4+PC9tZW51cm93Pic7XG5cdFx0Y29uc3Qgdmlld09wdGlvbnMgPSAnPG1lbnVyb3c+PDx2aWV3fHNob3J0Y3V0PXY+Pnw8PHJlbmRlcnxzaG9ydGN1dD1TPj58PDxyYXc+PjwvbWVudXJvdz4nO1xuXHRcdGNvbnN0IGVkaXRSb3cgPVxuXHRcdFx0J2lmKG9sZGlkKXsnICtcblx0XHRcdCc8bWVudXJvdz48PGVkaXR8c2hvcnRjdXQ9ZT4+fDw8ZWRpdE9sZHxzaG9ydGN1dD1lfHRoaXMmbmJzcDtyZXZpc2lvbj4+PC9tZW51cm93PicgK1xuXHRcdFx0JzxtZW51cm93Pjw8cmV2ZXJ0fHNob3J0Y3V0PXY+Pnw8PHVuZG8+PjwvbWVudXJvdz4nICtcblx0XHRcdCd9ZWxzZXs8PGVkaXR8c2hvcnRjdXQ9ZT4+fSc7XG5cdFx0Y29uc3QgbWFya1BhdHJvbGxlZCA9ICdpZihyY2lkKXs8PG1hcmtwYXRyb2xsZWR8bWFyayBwYXRyb2xsZWQ+Pn0nO1xuXHRcdGNvbnN0IG5ld1RvcGljID0gJ2lmKHRhbGspezw8bmV3fHNob3J0Y3V0PSt8bmV3IHRvcGljPj59Jztcblx0XHRjb25zdCBwcm90ZWN0RGVsZXRlID0gYGlmKGFkbWluKXske3Byb3RlY3R9JHtkZWx9fWA7XG5cdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwQWN0aW9uc01lbnUnKSkge1xuXHRcdFx0cy5wdXNoKGA8PG1haW5saW5rPj4qJHtkcm9wZGl2fSR7bWVudVRpdGxlKCdhY3Rpb25zJyl9YCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHMucHVzaChgJHtkcm9wZGl2fTw8bWFpbmxpbms+PmApO1xuXHRcdH1cblx0XHRzLnB1c2goJzxtZW51PicsIGVkaXRSb3cgKyBtYXJrUGF0cm9sbGVkICsgbmV3VG9waWMgKyBoaXN0ICsgbGFzdGVkaXQgKyB0aGFuayk7XG5cdFx0aWYgKCFzaG9ydGVyKSB7XG5cdFx0XHRzLnB1c2goanNIaXN0b3J5KTtcblx0XHR9XG5cdFx0cy5wdXNoKG1vdmUgKyBsaW5rc2hlcmUgKyByZWxhdGVkKTtcblx0XHRpZiAoIXNob3J0ZXIpIHtcblx0XHRcdHMucHVzaChudWxsUHVyZ2UgKyBzZWFyY2gpO1xuXHRcdH1cblx0XHRpZiAoIXNob3J0ZXIpIHtcblx0XHRcdHMucHVzaCh2aWV3T3B0aW9ucyk7XG5cdFx0fVxuXHRcdHMucHVzaChcblx0XHRcdGA8aHI+JHt3YXRjaH0ke3Byb3RlY3REZWxldGV9YCxcblx0XHRcdCc8aHI+JyArXG5cdFx0XHRcdCdpZih0YWxrKXs8PGFydGljbGV8c2hvcnRjdXQ9YXx2aWV3IGFydGljbGU+Pjw8ZWRpdEFydGljbGV8ZWRpdCBhcnRpY2xlPj59JyArXG5cdFx0XHRcdCdlbHNlezw8dGFsa3xzaG9ydGN1dD10fHRhbGsgcGFnZT4+PDxlZGl0VGFsa3xlZGl0IHRhbGs+PicgK1xuXHRcdFx0XHRgPDxuZXdUYWxrfHNob3J0Y3V0PSt8bmV3IHRvcGljPj59PC9tZW51PiR7ZW5kZGl2fWBcblx0XHQpO1xuXHRcdC8vIHVzZXIgbWVudSBzdGFydHMgaGVyZVxuXHRcdGNvbnN0IGVtYWlsID0gJzw8ZW1haWx8c2hvcnRjdXQ9RXxlbWFpbCB1c2VyPj4nO1xuXHRcdGNvbnN0IGNvbnRyaWJzID1cblx0XHRcdCdpZih3aWtpbWVkaWEpezxtZW51cm93Pn08PGNvbnRyaWJzfHNob3J0Y3V0PWN8Y29udHJpYnV0aW9ucz4+aWYod2lraW1lZGlhKXs8L21lbnVyb3c+fScgK1xuXHRcdFx0J2lmKGFkbWluKXs8bWVudXJvdz48PGRlbGV0ZWRDb250cmlicz4+PC9tZW51cm93Pn0nO1xuXHRcdHMucHVzaChcblx0XHRcdGBpZih1c2VyKXsqJHtkcm9wZGl2fSR7bWVudVRpdGxlKCd1c2VyJyl9YCxcblx0XHRcdCc8bWVudT4nLFxuXHRcdFx0JzxtZW51cm93Pjw8dXNlclBhZ2V8c2hvcnRjdXQ9dXx1c2VyJm5ic3A7cGFnZT4+fDw8dXNlclNwYWNlfHNwYWNlPj48L21lbnVyb3c+Jyxcblx0XHRcdCc8PHVzZXJUYWxrfHNob3J0Y3V0PXR8dXNlciB0YWxrPj48PGVkaXRVc2VyVGFsa3xlZGl0IHVzZXIgdGFsaz4+JyArXG5cdFx0XHRcdCc8PG5ld1VzZXJUYWxrfHNob3J0Y3V0PSt8bGVhdmUgY29tbWVudD4+J1xuXHRcdCk7XG5cdFx0aWYgKHNob3J0ZXIpIHtcblx0XHRcdHMucHVzaChgaWYoaXB1c2VyKXt9ZWxzZXske2VtYWlsfX1gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cy5wdXNoKGBpZihpcHVzZXIpezw8YXJpbj4+fWVsc2V7JHtlbWFpbH19YCk7XG5cdFx0fVxuXHRcdHMucHVzaChcblx0XHRcdGA8aHI+JHtjb250cmlic308PHVzZXJsb2d8c2hvcnRjdXQ9THx1c2VyIGxvZz4+YCxcblx0XHRcdCdpZih3aWtpbWVkaWEpezw8Y291bnR8c2hvcnRjdXQ9I3xlZGl0IGNvdW50ZXI+Pn0nLFxuXHRcdFx0J2lmKGFkbWluKXs8bWVudXJvdz48PHVuYmxvY2t8dW5ibG9ja1Nob3J0Pj58PDxibG9ja3xzaG9ydGN1dD1ifGJsb2NrIHVzZXI+PjwvbWVudXJvdz59Jyxcblx0XHRcdCc8PGJsb2NrbG9nfHNob3J0Y3V0PUJ8YmxvY2sgbG9nPj4nLFxuXHRcdFx0YDwvbWVudT4ke2VuZGRpdn19YFxuXHRcdCk7XG5cdFx0Ly8gcG9wdXBzIG1lbnUgc3RhcnRzIGhlcmVcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBTZXR1cE1lbnUnKSAmJiAheC5uYXZwb3AuaGFzUG9wdXBNZW51IC8qIEZJWE1FOiBoYWNrICovKSB7XG5cdFx0XHR4Lm5hdnBvcC5oYXNQb3B1cE1lbnUgPSB0cnVlO1xuXHRcdFx0cy5wdXNoKFxuXHRcdFx0XHRgKiR7ZHJvcGRpdn0ke21lbnVUaXRsZSgncG9wdXBzTWVudScpfTxtZW51PmAsXG5cdFx0XHRcdCc8PHRvZ2dsZVByZXZpZXdzfHRvZ2dsZSBwcmV2aWV3cz4+Jyxcblx0XHRcdFx0Jzw8cHVyZ2VQb3B1cHN8cmVzZXQ+PicsXG5cdFx0XHRcdCc8PGRpc2FibGVQb3B1cHN8ZGlzYWJsZT4+Jyxcblx0XHRcdFx0YDwvbWVudT4ke2VuZGRpdn1gXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTChzLmpvaW4oJycpLCB4LmFydGljbGUsIHgucGFyYW1zKTtcblx0fTtcblx0Y29uc3QgbWVudVRpdGxlID0gKHMpID0+IHtcblx0XHRyZXR1cm4gYDxhIGhyZWY9XCIjXCIgbm9Qb3B1cD0xPiR7cG9wdXBTdHJpbmcocyl9PC9hPmA7XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBSZWRpclRpdGxlID0gcGcuc3RydWN0dXJlcy5tZW51cy5wb3B1cFRpdGxlO1xuXHRwZy5zdHJ1Y3R1cmVzLm1lbnVzLnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBUb3BMaW5rcztcblx0Y29weVN0cnVjdHVyZSgnbWVudXMnLCAnc2hvcnRtZW51cycpO1xuXHRwZy5zdHJ1Y3R1cmVzLnNob3J0bWVudXMucG9wdXBUb3BMaW5rcyA9ICh4KSA9PiB7XG5cdFx0cmV0dXJuIHBnLnN0cnVjdHVyZXMubWVudXMucG9wdXBUb3BMaW5rcyh4LCB0cnVlKTtcblx0fTtcblx0cGcuc3RydWN0dXJlcy5zaG9ydG1lbnVzLnBvcHVwUmVkaXJUb3BMaW5rcyA9IHBnLnN0cnVjdHVyZXMuc2hvcnRtZW51cy5wb3B1cFRvcExpbmtzO1xuXHRwZy5zdHJ1Y3R1cmVzLmxpdGUgPSB7fTtcblx0cGcuc3RydWN0dXJlcy5saXRlLnBvcHVwTGF5b3V0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBbJ3BvcHVwVGl0bGUnLCAncG9wdXBQcmV2aWV3J107XG5cdH07XG5cdHBnLnN0cnVjdHVyZXMubGl0ZS5wb3B1cFRpdGxlID0gKHgpID0+IHtcblx0XHRsb2coYCR7eC5hcnRpY2xlfTogc3RydWN0dXJlcy5saXRlLnBvcHVwVGl0bGVgKTtcblx0XHQvLyByZXR1cm4gbmF2bGlua1N0cmluZ1RvSFRNTCgnPGI+PDxtYWlubGluaz4+PC9iPicseC5hcnRpY2xlLHgucGFyYW1zKTtcblx0XHRyZXR1cm4gYDxkaXY+PHNwYW4gY2xhc3M9XCJwb3B1cF9tYWlubGlua1wiPjxiPiR7eC5hcnRpY2xlLnRvU3RyaW5nKCl9PC9iPjwvc3Bhbj48L2Rpdj5gO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBzdHJ1Y3R1cmVzLmpzXG5cdC8vIFNUQVJURklMRTogYXV0b2VkaXQuanNcblx0Y29uc3Qgc3Vic3RpdHV0ZSA9IChkYXRhLCBjbWRCb2R5KSA9PiB7XG5cdFx0Ly8gbXcubm90aWZ5KGBzdWJcXG5mcm9tOiAke2NtZEJvZHkuZnJvbX1cXG50bzogJHtjbWRCb2R5LnRvfVxcbmZsYWdzOiAke2NtZEJvZHkuZmxhZ3N9YCwge3RhZzogJ3BvcHVwcycsIHR5cGU6ICd3YXJuJ30pO1xuXHRcdGNvbnN0IGZyb21SZSA9IG5ldyBSZWdFeHAoY21kQm9keS5mcm9tLCBjbWRCb2R5LmZsYWdzKTtcblx0XHRyZXR1cm4gZGF0YS5yZXBsYWNlKGZyb21SZSwgY21kQm9keS50byk7XG5cdH07XG5cdGNvbnN0IGV4ZWNDbWRzID0gKGRhdGEsIGNtZExpc3QpID0+IHtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgY21kTGlzdCkge1xuXHRcdFx0ZGF0YSA9IGVsZW1lbnQuYWN0aW9uKGRhdGEsIGVsZW1lbnQpO1xuXHRcdH1cblx0XHRyZXR1cm4gZGF0YTtcblx0fTtcblx0Y29uc3QgcGFyc2VDbWQgPSBmdW5jdGlvbiBwYXJzZUNtZChzdHIpIHtcblx0XHQvLyByZXR1cm5zIGEgbGlzdCBvZiBjb21tYW5kc1xuXHRcdGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGxldCBwID0gZmFsc2U7XG5cdFx0c3dpdGNoIChzdHIuY2hhckF0KDApKSB7XG5cdFx0XHRjYXNlICdzJzpcblx0XHRcdFx0cCA9IHBhcnNlU3Vic3RpdHV0ZShzdHIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKHApIHtcblx0XHRcdHJldHVybiBbcCwgcGFyc2VDbWQocC5yZW1haW5kZXIpXTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHQvLyBGSVhNRTogT25seSB1c2VkIG9uY2UgaGVyZSwgY29uZnVzaW5nIHdpdGggbmF0aXZlIChhbmQgbW9yZSB3aWRlbHktdXNlZCkgdW5lc2NhcGUsIHNob3VsZCBwcm9iYWJseSBiZSByZXBsYWNlZFxuXHQvLyBUaGVuIGFnYWluLCB1bmVzY2FwZSBpcyBzZW1pLXNvZnQtZGVwcmVjYXRlZCwgc28gd2Ugc2hvdWxkIGxvb2sgaW50byByZXBsYWNpbmcgdGhhdCB0b29cblx0Y29uc3QgdW5Fc2NhcGUgPSAoc3RyLCBzZXApID0+IHtcblx0XHRyZXR1cm4gc3RyXG5cdFx0XHQuc3BsaXQoJ1xcXFxcXFxcJylcblx0XHRcdC5qb2luKCdcXFxcJylcblx0XHRcdC5zcGxpdChgXFxcXCR7c2VwfWApXG5cdFx0XHQuam9pbihzZXApXG5cdFx0XHQuc3BsaXQoU3RyaW5nLnJhd2BcXG5gKVxuXHRcdFx0LmpvaW4oJ1xcbicpO1xuXHR9O1xuXHRjb25zdCBwYXJzZVN1YnN0aXR1dGUgPSAoc3RyKSA9PiB7XG5cdFx0Ly8gdGFrZXMgYSBzdHJpbmcgbGlrZSBzL2EvYi9mbGFncztvdGhlcmNtZHMgYW5kIHBhcnNlcyBpdFxuXHRcdGxldCBmcm9tO1xuXHRcdGxldCB0bztcblx0XHRsZXQgZmxhZ3M7XG5cdFx0bGV0IHRtcDtcblx0XHRpZiAoc3RyLmxlbmd0aCA8IDQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3Qgc2VwID0gc3RyLmNoYXJBdCgxKTtcblx0XHRzdHIgPSBzdHIuc2xpY2UoMik7XG5cdFx0dG1wID0gc2tpcE92ZXIoc3RyLCBzZXApO1xuXHRcdGlmICh0bXApIHtcblx0XHRcdGZyb20gPSB0bXAuc2VnbWVudDtcblx0XHRcdHN0ciA9IHRtcC5yZW1haW5kZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dG1wID0gc2tpcE92ZXIoc3RyLCBzZXApO1xuXHRcdGlmICh0bXApIHtcblx0XHRcdHRvID0gdG1wLnNlZ21lbnQ7XG5cdFx0XHRzdHIgPSB0bXAucmVtYWluZGVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGZsYWdzID0gJyc7XG5cdFx0aWYgKHN0ci5sZW5ndGggPiAwKSB7XG5cdFx0XHR0bXAgPSBza2lwT3ZlcihzdHIsICc7JykgfHwgc2tpcFRvRW5kKHN0ciwgJzsnKTtcblx0XHRcdGlmICh0bXApIHtcblx0XHRcdFx0ZmxhZ3MgPSB0bXAuc2VnbWVudDtcblx0XHRcdFx0c3RyID0gdG1wLnJlbWFpbmRlcjtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFjdGlvbjogc3Vic3RpdHV0ZSxcblx0XHRcdGZyb20sXG5cdFx0XHR0byxcblx0XHRcdGZsYWdzLFxuXHRcdFx0cmVtYWluZGVyOiBzdHIsXG5cdFx0fTtcblx0fTtcblx0Y29uc3Qgc2tpcE92ZXIgPSAoc3RyLCBzZXApID0+IHtcblx0XHRjb25zdCBlbmRTZWdtZW50ID0gZmluZE5leHQoc3RyLCBzZXApO1xuXHRcdGlmIChlbmRTZWdtZW50IDwgMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBzZWdtZW50ID0gdW5Fc2NhcGUoc3RyLnNsaWNlKDAsIE1hdGgubWF4KDAsIGVuZFNlZ21lbnQpKSwgc2VwKTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VnbWVudCxcblx0XHRcdHJlbWFpbmRlcjogc3RyLnNsaWNlKE1hdGgubWF4KDAsIGVuZFNlZ21lbnQgKyAxKSksXG5cdFx0fTtcblx0fTtcblx0Y29uc3Qgc2tpcFRvRW5kID0gKHN0ciwgX3NlcCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZWdtZW50OiBzdHIsXG5cdFx0XHRyZW1haW5kZXI6ICcnLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IGZpbmROZXh0ID0gKHN0ciwgY2gpID0+IHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKHN0ci5jaGFyQXQoaSkgPT09ICdcXFxcJykge1xuXHRcdFx0XHRpICs9IDI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc3RyLmNoYXJBdChpKSA9PT0gY2gpIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fTtcblx0Y29uc3Qgc2V0Q2hlY2tib3ggPSAocGFyYW0sIGJveCkgPT4ge1xuXHRcdGNvbnN0IHZhbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZShwYXJhbSk7XG5cdFx0aWYgKHZhbCkge1xuXHRcdFx0c3dpdGNoICh2YWwpIHtcblx0XHRcdFx0Y2FzZSAnMSc6XG5cdFx0XHRcdGNhc2UgJ3llcyc6XG5cdFx0XHRcdGNhc2UgJ3RydWUnOlxuXHRcdFx0XHRcdGJveC5jaGVja2VkID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnMCc6XG5cdFx0XHRcdGNhc2UgJ25vJzpcblx0XHRcdFx0Y2FzZSAnZmFsc2UnOlxuXHRcdFx0XHRcdGJveC5jaGVja2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBhdXRvRWRpdCA9IGZ1bmN0aW9uIGF1dG9FZGl0KCkge1xuXHRcdHNldHVwUG9wdXBzKCgpID0+IHtcblx0XHRcdGlmIChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2F1dG9pbXBsJykgIT09IHBvcHVwU3RyaW5nKCdhdXRvZWRpdF92ZXJzaW9uJykpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3dhdGNobGlzdCcpICYmIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYWN0b2tlbicpID09PSBhdXRvQ2xpY2tUb2tlbigpKSB7XG5cdFx0XHRcdHBnLmZuLm1vZGlmeVdhdGNobGlzdChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3RpdGxlJyksIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYWN0aW9uJykpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFkb2N1bWVudC5lZGl0Zm9ybSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYXV0b0VkaXQuYWxyZWFkeVJhbikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRhdXRvRWRpdC5hbHJlYWR5UmFuID0gdHJ1ZTtcblx0XHRcdGNvbnN0IGNtZFN0cmluZyA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b2VkaXQnKTtcblx0XHRcdGlmIChjbWRTdHJpbmcpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBlZGl0Ym94ID0gZG9jdW1lbnQuZWRpdGZvcm0ud3BUZXh0Ym94MTtcblx0XHRcdFx0XHRjb25zdCBjbWRMaXN0ID0gcGFyc2VDbWQoY21kU3RyaW5nKTtcblx0XHRcdFx0XHRjb25zdCBpbnB1dCA9IGVkaXRib3gudmFsdWU7XG5cdFx0XHRcdFx0Y29uc3Qgb3V0cHV0ID0gZXhlY0NtZHMoaW5wdXQsIGNtZExpc3QpO1xuXHRcdFx0XHRcdGVkaXRib3gudmFsdWUgPSBvdXRwdXQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2V0Q2hlY2tib3goJ2F1dG9taW5vcicsIGRvY3VtZW50LmVkaXRmb3JtLndwTWlub3JlZGl0KTtcblx0XHRcdHNldENoZWNrYm94KCdhdXRvd2F0Y2gnLCBkb2N1bWVudC5lZGl0Zm9ybS53cFdhdGNodGhpcyk7XG5cdFx0XHRjb25zdCBydmlkID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvcnYnKTtcblx0XHRcdGlmIChydmlkKSB7XG5cdFx0XHRcdGNvbnN0IHVybCA9IGAke3BnLndpa2kuYXBpd2lraWJhc2V9P2FjdGlvbj1xdWVyeSZmb3JtYXQ9anNvbiZmb3JtYXR2ZXJzaW9uPTImcHJvcD1yZXZpc2lvbnMmcmV2aWRzPSR7cnZpZH1gO1xuXHRcdFx0XHRzdGFydERvd25sb2FkKHVybCwgbnVsbCwgYXV0b0VkaXQyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGF1dG9FZGl0MigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBhdXRvRWRpdDIgPSAoZCkgPT4ge1xuXHRcdGxldCBzdW1tYXJ5ID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvc3VtbWFyeScpO1xuXHRcdGxldCBzdW1tYXJ5cHJvbXB0ID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvc3VtbWFyeXByb21wdCcpO1xuXHRcdGxldCBzdW1tYXJ5bm90aWNlID0gJyc7XG5cdFx0aWYgKGQgJiYgZC5kYXRhICYmIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnYXV0b3J2JykpIHtcblx0XHRcdGNvbnN0IHMgPSBnZXRSdlN1bW1hcnkoc3VtbWFyeSwgZC5kYXRhKTtcblx0XHRcdGlmIChzID09PSBmYWxzZSkge1xuXHRcdFx0XHRzdW1tYXJ5cHJvbXB0ID0gdHJ1ZTtcblx0XHRcdFx0c3VtbWFyeW5vdGljZSA9IHBvcHVwU3RyaW5nKCdGYWlsZWQgdG8gZ2V0IHJldmlzaW9uIGluZm9ybWF0aW9uLCBwbGVhc2UgZWRpdCBtYW51YWxseS5cXG5cXG4nKTtcblx0XHRcdFx0c3VtbWFyeSA9IHNpbXBsZVByaW50ZihzdW1tYXJ5LCBbbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdhdXRvcnYnKSwgJyh1bmtub3duKScsICcodW5rbm93biknXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdW1tYXJ5ID0gcztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHN1bW1hcnlwcm9tcHQpIHtcblx0XHRcdGNvbnN0IHR4dCA9IHN1bW1hcnlub3RpY2UgKyBwb3B1cFN0cmluZygnRW50ZXIgYSBub24tZW1wdHkgZWRpdCBzdW1tYXJ5IG9yIHByZXNzIGNhbmNlbCB0byBhYm9ydCcpO1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBwcm9tcHQodHh0LCBzdW1tYXJ5KTtcblx0XHRcdGlmIChyZXNwb25zZSkge1xuXHRcdFx0XHRzdW1tYXJ5ID0gcmVzcG9uc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChzdW1tYXJ5KSB7XG5cdFx0XHRkb2N1bWVudC5lZGl0Zm9ybS53cFN1bW1hcnkudmFsdWUgPSBzdW1tYXJ5O1xuXHRcdH1cblx0XHQvLyBBdHRlbXB0IHRvIGF2b2lkIHBvc3NpYmxlIHByZW1hdHVyZSBjbGlja2luZyBvZiB0aGUgc2F2ZSBidXR0b25cblx0XHQvLyAobWF5YmUgZGVsYXlzIGluIHVwZGF0ZXMgdG8gdGhlIERPTSBhcmUgdG8gYmxhbWU/PyBvciBhIHJlZCBoZXJyaW5nKVxuXHRcdHNldFRpbWVvdXQoYXV0b0VkaXQzLCAxMDApO1xuXHR9O1xuXHRjb25zdCBhdXRvQ2xpY2tUb2tlbiA9ICgpID0+IHtcblx0XHRyZXR1cm4gbXcudXNlci5zZXNzaW9uSWQoKTtcblx0fTtcblx0Y29uc3QgYXV0b0VkaXQzID0gKCkgPT4ge1xuXHRcdGlmIChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2FjdG9rZW4nKSAhPT0gYXV0b0NsaWNrVG9rZW4oKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBidG4gPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ2F1dG9jbGljaycpO1xuXHRcdGlmIChidG4pIHtcblx0XHRcdGlmIChkb2N1bWVudC5lZGl0Zm9ybSAmJiBkb2N1bWVudC5lZGl0Zm9ybVtidG5dKSB7XG5cdFx0XHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmVkaXRmb3JtW2J0bl07XG5cdFx0XHRcdGNvbnN0IG1zZyA9IHRwcmludGYoXG5cdFx0XHRcdFx0J1RoZSAlcyBidXR0b24gaGFzIGJlZW4gYXV0b21hdGljYWxseSBjbGlja2VkLiBQbGVhc2Ugd2FpdCBmb3IgdGhlIG5leHQgcGFnZSB0byBsb2FkLicsXG5cdFx0XHRcdFx0W2J1dHRvbi52YWx1ZV1cblx0XHRcdFx0KTtcblx0XHRcdFx0YmFubmVyTWVzc2FnZShtc2cpO1xuXHRcdFx0XHRkb2N1bWVudC50aXRsZSA9IGAoJHtkb2N1bWVudC50aXRsZX0pYDtcblx0XHRcdFx0YnV0dG9uLmNsaWNrKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHR0cHJpbnRmKCdDb3VsZCBub3QgZmluZCBidXR0b24gJXMuIFBsZWFzZSBjaGVjayB0aGUgc2V0dGluZ3MgaW4geW91ciBqYXZhc2NyaXB0IGZpbGUuJywgW2J0bl0pLFxuXHRcdFx0XHRcdHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgYmFubmVyTWVzc2FnZSA9IChzKSA9PiB7XG5cdFx0Y29uc3QgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdoMScpO1xuXHRcdGlmIChoZWFkaW5ncykge1xuXHRcdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRkaXYuaW5uZXJIVE1MID0gYDxmb250IHNpemU9KzE+PGI+JHtwZy5lc2NhcGVRdW90ZXNIVE1MKHMpfTwvYj48L2ZvbnQ+YDtcblx0XHRcdGhlYWRpbmdzWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRpdiwgaGVhZGluZ3NbMF0pO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgZ2V0UnZTdW1tYXJ5ID0gKHRlbXBsYXRlLCBqc29uKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IG8gPSBnZXRKc09iaihqc29uKTtcblx0XHRcdGNvbnN0IFtlZGl0XSA9IGFueUNoaWxkKG8ucXVlcnkucGFnZXMpLnJldmlzaW9ucztcblx0XHRcdGNvbnN0IHRpbWVzdGFtcCA9IGVkaXQudGltZXN0YW1wXG5cdFx0XHRcdC5zcGxpdCgvW0EtWl0vZylcblx0XHRcdFx0LmpvaW4oJyAnKVxuXHRcdFx0XHQucmVwbGFjZSgvXiAqfCAqJC9nLCAnJyk7XG5cdFx0XHRyZXR1cm4gc2ltcGxlUHJpbnRmKHRlbXBsYXRlLCBbZWRpdC5yZXZpZCwgdGltZXN0YW1wLCBlZGl0LnVzZXJoaWRkZW4gPyAnKGhpZGRlbiknIDogZWRpdC51c2VyXSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXHQvLyBFTkRGSUxFOiBhdXRvZWRpdC5qc1xuXHQvLyBTVEFSVEZJTEU6IGRvd25sb2FkZXIuanNcblx0LyoqXG5cdCAqIEBmaWxlb3ZlcnZpZXdcblx0ICoge0Bzb3VyY2UgRG93bmxvYWRlcn0sIGEgeG1saHR0cHJlcXVlc3Qgd3JhcHBlciwgYW5kIGhlbHBlciBmdW5jdGlvbnMuXG5cdCAqL1xuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBEb3dubG9hZGVyXG5cdCAqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKiBAY2xhc3MgVGhlIERvd25sb2FkZXIgY2xhc3MuIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIHRvIGRvd25sb2FkIHN0dWZmLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgdG8gZG93bmxvYWQuIFRoaXMgY2FuIGJlIG9taXR0ZWQgYW5kIHN1cHBsaWVkIGxhdGVyLlxuXHQgKi9cblx0Y2xhc3MgRG93bmxvYWRlciB7XG5cdFx0Y29uc3RydWN0b3IodXJsKSB7XG5cdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR0aGlzLmh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRcdH1cblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIHVybCB0byBkb3dubG9hZFxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnVybCA9IHVybDtcblx0XHRcdC8qKlxuXHRcdFx0ICogQSB1bml2ZXJzYWxseSB1bmlxdWUgSUQgbnVtYmVyXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmlkID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogTW9kaWZpY2F0aW9uIGRhdGUsIHRvIGJlIGN1bGxlZCBmcm9tIHRoZSBpbmNvbWluZyBoZWFkZXJzXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgRGF0ZVxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5sYXN0TW9kaWZpZWQgPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBXaGF0IHRvIGRvIHdoZW4gdGhlIGRvd25sb2FkIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBGdW5jdGlvblxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5jYWxsYmFja0Z1bmN0aW9uID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogV2hhdCB0byBkbyBvbiBmYWlsdXJlXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgRnVuY3Rpb25cblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMub25GYWlsdXJlID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogRmxhZyBzZXQgb24gPGNvZGU+YWJvcnQ8L2NvZGU+XG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmFib3J0ZWQgPSBmYWxzZTtcblx0XHRcdC8qKlxuXHRcdFx0ICogSFRUUCBtZXRob2QuIFNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWM5Lmh0bWwgZm9yXG5cdFx0XHQgKiBwb3NzaWJpbGl0aWVzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdFx0ICovXG5cdFx0XHR0aGlzLm1ldGhvZCA9ICdHRVQnO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBBc3luYyBmbGFnLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5hc3luYyA9IHRydWU7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFN1Ym1pdHMgdGhlIGh0dHAgcmVxdWVzdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0geFxuXHRcdCAqL1xuXHRcdHNlbmQoeCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLnNlbmQoeCk7XG5cdFx0fVxuXHRcdC8qIEFib3J0cyB0aGUgZG93bmxvYWQsIHNldHRpbmcgdGhlIDxjb2RlPmFib3J0ZWQ8L2NvZGU+IGZpZWxkIHRvIHRydWUuICovXG5cdFx0YWJvcnQoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdHRoaXMuYWJvcnRlZCA9IHRydWU7XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLmFib3J0KCk7XG5cdFx0fVxuXHRcdC8qKiBSZXR1cm5zIHRoZSBkb3dubG9hZGVkIGRhdGEuICovXG5cdFx0Z2V0RGF0YSgpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5yZXNwb25zZVRleHQ7XG5cdFx0fVxuXHRcdC8qKiBQcmVwYXJlcyB0aGUgZG93bmxvYWQuICovXG5cdFx0c2V0VGFyZ2V0KCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmh0dHAub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmwsIHRoaXMuYXN5bmMpO1xuXHRcdFx0dGhpcy5odHRwLnNldFJlcXVlc3RIZWFkZXIoJ0FwaS1Vc2VyLUFnZW50JywgcGcuYXBpLnVzZXJBZ2VudCk7XG5cdFx0fVxuXHRcdC8qKiBHZXRzIHRoZSBzdGF0ZSBvZiB0aGUgZG93bmxvYWQuICovXG5cdFx0Z2V0UmVhZHlTdGF0ZSgpIHtcblx0XHRcdGlmICghdGhpcy5odHRwKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuaHR0cC5yZWFkeVN0YXRlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTdGFydHMgdGhlIGRvd25sb2FkLlxuXHRcdCAqIE5vdGUgdGhhdCBzZXRUYXJnZXQge0Bzb3VyY2UgRG93bmxvYWRlciNzZXRUYXJnZXR9IG11c3QgYmUgcnVuIGZpcnN0XG5cdFx0ICovXG5cdFx0c3RhcnQoKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHBnLm1pc2MuZG93bmxvYWRzSW5Qcm9ncmVzc1t0aGlzLmlkXSA9IHNlbGY7XG5cdFx0XHR0aGlzLmh0dHAuc2VuZChudWxsKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogR2V0cyB0aGUgJ0xhc3QtTW9kaWZpZWQnIGRhdGUgZnJvbSB0aGUgZG93bmxvYWQgaGVhZGVycy5cblx0XHQgKiBTaG91bGQgYmUgcnVuIGFmdGVyIHRoZSBkb3dubG9hZCBjb21wbGV0ZXMuXG5cdFx0ICogUmV0dXJucyA8Y29kZT5udWxsPC9jb2RlPiBvbiBmYWlsdXJlLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybiB7RGF0ZX1cblx0XHQgKi9cblx0XHRnZXRMYXN0TW9kaWZpZWREYXRlKCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRsZXQgbGFzdG1vZDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxhc3Rtb2QgPSB0aGlzLmh0dHAuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xhc3QtTW9kaWZpZWQnKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0fVxuXHRcdFx0aWYgKGxhc3Rtb2QpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBEYXRlKGxhc3Rtb2QpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZiBjYWxsYmFjayBmdW5jdGlvbiwgY2FsbGVkIGFzIDxjb2RlPmYodGhpcyk8L2NvZGU+IG9uIHN1Y2Nlc3Ncblx0XHQgKi9cblx0XHRzZXRDYWxsYmFjayhmKSB7XG5cdFx0XHRpZiAoIXRoaXMuaHR0cCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZjtcblx0XHR9XG5cdFx0Z2V0U3RhdHVzKCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0dHApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy5odHRwLnN0YXR1cztcblx0XHR9XG5cdH1cblx0bmV3IERvd25sb2FkZXIoKTtcblx0cGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzID0ge307XG5cdC8vIGhlbHBlciBmdW5jdGlvbnNcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcge0Bzb3VyY2UgRG93bmxvYWRlcn0gYW5kIHByZXBhcmVzIGl0IGZvciBhY3Rpb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBkb3dubG9hZFxuXHQgKiBAcGFyYW0ge2ludGVnZXJ9IGlkIFRoZSBJRCBvZiB0aGUge0Bzb3VyY2UgRG93bmxvYWRlcn0gb2JqZWN0XG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBpbnZva2VkIG9uIHN1Y2Nlc3Ncblx0ICogQHBhcmFtIHtudW1iZXJ9IG9uZmFpbHVyZVxuXHQgKiBAcmV0dXJuIHtTdHJpbmcvRG93bmxvYWRlcn0gdGhlIHtAc291cmNlIERvd25sb2FkZXJ9IG9iamVjdCBjcmVhdGVkLCBvciAnb2hkZWFyJyBpZiBhbiB1bnN1cHBvcnRlZCBicm93c2VyXG5cdCAqL1xuXHRjb25zdCBuZXdEb3dubG9hZCA9IGZ1bmN0aW9uIG5ld0Rvd25sb2FkKHVybCwgaWQsIGNhbGxiYWNrLCBvbmZhaWx1cmUpIHtcblx0XHRjb25zdCBkID0gbmV3IERvd25sb2FkZXIodXJsKTtcblx0XHRpZiAoIWQuaHR0cCkge1xuXHRcdFx0cmV0dXJuICdvaGRlYXInO1xuXHRcdH1cblx0XHRkLmlkID0gaWQ7XG5cdFx0ZC5zZXRUYXJnZXQoKTtcblx0XHRpZiAoIW9uZmFpbHVyZSkge1xuXHRcdFx0b25mYWlsdXJlID0gMjtcblx0XHR9XG5cdFx0Y29uc3QgZiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChkLmdldFJlYWR5U3RhdGUoKSA9PT0gNCkge1xuXHRcdFx0XHRkZWxldGUgcGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzW3RoaXMuaWRdO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmIChkLmdldFN0YXR1cygpID09PSAyMDApIHtcblx0XHRcdFx0XHRcdGQuZGF0YSA9IGQuZ2V0RGF0YSgpO1xuXHRcdFx0XHRcdFx0ZC5sYXN0TW9kaWZpZWQgPSBkLmdldExhc3RNb2RpZmllZERhdGUoKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrKGQpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIG9uZmFpbHVyZSA9PT0gdHlwZW9mIDEpIHtcblx0XHRcdFx0XHRcdGlmIChvbmZhaWx1cmUgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdC8vIHJldHJ5XG5cdFx0XHRcdFx0XHRcdG5ld0Rvd25sb2FkKHVybCwgaWQsIGNhbGxiYWNrLCBvbmZhaWx1cmUgLSAxKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBvbmZhaWx1cmUgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdG9uZmFpbHVyZShkLCB1cmwsIGlkLCBjYWxsYmFjayk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBpZ25vcmUgaXQgKi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0ZC5zZXRDYWxsYmFjayhmKTtcblx0XHRyZXR1cm4gZDtcblx0fTtcblx0LyoqXG5cdCAqIFNpbXVsYXRlcyBhIGRvd25sb2FkIGZyb20gY2FjaGVkIGRhdGEuXG5cdCAqIFRoZSBzdXBwbGllZCBkYXRhIGlzIHB1dCBpbnRvIGEge0Bzb3VyY2UgRG93bmxvYWRlcn0gYXMgaWYgaXQgaGFkIGRvd25sb2FkZWQgaXQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybC5cblx0ICogQHBhcmFtIHtpbnRlZ2VyfSBpZCBUaGUgSUQuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjaywgd2hpY2ggaXMgaW52b2tlZCBpbW1lZGlhdGVseSBhcyA8Y29kZT5jYWxsYmFjayhkKTwvY29kZT4sXG5cdCAqIHdoZXJlIDxjb2RlPmQ8L2NvZGU+IGlzIHRoZSBuZXcge0Bzb3VyY2UgRG93bmxvYWRlcn0uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIFRoZSAoY2FjaGVkKSBkYXRhLlxuXHQgKiBAcGFyYW0ge0RhdGV9IGxhc3RNb2RpZmllZCBUaGUgKGNhY2hlZCkgbGFzdCBtb2RpZmllZCBkYXRlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gb3duZXJcblx0ICovXG5cdGNvbnN0IGZha2VEb3dubG9hZCA9ICh1cmwsIGlkLCBjYWxsYmFjaywgZGF0YSwgbGFzdE1vZGlmaWVkLCBvd25lcikgPT4ge1xuXHRcdGNvbnN0IGQgPSBuZXdEb3dubG9hZCh1cmwsIGNhbGxiYWNrKTtcblx0XHRkLm93bmVyID0gb3duZXI7XG5cdFx0ZC5pZCA9IGlkO1xuXHRcdGQuZGF0YSA9IGRhdGE7XG5cdFx0ZC5sYXN0TW9kaWZpZWQgPSBsYXN0TW9kaWZpZWQ7XG5cdFx0cmV0dXJuIGNhbGxiYWNrKGQpO1xuXHR9O1xuXHQvKipcblx0ICogU3RhcnRzIGEgZG93bmxvYWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHVybCB0byBkb3dubG9hZFxuXHQgKiBAcGFyYW0ge2ludGVnZXJ9IGlkIFRoZSBJRCBvZiB0aGUge0Bzb3VyY2UgRG93bmxvYWRlcn0gb2JqZWN0XG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBpbnZva2VkIG9uIHN1Y2Nlc3Ncblx0ICogQHJldHVybiB7U3RyaW5nL0Rvd25sb2FkZXJ9IHRoZSB7QHNvdXJjZSBEb3dubG9hZGVyfSBvYmplY3QgY3JlYXRlZCwgb3IgJ29oZGVhcicgaWYgYW4gdW5zdXBwb3J0ZWQgYnJvd3NlclxuXHQgKi9cblx0Y29uc3Qgc3RhcnREb3dubG9hZCA9ICh1cmwsIGlkLCBjYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IGQgPSBuZXdEb3dubG9hZCh1cmwsIGlkLCBjYWxsYmFjayk7XG5cdFx0aWYgKHR5cGVvZiBkID09PSB0eXBlb2YgJycpIHtcblx0XHRcdHJldHVybiBkO1xuXHRcdH1cblx0XHRkLnN0YXJ0KCk7XG5cdFx0cmV0dXJuIGQ7XG5cdH07XG5cdC8qKlxuXHQgKiBBYm9ydHMgYWxsIGRvd25sb2FkcyB3aGljaCBoYXZlIGJlZW4gc3RhcnRlZC5cblx0ICovXG5cdGNvbnN0IGFib3J0QWxsRG93bmxvYWRzID0gKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgeCBpbiBwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3MpIHtcblx0XHRcdGlmICghT2JqZWN0Lmhhc093bihwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3MsIHgpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cGcubWlzYy5kb3dubG9hZHNJblByb2dyZXNzW3hdLmFib3J0ZWQgPSB0cnVlO1xuXHRcdFx0XHRwZy5taXNjLmRvd25sb2Fkc0luUHJvZ3Jlc3NbeF0uYWJvcnQoKTtcblx0XHRcdFx0ZGVsZXRlIHBnLm1pc2MuZG93bmxvYWRzSW5Qcm9ncmVzc1t4XTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Ly8gRU5ERklMRTogZG93bmxvYWRlci5qc1xuXHQvLyBTVEFSVEZJTEU6IGxpdmVwcmV2aWV3LmpzXG5cdC8vIFRPRE86IGxvY2F0aW9uIGlzIG9mdGVuIG5vdCBjb3JyZWN0IChlZyByZWxhdGl2ZSBsaW5rcyBpbiBwcmV2aWV3cylcblx0Ly8gTk9URTogcmVtb3ZlZCBtZDUgYW5kIGltYWdlIGFuZCBtYXRoIHBhcnNpbmcuIHdhcyBicm9rZW4sIGxvdHMgb2YgYnl0ZXMuXG5cdC8qKlxuXHQgKiBJbnN0YVZpZXcgLSBhIE1lZGlhd2lraSB0byBIVE1MIGNvbnZlcnRlciBpbiBKYXZhU2NyaXB0XG5cdCAqIFZlcnNpb24gMC42LjFcblx0ICogQ29weXJpZ2h0IChDKSBQZWRybyBGYXlvbGxlIDIwMDUtMjAwNlxuXHQgKiB7QGxpbmsgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVXNlcjpQaWxhZn1cblx0ICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBsaWNlbnNlXG5cdCAqXG5cdCAqIENoYW5nZWxvZzpcblx0ICpcblx0ICogMC42LjFcblx0ICogLSBGaXhlZCBwcm9ibGVtIGNhdXNlZCBieSBcXHIgY2hhcmFjdGVyc1xuXHQgKiAtIEltcHJvdmVkIGlubGluZSBmb3JtYXR0aW5nIHBhcnNlclxuXHQgKlxuXHQgKiAwLjZcblx0ICogLSBDaGFuZ2VkIG5hbWUgdG8gSW5zdGFWaWV3XG5cdCAqIC0gU29tZSBtYWpvciBjb2RlIHJlb3JnYW5pemF0aW9ucyBhbmQgZmFjdG9yZWQgb3V0IHNvbWUgY29tbW9uIGZ1bmN0aW9uc1xuXHQgKiAtIEhhbmRsZWQgY29udmVyc2lvbiBvZiByZWxhdGl2ZSBsaW5rcyAoaS5lLiBbWy9mb29dXSlcblx0ICogLSBGaXhlZCBtaXNyZW5kZXJpbmcgb2YgYWRqYWNlbnQgZGVmaW5pdGlvbiBsaXN0IGl0ZW1zXG5cdCAqIC0gRml4ZWQgYnVnIGluIHRhYmxlIGhlYWRpbmdzIGhhbmRsaW5nXG5cdCAqIC0gQ2hhbmdlZCBkYXRlIGZvcm1hdCBpbiBzaWduYXR1cmVzIHRvIHJlZmxlY3QgTWVkaWF3aWtpJ3Ncblx0ICogLSBGaXhlZCBoYW5kbGluZyBvZiBbWzpJbWFnZTouLi5dXVxuXHQgKiAtIFVwZGF0ZWQgTUQ1IGZ1bmN0aW9uIChob3BlZnVsbHkgaXQgd2lsbCB3b3JrIHdpdGggVVRGLTgpXG5cdCAqIC0gRml4ZWQgYnVnIGluIGhhbmRsaW5nIG9mIGxpbmtzIGluc2lkZSBpbWFnZXNcblx0ICpcblx0ICogVG8gZG86XG5cdCAqIC0gQmV0dGVyIHN1cHBvcnQgZm9yIG1hdGggdGFnc1xuXHQgKiAtIEZ1bGwgc3VwcG9ydCBmb3Igbm93aWtpIHRhZ1xuXHQgKiAtIFBhcnNlci1iYXNlZCAoYXMgb3Bwb3NlZCB0byBSZWdFeHAtYmFzZWQpIGlubGluZSB3aWtpY29kZSBoYW5kbGluZyAobWFrZSBpdCBvbmUtcGFzcyBhbmRcblx0ICogICBidWxsZXQtcHJvb2YpXG5cdCAqIC0gU3VwcG9ydCBmb3IgdGVtcGxhdGVzICh0aHJvdWdoIEFKQVgpXG5cdCAqIC0gU3VwcG9ydCBmb3IgY29sb3VyZWQgbGlua3MgKEFKQVgpXG5cdCAqL1xuXHRjb25zdCBJbnN0YSA9IHt9O1xuXHRjb25zdCBzZXR1cExpdmVQcmV2aWV3ID0gKCkgPT4ge1xuXHRcdGxldCBfYjtcblx0XHQvLyBvcHRpb25zXG5cdFx0SW5zdGEuY29uZiA9IHtcblx0XHRcdGJhc2VVcmw6ICcnLFxuXHRcdFx0dXNlcjoge30sXG5cdFx0XHR3aWtpOiB7XG5cdFx0XHRcdGxhbmc6IHBnLndpa2kubGFuZyxcblx0XHRcdFx0aW50ZXJ3aWtpOiBwZy53aWtpLmludGVyd2lraSxcblx0XHRcdFx0ZGVmYXVsdF90aHVtYl93aWR0aDogMTgwLFxuXHRcdFx0fSxcblx0XHRcdHBhdGhzOiB7XG5cdFx0XHRcdGFydGljbGVzOiBgJHtwZy53aWtpLmFydGljbGVQYXRofS9gLFxuXHRcdFx0XHQvLyBPbmx5IHVzZWQgZm9yIEluc3RhIHByZXZpZXdzIHdpdGggaW1hZ2VzLiAobm90IGluIHBvcHVwcylcblx0XHRcdFx0bWF0aDogJy9tYXRoLycsXG5cdFx0XHRcdGltYWdlczogJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvJyxcblx0XHRcdFx0aW1hZ2VzX2ZhbGxiYWNrOiAnLy93bS56aG9uZ3dlbi53aWtpL2NvbW1vbnMvJyxcblx0XHRcdH0sXG5cdFx0XHRsb2NhbGU6IHtcblx0XHRcdFx0dXNlcjogbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNVc2VySWRdLFxuXHRcdFx0XHRpbWFnZTogbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNJbWFnZUlkXSxcblx0XHRcdFx0Y2F0ZWdvcnk6IG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zQ2F0ZWdvcnlJZF0sXG5cdFx0XHRcdC8vIHNob3VsZG4ndCBiZSB1c2VkIGluIHBvcHVwIHByZXZpZXdzLCBpIHRoaW5rXG5cdFx0XHRcdG1vbnRoczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuXHRcdFx0fSxcblx0XHR9O1xuXHRcdC8vIG9wdGlvbnMgd2l0aCBkZWZhdWx0IHZhbHVlcyBvciBiYWNrcmVmZXJlbmNlc1xuXHRcdChfYiA9IEluc3RhLmNvbmYudXNlcikubmFtZSB8fCAoX2IubmFtZSA9ICdRaXV3ZW4gQmFpa2UgY29udHJpYnV0b3JzJyk7XG5cdFx0SW5zdGEuY29uZi51c2VyLnNpZ25hdHVyZSA9IGBbWyR7SW5zdGEuY29uZi5sb2NhbGUudXNlcn06JHtJbnN0YS5jb25mLnVzZXIubmFtZX18JHtJbnN0YS5jb25mLnVzZXIubmFtZX1dXWA7XG5cdFx0Ly8gZGVmaW5lIGNvbnN0YW50c1xuXHRcdEluc3RhLkJMT0NLX0lNQUdFID0gbmV3IFJlZ0V4cChcblx0XHRcdGBeXFxcXFtcXFxcWyg/OkZpbGV8SW1hZ2V8JHtJbnN0YS5jb25mLmxvY2FsZS5pbWFnZX0pOi4qP1xcXFx8Lio/KD86ZnJhbWV8dGh1bWJuYWlsfHRodW1ifG5vbmV8cmlnaHR8bGVmdHxjZW50ZXIpYCxcblx0XHRcdCdpJ1xuXHRcdCk7XG5cdH07XG5cdEluc3RhLmR1bXAgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcblx0XHRpZiAodHlwZW9mIGZyb20gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRmcm9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZnJvbX1gKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiB0byA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dG99YCk7XG5cdFx0fVxuXHRcdHRvLmlubmVySFRNTCA9IHRoaXMuY29udmVydChmcm9tLnZhbHVlKTtcblx0fTtcblx0SW5zdGEuY29udmVydCA9ICh3aWtpKSA9PiB7XG5cdFx0Y29uc3QgbGwgPSB0eXBlb2Ygd2lraSA9PT0gJ3N0cmluZycgPyB3aWtpLnJlcGxhY2UoL1xcci9nLCAnJykuc3BsaXQoL1xcbi8pIDogd2lraTsgLy8gbGluZXMgb2Ygd2lraWNvZGVcblx0XHRsZXQgbyA9ICcnOyAvLyByZXN1bHQgb2YgcGFzc2luZyBhIHJlZ2V4cCB0byBjb21wYXJlTGluZVN0cmluZ09yUmVnKClcblx0XHRsZXQgcCA9IDA7XG5cdFx0bGV0IHI7XG5cdFx0Ly8gc29tZSBzaG9ydGhhbmRzXG5cdFx0Y29uc3QgcmVtYWluID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGxsLmxlbmd0aDtcblx0XHR9O1xuXHRcdGNvbnN0IHNoID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGxsLnNoaWZ0KCk7XG5cdFx0fTsgLy8gc2hpZnRcblx0XHRjb25zdCBwcyA9IChzKSA9PiB7XG5cdFx0XHRvICs9IHM7XG5cdFx0fTsgLy8gcHVzaFxuXG5cdFx0Ly8gc2ltaWxhciB0byBDJ3MgcHJpbnRmLCB1c2VzID8gYXMgcGxhY2Vob2xkZXJzLCA/PyB0byBlc2NhcGUgcXVlc3Rpb24gbWFya3Ncblx0XHRjb25zdCBmID0gZnVuY3Rpb24gZiguLi5hcmdzKSB7XG5cdFx0XHRsZXQgaSA9IDE7XG5cdFx0XHRjb25zdCBhID0gYXJncztcblx0XHRcdGxldCBbZl0gPSBhO1xuXHRcdFx0bGV0IG8gPSAnJztcblx0XHRcdGxldCBjO1xuXHRcdFx0bGV0IHA7XG5cdFx0XHRmb3IgKDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKChwID0gZi5pbmRleE9mKCc/JykpICsgMSkge1xuXHRcdFx0XHRcdC8vIGFsbG93IGNoYXJhY3RlciBlc2NhcGluZ1xuXHRcdFx0XHRcdGMgPSBmLmNoYXJBdChwICsgMSkgPT09ICc/JyA/IDEgOiAwO1xuXHRcdFx0XHRcdGkgLT0gYztcblx0XHRcdFx0XHRvICs9IGYuc2xpY2UoMCwgTWF0aC5tYXgoMCwgcCkpICsgKGMgPyAnPycgOiBhW2ldKTtcblx0XHRcdFx0XHRmID0gZi5zbGljZShwICsgMSArIGMpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbyArIGY7XG5cdFx0fTtcblx0XHRjb25zdCBodG1sX2VudGl0aWVzID0gKHMpID0+IHtcblx0XHRcdHJldHVybiBzLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcblx0XHR9O1xuXHRcdC8vIFdpa2kgdGV4dCBwYXJzaW5nIHRvIGh0bWwgaXMgYSBuaWdodG1hcmUuXG5cdFx0Ly8gVGhlIGJlbG93IGZ1bmN0aW9ucyBkZWxpYmVyYXRlbHkgZG9uJ3QgZXNjYXBlIHRoZSBhbXBlcnNhbmQgc2luY2UgdGhpcyB3b3VsZCBtYWtlIGl0IG1vcmVcblx0XHQvLyBkaWZmaWN1bHQsIGFuZCB3ZSBkb24ndCBhYnNvbHV0ZWx5IG5lZWQgdG8gZm9yIGhvdyB3ZSBuZWVkIGl0LiBUaGlzIG1lYW5zIHRoYXQgYW55XG5cdFx0Ly8gdW5lc2NhcGVkIGFtcGVyc2FuZHMgaW4gd2lraXRleHQgd2lsbCByZW1haW4gdW5lc2NhcGVkIGFuZCBjYW4gY2F1c2UgaW52YWxpZCBIVE1MLlxuXHRcdC8vIEJyb3dzZXJzIHNob3VsZCBhbGwgYmUgYWJsZSB0byBoYW5kbGUgaXQgdGhvdWdoLiBXZSBhbHNvIGVzY2FwZSBzaWduaWZpY2FudCB3aWtpbWFya3VwXG5cdFx0Ly8gY2hhcmFjdGVycyB0byBwcmV2ZW50IGZ1cnRoZXIgbWF0Y2hpbmcgb24gdGhlIHByb2Nlc3NlZCB0ZXh0LlxuXHRcdGNvbnN0IGh0bWxlc2NhcGVfdGV4dCA9IChzKSA9PiB7XG5cdFx0XHRyZXR1cm4gc1xuXHRcdFx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0XHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHRcdFx0LnJlcGxhY2UoLzovZywgJyYjNTg7Jylcblx0XHRcdFx0LnJlcGxhY2UoL1xcWy9nLCAnJiM5MTsnKVxuXHRcdFx0XHQucmVwbGFjZSgvXS9nLCAnJiM5MzsnKTtcblx0XHR9O1xuXHRcdGNvbnN0IGh0bWxlc2NhcGVfYXR0ciA9IChzKSA9PiB7XG5cdFx0XHRyZXR1cm4gaHRtbGVzY2FwZV90ZXh0KHMpLnJlcGxhY2UoLycvZywgJyYjMzk7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXHRcdH07XG5cdFx0Ly8gcmV0dXJuIHRoZSBmaXJzdCBub24gbWF0Y2hpbmcgY2hhcmFjdGVyIHBvc2l0aW9uIGJldHdlZW4gdHdvIHN0cmluZ3Ncblx0XHRjb25zdCBzdHJfaW1hdGNoID0gKGEsIGIpID0+IHtcblx0XHRcdGxldCBpO1xuXHRcdFx0bGV0IGw7XG5cdFx0XHRmb3IgKGkgPSAwLCBsID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRpZiAoYS5jaGFyQXQoaSkgIT09IGIuY2hhckF0KGkpKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBpO1xuXHRcdH07XG5cdFx0Ly8gY29tcGFyZSBjdXJyZW50IGxpbmUgYWdhaW5zdCBhIHN0cmluZyBvciByZWdleHBcblx0XHQvLyBpZiBwYXNzZWQgYSBzdHJpbmcgaXQgd2lsbCBjb21wYXJlIG9ubHkgdGhlIGZpcnN0IHN0cmluZy5sZW5ndGggY2hhcmFjdGVyc1xuXHRcdC8vIGlmIHBhc3NlZCBhIHJlZ2V4cCB0aGUgcmVzdWx0IGlzIHN0b3JlZCBpbiByXG5cdFx0Y29uc3QgY29tcGFyZUxpbmVTdHJpbmdPclJlZyA9IChjKSA9PiB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIGMgPT09ICdzdHJpbmcnID8gbGxbMF0gJiYgbGxbMF0uc2xpY2UoMCwgYy5sZW5ndGgpID09PSBjIDogKHIgPSBsbFswXSAmJiBsbFswXS5tYXRjaChjKSk7XG5cdFx0fTtcblx0XHRjb25zdCBjb21wYXJlTGluZVN0cmluZyA9IChjKSA9PiB7XG5cdFx0XHRyZXR1cm4gbGxbMF0gPT09IGM7XG5cdFx0fTsgLy8gY29tcGFyZSBjdXJyZW50IGxpbmUgYWdhaW5zdCBhIHN0cmluZ1xuXHRcdGNvbnN0IGNoYXJBdFBvaW50ID0gKHApID0+IHtcblx0XHRcdHJldHVybiBsbFswXS5jaGFyQXQocCk7XG5cdFx0fTsgLy8gcmV0dXJuIGNoYXIgYXQgcG9zIHBcblx0XHRjb25zdCBlbmRsID0gKHMpID0+IHtcblx0XHRcdHBzKHMpO1xuXHRcdFx0c2goKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX2xpc3QgPSAoKSA9PiB7XG5cdFx0XHRsZXQgcHJldiA9ICcnO1xuXHRcdFx0d2hpbGUgKHJlbWFpbigpICYmIGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoL14oWyMqOjtdKykoLiopJC8pKSB7XG5cdFx0XHRcdGNvbnN0IGxfbWF0Y2ggPSByO1xuXHRcdFx0XHRzaCgpO1xuXHRcdFx0XHRjb25zdCBpcG9zID0gc3RyX2ltYXRjaChwcmV2LCBsX21hdGNoWzFdKTtcblx0XHRcdFx0Ly8gY2xvc2UgdW5jb250aW51ZWQgbGlzdHNcblx0XHRcdFx0Zm9yIChsZXQgcHJldlBvcyA9IHByZXYubGVuZ3RoIC0gMTsgcHJldlBvcyA+PSBpcG9zOyBwcmV2UG9zLS0pIHtcblx0XHRcdFx0XHRjb25zdCBwaSA9IHByZXYuY2hhckF0KHByZXZQb3MpO1xuXHRcdFx0XHRcdGlmIChwaSA9PT0gJyonKSB7XG5cdFx0XHRcdFx0XHRwcygnPC91bD4nKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBpID09PSAnIycpIHtcblx0XHRcdFx0XHRcdHBzKCc8L29sPicpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoWycnLCAnKicsICcjJ10uaW5kZXhPZihsX21hdGNoWzFdLmNoYXJBdChwcmV2UG9zKSkpIHtcblx0XHRcdFx0XHRcdC8vIGNsb3NlIGEgZGwgb25seSBpZiB0aGUgbmV3IGl0ZW0gaXMgbm90IGEgZGwgaXRlbSAoOiwgOyBvciBlbXB0eSlcblx0XHRcdFx0XHRcdHBzKCc8L2RsPicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBvcGVuIG5ldyBsaXN0c1xuXHRcdFx0XHRmb3IgKGxldCBtYXRjaFBvcyA9IGlwb3M7IG1hdGNoUG9zIDwgbF9tYXRjaFsxXS5sZW5ndGg7IG1hdGNoUG9zKyspIHtcblx0XHRcdFx0XHRjb25zdCBsaSA9IGxfbWF0Y2hbMV0uY2hhckF0KG1hdGNoUG9zKTtcblx0XHRcdFx0XHRpZiAobGkgPT09ICcqJykge1xuXHRcdFx0XHRcdFx0cHMoJzx1bD4nKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGxpID09PSAnIycpIHtcblx0XHRcdFx0XHRcdHBzKCc8b2w+Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChbJycsICcqJywgJyMnXS5pbmRleE9mKHByZXYuY2hhckF0KG1hdGNoUG9zKSkpIHtcblx0XHRcdFx0XHRcdC8vIG9wZW4gYSBuZXcgZGwgb25seSBpZiB0aGUgcHJldiBpdGVtIGlzIG5vdCBhIGRsIGl0ZW0gKDosIDsgb3IgZW1wdHkpXG5cdFx0XHRcdFx0XHRwcygnPGRsPicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRzd2l0Y2ggKGxfbWF0Y2hbMV0uYXQoLTEpKSB7XG5cdFx0XHRcdFx0Y2FzZSAnKic6XG5cdFx0XHRcdFx0Y2FzZSAnIyc6XG5cdFx0XHRcdFx0XHRwcyhgPGxpPiR7cGFyc2VfaW5saW5lX25vd2lraShsX21hdGNoWzJdKX1gKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJzsnOiB7XG5cdFx0XHRcdFx0XHRwcygnPGR0PicpO1xuXHRcdFx0XHRcdFx0Y29uc3QgZHRfbWF0Y2ggPSBsX21hdGNoWzJdLm1hdGNoKC8oLio/KSg6Lio/KSQvKTtcblx0XHRcdFx0XHRcdC8vIGhhbmRsZSA7ZHQgOmRkIGZvcm1hdFxuXHRcdFx0XHRcdFx0aWYgKGR0X21hdGNoKSB7XG5cdFx0XHRcdFx0XHRcdHBzKHBhcnNlX2lubGluZV9ub3dpa2koZHRfbWF0Y2hbMV0pKTtcblx0XHRcdFx0XHRcdFx0bGwudW5zaGlmdChkdF9tYXRjaFsyXSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRwcyhwYXJzZV9pbmxpbmVfbm93aWtpKGxfbWF0Y2hbMl0pKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlICc6Jzpcblx0XHRcdFx0XHRcdHBzKGA8ZGQ+JHtwYXJzZV9pbmxpbmVfbm93aWtpKGxfbWF0Y2hbMl0pfWApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFssIHByZXZdID0gbF9tYXRjaDtcblx0XHRcdH1cblx0XHRcdC8vIGNsb3NlIHJlbWFpbmluZyBsaXN0c1xuXHRcdFx0Zm9yIChsZXQgaSA9IHByZXYubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0cHMoZignPC8/PicsIHByZXYuY2hhckF0KGkpID09PSAnKicgPyAndWwnIDogcHJldi5jaGFyQXQoaSkgPT09ICcjJyA/ICdvbCcgOiAnZGwnKSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBwYXJzZV90YWJsZSA9ICgpID0+IHtcblx0XHRcdGVuZGwoZignPHRhYmxlPicsIGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoL157XFx8KCAuKikkLykgPyByWzFdIDogJycpKTtcblx0XHRcdGZvciAoOyByZW1haW4oKTsgKSB7XG5cdFx0XHRcdGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKCd8JykpIHtcblx0XHRcdFx0XHRzd2l0Y2ggKGNoYXJBdFBvaW50KDEpKSB7XG5cdFx0XHRcdFx0XHRjYXNlICd9Jzpcblx0XHRcdFx0XHRcdFx0ZW5kbCgnPC90YWJsZT4nKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0Y2FzZSAnLSc6XG5cdFx0XHRcdFx0XHRcdGVuZGwoZignPHRyPicsIGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoL1xcfC0qKC4qKS8pWzFdKSk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0cGFyc2VfdGFibGVfZGF0YSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKCchJykpIHtcblx0XHRcdFx0XHRwYXJzZV90YWJsZV9kYXRhKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2goKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfdGFibGVfZGF0YSA9ICgpID0+IHtcblx0XHRcdGxldCB0ZF9saW5lO1xuXHRcdFx0bGV0IG1hdGNoX2k7XG5cdFx0XHQvLyAxOiBcInwrXCIsICd8JyBvciAnKydcblx0XHRcdC8vIDI6ID8/XG5cdFx0XHQvLyAzOiBhdHRyaWJ1dGVzID8/XG5cdFx0XHQvLyBUT0RPOiBmaW5pc2ggY29tbWVudGluZyB0aGlzIHJlZ2V4cFxuXHRcdFx0Y29uc3QgdGRfbWF0Y2ggPSBzaCgpLm1hdGNoKC9eKFxcfFxcK3xcXHx8ISkoKD86KFteW3xdKj8pXFx8KD8hXFx8KSk/KC4qKSkkLyk7XG5cdFx0XHRpZiAodGRfbWF0Y2hbMV0gPT09ICd8KycpIHtcblx0XHRcdFx0cHMoJzxjYXB0aW9uJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwcyhgPHQke3RkX21hdGNoWzFdID09PSAnfCcgPyAnZCcgOiAnaCd9YCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGRfbWF0Y2hbM10pIHtcblx0XHRcdFx0Ly8gcHMoJyAnICsgdGRfbWF0Y2hbM10pXG5cdFx0XHRcdG1hdGNoX2kgPSA0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWF0Y2hfaSA9IDI7XG5cdFx0XHR9XG5cdFx0XHRwcygnPicpO1xuXHRcdFx0aWYgKHRkX21hdGNoWzFdID09PSAnfCsnKSB7XG5cdFx0XHRcdHBzKHBhcnNlX2lubGluZV9ub3dpa2kodGRfbWF0Y2hbbWF0Y2hfaV0pKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHVzZSB8fCBvciAhISBhcyBhIGNlbGwgc2VwYXJhdG9yIGRlcGVuZGluZyBvbiBjb250ZXh0XG5cdFx0XHRcdC8vIE5PVEU6IHdoZW4gc3BsaXQoKSBpcyBwYXNzZWQgYSByZWdleHAgbWFrZSBzdXJlIHRvIHVzZSBub24tY2FwdHVyaW5nIGJyYWNrZXRzXG5cdFx0XHRcdHRkX2xpbmUgPSB0ZF9tYXRjaFttYXRjaF9pXS5zcGxpdCh0ZF9tYXRjaFsxXSA9PT0gJ3wnID8gJ3x8JyA6IC9cXHxcXHx8ISEvKTtcblx0XHRcdFx0cHMocGFyc2VfaW5saW5lX25vd2lraSh0ZF9saW5lLnNoaWZ0KCkpKTtcblx0XHRcdFx0d2hpbGUgKHRkX2xpbmUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGxsLnVuc2hpZnQodGRfbWF0Y2hbMV0gKyB0ZF9saW5lLnBvcCgpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGV0IHRjID0gMDtcblx0XHRcdGNvbnN0IHRkID0gW107XG5cdFx0XHR3aGlsZSAocmVtYWluKCkpIHtcblx0XHRcdFx0dGQucHVzaChzaCgpKTtcblx0XHRcdFx0aWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJ3wnKSkge1xuXHRcdFx0XHRcdGlmICghdGMpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY2hhckF0UG9pbnQoMSkgPT09ICd9Jykge1xuXHRcdFx0XHRcdFx0Ly8gd2UncmUgYXQgdGhlIG91dGVyLW1vc3QgbGV2ZWwgKG5vIG5lc3RlZCB0YWJsZXMpLCBza2lwIHRvIHRkIHBhcnNlXG5cdFx0XHRcdFx0XHR0Yy0tO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmICghdGMgJiYgY29tcGFyZUxpbmVTdHJpbmdPclJlZygnIScpKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygne3wnKSkge1xuXHRcdFx0XHRcdHRjKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0ZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHBzKEluc3RhLmNvbnZlcnQodGQpKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX3ByZSA9ICgpID0+IHtcblx0XHRcdHBzKCc8cHJlPicpO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRlbmRsKGAke3BhcnNlX2lubGluZV9ub3dpa2kobGxbMF0uc2xpY2UoMSkpfVxcbmApO1xuXHRcdFx0fSB3aGlsZSAocmVtYWluKCkgJiYgY29tcGFyZUxpbmVTdHJpbmdPclJlZygnICcpKTtcblx0XHRcdHBzKCc8L3ByZT4nKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX2Jsb2NrX2ltYWdlID0gKCkgPT4ge1xuXHRcdFx0cHMocGFyc2VfaW1hZ2Uoc2goKSkpO1xuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfaW1hZ2UgPSAoc3RyKSA9PiB7XG5cdFx0XHQvLyBnZXQgd2hhdCdzIGluIGJldHdlZW4gXCJbW0ltYWdlOlwiIGFuZCBcIl1dXCJcblx0XHRcdGxldCB0YWcgPSBzdHIuc3Vic3RyaW5nKHN0ci5pbmRleE9mKCc6JykgKyAxLCBzdHIubGVuZ3RoIC0gMik7XG5cdFx0XHRsZXQgd2lkdGg7XG5cdFx0XHRsZXQgYXR0ciA9IFtdO1xuXHRcdFx0bGV0IGZpbGVuYW1lO1xuXHRcdFx0bGV0IGNhcHRpb24gPSAnJztcblx0XHRcdGxldCB0aHVtYiA9IDA7XG5cdFx0XHRsZXQgZnJhbWUgPSAwO1xuXHRcdFx0bGV0IGNlbnRlciA9IDA7XG5cdFx0XHRsZXQgYWxpZ24gPSAnJztcblx0XHRcdGlmICgvXFx8Ly50ZXN0KHRhZykpIHtcblx0XHRcdFx0Ly8gbWFuYWdlIG5lc3RlZCBsaW5rc1xuXHRcdFx0XHRsZXQgbmVzdGluZyA9IDA7XG5cdFx0XHRcdGxldCBsYXN0X2F0dHI7XG5cdFx0XHRcdGZvciAobGV0IGkgPSB0YWcubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuXHRcdFx0XHRcdGlmICh0YWcuY2hhckF0KGkpID09PSAnfCcgJiYgIW5lc3RpbmcpIHtcblx0XHRcdFx0XHRcdGxhc3RfYXR0ciA9IHRhZy5zbGljZShpICsgMSk7XG5cdFx0XHRcdFx0XHR0YWcgPSB0YWcuc2xpY2UoMCwgTWF0aC5tYXgoMCwgaSkpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN3aXRjaCAodGFnLnNsaWNlKGkgLSAxLCBpIC0gMSArIDIpKSB7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ11dJzpcblx0XHRcdFx0XHRcdFx0XHRuZXN0aW5nKys7XG5cdFx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdbWyc6XG5cdFx0XHRcdFx0XHRcdFx0bmVzdGluZy0tO1xuXHRcdFx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YXR0ciA9IHRhZy5zcGxpdCgvXFxzKlxcfFxccyovKTtcblx0XHRcdFx0YXR0ci5wdXNoKGxhc3RfYXR0cik7XG5cdFx0XHRcdGZpbGVuYW1lID0gYXR0ci5zaGlmdCgpO1xuXHRcdFx0XHRsZXQgd19tYXRjaDtcblx0XHRcdFx0Zm9yICg7IGF0dHIubGVuZ3RoID4gMDsgYXR0ci5zaGlmdCgpKSB7XG5cdFx0XHRcdFx0d19tYXRjaCA9IGF0dHJbMF0ubWF0Y2goL14oXFxkKikoPzpbcHhdKlxcZCopP3B4JC8pO1xuXHRcdFx0XHRcdGlmICh3X21hdGNoKSB7XG5cdFx0XHRcdFx0XHRbLCB3aWR0aF0gPSB3X21hdGNoO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzd2l0Y2ggKGF0dHJbMF0pIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAndGh1bWInOlxuXHRcdFx0XHRcdFx0XHRjYXNlICd0aHVtYm5haWwnOlxuXHRcdFx0XHRcdFx0XHRcdHRodW1iID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRmcmFtZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2ZyYW1lJzpcblx0XHRcdFx0XHRcdFx0XHRmcmFtZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ25vbmUnOlxuXHRcdFx0XHRcdFx0XHRjYXNlICdyaWdodCc6XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2xlZnQnOlxuXHRcdFx0XHRcdFx0XHRcdGNlbnRlciA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdFthbGlnbl0gPSBhdHRyO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdjZW50ZXInOlxuXHRcdFx0XHRcdFx0XHRcdGNlbnRlciA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdFx0YWxpZ24gPSAnbm9uZSc7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGF0dHIubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRbY2FwdGlvbl0gPSBhdHRyO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZpbGVuYW1lID0gdGFnO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfaW5saW5lX25vd2lraSA9IChzdHIpID0+IHtcblx0XHRcdGxldCBzdGFydDtcblx0XHRcdGxldCBsYXN0ZW5kID0gMDtcblx0XHRcdGxldCBzdWJzdGFydCA9IDA7XG5cdFx0XHRsZXQgbmVzdGxldiA9IDA7XG5cdFx0XHRsZXQgb3Blbjtcblx0XHRcdGxldCBjbG9zZTtcblx0XHRcdGxldCBzdWJsb29wO1xuXHRcdFx0bGV0IGh0bWwgPSAnJztcblx0XHRcdHdoaWxlICgoc3RhcnQgPSBzdHIuaW5kZXhPZignPG5vJy5jb25jYXQoJ3dpa2knLCAnPicpLCBzdWJzdGFydCkpICE9PSAtMSkge1xuXHRcdFx0XHRodG1sICs9IHBhcnNlX2lubGluZV93aWtpKHN0ci5zdWJzdHJpbmcobGFzdGVuZCwgc3RhcnQpKTtcblx0XHRcdFx0c3RhcnQgKz0gODtcblx0XHRcdFx0c3Vic3RhcnQgPSBzdGFydDtcblx0XHRcdFx0c3VibG9vcCA9IHRydWU7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRvcGVuID0gc3RyLmluZGV4T2YoJzxubycuY29uY2F0KCd3aWtpJywgJz4nKSwgc3Vic3RhcnQpO1xuXHRcdFx0XHRcdGNsb3NlID0gc3RyLmluZGV4T2YoJzwvbm8nLmNvbmNhdCgnd2lraScsICc+JyksIHN1YnN0YXJ0KTtcblx0XHRcdFx0XHRpZiAoY2xvc2UgPD0gb3BlbiB8fCBvcGVuID09PSAtMSkge1xuXHRcdFx0XHRcdFx0aWYgKGNsb3NlID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaHRtbCArIGh0bWxfZW50aXRpZXMoc3RyLnNsaWNlKHN0YXJ0KSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzdWJzdGFydCA9IGNsb3NlICsgOTtcblx0XHRcdFx0XHRcdGlmIChuZXN0bGV2KSB7XG5cdFx0XHRcdFx0XHRcdG5lc3RsZXYtLTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGxhc3RlbmQgPSBzdWJzdGFydDtcblx0XHRcdFx0XHRcdFx0aHRtbCArPSBodG1sX2VudGl0aWVzKHN0ci5zdWJzdHJpbmcoc3RhcnQsIGxhc3RlbmQgLSA5KSk7XG5cdFx0XHRcdFx0XHRcdHN1Ymxvb3AgPSBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3Vic3RhcnQgPSBvcGVuICsgODtcblx0XHRcdFx0XHRcdG5lc3RsZXYrKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gd2hpbGUgKHN1Ymxvb3ApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGh0bWwgKyBwYXJzZV9pbmxpbmVfd2lraShzdHIuc2xpY2UobGFzdGVuZCkpO1xuXHRcdH07XG5cdFx0Y29uc3QgcGFyc2VfaW5saW5lX2ltYWdlcyA9IChzdHIpID0+IHtcblx0XHRcdGxldCBzdGFydDtcblx0XHRcdGxldCBzdWJzdGFydCA9IDA7XG5cdFx0XHRsZXQgbmVzdGxldiA9IDA7XG5cdFx0XHRsZXQgbG9vcDtcblx0XHRcdGxldCBjbG9zZTtcblx0XHRcdGxldCBvcGVuO1xuXHRcdFx0bGV0IHdpa2k7XG5cdFx0XHRsZXQgaHRtbDtcblx0XHRcdHdoaWxlICgoc3RhcnQgPSBzdHIuaW5kZXhPZignW1snLCBzdWJzdGFydCkpICE9PSAtMSkge1xuXHRcdFx0XHRpZiAobmV3IFJlZ0V4cChgXihJbWFnZXxGaWxlfCR7SW5zdGEuY29uZi5sb2NhbGUuaW1hZ2V9KTpgLCAnaScpLnRlc3Qoc3RyLnNsaWNlKHN0YXJ0ICsgMikpKSB7XG5cdFx0XHRcdFx0bG9vcCA9IHRydWU7XG5cdFx0XHRcdFx0c3Vic3RhcnQgPSBzdGFydDtcblx0XHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0XHRzdWJzdGFydCArPSAyO1xuXHRcdFx0XHRcdFx0Y2xvc2UgPSBzdHIuaW5kZXhPZignXV0nLCBzdWJzdGFydCk7XG5cdFx0XHRcdFx0XHRvcGVuID0gc3RyLmluZGV4T2YoJ1tbJywgc3Vic3RhcnQpO1xuXHRcdFx0XHRcdFx0aWYgKGNsb3NlIDw9IG9wZW4gfHwgb3BlbiA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGNsb3NlID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBzdHI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0c3Vic3RhcnQgPSBjbG9zZTtcblx0XHRcdFx0XHRcdFx0aWYgKG5lc3RsZXYpIHtcblx0XHRcdFx0XHRcdFx0XHRuZXN0bGV2LS07XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0d2lraSA9IHN0ci5zdWJzdHJpbmcoc3RhcnQsIGNsb3NlICsgMik7XG5cdFx0XHRcdFx0XHRcdFx0aHRtbCA9IHBhcnNlX2ltYWdlKHdpa2kpO1xuXHRcdFx0XHRcdFx0XHRcdHN0ciA9IHN0ci5yZXBsYWNlKHdpa2ksIGh0bWwpO1xuXHRcdFx0XHRcdFx0XHRcdHN1YnN0YXJ0ID0gc3RhcnQgKyBodG1sLmxlbmd0aDtcblx0XHRcdFx0XHRcdFx0XHRsb29wID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHN1YnN0YXJ0ID0gb3Blbjtcblx0XHRcdFx0XHRcdFx0bmVzdGxldisrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gd2hpbGUgKGxvb3ApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyO1xuXHRcdH07XG5cdFx0Ly8gdGhlIG91dHB1dCBvZiB0aGlzIGZ1bmN0aW9uIGRvZXNuJ3QgcmVzcGVjdCB0aGUgRklMTyBzdHJ1Y3R1cmUgb2YgSFRNTFxuXHRcdC8vIGJ1dCBzaW5jZSBtb3N0IGJyb3dzZXJzIGNhbiBoYW5kbGUgaXQgSSdsbCBzYXZlIG15c2VsZiB0aGUgaGFzc2xlXG5cdFx0Y29uc3QgcGFyc2VfaW5saW5lX2Zvcm1hdHRpbmcgPSAoc3RyKSA9PiB7XG5cdFx0XHRsZXQgZW07XG5cdFx0XHRsZXQgc3Q7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGxldCBsaTtcblx0XHRcdGxldCBvID0gJyc7XG5cdFx0XHR3aGlsZSAoKGkgPSBzdHIuaW5kZXhPZihcIicnXCIsIGxpKSkgKyAxKSB7XG5cdFx0XHRcdG8gKz0gc3RyLnN1YnN0cmluZyhsaSwgaSk7XG5cdFx0XHRcdGxpID0gaSArIDI7XG5cdFx0XHRcdGlmIChzdHIuY2hhckF0KGkgKyAyKSA9PT0gXCInXCIpIHtcblx0XHRcdFx0XHRsaSsrO1xuXHRcdFx0XHRcdHN0ID0gIXN0O1xuXHRcdFx0XHRcdG8gKz0gc3QgPyAnPHN0cm9uZz4nIDogJzwvc3Ryb25nPic7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZW0gPSAhZW07XG5cdFx0XHRcdFx0byArPSBlbSA/ICc8ZW0+JyA6ICc8L2VtPic7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBvICsgc3RyLnNsaWNlKGxpKTtcblx0XHR9O1xuXHRcdGNvbnN0IHBhcnNlX2lubGluZV93aWtpID0gKHN0cikgPT4ge1xuXHRcdFx0c3RyID0gcGFyc2VfaW5saW5lX2ltYWdlcyhzdHIpO1xuXHRcdFx0c3RyID0gcGFyc2VfaW5saW5lX2Zvcm1hdHRpbmcoc3RyKTtcblx0XHRcdC8vIG1hdGhcblx0XHRcdHN0ciA9IHN0ci5yZXBsYWNlKC88bWF0aD4oLio/KTxcXC9tYXRoPi9naSwgJycpO1xuXHRcdFx0Ly8gQnVpbGQgYSBNZWRpYXdpa2ktZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG5cdFx0XHRsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRsZXQgbWludXRlcyA9IGRhdGUuZ2V0VVRDTWludXRlcygpO1xuXHRcdFx0aWYgKG1pbnV0ZXMgPCAxMCkge1xuXHRcdFx0XHRtaW51dGVzID0gYDAke21pbnV0ZXN9YDtcblx0XHRcdH1cblx0XHRcdGRhdGUgPSBmKFxuXHRcdFx0XHQnPzo/LCA/ID8gPyAoVVRDKScsXG5cdFx0XHRcdGRhdGUuZ2V0VVRDSG91cnMoKSxcblx0XHRcdFx0bWludXRlcyxcblx0XHRcdFx0ZGF0ZS5nZXRVVENEYXRlKCksXG5cdFx0XHRcdEluc3RhLmNvbmYubG9jYWxlLm1vbnRoc1tkYXRlLmdldFVUQ01vbnRoKCldLFxuXHRcdFx0XHRkYXRlLmdldFVUQ0Z1bGxZZWFyKClcblx0XHRcdCk7XG5cdFx0XHQvLyB0ZXh0IGZvcm1hdHRpbmdcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHN0clxuXHRcdFx0XHRcdC8vIHNpZ25hdHVyZXNcblx0XHRcdFx0XHQucmVwbGFjZSgvfns1fSg/IX4pL2csIGRhdGUpXG5cdFx0XHRcdFx0LnJlcGxhY2UoL357NH0oPyF+KS9nLCBgJHtJbnN0YS5jb25mLnVzZXIubmFtZX0gJHtkYXRlfWApXG5cdFx0XHRcdFx0LnJlcGxhY2UoL357M30oPyF+KS9nLCBJbnN0YS5jb25mLnVzZXIubmFtZSlcblx0XHRcdFx0XHQvLyBbWzpDYXRlZ29yeTouLi5dXSwgW1s6SW1hZ2U6Li4uXV0sIGV0Yy4uLlxuXHRcdFx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0bmV3IFJlZ0V4cChcblx0XHRcdFx0XHRcdFx0YFxcXFxbXFxcXFs6KCg/OiR7SW5zdGEuY29uZi5sb2NhbGUuY2F0ZWdvcnl9fEltYWdlfEZpbGV8JHtJbnN0YS5jb25mLmxvY2FsZS5pbWFnZX18JHtJbnN0YS5jb25mLndpa2kuaW50ZXJ3aWtpfSk6W158XSo/KVxcXFxdXFxcXF0oXFxcXHcqKWAsXG5cdFx0XHRcdFx0XHRcdCdnaSdcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHQoXyQwLCAkMSwgJDIpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFx0XCI8YSBocmVmPSc/Jz4/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRcdEluc3RhLmNvbmYucGF0aHMuYXJ0aWNsZXMgKyBodG1sZXNjYXBlX2F0dHIoJDEpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMSkgKyBodG1sZXNjYXBlX3RleHQoJDIpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC8vIHJlbW92ZSBzdHJhaWdodCBjYXRlZ29yeSBhbmQgaW50ZXJ3aWtpIHRhZ3Ncblx0XHRcdFx0XHQucmVwbGFjZShcblx0XHRcdFx0XHRcdG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRcdGBcXFxcW1xcXFxbKD86JHtJbnN0YS5jb25mLmxvY2FsZS5jYXRlZ29yeX18JHtJbnN0YS5jb25mLndpa2kuaW50ZXJ3aWtpfSk6Lio/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdFx0XHRcdCdnaSdcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHQnJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQvLyBbWzpDYXRlZ29yeTouLi58TGlua3NdXSwgW1s6SW1hZ2U6Li4ufExpbmtzXV0sIGV0Yy4uLlxuXHRcdFx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0bmV3IFJlZ0V4cChcblx0XHRcdFx0XHRcdFx0YFxcXFxbXFxcXFs6KCg/OiR7SW5zdGEuY29uZi5sb2NhbGUuY2F0ZWdvcnl9fEltYWdlfEZpbGV8JHtJbnN0YS5jb25mLmxvY2FsZS5pbWFnZX18JHtJbnN0YS5jb25mLndpa2kuaW50ZXJ3aWtpfSk6Lio/KVxcXFx8KFteXFxcXF1dKz8pXFxcXF1cXFxcXShcXFxcdyopYCxcblx0XHRcdFx0XHRcdFx0J2dpJ1xuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdChfJDAsICQxLCAkMiwgJDMpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFx0XCI8YSBocmVmPSc/Jz4/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRcdEluc3RhLmNvbmYucGF0aHMuYXJ0aWNsZXMgKyBodG1sZXNjYXBlX2F0dHIoJDEpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMikgKyBodG1sZXNjYXBlX3RleHQoJDMpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC8vIFtbL1JlbGF0aXZlIGxpbmtzXV1cblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbKFxcL1tefF0qPyldXS9nLCAoXyQwLCAkMSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXCI8YSBocmVmPSc/Jz4/PC9hPlwiLCBJbnN0YS5jb25mLmJhc2VVcmwgKyBodG1sZXNjYXBlX2F0dHIoJDEpLCBodG1sZXNjYXBlX3RleHQoJDEpKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIFtbL1JlcGxhY2VkfFJlbGF0aXZlIGxpbmtzXV1cblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbKFxcLy4qPylcXHwoLis/KV1dL2csIChfJDAsICQxLCAkMikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXCI8YSBocmVmPSc/Jz4/PC9hPlwiLCBJbnN0YS5jb25mLmJhc2VVcmwgKyBodG1sZXNjYXBlX2F0dHIoJDEpLCBodG1sZXNjYXBlX3RleHQoJDIpKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIFtbQ29tbW9uIGxpbmtzXV1cblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbKFteW3xdKj8pXV0oXFx3KikvZywgKF8kMCwgJDEsICQyKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XCI8YSBocmVmPSc/Jz4/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRJbnN0YS5jb25mLnBhdGhzLmFydGljbGVzICsgaHRtbGVzY2FwZV9hdHRyKCQxKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV90ZXh0KCQxKSArIGh0bWxlc2NhcGVfdGV4dCgkMilcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyBbW1JlcGxhY2VkfExpbmtzXV1cblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbKFteW10qPylcXHwoW15cXF1dKz8pXV0oXFx3KikvZywgKF8kMCwgJDEsICQyLCAkMykgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFwiPGEgaHJlZj0nPyc+PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0SW5zdGEuY29uZi5wYXRocy5hcnRpY2xlcyArIGh0bWxlc2NhcGVfYXR0cigkMSksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMikgKyBodG1sZXNjYXBlX3RleHQoJDMpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Ly8gW1tTdHJpcHBlZDpOYW1lc3BhY2V8TmFtZXNwYWNlXV1cblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbXFxbKFteXFxdXSo/Oik/KC4qPykoICpcXCguKj9cXCkpP1xcfF1dL2csIChfJDAsICQxLCAkMiwgJDMpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBmKFxuXHRcdFx0XHRcdFx0XHRcIjxhIGhyZWY9Jz8nPj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdEluc3RhLmNvbmYucGF0aHMuYXJ0aWNsZXMgKyBodG1sZXNjYXBlX2F0dHIoJDEpICsgaHRtbGVzY2FwZV9hdHRyKCQyKSArIGh0bWxlc2NhcGVfYXR0cigkMyksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMilcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQvLyBFeHRlcm5hbCBsaW5rc1xuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXFsoaHR0cHM/fG5ld3N8ZnRwfG1haWx0b3xnb3BoZXJ8aXJjKTooXFwvKikoW15cXF1dKj8pICguKj8pXS9nLCAoXyQwLCAkMSwgJDIsICQzLCAkNCkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFwiPGEgY2xhc3M9J2V4dGVybmFsJyBocmVmPSc/Oj8nPj88L2E+XCIsXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfYXR0cigkMSksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfYXR0cigkMikgKyBodG1sZXNjYXBlX2F0dHIoJDMpLFxuXHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcW2h0dHA6XFwvXFwvKC4qPyldL2csIChfJDAsICQxKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZihcIjxhIGNsYXNzPSdleHRlcm5hbCcgaHJlZj0naHR0cDovLz8nPlsjXTwvYT5cIiwgaHRtbGVzY2FwZV9hdHRyKCQxKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxbKG5ld3N8ZnRwfG1haWx0b3xnb3BoZXJ8aXJjKTooXFwvKikoLio/KV0vZywgKF8kMCwgJDEsICQyLCAkMykgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGYoXG5cdFx0XHRcdFx0XHRcdFwiPGEgY2xhc3M9J2V4dGVybmFsJyBocmVmPSc/Oj8nPj86PzwvYT5cIixcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV9hdHRyKCQxKSxcblx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV9hdHRyKCQyKSArIGh0bWxlc2NhcGVfYXR0cigkMyksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMSksXG5cdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMikgKyBodG1sZXNjYXBlX3RleHQoJDMpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHQvKF58ICkoaHR0cHM/fG5ld3N8ZnRwfG1haWx0b3xnb3BoZXJ8aXJjKTooXFwvKikoW14gJF0qW14gISQsLjo7P10pL2csXG5cdFx0XHRcdFx0XHQoXyQwLCAkMSwgJDIsICQzLCAkNCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZihcblx0XHRcdFx0XHRcdFx0XHRcIj88YSBjbGFzcz0nZXh0ZXJuYWwnIGhyZWY9Jz86Pyc+Pzo/PC9hPlwiLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMSksXG5cdFx0XHRcdFx0XHRcdFx0aHRtbGVzY2FwZV9hdHRyKCQyKSxcblx0XHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX2F0dHIoJDMpICsgaHRtbGVzY2FwZV9hdHRyKCQ0KSxcblx0XHRcdFx0XHRcdFx0XHRodG1sZXNjYXBlX3RleHQoJDIpLFxuXHRcdFx0XHRcdFx0XHRcdGh0bWxlc2NhcGVfdGV4dCgkMykgKyBodG1sZXNjYXBlX3RleHQoJDQpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRcdC5yZXBsYWNlKCdfX05PVE9DX18nLCAnJylcblx0XHRcdFx0XHQucmVwbGFjZSgnX19OT0lOREVYX18nLCAnJylcblx0XHRcdFx0XHQucmVwbGFjZSgnX19JTkRFWF9fJywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ19fTk9FRElUU0VDVElPTl9fJywgJycpXG5cdFx0XHQpO1xuXHRcdH07XG5cdFx0Ly8gYmVnaW4gcGFyc2luZ1xuXHRcdGZvciAoOyByZW1haW4oKTsgKSB7XG5cdFx0XHRpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygvXig9ezEsNn0pKC4qKVxcMSguKikkLykpIHtcblx0XHRcdFx0cCA9IDA7XG5cdFx0XHRcdGVuZGwoZignPGg/Pj88L2g/Pj8nLCByWzFdLmxlbmd0aCwgcGFyc2VfaW5saW5lX25vd2lraShyWzJdKSwgclsxXS5sZW5ndGgsIHJbM10pKTtcblx0XHRcdH0gZWxzZSBpZiAoY29tcGFyZUxpbmVTdHJpbmdPclJlZygvXlsjKjo7XS8pKSB7XG5cdFx0XHRcdHAgPSAwO1xuXHRcdFx0XHRwYXJzZV9saXN0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJyAnKSkge1xuXHRcdFx0XHRwID0gMDtcblx0XHRcdFx0cGFyc2VfcHJlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoJ3t8JykpIHtcblx0XHRcdFx0cCA9IDA7XG5cdFx0XHRcdHBhcnNlX3RhYmxlKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbXBhcmVMaW5lU3RyaW5nT3JSZWcoL14tLS0tKyQvKSkge1xuXHRcdFx0XHRwID0gMDtcblx0XHRcdFx0ZW5kbCgnPGhyPicpO1xuXHRcdFx0fSBlbHNlIGlmIChjb21wYXJlTGluZVN0cmluZ09yUmVnKEluc3RhLkJMT0NLX0lNQUdFKSkge1xuXHRcdFx0XHRwID0gMDtcblx0XHRcdFx0cGFyc2VfYmxvY2tfaW1hZ2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGhhbmRsZSBwYXJhZ3JhcGhzXG5cdFx0XHRcdGlmIChjb21wYXJlTGluZVN0cmluZygnJykpIHtcblx0XHRcdFx0XHRwID0gcmVtYWluKCkgPiAxICYmIGxsWzFdID09PSAnJztcblx0XHRcdFx0XHRpZiAocCkge1xuXHRcdFx0XHRcdFx0ZW5kbCgnPHA+PGJyPicpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoIXApIHtcblx0XHRcdFx0XHRcdHBzKCc8cD4nKTtcblx0XHRcdFx0XHRcdHAgPSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwcyhgJHtwYXJzZV9pbmxpbmVfbm93aWtpKGxsWzBdKX0gYCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2goKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG87XG5cdH07XG5cdGNvbnN0IHdpa2kyaHRtbCA9ICh0eHQsIGJhc2V1cmwpID0+IHtcblx0XHRJbnN0YS5jb25mLmJhc2VVcmwgPSBiYXNldXJsO1xuXHRcdHJldHVybiBJbnN0YS5jb252ZXJ0KHR4dCk7XG5cdH07XG5cdC8vIEVOREZJTEU6IGxpdmVwcmV2aWV3LmpzXG5cdC8vIFNUQVJURklMRTogcGFnZWluZm8uanNcblx0Y29uc3QgcG9wdXBGaWx0ZXJQYWdlU2l6ZSA9IChkYXRhKSA9PiB7XG5cdFx0cmV0dXJuIGZvcm1hdEJ5dGVzKGRhdGEubGVuZ3RoKTtcblx0fTtcblx0Y29uc3QgcG9wdXBGaWx0ZXJDb3VudExpbmtzID0gKGRhdGEpID0+IHtcblx0XHRjb25zdCBudW0gPSBjb3VudExpbmtzKGRhdGEpO1xuXHRcdHJldHVybiBgJHtTdHJpbmcobnVtKX0mbmJzcDske251bSA9PT0gMSA/IHBvcHVwU3RyaW5nKCd3aWtpTGluaycpIDogcG9wdXBTdHJpbmcoJ3dpa2lMaW5rcycpfWA7XG5cdH07XG5cdGNvbnN0IHBvcHVwRmlsdGVyQ291bnRJbWFnZXMgPSAoZGF0YSkgPT4ge1xuXHRcdGNvbnN0IG51bSA9IGNvdW50SW1hZ2VzKGRhdGEpO1xuXHRcdHJldHVybiBgJHtTdHJpbmcobnVtKX0mbmJzcDske251bSA9PT0gMSA/IHBvcHVwU3RyaW5nKCdpbWFnZScpIDogcG9wdXBTdHJpbmcoJ2ltYWdlcycpfWA7XG5cdH07XG5cdGNvbnN0IHBvcHVwRmlsdGVyQ291bnRDYXRlZ29yaWVzID0gKGRhdGEpID0+IHtcblx0XHRjb25zdCBudW0gPSBjb3VudENhdGVnb3JpZXMoZGF0YSk7XG5cdFx0cmV0dXJuIGAke1N0cmluZyhudW0pfSZuYnNwOyR7bnVtID09PSAxID8gcG9wdXBTdHJpbmcoJ2NhdGVnb3J5JykgOiBwb3B1cFN0cmluZygnY2F0ZWdvcmllcycpfWA7XG5cdH07XG5cdGNvbnN0IHBvcHVwRmlsdGVyTGFzdE1vZGlmaWVkID0gKF9kYXRhLCBkb3dubG9hZCkgPT4ge1xuXHRcdGNvbnN0IGxhc3Rtb2QgPSBkb3dubG9hZC5sYXN0TW9kaWZpZWQ7XG5cdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBhZ2UgPSBub3cgLSBsYXN0bW9kO1xuXHRcdGlmIChsYXN0bW9kICYmIGdldFZhbHVlT2YoJ3BvcHVwTGFzdE1vZGlmaWVkJykpIHtcblx0XHRcdHJldHVybiB0cHJpbnRmKCclcyBvbGQnLCBbZm9ybWF0QWdlKGFnZSldKS5yZXBsYWNlKC8gL2csICcmbmJzcDsnKTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9O1xuXHRjb25zdCBmb3JtYXRBZ2UgPSAoYWdlKSA9PiB7XG5cdFx0Ly8gY29lcmNlIGludG8gYSBudW1iZXJcblx0XHRsZXQgYSA9IDAgKyBhZ2U7XG5cdFx0Y29uc3QgYWEgPSBhO1xuXHRcdGNvbnN0IHNlY2xlbiA9IDEwMDA7XG5cdFx0Y29uc3QgbWlubGVuID0gNjAgKiBzZWNsZW47XG5cdFx0Y29uc3QgaG91cmxlbiA9IDYwICogbWlubGVuO1xuXHRcdGNvbnN0IGRheWxlbiA9IDI0ICogaG91cmxlbjtcblx0XHRjb25zdCB3ZWVrbGVuID0gNyAqIGRheWxlbjtcblx0XHRjb25zdCBudW13ZWVrcyA9IChhIC0gKGEgJSB3ZWVrbGVuKSkgLyB3ZWVrbGVuO1xuXHRcdGEgLT0gbnVtd2Vla3MgKiB3ZWVrbGVuO1xuXHRcdGNvbnN0IHN3ZWVrcyA9IGFkZHVuaXQobnVtd2Vla3MsICd3ZWVrJyk7XG5cdFx0Y29uc3QgbnVtZGF5cyA9IChhIC0gKGEgJSBkYXlsZW4pKSAvIGRheWxlbjtcblx0XHRhIC09IG51bWRheXMgKiBkYXlsZW47XG5cdFx0Y29uc3Qgc2RheXMgPSBhZGR1bml0KG51bWRheXMsICdkYXknKTtcblx0XHRjb25zdCBudW1ob3VycyA9IChhIC0gKGEgJSBob3VybGVuKSkgLyBob3VybGVuO1xuXHRcdGEgLT0gbnVtaG91cnMgKiBob3VybGVuO1xuXHRcdGNvbnN0IHNob3VycyA9IGFkZHVuaXQobnVtaG91cnMsICdob3VyJyk7XG5cdFx0Y29uc3QgbnVtbWlucyA9IChhIC0gKGEgJSBtaW5sZW4pKSAvIG1pbmxlbjtcblx0XHRhIC09IG51bW1pbnMgKiBtaW5sZW47XG5cdFx0Y29uc3Qgc21pbnMgPSBhZGR1bml0KG51bW1pbnMsICdtaW51dGUnKTtcblx0XHRjb25zdCBudW1zZWNzID0gKGEgLSAoYSAlIHNlY2xlbikpIC8gc2VjbGVuO1xuXHRcdGEgLT0gbnVtc2VjcyAqIHNlY2xlbjtcblx0XHRjb25zdCBzc2VjcyA9IGFkZHVuaXQobnVtc2VjcywgJ3NlY29uZCcpO1xuXHRcdGlmIChhYSA+IDQgKiB3ZWVrbGVuKSB7XG5cdFx0XHRyZXR1cm4gc3dlZWtzO1xuXHRcdH1cblx0XHRpZiAoYWEgPiB3ZWVrbGVuKSB7XG5cdFx0XHRyZXR1cm4gYCR7c3dlZWtzfSAke3NkYXlzfWA7XG5cdFx0fVxuXHRcdGlmIChhYSA+IGRheWxlbikge1xuXHRcdFx0cmV0dXJuIGAke3NkYXlzfSAke3Nob3Vyc31gO1xuXHRcdH1cblx0XHRpZiAoYWEgPiA2ICogaG91cmxlbikge1xuXHRcdFx0cmV0dXJuIHNob3Vycztcblx0XHR9XG5cdFx0aWYgKGFhID4gaG91cmxlbikge1xuXHRcdFx0cmV0dXJuIGAke3Nob3Vyc30gJHtzbWluc31gO1xuXHRcdH1cblx0XHRpZiAoYWEgPiAxMCAqIG1pbmxlbikge1xuXHRcdFx0cmV0dXJuIHNtaW5zO1xuXHRcdH1cblx0XHRpZiAoYWEgPiBtaW5sZW4pIHtcblx0XHRcdHJldHVybiBgJHtzbWluc30gJHtzc2Vjc31gO1xuXHRcdH1cblx0XHRyZXR1cm4gc3NlY3M7XG5cdH07XG5cdGNvbnN0IGFkZHVuaXQgPSAobnVtLCBzdHIpID0+IHtcblx0XHRyZXR1cm4gYCR7bnVtfSAke251bSA9PT0gMSA/IHBvcHVwU3RyaW5nKHN0cikgOiBwb3B1cFN0cmluZyhgJHtzdHJ9c2ApfWA7XG5cdH07XG5cdGNvbnN0IHJ1blBvcHVwRmlsdGVycyA9IChsaXN0LCBkYXRhLCBkb3dubG9hZCkgPT4ge1xuXHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBsaXN0KSB7XG5cdFx0XHRpZiAoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCBzID0gZWxlbWVudChkYXRhLCBkb3dubG9hZCwgZG93bmxvYWQub3duZXIuYXJ0aWNsZSk7XG5cdFx0XHRcdGlmIChzKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2gocyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgZ2V0UGFnZUluZm8gPSAoZGF0YSwgZG93bmxvYWQpID0+IHtcblx0XHRpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBwb3B1cFN0cmluZygnRW1wdHkgcGFnZScpO1xuXHRcdH1cblx0XHRjb25zdCBwb3B1cEZpbHRlcnMgPSBnZXRWYWx1ZU9mKCdwb3B1cEZpbHRlcnMnKSB8fCBbXTtcblx0XHRjb25zdCBleHRyYVBvcHVwRmlsdGVycyA9IGdldFZhbHVlT2YoJ2V4dHJhUG9wdXBGaWx0ZXJzJykgfHwgW107XG5cdFx0Y29uc3QgcGFnZUluZm9BcnJheSA9IHJ1blBvcHVwRmlsdGVycyhbLi4ucG9wdXBGaWx0ZXJzLCAuLi5leHRyYVBvcHVwRmlsdGVyc10sIGRhdGEsIGRvd25sb2FkKTtcblx0XHRsZXQgcGFnZUluZm8gPSBwYWdlSW5mb0FycmF5LmpvaW4oJywgJyk7XG5cdFx0aWYgKHBhZ2VJbmZvICE9PSAnJykge1xuXHRcdFx0cGFnZUluZm8gPSB1cGNhc2VGaXJzdChwYWdlSW5mbyk7XG5cdFx0fVxuXHRcdHJldHVybiBwYWdlSW5mbztcblx0fTtcblx0Ly8gdGhpcyBjb3VsZCBiZSBpbXByb3ZlZCFcblx0Y29uc3QgY291bnRMaW5rcyA9ICh3aWtpVGV4dCkgPT4ge1xuXHRcdHJldHVybiB3aWtpVGV4dC5zcGxpdCgnW1snKS5sZW5ndGggLSAxO1xuXHR9O1xuXHQvLyBpZiBOID0gIyBtYXRjaGVzLCBuID0gIyBicmFja2V0cywgdGhlblxuXHQvLyBTdHJpbmcuc3BsaXQocmVnZXgpIGludGVyc3BlcnNlcyB0aGUgTisxIHNwbGl0IGVsZW1lbnRzXG5cdC8vIHdpdGggTm4gb3RoZXIgZWxlbWVudHMuIFNvIHRvdGFsIGxlbmd0aCBpc1xuXHQvLyBMPSBOKzEgKyBObiA9IE4obisxKSsxLiBTbyBOPShMLTEpLyhuKzEpLlxuXHRjb25zdCBjb3VudEltYWdlcyA9ICh3aWtpVGV4dCkgPT4ge1xuXHRcdHJldHVybiAod2lraVRleHQuc3BsaXQocGcucmUuaW1hZ2UpLmxlbmd0aCAtIDEpIC8gKHBnLnJlLmltYWdlQnJhY2tldENvdW50ICsgMSk7XG5cdH07XG5cdGNvbnN0IGNvdW50Q2F0ZWdvcmllcyA9ICh3aWtpVGV4dCkgPT4ge1xuXHRcdHJldHVybiAod2lraVRleHQuc3BsaXQocGcucmUuY2F0ZWdvcnkpLmxlbmd0aCAtIDEpIC8gKHBnLnJlLmNhdGVnb3J5QnJhY2tldENvdW50ICsgMSk7XG5cdH07XG5cdGNvbnN0IHBvcHVwRmlsdGVyU3R1YkRldGVjdCA9IChkYXRhLCBfZG93bmxvYWQsIGFydGljbGUpID0+IHtcblx0XHRjb25zdCBjb3VudHMgPSBzdHViQ291bnQoZGF0YSwgYXJ0aWNsZSk7XG5cdFx0aWYgKGNvdW50cy5yZWFsKSB7XG5cdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ3N0dWInKTtcblx0XHR9XG5cdFx0aWYgKGNvdW50cy5zZWN0KSB7XG5cdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ3NlY3Rpb24gc3R1YicpO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH07XG5cdGNvbnN0IHBvcHVwRmlsdGVyRGlzYW1iaWdEZXRlY3QgPSAoZGF0YSwgX2Rvd25sb2FkLCBhcnRpY2xlKSA9PiB7XG5cdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cEFsbERhYnNTdHVicycpICYmIGFydGljbGUubmFtZXNwYWNlKCkpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0cmV0dXJuIGlzRGlzYW1iaWcoZGF0YSwgYXJ0aWNsZSkgPyBwb3B1cFN0cmluZygnZGlzYW1iaWcnKSA6ICcnO1xuXHR9O1xuXHRjb25zdCBmb3JtYXRCeXRlcyA9IChudW0pID0+IHtcblx0XHRyZXR1cm4gbnVtID4gOTQ5ID8gTWF0aC5yb3VuZChudW0gLyAxMDApIC8gMTAgKyBwb3B1cFN0cmluZygna0InKSA6IGAke251bX0mbmJzcDske3BvcHVwU3RyaW5nKCdieXRlcycpfWA7XG5cdH07XG5cdC8vIEVOREZJTEU6IHBhZ2VpbmZvLmpzXG5cdC8vIFNUQVJURklMRTogdGl0bGVzLmpzXG5cdC8qKlxuXHQgKiBAZmlsZW92ZXJ2aWV3IERlZmluZXMgdGhlIHtAc291cmNlIFRpdGxlfSBjbGFzcywgYW5kIGFzc29jaWF0ZWQgY3J1ZnR5IGZ1bmN0aW9ucy5cblx0ICpcblx0ICogPGNvZGU+VGl0bGU8L2NvZGU+IGRlYWxzIHdpdGggYXJ0aWNsZSB0aXRsZXMgYW5kIHRoZWlyIHZhcmlvdXNcblx0ICogZm9ybXMuICB7QHNvdXJjZSBTdHJpbmd3cmFwcGVyfSBpcyB0aGUgcGFyZW50IGNsYXNzIG9mXG5cdCAqIDxjb2RlPlRpdGxlPC9jb2RlPiwgd2hpY2ggZXhpc3RzIHNpbXBseSB0byBtYWtlIHRoaW5ncyBhIGxpdHRsZVxuXHQgKiBuZWF0ZXIuXG5cdCAqL1xuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBTdHJpbmd3cmFwcGVyLlxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICpcblx0ICogQGNsYXNzIHRoZSBTdHJpbmd3cmFwcGVyIGNsYXNzLiBUaGlzIGJhc2UgY2xhc3MgaXMgbm90IHJlYWxseVxuXHQgKiB1c2VmdWwgb24gaXRzIG93bjsgaXQganVzdCB3cmFwcyB2YXJpb3VzIGNvbW1vbiBzdHJpbmcgb3BlcmF0aW9ucy5cblx0ICovXG5cdGNvbnN0IFN0cmluZ3dyYXBwZXIgPSBmdW5jdGlvbiBTdHJpbmd3cmFwcGVyKCkge1xuXHRcdC8qKlxuXHRcdCAqIFdyYXBwZXIgZm9yIHRoaXMudG9TdHJpbmcoKS5pbmRleE9mKClcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB4XG5cdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdCAqL1xuXHRcdHRoaXMuaW5kZXhPZiA9IGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZygpLmluZGV4T2YoeCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHRoaXMudmFsdWUuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHQgKi9cblx0XHR0aGlzLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBXcmFwcGVyIGZvciB7QHNvdXJjZSBTdHJpbmcjcGFyZW5TcGxpdH0gYXBwbGllZCB0byB0aGlzLnRvU3RyaW5nKClcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7UmVnRXhwfSB4XG5cdFx0ICogQHR5cGUgQXJyYXlcblx0XHQgKi9cblx0XHR0aGlzLnNwbGl0ID0gZnVuY3Rpb24gKHgpIHtcblx0XHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCkuc3BsaXQoeCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBXcmFwcGVyIGZvciB0aGlzLnRvU3RyaW5nKCkuc3Vic3RyaW5nKClcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB4XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHkgKG9wdGlvbmFsKVxuXHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdCAqL1xuXHRcdHRoaXMuc3Vic3RyaW5nID0gZnVuY3Rpb24gKHgsIHkpIHtcblx0XHRcdGlmICh5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9TdHJpbmcoKS5zbGljZShNYXRoLm1heCgwLCB4KSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZygpLnN1YnN0cmluZyh4LCB5KTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFdyYXBwZXIgZm9yIHRoaXMudG9TdHJpbmcoKS5zcGxpdCgpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30geFxuXHRcdCAqIEB0eXBlIEFycmF5XG5cdFx0ICovXG5cdFx0dGhpcy5zcGxpdCA9IGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZygpLnNwbGl0KHgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogV3JhcHBlciBmb3IgdGhpcy50b1N0cmluZygpLnJlcGxhY2UoKVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHhcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30geVxuXHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdCAqL1xuXHRcdHRoaXMucmVwbGFjZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoeCwgeSk7XG5cdFx0fTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgPGNvZGU+VGl0bGU8L2NvZGU+LlxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICpcblx0ICogQGNsYXNzIFRoZSBUaXRsZSBjbGFzcy4gSG9sZHMgYXJ0aWNsZSB0aXRsZXMgYW5kIGNvbnZlcnRzIHRoZW0gaW50b1xuXHQgKiB2YXJpb3VzIGZvcm1zLiBBbHNvIGRlYWxzIHdpdGggYW5jaG9ycywgYnkgd2hpY2ggd2UgbWVhbiB0aGUgYml0c1xuXHQgKiBvZiB0aGUgYXJ0aWNsZSBVUkwgYWZ0ZXIgYSAjIGNoYXJhY3RlciwgcmVwcmVzZW50aW5nIGxvY2F0aW9uc1xuXHQgKiB3aXRoaW4gYW4gYXJ0aWNsZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBpbml0aWFsIHZhbHVlIHRvIGFzc2lnbiB0byB0aGVcblx0ICogYXJ0aWNsZS4gVGhpcyBtdXN0IGJlIHRoZSBjYW5vbmljYWwgdGl0bGUgKHNlZSB7QGxpbmtcblx0ICogVGl0bGUjdmFsdWV9LiBPbWl0IHRoaXMgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCB1c2UgYW5vdGhlciBmdW5jdGlvblxuXHQgKiB0byBzZXQgdGhlIHRpdGxlIGlmIHRoaXMgaXMgdW5hdmFpbGFibGUuXG5cdCAqL1xuXHRjbGFzcyBUaXRsZSBleHRlbmRzIFN0cmluZ3dyYXBwZXIge1xuXHRcdGNvbnN0cnVjdG9yKHZhbCkge1xuXHRcdFx0c3VwZXIoKTtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIGNhbm9uaWNhbCBhcnRpY2xlIHRpdGxlLiBUaGlzIG11c3QgYmUgaW4gVVRGLTggd2l0aCBub1xuXHRcdFx0ICogZW50aXRpZXMsIGVzY2FwaW5nIG9yIG5hc3RpZXMuIEFsc28sIHVuZGVyc2NvcmVzIHNob3VsZCBiZVxuXHRcdFx0ICogcmVwbGFjZWQgd2l0aCBzcGFjZXMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIGNhbm9uaWNhbCBmb3JtIG9mIHRoZSBhbmNob3IuIFRoaXMgc2hvdWxkIGJlIGV4YWN0bHkgYXNcblx0XHRcdCAqIGl0IGFwcGVhcnMgaW4gdGhlIFVSTCwgaS5lLiB3aXRoIHRoZSAuQzMuMEEgYml0cyBpbi5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBTdHJpbmdcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5hbmNob3IgPSAnJztcblx0XHRcdHRoaXMuc2V0VXRmKHZhbCk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIGNhbm9uaWNhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXJ0aWNsZSB0aXRsZSwgb3B0aW9uYWxseSB3aXRob3V0IGFuY2hvci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gb21pdEFuY2hvclxuXHRcdCAqIEBmaXhtZSBEZWNpZGUgc3BlY3MgZm9yIGFuY2hvclxuXHRcdCAqIEByZXR1cm4gU3RyaW5nIFRoZSBhcnRpY2xlIHRpdGxlIGFuZCB0aGUgYW5jaG9yLlxuXHRcdCAqL1xuXHRcdHRvU3RyaW5nKG9taXRBbmNob3IpIHtcblx0XHRcdHJldHVybiB0aGlzLnZhbHVlICsgKCFvbWl0QW5jaG9yICYmIHRoaXMuYW5jaG9yID8gYCMke3RoaXMuYW5jaG9yU3RyaW5nKCl9YCA6ICcnKTtcblx0XHR9XG5cdFx0YW5jaG9yU3RyaW5nKCkge1xuXHRcdFx0aWYgKCF0aGlzLmFuY2hvcikge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzcGxpdCA9IHRoaXMuYW5jaG9yLnNwbGl0KC8oKD86XFwuW1xcZEEtRl17Mn0pKykvKTtcblx0XHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblx0XHRcdGxldCB2YWx1ZTtcblx0XHRcdGZvciAobGV0IGogPSAxOyBqIDwgbGVuOyBqICs9IDIpIHtcblx0XHRcdFx0Ly8gRklYTUUgcy9kZWNvZGVVUkkvZGVjb2RlVVJJQ29tcG9uZW50L2cgP1xuXHRcdFx0XHR2YWx1ZSA9IHNwbGl0W2pdLnNwbGl0KCcuJykuam9pbignJScpO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0Ly8gY2Fubm90IGRlY29kZVxuXHRcdFx0XHR9XG5cdFx0XHRcdHNwbGl0W2pdID0gdmFsdWUuc3BsaXQoJ18nKS5qb2luKCcgJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3BsaXQuam9pbignJyk7XG5cdFx0fVxuXHRcdHVybEFuY2hvcigpIHtcblx0XHRcdGNvbnN0IHNwbGl0ID0gdGhpcy5hbmNob3Iuc3BsaXQoJy8oKD86WyVdWzAtOUEtRl17Mn0pKykvJyk7XG5cdFx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBqID0gMTsgaiA8IGxlbjsgaiArPSAyKSB7XG5cdFx0XHRcdHNwbGl0W2pdID0gc3BsaXRbal0uc3BsaXQoJyUnKS5qb2luKCcuJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3BsaXQuam9pbignJyk7XG5cdFx0fVxuXHRcdGFuY2hvckZyb21VdGYoc3RyKSB7XG5cdFx0XHR0aGlzLmFuY2hvciA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc3BsaXQoJyAnKS5qb2luKCdfJykpXG5cdFx0XHRcdC5zcGxpdCgnJTNBJylcblx0XHRcdFx0LmpvaW4oJzonKVxuXHRcdFx0XHQuc3BsaXQoXCInXCIpXG5cdFx0XHRcdC5qb2luKCclMjcnKVxuXHRcdFx0XHQuc3BsaXQoJyUnKVxuXHRcdFx0XHQuam9pbignLicpO1xuXHRcdH1cblx0XHRmcm9tVVJMKGgpIHtcblx0XHRcdGlmICh0eXBlb2YgaCAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0Ly8gTk9URSA6IHBsYXlpbmcgd2l0aCBkZWNvZGVVUkksIGVuY29kZVVSSSwgZXNjYXBlLCB1bmVzY2FwZSxcblx0XHRcdC8vIHdlIHNlZW0gdG8gYmUgYWJsZSB0byByZXBsaWNhdGUgdGhlIElFIGJvcmtlZCBlbmNvZGluZ1xuXHRcdFx0Ly8gSUUgZG9lc24ndCBkbyB0aGlzIG5ldy1mYW5nbGVkIHV0Zi04IHRoaW5nLlxuXHRcdFx0Ly8gYW5kIGl0J3Mgd29yc2UgdGhhbiB0aGF0LlxuXHRcdFx0Ly8gSUUgc2VlbXMgdG8gdHJlYXQgdGhlIHF1ZXJ5IHN0cmluZyBkaWZmZXJlbnRseSB0byB0aGUgcmVzdCBvZiB0aGUgdXJsXG5cdFx0XHQvLyB0aGUgcXVlcnkgaXMgdHJlYXRlZCBhcyBib25hLWZpZGUgdXRmOCwgYnV0IHRoZSBmaXJzdCBiaXQgb2YgdGhlIHVybCBpcyBwaXNzZWQgYXJvdW5kIHdpdGhcblx0XHRcdC8vIHdlIGZpeCB1cCAmIGZvciBhbGwgYnJvd3NlcnMsIGp1c3QgaW4gY2FzZS5cblx0XHRcdGNvbnN0IHNwbGl0dGVkID0gaC5zcGxpdCgnPycpO1xuXHRcdFx0c3BsaXR0ZWRbMF0gPSBzcGxpdHRlZFswXS5zcGxpdCgnJicpLmpvaW4oJyUyNicpO1xuXHRcdFx0aCA9IHNwbGl0dGVkLmpvaW4oJz8nKTtcblx0XHRcdGNvbnN0IGNvbnRyaWJzID0gcGcucmUuY29udHJpYnMuZXhlYyhoKTtcblx0XHRcdGlmIChjb250cmlicykge1xuXHRcdFx0XHRpZiAoY29udHJpYnNbMV0gPT09ICd0aXRsZT0nKSB7XG5cdFx0XHRcdFx0Y29udHJpYnNbM10gPSBjb250cmlic1szXS5zcGxpdCgnKycpLmpvaW4oJyAnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB1ID0gbmV3IFRpdGxlKGNvbnRyaWJzWzNdKTtcblx0XHRcdFx0dGhpcy5zZXRVdGYoXG5cdFx0XHRcdFx0VGl0bGUuZGVjb2RlTmFzdGllcyhgJHttdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc1VzZXJJZF19OiR7dS5zdHJpcE5hbWVzcGFjZSgpfWApXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZW1haWwgPSBwZy5yZS5lbWFpbC5leGVjKGgpO1xuXHRcdFx0aWYgKGVtYWlsKSB7XG5cdFx0XHRcdHRoaXMuc2V0VXRmKFxuXHRcdFx0XHRcdFRpdGxlLmRlY29kZU5hc3RpZXMoXG5cdFx0XHRcdFx0XHRgJHttdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc1VzZXJJZF19OiR7bmV3IFRpdGxlKGVtYWlsWzNdKS5zdHJpcE5hbWVzcGFjZSgpfWBcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgYmFja2xpbmtzID0gcGcucmUuYmFja2xpbmtzLmV4ZWMoaCk7XG5cdFx0XHRpZiAoYmFja2xpbmtzKSB7XG5cdFx0XHRcdHRoaXMuc2V0VXRmKFRpdGxlLmRlY29kZU5hc3RpZXMobmV3IFRpdGxlKGJhY2tsaW5rc1szXSkpKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHQvLyBBIGR1bW15IHRpdGxlIG9iamVjdCBmb3IgYSBTcGVjaWFsOkRpZmYgbGluay5cblx0XHRcdGNvbnN0IHNwZWNpYWxkaWZmID0gcGcucmUuc3BlY2lhbGRpZmYuZXhlYyhoKTtcblx0XHRcdGlmIChzcGVjaWFsZGlmZikge1xuXHRcdFx0XHR0aGlzLnNldFV0Zihcblx0XHRcdFx0XHRUaXRsZS5kZWNvZGVOYXN0aWVzKG5ldyBUaXRsZShgJHttdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc1NwZWNpYWxJZF19OkRpZmZgKSlcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHQvLyBubyBtb3JlIHNwZWNpYWwgY2FzZXMgdG8gY2hlY2sgLS1cblx0XHRcdC8vIGhvcGVmdWxseSBpdCdzIG5vdCBhIGRpc2d1aXNlZCB1c2VyLXJlbGF0ZWQgb3Igc3BlY2lhbGx5IHRyZWF0ZWQgc3BlY2lhbCBwYWdlXG5cdFx0XHQvLyBJbmNsdWRlcyByZWZlcmVuY2VzXG5cdFx0XHRjb25zdCBtID0gcGcucmUubWFpbi5leGVjKGgpO1xuXHRcdFx0aWYgKG0gPT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBmcm9tQm90SW50ZXJmYWNlID0gL1xcPyguKyYpP3RpdGxlPS8udGVzdChoKTtcblx0XHRcdFx0aWYgKGZyb21Cb3RJbnRlcmZhY2UpIHtcblx0XHRcdFx0XHRtWzJdID0gbVsyXS5zcGxpdCgnKycpLmpvaW4oJ18nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBleHRyYWN0ZWQgPSBtWzJdICsgKG1bM10gPyBgIyR7bVszXX1gIDogJycpO1xuXHRcdFx0XHRpZiAocGcuZmxhZy5pc1NhZmFyaSAmJiAvJTI1W1xcZEEtRmEtZl17Mn0vLnRlc3QoZXh0cmFjdGVkKSkge1xuXHRcdFx0XHRcdC8vIEZpeCBTYWZhcmkgaXNzdWVcblx0XHRcdFx0XHQvLyBTYWZhcmkgc29tZXRpbWVzIGVuY29kZXMgJSBhcyAlMjUgaW4gVVRGLTggZW5jb2RlZCBzdHJpbmdzIGxpa2UgJUU1JUEzIC0+ICUyNUU1JTI1QTMuXG5cdFx0XHRcdFx0dGhpcy5zZXRVdGYoZGVjb2RlVVJJQ29tcG9uZW50KHVuZXNjYXBlKGV4dHJhY3RlZCkpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnNldFV0ZihUaXRsZS5kZWNvZGVOYXN0aWVzKGV4dHJhY3RlZCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0c3RhdGljIGRlY29kZU5hc3RpZXModHh0KSB7XG5cdFx0XHQvLyBteURlY29kZVVSSSB1c2VzIGRlY29kZUV4dHJhcywgd2hpY2ggcmVtb3ZlcyBfLFxuXHRcdFx0Ly8gdGh1cyBydWluaW5nIGNpdGF0aW9ucyBwcmV2aWV3cywgd2hpY2ggYXJlIGZvcm1hdGVkIGFzIFwiY2l0ZV9ub3RlLTFcIlxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0bGV0IHJldCA9IGRlY29kZVVSSShUaXRsZS5kZWNvZGVFc2NhcGVzKHR4dCkpO1xuXHRcdFx0XHRyZXQgPSByZXQucmVwbGFjZSgvWyBfXSokLywgJycpO1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdHJldHVybiB0eHQ7IC8vIGNhbm5vdCBkZWNvZGVcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gRGVjb2RlIHZhbGlkICUtZW5jb2RpbmdzLCBvdGhlcndpc2UgZXNjYXBlIHRoZW1cblx0XHRzdGF0aWMgZGVjb2RlRXNjYXBlcyh0eHQpIHtcblx0XHRcdGNvbnN0IHNwbGl0ID0gdHh0LnNwbGl0KC8oKD86JVtcXGRBLUZhLWZdezJ9KSspLyk7XG5cdFx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cdFx0XHQvLyBObyAlLWVuY29kZWQgaXRlbXMgZm91bmQsIHNvIHJlcGxhY2UgdGhlIGxpdGVyYWwgJVxuXHRcdFx0aWYgKGxlbiA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gc3BsaXRbMF0ucmVwbGFjZSgvJSg/IVtcXGRBLUZhLWZdezJ9KS9nLCAnJTI1Jyk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSArPSAyKSB7XG5cdFx0XHRcdHNwbGl0W2ldID0gZGVjb2RlVVJJQ29tcG9uZW50KHNwbGl0W2ldKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzcGxpdC5qb2luKCcnKTtcblx0XHR9XG5cdFx0ZnJvbUFuY2hvcihhKSB7XG5cdFx0XHRpZiAoIWEpIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMuZnJvbVVSTChhLmhyZWYpO1xuXHRcdH1cblx0XHRmcm9tV2lraVRleHQodHh0KSB7XG5cdFx0XHQvLyBGSVhNRSAtIHRlc3RpbmcgbmVlZGVkXG5cdFx0XHR0eHQgPSBteURlY29kZVVSSSh0eHQpO1xuXHRcdFx0dGhpcy5zZXRVdGYodHh0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRoaW50VmFsdWUoKSB7XG5cdFx0XHRpZiAoIXRoaXMudmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNhZmVEZWNvZGVVUkkodGhpcy52YWx1ZSk7XG5cdFx0fVxuXHRcdHRvVXNlck5hbWUod2l0aE5zKSB7XG5cdFx0XHRpZiAodGhpcy5uYW1lc3BhY2VJZCgpICE9PSBwZy5uc1VzZXJJZCAmJiB0aGlzLm5hbWVzcGFjZUlkKCkgIT09IHBnLm5zVXNlcnRhbGtJZCkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy52YWx1ZSA9XG5cdFx0XHRcdCh3aXRoTnMgPyBgJHttdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc1VzZXJJZF19OmAgOiAnJykgK1xuXHRcdFx0XHR0aGlzLnN0cmlwTmFtZXNwYWNlKCkuc3BsaXQoJy8nKVswXTtcblx0XHR9XG5cdFx0dXNlck5hbWUod2l0aE5zKSB7XG5cdFx0XHRjb25zdCB0ID0gbmV3IFRpdGxlKHRoaXMudmFsdWUpO1xuXHRcdFx0dC50b1VzZXJOYW1lKHdpdGhOcyk7XG5cdFx0XHRpZiAodC52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHR0b1RhbGtQYWdlKCkge1xuXHRcdFx0Ly8gY29udmVydCBhcnRpY2xlIHRvIGEgdGFsayBwYWdlLCBvciBpZiB3ZSBjYW4ndCwgcmV0dXJuIG51bGxcblx0XHRcdC8vIEluIG90aGVyIHdvcmRzOiByZXR1cm4gbnVsbCBpZiB0aGlzIEFMUkVBRFkgSVMgYSB0YWxrIHBhZ2Vcblx0XHRcdC8vIGFuZCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgdGFsayBwYWdlIG90aGVyd2lzZVxuXHRcdFx0Ly9cblx0XHRcdC8vIFBlciB7QGxpbmsgaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL01hbnVhbDpOYW1lc3BhY2UjU3ViamVjdF9hbmRfdGFsa19uYW1lc3BhY2VzfVxuXHRcdFx0Ly8gKiBBbGwgZGlzY3Vzc2lvbiBuYW1lc3BhY2VzIGhhdmUgb2RkLWludGVnZXIgaW5kaWNlc1xuXHRcdFx0Ly8gKiBUaGUgZGlzY3Vzc2lvbiBuYW1lc3BhY2UgaW5kZXggZm9yIGEgc3BlY2lmaWMgbmFtZXNwYWNlIHdpdGggaW5kZXggbiBpcyBuICsgMVxuXHRcdFx0aWYgKHRoaXMudmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuYW1lc3BhY2VJZCA9IHRoaXMubmFtZXNwYWNlSWQoKTtcblx0XHRcdGlmIChuYW1lc3BhY2VJZCA+PSAwICYmIG5hbWVzcGFjZUlkICUgMiA9PT0gMCkge1xuXHRcdFx0XHQvLyBub24tc3BlY2lhbCBhbmQgc3ViamVjdCBuYW1lc3BhY2Vcblx0XHRcdFx0Y29uc3QgbG9jYWxpemVkTmFtZXNwYWNlID0gbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbbmFtZXNwYWNlSWQgKyAxXTtcblx0XHRcdFx0aWYgKGxvY2FsaXplZE5hbWVzcGFjZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZSA9XG5cdFx0XHRcdFx0XHRsb2NhbGl6ZWROYW1lc3BhY2UgPT09ICcnXG5cdFx0XHRcdFx0XHRcdD8gdGhpcy5zdHJpcE5hbWVzcGFjZSgpXG5cdFx0XHRcdFx0XHRcdDogYCR7bG9jYWxpemVkTmFtZXNwYWNlLnNwbGl0KCcgJykuam9pbignXycpfToke3RoaXMuc3RyaXBOYW1lc3BhY2UoKX1gO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHQvLyBSZXR1cm4gY2Fub25pY2FsLCBsb2NhbGl6ZWQgbmFtZXNwYWNlXG5cdFx0bmFtZXNwYWNlKCkge1xuXHRcdFx0cmV0dXJuIG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3RoaXMubmFtZXNwYWNlSWQoKV07XG5cdFx0fVxuXHRcdG5hbWVzcGFjZUlkKCkge1xuXHRcdFx0Y29uc3QgbiA9IHRoaXMudmFsdWUuaW5kZXhPZignOicpO1xuXHRcdFx0aWYgKG4gPCAwKSB7XG5cdFx0XHRcdHJldHVybiAwOyAvLyBtYWluc3BhY2Vcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5hbWVzcGFjZUlkID1cblx0XHRcdFx0bXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VJZHMnKVt0aGlzLnZhbHVlLnNsaWNlKDAsIE1hdGgubWF4KDAsIG4pKS5zcGxpdCgnICcpLmpvaW4oJ18nKS50b0xvd2VyQ2FzZSgpXTtcblx0XHRcdGlmIChuYW1lc3BhY2VJZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybiAwOyAvLyBtYWluc3BhY2Vcblx0XHRcdH1cblx0XHRcdHJldHVybiBuYW1lc3BhY2VJZDtcblx0XHR9XG5cdFx0dGFsa1BhZ2UoKSB7XG5cdFx0XHRjb25zdCB0ID0gbmV3IFRpdGxlKHRoaXMudmFsdWUpO1xuXHRcdFx0dC50b1RhbGtQYWdlKCk7XG5cdFx0XHRpZiAodC52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpc1RhbGtQYWdlKCkge1xuXHRcdFx0aWYgKHRoaXMudGFsa1BhZ2UoKSA9PT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0dG9BcnRpY2xlRnJvbVRhbGtQYWdlKCkge1xuXHRcdFx0Ly8gbGFyZ2VseSBjb3B5L3Bhc3RlIGZyb20gdG9UYWxrUGFnZSBhYm92ZS5cblx0XHRcdGlmICh0aGlzLnZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbmFtZXNwYWNlSWQgPSB0aGlzLm5hbWVzcGFjZUlkKCk7XG5cdFx0XHRpZiAobmFtZXNwYWNlSWQgPj0gMCAmJiBuYW1lc3BhY2VJZCAlIDIgPT09IDEpIHtcblx0XHRcdFx0Ly8gbm9uLXNwZWNpYWwgYW5kIHRhbGsgbmFtZXNwYWNlXG5cdFx0XHRcdGNvbnN0IGxvY2FsaXplZE5hbWVzcGFjZSA9IG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW25hbWVzcGFjZUlkIC0gMV07XG5cdFx0XHRcdGlmIChsb2NhbGl6ZWROYW1lc3BhY2UgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRoaXMudmFsdWUgPVxuXHRcdFx0XHRcdFx0bG9jYWxpemVkTmFtZXNwYWNlID09PSAnJ1xuXHRcdFx0XHRcdFx0XHQ/IHRoaXMuc3RyaXBOYW1lc3BhY2UoKVxuXHRcdFx0XHRcdFx0XHQ6IGAke2xvY2FsaXplZE5hbWVzcGFjZS5zcGxpdCgnICcpLmpvaW4oJ18nKX06JHt0aGlzLnN0cmlwTmFtZXNwYWNlKCl9YDtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy52YWx1ZSA9IG51bGw7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0YXJ0aWNsZUZyb21UYWxrUGFnZSgpIHtcblx0XHRcdGNvbnN0IHQgPSBuZXcgVGl0bGUodGhpcy52YWx1ZSk7XG5cdFx0XHR0LnRvQXJ0aWNsZUZyb21UYWxrUGFnZSgpO1xuXHRcdFx0aWYgKHQudmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0YXJ0aWNsZUZyb21UYWxrT3JBcnRpY2xlKCkge1xuXHRcdFx0Y29uc3QgdCA9IG5ldyBUaXRsZSh0aGlzLnZhbHVlKTtcblx0XHRcdGlmICh0LnRvQXJ0aWNsZUZyb21UYWxrUGFnZSgpKSB7XG5cdFx0XHRcdHJldHVybiB0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdGlzSXBVc2VyKCkge1xuXHRcdFx0cmV0dXJuIHBnLnJlLmlwVXNlci50ZXN0KHRoaXMudXNlck5hbWUoKSk7XG5cdFx0fVxuXHRcdHN0cmlwTmFtZXNwYWNlKCkge1xuXHRcdFx0Ly8gcmV0dXJucyBhIHN0cmluZywgbm90IGEgVGl0bGVcblx0XHRcdGNvbnN0IG4gPSB0aGlzLnZhbHVlLmluZGV4T2YoJzonKTtcblx0XHRcdGlmIChuIDwgMCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5hbWVzcGFjZUlkID0gdGhpcy5uYW1lc3BhY2VJZCgpO1xuXHRcdFx0aWYgKG5hbWVzcGFjZUlkID09PSBwZy5uc01haW5zcGFjZUlkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMudmFsdWUuc2xpY2UoTWF0aC5tYXgoMCwgbiArIDEpKTtcblx0XHR9XG5cdFx0c2V0VXRmKHZhbHVlKSB7XG5cdFx0XHRpZiAoIXZhbHVlKSB7XG5cdFx0XHRcdHRoaXMudmFsdWUgPSAnJztcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgYW5jaCA9IHZhbHVlLmluZGV4T2YoJyMnKTtcblx0XHRcdGlmIChhbmNoIDwgMCkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gdmFsdWUuc3BsaXQoJ18nKS5qb2luKCcgJyk7XG5cdFx0XHRcdHRoaXMuYW5jaG9yID0gJyc7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMudmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBNYXRoLm1heCgwLCBhbmNoKSkuc3BsaXQoJ18nKS5qb2luKCcgJyk7XG5cdFx0XHR0aGlzLmFuY2hvciA9IHZhbHVlLnNsaWNlKE1hdGgubWF4KDAsIGFuY2ggKyAxKSk7XG5cdFx0XHR0aGlzLm5zID0gbnVsbDsgLy8gd2FpdCB1bnRpbCBuYW1lc3BhY2UoKSBpcyBjYWxsZWRcblx0XHR9XG5cdFx0c2V0VXJsKHVybGZyYWcpIHtcblx0XHRcdGNvbnN0IGFuY2ggPSB1cmxmcmFnLmluZGV4T2YoJyMnKTtcblx0XHRcdHRoaXMudmFsdWUgPSBzYWZlRGVjb2RlVVJJKHVybGZyYWcuc2xpY2UoMCwgTWF0aC5tYXgoMCwgYW5jaCkpKTtcblx0XHRcdHRoaXMuYW5jaG9yID0gdGhpcy52YWx1ZS5zbGljZShNYXRoLm1heCgwLCBhbmNoICsgMSkpO1xuXHRcdH1cblx0XHRhcHBlbmQoeCkge1xuXHRcdFx0dGhpcy5zZXRVdGYodGhpcy52YWx1ZSArIHgpO1xuXHRcdH1cblx0XHR1cmxTdHJpbmcoeCkge1xuXHRcdFx0aWYgKCF4KSB7XG5cdFx0XHRcdHggPSB7fTtcblx0XHRcdH1cblx0XHRcdGxldCB2ID0gdGhpcy50b1N0cmluZyh0cnVlKTtcblx0XHRcdGlmICgheC5vbWl0QW5jaG9yICYmIHRoaXMuYW5jaG9yKSB7XG5cdFx0XHRcdHYgKz0gYCMke3RoaXMudXJsQW5jaG9yKCl9YDtcblx0XHRcdH1cblx0XHRcdGlmICgheC5rZWVwU3BhY2VzKSB7XG5cdFx0XHRcdHYgPSB2LnNwbGl0KCcgJykuam9pbignXycpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGVuY29kZVVSSSh2KS5zcGxpdCgnJicpLmpvaW4oJyUyNicpLnNwbGl0KCc/Jykuam9pbignJTNGJykuc3BsaXQoJysnKS5qb2luKCclMkInKTtcblx0XHR9XG5cdFx0cmVtb3ZlQW5jaG9yKCkge1xuXHRcdFx0cmV0dXJuIG5ldyBUaXRsZSh0aGlzLnRvU3RyaW5nKHRydWUpKTtcblx0XHR9XG5cdFx0dG9VcmwoKSB7XG5cdFx0XHRyZXR1cm4gcGcud2lraS50aXRsZWJhc2UgKyB0aGlzLnVybFN0cmluZygpO1xuXHRcdH1cblx0fVxuXHRUaXRsZS5mcm9tVVJMID0gKGgpID0+IHtcblx0XHRyZXR1cm4gbmV3IFRpdGxlKCkuZnJvbVVSTChoKTtcblx0fTtcblx0VGl0bGUuZnJvbUFuY2hvciA9IChhKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBUaXRsZSgpLmZyb21BbmNob3IoYSk7XG5cdH07XG5cdFRpdGxlLmZyb21XaWtpVGV4dCA9ICh0eHQpID0+IHtcblx0XHRyZXR1cm4gbmV3IFRpdGxlKCkuZnJvbVdpa2lUZXh0KHR4dCk7XG5cdH07XG5cdGNvbnN0IHBhcnNlUGFyYW1zID0gKHVybCkgPT4ge1xuXHRcdGNvbnN0IHNwZWNpYWxEaWZmID0gcGcucmUuc3BlY2lhbGRpZmYuZXhlYyh1cmwpO1xuXHRcdGlmIChzcGVjaWFsRGlmZikge1xuXHRcdFx0Y29uc3Qgc3BsaXQgPSBzcGVjaWFsRGlmZlsxXS5zcGxpdCgnLycpO1xuXHRcdFx0aWYgKHNwbGl0Lmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdG9sZGlkOiBzcGxpdFswXSxcblx0XHRcdFx0XHRkaWZmOiAncHJldicsXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2UgaWYgKHNwbGl0Lmxlbmd0aCA9PT0gMikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdG9sZGlkOiBzcGxpdFswXSxcblx0XHRcdFx0XHRkaWZmOiBzcGxpdFsxXSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3QgcmV0ID0ge307XG5cdFx0aWYgKCF1cmwuaW5jbHVkZXMoJz8nKSkge1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cdFx0W3VybF0gPSB1cmwuc3BsaXQoJyMnKTtcblx0XHRjb25zdCBzID0gdXJsLnNwbGl0KCc/Jykuc2xpY2UoMSkuam9pbignLCcpO1xuXHRcdGNvbnN0IHQgPSBzLnNwbGl0KCcmJyk7XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHQpIHtcblx0XHRcdGNvbnN0IHogPSBlbGVtZW50LnNwbGl0KCc9Jyk7XG5cdFx0XHR6LnB1c2gobnVsbCk7XG5cdFx0XHRbLCByZXRbelswXV1dID0gejtcblx0XHR9XG5cdFx0Ly8gRGlmZiByZXZpc2lvbiB3aXRoIG5vIG9sZGlkIGlzIGludGVycHJldGVkIGFzIGEgZGlmZiB0byB0aGUgcHJldmlvdXMgcmV2aXNpb24gYnkgTWVkaWFXaWtpXG5cdFx0aWYgKHJldC5kaWZmICYmIHJldC5vbGRpZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXQub2xkaWQgPSAncHJldic7XG5cdFx0fVxuXHRcdC8vIERvY3VtZW50YXRpb24gc2VlbXMgdG8gc2F5IHNvbWV0aGluZyBkaWZmZXJlbnQsIGJ1dCBvbGRpZCBjYW4gYWxzbyBhY2NlcHQgcHJldi9uZXh0LCBhbmRcblx0XHQvLyBFY2hvIGlzIGVtaXR0aW5nIHN1Y2ggVVJMcy4gU2ltcGxlIGZpeHVwIGR1cmluZyBwYXJhbWV0ZXIgZGVjb2Rpbmc6XG5cdFx0aWYgKHJldC5vbGRpZCAmJiAocmV0Lm9sZGlkID09PSAncHJldicgfHwgcmV0Lm9sZGlkID09PSAnbmV4dCcgfHwgcmV0Lm9sZGlkID09PSAnY3VyJykpIHtcblx0XHRcdGNvbnN0IGhlbHBlciA9IHJldC5kaWZmO1xuXHRcdFx0cmV0LmRpZmYgPSByZXQub2xkaWQ7XG5cdFx0XHRyZXQub2xkaWQgPSBoZWxwZXI7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdC8vIChhKSBteURlY29kZVVSSSAoZmlyc3Qgc3RhbmRhcmQgZGVjb2RlVVJJLCB0aGVuIHBnLnJlLnVybE5vUG9wdXApXG5cdC8vIChiKSBjaGFuZ2Ugc3BhY2VzIHRvIHVuZGVyc2NvcmVzXG5cdC8vIChjKSBlbmNvZGVVUkkgKGp1c3QgdGhlIHN0cmFpZ2h0IG9uZSwgbm8gcGcucmUudXJsTm9Qb3B1cClcblx0Y29uc3QgbXlEZWNvZGVVUkkgPSAoc3RyKSA9PiB7XG5cdFx0bGV0IHJldDtcblx0XHQvLyBGSVhNRSBkZWNvZGVVUklDb21wb25lbnQ/P1xuXHRcdHRyeSB7XG5cdFx0XHRyZXQgPSBkZWNvZGVVUkkoc3RyLnRvU3RyaW5nKCkpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwZy5taXNjLmRlY29kZUV4dHJhcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0Y29uc3Qge2Zyb219ID0gcGcubWlzYy5kZWNvZGVFeHRyYXNbaV07XG5cdFx0XHRjb25zdCB7dG99ID0gcGcubWlzYy5kZWNvZGVFeHRyYXNbaV07XG5cdFx0XHRyZXQgPSByZXQuc3BsaXQoZnJvbSkuam9pbih0byk7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IHNhZmVEZWNvZGVVUkkgPSAoc3RyKSA9PiB7XG5cdFx0Y29uc3QgcmV0ID0gbXlEZWNvZGVVUkkoc3RyKTtcblx0XHRyZXR1cm4gcmV0IHx8IHN0cjtcblx0fTtcblx0Ly8gVEVTVFMgLy9cblx0Y29uc3QgaXNEaXNhbWJpZyA9IChkYXRhLCBhcnRpY2xlKSA9PiB7XG5cdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cEFsbERhYnNTdHVicycpICYmIGFydGljbGUubmFtZXNwYWNlKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuICFhcnRpY2xlLmlzVGFsa1BhZ2UoKSAmJiBwZy5yZS5kaXNhbWJpZy50ZXN0KGRhdGEpO1xuXHR9O1xuXHRjb25zdCBzdHViQ291bnQgPSAoZGF0YSwgYXJ0aWNsZSkgPT4ge1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBBbGxEYWJzU3R1YnMnKSAmJiBhcnRpY2xlLm5hbWVzcGFjZSgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGxldCBzZWN0U3R1YiA9IDA7XG5cdFx0bGV0IHJlYWxTdHViID0gMDtcblx0XHRpZiAocGcucmUuc3R1Yi50ZXN0KGRhdGEpKSB7XG5cdFx0XHRjb25zdCBzID0gZGF0YS5zcGxpdChwZy5yZS5zdHViKTtcblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0XHRpZiAoc1tpXSkge1xuXHRcdFx0XHRcdCsrc2VjdFN0dWI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0KytyZWFsU3R1Yjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0cmVhbDogcmVhbFN0dWIsXG5cdFx0XHRzZWN0OiBzZWN0U3R1Yixcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBpc1ZhbGlkSW1hZ2VOYW1lID0gKHN0cikgPT4ge1xuXHRcdHJldHVybiAhc3RyLmluY2x1ZGVzKCd7Jyk7XG5cdH07XG5cdGNvbnN0IGlzSW5TdHJpcHBhYmxlTmFtZXNwYWNlID0gKGFydGljbGUpID0+IHtcblx0XHRyZXR1cm4gYXJ0aWNsZS5uYW1lc3BhY2VJZCgpICE9PSAwO1xuXHR9O1xuXHRjb25zdCBpc0luTWFpbk5hbWVzcGFjZSA9IChhcnRpY2xlKSA9PiB7XG5cdFx0cmV0dXJuIGFydGljbGUubmFtZXNwYWNlSWQoKSA9PT0gMDtcblx0fTtcblx0Y29uc3QgYW5jaG9yQ29udGFpbnNJbWFnZSA9IChhKSA9PiB7XG5cdFx0Ly8gaXRlcmF0ZSBvdmVyIGNoaWxkcmVuIG9mIGFuY2hvciBhXG5cdFx0Ly8gc2VlIGlmIGFueSBhcmUgaW1hZ2VzXG5cdFx0aWYgKGEgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3Qga2lkcyA9IGEuY2hpbGROb2Rlcztcblx0XHRmb3IgKGNvbnN0IGtpZCBvZiBraWRzKSB7XG5cdFx0XHRpZiAoa2lkLm5vZGVOYW1lID09PSAnSU1HJykge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRjb25zdCBpc1BvcHVwTGluayA9IChhKSA9PiB7XG5cdFx0Ly8gTkIgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIFRPQyBsaW5rcyBnZW5lcmFsbHkgcmV0dXJuIHRydWVcblx0XHQvLyB0aGV5IHNob3VsZCBiZSBzdHJpcHBlZCBvdXQgbGF0ZXJcblx0XHRpZiAoIW1hcmtOb3BvcHVwU3BhbkxpbmtzLmRvbmUpIHtcblx0XHRcdG1hcmtOb3BvcHVwU3BhbkxpbmtzKCk7XG5cdFx0fVxuXHRcdGlmIChhLmluTm9wb3B1cFNwYW4pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Ly8gRklYTUUgaXMgdGhpcyBmYXN0ZXIgaW5saW5lP1xuXHRcdGlmIChhLm9ubW91c2Vkb3duIHx8IGEuZ2V0QXR0cmlidXRlKCdub3BvcHVwJykpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgaCA9IGEuaHJlZjtcblx0XHRpZiAoaCA9PT0gYCR7ZG9jdW1lbnQubG9jYXRpb24uaHJlZn0jYCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoIXBnLnJlLmJhc2VuYW1lcy50ZXN0KGgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGlmICghcGcucmUudXJsTm9Qb3B1cC50ZXN0KGgpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdChwZy5yZS5lbWFpbC50ZXN0KGgpIHx8IHBnLnJlLmNvbnRyaWJzLnRlc3QoaCkgfHwgcGcucmUuYmFja2xpbmtzLnRlc3QoaCkgfHwgcGcucmUuc3BlY2lhbGRpZmYudGVzdChoKSkgJiZcblx0XHRcdCFoLmluY2x1ZGVzKCcmbGltaXQ9Jylcblx0XHQpO1xuXHR9O1xuXHRjb25zdCBtYXJrTm9wb3B1cFNwYW5MaW5rcyA9IGZ1bmN0aW9uIG1hcmtOb3BvcHVwU3BhbkxpbmtzKCkge1xuXHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBPbmx5QXJ0aWNsZUxpbmtzJykpIHtcblx0XHRcdGZpeFZlY3Rvck1lbnVQb3B1cHMoKTtcblx0XHR9XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0Y29uc3QgcyA9ICRib2R5LmZpbmQoJy5ub3BvcHVwcycpLnRvQXJyYXkoKTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygcykge1xuXHRcdFx0Y29uc3QgYXMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRcdGZvciAoY29uc3QgYSBvZiBhcykge1xuXHRcdFx0XHRhLmluTm9wb3B1cFNwYW4gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRtYXJrTm9wb3B1cFNwYW5MaW5rcy5kb25lID0gdHJ1ZTtcblx0fTtcblx0Y29uc3QgZml4VmVjdG9yTWVudVBvcHVwcyA9ICgpID0+IHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHQkYm9keS5maW5kKCduYXYudmVjdG9yLW1lbnUgaDM6Zmlyc3QgYTpmaXJzdCcpLnByb3AoJ2luTm9wb3B1cFNwYW4nLCB0cnVlKTtcblx0fTtcblx0Ly8gRU5ERklMRTogdGl0bGVzLmpzXG5cdC8vIFNUQVJURklMRTogZ2V0cGFnZS5qc1xuXHQvLyBXaWtpLXNwZWNpZmljIGRvd25sb2FkaW5nXG5cdC8vXG5cdC8vIFNjaGVtYXRpYyBmb3IgYSBnZXRXaWtpIGNhbGxcblx0Ly9cblx0Ly8gICAgICAgICAgICAgZ2V0UGFnZVdpdGhDYWNoaW5nXG5cdC8vXHRcdFx0XHRcdHxcblx0Ly9cdCAgIGZhbHNlXHRcdHxcdFx0ICB0cnVlXG5cdC8vIGdldFBhZ2U8LVtmaW5kUGljdHVyZUluQ2FjaGVdLT4tb25Db21wbGV0ZShhIGZha2UgZG93bmxvYWQpXG5cdC8vICAgXFwuXG5cdC8vXHQgKGFzeW5jKS0+YWRkUGFnZVRvQ2FjaGUoZG93bmxvYWQpLT4tb25Db21wbGV0ZShkb3dubG9hZClcblx0Ly8gY2hlY2sgY2FjaGUgdG8gc2VlIGlmIHBhZ2UgZXhpc3RzXG5cdGNvbnN0IGdldFBhZ2VXaXRoQ2FjaGluZyA9ICh1cmwsIG9uQ29tcGxldGUsIG93bmVyKSA9PiB7XG5cdFx0bG9nKGBnZXRQYWdlV2l0aENhY2hpbmcsIHVybD0ke3VybH1gKTtcblx0XHRjb25zdCBpID0gZmluZEluUGFnZUNhY2hlKHVybCk7XG5cdFx0bGV0IGQ7XG5cdFx0aWYgKGkgPiAtMSkge1xuXHRcdFx0ZCA9IGZha2VEb3dubG9hZChcblx0XHRcdFx0dXJsLFxuXHRcdFx0XHRvd25lci5pZE51bWJlcixcblx0XHRcdFx0b25Db21wbGV0ZSxcblx0XHRcdFx0cGcuY2FjaGUucGFnZXNbaV0uZGF0YSxcblx0XHRcdFx0cGcuY2FjaGUucGFnZXNbaV0ubGFzdE1vZGlmaWVkLFxuXHRcdFx0XHRvd25lclxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZCA9IGdldFBhZ2UodXJsLCBvbkNvbXBsZXRlLCBvd25lcik7XG5cdFx0XHRpZiAoZCAmJiBvd25lciAmJiBvd25lci5hZGREb3dubG9hZCkge1xuXHRcdFx0XHRvd25lci5hZGREb3dubG9hZChkKTtcblx0XHRcdFx0ZC5vd25lciA9IG93bmVyO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgZ2V0UGFnZSA9ICh1cmwsIG9uQ29tcGxldGUsIG93bmVyKSA9PiB7XG5cdFx0bG9nKCdnZXRQYWdlJyk7XG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAoZCkgPT4ge1xuXHRcdFx0aWYgKCFkLmFib3J0ZWQpIHtcblx0XHRcdFx0YWRkUGFnZVRvQ2FjaGUoZCk7XG5cdFx0XHRcdG9uQ29tcGxldGUoZCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gc3RhcnREb3dubG9hZCh1cmwsIG93bmVyLmlkTnVtYmVyLCBjYWxsYmFjayk7XG5cdH07XG5cdGNvbnN0IGZpbmRJblBhZ2VDYWNoZSA9ICh1cmwpID0+IHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBnLmNhY2hlLnBhZ2VzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAodXJsID09PSBwZy5jYWNoZS5wYWdlc1tpXS51cmwpIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fTtcblx0Y29uc3QgYWRkUGFnZVRvQ2FjaGUgPSAoZG93bmxvYWQpID0+IHtcblx0XHRsb2coYGFkZFBhZ2VUb0NhY2hlICR7ZG93bmxvYWQudXJsfWApO1xuXHRcdGNvbnN0IHBhZ2UgPSB7XG5cdFx0XHR1cmw6IGRvd25sb2FkLnVybCxcblx0XHRcdGRhdGE6IGRvd25sb2FkLmRhdGEsXG5cdFx0XHRsYXN0TW9kaWZpZWQ6IGRvd25sb2FkLmxhc3RNb2RpZmllZCxcblx0XHR9O1xuXHRcdHJldHVybiBwZy5jYWNoZS5wYWdlcy5wdXNoKHBhZ2UpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBnZXRwYWdlLmpzXG5cdC8vIFNUQVJURklMRTogdG9vbHMuanNcblx0Ly8gSUUgbWFkbmVzcyB3aXRoIGVuY29kaW5nXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PVxuXHQvL1xuXHQvLyBzdXBwb3NlIHRocm91Z2hvdXQgdGhhdCB0aGUgcGFnZSBpcyBpbiB1dGY4LCBsaWtlIHdpa2lwZWRpYVxuXHQvL1xuXHQvLyBpZiBhIGlzIGFuIGFuY2hvciBET00gZWxlbWVudCBhbmQgYS5ocmVmIHNob3VsZCBjb25zaXN0IG9mXG5cdC8vXG5cdC8vIGh0dHA6Ly9ob3N0Lm5hbWUuaGVyZS93aWtpL2Zvbz9iYXI9YmF6XG5cdC8vXG5cdC8vIHRoZW4gSUUgZ2l2ZXMgZm9vIGFzIFwibGF0aW4xLWVuY29kZWRcIiB1dGY4OyB3ZSBoYXZlIGZvbyA9IGRlY29kZV91dGY4KGRlY29kZVVSSShmb29faWUpKVxuXHQvLyBidXQgSUUgZ2l2ZXMgYmFyPWJheiBjb3JyZWN0bHkgYXMgcGxhaW4gdXRmOFxuXHQvL1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly9cblx0Ly8gSUUncyB4bWxodHRwIGRvZXNuJ3QgdW5kZXJzdGFuZCB1dGY4IHVybHMuIEhhdmUgdG8gdXNlIGVuY29kZVVSSSBoZXJlLlxuXHQvL1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly9cblx0Ly8gc3VtbWF0IGVsc2Vcblx0Ly8gU291cmNlOiBodHRwOi8vYWt0dWVsbC5kZS5zZWxmaHRtbC5vcmcvYXJ0aWtlbC9qYXZhc2NyaXB0L3V0ZjhiNjQvdXRmOC5odG1cblx0Y29uc3QgZ2V0SnNPYmogPSAoanNvbikgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBqc29uX3JldCA9IEpTT04ucGFyc2UoanNvbik7XG5cdFx0XHRpZiAoanNvbl9yZXQud2FybmluZ3MpIHtcblx0XHRcdFx0Zm9yIChsZXQgdyA9IDA7IHcgPCBqc29uX3JldC53YXJuaW5ncy5sZW5ndGg7IHcrKykge1xuXHRcdFx0XHRcdGlmIChqc29uX3JldC53YXJuaW5nc1t3XVsnKiddKSB7XG5cdFx0XHRcdFx0XHRsb2coanNvbl9yZXQud2FybmluZ3Nbd11bJyonXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxvZyhqc29uX3JldC53YXJuaW5nc1t3XS53YXJuaW5ncyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGpzb25fcmV0LmVycm9yKSB7XG5cdFx0XHRcdGVycmxvZyhgJHtqc29uX3JldC5lcnJvci5jb2RlfTogJHtqc29uX3JldC5lcnJvci5pbmZvfWApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGpzb25fcmV0O1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0ZXJybG9nKGBTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIGdldEpzT2JqLCBqc29uPSR7anNvbn1gKTtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgYW55Q2hpbGQgPSAob2JqKSA9PiB7XG5cdFx0Zm9yIChjb25zdCBwIGluIG9iaikge1xuXHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKG9iaiwgcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqW3BdO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgdXBjYXNlRmlyc3QgPSAoc3RyKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBzdHIgIT09IHR5cGVvZiAnJyB8fCBzdHIgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdH07XG5cdGNvbnN0IGZpbmRJbkFycmF5ID0gKGFyciwgZm9vKSA9PiB7XG5cdFx0aWYgKCFhcnIgfHwgYXJyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblx0XHRjb25zdCBsZW4gPSBhcnIubGVuZ3RoO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcblx0XHRcdGlmIChhcnJbaV0gPT09IGZvbykge1xuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9O1xuXHRjb25zdCBuZXh0T25lID0gKGFycmF5LCB2YWx1ZSkgPT4ge1xuXHRcdC8vIE5CIGlmIHRoZSBhcnJheSBoYXMgdHdvIGNvbnNlY3V0aXZlIGVudHJpZXMgZXF1YWxcblx0XHQvL1x0dGhlbiB0aGlzIHdpbGwgbG9vcCBvbiBzdWNjZXNzaXZlIGNhbGxzXG5cdFx0Y29uc3QgaSA9IGZpbmRJbkFycmF5KGFycmF5LCB2YWx1ZSk7XG5cdFx0aWYgKGkgPCAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIGFycmF5W2kgKyAxXTtcblx0fTtcblx0Y29uc3QgbGl0ZXJhbGl6ZVJlZ2V4ID0gKHN0cikgPT4ge1xuXHRcdHJldHVybiBtdy51dGlsLmVzY2FwZVJlZ0V4cChzdHIpO1xuXHR9O1xuXHRTdHJpbmcucHJvdG90eXBlLmVudGlmeSA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBsZXQgc2h5ID0gJyZzaHk7Jztcblx0XHRyZXR1cm4gdGhpcy5zcGxpdCgnJicpXG5cdFx0XHQuam9pbignJmFtcDsnKVxuXHRcdFx0LnNwbGl0KCc8Jylcblx0XHRcdC5qb2luKCcmbHQ7Jylcblx0XHRcdC5zcGxpdCgnPicpXG5cdFx0XHQuam9pbignJmd0OycgLyogK3NoeSAqLylcblx0XHRcdC5zcGxpdCgnXCInKVxuXHRcdFx0LmpvaW4oJyZxdW90OycpO1xuXHR9O1xuXHQvLyBBcnJheSBmaWx0ZXIgZnVuY3Rpb25cblx0Y29uc3QgcmVtb3ZlTnVsbHMgPSAodmFsKSA9PiB7XG5cdFx0cmV0dXJuIHZhbCAhPT0gbnVsbDtcblx0fTtcblx0Y29uc3Qgam9pblBhdGggPSAobGlzdCkgPT4ge1xuXHRcdHJldHVybiBsaXN0LmZpbHRlcihyZW1vdmVOdWxscykuam9pbignLycpO1xuXHR9O1xuXHRjb25zdCBzaW1wbGVQcmludGYgPSAoc3RyLCBzdWJzKSA9PiB7XG5cdFx0aWYgKCFzdHIgfHwgIXN1YnMpIHtcblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fVxuXHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdGNvbnN0IHMgPSBzdHIuc3BsaXQoLyglc3xcXCRcXGQrKS8pO1xuXHRcdGxldCBpID0gMDtcblx0XHRkbyB7XG5cdFx0XHRyZXQucHVzaChzLnNoaWZ0KCkpO1xuXHRcdFx0aWYgKHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY21kID0gcy5zaGlmdCgpO1xuXHRcdFx0aWYgKGNtZCA9PT0gJyVzJykge1xuXHRcdFx0XHRpZiAoaSA8IHN1YnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goc3Vic1tpXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goY21kKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQrK2k7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBqID0gTnVtYmVyLnBhcnNlSW50KGNtZC5yZXBsYWNlKCckJywgJycpLCAxMCkgLSAxO1xuXHRcdFx0XHRpZiAoaiA+IC0xICYmIGogPCBzdWJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldC5wdXNoKHN1YnNbal0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldC5wdXNoKGNtZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IHdoaWxlIChzLmxlbmd0aCA+IDApO1xuXHRcdHJldHVybiByZXQuam9pbignJyk7XG5cdH07XG5cdGNvbnN0IGlzU3RyaW5nID0gKHgpID0+IHtcblx0XHRyZXR1cm4gdHlwZW9mIHggPT09ICdzdHJpbmcnIHx8IHggaW5zdGFuY2VvZiBTdHJpbmc7XG5cdH07XG5cdGNvbnN0IGlzTnVtYmVyID0gKHgpID0+IHtcblx0XHRyZXR1cm4gdHlwZW9mIHggPT09ICdudW1iZXInIHx8IHggaW5zdGFuY2VvZiBOdW1iZXI7XG5cdH07XG5cdGNvbnN0IGlzUmVnRXhwID0gKHgpID0+IHtcblx0XHRyZXR1cm4geCBpbnN0YW5jZW9mIFJlZ0V4cDtcblx0fTtcblx0Y29uc3QgaXNBcnJheSA9ICh4KSA9PiB7XG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoeCk7XG5cdH07XG5cdGNvbnN0IGlzT2JqZWN0ID0gKHgpID0+IHtcblx0XHRyZXR1cm4geCBpbnN0YW5jZW9mIE9iamVjdDtcblx0fTtcblx0Y29uc3QgaXNGdW5jdGlvbiA9ICh4KSA9PiB7XG5cdFx0cmV0dXJuICFpc1JlZ0V4cCh4KSAmJiAodHlwZW9mIHggPT09ICdmdW5jdGlvbicgfHwgeCBpbnN0YW5jZW9mIEZ1bmN0aW9uKTtcblx0fTtcblx0Y29uc3QgcmVwZWF0U3RyaW5nID0gKHMsIG11bHQpID0+IHtcblx0XHRsZXQgcmV0ID0gJyc7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtdWx0OyArK2kpIHtcblx0XHRcdHJldCArPSBzO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCB6ZXJvRmlsbCA9IChzLCBtaW4pID0+IHtcblx0XHRtaW4gfHw9IDI7XG5cdFx0Y29uc3QgdCA9IHMudG9TdHJpbmcoKTtcblx0XHRyZXR1cm4gcmVwZWF0U3RyaW5nKCcwJywgbWluIC0gdC5sZW5ndGgpICsgdDtcblx0fTtcblx0Y29uc3QgbWFwID0gKGYsIG8pID0+IHtcblx0XHRpZiAoaXNBcnJheShvKSkge1xuXHRcdFx0cmV0dXJuIG1hcF9hcnJheShmLCBvKTtcblx0XHR9XG5cdFx0cmV0dXJuIG1hcF9vYmplY3QoZiwgbyk7XG5cdH07XG5cdGNvbnN0IG1hcF9hcnJheSA9IChmLCBvKSA9PiB7XG5cdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIG8pIHtcblx0XHRcdHJldC5wdXNoKGYoZWxlbWVudCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBtYXBfb2JqZWN0ID0gKGYsIG8pID0+IHtcblx0XHRjb25zdCByZXQgPSB7fTtcblx0XHRmb3IgKGNvbnN0IGkgaW4gbykge1xuXHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKG8sIGkpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0W29dID0gZihvW2ldKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0cGcuZXNjYXBlUXVvdGVzSFRNTCA9ICh0ZXh0KSA9PiB7XG5cdFx0cmV0dXJuIHRleHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcblx0fTtcblx0cGcudW5lc2NhcGVRdW90ZXNIVE1MID0gKGh0bWwpID0+IHtcblx0XHQvLyBGcm9tIHtAbGluayBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzM5NDc4N31cblx0XHQvLyBUaGlzIHNlZW1zIHRvIGJlIGltcGxlbWVudGVkIGNvcnJlY3RseSBvbiBhbGwgbWFqb3IgYnJvd3NlcnMgbm93LCBzbyB3ZVxuXHRcdC8vIGRvbid0IGhhdmUgdG8gbWFrZSBvdXIgb3duIGZ1bmN0aW9uLlxuXHRcdGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cdFx0dHh0LmlubmVySFRNTCA9IGh0bWw7XG5cdFx0cmV0dXJuIHR4dC52YWx1ZTtcblx0fTtcblx0Ly8gRU5ERklMRTogdG9vbHMuanNcblx0Ly8gU1RBUlRGSUxFOiBkYWIuanNcblx0Ly8gRGFiLWZpeGluZyBjb2RlXG5cdC8vXG5cdGNvbnN0IHJldGFyZ2V0RGFiID0gKG5ld1RhcmdldCwgb2xkVGFyZ2V0LCBmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZSwgdGl0bGVUb0VkaXQpID0+IHtcblx0XHRsb2coYHJldGFyZ2V0RGFiOiBuZXdUYXJnZXQ9JHtuZXdUYXJnZXR9IG9sZFRhcmdldD0ke29sZFRhcmdldH1gKTtcblx0XHRyZXR1cm4gY2hhbmdlTGlua1RhcmdldExpbmsoe1xuXHRcdFx0bmV3VGFyZ2V0LFxuXHRcdFx0dGV4dDogbmV3VGFyZ2V0LnNwbGl0KCcgJykuam9pbignJm5ic3A7JyksXG5cdFx0XHRoaW50OiB0cHJpbnRmKCdkaXNhbWJpZ0hpbnQnLCBbbmV3VGFyZ2V0XSksXG5cdFx0XHRzdW1tYXJ5OiBzaW1wbGVQcmludGYoZ2V0VmFsdWVPZigncG9wdXBGaXhEYWJzU3VtbWFyeScpLCBbZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWUsIG5ld1RhcmdldF0pLFxuXHRcdFx0Y2xpY2tCdXR0b246IGdldFZhbHVlT2YoJ3BvcHVwRGFic0F1dG9DbGljaycpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHRvbGRUYXJnZXQsXG5cdFx0XHR3YXRjaDogZ2V0VmFsdWVPZigncG9wdXBXYXRjaERpc2FtYmlnZ2VkUGFnZXMnKSxcblx0XHRcdHRpdGxlOiB0aXRsZVRvRWRpdCxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgbGlzdExpbmtzID0gKHdpa2l0ZXh0LCBvbGRUYXJnZXQsIHRpdGxlVG9FZGl0KSA9PiB7XG5cdFx0Ly8gbWVkaWF3aWtpIHN0cmlwcyB0cmFpbGluZyBzcGFjZXMsIHNvIHdlIGRvIHRoZSBzYW1lXG5cdFx0Ly8gdGVzdGNhc2U6IHtAbGluayBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvdy9pbmRleC5waHA/dGl0bGU9UmFkaWFsJm9sZGlkPTk3MzY1NjMzfVxuXHRcdGNvbnN0IHJlZyA9IC9cXFtcXFsoW158XSo/KSAqKFxcfHxdXSkvZ2k7XG5cdFx0bGV0IHJldCA9IFtdO1xuXHRcdGNvbnN0IHNwbGl0dGVkID0gd2lraXRleHQuc3BsaXQocmVnKTtcblx0XHQvLyBeW2Etel0rIHNob3VsZCBtYXRjaCBpbnRlcndpa2kgbGlua3MsIGhvcGVmdWxseSAoY2FzZS1pbnNlbnNpdGl2ZSlcblx0XHQvLyBhbmQgXlthLXpdKiBzaG91bGQgbWF0Y2ggdGhvc2UgYW5kIFtbOkNhdGVnb3J5Li4uXV0gc3R5bGUgbGlua3MgdG9vXG5cdFx0Y29uc3Qgb21pdFJlZ2V4ID0gL15bYS16XSo6fF5bU3NdcGVjaWFsOnxeW0lpXW1hZ2V8XltDY11hdGVnb3J5Lztcblx0XHRjb25zdCBmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZSA9IG9sZFRhcmdldC50b1N0cmluZygpO1xuXHRcdGNvbnN0IHdpa1BvcyA9IGdldFZhbHVlT2YoJ3BvcHVwRGFiV2lrdGlvbmFyeScpO1xuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgc3BsaXR0ZWQubGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdGlmICh0eXBlb2Ygc3BsaXR0ZWRbaV0gPT09IHR5cGVvZiAnc3RyaW5nJyAmJiBzcGxpdHRlZFtpXS5sZW5ndGggPiAwICYmICFvbWl0UmVnZXgudGVzdChzcGxpdHRlZFtpXSkpIHtcblx0XHRcdFx0cmV0LnB1c2gocmV0YXJnZXREYWIoc3BsaXR0ZWRbaV0sIG9sZFRhcmdldCwgZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWUsIHRpdGxlVG9FZGl0KSk7XG5cdFx0XHR9IC8qIGlmICovXG5cdFx0fSAvKiBmb3IgbG9vcCAqL1xuXHRcdHJldCA9IHJtRHVwZXNGcm9tU29ydGVkTGlzdChyZXQuc29ydCgpKTtcblx0XHRpZiAod2lrUG9zKSB7XG5cdFx0XHRjb25zdCB3aWtUYXJnZXQgPSBgd2lrdGlvbmFyeToke2ZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lLnJlcGxhY2UoL14oLispXFxzK1xcKFteKV0rXFwpXFxzKiQvLCAnJDEnKX1gO1xuXHRcdFx0Y29uc3QgbWV0aCA9IHdpa1Bvcy50b0xvd2VyQ2FzZSgpID09PSAnZmlyc3QnID8gJ3Vuc2hpZnQnIDogJ3B1c2gnO1xuXHRcdFx0cmV0W21ldGhdKHJldGFyZ2V0RGFiKHdpa1RhcmdldCwgb2xkVGFyZ2V0LCBmcmllbmRseUN1cnJlbnRBcnRpY2xlTmFtZSwgdGl0bGVUb0VkaXQpKTtcblx0XHR9XG5cdFx0cmV0LnB1c2goXG5cdFx0XHRjaGFuZ2VMaW5rVGFyZ2V0TGluayh7XG5cdFx0XHRcdG5ld1RhcmdldDogbnVsbCxcblx0XHRcdFx0dGV4dDogcG9wdXBTdHJpbmcoJ3JlbW92ZSB0aGlzIGxpbmsnKS5zcGxpdCgnICcpLmpvaW4oJyZuYnNwOycpLFxuXHRcdFx0XHRoaW50OiBwb3B1cFN0cmluZygncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIGRpc2FtYmlnIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnKSxcblx0XHRcdFx0Y2xpY2tCdXR0b246IGdldFZhbHVlT2YoJ3BvcHVwRGFic0F1dG9DbGljaycpLFxuXHRcdFx0XHRvbGRUYXJnZXQsXG5cdFx0XHRcdHN1bW1hcnk6IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cFJtRGFiTGlua1N1bW1hcnknKSwgW2ZyaWVuZGx5Q3VycmVudEFydGljbGVOYW1lXSksXG5cdFx0XHRcdHdhdGNoOiBnZXRWYWx1ZU9mKCdwb3B1cFdhdGNoRGlzYW1iaWdnZWRQYWdlcycpLFxuXHRcdFx0XHR0aXRsZTogdGl0bGVUb0VkaXQsXG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3Qgcm1EdXBlc0Zyb21Tb3J0ZWRMaXN0ID0gKGxpc3QpID0+IHtcblx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0aWYgKHJldC5sZW5ndGggPT09IDAgfHwgZWxlbWVudCAhPT0gcmV0LmF0KC0xKSkge1xuXHRcdFx0XHRyZXQucHVzaChlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgbWFrZUZpeERhYiA9IChkYXRhLCBuYXZwb3ApID0+IHtcblx0XHQvLyBncmFiIHRpdGxlIGZyb20gcGFyZW50IHBvcHVwIGlmIHRoZXJlIGlzIG9uZTsgZGVmYXVsdCBleGlzdHMgaW4gY2hhbmdlTGlua1RhcmdldExpbmtcblx0XHRjb25zdCB0aXRsZVRvRWRpdCA9IG5hdnBvcC5wYXJlbnRQb3B1cCAmJiBuYXZwb3AucGFyZW50UG9wdXAuYXJ0aWNsZS50b1N0cmluZygpO1xuXHRcdGNvbnN0IGxpc3QgPSBsaXN0TGlua3MoZGF0YSwgbmF2cG9wLm9yaWdpbmFsQXJ0aWNsZSwgdGl0bGVUb0VkaXQpO1xuXHRcdGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0bG9nKCdsaXN0TGlua3MgcmV0dXJuZWQgZW1wdHkgbGlzdCcpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBodG1sID0gYDxocj4ke3BvcHVwU3RyaW5nKCdDbGljayB0byBkaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvOicpfTxicj5gO1xuXHRcdGh0bWwgKz0gbGlzdC5qb2luKCcsICcpO1xuXHRcdHJldHVybiBodG1sO1xuXHR9O1xuXHRjb25zdCBtYWtlRml4RGFicyA9ICh3aWtpVGV4dCwgbmF2cG9wKSA9PiB7XG5cdFx0aWYgKFxuXHRcdFx0Z2V0VmFsdWVPZigncG9wdXBGaXhEYWJzJykgJiZcblx0XHRcdGlzRGlzYW1iaWcod2lraVRleHQsIG5hdnBvcC5hcnRpY2xlKSAmJlxuXHRcdFx0VGl0bGUuZnJvbVVSTChsb2NhdGlvbi5ocmVmKS5uYW1lc3BhY2VJZCgpICE9PSBwZy5uc1NwZWNpYWxJZCAmJlxuXHRcdFx0bmF2cG9wLmFydGljbGUudGFsa1BhZ2UoKVxuXHRcdCkge1xuXHRcdFx0c2V0UG9wdXBIVE1MKG1ha2VGaXhEYWIod2lraVRleHQsIG5hdnBvcCksICdwb3B1cEZpeERhYicsIG5hdnBvcC5pZE51bWJlcik7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBwb3B1cFJlZGxpbmtIVE1MID0gKGFydGljbGUpID0+IHtcblx0XHRyZXR1cm4gY2hhbmdlTGlua1RhcmdldExpbmsoe1xuXHRcdFx0bmV3VGFyZ2V0OiBudWxsLFxuXHRcdFx0dGV4dDogcG9wdXBTdHJpbmcoJ3JlbW92ZSB0aGlzIGxpbmsnKS5zcGxpdCgnICcpLmpvaW4oJyZuYnNwOycpLFxuXHRcdFx0aGludDogcG9wdXBTdHJpbmcoJ3JlbW92ZSBhbGwgbGlua3MgdG8gdGhpcyBwYWdlIGZyb20gdGhpcyBhcnRpY2xlJyksXG5cdFx0XHRjbGlja0J1dHRvbjogZ2V0VmFsdWVPZigncG9wdXBSZWRsaW5rQXV0b0NsaWNrJyksXG5cdFx0XHRvbGRUYXJnZXQ6IGFydGljbGUudG9TdHJpbmcoKSxcblx0XHRcdHN1bW1hcnk6IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cFJlZGxpbmtTdW1tYXJ5JyksIFthcnRpY2xlLnRvU3RyaW5nKCldKSxcblx0XHR9KTtcblx0fTtcblx0Ly8gRU5ERklMRTogZGFiLmpzXG5cdC8vIFNUQVJURklMRTogaHRtbG91dHB1dC5qc1xuXHQvLyB0aGlzIGhhcyB0byB1c2UgYSB0aW1lciBsb29wIGFzIHdlIGRvbid0IGtub3cgaWYgdGhlIERPTSBlbGVtZW50IGV4aXN0cyB3aGVuIHdlIHdhbnQgdG8gc2V0IHRoZSB0ZXh0XG5cdGNvbnN0IHNldFBvcHVwSFRNTCA9IGZ1bmN0aW9uIHNldFBvcHVwSFRNTChzdHIsIGVsZW1lbnRJZCwgcG9wdXBJZCwgb25TdWNjZXNzLCBhcHBlbmQpIHtcblx0XHRpZiAocG9wdXBJZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBjb25zb2xlLmVycm9yKCdbUG9wdXBzXSBwb3B1cElkIGlzIG5vdCBkZWZpbmVkIGluIHNldFBvcHVwSFRNTCwgaHRtbD0nK3N0ci5zdWJzdHJpbmcoMCwxMDApKTtcblx0XHRcdHBvcHVwSWQgPSBwZy5pZE51bWJlcjtcblx0XHR9XG5cdFx0Y29uc3QgcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZWxlbWVudElkfSR7cG9wdXBJZH1gKTtcblx0XHRpZiAocG9wdXBFbGVtZW50KSB7XG5cdFx0XHRpZiAoIWFwcGVuZCkge1xuXHRcdFx0XHRwb3B1cEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaXNTdHJpbmcoc3RyKSkge1xuXHRcdFx0XHRwb3B1cEVsZW1lbnQuaW5uZXJIVE1MICs9IHN0cjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBvcHVwRWxlbWVudC5hcHBlbmQoc3RyKTtcblx0XHRcdH1cblx0XHRcdGlmIChvblN1Y2Nlc3MpIHtcblx0XHRcdFx0b25TdWNjZXNzKCk7XG5cdFx0XHR9XG5cdFx0XHRzZXRUaW1lb3V0KGNoZWNrUG9wdXBQb3NpdGlvbiwgMTAwKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHQvLyBjYWxsIHRoaXMgZnVuY3Rpb24gYWdhaW4gaW4gYSBsaXR0bGUgd2hpbGUuLi5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHNldFBvcHVwSFRNTChzdHIsIGVsZW1lbnRJZCwgcG9wdXBJZCwgb25TdWNjZXNzKTtcblx0XHR9LCA2MDApO1xuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCBzZXRQb3B1cFRyYWlsZXIgPSAoc3RyLCBpZCkgPT4ge1xuXHRcdHJldHVybiBzZXRQb3B1cEhUTUwoc3RyLCAncG9wdXBEYXRhJywgaWQpO1xuXHR9O1xuXHQvLyBhcmdzLm5hdnBvcHVwIGlzIG1hbmRhdG9yeVxuXHQvLyBvcHRpb25hbDogYXJncy5yZWRpciwgYXJncy5yZWRpclRhcmdldFxuXHQvLyBGSVhNRTogeWUgZ29kcywgdGhpcyBpcyB1Z2x5IHN0dWZmXG5cdGNvbnN0IGZpbGxFbXB0eVNwYW5zID0gKGFyZ3MpID0+IHtcblx0XHQvLyBpZiByZWRpciBpcyBwcmVzZW50IGFuZCB0cnVlIHRoZW4gcmVkaXJUYXJnZXQgaXMgbWFuZGF0b3J5XG5cdFx0bGV0IHJlZGlyID0gdHJ1ZTtcblx0XHRsZXQgcmNpZDtcblx0XHRpZiAodHlwZW9mIGFyZ3MgIT09ICdvYmplY3QnIHx8IGFyZ3MucmVkaXIgPT09IHVuZGVmaW5lZCB8fCAhYXJncy5yZWRpcikge1xuXHRcdFx0cmVkaXIgPSBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgYSA9IGFyZ3MubmF2cG9wdXAucGFyZW50QW5jaG9yO1xuXHRcdGxldCBhcnRpY2xlO1xuXHRcdGxldCBoaW50O1xuXHRcdGxldCBvbGRpZDtcblx0XHRsZXQgcGFyYW1zID0ge307XG5cdFx0aWYgKHJlZGlyICYmIHR5cGVvZiBhcmdzLnJlZGlyVGFyZ2V0ID09PSB0eXBlb2Yge30pIHtcblx0XHRcdGFydGljbGUgPSBhcmdzLnJlZGlyVGFyZ2V0O1xuXHRcdFx0Ly8gaGludD1hcnRpY2xlLmhpbnRWYWx1ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcnRpY2xlID0gbmV3IFRpdGxlKCkuZnJvbUFuY2hvcihhKTtcblx0XHRcdGhpbnQgPSBhLm9yaWdpbmFsVGl0bGUgfHwgYXJ0aWNsZS5oaW50VmFsdWUoKTtcblx0XHRcdHBhcmFtcyA9IHBhcnNlUGFyYW1zKGEuaHJlZik7XG5cdFx0XHRvbGRpZCA9IGdldFZhbHVlT2YoJ3BvcHVwSGlzdG9yaWNhbExpbmtzJykgPyBwYXJhbXMub2xkaWQgOiBudWxsO1xuXHRcdFx0KHtyY2lkfSA9IHBhcmFtcyk7XG5cdFx0fVxuXHRcdGNvbnN0IHggPSB7XG5cdFx0XHRhcnRpY2xlLFxuXHRcdFx0aGludCxcblx0XHRcdG9sZGlkLFxuXHRcdFx0cmNpZCxcblx0XHRcdG5hdnBvcDogYXJncy5uYXZwb3B1cCxcblx0XHRcdHBhcmFtcyxcblx0XHR9O1xuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHBnLnN0cnVjdHVyZXNbZ2V0VmFsdWVPZigncG9wdXBTdHJ1Y3R1cmUnKV07XG5cdFx0aWYgKHR5cGVvZiBzdHJ1Y3R1cmUgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRzZXRQb3B1cEhUTUwoXG5cdFx0XHRcdCdwb3B1cEVycm9yJyxcblx0XHRcdFx0YFVua25vd24gc3RydWN0dXJlICh0aGlzIHNob3VsZCBuZXZlciBoYXBwZW4pOiAke3BnLm9wdGlvbi5wb3B1cFN0cnVjdHVyZX1gLFxuXHRcdFx0XHRhcmdzLm5hdnBvcHVwLmlkTnVtYmVyXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBzcGFucyA9IGZsYXR0ZW4ocGcubWlzYy5sYXlvdXQpO1xuXHRcdGNvbnN0IG51bXNwYW5zID0gc3BhbnMubGVuZ3RoO1xuXHRcdGNvbnN0IHJlZGlycyA9IHBnLm1pc2MucmVkaXJTcGFucztcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG51bXNwYW5zOyArK2kpIHtcblx0XHRcdGNvbnN0IGZvdW5kID0gcmVkaXJzICYmIHJlZGlycy5pbmNsdWRlcyhzcGFuc1tpXSk7XG5cdFx0XHQvLyBsb2coJ3JlZGlyPScgKyByZWRpciArICcsIGZvdW5kPScgKyBmb3VuZCArICcsIHNwYW5zW2ldPScgKyBzcGFuc1tpXSk7XG5cdFx0XHRpZiAoKGZvdW5kICYmICFyZWRpcikgfHwgKCFmb3VuZCAmJiByZWRpcikpIHtcblx0XHRcdFx0Ly8gbG9nKCdza2lwcGluZyB0aGlzIHNldCBvZiB0aGUgbG9vcCcpO1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHN0cnVjdHVyZWZuID0gc3RydWN0dXJlW3NwYW5zW2ldXTtcblx0XHRcdGlmIChzdHJ1Y3R1cmVmbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIG5vdGhpbmcgdG8gZG8gZm9yIHRoaXMgc3RydWN0dXJlIHBhcnRcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRsZXQgc2V0Zm4gPSBzZXRQb3B1cEhUTUw7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGdldFZhbHVlT2YoJ3BvcHVwQWN0aXZlTmF2bGlua3MnKSAmJlxuXHRcdFx0XHQoc3BhbnNbaV0uaW5kZXhPZigncG9wdXBUb3BMaW5rcycpID09PSAwIHx8IHNwYW5zW2ldLmluZGV4T2YoJ3BvcHVwUmVkaXJUb3BMaW5rcycpID09PSAwKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldGZuID0gc2V0UG9wdXBUaXBzQW5kSFRNTDtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAodHlwZW9mIHN0cnVjdHVyZWZuKSB7XG5cdFx0XHRcdGNhc2UgJ2Z1bmN0aW9uJzpcblx0XHRcdFx0XHRsb2coYHJ1bm5pbmcgJHtzcGFuc1tpXX0oe1xuXHRcdFx0XHRcdFx0YXJ0aWNsZToke3guYXJ0aWNsZX0sIGhpbnQ6JHt4LmhpbnR9LCBvbGRpZDogJHt4Lm9sZGlkfX0pYCk7XG5cdFx0XHRcdFx0c2V0Zm4oc3RydWN0dXJlZm4oeCksIHNwYW5zW2ldLCBhcmdzLm5hdnBvcHVwLmlkTnVtYmVyKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRcdFx0XHRzZXRmbihzdHJ1Y3R1cmVmbiwgc3BhbnNbaV0sIGFyZ3MubmF2cG9wdXAuaWROdW1iZXIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGVycmxvZyhgdW5rbm93biB0aGluZyB3aXRoIGxhYmVsICR7c3BhbnNbaV19IChzcGFuIGluZGV4IHdhcyAke2l9KWApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Ly8gZmxhdHRlbiBhbiBhcnJheVxuXHRjb25zdCBmbGF0dGVuID0gZnVuY3Rpb24gZmxhdHRlbihsaXN0LCBzdGFydCkge1xuXHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRzdGFydCA9IDA7XG5cdFx0fVxuXHRcdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmICh0eXBlb2YgbGlzdFtpXSA9PT0gdHlwZW9mIFtdKSB7XG5cdFx0XHRcdHJldHVybiBbLi4ucmV0LCAuLi5mbGF0dGVuKGxpc3RbaV0pLCAuLi5mbGF0dGVuKGxpc3QsIGkgKyAxKV07XG5cdFx0XHR9XG5cdFx0XHRyZXQucHVzaChsaXN0W2ldKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Ly8gR2VuZXJhdGUgaHRtbCBmb3Igd2hvbGUgcG9wdXBcblx0Y29uc3QgcG9wdXBIVE1MID0gZnVuY3Rpb24gcG9wdXBIVE1MKGEpIHtcblx0XHRnZXRWYWx1ZU9mKCdwb3B1cFN0cnVjdHVyZScpO1xuXHRcdGNvbnN0IHN0cnVjdHVyZSA9IHBnLnN0cnVjdHVyZXNbcGcub3B0aW9uLnBvcHVwU3RydWN0dXJlXTtcblx0XHRpZiAodHlwZW9mIHN0cnVjdHVyZSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdC8vIHJldHVybiAnVW5rbm93biBzdHJ1Y3R1cmU6ICcrcGcub3B0aW9uLnBvcHVwU3RydWN0dXJlO1xuXHRcdFx0Ly8gb3ZlcnJpZGUgdXNlciBjaG9pY2Vcblx0XHRcdHBnLm9wdGlvbi5wb3B1cFN0cnVjdHVyZSA9IHBnLm9wdGlvbkRlZmF1bHQucG9wdXBTdHJ1Y3R1cmU7XG5cdFx0XHRyZXR1cm4gcG9wdXBIVE1MKGEpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIHN0cnVjdHVyZS5wb3B1cExheW91dCAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuICdCYWQgbGF5b3V0Jztcblx0XHR9XG5cdFx0cGcubWlzYy5sYXlvdXQgPSBzdHJ1Y3R1cmUucG9wdXBMYXlvdXQoKTtcblx0XHRwZy5taXNjLnJlZGlyU3BhbnMgPSB0eXBlb2Ygc3RydWN0dXJlLnBvcHVwUmVkaXJTcGFucyA9PT0gJ2Z1bmN0aW9uJyA/IHN0cnVjdHVyZS5wb3B1cFJlZGlyU3BhbnMoKSA6IFtdO1xuXHRcdHJldHVybiBtYWtlRW1wdHlTcGFucyhwZy5taXNjLmxheW91dCwgYS5uYXZwb3B1cCk7XG5cdH07XG5cdGNvbnN0IG1ha2VFbXB0eVNwYW5zID0gZnVuY3Rpb24gbWFrZUVtcHR5U3BhbnMobGlzdCwgbmF2cG9wKSB7XG5cdFx0bGV0IHJldCA9ICcnO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBsaXN0KSB7XG5cdFx0XHRpZiAodHlwZW9mIGVsZW1lbnQgPT09IHR5cGVvZiAnJykge1xuXHRcdFx0XHRyZXQgKz0gZW1wdHlTcGFuSFRNTChlbGVtZW50LCBuYXZwb3AuaWROdW1iZXIsICdkaXYnKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09IHR5cGVvZiBbXSAmJiBlbGVtZW50Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cmV0ID0gcmV0LnNwbGl0KC8oPFxcL1tePl0qPz4kKS8pLmpvaW4obWFrZUVtcHR5U3BhbnMoZWxlbWVudCwgbmF2cG9wKSk7XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSB0eXBlb2Yge30gJiYgZWxlbWVudC5ub2RlVHlwZSkge1xuXHRcdFx0XHRyZXQgKz0gZW1wdHlTcGFuSFRNTChlbGVtZW50Lm5hbWUsIG5hdnBvcC5pZE51bWJlciwgZWxlbWVudC5ub2RlVHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IGVtcHR5U3BhbkhUTUwgPSBmdW5jdGlvbiBlbXB0eVNwYW5IVE1MKG5hbWUsIGlkLCB0YWcsIGNsYXNzbmFtZSkge1xuXHRcdHRhZyB8fD0gJ3NwYW4nO1xuXHRcdGlmICghY2xhc3NuYW1lKSB7XG5cdFx0XHRjbGFzc25hbWUgPSBlbXB0eVNwYW5IVE1MLmNsYXNzQWxpYXNlc1tuYW1lXTtcblx0XHR9XG5cdFx0Y2xhc3NuYW1lIHx8PSBuYW1lO1xuXHRcdGlmIChuYW1lID09PSBnZXRWYWx1ZU9mKCdwb3B1cERyYWdIYW5kbGUnKSkge1xuXHRcdFx0Y2xhc3NuYW1lICs9ICcgcG9wdXBEcmFnSGFuZGxlJztcblx0XHR9XG5cdFx0cmV0dXJuIHNpbXBsZVByaW50ZignPCVzIGlkPVwiJXNcIiBjbGFzcz1cIiVzXCI+PC8lcz4nLCBbdGFnLCBuYW1lICsgaWQsIGNsYXNzbmFtZSwgdGFnXSk7XG5cdH07XG5cdGVtcHR5U3BhbkhUTUwuY2xhc3NBbGlhc2VzID0ge1xuXHRcdHBvcHVwU2Vjb25kUHJldmlldzogJ3BvcHVwUHJldmlldycsXG5cdH07XG5cdC8vIGdlbmVyYXRlIGh0bWwgZm9yIHBvcHVwIGltYWdlXG5cdC8vIDxhIGlkPVwicG9wdXBJbWFnZUxpbmtuXCI+PGltZyBpZD1cInBvcHVwSW1hZ2VuXCI+XG5cdC8vIHdoZXJlIG49aWROdW1iZXJcblx0Y29uc3QgaW1hZ2VIVE1MID0gKF9hcnRpY2xlLCBpZE51bWJlcikgPT4ge1xuXHRcdHJldHVybiBzaW1wbGVQcmludGYoXG5cdFx0XHQnPGEgaWQ9XCJwb3B1cEltYWdlTGluayQxXCI+JyArXG5cdFx0XHRcdCc8aW1nIGFsaWduPVwicmlnaHRcIiB2YWxpZ249XCJ0b3BcIiBpZD1cInBvcHVwSW1nJDFcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPjwvaW1nPicgK1xuXHRcdFx0XHQnPC9hPicsXG5cdFx0XHRbaWROdW1iZXJdXG5cdFx0KTtcblx0fTtcblx0Y29uc3QgcG9wVGlwc1Nvb25GbiA9IChpZCwgd2hlbiwgcG9wRGF0YSkgPT4ge1xuXHRcdGlmICghd2hlbikge1xuXHRcdFx0d2hlbiA9IDI1MDtcblx0XHR9XG5cdFx0Y29uc3QgcG9wVGlwcyA9ICgpID0+IHtcblx0XHRcdHNldHVwVG9vbHRpcHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCksIGZhbHNlLCB0cnVlLCBwb3BEYXRhKTtcblx0XHR9O1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRzZXRUaW1lb3V0KHBvcFRpcHMsIHdoZW4sIHBvcERhdGEpO1xuXHRcdH07XG5cdH07XG5cdGNvbnN0IHNldFBvcHVwVGlwc0FuZEhUTUwgPSAoaHRtbCwgZGl2bmFtZSwgaWRudW1iZXIsIHBvcERhdGEpID0+IHtcblx0XHRzZXRQb3B1cEhUTUwoXG5cdFx0XHRodG1sLFxuXHRcdFx0ZGl2bmFtZSxcblx0XHRcdGlkbnVtYmVyLFxuXHRcdFx0Z2V0VmFsdWVPZigncG9wdXBTdWJwb3B1cHMnKSA/IHBvcFRpcHNTb29uRm4oZGl2bmFtZSArIGlkbnVtYmVyLCBudWxsLCBwb3BEYXRhKSA6IG51bGxcblx0XHQpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBodG1sb3V0cHV0LmpzXG5cdC8vIFNUQVJURklMRTogbW91c2VvdXQuanNcblx0Ly8gZnV6enkgY2hlY2tzXG5cdGNvbnN0IGZ1enp5Q3Vyc29yT2ZmTWVudXMgPSAoX3gsIF95LCBfZnV6eiwgcGFyZW50KSA9PiB7XG5cdFx0aWYgKCFwYXJlbnQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCB1bHMgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgndWwnKTtcblx0XHRmb3IgKGNvbnN0IHVsIG9mIHVscykge1xuXHRcdFx0aWYgKHVsLmNsYXNzTmFtZSA9PT0gJ3BvcHVwX21lbnUnICYmIHVsLm9mZnNldFdpZHRoID4gMCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9IC8vIGVsc2UgeyBkb2N1bWVudC50aXRsZSs9Jy4nOyB9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXHRjb25zdCBjaGVja1BvcHVwUG9zaXRpb24gPSAoKSA9PiB7XG5cdFx0Ly8gc3RvcCB0aGUgcG9wdXAgcnVubmluZyBvZmYgdGhlIHJpZ2h0IG9mIHRoZSBzY3JlZW5cblx0XHQvLyBGSVhNRSBhdm9pZCBwZy5jdXJyZW50Lmxpbmtcblx0XHRpZiAocGcuY3VycmVudC5saW5rICYmIHBnLmN1cnJlbnQubGluay5uYXZwb3B1cCkge1xuXHRcdFx0cGcuY3VycmVudC5saW5rLm5hdnBvcHVwLmxpbWl0SG9yaXpvbnRhbFBvc2l0aW9uKCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBtb3VzZU91dFdpa2lMaW5rID0gZnVuY3Rpb24gbW91c2VPdXRXaWtpTGluaygpIHtcblx0XHQvLyBjb25zb2xlICgnbW91c2VPdXRXaWtpTGluaycpO1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHJlbW92ZU1vZGlmaWVyS2V5TGlzdGVuZXIoc2VsZik7XG5cdFx0aWYgKHNlbGYubmF2cG9wdXAgPT09IG51bGwgfHwgc2VsZi5uYXZwb3B1cCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghc2VsZi5uYXZwb3B1cC5pc1Zpc2libGUoKSkge1xuXHRcdFx0c2VsZi5uYXZwb3B1cC5iYW5pc2goKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmVzdG9yZVRpdGxlKHNlbGYpO1xuXHRcdE5hdnBvcHVwLnRyYWNrZXIuYWRkSG9vayhwb3NDaGVja2VySG9vayhzZWxmLm5hdnBvcHVwKSk7XG5cdH07XG5cdGNvbnN0IHBvc0NoZWNrZXJIb29rID0gKG5hdnBvcCkgPT4ge1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRpZiAoIW5hdnBvcC5pc1Zpc2libGUoKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLyogcmVtb3ZlIHRoaXMgaG9vayAqL1xuXHRcdFx0fVxuXHRcdFx0aWYgKE5hdnBvcHVwLnRyYWNrZXIuZGlydHkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qge3h9ID0gTmF2cG9wdXAudHJhY2tlcjtcblx0XHRcdGNvbnN0IHt5fSA9IE5hdnBvcHVwLnRyYWNrZXI7XG5cdFx0XHRjb25zdCBtb3VzZU92ZXJOYXZwb3AgPVxuXHRcdFx0XHRuYXZwb3AuaXNXaXRoaW4oeCwgeSwgbmF2cG9wLmZ1enosIG5hdnBvcC5tYWluRGl2KSB8fFxuXHRcdFx0XHQhZnV6enlDdXJzb3JPZmZNZW51cyh4LCB5LCBuYXZwb3AuZnV6eiwgbmF2cG9wLm1haW5EaXYpO1xuXHRcdFx0Ly8gRklYTUUgaXQnZCBiZSBwcmV0dGllciB0byBkbyB0aGlzIGludGVybmFsIHRvIHRoZSBOYXZwb3B1cCBvYmplY3RzXG5cdFx0XHRsZXQgdCA9IGdldFZhbHVlT2YoJ3BvcHVwSGlkZURlbGF5Jyk7XG5cdFx0XHRpZiAodCkge1xuXHRcdFx0XHR0ICo9IDEwMDA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXQpIHtcblx0XHRcdFx0aWYgKCFtb3VzZU92ZXJOYXZwb3ApIHtcblx0XHRcdFx0XHRpZiAobmF2cG9wLnBhcmVudEFuY2hvcikge1xuXHRcdFx0XHRcdFx0cmVzdG9yZVRpdGxlKG5hdnBvcC5wYXJlbnRBbmNob3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuYXZwb3AuYmFuaXNoKCk7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7IC8qIHJlbW92ZSB0aGlzIGhvb2sgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyB3ZSBoYXZlIGEgaGlkZSBkZWxheSBzZXRcblx0XHRcdGNvbnN0IGQgPSBEYXRlLm5vdygpO1xuXHRcdFx0aWYgKCFuYXZwb3AubW91c2VMZWF2aW5nVGltZSkge1xuXHRcdFx0XHRuYXZwb3AubW91c2VMZWF2aW5nVGltZSA9IGQ7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChtb3VzZU92ZXJOYXZwb3ApIHtcblx0XHRcdFx0bmF2cG9wLm1vdXNlTGVhdmluZ1RpbWUgPSBudWxsO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZCAtIG5hdnBvcC5tb3VzZUxlYXZpbmdUaW1lID4gdCkge1xuXHRcdFx0XHRuYXZwb3AubW91c2VMZWF2aW5nVGltZSA9IG51bGw7XG5cdFx0XHRcdG5hdnBvcC5iYW5pc2goKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7IC8qIHJlbW92ZSB0aGlzIGhvb2sgKi9cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBydW5TdG9wUG9wdXBUaW1lciA9IChuYXZwb3ApID0+IHtcblx0XHQvLyBhdCB0aGlzIHBvaW50LCB3ZSBzaG91bGQgaGF2ZSBsZWZ0IHRoZSBsaW5rIGJ1dCByZW1haW4gd2l0aGluIHRoZSBwb3B1cFxuXHRcdC8vIHNvIHdlIGNhbGwgdGhpcyBmdW5jdGlvbiBhZ2FpbiB1bnRpbCB3ZSBsZWF2ZSB0aGUgcG9wdXAuXG5cdFx0aWYgKCFuYXZwb3Auc3RvcFBvcHVwVGltZXIpIHtcblx0XHRcdG5hdnBvcC5zdG9wUG9wdXBUaW1lciA9IHNldEludGVydmFsKHBvc0NoZWNrZXJIb29rKG5hdnBvcCksIDUwMCk7XG5cdFx0XHRuYXZwb3AuYWRkSG9vayhcblx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwobmF2cG9wLnN0b3BQb3B1cFRpbWVyKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0J2hpZGUnLFxuXHRcdFx0XHQnYmVmb3JlJ1xuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cdC8vIEVOREZJTEU6IG1vdXNlb3V0LmpzXG5cdC8vIFNUQVJURklMRTogcHJldmlld21ha2VyLmpzXG5cdC8qKlxuXHQgKiBAZmlsZW92ZXJ2aWV3XG5cdCAqIERlZmluZXMgdGhlIHtAc291cmNlIFByZXZpZXdtYWtlcn0gb2JqZWN0LCB3aGljaCBnZW5lcmF0ZXMgc2hvcnQgcHJldmlld3MgZnJvbSB3aWtpIG1hcmt1cC5cblx0ICovXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IFByZXZpZXdtYWtlclxuXHQgKlxuXHQgKiBAY29uc3RydWN0b3Jcblx0ICogQGNsYXNzIFRoZSBQcmV2aWV3bWFrZXIgY2xhc3MuIFVzZSBhbiBpbnN0YW5jZSBvZiB0aGlzIHRvIGdlbmVyYXRlIHNob3J0IHByZXZpZXdzIGZyb20gV2lraXRleHQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpVGV4dCBUaGUgV2lraXRleHQgc291cmNlIG9mIHRoZSBwYWdlIHdlIHdpc2ggdG8gcHJldmlldy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmwgVGhlIHVybCB3ZSBzaG91bGQgcHJlcGVuZCB3aGVuIGNyZWF0aW5nIHJlbGF0aXZlIHVybHMuXG5cdCAqIEBwYXJhbSB7TmF2cG9wdXB9IG93bmVyIFRoZSBuYXZwb3AgYXNzb2NpYXRlZCB0byB0aGlzIHByZXZpZXcgZ2VuZXJhdG9yXG5cdCAqL1xuXHRjbGFzcyBQcmV2aWV3bWFrZXIge1xuXHRcdGNvbnN0cnVjdG9yKHdpa2lUZXh0LCBiYXNlVXJsLCBvd25lcikge1xuXHRcdFx0LyoqIFRoZSB3aWtpdGV4dCB3aGljaCBpcyBtYW5pcHVsYXRlZCB0byBnZW5lcmF0ZSB0aGUgcHJldmlldy4gKi9cblx0XHRcdHRoaXMub3JpZ2luYWxEYXRhID0gd2lraVRleHQ7XG5cdFx0XHR0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xuXHRcdFx0dGhpcy5vd25lciA9IG93bmVyO1xuXHRcdFx0dGhpcy5tYXhDaGFyYWN0ZXJzID0gZ2V0VmFsdWVPZigncG9wdXBNYXhQcmV2aWV3Q2hhcmFjdGVycycpO1xuXHRcdFx0dGhpcy5tYXhTZW50ZW5jZXMgPSBnZXRWYWx1ZU9mKCdwb3B1cE1heFByZXZpZXdTZW50ZW5jZXMnKTtcblx0XHRcdHRoaXMuc2V0RGF0YSgpO1xuXHRcdH1cblx0XHRzZXREYXRhKCkge1xuXHRcdFx0Y29uc3QgbWF4U2l6ZSA9IE1hdGgubWF4KDFlNCwgMiAqIHRoaXMubWF4Q2hhcmFjdGVycyk7XG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLm9yaWdpbmFsRGF0YS5zbGljZSgwLCBNYXRoLm1heCgwLCBtYXhTaXplKSk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBIVE1MIGNvbW1lbnRzXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxDb21tZW50cygpIHtcblx0XHRcdC8vIHRoaXMgYWxzbyBraWxscyBvbmUgdHJhaWxpbmcgbmV3bGluZSwgZWcgW1tkaWFteW9dXVxuXHRcdFx0dGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL148IS0tW14kXSo/LS0+XFxufFxcbjwhLS1bXiRdKj8tLT4oPz1cXG4pfDwhLS1bXiRdKj8tLT4vZywgJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxEaXZzKCkge1xuXHRcdFx0Ly8gc2F5IGdvb2RieWUsIGRpdnMgKGNhbiBiZSBuZXN0ZWQsIHNvIHVzZSAqIG5vdCAqPylcblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC88ICpkaXZbXj5dKiAqPltcXFNcXHNdKj88ICpcXC8gKmRpdiAqPi9naSwgJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxHYWxsZXJpZXMoKSB7XG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvPCAqZ2FsbGVyeVtePl0qICo+W1xcU1xcc10qPzwgKlxcLyAqZ2FsbGVyeSAqPi9naSwgJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gb3BlbmluZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBjbG9zaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHN1Ym9wZW5pbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gc3ViY2xvc2luZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSByZXBsXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsKG9wZW5pbmcsIGNsb3NpbmcsIHN1Ym9wZW5pbmcsIHN1YmNsb3NpbmcsIHJlcGwpIHtcblx0XHRcdGxldCBvbGRrID0gdGhpcy5kYXRhO1xuXHRcdFx0bGV0IGsgPSBQcmV2aWV3bWFrZXIua2lsbFN0dWZmKHRoaXMuZGF0YSwgb3BlbmluZywgY2xvc2luZywgc3Vib3BlbmluZywgc3ViY2xvc2luZywgcmVwbCk7XG5cdFx0XHR3aGlsZSAoay5sZW5ndGggPCBvbGRrLmxlbmd0aCkge1xuXHRcdFx0XHRvbGRrID0gaztcblx0XHRcdFx0ayA9IFByZXZpZXdtYWtlci5raWxsU3R1ZmYoaywgb3BlbmluZywgY2xvc2luZywgc3Vib3BlbmluZywgc3ViY2xvc2luZywgcmVwbCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRhdGEgPSBrO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gdHh0XG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IG9wZW5pbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gY2xvc2luZ1xuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBzdWJvcGVuaW5nXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IHN1YmNsb3Npbmdcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gcmVwbFxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0c3RhdGljIGtpbGxTdHVmZih0eHQsIG9wZW5pbmcsIGNsb3NpbmcsIHN1Ym9wZW5pbmcsIHN1YmNsb3NpbmcsIHJlcGwpIHtcblx0XHRcdGNvbnN0IG9wID0gUHJldmlld21ha2VyLm1ha2VSZWdleHAob3BlbmluZyk7XG5cdFx0XHRjb25zdCBjbCA9IFByZXZpZXdtYWtlci5tYWtlUmVnZXhwKGNsb3NpbmcsICdeJyk7XG5cdFx0XHRjb25zdCBzYiA9IHN1Ym9wZW5pbmcgPyBQcmV2aWV3bWFrZXIubWFrZVJlZ2V4cChzdWJvcGVuaW5nLCAnXicpIDogbnVsbDtcblx0XHRcdGNvbnN0IHNjID0gc3ViY2xvc2luZyA/IFByZXZpZXdtYWtlci5tYWtlUmVnZXhwKHN1YmNsb3NpbmcsICdeJykgOiBjbDtcblx0XHRcdGlmICghb3AgfHwgIWNsKSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KCdOYXZpZ2F0aW9uIFBvcHVwcyBlcnJvcjogb3Agb3IgY2wgaXMgbnVsbCEgc29tZXRoaW5nIGlzIHdyb25nLicsIHtcblx0XHRcdFx0XHR0YWc6ICdwb3B1cHMnLFxuXHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW9wLnRlc3QodHh0KSkge1xuXHRcdFx0XHRyZXR1cm4gdHh0O1xuXHRcdFx0fVxuXHRcdFx0bGV0IHJldCA9ICcnO1xuXHRcdFx0Y29uc3Qgb3BSZXN1bHQgPSBvcC5leGVjKHR4dCk7XG5cdFx0XHRyZXQgPSB0eHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgb3BSZXN1bHQuaW5kZXgpKTtcblx0XHRcdHR4dCA9IHR4dC5zbGljZShNYXRoLm1heCgwLCBvcFJlc3VsdC5pbmRleCArIG9wUmVzdWx0WzBdLmxlbmd0aCkpO1xuXHRcdFx0bGV0IGRlcHRoID0gMTtcblx0XHRcdHdoaWxlICh0eHQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRsZXQgcmVtb3ZhbCA9IDA7XG5cdFx0XHRcdGlmIChkZXB0aCA9PT0gMSAmJiBjbC50ZXN0KHR4dCkpIHtcblx0XHRcdFx0XHRkZXB0aC0tO1xuXHRcdFx0XHRcdHJlbW92YWwgPSBjbC5leGVjKHR4dClbMF0ubGVuZ3RoO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGRlcHRoID4gMSAmJiBzYy50ZXN0KHR4dCkpIHtcblx0XHRcdFx0XHRkZXB0aC0tO1xuXHRcdFx0XHRcdHJlbW92YWwgPSBzYy5leGVjKHR4dClbMF0ubGVuZ3RoO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNiICYmIHNiLnRlc3QodHh0KSkge1xuXHRcdFx0XHRcdGRlcHRoKys7XG5cdFx0XHRcdFx0cmVtb3ZhbCA9IHNiLmV4ZWModHh0KVswXS5sZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFyZW1vdmFsKSB7XG5cdFx0XHRcdFx0cmVtb3ZhbCA9IDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0dHh0ID0gdHh0LnNsaWNlKE1hdGgubWF4KDAsIHJlbW92YWwpKTtcblx0XHRcdFx0aWYgKGRlcHRoID09PSAwKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQgKyAocmVwbCB8fCAnJykgKyB0eHQ7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0geFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfFJlZ0V4cH0gcHJlZml4XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBzdWZmaXhcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHN0YXRpYyBtYWtlUmVnZXhwKHgsIHByZWZpeCwgc3VmZml4KSB7XG5cdFx0XHRwcmVmaXggfHw9ICcnO1xuXHRcdFx0c3VmZml4IHx8PSAnJztcblx0XHRcdGxldCByZVN0ciA9ICcnO1xuXHRcdFx0bGV0IGZsYWdzID0gJyc7XG5cdFx0XHRpZiAoaXNTdHJpbmcoeCkpIHtcblx0XHRcdFx0cmVTdHIgPSBwcmVmaXggKyBsaXRlcmFsaXplUmVnZXgoeCkgKyBzdWZmaXg7XG5cdFx0XHR9IGVsc2UgaWYgKGlzUmVnRXhwKHgpKSB7XG5cdFx0XHRcdGxldCBzID0geC50b1N0cmluZygpLnNsaWNlKDEpO1xuXHRcdFx0XHRjb25zdCBzcCA9IHMuc3BsaXQoJy8nKTtcblx0XHRcdFx0ZmxhZ3MgPSBzcC5hdCgtMSk7XG5cdFx0XHRcdHNwW3NwLmxlbmd0aCAtIDFdID0gJyc7XG5cdFx0XHRcdHMgPSBzcC5qb2luKCcvJyk7XG5cdFx0XHRcdHMgPSBzLnNsaWNlKDAsIE1hdGgubWF4KDAsIHMubGVuZ3RoIC0gMSkpO1xuXHRcdFx0XHRyZVN0ciA9IHByZWZpeCArIHMgKyBzdWZmaXg7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2coJ21ha2VSZWdleHAgZmFpbGVkJyk7XG5cdFx0XHR9XG5cdFx0XHRsb2coYG1ha2VSZWdleHA6IGdvdCByZVN0cj0ke3JlU3RyfSwgZmxhZ3M9JHtmbGFnc31gKTtcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKHJlU3RyLCBmbGFncyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbEJveFRlbXBsYXRlcygpIHtcblx0XHRcdC8vIHRheG9ib3ggcmVtb3ZhbC4uLiBpbiBmYWN0LCB0aGVyZSdzIGEgc2F1ZGlwcmluY2Vib3hfYmVnaW4sIHNvIGxldCdzIGJlIG1vcmUgZ2VuZXJhbFxuXHRcdFx0Ly8gYWxzbywgaGF2ZSBmbG9hdF9iZWdpbiwgLi4uIGZsb2F0X2VuZFxuXHRcdFx0dGhpcy5raWxsKC97e1teXFxze3x9XSo/KGZsb2F0fGJveClbIF9dKGJlZ2lufHN0YXJ0KS9pLCAvfX1cXHMqLywgJ3t7Jyk7XG5cdFx0XHQvLyBpbmZvYm94ZXMgZXRjXG5cdFx0XHQvLyBmcm9tIFp5eHc6IGtpbGwgZnJhbWVzIHRvb1xuXHRcdFx0dGhpcy5raWxsKC97e1teXFxze3x9XSo/KGluZm9ib3h8ZWxlbWVudGJveHxmcmFtZSlbIF9dL2ksIC99fVxccyovLCAne3snKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRraWxsVGVtcGxhdGVzKCkge1xuXHRcdFx0dGhpcy5raWxsKCd7eycsICd9fScsICd7JywgJ30nLCAnICcpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxUYWJsZXMoKSB7XG5cdFx0XHQvLyB0YWJsZXMgYXJlIGJhZCwgdG9vXG5cdFx0XHQvLyB0aGlzIGNhbiBiZSBzbG93LCBidXQgaXQncyBhbiBpbnByb3ZlbWVudCBvdmVyIGEgYnJvd3NlciBoYW5nXG5cdFx0XHQvLyB0b3J0dXJlIHRlc3Q6IFtbQ29tcGFyaXNvbl9vZl9JbnRlbF9DZW50cmFsX1Byb2Nlc3NpbmdfVW5pdHNdXVxuXHRcdFx0dGhpcy5raWxsKCd7fCcsIC9cXHx9XFxzKi8sICd7fCcpO1xuXHRcdFx0dGhpcy5raWxsKC88dGFibGUuKj8+L2ksIC88XFwvdGFibGUuKj8+L2ksIC88dGFibGUuKj8+L2kpO1xuXHRcdFx0Ly8gcmVtb3ZlIGxpbmVzIHN0YXJ0aW5nIHdpdGggYSBwaXBlIGZvciB0aGUgaGVsbCBvZiBpdCAoPylcblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eXFx8LiokL2dtLCAnJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbEltYWdlcygpIHtcblx0XHRcdGNvbnN0IGZvcmJpZGRlbk5hbWVzcGFjZUFsaWFzZXMgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgW2xvY2FsaXplZE5hbWVzcGFjZUxjLCBuYW1lc3BhY2VJZF0gb2YgT2JqZWN0LmVudHJpZXMobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VJZHMnKSkpIHtcblx0XHRcdFx0aWYgKG5hbWVzcGFjZUlkICE9PSBwZy5uc0ltYWdlSWQgJiYgbmFtZXNwYWNlSWQgIT09IHBnLm5zQ2F0ZWdvcnlJZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3JiaWRkZW5OYW1lc3BhY2VBbGlhc2VzLnB1c2gobG9jYWxpemVkTmFtZXNwYWNlTGMuc3BsaXQoJyAnKS5qb2luKCdbIF9dJykpOyAvLyB0b2RvOiBlc2NhcGUgcmVnZXhwIGZyYWdtZW50cyFcblx0XHRcdH1cblx0XHRcdC8vIGltYWdlcyBhbmQgY2F0ZWdvcmllcyBhcmUgYSBub25vXG5cdFx0XHR0aGlzLmtpbGwobmV3IFJlZ0V4cChgW1tdW1tdXFxcXHMqKCR7Zm9yYmlkZGVuTmFtZXNwYWNlQWxpYXNlcy5qb2luKCd8Jyl9KVxcXFxzKjpgLCAnaScpLCAvXV1cXHMqLywgJ1snLCAnXScpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxIVE1MKCkge1xuXHRcdFx0Ly8ga2lsbCA8cmVmIC4uLj4uLi48L3JlZj5cblx0XHRcdHRoaXMua2lsbCgvPHJlZlxcYlteLz5dKj8+L2ksIC88XFwvcmVmPi9pKTtcblx0XHRcdC8vIGxldCdzIGFsc28gZGVsZXRlIGVudGlyZSBsaW5lcyBzdGFydGluZyB3aXRoIDwuIGl0J3Mgd29ydGggYSB0cnkuXG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvKF58XFxuKSAqPC4qL2csICdcXG4nKTtcblx0XHRcdC8vIGFuZCB0aG9zZSBwZXNreSBodG1sIHRhZ3MsIGJ1dCBub3Qgbm93aWtpIG9yIGJsb2NrcXVvdGUgdGFnc1xuXHRcdFx0Y29uc3Qgc3BsaXR0ZWQgPSB0aGlzLmRhdGEuc3BsaXQoLyg8W1xcV1xcd10qPyg/Oj58JHwoPz08KSkpLyk7XG5cdFx0XHRjb25zdCBsZW4gPSBzcGxpdHRlZC5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IGxlbjsgaSArPSAyKSB7XG5cdFx0XHRcdHN3aXRjaCAoc3BsaXR0ZWRbaV0pIHtcblx0XHRcdFx0XHRjYXNlICc8bm8nLmNvbmNhdCgnd2lraScsICc+Jyk6XG5cdFx0XHRcdFx0Y2FzZSAnPC9ubycuY29uY2F0KCd3aWtpJywgJz4nKTpcblx0XHRcdFx0XHRjYXNlICc8YmxvY2snLmNvbmNhdCgncXVvdGUnLCAnPicpOlxuXHRcdFx0XHRcdGNhc2UgJzwvYmxvY2snLmNvbmNhdCgncXVvdGUnLCAnPicpOlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHNwbGl0dGVkW2ldID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMuZGF0YSA9IHNwbGl0dGVkLmpvaW4oJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxDaHVua3MoKSB7XG5cdFx0XHQvLyBoZXVyaXN0aWNzIGFsZXJ0XG5cdFx0XHQvLyBjaHVua3Mgb2YgaXRhbGljIHRleHQ/IHlvdSBjcmF6eSwgbWFuP1xuXHRcdFx0Y29uc3QgaXRhbGljQ2h1bmtSZWdleCA9IC8oKF58XFxuKVxccyo6KlxccyonJ1teJ10oW14nXXwnJyd8J1teJ10pezIwfSgufFxcblteXFxuXSkqJydbXFxzIS4/XSpcXG4pKy9nO1xuXHRcdFx0Ly8ga2VlcCBzdHVmZiBzZXBhcmF0ZWQsIHRob3VnaCwgc28gc3RpY2sgaW4gXFxuIChmaXhlcyBbW1VuaW9uIEphY2tdXT9cblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKGl0YWxpY0NodW5rUmVnZXgsICdcXG4nKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRtb3B1cCgpIHtcblx0XHRcdC8vIHdlIHNpbXBseSAqY2FuJ3QqIGJlIGRvaW5nIHdpdGggaG9yaXpvbnRhbCBydWxlcyByaWdodCBub3dcblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eLXs0LH0vZ20sICcnKTtcblx0XHRcdC8vIG5vIGluZGVudGVkIGxpbmVzXG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvKF58XFxuKSAqOlteXFxuXSovZywgJycpO1xuXHRcdFx0Ly8gcmVwbGFjZSBfX1RPQ19fLCBfX05PVE9DX18gYW5kIHdoYXRldmVyIGVsc2UgdGhlcmUgaXNcblx0XHRcdC8vIHRoaXMnbGwgcHJvYmFibHkgZG9cblx0XHRcdHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9eX19bX2Etel0qX18gKiQvZ2ltLCAnJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0Zmlyc3RCaXQoKSB7XG5cdFx0XHQvLyBkb250J3QgYmUgZ2l2aW4nIG1lIG5vIHN1YnNlcXVlbnQgcGFyYWdyYXBocywgeW91IGhlYXIgbWU/XG5cdFx0XHQvLyAvIGZpcnN0IHdlIFwibm9ybWFsaXplXCIgc2VjdGlvbiBoZWFkaW5ncywgcmVtb3Zpbmcgd2hpdGVzcGFjZSBhZnRlciwgYWRkaW5nIGJlZm9yZVxuXHRcdFx0bGV0IGQgPSB0aGlzLmRhdGE7XG5cdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBQcmV2aWV3Q3V0SGVhZGluZ3MnKSkge1xuXHRcdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXFxzKig9PStbXj1dKj09KylcXHMqL2csICdcXG5cXG4kMSAnKTtcblx0XHRcdFx0Ly8gLyB0aGVuIHdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBwYXJhZ3JhcGggYnJlYWtzIHdob3NlIHRleHQgZW5kcyBiYWRseVxuXHRcdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvKFs6O10pICpcXG57Mix9L2csICckMVxcbicpO1xuXHRcdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXlxccyovLCAnJyk7XG5cdFx0XHRcdGNvbnN0IHN0dWZmID0gL14oW15cXG5dfFxcblxcUykqLy5leGVjKHRoaXMuZGF0YSk7XG5cdFx0XHRcdGlmIChzdHVmZikge1xuXHRcdFx0XHRcdFtkXSA9IHN0dWZmO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghZ2V0VmFsdWVPZigncG9wdXBQcmV2aWV3Rmlyc3RQYXJPbmx5JykpIHtcblx0XHRcdFx0XHRkID0gdGhpcy5kYXRhO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIC8gbm93IHB1dCBcXG5cXG4gYWZ0ZXIgc2VjdGlvbnMgc28gdGhhdCBidWxsZXRzIGFuZCBudW1iZXJlZCBsaXN0cyB3b3JrXG5cdFx0XHRcdGQgPSBkLnJlcGxhY2UoLyg9PStbXj1dKj09KylcXHMqL2csICckMVxcblxcbicpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU3BsaXQgc2VudGVuY2VzLiBTdXBlcmZsdW91cyBzZW50ZW5jZXMgYXJlIFJJR0hUIE9VVC5cblx0XHRcdC8vIG5vdGU6IGV4YWN0bHkgMSBzZXQgb2YgcGFyZW5zIGhlcmUgbmVlZGVkIHRvIG1ha2UgdGhlIHNsaWNlIHdvcmtcblx0XHRcdGQgPSBkLnNwbGl0KC8oWyEuP10rW1wiJ10qXFxzKS9nKTtcblx0XHRcdC8vIGxlYWRpbmcgc3BhY2UgaXMgYmFkLCBtbWtheT9cblx0XHRcdGRbMF0gPSBkWzBdLnJlcGxhY2UoL15cXHMqLywgJycpO1xuXHRcdFx0Y29uc3Qgbm90U2VudGVuY2VFbmRzID0gLyhbXi5dW2Etel1cXC4gKlthLXpdfGV0Y3xzaWN8ZHJ8bXJ8bXJzfG1zfHN0fG5vfG9wfGNpdHxcXFtbXlxcXV0qfFxcc1thLXpdKSQvaTtcblx0XHRcdGQgPSB0aGlzLmZpeFNlbnRlbmNlRW5kcyhkLCBub3RTZW50ZW5jZUVuZHMpO1xuXHRcdFx0dGhpcy5mdWxsTGVuZ3RoID0gZC5qb2luKCcnKS5sZW5ndGg7XG5cdFx0XHRsZXQgbiA9IHRoaXMubWF4U2VudGVuY2VzO1xuXHRcdFx0bGV0IGRkID0gUHJldmlld21ha2VyLmZpcnN0U2VudGVuY2VzKGQsIG4pO1xuXHRcdFx0ZG8ge1xuXHRcdFx0XHRkZCA9IFByZXZpZXdtYWtlci5maXJzdFNlbnRlbmNlcyhkLCBuKTtcblx0XHRcdFx0LS1uO1xuXHRcdFx0fSB3aGlsZSAoZGQubGVuZ3RoID4gdGhpcy5tYXhDaGFyYWN0ZXJzICYmIG4gIT09IDApO1xuXHRcdFx0dGhpcy5kYXRhID0gZGQ7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJzXG5cdFx0ICogQHBhcmFtIHtSZWdFeHB9IHJlZ1xuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0Zml4U2VudGVuY2VFbmRzKHN0cnMsIHJlZykge1xuXHRcdFx0Ly8gdGFrZSBhbiBhcnJheSBvZiBzdHJpbmdzLCBzdHJzXG5cdFx0XHQvLyBqb2luIHN0cnNbaV0gdG8gc3Ryc1tpKzFdICYgc3Ryc1tpKzJdIGlmIHN0cnNbaV0gbWF0Y2hlcyByZWdleCByZWdcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3Rycy5sZW5ndGggLSAyOyArK2kpIHtcblx0XHRcdFx0aWYgKHJlZy50ZXN0KHN0cnNbaV0pKSB7XG5cdFx0XHRcdFx0Y29uc3QgYSA9IFtdO1xuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgc3Rycy5sZW5ndGg7ICsraikge1xuXHRcdFx0XHRcdFx0aWYgKGogPCBpKSB7XG5cdFx0XHRcdFx0XHRcdGFbal0gPSBzdHJzW2pdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGogPT09IGkpIHtcblx0XHRcdFx0XHRcdFx0YVtpXSA9IHN0cnNbaV0gKyBzdHJzW2kgKyAxXSArIHN0cnNbaSArIDJdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGogPiBpICsgMikge1xuXHRcdFx0XHRcdFx0XHRhW2ogLSAyXSA9IHN0cnNbal07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZpeFNlbnRlbmNlRW5kcyhhLCByZWcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3Rycztcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmdbXX0gc3Ryc1xuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBob3dtYW55XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRzdGF0aWMgZmlyc3RTZW50ZW5jZXMoc3RycywgaG93bWFueSkge1xuXHRcdFx0Y29uc3QgdCA9IHN0cnMuc2xpY2UoMCwgMiAqIGhvd21hbnkpO1xuXHRcdFx0cmV0dXJuIHQuam9pbignJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0a2lsbEJhZFdoaXRlc3BhY2UoKSB7XG5cdFx0XHQvLyBhbHNvIGNsZWFucyB1cCBpc29sYXRlZCAnJycnXG5cdFx0XHR0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXiAqJysgKiQvZ20sICcnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUnVucyB0aGUgdmFyaW91cyBtZXRob2RzIHRvIGdlbmVyYXRlIHRoZSBwcmV2aWV3LlxuXHRcdCAqIFRoZSBwcmV2aWV3IGlzIHN0b3JlZCBpbiB0aGUgPGNvZGU+aHRtbDwvaHRtbD4gZmllbGQuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdG1ha2VQcmV2aWV3KCkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLm93bmVyLmFydGljbGUubmFtZXNwYWNlSWQoKSAhPT0gcGcubnNUZW1wbGF0ZUlkICYmXG5cdFx0XHRcdHRoaXMub3duZXIuYXJ0aWNsZS5uYW1lc3BhY2VJZCgpICE9PSBwZy5uc0ltYWdlSWRcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmtpbGxDb21tZW50cygpO1xuXHRcdFx0XHR0aGlzLmtpbGxEaXZzKCk7XG5cdFx0XHRcdHRoaXMua2lsbEdhbGxlcmllcygpO1xuXHRcdFx0XHR0aGlzLmtpbGxCb3hUZW1wbGF0ZXMoKTtcblx0XHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwUHJldmlld0tpbGxUZW1wbGF0ZXMnKSkge1xuXHRcdFx0XHRcdHRoaXMua2lsbFRlbXBsYXRlcygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMua2lsbE11bHRpbGluZVRlbXBsYXRlcygpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMua2lsbFRhYmxlcygpO1xuXHRcdFx0XHR0aGlzLmtpbGxJbWFnZXMoKTtcblx0XHRcdFx0dGhpcy5raWxsSFRNTCgpO1xuXHRcdFx0XHR0aGlzLmtpbGxDaHVua3MoKTtcblx0XHRcdFx0dGhpcy5tb3B1cCgpO1xuXHRcdFx0XHR0aGlzLmZpcnN0Qml0KCk7XG5cdFx0XHRcdHRoaXMua2lsbEJhZFdoaXRlc3BhY2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMua2lsbEhUTUwoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaHRtbCA9IHdpa2kyaHRtbCh0aGlzLmRhdGEsIHRoaXMuYmFzZVVybCk7IC8vIG5lZWRzIGxpdmVwcmV2aWV3XG5cdFx0XHR0aGlzLmZpeEhUTUwoKTtcblx0XHRcdHRoaXMuc3RyaXBMb25nVGVtcGxhdGVzKCk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRzdGF0aWMgZXNXaWtpMkh0bWxQYXJ0KGRhdGEpIHtcblx0XHRcdGNvbnN0IHJlTGlua3MgPSAvKD86XFxbXFxbKFteXFxdfF0qKSg/OlxcfChbXlxcXXxdKikpKl1dKFthLXpdKikpL2dpOyAvLyBtYXRjaCBhIHdpa2lsaW5rXG5cdFx0XHRyZUxpbmtzLmxhc3RJbmRleCA9IDA7IC8vIHJlc2V0IHJlZ2V4XG5cdFx0XHRsZXQgbWF0Y2g7XG5cdFx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cdFx0XHRsZXQgcG9zdGZpeEluZGV4ID0gMDtcblx0XHRcdHdoaWxlICgobWF0Y2ggPSByZUxpbmtzLmV4ZWMoZGF0YSkpICE9PSBudWxsKSB7XG5cdFx0XHRcdC8vIG1hdGNoIGFsbCB3aWtpbGlua3Ncblx0XHRcdFx0Ly8gRklYTUU6IHRoZSB3YXkgdGhhdCBsaW5rIGlzIGJ1aWx0IGhlcmUgaXNuJ3QgcGVyZmVjdC4gSXQgaXMgY2xpY2thYmxlLCBidXQgcG9wdXBzIHByZXZpZXcgd29uJ3QgcmVjb2duaXplIGl0IGluIHNvbWUgY2FzZXMuXG5cdFx0XHRcdHJlc3VsdCArPSBgJHtwZy5lc2NhcGVRdW90ZXNIVE1MKGRhdGEuc3Vic3RyaW5nKHBvc3RmaXhJbmRleCwgbWF0Y2guaW5kZXgpKX08YSBocmVmPVwiJHtcblx0XHRcdFx0XHRJbnN0YS5jb25mLnBhdGhzLmFydGljbGVzXG5cdFx0XHRcdH0ke3BnLmVzY2FwZVF1b3Rlc0hUTUwobWF0Y2hbMV0pfVwiPiR7cGcuZXNjYXBlUXVvdGVzSFRNTCgobWF0Y2hbMl0gPz8gbWF0Y2hbMV0pICsgbWF0Y2hbM10pfTwvYT5gO1xuXHRcdFx0XHRwb3N0Zml4SW5kZXggPSByZUxpbmtzLmxhc3RJbmRleDtcblx0XHRcdH1cblx0XHRcdC8vIGFwcGVuZCB0aGUgcmVzdFxuXHRcdFx0cmVzdWx0ICs9IHBnLmVzY2FwZVF1b3Rlc0hUTUwoZGF0YS5zbGljZShNYXRoLm1heCgwLCBwb3N0Zml4SW5kZXgpKSk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRlZGl0U3VtbWFyeVByZXZpZXcoKSB7XG5cdFx0XHRjb25zdCByZUFlcyA9IC9cXC9cXCogKiguKj8pICpcXCpcXC8vZzsgLy8gbWF0Y2ggdGhlIGZpcnN0IHNlY3Rpb24gbWFya2VyXG5cdFx0XHRyZUFlcy5sYXN0SW5kZXggPSAwOyAvLyByZXNldCByZWdleFxuXHRcdFx0Y29uc3QgbWF0Y2ggPSByZUFlcy5leGVjKHRoaXMuZGF0YSk7XG5cdFx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdFx0Ly8gd2UgaGF2ZSBhIHNlY3Rpb24gbGluay4gU3BsaXQgaXQsIHByb2Nlc3MgaXQsIGNvbWJpbmUgaXQuXG5cdFx0XHRcdGNvbnN0IHByZWZpeCA9IHRoaXMuZGF0YS5zbGljZSgwLCBNYXRoLm1heCgwLCBtYXRjaC5pbmRleCAtIDEpKTtcblx0XHRcdFx0Y29uc3QgWywgc2VjdGlvbl0gPSBtYXRjaDtcblx0XHRcdFx0Y29uc3QgcG9zdGZpeCA9IHRoaXMuZGF0YS5zbGljZShNYXRoLm1heCgwLCByZUFlcy5sYXN0SW5kZXgpKTtcblx0XHRcdFx0bGV0IHN0YXJ0ID0gXCI8c3BhbiBjbGFzcz0nYXV0b2NvbW1lbnQnPlwiO1xuXHRcdFx0XHRsZXQgZW5kID0gJzwvc3Bhbj4nO1xuXHRcdFx0XHRpZiAocHJlZml4Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzdGFydCA9IGAke1ByZXZpZXdtYWtlci5lc1dpa2kySHRtbFBhcnQocHJlZml4KX0gJHtzdGFydH0tIGA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHBvc3RmaXgubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGVuZCA9IGA6ICR7ZW5kfSR7UHJldmlld21ha2VyLmVzV2lraTJIdG1sUGFydChwb3N0Zml4KX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHQgPSBuZXcgVGl0bGUoKS5mcm9tVVJMKHRoaXMuYmFzZVVybCk7XG5cdFx0XHRcdHQuYW5jaG9yRnJvbVV0ZihzZWN0aW9uKTtcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbkxpbmsgPSBgJHtcblx0XHRcdFx0XHRJbnN0YS5jb25mLnBhdGhzLmFydGljbGVzICsgcGcuZXNjYXBlUXVvdGVzSFRNTCh0LnRvU3RyaW5nKHRydWUpKVxuXHRcdFx0XHR9IyR7cGcuZXNjYXBlUXVvdGVzSFRNTCh0LmFuY2hvcil9YDtcblx0XHRcdFx0cmV0dXJuIGAke3N0YXJ0fTxhIGhyZWY9XCIke3NlY3Rpb25MaW5rfVwiPiZyYXJyOzwvYT4gJHtwZy5lc2NhcGVRdW90ZXNIVE1MKHNlY3Rpb24pfSR7ZW5kfWA7XG5cdFx0XHR9XG5cdFx0XHQvLyBlbHNlIHRoZXJlJ3Mgbm8gc2VjdGlvbiBsaW5rLCBodG1saWZ5IHRoZSB3aG9sZSB0aGluZy5cblx0XHRcdHJldHVybiBQcmV2aWV3bWFrZXIuZXNXaWtpMkh0bWxQYXJ0KHRoaXMuZGF0YSk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFdvcmtzIGFyb3VuZCBsaXZlcHJldmlldyBidWdzLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRmaXhIVE1MKCkge1xuXHRcdFx0aWYgKCF0aGlzLmh0bWwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHJldCA9IHRoaXMuaHRtbDtcblx0XHRcdC8vIGZpeCBxdWVzdGlvbiBtYXJrcyBpbiB3aWtpIGxpbmtzXG5cdFx0XHQvLyBtYXliZSB0aGlzJ2xsIGJyZWFrIHNvbWUgc3R1ZmYgOi0oXG5cdFx0XHRyZXQgPSByZXQucmVwbGFjZShuZXcgUmVnRXhwKGAoPGEgaHJlZj1cIiR7cGcud2lraS5hcnRpY2xlUGF0aH0vW15cIl0qKVs/XSguKj9cIilgLCAnZycpLCAnJDElM0YkMicpO1xuXHRcdFx0cmV0ID0gcmV0LnJlcGxhY2UobmV3IFJlZ0V4cChgKDxhIGhyZWY9JyR7cGcud2lraS5hcnRpY2xlUGF0aH0vW14nXSopWz9dKC4qPycpYCwgJ2cnKSwgJyQxJTNGJDInKTtcblx0XHRcdC8vIEZJWE1FIGZpeCB1cCAlIHRvb1xuXHRcdFx0dGhpcy5odG1sID0gcmV0O1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBHZW5lcmF0ZXMgdGhlIHByZXZpZXcgYW5kIGRpc3BsYXlzIGl0IGluIHRoZSBjdXJyZW50IHBvcHVwLlxuXHRcdCAqIERvZXMgbm90aGluZyBpZiB0aGUgZ2VuZXJhdGVkIHByZXZpZXcgaXMgaW52YWxpZCBvciBjb25zaXN0cyBvZiB3aGl0ZXNwYWNlIG9ubHkuXG5cdFx0ICogQWxzbyBhY3RpdmF0ZXMgd2lraWxpbmtzIGluIHRoZSBwcmV2aWV3IGZvciBzdWJwb3B1cHMgaWYgdGhlIHBvcHVwU3VicG9wdXBzIG9wdGlvbiBpcyB0cnVlLlxuXHRcdCAqL1xuXHRcdHNob3dQcmV2aWV3KCkge1xuXHRcdFx0dGhpcy5tYWtlUHJldmlldygpO1xuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLmh0bWwgIT09IHR5cGVvZiAnJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoL15cXHMqJC8udGVzdCh0aGlzLmh0bWwpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHNldFBvcHVwSFRNTCgnPGhyPicsICdwb3B1cFByZVByZXZpZXdTZXAnLCB0aGlzLm93bmVyLmlkTnVtYmVyKTtcblx0XHRcdHNldFBvcHVwVGlwc0FuZEhUTUwodGhpcy5odG1sLCAncG9wdXBQcmV2aWV3JywgdGhpcy5vd25lci5pZE51bWJlciwge1xuXHRcdFx0XHRvd25lcjogdGhpcy5vd25lcixcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgbW9yZSA9IHRoaXMuZnVsbExlbmd0aCA+IHRoaXMuZGF0YS5sZW5ndGggPyB0aGlzLm1vcmVMaW5rKCkgOiAnJztcblx0XHRcdHNldFBvcHVwSFRNTChtb3JlLCAncG9wdXBQcmV2aWV3TW9yZScsIHRoaXMub3duZXIuaWROdW1iZXIpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdG1vcmVMaW5rKCkge1xuXHRcdFx0Y29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdGEuY2xhc3NOYW1lID0gJ3BvcHVwTW9yZUxpbmsnO1xuXHRcdFx0YS5pbm5lckhUTUwgPSBwb3B1cFN0cmluZygnbW9yZS4uLicpO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRhLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHRcdHNlbGYubWF4Q2hhcmFjdGVycyArPSAyMDAwO1xuXHRcdFx0XHRzZWxmLm1heFNlbnRlbmNlcyArPSAyMDtcblx0XHRcdFx0c2VsZi5zZXREYXRhKCk7XG5cdFx0XHRcdHNlbGYuc2hvd1ByZXZpZXcoKTtcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gYTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRzdHJpcExvbmdUZW1wbGF0ZXMoKSB7XG5cdFx0XHQvLyBvcGVyYXRlcyBvbiB0aGUgSFRNTCFcblx0XHRcdHRoaXMuaHRtbCA9IHRoaXMuaHRtbC5yZXBsYWNlKC9eLnswLDEwMDB9e3tbXn1dKj8oPChwfGJyKSggXFwvKT8+XFxzKil7Mix9KFtee31dKj99fSk/L2dpLCAnJyk7XG5cdFx0XHR0aGlzLmh0bWwgPSB0aGlzLmh0bWwuc3BsaXQoJ1xcbicpLmpvaW4oJyAnKTsgLy8gd29ya2Fyb3VuZCBmb3IgPHByZT4gdGVtcGxhdGVzXG5cdFx0XHR0aGlzLmh0bWwgPSB0aGlzLmh0bWwucmVwbGFjZSgve3tbXn1dKjxwcmU+W159XSp9fS9naSwgJycpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGtpbGxNdWx0aWxpbmVUZW1wbGF0ZXMoKSB7XG5cdFx0XHR0aGlzLmtpbGwoJ3t7eycsICd9fX0nKTtcblx0XHRcdHRoaXMua2lsbCgvXFxzKnt7W157fV0qXFxuLywgJ319JywgJ3t7Jyk7XG5cdFx0fVxuXHR9XG5cdC8vIEVOREZJTEU6IHByZXZpZXdtYWtlci5qc1xuXHQvLyBTVEFSVEZJTEU6IHF1ZXJ5cHJldmlldy5qc1xuXHRjb25zdCBsb2FkQVBJUHJldmlldyA9IChxdWVyeVR5cGUsIGFydGljbGUsIG5hdnBvcCkgPT4ge1xuXHRcdGNvbnN0IGFydCA9IG5ldyBUaXRsZShhcnRpY2xlKS51cmxTdHJpbmcoKTtcblx0XHRsZXQgdXJsID0gYCR7cGcud2lraS5hcGl3aWtpYmFzZX0/Zm9ybWF0PWpzb24mZm9ybWF0dmVyc2lvbj0yJmFjdGlvbj1xdWVyeSZgO1xuXHRcdGxldCBodG1sR2VuZXJhdG9yID0gKCkgPT4gLyogYSwgZCAqLyB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSgnaW52YWxpZCBodG1sIGdlbmVyYXRvcicsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0fTtcblx0XHRsZXQgdXNlcm5hbWVhcnQgPSAnJztcblx0XHRzd2l0Y2ggKHF1ZXJ5VHlwZSkge1xuXHRcdFx0Y2FzZSAnaGlzdG9yeSc6XG5cdFx0XHRcdHVybCArPSBgdGl0bGVzPSR7YXJ0fSZwcm9wPXJldmlzaW9ucyZydmxpbWl0PSR7Z2V0VmFsdWVPZigncG9wdXBIaXN0b3J5UHJldmlld0xpbWl0Jyl9YDtcblx0XHRcdFx0aHRtbEdlbmVyYXRvciA9IEFQSWhpc3RvcnlQcmV2aWV3SFRNTDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjYXRlZ29yeSc6XG5cdFx0XHRcdHVybCArPSBgbGlzdD1jYXRlZ29yeW1lbWJlcnMmY210aXRsZT0ke2FydH1gO1xuXHRcdFx0XHRodG1sR2VuZXJhdG9yID0gQVBJY2F0ZWdvcnlQcmV2aWV3SFRNTDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd1c2VyaW5mbyc6IHtcblx0XHRcdFx0Y29uc3QgdXNlcm5hbWUgPSBuZXcgVGl0bGUoYXJ0aWNsZSkudXNlck5hbWUoKTtcblx0XHRcdFx0dXNlcm5hbWVhcnQgPSBlbmNvZGVVUklDb21wb25lbnQodXNlcm5hbWUpO1xuXHRcdFx0XHR1cmwgKz0gcGcucmUuaXBVc2VyLnRlc3QodXNlcm5hbWUpXG5cdFx0XHRcdFx0PyBgbGlzdD1ibG9ja3MmYmtwcm9wPXJhbmdlfHJlc3RyaWN0aW9ucyZia2lwPSR7dXNlcm5hbWVhcnR9YFxuXHRcdFx0XHRcdDogYGxpc3Q9dXNlcnN8dXNlcmNvbnRyaWJzJnVzcHJvcD1ibG9ja2luZm98Z3JvdXBzfGVkaXRjb3VudHxyZWdpc3RyYXRpb258Z2VuZGVyJnVzdXNlcnM9JHt1c2VybmFtZWFydH0mbWV0YT1nbG9iYWx1c2VyaW5mbyZndWlwcm9wPWdyb3Vwc3x1bmF0dGFjaGVkJmd1aXVzZXI9JHt1c2VybmFtZWFydH0mdWNsaW1pdD0xJnVjcHJvcD10aW1lc3RhbXAmdWN1c2VyPSR7dXNlcm5hbWVhcnR9YDtcblx0XHRcdFx0aHRtbEdlbmVyYXRvciA9IEFQSXVzZXJJbmZvUHJldmlld0hUTUw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnY29udHJpYnMnOlxuXHRcdFx0XHR1c2VybmFtZWFydCA9IGVuY29kZVVSSUNvbXBvbmVudChuZXcgVGl0bGUoYXJ0aWNsZSkudXNlck5hbWUoKSk7XG5cdFx0XHRcdHVybCArPSBgbGlzdD11c2VyY29udHJpYnMmdWN1c2VyPSR7dXNlcm5hbWVhcnR9JnVjbGltaXQ9JHtnZXRWYWx1ZU9mKCdwb3B1cENvbnRyaWJzUHJldmlld0xpbWl0Jyl9YDtcblx0XHRcdFx0aHRtbEdlbmVyYXRvciA9IEFQSWNvbnRyaWJzUHJldmlld0hUTUw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaW1hZ2VwYWdlcHJldmlldyc6IHtcblx0XHRcdFx0bGV0IHRyYWlsID0gJyc7XG5cdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cEltYWdlTGlua3MnKSkge1xuXHRcdFx0XHRcdHRyYWlsID0gYCZsaXN0PWltYWdldXNhZ2UmaXV0aXRsZT0ke2FydH1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHVybCArPSBgdGl0bGVzPSR7YXJ0fSZwcm9wPXJldmlzaW9uc3xpbWFnZWluZm8mcnZwcm9wPWNvbnRlbnQke3RyYWlsfWA7XG5cdFx0XHRcdGh0bWxHZW5lcmF0b3IgPSBBUElpbWFnZXBhZ2VQcmV2aWV3SFRNTDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdiYWNrbGlua3MnOlxuXHRcdFx0XHR1cmwgKz0gYGxpc3Q9YmFja2xpbmtzJmJsdGl0bGU9JHthcnR9YDtcblx0XHRcdFx0aHRtbEdlbmVyYXRvciA9IEFQSWJhY2tsaW5rc1ByZXZpZXdIVE1MO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3JldmlzaW9uJzpcblx0XHRcdFx0dXJsICs9IGFydGljbGUub2xkaWQgPyBgcmV2aWRzPSR7YXJ0aWNsZS5vbGRpZH1gIDogYHRpdGxlcz0ke2FydGljbGUucmVtb3ZlQW5jaG9yKCkudXJsU3RyaW5nKCl9YDtcblx0XHRcdFx0dXJsICs9XG5cdFx0XHRcdFx0JyZwcm9wPXJldmlzaW9uc3xwYWdlcHJvcHN8aW5mb3xpbWFnZXN8Y2F0ZWdvcmllcyZydnByb3A9aWRzfHRpbWVzdGFtcHxmbGFnc3xjb21tZW50fHVzZXJ8Y29udGVudCZjbGxpbWl0PW1heCZpbWxpbWl0PW1heCc7XG5cdFx0XHRcdGh0bWxHZW5lcmF0b3IgPSBBUElyZXZpc2lvblByZXZpZXdIVE1MO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cGVuZGluZ05hdnBvcFRhc2sobmF2cG9wKTtcblx0XHRjb25zdCBjYWxsYmFjayA9IChkKSA9PiB7XG5cdFx0XHRsb2coJ2NhbGxiYWNrIG9mIEFQSSBmdW5jdGlvbnMgd2FzIGhpdCcpO1xuXHRcdFx0aWYgKHF1ZXJ5VHlwZSA9PT0gJ3VzZXJpbmZvJykge1xuXHRcdFx0XHQvLyBXZSBuZWVkIHRvIGRvIGFub3RoZXIgQVBJIHJlcXVlc3Rcblx0XHRcdFx0ZmV0Y2hVc2VyR3JvdXBOYW1lcyhkLmRhdGEpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdHNob3dBUElQcmV2aWV3KHF1ZXJ5VHlwZSwgaHRtbEdlbmVyYXRvcihhcnRpY2xlLCBkLCBuYXZwb3ApLCBuYXZwb3AuaWROdW1iZXIsIG5hdnBvcCwgZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRzaG93QVBJUHJldmlldyhxdWVyeVR5cGUsIGh0bWxHZW5lcmF0b3IoYXJ0aWNsZSwgZCwgbmF2cG9wKSwgbmF2cG9wLmlkTnVtYmVyLCBuYXZwb3AsIGQpO1xuXHRcdH07XG5cdFx0Y29uc3QgZ28gPSAoKSA9PiB7XG5cdFx0XHRnZXRQYWdlV2l0aENhY2hpbmcodXJsLCBjYWxsYmFjaywgbmF2cG9wKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cdFx0aWYgKG5hdnBvcC52aXNpYmxlIHx8ICFnZXRWYWx1ZU9mKCdwb3B1cExhenlEb3dubG9hZHMnKSkge1xuXHRcdFx0Z28oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmF2cG9wLmFkZEhvb2soZ28sICd1bmhpZGUnLCAnYmVmb3JlJywgYERPV05MT0FEXyR7cXVlcnlUeXBlfV9RVUVSWV9EQVRBYCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBsaW5rTGlzdCA9IChsaXN0KSA9PiB7XG5cdFx0bGlzdC5zb3J0KCh4LCB5KSA9PiB7XG5cdFx0XHRyZXR1cm4geCA9PT0geSA/IDAgOiB4IDwgeSA/IC0xIDogMTtcblx0XHR9KTtcblx0XHRjb25zdCBidWYgPSBbXTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0YnVmLnB1c2goXG5cdFx0XHRcdHdpa2lMaW5rKHtcblx0XHRcdFx0XHRhcnRpY2xlOiBuZXcgVGl0bGUoZWxlbWVudCksXG5cdFx0XHRcdFx0dGV4dDogZWxlbWVudC5zcGxpdCgnICcpLmpvaW4oJyZuYnNwOycpLFxuXHRcdFx0XHRcdGFjdGlvbjogJ3ZpZXcnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGJ1Zi5qb2luKCcsICcpO1xuXHR9O1xuXHRjb25zdCBnZXRUaW1lT2Zmc2V0ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHR6ID0gbXcudXNlci5vcHRpb25zLmdldCgndGltZWNvcnJlY3Rpb24nKTtcblx0XHRpZiAodHogJiYgdHouaW5jbHVkZXMoJ3wnKSkge1xuXHRcdFx0Ly8gTmV3IGZvcm1hdFxuXHRcdFx0cmV0dXJuIE51bWJlci5wYXJzZUludCh0ei5zcGxpdCgnfCcpWzFdLCAxMCk7XG5cdFx0fVxuXHRcdHJldHVybiAwO1xuXHR9O1xuXHRjb25zdCBnZXRUaW1lWm9uZSA9ICgpID0+IHtcblx0XHRpZiAoIXBnLnVzZXIudGltZVpvbmUpIHtcblx0XHRcdGNvbnN0IHR6ID0gbXcudXNlci5vcHRpb25zLmdldCgndGltZWNvcnJlY3Rpb24nKTtcblx0XHRcdHBnLnVzZXIudGltZVpvbmUgPSAnVVRDJztcblx0XHRcdGlmICh0eikge1xuXHRcdFx0XHRjb25zdCB0ekNvbXBvbmVudHMgPSB0ei5zcGxpdCgnfCcpO1xuXHRcdFx0XHRpZiAodHpDb21wb25lbnRzLmxlbmd0aCA9PT0gMyAmJiB0ekNvbXBvbmVudHNbMF0gPT09ICdab25lSW5mbycpIHtcblx0XHRcdFx0XHRbLCAsIHBnLnVzZXIudGltZVpvbmVdID0gdHpDb21wb25lbnRzO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVycmxvZyhgVW5leHBlY3RlZCB0aW1lem9uZSBpbmZvcm1hdGlvbjogJHt0en1gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcGcudXNlci50aW1lWm9uZTtcblx0fTtcblx0LyoqXG5cdCAqIFNob3VsZCB3ZSB1c2UgYW4gb2Zmc2V0IG9yIGNhbiB3ZSB1c2UgcHJvcGVyIHRpbWV6b25lc1xuXHQgKi9cblx0Y29uc3QgdXNlVGltZU9mZnNldCA9ICgpID0+IHtcblx0XHRpZiAoSW50bC5EYXRlVGltZUZvcm1hdC5wcm90b3R5cGUuZm9ybWF0VG9QYXJ0cyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHQvLyBJRSAxMVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGNvbnN0IHR6ID0gbXcudXNlci5vcHRpb25zLmdldCgndGltZWNvcnJlY3Rpb24nKTtcblx0XHRpZiAodHogJiYgIXR6LmluY2x1ZGVzKCdab25lSW5mb3wnKSkge1xuXHRcdFx0Ly8gU3lzdGVtfCBEZWZhdWx0IHN5c3RlbSB0aW1lLCBkZWZhdWx0IGZvciB1c2VycyB3aG8gZGlkbid0IGNvbmZpZ3VyZSB0aW1lem9uZVxuXHRcdFx0Ly8gT2Zmc2V0fCBNYW51YWwgZGVmaW5lZCBvZmZzZXQgYnkgdXNlclxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0LyoqXG5cdCAqIEFycmF5IG9mIGxvY2FsZXMgZm9yIHRoZSBwdXJwb3NlIG9mIGphdmFzY3JpcHQgbG9jYWxlIGJhc2VkIGZvcm1hdHRpbmdcblx0ICogRmlsdGVycyBkb3duIHRvIHRob3NlIHN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci4gRW1wdHkgW10gPT09IFN5c3RlbSdzIGRlZmF1bHQgbG9jYWxlXG5cdCAqL1xuXHRjb25zdCBnZXRMb2NhbGVzID0gKCkgPT4ge1xuXHRcdGlmICghcGcudXNlci5sb2NhbGVzKSB7XG5cdFx0XHRsZXQgdXNlckxhbmd1YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmdldEF0dHJpYnV0ZSgnbGFuZycpOyAvLyBtYWtlIHN1cmUgd2UgaGF2ZSBIVE1MIGxvY2FsZVxuXHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwTG9jYWxlJykpIHtcblx0XHRcdFx0dXNlckxhbmd1YWdlID0gZ2V0VmFsdWVPZigncG9wdXBMb2NhbGUnKTtcblx0XHRcdH0gZWxzZSBpZiAodXNlckxhbmd1YWdlID09PSAnZW4nKSB7XG5cdFx0XHRcdC8vIGVuLndwIHRlbmRzIHRvIHRyZWF0IHRoaXMgYXMgaW50ZXJuYXRpb25hbCBlbmdsaXNoIC8gdW5zcGVjaWZpZWRcblx0XHRcdFx0Ly8gYnV0IHdlIGhhdmUgbW9yZSBzcGVjaWZpYyBzZXR0aW5ncyBpbiB1c2VyIG9wdGlvbnNcblx0XHRcdFx0dXNlckxhbmd1YWdlID0gZ2V0TVdEYXRlRm9ybWF0KCkgPT09ICdtZHknID8gJ2VuLVVTJyA6ICdlbi1HQic7XG5cdFx0XHR9XG5cdFx0XHRwZy51c2VyLmxvY2FsZXMgPSBJbnRsLkRhdGVUaW1lRm9ybWF0LnN1cHBvcnRlZExvY2FsZXNPZihbdXNlckxhbmd1YWdlLCBuYXZpZ2F0b3IubGFuZ3VhZ2VdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHBnLnVzZXIubG9jYWxlcztcblx0fTtcblx0LyoqXG5cdCAqIFJldHJpZXZlIGNvbmZpZ3VyZWQgTVcgZGF0ZSBmb3JtYXQgZm9yIHRoaXMgdXNlclxuXHQgKiBUaGVzZSBjYW4gYmVcblx0ICogZGVmYXVsdFxuXHQgKiBkbXk6IHRpbWUsIGRteVxuXHQgKiBtZHk6IHRpbWUsIG1keVxuXHQgKiB5bWQ6IHRpbWUsIHltZFxuXHQgKiBkbXl0OiBkbXksIHRpbWVcblx0ICogZG15dHM6IGRteSwgdGltZSArIHNlY29uZHNcblx0ICogSVNPIDg2MDE6IFlZWVktTU0tRERUaGg6bW06c3MgKGxvY2FsIHRpbWUpXG5cdCAqXG5cdCAqIFRoaXMgaXNuJ3QgdG9vIHVzZWZ1bCBmb3IgdXMsIGFzIEpTIGRvZXNuJ3QgaGF2ZSBmb3JtYXR0ZXJzIHRvIG1hdGNoIHRoZXNlIHByaXZhdGUgc3BlY2lmaWVyc1xuXHQgKi9cblx0Y29uc3QgZ2V0TVdEYXRlRm9ybWF0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBtdy51c2VyLm9wdGlvbnMuZ2V0KCdkYXRlJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgSFRNTCB0YWJsZSB0aGF0J3Mgc2hvd24gaW4gdGhlIGhpc3RvcnkgYW5kIHVzZXItY29udHJpYnMgcG9wdXBzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYXJ0aWNsZVxuXHQgKiBAcGFyYW0ge09iamVjdFtdfSBoIC0gYSBsaXN0IG9mIHJldmlzaW9ucywgcmV0dXJuZWQgZnJvbSB0aGUgQVBJXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVhbGx5Q29udHJpYnMgLSB0cnVlIG9ubHkgaWYgd2UncmUgZGlzcGxheWluZyB1c2VyIGNvbnRyaWJ1dGlvbnNcblx0ICovXG5cdGNvbnN0IGVkaXRQcmV2aWV3VGFibGUgPSAoYXJ0aWNsZSwgaCwgcmVhbGx5Q29udHJpYnMpID0+IHtcblx0XHRsZXQgaHRtbCA9IFsnPHRhYmxlPiddO1xuXHRcdGxldCBkYXk7XG5cdFx0bGV0IGN1cmFydCA9IGFydGljbGU7XG5cdFx0bGV0IHBhZ2U7XG5cdFx0bGV0IG1ha2VGaXJzdENvbHVtbkxpbmtzO1xuXHRcdGlmIChyZWFsbHlDb250cmlicykge1xuXHRcdFx0Ly8gV2UncmUgc2hvd2luZyB1c2VyIGNvbnRyaWJ1dGlvbnMsIHNvIG1ha2UgKGRpZmYgfCBoaXN0KSBsaW5rc1xuXHRcdFx0bWFrZUZpcnN0Q29sdW1uTGlua3MgPSAoY3VycmVudFJldmlzaW9uKSA9PiB7XG5cdFx0XHRcdGxldCByZXN1bHQgPSAnKCc7XG5cdFx0XHRcdHJlc3VsdCArPVxuXHRcdFx0XHRcdGA8YSBocmVmPVwiJHtwZy53aWtpLnRpdGxlYmFzZX0ke25ldyBUaXRsZShjdXJyZW50UmV2aXNpb24udGl0bGUpLnVybFN0cmluZygpfSZkaWZmPXByZXZgICtcblx0XHRcdFx0XHRgJm9sZGlkPSR7Y3VycmVudFJldmlzaW9uLnJldmlkfVwiPiR7cG9wdXBTdHJpbmcoJ2RpZmYnKX08L2E+YDtcblx0XHRcdFx0cmVzdWx0ICs9ICcmbmJzcDt8Jm5ic3A7Jztcblx0XHRcdFx0cmVzdWx0ICs9IGA8YSBocmVmPVwiJHtwZy53aWtpLnRpdGxlYmFzZX0ke25ldyBUaXRsZShcblx0XHRcdFx0XHRjdXJyZW50UmV2aXNpb24udGl0bGVcblx0XHRcdFx0KS51cmxTdHJpbmcoKX0mYWN0aW9uPWhpc3RvcnlcIj4ke3BvcHVwU3RyaW5nKCdoaXN0Jyl9PC9hPmA7XG5cdFx0XHRcdHJlc3VsdCArPSAnKSc7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBJdCdzIGEgcmVndWxhciBoaXN0b3J5IHBhZ2UsIHNvIG1ha2UgKGN1ciB8IGxhc3QpIGxpbmtzXG5cdFx0XHRjb25zdCBmaXJzdFJldmlkID0gaFswXS5yZXZpZDtcblx0XHRcdG1ha2VGaXJzdENvbHVtbkxpbmtzID0gKGN1cnJlbnRSZXZpc2lvbikgPT4ge1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gJygnO1xuXHRcdFx0XHRyZXN1bHQgKz0gYDxhIGhyZWY9XCIke3BnLndpa2kudGl0bGViYXNlfSR7bmV3IFRpdGxlKGN1cmFydCkudXJsU3RyaW5nKCl9JmRpZmY9JHtmaXJzdFJldmlkfSZvbGRpZD0ke1xuXHRcdFx0XHRcdGN1cnJlbnRSZXZpc2lvbi5yZXZpZFxuXHRcdFx0XHR9XCI+JHtwb3B1cFN0cmluZygnY3VyJyl9PC9hPmA7XG5cdFx0XHRcdHJlc3VsdCArPSAnJm5ic3A7fCZuYnNwOyc7XG5cdFx0XHRcdHJlc3VsdCArPSBgPGEgaHJlZj1cIiR7cGcud2lraS50aXRsZWJhc2V9JHtuZXcgVGl0bGUoY3VyYXJ0KS51cmxTdHJpbmcoKX0mZGlmZj1wcmV2Jm9sZGlkPSR7XG5cdFx0XHRcdFx0Y3VycmVudFJldmlzaW9uLnJldmlkXG5cdFx0XHRcdH1cIj4ke3BvcHVwU3RyaW5nKCdsYXN0Jyl9PC9hPmA7XG5cdFx0XHRcdHJlc3VsdCArPSAnKSc7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IFtpLCBlbGVtZW50XSBvZiBoLmVudHJpZXMoKSkge1xuXHRcdFx0aWYgKHJlYWxseUNvbnRyaWJzKSB7XG5cdFx0XHRcdHBhZ2UgPSBlbGVtZW50LnRpdGxlO1xuXHRcdFx0XHRjdXJhcnQgPSBuZXcgVGl0bGUocGFnZSk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBtaW5vciA9IGVsZW1lbnQubWlub3IgPyAnPGI+bSA8L2I+JyA6ICcnO1xuXHRcdFx0Y29uc3QgZWRpdERhdGUgPSBuZXcgRGF0ZShlbGVtZW50LnRpbWVzdGFtcCk7XG5cdFx0XHRsZXQgdGhpc0RheSA9IGZvcm1hdHRlZERhdGUoZWRpdERhdGUpO1xuXHRcdFx0Y29uc3QgdGhpc1RpbWUgPSBmb3JtYXR0ZWRUaW1lKGVkaXREYXRlKTtcblx0XHRcdGlmICh0aGlzRGF5ID09PSBkYXkpIHtcblx0XHRcdFx0dGhpc0RheSA9ICcnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGF5ID0gdGhpc0RheTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzRGF5KSB7XG5cdFx0XHRcdGh0bWwucHVzaChgPHRyPjx0ZCBjb2xzcGFuPTM+PHNwYW4gY2xhc3M9XCJwb3B1cF9oaXN0b3J5X2RhdGVcIj4ke3RoaXNEYXl9PC9zcGFuPjwvdGQ+PC90cj5gKTtcblx0XHRcdH1cblx0XHRcdGh0bWwucHVzaChcblx0XHRcdFx0YDx0ciBjbGFzcz1cInBvcHVwX2hpc3Rvcnlfcm93XyR7aSAlIDIgPyAnb2RkJyA6ICdldmVuJ31cIj5gLFxuXHRcdFx0XHRgPHRkPiR7bWFrZUZpcnN0Q29sdW1uTGlua3MoZWxlbWVudCl9PC90ZD5gLFxuXHRcdFx0XHQnPHRkPicgK1xuXHRcdFx0XHRcdGA8YSBocmVmPVwiJHtwZy53aWtpLnRpdGxlYmFzZX0ke25ldyBUaXRsZShjdXJhcnQpLnVybFN0cmluZygpfSZvbGRpZD0ke1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5yZXZpZFxuXHRcdFx0XHRcdH1cIj4ke3RoaXNUaW1lfTwvYT48L3RkPmBcblx0XHRcdCk7XG5cdFx0XHRsZXQgY29sM3VybCA9ICcnO1xuXHRcdFx0bGV0IGNvbDN0eHQgPSAnJztcblx0XHRcdGlmIChyZWFsbHlDb250cmlicykge1xuXHRcdFx0XHRjb2wzdXJsID0gcGcud2lraS50aXRsZWJhc2UgKyBjdXJhcnQudXJsU3RyaW5nKCk7XG5cdFx0XHRcdGNvbDN0eHQgPSBwZy5lc2NhcGVRdW90ZXNIVE1MKHBhZ2UpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3Qge3VzZXJ9ID0gZWxlbWVudDtcblx0XHRcdFx0aWYgKGVsZW1lbnQudXNlcmhpZGRlbikge1xuXHRcdFx0XHRcdGNvbDN1cmwgPSBnZXRWYWx1ZU9mKCdwb3B1cFJldkRlbFVybCcpO1xuXHRcdFx0XHRcdGNvbDN0eHQgPSBwZy5lc2NhcGVRdW90ZXNIVE1MKHBvcHVwU3RyaW5nKCdyZXZkZWwnKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29sM3VybCA9IHBnLnJlLmlwVXNlci50ZXN0KHVzZXIpXG5cdFx0XHRcdFx0XHQ/IGAke1xuXHRcdFx0XHRcdFx0XHRcdHBnLndpa2kudGl0bGViYXNlICsgbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNTcGVjaWFsSWRdXG5cdFx0XHRcdFx0XHRcdH06Q29udHJpYnV0aW9ucyZ0YXJnZXQ9JHtuZXcgVGl0bGUodXNlcikudXJsU3RyaW5nKCl9YFxuXHRcdFx0XHRcdFx0OiBgJHtwZy53aWtpLnRpdGxlYmFzZSArIG13LmNvbmZpZy5nZXQoJ3dnRm9ybWF0dGVkTmFtZXNwYWNlcycpW3BnLm5zVXNlcklkXX06JHtuZXcgVGl0bGUoXG5cdFx0XHRcdFx0XHRcdFx0dXNlclxuXHRcdFx0XHRcdFx0XHQpLnVybFN0cmluZygpfWA7XG5cdFx0XHRcdFx0Y29sM3R4dCA9IHBnLmVzY2FwZVF1b3Rlc0hUTUwodXNlcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGh0bWwucHVzaChgPHRkPiR7cmVhbGx5Q29udHJpYnMgPyBtaW5vciA6ICcnfTxhIGhyZWY9XCIke2NvbDN1cmx9XCI+JHtjb2wzdHh0fTwvYT48L3RkPmApO1xuXHRcdFx0bGV0IGNvbW1lbnQgPSAnJztcblx0XHRcdGNvbnN0IGMgPSBlbGVtZW50LmNvbW1lbnQgfHwgZWxlbWVudC5jb250ZW50O1xuXHRcdFx0aWYgKGMpIHtcblx0XHRcdFx0Y29tbWVudCA9IG5ldyBQcmV2aWV3bWFrZXIoYywgbmV3IFRpdGxlKGN1cmFydCkudG9VcmwoKSkuZWRpdFN1bW1hcnlQcmV2aWV3KCk7XG5cdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQuY29tbWVudGhpZGRlbikge1xuXHRcdFx0XHRjb21tZW50ID0gcG9wdXBTdHJpbmcoJ3JldmRlbCcpO1xuXHRcdFx0fVxuXHRcdFx0aHRtbC5wdXNoKGA8dGQ+JHtyZWFsbHlDb250cmlicyA/ICcnIDogbWlub3J9JHtjb21tZW50fTwvdGQ+YCwgJzwvdHI+Jyk7XG5cdFx0XHRodG1sID0gW2h0bWwuam9pbignJyldO1xuXHRcdH1cblx0XHRodG1sLnB1c2goJzwvdGFibGU+Jyk7XG5cdFx0cmV0dXJuIGh0bWwuam9pbignJyk7XG5cdH07XG5cdGNvbnN0IGFkanVzdERhdGUgPSAoZCwgb2Zmc2V0KSA9PiB7XG5cdFx0Ly8gb2Zmc2V0IGlzIGluIG1pbnV0ZXNcblx0XHRjb25zdCBvID0gb2Zmc2V0ICogNjAgKiAxMDAwO1xuXHRcdHJldHVybiBuZXcgRGF0ZSgrZCArIG8pO1xuXHR9O1xuXHQvKipcblx0ICogVGhpcyByZWxpZXMgb24gdGhlIERhdGUgcGFyc2VyIHVuZGVyc3RhbmRpbmcgZW4tVVMgZGF0ZXMsXG5cdCAqIHdoaWNoIGlzIHByZXR0eSBzYWZlIGFzc3VtcHRpb24sIGJ1dCBub3QgcGVyZmVjdC5cblx0ICpcblx0ICogQHBhcmFtIHtEYXRlfSBkYXRlXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lWm9uZVxuXHQgKi9cblx0Y29uc3QgY29udmVydFRpbWVab25lID0gKGRhdGUsIHRpbWVab25lKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge3RpbWVab25lfSkpO1xuXHR9O1xuXHRjb25zdCBmb3JtYXR0ZWREYXRlVGltZSA9IChkYXRlKSA9PiB7XG5cdFx0Ly8gZmFsbGJhY2sgZm9yIElFMTEgYW5kIHVua25vd24gdGltZXpvbmVzXG5cdFx0aWYgKHVzZVRpbWVPZmZzZXQoKSkge1xuXHRcdFx0cmV0dXJuIGAke2Zvcm1hdHRlZERhdGUoZGF0ZSl9ICR7Zm9ybWF0dGVkVGltZShkYXRlKX1gO1xuXHRcdH1cblx0XHRpZiAoZ2V0TVdEYXRlRm9ybWF0KCkgPT09ICdJU08gODYwMScpIHtcblx0XHRcdGNvbnN0IGQyID0gY29udmVydFRpbWVab25lKGRhdGUsIGdldFRpbWVab25lKCkpO1xuXHRcdFx0cmV0dXJuIGAke21hcCh6ZXJvRmlsbCwgW2QyLmdldEZ1bGxZZWFyKCksIGQyLmdldE1vbnRoKCkgKyAxLCBkMi5nZXREYXRlKCldKS5qb2luKCctJyl9VCR7bWFwKHplcm9GaWxsLCBbXG5cdFx0XHRcdGQyLmdldEhvdXJzKCksXG5cdFx0XHRcdGQyLmdldE1pbnV0ZXMoKSxcblx0XHRcdFx0ZDIuZ2V0U2Vjb25kcygpLFxuXHRcdFx0XSkuam9pbignOicpfWA7XG5cdFx0fVxuXHRcdGNvbnN0IG9wdGlvbnMgPSBnZXRWYWx1ZU9mKCdwb3B1cERhdGVUaW1lRm9ybWF0dGVyT3B0aW9ucycpO1xuXHRcdG9wdGlvbnMudGltZVpvbmUgPSBnZXRUaW1lWm9uZSgpO1xuXHRcdHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKGdldExvY2FsZXMoKSwgb3B0aW9ucyk7XG5cdH07XG5cdGNvbnN0IGZvcm1hdHRlZERhdGUgPSAoZGF0ZSkgPT4ge1xuXHRcdGxldCBkMjtcblx0XHQvLyBmYWxsYmFjayBmb3IgSUUxMSBhbmQgdW5rbm93biB0aW1lem9uZXNcblx0XHRpZiAodXNlVGltZU9mZnNldCgpKSB7XG5cdFx0XHQvLyB3ZSBhZGp1c3QgdGhlIFVUQyB0aW1lLCBzbyB3ZSBwcmludCB0aGUgYWRqdXN0ZWQgVVRDLCBidXQgbm90IHJlYWxseSBVVEMgdmFsdWVzXG5cdFx0XHRkMiA9IGFkanVzdERhdGUoZGF0ZSwgZ2V0VGltZU9mZnNldCgpKTtcblx0XHRcdHJldHVybiBtYXAoemVyb0ZpbGwsIFtkMi5nZXRVVENGdWxsWWVhcigpLCBkMi5nZXRVVENNb250aCgpICsgMSwgZDIuZ2V0VVRDRGF0ZSgpXSkuam9pbignLScpO1xuXHRcdH1cblx0XHRpZiAoZ2V0TVdEYXRlRm9ybWF0KCkgPT09ICdJU08gODYwMScpIHtcblx0XHRcdGQyID0gY29udmVydFRpbWVab25lKGRhdGUsIGdldFRpbWVab25lKCkpO1xuXHRcdFx0cmV0dXJuIG1hcCh6ZXJvRmlsbCwgW2QyLmdldEZ1bGxZZWFyKCksIGQyLmdldE1vbnRoKCkgKyAxLCBkMi5nZXREYXRlKCldKS5qb2luKCctJyk7XG5cdFx0fVxuXHRcdGNvbnN0IG9wdGlvbnMgPSBnZXRWYWx1ZU9mKCdwb3B1cERhdGVGb3JtYXR0ZXJPcHRpb25zJyk7XG5cdFx0b3B0aW9ucy50aW1lWm9uZSA9IGdldFRpbWVab25lKCk7XG5cdFx0cmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKGdldExvY2FsZXMoKSwgb3B0aW9ucyk7XG5cdH07XG5cdGNvbnN0IGZvcm1hdHRlZFRpbWUgPSAoZGF0ZSkgPT4ge1xuXHRcdGxldCBkMjtcblx0XHQvLyBmYWxsYmFjayBmb3IgSUUxMSBhbmQgdW5rbm93biB0aW1lem9uZXNcblx0XHRpZiAodXNlVGltZU9mZnNldCgpKSB7XG5cdFx0XHQvLyB3ZSBhZGp1c3QgdGhlIFVUQyB0aW1lLCBzbyB3ZSBwcmludCB0aGUgYWRqdXN0ZWQgVVRDLCBidXQgbm90IHJlYWxseSBVVEMgdmFsdWVzXG5cdFx0XHRkMiA9IGFkanVzdERhdGUoZGF0ZSwgZ2V0VGltZU9mZnNldCgpKTtcblx0XHRcdHJldHVybiBtYXAoemVyb0ZpbGwsIFtkMi5nZXRVVENIb3VycygpLCBkMi5nZXRVVENNaW51dGVzKCksIGQyLmdldFVUQ1NlY29uZHMoKV0pLmpvaW4oJzonKTtcblx0XHR9XG5cdFx0aWYgKGdldE1XRGF0ZUZvcm1hdCgpID09PSAnSVNPIDg2MDEnKSB7XG5cdFx0XHRkMiA9IGNvbnZlcnRUaW1lWm9uZShkYXRlLCBnZXRUaW1lWm9uZSgpKTtcblx0XHRcdHJldHVybiBtYXAoemVyb0ZpbGwsIFtkMi5nZXRIb3VycygpLCBkMi5nZXRNaW51dGVzKCksIGQyLmdldFNlY29uZHMoKV0pLmpvaW4oJzonKTtcblx0XHR9XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IGdldFZhbHVlT2YoJ3BvcHVwVGltZUZvcm1hdHRlck9wdGlvbnMnKTtcblx0XHRvcHRpb25zLnRpbWVab25lID0gZ2V0VGltZVpvbmUoKTtcblx0XHRyZXR1cm4gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoZ2V0TG9jYWxlcygpLCBvcHRpb25zKTtcblx0fTtcblx0Ly8gR2V0IHRoZSBwcm9wZXIgZ3JvdXBuYW1lcyBmb3IgdGhlIHRlY2huaWNhbGdyb3Vwc1xuXHRjb25zdCBmZXRjaFVzZXJHcm91cE5hbWVzID0gKHVzZXJpbmZvUmVzcG9uc2UpID0+IHtcblx0XHRjb25zdCBxdWVyeU9iaiA9IGdldEpzT2JqKHVzZXJpbmZvUmVzcG9uc2UpLnF1ZXJ5O1xuXHRcdGNvbnN0IHVzZXIgPSBhbnlDaGlsZChxdWVyeU9iai51c2Vycyk7XG5cdFx0Y29uc3QgbWVzc2FnZXMgPSBbXTtcblx0XHRpZiAodXNlci5ncm91cHMpIHtcblx0XHRcdGZvciAoY29uc3QgZ3JvdXBOYW1lIG9mIHVzZXIuZ3JvdXBzKSB7XG5cdFx0XHRcdGlmICghWycqJywgJ3VzZXInLCAnYXV0b2NvbmZpcm1lZCddLmluY2x1ZGVzKGdyb3VwTmFtZSkpIHtcblx0XHRcdFx0XHRtZXNzYWdlcy5wdXNoKGBncm91cC0ke2dyb3VwTmFtZX0tbWVtYmVyYCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHF1ZXJ5T2JqLmdsb2JhbHVzZXJpbmZvICYmIHF1ZXJ5T2JqLmdsb2JhbHVzZXJpbmZvLmdyb3Vwcykge1xuXHRcdFx0Zm9yIChjb25zdCBncm91cE5hbWUgb2YgcXVlcnlPYmouZ2xvYmFsdXNlcmluZm8uZ3JvdXBzKSB7XG5cdFx0XHRcdG1lc3NhZ2VzLnB1c2goYGdyb3VwLSR7Z3JvdXBOYW1lfS1tZW1iZXJgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGdldE13QXBpKCkubG9hZE1lc3NhZ2VzSWZNaXNzaW5nKG1lc3NhZ2VzKTtcblx0fTtcblx0Y29uc3Qgc2hvd0FQSVByZXZpZXcgPSAocXVlcnlUeXBlLCBodG1sLCBpZCwgbmF2cG9wLCBkb3dubG9hZCkgPT4ge1xuXHRcdC8vIERKOiBkb25lXG5cdFx0bGV0IHRhcmdldCA9ICdwb3B1cFByZXZpZXcnO1xuXHRcdGNvbXBsZXRlZE5hdnBvcFRhc2sobmF2cG9wKTtcblx0XHRzd2l0Y2ggKHF1ZXJ5VHlwZSkge1xuXHRcdFx0Y2FzZSAnaW1hZ2VsaW5rcyc6XG5cdFx0XHRjYXNlICdjYXRlZ29yeSc6XG5cdFx0XHRcdHRhcmdldCA9ICdwb3B1cFBvc3RQcmV2aWV3Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd1c2VyaW5mbyc6XG5cdFx0XHRcdHRhcmdldCA9ICdwb3B1cFVzZXJEYXRhJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdyZXZpc2lvbic6XG5cdFx0XHRcdGluc2VydFByZXZpZXcoZG93bmxvYWQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNldFBvcHVwVGlwc0FuZEhUTUwoaHRtbCwgdGFyZ2V0LCBpZCk7XG5cdH07XG5cdGNvbnN0IEFQSXJldmlzaW9uUHJldmlld0hUTUwgPSAoX2FydGljbGUsIGRvd25sb2FkKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGpzT2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSk7XG5cdFx0XHRjb25zdCBwYWdlID0gYW55Q2hpbGQoanNPYmoucXVlcnkucGFnZXMpO1xuXHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHQvLyBUT0RPIHdlIG5lZWQgdG8gZml4IHRoaXMgcHJvcGVyIGxhdGVyIG9uXG5cdFx0XHRcdGRvd25sb2FkLm93bmVyID0gbnVsbDtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY29udGVudCA9XG5cdFx0XHRcdHBhZ2UgJiYgcGFnZS5yZXZpc2lvbnMgJiYgcGFnZS5yZXZpc2lvbnNbMF0uY29udGVudG1vZGVsID09PSAnd2lraXRleHQnXG5cdFx0XHRcdFx0PyBwYWdlLnJldmlzaW9uc1swXS5jb250ZW50XG5cdFx0XHRcdFx0OiBudWxsO1xuXHRcdFx0aWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRkb3dubG9hZC5kYXRhID0gY29udGVudDtcblx0XHRcdFx0ZG93bmxvYWQubGFzdE1vZGlmaWVkID0gbmV3IERhdGUocGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnUmV2aXNpb24gcHJldmlldyBmYWlsZWQgOignO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgQVBJYmFja2xpbmtzUHJldmlld0hUTUwgPSAoX2FydGljbGUsIGRvd25sb2FkIC8qICwgbmF2cG9wICovKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGpzT2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSk7XG5cdFx0XHRjb25zdCBsaXN0ID0ganNPYmoucXVlcnkuYmFja2xpbmtzO1xuXHRcdFx0bGV0IGh0bWwgPSBbXTtcblx0XHRcdGlmICghbGlzdCkge1xuXHRcdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ05vIGJhY2tsaW5rcyBmb3VuZCcpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGxpc3QpIHtcblx0XHRcdFx0Y29uc3QgdCA9IG5ldyBUaXRsZShlbGVtZW50LnRpdGxlKTtcblx0XHRcdFx0aHRtbC5wdXNoKGA8YSBocmVmPVwiJHtwZy53aWtpLnRpdGxlYmFzZX0ke3QudXJsU3RyaW5nKCl9XCI+JHt0LnRvU3RyaW5nKCkuZW50aWZ5KCl9PC9hPmApO1xuXHRcdFx0fVxuXHRcdFx0aHRtbCA9IGh0bWwuam9pbignLCAnKTtcblx0XHRcdGlmIChqc09iai5jb250aW51ZSAmJiBqc09iai5jb250aW51ZS5ibGNvbnRpbnVlKSB7XG5cdFx0XHRcdGh0bWwgKz0gcG9wdXBTdHJpbmcoJyBhbmQgbW9yZScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGh0bWw7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJ2JhY2tsaW5rc1ByZXZpZXdIVE1MIHdlbnQgd29ua3knO1xuXHRcdH1cblx0fTtcblx0cGcuZm4uQVBJc2hhcmVkSW1hZ2VQYWdlUHJldmlld0hUTUwgPSAob2JqKSA9PiB7XG5cdFx0bG9nKCdBUElzaGFyZWRJbWFnZVBhZ2VQcmV2aWV3SFRNTCcpO1xuXHRcdGNvbnN0IHBvcHVwaWQgPSBvYmoucmVxdWVzdGlkO1xuXHRcdGlmIChvYmoucXVlcnkgJiYgb2JqLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRjb25zdCBwYWdlID0gYW55Q2hpbGQob2JqLnF1ZXJ5LnBhZ2VzKTtcblx0XHRcdGNvbnN0IGNvbnRlbnQgPVxuXHRcdFx0XHRwYWdlICYmIHBhZ2UucmV2aXNpb25zICYmIHBhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnRtb2RlbCA9PT0gJ3dpa2l0ZXh0J1xuXHRcdFx0XHRcdD8gcGFnZS5yZXZpc2lvbnNbMF0uY29udGVudFxuXHRcdFx0XHRcdDogbnVsbDtcblx0XHRcdGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycgJiYgcGcgJiYgcGcuY3VycmVudCAmJiBwZy5jdXJyZW50LmxpbmsgJiYgcGcuY3VycmVudC5saW5rLm5hdnBvcHVwKSB7XG5cdFx0XHRcdC8qIE5vdCBlbnRpcmVseSBzYWZlLCBidXQgdGhlIGJlc3Qgd2UgY2FuIGRvICovXG5cdFx0XHRcdGNvbnN0IHAgPSBuZXcgUHJldmlld21ha2VyKGNvbnRlbnQsIHBnLmN1cnJlbnQubGluay5uYXZwb3B1cC5hcnRpY2xlLCBwZy5jdXJyZW50LmxpbmsubmF2cG9wdXApO1xuXHRcdFx0XHRwLm1ha2VQcmV2aWV3KCk7XG5cdFx0XHRcdHNldFBvcHVwSFRNTChwLmh0bWwsICdwb3B1cFNlY29uZFByZXZpZXcnLCBwb3B1cGlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IEFQSWltYWdlcGFnZVByZXZpZXdIVE1MID0gKGFydGljbGUsIGRvd25sb2FkLCBuYXZwb3ApID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNPYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGNvbnN0IHBhZ2UgPSBhbnlDaGlsZChqc09iai5xdWVyeS5wYWdlcyk7XG5cdFx0XHRjb25zdCBjb250ZW50ID1cblx0XHRcdFx0cGFnZSAmJiBwYWdlLnJldmlzaW9ucyAmJiBwYWdlLnJldmlzaW9uc1swXS5jb250ZW50bW9kZWwgPT09ICd3aWtpdGV4dCdcblx0XHRcdFx0XHQ/IHBhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnRcblx0XHRcdFx0XHQ6IG51bGw7XG5cdFx0XHRsZXQgcmV0ID0gJyc7XG5cdFx0XHRsZXQgYWx0ID0gJyc7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRbe2FsdH1dID0gbmF2cG9wLnBhcmVudEFuY2hvci5jaGlsZE5vZGVzO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHR9XG5cdFx0XHRpZiAoYWx0KSB7XG5cdFx0XHRcdHJldCA9IGAke3JldH08aHI+PGI+JHtwb3B1cFN0cmluZygnQWx0IHRleHQ6Jyl9PC9iPiAke3BnLmVzY2FwZVF1b3Rlc0hUTUwoYWx0KX1gO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRjb25zdCBwID0gcHJlcFByZXZpZXdtYWtlcihjb250ZW50LCBhcnRpY2xlLCBuYXZwb3ApO1xuXHRcdFx0XHRwLm1ha2VQcmV2aWV3KCk7XG5cdFx0XHRcdGlmIChwLmh0bWwpIHtcblx0XHRcdFx0XHRyZXQgKz0gYDxocj4ke3AuaHRtbH1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFN1bW1hcnlEYXRhJykpIHtcblx0XHRcdFx0XHRjb25zdCBpbmZvID0gZ2V0UGFnZUluZm8oY29udGVudCwgZG93bmxvYWQpO1xuXHRcdFx0XHRcdGxvZyhpbmZvKTtcblx0XHRcdFx0XHRzZXRQb3B1cFRyYWlsZXIoaW5mbywgbmF2cG9wLmlkTnVtYmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHBhZ2UgJiYgcGFnZS5pbWFnZXJlcG9zaXRvcnkgPT09ICdzaGFyZWQnKSB7XG5cdFx0XHRcdGNvbnN0IGFydCA9IG5ldyBUaXRsZShhcnRpY2xlKTtcblx0XHRcdFx0Y29uc3QgZW5jYXJ0ID0gZW5jb2RlVVJJQ29tcG9uZW50KGBGaWxlOiR7YXJ0LnN0cmlwTmFtZXNwYWNlKCl9YCk7XG5cdFx0XHRcdGNvbnN0IHNoYXJlZF91cmwgPVxuXHRcdFx0XHRcdGAke3BnLndpa2kuYXBpY29tbW9uc2Jhc2V9P2Zvcm1hdD1qc29uJmZvcm1hdHZlcnNpb249MmAgK1xuXHRcdFx0XHRcdCcmY2FsbGJhY2s9cGcuZm4uQVBJc2hhcmVkSW1hZ2VQYWdlUHJldmlld0hUTUwnICtcblx0XHRcdFx0XHRgJnJlcXVlc3RpZD0ke25hdnBvcC5pZE51bWJlcn0mYWN0aW9uPXF1ZXJ5JnByb3A9cmV2aXNpb25zJnJ2cHJvcD1jb250ZW50JnRpdGxlcz0ke2VuY2FydH1gO1xuXHRcdFx0XHRyZXQgPSBgJHtyZXR9PGhyPiR7cG9wdXBTdHJpbmcoJ0ltYWdlIGZyb20gQ29tbW9ucycpfTogPGEgaHJlZj1cIiR7XG5cdFx0XHRcdFx0cGcud2lraS5jb21tb25zYmFzZVxuXHRcdFx0XHR9P3RpdGxlPSR7ZW5jYXJ0fVwiPiR7cG9wdXBTdHJpbmcoJ0Rlc2NyaXB0aW9uIHBhZ2UnKX08L2E+YDtcblx0XHRcdFx0bXcubG9hZGVyLmxvYWQoc2hhcmVkX3VybCk7XG5cdFx0XHR9XG5cdFx0XHRzaG93QVBJUHJldmlldygnaW1hZ2VsaW5rcycsIEFQSWltYWdlbGlua3NQcmV2aWV3SFRNTChhcnRpY2xlLCBkb3dubG9hZCksIG5hdnBvcC5pZE51bWJlciwgZG93bmxvYWQpO1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiAnQVBJIGltYWdlcGFnZSBwcmV2aWV3IGZhaWxlZCA6KCc7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBBUElpbWFnZWxpbmtzUHJldmlld0hUTUwgPSAoX2FydGljbGUsIGRvd25sb2FkKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGpzb2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSk7XG5cdFx0XHRjb25zdCBsaXN0ID0ganNvYmoucXVlcnkuaW1hZ2V1c2FnZTtcblx0XHRcdGlmIChsaXN0KSB7XG5cdFx0XHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgbGlzdCkge1xuXHRcdFx0XHRcdHJldC5wdXNoKGVsZW1lbnQudGl0bGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZXQubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBvcHVwU3RyaW5nKCdObyBpbWFnZSBsaW5rcyBmb3VuZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBgPGgyPiR7cG9wdXBTdHJpbmcoJ0ZpbGUgbGlua3MnKX08L2gyPiR7bGlua0xpc3QocmV0KX1gO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHBvcHVwU3RyaW5nKCdObyBpbWFnZSBsaW5rcyBmb3VuZCcpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICdJbWFnZSBsaW5rcyBwcmV2aWV3IGdlbmVyYXRpb24gZmFpbGVkIDooJztcblx0XHR9XG5cdH07XG5cdGNvbnN0IEFQSWNhdGVnb3J5UHJldmlld0hUTUwgPSAoX2FydGljbGUsIGRvd25sb2FkKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGpzb2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSk7XG5cdFx0XHRjb25zdCBsaXN0ID0ganNvYmoucXVlcnkuY2F0ZWdvcnltZW1iZXJzO1xuXHRcdFx0bGV0IHJldCA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGxpc3QpIHtcblx0XHRcdFx0cmV0LnB1c2goZWxlbWVudC50aXRsZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAocmV0Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gcG9wdXBTdHJpbmcoJ0VtcHR5IGNhdGVnb3J5Jyk7XG5cdFx0XHR9XG5cdFx0XHRyZXQgPSBgPGgyPiR7dHByaW50ZignQ2F0ZWdvcnkgbWVtYmVycyAoJXMgc2hvd24pJywgW3JldC5sZW5ndGhdKX08L2gyPiR7bGlua0xpc3QocmV0KX1gO1xuXHRcdFx0aWYgKGpzb2JqLmNvbnRpbnVlICYmIGpzb2JqLmNvbnRpbnVlLmNtY29udGludWUpIHtcblx0XHRcdFx0cmV0ICs9IHBvcHVwU3RyaW5nKCcgYW5kIG1vcmUnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm4gJ0NhdGVnb3J5IHByZXZpZXcgZmFpbGVkIDooJztcblx0XHR9XG5cdH07XG5cdGNvbnN0IEFQSXVzZXJJbmZvUHJldmlld0hUTUwgPSAoX2FydGljbGUsIGRvd25sb2FkKSA9PiB7XG5cdFx0bGV0IHJldCA9IFtdO1xuXHRcdGxldCBxdWVyeW9iaiA9IHt9O1xuXHRcdHRyeSB7XG5cdFx0XHRxdWVyeW9iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpLnF1ZXJ5O1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICdVc2VyaW5mbyBwcmV2aWV3IGZhaWxlZCA6KCc7XG5cdFx0fVxuXHRcdGNvbnN0IHVzZXIgPSBhbnlDaGlsZChxdWVyeW9iai51c2Vycyk7XG5cdFx0aWYgKHVzZXIpIHtcblx0XHRcdGNvbnN0IHtnbG9iYWx1c2VyaW5mb30gPSBxdWVyeW9iajtcblx0XHRcdGlmICh1c2VyLmludmFsaWQgPT09ICcnKSB7XG5cdFx0XHRcdHJldC5wdXNoKHBvcHVwU3RyaW5nKCdJbnZhbGlkIHVzZXInKSk7XG5cdFx0XHR9IGVsc2UgaWYgKHVzZXIubWlzc2luZyA9PT0gJycpIHtcblx0XHRcdFx0cmV0LnB1c2gocG9wdXBTdHJpbmcoJ05vdCBhIHJlZ2lzdGVyZWQgdXNlcm5hbWUnKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodXNlci5ibG9ja2VkYnkpIHtcblx0XHRcdFx0aWYgKHVzZXIuYmxvY2twYXJ0aWFsKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goYDxiPiR7cG9wdXBTdHJpbmcoJ0hhcyBibG9ja3MnKX08L2I+YCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goYDxiPiR7cG9wdXBTdHJpbmcoJ0JMT0NLRUQnKX08L2I+YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChnbG9iYWx1c2VyaW5mbyAmJiAoJ2xvY2tlZCcgaW4gZ2xvYmFsdXNlcmluZm8gfHwgJ2hpZGRlbicgaW4gZ2xvYmFsdXNlcmluZm8pKSB7XG5cdFx0XHRcdGxldCBsb2NrZWRTdWxBY2NvdW50SXNBdHRhY2hlZFRvVGhpcyA9IHRydWU7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBnbG9iYWx1c2VyaW5mby51bmF0dGFjaGVkICYmIGkgPCBnbG9iYWx1c2VyaW5mby51bmF0dGFjaGVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGdsb2JhbHVzZXJpbmZvLnVuYXR0YWNoZWRbaV0ud2lraSA9PT0gbXcuY29uZmlnLmdldCgnd2dEQm5hbWUnKSkge1xuXHRcdFx0XHRcdFx0bG9ja2VkU3VsQWNjb3VudElzQXR0YWNoZWRUb1RoaXMgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobG9ja2VkU3VsQWNjb3VudElzQXR0YWNoZWRUb1RoaXMpIHtcblx0XHRcdFx0XHRpZiAoJ2xvY2tlZCcgaW4gZ2xvYmFsdXNlcmluZm8pIHtcblx0XHRcdFx0XHRcdHJldC5wdXNoKGA8Yj48aT4ke3BvcHVwU3RyaW5nKCdMT0NLRUQnKX08L2k+PC9iPmApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoJ2hpZGRlbicgaW4gZ2xvYmFsdXNlcmluZm8pIHtcblx0XHRcdFx0XHRcdHJldC5wdXNoKGA8Yj48aT4ke3BvcHVwU3RyaW5nKCdISURERU4nKX08L2k+PC9iPmApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwU2hvd0dlbmRlcicpICYmIHVzZXIuZ2VuZGVyKSB7XG5cdFx0XHRcdHN3aXRjaCAodXNlci5nZW5kZXIpIHtcblx0XHRcdFx0XHRjYXNlICdtYWxlJzpcblx0XHRcdFx0XHRcdHJldC5wdXNoKGAke3BvcHVwU3RyaW5nKCdoZS9oaW0nKX0gwrcgYCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdmZW1hbGUnOlxuXHRcdFx0XHRcdFx0cmV0LnB1c2goYCR7cG9wdXBTdHJpbmcoJ3NoZS9oZXInKX0gwrcgYCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHVzZXIuZ3JvdXBzKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZ3JvdXBOYW1lIG9mIHVzZXIuZ3JvdXBzKSB7XG5cdFx0XHRcdFx0aWYgKCFbJyonLCAndXNlcicsICdhdXRvY29uZmlybWVkJ10uaW5jbHVkZXMoZ3JvdXBOYW1lKSkge1xuXHRcdFx0XHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdFx0Ly8gKiBzZWUgW1tTcGVjaWFsOlByZWZpeEluZGV4L01lZGlhV2lraTpHcm91cC1dXVxuXHRcdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdFx0cmV0LnB1c2gocGcuZXNjYXBlUXVvdGVzSFRNTChtdy5tZXNzYWdlKGBncm91cC0ke2dyb3VwTmFtZX0tbWVtYmVyYCwgdXNlci5nZW5kZXIpLnRleHQoKSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGdsb2JhbHVzZXJpbmZvICYmIGdsb2JhbHVzZXJpbmZvLmdyb3Vwcykge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGdyb3VwTmFtZSBvZiBnbG9iYWx1c2VyaW5mby5ncm91cHMpIHtcblx0XHRcdFx0XHRyZXQucHVzaChcblx0XHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHRcdC8vICogc2VlIFtbU3BlY2lhbDpQcmVmaXhJbmRleC9NZWRpYVdpa2k6R3JvdXAtXV1cblx0XHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHRcdGA8aT4ke3BnLmVzY2FwZVF1b3Rlc0hUTUwobXcubWVzc2FnZShgZ3JvdXAtJHtncm91cE5hbWV9LW1lbWJlcmAsIHVzZXIuZ2VuZGVyKS50ZXh0KCkpfTwvaT5gXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHVzZXIucmVnaXN0cmF0aW9uKSB7XG5cdFx0XHRcdHJldC5wdXNoKFxuXHRcdFx0XHRcdHBnLmVzY2FwZVF1b3Rlc0hUTUwoXG5cdFx0XHRcdFx0XHQodXNlci5lZGl0Y291bnQgPz8gJzAnKSArXG5cdFx0XHRcdFx0XHRcdHBvcHVwU3RyaW5nKCcgZWRpdHMgc2luY2U6ICcpICtcblx0XHRcdFx0XHRcdFx0KHVzZXIucmVnaXN0cmF0aW9uID8gZm9ybWF0dGVkRGF0ZShuZXcgRGF0ZSh1c2VyLnJlZ2lzdHJhdGlvbikpIDogJycpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAocXVlcnlvYmoudXNlcmNvbnRyaWJzICYmIHF1ZXJ5b2JqLnVzZXJjb250cmlicy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXQucHVzaChwb3B1cFN0cmluZygnbGFzdCBlZGl0IG9uICcpICsgZm9ybWF0dGVkRGF0ZShuZXcgRGF0ZShxdWVyeW9iai51c2VyY29udHJpYnNbMF0udGltZXN0YW1wKSkpO1xuXHRcdH1cblx0XHRpZiAocXVlcnlvYmouYmxvY2tzKSB7XG5cdFx0XHRyZXQucHVzaChwb3B1cFN0cmluZygnSVAgdXNlcicpKTsgLy8gd2Ugb25seSByZXF1ZXN0IGxpc3Q9YmxvY2tzIGZvciBJUHNcblx0XHRcdGZvciAobGV0IGwgPSAwOyBsIDwgcXVlcnlvYmouYmxvY2tzLmxlbmd0aDsgbCsrKSB7XG5cdFx0XHRcdGxldCByYnN0ciA9IHF1ZXJ5b2JqLmJsb2Nrc1tsXS5yYW5nZXN0YXJ0ID09PSBxdWVyeW9iai5ibG9ja3NbbF0ucmFuZ2VlbmQgPyAnQkxPQ0snIDogJ1JBTkdFQkxPQ0snO1xuXHRcdFx0XHRyYnN0ciA9IEFycmF5LmlzQXJyYXkocXVlcnlvYmouYmxvY2tzW2xdLnJlc3RyaWN0aW9ucykgPyBgJHtyYnN0cn1FRGAgOiBgSGFzICR7cmJzdHIudG9Mb3dlckNhc2UoKX1zYDtcblx0XHRcdFx0cmV0LnB1c2goYDxiPiR7cG9wdXBTdHJpbmcocmJzdHIpfTwvYj5gKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gaWYgYW55IGVsZW1lbnQgb2YgcmV0IGVuZHMgd2l0aCAnIMK3ICcsIG1lcmdlIGl0IHdpdGggdGhlIG5leHQgZWxlbWVudCB0byBhdm9pZFxuXHRcdC8vIHRoZSAuam9pbignLCAnKSBjYWxsIGluc2VydGluZyBhIGNvbW1hIGFmdGVyIGl0XG5cdFx0Zm9yIChsZXQgbSA9IDA7IG0gPCByZXQubGVuZ3RoIC0gMTsgbSsrKSB7XG5cdFx0XHRpZiAocmV0W21dLmxlbmd0aCA+IDMgJiYgcmV0W21dLnNsaWNlKE1hdGgubWF4KDAsIHJldFttXS5sZW5ndGggLSAzKSkgPT09ICcgwrcgJykge1xuXHRcdFx0XHRyZXRbbV0gKz0gcmV0W20gKyAxXTtcblx0XHRcdFx0cmV0LnNwbGljZShtICsgMSwgMSk7IC8vIGRlbGV0ZSBlbGVtZW50IGF0IGluZGV4IG0rMVxuXHRcdFx0XHRtLS07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldCA9IGA8aHI+JHtyZXQuam9pbignLCAnKX1gO1xuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IEFQSWNvbnRyaWJzUHJldmlld0hUTUwgPSAoYXJ0aWNsZSwgZG93bmxvYWQsIG5hdnBvcCkgPT4ge1xuXHRcdHJldHVybiBBUEloaXN0b3J5UHJldmlld0hUTUwoYXJ0aWNsZSwgZG93bmxvYWQsIG5hdnBvcCwgdHJ1ZSk7XG5cdH07XG5cdGNvbnN0IEFQSWhpc3RvcnlQcmV2aWV3SFRNTCA9IChhcnRpY2xlLCBkb3dubG9hZCwgX25hdnBvcCwgcmVhbGx5Q29udHJpYnMpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QganNvYmogPSBnZXRKc09iaihkb3dubG9hZC5kYXRhKTtcblx0XHRcdGxldCBlZGl0cyA9IFtdO1xuXHRcdFx0ZWRpdHMgPSByZWFsbHlDb250cmlicyA/IGpzb2JqLnF1ZXJ5LnVzZXJjb250cmlicyA6IGFueUNoaWxkKGpzb2JqLnF1ZXJ5LnBhZ2VzKS5yZXZpc2lvbnM7XG5cdFx0XHRjb25zdCByZXQgPSBlZGl0UHJldmlld1RhYmxlKGFydGljbGUsIGVkaXRzLCByZWFsbHlDb250cmlicyk7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuICdIaXN0b3J5IHByZXZpZXcgZmFpbGVkIDotKCc7XG5cdFx0fVxuXHR9O1xuXHQvLyBFTkRGSUxFOiBxdWVyeXByZXZpZXcuanNcblx0Ly8gU1RBUlRGSUxFOiBkZWJ1Zy5qc1xuXHQvLyBEZWJ1Z2dpbmcgZnVuY3Rpb25zXG5cdGNvbnN0IHNldHVwRGVidWdnaW5nID0gKCkgPT4ge1xuXHRcdGlmICh3aW5kb3cucG9wdXBEZWJ1Zykge1xuXHRcdFx0Ly8gcG9wdXBEZWJ1ZyBpcyBzZXQgZnJvbSAudmVyc2lvblxuXHRcdFx0d2luZG93LmxvZyA9ICh4KSA9PiB7XG5cdFx0XHRcdC8vIGlmIChnIE1zZyAhPT0gJycpIHsgZ01zZyArPSAnXFxuJzsgZ01zZys9dGltZSgpICsgJyAnICsgeDsgfVxuXHRcdFx0XHRjb25zb2xlLmxvZyh4KTtcblx0XHRcdH07XG5cdFx0XHR3aW5kb3cuZXJybG9nID0gKHgpID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgW1BvcHVwc10gJHt4fWApO1xuXHRcdFx0fTtcblx0XHRcdGxvZygnSW5pdGlhbGl6aW5nIGxvZ2dlcicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cubG9nID0gKCkgPT4ge307XG5cdFx0XHR3aW5kb3cuZXJybG9nID0gKCkgPT4ge307XG5cdFx0fVxuXHR9O1xuXHQvLyBFTkRGSUxFOiBkZWJ1Zy5qc1xuXHQvLyBTVEFSVEZJTEU6IGltYWdlcy5qc1xuXHQvLyBsb2FkIGltYWdlIG9mIHR5cGUgVGl0bGUuXG5cdGNvbnN0IGxvYWRJbWFnZSA9IChpbWFnZSwgbmF2cG9wKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBpbWFnZS5zdHJpcE5hbWVzcGFjZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoJ2xvYWRJbWFnZXMgYmFkJywge3RhZzogJ3BvcHVwcycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHR9XG5cdFx0Ly8gQVBJIGNhbGwgdG8gcmV0cmlldmUgaW1hZ2UgaW5mby5cblx0XHRpZiAoIWdldFZhbHVlT2YoJ3BvcHVwSW1hZ2VzJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFpc1ZhbGlkSW1hZ2VOYW1lKGltYWdlLnRvU3RyaW5nKCkpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IGFydCA9IGltYWdlLnVybFN0cmluZygpO1xuXHRcdGxldCB1cmwgPSBgJHtwZy53aWtpLmFwaXdpa2liYXNlfT9mb3JtYXQ9anNvbiZmb3JtYXR2ZXJzaW9uPTImYWN0aW9uPXF1ZXJ5YDtcblx0XHR1cmwgKz0gYCZwcm9wPWltYWdlaW5mbyZpaXByb3A9dXJsfG1pbWUmaWl1cmx3aWR0aD0ke2dldFZhbHVlT2YoJ3BvcHVwSW1hZ2VTaXplTGFyZ2UnKX1gO1xuXHRcdHVybCArPSBgJnRpdGxlcz0ke2FydH1gO1xuXHRcdHBlbmRpbmdOYXZwb3BUYXNrKG5hdnBvcCk7XG5cdFx0Y29uc3QgY2FsbGJhY2sgPSAoZCkgPT4ge1xuXHRcdFx0cG9wdXBzSW5zZXJ0SW1hZ2UobmF2cG9wLmlkTnVtYmVyLCBuYXZwb3AsIGQpO1xuXHRcdH07XG5cdFx0Y29uc3QgZ28gPSAoKSA9PiB7XG5cdFx0XHRnZXRQYWdlV2l0aENhY2hpbmcodXJsLCBjYWxsYmFjaywgbmF2cG9wKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cdFx0aWYgKG5hdnBvcC52aXNpYmxlIHx8ICFnZXRWYWx1ZU9mKCdwb3B1cExhenlEb3dubG9hZHMnKSkge1xuXHRcdFx0Z28oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmF2cG9wLmFkZEhvb2soZ28sICd1bmhpZGUnLCAnYWZ0ZXInLCAnRE9XTkxPQURfSU1BR0VfUVVFUllfREFUQScpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcG9wdXBzSW5zZXJ0SW1hZ2UgPSAoaWQsIF9uYXZwb3AsIGRvd25sb2FkKSA9PiB7XG5cdFx0bG9nKCdwb3B1cHNJbnNlcnRJbWFnZScpO1xuXHRcdGxldCBpbWFnZWluZm87XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGpzT2JqID0gZ2V0SnNPYmooZG93bmxvYWQuZGF0YSk7XG5cdFx0XHRjb25zdCBpbWFnZXBhZ2UgPSBhbnlDaGlsZChqc09iai5xdWVyeS5wYWdlcyk7XG5cdFx0XHRpZiAoaW1hZ2VwYWdlLmltYWdlaW5mbyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdFtpbWFnZWluZm9dID0gaW1hZ2VwYWdlLmltYWdlaW5mbztcblx0XHR9IGNhdGNoIHtcblx0XHRcdGxvZygncG9wdXBzSW5zZXJ0SW1hZ2UgZmFpbGVkIDooJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHBvcHVwSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcG9wdXBJbWcke2lkfWApO1xuXHRcdGlmICghcG9wdXBJbWFnZSkge1xuXHRcdFx0bG9nKCdjb3VsZCBub3QgZmluZCBpbnNlcnRpb24gcG9pbnQgZm9yIGltYWdlJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHBvcHVwSW1hZ2Uud2lkdGggPSBnZXRWYWx1ZU9mKCdwb3B1cEltYWdlU2l6ZScpO1xuXHRcdHBvcHVwSW1hZ2Uuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHRcdC8vIFNldCB0aGUgc291cmNlIGZvciB0aGUgaW1hZ2UuXG5cdFx0aWYgKGltYWdlaW5mby50aHVtYnVybCkge1xuXHRcdFx0cG9wdXBJbWFnZS5zcmMgPSBpbWFnZWluZm8udGh1bWJ1cmw7XG5cdFx0fSBlbHNlIGlmIChpbWFnZWluZm8ubWltZS5pbmRleE9mKCdpbWFnZScpID09PSAwKSB7XG5cdFx0XHRwb3B1cEltYWdlLnNyYyA9IGltYWdlaW5mby51cmw7XG5cdFx0XHRsb2coJ2EgdGh1bWIgY291bGQgbm90IGJlIGZvdW5kLCB1c2luZyBvcmlnaW5hbCBpbWFnZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsb2coXCJmdWxsc2l6ZSBpbWFnZXRodW1iLCBidXQgbm90IHN1cmUgaWYgaXQncyBhbiBpbWFnZVwiKTtcblx0XHR9XG5cdFx0Y29uc3QgYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwb3B1cEltYWdlTGluayR7aWR9YCk7XG5cdFx0aWYgKGEgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHQvLyBEZXRlcm1pbmUgdGhlIGFjdGlvbiBvZiB0aGUgc3Vycm91ZGluZyBpbWFnZWxpbmsuXG5cdFx0c3dpdGNoIChnZXRWYWx1ZU9mKCdwb3B1cFRodW1iQWN0aW9uJykpIHtcblx0XHRcdGNhc2UgJ2ltYWdlcGFnZSc6XG5cdFx0XHRcdGlmIChwZy5jdXJyZW50LmFydGljbGUubmFtZXNwYWNlSWQoKSAhPT0gcGcubnNJbWFnZUlkKSB7XG5cdFx0XHRcdFx0YS5ocmVmID0gaW1hZ2VpbmZvLmRlc2NyaXB0aW9udXJsO1xuXHRcdFx0XHRcdC8vIEZJWE1FOiB1bnJlbGlhYmxlIHBnLmlkTnVtYmVyXG5cdFx0XHRcdFx0cG9wVGlwc1Nvb25GbihgcG9wdXBJbWFnZSR7aWR9YCkoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdFx0Y2FzZSAnc2l6ZXRvZ2dsZSc6XG5cdFx0XHRcdGEub25jbGljayA9IHRvZ2dsZVNpemU7XG5cdFx0XHRcdGEudGl0bGUgPSBwb3B1cFN0cmluZygnVG9nZ2xlIGltYWdlIHNpemUnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0Y2FzZSAnbGlua2Z1bGwnOlxuXHRcdFx0XHRhLmhyZWYgPSBpbWFnZWluZm8udXJsO1xuXHRcdFx0XHRhLnRpdGxlID0gcG9wdXBTdHJpbmcoJ09wZW4gZnVsbC1zaXplIGltYWdlJyk7XG5cdFx0fVxuXHR9O1xuXHQvLyBUb2dnbGVzIHRoZSBpbWFnZSBiZXR3ZWVuIGlubGluZSBzbWFsbCBhbmQgbmF2cG9wIGZ1bGx3aWR0aC5cblx0Ly8gSXQncyB0aGUgc2FtZSBpbWFnZSwgbm8gYWN0dWFsIHNpemVjaGFuZ2Ugb2NjdXJzLCBvbmx5IGRpc3BsYXkgd2lkdGguXG5cdGNvbnN0IHRvZ2dsZVNpemUgPSBmdW5jdGlvbiB0b2dnbGVTaXplKCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGlmICghc2VsZikge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoJ3NlbGYgaXMgbnVsbCA6LycsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGltZyA9IHNlbGYuZmlyc3RDaGlsZDtcblx0XHRpZiAoIWltZykge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoJ2ltZyBpcyBudWxsIDovJywge3RhZzogJ3BvcHVwcycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW1nLnN0eWxlLndpZHRoID0gIWltZy5zdHlsZS53aWR0aCB8fCBpbWcuc3R5bGUud2lkdGggPT09ICcnID8gJzEwMCUnIDogJyc7XG5cdH07XG5cdC8vIFJldHVybnMgb25lIHRpdGxlIG9mIGFuIGltYWdlIGZyb20gd2lraVRleHQuXG5cdGNvbnN0IGdldFZhbGlkSW1hZ2VGcm9tV2lraVRleHQgPSAod2lraVRleHQpID0+IHtcblx0XHQvLyBuYiBpbiBwZy5yZS5pbWFnZSB3ZSdyZSBpbnRlcmVzdGVkIGluIHRoZSBzZWNvbmQgYnJhY2tldGVkIGV4cHJlc3Npb25cblx0XHQvLyB0aGlzIG1heSBjaGFuZ2UgaWYgdGhlIHJlZ2V4IGNoYW5nZXMgOi0oXG5cdFx0Ly8gbGV0IG1hdGNoPXBnLnJlLmltYWdlLmV4ZWMod2lraVRleHQpO1xuXHRcdGxldCBtYXRjaGVkO1xuXHRcdGxldCBtYXRjaDtcblx0XHQvLyBzdHJpcCBodG1sIGNvbW1lbnRzLCB1c2VkIGJ5IGV2aWwgYm90cyA6LShcblx0XHRjb25zdCB0ID0gcmVtb3ZlTWF0Y2hlc1VubGVzcyh3aWtpVGV4dCwgLyg8IS0tW1xcU1xcc10qPy0tPikvLCAxLCAvXjwhLS1bXltdKnBvcHVwL2kpO1xuXHRcdHdoaWxlICgobWF0Y2ggPSBwZy5yZS5pbWFnZS5leGVjKHQpKSAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gbm93IGZpbmQgYSBzYW5lIGltYWdlIG5hbWUgLSBleGNsdWRlIHRlbXBsYXRlcyBieSBzZWVraW5nIHtcblx0XHRcdGNvbnN0IG0gPSBtYXRjaFsyXSB8fCBtYXRjaFs2XTtcblx0XHRcdGlmIChpc1ZhbGlkSW1hZ2VOYW1lKG0pKSB7XG5cdFx0XHRcdG1hdGNoZWQgPSBtO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cGcucmUuaW1hZ2UubGFzdEluZGV4ID0gMDtcblx0XHRpZiAoIW1hdGNoZWQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gYCR7bXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJylbcGcubnNJbWFnZUlkXX06JHt1cGNhc2VGaXJzdChtYXRjaGVkKX1gO1xuXHR9O1xuXHRjb25zdCByZW1vdmVNYXRjaGVzVW5sZXNzID0gKHN0ciwgcmUxLCBwYXJlbmNvdW50LCByZTIpID0+IHtcblx0XHRjb25zdCBzcGxpdCA9IHN0ci5zcGxpdChyZTEpO1xuXHRcdGNvbnN0IGMgPSBwYXJlbmNvdW50ICsgMTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoaSAlIGMgPT09IDAgfHwgcmUyLnRlc3Qoc3BsaXRbaV0pKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0c3BsaXRbaV0gPSAnJztcblx0XHR9XG5cdFx0cmV0dXJuIHNwbGl0LmpvaW4oJycpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBpbWFnZXMuanNcblx0Ly8gU1RBUlRGSUxFOiBuYW1lc3BhY2VzLmpzXG5cdC8vIFNldCB1cCBuYW1lc3BhY2VzIGFuZCBvdGhlciBub24tc3RyaW5ncy5qcyBsb2NhbGl6YXRpb25cblx0Ly8gKGN1cnJlbnRseSB0aGF0IG1lYW5zIHJlZGlycyB0b28pXG5cdGNvbnN0IHNldE5hbWVzcGFjZXMgPSAoKSA9PiB7XG5cdFx0cGcubnNTcGVjaWFsSWQgPSAtMTtcblx0XHRwZy5uc01haW5zcGFjZUlkID0gMDtcblx0XHRwZy5uc0ltYWdlSWQgPSA2O1xuXHRcdHBnLm5zVXNlcklkID0gMjtcblx0XHRwZy5uc1VzZXJ0YWxrSWQgPSAzO1xuXHRcdHBnLm5zQ2F0ZWdvcnlJZCA9IDE0O1xuXHRcdHBnLm5zVGVtcGxhdGVJZCA9IDEwO1xuXHR9O1xuXHRjb25zdCBzZXRSZWRpcnMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgciA9ICdyZWRpcmVjdCc7XG5cdFx0Y29uc3QgUiA9ICdSRURJUkVDVCc7XG5cdFx0Y29uc3QgcmVkaXJMaXN0cyA9IHtcblx0XHRcdGFyOiBbUiwgJ9iq2K3ZiNmK2YQnXSxcblx0XHRcdGJlOiBbciwgJ9C/0LXRgNCw0L3QsNC60ZbRgNCw0LLQsNC90YzQvdC1J10sXG5cdFx0XHRiZzogW3IsICfQv9GA0LXQvdCw0YHQvtGH0LLQsNC90LUnLCAn0LLQuNC2J10sXG5cdFx0XHRiczogW3IsICdQcmV1c21qZXJpJywgJ3ByZXVzbWplcmknLCAnUFJFVVNNSkVSSSddLFxuXHRcdFx0Ym46IFtSLCAn4Kaq4KeB4Kao4Kaw4KeN4Kao4Ka/4Kaw4KeN4Kam4KeH4Ka2J10sXG5cdFx0XHRjczogW1IsICdQxZhFU03EmlJVSiddLFxuXHRcdFx0Y3k6IFtyLCAnYWlsLWN5ZmVpcmlvJ10sXG5cdFx0XHRkZTogW1IsICdXRUlURVJMRUlUVU5HJ10sXG5cdFx0XHRlbDogW1IsICfOkc6dzpHOms6RzqTOlc6lzpjOpc6dzqPOlyddLFxuXHRcdFx0ZW86IFtSLCAnQUxJRElSRUtUVScsICdBTElESVJFS1RJJ10sXG5cdFx0XHRlczogW1IsICdSRURJUkVDQ0nDk04nXSxcblx0XHRcdGV0OiBbciwgJ3N1dW5hJ10sXG5cdFx0XHRnYTogW3IsICdhdGhzaGVvbGFkaCddLFxuXHRcdFx0Z2w6IFtyLCAnUkVESVJFQ0NJw5NOJywgJ1JFRElSRUNJT05BTUVOVE8nXSxcblx0XHRcdGhlOiBbUiwgJ9eU16TXoNeZ15QnXSxcblx0XHRcdGh1OiBbUiwgJ8OBVElSw4FOWcONVMOBUyddLFxuXHRcdFx0aXM6IFtyLCAndGlsdsOtc3VuJywgJ1RJTFbDjVNVTiddLFxuXHRcdFx0aXQ6IFtSLCAnUklOVklBJywgJ1JpbnZpYSddLFxuXHRcdFx0amE6IFtSLCAn6Lui6YCBJ10sXG5cdFx0XHRtazogW3IsICfQv9GA0LXQvdCw0YHQvtGH0YPQstCw0ZrQtScsICfQstC40LTQuCddLFxuXHRcdFx0bmRzOiBbciwgJ3dpZWRlcmxlaWRlbiddLFxuXHRcdFx0J25kcy1ubCc6IFtSLCAnREVVUlZFUldJRVpJTkcnLCAnRFVVUlZFUldJRVpJTkcnXSxcblx0XHRcdG5sOiBbUiwgJ0RPT1JWRVJXSUpaSU5HJ10sXG5cdFx0XHRubjogW3IsICdvbWRpcmlnZXInXSxcblx0XHRcdHBsOiBbUiwgJ1BBVFJaJywgJ1BSWkVLSUVSVUonLCAnVEFNJ10sXG5cdFx0XHRwdDogW1IsICdyZWRpciddLFxuXHRcdFx0cnU6IFtSLCAn0J/QldCg0JXQndCQ0J/QoNCQ0JLQm9CV0J3QmNCVJywgJ9Cf0JXQoNCV0J3QkNCf0KAnXSxcblx0XHRcdHNrOiBbciwgJ3ByZXNtZXJ1aiddLFxuXHRcdFx0c3I6IFtyLCAn0J/RgNC10YPRgdC80LXRgNC4JywgJ9C/0YDQtdGD0YHQvNC10YDQuCcsICfQn9Cg0JXQo9Ch0JzQldCg0JgnLCAnUHJldXNtZXJpJywgJ3ByZXVzbWVyaScsICdQUkVVU01FUkknXSxcblx0XHRcdHR0OiBbUiwgJ3nDvG7DpGx0w7wnLCAn0L/QtdGA0LXQvdCw0L/RgNCw0LLQu9C10L3QuNC1JywgJ9C/0LXRgNC10L3QsNC/0YAnXSxcblx0XHRcdHVrOiBbUiwgJ9Cf0JXQoNCV0J3QkNCf0KDQkNCS0JvQldCd0J3QrycsICfQn9CV0KDQldCd0JDQn9CgJ10sXG5cdFx0XHR2aTogW3IsICfEkeG7lWknXSxcblx0XHRcdHlpOiBbUiwgJ9eV15XXmdeZ15jXoteo16TXmdeo158nXSxcblx0XHRcdHpoOiBbUiwgJ+mHjeWumuWQkSddLCAvLyBubyBjb21tYVxuXHRcdH07XG5cdFx0Y29uc3QgcmVkaXJMaXN0ID0gcmVkaXJMaXN0c1twZy53aWtpLmxhbmddIHx8IFtyLCBSXTtcblx0XHQvLyBNZWRpYXdpa2kgaXMgdmVyeSB0b2xlcmFudCBhYm91dCB3aGF0IGNvbWVzIGFmdGVyIHRoZSAjcmVkaXJlY3QgYXQgdGhlIHN0YXJ0XG5cdFx0cGcucmUucmVkaXJlY3QgPSBuZXcgUmVnRXhwKFxuXHRcdFx0YF5cXFxccypbI10oJHtyZWRpckxpc3Quam9pbignfCcpfSkuKj9cXFxcW3syfShbXlxcXFx8XFxcXF1dKikofFteXFxcXF1dKik/XFxcXF17Mn1cXFxccyooLiopYCxcblx0XHRcdCdpJ1xuXHRcdCk7XG5cdH07XG5cdGNvbnN0IHNldEludGVyd2lraSA9ICgpID0+IHtcblx0XHRpZiAocGcud2lraS53aWtpbWVkaWEpIHtcblx0XHRcdC8vIEZyb20ge0BsaW5rIGh0dHBzOi8vbWV0YS53aWtpbWVkaWEub3JnL3dpa2kvTGlzdF9vZl9XaWtpcGVkaWFzfVxuXHRcdFx0Ly8ge0BsaW5rIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93L2FwaS5waHA/YWN0aW9uPXNpdGVtYXRyaXgmZm9ybWF0PWpzb24mc210eXBlPWxhbmd1YWdlJnNtbGFuZ3Byb3A9Y29kZSZmb3JtYXR2ZXJzaW9uPTJ9XG5cdFx0XHRwZy53aWtpLmludGVyd2lraSA9XG5cdFx0XHRcdCdhYXxhYnxhY2V8YWZ8YWt8YWxzfGFtfGFufGFuZ3xhcnxhcmN8YXJ6fGFzfGFzdHxhdnxheXxhenxiYXxiYXJ8YmF0LXNtZ3xiY2x8YmV8YmUteC1vbGR8Ymd8Ymh8Yml8YmpufGJtfGJufGJvfGJweXxicnxic3xidWd8YnhyfGNhfGNiay16YW18Y2RvfGNlfGNlYnxjaHxjaG98Y2hyfGNoeXxja2J8Y298Y3J8Y3JofGNzfGNzYnxjdXxjdnxjeXxkYXxkZXxkaXF8ZHNifGR2fGR6fGVlfGVsfGVtbHxlbnxlb3xlc3xldHxldXxleHR8ZmF8ZmZ8Zml8Zml1LXZyb3xmanxmb3xmcnxmcnB8ZnJyfGZ1cnxmeXxnYXxnYWd8Z2FufGdkfGdsfGdsa3xnbnxnb3R8Z3V8Z3Z8aGF8aGFrfGhhd3xoZXxoaXxoaWZ8aG98aHJ8aHNifGh0fGh1fGh5fGh6fGlhfGlkfGllfGlnfGlpfGlrfGlsb3xpb3xpc3xpdHxpdXxqYXxqYm98anZ8a2F8a2FhfGthYnxrYmR8a2d8a2l8a2p8a2t8a2x8a218a258a298a29pfGtyfGtyY3xrc3xrc2h8a3V8a3Z8a3d8a3l8bGF8bGFkfGxifGxiZXxsZ3xsaXxsaWp8bG1vfGxufGxvfGx0fGx0Z3xsdnxtYXAtYm1zfG1kZnxtZ3xtaHxtaHJ8bWl8bWt8bWx8bW58bW98bXJ8bXJqfG1zfG10fG11c3xtd2x8bXl8bXl2fG16bnxuYXxuYWh8bmFwfG5kc3xuZHMtbmx8bmV8bmV3fG5nfG5sfG5ufG5vfG5vdnxucm18bnZ8bnl8b2N8b218b3J8b3N8cGF8cGFnfHBhbXxwYXB8cGNkfHBkY3xwZmx8cGl8cGlofHBsfHBtc3xwbmJ8cG50fHBzfHB0fHF1fHJtfHJteXxybnxyb3xyb2EtcnVwfHJvYS10YXJhfHJ1fHJ1ZXxyd3xzYXxzYWh8c2N8c2NufHNjb3xzZHxzZXxzZ3xzaHxzaXxzaW1wbGV8c2t8c2x8c218c258c298c3F8c3J8c3JufHNzfHN0fHN0cXxzdXxzdnxzd3xzemx8dGF8dGV8dGV0fHRnfHRofHRpfHRrfHRsfHRufHRvfHRwaXx0cnx0c3x0dHx0dW18dHd8dHl8dWRtfHVnfHVrfHVyfHV6fHZlfHZlY3x2aXx2bHN8dm98d2F8d2FyfHdvfHd1dXx4YWx8eGh8eWl8eW98emF8emVhfHpofHpoLWNsYXNzaWNhbHx6aC1taW4tbmFufHpoLXl1ZXx6dSc7XG5cdFx0XHRwZy5yZS5pbnRlcndpa2kgPSBuZXcgUmVnRXhwKGBeJHtwZy53aWtpLmludGVyd2lraX06YCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBnLndpa2kuaW50ZXJ3aWtpID0gbnVsbDtcblx0XHRcdHBnLnJlLmludGVyd2lraSA9IC9eJC87XG5cdFx0fVxuXHR9O1xuXHQvLyByZXR1cm4gYSByZWdleHAgcGF0dGVybiBtYXRjaGluZyBhbGwgdmFyaWFudHMgdG8gd3JpdGUgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHRjb25zdCBuc1JlID0gKG5hbWVzcGFjZUlkKSA9PiB7XG5cdFx0Y29uc3QgaW1hZ2VOYW1lc3BhY2VWYXJpYW50cyA9IFtdO1xuXHRcdGZvciAoY29uc3QgW19sb2NhbGl6ZWROYW1lc3BhY2VMYywgX25hbWVzcGFjZUlkXSBvZiBPYmplY3QuZW50cmllcyhtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZUlkcycpKSkge1xuXHRcdFx0aWYgKF9uYW1lc3BhY2VJZCAhPT0gbmFtZXNwYWNlSWQpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBsb2NhbGl6ZWROYW1lc3BhY2VMYyA9IHVwY2FzZUZpcnN0KF9sb2NhbGl6ZWROYW1lc3BhY2VMYyk7XG5cdFx0XHRpbWFnZU5hbWVzcGFjZVZhcmlhbnRzLnB1c2goXG5cdFx0XHRcdG13LnV0aWwuZXNjYXBlUmVnRXhwKGxvY2FsaXplZE5hbWVzcGFjZUxjKS5zcGxpdCgnICcpLmpvaW4oJ1sgX10nKSxcblx0XHRcdFx0bXcudXRpbC5lc2NhcGVSZWdFeHAoZW5jb2RlVVJJKGxvY2FsaXplZE5hbWVzcGFjZUxjKSlcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBgKD86JHtpbWFnZU5hbWVzcGFjZVZhcmlhbnRzLmpvaW4oJ3wnKX0pYDtcblx0fTtcblx0Y29uc3QgbnNSZUltYWdlID0gKCkgPT4ge1xuXHRcdHJldHVybiBuc1JlKHBnLm5zSW1hZ2VJZCk7XG5cdH07XG5cdC8vIEVOREZJTEU6IG5hbWVzcGFjZXMuanNcblx0Ly8gU1RBUlRGSUxFOiBzZWxwb3AuanNcblx0Y29uc3QgZ2V0RWRpdGJveFNlbGVjdGlvbiA9ICgpID0+IHtcblx0XHQvLyBzZWUge0BsaW5rIGh0dHA6Ly93d3cud2ViZ3VydXNmb3J1bS5jb20vOC8xMi8wfVxuXHRcdGxldCBlZGl0Ym94O1xuXHRcdHRyeSB7XG5cdFx0XHRlZGl0Ym94ID0gZG9jdW1lbnQuZWRpdGZvcm0ud3BUZXh0Ym94MTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gSUUsIE9wZXJhXG5cdFx0aWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLnRleHQ7XG5cdFx0fVxuXHRcdC8vIE1vemlsbGFcblx0XHRjb25zdCBzZWxTdGFydCA9IGVkaXRib3guc2VsZWN0aW9uU3RhcnQ7XG5cdFx0Y29uc3Qgc2VsRW5kID0gZWRpdGJveC5zZWxlY3Rpb25FbmQ7XG5cdFx0cmV0dXJuIGVkaXRib3gudmFsdWUuc3Vic3RyaW5nKHNlbFN0YXJ0LCBzZWxFbmQpO1xuXHR9O1xuXHRjb25zdCBkb1NlbGVjdGlvblBvcHVwID0gKCkgPT4ge1xuXHRcdC8vIHBvcHVwIGlmIHRoZSBzZWxlY3Rpb24gbG9va3MgbGlrZSBbW2Zvb3xhbnl0aGluZyBhZnRlcndhcmRzIGF0IGFsbFxuXHRcdC8vIG9yIFtbZm9vfGJhcl1ddGV4dCB3aXRob3V0ICddXSdcblx0XHQvLyBvciBbW2Zvb3xiYXJdXVxuXHRcdGNvbnN0IHNlbCA9IGdldEVkaXRib3hTZWxlY3Rpb24oKTtcblx0XHRjb25zdCBvcGVuID0gc2VsLmluZGV4T2YoJ1tbJyk7XG5cdFx0Y29uc3QgcGlwZSA9IHNlbC5pbmRleE9mKCd8Jyk7XG5cdFx0Y29uc3QgY2xvc2UgPSBzZWwuaW5kZXhPZignXV0nKTtcblx0XHRpZiAob3BlbiA9PT0gLTEgfHwgKHBpcGUgPT09IC0xICYmIGNsb3NlID09PSAtMSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKChwaXBlICE9PSAtMSAmJiBvcGVuID4gcGlwZSkgfHwgKGNsb3NlICE9PSAtMSAmJiBvcGVuID4gY2xvc2UpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGFydGljbGUgPSBuZXcgVGl0bGUoc2VsLnN1YnN0cmluZyhvcGVuICsgMiwgcGlwZSA8IDAgPyBjbG9zZSA6IHBpcGUpKTtcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBPbkVkaXRTZWxlY3Rpb24nKSA9PT0gJ2JveHByZXZpZXcnKSB7XG5cdFx0XHRyZXR1cm4gZG9TZXBhcmF0ZVNlbGVjdGlvblBvcHVwKHNlbCwgYXJ0aWNsZSk7XG5cdFx0fVxuXHRcdGlmIChjbG9zZSA+IDAgJiYgc2VsLnNsaWNlKE1hdGgubWF4KDAsIGNsb3NlICsgMikpLmluY2x1ZGVzKCdbWycpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0YS5ocmVmID0gcGcud2lraS50aXRsZWJhc2UgKyBhcnRpY2xlLnVybFN0cmluZygpO1xuXHRcdG1vdXNlT3Zlcldpa2lMaW5rMihhKTtcblx0XHRpZiAoYS5uYXZwb3B1cCkge1xuXHRcdFx0YS5uYXZwb3B1cC5hZGRIb29rKFxuXHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0cnVuU3RvcFBvcHVwVGltZXIoYS5uYXZwb3B1cCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCd1bmhpZGUnLFxuXHRcdFx0XHQnYWZ0ZXInXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgZG9TZXBhcmF0ZVNlbGVjdGlvblBvcHVwID0gKHN0ciwgYXJ0aWNsZSkgPT4ge1xuXHRcdGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0aW9uUHJldmlldycpO1xuXHRcdGlmICghZGl2KSB7XG5cdFx0XHRkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGRpdi5pZCA9ICdzZWxlY3Rpb25QcmV2aWV3Jztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGJveCA9IGRvY3VtZW50LmVkaXRmb3JtLndwVGV4dGJveDE7XG5cdFx0XHRcdGJveC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkaXYsIGJveCk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBwID0gcHJlcFByZXZpZXdtYWtlcihzdHIsIGFydGljbGUsIG5ld05hdnBvcHVwKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSwgYXJ0aWNsZSkpO1xuXHRcdHAubWFrZVByZXZpZXcoKTtcblx0XHRpZiAocC5odG1sKSB7XG5cdFx0XHRkaXYuaW5uZXJIVE1MID0gcC5odG1sO1xuXHRcdH1cblx0XHRkaXYucmFuU2V0dXBUb29sdGlwc0FscmVhZHkgPSBmYWxzZTtcblx0XHRwb3BUaXBzU29vbkZuKCdzZWxlY3Rpb25QcmV2aWV3JykoKTtcblx0fTtcblx0Ly8gRU5ERklMRTogc2VscG9wLmpzXG5cdC8vIFNUQVJURklMRTogbmF2cG9wdXAuanNcblx0LyoqXG5cdCAqIEBmaWxlb3ZlcnZpZXcgIERlZmluZXMgdHdvIGNsYXNzZXM6IHtAc291cmNlIE5hdnBvcHVwfSBhbmQge0Bzb3VyY2UgTW91c2V0cmFja2VyfS5cblx0ICpcblx0ICogPGNvZGU+TmF2cG9wdXA8L2NvZGU+IGRlc2NyaWJlcyBwb3B1cHM6IHdoZW4gdGhleSBhcHBlYXIsIHdoZXJlLCB3aGF0XG5cdCAqIHRoZXkgbG9vayBsaWtlIGFuZCBzbyBvbi5cblx0ICpcblx0ICogPGNvZGU+TW91c2V0cmFja2VyPC9jb2RlPiBcImNhcHR1cmVzXCIgdGhlIG1vdXNlIHVzaW5nXG5cdCAqIDxjb2RlPmRvY3VtZW50Lm9ubW91c2Vtb3ZlPC9jb2RlPi5cblx0ICovXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IE1vdXNldHJhY2tlci5cblx0ICpcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBjbGFzcyBUaGUgTW91c2V0cmFja2VyIGNsYXNzLiBUaGlzIG1vbml0b3JzIG1vdXNlIG1vdmVtZW50cyBhbmQgbWFuYWdlcyBhc3NvY2lhdGVkIGhvb2tzLlxuXHQgKi9cblx0Y2xhc3MgTW91c2V0cmFja2VyIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogSW50ZXJ2YWwgdG8gcmVndWxhcmx5IHJ1biB0aGUgaG9va3MgYW55d2F5LCBpbiBtaWxsaXNlY29uZHMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgSW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmxvb3BEZWxheSA9IDQwMDtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGltZXIgZm9yIHRoZSBsb29wLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIFRpbWVyXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMudGltZXIgPSBudWxsO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBGbGFnIC0gYXJlIHdlIHN3aXRjaGVkIG9uP1xuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIEJvb2xlYW5cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdC8qKlxuXHRcdFx0ICogRmxhZyAtIGFyZSB3ZSBwcm9iYWJseSBpbmFjY3VyYXRlLCBpLmUuIG5vdCByZWZsZWN0aW5nIHRoZSBhY3R1YWwgbW91c2UgcG9zaXRpb24/XG5cdFx0XHQgKi9cblx0XHRcdHRoaXMuZGlydHkgPSB0cnVlO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBBcnJheSBvZiBob29rIGZ1bmN0aW9ucy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICogQHR5cGUgQXJyYXlcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5ob29rcyA9IFtdO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBBZGRzIGEgaG9vaywgdG8gYmUgY2FsbGVkIHdoZW4gd2UgZ2V0IGV2ZW50cy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IGYgQSBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgYXNcblx0XHQgKiA8Y29kZT5mKHgseSk8L2NvZGU+LiBJdCBzaG91bGQgcmV0dXJuIDxjb2RlPnRydWU8L2NvZGU+IHdoZW4gaXRcblx0XHQgKiB3YW50cyB0byBiZSByZW1vdmVkLCBhbmQgPGNvZGU+ZmFsc2U8L2NvZGU+IG90aGVyd2lzZS5cblx0XHQgKi9cblx0XHRhZGRIb29rKGYpIHtcblx0XHRcdHRoaXMuaG9va3MucHVzaChmKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUnVucyBob29rcywgcGFzc2luZyB0aGVtIHRoZSB4XG5cdFx0ICogYW5kIHkgY29vcmRzIG9mIHRoZSBtb3VzZS4gIEhvb2sgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIHRydWUgYXJlXG5cdFx0ICogcGFzc2VkIHRvIHtAc291cmNlIE1vdXNldHJhY2tlciNyZW1vdmVIb29rc30gZm9yIHJlbW92YWwuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHJ1bkhvb2tzKCkge1xuXHRcdFx0aWYgKCF0aGlzLmhvb2tzIHx8IHRoaXMuaG9va3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGxvZygnTW91c2V0cmFja2VyLnJ1bkhvb2tzOyB3ZSBnb3Qgc29tZSBob29rcyB0byBydW4nKTtcblx0XHRcdGxldCByZW1vdmUgPSBmYWxzZTtcblx0XHRcdGNvbnN0IHJlbW92ZU9iaiA9IHt9O1xuXHRcdFx0Ly8gdGhpcyBtZXRob2QgZ2V0cyBjYWxsZWQgYSBMT1QgLVxuXHRcdFx0Ly8gcHJlLWNhY2hlIHNvbWUgdmFyaWFibGVzXG5cdFx0XHRjb25zdCB7eH0gPSB0aGlzO1xuXHRcdFx0Y29uc3Qge3l9ID0gdGhpcztcblx0XHRcdGNvbnN0IGxlbiA9IHRoaXMuaG9va3MubGVuZ3RoO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuXHRcdFx0XHQvLyB+IHJ1biB0aGUgaG9vayBmdW5jdGlvbiwgYW5kIHJlbW92ZSBpdCBpZiBpdCByZXR1cm5zIHRydWVcblx0XHRcdFx0aWYgKHRoaXMuaG9va3NbaV0oeCwgeSkgPT09IHRydWUpIHtcblx0XHRcdFx0XHRyZW1vdmUgPSB0cnVlO1xuXHRcdFx0XHRcdHJlbW92ZU9ialtpXSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChyZW1vdmUpIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVIb29rcyhyZW1vdmVPYmopO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSZW1vdmVzIGhvb2tzLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gcmVtb3ZlT2JqIEFuIG9iamVjdCB3aG9zZSBrZXlzIGFyZSB0aGUgaW5kZXhcblx0XHQgKiBudW1iZXJzIG9mIGZ1bmN0aW9ucyBmb3IgcmVtb3ZhbCwgd2l0aCB2YWx1ZXMgdGhhdCBldmFsdWF0ZSB0byB0cnVlXG5cdFx0ICovXG5cdFx0cmVtb3ZlSG9va3MocmVtb3ZlT2JqKSB7XG5cdFx0XHRjb25zdCBuZXdIb29rcyA9IFtdO1xuXHRcdFx0Y29uc3QgbGVuID0gdGhpcy5ob29rcy5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG5cdFx0XHRcdGlmICghcmVtb3ZlT2JqW2ldKSB7XG5cdFx0XHRcdFx0bmV3SG9va3MucHVzaCh0aGlzLmhvb2tzW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5ob29rcyA9IG5ld0hvb2tzO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBFdmVudCBsaXN0ZW5lciBmb3IgbW91c2Ugd2lnZ2xlcy5cblx0XHQgKiBXZSBzaW1wbHkgZ3JhYiB0aGUgZXZlbnQsIHNldCB4IGFuZCB5IGFuZCBydW4gdGhlIGhvb2tzLlxuXHRcdCAqIFRoaXMgbWFrZXMgdGhlIGNwdSBhbGwgaG90IGFuZCBib3RoZXJlZCA6LShcblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICogQHBhcmFtIHtFdmVudH0gZSBNb3VzZW1vdmUgZXZlbnRcblx0XHQgKi9cblx0XHR0cmFjayhlKSB7XG5cdFx0XHQvLyB+IEFwcGFyZW50bHkgdGhpcyBpcyBuZWVkZWQgaW4gSUUuXG5cdFx0XHRlIHx8PSB3aW5kb3cuZXZlbnQ7XG5cdFx0XHRsZXQgeDtcblx0XHRcdGxldCB5O1xuXHRcdFx0aWYgKGUpIHtcblx0XHRcdFx0aWYgKGUucGFnZVgpIHtcblx0XHRcdFx0XHR4ID0gZS5wYWdlWDtcblx0XHRcdFx0XHR5ID0gZS5wYWdlWTtcblx0XHRcdFx0fSBlbHNlIGlmIChlLmNsaWVudFggPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXQgbGVmdDtcblx0XHRcdFx0XHRsZXQgdG9wO1xuXHRcdFx0XHRcdGNvbnN0IGRvY0VsdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0XHRcdFx0XHRpZiAoZG9jRWx0KSB7XG5cdFx0XHRcdFx0XHRsZWZ0ID0gZG9jRWx0LnNjcm9sbExlZnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxlZnQgfHw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LnNjcm9sbExlZnQgfHwgMDtcblx0XHRcdFx0XHRpZiAoZG9jRWx0KSB7XG5cdFx0XHRcdFx0XHR0b3AgPSBkb2NFbHQuc2Nyb2xsVG9wO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0b3AgfHw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuc2Nyb2xsVG9wIHx8IDA7XG5cdFx0XHRcdFx0eCA9IGUuY2xpZW50WCArIGxlZnQ7XG5cdFx0XHRcdFx0eSA9IGUuY2xpZW50WSArIHRvcDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnNldFBvc2l0aW9uKHgsIHkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIHN0b3JlZCBhbmQgdGFrZXMgYXBwcm9wcmlhdGUgYWN0aW9uLFxuXHRcdCAqIHJ1bm5pbmcgaG9va3MgYXMgYXBwcm9wcmlhdGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0ludGVnZXJ9IHgsIHkgU2NyZWVuIGNvb3JkaW5hdGVzIHRvIHNldFxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSB4XG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHlcblx0XHQgKi9cblx0XHRzZXRQb3NpdGlvbih4LCB5KSB7XG5cdFx0XHR0aGlzLnggPSB4O1xuXHRcdFx0dGhpcy55ID0geTtcblx0XHRcdGlmICh0aGlzLmRpcnR5IHx8IHRoaXMuaG9va3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLmxhc3RIb29rX3ggIT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHRoaXMubGFzdEhvb2tfeCA9IC0xMDA7XG5cdFx0XHRcdHRoaXMubGFzdEhvb2tfeSA9IC0xMDA7XG5cdFx0XHR9XG5cdFx0XHRsZXQgZGlmZiA9ICh0aGlzLmxhc3RIb29rX3ggLSB4KSAqICh0aGlzLmxhc3RIb29rX3kgLSB5KTtcblx0XHRcdGRpZmYgPSBkaWZmID49IDAgPyBkaWZmIDogLWRpZmY7XG5cdFx0XHRpZiAoZGlmZiA+IDEpIHtcblx0XHRcdFx0dGhpcy5sYXN0SG9va194ID0geDtcblx0XHRcdFx0dGhpcy5sYXN0SG9va195ID0geTtcblx0XHRcdFx0aWYgKHRoaXMuZGlydHkpIHtcblx0XHRcdFx0XHR0aGlzLmRpcnR5ID0gZmFsc2U7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5ydW5Ib29rcygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhpbmdzIGluIG1vdGlvbiwgdW5sZXNzIHRoZXkgYXJlIGFscmVhZHkgdGhhdCBpcywgcmVnaXN0ZXJpbmcgYW4gZXZlbnQgbGlzdGVuZXIgb25cblx0XHQgKiA8Y29kZT5kb2N1bWVudC5vbm1vdXNlbW92ZTwvY29kZT4uIEEgaGFsZi1oZWFydGVkIGF0dGVtcHQgaXMgbWFkZSB0byBwcmVzZXJ2ZSB0aGUgb2xkIGV2ZW50XG5cdFx0ICogbGlzdGVuZXIgaWYgdGhlcmUgaXMgb25lLlxuXHRcdCAqL1xuXHRcdGVuYWJsZSgpIHtcblx0XHRcdGlmICh0aGlzLmFjdGl2ZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmFjdGl2ZSA9IHRydWU7XG5cdFx0XHQvLyB+IFNhdmUgdGhlIGN1cnJlbnQgbGlzdGVuZXIgZm9yIG1vdXNlbW92ZSBldmVudHMuIFRoaXMgaXNuJ3QgdG9vXG5cdFx0XHQvLyB+IHJvYnVzdCwgb2YgY291cnNlLlxuXHRcdFx0dGhpcy5zYXZlZExpc3RlbmVyID0gZG9jdW1lbnQub25tb3VzZW1vdmU7XG5cdFx0XHQvLyB+IEdvdHRhIHNhdmUgQHR0e3RoaXN9IGFnYWluIGZvciB0aGUgY2xvc3VyZSwgYW5kIHVzZSBhcHBseSBmb3Jcblx0XHRcdC8vIH4gdGhlIG1lbWJlciBmdW5jdGlvbi5cblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSAoZSkgPT4ge1xuXHRcdFx0XHRzZWxmLnRyYWNrKGUpO1xuXHRcdFx0fTtcblx0XHRcdGlmICh0aGlzLmxvb3BEZWxheSkge1xuXHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdC8vIGxvZygnbG9vcCBkZWxheSBpbiBtb3VzZXRyYWNrZXIgaXMgd29ya2luZycpO1xuXHRcdFx0XHRcdHNlbGYucnVuSG9va3MoKTtcblx0XHRcdFx0fSwgdGhpcy5sb29wRGVsYXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBEaXNhYmxlcyB0aGUgdHJhY2tlciwgcmVtb3ZpbmcgdGhlIGV2ZW50IGxpc3RlbmVyLlxuXHRcdCAqL1xuXHRcdGRpc2FibGUoKSB7XG5cdFx0XHRpZiAoIXRoaXMuYWN0aXZlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5zYXZlZExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gdGhpcy5zYXZlZExpc3RlbmVyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVsZXRlIGRvY3VtZW50Lm9ubW91c2Vtb3ZlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudGltZXIpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuYWN0aXZlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmV3IE5hdnBvcHVwLlxuXHQgKiBHZXRzIGEgVUlEIGZvciB0aGUgcG9wdXAgYW5kXG5cdCAqXG5cdCAqIEBwYXJhbSBpbml0IENvbnRydWN0b3Igb2JqZWN0LiBJZiA8Y29kZT5pbml0LmRyYWdnYWJsZTwvY29kZT4gaXMgdHJ1ZSBvciBhYnNlbnQsIHRoZSBwb3B1cCBiZWNvbWVzIGRyYWdnYWJsZS5cblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqIEBjbGFzcyBUaGUgTmF2cG9wdXAgY2xhc3MuIFRoaXMgZ2VuZXJhdGVzIHBvcHVwIGhpbnRzLCBhbmQgZG9lcyBzb21lIG1hbmFnZW1lbnQgb2YgdGhlbS5cblx0ICovXG5cdGNsYXNzIE5hdnBvcHVwIHtcblx0XHRjb25zdHJ1Y3RvcigpIHtcblx0XHRcdC8vIG13Lm5vdGlmeSgnbmV3IE5hdnBvcHVwKGluaXQpJywge3RhZzogJ3BvcHVwcycsIHR5cGU6ICd3YXJuJ30pO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBVSUQgZm9yIGVhY2ggTmF2cG9wdXAgaW5zdGFuY2UuXG5cdFx0XHQgKiBSZWFkLW9ubHkuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHR5cGUgaW50ZWdlclxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnVpZCA9IE5hdnBvcHVwLnVpZCsrO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZWFkLW9ubHkgZmxhZyBmb3IgY3VycmVudCB2aXNpYmlsaXR5IG9mIHRoZSBwb3B1cC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdC8qKlxuXHRcdFx0ICogRmxhZyB0byBiZSBzZXQgd2hlbiB3ZSB3YW50IHRvIGNhbmNlbCBhIHByZXZpb3VzIHJlcXVlc3QgdG9cblx0XHRcdCAqIHNob3cgdGhlIHBvcHVwIGluIGEgbGl0dGxlIHdoaWxlLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMubm9zaG93ID0gZmFsc2U7XG5cdFx0XHQvKipcblx0XHRcdCAqIENhdGVnb3Jpc2VkIGxpc3Qgb2YgaG9va3MuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHNlZSAjcnVuSG9va3Ncblx0XHRcdCAqIEBzZWUgI2FkZEhvb2tcblx0XHRcdCAqIEBwcml2YXRlXG5cdFx0XHQgKiBAdHlwZSBPYmplY3Rcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5ob29rcyA9IHtcblx0XHRcdFx0Y3JlYXRlOiBbXSxcblx0XHRcdFx0dW5oaWRlOiBbXSxcblx0XHRcdFx0aGlkZTogW10sXG5cdFx0XHR9O1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBsaXN0IG9mIHVuaXF1ZSBJRHMgb2YgaG9vayBmdW5jdGlvbnMsIHRvIGF2b2lkIGR1cGxpY2F0ZXNcblx0XHRcdCAqXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICovXG5cdFx0XHR0aGlzLmhvb2tJZHMgPSB7fTtcblx0XHRcdC8qKlxuXHRcdFx0ICogTGlzdCBvZiBkb3dubG9hZHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBwb3B1cC5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcHJpdmF0ZVxuXHRcdFx0ICogQHR5cGUgQXJyYXlcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5kb3dubG9hZHMgPSBbXTtcblx0XHRcdC8qKlxuXHRcdFx0ICogTnVtYmVyIG9mIHVuY29tcGxldGVkIGRvd25sb2Fkcy5cblx0XHRcdCAqXG5cdFx0XHQgKiBAdHlwZSBpbnRlZ2VyXG5cdFx0XHQgKi9cblx0XHRcdHRoaXMucGVuZGluZyA9IG51bGw7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRvbGVyYW5jZSBpbiBwaXhlbHMgd2hlbiBkZXRlY3Rpbmcgd2hldGhlciB0aGUgbW91c2UgaGFzIGxlZnQgdGhlIHBvcHVwLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGludGVnZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5mdXp6ID0gNTtcblx0XHRcdC8qKlxuXHRcdFx0ICogRmxhZyB0byB0b2dnbGUgcnVubmluZyB7QHNvdXJjZSAjbGltaXRIb3Jpem9udGFsUG9zaXRpb259IHRvIHJlZ3VsYXRlIHRoZSBwb3B1cCdzIHBvc2l0aW9uLlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIGJvb2xlYW5cblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5jb25zdHJhaW5lZCA9IHRydWU7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBwb3B1cCB3aWR0aCBpbiBwaXhlbHMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqIEB0eXBlIGludGVnZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy53aWR0aCA9IDA7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRoZSBwb3B1cCB3aWR0aCBpbiBwaXhlbHMuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHByaXZhdGVcblx0XHRcdCAqIEB0eXBlIGludGVnZXJcblx0XHRcdCAqL1xuXHRcdFx0dGhpcy5oZWlnaHQgPSAwO1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBUaGUgbWFpbiBjb250ZW50IERJViBlbGVtZW50LlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIEhUTUxEaXZFbGVtZW50XG5cdFx0XHQgKi9cblx0XHRcdHRoaXMubWFpbkRpdiA9IG51bGw7XG5cdFx0XHR0aGlzLmNyZWF0ZU1haW5EaXYoKTtcblx0XHRcdC8vXHRpZiAoIWluaXQgfHwgdHlwZW9mIGluaXQucG9wdXBzX2RyYWdnYWJsZT09J3VuZGVmaW5lZCcgfHwgaW5pdC5wb3B1cHNfZHJhZ2dhYmxlKSB7XG5cdFx0XHQvL1x0XHR0aGlzLm1ha2VEcmFnZ2FibGUodHJ1ZSk7XG5cdFx0XHQvL1x0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBSZXRyaWV2ZXMgdGhlIHtAc291cmNlICN2aXNpYmxlfSBhdHRyaWJ1dGUsIGluZGljYXRpbmcgd2hldGhlciB0aGUgcG9wdXAgaXMgY3VycmVudGx5IHZpc2libGUuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSBib29sZWFuXG5cdFx0ICovXG5cdFx0aXNWaXNpYmxlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudmlzaWJsZTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogUmVwb3NpdGlvbnMgcG9wdXAgdXNpbmcgQ1NTIHN0eWxlLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcGFyYW0ge2ludGVnZXJ9IHggeC1jb29yZGluYXRlIChweClcblx0XHQgKiBAcGFyYW0ge2ludGVnZXJ9IHkgeS1jb29yZGluYXRlIChweClcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IG5vTGltaXRIb3IgRG9uJ3QgY2FsbCB7QHNvdXJjZSAjbGltaXRIb3Jpem9udGFsUG9zaXRpb259XG5cdFx0ICovXG5cdFx0cmVwb3NpdGlvbih4LCB5LCBub0xpbWl0SG9yKSB7XG5cdFx0XHRsb2coYHJlcG9zaXRpb24oJHt4fSwke3l9LCR7bm9MaW1pdEhvcn0pYCk7XG5cdFx0XHRpZiAoeCAhPT0gdW5kZWZpbmVkICYmIHggIT09IG51bGwpIHtcblx0XHRcdFx0dGhpcy5sZWZ0ID0geDtcblx0XHRcdH1cblx0XHRcdGlmICh5ICE9PSB1bmRlZmluZWQgJiYgeSAhPT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnRvcCA9IHk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5sZWZ0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy50b3AgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLm1haW5EaXYuc3R5bGUubGVmdCA9IGAke3RoaXMubGVmdH1weGA7XG5cdFx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS50b3AgPSBgJHt0aGlzLnRvcH1weGA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW5vTGltaXRIb3IpIHtcblx0XHRcdFx0dGhpcy5saW1pdEhvcml6b250YWxQb3NpdGlvbigpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBQcmV2ZW50cyBwb3B1cHMgZnJvbSBiZWluZyBpbiBzaWxseSBsb2NhdGlvbnMuIEhvcGVmdWxseS5cblx0XHQgKiBTaG91bGQgbm90IGJlIHJ1biBpZiB7QHNvdXJjZSAjY29uc3RyYWluZWR9IGlzIHRydWUuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGxpbWl0SG9yaXpvbnRhbFBvc2l0aW9uKCkge1xuXHRcdFx0aWYgKCF0aGlzLmNvbnN0cmFpbmVkIHx8IHRoaXMudG9vV2lkZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTtcblx0XHRcdGNvbnN0IHggPSB0aGlzLmxlZnQ7XG5cdFx0XHRjb25zdCB3ID0gdGhpcy53aWR0aDtcblx0XHRcdGNvbnN0IGNXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGllbnRXaWR0aDtcblx0XHRcdC8vXHRsb2coJ2xpbWl0SG9yaXpvbnRhbFBvc2l0aW9uOiB4PScreCtcblx0XHRcdC8vXHRcdFx0JywgdGhpcy5sZWZ0PScgKyB0aGlzLmxlZnQgK1xuXHRcdFx0Ly9cdFx0XHQnLCB0aGlzLndpZHRoPScgKyB0aGlzLndpZHRoICtcblx0XHRcdC8vXHRcdFx0JywgY1dpZHRoPScgKyBjV2lkdGgpO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR4ICsgdyA+PSBjV2lkdGggfHxcblx0XHRcdFx0KHggPiAwICYmXG5cdFx0XHRcdFx0dGhpcy5tYXhXaWR0aCAmJlxuXHRcdFx0XHRcdHRoaXMud2lkdGggPCB0aGlzLm1heFdpZHRoICYmXG5cdFx0XHRcdFx0dGhpcy5oZWlnaHQgPiB0aGlzLndpZHRoICYmXG5cdFx0XHRcdFx0eCA+IGNXaWR0aCAtIHRoaXMubWF4V2lkdGgpXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gVGhpcyBpcyBhIHZlcnkgbmFzdHkgaGFjay4gVGhlcmUgaGFzIHRvIGJlIGEgYmV0dGVyIHdheSFcblx0XHRcdFx0Ly8gV2UgZmluZCB0aGUgXCJuYXR1cmFsXCIgd2lkdGggb2YgdGhlIGRpdiBieSBwb3NpdGlvbmluZyBpdCBhdCB0aGUgZmFyIGxlZnRcblx0XHRcdFx0Ly8gdGhlbiByZXNldCBpdCBzbyB0aGF0IGl0IHNob3VsZCBiZSBmbHVzaCByaWdodCAod2VsbCwgbmVhcmx5KVxuXHRcdFx0XHR0aGlzLm1haW5EaXYuc3R5bGUubGVmdCA9ICctMTAwMDBweCc7XG5cdFx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS53aWR0aCA9IGAke3RoaXMubWF4V2lkdGh9cHhgO1xuXHRcdFx0XHRjb25zdCBuYXR1cmFsV2lkdGggPSBOdW1iZXIucGFyc2VJbnQodGhpcy5tYWluRGl2Lm9mZnNldFdpZHRoLCAxMCk7XG5cdFx0XHRcdGxldCBuZXdMZWZ0ID0gY1dpZHRoIC0gbmF0dXJhbFdpZHRoIC0gMTtcblx0XHRcdFx0aWYgKG5ld0xlZnQgPCAwKSB7XG5cdFx0XHRcdFx0bmV3TGVmdCA9IDA7XG5cdFx0XHRcdFx0dGhpcy50b29XaWRlID0gdHJ1ZTtcblx0XHRcdFx0fSAvLyBzdGlsbCB1bnN0YWJsZSBmb3IgcmVhbGx5IHdpZGUgcG9wdXBzP1xuXHRcdFx0XHRsb2coXG5cdFx0XHRcdFx0YGxpbWl0SG9yaXpvbnRhbFBvc2l0aW9uOiBtb3ZpbmcgdG8gKCR7bmV3TGVmdH0sJHt0aGlzLnRvcH0pO2AgK1xuXHRcdFx0XHRcdFx0YCBuYXR1cmFsV2lkdGg9JHtuYXR1cmFsV2lkdGh9LCBjbGllbnRXaWR0aD0ke2NXaWR0aH1gXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRoaXMucmVwb3NpdGlvbihuZXdMZWZ0LCBudWxsLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQnJpbmdzIHBvcHVwIHRvIHRoZSB0b3Agb2YgdGhlIHotb3JkZXIuXG5cdFx0ICogV2UgaW5jcmVtZW50IHRoZSB7QHNvdXJjZSAjaGlnaGVzdH0gcHJvcGVydHkgb2YgdGhlIGNvbnRydWN0b3IgaGVyZS5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0cmFpc2UoKSB7XG5cdFx0XHR0aGlzLm1haW5EaXYuc3R5bGUuekluZGV4ID0gTmF2cG9wdXAuaGlnaGVzdCArIDE7XG5cdFx0XHQrK05hdnBvcHVwLmhpZ2hlc3Q7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFNob3dzIHRoZSBwb3B1cCBwcm92aWRlZCB7QHNvdXJjZSAjbm9zaG93fSBpcyBub3QgdHJ1ZS5cblx0XHQgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiwgYnJpbmdzIHRoZSBwb3B1cCB0byB0aGUgdG9wIG9mIHRoZSB6LW9yZGVyIGFuZCB1bmhpZGVzIGl0LlxuXHRcdCAqL1xuXHRcdHNob3coKSB7XG5cdFx0XHQvLyBkb2N1bWVudC50aXRsZSs9J3MnO1xuXHRcdFx0aWYgKHRoaXMubm9zaG93KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGRvY3VtZW50LnRpdGxlKz0ndCc7XG5cdFx0XHR0aGlzLnJlcG9zaXRpb24oKTtcblx0XHRcdHRoaXMucmFpc2UoKTtcblx0XHRcdHRoaXMudW5oaWRlKCk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIENoZWNrcyB0byBzZWUgaWYgdGhlIG1vdXNlIHBvaW50ZXIgaGFzXG5cdFx0ICogc3RhYmlsaXNlZCAoY2hlY2tpbmcgZXZlcnkgPGNvZGU+dGltZTwvY29kZT4vMiBtaWxsaXNlY29uZHMpIGFuZCBydW5zIHRoZVxuXHRcdCAqIHtAc291cmNlICNzaG93fSBtZXRob2QgaWYgaXQgaGFzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSB0aW1lIFRoZSBtaW5pbXVtIHRpbWUgKG1zKSBiZWZvcmUgdGhlIHBvcHVwIG1heSBiZSBzaG93bi5cblx0XHQgKi9cblx0XHRzaG93U29vbklmU3RhYmxlKHRpbWUpIHtcblx0XHRcdGxvZyhgc2hvd1Nvb25JZlN0YWJsZSwgdGltZT0ke3RpbWV9YCk7XG5cdFx0XHRpZiAodGhpcy52aXNpYmxlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMubm9zaG93ID0gZmFsc2U7XG5cdFx0XHQvLyB+IGluaXRpYWxpemUgdGhlc2UgdmFyaWFibGVzIHNvIHRoYXQgd2UgbmV2ZXIgcnVuIEB0dHtzaG93fSBhZnRlclxuXHRcdFx0Ly8gfiBqdXN0IGhhbGYgdGhlIHRpbWVcblx0XHRcdHRoaXMuc3RhYmxlX3ggPSAtMWU0O1xuXHRcdFx0dGhpcy5zdGFibGVfeSA9IC0xZTQ7XG5cdFx0XHRjb25zdCBzdGFibGVTaG93ID0gKCkgPT4ge1xuXHRcdFx0XHRsb2coJ3N0YWJsZVNob3cgY2FsbGVkJyk7XG5cdFx0XHRcdGNvbnN0IG5ld194ID0gTmF2cG9wdXAudHJhY2tlci54O1xuXHRcdFx0XHRjb25zdCBuZXdfeSA9IE5hdnBvcHVwLnRyYWNrZXIueTtcblx0XHRcdFx0Y29uc3QgZHggPSBzZWxmLnN0YWJsZV94IC0gbmV3X3g7XG5cdFx0XHRcdGNvbnN0IGR5ID0gc2VsZi5zdGFibGVfeSAtIG5ld195O1xuXHRcdFx0XHRjb25zdCBmdXp6MiA9IDA7IC8vIHNhdmVkVGhpcy5mdXp6ICogc2F2ZWRUaGlzLmZ1eno7XG5cdFx0XHRcdC8vIGRvY3VtZW50LnRpdGxlICs9ICdbJyArIFtzYXZlZFRoaXMuc3RhYmxlX3gsbmV3X3gsIHNhdmVkVGhpcy5zdGFibGVfeSxuZXdfeSwgZHgsIGR5LCBmdXp6Ml0uam9pbignLCcpICsgJ10gJztcblx0XHRcdFx0aWYgKGR4ICogZHggPD0gZnV6ejIgJiYgZHkgKiBkeSA8PSBmdXp6Mikge1xuXHRcdFx0XHRcdGxvZygnbW91c2UgaXMgc3RhYmxlJyk7XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChzZWxmLnNob3dTb29uU3RhYmxlVGltZXIpO1xuXHRcdFx0XHRcdHNlbGYucmVwb3NpdGlvbihuZXdfeCArIDIsIG5ld195ICsgMik7XG5cdFx0XHRcdFx0c2VsZi5zaG93KCk7XG5cdFx0XHRcdFx0c2VsZi5saW1pdEhvcml6b250YWxQb3NpdGlvbigpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxmLnN0YWJsZV94ID0gbmV3X3g7XG5cdFx0XHRcdHNlbGYuc3RhYmxlX3kgPSBuZXdfeTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHRoaXMuc2hvd1Nvb25TdGFibGVUaW1lciA9IHNldEludGVydmFsKHN0YWJsZVNob3csIHRpbWUgLyAyKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUge0Bzb3VyY2UgI25vc2hvd30gZmxhZyBhbmQgaGlkZXMgdGhlIHBvcHVwLiBUaGlzIHNob3VsZCBiZSBjYWxsZWRcblx0XHQgKiB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIGxpbmsgYmVmb3JlXG5cdFx0ICogKG9yIGFmdGVyKSBpdCdzIGFjdHVhbGx5IGJlZW4gZGlzcGxheWVkLlxuXHRcdCAqL1xuXHRcdGJhbmlzaCgpIHtcblx0XHRcdGxvZygnYmFuaXNoIGNhbGxlZCcpO1xuXHRcdFx0Ly8gaGlkZSBhbmQgcHJldmVudCBzaG93aW5nIHdpdGggc2hvd1Nvb24gaW4gdGhlIGZ1dHVyZVxuXHRcdFx0dGhpcy5ub3Nob3cgPSB0cnVlO1xuXHRcdFx0aWYgKHRoaXMuc2hvd1Nvb25TdGFibGVUaW1lcikge1xuXHRcdFx0XHRsb2coJ2NsZWFyaW5nIHNob3dTb29uU3RhYmxlVGltZXInKTtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnNob3dTb29uU3RhYmxlVGltZXIpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5oaWRlKCk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFJ1bnMgaG9va3MgYWRkZWQgd2l0aCB7QHNvdXJjZSAjYWRkSG9va30uXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IG5hbWUgb2YgdGhlIHtAc291cmNlICNob29rc30gYXJyYXkgLSBvbmUgb2YgJ2NyZWF0ZScsICd1bmhpZGUnLCAnaGlkZSdcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gd2hlbiBDb250cm9scyBleGFjdGx5IHdoZW4gdGhlIGhvb2sgaXMgcnVuOiBlaXRoZXIgJ2JlZm9yZScgb3IgJ2FmdGVyJ1xuXHRcdCAqL1xuXHRcdHJ1bkhvb2tzKGtleSwgd2hlbikge1xuXHRcdFx0aWYgKCF0aGlzLmhvb2tzW2tleV0pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qga2V5SG9va3MgPSB0aGlzLmhvb2tzW2tleV07XG5cdFx0XHRjb25zdCBsZW4gPSBrZXlIb29rcy5sZW5ndGg7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG5cdFx0XHRcdGlmIChrZXlIb29rc1tpXSAmJiBrZXlIb29rc1tpXS53aGVuID09PSB3aGVuICYmIFJlZmxlY3QuYXBwbHkoa2V5SG9va3NbaV0uaG9vaywgdGhpcywgW10pKSB7XG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBob29rXG5cdFx0XHRcdFx0aWYgKGtleUhvb2tzW2ldLmhvb2tJZCkge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuaG9va0lkc1trZXlIb29rc1tpXS5ob29rSWRdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRrZXlIb29rc1tpXSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQWRkcyBhIGhvb2sgdG8gdGhlIHBvcHVwLiBIb29rIGZ1bmN0aW9ucyBhcmUgcnVuIHdpdGggPGNvZGU+dGhpczwvY29kZT4gc2V0IHRvIHJlZmVyIHRvIHRoZVxuXHRcdCAqIE5hdnBvcHVwIGluc3RhbmNlLCBhbmQgbm8gYXJndW1lbnRzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gaG9vayBUaGUgaG9vayBmdW5jdGlvbi4gRnVuY3Rpb25zIHRoYXQgcmV0dXJuIHRydWUgYXJlIGRlbGV0ZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgbmFtZSBvZiB0aGUge0Bzb3VyY2UgI2hvb2tzfSBhcnJheSAtIG9uZSBvZiAnY3JlYXRlJywgJ3VuaGlkZScsICdoaWRlJ1xuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3aGVuIENvbnRyb2xzIGV4YWN0bHkgd2hlbiB0aGUgaG9vayBpcyBydW46IGVpdGhlciAnYmVmb3JlJyBvciAnYWZ0ZXInXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHVpZCBBIHRydXRoeSBzdHJpbmcgaWRlbnRpZnlpbmcgdGhlIGhvb2sgZnVuY3Rpb247IGlmIGl0IG1hdGNoZXMgYW5vdGhlciBob29rXG5cdFx0ICogaW4gdGhpcyBwb3NpdGlvbiwgaXQgd29uJ3QgYmUgYWRkZWQgYWdhaW4uXG5cdFx0ICovXG5cdFx0YWRkSG9vayhob29rLCBrZXksIHdoZW4sIHVpZCkge1xuXHRcdFx0d2hlbiB8fD0gJ2FmdGVyJztcblx0XHRcdGlmICghdGhpcy5ob29rc1trZXldKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGlmIHVpZCBpcyBzcGVjaWZpZWQsIGRvbid0IGFkZCBkdXBsaWNhdGVzXG5cdFx0XHRsZXQgaG9va0lkO1xuXHRcdFx0aWYgKHVpZCkge1xuXHRcdFx0XHRob29rSWQgPSBba2V5LCB3aGVuLCB1aWRdLmpvaW4oJ3wnKTtcblx0XHRcdFx0aWYgKHRoaXMuaG9va0lkc1tob29rSWRdKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaG9va0lkc1tob29rSWRdID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaG9va3Nba2V5XS5wdXNoKHtcblx0XHRcdFx0aG9vayxcblx0XHRcdFx0d2hlbixcblx0XHRcdFx0aG9va0lkLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZXMgdGhlIG1haW4gRElWIGVsZW1lbnQsIHdoaWNoIGNvbnRhaW5zIGFsbCB0aGUgYWN0dWFsIHBvcHVwIGNvbnRlbnQuXG5cdFx0ICogUnVucyBob29rcyB3aXRoIGtleSAnY3JlYXRlJy5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0Y3JlYXRlTWFpbkRpdigpIHtcblx0XHRcdGlmICh0aGlzLm1haW5EaXYpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ydW5Ib29rcygnY3JlYXRlJywgJ2JlZm9yZScpO1xuXHRcdFx0Y29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRtYWluRGl2Lm9uY2xpY2sgPSAoZSkgPT4ge1xuXHRcdFx0XHRzZWxmLm9uY2xpY2tMaXN0ZW5lcihlKTtcblx0XHRcdH07XG5cdFx0XHRtYWluRGl2LmNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lID8/ICduYXZwb3B1cF9tYWluZGl2Jztcblx0XHRcdG1haW5EaXYuaWQgPSBtYWluRGl2LmNsYXNzTmFtZSArIHRoaXMudWlkO1xuXHRcdFx0bWFpbkRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0XHRtYWluRGl2LnN0eWxlLm1pbldpZHRoID0gJzM1MHB4Jztcblx0XHRcdG1haW5EaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdG1haW5EaXYuY2xhc3NOYW1lID0gJ25hdnBvcHVwJztcblx0XHRcdC8vIGVhc3kgYWNjZXNzIHRvIGphdmFzY3JpcHQgb2JqZWN0IHRocm91Z2ggRE9NIGZ1bmN0aW9uc1xuXHRcdFx0bWFpbkRpdi5uYXZwb3B1cCA9IHRoaXM7XG5cdFx0XHR0aGlzLm1haW5EaXYgPSBtYWluRGl2O1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZChtYWluRGl2KTtcblx0XHRcdHRoaXMucnVuSG9va3MoJ2NyZWF0ZScsICdhZnRlcicpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBDYWxscyB0aGUge0Bzb3VyY2UgI3JhaXNlfSBtZXRob2QuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdG9uY2xpY2tMaXN0ZW5lcigpIHtcblx0XHRcdHRoaXMucmFpc2UoKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogTWFrZXMgdGhlIHBvcHVwIGRyYWdnYWJsZSwgdXNpbmcgYSB7QHNvdXJjZSBEcmFnfSBvYmplY3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaGFuZGxlTmFtZVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0bWFrZURyYWdnYWJsZShoYW5kbGVOYW1lKSB7XG5cdFx0XHRpZiAoIXRoaXMubWFpbkRpdikge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZU1haW5EaXYoKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGRyYWcgPSBuZXcgRHJhZygpO1xuXHRcdFx0aWYgKCFoYW5kbGVOYW1lKSB7XG5cdFx0XHRcdGRyYWcuc3RhcnRDb25kaXRpb24gPSAoZSkgPT4ge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRpZiAoIWUuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGxldCBkcmFnSGFuZGxlO1xuXHRcdFx0aWYgKGhhbmRsZU5hbWUpIHtcblx0XHRcdFx0ZHJhZ0hhbmRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2hhbmRsZU5hbWV9YCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWRyYWdIYW5kbGUpIHtcblx0XHRcdFx0ZHJhZ0hhbmRsZSA9IHRoaXMubWFpbkRpdjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0ZHJhZy5lbmRIb29rID0gKHgsIHkpID0+IHtcblx0XHRcdFx0TmF2cG9wdXAudHJhY2tlci5kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdHNlbGYucmVwb3NpdGlvbih4LCB5KTtcblx0XHRcdH07XG5cdFx0XHRkcmFnLmluaXQoZHJhZ0hhbmRsZSwgdGhpcy5tYWluRGl2KTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogSGlkZXMgdGhlIHBvcHVwIHVzaW5nIENTUy4gUnVucyBob29rcyB3aXRoIGtleSAnaGlkZScuXG5cdFx0ICogU2V0cyB7QHNvdXJjZSAjdmlzaWJsZX0gYXBwcm9wcmlhdGVseS5cblx0XHQgKiB7QHNvdXJjZSAjYmFuaXNofSBzaG91bGQgYmUgY2FsbGVkIGV4dGVybmFsbHkgaW5zdGVhZCBvZiB0aGlzIG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0aGlkZSgpIHtcblx0XHRcdHRoaXMucnVuSG9va3MoJ2hpZGUnLCAnYmVmb3JlJyk7XG5cdFx0XHR0aGlzLmFib3J0RG93bmxvYWRzKCk7XG5cdFx0XHRpZiAodGhpcy52aXNpYmxlICE9PSB1bmRlZmluZWQgJiYgdGhpcy52aXNpYmxlKSB7XG5cdFx0XHRcdHRoaXMubWFpbkRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMucnVuSG9va3MoJ2hpZGUnLCAnYWZ0ZXInKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogU2hvd3MgdGhlIHBvcHVwIHVzaW5nIENTUy4gUnVucyBob29rcyB3aXRoIGtleSAndW5oaWRlJy5cblx0XHQgKiBTZXRzIHtAc291cmNlICN2aXNpYmxlfSBhcHByb3ByaWF0ZWx5LiAgIHtAc291cmNlICNzaG93fSBzaG91bGQgYmUgY2FsbGVkIGV4dGVybmFsbHkgaW5zdGVhZCBvZiB0aGlzIG1ldGhvZC5cblx0XHQgKlxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0dW5oaWRlKCkge1xuXHRcdFx0dGhpcy5ydW5Ib29rcygndW5oaWRlJywgJ2JlZm9yZScpO1xuXHRcdFx0aWYgKHRoaXMudmlzaWJsZSAhPT0gdW5kZWZpbmVkICYmICF0aGlzLnZpc2libGUpIHtcblx0XHRcdFx0dGhpcy5tYWluRGl2LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0XHRcdFx0dGhpcy52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMucnVuSG9va3MoJ3VuaGlkZScsICdhZnRlcicpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSA8Y29kZT5pbm5lckhUTUw8L2NvZGU+IGF0dHJpYnV0ZSBvZiB0aGUgbWFpbiBkaXYgY29udGFpbmluZyB0aGUgcG9wdXAgY29udGVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBodG1sIFRoZSBIVE1MIHRvIHNldC5cblx0XHQgKi9cblx0XHRzZXRJbm5lckhUTUwoaHRtbCkge1xuXHRcdFx0dGhpcy5tYWluRGl2LmlubmVySFRNTCA9IGh0bWw7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZXMgdGhlIHtAc291cmNlICN3aWR0aH0gYW5kIHtAc291cmNlICNoZWlnaHR9IGF0dHJpYnV0ZXMgd2l0aCB0aGUgQ1NTIHByb3BlcnRpZXMuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdHVwZGF0ZURpbWVuc2lvbnMoKSB7XG5cdFx0XHR0aGlzLndpZHRoID0gTnVtYmVyLnBhcnNlSW50KHRoaXMubWFpbkRpdi5vZmZzZXRXaWR0aCwgMTApO1xuXHRcdFx0dGhpcy5oZWlnaHQgPSBOdW1iZXIucGFyc2VJbnQodGhpcy5tYWluRGl2Lm9mZnNldEhlaWdodCwgMTApO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBDaGVja3MgaWYgdGhlIHBvaW50ICh4LHkpIGlzIHdpdGhpbiB7QHNvdXJjZSAjZnV6en0gb2YgdGhlXG5cdFx0ICoge0Bzb3VyY2UgI21haW5EaXZ9LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSB4IHgtY29vcmRpbmF0ZSAocHgpXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSB5IHktY29vcmRpbmF0ZSAocHgpXG5cdFx0ICogQHR5cGUgYm9vbGVhblxuXHRcdCAqL1xuXHRcdGlzV2l0aGluKHgsIHkpIHtcblx0XHRcdC8vIH4gSWYgd2UncmUgbm90IGV2ZW4gdmlzaWJsZSwgbm8gcG9pbnQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXNcblx0XHRcdC8vIH4gYmVpbmcgd2l0aGluIHRoZSBwb3B1cC5cblx0XHRcdGlmICghdGhpcy52aXNpYmxlKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuXHRcdFx0Y29uc3QgZnV6eiA9IHRoaXMuZnV6eiB8fCAwO1xuXHRcdFx0Ly8gfiBVc2UgYSBzaW1wbGUgYm94IG1ldHJpYyBoZXJlLlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0eCArIGZ1enogPj0gdGhpcy5sZWZ0ICYmXG5cdFx0XHRcdHggLSBmdXp6IDw9IHRoaXMubGVmdCArIHRoaXMud2lkdGggJiZcblx0XHRcdFx0eSArIGZ1enogPj0gdGhpcy50b3AgJiZcblx0XHRcdFx0eSAtIGZ1enogPD0gdGhpcy50b3AgKyB0aGlzLmhlaWdodFxuXHRcdFx0KTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogQWRkcyBhIGRvd25sb2FkIHRvIHtAc291cmNlICNkb3dubG9hZHN9LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtEb3dubG9hZGVyfSBkb3dubG9hZFxuXHRcdCAqL1xuXHRcdGFkZERvd25sb2FkKGRvd25sb2FkKSB7XG5cdFx0XHRpZiAoIWRvd25sb2FkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuZG93bmxvYWRzLnB1c2goZG93bmxvYWQpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBBYm9ydHMgdGhlIGRvd25sb2FkcyBsaXN0ZWQgaW4ge0Bzb3VyY2UgI2Rvd25sb2Fkc30uXG5cdFx0ICpcblx0XHQgKiBAc2VlIERvd25sb2FkZXIjYWJvcnRcblx0XHQgKi9cblx0XHRhYm9ydERvd25sb2FkcygpIHtcblx0XHRcdGZvciAoY29uc3QgZCBvZiB0aGlzLmRvd25sb2Fkcykge1xuXHRcdFx0XHRpZiAoZCAmJiBkLmFib3J0KSB7XG5cdFx0XHRcdFx0ZC5hYm9ydCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRvd25sb2FkcyA9IFtdO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICogQSBVSUQgZm9yIGVhY2ggTmF2cG9wdXAuIFRoaXMgY29uc3RydWN0b3IgcHJvcGVydHkgaXMganVzdCBhIGNvdW50ZXIuXG5cdCAqXG5cdCAqIEB0eXBlIGludGVnZXJcblx0ICogQHByaXZhdGVcblx0ICovXG5cdE5hdnBvcHVwLnVpZCA9IDA7XG5cdC8qKlxuXHQgKiBDb3VudGVyIGluZGljYXRpbmcgdGhlIHotb3JkZXIgb2YgdGhlIFwiaGlnaGVzdFwiIHBvcHVwLlxuXHQgKiBXZSBzdGFydCB0aGUgei1pbmRleCBhdCAxMDAwIHNvIHRoYXQgcG9wdXBzIGFyZSBhYm92ZSBldmVyeXRoaW5nXG5cdCAqIGVsc2Ugb24gdGhlIHNjcmVlbi5cblx0ICpcblx0ICogQHByaXZhdGVcblx0ICogQHR5cGUgaW50ZWdlclxuXHQgKi9cblx0TmF2cG9wdXAuaGlnaGVzdCA9IDEwMDA7XG5cdC8qKlxuXHQgKiBBIHtAc291cmNlIE1vdXNldHJhY2tlcn0gaW5zdGFuY2Ugd2hpY2ggaXMgYSBwcm9wZXJ0eSBvZiB0aGUgY29uc3RydWN0b3IgKHBzZXVkby1nbG9iYWwpLlxuXHQgKi9cblx0TmF2cG9wdXAudHJhY2tlciA9IG5ldyBNb3VzZXRyYWNrZXIoKTtcblx0Ly8gRU5ERklMRTogbmF2cG9wdXAuanNcblx0Ly8gU1RBUlRGSUxFOiBkaWZmLmpzXG5cdC8qKlxuXHQgKiBKYXZhc2NyaXB0IERpZmYgQWxnb3JpdGhtIEJ5IEpvaG4gUmVzaWcgKGh0dHA6Ly9lam9obi5vcmcvKSBhbmQgTHVwaW5cblx0ICpcblx0ICogTW9yZSBJbmZvOiBodHRwOi8vZWpvaG4ub3JnL3Byb2plY3RzL2phdmFzY3JpcHQtZGlmZi1hbGdvcml0aG0vXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nW119IHhcblx0ICovXG5cdGNvbnN0IGRlbEZtdCA9ICh4KSA9PiB7XG5cdFx0aWYgKHgubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdHJldHVybiBgPGRlbCBjbGFzcz0ncG9wdXBEaWZmJz4ke3guam9pbignJyl9PC9kZWw+YDtcblx0fTtcblx0Y29uc3QgaW5zRm10ID0gKHgpID0+IHtcblx0XHRpZiAoeC5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0cmV0dXJuIGA8aW5zIGNsYXNzPSdwb3B1cERpZmYnPiR7eC5qb2luKCcnKX08L2lucz5gO1xuXHR9O1xuXHRjb25zdCBjb3VudENyb3NzaW5ncyA9IChhLCBiLCBpLCBlamVjdCkgPT4ge1xuXHRcdC8vIGNvdW50IHRoZSBjcm9zc2luZ3Mgb24gdGhlIGVkZ2Ugc3RhcnRpbmcgYXQgYltpXVxuXHRcdGlmICghYltpXS5yb3cgJiYgYltpXS5yb3cgIT09IDApIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdFx0bGV0IGNvdW50ID0gMDtcblx0XHRmb3IgKGNvbnN0IFtqLCBlbGVtZW50XSBvZiBhLmVudHJpZXMoKSkge1xuXHRcdFx0aWYgKCFlbGVtZW50LnJvdyAmJiBlbGVtZW50LnJvdyAhPT0gMCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmICgoaiAtIGJbaV0ucm93KSAqIChpIC0gZWxlbWVudC5yb3cpID4gMCkge1xuXHRcdFx0XHRpZiAoZWplY3QpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY291bnQ7XG5cdH07XG5cdGNvbnN0IHNob3J0ZW5EaWZmU3RyaW5nID0gZnVuY3Rpb24gc2hvcnRlbkRpZmZTdHJpbmcoc3RyLCBjb250ZXh0KSB7XG5cdFx0Y29uc3QgcmUgPSAvKDxkZWxbXFxTXFxzXSo/PFxcL2RlbD58PGluc1tcXFNcXHNdKj88XFwvaW5zPikvO1xuXHRcdGNvbnN0IHNwbGl0dGVkID0gc3RyLnNwbGl0KHJlKTtcblx0XHRsZXQgcmV0ID0gWycnXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0dGVkLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRpZiAoc3BsaXR0ZWRbaV0ubGVuZ3RoIDwgMiAqIGNvbnRleHQpIHtcblx0XHRcdFx0cmV0W3JldC5sZW5ndGggLSAxXSArPSBzcGxpdHRlZFtpXTtcblx0XHRcdFx0aWYgKGkgKyAxIDwgc3BsaXR0ZWQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0W3JldC5sZW5ndGggLSAxXSArPSBzcGxpdHRlZFtpICsgMV07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoaSA+IDApIHtcblx0XHRcdFx0XHRyZXRbcmV0Lmxlbmd0aCAtIDFdICs9IHNwbGl0dGVkW2ldLnNsaWNlKDAsIE1hdGgubWF4KDAsIGNvbnRleHQpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaSArIDEgPCBzcGxpdHRlZC5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXQucHVzaChzcGxpdHRlZFtpXS5zbGljZShNYXRoLm1heCgwLCBzcGxpdHRlZFtpXS5sZW5ndGggLSBjb250ZXh0KSkgKyBzcGxpdHRlZFtpICsgMV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWxlIChyZXQubGVuZ3RoID4gMCAmJiAhcmV0WzBdKSB7XG5cdFx0XHRyZXQgPSByZXQuc2xpY2UoMSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IGRpZmZTdHJpbmcgPSAobywgbikgPT4ge1xuXHRcdC8vICBXZSBuZWVkIHRvIHNwbGl0IHRoZSBzdHJpbmdzIG8gYW5kIG4gZmlyc3QsIGFuZCBlbnRpZnkoKSB0aGUgcGFydHNcblx0XHQvLyAgaW5kaXZpZHVhbGx5LCBzbyB0aGF0IHRoZSBIVE1MIGVudGl0aWVzIGFyZSBuZXZlciBjdXQgYXBhcnQuIChBeGVsQm9sZHQpXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgb1NwbGl0dGVkID0gby5zcGxpdCgvXFxiLyk7XG5cdFx0Y29uc3QgblNwbGl0dGVkID0gbi5zcGxpdCgvXFxiLyk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IG9TcGxpdHRlZC5sZW5ndGg7ICsraSkge1xuXHRcdFx0b1NwbGl0dGVkW2ldID0gb1NwbGl0dGVkW2ldLmVudGlmeSgpO1xuXHRcdH1cblx0XHRmb3IgKGkgPSAwOyBpIDwgblNwbGl0dGVkLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRuU3BsaXR0ZWRbaV0gPSBuU3BsaXR0ZWRbaV0uZW50aWZ5KCk7XG5cdFx0fVxuXHRcdGNvbnN0IG91dCA9IGRpZmYob1NwbGl0dGVkLCBuU3BsaXR0ZWQpO1xuXHRcdGxldCBzdHIgPSAnJztcblx0XHRsZXQgYWNjID0gW107IC8vIGFjY3VtdWxhdG9yIGZvciBwcmV0dGllciBvdXRwdXRcblxuXHRcdC8vIGNyb3NzaW5nIHBhaXJpbmdzIC0tIGVnICdBIEInIHZzICdCIEEnIC0tIGNhdXNlIHByb2JsZW1zLCBzbyBsZXQncyBpcm9uIHRoZW0gb3V0XG5cdFx0Ly8gdGhpcyBkb2Vzbid0IGFsd2F5cyBkbyB0aGluZ3Mgb3B0aW1hbGx5IGJ1dCBpdCBzaG91bGQgYmUgZmFzdCBlbm91Z2hcblx0XHRsZXQgbWF4T3V0cHV0UGFpciA9IDA7XG5cdFx0Zm9yIChpID0gMDsgaSA8IG91dC5uLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAob3V0Lm5baV0ucGFpcmVkKSB7XG5cdFx0XHRcdGlmIChtYXhPdXRwdXRQYWlyID4gb3V0Lm5baV0ucm93KSB7XG5cdFx0XHRcdFx0Ly8gdGFuZ2xlIC0gZGVsZXRlIHBhaXJpbmdcblx0XHRcdFx0XHRvdXQub1tvdXQubltpXS5yb3ddID0gb3V0Lm9bb3V0Lm5baV0ucm93XS50ZXh0O1xuXHRcdFx0XHRcdG91dC5uW2ldID0gb3V0Lm5baV0udGV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobWF4T3V0cHV0UGFpciA8IG91dC5uW2ldLnJvdykge1xuXHRcdFx0XHRcdG1heE91dHB1dFBhaXIgPSBvdXQubltpXS5yb3c7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gb3V0cHV0IHRoZSBzdHVmZiBwcmVjZWRpbmcgdGhlIGZpcnN0IHBhaXJlZCBvbGQgbGluZVxuXHRcdGZvciAoaSA9IDA7IGkgPCBvdXQuby5sZW5ndGggJiYgIW91dC5vW2ldLnBhaXJlZDsgKytpKSB7XG5cdFx0XHRhY2MucHVzaChvdXQub1tpXSk7XG5cdFx0fVxuXHRcdHN0ciArPSBkZWxGbXQoYWNjKTtcblx0XHRhY2MgPSBbXTtcblx0XHQvLyBtYWluIGxvb3Bcblx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0Lm4ubGVuZ3RoOyArK2kpIHtcblx0XHRcdC8vIG91dHB1dCB1bnBhaXJlZCBuZXcgXCJsaW5lc1wiXG5cdFx0XHR3aGlsZSAoaSA8IG91dC5uLmxlbmd0aCAmJiAhb3V0Lm5baV0ucGFpcmVkKSB7XG5cdFx0XHRcdGFjYy5wdXNoKG91dC5uW2krK10pO1xuXHRcdFx0fVxuXHRcdFx0c3RyICs9IGluc0ZtdChhY2MpO1xuXHRcdFx0YWNjID0gW107XG5cdFx0XHRpZiAoaSA8IG91dC5uLmxlbmd0aCkge1xuXHRcdFx0XHQvLyB0aGlzIG5ldyBcImxpbmVcIiBpcyBwYWlyZWQgd2l0aCB0aGUgKG91dC5uW2ldLnJvdyl0aCBvbGQgXCJsaW5lXCJcblx0XHRcdFx0c3RyICs9IG91dC5uW2ldLnRleHQ7XG5cdFx0XHRcdC8vIG91dHB1dCB1bnBhaXJlZCBvbGQgcm93cyBzdGFydGluZyBhZnRlciB0aGlzIG5ldyBsaW5lJ3MgcGFydG5lclxuXHRcdFx0XHRsZXQgbSA9IG91dC5uW2ldLnJvdyArIDE7XG5cdFx0XHRcdHdoaWxlIChtIDwgb3V0Lm8ubGVuZ3RoICYmICFvdXQub1ttXS5wYWlyZWQpIHtcblx0XHRcdFx0XHRhY2MucHVzaChvdXQub1ttKytdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdHIgKz0gZGVsRm10KGFjYyk7XG5cdFx0XHRcdGFjYyA9IFtdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3RyO1xuXHR9O1xuXHQvLyBzZWUge0BsaW5rIGh0dHA6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9Db3JlX0phdmFTY3JpcHRfMS41X1JlZmVyZW5jZTpHbG9iYWxfT2JqZWN0czpPYmplY3R9XG5cdC8vIEZJWE1FOiB1c2Ugb2JqLmhhc093blByb3BlcnR5IGluc3RlYWQgb2YgdGhpcyBrbHVkZ2UhXG5cdGNvbnN0IGpzUmVzZXJ2ZWRQcm9wZXJ0aWVzID0gbmV3IFJlZ0V4cChcblx0XHQnXihjb25zdHJ1Y3Rvcnxwcm90b3R5cGV8X18oKGRlZmluZXxsb29rdXApW0dTXWV0dGVyKV9fJyArXG5cdFx0XHQnfGV2YWx8aGFzT3duUHJvcGVydHl8cHJvcGVydHlJc0VudW1lcmFibGUnICtcblx0XHRcdCd8dG8oU291cmNlfFN0cmluZ3xMb2NhbGVTdHJpbmcpfCh1bik/d2F0Y2h8dmFsdWVPZikkJ1xuXHQpO1xuXHRjb25zdCBkaWZmQnVnQWxlcnQgPSBmdW5jdGlvbiBkaWZmQnVnQWxlcnQod29yZCkge1xuXHRcdGlmICghZGlmZkJ1Z0FsZXJ0Lmxpc3Rbd29yZF0pIHtcblx0XHRcdGRpZmZCdWdBbGVydC5saXN0W3dvcmRdID0gMTtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGBCYWQgd29yZDogJHt3b3JkfVxcblxcblBsZWFzZSByZXBvcnQgdGhpcyBidWcuYCwge3RhZzogJ3BvcHVwcycsIHR5cGU6ICdlcnJvcid9KTtcblx0XHR9XG5cdH07XG5cdGRpZmZCdWdBbGVydC5saXN0ID0ge307XG5cdGNvbnN0IG1ha2VEaWZmSGFzaHRhYmxlID0gKHNyYykgPT4ge1xuXHRcdGNvbnN0IHJldCA9IHt9O1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoanNSZXNlcnZlZFByb3BlcnRpZXMudGVzdChzcmNbaV0pKSB7XG5cdFx0XHRcdHNyY1tpXSArPSAnPCEtLSAtLT4nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFyZXRbc3JjW2ldXSkge1xuXHRcdFx0XHRyZXRbc3JjW2ldXSA9IFtdO1xuXHRcdFx0fVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0W3NyY1tpXV0ucHVzaChpKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRkaWZmQnVnQWxlcnQoc3JjW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgZGlmZiA9IChvLCBuKSA9PiB7XG5cdFx0Ly8gcGFzcyAxOiBtYWtlIGhhc2h0YWJsZSBucyB3aXRoIG5ldyByb3dzIGFzIGtleXNcblx0XHRjb25zdCBucyA9IG1ha2VEaWZmSGFzaHRhYmxlKG4pO1xuXHRcdC8vIHBhc3MgMjogbWFrZSBoYXNodGFibGUgb3Mgd2l0aCBvbGQgcm93cyBhcyBrZXlzXG5cdFx0Y29uc3Qgb3MgPSBtYWtlRGlmZkhhc2h0YWJsZShvKTtcblx0XHQvLyBwYXNzIDM6IHBhaXIgdW5pcXVlIG5ldyByb3dzIGFuZCBtYXRjaGluZyB1bmlxdWUgb2xkIHJvd3Ncblx0XHRsZXQgaTtcblx0XHRmb3IgKGkgaW4gbnMpIHtcblx0XHRcdGlmIChuc1tpXS5sZW5ndGggPT09IDEgJiYgb3NbaV0gJiYgb3NbaV0ubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdG5bbnNbaV1bMF1dID0ge1xuXHRcdFx0XHRcdHRleHQ6IG5bbnNbaV1bMF1dLFxuXHRcdFx0XHRcdHJvdzogb3NbaV1bMF0sXG5cdFx0XHRcdFx0cGFpcmVkOiB0cnVlLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRvW29zW2ldWzBdXSA9IHtcblx0XHRcdFx0XHR0ZXh0OiBvW29zW2ldWzBdXSxcblx0XHRcdFx0XHRyb3c6IG5zW2ldWzBdLFxuXHRcdFx0XHRcdHBhaXJlZDogdHJ1ZSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGFzcyA0OiBwYWlyIG1hdGNoaW5nIHJvd3MgaW1tZWRpYXRlbHkgZm9sbG93aW5nIHBhaXJlZCByb3dzIChub3QgbmVjZXNzYXJpbHkgdW5pcXVlKVxuXHRcdGZvciAoaSA9IDA7IGkgPCBuLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuW2ldLnBhaXJlZCAmJlxuXHRcdFx0XHQhbltpICsgMV0ucGFpcmVkICYmXG5cdFx0XHRcdG5baV0ucm93ICsgMSA8IG8ubGVuZ3RoICYmXG5cdFx0XHRcdCFvW25baV0ucm93ICsgMV0ucGFpcmVkICYmXG5cdFx0XHRcdG5baSArIDFdID09PSBvW25baV0ucm93ICsgMV1cblx0XHRcdCkge1xuXHRcdFx0XHRuW2kgKyAxXSA9IHtcblx0XHRcdFx0XHR0ZXh0OiBuW2kgKyAxXSxcblx0XHRcdFx0XHRyb3c6IG5baV0ucm93ICsgMSxcblx0XHRcdFx0XHRwYWlyZWQ6IHRydWUsXG5cdFx0XHRcdH07XG5cdFx0XHRcdG9bbltpXS5yb3cgKyAxXSA9IHtcblx0XHRcdFx0XHR0ZXh0OiBvW25baV0ucm93ICsgMV0sXG5cdFx0XHRcdFx0cm93OiBpICsgMSxcblx0XHRcdFx0XHRwYWlyZWQ6IHRydWUsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHBhc3MgNTogcGFpciBtYXRjaGluZyByb3dzIGltbWVkaWF0ZWx5IHByZWNlZGluZyBwYWlyZWQgcm93cyAobm90IG5lY2Vzc2FyaWx5IHVuaXF1ZSlcblx0XHRmb3IgKGkgPSBuLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bltpXS5wYWlyZWQgJiZcblx0XHRcdFx0IW5baSAtIDFdLnBhaXJlZCAmJlxuXHRcdFx0XHRuW2ldLnJvdyA+IDAgJiZcblx0XHRcdFx0IW9bbltpXS5yb3cgLSAxXS5wYWlyZWQgJiZcblx0XHRcdFx0bltpIC0gMV0gPT09IG9bbltpXS5yb3cgLSAxXVxuXHRcdFx0KSB7XG5cdFx0XHRcdG5baSAtIDFdID0ge1xuXHRcdFx0XHRcdHRleHQ6IG5baSAtIDFdLFxuXHRcdFx0XHRcdHJvdzogbltpXS5yb3cgLSAxLFxuXHRcdFx0XHRcdHBhaXJlZDogdHJ1ZSxcblx0XHRcdFx0fTtcblx0XHRcdFx0b1tuW2ldLnJvdyAtIDFdID0ge1xuXHRcdFx0XHRcdHRleHQ6IG9bbltpXS5yb3cgLSAxXSxcblx0XHRcdFx0XHRyb3c6IGkgLSAxLFxuXHRcdFx0XHRcdHBhaXJlZDogdHJ1ZSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdG8sXG5cdFx0XHRuLFxuXHRcdH07XG5cdH07XG5cdC8vIEVOREZJTEU6IGRpZmYuanNcblx0Ly8gU1RBUlRGSUxFOiBpbml0LmpzXG5cdGNvbnN0IHNldFNpdGVJbmZvID0gKCkgPT4ge1xuXHRcdGlmICh3aW5kb3cucG9wdXBMb2NhbERlYnVnKSB7XG5cdFx0XHRwZy53aWtpLmhvc3RuYW1lID0gJ2VuLndpa2lwZWRpYS5vcmcnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwZy53aWtpLmhvc3RuYW1lID0gbG9jYXRpb24uaG9zdG5hbWU7IC8vIHVzZSBpbiBwcmVmZXJlbmNlIHRvIGxvY2F0aW9uLmhvc3RuYW1lIGZvciBmbGV4aWJpbGl0eSAoPylcblx0XHR9XG5cdFx0cGcud2lraS53aWtpbWVkaWEgPVxuXHRcdFx0Lyh3aWtpKFttcF1lZGlhfHNvdXJjZXxib29rc3xuZXdzfHF1b3RlfHZlcnNpdHl8c3BlY2llc3x2b3lhZ2V8ZGF0YSl8bWV0YXdpa2l8d2lrdGlvbmFyeXxtZWRpYXdpa2kpXFwub3JnLy50ZXN0KFxuXHRcdFx0XHRwZy53aWtpLmhvc3RuYW1lXG5cdFx0XHQpO1xuXHRcdHBnLndpa2kud2lraWEgPSAvXFwud2lraWFcXC5jb20kL2kudGVzdChwZy53aWtpLmhvc3RuYW1lKTtcblx0XHRwZy53aWtpLmlzTG9jYWwgPSBwZy53aWtpLmhvc3RuYW1lLnN0YXJ0c1dpdGgoJ2xvY2FsaG9zdCcpO1xuXHRcdHBnLndpa2kuY29tbW9ucyA9XG5cdFx0XHRwZy53aWtpLndpa2ltZWRpYSAmJiBwZy53aWtpLmhvc3RuYW1lICE9PSAnY29tbW9ucy53aWtpbWVkaWEub3JnJyA/ICdjb21tb25zLndpa2ltZWRpYS5vcmcnIDogbnVsbDtcblx0XHRwZy53aWtpLmxhbmcgPSBtdy5jb25maWcuZ2V0KCd3Z0NvbnRlbnRMYW5ndWFnZScpO1xuXHRcdGNvbnN0IHBvcnQgPSBsb2NhdGlvbi5wb3J0ID8gYDoke2xvY2F0aW9uLnBvcnR9YCA6ICcnO1xuXHRcdHBnLndpa2kuc2l0ZWJhc2UgPSBwZy53aWtpLmhvc3RuYW1lICsgcG9ydDtcblx0fTtcblx0Y29uc3Qgc2V0VXNlckluZm8gPSAoKSA9PiB7XG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bGlzdDogJ3VzZXJzJyxcblx0XHRcdHVzdXNlcnM6IG13LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKSxcblx0XHRcdHVzcHJvcDogJ3JpZ2h0cycsXG5cdFx0fTtcblx0XHRwZy51c2VyLmNhblJldmlldyA9IGZhbHNlO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cFJldmlldycpKSB7XG5cdFx0XHRnZXRNd0FwaSgpXG5cdFx0XHRcdC5nZXQocGFyYW1zKVxuXHRcdFx0XHQuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IFt7cmlnaHRzfV0gPSBkYXRhLnF1ZXJ5LnVzZXJzO1xuXHRcdFx0XHRcdHBnLnVzZXIuY2FuUmV2aWV3ID0gcmlnaHRzLmluY2x1ZGVzKCdyZXZpZXcnKTsgLy8gVE9ETzogU2hvdWxkIGl0IGJlIGEgZ2V0VmFsdWVPZignUmV2aWV3UmlnaHQnKSA/XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgZmV0Y2hTcGVjaWFsUGFnZU5hbWVzID0gKCkgPT4ge1xuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bWF4YWdlOiAzNjAwLFxuXHRcdFx0bWV0YTogJ3NpdGVpbmZvJyxcblx0XHRcdHNpcHJvcDogJ3NwZWNpYWxwYWdlYWxpYXNlcycsXG5cdFx0XHQvLyBjYWNoZSBmb3IgYW4gaG91clxuXHRcdFx0dXNlbGFuZzogJ2NvbnRlbnQnLFxuXHRcdH07XG5cdFx0cmV0dXJuIGdldE13QXBpKClcblx0XHRcdC5nZXQocGFyYW1zKVxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0cGcud2lraS5zcGVjaWFscGFnZWFsaWFzZXMgPSBkYXRhLnF1ZXJ5LnNwZWNpYWxwYWdlYWxpYXNlcztcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBzZXRUaXRsZUJhc2UgPSAoKSA9PiB7XG5cdFx0Y29uc3QgcHJvdG9jb2wgPSB3aW5kb3cucG9wdXBMb2NhbERlYnVnID8gJ2h0dHA6JyA6IGxvY2F0aW9uLnByb3RvY29sO1xuXHRcdHBnLndpa2kuYXJ0aWNsZVBhdGggPSBtdy5jb25maWcuZ2V0KCd3Z0FydGljbGVQYXRoJykucmVwbGFjZSgvXFwvXFwkMS8sICcnKTsgLy8gYXMgaW4gaHR0cDovL3NvbWUudGhpbmcuY29tL3dpa2kvQXJ0aWNsZVxuXHRcdHBnLndpa2kuYm90SW50ZXJmYWNlUGF0aCA9IG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0Jyk7XG5cdFx0cGcud2lraS5BUElQYXRoID0gYCR7bXcuY29uZmlnLmdldCgnd2dTY3JpcHRQYXRoJyl9L2FwaS5waHBgO1xuXHRcdC8vIGRlZmF1bHQgbWVkaWF3aWtpIHNldHRpbmcgaXMgcGF0aHMgbGlrZSBodHRwOi8vc29tZS50aGluZy5jb20vYXJ0aWNsZVBhdGgvaW5kZXgucGhwP3RpdGxlPWZvb1xuXHRcdGNvbnN0IHRpdGxldGFpbCA9IGAke3BnLndpa2kuYm90SW50ZXJmYWNlUGF0aH0/dGl0bGU9YDtcblx0XHQvLyBsZXQgdGl0bGV0YWlsMiA9IGpvaW5QYXRoKFtwZy53aWtpLmJvdEludGVyZmFjZVBhdGgsICd3aWtpLnBodG1sP3RpdGxlPSddKTtcblx0XHQvLyBvdGhlciBzaXRlcyBtYXkgbmVlZCB0byBhZGQgY29kZSBoZXJlIHRvIHNldCB0aXRsZXRhaWwgZGVwZW5kaW5nIG9uIGhvdyB0aGVpciB1cmxzIHdvcmtcblx0XHRwZy53aWtpLnRpdGxlYmFzZSA9IGAke3Byb3RvY29sfS8vJHtwZy53aWtpLnNpdGViYXNlfSR7dGl0bGV0YWlsfWA7XG5cdFx0Ly8gcGcud2lraS50aXRsZWJhc2UyICA9IHByb3RvY29sICsgJy8vJyArIGpvaW5QYXRoKFtwZy53aWtpLnNpdGViYXNlLCB0aXRsZXRhaWwyXSk7XG5cdFx0cGcud2lraS53aWtpYmFzZSA9IGAke3Byb3RvY29sfS8vJHtwZy53aWtpLnNpdGViYXNlfSR7cGcud2lraS5ib3RJbnRlcmZhY2VQYXRofWA7XG5cdFx0cGcud2lraS5hcGl3aWtpYmFzZSA9IGAke3Byb3RvY29sfS8vJHtwZy53aWtpLnNpdGViYXNlfSR7cGcud2lraS5BUElQYXRofWA7XG5cdFx0cGcud2lraS5hcnRpY2xlYmFzZSA9IGAke3Byb3RvY29sfS8vJHtwZy53aWtpLnNpdGViYXNlfSR7cGcud2lraS5hcnRpY2xlUGF0aH1gO1xuXHRcdHBnLndpa2kuY29tbW9uc2Jhc2UgPSBgJHtwcm90b2NvbH0vLyR7cGcud2lraS5jb21tb25zfSR7cGcud2lraS5ib3RJbnRlcmZhY2VQYXRofWA7XG5cdFx0cGcud2lraS5hcGljb21tb25zYmFzZSA9IGAke3Byb3RvY29sfS8vJHtwZy53aWtpLmNvbW1vbnN9JHtwZy53aWtpLkFQSVBhdGh9YDtcblx0XHRwZy5yZS5iYXNlbmFtZXMgPSBuZXcgUmVnRXhwKGBeKCR7bWFwKGxpdGVyYWxpemVSZWdleCwgW3BnLndpa2kudGl0bGViYXNlLCBwZy53aWtpLmFydGljbGViYXNlXSkuam9pbignfCcpfSlgKTtcblx0fTtcblx0Ly8gR2xvYmFsIHJlZ2V4cHNcblx0Y29uc3Qgc2V0TWFpblJlZ2V4ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHJlU3RhcnQgPSAnW146XSo6Ly8nO1xuXHRcdGxldCBwcmVUaXRsZXMgPSBgJHtsaXRlcmFsaXplUmVnZXgobXcuY29uZmlnLmdldCgnd2dTY3JpcHRQYXRoJykpfS8oPzppbmRleFsuXXBocHx3aWtpWy5dcGh0bWwpWz9ddGl0bGU9YDtcblx0XHRwcmVUaXRsZXMgKz0gYHwke2xpdGVyYWxpemVSZWdleChgJHtwZy53aWtpLmFydGljbGVQYXRofS9gKX1gO1xuXHRcdGNvbnN0IHJlRW5kID0gYCgke3ByZVRpdGxlc30pKFteJj8jXSopW14jXSooPzojKC4rKSk/YDtcblx0XHRwZy5yZS5tYWluID0gbmV3IFJlZ0V4cChyZVN0YXJ0ICsgbGl0ZXJhbGl6ZVJlZ2V4KHBnLndpa2kuc2l0ZWJhc2UpICsgcmVFbmQpO1xuXHR9O1xuXHRjb25zdCBidWlsZFNwZWNpYWxQYWdlR3JvdXAgPSAoc3BlY2lhbFBhZ2VPYmopID0+IHtcblx0XHRjb25zdCB2YXJpYW50cyA9IFtdO1xuXHRcdHZhcmlhbnRzLnB1c2goXG5cdFx0XHRtdy51dGlsLmVzY2FwZVJlZ0V4cChzcGVjaWFsUGFnZU9iai5yZWFsbmFtZSksXG5cdFx0XHRtdy51dGlsLmVzY2FwZVJlZ0V4cChlbmNvZGVVUkkoc3BlY2lhbFBhZ2VPYmoucmVhbG5hbWUpKVxuXHRcdCk7XG5cdFx0Zm9yIChjb25zdCBhbGlhcyBvZiBzcGVjaWFsUGFnZU9iai5hbGlhc2VzKSB7XG5cdFx0XHR2YXJpYW50cy5wdXNoKG13LnV0aWwuZXNjYXBlUmVnRXhwKGFsaWFzKSwgbXcudXRpbC5lc2NhcGVSZWdFeHAoZW5jb2RlVVJJKGFsaWFzKSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFyaWFudHMuam9pbignfCcpO1xuXHR9O1xuXHRjb25zdCBzZXRSZWdleHBzID0gKCkgPT4ge1xuXHRcdHNldE1haW5SZWdleCgpO1xuXHRcdGNvbnN0IHNwID0gbnNSZShwZy5uc1NwZWNpYWxJZCk7XG5cdFx0cGcucmUudXJsTm9Qb3B1cCA9IG5ldyBSZWdFeHAoYCgodGl0bGU9fC8pJHtzcH0oPzolM0F8Oil8c2VjdGlvbj1bMC05XXxeIyQpYCk7XG5cdFx0Zm9yIChjb25zdCBzcGVjaWFscGFnZSBvZiBwZy53aWtpLnNwZWNpYWxwYWdlYWxpYXNlcykge1xuXHRcdFx0c3dpdGNoIChzcGVjaWFscGFnZS5yZWFsbmFtZSkge1xuXHRcdFx0XHRjYXNlICdDb250cmlidXRpb25zJzpcblx0XHRcdFx0XHRwZy5yZS5jb250cmlicyA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRgKHRpdGxlPXwvKSR7c3B9KD86JTNBfDopKD86JHtidWlsZFNwZWNpYWxQYWdlR3JvdXAoc3BlY2lhbHBhZ2UpfSlgICtcblx0XHRcdFx0XHRcdFx0YCgmdGFyZ2V0PXwvfC8ke25zUmUocGcubnNVc2VySWQpfTopKC4qKWAsXG5cdFx0XHRcdFx0XHQnaSdcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdEaWZmJzpcblx0XHRcdFx0XHRwZy5yZS5zcGVjaWFsZGlmZiA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRgLyR7c3B9KD86JTNBfDopKD86JHtidWlsZFNwZWNpYWxQYWdlR3JvdXAoc3BlY2lhbHBhZ2UpfSkvKFtePyNdKilgLFxuXHRcdFx0XHRcdFx0J2knXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnRW1haWx1c2VyJzpcblx0XHRcdFx0XHRwZy5yZS5lbWFpbCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRgKHRpdGxlPXwvKSR7c3B9KD86JTNBfDopKD86JHtidWlsZFNwZWNpYWxQYWdlR3JvdXAoc3BlY2lhbHBhZ2UpfSlgICtcblx0XHRcdFx0XHRcdFx0YCgmdGFyZ2V0PXwvfC8oPzoke25zUmUocGcubnNVc2VySWQpfTopPykoLiopYCxcblx0XHRcdFx0XHRcdCdpJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ1doYXRsaW5rc2hlcmUnOlxuXHRcdFx0XHRcdHBnLnJlLmJhY2tsaW5rcyA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRgKHRpdGxlPXwvKSR7c3B9KD86JTNBfDopKD86JHtidWlsZFNwZWNpYWxQYWdlR3JvdXAoc3BlY2lhbHBhZ2UpfSkoJnRhcmdldD18LykoW14mXSopYCxcblx0XHRcdFx0XHRcdCdpJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IGltID0gbnNSZUltYWdlKCk7XG5cdFx0Ly8gbm90ZTogdHJpZXMgdG8gZ2V0IGltYWdlcyBpbiBpbmZvYm94IHRlbXBsYXRlcyB0b28sIGUuZy4gbW92aWUgcGFnZXMsIGFsYnVtIHBhZ2VzIGV0Y1xuXHRcdC8vXHRcdFx0XHRcdCAgKF58XFxbXFxbKWltYWdlOiAqKFtefFxcXV0qW158XFxdIF0pICpcblx0XHQvL1x0XHRcdFx0XHQgIChefFxcW1xcWylpbWFnZTogKihbXnxcXF1dKltefFxcXSBdKShbXjAtOVxcXV0qKFswLTldKykgKnB4KT9cblx0XHQvL1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkNCA9IDEyMCBhcyBpbiAxMjBweFxuXHRcdHBnLnJlLmltYWdlID0gbmV3IFJlZ0V4cChcblx0XHRcdGAoXnxcXFxcW1xcXFxbKSR7aW19OiAqKFtefFxcXFxdXSpbXnxcXFxcXSBdKSR7U3RyaW5nLnJhd2AoW14wLTlcXF1dKihbMC05XSspICpweCk/fCg/OlxcbiAqW3xdP3xbfF0pICpgfSgke2dldFZhbHVlT2YoJ3BvcHVwSW1hZ2VWYXJzUmVnZXhwJyl9KWAgK1xuXHRcdFx0XHRgICo9ICooPzpcXFxcW1xcXFxbICopPyg/OiR7aW19Oik/JHtTdHJpbmcucmF3YChbXnxdKj8pKD86XFxdXFxdKT8gKlt8XT8gKlxcbmB9YCxcblx0XHRcdCdpbWcnXG5cdFx0KTtcblx0XHRwZy5yZS5pbWFnZUJyYWNrZXRDb3VudCA9IDY7XG5cdFx0cGcucmUuY2F0ZWdvcnkgPSBuZXcgUmVnRXhwKGBcXFxcW1xcXFxbJHtuc1JlKHBnLm5zQ2F0ZWdvcnlJZCl9OiAqKFtefFxcXFxdXSpbXnxcXFxcXSBdKSAqYCwgJ2knKTtcblx0XHRwZy5yZS5jYXRlZ29yeUJyYWNrZXRDb3VudCA9IDE7XG5cdFx0Ly8gSVB2NiB8IElQdjRcblx0XHRwZy5yZS5pcFVzZXIgPVxuXHRcdFx0L14oPzo6KD86OnwoPzo6W1xcZEEtRmEtZl17MSw0fSl7MSw3fSl8W1xcZEEtRmEtZl17MSw0fSg/OjpbXFxkQS1GYS1mXXsxLDR9KXswLDZ9Ojp8W1xcZEEtRmEtZl17MSw0fSg/OjpbXFxkQS1GYS1mXXsxLDR9KXs3fSl8KCgoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XVxcZHxcXGQpXFwuKXszfSgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldXFxkfFxcZCkpJC87XG5cdFx0cGcucmUuc3R1YiA9IG5ldyBSZWdFeHAoZ2V0VmFsdWVPZigncG9wdXBTdHViUmVnZXhwJyksICdpbScpO1xuXHRcdHBnLnJlLmRpc2FtYmlnID0gbmV3IFJlZ0V4cChnZXRWYWx1ZU9mKCdwb3B1cERhYlJlZ2V4cCcpLCAnaW0nKTtcblx0XHQvLyBGSVhNRSByZXBsYWNlIHdpdGggZ2VuZXJhbCBwYXJhbWV0ZXIgcGFyc2luZyBmdW5jdGlvbiwgdGhpcyBpcyBkYWZ0XG5cdFx0cGcucmUub2xkaWQgPSAvWyY/XW9sZGlkPShbXiZdKikvO1xuXHRcdHBnLnJlLmRpZmYgPSAvWyY/XWRpZmY9KFteJl0qKS87XG5cdH07XG5cdC8vIG1pc2NlbGxhbnlcblx0Y29uc3Qgc2V0dXBDYWNoZSA9ICgpID0+IHtcblx0XHQvLyBwYWdlIGNhY2hpbmdcblx0XHRwZy5jYWNoZS5wYWdlcyA9IFtdO1xuXHR9O1xuXHRjb25zdCBzZXRNaXNjID0gKCkgPT4ge1xuXHRcdHBnLmN1cnJlbnQubGluayA9IG51bGw7XG5cdFx0cGcuY3VycmVudC5saW5rcyA9IFtdO1xuXHRcdHBnLmN1cnJlbnQubGlua3NIYXNoID0ge307XG5cdFx0c2V0dXBDYWNoZSgpO1xuXHRcdHBnLnRpbWVyLmNoZWNrUG9wdXBQb3NpdGlvbiA9IG51bGw7XG5cdFx0cGcuY291bnRlci5sb29wID0gMDtcblx0XHQvLyBpZHMgY2hhbmdlIHdpdGggZWFjaCBwb3B1cDogcG9wdXBJbWFnZTAsIHBvcHVwSW1hZ2UxIGV0Y1xuXHRcdHBnLmlkTnVtYmVyID0gMDtcblx0XHQvLyBmb3IgbXlEZWNvZGVVUklcblx0XHRwZy5taXNjLmRlY29kZUV4dHJhcyA9IFtcblx0XHRcdHtmcm9tOiAnJTJDJywgdG86ICcsJ30sXG5cdFx0XHR7ZnJvbTogJ18nLCB0bzogJyAnfSxcblx0XHRcdHtmcm9tOiAnJTI0JywgdG86ICckJ30sXG5cdFx0XHR7ZnJvbTogJyUyNicsIHRvOiAnJid9LCAvLyBubyAsXG5cdFx0XTtcblx0fTtcblx0Y29uc3QgZ2V0TXdBcGkgPSAoKSA9PiB7XG5cdFx0aWYgKCFwZy5hcGkuY2xpZW50KSB7XG5cdFx0XHRwZy5hcGkudXNlckFnZW50ID0gJ05hdmlnYXRpb24gcG9wdXBzLzEuMCc7XG5cdFx0XHRwZy5hcGkuY2xpZW50ID0gYXBpO1xuXHRcdH1cblx0XHRyZXR1cm4gcGcuYXBpLmNsaWVudDtcblx0fTtcblx0Ly8gV2UgbmVlZCBhIGNhbGxiYWNrIHNpbmNlIHRoaXMgbWlnaHQgZW5kIHVwIGFzeW5jaHJvbm91cyBiZWNhdXNlIG9mXG5cdC8vIHRoZSBtdy5sb2FkZXIudXNpbmcoKSBjYWxsLlxuXHRjb25zdCBzZXR1cFBvcHVwcyA9IGZ1bmN0aW9uIHNldHVwUG9wdXBzKGNhbGxiYWNrKSB7XG5cdFx0aWYgKHNldHVwUG9wdXBzLmNvbXBsZXRlZCkge1xuXHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBUaGVzZSBkZXBlbmRlbmNpZXMgc2hvdWxkIGFsc2UgYmUgZW5mb3JjZWQgZnJvbSB0aGUgZ2FkZ2V0LFxuXHRcdC8vIGJ1dCBub3QgZXZlcnlvbmUgbG9hZHMgdGhpcyBhcyBhIGdhZGdldCwgc28gZG91YmxlIGNoZWNrXG5cdFx0ZmV0Y2hTcGVjaWFsUGFnZU5hbWVzKCkudGhlbigoKSA9PiB7XG5cdFx0XHQvLyBOQiB0cmFuc2xhdGFibGUgc3RyaW5ncyBzaG91bGQgYmUgc2V0IHVwIGZpcnN0IChzdHJpbmdzLmpzKVxuXHRcdFx0Ly8gYmFzaWNzXG5cdFx0XHRzZXR1cERlYnVnZ2luZygpO1xuXHRcdFx0c2V0U2l0ZUluZm8oKTtcblx0XHRcdHNldFRpdGxlQmFzZSgpO1xuXHRcdFx0c2V0T3B0aW9ucygpOyAvLyBzZWUgb3B0aW9ucy5qc1xuXHRcdFx0c2V0VXNlckluZm8oKTtcblx0XHRcdC8vIG5hbWVzcGFjZXMgZXRjXG5cdFx0XHRzZXROYW1lc3BhY2VzKCk7XG5cdFx0XHRzZXRJbnRlcndpa2koKTtcblx0XHRcdC8vIHJlZ2V4cHNcblx0XHRcdHNldFJlZ2V4cHMoKTtcblx0XHRcdHNldFJlZGlycygpO1xuXHRcdFx0Ly8gb3RoZXIgc3R1ZmZcblx0XHRcdHNldE1pc2MoKTtcblx0XHRcdHNldHVwTGl2ZVByZXZpZXcoKTtcblx0XHRcdC8vIG1haW4gZGVhbCBoZXJlXG5cdFx0XHRzZXR1cFRvb2x0aXBzKCk7XG5cdFx0XHRsb2coJ0luIHNldHVwUG9wdXBzKCksIGp1c3QgY2FsbGVkIHNldHVwVG9vbHRpcHMoKScpO1xuXHRcdFx0TmF2cG9wdXAudHJhY2tlci5lbmFibGUoKTtcblx0XHRcdHNldHVwUG9wdXBzLmNvbXBsZXRlZCA9IHRydWU7XG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cdC8vIEVOREZJTEU6IGluaXQuanNcblx0Ly8gU1RBUlRGSUxFOiBuYXZsaW5rcy5qc1xuXHQvLyBuYXZsaW5rcy4uLiBsZXQgdGhlIGZ1biBiZWdpblxuXHQvL1xuXHRjb25zdCBkZWZhdWx0TmF2bGlua1NwZWMgPSAoKSA9PiB7XG5cdFx0bGV0IHN0ciA9ICcnO1xuXHRcdHN0ciArPSAnPGI+PDxtYWlubGlua3xzaG9ydGN1dD0gPj48L2I+Jztcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBMYXN0RWRpdExpbmsnKSkge1xuXHRcdFx0c3RyICs9ICcqPDxsYXN0RWRpdHxzaG9ydGN1dD0vPj58PDxsYXN0Q29udHJpYj4+fDw8c2luY2VNZT4+aWYob2xkaWQpe3w8PG9sZEVkaXQ+Pnw8PGRpZmZDdXI+Pn0nO1xuXHRcdH1cblx0XHQvLyB1c2VyIGxpbmtzXG5cdFx0Ly8gY29udHJpYnMgLSBsb2cgLSBjb3VudCAtIGVtYWlsIC0gYmxvY2tcblx0XHQvLyBjb3VudCBvbmx5IGlmIGFwcGxpY2FibGU7IGJsb2NrIG9ubHkgaWYgcG9wdXBBZG1pbkxpbmtzXG5cdFx0c3RyICs9ICdpZih1c2VyKXs8YnI+PDxjb250cmlic3xzaG9ydGN1dD1jPj4qPDx1c2VybG9nfHNob3J0Y3V0PUx8bG9nPj4nO1xuXHRcdHN0ciArPSAnaWYoaXB1c2VyKXsqPDxhcmluPj59aWYod2lraW1lZGlhKXsqPDxjb3VudHxzaG9ydGN1dD0jPj59Jztcblx0XHRzdHIgKz0gJ2lmKGlwdXNlcil7fWVsc2V7Kjw8ZW1haWx8c2hvcnRjdXQ9RT4+fWlmKGFkbWluKXsqPDxibG9ja3xzaG9ydGN1dD1iPj58PDxibG9ja2xvZ3xsb2c+Pn19Jztcblx0XHQvLyBlZGl0aW5nIGxpbmtzXG5cdFx0Ly8gdGFsa3BhZ2UgICAtPiBlZGl0fG5ldyAtIGhpc3RvcnkgLSB1bnx3YXRjaCAtIGFydGljbGV8ZWRpdFxuXHRcdC8vIG90aGVyIHBhZ2UgLT4gZWRpdCAtIGhpc3RvcnkgLSB1bnx3YXRjaCAtIHRhbGt8ZWRpdHxuZXdcblx0XHRjb25zdCBlZGl0c3RyID0gJzw8ZWRpdHxzaG9ydGN1dD1lPj4nO1xuXHRcdGNvbnN0IGVkaXRPbGRpZFN0ciA9IGBpZihvbGRpZCl7PDxlZGl0T2xkfHNob3J0Y3V0PWU+Pnw8PHJldmVydHxzaG9ydGN1dD12fHJ2Pj58PDxlZGl0fGN1cj4+fWVsc2V7JHtlZGl0c3RyfX1gO1xuXHRcdGNvbnN0IGhpc3RvcnlzdHIgPSAnPDxoaXN0b3J5fHNob3J0Y3V0PWg+Pnw8PGVkaXRvcnN8c2hvcnRjdXQ9RXw+Pic7XG5cdFx0Y29uc3Qgd2F0Y2hzdHIgPSAnPDx1bndhdGNofHVud2F0Y2hTaG9ydD4+fDw8d2F0Y2h8c2hvcnRjdXQ9d3x3YXRjaFRoaW5neT4+Jztcblx0XHRzdHIgKz1cblx0XHRcdGA8YnI+aWYodGFsayl7JHtlZGl0T2xkaWRTdHJ9fDw8bmV3fHNob3J0Y3V0PSs+PmAgK1xuXHRcdFx0YCoke2hpc3RvcnlzdHJ9KiR7d2F0Y2hzdHJ9KmAgK1xuXHRcdFx0JzxiPjw8YXJ0aWNsZXxzaG9ydGN1dD1hPj48L2I+fDw8ZWRpdEFydGljbGV8ZWRpdD4+JyArXG5cdFx0XHRgfWVsc2V7JHtcblx0XHRcdFx0Ly8gbm90IGEgdGFsayBwYWdlXG5cdFx0XHRcdGVkaXRPbGRpZFN0clxuXHRcdFx0fSoke2hpc3RvcnlzdHJ9KiR7d2F0Y2hzdHJ9KmAgK1xuXHRcdFx0JzxiPjw8dGFsa3xzaG9ydGN1dD10Pj48L2I+fDw8ZWRpdFRhbGt8ZWRpdD4+fDw8bmV3VGFsa3xzaG9ydGN1dD0rfG5ldz4+fSc7XG5cdFx0Ly8gbWlzYyBsaW5rc1xuXHRcdHN0ciArPSAnPGJyPjw8d2hhdExpbmtzSGVyZXxzaG9ydGN1dD1sPj4qPDxyZWxhdGVkQ2hhbmdlc3xzaG9ydGN1dD1yPj4qPDxtb3ZlfHNob3J0Y3V0PW0+Pic7XG5cdFx0Ly8gYWRtaW4gbGlua3Ncblx0XHRzdHIgKz1cblx0XHRcdCdpZihhZG1pbil7PGJyPjw8dW5wcm90ZWN0fHVucHJvdGVjdFNob3J0Pj58PDxwcm90ZWN0fHNob3J0Y3V0PXA+Pnw8PHByb3RlY3Rsb2d8bG9nPj4qJyArXG5cdFx0XHQnPDx1bmRlbGV0ZXx1bmRlbGV0ZVNob3J0Pj58PDxkZWxldGV8c2hvcnRjdXQ9ZD4+fDw8ZGVsZXRlbG9nfGxvZz4+fSc7XG5cdFx0cmV0dXJuIHN0cjtcblx0fTtcblx0Y29uc3QgbmF2TGlua3NIVE1MID0gKGFydGljbGUsIF9oaW50LCBwYXJhbXMpID0+IHtcblx0XHQvLyBvbGRpZCwgcmNpZCkge1xuXHRcdGNvbnN0IHN0ciA9IGA8c3BhbiBjbGFzcz1cInBvcHVwTmF2TGlua3NcIj4ke2RlZmF1bHROYXZsaW5rU3BlYygpfTwvc3Bhbj5gO1xuXHRcdC8vIEJBTVxuXHRcdHJldHVybiBuYXZsaW5rU3RyaW5nVG9IVE1MKHN0ciwgYXJ0aWNsZSwgcGFyYW1zKTtcblx0fTtcblx0Y29uc3QgZXhwYW5kQ29uZGl0aW9uYWxOYXZsaW5rU3RyaW5nID0gZnVuY3Rpb24gZXhwYW5kQ29uZGl0aW9uYWxOYXZsaW5rU3RyaW5nKHMsIGFydGljbGUsIHosIHJlY3Vyc2lvbkNvdW50KSB7XG5cdFx0Y29uc3Qge29sZGlkfSA9IHo7XG5cdFx0Y29uc3Qge3JjaWR9ID0gejtcblx0XHRjb25zdCB7ZGlmZn0gPSB6O1xuXHRcdC8vIG5lc3RlZCBjb25kaXRpb25hbHMgKHVwIHRvIDEwIGRlZXApIGFyZSBvaywgaG9wZWZ1bGx5ISAod29yayBmcm9tIHRoZSBpbnNpZGUgb3V0KVxuXHRcdGlmICh0eXBlb2YgcmVjdXJzaW9uQ291bnQgIT09IHR5cGVvZiAwKSB7XG5cdFx0XHRyZWN1cnNpb25Db3VudCA9IDA7XG5cdFx0fVxuXHRcdC8vICgxXHQgaWZcdFxcXFwoXHQoMlx0MilcdFxcXFwpXHQgIHsoM1x0Myl9ICAoNCAgIGVsc2VcdCAgeyg1XHQgNSl9ICA0KTEpXG5cdFx0Y29uc3QgY29uZGl0aW9uYWxTcGxpdFJlZ2V4ID0gLyg7P1xccyppZlxccypcXChcXHMqKFxcdyopXFxzKlxcKVxccyp7KFtee31dKil9KFxccyplbHNlXFxzKnsoW157fV0qPyl9fCkpL2k7XG5cdFx0Y29uc3Qgc3BsaXR0ZWQgPSBzLnNwbGl0KGNvbmRpdGlvbmFsU3BsaXRSZWdleCk7XG5cdFx0Ly8gJDE6IHdob2xlIGNvbmRpdGlvbmFsXG5cdFx0Ly8gJDI6IHRlc3QgY29uZGl0aW9uXG5cdFx0Ly8gJDM6IHRydWUgZXhwYW5zaW9uXG5cdFx0Ly8gJDQ6IGVsc2UgY2xhdXNlIChwb3NzaWJseSBlbXB0eSlcblx0XHQvLyAkNTogZmFsc2UgZXhwYW5zaW9uIChwb3NzaWJseSBudWxsKVxuXHRcdGNvbnN0IG51bVBhcmVucyA9IDU7XG5cdFx0bGV0IFtyZXRdID0gc3BsaXR0ZWQ7XG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBzcGxpdHRlZC5sZW5ndGg7IGkgPSBpICsgbnVtUGFyZW5zICsgMSkge1xuXHRcdFx0Y29uc3QgdGVzdFN0cmluZyA9IHNwbGl0dGVkW2kgKyAyIC0gMV07XG5cdFx0XHRjb25zdCB0cnVlU3RyaW5nID0gc3BsaXR0ZWRbaSArIDMgLSAxXTtcblx0XHRcdGxldCBmYWxzZVN0cmluZyA9IHNwbGl0dGVkW2kgKyA1IC0gMV07XG5cdFx0XHRpZiAoZmFsc2VTdHJpbmcgPT09IHVuZGVmaW5lZCB8fCAhZmFsc2VTdHJpbmcpIHtcblx0XHRcdFx0ZmFsc2VTdHJpbmcgPSAnJztcblx0XHRcdH1cblx0XHRcdGxldCB0ZXN0UmVzdWx0O1xuXHRcdFx0c3dpdGNoICh0ZXN0U3RyaW5nKSB7XG5cdFx0XHRcdGNhc2UgJ3VzZXInOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhIWFydGljbGUudXNlck5hbWUoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndGFsayc6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICFhcnRpY2xlLnRhbGtQYWdlKCk7IC8vIHRhbGtQYWdlIGNvbnZlcnRzIF9hcnRpY2xlc18gdG8gdGFsa1BhZ2VzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2FkbWluJzpcblx0XHRcdFx0XHR0ZXN0UmVzdWx0ID0gISFnZXRWYWx1ZU9mKCdwb3B1cEFkbWluTGlua3MnKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnb2xkaWQnOlxuXHRcdFx0XHRcdHRlc3RSZXN1bHQgPSAhIShvbGRpZCAhPT0gdW5kZWZpbmVkICYmIG9sZGlkKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmNpZCc6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhKHJjaWQgIT09IHVuZGVmaW5lZCAmJiByY2lkKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnaXB1c2VyJzpcblx0XHRcdFx0XHR0ZXN0UmVzdWx0ID0gISFhcnRpY2xlLmlzSXBVc2VyKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21haW5zcGFjZV9lbic6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9IGlzSW5NYWluTmFtZXNwYWNlKGFydGljbGUpICYmIHBnLndpa2kuaG9zdG5hbWUgPT09ICdlbi53aWtpcGVkaWEub3JnJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnd2lraW1lZGlhJzpcblx0XHRcdFx0XHR0ZXN0UmVzdWx0ID0gISFwZy53aWtpLndpa2ltZWRpYTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZGlmZic6XG5cdFx0XHRcdFx0dGVzdFJlc3VsdCA9ICEhKGRpZmYgIT09IHVuZGVmaW5lZCAmJiBkaWZmKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAodGVzdFJlc3VsdCkge1xuXHRcdFx0XHRjYXNlIG51bGw6XG5cdFx0XHRcdFx0cmV0ICs9IHNwbGl0dGVkW2ldO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIHRydWU6XG5cdFx0XHRcdFx0cmV0ICs9IHRydWVTdHJpbmc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgZmFsc2U6XG5cdFx0XHRcdFx0cmV0ICs9IGZhbHNlU3RyaW5nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Ly8gYXBwZW5kIG5vbi1jb25kaXRpb25hbCBzdHJpbmdcblx0XHRcdHJldCArPSBzcGxpdHRlZFtpICsgbnVtUGFyZW5zXTtcblx0XHR9XG5cdFx0aWYgKGNvbmRpdGlvbmFsU3BsaXRSZWdleC50ZXN0KHJldCkgJiYgcmVjdXJzaW9uQ291bnQgPCAxMCkge1xuXHRcdFx0cmV0dXJuIGV4cGFuZENvbmRpdGlvbmFsTmF2bGlua1N0cmluZyhyZXQsIGFydGljbGUsIHosIHJlY3Vyc2lvbkNvdW50ICsgMSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdGNvbnN0IG5hdmxpbmtTdHJpbmdUb0FycmF5ID0gKHMsIGFydGljbGUsIHBhcmFtcykgPT4ge1xuXHRcdHMgPSBleHBhbmRDb25kaXRpb25hbE5hdmxpbmtTdHJpbmcocywgYXJ0aWNsZSwgcGFyYW1zKTtcblx0XHRjb25zdCBzcGxpdHRlZCA9IHMuc3BsaXQoLzw8KC4qPyk+Pi8pO1xuXHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdGZvciAoY29uc3QgW2ksIGVsZW1lbnRdIG9mIHNwbGl0dGVkLmVudHJpZXMoKSkge1xuXHRcdFx0aWYgKGkgJSAyKSB7XG5cdFx0XHRcdC8vIGkgb2RkLCBzbyBzIGlzIGEgdGFnXG5cdFx0XHRcdGNvbnN0IHQgPSBuZXcgbmF2bGlua1RhZygpO1xuXHRcdFx0XHRjb25zdCBzcyA9IGVsZW1lbnQuc3BsaXQoJ3wnKTtcblx0XHRcdFx0W3QuaWRdID0gc3M7XG5cdFx0XHRcdGZvciAobGV0IGogPSAxOyBqIDwgc3MubGVuZ3RoOyArK2opIHtcblx0XHRcdFx0XHRjb25zdCBzc3MgPSBzc1tqXS5zcGxpdCgnPScpO1xuXHRcdFx0XHRcdGlmIChzc3MubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0WywgdFtzc3NbMF1dXSA9IHNzcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gbm8gYXNzaWdubWVudCAobm8gXCI9XCIpLCBzbyB0cmVhdCB0aGlzIGFzIGEgdGl0bGUgKG92ZXJ3cml0aW5nIHRoZSBsYXN0IG9uZSlcblx0XHRcdFx0XHRcdHQudGV4dCA9IHBvcHVwU3RyaW5nKHNzc1swXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHQuYXJ0aWNsZSA9IGFydGljbGU7XG5cdFx0XHRcdGNvbnN0IHtvbGRpZH0gPSBwYXJhbXM7XG5cdFx0XHRcdGNvbnN0IHtyY2lkfSA9IHBhcmFtcztcblx0XHRcdFx0Y29uc3Qge2RpZmZ9ID0gcGFyYW1zO1xuXHRcdFx0XHRpZiAob2xkaWQgIT09IHVuZGVmaW5lZCAmJiBvbGRpZCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHQub2xkaWQgPSBvbGRpZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmNpZCAhPT0gdW5kZWZpbmVkICYmIHJjaWQgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0LnJjaWQgPSByY2lkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkaWZmICE9PSB1bmRlZmluZWQgJiYgZGlmZiAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHQuZGlmZiA9IGRpZmY7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCF0LnRleHQgJiYgdC5pZCAhPT0gJ21haW5saW5rJykge1xuXHRcdFx0XHRcdHQudGV4dCA9IHBvcHVwU3RyaW5nKHQuaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldC5wdXNoKHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gcGxhaW4gSFRNTFxuXHRcdFx0XHRyZXQucHVzaChlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0Y29uc3QgbmF2bGlua1N1YnN0aXR1dGVIVE1MID0gKHMpID0+IHtcblx0XHRyZXR1cm4gc1xuXHRcdFx0LnNwbGl0KCcqJylcblx0XHRcdC5qb2luKGdldFZhbHVlT2YoJ3BvcHVwTmF2TGlua1NlcGFyYXRvcicpKVxuXHRcdFx0LnNwbGl0KCc8bWVudXJvdz4nKVxuXHRcdFx0LmpvaW4oJzxsaSBjbGFzcz1cInBvcHVwX21lbnVfcm93XCI+Jylcblx0XHRcdC5zcGxpdCgnPC9tZW51cm93PicpXG5cdFx0XHQuam9pbignPC9saT4nKVxuXHRcdFx0LnNwbGl0KCc8bWVudT4nKVxuXHRcdFx0LmpvaW4oJzx1bCBjbGFzcz1cInBvcHVwX21lbnVcIj4nKVxuXHRcdFx0LnNwbGl0KCc8L21lbnU+Jylcblx0XHRcdC5qb2luKCc8L3VsPicpO1xuXHR9O1xuXHRjb25zdCBuYXZsaW5rRGVwdGggPSAobWFnaWMsIHMpID0+IHtcblx0XHRyZXR1cm4gcy5zcGxpdChgPCR7bWFnaWN9PmApLmxlbmd0aCAtIHMuc3BsaXQoYDwvJHttYWdpY30+YCkubGVuZ3RoO1xuXHR9O1xuXHQvLyBuYXZsaW5rU3RyaW5nOiAqIGJlY29tZXMgdGhlIHNlcGFyYXRvclxuXHQvL1x0XHRcdFx0PDxmb298YmFyPWJhenxmdWJhcj4+IGJlY29tZXMgYSBmb28tbGluayB3aXRoIGF0dHJpYnV0ZSBiYXI9J2Jheidcblx0Ly9cdFx0XHRcdFx0XHRcdFx0XHQgIGFuZCB2aXNpYmxlIHRleHQgJ2Z1YmFyJ1xuXHQvL1x0XHRcdFx0aWYodGVzdCl7Li4ufSBhbmQgaWYodGVzdCl7Li4ufWVsc2V7Li4ufSB3b3JrIHRvbyAobmVzdGVkIG9rKVxuXHRjb25zdCBuYXZsaW5rU3RyaW5nVG9IVE1MID0gKHMsIGFydGljbGUsIHBhcmFtcykgPT4ge1xuXHRcdC8vIGxpbWl0QWxlcnQobmF2bGlua1N0cmluZ1RvSFRNTCwgNSwgJ25hdmxpbmtTdHJpbmdUb0hUTUxcXG4nICsgYXJ0aWNsZSArICdcXG4nICsgKHR5cGVvZiBhcnRpY2xlKSk7XG5cdFx0Y29uc3QgcCA9IG5hdmxpbmtTdHJpbmdUb0FycmF5KHMsIGFydGljbGUsIHBhcmFtcyk7XG5cdFx0bGV0IGh0bWwgPSAnJztcblx0XHRsZXQgbWVudWRlcHRoID0gMDsgLy8gbmVzdGVkIG1lbnVzIG5vdCBjdXJyZW50bHkgYWxsb3dlZCwgYnV0IGRvZXNuJ3QgZG8gYW55IGhhcm0gdG8gY29kZSBmb3IgaXRcblx0XHRsZXQgbWVudXJvd2RlcHRoID0gMDtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcCkge1xuXHRcdFx0aWYgKHR5cGVvZiBlbGVtZW50ID09PSB0eXBlb2YgJycpIHtcblx0XHRcdFx0aHRtbCArPSBuYXZsaW5rU3Vic3RpdHV0ZUhUTUwoZWxlbWVudCk7XG5cdFx0XHRcdG1lbnVkZXB0aCArPSBuYXZsaW5rRGVwdGgoJ21lbnUnLCBlbGVtZW50KTtcblx0XHRcdFx0bWVudXJvd2RlcHRoICs9IG5hdmxpbmtEZXB0aCgnbWVudXJvdycsIGVsZW1lbnQpO1xuXHRcdFx0XHQvL1x0XHRcdGlmIChtZW51ZGVwdGggPT09IDApIHtcblx0XHRcdFx0Ly9cdFx0XHRcdHRhZ1R5cGU9J3NwYW4nO1xuXHRcdFx0XHQvL1x0XHRcdH0gZWxzZSBpZiAobWVudXJvd2RlcHRoID09PSAwKSB7XG5cdFx0XHRcdC8vXHRcdFx0XHR0YWdUeXBlPSdsaSc7XG5cdFx0XHRcdC8vXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly9cdFx0XHRcdHRhZ1R5cGUgPSBudWxsO1xuXHRcdFx0XHQvL1x0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudC50eXBlICE9PSB1bmRlZmluZWQgJiYgZWxlbWVudC50eXBlID09PSAnbmF2bGlua1RhZycpIHtcblx0XHRcdFx0aHRtbCArPVxuXHRcdFx0XHRcdG1lbnVkZXB0aCA+IDAgJiYgbWVudXJvd2RlcHRoID09PSAwXG5cdFx0XHRcdFx0XHQ/IGA8bGkgY2xhc3M9XCJwb3B1cF9tZW51X2l0ZW1cIj4ke2VsZW1lbnQuaHRtbCgpfTwvbGk+YFxuXHRcdFx0XHRcdFx0OiBlbGVtZW50Lmh0bWwoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGh0bWw7XG5cdH07XG5cdGNsYXNzIG5hdmxpbmtUYWcge1xuXHRcdGNvbnN0cnVjdG9yKCkge1xuXHRcdFx0dGhpcy50eXBlID0gJ25hdmxpbmtUYWcnO1xuXHRcdH1cblx0XHRodG1sKCkge1xuXHRcdFx0dGhpcy5nZXROZXdXaW4oKTtcblx0XHRcdHRoaXMuZ2V0UHJpbnRGdW5jdGlvbigpO1xuXHRcdFx0bGV0IGh0bWwgPSAnJztcblx0XHRcdGxldCBvcGVuaW5nO1xuXHRcdFx0bGV0IGNsb3Npbmc7XG5cdFx0XHRjb25zdCB0YWdUeXBlID0gJ3NwYW4nO1xuXHRcdFx0aWYgKHRhZ1R5cGUpIHtcblx0XHRcdFx0b3BlbmluZyA9IGA8JHt0YWdUeXBlfSBjbGFzcz1cInBvcHVwXyR7dGhpcy5pZH1cIj5gO1xuXHRcdFx0XHRjbG9zaW5nID0gYDwvJHt0YWdUeXBlfT5gO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3BlbmluZyA9ICcnO1xuXHRcdFx0XHRjbG9zaW5nID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucHJpbnQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0aHRtbCA9IHRoaXMucHJpbnQodGhpcyk7XG5cdFx0XHRcdGlmICh0eXBlb2YgaHRtbCAhPT0gdHlwZW9mICcnKSB7XG5cdFx0XHRcdFx0aHRtbCA9ICcnO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuc2hvcnRjdXQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGh0bWwgPSBhZGRQb3B1cFNob3J0Y3V0KGh0bWwsIHRoaXMuc2hvcnRjdXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlcnJsb2coYE9oIGRlYXIgLSBpbnZhbGlkIHByaW50IGZ1bmN0aW9uIGZvciBhIG5hdmxpbmtUYWcsIGlkPSR7dGhpcy5pZH1gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBvcGVuaW5nICsgaHRtbCArIGNsb3Npbmc7XG5cdFx0fVxuXHRcdGdldE5ld1dpbigpIHtcblx0XHRcdGdldFZhbHVlT2YoJ3BvcHVwTGlua3NOZXdXaW5kb3cnKTtcblx0XHRcdGlmIChwZy5vcHRpb24ucG9wdXBMaW5rc05ld1dpbmRvd1t0aGlzLmlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMubmV3V2luID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHRoaXMubmV3V2luID0gcGcub3B0aW9uLnBvcHVwTGlua3NOZXdXaW5kb3dbdGhpcy5pZF07XG5cdFx0fVxuXHRcdGdldFByaW50RnVuY3Rpb24oKSB7XG5cdFx0XHQvLyB0aGluayBhYm91dCB0aGlzIHNvbWUgbW9yZVxuXHRcdFx0Ly8gdGhpcy5pZCBhbmQgdGhpcy5hcnRpY2xlIHNob3VsZCBhbHJlYWR5IGJlIGRlZmluZWRcblx0XHRcdGlmICh0eXBlb2YgdGhpcy5pZCAhPT0gdHlwZW9mICcnIHx8IHR5cGVvZiB0aGlzLmFydGljbGUgIT09IHR5cGVvZiB7fSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5vUG9wdXAgPSAxO1xuXHRcdFx0c3dpdGNoICh0aGlzLmlkKSB7XG5cdFx0XHRcdGNhc2UgJ2NvbnRyaWJzJzpcblx0XHRcdFx0Y2FzZSAnaGlzdG9yeSc6XG5cdFx0XHRcdGNhc2UgJ3doYXRMaW5rc0hlcmUnOlxuXHRcdFx0XHRjYXNlICd1c2VyUGFnZSc6XG5cdFx0XHRcdGNhc2UgJ3VzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAndGFsayc6XG5cdFx0XHRcdGNhc2UgJ2FydGljbGUnOlxuXHRcdFx0XHRjYXNlICdsYXN0RWRpdCc6XG5cdFx0XHRcdFx0dGhpcy5ub1BvcHVwID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAodGhpcy5pZCkge1xuXHRcdFx0XHRjYXNlICdlbWFpbCc6XG5cdFx0XHRcdGNhc2UgJ2NvbnRyaWJzJzpcblx0XHRcdFx0Y2FzZSAnYmxvY2snOlxuXHRcdFx0XHRjYXNlICd1bmJsb2NrJzpcblx0XHRcdFx0Y2FzZSAndXNlcmxvZyc6XG5cdFx0XHRcdGNhc2UgJ3VzZXJTcGFjZSc6XG5cdFx0XHRcdGNhc2UgJ2RlbGV0ZWRDb250cmlicyc6XG5cdFx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLnVzZXJOYW1lKCk7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHRoaXMuaWQpIHtcblx0XHRcdFx0Y2FzZSAndXNlclRhbGsnOlxuXHRcdFx0XHRjYXNlICduZXdVc2VyVGFsayc6XG5cdFx0XHRcdGNhc2UgJ2VkaXRVc2VyVGFsayc6XG5cdFx0XHRcdGNhc2UgJ3VzZXJQYWdlJzpcblx0XHRcdFx0Y2FzZSAnYmxvY2tsb2cnOlxuXHRcdFx0XHRcdHRoaXMuYXJ0aWNsZSA9IHRoaXMuYXJ0aWNsZS51c2VyTmFtZSh0cnVlKTtcblx0XHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdFx0XHRjYXNlICdwYWdlbG9nJzpcblx0XHRcdFx0Y2FzZSAnZGVsZXRlbG9nJzpcblx0XHRcdFx0Y2FzZSAncHJvdGVjdGxvZyc6XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMub2xkaWQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5pZCAhPT0gJ21haW5saW5rJykge1xuXHRcdFx0XHQvLyBGSVhNRSBhbmNob3IgaGFuZGxpbmcgc2hvdWxkIGJlIGRvbmUgZGlmZmVyZW50bHkgd2l0aCBUaXRsZSBvYmplY3Rcblx0XHRcdFx0dGhpcy5hcnRpY2xlID0gdGhpcy5hcnRpY2xlLnJlbW92ZUFuY2hvcigpO1xuXHRcdFx0XHQvLyBpZiAodHlwZW9mIHRoaXMudGV4dD09J3VuZGVmaW5lZCcpIHsgdGhpcy50ZXh0PXBvcHVwU3RyaW5nKHRoaXMuaWQpOyB9XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHRoaXMuaWQpIHtcblx0XHRcdFx0Y2FzZSAndW5kZWxldGUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1VuZGVsZXRlJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcvJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnd2hhdExpbmtzSGVyZSc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnV2hhdGxpbmtzaGVyZSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JlbGF0ZWRDaGFuZ2VzJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdSZWNlbnRjaGFuZ2VzbGlua2VkJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbW92ZSc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnTW92ZXBhZ2UnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjb250cmlicyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnQ29udHJpYnV0aW9ucyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2RlbGV0ZWRDb250cmlicyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnRGVsZXRlZGNvbnRyaWJ1dGlvbnMnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdlbWFpbCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnRW1haWxVc2VyJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcvJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnYmxvY2snOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0Jsb2NraXAnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZpcD0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bmJsb2NrJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdJcGJsb2NrbGlzdCc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJmFjdGlvbj11bmJsb2NrJmlwPSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3VzZXJsb2cnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0xvZyc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJnVzZXI9Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnYmxvY2tsb2cnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0xvZyc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJnR5cGU9YmxvY2smcGFnZT0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdwYWdlbG9nJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gc3BlY2lhbExpbms7XG5cdFx0XHRcdFx0dGhpcy5zcGVjaWFscGFnZSA9ICdMb2cnO1xuXHRcdFx0XHRcdHRoaXMuc2VwID0gJyZwYWdlPSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3Byb3RlY3Rsb2cnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ0xvZyc7XG5cdFx0XHRcdFx0dGhpcy5zZXAgPSAnJnR5cGU9cHJvdGVjdCZwYWdlPSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2RlbGV0ZWxvZyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnTG9nJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcmdHlwZT1kZWxldGUmcGFnZT0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1c2VyU3BhY2UnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBzcGVjaWFsTGluaztcblx0XHRcdFx0XHR0aGlzLnNwZWNpYWxwYWdlID0gJ1ByZWZpeEluZGV4Jztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcmbmFtZXNwYWNlPTImcHJlZml4PSc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3NlYXJjaCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnU2VhcmNoJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcmZnVsbHRleHQ9U2VhcmNoJnNlYXJjaD0nO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd0aGFuayc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHNwZWNpYWxMaW5rO1xuXHRcdFx0XHRcdHRoaXMuc3BlY2lhbHBhZ2UgPSAnVGhhbmtzJztcblx0XHRcdFx0XHR0aGlzLnNlcCA9ICcvJztcblx0XHRcdFx0XHR0aGlzLmFydGljbGUudmFsdWUgPSB0aGlzLmRpZmYgPT09ICdwcmV2JyA/IHRoaXMub2xkaWQgOiB0aGlzLmRpZmY7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3Vud2F0Y2gnOlxuXHRcdFx0XHRjYXNlICd3YXRjaCc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IG1hZ2ljV2F0Y2hMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gYCR7dGhpcy5pZH0mYXV0b3dhdGNobGlzdD0xJmF1dG9pbXBsPSR7cG9wdXBTdHJpbmcoXG5cdFx0XHRcdFx0XHQnYXV0b2VkaXRfdmVyc2lvbidcblx0XHRcdFx0XHQpfSZhY3Rva2VuPSR7YXV0b0NsaWNrVG9rZW4oKX1gO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdoaXN0b3J5Jzpcblx0XHRcdFx0Y2FzZSAnaGlzdG9yeWZlZWQnOlxuXHRcdFx0XHRjYXNlICd1bnByb3RlY3QnOlxuXHRcdFx0XHRjYXNlICdwcm90ZWN0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSB0aGlzLmlkO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkZWxldGUnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdkZWxldGUnO1xuXHRcdFx0XHRcdGlmICh0aGlzLmFydGljbGUubmFtZXNwYWNlSWQoKSA9PT0gcGcubnNJbWFnZUlkKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBpbWcgPSB0aGlzLmFydGljbGUuc3RyaXBOYW1lc3BhY2UoKTtcblx0XHRcdFx0XHRcdHRoaXMuYWN0aW9uICs9IGAmaW1hZ2U9JHtpbWd9YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21hcmtwYXRyb2xsZWQnOlxuXHRcdFx0XHRjYXNlICdlZGl0Jzpcblx0XHRcdFx0XHQvLyBlZGl0T2xkIHNob3VsZCBrZWVwIHRoZSBvbGRpZCwgYnV0IGVkaXQgc2hvdWxkIG5vdC5cblx0XHRcdFx0XHRkZWxldGUgdGhpcy5vbGRpZDtcblx0XHRcdFx0LyogZmFsbHMgdGhyb3VnaCAqL1xuXHRcdFx0XHRjYXNlICd2aWV3Jzpcblx0XHRcdFx0Y2FzZSAncHVyZ2UnOlxuXHRcdFx0XHRjYXNlICdyZW5kZXInOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9IHRoaXMuaWQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3Jhdyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ3Jhdyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ25ldyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHdpa2lMaW5rO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ2VkaXQmc2VjdGlvbj1uZXcnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtYWlubGluayc6XG5cdFx0XHRcdFx0aWYgKHRoaXMudGV4dCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLmFydGljbGUudG9TdHJpbmcoKS5lbnRpZnkoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwU2ltcGxpZnlNYWluTGluaycpICYmIGlzSW5TdHJpcHBhYmxlTmFtZXNwYWNlKHRoaXMuYXJ0aWNsZSkpIHtcblx0XHRcdFx0XHRcdC8vIG9ubHkgc2hvdyB0aGUgL3N1YnBhZ2UgcGFydCBvZiB0aGUgdGl0bGUgdGV4dFxuXHRcdFx0XHRcdFx0Y29uc3QgcyA9IHRoaXMudGV4dC5zcGxpdCgnLycpO1xuXHRcdFx0XHRcdFx0dGhpcy50ZXh0ID0gcy5hdCgtMSk7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy50ZXh0ID09PSAnJyAmJiBzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy50ZXh0ID0gcy5hdCgtMik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB0aXRsZWRXaWtpTGluaztcblx0XHRcdFx0XHRpZiAodGhpcy50aXRsZSA9PT0gdW5kZWZpbmVkICYmIHBnLmN1cnJlbnQubGluayAmJiBwZy5jdXJyZW50LmxpbmsuaHJlZiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRpdGxlID0gc2FmZURlY29kZVVSSShwZy5jdXJyZW50Lmxpbmsub3JpZ2luYWxUaXRsZSA/PyB0aGlzLmFydGljbGUpO1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMub2xkaWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9sZGlkKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMudGl0bGUgPSB0cHJpbnRmKCdSZXZpc2lvbiAlcyBvZiAlcycsIFt0aGlzLm9sZGlkLCB0aGlzLnRpdGxlXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ3ZpZXcnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1c2VyUGFnZSc6XG5cdFx0XHRcdGNhc2UgJ2FydGljbGUnOlxuXHRcdFx0XHRjYXNlICdlZGl0QXJ0aWNsZSc6XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMub2xkaWQ7XG5cdFx0XHRcdFx0Ly8gbXcubm90aWZ5KGAke3RoaXMuaWR9XFxuJHt0aGlzLmFydGljbGV9XFxuJHt0eXBlb2YgdGhpcy5hcnRpY2xlfWAsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdFx0XHR0aGlzLmFydGljbGUgPSB0aGlzLmFydGljbGUuYXJ0aWNsZUZyb21UYWxrT3JBcnRpY2xlKCk7XG5cdFx0XHRcdFx0Ly8gbXcubm90aWZ5KGAke3RoaXMuaWR9XFxuJHt0aGlzLmFydGljbGV9XFxuJHt0eXBlb2YgdGhpcy5hcnRpY2xlfWAsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSB0aGlzLmlkLmluZGV4T2YoJ2VkaXQnKSA9PT0gMCA/ICdlZGl0JyA6ICd2aWV3Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndXNlclRhbGsnOlxuXHRcdFx0XHRjYXNlICd0YWxrJzpcblx0XHRcdFx0XHR0aGlzLmFydGljbGUgPSB0aGlzLmFydGljbGUudGFsa1BhZ2UoKTtcblx0XHRcdFx0XHRkZWxldGUgdGhpcy5vbGRpZDtcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAndmlldyc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2FyaW4nOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBhcmluTGluaztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY291bnQnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBlZGl0Q291bnRlckxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2VkaXRvcnMnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSBlZGl0b3JMaXN0TGluaztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbGFzdEVkaXQnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB0aXRsZWREaWZmTGluaztcblx0XHRcdFx0XHR0aGlzLnRpdGxlID0gcG9wdXBTdHJpbmcoJ1Nob3cgdGhlIGxhc3QgZWRpdCcpO1xuXHRcdFx0XHRcdHRoaXMuZnJvbSA9ICdwcmV2Jztcblx0XHRcdFx0XHR0aGlzLnRvID0gJ2N1cic7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ29sZEVkaXQnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB0aXRsZWREaWZmTGluaztcblx0XHRcdFx0XHR0aGlzLnRpdGxlID0gYCR7cG9wdXBTdHJpbmcoJ1Nob3cgdGhlIGVkaXQgbWFkZSB0byBnZXQgcmV2aXNpb24nKX0gJHt0aGlzLm9sZGlkfWA7XG5cdFx0XHRcdFx0dGhpcy5mcm9tID0gJ3ByZXYnO1xuXHRcdFx0XHRcdHRoaXMudG8gPSB0aGlzLm9sZGlkO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdlZGl0T2xkJzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAnZWRpdCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3VuZG8nOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdlZGl0JnVuZG89Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmV2ZXJ0Jzpcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0dGhpcy5hY3Rpb24gPSAncmV2ZXJ0Jztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbnVsbEVkaXQnOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdudWxsRWRpdCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2RpZmZDdXInOlxuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB0aXRsZWREaWZmTGluaztcblx0XHRcdFx0XHR0aGlzLnRpdGxlID0gdHByaW50ZignU2hvdyBjaGFuZ2VzIHNpbmNlIHJldmlzaW9uICVzJywgW3RoaXMub2xkaWRdKTtcblx0XHRcdFx0XHR0aGlzLmZyb20gPSB0aGlzLm9sZGlkO1xuXHRcdFx0XHRcdHRoaXMudG8gPSAnY3VyJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnZWRpdFVzZXJUYWxrJzpcblx0XHRcdFx0Y2FzZSAnZWRpdFRhbGsnOlxuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzLm9sZGlkO1xuXHRcdFx0XHRcdHRoaXMuYXJ0aWNsZSA9IHRoaXMuYXJ0aWNsZS50YWxrUGFnZSgpO1xuXHRcdFx0XHRcdHRoaXMuYWN0aW9uID0gJ2VkaXQnO1xuXHRcdFx0XHRcdHRoaXMucHJpbnQgPSB3aWtpTGluaztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbmV3VXNlclRhbGsnOlxuXHRcdFx0XHRjYXNlICduZXdUYWxrJzpcblx0XHRcdFx0XHR0aGlzLmFydGljbGUgPSB0aGlzLmFydGljbGUudGFsa1BhZ2UoKTtcblx0XHRcdFx0XHR0aGlzLmFjdGlvbiA9ICdlZGl0JnNlY3Rpb249bmV3Jztcblx0XHRcdFx0XHR0aGlzLnByaW50ID0gd2lraUxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2xhc3RDb250cmliJzpcblx0XHRcdFx0Y2FzZSAnc2luY2VNZSc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IG1hZ2ljSGlzdG9yeUxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3RvZ2dsZVByZXZpZXdzJzpcblx0XHRcdFx0XHR0aGlzLnRleHQgPSBwb3B1cFN0cmluZyhwZy5vcHRpb24uc2ltcGxlUG9wdXBzID8gJ2VuYWJsZSBwcmV2aWV3cycgOiAnZGlzYWJsZSBwcmV2aWV3cycpO1xuXHRcdFx0XHQvKiBmYWxscyB0aHJvdWdoICovXG5cdFx0XHRcdGNhc2UgJ2Rpc2FibGVQb3B1cHMnOlxuXHRcdFx0XHRjYXNlICdwdXJnZVBvcHVwcyc6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IHBvcHVwTWVudUxpbms7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhpcy5wcmludCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBgVW5rbm93biBuYXZsaW5rIHR5cGU6ICR7dGhpcy5pZH1gO1xuXHRcdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vXG5cdC8vICBlbmQgbmF2bGlua3Ncblx0Ly8gRU5ERklMRTogbmF2bGlua3MuanNcblx0Ly8gU1RBUlRGSUxFOiBzaG9ydGN1dGtleXMuanNcblx0Y29uc3QgcG9wdXBIYW5kbGVLZXlwcmVzcyA9IGZ1bmN0aW9uIHBvcHVwSGFuZGxlS2V5cHJlc3MoZXZ0KSB7XG5cdFx0Y29uc3Qga2V5Q29kZSA9IHdpbmRvdy5ldmVudCA/IHdpbmRvdy5ldmVudC5rZXlDb2RlIDogZXZ0LmtleUNvZGUgPz8gZXZ0LndoaWNoO1xuXHRcdGlmICgha2V5Q29kZSB8fCAhcGcuY3VycmVudC5saW5rIHx8ICFwZy5jdXJyZW50LmxpbmsubmF2cG9wdXApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGtleUNvZGUgPT09IDI3KSB7XG5cdFx0XHQvLyBlc2NhcGVcblx0XHRcdGtpbGxQb3B1cCgpO1xuXHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBzd2FsbG93IGtleXByZXNzXG5cdFx0fVxuXHRcdGNvbnN0IGxldHRlciA9IFN0cmluZy5mcm9tQ29kZVBvaW50KGtleUNvZGUpO1xuXHRcdGNvbnN0IGxpbmtzID0gcGcuY3VycmVudC5saW5rLm5hdnBvcHVwLm1haW5EaXYucXVlcnlTZWxlY3RvckFsbCgnQScpO1xuXHRcdGxldCBzdGFydExpbmsgPSAwO1xuXHRcdGxldCBpO1xuXHRcdGxldCBqO1xuXHRcdGlmIChwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCkge1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChsaW5rc1tpXSA9PT0gcG9wdXBIYW5kbGVLZXlwcmVzcy5sYXN0UG9wdXBMaW5rU2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRzdGFydExpbmsgPSBpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaiA9IDA7IGogPCBsaW5rcy5sZW5ndGg7ICsraikge1xuXHRcdFx0aSA9IChzdGFydExpbmsgKyBqICsgMSkgJSBsaW5rcy5sZW5ndGg7XG5cdFx0XHRpZiAobGlua3NbaV0uZ2V0QXR0cmlidXRlKCdwb3B1cGtleScpID09PSBsZXR0ZXIpIHtcblx0XHRcdFx0aWYgKGV2dCAmJiBldnQucHJldmVudERlZmF1bHQpIHtcblx0XHRcdFx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaW5rc1tpXS5mb2N1cygpO1xuXHRcdFx0XHRwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCA9IGxpbmtzW2ldO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIHN3YWxsb3cga2V5cHJlc3Ncblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGFzcyBrZXlwcmVzcyBvblxuXHRcdGlmIChkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MpIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MoZXZ0KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cdGNvbnN0IGFkZFBvcHVwU2hvcnRjdXRzID0gKCkgPT4ge1xuXHRcdGlmIChkb2N1bWVudC5vbmtleXByZXNzICE9PSBwb3B1cEhhbmRsZUtleXByZXNzKSB7XG5cdFx0XHRkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MgPSBkb2N1bWVudC5vbmtleXByZXNzO1xuXHRcdH1cblx0XHRkb2N1bWVudC5vbmtleXByZXNzID0gcG9wdXBIYW5kbGVLZXlwcmVzcztcblx0fTtcblx0Y29uc3Qgcm1Qb3B1cFNob3J0Y3V0cyA9ICgpID0+IHtcblx0XHRwb3B1cEhhbmRsZUtleXByZXNzLmxhc3RQb3B1cExpbmtTZWxlY3RlZCA9IG51bGw7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChkb2N1bWVudC5vbGRQb3B1cE9ua2V5cHJlc3MgJiYgZG9jdW1lbnQub2xkUG9wdXBPbmtleXByZXNzID09PSBwb3B1cEhhbmRsZUtleXByZXNzKSB7XG5cdFx0XHRcdC8vIHBhbmljXG5cdFx0XHRcdGRvY3VtZW50Lm9ua2V5cHJlc3MgPSBudWxsOyAvLyAoKSA9PiB7fTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0ZG9jdW1lbnQub25rZXlwcmVzcyA9IGRvY3VtZW50Lm9sZFBvcHVwT25rZXlwcmVzcztcblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIElFIGdvZXMgaGVyZSAqL1xuXHRcdH1cblx0fTtcblx0Y29uc3QgYWRkTGlua1Byb3BlcnR5ID0gKGh0bWwsIHByb3BlcnR5KSA9PiB7XG5cdFx0Ly8gdGFrZSBcIjxhIGhyZWY9Li4uPi4uLjwvYT4gYW5kIGFkZCBhIHByb3BlcnR5XG5cdFx0Ly8gbm90IHNvcGhpc3RpY2F0ZWQgYXQgYWxsLCBlYXNpbHkgYnJva2VuXG5cdFx0Y29uc3QgaSA9IGh0bWwuaW5kZXhPZignPicpO1xuXHRcdGlmIChpIDwgMCkge1xuXHRcdFx0cmV0dXJuIGh0bWw7XG5cdFx0fVxuXHRcdHJldHVybiBgJHtodG1sLnNsaWNlKDAsIE1hdGgubWF4KDAsIGkpKX0gJHtwcm9wZXJ0eX0ke2h0bWwuc2xpY2UoTWF0aC5tYXgoMCwgaSkpfWA7XG5cdH07XG5cdGNvbnN0IGFkZFBvcHVwU2hvcnRjdXQgPSAoaHRtbCwga2V5KSA9PiB7XG5cdFx0aWYgKCFnZXRWYWx1ZU9mKCdwb3B1cFNob3J0Y3V0S2V5cycpKSB7XG5cdFx0XHRyZXR1cm4gaHRtbDtcblx0XHR9XG5cdFx0Y29uc3QgcmV0ID0gYWRkTGlua1Byb3BlcnR5KGh0bWwsIGBwb3B1cGtleT1cIiR7a2V5fVwiYCk7XG5cdFx0aWYgKGtleSA9PT0gJyAnKSB7XG5cdFx0XHRrZXkgPSBwb3B1cFN0cmluZygnc3BhY2ViYXInKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldC5yZXBsYWNlKC9eKC4qPykodGl0bGU9XCIpKC4qPykoXCIuKikkL2ksIGAkMSQyJDMgWyR7a2V5fV0kNGApO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBzaG9ydGN1dGtleXMuanNcblx0Ly8gU1RBUlRGSUxFOiBkaWZmcHJldmlldy5qc1xuXHQvLyBsZXRzIGp1bXAgdGhyb3VnaCBob29wcyB0byBmaW5kIHRoZSByZXYgaWRzIHdlIG5lZWQgdG8gcmV0cmlldmVcblx0Y29uc3QgbG9hZERpZmYgPSAoYXJ0aWNsZSwgb2xkaWQsIGRpZmYsIG5hdnBvcCkgPT4ge1xuXHRcdG5hdnBvcC5kaWZmRGF0YSA9IHtcblx0XHRcdG9sZFJldjoge30sXG5cdFx0XHRuZXdSZXY6IHt9LFxuXHRcdH07XG5cdFx0Y29uc3QgYXBpID0gZ2V0TXdBcGkoKTtcblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdjb21wYXJlJyxcblx0XHRcdHByb3A6IFsnaWRzJywgJ3RpdGxlJ10sXG5cdFx0fTtcblx0XHRpZiAoYXJ0aWNsZS50aXRsZSkge1xuXHRcdFx0cGFyYW1zLmZyb210aXRsZSA9IGFydGljbGUudGl0bGU7XG5cdFx0fVxuXHRcdHN3aXRjaCAoZGlmZikge1xuXHRcdFx0Y2FzZSAnY3VyJzpcblx0XHRcdFx0c3dpdGNoIChvbGRpZCkge1xuXHRcdFx0XHRcdGNhc2UgbnVsbDpcblx0XHRcdFx0XHRjYXNlICcnOlxuXHRcdFx0XHRcdGNhc2UgJ3ByZXYnOlxuXHRcdFx0XHRcdFx0Ly8gdGhpcyBjYW4gb25seSB3b3JrIGlmIHdlIGhhdmUgdGhlIHRpdGxlXG5cdFx0XHRcdFx0XHQvLyBjdXIgLT4gcHJldlxuXHRcdFx0XHRcdFx0cGFyYW1zLnRvcmVsYXRpdmUgPSAncHJldic7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cGFyYW1zLmZyb21yZXYgPSBvbGRpZDtcblx0XHRcdFx0XHRcdHBhcmFtcy50b3JlbGF0aXZlID0gJ2N1cic7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3ByZXYnOlxuXHRcdFx0XHRpZiAob2xkaWQpIHtcblx0XHRcdFx0XHRwYXJhbXMuZnJvbXJldiA9IG9sZGlkO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBhcmFtcy5mcm9tdGl0bGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFyYW1zLnRvcmVsYXRpdmUgPSAncHJldic7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnbmV4dCc6XG5cdFx0XHRcdHBhcmFtcy5mcm9tcmV2ID0gb2xkaWQgfHwgMDtcblx0XHRcdFx0cGFyYW1zLnRvcmVsYXRpdmUgPSAnbmV4dCc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cGFyYW1zLmZyb21yZXYgPSBvbGRpZCB8fCAwO1xuXHRcdFx0XHRwYXJhbXMudG9yZXYgPSBkaWZmIHx8IDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRhcGkuZ2V0KHBhcmFtcykudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0bmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCA9IGRhdGEuY29tcGFyZS5mcm9tcmV2aWQ7XG5cdFx0XHRuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlkID0gZGF0YS5jb21wYXJlLnRvcmV2aWQ7XG5cdFx0XHRhZGRSZXZpZXdMaW5rKG5hdnBvcCwgJ3BvcHVwTWlzY1Rvb2xzJyk7XG5cdFx0XHRjb25zdCBnbyA9ICgpID0+IHtcblx0XHRcdFx0cGVuZGluZ05hdnBvcFRhc2sobmF2cG9wKTtcblx0XHRcdFx0bGV0IHVybCA9IGAke3BnLndpa2kuYXBpd2lraWJhc2V9P2Zvcm1hdD1qc29uJmZvcm1hdHZlcnNpb249MiZhY3Rpb249cXVlcnkmYDtcblx0XHRcdFx0dXJsICs9IGByZXZpZHM9JHtuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkfXwke25hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWR9YDtcblx0XHRcdFx0dXJsICs9ICcmcHJvcD1yZXZpc2lvbnMmcnZwcm9wPWlkc3x0aW1lc3RhbXB8Y29udGVudCc7XG5cdFx0XHRcdGdldFBhZ2VXaXRoQ2FjaGluZyh1cmwsIGRvbmVEaWZmLCBuYXZwb3ApO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gcmVtb3ZlIGhvb2sgb25jZSBydW5cblx0XHRcdH07XG5cdFx0XHRpZiAobmF2cG9wLnZpc2libGUgfHwgIWdldFZhbHVlT2YoJ3BvcHVwTGF6eURvd25sb2FkcycpKSB7XG5cdFx0XHRcdGdvKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuYXZwb3AuYWRkSG9vayhnbywgJ3VuaGlkZScsICdiZWZvcmUnLCAnRE9XTkxPQURfRElGRlMnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblx0Ly8gUHV0IGEgXCJtYXJrIHBhdHJvbGxlZFwiIGxpbmsgdG8gYW4gZWxlbWVudCB0YXJnZXRcblx0Ly8gVE9ETzogQWxsb3cgcGF0cm9sIGEgcmV2aXNpb24sIGFzIHdlbGwgYXMgYSBkaWZmXG5cdGNvbnN0IGFkZFJldmlld0xpbmsgPSAobmF2cG9wLCB0YXJnZXQpID0+IHtcblx0XHRpZiAoIXBnLnVzZXIuY2FuUmV2aWV3KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIElmICduZXdSZXYnIGlzIG9sZGVyIHRoYW4gJ29sZFJldicgdGhhbiBpdCBjb3VsZCBiZSBjb25mdXNpbmcsIHNvIHdlIGRvIG5vdCBzaG93IHRoZSByZXZpZXcgbGluay5cblx0XHRpZiAobmF2cG9wLmRpZmZEYXRhLm5ld1Jldi5yZXZpZCA8PSBuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cHJvcDogWydpbmZvJywgJ2ZsYWdnZWQnXSxcblx0XHRcdHJldmlkczogbmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCxcblx0XHR9O1xuXHRcdGdldE13QXBpKClcblx0XHRcdC5nZXQocGFyYW1zKVxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgc3RhYmxlX3JldmlkID0gKGRhdGEucXVlcnkucGFnZXNbMF0uZmxhZ2dlZCAmJiBkYXRhLnF1ZXJ5LnBhZ2VzWzBdLmZsYWdnZWQuc3RhYmxlX3JldmlkKSB8fCAwO1xuXHRcdFx0XHQvLyBUaGUgZGlmZiBjYW4gYmUgcmV2aWV3ZWQgaWYgdGhlIG9sZCB2ZXJzaW9uIGlzIHRoZSBsYXN0IHJldmlld2VkIHZlcnNpb25cblx0XHRcdFx0Ly8gVE9ETzogT3RoZXIgcG9zc2libGUgY29uZGl0aW9ucyB0aGF0IHdlIG1heSB3YW50IHRvIGltcGxlbWVudCBpbnN0ZWFkIG9mIHRoaXMgb25lOlxuXHRcdFx0XHQvLyAtIG9sZCB2ZXJzaW9uIGlzIHBhdHJvbGxlZCBhbmQgdGhlIG5ldyB2ZXJzaW9uIGlzIG5vdCBwYXRyb2xsZWRcblx0XHRcdFx0Ly8gLSBvbGQgdmVyc2lvbiBpcyBwYXRyb2xsZWQgYW5kIHRoZSBuZXcgdmVyc2lvbiBpcyBtb3JlIHJlY2VudCB0aGFuIHRoZSBsYXN0IHJldmlld2VkIHZlcnNpb25cblx0XHRcdFx0aWYgKHN0YWJsZV9yZXZpZCA9PT0gbmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCkge1xuXHRcdFx0XHRcdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRcdFx0YS5pbm5lckhUTUwgPSBwb3B1cFN0cmluZygnbWFyayBwYXRyb2xsZWQnKTtcblx0XHRcdFx0XHRhLnRpdGxlID0gcG9wdXBTdHJpbmcoJ21hcmtwYXRyb2xsZWRIaW50Jyk7XG5cdFx0XHRcdFx0YS5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRcdFx0XHRhY3Rpb246ICdyZXZpZXcnLFxuXHRcdFx0XHRcdFx0XHRjb21tZW50OiB0cHJpbnRmKCdkZWZhdWx0cG9wdXBSZXZpZXdlZFN1bW1hcnknLCBbXG5cdFx0XHRcdFx0XHRcdFx0bmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpZCxcblx0XHRcdFx0XHRcdFx0XHRuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlkLFxuXHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0cmV2aWQ6IG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWQsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0Z2V0TXdBcGkoKVxuXHRcdFx0XHRcdFx0XHQucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtcylcblx0XHRcdFx0XHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBVcGRhdGUgY3VycmVudCBwYWdlIGFuZCBvdGhlciBhbHJlYWR5IGNvbnN0cnVjdGVkIHBvcHVwc1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuZmFpbCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkocG9wdXBTdHJpbmcoJ0NvdWxkIG5vdCBtYXJrZWQgdGhpcyBlZGl0IGFzIHBhdHJvbGxlZCcpLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0YWc6ICdwb3B1cHMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRzZXRQb3B1cEhUTUwoYSwgdGFyZ2V0LCBuYXZwb3AuaWROdW1iZXIsIG51bGwsIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3QgZG9uZURpZmYgPSAoZG93bmxvYWQpID0+IHtcblx0XHRpZiAoIWRvd25sb2FkLm93bmVyIHx8ICFkb3dubG9hZC5vd25lci5kaWZmRGF0YSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBuYXZwb3AgPSBkb3dubG9hZC5vd25lcjtcblx0XHRjb21wbGV0ZWROYXZwb3BUYXNrKG5hdnBvcCk7XG5cdFx0bGV0IHBhZ2VzO1xuXHRcdGxldCByZXZpc2lvbnMgPSBbXTtcblx0XHR0cnkge1xuXHRcdFx0Ly8gUHJvY2VzcyB0aGUgZG93bmxvYWRzXG5cdFx0XHQoe3BhZ2VzfSA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpLnF1ZXJ5KTtcblx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBwYWdlcykge1xuXHRcdFx0XHRyZXZpc2lvbnMgPSBbLi4ucmV2aXNpb25zLCAuLi5wYWdlLnJldmlzaW9uc107XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IHJldmlzaW9uIG9mIHJldmlzaW9ucykge1xuXHRcdFx0XHRpZiAocmV2aXNpb24ucmV2aWQgPT09IG5hdnBvcC5kaWZmRGF0YS5vbGRSZXYucmV2aWQpIHtcblx0XHRcdFx0XHRuYXZwb3AuZGlmZkRhdGEub2xkUmV2LnJldmlzaW9uID0gcmV2aXNpb247XG5cdFx0XHRcdH0gZWxzZSBpZiAocmV2aXNpb24ucmV2aWQgPT09IG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aWQpIHtcblx0XHRcdFx0XHRuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlzaW9uID0gcmV2aXNpb247XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdGVycmxvZygnQ291bGQgbm90IGdldCBkaWZmJyk7XG5cdFx0fVxuXHRcdGluc2VydERpZmYobmF2cG9wKTtcblx0fTtcblx0Y29uc3Qgcm1Cb3JpbmdMaW5lcyA9IChhLCBiLCBjb250ZXh0KSA9PiB7XG5cdFx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29udGV4dCA9IDI7XG5cdFx0fVxuXHRcdC8vIHRoaXMgaXMgZmFpcmx5IHNsb3cuLi4gaSB0aGluayBpdCdzIHF1aWNrZXIgdGhhbiBkb2luZyBhIHdvcmQtYmFzZWQgZGlmZiBmcm9tIHRoZSBvZmYsIHRob3VnaFxuXHRcdGNvbnN0IGFhID0gW107XG5cdFx0Y29uc3QgYWFhID0gW107XG5cdFx0Y29uc3QgYmIgPSBbXTtcblx0XHRjb25zdCBiYmIgPSBbXTtcblx0XHRsZXQgaTtcblx0XHRsZXQgajtcblx0XHQvLyBmaXJzdCwgZ2F0aGVyIGFsbCBkaXNjb25uZWN0ZWQgbm9kZXMgaW4gYSBhbmQgYWxsIGNyb3NzaW5nIG5vZGVzIGluIGEgYW5kIGJcblx0XHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKCFhW2ldLnBhaXJlZCkge1xuXHRcdFx0XHRhYVtpXSA9IDE7XG5cdFx0XHR9IGVsc2UgaWYgKGNvdW50Q3Jvc3NpbmdzKGIsIGEsIGksIHRydWUpKSB7XG5cdFx0XHRcdGFhW2ldID0gMTtcblx0XHRcdFx0YmJbYVtpXS5yb3ddID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gcGljayB1cCByZW1haW5pbmcgZGlzY29ubmVjdGVkIG5vZGVzIGluIGJcblx0XHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGJiW2ldID09PSAxKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFiW2ldLnBhaXJlZCkge1xuXHRcdFx0XHRiYltpXSA9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGFub3RoZXIgcGFzcyB0byBnYXRoZXIgY29udGV4dDogd2Ugd2FudCB0aGUgbmVpZ2hib3VycyBvZiBpbmNsdWRlZCBub2RlcyB3aGljaCBhcmUgbm90XG5cdFx0Ly8geWV0IGluY2x1ZGVkIHdlIGhhdmUgdG8gYWRkIGluIHBhcnRuZXJzIG9mIHRoZXNlIG5vZGVzLCBidXQgd2UgZG9uJ3Qgd2FudCB0byBhZGQgY29udGV4dFxuXHRcdC8vIGZvciAqdGhvc2UqIG5vZGVzIGluIHRoZSBuZXh0IHBhc3Ncblx0XHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGJiW2ldID09PSAxKSB7XG5cdFx0XHRcdGZvciAoaiA9IE1hdGgubWF4KDAsIGkgLSBjb250ZXh0KTsgaiA8IE1hdGgubWluKGIubGVuZ3RoLCBpICsgY29udGV4dCk7ICsraikge1xuXHRcdFx0XHRcdGlmICghYmJbal0pIHtcblx0XHRcdFx0XHRcdGJiW2pdID0gMTtcblx0XHRcdFx0XHRcdGFhW2Jbal0ucm93XSA9IDAuNTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmIChhYVtpXSA9PT0gMSkge1xuXHRcdFx0XHRmb3IgKGogPSBNYXRoLm1heCgwLCBpIC0gY29udGV4dCk7IGogPCBNYXRoLm1pbihhLmxlbmd0aCwgaSArIGNvbnRleHQpOyArK2opIHtcblx0XHRcdFx0XHRpZiAoIWFhW2pdKSB7XG5cdFx0XHRcdFx0XHRhYVtqXSA9IDE7XG5cdFx0XHRcdFx0XHRiYlthW2pdLnJvd10gPSAwLjU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCBiYi5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGJiW2ldID4gMCkge1xuXHRcdFx0XHQvLyBpdCdzIGEgcm93IHdlIG5lZWRcblx0XHRcdFx0aWYgKGJbaV0ucGFpcmVkKSB7XG5cdFx0XHRcdFx0YmJiLnB1c2goYltpXS50ZXh0KTsgLy8gam9pbmVkOyBwYXJ0bmVyIHNob3VsZCBiZSBpbiBhYVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJiYi5wdXNoKGJbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCBhYS5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYgKGFhW2ldID4gMCkge1xuXHRcdFx0XHQvLyBpdCdzIGEgcm93IHdlIG5lZWRcblx0XHRcdFx0aWYgKGFbaV0ucGFpcmVkKSB7XG5cdFx0XHRcdFx0YWFhLnB1c2goYVtpXS50ZXh0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBqb2luZWQ7IHBhcnRuZXIgc2hvdWxkIGJlIGluIGFhXG5cdFx0XHRcdFx0YWFhLnB1c2goYVtpXSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGE6IGFhYSxcblx0XHRcdGI6IGJiYixcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBzdHJpcE91dGVyQ29tbW9uTGluZXMgPSAoYSwgYiwgY29udGV4dCkgPT4ge1xuXHRcdGxldCBpID0gMDtcblx0XHR3aGlsZSAoaSA8IGEubGVuZ3RoICYmIGkgPCBiLmxlbmd0aCAmJiBhW2ldID09PSBiW2ldKSB7XG5cdFx0XHQrK2k7XG5cdFx0fVxuXHRcdGxldCBqID0gYS5sZW5ndGggLSAxO1xuXHRcdGxldCBrID0gYi5sZW5ndGggLSAxO1xuXHRcdHdoaWxlIChqID49IDAgJiYgayA+PSAwICYmIGFbal0gPT09IGJba10pIHtcblx0XHRcdC0tajtcblx0XHRcdC0taztcblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdGE6IGEuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIDEgLSBjb250ZXh0KSwgTWF0aC5taW4oYS5sZW5ndGggKyAxLCBqICsgY29udGV4dCArIDEpKSxcblx0XHRcdGI6IGIuc2xpY2UoTWF0aC5tYXgoMCwgaSAtIDEgLSBjb250ZXh0KSwgTWF0aC5taW4oYi5sZW5ndGggKyAxLCBrICsgY29udGV4dCArIDEpKSxcblx0XHR9O1xuXHR9O1xuXHRjb25zdCBpbnNlcnREaWZmID0gKG5hdnBvcCkgPT4ge1xuXHRcdC8vIGZvciBzcGVlZCByZWFzb25zLCB3ZSBmaXJzdCBkbyBhIGxpbmUtYmFzZWQgZGlmZiwgZGlzY2FyZCBzdHVmZiB0aGF0IHNlZW1zIGJvcmluZywgdGhlblxuXHRcdC8vIGRvIGEgd29yZC1iYXNlZCBkaWZmXG5cdFx0Ly8gRklYTUU6IHNvbWV0aW1lcyB0aGlzIGdpdmVzIG1pc2xlYWRpbmcgZGlmZnMgYXMgZGlzdGFudCBjaHVua3MgYXJlIHNxdWFzaGVkIHRvZ2V0aGVyXG5cdFx0bGV0IG9sZGxpbmVzID0gbmF2cG9wLmRpZmZEYXRhLm9sZFJldi5yZXZpc2lvbi5jb250ZW50LnNwbGl0KCdcXG4nKTtcblx0XHRsZXQgbmV3bGluZXMgPSBuYXZwb3AuZGlmZkRhdGEubmV3UmV2LnJldmlzaW9uLmNvbnRlbnQuc3BsaXQoJ1xcbicpO1xuXHRcdGxldCBpbm5lciA9IHN0cmlwT3V0ZXJDb21tb25MaW5lcyhvbGRsaW5lcywgbmV3bGluZXMsIGdldFZhbHVlT2YoJ3BvcHVwRGlmZkNvbnRleHRMaW5lcycpKTtcblx0XHRvbGRsaW5lcyA9IGlubmVyLmE7XG5cdFx0bmV3bGluZXMgPSBpbm5lci5iO1xuXHRcdGxldCB0cnVuY2F0ZWQgPSBmYWxzZTtcblx0XHRnZXRWYWx1ZU9mKCdwb3B1cERpZmZNYXhMaW5lcycpO1xuXHRcdGlmIChvbGRsaW5lcy5sZW5ndGggPiBwZy5vcHRpb24ucG9wdXBEaWZmTWF4TGluZXMgfHwgbmV3bGluZXMubGVuZ3RoID4gcGcub3B0aW9uLnBvcHVwRGlmZk1heExpbmVzKSB7XG5cdFx0XHQvLyB0cnVuY2F0ZVxuXHRcdFx0dHJ1bmNhdGVkID0gdHJ1ZTtcblx0XHRcdGlubmVyID0gc3RyaXBPdXRlckNvbW1vbkxpbmVzKFxuXHRcdFx0XHRvbGRsaW5lcy5zbGljZSgwLCBwZy5vcHRpb24ucG9wdXBEaWZmTWF4TGluZXMpLFxuXHRcdFx0XHRuZXdsaW5lcy5zbGljZSgwLCBwZy5vcHRpb24ucG9wdXBEaWZmTWF4TGluZXMpLFxuXHRcdFx0XHRwZy5vcHRpb24ucG9wdXBEaWZmQ29udGV4dExpbmVzXG5cdFx0XHQpO1xuXHRcdFx0b2xkbGluZXMgPSBpbm5lci5hO1xuXHRcdFx0bmV3bGluZXMgPSBpbm5lci5iO1xuXHRcdH1cblx0XHRjb25zdCBsaW5lRGlmZiA9IGRpZmYob2xkbGluZXMsIG5ld2xpbmVzKTtcblx0XHRjb25zdCBsaW5lczIgPSBybUJvcmluZ0xpbmVzKGxpbmVEaWZmLm8sIGxpbmVEaWZmLm4pO1xuXHRcdGNvbnN0IG9sZGxpbmVzMiA9IGxpbmVzMi5hO1xuXHRcdGNvbnN0IG5ld2xpbmVzMiA9IGxpbmVzMi5iO1xuXHRcdGxldCBodG1sID0gJzxocj4nO1xuXHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cERpZmZEYXRlcycpKSB7XG5cdFx0XHRodG1sICs9IGRpZmZEYXRlc1RhYmxlKG5hdnBvcCk7XG5cdFx0XHRodG1sICs9ICc8aHI+Jztcblx0XHR9XG5cdFx0aHRtbCArPSBzaG9ydGVuRGlmZlN0cmluZyhcblx0XHRcdGRpZmZTdHJpbmcob2xkbGluZXMyLmpvaW4oJ1xcbicpLCBuZXdsaW5lczIuam9pbignXFxuJykpLFxuXHRcdFx0Z2V0VmFsdWVPZigncG9wdXBEaWZmQ29udGV4dENoYXJhY3RlcnMnKVxuXHRcdCkuam9pbignPGhyPicpO1xuXHRcdHNldFBvcHVwVGlwc0FuZEhUTUwoXG5cdFx0XHRodG1sLnNwbGl0KCdcXG4nKS5qb2luKCc8YnI+JykgK1xuXHRcdFx0XHQodHJ1bmNhdGVkID8gYDxocj48Yj4ke3BvcHVwU3RyaW5nKCdEaWZmIHRydW5jYXRlZCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucycpfTwvYj5gIDogJycpLFxuXHRcdFx0J3BvcHVwUHJldmlldycsXG5cdFx0XHRuYXZwb3AuaWROdW1iZXJcblx0XHQpO1xuXHR9O1xuXHRjb25zdCBkaWZmRGF0ZXNUYWJsZSA9IChuYXZwb3ApID0+IHtcblx0XHRsZXQgaHRtbCA9ICc8dGFibGUgY2xhc3M9XCJwb3B1cF9kaWZmX2RhdGVzXCI+Jztcblx0XHRodG1sICs9IGRpZmZEYXRlc1RhYmxlUm93KG5hdnBvcC5kaWZmRGF0YS5uZXdSZXYucmV2aXNpb24sIHRwcmludGYoJ05ldyByZXZpc2lvbicpKTtcblx0XHRodG1sICs9IGRpZmZEYXRlc1RhYmxlUm93KG5hdnBvcC5kaWZmRGF0YS5vbGRSZXYucmV2aXNpb24sIHRwcmludGYoJ09sZCByZXZpc2lvbicpKTtcblx0XHRodG1sICs9ICc8L3RhYmxlPic7XG5cdFx0cmV0dXJuIGh0bWw7XG5cdH07XG5cdGNvbnN0IGRpZmZEYXRlc1RhYmxlUm93ID0gKHJldmlzaW9uLCBsYWJlbCkgPT4ge1xuXHRcdGxldCB0eHQgPSAnJztcblx0XHRjb25zdCBsYXN0TW9kaWZpZWREYXRlID0gbmV3IERhdGUocmV2aXNpb24udGltZXN0YW1wKTtcblx0XHR0eHQgPSBmb3JtYXR0ZWREYXRlVGltZShsYXN0TW9kaWZpZWREYXRlKTtcblx0XHRjb25zdCByZXZsaW5rID0gZ2VuZXJhbExpbmsoe1xuXHRcdFx0dXJsOiBgJHttdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpfT9vbGRpZD0ke3JldmlzaW9uLnJldmlkfWAsXG5cdFx0XHR0ZXh0OiBsYWJlbCxcblx0XHRcdHRpdGxlOiBsYWJlbCxcblx0XHR9KTtcblx0XHRyZXR1cm4gc2ltcGxlUHJpbnRmKCc8dHI+PHRkPiVzPC90ZD48dGQ+JXM8L3RkPjwvdHI+JywgW3JldmxpbmssIHR4dF0pO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBkaWZmcHJldmlldy5qc1xuXHQvLyBTVEFSVEZJTEU6IGxpbmtzLmpzXG5cdC8vIExJTksgR0VORVJBVElPTiAvL1xuXHQvLyB0aXRsZWREaWZmTGluayAtLT4gdGl0bGVkV2lraUxpbmsgLS0+IGdlbmVyYWxMaW5rXG5cdC8vIHdpa2lMaW5rXHQgICAtLT4gdGl0bGVkV2lraUxpbmsgLS0+IGdlbmVyYWxMaW5rXG5cdC8vIGVkaXRDb3VudGVyTGluayAtLT4gZ2VuZXJhbExpbmtcblx0Ly8gVE9ETyBNYWtlIHRoZXNlIGZ1bmN0aW9ucyByZXR1cm4gRWxlbWVudCBvYmplY3RzLCBub3QganVzdCByYXcgSFRNTCBzdHJpbmdzLlxuXHRjb25zdCB0aXRsZWREaWZmTGluayA9IChsKSA9PiB7XG5cdFx0cmV0dXJuIHRpdGxlZFdpa2lMaW5rKHtcblx0XHRcdGFydGljbGU6IGwuYXJ0aWNsZSxcblx0XHRcdGFjdGlvbjogYCR7bC50b30mb2xkaWQ9JHtsLmZyb219YCxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHRub1BvcHVwOiBsLm5vUG9wdXAsXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHR0aXRsZTogbC50aXRsZSxcblx0XHRcdC8qIGhhY2s6IG5vIG9sZGlkIGhlcmUgKi9cblx0XHRcdGFjdGlvbk5hbWU6ICdkaWZmJyxcblx0XHR9KTtcblx0fTtcblx0Y29uc3Qgd2lraUxpbmsgPSAobCkgPT4ge1xuXHRcdC8vIHthcnRpY2xlOmFydGljbGUsIGFjdGlvbjphY3Rpb24sIHRleHQ6dGV4dCwgb2xkaWQsIG5ld2lkfSkge1xuXHRcdGlmICghKHR5cGVvZiBsLmFydGljbGUgPT09IHR5cGVvZiB7fSAmJiB0eXBlb2YgbC5hY3Rpb24gPT09IHR5cGVvZiAnJyAmJiB0eXBlb2YgbC50ZXh0ID09PSB0eXBlb2YgJycpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKGwub2xkaWQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bC5vbGRpZCA9IG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHNhdmVkT2xkaWQgPSBsLm9sZGlkO1xuXHRcdGlmICghL14oZWRpdHx2aWV3fHJldmVydHxyZW5kZXIpJHxecmF3Ly50ZXN0KGwuYWN0aW9uKSkge1xuXHRcdFx0bC5vbGRpZCA9IG51bGw7XG5cdFx0fVxuXHRcdGxldCBoaW50ID0gcG9wdXBTdHJpbmcoYCR7bC5hY3Rpb259SGludGApOyAvLyByZXZlcnRIaW50IGV0YyBldGMgZXRjXG5cdFx0Y29uc3Qgb2xkaWREYXRhID0gW2wub2xkaWQsIHNhZmVEZWNvZGVVUkkobC5hcnRpY2xlKV07XG5cdFx0bGV0IHJldmlzaW9uU3RyaW5nID0gdHByaW50ZigncmV2aXNpb24gJXMgb2YgJXMnLCBvbGRpZERhdGEpO1xuXHRcdGxvZyhgcmV2aXNpb25TdHJpbmc9JHtyZXZpc2lvblN0cmluZ31gKTtcblx0XHRzd2l0Y2ggKGwuYWN0aW9uKSB7XG5cdFx0XHRjYXNlICdlZGl0JnNlY3Rpb249bmV3Jzpcblx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCduZXdTZWN0aW9uSGludCcpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2VkaXQmdW5kbz0nOlxuXHRcdFx0XHRpZiAobC5kaWZmICYmIGwuZGlmZiAhPT0gJ3ByZXYnICYmIHNhdmVkT2xkaWQpIHtcblx0XHRcdFx0XHRsLmFjdGlvbiArPSBgJHtsLmRpZmZ9JnVuZG9hZnRlcj0ke3NhdmVkT2xkaWR9YDtcblx0XHRcdFx0fSBlbHNlIGlmIChzYXZlZE9sZGlkKSB7XG5cdFx0XHRcdFx0bC5hY3Rpb24gKz0gc2F2ZWRPbGRpZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ3VuZG9IaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmF3JmN0eXBlPXRleHQvY3NzJzpcblx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCdyYXdIaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmV2ZXJ0Jzoge1xuXHRcdFx0XHRjb25zdCBwID0gcGFyc2VQYXJhbXMocGcuY3VycmVudC5saW5rLmhyZWYpO1xuXHRcdFx0XHRsLmFjdGlvbiA9IGBlZGl0JmF1dG9jbGljaz13cFNhdmUmYWN0b2tlbj0ke2F1dG9DbGlja1Rva2VuKCl9JmF1dG9pbXBsPSR7cG9wdXBTdHJpbmcoXG5cdFx0XHRcdFx0J2F1dG9lZGl0X3ZlcnNpb24nXG5cdFx0XHRcdCl9JmF1dG9zdW1tYXJ5PSR7cmV2ZXJ0U3VtbWFyeShsLm9sZGlkLCBwLmRpZmYpfWA7XG5cdFx0XHRcdGlmIChwLmRpZmYgPT09ICdwcmV2Jykge1xuXHRcdFx0XHRcdGwuYWN0aW9uICs9ICcmZGlyZWN0aW9uPXByZXYnO1xuXHRcdFx0XHRcdHJldmlzaW9uU3RyaW5nID0gdHByaW50ZigndGhlIHJldmlzaW9uIHByaW9yIHRvIHJldmlzaW9uICVzIG9mICVzJywgb2xkaWREYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBSZXZlcnRTdW1tYXJ5UHJvbXB0JykpIHtcblx0XHRcdFx0XHRsLmFjdGlvbiArPSAnJmF1dG9zdW1tYXJ5cHJvbXB0PXRydWUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChnZXRWYWx1ZU9mKCdwb3B1cE1pbm9yUmV2ZXJ0cycpKSB7XG5cdFx0XHRcdFx0bC5hY3Rpb24gKz0gJyZhdXRvbWlub3I9dHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bG9nKGByZXZpc2lvblN0cmluZyBpcyBub3cgJHtyZXZpc2lvblN0cmluZ31gKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdudWxsRWRpdCc6XG5cdFx0XHRcdGwuYWN0aW9uID0gYGVkaXQmYXV0b2NsaWNrPXdwU2F2ZSZhY3Rva2VuPSR7YXV0b0NsaWNrVG9rZW4oKX0mYXV0b2ltcGw9JHtwb3B1cFN0cmluZyhcblx0XHRcdFx0XHQnYXV0b2VkaXRfdmVyc2lvbidcblx0XHRcdFx0KX0mYXV0b3N1bW1hcnk9bnVsbGA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaGlzdG9yeWZlZWQnOlxuXHRcdFx0XHRsLmFjdGlvbiA9ICdoaXN0b3J5JmZlZWQ9cnNzJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdtYXJrcGF0cm9sbGVkJzpcblx0XHRcdFx0bC5hY3Rpb24gPSBgbWFya3BhdHJvbGxlZCZyY2lkPSR7bC5yY2lkfWA7XG5cdFx0fVxuXHRcdGlmIChoaW50KSB7XG5cdFx0XHRoaW50ID0gbC5vbGRpZCA/IHNpbXBsZVByaW50ZihoaW50LCBbcmV2aXNpb25TdHJpbmddKSA6IHNpbXBsZVByaW50ZihoaW50LCBbc2FmZURlY29kZVVSSShsLmFydGljbGUpXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhpbnQgPSBzYWZlRGVjb2RlVVJJKGAke2wuYXJ0aWNsZX0mYWN0aW9uPSR7bC5hY3Rpb259YCkgKyBsLm9sZGlkID8gYCZvbGRpZD0ke2wub2xkaWR9YCA6ICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gdGl0bGVkV2lraUxpbmsoe1xuXHRcdFx0YXJ0aWNsZTogbC5hcnRpY2xlLFxuXHRcdFx0YWN0aW9uOiBsLmFjdGlvbixcblx0XHRcdHRleHQ6IGwudGV4dCxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHR0aXRsZTogaGludCxcblx0XHRcdG9sZGlkOiBsLm9sZGlkLFxuXHRcdFx0bm9Qb3B1cDogbC5ub1BvcHVwLFxuXHRcdFx0b25jbGljazogbC5vbmNsaWNrLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCByZXZlcnRTdW1tYXJ5ID0gKG9sZGlkLCBkaWZmKSA9PiB7XG5cdFx0bGV0IHJldCA9ICcnO1xuXHRcdHJldCA9XG5cdFx0XHRkaWZmID09PSAncHJldidcblx0XHRcdFx0PyBnZXRWYWx1ZU9mKCdwb3B1cFF1ZXJpZWRSZXZlcnRUb1ByZXZpb3VzU3VtbWFyeScpXG5cdFx0XHRcdDogZ2V0VmFsdWVPZigncG9wdXBRdWVyaWVkUmV2ZXJ0U3VtbWFyeScpO1xuXHRcdHJldHVybiBgJHtyZXR9JmF1dG9ydj0ke29sZGlkfWA7XG5cdH07XG5cdGNvbnN0IHRpdGxlZFdpa2lMaW5rID0gKGwpID0+IHtcblx0XHQvLyBwb3NzaWJsZSBwcm9wZXJ0aWVzIG9mIGFyZ3VtZW50OlxuXHRcdC8vIGFydGljbGUsIGFjdGlvbiwgdGV4dCwgdGl0bGUsIG9sZGlkLCBhY3Rpb25OYW1lLCBjbGFzc05hbWUsIG5vUG9wdXBcblx0XHQvLyBvbGRpZCA9IG51bGwgaXMgZmluZSBoZXJlXG5cdFx0Ly8gYXJ0aWNsZSBhbmQgYWN0aW9uIGFyZSBtYW5kYXRvcnkgYXJnc1xuXHRcdGlmIChsLmFydGljbGUgPT09IHVuZGVmaW5lZCB8fCBsLmFjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRlcnJsb2coJ2dvdCB1bmRlZmluZWQgYXJ0aWNsZSBvciBhY3Rpb24gaW4gdGl0bGVkV2lraUxpbmsnKTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBiYXNlID0gcGcud2lraS50aXRsZWJhc2UgKyBsLmFydGljbGUudXJsU3RyaW5nKCk7XG5cdFx0bGV0IHVybCA9IGJhc2U7XG5cdFx0aWYgKGwuYWN0aW9uTmFtZSA9PT0gdW5kZWZpbmVkIHx8ICFsLmFjdGlvbk5hbWUpIHtcblx0XHRcdGwuYWN0aW9uTmFtZSA9ICdhY3Rpb24nO1xuXHRcdH1cblx0XHQvLyBubyBuZWVkIHRvIGFkZCAmYWN0aW9uPXZpZXcsIGFuZCB0aGlzIGNvbmZ1c2VzIGFuY2hvcnNcblx0XHRpZiAobC5hY3Rpb24gIT09ICd2aWV3Jykge1xuXHRcdFx0dXJsID0gYCR7YmFzZX0mJHtsLmFjdGlvbk5hbWV9PSR7bC5hY3Rpb259YDtcblx0XHR9XG5cdFx0aWYgKGwub2xkaWQgIT09IHVuZGVmaW5lZCAmJiBsLm9sZGlkKSB7XG5cdFx0XHR1cmwgKz0gYCZvbGRpZD0ke2wub2xkaWR9YDtcblx0XHR9XG5cdFx0bGV0IGNzc0NsYXNzID0gcGcubWlzYy5kZWZhdWx0TmF2bGlua0NsYXNzbmFtZTtcblx0XHRpZiAobC5jbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBsLmNsYXNzTmFtZSkge1xuXHRcdFx0Y3NzQ2xhc3MgPSBsLmNsYXNzTmFtZTtcblx0XHR9XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybCxcblx0XHRcdG5ld1dpbjogbC5uZXdXaW4sXG5cdFx0XHR0aXRsZTogbC50aXRsZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGwudGl0bGUsXG5cdFx0XHR0ZXh0OiBsLnRleHQgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBsLnRleHQsXG5cdFx0XHRjbGFzc05hbWU6IGNzc0NsYXNzLFxuXHRcdFx0bm9Qb3B1cDogbC5ub1BvcHVwLFxuXHRcdFx0b25jbGljazogbC5vbmNsaWNrLFxuXHRcdH0pO1xuXHR9O1xuXHRwZy5mbi5nZXRMYXN0Q29udHJpYiA9ICh3aWtpcGFnZSwgbmV3V2luKSA9PiB7XG5cdFx0Z2V0SGlzdG9yeUluZm8od2lraXBhZ2UsICh4KSA9PiB7XG5cdFx0XHRwcm9jZXNzTGFzdENvbnRyaWJJbmZvKHgsIHtwYWdlOiB3aWtpcGFnZSwgbmV3V2lufSk7XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHByb2Nlc3NMYXN0Q29udHJpYkluZm8gPSAoaW5mbywgc3R1ZmYpID0+IHtcblx0XHRpZiAoIWluZm8uZWRpdHMgfHwgaW5mby5lZGl0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KCdQb3B1cHM6IGFuIG9kZCB0aGluZyBoYXBwZW5lZC4gUGxlYXNlIHJldHJ5LicsIHt0YWc6ICdwb3B1cHMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghaW5mby5maXJzdE5ld0VkaXRvcikge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHRwcmludGYoJ09ubHkgZm91bmQgb25lIGVkaXRvcjogJXMgbWFkZSAlcyBlZGl0cycsIFtpbmZvLmVkaXRzWzBdLmVkaXRvciwgaW5mby5lZGl0cy5sZW5ndGhdKSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRhZzogJ3BvcHVwcycsXG5cdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbmV3VXJsID0gYCR7cGcud2lraS50aXRsZWJhc2UgKyBuZXcgVGl0bGUoc3R1ZmYucGFnZSkudXJsU3RyaW5nKCl9JmRpZmY9Y3VyJm9sZGlkPSR7XG5cdFx0XHRpbmZvLmZpcnN0TmV3RWRpdG9yLm9sZGlkXG5cdFx0fWA7XG5cdFx0ZGlzcGxheVVybChuZXdVcmwsIHN0dWZmLm5ld1dpbik7XG5cdH07XG5cdHBnLmZuLmdldERpZmZTaW5jZU15RWRpdCA9ICh3aWtpcGFnZSwgbmV3V2luKSA9PiB7XG5cdFx0Z2V0SGlzdG9yeUluZm8od2lraXBhZ2UsICh4KSA9PiB7XG5cdFx0XHRwcm9jZXNzRGlmZlNpbmNlTXlFZGl0KHgsIHtwYWdlOiB3aWtpcGFnZSwgbmV3V2lufSk7XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHByb2Nlc3NEaWZmU2luY2VNeUVkaXQgPSAoaW5mbywgc3R1ZmYpID0+IHtcblx0XHRpZiAoIWluZm8uZWRpdHMgfHwgaW5mby5lZGl0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KCdQb3B1cHM6IHNvbWV0aGluZyBmaXNoeSBoYXBwZW5lZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nLCB7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBmcmllbmRseU5hbWUgPSBzdHVmZi5wYWdlLnNwbGl0KCdfJykuam9pbignICcpO1xuXHRcdGlmICghaW5mby5teUxhc3RFZGl0KSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0dHByaW50ZihcIkNvdWxkbid0IGZpbmQgYW4gZWRpdCBieSAlc1xcbmluIHRoZSBsYXN0ICVzIGVkaXRzIHRvXFxuJXNcIiwgW1xuXHRcdFx0XHRcdGluZm8udXNlck5hbWUsXG5cdFx0XHRcdFx0Z2V0VmFsdWVPZigncG9wdXBIaXN0b3J5TGltaXQnKSxcblx0XHRcdFx0XHRmcmllbmRseU5hbWUsXG5cdFx0XHRcdF0pLFxuXHRcdFx0XHR7dGFnOiAncG9wdXBzJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChpbmZvLm15TGFzdEVkaXQuaW5kZXggPT09IDApIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KHRwcmludGYoJyVzIHNlZW1zIHRvIGJlIHRoZSBsYXN0IGVkaXRvciB0byB0aGUgcGFnZSAlcycsIFtpbmZvLnVzZXJOYW1lLCBmcmllbmRseU5hbWVdKSwge1xuXHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IG5ld1VybCA9IGAke3BnLndpa2kudGl0bGViYXNlICsgbmV3IFRpdGxlKHN0dWZmLnBhZ2UpLnVybFN0cmluZygpfSZkaWZmPWN1ciZvbGRpZD0ke1xuXHRcdFx0aW5mby5teUxhc3RFZGl0Lm9sZGlkXG5cdFx0fWA7XG5cdFx0ZGlzcGxheVVybChuZXdVcmwsIHN0dWZmLm5ld1dpbik7XG5cdH07XG5cdGNvbnN0IGRpc3BsYXlVcmwgPSAodXJsLCBuZXdXaW4pID0+IHtcblx0XHRpZiAobmV3V2luKSB7XG5cdFx0XHR3aW5kb3cub3Blbih1cmwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5sb2NhdGlvbiA9IHVybDtcblx0XHR9XG5cdH07XG5cdHBnLmZuLnB1cmdlUG9wdXBzID0gKCkgPT4ge1xuXHRcdHByb2Nlc3NBbGxQb3B1cHModHJ1ZSk7XG5cdFx0c2V0dXBDYWNoZSgpOyAvLyBkZWxldGVzIGFsbCBjYWNoZWQgaXRlbXMgKG5vdCBicm93c2VyIGNhY2hlZCwgdGhvdWdoLi4uKVxuXHRcdHBnLm9wdGlvbiA9IHt9O1xuXHRcdGFib3J0QWxsRG93bmxvYWRzKCk7XG5cdH07XG5cdGNvbnN0IHByb2Nlc3NBbGxQb3B1cHMgPSAobnVsbGlmeSwgYmFuaXNoKSA9PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IHBnLmN1cnJlbnQubGlua3MgJiYgaSA8IHBnLmN1cnJlbnQubGlua3MubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmICghcGcuY3VycmVudC5saW5rc1tpXS5uYXZwb3B1cCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmIChudWxsaWZ5IHx8IGJhbmlzaCkge1xuXHRcdFx0XHRwZy5jdXJyZW50LmxpbmtzW2ldLm5hdnBvcHVwLmJhbmlzaCgpO1xuXHRcdFx0fVxuXHRcdFx0cGcuY3VycmVudC5saW5rc1tpXS5zaW1wbGVOb01vcmUgPSBmYWxzZTtcblx0XHRcdGlmIChudWxsaWZ5KSB7XG5cdFx0XHRcdHBnLmN1cnJlbnQubGlua3NbaV0ubmF2cG9wdXAgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cGcuZm4uZGlzYWJsZVBvcHVwcyA9ICgpID0+IHtcblx0XHRwcm9jZXNzQWxsUG9wdXBzKGZhbHNlLCB0cnVlKTtcblx0XHRzZXR1cFRvb2x0aXBzKG51bGwsIHRydWUpO1xuXHR9O1xuXHRwZy5mbi50b2dnbGVQcmV2aWV3cyA9ICgpID0+IHtcblx0XHRwcm9jZXNzQWxsUG9wdXBzKHRydWUsIHRydWUpO1xuXHRcdHBnLm9wdGlvbi5zaW1wbGVQb3B1cHMgPSAhcGcub3B0aW9uLnNpbXBsZVBvcHVwcztcblx0XHRhYm9ydEFsbERvd25sb2FkcygpO1xuXHR9O1xuXHRjb25zdCBtYWdpY1dhdGNoTGluayA9IGZ1bmN0aW9uIG1hZ2ljV2F0Y2hMaW5rKGwpIHtcblx0XHQvLyBZdWNrISEgV291bGQgcmVxdWlyZSBhIHRob3JvdWdoIHJlZGVzaWduIHRvIGFkZCB0aGlzIGFzIGEgY2xpY2sgZXZlbnQgdGhvdWdoIC4uLlxuXHRcdGwub25jbGljayA9IHNpbXBsZVByaW50ZihcInBnLmZuLm1vZGlmeVdhdGNobGlzdCgnJXMnLCclcycpO3JldHVybiBmYWxzZTtcIiwgW1xuXHRcdFx0bC5hcnRpY2xlXG5cdFx0XHRcdC50b1N0cmluZyh0cnVlKVxuXHRcdFx0XHQuc3BsaXQoJ1xcXFwnKVxuXHRcdFx0XHQuam9pbignXFxcXFxcXFwnKVxuXHRcdFx0XHQuc3BsaXQoXCInXCIpXG5cdFx0XHRcdC5qb2luKFN0cmluZy5yYXdgXFwnYCksXG5cdFx0XHR0aGlzLmlkLFxuXHRcdF0pO1xuXHRcdHJldHVybiB3aWtpTGluayhsKTtcblx0fTtcblx0cGcuZm4ubW9kaWZ5V2F0Y2hsaXN0ID0gYXN5bmMgKHRpdGxlLCBhY3Rpb24pID0+IHtcblx0XHRjb25zdCByZXFEYXRhID0ge1xuXHRcdFx0YWN0aW9uOiAnd2F0Y2gnLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdHVzZWxhbmc6IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyksXG5cdFx0fTtcblx0XHRpZiAoYWN0aW9uID09PSAndW53YXRjaCcpIHtcblx0XHRcdHJlcURhdGEudW53YXRjaCA9IHRydWU7XG5cdFx0fVxuXHRcdC8vIExvYWQgdGhlIEFkZGVkd2F0Y2h0ZXh0IG9yIFJlbW92ZWR3YXRjaHRleHQgbWVzc2FnZSBhbmQgc2hvdyBpdFxuXHRcdGNvbnN0IG13VGl0bGUgPSBtdy5UaXRsZS5uZXdGcm9tVGV4dCh0aXRsZSk7XG5cdFx0bGV0IG1lc3NhZ2VOYW1lO1xuXHRcdGlmIChtd1RpdGxlICYmIG13VGl0bGUuZ2V0TmFtZXNwYWNlSWQoKSA+IDAgJiYgbXdUaXRsZS5nZXROYW1lc3BhY2VJZCgpICUgMiA9PT0gMSkge1xuXHRcdFx0bWVzc2FnZU5hbWUgPSBhY3Rpb24gPT09ICd3YXRjaCcgPyAnYWRkZWR3YXRjaHRleHQtdGFsaycgOiAncmVtb3ZlZHdhdGNodGV4dC10YWxrJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWVzc2FnZU5hbWUgPSBhY3Rpb24gPT09ICd3YXRjaCcgPyAnYWRkZWR3YXRjaHRleHQnIDogJ3JlbW92ZWR3YXRjaHRleHQnO1xuXHRcdH1cblx0XHRhd2FpdCBnZXRNd0FwaSgpLnBvc3RXaXRoVG9rZW4oJ3dhdGNoJywgcmVxRGF0YSk7XG5cdFx0YXdhaXQgZ2V0TXdBcGkoKS5sb2FkTWVzc2FnZXNJZk1pc3NpbmcoW21lc3NhZ2VOYW1lXSk7XG5cdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIHN0cmluZy5qc1xuXHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHR2b2lkIG13Lm5vdGlmeShtdy5tZXNzYWdlKG1lc3NhZ2VOYW1lLCB0aXRsZSkucGFyc2VEb20oKSwge3RhZzogJ3BvcHVwcyd9KTtcblx0fTtcblx0Y29uc3QgbWFnaWNIaXN0b3J5TGluayA9IChsKSA9PiB7XG5cdFx0Ly8gRklYTUUgdXNlIG9uY2xpY2sgY2hhbmdlIGhyZWYgdHJpY2sgdG8gc29ydCB0aGlzIG91dCBpbnN0ZWFkIG9mIHdpbmRvdy5vcGVuXG5cdFx0bGV0IGpzVXJsID0gJyc7XG5cdFx0bGV0IHRpdGxlID0gJyc7XG5cdFx0bGV0IG9uQ2xpY2sgPSAnJztcblx0XHRzd2l0Y2ggKGwuaWQpIHtcblx0XHRcdGNhc2UgJ2xhc3RDb250cmliJzpcblx0XHRcdFx0b25DbGljayA9IHNpbXBsZVByaW50ZihcInBnLmZuLmdldExhc3RDb250cmliKCclcycsJXMpXCIsIFtcblx0XHRcdFx0XHRsLmFydGljbGVcblx0XHRcdFx0XHRcdC50b1N0cmluZyh0cnVlKVxuXHRcdFx0XHRcdFx0LnNwbGl0KCdcXFxcJylcblx0XHRcdFx0XHRcdC5qb2luKCdcXFxcXFxcXCcpXG5cdFx0XHRcdFx0XHQuc3BsaXQoXCInXCIpXG5cdFx0XHRcdFx0XHQuam9pbihTdHJpbmcucmF3YFxcJ2ApLFxuXHRcdFx0XHRcdGwubmV3V2luLFxuXHRcdFx0XHRdKTtcblx0XHRcdFx0dGl0bGUgPSBwb3B1cFN0cmluZygnbGFzdENvbnRyaWJIaW50Jyk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnc2luY2VNZSc6XG5cdFx0XHRcdG9uQ2xpY2sgPSBzaW1wbGVQcmludGYoXCJwZy5mbi5nZXREaWZmU2luY2VNeUVkaXQoJyVzJywlcylcIiwgW1xuXHRcdFx0XHRcdGwuYXJ0aWNsZVxuXHRcdFx0XHRcdFx0LnRvU3RyaW5nKHRydWUpXG5cdFx0XHRcdFx0XHQuc3BsaXQoJ1xcXFwnKVxuXHRcdFx0XHRcdFx0LmpvaW4oJ1xcXFxcXFxcJylcblx0XHRcdFx0XHRcdC5zcGxpdChcIidcIilcblx0XHRcdFx0XHRcdC5qb2luKFN0cmluZy5yYXdgXFwnYCksXG5cdFx0XHRcdFx0bC5uZXdXaW4sXG5cdFx0XHRcdF0pO1xuXHRcdFx0XHR0aXRsZSA9IHBvcHVwU3RyaW5nKCdzaW5jZU1lSGludCcpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0anNVcmwgPSBgamF2YXNjcmlwdDoke29uQ2xpY2t9YDsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cdFx0b25DbGljayArPSAnO3JldHVybiBmYWxzZTsnO1xuXHRcdHJldHVybiBnZW5lcmFsTmF2TGluayh7XG5cdFx0XHR1cmw6IGpzVXJsLFxuXHRcdFx0bmV3V2luOiBmYWxzZSxcblx0XHRcdHRpdGxlLFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bm9Qb3B1cDogbC5ub1BvcHVwLFxuXHRcdFx0b25jbGljazogb25DbGljayxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgcG9wdXBNZW51TGluayA9IChsKSA9PiB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNjcmlwdC11cmxcblx0XHRjb25zdCBqc1VybCA9IHNpbXBsZVByaW50ZignamF2YXNjcmlwdDpwZy5mbi4lcygpJywgW2wuaWRdKTsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cdFx0Y29uc3QgdGl0bGUgPSBwb3B1cFN0cmluZyhzaW1wbGVQcmludGYoJyVzSGludCcsIFtsLmlkXSkpO1xuXHRcdGNvbnN0IG9uQ2xpY2sgPSBzaW1wbGVQcmludGYoJ3BnLmZuLiVzKCk7cmV0dXJuIGZhbHNlOycsIFtsLmlkXSk7XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybDoganNVcmwsXG5cdFx0XHRuZXdXaW46IGZhbHNlLFxuXHRcdFx0dGl0bGUsXG5cdFx0XHR0ZXh0OiBsLnRleHQsXG5cdFx0XHRub1BvcHVwOiBsLm5vUG9wdXAsXG5cdFx0XHRvbmNsaWNrOiBvbkNsaWNrLFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBzcGVjaWFsTGluayA9IChsKSA9PiB7XG5cdFx0Ly8gcHJvcGVydGllczogYXJ0aWNsZSwgc3BlY2lhbHBhZ2UsIHRleHQsIHNlcFxuXHRcdGlmIChsLnNwZWNpYWxwYWdlID09PSB1bmRlZmluZWQgfHwgIWwuc3BlY2lhbHBhZ2UpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBiYXNlID0gYCR7cGcud2lraS50aXRsZWJhc2UgKyBtdy5jb25maWcuZ2V0KCd3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMnKVtwZy5uc1NwZWNpYWxJZF19OiR7bC5zcGVjaWFscGFnZX1gO1xuXHRcdGlmIChsLnNlcCA9PT0gdW5kZWZpbmVkIHx8IGwuc2VwID09PSBudWxsKSB7XG5cdFx0XHRsLnNlcCA9ICcmdGFyZ2V0PSc7XG5cdFx0fVxuXHRcdGxldCBhcnRpY2xlID0gbC5hcnRpY2xlLnVybFN0cmluZyh7XG5cdFx0XHRrZWVwU3BhY2VzOiBsLnNwZWNpYWxwYWdlID09PSAnU2VhcmNoJyxcblx0XHR9KTtcblx0XHRsZXQgaGludCA9IHBvcHVwU3RyaW5nKGAke2wuc3BlY2lhbHBhZ2V9SGludGApO1xuXHRcdHN3aXRjaCAobC5zcGVjaWFscGFnZSkge1xuXHRcdFx0Y2FzZSAnTG9nJzpcblx0XHRcdFx0c3dpdGNoIChsLnNlcCkge1xuXHRcdFx0XHRcdGNhc2UgJyZ1c2VyPSc6XG5cdFx0XHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ3VzZXJMb2dIaW50Jyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICcmdHlwZT1ibG9jayZwYWdlPSc6XG5cdFx0XHRcdFx0XHRoaW50ID0gcG9wdXBTdHJpbmcoJ2Jsb2NrTG9nSGludCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnJnBhZ2U9Jzpcblx0XHRcdFx0XHRcdGhpbnQgPSBwb3B1cFN0cmluZygncGFnZUxvZ0hpbnQnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJyZ0eXBlPXByb3RlY3QmcGFnZT0nOlxuXHRcdFx0XHRcdFx0aGludCA9IHBvcHVwU3RyaW5nKCdwcm90ZWN0TG9nSGludCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnJnR5cGU9ZGVsZXRlJnBhZ2U9Jzpcblx0XHRcdFx0XHRcdGhpbnQgPSBwb3B1cFN0cmluZygnZGVsZXRlTG9nSGludCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGxvZyhgVW5rbm93biBsb2cgdHlwZSwgc2VwPSR7bC5zZXB9YCk7XG5cdFx0XHRcdFx0XHRoaW50ID0gJ01pc3NpbmcgaGludCAoRklYTUUpJztcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ1ByZWZpeEluZGV4Jzpcblx0XHRcdFx0YXJ0aWNsZSArPSAnLyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRoaW50ID0gaGludCA/IHNpbXBsZVByaW50ZihoaW50LCBbc2FmZURlY29kZVVSSShsLmFydGljbGUpXSkgOiBzYWZlRGVjb2RlVVJJKGAke2wuc3BlY2lhbHBhZ2V9OiR7bC5hcnRpY2xlfWApO1xuXHRcdGNvbnN0IHVybCA9IGJhc2UgKyBsLnNlcCArIGFydGljbGU7XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybCxcblx0XHRcdHRpdGxlOiBoaW50LFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bmV3V2luOiBsLm5ld1dpbixcblx0XHRcdG5vUG9wdXA6IGwubm9Qb3B1cCxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgZ2VuZXJhbExpbmsgPSAobCkgPT4ge1xuXHRcdC8vIGwudXJsLCBsLnRleHQsIGwudGl0bGUsIGwubmV3V2luLCBsLmNsYXNzTmFtZSwgbC5ub1BvcHVwLCBsLm9uY2xpY2tcblx0XHRpZiAobC51cmwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdC8vIG9ubHkgcXVvdGF0aW9uIG1hcmtzIGluIHRoZSB1cmwgY2FuIHNjcmV3IHVzIHVwIG5vdy4uLiBJIHRoaW5rXG5cdFx0Y29uc3QgdXJsID0gbC51cmwuc3BsaXQoJ1wiJykuam9pbignJTIyJyk7XG5cdFx0bGV0IHJldCA9IGA8YSBocmVmPVwiJHt1cmx9XCJgO1xuXHRcdGlmIChsLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgbC50aXRsZSkge1xuXHRcdFx0cmV0ICs9IGAgdGl0bGU9XCIke3BnLmVzY2FwZVF1b3Rlc0hUTUwobC50aXRsZSl9XCJgO1xuXHRcdH1cblx0XHRpZiAobC5vbmNsaWNrICE9PSB1bmRlZmluZWQgJiYgbC5vbmNsaWNrKSB7XG5cdFx0XHRyZXQgKz0gYCBvbmNsaWNrPVwiJHtwZy5lc2NhcGVRdW90ZXNIVE1MKGwub25jbGljayl9XCJgO1xuXHRcdH1cblx0XHRpZiAobC5ub1BvcHVwKSB7XG5cdFx0XHRyZXQgKz0gJyBub1BvcHVwPTEnO1xuXHRcdH1cblx0XHRsZXQgbmV3V2luO1xuXHRcdGlmIChsLm5ld1dpbiA9PT0gdW5kZWZpbmVkIHx8IGwubmV3V2luID09PSBudWxsKSB7XG5cdFx0XHRuZXdXaW4gPSBnZXRWYWx1ZU9mKCdwb3B1cE5ld1dpbmRvd3MnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0KHtuZXdXaW59ID0gbCk7XG5cdFx0fVxuXHRcdGlmIChuZXdXaW4pIHtcblx0XHRcdHJldCArPSAnIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCInO1xuXHRcdH1cblx0XHRpZiAobC5jbGFzc05hbWUgIT09IHVuZGVmaW5lZCAmJiBsLmNsYXNzTmFtZSkge1xuXHRcdFx0cmV0ICs9IGAgY2xhc3M9XCIke2wuY2xhc3NOYW1lfVwiYDtcblx0XHR9XG5cdFx0cmV0ICs9ICc+Jztcblx0XHRpZiAodHlwZW9mIGwudGV4dCA9PT0gdHlwZW9mICcnKSB7XG5cdFx0XHQvLyBXZSBuZWVkIHRvIEhUTUwtZXNjYXBlIHRoaXMgdG8gYXZvaWQgWFNTLCBidXQgd2UgYWxzbyB3YW50IHRvXG5cdFx0XHQvLyBkaXNwbGF5IGFueSBleGlzdGluZyBIVE1MIGVudGl0aWVzIGNvcnJlY3RseSwgc28gdW5lc2NhcGUgaXQgZmlyc3QuXG5cdFx0XHQvLyBGb3IgZXhhbXBsZSwgdGhlIGRpc3BsYXkgdGV4dCBvZiB0aGUgdXNlciBwYWdlIG1lbnUgaXRlbSBpcyBkZWZpbmVkXG5cdFx0XHQvLyBhcyBcInVzZXImbmJzcDtwYWdlXCIsIHNvIHdlIG5lZWQgdG8gdW5lc2NhcGUgZmlyc3QgdG8gYXZvaWQgaXQgYmVpbmdcblx0XHRcdC8vIGVzY2FwZWQgdG8gXCJ1c2VyJmFtcDtuYnNwO3BhZ2VcIi5cblx0XHRcdHJldCArPSBwZy5lc2NhcGVRdW90ZXNIVE1MKHBnLnVuZXNjYXBlUXVvdGVzSFRNTChsLnRleHQpKTtcblx0XHR9XG5cdFx0cmV0ICs9ICc8L2E+Jztcblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBhcHBlbmRQYXJhbXNUb0xpbmsgPSAobGlua3N0ciwgcGFyYW1zKSA9PiB7XG5cdFx0Y29uc3Qgc3AgPSBsaW5rc3RyLnNwbGl0KC8oaHJlZj1cIlteXCJdKz8pXCIvaSk7XG5cdFx0aWYgKHNwLmxlbmd0aCA8IDIpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgcmV0ID0gc3Auc2hpZnQoKSArIHNwLnNoaWZ0KCk7XG5cdFx0cmV0ICs9IGAmJHtwYXJhbXN9XCJgO1xuXHRcdHJldCArPSBzcC5qb2luKCcnKTtcblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBjaGFuZ2VMaW5rVGFyZ2V0TGluayA9ICh4KSA9PiB7XG5cdFx0Ly8gbmV3VGFyZ2V0LCB0ZXh0LCBoaW50LCBzdW1tYXJ5LCBjbGlja0J1dHRvbiwgbWlub3IsIHRpdGxlIChvcHRpb25hbCksIGFsc29DaGFuZ2VMYWJlbCB7XG5cdFx0aWYgKHgubmV3VGFyZ2V0KSB7XG5cdFx0XHRsb2coYGNoYW5nZUxpbmtUYXJnZXRMaW5rOiBuZXdUYXJnZXQ9JHt4Lm5ld1RhcmdldH1gKTtcblx0XHR9XG5cdFx0aWYgKHgub2xkVGFyZ2V0ICE9PSBkZWNvZGVVUklDb21wb25lbnQoeC5vbGRUYXJnZXQpKSB7XG5cdFx0XHRsb2coYFRoaXMgbWlnaHQgYmUgYW4gaW5wdXQgcHJvYmxlbTogJHt4Lm9sZFRhcmdldH1gKTtcblx0XHR9XG5cdFx0Ly8gRklYTUU6IGZpcnN0IGNoYXJhY3RlciBvZiBwYWdlIHRpdGxlIGFzIHdlbGwgYXMgbmFtZXNwYWNlIHNob3VsZCBiZSBjYXNlIGluc2Vuc2l0aXZlXG5cdFx0Ly8gZWcgW1s6Y2F0ZWdvcnk6WDFdXSBhbmQgW1s6Q2F0ZWdvcnk6WDFdXSBhcmUgZXF1aXZhbGVudFxuXHRcdC8vIHRoaXMnbGwgYnJlYWsgaWYgY2hhckF0KDApIGlzIG5hc3R5XG5cdFx0Y29uc3QgY0EgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cCh4Lm9sZFRhcmdldCk7XG5cdFx0bGV0IGNocyA9IGNBLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuXHRcdGNocyA9IGBbJHtjaHN9JHtjaHMudG9Mb3dlckNhc2UoKX1dYDtcblx0XHRsZXQgY3VycmVudEFydGljbGVSZWdleEJpdCA9IGNocyArIGNBLnNsaWNlKDEpO1xuXHRcdGN1cnJlbnRBcnRpY2xlUmVnZXhCaXQgPSBjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0XG5cdFx0XHQuc3BsaXQoL1sgX10rfCUyMC9nKVxuXHRcdFx0LmpvaW4oJyg/OltfIF0rfCUyMCknKVxuXHRcdFx0LnNwbGl0KFN0cmluZy5yYXdgXFwoYClcblx0XHRcdC5qb2luKFN0cmluZy5yYXdgKD86JTI4fFxcKClgKVxuXHRcdFx0LnNwbGl0KFN0cmluZy5yYXdgXFwpYClcblx0XHRcdC5qb2luKFN0cmluZy5yYXdgKD86JTI5fFxcKSlgKTsgLy8gd2h5IGRvZXMgdGhpcyBuZWVkIHRvIG1hdGNoIGVuY29kZWQgc3RyaW5ncyA/IGxpbmtzIGluIHRoZSBkb2N1bWVudCA/XG5cblx0XHQvLyBsZWFkaW5nIGFuZCB0cmFpbGluZyBzcGFjZSBzaG91bGQgYmUgaWdub3JlZCwgYW5kIGFuY2hvciBiaXRzIG9wdGlvbmFsOlxuXHRcdGN1cnJlbnRBcnRpY2xlUmVnZXhCaXQgPSBgXFxcXHMqKCR7Y3VycmVudEFydGljbGVSZWdleEJpdH0oPzojW15cXFxcW1xcXFx8XSopPylcXFxccypgO1xuXHRcdC8vIGUuZy4gQ29tcHV0ZXIgKGFyY2hhaWMpIC0+IFxccyooW0NjXW9tcHV0ZXJbXyBdKD86JTI1Mjh8XFwoKWFyY2hhaWMoPzolMjUyOHxcXCkpKVxccypcblx0XHQvLyBhdXRvZWRpdD1zflxcW1xcWyhbQ2NdYWQpXFxdXFxdfltbQ29tcHV0ZXItYWlkZWQlMjBkZXNpZ258JDFdXX5nO3N+XFxbXFxbKFtDY11BRClbfF1+W1tDb21wdXRlci1haWRlZCUyMGRlc2lnbnx+Z1xuXHRcdGNvbnN0IHRpdGxlID0geC50aXRsZSB8fCBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykuc3BsaXQoJ18nKS5qb2luKCcgJyk7XG5cdFx0Y29uc3QgbGsgPSB0aXRsZWRXaWtpTGluayh7XG5cdFx0XHRhcnRpY2xlOiBuZXcgVGl0bGUodGl0bGUpLFxuXHRcdFx0bmV3V2luOiB4Lm5ld1dpbixcblx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0dGV4dDogeC50ZXh0LFxuXHRcdFx0dGl0bGU6IHguaGludCxcblx0XHRcdGNsYXNzTmFtZTogJ3BvcHVwX2NoYW5nZV90aXRsZV9saW5rJyxcblx0XHR9KTtcblx0XHRsZXQgY21kID0gJyc7XG5cdFx0aWYgKHgubmV3VGFyZ2V0KSB7XG5cdFx0XHQvLyBlc2NhcGUgJyYnIGFuZCBvdGhlciBuYXN0aWVzXG5cdFx0XHRjb25zdCB0ID0geC5uZXdUYXJnZXQ7XG5cdFx0XHRjb25zdCBzID0gbXcudXRpbC5lc2NhcGVSZWdFeHAoeC5uZXdUYXJnZXQpO1xuXHRcdFx0aWYgKHguYWxzb0NoYW5nZUxhYmVsKSB7XG5cdFx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0fVxcXFxdXFxcXF1+W1ske3R9XV1+ZztgO1xuXHRcdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7Y3VycmVudEFydGljbGVSZWdleEJpdH1bfF1+W1ske3R9fH5nO2A7XG5cdFx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtzfVxcXFx8JHtzfVxcXFxdXFxcXF1+W1ske3R9XV1+Z2A7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7Y3VycmVudEFydGljbGVSZWdleEJpdH1cXFxcXVxcXFxdfltbJHt0fXwkMV1dfmc7YDtcblx0XHRcdFx0Y21kICs9IGBzflxcXFxbXFxcXFske2N1cnJlbnRBcnRpY2xlUmVnZXhCaXR9W3xdfltbJHt0fXx+ZztgO1xuXHRcdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7c31cXFxcfCR7c31cXFxcXVxcXFxdfltbJHt0fV1dfmdgO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjbWQgKz0gYHN+XFxcXFtcXFxcWyR7Y3VycmVudEFydGljbGVSZWdleEJpdH1cXFxcXVxcXFxdfiQxfmc7YDtcblx0XHRcdGNtZCArPSBgc35cXFxcW1xcXFxbJHtjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0fVt8XSguKj8pXFxcXF1cXFxcXX4kMn5nYDtcblx0XHR9XG5cdFx0Ly8gQnVpbGQgcXVlcnlcblx0XHRjbWQgPSBgYXV0b2VkaXQ9JHtlbmNvZGVVUklDb21wb25lbnQoY21kKX1gO1xuXHRcdGNtZCArPSBgJmF1dG9jbGljaz0ke2VuY29kZVVSSUNvbXBvbmVudCh4LmNsaWNrQnV0dG9uKX0mYWN0b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudChhdXRvQ2xpY2tUb2tlbigpKX1gO1xuXHRcdGNtZCArPSB4Lm1pbm9yID09PSBudWxsID8gJycgOiBgJmF1dG9taW5vcj0ke2VuY29kZVVSSUNvbXBvbmVudCh4Lm1pbm9yKX1gO1xuXHRcdGNtZCArPSB4LndhdGNoID09PSBudWxsID8gJycgOiBgJmF1dG93YXRjaD0ke2VuY29kZVVSSUNvbXBvbmVudCh4LndhdGNoKX1gO1xuXHRcdGNtZCArPSBgJmF1dG9zdW1tYXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHguc3VtbWFyeSl9YDtcblx0XHRjbWQgKz0gYCZhdXRvaW1wbD0ke2VuY29kZVVSSUNvbXBvbmVudChwb3B1cFN0cmluZygnYXV0b2VkaXRfdmVyc2lvbicpKX1gO1xuXHRcdHJldHVybiBhcHBlbmRQYXJhbXNUb0xpbmsobGssIGNtZCk7XG5cdH07XG5cdGNvbnN0IHJlZGlyTGluayA9IChyZWRpck1hdGNoLCBhcnRpY2xlKSA9PiB7XG5cdFx0Ly8gTkIgcmVkaXJNYXRjaCBpcyBpbiB3aWtpVGV4dFxuXHRcdGxldCByZXQgPSAnJztcblx0XHRpZiAoZ2V0VmFsdWVPZigncG9wdXBBcHBlbmRSZWRpck5hdkxpbmtzJykgJiYgZ2V0VmFsdWVPZigncG9wdXBOYXZMaW5rcycpKSB7XG5cdFx0XHRyZXQgKz0gJzxocj4nO1xuXHRcdFx0aWYgKGdldFZhbHVlT2YoJ3BvcHVwRml4UmVkaXJzJykgJiYgYXV0b0VkaXQgIT09IHVuZGVmaW5lZCAmJiBhdXRvRWRpdCkge1xuXHRcdFx0XHRyZXQgKz0gcG9wdXBTdHJpbmcoJ1JlZGlyZWN0cyB0bzogKEZpeCAnKTtcblx0XHRcdFx0bG9nKGByZWRpckxpbms6IG5ld1RhcmdldD0ke3JlZGlyTWF0Y2h9YCk7XG5cdFx0XHRcdHJldCArPSBhZGRQb3B1cFNob3J0Y3V0KFxuXHRcdFx0XHRcdGNoYW5nZUxpbmtUYXJnZXRMaW5rKHtcblx0XHRcdFx0XHRcdG5ld1RhcmdldDogcmVkaXJNYXRjaCxcblx0XHRcdFx0XHRcdHRleHQ6IHBvcHVwU3RyaW5nKCd0YXJnZXQnKSxcblx0XHRcdFx0XHRcdGhpbnQ6IHBvcHVwU3RyaW5nKCdGaXggdGhpcyByZWRpcmVjdCwgY2hhbmdpbmcganVzdCB0aGUgbGluayB0YXJnZXQnKSxcblx0XHRcdFx0XHRcdHN1bW1hcnk6IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cEZpeFJlZGlyc1N1bW1hcnknKSwgW2FydGljbGUudG9TdHJpbmcoKSwgcmVkaXJNYXRjaF0pLFxuXHRcdFx0XHRcdFx0b2xkVGFyZ2V0OiBhcnRpY2xlLnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0XHRjbGlja0J1dHRvbjogZ2V0VmFsdWVPZigncG9wdXBSZWRpckF1dG9DbGljaycpLFxuXHRcdFx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHRcdFx0XHR3YXRjaDogZ2V0VmFsdWVPZigncG9wdXBXYXRjaFJlZGlycmVkUGFnZXMnKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHQnUidcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0ICs9IHBvcHVwU3RyaW5nKCcgb3IgJyk7XG5cdFx0XHRcdHJldCArPSBhZGRQb3B1cFNob3J0Y3V0KFxuXHRcdFx0XHRcdGNoYW5nZUxpbmtUYXJnZXRMaW5rKHtcblx0XHRcdFx0XHRcdG5ld1RhcmdldDogcmVkaXJNYXRjaCxcblx0XHRcdFx0XHRcdHRleHQ6IHBvcHVwU3RyaW5nKCd0YXJnZXQgJiBsYWJlbCcpLFxuXHRcdFx0XHRcdFx0aGludDogcG9wdXBTdHJpbmcoJ0ZpeCB0aGlzIHJlZGlyZWN0LCBjaGFuZ2luZyB0aGUgbGluayB0YXJnZXQgYW5kIGxhYmVsJyksXG5cdFx0XHRcdFx0XHRzdW1tYXJ5OiBzaW1wbGVQcmludGYoZ2V0VmFsdWVPZigncG9wdXBGaXhSZWRpcnNTdW1tYXJ5JyksIFthcnRpY2xlLnRvU3RyaW5nKCksIHJlZGlyTWF0Y2hdKSxcblx0XHRcdFx0XHRcdG9sZFRhcmdldDogYXJ0aWNsZS50b1N0cmluZygpLFxuXHRcdFx0XHRcdFx0Y2xpY2tCdXR0b246IGdldFZhbHVlT2YoJ3BvcHVwUmVkaXJBdXRvQ2xpY2snKSxcblx0XHRcdFx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdFx0XHRcdFx0d2F0Y2g6IGdldFZhbHVlT2YoJ3BvcHVwV2F0Y2hSZWRpcnJlZFBhZ2VzJyksXG5cdFx0XHRcdFx0XHRhbHNvQ2hhbmdlTGFiZWw6IHRydWUsXG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0J1InXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldCArPSBwb3B1cFN0cmluZygnKScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0ICs9IHBvcHVwU3RyaW5nKCdSZWRpcmVjdHMnKSArIHBvcHVwU3RyaW5nKCcgdG8gJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblx0XHRyZXR1cm4gYDxicj4gJHtwb3B1cFN0cmluZygnUmVkaXJlY3RzJyl9JHtwb3B1cFN0cmluZygnIHRvICcpfSR7dGl0bGVkV2lraUxpbmsoe1xuXHRcdFx0YXJ0aWNsZTogbmV3IFRpdGxlKCkuZnJvbVdpa2lUZXh0KHJlZGlyTWF0Y2gpLFxuXHRcdFx0YWN0aW9uOiAndmlldycgLyogRklYTUU6IG5ld1dpbiAqLyxcblx0XHRcdHRleHQ6IHNhZmVEZWNvZGVVUkkocmVkaXJNYXRjaCksXG5cdFx0XHR0aXRsZTogcG9wdXBTdHJpbmcoJ0J5cGFzcyByZWRpcmVjdCcpLFxuXHRcdH0pfWA7XG5cdH07XG5cdGNvbnN0IGFyaW5MaW5rID0gKGwpID0+IHtcblx0XHRpZiAoIXNhbmVMaW5rQ2hlY2sobCkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAoIWwuYXJ0aWNsZS5pc0lwVXNlcigpIHx8ICFwZy53aWtpLndpa2ltZWRpYSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHVOID0gbC5hcnRpY2xlLnVzZXJOYW1lKCk7XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybDogYGh0dHA6Ly93cy5hcmluLm5ldC9jZ2ktYmluL3dob2lzLnBsP3F1ZXJ5aW5wdXQ9JHtlbmNvZGVVUklDb21wb25lbnQodU4pfWAsXG5cdFx0XHRuZXdXaW46IGwubmV3V2luLFxuXHRcdFx0dGl0bGU6IHRwcmludGYoJ0xvb2sgdXAgJXMgaW4gQVJJTiB3aG9pcyBkYXRhYmFzZScsIFt1Tl0pLFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bm9Qb3B1cDogMSxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgdG9vbERiTmFtZSA9IChjb29raWVTdHlsZSkgPT4ge1xuXHRcdGxldCByZXQgPSBtdy5jb25maWcuZ2V0KCd3Z0RCbmFtZScpO1xuXHRcdGlmICghY29va2llU3R5bGUpIHtcblx0XHRcdHJldCArPSAnX3AnO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHRjb25zdCBzYW5lTGlua0NoZWNrID0gKGwpID0+IHtcblx0XHRpZiAodHlwZW9mIGwuYXJ0aWNsZSAhPT0gdHlwZW9mIHt9IHx8IHR5cGVvZiBsLnRleHQgIT09IHR5cGVvZiAnJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0Y29uc3QgZWRpdENvdW50ZXJMaW5rID0gKGwpID0+IHtcblx0XHRpZiAoIXNhbmVMaW5rQ2hlY2sobCkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAoIXBnLndpa2kud2lraW1lZGlhKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgdU4gPSBsLmFydGljbGUudXNlck5hbWUoKTtcblx0XHRjb25zdCB0b29sID0gZ2V0VmFsdWVPZigncG9wdXBFZGl0Q291bnRlclRvb2wnKTtcblx0XHRsZXQgdXJsO1xuXHRcdGNvbnN0IGRlZmF1bHRUb29sVXJsID0gJy8vdG9vbHMud21mbGFicy5vcmcvc3VwZXJjb3VudC9pbmRleC5waHA/dXNlcj0kMSZwcm9qZWN0PSQyLiQzJztcblx0XHRzd2l0Y2ggKHRvb2wpIHtcblx0XHRcdGNhc2UgJ2N1c3RvbSc6XG5cdFx0XHRcdHVybCA9IHNpbXBsZVByaW50ZihnZXRWYWx1ZU9mKCdwb3B1cEVkaXRDb3VudGVyVXJsJyksIFtlbmNvZGVVUklDb21wb25lbnQodU4pLCB0b29sRGJOYW1lKCldKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdGNvbnN0IHRoZVdpa2kgPSBwZy53aWtpLmhvc3RuYW1lLnNwbGl0KCcuJyk7XG5cdFx0XHRcdHVybCA9IHNpbXBsZVByaW50ZihkZWZhdWx0VG9vbFVybCwgW2VuY29kZVVSSUNvbXBvbmVudCh1TiksIHRoZVdpa2lbMF0sIHRoZVdpa2lbMV1dKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGdlbmVyYWxOYXZMaW5rKHtcblx0XHRcdHVybCxcblx0XHRcdHRpdGxlOiB0cHJpbnRmKCdlZGl0Q291bnRlckxpbmtIaW50JywgW3VOXSksXG5cdFx0XHRuZXdXaW46IGwubmV3V2luLFxuXHRcdFx0dGV4dDogbC50ZXh0LFxuXHRcdFx0bm9Qb3B1cDogMSxcblx0XHR9KTtcblx0fTtcblx0Y29uc3QgZWRpdG9yTGlzdExpbmsgPSAobCkgPT4ge1xuXHRcdGlmICghc2FuZUxpbmtDaGVjayhsKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IGFydGljbGUgPSBsLmFydGljbGUuYXJ0aWNsZUZyb21UYWxrUGFnZSgpIHx8IGwuYXJ0aWNsZTtcblx0XHRjb25zdCB1cmwgPSBgaHR0cHM6Ly94dG9vbHMud21mbGFicy5vcmcvYXJ0aWNsZWluZm8vJHtlbmNvZGVVUkkoXG5cdFx0XHRwZy53aWtpLmhvc3RuYW1lXG5cdFx0KX0vJHthcnRpY2xlLnVybFN0cmluZygpfT91c2VsYW5nPSR7bXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKX1gO1xuXHRcdHJldHVybiBnZW5lcmFsTmF2TGluayh7XG5cdFx0XHR1cmwsXG5cdFx0XHR0aXRsZTogdHByaW50ZignZWRpdG9yTGlzdEhpbnQnLCBbYXJ0aWNsZV0pLFxuXHRcdFx0bmV3V2luOiBsLm5ld1dpbixcblx0XHRcdHRleHQ6IGwudGV4dCxcblx0XHRcdG5vUG9wdXA6IDEsXG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IGdlbmVyYWxOYXZMaW5rID0gKGwpID0+IHtcblx0XHRsLmNsYXNzTmFtZSA9IGwuY2xhc3NOYW1lID09PSBudWxsID8gJ3BvcHVwTmF2TGluaycgOiBsLmNsYXNzTmFtZTtcblx0XHRyZXR1cm4gZ2VuZXJhbExpbmsobCk7XG5cdH07XG5cdC8vIG1hZ2ljIGhpc3RvcnkgbGlua3Ncblx0Ly9cblx0Y29uc3QgZ2V0SGlzdG9yeUluZm8gPSAod2lraXBhZ2UsIHdoYXROZXh0KSA9PiB7XG5cdFx0bG9nKCdnZXRIaXN0b3J5SW5mbycpO1xuXHRcdGdldEhpc3RvcnkoXG5cdFx0XHR3aWtpcGFnZSxcblx0XHRcdHdoYXROZXh0XG5cdFx0XHRcdD8gKGQpID0+IHtcblx0XHRcdFx0XHRcdHdoYXROZXh0KHByb2Nlc3NIaXN0b3J5KGQpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDogcHJvY2Vzc0hpc3Rvcnlcblx0XHQpO1xuXHR9O1xuXHQvLyBGSVhNRSBlbGltaW5hdGUgcGcuaWROdW1iZXIgLi4uIGhvdz8gOi0oXG5cdGNvbnN0IGdldEhpc3RvcnkgPSAod2lraXBhZ2UsIG9uQ29tcGxldGUpID0+IHtcblx0XHRsb2coJ2dldEhpc3RvcnknKTtcblx0XHRjb25zdCB1cmwgPSBgJHtwZy53aWtpLmFwaXdpa2liYXNlfT9mb3JtYXQ9anNvbiZmb3JtYXR2ZXJzaW9uPTImYWN0aW9uPXF1ZXJ5JnByb3A9cmV2aXNpb25zJnRpdGxlcz0ke25ldyBUaXRsZShcblx0XHRcdHdpa2lwYWdlXG5cdFx0KS51cmxTdHJpbmcoKX0mcnZsaW1pdD0ke2dldFZhbHVlT2YoJ3BvcHVwSGlzdG9yeUxpbWl0Jyl9YDtcblx0XHRsb2coYGdldEhpc3Rvcnk6IHVybD0ke3VybH1gKTtcblx0XHRyZXR1cm4gc3RhcnREb3dubG9hZCh1cmwsIGAke3BnLmlkTnVtYmVyfWhpc3RvcnlgLCBvbkNvbXBsZXRlKTtcblx0fTtcblx0Y29uc3QgcHJvY2Vzc0hpc3RvcnkgPSAoZG93bmxvYWQpID0+IHtcblx0XHRjb25zdCBqc29iaiA9IGdldEpzT2JqKGRvd25sb2FkLmRhdGEpO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB7cmV2aXNpb25zfSA9IGFueUNoaWxkKGpzb2JqLnF1ZXJ5LnBhZ2VzKTtcblx0XHRcdGNvbnN0IGVkaXRzID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IHJldmlzaW9uIG9mIHJldmlzaW9ucykge1xuXHRcdFx0XHRlZGl0cy5wdXNoKHtcblx0XHRcdFx0XHRvbGRpZDogcmV2aXNpb24ucmV2aWQsXG5cdFx0XHRcdFx0ZWRpdG9yOiByZXZpc2lvbi51c2VyLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGxvZyhgcHJvY2Vzc2VkICR7ZWRpdHMubGVuZ3RofSBlZGl0c2ApO1xuXHRcdFx0cmV0dXJuIGZpbmlzaFByb2Nlc3NIaXN0b3J5KGVkaXRzLCBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9nKCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aXRoIEpTT04gYnVzaW5lc3MnKTtcblx0XHRcdHJldHVybiBmaW5pc2hQcm9jZXNzSGlzdG9yeShbXSk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBmaW5pc2hQcm9jZXNzSGlzdG9yeSA9IChlZGl0cywgdXNlck5hbWUpID0+IHtcblx0XHRjb25zdCBoaXN0SW5mbyA9IHt9O1xuXHRcdGhpc3RJbmZvLmVkaXRzID0gZWRpdHM7XG5cdFx0aGlzdEluZm8udXNlck5hbWUgPSB1c2VyTmFtZTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZiAoaGlzdEluZm8ubXlMYXN0RWRpdCA9PT0gdW5kZWZpbmVkICYmIHVzZXJOYW1lICYmIGVkaXRzW2ldLmVkaXRvciA9PT0gdXNlck5hbWUpIHtcblx0XHRcdFx0aGlzdEluZm8ubXlMYXN0RWRpdCA9IHtcblx0XHRcdFx0XHRpbmRleDogaSxcblx0XHRcdFx0XHRvbGRpZDogZWRpdHNbaV0ub2xkaWQsXG5cdFx0XHRcdFx0cHJldmlkOiBpID09PSAwID8gbnVsbCA6IGVkaXRzW2kgLSAxXS5vbGRpZCxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChoaXN0SW5mby5maXJzdE5ld0VkaXRvciA9PT0gdW5kZWZpbmVkICYmIGVkaXRzW2ldLmVkaXRvciAhPT0gZWRpdHNbMF0uZWRpdG9yKSB7XG5cdFx0XHRcdGhpc3RJbmZvLmZpcnN0TmV3RWRpdG9yID0ge1xuXHRcdFx0XHRcdGluZGV4OiBpLFxuXHRcdFx0XHRcdG9sZGlkOiBlZGl0c1tpXS5vbGRpZCxcblx0XHRcdFx0XHRwcmV2aWQ6IGkgPT09IDAgPyBudWxsIDogZWRpdHNbaSAtIDFdLm9sZGlkLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBwZy5taXNjLmhpc3RvcnlJbmZvPWhpc3RJbmZvO1xuXHRcdHJldHVybiBoaXN0SW5mbztcblx0fTtcblx0Ly8gRU5ERklMRTogbGlua3MuanNcblx0Ly8gU1RBUlRGSUxFOiBvcHRpb25zLmpzXG5cdC8vIG9wdGlvbnNcblx0Ly8gY2hlY2sgZm9yIGV4aXN0aW5nIHZhbHVlLCBlbHNlIHVzZSBkZWZhdWx0XG5cdGNvbnN0IGRlZmF1bHRpemUgPSAoeCkgPT4ge1xuXHRcdGlmIChwZy5vcHRpb25beF0gPT09IG51bGwgfHwgcGcub3B0aW9uW3hdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHBnLm9wdGlvblt4XSA9IHdpbmRvd1t4XSA9PT0gdW5kZWZpbmVkID8gcGcub3B0aW9uRGVmYXVsdFt4XSA6IHdpbmRvd1t4XTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG5ld09wdGlvbiA9ICh4LCBkZWYpID0+IHtcblx0XHRwZy5vcHRpb25EZWZhdWx0W3hdID0gZGVmO1xuXHR9O1xuXHRjb25zdCBzZXREZWZhdWx0ID0gKHgsIGRlZikgPT4ge1xuXHRcdHJldHVybiBuZXdPcHRpb24oeCwgZGVmKTtcblx0fTtcblx0Y29uc3QgZ2V0VmFsdWVPZiA9ICh2YXJOYW1lKSA9PiB7XG5cdFx0ZGVmYXVsdGl6ZSh2YXJOYW1lKTtcblx0XHRyZXR1cm4gcGcub3B0aW9uW3Zhck5hbWVdO1xuXHR9O1xuXHRjb25zdCBzZXRPcHRpb25zID0gKCkgPT4ge1xuXHRcdC8vIHVzZXItc2V0dGFibGUgcGFyYW1ldGVycyBhbmQgZGVmYXVsdHNcblx0XHRsZXQgdXNlcklzU3lzb3AgPSBmYWxzZTtcblx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJykpIHtcblx0XHRcdGZvciAobGV0IGcgPSAwOyBnIDwgbXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJykubGVuZ3RoOyArK2cpIHtcblx0XHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpW2ddID09PSAnc3lzb3AnKSB7XG5cdFx0XHRcdFx0dXNlcklzU3lzb3AgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKVtnXSA9PT0gJ3N0ZXdhcmQnKSB7XG5cdFx0XHRcdFx0dXNlcklzU3lzb3AgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIEJhc2ljIG9wdGlvbnNcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGVsYXknLCAwLjUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBIaWRlRGVsYXknLCAwLjUpO1xuXHRcdG5ld09wdGlvbignc2ltcGxlUG9wdXBzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBTdHJ1Y3R1cmUnLCAnc2hvcnRtZW51cycpOyAvLyBzZWUgbGF0ZXIgLSBkZWZhdWx0IGZvciBwb3B1cFN0cnVjdHVyZSBpcyAnb3JpZ2luYWwnIGlmIHNpbXBsZVBvcHVwcyBpcyB0cnVlXG5cdFx0bmV3T3B0aW9uKCdwb3B1cEFjdGlvbnNNZW51JywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFNldHVwTWVudScsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBBZG1pbkxpbmtzJywgdXNlcklzU3lzb3ApO1xuXHRcdG5ld09wdGlvbigncG9wdXBTaG9ydGN1dEtleXMnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEhpc3RvcmljYWxMaW5rcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBPbmx5QXJ0aWNsZUxpbmtzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdyZW1vdmVUaXRsZXMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTWF4V2lkdGgnLCAzNTApO1xuXHRcdG5ld09wdGlvbigncG9wdXBTaW1wbGlmeU1haW5MaW5rJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEFwcGVuZFJlZGlyTmF2TGlua3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwVG9jTGlua3MnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFN1YnBvcHVwcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEcmFnSGFuZGxlJywgZmFsc2UgLyogJ3BvcHVwVG9wTGlua3MnICovKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTGF6eVByZXZpZXdzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cExhenlEb3dubG9hZHMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwQWxsRGFic1N0dWJzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEZWJ1Z2dpbmcnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEFjdGl2ZU5hdmxpbmtzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE1vZGlmaWVyJywgZmFsc2UpOyAvLyBjdHJsLCBzaGlmdCwgYWx0IG9yIG1ldGFcblx0XHRuZXdPcHRpb24oJ3BvcHVwTW9kaWZpZXJBY3Rpb24nLCAnZW5hYmxlJyk7IC8vIG9yICdkaXNhYmxlJ1xuXHRcdG5ld09wdGlvbigncG9wdXBEcmFnZ2FibGUnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmV2aWV3JywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBMb2NhbGUnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERhdGVUaW1lRm9ybWF0dGVyT3B0aW9ucycsIHtcblx0XHRcdHllYXI6ICdudW1lcmljJyxcblx0XHRcdG1vbnRoOiAnbG9uZycsXG5cdFx0XHRkYXk6ICdudW1lcmljJyxcblx0XHRcdGhvdXIxMjogZmFsc2UsXG5cdFx0XHRob3VyOiAnMi1kaWdpdCcsXG5cdFx0XHRtaW51dGU6ICcyLWRpZ2l0Jyxcblx0XHRcdHNlY29uZDogJzItZGlnaXQnLFxuXHRcdH0pO1xuXHRcdG5ld09wdGlvbigncG9wdXBEYXRlRm9ybWF0dGVyT3B0aW9ucycsIHtcblx0XHRcdHllYXI6ICdudW1lcmljJyxcblx0XHRcdG1vbnRoOiAnbG9uZycsXG5cdFx0XHRkYXk6ICdudW1lcmljJyxcblx0XHR9KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwVGltZUZvcm1hdHRlck9wdGlvbnMnLCB7XG5cdFx0XHRob3VyMTI6IGZhbHNlLFxuXHRcdFx0aG91cjogJzItZGlnaXQnLFxuXHRcdFx0bWludXRlOiAnMi1kaWdpdCcsXG5cdFx0XHRzZWNvbmQ6ICcyLWRpZ2l0Jyxcblx0XHR9KTtcblx0XHQvLyBpbWFnZXNcblx0XHRuZXdPcHRpb24oJ3BvcHVwSW1hZ2VzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdpbWFnZVBvcHVwc0ZvckltYWdlcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBOZXZlckdldFRodW1icycsIGZhbHNlKTtcblx0XHQvLyBuZXdPcHRpb24oJ3BvcHVwSW1hZ2VzVG9nZ2xlU2l6ZScsICAgICAgIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBUaHVtYkFjdGlvbicsICdpbWFnZXBhZ2UnKTsgLy8gJ3NpemV0b2dnbGUnKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSW1hZ2VTaXplJywgNjApO1xuXHRcdG5ld09wdGlvbigncG9wdXBJbWFnZVNpemVMYXJnZScsIDIwMCk7XG5cdFx0Ly8gcmVkaXJzLCBkYWJzLCByZXZlcnNpb25cblx0XHRuZXdPcHRpb24oJ3BvcHVwRml4UmVkaXJzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZWRpckF1dG9DbGljaycsICd3cERpZmYnKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRml4RGFicycsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGFic0F1dG9DbGljaycsICd3cERpZmYnKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmV2ZXJ0U3VtbWFyeVByb21wdCcsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTWlub3JSZXZlcnRzJywgZmFsc2UpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSZWRsaW5rUmVtb3ZhbCcsIGZhbHNlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmVkbGlua0F1dG9DbGljaycsICd3cERpZmYnKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwV2F0Y2hEaXNhbWJpZ2dlZFBhZ2VzJywgbnVsbCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFdhdGNoUmVkaXJyZWRQYWdlcycsIG51bGwpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEYWJXaWt0aW9uYXJ5JywgJ2xhc3QnKTtcblx0XHQvLyBuYXZsaW5rc1xuXHRcdG5ld09wdGlvbigncG9wdXBOYXZMaW5rcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBOYXZMaW5rU2VwYXJhdG9yJywgJyAmc2RvdDsgJyk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cExhc3RFZGl0TGluaycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBFZGl0Q291bnRlclRvb2wnLCAnc3VwZXJjb3VudCcpO1xuXHRcdG5ld09wdGlvbigncG9wdXBFZGl0Q291bnRlclVybCcsICcnKTtcblx0XHQvLyBwcmV2aWV3cyBldGNcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld3MnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwU3VtbWFyeURhdGEnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwTWF4UHJldmlld1NlbnRlbmNlcycsIDUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBNYXhQcmV2aWV3Q2hhcmFjdGVycycsIDYwMCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cExhc3RNb2RpZmllZCcsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3S2lsbFRlbXBsYXRlcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBQcmV2aWV3UmF3VGVtcGxhdGVzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdGaXJzdFBhck9ubHknLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld0N1dEhlYWRpbmdzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdCdXR0b24nLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdCdXR0b25FdmVudCcsICdjbGljaycpO1xuXHRcdC8vIGRpZmZzXG5cdFx0bmV3T3B0aW9uKCdwb3B1cFByZXZpZXdEaWZmcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBEaWZmTWF4TGluZXMnLCAxMDApO1xuXHRcdG5ld09wdGlvbigncG9wdXBEaWZmQ29udGV4dExpbmVzJywgMik7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERpZmZDb250ZXh0Q2hhcmFjdGVycycsIDQwKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRGlmZkRhdGVzJywgdHJ1ZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cERpZmZEYXRlUHJpbnRlcicsICd0b0xvY2FsZVN0cmluZycpOyAvLyBubyBsb25nZXIgaW4gdXNlXG5cblx0XHQvLyBlZGl0IHN1bW1hcmllcy4gR29kLCB0aGVzZSBhcmUgdWdseS5cblx0XHRuZXdPcHRpb24oJ3BvcHVwUmV2aWV3ZWRTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFJldmlld2VkU3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwRml4RGFic1N1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwRml4RGFic1N1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEV4dGVuZGVkUmV2ZXJ0U3VtbWFyeScsIHBvcHVwU3RyaW5nKCdkZWZhdWx0cG9wdXBFeHRlbmRlZFJldmVydFN1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJldmVydFN1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwUmV2ZXJ0U3VtbWFyeScpKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBRdWVyaWVkUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnknLCBwb3B1cFN0cmluZygnZGVmYXVsdHBvcHVwUXVlcmllZFJldmVydFRvUHJldmlvdXNTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBGaXhSZWRpcnNTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cEZpeFJlZGlyc1N1bW1hcnknKSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJlZGxpbmtTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFJlZGxpbmtTdW1tYXJ5JykpO1xuXHRcdG5ld09wdGlvbigncG9wdXBSbURhYkxpbmtTdW1tYXJ5JywgcG9wdXBTdHJpbmcoJ2RlZmF1bHRwb3B1cFJtRGFiTGlua1N1bW1hcnknKSk7XG5cdFx0Ly8gbWlzY1xuXHRcdG5ld09wdGlvbigncG9wdXBIaXN0b3J5TGltaXQnLCA1MCk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cEZpbHRlcnMnLCBbXG5cdFx0XHRwb3B1cEZpbHRlclN0dWJEZXRlY3QsXG5cdFx0XHRwb3B1cEZpbHRlckRpc2FtYmlnRGV0ZWN0LFxuXHRcdFx0cG9wdXBGaWx0ZXJQYWdlU2l6ZSxcblx0XHRcdHBvcHVwRmlsdGVyQ291bnRMaW5rcyxcblx0XHRcdHBvcHVwRmlsdGVyQ291bnRJbWFnZXMsXG5cdFx0XHRwb3B1cEZpbHRlckNvdW50Q2F0ZWdvcmllcyxcblx0XHRcdHBvcHVwRmlsdGVyTGFzdE1vZGlmaWVkLFxuXHRcdF0pO1xuXHRcdG5ld09wdGlvbignZXh0cmFQb3B1cEZpbHRlcnMnLCBbXSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cE9uRWRpdFNlbGVjdGlvbicsICdjdXJzb3InKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwUHJldmlld0hpc3RvcnknLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSW1hZ2VMaW5rcycsIHRydWUpO1xuXHRcdG5ld09wdGlvbigncG9wdXBDYXRlZ29yeU1lbWJlcnMnLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwVXNlckluZm8nLCB0cnVlKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSGlzdG9yeVByZXZpZXdMaW1pdCcsIDI1KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwQ29udHJpYnNQcmV2aWV3TGltaXQnLCAyNSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cFJldkRlbFVybCcsICcvL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XaWtpcGVkaWE6UmV2aXNpb25fZGVsZXRpb24nKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwU2hvd0dlbmRlcicsIHRydWUpO1xuXHRcdC8vIG5ldyB3aW5kb3dzXG5cdFx0bmV3T3B0aW9uKCdwb3B1cE5ld1dpbmRvd3MnLCBmYWxzZSk7XG5cdFx0bmV3T3B0aW9uKCdwb3B1cExpbmtzTmV3V2luZG93Jywge2xhc3RDb250cmliOiB0cnVlLCBzaW5jZU1lOiB0cnVlfSk7XG5cdFx0Ly8gcmVnZXhwc1xuXHRcdG5ld09wdGlvbihcblx0XHRcdCdwb3B1cERhYlJlZ2V4cCcsXG5cdFx0XHRTdHJpbmcucmF3YFxce1xce1xccyooZChhYnxpc2FtYihpZyh1YXRpb24pPyk/KXwoKChnZW98aG58cm9hZD98c2Nob29sfG51bWJlcilkaXMpfFsyMzRdW2xjXVthY3ddfChyb2FkfHNoaXApaW5kZXgpKVxccyooXFx8W159XSopP1xcfVxcfXxpcyBhIC4qZGlzYW1iaWd1YXRpb24uKnBhZ2VgXG5cdFx0KTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwQW5jaG9yUmVnZXhwJywgJ2FuY2hvcnM/Jyk7IC8vIGhvdyB0byBpZGVudGlmeSBhbiBhbmNob3JzIHRlbXBsYXRlXG5cdFx0bmV3T3B0aW9uKCdwb3B1cFN0dWJSZWdleHAnLCAnKHNlY3QpP3N0dWJbfV1bfV18VGhpcyAuKi1yZWxhdGVkIGFydGljbGUgaXMgYSAuKnN0dWInKTtcblx0XHRuZXdPcHRpb24oJ3BvcHVwSW1hZ2VWYXJzUmVnZXhwJywgJ2ltYWdlfGltYWdlXyg/OmZpbGV8c2t5bGluZXxuYW1lfGZsYWd8c2VhbCl8Y292ZXJ8YmFkZ2V8bG9nbycpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBvcHRpb25zLmpzXG5cdC8vIFNUQVJURklMRTogc3RyaW5ncy5qc1xuXHQvLyBUcmFuc2xhdGFibGUgc3RyaW5nc1xuXHQvL1xuXHQvLyBTZWUgaW5zdHJ1Y3Rpb25zIGF0XG5cdC8vIHtAbGluayBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHMvVHJhbnNsYXRpb259XG5cdHBnLnN0cmluZyA9IHtcblx0XHQvLyBzdW1tYXJ5IGRhdGEsIHNlYXJjaGluZyBldGMuXG5cdFx0YXJ0aWNsZTogJ2FydGljbGUnLFxuXHRcdGNhdGVnb3J5OiAnY2F0ZWdvcnknLFxuXHRcdGNhdGVnb3JpZXM6ICdjYXRlZ29yaWVzJyxcblx0XHRpbWFnZTogJ2ltYWdlJyxcblx0XHRpbWFnZXM6ICdpbWFnZXMnLFxuXHRcdHN0dWI6ICdzdHViJyxcblx0XHQnc2VjdGlvbiBzdHViJzogJ3NlY3Rpb24gc3R1YicsXG5cdFx0J0VtcHR5IHBhZ2UnOiAnRW1wdHkgcGFnZScsXG5cdFx0a0I6ICdrQicsXG5cdFx0Ynl0ZXM6ICdieXRlcycsXG5cdFx0ZGF5OiAnZGF5Jyxcblx0XHRkYXlzOiAnZGF5cycsXG5cdFx0aG91cjogJ2hvdXInLFxuXHRcdGhvdXJzOiAnaG91cnMnLFxuXHRcdG1pbnV0ZTogJ21pbnV0ZScsXG5cdFx0bWludXRlczogJ21pbnV0ZXMnLFxuXHRcdHNlY29uZDogJ3NlY29uZCcsXG5cdFx0c2Vjb25kczogJ3NlY29uZHMnLFxuXHRcdHdlZWs6ICd3ZWVrJyxcblx0XHR3ZWVrczogJ3dlZWtzJyxcblx0XHRzZWFyY2g6ICdzZWFyY2gnLFxuXHRcdFNlYXJjaEhpbnQ6ICdGaW5kIEVuZ2xpc2ggV2lraXBlZGlhIGFydGljbGVzIGNvbnRhaW5pbmcgJXMnLFxuXHRcdHdlYjogJ3dlYicsXG5cdFx0Z2xvYmFsOiAnZ2xvYmFsJyxcblx0XHQvLyBhcnRpY2xlLXJlbGF0ZWQgYWN0aW9ucyBhbmQgaW5mb1xuXHRcdC8vIChzb21lIGFjdGlvbnMgYWxzbyBhcHBseSB0byB1c2VyIHBhZ2VzKVxuXHRcdGFjdGlvbnM6ICdhY3Rpb25zJyxcblx0XHRwb3B1cHNNZW51OiAncG9wdXBzJyxcblx0XHR0b2dnbGVQcmV2aWV3c0hpbnQ6ICdUb2dnbGUgcHJldmlldyBnZW5lcmF0aW9uIGluIHBvcHVwcyBvbiB0aGlzIHBhZ2UnLFxuXHRcdCdlbmFibGUgcHJldmlld3MnOiAnZW5hYmxlIHByZXZpZXdzJyxcblx0XHQnZGlzYWJsZSBwcmV2aWV3cyc6ICdkaXNhYmxlIHByZXZpZXdzJyxcblx0XHQndG9nZ2xlIHByZXZpZXdzJzogJ3RvZ2dsZSBwcmV2aWV3cycsXG5cdFx0J3Nob3cgcHJldmlldyc6ICdzaG93IHByZXZpZXcnLFxuXHRcdHJlc2V0OiAncmVzZXQnLFxuXHRcdCdtb3JlLi4uJzogJ21vcmUuLi4nLFxuXHRcdGRpc2FibGU6ICdkaXNhYmxlIHBvcHVwcycsXG5cdFx0ZGlzYWJsZVBvcHVwc0hpbnQ6ICdEaXNhYmxlIHBvcHVwcyBvbiB0aGlzIHBhZ2UuIFJlbG9hZCBwYWdlIHRvIHJlLWVuYWJsZS4nLFxuXHRcdGhpc3RvcnlmZWVkSGludDogJ1JTUyBmZWVkIG9mIHJlY2VudCBjaGFuZ2VzIHRvIHRoaXMgcGFnZScsXG5cdFx0cHVyZ2VQb3B1cHNIaW50OiAnUmVzZXQgcG9wdXBzLCBjbGVhcmluZyBhbGwgY2FjaGVkIHBvcHVwIGRhdGEuJyxcblx0XHRQb3B1cHNIaW50OiAnUmVzZXQgcG9wdXBzLCBjbGVhcmluZyBhbGwgY2FjaGVkIHBvcHVwIGRhdGEuJyxcblx0XHRzcGFjZWJhcjogJ3NwYWNlJyxcblx0XHR2aWV3OiAndmlldycsXG5cdFx0J3ZpZXcgYXJ0aWNsZSc6ICd2aWV3IGFydGljbGUnLFxuXHRcdHZpZXdIaW50OiAnR28gdG8gJXMnLFxuXHRcdHRhbGs6ICd0YWxrJyxcblx0XHQndGFsayBwYWdlJzogJ3RhbGsgcGFnZScsXG5cdFx0J3RoaXMmbmJzcDtyZXZpc2lvbic6ICd0aGlzJm5ic3A7cmV2aXNpb24nLFxuXHRcdCdyZXZpc2lvbiAlcyBvZiAlcyc6ICdyZXZpc2lvbiAlcyBvZiAlcycsXG5cdFx0J1JldmlzaW9uICVzIG9mICVzJzogJ1JldmlzaW9uICVzIG9mICVzJyxcblx0XHQndGhlIHJldmlzaW9uIHByaW9yIHRvIHJldmlzaW9uICVzIG9mICVzJzogJ3RoZSByZXZpc2lvbiBwcmlvciB0byByZXZpc2lvbiAlcyBvZiAlcycsXG5cdFx0J1RvZ2dsZSBpbWFnZSBzaXplJzogJ0NsaWNrIHRvIHRvZ2dsZSBpbWFnZSBzaXplJyxcblx0XHRkZWw6ICdkZWwnLFxuXHRcdGRlbGV0ZTogJ2RlbGV0ZScsXG5cdFx0ZGVsZXRlSGludDogJ0RlbGV0ZSAlcycsXG5cdFx0dW5kZWxldGVTaG9ydDogJ3VuJyxcblx0XHRVbmRlbGV0ZUhpbnQ6ICdTaG93IHRoZSBkZWxldGlvbiBoaXN0b3J5IGZvciAlcycsXG5cdFx0cHJvdGVjdDogJ3Byb3RlY3QnLFxuXHRcdHByb3RlY3RIaW50OiAnUmVzdHJpY3QgZWRpdGluZyByaWdodHMgdG8gJXMnLFxuXHRcdHVucHJvdGVjdFNob3J0OiAndW4nLFxuXHRcdHVucHJvdGVjdEhpbnQ6ICdBbGxvdyAlcyB0byBiZSBlZGl0ZWQgYnkgYW55b25lIGFnYWluJyxcblx0XHQnc2VuZCB0aGFua3MnOiAnc2VuZCB0aGFua3MnLFxuXHRcdFRoYW5rc0hpbnQ6ICdTZW5kIGEgdGhhbmsgeW91IG5vdGlmaWNhdGlvbiB0byB0aGlzIHVzZXInLFxuXHRcdG1vdmU6ICdtb3ZlJyxcblx0XHQnbW92ZSBwYWdlJzogJ21vdmUgcGFnZScsXG5cdFx0TW92ZXBhZ2VIaW50OiAnQ2hhbmdlIHRoZSB0aXRsZSBvZiAlcycsXG5cdFx0ZWRpdDogJ2VkaXQnLFxuXHRcdCdlZGl0IGFydGljbGUnOiAnZWRpdCBhcnRpY2xlJyxcblx0XHRlZGl0SGludDogJ0NoYW5nZSB0aGUgY29udGVudCBvZiAlcycsXG5cdFx0J2VkaXQgdGFsayc6ICdlZGl0IHRhbGsnLFxuXHRcdG5ldzogJ25ldycsXG5cdFx0J25ldyB0b3BpYyc6ICduZXcgdG9waWMnLFxuXHRcdG5ld1NlY3Rpb25IaW50OiAnU3RhcnQgYSBuZXcgc2VjdGlvbiBvbiAlcycsXG5cdFx0J251bGwgZWRpdCc6ICdudWxsIGVkaXQnLFxuXHRcdG51bGxFZGl0SGludDogJ1N1Ym1pdCBhbiBlZGl0IHRvICVzLCBtYWtpbmcgbm8gY2hhbmdlcyAnLFxuXHRcdGhpc3Q6ICdoaXN0Jyxcblx0XHRoaXN0b3J5OiAnaGlzdG9yeScsXG5cdFx0aGlzdG9yeUhpbnQ6ICdMaXN0IHRoZSBjaGFuZ2VzIG1hZGUgdG8gJXMnLFxuXHRcdGxhc3Q6ICdwcmV2Jyxcblx0XHRsYXN0RWRpdDogJ2xhc3RFZGl0Jyxcblx0XHQnbWFyayBwYXRyb2xsZWQnOiAnbWFyayBwYXRyb2xsZWQnLFxuXHRcdG1hcmtwYXRyb2xsZWRIaW50OiAnTWFyayB0aGlzIGVkaXQgYXMgcGF0cm9sbGVkJyxcblx0XHQnQ291bGQgbm90IG1hcmtlZCB0aGlzIGVkaXQgYXMgcGF0cm9sbGVkJzogJ0NvdWxkIG5vdCBtYXJrZWQgdGhpcyBlZGl0IGFzIHBhdHJvbGxlZCcsXG5cdFx0J3Nob3cgbGFzdCBlZGl0JzogJ21vc3QgcmVjZW50IGVkaXQnLFxuXHRcdCdTaG93IHRoZSBsYXN0IGVkaXQnOiAnU2hvdyB0aGUgZWZmZWN0cyBvZiB0aGUgbW9zdCByZWNlbnQgY2hhbmdlJyxcblx0XHRsYXN0Q29udHJpYjogJ2xhc3RDb250cmliJyxcblx0XHQnbGFzdCBzZXQgb2YgZWRpdHMnOiAnbGF0ZXN0IGVkaXRzJyxcblx0XHRsYXN0Q29udHJpYkhpbnQ6ICdTaG93IHRoZSBuZXQgZWZmZWN0IG9mIGNoYW5nZXMgbWFkZSBieSB0aGUgbGFzdCBlZGl0b3InLFxuXHRcdGN1cjogJ2N1cicsXG5cdFx0ZGlmZkN1cjogJ2RpZmZDdXInLFxuXHRcdCdTaG93IGNoYW5nZXMgc2luY2UgcmV2aXNpb24gJXMnOiAnU2hvdyBjaGFuZ2VzIHNpbmNlIHJldmlzaW9uICVzJyxcblx0XHQnJXMgb2xkJzogJyVzIG9sZCcsXG5cdFx0b2xkRWRpdDogJ29sZEVkaXQnLFxuXHRcdHB1cmdlOiAncHVyZ2UnLFxuXHRcdHB1cmdlSGludDogJ0RlbWFuZCBhIGZyZXNoIGNvcHkgb2YgJXMnLFxuXHRcdHJhdzogJ3NvdXJjZScsXG5cdFx0cmF3SGludDogJ0Rvd25sb2FkIHRoZSBzb3VyY2Ugb2YgJXMnLFxuXHRcdHJlbmRlcjogJ3NpbXBsZScsXG5cdFx0cmVuZGVySGludDogJ1Nob3cgYSBwbGFpbiBIVE1MIHZlcnNpb24gb2YgJXMnLFxuXHRcdCdTaG93IHRoZSBlZGl0IG1hZGUgdG8gZ2V0IHJldmlzaW9uJzogJ1Nob3cgdGhlIGVkaXQgbWFkZSB0byBnZXQgcmV2aXNpb24nLFxuXHRcdHNpbmNlTWU6ICdzaW5jZU1lJyxcblx0XHQnY2hhbmdlcyBzaW5jZSBtaW5lJzogJ2RpZmYgbXkgZWRpdCcsXG5cdFx0c2luY2VNZUhpbnQ6ICdTaG93IGNoYW5nZXMgc2luY2UgbXkgbGFzdCBlZGl0Jyxcblx0XHRcIkNvdWxkbid0IGZpbmQgYW4gZWRpdCBieSAlc1xcbmluIHRoZSBsYXN0ICVzIGVkaXRzIHRvXFxuJXNcIjpcblx0XHRcdFwiQ291bGRuJ3QgZmluZCBhbiBlZGl0IGJ5ICVzXFxuaW4gdGhlIGxhc3QgJXMgZWRpdHMgdG9cXG4lc1wiLFxuXHRcdGVkczogJ2VkcycsXG5cdFx0ZWRpdG9yczogJ2VkaXRvcnMnLFxuXHRcdGVkaXRvckxpc3RIaW50OiAnTGlzdCB0aGUgdXNlcnMgd2hvIGhhdmUgZWRpdGVkICVzJyxcblx0XHRyZWxhdGVkOiAncmVsYXRlZCcsXG5cdFx0cmVsYXRlZENoYW5nZXM6ICdyZWxhdGVkQ2hhbmdlcycsXG5cdFx0J3JlbGF0ZWQgY2hhbmdlcyc6ICdyZWxhdGVkIGNoYW5nZXMnLFxuXHRcdFJlY2VudGNoYW5nZXNsaW5rZWRIaW50OiAnU2hvdyBjaGFuZ2VzIGluIGFydGljbGVzIHJlbGF0ZWQgdG8gJXMnLFxuXHRcdGVkaXRPbGQ6ICdlZGl0T2xkJyxcblx0XHRydjogJ3J2Jyxcblx0XHRyZXZlcnQ6ICdyZXZlcnQnLFxuXHRcdHJldmVydEhpbnQ6ICdSZXZlcnQgdG8gJXMnLFxuXHRcdGRlZmF1bHRwb3B1cFJldmlld2VkU3VtbWFyeTpcblx0XHRcdCdBY2NlcHRlZCBieSByZXZpZXdpbmcgdGhlIFtbU3BlY2lhbDpkaWZmLyVzLyVzfGRpZmZlcmVuY2VdXSBiZXR3ZWVuIHRoaXMgdmVyc2lvbiBhbmQgcHJldmlvdXNseSBhY2NlcHRlZCB2ZXJzaW9uIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cFJlZGxpbmtTdW1tYXJ5OlxuXHRcdFx0J1JlbW92aW5nIGxpbmsgdG8gZW1wdHkgcGFnZSBbWyVzXV0gdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwRml4RGFic1N1bW1hcnk6XG5cdFx0XHQnRGlzYW1iaWd1YXRlIFtbJXNdXSB0byBbWyVzXV0gdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwRml4UmVkaXJzU3VtbWFyeTpcblx0XHRcdCdSZWRpcmVjdCBieXBhc3MgZnJvbSBbWyVzXV0gdG8gW1slc11dIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cEV4dGVuZGVkUmV2ZXJ0U3VtbWFyeTpcblx0XHRcdCdSZXZlcnQgdG8gcmV2aXNpb24gZGF0ZWQgJXMgYnkgJXMsIG9sZGlkICVzIHVzaW5nIFtbOmVud2lraTpXaWtpcGVkaWE6VG9vbHMvTmF2aWdhdGlvbl9wb3B1cHN8cG9wdXBzXV0nLFxuXHRcdGRlZmF1bHRwb3B1cFJldmVydFRvUHJldmlvdXNTdW1tYXJ5OlxuXHRcdFx0J1JldmVydCB0byB0aGUgcmV2aXNpb24gcHJpb3IgdG8gcmV2aXNpb24gJXMgdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwUmV2ZXJ0U3VtbWFyeTogJ1JldmVydCB0byByZXZpc2lvbiAlcyB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBRdWVyaWVkUmV2ZXJ0VG9QcmV2aW91c1N1bW1hcnk6XG5cdFx0XHQnUmV2ZXJ0IHRvIHRoZSByZXZpc2lvbiBwcmlvciB0byByZXZpc2lvbiAkMSBkYXRlZCAkMiBieSAkMyB1c2luZyBbWzplbndpa2k6V2lraXBlZGlhOlRvb2xzL05hdmlnYXRpb25fcG9wdXBzfHBvcHVwc11dJyxcblx0XHRkZWZhdWx0cG9wdXBRdWVyaWVkUmV2ZXJ0U3VtbWFyeTpcblx0XHRcdCdSZXZlcnQgdG8gcmV2aXNpb24gJDEgZGF0ZWQgJDIgYnkgJDMgdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0ZGVmYXVsdHBvcHVwUm1EYWJMaW5rU3VtbWFyeTpcblx0XHRcdCdSZW1vdmUgbGluayB0byBkYWIgcGFnZSBbWyVzXV0gdXNpbmcgW1s6ZW53aWtpOldpa2lwZWRpYTpUb29scy9OYXZpZ2F0aW9uX3BvcHVwc3xwb3B1cHNdXScsXG5cdFx0UmVkaXJlY3RzOiAnUmVkaXJlY3RzJyxcblx0XHQnIHRvICc6ICcgdG8gJyxcblx0XHQnQnlwYXNzIHJlZGlyZWN0JzogJ0J5cGFzcyByZWRpcmVjdCcsXG5cdFx0J0ZpeCB0aGlzIHJlZGlyZWN0JzogJ0ZpeCB0aGlzIHJlZGlyZWN0Jyxcblx0XHRkaXNhbWJpZzogJ2Rpc2FtYmlnJyxcblx0XHRkaXNhbWJpZ0hpbnQ6ICdEaXNhbWJpZ3VhdGUgdGhpcyBsaW5rIHRvIFtbJXNdXScsXG5cdFx0J0NsaWNrIHRvIGRpc2FtYmlndWF0ZSB0aGlzIGxpbmsgdG86JzogJ0NsaWNrIHRvIGRpc2FtYmlndWF0ZSB0aGlzIGxpbmsgdG86Jyxcblx0XHQncmVtb3ZlIHRoaXMgbGluayc6ICdyZW1vdmUgdGhpcyBsaW5rJyxcblx0XHQncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnOiAncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnLFxuXHRcdCdyZW1vdmUgYWxsIGxpbmtzIHRvIHRoaXMgZGlzYW1iaWcgcGFnZSBmcm9tIHRoaXMgYXJ0aWNsZSc6XG5cdFx0XHQncmVtb3ZlIGFsbCBsaW5rcyB0byB0aGlzIGRpc2FtYmlnIHBhZ2UgZnJvbSB0aGlzIGFydGljbGUnLFxuXHRcdG1haW5saW5rOiAnbWFpbmxpbmsnLFxuXHRcdHdpa2lMaW5rOiAnd2lraUxpbmsnLFxuXHRcdHdpa2lMaW5rczogJ3dpa2lMaW5rcycsXG5cdFx0J2xpbmtzIGhlcmUnOiAnbGlua3MgaGVyZScsXG5cdFx0d2hhdExpbmtzSGVyZTogJ3doYXRMaW5rc0hlcmUnLFxuXHRcdCd3aGF0IGxpbmtzIGhlcmUnOiAnd2hhdCBsaW5rcyBoZXJlJyxcblx0XHRXaGF0bGlua3NoZXJlSGludDogJ0xpc3QgdGhlIHBhZ2VzIHRoYXQgYXJlIGh5cGVybGlua2VkIHRvICVzJyxcblx0XHR1bndhdGNoU2hvcnQ6ICd1bicsXG5cdFx0d2F0Y2hUaGluZ3k6ICd3YXRjaCcsXG5cdFx0d2F0Y2hIaW50OiAnQWRkICVzIHRvIG15IHdhdGNobGlzdCcsXG5cdFx0dW53YXRjaEhpbnQ6ICdSZW1vdmUgJXMgZnJvbSBteSB3YXRjaGxpc3QnLFxuXHRcdCdPbmx5IGZvdW5kIG9uZSBlZGl0b3I6ICVzIG1hZGUgJXMgZWRpdHMnOiAnT25seSBmb3VuZCBvbmUgZWRpdG9yOiAlcyBtYWRlICVzIGVkaXRzJyxcblx0XHQnJXMgc2VlbXMgdG8gYmUgdGhlIGxhc3QgZWRpdG9yIHRvIHRoZSBwYWdlICVzJzogJyVzIHNlZW1zIHRvIGJlIHRoZSBsYXN0IGVkaXRvciB0byB0aGUgcGFnZSAlcycsXG5cdFx0cnNzOiAncnNzJyxcblx0XHQvLyBkaWZmIHByZXZpZXdzXG5cdFx0J0RpZmYgdHJ1bmNhdGVkIGZvciBwZXJmb3JtYW5jZSByZWFzb25zJzogJ0RpZmYgdHJ1bmNhdGVkIGZvciBwZXJmb3JtYW5jZSByZWFzb25zJyxcblx0XHQnT2xkIHJldmlzaW9uJzogJ09sZCByZXZpc2lvbicsXG5cdFx0J05ldyByZXZpc2lvbic6ICdOZXcgcmV2aXNpb24nLFxuXHRcdCdTb21ldGhpbmcgd2VudCB3cm9uZyA6LSgnOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcgOi0oJyxcblx0XHQnRW1wdHkgcmV2aXNpb24sIG1heWJlIG5vbi1leGlzdGVudCc6ICdFbXB0eSByZXZpc2lvbiwgbWF5YmUgbm9uLWV4aXN0ZW50Jyxcblx0XHQnVW5rbm93biBkYXRlJzogJ1Vua25vd24gZGF0ZScsXG5cdFx0Ly8gb3RoZXIgc3BlY2lhbCBwcmV2aWV3c1xuXHRcdCdFbXB0eSBjYXRlZ29yeSc6ICdFbXB0eSBjYXRlZ29yeScsXG5cdFx0J0NhdGVnb3J5IG1lbWJlcnMgKCVzIHNob3duKSc6ICdDYXRlZ29yeSBtZW1iZXJzICglcyBzaG93biknLFxuXHRcdCdObyBpbWFnZSBsaW5rcyBmb3VuZCc6ICdObyBpbWFnZSBsaW5rcyBmb3VuZCcsXG5cdFx0J0ZpbGUgbGlua3MnOiAnRmlsZSBsaW5rcycsXG5cdFx0J05vIGltYWdlIGZvdW5kJzogJ05vIGltYWdlIGZvdW5kJyxcblx0XHQnSW1hZ2UgZnJvbSBDb21tb25zJzogJ0ltYWdlIGZyb20gQ29tbW9ucycsXG5cdFx0J0Rlc2NyaXB0aW9uIHBhZ2UnOiAnRGVzY3JpcHRpb24gcGFnZScsXG5cdFx0J0FsdCB0ZXh0Oic6ICdBbHQgdGV4dDonLFxuXHRcdHJldmRlbDogJ0hpZGRlbiByZXZpc2lvbicsXG5cdFx0Ly8gdXNlci1yZWxhdGVkIGFjdGlvbnMgYW5kIGluZm9cblx0XHR1c2VyOiAndXNlcicsXG5cdFx0J3VzZXImbmJzcDtwYWdlJzogJ3VzZXImbmJzcDtwYWdlJyxcblx0XHQndXNlciB0YWxrJzogJ3VzZXIgdGFsaycsXG5cdFx0J2VkaXQgdXNlciB0YWxrJzogJ2VkaXQgdXNlciB0YWxrJyxcblx0XHQnbGVhdmUgY29tbWVudCc6ICdsZWF2ZSBjb21tZW50Jyxcblx0XHRlbWFpbDogJ2VtYWlsJyxcblx0XHQnZW1haWwgdXNlcic6ICdlbWFpbCB1c2VyJyxcblx0XHRFbWFpbHVzZXJIaW50OiAnU2VuZCBhbiBlbWFpbCB0byAlcycsXG5cdFx0c3BhY2U6ICdzcGFjZScsXG5cdFx0UHJlZml4SW5kZXhIaW50OiAnU2hvdyBwYWdlcyBpbiB0aGUgdXNlcnNwYWNlIG9mICVzJyxcblx0XHRjb3VudDogJ2NvdW50Jyxcblx0XHQnZWRpdCBjb3VudGVyJzogJ2VkaXQgY291bnRlcicsXG5cdFx0ZWRpdENvdW50ZXJMaW5rSGludDogJ0NvdW50IHRoZSBjb250cmlidXRpb25zIG1hZGUgYnkgJXMnLFxuXHRcdGNvbnRyaWJzOiAnY29udHJpYnMnLFxuXHRcdGNvbnRyaWJ1dGlvbnM6ICdjb250cmlidXRpb25zJyxcblx0XHRkZWxldGVkQ29udHJpYnM6ICdkZWxldGVkIGNvbnRyaWJ1dGlvbnMnLFxuXHRcdERlbGV0ZWRjb250cmlidXRpb25zSGludDogJ0xpc3QgZGVsZXRlZCBlZGl0cyBtYWRlIGJ5ICVzJyxcblx0XHRDb250cmlidXRpb25zSGludDogJ0xpc3QgdGhlIGNvbnRyaWJ1dGlvbnMgbWFkZSBieSAlcycsXG5cdFx0bG9nOiAnbG9nJyxcblx0XHQndXNlciBsb2cnOiAndXNlciBsb2cnLFxuXHRcdHVzZXJMb2dIaW50OiBcIlNob3cgJXMncyB1c2VyIGxvZ1wiLFxuXHRcdGFyaW46ICdBUklOIGxvb2t1cCcsXG5cdFx0J0xvb2sgdXAgJXMgaW4gQVJJTiB3aG9pcyBkYXRhYmFzZSc6ICdMb29rIHVwICVzIGluIHRoZSBBUklOIHdob2lzIGRhdGFiYXNlJyxcblx0XHR1bmJsb2NrU2hvcnQ6ICd1bicsXG5cdFx0YmxvY2s6ICdibG9jaycsXG5cdFx0J2Jsb2NrIHVzZXInOiAnYmxvY2sgdXNlcicsXG5cdFx0SXBibG9ja2xpc3RIaW50OiAnVW5ibG9jayAlcycsXG5cdFx0QmxvY2tpcEhpbnQ6ICdQcmV2ZW50ICVzIGZyb20gZWRpdGluZycsXG5cdFx0J2Jsb2NrIGxvZyc6ICdibG9jayBsb2cnLFxuXHRcdGJsb2NrTG9nSGludDogJ1Nob3cgdGhlIGJsb2NrIGxvZyBmb3IgJXMnLFxuXHRcdHByb3RlY3RMb2dIaW50OiAnU2hvdyB0aGUgcHJvdGVjdGlvbiBsb2cgZm9yICVzJyxcblx0XHRwYWdlTG9nSGludDogJ1Nob3cgdGhlIHBhZ2UgbG9nIGZvciAlcycsXG5cdFx0ZGVsZXRlTG9nSGludDogJ1Nob3cgdGhlIGRlbGV0aW9uIGxvZyBmb3IgJXMnLFxuXHRcdCdJbnZhbGlkICVzICVzJzogJ1RoZSBvcHRpb24gJXMgaXMgaW52YWxpZDogJXMnLFxuXHRcdCdObyBiYWNrbGlua3MgZm91bmQnOiAnTm8gYmFja2xpbmtzIGZvdW5kJyxcblx0XHQnIGFuZCBtb3JlJzogJyBhbmQgbW9yZScsXG5cdFx0dW5kbzogJ3VuZG8nLFxuXHRcdHVuZG9IaW50OiAndW5kbyB0aGlzIGVkaXQnLFxuXHRcdCdEb3dubG9hZCBwcmV2aWV3IGRhdGEnOiAnRG93bmxvYWQgcHJldmlldyBkYXRhJyxcblx0XHQnSW52YWxpZCBvciBJUCB1c2VyJzogJ0ludmFsaWQgb3IgSVAgdXNlcicsXG5cdFx0J05vdCBhIHJlZ2lzdGVyZWQgdXNlcm5hbWUnOiAnTm90IGEgcmVnaXN0ZXJlZCB1c2VybmFtZScsXG5cdFx0QkxPQ0tFRDogJ0JMT0NLRUQnLFxuXHRcdCdIYXMgYmxvY2tzJzogJ0hhcyBibG9ja3MnLFxuXHRcdCcgZWRpdHMgc2luY2U6ICc6ICcgZWRpdHMgc2luY2U6ICcsXG5cdFx0J2xhc3QgZWRpdCBvbiAnOiAnbGFzdCBlZGl0IG9uICcsXG5cdFx0J2hlL2hpbSc6ICdoZS9oaW0nLFxuXHRcdCdzaGUvaGVyJzogJ3NoZS9oZXInLFxuXHRcdC8vIEF1dG9lZGl0aW5nXG5cdFx0J0VudGVyIGEgbm9uLWVtcHR5IGVkaXQgc3VtbWFyeSBvciBwcmVzcyBjYW5jZWwgdG8gYWJvcnQnOlxuXHRcdFx0J0VudGVyIGEgbm9uLWVtcHR5IGVkaXQgc3VtbWFyeSBvciBwcmVzcyBjYW5jZWwgdG8gYWJvcnQnLFxuXHRcdCdGYWlsZWQgdG8gZ2V0IHJldmlzaW9uIGluZm9ybWF0aW9uLCBwbGVhc2UgZWRpdCBtYW51YWxseS5cXG5cXG4nOlxuXHRcdFx0J0ZhaWxlZCB0byBnZXQgcmV2aXNpb24gaW5mb3JtYXRpb24sIHBsZWFzZSBlZGl0IG1hbnVhbGx5LlxcblxcbicsXG5cdFx0J1RoZSAlcyBidXR0b24gaGFzIGJlZW4gYXV0b21hdGljYWxseSBjbGlja2VkLiBQbGVhc2Ugd2FpdCBmb3IgdGhlIG5leHQgcGFnZSB0byBsb2FkLic6XG5cdFx0XHQnVGhlICVzIGJ1dHRvbiBoYXMgYmVlbiBhdXRvbWF0aWNhbGx5IGNsaWNrZWQuIFBsZWFzZSB3YWl0IGZvciB0aGUgbmV4dCBwYWdlIHRvIGxvYWQuJyxcblx0XHQnQ291bGQgbm90IGZpbmQgYnV0dG9uICVzLiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGluIHlvdXIgamF2YXNjcmlwdCBmaWxlLic6XG5cdFx0XHQnQ291bGQgbm90IGZpbmQgYnV0dG9uICVzLiBQbGVhc2UgY2hlY2sgdGhlIHNldHRpbmdzIGluIHlvdXIgamF2YXNjcmlwdCBmaWxlLicsXG5cdFx0Ly8gUG9wdXBzIHNldHVwXG5cdFx0J09wZW4gZnVsbC1zaXplIGltYWdlJzogJ09wZW4gZnVsbC1zaXplIGltYWdlJyxcblx0XHRhdXRvZWRpdF92ZXJzaW9uOiAnbnAyMDE0MDQxNicsXG5cdH07XG5cdGNvbnN0IHBvcHVwU3RyaW5nID0gKHN0cikgPT4ge1xuXHRcdGlmIChtZXNzYWdlICE9PSB1bmRlZmluZWQgJiYgbWVzc2FnZSAmJiBtZXNzYWdlW3N0cl0pIHtcblx0XHRcdHJldHVybiBtZXNzYWdlW3N0cl07XG5cdFx0fVxuXHRcdGlmIChwZy5zdHJpbmdbc3RyXSkge1xuXHRcdFx0cmV0dXJuIHBnLnN0cmluZ1tzdHJdO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RyO1xuXHR9O1xuXHRjb25zdCB0cHJpbnRmID0gKHN0ciwgc3VicykgPT4ge1xuXHRcdGlmICh0eXBlb2Ygc3VicyAhPT0gdHlwZW9mIFtdKSB7XG5cdFx0XHRzdWJzID0gW3N1YnNdO1xuXHRcdH1cblx0XHRyZXR1cm4gc2ltcGxlUHJpbnRmKHBvcHVwU3RyaW5nKHN0ciksIHN1YnMpO1xuXHR9O1xuXHQvLyBFTkRGSUxFOiBzdHJpbmdzLmpzXG5cdC8vIFNUQVJURklMRTogcnVuLmpzXG5cdC8vIFJ1biB0aGluZ3Ncblx0Ly8gRm9yIHNvbWUgcmVhc29uIHBvcHVwcyByZXF1aXJlcyBhIGZ1bGx5IGxvYWRlZCBwYWdlIGpRdWVyeS5yZWFkeSguLi4pIGNhdXNlcyBwcm9ibGVtcyBmb3Igc29tZS5cblx0Ly8gVGhlIG9sZCBhZGRPbmxvYWRIb29rIGRpZCBzb21ldGhpbmcgc2ltaWxhciB0byB0aGUgYmVsb3dcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcblx0XHRhdXRvRWRpdCgpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIHdpbGwgc2V0dXAgcG9wdXBzXG5cdFx0JCh3aW5kb3cpLm9uKCdsb2FkJywgYXV0b0VkaXQpO1xuXHR9XG5cdC8vIFN1cHBvcnQgZm9yIE1lZGlhV2lraSdzIGxpdmUgcHJldmlldywgVmlzdWFsRWRpdG9yJ3Mgc2F2ZXMgYW5kIEVjaG8ncyBmbHlvdXQuXG5cdCgoKSA9PiB7XG5cdFx0bGV0IG9uY2UgPSB0cnVlO1xuXHRcdGNvbnN0IGR5bmFtaWNDb250ZW50SGFuZGxlciA9ICgkY29udGVudCkgPT4ge1xuXHRcdFx0Ly8gVHJ5IHRvIGRldGVjdCB0aGUgaG9vayBmaXJlZCBvbiBpbml0aWFsIHBhZ2UgbG9hZCBhbmQgZGlzcmVnYXJkXG5cdFx0XHQvLyBpdCwgd2UgYWxyZWFkeSBob29rIHRvIG9ubG9hZCAocG9zc2libHkgdG8gZGlmZmVyZW50IHBhcnRzIG9mXG5cdFx0XHQvLyBwYWdlIC0gaXQncyBjb25maWd1cmFibGUpIGFuZCBydW5uaW5nIHR3aWNlIG1pZ2h0IGJlIGJhZC4gVWdseS4uLlxuXHRcdFx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgPT09ICdtdy1jb250ZW50LXRleHQnICYmIG9uY2UpIHtcblx0XHRcdFx0b25jZSA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZWdpc3Rlckhvb2tzRm9yVmlzaWJsZU5hdnBvcHMgPSAoKSA9PiB7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBwZy5jdXJyZW50LmxpbmtzICYmIGkgPCBwZy5jdXJyZW50LmxpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgbmF2cG9wID0gcGcuY3VycmVudC5saW5rc1tpXS5uYXZwb3B1cDtcblx0XHRcdFx0XHRpZiAoIW5hdnBvcCB8fCAhbmF2cG9wLmlzVmlzaWJsZSgpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0TmF2cG9wdXAudHJhY2tlci5hZGRIb29rKHBvc0NoZWNrZXJIb29rKG5hdnBvcCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZG9JdCA9ICgpID0+IHtcblx0XHRcdFx0cmVnaXN0ZXJIb29rc0ZvclZpc2libGVOYXZwb3BzKCk7XG5cdFx0XHRcdCRjb250ZW50LmVhY2goKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdGVsZW1lbnQucmFuU2V0dXBUb29sdGlwc0FscmVhZHkgPSBmYWxzZTtcblx0XHRcdFx0XHRzZXR1cFRvb2x0aXBzKGVsZW1lbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRzZXR1cFBvcHVwcyhkb0l0KTtcblx0XHR9O1xuXHRcdC8vIFRoaXMgaG9vayBpcyBhbHNvIGZpcmVkIGFmdGVyIHBhZ2UgbG9hZC5cblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGR5bmFtaWNDb250ZW50SGFuZGxlcik7XG5cdFx0bXcuaG9vaygnZXh0LmVjaG8ub3ZlcmxheS5iZWZvcmVTaG93aW5nT3ZlcmxheScpLmFkZCgoJG92ZXJsYXkpID0+IHtcblx0XHRcdGR5bmFtaWNDb250ZW50SGFuZGxlcigkb3ZlcmxheS5maW5kKCcubXctZWNoby1zdGF0ZScpKTtcblx0XHR9KTtcblx0fSkoKTtcblx0Ly8gRU5ERklMRTogcnVuLmpzXG59O1xuXG5leHBvcnQge3BvcHVwc307XG4iLCAiaW1wb3J0ICcuL05hdmlnYXRpb25fcG9wdXBzLmxlc3MnO1xuaW1wb3J0IHtwb3B1cHN9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuJChwb3B1cHMpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQVUsdUJBQXVCOztBQ0RyRCxJQUFNQyxVQUFtQzs7RUFFeENDLFNBQVNDLE9BQU9DLE1BQU0sTUFBTSxJQUFJO0VBQ2hDQyxVQUFVRixPQUFPQyxNQUFNLE9BQU8sS0FBSztFQUNuQ0UsWUFBWUgsT0FBT0MsTUFBTSxPQUFPLEtBQUs7RUFDckNHLE9BQU9KLE9BQU9DLE1BQU0sT0FBTyxLQUFLO0VBQ2hDSSxRQUFRTCxPQUFPQyxNQUFNLE9BQU8sS0FBSztFQUNqQ0ssTUFBTTtFQUNOLGdCQUFnQk4sT0FBT0MsTUFBTSxPQUFPLEtBQUs7RUFDekMsY0FBY0QsT0FBT0MsTUFBTSxPQUFPLEtBQUs7RUFDdkNNLElBQUlQLE9BQU9DLE1BQU0sNEJBQTRCLDJCQUEyQjtFQUN4RU8sT0FBT1IsT0FBT0MsTUFBTSxNQUFNLEtBQUs7RUFDL0JRLEtBQUs7RUFDTEMsTUFBTTtFQUNO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QU07QUFDTixRQUFJd2hDLE9BQU87QUFDWCxVQUFNQyx3QkFBeUJDLGNBQWE7QUFJM0MsVUFBSUEsU0FBU3A0QixLQUFLLElBQUksTUFBTSxxQkFBcUJrNEIsTUFBTTtBQUN0REEsZUFBTztBQUNQO01BQ0Q7QUFDQSxZQUFNRyxpQ0FBaUNBLE1BQU07QUFDNUMsaUJBQVNwcUMsSUFBSSxHQUFHdE8sR0FBR2EsUUFBUWdILFNBQVN5RyxJQUFJdE8sR0FBR2EsUUFBUWdILE1BQU1oRixRQUFReUwsS0FBSztBQUNyRSxnQkFBTXhILFNBQVM5RyxHQUFHYSxRQUFRZ0gsTUFBTXlHLENBQUMsRUFBRS9HO0FBQ25DLGNBQUksQ0FBQ1QsVUFBVSxDQUFDQSxPQUFPVSxVQUFVLEdBQUc7QUFDbkM7VUFDRDtBQUNBK0IsbUJBQVN3b0IsUUFBUWx0QixRQUFRbXRCLGVBQWVsckIsTUFBTSxDQUFDO1FBQ2hEO01BQ0Q7QUFDQSxZQUFNNnhDLE9BQU9BLE1BQU07QUFDbEJELHVDQUErQjtBQUMvQkQsaUJBQVNHLEtBQUssQ0FBQ0MsUUFBUTFqQyxZQUFZO0FBQ2xDQSxrQkFBUXJULDBCQUEwQjtBQUNsQ2Isd0JBQWNrVSxPQUFPO1FBQ3RCLENBQUM7TUFDRjtBQUNBOEIsa0JBQVkwaEMsSUFBSTtJQUNqQjtBQUVBaGlDLE9BQUd5d0IsS0FBSyxrQkFBa0IsRUFBRTBSLElBQUlOLHFCQUFxQjtBQUNyRDdoQyxPQUFHeXdCLEtBQUssdUNBQXVDLEVBQUUwUixJQUFLQyxjQUFhO0FBQ2xFUCw0QkFBc0JPLFNBQVN4dUIsS0FBSyxnQkFBZ0IsQ0FBQztJQUN0RCxDQUFDO0VBQ0YsR0FBRztBQUVKOztBQ3IvUEFELEVBQUV2cUIsTUFBTTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgIm1lc3NhZ2UiLCAiYXJ0aWNsZSIsICJ3aW5kb3ciLCAid2dVTFMiLCAiY2F0ZWdvcnkiLCAiY2F0ZWdvcmllcyIsICJpbWFnZSIsICJpbWFnZXMiLCAic3R1YiIsICJrQiIsICJieXRlcyIsICJkYXkiLCAiZGF5cyIsICJob3VyIiwgImhvdXJzIiwgIm1pbnV0ZSIsICJtaW51dGVzIiwgInNlY29uZCIsICJzZWNvbmRzIiwgIndlZWsiLCAid2Vla3MiLCAibW9udGgiLCAibW9udGhzIiwgInllYXIiLCAieWVhcnMiLCAic2VhcmNoIiwgIlNlYXJjaEhpbnQiLCAid2ViIiwgImdsb2JhbCIsICJhY3Rpb25zIiwgInBvcHVwc01lbnUiLCAidG9nZ2xlUHJldmlld3NIaW50IiwgInJlc2V0IiwgImRpc2FibGUiLCAiZGlzYWJsZVBvcHVwc0hpbnQiLCAicHVyZ2VQb3B1cHNIaW50IiwgIlBvcHVwc0hpbnQiLCAic3BhY2ViYXIiLCAidmlldyIsICJ2aWV3SGludCIsICJ0YWxrIiwgImRlbCIsICJkZWxldGUiLCAiZGVsZXRlSGludCIsICJ1bmRlbGV0ZVNob3J0IiwgIlVuZGVsZXRlSGludCIsICJwcm90ZWN0IiwgInByb3RlY3RIaW50IiwgInVucHJvdGVjdFNob3J0IiwgInVucHJvdGVjdEhpbnQiLCAibW92ZSIsICJNb3ZlcGFnZUhpbnQiLCAiZWRpdCIsICJlZGl0SGludCIsICJuZXciLCAibmV3U2VjdGlvbkhpbnQiLCAibnVsbEVkaXRIaW50IiwgImhpc3QiLCAiaGlzdG9yeSIsICJoaXN0b3J5SGludCIsICJsYXN0IiwgImxhc3RFZGl0IiwgImxhc3RDb250cmliIiwgImxhc3RDb250cmliSGludCIsICJjdXIiLCAiZGlmZkN1ciIsICJvbGRFZGl0IiwgInB1cmdlIiwgInB1cmdlSGludCIsICJyYXciLCAicmF3SGludCIsICJyZW5kZXIiLCAicmVuZGVySGludCIsICJzaW5jZU1lIiwgInNpbmNlTWVIaW50IiwgImVkcyIsICJlZGl0b3JzIiwgImVkaXRvckxpc3RIaW50IiwgInJlbGF0ZWQiLCAicmVsYXRlZENoYW5nZXMiLCAiUmVjZW50Y2hhbmdlc2xpbmtlZEhpbnQiLCAiZWRpdE9sZCIsICJydiIsICJyZXZlcnQiLCAicmV2ZXJ0SGludCIsICJ1bmRvIiwgInVuZG9IaW50IiwgImRlZmF1bHRwb3B1cFJlZGxpbmtTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cEZpeERhYnNTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cEZpeFJlZGlyc1N1bW1hcnkiLCAiZGVmYXVsdHBvcHVwRXh0ZW5kZWRSZXZlcnRTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFJldmVydFRvUHJldmlvdXNTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFJldmVydFN1bW1hcnkiLCAiZGVmYXVsdHBvcHVwUXVlcmllZFJldmVydFRvUHJldmlvdXNTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFF1ZXJpZWRSZXZlcnRTdW1tYXJ5IiwgImRlZmF1bHRwb3B1cFJtRGFiTGlua1N1bW1hcnkiLCAiUmVkaXJlY3RzIiwgImRpc2FtYmlnIiwgImRpc2FtYmlnSGludCIsICJtYWlubGluayIsICJ3aWtpTGluayIsICJ3aWtpTGlua3MiLCAid2hhdExpbmtzSGVyZSIsICJXaGF0bGlua3NoZXJlSGludCIsICJ1bndhdGNoU2hvcnQiLCAid2F0Y2hUaGluZ3kiLCAid2F0Y2hIaW50IiwgInVud2F0Y2hIaW50IiwgInJzcyIsICJ1c2VyIiwgImVtYWlsIiwgIkVtYWlsdXNlckhpbnQiLCAic3BhY2UiLCAiUHJlZml4aW5kZXhIaW50IiwgImNvdW50IiwgImthdGVsaW5rSGludCIsICJjb250cmlicyIsICJjb250cmlidXRpb25zIiwgImRlbGV0ZWRDb250cmlicyIsICJDb250cmlidXRpb25zSGludCIsICJ0cmVlIiwgImNvbnRyaWJzVHJlZUhpbnQiLCAibG9nIiwgInVzZXJMb2dIaW50IiwgInVuYmxvY2tTaG9ydCIsICJibG9jayIsICJJcGJsb2NrbGlzdEhpbnQiLCAiQmxvY2tpcEhpbnQiLCAiYmxvY2tMb2dIaW50IiwgInByb3RlY3RMb2dIaW50IiwgInBhZ2VMb2dIaW50IiwgImRlbGV0ZUxvZ0hpbnQiLCAibSIsICJiaW5nU2VhcmNoSGludCIsICJoaXN0b3J5ZmVlZEhpbnQiLCAiVGhhbmtzSGludCIsICJtYXJrcGF0cm9sbGVkSGludCIsICJkZWZhdWx0cG9wdXBSZXZpZXdlZFN1bW1hcnkiLCAicmV2ZGVsIiwgIkRlbGV0ZWRjb250cmlidXRpb25zSGludCIsICJCTE9DS0VEIiwgIkVtYWlsVXNlckhpbnQiLCAiUkFOR0VCTE9DS0VEIiwgIkhJRERFTiIsICJMT0NLRUQiLCAiZGlmZiIsICJhdXRvZWRpdF92ZXJzaW9uIiwgIlByZWZpeEluZGV4SGludCIsICJudWxsRWRpdFN1bW1hcnkiLCAic2VwYXJhdG9yIiwgImNvbW1hIiwgInBvcHVwcyIsICJwZyIsICJyZSIsICJucyIsICJzdHJpbmciLCAid2lraSIsICJtaXNjIiwgIm9wdGlvbiIsICJvcHRpb25EZWZhdWx0IiwgImZsYWciLCAiY2FjaGUiLCAic3RydWN0dXJlcyIsICJ0aW1lciIsICJjb3VudGVyIiwgImN1cnJlbnQiLCAiZm4iLCAiZW5kb2ZsaXN0IiwgIkhUTUxFbGVtZW50IiwgInNldHVwVG9vbHRpcHMiLCAiY29udGFpbmVyIiwgInJlbW92ZSIsICJmb3JjZSIsICJwb3BEYXRhIiwgImNvbmNhdCIsICJnZXRWYWx1ZU9mIiwgImRvY3VtZW50IiwgImVkaXRmb3JtIiwgIndwVGV4dGJveDEiLCAib25tb3VzZXVwIiwgImRvU2VsZWN0aW9uUG9wdXAiLCAiZGVmYXVsdFBvcHVwc0NvbnRhaW5lciIsICJyYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSIsICJhbmNob3JzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAic2V0dXBUb29sdGlwc0xvb3AiLCAicXVlcnlTZWxlY3RvciIsICJzZXR1cFRvb2x0aXBzTG9vcDIiLCAiYmVnaW4iLCAiaG93bWFueSIsICJzbGVlcCIsICJhcmdzIiwgInNpbXBsZVByaW50ZiIsICJmaW5pc2giLCAibG9vcGVuZCIsICJNYXRoIiwgIm1pbiIsICJsZW5ndGgiLCAiaiIsICJkb1Rvb2x0aXAiLCAicmVtb3ZlVG9vbHRpcCIsICJhZGRUb29sdGlwIiwgImEiLCAiaHJlZiIsICJzZXRUaW1lb3V0IiwgInJtVG9jVG9vbHRpcHMiLCAiZmluaXNoZWRMb2FkaW5nIiwgInRvYyIsICJ0b2NMaW5rcyIsICJ0b2NMZW4iLCAiaXNQb3B1cExpbmsiLCAib25tb3VzZW92ZXIiLCAibW91c2VPdmVyV2lraUxpbmsiLCAib25tb3VzZW91dCIsICJtb3VzZU91dFdpa2lMaW5rIiwgIm9ubW91c2Vkb3duIiwgImtpbGxQb3B1cCIsICJoYXNQb3B1cCIsICJvcmlnaW5hbFRpdGxlIiwgInRpdGxlIiwgInJlbW92ZVRpdGxlIiwgInJlc3RvcmVUaXRsZSIsICJyZWdpc3Rlckhvb2tzIiwgIm5wIiwgInBvcHVwTWF4V2lkdGgiLCAic2V0TWF4V2lkdGgiLCAibWFpbkRpdiIsICJzdHlsZSIsICJtYXhXaWR0aCIsICJhZGRIb29rIiwgImFkZFBvcHVwU2hvcnRjdXRzIiwgInJtUG9wdXBTaG9ydGN1dHMiLCAicmVtb3ZlTW9kaWZpZXJLZXlMaXN0ZW5lciIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgIm1vZGlmaWVyS2V5TGlzdGVuZXIiLCAibW91c2VPdmVyV2lraUxpbmszIiwgImV2dCIsICJldmVudCIsICJhY3Rpb24iLCAia2V5IiwgInNlbGYiLCAiZXZ0MiIsICJtb3VzZU92ZXJXaWtpTGluazIiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJmb290bm90ZVRhcmdldCIsICJhVGl0bGUiLCAiVGl0bGUiLCAiZnJvbUFuY2hvciIsICJhbmNoIiwgImFuY2hvciIsICJ0ZXN0IiwgImxUaXRsZSIsICJmcm9tVVJMIiwgImxvY2F0aW9uIiwgInRvU3RyaW5nIiwgImVsIiwgIm5vZGVOYW1lIiwgIm50IiwgInRvTG93ZXJDYXNlIiwgInBhcmVudE5vZGUiLCAiZm9vdG5vdGVQcmV2aWV3IiwgIngiLCAibmF2cG9wIiwgInNldFBvcHVwSFRNTCIsICJpbm5lckhUTUwiLCAiaWROdW1iZXIiLCAibW9kaWZpZXJQcmVzc2VkIiwgIm1vZCIsICJpc0NvcnJlY3RNb2RpZmllciIsICJfYSIsICJsaW5rIiwgIm5hdnBvcHVwIiwgImlzVmlzaWJsZSIsICJwb3B1cFN0cnVjdHVyZSIsICJzZXREZWZhdWx0IiwgIm5ld05hdnBvcHVwIiwgImxpbmtzSGFzaCIsICJsaW5rcyIsICJwdXNoIiwgInBlbmRpbmciLCAic2ltcGxlUG9wdXBDb250ZW50IiwgInNob3dTb29uSWZTdGFibGUiLCAiZGVsYXkiLCAiY2xlYXJJbnRlcnZhbCIsICJjaGVja1BvcHVwUG9zaXRpb24iLCAic2V0SW50ZXJ2YWwiLCAic2ltcGxlTm9Nb3JlIiwgImQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicyIsICJhcHBlbmQiLCAiZGlzcGxheSIsICJub25zaW1wbGVQb3B1cENvbnRlbnQiLCAicG9wdXBTdHJpbmciLCAiaGFzUG9wdXBNZW51IiwgInNldElubmVySFRNTCIsICJwb3B1cEhUTUwiLCAiZmlsbEVtcHR5U3BhbnMiLCAiZHJhZ0hhbmRsZSIsICJtYWtlRHJhZ2dhYmxlIiwgInBvcHVwUmVkbGlua0hUTUwiLCAiZGVidWdEYXRhIiwgIk5hdnBvcHVwIiwgImZ1enoiLCAicGFyZW50QW5jaG9yIiwgInBhcmVudFBvcHVwIiwgIm93bmVyIiwgInNob3VsZFNob3dOb25TaW1wbGUiLCAic2hvdWxkU2hvdyIsICJkaWZmMiIsICJwYXJhbXMiLCAicGFyc2VQYXJhbXMiLCAib2xkaWQiLCAicmVmZXJlbmNlRWxlbWVudCIsICJsb2FkRGlmZiIsICJsb2FkQVBJUHJldmlldyIsICJiYWNrbGlua3MiLCAibmFtZXNwYWNlSWQiLCAibnNJbWFnZUlkIiwgImFuY2hvckNvbnRhaW5zSW1hZ2UiLCAibG9hZEltYWdlIiwgIm5zQ2F0ZWdvcnlJZCIsICJuc1VzZXJJZCIsICJuc1VzZXJ0YWxrSWQiLCAic3RhcnRBcnRpY2xlUHJldmlldyIsICJwZW5kaW5nTmF2cG9wVGFzayIsICJjb21wbGV0ZWROYXZwb3BUYXNrIiwgInJlZGlyIiwgImxvYWRQcmV2aWV3IiwgIm9yaWdpbmFsQXJ0aWNsZSIsICJsb2FkUHJldmlld0Zyb21SZWRpciIsICJyZWRpck1hdGNoIiwgInRhcmdldCIsICJmcm9tV2lraVRleHQiLCAicmVkaXJUYXJnZXQiLCAid2FyblJlZGlyIiwgInJlZGlyTGluayIsICJpbnNlcnRQcmV2aWV3IiwgImRvd25sb2FkIiwgInJlZGlyZWN0IiwgImV4ZWMiLCAiZGF0YSIsICJ2aXNpYmxlIiwgImluc2VydFByZXZpZXdOb3ciLCAiaWQiLCAid2lraVRleHQiLCAiYXJ0IiwgIm1ha2VGaXhEYWJzIiwgImdldFBhZ2VJbmZvIiwgInNldFBvcHVwVHJhaWxlciIsICJpbWFnZVBhZ2UiLCAiZ2V0VmFsaWRJbWFnZUZyb21XaWtpVGV4dCIsICJpbnNlcnRBcnRpY2xlUHJldmlldyIsICJuc1RlbXBsYXRlSWQiLCAiaCIsICJlbnRpZnkiLCAic3BsaXQiLCAiU3RyaW5nIiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgImpvaW4iLCAiX3RlbXBsYXRlT2JqZWN0MiIsICJwIiwgInByZXBQcmV2aWV3bWFrZXIiLCAic2hvd1ByZXZpZXciLCAiYW5jaG9yaXplIiwgImFuY2hvclN0cmluZyIsICJ1cmxCYXNlIiwgImpvaW5QYXRoIiwgImFydGljbGViYXNlIiwgInVybFN0cmluZyIsICJQcmV2aWV3bWFrZXIiLCAiYW5jaFJlIiwgIlJlZ0V4cCIsICJsaXRlcmFsaXplUmVnZXgiLCAicmVwbGFjZSIsICJtYXRjaCIsICJzbGljZSIsICJtYXgiLCAiaW5kZXhPZiIsICJsaW5lcyIsICJpIiwgImtpbGxQb3B1cDIiLCAiYmFuaXNoIiwgImFib3J0QWxsRG93bmxvYWRzIiwgIkRyYWciLCAiY29uc3RydWN0b3IiLCAic3RhcnRDb25kaXRpb24iLCAiZW5kSG9vayIsICJmaXhFIiwgImUiLCAibGF5ZXJYIiwgIm9mZnNldFgiLCAibGF5ZXJZIiwgIm9mZnNldFkiLCAiaW5pdCIsICJvIiwgIm9Sb290IiwgIm9iaiIsICJzdGFydCIsICJkcmFnZ2luZyIsICJwb3B1cHNfZHJhZ2dhYmxlIiwgImhtb2RlIiwgInZtb2RlIiwgInJvb3QiLCAiTnVtYmVyIiwgImlzTmFOIiwgInBhcnNlSW50IiwgImxlZnQiLCAidG9wIiwgIm9udGhpc1N0YXJ0IiwgIm9udGhpc0VuZCIsICJvbnRoaXMiLCAieSIsICJib3R0b20iLCAicmlnaHQiLCAibGFzdE1vdXNlWCIsICJjbGllbnRYIiwgImxhc3RNb3VzZVkiLCAiY2xpZW50WSIsICJvbm1vdXNlbW92ZURlZmF1bHQiLCAib25tb3VzZW1vdmUiLCAiZTIiLCAiZHJhZyIsICJlbmQiLCAiZXkiLCAiZXgiLCAibngiLCAibnkiLCAib3JpZ2luYWwiLCAicG9wdXBMYXlvdXQiLCAicG9wdXBSZWRpclNwYW5zIiwgInBvcHVwVGl0bGUiLCAibmF2bGlua1N0cmluZ1RvSFRNTCIsICJwb3B1cFRvcExpbmtzIiwgIm5hdkxpbmtzSFRNTCIsICJoaW50IiwgInBvcHVwSW1hZ2UiLCAiaW1hZ2VIVE1MIiwgInBvcHVwUmVkaXJUaXRsZSIsICJwb3B1cFJlZGlyVG9wTGlua3MiLCAiY29weVN0cnVjdHVyZSIsICJvbGRTdHJ1Y3R1cmUiLCAibmV3U3RydWN0dXJlIiwgInByb3AiLCAiT2JqZWN0IiwgImhhc093biIsICJub3N0YWxnaWEiLCAic3RyIiwgImVkaXRzdHIiLCAiZWRpdE9sZGlkU3RyIiwgImhpc3RvcnlzdHIiLCAid2F0Y2hzdHIiLCAiZmFuY3kiLCAid2F0Y2giLCAicG9wdXBPdGhlckxpbmtzIiwgImFkbWluIiwgIm5vcm1hbCIsICJwb3B1cFJlZGlyT3RoZXJMaW5rcyIsICJmYW5jeTIiLCAibWVudXMiLCAic2hvcnRlciIsICJkcm9wZGl2IiwgImVuZGRpdiIsICJsYXN0ZWRpdCIsICJ0aGFuayIsICJqc0hpc3RvcnkiLCAibGlua3NoZXJlIiwgIm51bGxQdXJnZSIsICJ2aWV3T3B0aW9ucyIsICJlZGl0Um93IiwgIm1hcmtQYXRyb2xsZWQiLCAibmV3VG9waWMiLCAicHJvdGVjdERlbGV0ZSIsICJtZW51VGl0bGUiLCAic2hvcnRtZW51cyIsICJsaXRlIiwgInN1YnN0aXR1dGUiLCAiY21kQm9keSIsICJmcm9tUmUiLCAiZnJvbSIsICJmbGFncyIsICJ0byIsICJleGVjQ21kcyIsICJjbWRMaXN0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJlcnIiLCAiZiIsICJwYXJzZUNtZCIsICJwYXJzZUNtZDIiLCAiY2hhckF0IiwgInBhcnNlU3Vic3RpdHV0ZSIsICJyZW1haW5kZXIiLCAidW5Fc2NhcGUiLCAic2VwIiwgIl90ZW1wbGF0ZU9iamVjdDMiLCAidG1wIiwgInNraXBPdmVyIiwgInNlZ21lbnQiLCAic2tpcFRvRW5kIiwgImVuZFNlZ21lbnQiLCAiZmluZE5leHQiLCAiX3NlcCIsICJjaCIsICJzZXRDaGVja2JveCIsICJwYXJhbSIsICJib3giLCAidmFsIiwgIm13IiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJjaGVja2VkIiwgImF1dG9FZGl0IiwgImF1dG9FZGl0NCIsICJzZXR1cFBvcHVwcyIsICJhdXRvQ2xpY2tUb2tlbiIsICJtb2RpZnlXYXRjaGxpc3QiLCAiYWxyZWFkeVJhbiIsICJjbWRTdHJpbmciLCAiZWRpdGJveCIsICJpbnB1dCIsICJvdXRwdXQiLCAid3BNaW5vcmVkaXQiLCAid3BXYXRjaHRoaXMiLCAicnZpZCIsICJ1cmwiLCAiYXBpd2lraWJhc2UiLCAic3RhcnREb3dubG9hZCIsICJhdXRvRWRpdDIiLCAic3VtbWFyeSIsICJzdW1tYXJ5cHJvbXB0IiwgInN1bW1hcnlub3RpY2UiLCAiZ2V0UnZTdW1tYXJ5IiwgInR4dCIsICJyZXNwb25zZSIsICJwcm9tcHQiLCAid3BTdW1tYXJ5IiwgImF1dG9FZGl0MyIsICJzZXNzaW9uSWQiLCAiYnRuIiwgImJ1dHRvbiIsICJtc2ciLCAidHByaW50ZiIsICJiYW5uZXJNZXNzYWdlIiwgImNsaWNrIiwgIm5vdGlmeSIsICJ0YWciLCAidHlwZSIsICJoZWFkaW5ncyIsICJkaXYiLCAiZXNjYXBlUXVvdGVzSFRNTCIsICJpbnNlcnRCZWZvcmUiLCAidGVtcGxhdGUiLCAianNvbiIsICJnZXRKc09iaiIsICJhbnlDaGlsZCIsICJxdWVyeSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAidGltZXN0YW1wIiwgInJldmlkIiwgInVzZXJoaWRkZW4iLCAiRG93bmxvYWRlciIsICJYTUxIdHRwUmVxdWVzdCIsICJodHRwIiwgImxhc3RNb2RpZmllZCIsICJjYWxsYmFja0Z1bmN0aW9uIiwgIm9uRmFpbHVyZSIsICJhYm9ydGVkIiwgIm1ldGhvZCIsICJhc3luYyIsICJzZW5kIiwgImFib3J0IiwgImdldERhdGEiLCAicmVzcG9uc2VUZXh0IiwgInNldFRhcmdldCIsICJvcGVuIiwgInNldFJlcXVlc3RIZWFkZXIiLCAidXNlckFnZW50IiwgImdldFJlYWR5U3RhdGUiLCAicmVhZHlTdGF0ZSIsICJkb3dubG9hZHNJblByb2dyZXNzIiwgImdldExhc3RNb2RpZmllZERhdGUiLCAibGFzdG1vZCIsICJnZXRSZXNwb25zZUhlYWRlciIsICJEYXRlIiwgInNldENhbGxiYWNrIiwgIm9ucmVhZHlzdGF0ZWNoYW5nZSIsICJnZXRTdGF0dXMiLCAic3RhdHVzIiwgIm5ld0Rvd25sb2FkIiwgIm5ld0Rvd25sb2FkMiIsICJjYWxsYmFjayIsICJvbmZhaWx1cmUiLCAiZmFrZURvd25sb2FkIiwgIkluc3RhIiwgInNldHVwTGl2ZVByZXZpZXciLCAiX2IiLCAiY29uZiIsICJiYXNlVXJsIiwgImxhbmciLCAiaW50ZXJ3aWtpIiwgImRlZmF1bHRfdGh1bWJfd2lkdGgiLCAicGF0aHMiLCAiYXJ0aWNsZXMiLCAiYXJ0aWNsZVBhdGgiLCAibWF0aCIsICJpbWFnZXNfZmFsbGJhY2siLCAibG9jYWxlIiwgImNvbmZpZyIsICJnZXQiLCAibmFtZSIsICJzaWduYXR1cmUiLCAiQkxPQ0tfSU1BR0UiLCAiZHVtcCIsICJjb252ZXJ0IiwgImxsIiwgInIiLCAicmVtYWluIiwgInNoIiwgInNoaWZ0IiwgInBzIiwgImYyIiwgImYzIiwgIm8yIiwgImMiLCAicDIiLCAiaHRtbF9lbnRpdGllcyIsICJodG1sZXNjYXBlX3RleHQiLCAiaHRtbGVzY2FwZV9hdHRyIiwgInN0cl9pbWF0Y2giLCAiYiIsICJsIiwgImNvbXBhcmVMaW5lU3RyaW5nT3JSZWciLCAiY29tcGFyZUxpbmVTdHJpbmciLCAiY2hhckF0UG9pbnQiLCAiZW5kbCIsICJwYXJzZV9saXN0IiwgInByZXYiLCAibF9tYXRjaCIsICJpcG9zIiwgInByZXZQb3MiLCAicGkiLCAibWF0Y2hQb3MiLCAibGkiLCAiYXQiLCAicGFyc2VfaW5saW5lX25vd2lraSIsICJkdF9tYXRjaCIsICJ1bnNoaWZ0IiwgInBhcnNlX3RhYmxlIiwgInBhcnNlX3RhYmxlX2RhdGEiLCAidGRfbGluZSIsICJtYXRjaF9pIiwgInRkX21hdGNoIiwgInBvcCIsICJ0YyIsICJ0ZCIsICJwYXJzZV9wcmUiLCAicGFyc2VfYmxvY2tfaW1hZ2UiLCAicGFyc2VfaW1hZ2UiLCAic3Vic3RyaW5nIiwgIndpZHRoIiwgImF0dHIiLCAiZmlsZW5hbWUiLCAiY2FwdGlvbiIsICJ0aHVtYiIsICJmcmFtZSIsICJjZW50ZXIiLCAiYWxpZ24iLCAibmVzdGluZyIsICJsYXN0X2F0dHIiLCAid19tYXRjaCIsICJsYXN0ZW5kIiwgInN1YnN0YXJ0IiwgIm5lc3RsZXYiLCAiY2xvc2UiLCAic3VibG9vcCIsICJodG1sIiwgInBhcnNlX2lubGluZV93aWtpIiwgInBhcnNlX2lubGluZV9pbWFnZXMiLCAibG9vcCIsICJ3aWtpMiIsICJwYXJzZV9pbmxpbmVfZm9ybWF0dGluZyIsICJlbSIsICJzdCIsICJkYXRlIiwgImdldFVUQ01pbnV0ZXMiLCAiZ2V0VVRDSG91cnMiLCAiZ2V0VVRDRGF0ZSIsICJnZXRVVENNb250aCIsICJnZXRVVENGdWxsWWVhciIsICJfJDAiLCAiJDEiLCAiJDIiLCAiJDMiLCAiJDQiLCAid2lraTJodG1sIiwgImJhc2V1cmwiLCAicG9wdXBGaWx0ZXJQYWdlU2l6ZSIsICJmb3JtYXRCeXRlcyIsICJwb3B1cEZpbHRlckNvdW50TGlua3MiLCAibnVtIiwgImNvdW50TGlua3MiLCAicG9wdXBGaWx0ZXJDb3VudEltYWdlcyIsICJjb3VudEltYWdlcyIsICJwb3B1cEZpbHRlckNvdW50Q2F0ZWdvcmllcyIsICJjb3VudENhdGVnb3JpZXMiLCAicG9wdXBGaWx0ZXJMYXN0TW9kaWZpZWQiLCAiX2RhdGEiLCAibm93IiwgImFnZSIsICJmb3JtYXRBZ2UiLCAiYWEiLCAic2VjbGVuIiwgIm1pbmxlbiIsICJob3VybGVuIiwgImRheWxlbiIsICJ3ZWVrbGVuIiwgIm51bXdlZWtzIiwgInN3ZWVrcyIsICJhZGR1bml0IiwgIm51bWRheXMiLCAic2RheXMiLCAibnVtaG91cnMiLCAic2hvdXJzIiwgIm51bW1pbnMiLCAic21pbnMiLCAibnVtc2VjcyIsICJzc2VjcyIsICJydW5Qb3B1cEZpbHRlcnMiLCAibGlzdCIsICJyZXQiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAicG9wdXBGaWx0ZXJzIiwgImV4dHJhUG9wdXBGaWx0ZXJzIiwgInBhZ2VJbmZvQXJyYXkiLCAicGFnZUluZm8iLCAidXBjYXNlRmlyc3QiLCAiaW1hZ2VCcmFja2V0Q291bnQiLCAiY2F0ZWdvcnlCcmFja2V0Q291bnQiLCAicG9wdXBGaWx0ZXJTdHViRGV0ZWN0IiwgIl9kb3dubG9hZCIsICJjb3VudHMiLCAic3R1YkNvdW50IiwgInJlYWwiLCAic2VjdCIsICJwb3B1cEZpbHRlckRpc2FtYmlnRGV0ZWN0IiwgIm5hbWVzcGFjZSIsICJpc0Rpc2FtYmlnIiwgInJvdW5kIiwgIlN0cmluZ3dyYXBwZXIiLCAiU3RyaW5nd3JhcHBlcjIiLCAic2V0VXRmIiwgIm9taXRBbmNob3IiLCAibGVuIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1cmxBbmNob3IiLCAiYW5jaG9yRnJvbVV0ZiIsICJlbmNvZGVVUklDb21wb25lbnQiLCAic3BsaXR0ZWQiLCAidSIsICJkZWNvZGVOYXN0aWVzIiwgInN0cmlwTmFtZXNwYWNlIiwgInNwZWNpYWxkaWZmIiwgIm5zU3BlY2lhbElkIiwgIm1haW4iLCAiZnJvbUJvdEludGVyZmFjZSIsICJleHRyYWN0ZWQiLCAiaXNTYWZhcmkiLCAidW5lc2NhcGUiLCAiZGVjb2RlVVJJIiwgImRlY29kZUVzY2FwZXMiLCAibXlEZWNvZGVVUkkiLCAiaGludFZhbHVlIiwgInNhZmVEZWNvZGVVUkkiLCAidG9Vc2VyTmFtZSIsICJ3aXRoTnMiLCAidXNlck5hbWUiLCAidCIsICJ0b1RhbGtQYWdlIiwgImxvY2FsaXplZE5hbWVzcGFjZSIsICJ0YWxrUGFnZSIsICJpc1RhbGtQYWdlIiwgInRvQXJ0aWNsZUZyb21UYWxrUGFnZSIsICJhcnRpY2xlRnJvbVRhbGtQYWdlIiwgImFydGljbGVGcm9tVGFsa09yQXJ0aWNsZSIsICJpc0lwVXNlciIsICJpcFVzZXIiLCAibnNNYWluc3BhY2VJZCIsICJzZXRVcmwiLCAidXJsZnJhZyIsICJ2IiwgImtlZXBTcGFjZXMiLCAiZW5jb2RlVVJJIiwgInJlbW92ZUFuY2hvciIsICJ0b1VybCIsICJ0aXRsZWJhc2UiLCAic3BlY2lhbERpZmYiLCAiaW5jbHVkZXMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAieiIsICJoZWxwZXIiLCAiZGVjb2RlRXh0cmFzIiwgInNlY3RTdHViIiwgInJlYWxTdHViIiwgImlzVmFsaWRJbWFnZU5hbWUiLCAiaXNJblN0cmlwcGFibGVOYW1lc3BhY2UiLCAiaXNJbk1haW5OYW1lc3BhY2UiLCAia2lkcyIsICJjaGlsZE5vZGVzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImtpZCIsICJtYXJrTm9wb3B1cFNwYW5MaW5rcyIsICJpbk5vcG9wdXBTcGFuIiwgImdldEF0dHJpYnV0ZSIsICJiYXNlbmFtZXMiLCAidXJsTm9Qb3B1cCIsICJtYXJrTm9wb3B1cFNwYW5MaW5rczIiLCAiZml4VmVjdG9yTWVudVBvcHVwcyIsICIkYm9keSIsICIkIiwgImZpbmQiLCAidG9BcnJheSIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJhcyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJnZXRQYWdlV2l0aENhY2hpbmciLCAib25Db21wbGV0ZSIsICJmaW5kSW5QYWdlQ2FjaGUiLCAiZ2V0UGFnZSIsICJhZGREb3dubG9hZCIsICJhZGRQYWdlVG9DYWNoZSIsICJwYWdlIiwgImpzb25fcmV0IiwgIkpTT04iLCAicGFyc2UiLCAid2FybmluZ3MiLCAidyIsICJlcnJvciIsICJlcnJsb2ciLCAiY29kZSIsICJpbmZvIiwgInRvVXBwZXJDYXNlIiwgImZpbmRJbkFycmF5IiwgImFyciIsICJmb28iLCAibmV4dE9uZSIsICJhcnJheSIsICJlc2NhcGVSZWdFeHAiLCAicHJvdG90eXBlIiwgInJlbW92ZU51bGxzIiwgImZpbHRlciIsICJzdWJzIiwgImNtZCIsICJpc1N0cmluZyIsICJpc051bWJlciIsICJpc1JlZ0V4cCIsICJpc0FycmF5IiwgIkFycmF5IiwgImlzT2JqZWN0IiwgImlzRnVuY3Rpb24iLCAiRnVuY3Rpb24iLCAicmVwZWF0U3RyaW5nIiwgIm11bHQiLCAiemVyb0ZpbGwiLCAibWFwIiwgIm1hcF9hcnJheSIsICJtYXBfb2JqZWN0IiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgInRleHQiLCAidW5lc2NhcGVRdW90ZXNIVE1MIiwgInJldGFyZ2V0RGFiIiwgIm5ld1RhcmdldCIsICJvbGRUYXJnZXQiLCAiZnJpZW5kbHlDdXJyZW50QXJ0aWNsZU5hbWUiLCAidGl0bGVUb0VkaXQiLCAiY2hhbmdlTGlua1RhcmdldExpbmsiLCAiY2xpY2tCdXR0b24iLCAibWlub3IiLCAibGlzdExpbmtzIiwgIndpa2l0ZXh0IiwgInJlZyIsICJvbWl0UmVnZXgiLCAid2lrUG9zIiwgInJtRHVwZXNGcm9tU29ydGVkTGlzdCIsICJzb3J0IiwgIndpa1RhcmdldCIsICJtZXRoIiwgIl9pdGVyYXRvcjgiLCAiX3N0ZXA4IiwgIm1ha2VGaXhEYWIiLCAic2V0UG9wdXBIVE1MMiIsICJlbGVtZW50SWQiLCAicG9wdXBJZCIsICJvblN1Y2Nlc3MiLCAicG9wdXBFbGVtZW50IiwgInJjaWQiLCAic3RydWN0dXJlIiwgInNwYW5zIiwgImZsYXR0ZW4iLCAibGF5b3V0IiwgIm51bXNwYW5zIiwgInJlZGlycyIsICJyZWRpclNwYW5zIiwgImZvdW5kIiwgInN0cnVjdHVyZWZuIiwgInNldGZuIiwgInNldFBvcHVwVGlwc0FuZEhUTUwiLCAiZmxhdHRlbjIiLCAicG9wdXBIVE1MMiIsICJtYWtlRW1wdHlTcGFucyIsICJtYWtlRW1wdHlTcGFuczIiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAiZW1wdHlTcGFuSFRNTCIsICJub2RlVHlwZSIsICJlbXB0eVNwYW5IVE1MMiIsICJjbGFzc25hbWUiLCAiY2xhc3NBbGlhc2VzIiwgInBvcHVwU2Vjb25kUHJldmlldyIsICJfYXJ0aWNsZSIsICJwb3BUaXBzU29vbkZuIiwgIndoZW4iLCAicG9wVGlwcyIsICJkaXZuYW1lIiwgImlkbnVtYmVyIiwgImZ1enp5Q3Vyc29yT2ZmTWVudXMiLCAiX3giLCAiX3kiLCAiX2Z1enoiLCAicGFyZW50IiwgInVscyIsICJfaXRlcmF0b3IxMCIsICJfc3RlcDEwIiwgInVsIiwgIm9mZnNldFdpZHRoIiwgImxpbWl0SG9yaXpvbnRhbFBvc2l0aW9uIiwgIm1vdXNlT3V0V2lraUxpbmsyIiwgInRyYWNrZXIiLCAicG9zQ2hlY2tlckhvb2siLCAiZGlydHkiLCAibW91c2VPdmVyTmF2cG9wIiwgImlzV2l0aGluIiwgIm1vdXNlTGVhdmluZ1RpbWUiLCAicnVuU3RvcFBvcHVwVGltZXIiLCAic3RvcFBvcHVwVGltZXIiLCAib3JpZ2luYWxEYXRhIiwgIm1heENoYXJhY3RlcnMiLCAibWF4U2VudGVuY2VzIiwgInNldERhdGEiLCAibWF4U2l6ZSIsICJraWxsQ29tbWVudHMiLCAia2lsbERpdnMiLCAia2lsbEdhbGxlcmllcyIsICJraWxsIiwgIm9wZW5pbmciLCAiY2xvc2luZyIsICJzdWJvcGVuaW5nIiwgInN1YmNsb3NpbmciLCAicmVwbCIsICJvbGRrIiwgImsiLCAia2lsbFN0dWZmIiwgIm9wIiwgIm1ha2VSZWdleHAiLCAiY2wiLCAic2IiLCAic2MiLCAib3BSZXN1bHQiLCAiaW5kZXgiLCAiZGVwdGgiLCAicmVtb3ZhbCIsICJwcmVmaXgiLCAic3VmZml4IiwgInJlU3RyIiwgInNwIiwgImtpbGxCb3hUZW1wbGF0ZXMiLCAia2lsbFRlbXBsYXRlcyIsICJraWxsVGFibGVzIiwgImtpbGxJbWFnZXMiLCAiZm9yYmlkZGVuTmFtZXNwYWNlQWxpYXNlcyIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJsb2NhbGl6ZWROYW1lc3BhY2VMYyIsICJraWxsSFRNTCIsICJraWxsQ2h1bmtzIiwgIml0YWxpY0NodW5rUmVnZXgiLCAibW9wdXAiLCAiZmlyc3RCaXQiLCAic3R1ZmYiLCAibm90U2VudGVuY2VFbmRzIiwgImZpeFNlbnRlbmNlRW5kcyIsICJmdWxsTGVuZ3RoIiwgImRkIiwgImZpcnN0U2VudGVuY2VzIiwgInN0cnMiLCAia2lsbEJhZFdoaXRlc3BhY2UiLCAibWFrZVByZXZpZXciLCAia2lsbE11bHRpbGluZVRlbXBsYXRlcyIsICJmaXhIVE1MIiwgInN0cmlwTG9uZ1RlbXBsYXRlcyIsICJlc1dpa2kySHRtbFBhcnQiLCAicmVMaW5rcyIsICJsYXN0SW5kZXgiLCAicmVzdWx0IiwgInBvc3RmaXhJbmRleCIsICJfbWF0Y2gkIiwgImVkaXRTdW1tYXJ5UHJldmlldyIsICJyZUFlcyIsICJzZWN0aW9uIiwgInBvc3RmaXgiLCAic2VjdGlvbkxpbmsiLCAibW9yZSIsICJtb3JlTGluayIsICJvbmNsaWNrIiwgInF1ZXJ5VHlwZSIsICJodG1sR2VuZXJhdG9yIiwgInVzZXJuYW1lYXJ0IiwgIkFQSWhpc3RvcnlQcmV2aWV3SFRNTCIsICJBUEljYXRlZ29yeVByZXZpZXdIVE1MIiwgInVzZXJuYW1lIiwgIkFQSXVzZXJJbmZvUHJldmlld0hUTUwiLCAiQVBJY29udHJpYnNQcmV2aWV3SFRNTCIsICJ0cmFpbCIsICJBUElpbWFnZXBhZ2VQcmV2aWV3SFRNTCIsICJBUEliYWNrbGlua3NQcmV2aWV3SFRNTCIsICJBUElyZXZpc2lvblByZXZpZXdIVE1MIiwgImZldGNoVXNlckdyb3VwTmFtZXMiLCAidGhlbiIsICJzaG93QVBJUHJldmlldyIsICJnbyIsICJsaW5rTGlzdCIsICJidWYiLCAiX2l0ZXJhdG9yMTEiLCAiX3N0ZXAxMSIsICJnZXRUaW1lT2Zmc2V0IiwgInR6IiwgIm9wdGlvbnMiLCAiZ2V0VGltZVpvbmUiLCAidGltZVpvbmUiLCAidHpDb21wb25lbnRzIiwgInVzZVRpbWVPZmZzZXQiLCAiSW50bCIsICJEYXRlVGltZUZvcm1hdCIsICJmb3JtYXRUb1BhcnRzIiwgImdldExvY2FsZXMiLCAibG9jYWxlcyIsICJ1c2VyTGFuZ3VhZ2UiLCAiZ2V0TVdEYXRlRm9ybWF0IiwgInN1cHBvcnRlZExvY2FsZXNPZiIsICJuYXZpZ2F0b3IiLCAibGFuZ3VhZ2UiLCAiZWRpdFByZXZpZXdUYWJsZSIsICJyZWFsbHlDb250cmlicyIsICJjdXJhcnQiLCAibWFrZUZpcnN0Q29sdW1uTGlua3MiLCAiY3VycmVudFJldmlzaW9uIiwgImZpcnN0UmV2aWQiLCAiX2l0ZXJhdG9yMTIiLCAiX3N0ZXAxMiIsICJlZGl0RGF0ZSIsICJ0aGlzRGF5IiwgImZvcm1hdHRlZERhdGUiLCAidGhpc1RpbWUiLCAiZm9ybWF0dGVkVGltZSIsICJjb2wzdXJsIiwgImNvbDN0eHQiLCAiY29tbWVudCIsICJjb250ZW50IiwgImNvbW1lbnRoaWRkZW4iLCAiYWRqdXN0RGF0ZSIsICJvZmZzZXQiLCAiY29udmVydFRpbWVab25lIiwgInRvTG9jYWxlU3RyaW5nIiwgImZvcm1hdHRlZERhdGVUaW1lIiwgImQyIiwgImdldEZ1bGxZZWFyIiwgImdldE1vbnRoIiwgImdldERhdGUiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgInRvTG9jYWxlRGF0ZVN0cmluZyIsICJnZXRVVENTZWNvbmRzIiwgInRvTG9jYWxlVGltZVN0cmluZyIsICJ1c2VyaW5mb1Jlc3BvbnNlIiwgInF1ZXJ5T2JqIiwgInVzZXJzIiwgIm1lc3NhZ2VzIiwgImdyb3VwcyIsICJfaXRlcmF0b3IxMyIsICJfc3RlcDEzIiwgImdyb3VwTmFtZSIsICJnbG9iYWx1c2VyaW5mbyIsICJfaXRlcmF0b3IxNCIsICJfc3RlcDE0IiwgImdldE13QXBpIiwgImxvYWRNZXNzYWdlc0lmTWlzc2luZyIsICJqc09iaiIsICJtaXNzaW5nIiwgImNvbnRlbnRtb2RlbCIsICJfaXRlcmF0b3IxNSIsICJfc3RlcDE1IiwgImNvbnRpbnVlIiwgImJsY29udGludWUiLCAiQVBJc2hhcmVkSW1hZ2VQYWdlUHJldmlld0hUTUwiLCAicG9wdXBpZCIsICJyZXF1ZXN0aWQiLCAiYWx0IiwgImltYWdlcmVwb3NpdG9yeSIsICJlbmNhcnQiLCAic2hhcmVkX3VybCIsICJhcGljb21tb25zYmFzZSIsICJjb21tb25zYmFzZSIsICJsb2FkZXIiLCAibG9hZCIsICJBUElpbWFnZWxpbmtzUHJldmlld0hUTUwiLCAianNvYmoiLCAiaW1hZ2V1c2FnZSIsICJfaXRlcmF0b3IxNiIsICJfc3RlcDE2IiwgImNhdGVnb3J5bWVtYmVycyIsICJfaXRlcmF0b3IxNyIsICJfc3RlcDE3IiwgImNtY29udGludWUiLCAicXVlcnlvYmoiLCAiaW52YWxpZCIsICJibG9ja2VkYnkiLCAiYmxvY2twYXJ0aWFsIiwgImxvY2tlZFN1bEFjY291bnRJc0F0dGFjaGVkVG9UaGlzIiwgInVuYXR0YWNoZWQiLCAiZ2VuZGVyIiwgIl9pdGVyYXRvcjE4IiwgIl9zdGVwMTgiLCAiX2l0ZXJhdG9yMTkiLCAiX3N0ZXAxOSIsICJyZWdpc3RyYXRpb24iLCAiX3VzZXIkZWRpdGNvdW50IiwgImVkaXRjb3VudCIsICJ1c2VyY29udHJpYnMiLCAiYmxvY2tzIiwgInJic3RyIiwgInJhbmdlc3RhcnQiLCAicmFuZ2VlbmQiLCAicmVzdHJpY3Rpb25zIiwgInNwbGljZSIsICJfbmF2cG9wIiwgImVkaXRzIiwgInNldHVwRGVidWdnaW5nIiwgInBvcHVwRGVidWciLCAiY29uc29sZSIsICJwb3B1cHNJbnNlcnRJbWFnZSIsICJpbWFnZWluZm8iLCAiaW1hZ2VwYWdlIiwgInRodW1idXJsIiwgInNyYyIsICJtaW1lIiwgImRlc2NyaXB0aW9udXJsIiwgInRvZ2dsZVNpemUiLCAidG9nZ2xlU2l6ZTIiLCAiaW1nIiwgImZpcnN0Q2hpbGQiLCAibWF0Y2hlZCIsICJyZW1vdmVNYXRjaGVzVW5sZXNzIiwgInJlMSIsICJwYXJlbmNvdW50IiwgInJlMiIsICJzZXROYW1lc3BhY2VzIiwgInNldFJlZGlycyIsICJSIiwgInJlZGlyTGlzdHMiLCAiYXIiLCAiYmUiLCAiYmciLCAiYnMiLCAiYm4iLCAiY3MiLCAiY3kiLCAiZGUiLCAiZW8iLCAiZXMiLCAiZXQiLCAiZ2EiLCAiZ2wiLCAiaGUiLCAiaHUiLCAiaXMiLCAiaXQiLCAiamEiLCAibWsiLCAibmRzIiwgIm5sIiwgIm5uIiwgInBsIiwgInB0IiwgInJ1IiwgInNrIiwgInNyIiwgInR0IiwgInVrIiwgInZpIiwgInlpIiwgInpoIiwgInJlZGlyTGlzdCIsICJzZXRJbnRlcndpa2kiLCAid2lraW1lZGlhIiwgIm5zUmUiLCAiaW1hZ2VOYW1lc3BhY2VWYXJpYW50cyIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzMiIsICJfbG9jYWxpemVkTmFtZXNwYWNlTGMiLCAiX25hbWVzcGFjZUlkIiwgIm5zUmVJbWFnZSIsICJnZXRFZGl0Ym94U2VsZWN0aW9uIiwgInNlbGVjdGlvbiIsICJjcmVhdGVSYW5nZSIsICJzZWxTdGFydCIsICJzZWxlY3Rpb25TdGFydCIsICJzZWxFbmQiLCAic2VsZWN0aW9uRW5kIiwgInNlbCIsICJwaXBlIiwgImRvU2VwYXJhdGVTZWxlY3Rpb25Qb3B1cCIsICJNb3VzZXRyYWNrZXIiLCAibG9vcERlbGF5IiwgImFjdGl2ZSIsICJob29rcyIsICJydW5Ib29rcyIsICJyZW1vdmVPYmoiLCAicmVtb3ZlSG9va3MiLCAibmV3SG9va3MiLCAidHJhY2siLCAicGFnZVgiLCAicGFnZVkiLCAiZG9jRWx0IiwgImRvY3VtZW50RWxlbWVudCIsICJzY3JvbGxMZWZ0IiwgInNjcm9sbFRvcCIsICJzZXRQb3NpdGlvbiIsICJsYXN0SG9va194IiwgImxhc3RIb29rX3kiLCAiZW5hYmxlIiwgInNhdmVkTGlzdGVuZXIiLCAidWlkIiwgIm5vc2hvdyIsICJjcmVhdGUiLCAidW5oaWRlIiwgImhpZGUiLCAiaG9va0lkcyIsICJkb3dubG9hZHMiLCAiY29uc3RyYWluZWQiLCAiaGVpZ2h0IiwgImNyZWF0ZU1haW5EaXYiLCAicmVwb3NpdGlvbiIsICJub0xpbWl0SG9yIiwgInRvb1dpZGUiLCAidXBkYXRlRGltZW5zaW9ucyIsICJjV2lkdGgiLCAiY2xpZW50V2lkdGgiLCAibmF0dXJhbFdpZHRoIiwgIm5ld0xlZnQiLCAicmFpc2UiLCAiekluZGV4IiwgImhpZ2hlc3QiLCAic2hvdyIsICJ0aW1lIiwgInN0YWJsZV94IiwgInN0YWJsZV95IiwgInN0YWJsZVNob3ciLCAibmV3X3giLCAibmV3X3kiLCAiZHgiLCAiZHkiLCAiZnV6ejIiLCAic2hvd1Nvb25TdGFibGVUaW1lciIsICJrZXlIb29rcyIsICJSZWZsZWN0IiwgImFwcGx5IiwgImhvb2siLCAiaG9va0lkIiwgIl90aGlzJGNsYXNzTmFtZSIsICJvbmNsaWNrTGlzdGVuZXIiLCAicG9zaXRpb24iLCAibWluV2lkdGgiLCAiaGFuZGxlTmFtZSIsICJzaGlmdEtleSIsICJhYm9ydERvd25sb2FkcyIsICJvZmZzZXRIZWlnaHQiLCAiX2l0ZXJhdG9yMjAiLCAiX3N0ZXAyMCIsICJkZWxGbXQiLCAiaW5zRm10IiwgImNvdW50Q3Jvc3NpbmdzIiwgImVqZWN0IiwgInJvdyIsICJfaXRlcmF0b3IyMSIsICJfc3RlcDIxIiwgInNob3J0ZW5EaWZmU3RyaW5nIiwgInNob3J0ZW5EaWZmU3RyaW5nMiIsICJjb250ZXh0IiwgImRpZmZTdHJpbmciLCAib1NwbGl0dGVkIiwgIm5TcGxpdHRlZCIsICJvdXQiLCAiYWNjIiwgIm1heE91dHB1dFBhaXIiLCAicGFpcmVkIiwgImpzUmVzZXJ2ZWRQcm9wZXJ0aWVzIiwgImRpZmZCdWdBbGVydCIsICJkaWZmQnVnQWxlcnQyIiwgIndvcmQiLCAibWFrZURpZmZIYXNodGFibGUiLCAib3MiLCAic2V0U2l0ZUluZm8iLCAicG9wdXBMb2NhbERlYnVnIiwgImhvc3RuYW1lIiwgIndpa2lhIiwgImlzTG9jYWwiLCAic3RhcnRzV2l0aCIsICJjb21tb25zIiwgInBvcnQiLCAic2l0ZWJhc2UiLCAic2V0VXNlckluZm8iLCAidXN1c2VycyIsICJ1c3Byb3AiLCAiY2FuUmV2aWV3IiwgInJpZ2h0cyIsICJmZXRjaFNwZWNpYWxQYWdlTmFtZXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibWF4YWdlIiwgIm1ldGEiLCAic2lwcm9wIiwgInVzZWxhbmciLCAic3BlY2lhbHBhZ2VhbGlhc2VzIiwgInNldFRpdGxlQmFzZSIsICJwcm90b2NvbCIsICJib3RJbnRlcmZhY2VQYXRoIiwgIkFQSVBhdGgiLCAidGl0bGV0YWlsIiwgIndpa2liYXNlIiwgInNldE1haW5SZWdleCIsICJyZVN0YXJ0IiwgInByZVRpdGxlcyIsICJyZUVuZCIsICJidWlsZFNwZWNpYWxQYWdlR3JvdXAiLCAic3BlY2lhbFBhZ2VPYmoiLCAidmFyaWFudHMiLCAicmVhbG5hbWUiLCAiX2l0ZXJhdG9yMjIiLCAiYWxpYXNlcyIsICJfc3RlcDIyIiwgImFsaWFzIiwgInNldFJlZ2V4cHMiLCAiX2l0ZXJhdG9yMjMiLCAiX3N0ZXAyMyIsICJzcGVjaWFscGFnZSIsICJpbSIsICJfdGVtcGxhdGVPYmplY3Q0IiwgIl90ZW1wbGF0ZU9iamVjdDUiLCAic2V0dXBDYWNoZSIsICJzZXRNaXNjIiwgImNsaWVudCIsICJzZXR1cFBvcHVwczIiLCAiY29tcGxldGVkIiwgInNldE9wdGlvbnMiLCAiZGVmYXVsdE5hdmxpbmtTcGVjIiwgIl9oaW50IiwgImV4cGFuZENvbmRpdGlvbmFsTmF2bGlua1N0cmluZyIsICJleHBhbmRDb25kaXRpb25hbE5hdmxpbmtTdHJpbmcyIiwgInJlY3Vyc2lvbkNvdW50IiwgImNvbmRpdGlvbmFsU3BsaXRSZWdleCIsICJudW1QYXJlbnMiLCAidGVzdFN0cmluZyIsICJ0cnVlU3RyaW5nIiwgImZhbHNlU3RyaW5nIiwgInRlc3RSZXN1bHQiLCAibmF2bGlua1N0cmluZ1RvQXJyYXkiLCAiX2l0ZXJhdG9yMjQiLCAiX3N0ZXAyNCIsICJuYXZsaW5rVGFnIiwgInNzIiwgInNzcyIsICJuYXZsaW5rU3Vic3RpdHV0ZUhUTUwiLCAibmF2bGlua0RlcHRoIiwgIm1hZ2ljIiwgIm1lbnVkZXB0aCIsICJtZW51cm93ZGVwdGgiLCAiX2l0ZXJhdG9yMjUiLCAiX3N0ZXAyNSIsICJnZXROZXdXaW4iLCAiZ2V0UHJpbnRGdW5jdGlvbiIsICJ0YWdUeXBlIiwgInByaW50IiwgInNob3J0Y3V0IiwgImFkZFBvcHVwU2hvcnRjdXQiLCAicG9wdXBMaW5rc05ld1dpbmRvdyIsICJuZXdXaW4iLCAibm9Qb3B1cCIsICJzcGVjaWFsTGluayIsICJtYWdpY1dhdGNoTGluayIsICJ0aXRsZWRXaWtpTGluayIsICJfcGckY3VycmVudCRsaW5rJG9yaWciLCAiYXJpbkxpbmsiLCAiZWRpdENvdW50ZXJMaW5rIiwgImVkaXRvckxpc3RMaW5rIiwgInRpdGxlZERpZmZMaW5rIiwgIm1hZ2ljSGlzdG9yeUxpbmsiLCAic2ltcGxlUG9wdXBzIiwgInBvcHVwTWVudUxpbmsiLCAicG9wdXBIYW5kbGVLZXlwcmVzcyIsICJwb3B1cEhhbmRsZUtleXByZXNzMiIsICJfZXZ0JGtleUNvZGUiLCAia2V5Q29kZSIsICJ3aGljaCIsICJsZXR0ZXIiLCAiZnJvbUNvZGVQb2ludCIsICJzdGFydExpbmsiLCAibGFzdFBvcHVwTGlua1NlbGVjdGVkIiwgInByZXZlbnREZWZhdWx0IiwgImZvY3VzIiwgIm9sZFBvcHVwT25rZXlwcmVzcyIsICJvbmtleXByZXNzIiwgImFkZExpbmtQcm9wZXJ0eSIsICJwcm9wZXJ0eSIsICJkaWZmRGF0YSIsICJvbGRSZXYiLCAibmV3UmV2IiwgImFwaTIiLCAiZnJvbXRpdGxlIiwgInRvcmVsYXRpdmUiLCAiZnJvbXJldiIsICJ0b3JldiIsICJjb21wYXJlIiwgImZyb21yZXZpZCIsICJ0b3JldmlkIiwgImFkZFJldmlld0xpbmsiLCAiZG9uZURpZmYiLCAicmV2aWRzIiwgInN0YWJsZV9yZXZpZCIsICJmbGFnZ2VkIiwgInBhcmFtczIiLCAicG9zdFdpdGhUb2tlbiIsICJmYWlsIiwgIl9pdGVyYXRvcjI2IiwgIl9zdGVwMjYiLCAiX2kzIiwgIl9yZXZpc2lvbnMiLCAicmV2aXNpb24iLCAiaW5zZXJ0RGlmZiIsICJybUJvcmluZ0xpbmVzIiwgImFhYSIsICJiYiIsICJiYmIiLCAic3RyaXBPdXRlckNvbW1vbkxpbmVzIiwgIm9sZGxpbmVzIiwgIm5ld2xpbmVzIiwgImlubmVyIiwgInRydW5jYXRlZCIsICJwb3B1cERpZmZNYXhMaW5lcyIsICJwb3B1cERpZmZDb250ZXh0TGluZXMiLCAibGluZURpZmYiLCAibGluZXMyIiwgIm9sZGxpbmVzMiIsICJuZXdsaW5lczIiLCAiZGlmZkRhdGVzVGFibGUiLCAiZGlmZkRhdGVzVGFibGVSb3ciLCAibGFiZWwiLCAibGFzdE1vZGlmaWVkRGF0ZSIsICJyZXZsaW5rIiwgImdlbmVyYWxMaW5rIiwgImFjdGlvbk5hbWUiLCAic2F2ZWRPbGRpZCIsICJvbGRpZERhdGEiLCAicmV2aXNpb25TdHJpbmciLCAicmV2ZXJ0U3VtbWFyeSIsICJiYXNlIiwgImNzc0NsYXNzIiwgImRlZmF1bHROYXZsaW5rQ2xhc3NuYW1lIiwgImdlbmVyYWxOYXZMaW5rIiwgImdldExhc3RDb250cmliIiwgIndpa2lwYWdlIiwgImdldEhpc3RvcnlJbmZvIiwgInByb2Nlc3NMYXN0Q29udHJpYkluZm8iLCAiZmlyc3ROZXdFZGl0b3IiLCAiZWRpdG9yIiwgIm5ld1VybCIsICJkaXNwbGF5VXJsIiwgImdldERpZmZTaW5jZU15RWRpdCIsICJwcm9jZXNzRGlmZlNpbmNlTXlFZGl0IiwgImZyaWVuZGx5TmFtZSIsICJteUxhc3RFZGl0IiwgInB1cmdlUG9wdXBzIiwgInByb2Nlc3NBbGxQb3B1cHMiLCAibnVsbGlmeSIsICJkaXNhYmxlUG9wdXBzIiwgInRvZ2dsZVByZXZpZXdzIiwgIm1hZ2ljV2F0Y2hMaW5rMiIsICJfdGVtcGxhdGVPYmplY3Q2IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicmVxRGF0YSIsICJ0aXRsZXMiLCAidW53YXRjaCIsICJtd1RpdGxlIiwgIm5ld0Zyb21UZXh0IiwgIm1lc3NhZ2VOYW1lIiwgImdldE5hbWVzcGFjZUlkIiwgInBhcnNlRG9tIiwgIl94MiIsICJfeDMiLCAiYXJndW1lbnRzIiwgImpzVXJsIiwgIm9uQ2xpY2siLCAiX3RlbXBsYXRlT2JqZWN0NyIsICJfdGVtcGxhdGVPYmplY3Q4IiwgImFwcGVuZFBhcmFtc1RvTGluayIsICJsaW5rc3RyIiwgImNBIiwgImNocyIsICJjdXJyZW50QXJ0aWNsZVJlZ2V4Qml0IiwgIl90ZW1wbGF0ZU9iamVjdDkiLCAiX3RlbXBsYXRlT2JqZWN0MTAiLCAiX3RlbXBsYXRlT2JqZWN0MTEiLCAiX3RlbXBsYXRlT2JqZWN0MTIiLCAibGsiLCAiYWxzb0NoYW5nZUxhYmVsIiwgInNhbmVMaW5rQ2hlY2siLCAidU4iLCAidG9vbERiTmFtZSIsICJjb29raWVTdHlsZSIsICJ0b29sIiwgImRlZmF1bHRUb29sVXJsIiwgInRoZVdpa2kiLCAid2hhdE5leHQiLCAiZ2V0SGlzdG9yeSIsICJwcm9jZXNzSGlzdG9yeSIsICJfaXRlcmF0b3IyNyIsICJfc3RlcDI3IiwgImZpbmlzaFByb2Nlc3NIaXN0b3J5IiwgImhpc3RJbmZvIiwgInByZXZpZCIsICJkZWZhdWx0aXplIiwgIm5ld09wdGlvbiIsICJkZWYiLCAidmFyTmFtZSIsICJ1c2VySXNTeXNvcCIsICJnIiwgImhvdXIxMiIsICJfdGVtcGxhdGVPYmplY3QxMyIsICJlZGl0Q291bnRlckxpbmtIaW50IiwgImFyaW4iLCAib24iLCAib25jZSIsICJkeW5hbWljQ29udGVudEhhbmRsZXIiLCAiJGNvbnRlbnQiLCAicmVnaXN0ZXJIb29rc0ZvclZpc2libGVOYXZwb3BzIiwgImRvSXQiLCAiZWFjaCIsICJfaW5kZXgiLCAiYWRkIiwgIiRvdmVybGF5Il0KfQo=
