/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title1=Cat-a-lot.js|license=CC-BY-SA-4.0}}'
 *
 * Cat-a-lot
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js}
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Cat-a-lot/modules/core.ts}
 * @author Magnus Manske, Ilmari Karonen, DieBuche, 安忆 <i@anyi.in>
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title2=Cat-a-lot Messages|license2=CC-BY-SA-4.0}}'
 *
 * Cat-a-lot messages
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js/zh-hans}
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js/zh-hant}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Cat-a-lot/modules/messages.ts}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=jQuery checkboxShiftClick|license3=CC-BY-SA-4.0}}'
 *
 * jQuery checkboxShiftClick
 *
 * @description This will enable checkboxes to be checked or unchecked in a row by clicking one, holding shift and clicking another one
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Cat-a-lot/modules/extendJQueryPrototype.ts}
 * @author Krinkle <krinklemail@gmail.com>
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * Hereby releasing jquery.checkboxShiftClick into CC BY-SA 3.0,
 * CC BY 4.0, CC-0 and for all intends and purpose in the public
 * domain, so as to not need this annotation.
 *
 * @source {@link https://commons.wikimedia.org/w/index.php?oldid=365723751}
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

// dist/Cat-a-lot/Cat-a-lot.js
var _templateObject;
var _templateObject2;
var _templateObject3;
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/Cat-a-lot/options.json
var apiTag = "Cat-a-lot";
var targetNamespace = 14;
var version = "6.0";
var storageKey = "ext.gadget.Cat-a-Lot_results-";
//! src/Cat-a-lot/modules/constant.ts
var CLASS_NAME = "gadget-cat_a_lot";
var CLASS_NAME_CONTAINER = "".concat(CLASS_NAME, "-container");
var CLASS_NAME_CONTAINER_DATA = "".concat(CLASS_NAME_CONTAINER, "__data");
var CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST = "".concat(CLASS_NAME_CONTAINER_DATA, "__category-list");
var CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION = "".concat(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST, "__action");
var CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_NO_FOUND = "".concat(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST, "--no-found");
var CLASS_NAME_CONTAINER_DATA_MARK_COUNTER = "".concat(CLASS_NAME_CONTAINER_DATA, "__mark-counter");
var CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT = "".concat(CLASS_NAME_CONTAINER_DATA, "__search-input-container__input");
var CLASS_NAME_CONTAINER_DATA_SELECTIONS = "".concat(CLASS_NAME_CONTAINER_DATA, "__selections");
var CLASS_NAME_CONTAINER_DATA_SELECTIONS_ALL = "".concat(CLASS_NAME_CONTAINER_DATA_SELECTIONS, "__all");
var CLASS_NAME_CONTAINER_DATA_SELECTIONS_NONE = "".concat(CLASS_NAME_CONTAINER_DATA_SELECTIONS, "__none");
var CLASS_NAME_CONTAINER_HEAD = "".concat(CLASS_NAME_CONTAINER, "__head");
var CLASS_NAME_CONTAINER_HEAD_LINK = "".concat(CLASS_NAME_CONTAINER_HEAD, "__link");
var CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED = "".concat(CLASS_NAME_CONTAINER_HEAD_LINK, "--enabled");
var CLASS_NAME_CURRENT_COUNTER = "".concat(CLASS_NAME, "-current_counter");
var CLASS_NAME_FEEDBACK = "".concat(CLASS_NAME, "-feedback");
var CLASS_NAME_FEEDBACK_DONE = "".concat(CLASS_NAME_FEEDBACK, "--done");
var CLASS_NAME_LABEL = "".concat(CLASS_NAME, "-label");
var CLASS_NAME_LABEL_DONE = "".concat(CLASS_NAME_LABEL, "--done");
var CLASS_NAME_LABEL_LAST_SELECTED = "".concat(CLASS_NAME_LABEL, "--last-selected");
var CLASS_NAME_LABEL_SELECTED = "".concat(CLASS_NAME_LABEL, "--selected");
var DEFAULT_SETTING = {
  docleanup: {
    default: false,
    label_i18n: "docleanuppref"
  },
  editpages: {
    default: true,
    label_i18n: "editpagespref"
  },
  minor: {
    default: false,
    label_i18n: "minorpref"
  },
  subcatcount: {
    default: 50,
    label_i18n: "subcatcountpref"
  },
  watchlist: {
    default: "preferences",
    label_i18n: "watchlistpref",
    select_i18n: {
      watch_nochange: "nochange",
      watch_pref: "preferences",
      watch_unwatch: "unwatch",
      watch_watch: "watch"
    }
  }
};
var VARIANTS = ["zh-hans", "zh-hant", "zh-cn", "zh-my", "zh-sg", "zh-hk", "zh-mo", "zh-tw"];
//! src/Cat-a-lot/modules/messages.ts
var {
  wgUserLanguage
} = mw.config.get();
var DEFAULT_MESSAGES = {
  // as in 17 files selected
  "cat-a-lot-files-selected": "{{PLURAL:$1|One file|$1 files}} selected.",
  // Actions
  "cat-a-lot-copy": "Copy",
  "cat-a-lot-move": "Move",
  "cat-a-lot-add": "Add",
  "cat-a-lot-remove-from-cat": "Remove from this category",
  "cat-a-lot-enter-name": "Enter category name",
  "cat-a-lot-select": "Select",
  "cat-a-lot-all": "all",
  "cat-a-lot-none": "none",
  "cat-a-lot-none-selected": "No files selected!",
  // Preferences
  "cat-a-lot-watchlistpref": "Watchlist preference concerning files edited with Cat-A-Lot",
  "cat-a-lot-watch_pref": "According to your general preferences",
  "cat-a-lot-watch_nochange": "Do not change watchstatus",
  "cat-a-lot-watch_watch": "Watch pages edited with Cat-A-Lot",
  "cat-a-lot-watch_unwatch": "Remove pages while editing with Cat-A-Lot from your watchlist",
  "cat-a-lot-minorpref": "Mark edits as minor (if you generally mark your edits as minor, this won't change anything)",
  "cat-a-lot-editpagespref": "Allow categorising pages (including categories) that are not files",
  "cat-a-lot-docleanuppref": "Remove {{Check categories}} and other minor cleanup",
  "cat-a-lot-subcatcountpref": "Sub-categories to show at most",
  // Progress
  "cat-a-lot-loading": "Loading...",
  "cat-a-lot-editing": "Editing page",
  "cat-a-lot-of": "of ",
  "cat-a-lot-skipped-already": "The following {{PLURAL:$1|page was|$1 pages were}} skipped, because the page was already in the category:",
  "cat-a-lot-skipped-not-found": "The following {{PLURAL:$1|page was|$1 pages were}} skipped, because the old category could not be found:",
  "cat-a-lot-skipped-server": "The following {{PLURAL:$1|page|$1 pages}} couldn't be changed, since there were problems connecting to the server:",
  "cat-a-lot-all-done": "All pages are processed.",
  "cat-a-lot-done": "Done!",
  "cat-a-lot-added-cat": "Added category $1",
  "cat-a-lot-copied-cat": "Copied to category $1",
  "cat-a-lot-moved-cat": "Moved to category $1",
  "cat-a-lot-removed-cat": "Removed from category $1",
  "cat-a-lot-return-to-page": "Return to page",
  "cat-a-lot-cat-not-found": "Category not found.",
  // Summaries:
  "cat-a-lot-summary-add": "[[Help:Cat-a-lot|Cat-a-lot]]: Adding [[Category:$1]]",
  "cat-a-lot-summary-copy": "[[Help:Cat-a-lot|Cat-a-lot]]: Copying from [[Category:$1]] to [[Category:$2]]",
  "cat-a-lot-summary-move": "[[Help:Cat-a-lot|Cat-a-lot]]: Moving from [[Category:$1]] to [[Category:$2]]",
  "cat-a-lot-summary-remove": "[[Help:Cat-a-lot|Cat-a-lot]]: Removing from [[Category:$1]]"
};
var setMessages = () => {
  /*! Cat-a-lot messages | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
  if (wgUserLanguage === "en") {
    return;
  }
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(wgUserLanguage)) {
    mw.messages.set({
      // as in 17 files selected
      "cat-a-lot-files-selected": "$1個文件已選擇",
      // Actions
      "cat-a-lot-copy": "複製",
      "cat-a-lot-move": "移動",
      "cat-a-lot-add": "增加",
      "cat-a-lot-remove-from-cat": "從此分類移除",
      "cat-a-lot-enter-name": "輸入分類名稱",
      "cat-a-lot-select": "選擇",
      "cat-a-lot-all": "全部",
      "cat-a-lot-none": "無",
      "cat-a-lot-none-selected": "沒有選擇文件！",
      // Preferences
      "cat-a-lot-watchlistpref": "使用Cat-A-Lot編輯文件時的監視列表選項",
      "cat-a-lot-watch_pref": "與系統參數設置相同",
      "cat-a-lot-watch_nochange": "不要更改監視狀態",
      "cat-a-lot-watch_watch": "監視使用Cat-A-Lot編輯的頁面",
      "cat-a-lot-watch_unwatch": "將使用Cat-A-Lot編輯的頁面從監視列表移除",
      "cat-a-lot-minorpref": "將編輯標記爲小修改（若您在系統參數設置中已設置將所有編輯標記爲小修改，此選項不會對現有行爲進行改動）",
      "cat-a-lot-editpagespref": "允許對不是文件的頁面和子分類進行分類操作",
      "cat-a-lot-docleanuppref": "移除{{Check categories}}並進行其他細節清理",
      "cat-a-lot-subcatcountpref": "最多顯示的子分類數量",
      // Progress
      "cat-a-lot-loading": "正在加載……",
      "cat-a-lot-editing": "正在編輯頁面",
      "cat-a-lot-of": "，共有",
      "cat-a-lot-skipped-already": "以下頁面已跳過，因爲頁面已經在分類中：",
      "cat-a-lot-skipped-not-found": "以下頁面已跳過，因爲找不到現有分類：",
      "cat-a-lot-skipped-server": "以下頁面無法編輯，因爲連接服務器出錯：",
      "cat-a-lot-all-done": "全部頁面已處理。",
      "cat-a-lot-done": "已完成！",
      "cat-a-lot-added-cat": "已加入分類",
      "cat-a-lot-copied-cat": "已複製到分類",
      "cat-a-lot-moved-cat": "已移動到分類",
      "cat-a-lot-removed-cat": "已從分類移除",
      "cat-a-lot-return-to-page": "返回到頁面",
      "cat-a-lot-cat-not-found": "找不到分類。",
      // Summaries
      "cat-a-lot-summary-add": "[[Help:Cat-a-lot|Cat-a-lot]]：加入分類[[Category:$1]]",
      "cat-a-lot-summary-copy": "[[Help:Cat-a-lot|Cat-a-lot]]：分類間複製：從[[Category:$1]]到[[Category:$2]]",
      "cat-a-lot-summary-move": "[[Help:Cat-a-lot|Cat-a-lot]]：分類間移動：從[[Category:$1]]到[[Category:$2]]",
      "cat-a-lot-summary-remove": "[[Help:Cat-a-lot|Cat-a-lot]]：從分類移除：[[Category:$1]]"
    });
  } else {
    mw.messages.set({
      // as in 17 files selected
      "cat-a-lot-files-selected": "已选择$1个页面或文件",
      // Actions
      "cat-a-lot-copy": "复制",
      "cat-a-lot-move": "移动",
      "cat-a-lot-add": "增加",
      "cat-a-lot-remove-from-cat": "从此分类移除",
      "cat-a-lot-enter-name": "输入分类名称",
      "cat-a-lot-select": "选择",
      "cat-a-lot-all": "全部",
      "cat-a-lot-none": "无",
      "cat-a-lot-none-selected": "没有选择任何页面或文件！",
      // Preferences
      "cat-a-lot-watchlistpref": "使用Cat-a-lot编辑文件时的监视列表选项",
      "cat-a-lot-watch_pref": "与系统参数设置相同",
      "cat-a-lot-watch_nochange": "不要更改监视状态",
      "cat-a-lot-watch_watch": "监视使用Cat-a-lot编辑的页面",
      "cat-a-lot-watch_unwatch": "将使用Cat-a-lot编辑的页面从监视列表移除",
      "cat-a-lot-minorpref": "将编辑标记为小修改（若您在系统参数设置中已设置将所有编辑标记为小修改，此选项不会对现有行为进行改动）",
      "cat-a-lot-editpagespref": "允许对不是文件的页面和子分类进行分类操作",
      "cat-a-lot-docleanuppref": "移除{{Check categories}}并进行其他细节清理",
      "cat-a-lot-subcatcountpref": "最多显示的子分类数量",
      // Progress
      "cat-a-lot-loading": "正在加载……",
      "cat-a-lot-editing": "正在编辑页面",
      "cat-a-lot-of": "，共有",
      "cat-a-lot-skipped-already": "以下页面已跳过，因为页面已经在分类中：",
      "cat-a-lot-skipped-not-found": "以下页面已跳过，因为找不到现有分类：",
      "cat-a-lot-skipped-server": "以下页面无法编辑，因为连接服务器出错：",
      "cat-a-lot-all-done": "全部页面已处理。",
      "cat-a-lot-done": "已完成！",
      "cat-a-lot-added-cat": "已加入分类",
      "cat-a-lot-copied-cat": "已复制到分类",
      "cat-a-lot-moved-cat": "已移动到分类",
      "cat-a-lot-removed-cat": "已从分类移除",
      "cat-a-lot-return-to-page": "返回到页面",
      "cat-a-lot-cat-not-found": "找不到分类。",
      // Summaries
      "cat-a-lot-summary-add": "[[Help:Cat-a-lot|Cat-a-lot]]：加入分类[[Category:$1]]",
      "cat-a-lot-summary-copy": "[[Help:Cat-a-lot|Cat-a-lot]]：分类间复制：从[[Category:$1]]到[[Category:$2]]",
      "cat-a-lot-summary-move": "[[Help:Cat-a-lot|Cat-a-lot]]：分类间移动：从[[Category:$1]]到[[Category:$2]]",
      "cat-a-lot-summary-remove": "[[Help:Cat-a-lot|Cat-a-lot]]：从分类移除：[[Category:$1]]"
    });
  }
};
//! src/Cat-a-lot/modules/core.tsx
var import_ext_gadget2 = require("ext.gadget.Util");
var import_ext_gadget3 = __toESM(require("ext.gadget.JSX"), 1);
//! src/Cat-a-lot/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("Cat-a-lot/".concat(version));
//! src/Cat-a-lot/modules/getCachedKeys.ts
var getCachedKeys = () => {
  const variantCache = {};
  for (var _i = 0, _Object$entries = Object.entries(mw.storage["store"]); _i < _Object$entries.length; _i++) {
    const [key, value] = _Object$entries[_i];
    if (key.startsWith(storageKey) && Array.isArray(value)) {
      const cacheKey = key.replace(storageKey, "");
      variantCache[cacheKey] = value;
    }
  }
  return variantCache;
};
//! src/Cat-a-lot/modules/core.tsx
var {
  wgCanonicalSpecialPageName,
  wgFormattedNamespaces,
  wgNamespaceIds,
  wgNamespaceNumber,
  wgTitle
} = mw.config.get();
var catALot = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* () {
    /*! Cat-a-lot | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
    class CAL {
      static isSearchMode = false;
      static MESSAGES = DEFAULT_MESSAGES;
      static DEFAULT_SETTING = DEFAULT_SETTING;
      static API_TAG = apiTag;
      static TARGET_NAMESPACE = targetNamespace;
      static CURRENT_CATEGROY = wgTitle;
      static wgFormattedNamespaces = wgFormattedNamespaces;
      static wgNamespaceIds = wgNamespaceIds;
      static isAutoCompleteInit = false;
      static api = api;
      static alreadyThere = [];
      static connectionError = [];
      static notFound = [];
      static counterCurrent = 0;
      static counterNeeded = 0;
      static counterCat = 0;
      static currentCategory = "";
      static dialogHeight = 450;
      static editToken = "";
      static localCatName = wgFormattedNamespaces[CAL.TARGET_NAMESPACE];
      static parentCats = [];
      static subCats = [];
      static settings = {};
      static variantCache = {};
      // Rate limiting: set to 1000 ms for ~1 request per second
      static requestDelay = 1e3;
      static requestQueue = [];
      static processingQueue = false;
      static lastStart = 0;
      static enqueueApiCall(fn) {
        return new Promise((resolve, reject) => {
          CAL.requestQueue.push({
            fn,
            resolve,
            reject
          });
          if (!CAL.processingQueue) {
            CAL.processingQueue = true;
            void CAL.processQueue();
          }
        });
      }
      static processQueue() {
        return _asyncToGenerator(function* () {
          while (CAL.requestQueue.length) {
            const {
              fn,
              resolve,
              reject
            } = CAL.requestQueue.shift();
            const now = Date.now();
            const wait = Math.max(0, CAL.requestDelay - (now - CAL.lastStart));
            if (wait) {
              yield new Promise((r) => setTimeout(r, wait));
            }
            CAL.lastStart = Date.now();
            try {
              const res = yield fn();
              resolve(res);
            } catch (e) {
              reject(e);
            }
          }
          CAL.processingQueue = false;
        })();
      }
      static $counter = $();
      static $progressDialog = $();
      static $labels = $();
      static $selectedLabels = $();
      $body;
      $container;
      $dataContainer;
      $markCounter;
      $resultList;
      $searchInput;
      $head;
      $link;
      constructor($body) {
        var _mw$util$getParamValu;
        if (!mw.message("cat-a-lot-loading").parse()) {
          mw.messages.set(CAL.MESSAGES);
        }
        this.$body = $body;
        CAL.initSettings();
        const container = /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
          className: [CLASS_NAME, CLASS_NAME_CONTAINER, "noprint"]
        }, /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
          className: CLASS_NAME_CONTAINER_DATA
        }, /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
          className: CLASS_NAME_CONTAINER_DATA_MARK_COUNTER
        }), /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
          className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST
        }), /* @__PURE__ */ import_ext_gadget3.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget3.default.createElement("input", {
          className: CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT,
          placeholder: CAL.msg("enter-name"),
          type: "text",
          value: CAL.isSearchMode ? (_mw$util$getParamValu = mw.util.getParamValue("search")) !== null && _mw$util$getParamValu !== void 0 ? _mw$util$getParamValu : "" : "",
          onKeyDown: (event) => {
            const $element = $(event.currentTarget);
            if (event.key === "Enter") {
              var _$element$val$trim, _$element$val;
              const cat = (_$element$val$trim = (_$element$val = $element.val()) === null || _$element$val === void 0 ? void 0 : _$element$val.trim()) !== null && _$element$val$trim !== void 0 ? _$element$val$trim : "";
              if (cat) {
                this.updateCats(cat);
              }
            }
          }
        })), /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
          className: CLASS_NAME_CONTAINER_DATA_SELECTIONS
        }, [CAL.msg("select"), " "], /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
          className: CLASS_NAME_CONTAINER_DATA_SELECTIONS_ALL,
          onClick: () => {
            this.toggleAll(true);
          }
        }, CAL.msg("all")), " • ", /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
          className: CLASS_NAME_CONTAINER_DATA_SELECTIONS_NONE,
          onClick: () => {
            this.toggleAll(false);
          }
        }, CAL.msg("none")))), /* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
          className: CLASS_NAME_CONTAINER_HEAD
        }, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
          className: CLASS_NAME_CONTAINER_HEAD_LINK
        }, "Cat-a-lot")));
        this.$container = $(container);
        this.$container.appendTo(this.$body);
        this.$dataContainer = this.$container.find(".".concat(CLASS_NAME_CONTAINER_DATA));
        this.$markCounter = this.$dataContainer.find(".".concat(CLASS_NAME_CONTAINER_DATA_MARK_COUNTER));
        this.$resultList = this.$dataContainer.find(".".concat(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST));
        this.$searchInput = this.$dataContainer.find(".".concat(CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT));
        this.$head = this.$container.find(".".concat(CLASS_NAME_CONTAINER_HEAD));
        this.$link = this.$head.find(".".concat(CLASS_NAME_CONTAINER_HEAD_LINK));
      }
      buildElements() {
        const regexCat = new RegExp("^\\s*".concat(CAL.localizedRegex(CAL.TARGET_NAMESPACE, "Category"), ":"), "");
        let isCompositionStart;
        this.$searchInput.on("compositionstart", () => {
          isCompositionStart = true;
        });
        this.$searchInput.on("compositionend", () => {
          isCompositionStart = false;
        });
        this.$searchInput.on("input keyup", (event) => {
          if (isCompositionStart) {
            return;
          }
          const {
            currentTarget
          } = event;
          const {
            value: oldVal
          } = currentTarget;
          const newVal = oldVal.replace(regexCat, "");
          if (newVal !== oldVal) {
            currentTarget.value = newVal;
          }
        });
        const initAutocomplete = () => {
          if (CAL.isAutoCompleteInit) {
            return;
          }
          CAL.isAutoCompleteInit = true;
          this.$searchInput.autocomplete({
            source: (request, response) => {
              this.doAPICall({
                action: "opensearch",
                namespace: CAL.TARGET_NAMESPACE,
                redirects: "resolve",
                search: request.term
              }, (result) => {
                if (result[1]) {
                  response($(result[1]).map((_index, item) => item.replace(regexCat, "")));
                }
              });
            },
            position: {
              my: "right bottom",
              at: "right top",
              of: this.$searchInput
            },
            appendTo: ".".concat(CLASS_NAME_CONTAINER)
          });
        };
        this.$link.on("click", (event) => {
          $(event.currentTarget).toggleClass(CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED);
          initAutocomplete();
          this.run();
        });
      }
      static initSettings() {
        var _window$CatALotPrefs;
        let catALotPrefs = (_window$CatALotPrefs = window.CatALotPrefs) !== null && _window$CatALotPrefs !== void 0 ? _window$CatALotPrefs : {};
        const typeOfCatALotPrefs = typeof catALotPrefs;
        if (typeOfCatALotPrefs === "object" && !Array.isArray(catALotPrefs) || typeOfCatALotPrefs !== "object") {
          catALotPrefs = {};
        }
        for (var _i2 = 0, _Object$keys = Object.keys(CAL.DEFAULT_SETTING); _i2 < _Object$keys.length; _i2++) {
          var _catALotPrefs$setting;
          const settingKey = _Object$keys[_i2];
          const setting = CAL.DEFAULT_SETTING[settingKey];
          CAL.settings[settingKey] = (_catALotPrefs$setting = catALotPrefs[settingKey]) !== null && _catALotPrefs$setting !== void 0 ? _catALotPrefs$setting : setting.default;
          if (!setting.select_i18n) {
            continue;
          }
          setting.select = {};
          for (var _i3 = 0, _Object$keys2 = Object.keys(setting.select_i18n); _i3 < _Object$keys2.length; _i3++) {
            const messageKey = _Object$keys2[_i3];
            const message = setting.select_i18n[messageKey];
            setting.select[CAL.msg(messageKey)] = message;
          }
        }
      }
      static msg(key, ...args) {
        const fullKey = "cat-a-lot-".concat(key);
        return args.length ? mw.message(fullKey, ...args).parse() : mw.message(fullKey).plain();
      }
      static localizedRegex(namespaceNumber, fallback) {
        var _CAL$wgFormattedNames;
        const wikiTextBlank = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["[	 _  ᠎ - \u2028\u2029  　]+"], ["[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+"])));
        const wikiTextBlankRE = new RegExp(wikiTextBlank, "g");
        const createRegexStr = (name) => {
          if (!(name !== null && name !== void 0 && name.length)) {
            return "";
          }
          let regexName = "";
          for (let i = 0; i < name.length; i++) {
            const initial = name.slice(i, i + 1);
            const ll = initial.toLowerCase();
            const ul = initial.toUpperCase();
            regexName += ll === ul ? initial : "[".concat(ll).concat(ul, "]");
          }
          return regexName.replace(/([$()*+.?\\^])/g, String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["$1"], ["\\$1"])))).replace(wikiTextBlankRE, wikiTextBlank);
        };
        fallback = fallback.toLowerCase();
        const canonical = (_CAL$wgFormattedNames = CAL.wgFormattedNamespaces[namespaceNumber]) === null || _CAL$wgFormattedNames === void 0 ? void 0 : _CAL$wgFormattedNames.toLowerCase();
        let regexString = createRegexStr(canonical);
        if (fallback && canonical !== fallback) {
          regexString += "|".concat(createRegexStr(fallback));
        }
        for (var _i4 = 0, _Object$keys3 = Object.keys(CAL.wgNamespaceIds); _i4 < _Object$keys3.length; _i4++) {
          const catName = _Object$keys3[_i4];
          if (catName.toLowerCase() !== canonical && catName.toLowerCase() !== fallback && CAL.wgNamespaceIds[catName] === namespaceNumber) {
            regexString += "|".concat(createRegexStr(catName));
          }
        }
        return "(?:".concat(regexString, ")");
      }
      updateSelectionCounter() {
        CAL.$selectedLabels = CAL.$labels.filter(".".concat(CLASS_NAME_LABEL_SELECTED));
        this.$markCounter.show().html(CAL.msg("files-selected", CAL.$selectedLabels.length.toString()));
      }
      toggleAll(select) {
        CAL.$labels.toggleClass(CLASS_NAME_LABEL_SELECTED, select);
        this.updateSelectionCounter();
      }
      static findAllVariants(category) {
        return _asyncToGenerator(function* () {
          if (CAL.variantCache[category] !== void 0 && Array.isArray(CAL.variantCache[category])) {
            return CAL.variantCache[category];
          }
          if (mw.storage.getObject(storageKey + category) !== void 0 && Array.isArray(mw.storage.getObject(storageKey + category))) {
            CAL.variantCache[category] = mw.storage.getObject(storageKey + category);
            return CAL.variantCache[category];
          }
          const results = [category];
          const params = {
            action: "parse",
            format: "json",
            formatversion: "2",
            text: '<ul id="cal-variants">\n	<li id="cal-zh">-{zh|'.concat(category, '}-</li>\n	<li id="cal-zh-hans">-{zh-hans|').concat(category, '}-</li>\n	<li id="cal-zh-hant">-{zh-hant|').concat(category, '}-</li>\n	<li id="cal-zh-cn">-{zh-cn|').concat(category, '}-</li>\n	<li id="cal-zh-hk">-{zh-hk|').concat(category, '}-</li>\n	<li id="cal-zh-mo">-{zh-mo|').concat(category, '}-</li>\n	<li id="cal-zh-my">-{zh-my|').concat(category, '}-</li>\n	<li id="cal-zh-sg">-{zh-sg|').concat(category, '}-</li>\n	<li id="cal-zh-tw">-{zh-tw|').concat(category, "}-</li>\n</ul>"),
            title: "temp",
            variant: "zh"
          };
          try {
            const {
              parse
            } = yield CAL.enqueueApiCall(() => CAL.api.get(params));
            const {
              text
            } = parse;
            const $parsed = $(text);
            for (var _i5 = 0, _VARIANTS = VARIANTS; _i5 < _VARIANTS.length; _i5++) {
              const variant = _VARIANTS[_i5];
              const $variantNode = $parsed.find("#cal-".concat(variant));
              if ($variantNode.length > 0) {
                results[results.length] = $variantNode.text();
              }
            }
          } catch {
          }
          CAL.variantCache[category] = (0, import_ext_gadget2.uniqueArray)(results);
          mw.storage.setObject(storageKey + category, CAL.variantCache[category], 60 * 60 * 24);
          return CAL.variantCache[category];
        })();
      }
      static regexBuilder(category) {
        return _asyncToGenerator(function* () {
          const catName = CAL.localizedRegex(CAL.TARGET_NAMESPACE, "Category");
          category = category.replace(/^[\s_]+/, "").replace(/[\s_]+$/, "");
          const variants = yield CAL.findAllVariants(category);
          const variantRegExps = [];
          var _iterator2 = _createForOfIteratorHelper(variants), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              let variant = _step2.value;
              variant = mw.util.escapeRegExp(variant);
              variant = variant.replace(/[\s_]+/g, String.raw(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["[s_]+"], ["[\\s_]+"]))));
              const first = variant.slice(0, 1);
              if (first.toUpperCase() !== first.toLowerCase()) {
                variant = "[".concat(first.toUpperCase()).concat(first.toLowerCase(), "]").concat(variant.slice(1));
              }
              variantRegExps[variantRegExps.length] = variant;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          return new RegExp("\\[\\[[\\s_]*".concat(catName, "[\\s_]*:[\\s_]*(?:").concat(variantRegExps.join("|"), ")[\\s_]*(\\|[^\\]]*(?:\\][^\\]]+)*)?\\]\\]"), "g");
        })();
      }
      doAPICall(_params, callback) {
        const params = _params;
        params["format"] = "json";
        params["formatversion"] = "2";
        let i = 0;
        const doCall = () => {
          const handleError = (error) => {
            mw.log.error("[Cat-a-lot] Ajax error:", error);
            if (i < 4) {
              setTimeout(doCall, 300);
              i++;
            } else if (params["title"]) {
              CAL.connectionError[CAL.connectionError.length] = params["title"];
              this.updateCounter();
            }
          };
          if (params["action"] === "query") {
            CAL.enqueueApiCall(() => CAL.api.get(params)).then(callback).catch(handleError);
          } else {
            CAL.enqueueApiCall(() => CAL.api.post(params)).then(callback).catch(handleError);
          }
        };
        doCall();
      }
      static markAsDone($markedLabel, targetCategory, mode) {
        $markedLabel.addClass(CLASS_NAME_LABEL_DONE);
        switch (mode) {
          case "add":
            $markedLabel.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null), CAL.msg("added-cat", targetCategory)));
            break;
          case "copy":
            $markedLabel.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null), CAL.msg("copied-cat", targetCategory)));
            break;
          case "move":
            $markedLabel.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null), CAL.msg("moved-cat", targetCategory)));
            break;
          case "remove":
            $markedLabel.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null), CAL.msg("removed-cat", targetCategory)));
            break;
        }
      }
      static doCleanup(text) {
        return CAL.settings.docleanup ? text.replace(/{{\s*[Cc]heck categories\s*(\|?.*?)}}/, "") : text;
      }
      // Remove {{Uncategorized}} (also with comment). No need to replace it with anything
      static removeUncat(text) {
        return text.replace(/\{\{\s*[Uu]ncategorized\s*(\|?.*?)\}\}/, "");
      }
      displayResult() {
        this.$body.css({
          cursor: "",
          overflow: ""
        });
        this.$body.find(".".concat(CLASS_NAME_FEEDBACK)).addClass(CLASS_NAME_FEEDBACK_DONE);
        const $parent = CAL.$counter.parent();
        $parent.html(/* @__PURE__ */ import_ext_gadget3.default.createElement("h3", null, CAL.msg("done")));
        $parent.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, CAL.msg("all-done"), /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null)));
        $parent.append(/* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
          onClick: () => {
            CAL.$progressDialog.remove();
            this.toggleAll(false);
          }
        }, CAL.msg("return-to-page")));
        if (CAL.alreadyThere.length) {
          $parent.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("h5", null, CAL.msg("skipped-already", CAL.alreadyThere.length.toString())), CAL.alreadyThere.reduce((pre, cur, index) => index < CAL.alreadyThere.length - 1 ? [...pre, cur, /* @__PURE__ */ import_ext_gadget3.default.createElement("br", {
            key: index
          })] : [...pre, cur], [])));
        }
        if (CAL.notFound.length) {
          $parent.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("h5", null, CAL.msg("skipped-not-found", CAL.notFound.length.toString())), CAL.notFound.reduce((pre, cur, index) => index < CAL.notFound.length - 1 ? [...pre, cur, /* @__PURE__ */ import_ext_gadget3.default.createElement("br", {
            key: index
          })] : [...pre, cur], [])));
        }
        if (CAL.connectionError.length) {
          $parent.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("h5", null, CAL.msg("skipped-server", CAL.connectionError.length.toString())), CAL.connectionError.reduce((pre, cur, index) => index < CAL.connectionError.length - 1 ? [...pre, cur, /* @__PURE__ */ import_ext_gadget3.default.createElement("br", {
            key: index
          })] : [...pre, cur], [])));
        }
      }
      updateCounter() {
        CAL.counterCurrent++;
        if (CAL.counterCurrent > CAL.counterNeeded) {
          this.displayResult();
        } else {
          CAL.$counter.text(CAL.counterCurrent);
        }
      }
      editCategories(result, markedLabel, targetCategory, mode) {
        var _this = this;
        return _asyncToGenerator(function* () {
          var _page$revisions;
          const [markedLabelTitle, $markedLabel] = markedLabel;
          if (!(result !== null && result !== void 0 && result["query"])) {
            CAL.connectionError[CAL.connectionError.length] = markedLabelTitle;
            _this.updateCounter();
            return;
          }
          let originText = "";
          let starttimestamp = 0;
          let timestamp = 0;
          CAL.editToken = result["query"].tokens.csrftoken;
          const {
            pages
          } = result["query"];
          const [page] = pages;
          originText = page === null || page === void 0 || (_page$revisions = page.revisions) === null || _page$revisions === void 0 ? void 0 : _page$revisions[0].slots.main.content;
          ({
            starttimestamp
          } = page);
          [{
            timestamp
          }] = page.revisions;
          const sourcecat = CAL.CURRENT_CATEGROY;
          const targeRegExp = yield CAL.regexBuilder(targetCategory);
          if (mode !== "remove" && targeRegExp.test(originText) && mode !== "move") {
            CAL.alreadyThere[CAL.alreadyThere.length] = markedLabelTitle;
            _this.updateCounter();
            return;
          }
          let text = originText;
          let summary;
          const sourceCatRegExp = yield CAL.regexBuilder(sourcecat);
          switch (mode) {
            case "add":
              text += "\n[[".concat(CAL.localCatName, ":").concat(targetCategory, "]]\n");
              summary = CAL.msg("summary-add").replace("$1", targetCategory);
              break;
            case "copy":
              text = text.replace(sourceCatRegExp, "[[".concat(CAL.localCatName, ":").concat(sourcecat, "$1]]\n[[").concat(CAL.localCatName, ":").concat(targetCategory, "$1]]"));
              summary = CAL.msg("summary-copy").replace("$1", sourcecat).replace("$2", targetCategory);
              if (originText === text) {
                text += "\n[[".concat(CAL.localCatName, ":").concat(targetCategory, "]]");
              }
              break;
            case "move":
              text = text.replace(sourceCatRegExp, "[[".concat(CAL.localCatName, ":").concat(targetCategory, "$1]]"));
              summary = CAL.msg("summary-move").replace("$1", sourcecat).replace("$2", targetCategory);
              break;
            case "remove":
              text = text.replace(sourceCatRegExp, "");
              summary = CAL.msg("summary-remove").replace("$1", sourcecat);
              break;
          }
          if (text === originText) {
            CAL.notFound[CAL.notFound.length] = markedLabelTitle;
            _this.updateCounter();
            return;
          }
          if (mode !== "remove") {
            text = CAL.doCleanup(CAL.removeUncat(text));
          }
          _this.doAPICall({
            action: "edit",
            token: CAL.editToken,
            tags: CAL.API_TAG,
            title: markedLabelTitle,
            assert: "user",
            bot: true,
            basetimestamp: timestamp,
            watchlist: CAL.settings.watchlist,
            text,
            summary,
            starttimestamp
          }, () => {
            _this.updateCounter();
          });
          CAL.markAsDone($markedLabel, targetCategory, mode);
        })();
      }
      getContent(markedLabel, targetCategory, mode) {
        this.doAPICall({
          action: "query",
          formatversion: "2",
          meta: "tokens",
          titles: markedLabel[0],
          prop: "revisions",
          rvprop: ["content", "timestamp"],
          rvslots: "main"
        }, (result) => {
          void this.editCategories(result, markedLabel, targetCategory, mode);
        });
      }
      static getTitleFromLink(href) {
        try {
          var _decodeURIComponent$m, _decodeURIComponent$m2;
          return ((_decodeURIComponent$m = (_decodeURIComponent$m2 = decodeURIComponent(href !== null && href !== void 0 ? href : "").match(/wiki\/(.+?)(?:#.+)?$/)) === null || _decodeURIComponent$m2 === void 0 ? void 0 : _decodeURIComponent$m2[1]) !== null && _decodeURIComponent$m !== void 0 ? _decodeURIComponent$m : "").replace(/_/g, " ");
        } catch {
          return "";
        }
      }
      getMarkedLabels() {
        const markedLabels = [];
        CAL.$selectedLabels = CAL.$labels.filter(".".concat(CLASS_NAME_LABEL_SELECTED));
        CAL.$selectedLabels.each((_index, label) => {
          var _$labelLink$attr;
          const $label = $(label);
          const $labelLink = $label.find("a:not(.CategoryTreeToggle)[title]");
          const title = ((_$labelLink$attr = $labelLink.attr("title")) === null || _$labelLink$attr === void 0 ? void 0 : _$labelLink$attr.trim()) || CAL.getTitleFromLink($labelLink.attr("href")) || CAL.getTitleFromLink($label.find("a:not(.CategoryTreeToggle)").attr("href"));
          markedLabels[markedLabels.length] = [title, $label];
        });
        return markedLabels;
      }
      showProgress() {
        this.$body.css({
          cursor: "wait",
          overflow: "hidden"
        });
        CAL.$progressDialog = $(/* @__PURE__ */ import_ext_gadget3.default.createElement("div", null, CAL.msg("editing"), /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
          className: CLASS_NAME_CURRENT_COUNTER
        }, CAL.counterCurrent), [CAL.msg("of"), CAL.counterNeeded])).dialog({
          dialogClass: CLASS_NAME_FEEDBACK,
          minHeight: 90,
          height: 90,
          width: 450,
          modal: true,
          closeOnEscape: false,
          draggable: false,
          resizable: false
        });
        this.$body.find(".".concat(CLASS_NAME_FEEDBACK, " .ui-dialog-titlebar")).hide();
        this.$body.find(".".concat(CLASS_NAME_FEEDBACK, " .ui-dialog-content")).height("auto");
        CAL.$counter = this.$body.find(".".concat(CLASS_NAME_CURRENT_COUNTER));
      }
      doSomething(targetCategory, mode) {
        const markedLabels = this.getMarkedLabels();
        if (!markedLabels.length) {
          void mw.notify(CAL.msg("none-selected"), {
            tag: "catALot"
          });
          return;
        }
        CAL.alreadyThere = [];
        CAL.connectionError = [];
        CAL.notFound = [];
        CAL.counterCurrent = 1;
        CAL.counterNeeded = markedLabels.length;
        this.showProgress();
        var _iterator3 = _createForOfIteratorHelper(markedLabels), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const markedLabel = _step3.value;
            this.getContent(markedLabel, targetCategory, mode);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      addHere(targetCategory) {
        this.doSomething(targetCategory, "add");
      }
      copyHere(targetCategory) {
        this.doSomething(targetCategory, "copy");
      }
      moveHere(targetCategory) {
        this.doSomething(targetCategory, "move");
      }
      createCatLinks(symbol, categories) {
        categories.sort();
        var _iterator4 = _createForOfIteratorHelper(categories), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            const category = _step4.value;
            const $tr = $(/* @__PURE__ */ import_ext_gadget3.default.createElement("tr", {
              dataset: {
                category
              }
            }, /* @__PURE__ */ import_ext_gadget3.default.createElement("td", null, symbol), /* @__PURE__ */ import_ext_gadget3.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
              onClick: (event) => {
                const $element = $(event.currentTarget);
                this.updateCats($element.closest("tr").data("category"));
              }
            }, category))));
            if (category !== CAL.CURRENT_CATEGROY && CAL.isSearchMode) {
              $tr.append(/* @__PURE__ */ import_ext_gadget3.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
                className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION,
                onClick: (event) => {
                  const $element = $(event.currentTarget);
                  this.addHere($element.closest("tr").data("category"));
                }
              }, CAL.msg("add"))));
            } else if (category !== CAL.CURRENT_CATEGROY && !CAL.isSearchMode) {
              $tr.append(/* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
                className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION,
                onClick: (event) => {
                  const $element = $(event.currentTarget);
                  this.copyHere($element.closest("tr").data("category"));
                }
              }, CAL.msg("copy"))), /* @__PURE__ */ import_ext_gadget3.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
                className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION,
                onClick: (event) => {
                  const $element = $(event.currentTarget);
                  this.moveHere($element.closest("tr").data("category"));
                }
              }, CAL.msg("move")))));
            }
            this.$resultList.find("table").append($tr);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      showCategoryList() {
        var _this$$container$widt, _$$width;
        this.$body.css("cursor", "");
        const currentCategories = [CAL.currentCategory];
        this.$resultList.empty();
        this.$resultList.append(/* @__PURE__ */ import_ext_gadget3.default.createElement("table", null));
        this.createCatLinks("↑", CAL.parentCats);
        this.createCatLinks("→", currentCategories);
        this.createCatLinks("↓", CAL.subCats);
        this.$container.width("");
        this.$container.height("");
        this.$container.width(Math.min(((_this$$container$widt = this.$container.width()) !== null && _this$$container$widt !== void 0 ? _this$$container$widt : 0) * 1.1 + 15, ((_$$width = $(window).width()) !== null && _$$width !== void 0 ? _$$width : 0) - 10));
        this.$resultList.css({
          "max-height": "".concat(CAL.dialogHeight, "px"),
          height: ""
        });
      }
      getParentCats() {
        this.doAPICall({
          action: "query",
          titles: "Category:".concat(CAL.currentCategory),
          prop: "categories"
        }, (result) => {
          var _pages$, _pages$2;
          if (!result) {
            return;
          }
          CAL.parentCats = [];
          const {
            pages
          } = result.query;
          if ((_pages$ = pages[0]) !== null && _pages$ !== void 0 && _pages$.missing) {
            this.$body.css("cursor", "");
            this.$resultList.html(/* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
              className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_NO_FOUND
            }, CAL.msg("cat-not-found")));
            this.createCatLinks("→", [CAL.currentCategory]);
            return;
          }
          let categories = [];
          if ((_pages$2 = pages[0]) !== null && _pages$2 !== void 0 && _pages$2.categories) {
            [{
              categories
            }] = pages;
          }
          var _iterator5 = _createForOfIteratorHelper(categories), _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              const cat = _step5.value;
              const catTitle = cat.title.replace(/^[^:]+:/, "");
              CAL.parentCats[CAL.parentCats.length] = catTitle;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          CAL.counterCat++;
          if (CAL.counterCat === 2) {
            this.showCategoryList();
          }
        });
      }
      getSubCats() {
        this.doAPICall({
          action: "query",
          list: "categorymembers",
          cmtype: "subcat",
          cmlimit: CAL.settings.subcatcount,
          cmtitle: "Category:".concat(CAL.currentCategory)
        }, (result) => {
          var _result$query;
          const cats = (result === null || result === void 0 || (_result$query = result.query) === null || _result$query === void 0 ? void 0 : _result$query.categorymembers) || [];
          CAL.subCats = [];
          var _iterator6 = _createForOfIteratorHelper(cats), _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
              const cat = _step6.value;
              const catTitle = cat.title.replace(/^[^:]+:/, "");
              CAL.subCats[CAL.subCats.length] = catTitle;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          CAL.counterCat++;
          if (CAL.counterCat === 2) {
            this.showCategoryList();
          }
        });
      }
      getCategoryList() {
        CAL.counterCat = 0;
        this.getParentCats();
        this.getSubCats();
      }
      updateCats(cat) {
        this.$body.css("cursor", "wait");
        CAL.currentCategory = cat;
        this.$resultList.html(/* @__PURE__ */ import_ext_gadget3.default.createElement("div", null, CAL.msg("loading")));
        this.getCategoryList();
      }
      findAllLabels() {
        if (CAL.isSearchMode) {
          CAL.$labels = this.$body.find("table.searchResultImage").find("tr>td").eq(1);
          if (CAL.settings.editpages) {
            CAL.$labels = CAL.$labels.add("div.mw-search-result-heading");
          }
        } else {
          CAL.$labels = this.$body.find("div.gallerytext").add(this.$body.find("div#mw-category-media").find('li[class!="gallerybox"]'));
          if (CAL.settings.editpages) {
            const $pages = this.$body.find("div#mw-pages, div#mw-subcategories").find("li");
            CAL.$labels = CAL.$labels.add($pages);
          }
        }
      }
      makeClickable() {
        this.findAllLabels();
        CAL.$labels.addClass(CLASS_NAME_LABEL).onCatALotShiftClick(() => {
          this.updateSelectionCounter();
        });
      }
      run() {
        if (this.$link.hasClass(CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED)) {
          this.makeClickable();
          this.$dataContainer.show();
          this.$container.resizable({
            alsoResize: this.$resultList,
            handles: "n",
            resize: (event) => {
              var _$currentTarget$heigh;
              const $currentTarget = $(event.currentTarget);
              $currentTarget.css({
                left: "",
                top: ""
              });
              CAL.dialogHeight = (_$currentTarget$heigh = $currentTarget.height()) !== null && _$currentTarget$heigh !== void 0 ? _$currentTarget$heigh : CAL.dialogHeight;
              this.$resultList.css({
                maxHeight: "",
                width: ""
              });
            }
          });
          this.$resultList.css("max-height", "450px");
          if (CAL.isSearchMode) {
            this.updateCats("Pictures and images");
          } else {
            this.updateCats(CAL.CURRENT_CATEGROY);
          }
        } else {
          this.$dataContainer.hide();
          this.$container.resizable("destroy");
          this.$container.css("width", "");
          CAL.$labels.off("click.catALot");
        }
      }
    }
    if (wgNamespaceNumber === -1 && wgCanonicalSpecialPageName === "Search" || wgNamespaceNumber === targetNamespace) {
      if (wgNamespaceNumber === -1) {
        CAL.isSearchMode = true;
      }
      CAL["variantCache"] = getCachedKeys();
      if (wgNamespaceNumber === targetNamespace) {
        var _CAL$variantCache;
        const category = mw.config.get("wgTitle").replace(/^Category:/, "");
        (_CAL$variantCache = CAL["variantCache"])[category] || (_CAL$variantCache[category] = yield CAL.findAllVariants(category));
      }
      /*! Cat-a-lot messages | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
      setMessages();
      void (0, import_ext_gadget2.getBody)().then(($body) => {
        new CAL($body).buildElements();
      });
    }
  });
  return function catALot2() {
    return _ref.apply(this, arguments);
  };
})();
//! src/Cat-a-lot/modules/extendJQueryPrototype.ts
var extendJQueryPrototype = () => {
  $.fn.extend({
    onCatALotShiftClick: function(callback) {
      let prevCheckbox;
      this.on("click.catALot", (event) => {
        if (!event.ctrlKey) {
          event.preventDefault();
        }
        this.parents("body").find(".".concat(CLASS_NAME_LABEL_LAST_SELECTED)).removeClass(CLASS_NAME_LABEL_LAST_SELECTED);
        let $thisControl = $(event.target);
        if (!$thisControl.hasClass(CLASS_NAME_LABEL)) {
          $thisControl = $thisControl.parents(".".concat(CLASS_NAME_LABEL));
        }
        $thisControl.addClass(CLASS_NAME_LABEL_LAST_SELECTED).toggleClass(CLASS_NAME_LABEL_SELECTED);
        if (prevCheckbox && event.shiftKey) {
          const method = $thisControl.hasClass(CLASS_NAME_LABEL_SELECTED) ? "addClass" : "removeClass";
          this.slice(Math.min(this.index(prevCheckbox), this.index($thisControl)), Math.max(this.index(prevCheckbox), this.index($thisControl)) + 1)[method](CLASS_NAME_LABEL_SELECTED);
        }
        prevCheckbox = $thisControl;
        if (typeof callback === "function") {
          callback();
        }
      });
      return this;
    }
  });
};
//! src/Cat-a-lot/Cat-a-lot.ts
/*! Cat-a-lot | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
extendJQueryPrototype();
void catALot();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NhdC1hLWxvdC9vcHRpb25zLmpzb24iLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9DYXQtYS1sb3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvY29yZS50c3giLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZ2V0Q2FjaGVkS2V5cy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlLnRzIiwgInNyYy9DYXQtYS1sb3QvQ2F0LWEtbG90LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiYXBpVGFnXCI6IFwiQ2F0LWEtbG90XCIsXG5cdFwidGFyZ2V0TmFtZXNwYWNlXCI6IDE0LFxuXHRcInZlcnNpb25cIjogXCI2LjBcIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5DYXQtYS1Mb3RfcmVzdWx0cy1cIlxufVxuIiwgImltcG9ydCB0eXBlIHtTZXR0aW5nfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1jYXRfYV9sb3QnO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVI6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWNvbnRhaW5lcmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUn1fX2RhdGFgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfV9fY2F0ZWdvcnktbGlzdGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9X19hY3Rpb25gO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX05PX0ZPVU5EOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9LS1uby1mb3VuZGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX21hcmstY291bnRlcmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19zZWFyY2gtaW5wdXQtY29udGFpbmVyX19pbnB1dGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlM6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19zZWxlY3Rpb25zYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19BTEw6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU31fX2FsbGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfV9fbm9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUn1fX2hlYWRgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEfV9fbGlua2A7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LfS0tZW5hYmxlZGA7XG5jb25zdCBDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tY3VycmVudF9jb3VudGVyYDtcbmNvbnN0IENMQVNTX05BTUVfRkVFREJBQ0s6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWZlZWRiYWNrYDtcbmNvbnN0IENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9GRUVEQkFDS30tLWRvbmVgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tbGFiZWxgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTF9ET05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0xBQkVMfS0tZG9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1sYXN0LXNlbGVjdGVkYDtcbmNvbnN0IENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1zZWxlY3RlZGA7XG5cbmNvbnN0IERFRkFVTFRfU0VUVElORzogU2V0dGluZyA9IHtcblx0ZG9jbGVhbnVwOiB7XG5cdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0bGFiZWxfaTE4bjogJ2RvY2xlYW51cHByZWYnLFxuXHR9LFxuXHRlZGl0cGFnZXM6IHtcblx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdGxhYmVsX2kxOG46ICdlZGl0cGFnZXNwcmVmJyxcblx0fSxcblx0bWlub3I6IHtcblx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHRsYWJlbF9pMThuOiAnbWlub3JwcmVmJyxcblx0fSxcblx0c3ViY2F0Y291bnQ6IHtcblx0XHRkZWZhdWx0OiA1MCxcblx0XHRsYWJlbF9pMThuOiAnc3ViY2F0Y291bnRwcmVmJyxcblx0fSxcblx0d2F0Y2hsaXN0OiB7XG5cdFx0ZGVmYXVsdDogJ3ByZWZlcmVuY2VzJyxcblx0XHRsYWJlbF9pMThuOiAnd2F0Y2hsaXN0cHJlZicsXG5cdFx0c2VsZWN0X2kxOG46IHtcblx0XHRcdHdhdGNoX25vY2hhbmdlOiAnbm9jaGFuZ2UnLFxuXHRcdFx0d2F0Y2hfcHJlZjogJ3ByZWZlcmVuY2VzJyxcblx0XHRcdHdhdGNoX3Vud2F0Y2g6ICd1bndhdGNoJyxcblx0XHRcdHdhdGNoX3dhdGNoOiAnd2F0Y2gnLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5jb25zdCBWQVJJQU5UUzogc3RyaW5nW10gPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1teScsICd6aC1zZycsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddO1xuXG5leHBvcnQge1xuXHRDTEFTU19OQU1FLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUixcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNULFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOSyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQsXG5cdENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUsXG5cdENMQVNTX05BTUVfTEFCRUwsXG5cdENMQVNTX05BTUVfTEFCRUxfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVELFxuXHRDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVELFxuXHRERUZBVUxUX1NFVFRJTkcsXG5cdFZBUklBTlRTLFxufTtcbiIsICJpbXBvcnQgdHlwZSB7TWVzc2FnZUtleX0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IERFRkFVTFRfTUVTU0FHRVMgPSB7XG5cdC8vIGFzIGluIDE3IGZpbGVzIHNlbGVjdGVkXG5cdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAne3tQTFVSQUw6JDF8T25lIGZpbGV8JDEgZmlsZXN9fSBzZWxlY3RlZC4nLFxuXHQvLyBBY3Rpb25zXG5cdCdjYXQtYS1sb3QtY29weSc6ICdDb3B5Jyxcblx0J2NhdC1hLWxvdC1tb3ZlJzogJ01vdmUnLFxuXHQnY2F0LWEtbG90LWFkZCc6ICdBZGQnLFxuXHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICdSZW1vdmUgZnJvbSB0aGlzIGNhdGVnb3J5Jyxcblx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ0VudGVyIGNhdGVnb3J5IG5hbWUnLFxuXHQnY2F0LWEtbG90LXNlbGVjdCc6ICdTZWxlY3QnLFxuXHQnY2F0LWEtbG90LWFsbCc6ICdhbGwnLFxuXHQnY2F0LWEtbG90LW5vbmUnOiAnbm9uZScsXG5cdCdjYXQtYS1sb3Qtbm9uZS1zZWxlY3RlZCc6ICdObyBmaWxlcyBzZWxlY3RlZCEnLFxuXHQvLyBQcmVmZXJlbmNlc1xuXHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAnV2F0Y2hsaXN0IHByZWZlcmVuY2UgY29uY2VybmluZyBmaWxlcyBlZGl0ZWQgd2l0aCBDYXQtQS1Mb3QnLFxuXHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAnQWNjb3JkaW5nIHRvIHlvdXIgZ2VuZXJhbCBwcmVmZXJlbmNlcycsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAnRG8gbm90IGNoYW5nZSB3YXRjaHN0YXR1cycsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAnV2F0Y2ggcGFnZXMgZWRpdGVkIHdpdGggQ2F0LUEtTG90Jyxcblx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ1JlbW92ZSBwYWdlcyB3aGlsZSBlZGl0aW5nIHdpdGggQ2F0LUEtTG90IGZyb20geW91ciB3YXRjaGxpc3QnLFxuXHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XCJNYXJrIGVkaXRzIGFzIG1pbm9yIChpZiB5b3UgZ2VuZXJhbGx5IG1hcmsgeW91ciBlZGl0cyBhcyBtaW5vciwgdGhpcyB3b24ndCBjaGFuZ2UgYW55dGhpbmcpXCIsXG5cdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICdBbGxvdyBjYXRlZ29yaXNpbmcgcGFnZXMgKGluY2x1ZGluZyBjYXRlZ29yaWVzKSB0aGF0IGFyZSBub3QgZmlsZXMnLFxuXHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAnUmVtb3ZlIHt7Q2hlY2sgY2F0ZWdvcmllc319IGFuZCBvdGhlciBtaW5vciBjbGVhbnVwJyxcblx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAnU3ViLWNhdGVnb3JpZXMgdG8gc2hvdyBhdCBtb3N0Jyxcblx0Ly8gUHJvZ3Jlc3Ncblx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ0xvYWRpbmcuLi4nLFxuXHQnY2F0LWEtbG90LWVkaXRpbmcnOiAnRWRpdGluZyBwYWdlJyxcblx0J2NhdC1hLWxvdC1vZic6ICdvZiAnLFxuXHQnY2F0LWEtbG90LXNraXBwZWQtYWxyZWFkeSc6XG5cdFx0J1RoZSBmb2xsb3dpbmcge3tQTFVSQUw6JDF8cGFnZSB3YXN8JDEgcGFnZXMgd2VyZX19IHNraXBwZWQsIGJlY2F1c2UgdGhlIHBhZ2Ugd2FzIGFscmVhZHkgaW4gdGhlIGNhdGVnb3J5OicsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOlxuXHRcdCdUaGUgZm9sbG93aW5nIHt7UExVUkFMOiQxfHBhZ2Ugd2FzfCQxIHBhZ2VzIHdlcmV9fSBza2lwcGVkLCBiZWNhdXNlIHRoZSBvbGQgY2F0ZWdvcnkgY291bGQgbm90IGJlIGZvdW5kOicsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOlxuXHRcdFwiVGhlIGZvbGxvd2luZyB7e1BMVVJBTDokMXxwYWdlfCQxIHBhZ2VzfX0gY291bGRuJ3QgYmUgY2hhbmdlZCwgc2luY2UgdGhlcmUgd2VyZSBwcm9ibGVtcyBjb25uZWN0aW5nIHRvIHRoZSBzZXJ2ZXI6XCIsXG5cdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAnQWxsIHBhZ2VzIGFyZSBwcm9jZXNzZWQuJyxcblx0J2NhdC1hLWxvdC1kb25lJzogJ0RvbmUhJyxcblx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAnQWRkZWQgY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAnQ29waWVkIHRvIGNhdGVnb3J5ICQxJyxcblx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAnTW92ZWQgdG8gY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ1JlbW92ZWQgZnJvbSBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAnUmV0dXJuIHRvIHBhZ2UnLFxuXHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAnQ2F0ZWdvcnkgbm90IGZvdW5kLicsXG5cdC8vIFN1bW1hcmllczpcblx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBBZGRpbmcgW1tDYXRlZ29yeTokMV1dJyxcblx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXTogQ29weWluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXSB0byBbW0NhdGVnb3J5OiQyXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBNb3ZpbmcgZnJvbSBbW0NhdGVnb3J5OiQxXV0gdG8gW1tDYXRlZ29yeTokMl1dJyxcblx0J2NhdC1hLWxvdC1zdW1tYXJ5LXJlbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBSZW1vdmluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXScsXG59IHNhdGlzZmllcyBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPjtcblxuY29uc3Qgc2V0TWVzc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdC8qISBDYXQtYS1sb3QgbWVzc2FnZXMgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cblx0aWYgKHdnVXNlckxhbmd1YWdlID09PSAnZW4nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldDx0eXBlb2YgREVGQVVMVF9NRVNTQUdFUz4oe1xuXHRcdFx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0XHRcdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAnJDHlgIvmlofku7blt7Lpgbjmk4cnLFxuXHRcdFx0Ly8gQWN0aW9uc1xuXHRcdFx0J2NhdC1hLWxvdC1jb3B5JzogJ+ikh+ijvScsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmUnOiAn56e75YuVJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkJzogJ+WinuWKoCcsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICflvp7mraTliIbpoZ7np7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ+i8uOWFpeWIhumhnuWQjeeosScsXG5cdFx0XHQnY2F0LWEtbG90LXNlbGVjdCc6ICfpgbjmk4cnLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwnOiAn5YWo6YOoJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZSc6ICfnhKEnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ+aykuaciemBuOaTh+aWh+S7tu+8gScsXG5cdFx0XHQvLyBQcmVmZXJlbmNlc1xuXHRcdFx0J2NhdC1hLWxvdC13YXRjaGxpc3RwcmVmJzogJ+S9v+eUqENhdC1BLUxvdOe3qOi8r+aWh+S7tuaZgueahOebo+imluWIl+ihqOmBuOmghScsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAn6IiH57O757Wx5Y+D5pW46Kit572u55u45ZCMJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAn5LiN6KaB5pu05pS555uj6KaW54uA5oWLJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAn55uj6KaW5L2/55SoQ2F0LUEtTG9057eo6Lyv55qE6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfdW53YXRjaCc6ICflsIfkvb/nlKhDYXQtQS1Mb3Tnt6jovK/nmoTpoIHpnaLlvp7nm6PoppbliJfooajnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1taW5vcnByZWYnOlxuXHRcdFx0XHQn5bCH57eo6Lyv5qiZ6KiY54iy5bCP5L+u5pS577yI6Iul5oKo5Zyo57O757Wx5Y+D5pW46Kit572u5Lit5bey6Kit572u5bCH5omA5pyJ57eo6Lyv5qiZ6KiY54iy5bCP5L+u5pS577yM5q2k6YG46aCF5LiN5pyD5bCN54++5pyJ6KGM54iy6YCy6KGM5pS55YuV77yJJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICflhYHoqLHlsI3kuI3mmK/mlofku7bnmoTpoIHpnaLlkozlrZDliIbpoZ7pgLLooYzliIbpoZ7mk43kvZwnLFxuXHRcdFx0J2NhdC1hLWxvdC1kb2NsZWFudXBwcmVmJzogJ+enu+mZpHt7Q2hlY2sgY2F0ZWdvcmllc3195Lim6YCy6KGM5YW25LuW57Sw56+A5riF55CGJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3ViY2F0Y291bnRwcmVmJzogJ+acgOWkmumhr+ekuueahOWtkOWIhumhnuaVuOmHjycsXG5cdFx0XHQvLyBQcm9ncmVzc1xuXHRcdFx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ+ato+WcqOWKoOi8ieKApuKApicsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRpbmcnOiAn5q2j5Zyo57eo6Lyv6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtb2YnOiAn77yM5YWx5pyJJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5JzogJ+S7peS4i+mggemdouW3sui3s+mBju+8jOWboOeIsumggemdouW3sue2k+WcqOWIhumhnuS4re+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtbm90LWZvdW5kJzogJ+S7peS4i+mggemdouW3sui3s+mBju+8jOWboOeIsuaJvuS4jeWIsOePvuacieWIhumhnu+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtc2VydmVyJzogJ+S7peS4i+mggemdoueEoeazlee3qOi8r++8jOWboOeIsumAo+aOpeacjeWLmeWZqOWHuumMr++8micsXG5cdFx0XHQnY2F0LWEtbG90LWFsbC1kb25lJzogJ+WFqOmDqOmggemdouW3suiZleeQhuOAgicsXG5cdFx0XHQnY2F0LWEtbG90LWRvbmUnOiAn5bey5a6M5oiQ77yBJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkZWQtY2F0JzogJ+W3suWKoOWFpeWIhumhnicsXG5cdFx0XHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAn5bey6KSH6KO95Yiw5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZWQtY2F0JzogJ+W3suenu+WLleWIsOWIhumhnicsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ+W3suW+nuWIhumhnuenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LXJldHVybi10by1wYWdlJzogJ+i/lOWbnuWIsOmggemdoicsXG5cdFx0XHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAn5om+5LiN5Yiw5YiG6aGe44CCJyxcblx0XHRcdC8vIFN1bW1hcmllc1xuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5Yqg5YWl5YiG6aGeW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1jb3B5JzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbpoZ7plpPopIfoo73vvJrlvp5bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhumhnumWk+enu+WLle+8muW+nltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrlvp7liIbpoZ7np7vpmaTvvJpbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldDx0eXBlb2YgREVGQVVMVF9NRVNTQUdFUz4oe1xuXHRcdFx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0XHRcdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAn5bey6YCJ5oupJDHkuKrpobXpnaLmiJbmlofku7YnLFxuXHRcdFx0Ly8gQWN0aW9uc1xuXHRcdFx0J2NhdC1hLWxvdC1jb3B5JzogJ+WkjeWIticsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmUnOiAn56e75YqoJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkJzogJ+WinuWKoCcsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICfku47mraTliIbnsbvnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ+i+k+WFpeWIhuexu+WQjeensCcsXG5cdFx0XHQnY2F0LWEtbG90LXNlbGVjdCc6ICfpgInmi6knLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwnOiAn5YWo6YOoJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZSc6ICfml6AnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ+ayoeaciemAieaLqeS7u+S9lemhtemdouaIluaWh+S7tu+8gScsXG5cdFx0XHQvLyBQcmVmZXJlbmNlc1xuXHRcdFx0J2NhdC1hLWxvdC13YXRjaGxpc3RwcmVmJzogJ+S9v+eUqENhdC1hLWxvdOe8lui+keaWh+S7tuaXtueahOebkeinhuWIl+ihqOmAiemhuScsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAn5LiO57O757uf5Y+C5pWw6K6+572u55u45ZCMJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAn5LiN6KaB5pu05pS555uR6KeG54q25oCBJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAn55uR6KeG5L2/55SoQ2F0LWEtbG9057yW6L6R55qE6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfdW53YXRjaCc6ICflsIbkvb/nlKhDYXQtYS1sb3TnvJbovpHnmoTpobXpnaLku47nm5Hop4bliJfooajnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1taW5vcnByZWYnOlxuXHRcdFx0XHQn5bCG57yW6L6R5qCH6K6w5Li65bCP5L+u5pS577yI6Iul5oKo5Zyo57O757uf5Y+C5pWw6K6+572u5Lit5bey6K6+572u5bCG5omA5pyJ57yW6L6R5qCH6K6w5Li65bCP5L+u5pS577yM5q2k6YCJ6aG55LiN5Lya5a+5546w5pyJ6KGM5Li66L+b6KGM5pS55Yqo77yJJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICflhYHorrjlr7nkuI3mmK/mlofku7bnmoTpobXpnaLlkozlrZDliIbnsbvov5vooYzliIbnsbvmk43kvZwnLFxuXHRcdFx0J2NhdC1hLWxvdC1kb2NsZWFudXBwcmVmJzogJ+enu+mZpHt7Q2hlY2sgY2F0ZWdvcmllc3195bm26L+b6KGM5YW25LuW57uG6IqC5riF55CGJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3ViY2F0Y291bnRwcmVmJzogJ+acgOWkmuaYvuekuueahOWtkOWIhuexu+aVsOmHjycsXG5cdFx0XHQvLyBQcm9ncmVzc1xuXHRcdFx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ+ato+WcqOWKoOi9veKApuKApicsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRpbmcnOiAn5q2j5Zyo57yW6L6R6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtb2YnOiAn77yM5YWx5pyJJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5JzogJ+S7peS4i+mhtemdouW3sui3s+i/h++8jOWboOS4uumhtemdouW3sue7j+WcqOWIhuexu+S4re+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtbm90LWZvdW5kJzogJ+S7peS4i+mhtemdouW3sui3s+i/h++8jOWboOS4uuaJvuS4jeWIsOeOsOacieWIhuexu++8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtc2VydmVyJzogJ+S7peS4i+mhtemdouaXoOazlee8lui+ke+8jOWboOS4uui/nuaOpeacjeWKoeWZqOWHuumUme+8micsXG5cdFx0XHQnY2F0LWEtbG90LWFsbC1kb25lJzogJ+WFqOmDqOmhtemdouW3suWkhOeQhuOAgicsXG5cdFx0XHQnY2F0LWEtbG90LWRvbmUnOiAn5bey5a6M5oiQ77yBJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkZWQtY2F0JzogJ+W3suWKoOWFpeWIhuexuycsXG5cdFx0XHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAn5bey5aSN5Yi25Yiw5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZWQtY2F0JzogJ+W3suenu+WKqOWIsOWIhuexuycsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ+W3suS7juWIhuexu+enu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LXJldHVybi10by1wYWdlJzogJ+i/lOWbnuWIsOmhtemdoicsXG5cdFx0XHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAn5om+5LiN5Yiw5YiG57G744CCJyxcblx0XHRcdC8vIFN1bW1hcmllc1xuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5Yqg5YWl5YiG57G7W1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1jb3B5JzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbnsbvpl7TlpI3liLbvvJrku45bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhuexu+mXtOenu+WKqO+8muS7jltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrku47liIbnsbvnp7vpmaTvvJpbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge0RFRkFVTFRfTUVTU0FHRVMsIHNldE1lc3NhZ2VzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1xuXHRDTEFTU19OQU1FLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUixcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNULFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOSyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQsXG5cdENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUsXG5cdENMQVNTX05BTUVfTEFCRUwsXG5cdENMQVNTX05BTUVfTEFCRUxfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCxcblx0REVGQVVMVF9TRVRUSU5HLFxuXHRWQVJJQU5UUyxcbn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge0RFRkFVTFRfTUVTU0FHRVMsIHNldE1lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCB0eXBlIHtNZXNzYWdlS2V5LCBTZXR0aW5nfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Z2V0Qm9keSwgdW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0Q2FjaGVkS2V5c30gZnJvbSAnLi9nZXRDYWNoZWRLZXlzJztcblxuY29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMsIHdnTmFtZXNwYWNlSWRzLCB3Z05hbWVzcGFjZU51bWJlciwgd2dUaXRsZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8qKlxuICogQ2hhbmdlcyBjYXRlZ29yeSBvZiBtdWx0aXBsZSBmaWxlc1xuICovXG5jb25zdCBjYXRBTG90ID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHQvKiEgQ2F0LWEtbG90IHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG5cdGNsYXNzIENBTCB7XG5cdFx0cHVibGljIHN0YXRpYyBpc1NlYXJjaE1vZGUgPSBmYWxzZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1FU1NBR0VTOiBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPiA9IERFRkFVTFRfTUVTU0FHRVM7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TRVRUSU5HOiBTZXR0aW5nID0gREVGQVVMVF9TRVRUSU5HO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQVBJX1RBRzogc3RyaW5nID0gT1BUSU9OUy5hcGlUYWc7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEFSR0VUX05BTUVTUEFDRTogbnVtYmVyID0gT1BUSU9OUy50YXJnZXROYW1lc3BhY2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBDVVJSRU5UX0NBVEVHUk9ZOiBzdHJpbmcgPSB3Z1RpdGxlO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgd2dGb3JtYXR0ZWROYW1lc3BhY2VzOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0gd2dGb3JtYXR0ZWROYW1lc3BhY2VzO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHdnTmFtZXNwYWNlSWRzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0gd2dOYW1lc3BhY2VJZHM7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBpc0F1dG9Db21wbGV0ZUluaXQgPSBmYWxzZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIGFwaSA9IGFwaTtcblxuXHRcdHByaXZhdGUgc3RhdGljIGFscmVhZHlUaGVyZTogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBjb25uZWN0aW9uRXJyb3I6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbm90Rm91bmQ6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY291bnRlckN1cnJlbnQgPSAwO1xuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJOZWVkZWQgPSAwO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgY291bnRlckNhdCA9IDA7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY3VycmVudENhdGVnb3J5ID0gJyc7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBkaWFsb2dIZWlnaHQgPSA0NTA7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZWRpdFRva2VuID0gJyc7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbG9jYWxDYXROYW1lID0gd2dGb3JtYXR0ZWROYW1lc3BhY2VzW0NBTC5UQVJHRVRfTkFNRVNQQUNFXSBhcyBzdHJpbmc7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBwYXJlbnRDYXRzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIHN1YkNhdHM6IHN0cmluZ1tdID0gW107XG5cblx0XHRwcml2YXRlIHN0YXRpYyBzZXR0aW5nczogTm9uTnVsbGFibGU8dHlwZW9mIHdpbmRvdy5DYXRBTG90UHJlZnM+ID0ge307XG5cdFx0cHJpdmF0ZSBzdGF0aWMgdmFyaWFudENhY2hlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHRcdC8vIFJhdGUgbGltaXRpbmc6IHNldCB0byAxMDAwIG1zIGZvciB+MSByZXF1ZXN0IHBlciBzZWNvbmRcblx0XHRwcml2YXRlIHN0YXRpYyByZXF1ZXN0RGVsYXkgPSAxMDAwO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlcXVlc3RRdWV1ZTogQXJyYXk8e1xuXHRcdFx0Zm46ICgpID0+IFByb21pc2U8dW5rbm93bj47XG5cdFx0XHRyZXNvbHZlOiAodmFsdWU6IHVua25vd24pID0+IHZvaWQ7XG5cdFx0XHRyZWplY3Q6IChyZWFzb246IHVua25vd24pID0+IHZvaWQ7XG5cdFx0fT4gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBwcm9jZXNzaW5nUXVldWUgPSBmYWxzZTtcblx0XHRwcml2YXRlIHN0YXRpYyBsYXN0U3RhcnQgPSAwO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgZW5xdWV1ZUFwaUNhbGw8VD4oZm46ICgpID0+IFQpOiBQcm9taXNlPEF3YWl0ZWQ8VD4+IHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZTxBd2FpdGVkPFQ+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdENBTC5yZXF1ZXN0UXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Zm46IGZuIGFzIHVua25vd24gYXMgKCkgPT4gUHJvbWlzZTx1bmtub3duPixcblx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlIGFzICh2OiB1bmtub3duKSA9PiB2b2lkLFxuXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0IGFzIChlOiB1bmtub3duKSA9PiB2b2lkLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKCFDQUwucHJvY2Vzc2luZ1F1ZXVlKSB7XG5cdFx0XHRcdFx0Q0FMLnByb2Nlc3NpbmdRdWV1ZSA9IHRydWU7XG5cdFx0XHRcdFx0dm9pZCBDQUwucHJvY2Vzc1F1ZXVlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGFzeW5jIHByb2Nlc3NRdWV1ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRcdHdoaWxlIChDQUwucmVxdWVzdFF1ZXVlLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCB7Zm4sIHJlc29sdmUsIHJlamVjdH0gPSBDQUwucmVxdWVzdFF1ZXVlLnNoaWZ0KCkhO1xuXHRcdFx0XHRjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXHRcdFx0XHRjb25zdCB3YWl0ID0gTWF0aC5tYXgoMCwgQ0FMLnJlcXVlc3REZWxheSAtIChub3cgLSBDQUwubGFzdFN0YXJ0KSk7XG5cdFx0XHRcdGlmICh3YWl0KSB7XG5cdFx0XHRcdFx0YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgd2FpdCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdENBTC5sYXN0U3RhcnQgPSBEYXRlLm5vdygpO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZuKCk7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXMpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRDQUwucHJvY2Vzc2luZ1F1ZXVlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgJGNvdW50ZXI6IEpRdWVyeSA9ICQoKTtcblx0XHRwcml2YXRlIHN0YXRpYyAkcHJvZ3Jlc3NEaWFsb2c6IEpRdWVyeSA9ICQoKTtcblx0XHRwcml2YXRlIHN0YXRpYyAkbGFiZWxzOiBKUXVlcnkgPSAkKCk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgJHNlbGVjdGVkTGFiZWxzOiBKUXVlcnkgPSAkKCk7XG5cblx0XHRwcml2YXRlIHJlYWRvbmx5ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pjtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRjb250YWluZXI6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRkYXRhQ29udGFpbmVyOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkbWFya0NvdW50ZXI6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRyZXN1bHRMaXN0OiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkc2VhcmNoSW5wdXQ6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50Pjtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRoZWFkOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkbGluazogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PjtcblxuXHRcdHB1YmxpYyBjb25zdHJ1Y3RvcigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pIHtcblx0XHRcdGlmICghbXcubWVzc2FnZSgnY2F0LWEtbG90LWxvYWRpbmcnKS5wYXJzZSgpKSB7XG5cdFx0XHRcdG13Lm1lc3NhZ2VzLnNldChDQUwuTUVTU0FHRVMpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRib2R5ID0gJGJvZHk7XG5cdFx0XHRDQUwuaW5pdFNldHRpbmdzKCk7XG5cblx0XHRcdGNvbnN0IGNvbnRhaW5lciA9IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1tDTEFTU19OQU1FLCBDTEFTU19OQU1FX0NPTlRBSU5FUiwgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSfSAvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH0gLz5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtDQUwubXNnKCdlbnRlci1uYW1lJyl9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtDQUwuaXNTZWFyY2hNb2RlID8gKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VhcmNoJykgPz8gJycpIDogJyd9XG5cdFx0XHRcdFx0XHRcdFx0b25LZXlEb3duPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJDxIVE1MSW5wdXRFbGVtZW50PihldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2F0OiBzdHJpbmcgPSAkZWxlbWVudC52YWwoKT8udHJpbSgpID8/ICcnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2F0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKGNhdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfT5cblx0XHRcdFx0XHRcdFx0e1tDQUwubXNnKCdzZWxlY3QnKSwgJyAnXX1cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19BTEx9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdhbGwnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHR7JyDigKIgJ31cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlQWxsKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ25vbmUnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9PlxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9PkNhdC1hLWxvdDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLiRjb250YWluZXIgPSAkKGNvbnRhaW5lcikgYXMgSlF1ZXJ5O1xuXHRcdFx0dGhpcy4kY29udGFpbmVyLmFwcGVuZFRvKHRoaXMuJGJvZHkpO1xuXG5cdFx0XHR0aGlzLiRkYXRhQ29udGFpbmVyID0gdGhpcy4kY29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9YCk7XG5cdFx0XHR0aGlzLiRtYXJrQ291bnRlciA9IHRoaXMuJGRhdGFDb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVJ9YCk7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0ID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9YCk7XG5cdFx0XHR0aGlzLiRzZWFyY2hJbnB1dCA9IHRoaXMuJGRhdGFDb250YWluZXIuZmluZDxIVE1MSW5wdXRFbGVtZW50Pihcblx0XHRcdFx0YC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVH1gXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLiRoZWFkID0gdGhpcy4kY29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9YCk7XG5cdFx0XHR0aGlzLiRsaW5rID0gdGhpcy4kaGVhZC5maW5kPEhUTUxBbmNob3JFbGVtZW50PihgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LfWApO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBidWlsZEVsZW1lbnRzKCk6IHZvaWQge1xuXHRcdFx0Y29uc3QgcmVnZXhDYXQ6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF5cXFxccyoke0NBTC5sb2NhbGl6ZWRSZWdleChDQUwuVEFSR0VUX05BTUVTUEFDRSwgJ0NhdGVnb3J5Jyl9OmAsICcnKTtcblx0XHRcdGxldCBpc0NvbXBvc2l0aW9uU3RhcnQ6IGJvb2xlYW47XG5cblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdjb21wb3NpdGlvbnN0YXJ0JywgKCkgPT4ge1xuXHRcdFx0XHRpc0NvbXBvc2l0aW9uU3RhcnQgPSB0cnVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdjb21wb3NpdGlvbmVuZCcsICgpID0+IHtcblx0XHRcdFx0aXNDb21wb3NpdGlvblN0YXJ0ID0gZmFsc2U7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQub24oJ2lucHV0IGtleXVwJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGlmIChpc0NvbXBvc2l0aW9uU3RhcnQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3Qge2N1cnJlbnRUYXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHRcdGNvbnN0IHt2YWx1ZTogb2xkVmFsfSA9IGN1cnJlbnRUYXJnZXQ7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbDogc3RyaW5nID0gb2xkVmFsLnJlcGxhY2UocmVnZXhDYXQsICcnKTtcblx0XHRcdFx0aWYgKG5ld1ZhbCAhPT0gb2xkVmFsKSB7XG5cdFx0XHRcdFx0Y3VycmVudFRhcmdldC52YWx1ZSA9IG5ld1ZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IGluaXRBdXRvY29tcGxldGUgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdGlmIChDQUwuaXNBdXRvQ29tcGxldGVJbml0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdENBTC5pc0F1dG9Db21wbGV0ZUluaXQgPSB0cnVlO1xuXG5cdFx0XHRcdHRoaXMuJHNlYXJjaElucHV0LmF1dG9jb21wbGV0ZSh7XG5cdFx0XHRcdFx0c291cmNlOiAocmVxdWVzdDoge3Rlcm06IHN0cmluZ30sIHJlc3BvbnNlOiAoYXJnOiBKUXVlcnk8c3RyaW5nPikgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdvcGVuc2VhcmNoJyxcblx0XHRcdFx0XHRcdFx0XHRuYW1lc3BhY2U6IENBTC5UQVJHRVRfTkFNRVNQQUNFLFxuXHRcdFx0XHRcdFx0XHRcdHJlZGlyZWN0czogJ3Jlc29sdmUnLFxuXHRcdFx0XHRcdFx0XHRcdHNlYXJjaDogcmVxdWVzdC50ZXJtLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdFsxXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2UoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQocmVzdWx0WzFdKS5tYXAoKF9pbmRleCwgaXRlbTogc3RyaW5nKTogc3RyaW5nID0+IGl0ZW0ucmVwbGFjZShyZWdleENhdCwgJycpKVxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0bXk6ICdyaWdodCBib3R0b20nLFxuXHRcdFx0XHRcdFx0YXQ6ICdyaWdodCB0b3AnLFxuXHRcdFx0XHRcdFx0b2Y6IHRoaXMuJHNlYXJjaElucHV0LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YXBwZW5kVG86IGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUn1gLFxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHR0aGlzLiRsaW5rLm9uKCdjbGljaycsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHQkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEKTtcblx0XHRcdFx0aW5pdEF1dG9jb21wbGV0ZSgpO1xuXHRcdFx0XHR0aGlzLnJ1bigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaW5pdFNldHRpbmdzKCk6IHZvaWQge1xuXHRcdFx0bGV0IGNhdEFMb3RQcmVmczogdHlwZW9mIENBTC5zZXR0aW5ncyA9IHdpbmRvdy5DYXRBTG90UHJlZnMgPz8ge307XG5cdFx0XHRjb25zdCB0eXBlT2ZDYXRBTG90UHJlZnMgPSB0eXBlb2YgY2F0QUxvdFByZWZzO1xuXHRcdFx0aWYgKCh0eXBlT2ZDYXRBTG90UHJlZnMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGNhdEFMb3RQcmVmcykpIHx8IHR5cGVPZkNhdEFMb3RQcmVmcyAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Y2F0QUxvdFByZWZzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3Qgc2V0dGluZ0tleSBvZiBPYmplY3Qua2V5cyhDQUwuREVGQVVMVF9TRVRUSU5HKSBhcyAoa2V5b2YgU2V0dGluZylbXSkge1xuXHRcdFx0XHRjb25zdCBzZXR0aW5nID0gQ0FMLkRFRkFVTFRfU0VUVElOR1tzZXR0aW5nS2V5XTtcblxuXHRcdFx0XHRDQUwuc2V0dGluZ3Nbc2V0dGluZ0tleV0gPSBjYXRBTG90UHJlZnNbc2V0dGluZ0tleV0gPz8gc2V0dGluZy5kZWZhdWx0O1xuXG5cdFx0XHRcdGlmICghc2V0dGluZy5zZWxlY3RfaTE4bikge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2V0dGluZy5zZWxlY3QgPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBtZXNzYWdlS2V5IG9mIE9iamVjdC5rZXlzKHNldHRpbmcuc2VsZWN0X2kxOG4pKSB7XG5cdFx0XHRcdFx0Y29uc3QgbWVzc2FnZTogc3RyaW5nID0gc2V0dGluZy5zZWxlY3RfaTE4blttZXNzYWdlS2V5XSBhcyBrZXlvZiB0eXBlb2Ygc2V0dGluZy5zZWxlY3RfaTE4bjtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0c2V0dGluZy5zZWxlY3RbQ0FMLm1zZyhtZXNzYWdlS2V5IGFzIG5ldmVyKV0gPSBtZXNzYWdlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgbXNnKGtleTogTWVzc2FnZUtleSBleHRlbmRzIGBjYXQtYS1sb3QtJHtpbmZlciBQfWAgPyBQIDogbmV2ZXIsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcblx0XHRcdGNvbnN0IGZ1bGxLZXk6IHN0cmluZyA9IGBjYXQtYS1sb3QtJHtrZXl9YDtcblx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGZ1bGxLZXksIC4uLmFyZ3MpLnBhcnNlKCkgOiBtdy5tZXNzYWdlKGZ1bGxLZXkpLnBsYWluKCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsaXplZFJlZ2V4KG5hbWVzcGFjZU51bWJlcjogbnVtYmVyLCBmYWxsYmFjazogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdC8vIENvcGllZCBmcm9tIEhvdENhdCwgdGhhbmtzIEx1cG8uXG5cdFx0XHRjb25zdCB3aWtpVGV4dEJsYW5rOiBzdHJpbmcgPSBTdHJpbmcucmF3YFtcXHQgX1xceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMF0rYDtcblx0XHRcdGNvbnN0IHdpa2lUZXh0QmxhbmtSRTogUmVnRXhwID0gbmV3IFJlZ0V4cCh3aWtpVGV4dEJsYW5rLCAnZycpO1xuXHRcdFx0Y29uc3QgY3JlYXRlUmVnZXhTdHIgPSAobmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nID0+IHtcblx0XHRcdFx0aWYgKCFuYW1lPy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHJlZ2V4TmFtZTogc3RyaW5nID0gJyc7XG5cdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW5pdGlhbDogc3RyaW5nID0gbmFtZS5zbGljZShpLCBpICsgMSk7XG5cdFx0XHRcdFx0Y29uc3QgbGw6IHN0cmluZyA9IGluaXRpYWwudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRjb25zdCB1bDogc3RyaW5nID0gaW5pdGlhbC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRcdHJlZ2V4TmFtZSArPSBsbCA9PT0gdWwgPyBpbml0aWFsIDogYFske2xsfSR7dWx9XWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlZ2V4TmFtZS5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csIFN0cmluZy5yYXdgXFwkMWApLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKTtcblx0XHRcdH07XG5cdFx0XHRmYWxsYmFjayA9IGZhbGxiYWNrLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRjb25zdCBjYW5vbmljYWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IENBTC53Z0Zvcm1hdHRlZE5hbWVzcGFjZXNbbmFtZXNwYWNlTnVtYmVyXT8udG9Mb3dlckNhc2UoKTtcblx0XHRcdGxldCByZWdleFN0cmluZzogc3RyaW5nID0gY3JlYXRlUmVnZXhTdHIoY2Fub25pY2FsKTtcblx0XHRcdGlmIChmYWxsYmFjayAmJiBjYW5vbmljYWwgIT09IGZhbGxiYWNrKSB7XG5cdFx0XHRcdHJlZ2V4U3RyaW5nICs9IGB8JHtjcmVhdGVSZWdleFN0cihmYWxsYmFjayl9YDtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3QgY2F0TmFtZSBvZiBPYmplY3Qua2V5cyhDQUwud2dOYW1lc3BhY2VJZHMpKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRjYXROYW1lLnRvTG93ZXJDYXNlKCkgIT09IGNhbm9uaWNhbCAmJlxuXHRcdFx0XHRcdGNhdE5hbWUudG9Mb3dlckNhc2UoKSAhPT0gZmFsbGJhY2sgJiZcblx0XHRcdFx0XHRDQUwud2dOYW1lc3BhY2VJZHNbY2F0TmFtZV0gPT09IG5hbWVzcGFjZU51bWJlclxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZWdleFN0cmluZyArPSBgfCR7Y3JlYXRlUmVnZXhTdHIoY2F0TmFtZSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGAoPzoke3JlZ2V4U3RyaW5nfSlgO1xuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIoKTogdm9pZCB7XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzID0gQ0FMLiRsYWJlbHMuZmlsdGVyKGAuJHtDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEfWApO1xuXHRcdFx0dGhpcy4kbWFya0NvdW50ZXIuc2hvdygpLmh0bWwoQ0FMLm1zZygnZmlsZXMtc2VsZWN0ZWQnLCBDQUwuJHNlbGVjdGVkTGFiZWxzLmxlbmd0aC50b1N0cmluZygpKSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgdG9nZ2xlQWxsKHNlbGVjdDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0Q0FMLiRsYWJlbHMudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCwgc2VsZWN0KTtcblx0XHRcdHRoaXMudXBkYXRlU2VsZWN0aW9uQ291bnRlcigpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBzdGF0aWMgYXN5bmMgZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG5cdFx0XHRpZiAoQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gIT09IHVuZGVmaW5lZCAmJiBBcnJheS5pc0FycmF5KENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldKSkge1xuXHRcdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIGNhdGVnb3J5KSAhPT0gdW5kZWZpbmVkICYmXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgY2F0ZWdvcnkpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgY2F0ZWdvcnkpIGFzIHN0cmluZ1tdO1xuXHRcdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV07XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtjYXRlZ29yeV07XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRleHQ6IGA8dWwgaWQ9XCJjYWwtdmFyaWFudHNcIj5cblx0PGxpIGlkPVwiY2FsLXpoXCI+LXt6aHwke2NhdGVnb3J5fX0tPC9saT5cblx0PGxpIGlkPVwiY2FsLXpoLWhhbnNcIj4te3poLWhhbnN8JHtjYXRlZ29yeX19LTwvbGk+XG5cdDxsaSBpZD1cImNhbC16aC1oYW50XCI+LXt6aC1oYW50fCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtY25cIj4te3poLWNufCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtaGtcIj4te3poLWhrfCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtbW9cIj4te3poLW1vfCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtbXlcIj4te3poLW15fCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtc2dcIj4te3poLXNnfCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtdHdcIj4te3poLXR3fCR7Y2F0ZWdvcnl9fS08L2xpPlxuPC91bD5gLFxuXHRcdFx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdFx0XHR2YXJpYW50OiAnemgnLFxuXHRcdFx0fTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBDQUwuZW5xdWV1ZUFwaUNhbGwoKCkgPT4gQ0FMLmFwaS5nZXQocGFyYW1zKSk7XG5cdFx0XHRcdGNvbnN0IHt0ZXh0fSA9IHBhcnNlO1xuXHRcdFx0XHRjb25zdCAkcGFyc2VkID0gJCh0ZXh0KTtcblx0XHRcdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRcdFx0Y29uc3QgJHZhcmlhbnROb2RlID0gJHBhcnNlZC5maW5kKGAjY2FsLSR7dmFyaWFudH1gKTtcblx0XHRcdFx0XHRpZiAoJHZhcmlhbnROb2RlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdHJlc3VsdHNbcmVzdWx0cy5sZW5ndGhdID0gJHZhcmlhbnROb2RlLnRleHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdC8vIERlLWR1cGxpY2F0ZVxuXHRcdFx0Q0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gPSB1bmlxdWVBcnJheShyZXN1bHRzKTsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgY2F0ZWdvcnksIENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldLCA2MCAqIDYwICogMjQpOyAvLyAxIGRheVxuXHRcdFx0cmV0dXJuIENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGFzeW5jIHJlZ2V4QnVpbGRlcihjYXRlZ29yeTogc3RyaW5nKTogUHJvbWlzZTxSZWdFeHA+IHtcblx0XHRcdC8vIEJ1aWxkIGEgcmVnZXhwIHN0cmluZyBmb3IgbWF0Y2hpbmcgdGhlIGdpdmVuIGNhdGVnb3J5OlxuXHRcdFx0Y29uc3QgY2F0TmFtZTogc3RyaW5nID0gQ0FMLmxvY2FsaXplZFJlZ2V4KENBTC5UQVJHRVRfTkFNRVNQQUNFLCAnQ2F0ZWdvcnknKTtcblx0XHRcdC8vIHRyaW0gbGVhZGluZy90cmFpbGluZyB3aGl0ZXNwYWNlIGFuZCB1bmRlcnNjb3Jlc1xuXHRcdFx0Y2F0ZWdvcnkgPSBjYXRlZ29yeS5yZXBsYWNlKC9eW1xcc19dKy8sICcnKS5yZXBsYWNlKC9bXFxzX10rJC8sICcnKTtcblx0XHRcdC8vIEZpbmQgYWxsIHZhcmlhbnRzXG5cdFx0XHRjb25zdCB2YXJpYW50czogc3RyaW5nW10gPSBhd2FpdCBDQUwuZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5KTtcblx0XHRcdC8vIGVzY2FwZSByZWdleHAgbWV0YWNoYXJhY3RlcnMgKD0gYW55IEFTQ0lJIHB1bmN0dWF0aW9uIGV4Y2VwdCBfKVxuXHRcdFx0Y29uc3QgdmFyaWFudFJlZ0V4cHM6IHN0cmluZ1tdID0gW107XG5cdFx0XHRmb3IgKGxldCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG5cdFx0XHRcdHZhcmlhbnQgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cCh2YXJpYW50KTtcblx0XHRcdFx0Ly8gYW55IHNlcXVlbmNlIG9mIHNwYWNlcyBhbmQgdW5kZXJzY29yZXMgc2hvdWxkIG1hdGNoIGFueSBvdGhlclxuXHRcdFx0XHR2YXJpYW50ID0gdmFyaWFudC5yZXBsYWNlKC9bXFxzX10rL2csIFN0cmluZy5yYXdgW1xcc19dK2ApO1xuXHRcdFx0XHQvLyBNYWtlIHRoZSBmaXJzdCBjaGFyYWN0ZXIgY2FzZS1pbnNlbnNpdGl2ZTpcblx0XHRcdFx0Y29uc3QgZmlyc3Q6IHN0cmluZyA9IHZhcmlhbnQuc2xpY2UoMCwgMSk7XG5cdFx0XHRcdGlmIChmaXJzdC50b1VwcGVyQ2FzZSgpICE9PSBmaXJzdC50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRcdFx0dmFyaWFudCA9IGBbJHtmaXJzdC50b1VwcGVyQ2FzZSgpfSR7Zmlyc3QudG9Mb3dlckNhc2UoKX1dJHt2YXJpYW50LnNsaWNlKDEpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyaWFudFJlZ0V4cHNbdmFyaWFudFJlZ0V4cHMubGVuZ3RoXSA9IHZhcmlhbnQ7XG5cdFx0XHR9XG5cdFx0XHQvLyBDb21waWxlIGl0IGludG8gYSBSZWdFeHAgdGhhdCBtYXRjaGVzIE1lZGlhV2lraSBjYXRlZ29yeSBzeW50YXggKHllYWgsIGl0IGxvb2tzIHVnbHkpOlxuXHRcdFx0Ly8gWFhYOiB0aGUgZmlyc3QgY2FwdHVyaW5nIHBhcmVucyBhcmUgYXNzdW1lZCB0byBtYXRjaCB0aGUgc29ydGtleSwgaWYgcHJlc2VudCwgaW5jbHVkaW5nIHRoZSB8IGJ1dCBleGNsdWRpbmcgdGhlIF1dXG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFtbXFxcXHNfXSoke2NhdE5hbWV9W1xcXFxzX10qOltcXFxcc19dKig/OiR7dmFyaWFudFJlZ0V4cHMuam9pbihcblx0XHRcdFx0XHQnfCdcblx0XHRcdFx0KX0pW1xcXFxzX10qKFxcXFx8W15cXFxcXV0qKD86XFxcXF1bXlxcXFxdXSspKik/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvQVBJQ2FsbChcblx0XHRcdF9wYXJhbXM6IE9taXQ8QXBpRWRpdFBhZ2VQYXJhbXMsICdmb3JtYXQnPixcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZFxuXHRcdCkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gX3BhcmFtcyBhcyB0eXBlb2YgX3BhcmFtcyAmIHtcblx0XHRcdFx0Zm9ybWF0OiAnanNvbic7XG5cdFx0XHRcdHRpdGxlPzogc3RyaW5nO1xuXHRcdFx0fTtcblx0XHRcdHBhcmFtc1snZm9ybWF0J10gPSAnanNvbic7XG5cdFx0XHRwYXJhbXNbJ2Zvcm1hdHZlcnNpb24nXSA9ICcyJztcblx0XHRcdGxldCBpOiBudW1iZXIgPSAwO1xuXHRcdFx0Y29uc3QgZG9DYWxsID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCBoYW5kbGVFcnJvciA9IChlcnJvcjogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0bXcubG9nLmVycm9yKCdbQ2F0LWEtbG90XSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdFx0XHRpZiAoaSA8IDQpIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZG9DYWxsLCAzMDApO1xuXHRcdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocGFyYW1zWyd0aXRsZSddKSB7XG5cdFx0XHRcdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yW0NBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoXSA9IHBhcmFtc1sndGl0bGUnXTtcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKHBhcmFtc1snYWN0aW9uJ10gPT09ICdxdWVyeScpIHtcblx0XHRcdFx0XHRDQUwuZW5xdWV1ZUFwaUNhbGwoKCkgPT4gQ0FMLmFwaS5nZXQocGFyYW1zKSlcblx0XHRcdFx0XHRcdC50aGVuKGNhbGxiYWNrKVxuXHRcdFx0XHRcdFx0LmNhdGNoKGhhbmRsZUVycm9yKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRDQUwuZW5xdWV1ZUFwaUNhbGwoKCkgPT4gQ0FMLmFwaS5wb3N0KHBhcmFtcykpXG5cdFx0XHRcdFx0XHQudGhlbihjYWxsYmFjaylcblx0XHRcdFx0XHRcdC5jYXRjaChoYW5kbGVFcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRkb0NhbGwoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBtYXJrQXNEb25lKFxuXHRcdFx0JG1hcmtlZExhYmVsOiBKUXVlcnksXG5cdFx0XHR0YXJnZXRDYXRlZ29yeTogc3RyaW5nLFxuXHRcdFx0bW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZScgfCAncmVtb3ZlJ1xuXHRcdCk6IHZvaWQge1xuXHRcdFx0JG1hcmtlZExhYmVsLmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUxfRE9ORSk7XG5cblx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHRjYXNlICdhZGQnOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FkZGVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NvcHknOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2NvcGllZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtb3ZlJzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdtb3ZlZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZW1vdmUnOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ3JlbW92ZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZG9DbGVhbnVwKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0XHRyZXR1cm4gQ0FMLnNldHRpbmdzLmRvY2xlYW51cCA/IHRleHQucmVwbGFjZSgve3tcXHMqW0NjXWhlY2sgY2F0ZWdvcmllc1xccyooXFx8Py4qPyl9fS8sICcnKSA6IHRleHQ7XG5cdFx0fSAvLyBSZW1vdmUge3tVbmNhdGVnb3JpemVkfX0gKGFsc28gd2l0aCBjb21tZW50KS4gTm8gbmVlZCB0byByZXBsYWNlIGl0IHdpdGggYW55dGhpbmdcblx0XHRwcml2YXRlIHN0YXRpYyByZW1vdmVVbmNhdCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdFx0cmV0dXJuIHRleHQucmVwbGFjZSgvXFx7XFx7XFxzKltVdV1uY2F0ZWdvcml6ZWRcXHMqKFxcfD8uKj8pXFx9XFx9LywgJycpO1xuXHRcdH1cblx0XHRwcml2YXRlIGRpc3BsYXlSZXN1bHQoKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcyh7XG5cdFx0XHRcdGN1cnNvcjogJycsXG5cdFx0XHRcdG92ZXJmbG93OiAnJyxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0ZFRURCQUNLfWApLmFkZENsYXNzKENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSk7XG5cblx0XHRcdGNvbnN0ICRwYXJlbnQ6IEpRdWVyeSA9IENBTC4kY291bnRlci5wYXJlbnQoKTtcblx0XHRcdCRwYXJlbnQuaHRtbCg8aDM+e0NBTC5tc2coJ2RvbmUnKX08L2gzPik7XG5cdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHR7Q0FMLm1zZygnYWxsLWRvbmUnKX1cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXG5cdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0PGFcblx0XHRcdFx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRDQUwuJHByb2dyZXNzRGlhbG9nLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwoZmFsc2UpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7Q0FMLm1zZygncmV0dXJuLXRvLXBhZ2UnKX1cblx0XHRcdFx0PC9hPlxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKENBTC5hbHJlYWR5VGhlcmUubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtYWxyZWFkeScsIENBTC5hbHJlYWR5VGhlcmUubGVuZ3RoLnRvU3RyaW5nKCkpfTwvaDU+XG5cdFx0XHRcdFx0XHR7Q0FMLmFscmVhZHlUaGVyZS5yZWR1Y2U8KHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXT4oXG5cdFx0XHRcdFx0XHRcdChwcmUsIGN1ciwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aCAtIDEgPyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl0gOiBbLi4ucHJlLCBjdXJdLFxuXHRcdFx0XHRcdFx0XHRbXVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGlmIChDQUwubm90Rm91bmQubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtbm90LWZvdW5kJywgQ0FMLm5vdEZvdW5kLmxlbmd0aC50b1N0cmluZygpKX08L2g1PlxuXHRcdFx0XHRcdFx0e0NBTC5ub3RGb3VuZC5yZWR1Y2U8KHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXT4oXG5cdFx0XHRcdFx0XHRcdChwcmUsIGN1ciwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBDQUwubm90Rm91bmQubGVuZ3RoIC0gMSA/IFsuLi5wcmUsIGN1ciwgPGJyIGtleT17aW5kZXh9IC8+XSA6IFsuLi5wcmUsIGN1cl0sXG5cdFx0XHRcdFx0XHRcdFtdXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtc2VydmVyJywgQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGgudG9TdHJpbmcoKSl9PC9oNT5cblx0XHRcdFx0XHRcdHtDQUwuY29ubmVjdGlvbkVycm9yLnJlZHVjZTwoc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50KVtdPihcblx0XHRcdFx0XHRcdFx0KHByZSwgY3VyLCBpbmRleCkgPT5cblx0XHRcdFx0XHRcdFx0XHRpbmRleCA8IENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XHRcdFx0PyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl1cblx0XHRcdFx0XHRcdFx0XHRcdDogWy4uLnByZSwgY3VyXSxcblx0XHRcdFx0XHRcdFx0W11cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgdXBkYXRlQ291bnRlcigpOiB2b2lkIHtcblx0XHRcdENBTC5jb3VudGVyQ3VycmVudCsrO1xuXHRcdFx0aWYgKENBTC5jb3VudGVyQ3VycmVudCA+IENBTC5jb3VudGVyTmVlZGVkKSB7XG5cdFx0XHRcdHRoaXMuZGlzcGxheVJlc3VsdCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Q0FMLiRjb3VudGVyLnRleHQoQ0FMLmNvdW50ZXJDdXJyZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBhc3luYyBlZGl0Q2F0ZWdvcmllcyhcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRyZXN1bHQ6IFJlY29yZDxzdHJpbmcsIGFueT4sXG5cdFx0XHRtYXJrZWRMYWJlbDogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+WzBdLFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnIHwgJ3JlbW92ZSdcblx0XHQpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRcdGNvbnN0IFttYXJrZWRMYWJlbFRpdGxlLCAkbWFya2VkTGFiZWxdID0gbWFya2VkTGFiZWw7XG5cblx0XHRcdGlmICghcmVzdWx0Py5bJ3F1ZXJ5J10pIHtcblx0XHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvcltDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aF0gPSBtYXJrZWRMYWJlbFRpdGxlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgb3JpZ2luVGV4dDogc3RyaW5nID0gJyc7XG5cdFx0XHRsZXQgc3RhcnR0aW1lc3RhbXA6IG51bWJlciA9IDA7XG5cdFx0XHRsZXQgdGltZXN0YW1wOiBudW1iZXIgPSAwO1xuXHRcdFx0Q0FMLmVkaXRUb2tlbiA9IHJlc3VsdFsncXVlcnknXS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0Y29uc3Qge3BhZ2VzfSA9IHJlc3VsdFsncXVlcnknXTtcblxuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcGFnZXM7XG5cdFx0XHRvcmlnaW5UZXh0ID0gcGFnZT8ucmV2aXNpb25zPy5bMF0uc2xvdHMubWFpbi5jb250ZW50O1xuXHRcdFx0KHtzdGFydHRpbWVzdGFtcH0gPSBwYWdlKTtcblx0XHRcdFt7dGltZXN0YW1wfV0gPSBwYWdlLnJldmlzaW9ucztcblxuXHRcdFx0Y29uc3Qgc291cmNlY2F0OiBzdHJpbmcgPSBDQUwuQ1VSUkVOVF9DQVRFR1JPWTtcblx0XHRcdC8vIENoZWNrIGlmIHRoYXQgZmlsZSBpcyBhbHJlYWR5IGluIHRoYXQgY2F0ZWdvcnlcblx0XHRcdGNvbnN0IHRhcmdlUmVnRXhwID0gYXdhaXQgQ0FMLnJlZ2V4QnVpbGRlcih0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRpZiAobW9kZSAhPT0gJ3JlbW92ZScgJiYgdGFyZ2VSZWdFeHAudGVzdChvcmlnaW5UZXh0KSAmJiBtb2RlICE9PSAnbW92ZScpIHtcblx0XHRcdFx0Q0FMLmFscmVhZHlUaGVyZVtDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aF0gPSBtYXJrZWRMYWJlbFRpdGxlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaXggdGV4dFxuXHRcdFx0bGV0IHRleHQ6IHN0cmluZyA9IG9yaWdpblRleHQ7XG5cdFx0XHRsZXQgc3VtbWFyeTogc3RyaW5nO1xuXHRcdFx0Y29uc3Qgc291cmNlQ2F0UmVnRXhwID0gYXdhaXQgQ0FMLnJlZ2V4QnVpbGRlcihzb3VyY2VjYXQpO1xuXHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2FkZCc6XG5cdFx0XHRcdFx0dGV4dCArPSBgXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9XV1cXG5gO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LWFkZCcpLnJlcGxhY2UoJyQxJywgdGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjb3B5Jzpcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0c291cmNlQ2F0UmVnRXhwLFxuXHRcdFx0XHRcdFx0YFtbJHtDQUwubG9jYWxDYXROYW1lfToke3NvdXJjZWNhdH0kMV1dXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9JDFdXWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LWNvcHknKS5yZXBsYWNlKCckMScsIHNvdXJjZWNhdCkucmVwbGFjZSgnJDInLCB0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRcdFx0Ly8gSWYgY2F0ZWdvcnkgaXMgYWRkZWQgdGhyb3VnaCB0ZW1wbGF0ZTpcblx0XHRcdFx0XHRpZiAob3JpZ2luVGV4dCA9PT0gdGV4dCkge1xuXHRcdFx0XHRcdFx0dGV4dCArPSBgXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9XV1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbW92ZSc6XG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShzb3VyY2VDYXRSZWdFeHAsIGBbWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX0kMV1dYCk7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktbW92ZScpLnJlcGxhY2UoJyQxJywgc291cmNlY2F0KS5yZXBsYWNlKCckMicsIHRhcmdldENhdGVnb3J5KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmVtb3ZlJzpcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKHNvdXJjZUNhdFJlZ0V4cCwgJycpO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LXJlbW92ZScpLnJlcGxhY2UoJyQxJywgc291cmNlY2F0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRleHQgPT09IG9yaWdpblRleHQpIHtcblx0XHRcdFx0Q0FMLm5vdEZvdW5kW0NBTC5ub3RGb3VuZC5sZW5ndGhdID0gbWFya2VkTGFiZWxUaXRsZTtcblx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIHVuY2F0IGFmdGVyIHdlIGNoZWNrZWQgd2hldGhlciB3ZSBjaGFuZ2VkIHRoZSB0ZXh0IHN1Y2Nlc3NmdWxseS5cblx0XHRcdC8vIE90aGVyd2lzZSB3ZSBtaWdodCBmYWlsIHRvIGRvIHRoZSBjaGFuZ2VzLCBidXQgc3RpbGwgcmVwbGFjZSB7e3VuY2F0fX1cblx0XHRcdGlmIChtb2RlICE9PSAncmVtb3ZlJykge1xuXHRcdFx0XHR0ZXh0ID0gQ0FMLmRvQ2xlYW51cChDQUwucmVtb3ZlVW5jYXQodGV4dCkpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdHRva2VuOiBDQUwuZWRpdFRva2VuLFxuXHRcdFx0XHRcdHRhZ3M6IENBTC5BUElfVEFHLFxuXHRcdFx0XHRcdHRpdGxlOiBtYXJrZWRMYWJlbFRpdGxlLFxuXHRcdFx0XHRcdGFzc2VydDogJ3VzZXInLFxuXHRcdFx0XHRcdGJvdDogdHJ1ZSxcblx0XHRcdFx0XHRiYXNldGltZXN0YW1wOiB0aW1lc3RhbXAsXG5cdFx0XHRcdFx0d2F0Y2hsaXN0OiBDQUwuc2V0dGluZ3Mud2F0Y2hsaXN0IGFzIG5ldmVyLFxuXHRcdFx0XHRcdHRleHQsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRzdGFydHRpbWVzdGFtcCxcblx0XHRcdFx0fSxcblx0XHRcdFx0KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0XHRDQUwubWFya0FzRG9uZSgkbWFya2VkTGFiZWwsIHRhcmdldENhdGVnb3J5LCBtb2RlKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRDb250ZW50KFxuXHRcdFx0bWFya2VkTGFiZWw6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPlswXSxcblx0XHRcdHRhcmdldENhdGVnb3J5OiBzdHJpbmcsXG5cdFx0XHRtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJ1xuXHRcdCk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0XHRcdHRpdGxlczogbWFya2VkTGFiZWxbMF0sXG5cdFx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJ10sXG5cdFx0XHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCB0aGlzLmVkaXRDYXRlZ29yaWVzKHJlc3VsdCwgbWFya2VkTGFiZWwsIHRhcmdldENhdGVnb3J5LCBtb2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZ2V0VGl0bGVGcm9tTGluayhocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIChkZWNvZGVVUklDb21wb25lbnQoaHJlZiA/PyAnJykubWF0Y2goL3dpa2lcXC8oLis/KSg/OiMuKyk/JC8pPy5bMV0gPz8gJycpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0TWFya2VkTGFiZWxzKCk6IFtzdHJpbmcsIEpRdWVyeV1bXSB7XG5cdFx0XHRjb25zdCBtYXJrZWRMYWJlbHM6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPiA9IFtdO1xuXHRcdFx0Q0FMLiRzZWxlY3RlZExhYmVscyA9IENBTC4kbGFiZWxzLmZpbHRlcihgLiR7Q0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRH1gKTtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMuZWFjaCgoX2luZGV4LCBsYWJlbCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCAkbGFiZWw6IEpRdWVyeSA9ICQobGFiZWwpO1xuXHRcdFx0XHRjb25zdCAkbGFiZWxMaW5rOiBKUXVlcnkgPSAkbGFiZWwuZmluZCgnYTpub3QoLkNhdGVnb3J5VHJlZVRvZ2dsZSlbdGl0bGVdJyk7XG5cdFx0XHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgPVxuXHRcdFx0XHRcdCRsYWJlbExpbmsuYXR0cigndGl0bGUnKT8udHJpbSgpIHx8XG5cdFx0XHRcdFx0Q0FMLmdldFRpdGxlRnJvbUxpbmsoJGxhYmVsTGluay5hdHRyKCdocmVmJykpIHx8XG5cdFx0XHRcdFx0Q0FMLmdldFRpdGxlRnJvbUxpbmsoJGxhYmVsLmZpbmQoJ2E6bm90KC5DYXRlZ29yeVRyZWVUb2dnbGUpJykuYXR0cignaHJlZicpKTtcblx0XHRcdFx0bWFya2VkTGFiZWxzW21hcmtlZExhYmVscy5sZW5ndGhdID0gW3RpdGxlLCAkbGFiZWxdO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbWFya2VkTGFiZWxzO1xuXHRcdH1cblx0XHRwcml2YXRlIHNob3dQcm9ncmVzcygpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKHtcblx0XHRcdFx0Y3Vyc29yOiAnd2FpdCcsXG5cdFx0XHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0XHRcdH0pO1xuXHRcdFx0Q0FMLiRwcm9ncmVzc0RpYWxvZyA9ICQoXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ2VkaXRpbmcnKX1cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSfT57Q0FMLmNvdW50ZXJDdXJyZW50fTwvc3Bhbj5cblx0XHRcdFx0XHR7W0NBTC5tc2coJ29mJyksIENBTC5jb3VudGVyTmVlZGVkXX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpLmRpYWxvZyh7XG5cdFx0XHRcdGRpYWxvZ0NsYXNzOiBDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRcdFx0XHRtaW5IZWlnaHQ6IDkwLFxuXHRcdFx0XHRoZWlnaHQ6IDkwLFxuXHRcdFx0XHR3aWR0aDogNDUwLFxuXHRcdFx0XHRtb2RhbDogdHJ1ZSxcblx0XHRcdFx0Y2xvc2VPbkVzY2FwZTogZmFsc2UsXG5cdFx0XHRcdGRyYWdnYWJsZTogZmFsc2UsXG5cdFx0XHRcdHJlc2l6YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9GRUVEQkFDS30gLnVpLWRpYWxvZy10aXRsZWJhcmApLmhpZGUoKTtcblx0XHRcdHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9GRUVEQkFDS30gLnVpLWRpYWxvZy1jb250ZW50YCkuaGVpZ2h0KCdhdXRvJyk7XG5cdFx0XHRDQUwuJGNvdW50ZXIgPSB0aGlzLiRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSfWApO1xuXHRcdH1cblx0XHRwcml2YXRlIGRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5OiBzdHJpbmcsIG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnKTogdm9pZCB7XG5cdFx0XHRjb25zdCBtYXJrZWRMYWJlbHM6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPiA9IHRoaXMuZ2V0TWFya2VkTGFiZWxzKCk7XG5cdFx0XHRpZiAoIW1hcmtlZExhYmVscy5sZW5ndGgpIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoQ0FMLm1zZygnbm9uZS1zZWxlY3RlZCcpLCB7XG5cdFx0XHRcdFx0dGFnOiAnY2F0QUxvdCcsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRDQUwuYWxyZWFkeVRoZXJlID0gW107XG5cdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yID0gW107XG5cdFx0XHRDQUwubm90Rm91bmQgPSBbXTtcblx0XHRcdENBTC5jb3VudGVyQ3VycmVudCA9IDE7XG5cdFx0XHRDQUwuY291bnRlck5lZWRlZCA9IG1hcmtlZExhYmVscy5sZW5ndGg7XG5cdFx0XHR0aGlzLnNob3dQcm9ncmVzcygpO1xuXHRcdFx0Zm9yIChjb25zdCBtYXJrZWRMYWJlbCBvZiBtYXJrZWRMYWJlbHMpIHtcblx0XHRcdFx0dGhpcy5nZXRDb250ZW50KG1hcmtlZExhYmVsLCB0YXJnZXRDYXRlZ29yeSwgbW9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgYWRkSGVyZSh0YXJnZXRDYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5LCAnYWRkJyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgY29weUhlcmUodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeSwgJ2NvcHknKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBtb3ZlSGVyZSh0YXJnZXRDYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5LCAnbW92ZScpO1xuXHRcdH1cblx0XHRwcml2YXRlIGNyZWF0ZUNhdExpbmtzKHN5bWJvbDogc3RyaW5nLCBjYXRlZ29yaWVzOiBzdHJpbmdbXSk6IHZvaWQge1xuXHRcdFx0Y2F0ZWdvcmllcy5zb3J0KCk7XG5cdFx0XHRmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcblx0XHRcdFx0Y29uc3QgJHRyID0gJChcblx0XHRcdFx0XHQ8dHIgZGF0YXNldD17e2NhdGVnb3J5fX0+XG5cdFx0XHRcdFx0XHQ8dGQ+e3N5bWJvbH08L3RkPlxuXHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcnl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0KTtcblx0XHRcdFx0Ly8gQ2FuJ3QgbW92ZSB0byBzb3VyY2UgY2F0ZWdvcnlcblx0XHRcdFx0aWYgKGNhdGVnb3J5ICE9PSBDQUwuQ1VSUkVOVF9DQVRFR1JPWSAmJiBDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdFx0JHRyLmFwcGVuZChcblx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT059XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmFkZEhlcmUoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdhZGQnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNhdGVnb3J5ICE9PSBDQUwuQ1VSUkVOVF9DQVRFR1JPWSAmJiAhQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRcdCR0ci5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTn1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY29weUhlcmUoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdjb3B5Jyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTn1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubW92ZUhlcmUoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdtb3ZlJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmZpbmQoJ3RhYmxlJykuYXBwZW5kKCR0cik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgc2hvd0NhdGVnb3J5TGlzdCgpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnJyk7XG5cdFx0XHRjb25zdCBjdXJyZW50Q2F0ZWdvcmllczogc3RyaW5nW10gPSBbQ0FMLmN1cnJlbnRDYXRlZ29yeV07XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmVtcHR5KCk7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmFwcGVuZCg8dGFibGUgLz4pO1xuXHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaRJywgQ0FMLnBhcmVudENhdHMpO1xuXHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaSJywgY3VycmVudENhdGVnb3JpZXMpO1xuXHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaTJywgQ0FMLnN1YkNhdHMpO1xuXHRcdFx0Ly8gUmVzZXQgd2lkdGhcblx0XHRcdHRoaXMuJGNvbnRhaW5lci53aWR0aCgnJyk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIuaGVpZ2h0KCcnKTtcblx0XHRcdHRoaXMuJGNvbnRhaW5lci53aWR0aChNYXRoLm1pbigodGhpcy4kY29udGFpbmVyLndpZHRoKCkgPz8gMCkgKiAxLjEgKyAxNSwgKCQod2luZG93KS53aWR0aCgpID8/IDApIC0gMTApKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuY3NzKHtcblx0XHRcdFx0J21heC1oZWlnaHQnOiBgJHtDQUwuZGlhbG9nSGVpZ2h0fXB4YCxcblx0XHRcdFx0aGVpZ2h0OiAnJyxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldFBhcmVudENhdHMoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHR0aXRsZXM6IGBDYXRlZ29yeToke0NBTC5jdXJyZW50Q2F0ZWdvcnl9YCxcblx0XHRcdFx0XHRwcm9wOiAnY2F0ZWdvcmllcycsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDQUwucGFyZW50Q2F0cyA9IFtdO1xuXHRcdFx0XHRcdGNvbnN0IHtwYWdlc30gPSByZXN1bHQucXVlcnk7XG5cdFx0XHRcdFx0aWYgKHBhZ2VzWzBdPy5taXNzaW5nKSB7XG5cdFx0XHRcdFx0XHR0aGlzLiRib2R5LmNzcygnY3Vyc29yJywgJycpO1xuXHRcdFx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5odG1sKFxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORH0+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2NhdC1ub3QtZm91bmQnKX1cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkicsIFtDQUwuY3VycmVudENhdGVnb3J5XSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxldCBjYXRlZ29yaWVzOiB7dGl0bGU6IHN0cmluZ31bXSA9IFtdO1xuXHRcdFx0XHRcdGlmIChwYWdlc1swXT8uY2F0ZWdvcmllcykge1xuXHRcdFx0XHRcdFx0W3tjYXRlZ29yaWVzfV0gPSBwYWdlcztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgY2F0VGl0bGUgPSBjYXQudGl0bGUucmVwbGFjZSgvXlteOl0rOi8sICcnKTtcblx0XHRcdFx0XHRcdENBTC5wYXJlbnRDYXRzW0NBTC5wYXJlbnRDYXRzLmxlbmd0aF0gPSBjYXRUaXRsZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Q0FMLmNvdW50ZXJDYXQrKztcblx0XHRcdFx0XHRpZiAoQ0FMLmNvdW50ZXJDYXQgPT09IDIpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2hvd0NhdGVnb3J5TGlzdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRTdWJDYXRzKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0bGlzdDogJ2NhdGVnb3J5bWVtYmVycycsXG5cdFx0XHRcdFx0Y210eXBlOiAnc3ViY2F0Jyxcblx0XHRcdFx0XHRjbWxpbWl0OiBDQUwuc2V0dGluZ3Muc3ViY2F0Y291bnQgYXMgbmV2ZXIsXG5cdFx0XHRcdFx0Y210aXRsZTogYENhdGVnb3J5OiR7Q0FMLmN1cnJlbnRDYXRlZ29yeX1gLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgY2F0czoge3RpdGxlOiBzdHJpbmd9W10gPSByZXN1bHQ/LnF1ZXJ5Py5jYXRlZ29yeW1lbWJlcnMgfHwgW107XG5cdFx0XHRcdFx0Q0FMLnN1YkNhdHMgPSBbXTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGNhdCBvZiBjYXRzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjYXRUaXRsZSA9IGNhdC50aXRsZS5yZXBsYWNlKC9eW146XSs6LywgJycpO1xuXHRcdFx0XHRcdFx0Q0FMLnN1YkNhdHNbQ0FMLnN1YkNhdHMubGVuZ3RoXSA9IGNhdFRpdGxlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDQUwuY291bnRlckNhdCsrO1xuXHRcdFx0XHRcdGlmIChDQUwuY291bnRlckNhdCA9PT0gMikge1xuXHRcdFx0XHRcdFx0dGhpcy5zaG93Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldENhdGVnb3J5TGlzdCgpOiB2b2lkIHtcblx0XHRcdENBTC5jb3VudGVyQ2F0ID0gMDtcblx0XHRcdHRoaXMuZ2V0UGFyZW50Q2F0cygpO1xuXHRcdFx0dGhpcy5nZXRTdWJDYXRzKCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgdXBkYXRlQ2F0cyhjYXQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XG5cdFx0XHRDQUwuY3VycmVudENhdGVnb3J5ID0gY2F0O1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5odG1sKDxkaXY+e0NBTC5tc2coJ2xvYWRpbmcnKX08L2Rpdj4pO1xuXHRcdFx0dGhpcy5nZXRDYXRlZ29yeUxpc3QoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGZpbmRBbGxMYWJlbHMoKTogdm9pZCB7XG5cdFx0XHQvLyBJdCdzIHBvc3NpYmxlIHRvIGFsbG93IGFueSBraW5kIG9mIHBhZ2VzIGFzIHdlbGwgYnV0IHdoYXQgaGFwcGVucyBpZiB5b3UgY2xpY2sgb24gXCJzZWxlY3QgYWxsXCIgYW5kIGRvbid0IGV4cGVjdCBpdFxuXHRcdFx0aWYgKENBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0Q0FMLiRsYWJlbHMgPSB0aGlzLiRib2R5LmZpbmQoJ3RhYmxlLnNlYXJjaFJlc3VsdEltYWdlJykuZmluZCgndHI+dGQnKS5lcSgxKTtcblx0XHRcdFx0aWYgKENBTC5zZXR0aW5ncy5lZGl0cGFnZXMpIHtcblx0XHRcdFx0XHRDQUwuJGxhYmVscyA9IENBTC4kbGFiZWxzLmFkZCgnZGl2Lm13LXNlYXJjaC1yZXN1bHQtaGVhZGluZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRDQUwuJGxhYmVscyA9IHRoaXMuJGJvZHlcblx0XHRcdFx0XHQuZmluZCgnZGl2LmdhbGxlcnl0ZXh0Jylcblx0XHRcdFx0XHQuYWRkKHRoaXMuJGJvZHkuZmluZCgnZGl2I213LWNhdGVnb3J5LW1lZGlhJykuZmluZCgnbGlbY2xhc3MhPVwiZ2FsbGVyeWJveFwiXScpKTtcblx0XHRcdFx0aWYgKENBTC5zZXR0aW5ncy5lZGl0cGFnZXMpIHtcblx0XHRcdFx0XHRjb25zdCAkcGFnZXM6IEpRdWVyeTxIVE1MTElFbGVtZW50PiA9IHRoaXMuJGJvZHlcblx0XHRcdFx0XHRcdC5maW5kKCdkaXYjbXctcGFnZXMsIGRpdiNtdy1zdWJjYXRlZ29yaWVzJylcblx0XHRcdFx0XHRcdC5maW5kKCdsaScpO1xuXHRcdFx0XHRcdENBTC4kbGFiZWxzID0gQ0FMLiRsYWJlbHMuYWRkKCRwYWdlcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBtYWtlQ2xpY2thYmxlKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5maW5kQWxsTGFiZWxzKCk7XG5cdFx0XHRDQUwuJGxhYmVscy5hZGRDbGFzcyhDTEFTU19OQU1FX0xBQkVMKS5vbkNhdEFMb3RTaGlmdENsaWNrKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0dGhpcy51cGRhdGVTZWxlY3Rpb25Db3VudGVyKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHJ1bigpOiB2b2lkIHtcblx0XHRcdGlmICh0aGlzLiRsaW5rLmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEKSkge1xuXHRcdFx0XHR0aGlzLm1ha2VDbGlja2FibGUoKTtcblx0XHRcdFx0dGhpcy4kZGF0YUNvbnRhaW5lci5zaG93KCk7XG5cdFx0XHRcdHRoaXMuJGNvbnRhaW5lci5yZXNpemFibGUoe1xuXHRcdFx0XHRcdGFsc29SZXNpemU6IHRoaXMuJHJlc3VsdExpc3QsXG5cdFx0XHRcdFx0aGFuZGxlczogJ24nLFxuXHRcdFx0XHRcdHJlc2l6ZTogKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCAkY3VycmVudFRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHQkY3VycmVudFRhcmdldC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAnJyxcblx0XHRcdFx0XHRcdFx0dG9wOiAnJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0Q0FMLmRpYWxvZ0hlaWdodCA9ICRjdXJyZW50VGFyZ2V0LmhlaWdodCgpID8/IENBTC5kaWFsb2dIZWlnaHQ7XG5cdFx0XHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdG1heEhlaWdodDogJycsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAnJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmNzcygnbWF4LWhlaWdodCcsICc0NTBweCcpO1xuXHRcdFx0XHRpZiAoQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cygnUGljdHVyZXMgYW5kIGltYWdlcycpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cyhDQUwuQ1VSUkVOVF9DQVRFR1JPWSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLiRjb250YWluZXIucmVzaXphYmxlKCdkZXN0cm95Jyk7XG5cdFx0XHRcdHRoaXMuJGNvbnRhaW5lci5jc3MoJ3dpZHRoJywgJycpO1xuXHRcdFx0XHRDQUwuJGxhYmVscy5vZmYoJ2NsaWNrLmNhdEFMb3QnKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoXG5cdFx0KHdnTmFtZXNwYWNlTnVtYmVyID09PSAtMSAmJiB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ1NlYXJjaCcpIHx8XG5cdFx0d2dOYW1lc3BhY2VOdW1iZXIgPT09IE9QVElPTlMudGFyZ2V0TmFtZXNwYWNlXG5cdCkge1xuXHRcdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gLTEpIHtcblx0XHRcdENBTC5pc1NlYXJjaE1vZGUgPSB0cnVlO1xuXHRcdH1cblx0XHRDQUxbJ3ZhcmlhbnRDYWNoZSddID0gZ2V0Q2FjaGVkS2V5cygpO1xuXHRcdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gT1BUSU9OUy50YXJnZXROYW1lc3BhY2UpIHtcblx0XHRcdGNvbnN0IGNhdGVnb3J5ID0gbXcuY29uZmlnLmdldCgnd2dUaXRsZScpLnJlcGxhY2UoL15DYXRlZ29yeTovLCAnJyk7XG5cdFx0XHRDQUxbJ3ZhcmlhbnRDYWNoZSddW2NhdGVnb3J5XSB8fD0gYXdhaXQgQ0FMLmZpbmRBbGxWYXJpYW50cyhjYXRlZ29yeSk7XG5cdFx0fVxuXHRcdC8qISBDYXQtYS1sb3QgbWVzc2FnZXMgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cblx0XHRzZXRNZXNzYWdlcygpO1xuXHRcdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdFx0bmV3IENBTCgkYm9keSkuYnVpbGRFbGVtZW50cygpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2NhdEFMb3R9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQ2F0LWEtbG90LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuXG5jb25zdCBnZXRDYWNoZWRLZXlzID0gKCkgPT4ge1xuXHRjb25zdCB2YXJpYW50Q2FjaGU6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhcblx0XHQobXcuc3RvcmFnZSBhcyB1bmtub3duIGFzIFN0b3JhZ2UpWydzdG9yZSddIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPlxuXHQpKSB7XG5cdFx0aWYgKGtleS5zdGFydHNXaXRoKE9QVElPTlMuc3RvcmFnZUtleSkgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdGNvbnN0IGNhY2hlS2V5ID0ga2V5LnJlcGxhY2UoT1BUSU9OUy5zdG9yYWdlS2V5LCAnJyk7XG5cdFx0XHR2YXJpYW50Q2FjaGVbY2FjaGVLZXldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2YXJpYW50Q2FjaGU7XG59O1xuXG5leHBvcnQge2dldENhY2hlZEtleXN9O1xuIiwgImltcG9ydCB7Q0xBU1NfTkFNRV9MQUJFTCwgQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVELCBDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEfSBmcm9tICcuL2NvbnN0YW50JztcblxudHlwZSBPbkNhdEFMb3RTaGlmdENsaWNrID0gKHRoaXM6IEpRdWVyeSwgY2FsbGJhY2s6ICgpID0+IHVua25vd24pID0+IEpRdWVyeTtcbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIEpRdWVyeSB7XG5cdFx0b25DYXRBTG90U2hpZnRDbGljazogT25DYXRBTG90U2hpZnRDbGljaztcblx0fVxufVxuXG5jb25zdCBleHRlbmRKUXVlcnlQcm90b3R5cGUgPSAoKTogdm9pZCA9PiB7XG5cdCQuZm4uZXh0ZW5kKHtcblx0XHRvbkNhdEFMb3RTaGlmdENsaWNrOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGxldCBwcmV2Q2hlY2tib3g6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblxuXHRcdFx0Ly8gV2hlbiBvdXIgYm94ZXMgYXJlIGNsaWNrZWQuLlxuXHRcdFx0dGhpcy5vbignY2xpY2suY2F0QUxvdCcsIChldmVudDogSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdC8vIFByZXZlbnQgZm9sbG93aW5nIHRoZSBsaW5rIGFuZCB0ZXh0IHNlbGVjdGlvblxuXHRcdFx0XHRpZiAoIWV2ZW50LmN0cmxLZXkpIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSGlnaGxpZ2h0IGxhc3Qgc2VsZWN0ZWRcblx0XHRcdFx0dGhpcy5wYXJlbnRzKCdib2R5Jylcblx0XHRcdFx0XHQuZmluZChgLiR7Q0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEfWApXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCk7XG5cblx0XHRcdFx0bGV0ICR0aGlzQ29udHJvbCA9ICQoZXZlbnQudGFyZ2V0KSBhcyBKUXVlcnk7XG5cdFx0XHRcdGlmICghJHRoaXNDb250cm9sLmhhc0NsYXNzKENMQVNTX05BTUVfTEFCRUwpKSB7XG5cdFx0XHRcdFx0JHRoaXNDb250cm9sID0gJHRoaXNDb250cm9sLnBhcmVudHMoYC4ke0NMQVNTX05BTUVfTEFCRUx9YCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkdGhpc0NvbnRyb2wuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEKS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEKTtcblxuXHRcdFx0XHQvLyBBbmQgb25lIGhhcyBiZWVuIGNsaWNrZWQgYmVmb3JlLi4uXG5cdFx0XHRcdGlmIChwcmV2Q2hlY2tib3ggJiYgZXZlbnQuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHRjb25zdCBtZXRob2Q6ICdhZGRDbGFzcycgfCAncmVtb3ZlQ2xhc3MnID0gJHRoaXNDb250cm9sLmhhc0NsYXNzKENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQpXG5cdFx0XHRcdFx0XHQ/ICdhZGRDbGFzcydcblx0XHRcdFx0XHRcdDogJ3JlbW92ZUNsYXNzJztcblx0XHRcdFx0XHQvLyBDaGVjayBvciB1bmNoZWNrIHRoaXMgb25lIGFuZCBhbGwgaW4tYmV0d2VlbiBjaGVja2JveGVzXG5cdFx0XHRcdFx0dGhpcy5zbGljZShcblx0XHRcdFx0XHRcdE1hdGgubWluKHRoaXMuaW5kZXgocHJldkNoZWNrYm94KSwgdGhpcy5pbmRleCgkdGhpc0NvbnRyb2wpKSxcblx0XHRcdFx0XHRcdE1hdGgubWF4KHRoaXMuaW5kZXgocHJldkNoZWNrYm94KSwgdGhpcy5pbmRleCgkdGhpc0NvbnRyb2wpKSArIDFcblx0XHRcdFx0XHQpW21ldGhvZF0oQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gRWl0aGVyIHdheSwgdXBkYXRlIHRoZSBwcmV2Q2hlY2tib3ggdmFyaWFibGUgdG8gdGhlIG9uZSBjbGlja2VkIG5vd1xuXHRcdFx0XHRwcmV2Q2hlY2tib3ggPSAkdGhpc0NvbnRyb2w7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IGFzIE9uQ2F0QUxvdFNoaWZ0Q2xpY2ssXG5cdH0pO1xufTtcblxuZXhwb3J0IHtleHRlbmRKUXVlcnlQcm90b3R5cGV9O1xuIiwgImltcG9ydCB7Y2F0QUxvdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtleHRlbmRKUXVlcnlQcm90b3R5cGV9IGZyb20gJy4vbW9kdWxlcy9leHRlbmRKUXVlcnlQcm90b3R5cGUnO1xuXG4vKiEgQ2F0LWEtbG90IHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG5leHRlbmRKUXVlcnlQcm90b3R5cGUoKTtcbnZvaWQgY2F0QUxvdCgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFNBQVU7QUFDVixJQUFBQyxrQkFBbUI7QUFDbkIsSUFBQUMsVUFBVztBQUNYLElBQUFDLGFBQWM7O0FDRmYsSUFBTUMsYUFBcUI7QUFDM0IsSUFBTUMsdUJBQUEsR0FBQUMsT0FBa0NGLFlBQVUsWUFBQTtBQUNsRCxJQUFNRyw0QkFBQSxHQUFBRCxPQUF1Q0Qsc0JBQW9CLFFBQUE7QUFDakUsSUFBTUcsMENBQUEsR0FBQUYsT0FBcURDLDJCQUF5QixpQkFBQTtBQUNwRixJQUFNRSxpREFBQSxHQUFBSCxPQUE0REUseUNBQXVDLFVBQUE7QUFDekcsSUFBTUUsbURBQUEsR0FBQUosT0FBOERFLHlDQUF1QyxZQUFBO0FBQzNHLElBQU1HLHlDQUFBLEdBQUFMLE9BQW9EQywyQkFBeUIsZ0JBQUE7QUFDbkYsSUFBTUsseURBQUEsR0FBQU4sT0FBb0VDLDJCQUF5QixpQ0FBQTtBQUNuRyxJQUFNTSx1Q0FBQSxHQUFBUCxPQUFrREMsMkJBQXlCLGNBQUE7QUFDakYsSUFBTU8sMkNBQUEsR0FBQVIsT0FBc0RPLHNDQUFvQyxPQUFBO0FBQ2hHLElBQU1FLDRDQUFBLEdBQUFULE9BQXVETyxzQ0FBb0MsUUFBQTtBQUNqRyxJQUFNRyw0QkFBQSxHQUFBVixPQUF1Q0Qsc0JBQW9CLFFBQUE7QUFDakUsSUFBTVksaUNBQUEsR0FBQVgsT0FBNENVLDJCQUF5QixRQUFBO0FBQzNFLElBQU1FLHlDQUFBLEdBQUFaLE9BQW9EVyxnQ0FBOEIsV0FBQTtBQUN4RixJQUFNRSw2QkFBQSxHQUFBYixPQUF3Q0YsWUFBVSxrQkFBQTtBQUN4RCxJQUFNZ0Isc0JBQUEsR0FBQWQsT0FBaUNGLFlBQVUsV0FBQTtBQUNqRCxJQUFNaUIsMkJBQUEsR0FBQWYsT0FBc0NjLHFCQUFtQixRQUFBO0FBQy9ELElBQU1FLG1CQUFBLEdBQUFoQixPQUE4QkYsWUFBVSxRQUFBO0FBQzlDLElBQU1tQix3QkFBQSxHQUFBakIsT0FBbUNnQixrQkFBZ0IsUUFBQTtBQUN6RCxJQUFNRSxpQ0FBQSxHQUFBbEIsT0FBNENnQixrQkFBZ0IsaUJBQUE7QUFDbEUsSUFBTUcsNEJBQUEsR0FBQW5CLE9BQXVDZ0Isa0JBQWdCLFlBQUE7QUFFN0QsSUFBTUksa0JBQTJCO0VBQ2hDQyxXQUFXO0lBQ1ZDLFNBQVM7SUFDVEMsWUFBWTtFQUNiO0VBQ0FDLFdBQVc7SUFDVkYsU0FBUztJQUNUQyxZQUFZO0VBQ2I7RUFDQUUsT0FBTztJQUNOSCxTQUFTO0lBQ1RDLFlBQVk7RUFDYjtFQUNBRyxhQUFhO0lBQ1pKLFNBQVM7SUFDVEMsWUFBWTtFQUNiO0VBQ0FJLFdBQVc7SUFDVkwsU0FBUztJQUNUQyxZQUFZO0lBQ1pLLGFBQWE7TUFDWkMsZ0JBQWdCO01BQ2hCQyxZQUFZO01BQ1pDLGVBQWU7TUFDZkMsYUFBYTtJQUNkO0VBQ0Q7QUFDRDtBQUVBLElBQU1DLFdBQXFCLENBQUMsV0FBVyxXQUFXLFNBQVMsU0FBUyxTQUFTLFNBQVMsU0FBUyxPQUFPOztBQ25EdEcsSUFBTTtFQUFDQztBQUFjLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFdkMsSUFBTUMsbUJBQW1COztFQUV4Qiw0QkFBNEI7O0VBRTVCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMkJBQTJCOztFQUUzQiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLHVCQUNDO0VBQ0QsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQiw2QkFBNkI7O0VBRTdCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLDZCQUNDO0VBQ0QsK0JBQ0M7RUFDRCw0QkFDQztFQUNELHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QiwyQkFBMkI7O0VBRTNCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM3QjtBQUVBLElBQU1DLGNBQWNBLE1BQVk7RUFDL0I7QUFDQSxNQUFJTCxtQkFBbUIsTUFBTTtBQUM1QjtFQUNEO0FBRUEsTUFBSSxDQUFDLFdBQVcsU0FBUyxTQUFTLE9BQU8sRUFBRU0sU0FBU04sY0FBYyxHQUFHO0FBQ3BFQyxPQUFHTSxTQUFTQyxJQUE2Qjs7TUFFeEMsNEJBQTRCOztNQUU1QixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQiw2QkFBNkI7TUFDN0Isd0JBQXdCO01BQ3hCLG9CQUFvQjtNQUNwQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLDJCQUEyQjs7TUFFM0IsMkJBQTJCO01BQzNCLHdCQUF3QjtNQUN4Qiw0QkFBNEI7TUFDNUIseUJBQXlCO01BQ3pCLDJCQUEyQjtNQUMzQix1QkFDQztNQUNELDJCQUEyQjtNQUMzQiwyQkFBMkI7TUFDM0IsNkJBQTZCOztNQUU3QixxQkFBcUI7TUFDckIscUJBQXFCO01BQ3JCLGdCQUFnQjtNQUNoQiw2QkFBNkI7TUFDN0IsK0JBQStCO01BQy9CLDRCQUE0QjtNQUM1QixzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLHVCQUF1QjtNQUN2Qix3QkFBd0I7TUFDeEIsdUJBQXVCO01BQ3ZCLHlCQUF5QjtNQUN6Qiw0QkFBNEI7TUFDNUIsMkJBQTJCOztNQUUzQix5QkFBeUI7TUFDekIsMEJBQTBCO01BQzFCLDBCQUEwQjtNQUMxQiw0QkFBNEI7SUFDN0IsQ0FBQztFQUNGLE9BQU87QUFDTlAsT0FBR00sU0FBU0MsSUFBNkI7O01BRXhDLDRCQUE0Qjs7TUFFNUIsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsNkJBQTZCO01BQzdCLHdCQUF3QjtNQUN4QixvQkFBb0I7TUFDcEIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQiwyQkFBMkI7O01BRTNCLDJCQUEyQjtNQUMzQix3QkFBd0I7TUFDeEIsNEJBQTRCO01BQzVCLHlCQUF5QjtNQUN6QiwyQkFBMkI7TUFDM0IsdUJBQ0M7TUFDRCwyQkFBMkI7TUFDM0IsMkJBQTJCO01BQzNCLDZCQUE2Qjs7TUFFN0IscUJBQXFCO01BQ3JCLHFCQUFxQjtNQUNyQixnQkFBZ0I7TUFDaEIsNkJBQTZCO01BQzdCLCtCQUErQjtNQUMvQiw0QkFBNEI7TUFDNUIsc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQix1QkFBdUI7TUFDdkIsd0JBQXdCO01BQ3hCLHVCQUF1QjtNQUN2Qix5QkFBeUI7TUFDekIsNEJBQTRCO01BQzVCLDJCQUEyQjs7TUFFM0IseUJBQXlCO01BQ3pCLDBCQUEwQjtNQUMxQiwwQkFBMEI7TUFDMUIsNEJBQTRCO0lBQzdCLENBQUM7RUFDRjtBQUNEOztBQzdIQSxJQUFBQyxxQkFBbUNDLFFBQUEsaUJBQUE7QUFDbkMsSUFBQUMscUJBQWtCQyxRQUFBRixRQUFBLGdCQUFBLEdBQUEsQ0FBQTs7QUMzQmxCLElBQUFHLG9CQUF3QkgsUUFBQSxpQkFBQTtBQUV4QixJQUFNSSxPQUFBLEdBQWNELGtCQUFBRSxXQUFBLGFBQUFqRCxPQUErQkosT0FBTyxDQUFFOztBQ0Q1RCxJQUFNc0QsZ0JBQWdCQSxNQUFNO0FBQzNCLFFBQU1DLGVBQXlDLENBQUM7QUFDaEQsV0FBQUMsS0FBQSxHQUFBQyxrQkFBMkJDLE9BQU9DLFFBQ2hDcEIsR0FBR3FCLFFBQStCLE9BQU8sQ0FDM0MsR0FBQUosS0FBQUMsZ0JBQUFJLFFBQUFMLE1BQUc7QUFGSCxVQUFXLENBQUNNLEtBQUtDLEtBQUssSUFBQU4sZ0JBQUFELEVBQUE7QUFHckIsUUFBSU0sSUFBSUUsV0FBbUIvRCxVQUFVLEtBQUtnRSxNQUFNQyxRQUFRSCxLQUFLLEdBQUc7QUFDL0QsWUFBTUksV0FBV0wsSUFBSU0sUUFBZ0JuRSxZQUFZLEVBQUU7QUFDbkRzRCxtQkFBYVksUUFBUSxJQUFJSjtJQUMxQjtFQUNEO0FBQ0EsU0FBT1I7QUFDUjs7QUZtQkEsSUFBTTtFQUFDYztFQUE0QkM7RUFBdUJDO0VBQWdCQztFQUFtQkM7QUFBTyxJQUFJbEMsR0FBR0MsT0FBT0MsSUFBSTtBQUt0SCxJQUFNaUMsVUFBQSw0QkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFVLGFBQTJCO0lBQzFDO0lBQ0EsTUFBTUMsSUFBSTtNQUNULE9BQWNDLGVBQWU7TUFFN0IsT0FBd0JDLFdBQXVDckM7TUFDL0QsT0FBd0JsQixrQkFBMkJBO01BRW5ELE9BQXdCd0QsVUFBMEJsRjtNQUNsRCxPQUF3Qm1GLG1CQUFtQ2xGO01BRTNELE9BQXdCbUYsbUJBQTJCVDtNQUVuRCxPQUF3Qkgsd0JBQWdEQTtNQUN4RSxPQUF3QkMsaUJBQXlDQTtNQUVqRSxPQUFlWSxxQkFBcUI7TUFFcEMsT0FBZS9CLE1BQU1BO01BRXJCLE9BQWVnQyxlQUF5QixDQUFBO01BQ3hDLE9BQWVDLGtCQUE0QixDQUFBO01BQzNDLE9BQWVDLFdBQXFCLENBQUE7TUFDcEMsT0FBZUMsaUJBQWlCO01BQ2hDLE9BQWVDLGdCQUFnQjtNQUUvQixPQUFlQyxhQUFhO01BQzVCLE9BQWVDLGtCQUFrQjtNQUVqQyxPQUFlQyxlQUFlO01BQzlCLE9BQWVDLFlBQVk7TUFDM0IsT0FBZUMsZUFBZXZCLHNCQUFzQk8sSUFBSUksZ0JBQWdCO01BRXhFLE9BQWVhLGFBQXVCLENBQUE7TUFDdEMsT0FBZUMsVUFBb0IsQ0FBQTtNQUVuQyxPQUFlQyxXQUFvRCxDQUFDO01BQ3BFLE9BQWV6QyxlQUF5QyxDQUFDOztNQUd6RCxPQUFlMEMsZUFBZTtNQUM5QixPQUFlQyxlQUlWLENBQUE7TUFDTCxPQUFlQyxrQkFBa0I7TUFDakMsT0FBZUMsWUFBWTtNQUUzQixPQUFlQyxlQUFrQkMsSUFBa0M7QUFDbEUsZUFBTyxJQUFJQyxRQUFvQixDQUFDQyxTQUFTQyxXQUFXO0FBQ25ENUIsY0FBSXFCLGFBQWFRLEtBQUs7WUFDckJKO1lBQ0FFO1lBQ0FDO1VBQ0QsQ0FBQztBQUNELGNBQUksQ0FBQzVCLElBQUlzQixpQkFBaUI7QUFDekJ0QixnQkFBSXNCLGtCQUFrQjtBQUN0QixpQkFBS3RCLElBQUk4QixhQUFhO1VBQ3ZCO1FBQ0QsQ0FBQztNQUNGO01BRUEsT0FBcUJBLGVBQThCO0FBQUEsZUFBQS9CLGtCQUFBLGFBQUE7QUFDbEQsaUJBQU9DLElBQUlxQixhQUFhckMsUUFBUTtBQUMvQixrQkFBTTtjQUFDeUM7Y0FBSUU7Y0FBU0M7WUFBTSxJQUFJNUIsSUFBSXFCLGFBQWFVLE1BQU07QUFDckQsa0JBQU1DLE1BQU1DLEtBQUtELElBQUk7QUFDckIsa0JBQU1FLE9BQU9DLEtBQUtDLElBQUksR0FBR3BDLElBQUlvQixnQkFBZ0JZLE1BQU1oQyxJQUFJdUIsVUFBVTtBQUNqRSxnQkFBSVcsTUFBTTtBQUNULG9CQUFNLElBQUlSLFFBQVNXLE9BQU1DLFdBQVdELEdBQUdILElBQUksQ0FBQztZQUM3QztBQUNBbEMsZ0JBQUl1QixZQUFZVSxLQUFLRCxJQUFJO0FBQ3pCLGdCQUFJO0FBQ0gsb0JBQU1PLE1BQUEsTUFBWWQsR0FBRztBQUNyQkUsc0JBQVFZLEdBQUc7WUFDWixTQUFTQyxHQUFHO0FBQ1haLHFCQUFPWSxDQUFDO1lBQ1Q7VUFDRDtBQUNBeEMsY0FBSXNCLGtCQUFrQjtRQUFBLENBQUEsRUFBQTtNQUN2QjtNQUVBLE9BQWVtQixXQUFtQkMsRUFBRTtNQUNwQyxPQUFlQyxrQkFBMEJELEVBQUU7TUFDM0MsT0FBZUUsVUFBa0JGLEVBQUU7TUFDbkMsT0FBZUcsa0JBQTBCSCxFQUFFO01BRTFCSTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUVWQyxZQUFZUixPQUFnQztBQUFBLFlBQUFTO0FBQ2xELFlBQUksQ0FBQzdGLEdBQUc4RixRQUFRLG1CQUFtQixFQUFFQyxNQUFNLEdBQUc7QUFDN0MvRixhQUFHTSxTQUFTQyxJQUFJK0IsSUFBSUUsUUFBUTtRQUM3QjtBQUVBLGFBQUs0QyxRQUFRQTtBQUNiOUMsWUFBSTBELGFBQWE7QUFFakIsY0FBTUMsWUFDTHZGLG1DQUFBdkIsUUFBQStHLGNBQUMsT0FBQTtVQUFJQyxXQUFXLENBQUN4SSxZQUFZQyxzQkFBc0IsU0FBUztRQUFBLEdBQzNEOEMsbUNBQUF2QixRQUFBK0csY0FBQyxPQUFBO1VBQUlDLFdBQVdySTtRQUFBLEdBQ2Y0QyxtQ0FBQXZCLFFBQUErRyxjQUFDLE9BQUE7VUFBSUMsV0FBV2pJO1FBQUEsQ0FBd0MsR0FDeER3QyxtQ0FBQXZCLFFBQUErRyxjQUFDLE9BQUE7VUFBSUMsV0FBV3BJO1FBQUEsQ0FBeUMsR0FDekQyQyxtQ0FBQXZCLFFBQUErRyxjQUFDLE9BQUEsTUFDQXhGLG1DQUFBdkIsUUFBQStHLGNBQUMsU0FBQTtVQUNBQyxXQUFXaEk7VUFDWGlJLGFBQWE5RCxJQUFJK0QsSUFBSSxZQUFZO1VBQ2pDQyxNQUFLO1VBQ0w5RSxPQUFPYyxJQUFJQyxnQkFBQXNELHdCQUFnQjdGLEdBQUd1RyxLQUFLQyxjQUFjLFFBQVEsT0FBQSxRQUFBWCwwQkFBQSxTQUFBQSx3QkFBSyxLQUFNO1VBQ3BFWSxXQUFZQyxXQUFnQjtBQUMzQixrQkFBTUMsV0FBVzNCLEVBQW9CMEIsTUFBTUUsYUFBYTtBQUN4RCxnQkFBSUYsTUFBTW5GLFFBQVEsU0FBUztBQUFBLGtCQUFBc0Ysb0JBQUFDO0FBQzFCLG9CQUFNQyxPQUFBRixzQkFBQUMsZ0JBQWNILFNBQVNLLElBQUksT0FBQSxRQUFBRixrQkFBQSxTQUFBLFNBQWJBLGNBQWdCRyxLQUFLLE9BQUEsUUFBQUosdUJBQUEsU0FBQUEscUJBQUs7QUFDOUMsa0JBQUlFLEtBQUs7QUFDUixxQkFBS0csV0FBV0gsR0FBRztjQUNwQjtZQUNEO1VBQ0Q7UUFBQSxDQUNELENBQ0QsR0FDQXJHLG1DQUFBdkIsUUFBQStHLGNBQUMsT0FBQTtVQUFJQyxXQUFXL0g7UUFBQSxHQUNkLENBQUNrRSxJQUFJK0QsSUFBSSxRQUFRLEdBQUcsR0FBRyxHQUN4QjNGLG1DQUFBdkIsUUFBQStHLGNBQUMsS0FBQTtVQUNBQyxXQUFXOUg7VUFDWDhJLFNBQVNBLE1BQVk7QUFDcEIsaUJBQUtDLFVBQVUsSUFBSTtVQUNwQjtRQUFBLEdBRUM5RSxJQUFJK0QsSUFBSSxLQUFLLENBQ2YsR0FDQyxPQUNEM0YsbUNBQUF2QixRQUFBK0csY0FBQyxLQUFBO1VBQ0FDLFdBQVc3SDtVQUNYNkksU0FBU0EsTUFBWTtBQUNwQixpQkFBS0MsVUFBVSxLQUFLO1VBQ3JCO1FBQUEsR0FFQzlFLElBQUkrRCxJQUFJLE1BQU0sQ0FDaEIsQ0FDRCxDQUNELEdBQ0EzRixtQ0FBQXZCLFFBQUErRyxjQUFDLE9BQUE7VUFBSUMsV0FBVzVIO1FBQUEsR0FDZm1DLG1DQUFBdkIsUUFBQStHLGNBQUMsS0FBQTtVQUFFQyxXQUFXM0g7UUFBQSxHQUFnQyxXQUFTLENBQ3hELENBQ0Q7QUFHRCxhQUFLNkcsYUFBYUwsRUFBRWlCLFNBQVM7QUFDN0IsYUFBS1osV0FBV2dDLFNBQVMsS0FBS2pDLEtBQUs7QUFFbkMsYUFBS0UsaUJBQWlCLEtBQUtELFdBQVdpQyxLQUFBLElBQUF6SixPQUFTQyx5QkFBeUIsQ0FBRTtBQUMxRSxhQUFLeUgsZUFBZSxLQUFLRCxlQUFlZ0MsS0FBQSxJQUFBekosT0FBU0ssc0NBQXNDLENBQUU7QUFDekYsYUFBS3NILGNBQWMsS0FBS0YsZUFBZWdDLEtBQUEsSUFBQXpKLE9BQVNFLHVDQUF1QyxDQUFFO0FBQ3pGLGFBQUswSCxlQUFlLEtBQUtILGVBQWVnQyxLQUFBLElBQUF6SixPQUNuQ00sc0RBQXNELENBQzNEO0FBRUEsYUFBS3VILFFBQVEsS0FBS0wsV0FBV2lDLEtBQUEsSUFBQXpKLE9BQVNVLHlCQUF5QixDQUFFO0FBQ2pFLGFBQUtvSCxRQUFRLEtBQUtELE1BQU00QixLQUFBLElBQUF6SixPQUE0QlcsOEJBQThCLENBQUU7TUFDckY7TUFFTytJLGdCQUFzQjtBQUM1QixjQUFNQyxXQUFtQixJQUFJQyxPQUFBLFFBQUE1SixPQUFleUUsSUFBSW9GLGVBQWVwRixJQUFJSSxrQkFBa0IsVUFBVSxHQUFDLEdBQUEsR0FBSyxFQUFFO0FBQ3ZHLFlBQUlpRjtBQUVKLGFBQUtsQyxhQUFhbUMsR0FBRyxvQkFBb0IsTUFBTTtBQUM5Q0QsK0JBQXFCO1FBQ3RCLENBQUM7QUFFRCxhQUFLbEMsYUFBYW1DLEdBQUcsa0JBQWtCLE1BQU07QUFDNUNELCtCQUFxQjtRQUN0QixDQUFDO0FBRUQsYUFBS2xDLGFBQWFtQyxHQUFHLGVBQWdCbEIsV0FBZ0I7QUFDcEQsY0FBSWlCLG9CQUFvQjtBQUN2QjtVQUNEO0FBQ0EsZ0JBQU07WUFBQ2Y7VUFBYSxJQUFJRjtBQUN4QixnQkFBTTtZQUFDbEYsT0FBT3FHO1VBQU0sSUFBSWpCO0FBQ3hCLGdCQUFNa0IsU0FBaUJELE9BQU9oRyxRQUFRMkYsVUFBVSxFQUFFO0FBQ2xELGNBQUlNLFdBQVdELFFBQVE7QUFDdEJqQiwwQkFBY3BGLFFBQVFzRztVQUN2QjtRQUNELENBQUM7QUFFRCxjQUFNQyxtQkFBbUJBLE1BQVk7QUFDcEMsY0FBSXpGLElBQUlNLG9CQUFvQjtBQUMzQjtVQUNEO0FBQ0FOLGNBQUlNLHFCQUFxQjtBQUV6QixlQUFLNkMsYUFBYXVDLGFBQWE7WUFDOUJDLFFBQVFBLENBQUNDLFNBQXlCQyxhQUFrRDtBQUNuRixtQkFBS0MsVUFDSjtnQkFDQ0MsUUFBUTtnQkFDUkMsV0FBV2hHLElBQUlJO2dCQUNmNkYsV0FBVztnQkFDWEMsUUFBUU4sUUFBUU87Y0FDakIsR0FDQ0MsWUFBaUI7QUFDakIsb0JBQUlBLE9BQU8sQ0FBQyxHQUFHO0FBQ2RQLDJCQUNDbkQsRUFBRTBELE9BQU8sQ0FBQyxDQUFDLEVBQUVDLElBQUksQ0FBQ0MsUUFBUUMsU0FBeUJBLEtBQUtoSCxRQUFRMkYsVUFBVSxFQUFFLENBQUMsQ0FDOUU7Z0JBQ0Q7Y0FDRCxDQUNEO1lBQ0Q7WUFDQXNCLFVBQVU7Y0FDVEMsSUFBSTtjQUNKQyxJQUFJO2NBQ0pDLElBQUksS0FBS3hEO1lBQ1Y7WUFDQTRCLFVBQUEsSUFBQXhKLE9BQWNELG9CQUFvQjtVQUNuQyxDQUFDO1FBQ0Y7QUFDQSxhQUFLK0gsTUFBTWlDLEdBQUcsU0FBVWxCLFdBQWdCO0FBQ3ZDMUIsWUFBRTBCLE1BQU1FLGFBQWEsRUFBRXNDLFlBQVl6SyxzQ0FBc0M7QUFDekVzSiwyQkFBaUI7QUFDakIsZUFBS29CLElBQUk7UUFDVixDQUFDO01BQ0Y7TUFFQSxPQUFlbkQsZUFBcUI7QUFBQSxZQUFBb0Q7QUFDbkMsWUFBSUMsZ0JBQUFELHVCQUFvQ0UsT0FBT0Msa0JBQUEsUUFBQUgseUJBQUEsU0FBQUEsdUJBQWdCLENBQUM7QUFDaEUsY0FBTUkscUJBQXFCLE9BQU9IO0FBQ2xDLFlBQUtHLHVCQUF1QixZQUFZLENBQUM5SCxNQUFNQyxRQUFRMEgsWUFBWSxLQUFNRyx1QkFBdUIsVUFBVTtBQUN6R0gseUJBQWUsQ0FBQztRQUNqQjtBQUVBLGlCQUFBSSxNQUFBLEdBQUFDLGVBQXlCdkksT0FBT3dJLEtBQUtySCxJQUFJckQsZUFBZSxHQUFBd0ssTUFBQUMsYUFBQXBJLFFBQUFtSSxPQUF3QjtBQUFBLGNBQUFHO0FBQWhGLGdCQUFXQyxhQUFBSCxhQUFBRCxHQUFBO0FBQ1YsZ0JBQU1LLFVBQVV4SCxJQUFJckQsZ0JBQWdCNEssVUFBVTtBQUU5Q3ZILGNBQUltQixTQUFTb0csVUFBVSxLQUFBRCx3QkFBSVAsYUFBYVEsVUFBVSxPQUFBLFFBQUFELDBCQUFBLFNBQUFBLHdCQUFLRSxRQUFRM0s7QUFFL0QsY0FBSSxDQUFDMkssUUFBUXJLLGFBQWE7QUFDekI7VUFDRDtBQUVBcUssa0JBQVFDLFNBQVMsQ0FBQztBQUNsQixtQkFBQUMsTUFBQSxHQUFBQyxnQkFBeUI5SSxPQUFPd0ksS0FBS0csUUFBUXJLLFdBQVcsR0FBQXVLLE1BQUFDLGNBQUEzSSxRQUFBMEksT0FBRztBQUEzRCxrQkFBV0UsYUFBQUQsY0FBQUQsR0FBQTtBQUNWLGtCQUFNbEUsVUFBa0JnRSxRQUFRckssWUFBWXlLLFVBQVU7QUFJdERKLG9CQUFRQyxPQUFPekgsSUFBSStELElBQUk2RCxVQUFtQixDQUFDLElBQUlwRTtVQUNoRDtRQUNEO01BQ0Q7TUFFQSxPQUFlTyxJQUFJOUUsUUFBK0Q0SSxNQUF3QjtBQUN6RyxjQUFNQyxVQUFBLGFBQUF2TSxPQUErQjBELEdBQUc7QUFJeEMsZUFBTzRJLEtBQUs3SSxTQUFTdEIsR0FBRzhGLFFBQVFzRSxTQUFTLEdBQUdELElBQUksRUFBRXBFLE1BQU0sSUFBSS9GLEdBQUc4RixRQUFRc0UsT0FBTyxFQUFFQyxNQUFNO01BQ3ZGO01BQ0EsT0FBZTNDLGVBQWU0QyxpQkFBeUJDLFVBQTBCO0FBQUEsWUFBQUM7QUFFaEYsY0FBTUMsZ0JBQXdCQyxPQUFPQyxJQUFBQyxvQkFBQUEsa0JBQUFDLHVCQUFBLENBQUEsNkJBQUEsR0FBQSxDQUFBLCtFQUFBLENBQUEsRUFBQTtBQUNyQyxjQUFNQyxrQkFBMEIsSUFBSXJELE9BQU9nRCxlQUFlLEdBQUc7QUFDN0QsY0FBTU0saUJBQWtCQyxVQUFxQztBQUM1RCxjQUFJLEVBQUNBLFNBQUEsUUFBQUEsU0FBQSxVQUFBQSxLQUFNMUosU0FBUTtBQUNsQixtQkFBTztVQUNSO0FBQ0EsY0FBSTJKLFlBQW9CO0FBQ3hCLG1CQUFTQyxJQUFZLEdBQUdBLElBQUlGLEtBQUsxSixRQUFRNEosS0FBSztBQUM3QyxrQkFBTUMsVUFBa0JILEtBQUtJLE1BQU1GLEdBQUdBLElBQUksQ0FBQztBQUMzQyxrQkFBTUcsS0FBYUYsUUFBUUcsWUFBWTtBQUN2QyxrQkFBTUMsS0FBYUosUUFBUUssWUFBWTtBQUN2Q1AseUJBQWFJLE9BQU9FLEtBQUtKLFVBQUEsSUFBQXROLE9BQWN3TixFQUFFLEVBQUF4TixPQUFHME4sSUFBRSxHQUFBO1VBQy9DO0FBQ0EsaUJBQU9OLFVBQVVwSixRQUFRLG1CQUFtQjZJLE9BQU9DLElBQUFjLHFCQUFBQSxtQkFBQVosdUJBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxDQUFRLEVBQUVoSixRQUFRaUosaUJBQWlCTCxhQUFhO1FBQ3BHO0FBQ0FGLG1CQUFXQSxTQUFTZSxZQUFZO0FBQ2hDLGNBQU1JLGFBQUFsQix3QkFBZ0NsSSxJQUFJUCxzQkFBc0J1SSxlQUFlLE9BQUEsUUFBQUUsMEJBQUEsU0FBQSxTQUF6Q0Esc0JBQTRDYyxZQUFZO0FBQzlGLFlBQUlLLGNBQXNCWixlQUFlVyxTQUFTO0FBQ2xELFlBQUluQixZQUFZbUIsY0FBY25CLFVBQVU7QUFDdkNvQix5QkFBQSxJQUFBOU4sT0FBbUJrTixlQUFlUixRQUFRLENBQUM7UUFDNUM7QUFDQSxpQkFBQXFCLE1BQUEsR0FBQUMsZ0JBQXNCMUssT0FBT3dJLEtBQUtySCxJQUFJTixjQUFjLEdBQUE0SixNQUFBQyxjQUFBdkssUUFBQXNLLE9BQUc7QUFBdkQsZ0JBQVdFLFVBQUFELGNBQUFELEdBQUE7QUFDVixjQUNDRSxRQUFRUixZQUFZLE1BQU1JLGFBQzFCSSxRQUFRUixZQUFZLE1BQU1mLFlBQzFCakksSUFBSU4sZUFBZThKLE9BQU8sTUFBTXhCLGlCQUMvQjtBQUNEcUIsMkJBQUEsSUFBQTlOLE9BQW1Ca04sZUFBZWUsT0FBTyxDQUFDO1VBQzNDO1FBQ0Q7QUFDQSxlQUFBLE1BQUFqTyxPQUFhOE4sYUFBVyxHQUFBO01BQ3pCO01BQ1FJLHlCQUErQjtBQUN0Q3pKLFlBQUk2QyxrQkFBa0I3QyxJQUFJNEMsUUFBUThHLE9BQUEsSUFBQW5PLE9BQVdtQix5QkFBeUIsQ0FBRTtBQUN4RSxhQUFLdUcsYUFBYTBHLEtBQUssRUFBRUMsS0FBSzVKLElBQUkrRCxJQUFJLGtCQUFrQi9ELElBQUk2QyxnQkFBZ0I3RCxPQUFPNkssU0FBUyxDQUFDLENBQUM7TUFDL0Y7TUFDUS9FLFVBQVUyQyxRQUF1QjtBQUl4Q3pILFlBQUk0QyxRQUFRZ0UsWUFBWWxLLDJCQUEyQitLLE1BQU07QUFDekQsYUFBS2dDLHVCQUF1QjtNQUM3QjtNQUVBLE9BQW9CSyxnQkFBZ0JDLFVBQXFDO0FBQUEsZUFBQWhLLGtCQUFBLGFBQUE7QUFDeEUsY0FBSUMsSUFBSXRCLGFBQWFxTCxRQUFRLE1BQU0sVUFBYTNLLE1BQU1DLFFBQVFXLElBQUl0QixhQUFhcUwsUUFBUSxDQUFDLEdBQUc7QUFDMUYsbUJBQU8vSixJQUFJdEIsYUFBYXFMLFFBQVE7VUFDakM7QUFDQSxjQUNDck0sR0FBR3FCLFFBQVFpTCxVQUFrQjVPLGFBQWEyTyxRQUFRLE1BQU0sVUFDeEQzSyxNQUFNQyxRQUFRM0IsR0FBR3FCLFFBQVFpTCxVQUFrQjVPLGFBQWEyTyxRQUFRLENBQUMsR0FDaEU7QUFDRC9KLGdCQUFJdEIsYUFBYXFMLFFBQVEsSUFBSXJNLEdBQUdxQixRQUFRaUwsVUFBa0I1TyxhQUFhMk8sUUFBUTtBQUMvRSxtQkFBTy9KLElBQUl0QixhQUFhcUwsUUFBUTtVQUNqQztBQUNBLGdCQUFNRSxVQUFvQixDQUFDRixRQUFRO0FBQ25DLGdCQUFNRyxTQUF5QjtZQUM5Qm5FLFFBQVE7WUFDUm9FLFFBQVE7WUFDUkMsZUFBZTtZQUNmQyxNQUFBLGlEQUFBOU8sT0FDb0J3TyxVQUFRLDJDQUFBLEVBQUF4TyxPQUNFd08sVUFBUSwyQ0FBQSxFQUFBeE8sT0FDUndPLFVBQVEsdUNBQUEsRUFBQXhPLE9BQ1p3TyxVQUFRLHVDQUFBLEVBQUF4TyxPQUNSd08sVUFBUSx1Q0FBQSxFQUFBeE8sT0FDUndPLFVBQVEsdUNBQUEsRUFBQXhPLE9BQ1J3TyxVQUFRLHVDQUFBLEVBQUF4TyxPQUNSd08sVUFBUSx1Q0FBQSxFQUFBeE8sT0FDUndPLFVBQVEsZ0JBQUE7WUFFbENPLE9BQU87WUFDUEMsU0FBUztVQUNWO0FBQ0EsY0FBSTtBQUNILGtCQUFNO2NBQUM5RztZQUFLLElBQUEsTUFBVXpELElBQUl3QixlQUFlLE1BQU14QixJQUFJekIsSUFBSVgsSUFBSXNNLE1BQU0sQ0FBQztBQUNsRSxrQkFBTTtjQUFDRztZQUFJLElBQUk1RztBQUNmLGtCQUFNK0csVUFBVTlILEVBQUUySCxJQUFJO0FBQ3RCLHFCQUFBSSxNQUFBLEdBQUFDLFlBQXNCbE4sVUFBQWlOLE1BQUFDLFVBQUExTCxRQUFBeUwsT0FBVTtBQUFoQyxvQkFBV0YsVUFBQUcsVUFBQUQsR0FBQTtBQUNWLG9CQUFNRSxlQUFlSCxRQUFReEYsS0FBQSxRQUFBekosT0FBYWdQLE9BQU8sQ0FBRTtBQUNuRCxrQkFBSUksYUFBYTNMLFNBQVMsR0FBRztBQUM1QmlMLHdCQUFRQSxRQUFRakwsTUFBTSxJQUFJMkwsYUFBYU4sS0FBSztjQUM3QztZQUNEO1VBQ0QsUUFBUTtVQUFDO0FBRVRySyxjQUFJdEIsYUFBYXFMLFFBQVEsS0FBQSxHQUFJN0wsbUJBQUEwTSxhQUFZWCxPQUFPO0FBQ2hEdk0sYUFBR3FCLFFBQVE4TCxVQUFrQnpQLGFBQWEyTyxVQUFVL0osSUFBSXRCLGFBQWFxTCxRQUFRLEdBQUcsS0FBSyxLQUFLLEVBQUU7QUFDNUYsaUJBQU8vSixJQUFJdEIsYUFBYXFMLFFBQVE7UUFBQSxDQUFBLEVBQUE7TUFDakM7TUFFQSxPQUFxQmUsYUFBYWYsVUFBbUM7QUFBQSxlQUFBaEssa0JBQUEsYUFBQTtBQUVwRSxnQkFBTXlKLFVBQWtCeEosSUFBSW9GLGVBQWVwRixJQUFJSSxrQkFBa0IsVUFBVTtBQUUzRTJKLHFCQUFXQSxTQUFTeEssUUFBUSxXQUFXLEVBQUUsRUFBRUEsUUFBUSxXQUFXLEVBQUU7QUFFaEUsZ0JBQU13TCxXQUFBLE1BQTJCL0ssSUFBSThKLGdCQUFnQkMsUUFBUTtBQUU3RCxnQkFBTWlCLGlCQUEyQixDQUFBO0FBQUMsY0FBQUMsYUFBQUMsMkJBQ2RILFFBQUEsR0FBQUk7QUFBQSxjQUFBO0FBQXBCLGlCQUFBRixXQUFBRyxFQUFBLEdBQUEsRUFBQUQsU0FBQUYsV0FBQUksRUFBQSxHQUFBQyxRQUE4QjtBQUFBLGtCQUFyQmYsVUFBQVksT0FBQWpNO0FBQ1JxTCx3QkFBVTdNLEdBQUd1RyxLQUFLc0gsYUFBYWhCLE9BQU87QUFFdENBLHdCQUFVQSxRQUFRaEwsUUFBUSxXQUFXNkksT0FBT0MsSUFBQW1ELHFCQUFBQSxtQkFBQWpELHVCQUFBLENBQUEsT0FBQSxHQUFBLENBQUEsU0FBQSxDQUFBLEVBQUEsQ0FBVztBQUV2RCxvQkFBTWtELFFBQWdCbEIsUUFBUXpCLE1BQU0sR0FBRyxDQUFDO0FBQ3hDLGtCQUFJMkMsTUFBTXZDLFlBQVksTUFBTXVDLE1BQU16QyxZQUFZLEdBQUc7QUFDaER1QiwwQkFBQSxJQUFBaFAsT0FBY2tRLE1BQU12QyxZQUFZLENBQUMsRUFBQTNOLE9BQUdrUSxNQUFNekMsWUFBWSxHQUFDLEdBQUEsRUFBQXpOLE9BQUlnUCxRQUFRekIsTUFBTSxDQUFDLENBQUM7Y0FDNUU7QUFDQWtDLDZCQUFlQSxlQUFlaE0sTUFBTSxJQUFJdUw7WUFDekM7VUFBQSxTQUFBbUIsS0FBQTtBQUFBVCx1QkFBQXpJLEVBQUFrSixHQUFBO1VBQUEsVUFBQTtBQUFBVCx1QkFBQVUsRUFBQTtVQUFBO0FBR0EsaUJBQU8sSUFBSXhHLE9BQUEsZ0JBQUE1SixPQUNNaU8sU0FBTyxvQkFBQSxFQUFBak8sT0FBcUJ5UCxlQUFlWSxLQUMxRCxHQUNELEdBQUMsNENBQUEsR0FDRCxHQUNEO1FBQUEsQ0FBQSxFQUFBO01BQ0Q7TUFFUTlGLFVBQ1ArRixTQUVBQyxVQUNDO0FBQ0QsY0FBTTVCLFNBQVMyQjtBQUlmM0IsZUFBTyxRQUFRLElBQUk7QUFDbkJBLGVBQU8sZUFBZSxJQUFJO0FBQzFCLFlBQUl0QixJQUFZO0FBQ2hCLGNBQU1tRCxTQUFTQSxNQUFZO0FBQzFCLGdCQUFNQyxjQUFlQyxXQUF3QjtBQUM1Q3ZPLGVBQUd3TyxJQUFJRCxNQUFNLDJCQUEyQkEsS0FBSztBQUM3QyxnQkFBSXJELElBQUksR0FBRztBQUNWdEcseUJBQVd5SixRQUFRLEdBQUc7QUFDdEJuRDtZQUNELFdBQVdzQixPQUFPLE9BQU8sR0FBRztBQUMzQmxLLGtCQUFJUSxnQkFBZ0JSLElBQUlRLGdCQUFnQnhCLE1BQU0sSUFBSWtMLE9BQU8sT0FBTztBQUNoRSxtQkFBS2lDLGNBQWM7WUFDcEI7VUFDRDtBQUNBLGNBQUlqQyxPQUFPLFFBQVEsTUFBTSxTQUFTO0FBQ2pDbEssZ0JBQUl3QixlQUFlLE1BQU14QixJQUFJekIsSUFBSVgsSUFBSXNNLE1BQU0sQ0FBQyxFQUMxQ2tDLEtBQUtOLFFBQVEsRUFDYk8sTUFBTUwsV0FBVztVQUNwQixPQUFPO0FBQ05oTSxnQkFBSXdCLGVBQWUsTUFBTXhCLElBQUl6QixJQUFJK04sS0FBS3BDLE1BQU0sQ0FBQyxFQUMzQ2tDLEtBQUtOLFFBQVEsRUFDYk8sTUFBTUwsV0FBVztVQUNwQjtRQUNEO0FBQ0FELGVBQU87TUFDUjtNQUVBLE9BQWVRLFdBQ2RDLGNBQ0FDLGdCQUNBQyxNQUNPO0FBQ1BGLHFCQUFhRyxTQUFTblEscUJBQXFCO0FBRTNDLGdCQUFRa1EsTUFBQTtVQUNQLEtBQUs7QUFDSkYseUJBQWFJLE9BQ1p4TyxtQ0FBQXZCLFFBQUErRyxjQUFBeEYsbUJBQUF2QixRQUFBZ1EsVUFBQSxNQUNDek8sbUNBQUF2QixRQUFBK0csY0FBQyxNQUFBLElBQUcsR0FDSDVELElBQUkrRCxJQUFJLGFBQWEwSSxjQUFjLENBQ3JDLENBQ0Q7QUFDQTtVQUNELEtBQUs7QUFDSkQseUJBQWFJLE9BQ1p4TyxtQ0FBQXZCLFFBQUErRyxjQUFBeEYsbUJBQUF2QixRQUFBZ1EsVUFBQSxNQUNDek8sbUNBQUF2QixRQUFBK0csY0FBQyxNQUFBLElBQUcsR0FDSDVELElBQUkrRCxJQUFJLGNBQWMwSSxjQUFjLENBQ3RDLENBQ0Q7QUFDQTtVQUNELEtBQUs7QUFDSkQseUJBQWFJLE9BQ1p4TyxtQ0FBQXZCLFFBQUErRyxjQUFBeEYsbUJBQUF2QixRQUFBZ1EsVUFBQSxNQUNDek8sbUNBQUF2QixRQUFBK0csY0FBQyxNQUFBLElBQUcsR0FDSDVELElBQUkrRCxJQUFJLGFBQWEwSSxjQUFjLENBQ3JDLENBQ0Q7QUFDQTtVQUNELEtBQUs7QUFDSkQseUJBQWFJLE9BQ1p4TyxtQ0FBQXZCLFFBQUErRyxjQUFBeEYsbUJBQUF2QixRQUFBZ1EsVUFBQSxNQUNDek8sbUNBQUF2QixRQUFBK0csY0FBQyxNQUFBLElBQUcsR0FDSDVELElBQUkrRCxJQUFJLGVBQWUwSSxjQUFjLENBQ3ZDLENBQ0Q7QUFDQTtRQUNGO01BQ0Q7TUFDQSxPQUFlSyxVQUFVekMsTUFBc0I7QUFDOUMsZUFBT3JLLElBQUltQixTQUFTdkUsWUFBWXlOLEtBQUs5SyxRQUFRLHlDQUF5QyxFQUFFLElBQUk4SztNQUM3Rjs7TUFDQSxPQUFlMEMsWUFBWTFDLE1BQXNCO0FBQ2hELGVBQU9BLEtBQUs5SyxRQUFRLDBDQUEwQyxFQUFFO01BQ2pFO01BQ1F5TixnQkFBc0I7QUFDN0IsYUFBS2xLLE1BQU1tSyxJQUFJO1VBQ2RDLFFBQVE7VUFDUkMsVUFBVTtRQUNYLENBQUM7QUFDRCxhQUFLckssTUFBTWtDLEtBQUEsSUFBQXpKLE9BQVNjLG1CQUFtQixDQUFFLEVBQUVzUSxTQUFTclEsd0JBQXdCO0FBRTVFLGNBQU04USxVQUFrQnBOLElBQUl5QyxTQUFTNEssT0FBTztBQUM1Q0QsZ0JBQVF4RCxLQUFLeEwsbUNBQUF2QixRQUFBK0csY0FBQyxNQUFBLE1BQUk1RCxJQUFJK0QsSUFBSSxNQUFNLENBQUUsQ0FBSztBQUN2Q3FKLGdCQUFRUixPQUNQeE8sbUNBQUF2QixRQUFBK0csY0FBQXhGLG1CQUFBdkIsUUFBQWdRLFVBQUEsTUFDRTdNLElBQUkrRCxJQUFJLFVBQVUsR0FDbkIzRixtQ0FBQXZCLFFBQUErRyxjQUFDLE1BQUEsSUFBRyxDQUNMLENBQ0Q7QUFFQXdKLGdCQUFRUixPQUNQeE8sbUNBQUF2QixRQUFBK0csY0FBQyxLQUFBO1VBQ0FpQixTQUFTQSxNQUFZO0FBQ3BCN0UsZ0JBQUkyQyxnQkFBZ0IySyxPQUFPO0FBQzNCLGlCQUFLeEksVUFBVSxLQUFLO1VBQ3JCO1FBQUEsR0FFQzlFLElBQUkrRCxJQUFJLGdCQUFnQixDQUMxQixDQUNEO0FBRUEsWUFBSS9ELElBQUlPLGFBQWF2QixRQUFRO0FBQzVCb08sa0JBQVFSLE9BQ1B4TyxtQ0FBQXZCLFFBQUErRyxjQUFBeEYsbUJBQUF2QixRQUFBZ1EsVUFBQSxNQUNDek8sbUNBQUF2QixRQUFBK0csY0FBQyxNQUFBLE1BQUk1RCxJQUFJK0QsSUFBSSxtQkFBbUIvRCxJQUFJTyxhQUFhdkIsT0FBTzZLLFNBQVMsQ0FBQyxDQUFFLEdBQ25FN0osSUFBSU8sYUFBYWdOLE9BQ2pCLENBQUNDLEtBQUtDLEtBQUtDLFVBQ1ZBLFFBQVExTixJQUFJTyxhQUFhdkIsU0FBUyxJQUFJLENBQUMsR0FBR3dPLEtBQUtDLEtBQUtyUCxtQ0FBQXZCLFFBQUErRyxjQUFDLE1BQUE7WUFBRzNFLEtBQUt5TztVQUFBLENBQU8sQ0FBRSxJQUFJLENBQUMsR0FBR0YsS0FBS0MsR0FBRyxHQUN2RixDQUFBLENBQ0QsQ0FDRCxDQUNEO1FBQ0Q7QUFDQSxZQUFJek4sSUFBSVMsU0FBU3pCLFFBQVE7QUFDeEJvTyxrQkFBUVIsT0FDUHhPLG1DQUFBdkIsUUFBQStHLGNBQUF4RixtQkFBQXZCLFFBQUFnUSxVQUFBLE1BQ0N6TyxtQ0FBQXZCLFFBQUErRyxjQUFDLE1BQUEsTUFBSTVELElBQUkrRCxJQUFJLHFCQUFxQi9ELElBQUlTLFNBQVN6QixPQUFPNkssU0FBUyxDQUFDLENBQUUsR0FDakU3SixJQUFJUyxTQUFTOE0sT0FDYixDQUFDQyxLQUFLQyxLQUFLQyxVQUNWQSxRQUFRMU4sSUFBSVMsU0FBU3pCLFNBQVMsSUFBSSxDQUFDLEdBQUd3TyxLQUFLQyxLQUFLclAsbUNBQUF2QixRQUFBK0csY0FBQyxNQUFBO1lBQUczRSxLQUFLeU87VUFBQSxDQUFPLENBQUUsSUFBSSxDQUFDLEdBQUdGLEtBQUtDLEdBQUcsR0FDbkYsQ0FBQSxDQUNELENBQ0QsQ0FDRDtRQUNEO0FBQ0EsWUFBSXpOLElBQUlRLGdCQUFnQnhCLFFBQVE7QUFDL0JvTyxrQkFBUVIsT0FDUHhPLG1DQUFBdkIsUUFBQStHLGNBQUF4RixtQkFBQXZCLFFBQUFnUSxVQUFBLE1BQ0N6TyxtQ0FBQXZCLFFBQUErRyxjQUFDLE1BQUEsTUFBSTVELElBQUkrRCxJQUFJLGtCQUFrQi9ELElBQUlRLGdCQUFnQnhCLE9BQU82SyxTQUFTLENBQUMsQ0FBRSxHQUNyRTdKLElBQUlRLGdCQUFnQitNLE9BQ3BCLENBQUNDLEtBQUtDLEtBQUtDLFVBQ1ZBLFFBQVExTixJQUFJUSxnQkFBZ0J4QixTQUFTLElBQ2xDLENBQUMsR0FBR3dPLEtBQUtDLEtBQUtyUCxtQ0FBQXZCLFFBQUErRyxjQUFDLE1BQUE7WUFBRzNFLEtBQUt5TztVQUFBLENBQU8sQ0FBRSxJQUNoQyxDQUFDLEdBQUdGLEtBQUtDLEdBQUcsR0FDaEIsQ0FBQSxDQUNELENBQ0QsQ0FDRDtRQUNEO01BQ0Q7TUFDUXRCLGdCQUFzQjtBQUM3Qm5NLFlBQUlVO0FBQ0osWUFBSVYsSUFBSVUsaUJBQWlCVixJQUFJVyxlQUFlO0FBQzNDLGVBQUtxTSxjQUFjO1FBQ3BCLE9BQU87QUFDTmhOLGNBQUl5QyxTQUFTNEgsS0FBS3JLLElBQUlVLGNBQWM7UUFDckM7TUFDRDtNQUNjaU4sZUFFYnZILFFBQ0F3SCxhQUNBbkIsZ0JBQ0FDLE1BQ2dCO0FBQUEsWUFBQW1CLFFBQUE7QUFBQSxlQUFBOU4sa0JBQUEsYUFBQTtBQUFBLGNBQUErTjtBQUNoQixnQkFBTSxDQUFDQyxrQkFBa0J2QixZQUFZLElBQUlvQjtBQUV6QyxjQUFJLEVBQUN4SCxXQUFBLFFBQUFBLFdBQUEsVUFBQUEsT0FBUyxPQUFPLElBQUc7QUFDdkJwRyxnQkFBSVEsZ0JBQWdCUixJQUFJUSxnQkFBZ0J4QixNQUFNLElBQUkrTztBQUNsREYsa0JBQUsxQixjQUFjO0FBQ25CO1VBQ0Q7QUFFQSxjQUFJNkIsYUFBcUI7QUFDekIsY0FBSUMsaUJBQXlCO0FBQzdCLGNBQUlDLFlBQW9CO0FBQ3hCbE8sY0FBSWUsWUFBWXFGLE9BQU8sT0FBTyxFQUFFK0gsT0FBT0M7QUFDdkMsZ0JBQU07WUFBQ0M7VUFBSyxJQUFJakksT0FBTyxPQUFPO0FBRTlCLGdCQUFNLENBQUNrSSxJQUFJLElBQUlEO0FBQ2ZMLHVCQUFhTSxTQUFBLFFBQUFBLFNBQUEsV0FBQVIsa0JBQUFRLEtBQU1DLGVBQUEsUUFBQVQsb0JBQUEsU0FBQSxTQUFOQSxnQkFBa0IsQ0FBQyxFQUFFVSxNQUFNQyxLQUFLQztBQUM3QyxXQUFDO1lBQUNUO1VBQWMsSUFBSUs7QUFDcEIsV0FBQztZQUFDSjtVQUFTLENBQUMsSUFBSUksS0FBS0M7QUFFckIsZ0JBQU1JLFlBQW9CM08sSUFBSUs7QUFFOUIsZ0JBQU11TyxjQUFBLE1BQW9CNU8sSUFBSThLLGFBQWEyQixjQUFjO0FBQ3pELGNBQUlDLFNBQVMsWUFBWWtDLFlBQVlDLEtBQUtiLFVBQVUsS0FBS3RCLFNBQVMsUUFBUTtBQUN6RTFNLGdCQUFJTyxhQUFhUCxJQUFJTyxhQUFhdkIsTUFBTSxJQUFJK087QUFDNUNGLGtCQUFLMUIsY0FBYztBQUNuQjtVQUNEO0FBR0EsY0FBSTlCLE9BQWUyRDtBQUNuQixjQUFJYztBQUNKLGdCQUFNQyxrQkFBQSxNQUF3Qi9PLElBQUk4SyxhQUFhNkQsU0FBUztBQUN4RCxrQkFBUWpDLE1BQUE7WUFDUCxLQUFLO0FBQ0pyQyxzQkFBQSxPQUFBOU8sT0FBZXlFLElBQUlnQixjQUFZLEdBQUEsRUFBQXpGLE9BQUlrUixnQkFBYyxNQUFBO0FBQ2pEcUMsd0JBQVU5TyxJQUFJK0QsSUFBSSxhQUFhLEVBQUV4RSxRQUFRLE1BQU1rTixjQUFjO0FBQzdEO1lBQ0QsS0FBSztBQUNKcEMscUJBQU9BLEtBQUs5SyxRQUNYd1AsaUJBQUEsS0FBQXhULE9BQ0t5RSxJQUFJZ0IsY0FBWSxHQUFBLEVBQUF6RixPQUFJb1QsV0FBUyxVQUFBLEVBQUFwVCxPQUFXeUUsSUFBSWdCLGNBQVksR0FBQSxFQUFBekYsT0FBSWtSLGdCQUFjLE1BQUEsQ0FDaEY7QUFDQXFDLHdCQUFVOU8sSUFBSStELElBQUksY0FBYyxFQUFFeEUsUUFBUSxNQUFNb1AsU0FBUyxFQUFFcFAsUUFBUSxNQUFNa04sY0FBYztBQUV2RixrQkFBSXVCLGVBQWUzRCxNQUFNO0FBQ3hCQSx3QkFBQSxPQUFBOU8sT0FBZXlFLElBQUlnQixjQUFZLEdBQUEsRUFBQXpGLE9BQUlrUixnQkFBYyxJQUFBO2NBQ2xEO0FBQ0E7WUFDRCxLQUFLO0FBQ0pwQyxxQkFBT0EsS0FBSzlLLFFBQVF3UCxpQkFBQSxLQUFBeFQsT0FBc0J5RSxJQUFJZ0IsY0FBWSxHQUFBLEVBQUF6RixPQUFJa1IsZ0JBQWMsTUFBQSxDQUFNO0FBQ2xGcUMsd0JBQVU5TyxJQUFJK0QsSUFBSSxjQUFjLEVBQUV4RSxRQUFRLE1BQU1vUCxTQUFTLEVBQUVwUCxRQUFRLE1BQU1rTixjQUFjO0FBQ3ZGO1lBQ0QsS0FBSztBQUNKcEMscUJBQU9BLEtBQUs5SyxRQUFRd1AsaUJBQWlCLEVBQUU7QUFDdkNELHdCQUFVOU8sSUFBSStELElBQUksZ0JBQWdCLEVBQUV4RSxRQUFRLE1BQU1vUCxTQUFTO0FBQzNEO1VBQ0Y7QUFFQSxjQUFJdEUsU0FBUzJELFlBQVk7QUFDeEJoTyxnQkFBSVMsU0FBU1QsSUFBSVMsU0FBU3pCLE1BQU0sSUFBSStPO0FBQ3BDRixrQkFBSzFCLGNBQWM7QUFDbkI7VUFDRDtBQUlBLGNBQUlPLFNBQVMsVUFBVTtBQUN0QnJDLG1CQUFPckssSUFBSThNLFVBQVU5TSxJQUFJK00sWUFBWTFDLElBQUksQ0FBQztVQUMzQztBQUVBd0QsZ0JBQUsvSCxVQUNKO1lBQ0NDLFFBQVE7WUFDUmlKLE9BQU9oUCxJQUFJZTtZQUNYa08sTUFBTWpQLElBQUlHO1lBQ1ZtSyxPQUFPeUQ7WUFDUG1CLFFBQVE7WUFDUkMsS0FBSztZQUNMQyxlQUFlbEI7WUFDZmhSLFdBQVc4QyxJQUFJbUIsU0FBU2pFO1lBQ3hCbU47WUFDQXlFO1lBQ0FiO1VBQ0QsR0FDQSxNQUFZO0FBQ1hKLGtCQUFLMUIsY0FBYztVQUNwQixDQUNEO0FBRUFuTSxjQUFJdU0sV0FBV0MsY0FBY0MsZ0JBQWdCQyxJQUFJO1FBQUEsQ0FBQSxFQUFBO01BQ2xEO01BQ1EyQyxXQUNQekIsYUFDQW5CLGdCQUNBQyxNQUNPO0FBQ1AsYUFBSzVHLFVBQ0o7VUFDQ0MsUUFBUTtVQUNScUUsZUFBZTtVQUNma0YsTUFBTTtVQUNOQyxRQUFRM0IsWUFBWSxDQUFDO1VBQ3JCNEIsTUFBTTtVQUNOQyxRQUFRLENBQUMsV0FBVyxXQUFXO1VBQy9CQyxTQUFTO1FBQ1YsR0FDQ3RKLFlBQWlCO0FBQ2pCLGVBQUssS0FBS3VILGVBQWV2SCxRQUFRd0gsYUFBYW5CLGdCQUFnQkMsSUFBSTtRQUNuRSxDQUNEO01BQ0Q7TUFDQSxPQUFlaUQsaUJBQWlCQyxNQUFrQztBQUNqRSxZQUFJO0FBQUEsY0FBQUMsdUJBQUFDO0FBQ0gsbUJBQUFELHlCQUFBQyx5QkFBUUMsbUJBQW1CSCxTQUFBLFFBQUFBLFNBQUEsU0FBQUEsT0FBUSxFQUFFLEVBQUVJLE1BQU0sc0JBQXNCLE9BQUEsUUFBQUYsMkJBQUEsU0FBQSxTQUEzREEsdUJBQStELENBQUMsT0FBQSxRQUFBRCwwQkFBQSxTQUFBQSx3QkFBSyxJQUFJdFEsUUFBUSxNQUFNLEdBQUc7UUFDbkcsUUFBUTtBQUNQLGlCQUFPO1FBQ1I7TUFDRDtNQUNRMFEsa0JBQXNDO0FBQzdDLGNBQU1DLGVBQXdELENBQUE7QUFDOURsUSxZQUFJNkMsa0JBQWtCN0MsSUFBSTRDLFFBQVE4RyxPQUFBLElBQUFuTyxPQUFXbUIseUJBQXlCLENBQUU7QUFDeEVzRCxZQUFJNkMsZ0JBQWdCc04sS0FBSyxDQUFDN0osUUFBUThKLFVBQWdCO0FBQUEsY0FBQUM7QUFDakQsZ0JBQU1DLFNBQWlCNU4sRUFBRTBOLEtBQUs7QUFDOUIsZ0JBQU1HLGFBQXFCRCxPQUFPdEwsS0FBSyxtQ0FBbUM7QUFDMUUsZ0JBQU1zRixVQUNMK0YsbUJBQUFFLFdBQVdDLEtBQUssT0FBTyxPQUFBLFFBQUFILHFCQUFBLFNBQUEsU0FBdkJBLGlCQUEwQjFMLEtBQUssTUFDL0IzRSxJQUFJMlAsaUJBQWlCWSxXQUFXQyxLQUFLLE1BQU0sQ0FBQyxLQUM1Q3hRLElBQUkyUCxpQkFBaUJXLE9BQU90TCxLQUFLLDRCQUE0QixFQUFFd0wsS0FBSyxNQUFNLENBQUM7QUFDNUVOLHVCQUFhQSxhQUFhbFIsTUFBTSxJQUFJLENBQUNzTCxPQUFPZ0csTUFBTTtRQUNuRCxDQUFDO0FBQ0QsZUFBT0o7TUFDUjtNQUNRTyxlQUFxQjtBQUM1QixhQUFLM04sTUFBTW1LLElBQUk7VUFDZEMsUUFBUTtVQUNSQyxVQUFVO1FBQ1gsQ0FBQztBQUNEbk4sWUFBSTJDLGtCQUFrQkQsRUFDckJ0RSxtQ0FBQXZCLFFBQUErRyxjQUFDLE9BQUEsTUFDQzVELElBQUkrRCxJQUFJLFNBQVMsR0FDbEIzRixtQ0FBQXZCLFFBQUErRyxjQUFDLFFBQUE7VUFBS0MsV0FBV3pIO1FBQUEsR0FBNkI0RCxJQUFJVSxjQUFlLEdBQ2hFLENBQUNWLElBQUkrRCxJQUFJLElBQUksR0FBRy9ELElBQUlXLGFBQWEsQ0FDbkMsQ0FDRCxFQUFFK1AsT0FBTztVQUNSQyxhQUFhdFU7VUFDYnVVLFdBQVc7VUFDWEMsUUFBUTtVQUNSQyxPQUFPO1VBQ1BDLE9BQU87VUFDUEMsZUFBZTtVQUNmQyxXQUFXO1VBQ1hDLFdBQVc7UUFDWixDQUFDO0FBQ0QsYUFBS3BPLE1BQU1rQyxLQUFBLElBQUF6SixPQUFTYyxxQkFBbUIsc0JBQUEsQ0FBc0IsRUFBRThVLEtBQUs7QUFDcEUsYUFBS3JPLE1BQU1rQyxLQUFBLElBQUF6SixPQUFTYyxxQkFBbUIscUJBQUEsQ0FBcUIsRUFBRXdVLE9BQU8sTUFBTTtBQUMzRTdRLFlBQUl5QyxXQUFXLEtBQUtLLE1BQU1rQyxLQUFBLElBQUF6SixPQUFTYSwwQkFBMEIsQ0FBRTtNQUNoRTtNQUNRZ1YsWUFBWTNFLGdCQUF3QkMsTUFBcUM7QUFDaEYsY0FBTXdELGVBQXdELEtBQUtELGdCQUFnQjtBQUNuRixZQUFJLENBQUNDLGFBQWFsUixRQUFRO0FBQ3pCLGVBQUt0QixHQUFHMlQsT0FBT3JSLElBQUkrRCxJQUFJLGVBQWUsR0FBRztZQUN4Q3VOLEtBQUs7VUFDTixDQUFDO0FBQ0Q7UUFDRDtBQUNBdFIsWUFBSU8sZUFBZSxDQUFBO0FBQ25CUCxZQUFJUSxrQkFBa0IsQ0FBQTtBQUN0QlIsWUFBSVMsV0FBVyxDQUFBO0FBQ2ZULFlBQUlVLGlCQUFpQjtBQUNyQlYsWUFBSVcsZ0JBQWdCdVAsYUFBYWxSO0FBQ2pDLGFBQUt5UixhQUFhO0FBQUEsWUFBQWMsYUFBQXJHLDJCQUNRZ0YsWUFBQSxHQUFBc0I7QUFBQSxZQUFBO0FBQTFCLGVBQUFELFdBQUFuRyxFQUFBLEdBQUEsRUFBQW9HLFNBQUFELFdBQUFsRyxFQUFBLEdBQUFDLFFBQXdDO0FBQUEsa0JBQTdCc0MsY0FBQTRELE9BQUF0UztBQUNWLGlCQUFLbVEsV0FBV3pCLGFBQWFuQixnQkFBZ0JDLElBQUk7VUFDbEQ7UUFBQSxTQUFBaEIsS0FBQTtBQUFBNkYscUJBQUEvTyxFQUFBa0osR0FBQTtRQUFBLFVBQUE7QUFBQTZGLHFCQUFBNUYsRUFBQTtRQUFBO01BQ0Q7TUFDUThGLFFBQVFoRixnQkFBOEI7QUFDN0MsYUFBSzJFLFlBQVkzRSxnQkFBZ0IsS0FBSztNQUN2QztNQUNRaUYsU0FBU2pGLGdCQUE4QjtBQUM5QyxhQUFLMkUsWUFBWTNFLGdCQUFnQixNQUFNO01BQ3hDO01BQ1FrRixTQUFTbEYsZ0JBQThCO0FBQzlDLGFBQUsyRSxZQUFZM0UsZ0JBQWdCLE1BQU07TUFDeEM7TUFDUW1GLGVBQWVDLFFBQWdCQyxZQUE0QjtBQUNsRUEsbUJBQVdDLEtBQUs7QUFBQSxZQUFBQyxhQUFBOUcsMkJBQ080RyxVQUFBLEdBQUFHO0FBQUEsWUFBQTtBQUF2QixlQUFBRCxXQUFBNUcsRUFBQSxHQUFBLEVBQUE2RyxTQUFBRCxXQUFBM0csRUFBQSxHQUFBQyxRQUFtQztBQUFBLGtCQUF4QnZCLFdBQUFrSSxPQUFBL1M7QUFDVixrQkFBTWdULE1BQU14UCxFQUNYdEUsbUNBQUF2QixRQUFBK0csY0FBQyxNQUFBO2NBQUd1TyxTQUFTO2dCQUFDcEk7Y0FBUTtZQUFBLEdBQ3JCM0wsbUNBQUF2QixRQUFBK0csY0FBQyxNQUFBLE1BQUlpTyxNQUFPLEdBQ1p6VCxtQ0FBQXZCLFFBQUErRyxjQUFDLE1BQUEsTUFDQXhGLG1DQUFBdkIsUUFBQStHLGNBQUMsS0FBQTtjQUNBaUIsU0FBVVQsV0FBZ0I7QUFDekIsc0JBQU1DLFdBQVczQixFQUFFMEIsTUFBTUUsYUFBYTtBQUN0QyxxQkFBS00sV0FBV1AsU0FBUytOLFFBQVEsSUFBSSxFQUFFQyxLQUFLLFVBQVUsQ0FBVztjQUNsRTtZQUFBLEdBRUN0SSxRQUNGLENBQ0QsQ0FDRCxDQUNEO0FBRUEsZ0JBQUlBLGFBQWEvSixJQUFJSyxvQkFBb0JMLElBQUlDLGNBQWM7QUFDMURpUyxrQkFBSXRGLE9BQ0h4TyxtQ0FBQXZCLFFBQUErRyxjQUFDLE1BQUEsTUFDQXhGLG1DQUFBdkIsUUFBQStHLGNBQUMsS0FBQTtnQkFDQUMsV0FBV25JO2dCQUNYbUosU0FBVVQsV0FBZ0I7QUFDekIsd0JBQU1DLFdBQVczQixFQUFFMEIsTUFBTUUsYUFBYTtBQUN0Qyx1QkFBS21OLFFBQVFwTixTQUFTK04sUUFBUSxJQUFJLEVBQUVDLEtBQUssVUFBVSxDQUFXO2dCQUMvRDtjQUFBLEdBRUNyUyxJQUFJK0QsSUFBSSxLQUFLLENBQ2YsQ0FDRCxDQUNEO1lBQ0QsV0FBV2dHLGFBQWEvSixJQUFJSyxvQkFBb0IsQ0FBQ0wsSUFBSUMsY0FBYztBQUNsRWlTLGtCQUFJdEYsT0FDSHhPLG1DQUFBdkIsUUFBQStHLGNBQUF4RixtQkFBQXZCLFFBQUFnUSxVQUFBLE1BQ0N6TyxtQ0FBQXZCLFFBQUErRyxjQUFDLE1BQUEsTUFDQXhGLG1DQUFBdkIsUUFBQStHLGNBQUMsS0FBQTtnQkFDQUMsV0FBV25JO2dCQUNYbUosU0FBVVQsV0FBZ0I7QUFDekIsd0JBQU1DLFdBQVczQixFQUFFMEIsTUFBTUUsYUFBYTtBQUN0Qyx1QkFBS29OLFNBQVNyTixTQUFTK04sUUFBUSxJQUFJLEVBQUVDLEtBQUssVUFBVSxDQUFXO2dCQUNoRTtjQUFBLEdBRUNyUyxJQUFJK0QsSUFBSSxNQUFNLENBQ2hCLENBQ0QsR0FDQTNGLG1DQUFBdkIsUUFBQStHLGNBQUMsTUFBQSxNQUNBeEYsbUNBQUF2QixRQUFBK0csY0FBQyxLQUFBO2dCQUNBQyxXQUFXbkk7Z0JBQ1htSixTQUFVVCxXQUFnQjtBQUN6Qix3QkFBTUMsV0FBVzNCLEVBQUUwQixNQUFNRSxhQUFhO0FBQ3RDLHVCQUFLcU4sU0FBU3ROLFNBQVMrTixRQUFRLElBQUksRUFBRUMsS0FBSyxVQUFVLENBQVc7Z0JBQ2hFO2NBQUEsR0FFQ3JTLElBQUkrRCxJQUFJLE1BQU0sQ0FDaEIsQ0FDRCxDQUNELENBQ0Q7WUFDRDtBQUNBLGlCQUFLYixZQUFZOEIsS0FBSyxPQUFPLEVBQUU0SCxPQUFPc0YsR0FBRztVQUMxQztRQUFBLFNBQUF4RyxLQUFBO0FBQUFzRyxxQkFBQXhQLEVBQUFrSixHQUFBO1FBQUEsVUFBQTtBQUFBc0cscUJBQUFyRyxFQUFBO1FBQUE7TUFDRDtNQUNRMkcsbUJBQXlCO0FBQUEsWUFBQUMsdUJBQUFDO0FBQ2hDLGFBQUsxUCxNQUFNbUssSUFBSSxVQUFVLEVBQUU7QUFDM0IsY0FBTXdGLG9CQUE4QixDQUFDelMsSUFBSWEsZUFBZTtBQUN4RCxhQUFLcUMsWUFBWXdQLE1BQU07QUFDdkIsYUFBS3hQLFlBQVkwSixPQUFPeE8sbUNBQUF2QixRQUFBK0csY0FBQyxTQUFBLElBQU0sQ0FBRTtBQUNqQyxhQUFLZ08sZUFBZSxLQUFLNVIsSUFBSWlCLFVBQVU7QUFDdkMsYUFBSzJRLGVBQWUsS0FBS2EsaUJBQWlCO0FBQzFDLGFBQUtiLGVBQWUsS0FBSzVSLElBQUlrQixPQUFPO0FBRXBDLGFBQUs2QixXQUFXK04sTUFBTSxFQUFFO0FBQ3hCLGFBQUsvTixXQUFXOE4sT0FBTyxFQUFFO0FBQ3pCLGFBQUs5TixXQUFXK04sTUFBTTNPLEtBQUt3USxNQUFBSix3QkFBSyxLQUFLeFAsV0FBVytOLE1BQU0sT0FBQSxRQUFBeUIsMEJBQUEsU0FBQUEsd0JBQUssS0FBSyxNQUFNLE1BQUFDLFdBQUs5UCxFQUFFc0UsTUFBTSxFQUFFOEosTUFBTSxPQUFBLFFBQUEwQixhQUFBLFNBQUFBLFdBQUssS0FBSyxFQUFFLENBQUM7QUFDeEcsYUFBS3RQLFlBQVkrSixJQUFJO1VBQ3BCLGNBQUEsR0FBQTFSLE9BQWlCeUUsSUFBSWMsY0FBWSxJQUFBO1VBQ2pDK1AsUUFBUTtRQUNULENBQUM7TUFDRjtNQUNRK0IsZ0JBQXNCO0FBQzdCLGFBQUs5TSxVQUNKO1VBQ0NDLFFBQVE7VUFDUndKLFFBQUEsWUFBQWhVLE9BQW9CeUUsSUFBSWEsZUFBZTtVQUN2QzJPLE1BQU07UUFDUCxHQUNDcEosWUFBaUI7QUFBQSxjQUFBeU0sU0FBQUM7QUFDakIsY0FBSSxDQUFDMU0sUUFBUTtBQUNaO1VBQ0Q7QUFDQXBHLGNBQUlpQixhQUFhLENBQUE7QUFDakIsZ0JBQU07WUFBQ29OO1VBQUssSUFBSWpJLE9BQU8yTTtBQUN2QixlQUFBRixVQUFJeEUsTUFBTSxDQUFDLE9BQUEsUUFBQXdFLFlBQUEsVUFBUEEsUUFBVUcsU0FBUztBQUN0QixpQkFBS2xRLE1BQU1tSyxJQUFJLFVBQVUsRUFBRTtBQUMzQixpQkFBSy9KLFlBQVkwRyxLQUNoQnhMLG1DQUFBdkIsUUFBQStHLGNBQUMsUUFBQTtjQUFLQyxXQUFXbEk7WUFBQSxHQUNmcUUsSUFBSStELElBQUksZUFBZSxDQUN6QixDQUNEO0FBQ0EsaUJBQUs2TixlQUFlLEtBQUssQ0FBQzVSLElBQUlhLGVBQWUsQ0FBQztBQUM5QztVQUNEO0FBQ0EsY0FBSWlSLGFBQWdDLENBQUE7QUFDcEMsZUFBQWdCLFdBQUl6RSxNQUFNLENBQUMsT0FBQSxRQUFBeUUsYUFBQSxVQUFQQSxTQUFVaEIsWUFBWTtBQUN6QixhQUFDO2NBQUNBO1lBQVUsQ0FBQyxJQUFJekQ7VUFDbEI7QUFBQSxjQUFBNEUsYUFBQS9ILDJCQUNrQjRHLFVBQUEsR0FBQW9CO0FBQUEsY0FBQTtBQUFsQixpQkFBQUQsV0FBQTdILEVBQUEsR0FBQSxFQUFBOEgsU0FBQUQsV0FBQTVILEVBQUEsR0FBQUMsUUFBOEI7QUFBQSxvQkFBbkI3RyxNQUFBeU8sT0FBQWhVO0FBQ1Ysb0JBQU1pVSxXQUFXMU8sSUFBSTZGLE1BQU0vSyxRQUFRLFdBQVcsRUFBRTtBQUNoRFMsa0JBQUlpQixXQUFXakIsSUFBSWlCLFdBQVdqQyxNQUFNLElBQUltVTtZQUN6QztVQUFBLFNBQUF6SCxLQUFBO0FBQUF1SCx1QkFBQXpRLEVBQUFrSixHQUFBO1VBQUEsVUFBQTtBQUFBdUgsdUJBQUF0SCxFQUFBO1VBQUE7QUFDQTNMLGNBQUlZO0FBQ0osY0FBSVosSUFBSVksZUFBZSxHQUFHO0FBQ3pCLGlCQUFLMFIsaUJBQWlCO1VBQ3ZCO1FBQ0QsQ0FDRDtNQUNEO01BQ1FjLGFBQW1CO0FBQzFCLGFBQUt0TixVQUNKO1VBQ0NDLFFBQVE7VUFDUnNOLE1BQU07VUFDTkMsUUFBUTtVQUNSQyxTQUFTdlQsSUFBSW1CLFNBQVNsRTtVQUN0QnVXLFNBQUEsWUFBQWpZLE9BQXFCeUUsSUFBSWEsZUFBZTtRQUN6QyxHQUNDdUYsWUFBaUI7QUFBQSxjQUFBcU47QUFDakIsZ0JBQU1DLFFBQTBCdE4sV0FBQSxRQUFBQSxXQUFBLFdBQUFxTixnQkFBQXJOLE9BQVEyTSxXQUFBLFFBQUFVLGtCQUFBLFNBQUEsU0FBUkEsY0FBZUUsb0JBQW1CLENBQUE7QUFDbEUzVCxjQUFJa0IsVUFBVSxDQUFBO0FBQUMsY0FBQTBTLGFBQUExSSwyQkFDR3dJLElBQUEsR0FBQUc7QUFBQSxjQUFBO0FBQWxCLGlCQUFBRCxXQUFBeEksRUFBQSxHQUFBLEVBQUF5SSxTQUFBRCxXQUFBdkksRUFBQSxHQUFBQyxRQUF3QjtBQUFBLG9CQUFiN0csTUFBQW9QLE9BQUEzVTtBQUNWLG9CQUFNaVUsV0FBVzFPLElBQUk2RixNQUFNL0ssUUFBUSxXQUFXLEVBQUU7QUFDaERTLGtCQUFJa0IsUUFBUWxCLElBQUlrQixRQUFRbEMsTUFBTSxJQUFJbVU7WUFDbkM7VUFBQSxTQUFBekgsS0FBQTtBQUFBa0ksdUJBQUFwUixFQUFBa0osR0FBQTtVQUFBLFVBQUE7QUFBQWtJLHVCQUFBakksRUFBQTtVQUFBO0FBQ0EzTCxjQUFJWTtBQUNKLGNBQUlaLElBQUlZLGVBQWUsR0FBRztBQUN6QixpQkFBSzBSLGlCQUFpQjtVQUN2QjtRQUNELENBQ0Q7TUFDRDtNQUNRd0Isa0JBQXdCO0FBQy9COVQsWUFBSVksYUFBYTtBQUNqQixhQUFLZ1MsY0FBYztBQUNuQixhQUFLUSxXQUFXO01BQ2pCO01BQ1F4TyxXQUFXSCxLQUFtQjtBQUNyQyxhQUFLM0IsTUFBTW1LLElBQUksVUFBVSxNQUFNO0FBQy9Cak4sWUFBSWEsa0JBQWtCNEQ7QUFDdEIsYUFBS3ZCLFlBQVkwRyxLQUFLeEwsbUNBQUF2QixRQUFBK0csY0FBQyxPQUFBLE1BQUs1RCxJQUFJK0QsSUFBSSxTQUFTLENBQUUsQ0FBTTtBQUNyRCxhQUFLK1AsZ0JBQWdCO01BQ3RCO01BRVFDLGdCQUFzQjtBQUU3QixZQUFJL1QsSUFBSUMsY0FBYztBQUNyQkQsY0FBSTRDLFVBQVUsS0FBS0UsTUFBTWtDLEtBQUsseUJBQXlCLEVBQUVBLEtBQUssT0FBTyxFQUFFZ1AsR0FBRyxDQUFDO0FBQzNFLGNBQUloVSxJQUFJbUIsU0FBU3BFLFdBQVc7QUFDM0JpRCxnQkFBSTRDLFVBQVU1QyxJQUFJNEMsUUFBUXFSLElBQUksOEJBQThCO1VBQzdEO1FBQ0QsT0FBTztBQUNOalUsY0FBSTRDLFVBQVUsS0FBS0UsTUFDakJrQyxLQUFLLGlCQUFpQixFQUN0QmlQLElBQUksS0FBS25SLE1BQU1rQyxLQUFLLHVCQUF1QixFQUFFQSxLQUFLLHlCQUF5QixDQUFDO0FBQzlFLGNBQUloRixJQUFJbUIsU0FBU3BFLFdBQVc7QUFDM0Isa0JBQU1tWCxTQUFnQyxLQUFLcFIsTUFDekNrQyxLQUFLLG9DQUFvQyxFQUN6Q0EsS0FBSyxJQUFJO0FBQ1hoRixnQkFBSTRDLFVBQVU1QyxJQUFJNEMsUUFBUXFSLElBQUlDLE1BQU07VUFDckM7UUFDRDtNQUNEO01BQ1FDLGdCQUFzQjtBQUM3QixhQUFLSixjQUFjO0FBQ25CL1QsWUFBSTRDLFFBQVErSixTQUFTcFEsZ0JBQWdCLEVBQUU2WCxvQkFBb0IsTUFBWTtBQUN0RSxlQUFLM0ssdUJBQXVCO1FBQzdCLENBQUM7TUFDRjtNQUVRNUMsTUFBWTtBQUNuQixZQUFJLEtBQUt4RCxNQUFNZ1IsU0FBU2xZLHNDQUFzQyxHQUFHO0FBQ2hFLGVBQUtnWSxjQUFjO0FBQ25CLGVBQUtuUixlQUFlMkcsS0FBSztBQUN6QixlQUFLNUcsV0FBV21PLFVBQVU7WUFDekJvRCxZQUFZLEtBQUtwUjtZQUNqQnFSLFNBQVM7WUFDVEMsUUFBU3BRLFdBQWdCO0FBQUEsa0JBQUFxUTtBQUN4QixvQkFBTUMsaUJBQWlCaFMsRUFBRTBCLE1BQU1FLGFBQWE7QUFDNUNvUSw2QkFBZXpILElBQUk7Z0JBQ2xCMEgsTUFBTTtnQkFDTkMsS0FBSztjQUNOLENBQUM7QUFDRDVVLGtCQUFJYyxnQkFBQTJULHdCQUFlQyxlQUFlN0QsT0FBTyxPQUFBLFFBQUE0RCwwQkFBQSxTQUFBQSx3QkFBS3pVLElBQUljO0FBQ2xELG1CQUFLb0MsWUFBWStKLElBQUk7Z0JBQ3BCNEgsV0FBVztnQkFDWC9ELE9BQU87Y0FDUixDQUFDO1lBQ0Y7VUFDRCxDQUFDO0FBQ0QsZUFBSzVOLFlBQVkrSixJQUFJLGNBQWMsT0FBTztBQUMxQyxjQUFJak4sSUFBSUMsY0FBYztBQUNyQixpQkFBSzJFLFdBQVcscUJBQXFCO1VBQ3RDLE9BQU87QUFDTixpQkFBS0EsV0FBVzVFLElBQUlLLGdCQUFnQjtVQUNyQztRQUNELE9BQU87QUFDTixlQUFLMkMsZUFBZW1PLEtBQUs7QUFDekIsZUFBS3BPLFdBQVdtTyxVQUFVLFNBQVM7QUFDbkMsZUFBS25PLFdBQVdrSyxJQUFJLFNBQVMsRUFBRTtBQUMvQmpOLGNBQUk0QyxRQUFRa1MsSUFBSSxlQUFlO1FBQ2hDO01BQ0Q7SUFDRDtBQUVBLFFBQ0VuVixzQkFBc0IsTUFBTUgsK0JBQStCLFlBQzVERyxzQkFBOEJ6RSxpQkFDN0I7QUFDRCxVQUFJeUUsc0JBQXNCLElBQUk7QUFDN0JLLFlBQUlDLGVBQWU7TUFDcEI7QUFDQUQsVUFBSSxjQUFjLElBQUl2QixjQUFjO0FBQ3BDLFVBQUlrQixzQkFBOEJ6RSxpQkFBaUI7QUFBQSxZQUFBNlo7QUFDbEQsY0FBTWhMLFdBQVdyTSxHQUFHQyxPQUFPQyxJQUFJLFNBQVMsRUFBRTJCLFFBQVEsY0FBYyxFQUFFO0FBQ2xFLFNBQUF3VixvQkFBQS9VLElBQUksY0FBYyxHQUFFK0osUUFBUSxNQUE1QmdMLGtCQUFvQmhMLFFBQVEsSUFBQSxNQUFZL0osSUFBSThKLGdCQUFnQkMsUUFBUTtNQUNyRTtNQUNBO0FBQ0FqTSxrQkFBWTtBQUNaLFlBQUEsR0FBS0ksbUJBQUE4VyxTQUFRLEVBQUU1SSxLQUFNdEosV0FBeUM7QUFDN0QsWUFBSTlDLElBQUk4QyxLQUFLLEVBQUVtQyxjQUFjO01BQzlCLENBQUM7SUFDRjtFQUNELENBQUE7QUFBQSxTQUFBLFNBejhCTXBGLFdBQUE7QUFBQSxXQUFBQyxLQUFBbVYsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBOztBRzVCTixJQUFNQyx3QkFBd0JBLE1BQVk7QUFDekN6UyxJQUFFakIsR0FBRzJULE9BQU87SUFDWGhCLHFCQUFxQixTQUFVdEksVUFBVTtBQUN4QyxVQUFJdUo7QUFHSixXQUFLL1AsR0FBRyxpQkFBa0JsQixXQUF1QztBQUVoRSxZQUFJLENBQUNBLE1BQU1rUixTQUFTO0FBQ25CbFIsZ0JBQU1tUixlQUFlO1FBQ3RCO0FBR0EsYUFBS0MsUUFBUSxNQUFNLEVBQ2pCeFEsS0FBQSxJQUFBekosT0FBU2tCLDhCQUE4QixDQUFFLEVBQ3pDZ1osWUFBWWhaLDhCQUE4QjtBQUU1QyxZQUFJaVosZUFBZWhULEVBQUUwQixNQUFNdVIsTUFBTTtBQUNqQyxZQUFJLENBQUNELGFBQWFyQixTQUFTOVgsZ0JBQWdCLEdBQUc7QUFDN0NtWix5QkFBZUEsYUFBYUYsUUFBQSxJQUFBamEsT0FBWWdCLGdCQUFnQixDQUFFO1FBQzNEO0FBRUFtWixxQkFBYS9JLFNBQVNsUSw4QkFBOEIsRUFBRW1LLFlBQVlsSyx5QkFBeUI7QUFHM0YsWUFBSTJZLGdCQUFnQmpSLE1BQU13UixVQUFVO0FBQ25DLGdCQUFNQyxTQUFxQ0gsYUFBYXJCLFNBQVMzWCx5QkFBeUIsSUFDdkYsYUFDQTtBQUVILGVBQUtvTSxNQUNKM0csS0FBS3dRLElBQUksS0FBS2pGLE1BQU0ySCxZQUFZLEdBQUcsS0FBSzNILE1BQU1nSSxZQUFZLENBQUMsR0FDM0R2VCxLQUFLQyxJQUFJLEtBQUtzTCxNQUFNMkgsWUFBWSxHQUFHLEtBQUszSCxNQUFNZ0ksWUFBWSxDQUFDLElBQUksQ0FDaEUsRUFBRUcsTUFBTSxFQUFFbloseUJBQXlCO1FBQ3BDO0FBRUEyWSx1QkFBZUs7QUFFZixZQUFJLE9BQU81SixhQUFhLFlBQVk7QUFDbkNBLG1CQUFTO1FBQ1Y7TUFDRCxDQUFDO0FBRUQsYUFBTztJQUNSO0VBQ0QsQ0FBQztBQUNGOztBQ3BEQTtBQUNBcUosc0JBQXNCO0FBQ3RCLEtBQUt0VixRQUFROyIsCiAgIm5hbWVzIjogWyJhcGlUYWciLCAidGFyZ2V0TmFtZXNwYWNlIiwgInZlcnNpb24iLCAic3RvcmFnZUtleSIsICJDTEFTU19OQU1FIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSIiwgImNvbmNhdCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUiIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19BTEwiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkUiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTksiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQiLCAiQ0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIiLCAiQ0xBU1NfTkFNRV9GRUVEQkFDSyIsICJDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUiLCAiQ0xBU1NfTkFNRV9MQUJFTCIsICJDTEFTU19OQU1FX0xBQkVMX0RPTkUiLCAiQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEIiwgIkNMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQiLCAiREVGQVVMVF9TRVRUSU5HIiwgImRvY2xlYW51cCIsICJkZWZhdWx0IiwgImxhYmVsX2kxOG4iLCAiZWRpdHBhZ2VzIiwgIm1pbm9yIiwgInN1YmNhdGNvdW50IiwgIndhdGNobGlzdCIsICJzZWxlY3RfaTE4biIsICJ3YXRjaF9ub2NoYW5nZSIsICJ3YXRjaF9wcmVmIiwgIndhdGNoX3Vud2F0Y2giLCAid2F0Y2hfd2F0Y2giLCAiVkFSSUFOVFMiLCAid2dVc2VyTGFuZ3VhZ2UiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJERUZBVUxUX01FU1NBR0VTIiwgInNldE1lc3NhZ2VzIiwgImluY2x1ZGVzIiwgIm1lc3NhZ2VzIiwgInNldCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImdldENhY2hlZEtleXMiLCAidmFyaWFudENhY2hlIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJzdG9yYWdlIiwgImxlbmd0aCIsICJrZXkiLCAidmFsdWUiLCAic3RhcnRzV2l0aCIsICJBcnJheSIsICJpc0FycmF5IiwgImNhY2hlS2V5IiwgInJlcGxhY2UiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dGb3JtYXR0ZWROYW1lc3BhY2VzIiwgIndnTmFtZXNwYWNlSWRzIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnVGl0bGUiLCAiY2F0QUxvdCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIkNBTCIsICJpc1NlYXJjaE1vZGUiLCAiTUVTU0FHRVMiLCAiQVBJX1RBRyIsICJUQVJHRVRfTkFNRVNQQUNFIiwgIkNVUlJFTlRfQ0FURUdST1kiLCAiaXNBdXRvQ29tcGxldGVJbml0IiwgImFscmVhZHlUaGVyZSIsICJjb25uZWN0aW9uRXJyb3IiLCAibm90Rm91bmQiLCAiY291bnRlckN1cnJlbnQiLCAiY291bnRlck5lZWRlZCIsICJjb3VudGVyQ2F0IiwgImN1cnJlbnRDYXRlZ29yeSIsICJkaWFsb2dIZWlnaHQiLCAiZWRpdFRva2VuIiwgImxvY2FsQ2F0TmFtZSIsICJwYXJlbnRDYXRzIiwgInN1YkNhdHMiLCAic2V0dGluZ3MiLCAicmVxdWVzdERlbGF5IiwgInJlcXVlc3RRdWV1ZSIsICJwcm9jZXNzaW5nUXVldWUiLCAibGFzdFN0YXJ0IiwgImVucXVldWVBcGlDYWxsIiwgImZuIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJyZWplY3QiLCAicHVzaCIsICJwcm9jZXNzUXVldWUiLCAic2hpZnQiLCAibm93IiwgIkRhdGUiLCAid2FpdCIsICJNYXRoIiwgIm1heCIsICJyIiwgInNldFRpbWVvdXQiLCAicmVzIiwgImUiLCAiJGNvdW50ZXIiLCAiJCIsICIkcHJvZ3Jlc3NEaWFsb2ciLCAiJGxhYmVscyIsICIkc2VsZWN0ZWRMYWJlbHMiLCAiJGJvZHkiLCAiJGNvbnRhaW5lciIsICIkZGF0YUNvbnRhaW5lciIsICIkbWFya0NvdW50ZXIiLCAiJHJlc3VsdExpc3QiLCAiJHNlYXJjaElucHV0IiwgIiRoZWFkIiwgIiRsaW5rIiwgImNvbnN0cnVjdG9yIiwgIl9tdyR1dGlsJGdldFBhcmFtVmFsdSIsICJtZXNzYWdlIiwgInBhcnNlIiwgImluaXRTZXR0aW5ncyIsICJjb250YWluZXIiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicGxhY2Vob2xkZXIiLCAibXNnIiwgInR5cGUiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIm9uS2V5RG93biIsICJldmVudCIsICIkZWxlbWVudCIsICJjdXJyZW50VGFyZ2V0IiwgIl8kZWxlbWVudCR2YWwkdHJpbSIsICJfJGVsZW1lbnQkdmFsIiwgImNhdCIsICJ2YWwiLCAidHJpbSIsICJ1cGRhdGVDYXRzIiwgIm9uQ2xpY2siLCAidG9nZ2xlQWxsIiwgImFwcGVuZFRvIiwgImZpbmQiLCAiYnVpbGRFbGVtZW50cyIsICJyZWdleENhdCIsICJSZWdFeHAiLCAibG9jYWxpemVkUmVnZXgiLCAiaXNDb21wb3NpdGlvblN0YXJ0IiwgIm9uIiwgIm9sZFZhbCIsICJuZXdWYWwiLCAiaW5pdEF1dG9jb21wbGV0ZSIsICJhdXRvY29tcGxldGUiLCAic291cmNlIiwgInJlcXVlc3QiLCAicmVzcG9uc2UiLCAiZG9BUElDYWxsIiwgImFjdGlvbiIsICJuYW1lc3BhY2UiLCAicmVkaXJlY3RzIiwgInNlYXJjaCIsICJ0ZXJtIiwgInJlc3VsdCIsICJtYXAiLCAiX2luZGV4IiwgIml0ZW0iLCAicG9zaXRpb24iLCAibXkiLCAiYXQiLCAib2YiLCAidG9nZ2xlQ2xhc3MiLCAicnVuIiwgIl93aW5kb3ckQ2F0QUxvdFByZWZzIiwgImNhdEFMb3RQcmVmcyIsICJ3aW5kb3ciLCAiQ2F0QUxvdFByZWZzIiwgInR5cGVPZkNhdEFMb3RQcmVmcyIsICJfaTIiLCAiX09iamVjdCRrZXlzIiwgImtleXMiLCAiX2NhdEFMb3RQcmVmcyRzZXR0aW5nIiwgInNldHRpbmdLZXkiLCAic2V0dGluZyIsICJzZWxlY3QiLCAiX2kzIiwgIl9PYmplY3Qka2V5czIiLCAibWVzc2FnZUtleSIsICJhcmdzIiwgImZ1bGxLZXkiLCAicGxhaW4iLCAibmFtZXNwYWNlTnVtYmVyIiwgImZhbGxiYWNrIiwgIl9DQUwkd2dGb3JtYXR0ZWROYW1lcyIsICJ3aWtpVGV4dEJsYW5rIiwgIlN0cmluZyIsICJyYXciLCAiX3RlbXBsYXRlT2JqZWN0IiwgIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCAid2lraVRleHRCbGFua1JFIiwgImNyZWF0ZVJlZ2V4U3RyIiwgIm5hbWUiLCAicmVnZXhOYW1lIiwgImkiLCAiaW5pdGlhbCIsICJzbGljZSIsICJsbCIsICJ0b0xvd2VyQ2FzZSIsICJ1bCIsICJ0b1VwcGVyQ2FzZSIsICJfdGVtcGxhdGVPYmplY3QyIiwgImNhbm9uaWNhbCIsICJyZWdleFN0cmluZyIsICJfaTQiLCAiX09iamVjdCRrZXlzMyIsICJjYXROYW1lIiwgInVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIiLCAiZmlsdGVyIiwgInNob3ciLCAiaHRtbCIsICJ0b1N0cmluZyIsICJmaW5kQWxsVmFyaWFudHMiLCAiY2F0ZWdvcnkiLCAiZ2V0T2JqZWN0IiwgInJlc3VsdHMiLCAicGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRleHQiLCAidGl0bGUiLCAidmFyaWFudCIsICIkcGFyc2VkIiwgIl9pNSIsICJfVkFSSUFOVFMiLCAiJHZhcmlhbnROb2RlIiwgInVuaXF1ZUFycmF5IiwgInNldE9iamVjdCIsICJyZWdleEJ1aWxkZXIiLCAidmFyaWFudHMiLCAidmFyaWFudFJlZ0V4cHMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZXNjYXBlUmVnRXhwIiwgIl90ZW1wbGF0ZU9iamVjdDMiLCAiZmlyc3QiLCAiZXJyIiwgImYiLCAiam9pbiIsICJfcGFyYW1zIiwgImNhbGxiYWNrIiwgImRvQ2FsbCIsICJoYW5kbGVFcnJvciIsICJlcnJvciIsICJsb2ciLCAidXBkYXRlQ291bnRlciIsICJ0aGVuIiwgImNhdGNoIiwgInBvc3QiLCAibWFya0FzRG9uZSIsICIkbWFya2VkTGFiZWwiLCAidGFyZ2V0Q2F0ZWdvcnkiLCAibW9kZSIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiRnJhZ21lbnQiLCAiZG9DbGVhbnVwIiwgInJlbW92ZVVuY2F0IiwgImRpc3BsYXlSZXN1bHQiLCAiY3NzIiwgImN1cnNvciIsICJvdmVyZmxvdyIsICIkcGFyZW50IiwgInBhcmVudCIsICJyZW1vdmUiLCAicmVkdWNlIiwgInByZSIsICJjdXIiLCAiaW5kZXgiLCAiZWRpdENhdGVnb3JpZXMiLCAibWFya2VkTGFiZWwiLCAiX3RoaXMiLCAiX3BhZ2UkcmV2aXNpb25zIiwgIm1hcmtlZExhYmVsVGl0bGUiLCAib3JpZ2luVGV4dCIsICJzdGFydHRpbWVzdGFtcCIsICJ0aW1lc3RhbXAiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJwYWdlcyIsICJwYWdlIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImNvbnRlbnQiLCAic291cmNlY2F0IiwgInRhcmdlUmVnRXhwIiwgInRlc3QiLCAic3VtbWFyeSIsICJzb3VyY2VDYXRSZWdFeHAiLCAidG9rZW4iLCAidGFncyIsICJhc3NlcnQiLCAiYm90IiwgImJhc2V0aW1lc3RhbXAiLCAiZ2V0Q29udGVudCIsICJtZXRhIiwgInRpdGxlcyIsICJwcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgImdldFRpdGxlRnJvbUxpbmsiLCAiaHJlZiIsICJfZGVjb2RlVVJJQ29tcG9uZW50JG0iLCAiX2RlY29kZVVSSUNvbXBvbmVudCRtMiIsICJkZWNvZGVVUklDb21wb25lbnQiLCAibWF0Y2giLCAiZ2V0TWFya2VkTGFiZWxzIiwgIm1hcmtlZExhYmVscyIsICJlYWNoIiwgImxhYmVsIiwgIl8kbGFiZWxMaW5rJGF0dHIiLCAiJGxhYmVsIiwgIiRsYWJlbExpbmsiLCAiYXR0ciIsICJzaG93UHJvZ3Jlc3MiLCAiZGlhbG9nIiwgImRpYWxvZ0NsYXNzIiwgIm1pbkhlaWdodCIsICJoZWlnaHQiLCAid2lkdGgiLCAibW9kYWwiLCAiY2xvc2VPbkVzY2FwZSIsICJkcmFnZ2FibGUiLCAicmVzaXphYmxlIiwgImhpZGUiLCAiZG9Tb21ldGhpbmciLCAibm90aWZ5IiwgInRhZyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJhZGRIZXJlIiwgImNvcHlIZXJlIiwgIm1vdmVIZXJlIiwgImNyZWF0ZUNhdExpbmtzIiwgInN5bWJvbCIsICJjYXRlZ29yaWVzIiwgInNvcnQiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiJHRyIiwgImRhdGFzZXQiLCAiY2xvc2VzdCIsICJkYXRhIiwgInNob3dDYXRlZ29yeUxpc3QiLCAiX3RoaXMkJGNvbnRhaW5lciR3aWR0IiwgIl8kJHdpZHRoIiwgImN1cnJlbnRDYXRlZ29yaWVzIiwgImVtcHR5IiwgIm1pbiIsICJnZXRQYXJlbnRDYXRzIiwgIl9wYWdlcyQiLCAiX3BhZ2VzJDIiLCAicXVlcnkiLCAibWlzc2luZyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJjYXRUaXRsZSIsICJnZXRTdWJDYXRzIiwgImxpc3QiLCAiY210eXBlIiwgImNtbGltaXQiLCAiY210aXRsZSIsICJfcmVzdWx0JHF1ZXJ5IiwgImNhdHMiLCAiY2F0ZWdvcnltZW1iZXJzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImdldENhdGVnb3J5TGlzdCIsICJmaW5kQWxsTGFiZWxzIiwgImVxIiwgImFkZCIsICIkcGFnZXMiLCAibWFrZUNsaWNrYWJsZSIsICJvbkNhdEFMb3RTaGlmdENsaWNrIiwgImhhc0NsYXNzIiwgImFsc29SZXNpemUiLCAiaGFuZGxlcyIsICJyZXNpemUiLCAiXyRjdXJyZW50VGFyZ2V0JGhlaWdoIiwgIiRjdXJyZW50VGFyZ2V0IiwgImxlZnQiLCAidG9wIiwgIm1heEhlaWdodCIsICJvZmYiLCAiX0NBTCR2YXJpYW50Q2FjaGUiLCAiZ2V0Qm9keSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlIiwgImV4dGVuZCIsICJwcmV2Q2hlY2tib3giLCAiY3RybEtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJwYXJlbnRzIiwgInJlbW92ZUNsYXNzIiwgIiR0aGlzQ29udHJvbCIsICJ0YXJnZXQiLCAic2hpZnRLZXkiLCAibWV0aG9kIl0KfQo=
