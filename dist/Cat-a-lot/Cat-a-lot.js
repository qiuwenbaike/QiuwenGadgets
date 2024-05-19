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
 * SPDX-License-Identifier: GPL-2.0-or-later
 * _addText: '{{Gadget Header|title3=jQuery checkboxShiftClick|license3=GPL-2.0-or-later}}'
 *
 * jQuery checkboxShiftClick
 *
 * @description This will enable checkboxes to be checked or unchecked in a row by clicking one, holding shift and clicking another one
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Cat-a-lot/modules/extendJQueryPrototype.ts}
 * @author Krinkle <krinklemail@gmail.com>
 * @license GPL-2.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-2.0}
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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length) return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
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
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
//! src/Cat-a-lot/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("Cat-a-lot/".concat(version));
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
      if (!mw.msg("cat-a-lot-loading")) {
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
      this.$searchInput.on("input keyup", (event) => {
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
      for (var _i = 0, _Object$keys = Object.keys(CAL.DEFAULT_SETTING); _i < _Object$keys.length; _i++) {
        var _catALotPrefs$setting;
        const settingKey = _Object$keys[_i];
        const setting = CAL.DEFAULT_SETTING[settingKey];
        CAL.settings[settingKey] = (_catALotPrefs$setting = catALotPrefs[settingKey]) !== null && _catALotPrefs$setting !== void 0 ? _catALotPrefs$setting : setting.default;
        if (!setting.select_i18n) {
          continue;
        }
        setting.select = {};
        for (var _i2 = 0, _Object$keys2 = Object.keys(setting.select_i18n); _i2 < _Object$keys2.length; _i2++) {
          const messageKey = _Object$keys2[_i2];
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
      for (var _i3 = 0, _Object$keys3 = Object.keys(CAL.wgNamespaceIds); _i3 < _Object$keys3.length; _i3++) {
        const catName = _Object$keys3[_i3];
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
        if (CAL.variantCache[category] !== void 0) {
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
        for (var _i4 = 0, _VARIANTS = VARIANTS; _i4 < _VARIANTS.length; _i4++) {
          const variant = _VARIANTS[_i4];
          try {
            const {
              parse
            } = yield CAL.api.post({
              ...params,
              variant
            });
            const {
              text
            } = parse;
            results[results.length] = $(text).eq(0).text().trim();
          } catch {
          }
        }
        CAL.variantCache[category] = (0, import_ext_gadget2.uniqueArray)(results);
        return results;
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
        CAL.api.post(params).then(callback).catch(handleError);
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
        originText = page.revisions[0].content;
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
        meta: "tokens",
        titles: markedLabel[0],
        prop: "revisions",
        rvprop: ["content", "timestamp"]
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
        const $labelLink = $label.find("a[title]");
        const title = ((_$labelLink$attr = $labelLink.attr("title")) === null || _$labelLink$attr === void 0 ? void 0 : _$labelLink$attr.trim()) || CAL.getTitleFromLink($labelLink.attr("href")) || CAL.getTitleFromLink($label.find("a").attr("href"));
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
        var _pages$;
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
        [{
          categories
        }] = pages;
        var _iterator5 = _createForOfIteratorHelper(categories), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const cat = _step5.value;
            CAL.parentCats[CAL.parentCats.length] = cat.title.replace(/^[^:]+:/, "");
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
            CAL.subCats[CAL.subCats.length] = cat.title.replace(/^[^:]+:/, "");
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
  }
};
//! src/Cat-a-lot/modules/extendJQueryPrototype.ts
var extendJQueryPrototype = () => {
  /*! jQuery checkboxShiftClick | GPL-2.0 <https://qwbk.cc/H:GPL> */
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
/*! jQuery checkboxShiftClick | GPL-2.0 <https://qwbk.cc/H:GPL> */
extendJQueryPrototype();
/*! Cat-a-lot | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
catALot();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NhdC1hLWxvdC9vcHRpb25zLmpzb24iLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9DYXQtYS1sb3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvY29yZS50c3giLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlLnRzIiwgInNyYy9DYXQtYS1sb3QvQ2F0LWEtbG90LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiYXBpVGFnXCI6IFwiQ2F0LWEtbG90XCIsXG5cdFwidGFyZ2V0TmFtZXNwYWNlXCI6IDE0LFxuXHRcInZlcnNpb25cIjogXCI2LjBcIlxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IHR5cGUge1NldHRpbmd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWNhdF9hX2xvdCc7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tY29udGFpbmVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEE6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9fZGF0YWA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1Q6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19jYXRlZ29yeS1saXN0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT046IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1fX2FjdGlvbmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH0tLW5vLWZvdW5kYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfV9fbWFyay1jb3VudGVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlYXJjaC1pbnB1dC1jb250YWluZXJfX2lucHV0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlbGVjdGlvbnNgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfV9fYWxsYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9X19ub25lYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9faGVhZGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTks6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9X19saW5rYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9LS1lbmFibGVkYDtcbmNvbnN0IENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1jdXJyZW50X2NvdW50ZXJgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDSzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tZmVlZGJhY2tgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0ZFRURCQUNLfS0tZG9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1sYWJlbGA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMX0RPTkU6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1kb25lYDtcbmNvbnN0IENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLWxhc3Qtc2VsZWN0ZWRgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLXNlbGVjdGVkYDtcblxuY29uc3QgREVGQVVMVF9TRVRUSU5HOiBTZXR0aW5nID0ge1xuXHRkb2NsZWFudXA6IHtcblx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHRsYWJlbF9pMThuOiAnZG9jbGVhbnVwcHJlZicsXG5cdH0sXG5cdGVkaXRwYWdlczoge1xuXHRcdGRlZmF1bHQ6IHRydWUsXG5cdFx0bGFiZWxfaTE4bjogJ2VkaXRwYWdlc3ByZWYnLFxuXHR9LFxuXHRtaW5vcjoge1xuXHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdGxhYmVsX2kxOG46ICdtaW5vcnByZWYnLFxuXHR9LFxuXHRzdWJjYXRjb3VudDoge1xuXHRcdGRlZmF1bHQ6IDUwLFxuXHRcdGxhYmVsX2kxOG46ICdzdWJjYXRjb3VudHByZWYnLFxuXHR9LFxuXHR3YXRjaGxpc3Q6IHtcblx0XHRkZWZhdWx0OiAncHJlZmVyZW5jZXMnLFxuXHRcdGxhYmVsX2kxOG46ICd3YXRjaGxpc3RwcmVmJyxcblx0XHRzZWxlY3RfaTE4bjoge1xuXHRcdFx0d2F0Y2hfbm9jaGFuZ2U6ICdub2NoYW5nZScsXG5cdFx0XHR3YXRjaF9wcmVmOiAncHJlZmVyZW5jZXMnLFxuXHRcdFx0d2F0Y2hfdW53YXRjaDogJ3Vud2F0Y2gnLFxuXHRcdFx0d2F0Y2hfd2F0Y2g6ICd3YXRjaCcsXG5cdFx0fSxcblx0fSxcbn07XG5cbmNvbnN0IFZBUklBTlRTOiBzdHJpbmdbXSA9IFsnemgtaGFucycsICd6aC1oYW50JywgJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04sXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCxcblx0Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIsXG5cdENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQsXG5cdENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQsXG5cdERFRkFVTFRfU0VUVElORyxcblx0VkFSSUFOVFMsXG59O1xuIiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgREVGQVVMVF9NRVNTQUdFUyA9IHtcblx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICd7e1BMVVJBTDokMXxPbmUgZmlsZXwkMSBmaWxlc319IHNlbGVjdGVkLicsXG5cdC8vIEFjdGlvbnNcblx0J2NhdC1hLWxvdC1jb3B5JzogJ0NvcHknLFxuXHQnY2F0LWEtbG90LW1vdmUnOiAnTW92ZScsXG5cdCdjYXQtYS1sb3QtYWRkJzogJ0FkZCcsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ1JlbW92ZSBmcm9tIHRoaXMgY2F0ZWdvcnknLFxuXHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAnRW50ZXIgY2F0ZWdvcnkgbmFtZScsXG5cdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ1NlbGVjdCcsXG5cdCdjYXQtYS1sb3QtYWxsJzogJ2FsbCcsXG5cdCdjYXQtYS1sb3Qtbm9uZSc6ICdub25lJyxcblx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ05vIGZpbGVzIHNlbGVjdGVkIScsXG5cdC8vIFByZWZlcmVuY2VzXG5cdCdjYXQtYS1sb3Qtd2F0Y2hsaXN0cHJlZic6ICdXYXRjaGxpc3QgcHJlZmVyZW5jZSBjb25jZXJuaW5nIGZpbGVzIGVkaXRlZCB3aXRoIENhdC1BLUxvdCcsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICdBY2NvcmRpbmcgdG8geW91ciBnZW5lcmFsIHByZWZlcmVuY2VzJyxcblx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICdEbyBub3QgY2hhbmdlIHdhdGNoc3RhdHVzJyxcblx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICdXYXRjaCBwYWdlcyBlZGl0ZWQgd2l0aCBDYXQtQS1Mb3QnLFxuXHQnY2F0LWEtbG90LXdhdGNoX3Vud2F0Y2gnOiAnUmVtb3ZlIHBhZ2VzIHdoaWxlIGVkaXRpbmcgd2l0aCBDYXQtQS1Mb3QgZnJvbSB5b3VyIHdhdGNobGlzdCcsXG5cdCdjYXQtYS1sb3QtbWlub3JwcmVmJzpcblx0XHRcIk1hcmsgZWRpdHMgYXMgbWlub3IgKGlmIHlvdSBnZW5lcmFsbHkgbWFyayB5b3VyIGVkaXRzIGFzIG1pbm9yLCB0aGlzIHdvbid0IGNoYW5nZSBhbnl0aGluZylcIixcblx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ0FsbG93IGNhdGVnb3Jpc2luZyBwYWdlcyAoaW5jbHVkaW5nIGNhdGVnb3JpZXMpIHRoYXQgYXJlIG5vdCBmaWxlcycsXG5cdCdjYXQtYS1sb3QtZG9jbGVhbnVwcHJlZic6ICdSZW1vdmUge3tDaGVjayBjYXRlZ29yaWVzfX0gYW5kIG90aGVyIG1pbm9yIGNsZWFudXAnLFxuXHQnY2F0LWEtbG90LXN1YmNhdGNvdW50cHJlZic6ICdTdWItY2F0ZWdvcmllcyB0byBzaG93IGF0IG1vc3QnLFxuXHQvLyBQcm9ncmVzc1xuXHQnY2F0LWEtbG90LWxvYWRpbmcnOiAnTG9hZGluZy4uLicsXG5cdCdjYXQtYS1sb3QtZWRpdGluZyc6ICdFZGl0aW5nIHBhZ2UnLFxuXHQnY2F0LWEtbG90LW9mJzogJ29mICcsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5Jzpcblx0XHQnVGhlIGZvbGxvd2luZyB7e1BMVVJBTDokMXxwYWdlIHdhc3wkMSBwYWdlcyB3ZXJlfX0gc2tpcHBlZCwgYmVjYXVzZSB0aGUgcGFnZSB3YXMgYWxyZWFkeSBpbiB0aGUgY2F0ZWdvcnk6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLW5vdC1mb3VuZCc6XG5cdFx0J1RoZSBmb2xsb3dpbmcge3tQTFVSQUw6JDF8cGFnZSB3YXN8JDEgcGFnZXMgd2VyZX19IHNraXBwZWQsIGJlY2F1c2UgdGhlIG9sZCBjYXRlZ29yeSBjb3VsZCBub3QgYmUgZm91bmQ6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLXNlcnZlcic6XG5cdFx0XCJUaGUgZm9sbG93aW5nIHt7UExVUkFMOiQxfHBhZ2V8JDEgcGFnZXN9fSBjb3VsZG4ndCBiZSBjaGFuZ2VkLCBzaW5jZSB0aGVyZSB3ZXJlIHByb2JsZW1zIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlcjpcIixcblx0J2NhdC1hLWxvdC1hbGwtZG9uZSc6ICdBbGwgcGFnZXMgYXJlIHByb2Nlc3NlZC4nLFxuXHQnY2F0LWEtbG90LWRvbmUnOiAnRG9uZSEnLFxuXHQnY2F0LWEtbG90LWFkZGVkLWNhdCc6ICdBZGRlZCBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICdDb3BpZWQgdG8gY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LW1vdmVkLWNhdCc6ICdNb3ZlZCB0byBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAnUmVtb3ZlZCBmcm9tIGNhdGVnb3J5ICQxJyxcblx0J2NhdC1hLWxvdC1yZXR1cm4tdG8tcGFnZSc6ICdSZXR1cm4gdG8gcGFnZScsXG5cdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICdDYXRlZ29yeSBub3QgZm91bmQuJyxcblx0Ly8gU3VtbWFyaWVzOlxuXHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IEFkZGluZyBbW0NhdGVnb3J5OiQxXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktY29weSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBDb3B5aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dIHRvIFtbQ2F0ZWdvcnk6JDJdXScsXG5cdCdjYXQtYS1sb3Qtc3VtbWFyeS1tb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IE1vdmluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXSB0byBbW0NhdGVnb3J5OiQyXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IFJlbW92aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dJyxcbn0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXG5jb25zdCBzZXRNZXNzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0LyohIENhdC1hLWxvdCBtZXNzYWdlcyB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRpZiAod2dVc2VyTGFuZ3VhZ2UgPT09ICdlbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0PHR5cGVvZiBERUZBVUxUX01FU1NBR0VTPih7XG5cdFx0XHQvLyBhcyBpbiAxNyBmaWxlcyBzZWxlY3RlZFxuXHRcdFx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICckMeWAi+aWh+S7tuW3sumBuOaThycsXG5cdFx0XHQvLyBBY3Rpb25zXG5cdFx0XHQnY2F0LWEtbG90LWNvcHknOiAn6KSH6KO9Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZSc6ICfnp7vli5UnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGQnOiAn5aKe5YqgJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ+W+nuatpOWIhumhnuenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAn6Ly45YWl5YiG6aGe5ZCN56ixJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ+mBuOaThycsXG5cdFx0XHQnY2F0LWEtbG90LWFsbCc6ICflhajpg6gnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lJzogJ+eEoScsXG5cdFx0XHQnY2F0LWEtbG90LW5vbmUtc2VsZWN0ZWQnOiAn5rKS5pyJ6YG45pOH5paH5Lu277yBJyxcblx0XHRcdC8vIFByZWZlcmVuY2VzXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAn5L2/55SoQ2F0LUEtTG9057eo6Lyv5paH5Lu25pmC55qE55uj6KaW5YiX6KGo6YG46aCFJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICfoiIfns7vntbHlj4PmlbjoqK3nva7nm7jlkIwnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICfkuI3opoHmm7TmlLnnm6Poppbni4DmhYsnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICfnm6Poppbkvb/nlKhDYXQtQS1Mb3Tnt6jovK/nmoTpoIHpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ+Wwh+S9v+eUqENhdC1BLUxvdOe3qOi8r+eahOmggemdouW+nuebo+imluWIl+ihqOenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XHRcdCflsIfnt6jovK/mqJnoqJjniLLlsI/kv67mlLnvvIjoi6XmgqjlnKjns7vntbHlj4PmlbjoqK3nva7kuK3lt7LoqK3nva7lsIfmiYDmnInnt6jovK/mqJnoqJjniLLlsI/kv67mlLnvvIzmraTpgbjpoIXkuI3mnIPlsI3nj77mnInooYzniLLpgLLooYzmlLnli5XvvIknLFxuXHRcdFx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ+WFgeioseWwjeS4jeaYr+aWh+S7tueahOmggemdouWSjOWtkOWIhumhnumAsuihjOWIhumhnuaTjeS9nCcsXG5cdFx0XHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAn56e76Zmke3tDaGVjayBjYXRlZ29yaWVzfX3kuKbpgLLooYzlhbbku5bntLDnr4DmuIXnkIYnLFxuXHRcdFx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAn5pyA5aSa6aGv56S655qE5a2Q5YiG6aGe5pW46YePJyxcblx0XHRcdC8vIFByb2dyZXNzXG5cdFx0XHQnY2F0LWEtbG90LWxvYWRpbmcnOiAn5q2j5Zyo5Yqg6LyJ4oCm4oCmJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdGluZyc6ICfmraPlnKjnt6jovK/poIHpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC1vZic6ICfvvIzlhbHmnIknLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLWFscmVhZHknOiAn5Lul5LiL6aCB6Z2i5bey6Lez6YGO77yM5Zug54iy6aCB6Z2i5bey57aT5Zyo5YiG6aGe5Lit77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOiAn5Lul5LiL6aCB6Z2i5bey6Lez6YGO77yM5Zug54iy5om+5LiN5Yiw54++5pyJ5YiG6aGe77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOiAn5Lul5LiL6aCB6Z2i54Sh5rOV57eo6Lyv77yM5Zug54iy6YCj5o6l5pyN5YuZ5Zmo5Ye66Yyv77yaJyxcblx0XHRcdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAn5YWo6YOo6aCB6Z2i5bey6JmV55CG44CCJyxcblx0XHRcdCdjYXQtYS1sb3QtZG9uZSc6ICflt7LlrozmiJDvvIEnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAn5bey5Yqg5YWl5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICflt7LopIfoo73liLDliIbpoZ4nLFxuXHRcdFx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAn5bey56e75YuV5Yiw5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAn5bey5b6e5YiG6aGe56e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAn6L+U5Zue5Yiw6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICfmib7kuI3liLDliIbpoZ7jgIInLFxuXHRcdFx0Ly8gU3VtbWFyaWVzXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliqDlhaXliIbpoZ5bW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhumhnumWk+ikh+ijve+8muW+nltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5YiG6aGe6ZaT56e75YuV77ya5b6eW1tDYXRlZ29yeTokMV1d5YiwW1tDYXRlZ29yeTokMl1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1yZW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muW+nuWIhumhnuenu+mZpO+8mltbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0PHR5cGVvZiBERUZBVUxUX01FU1NBR0VTPih7XG5cdFx0XHQvLyBhcyBpbiAxNyBmaWxlcyBzZWxlY3RlZFxuXHRcdFx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICflt7LpgInmi6kkMeS4qumhtemdouaIluaWh+S7ticsXG5cdFx0XHQvLyBBY3Rpb25zXG5cdFx0XHQnY2F0LWEtbG90LWNvcHknOiAn5aSN5Yi2Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZSc6ICfnp7vliqgnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGQnOiAn5aKe5YqgJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ+S7juatpOWIhuexu+enu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAn6L6T5YWl5YiG57G75ZCN56ewJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ+mAieaLqScsXG5cdFx0XHQnY2F0LWEtbG90LWFsbCc6ICflhajpg6gnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lJzogJ+aXoCcsXG5cdFx0XHQnY2F0LWEtbG90LW5vbmUtc2VsZWN0ZWQnOiAn5rKh5pyJ6YCJ5oup5Lu75L2V6aG16Z2i5oiW5paH5Lu277yBJyxcblx0XHRcdC8vIFByZWZlcmVuY2VzXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAn5L2/55SoQ2F0LWEtbG9057yW6L6R5paH5Lu25pe255qE55uR6KeG5YiX6KGo6YCJ6aG5Jyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICfkuI7ns7vnu5/lj4LmlbDorr7nva7nm7jlkIwnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICfkuI3opoHmm7TmlLnnm5Hop4bnirbmgIEnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICfnm5Hop4bkvb/nlKhDYXQtYS1sb3TnvJbovpHnmoTpobXpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ+WwhuS9v+eUqENhdC1hLWxvdOe8lui+keeahOmhtemdouS7juebkeinhuWIl+ihqOenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XHRcdCflsIbnvJbovpHmoIforrDkuLrlsI/kv67mlLnvvIjoi6XmgqjlnKjns7vnu5/lj4LmlbDorr7nva7kuK3lt7Lorr7nva7lsIbmiYDmnInnvJbovpHmoIforrDkuLrlsI/kv67mlLnvvIzmraTpgInpobnkuI3kvJrlr7nnjrDmnInooYzkuLrov5vooYzmlLnliqjvvIknLFxuXHRcdFx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ+WFgeiuuOWvueS4jeaYr+aWh+S7tueahOmhtemdouWSjOWtkOWIhuexu+i/m+ihjOWIhuexu+aTjeS9nCcsXG5cdFx0XHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAn56e76Zmke3tDaGVjayBjYXRlZ29yaWVzfX3lubbov5vooYzlhbbku5bnu4boioLmuIXnkIYnLFxuXHRcdFx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAn5pyA5aSa5pi+56S655qE5a2Q5YiG57G75pWw6YePJyxcblx0XHRcdC8vIFByb2dyZXNzXG5cdFx0XHQnY2F0LWEtbG90LWxvYWRpbmcnOiAn5q2j5Zyo5Yqg6L294oCm4oCmJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdGluZyc6ICfmraPlnKjnvJbovpHpobXpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC1vZic6ICfvvIzlhbHmnIknLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLWFscmVhZHknOiAn5Lul5LiL6aG16Z2i5bey6Lez6L+H77yM5Zug5Li66aG16Z2i5bey57uP5Zyo5YiG57G75Lit77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOiAn5Lul5LiL6aG16Z2i5bey6Lez6L+H77yM5Zug5Li65om+5LiN5Yiw546w5pyJ5YiG57G777yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOiAn5Lul5LiL6aG16Z2i5peg5rOV57yW6L6R77yM5Zug5Li66L+e5o6l5pyN5Yqh5Zmo5Ye66ZSZ77yaJyxcblx0XHRcdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAn5YWo6YOo6aG16Z2i5bey5aSE55CG44CCJyxcblx0XHRcdCdjYXQtYS1sb3QtZG9uZSc6ICflt7LlrozmiJDvvIEnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAn5bey5Yqg5YWl5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICflt7LlpI3liLbliLDliIbnsbsnLFxuXHRcdFx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAn5bey56e75Yqo5Yiw5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAn5bey5LuO5YiG57G756e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAn6L+U5Zue5Yiw6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICfmib7kuI3liLDliIbnsbvjgIInLFxuXHRcdFx0Ly8gU3VtbWFyaWVzXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliqDlhaXliIbnsbtbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhuexu+mXtOWkjeWItu+8muS7jltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5YiG57G76Ze056e75Yqo77ya5LuOW1tDYXRlZ29yeTokMV1d5YiwW1tDYXRlZ29yeTokMl1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1yZW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muS7juWIhuexu+enu+mZpO+8mltbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7REVGQVVMVF9NRVNTQUdFUywgc2V0TWVzc2FnZXN9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIG1lZGlhd2lraS9jbGFzcy1kb2MgKi9cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04sXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCxcblx0Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIsXG5cdENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVELFxuXHRERUZBVUxUX1NFVFRJTkcsXG5cdFZBUklBTlRTLFxufSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7REVGQVVMVF9NRVNTQUdFUywgc2V0TWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuaW1wb3J0IHR5cGUge01lc3NhZ2VLZXksIFNldHRpbmd9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtnZXRCb2R5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSwgd2dGb3JtYXR0ZWROYW1lc3BhY2VzLCB3Z05hbWVzcGFjZUlkcywgd2dOYW1lc3BhY2VOdW1iZXIsIHdnVGl0bGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vKipcbiAqIENoYW5nZXMgY2F0ZWdvcnkgb2YgbXVsdGlwbGUgZmlsZXNcbiAqL1xuY29uc3QgY2F0QUxvdCA9ICgpOiB2b2lkID0+IHtcblx0LyohIENhdC1hLWxvdCB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRjbGFzcyBDQUwge1xuXHRcdHB1YmxpYyBzdGF0aWMgaXNTZWFyY2hNb2RlID0gZmFsc2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBNRVNTQUdFUzogUmVjb3JkPE1lc3NhZ2VLZXksIHN0cmluZz4gPSBERUZBVUxUX01FU1NBR0VTO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0VUVElORzogU2V0dGluZyA9IERFRkFVTFRfU0VUVElORztcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEFQSV9UQUc6IHN0cmluZyA9IE9QVElPTlMuYXBpVGFnO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRBUkdFVF9OQU1FU1BBQ0U6IG51bWJlciA9IE9QVElPTlMudGFyZ2V0TmFtZXNwYWNlO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ1VSUkVOVF9DQVRFR1JPWTogc3RyaW5nID0gd2dUaXRsZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHdnRm9ybWF0dGVkTmFtZXNwYWNlczogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlcztcblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSB3Z05hbWVzcGFjZUlkczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHdnTmFtZXNwYWNlSWRzO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaXNBdXRvQ29tcGxldGVJbml0ID0gZmFsc2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhcGkgPSBhcGk7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhbHJlYWR5VGhlcmU6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY29ubmVjdGlvbkVycm9yOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdEZvdW5kOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDdXJyZW50ID0gMDtcblx0XHRwcml2YXRlIHN0YXRpYyBjb3VudGVyTmVlZGVkID0gMDtcblxuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDYXQgPSAwO1xuXHRcdHByaXZhdGUgc3RhdGljIGN1cnJlbnRDYXRlZ29yeSA9ICcnO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgZGlhbG9nSGVpZ2h0ID0gNDUwO1xuXHRcdHByaXZhdGUgc3RhdGljIGVkaXRUb2tlbiA9ICcnO1xuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsQ2F0TmFtZSA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlc1tDQUwuVEFSR0VUX05BTUVTUEFDRV0gYXMgc3RyaW5nO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcGFyZW50Q2F0czogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJDYXRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgc2V0dGluZ3M6IE5vbk51bGxhYmxlPHR5cGVvZiB3aW5kb3cuQ2F0QUxvdFByZWZzPiA9IHt9O1xuXHRcdHByaXZhdGUgc3RhdGljIHZhcmlhbnRDYWNoZTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cblx0XHRwcml2YXRlIHN0YXRpYyAkY291bnRlcjogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRwcm9ncmVzc0RpYWxvZzogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRsYWJlbHM6IEpRdWVyeSA9ICQoKTtcblx0XHRwcml2YXRlIHN0YXRpYyAkc2VsZWN0ZWRMYWJlbHM6IEpRdWVyeSA9ICQoKTtcblxuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGNvbnRhaW5lcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGRhdGFDb250YWluZXI6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRtYXJrQ291bnRlcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJHJlc3VsdExpc3Q6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRzZWFyY2hJbnB1dDogSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGhlYWQ6IEpRdWVyeTtcblx0XHRwcml2YXRlIHJlYWRvbmx5ICRsaW5rOiBKUXVlcnk8SFRNTEFuY2hvckVsZW1lbnQ+O1xuXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pikge1xuXHRcdFx0aWYgKCFtdy5tc2coJ2NhdC1hLWxvdC1sb2FkaW5nJykpIHtcblx0XHRcdFx0bXcubWVzc2FnZXMuc2V0KENBTC5NRVNTQUdFUyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJGJvZHkgPSAkYm9keTtcblx0XHRcdENBTC5pbml0U2V0dGluZ3MoKTtcblxuXHRcdFx0Y29uc3QgY29udGFpbmVyID0gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17W0NMQVNTX05BTUUsIENMQVNTX05BTUVfQ09OVEFJTkVSLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVJ9IC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUfSAvPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVR9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e0NBTC5tc2coJ2VudGVyLW5hbWUnKX1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e0NBTC5pc1NlYXJjaE1vZGUgPyBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3NlYXJjaCcpID8/ICcnIDogJyd9XG5cdFx0XHRcdFx0XHRcdFx0b25LZXlEb3duPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSBhcyBKUXVlcnk8SFRNTElucHV0RWxlbWVudD47XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGNhdDogc3RyaW5nID0gJGVsZW1lbnQudmFsKCk/LnRyaW0oKSA/PyAnJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGNhdCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cyhjYXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU30+XG5cdFx0XHRcdFx0XHRcdHtbQ0FMLm1zZygnc2VsZWN0JyksICcgJ119XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlQWxsKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnYWxsJyl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0eycg4oCiICd9XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUFsbChmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdub25lJyl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEfT5cblx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LfT5DYXQtYS1sb3Q8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy4kY29udGFpbmVyID0gJChjb250YWluZXIpIGFzIEpRdWVyeTtcblx0XHRcdHRoaXMuJGNvbnRhaW5lci5hcHBlbmRUbyh0aGlzLiRib2R5KTtcblxuXHRcdFx0dGhpcy4kZGF0YUNvbnRhaW5lciA9IHRoaXMuJGNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfWApO1xuXHRcdFx0dGhpcy4kbWFya0NvdW50ZXIgPSB0aGlzLiRkYXRhQ29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSfWApO1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdCA9IHRoaXMuJGRhdGFDb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUfWApO1xuXHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQgPSB0aGlzLiRkYXRhQ29udGFpbmVyLmZpbmQ8SFRNTElucHV0RWxlbWVudD4oXG5cdFx0XHRcdGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVR9YFxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy4kaGVhZCA9IHRoaXMuJGNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEfWApO1xuXHRcdFx0dGhpcy4kbGluayA9IHRoaXMuJGhlYWQuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS31gKTtcblx0XHR9XG5cblx0XHRwdWJsaWMgYnVpbGRFbGVtZW50cygpOiB2b2lkIHtcblx0XHRcdGNvbnN0IHJlZ2V4Q2F0OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGBeXFxcXHMqJHtDQUwubG9jYWxpemVkUmVnZXgoQ0FMLlRBUkdFVF9OQU1FU1BBQ0UsICdDYXRlZ29yeScpfTpgLCAnJyk7XG5cblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdpbnB1dCBrZXl1cCcsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCB7Y3VycmVudFRhcmdldH0gPSBldmVudDtcblx0XHRcdFx0Y29uc3Qge3ZhbHVlOiBvbGRWYWx9ID0gY3VycmVudFRhcmdldDtcblx0XHRcdFx0Y29uc3QgbmV3VmFsOiBzdHJpbmcgPSBvbGRWYWwucmVwbGFjZShyZWdleENhdCwgJycpO1xuXHRcdFx0XHRpZiAobmV3VmFsICE9PSBvbGRWYWwpIHtcblx0XHRcdFx0XHRjdXJyZW50VGFyZ2V0LnZhbHVlID0gbmV3VmFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgaW5pdEF1dG9jb21wbGV0ZSA9ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0aWYgKENBTC5pc0F1dG9Db21wbGV0ZUluaXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Q0FMLmlzQXV0b0NvbXBsZXRlSW5pdCA9IHRydWU7XG5cblx0XHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQuYXV0b2NvbXBsZXRlKHtcblx0XHRcdFx0XHRzb3VyY2U6IChyZXF1ZXN0OiB7dGVybTogc3RyaW5nfSwgcmVzcG9uc2U6IChhcmc6IEpRdWVyeTxzdHJpbmc+KSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogJ29wZW5zZWFyY2gnLFxuXHRcdFx0XHRcdFx0XHRcdG5hbWVzcGFjZTogQ0FMLlRBUkdFVF9OQU1FU1BBQ0UsXG5cdFx0XHRcdFx0XHRcdFx0cmVkaXJlY3RzOiAncmVzb2x2ZScsXG5cdFx0XHRcdFx0XHRcdFx0c2VhcmNoOiByZXF1ZXN0LnRlcm0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0WzFdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXNwb25zZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0JChyZXN1bHRbMV0pLm1hcCgoX2luZGV4LCBpdGVtOiBzdHJpbmcpOiBzdHJpbmcgPT4gaXRlbS5yZXBsYWNlKHJlZ2V4Q2F0LCAnJykpXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRteTogJ3JpZ2h0IGJvdHRvbScsXG5cdFx0XHRcdFx0XHRhdDogJ3JpZ2h0IHRvcCcsXG5cdFx0XHRcdFx0XHRvZjogdGhpcy4kc2VhcmNoSW5wdXQsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRhcHBlbmRUbzogYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSfWAsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdHRoaXMuJGxpbmsub24oJ2NsaWNrJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdCQoZXZlbnQuY3VycmVudFRhcmdldCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQpO1xuXHRcdFx0XHRpbml0QXV0b2NvbXBsZXRlKCk7XG5cdFx0XHRcdHRoaXMucnVuKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBpbml0U2V0dGluZ3MoKTogdm9pZCB7XG5cdFx0XHRsZXQgY2F0QUxvdFByZWZzOiB0eXBlb2YgQ0FMLnNldHRpbmdzID0gd2luZG93LkNhdEFMb3RQcmVmcyA/PyB7fTtcblx0XHRcdGNvbnN0IHR5cGVPZkNhdEFMb3RQcmVmcyA9IHR5cGVvZiBjYXRBTG90UHJlZnM7XG5cdFx0XHRpZiAoKHR5cGVPZkNhdEFMb3RQcmVmcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoY2F0QUxvdFByZWZzKSkgfHwgdHlwZU9mQ2F0QUxvdFByZWZzICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRjYXRBTG90UHJlZnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBzZXR0aW5nS2V5IG9mIE9iamVjdC5rZXlzKENBTC5ERUZBVUxUX1NFVFRJTkcpIGFzIChrZXlvZiBTZXR0aW5nKVtdKSB7XG5cdFx0XHRcdGNvbnN0IHNldHRpbmcgPSBDQUwuREVGQVVMVF9TRVRUSU5HW3NldHRpbmdLZXldO1xuXG5cdFx0XHRcdENBTC5zZXR0aW5nc1tzZXR0aW5nS2V5XSA9IGNhdEFMb3RQcmVmc1tzZXR0aW5nS2V5XSA/PyBzZXR0aW5nLmRlZmF1bHQ7XG5cblx0XHRcdFx0aWYgKCFzZXR0aW5nLnNlbGVjdF9pMThuKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzZXR0aW5nLnNlbGVjdCA9IHt9O1xuXHRcdFx0XHRmb3IgKGNvbnN0IG1lc3NhZ2VLZXkgb2YgT2JqZWN0LmtleXMoc2V0dGluZy5zZWxlY3RfaTE4bikpIHtcblx0XHRcdFx0XHRjb25zdCBtZXNzYWdlOiBzdHJpbmcgPSBzZXR0aW5nLnNlbGVjdF9pMThuW21lc3NhZ2VLZXldIGFzIGtleW9mIHR5cGVvZiBzZXR0aW5nLnNlbGVjdF9pMThuO1xuXHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHRzZXR0aW5nLnNlbGVjdFtDQUwubXNnKG1lc3NhZ2VLZXkgYXMgbmV2ZXIpXSA9IG1lc3NhZ2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBtc2coa2V5OiBNZXNzYWdlS2V5IGV4dGVuZHMgYGNhdC1hLWxvdC0ke2luZmVyIFB9YCA/IFAgOiBuZXZlciwgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcge1xuXHRcdFx0Y29uc3QgZnVsbEtleTogc3RyaW5nID0gYGNhdC1hLWxvdC0ke2tleX1gO1xuXHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdHJldHVybiBhcmdzLmxlbmd0aCA/IG13Lm1lc3NhZ2UoZnVsbEtleSwgLi4uYXJncykucGFyc2UoKSA6IG13Lm1lc3NhZ2UoZnVsbEtleSkucGxhaW4oKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbG9jYWxpemVkUmVnZXgobmFtZXNwYWNlTnVtYmVyOiBudW1iZXIsIGZhbGxiYWNrOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdFx0Ly8gQ29waWVkIGZyb20gSG90Q2F0LCB0aGFua3MgTHVwby5cblx0XHRcdGNvbnN0IHdpa2lUZXh0Qmxhbms6IHN0cmluZyA9XG5cdFx0XHRcdFN0cmluZy5yYXdgW1xcdCBfXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAwQVxcdTIwMjhcXHUyMDI5XFx1MjAyRlxcdTIwNUZcXHUzMDAwXStgO1xuXHRcdFx0Y29uc3Qgd2lraVRleHRCbGFua1JFOiBSZWdFeHAgPSBuZXcgUmVnRXhwKHdpa2lUZXh0QmxhbmssICdnJyk7XG5cdFx0XHRjb25zdCBjcmVhdGVSZWdleFN0ciA9IChuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRpZiAoIW5hbWU/Lmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgcmVnZXhOYW1lOiBzdHJpbmcgPSAnJztcblx0XHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBpbml0aWFsOiBzdHJpbmcgPSBuYW1lLnNsaWNlKGksIGkgKyAxKTtcblx0XHRcdFx0XHRjb25zdCBsbDogc3RyaW5nID0gaW5pdGlhbC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdGNvbnN0IHVsOiBzdHJpbmcgPSBpbml0aWFsLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdFx0cmVnZXhOYW1lICs9IGxsID09PSB1bCA/IGluaXRpYWwgOiBgWyR7bGx9JHt1bH1dYDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVnZXhOYW1lLnJlcGxhY2UoLyhbJCgpKisuP1xcXFxeXSkvZywgU3RyaW5nLnJhd2BcXCQxYCkucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsIHdpa2lUZXh0QmxhbmspO1xuXHRcdFx0fTtcblx0XHRcdGZhbGxiYWNrID0gZmFsbGJhY2sudG9Mb3dlckNhc2UoKTtcblx0XHRcdGNvbnN0IGNhbm9uaWNhbDogc3RyaW5nIHwgdW5kZWZpbmVkID0gQ0FMLndnRm9ybWF0dGVkTmFtZXNwYWNlc1tuYW1lc3BhY2VOdW1iZXJdPy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0bGV0IHJlZ2V4U3RyaW5nOiBzdHJpbmcgPSBjcmVhdGVSZWdleFN0cihjYW5vbmljYWwpO1xuXHRcdFx0aWYgKGZhbGxiYWNrICYmIGNhbm9uaWNhbCAhPT0gZmFsbGJhY2spIHtcblx0XHRcdFx0cmVnZXhTdHJpbmcgKz0gYHwke2NyZWF0ZVJlZ2V4U3RyKGZhbGxiYWNrKX1gO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBjYXROYW1lIG9mIE9iamVjdC5rZXlzKENBTC53Z05hbWVzcGFjZUlkcykpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGNhdE5hbWUudG9Mb3dlckNhc2UoKSAhPT0gY2Fub25pY2FsICYmXG5cdFx0XHRcdFx0Y2F0TmFtZS50b0xvd2VyQ2FzZSgpICE9PSBmYWxsYmFjayAmJlxuXHRcdFx0XHRcdENBTC53Z05hbWVzcGFjZUlkc1tjYXROYW1lXSA9PT0gbmFtZXNwYWNlTnVtYmVyXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJlZ2V4U3RyaW5nICs9IGB8JHtjcmVhdGVSZWdleFN0cihjYXROYW1lKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYCg/OiR7cmVnZXhTdHJpbmd9KWA7XG5cdFx0fVxuXHRcdHByaXZhdGUgdXBkYXRlU2VsZWN0aW9uQ291bnRlcigpOiB2b2lkIHtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMgPSBDQUwuJGxhYmVscy5maWx0ZXIoYC4ke0NMQVNTX05BTUVfTEFCRUxfU0VMRUNURUR9YCk7XG5cdFx0XHR0aGlzLiRtYXJrQ291bnRlci5zaG93KCkuaHRtbChDQUwubXNnKCdmaWxlcy1zZWxlY3RlZCcsIENBTC4kc2VsZWN0ZWRMYWJlbHMubGVuZ3RoLnRvU3RyaW5nKCkpKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSB0b2dnbGVBbGwoc2VsZWN0OiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRDQUwuJGxhYmVscy50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVELCBzZWxlY3QpO1xuXHRcdFx0dGhpcy51cGRhdGVTZWxlY3Rpb25Db3VudGVyKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgYXN5bmMgZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG5cdFx0XHRpZiAoQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gYXMgc3RyaW5nW107XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0ZXh0OiBjYXRlZ29yeSxcblx0XHRcdFx0dGl0bGU6ICd0ZW1wJyxcblx0XHRcdH07XG5cdFx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgVkFSSUFOVFMpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCB7cGFyc2V9ID0gYXdhaXQgQ0FMLmFwaS5wb3N0KHtcblx0XHRcdFx0XHRcdC4uLnBhcmFtcyxcblx0XHRcdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHRcdFx0fSBhcyB0eXBlb2YgcGFyYW1zKTtcblx0XHRcdFx0XHRjb25zdCB7dGV4dH0gPSBwYXJzZTtcblx0XHRcdFx0XHRyZXN1bHRzW3Jlc3VsdHMubGVuZ3RoXSA9ICQodGV4dCkuZXEoMCkudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0fVxuXHRcdFx0Ly8gRGUtZHVwbGljYXRlXG5cdFx0XHRDQUwudmFyaWFudENhY2hlW2NhdGVnb3J5XSA9IHVuaXF1ZUFycmF5KHJlc3VsdHMpOyAvLyBSZXBsYWNlIGBbLi4ubmV3IFNldCgpXWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgYXN5bmMgcmVnZXhCdWlsZGVyKGNhdGVnb3J5OiBzdHJpbmcpOiBQcm9taXNlPFJlZ0V4cD4ge1xuXHRcdFx0Ly8gQnVpbGQgYSByZWdleHAgc3RyaW5nIGZvciBtYXRjaGluZyB0aGUgZ2l2ZW4gY2F0ZWdvcnk6XG5cdFx0XHRjb25zdCBjYXROYW1lOiBzdHJpbmcgPSBDQUwubG9jYWxpemVkUmVnZXgoQ0FMLlRBUkdFVF9OQU1FU1BBQ0UsICdDYXRlZ29yeScpO1xuXHRcdFx0Ly8gdHJpbSBsZWFkaW5nL3RyYWlsaW5nIHdoaXRlc3BhY2UgYW5kIHVuZGVyc2NvcmVzXG5cdFx0XHRjYXRlZ29yeSA9IGNhdGVnb3J5LnJlcGxhY2UoL15bXFxzX10rLywgJycpLnJlcGxhY2UoL1tcXHNfXSskLywgJycpO1xuXHRcdFx0Ly8gRmluZCBhbGwgdmFyaWFudHNcblx0XHRcdGNvbnN0IHZhcmlhbnRzOiBzdHJpbmdbXSA9IGF3YWl0IENBTC5maW5kQWxsVmFyaWFudHMoY2F0ZWdvcnkpO1xuXHRcdFx0Ly8gZXNjYXBlIHJlZ2V4cCBtZXRhY2hhcmFjdGVycyAoPSBhbnkgQVNDSUkgcHVuY3R1YXRpb24gZXhjZXB0IF8pXG5cdFx0XHRjb25zdCB2YXJpYW50UmVnRXhwczogc3RyaW5nW10gPSBbXTtcblx0XHRcdGZvciAobGV0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcblx0XHRcdFx0dmFyaWFudCA9IG13LnV0aWwuZXNjYXBlUmVnRXhwKHZhcmlhbnQpO1xuXHRcdFx0XHQvLyBhbnkgc2VxdWVuY2Ugb2Ygc3BhY2VzIGFuZCB1bmRlcnNjb3JlcyBzaG91bGQgbWF0Y2ggYW55IG90aGVyXG5cdFx0XHRcdHZhcmlhbnQgPSB2YXJpYW50LnJlcGxhY2UoL1tcXHNfXSsvZywgU3RyaW5nLnJhd2BbXFxzX10rYCk7XG5cdFx0XHRcdC8vIE1ha2UgdGhlIGZpcnN0IGNoYXJhY3RlciBjYXNlLWluc2Vuc2l0aXZlOlxuXHRcdFx0XHRjb25zdCBmaXJzdDogc3RyaW5nID0gdmFyaWFudC5zbGljZSgwLCAxKTtcblx0XHRcdFx0aWYgKGZpcnN0LnRvVXBwZXJDYXNlKCkgIT09IGZpcnN0LnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdFx0XHR2YXJpYW50ID0gYFske2ZpcnN0LnRvVXBwZXJDYXNlKCl9JHtmaXJzdC50b0xvd2VyQ2FzZSgpfV0ke3ZhcmlhbnQuc2xpY2UoMSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXJpYW50UmVnRXhwc1t2YXJpYW50UmVnRXhwcy5sZW5ndGhdID0gdmFyaWFudDtcblx0XHRcdH1cblx0XHRcdC8vIENvbXBpbGUgaXQgaW50byBhIFJlZ0V4cCB0aGF0IG1hdGNoZXMgTWVkaWFXaWtpIGNhdGVnb3J5IHN5bnRheCAoeWVhaCwgaXQgbG9va3MgdWdseSk6XG5cdFx0XHQvLyBYWFg6IHRoZSBmaXJzdCBjYXB0dXJpbmcgcGFyZW5zIGFyZSBhc3N1bWVkIHRvIG1hdGNoIHRoZSBzb3J0a2V5LCBpZiBwcmVzZW50LCBpbmNsdWRpbmcgdGhlIHwgYnV0IGV4Y2x1ZGluZyB0aGUgXV1cblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcW1tcXFxcc19dKiR7Y2F0TmFtZX1bXFxcXHNfXSo6W1xcXFxzX10qKD86JHt2YXJpYW50UmVnRXhwcy5qb2luKFxuXHRcdFx0XHRcdCd8J1xuXHRcdFx0XHQpfSlbXFxcXHNfXSooXFxcXHxbXlxcXFxdXSooPzpcXFxcXVteXFxcXF1dKykqKT9cXFxcXVxcXFxdYCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZG9BUElDYWxsKFxuXHRcdFx0X3BhcmFtczpcblx0XHRcdFx0fCBPbWl0PEFwaUVkaXRQYWdlUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaU9wZW5TZWFyY2hQYXJhbXMsICdmb3JtYXQnPlxuXHRcdFx0XHR8IE9taXQ8QXBpUXVlcnlDYXRlZ29yeU1lbWJlcnNQYXJhbXMsICdmb3JtYXQnPlxuXHRcdFx0XHR8IE9taXQ8QXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMsICdmb3JtYXQnPlxuXHRcdFx0XHR8IE9taXQ8QXBpUXVlcnlUb2tlbnNQYXJhbXMsICdmb3JtYXQnPixcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRjYWxsYmFjazogKGRhdGE6IGFueSkgPT4gdm9pZFxuXHRcdCkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0gX3BhcmFtcyBhcyB0eXBlb2YgX3BhcmFtcyAmIHtcblx0XHRcdFx0Zm9ybWF0OiAnanNvbic7XG5cdFx0XHRcdHRpdGxlPzogc3RyaW5nO1xuXHRcdFx0fTtcblx0XHRcdHBhcmFtc1snZm9ybWF0J10gPSAnanNvbic7XG5cdFx0XHRwYXJhbXNbJ2Zvcm1hdHZlcnNpb24nXSA9ICcyJztcblx0XHRcdGxldCBpOiBudW1iZXIgPSAwO1xuXHRcdFx0Y29uc3QgZG9DYWxsID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCBoYW5kbGVFcnJvciA9IChlcnJvcjogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0bXcubG9nLmVycm9yKCdbQ2F0LWEtbG90XSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdFx0XHRpZiAoaSA8IDQpIHtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZG9DYWxsLCAzMDApO1xuXHRcdFx0XHRcdFx0aSsrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocGFyYW1zWyd0aXRsZSddKSB7XG5cdFx0XHRcdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yW0NBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoXSA9IHBhcmFtc1sndGl0bGUnXTtcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdFx0Q0FMLmFwaS5wb3N0KHBhcmFtcykudGhlbihjYWxsYmFjaykuY2F0Y2goaGFuZGxlRXJyb3IpO1xuXHRcdFx0fTtcblx0XHRcdGRvQ2FsbCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIG1hcmtBc0RvbmUoXG5cdFx0XHQkbWFya2VkTGFiZWw6IEpRdWVyeSxcblx0XHRcdHRhcmdldENhdGVnb3J5OiBzdHJpbmcsXG5cdFx0XHRtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJyB8ICdyZW1vdmUnXG5cdFx0KTogdm9pZCB7XG5cdFx0XHQkbWFya2VkTGFiZWwuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9ET05FKTtcblxuXHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2FkZCc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnYWRkZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY29weSc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnY29waWVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21vdmUnOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ21vdmVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JlbW92ZSc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygncmVtb3ZlZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIHN0YXRpYyBkb0NsZWFudXAodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdHJldHVybiBDQUwuc2V0dGluZ3MuZG9jbGVhbnVwID8gdGV4dC5yZXBsYWNlKC97e1xccypbQ2NdaGVjayBjYXRlZ29yaWVzXFxzKihcXHw/Lio/KX19LywgJycpIDogdGV4dDtcblx0XHR9IC8vIFJlbW92ZSB7e1VuY2F0ZWdvcml6ZWR9fSAoYWxzbyB3aXRoIGNvbW1lbnQpLiBObyBuZWVkIHRvIHJlcGxhY2UgaXQgd2l0aCBhbnl0aGluZ1xuXHRcdHByaXZhdGUgc3RhdGljIHJlbW92ZVVuY2F0KHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKC9cXHtcXHtcXHMqW1V1XW5jYXRlZ29yaXplZFxccyooXFx8Py4qPylcXH1cXH0vLCAnJyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZGlzcGxheVJlc3VsdCgpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKHtcblx0XHRcdFx0Y3Vyc29yOiAnJyxcblx0XHRcdFx0b3ZlcmZsb3c6ICcnLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLiRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUVfRkVFREJBQ0t9YCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FKTtcblxuXHRcdFx0Y29uc3QgJHBhcmVudDogSlF1ZXJ5ID0gQ0FMLiRjb3VudGVyLnBhcmVudCgpO1xuXHRcdFx0JHBhcmVudC5odG1sKDxoMz57Q0FMLm1zZygnZG9uZScpfTwvaDM+KTtcblx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdHtDQUwubXNnKCdhbGwtZG9uZScpfVxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCk7XG5cblx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdENBTC4kcHJvZ3Jlc3NEaWFsb2cucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUFsbChmYWxzZSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtDQUwubXNnKCdyZXR1cm4tdG8tcGFnZScpfVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGgpIHtcblx0XHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxoNT57Q0FMLm1zZygnc2tpcHBlZC1hbHJlYWR5JywgQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGgudG9TdHJpbmcoKSl9PC9oNT5cblx0XHRcdFx0XHRcdHtDQUwuYWxyZWFkeVRoZXJlLnJlZHVjZTwoc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50KVtdPihcblx0XHRcdFx0XHRcdFx0KHByZSwgY3VyLCBpbmRleCkgPT5cblx0XHRcdFx0XHRcdFx0XHRpbmRleCA8IENBTC5hbHJlYWR5VGhlcmUubGVuZ3RoIC0gMSA/IFsuLi5wcmUsIGN1ciwgPGJyIGtleT17aW5kZXh9IC8+XSA6IFsuLi5wcmUsIGN1cl0sXG5cdFx0XHRcdFx0XHRcdFtdXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKENBTC5ub3RGb3VuZC5sZW5ndGgpIHtcblx0XHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxoNT57Q0FMLm1zZygnc2tpcHBlZC1ub3QtZm91bmQnLCBDQUwubm90Rm91bmQubGVuZ3RoLnRvU3RyaW5nKCkpfTwvaDU+XG5cdFx0XHRcdFx0XHR7Q0FMLm5vdEZvdW5kLnJlZHVjZTwoc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50KVtdPihcblx0XHRcdFx0XHRcdFx0KHByZSwgY3VyLCBpbmRleCkgPT5cblx0XHRcdFx0XHRcdFx0XHRpbmRleCA8IENBTC5ub3RGb3VuZC5sZW5ndGggLSAxID8gWy4uLnByZSwgY3VyLCA8YnIga2V5PXtpbmRleH0gLz5dIDogWy4uLnByZSwgY3VyXSxcblx0XHRcdFx0XHRcdFx0W11cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGgpIHtcblx0XHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxoNT57Q0FMLm1zZygnc2tpcHBlZC1zZXJ2ZXInLCBDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aC50b1N0cmluZygpKX08L2g1PlxuXHRcdFx0XHRcdFx0e0NBTC5jb25uZWN0aW9uRXJyb3IucmVkdWNlPChzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpW10+KFxuXHRcdFx0XHRcdFx0XHQocHJlLCBjdXIsIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0XHRcdGluZGV4IDwgQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGggLSAxXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IFsuLi5wcmUsIGN1ciwgPGJyIGtleT17aW5kZXh9IC8+XVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBbLi4ucHJlLCBjdXJdLFxuXHRcdFx0XHRcdFx0XHRbXVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSB1cGRhdGVDb3VudGVyKCk6IHZvaWQge1xuXHRcdFx0Q0FMLmNvdW50ZXJDdXJyZW50Kys7XG5cdFx0XHRpZiAoQ0FMLmNvdW50ZXJDdXJyZW50ID4gQ0FMLmNvdW50ZXJOZWVkZWQpIHtcblx0XHRcdFx0dGhpcy5kaXNwbGF5UmVzdWx0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRDQUwuJGNvdW50ZXIudGV4dChDQUwuY291bnRlckN1cnJlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIGFzeW5jIGVkaXRDYXRlZ29yaWVzKFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdHJlc3VsdDogUmVjb3JkPHN0cmluZywgYW55Pixcblx0XHRcdG1hcmtlZExhYmVsOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz5bMF0sXG5cdFx0XHR0YXJnZXRDYXRlZ29yeTogc3RyaW5nLFxuXHRcdFx0bW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZScgfCAncmVtb3ZlJ1xuXHRcdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdFx0Y29uc3QgW21hcmtlZExhYmVsVGl0bGUsICRtYXJrZWRMYWJlbF0gPSBtYXJrZWRMYWJlbDtcblxuXHRcdFx0aWYgKCFyZXN1bHQ/LlsncXVlcnknXSkge1xuXHRcdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yW0NBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoXSA9IG1hcmtlZExhYmVsVGl0bGU7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGxldCBvcmlnaW5UZXh0OiBzdHJpbmcgPSAnJztcblx0XHRcdGxldCBzdGFydHRpbWVzdGFtcDogbnVtYmVyID0gMDtcblx0XHRcdGxldCB0aW1lc3RhbXA6IG51bWJlciA9IDA7XG5cdFx0XHRDQUwuZWRpdFRva2VuID0gcmVzdWx0WydxdWVyeSddLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRjb25zdCB7cGFnZXN9ID0gcmVzdWx0WydxdWVyeSddO1xuXG5cdFx0XHRjb25zdCBbcGFnZV0gPSBwYWdlcztcblx0XHRcdG9yaWdpblRleHQgPSBwYWdlLnJldmlzaW9uc1swXS5jb250ZW50O1xuXHRcdFx0KHtzdGFydHRpbWVzdGFtcH0gPSBwYWdlKTtcblx0XHRcdFt7dGltZXN0YW1wfV0gPSBwYWdlLnJldmlzaW9ucztcblxuXHRcdFx0Y29uc3Qgc291cmNlY2F0OiBzdHJpbmcgPSBDQUwuQ1VSUkVOVF9DQVRFR1JPWTtcblx0XHRcdC8vIENoZWNrIGlmIHRoYXQgZmlsZSBpcyBhbHJlYWR5IGluIHRoYXQgY2F0ZWdvcnlcblx0XHRcdGNvbnN0IHRhcmdlUmVnRXhwID0gYXdhaXQgQ0FMLnJlZ2V4QnVpbGRlcih0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRpZiAobW9kZSAhPT0gJ3JlbW92ZScgJiYgdGFyZ2VSZWdFeHAudGVzdChvcmlnaW5UZXh0KSAmJiBtb2RlICE9PSAnbW92ZScpIHtcblx0XHRcdFx0Q0FMLmFscmVhZHlUaGVyZVtDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aF0gPSBtYXJrZWRMYWJlbFRpdGxlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaXggdGV4dFxuXHRcdFx0bGV0IHRleHQ6IHN0cmluZyA9IG9yaWdpblRleHQ7XG5cdFx0XHRsZXQgc3VtbWFyeTogc3RyaW5nO1xuXHRcdFx0Y29uc3Qgc291cmNlQ2F0UmVnRXhwID0gYXdhaXQgQ0FMLnJlZ2V4QnVpbGRlcihzb3VyY2VjYXQpO1xuXHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2FkZCc6XG5cdFx0XHRcdFx0dGV4dCArPSBgXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9XV1cXG5gO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LWFkZCcpLnJlcGxhY2UoJyQxJywgdGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjb3B5Jzpcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0c291cmNlQ2F0UmVnRXhwLFxuXHRcdFx0XHRcdFx0YFtbJHtDQUwubG9jYWxDYXROYW1lfToke3NvdXJjZWNhdH0kMV1dXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9JDFdXWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LWNvcHknKS5yZXBsYWNlKCckMScsIHNvdXJjZWNhdCkucmVwbGFjZSgnJDInLCB0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRcdFx0Ly8gSWYgY2F0ZWdvcnkgaXMgYWRkZWQgdGhyb3VnaCB0ZW1wbGF0ZTpcblx0XHRcdFx0XHRpZiAob3JpZ2luVGV4dCA9PT0gdGV4dCkge1xuXHRcdFx0XHRcdFx0dGV4dCArPSBgXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9XV1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbW92ZSc6XG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShzb3VyY2VDYXRSZWdFeHAsIGBbWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX0kMV1dYCk7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktbW92ZScpLnJlcGxhY2UoJyQxJywgc291cmNlY2F0KS5yZXBsYWNlKCckMicsIHRhcmdldENhdGVnb3J5KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmVtb3ZlJzpcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKHNvdXJjZUNhdFJlZ0V4cCwgJycpO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LXJlbW92ZScpLnJlcGxhY2UoJyQxJywgc291cmNlY2F0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRleHQgPT09IG9yaWdpblRleHQpIHtcblx0XHRcdFx0Q0FMLm5vdEZvdW5kW0NBTC5ub3RGb3VuZC5sZW5ndGhdID0gbWFya2VkTGFiZWxUaXRsZTtcblx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIHVuY2F0IGFmdGVyIHdlIGNoZWNrZWQgd2hldGhlciB3ZSBjaGFuZ2VkIHRoZSB0ZXh0IHN1Y2Nlc3NmdWxseS5cblx0XHRcdC8vIE90aGVyd2lzZSB3ZSBtaWdodCBmYWlsIHRvIGRvIHRoZSBjaGFuZ2VzLCBidXQgc3RpbGwgcmVwbGFjZSB7e3VuY2F0fX1cblx0XHRcdGlmIChtb2RlICE9PSAncmVtb3ZlJykge1xuXHRcdFx0XHR0ZXh0ID0gQ0FMLmRvQ2xlYW51cChDQUwucmVtb3ZlVW5jYXQodGV4dCkpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdHRva2VuOiBDQUwuZWRpdFRva2VuLFxuXHRcdFx0XHRcdHRhZ3M6IENBTC5BUElfVEFHLFxuXHRcdFx0XHRcdHRpdGxlOiBtYXJrZWRMYWJlbFRpdGxlLFxuXHRcdFx0XHRcdGFzc2VydDogJ3VzZXInLFxuXHRcdFx0XHRcdGJvdDogdHJ1ZSxcblx0XHRcdFx0XHRiYXNldGltZXN0YW1wOiB0aW1lc3RhbXAgYXMgdW5rbm93biBhcyBzdHJpbmcsXG5cdFx0XHRcdFx0d2F0Y2hsaXN0OiBDQUwuc2V0dGluZ3Mud2F0Y2hsaXN0IGFzIG5ldmVyLFxuXHRcdFx0XHRcdHRleHQsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRzdGFydHRpbWVzdGFtcDogc3RhcnR0aW1lc3RhbXAgYXMgdW5rbm93biBhcyBzdHJpbmcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblxuXHRcdFx0Q0FMLm1hcmtBc0RvbmUoJG1hcmtlZExhYmVsLCB0YXJnZXRDYXRlZ29yeSwgbW9kZSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0Q29udGVudChcblx0XHRcdG1hcmtlZExhYmVsOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz5bMF0sXG5cdFx0XHR0YXJnZXRDYXRlZ29yeTogc3RyaW5nLFxuXHRcdFx0bW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZSdcblx0XHQpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0XHRcdHRpdGxlczogbWFya2VkTGFiZWxbMF0sXG5cdFx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJ10sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxuXHRcdFx0XHRcdHZvaWQgdGhpcy5lZGl0Q2F0ZWdvcmllcyhyZXN1bHQsIG1hcmtlZExhYmVsLCB0YXJnZXRDYXRlZ29yeSwgbW9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGdldFRpdGxlRnJvbUxpbmsoaHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJldHVybiAoZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYgPz8gJycpLm1hdGNoKC93aWtpXFwvKC4rPykoPzojLispPyQvKT8uWzFdID8/ICcnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIGdldE1hcmtlZExhYmVscygpOiBbc3RyaW5nLCBKUXVlcnldW10ge1xuXHRcdFx0Y29uc3QgbWFya2VkTGFiZWxzOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz4gPSBbXTtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMgPSBDQUwuJGxhYmVscy5maWx0ZXIoYC4ke0NMQVNTX05BTUVfTEFCRUxfU0VMRUNURUR9YCk7XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzLmVhY2goKF9pbmRleCwgbGFiZWwpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgJGxhYmVsOiBKUXVlcnkgPSAkKGxhYmVsKTtcblx0XHRcdFx0Y29uc3QgJGxhYmVsTGluazogSlF1ZXJ5ID0gJGxhYmVsLmZpbmQoJ2FbdGl0bGVdJyk7XG5cdFx0XHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgPVxuXHRcdFx0XHRcdCRsYWJlbExpbmsuYXR0cigndGl0bGUnKT8udHJpbSgpIHx8XG5cdFx0XHRcdFx0Q0FMLmdldFRpdGxlRnJvbUxpbmsoJGxhYmVsTGluay5hdHRyKCdocmVmJykpIHx8XG5cdFx0XHRcdFx0Q0FMLmdldFRpdGxlRnJvbUxpbmsoJGxhYmVsLmZpbmQoJ2EnKS5hdHRyKCdocmVmJykpO1xuXHRcdFx0XHRtYXJrZWRMYWJlbHNbbWFya2VkTGFiZWxzLmxlbmd0aF0gPSBbdGl0bGUsICRsYWJlbF07XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBtYXJrZWRMYWJlbHM7XG5cdFx0fVxuXHRcdHByaXZhdGUgc2hvd1Byb2dyZXNzKCk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3Moe1xuXHRcdFx0XHRjdXJzb3I6ICd3YWl0Jyxcblx0XHRcdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdFx0fSk7XG5cdFx0XHRDQUwuJHByb2dyZXNzRGlhbG9nID0gJChcblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7Q0FMLm1zZygnZWRpdGluZycpfVxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVJ9PntDQUwuY291bnRlckN1cnJlbnR9PC9zcGFuPlxuXHRcdFx0XHRcdHtbQ0FMLm1zZygnb2YnKSwgQ0FMLmNvdW50ZXJOZWVkZWRdfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkuZGlhbG9nKHtcblx0XHRcdFx0ZGlhbG9nQ2xhc3M6IENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdFx0XHRcdG1pbkhlaWdodDogOTAsXG5cdFx0XHRcdGhlaWdodDogOTAsXG5cdFx0XHRcdHdpZHRoOiA0NTAsXG5cdFx0XHRcdG1vZGFsOiB0cnVlLFxuXHRcdFx0XHRjbG9zZU9uRXNjYXBlOiBmYWxzZSxcblx0XHRcdFx0ZHJhZ2dhYmxlOiBmYWxzZSxcblx0XHRcdFx0cmVzaXphYmxlOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0ZFRURCQUNLfSAudWktZGlhbG9nLXRpdGxlYmFyYCkuaGlkZSgpO1xuXHRcdFx0dGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0ZFRURCQUNLfSAudWktZGlhbG9nLWNvbnRlbnRgKS5oZWlnaHQoJ2F1dG8nKTtcblx0XHRcdENBTC4kY291bnRlciA9IHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVJ9YCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZywgbW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZScpOiB2b2lkIHtcblx0XHRcdGNvbnN0IG1hcmtlZExhYmVsczogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+ID0gdGhpcy5nZXRNYXJrZWRMYWJlbHMoKTtcblx0XHRcdGlmICghbWFya2VkTGFiZWxzLmxlbmd0aCkge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShDQUwubXNnKCdub25lLXNlbGVjdGVkJyksIHtcblx0XHRcdFx0XHR0YWc6ICdjYXRBTG90Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdENBTC5hbHJlYWR5VGhlcmUgPSBbXTtcblx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3IgPSBbXTtcblx0XHRcdENBTC5ub3RGb3VuZCA9IFtdO1xuXHRcdFx0Q0FMLmNvdW50ZXJDdXJyZW50ID0gMTtcblx0XHRcdENBTC5jb3VudGVyTmVlZGVkID0gbWFya2VkTGFiZWxzLmxlbmd0aDtcblx0XHRcdHRoaXMuc2hvd1Byb2dyZXNzKCk7XG5cdFx0XHRmb3IgKGNvbnN0IG1hcmtlZExhYmVsIG9mIG1hcmtlZExhYmVscykge1xuXHRcdFx0XHR0aGlzLmdldENvbnRlbnQobWFya2VkTGFiZWwsIHRhcmdldENhdGVnb3J5LCBtb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBhZGRIZXJlKHRhcmdldENhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnksICdhZGQnKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBjb3B5SGVyZSh0YXJnZXRDYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5LCAnY29weScpO1xuXHRcdH1cblx0XHRwcml2YXRlIG1vdmVIZXJlKHRhcmdldENhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnksICdtb3ZlJyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgY3JlYXRlQ2F0TGlua3Moc3ltYm9sOiBzdHJpbmcsIGNhdGVnb3JpZXM6IHN0cmluZ1tdKTogdm9pZCB7XG5cdFx0XHRjYXRlZ29yaWVzLnNvcnQoKTtcblx0XHRcdGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuXHRcdFx0XHRjb25zdCAkdHIgPSAkKFxuXHRcdFx0XHRcdDx0ciBkYXRhc2V0PXt7Y2F0ZWdvcnl9fT5cblx0XHRcdFx0XHRcdDx0ZD57c3ltYm9sfTwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtjYXRlZ29yeX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQpO1xuXHRcdFx0XHQvLyBDYW4ndCBtb3ZlIHRvIHNvdXJjZSBjYXRlZ29yeVxuXHRcdFx0XHRpZiAoY2F0ZWdvcnkgIT09IENBTC5DVVJSRU5UX0NBVEVHUk9ZICYmIENBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0XHQkdHIuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTn1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuYWRkSGVyZSgkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FkZCcpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2F0ZWdvcnkgIT09IENBTC5DVVJSRU5UX0NBVEVHUk9ZICYmICFDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdFx0JHRyLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5jb3B5SGVyZSgkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2NvcHknKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5tb3ZlSGVyZSgkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ21vdmUnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuZmluZCgndGFibGUnKS5hcHBlbmQoJHRyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBzaG93Q2F0ZWdvcnlMaXN0KCk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3MoJ2N1cnNvcicsICcnKTtcblx0XHRcdGNvbnN0IGN1cnJlbnRDYXRlZ29yaWVzOiBzdHJpbmdbXSA9IFtDQUwuY3VycmVudENhdGVnb3J5XTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuZW1wdHkoKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuYXBwZW5kKDx0YWJsZSAvPik7XG5cdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpEnLCBDQUwucGFyZW50Q2F0cyk7XG5cdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpInLCBjdXJyZW50Q2F0ZWdvcmllcyk7XG5cdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpMnLCBDQUwuc3ViQ2F0cyk7XG5cdFx0XHQvLyBSZXNldCB3aWR0aFxuXHRcdFx0dGhpcy4kY29udGFpbmVyLndpZHRoKCcnKTtcblx0XHRcdHRoaXMuJGNvbnRhaW5lci5oZWlnaHQoJycpO1xuXHRcdFx0dGhpcy4kY29udGFpbmVyLndpZHRoKE1hdGgubWluKCh0aGlzLiRjb250YWluZXIud2lkdGgoKSA/PyAwKSAqIDEuMSArIDE1LCAoJCh3aW5kb3cpLndpZHRoKCkgPz8gMCkgLSAxMCkpO1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5jc3Moe1xuXHRcdFx0XHQnbWF4LWhlaWdodCc6IGAke0NBTC5kaWFsb2dIZWlnaHR9cHhgLFxuXHRcdFx0XHRoZWlnaHQ6ICcnLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0UGFyZW50Q2F0cygpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdHRpdGxlczogYENhdGVnb3J5OiR7Q0FMLmN1cnJlbnRDYXRlZ29yeX1gLFxuXHRcdFx0XHRcdHByb3A6ICdjYXRlZ29yaWVzJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdENBTC5wYXJlbnRDYXRzID0gW107XG5cdFx0XHRcdFx0Y29uc3Qge3BhZ2VzfSA9IHJlc3VsdC5xdWVyeTtcblx0XHRcdFx0XHRpZiAocGFnZXNbMF0/Lm1pc3NpbmcpIHtcblx0XHRcdFx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnJyk7XG5cdFx0XHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0Lmh0bWwoXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX05PX0ZPVU5EfT5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnY2F0LW5vdC1mb3VuZCcpfVxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaSJywgW0NBTC5jdXJyZW50Q2F0ZWdvcnldKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGV0IGNhdGVnb3JpZXM6IHt0aXRsZTogc3RyaW5nfVtdID0gW107XG5cdFx0XHRcdFx0W3tjYXRlZ29yaWVzfV0gPSBwYWdlcztcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0XHRDQUwucGFyZW50Q2F0c1tDQUwucGFyZW50Q2F0cy5sZW5ndGhdID0gY2F0LnRpdGxlLnJlcGxhY2UoL15bXjpdKzovLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdENBTC5jb3VudGVyQ2F0Kys7XG5cdFx0XHRcdFx0aWYgKENBTC5jb3VudGVyQ2F0ID09PSAyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNob3dDYXRlZ29yeUxpc3QoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0U3ViQ2F0cygpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdGxpc3Q6ICdjYXRlZ29yeW1lbWJlcnMnLFxuXHRcdFx0XHRcdGNtdHlwZTogJ3N1YmNhdCcsXG5cdFx0XHRcdFx0Y21saW1pdDogQ0FMLnNldHRpbmdzLnN1YmNhdGNvdW50IGFzIG5ldmVyLFxuXHRcdFx0XHRcdGNtdGl0bGU6IGBDYXRlZ29yeToke0NBTC5jdXJyZW50Q2F0ZWdvcnl9YCxcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGNhdHM6IHt0aXRsZTogc3RyaW5nfVtdID0gcmVzdWx0Py5xdWVyeT8uY2F0ZWdvcnltZW1iZXJzIHx8IFtdO1xuXHRcdFx0XHRcdENBTC5zdWJDYXRzID0gW107XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBjYXQgb2YgY2F0cykge1xuXHRcdFx0XHRcdFx0Q0FMLnN1YkNhdHNbQ0FMLnN1YkNhdHMubGVuZ3RoXSA9IGNhdC50aXRsZS5yZXBsYWNlKC9eW146XSs6LywgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDQUwuY291bnRlckNhdCsrO1xuXHRcdFx0XHRcdGlmIChDQUwuY291bnRlckNhdCA9PT0gMikge1xuXHRcdFx0XHRcdFx0dGhpcy5zaG93Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldENhdGVnb3J5TGlzdCgpOiB2b2lkIHtcblx0XHRcdENBTC5jb3VudGVyQ2F0ID0gMDtcblx0XHRcdHRoaXMuZ2V0UGFyZW50Q2F0cygpO1xuXHRcdFx0dGhpcy5nZXRTdWJDYXRzKCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgdXBkYXRlQ2F0cyhjYXQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XG5cdFx0XHRDQUwuY3VycmVudENhdGVnb3J5ID0gY2F0O1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5odG1sKDxkaXY+e0NBTC5tc2coJ2xvYWRpbmcnKX08L2Rpdj4pO1xuXHRcdFx0dGhpcy5nZXRDYXRlZ29yeUxpc3QoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGZpbmRBbGxMYWJlbHMoKTogdm9pZCB7XG5cdFx0XHQvLyBJdCdzIHBvc3NpYmxlIHRvIGFsbG93IGFueSBraW5kIG9mIHBhZ2VzIGFzIHdlbGwgYnV0IHdoYXQgaGFwcGVucyBpZiB5b3UgY2xpY2sgb24gXCJzZWxlY3QgYWxsXCIgYW5kIGRvbid0IGV4cGVjdCBpdFxuXHRcdFx0aWYgKENBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0Q0FMLiRsYWJlbHMgPSB0aGlzLiRib2R5LmZpbmQoJ3RhYmxlLnNlYXJjaFJlc3VsdEltYWdlJykuZmluZCgndHI+dGQnKS5lcSgxKTtcblx0XHRcdFx0aWYgKENBTC5zZXR0aW5ncy5lZGl0cGFnZXMpIHtcblx0XHRcdFx0XHRDQUwuJGxhYmVscyA9IENBTC4kbGFiZWxzLmFkZCgnZGl2Lm13LXNlYXJjaC1yZXN1bHQtaGVhZGluZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRDQUwuJGxhYmVscyA9IHRoaXMuJGJvZHlcblx0XHRcdFx0XHQuZmluZCgnZGl2LmdhbGxlcnl0ZXh0Jylcblx0XHRcdFx0XHQuYWRkKHRoaXMuJGJvZHkuZmluZCgnZGl2I213LWNhdGVnb3J5LW1lZGlhJykuZmluZCgnbGlbY2xhc3MhPVwiZ2FsbGVyeWJveFwiXScpKTtcblx0XHRcdFx0aWYgKENBTC5zZXR0aW5ncy5lZGl0cGFnZXMpIHtcblx0XHRcdFx0XHRjb25zdCAkcGFnZXM6IEpRdWVyeTxIVE1MTElFbGVtZW50PiA9IHRoaXMuJGJvZHlcblx0XHRcdFx0XHRcdC5maW5kKCdkaXYjbXctcGFnZXMsIGRpdiNtdy1zdWJjYXRlZ29yaWVzJylcblx0XHRcdFx0XHRcdC5maW5kKCdsaScpO1xuXHRcdFx0XHRcdENBTC4kbGFiZWxzID0gQ0FMLiRsYWJlbHMuYWRkKCRwYWdlcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBtYWtlQ2xpY2thYmxlKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5maW5kQWxsTGFiZWxzKCk7XG5cdFx0XHRDQUwuJGxhYmVscy5hZGRDbGFzcyhDTEFTU19OQU1FX0xBQkVMKS5vbkNhdEFMb3RTaGlmdENsaWNrKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0dGhpcy51cGRhdGVTZWxlY3Rpb25Db3VudGVyKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHJ1bigpOiB2b2lkIHtcblx0XHRcdGlmICh0aGlzLiRsaW5rLmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEKSkge1xuXHRcdFx0XHR0aGlzLm1ha2VDbGlja2FibGUoKTtcblx0XHRcdFx0dGhpcy4kZGF0YUNvbnRhaW5lci5zaG93KCk7XG5cdFx0XHRcdHRoaXMuJGNvbnRhaW5lci5yZXNpemFibGUoe1xuXHRcdFx0XHRcdGFsc29SZXNpemU6IHRoaXMuJHJlc3VsdExpc3QsXG5cdFx0XHRcdFx0aGFuZGxlczogJ24nLFxuXHRcdFx0XHRcdHJlc2l6ZTogKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCAkY3VycmVudFRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHQkY3VycmVudFRhcmdldC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAnJyxcblx0XHRcdFx0XHRcdFx0dG9wOiAnJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0Q0FMLmRpYWxvZ0hlaWdodCA9ICRjdXJyZW50VGFyZ2V0LmhlaWdodCgpID8/IENBTC5kaWFsb2dIZWlnaHQ7XG5cdFx0XHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdG1heEhlaWdodDogJycsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAnJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmNzcygnbWF4LWhlaWdodCcsICc0NTBweCcpO1xuXHRcdFx0XHRpZiAoQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cygnUGljdHVyZXMgYW5kIGltYWdlcycpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cyhDQUwuQ1VSUkVOVF9DQVRFR1JPWSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLiRjb250YWluZXIucmVzaXphYmxlKCdkZXN0cm95Jyk7XG5cdFx0XHRcdHRoaXMuJGNvbnRhaW5lci5jc3MoJ3dpZHRoJywgJycpO1xuXHRcdFx0XHRDQUwuJGxhYmVscy5vZmYoJ2NsaWNrLmNhdEFMb3QnKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoXG5cdFx0KHdnTmFtZXNwYWNlTnVtYmVyID09PSAtMSAmJiB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ1NlYXJjaCcpIHx8XG5cdFx0d2dOYW1lc3BhY2VOdW1iZXIgPT09IE9QVElPTlMudGFyZ2V0TmFtZXNwYWNlXG5cdCkge1xuXHRcdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gLTEpIHtcblx0XHRcdENBTC5pc1NlYXJjaE1vZGUgPSB0cnVlO1xuXHRcdH1cblx0XHQvKiEgQ2F0LWEtbG90IG1lc3NhZ2VzIHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG5cdFx0c2V0TWVzc2FnZXMoKTtcblx0XHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRcdG5ldyBDQUwoJGJvZHkpLmJ1aWxkRWxlbWVudHMoKTtcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtjYXRBTG90fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYENhdC1hLWxvdC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIG1lZGlhd2lraS9jbGFzcy1kb2MgKi9cbmltcG9ydCB7Q0xBU1NfTkFNRV9MQUJFTCwgQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVELCBDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEfSBmcm9tICcuL2NvbnN0YW50JztcblxudHlwZSBPbkNhdEFMb3RTaGlmdENsaWNrID0gKHRoaXM6IEpRdWVyeSwgY2FsbGJhY2s6ICgpID0+IHVua25vd24pID0+IEpRdWVyeTtcbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIEpRdWVyeSB7XG5cdFx0b25DYXRBTG90U2hpZnRDbGljazogT25DYXRBTG90U2hpZnRDbGljaztcblx0fVxufVxuXG5jb25zdCBleHRlbmRKUXVlcnlQcm90b3R5cGUgPSAoKTogdm9pZCA9PiB7XG5cdC8qISBqUXVlcnkgY2hlY2tib3hTaGlmdENsaWNrIHwgR1BMLTIuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6R1BMPiAqL1xuXHQkLmZuLmV4dGVuZCh7XG5cdFx0b25DYXRBTG90U2hpZnRDbGljazogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRsZXQgcHJldkNoZWNrYm94OiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cblx0XHRcdC8vIFdoZW4gb3VyIGJveGVzIGFyZSBjbGlja2VkLi5cblx0XHRcdHRoaXMub24oJ2NsaWNrLmNhdEFMb3QnLCAoZXZlbnQ6IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHQvLyBQcmV2ZW50IGZvbGxvd2luZyB0aGUgbGluayBhbmQgdGV4dCBzZWxlY3Rpb25cblx0XHRcdFx0aWYgKCFldmVudC5jdHJsS2V5KSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEhpZ2hsaWdodCBsYXN0IHNlbGVjdGVkXG5cdFx0XHRcdHRoaXMucGFyZW50cygnYm9keScpXG5cdFx0XHRcdFx0LmZpbmQoYC4ke0NMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRH1gKVxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQpO1xuXG5cdFx0XHRcdGxldCAkdGhpc0NvbnRyb2wgPSAkKGV2ZW50LnRhcmdldCkgYXMgSlF1ZXJ5O1xuXHRcdFx0XHRpZiAoISR0aGlzQ29udHJvbC5oYXNDbGFzcyhDTEFTU19OQU1FX0xBQkVMKSkge1xuXHRcdFx0XHRcdCR0aGlzQ29udHJvbCA9ICR0aGlzQ29udHJvbC5wYXJlbnRzKGAuJHtDTEFTU19OQU1FX0xBQkVMfWApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JHRoaXNDb250cm9sLmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCk7XG5cblx0XHRcdFx0Ly8gQW5kIG9uZSBoYXMgYmVlbiBjbGlja2VkIGJlZm9yZS4uLlxuXHRcdFx0XHRpZiAocHJldkNoZWNrYm94ICYmIGV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0XHRcdFx0Y29uc3QgbWV0aG9kOiAnYWRkQ2xhc3MnIHwgJ3JlbW92ZUNsYXNzJyA9ICR0aGlzQ29udHJvbC5oYXNDbGFzcyhDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEKVxuXHRcdFx0XHRcdFx0PyAnYWRkQ2xhc3MnXG5cdFx0XHRcdFx0XHQ6ICdyZW1vdmVDbGFzcyc7XG5cdFx0XHRcdFx0Ly8gQ2hlY2sgb3IgdW5jaGVjayB0aGlzIG9uZSBhbmQgYWxsIGluLWJldHdlZW4gY2hlY2tib3hlc1xuXHRcdFx0XHRcdHRoaXMuc2xpY2UoXG5cdFx0XHRcdFx0XHRNYXRoLm1pbih0aGlzLmluZGV4KHByZXZDaGVja2JveCksIHRoaXMuaW5kZXgoJHRoaXNDb250cm9sKSksXG5cdFx0XHRcdFx0XHRNYXRoLm1heCh0aGlzLmluZGV4KHByZXZDaGVja2JveCksIHRoaXMuaW5kZXgoJHRoaXNDb250cm9sKSkgKyAxXG5cdFx0XHRcdFx0KVttZXRob2RdKENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEVpdGhlciB3YXksIHVwZGF0ZSB0aGUgcHJldkNoZWNrYm94IHZhcmlhYmxlIHRvIHRoZSBvbmUgY2xpY2tlZCBub3dcblx0XHRcdFx0cHJldkNoZWNrYm94ID0gJHRoaXNDb250cm9sO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSBhcyBPbkNhdEFMb3RTaGlmdENsaWNrLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7ZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlfTtcbiIsICJpbXBvcnQge2NhdEFMb3R9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7ZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlfSBmcm9tICcuL21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlJztcblxuLyohIGpRdWVyeSBjaGVja2JveFNoaWZ0Q2xpY2sgfCBHUEwtMi4wIDxodHRwczovL3F3YmsuY2MvSDpHUEw+ICovXG5leHRlbmRKUXVlcnlQcm90b3R5cGUoKTtcbi8qISBDYXQtYS1sb3QgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cbmNhdEFMb3QoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxTQUFVO0FBQ1YsSUFBQUMsa0JBQW1CO0FBQ25CLElBQUFD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QUFDN0M0Vyx5QkFBZUEsYUFBYUYsUUFBQSxJQUFBMVgsT0FBWWdCLGdCQUFnQixDQUFFO1FBQzNEO0FBRUE0VyxxQkFBYXZJLFNBQVNuTyw4QkFBOEIsRUFBRThILFlBQVk3SCx5QkFBeUI7QUFHM0YsWUFBSW9XLGdCQUFnQmhSLE1BQU11UixVQUFVO0FBQ25DLGdCQUFNQyxTQUFxQ0gsYUFBYW5CLFNBQVN0Vix5QkFBeUIsSUFDdkYsYUFDQTtBQUVILGVBQUtxSyxNQUNKeUosS0FBS0MsSUFBSSxLQUFLOUUsTUFBTW1ILFlBQVksR0FBRyxLQUFLbkgsTUFBTXdILFlBQVksQ0FBQyxHQUMzRDNDLEtBQUsrQyxJQUFJLEtBQUs1SCxNQUFNbUgsWUFBWSxHQUFHLEtBQUtuSCxNQUFNd0gsWUFBWSxDQUFDLElBQUksQ0FDaEUsRUFBRUcsTUFBTSxFQUFFNVcseUJBQXlCO1FBQ3BDO0FBRUFvVyx1QkFBZUs7QUFFZixZQUFJLE9BQU9wSixhQUFhLFlBQVk7QUFDbkNBLG1CQUFTO1FBQ1Y7TUFDRCxDQUFDO0FBRUQsYUFBTztJQUNSO0VBQ0QsQ0FBQztBQUNGOztBQ3REQTtBQUNBNEksc0JBQXNCO0FBQ3RCO0FBQ0E3VCxRQUFROyIsCiAgIm5hbWVzIjogWyJhcGlUYWciLCAidGFyZ2V0TmFtZXNwYWNlIiwgInZlcnNpb24iLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUiIsICJjb25jYXQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTiIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEIiwgIkNMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSIiwgIkNMQVNTX05BTUVfRkVFREJBQ0siLCAiQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FIiwgIkNMQVNTX05BTUVfTEFCRUwiLCAiQ0xBU1NfTkFNRV9MQUJFTF9ET05FIiwgIkNMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCIsICJDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEIiwgIkRFRkFVTFRfU0VUVElORyIsICJkb2NsZWFudXAiLCAiZGVmYXVsdCIsICJsYWJlbF9pMThuIiwgImVkaXRwYWdlcyIsICJtaW5vciIsICJzdWJjYXRjb3VudCIsICJ3YXRjaGxpc3QiLCAic2VsZWN0X2kxOG4iLCAid2F0Y2hfbm9jaGFuZ2UiLCAid2F0Y2hfcHJlZiIsICJ3YXRjaF91bndhdGNoIiwgIndhdGNoX3dhdGNoIiwgIlZBUklBTlRTIiwgIndnVXNlckxhbmd1YWdlIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiREVGQVVMVF9NRVNTQUdFUyIsICJzZXRNZXNzYWdlcyIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJzZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dUaXRsZSIsICJjYXRBTG90IiwgIkNBTCIsICJpc1NlYXJjaE1vZGUiLCAiTUVTU0FHRVMiLCAiQVBJX1RBRyIsICJUQVJHRVRfTkFNRVNQQUNFIiwgIkNVUlJFTlRfQ0FURUdST1kiLCAiaXNBdXRvQ29tcGxldGVJbml0IiwgImFscmVhZHlUaGVyZSIsICJjb25uZWN0aW9uRXJyb3IiLCAibm90Rm91bmQiLCAiY291bnRlckN1cnJlbnQiLCAiY291bnRlck5lZWRlZCIsICJjb3VudGVyQ2F0IiwgImN1cnJlbnRDYXRlZ29yeSIsICJkaWFsb2dIZWlnaHQiLCAiZWRpdFRva2VuIiwgImxvY2FsQ2F0TmFtZSIsICJwYXJlbnRDYXRzIiwgInN1YkNhdHMiLCAic2V0dGluZ3MiLCAidmFyaWFudENhY2hlIiwgIiRjb3VudGVyIiwgIiQiLCAiJHByb2dyZXNzRGlhbG9nIiwgIiRsYWJlbHMiLCAiJHNlbGVjdGVkTGFiZWxzIiwgIiRib2R5IiwgIiRjb250YWluZXIiLCAiJGRhdGFDb250YWluZXIiLCAiJG1hcmtDb3VudGVyIiwgIiRyZXN1bHRMaXN0IiwgIiRzZWFyY2hJbnB1dCIsICIkaGVhZCIsICIkbGluayIsICJjb25zdHJ1Y3RvciIsICJfbXckdXRpbCRnZXRQYXJhbVZhbHUiLCAibXNnIiwgImluaXRTZXR0aW5ncyIsICJjb250YWluZXIiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicGxhY2Vob2xkZXIiLCAidHlwZSIsICJ2YWx1ZSIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAib25LZXlEb3duIiwgImV2ZW50IiwgIiRlbGVtZW50IiwgImN1cnJlbnRUYXJnZXQiLCAia2V5IiwgIl8kZWxlbWVudCR2YWwkdHJpbSIsICJfJGVsZW1lbnQkdmFsIiwgImNhdCIsICJ2YWwiLCAidHJpbSIsICJ1cGRhdGVDYXRzIiwgIm9uQ2xpY2siLCAidG9nZ2xlQWxsIiwgImFwcGVuZFRvIiwgImZpbmQiLCAiYnVpbGRFbGVtZW50cyIsICJyZWdleENhdCIsICJSZWdFeHAiLCAibG9jYWxpemVkUmVnZXgiLCAib24iLCAib2xkVmFsIiwgIm5ld1ZhbCIsICJyZXBsYWNlIiwgImluaXRBdXRvY29tcGxldGUiLCAiYXV0b2NvbXBsZXRlIiwgInNvdXJjZSIsICJyZXF1ZXN0IiwgInJlc3BvbnNlIiwgImRvQVBJQ2FsbCIsICJhY3Rpb24iLCAibmFtZXNwYWNlIiwgInJlZGlyZWN0cyIsICJzZWFyY2giLCAidGVybSIsICJyZXN1bHQiLCAibWFwIiwgIl9pbmRleCIsICJpdGVtIiwgInBvc2l0aW9uIiwgIm15IiwgImF0IiwgIm9mIiwgInRvZ2dsZUNsYXNzIiwgInJ1biIsICJfd2luZG93JENhdEFMb3RQcmVmcyIsICJjYXRBTG90UHJlZnMiLCAid2luZG93IiwgIkNhdEFMb3RQcmVmcyIsICJ0eXBlT2ZDYXRBTG90UHJlZnMiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJfaSIsICJfT2JqZWN0JGtleXMiLCAiT2JqZWN0IiwgImtleXMiLCAibGVuZ3RoIiwgIl9jYXRBTG90UHJlZnMkc2V0dGluZyIsICJzZXR0aW5nS2V5IiwgInNldHRpbmciLCAic2VsZWN0IiwgIl9pMiIsICJfT2JqZWN0JGtleXMyIiwgIm1lc3NhZ2VLZXkiLCAibWVzc2FnZSIsICJhcmdzIiwgImZ1bGxLZXkiLCAicGFyc2UiLCAicGxhaW4iLCAibmFtZXNwYWNlTnVtYmVyIiwgImZhbGxiYWNrIiwgIl9DQUwkd2dGb3JtYXR0ZWROYW1lcyIsICJ3aWtpVGV4dEJsYW5rIiwgIlN0cmluZyIsICJyYXciLCAiX3RlbXBsYXRlT2JqZWN0IiwgIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCAid2lraVRleHRCbGFua1JFIiwgImNyZWF0ZVJlZ2V4U3RyIiwgIm5hbWUiLCAicmVnZXhOYW1lIiwgImkiLCAiaW5pdGlhbCIsICJzbGljZSIsICJsbCIsICJ0b0xvd2VyQ2FzZSIsICJ1bCIsICJ0b1VwcGVyQ2FzZSIsICJfdGVtcGxhdGVPYmplY3QyIiwgImNhbm9uaWNhbCIsICJyZWdleFN0cmluZyIsICJfaTMiLCAiX09iamVjdCRrZXlzMyIsICJjYXROYW1lIiwgInVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIiLCAiZmlsdGVyIiwgInNob3ciLCAiaHRtbCIsICJ0b1N0cmluZyIsICJmaW5kQWxsVmFyaWFudHMiLCAiY2F0ZWdvcnkiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicmVzdWx0cyIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGV4dCIsICJ0aXRsZSIsICJfaTQiLCAiX1ZBUklBTlRTIiwgInZhcmlhbnQiLCAicG9zdCIsICJlcSIsICJ1bmlxdWVBcnJheSIsICJyZWdleEJ1aWxkZXIiLCAidmFyaWFudHMiLCAidmFyaWFudFJlZ0V4cHMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiZXNjYXBlUmVnRXhwIiwgIl90ZW1wbGF0ZU9iamVjdDMiLCAiZmlyc3QiLCAiZXJyIiwgImUiLCAiZiIsICJqb2luIiwgIl9wYXJhbXMiLCAiY2FsbGJhY2siLCAiZG9DYWxsIiwgImhhbmRsZUVycm9yIiwgImVycm9yIiwgImxvZyIsICJzZXRUaW1lb3V0IiwgInVwZGF0ZUNvdW50ZXIiLCAidGhlbiIsICJjYXRjaCIsICJtYXJrQXNEb25lIiwgIiRtYXJrZWRMYWJlbCIsICJ0YXJnZXRDYXRlZ29yeSIsICJtb2RlIiwgImFkZENsYXNzIiwgImFwcGVuZCIsICJGcmFnbWVudCIsICJkb0NsZWFudXAiLCAicmVtb3ZlVW5jYXQiLCAiZGlzcGxheVJlc3VsdCIsICJjc3MiLCAiY3Vyc29yIiwgIm92ZXJmbG93IiwgIiRwYXJlbnQiLCAicGFyZW50IiwgInJlbW92ZSIsICJyZWR1Y2UiLCAicHJlIiwgImN1ciIsICJpbmRleCIsICJlZGl0Q2F0ZWdvcmllcyIsICJtYXJrZWRMYWJlbCIsICJfdGhpcyIsICJtYXJrZWRMYWJlbFRpdGxlIiwgIm9yaWdpblRleHQiLCAic3RhcnR0aW1lc3RhbXAiLCAidGltZXN0YW1wIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAicGFnZXMiLCAicGFnZSIsICJyZXZpc2lvbnMiLCAiY29udGVudCIsICJzb3VyY2VjYXQiLCAidGFyZ2VSZWdFeHAiLCAidGVzdCIsICJzdW1tYXJ5IiwgInNvdXJjZUNhdFJlZ0V4cCIsICJ0b2tlbiIsICJ0YWdzIiwgImFzc2VydCIsICJib3QiLCAiYmFzZXRpbWVzdGFtcCIsICJnZXRDb250ZW50IiwgIm1ldGEiLCAidGl0bGVzIiwgInByb3AiLCAicnZwcm9wIiwgImdldFRpdGxlRnJvbUxpbmsiLCAiaHJlZiIsICJfZGVjb2RlVVJJQ29tcG9uZW50JG0iLCAiX2RlY29kZVVSSUNvbXBvbmVudCRtMiIsICJkZWNvZGVVUklDb21wb25lbnQiLCAibWF0Y2giLCAiZ2V0TWFya2VkTGFiZWxzIiwgIm1hcmtlZExhYmVscyIsICJlYWNoIiwgImxhYmVsIiwgIl8kbGFiZWxMaW5rJGF0dHIiLCAiJGxhYmVsIiwgIiRsYWJlbExpbmsiLCAiYXR0ciIsICJzaG93UHJvZ3Jlc3MiLCAiZGlhbG9nIiwgImRpYWxvZ0NsYXNzIiwgIm1pbkhlaWdodCIsICJoZWlnaHQiLCAid2lkdGgiLCAibW9kYWwiLCAiY2xvc2VPbkVzY2FwZSIsICJkcmFnZ2FibGUiLCAicmVzaXphYmxlIiwgImhpZGUiLCAiZG9Tb21ldGhpbmciLCAibm90aWZ5IiwgInRhZyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJhZGRIZXJlIiwgImNvcHlIZXJlIiwgIm1vdmVIZXJlIiwgImNyZWF0ZUNhdExpbmtzIiwgInN5bWJvbCIsICJjYXRlZ29yaWVzIiwgInNvcnQiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiJHRyIiwgImRhdGFzZXQiLCAiY2xvc2VzdCIsICJkYXRhIiwgInNob3dDYXRlZ29yeUxpc3QiLCAiX3RoaXMkJGNvbnRhaW5lciR3aWR0IiwgIl8kJHdpZHRoIiwgImN1cnJlbnRDYXRlZ29yaWVzIiwgImVtcHR5IiwgIk1hdGgiLCAibWluIiwgImdldFBhcmVudENhdHMiLCAiX3BhZ2VzJCIsICJxdWVyeSIsICJtaXNzaW5nIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImdldFN1YkNhdHMiLCAibGlzdCIsICJjbXR5cGUiLCAiY21saW1pdCIsICJjbXRpdGxlIiwgIl9yZXN1bHQkcXVlcnkiLCAiY2F0cyIsICJjYXRlZ29yeW1lbWJlcnMiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiZ2V0Q2F0ZWdvcnlMaXN0IiwgImZpbmRBbGxMYWJlbHMiLCAiYWRkIiwgIiRwYWdlcyIsICJtYWtlQ2xpY2thYmxlIiwgIm9uQ2F0QUxvdFNoaWZ0Q2xpY2siLCAiaGFzQ2xhc3MiLCAiYWxzb1Jlc2l6ZSIsICJoYW5kbGVzIiwgInJlc2l6ZSIsICJfJGN1cnJlbnRUYXJnZXQkaGVpZ2giLCAiJGN1cnJlbnRUYXJnZXQiLCAibGVmdCIsICJ0b3AiLCAibWF4SGVpZ2h0IiwgIm9mZiIsICJnZXRCb2R5IiwgImV4dGVuZEpRdWVyeVByb3RvdHlwZSIsICJmbiIsICJleHRlbmQiLCAicHJldkNoZWNrYm94IiwgImN0cmxLZXkiLCAicHJldmVudERlZmF1bHQiLCAicGFyZW50cyIsICJyZW1vdmVDbGFzcyIsICIkdGhpc0NvbnRyb2wiLCAidGFyZ2V0IiwgInNoaWZ0S2V5IiwgIm1ldGhvZCIsICJtYXgiXQp9Cg==
