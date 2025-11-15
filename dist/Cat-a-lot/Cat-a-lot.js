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
var catALot = /* @__PURE__ */ function() {
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
            text: category,
            title: "temp"
          };
          for (var _i5 = 0, _VARIANTS = VARIANTS; _i5 < _VARIANTS.length; _i5++) {
            const variant = _VARIANTS[_i5];
            try {
              const {
                parse
              } = yield CAL.api.get({
                ...params,
                variant
              });
              const {
                text
              } = parse;
              const result = $(text).eq(0).text().trim();
              results[results.length] = result;
            } catch {
            }
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
            CAL.api.get(params).then(callback).catch(handleError);
          } else {
            CAL.api.post(params).then(callback).catch(handleError);
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
        const category = mw.config.get("wgTitle").replace(/^Category:/, "");
        CAL["variantCache"][category] = yield CAL.findAllVariants(category);
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
}();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NhdC1hLWxvdC9vcHRpb25zLmpzb24iLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9DYXQtYS1sb3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvY29yZS50c3giLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZ2V0Q2FjaGVkS2V5cy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlLnRzIiwgInNyYy9DYXQtYS1sb3QvQ2F0LWEtbG90LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiYXBpVGFnXCI6IFwiQ2F0LWEtbG90XCIsXG5cdFwidGFyZ2V0TmFtZXNwYWNlXCI6IDE0LFxuXHRcInZlcnNpb25cIjogXCI2LjBcIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5DYXQtYS1Mb3RfcmVzdWx0cy1cIlxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IHR5cGUge1NldHRpbmd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWNhdF9hX2xvdCc7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tY29udGFpbmVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEE6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9fZGF0YWA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1Q6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19jYXRlZ29yeS1saXN0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT046IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1fX2FjdGlvbmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH0tLW5vLWZvdW5kYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfV9fbWFyay1jb3VudGVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlYXJjaC1pbnB1dC1jb250YWluZXJfX2lucHV0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlbGVjdGlvbnNgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfV9fYWxsYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9X19ub25lYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9faGVhZGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTks6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9X19saW5rYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9LS1lbmFibGVkYDtcbmNvbnN0IENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1jdXJyZW50X2NvdW50ZXJgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDSzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tZmVlZGJhY2tgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0ZFRURCQUNLfS0tZG9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1sYWJlbGA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMX0RPTkU6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1kb25lYDtcbmNvbnN0IENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLWxhc3Qtc2VsZWN0ZWRgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLXNlbGVjdGVkYDtcblxuY29uc3QgREVGQVVMVF9TRVRUSU5HOiBTZXR0aW5nID0ge1xuXHRkb2NsZWFudXA6IHtcblx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHRsYWJlbF9pMThuOiAnZG9jbGVhbnVwcHJlZicsXG5cdH0sXG5cdGVkaXRwYWdlczoge1xuXHRcdGRlZmF1bHQ6IHRydWUsXG5cdFx0bGFiZWxfaTE4bjogJ2VkaXRwYWdlc3ByZWYnLFxuXHR9LFxuXHRtaW5vcjoge1xuXHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdGxhYmVsX2kxOG46ICdtaW5vcnByZWYnLFxuXHR9LFxuXHRzdWJjYXRjb3VudDoge1xuXHRcdGRlZmF1bHQ6IDUwLFxuXHRcdGxhYmVsX2kxOG46ICdzdWJjYXRjb3VudHByZWYnLFxuXHR9LFxuXHR3YXRjaGxpc3Q6IHtcblx0XHRkZWZhdWx0OiAncHJlZmVyZW5jZXMnLFxuXHRcdGxhYmVsX2kxOG46ICd3YXRjaGxpc3RwcmVmJyxcblx0XHRzZWxlY3RfaTE4bjoge1xuXHRcdFx0d2F0Y2hfbm9jaGFuZ2U6ICdub2NoYW5nZScsXG5cdFx0XHR3YXRjaF9wcmVmOiAncHJlZmVyZW5jZXMnLFxuXHRcdFx0d2F0Y2hfdW53YXRjaDogJ3Vud2F0Y2gnLFxuXHRcdFx0d2F0Y2hfd2F0Y2g6ICd3YXRjaCcsXG5cdFx0fSxcblx0fSxcbn07XG5cbmNvbnN0IFZBUklBTlRTOiBzdHJpbmdbXSA9IFsnemgtaGFucycsICd6aC1oYW50JywgJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04sXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCxcblx0Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIsXG5cdENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQsXG5cdENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQsXG5cdERFRkFVTFRfU0VUVElORyxcblx0VkFSSUFOVFMsXG59O1xuIiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgREVGQVVMVF9NRVNTQUdFUyA9IHtcblx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICd7e1BMVVJBTDokMXxPbmUgZmlsZXwkMSBmaWxlc319IHNlbGVjdGVkLicsXG5cdC8vIEFjdGlvbnNcblx0J2NhdC1hLWxvdC1jb3B5JzogJ0NvcHknLFxuXHQnY2F0LWEtbG90LW1vdmUnOiAnTW92ZScsXG5cdCdjYXQtYS1sb3QtYWRkJzogJ0FkZCcsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ1JlbW92ZSBmcm9tIHRoaXMgY2F0ZWdvcnknLFxuXHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAnRW50ZXIgY2F0ZWdvcnkgbmFtZScsXG5cdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ1NlbGVjdCcsXG5cdCdjYXQtYS1sb3QtYWxsJzogJ2FsbCcsXG5cdCdjYXQtYS1sb3Qtbm9uZSc6ICdub25lJyxcblx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ05vIGZpbGVzIHNlbGVjdGVkIScsXG5cdC8vIFByZWZlcmVuY2VzXG5cdCdjYXQtYS1sb3Qtd2F0Y2hsaXN0cHJlZic6ICdXYXRjaGxpc3QgcHJlZmVyZW5jZSBjb25jZXJuaW5nIGZpbGVzIGVkaXRlZCB3aXRoIENhdC1BLUxvdCcsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICdBY2NvcmRpbmcgdG8geW91ciBnZW5lcmFsIHByZWZlcmVuY2VzJyxcblx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICdEbyBub3QgY2hhbmdlIHdhdGNoc3RhdHVzJyxcblx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICdXYXRjaCBwYWdlcyBlZGl0ZWQgd2l0aCBDYXQtQS1Mb3QnLFxuXHQnY2F0LWEtbG90LXdhdGNoX3Vud2F0Y2gnOiAnUmVtb3ZlIHBhZ2VzIHdoaWxlIGVkaXRpbmcgd2l0aCBDYXQtQS1Mb3QgZnJvbSB5b3VyIHdhdGNobGlzdCcsXG5cdCdjYXQtYS1sb3QtbWlub3JwcmVmJzpcblx0XHRcIk1hcmsgZWRpdHMgYXMgbWlub3IgKGlmIHlvdSBnZW5lcmFsbHkgbWFyayB5b3VyIGVkaXRzIGFzIG1pbm9yLCB0aGlzIHdvbid0IGNoYW5nZSBhbnl0aGluZylcIixcblx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ0FsbG93IGNhdGVnb3Jpc2luZyBwYWdlcyAoaW5jbHVkaW5nIGNhdGVnb3JpZXMpIHRoYXQgYXJlIG5vdCBmaWxlcycsXG5cdCdjYXQtYS1sb3QtZG9jbGVhbnVwcHJlZic6ICdSZW1vdmUge3tDaGVjayBjYXRlZ29yaWVzfX0gYW5kIG90aGVyIG1pbm9yIGNsZWFudXAnLFxuXHQnY2F0LWEtbG90LXN1YmNhdGNvdW50cHJlZic6ICdTdWItY2F0ZWdvcmllcyB0byBzaG93IGF0IG1vc3QnLFxuXHQvLyBQcm9ncmVzc1xuXHQnY2F0LWEtbG90LWxvYWRpbmcnOiAnTG9hZGluZy4uLicsXG5cdCdjYXQtYS1sb3QtZWRpdGluZyc6ICdFZGl0aW5nIHBhZ2UnLFxuXHQnY2F0LWEtbG90LW9mJzogJ29mICcsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5Jzpcblx0XHQnVGhlIGZvbGxvd2luZyB7e1BMVVJBTDokMXxwYWdlIHdhc3wkMSBwYWdlcyB3ZXJlfX0gc2tpcHBlZCwgYmVjYXVzZSB0aGUgcGFnZSB3YXMgYWxyZWFkeSBpbiB0aGUgY2F0ZWdvcnk6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLW5vdC1mb3VuZCc6XG5cdFx0J1RoZSBmb2xsb3dpbmcge3tQTFVSQUw6JDF8cGFnZSB3YXN8JDEgcGFnZXMgd2VyZX19IHNraXBwZWQsIGJlY2F1c2UgdGhlIG9sZCBjYXRlZ29yeSBjb3VsZCBub3QgYmUgZm91bmQ6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLXNlcnZlcic6XG5cdFx0XCJUaGUgZm9sbG93aW5nIHt7UExVUkFMOiQxfHBhZ2V8JDEgcGFnZXN9fSBjb3VsZG4ndCBiZSBjaGFuZ2VkLCBzaW5jZSB0aGVyZSB3ZXJlIHByb2JsZW1zIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlcjpcIixcblx0J2NhdC1hLWxvdC1hbGwtZG9uZSc6ICdBbGwgcGFnZXMgYXJlIHByb2Nlc3NlZC4nLFxuXHQnY2F0LWEtbG90LWRvbmUnOiAnRG9uZSEnLFxuXHQnY2F0LWEtbG90LWFkZGVkLWNhdCc6ICdBZGRlZCBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICdDb3BpZWQgdG8gY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LW1vdmVkLWNhdCc6ICdNb3ZlZCB0byBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAnUmVtb3ZlZCBmcm9tIGNhdGVnb3J5ICQxJyxcblx0J2NhdC1hLWxvdC1yZXR1cm4tdG8tcGFnZSc6ICdSZXR1cm4gdG8gcGFnZScsXG5cdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICdDYXRlZ29yeSBub3QgZm91bmQuJyxcblx0Ly8gU3VtbWFyaWVzOlxuXHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IEFkZGluZyBbW0NhdGVnb3J5OiQxXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktY29weSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBDb3B5aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dIHRvIFtbQ2F0ZWdvcnk6JDJdXScsXG5cdCdjYXQtYS1sb3Qtc3VtbWFyeS1tb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IE1vdmluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXSB0byBbW0NhdGVnb3J5OiQyXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IFJlbW92aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dJyxcbn0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXG5jb25zdCBzZXRNZXNzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0LyohIENhdC1hLWxvdCBtZXNzYWdlcyB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRpZiAod2dVc2VyTGFuZ3VhZ2UgPT09ICdlbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0PHR5cGVvZiBERUZBVUxUX01FU1NBR0VTPih7XG5cdFx0XHQvLyBhcyBpbiAxNyBmaWxlcyBzZWxlY3RlZFxuXHRcdFx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICckMeWAi+aWh+S7tuW3sumBuOaThycsXG5cdFx0XHQvLyBBY3Rpb25zXG5cdFx0XHQnY2F0LWEtbG90LWNvcHknOiAn6KSH6KO9Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZSc6ICfnp7vli5UnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGQnOiAn5aKe5YqgJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ+W+nuatpOWIhumhnuenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAn6Ly45YWl5YiG6aGe5ZCN56ixJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ+mBuOaThycsXG5cdFx0XHQnY2F0LWEtbG90LWFsbCc6ICflhajpg6gnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lJzogJ+eEoScsXG5cdFx0XHQnY2F0LWEtbG90LW5vbmUtc2VsZWN0ZWQnOiAn5rKS5pyJ6YG45pOH5paH5Lu277yBJyxcblx0XHRcdC8vIFByZWZlcmVuY2VzXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAn5L2/55SoQ2F0LUEtTG9057eo6Lyv5paH5Lu25pmC55qE55uj6KaW5YiX6KGo6YG46aCFJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICfoiIfns7vntbHlj4PmlbjoqK3nva7nm7jlkIwnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICfkuI3opoHmm7TmlLnnm6Poppbni4DmhYsnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICfnm6Poppbkvb/nlKhDYXQtQS1Mb3Tnt6jovK/nmoTpoIHpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ+Wwh+S9v+eUqENhdC1BLUxvdOe3qOi8r+eahOmggemdouW+nuebo+imluWIl+ihqOenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XHRcdCflsIfnt6jovK/mqJnoqJjniLLlsI/kv67mlLnvvIjoi6XmgqjlnKjns7vntbHlj4PmlbjoqK3nva7kuK3lt7LoqK3nva7lsIfmiYDmnInnt6jovK/mqJnoqJjniLLlsI/kv67mlLnvvIzmraTpgbjpoIXkuI3mnIPlsI3nj77mnInooYzniLLpgLLooYzmlLnli5XvvIknLFxuXHRcdFx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ+WFgeioseWwjeS4jeaYr+aWh+S7tueahOmggemdouWSjOWtkOWIhumhnumAsuihjOWIhumhnuaTjeS9nCcsXG5cdFx0XHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAn56e76Zmke3tDaGVjayBjYXRlZ29yaWVzfX3kuKbpgLLooYzlhbbku5bntLDnr4DmuIXnkIYnLFxuXHRcdFx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAn5pyA5aSa6aGv56S655qE5a2Q5YiG6aGe5pW46YePJyxcblx0XHRcdC8vIFByb2dyZXNzXG5cdFx0XHQnY2F0LWEtbG90LWxvYWRpbmcnOiAn5q2j5Zyo5Yqg6LyJ4oCm4oCmJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdGluZyc6ICfmraPlnKjnt6jovK/poIHpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC1vZic6ICfvvIzlhbHmnIknLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLWFscmVhZHknOiAn5Lul5LiL6aCB6Z2i5bey6Lez6YGO77yM5Zug54iy6aCB6Z2i5bey57aT5Zyo5YiG6aGe5Lit77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOiAn5Lul5LiL6aCB6Z2i5bey6Lez6YGO77yM5Zug54iy5om+5LiN5Yiw54++5pyJ5YiG6aGe77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOiAn5Lul5LiL6aCB6Z2i54Sh5rOV57eo6Lyv77yM5Zug54iy6YCj5o6l5pyN5YuZ5Zmo5Ye66Yyv77yaJyxcblx0XHRcdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAn5YWo6YOo6aCB6Z2i5bey6JmV55CG44CCJyxcblx0XHRcdCdjYXQtYS1sb3QtZG9uZSc6ICflt7LlrozmiJDvvIEnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAn5bey5Yqg5YWl5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICflt7LopIfoo73liLDliIbpoZ4nLFxuXHRcdFx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAn5bey56e75YuV5Yiw5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAn5bey5b6e5YiG6aGe56e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAn6L+U5Zue5Yiw6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICfmib7kuI3liLDliIbpoZ7jgIInLFxuXHRcdFx0Ly8gU3VtbWFyaWVzXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliqDlhaXliIbpoZ5bW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhumhnumWk+ikh+ijve+8muW+nltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5YiG6aGe6ZaT56e75YuV77ya5b6eW1tDYXRlZ29yeTokMV1d5YiwW1tDYXRlZ29yeTokMl1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1yZW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muW+nuWIhumhnuenu+mZpO+8mltbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0PHR5cGVvZiBERUZBVUxUX01FU1NBR0VTPih7XG5cdFx0XHQvLyBhcyBpbiAxNyBmaWxlcyBzZWxlY3RlZFxuXHRcdFx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICflt7LpgInmi6kkMeS4qumhtemdouaIluaWh+S7ticsXG5cdFx0XHQvLyBBY3Rpb25zXG5cdFx0XHQnY2F0LWEtbG90LWNvcHknOiAn5aSN5Yi2Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZSc6ICfnp7vliqgnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGQnOiAn5aKe5YqgJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ+S7juatpOWIhuexu+enu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAn6L6T5YWl5YiG57G75ZCN56ewJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ+mAieaLqScsXG5cdFx0XHQnY2F0LWEtbG90LWFsbCc6ICflhajpg6gnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lJzogJ+aXoCcsXG5cdFx0XHQnY2F0LWEtbG90LW5vbmUtc2VsZWN0ZWQnOiAn5rKh5pyJ6YCJ5oup5Lu75L2V6aG16Z2i5oiW5paH5Lu277yBJyxcblx0XHRcdC8vIFByZWZlcmVuY2VzXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAn5L2/55SoQ2F0LWEtbG9057yW6L6R5paH5Lu25pe255qE55uR6KeG5YiX6KGo6YCJ6aG5Jyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICfkuI7ns7vnu5/lj4LmlbDorr7nva7nm7jlkIwnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICfkuI3opoHmm7TmlLnnm5Hop4bnirbmgIEnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICfnm5Hop4bkvb/nlKhDYXQtYS1sb3TnvJbovpHnmoTpobXpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ+WwhuS9v+eUqENhdC1hLWxvdOe8lui+keeahOmhtemdouS7juebkeinhuWIl+ihqOenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XHRcdCflsIbnvJbovpHmoIforrDkuLrlsI/kv67mlLnvvIjoi6XmgqjlnKjns7vnu5/lj4LmlbDorr7nva7kuK3lt7Lorr7nva7lsIbmiYDmnInnvJbovpHmoIforrDkuLrlsI/kv67mlLnvvIzmraTpgInpobnkuI3kvJrlr7nnjrDmnInooYzkuLrov5vooYzmlLnliqjvvIknLFxuXHRcdFx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ+WFgeiuuOWvueS4jeaYr+aWh+S7tueahOmhtemdouWSjOWtkOWIhuexu+i/m+ihjOWIhuexu+aTjeS9nCcsXG5cdFx0XHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAn56e76Zmke3tDaGVjayBjYXRlZ29yaWVzfX3lubbov5vooYzlhbbku5bnu4boioLmuIXnkIYnLFxuXHRcdFx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAn5pyA5aSa5pi+56S655qE5a2Q5YiG57G75pWw6YePJyxcblx0XHRcdC8vIFByb2dyZXNzXG5cdFx0XHQnY2F0LWEtbG90LWxvYWRpbmcnOiAn5q2j5Zyo5Yqg6L294oCm4oCmJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdGluZyc6ICfmraPlnKjnvJbovpHpobXpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC1vZic6ICfvvIzlhbHmnIknLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLWFscmVhZHknOiAn5Lul5LiL6aG16Z2i5bey6Lez6L+H77yM5Zug5Li66aG16Z2i5bey57uP5Zyo5YiG57G75Lit77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOiAn5Lul5LiL6aG16Z2i5bey6Lez6L+H77yM5Zug5Li65om+5LiN5Yiw546w5pyJ5YiG57G777yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOiAn5Lul5LiL6aG16Z2i5peg5rOV57yW6L6R77yM5Zug5Li66L+e5o6l5pyN5Yqh5Zmo5Ye66ZSZ77yaJyxcblx0XHRcdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAn5YWo6YOo6aG16Z2i5bey5aSE55CG44CCJyxcblx0XHRcdCdjYXQtYS1sb3QtZG9uZSc6ICflt7LlrozmiJDvvIEnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAn5bey5Yqg5YWl5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICflt7LlpI3liLbliLDliIbnsbsnLFxuXHRcdFx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAn5bey56e75Yqo5Yiw5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAn5bey5LuO5YiG57G756e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAn6L+U5Zue5Yiw6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICfmib7kuI3liLDliIbnsbvjgIInLFxuXHRcdFx0Ly8gU3VtbWFyaWVzXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliqDlhaXliIbnsbtbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhuexu+mXtOWkjeWItu+8muS7jltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5YiG57G76Ze056e75Yqo77ya5LuOW1tDYXRlZ29yeTokMV1d5YiwW1tDYXRlZ29yeTokMl1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1yZW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muS7juWIhuexu+enu+mZpO+8mltbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7REVGQVVMVF9NRVNTQUdFUywgc2V0TWVzc2FnZXN9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04sXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCxcblx0Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIsXG5cdENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVELFxuXHRERUZBVUxUX1NFVFRJTkcsXG5cdFZBUklBTlRTLFxufSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7REVGQVVMVF9NRVNTQUdFUywgc2V0TWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuaW1wb3J0IHR5cGUge01lc3NhZ2VLZXksIFNldHRpbmd9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtnZXRCb2R5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRDYWNoZWRLZXlzfSBmcm9tICcuL2dldENhY2hlZEtleXMnO1xuXG5jb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnRm9ybWF0dGVkTmFtZXNwYWNlcywgd2dOYW1lc3BhY2VJZHMsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1RpdGxlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLyoqXG4gKiBDaGFuZ2VzIGNhdGVnb3J5IG9mIG11bHRpcGxlIGZpbGVzXG4gKi9cbmNvbnN0IGNhdEFMb3QgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdC8qISBDYXQtYS1sb3QgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cblx0Y2xhc3MgQ0FMIHtcblx0XHRwdWJsaWMgc3RhdGljIGlzU2VhcmNoTW9kZSA9IGZhbHNlO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUVTU0FHRVM6IFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+ID0gREVGQVVMVF9NRVNTQUdFUztcblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NFVFRJTkc6IFNldHRpbmcgPSBERUZBVUxUX1NFVFRJTkc7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBBUElfVEFHOiBzdHJpbmcgPSBPUFRJT05TLmFwaVRhZztcblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUQVJHRVRfTkFNRVNQQUNFOiBudW1iZXIgPSBPUFRJT05TLnRhcmdldE5hbWVzcGFjZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENVUlJFTlRfQ0FURUdST1k6IHN0cmluZyA9IHdnVGl0bGU7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXM6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXM7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgd2dOYW1lc3BhY2VJZHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB3Z05hbWVzcGFjZUlkcztcblxuXHRcdHByaXZhdGUgc3RhdGljIGlzQXV0b0NvbXBsZXRlSW5pdCA9IGZhbHNlO1xuXG5cdFx0cHVibGljIHN0YXRpYyBhcGkgPSBhcGk7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhbHJlYWR5VGhlcmU6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY29ubmVjdGlvbkVycm9yOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdEZvdW5kOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDdXJyZW50ID0gMDtcblx0XHRwcml2YXRlIHN0YXRpYyBjb3VudGVyTmVlZGVkID0gMDtcblxuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDYXQgPSAwO1xuXHRcdHByaXZhdGUgc3RhdGljIGN1cnJlbnRDYXRlZ29yeSA9ICcnO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgZGlhbG9nSGVpZ2h0ID0gNDUwO1xuXHRcdHByaXZhdGUgc3RhdGljIGVkaXRUb2tlbiA9ICcnO1xuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsQ2F0TmFtZSA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlc1tDQUwuVEFSR0VUX05BTUVTUEFDRV0gYXMgc3RyaW5nO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcGFyZW50Q2F0czogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJDYXRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgc2V0dGluZ3M6IE5vbk51bGxhYmxlPHR5cGVvZiB3aW5kb3cuQ2F0QUxvdFByZWZzPiA9IHt9O1xuXHRcdHByaXZhdGUgc3RhdGljIHZhcmlhbnRDYWNoZTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cblx0XHRwcml2YXRlIHN0YXRpYyAkY291bnRlcjogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRwcm9ncmVzc0RpYWxvZzogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRsYWJlbHM6IEpRdWVyeSA9ICQoKTtcblx0XHRwcml2YXRlIHN0YXRpYyAkc2VsZWN0ZWRMYWJlbHM6IEpRdWVyeSA9ICQoKTtcblxuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGNvbnRhaW5lcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGRhdGFDb250YWluZXI6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRtYXJrQ291bnRlcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJHJlc3VsdExpc3Q6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRzZWFyY2hJbnB1dDogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGhlYWQ6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRsaW5rOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+O1xuXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pikge1xuXHRcdFx0aWYgKCFtdy5tZXNzYWdlKCdjYXQtYS1sb3QtbG9hZGluZycpLnBhcnNlKCkpIHtcblx0XHRcdFx0bXcubWVzc2FnZXMuc2V0KENBTC5NRVNTQUdFUyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJGJvZHkgPSAkYm9keTtcblx0XHRcdENBTC5pbml0U2V0dGluZ3MoKTtcblxuXHRcdFx0Y29uc3QgY29udGFpbmVyID0gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17W0NMQVNTX05BTUUsIENMQVNTX05BTUVfQ09OVEFJTkVSLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVJ9IC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUfSAvPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVR9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e0NBTC5tc2coJ2VudGVyLW5hbWUnKX1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e0NBTC5pc1NlYXJjaE1vZGUgPyAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCdzZWFyY2gnKSA/PyAnJykgOiAnJ31cblx0XHRcdFx0XHRcdFx0XHRvbktleURvd249eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkPEhUTUxJbnB1dEVsZW1lbnQ+KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXQ6IHN0cmluZyA9ICRlbGVtZW50LnZhbCgpPy50cmltKCkgPz8gJyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjYXQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoY2F0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9PlxuXHRcdFx0XHRcdFx0XHR7W0NBTC5tc2coJ3NlbGVjdCcpLCAnICddfVxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTH1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUFsbCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FsbCcpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdHsnIOKAoiAnfVxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkV9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbm9uZScpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH0+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS30+Q2F0LWEtbG90PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKSBhcyBKUXVlcnk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIuYXBwZW5kVG8odGhpcy4kYm9keSk7XG5cblx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1gKTtcblx0XHRcdHRoaXMuJG1hcmtDb3VudGVyID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUn1gKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QgPSB0aGlzLiRkYXRhQ29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1gKTtcblx0XHRcdHRoaXMuJHNlYXJjaElucHV0ID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KFxuXHRcdFx0XHRgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUfWBcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGhlYWQgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH1gKTtcblx0XHRcdHRoaXMuJGxpbmsgPSB0aGlzLiRoZWFkLmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9YCk7XG5cdFx0fVxuXG5cdFx0cHVibGljIGJ1aWxkRWxlbWVudHMoKTogdm9pZCB7XG5cdFx0XHRjb25zdCByZWdleENhdDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXlxcXFxzKiR7Q0FMLmxvY2FsaXplZFJlZ2V4KENBTC5UQVJHRVRfTkFNRVNQQUNFLCAnQ2F0ZWdvcnknKX06YCwgJycpO1xuXHRcdFx0bGV0IGlzQ29tcG9zaXRpb25TdGFydDogYm9vbGVhbjtcblxuXHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQub24oJ2NvbXBvc2l0aW9uc3RhcnQnLCAoKSA9PiB7XG5cdFx0XHRcdGlzQ29tcG9zaXRpb25TdGFydCA9IHRydWU7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQub24oJ2NvbXBvc2l0aW9uZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRpc0NvbXBvc2l0aW9uU3RhcnQgPSBmYWxzZTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLiRzZWFyY2hJbnB1dC5vbignaW5wdXQga2V5dXAnLCAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0aWYgKGlzQ29tcG9zaXRpb25TdGFydCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB7Y3VycmVudFRhcmdldH0gPSBldmVudDtcblx0XHRcdFx0Y29uc3Qge3ZhbHVlOiBvbGRWYWx9ID0gY3VycmVudFRhcmdldDtcblx0XHRcdFx0Y29uc3QgbmV3VmFsOiBzdHJpbmcgPSBvbGRWYWwucmVwbGFjZShyZWdleENhdCwgJycpO1xuXHRcdFx0XHRpZiAobmV3VmFsICE9PSBvbGRWYWwpIHtcblx0XHRcdFx0XHRjdXJyZW50VGFyZ2V0LnZhbHVlID0gbmV3VmFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgaW5pdEF1dG9jb21wbGV0ZSA9ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0aWYgKENBTC5pc0F1dG9Db21wbGV0ZUluaXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Q0FMLmlzQXV0b0NvbXBsZXRlSW5pdCA9IHRydWU7XG5cblx0XHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQuYXV0b2NvbXBsZXRlKHtcblx0XHRcdFx0XHRzb3VyY2U6IChyZXF1ZXN0OiB7dGVybTogc3RyaW5nfSwgcmVzcG9uc2U6IChhcmc6IEpRdWVyeTxzdHJpbmc+KSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogJ29wZW5zZWFyY2gnLFxuXHRcdFx0XHRcdFx0XHRcdG5hbWVzcGFjZTogQ0FMLlRBUkdFVF9OQU1FU1BBQ0UsXG5cdFx0XHRcdFx0XHRcdFx0cmVkaXJlY3RzOiAncmVzb2x2ZScsXG5cdFx0XHRcdFx0XHRcdFx0c2VhcmNoOiByZXF1ZXN0LnRlcm0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0WzFdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXNwb25zZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0JChyZXN1bHRbMV0pLm1hcCgoX2luZGV4LCBpdGVtOiBzdHJpbmcpOiBzdHJpbmcgPT4gaXRlbS5yZXBsYWNlKHJlZ2V4Q2F0LCAnJykpXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRteTogJ3JpZ2h0IGJvdHRvbScsXG5cdFx0XHRcdFx0XHRhdDogJ3JpZ2h0IHRvcCcsXG5cdFx0XHRcdFx0XHRvZjogdGhpcy4kc2VhcmNoSW5wdXQsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRhcHBlbmRUbzogYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSfWAsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdHRoaXMuJGxpbmsub24oJ2NsaWNrJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdCQoZXZlbnQuY3VycmVudFRhcmdldCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQpO1xuXHRcdFx0XHRpbml0QXV0b2NvbXBsZXRlKCk7XG5cdFx0XHRcdHRoaXMucnVuKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBpbml0U2V0dGluZ3MoKTogdm9pZCB7XG5cdFx0XHRsZXQgY2F0QUxvdFByZWZzOiB0eXBlb2YgQ0FMLnNldHRpbmdzID0gd2luZG93LkNhdEFMb3RQcmVmcyA/PyB7fTtcblx0XHRcdGNvbnN0IHR5cGVPZkNhdEFMb3RQcmVmcyA9IHR5cGVvZiBjYXRBTG90UHJlZnM7XG5cdFx0XHRpZiAoKHR5cGVPZkNhdEFMb3RQcmVmcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoY2F0QUxvdFByZWZzKSkgfHwgdHlwZU9mQ2F0QUxvdFByZWZzICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRjYXRBTG90UHJlZnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBzZXR0aW5nS2V5IG9mIE9iamVjdC5rZXlzKENBTC5ERUZBVUxUX1NFVFRJTkcpIGFzIChrZXlvZiBTZXR0aW5nKVtdKSB7XG5cdFx0XHRcdGNvbnN0IHNldHRpbmcgPSBDQUwuREVGQVVMVF9TRVRUSU5HW3NldHRpbmdLZXldO1xuXG5cdFx0XHRcdENBTC5zZXR0aW5nc1tzZXR0aW5nS2V5XSA9IGNhdEFMb3RQcmVmc1tzZXR0aW5nS2V5XSA/PyBzZXR0aW5nLmRlZmF1bHQ7XG5cblx0XHRcdFx0aWYgKCFzZXR0aW5nLnNlbGVjdF9pMThuKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzZXR0aW5nLnNlbGVjdCA9IHt9O1xuXHRcdFx0XHRmb3IgKGNvbnN0IG1lc3NhZ2VLZXkgb2YgT2JqZWN0LmtleXMoc2V0dGluZy5zZWxlY3RfaTE4bikpIHtcblx0XHRcdFx0XHRjb25zdCBtZXNzYWdlOiBzdHJpbmcgPSBzZXR0aW5nLnNlbGVjdF9pMThuW21lc3NhZ2VLZXldIGFzIGtleW9mIHR5cGVvZiBzZXR0aW5nLnNlbGVjdF9pMThuO1xuXHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHRzZXR0aW5nLnNlbGVjdFtDQUwubXNnKG1lc3NhZ2VLZXkgYXMgbmV2ZXIpXSA9IG1lc3NhZ2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBtc2coa2V5OiBNZXNzYWdlS2V5IGV4dGVuZHMgYGNhdC1hLWxvdC0ke2luZmVyIFB9YCA/IFAgOiBuZXZlciwgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcge1xuXHRcdFx0Y29uc3QgZnVsbEtleTogc3RyaW5nID0gYGNhdC1hLWxvdC0ke2tleX1gO1xuXHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdHJldHVybiBhcmdzLmxlbmd0aCA/IG13Lm1lc3NhZ2UoZnVsbEtleSwgLi4uYXJncykucGFyc2UoKSA6IG13Lm1lc3NhZ2UoZnVsbEtleSkucGxhaW4oKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbG9jYWxpemVkUmVnZXgobmFtZXNwYWNlTnVtYmVyOiBudW1iZXIsIGZhbGxiYWNrOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdFx0Ly8gQ29waWVkIGZyb20gSG90Q2F0LCB0aGFua3MgTHVwby5cblx0XHRcdGNvbnN0IHdpa2lUZXh0Qmxhbms6IHN0cmluZyA9IFN0cmluZy5yYXdgW1xcdCBfXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAwQVxcdTIwMjhcXHUyMDI5XFx1MjAyRlxcdTIwNUZcXHUzMDAwXStgO1xuXHRcdFx0Y29uc3Qgd2lraVRleHRCbGFua1JFOiBSZWdFeHAgPSBuZXcgUmVnRXhwKHdpa2lUZXh0QmxhbmssICdnJyk7XG5cdFx0XHRjb25zdCBjcmVhdGVSZWdleFN0ciA9IChuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRpZiAoIW5hbWU/Lmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgcmVnZXhOYW1lOiBzdHJpbmcgPSAnJztcblx0XHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBpbml0aWFsOiBzdHJpbmcgPSBuYW1lLnNsaWNlKGksIGkgKyAxKTtcblx0XHRcdFx0XHRjb25zdCBsbDogc3RyaW5nID0gaW5pdGlhbC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdGNvbnN0IHVsOiBzdHJpbmcgPSBpbml0aWFsLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdFx0cmVnZXhOYW1lICs9IGxsID09PSB1bCA/IGluaXRpYWwgOiBgWyR7bGx9JHt1bH1dYDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVnZXhOYW1lLnJlcGxhY2UoLyhbJCgpKisuP1xcXFxeXSkvZywgU3RyaW5nLnJhd2BcXCQxYCkucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsIHdpa2lUZXh0QmxhbmspO1xuXHRcdFx0fTtcblx0XHRcdGZhbGxiYWNrID0gZmFsbGJhY2sudG9Mb3dlckNhc2UoKTtcblx0XHRcdGNvbnN0IGNhbm9uaWNhbDogc3RyaW5nIHwgdW5kZWZpbmVkID0gQ0FMLndnRm9ybWF0dGVkTmFtZXNwYWNlc1tuYW1lc3BhY2VOdW1iZXJdPy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0bGV0IHJlZ2V4U3RyaW5nOiBzdHJpbmcgPSBjcmVhdGVSZWdleFN0cihjYW5vbmljYWwpO1xuXHRcdFx0aWYgKGZhbGxiYWNrICYmIGNhbm9uaWNhbCAhPT0gZmFsbGJhY2spIHtcblx0XHRcdFx0cmVnZXhTdHJpbmcgKz0gYHwke2NyZWF0ZVJlZ2V4U3RyKGZhbGxiYWNrKX1gO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBjYXROYW1lIG9mIE9iamVjdC5rZXlzKENBTC53Z05hbWVzcGFjZUlkcykpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGNhdE5hbWUudG9Mb3dlckNhc2UoKSAhPT0gY2Fub25pY2FsICYmXG5cdFx0XHRcdFx0Y2F0TmFtZS50b0xvd2VyQ2FzZSgpICE9PSBmYWxsYmFjayAmJlxuXHRcdFx0XHRcdENBTC53Z05hbWVzcGFjZUlkc1tjYXROYW1lXSA9PT0gbmFtZXNwYWNlTnVtYmVyXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJlZ2V4U3RyaW5nICs9IGB8JHtjcmVhdGVSZWdleFN0cihjYXROYW1lKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYCg/OiR7cmVnZXhTdHJpbmd9KWA7XG5cdFx0fVxuXHRcdHByaXZhdGUgdXBkYXRlU2VsZWN0aW9uQ291bnRlcigpOiB2b2lkIHtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMgPSBDQUwuJGxhYmVscy5maWx0ZXIoYC4ke0NMQVNTX05BTUVfTEFCRUxfU0VMRUNURUR9YCk7XG5cdFx0XHR0aGlzLiRtYXJrQ291bnRlci5zaG93KCkuaHRtbChDQUwubXNnKCdmaWxlcy1zZWxlY3RlZCcsIENBTC4kc2VsZWN0ZWRMYWJlbHMubGVuZ3RoLnRvU3RyaW5nKCkpKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSB0b2dnbGVBbGwoc2VsZWN0OiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRDQUwuJGxhYmVscy50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVELCBzZWxlY3QpO1xuXHRcdFx0dGhpcy51cGRhdGVTZWxlY3Rpb25Db3VudGVyKCk7XG5cdFx0fVxuXG5cdFx0cHVibGljIHN0YXRpYyBhc3luYyBmaW5kQWxsVmFyaWFudHMoY2F0ZWdvcnk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+IHtcblx0XHRcdGlmIChDQUwudmFyaWFudENhY2hlW2NhdGVnb3J5XSAhPT0gdW5kZWZpbmVkICYmIEFycmF5LmlzQXJyYXkoQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0pKSB7XG5cdFx0XHRcdHJldHVybiBDQUwudmFyaWFudENhY2hlW2NhdGVnb3J5XTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0bXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgY2F0ZWdvcnkpICE9PSB1bmRlZmluZWQgJiZcblx0XHRcdFx0QXJyYXkuaXNBcnJheShtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyBjYXRlZ29yeSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0Q0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gPSBtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyBjYXRlZ29yeSkgYXMgc3RyaW5nW107XG5cdFx0XHRcdHJldHVybiBDQUwudmFyaWFudENhY2hlW2NhdGVnb3J5XTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW2NhdGVnb3J5XTtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGV4dDogY2F0ZWdvcnksXG5cdFx0XHRcdHRpdGxlOiAndGVtcCcsXG5cdFx0XHR9O1xuXHRcdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3Qge3BhcnNlfSA9IGF3YWl0IENBTC5hcGkuZ2V0KHtcblx0XHRcdFx0XHRcdC4uLnBhcmFtcyxcblx0XHRcdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHRcdFx0fSBhcyB0eXBlb2YgcGFyYW1zKTtcblx0XHRcdFx0XHRjb25zdCB7dGV4dH0gPSBwYXJzZTtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSAkKHRleHQpLmVxKDApLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdFx0cmVzdWx0c1tyZXN1bHRzLmxlbmd0aF0gPSByZXN1bHQ7XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdH1cblx0XHRcdC8vIERlLWR1cGxpY2F0ZVxuXHRcdFx0Q0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gPSB1bmlxdWVBcnJheShyZXN1bHRzKTsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgY2F0ZWdvcnksIENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldLCA2MCAqIDYwICogMjQpOyAvLyAxIGRheVxuXHRcdFx0cmV0dXJuIENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGFzeW5jIHJlZ2V4QnVpbGRlcihjYXRlZ29yeTogc3RyaW5nKTogUHJvbWlzZTxSZWdFeHA+IHtcblx0XHRcdC8vIEJ1aWxkIGEgcmVnZXhwIHN0cmluZyBmb3IgbWF0Y2hpbmcgdGhlIGdpdmVuIGNhdGVnb3J5OlxuXHRcdFx0Y29uc3QgY2F0TmFtZTogc3RyaW5nID0gQ0FMLmxvY2FsaXplZFJlZ2V4KENBTC5UQVJHRVRfTkFNRVNQQUNFLCAnQ2F0ZWdvcnknKTtcblx0XHRcdC8vIHRyaW0gbGVhZGluZy90cmFpbGluZyB3aGl0ZXNwYWNlIGFuZCB1bmRlcnNjb3Jlc1xuXHRcdFx0Y2F0ZWdvcnkgPSBjYXRlZ29yeS5yZXBsYWNlKC9eW1xcc19dKy8sICcnKS5yZXBsYWNlKC9bXFxzX10rJC8sICcnKTtcblx0XHRcdC8vIEZpbmQgYWxsIHZhcmlhbnRzXG5cdFx0XHRjb25zdCB2YXJpYW50czogc3RyaW5nW10gPSBhd2FpdCBDQUwuZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5KTtcblx0XHRcdC8vIGVzY2FwZSByZWdleHAgbWV0YWNoYXJhY3RlcnMgKD0gYW55IEFTQ0lJIHB1bmN0dWF0aW9uIGV4Y2VwdCBfKVxuXHRcdFx0Y29uc3QgdmFyaWFudFJlZ0V4cHM6IHN0cmluZ1tdID0gW107XG5cdFx0XHRmb3IgKGxldCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG5cdFx0XHRcdHZhcmlhbnQgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cCh2YXJpYW50KTtcblx0XHRcdFx0Ly8gYW55IHNlcXVlbmNlIG9mIHNwYWNlcyBhbmQgdW5kZXJzY29yZXMgc2hvdWxkIG1hdGNoIGFueSBvdGhlclxuXHRcdFx0XHR2YXJpYW50ID0gdmFyaWFudC5yZXBsYWNlKC9bXFxzX10rL2csIFN0cmluZy5yYXdgW1xcc19dK2ApO1xuXHRcdFx0XHQvLyBNYWtlIHRoZSBmaXJzdCBjaGFyYWN0ZXIgY2FzZS1pbnNlbnNpdGl2ZTpcblx0XHRcdFx0Y29uc3QgZmlyc3Q6IHN0cmluZyA9IHZhcmlhbnQuc2xpY2UoMCwgMSk7XG5cdFx0XHRcdGlmIChmaXJzdC50b1VwcGVyQ2FzZSgpICE9PSBmaXJzdC50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRcdFx0dmFyaWFudCA9IGBbJHtmaXJzdC50b1VwcGVyQ2FzZSgpfSR7Zmlyc3QudG9Mb3dlckNhc2UoKX1dJHt2YXJpYW50LnNsaWNlKDEpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyaWFudFJlZ0V4cHNbdmFyaWFudFJlZ0V4cHMubGVuZ3RoXSA9IHZhcmlhbnQ7XG5cdFx0XHR9XG5cdFx0XHQvLyBDb21waWxlIGl0IGludG8gYSBSZWdFeHAgdGhhdCBtYXRjaGVzIE1lZGlhV2lraSBjYXRlZ29yeSBzeW50YXggKHllYWgsIGl0IGxvb2tzIHVnbHkpOlxuXHRcdFx0Ly8gWFhYOiB0aGUgZmlyc3QgY2FwdHVyaW5nIHBhcmVucyBhcmUgYXNzdW1lZCB0byBtYXRjaCB0aGUgc29ydGtleSwgaWYgcHJlc2VudCwgaW5jbHVkaW5nIHRoZSB8IGJ1dCBleGNsdWRpbmcgdGhlIF1dXG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFtbXFxcXHNfXSoke2NhdE5hbWV9W1xcXFxzX10qOltcXFxcc19dKig/OiR7dmFyaWFudFJlZ0V4cHMuam9pbihcblx0XHRcdFx0XHQnfCdcblx0XHRcdFx0KX0pW1xcXFxzX10qKFxcXFx8W15cXFxcXV0qKD86XFxcXF1bXlxcXFxdXSspKik/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvQVBJQ2FsbChcblx0XHRcdF9wYXJhbXM6XG5cdFx0XHRcdHwgT21pdDxBcGlFZGl0UGFnZVBhcmFtcywgJ2Zvcm1hdCc+XG5cdFx0XHRcdHwgT21pdDxBcGlPcGVuU2VhcmNoUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaVF1ZXJ5Q2F0ZWdvcnlNZW1iZXJzUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaVF1ZXJ5VG9rZW5zUGFyYW1zLCAnZm9ybWF0Jz4sXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0Y2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWRcblx0XHQpIHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IF9wYXJhbXMgYXMgdHlwZW9mIF9wYXJhbXMgJiB7XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nO1xuXHRcdFx0XHR0aXRsZT86IHN0cmluZztcblx0XHRcdH07XG5cdFx0XHRwYXJhbXNbJ2Zvcm1hdCddID0gJ2pzb24nO1xuXHRcdFx0cGFyYW1zWydmb3JtYXR2ZXJzaW9uJ10gPSAnMic7XG5cdFx0XHRsZXQgaTogbnVtYmVyID0gMDtcblx0XHRcdGNvbnN0IGRvQ2FsbCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3I6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdG13LmxvZy5lcnJvcignW0NhdC1hLWxvdF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdFx0aWYgKGkgPCA0KSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGRvQ2FsbCwgMzAwKTtcblx0XHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBhcmFtc1sndGl0bGUnXSkge1xuXHRcdFx0XHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvcltDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aF0gPSBwYXJhbXNbJ3RpdGxlJ107XG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChwYXJhbXNbJ2FjdGlvbiddID09PSAncXVlcnknKSB7XG5cdFx0XHRcdFx0Q0FMLmFwaS5nZXQocGFyYW1zKS50aGVuKGNhbGxiYWNrKS5jYXRjaChoYW5kbGVFcnJvcik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Q0FMLmFwaS5wb3N0KHBhcmFtcykudGhlbihjYWxsYmFjaykuY2F0Y2goaGFuZGxlRXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0ZG9DYWxsKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgbWFya0FzRG9uZShcblx0XHRcdCRtYXJrZWRMYWJlbDogSlF1ZXJ5LFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnIHwgJ3JlbW92ZSdcblx0XHQpOiB2b2lkIHtcblx0XHRcdCRtYXJrZWRMYWJlbC5hZGRDbGFzcyhDTEFTU19OQU1FX0xBQkVMX0RPTkUpO1xuXG5cdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnYWRkJzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdhZGRlZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjb3B5Jzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdjb3BpZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbW92ZSc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbW92ZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmVtb3ZlJzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdyZW1vdmVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGRvQ2xlYW51cCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdFx0cmV0dXJuIENBTC5zZXR0aW5ncy5kb2NsZWFudXAgPyB0ZXh0LnJlcGxhY2UoL3t7XFxzKltDY11oZWNrIGNhdGVnb3JpZXNcXHMqKFxcfD8uKj8pfX0vLCAnJykgOiB0ZXh0O1xuXHRcdH0gLy8gUmVtb3ZlIHt7VW5jYXRlZ29yaXplZH19IChhbHNvIHdpdGggY29tbWVudCkuIE5vIG5lZWQgdG8gcmVwbGFjZSBpdCB3aXRoIGFueXRoaW5nXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVW5jYXQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdHJldHVybiB0ZXh0LnJlcGxhY2UoL1xce1xce1xccypbVXVdbmNhdGVnb3JpemVkXFxzKihcXHw/Lio/KVxcfVxcfS8sICcnKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBkaXNwbGF5UmVzdWx0KCk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3Moe1xuXHRcdFx0XHRjdXJzb3I6ICcnLFxuXHRcdFx0XHRvdmVyZmxvdzogJycsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9GRUVEQkFDS31gKS5hZGRDbGFzcyhDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUpO1xuXG5cdFx0XHRjb25zdCAkcGFyZW50OiBKUXVlcnkgPSBDQUwuJGNvdW50ZXIucGFyZW50KCk7XG5cdFx0XHQkcGFyZW50Lmh0bWwoPGgzPntDQUwubXNnKCdkb25lJyl9PC9oMz4pO1xuXHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ2FsbC1kb25lJyl9XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KTtcblxuXHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0Q0FMLiRwcm9ncmVzc0RpYWxvZy5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlQWxsKGZhbHNlKTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ3JldHVybi10by1wYWdlJyl9XG5cdFx0XHRcdDwvYT5cblx0XHRcdCk7XG5cblx0XHRcdGlmIChDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aCkge1xuXHRcdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGg1PntDQUwubXNnKCdza2lwcGVkLWFscmVhZHknLCBDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aC50b1N0cmluZygpKX08L2g1PlxuXHRcdFx0XHRcdFx0e0NBTC5hbHJlYWR5VGhlcmUucmVkdWNlPChzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpW10+KFxuXHRcdFx0XHRcdFx0XHQocHJlLCBjdXIsIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0XHRcdGluZGV4IDwgQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGggLSAxID8gWy4uLnByZSwgY3VyLCA8YnIga2V5PXtpbmRleH0gLz5dIDogWy4uLnByZSwgY3VyXSxcblx0XHRcdFx0XHRcdFx0W11cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoQ0FMLm5vdEZvdW5kLmxlbmd0aCkge1xuXHRcdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGg1PntDQUwubXNnKCdza2lwcGVkLW5vdC1mb3VuZCcsIENBTC5ub3RGb3VuZC5sZW5ndGgudG9TdHJpbmcoKSl9PC9oNT5cblx0XHRcdFx0XHRcdHtDQUwubm90Rm91bmQucmVkdWNlPChzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpW10+KFxuXHRcdFx0XHRcdFx0XHQocHJlLCBjdXIsIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0XHRcdGluZGV4IDwgQ0FMLm5vdEZvdW5kLmxlbmd0aCAtIDEgPyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl0gOiBbLi4ucHJlLCBjdXJdLFxuXHRcdFx0XHRcdFx0XHRbXVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGlmIChDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aCkge1xuXHRcdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGg1PntDQUwubXNnKCdza2lwcGVkLXNlcnZlcicsIENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoLnRvU3RyaW5nKCkpfTwvaDU+XG5cdFx0XHRcdFx0XHR7Q0FMLmNvbm5lY3Rpb25FcnJvci5yZWR1Y2U8KHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXT4oXG5cdFx0XHRcdFx0XHRcdChwcmUsIGN1ciwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aCAtIDFcblx0XHRcdFx0XHRcdFx0XHRcdD8gWy4uLnByZSwgY3VyLCA8YnIga2V5PXtpbmRleH0gLz5dXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IFsuLi5wcmUsIGN1cl0sXG5cdFx0XHRcdFx0XHRcdFtdXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZUNvdW50ZXIoKTogdm9pZCB7XG5cdFx0XHRDQUwuY291bnRlckN1cnJlbnQrKztcblx0XHRcdGlmIChDQUwuY291bnRlckN1cnJlbnQgPiBDQUwuY291bnRlck5lZWRlZCkge1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlSZXN1bHQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdENBTC4kY291bnRlci50ZXh0KENBTC5jb3VudGVyQ3VycmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgYXN5bmMgZWRpdENhdGVnb3JpZXMoXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0cmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuXHRcdFx0bWFya2VkTGFiZWw6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPlswXSxcblx0XHRcdHRhcmdldENhdGVnb3J5OiBzdHJpbmcsXG5cdFx0XHRtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJyB8ICdyZW1vdmUnXG5cdFx0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHRjb25zdCBbbWFya2VkTGFiZWxUaXRsZSwgJG1hcmtlZExhYmVsXSA9IG1hcmtlZExhYmVsO1xuXG5cdFx0XHRpZiAoIXJlc3VsdD8uWydxdWVyeSddKSB7XG5cdFx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3JbQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGhdID0gbWFya2VkTGFiZWxUaXRsZTtcblx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bGV0IG9yaWdpblRleHQ6IHN0cmluZyA9ICcnO1xuXHRcdFx0bGV0IHN0YXJ0dGltZXN0YW1wOiBudW1iZXIgPSAwO1xuXHRcdFx0bGV0IHRpbWVzdGFtcDogbnVtYmVyID0gMDtcblx0XHRcdENBTC5lZGl0VG9rZW4gPSByZXN1bHRbJ3F1ZXJ5J10udG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGNvbnN0IHtwYWdlc30gPSByZXN1bHRbJ3F1ZXJ5J107XG5cblx0XHRcdGNvbnN0IFtwYWdlXSA9IHBhZ2VzO1xuXHRcdFx0b3JpZ2luVGV4dCA9IHBhZ2U/LnJldmlzaW9ucz8uWzBdLnNsb3RzLm1haW4uY29udGVudDtcblx0XHRcdCh7c3RhcnR0aW1lc3RhbXB9ID0gcGFnZSk7XG5cdFx0XHRbe3RpbWVzdGFtcH1dID0gcGFnZS5yZXZpc2lvbnM7XG5cblx0XHRcdGNvbnN0IHNvdXJjZWNhdDogc3RyaW5nID0gQ0FMLkNVUlJFTlRfQ0FURUdST1k7XG5cdFx0XHQvLyBDaGVjayBpZiB0aGF0IGZpbGUgaXMgYWxyZWFkeSBpbiB0aGF0IGNhdGVnb3J5XG5cdFx0XHRjb25zdCB0YXJnZVJlZ0V4cCA9IGF3YWl0IENBTC5yZWdleEJ1aWxkZXIodGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0aWYgKG1vZGUgIT09ICdyZW1vdmUnICYmIHRhcmdlUmVnRXhwLnRlc3Qob3JpZ2luVGV4dCkgJiYgbW9kZSAhPT0gJ21vdmUnKSB7XG5cdFx0XHRcdENBTC5hbHJlYWR5VGhlcmVbQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGhdID0gbWFya2VkTGFiZWxUaXRsZTtcblx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRml4IHRleHRcblx0XHRcdGxldCB0ZXh0OiBzdHJpbmcgPSBvcmlnaW5UZXh0O1xuXHRcdFx0bGV0IHN1bW1hcnk6IHN0cmluZztcblx0XHRcdGNvbnN0IHNvdXJjZUNhdFJlZ0V4cCA9IGF3YWl0IENBTC5yZWdleEJ1aWxkZXIoc291cmNlY2F0KTtcblx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHRjYXNlICdhZGQnOlxuXHRcdFx0XHRcdHRleHQgKz0gYFxcbltbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fV1dXFxuYDtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1hZGQnKS5yZXBsYWNlKCckMScsIHRhcmdldENhdGVnb3J5KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY29weSc6XG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShcblx0XHRcdFx0XHRcdHNvdXJjZUNhdFJlZ0V4cCxcblx0XHRcdFx0XHRcdGBbWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHtzb3VyY2VjYXR9JDFdXVxcbltbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fSQxXV1gXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1jb3B5JykucmVwbGFjZSgnJDEnLCBzb3VyY2VjYXQpLnJlcGxhY2UoJyQyJywgdGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdC8vIElmIGNhdGVnb3J5IGlzIGFkZGVkIHRocm91Z2ggdGVtcGxhdGU6XG5cdFx0XHRcdFx0aWYgKG9yaWdpblRleHQgPT09IHRleHQpIHtcblx0XHRcdFx0XHRcdHRleHQgKz0gYFxcbltbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fV1dYDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21vdmUnOlxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2Uoc291cmNlQ2F0UmVnRXhwLCBgW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9JDFdXWApO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LW1vdmUnKS5yZXBsYWNlKCckMScsIHNvdXJjZWNhdCkucmVwbGFjZSgnJDInLCB0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JlbW92ZSc6XG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShzb3VyY2VDYXRSZWdFeHAsICcnKTtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1yZW1vdmUnKS5yZXBsYWNlKCckMScsIHNvdXJjZWNhdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0ZXh0ID09PSBvcmlnaW5UZXh0KSB7XG5cdFx0XHRcdENBTC5ub3RGb3VuZFtDQUwubm90Rm91bmQubGVuZ3RoXSA9IG1hcmtlZExhYmVsVGl0bGU7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSB1bmNhdCBhZnRlciB3ZSBjaGVja2VkIHdoZXRoZXIgd2UgY2hhbmdlZCB0aGUgdGV4dCBzdWNjZXNzZnVsbHkuXG5cdFx0XHQvLyBPdGhlcndpc2Ugd2UgbWlnaHQgZmFpbCB0byBkbyB0aGUgY2hhbmdlcywgYnV0IHN0aWxsIHJlcGxhY2Uge3t1bmNhdH19XG5cdFx0XHRpZiAobW9kZSAhPT0gJ3JlbW92ZScpIHtcblx0XHRcdFx0dGV4dCA9IENBTC5kb0NsZWFudXAoQ0FMLnJlbW92ZVVuY2F0KHRleHQpKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHR0b2tlbjogQ0FMLmVkaXRUb2tlbixcblx0XHRcdFx0XHR0YWdzOiBDQUwuQVBJX1RBRyxcblx0XHRcdFx0XHR0aXRsZTogbWFya2VkTGFiZWxUaXRsZSxcblx0XHRcdFx0XHRhc3NlcnQ6ICd1c2VyJyxcblx0XHRcdFx0XHRib3Q6IHRydWUsXG5cdFx0XHRcdFx0YmFzZXRpbWVzdGFtcDogdGltZXN0YW1wIGFzIHVua25vd24gYXMgc3RyaW5nLFxuXHRcdFx0XHRcdHdhdGNobGlzdDogQ0FMLnNldHRpbmdzLndhdGNobGlzdCBhcyBuZXZlcixcblx0XHRcdFx0XHR0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0c3RhcnR0aW1lc3RhbXA6IHN0YXJ0dGltZXN0YW1wIGFzIHVua25vd24gYXMgc3RyaW5nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHRcdENBTC5tYXJrQXNEb25lKCRtYXJrZWRMYWJlbCwgdGFyZ2V0Q2F0ZWdvcnksIG1vZGUpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldENvbnRlbnQoXG5cdFx0XHRtYXJrZWRMYWJlbDogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+WzBdLFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnXG5cdFx0KTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdFx0dGl0bGVzOiBtYXJrZWRMYWJlbFswXSxcblx0XHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0XHRcdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxuXHRcdFx0XHRcdHZvaWQgdGhpcy5lZGl0Q2F0ZWdvcmllcyhyZXN1bHQsIG1hcmtlZExhYmVsLCB0YXJnZXRDYXRlZ29yeSwgbW9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGdldFRpdGxlRnJvbUxpbmsoaHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJldHVybiAoZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYgPz8gJycpLm1hdGNoKC93aWtpXFwvKC4rPykoPzojLispPyQvKT8uWzFdID8/ICcnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIGdldE1hcmtlZExhYmVscygpOiBbc3RyaW5nLCBKUXVlcnldW10ge1xuXHRcdFx0Y29uc3QgbWFya2VkTGFiZWxzOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz4gPSBbXTtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMgPSBDQUwuJGxhYmVscy5maWx0ZXIoYC4ke0NMQVNTX05BTUVfTEFCRUxfU0VMRUNURUR9YCk7XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzLmVhY2goKF9pbmRleCwgbGFiZWwpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgJGxhYmVsOiBKUXVlcnkgPSAkKGxhYmVsKTtcblx0XHRcdFx0Y29uc3QgJGxhYmVsTGluazogSlF1ZXJ5ID0gJGxhYmVsLmZpbmQoJ2E6bm90KC5DYXRlZ29yeVRyZWVUb2dnbGUpW3RpdGxlXScpO1xuXHRcdFx0XHRjb25zdCB0aXRsZTogc3RyaW5nID1cblx0XHRcdFx0XHQkbGFiZWxMaW5rLmF0dHIoJ3RpdGxlJyk/LnRyaW0oKSB8fFxuXHRcdFx0XHRcdENBTC5nZXRUaXRsZUZyb21MaW5rKCRsYWJlbExpbmsuYXR0cignaHJlZicpKSB8fFxuXHRcdFx0XHRcdENBTC5nZXRUaXRsZUZyb21MaW5rKCRsYWJlbC5maW5kKCdhOm5vdCguQ2F0ZWdvcnlUcmVlVG9nZ2xlKScpLmF0dHIoJ2hyZWYnKSk7XG5cdFx0XHRcdG1hcmtlZExhYmVsc1ttYXJrZWRMYWJlbHMubGVuZ3RoXSA9IFt0aXRsZSwgJGxhYmVsXTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIG1hcmtlZExhYmVscztcblx0XHR9XG5cdFx0cHJpdmF0ZSBzaG93UHJvZ3Jlc3MoKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcyh7XG5cdFx0XHRcdGN1cnNvcjogJ3dhaXQnLFxuXHRcdFx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0XHR9KTtcblx0XHRcdENBTC4kcHJvZ3Jlc3NEaWFsb2cgPSAkKFxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdHtDQUwubXNnKCdlZGl0aW5nJyl9XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUn0+e0NBTC5jb3VudGVyQ3VycmVudH08L3NwYW4+XG5cdFx0XHRcdFx0e1tDQUwubXNnKCdvZicpLCBDQUwuY291bnRlck5lZWRlZF19XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KS5kaWFsb2coe1xuXHRcdFx0XHRkaWFsb2dDbGFzczogQ0xBU1NfTkFNRV9GRUVEQkFDSyxcblx0XHRcdFx0bWluSGVpZ2h0OiA5MCxcblx0XHRcdFx0aGVpZ2h0OiA5MCxcblx0XHRcdFx0d2lkdGg6IDQ1MCxcblx0XHRcdFx0bW9kYWw6IHRydWUsXG5cdFx0XHRcdGNsb3NlT25Fc2NhcGU6IGZhbHNlLFxuXHRcdFx0XHRkcmFnZ2FibGU6IGZhbHNlLFxuXHRcdFx0XHRyZXNpemFibGU6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLiRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUVfRkVFREJBQ0t9IC51aS1kaWFsb2ctdGl0bGViYXJgKS5oaWRlKCk7XG5cdFx0XHR0aGlzLiRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUVfRkVFREJBQ0t9IC51aS1kaWFsb2ctY29udGVudGApLmhlaWdodCgnYXV0bycpO1xuXHRcdFx0Q0FMLiRjb3VudGVyID0gdGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUn1gKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBkb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeTogc3RyaW5nLCBtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJyk6IHZvaWQge1xuXHRcdFx0Y29uc3QgbWFya2VkTGFiZWxzOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz4gPSB0aGlzLmdldE1hcmtlZExhYmVscygpO1xuXHRcdFx0aWYgKCFtYXJrZWRMYWJlbHMubGVuZ3RoKSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KENBTC5tc2coJ25vbmUtc2VsZWN0ZWQnKSwge1xuXHRcdFx0XHRcdHRhZzogJ2NhdEFMb3QnLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Q0FMLmFscmVhZHlUaGVyZSA9IFtdO1xuXHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvciA9IFtdO1xuXHRcdFx0Q0FMLm5vdEZvdW5kID0gW107XG5cdFx0XHRDQUwuY291bnRlckN1cnJlbnQgPSAxO1xuXHRcdFx0Q0FMLmNvdW50ZXJOZWVkZWQgPSBtYXJrZWRMYWJlbHMubGVuZ3RoO1xuXHRcdFx0dGhpcy5zaG93UHJvZ3Jlc3MoKTtcblx0XHRcdGZvciAoY29uc3QgbWFya2VkTGFiZWwgb2YgbWFya2VkTGFiZWxzKSB7XG5cdFx0XHRcdHRoaXMuZ2V0Q29udGVudChtYXJrZWRMYWJlbCwgdGFyZ2V0Q2F0ZWdvcnksIG1vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIGFkZEhlcmUodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeSwgJ2FkZCcpO1xuXHRcdH1cblx0XHRwcml2YXRlIGNvcHlIZXJlKHRhcmdldENhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnksICdjb3B5Jyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgbW92ZUhlcmUodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeSwgJ21vdmUnKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBjcmVhdGVDYXRMaW5rcyhzeW1ib2w6IHN0cmluZywgY2F0ZWdvcmllczogc3RyaW5nW10pOiB2b2lkIHtcblx0XHRcdGNhdGVnb3JpZXMuc29ydCgpO1xuXHRcdFx0Zm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0XHRcdGNvbnN0ICR0ciA9ICQoXG5cdFx0XHRcdFx0PHRyIGRhdGFzZXQ9e3tjYXRlZ29yeX19PlxuXHRcdFx0XHRcdFx0PHRkPntzeW1ib2x9PC90ZD5cblx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cygkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3J5fVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdCk7XG5cdFx0XHRcdC8vIENhbid0IG1vdmUgdG8gc291cmNlIGNhdGVnb3J5XG5cdFx0XHRcdGlmIChjYXRlZ29yeSAhPT0gQ0FMLkNVUlJFTlRfQ0FURUdST1kgJiYgQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRcdCR0ci5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5hZGRIZXJlKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnYWRkJyl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIGlmIChjYXRlZ29yeSAhPT0gQ0FMLkNVUlJFTlRfQ0FURUdST1kgJiYgIUNBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0XHQkdHIuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT059XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNvcHlIZXJlKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnY29weScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT059XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm1vdmVIZXJlKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbW92ZScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5maW5kKCd0YWJsZScpLmFwcGVuZCgkdHIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIHNob3dDYXRlZ29yeUxpc3QoKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcygnY3Vyc29yJywgJycpO1xuXHRcdFx0Y29uc3QgY3VycmVudENhdGVnb3JpZXM6IHN0cmluZ1tdID0gW0NBTC5jdXJyZW50Q2F0ZWdvcnldO1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5lbXB0eSgpO1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5hcHBlbmQoPHRhYmxlIC8+KTtcblx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkScsIENBTC5wYXJlbnRDYXRzKTtcblx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkicsIGN1cnJlbnRDYXRlZ29yaWVzKTtcblx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkycsIENBTC5zdWJDYXRzKTtcblx0XHRcdC8vIFJlc2V0IHdpZHRoXG5cdFx0XHR0aGlzLiRjb250YWluZXIud2lkdGgoJycpO1xuXHRcdFx0dGhpcy4kY29udGFpbmVyLmhlaWdodCgnJyk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIud2lkdGgoTWF0aC5taW4oKHRoaXMuJGNvbnRhaW5lci53aWR0aCgpID8/IDApICogMS4xICsgMTUsICgkKHdpbmRvdykud2lkdGgoKSA/PyAwKSAtIDEwKSk7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmNzcyh7XG5cdFx0XHRcdCdtYXgtaGVpZ2h0JzogYCR7Q0FMLmRpYWxvZ0hlaWdodH1weGAsXG5cdFx0XHRcdGhlaWdodDogJycsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRQYXJlbnRDYXRzKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0dGl0bGVzOiBgQ2F0ZWdvcnk6JHtDQUwuY3VycmVudENhdGVnb3J5fWAsXG5cdFx0XHRcdFx0cHJvcDogJ2NhdGVnb3JpZXMnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Q0FMLnBhcmVudENhdHMgPSBbXTtcblx0XHRcdFx0XHRjb25zdCB7cGFnZXN9ID0gcmVzdWx0LnF1ZXJ5O1xuXHRcdFx0XHRcdGlmIChwYWdlc1swXT8ubWlzc2luZykge1xuXHRcdFx0XHRcdFx0dGhpcy4kYm9keS5jc3MoJ2N1cnNvcicsICcnKTtcblx0XHRcdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuaHRtbChcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkR9PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdjYXQtbm90LWZvdW5kJyl9XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpInLCBbQ0FMLmN1cnJlbnRDYXRlZ29yeV0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsZXQgY2F0ZWdvcmllczoge3RpdGxlOiBzdHJpbmd9W10gPSBbXTtcblx0XHRcdFx0XHRpZiAocGFnZXNbMF0/LmNhdGVnb3JpZXMpIHtcblx0XHRcdFx0XHRcdFt7Y2F0ZWdvcmllc31dID0gcGFnZXM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGNhdFRpdGxlID0gY2F0LnRpdGxlLnJlcGxhY2UoL15bXjpdKzovLCAnJyk7XG5cdFx0XHRcdFx0XHRDQUwucGFyZW50Q2F0c1tDQUwucGFyZW50Q2F0cy5sZW5ndGhdID0gY2F0VGl0bGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdENBTC5jb3VudGVyQ2F0Kys7XG5cdFx0XHRcdFx0aWYgKENBTC5jb3VudGVyQ2F0ID09PSAyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNob3dDYXRlZ29yeUxpc3QoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0U3ViQ2F0cygpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdGxpc3Q6ICdjYXRlZ29yeW1lbWJlcnMnLFxuXHRcdFx0XHRcdGNtdHlwZTogJ3N1YmNhdCcsXG5cdFx0XHRcdFx0Y21saW1pdDogQ0FMLnNldHRpbmdzLnN1YmNhdGNvdW50IGFzIG5ldmVyLFxuXHRcdFx0XHRcdGNtdGl0bGU6IGBDYXRlZ29yeToke0NBTC5jdXJyZW50Q2F0ZWdvcnl9YCxcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGNhdHM6IHt0aXRsZTogc3RyaW5nfVtdID0gcmVzdWx0Py5xdWVyeT8uY2F0ZWdvcnltZW1iZXJzIHx8IFtdO1xuXHRcdFx0XHRcdENBTC5zdWJDYXRzID0gW107XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBjYXQgb2YgY2F0cykge1xuXHRcdFx0XHRcdFx0Y29uc3QgY2F0VGl0bGUgPSBjYXQudGl0bGUucmVwbGFjZSgvXlteOl0rOi8sICcnKTtcblx0XHRcdFx0XHRcdENBTC5zdWJDYXRzW0NBTC5zdWJDYXRzLmxlbmd0aF0gPSBjYXRUaXRsZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Q0FMLmNvdW50ZXJDYXQrKztcblx0XHRcdFx0XHRpZiAoQ0FMLmNvdW50ZXJDYXQgPT09IDIpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2hvd0NhdGVnb3J5TGlzdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRDYXRlZ29yeUxpc3QoKTogdm9pZCB7XG5cdFx0XHRDQUwuY291bnRlckNhdCA9IDA7XG5cdFx0XHR0aGlzLmdldFBhcmVudENhdHMoKTtcblx0XHRcdHRoaXMuZ2V0U3ViQ2F0cygpO1xuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZUNhdHMoY2F0OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xuXHRcdFx0Q0FMLmN1cnJlbnRDYXRlZ29yeSA9IGNhdDtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuaHRtbCg8ZGl2PntDQUwubXNnKCdsb2FkaW5nJyl9PC9kaXY+KTtcblx0XHRcdHRoaXMuZ2V0Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBmaW5kQWxsTGFiZWxzKCk6IHZvaWQge1xuXHRcdFx0Ly8gSXQncyBwb3NzaWJsZSB0byBhbGxvdyBhbnkga2luZCBvZiBwYWdlcyBhcyB3ZWxsIGJ1dCB3aGF0IGhhcHBlbnMgaWYgeW91IGNsaWNrIG9uIFwic2VsZWN0IGFsbFwiIGFuZCBkb24ndCBleHBlY3QgaXRcblx0XHRcdGlmIChDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdENBTC4kbGFiZWxzID0gdGhpcy4kYm9keS5maW5kKCd0YWJsZS5zZWFyY2hSZXN1bHRJbWFnZScpLmZpbmQoJ3RyPnRkJykuZXEoMSk7XG5cdFx0XHRcdGlmIChDQUwuc2V0dGluZ3MuZWRpdHBhZ2VzKSB7XG5cdFx0XHRcdFx0Q0FMLiRsYWJlbHMgPSBDQUwuJGxhYmVscy5hZGQoJ2Rpdi5tdy1zZWFyY2gtcmVzdWx0LWhlYWRpbmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Q0FMLiRsYWJlbHMgPSB0aGlzLiRib2R5XG5cdFx0XHRcdFx0LmZpbmQoJ2Rpdi5nYWxsZXJ5dGV4dCcpXG5cdFx0XHRcdFx0LmFkZCh0aGlzLiRib2R5LmZpbmQoJ2RpdiNtdy1jYXRlZ29yeS1tZWRpYScpLmZpbmQoJ2xpW2NsYXNzIT1cImdhbGxlcnlib3hcIl0nKSk7XG5cdFx0XHRcdGlmIChDQUwuc2V0dGluZ3MuZWRpdHBhZ2VzKSB7XG5cdFx0XHRcdFx0Y29uc3QgJHBhZ2VzOiBKUXVlcnk8SFRNTExJRWxlbWVudD4gPSB0aGlzLiRib2R5XG5cdFx0XHRcdFx0XHQuZmluZCgnZGl2I213LXBhZ2VzLCBkaXYjbXctc3ViY2F0ZWdvcmllcycpXG5cdFx0XHRcdFx0XHQuZmluZCgnbGknKTtcblx0XHRcdFx0XHRDQUwuJGxhYmVscyA9IENBTC4kbGFiZWxzLmFkZCgkcGFnZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgbWFrZUNsaWNrYWJsZSgpOiB2b2lkIHtcblx0XHRcdHRoaXMuZmluZEFsbExhYmVscygpO1xuXHRcdFx0Q0FMLiRsYWJlbHMuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTCkub25DYXRBTG90U2hpZnRDbGljaygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHRoaXMudXBkYXRlU2VsZWN0aW9uQ291bnRlcigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBydW4oKTogdm9pZCB7XG5cdFx0XHRpZiAodGhpcy4kbGluay5oYXNDbGFzcyhDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCkpIHtcblx0XHRcdFx0dGhpcy5tYWtlQ2xpY2thYmxlKCk7XG5cdFx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIuc2hvdygpO1xuXHRcdFx0XHR0aGlzLiRjb250YWluZXIucmVzaXphYmxlKHtcblx0XHRcdFx0XHRhbHNvUmVzaXplOiB0aGlzLiRyZXN1bHRMaXN0LFxuXHRcdFx0XHRcdGhhbmRsZXM6ICduJyxcblx0XHRcdFx0XHRyZXNpemU6IChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgJGN1cnJlbnRUYXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0JGN1cnJlbnRUYXJnZXQuY3NzKHtcblx0XHRcdFx0XHRcdFx0bGVmdDogJycsXG5cdFx0XHRcdFx0XHRcdHRvcDogJycsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdENBTC5kaWFsb2dIZWlnaHQgPSAkY3VycmVudFRhcmdldC5oZWlnaHQoKSA/PyBDQUwuZGlhbG9nSGVpZ2h0O1xuXHRcdFx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRtYXhIZWlnaHQ6ICcnLFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogJycsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5jc3MoJ21heC1oZWlnaHQnLCAnNDUwcHgnKTtcblx0XHRcdFx0aWYgKENBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoJ1BpY3R1cmVzIGFuZCBpbWFnZXMnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoQ0FMLkNVUlJFTlRfQ0FURUdST1kpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRkYXRhQ29udGFpbmVyLmhpZGUoKTtcblx0XHRcdFx0dGhpcy4kY29udGFpbmVyLnJlc2l6YWJsZSgnZGVzdHJveScpO1xuXHRcdFx0XHR0aGlzLiRjb250YWluZXIuY3NzKCd3aWR0aCcsICcnKTtcblx0XHRcdFx0Q0FMLiRsYWJlbHMub2ZmKCdjbGljay5jYXRBTG90Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKFxuXHRcdCh3Z05hbWVzcGFjZU51bWJlciA9PT0gLTEgJiYgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdTZWFyY2gnKSB8fFxuXHRcdHdnTmFtZXNwYWNlTnVtYmVyID09PSBPUFRJT05TLnRhcmdldE5hbWVzcGFjZVxuXHQpIHtcblx0XHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IC0xKSB7XG5cdFx0XHRDQUwuaXNTZWFyY2hNb2RlID0gdHJ1ZTtcblx0XHR9XG5cdFx0Q0FMWyd2YXJpYW50Q2FjaGUnXSA9IGdldENhY2hlZEtleXMoKTtcblx0XHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IE9QVElPTlMudGFyZ2V0TmFtZXNwYWNlKSB7XG5cdFx0XHRjb25zdCBjYXRlZ29yeSA9IG13LmNvbmZpZy5nZXQoJ3dnVGl0bGUnKS5yZXBsYWNlKC9eQ2F0ZWdvcnk6LywgJycpO1xuXHRcdFx0Q0FMWyd2YXJpYW50Q2FjaGUnXVtjYXRlZ29yeV0gPSBhd2FpdCBDQUwuZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5KTtcblx0XHR9XG5cdFx0LyohIENhdC1hLWxvdCBtZXNzYWdlcyB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRcdHNldE1lc3NhZ2VzKCk7XG5cdFx0dm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0XHRuZXcgQ0FMKCRib2R5KS5idWlsZEVsZW1lbnRzKCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y2F0QUxvdH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBDYXQtYS1sb3QvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5cbmNvbnN0IGdldENhY2hlZEtleXMgPSAoKSA9PiB7XG5cdGNvbnN0IHZhcmlhbnRDYWNoZTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKFxuXHRcdChtdy5zdG9yYWdlIGFzIHVua25vd24gYXMgU3RvcmFnZSlbJ3N0b3JlJ10gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nW10+XG5cdCkpIHtcblx0XHRpZiAoa2V5LnN0YXJ0c1dpdGgoT1BUSU9OUy5zdG9yYWdlS2V5KSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0Y29uc3QgY2FjaGVLZXkgPSBrZXkucmVwbGFjZShPUFRJT05TLnN0b3JhZ2VLZXksICcnKTtcblx0XHRcdHZhcmlhbnRDYWNoZVtjYWNoZUtleV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHZhcmlhbnRDYWNoZTtcbn07XG5cbmV4cG9ydCB7Z2V0Q2FjaGVkS2V5c307XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FX0xBQkVMLCBDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQsIENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUR9IGZyb20gJy4vY29uc3RhbnQnO1xuXG50eXBlIE9uQ2F0QUxvdFNoaWZ0Q2xpY2sgPSAodGhpczogSlF1ZXJ5LCBjYWxsYmFjazogKCkgPT4gdW5rbm93bikgPT4gSlF1ZXJ5O1xuZGVjbGFyZSBnbG9iYWwge1xuXHRpbnRlcmZhY2UgSlF1ZXJ5IHtcblx0XHRvbkNhdEFMb3RTaGlmdENsaWNrOiBPbkNhdEFMb3RTaGlmdENsaWNrO1xuXHR9XG59XG5cbmNvbnN0IGV4dGVuZEpRdWVyeVByb3RvdHlwZSA9ICgpOiB2b2lkID0+IHtcblx0JC5mbi5leHRlbmQoe1xuXHRcdG9uQ2F0QUxvdFNoaWZ0Q2xpY2s6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0bGV0IHByZXZDaGVja2JveDogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXG5cdFx0XHQvLyBXaGVuIG91ciBib3hlcyBhcmUgY2xpY2tlZC4uXG5cdFx0XHR0aGlzLm9uKCdjbGljay5jYXRBTG90JywgKGV2ZW50OiBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0Ly8gUHJldmVudCBmb2xsb3dpbmcgdGhlIGxpbmsgYW5kIHRleHQgc2VsZWN0aW9uXG5cdFx0XHRcdGlmICghZXZlbnQuY3RybEtleSkge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBIaWdobGlnaHQgbGFzdCBzZWxlY3RlZFxuXHRcdFx0XHR0aGlzLnBhcmVudHMoJ2JvZHknKVxuXHRcdFx0XHRcdC5maW5kKGAuJHtDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUR9YClcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEKTtcblxuXHRcdFx0XHRsZXQgJHRoaXNDb250cm9sID0gJChldmVudC50YXJnZXQpIGFzIEpRdWVyeTtcblx0XHRcdFx0aWYgKCEkdGhpc0NvbnRyb2wuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTCkpIHtcblx0XHRcdFx0XHQkdGhpc0NvbnRyb2wgPSAkdGhpc0NvbnRyb2wucGFyZW50cyhgLiR7Q0xBU1NfTkFNRV9MQUJFTH1gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCR0aGlzQ29udHJvbC5hZGRDbGFzcyhDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQpO1xuXG5cdFx0XHRcdC8vIEFuZCBvbmUgaGFzIGJlZW4gY2xpY2tlZCBiZWZvcmUuLi5cblx0XHRcdFx0aWYgKHByZXZDaGVja2JveCAmJiBldmVudC5zaGlmdEtleSkge1xuXHRcdFx0XHRcdGNvbnN0IG1ldGhvZDogJ2FkZENsYXNzJyB8ICdyZW1vdmVDbGFzcycgPSAkdGhpc0NvbnRyb2wuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRClcblx0XHRcdFx0XHRcdD8gJ2FkZENsYXNzJ1xuXHRcdFx0XHRcdFx0OiAncmVtb3ZlQ2xhc3MnO1xuXHRcdFx0XHRcdC8vIENoZWNrIG9yIHVuY2hlY2sgdGhpcyBvbmUgYW5kIGFsbCBpbi1iZXR3ZWVuIGNoZWNrYm94ZXNcblx0XHRcdFx0XHR0aGlzLnNsaWNlKFxuXHRcdFx0XHRcdFx0TWF0aC5taW4odGhpcy5pbmRleChwcmV2Q2hlY2tib3gpLCB0aGlzLmluZGV4KCR0aGlzQ29udHJvbCkpLFxuXHRcdFx0XHRcdFx0TWF0aC5tYXgodGhpcy5pbmRleChwcmV2Q2hlY2tib3gpLCB0aGlzLmluZGV4KCR0aGlzQ29udHJvbCkpICsgMVxuXHRcdFx0XHRcdClbbWV0aG9kXShDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBFaXRoZXIgd2F5LCB1cGRhdGUgdGhlIHByZXZDaGVja2JveCB2YXJpYWJsZSB0byB0aGUgb25lIGNsaWNrZWQgbm93XG5cdFx0XHRcdHByZXZDaGVja2JveCA9ICR0aGlzQ29udHJvbDtcblxuXHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gYXMgT25DYXRBTG90U2hpZnRDbGljayxcblx0fSk7XG59O1xuXG5leHBvcnQge2V4dGVuZEpRdWVyeVByb3RvdHlwZX07XG4iLCAiaW1wb3J0IHtjYXRBTG90fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2V4dGVuZEpRdWVyeVByb3RvdHlwZX0gZnJvbSAnLi9tb2R1bGVzL2V4dGVuZEpRdWVyeVByb3RvdHlwZSc7XG5cbi8qISBDYXQtYS1sb3QgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cbmV4dGVuZEpRdWVyeVByb3RvdHlwZSgpO1xudm9pZCBjYXRBTG90KCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsU0FBVTtBQUNWLElBQUFDLGtCQUFtQjtBQUNuQixJQUFBQyxVQUFXO0FBQ1gsSUFBQUMsYUFBYzs7QUNEZixJQUFNQyxhQUFxQjtBQUMzQixJQUFNQyx1QkFBQSxHQUFBQyxPQUFrQ0YsWUFBVSxZQUFBO0FBQ2xELElBQU1HLDRCQUFBLEdBQUFELE9BQXVDRCxzQkFBb0IsUUFBQTtBQUNqRSxJQUFNRywwQ0FBQSxHQUFBRixPQUFxREMsMkJBQXlCLGlCQUFBO0FBQ3BGLElBQU1FLGlEQUFBLEdBQUFILE9BQTRERSx5Q0FBdUMsVUFBQTtBQUN6RyxJQUFNRSxtREFBQSxHQUFBSixPQUE4REUseUNBQXVDLFlBQUE7QUFDM0csSUFBTUcseUNBQUEsR0FBQUwsT0FBb0RDLDJCQUF5QixnQkFBQTtBQUNuRixJQUFNSyx5REFBQSxHQUFBTixPQUFvRUMsMkJBQXlCLGlDQUFBO0FBQ25HLElBQU1NLHVDQUFBLEdBQUFQLE9BQWtEQywyQkFBeUIsY0FBQTtBQUNqRixJQUFNTywyQ0FBQSxHQUFBUixPQUFzRE8sc0NBQW9DLE9BQUE7QUFDaEcsSUFBTUUsNENBQUEsR0FBQVQsT0FBdURPLHNDQUFvQyxRQUFBO0FBQ2pHLElBQU1HLDRCQUFBLEdBQUFWLE9BQXVDRCxzQkFBb0IsUUFBQTtBQUNqRSxJQUFNWSxpQ0FBQSxHQUFBWCxPQUE0Q1UsMkJBQXlCLFFBQUE7QUFDM0UsSUFBTUUseUNBQUEsR0FBQVosT0FBb0RXLGdDQUE4QixXQUFBO0FBQ3hGLElBQU1FLDZCQUFBLEdBQUFiLE9BQXdDRixZQUFVLGtCQUFBO0FBQ3hELElBQU1nQixzQkFBQSxHQUFBZCxPQUFpQ0YsWUFBVSxXQUFBO0FBQ2pELElBQU1pQiwyQkFBQSxHQUFBZixPQUFzQ2MscUJBQW1CLFFBQUE7QUFDL0QsSUFBTUUsbUJBQUEsR0FBQWhCLE9BQThCRixZQUFVLFFBQUE7QUFDOUMsSUFBTW1CLHdCQUFBLEdBQUFqQixPQUFtQ2dCLGtCQUFnQixRQUFBO0FBQ3pELElBQU1FLGlDQUFBLEdBQUFsQixPQUE0Q2dCLGtCQUFnQixpQkFBQTtBQUNsRSxJQUFNRyw0QkFBQSxHQUFBbkIsT0FBdUNnQixrQkFBZ0IsWUFBQTtBQUU3RCxJQUFNSSxrQkFBMkI7RUFDaENDLFdBQVc7SUFDVkMsU0FBUztJQUNUQyxZQUFZO0VBQ2I7RUFDQUMsV0FBVztJQUNWRixTQUFTO0lBQ1RDLFlBQVk7RUFDYjtFQUNBRSxPQUFPO0lBQ05ILFNBQVM7SUFDVEMsWUFBWTtFQUNiO0VBQ0FHLGFBQWE7SUFDWkosU0FBUztJQUNUQyxZQUFZO0VBQ2I7RUFDQUksV0FBVztJQUNWTCxTQUFTO0lBQ1RDLFlBQVk7SUFDWkssYUFBYTtNQUNaQyxnQkFBZ0I7TUFDaEJDLFlBQVk7TUFDWkMsZUFBZTtNQUNmQyxhQUFhO0lBQ2Q7RUFDRDtBQUNEO0FBRUEsSUFBTUMsV0FBcUIsQ0FBQyxXQUFXLFdBQVcsU0FBUyxTQUFTLFNBQVMsU0FBUyxTQUFTLE9BQU87O0FDcER0RyxJQUFNO0VBQUNDO0FBQWMsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUV2QyxJQUFNQyxtQkFBbUI7O0VBRXhCLDRCQUE0Qjs7RUFFNUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwyQkFBMkI7O0VBRTNCLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsdUJBQ0M7RUFDRCwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLDZCQUE2Qjs7RUFFN0IscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsNkJBQ0M7RUFDRCwrQkFDQztFQUNELDRCQUNDO0VBQ0Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDJCQUEyQjs7RUFFM0IseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBQzdCO0FBRUEsSUFBTUMsY0FBY0EsTUFBWTtFQUMvQjtBQUNBLE1BQUlMLG1CQUFtQixNQUFNO0FBQzVCO0VBQ0Q7QUFFQSxNQUFJLENBQUMsV0FBVyxTQUFTLFNBQVMsT0FBTyxFQUFFTSxTQUFTTixjQUFjLEdBQUc7QUFDcEVDLE9BQUdNLFNBQVNDLElBQTZCOztNQUV4Qyw0QkFBNEI7O01BRTVCLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLDZCQUE2QjtNQUM3Qix3QkFBd0I7TUFDeEIsb0JBQW9CO01BQ3BCLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsMkJBQTJCOztNQUUzQiwyQkFBMkI7TUFDM0Isd0JBQXdCO01BQ3hCLDRCQUE0QjtNQUM1Qix5QkFBeUI7TUFDekIsMkJBQTJCO01BQzNCLHVCQUNDO01BQ0QsMkJBQTJCO01BQzNCLDJCQUEyQjtNQUMzQiw2QkFBNkI7O01BRTdCLHFCQUFxQjtNQUNyQixxQkFBcUI7TUFDckIsZ0JBQWdCO01BQ2hCLDZCQUE2QjtNQUM3QiwrQkFBK0I7TUFDL0IsNEJBQTRCO01BQzVCLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsdUJBQXVCO01BQ3ZCLHdCQUF3QjtNQUN4Qix1QkFBdUI7TUFDdkIseUJBQXlCO01BQ3pCLDRCQUE0QjtNQUM1QiwyQkFBMkI7O01BRTNCLHlCQUF5QjtNQUN6QiwwQkFBMEI7TUFDMUIsMEJBQTBCO01BQzFCLDRCQUE0QjtJQUM3QixDQUFDO0VBQ0YsT0FBTztBQUNOUCxPQUFHTSxTQUFTQyxJQUE2Qjs7TUFFeEMsNEJBQTRCOztNQUU1QixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQiw2QkFBNkI7TUFDN0Isd0JBQXdCO01BQ3hCLG9CQUFvQjtNQUNwQixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLDJCQUEyQjs7TUFFM0IsMkJBQTJCO01BQzNCLHdCQUF3QjtNQUN4Qiw0QkFBNEI7TUFDNUIseUJBQXlCO01BQ3pCLDJCQUEyQjtNQUMzQix1QkFDQztNQUNELDJCQUEyQjtNQUMzQiwyQkFBMkI7TUFDM0IsNkJBQTZCOztNQUU3QixxQkFBcUI7TUFDckIscUJBQXFCO01BQ3JCLGdCQUFnQjtNQUNoQiw2QkFBNkI7TUFDN0IsK0JBQStCO01BQy9CLDRCQUE0QjtNQUM1QixzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLHVCQUF1QjtNQUN2Qix3QkFBd0I7TUFDeEIsdUJBQXVCO01BQ3ZCLHlCQUF5QjtNQUN6Qiw0QkFBNEI7TUFDNUIsMkJBQTJCOztNQUUzQix5QkFBeUI7TUFDekIsMEJBQTBCO01BQzFCLDBCQUEwQjtNQUMxQiw0QkFBNEI7SUFDN0IsQ0FBQztFQUNGO0FBQ0Q7O0FDN0hBLElBQUFDLHFCQUFtQ0MsUUFBQSxpQkFBQTtBQUNuQyxJQUFBQyxxQkFBa0JDLFFBQUFGLFFBQUEsZ0JBQUEsR0FBQSxDQUFBOztBQzNCbEIsSUFBQUcsb0JBQXdCSCxRQUFBLGlCQUFBO0FBRXhCLElBQU1JLE9BQUEsR0FBY0Qsa0JBQUFFLFdBQUEsYUFBQWpELE9BQStCSixPQUFPLENBQUU7O0FDRDVELElBQU1zRCxnQkFBZ0JBLE1BQU07QUFDM0IsUUFBTUMsZUFBeUMsQ0FBQztBQUNoRCxXQUFBQyxLQUFBLEdBQUFDLGtCQUEyQkMsT0FBT0MsUUFDaENwQixHQUFHcUIsUUFBK0IsT0FBTyxDQUMzQyxHQUFBSixLQUFBQyxnQkFBQUksUUFBQUwsTUFBRztBQUZILFVBQVcsQ0FBQ00sS0FBS0MsS0FBSyxJQUFBTixnQkFBQUQsRUFBQTtBQUdyQixRQUFJTSxJQUFJRSxXQUFtQi9ELFVBQVUsS0FBS2dFLE1BQU1DLFFBQVFILEtBQUssR0FBRztBQUMvRCxZQUFNSSxXQUFXTCxJQUFJTSxRQUFnQm5FLFlBQVksRUFBRTtBQUNuRHNELG1CQUFhWSxRQUFRLElBQUlKO0lBQzFCO0VBQ0Q7QUFDQSxTQUFPUjtBQUNSOztBRm1CQSxJQUFNO0VBQUNjO0VBQTRCQztFQUF1QkM7RUFBZ0JDO0VBQW1CQztBQUFPLElBQUlsQyxHQUFHQyxPQUFPQyxJQUFJO0FBS3RILElBQU1pQyxVQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQVUsYUFBMkI7SUFDMUM7SUFDQSxNQUFNQyxJQUFJO01BQ1QsT0FBY0MsZUFBZTtNQUU3QixPQUF3QkMsV0FBdUNyQztNQUMvRCxPQUF3QmxCLGtCQUEyQkE7TUFFbkQsT0FBd0J3RCxVQUEwQmxGO01BQ2xELE9BQXdCbUYsbUJBQW1DbEY7TUFFM0QsT0FBd0JtRixtQkFBMkJUO01BRW5ELE9BQXdCSCx3QkFBZ0RBO01BQ3hFLE9BQXdCQyxpQkFBeUNBO01BRWpFLE9BQWVZLHFCQUFxQjtNQUVwQyxPQUFjL0IsTUFBTUE7TUFFcEIsT0FBZWdDLGVBQXlCLENBQUE7TUFDeEMsT0FBZUMsa0JBQTRCLENBQUE7TUFDM0MsT0FBZUMsV0FBcUIsQ0FBQTtNQUNwQyxPQUFlQyxpQkFBaUI7TUFDaEMsT0FBZUMsZ0JBQWdCO01BRS9CLE9BQWVDLGFBQWE7TUFDNUIsT0FBZUMsa0JBQWtCO01BRWpDLE9BQWVDLGVBQWU7TUFDOUIsT0FBZUMsWUFBWTtNQUMzQixPQUFlQyxlQUFldkIsc0JBQXNCTyxJQUFJSSxnQkFBZ0I7TUFFeEUsT0FBZWEsYUFBdUIsQ0FBQTtNQUN0QyxPQUFlQyxVQUFvQixDQUFBO01BRW5DLE9BQWVDLFdBQW9ELENBQUM7TUFDcEUsT0FBZXpDLGVBQXlDLENBQUM7TUFFekQsT0FBZTBDLFdBQW1CQyxFQUFFO01BQ3BDLE9BQWVDLGtCQUEwQkQsRUFBRTtNQUMzQyxPQUFlRSxVQUFrQkYsRUFBRTtNQUNuQyxPQUFlRyxrQkFBMEJILEVBQUU7TUFFMUJJO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BRVZDLFlBQVlSLE9BQWdDO0FBQUEsWUFBQVM7QUFDbEQsWUFBSSxDQUFDeEUsR0FBR3lFLFFBQVEsbUJBQW1CLEVBQUVDLE1BQU0sR0FBRztBQUM3QzFFLGFBQUdNLFNBQVNDLElBQUkrQixJQUFJRSxRQUFRO1FBQzdCO0FBRUEsYUFBS3VCLFFBQVFBO0FBQ2J6QixZQUFJcUMsYUFBYTtBQUVqQixjQUFNQyxZQUNMbEUsbUNBQUF2QixRQUFBMEYsY0FBQyxPQUFBO1VBQUlDLFdBQVcsQ0FBQ25ILFlBQVlDLHNCQUFzQixTQUFTO1FBQUEsR0FDM0Q4QyxtQ0FBQXZCLFFBQUEwRixjQUFDLE9BQUE7VUFBSUMsV0FBV2hIO1FBQUEsR0FDZjRDLG1DQUFBdkIsUUFBQTBGLGNBQUMsT0FBQTtVQUFJQyxXQUFXNUc7UUFBQSxDQUF3QyxHQUN4RHdDLG1DQUFBdkIsUUFBQTBGLGNBQUMsT0FBQTtVQUFJQyxXQUFXL0c7UUFBQSxDQUF5QyxHQUN6RDJDLG1DQUFBdkIsUUFBQTBGLGNBQUMsT0FBQSxNQUNBbkUsbUNBQUF2QixRQUFBMEYsY0FBQyxTQUFBO1VBQ0FDLFdBQVczRztVQUNYNEcsYUFBYXpDLElBQUkwQyxJQUFJLFlBQVk7VUFDakNDLE1BQUs7VUFDTHpELE9BQU9jLElBQUlDLGdCQUFBaUMsd0JBQWdCeEUsR0FBR2tGLEtBQUtDLGNBQWMsUUFBUSxPQUFBLFFBQUFYLDBCQUFBLFNBQUFBLHdCQUFLLEtBQU07VUFDcEVZLFdBQVlDLFdBQWdCO0FBQzNCLGtCQUFNQyxXQUFXM0IsRUFBb0IwQixNQUFNRSxhQUFhO0FBQ3hELGdCQUFJRixNQUFNOUQsUUFBUSxTQUFTO0FBQUEsa0JBQUFpRSxvQkFBQUM7QUFDMUIsb0JBQU1DLE9BQUFGLHNCQUFBQyxnQkFBY0gsU0FBU0ssSUFBSSxPQUFBLFFBQUFGLGtCQUFBLFNBQUEsU0FBYkEsY0FBZ0JHLEtBQUssT0FBQSxRQUFBSix1QkFBQSxTQUFBQSxxQkFBSztBQUM5QyxrQkFBSUUsS0FBSztBQUNSLHFCQUFLRyxXQUFXSCxHQUFHO2NBQ3BCO1lBQ0Q7VUFDRDtRQUFBLENBQ0QsQ0FDRCxHQUNBaEYsbUNBQUF2QixRQUFBMEYsY0FBQyxPQUFBO1VBQUlDLFdBQVcxRztRQUFBLEdBQ2QsQ0FBQ2tFLElBQUkwQyxJQUFJLFFBQVEsR0FBRyxHQUFHLEdBQ3hCdEUsbUNBQUF2QixRQUFBMEYsY0FBQyxLQUFBO1VBQ0FDLFdBQVd6RztVQUNYeUgsU0FBU0EsTUFBWTtBQUNwQixpQkFBS0MsVUFBVSxJQUFJO1VBQ3BCO1FBQUEsR0FFQ3pELElBQUkwQyxJQUFJLEtBQUssQ0FDZixHQUNDLE9BQ0R0RSxtQ0FBQXZCLFFBQUEwRixjQUFDLEtBQUE7VUFDQUMsV0FBV3hHO1VBQ1h3SCxTQUFTQSxNQUFZO0FBQ3BCLGlCQUFLQyxVQUFVLEtBQUs7VUFDckI7UUFBQSxHQUVDekQsSUFBSTBDLElBQUksTUFBTSxDQUNoQixDQUNELENBQ0QsR0FDQXRFLG1DQUFBdkIsUUFBQTBGLGNBQUMsT0FBQTtVQUFJQyxXQUFXdkc7UUFBQSxHQUNmbUMsbUNBQUF2QixRQUFBMEYsY0FBQyxLQUFBO1VBQUVDLFdBQVd0RztRQUFBLEdBQWdDLFdBQVMsQ0FDeEQsQ0FDRDtBQUdELGFBQUt3RixhQUFhTCxFQUFFaUIsU0FBUztBQUM3QixhQUFLWixXQUFXZ0MsU0FBUyxLQUFLakMsS0FBSztBQUVuQyxhQUFLRSxpQkFBaUIsS0FBS0QsV0FBV2lDLEtBQUEsSUFBQXBJLE9BQVNDLHlCQUF5QixDQUFFO0FBQzFFLGFBQUtvRyxlQUFlLEtBQUtELGVBQWVnQyxLQUFBLElBQUFwSSxPQUFTSyxzQ0FBc0MsQ0FBRTtBQUN6RixhQUFLaUcsY0FBYyxLQUFLRixlQUFlZ0MsS0FBQSxJQUFBcEksT0FBU0UsdUNBQXVDLENBQUU7QUFDekYsYUFBS3FHLGVBQWUsS0FBS0gsZUFBZWdDLEtBQUEsSUFBQXBJLE9BQ25DTSxzREFBc0QsQ0FDM0Q7QUFFQSxhQUFLa0csUUFBUSxLQUFLTCxXQUFXaUMsS0FBQSxJQUFBcEksT0FBU1UseUJBQXlCLENBQUU7QUFDakUsYUFBSytGLFFBQVEsS0FBS0QsTUFBTTRCLEtBQUEsSUFBQXBJLE9BQTRCVyw4QkFBOEIsQ0FBRTtNQUNyRjtNQUVPMEgsZ0JBQXNCO0FBQzVCLGNBQU1DLFdBQW1CLElBQUlDLE9BQUEsUUFBQXZJLE9BQWV5RSxJQUFJK0QsZUFBZS9ELElBQUlJLGtCQUFrQixVQUFVLEdBQUMsR0FBQSxHQUFLLEVBQUU7QUFDdkcsWUFBSTREO0FBRUosYUFBS2xDLGFBQWFtQyxHQUFHLG9CQUFvQixNQUFNO0FBQzlDRCwrQkFBcUI7UUFDdEIsQ0FBQztBQUVELGFBQUtsQyxhQUFhbUMsR0FBRyxrQkFBa0IsTUFBTTtBQUM1Q0QsK0JBQXFCO1FBQ3RCLENBQUM7QUFFRCxhQUFLbEMsYUFBYW1DLEdBQUcsZUFBZ0JsQixXQUFnQjtBQUNwRCxjQUFJaUIsb0JBQW9CO0FBQ3ZCO1VBQ0Q7QUFDQSxnQkFBTTtZQUFDZjtVQUFhLElBQUlGO0FBQ3hCLGdCQUFNO1lBQUM3RCxPQUFPZ0Y7VUFBTSxJQUFJakI7QUFDeEIsZ0JBQU1rQixTQUFpQkQsT0FBTzNFLFFBQVFzRSxVQUFVLEVBQUU7QUFDbEQsY0FBSU0sV0FBV0QsUUFBUTtBQUN0QmpCLDBCQUFjL0QsUUFBUWlGO1VBQ3ZCO1FBQ0QsQ0FBQztBQUVELGNBQU1DLG1CQUFtQkEsTUFBWTtBQUNwQyxjQUFJcEUsSUFBSU0sb0JBQW9CO0FBQzNCO1VBQ0Q7QUFDQU4sY0FBSU0scUJBQXFCO0FBRXpCLGVBQUt3QixhQUFhdUMsYUFBYTtZQUM5QkMsUUFBUUEsQ0FBQ0MsU0FBeUJDLGFBQWtEO0FBQ25GLG1CQUFLQyxVQUNKO2dCQUNDQyxRQUFRO2dCQUNSQyxXQUFXM0UsSUFBSUk7Z0JBQ2Z3RSxXQUFXO2dCQUNYQyxRQUFRTixRQUFRTztjQUNqQixHQUNDQyxZQUFpQjtBQUNqQixvQkFBSUEsT0FBTyxDQUFDLEdBQUc7QUFDZFAsMkJBQ0NuRCxFQUFFMEQsT0FBTyxDQUFDLENBQUMsRUFBRUMsSUFBSSxDQUFDQyxRQUFRQyxTQUF5QkEsS0FBSzNGLFFBQVFzRSxVQUFVLEVBQUUsQ0FBQyxDQUM5RTtnQkFDRDtjQUNELENBQ0Q7WUFDRDtZQUNBc0IsVUFBVTtjQUNUQyxJQUFJO2NBQ0pDLElBQUk7Y0FDSkMsSUFBSSxLQUFLeEQ7WUFDVjtZQUNBNEIsVUFBQSxJQUFBbkksT0FBY0Qsb0JBQW9CO1VBQ25DLENBQUM7UUFDRjtBQUNBLGFBQUswRyxNQUFNaUMsR0FBRyxTQUFVbEIsV0FBZ0I7QUFDdkMxQixZQUFFMEIsTUFBTUUsYUFBYSxFQUFFc0MsWUFBWXBKLHNDQUFzQztBQUN6RWlJLDJCQUFpQjtBQUNqQixlQUFLb0IsSUFBSTtRQUNWLENBQUM7TUFDRjtNQUVBLE9BQWVuRCxlQUFxQjtBQUFBLFlBQUFvRDtBQUNuQyxZQUFJQyxnQkFBQUQsdUJBQW9DRSxPQUFPQyxrQkFBQSxRQUFBSCx5QkFBQSxTQUFBQSx1QkFBZ0IsQ0FBQztBQUNoRSxjQUFNSSxxQkFBcUIsT0FBT0g7QUFDbEMsWUFBS0csdUJBQXVCLFlBQVksQ0FBQ3pHLE1BQU1DLFFBQVFxRyxZQUFZLEtBQU1HLHVCQUF1QixVQUFVO0FBQ3pHSCx5QkFBZSxDQUFDO1FBQ2pCO0FBRUEsaUJBQUFJLE1BQUEsR0FBQUMsZUFBeUJsSCxPQUFPbUgsS0FBS2hHLElBQUlyRCxlQUFlLEdBQUFtSixNQUFBQyxhQUFBL0csUUFBQThHLE9BQXdCO0FBQUEsY0FBQUc7QUFBaEYsZ0JBQVdDLGFBQUFILGFBQUFELEdBQUE7QUFDVixnQkFBTUssVUFBVW5HLElBQUlyRCxnQkFBZ0J1SixVQUFVO0FBRTlDbEcsY0FBSW1CLFNBQVMrRSxVQUFVLEtBQUFELHdCQUFJUCxhQUFhUSxVQUFVLE9BQUEsUUFBQUQsMEJBQUEsU0FBQUEsd0JBQUtFLFFBQVF0SjtBQUUvRCxjQUFJLENBQUNzSixRQUFRaEosYUFBYTtBQUN6QjtVQUNEO0FBRUFnSixrQkFBUUMsU0FBUyxDQUFDO0FBQ2xCLG1CQUFBQyxNQUFBLEdBQUFDLGdCQUF5QnpILE9BQU9tSCxLQUFLRyxRQUFRaEosV0FBVyxHQUFBa0osTUFBQUMsY0FBQXRILFFBQUFxSCxPQUFHO0FBQTNELGtCQUFXRSxhQUFBRCxjQUFBRCxHQUFBO0FBQ1Ysa0JBQU1sRSxVQUFrQmdFLFFBQVFoSixZQUFZb0osVUFBVTtBQUl0REosb0JBQVFDLE9BQU9wRyxJQUFJMEMsSUFBSTZELFVBQW1CLENBQUMsSUFBSXBFO1VBQ2hEO1FBQ0Q7TUFDRDtNQUVBLE9BQWVPLElBQUl6RCxRQUErRHVILE1BQXdCO0FBQ3pHLGNBQU1DLFVBQUEsYUFBQWxMLE9BQStCMEQsR0FBRztBQUl4QyxlQUFPdUgsS0FBS3hILFNBQVN0QixHQUFHeUUsUUFBUXNFLFNBQVMsR0FBR0QsSUFBSSxFQUFFcEUsTUFBTSxJQUFJMUUsR0FBR3lFLFFBQVFzRSxPQUFPLEVBQUVDLE1BQU07TUFDdkY7TUFDQSxPQUFlM0MsZUFBZTRDLGlCQUF5QkMsVUFBMEI7QUFBQSxZQUFBQztBQUVoRixjQUFNQyxnQkFBd0JDLE9BQU9DLElBQUFDLG9CQUFBQSxrQkFBQUMsdUJBQUEsQ0FBQSw2QkFBQSxHQUFBLENBQUEsK0VBQUEsQ0FBQSxFQUFBO0FBQ3JDLGNBQU1DLGtCQUEwQixJQUFJckQsT0FBT2dELGVBQWUsR0FBRztBQUM3RCxjQUFNTSxpQkFBa0JDLFVBQXFDO0FBQzVELGNBQUksRUFBQ0EsU0FBQSxRQUFBQSxTQUFBLFVBQUFBLEtBQU1ySSxTQUFRO0FBQ2xCLG1CQUFPO1VBQ1I7QUFDQSxjQUFJc0ksWUFBb0I7QUFDeEIsbUJBQVNDLElBQVksR0FBR0EsSUFBSUYsS0FBS3JJLFFBQVF1SSxLQUFLO0FBQzdDLGtCQUFNQyxVQUFrQkgsS0FBS0ksTUFBTUYsR0FBR0EsSUFBSSxDQUFDO0FBQzNDLGtCQUFNRyxLQUFhRixRQUFRRyxZQUFZO0FBQ3ZDLGtCQUFNQyxLQUFhSixRQUFRSyxZQUFZO0FBQ3ZDUCx5QkFBYUksT0FBT0UsS0FBS0osVUFBQSxJQUFBak0sT0FBY21NLEVBQUUsRUFBQW5NLE9BQUdxTSxJQUFFLEdBQUE7VUFDL0M7QUFDQSxpQkFBT04sVUFBVS9ILFFBQVEsbUJBQW1Cd0gsT0FBT0MsSUFBQWMscUJBQUFBLG1CQUFBWix1QkFBQSxDQUFBLElBQUEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxFQUFBLENBQVEsRUFBRTNILFFBQVE0SCxpQkFBaUJMLGFBQWE7UUFDcEc7QUFDQUYsbUJBQVdBLFNBQVNlLFlBQVk7QUFDaEMsY0FBTUksYUFBQWxCLHdCQUFnQzdHLElBQUlQLHNCQUFzQmtILGVBQWUsT0FBQSxRQUFBRSwwQkFBQSxTQUFBLFNBQXpDQSxzQkFBNENjLFlBQVk7QUFDOUYsWUFBSUssY0FBc0JaLGVBQWVXLFNBQVM7QUFDbEQsWUFBSW5CLFlBQVltQixjQUFjbkIsVUFBVTtBQUN2Q29CLHlCQUFBLElBQUF6TSxPQUFtQjZMLGVBQWVSLFFBQVEsQ0FBQztRQUM1QztBQUNBLGlCQUFBcUIsTUFBQSxHQUFBQyxnQkFBc0JySixPQUFPbUgsS0FBS2hHLElBQUlOLGNBQWMsR0FBQXVJLE1BQUFDLGNBQUFsSixRQUFBaUosT0FBRztBQUF2RCxnQkFBV0UsVUFBQUQsY0FBQUQsR0FBQTtBQUNWLGNBQ0NFLFFBQVFSLFlBQVksTUFBTUksYUFDMUJJLFFBQVFSLFlBQVksTUFBTWYsWUFDMUI1RyxJQUFJTixlQUFleUksT0FBTyxNQUFNeEIsaUJBQy9CO0FBQ0RxQiwyQkFBQSxJQUFBek0sT0FBbUI2TCxlQUFlZSxPQUFPLENBQUM7VUFDM0M7UUFDRDtBQUNBLGVBQUEsTUFBQTVNLE9BQWF5TSxhQUFXLEdBQUE7TUFDekI7TUFDUUkseUJBQStCO0FBQ3RDcEksWUFBSXdCLGtCQUFrQnhCLElBQUl1QixRQUFROEcsT0FBQSxJQUFBOU0sT0FBV21CLHlCQUF5QixDQUFFO0FBQ3hFLGFBQUtrRixhQUFhMEcsS0FBSyxFQUFFQyxLQUFLdkksSUFBSTBDLElBQUksa0JBQWtCMUMsSUFBSXdCLGdCQUFnQnhDLE9BQU93SixTQUFTLENBQUMsQ0FBQztNQUMvRjtNQUNRL0UsVUFBVTJDLFFBQXVCO0FBSXhDcEcsWUFBSXVCLFFBQVFnRSxZQUFZN0ksMkJBQTJCMEosTUFBTTtBQUN6RCxhQUFLZ0MsdUJBQXVCO01BQzdCO01BRUEsT0FBb0JLLGdCQUFnQkMsVUFBcUM7QUFBQSxlQUFBM0ksa0JBQUEsYUFBQTtBQUN4RSxjQUFJQyxJQUFJdEIsYUFBYWdLLFFBQVEsTUFBTSxVQUFhdEosTUFBTUMsUUFBUVcsSUFBSXRCLGFBQWFnSyxRQUFRLENBQUMsR0FBRztBQUMxRixtQkFBTzFJLElBQUl0QixhQUFhZ0ssUUFBUTtVQUNqQztBQUNBLGNBQ0NoTCxHQUFHcUIsUUFBUTRKLFVBQWtCdk4sYUFBYXNOLFFBQVEsTUFBTSxVQUN4RHRKLE1BQU1DLFFBQVEzQixHQUFHcUIsUUFBUTRKLFVBQWtCdk4sYUFBYXNOLFFBQVEsQ0FBQyxHQUNoRTtBQUNEMUksZ0JBQUl0QixhQUFhZ0ssUUFBUSxJQUFJaEwsR0FBR3FCLFFBQVE0SixVQUFrQnZOLGFBQWFzTixRQUFRO0FBQy9FLG1CQUFPMUksSUFBSXRCLGFBQWFnSyxRQUFRO1VBQ2pDO0FBQ0EsZ0JBQU1FLFVBQW9CLENBQUNGLFFBQVE7QUFDbkMsZ0JBQU1HLFNBQXlCO1lBQzlCbkUsUUFBUTtZQUNSb0UsUUFBUTtZQUNSQyxlQUFlO1lBQ2ZDLE1BQU1OO1lBQ05PLE9BQU87VUFDUjtBQUNBLG1CQUFBQyxNQUFBLEdBQUFDLFlBQXNCM0wsVUFBQTBMLE1BQUFDLFVBQUFuSyxRQUFBa0ssT0FBVTtBQUFoQyxrQkFBV0UsVUFBQUQsVUFBQUQsR0FBQTtBQUNWLGdCQUFJO0FBQ0gsb0JBQU07Z0JBQUM5RztjQUFLLElBQUEsTUFBVXBDLElBQUl6QixJQUFJWCxJQUFJO2dCQUNqQyxHQUFHaUw7Z0JBQ0hPO2NBQ0QsQ0FBa0I7QUFDbEIsb0JBQU07Z0JBQUNKO2NBQUksSUFBSTVHO0FBQ2Ysb0JBQU0yQyxTQUFTMUQsRUFBRTJILElBQUksRUFBRUssR0FBRyxDQUFDLEVBQUVMLEtBQUssRUFBRTFGLEtBQUs7QUFDekNzRixzQkFBUUEsUUFBUTVKLE1BQU0sSUFBSStGO1lBQzNCLFFBQVE7WUFBQztVQUNWO0FBRUEvRSxjQUFJdEIsYUFBYWdLLFFBQVEsS0FBQSxHQUFJeEssbUJBQUFvTCxhQUFZVixPQUFPO0FBQ2hEbEwsYUFBR3FCLFFBQVF3SyxVQUFrQm5PLGFBQWFzTixVQUFVMUksSUFBSXRCLGFBQWFnSyxRQUFRLEdBQUcsS0FBSyxLQUFLLEVBQUU7QUFDNUYsaUJBQU8xSSxJQUFJdEIsYUFBYWdLLFFBQVE7UUFBQSxDQUFBLEVBQUE7TUFDakM7TUFFQSxPQUFxQmMsYUFBYWQsVUFBbUM7QUFBQSxlQUFBM0ksa0JBQUEsYUFBQTtBQUVwRSxnQkFBTW9JLFVBQWtCbkksSUFBSStELGVBQWUvRCxJQUFJSSxrQkFBa0IsVUFBVTtBQUUzRXNJLHFCQUFXQSxTQUFTbkosUUFBUSxXQUFXLEVBQUUsRUFBRUEsUUFBUSxXQUFXLEVBQUU7QUFFaEUsZ0JBQU1rSyxXQUFBLE1BQTJCekosSUFBSXlJLGdCQUFnQkMsUUFBUTtBQUU3RCxnQkFBTWdCLGlCQUEyQixDQUFBO0FBQUMsY0FBQUMsYUFBQUMsMkJBQ2RILFFBQUEsR0FBQUk7QUFBQSxjQUFBO0FBQXBCLGlCQUFBRixXQUFBRyxFQUFBLEdBQUEsRUFBQUQsU0FBQUYsV0FBQUksRUFBQSxHQUFBQyxRQUE4QjtBQUFBLGtCQUFyQlosVUFBQVMsT0FBQTNLO0FBQ1JrSyx3QkFBVTFMLEdBQUdrRixLQUFLcUgsYUFBYWIsT0FBTztBQUV0Q0Esd0JBQVVBLFFBQVE3SixRQUFRLFdBQVd3SCxPQUFPQyxJQUFBa0QscUJBQUFBLG1CQUFBaEQsdUJBQUEsQ0FBQSxPQUFBLEdBQUEsQ0FBQSxTQUFBLENBQUEsRUFBQSxDQUFXO0FBRXZELG9CQUFNaUQsUUFBZ0JmLFFBQVEzQixNQUFNLEdBQUcsQ0FBQztBQUN4QyxrQkFBSTBDLE1BQU10QyxZQUFZLE1BQU1zQyxNQUFNeEMsWUFBWSxHQUFHO0FBQ2hEeUIsMEJBQUEsSUFBQTdOLE9BQWM0TyxNQUFNdEMsWUFBWSxDQUFDLEVBQUF0TSxPQUFHNE8sTUFBTXhDLFlBQVksR0FBQyxHQUFBLEVBQUFwTSxPQUFJNk4sUUFBUTNCLE1BQU0sQ0FBQyxDQUFDO2NBQzVFO0FBQ0FpQyw2QkFBZUEsZUFBZTFLLE1BQU0sSUFBSW9LO1lBQ3pDO1VBQUEsU0FBQWdCLEtBQUE7QUFBQVQsdUJBQUFVLEVBQUFELEdBQUE7VUFBQSxVQUFBO0FBQUFULHVCQUFBVyxFQUFBO1VBQUE7QUFHQSxpQkFBTyxJQUFJeEcsT0FBQSxnQkFBQXZJLE9BQ000TSxTQUFPLG9CQUFBLEVBQUE1TSxPQUFxQm1PLGVBQWVhLEtBQzFELEdBQ0QsR0FBQyw0Q0FBQSxHQUNELEdBQ0Q7UUFBQSxDQUFBLEVBQUE7TUFDRDtNQUVROUYsVUFDUCtGLFNBT0FDLFVBQ0M7QUFDRCxjQUFNNUIsU0FBUzJCO0FBSWYzQixlQUFPLFFBQVEsSUFBSTtBQUNuQkEsZUFBTyxlQUFlLElBQUk7QUFDMUIsWUFBSXRCLElBQVk7QUFDaEIsY0FBTW1ELFNBQVNBLE1BQVk7QUFDMUIsZ0JBQU1DLGNBQWVDLFdBQXdCO0FBQzVDbE4sZUFBR21OLElBQUlELE1BQU0sMkJBQTJCQSxLQUFLO0FBQzdDLGdCQUFJckQsSUFBSSxHQUFHO0FBQ1Z1RCx5QkFBV0osUUFBUSxHQUFHO0FBQ3RCbkQ7WUFDRCxXQUFXc0IsT0FBTyxPQUFPLEdBQUc7QUFDM0I3SSxrQkFBSVEsZ0JBQWdCUixJQUFJUSxnQkFBZ0J4QixNQUFNLElBQUk2SixPQUFPLE9BQU87QUFDaEUsbUJBQUtrQyxjQUFjO1lBQ3BCO1VBQ0Q7QUFDQSxjQUFJbEMsT0FBTyxRQUFRLE1BQU0sU0FBUztBQUNqQzdJLGdCQUFJekIsSUFBSVgsSUFBSWlMLE1BQU0sRUFBRW1DLEtBQUtQLFFBQVEsRUFBRVEsTUFBTU4sV0FBVztVQUNyRCxPQUFPO0FBQ04zSyxnQkFBSXpCLElBQUkyTSxLQUFLckMsTUFBTSxFQUFFbUMsS0FBS1AsUUFBUSxFQUFFUSxNQUFNTixXQUFXO1VBQ3REO1FBQ0Q7QUFDQUQsZUFBTztNQUNSO01BRUEsT0FBZVMsV0FDZEMsY0FDQUMsZ0JBQ0FDLE1BQ087QUFDUEYscUJBQWFHLFNBQVMvTyxxQkFBcUI7QUFFM0MsZ0JBQVE4TyxNQUFBO1VBQ1AsS0FBSztBQUNKRix5QkFBYUksT0FDWnBOLG1DQUFBdkIsUUFBQTBGLGNBQUFuRSxtQkFBQXZCLFFBQUE0TyxVQUFBLE1BQ0NyTixtQ0FBQXZCLFFBQUEwRixjQUFDLE1BQUEsSUFBRyxHQUNIdkMsSUFBSTBDLElBQUksYUFBYTJJLGNBQWMsQ0FDckMsQ0FDRDtBQUNBO1VBQ0QsS0FBSztBQUNKRCx5QkFBYUksT0FDWnBOLG1DQUFBdkIsUUFBQTBGLGNBQUFuRSxtQkFBQXZCLFFBQUE0TyxVQUFBLE1BQ0NyTixtQ0FBQXZCLFFBQUEwRixjQUFDLE1BQUEsSUFBRyxHQUNIdkMsSUFBSTBDLElBQUksY0FBYzJJLGNBQWMsQ0FDdEMsQ0FDRDtBQUNBO1VBQ0QsS0FBSztBQUNKRCx5QkFBYUksT0FDWnBOLG1DQUFBdkIsUUFBQTBGLGNBQUFuRSxtQkFBQXZCLFFBQUE0TyxVQUFBLE1BQ0NyTixtQ0FBQXZCLFFBQUEwRixjQUFDLE1BQUEsSUFBRyxHQUNIdkMsSUFBSTBDLElBQUksYUFBYTJJLGNBQWMsQ0FDckMsQ0FDRDtBQUNBO1VBQ0QsS0FBSztBQUNKRCx5QkFBYUksT0FDWnBOLG1DQUFBdkIsUUFBQTBGLGNBQUFuRSxtQkFBQXZCLFFBQUE0TyxVQUFBLE1BQ0NyTixtQ0FBQXZCLFFBQUEwRixjQUFDLE1BQUEsSUFBRyxHQUNIdkMsSUFBSTBDLElBQUksZUFBZTJJLGNBQWMsQ0FDdkMsQ0FDRDtBQUNBO1FBQ0Y7TUFDRDtNQUNBLE9BQWVLLFVBQVUxQyxNQUFzQjtBQUM5QyxlQUFPaEosSUFBSW1CLFNBQVN2RSxZQUFZb00sS0FBS3pKLFFBQVEseUNBQXlDLEVBQUUsSUFBSXlKO01BQzdGOztNQUNBLE9BQWUyQyxZQUFZM0MsTUFBc0I7QUFDaEQsZUFBT0EsS0FBS3pKLFFBQVEsMENBQTBDLEVBQUU7TUFDakU7TUFDUXFNLGdCQUFzQjtBQUM3QixhQUFLbkssTUFBTW9LLElBQUk7VUFDZEMsUUFBUTtVQUNSQyxVQUFVO1FBQ1gsQ0FBQztBQUNELGFBQUt0SyxNQUFNa0MsS0FBQSxJQUFBcEksT0FBU2MsbUJBQW1CLENBQUUsRUFBRWtQLFNBQVNqUCx3QkFBd0I7QUFFNUUsY0FBTTBQLFVBQWtCaE0sSUFBSW9CLFNBQVM2SyxPQUFPO0FBQzVDRCxnQkFBUXpELEtBQUtuSyxtQ0FBQXZCLFFBQUEwRixjQUFDLE1BQUEsTUFBSXZDLElBQUkwQyxJQUFJLE1BQU0sQ0FBRSxDQUFLO0FBQ3ZDc0osZ0JBQVFSLE9BQ1BwTixtQ0FBQXZCLFFBQUEwRixjQUFBbkUsbUJBQUF2QixRQUFBNE8sVUFBQSxNQUNFekwsSUFBSTBDLElBQUksVUFBVSxHQUNuQnRFLG1DQUFBdkIsUUFBQTBGLGNBQUMsTUFBQSxJQUFHLENBQ0wsQ0FDRDtBQUVBeUosZ0JBQVFSLE9BQ1BwTixtQ0FBQXZCLFFBQUEwRixjQUFDLEtBQUE7VUFDQWlCLFNBQVNBLE1BQVk7QUFDcEJ4RCxnQkFBSXNCLGdCQUFnQjRLLE9BQU87QUFDM0IsaUJBQUt6SSxVQUFVLEtBQUs7VUFDckI7UUFBQSxHQUVDekQsSUFBSTBDLElBQUksZ0JBQWdCLENBQzFCLENBQ0Q7QUFFQSxZQUFJMUMsSUFBSU8sYUFBYXZCLFFBQVE7QUFDNUJnTixrQkFBUVIsT0FDUHBOLG1DQUFBdkIsUUFBQTBGLGNBQUFuRSxtQkFBQXZCLFFBQUE0TyxVQUFBLE1BQ0NyTixtQ0FBQXZCLFFBQUEwRixjQUFDLE1BQUEsTUFBSXZDLElBQUkwQyxJQUFJLG1CQUFtQjFDLElBQUlPLGFBQWF2QixPQUFPd0osU0FBUyxDQUFDLENBQUUsR0FDbkV4SSxJQUFJTyxhQUFhNEwsT0FDakIsQ0FBQ0MsS0FBS0MsS0FBS0MsVUFDVkEsUUFBUXRNLElBQUlPLGFBQWF2QixTQUFTLElBQUksQ0FBQyxHQUFHb04sS0FBS0MsS0FBS2pPLG1DQUFBdkIsUUFBQTBGLGNBQUMsTUFBQTtZQUFHdEQsS0FBS3FOO1VBQUEsQ0FBTyxDQUFFLElBQUksQ0FBQyxHQUFHRixLQUFLQyxHQUFHLEdBQ3ZGLENBQUEsQ0FDRCxDQUNELENBQ0Q7UUFDRDtBQUNBLFlBQUlyTSxJQUFJUyxTQUFTekIsUUFBUTtBQUN4QmdOLGtCQUFRUixPQUNQcE4sbUNBQUF2QixRQUFBMEYsY0FBQW5FLG1CQUFBdkIsUUFBQTRPLFVBQUEsTUFDQ3JOLG1DQUFBdkIsUUFBQTBGLGNBQUMsTUFBQSxNQUFJdkMsSUFBSTBDLElBQUkscUJBQXFCMUMsSUFBSVMsU0FBU3pCLE9BQU93SixTQUFTLENBQUMsQ0FBRSxHQUNqRXhJLElBQUlTLFNBQVMwTCxPQUNiLENBQUNDLEtBQUtDLEtBQUtDLFVBQ1ZBLFFBQVF0TSxJQUFJUyxTQUFTekIsU0FBUyxJQUFJLENBQUMsR0FBR29OLEtBQUtDLEtBQUtqTyxtQ0FBQXZCLFFBQUEwRixjQUFDLE1BQUE7WUFBR3RELEtBQUtxTjtVQUFBLENBQU8sQ0FBRSxJQUFJLENBQUMsR0FBR0YsS0FBS0MsR0FBRyxHQUNuRixDQUFBLENBQ0QsQ0FDRCxDQUNEO1FBQ0Q7QUFDQSxZQUFJck0sSUFBSVEsZ0JBQWdCeEIsUUFBUTtBQUMvQmdOLGtCQUFRUixPQUNQcE4sbUNBQUF2QixRQUFBMEYsY0FBQW5FLG1CQUFBdkIsUUFBQTRPLFVBQUEsTUFDQ3JOLG1DQUFBdkIsUUFBQTBGLGNBQUMsTUFBQSxNQUFJdkMsSUFBSTBDLElBQUksa0JBQWtCMUMsSUFBSVEsZ0JBQWdCeEIsT0FBT3dKLFNBQVMsQ0FBQyxDQUFFLEdBQ3JFeEksSUFBSVEsZ0JBQWdCMkwsT0FDcEIsQ0FBQ0MsS0FBS0MsS0FBS0MsVUFDVkEsUUFBUXRNLElBQUlRLGdCQUFnQnhCLFNBQVMsSUFDbEMsQ0FBQyxHQUFHb04sS0FBS0MsS0FBS2pPLG1DQUFBdkIsUUFBQTBGLGNBQUMsTUFBQTtZQUFHdEQsS0FBS3FOO1VBQUEsQ0FBTyxDQUFFLElBQ2hDLENBQUMsR0FBR0YsS0FBS0MsR0FBRyxHQUNoQixDQUFBLENBQ0QsQ0FDRCxDQUNEO1FBQ0Q7TUFDRDtNQUNRdEIsZ0JBQXNCO0FBQzdCL0ssWUFBSVU7QUFDSixZQUFJVixJQUFJVSxpQkFBaUJWLElBQUlXLGVBQWU7QUFDM0MsZUFBS2lMLGNBQWM7UUFDcEIsT0FBTztBQUNONUwsY0FBSW9CLFNBQVM0SCxLQUFLaEosSUFBSVUsY0FBYztRQUNyQztNQUNEO01BQ2M2TCxlQUVieEgsUUFDQXlILGFBQ0FuQixnQkFDQUMsTUFDZ0I7QUFBQSxZQUFBbUIsUUFBQTtBQUFBLGVBQUExTSxrQkFBQSxhQUFBO0FBQUEsY0FBQTJNO0FBQ2hCLGdCQUFNLENBQUNDLGtCQUFrQnZCLFlBQVksSUFBSW9CO0FBRXpDLGNBQUksRUFBQ3pILFdBQUEsUUFBQUEsV0FBQSxVQUFBQSxPQUFTLE9BQU8sSUFBRztBQUN2Qi9FLGdCQUFJUSxnQkFBZ0JSLElBQUlRLGdCQUFnQnhCLE1BQU0sSUFBSTJOO0FBQ2xERixrQkFBSzFCLGNBQWM7QUFDbkI7VUFDRDtBQUVBLGNBQUk2QixhQUFxQjtBQUN6QixjQUFJQyxpQkFBeUI7QUFDN0IsY0FBSUMsWUFBb0I7QUFDeEI5TSxjQUFJZSxZQUFZZ0UsT0FBTyxPQUFPLEVBQUVnSSxPQUFPQztBQUN2QyxnQkFBTTtZQUFDQztVQUFLLElBQUlsSSxPQUFPLE9BQU87QUFFOUIsZ0JBQU0sQ0FBQ21JLElBQUksSUFBSUQ7QUFDZkwsdUJBQWFNLFNBQUEsUUFBQUEsU0FBQSxXQUFBUixrQkFBQVEsS0FBTUMsZUFBQSxRQUFBVCxvQkFBQSxTQUFBLFNBQU5BLGdCQUFrQixDQUFDLEVBQUVVLE1BQU1DLEtBQUtDO0FBQzdDLFdBQUM7WUFBQ1Q7VUFBYyxJQUFJSztBQUNwQixXQUFDO1lBQUNKO1VBQVMsQ0FBQyxJQUFJSSxLQUFLQztBQUVyQixnQkFBTUksWUFBb0J2TixJQUFJSztBQUU5QixnQkFBTW1OLGNBQUEsTUFBb0J4TixJQUFJd0osYUFBYTZCLGNBQWM7QUFDekQsY0FBSUMsU0FBUyxZQUFZa0MsWUFBWUMsS0FBS2IsVUFBVSxLQUFLdEIsU0FBUyxRQUFRO0FBQ3pFdEwsZ0JBQUlPLGFBQWFQLElBQUlPLGFBQWF2QixNQUFNLElBQUkyTjtBQUM1Q0Ysa0JBQUsxQixjQUFjO0FBQ25CO1VBQ0Q7QUFHQSxjQUFJL0IsT0FBZTREO0FBQ25CLGNBQUljO0FBQ0osZ0JBQU1DLGtCQUFBLE1BQXdCM04sSUFBSXdKLGFBQWErRCxTQUFTO0FBQ3hELGtCQUFRakMsTUFBQTtZQUNQLEtBQUs7QUFDSnRDLHNCQUFBLE9BQUF6TixPQUFleUUsSUFBSWdCLGNBQVksR0FBQSxFQUFBekYsT0FBSThQLGdCQUFjLE1BQUE7QUFDakRxQyx3QkFBVTFOLElBQUkwQyxJQUFJLGFBQWEsRUFBRW5ELFFBQVEsTUFBTThMLGNBQWM7QUFDN0Q7WUFDRCxLQUFLO0FBQ0pyQyxxQkFBT0EsS0FBS3pKLFFBQ1hvTyxpQkFBQSxLQUFBcFMsT0FDS3lFLElBQUlnQixjQUFZLEdBQUEsRUFBQXpGLE9BQUlnUyxXQUFTLFVBQUEsRUFBQWhTLE9BQVd5RSxJQUFJZ0IsY0FBWSxHQUFBLEVBQUF6RixPQUFJOFAsZ0JBQWMsTUFBQSxDQUNoRjtBQUNBcUMsd0JBQVUxTixJQUFJMEMsSUFBSSxjQUFjLEVBQUVuRCxRQUFRLE1BQU1nTyxTQUFTLEVBQUVoTyxRQUFRLE1BQU04TCxjQUFjO0FBRXZGLGtCQUFJdUIsZUFBZTVELE1BQU07QUFDeEJBLHdCQUFBLE9BQUF6TixPQUFleUUsSUFBSWdCLGNBQVksR0FBQSxFQUFBekYsT0FBSThQLGdCQUFjLElBQUE7Y0FDbEQ7QUFDQTtZQUNELEtBQUs7QUFDSnJDLHFCQUFPQSxLQUFLekosUUFBUW9PLGlCQUFBLEtBQUFwUyxPQUFzQnlFLElBQUlnQixjQUFZLEdBQUEsRUFBQXpGLE9BQUk4UCxnQkFBYyxNQUFBLENBQU07QUFDbEZxQyx3QkFBVTFOLElBQUkwQyxJQUFJLGNBQWMsRUFBRW5ELFFBQVEsTUFBTWdPLFNBQVMsRUFBRWhPLFFBQVEsTUFBTThMLGNBQWM7QUFDdkY7WUFDRCxLQUFLO0FBQ0pyQyxxQkFBT0EsS0FBS3pKLFFBQVFvTyxpQkFBaUIsRUFBRTtBQUN2Q0Qsd0JBQVUxTixJQUFJMEMsSUFBSSxnQkFBZ0IsRUFBRW5ELFFBQVEsTUFBTWdPLFNBQVM7QUFDM0Q7VUFDRjtBQUVBLGNBQUl2RSxTQUFTNEQsWUFBWTtBQUN4QjVNLGdCQUFJUyxTQUFTVCxJQUFJUyxTQUFTekIsTUFBTSxJQUFJMk47QUFDcENGLGtCQUFLMUIsY0FBYztBQUNuQjtVQUNEO0FBSUEsY0FBSU8sU0FBUyxVQUFVO0FBQ3RCdEMsbUJBQU9oSixJQUFJMEwsVUFBVTFMLElBQUkyTCxZQUFZM0MsSUFBSSxDQUFDO1VBQzNDO0FBRUF5RCxnQkFBS2hJLFVBQ0o7WUFDQ0MsUUFBUTtZQUNSa0osT0FBTzVOLElBQUllO1lBQ1g4TSxNQUFNN04sSUFBSUc7WUFDVjhJLE9BQU8wRDtZQUNQbUIsUUFBUTtZQUNSQyxLQUFLO1lBQ0xDLGVBQWVsQjtZQUNmNVAsV0FBVzhDLElBQUltQixTQUFTakU7WUFDeEI4TDtZQUNBMEU7WUFDQWI7VUFDRCxHQUNBLE1BQVk7QUFDWEosa0JBQUsxQixjQUFjO1VBQ3BCLENBQ0Q7QUFFQS9LLGNBQUltTCxXQUFXQyxjQUFjQyxnQkFBZ0JDLElBQUk7UUFBQSxDQUFBLEVBQUE7TUFDbEQ7TUFDUTJDLFdBQ1B6QixhQUNBbkIsZ0JBQ0FDLE1BQ087QUFDUCxhQUFLN0csVUFDSjtVQUNDQyxRQUFRO1VBQ1JxRSxlQUFlO1VBQ2ZtRixNQUFNO1VBQ05DLFFBQVEzQixZQUFZLENBQUM7VUFDckI0QixNQUFNO1VBQ05DLFFBQVEsQ0FBQyxXQUFXLFdBQVc7VUFDL0JDLFNBQVM7UUFDVixHQUNDdkosWUFBaUI7QUFFakIsZUFBSyxLQUFLd0gsZUFBZXhILFFBQVF5SCxhQUFhbkIsZ0JBQWdCQyxJQUFJO1FBQ25FLENBQ0Q7TUFDRDtNQUNBLE9BQWVpRCxpQkFBaUJDLE1BQWtDO0FBQ2pFLFlBQUk7QUFBQSxjQUFBQyx1QkFBQUM7QUFDSCxtQkFBQUQseUJBQUFDLHlCQUFRQyxtQkFBbUJILFNBQUEsUUFBQUEsU0FBQSxTQUFBQSxPQUFRLEVBQUUsRUFBRUksTUFBTSxzQkFBc0IsT0FBQSxRQUFBRiwyQkFBQSxTQUFBLFNBQTNEQSx1QkFBK0QsQ0FBQyxPQUFBLFFBQUFELDBCQUFBLFNBQUFBLHdCQUFLLElBQUlsUCxRQUFRLE1BQU0sR0FBRztRQUNuRyxRQUFRO0FBQ1AsaUJBQU87UUFDUjtNQUNEO01BQ1FzUCxrQkFBc0M7QUFDN0MsY0FBTUMsZUFBd0QsQ0FBQTtBQUM5RDlPLFlBQUl3QixrQkFBa0J4QixJQUFJdUIsUUFBUThHLE9BQUEsSUFBQTlNLE9BQVdtQix5QkFBeUIsQ0FBRTtBQUN4RXNELFlBQUl3QixnQkFBZ0J1TixLQUFLLENBQUM5SixRQUFRK0osVUFBZ0I7QUFBQSxjQUFBQztBQUNqRCxnQkFBTUMsU0FBaUI3TixFQUFFMk4sS0FBSztBQUM5QixnQkFBTUcsYUFBcUJELE9BQU92TCxLQUFLLG1DQUFtQztBQUMxRSxnQkFBTXNGLFVBQ0xnRyxtQkFBQUUsV0FBV0MsS0FBSyxPQUFPLE9BQUEsUUFBQUgscUJBQUEsU0FBQSxTQUF2QkEsaUJBQTBCM0wsS0FBSyxNQUMvQnRELElBQUl1TyxpQkFBaUJZLFdBQVdDLEtBQUssTUFBTSxDQUFDLEtBQzVDcFAsSUFBSXVPLGlCQUFpQlcsT0FBT3ZMLEtBQUssNEJBQTRCLEVBQUV5TCxLQUFLLE1BQU0sQ0FBQztBQUM1RU4sdUJBQWFBLGFBQWE5UCxNQUFNLElBQUksQ0FBQ2lLLE9BQU9pRyxNQUFNO1FBQ25ELENBQUM7QUFDRCxlQUFPSjtNQUNSO01BQ1FPLGVBQXFCO0FBQzVCLGFBQUs1TixNQUFNb0ssSUFBSTtVQUNkQyxRQUFRO1VBQ1JDLFVBQVU7UUFDWCxDQUFDO0FBQ0QvTCxZQUFJc0Isa0JBQWtCRCxFQUNyQmpELG1DQUFBdkIsUUFBQTBGLGNBQUMsT0FBQSxNQUNDdkMsSUFBSTBDLElBQUksU0FBUyxHQUNsQnRFLG1DQUFBdkIsUUFBQTBGLGNBQUMsUUFBQTtVQUFLQyxXQUFXcEc7UUFBQSxHQUE2QjRELElBQUlVLGNBQWUsR0FDaEUsQ0FBQ1YsSUFBSTBDLElBQUksSUFBSSxHQUFHMUMsSUFBSVcsYUFBYSxDQUNuQyxDQUNELEVBQUUyTyxPQUFPO1VBQ1JDLGFBQWFsVDtVQUNibVQsV0FBVztVQUNYQyxRQUFRO1VBQ1JDLE9BQU87VUFDUEMsT0FBTztVQUNQQyxlQUFlO1VBQ2ZDLFdBQVc7VUFDWEMsV0FBVztRQUNaLENBQUM7QUFDRCxhQUFLck8sTUFBTWtDLEtBQUEsSUFBQXBJLE9BQVNjLHFCQUFtQixzQkFBQSxDQUFzQixFQUFFMFQsS0FBSztBQUNwRSxhQUFLdE8sTUFBTWtDLEtBQUEsSUFBQXBJLE9BQVNjLHFCQUFtQixxQkFBQSxDQUFxQixFQUFFb1QsT0FBTyxNQUFNO0FBQzNFelAsWUFBSW9CLFdBQVcsS0FBS0ssTUFBTWtDLEtBQUEsSUFBQXBJLE9BQVNhLDBCQUEwQixDQUFFO01BQ2hFO01BQ1E0VCxZQUFZM0UsZ0JBQXdCQyxNQUFxQztBQUNoRixjQUFNd0QsZUFBd0QsS0FBS0QsZ0JBQWdCO0FBQ25GLFlBQUksQ0FBQ0MsYUFBYTlQLFFBQVE7QUFDekIsZUFBS3RCLEdBQUd1UyxPQUFPalEsSUFBSTBDLElBQUksZUFBZSxHQUFHO1lBQ3hDd04sS0FBSztVQUNOLENBQUM7QUFDRDtRQUNEO0FBQ0FsUSxZQUFJTyxlQUFlLENBQUE7QUFDbkJQLFlBQUlRLGtCQUFrQixDQUFBO0FBQ3RCUixZQUFJUyxXQUFXLENBQUE7QUFDZlQsWUFBSVUsaUJBQWlCO0FBQ3JCVixZQUFJVyxnQkFBZ0JtTyxhQUFhOVA7QUFDakMsYUFBS3FRLGFBQWE7QUFBQSxZQUFBYyxhQUFBdkcsMkJBQ1FrRixZQUFBLEdBQUFzQjtBQUFBLFlBQUE7QUFBMUIsZUFBQUQsV0FBQXJHLEVBQUEsR0FBQSxFQUFBc0csU0FBQUQsV0FBQXBHLEVBQUEsR0FBQUMsUUFBd0M7QUFBQSxrQkFBN0J3QyxjQUFBNEQsT0FBQWxSO0FBQ1YsaUJBQUsrTyxXQUFXekIsYUFBYW5CLGdCQUFnQkMsSUFBSTtVQUNsRDtRQUFBLFNBQUFsQixLQUFBO0FBQUErRixxQkFBQTlGLEVBQUFELEdBQUE7UUFBQSxVQUFBO0FBQUErRixxQkFBQTdGLEVBQUE7UUFBQTtNQUNEO01BQ1ErRixRQUFRaEYsZ0JBQThCO0FBQzdDLGFBQUsyRSxZQUFZM0UsZ0JBQWdCLEtBQUs7TUFDdkM7TUFDUWlGLFNBQVNqRixnQkFBOEI7QUFDOUMsYUFBSzJFLFlBQVkzRSxnQkFBZ0IsTUFBTTtNQUN4QztNQUNRa0YsU0FBU2xGLGdCQUE4QjtBQUM5QyxhQUFLMkUsWUFBWTNFLGdCQUFnQixNQUFNO01BQ3hDO01BQ1FtRixlQUFlQyxRQUFnQkMsWUFBNEI7QUFDbEVBLG1CQUFXQyxLQUFLO0FBQUEsWUFBQUMsYUFBQWhILDJCQUNPOEcsVUFBQSxHQUFBRztBQUFBLFlBQUE7QUFBdkIsZUFBQUQsV0FBQTlHLEVBQUEsR0FBQSxFQUFBK0csU0FBQUQsV0FBQTdHLEVBQUEsR0FBQUMsUUFBbUM7QUFBQSxrQkFBeEJ0QixXQUFBbUksT0FBQTNSO0FBQ1Ysa0JBQU00UixNQUFNelAsRUFDWGpELG1DQUFBdkIsUUFBQTBGLGNBQUMsTUFBQTtjQUFHd08sU0FBUztnQkFBQ3JJO2NBQVE7WUFBQSxHQUNyQnRLLG1DQUFBdkIsUUFBQTBGLGNBQUMsTUFBQSxNQUFJa08sTUFBTyxHQUNaclMsbUNBQUF2QixRQUFBMEYsY0FBQyxNQUFBLE1BQ0FuRSxtQ0FBQXZCLFFBQUEwRixjQUFDLEtBQUE7Y0FDQWlCLFNBQVVULFdBQWdCO0FBQ3pCLHNCQUFNQyxXQUFXM0IsRUFBRTBCLE1BQU1FLGFBQWE7QUFDdEMscUJBQUtNLFdBQVdQLFNBQVNnTyxRQUFRLElBQUksRUFBRUMsS0FBSyxVQUFVLENBQVc7Y0FDbEU7WUFBQSxHQUVDdkksUUFDRixDQUNELENBQ0QsQ0FDRDtBQUVBLGdCQUFJQSxhQUFhMUksSUFBSUssb0JBQW9CTCxJQUFJQyxjQUFjO0FBQzFENlEsa0JBQUl0RixPQUNIcE4sbUNBQUF2QixRQUFBMEYsY0FBQyxNQUFBLE1BQ0FuRSxtQ0FBQXZCLFFBQUEwRixjQUFDLEtBQUE7Z0JBQ0FDLFdBQVc5RztnQkFDWDhILFNBQVVULFdBQWdCO0FBQ3pCLHdCQUFNQyxXQUFXM0IsRUFBRTBCLE1BQU1FLGFBQWE7QUFDdEMsdUJBQUtvTixRQUFRck4sU0FBU2dPLFFBQVEsSUFBSSxFQUFFQyxLQUFLLFVBQVUsQ0FBVztnQkFDL0Q7Y0FBQSxHQUVDalIsSUFBSTBDLElBQUksS0FBSyxDQUNmLENBQ0QsQ0FDRDtZQUNELFdBQVdnRyxhQUFhMUksSUFBSUssb0JBQW9CLENBQUNMLElBQUlDLGNBQWM7QUFDbEU2USxrQkFBSXRGLE9BQ0hwTixtQ0FBQXZCLFFBQUEwRixjQUFBbkUsbUJBQUF2QixRQUFBNE8sVUFBQSxNQUNDck4sbUNBQUF2QixRQUFBMEYsY0FBQyxNQUFBLE1BQ0FuRSxtQ0FBQXZCLFFBQUEwRixjQUFDLEtBQUE7Z0JBQ0FDLFdBQVc5RztnQkFDWDhILFNBQVVULFdBQWdCO0FBQ3pCLHdCQUFNQyxXQUFXM0IsRUFBRTBCLE1BQU1FLGFBQWE7QUFDdEMsdUJBQUtxTixTQUFTdE4sU0FBU2dPLFFBQVEsSUFBSSxFQUFFQyxLQUFLLFVBQVUsQ0FBVztnQkFDaEU7Y0FBQSxHQUVDalIsSUFBSTBDLElBQUksTUFBTSxDQUNoQixDQUNELEdBQ0F0RSxtQ0FBQXZCLFFBQUEwRixjQUFDLE1BQUEsTUFDQW5FLG1DQUFBdkIsUUFBQTBGLGNBQUMsS0FBQTtnQkFDQUMsV0FBVzlHO2dCQUNYOEgsU0FBVVQsV0FBZ0I7QUFDekIsd0JBQU1DLFdBQVczQixFQUFFMEIsTUFBTUUsYUFBYTtBQUN0Qyx1QkFBS3NOLFNBQVN2TixTQUFTZ08sUUFBUSxJQUFJLEVBQUVDLEtBQUssVUFBVSxDQUFXO2dCQUNoRTtjQUFBLEdBRUNqUixJQUFJMEMsSUFBSSxNQUFNLENBQ2hCLENBQ0QsQ0FDRCxDQUNEO1lBQ0Q7QUFDQSxpQkFBS2IsWUFBWThCLEtBQUssT0FBTyxFQUFFNkgsT0FBT3NGLEdBQUc7VUFDMUM7UUFBQSxTQUFBMUcsS0FBQTtBQUFBd0cscUJBQUF2RyxFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBd0cscUJBQUF0RyxFQUFBO1FBQUE7TUFDRDtNQUNRNEcsbUJBQXlCO0FBQUEsWUFBQUMsdUJBQUFDO0FBQ2hDLGFBQUszUCxNQUFNb0ssSUFBSSxVQUFVLEVBQUU7QUFDM0IsY0FBTXdGLG9CQUE4QixDQUFDclIsSUFBSWEsZUFBZTtBQUN4RCxhQUFLZ0IsWUFBWXlQLE1BQU07QUFDdkIsYUFBS3pQLFlBQVkySixPQUFPcE4sbUNBQUF2QixRQUFBMEYsY0FBQyxTQUFBLElBQU0sQ0FBRTtBQUNqQyxhQUFLaU8sZUFBZSxLQUFLeFEsSUFBSWlCLFVBQVU7QUFDdkMsYUFBS3VQLGVBQWUsS0FBS2EsaUJBQWlCO0FBQzFDLGFBQUtiLGVBQWUsS0FBS3hRLElBQUlrQixPQUFPO0FBRXBDLGFBQUtRLFdBQVdnTyxNQUFNLEVBQUU7QUFDeEIsYUFBS2hPLFdBQVcrTixPQUFPLEVBQUU7QUFDekIsYUFBSy9OLFdBQVdnTyxNQUFNNkIsS0FBS0MsTUFBQUwsd0JBQUssS0FBS3pQLFdBQVdnTyxNQUFNLE9BQUEsUUFBQXlCLDBCQUFBLFNBQUFBLHdCQUFLLEtBQUssTUFBTSxNQUFBQyxXQUFLL1AsRUFBRXNFLE1BQU0sRUFBRStKLE1BQU0sT0FBQSxRQUFBMEIsYUFBQSxTQUFBQSxXQUFLLEtBQUssRUFBRSxDQUFDO0FBQ3hHLGFBQUt2UCxZQUFZZ0ssSUFBSTtVQUNwQixjQUFBLEdBQUF0USxPQUFpQnlFLElBQUljLGNBQVksSUFBQTtVQUNqQzJPLFFBQVE7UUFDVCxDQUFDO01BQ0Y7TUFDUWdDLGdCQUFzQjtBQUM3QixhQUFLaE4sVUFDSjtVQUNDQyxRQUFRO1VBQ1J5SixRQUFBLFlBQUE1UyxPQUFvQnlFLElBQUlhLGVBQWU7VUFDdkN1TixNQUFNO1FBQ1AsR0FDQ3JKLFlBQWlCO0FBQUEsY0FBQTJNLFNBQUFDO0FBQ2pCLGNBQUksQ0FBQzVNLFFBQVE7QUFDWjtVQUNEO0FBQ0EvRSxjQUFJaUIsYUFBYSxDQUFBO0FBQ2pCLGdCQUFNO1lBQUNnTTtVQUFLLElBQUlsSSxPQUFPNk07QUFDdkIsZUFBQUYsVUFBSXpFLE1BQU0sQ0FBQyxPQUFBLFFBQUF5RSxZQUFBLFVBQVBBLFFBQVVHLFNBQVM7QUFDdEIsaUJBQUtwUSxNQUFNb0ssSUFBSSxVQUFVLEVBQUU7QUFDM0IsaUJBQUtoSyxZQUFZMEcsS0FDaEJuSyxtQ0FBQXZCLFFBQUEwRixjQUFDLFFBQUE7Y0FBS0MsV0FBVzdHO1lBQUEsR0FDZnFFLElBQUkwQyxJQUFJLGVBQWUsQ0FDekIsQ0FDRDtBQUNBLGlCQUFLOE4sZUFBZSxLQUFLLENBQUN4USxJQUFJYSxlQUFlLENBQUM7QUFDOUM7VUFDRDtBQUNBLGNBQUk2UCxhQUFnQyxDQUFBO0FBQ3BDLGVBQUFpQixXQUFJMUUsTUFBTSxDQUFDLE9BQUEsUUFBQTBFLGFBQUEsVUFBUEEsU0FBVWpCLFlBQVk7QUFDekIsYUFBQztjQUFDQTtZQUFVLENBQUMsSUFBSXpEO1VBQ2xCO0FBQUEsY0FBQTZFLGFBQUFsSSwyQkFDa0I4RyxVQUFBLEdBQUFxQjtBQUFBLGNBQUE7QUFBbEIsaUJBQUFELFdBQUFoSSxFQUFBLEdBQUEsRUFBQWlJLFNBQUFELFdBQUEvSCxFQUFBLEdBQUFDLFFBQThCO0FBQUEsb0JBQW5CNUcsTUFBQTJPLE9BQUE3UztBQUNWLG9CQUFNOFMsV0FBVzVPLElBQUk2RixNQUFNMUosUUFBUSxXQUFXLEVBQUU7QUFDaERTLGtCQUFJaUIsV0FBV2pCLElBQUlpQixXQUFXakMsTUFBTSxJQUFJZ1Q7WUFDekM7VUFBQSxTQUFBNUgsS0FBQTtBQUFBMEgsdUJBQUF6SCxFQUFBRCxHQUFBO1VBQUEsVUFBQTtBQUFBMEgsdUJBQUF4SCxFQUFBO1VBQUE7QUFDQXRLLGNBQUlZO0FBQ0osY0FBSVosSUFBSVksZUFBZSxHQUFHO0FBQ3pCLGlCQUFLc1EsaUJBQWlCO1VBQ3ZCO1FBQ0QsQ0FDRDtNQUNEO01BQ1FlLGFBQW1CO0FBQzFCLGFBQUt4TixVQUNKO1VBQ0NDLFFBQVE7VUFDUndOLE1BQU07VUFDTkMsUUFBUTtVQUNSQyxTQUFTcFMsSUFBSW1CLFNBQVNsRTtVQUN0Qm9WLFNBQUEsWUFBQTlXLE9BQXFCeUUsSUFBSWEsZUFBZTtRQUN6QyxHQUNDa0UsWUFBaUI7QUFBQSxjQUFBdU47QUFDakIsZ0JBQU1DLFFBQTBCeE4sV0FBQSxRQUFBQSxXQUFBLFdBQUF1TixnQkFBQXZOLE9BQVE2TSxXQUFBLFFBQUFVLGtCQUFBLFNBQUEsU0FBUkEsY0FBZUUsb0JBQW1CLENBQUE7QUFDbEV4UyxjQUFJa0IsVUFBVSxDQUFBO0FBQUMsY0FBQXVSLGFBQUE3SSwyQkFDRzJJLElBQUEsR0FBQUc7QUFBQSxjQUFBO0FBQWxCLGlCQUFBRCxXQUFBM0ksRUFBQSxHQUFBLEVBQUE0SSxTQUFBRCxXQUFBMUksRUFBQSxHQUFBQyxRQUF3QjtBQUFBLG9CQUFiNUcsTUFBQXNQLE9BQUF4VDtBQUNWLG9CQUFNOFMsV0FBVzVPLElBQUk2RixNQUFNMUosUUFBUSxXQUFXLEVBQUU7QUFDaERTLGtCQUFJa0IsUUFBUWxCLElBQUlrQixRQUFRbEMsTUFBTSxJQUFJZ1Q7WUFDbkM7VUFBQSxTQUFBNUgsS0FBQTtBQUFBcUksdUJBQUFwSSxFQUFBRCxHQUFBO1VBQUEsVUFBQTtBQUFBcUksdUJBQUFuSSxFQUFBO1VBQUE7QUFDQXRLLGNBQUlZO0FBQ0osY0FBSVosSUFBSVksZUFBZSxHQUFHO0FBQ3pCLGlCQUFLc1EsaUJBQWlCO1VBQ3ZCO1FBQ0QsQ0FDRDtNQUNEO01BQ1F5QixrQkFBd0I7QUFDL0IzUyxZQUFJWSxhQUFhO0FBQ2pCLGFBQUs2USxjQUFjO0FBQ25CLGFBQUtRLFdBQVc7TUFDakI7TUFDUTFPLFdBQVdILEtBQW1CO0FBQ3JDLGFBQUszQixNQUFNb0ssSUFBSSxVQUFVLE1BQU07QUFDL0I3TCxZQUFJYSxrQkFBa0J1QztBQUN0QixhQUFLdkIsWUFBWTBHLEtBQUtuSyxtQ0FBQXZCLFFBQUEwRixjQUFDLE9BQUEsTUFBS3ZDLElBQUkwQyxJQUFJLFNBQVMsQ0FBRSxDQUFNO0FBQ3JELGFBQUtpUSxnQkFBZ0I7TUFDdEI7TUFFUUMsZ0JBQXNCO0FBRTdCLFlBQUk1UyxJQUFJQyxjQUFjO0FBQ3JCRCxjQUFJdUIsVUFBVSxLQUFLRSxNQUFNa0MsS0FBSyx5QkFBeUIsRUFBRUEsS0FBSyxPQUFPLEVBQUUwRixHQUFHLENBQUM7QUFDM0UsY0FBSXJKLElBQUltQixTQUFTcEUsV0FBVztBQUMzQmlELGdCQUFJdUIsVUFBVXZCLElBQUl1QixRQUFRc1IsSUFBSSw4QkFBOEI7VUFDN0Q7UUFDRCxPQUFPO0FBQ043UyxjQUFJdUIsVUFBVSxLQUFLRSxNQUNqQmtDLEtBQUssaUJBQWlCLEVBQ3RCa1AsSUFBSSxLQUFLcFIsTUFBTWtDLEtBQUssdUJBQXVCLEVBQUVBLEtBQUsseUJBQXlCLENBQUM7QUFDOUUsY0FBSTNELElBQUltQixTQUFTcEUsV0FBVztBQUMzQixrQkFBTStWLFNBQWdDLEtBQUtyUixNQUN6Q2tDLEtBQUssb0NBQW9DLEVBQ3pDQSxLQUFLLElBQUk7QUFDWDNELGdCQUFJdUIsVUFBVXZCLElBQUl1QixRQUFRc1IsSUFBSUMsTUFBTTtVQUNyQztRQUNEO01BQ0Q7TUFDUUMsZ0JBQXNCO0FBQzdCLGFBQUtILGNBQWM7QUFDbkI1UyxZQUFJdUIsUUFBUWdLLFNBQVNoUCxnQkFBZ0IsRUFBRXlXLG9CQUFvQixNQUFZO0FBQ3RFLGVBQUs1Syx1QkFBdUI7UUFDN0IsQ0FBQztNQUNGO01BRVE1QyxNQUFZO0FBQ25CLFlBQUksS0FBS3hELE1BQU1pUixTQUFTOVcsc0NBQXNDLEdBQUc7QUFDaEUsZUFBSzRXLGNBQWM7QUFDbkIsZUFBS3BSLGVBQWUyRyxLQUFLO0FBQ3pCLGVBQUs1RyxXQUFXb08sVUFBVTtZQUN6Qm9ELFlBQVksS0FBS3JSO1lBQ2pCc1IsU0FBUztZQUNUQyxRQUFTclEsV0FBZ0I7QUFBQSxrQkFBQXNRO0FBQ3hCLG9CQUFNQyxpQkFBaUJqUyxFQUFFMEIsTUFBTUUsYUFBYTtBQUM1Q3FRLDZCQUFlekgsSUFBSTtnQkFDbEIwSCxNQUFNO2dCQUNOQyxLQUFLO2NBQ04sQ0FBQztBQUNEeFQsa0JBQUljLGdCQUFBdVMsd0JBQWVDLGVBQWU3RCxPQUFPLE9BQUEsUUFBQTRELDBCQUFBLFNBQUFBLHdCQUFLclQsSUFBSWM7QUFDbEQsbUJBQUtlLFlBQVlnSyxJQUFJO2dCQUNwQjRILFdBQVc7Z0JBQ1gvRCxPQUFPO2NBQ1IsQ0FBQztZQUNGO1VBQ0QsQ0FBQztBQUNELGVBQUs3TixZQUFZZ0ssSUFBSSxjQUFjLE9BQU87QUFDMUMsY0FBSTdMLElBQUlDLGNBQWM7QUFDckIsaUJBQUtzRCxXQUFXLHFCQUFxQjtVQUN0QyxPQUFPO0FBQ04saUJBQUtBLFdBQVd2RCxJQUFJSyxnQkFBZ0I7VUFDckM7UUFDRCxPQUFPO0FBQ04sZUFBS3NCLGVBQWVvTyxLQUFLO0FBQ3pCLGVBQUtyTyxXQUFXb08sVUFBVSxTQUFTO0FBQ25DLGVBQUtwTyxXQUFXbUssSUFBSSxTQUFTLEVBQUU7QUFDL0I3TCxjQUFJdUIsUUFBUW1TLElBQUksZUFBZTtRQUNoQztNQUNEO0lBQ0Q7QUFFQSxRQUNFL1Qsc0JBQXNCLE1BQU1ILCtCQUErQixZQUM1REcsc0JBQThCekUsaUJBQzdCO0FBQ0QsVUFBSXlFLHNCQUFzQixJQUFJO0FBQzdCSyxZQUFJQyxlQUFlO01BQ3BCO0FBQ0FELFVBQUksY0FBYyxJQUFJdkIsY0FBYztBQUNwQyxVQUFJa0Isc0JBQThCekUsaUJBQWlCO0FBQ2xELGNBQU13TixXQUFXaEwsR0FBR0MsT0FBT0MsSUFBSSxTQUFTLEVBQUUyQixRQUFRLGNBQWMsRUFBRTtBQUNsRVMsWUFBSSxjQUFjLEVBQUUwSSxRQUFRLElBQUEsTUFBVTFJLElBQUl5SSxnQkFBZ0JDLFFBQVE7TUFDbkU7TUFDQTtBQUNBNUssa0JBQVk7QUFDWixZQUFBLEdBQUtJLG1CQUFBeVYsU0FBUSxFQUFFM0ksS0FBTXZKLFdBQXlDO0FBQzdELFlBQUl6QixJQUFJeUIsS0FBSyxFQUFFbUMsY0FBYztNQUM5QixDQUFDO0lBQ0Y7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQXI1Qk0vRCxXQUFBO0FBQUEsV0FBQUMsS0FBQThULE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUc1Qk4sSUFBTUMsd0JBQXdCQSxNQUFZO0FBQ3pDelMsSUFBRTBTLEdBQUdDLE9BQU87SUFDWGhCLHFCQUFxQixTQUFVdkksVUFBVTtBQUN4QyxVQUFJd0o7QUFHSixXQUFLaFEsR0FBRyxpQkFBa0JsQixXQUF1QztBQUVoRSxZQUFJLENBQUNBLE1BQU1tUixTQUFTO0FBQ25CblIsZ0JBQU1vUixlQUFlO1FBQ3RCO0FBR0EsYUFBS0MsUUFBUSxNQUFNLEVBQ2pCelEsS0FBQSxJQUFBcEksT0FBU2tCLDhCQUE4QixDQUFFLEVBQ3pDNFgsWUFBWTVYLDhCQUE4QjtBQUU1QyxZQUFJNlgsZUFBZWpULEVBQUUwQixNQUFNd1IsTUFBTTtBQUNqQyxZQUFJLENBQUNELGFBQWFyQixTQUFTMVcsZ0JBQWdCLEdBQUc7QUFDN0MrWCx5QkFBZUEsYUFBYUYsUUFBQSxJQUFBN1ksT0FBWWdCLGdCQUFnQixDQUFFO1FBQzNEO0FBRUErWCxxQkFBYS9JLFNBQVM5Tyw4QkFBOEIsRUFBRThJLFlBQVk3SSx5QkFBeUI7QUFHM0YsWUFBSXVYLGdCQUFnQmxSLE1BQU15UixVQUFVO0FBQ25DLGdCQUFNQyxTQUFxQ0gsYUFBYXJCLFNBQVN2Vyx5QkFBeUIsSUFDdkYsYUFDQTtBQUVILGVBQUsrSyxNQUNKOEosS0FBS0MsSUFBSSxLQUFLbEYsTUFBTTJILFlBQVksR0FBRyxLQUFLM0gsTUFBTWdJLFlBQVksQ0FBQyxHQUMzRC9DLEtBQUttRCxJQUFJLEtBQUtwSSxNQUFNMkgsWUFBWSxHQUFHLEtBQUszSCxNQUFNZ0ksWUFBWSxDQUFDLElBQUksQ0FDaEUsRUFBRUcsTUFBTSxFQUFFL1gseUJBQXlCO1FBQ3BDO0FBRUF1WCx1QkFBZUs7QUFFZixZQUFJLE9BQU83SixhQUFhLFlBQVk7QUFDbkNBLG1CQUFTO1FBQ1Y7TUFDRCxDQUFDO0FBRUQsYUFBTztJQUNSO0VBQ0QsQ0FBQztBQUNGOztBQ3BEQTtBQUNBcUosc0JBQXNCO0FBQ3RCLEtBQUtqVSxRQUFROyIsCiAgIm5hbWVzIjogWyJhcGlUYWciLCAidGFyZ2V0TmFtZXNwYWNlIiwgInZlcnNpb24iLCAic3RvcmFnZUtleSIsICJDTEFTU19OQU1FIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSIiwgImNvbmNhdCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUiIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19BTEwiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkUiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTksiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQiLCAiQ0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIiLCAiQ0xBU1NfTkFNRV9GRUVEQkFDSyIsICJDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUiLCAiQ0xBU1NfTkFNRV9MQUJFTCIsICJDTEFTU19OQU1FX0xBQkVMX0RPTkUiLCAiQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEIiwgIkNMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQiLCAiREVGQVVMVF9TRVRUSU5HIiwgImRvY2xlYW51cCIsICJkZWZhdWx0IiwgImxhYmVsX2kxOG4iLCAiZWRpdHBhZ2VzIiwgIm1pbm9yIiwgInN1YmNhdGNvdW50IiwgIndhdGNobGlzdCIsICJzZWxlY3RfaTE4biIsICJ3YXRjaF9ub2NoYW5nZSIsICJ3YXRjaF9wcmVmIiwgIndhdGNoX3Vud2F0Y2giLCAid2F0Y2hfd2F0Y2giLCAiVkFSSUFOVFMiLCAid2dVc2VyTGFuZ3VhZ2UiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJERUZBVUxUX01FU1NBR0VTIiwgInNldE1lc3NhZ2VzIiwgImluY2x1ZGVzIiwgIm1lc3NhZ2VzIiwgInNldCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImdldENhY2hlZEtleXMiLCAidmFyaWFudENhY2hlIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJzdG9yYWdlIiwgImxlbmd0aCIsICJrZXkiLCAidmFsdWUiLCAic3RhcnRzV2l0aCIsICJBcnJheSIsICJpc0FycmF5IiwgImNhY2hlS2V5IiwgInJlcGxhY2UiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dGb3JtYXR0ZWROYW1lc3BhY2VzIiwgIndnTmFtZXNwYWNlSWRzIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnVGl0bGUiLCAiY2F0QUxvdCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIkNBTCIsICJpc1NlYXJjaE1vZGUiLCAiTUVTU0FHRVMiLCAiQVBJX1RBRyIsICJUQVJHRVRfTkFNRVNQQUNFIiwgIkNVUlJFTlRfQ0FURUdST1kiLCAiaXNBdXRvQ29tcGxldGVJbml0IiwgImFscmVhZHlUaGVyZSIsICJjb25uZWN0aW9uRXJyb3IiLCAibm90Rm91bmQiLCAiY291bnRlckN1cnJlbnQiLCAiY291bnRlck5lZWRlZCIsICJjb3VudGVyQ2F0IiwgImN1cnJlbnRDYXRlZ29yeSIsICJkaWFsb2dIZWlnaHQiLCAiZWRpdFRva2VuIiwgImxvY2FsQ2F0TmFtZSIsICJwYXJlbnRDYXRzIiwgInN1YkNhdHMiLCAic2V0dGluZ3MiLCAiJGNvdW50ZXIiLCAiJCIsICIkcHJvZ3Jlc3NEaWFsb2ciLCAiJGxhYmVscyIsICIkc2VsZWN0ZWRMYWJlbHMiLCAiJGJvZHkiLCAiJGNvbnRhaW5lciIsICIkZGF0YUNvbnRhaW5lciIsICIkbWFya0NvdW50ZXIiLCAiJHJlc3VsdExpc3QiLCAiJHNlYXJjaElucHV0IiwgIiRoZWFkIiwgIiRsaW5rIiwgImNvbnN0cnVjdG9yIiwgIl9tdyR1dGlsJGdldFBhcmFtVmFsdSIsICJtZXNzYWdlIiwgInBhcnNlIiwgImluaXRTZXR0aW5ncyIsICJjb250YWluZXIiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicGxhY2Vob2xkZXIiLCAibXNnIiwgInR5cGUiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIm9uS2V5RG93biIsICJldmVudCIsICIkZWxlbWVudCIsICJjdXJyZW50VGFyZ2V0IiwgIl8kZWxlbWVudCR2YWwkdHJpbSIsICJfJGVsZW1lbnQkdmFsIiwgImNhdCIsICJ2YWwiLCAidHJpbSIsICJ1cGRhdGVDYXRzIiwgIm9uQ2xpY2siLCAidG9nZ2xlQWxsIiwgImFwcGVuZFRvIiwgImZpbmQiLCAiYnVpbGRFbGVtZW50cyIsICJyZWdleENhdCIsICJSZWdFeHAiLCAibG9jYWxpemVkUmVnZXgiLCAiaXNDb21wb3NpdGlvblN0YXJ0IiwgIm9uIiwgIm9sZFZhbCIsICJuZXdWYWwiLCAiaW5pdEF1dG9jb21wbGV0ZSIsICJhdXRvY29tcGxldGUiLCAic291cmNlIiwgInJlcXVlc3QiLCAicmVzcG9uc2UiLCAiZG9BUElDYWxsIiwgImFjdGlvbiIsICJuYW1lc3BhY2UiLCAicmVkaXJlY3RzIiwgInNlYXJjaCIsICJ0ZXJtIiwgInJlc3VsdCIsICJtYXAiLCAiX2luZGV4IiwgIml0ZW0iLCAicG9zaXRpb24iLCAibXkiLCAiYXQiLCAib2YiLCAidG9nZ2xlQ2xhc3MiLCAicnVuIiwgIl93aW5kb3ckQ2F0QUxvdFByZWZzIiwgImNhdEFMb3RQcmVmcyIsICJ3aW5kb3ciLCAiQ2F0QUxvdFByZWZzIiwgInR5cGVPZkNhdEFMb3RQcmVmcyIsICJfaTIiLCAiX09iamVjdCRrZXlzIiwgImtleXMiLCAiX2NhdEFMb3RQcmVmcyRzZXR0aW5nIiwgInNldHRpbmdLZXkiLCAic2V0dGluZyIsICJzZWxlY3QiLCAiX2kzIiwgIl9PYmplY3Qka2V5czIiLCAibWVzc2FnZUtleSIsICJhcmdzIiwgImZ1bGxLZXkiLCAicGxhaW4iLCAibmFtZXNwYWNlTnVtYmVyIiwgImZhbGxiYWNrIiwgIl9DQUwkd2dGb3JtYXR0ZWROYW1lcyIsICJ3aWtpVGV4dEJsYW5rIiwgIlN0cmluZyIsICJyYXciLCAiX3RlbXBsYXRlT2JqZWN0IiwgIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCAid2lraVRleHRCbGFua1JFIiwgImNyZWF0ZVJlZ2V4U3RyIiwgIm5hbWUiLCAicmVnZXhOYW1lIiwgImkiLCAiaW5pdGlhbCIsICJzbGljZSIsICJsbCIsICJ0b0xvd2VyQ2FzZSIsICJ1bCIsICJ0b1VwcGVyQ2FzZSIsICJfdGVtcGxhdGVPYmplY3QyIiwgImNhbm9uaWNhbCIsICJyZWdleFN0cmluZyIsICJfaTQiLCAiX09iamVjdCRrZXlzMyIsICJjYXROYW1lIiwgInVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIiLCAiZmlsdGVyIiwgInNob3ciLCAiaHRtbCIsICJ0b1N0cmluZyIsICJmaW5kQWxsVmFyaWFudHMiLCAiY2F0ZWdvcnkiLCAiZ2V0T2JqZWN0IiwgInJlc3VsdHMiLCAicGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRleHQiLCAidGl0bGUiLCAiX2k1IiwgIl9WQVJJQU5UUyIsICJ2YXJpYW50IiwgImVxIiwgInVuaXF1ZUFycmF5IiwgInNldE9iamVjdCIsICJyZWdleEJ1aWxkZXIiLCAidmFyaWFudHMiLCAidmFyaWFudFJlZ0V4cHMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZXNjYXBlUmVnRXhwIiwgIl90ZW1wbGF0ZU9iamVjdDMiLCAiZmlyc3QiLCAiZXJyIiwgImUiLCAiZiIsICJqb2luIiwgIl9wYXJhbXMiLCAiY2FsbGJhY2siLCAiZG9DYWxsIiwgImhhbmRsZUVycm9yIiwgImVycm9yIiwgImxvZyIsICJzZXRUaW1lb3V0IiwgInVwZGF0ZUNvdW50ZXIiLCAidGhlbiIsICJjYXRjaCIsICJwb3N0IiwgIm1hcmtBc0RvbmUiLCAiJG1hcmtlZExhYmVsIiwgInRhcmdldENhdGVnb3J5IiwgIm1vZGUiLCAiYWRkQ2xhc3MiLCAiYXBwZW5kIiwgIkZyYWdtZW50IiwgImRvQ2xlYW51cCIsICJyZW1vdmVVbmNhdCIsICJkaXNwbGF5UmVzdWx0IiwgImNzcyIsICJjdXJzb3IiLCAib3ZlcmZsb3ciLCAiJHBhcmVudCIsICJwYXJlbnQiLCAicmVtb3ZlIiwgInJlZHVjZSIsICJwcmUiLCAiY3VyIiwgImluZGV4IiwgImVkaXRDYXRlZ29yaWVzIiwgIm1hcmtlZExhYmVsIiwgIl90aGlzIiwgIl9wYWdlJHJldmlzaW9ucyIsICJtYXJrZWRMYWJlbFRpdGxlIiwgIm9yaWdpblRleHQiLCAic3RhcnR0aW1lc3RhbXAiLCAidGltZXN0YW1wIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAicGFnZXMiLCAicGFnZSIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgInNvdXJjZWNhdCIsICJ0YXJnZVJlZ0V4cCIsICJ0ZXN0IiwgInN1bW1hcnkiLCAic291cmNlQ2F0UmVnRXhwIiwgInRva2VuIiwgInRhZ3MiLCAiYXNzZXJ0IiwgImJvdCIsICJiYXNldGltZXN0YW1wIiwgImdldENvbnRlbnQiLCAibWV0YSIsICJ0aXRsZXMiLCAicHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJnZXRUaXRsZUZyb21MaW5rIiwgImhyZWYiLCAiX2RlY29kZVVSSUNvbXBvbmVudCRtIiwgIl9kZWNvZGVVUklDb21wb25lbnQkbTIiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgIm1hdGNoIiwgImdldE1hcmtlZExhYmVscyIsICJtYXJrZWRMYWJlbHMiLCAiZWFjaCIsICJsYWJlbCIsICJfJGxhYmVsTGluayRhdHRyIiwgIiRsYWJlbCIsICIkbGFiZWxMaW5rIiwgImF0dHIiLCAic2hvd1Byb2dyZXNzIiwgImRpYWxvZyIsICJkaWFsb2dDbGFzcyIsICJtaW5IZWlnaHQiLCAiaGVpZ2h0IiwgIndpZHRoIiwgIm1vZGFsIiwgImNsb3NlT25Fc2NhcGUiLCAiZHJhZ2dhYmxlIiwgInJlc2l6YWJsZSIsICJoaWRlIiwgImRvU29tZXRoaW5nIiwgIm5vdGlmeSIsICJ0YWciLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiYWRkSGVyZSIsICJjb3B5SGVyZSIsICJtb3ZlSGVyZSIsICJjcmVhdGVDYXRMaW5rcyIsICJzeW1ib2wiLCAiY2F0ZWdvcmllcyIsICJzb3J0IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIiR0ciIsICJkYXRhc2V0IiwgImNsb3Nlc3QiLCAiZGF0YSIsICJzaG93Q2F0ZWdvcnlMaXN0IiwgIl90aGlzJCRjb250YWluZXIkd2lkdCIsICJfJCR3aWR0aCIsICJjdXJyZW50Q2F0ZWdvcmllcyIsICJlbXB0eSIsICJNYXRoIiwgIm1pbiIsICJnZXRQYXJlbnRDYXRzIiwgIl9wYWdlcyQiLCAiX3BhZ2VzJDIiLCAicXVlcnkiLCAibWlzc2luZyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJjYXRUaXRsZSIsICJnZXRTdWJDYXRzIiwgImxpc3QiLCAiY210eXBlIiwgImNtbGltaXQiLCAiY210aXRsZSIsICJfcmVzdWx0JHF1ZXJ5IiwgImNhdHMiLCAiY2F0ZWdvcnltZW1iZXJzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImdldENhdGVnb3J5TGlzdCIsICJmaW5kQWxsTGFiZWxzIiwgImFkZCIsICIkcGFnZXMiLCAibWFrZUNsaWNrYWJsZSIsICJvbkNhdEFMb3RTaGlmdENsaWNrIiwgImhhc0NsYXNzIiwgImFsc29SZXNpemUiLCAiaGFuZGxlcyIsICJyZXNpemUiLCAiXyRjdXJyZW50VGFyZ2V0JGhlaWdoIiwgIiRjdXJyZW50VGFyZ2V0IiwgImxlZnQiLCAidG9wIiwgIm1heEhlaWdodCIsICJvZmYiLCAiZ2V0Qm9keSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlIiwgImZuIiwgImV4dGVuZCIsICJwcmV2Q2hlY2tib3giLCAiY3RybEtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJwYXJlbnRzIiwgInJlbW92ZUNsYXNzIiwgIiR0aGlzQ29udHJvbCIsICJ0YXJnZXQiLCAic2hpZnRLZXkiLCAibWV0aG9kIiwgIm1heCJdCn0K
