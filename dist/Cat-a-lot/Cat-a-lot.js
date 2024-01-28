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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
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
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
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
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
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
var WG_CANONICAL_SPECIAL_PAGE_NAME = mw.config.get("wgCanonicalSpecialPageName").toString();
var WG_FORMATTED_NAMESPACES = mw.config.get("wgFormattedNamespaces");
var WG_NAMESPACE_IDS = mw.config.get("wgNamespaceIds");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_SCRIPT = mw.config.get("wgScript");
var WG_TITLE = mw.config.get("wgTitle");
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
//! src/Cat-a-lot/modules/messages.ts
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
  if (WG_USER_LANGUAGE === "en") {
    return;
  }
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(WG_USER_LANGUAGE)) {
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
var import_ext_gadget = require("ext.gadget.Util");
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
var catALot = () => {
  /*! Cat-a-lot | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
  class CAL {
    static isSearchMode = false;
    static MESSAGES = DEFAULT_MESSAGES;
    static DEFAULT_SETTING = DEFAULT_SETTING;
    static VERSION = version;
    static API_TAG = apiTag;
    static TARGET_NAMESPACE = targetNamespace;
    static CURRENT_CATEGROY = WG_TITLE;
    static WG_FORMATTED_NAMESPACES = WG_FORMATTED_NAMESPACES;
    static WG_NAMESPACE_IDS = WG_NAMESPACE_IDS;
    static isAutoCompleteInit = false;
    static api = (0, import_ext_gadget.initMwApi)("Cat-a-lot/".concat(CAL.VERSION));
    static alreadyThere = [];
    static connectionError = [];
    static notFound = [];
    static counterCurrent = 0;
    static counterNeeded = 0;
    static counterCat = 0;
    static currentCategory = "";
    static dialogHeight = 450;
    static editToken = "";
    static localCatName = WG_FORMATTED_NAMESPACES[CAL.TARGET_NAMESPACE];
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
      const container = /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        className: [CLASS_NAME, CLASS_NAME_CONTAINER, "noprint"]
      }, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        className: CLASS_NAME_CONTAINER_DATA
      }, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        className: CLASS_NAME_CONTAINER_DATA_MARK_COUNTER
      }), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST
      }), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("input", {
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
      })), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        className: CLASS_NAME_CONTAINER_DATA_SELECTIONS
      }, [CAL.msg("select"), " "], /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        className: CLASS_NAME_CONTAINER_DATA_SELECTIONS_ALL,
        onClick: () => {
          this.toggleAll(true);
        }
      }, CAL.msg("all")), " • ", /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        className: CLASS_NAME_CONTAINER_DATA_SELECTIONS_NONE,
        onClick: () => {
          this.toggleAll(false);
        }
      }, CAL.msg("none")))), /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
        className: CLASS_NAME_CONTAINER_HEAD
      }, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
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
        const currentTarget = event.currentTarget;
        const oldVal = currentTarget.value;
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
      var _CAL$WG_FORMATTED_NAM;
      const wikiTextBlank = "[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+";
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
        return regexName.replace(/([$()*+.?\\^])/g, "\\$1").replace(wikiTextBlankRE, wikiTextBlank);
      };
      fallback = fallback.toLowerCase();
      const canonical = (_CAL$WG_FORMATTED_NAM = CAL.WG_FORMATTED_NAMESPACES[namespaceNumber]) === null || _CAL$WG_FORMATTED_NAM === void 0 ? void 0 : _CAL$WG_FORMATTED_NAM.toLowerCase();
      let regexString = createRegexStr(canonical);
      if (fallback && canonical !== fallback) {
        regexString += "|".concat(createRegexStr(fallback));
      }
      for (var _i3 = 0, _Object$keys3 = Object.keys(CAL.WG_NAMESPACE_IDS); _i3 < _Object$keys3.length; _i3++) {
        const catName = _Object$keys3[_i3];
        if (catName.toLowerCase() !== canonical && catName.toLowerCase() !== fallback && CAL.WG_NAMESPACE_IDS[catName] === namespaceNumber) {
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
        }
        CAL.variantCache[category] = [...new Set(results)];
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
            variant = variant.replace(/[\s_]+/g, "[\\s_]+");
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
    doAPICall(params, callback) {
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
          $markedLabel.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), CAL.msg("added-cat", targetCategory)));
          break;
        case "copy":
          $markedLabel.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), CAL.msg("copied-cat", targetCategory)));
          break;
        case "move":
          $markedLabel.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), CAL.msg("moved-cat", targetCategory)));
          break;
        case "remove":
          $markedLabel.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), CAL.msg("removed-cat", targetCategory)));
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
      $parent.html(/* @__PURE__ */ import_ext_gadget2.default.createElement("h3", null, CAL.msg("done")));
      $parent.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, CAL.msg("all-done"), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null)));
      $parent.append(/* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
        onClick: () => {
          CAL.$progressDialog.remove();
          this.toggleAll(false);
        }
      }, CAL.msg("return-to-page")));
      if (CAL.alreadyThere.length) {
        $parent.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("h5", null, CAL.msg("skipped-already", CAL.alreadyThere.length.toString())), CAL.alreadyThere.reduce((pre, cur, index) => index < CAL.alreadyThere.length - 1 ? [...pre, cur, /* @__PURE__ */ import_ext_gadget2.default.createElement("br", {
          key: index
        })] : [...pre, cur], [])));
      }
      if (CAL.notFound.length) {
        $parent.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("h5", null, CAL.msg("skipped-not-found", CAL.notFound.length.toString())), CAL.notFound.reduce((pre, cur, index) => index < CAL.notFound.length - 1 ? [...pre, cur, /* @__PURE__ */ import_ext_gadget2.default.createElement("br", {
          key: index
        })] : [...pre, cur], [])));
      }
      if (CAL.connectionError.length) {
        $parent.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("h5", null, CAL.msg("skipped-server", CAL.connectionError.length.toString())), CAL.connectionError.reduce((pre, cur, index) => index < CAL.connectionError.length - 1 ? [...pre, cur, /* @__PURE__ */ import_ext_gadget2.default.createElement("br", {
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
        rvprop: "content|timestamp"
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
        const $label = $(label);
        const $labelLink = $label.find("a[title]");
        const title = $labelLink.attr("title") || CAL.getTitleFromLink($labelLink.attr("href")) || CAL.getTitleFromLink($label.find("a").attr("href"));
        markedLabels[markedLabels.length] = [title, $label];
      });
      return markedLabels;
    }
    showProgress() {
      this.$body.css({
        cursor: "wait",
        overflow: "hidden"
      });
      CAL.$progressDialog = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", null, CAL.msg("editing"), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
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
          const $tr = $(/* @__PURE__ */ import_ext_gadget2.default.createElement("tr", {
            dataset: {
              category
            }
          }, /* @__PURE__ */ import_ext_gadget2.default.createElement("td", null, symbol), /* @__PURE__ */ import_ext_gadget2.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
            onClick: (event) => {
              const $element = $(event.currentTarget);
              this.updateCats($element.closest("tr").data("category"));
            }
          }, category))));
          if (category !== CAL.CURRENT_CATEGROY && CAL.isSearchMode) {
            $tr.append(/* @__PURE__ */ import_ext_gadget2.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
              className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION,
              onClick: (event) => {
                const $element = $(event.currentTarget);
                this.addHere($element.closest("tr").data("category"));
              }
            }, CAL.msg("add"))));
          } else if (category !== CAL.CURRENT_CATEGROY && !CAL.isSearchMode) {
            $tr.append(/* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
              className: CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION,
              onClick: (event) => {
                const $element = $(event.currentTarget);
                this.copyHere($element.closest("tr").data("category"));
              }
            }, CAL.msg("copy"))), /* @__PURE__ */ import_ext_gadget2.default.createElement("td", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
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
      this.$resultList.append(/* @__PURE__ */ import_ext_gadget2.default.createElement("table", null));
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
          this.$resultList.html(/* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
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
      this.$resultList.html(/* @__PURE__ */ import_ext_gadget2.default.createElement("div", null, CAL.msg("loading")));
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
  if (WG_NAMESPACE_NUMBER === -1 && WG_CANONICAL_SPECIAL_PAGE_NAME === "Search" || WG_NAMESPACE_NUMBER === targetNamespace) {
    if (WG_NAMESPACE_NUMBER === -1) {
      CAL.isSearchMode = true;
    }
    /*! Cat-a-lot messages | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
    setMessages();
    void (0, import_ext_gadget.getBody)().then(($body) => {
      new CAL($body).buildElements();
    });
  }
};
//! src/Cat-a-lot/modules/extendJQueryPrototype.ts
var extendJQueryPrototype = () => {
  /*! jQuery checkboxShiftClick | GPL-2.0 <https://qwbk.cc/H:GPL> */
  $.fn.onCatALotShiftClick = function(callback) {
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
  };
};
//! src/Cat-a-lot/Cat-a-lot.ts
/*! jQuery checkboxShiftClick | GPL-2.0 <https://qwbk.cc/H:GPL> */
extendJQueryPrototype();
/*! Cat-a-lot | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
catALot();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NhdC1hLWxvdC9vcHRpb25zLmpzb24iLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9DYXQtYS1sb3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvY29yZS50c3giLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2V4dGVuZEpRdWVyeVByb3RvdHlwZS50cyIsICJzcmMvQ2F0LWEtbG90L0NhdC1hLWxvdC50cyJdLAogICJzb3VyY2VSb290IjogIi4uL0dhZGdldHMiLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImFwaVRhZ1wiOiBcIkNhdC1hLWxvdFwiLFxuXHRcInRhcmdldE5hbWVzcGFjZVwiOiAxNCxcblx0XCJ2ZXJzaW9uXCI6IFwiNi4wXCJcbn1cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCB0eXBlIHtTZXR0aW5nfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1jYXRfYV9sb3QnO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVI6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWNvbnRhaW5lcmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUn1fX2RhdGFgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfV9fY2F0ZWdvcnktbGlzdGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9X19hY3Rpb25gO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX05PX0ZPVU5EOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9LS1uby1mb3VuZGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX21hcmstY291bnRlcmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19zZWFyY2gtaW5wdXQtY29udGFpbmVyX19pbnB1dGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlM6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19zZWxlY3Rpb25zYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19BTEw6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU31fX2FsbGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfV9fbm9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUn1fX2hlYWRgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEfV9fbGlua2A7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LfS0tZW5hYmxlZGA7XG5jb25zdCBDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tY3VycmVudF9jb3VudGVyYDtcbmNvbnN0IENMQVNTX05BTUVfRkVFREJBQ0s6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWZlZWRiYWNrYDtcbmNvbnN0IENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9GRUVEQkFDS30tLWRvbmVgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tbGFiZWxgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTF9ET05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0xBQkVMfS0tZG9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1sYXN0LXNlbGVjdGVkYDtcbmNvbnN0IENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1zZWxlY3RlZGA7XG5cbmNvbnN0IERFRkFVTFRfU0VUVElORzogU2V0dGluZyA9IHtcblx0ZG9jbGVhbnVwOiB7XG5cdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0bGFiZWxfaTE4bjogJ2RvY2xlYW51cHByZWYnLFxuXHR9LFxuXHRlZGl0cGFnZXM6IHtcblx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdGxhYmVsX2kxOG46ICdlZGl0cGFnZXNwcmVmJyxcblx0fSxcblx0bWlub3I6IHtcblx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHRsYWJlbF9pMThuOiAnbWlub3JwcmVmJyxcblx0fSxcblx0c3ViY2F0Y291bnQ6IHtcblx0XHRkZWZhdWx0OiA1MCxcblx0XHRsYWJlbF9pMThuOiAnc3ViY2F0Y291bnRwcmVmJyxcblx0fSxcblx0d2F0Y2hsaXN0OiB7XG5cdFx0ZGVmYXVsdDogJ3ByZWZlcmVuY2VzJyxcblx0XHRsYWJlbF9pMThuOiAnd2F0Y2hsaXN0cHJlZicsXG5cdFx0c2VsZWN0X2kxOG46IHtcblx0XHRcdHdhdGNoX25vY2hhbmdlOiAnbm9jaGFuZ2UnLFxuXHRcdFx0d2F0Y2hfcHJlZjogJ3ByZWZlcmVuY2VzJyxcblx0XHRcdHdhdGNoX3Vud2F0Y2g6ICd1bndhdGNoJyxcblx0XHRcdHdhdGNoX3dhdGNoOiAnd2F0Y2gnLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5jb25zdCBWQVJJQU5UUzogc3RyaW5nW10gPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1teScsICd6aC1zZycsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddO1xuXG5jb25zdCBXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lJykudG9TdHJpbmcoKTtcbmNvbnN0IFdHX0ZPUk1BVFRFRF9OQU1FU1BBQ0VTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0gbXcuY29uZmlnLmdldCgnd2dGb3JtYXR0ZWROYW1lc3BhY2VzJyk7XG5jb25zdCBXR19OQU1FU1BBQ0VfSURTOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VJZHMnKTtcbmNvbnN0IFdHX05BTUVTUEFDRV9OVU1CRVI6IG51bWJlciA9IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJyk7XG5jb25zdCBXR19TQ1JJUFQ6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0Jyk7XG5jb25zdCBXR19USVRMRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dUaXRsZScpO1xuY29uc3QgV0dfVVNFUl9MQU5HVUFHRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKTtcblxuZXhwb3J0IHtcblx0Q0xBU1NfTkFNRSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEEsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTixcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX05PX0ZPVU5ELFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUixcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVULFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlMsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19BTEwsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFELFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkssXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVELFxuXHRDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUixcblx0Q0xBU1NfTkFNRV9GRUVEQkFDSyxcblx0Q0xBU1NfTkFNRV9GRUVEQkFDS19ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMLFxuXHRDTEFTU19OQU1FX0xBQkVMX0RPTkUsXG5cdENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCxcblx0REVGQVVMVF9TRVRUSU5HLFxuXHRWQVJJQU5UUyxcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19GT1JNQVRURURfTkFNRVNQQUNFUyxcblx0V0dfTkFNRVNQQUNFX0lEUyxcblx0V0dfTkFNRVNQQUNFX05VTUJFUixcblx0V0dfU0NSSVBULFxuXHRXR19USVRMRSxcblx0V0dfVVNFUl9MQU5HVUFHRSxcbn07XG4iLCAiaW1wb3J0IHR5cGUge01lc3NhZ2VLZXl9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtXR19VU0VSX0xBTkdVQUdFfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgREVGQVVMVF9NRVNTQUdFUyA9IHtcblx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICd7e1BMVVJBTDokMXxPbmUgZmlsZXwkMSBmaWxlc319IHNlbGVjdGVkLicsXG5cdC8vIEFjdGlvbnNcblx0J2NhdC1hLWxvdC1jb3B5JzogJ0NvcHknLFxuXHQnY2F0LWEtbG90LW1vdmUnOiAnTW92ZScsXG5cdCdjYXQtYS1sb3QtYWRkJzogJ0FkZCcsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ1JlbW92ZSBmcm9tIHRoaXMgY2F0ZWdvcnknLFxuXHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAnRW50ZXIgY2F0ZWdvcnkgbmFtZScsXG5cdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ1NlbGVjdCcsXG5cdCdjYXQtYS1sb3QtYWxsJzogJ2FsbCcsXG5cdCdjYXQtYS1sb3Qtbm9uZSc6ICdub25lJyxcblx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ05vIGZpbGVzIHNlbGVjdGVkIScsXG5cdC8vIFByZWZlcmVuY2VzXG5cdCdjYXQtYS1sb3Qtd2F0Y2hsaXN0cHJlZic6ICdXYXRjaGxpc3QgcHJlZmVyZW5jZSBjb25jZXJuaW5nIGZpbGVzIGVkaXRlZCB3aXRoIENhdC1BLUxvdCcsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICdBY2NvcmRpbmcgdG8geW91ciBnZW5lcmFsIHByZWZlcmVuY2VzJyxcblx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICdEbyBub3QgY2hhbmdlIHdhdGNoc3RhdHVzJyxcblx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICdXYXRjaCBwYWdlcyBlZGl0ZWQgd2l0aCBDYXQtQS1Mb3QnLFxuXHQnY2F0LWEtbG90LXdhdGNoX3Vud2F0Y2gnOiAnUmVtb3ZlIHBhZ2VzIHdoaWxlIGVkaXRpbmcgd2l0aCBDYXQtQS1Mb3QgZnJvbSB5b3VyIHdhdGNobGlzdCcsXG5cdCdjYXQtYS1sb3QtbWlub3JwcmVmJzpcblx0XHRcIk1hcmsgZWRpdHMgYXMgbWlub3IgKGlmIHlvdSBnZW5lcmFsbHkgbWFyayB5b3VyIGVkaXRzIGFzIG1pbm9yLCB0aGlzIHdvbid0IGNoYW5nZSBhbnl0aGluZylcIixcblx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ0FsbG93IGNhdGVnb3Jpc2luZyBwYWdlcyAoaW5jbHVkaW5nIGNhdGVnb3JpZXMpIHRoYXQgYXJlIG5vdCBmaWxlcycsXG5cdCdjYXQtYS1sb3QtZG9jbGVhbnVwcHJlZic6ICdSZW1vdmUge3tDaGVjayBjYXRlZ29yaWVzfX0gYW5kIG90aGVyIG1pbm9yIGNsZWFudXAnLFxuXHQnY2F0LWEtbG90LXN1YmNhdGNvdW50cHJlZic6ICdTdWItY2F0ZWdvcmllcyB0byBzaG93IGF0IG1vc3QnLFxuXHQvLyBQcm9ncmVzc1xuXHQnY2F0LWEtbG90LWxvYWRpbmcnOiAnTG9hZGluZy4uLicsXG5cdCdjYXQtYS1sb3QtZWRpdGluZyc6ICdFZGl0aW5nIHBhZ2UnLFxuXHQnY2F0LWEtbG90LW9mJzogJ29mICcsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5Jzpcblx0XHQnVGhlIGZvbGxvd2luZyB7e1BMVVJBTDokMXxwYWdlIHdhc3wkMSBwYWdlcyB3ZXJlfX0gc2tpcHBlZCwgYmVjYXVzZSB0aGUgcGFnZSB3YXMgYWxyZWFkeSBpbiB0aGUgY2F0ZWdvcnk6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLW5vdC1mb3VuZCc6XG5cdFx0J1RoZSBmb2xsb3dpbmcge3tQTFVSQUw6JDF8cGFnZSB3YXN8JDEgcGFnZXMgd2VyZX19IHNraXBwZWQsIGJlY2F1c2UgdGhlIG9sZCBjYXRlZ29yeSBjb3VsZCBub3QgYmUgZm91bmQ6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLXNlcnZlcic6XG5cdFx0XCJUaGUgZm9sbG93aW5nIHt7UExVUkFMOiQxfHBhZ2V8JDEgcGFnZXN9fSBjb3VsZG4ndCBiZSBjaGFuZ2VkLCBzaW5jZSB0aGVyZSB3ZXJlIHByb2JsZW1zIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlcjpcIixcblx0J2NhdC1hLWxvdC1hbGwtZG9uZSc6ICdBbGwgcGFnZXMgYXJlIHByb2Nlc3NlZC4nLFxuXHQnY2F0LWEtbG90LWRvbmUnOiAnRG9uZSEnLFxuXHQnY2F0LWEtbG90LWFkZGVkLWNhdCc6ICdBZGRlZCBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICdDb3BpZWQgdG8gY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LW1vdmVkLWNhdCc6ICdNb3ZlZCB0byBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAnUmVtb3ZlZCBmcm9tIGNhdGVnb3J5ICQxJyxcblx0J2NhdC1hLWxvdC1yZXR1cm4tdG8tcGFnZSc6ICdSZXR1cm4gdG8gcGFnZScsXG5cdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICdDYXRlZ29yeSBub3QgZm91bmQuJyxcblx0Ly8gU3VtbWFyaWVzOlxuXHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IEFkZGluZyBbW0NhdGVnb3J5OiQxXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktY29weSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBDb3B5aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dIHRvIFtbQ2F0ZWdvcnk6JDJdXScsXG5cdCdjYXQtYS1sb3Qtc3VtbWFyeS1tb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IE1vdmluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXSB0byBbW0NhdGVnb3J5OiQyXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IFJlbW92aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dJyxcbn0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXG5jb25zdCBzZXRNZXNzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0LyohIENhdC1hLWxvdCBtZXNzYWdlcyB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRpZiAoV0dfVVNFUl9MQU5HVUFHRSA9PT0gJ2VuJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyhXR19VU0VSX0xBTkdVQUdFKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldDx0eXBlb2YgREVGQVVMVF9NRVNTQUdFUz4oe1xuXHRcdFx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0XHRcdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAnJDHlgIvmlofku7blt7Lpgbjmk4cnLFxuXHRcdFx0Ly8gQWN0aW9uc1xuXHRcdFx0J2NhdC1hLWxvdC1jb3B5JzogJ+ikh+ijvScsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmUnOiAn56e75YuVJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkJzogJ+WinuWKoCcsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICflvp7mraTliIbpoZ7np7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ+i8uOWFpeWIhumhnuWQjeeosScsXG5cdFx0XHQnY2F0LWEtbG90LXNlbGVjdCc6ICfpgbjmk4cnLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwnOiAn5YWo6YOoJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZSc6ICfnhKEnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ+aykuaciemBuOaTh+aWh+S7tu+8gScsXG5cdFx0XHQvLyBQcmVmZXJlbmNlc1xuXHRcdFx0J2NhdC1hLWxvdC13YXRjaGxpc3RwcmVmJzogJ+S9v+eUqENhdC1BLUxvdOe3qOi8r+aWh+S7tuaZgueahOebo+imluWIl+ihqOmBuOmghScsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAn6IiH57O757Wx5Y+D5pW46Kit572u55u45ZCMJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAn5LiN6KaB5pu05pS555uj6KaW54uA5oWLJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAn55uj6KaW5L2/55SoQ2F0LUEtTG9057eo6Lyv55qE6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfdW53YXRjaCc6ICflsIfkvb/nlKhDYXQtQS1Mb3Tnt6jovK/nmoTpoIHpnaLlvp7nm6PoppbliJfooajnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1taW5vcnByZWYnOlxuXHRcdFx0XHQn5bCH57eo6Lyv5qiZ6KiY54iy5bCP5L+u5pS577yI6Iul5oKo5Zyo57O757Wx5Y+D5pW46Kit572u5Lit5bey6Kit572u5bCH5omA5pyJ57eo6Lyv5qiZ6KiY54iy5bCP5L+u5pS577yM5q2k6YG46aCF5LiN5pyD5bCN54++5pyJ6KGM54iy6YCy6KGM5pS55YuV77yJJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICflhYHoqLHlsI3kuI3mmK/mlofku7bnmoTpoIHpnaLlkozlrZDliIbpoZ7pgLLooYzliIbpoZ7mk43kvZwnLFxuXHRcdFx0J2NhdC1hLWxvdC1kb2NsZWFudXBwcmVmJzogJ+enu+mZpHt7Q2hlY2sgY2F0ZWdvcmllc3195Lim6YCy6KGM5YW25LuW57Sw56+A5riF55CGJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3ViY2F0Y291bnRwcmVmJzogJ+acgOWkmumhr+ekuueahOWtkOWIhumhnuaVuOmHjycsXG5cdFx0XHQvLyBQcm9ncmVzc1xuXHRcdFx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ+ato+WcqOWKoOi8ieKApuKApicsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRpbmcnOiAn5q2j5Zyo57eo6Lyv6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtb2YnOiAn77yM5YWx5pyJJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5JzogJ+S7peS4i+mggemdouW3sui3s+mBju+8jOWboOeIsumggemdouW3sue2k+WcqOWIhumhnuS4re+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtbm90LWZvdW5kJzogJ+S7peS4i+mggemdouW3sui3s+mBju+8jOWboOeIsuaJvuS4jeWIsOePvuacieWIhumhnu+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtc2VydmVyJzogJ+S7peS4i+mggemdoueEoeazlee3qOi8r++8jOWboOeIsumAo+aOpeacjeWLmeWZqOWHuumMr++8micsXG5cdFx0XHQnY2F0LWEtbG90LWFsbC1kb25lJzogJ+WFqOmDqOmggemdouW3suiZleeQhuOAgicsXG5cdFx0XHQnY2F0LWEtbG90LWRvbmUnOiAn5bey5a6M5oiQ77yBJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkZWQtY2F0JzogJ+W3suWKoOWFpeWIhumhnicsXG5cdFx0XHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAn5bey6KSH6KO95Yiw5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZWQtY2F0JzogJ+W3suenu+WLleWIsOWIhumhnicsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ+W3suW+nuWIhumhnuenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LXJldHVybi10by1wYWdlJzogJ+i/lOWbnuWIsOmggemdoicsXG5cdFx0XHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAn5om+5LiN5Yiw5YiG6aGe44CCJyxcblx0XHRcdC8vIFN1bW1hcmllc1xuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5Yqg5YWl5YiG6aGeW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1jb3B5JzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbpoZ7plpPopIfoo73vvJrlvp5bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhumhnumWk+enu+WLle+8muW+nltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrlvp7liIbpoZ7np7vpmaTvvJpbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldDx0eXBlb2YgREVGQVVMVF9NRVNTQUdFUz4oe1xuXHRcdFx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0XHRcdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAn5bey6YCJ5oupJDHkuKrpobXpnaLmiJbmlofku7YnLFxuXHRcdFx0Ly8gQWN0aW9uc1xuXHRcdFx0J2NhdC1hLWxvdC1jb3B5JzogJ+WkjeWIticsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmUnOiAn56e75YqoJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkJzogJ+WinuWKoCcsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICfku47mraTliIbnsbvnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ+i+k+WFpeWIhuexu+WQjeensCcsXG5cdFx0XHQnY2F0LWEtbG90LXNlbGVjdCc6ICfpgInmi6knLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwnOiAn5YWo6YOoJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZSc6ICfml6AnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ+ayoeaciemAieaLqeS7u+S9lemhtemdouaIluaWh+S7tu+8gScsXG5cdFx0XHQvLyBQcmVmZXJlbmNlc1xuXHRcdFx0J2NhdC1hLWxvdC13YXRjaGxpc3RwcmVmJzogJ+S9v+eUqENhdC1hLWxvdOe8lui+keaWh+S7tuaXtueahOebkeinhuWIl+ihqOmAiemhuScsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAn5LiO57O757uf5Y+C5pWw6K6+572u55u45ZCMJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAn5LiN6KaB5pu05pS555uR6KeG54q25oCBJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAn55uR6KeG5L2/55SoQ2F0LWEtbG9057yW6L6R55qE6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfdW53YXRjaCc6ICflsIbkvb/nlKhDYXQtYS1sb3TnvJbovpHnmoTpobXpnaLku47nm5Hop4bliJfooajnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1taW5vcnByZWYnOlxuXHRcdFx0XHQn5bCG57yW6L6R5qCH6K6w5Li65bCP5L+u5pS577yI6Iul5oKo5Zyo57O757uf5Y+C5pWw6K6+572u5Lit5bey6K6+572u5bCG5omA5pyJ57yW6L6R5qCH6K6w5Li65bCP5L+u5pS577yM5q2k6YCJ6aG55LiN5Lya5a+5546w5pyJ6KGM5Li66L+b6KGM5pS55Yqo77yJJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICflhYHorrjlr7nkuI3mmK/mlofku7bnmoTpobXpnaLlkozlrZDliIbnsbvov5vooYzliIbnsbvmk43kvZwnLFxuXHRcdFx0J2NhdC1hLWxvdC1kb2NsZWFudXBwcmVmJzogJ+enu+mZpHt7Q2hlY2sgY2F0ZWdvcmllc3195bm26L+b6KGM5YW25LuW57uG6IqC5riF55CGJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3ViY2F0Y291bnRwcmVmJzogJ+acgOWkmuaYvuekuueahOWtkOWIhuexu+aVsOmHjycsXG5cdFx0XHQvLyBQcm9ncmVzc1xuXHRcdFx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ+ato+WcqOWKoOi9veKApuKApicsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRpbmcnOiAn5q2j5Zyo57yW6L6R6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtb2YnOiAn77yM5YWx5pyJJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5JzogJ+S7peS4i+mhtemdouW3sui3s+i/h++8jOWboOS4uumhtemdouW3sue7j+WcqOWIhuexu+S4re+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtbm90LWZvdW5kJzogJ+S7peS4i+mhtemdouW3sui3s+i/h++8jOWboOS4uuaJvuS4jeWIsOeOsOacieWIhuexu++8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtc2VydmVyJzogJ+S7peS4i+mhtemdouaXoOazlee8lui+ke+8jOWboOS4uui/nuaOpeacjeWKoeWZqOWHuumUme+8micsXG5cdFx0XHQnY2F0LWEtbG90LWFsbC1kb25lJzogJ+WFqOmDqOmhtemdouW3suWkhOeQhuOAgicsXG5cdFx0XHQnY2F0LWEtbG90LWRvbmUnOiAn5bey5a6M5oiQ77yBJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkZWQtY2F0JzogJ+W3suWKoOWFpeWIhuexuycsXG5cdFx0XHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAn5bey5aSN5Yi25Yiw5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZWQtY2F0JzogJ+W3suenu+WKqOWIsOWIhuexuycsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ+W3suS7juWIhuexu+enu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LXJldHVybi10by1wYWdlJzogJ+i/lOWbnuWIsOmhtemdoicsXG5cdFx0XHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAn5om+5LiN5Yiw5YiG57G744CCJyxcblx0XHRcdC8vIFN1bW1hcmllc1xuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5Yqg5YWl5YiG57G7W1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1jb3B5JzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbnsbvpl7TlpI3liLbvvJrku45bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhuexu+mXtOenu+WKqO+8muS7jltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrku47liIbnsbvnp7vpmaTvvJpbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge0RFRkFVTFRfTUVTU0FHRVMsIHNldE1lc3NhZ2VzfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBtZWRpYXdpa2kvY2xhc3MtZG9jICovXG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1xuXHRDTEFTU19OQU1FLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUixcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNULFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOSyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQsXG5cdENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUsXG5cdENMQVNTX05BTUVfTEFCRUwsXG5cdENMQVNTX05BTUVfTEFCRUxfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCxcblx0REVGQVVMVF9TRVRUSU5HLFxuXHRWQVJJQU5UUyxcblx0V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FLFxuXHRXR19GT1JNQVRURURfTkFNRVNQQUNFUyxcblx0V0dfTkFNRVNQQUNFX0lEUyxcblx0V0dfTkFNRVNQQUNFX05VTUJFUixcblx0V0dfVElUTEUsXG59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtERUZBVUxUX01FU1NBR0VTLCBzZXRNZXNzYWdlc30gZnJvbSAnLi9tZXNzYWdlcyc7XG5pbXBvcnQgdHlwZSB7TWVzc2FnZUtleSwgU2V0dGluZ30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2dldEJvZHksIGluaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuLyoqXG4gKiBDaGFuZ2VzIGNhdGVnb3J5IG9mIG11bHRpcGxlIGZpbGVzXG4gKi9cbmNvbnN0IGNhdEFMb3QgPSAoKTogdm9pZCA9PiB7XG5cdC8qISBDYXQtYS1sb3QgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cblx0Y2xhc3MgQ0FMIHtcblx0XHRwdWJsaWMgc3RhdGljIGlzU2VhcmNoTW9kZSA9IGZhbHNlO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUVTU0FHRVM6IFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+ID0gREVGQVVMVF9NRVNTQUdFUztcblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NFVFRJTkc6IFNldHRpbmcgPSBERUZBVUxUX1NFVFRJTkc7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVkVSU0lPTjogc3RyaW5nID0gT1BUSU9OUy52ZXJzaW9uO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQVBJX1RBRzogc3RyaW5nID0gT1BUSU9OUy5hcGlUYWc7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEFSR0VUX05BTUVTUEFDRTogbnVtYmVyID0gT1BUSU9OUy50YXJnZXROYW1lc3BhY2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBDVVJSRU5UX0NBVEVHUk9ZOiBzdHJpbmcgPSBXR19USVRMRTtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFdHX0ZPUk1BVFRFRF9OQU1FU1BBQ0VTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0gV0dfRk9STUFUVEVEX05BTUVTUEFDRVM7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgV0dfTkFNRVNQQUNFX0lEUzogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IFdHX05BTUVTUEFDRV9JRFM7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBpc0F1dG9Db21wbGV0ZUluaXQgPSBmYWxzZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIGFwaSA9IGluaXRNd0FwaShgQ2F0LWEtbG90LyR7Q0FMLlZFUlNJT059YCk7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhbHJlYWR5VGhlcmU6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY29ubmVjdGlvbkVycm9yOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdEZvdW5kOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDdXJyZW50ID0gMDtcblx0XHRwcml2YXRlIHN0YXRpYyBjb3VudGVyTmVlZGVkID0gMDtcblxuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDYXQgPSAwO1xuXHRcdHByaXZhdGUgc3RhdGljIGN1cnJlbnRDYXRlZ29yeSA9ICcnO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgZGlhbG9nSGVpZ2h0ID0gNDUwO1xuXHRcdHByaXZhdGUgc3RhdGljIGVkaXRUb2tlbiA9ICcnO1xuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsQ2F0TmFtZSA9IFdHX0ZPUk1BVFRFRF9OQU1FU1BBQ0VTW0NBTC5UQVJHRVRfTkFNRVNQQUNFXSBhcyBzdHJpbmc7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBwYXJlbnRDYXRzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIHN1YkNhdHM6IHN0cmluZ1tdID0gW107XG5cblx0XHRwcml2YXRlIHN0YXRpYyBzZXR0aW5nczogTm9uTnVsbGFibGU8dHlwZW9mIHdpbmRvdy5DYXRBTG90UHJlZnM+ID0ge307XG5cdFx0cHJpdmF0ZSBzdGF0aWMgdmFyaWFudENhY2hlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHRcdHByaXZhdGUgc3RhdGljICRjb3VudGVyOiBKUXVlcnkgPSAkKCk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgJHByb2dyZXNzRGlhbG9nOiBKUXVlcnkgPSAkKCk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgJGxhYmVsczogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRzZWxlY3RlZExhYmVsczogSlF1ZXJ5ID0gJCgpO1xuXG5cdFx0cHJpdmF0ZSByZWFkb25seSAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkY29udGFpbmVyOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkZGF0YUNvbnRhaW5lcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJG1hcmtDb3VudGVyOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkcmVzdWx0TGlzdDogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJHNlYXJjaElucHV0OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD47XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkaGVhZDogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGxpbms6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD47XG5cblx0XHRwdWJsaWMgY29uc3RydWN0b3IoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSB7XG5cdFx0XHRpZiAoIW13Lm1zZygnY2F0LWEtbG90LWxvYWRpbmcnKSkge1xuXHRcdFx0XHRtdy5tZXNzYWdlcy5zZXQoQ0FMLk1FU1NBR0VTKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kYm9keSA9ICRib2R5O1xuXHRcdFx0Q0FMLmluaXRTZXR0aW5ncygpO1xuXG5cdFx0XHRjb25zdCBjb250YWluZXIgPSAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRSwgQ0xBU1NfTkFNRV9DT05UQUlORVIsICdub3ByaW50J119PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUn0gLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9IC8+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVH1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17Q0FMLm1zZygnZW50ZXItbmFtZScpfVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Q0FMLmlzU2VhcmNoTW9kZSA/IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VhcmNoJykgPz8gJycgOiAnJ31cblx0XHRcdFx0XHRcdFx0XHRvbktleURvd249eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpIGFzIEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50Pjtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2F0OiBzdHJpbmcgPSAkZWxlbWVudC52YWwoKT8udHJpbSgpID8/ICcnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2F0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKGNhdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfT5cblx0XHRcdFx0XHRcdFx0e1tDQUwubXNnKCdzZWxlY3QnKSwgJyAnXX1cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19BTEx9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdhbGwnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHR7JyDigKIgJ31cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlQWxsKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ25vbmUnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9PlxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9PnsnQ2F0LWEtbG90J308L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy4kY29udGFpbmVyID0gJChjb250YWluZXIpIGFzIEpRdWVyeTtcblx0XHRcdHRoaXMuJGNvbnRhaW5lci5hcHBlbmRUbyh0aGlzLiRib2R5KTtcblxuXHRcdFx0dGhpcy4kZGF0YUNvbnRhaW5lciA9IHRoaXMuJGNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfWApO1xuXHRcdFx0dGhpcy4kbWFya0NvdW50ZXIgPSB0aGlzLiRkYXRhQ29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSfWApO1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdCA9IHRoaXMuJGRhdGFDb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUfWApO1xuXHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQgPSB0aGlzLiRkYXRhQ29udGFpbmVyLmZpbmQ8SFRNTElucHV0RWxlbWVudD4oXG5cdFx0XHRcdGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVR9YFxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy4kaGVhZCA9IHRoaXMuJGNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEfWApO1xuXHRcdFx0dGhpcy4kbGluayA9IHRoaXMuJGhlYWQuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS31gKTtcblx0XHR9XG5cblx0XHRwdWJsaWMgYnVpbGRFbGVtZW50cygpOiB2b2lkIHtcblx0XHRcdGNvbnN0IHJlZ2V4Q2F0OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGBeXFxcXHMqJHtDQUwubG9jYWxpemVkUmVnZXgoQ0FMLlRBUkdFVF9OQU1FU1BBQ0UsICdDYXRlZ29yeScpfTpgLCAnJyk7XG5cblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdpbnB1dCBrZXl1cCcsIChldmVudDogSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50IHwgSlF1ZXJ5LktleVVwRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcblx0XHRcdFx0Y29uc3Qgb2xkVmFsOiBzdHJpbmcgPSBjdXJyZW50VGFyZ2V0LnZhbHVlO1xuXHRcdFx0XHRjb25zdCBuZXdWYWw6IHN0cmluZyA9IG9sZFZhbC5yZXBsYWNlKHJlZ2V4Q2F0LCAnJyk7XG5cdFx0XHRcdGlmIChuZXdWYWwgIT09IG9sZFZhbCkge1xuXHRcdFx0XHRcdGN1cnJlbnRUYXJnZXQudmFsdWUgPSBuZXdWYWw7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBpbml0QXV0b2NvbXBsZXRlID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRpZiAoQ0FMLmlzQXV0b0NvbXBsZXRlSW5pdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRDQUwuaXNBdXRvQ29tcGxldGVJbml0ID0gdHJ1ZTtcblxuXHRcdFx0XHR0aGlzLiRzZWFyY2hJbnB1dC5hdXRvY29tcGxldGUoe1xuXHRcdFx0XHRcdHNvdXJjZTogKHJlcXVlc3Q6IHt0ZXJtOiB1bmtub3dufSwgcmVzcG9uc2U6IChhcmc6IEpRdWVyeTxzdHJpbmc+KSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogJ29wZW5zZWFyY2gnLFxuXHRcdFx0XHRcdFx0XHRcdG5hbWVzcGFjZTogQ0FMLlRBUkdFVF9OQU1FU1BBQ0UsXG5cdFx0XHRcdFx0XHRcdFx0cmVkaXJlY3RzOiAncmVzb2x2ZScsXG5cdFx0XHRcdFx0XHRcdFx0c2VhcmNoOiByZXF1ZXN0LnRlcm0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0WzFdKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXNwb25zZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0JChyZXN1bHRbMV0pLm1hcCgoX2luZGV4OiBudW1iZXIsIGl0ZW06IHN0cmluZyk6IHN0cmluZyA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0ucmVwbGFjZShyZWdleENhdCwgJycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0XHRcdG15OiAncmlnaHQgYm90dG9tJyxcblx0XHRcdFx0XHRcdGF0OiAncmlnaHQgdG9wJyxcblx0XHRcdFx0XHRcdG9mOiB0aGlzLiRzZWFyY2hJbnB1dCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGFwcGVuZFRvOiBgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJ9YCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0dGhpcy4kbGluay5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdCQoZXZlbnQuY3VycmVudFRhcmdldCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQpO1xuXHRcdFx0XHRpbml0QXV0b2NvbXBsZXRlKCk7XG5cdFx0XHRcdHRoaXMucnVuKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBpbml0U2V0dGluZ3MoKTogdm9pZCB7XG5cdFx0XHRsZXQgY2F0QUxvdFByZWZzOiB0eXBlb2YgQ0FMLnNldHRpbmdzID0gd2luZG93LkNhdEFMb3RQcmVmcyA/PyB7fTtcblx0XHRcdGNvbnN0IHR5cGVPZkNhdEFMb3RQcmVmcyA9IHR5cGVvZiBjYXRBTG90UHJlZnM7XG5cdFx0XHRpZiAoKHR5cGVPZkNhdEFMb3RQcmVmcyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoY2F0QUxvdFByZWZzKSkgfHwgdHlwZU9mQ2F0QUxvdFByZWZzICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRjYXRBTG90UHJlZnMgPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCBzZXR0aW5nS2V5IG9mIE9iamVjdC5rZXlzKENBTC5ERUZBVUxUX1NFVFRJTkcpIGFzIChrZXlvZiBTZXR0aW5nKVtdKSB7XG5cdFx0XHRcdGNvbnN0IHNldHRpbmcgPSBDQUwuREVGQVVMVF9TRVRUSU5HW3NldHRpbmdLZXldO1xuXG5cdFx0XHRcdENBTC5zZXR0aW5nc1tzZXR0aW5nS2V5XSA9IGNhdEFMb3RQcmVmc1tzZXR0aW5nS2V5XSA/PyBzZXR0aW5nLmRlZmF1bHQ7XG5cblx0XHRcdFx0aWYgKCFzZXR0aW5nLnNlbGVjdF9pMThuKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzZXR0aW5nLnNlbGVjdCA9IHt9O1xuXHRcdFx0XHRmb3IgKGNvbnN0IG1lc3NhZ2VLZXkgb2YgT2JqZWN0LmtleXMoc2V0dGluZy5zZWxlY3RfaTE4bikpIHtcblx0XHRcdFx0XHRjb25zdCBtZXNzYWdlOiBzdHJpbmcgPSBzZXR0aW5nLnNlbGVjdF9pMThuW21lc3NhZ2VLZXldIGFzIGtleW9mIHR5cGVvZiBzZXR0aW5nLnNlbGVjdF9pMThuO1xuXHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHRzZXR0aW5nLnNlbGVjdFtDQUwubXNnKG1lc3NhZ2VLZXkgYXMgbmV2ZXIpXSA9IG1lc3NhZ2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBtc2coa2V5OiBNZXNzYWdlS2V5IGV4dGVuZHMgYGNhdC1hLWxvdC0ke2luZmVyIFB9YCA/IFAgOiBuZXZlciwgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcge1xuXHRcdFx0Y29uc3QgZnVsbEtleTogc3RyaW5nID0gYGNhdC1hLWxvdC0ke2tleX1gO1xuXHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdHJldHVybiBhcmdzLmxlbmd0aCA/IG13Lm1lc3NhZ2UoZnVsbEtleSwgLi4uYXJncykucGFyc2UoKSA6IG13Lm1lc3NhZ2UoZnVsbEtleSkucGxhaW4oKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbG9jYWxpemVkUmVnZXgobmFtZXNwYWNlTnVtYmVyOiBudW1iZXIsIGZhbGxiYWNrOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdFx0Ly8gQ29waWVkIGZyb20gSG90Q2F0LCB0aGFua3MgTHVwby5cblx0XHRcdGNvbnN0IHdpa2lUZXh0Qmxhbms6IHN0cmluZyA9XG5cdFx0XHRcdCdbXFxcXHQgX1xcXFx4QTBcXFxcdTE2ODBcXFxcdTE4MEVcXFxcdTIwMDAtXFxcXHUyMDBBXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUyMDJGXFxcXHUyMDVGXFxcXHUzMDAwXSsnO1xuXHRcdFx0Y29uc3Qgd2lraVRleHRCbGFua1JFOiBSZWdFeHAgPSBuZXcgUmVnRXhwKHdpa2lUZXh0QmxhbmssICdnJyk7XG5cdFx0XHRjb25zdCBjcmVhdGVSZWdleFN0ciA9IChuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRpZiAoIW5hbWU/Lmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgcmVnZXhOYW1lOiBzdHJpbmcgPSAnJztcblx0XHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjb25zdCBpbml0aWFsOiBzdHJpbmcgPSBuYW1lLnNsaWNlKGksIGkgKyAxKTtcblx0XHRcdFx0XHRjb25zdCBsbDogc3RyaW5nID0gaW5pdGlhbC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdGNvbnN0IHVsOiBzdHJpbmcgPSBpbml0aWFsLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdFx0cmVnZXhOYW1lICs9IGxsID09PSB1bCA/IGluaXRpYWwgOiBgWyR7bGx9JHt1bH1dYDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVnZXhOYW1lLnJlcGxhY2UoLyhbJCgpKisuP1xcXFxeXSkvZywgJ1xcXFwkMScpLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKTtcblx0XHRcdH07XG5cdFx0XHRmYWxsYmFjayA9IGZhbGxiYWNrLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRjb25zdCBjYW5vbmljYWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IENBTC5XR19GT1JNQVRURURfTkFNRVNQQUNFU1tuYW1lc3BhY2VOdW1iZXJdPy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0bGV0IHJlZ2V4U3RyaW5nOiBzdHJpbmcgPSBjcmVhdGVSZWdleFN0cihjYW5vbmljYWwpO1xuXHRcdFx0aWYgKGZhbGxiYWNrICYmIGNhbm9uaWNhbCAhPT0gZmFsbGJhY2spIHtcblx0XHRcdFx0cmVnZXhTdHJpbmcgKz0gYHwke2NyZWF0ZVJlZ2V4U3RyKGZhbGxiYWNrKX1gO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBjYXROYW1lIG9mIE9iamVjdC5rZXlzKENBTC5XR19OQU1FU1BBQ0VfSURTKSkge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0Y2F0TmFtZS50b0xvd2VyQ2FzZSgpICE9PSBjYW5vbmljYWwgJiZcblx0XHRcdFx0XHRjYXROYW1lLnRvTG93ZXJDYXNlKCkgIT09IGZhbGxiYWNrICYmXG5cdFx0XHRcdFx0Q0FMLldHX05BTUVTUEFDRV9JRFNbY2F0TmFtZV0gPT09IG5hbWVzcGFjZU51bWJlclxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZWdleFN0cmluZyArPSBgfCR7Y3JlYXRlUmVnZXhTdHIoY2F0TmFtZSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGAoPzoke3JlZ2V4U3RyaW5nfSlgO1xuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIoKTogdm9pZCB7XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzID0gQ0FMLiRsYWJlbHMuZmlsdGVyKGAuJHtDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEfWApO1xuXHRcdFx0dGhpcy4kbWFya0NvdW50ZXIuc2hvdygpLmh0bWwoQ0FMLm1zZygnZmlsZXMtc2VsZWN0ZWQnLCBDQUwuJHNlbGVjdGVkTGFiZWxzLmxlbmd0aC50b1N0cmluZygpKSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgdG9nZ2xlQWxsKHNlbGVjdDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0Q0FMLiRsYWJlbHMudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCwgc2VsZWN0KTtcblx0XHRcdHRoaXMudXBkYXRlU2VsZWN0aW9uQ291bnRlcigpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGFzeW5jIGZpbmRBbGxWYXJpYW50cyhjYXRlZ29yeTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuXHRcdFx0aWYgKENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldIGFzIHN0cmluZ1tdO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVzdWx0czogc3RyaW5nW10gPSBbXTtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGV4dDogY2F0ZWdvcnksXG5cdFx0XHRcdHRpdGxlOiAndGVtcCcsXG5cdFx0XHR9O1xuXHRcdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRcdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBDQUwuYXBpLnBvc3Qoe1xuXHRcdFx0XHRcdC4uLnBhcmFtcyxcblx0XHRcdFx0XHR2YXJpYW50LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc3Qge3RleHR9ID0gcGFyc2U7XG5cdFx0XHRcdHJlc3VsdHNbcmVzdWx0cy5sZW5ndGhdID0gJCh0ZXh0KS5lcSgwKS50ZXh0KCkudHJpbSgpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGUtZHVwbGljYXRlXG5cdFx0XHRDQUwudmFyaWFudENhY2hlW2NhdGVnb3J5XSA9IFsuLi5uZXcgU2V0KHJlc3VsdHMpXTtcblx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGFzeW5jIHJlZ2V4QnVpbGRlcihjYXRlZ29yeTogc3RyaW5nKTogUHJvbWlzZTxSZWdFeHA+IHtcblx0XHRcdC8vIEJ1aWxkIGEgcmVnZXhwIHN0cmluZyBmb3IgbWF0Y2hpbmcgdGhlIGdpdmVuIGNhdGVnb3J5OlxuXHRcdFx0Y29uc3QgY2F0TmFtZTogc3RyaW5nID0gQ0FMLmxvY2FsaXplZFJlZ2V4KENBTC5UQVJHRVRfTkFNRVNQQUNFLCAnQ2F0ZWdvcnknKTtcblx0XHRcdC8vIHRyaW0gbGVhZGluZy90cmFpbGluZyB3aGl0ZXNwYWNlIGFuZCB1bmRlcnNjb3Jlc1xuXHRcdFx0Y2F0ZWdvcnkgPSBjYXRlZ29yeS5yZXBsYWNlKC9eW1xcc19dKy8sICcnKS5yZXBsYWNlKC9bXFxzX10rJC8sICcnKTtcblx0XHRcdC8vIEZpbmQgYWxsIHZhcmlhbnRzXG5cdFx0XHRjb25zdCB2YXJpYW50czogc3RyaW5nW10gPSBhd2FpdCBDQUwuZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5KTtcblx0XHRcdC8vIGVzY2FwZSByZWdleHAgbWV0YWNoYXJhY3RlcnMgKD0gYW55IEFTQ0lJIHB1bmN0dWF0aW9uIGV4Y2VwdCBfKVxuXHRcdFx0Y29uc3QgdmFyaWFudFJlZ0V4cHM6IHN0cmluZ1tdID0gW107XG5cdFx0XHRmb3IgKGxldCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG5cdFx0XHRcdHZhcmlhbnQgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cCh2YXJpYW50KTtcblx0XHRcdFx0Ly8gYW55IHNlcXVlbmNlIG9mIHNwYWNlcyBhbmQgdW5kZXJzY29yZXMgc2hvdWxkIG1hdGNoIGFueSBvdGhlclxuXHRcdFx0XHR2YXJpYW50ID0gdmFyaWFudC5yZXBsYWNlKC9bXFxzX10rL2csICdbXFxcXHNfXSsnKTtcblx0XHRcdFx0Ly8gTWFrZSB0aGUgZmlyc3QgY2hhcmFjdGVyIGNhc2UtaW5zZW5zaXRpdmU6XG5cdFx0XHRcdGNvbnN0IGZpcnN0OiBzdHJpbmcgPSB2YXJpYW50LnNsaWNlKDAsIDEpO1xuXHRcdFx0XHRpZiAoZmlyc3QudG9VcHBlckNhc2UoKSAhPT0gZmlyc3QudG9Mb3dlckNhc2UoKSkge1xuXHRcdFx0XHRcdHZhcmlhbnQgPSBgWyR7Zmlyc3QudG9VcHBlckNhc2UoKX0ke2ZpcnN0LnRvTG93ZXJDYXNlKCl9XSR7dmFyaWFudC5zbGljZSgxKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhcmlhbnRSZWdFeHBzW3ZhcmlhbnRSZWdFeHBzLmxlbmd0aF0gPSB2YXJpYW50O1xuXHRcdFx0fVxuXHRcdFx0Ly8gQ29tcGlsZSBpdCBpbnRvIGEgUmVnRXhwIHRoYXQgbWF0Y2hlcyBNZWRpYVdpa2kgY2F0ZWdvcnkgc3ludGF4ICh5ZWFoLCBpdCBsb29rcyB1Z2x5KTpcblx0XHRcdC8vIFhYWDogdGhlIGZpcnN0IGNhcHR1cmluZyBwYXJlbnMgYXJlIGFzc3VtZWQgdG8gbWF0Y2ggdGhlIHNvcnRrZXksIGlmIHByZXNlbnQsIGluY2x1ZGluZyB0aGUgfCBidXQgZXhjbHVkaW5nIHRoZSBdXVxuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxcW1xcXFxbW1xcXFxzX10qJHtjYXROYW1lfVtcXFxcc19dKjpbXFxcXHNfXSooPzoke3ZhcmlhbnRSZWdFeHBzLmpvaW4oXG5cdFx0XHRcdFx0J3wnXG5cdFx0XHRcdCl9KVtcXFxcc19dKihcXFxcfFteXFxcXF1dKig/OlxcXFxdW15cXFxcXV0rKSopP1xcXFxdXFxcXF1gLFxuXHRcdFx0XHQnZydcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBkb0FQSUNhbGwoXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0cGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkXG5cdFx0KSB7XG5cdFx0XHRwYXJhbXNbJ2Zvcm1hdCddID0gJ2pzb24nO1xuXHRcdFx0cGFyYW1zWydmb3JtYXR2ZXJzaW9uJ10gPSAnMic7XG5cdFx0XHRsZXQgaTogbnVtYmVyID0gMDtcblx0XHRcdGNvbnN0IGRvQ2FsbCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3I6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdG13LmxvZy5lcnJvcignW0NhdC1hLWxvdF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdFx0aWYgKGkgPCA0KSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGRvQ2FsbCwgMzAwKTtcblx0XHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBhcmFtc1sndGl0bGUnXSkge1xuXHRcdFx0XHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvcltDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aF0gPSBwYXJhbXNbJ3RpdGxlJ10gYXMgc3RyaW5nO1xuXHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0XHRDQUwuYXBpLnBvc3QocGFyYW1zKS50aGVuKGNhbGxiYWNrKS5jYXRjaChoYW5kbGVFcnJvcik7XG5cdFx0XHR9O1xuXHRcdFx0ZG9DYWxsKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgbWFya0FzRG9uZShcblx0XHRcdCRtYXJrZWRMYWJlbDogSlF1ZXJ5LFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnIHwgJ3JlbW92ZSdcblx0XHQpOiB2b2lkIHtcblx0XHRcdCRtYXJrZWRMYWJlbC5hZGRDbGFzcyhDTEFTU19OQU1FX0xBQkVMX0RPTkUpO1xuXG5cdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnYWRkJzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdhZGRlZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjb3B5Jzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdjb3BpZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbW92ZSc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbW92ZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmVtb3ZlJzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdyZW1vdmVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGRvQ2xlYW51cCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdFx0cmV0dXJuIENBTC5zZXR0aW5ncy5kb2NsZWFudXAgPyB0ZXh0LnJlcGxhY2UoL3t7XFxzKltDY11oZWNrIGNhdGVnb3JpZXNcXHMqKFxcfD8uKj8pfX0vLCAnJykgOiB0ZXh0O1xuXHRcdH0gLy8gUmVtb3ZlIHt7VW5jYXRlZ29yaXplZH19IChhbHNvIHdpdGggY29tbWVudCkuIE5vIG5lZWQgdG8gcmVwbGFjZSBpdCB3aXRoIGFueXRoaW5nXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVW5jYXQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdHJldHVybiB0ZXh0LnJlcGxhY2UoL1xce1xce1xccypbVXVdbmNhdGVnb3JpemVkXFxzKihcXHw/Lio/KVxcfVxcfS8sICcnKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBkaXNwbGF5UmVzdWx0KCk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3Moe1xuXHRcdFx0XHRjdXJzb3I6ICcnLFxuXHRcdFx0XHRvdmVyZmxvdzogJycsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9GRUVEQkFDS31gKS5hZGRDbGFzcyhDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUpO1xuXG5cdFx0XHRjb25zdCAkcGFyZW50OiBKUXVlcnkgPSBDQUwuJGNvdW50ZXIucGFyZW50KCk7XG5cdFx0XHQkcGFyZW50Lmh0bWwoPGgzPntDQUwubXNnKCdkb25lJyl9PC9oMz4pO1xuXHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ2FsbC1kb25lJyl9XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KTtcblxuXHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0Q0FMLiRwcm9ncmVzc0RpYWxvZy5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlQWxsKGZhbHNlKTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ3JldHVybi10by1wYWdlJyl9XG5cdFx0XHRcdDwvYT5cblx0XHRcdCk7XG5cblx0XHRcdGlmIChDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aCkge1xuXHRcdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGg1PntDQUwubXNnKCdza2lwcGVkLWFscmVhZHknLCBDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aC50b1N0cmluZygpKX08L2g1PlxuXHRcdFx0XHRcdFx0e0NBTC5hbHJlYWR5VGhlcmUucmVkdWNlKFxuXHRcdFx0XHRcdFx0XHQocHJlLCBjdXIsIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0XHRcdGluZGV4IDwgQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGggLSAxID8gWy4uLnByZSwgY3VyLCA8YnIga2V5PXtpbmRleH0gLz5dIDogWy4uLnByZSwgY3VyXSxcblx0XHRcdFx0XHRcdFx0W10gYXMgKHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGlmIChDQUwubm90Rm91bmQubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtbm90LWZvdW5kJywgQ0FMLm5vdEZvdW5kLmxlbmd0aC50b1N0cmluZygpKX08L2g1PlxuXHRcdFx0XHRcdFx0e0NBTC5ub3RGb3VuZC5yZWR1Y2UoXG5cdFx0XHRcdFx0XHRcdChwcmUsIGN1ciwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBDQUwubm90Rm91bmQubGVuZ3RoIC0gMSA/IFsuLi5wcmUsIGN1ciwgPGJyIGtleT17aW5kZXh9IC8+XSA6IFsuLi5wcmUsIGN1cl0sXG5cdFx0XHRcdFx0XHRcdFtdIGFzIChzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpW11cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGgpIHtcblx0XHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxoNT57Q0FMLm1zZygnc2tpcHBlZC1zZXJ2ZXInLCBDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aC50b1N0cmluZygpKX08L2g1PlxuXHRcdFx0XHRcdFx0e0NBTC5jb25uZWN0aW9uRXJyb3IucmVkdWNlKFxuXHRcdFx0XHRcdFx0XHQocHJlLCBjdXIsIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0XHRcdGluZGV4IDwgQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGggLSAxXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IFsuLi5wcmUsIGN1ciwgPGJyIGtleT17aW5kZXh9IC8+XVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBbLi4ucHJlLCBjdXJdLFxuXHRcdFx0XHRcdFx0XHRbXSBhcyAoc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50KVtdXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZUNvdW50ZXIoKTogdm9pZCB7XG5cdFx0XHRDQUwuY291bnRlckN1cnJlbnQrKztcblx0XHRcdGlmIChDQUwuY291bnRlckN1cnJlbnQgPiBDQUwuY291bnRlck5lZWRlZCkge1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlSZXN1bHQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdENBTC4kY291bnRlci50ZXh0KENBTC5jb3VudGVyQ3VycmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgYXN5bmMgZWRpdENhdGVnb3JpZXMoXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0cmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuXHRcdFx0bWFya2VkTGFiZWw6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPlswXSxcblx0XHRcdHRhcmdldENhdGVnb3J5OiBzdHJpbmcsXG5cdFx0XHRtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJyB8ICdyZW1vdmUnXG5cdFx0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHRjb25zdCBbbWFya2VkTGFiZWxUaXRsZSwgJG1hcmtlZExhYmVsXSA9IG1hcmtlZExhYmVsO1xuXG5cdFx0XHRpZiAoIXJlc3VsdD8uWydxdWVyeSddKSB7XG5cdFx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3JbQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGhdID0gbWFya2VkTGFiZWxUaXRsZTtcblx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bGV0IG9yaWdpblRleHQ6IHN0cmluZyA9ICcnO1xuXHRcdFx0bGV0IHN0YXJ0dGltZXN0YW1wOiBudW1iZXIgPSAwO1xuXHRcdFx0bGV0IHRpbWVzdGFtcDogbnVtYmVyID0gMDtcblx0XHRcdENBTC5lZGl0VG9rZW4gPSByZXN1bHRbJ3F1ZXJ5J10udG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGNvbnN0IHtwYWdlc30gPSByZXN1bHRbJ3F1ZXJ5J107XG5cblx0XHRcdGNvbnN0IFtwYWdlXSA9IHBhZ2VzO1xuXHRcdFx0b3JpZ2luVGV4dCA9IHBhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnQ7XG5cdFx0XHQoe3N0YXJ0dGltZXN0YW1wfSA9IHBhZ2UpO1xuXHRcdFx0W3t0aW1lc3RhbXB9XSA9IHBhZ2UucmV2aXNpb25zO1xuXG5cdFx0XHRjb25zdCBzb3VyY2VjYXQ6IHN0cmluZyA9IENBTC5DVVJSRU5UX0NBVEVHUk9ZO1xuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhhdCBmaWxlIGlzIGFscmVhZHkgaW4gdGhhdCBjYXRlZ29yeVxuXHRcdFx0Y29uc3QgdGFyZ2VSZWdFeHAgPSBhd2FpdCBDQUwucmVnZXhCdWlsZGVyKHRhcmdldENhdGVnb3J5KTtcblx0XHRcdGlmIChtb2RlICE9PSAncmVtb3ZlJyAmJiB0YXJnZVJlZ0V4cC50ZXN0KG9yaWdpblRleHQpICYmIG1vZGUgIT09ICdtb3ZlJykge1xuXHRcdFx0XHRDQUwuYWxyZWFkeVRoZXJlW0NBTC5hbHJlYWR5VGhlcmUubGVuZ3RoXSA9IG1hcmtlZExhYmVsVGl0bGU7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpeCB0ZXh0XG5cdFx0XHRsZXQgdGV4dDogc3RyaW5nID0gb3JpZ2luVGV4dDtcblx0XHRcdGxldCBzdW1tYXJ5OiBzdHJpbmc7XG5cdFx0XHRjb25zdCBzb3VyY2VDYXRSZWdFeHAgPSBhd2FpdCBDQUwucmVnZXhCdWlsZGVyKHNvdXJjZWNhdCk7XG5cdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnYWRkJzpcblx0XHRcdFx0XHR0ZXh0ICs9IGBcXG5bWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX1dXVxcbmA7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktYWRkJykucmVwbGFjZSgnJDEnLCB0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NvcHknOlxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRzb3VyY2VDYXRSZWdFeHAsXG5cdFx0XHRcdFx0XHRgW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7c291cmNlY2F0fSQxXV1cXG5bWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX0kMV1dYFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktY29weScpLnJlcGxhY2UoJyQxJywgc291cmNlY2F0KS5yZXBsYWNlKCckMicsIHRhcmdldENhdGVnb3J5KTtcblx0XHRcdFx0XHQvLyBJZiBjYXRlZ29yeSBpcyBhZGRlZCB0aHJvdWdoIHRlbXBsYXRlOlxuXHRcdFx0XHRcdGlmIChvcmlnaW5UZXh0ID09PSB0ZXh0KSB7XG5cdFx0XHRcdFx0XHR0ZXh0ICs9IGBcXG5bWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX1dXWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtb3ZlJzpcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKHNvdXJjZUNhdFJlZ0V4cCwgYFtbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fSQxXV1gKTtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1tb3ZlJykucmVwbGFjZSgnJDEnLCBzb3VyY2VjYXQpLnJlcGxhY2UoJyQyJywgdGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZW1vdmUnOlxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2Uoc291cmNlQ2F0UmVnRXhwLCAnJyk7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktcmVtb3ZlJykucmVwbGFjZSgnJDEnLCBzb3VyY2VjYXQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGV4dCA9PT0gb3JpZ2luVGV4dCkge1xuXHRcdFx0XHRDQUwubm90Rm91bmRbQ0FMLm5vdEZvdW5kLmxlbmd0aF0gPSBtYXJrZWRMYWJlbFRpdGxlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmUgdW5jYXQgYWZ0ZXIgd2UgY2hlY2tlZCB3aGV0aGVyIHdlIGNoYW5nZWQgdGhlIHRleHQgc3VjY2Vzc2Z1bGx5LlxuXHRcdFx0Ly8gT3RoZXJ3aXNlIHdlIG1pZ2h0IGZhaWwgdG8gZG8gdGhlIGNoYW5nZXMsIGJ1dCBzdGlsbCByZXBsYWNlIHt7dW5jYXR9fVxuXHRcdFx0aWYgKG1vZGUgIT09ICdyZW1vdmUnKSB7XG5cdFx0XHRcdHRleHQgPSBDQUwuZG9DbGVhbnVwKENBTC5yZW1vdmVVbmNhdCh0ZXh0KSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0dG9rZW46IENBTC5lZGl0VG9rZW4sXG5cdFx0XHRcdFx0dGFnczogQ0FMLkFQSV9UQUcsXG5cdFx0XHRcdFx0dGl0bGU6IG1hcmtlZExhYmVsVGl0bGUsXG5cdFx0XHRcdFx0YXNzZXJ0OiAndXNlcicsXG5cdFx0XHRcdFx0Ym90OiB0cnVlLFxuXHRcdFx0XHRcdGJhc2V0aW1lc3RhbXA6IHRpbWVzdGFtcCxcblx0XHRcdFx0XHR3YXRjaGxpc3Q6IENBTC5zZXR0aW5ncy53YXRjaGxpc3QsXG5cdFx0XHRcdFx0dGV4dCxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdHN0YXJ0dGltZXN0YW1wLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHRcdENBTC5tYXJrQXNEb25lKCRtYXJrZWRMYWJlbCwgdGFyZ2V0Q2F0ZWdvcnksIG1vZGUpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldENvbnRlbnQoXG5cdFx0XHRtYXJrZWRMYWJlbDogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+WzBdLFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnXG5cdFx0KTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0XHR0aXRsZXM6IG1hcmtlZExhYmVsWzBdLFxuXHRcdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnR8dGltZXN0YW1wJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50XG5cdFx0XHRcdFx0dm9pZCB0aGlzLmVkaXRDYXRlZ29yaWVzKHJlc3VsdCwgbWFya2VkTGFiZWwsIHRhcmdldENhdGVnb3J5LCBtb2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZ2V0VGl0bGVGcm9tTGluayhocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIChkZWNvZGVVUklDb21wb25lbnQoaHJlZiA/PyAnJykubWF0Y2goL3dpa2lcXC8oLis/KSg/OiMuKyk/JC8pPy5bMV0gPz8gJycpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0TWFya2VkTGFiZWxzKCk6IFtzdHJpbmcsIEpRdWVyeV1bXSB7XG5cdFx0XHRjb25zdCBtYXJrZWRMYWJlbHM6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPiA9IFtdO1xuXHRcdFx0Q0FMLiRzZWxlY3RlZExhYmVscyA9IENBTC4kbGFiZWxzLmZpbHRlcihgLiR7Q0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRH1gKTtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMuZWFjaCgoX2luZGV4OiBudW1iZXIsIGxhYmVsOiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCAkbGFiZWw6IEpRdWVyeSA9ICQobGFiZWwpO1xuXHRcdFx0XHRjb25zdCAkbGFiZWxMaW5rOiBKUXVlcnkgPSAkbGFiZWwuZmluZCgnYVt0aXRsZV0nKTtcblx0XHRcdFx0Y29uc3QgdGl0bGU6IHN0cmluZyA9XG5cdFx0XHRcdFx0JGxhYmVsTGluay5hdHRyKCd0aXRsZScpIHx8XG5cdFx0XHRcdFx0Q0FMLmdldFRpdGxlRnJvbUxpbmsoJGxhYmVsTGluay5hdHRyKCdocmVmJykpIHx8XG5cdFx0XHRcdFx0Q0FMLmdldFRpdGxlRnJvbUxpbmsoJGxhYmVsLmZpbmQoJ2EnKS5hdHRyKCdocmVmJykpO1xuXHRcdFx0XHRtYXJrZWRMYWJlbHNbbWFya2VkTGFiZWxzLmxlbmd0aF0gPSBbdGl0bGUsICRsYWJlbF07XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBtYXJrZWRMYWJlbHM7XG5cdFx0fVxuXHRcdHByaXZhdGUgc2hvd1Byb2dyZXNzKCk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3Moe1xuXHRcdFx0XHRjdXJzb3I6ICd3YWl0Jyxcblx0XHRcdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdFx0fSk7XG5cdFx0XHRDQUwuJHByb2dyZXNzRGlhbG9nID0gJChcblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7Q0FMLm1zZygnZWRpdGluZycpfVxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVJ9PntDQUwuY291bnRlckN1cnJlbnR9PC9zcGFuPlxuXHRcdFx0XHRcdHtbQ0FMLm1zZygnb2YnKSwgQ0FMLmNvdW50ZXJOZWVkZWRdfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkuZGlhbG9nKHtcblx0XHRcdFx0ZGlhbG9nQ2xhc3M6IENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdFx0XHRcdG1pbkhlaWdodDogOTAsXG5cdFx0XHRcdGhlaWdodDogOTAsXG5cdFx0XHRcdHdpZHRoOiA0NTAsXG5cdFx0XHRcdG1vZGFsOiB0cnVlLFxuXHRcdFx0XHRjbG9zZU9uRXNjYXBlOiBmYWxzZSxcblx0XHRcdFx0ZHJhZ2dhYmxlOiBmYWxzZSxcblx0XHRcdFx0cmVzaXphYmxlOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0ZFRURCQUNLfSAudWktZGlhbG9nLXRpdGxlYmFyYCkuaGlkZSgpO1xuXHRcdFx0dGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0ZFRURCQUNLfSAudWktZGlhbG9nLWNvbnRlbnRgKS5oZWlnaHQoJ2F1dG8nKTtcblx0XHRcdENBTC4kY291bnRlciA9IHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVJ9YCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZywgbW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZScpOiB2b2lkIHtcblx0XHRcdGNvbnN0IG1hcmtlZExhYmVsczogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+ID0gdGhpcy5nZXRNYXJrZWRMYWJlbHMoKTtcblx0XHRcdGlmICghbWFya2VkTGFiZWxzLmxlbmd0aCkge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShDQUwubXNnKCdub25lLXNlbGVjdGVkJyksIHtcblx0XHRcdFx0XHR0YWc6ICdjYXRBTG90Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdENBTC5hbHJlYWR5VGhlcmUgPSBbXTtcblx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3IgPSBbXTtcblx0XHRcdENBTC5ub3RGb3VuZCA9IFtdO1xuXHRcdFx0Q0FMLmNvdW50ZXJDdXJyZW50ID0gMTtcblx0XHRcdENBTC5jb3VudGVyTmVlZGVkID0gbWFya2VkTGFiZWxzLmxlbmd0aDtcblx0XHRcdHRoaXMuc2hvd1Byb2dyZXNzKCk7XG5cdFx0XHRmb3IgKGNvbnN0IG1hcmtlZExhYmVsIG9mIG1hcmtlZExhYmVscykge1xuXHRcdFx0XHR0aGlzLmdldENvbnRlbnQobWFya2VkTGFiZWwsIHRhcmdldENhdGVnb3J5LCBtb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBhZGRIZXJlKHRhcmdldENhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnksICdhZGQnKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBjb3B5SGVyZSh0YXJnZXRDYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5LCAnY29weScpO1xuXHRcdH1cblx0XHRwcml2YXRlIG1vdmVIZXJlKHRhcmdldENhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnksICdtb3ZlJyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgY3JlYXRlQ2F0TGlua3Moc3ltYm9sOiBzdHJpbmcsIGNhdGVnb3JpZXM6IHN0cmluZ1tdKTogdm9pZCB7XG5cdFx0XHRjYXRlZ29yaWVzLnNvcnQoKTtcblx0XHRcdGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuXHRcdFx0XHRjb25zdCAkdHIgPSAkKFxuXHRcdFx0XHRcdDx0ciBkYXRhc2V0PXt7Y2F0ZWdvcnl9fT5cblx0XHRcdFx0XHRcdDx0ZD57c3ltYm9sfTwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtjYXRlZ29yeX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQpO1xuXHRcdFx0XHQvLyBDYW4ndCBtb3ZlIHRvIHNvdXJjZSBjYXRlZ29yeVxuXHRcdFx0XHRpZiAoY2F0ZWdvcnkgIT09IENBTC5DVVJSRU5UX0NBVEVHUk9ZICYmIENBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0XHQkdHIuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTn1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuYWRkSGVyZSgkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FkZCcpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2F0ZWdvcnkgIT09IENBTC5DVVJSRU5UX0NBVEVHUk9ZICYmICFDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdFx0JHRyLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5jb3B5SGVyZSgkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2NvcHknKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5tb3ZlSGVyZSgkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ21vdmUnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuZmluZCgndGFibGUnKS5hcHBlbmQoJHRyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBzaG93Q2F0ZWdvcnlMaXN0KCk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3MoJ2N1cnNvcicsICcnKTtcblx0XHRcdGNvbnN0IGN1cnJlbnRDYXRlZ29yaWVzOiBzdHJpbmdbXSA9IFtDQUwuY3VycmVudENhdGVnb3J5XTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuZW1wdHkoKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuYXBwZW5kKDx0YWJsZSAvPik7XG5cdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpEnLCBDQUwucGFyZW50Q2F0cyk7XG5cdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpInLCBjdXJyZW50Q2F0ZWdvcmllcyk7XG5cdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpMnLCBDQUwuc3ViQ2F0cyk7XG5cdFx0XHQvLyBSZXNldCB3aWR0aFxuXHRcdFx0dGhpcy4kY29udGFpbmVyLndpZHRoKCcnKTtcblx0XHRcdHRoaXMuJGNvbnRhaW5lci5oZWlnaHQoJycpO1xuXHRcdFx0dGhpcy4kY29udGFpbmVyLndpZHRoKE1hdGgubWluKCh0aGlzLiRjb250YWluZXIud2lkdGgoKSA/PyAwKSAqIDEuMSArIDE1LCAoJCh3aW5kb3cpLndpZHRoKCkgPz8gMCkgLSAxMCkpO1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5jc3Moe1xuXHRcdFx0XHQnbWF4LWhlaWdodCc6IGAke0NBTC5kaWFsb2dIZWlnaHR9cHhgLFxuXHRcdFx0XHRoZWlnaHQ6ICcnLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0UGFyZW50Q2F0cygpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdHRpdGxlczogYENhdGVnb3J5OiR7Q0FMLmN1cnJlbnRDYXRlZ29yeX1gLFxuXHRcdFx0XHRcdHByb3A6ICdjYXRlZ29yaWVzJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdENBTC5wYXJlbnRDYXRzID0gW107XG5cdFx0XHRcdFx0Y29uc3Qge3BhZ2VzfSA9IHJlc3VsdC5xdWVyeTtcblx0XHRcdFx0XHRpZiAocGFnZXNbMF0/Lm1pc3NpbmcpIHtcblx0XHRcdFx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnJyk7XG5cdFx0XHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0Lmh0bWwoXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX05PX0ZPVU5EfT5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnY2F0LW5vdC1mb3VuZCcpfVxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaSJywgW0NBTC5jdXJyZW50Q2F0ZWdvcnldKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGV0IGNhdGVnb3JpZXM6IHt0aXRsZTogc3RyaW5nfVtdID0gW107XG5cdFx0XHRcdFx0W3tjYXRlZ29yaWVzfV0gPSBwYWdlcztcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0XHRDQUwucGFyZW50Q2F0c1tDQUwucGFyZW50Q2F0cy5sZW5ndGhdID0gY2F0LnRpdGxlLnJlcGxhY2UoL15bXjpdKzovLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdENBTC5jb3VudGVyQ2F0Kys7XG5cdFx0XHRcdFx0aWYgKENBTC5jb3VudGVyQ2F0ID09PSAyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNob3dDYXRlZ29yeUxpc3QoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0U3ViQ2F0cygpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdGxpc3Q6ICdjYXRlZ29yeW1lbWJlcnMnLFxuXHRcdFx0XHRcdGNtdHlwZTogJ3N1YmNhdCcsXG5cdFx0XHRcdFx0Y21saW1pdDogQ0FMLnNldHRpbmdzLnN1YmNhdGNvdW50LFxuXHRcdFx0XHRcdGNtdGl0bGU6IGBDYXRlZ29yeToke0NBTC5jdXJyZW50Q2F0ZWdvcnl9YCxcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGNhdHM6IHt0aXRsZTogc3RyaW5nfVtdID0gcmVzdWx0Py5xdWVyeT8uY2F0ZWdvcnltZW1iZXJzIHx8IFtdO1xuXHRcdFx0XHRcdENBTC5zdWJDYXRzID0gW107XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBjYXQgb2YgY2F0cykge1xuXHRcdFx0XHRcdFx0Q0FMLnN1YkNhdHNbQ0FMLnN1YkNhdHMubGVuZ3RoXSA9IGNhdC50aXRsZS5yZXBsYWNlKC9eW146XSs6LywgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDQUwuY291bnRlckNhdCsrO1xuXHRcdFx0XHRcdGlmIChDQUwuY291bnRlckNhdCA9PT0gMikge1xuXHRcdFx0XHRcdFx0dGhpcy5zaG93Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldENhdGVnb3J5TGlzdCgpOiB2b2lkIHtcblx0XHRcdENBTC5jb3VudGVyQ2F0ID0gMDtcblx0XHRcdHRoaXMuZ2V0UGFyZW50Q2F0cygpO1xuXHRcdFx0dGhpcy5nZXRTdWJDYXRzKCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgdXBkYXRlQ2F0cyhjYXQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XG5cdFx0XHRDQUwuY3VycmVudENhdGVnb3J5ID0gY2F0O1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5odG1sKDxkaXY+e0NBTC5tc2coJ2xvYWRpbmcnKX08L2Rpdj4pO1xuXHRcdFx0dGhpcy5nZXRDYXRlZ29yeUxpc3QoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGZpbmRBbGxMYWJlbHMoKTogdm9pZCB7XG5cdFx0XHQvLyBJdCdzIHBvc3NpYmxlIHRvIGFsbG93IGFueSBraW5kIG9mIHBhZ2VzIGFzIHdlbGwgYnV0IHdoYXQgaGFwcGVucyBpZiB5b3UgY2xpY2sgb24gXCJzZWxlY3QgYWxsXCIgYW5kIGRvbid0IGV4cGVjdCBpdFxuXHRcdFx0aWYgKENBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0Q0FMLiRsYWJlbHMgPSB0aGlzLiRib2R5LmZpbmQoJ3RhYmxlLnNlYXJjaFJlc3VsdEltYWdlJykuZmluZCgndHI+dGQnKS5lcSgxKTtcblx0XHRcdFx0aWYgKENBTC5zZXR0aW5ncy5lZGl0cGFnZXMpIHtcblx0XHRcdFx0XHRDQUwuJGxhYmVscyA9IENBTC4kbGFiZWxzLmFkZCgnZGl2Lm13LXNlYXJjaC1yZXN1bHQtaGVhZGluZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRDQUwuJGxhYmVscyA9IHRoaXMuJGJvZHlcblx0XHRcdFx0XHQuZmluZCgnZGl2LmdhbGxlcnl0ZXh0Jylcblx0XHRcdFx0XHQuYWRkKHRoaXMuJGJvZHkuZmluZCgnZGl2I213LWNhdGVnb3J5LW1lZGlhJykuZmluZCgnbGlbY2xhc3MhPVwiZ2FsbGVyeWJveFwiXScpKTtcblx0XHRcdFx0aWYgKENBTC5zZXR0aW5ncy5lZGl0cGFnZXMpIHtcblx0XHRcdFx0XHRjb25zdCAkcGFnZXM6IEpRdWVyeTxIVE1MTElFbGVtZW50PiA9IHRoaXMuJGJvZHlcblx0XHRcdFx0XHRcdC5maW5kKCdkaXYjbXctcGFnZXMsIGRpdiNtdy1zdWJjYXRlZ29yaWVzJylcblx0XHRcdFx0XHRcdC5maW5kKCdsaScpO1xuXHRcdFx0XHRcdENBTC4kbGFiZWxzID0gQ0FMLiRsYWJlbHMuYWRkKCRwYWdlcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBtYWtlQ2xpY2thYmxlKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5maW5kQWxsTGFiZWxzKCk7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsXG5cdFx0XHRDQUwuJGxhYmVsc1xuXHRcdFx0XHQuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTClcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMzlcblx0XHRcdFx0Lm9uQ2F0QUxvdFNoaWZ0Q2xpY2soKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlU2VsZWN0aW9uQ291bnRlcigpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHJ1bigpOiB2b2lkIHtcblx0XHRcdGlmICh0aGlzLiRsaW5rLmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEKSkge1xuXHRcdFx0XHR0aGlzLm1ha2VDbGlja2FibGUoKTtcblx0XHRcdFx0dGhpcy4kZGF0YUNvbnRhaW5lci5zaG93KCk7XG5cdFx0XHRcdHRoaXMuJGNvbnRhaW5lci5yZXNpemFibGUoe1xuXHRcdFx0XHRcdGFsc29SZXNpemU6IHRoaXMuJHJlc3VsdExpc3QsXG5cdFx0XHRcdFx0aGFuZGxlczogJ24nLFxuXHRcdFx0XHRcdHJlc2l6ZTogKGV2ZW50OiBKUXVlcnlFdmVudE9iamVjdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgJGN1cnJlbnRUYXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpIGFzIEpRdWVyeTtcblx0XHRcdFx0XHRcdCRjdXJyZW50VGFyZ2V0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6ICcnLFxuXHRcdFx0XHRcdFx0XHR0b3A6ICcnLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRDQUwuZGlhbG9nSGVpZ2h0ID0gJGN1cnJlbnRUYXJnZXQuaGVpZ2h0KCkgPz8gQ0FMLmRpYWxvZ0hlaWdodDtcblx0XHRcdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuY3NzKHtcblx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiAnJyxcblx0XHRcdFx0XHRcdFx0d2lkdGg6ICcnLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuY3NzKCdtYXgtaGVpZ2h0JywgJzQ1MHB4Jyk7XG5cdFx0XHRcdGlmIChDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKCdQaWN0dXJlcyBhbmQgaW1hZ2VzJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKENBTC5DVVJSRU5UX0NBVEVHUk9ZKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy4kZGF0YUNvbnRhaW5lci5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuJGNvbnRhaW5lci5yZXNpemFibGUoJ2Rlc3Ryb3knKTtcblx0XHRcdFx0dGhpcy4kY29udGFpbmVyLmNzcygnd2lkdGgnLCAnJyk7XG5cdFx0XHRcdENBTC4kbGFiZWxzLm9mZignY2xpY2suY2F0QUxvdCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChcblx0XHQoV0dfTkFNRVNQQUNFX05VTUJFUiA9PT0gLTEgJiYgV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FID09PSAnU2VhcmNoJykgfHxcblx0XHRXR19OQU1FU1BBQ0VfTlVNQkVSID09PSBPUFRJT05TLnRhcmdldE5hbWVzcGFjZVxuXHQpIHtcblx0XHRpZiAoV0dfTkFNRVNQQUNFX05VTUJFUiA9PT0gLTEpIHtcblx0XHRcdENBTC5pc1NlYXJjaE1vZGUgPSB0cnVlO1xuXHRcdH1cblx0XHQvKiEgQ2F0LWEtbG90IG1lc3NhZ2VzIHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG5cdFx0c2V0TWVzc2FnZXMoKTtcblx0XHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRcdG5ldyBDQUwoJGJvZHkpLmJ1aWxkRWxlbWVudHMoKTtcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtjYXRBTG90fTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBtZWRpYXdpa2kvY2xhc3MtZG9jICovXG5pbXBvcnQge0NMQVNTX05BTUVfTEFCRUwsIENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCwgQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRH0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IGV4dGVuZEpRdWVyeVByb3RvdHlwZSA9ICgpOiB2b2lkID0+IHtcblx0LyohIGpRdWVyeSBjaGVja2JveFNoaWZ0Q2xpY2sgfCBHUEwtMi4wIDxodHRwczovL3F3YmsuY2MvSDpHUEw+ICovXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzM5XG5cdCQuZm4ub25DYXRBTG90U2hpZnRDbGljayA9IGZ1bmN0aW9uIChjYWxsYmFjazogKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdW5rbm93bik6IEpRdWVyeSB7XG5cdFx0bGV0IHByZXZDaGVja2JveDogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXG5cdFx0Ly8gV2hlbiBvdXIgYm94ZXMgYXJlIGNsaWNrZWQuLlxuXHRcdHRoaXMub24oJ2NsaWNrLmNhdEFMb3QnLCAoZXZlbnQ6IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0Ly8gUHJldmVudCBmb2xsb3dpbmcgdGhlIGxpbmsgYW5kIHRleHQgc2VsZWN0aW9uXG5cdFx0XHRpZiAoIWV2ZW50LmN0cmxLZXkpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSGlnaGxpZ2h0IGxhc3Qgc2VsZWN0ZWRcblx0XHRcdHRoaXMucGFyZW50cygnYm9keScpLmZpbmQoYC4ke0NMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRH1gKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQpO1xuXG5cdFx0XHRsZXQgJHRoaXNDb250cm9sID0gJChldmVudC50YXJnZXQpIGFzIEpRdWVyeTtcblx0XHRcdGlmICghJHRoaXNDb250cm9sLmhhc0NsYXNzKENMQVNTX05BTUVfTEFCRUwpKSB7XG5cdFx0XHRcdCR0aGlzQ29udHJvbCA9ICR0aGlzQ29udHJvbC5wYXJlbnRzKGAuJHtDTEFTU19OQU1FX0xBQkVMfWApO1xuXHRcdFx0fVxuXG5cdFx0XHQkdGhpc0NvbnRyb2wuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEKS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEKTtcblxuXHRcdFx0Ly8gQW5kIG9uZSBoYXMgYmVlbiBjbGlja2VkIGJlZm9yZS4uLlxuXHRcdFx0aWYgKHByZXZDaGVja2JveCAmJiBldmVudC5zaGlmdEtleSkge1xuXHRcdFx0XHRjb25zdCBtZXRob2Q6ICdhZGRDbGFzcycgfCAncmVtb3ZlQ2xhc3MnID0gJHRoaXNDb250cm9sLmhhc0NsYXNzKENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQpXG5cdFx0XHRcdFx0PyAnYWRkQ2xhc3MnXG5cdFx0XHRcdFx0OiAncmVtb3ZlQ2xhc3MnO1xuXHRcdFx0XHQvLyBDaGVjayBvciB1bmNoZWNrIHRoaXMgb25lIGFuZCBhbGwgaW4tYmV0d2VlbiBjaGVja2JveGVzXG5cdFx0XHRcdHRoaXMuc2xpY2UoXG5cdFx0XHRcdFx0TWF0aC5taW4odGhpcy5pbmRleChwcmV2Q2hlY2tib3gpLCB0aGlzLmluZGV4KCR0aGlzQ29udHJvbCkpLFxuXHRcdFx0XHRcdE1hdGgubWF4KHRoaXMuaW5kZXgocHJldkNoZWNrYm94KSwgdGhpcy5pbmRleCgkdGhpc0NvbnRyb2wpKSArIDFcblx0XHRcdFx0KVttZXRob2RdKENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRWl0aGVyIHdheSwgdXBkYXRlIHRoZSBwcmV2Q2hlY2tib3ggdmFyaWFibGUgdG8gdGhlIG9uZSBjbGlja2VkIG5vd1xuXHRcdFx0cHJldkNoZWNrYm94ID0gJHRoaXNDb250cm9sO1xuXG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcbn07XG5cbmV4cG9ydCB7ZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlfTtcbiIsICJpbXBvcnQge2NhdEFMb3R9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7ZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlfSBmcm9tICcuL21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlJztcblxuLyohIGpRdWVyeSBjaGVja2JveFNoaWZ0Q2xpY2sgfCBHUEwtMi4wIDxodHRwczovL3F3YmsuY2MvSDpHUEw+ICovXG5leHRlbmRKUXVlcnlQcm90b3R5cGUoKTtcbi8qISBDYXQtYS1sb3QgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cbmNhdEFMb3QoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7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QUc7QUFDN0NvVyx1QkFBZUEsYUFBYUYsUUFBQSxJQUFBbFgsT0FBWWdCLGdCQUFnQixDQUFFO01BQzNEO0FBRUFvVyxtQkFBYXJJLFNBQVM3Tiw4QkFBOEIsRUFBRWdJLFlBQVkvSCx5QkFBeUI7QUFHM0YsVUFBSTRWLGdCQUFnQnRRLE1BQU02USxVQUFVO0FBQ25DLGNBQU1DLFNBQXFDSCxhQUFhbEIsU0FBUy9VLHlCQUF5QixJQUN2RixhQUNBO0FBRUgsYUFBS21LLE1BQ0pvSixLQUFLQyxJQUFJLEtBQUs3RSxNQUFNaUgsWUFBWSxHQUFHLEtBQUtqSCxNQUFNc0gsWUFBWSxDQUFDLEdBQzNEMUMsS0FBSzhDLElBQUksS0FBSzFILE1BQU1pSCxZQUFZLEdBQUcsS0FBS2pILE1BQU1zSCxZQUFZLENBQUMsSUFBSSxDQUNoRSxFQUFFRyxNQUFNLEVBQUVwVyx5QkFBeUI7TUFDcEM7QUFFQTRWLHFCQUFlSztBQUVmLFVBQUksT0FBT2xKLGFBQWEsWUFBWTtBQUNuQ0EsaUJBQVM7TUFDVjtJQUNELENBQUM7QUFFRCxXQUFPO0VBQ1I7QUFDRDs7QUM1Q0E7QUFDQTJJLHNCQUFzQjtBQUN0QjtBQUNBdlQsUUFBUTsiLAogICJuYW1lcyI6IFsiYXBpVGFnIiwgInRhcmdldE5hbWVzcGFjZSIsICJ2ZXJzaW9uIiwgIkNMQVNTX05BTUUiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVIiLCAiY29uY2F0IiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEEiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04iLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX05PX0ZPVU5EIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlMiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOSyIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCIsICJDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUiIsICJDTEFTU19OQU1FX0ZFRURCQUNLIiwgIkNMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSIsICJDTEFTU19OQU1FX0xBQkVMIiwgIkNMQVNTX05BTUVfTEFCRUxfRE9ORSIsICJDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQiLCAiQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCIsICJERUZBVUxUX1NFVFRJTkciLCAiZG9jbGVhbnVwIiwgImRlZmF1bHQiLCAibGFiZWxfaTE4biIsICJlZGl0cGFnZXMiLCAibWlub3IiLCAic3ViY2F0Y291bnQiLCAid2F0Y2hsaXN0IiwgInNlbGVjdF9pMThuIiwgIndhdGNoX25vY2hhbmdlIiwgIndhdGNoX3ByZWYiLCAid2F0Y2hfdW53YXRjaCIsICJ3YXRjaF93YXRjaCIsICJWQVJJQU5UUyIsICJXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ0b1N0cmluZyIsICJXR19GT1JNQVRURURfTkFNRVNQQUNFUyIsICJXR19OQU1FU1BBQ0VfSURTIiwgIldHX05BTUVTUEFDRV9OVU1CRVIiLCAiV0dfU0NSSVBUIiwgIldHX1RJVExFIiwgIldHX1VTRVJfTEFOR1VBR0UiLCAiREVGQVVMVF9NRVNTQUdFUyIsICJzZXRNZXNzYWdlcyIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJzZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJjYXRBTG90IiwgIkNBTCIsICJpc1NlYXJjaE1vZGUiLCAiTUVTU0FHRVMiLCAiVkVSU0lPTiIsICJBUElfVEFHIiwgIlRBUkdFVF9OQU1FU1BBQ0UiLCAiQ1VSUkVOVF9DQVRFR1JPWSIsICJpc0F1dG9Db21wbGV0ZUluaXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJhbHJlYWR5VGhlcmUiLCAiY29ubmVjdGlvbkVycm9yIiwgIm5vdEZvdW5kIiwgImNvdW50ZXJDdXJyZW50IiwgImNvdW50ZXJOZWVkZWQiLCAiY291bnRlckNhdCIsICJjdXJyZW50Q2F0ZWdvcnkiLCAiZGlhbG9nSGVpZ2h0IiwgImVkaXRUb2tlbiIsICJsb2NhbENhdE5hbWUiLCAicGFyZW50Q2F0cyIsICJzdWJDYXRzIiwgInNldHRpbmdzIiwgInZhcmlhbnRDYWNoZSIsICIkY291bnRlciIsICIkIiwgIiRwcm9ncmVzc0RpYWxvZyIsICIkbGFiZWxzIiwgIiRzZWxlY3RlZExhYmVscyIsICIkYm9keSIsICIkY29udGFpbmVyIiwgIiRkYXRhQ29udGFpbmVyIiwgIiRtYXJrQ291bnRlciIsICIkcmVzdWx0TGlzdCIsICIkc2VhcmNoSW5wdXQiLCAiJGhlYWQiLCAiJGxpbmsiLCAiY29uc3RydWN0b3IiLCAiX213JHV0aWwkZ2V0UGFyYW1WYWx1IiwgIm1zZyIsICJpbml0U2V0dGluZ3MiLCAiY29udGFpbmVyIiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInBsYWNlaG9sZGVyIiwgInR5cGUiLCAidmFsdWUiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIm9uS2V5RG93biIsICJldmVudCIsICIkZWxlbWVudCIsICJjdXJyZW50VGFyZ2V0IiwgImtleSIsICJfJGVsZW1lbnQkdmFsJHRyaW0iLCAiXyRlbGVtZW50JHZhbCIsICJjYXQiLCAidmFsIiwgInRyaW0iLCAidXBkYXRlQ2F0cyIsICJvbkNsaWNrIiwgInRvZ2dsZUFsbCIsICJhcHBlbmRUbyIsICJmaW5kIiwgImJ1aWxkRWxlbWVudHMiLCAicmVnZXhDYXQiLCAiUmVnRXhwIiwgImxvY2FsaXplZFJlZ2V4IiwgIm9uIiwgIm9sZFZhbCIsICJuZXdWYWwiLCAicmVwbGFjZSIsICJpbml0QXV0b2NvbXBsZXRlIiwgImF1dG9jb21wbGV0ZSIsICJzb3VyY2UiLCAicmVxdWVzdCIsICJyZXNwb25zZSIsICJkb0FQSUNhbGwiLCAiYWN0aW9uIiwgIm5hbWVzcGFjZSIsICJyZWRpcmVjdHMiLCAic2VhcmNoIiwgInRlcm0iLCAicmVzdWx0IiwgIm1hcCIsICJfaW5kZXgiLCAiaXRlbSIsICJwb3NpdGlvbiIsICJteSIsICJhdCIsICJvZiIsICJ0b2dnbGVDbGFzcyIsICJydW4iLCAiX3dpbmRvdyRDYXRBTG90UHJlZnMiLCAiY2F0QUxvdFByZWZzIiwgIndpbmRvdyIsICJDYXRBTG90UHJlZnMiLCAidHlwZU9mQ2F0QUxvdFByZWZzIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiX2kiLCAiX09iamVjdCRrZXlzIiwgIk9iamVjdCIsICJrZXlzIiwgImxlbmd0aCIsICJfY2F0QUxvdFByZWZzJHNldHRpbmciLCAic2V0dGluZ0tleSIsICJzZXR0aW5nIiwgInNlbGVjdCIsICJfaTIiLCAiX09iamVjdCRrZXlzMiIsICJtZXNzYWdlS2V5IiwgIm1lc3NhZ2UiLCAiYXJncyIsICJmdWxsS2V5IiwgInBhcnNlIiwgInBsYWluIiwgIm5hbWVzcGFjZU51bWJlciIsICJmYWxsYmFjayIsICJfQ0FMJFdHX0ZPUk1BVFRFRF9OQU0iLCAid2lraVRleHRCbGFuayIsICJ3aWtpVGV4dEJsYW5rUkUiLCAiY3JlYXRlUmVnZXhTdHIiLCAibmFtZSIsICJyZWdleE5hbWUiLCAiaSIsICJpbml0aWFsIiwgInNsaWNlIiwgImxsIiwgInRvTG93ZXJDYXNlIiwgInVsIiwgInRvVXBwZXJDYXNlIiwgImNhbm9uaWNhbCIsICJyZWdleFN0cmluZyIsICJfaTMiLCAiX09iamVjdCRrZXlzMyIsICJjYXROYW1lIiwgInVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIiLCAiZmlsdGVyIiwgInNob3ciLCAiaHRtbCIsICJmaW5kQWxsVmFyaWFudHMiLCAiY2F0ZWdvcnkiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicmVzdWx0cyIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGV4dCIsICJ0aXRsZSIsICJfaTQiLCAiX1ZBUklBTlRTIiwgInZhcmlhbnQiLCAicG9zdCIsICJlcSIsICJTZXQiLCAicmVnZXhCdWlsZGVyIiwgInZhcmlhbnRzIiwgInZhcmlhbnRSZWdFeHBzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImVzY2FwZVJlZ0V4cCIsICJmaXJzdCIsICJlcnIiLCAiZSIsICJmIiwgImpvaW4iLCAiY2FsbGJhY2siLCAiZG9DYWxsIiwgImhhbmRsZUVycm9yIiwgImVycm9yIiwgImxvZyIsICJzZXRUaW1lb3V0IiwgInVwZGF0ZUNvdW50ZXIiLCAidGhlbiIsICJjYXRjaCIsICJtYXJrQXNEb25lIiwgIiRtYXJrZWRMYWJlbCIsICJ0YXJnZXRDYXRlZ29yeSIsICJtb2RlIiwgImFkZENsYXNzIiwgImFwcGVuZCIsICJGcmFnbWVudCIsICJkb0NsZWFudXAiLCAicmVtb3ZlVW5jYXQiLCAiZGlzcGxheVJlc3VsdCIsICJjc3MiLCAiY3Vyc29yIiwgIm92ZXJmbG93IiwgIiRwYXJlbnQiLCAicGFyZW50IiwgInJlbW92ZSIsICJyZWR1Y2UiLCAicHJlIiwgImN1ciIsICJpbmRleCIsICJlZGl0Q2F0ZWdvcmllcyIsICJtYXJrZWRMYWJlbCIsICJfdGhpcyIsICJtYXJrZWRMYWJlbFRpdGxlIiwgIm9yaWdpblRleHQiLCAic3RhcnR0aW1lc3RhbXAiLCAidGltZXN0YW1wIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAicGFnZXMiLCAicGFnZSIsICJyZXZpc2lvbnMiLCAiY29udGVudCIsICJzb3VyY2VjYXQiLCAidGFyZ2VSZWdFeHAiLCAidGVzdCIsICJzdW1tYXJ5IiwgInNvdXJjZUNhdFJlZ0V4cCIsICJ0b2tlbiIsICJ0YWdzIiwgImFzc2VydCIsICJib3QiLCAiYmFzZXRpbWVzdGFtcCIsICJnZXRDb250ZW50IiwgIm1ldGEiLCAidGl0bGVzIiwgInByb3AiLCAicnZwcm9wIiwgImdldFRpdGxlRnJvbUxpbmsiLCAiaHJlZiIsICJfZGVjb2RlVVJJQ29tcG9uZW50JG0iLCAiX2RlY29kZVVSSUNvbXBvbmVudCRtMiIsICJkZWNvZGVVUklDb21wb25lbnQiLCAibWF0Y2giLCAiZ2V0TWFya2VkTGFiZWxzIiwgIm1hcmtlZExhYmVscyIsICJlYWNoIiwgImxhYmVsIiwgIiRsYWJlbCIsICIkbGFiZWxMaW5rIiwgImF0dHIiLCAic2hvd1Byb2dyZXNzIiwgImRpYWxvZyIsICJkaWFsb2dDbGFzcyIsICJtaW5IZWlnaHQiLCAiaGVpZ2h0IiwgIndpZHRoIiwgIm1vZGFsIiwgImNsb3NlT25Fc2NhcGUiLCAiZHJhZ2dhYmxlIiwgInJlc2l6YWJsZSIsICJoaWRlIiwgImRvU29tZXRoaW5nIiwgIm5vdGlmeSIsICJ0YWciLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiYWRkSGVyZSIsICJjb3B5SGVyZSIsICJtb3ZlSGVyZSIsICJjcmVhdGVDYXRMaW5rcyIsICJzeW1ib2wiLCAiY2F0ZWdvcmllcyIsICJzb3J0IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIiR0ciIsICJkYXRhc2V0IiwgImNsb3Nlc3QiLCAiZGF0YSIsICJzaG93Q2F0ZWdvcnlMaXN0IiwgIl90aGlzJCRjb250YWluZXIkd2lkdCIsICJfJCR3aWR0aCIsICJjdXJyZW50Q2F0ZWdvcmllcyIsICJlbXB0eSIsICJNYXRoIiwgIm1pbiIsICJnZXRQYXJlbnRDYXRzIiwgIl9wYWdlcyQiLCAicXVlcnkiLCAibWlzc2luZyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJnZXRTdWJDYXRzIiwgImxpc3QiLCAiY210eXBlIiwgImNtbGltaXQiLCAiY210aXRsZSIsICJfcmVzdWx0JHF1ZXJ5IiwgImNhdHMiLCAiY2F0ZWdvcnltZW1iZXJzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImdldENhdGVnb3J5TGlzdCIsICJmaW5kQWxsTGFiZWxzIiwgImFkZCIsICIkcGFnZXMiLCAibWFrZUNsaWNrYWJsZSIsICJvbkNhdEFMb3RTaGlmdENsaWNrIiwgImhhc0NsYXNzIiwgImFsc29SZXNpemUiLCAiaGFuZGxlcyIsICJyZXNpemUiLCAiXyRjdXJyZW50VGFyZ2V0JGhlaWdoIiwgIiRjdXJyZW50VGFyZ2V0IiwgImxlZnQiLCAidG9wIiwgIm1heEhlaWdodCIsICJvZmYiLCAiZ2V0Qm9keSIsICJleHRlbmRKUXVlcnlQcm90b3R5cGUiLCAiZm4iLCAicHJldkNoZWNrYm94IiwgImN0cmxLZXkiLCAicHJldmVudERlZmF1bHQiLCAicGFyZW50cyIsICJyZW1vdmVDbGFzcyIsICIkdGhpc0NvbnRyb2wiLCAidGFyZ2V0IiwgInNoaWZ0S2V5IiwgIm1ldGhvZCIsICJtYXgiXQp9Cg==

})();

/* </nowiki> */
