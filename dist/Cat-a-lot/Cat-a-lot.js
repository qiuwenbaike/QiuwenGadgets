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
            const result = $(text).eq(0).text().trim();
            const $result = $(result);
            for (var _i5 = 0, _VARIANTS = VARIANTS; _i5 < _VARIANTS.length; _i5++) {
              const variant = _VARIANTS[_i5];
              if ($result.find("#cal-".concat(variant))) {
                results[results.length] = $result.find("#cal-".concat(variant)).text();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NhdC1hLWxvdC9vcHRpb25zLmpzb24iLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9DYXQtYS1sb3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvY29yZS50c3giLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZ2V0Q2FjaGVkS2V5cy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlLnRzIiwgInNyYy9DYXQtYS1sb3QvQ2F0LWEtbG90LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiYXBpVGFnXCI6IFwiQ2F0LWEtbG90XCIsXG5cdFwidGFyZ2V0TmFtZXNwYWNlXCI6IDE0LFxuXHRcInZlcnNpb25cIjogXCI2LjBcIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5DYXQtYS1Mb3RfcmVzdWx0cy1cIlxufVxuIiwgImltcG9ydCB0eXBlIHtTZXR0aW5nfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1jYXRfYV9sb3QnO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVI6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWNvbnRhaW5lcmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUn1fX2RhdGFgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfV9fY2F0ZWdvcnktbGlzdGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9X19hY3Rpb25gO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX05PX0ZPVU5EOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9LS1uby1mb3VuZGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX21hcmstY291bnRlcmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19zZWFyY2gtaW5wdXQtY29udGFpbmVyX19pbnB1dGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlM6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19zZWxlY3Rpb25zYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19BTEw6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU31fX2FsbGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfV9fbm9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUn1fX2hlYWRgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEfV9fbGlua2A7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LfS0tZW5hYmxlZGA7XG5jb25zdCBDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tY3VycmVudF9jb3VudGVyYDtcbmNvbnN0IENMQVNTX05BTUVfRkVFREJBQ0s6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWZlZWRiYWNrYDtcbmNvbnN0IENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9GRUVEQkFDS30tLWRvbmVgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tbGFiZWxgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTF9ET05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0xBQkVMfS0tZG9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1sYXN0LXNlbGVjdGVkYDtcbmNvbnN0IENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1zZWxlY3RlZGA7XG5cbmNvbnN0IERFRkFVTFRfU0VUVElORzogU2V0dGluZyA9IHtcblx0ZG9jbGVhbnVwOiB7XG5cdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0bGFiZWxfaTE4bjogJ2RvY2xlYW51cHByZWYnLFxuXHR9LFxuXHRlZGl0cGFnZXM6IHtcblx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdGxhYmVsX2kxOG46ICdlZGl0cGFnZXNwcmVmJyxcblx0fSxcblx0bWlub3I6IHtcblx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHRsYWJlbF9pMThuOiAnbWlub3JwcmVmJyxcblx0fSxcblx0c3ViY2F0Y291bnQ6IHtcblx0XHRkZWZhdWx0OiA1MCxcblx0XHRsYWJlbF9pMThuOiAnc3ViY2F0Y291bnRwcmVmJyxcblx0fSxcblx0d2F0Y2hsaXN0OiB7XG5cdFx0ZGVmYXVsdDogJ3ByZWZlcmVuY2VzJyxcblx0XHRsYWJlbF9pMThuOiAnd2F0Y2hsaXN0cHJlZicsXG5cdFx0c2VsZWN0X2kxOG46IHtcblx0XHRcdHdhdGNoX25vY2hhbmdlOiAnbm9jaGFuZ2UnLFxuXHRcdFx0d2F0Y2hfcHJlZjogJ3ByZWZlcmVuY2VzJyxcblx0XHRcdHdhdGNoX3Vud2F0Y2g6ICd1bndhdGNoJyxcblx0XHRcdHdhdGNoX3dhdGNoOiAnd2F0Y2gnLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5jb25zdCBWQVJJQU5UUzogc3RyaW5nW10gPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1teScsICd6aC1zZycsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddO1xuXG5leHBvcnQge1xuXHRDTEFTU19OQU1FLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUixcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNULFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOSyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQsXG5cdENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUsXG5cdENMQVNTX05BTUVfTEFCRUwsXG5cdENMQVNTX05BTUVfTEFCRUxfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVELFxuXHRDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVELFxuXHRERUZBVUxUX1NFVFRJTkcsXG5cdFZBUklBTlRTLFxufTtcbiIsICJpbXBvcnQgdHlwZSB7TWVzc2FnZUtleX0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IERFRkFVTFRfTUVTU0FHRVMgPSB7XG5cdC8vIGFzIGluIDE3IGZpbGVzIHNlbGVjdGVkXG5cdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAne3tQTFVSQUw6JDF8T25lIGZpbGV8JDEgZmlsZXN9fSBzZWxlY3RlZC4nLFxuXHQvLyBBY3Rpb25zXG5cdCdjYXQtYS1sb3QtY29weSc6ICdDb3B5Jyxcblx0J2NhdC1hLWxvdC1tb3ZlJzogJ01vdmUnLFxuXHQnY2F0LWEtbG90LWFkZCc6ICdBZGQnLFxuXHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICdSZW1vdmUgZnJvbSB0aGlzIGNhdGVnb3J5Jyxcblx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ0VudGVyIGNhdGVnb3J5IG5hbWUnLFxuXHQnY2F0LWEtbG90LXNlbGVjdCc6ICdTZWxlY3QnLFxuXHQnY2F0LWEtbG90LWFsbCc6ICdhbGwnLFxuXHQnY2F0LWEtbG90LW5vbmUnOiAnbm9uZScsXG5cdCdjYXQtYS1sb3Qtbm9uZS1zZWxlY3RlZCc6ICdObyBmaWxlcyBzZWxlY3RlZCEnLFxuXHQvLyBQcmVmZXJlbmNlc1xuXHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAnV2F0Y2hsaXN0IHByZWZlcmVuY2UgY29uY2VybmluZyBmaWxlcyBlZGl0ZWQgd2l0aCBDYXQtQS1Mb3QnLFxuXHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAnQWNjb3JkaW5nIHRvIHlvdXIgZ2VuZXJhbCBwcmVmZXJlbmNlcycsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAnRG8gbm90IGNoYW5nZSB3YXRjaHN0YXR1cycsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAnV2F0Y2ggcGFnZXMgZWRpdGVkIHdpdGggQ2F0LUEtTG90Jyxcblx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ1JlbW92ZSBwYWdlcyB3aGlsZSBlZGl0aW5nIHdpdGggQ2F0LUEtTG90IGZyb20geW91ciB3YXRjaGxpc3QnLFxuXHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XCJNYXJrIGVkaXRzIGFzIG1pbm9yIChpZiB5b3UgZ2VuZXJhbGx5IG1hcmsgeW91ciBlZGl0cyBhcyBtaW5vciwgdGhpcyB3b24ndCBjaGFuZ2UgYW55dGhpbmcpXCIsXG5cdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICdBbGxvdyBjYXRlZ29yaXNpbmcgcGFnZXMgKGluY2x1ZGluZyBjYXRlZ29yaWVzKSB0aGF0IGFyZSBub3QgZmlsZXMnLFxuXHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAnUmVtb3ZlIHt7Q2hlY2sgY2F0ZWdvcmllc319IGFuZCBvdGhlciBtaW5vciBjbGVhbnVwJyxcblx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAnU3ViLWNhdGVnb3JpZXMgdG8gc2hvdyBhdCBtb3N0Jyxcblx0Ly8gUHJvZ3Jlc3Ncblx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ0xvYWRpbmcuLi4nLFxuXHQnY2F0LWEtbG90LWVkaXRpbmcnOiAnRWRpdGluZyBwYWdlJyxcblx0J2NhdC1hLWxvdC1vZic6ICdvZiAnLFxuXHQnY2F0LWEtbG90LXNraXBwZWQtYWxyZWFkeSc6XG5cdFx0J1RoZSBmb2xsb3dpbmcge3tQTFVSQUw6JDF8cGFnZSB3YXN8JDEgcGFnZXMgd2VyZX19IHNraXBwZWQsIGJlY2F1c2UgdGhlIHBhZ2Ugd2FzIGFscmVhZHkgaW4gdGhlIGNhdGVnb3J5OicsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOlxuXHRcdCdUaGUgZm9sbG93aW5nIHt7UExVUkFMOiQxfHBhZ2Ugd2FzfCQxIHBhZ2VzIHdlcmV9fSBza2lwcGVkLCBiZWNhdXNlIHRoZSBvbGQgY2F0ZWdvcnkgY291bGQgbm90IGJlIGZvdW5kOicsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOlxuXHRcdFwiVGhlIGZvbGxvd2luZyB7e1BMVVJBTDokMXxwYWdlfCQxIHBhZ2VzfX0gY291bGRuJ3QgYmUgY2hhbmdlZCwgc2luY2UgdGhlcmUgd2VyZSBwcm9ibGVtcyBjb25uZWN0aW5nIHRvIHRoZSBzZXJ2ZXI6XCIsXG5cdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAnQWxsIHBhZ2VzIGFyZSBwcm9jZXNzZWQuJyxcblx0J2NhdC1hLWxvdC1kb25lJzogJ0RvbmUhJyxcblx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAnQWRkZWQgY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAnQ29waWVkIHRvIGNhdGVnb3J5ICQxJyxcblx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAnTW92ZWQgdG8gY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ1JlbW92ZWQgZnJvbSBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAnUmV0dXJuIHRvIHBhZ2UnLFxuXHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAnQ2F0ZWdvcnkgbm90IGZvdW5kLicsXG5cdC8vIFN1bW1hcmllczpcblx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBBZGRpbmcgW1tDYXRlZ29yeTokMV1dJyxcblx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXTogQ29weWluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXSB0byBbW0NhdGVnb3J5OiQyXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBNb3ZpbmcgZnJvbSBbW0NhdGVnb3J5OiQxXV0gdG8gW1tDYXRlZ29yeTokMl1dJyxcblx0J2NhdC1hLWxvdC1zdW1tYXJ5LXJlbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBSZW1vdmluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXScsXG59IHNhdGlzZmllcyBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPjtcblxuY29uc3Qgc2V0TWVzc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdC8qISBDYXQtYS1sb3QgbWVzc2FnZXMgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cblx0aWYgKHdnVXNlckxhbmd1YWdlID09PSAnZW4nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldDx0eXBlb2YgREVGQVVMVF9NRVNTQUdFUz4oe1xuXHRcdFx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0XHRcdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAnJDHlgIvmlofku7blt7Lpgbjmk4cnLFxuXHRcdFx0Ly8gQWN0aW9uc1xuXHRcdFx0J2NhdC1hLWxvdC1jb3B5JzogJ+ikh+ijvScsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmUnOiAn56e75YuVJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkJzogJ+WinuWKoCcsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICflvp7mraTliIbpoZ7np7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ+i8uOWFpeWIhumhnuWQjeeosScsXG5cdFx0XHQnY2F0LWEtbG90LXNlbGVjdCc6ICfpgbjmk4cnLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwnOiAn5YWo6YOoJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZSc6ICfnhKEnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ+aykuaciemBuOaTh+aWh+S7tu+8gScsXG5cdFx0XHQvLyBQcmVmZXJlbmNlc1xuXHRcdFx0J2NhdC1hLWxvdC13YXRjaGxpc3RwcmVmJzogJ+S9v+eUqENhdC1BLUxvdOe3qOi8r+aWh+S7tuaZgueahOebo+imluWIl+ihqOmBuOmghScsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAn6IiH57O757Wx5Y+D5pW46Kit572u55u45ZCMJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAn5LiN6KaB5pu05pS555uj6KaW54uA5oWLJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAn55uj6KaW5L2/55SoQ2F0LUEtTG9057eo6Lyv55qE6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfdW53YXRjaCc6ICflsIfkvb/nlKhDYXQtQS1Mb3Tnt6jovK/nmoTpoIHpnaLlvp7nm6PoppbliJfooajnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1taW5vcnByZWYnOlxuXHRcdFx0XHQn5bCH57eo6Lyv5qiZ6KiY54iy5bCP5L+u5pS577yI6Iul5oKo5Zyo57O757Wx5Y+D5pW46Kit572u5Lit5bey6Kit572u5bCH5omA5pyJ57eo6Lyv5qiZ6KiY54iy5bCP5L+u5pS577yM5q2k6YG46aCF5LiN5pyD5bCN54++5pyJ6KGM54iy6YCy6KGM5pS55YuV77yJJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICflhYHoqLHlsI3kuI3mmK/mlofku7bnmoTpoIHpnaLlkozlrZDliIbpoZ7pgLLooYzliIbpoZ7mk43kvZwnLFxuXHRcdFx0J2NhdC1hLWxvdC1kb2NsZWFudXBwcmVmJzogJ+enu+mZpHt7Q2hlY2sgY2F0ZWdvcmllc3195Lim6YCy6KGM5YW25LuW57Sw56+A5riF55CGJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3ViY2F0Y291bnRwcmVmJzogJ+acgOWkmumhr+ekuueahOWtkOWIhumhnuaVuOmHjycsXG5cdFx0XHQvLyBQcm9ncmVzc1xuXHRcdFx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ+ato+WcqOWKoOi8ieKApuKApicsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRpbmcnOiAn5q2j5Zyo57eo6Lyv6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtb2YnOiAn77yM5YWx5pyJJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5JzogJ+S7peS4i+mggemdouW3sui3s+mBju+8jOWboOeIsumggemdouW3sue2k+WcqOWIhumhnuS4re+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtbm90LWZvdW5kJzogJ+S7peS4i+mggemdouW3sui3s+mBju+8jOWboOeIsuaJvuS4jeWIsOePvuacieWIhumhnu+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtc2VydmVyJzogJ+S7peS4i+mggemdoueEoeazlee3qOi8r++8jOWboOeIsumAo+aOpeacjeWLmeWZqOWHuumMr++8micsXG5cdFx0XHQnY2F0LWEtbG90LWFsbC1kb25lJzogJ+WFqOmDqOmggemdouW3suiZleeQhuOAgicsXG5cdFx0XHQnY2F0LWEtbG90LWRvbmUnOiAn5bey5a6M5oiQ77yBJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkZWQtY2F0JzogJ+W3suWKoOWFpeWIhumhnicsXG5cdFx0XHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAn5bey6KSH6KO95Yiw5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZWQtY2F0JzogJ+W3suenu+WLleWIsOWIhumhnicsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ+W3suW+nuWIhumhnuenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LXJldHVybi10by1wYWdlJzogJ+i/lOWbnuWIsOmggemdoicsXG5cdFx0XHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAn5om+5LiN5Yiw5YiG6aGe44CCJyxcblx0XHRcdC8vIFN1bW1hcmllc1xuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5Yqg5YWl5YiG6aGeW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1jb3B5JzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbpoZ7plpPopIfoo73vvJrlvp5bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhumhnumWk+enu+WLle+8muW+nltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrlvp7liIbpoZ7np7vpmaTvvJpbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldDx0eXBlb2YgREVGQVVMVF9NRVNTQUdFUz4oe1xuXHRcdFx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0XHRcdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAn5bey6YCJ5oupJDHkuKrpobXpnaLmiJbmlofku7YnLFxuXHRcdFx0Ly8gQWN0aW9uc1xuXHRcdFx0J2NhdC1hLWxvdC1jb3B5JzogJ+WkjeWIticsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmUnOiAn56e75YqoJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkJzogJ+WinuWKoCcsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICfku47mraTliIbnsbvnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ+i+k+WFpeWIhuexu+WQjeensCcsXG5cdFx0XHQnY2F0LWEtbG90LXNlbGVjdCc6ICfpgInmi6knLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwnOiAn5YWo6YOoJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZSc6ICfml6AnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ+ayoeaciemAieaLqeS7u+S9lemhtemdouaIluaWh+S7tu+8gScsXG5cdFx0XHQvLyBQcmVmZXJlbmNlc1xuXHRcdFx0J2NhdC1hLWxvdC13YXRjaGxpc3RwcmVmJzogJ+S9v+eUqENhdC1hLWxvdOe8lui+keaWh+S7tuaXtueahOebkeinhuWIl+ihqOmAiemhuScsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAn5LiO57O757uf5Y+C5pWw6K6+572u55u45ZCMJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAn5LiN6KaB5pu05pS555uR6KeG54q25oCBJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAn55uR6KeG5L2/55SoQ2F0LWEtbG9057yW6L6R55qE6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfdW53YXRjaCc6ICflsIbkvb/nlKhDYXQtYS1sb3TnvJbovpHnmoTpobXpnaLku47nm5Hop4bliJfooajnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1taW5vcnByZWYnOlxuXHRcdFx0XHQn5bCG57yW6L6R5qCH6K6w5Li65bCP5L+u5pS577yI6Iul5oKo5Zyo57O757uf5Y+C5pWw6K6+572u5Lit5bey6K6+572u5bCG5omA5pyJ57yW6L6R5qCH6K6w5Li65bCP5L+u5pS577yM5q2k6YCJ6aG55LiN5Lya5a+5546w5pyJ6KGM5Li66L+b6KGM5pS55Yqo77yJJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICflhYHorrjlr7nkuI3mmK/mlofku7bnmoTpobXpnaLlkozlrZDliIbnsbvov5vooYzliIbnsbvmk43kvZwnLFxuXHRcdFx0J2NhdC1hLWxvdC1kb2NsZWFudXBwcmVmJzogJ+enu+mZpHt7Q2hlY2sgY2F0ZWdvcmllc3195bm26L+b6KGM5YW25LuW57uG6IqC5riF55CGJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3ViY2F0Y291bnRwcmVmJzogJ+acgOWkmuaYvuekuueahOWtkOWIhuexu+aVsOmHjycsXG5cdFx0XHQvLyBQcm9ncmVzc1xuXHRcdFx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ+ato+WcqOWKoOi9veKApuKApicsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRpbmcnOiAn5q2j5Zyo57yW6L6R6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtb2YnOiAn77yM5YWx5pyJJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5JzogJ+S7peS4i+mhtemdouW3sui3s+i/h++8jOWboOS4uumhtemdouW3sue7j+WcqOWIhuexu+S4re+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtbm90LWZvdW5kJzogJ+S7peS4i+mhtemdouW3sui3s+i/h++8jOWboOS4uuaJvuS4jeWIsOeOsOacieWIhuexu++8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtc2VydmVyJzogJ+S7peS4i+mhtemdouaXoOazlee8lui+ke+8jOWboOS4uui/nuaOpeacjeWKoeWZqOWHuumUme+8micsXG5cdFx0XHQnY2F0LWEtbG90LWFsbC1kb25lJzogJ+WFqOmDqOmhtemdouW3suWkhOeQhuOAgicsXG5cdFx0XHQnY2F0LWEtbG90LWRvbmUnOiAn5bey5a6M5oiQ77yBJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkZWQtY2F0JzogJ+W3suWKoOWFpeWIhuexuycsXG5cdFx0XHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAn5bey5aSN5Yi25Yiw5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZWQtY2F0JzogJ+W3suenu+WKqOWIsOWIhuexuycsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ+W3suS7juWIhuexu+enu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LXJldHVybi10by1wYWdlJzogJ+i/lOWbnuWIsOmhtemdoicsXG5cdFx0XHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAn5om+5LiN5Yiw5YiG57G744CCJyxcblx0XHRcdC8vIFN1bW1hcmllc1xuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5Yqg5YWl5YiG57G7W1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1jb3B5JzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbnsbvpl7TlpI3liLbvvJrku45bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhuexu+mXtOenu+WKqO+8muS7jltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrku47liIbnsbvnp7vpmaTvvJpbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge0RFRkFVTFRfTUVTU0FHRVMsIHNldE1lc3NhZ2VzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1xuXHRDTEFTU19OQU1FLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUixcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNULFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOSyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQsXG5cdENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUsXG5cdENMQVNTX05BTUVfTEFCRUwsXG5cdENMQVNTX05BTUVfTEFCRUxfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCxcblx0REVGQVVMVF9TRVRUSU5HLFxuXHRWQVJJQU5UUyxcbn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge0RFRkFVTFRfTUVTU0FHRVMsIHNldE1lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCB0eXBlIHtNZXNzYWdlS2V5LCBTZXR0aW5nfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Z2V0Qm9keSwgdW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0Q2FjaGVkS2V5c30gZnJvbSAnLi9nZXRDYWNoZWRLZXlzJztcblxuY29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMsIHdnTmFtZXNwYWNlSWRzLCB3Z05hbWVzcGFjZU51bWJlciwgd2dUaXRsZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8qKlxuICogQ2hhbmdlcyBjYXRlZ29yeSBvZiBtdWx0aXBsZSBmaWxlc1xuICovXG5jb25zdCBjYXRBTG90ID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHQvKiEgQ2F0LWEtbG90IHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG5cdGNsYXNzIENBTCB7XG5cdFx0cHVibGljIHN0YXRpYyBpc1NlYXJjaE1vZGUgPSBmYWxzZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1FU1NBR0VTOiBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPiA9IERFRkFVTFRfTUVTU0FHRVM7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TRVRUSU5HOiBTZXR0aW5nID0gREVGQVVMVF9TRVRUSU5HO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQVBJX1RBRzogc3RyaW5nID0gT1BUSU9OUy5hcGlUYWc7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEFSR0VUX05BTUVTUEFDRTogbnVtYmVyID0gT1BUSU9OUy50YXJnZXROYW1lc3BhY2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBDVVJSRU5UX0NBVEVHUk9ZOiBzdHJpbmcgPSB3Z1RpdGxlO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgd2dGb3JtYXR0ZWROYW1lc3BhY2VzOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0gd2dGb3JtYXR0ZWROYW1lc3BhY2VzO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHdnTmFtZXNwYWNlSWRzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0gd2dOYW1lc3BhY2VJZHM7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBpc0F1dG9Db21wbGV0ZUluaXQgPSBmYWxzZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIGFwaSA9IGFwaTtcblxuXHRcdHByaXZhdGUgc3RhdGljIGFscmVhZHlUaGVyZTogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBjb25uZWN0aW9uRXJyb3I6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbm90Rm91bmQ6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY291bnRlckN1cnJlbnQgPSAwO1xuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJOZWVkZWQgPSAwO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgY291bnRlckNhdCA9IDA7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY3VycmVudENhdGVnb3J5ID0gJyc7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBkaWFsb2dIZWlnaHQgPSA0NTA7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZWRpdFRva2VuID0gJyc7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbG9jYWxDYXROYW1lID0gd2dGb3JtYXR0ZWROYW1lc3BhY2VzW0NBTC5UQVJHRVRfTkFNRVNQQUNFXSBhcyBzdHJpbmc7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBwYXJlbnRDYXRzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIHN1YkNhdHM6IHN0cmluZ1tdID0gW107XG5cblx0XHRwcml2YXRlIHN0YXRpYyBzZXR0aW5nczogTm9uTnVsbGFibGU8dHlwZW9mIHdpbmRvdy5DYXRBTG90UHJlZnM+ID0ge307XG5cdFx0cHJpdmF0ZSBzdGF0aWMgdmFyaWFudENhY2hlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHRcdC8vIFJhdGUgbGltaXRpbmc6IHNldCB0byAxMDAwIG1zIGZvciB+MSByZXF1ZXN0IHBlciBzZWNvbmRcblx0XHRwcml2YXRlIHN0YXRpYyByZXF1ZXN0RGVsYXkgPSAxMDAwO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlcXVlc3RRdWV1ZTogQXJyYXk8e1xuXHRcdFx0Zm46ICgpID0+IFByb21pc2U8dW5rbm93bj47XG5cdFx0XHRyZXNvbHZlOiAodmFsdWU6IHVua25vd24pID0+IHZvaWQ7XG5cdFx0XHRyZWplY3Q6IChyZWFzb246IHVua25vd24pID0+IHZvaWQ7XG5cdFx0fT4gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBwcm9jZXNzaW5nUXVldWUgPSBmYWxzZTtcblx0XHRwcml2YXRlIHN0YXRpYyBsYXN0U3RhcnQgPSAwO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgZW5xdWV1ZUFwaUNhbGw8VD4oZm46ICgpID0+IFQpOiBQcm9taXNlPEF3YWl0ZWQ8VD4+IHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZTxBd2FpdGVkPFQ+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdENBTC5yZXF1ZXN0UXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Zm46IGZuIGFzIHVua25vd24gYXMgKCkgPT4gUHJvbWlzZTx1bmtub3duPixcblx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlIGFzICh2OiB1bmtub3duKSA9PiB2b2lkLFxuXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0IGFzIChlOiB1bmtub3duKSA9PiB2b2lkLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKCFDQUwucHJvY2Vzc2luZ1F1ZXVlKSB7XG5cdFx0XHRcdFx0Q0FMLnByb2Nlc3NpbmdRdWV1ZSA9IHRydWU7XG5cdFx0XHRcdFx0dm9pZCBDQUwucHJvY2Vzc1F1ZXVlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGFzeW5jIHByb2Nlc3NRdWV1ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRcdHdoaWxlIChDQUwucmVxdWVzdFF1ZXVlLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCB7Zm4sIHJlc29sdmUsIHJlamVjdH0gPSBDQUwucmVxdWVzdFF1ZXVlLnNoaWZ0KCkhO1xuXHRcdFx0XHRjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXHRcdFx0XHRjb25zdCB3YWl0ID0gTWF0aC5tYXgoMCwgQ0FMLnJlcXVlc3REZWxheSAtIChub3cgLSBDQUwubGFzdFN0YXJ0KSk7XG5cdFx0XHRcdGlmICh3YWl0KSB7XG5cdFx0XHRcdFx0YXdhaXQgbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgd2FpdCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdENBTC5sYXN0U3RhcnQgPSBEYXRlLm5vdygpO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZuKCk7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXMpO1xuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0cmVqZWN0KGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRDQUwucHJvY2Vzc2luZ1F1ZXVlID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgJGNvdW50ZXI6IEpRdWVyeSA9ICQoKTtcblx0XHRwcml2YXRlIHN0YXRpYyAkcHJvZ3Jlc3NEaWFsb2c6IEpRdWVyeSA9ICQoKTtcblx0XHRwcml2YXRlIHN0YXRpYyAkbGFiZWxzOiBKUXVlcnkgPSAkKCk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgJHNlbGVjdGVkTGFiZWxzOiBKUXVlcnkgPSAkKCk7XG5cblx0XHRwcml2YXRlIHJlYWRvbmx5ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pjtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRjb250YWluZXI6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRkYXRhQ29udGFpbmVyOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkbWFya0NvdW50ZXI6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRyZXN1bHRMaXN0OiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkc2VhcmNoSW5wdXQ6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50Pjtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRoZWFkOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkbGluazogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PjtcblxuXHRcdHB1YmxpYyBjb25zdHJ1Y3RvcigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pIHtcblx0XHRcdGlmICghbXcubWVzc2FnZSgnY2F0LWEtbG90LWxvYWRpbmcnKS5wYXJzZSgpKSB7XG5cdFx0XHRcdG13Lm1lc3NhZ2VzLnNldChDQUwuTUVTU0FHRVMpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRib2R5ID0gJGJvZHk7XG5cdFx0XHRDQUwuaW5pdFNldHRpbmdzKCk7XG5cblx0XHRcdGNvbnN0IGNvbnRhaW5lciA9IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1tDTEFTU19OQU1FLCBDTEFTU19OQU1FX0NPTlRBSU5FUiwgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSfSAvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH0gLz5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtDQUwubXNnKCdlbnRlci1uYW1lJyl9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtDQUwuaXNTZWFyY2hNb2RlID8gKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VhcmNoJykgPz8gJycpIDogJyd9XG5cdFx0XHRcdFx0XHRcdFx0b25LZXlEb3duPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJDxIVE1MSW5wdXRFbGVtZW50PihldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2F0OiBzdHJpbmcgPSAkZWxlbWVudC52YWwoKT8udHJpbSgpID8/ICcnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2F0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKGNhdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfT5cblx0XHRcdFx0XHRcdFx0e1tDQUwubXNnKCdzZWxlY3QnKSwgJyAnXX1cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19BTEx9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdhbGwnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHR7JyDigKIgJ31cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlQWxsKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ25vbmUnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9PlxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9PkNhdC1hLWxvdDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLiRjb250YWluZXIgPSAkKGNvbnRhaW5lcikgYXMgSlF1ZXJ5O1xuXHRcdFx0dGhpcy4kY29udGFpbmVyLmFwcGVuZFRvKHRoaXMuJGJvZHkpO1xuXG5cdFx0XHR0aGlzLiRkYXRhQ29udGFpbmVyID0gdGhpcy4kY29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9YCk7XG5cdFx0XHR0aGlzLiRtYXJrQ291bnRlciA9IHRoaXMuJGRhdGFDb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVJ9YCk7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0ID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9YCk7XG5cdFx0XHR0aGlzLiRzZWFyY2hJbnB1dCA9IHRoaXMuJGRhdGFDb250YWluZXIuZmluZDxIVE1MSW5wdXRFbGVtZW50Pihcblx0XHRcdFx0YC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVH1gXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLiRoZWFkID0gdGhpcy4kY29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9YCk7XG5cdFx0XHR0aGlzLiRsaW5rID0gdGhpcy4kaGVhZC5maW5kPEhUTUxBbmNob3JFbGVtZW50PihgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LfWApO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBidWlsZEVsZW1lbnRzKCk6IHZvaWQge1xuXHRcdFx0Y29uc3QgcmVnZXhDYXQ6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF5cXFxccyoke0NBTC5sb2NhbGl6ZWRSZWdleChDQUwuVEFSR0VUX05BTUVTUEFDRSwgJ0NhdGVnb3J5Jyl9OmAsICcnKTtcblx0XHRcdGxldCBpc0NvbXBvc2l0aW9uU3RhcnQ6IGJvb2xlYW47XG5cblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdjb21wb3NpdGlvbnN0YXJ0JywgKCkgPT4ge1xuXHRcdFx0XHRpc0NvbXBvc2l0aW9uU3RhcnQgPSB0cnVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdjb21wb3NpdGlvbmVuZCcsICgpID0+IHtcblx0XHRcdFx0aXNDb21wb3NpdGlvblN0YXJ0ID0gZmFsc2U7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQub24oJ2lucHV0IGtleXVwJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGlmIChpc0NvbXBvc2l0aW9uU3RhcnQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3Qge2N1cnJlbnRUYXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHRcdGNvbnN0IHt2YWx1ZTogb2xkVmFsfSA9IGN1cnJlbnRUYXJnZXQ7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbDogc3RyaW5nID0gb2xkVmFsLnJlcGxhY2UocmVnZXhDYXQsICcnKTtcblx0XHRcdFx0aWYgKG5ld1ZhbCAhPT0gb2xkVmFsKSB7XG5cdFx0XHRcdFx0Y3VycmVudFRhcmdldC52YWx1ZSA9IG5ld1ZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IGluaXRBdXRvY29tcGxldGUgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdGlmIChDQUwuaXNBdXRvQ29tcGxldGVJbml0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdENBTC5pc0F1dG9Db21wbGV0ZUluaXQgPSB0cnVlO1xuXG5cdFx0XHRcdHRoaXMuJHNlYXJjaElucHV0LmF1dG9jb21wbGV0ZSh7XG5cdFx0XHRcdFx0c291cmNlOiAocmVxdWVzdDoge3Rlcm06IHN0cmluZ30sIHJlc3BvbnNlOiAoYXJnOiBKUXVlcnk8c3RyaW5nPikgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdvcGVuc2VhcmNoJyxcblx0XHRcdFx0XHRcdFx0XHRuYW1lc3BhY2U6IENBTC5UQVJHRVRfTkFNRVNQQUNFLFxuXHRcdFx0XHRcdFx0XHRcdHJlZGlyZWN0czogJ3Jlc29sdmUnLFxuXHRcdFx0XHRcdFx0XHRcdHNlYXJjaDogcmVxdWVzdC50ZXJtLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdFsxXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2UoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQocmVzdWx0WzFdKS5tYXAoKF9pbmRleCwgaXRlbTogc3RyaW5nKTogc3RyaW5nID0+IGl0ZW0ucmVwbGFjZShyZWdleENhdCwgJycpKVxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0bXk6ICdyaWdodCBib3R0b20nLFxuXHRcdFx0XHRcdFx0YXQ6ICdyaWdodCB0b3AnLFxuXHRcdFx0XHRcdFx0b2Y6IHRoaXMuJHNlYXJjaElucHV0LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YXBwZW5kVG86IGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUn1gLFxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHR0aGlzLiRsaW5rLm9uKCdjbGljaycsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHQkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEKTtcblx0XHRcdFx0aW5pdEF1dG9jb21wbGV0ZSgpO1xuXHRcdFx0XHR0aGlzLnJ1bigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaW5pdFNldHRpbmdzKCk6IHZvaWQge1xuXHRcdFx0bGV0IGNhdEFMb3RQcmVmczogdHlwZW9mIENBTC5zZXR0aW5ncyA9IHdpbmRvdy5DYXRBTG90UHJlZnMgPz8ge307XG5cdFx0XHRjb25zdCB0eXBlT2ZDYXRBTG90UHJlZnMgPSB0eXBlb2YgY2F0QUxvdFByZWZzO1xuXHRcdFx0aWYgKCh0eXBlT2ZDYXRBTG90UHJlZnMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGNhdEFMb3RQcmVmcykpIHx8IHR5cGVPZkNhdEFMb3RQcmVmcyAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Y2F0QUxvdFByZWZzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3Qgc2V0dGluZ0tleSBvZiBPYmplY3Qua2V5cyhDQUwuREVGQVVMVF9TRVRUSU5HKSBhcyAoa2V5b2YgU2V0dGluZylbXSkge1xuXHRcdFx0XHRjb25zdCBzZXR0aW5nID0gQ0FMLkRFRkFVTFRfU0VUVElOR1tzZXR0aW5nS2V5XTtcblxuXHRcdFx0XHRDQUwuc2V0dGluZ3Nbc2V0dGluZ0tleV0gPSBjYXRBTG90UHJlZnNbc2V0dGluZ0tleV0gPz8gc2V0dGluZy5kZWZhdWx0O1xuXG5cdFx0XHRcdGlmICghc2V0dGluZy5zZWxlY3RfaTE4bikge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2V0dGluZy5zZWxlY3QgPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBtZXNzYWdlS2V5IG9mIE9iamVjdC5rZXlzKHNldHRpbmcuc2VsZWN0X2kxOG4pKSB7XG5cdFx0XHRcdFx0Y29uc3QgbWVzc2FnZTogc3RyaW5nID0gc2V0dGluZy5zZWxlY3RfaTE4blttZXNzYWdlS2V5XSBhcyBrZXlvZiB0eXBlb2Ygc2V0dGluZy5zZWxlY3RfaTE4bjtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0c2V0dGluZy5zZWxlY3RbQ0FMLm1zZyhtZXNzYWdlS2V5IGFzIG5ldmVyKV0gPSBtZXNzYWdlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgbXNnKGtleTogTWVzc2FnZUtleSBleHRlbmRzIGBjYXQtYS1sb3QtJHtpbmZlciBQfWAgPyBQIDogbmV2ZXIsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcblx0XHRcdGNvbnN0IGZ1bGxLZXk6IHN0cmluZyA9IGBjYXQtYS1sb3QtJHtrZXl9YDtcblx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGZ1bGxLZXksIC4uLmFyZ3MpLnBhcnNlKCkgOiBtdy5tZXNzYWdlKGZ1bGxLZXkpLnBsYWluKCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsaXplZFJlZ2V4KG5hbWVzcGFjZU51bWJlcjogbnVtYmVyLCBmYWxsYmFjazogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdC8vIENvcGllZCBmcm9tIEhvdENhdCwgdGhhbmtzIEx1cG8uXG5cdFx0XHRjb25zdCB3aWtpVGV4dEJsYW5rOiBzdHJpbmcgPSBTdHJpbmcucmF3YFtcXHQgX1xceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMF0rYDtcblx0XHRcdGNvbnN0IHdpa2lUZXh0QmxhbmtSRTogUmVnRXhwID0gbmV3IFJlZ0V4cCh3aWtpVGV4dEJsYW5rLCAnZycpO1xuXHRcdFx0Y29uc3QgY3JlYXRlUmVnZXhTdHIgPSAobmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nID0+IHtcblx0XHRcdFx0aWYgKCFuYW1lPy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHJlZ2V4TmFtZTogc3RyaW5nID0gJyc7XG5cdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW5pdGlhbDogc3RyaW5nID0gbmFtZS5zbGljZShpLCBpICsgMSk7XG5cdFx0XHRcdFx0Y29uc3QgbGw6IHN0cmluZyA9IGluaXRpYWwudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRjb25zdCB1bDogc3RyaW5nID0gaW5pdGlhbC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRcdHJlZ2V4TmFtZSArPSBsbCA9PT0gdWwgPyBpbml0aWFsIDogYFske2xsfSR7dWx9XWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlZ2V4TmFtZS5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csIFN0cmluZy5yYXdgXFwkMWApLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKTtcblx0XHRcdH07XG5cdFx0XHRmYWxsYmFjayA9IGZhbGxiYWNrLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRjb25zdCBjYW5vbmljYWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IENBTC53Z0Zvcm1hdHRlZE5hbWVzcGFjZXNbbmFtZXNwYWNlTnVtYmVyXT8udG9Mb3dlckNhc2UoKTtcblx0XHRcdGxldCByZWdleFN0cmluZzogc3RyaW5nID0gY3JlYXRlUmVnZXhTdHIoY2Fub25pY2FsKTtcblx0XHRcdGlmIChmYWxsYmFjayAmJiBjYW5vbmljYWwgIT09IGZhbGxiYWNrKSB7XG5cdFx0XHRcdHJlZ2V4U3RyaW5nICs9IGB8JHtjcmVhdGVSZWdleFN0cihmYWxsYmFjayl9YDtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3QgY2F0TmFtZSBvZiBPYmplY3Qua2V5cyhDQUwud2dOYW1lc3BhY2VJZHMpKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRjYXROYW1lLnRvTG93ZXJDYXNlKCkgIT09IGNhbm9uaWNhbCAmJlxuXHRcdFx0XHRcdGNhdE5hbWUudG9Mb3dlckNhc2UoKSAhPT0gZmFsbGJhY2sgJiZcblx0XHRcdFx0XHRDQUwud2dOYW1lc3BhY2VJZHNbY2F0TmFtZV0gPT09IG5hbWVzcGFjZU51bWJlclxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZWdleFN0cmluZyArPSBgfCR7Y3JlYXRlUmVnZXhTdHIoY2F0TmFtZSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGAoPzoke3JlZ2V4U3RyaW5nfSlgO1xuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIoKTogdm9pZCB7XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzID0gQ0FMLiRsYWJlbHMuZmlsdGVyKGAuJHtDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEfWApO1xuXHRcdFx0dGhpcy4kbWFya0NvdW50ZXIuc2hvdygpLmh0bWwoQ0FMLm1zZygnZmlsZXMtc2VsZWN0ZWQnLCBDQUwuJHNlbGVjdGVkTGFiZWxzLmxlbmd0aC50b1N0cmluZygpKSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgdG9nZ2xlQWxsKHNlbGVjdDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0Q0FMLiRsYWJlbHMudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCwgc2VsZWN0KTtcblx0XHRcdHRoaXMudXBkYXRlU2VsZWN0aW9uQ291bnRlcigpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBzdGF0aWMgYXN5bmMgZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG5cdFx0XHRpZiAoQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gIT09IHVuZGVmaW5lZCAmJiBBcnJheS5pc0FycmF5KENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldKSkge1xuXHRcdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIGNhdGVnb3J5KSAhPT0gdW5kZWZpbmVkICYmXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgY2F0ZWdvcnkpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgY2F0ZWdvcnkpIGFzIHN0cmluZ1tdO1xuXHRcdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV07XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtjYXRlZ29yeV07XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRleHQ6IGA8dWwgaWQ9XCJjYWwtdmFyaWFudHNcIj5cblx0PGxpIGlkPVwiY2FsLXpoXCI+LXt6aHwke2NhdGVnb3J5fX0tPC9saT5cblx0PGxpIGlkPVwiY2FsLXpoLWhhbnNcIj4te3poLWhhbnN8JHtjYXRlZ29yeX19LTwvbGk+XG5cdDxsaSBpZD1cImNhbC16aC1oYW50XCI+LXt6aC1oYW50fCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtY25cIj4te3poLWNufCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtaGtcIj4te3poLWhrfCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtbW9cIj4te3poLW1vfCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtbXlcIj4te3poLW15fCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtc2dcIj4te3poLXNnfCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtdHdcIj4te3poLXR3fCR7Y2F0ZWdvcnl9fS08L2xpPlxuPC91bD5gLFxuXHRcdFx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdFx0XHR2YXJpYW50OiAnemgnLFxuXHRcdFx0fTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBDQUwuZW5xdWV1ZUFwaUNhbGwoKCkgPT4gQ0FMLmFwaS5nZXQocGFyYW1zKSk7XG5cdFx0XHRcdGNvbnN0IHt0ZXh0fSA9IHBhcnNlO1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSAkKHRleHQpLmVxKDApLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdGNvbnN0ICRyZXN1bHQgPSAkKHJlc3VsdCk7XG5cdFx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiBWQVJJQU5UUykge1xuXHRcdFx0XHRcdGlmICgkcmVzdWx0LmZpbmQoYCNjYWwtJHt2YXJpYW50fWApKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRzW3Jlc3VsdHMubGVuZ3RoXSA9ICRyZXN1bHQuZmluZChgI2NhbC0ke3ZhcmlhbnR9YCkudGV4dCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Ly8gRGUtZHVwbGljYXRlXG5cdFx0XHRDQUwudmFyaWFudENhY2hlW2NhdGVnb3J5XSA9IHVuaXF1ZUFycmF5KHJlc3VsdHMpOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyBjYXRlZ29yeSwgQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0sIDYwICogNjAgKiAyNCk7IC8vIDEgZGF5XG5cdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV07XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgYXN5bmMgcmVnZXhCdWlsZGVyKGNhdGVnb3J5OiBzdHJpbmcpOiBQcm9taXNlPFJlZ0V4cD4ge1xuXHRcdFx0Ly8gQnVpbGQgYSByZWdleHAgc3RyaW5nIGZvciBtYXRjaGluZyB0aGUgZ2l2ZW4gY2F0ZWdvcnk6XG5cdFx0XHRjb25zdCBjYXROYW1lOiBzdHJpbmcgPSBDQUwubG9jYWxpemVkUmVnZXgoQ0FMLlRBUkdFVF9OQU1FU1BBQ0UsICdDYXRlZ29yeScpO1xuXHRcdFx0Ly8gdHJpbSBsZWFkaW5nL3RyYWlsaW5nIHdoaXRlc3BhY2UgYW5kIHVuZGVyc2NvcmVzXG5cdFx0XHRjYXRlZ29yeSA9IGNhdGVnb3J5LnJlcGxhY2UoL15bXFxzX10rLywgJycpLnJlcGxhY2UoL1tcXHNfXSskLywgJycpO1xuXHRcdFx0Ly8gRmluZCBhbGwgdmFyaWFudHNcblx0XHRcdGNvbnN0IHZhcmlhbnRzOiBzdHJpbmdbXSA9IGF3YWl0IENBTC5maW5kQWxsVmFyaWFudHMoY2F0ZWdvcnkpO1xuXHRcdFx0Ly8gZXNjYXBlIHJlZ2V4cCBtZXRhY2hhcmFjdGVycyAoPSBhbnkgQVNDSUkgcHVuY3R1YXRpb24gZXhjZXB0IF8pXG5cdFx0XHRjb25zdCB2YXJpYW50UmVnRXhwczogc3RyaW5nW10gPSBbXTtcblx0XHRcdGZvciAobGV0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcblx0XHRcdFx0dmFyaWFudCA9IG13LnV0aWwuZXNjYXBlUmVnRXhwKHZhcmlhbnQpO1xuXHRcdFx0XHQvLyBhbnkgc2VxdWVuY2Ugb2Ygc3BhY2VzIGFuZCB1bmRlcnNjb3JlcyBzaG91bGQgbWF0Y2ggYW55IG90aGVyXG5cdFx0XHRcdHZhcmlhbnQgPSB2YXJpYW50LnJlcGxhY2UoL1tcXHNfXSsvZywgU3RyaW5nLnJhd2BbXFxzX10rYCk7XG5cdFx0XHRcdC8vIE1ha2UgdGhlIGZpcnN0IGNoYXJhY3RlciBjYXNlLWluc2Vuc2l0aXZlOlxuXHRcdFx0XHRjb25zdCBmaXJzdDogc3RyaW5nID0gdmFyaWFudC5zbGljZSgwLCAxKTtcblx0XHRcdFx0aWYgKGZpcnN0LnRvVXBwZXJDYXNlKCkgIT09IGZpcnN0LnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdFx0XHR2YXJpYW50ID0gYFske2ZpcnN0LnRvVXBwZXJDYXNlKCl9JHtmaXJzdC50b0xvd2VyQ2FzZSgpfV0ke3ZhcmlhbnQuc2xpY2UoMSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXJpYW50UmVnRXhwc1t2YXJpYW50UmVnRXhwcy5sZW5ndGhdID0gdmFyaWFudDtcblx0XHRcdH1cblx0XHRcdC8vIENvbXBpbGUgaXQgaW50byBhIFJlZ0V4cCB0aGF0IG1hdGNoZXMgTWVkaWFXaWtpIGNhdGVnb3J5IHN5bnRheCAoeWVhaCwgaXQgbG9va3MgdWdseSk6XG5cdFx0XHQvLyBYWFg6IHRoZSBmaXJzdCBjYXB0dXJpbmcgcGFyZW5zIGFyZSBhc3N1bWVkIHRvIG1hdGNoIHRoZSBzb3J0a2V5LCBpZiBwcmVzZW50LCBpbmNsdWRpbmcgdGhlIHwgYnV0IGV4Y2x1ZGluZyB0aGUgXV1cblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcW1tcXFxcc19dKiR7Y2F0TmFtZX1bXFxcXHNfXSo6W1xcXFxzX10qKD86JHt2YXJpYW50UmVnRXhwcy5qb2luKFxuXHRcdFx0XHRcdCd8J1xuXHRcdFx0XHQpfSlbXFxcXHNfXSooXFxcXHxbXlxcXFxdXSooPzpcXFxcXVteXFxcXF1dKykqKT9cXFxcXVxcXFxdYCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZG9BUElDYWxsKFxuXHRcdFx0X3BhcmFtczogT21pdDxBcGlFZGl0UGFnZVBhcmFtcywgJ2Zvcm1hdCc+LFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkXG5cdFx0KSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBfcGFyYW1zIGFzIHR5cGVvZiBfcGFyYW1zICYge1xuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJztcblx0XHRcdFx0dGl0bGU/OiBzdHJpbmc7XG5cdFx0XHR9O1xuXHRcdFx0cGFyYW1zWydmb3JtYXQnXSA9ICdqc29uJztcblx0XHRcdHBhcmFtc1snZm9ybWF0dmVyc2lvbiddID0gJzInO1xuXHRcdFx0bGV0IGk6IG51bWJlciA9IDA7XG5cdFx0XHRjb25zdCBkb0NhbGwgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0IGhhbmRsZUVycm9yID0gKGVycm9yOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRtdy5sb2cuZXJyb3IoJ1tDYXQtYS1sb3RdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0XHRcdGlmIChpIDwgNCkge1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dChkb0NhbGwsIDMwMCk7XG5cdFx0XHRcdFx0XHRpKys7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwYXJhbXNbJ3RpdGxlJ10pIHtcblx0XHRcdFx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3JbQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGhdID0gcGFyYW1zWyd0aXRsZSddO1xuXHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAocGFyYW1zWydhY3Rpb24nXSA9PT0gJ3F1ZXJ5Jykge1xuXHRcdFx0XHRcdENBTC5lbnF1ZXVlQXBpQ2FsbCgoKSA9PiBDQUwuYXBpLmdldChwYXJhbXMpKVxuXHRcdFx0XHRcdFx0LnRoZW4oY2FsbGJhY2spXG5cdFx0XHRcdFx0XHQuY2F0Y2goaGFuZGxlRXJyb3IpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdENBTC5lbnF1ZXVlQXBpQ2FsbCgoKSA9PiBDQUwuYXBpLnBvc3QocGFyYW1zKSlcblx0XHRcdFx0XHRcdC50aGVuKGNhbGxiYWNrKVxuXHRcdFx0XHRcdFx0LmNhdGNoKGhhbmRsZUVycm9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGRvQ2FsbCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIG1hcmtBc0RvbmUoXG5cdFx0XHQkbWFya2VkTGFiZWw6IEpRdWVyeSxcblx0XHRcdHRhcmdldENhdGVnb3J5OiBzdHJpbmcsXG5cdFx0XHRtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJyB8ICdyZW1vdmUnXG5cdFx0KTogdm9pZCB7XG5cdFx0XHQkbWFya2VkTGFiZWwuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9ET05FKTtcblxuXHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2FkZCc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnYWRkZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY29weSc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnY29waWVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21vdmUnOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ21vdmVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JlbW92ZSc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygncmVtb3ZlZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIHN0YXRpYyBkb0NsZWFudXAodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdHJldHVybiBDQUwuc2V0dGluZ3MuZG9jbGVhbnVwID8gdGV4dC5yZXBsYWNlKC97e1xccypbQ2NdaGVjayBjYXRlZ29yaWVzXFxzKihcXHw/Lio/KX19LywgJycpIDogdGV4dDtcblx0XHR9IC8vIFJlbW92ZSB7e1VuY2F0ZWdvcml6ZWR9fSAoYWxzbyB3aXRoIGNvbW1lbnQpLiBObyBuZWVkIHRvIHJlcGxhY2UgaXQgd2l0aCBhbnl0aGluZ1xuXHRcdHByaXZhdGUgc3RhdGljIHJlbW92ZVVuY2F0KHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKC9cXHtcXHtcXHMqW1V1XW5jYXRlZ29yaXplZFxccyooXFx8Py4qPylcXH1cXH0vLCAnJyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZGlzcGxheVJlc3VsdCgpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKHtcblx0XHRcdFx0Y3Vyc29yOiAnJyxcblx0XHRcdFx0b3ZlcmZsb3c6ICcnLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLiRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUVfRkVFREJBQ0t9YCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FKTtcblxuXHRcdFx0Y29uc3QgJHBhcmVudDogSlF1ZXJ5ID0gQ0FMLiRjb3VudGVyLnBhcmVudCgpO1xuXHRcdFx0JHBhcmVudC5odG1sKDxoMz57Q0FMLm1zZygnZG9uZScpfTwvaDM+KTtcblx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdHtDQUwubXNnKCdhbGwtZG9uZScpfVxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCk7XG5cblx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdENBTC4kcHJvZ3Jlc3NEaWFsb2cucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUFsbChmYWxzZSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtDQUwubXNnKCdyZXR1cm4tdG8tcGFnZScpfVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGgpIHtcblx0XHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxoNT57Q0FMLm1zZygnc2tpcHBlZC1hbHJlYWR5JywgQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGgudG9TdHJpbmcoKSl9PC9oNT5cblx0XHRcdFx0XHRcdHtDQUwuYWxyZWFkeVRoZXJlLnJlZHVjZTwoc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50KVtdPihcblx0XHRcdFx0XHRcdFx0KHByZSwgY3VyLCBpbmRleCkgPT5cblx0XHRcdFx0XHRcdFx0XHRpbmRleCA8IENBTC5hbHJlYWR5VGhlcmUubGVuZ3RoIC0gMSA/IFsuLi5wcmUsIGN1ciwgPGJyIGtleT17aW5kZXh9IC8+XSA6IFsuLi5wcmUsIGN1cl0sXG5cdFx0XHRcdFx0XHRcdFtdXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKENBTC5ub3RGb3VuZC5sZW5ndGgpIHtcblx0XHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxoNT57Q0FMLm1zZygnc2tpcHBlZC1ub3QtZm91bmQnLCBDQUwubm90Rm91bmQubGVuZ3RoLnRvU3RyaW5nKCkpfTwvaDU+XG5cdFx0XHRcdFx0XHR7Q0FMLm5vdEZvdW5kLnJlZHVjZTwoc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50KVtdPihcblx0XHRcdFx0XHRcdFx0KHByZSwgY3VyLCBpbmRleCkgPT5cblx0XHRcdFx0XHRcdFx0XHRpbmRleCA8IENBTC5ub3RGb3VuZC5sZW5ndGggLSAxID8gWy4uLnByZSwgY3VyLCA8YnIga2V5PXtpbmRleH0gLz5dIDogWy4uLnByZSwgY3VyXSxcblx0XHRcdFx0XHRcdFx0W11cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGgpIHtcblx0XHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxoNT57Q0FMLm1zZygnc2tpcHBlZC1zZXJ2ZXInLCBDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aC50b1N0cmluZygpKX08L2g1PlxuXHRcdFx0XHRcdFx0e0NBTC5jb25uZWN0aW9uRXJyb3IucmVkdWNlPChzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpW10+KFxuXHRcdFx0XHRcdFx0XHQocHJlLCBjdXIsIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0XHRcdGluZGV4IDwgQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGggLSAxXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IFsuLi5wcmUsIGN1ciwgPGJyIGtleT17aW5kZXh9IC8+XVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBbLi4ucHJlLCBjdXJdLFxuXHRcdFx0XHRcdFx0XHRbXVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSB1cGRhdGVDb3VudGVyKCk6IHZvaWQge1xuXHRcdFx0Q0FMLmNvdW50ZXJDdXJyZW50Kys7XG5cdFx0XHRpZiAoQ0FMLmNvdW50ZXJDdXJyZW50ID4gQ0FMLmNvdW50ZXJOZWVkZWQpIHtcblx0XHRcdFx0dGhpcy5kaXNwbGF5UmVzdWx0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRDQUwuJGNvdW50ZXIudGV4dChDQUwuY291bnRlckN1cnJlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIGFzeW5jIGVkaXRDYXRlZ29yaWVzKFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdHJlc3VsdDogUmVjb3JkPHN0cmluZywgYW55Pixcblx0XHRcdG1hcmtlZExhYmVsOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz5bMF0sXG5cdFx0XHR0YXJnZXRDYXRlZ29yeTogc3RyaW5nLFxuXHRcdFx0bW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZScgfCAncmVtb3ZlJ1xuXHRcdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdFx0Y29uc3QgW21hcmtlZExhYmVsVGl0bGUsICRtYXJrZWRMYWJlbF0gPSBtYXJrZWRMYWJlbDtcblxuXHRcdFx0aWYgKCFyZXN1bHQ/LlsncXVlcnknXSkge1xuXHRcdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yW0NBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoXSA9IG1hcmtlZExhYmVsVGl0bGU7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGxldCBvcmlnaW5UZXh0OiBzdHJpbmcgPSAnJztcblx0XHRcdGxldCBzdGFydHRpbWVzdGFtcDogbnVtYmVyID0gMDtcblx0XHRcdGxldCB0aW1lc3RhbXA6IG51bWJlciA9IDA7XG5cdFx0XHRDQUwuZWRpdFRva2VuID0gcmVzdWx0WydxdWVyeSddLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRjb25zdCB7cGFnZXN9ID0gcmVzdWx0WydxdWVyeSddO1xuXG5cdFx0XHRjb25zdCBbcGFnZV0gPSBwYWdlcztcblx0XHRcdG9yaWdpblRleHQgPSBwYWdlPy5yZXZpc2lvbnM/LlswXS5zbG90cy5tYWluLmNvbnRlbnQ7XG5cdFx0XHQoe3N0YXJ0dGltZXN0YW1wfSA9IHBhZ2UpO1xuXHRcdFx0W3t0aW1lc3RhbXB9XSA9IHBhZ2UucmV2aXNpb25zO1xuXG5cdFx0XHRjb25zdCBzb3VyY2VjYXQ6IHN0cmluZyA9IENBTC5DVVJSRU5UX0NBVEVHUk9ZO1xuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhhdCBmaWxlIGlzIGFscmVhZHkgaW4gdGhhdCBjYXRlZ29yeVxuXHRcdFx0Y29uc3QgdGFyZ2VSZWdFeHAgPSBhd2FpdCBDQUwucmVnZXhCdWlsZGVyKHRhcmdldENhdGVnb3J5KTtcblx0XHRcdGlmIChtb2RlICE9PSAncmVtb3ZlJyAmJiB0YXJnZVJlZ0V4cC50ZXN0KG9yaWdpblRleHQpICYmIG1vZGUgIT09ICdtb3ZlJykge1xuXHRcdFx0XHRDQUwuYWxyZWFkeVRoZXJlW0NBTC5hbHJlYWR5VGhlcmUubGVuZ3RoXSA9IG1hcmtlZExhYmVsVGl0bGU7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpeCB0ZXh0XG5cdFx0XHRsZXQgdGV4dDogc3RyaW5nID0gb3JpZ2luVGV4dDtcblx0XHRcdGxldCBzdW1tYXJ5OiBzdHJpbmc7XG5cdFx0XHRjb25zdCBzb3VyY2VDYXRSZWdFeHAgPSBhd2FpdCBDQUwucmVnZXhCdWlsZGVyKHNvdXJjZWNhdCk7XG5cdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnYWRkJzpcblx0XHRcdFx0XHR0ZXh0ICs9IGBcXG5bWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX1dXVxcbmA7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktYWRkJykucmVwbGFjZSgnJDEnLCB0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NvcHknOlxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRzb3VyY2VDYXRSZWdFeHAsXG5cdFx0XHRcdFx0XHRgW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7c291cmNlY2F0fSQxXV1cXG5bWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX0kMV1dYFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktY29weScpLnJlcGxhY2UoJyQxJywgc291cmNlY2F0KS5yZXBsYWNlKCckMicsIHRhcmdldENhdGVnb3J5KTtcblx0XHRcdFx0XHQvLyBJZiBjYXRlZ29yeSBpcyBhZGRlZCB0aHJvdWdoIHRlbXBsYXRlOlxuXHRcdFx0XHRcdGlmIChvcmlnaW5UZXh0ID09PSB0ZXh0KSB7XG5cdFx0XHRcdFx0XHR0ZXh0ICs9IGBcXG5bWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX1dXWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtb3ZlJzpcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKHNvdXJjZUNhdFJlZ0V4cCwgYFtbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fSQxXV1gKTtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1tb3ZlJykucmVwbGFjZSgnJDEnLCBzb3VyY2VjYXQpLnJlcGxhY2UoJyQyJywgdGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZW1vdmUnOlxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2Uoc291cmNlQ2F0UmVnRXhwLCAnJyk7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktcmVtb3ZlJykucmVwbGFjZSgnJDEnLCBzb3VyY2VjYXQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGV4dCA9PT0gb3JpZ2luVGV4dCkge1xuXHRcdFx0XHRDQUwubm90Rm91bmRbQ0FMLm5vdEZvdW5kLmxlbmd0aF0gPSBtYXJrZWRMYWJlbFRpdGxlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmUgdW5jYXQgYWZ0ZXIgd2UgY2hlY2tlZCB3aGV0aGVyIHdlIGNoYW5nZWQgdGhlIHRleHQgc3VjY2Vzc2Z1bGx5LlxuXHRcdFx0Ly8gT3RoZXJ3aXNlIHdlIG1pZ2h0IGZhaWwgdG8gZG8gdGhlIGNoYW5nZXMsIGJ1dCBzdGlsbCByZXBsYWNlIHt7dW5jYXR9fVxuXHRcdFx0aWYgKG1vZGUgIT09ICdyZW1vdmUnKSB7XG5cdFx0XHRcdHRleHQgPSBDQUwuZG9DbGVhbnVwKENBTC5yZW1vdmVVbmNhdCh0ZXh0KSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0dG9rZW46IENBTC5lZGl0VG9rZW4sXG5cdFx0XHRcdFx0dGFnczogQ0FMLkFQSV9UQUcsXG5cdFx0XHRcdFx0dGl0bGU6IG1hcmtlZExhYmVsVGl0bGUsXG5cdFx0XHRcdFx0YXNzZXJ0OiAndXNlcicsXG5cdFx0XHRcdFx0Ym90OiB0cnVlLFxuXHRcdFx0XHRcdGJhc2V0aW1lc3RhbXA6IHRpbWVzdGFtcCxcblx0XHRcdFx0XHR3YXRjaGxpc3Q6IENBTC5zZXR0aW5ncy53YXRjaGxpc3QgYXMgbmV2ZXIsXG5cdFx0XHRcdFx0dGV4dCxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdHN0YXJ0dGltZXN0YW1wLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHRcdENBTC5tYXJrQXNEb25lKCRtYXJrZWRMYWJlbCwgdGFyZ2V0Q2F0ZWdvcnksIG1vZGUpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldENvbnRlbnQoXG5cdFx0XHRtYXJrZWRMYWJlbDogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+WzBdLFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnXG5cdFx0KTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdFx0dGl0bGVzOiBtYXJrZWRMYWJlbFswXSxcblx0XHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0XHRcdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIHRoaXMuZWRpdENhdGVnb3JpZXMocmVzdWx0LCBtYXJrZWRMYWJlbCwgdGFyZ2V0Q2F0ZWdvcnksIG1vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRwcml2YXRlIHN0YXRpYyBnZXRUaXRsZUZyb21MaW5rKGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXR1cm4gKGRlY29kZVVSSUNvbXBvbmVudChocmVmID8/ICcnKS5tYXRjaCgvd2lraVxcLyguKz8pKD86Iy4rKT8kLyk/LlsxXSA/PyAnJykucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRNYXJrZWRMYWJlbHMoKTogW3N0cmluZywgSlF1ZXJ5XVtdIHtcblx0XHRcdGNvbnN0IG1hcmtlZExhYmVsczogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+ID0gW107XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzID0gQ0FMLiRsYWJlbHMuZmlsdGVyKGAuJHtDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEfWApO1xuXHRcdFx0Q0FMLiRzZWxlY3RlZExhYmVscy5lYWNoKChfaW5kZXgsIGxhYmVsKTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0ICRsYWJlbDogSlF1ZXJ5ID0gJChsYWJlbCk7XG5cdFx0XHRcdGNvbnN0ICRsYWJlbExpbms6IEpRdWVyeSA9ICRsYWJlbC5maW5kKCdhOm5vdCguQ2F0ZWdvcnlUcmVlVG9nZ2xlKVt0aXRsZV0nKTtcblx0XHRcdFx0Y29uc3QgdGl0bGU6IHN0cmluZyA9XG5cdFx0XHRcdFx0JGxhYmVsTGluay5hdHRyKCd0aXRsZScpPy50cmltKCkgfHxcblx0XHRcdFx0XHRDQUwuZ2V0VGl0bGVGcm9tTGluaygkbGFiZWxMaW5rLmF0dHIoJ2hyZWYnKSkgfHxcblx0XHRcdFx0XHRDQUwuZ2V0VGl0bGVGcm9tTGluaygkbGFiZWwuZmluZCgnYTpub3QoLkNhdGVnb3J5VHJlZVRvZ2dsZSknKS5hdHRyKCdocmVmJykpO1xuXHRcdFx0XHRtYXJrZWRMYWJlbHNbbWFya2VkTGFiZWxzLmxlbmd0aF0gPSBbdGl0bGUsICRsYWJlbF07XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBtYXJrZWRMYWJlbHM7XG5cdFx0fVxuXHRcdHByaXZhdGUgc2hvd1Byb2dyZXNzKCk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3Moe1xuXHRcdFx0XHRjdXJzb3I6ICd3YWl0Jyxcblx0XHRcdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdFx0fSk7XG5cdFx0XHRDQUwuJHByb2dyZXNzRGlhbG9nID0gJChcblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7Q0FMLm1zZygnZWRpdGluZycpfVxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVJ9PntDQUwuY291bnRlckN1cnJlbnR9PC9zcGFuPlxuXHRcdFx0XHRcdHtbQ0FMLm1zZygnb2YnKSwgQ0FMLmNvdW50ZXJOZWVkZWRdfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkuZGlhbG9nKHtcblx0XHRcdFx0ZGlhbG9nQ2xhc3M6IENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdFx0XHRcdG1pbkhlaWdodDogOTAsXG5cdFx0XHRcdGhlaWdodDogOTAsXG5cdFx0XHRcdHdpZHRoOiA0NTAsXG5cdFx0XHRcdG1vZGFsOiB0cnVlLFxuXHRcdFx0XHRjbG9zZU9uRXNjYXBlOiBmYWxzZSxcblx0XHRcdFx0ZHJhZ2dhYmxlOiBmYWxzZSxcblx0XHRcdFx0cmVzaXphYmxlOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0ZFRURCQUNLfSAudWktZGlhbG9nLXRpdGxlYmFyYCkuaGlkZSgpO1xuXHRcdFx0dGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0ZFRURCQUNLfSAudWktZGlhbG9nLWNvbnRlbnRgKS5oZWlnaHQoJ2F1dG8nKTtcblx0XHRcdENBTC4kY291bnRlciA9IHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVJ9YCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZywgbW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZScpOiB2b2lkIHtcblx0XHRcdGNvbnN0IG1hcmtlZExhYmVsczogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+ID0gdGhpcy5nZXRNYXJrZWRMYWJlbHMoKTtcblx0XHRcdGlmICghbWFya2VkTGFiZWxzLmxlbmd0aCkge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShDQUwubXNnKCdub25lLXNlbGVjdGVkJyksIHtcblx0XHRcdFx0XHR0YWc6ICdjYXRBTG90Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdENBTC5hbHJlYWR5VGhlcmUgPSBbXTtcblx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3IgPSBbXTtcblx0XHRcdENBTC5ub3RGb3VuZCA9IFtdO1xuXHRcdFx0Q0FMLmNvdW50ZXJDdXJyZW50ID0gMTtcblx0XHRcdENBTC5jb3VudGVyTmVlZGVkID0gbWFya2VkTGFiZWxzLmxlbmd0aDtcblx0XHRcdHRoaXMuc2hvd1Byb2dyZXNzKCk7XG5cdFx0XHRmb3IgKGNvbnN0IG1hcmtlZExhYmVsIG9mIG1hcmtlZExhYmVscykge1xuXHRcdFx0XHR0aGlzLmdldENvbnRlbnQobWFya2VkTGFiZWwsIHRhcmdldENhdGVnb3J5LCBtb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBhZGRIZXJlKHRhcmdldENhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnksICdhZGQnKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBjb3B5SGVyZSh0YXJnZXRDYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5LCAnY29weScpO1xuXHRcdH1cblx0XHRwcml2YXRlIG1vdmVIZXJlKHRhcmdldENhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnksICdtb3ZlJyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgY3JlYXRlQ2F0TGlua3Moc3ltYm9sOiBzdHJpbmcsIGNhdGVnb3JpZXM6IHN0cmluZ1tdKTogdm9pZCB7XG5cdFx0XHRjYXRlZ29yaWVzLnNvcnQoKTtcblx0XHRcdGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuXHRcdFx0XHRjb25zdCAkdHIgPSAkKFxuXHRcdFx0XHRcdDx0ciBkYXRhc2V0PXt7Y2F0ZWdvcnl9fT5cblx0XHRcdFx0XHRcdDx0ZD57c3ltYm9sfTwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtjYXRlZ29yeX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQpO1xuXHRcdFx0XHQvLyBDYW4ndCBtb3ZlIHRvIHNvdXJjZSBjYXRlZ29yeVxuXHRcdFx0XHRpZiAoY2F0ZWdvcnkgIT09IENBTC5DVVJSRU5UX0NBVEVHUk9ZICYmIENBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0XHQkdHIuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTn1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuYWRkSGVyZSgkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FkZCcpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2F0ZWdvcnkgIT09IENBTC5DVVJSRU5UX0NBVEVHUk9ZICYmICFDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdFx0JHRyLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5jb3B5SGVyZSgkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2NvcHknKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5tb3ZlSGVyZSgkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ21vdmUnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuZmluZCgndGFibGUnKS5hcHBlbmQoJHRyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBzaG93Q2F0ZWdvcnlMaXN0KCk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3MoJ2N1cnNvcicsICcnKTtcblx0XHRcdGNvbnN0IGN1cnJlbnRDYXRlZ29yaWVzOiBzdHJpbmdbXSA9IFtDQUwuY3VycmVudENhdGVnb3J5XTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuZW1wdHkoKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuYXBwZW5kKDx0YWJsZSAvPik7XG5cdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpEnLCBDQUwucGFyZW50Q2F0cyk7XG5cdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpInLCBjdXJyZW50Q2F0ZWdvcmllcyk7XG5cdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpMnLCBDQUwuc3ViQ2F0cyk7XG5cdFx0XHQvLyBSZXNldCB3aWR0aFxuXHRcdFx0dGhpcy4kY29udGFpbmVyLndpZHRoKCcnKTtcblx0XHRcdHRoaXMuJGNvbnRhaW5lci5oZWlnaHQoJycpO1xuXHRcdFx0dGhpcy4kY29udGFpbmVyLndpZHRoKE1hdGgubWluKCh0aGlzLiRjb250YWluZXIud2lkdGgoKSA/PyAwKSAqIDEuMSArIDE1LCAoJCh3aW5kb3cpLndpZHRoKCkgPz8gMCkgLSAxMCkpO1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5jc3Moe1xuXHRcdFx0XHQnbWF4LWhlaWdodCc6IGAke0NBTC5kaWFsb2dIZWlnaHR9cHhgLFxuXHRcdFx0XHRoZWlnaHQ6ICcnLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0UGFyZW50Q2F0cygpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdHRpdGxlczogYENhdGVnb3J5OiR7Q0FMLmN1cnJlbnRDYXRlZ29yeX1gLFxuXHRcdFx0XHRcdHByb3A6ICdjYXRlZ29yaWVzJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdENBTC5wYXJlbnRDYXRzID0gW107XG5cdFx0XHRcdFx0Y29uc3Qge3BhZ2VzfSA9IHJlc3VsdC5xdWVyeTtcblx0XHRcdFx0XHRpZiAocGFnZXNbMF0/Lm1pc3NpbmcpIHtcblx0XHRcdFx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnJyk7XG5cdFx0XHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0Lmh0bWwoXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX05PX0ZPVU5EfT5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnY2F0LW5vdC1mb3VuZCcpfVxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaSJywgW0NBTC5jdXJyZW50Q2F0ZWdvcnldKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGV0IGNhdGVnb3JpZXM6IHt0aXRsZTogc3RyaW5nfVtdID0gW107XG5cdFx0XHRcdFx0aWYgKHBhZ2VzWzBdPy5jYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0XHRbe2NhdGVnb3JpZXN9XSA9IHBhZ2VzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjYXRUaXRsZSA9IGNhdC50aXRsZS5yZXBsYWNlKC9eW146XSs6LywgJycpO1xuXHRcdFx0XHRcdFx0Q0FMLnBhcmVudENhdHNbQ0FMLnBhcmVudENhdHMubGVuZ3RoXSA9IGNhdFRpdGxlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDQUwuY291bnRlckNhdCsrO1xuXHRcdFx0XHRcdGlmIChDQUwuY291bnRlckNhdCA9PT0gMikge1xuXHRcdFx0XHRcdFx0dGhpcy5zaG93Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldFN1YkNhdHMoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRsaXN0OiAnY2F0ZWdvcnltZW1iZXJzJyxcblx0XHRcdFx0XHRjbXR5cGU6ICdzdWJjYXQnLFxuXHRcdFx0XHRcdGNtbGltaXQ6IENBTC5zZXR0aW5ncy5zdWJjYXRjb3VudCBhcyBuZXZlcixcblx0XHRcdFx0XHRjbXRpdGxlOiBgQ2F0ZWdvcnk6JHtDQUwuY3VycmVudENhdGVnb3J5fWAsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRjb25zdCBjYXRzOiB7dGl0bGU6IHN0cmluZ31bXSA9IHJlc3VsdD8ucXVlcnk/LmNhdGVnb3J5bWVtYmVycyB8fCBbXTtcblx0XHRcdFx0XHRDQUwuc3ViQ2F0cyA9IFtdO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgY2F0IG9mIGNhdHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGNhdFRpdGxlID0gY2F0LnRpdGxlLnJlcGxhY2UoL15bXjpdKzovLCAnJyk7XG5cdFx0XHRcdFx0XHRDQUwuc3ViQ2F0c1tDQUwuc3ViQ2F0cy5sZW5ndGhdID0gY2F0VGl0bGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdENBTC5jb3VudGVyQ2F0Kys7XG5cdFx0XHRcdFx0aWYgKENBTC5jb3VudGVyQ2F0ID09PSAyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNob3dDYXRlZ29yeUxpc3QoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0Q2F0ZWdvcnlMaXN0KCk6IHZvaWQge1xuXHRcdFx0Q0FMLmNvdW50ZXJDYXQgPSAwO1xuXHRcdFx0dGhpcy5nZXRQYXJlbnRDYXRzKCk7XG5cdFx0XHR0aGlzLmdldFN1YkNhdHMoKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSB1cGRhdGVDYXRzKGNhdDogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcblx0XHRcdENBTC5jdXJyZW50Q2F0ZWdvcnkgPSBjYXQ7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0Lmh0bWwoPGRpdj57Q0FMLm1zZygnbG9hZGluZycpfTwvZGl2Pik7XG5cdFx0XHR0aGlzLmdldENhdGVnb3J5TGlzdCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZmluZEFsbExhYmVscygpOiB2b2lkIHtcblx0XHRcdC8vIEl0J3MgcG9zc2libGUgdG8gYWxsb3cgYW55IGtpbmQgb2YgcGFnZXMgYXMgd2VsbCBidXQgd2hhdCBoYXBwZW5zIGlmIHlvdSBjbGljayBvbiBcInNlbGVjdCBhbGxcIiBhbmQgZG9uJ3QgZXhwZWN0IGl0XG5cdFx0XHRpZiAoQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRDQUwuJGxhYmVscyA9IHRoaXMuJGJvZHkuZmluZCgndGFibGUuc2VhcmNoUmVzdWx0SW1hZ2UnKS5maW5kKCd0cj50ZCcpLmVxKDEpO1xuXHRcdFx0XHRpZiAoQ0FMLnNldHRpbmdzLmVkaXRwYWdlcykge1xuXHRcdFx0XHRcdENBTC4kbGFiZWxzID0gQ0FMLiRsYWJlbHMuYWRkKCdkaXYubXctc2VhcmNoLXJlc3VsdC1oZWFkaW5nJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdENBTC4kbGFiZWxzID0gdGhpcy4kYm9keVxuXHRcdFx0XHRcdC5maW5kKCdkaXYuZ2FsbGVyeXRleHQnKVxuXHRcdFx0XHRcdC5hZGQodGhpcy4kYm9keS5maW5kKCdkaXYjbXctY2F0ZWdvcnktbWVkaWEnKS5maW5kKCdsaVtjbGFzcyE9XCJnYWxsZXJ5Ym94XCJdJykpO1xuXHRcdFx0XHRpZiAoQ0FMLnNldHRpbmdzLmVkaXRwYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0ICRwYWdlczogSlF1ZXJ5PEhUTUxMSUVsZW1lbnQ+ID0gdGhpcy4kYm9keVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2RpdiNtdy1wYWdlcywgZGl2I213LXN1YmNhdGVnb3JpZXMnKVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2xpJyk7XG5cdFx0XHRcdFx0Q0FMLiRsYWJlbHMgPSBDQUwuJGxhYmVscy5hZGQoJHBhZ2VzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIG1ha2VDbGlja2FibGUoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmZpbmRBbGxMYWJlbHMoKTtcblx0XHRcdENBTC4kbGFiZWxzLmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUwpLm9uQ2F0QUxvdFNoaWZ0Q2xpY2soKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR0aGlzLnVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgcnVuKCk6IHZvaWQge1xuXHRcdFx0aWYgKHRoaXMuJGxpbmsuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQpKSB7XG5cdFx0XHRcdHRoaXMubWFrZUNsaWNrYWJsZSgpO1xuXHRcdFx0XHR0aGlzLiRkYXRhQ29udGFpbmVyLnNob3coKTtcblx0XHRcdFx0dGhpcy4kY29udGFpbmVyLnJlc2l6YWJsZSh7XG5cdFx0XHRcdFx0YWxzb1Jlc2l6ZTogdGhpcy4kcmVzdWx0TGlzdCxcblx0XHRcdFx0XHRoYW5kbGVzOiAnbicsXG5cdFx0XHRcdFx0cmVzaXplOiAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0ICRjdXJyZW50VGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdCRjdXJyZW50VGFyZ2V0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6ICcnLFxuXHRcdFx0XHRcdFx0XHR0b3A6ICcnLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRDQUwuZGlhbG9nSGVpZ2h0ID0gJGN1cnJlbnRUYXJnZXQuaGVpZ2h0KCkgPz8gQ0FMLmRpYWxvZ0hlaWdodDtcblx0XHRcdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuY3NzKHtcblx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiAnJyxcblx0XHRcdFx0XHRcdFx0d2lkdGg6ICcnLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuY3NzKCdtYXgtaGVpZ2h0JywgJzQ1MHB4Jyk7XG5cdFx0XHRcdGlmIChDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKCdQaWN0dXJlcyBhbmQgaW1hZ2VzJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKENBTC5DVVJSRU5UX0NBVEVHUk9ZKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy4kZGF0YUNvbnRhaW5lci5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuJGNvbnRhaW5lci5yZXNpemFibGUoJ2Rlc3Ryb3knKTtcblx0XHRcdFx0dGhpcy4kY29udGFpbmVyLmNzcygnd2lkdGgnLCAnJyk7XG5cdFx0XHRcdENBTC4kbGFiZWxzLm9mZignY2xpY2suY2F0QUxvdCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChcblx0XHQod2dOYW1lc3BhY2VOdW1iZXIgPT09IC0xICYmIHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lID09PSAnU2VhcmNoJykgfHxcblx0XHR3Z05hbWVzcGFjZU51bWJlciA9PT0gT1BUSU9OUy50YXJnZXROYW1lc3BhY2Vcblx0KSB7XG5cdFx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAtMSkge1xuXHRcdFx0Q0FMLmlzU2VhcmNoTW9kZSA9IHRydWU7XG5cdFx0fVxuXHRcdENBTFsndmFyaWFudENhY2hlJ10gPSBnZXRDYWNoZWRLZXlzKCk7XG5cdFx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSBPUFRJT05TLnRhcmdldE5hbWVzcGFjZSkge1xuXHRcdFx0Y29uc3QgY2F0ZWdvcnkgPSBtdy5jb25maWcuZ2V0KCd3Z1RpdGxlJykucmVwbGFjZSgvXkNhdGVnb3J5Oi8sICcnKTtcblx0XHRcdENBTFsndmFyaWFudENhY2hlJ11bY2F0ZWdvcnldIHx8PSBhd2FpdCBDQUwuZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5KTtcblx0XHR9XG5cdFx0LyohIENhdC1hLWxvdCBtZXNzYWdlcyB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRcdHNldE1lc3NhZ2VzKCk7XG5cdFx0dm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0XHRuZXcgQ0FMKCRib2R5KS5idWlsZEVsZW1lbnRzKCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y2F0QUxvdH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBDYXQtYS1sb3QvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5cbmNvbnN0IGdldENhY2hlZEtleXMgPSAoKSA9PiB7XG5cdGNvbnN0IHZhcmlhbnRDYWNoZTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKFxuXHRcdChtdy5zdG9yYWdlIGFzIHVua25vd24gYXMgU3RvcmFnZSlbJ3N0b3JlJ10gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nW10+XG5cdCkpIHtcblx0XHRpZiAoa2V5LnN0YXJ0c1dpdGgoT1BUSU9OUy5zdG9yYWdlS2V5KSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0Y29uc3QgY2FjaGVLZXkgPSBrZXkucmVwbGFjZShPUFRJT05TLnN0b3JhZ2VLZXksICcnKTtcblx0XHRcdHZhcmlhbnRDYWNoZVtjYWNoZUtleV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHZhcmlhbnRDYWNoZTtcbn07XG5cbmV4cG9ydCB7Z2V0Q2FjaGVkS2V5c307XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FX0xBQkVMLCBDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQsIENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUR9IGZyb20gJy4vY29uc3RhbnQnO1xuXG50eXBlIE9uQ2F0QUxvdFNoaWZ0Q2xpY2sgPSAodGhpczogSlF1ZXJ5LCBjYWxsYmFjazogKCkgPT4gdW5rbm93bikgPT4gSlF1ZXJ5O1xuZGVjbGFyZSBnbG9iYWwge1xuXHRpbnRlcmZhY2UgSlF1ZXJ5IHtcblx0XHRvbkNhdEFMb3RTaGlmdENsaWNrOiBPbkNhdEFMb3RTaGlmdENsaWNrO1xuXHR9XG59XG5cbmNvbnN0IGV4dGVuZEpRdWVyeVByb3RvdHlwZSA9ICgpOiB2b2lkID0+IHtcblx0JC5mbi5leHRlbmQoe1xuXHRcdG9uQ2F0QUxvdFNoaWZ0Q2xpY2s6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0bGV0IHByZXZDaGVja2JveDogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXG5cdFx0XHQvLyBXaGVuIG91ciBib3hlcyBhcmUgY2xpY2tlZC4uXG5cdFx0XHR0aGlzLm9uKCdjbGljay5jYXRBTG90JywgKGV2ZW50OiBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0Ly8gUHJldmVudCBmb2xsb3dpbmcgdGhlIGxpbmsgYW5kIHRleHQgc2VsZWN0aW9uXG5cdFx0XHRcdGlmICghZXZlbnQuY3RybEtleSkge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBIaWdobGlnaHQgbGFzdCBzZWxlY3RlZFxuXHRcdFx0XHR0aGlzLnBhcmVudHMoJ2JvZHknKVxuXHRcdFx0XHRcdC5maW5kKGAuJHtDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUR9YClcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEKTtcblxuXHRcdFx0XHRsZXQgJHRoaXNDb250cm9sID0gJChldmVudC50YXJnZXQpIGFzIEpRdWVyeTtcblx0XHRcdFx0aWYgKCEkdGhpc0NvbnRyb2wuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTCkpIHtcblx0XHRcdFx0XHQkdGhpc0NvbnRyb2wgPSAkdGhpc0NvbnRyb2wucGFyZW50cyhgLiR7Q0xBU1NfTkFNRV9MQUJFTH1gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCR0aGlzQ29udHJvbC5hZGRDbGFzcyhDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQpO1xuXG5cdFx0XHRcdC8vIEFuZCBvbmUgaGFzIGJlZW4gY2xpY2tlZCBiZWZvcmUuLi5cblx0XHRcdFx0aWYgKHByZXZDaGVja2JveCAmJiBldmVudC5zaGlmdEtleSkge1xuXHRcdFx0XHRcdGNvbnN0IG1ldGhvZDogJ2FkZENsYXNzJyB8ICdyZW1vdmVDbGFzcycgPSAkdGhpc0NvbnRyb2wuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRClcblx0XHRcdFx0XHRcdD8gJ2FkZENsYXNzJ1xuXHRcdFx0XHRcdFx0OiAncmVtb3ZlQ2xhc3MnO1xuXHRcdFx0XHRcdC8vIENoZWNrIG9yIHVuY2hlY2sgdGhpcyBvbmUgYW5kIGFsbCBpbi1iZXR3ZWVuIGNoZWNrYm94ZXNcblx0XHRcdFx0XHR0aGlzLnNsaWNlKFxuXHRcdFx0XHRcdFx0TWF0aC5taW4odGhpcy5pbmRleChwcmV2Q2hlY2tib3gpLCB0aGlzLmluZGV4KCR0aGlzQ29udHJvbCkpLFxuXHRcdFx0XHRcdFx0TWF0aC5tYXgodGhpcy5pbmRleChwcmV2Q2hlY2tib3gpLCB0aGlzLmluZGV4KCR0aGlzQ29udHJvbCkpICsgMVxuXHRcdFx0XHRcdClbbWV0aG9kXShDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBFaXRoZXIgd2F5LCB1cGRhdGUgdGhlIHByZXZDaGVja2JveCB2YXJpYWJsZSB0byB0aGUgb25lIGNsaWNrZWQgbm93XG5cdFx0XHRcdHByZXZDaGVja2JveCA9ICR0aGlzQ29udHJvbDtcblxuXHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gYXMgT25DYXRBTG90U2hpZnRDbGljayxcblx0fSk7XG59O1xuXG5leHBvcnQge2V4dGVuZEpRdWVyeVByb3RvdHlwZX07XG4iLCAiaW1wb3J0IHtjYXRBTG90fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2V4dGVuZEpRdWVyeVByb3RvdHlwZX0gZnJvbSAnLi9tb2R1bGVzL2V4dGVuZEpRdWVyeVByb3RvdHlwZSc7XG5cbi8qISBDYXQtYS1sb3QgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cbmV4dGVuZEpRdWVyeVByb3RvdHlwZSgpO1xudm9pZCBjYXRBTG90KCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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YXBpVGFnIiwgInRhcmdldE5hbWVzcGFjZSIsICJ2ZXJzaW9uIiwgInN0b3JhZ2VLZXkiLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUiIsICJjb25jYXQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTiIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEIiwgIkNMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSIiwgIkNMQVNTX05BTUVfRkVFREJBQ0siLCAiQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FIiwgIkNMQVNTX05BTUVfTEFCRUwiLCAiQ0xBU1NfTkFNRV9MQUJFTF9ET05FIiwgIkNMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCIsICJDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEIiwgIkRFRkFVTFRfU0VUVElORyIsICJkb2NsZWFudXAiLCAiZGVmYXVsdCIsICJsYWJlbF9pMThuIiwgImVkaXRwYWdlcyIsICJtaW5vciIsICJzdWJjYXRjb3VudCIsICJ3YXRjaGxpc3QiLCAic2VsZWN0X2kxOG4iLCAid2F0Y2hfbm9jaGFuZ2UiLCAid2F0Y2hfcHJlZiIsICJ3YXRjaF91bndhdGNoIiwgIndhdGNoX3dhdGNoIiwgIlZBUklBTlRTIiwgIndnVXNlckxhbmd1YWdlIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiREVGQVVMVF9NRVNTQUdFUyIsICJzZXRNZXNzYWdlcyIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJzZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRDYWNoZWRLZXlzIiwgInZhcmlhbnRDYWNoZSIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAic3RvcmFnZSIsICJsZW5ndGgiLCAia2V5IiwgInZhbHVlIiwgInN0YXJ0c1dpdGgiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJjYWNoZUtleSIsICJyZXBsYWNlIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnRm9ybWF0dGVkTmFtZXNwYWNlcyIsICJ3Z05hbWVzcGFjZUlkcyIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1RpdGxlIiwgImNhdEFMb3QiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJDQUwiLCAiaXNTZWFyY2hNb2RlIiwgIk1FU1NBR0VTIiwgIkFQSV9UQUciLCAiVEFSR0VUX05BTUVTUEFDRSIsICJDVVJSRU5UX0NBVEVHUk9ZIiwgImlzQXV0b0NvbXBsZXRlSW5pdCIsICJhbHJlYWR5VGhlcmUiLCAiY29ubmVjdGlvbkVycm9yIiwgIm5vdEZvdW5kIiwgImNvdW50ZXJDdXJyZW50IiwgImNvdW50ZXJOZWVkZWQiLCAiY291bnRlckNhdCIsICJjdXJyZW50Q2F0ZWdvcnkiLCAiZGlhbG9nSGVpZ2h0IiwgImVkaXRUb2tlbiIsICJsb2NhbENhdE5hbWUiLCAicGFyZW50Q2F0cyIsICJzdWJDYXRzIiwgInNldHRpbmdzIiwgInJlcXVlc3REZWxheSIsICJyZXF1ZXN0UXVldWUiLCAicHJvY2Vzc2luZ1F1ZXVlIiwgImxhc3RTdGFydCIsICJlbnF1ZXVlQXBpQ2FsbCIsICJmbiIsICJQcm9taXNlIiwgInJlc29sdmUiLCAicmVqZWN0IiwgInB1c2giLCAicHJvY2Vzc1F1ZXVlIiwgInNoaWZ0IiwgIm5vdyIsICJEYXRlIiwgIndhaXQiLCAiTWF0aCIsICJtYXgiLCAiciIsICJzZXRUaW1lb3V0IiwgInJlcyIsICJlIiwgIiRjb3VudGVyIiwgIiQiLCAiJHByb2dyZXNzRGlhbG9nIiwgIiRsYWJlbHMiLCAiJHNlbGVjdGVkTGFiZWxzIiwgIiRib2R5IiwgIiRjb250YWluZXIiLCAiJGRhdGFDb250YWluZXIiLCAiJG1hcmtDb3VudGVyIiwgIiRyZXN1bHRMaXN0IiwgIiRzZWFyY2hJbnB1dCIsICIkaGVhZCIsICIkbGluayIsICJjb25zdHJ1Y3RvciIsICJfbXckdXRpbCRnZXRQYXJhbVZhbHUiLCAibWVzc2FnZSIsICJwYXJzZSIsICJpbml0U2V0dGluZ3MiLCAiY29udGFpbmVyIiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInBsYWNlaG9sZGVyIiwgIm1zZyIsICJ0eXBlIiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJvbktleURvd24iLCAiZXZlbnQiLCAiJGVsZW1lbnQiLCAiY3VycmVudFRhcmdldCIsICJfJGVsZW1lbnQkdmFsJHRyaW0iLCAiXyRlbGVtZW50JHZhbCIsICJjYXQiLCAidmFsIiwgInRyaW0iLCAidXBkYXRlQ2F0cyIsICJvbkNsaWNrIiwgInRvZ2dsZUFsbCIsICJhcHBlbmRUbyIsICJmaW5kIiwgImJ1aWxkRWxlbWVudHMiLCAicmVnZXhDYXQiLCAiUmVnRXhwIiwgImxvY2FsaXplZFJlZ2V4IiwgImlzQ29tcG9zaXRpb25TdGFydCIsICJvbiIsICJvbGRWYWwiLCAibmV3VmFsIiwgImluaXRBdXRvY29tcGxldGUiLCAiYXV0b2NvbXBsZXRlIiwgInNvdXJjZSIsICJyZXF1ZXN0IiwgInJlc3BvbnNlIiwgImRvQVBJQ2FsbCIsICJhY3Rpb24iLCAibmFtZXNwYWNlIiwgInJlZGlyZWN0cyIsICJzZWFyY2giLCAidGVybSIsICJyZXN1bHQiLCAibWFwIiwgIl9pbmRleCIsICJpdGVtIiwgInBvc2l0aW9uIiwgIm15IiwgImF0IiwgIm9mIiwgInRvZ2dsZUNsYXNzIiwgInJ1biIsICJfd2luZG93JENhdEFMb3RQcmVmcyIsICJjYXRBTG90UHJlZnMiLCAid2luZG93IiwgIkNhdEFMb3RQcmVmcyIsICJ0eXBlT2ZDYXRBTG90UHJlZnMiLCAiX2kyIiwgIl9PYmplY3Qka2V5cyIsICJrZXlzIiwgIl9jYXRBTG90UHJlZnMkc2V0dGluZyIsICJzZXR0aW5nS2V5IiwgInNldHRpbmciLCAic2VsZWN0IiwgIl9pMyIsICJfT2JqZWN0JGtleXMyIiwgIm1lc3NhZ2VLZXkiLCAiYXJncyIsICJmdWxsS2V5IiwgInBsYWluIiwgIm5hbWVzcGFjZU51bWJlciIsICJmYWxsYmFjayIsICJfQ0FMJHdnRm9ybWF0dGVkTmFtZXMiLCAid2lraVRleHRCbGFuayIsICJTdHJpbmciLCAicmF3IiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgIndpa2lUZXh0QmxhbmtSRSIsICJjcmVhdGVSZWdleFN0ciIsICJuYW1lIiwgInJlZ2V4TmFtZSIsICJpIiwgImluaXRpYWwiLCAic2xpY2UiLCAibGwiLCAidG9Mb3dlckNhc2UiLCAidWwiLCAidG9VcHBlckNhc2UiLCAiX3RlbXBsYXRlT2JqZWN0MiIsICJjYW5vbmljYWwiLCAicmVnZXhTdHJpbmciLCAiX2k0IiwgIl9PYmplY3Qka2V5czMiLCAiY2F0TmFtZSIsICJ1cGRhdGVTZWxlY3Rpb25Db3VudGVyIiwgImZpbHRlciIsICJzaG93IiwgImh0bWwiLCAidG9TdHJpbmciLCAiZmluZEFsbFZhcmlhbnRzIiwgImNhdGVnb3J5IiwgImdldE9iamVjdCIsICJyZXN1bHRzIiwgInBhcmFtcyIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0ZXh0IiwgInRpdGxlIiwgInZhcmlhbnQiLCAiZXEiLCAiJHJlc3VsdCIsICJfaTUiLCAiX1ZBUklBTlRTIiwgInVuaXF1ZUFycmF5IiwgInNldE9iamVjdCIsICJyZWdleEJ1aWxkZXIiLCAidmFyaWFudHMiLCAidmFyaWFudFJlZ0V4cHMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZXNjYXBlUmVnRXhwIiwgIl90ZW1wbGF0ZU9iamVjdDMiLCAiZmlyc3QiLCAiZXJyIiwgImYiLCAiam9pbiIsICJfcGFyYW1zIiwgImNhbGxiYWNrIiwgImRvQ2FsbCIsICJoYW5kbGVFcnJvciIsICJlcnJvciIsICJsb2ciLCAidXBkYXRlQ291bnRlciIsICJ0aGVuIiwgImNhdGNoIiwgInBvc3QiLCAibWFya0FzRG9uZSIsICIkbWFya2VkTGFiZWwiLCAidGFyZ2V0Q2F0ZWdvcnkiLCAibW9kZSIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiRnJhZ21lbnQiLCAiZG9DbGVhbnVwIiwgInJlbW92ZVVuY2F0IiwgImRpc3BsYXlSZXN1bHQiLCAiY3NzIiwgImN1cnNvciIsICJvdmVyZmxvdyIsICIkcGFyZW50IiwgInBhcmVudCIsICJyZW1vdmUiLCAicmVkdWNlIiwgInByZSIsICJjdXIiLCAiaW5kZXgiLCAiZWRpdENhdGVnb3JpZXMiLCAibWFya2VkTGFiZWwiLCAiX3RoaXMiLCAiX3BhZ2UkcmV2aXNpb25zIiwgIm1hcmtlZExhYmVsVGl0bGUiLCAib3JpZ2luVGV4dCIsICJzdGFydHRpbWVzdGFtcCIsICJ0aW1lc3RhbXAiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJwYWdlcyIsICJwYWdlIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImNvbnRlbnQiLCAic291cmNlY2F0IiwgInRhcmdlUmVnRXhwIiwgInRlc3QiLCAic3VtbWFyeSIsICJzb3VyY2VDYXRSZWdFeHAiLCAidG9rZW4iLCAidGFncyIsICJhc3NlcnQiLCAiYm90IiwgImJhc2V0aW1lc3RhbXAiLCAiZ2V0Q29udGVudCIsICJtZXRhIiwgInRpdGxlcyIsICJwcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgImdldFRpdGxlRnJvbUxpbmsiLCAiaHJlZiIsICJfZGVjb2RlVVJJQ29tcG9uZW50JG0iLCAiX2RlY29kZVVSSUNvbXBvbmVudCRtMiIsICJkZWNvZGVVUklDb21wb25lbnQiLCAibWF0Y2giLCAiZ2V0TWFya2VkTGFiZWxzIiwgIm1hcmtlZExhYmVscyIsICJlYWNoIiwgImxhYmVsIiwgIl8kbGFiZWxMaW5rJGF0dHIiLCAiJGxhYmVsIiwgIiRsYWJlbExpbmsiLCAiYXR0ciIsICJzaG93UHJvZ3Jlc3MiLCAiZGlhbG9nIiwgImRpYWxvZ0NsYXNzIiwgIm1pbkhlaWdodCIsICJoZWlnaHQiLCAid2lkdGgiLCAibW9kYWwiLCAiY2xvc2VPbkVzY2FwZSIsICJkcmFnZ2FibGUiLCAicmVzaXphYmxlIiwgImhpZGUiLCAiZG9Tb21ldGhpbmciLCAibm90aWZ5IiwgInRhZyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJhZGRIZXJlIiwgImNvcHlIZXJlIiwgIm1vdmVIZXJlIiwgImNyZWF0ZUNhdExpbmtzIiwgInN5bWJvbCIsICJjYXRlZ29yaWVzIiwgInNvcnQiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiJHRyIiwgImRhdGFzZXQiLCAiY2xvc2VzdCIsICJkYXRhIiwgInNob3dDYXRlZ29yeUxpc3QiLCAiX3RoaXMkJGNvbnRhaW5lciR3aWR0IiwgIl8kJHdpZHRoIiwgImN1cnJlbnRDYXRlZ29yaWVzIiwgImVtcHR5IiwgIm1pbiIsICJnZXRQYXJlbnRDYXRzIiwgIl9wYWdlcyQiLCAiX3BhZ2VzJDIiLCAicXVlcnkiLCAibWlzc2luZyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJjYXRUaXRsZSIsICJnZXRTdWJDYXRzIiwgImxpc3QiLCAiY210eXBlIiwgImNtbGltaXQiLCAiY210aXRsZSIsICJfcmVzdWx0JHF1ZXJ5IiwgImNhdHMiLCAiY2F0ZWdvcnltZW1iZXJzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImdldENhdGVnb3J5TGlzdCIsICJmaW5kQWxsTGFiZWxzIiwgImFkZCIsICIkcGFnZXMiLCAibWFrZUNsaWNrYWJsZSIsICJvbkNhdEFMb3RTaGlmdENsaWNrIiwgImhhc0NsYXNzIiwgImFsc29SZXNpemUiLCAiaGFuZGxlcyIsICJyZXNpemUiLCAiXyRjdXJyZW50VGFyZ2V0JGhlaWdoIiwgIiRjdXJyZW50VGFyZ2V0IiwgImxlZnQiLCAidG9wIiwgIm1heEhlaWdodCIsICJvZmYiLCAiX0NBTCR2YXJpYW50Q2FjaGUiLCAiZ2V0Qm9keSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlIiwgImV4dGVuZCIsICJwcmV2Q2hlY2tib3giLCAiY3RybEtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJwYXJlbnRzIiwgInJlbW92ZUNsYXNzIiwgIiR0aGlzQ29udHJvbCIsICJ0YXJnZXQiLCAic2hpZnRLZXkiLCAibWV0aG9kIl0KfQo=
