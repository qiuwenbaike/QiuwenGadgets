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
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
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
    if (key.startsWith(storageKey)) {
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
var catALot = () => {
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
        if (mw.storage.getObject(storageKey + category)) {
          CAL.variantCache[category] = mw.storage.getObject(storageKey + category);
        }
        if (CAL.variantCache[category]) {
          return CAL.variantCache[category];
        }
        const results = [];
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
            void _asyncToGenerator(function* () {
              yield CAL.findAllVariants(catTitle);
            })();
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
            void _asyncToGenerator(function* () {
              yield CAL.findAllVariants(catTitle);
            })();
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
    /*! Cat-a-lot messages | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
    setMessages();
    void (0, import_ext_gadget2.getBody)().then(($body) => {
      new CAL($body).buildElements();
    });
    CAL["variantCache"] = {
      ...CAL["variantCache"],
      ...getCachedKeys()
    };
  }
};
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
catALot();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NhdC1hLWxvdC9vcHRpb25zLmpzb24iLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9DYXQtYS1sb3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvY29yZS50c3giLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZ2V0Q2FjaGVkS2V5cy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlLnRzIiwgInNyYy9DYXQtYS1sb3QvQ2F0LWEtbG90LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiYXBpVGFnXCI6IFwiQ2F0LWEtbG90XCIsXG5cdFwidGFyZ2V0TmFtZXNwYWNlXCI6IDE0LFxuXHRcInZlcnNpb25cIjogXCI2LjBcIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5DYXQtYS1Mb3RfcmVzdWx0cy1cIlxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IHR5cGUge1NldHRpbmd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWNhdF9hX2xvdCc7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tY29udGFpbmVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEE6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9fZGF0YWA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1Q6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19jYXRlZ29yeS1saXN0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT046IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1fX2FjdGlvbmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH0tLW5vLWZvdW5kYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfV9fbWFyay1jb3VudGVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlYXJjaC1pbnB1dC1jb250YWluZXJfX2lucHV0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlbGVjdGlvbnNgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfV9fYWxsYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9X19ub25lYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9faGVhZGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTks6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9X19saW5rYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9LS1lbmFibGVkYDtcbmNvbnN0IENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1jdXJyZW50X2NvdW50ZXJgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDSzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tZmVlZGJhY2tgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0ZFRURCQUNLfS0tZG9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1sYWJlbGA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMX0RPTkU6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1kb25lYDtcbmNvbnN0IENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLWxhc3Qtc2VsZWN0ZWRgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLXNlbGVjdGVkYDtcblxuY29uc3QgREVGQVVMVF9TRVRUSU5HOiBTZXR0aW5nID0ge1xuXHRkb2NsZWFudXA6IHtcblx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHRsYWJlbF9pMThuOiAnZG9jbGVhbnVwcHJlZicsXG5cdH0sXG5cdGVkaXRwYWdlczoge1xuXHRcdGRlZmF1bHQ6IHRydWUsXG5cdFx0bGFiZWxfaTE4bjogJ2VkaXRwYWdlc3ByZWYnLFxuXHR9LFxuXHRtaW5vcjoge1xuXHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdGxhYmVsX2kxOG46ICdtaW5vcnByZWYnLFxuXHR9LFxuXHRzdWJjYXRjb3VudDoge1xuXHRcdGRlZmF1bHQ6IDUwLFxuXHRcdGxhYmVsX2kxOG46ICdzdWJjYXRjb3VudHByZWYnLFxuXHR9LFxuXHR3YXRjaGxpc3Q6IHtcblx0XHRkZWZhdWx0OiAncHJlZmVyZW5jZXMnLFxuXHRcdGxhYmVsX2kxOG46ICd3YXRjaGxpc3RwcmVmJyxcblx0XHRzZWxlY3RfaTE4bjoge1xuXHRcdFx0d2F0Y2hfbm9jaGFuZ2U6ICdub2NoYW5nZScsXG5cdFx0XHR3YXRjaF9wcmVmOiAncHJlZmVyZW5jZXMnLFxuXHRcdFx0d2F0Y2hfdW53YXRjaDogJ3Vud2F0Y2gnLFxuXHRcdFx0d2F0Y2hfd2F0Y2g6ICd3YXRjaCcsXG5cdFx0fSxcblx0fSxcbn07XG5cbmNvbnN0IFZBUklBTlRTOiBzdHJpbmdbXSA9IFsnemgtaGFucycsICd6aC1oYW50JywgJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04sXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCxcblx0Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIsXG5cdENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQsXG5cdENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQsXG5cdERFRkFVTFRfU0VUVElORyxcblx0VkFSSUFOVFMsXG59O1xuIiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgREVGQVVMVF9NRVNTQUdFUyA9IHtcblx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICd7e1BMVVJBTDokMXxPbmUgZmlsZXwkMSBmaWxlc319IHNlbGVjdGVkLicsXG5cdC8vIEFjdGlvbnNcblx0J2NhdC1hLWxvdC1jb3B5JzogJ0NvcHknLFxuXHQnY2F0LWEtbG90LW1vdmUnOiAnTW92ZScsXG5cdCdjYXQtYS1sb3QtYWRkJzogJ0FkZCcsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ1JlbW92ZSBmcm9tIHRoaXMgY2F0ZWdvcnknLFxuXHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAnRW50ZXIgY2F0ZWdvcnkgbmFtZScsXG5cdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ1NlbGVjdCcsXG5cdCdjYXQtYS1sb3QtYWxsJzogJ2FsbCcsXG5cdCdjYXQtYS1sb3Qtbm9uZSc6ICdub25lJyxcblx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ05vIGZpbGVzIHNlbGVjdGVkIScsXG5cdC8vIFByZWZlcmVuY2VzXG5cdCdjYXQtYS1sb3Qtd2F0Y2hsaXN0cHJlZic6ICdXYXRjaGxpc3QgcHJlZmVyZW5jZSBjb25jZXJuaW5nIGZpbGVzIGVkaXRlZCB3aXRoIENhdC1BLUxvdCcsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICdBY2NvcmRpbmcgdG8geW91ciBnZW5lcmFsIHByZWZlcmVuY2VzJyxcblx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICdEbyBub3QgY2hhbmdlIHdhdGNoc3RhdHVzJyxcblx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICdXYXRjaCBwYWdlcyBlZGl0ZWQgd2l0aCBDYXQtQS1Mb3QnLFxuXHQnY2F0LWEtbG90LXdhdGNoX3Vud2F0Y2gnOiAnUmVtb3ZlIHBhZ2VzIHdoaWxlIGVkaXRpbmcgd2l0aCBDYXQtQS1Mb3QgZnJvbSB5b3VyIHdhdGNobGlzdCcsXG5cdCdjYXQtYS1sb3QtbWlub3JwcmVmJzpcblx0XHRcIk1hcmsgZWRpdHMgYXMgbWlub3IgKGlmIHlvdSBnZW5lcmFsbHkgbWFyayB5b3VyIGVkaXRzIGFzIG1pbm9yLCB0aGlzIHdvbid0IGNoYW5nZSBhbnl0aGluZylcIixcblx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ0FsbG93IGNhdGVnb3Jpc2luZyBwYWdlcyAoaW5jbHVkaW5nIGNhdGVnb3JpZXMpIHRoYXQgYXJlIG5vdCBmaWxlcycsXG5cdCdjYXQtYS1sb3QtZG9jbGVhbnVwcHJlZic6ICdSZW1vdmUge3tDaGVjayBjYXRlZ29yaWVzfX0gYW5kIG90aGVyIG1pbm9yIGNsZWFudXAnLFxuXHQnY2F0LWEtbG90LXN1YmNhdGNvdW50cHJlZic6ICdTdWItY2F0ZWdvcmllcyB0byBzaG93IGF0IG1vc3QnLFxuXHQvLyBQcm9ncmVzc1xuXHQnY2F0LWEtbG90LWxvYWRpbmcnOiAnTG9hZGluZy4uLicsXG5cdCdjYXQtYS1sb3QtZWRpdGluZyc6ICdFZGl0aW5nIHBhZ2UnLFxuXHQnY2F0LWEtbG90LW9mJzogJ29mICcsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5Jzpcblx0XHQnVGhlIGZvbGxvd2luZyB7e1BMVVJBTDokMXxwYWdlIHdhc3wkMSBwYWdlcyB3ZXJlfX0gc2tpcHBlZCwgYmVjYXVzZSB0aGUgcGFnZSB3YXMgYWxyZWFkeSBpbiB0aGUgY2F0ZWdvcnk6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLW5vdC1mb3VuZCc6XG5cdFx0J1RoZSBmb2xsb3dpbmcge3tQTFVSQUw6JDF8cGFnZSB3YXN8JDEgcGFnZXMgd2VyZX19IHNraXBwZWQsIGJlY2F1c2UgdGhlIG9sZCBjYXRlZ29yeSBjb3VsZCBub3QgYmUgZm91bmQ6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLXNlcnZlcic6XG5cdFx0XCJUaGUgZm9sbG93aW5nIHt7UExVUkFMOiQxfHBhZ2V8JDEgcGFnZXN9fSBjb3VsZG4ndCBiZSBjaGFuZ2VkLCBzaW5jZSB0aGVyZSB3ZXJlIHByb2JsZW1zIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlcjpcIixcblx0J2NhdC1hLWxvdC1hbGwtZG9uZSc6ICdBbGwgcGFnZXMgYXJlIHByb2Nlc3NlZC4nLFxuXHQnY2F0LWEtbG90LWRvbmUnOiAnRG9uZSEnLFxuXHQnY2F0LWEtbG90LWFkZGVkLWNhdCc6ICdBZGRlZCBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICdDb3BpZWQgdG8gY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LW1vdmVkLWNhdCc6ICdNb3ZlZCB0byBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAnUmVtb3ZlZCBmcm9tIGNhdGVnb3J5ICQxJyxcblx0J2NhdC1hLWxvdC1yZXR1cm4tdG8tcGFnZSc6ICdSZXR1cm4gdG8gcGFnZScsXG5cdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICdDYXRlZ29yeSBub3QgZm91bmQuJyxcblx0Ly8gU3VtbWFyaWVzOlxuXHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IEFkZGluZyBbW0NhdGVnb3J5OiQxXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktY29weSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBDb3B5aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dIHRvIFtbQ2F0ZWdvcnk6JDJdXScsXG5cdCdjYXQtYS1sb3Qtc3VtbWFyeS1tb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IE1vdmluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXSB0byBbW0NhdGVnb3J5OiQyXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IFJlbW92aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dJyxcbn0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXG5jb25zdCBzZXRNZXNzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0LyohIENhdC1hLWxvdCBtZXNzYWdlcyB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRpZiAod2dVc2VyTGFuZ3VhZ2UgPT09ICdlbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0PHR5cGVvZiBERUZBVUxUX01FU1NBR0VTPih7XG5cdFx0XHQvLyBhcyBpbiAxNyBmaWxlcyBzZWxlY3RlZFxuXHRcdFx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICckMeWAi+aWh+S7tuW3sumBuOaThycsXG5cdFx0XHQvLyBBY3Rpb25zXG5cdFx0XHQnY2F0LWEtbG90LWNvcHknOiAn6KSH6KO9Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZSc6ICfnp7vli5UnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGQnOiAn5aKe5YqgJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ+W+nuatpOWIhumhnuenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAn6Ly45YWl5YiG6aGe5ZCN56ixJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ+mBuOaThycsXG5cdFx0XHQnY2F0LWEtbG90LWFsbCc6ICflhajpg6gnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lJzogJ+eEoScsXG5cdFx0XHQnY2F0LWEtbG90LW5vbmUtc2VsZWN0ZWQnOiAn5rKS5pyJ6YG45pOH5paH5Lu277yBJyxcblx0XHRcdC8vIFByZWZlcmVuY2VzXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAn5L2/55SoQ2F0LUEtTG9057eo6Lyv5paH5Lu25pmC55qE55uj6KaW5YiX6KGo6YG46aCFJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICfoiIfns7vntbHlj4PmlbjoqK3nva7nm7jlkIwnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICfkuI3opoHmm7TmlLnnm6Poppbni4DmhYsnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICfnm6Poppbkvb/nlKhDYXQtQS1Mb3Tnt6jovK/nmoTpoIHpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ+Wwh+S9v+eUqENhdC1BLUxvdOe3qOi8r+eahOmggemdouW+nuebo+imluWIl+ihqOenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XHRcdCflsIfnt6jovK/mqJnoqJjniLLlsI/kv67mlLnvvIjoi6XmgqjlnKjns7vntbHlj4PmlbjoqK3nva7kuK3lt7LoqK3nva7lsIfmiYDmnInnt6jovK/mqJnoqJjniLLlsI/kv67mlLnvvIzmraTpgbjpoIXkuI3mnIPlsI3nj77mnInooYzniLLpgLLooYzmlLnli5XvvIknLFxuXHRcdFx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ+WFgeioseWwjeS4jeaYr+aWh+S7tueahOmggemdouWSjOWtkOWIhumhnumAsuihjOWIhumhnuaTjeS9nCcsXG5cdFx0XHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAn56e76Zmke3tDaGVjayBjYXRlZ29yaWVzfX3kuKbpgLLooYzlhbbku5bntLDnr4DmuIXnkIYnLFxuXHRcdFx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAn5pyA5aSa6aGv56S655qE5a2Q5YiG6aGe5pW46YePJyxcblx0XHRcdC8vIFByb2dyZXNzXG5cdFx0XHQnY2F0LWEtbG90LWxvYWRpbmcnOiAn5q2j5Zyo5Yqg6LyJ4oCm4oCmJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdGluZyc6ICfmraPlnKjnt6jovK/poIHpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC1vZic6ICfvvIzlhbHmnIknLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLWFscmVhZHknOiAn5Lul5LiL6aCB6Z2i5bey6Lez6YGO77yM5Zug54iy6aCB6Z2i5bey57aT5Zyo5YiG6aGe5Lit77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOiAn5Lul5LiL6aCB6Z2i5bey6Lez6YGO77yM5Zug54iy5om+5LiN5Yiw54++5pyJ5YiG6aGe77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOiAn5Lul5LiL6aCB6Z2i54Sh5rOV57eo6Lyv77yM5Zug54iy6YCj5o6l5pyN5YuZ5Zmo5Ye66Yyv77yaJyxcblx0XHRcdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAn5YWo6YOo6aCB6Z2i5bey6JmV55CG44CCJyxcblx0XHRcdCdjYXQtYS1sb3QtZG9uZSc6ICflt7LlrozmiJDvvIEnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAn5bey5Yqg5YWl5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICflt7LopIfoo73liLDliIbpoZ4nLFxuXHRcdFx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAn5bey56e75YuV5Yiw5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAn5bey5b6e5YiG6aGe56e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAn6L+U5Zue5Yiw6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICfmib7kuI3liLDliIbpoZ7jgIInLFxuXHRcdFx0Ly8gU3VtbWFyaWVzXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliqDlhaXliIbpoZ5bW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhumhnumWk+ikh+ijve+8muW+nltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5YiG6aGe6ZaT56e75YuV77ya5b6eW1tDYXRlZ29yeTokMV1d5YiwW1tDYXRlZ29yeTokMl1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1yZW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muW+nuWIhumhnuenu+mZpO+8mltbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0PHR5cGVvZiBERUZBVUxUX01FU1NBR0VTPih7XG5cdFx0XHQvLyBhcyBpbiAxNyBmaWxlcyBzZWxlY3RlZFxuXHRcdFx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICflt7LpgInmi6kkMeS4qumhtemdouaIluaWh+S7ticsXG5cdFx0XHQvLyBBY3Rpb25zXG5cdFx0XHQnY2F0LWEtbG90LWNvcHknOiAn5aSN5Yi2Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZSc6ICfnp7vliqgnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGQnOiAn5aKe5YqgJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ+S7juatpOWIhuexu+enu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAn6L6T5YWl5YiG57G75ZCN56ewJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ+mAieaLqScsXG5cdFx0XHQnY2F0LWEtbG90LWFsbCc6ICflhajpg6gnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lJzogJ+aXoCcsXG5cdFx0XHQnY2F0LWEtbG90LW5vbmUtc2VsZWN0ZWQnOiAn5rKh5pyJ6YCJ5oup5Lu75L2V6aG16Z2i5oiW5paH5Lu277yBJyxcblx0XHRcdC8vIFByZWZlcmVuY2VzXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAn5L2/55SoQ2F0LWEtbG9057yW6L6R5paH5Lu25pe255qE55uR6KeG5YiX6KGo6YCJ6aG5Jyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICfkuI7ns7vnu5/lj4LmlbDorr7nva7nm7jlkIwnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICfkuI3opoHmm7TmlLnnm5Hop4bnirbmgIEnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICfnm5Hop4bkvb/nlKhDYXQtYS1sb3TnvJbovpHnmoTpobXpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ+WwhuS9v+eUqENhdC1hLWxvdOe8lui+keeahOmhtemdouS7juebkeinhuWIl+ihqOenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XHRcdCflsIbnvJbovpHmoIforrDkuLrlsI/kv67mlLnvvIjoi6XmgqjlnKjns7vnu5/lj4LmlbDorr7nva7kuK3lt7Lorr7nva7lsIbmiYDmnInnvJbovpHmoIforrDkuLrlsI/kv67mlLnvvIzmraTpgInpobnkuI3kvJrlr7nnjrDmnInooYzkuLrov5vooYzmlLnliqjvvIknLFxuXHRcdFx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ+WFgeiuuOWvueS4jeaYr+aWh+S7tueahOmhtemdouWSjOWtkOWIhuexu+i/m+ihjOWIhuexu+aTjeS9nCcsXG5cdFx0XHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAn56e76Zmke3tDaGVjayBjYXRlZ29yaWVzfX3lubbov5vooYzlhbbku5bnu4boioLmuIXnkIYnLFxuXHRcdFx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAn5pyA5aSa5pi+56S655qE5a2Q5YiG57G75pWw6YePJyxcblx0XHRcdC8vIFByb2dyZXNzXG5cdFx0XHQnY2F0LWEtbG90LWxvYWRpbmcnOiAn5q2j5Zyo5Yqg6L294oCm4oCmJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdGluZyc6ICfmraPlnKjnvJbovpHpobXpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC1vZic6ICfvvIzlhbHmnIknLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLWFscmVhZHknOiAn5Lul5LiL6aG16Z2i5bey6Lez6L+H77yM5Zug5Li66aG16Z2i5bey57uP5Zyo5YiG57G75Lit77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOiAn5Lul5LiL6aG16Z2i5bey6Lez6L+H77yM5Zug5Li65om+5LiN5Yiw546w5pyJ5YiG57G777yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOiAn5Lul5LiL6aG16Z2i5peg5rOV57yW6L6R77yM5Zug5Li66L+e5o6l5pyN5Yqh5Zmo5Ye66ZSZ77yaJyxcblx0XHRcdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAn5YWo6YOo6aG16Z2i5bey5aSE55CG44CCJyxcblx0XHRcdCdjYXQtYS1sb3QtZG9uZSc6ICflt7LlrozmiJDvvIEnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAn5bey5Yqg5YWl5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICflt7LlpI3liLbliLDliIbnsbsnLFxuXHRcdFx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAn5bey56e75Yqo5Yiw5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAn5bey5LuO5YiG57G756e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAn6L+U5Zue5Yiw6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICfmib7kuI3liLDliIbnsbvjgIInLFxuXHRcdFx0Ly8gU3VtbWFyaWVzXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliqDlhaXliIbnsbtbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhuexu+mXtOWkjeWItu+8muS7jltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5YiG57G76Ze056e75Yqo77ya5LuOW1tDYXRlZ29yeTokMV1d5YiwW1tDYXRlZ29yeTokMl1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1yZW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muS7juWIhuexu+enu+mZpO+8mltbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7REVGQVVMVF9NRVNTQUdFUywgc2V0TWVzc2FnZXN9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04sXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCxcblx0Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIsXG5cdENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVELFxuXHRERUZBVUxUX1NFVFRJTkcsXG5cdFZBUklBTlRTLFxufSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7REVGQVVMVF9NRVNTQUdFUywgc2V0TWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuaW1wb3J0IHR5cGUge01lc3NhZ2VLZXksIFNldHRpbmd9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtnZXRCb2R5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRDYWNoZWRLZXlzfSBmcm9tICcuL2dldENhY2hlZEtleXMnO1xuXG5jb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnRm9ybWF0dGVkTmFtZXNwYWNlcywgd2dOYW1lc3BhY2VJZHMsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1RpdGxlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLyoqXG4gKiBDaGFuZ2VzIGNhdGVnb3J5IG9mIG11bHRpcGxlIGZpbGVzXG4gKi9cbmNvbnN0IGNhdEFMb3QgPSAoKTogdm9pZCA9PiB7XG5cdC8qISBDYXQtYS1sb3QgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cblx0Y2xhc3MgQ0FMIHtcblx0XHRwdWJsaWMgc3RhdGljIGlzU2VhcmNoTW9kZSA9IGZhbHNlO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUVTU0FHRVM6IFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+ID0gREVGQVVMVF9NRVNTQUdFUztcblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NFVFRJTkc6IFNldHRpbmcgPSBERUZBVUxUX1NFVFRJTkc7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBBUElfVEFHOiBzdHJpbmcgPSBPUFRJT05TLmFwaVRhZztcblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUQVJHRVRfTkFNRVNQQUNFOiBudW1iZXIgPSBPUFRJT05TLnRhcmdldE5hbWVzcGFjZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENVUlJFTlRfQ0FURUdST1k6IHN0cmluZyA9IHdnVGl0bGU7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXM6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXM7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgd2dOYW1lc3BhY2VJZHM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB3Z05hbWVzcGFjZUlkcztcblxuXHRcdHByaXZhdGUgc3RhdGljIGlzQXV0b0NvbXBsZXRlSW5pdCA9IGZhbHNlO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgYXBpID0gYXBpO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgYWxyZWFkeVRoZXJlOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIGNvbm5lY3Rpb25FcnJvcjogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBub3RGb3VuZDogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBjb3VudGVyQ3VycmVudCA9IDA7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY291bnRlck5lZWRlZCA9IDA7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBjb3VudGVyQ2F0ID0gMDtcblx0XHRwcml2YXRlIHN0YXRpYyBjdXJyZW50Q2F0ZWdvcnkgPSAnJztcblxuXHRcdHByaXZhdGUgc3RhdGljIGRpYWxvZ0hlaWdodCA9IDQ1MDtcblx0XHRwcml2YXRlIHN0YXRpYyBlZGl0VG9rZW4gPSAnJztcblx0XHRwcml2YXRlIHN0YXRpYyBsb2NhbENhdE5hbWUgPSB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXNbQ0FMLlRBUkdFVF9OQU1FU1BBQ0VdIGFzIHN0cmluZztcblxuXHRcdHByaXZhdGUgc3RhdGljIHBhcmVudENhdHM6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgc3ViQ2F0czogc3RyaW5nW10gPSBbXTtcblxuXHRcdHByaXZhdGUgc3RhdGljIHNldHRpbmdzOiBOb25OdWxsYWJsZTx0eXBlb2Ygd2luZG93LkNhdEFMb3RQcmVmcz4gPSB7fTtcblx0XHRwcml2YXRlIHN0YXRpYyB2YXJpYW50Q2FjaGU6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgJGNvdW50ZXI6IEpRdWVyeSA9ICQoKTtcblx0XHRwcml2YXRlIHN0YXRpYyAkcHJvZ3Jlc3NEaWFsb2c6IEpRdWVyeSA9ICQoKTtcblx0XHRwcml2YXRlIHN0YXRpYyAkbGFiZWxzOiBKUXVlcnkgPSAkKCk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgJHNlbGVjdGVkTGFiZWxzOiBKUXVlcnkgPSAkKCk7XG5cblx0XHRwcml2YXRlIHJlYWRvbmx5ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pjtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRjb250YWluZXI6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRkYXRhQ29udGFpbmVyOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkbWFya0NvdW50ZXI6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRyZXN1bHRMaXN0OiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkc2VhcmNoSW5wdXQ6IEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50Pjtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRoZWFkOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkbGluazogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PjtcblxuXHRcdHB1YmxpYyBjb25zdHJ1Y3RvcigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pIHtcblx0XHRcdGlmICghbXcubWVzc2FnZSgnY2F0LWEtbG90LWxvYWRpbmcnKS5wYXJzZSgpKSB7XG5cdFx0XHRcdG13Lm1lc3NhZ2VzLnNldChDQUwuTUVTU0FHRVMpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRib2R5ID0gJGJvZHk7XG5cdFx0XHRDQUwuaW5pdFNldHRpbmdzKCk7XG5cblx0XHRcdGNvbnN0IGNvbnRhaW5lciA9IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1tDTEFTU19OQU1FLCBDTEFTU19OQU1FX0NPTlRBSU5FUiwgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSfSAvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH0gLz5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUfVxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtDQUwubXNnKCdlbnRlci1uYW1lJyl9XG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtDQUwuaXNTZWFyY2hNb2RlID8gKG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VhcmNoJykgPz8gJycpIDogJyd9XG5cdFx0XHRcdFx0XHRcdFx0b25LZXlEb3duPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJDxIVE1MSW5wdXRFbGVtZW50PihldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2F0OiBzdHJpbmcgPSAkZWxlbWVudC52YWwoKT8udHJpbSgpID8/ICcnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2F0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKGNhdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfT5cblx0XHRcdFx0XHRcdFx0e1tDQUwubXNnKCdzZWxlY3QnKSwgJyAnXX1cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19BTEx9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdhbGwnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHR7JyDigKIgJ31cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlQWxsKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ25vbmUnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9PlxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9PkNhdC1hLWxvdDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLiRjb250YWluZXIgPSAkKGNvbnRhaW5lcikgYXMgSlF1ZXJ5O1xuXHRcdFx0dGhpcy4kY29udGFpbmVyLmFwcGVuZFRvKHRoaXMuJGJvZHkpO1xuXG5cdFx0XHR0aGlzLiRkYXRhQ29udGFpbmVyID0gdGhpcy4kY29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9YCk7XG5cdFx0XHR0aGlzLiRtYXJrQ291bnRlciA9IHRoaXMuJGRhdGFDb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVJ9YCk7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0ID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9YCk7XG5cdFx0XHR0aGlzLiRzZWFyY2hJbnB1dCA9IHRoaXMuJGRhdGFDb250YWluZXIuZmluZDxIVE1MSW5wdXRFbGVtZW50Pihcblx0XHRcdFx0YC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVH1gXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLiRoZWFkID0gdGhpcy4kY29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9YCk7XG5cdFx0XHR0aGlzLiRsaW5rID0gdGhpcy4kaGVhZC5maW5kPEhUTUxBbmNob3JFbGVtZW50PihgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LfWApO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBidWlsZEVsZW1lbnRzKCk6IHZvaWQge1xuXHRcdFx0Y29uc3QgcmVnZXhDYXQ6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF5cXFxccyoke0NBTC5sb2NhbGl6ZWRSZWdleChDQUwuVEFSR0VUX05BTUVTUEFDRSwgJ0NhdGVnb3J5Jyl9OmAsICcnKTtcblx0XHRcdGxldCBpc0NvbXBvc2l0aW9uU3RhcnQ6IGJvb2xlYW47XG5cblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdjb21wb3NpdGlvbnN0YXJ0JywgKCkgPT4ge1xuXHRcdFx0XHRpc0NvbXBvc2l0aW9uU3RhcnQgPSB0cnVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdjb21wb3NpdGlvbmVuZCcsICgpID0+IHtcblx0XHRcdFx0aXNDb21wb3NpdGlvblN0YXJ0ID0gZmFsc2U7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQub24oJ2lucHV0IGtleXVwJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGlmIChpc0NvbXBvc2l0aW9uU3RhcnQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3Qge2N1cnJlbnRUYXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHRcdGNvbnN0IHt2YWx1ZTogb2xkVmFsfSA9IGN1cnJlbnRUYXJnZXQ7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbDogc3RyaW5nID0gb2xkVmFsLnJlcGxhY2UocmVnZXhDYXQsICcnKTtcblx0XHRcdFx0aWYgKG5ld1ZhbCAhPT0gb2xkVmFsKSB7XG5cdFx0XHRcdFx0Y3VycmVudFRhcmdldC52YWx1ZSA9IG5ld1ZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IGluaXRBdXRvY29tcGxldGUgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdGlmIChDQUwuaXNBdXRvQ29tcGxldGVJbml0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdENBTC5pc0F1dG9Db21wbGV0ZUluaXQgPSB0cnVlO1xuXG5cdFx0XHRcdHRoaXMuJHNlYXJjaElucHV0LmF1dG9jb21wbGV0ZSh7XG5cdFx0XHRcdFx0c291cmNlOiAocmVxdWVzdDoge3Rlcm06IHN0cmluZ30sIHJlc3BvbnNlOiAoYXJnOiBKUXVlcnk8c3RyaW5nPikgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdvcGVuc2VhcmNoJyxcblx0XHRcdFx0XHRcdFx0XHRuYW1lc3BhY2U6IENBTC5UQVJHRVRfTkFNRVNQQUNFLFxuXHRcdFx0XHRcdFx0XHRcdHJlZGlyZWN0czogJ3Jlc29sdmUnLFxuXHRcdFx0XHRcdFx0XHRcdHNlYXJjaDogcmVxdWVzdC50ZXJtLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdFsxXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2UoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQocmVzdWx0WzFdKS5tYXAoKF9pbmRleCwgaXRlbTogc3RyaW5nKTogc3RyaW5nID0+IGl0ZW0ucmVwbGFjZShyZWdleENhdCwgJycpKVxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0bXk6ICdyaWdodCBib3R0b20nLFxuXHRcdFx0XHRcdFx0YXQ6ICdyaWdodCB0b3AnLFxuXHRcdFx0XHRcdFx0b2Y6IHRoaXMuJHNlYXJjaElucHV0LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YXBwZW5kVG86IGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUn1gLFxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHR0aGlzLiRsaW5rLm9uKCdjbGljaycsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHQkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEKTtcblx0XHRcdFx0aW5pdEF1dG9jb21wbGV0ZSgpO1xuXHRcdFx0XHR0aGlzLnJ1bigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaW5pdFNldHRpbmdzKCk6IHZvaWQge1xuXHRcdFx0bGV0IGNhdEFMb3RQcmVmczogdHlwZW9mIENBTC5zZXR0aW5ncyA9IHdpbmRvdy5DYXRBTG90UHJlZnMgPz8ge307XG5cdFx0XHRjb25zdCB0eXBlT2ZDYXRBTG90UHJlZnMgPSB0eXBlb2YgY2F0QUxvdFByZWZzO1xuXHRcdFx0aWYgKCh0eXBlT2ZDYXRBTG90UHJlZnMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGNhdEFMb3RQcmVmcykpIHx8IHR5cGVPZkNhdEFMb3RQcmVmcyAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Y2F0QUxvdFByZWZzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3Qgc2V0dGluZ0tleSBvZiBPYmplY3Qua2V5cyhDQUwuREVGQVVMVF9TRVRUSU5HKSBhcyAoa2V5b2YgU2V0dGluZylbXSkge1xuXHRcdFx0XHRjb25zdCBzZXR0aW5nID0gQ0FMLkRFRkFVTFRfU0VUVElOR1tzZXR0aW5nS2V5XTtcblxuXHRcdFx0XHRDQUwuc2V0dGluZ3Nbc2V0dGluZ0tleV0gPSBjYXRBTG90UHJlZnNbc2V0dGluZ0tleV0gPz8gc2V0dGluZy5kZWZhdWx0O1xuXG5cdFx0XHRcdGlmICghc2V0dGluZy5zZWxlY3RfaTE4bikge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2V0dGluZy5zZWxlY3QgPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBtZXNzYWdlS2V5IG9mIE9iamVjdC5rZXlzKHNldHRpbmcuc2VsZWN0X2kxOG4pKSB7XG5cdFx0XHRcdFx0Y29uc3QgbWVzc2FnZTogc3RyaW5nID0gc2V0dGluZy5zZWxlY3RfaTE4blttZXNzYWdlS2V5XSBhcyBrZXlvZiB0eXBlb2Ygc2V0dGluZy5zZWxlY3RfaTE4bjtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0c2V0dGluZy5zZWxlY3RbQ0FMLm1zZyhtZXNzYWdlS2V5IGFzIG5ldmVyKV0gPSBtZXNzYWdlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgbXNnKGtleTogTWVzc2FnZUtleSBleHRlbmRzIGBjYXQtYS1sb3QtJHtpbmZlciBQfWAgPyBQIDogbmV2ZXIsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcblx0XHRcdGNvbnN0IGZ1bGxLZXk6IHN0cmluZyA9IGBjYXQtYS1sb3QtJHtrZXl9YDtcblx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGZ1bGxLZXksIC4uLmFyZ3MpLnBhcnNlKCkgOiBtdy5tZXNzYWdlKGZ1bGxLZXkpLnBsYWluKCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsaXplZFJlZ2V4KG5hbWVzcGFjZU51bWJlcjogbnVtYmVyLCBmYWxsYmFjazogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdC8vIENvcGllZCBmcm9tIEhvdENhdCwgdGhhbmtzIEx1cG8uXG5cdFx0XHRjb25zdCB3aWtpVGV4dEJsYW5rOiBzdHJpbmcgPSBTdHJpbmcucmF3YFtcXHQgX1xceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMF0rYDtcblx0XHRcdGNvbnN0IHdpa2lUZXh0QmxhbmtSRTogUmVnRXhwID0gbmV3IFJlZ0V4cCh3aWtpVGV4dEJsYW5rLCAnZycpO1xuXHRcdFx0Y29uc3QgY3JlYXRlUmVnZXhTdHIgPSAobmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nID0+IHtcblx0XHRcdFx0aWYgKCFuYW1lPy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHJlZ2V4TmFtZTogc3RyaW5nID0gJyc7XG5cdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW5pdGlhbDogc3RyaW5nID0gbmFtZS5zbGljZShpLCBpICsgMSk7XG5cdFx0XHRcdFx0Y29uc3QgbGw6IHN0cmluZyA9IGluaXRpYWwudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRjb25zdCB1bDogc3RyaW5nID0gaW5pdGlhbC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRcdHJlZ2V4TmFtZSArPSBsbCA9PT0gdWwgPyBpbml0aWFsIDogYFske2xsfSR7dWx9XWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlZ2V4TmFtZS5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csIFN0cmluZy5yYXdgXFwkMWApLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKTtcblx0XHRcdH07XG5cdFx0XHRmYWxsYmFjayA9IGZhbGxiYWNrLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRjb25zdCBjYW5vbmljYWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IENBTC53Z0Zvcm1hdHRlZE5hbWVzcGFjZXNbbmFtZXNwYWNlTnVtYmVyXT8udG9Mb3dlckNhc2UoKTtcblx0XHRcdGxldCByZWdleFN0cmluZzogc3RyaW5nID0gY3JlYXRlUmVnZXhTdHIoY2Fub25pY2FsKTtcblx0XHRcdGlmIChmYWxsYmFjayAmJiBjYW5vbmljYWwgIT09IGZhbGxiYWNrKSB7XG5cdFx0XHRcdHJlZ2V4U3RyaW5nICs9IGB8JHtjcmVhdGVSZWdleFN0cihmYWxsYmFjayl9YDtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3QgY2F0TmFtZSBvZiBPYmplY3Qua2V5cyhDQUwud2dOYW1lc3BhY2VJZHMpKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRjYXROYW1lLnRvTG93ZXJDYXNlKCkgIT09IGNhbm9uaWNhbCAmJlxuXHRcdFx0XHRcdGNhdE5hbWUudG9Mb3dlckNhc2UoKSAhPT0gZmFsbGJhY2sgJiZcblx0XHRcdFx0XHRDQUwud2dOYW1lc3BhY2VJZHNbY2F0TmFtZV0gPT09IG5hbWVzcGFjZU51bWJlclxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZWdleFN0cmluZyArPSBgfCR7Y3JlYXRlUmVnZXhTdHIoY2F0TmFtZSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGAoPzoke3JlZ2V4U3RyaW5nfSlgO1xuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIoKTogdm9pZCB7XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzID0gQ0FMLiRsYWJlbHMuZmlsdGVyKGAuJHtDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEfWApO1xuXHRcdFx0dGhpcy4kbWFya0NvdW50ZXIuc2hvdygpLmh0bWwoQ0FMLm1zZygnZmlsZXMtc2VsZWN0ZWQnLCBDQUwuJHNlbGVjdGVkTGFiZWxzLmxlbmd0aC50b1N0cmluZygpKSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgdG9nZ2xlQWxsKHNlbGVjdDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0Q0FMLiRsYWJlbHMudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCwgc2VsZWN0KTtcblx0XHRcdHRoaXMudXBkYXRlU2VsZWN0aW9uQ291bnRlcigpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGFzeW5jIGZpbmRBbGxWYXJpYW50cyhjYXRlZ29yeTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuXHRcdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIGNhdGVnb3J5KSkge1xuXHRcdFx0XHRDQUwudmFyaWFudENhY2hlW2NhdGVnb3J5XSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIGNhdGVnb3J5KSBhcyBzdHJpbmdbXTtcblx0XHRcdH1cblx0XHRcdGlmIChDQUwudmFyaWFudENhY2hlW2NhdGVnb3J5XSkge1xuXHRcdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV07XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0ZXh0OiBjYXRlZ29yeSxcblx0XHRcdFx0dGl0bGU6ICd0ZW1wJyxcblx0XHRcdH07XG5cdFx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgVkFSSUFOVFMpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCB7cGFyc2V9ID0gYXdhaXQgQ0FMLmFwaS5nZXQoe1xuXHRcdFx0XHRcdFx0Li4ucGFyYW1zLFxuXHRcdFx0XHRcdFx0dmFyaWFudCxcblx0XHRcdFx0XHR9IGFzIHR5cGVvZiBwYXJhbXMpO1xuXHRcdFx0XHRcdGNvbnN0IHt0ZXh0fSA9IHBhcnNlO1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9ICQodGV4dCkuZXEoMCkudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0XHRyZXN1bHRzW3Jlc3VsdHMubGVuZ3RoXSA9IHJlc3VsdDtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0fVxuXHRcdFx0Ly8gRGUtZHVwbGljYXRlXG5cdFx0XHRDQUwudmFyaWFudENhY2hlW2NhdGVnb3J5XSA9IHVuaXF1ZUFycmF5KHJlc3VsdHMpOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyBjYXRlZ29yeSwgQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0sIDYwICogNjAgKiAyNCk7IC8vIDEgZGF5XG5cdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV07XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgYXN5bmMgcmVnZXhCdWlsZGVyKGNhdGVnb3J5OiBzdHJpbmcpOiBQcm9taXNlPFJlZ0V4cD4ge1xuXHRcdFx0Ly8gQnVpbGQgYSByZWdleHAgc3RyaW5nIGZvciBtYXRjaGluZyB0aGUgZ2l2ZW4gY2F0ZWdvcnk6XG5cdFx0XHRjb25zdCBjYXROYW1lOiBzdHJpbmcgPSBDQUwubG9jYWxpemVkUmVnZXgoQ0FMLlRBUkdFVF9OQU1FU1BBQ0UsICdDYXRlZ29yeScpO1xuXHRcdFx0Ly8gdHJpbSBsZWFkaW5nL3RyYWlsaW5nIHdoaXRlc3BhY2UgYW5kIHVuZGVyc2NvcmVzXG5cdFx0XHRjYXRlZ29yeSA9IGNhdGVnb3J5LnJlcGxhY2UoL15bXFxzX10rLywgJycpLnJlcGxhY2UoL1tcXHNfXSskLywgJycpO1xuXHRcdFx0Ly8gRmluZCBhbGwgdmFyaWFudHNcblx0XHRcdGNvbnN0IHZhcmlhbnRzOiBzdHJpbmdbXSA9IGF3YWl0IENBTC5maW5kQWxsVmFyaWFudHMoY2F0ZWdvcnkpO1xuXHRcdFx0Ly8gZXNjYXBlIHJlZ2V4cCBtZXRhY2hhcmFjdGVycyAoPSBhbnkgQVNDSUkgcHVuY3R1YXRpb24gZXhjZXB0IF8pXG5cdFx0XHRjb25zdCB2YXJpYW50UmVnRXhwczogc3RyaW5nW10gPSBbXTtcblx0XHRcdGZvciAobGV0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcblx0XHRcdFx0dmFyaWFudCA9IG13LnV0aWwuZXNjYXBlUmVnRXhwKHZhcmlhbnQpO1xuXHRcdFx0XHQvLyBhbnkgc2VxdWVuY2Ugb2Ygc3BhY2VzIGFuZCB1bmRlcnNjb3JlcyBzaG91bGQgbWF0Y2ggYW55IG90aGVyXG5cdFx0XHRcdHZhcmlhbnQgPSB2YXJpYW50LnJlcGxhY2UoL1tcXHNfXSsvZywgU3RyaW5nLnJhd2BbXFxzX10rYCk7XG5cdFx0XHRcdC8vIE1ha2UgdGhlIGZpcnN0IGNoYXJhY3RlciBjYXNlLWluc2Vuc2l0aXZlOlxuXHRcdFx0XHRjb25zdCBmaXJzdDogc3RyaW5nID0gdmFyaWFudC5zbGljZSgwLCAxKTtcblx0XHRcdFx0aWYgKGZpcnN0LnRvVXBwZXJDYXNlKCkgIT09IGZpcnN0LnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdFx0XHR2YXJpYW50ID0gYFske2ZpcnN0LnRvVXBwZXJDYXNlKCl9JHtmaXJzdC50b0xvd2VyQ2FzZSgpfV0ke3ZhcmlhbnQuc2xpY2UoMSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXJpYW50UmVnRXhwc1t2YXJpYW50UmVnRXhwcy5sZW5ndGhdID0gdmFyaWFudDtcblx0XHRcdH1cblx0XHRcdC8vIENvbXBpbGUgaXQgaW50byBhIFJlZ0V4cCB0aGF0IG1hdGNoZXMgTWVkaWFXaWtpIGNhdGVnb3J5IHN5bnRheCAoeWVhaCwgaXQgbG9va3MgdWdseSk6XG5cdFx0XHQvLyBYWFg6IHRoZSBmaXJzdCBjYXB0dXJpbmcgcGFyZW5zIGFyZSBhc3N1bWVkIHRvIG1hdGNoIHRoZSBzb3J0a2V5LCBpZiBwcmVzZW50LCBpbmNsdWRpbmcgdGhlIHwgYnV0IGV4Y2x1ZGluZyB0aGUgXV1cblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcW1tcXFxcc19dKiR7Y2F0TmFtZX1bXFxcXHNfXSo6W1xcXFxzX10qKD86JHt2YXJpYW50UmVnRXhwcy5qb2luKFxuXHRcdFx0XHRcdCd8J1xuXHRcdFx0XHQpfSlbXFxcXHNfXSooXFxcXHxbXlxcXFxdXSooPzpcXFxcXVteXFxcXF1dKykqKT9cXFxcXVxcXFxdYCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZG9BUElDYWxsKFxuXHRcdFx0X3BhcmFtczpcblx0XHRcdFx0fCBPbWl0PEFwaUVkaXRQYWdlUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaU9wZW5TZWFyY2hQYXJhbXMsICdmb3JtYXQnPlxuXHRcdFx0XHR8IE9taXQ8QXBpUXVlcnlDYXRlZ29yeU1lbWJlcnNQYXJhbXMsICdmb3JtYXQnPlxuXHRcdFx0XHR8IE9taXQ8QXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMsICdmb3JtYXQnPlxuXHRcdFx0XHR8IE9taXQ8QXBpUXVlcnlUb2tlbnNQYXJhbXMsICdmb3JtYXQnPixcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZFxuXHRcdCkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gX3BhcmFtcyBhcyB0eXBlb2YgX3BhcmFtcyAmIHtcblx0XHRcdFx0Zm9ybWF0OiAnanNvbic7XG5cdFx0XHRcdHRpdGxlPzogc3RyaW5nO1xuXHRcdFx0fTtcblx0XHRcdHBhcmFtc1snZm9ybWF0J10gPSAnanNvbic7XG5cdFx0XHRwYXJhbXNbJ2Zvcm1hdHZlcnNpb24nXSA9ICcyJztcblx0XHRcdGxldCBpOiBudW1iZXIgPSAwO1xuXHRcdFx0Y29uc3QgZG9DYWxsID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCBoYW5kbGVFcnJvciA9IChlcnJvcjogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0bXcubG9nLmVycm9yKCdbQ2F0LWEtbG90XSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdFx0XHRpZiAoaSA8IDQpIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZG9DYWxsLCAzMDApO1xuXHRcdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocGFyYW1zWyd0aXRsZSddKSB7XG5cdFx0XHRcdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yW0NBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoXSA9IHBhcmFtc1sndGl0bGUnXTtcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKHBhcmFtc1snYWN0aW9uJ10gPT09ICdxdWVyeScpIHtcblx0XHRcdFx0XHRDQUwuYXBpLmdldChwYXJhbXMpLnRoZW4oY2FsbGJhY2spLmNhdGNoKGhhbmRsZUVycm9yKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRDQUwuYXBpLnBvc3QocGFyYW1zKS50aGVuKGNhbGxiYWNrKS5jYXRjaChoYW5kbGVFcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRkb0NhbGwoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBtYXJrQXNEb25lKFxuXHRcdFx0JG1hcmtlZExhYmVsOiBKUXVlcnksXG5cdFx0XHR0YXJnZXRDYXRlZ29yeTogc3RyaW5nLFxuXHRcdFx0bW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZScgfCAncmVtb3ZlJ1xuXHRcdCk6IHZvaWQge1xuXHRcdFx0JG1hcmtlZExhYmVsLmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUxfRE9ORSk7XG5cblx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHRjYXNlICdhZGQnOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FkZGVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NvcHknOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2NvcGllZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtb3ZlJzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdtb3ZlZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZW1vdmUnOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ3JlbW92ZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZG9DbGVhbnVwKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0XHRyZXR1cm4gQ0FMLnNldHRpbmdzLmRvY2xlYW51cCA/IHRleHQucmVwbGFjZSgve3tcXHMqW0NjXWhlY2sgY2F0ZWdvcmllc1xccyooXFx8Py4qPyl9fS8sICcnKSA6IHRleHQ7XG5cdFx0fSAvLyBSZW1vdmUge3tVbmNhdGVnb3JpemVkfX0gKGFsc28gd2l0aCBjb21tZW50KS4gTm8gbmVlZCB0byByZXBsYWNlIGl0IHdpdGggYW55dGhpbmdcblx0XHRwcml2YXRlIHN0YXRpYyByZW1vdmVVbmNhdCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdFx0cmV0dXJuIHRleHQucmVwbGFjZSgvXFx7XFx7XFxzKltVdV1uY2F0ZWdvcml6ZWRcXHMqKFxcfD8uKj8pXFx9XFx9LywgJycpO1xuXHRcdH1cblx0XHRwcml2YXRlIGRpc3BsYXlSZXN1bHQoKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcyh7XG5cdFx0XHRcdGN1cnNvcjogJycsXG5cdFx0XHRcdG92ZXJmbG93OiAnJyxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0ZFRURCQUNLfWApLmFkZENsYXNzKENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSk7XG5cblx0XHRcdGNvbnN0ICRwYXJlbnQ6IEpRdWVyeSA9IENBTC4kY291bnRlci5wYXJlbnQoKTtcblx0XHRcdCRwYXJlbnQuaHRtbCg8aDM+e0NBTC5tc2coJ2RvbmUnKX08L2gzPik7XG5cdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHR7Q0FMLm1zZygnYWxsLWRvbmUnKX1cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXG5cdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0PGFcblx0XHRcdFx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRDQUwuJHByb2dyZXNzRGlhbG9nLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwoZmFsc2UpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7Q0FMLm1zZygncmV0dXJuLXRvLXBhZ2UnKX1cblx0XHRcdFx0PC9hPlxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKENBTC5hbHJlYWR5VGhlcmUubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtYWxyZWFkeScsIENBTC5hbHJlYWR5VGhlcmUubGVuZ3RoLnRvU3RyaW5nKCkpfTwvaDU+XG5cdFx0XHRcdFx0XHR7Q0FMLmFscmVhZHlUaGVyZS5yZWR1Y2U8KHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXT4oXG5cdFx0XHRcdFx0XHRcdChwcmUsIGN1ciwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aCAtIDEgPyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl0gOiBbLi4ucHJlLCBjdXJdLFxuXHRcdFx0XHRcdFx0XHRbXVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGlmIChDQUwubm90Rm91bmQubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtbm90LWZvdW5kJywgQ0FMLm5vdEZvdW5kLmxlbmd0aC50b1N0cmluZygpKX08L2g1PlxuXHRcdFx0XHRcdFx0e0NBTC5ub3RGb3VuZC5yZWR1Y2U8KHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXT4oXG5cdFx0XHRcdFx0XHRcdChwcmUsIGN1ciwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBDQUwubm90Rm91bmQubGVuZ3RoIC0gMSA/IFsuLi5wcmUsIGN1ciwgPGJyIGtleT17aW5kZXh9IC8+XSA6IFsuLi5wcmUsIGN1cl0sXG5cdFx0XHRcdFx0XHRcdFtdXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtc2VydmVyJywgQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGgudG9TdHJpbmcoKSl9PC9oNT5cblx0XHRcdFx0XHRcdHtDQUwuY29ubmVjdGlvbkVycm9yLnJlZHVjZTwoc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50KVtdPihcblx0XHRcdFx0XHRcdFx0KHByZSwgY3VyLCBpbmRleCkgPT5cblx0XHRcdFx0XHRcdFx0XHRpbmRleCA8IENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XHRcdFx0PyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl1cblx0XHRcdFx0XHRcdFx0XHRcdDogWy4uLnByZSwgY3VyXSxcblx0XHRcdFx0XHRcdFx0W11cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgdXBkYXRlQ291bnRlcigpOiB2b2lkIHtcblx0XHRcdENBTC5jb3VudGVyQ3VycmVudCsrO1xuXHRcdFx0aWYgKENBTC5jb3VudGVyQ3VycmVudCA+IENBTC5jb3VudGVyTmVlZGVkKSB7XG5cdFx0XHRcdHRoaXMuZGlzcGxheVJlc3VsdCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Q0FMLiRjb3VudGVyLnRleHQoQ0FMLmNvdW50ZXJDdXJyZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBhc3luYyBlZGl0Q2F0ZWdvcmllcyhcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRyZXN1bHQ6IFJlY29yZDxzdHJpbmcsIGFueT4sXG5cdFx0XHRtYXJrZWRMYWJlbDogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+WzBdLFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnIHwgJ3JlbW92ZSdcblx0XHQpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRcdGNvbnN0IFttYXJrZWRMYWJlbFRpdGxlLCAkbWFya2VkTGFiZWxdID0gbWFya2VkTGFiZWw7XG5cblx0XHRcdGlmICghcmVzdWx0Py5bJ3F1ZXJ5J10pIHtcblx0XHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvcltDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aF0gPSBtYXJrZWRMYWJlbFRpdGxlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgb3JpZ2luVGV4dDogc3RyaW5nID0gJyc7XG5cdFx0XHRsZXQgc3RhcnR0aW1lc3RhbXA6IG51bWJlciA9IDA7XG5cdFx0XHRsZXQgdGltZXN0YW1wOiBudW1iZXIgPSAwO1xuXHRcdFx0Q0FMLmVkaXRUb2tlbiA9IHJlc3VsdFsncXVlcnknXS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0Y29uc3Qge3BhZ2VzfSA9IHJlc3VsdFsncXVlcnknXTtcblxuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcGFnZXM7XG5cdFx0XHRvcmlnaW5UZXh0ID0gcGFnZT8ucmV2aXNpb25zPy5bMF0uc2xvdHMubWFpbi5jb250ZW50O1xuXHRcdFx0KHtzdGFydHRpbWVzdGFtcH0gPSBwYWdlKTtcblx0XHRcdFt7dGltZXN0YW1wfV0gPSBwYWdlLnJldmlzaW9ucztcblxuXHRcdFx0Y29uc3Qgc291cmNlY2F0OiBzdHJpbmcgPSBDQUwuQ1VSUkVOVF9DQVRFR1JPWTtcblx0XHRcdC8vIENoZWNrIGlmIHRoYXQgZmlsZSBpcyBhbHJlYWR5IGluIHRoYXQgY2F0ZWdvcnlcblx0XHRcdGNvbnN0IHRhcmdlUmVnRXhwID0gYXdhaXQgQ0FMLnJlZ2V4QnVpbGRlcih0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRpZiAobW9kZSAhPT0gJ3JlbW92ZScgJiYgdGFyZ2VSZWdFeHAudGVzdChvcmlnaW5UZXh0KSAmJiBtb2RlICE9PSAnbW92ZScpIHtcblx0XHRcdFx0Q0FMLmFscmVhZHlUaGVyZVtDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aF0gPSBtYXJrZWRMYWJlbFRpdGxlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaXggdGV4dFxuXHRcdFx0bGV0IHRleHQ6IHN0cmluZyA9IG9yaWdpblRleHQ7XG5cdFx0XHRsZXQgc3VtbWFyeTogc3RyaW5nO1xuXHRcdFx0Y29uc3Qgc291cmNlQ2F0UmVnRXhwID0gYXdhaXQgQ0FMLnJlZ2V4QnVpbGRlcihzb3VyY2VjYXQpO1xuXHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2FkZCc6XG5cdFx0XHRcdFx0dGV4dCArPSBgXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9XV1cXG5gO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LWFkZCcpLnJlcGxhY2UoJyQxJywgdGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjb3B5Jzpcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0c291cmNlQ2F0UmVnRXhwLFxuXHRcdFx0XHRcdFx0YFtbJHtDQUwubG9jYWxDYXROYW1lfToke3NvdXJjZWNhdH0kMV1dXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9JDFdXWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LWNvcHknKS5yZXBsYWNlKCckMScsIHNvdXJjZWNhdCkucmVwbGFjZSgnJDInLCB0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRcdFx0Ly8gSWYgY2F0ZWdvcnkgaXMgYWRkZWQgdGhyb3VnaCB0ZW1wbGF0ZTpcblx0XHRcdFx0XHRpZiAob3JpZ2luVGV4dCA9PT0gdGV4dCkge1xuXHRcdFx0XHRcdFx0dGV4dCArPSBgXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9XV1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbW92ZSc6XG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShzb3VyY2VDYXRSZWdFeHAsIGBbWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX0kMV1dYCk7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktbW92ZScpLnJlcGxhY2UoJyQxJywgc291cmNlY2F0KS5yZXBsYWNlKCckMicsIHRhcmdldENhdGVnb3J5KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmVtb3ZlJzpcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKHNvdXJjZUNhdFJlZ0V4cCwgJycpO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LXJlbW92ZScpLnJlcGxhY2UoJyQxJywgc291cmNlY2F0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRleHQgPT09IG9yaWdpblRleHQpIHtcblx0XHRcdFx0Q0FMLm5vdEZvdW5kW0NBTC5ub3RGb3VuZC5sZW5ndGhdID0gbWFya2VkTGFiZWxUaXRsZTtcblx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIHVuY2F0IGFmdGVyIHdlIGNoZWNrZWQgd2hldGhlciB3ZSBjaGFuZ2VkIHRoZSB0ZXh0IHN1Y2Nlc3NmdWxseS5cblx0XHRcdC8vIE90aGVyd2lzZSB3ZSBtaWdodCBmYWlsIHRvIGRvIHRoZSBjaGFuZ2VzLCBidXQgc3RpbGwgcmVwbGFjZSB7e3VuY2F0fX1cblx0XHRcdGlmIChtb2RlICE9PSAncmVtb3ZlJykge1xuXHRcdFx0XHR0ZXh0ID0gQ0FMLmRvQ2xlYW51cChDQUwucmVtb3ZlVW5jYXQodGV4dCkpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdHRva2VuOiBDQUwuZWRpdFRva2VuLFxuXHRcdFx0XHRcdHRhZ3M6IENBTC5BUElfVEFHLFxuXHRcdFx0XHRcdHRpdGxlOiBtYXJrZWRMYWJlbFRpdGxlLFxuXHRcdFx0XHRcdGFzc2VydDogJ3VzZXInLFxuXHRcdFx0XHRcdGJvdDogdHJ1ZSxcblx0XHRcdFx0XHRiYXNldGltZXN0YW1wOiB0aW1lc3RhbXAgYXMgdW5rbm93biBhcyBzdHJpbmcsXG5cdFx0XHRcdFx0d2F0Y2hsaXN0OiBDQUwuc2V0dGluZ3Mud2F0Y2hsaXN0IGFzIG5ldmVyLFxuXHRcdFx0XHRcdHRleHQsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRzdGFydHRpbWVzdGFtcDogc3RhcnR0aW1lc3RhbXAgYXMgdW5rbm93biBhcyBzdHJpbmcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblxuXHRcdFx0Q0FMLm1hcmtBc0RvbmUoJG1hcmtlZExhYmVsLCB0YXJnZXRDYXRlZ29yeSwgbW9kZSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0Q29udGVudChcblx0XHRcdG1hcmtlZExhYmVsOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz5bMF0sXG5cdFx0XHR0YXJnZXRDYXRlZ29yeTogc3RyaW5nLFxuXHRcdFx0bW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZSdcblx0XHQpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0XHR0aXRsZXM6IG1hcmtlZExhYmVsWzBdLFxuXHRcdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHRcdFx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50XG5cdFx0XHRcdFx0dm9pZCB0aGlzLmVkaXRDYXRlZ29yaWVzKHJlc3VsdCwgbWFya2VkTGFiZWwsIHRhcmdldENhdGVnb3J5LCBtb2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZ2V0VGl0bGVGcm9tTGluayhocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIChkZWNvZGVVUklDb21wb25lbnQoaHJlZiA/PyAnJykubWF0Y2goL3dpa2lcXC8oLis/KSg/OiMuKyk/JC8pPy5bMV0gPz8gJycpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0TWFya2VkTGFiZWxzKCk6IFtzdHJpbmcsIEpRdWVyeV1bXSB7XG5cdFx0XHRjb25zdCBtYXJrZWRMYWJlbHM6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPiA9IFtdO1xuXHRcdFx0Q0FMLiRzZWxlY3RlZExhYmVscyA9IENBTC4kbGFiZWxzLmZpbHRlcihgLiR7Q0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRH1gKTtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMuZWFjaCgoX2luZGV4LCBsYWJlbCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCAkbGFiZWw6IEpRdWVyeSA9ICQobGFiZWwpO1xuXHRcdFx0XHRjb25zdCAkbGFiZWxMaW5rOiBKUXVlcnkgPSAkbGFiZWwuZmluZCgnYTpub3QoLkNhdGVnb3J5VHJlZVRvZ2dsZSlbdGl0bGVdJyk7XG5cdFx0XHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgPVxuXHRcdFx0XHRcdCRsYWJlbExpbmsuYXR0cigndGl0bGUnKT8udHJpbSgpIHx8XG5cdFx0XHRcdFx0Q0FMLmdldFRpdGxlRnJvbUxpbmsoJGxhYmVsTGluay5hdHRyKCdocmVmJykpIHx8XG5cdFx0XHRcdFx0Q0FMLmdldFRpdGxlRnJvbUxpbmsoJGxhYmVsLmZpbmQoJ2E6bm90KC5DYXRlZ29yeVRyZWVUb2dnbGUpJykuYXR0cignaHJlZicpKTtcblx0XHRcdFx0bWFya2VkTGFiZWxzW21hcmtlZExhYmVscy5sZW5ndGhdID0gW3RpdGxlLCAkbGFiZWxdO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbWFya2VkTGFiZWxzO1xuXHRcdH1cblx0XHRwcml2YXRlIHNob3dQcm9ncmVzcygpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKHtcblx0XHRcdFx0Y3Vyc29yOiAnd2FpdCcsXG5cdFx0XHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0XHRcdH0pO1xuXHRcdFx0Q0FMLiRwcm9ncmVzc0RpYWxvZyA9ICQoXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ2VkaXRpbmcnKX1cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSfT57Q0FMLmNvdW50ZXJDdXJyZW50fTwvc3Bhbj5cblx0XHRcdFx0XHR7W0NBTC5tc2coJ29mJyksIENBTC5jb3VudGVyTmVlZGVkXX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpLmRpYWxvZyh7XG5cdFx0XHRcdGRpYWxvZ0NsYXNzOiBDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRcdFx0XHRtaW5IZWlnaHQ6IDkwLFxuXHRcdFx0XHRoZWlnaHQ6IDkwLFxuXHRcdFx0XHR3aWR0aDogNDUwLFxuXHRcdFx0XHRtb2RhbDogdHJ1ZSxcblx0XHRcdFx0Y2xvc2VPbkVzY2FwZTogZmFsc2UsXG5cdFx0XHRcdGRyYWdnYWJsZTogZmFsc2UsXG5cdFx0XHRcdHJlc2l6YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9GRUVEQkFDS30gLnVpLWRpYWxvZy10aXRsZWJhcmApLmhpZGUoKTtcblx0XHRcdHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9GRUVEQkFDS30gLnVpLWRpYWxvZy1jb250ZW50YCkuaGVpZ2h0KCdhdXRvJyk7XG5cdFx0XHRDQUwuJGNvdW50ZXIgPSB0aGlzLiRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSfWApO1xuXHRcdH1cblx0XHRwcml2YXRlIGRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5OiBzdHJpbmcsIG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnKTogdm9pZCB7XG5cdFx0XHRjb25zdCBtYXJrZWRMYWJlbHM6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPiA9IHRoaXMuZ2V0TWFya2VkTGFiZWxzKCk7XG5cdFx0XHRpZiAoIW1hcmtlZExhYmVscy5sZW5ndGgpIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoQ0FMLm1zZygnbm9uZS1zZWxlY3RlZCcpLCB7XG5cdFx0XHRcdFx0dGFnOiAnY2F0QUxvdCcsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRDQUwuYWxyZWFkeVRoZXJlID0gW107XG5cdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yID0gW107XG5cdFx0XHRDQUwubm90Rm91bmQgPSBbXTtcblx0XHRcdENBTC5jb3VudGVyQ3VycmVudCA9IDE7XG5cdFx0XHRDQUwuY291bnRlck5lZWRlZCA9IG1hcmtlZExhYmVscy5sZW5ndGg7XG5cdFx0XHR0aGlzLnNob3dQcm9ncmVzcygpO1xuXHRcdFx0Zm9yIChjb25zdCBtYXJrZWRMYWJlbCBvZiBtYXJrZWRMYWJlbHMpIHtcblx0XHRcdFx0dGhpcy5nZXRDb250ZW50KG1hcmtlZExhYmVsLCB0YXJnZXRDYXRlZ29yeSwgbW9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgYWRkSGVyZSh0YXJnZXRDYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5LCAnYWRkJyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgY29weUhlcmUodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeSwgJ2NvcHknKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBtb3ZlSGVyZSh0YXJnZXRDYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5LCAnbW92ZScpO1xuXHRcdH1cblx0XHRwcml2YXRlIGNyZWF0ZUNhdExpbmtzKHN5bWJvbDogc3RyaW5nLCBjYXRlZ29yaWVzOiBzdHJpbmdbXSk6IHZvaWQge1xuXHRcdFx0Y2F0ZWdvcmllcy5zb3J0KCk7XG5cdFx0XHRmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcblx0XHRcdFx0Y29uc3QgJHRyID0gJChcblx0XHRcdFx0XHQ8dHIgZGF0YXNldD17e2NhdGVnb3J5fX0+XG5cdFx0XHRcdFx0XHQ8dGQ+e3N5bWJvbH08L3RkPlxuXHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcnl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0KTtcblx0XHRcdFx0Ly8gQ2FuJ3QgbW92ZSB0byBzb3VyY2UgY2F0ZWdvcnlcblx0XHRcdFx0aWYgKGNhdGVnb3J5ICE9PSBDQUwuQ1VSUkVOVF9DQVRFR1JPWSAmJiBDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdFx0JHRyLmFwcGVuZChcblx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT059XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmFkZEhlcmUoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdhZGQnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNhdGVnb3J5ICE9PSBDQUwuQ1VSUkVOVF9DQVRFR1JPWSAmJiAhQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRcdCR0ci5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTn1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY29weUhlcmUoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdjb3B5Jyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTn1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubW92ZUhlcmUoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdtb3ZlJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmZpbmQoJ3RhYmxlJykuYXBwZW5kKCR0cik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgc2hvd0NhdGVnb3J5TGlzdCgpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnJyk7XG5cdFx0XHRjb25zdCBjdXJyZW50Q2F0ZWdvcmllczogc3RyaW5nW10gPSBbQ0FMLmN1cnJlbnRDYXRlZ29yeV07XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmVtcHR5KCk7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmFwcGVuZCg8dGFibGUgLz4pO1xuXHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaRJywgQ0FMLnBhcmVudENhdHMpO1xuXHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaSJywgY3VycmVudENhdGVnb3JpZXMpO1xuXHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaTJywgQ0FMLnN1YkNhdHMpO1xuXHRcdFx0Ly8gUmVzZXQgd2lkdGhcblx0XHRcdHRoaXMuJGNvbnRhaW5lci53aWR0aCgnJyk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIuaGVpZ2h0KCcnKTtcblx0XHRcdHRoaXMuJGNvbnRhaW5lci53aWR0aChNYXRoLm1pbigodGhpcy4kY29udGFpbmVyLndpZHRoKCkgPz8gMCkgKiAxLjEgKyAxNSwgKCQod2luZG93KS53aWR0aCgpID8/IDApIC0gMTApKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuY3NzKHtcblx0XHRcdFx0J21heC1oZWlnaHQnOiBgJHtDQUwuZGlhbG9nSGVpZ2h0fXB4YCxcblx0XHRcdFx0aGVpZ2h0OiAnJyxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldFBhcmVudENhdHMoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHR0aXRsZXM6IGBDYXRlZ29yeToke0NBTC5jdXJyZW50Q2F0ZWdvcnl9YCxcblx0XHRcdFx0XHRwcm9wOiAnY2F0ZWdvcmllcycsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDQUwucGFyZW50Q2F0cyA9IFtdO1xuXHRcdFx0XHRcdGNvbnN0IHtwYWdlc30gPSByZXN1bHQucXVlcnk7XG5cdFx0XHRcdFx0aWYgKHBhZ2VzWzBdPy5taXNzaW5nKSB7XG5cdFx0XHRcdFx0XHR0aGlzLiRib2R5LmNzcygnY3Vyc29yJywgJycpO1xuXHRcdFx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5odG1sKFxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORH0+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2NhdC1ub3QtZm91bmQnKX1cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkicsIFtDQUwuY3VycmVudENhdGVnb3J5XSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxldCBjYXRlZ29yaWVzOiB7dGl0bGU6IHN0cmluZ31bXSA9IFtdO1xuXHRcdFx0XHRcdGlmIChwYWdlc1swXT8uY2F0ZWdvcmllcykge1xuXHRcdFx0XHRcdFx0W3tjYXRlZ29yaWVzfV0gPSBwYWdlcztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xuXHRcdFx0XHRcdFx0Y29uc3QgY2F0VGl0bGUgPSBjYXQudGl0bGUucmVwbGFjZSgvXlteOl0rOi8sICcnKTtcblx0XHRcdFx0XHRcdENBTC5wYXJlbnRDYXRzW0NBTC5wYXJlbnRDYXRzLmxlbmd0aF0gPSBjYXRUaXRsZTtcblx0XHRcdFx0XHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgQ0FMLmZpbmRBbGxWYXJpYW50cyhjYXRUaXRsZSk7XG5cdFx0XHRcdFx0XHR9KSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDQUwuY291bnRlckNhdCsrO1xuXHRcdFx0XHRcdGlmIChDQUwuY291bnRlckNhdCA9PT0gMikge1xuXHRcdFx0XHRcdFx0dGhpcy5zaG93Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldFN1YkNhdHMoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRsaXN0OiAnY2F0ZWdvcnltZW1iZXJzJyxcblx0XHRcdFx0XHRjbXR5cGU6ICdzdWJjYXQnLFxuXHRcdFx0XHRcdGNtbGltaXQ6IENBTC5zZXR0aW5ncy5zdWJjYXRjb3VudCBhcyBuZXZlcixcblx0XHRcdFx0XHRjbXRpdGxlOiBgQ2F0ZWdvcnk6JHtDQUwuY3VycmVudENhdGVnb3J5fWAsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRjb25zdCBjYXRzOiB7dGl0bGU6IHN0cmluZ31bXSA9IHJlc3VsdD8ucXVlcnk/LmNhdGVnb3J5bWVtYmVycyB8fCBbXTtcblx0XHRcdFx0XHRDQUwuc3ViQ2F0cyA9IFtdO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgY2F0IG9mIGNhdHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGNhdFRpdGxlID0gY2F0LnRpdGxlLnJlcGxhY2UoL15bXjpdKzovLCAnJyk7XG5cdFx0XHRcdFx0XHRDQUwuc3ViQ2F0c1tDQUwuc3ViQ2F0cy5sZW5ndGhdID0gY2F0VGl0bGU7XG5cdFx0XHRcdFx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IENBTC5maW5kQWxsVmFyaWFudHMoY2F0VGl0bGUpO1xuXHRcdFx0XHRcdFx0fSkoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Q0FMLmNvdW50ZXJDYXQrKztcblx0XHRcdFx0XHRpZiAoQ0FMLmNvdW50ZXJDYXQgPT09IDIpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2hvd0NhdGVnb3J5TGlzdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRDYXRlZ29yeUxpc3QoKTogdm9pZCB7XG5cdFx0XHRDQUwuY291bnRlckNhdCA9IDA7XG5cdFx0XHR0aGlzLmdldFBhcmVudENhdHMoKTtcblx0XHRcdHRoaXMuZ2V0U3ViQ2F0cygpO1xuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZUNhdHMoY2F0OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xuXHRcdFx0Q0FMLmN1cnJlbnRDYXRlZ29yeSA9IGNhdDtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuaHRtbCg8ZGl2PntDQUwubXNnKCdsb2FkaW5nJyl9PC9kaXY+KTtcblx0XHRcdHRoaXMuZ2V0Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBmaW5kQWxsTGFiZWxzKCk6IHZvaWQge1xuXHRcdFx0Ly8gSXQncyBwb3NzaWJsZSB0byBhbGxvdyBhbnkga2luZCBvZiBwYWdlcyBhcyB3ZWxsIGJ1dCB3aGF0IGhhcHBlbnMgaWYgeW91IGNsaWNrIG9uIFwic2VsZWN0IGFsbFwiIGFuZCBkb24ndCBleHBlY3QgaXRcblx0XHRcdGlmIChDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdENBTC4kbGFiZWxzID0gdGhpcy4kYm9keS5maW5kKCd0YWJsZS5zZWFyY2hSZXN1bHRJbWFnZScpLmZpbmQoJ3RyPnRkJykuZXEoMSk7XG5cdFx0XHRcdGlmIChDQUwuc2V0dGluZ3MuZWRpdHBhZ2VzKSB7XG5cdFx0XHRcdFx0Q0FMLiRsYWJlbHMgPSBDQUwuJGxhYmVscy5hZGQoJ2Rpdi5tdy1zZWFyY2gtcmVzdWx0LWhlYWRpbmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Q0FMLiRsYWJlbHMgPSB0aGlzLiRib2R5XG5cdFx0XHRcdFx0LmZpbmQoJ2Rpdi5nYWxsZXJ5dGV4dCcpXG5cdFx0XHRcdFx0LmFkZCh0aGlzLiRib2R5LmZpbmQoJ2RpdiNtdy1jYXRlZ29yeS1tZWRpYScpLmZpbmQoJ2xpW2NsYXNzIT1cImdhbGxlcnlib3hcIl0nKSk7XG5cdFx0XHRcdGlmIChDQUwuc2V0dGluZ3MuZWRpdHBhZ2VzKSB7XG5cdFx0XHRcdFx0Y29uc3QgJHBhZ2VzOiBKUXVlcnk8SFRNTExJRWxlbWVudD4gPSB0aGlzLiRib2R5XG5cdFx0XHRcdFx0XHQuZmluZCgnZGl2I213LXBhZ2VzLCBkaXYjbXctc3ViY2F0ZWdvcmllcycpXG5cdFx0XHRcdFx0XHQuZmluZCgnbGknKTtcblx0XHRcdFx0XHRDQUwuJGxhYmVscyA9IENBTC4kbGFiZWxzLmFkZCgkcGFnZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgbWFrZUNsaWNrYWJsZSgpOiB2b2lkIHtcblx0XHRcdHRoaXMuZmluZEFsbExhYmVscygpO1xuXHRcdFx0Q0FMLiRsYWJlbHMuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTCkub25DYXRBTG90U2hpZnRDbGljaygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHRoaXMudXBkYXRlU2VsZWN0aW9uQ291bnRlcigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBydW4oKTogdm9pZCB7XG5cdFx0XHRpZiAodGhpcy4kbGluay5oYXNDbGFzcyhDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCkpIHtcblx0XHRcdFx0dGhpcy5tYWtlQ2xpY2thYmxlKCk7XG5cdFx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIuc2hvdygpO1xuXHRcdFx0XHR0aGlzLiRjb250YWluZXIucmVzaXphYmxlKHtcblx0XHRcdFx0XHRhbHNvUmVzaXplOiB0aGlzLiRyZXN1bHRMaXN0LFxuXHRcdFx0XHRcdGhhbmRsZXM6ICduJyxcblx0XHRcdFx0XHRyZXNpemU6IChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgJGN1cnJlbnRUYXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0JGN1cnJlbnRUYXJnZXQuY3NzKHtcblx0XHRcdFx0XHRcdFx0bGVmdDogJycsXG5cdFx0XHRcdFx0XHRcdHRvcDogJycsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdENBTC5kaWFsb2dIZWlnaHQgPSAkY3VycmVudFRhcmdldC5oZWlnaHQoKSA/PyBDQUwuZGlhbG9nSGVpZ2h0O1xuXHRcdFx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRtYXhIZWlnaHQ6ICcnLFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogJycsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5jc3MoJ21heC1oZWlnaHQnLCAnNDUwcHgnKTtcblx0XHRcdFx0aWYgKENBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoJ1BpY3R1cmVzIGFuZCBpbWFnZXMnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoQ0FMLkNVUlJFTlRfQ0FURUdST1kpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRkYXRhQ29udGFpbmVyLmhpZGUoKTtcblx0XHRcdFx0dGhpcy4kY29udGFpbmVyLnJlc2l6YWJsZSgnZGVzdHJveScpO1xuXHRcdFx0XHR0aGlzLiRjb250YWluZXIuY3NzKCd3aWR0aCcsICcnKTtcblx0XHRcdFx0Q0FMLiRsYWJlbHMub2ZmKCdjbGljay5jYXRBTG90Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKFxuXHRcdCh3Z05hbWVzcGFjZU51bWJlciA9PT0gLTEgJiYgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdTZWFyY2gnKSB8fFxuXHRcdHdnTmFtZXNwYWNlTnVtYmVyID09PSBPUFRJT05TLnRhcmdldE5hbWVzcGFjZVxuXHQpIHtcblx0XHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IC0xKSB7XG5cdFx0XHRDQUwuaXNTZWFyY2hNb2RlID0gdHJ1ZTtcblx0XHR9XG5cdFx0LyohIENhdC1hLWxvdCBtZXNzYWdlcyB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRcdHNldE1lc3NhZ2VzKCk7XG5cdFx0dm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0XHRuZXcgQ0FMKCRib2R5KS5idWlsZEVsZW1lbnRzKCk7XG5cdFx0fSk7XG5cdFx0Q0FMWyd2YXJpYW50Q2FjaGUnXSA9IHsuLi5DQUxbJ3ZhcmlhbnRDYWNoZSddLCAuLi5nZXRDYWNoZWRLZXlzKCl9O1xuXHR9XG59O1xuXG5leHBvcnQge2NhdEFMb3R9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQ2F0LWEtbG90LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuXG5jb25zdCBnZXRDYWNoZWRLZXlzID0gKCkgPT4ge1xuXHRjb25zdCB2YXJpYW50Q2FjaGU6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhcblx0XHQobXcuc3RvcmFnZSBhcyB1bmtub3duIGFzIFN0b3JhZ2UpWydzdG9yZSddIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPlxuXHQpKSB7XG5cdFx0aWYgKGtleS5zdGFydHNXaXRoKE9QVElPTlMuc3RvcmFnZUtleSkpIHtcblx0XHRcdGNvbnN0IGNhY2hlS2V5ID0ga2V5LnJlcGxhY2UoT1BUSU9OUy5zdG9yYWdlS2V5LCAnJyk7XG5cdFx0XHR2YXJpYW50Q2FjaGVbY2FjaGVLZXldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2YXJpYW50Q2FjaGU7XG59O1xuZXhwb3J0IHtnZXRDYWNoZWRLZXlzfTtcbiIsICJpbXBvcnQge0NMQVNTX05BTUVfTEFCRUwsIENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCwgQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRH0gZnJvbSAnLi9jb25zdGFudCc7XG5cbnR5cGUgT25DYXRBTG90U2hpZnRDbGljayA9ICh0aGlzOiBKUXVlcnksIGNhbGxiYWNrOiAoKSA9PiB1bmtub3duKSA9PiBKUXVlcnk7XG5kZWNsYXJlIGdsb2JhbCB7XG5cdGludGVyZmFjZSBKUXVlcnkge1xuXHRcdG9uQ2F0QUxvdFNoaWZ0Q2xpY2s6IE9uQ2F0QUxvdFNoaWZ0Q2xpY2s7XG5cdH1cbn1cblxuY29uc3QgZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlID0gKCk6IHZvaWQgPT4ge1xuXHQkLmZuLmV4dGVuZCh7XG5cdFx0b25DYXRBTG90U2hpZnRDbGljazogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRsZXQgcHJldkNoZWNrYm94OiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cblx0XHRcdC8vIFdoZW4gb3VyIGJveGVzIGFyZSBjbGlja2VkLi5cblx0XHRcdHRoaXMub24oJ2NsaWNrLmNhdEFMb3QnLCAoZXZlbnQ6IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHQvLyBQcmV2ZW50IGZvbGxvd2luZyB0aGUgbGluayBhbmQgdGV4dCBzZWxlY3Rpb25cblx0XHRcdFx0aWYgKCFldmVudC5jdHJsS2V5KSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEhpZ2hsaWdodCBsYXN0IHNlbGVjdGVkXG5cdFx0XHRcdHRoaXMucGFyZW50cygnYm9keScpXG5cdFx0XHRcdFx0LmZpbmQoYC4ke0NMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRH1gKVxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQpO1xuXG5cdFx0XHRcdGxldCAkdGhpc0NvbnRyb2wgPSAkKGV2ZW50LnRhcmdldCkgYXMgSlF1ZXJ5O1xuXHRcdFx0XHRpZiAoISR0aGlzQ29udHJvbC5oYXNDbGFzcyhDTEFTU19OQU1FX0xBQkVMKSkge1xuXHRcdFx0XHRcdCR0aGlzQ29udHJvbCA9ICR0aGlzQ29udHJvbC5wYXJlbnRzKGAuJHtDTEFTU19OQU1FX0xBQkVMfWApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JHRoaXNDb250cm9sLmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCk7XG5cblx0XHRcdFx0Ly8gQW5kIG9uZSBoYXMgYmVlbiBjbGlja2VkIGJlZm9yZS4uLlxuXHRcdFx0XHRpZiAocHJldkNoZWNrYm94ICYmIGV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0XHRcdFx0Y29uc3QgbWV0aG9kOiAnYWRkQ2xhc3MnIHwgJ3JlbW92ZUNsYXNzJyA9ICR0aGlzQ29udHJvbC5oYXNDbGFzcyhDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEKVxuXHRcdFx0XHRcdFx0PyAnYWRkQ2xhc3MnXG5cdFx0XHRcdFx0XHQ6ICdyZW1vdmVDbGFzcyc7XG5cdFx0XHRcdFx0Ly8gQ2hlY2sgb3IgdW5jaGVjayB0aGlzIG9uZSBhbmQgYWxsIGluLWJldHdlZW4gY2hlY2tib3hlc1xuXHRcdFx0XHRcdHRoaXMuc2xpY2UoXG5cdFx0XHRcdFx0XHRNYXRoLm1pbih0aGlzLmluZGV4KHByZXZDaGVja2JveCksIHRoaXMuaW5kZXgoJHRoaXNDb250cm9sKSksXG5cdFx0XHRcdFx0XHRNYXRoLm1heCh0aGlzLmluZGV4KHByZXZDaGVja2JveCksIHRoaXMuaW5kZXgoJHRoaXNDb250cm9sKSkgKyAxXG5cdFx0XHRcdFx0KVttZXRob2RdKENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEVpdGhlciB3YXksIHVwZGF0ZSB0aGUgcHJldkNoZWNrYm94IHZhcmlhYmxlIHRvIHRoZSBvbmUgY2xpY2tlZCBub3dcblx0XHRcdFx0cHJldkNoZWNrYm94ID0gJHRoaXNDb250cm9sO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSBhcyBPbkNhdEFMb3RTaGlmdENsaWNrLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7ZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlfTtcbiIsICJpbXBvcnQge2NhdEFMb3R9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7ZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlfSBmcm9tICcuL21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlJztcblxuLyohIENhdC1hLWxvdCB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlKCk7XG5jYXRBTG90KCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsU0FBVTtBQUNWLElBQUFDLGtCQUFtQjtBQUNuQixJQUFBQyxVQUFXO0FBQ1gsSUFBQUMsYUFBYzs7QUNEZixJQUFNQyxhQUFxQjtBQUMzQixJQUFNQyx1QkFBQSxHQUFBQyxPQUFrQ0YsWUFBVSxZQUFBO0FBQ2xELElBQU1HLDRCQUFB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dE5hbWVzcGFjZSIsICJ2ZXJzaW9uIiwgInN0b3JhZ2VLZXkiLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUiIsICJjb25jYXQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTiIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEIiwgIkNMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSIiwgIkNMQVNTX05BTUVfRkVFREJBQ0siLCAiQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FIiwgIkNMQVNTX05BTUVfTEFCRUwiLCAiQ0xBU1NfTkFNRV9MQUJFTF9ET05FIiwgIkNMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCIsICJDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEIiwgIkRFRkFVTFRfU0VUVElORyIsICJkb2NsZWFudXAiLCAiZGVmYXVsdCIsICJsYWJlbF9pMThuIiwgImVkaXRwYWdlcyIsICJtaW5vciIsICJzdWJjYXRjb3VudCIsICJ3YXRjaGxpc3QiLCAic2VsZWN0X2kxOG4iLCAid2F0Y2hfbm9jaGFuZ2UiLCAid2F0Y2hfcHJlZiIsICJ3YXRjaF91bndhdGNoIiwgIndhdGNoX3dhdGNoIiwgIlZBUklBTlRTIiwgIndnVXNlckxhbmd1YWdlIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiREVGQVVMVF9NRVNTQUdFUyIsICJzZXRNZXNzYWdlcyIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJzZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRDYWNoZWRLZXlzIiwgInZhcmlhbnRDYWNoZSIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAic3RvcmFnZSIsICJsZW5ndGgiLCAia2V5IiwgInZhbHVlIiwgInN0YXJ0c1dpdGgiLCAiY2FjaGVLZXkiLCAicmVwbGFjZSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dUaXRsZSIsICJjYXRBTG90IiwgIkNBTCIsICJpc1NlYXJjaE1vZGUiLCAiTUVTU0FHRVMiLCAiQVBJX1RBRyIsICJUQVJHRVRfTkFNRVNQQUNFIiwgIkNVUlJFTlRfQ0FURUdST1kiLCAiaXNBdXRvQ29tcGxldGVJbml0IiwgImFscmVhZHlUaGVyZSIsICJjb25uZWN0aW9uRXJyb3IiLCAibm90Rm91bmQiLCAiY291bnRlckN1cnJlbnQiLCAiY291bnRlck5lZWRlZCIsICJjb3VudGVyQ2F0IiwgImN1cnJlbnRDYXRlZ29yeSIsICJkaWFsb2dIZWlnaHQiLCAiZWRpdFRva2VuIiwgImxvY2FsQ2F0TmFtZSIsICJwYXJlbnRDYXRzIiwgInN1YkNhdHMiLCAic2V0dGluZ3MiLCAiJGNvdW50ZXIiLCAiJCIsICIkcHJvZ3Jlc3NEaWFsb2ciLCAiJGxhYmVscyIsICIkc2VsZWN0ZWRMYWJlbHMiLCAiJGJvZHkiLCAiJGNvbnRhaW5lciIsICIkZGF0YUNvbnRhaW5lciIsICIkbWFya0NvdW50ZXIiLCAiJHJlc3VsdExpc3QiLCAiJHNlYXJjaElucHV0IiwgIiRoZWFkIiwgIiRsaW5rIiwgImNvbnN0cnVjdG9yIiwgIl9tdyR1dGlsJGdldFBhcmFtVmFsdSIsICJtZXNzYWdlIiwgInBhcnNlIiwgImluaXRTZXR0aW5ncyIsICJjb250YWluZXIiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicGxhY2Vob2xkZXIiLCAibXNnIiwgInR5cGUiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIm9uS2V5RG93biIsICJldmVudCIsICIkZWxlbWVudCIsICJjdXJyZW50VGFyZ2V0IiwgIl8kZWxlbWVudCR2YWwkdHJpbSIsICJfJGVsZW1lbnQkdmFsIiwgImNhdCIsICJ2YWwiLCAidHJpbSIsICJ1cGRhdGVDYXRzIiwgIm9uQ2xpY2siLCAidG9nZ2xlQWxsIiwgImFwcGVuZFRvIiwgImZpbmQiLCAiYnVpbGRFbGVtZW50cyIsICJyZWdleENhdCIsICJSZWdFeHAiLCAibG9jYWxpemVkUmVnZXgiLCAiaXNDb21wb3NpdGlvblN0YXJ0IiwgIm9uIiwgIm9sZFZhbCIsICJuZXdWYWwiLCAiaW5pdEF1dG9jb21wbGV0ZSIsICJhdXRvY29tcGxldGUiLCAic291cmNlIiwgInJlcXVlc3QiLCAicmVzcG9uc2UiLCAiZG9BUElDYWxsIiwgImFjdGlvbiIsICJuYW1lc3BhY2UiLCAicmVkaXJlY3RzIiwgInNlYXJjaCIsICJ0ZXJtIiwgInJlc3VsdCIsICJtYXAiLCAiX2luZGV4IiwgIml0ZW0iLCAicG9zaXRpb24iLCAibXkiLCAiYXQiLCAib2YiLCAidG9nZ2xlQ2xhc3MiLCAicnVuIiwgIl93aW5kb3ckQ2F0QUxvdFByZWZzIiwgImNhdEFMb3RQcmVmcyIsICJ3aW5kb3ciLCAiQ2F0QUxvdFByZWZzIiwgInR5cGVPZkNhdEFMb3RQcmVmcyIsICJBcnJheSIsICJpc0FycmF5IiwgIl9pMiIsICJfT2JqZWN0JGtleXMiLCAia2V5cyIsICJfY2F0QUxvdFByZWZzJHNldHRpbmciLCAic2V0dGluZ0tleSIsICJzZXR0aW5nIiwgInNlbGVjdCIsICJfaTMiLCAiX09iamVjdCRrZXlzMiIsICJtZXNzYWdlS2V5IiwgImFyZ3MiLCAiZnVsbEtleSIsICJwbGFpbiIsICJuYW1lc3BhY2VOdW1iZXIiLCAiZmFsbGJhY2siLCAiX0NBTCR3Z0Zvcm1hdHRlZE5hbWVzIiwgIndpa2lUZXh0QmxhbmsiLCAiU3RyaW5nIiwgInJhdyIsICJfdGVtcGxhdGVPYmplY3QiLCAiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsICJ3aWtpVGV4dEJsYW5rUkUiLCAiY3JlYXRlUmVnZXhTdHIiLCAibmFtZSIsICJyZWdleE5hbWUiLCAiaSIsICJpbml0aWFsIiwgInNsaWNlIiwgImxsIiwgInRvTG93ZXJDYXNlIiwgInVsIiwgInRvVXBwZXJDYXNlIiwgIl90ZW1wbGF0ZU9iamVjdDIiLCAiY2Fub25pY2FsIiwgInJlZ2V4U3RyaW5nIiwgIl9pNCIsICJfT2JqZWN0JGtleXMzIiwgImNhdE5hbWUiLCAidXBkYXRlU2VsZWN0aW9uQ291bnRlciIsICJmaWx0ZXIiLCAic2hvdyIsICJodG1sIiwgInRvU3RyaW5nIiwgImZpbmRBbGxWYXJpYW50cyIsICJjYXRlZ29yeSIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJnZXRPYmplY3QiLCAicmVzdWx0cyIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGV4dCIsICJ0aXRsZSIsICJfaTUiLCAiX1ZBUklBTlRTIiwgInZhcmlhbnQiLCAiZXEiLCAidW5pcXVlQXJyYXkiLCAic2V0T2JqZWN0IiwgInJlZ2V4QnVpbGRlciIsICJ2YXJpYW50cyIsICJ2YXJpYW50UmVnRXhwcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJlc2NhcGVSZWdFeHAiLCAiX3RlbXBsYXRlT2JqZWN0MyIsICJmaXJzdCIsICJlcnIiLCAiZSIsICJmIiwgImpvaW4iLCAiX3BhcmFtcyIsICJjYWxsYmFjayIsICJkb0NhbGwiLCAiaGFuZGxlRXJyb3IiLCAiZXJyb3IiLCAibG9nIiwgInNldFRpbWVvdXQiLCAidXBkYXRlQ291bnRlciIsICJ0aGVuIiwgImNhdGNoIiwgInBvc3QiLCAibWFya0FzRG9uZSIsICIkbWFya2VkTGFiZWwiLCAidGFyZ2V0Q2F0ZWdvcnkiLCAibW9kZSIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiRnJhZ21lbnQiLCAiZG9DbGVhbnVwIiwgInJlbW92ZVVuY2F0IiwgImRpc3BsYXlSZXN1bHQiLCAiY3NzIiwgImN1cnNvciIsICJvdmVyZmxvdyIsICIkcGFyZW50IiwgInBhcmVudCIsICJyZW1vdmUiLCAicmVkdWNlIiwgInByZSIsICJjdXIiLCAiaW5kZXgiLCAiZWRpdENhdGVnb3JpZXMiLCAibWFya2VkTGFiZWwiLCAiX3RoaXMiLCAiX3BhZ2UkcmV2aXNpb25zIiwgIm1hcmtlZExhYmVsVGl0bGUiLCAib3JpZ2luVGV4dCIsICJzdGFydHRpbWVzdGFtcCIsICJ0aW1lc3RhbXAiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJwYWdlcyIsICJwYWdlIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImNvbnRlbnQiLCAic291cmNlY2F0IiwgInRhcmdlUmVnRXhwIiwgInRlc3QiLCAic3VtbWFyeSIsICJzb3VyY2VDYXRSZWdFeHAiLCAidG9rZW4iLCAidGFncyIsICJhc3NlcnQiLCAiYm90IiwgImJhc2V0aW1lc3RhbXAiLCAiZ2V0Q29udGVudCIsICJtZXRhIiwgInRpdGxlcyIsICJwcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgImdldFRpdGxlRnJvbUxpbmsiLCAiaHJlZiIsICJfZGVjb2RlVVJJQ29tcG9uZW50JG0iLCAiX2RlY29kZVVSSUNvbXBvbmVudCRtMiIsICJkZWNvZGVVUklDb21wb25lbnQiLCAibWF0Y2giLCAiZ2V0TWFya2VkTGFiZWxzIiwgIm1hcmtlZExhYmVscyIsICJlYWNoIiwgImxhYmVsIiwgIl8kbGFiZWxMaW5rJGF0dHIiLCAiJGxhYmVsIiwgIiRsYWJlbExpbmsiLCAiYXR0ciIsICJzaG93UHJvZ3Jlc3MiLCAiZGlhbG9nIiwgImRpYWxvZ0NsYXNzIiwgIm1pbkhlaWdodCIsICJoZWlnaHQiLCAid2lkdGgiLCAibW9kYWwiLCAiY2xvc2VPbkVzY2FwZSIsICJkcmFnZ2FibGUiLCAicmVzaXphYmxlIiwgImhpZGUiLCAiZG9Tb21ldGhpbmciLCAibm90aWZ5IiwgInRhZyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJhZGRIZXJlIiwgImNvcHlIZXJlIiwgIm1vdmVIZXJlIiwgImNyZWF0ZUNhdExpbmtzIiwgInN5bWJvbCIsICJjYXRlZ29yaWVzIiwgInNvcnQiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiJHRyIiwgImRhdGFzZXQiLCAiY2xvc2VzdCIsICJkYXRhIiwgInNob3dDYXRlZ29yeUxpc3QiLCAiX3RoaXMkJGNvbnRhaW5lciR3aWR0IiwgIl8kJHdpZHRoIiwgImN1cnJlbnRDYXRlZ29yaWVzIiwgImVtcHR5IiwgIk1hdGgiLCAibWluIiwgImdldFBhcmVudENhdHMiLCAiX3BhZ2VzJCIsICJfcGFnZXMkMiIsICJxdWVyeSIsICJtaXNzaW5nIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImNhdFRpdGxlIiwgImdldFN1YkNhdHMiLCAibGlzdCIsICJjbXR5cGUiLCAiY21saW1pdCIsICJjbXRpdGxlIiwgIl9yZXN1bHQkcXVlcnkiLCAiY2F0cyIsICJjYXRlZ29yeW1lbWJlcnMiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiZ2V0Q2F0ZWdvcnlMaXN0IiwgImZpbmRBbGxMYWJlbHMiLCAiYWRkIiwgIiRwYWdlcyIsICJtYWtlQ2xpY2thYmxlIiwgIm9uQ2F0QUxvdFNoaWZ0Q2xpY2siLCAiaGFzQ2xhc3MiLCAiYWxzb1Jlc2l6ZSIsICJoYW5kbGVzIiwgInJlc2l6ZSIsICJfJGN1cnJlbnRUYXJnZXQkaGVpZ2giLCAiJGN1cnJlbnRUYXJnZXQiLCAibGVmdCIsICJ0b3AiLCAibWF4SGVpZ2h0IiwgIm9mZiIsICJnZXRCb2R5IiwgImV4dGVuZEpRdWVyeVByb3RvdHlwZSIsICJmbiIsICJleHRlbmQiLCAicHJldkNoZWNrYm94IiwgImN0cmxLZXkiLCAicHJldmVudERlZmF1bHQiLCAicGFyZW50cyIsICJyZW1vdmVDbGFzcyIsICIkdGhpc0NvbnRyb2wiLCAidGFyZ2V0IiwgInNoaWZ0S2V5IiwgIm1ldGhvZCIsICJtYXgiXQp9Cg==
