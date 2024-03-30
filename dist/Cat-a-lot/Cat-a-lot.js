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
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/Cat-a-lot/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("Cat-a-lot/".concat(version));
//! src/Cat-a-lot/modules/core.tsx
var import_ext_gadget3 = require("ext.gadget.Util");
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
  if (wgNamespaceNumber === -1 && wgCanonicalSpecialPageName === "Search" || wgNamespaceNumber === targetNamespace) {
    if (wgNamespaceNumber === -1) {
      CAL.isSearchMode = true;
    }
    /*! Cat-a-lot messages | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
    setMessages();
    void (0, import_ext_gadget3.getBody)().then(($body) => {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NhdC1hLWxvdC9vcHRpb25zLmpzb24iLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9DYXQtYS1sb3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvY29yZS50c3giLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlLnRzIiwgInNyYy9DYXQtYS1sb3QvQ2F0LWEtbG90LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiYXBpVGFnXCI6IFwiQ2F0LWEtbG90XCIsXG5cdFwidGFyZ2V0TmFtZXNwYWNlXCI6IDE0LFxuXHRcInZlcnNpb25cIjogXCI2LjBcIlxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IHR5cGUge1NldHRpbmd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWNhdF9hX2xvdCc7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tY29udGFpbmVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEE6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9fZGF0YWA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1Q6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19jYXRlZ29yeS1saXN0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT046IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1fX2FjdGlvbmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH0tLW5vLWZvdW5kYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfV9fbWFyay1jb3VudGVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlYXJjaC1pbnB1dC1jb250YWluZXJfX2lucHV0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlbGVjdGlvbnNgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfV9fYWxsYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9X19ub25lYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9faGVhZGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTks6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9X19saW5rYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9LS1lbmFibGVkYDtcbmNvbnN0IENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1jdXJyZW50X2NvdW50ZXJgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDSzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tZmVlZGJhY2tgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0ZFRURCQUNLfS0tZG9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1sYWJlbGA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMX0RPTkU6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1kb25lYDtcbmNvbnN0IENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLWxhc3Qtc2VsZWN0ZWRgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLXNlbGVjdGVkYDtcblxuY29uc3QgREVGQVVMVF9TRVRUSU5HOiBTZXR0aW5nID0ge1xuXHRkb2NsZWFudXA6IHtcblx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHRsYWJlbF9pMThuOiAnZG9jbGVhbnVwcHJlZicsXG5cdH0sXG5cdGVkaXRwYWdlczoge1xuXHRcdGRlZmF1bHQ6IHRydWUsXG5cdFx0bGFiZWxfaTE4bjogJ2VkaXRwYWdlc3ByZWYnLFxuXHR9LFxuXHRtaW5vcjoge1xuXHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdGxhYmVsX2kxOG46ICdtaW5vcnByZWYnLFxuXHR9LFxuXHRzdWJjYXRjb3VudDoge1xuXHRcdGRlZmF1bHQ6IDUwLFxuXHRcdGxhYmVsX2kxOG46ICdzdWJjYXRjb3VudHByZWYnLFxuXHR9LFxuXHR3YXRjaGxpc3Q6IHtcblx0XHRkZWZhdWx0OiAncHJlZmVyZW5jZXMnLFxuXHRcdGxhYmVsX2kxOG46ICd3YXRjaGxpc3RwcmVmJyxcblx0XHRzZWxlY3RfaTE4bjoge1xuXHRcdFx0d2F0Y2hfbm9jaGFuZ2U6ICdub2NoYW5nZScsXG5cdFx0XHR3YXRjaF9wcmVmOiAncHJlZmVyZW5jZXMnLFxuXHRcdFx0d2F0Y2hfdW53YXRjaDogJ3Vud2F0Y2gnLFxuXHRcdFx0d2F0Y2hfd2F0Y2g6ICd3YXRjaCcsXG5cdFx0fSxcblx0fSxcbn07XG5cbmNvbnN0IFZBUklBTlRTOiBzdHJpbmdbXSA9IFsnemgtaGFucycsICd6aC1oYW50JywgJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04sXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCxcblx0Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIsXG5cdENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQsXG5cdENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQsXG5cdERFRkFVTFRfU0VUVElORyxcblx0VkFSSUFOVFMsXG59O1xuIiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgREVGQVVMVF9NRVNTQUdFUyA9IHtcblx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICd7e1BMVVJBTDokMXxPbmUgZmlsZXwkMSBmaWxlc319IHNlbGVjdGVkLicsXG5cdC8vIEFjdGlvbnNcblx0J2NhdC1hLWxvdC1jb3B5JzogJ0NvcHknLFxuXHQnY2F0LWEtbG90LW1vdmUnOiAnTW92ZScsXG5cdCdjYXQtYS1sb3QtYWRkJzogJ0FkZCcsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ1JlbW92ZSBmcm9tIHRoaXMgY2F0ZWdvcnknLFxuXHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAnRW50ZXIgY2F0ZWdvcnkgbmFtZScsXG5cdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ1NlbGVjdCcsXG5cdCdjYXQtYS1sb3QtYWxsJzogJ2FsbCcsXG5cdCdjYXQtYS1sb3Qtbm9uZSc6ICdub25lJyxcblx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ05vIGZpbGVzIHNlbGVjdGVkIScsXG5cdC8vIFByZWZlcmVuY2VzXG5cdCdjYXQtYS1sb3Qtd2F0Y2hsaXN0cHJlZic6ICdXYXRjaGxpc3QgcHJlZmVyZW5jZSBjb25jZXJuaW5nIGZpbGVzIGVkaXRlZCB3aXRoIENhdC1BLUxvdCcsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICdBY2NvcmRpbmcgdG8geW91ciBnZW5lcmFsIHByZWZlcmVuY2VzJyxcblx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICdEbyBub3QgY2hhbmdlIHdhdGNoc3RhdHVzJyxcblx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICdXYXRjaCBwYWdlcyBlZGl0ZWQgd2l0aCBDYXQtQS1Mb3QnLFxuXHQnY2F0LWEtbG90LXdhdGNoX3Vud2F0Y2gnOiAnUmVtb3ZlIHBhZ2VzIHdoaWxlIGVkaXRpbmcgd2l0aCBDYXQtQS1Mb3QgZnJvbSB5b3VyIHdhdGNobGlzdCcsXG5cdCdjYXQtYS1sb3QtbWlub3JwcmVmJzpcblx0XHRcIk1hcmsgZWRpdHMgYXMgbWlub3IgKGlmIHlvdSBnZW5lcmFsbHkgbWFyayB5b3VyIGVkaXRzIGFzIG1pbm9yLCB0aGlzIHdvbid0IGNoYW5nZSBhbnl0aGluZylcIixcblx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ0FsbG93IGNhdGVnb3Jpc2luZyBwYWdlcyAoaW5jbHVkaW5nIGNhdGVnb3JpZXMpIHRoYXQgYXJlIG5vdCBmaWxlcycsXG5cdCdjYXQtYS1sb3QtZG9jbGVhbnVwcHJlZic6ICdSZW1vdmUge3tDaGVjayBjYXRlZ29yaWVzfX0gYW5kIG90aGVyIG1pbm9yIGNsZWFudXAnLFxuXHQnY2F0LWEtbG90LXN1YmNhdGNvdW50cHJlZic6ICdTdWItY2F0ZWdvcmllcyB0byBzaG93IGF0IG1vc3QnLFxuXHQvLyBQcm9ncmVzc1xuXHQnY2F0LWEtbG90LWxvYWRpbmcnOiAnTG9hZGluZy4uLicsXG5cdCdjYXQtYS1sb3QtZWRpdGluZyc6ICdFZGl0aW5nIHBhZ2UnLFxuXHQnY2F0LWEtbG90LW9mJzogJ29mICcsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5Jzpcblx0XHQnVGhlIGZvbGxvd2luZyB7e1BMVVJBTDokMXxwYWdlIHdhc3wkMSBwYWdlcyB3ZXJlfX0gc2tpcHBlZCwgYmVjYXVzZSB0aGUgcGFnZSB3YXMgYWxyZWFkeSBpbiB0aGUgY2F0ZWdvcnk6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLW5vdC1mb3VuZCc6XG5cdFx0J1RoZSBmb2xsb3dpbmcge3tQTFVSQUw6JDF8cGFnZSB3YXN8JDEgcGFnZXMgd2VyZX19IHNraXBwZWQsIGJlY2F1c2UgdGhlIG9sZCBjYXRlZ29yeSBjb3VsZCBub3QgYmUgZm91bmQ6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLXNlcnZlcic6XG5cdFx0XCJUaGUgZm9sbG93aW5nIHt7UExVUkFMOiQxfHBhZ2V8JDEgcGFnZXN9fSBjb3VsZG4ndCBiZSBjaGFuZ2VkLCBzaW5jZSB0aGVyZSB3ZXJlIHByb2JsZW1zIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlcjpcIixcblx0J2NhdC1hLWxvdC1hbGwtZG9uZSc6ICdBbGwgcGFnZXMgYXJlIHByb2Nlc3NlZC4nLFxuXHQnY2F0LWEtbG90LWRvbmUnOiAnRG9uZSEnLFxuXHQnY2F0LWEtbG90LWFkZGVkLWNhdCc6ICdBZGRlZCBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICdDb3BpZWQgdG8gY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LW1vdmVkLWNhdCc6ICdNb3ZlZCB0byBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAnUmVtb3ZlZCBmcm9tIGNhdGVnb3J5ICQxJyxcblx0J2NhdC1hLWxvdC1yZXR1cm4tdG8tcGFnZSc6ICdSZXR1cm4gdG8gcGFnZScsXG5cdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICdDYXRlZ29yeSBub3QgZm91bmQuJyxcblx0Ly8gU3VtbWFyaWVzOlxuXHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IEFkZGluZyBbW0NhdGVnb3J5OiQxXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktY29weSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBDb3B5aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dIHRvIFtbQ2F0ZWdvcnk6JDJdXScsXG5cdCdjYXQtYS1sb3Qtc3VtbWFyeS1tb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IE1vdmluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXSB0byBbW0NhdGVnb3J5OiQyXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IFJlbW92aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dJyxcbn0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXG5jb25zdCBzZXRNZXNzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0LyohIENhdC1hLWxvdCBtZXNzYWdlcyB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRpZiAod2dVc2VyTGFuZ3VhZ2UgPT09ICdlbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0PHR5cGVvZiBERUZBVUxUX01FU1NBR0VTPih7XG5cdFx0XHQvLyBhcyBpbiAxNyBmaWxlcyBzZWxlY3RlZFxuXHRcdFx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICckMeWAi+aWh+S7tuW3sumBuOaThycsXG5cdFx0XHQvLyBBY3Rpb25zXG5cdFx0XHQnY2F0LWEtbG90LWNvcHknOiAn6KSH6KO9Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZSc6ICfnp7vli5UnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGQnOiAn5aKe5YqgJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ+W+nuatpOWIhumhnuenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAn6Ly45YWl5YiG6aGe5ZCN56ixJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ+mBuOaThycsXG5cdFx0XHQnY2F0LWEtbG90LWFsbCc6ICflhajpg6gnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lJzogJ+eEoScsXG5cdFx0XHQnY2F0LWEtbG90LW5vbmUtc2VsZWN0ZWQnOiAn5rKS5pyJ6YG45pOH5paH5Lu277yBJyxcblx0XHRcdC8vIFByZWZlcmVuY2VzXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAn5L2/55SoQ2F0LUEtTG9057eo6Lyv5paH5Lu25pmC55qE55uj6KaW5YiX6KGo6YG46aCFJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICfoiIfns7vntbHlj4PmlbjoqK3nva7nm7jlkIwnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICfkuI3opoHmm7TmlLnnm6Poppbni4DmhYsnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICfnm6Poppbkvb/nlKhDYXQtQS1Mb3Tnt6jovK/nmoTpoIHpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ+Wwh+S9v+eUqENhdC1BLUxvdOe3qOi8r+eahOmggemdouW+nuebo+imluWIl+ihqOenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XHRcdCflsIfnt6jovK/mqJnoqJjniLLlsI/kv67mlLnvvIjoi6XmgqjlnKjns7vntbHlj4PmlbjoqK3nva7kuK3lt7LoqK3nva7lsIfmiYDmnInnt6jovK/mqJnoqJjniLLlsI/kv67mlLnvvIzmraTpgbjpoIXkuI3mnIPlsI3nj77mnInooYzniLLpgLLooYzmlLnli5XvvIknLFxuXHRcdFx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ+WFgeioseWwjeS4jeaYr+aWh+S7tueahOmggemdouWSjOWtkOWIhumhnumAsuihjOWIhumhnuaTjeS9nCcsXG5cdFx0XHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAn56e76Zmke3tDaGVjayBjYXRlZ29yaWVzfX3kuKbpgLLooYzlhbbku5bntLDnr4DmuIXnkIYnLFxuXHRcdFx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAn5pyA5aSa6aGv56S655qE5a2Q5YiG6aGe5pW46YePJyxcblx0XHRcdC8vIFByb2dyZXNzXG5cdFx0XHQnY2F0LWEtbG90LWxvYWRpbmcnOiAn5q2j5Zyo5Yqg6LyJ4oCm4oCmJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdGluZyc6ICfmraPlnKjnt6jovK/poIHpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC1vZic6ICfvvIzlhbHmnIknLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLWFscmVhZHknOiAn5Lul5LiL6aCB6Z2i5bey6Lez6YGO77yM5Zug54iy6aCB6Z2i5bey57aT5Zyo5YiG6aGe5Lit77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOiAn5Lul5LiL6aCB6Z2i5bey6Lez6YGO77yM5Zug54iy5om+5LiN5Yiw54++5pyJ5YiG6aGe77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOiAn5Lul5LiL6aCB6Z2i54Sh5rOV57eo6Lyv77yM5Zug54iy6YCj5o6l5pyN5YuZ5Zmo5Ye66Yyv77yaJyxcblx0XHRcdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAn5YWo6YOo6aCB6Z2i5bey6JmV55CG44CCJyxcblx0XHRcdCdjYXQtYS1sb3QtZG9uZSc6ICflt7LlrozmiJDvvIEnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAn5bey5Yqg5YWl5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICflt7LopIfoo73liLDliIbpoZ4nLFxuXHRcdFx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAn5bey56e75YuV5Yiw5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAn5bey5b6e5YiG6aGe56e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAn6L+U5Zue5Yiw6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICfmib7kuI3liLDliIbpoZ7jgIInLFxuXHRcdFx0Ly8gU3VtbWFyaWVzXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliqDlhaXliIbpoZ5bW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhumhnumWk+ikh+ijve+8muW+nltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5YiG6aGe6ZaT56e75YuV77ya5b6eW1tDYXRlZ29yeTokMV1d5YiwW1tDYXRlZ29yeTokMl1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1yZW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muW+nuWIhumhnuenu+mZpO+8mltbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0PHR5cGVvZiBERUZBVUxUX01FU1NBR0VTPih7XG5cdFx0XHQvLyBhcyBpbiAxNyBmaWxlcyBzZWxlY3RlZFxuXHRcdFx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICflt7LpgInmi6kkMeS4qumhtemdouaIluaWh+S7ticsXG5cdFx0XHQvLyBBY3Rpb25zXG5cdFx0XHQnY2F0LWEtbG90LWNvcHknOiAn5aSN5Yi2Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZSc6ICfnp7vliqgnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGQnOiAn5aKe5YqgJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ+S7juatpOWIhuexu+enu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAn6L6T5YWl5YiG57G75ZCN56ewJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ+mAieaLqScsXG5cdFx0XHQnY2F0LWEtbG90LWFsbCc6ICflhajpg6gnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lJzogJ+aXoCcsXG5cdFx0XHQnY2F0LWEtbG90LW5vbmUtc2VsZWN0ZWQnOiAn5rKh5pyJ6YCJ5oup5Lu75L2V6aG16Z2i5oiW5paH5Lu277yBJyxcblx0XHRcdC8vIFByZWZlcmVuY2VzXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAn5L2/55SoQ2F0LWEtbG9057yW6L6R5paH5Lu25pe255qE55uR6KeG5YiX6KGo6YCJ6aG5Jyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICfkuI7ns7vnu5/lj4LmlbDorr7nva7nm7jlkIwnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICfkuI3opoHmm7TmlLnnm5Hop4bnirbmgIEnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICfnm5Hop4bkvb/nlKhDYXQtYS1sb3TnvJbovpHnmoTpobXpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ+WwhuS9v+eUqENhdC1hLWxvdOe8lui+keeahOmhtemdouS7juebkeinhuWIl+ihqOenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XHRcdCflsIbnvJbovpHmoIforrDkuLrlsI/kv67mlLnvvIjoi6XmgqjlnKjns7vnu5/lj4LmlbDorr7nva7kuK3lt7Lorr7nva7lsIbmiYDmnInnvJbovpHmoIforrDkuLrlsI/kv67mlLnvvIzmraTpgInpobnkuI3kvJrlr7nnjrDmnInooYzkuLrov5vooYzmlLnliqjvvIknLFxuXHRcdFx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ+WFgeiuuOWvueS4jeaYr+aWh+S7tueahOmhtemdouWSjOWtkOWIhuexu+i/m+ihjOWIhuexu+aTjeS9nCcsXG5cdFx0XHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAn56e76Zmke3tDaGVjayBjYXRlZ29yaWVzfX3lubbov5vooYzlhbbku5bnu4boioLmuIXnkIYnLFxuXHRcdFx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAn5pyA5aSa5pi+56S655qE5a2Q5YiG57G75pWw6YePJyxcblx0XHRcdC8vIFByb2dyZXNzXG5cdFx0XHQnY2F0LWEtbG90LWxvYWRpbmcnOiAn5q2j5Zyo5Yqg6L294oCm4oCmJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdGluZyc6ICfmraPlnKjnvJbovpHpobXpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC1vZic6ICfvvIzlhbHmnIknLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLWFscmVhZHknOiAn5Lul5LiL6aG16Z2i5bey6Lez6L+H77yM5Zug5Li66aG16Z2i5bey57uP5Zyo5YiG57G75Lit77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOiAn5Lul5LiL6aG16Z2i5bey6Lez6L+H77yM5Zug5Li65om+5LiN5Yiw546w5pyJ5YiG57G777yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOiAn5Lul5LiL6aG16Z2i5peg5rOV57yW6L6R77yM5Zug5Li66L+e5o6l5pyN5Yqh5Zmo5Ye66ZSZ77yaJyxcblx0XHRcdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAn5YWo6YOo6aG16Z2i5bey5aSE55CG44CCJyxcblx0XHRcdCdjYXQtYS1sb3QtZG9uZSc6ICflt7LlrozmiJDvvIEnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAn5bey5Yqg5YWl5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICflt7LlpI3liLbliLDliIbnsbsnLFxuXHRcdFx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAn5bey56e75Yqo5Yiw5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAn5bey5LuO5YiG57G756e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAn6L+U5Zue5Yiw6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICfmib7kuI3liLDliIbnsbvjgIInLFxuXHRcdFx0Ly8gU3VtbWFyaWVzXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliqDlhaXliIbnsbtbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhuexu+mXtOWkjeWItu+8muS7jltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5YiG57G76Ze056e75Yqo77ya5LuOW1tDYXRlZ29yeTokMV1d5YiwW1tDYXRlZ29yeTokMl1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1yZW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muS7juWIhuexu+enu+mZpO+8mltbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7REVGQVVMVF9NRVNTQUdFUywgc2V0TWVzc2FnZXN9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIG1lZGlhd2lraS9jbGFzcy1kb2MgKi9cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04sXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCxcblx0Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIsXG5cdENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVELFxuXHRERUZBVUxUX1NFVFRJTkcsXG5cdFZBUklBTlRTLFxufSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7REVGQVVMVF9NRVNTQUdFUywgc2V0TWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuaW1wb3J0IHR5cGUge01lc3NhZ2VLZXksIFNldHRpbmd9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMsIHdnTmFtZXNwYWNlSWRzLCB3Z05hbWVzcGFjZU51bWJlciwgd2dUaXRsZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8qKlxuICogQ2hhbmdlcyBjYXRlZ29yeSBvZiBtdWx0aXBsZSBmaWxlc1xuICovXG5jb25zdCBjYXRBTG90ID0gKCk6IHZvaWQgPT4ge1xuXHQvKiEgQ2F0LWEtbG90IHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG5cdGNsYXNzIENBTCB7XG5cdFx0cHVibGljIHN0YXRpYyBpc1NlYXJjaE1vZGUgPSBmYWxzZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1FU1NBR0VTOiBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPiA9IERFRkFVTFRfTUVTU0FHRVM7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TRVRUSU5HOiBTZXR0aW5nID0gREVGQVVMVF9TRVRUSU5HO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQVBJX1RBRzogc3RyaW5nID0gT1BUSU9OUy5hcGlUYWc7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEFSR0VUX05BTUVTUEFDRTogbnVtYmVyID0gT1BUSU9OUy50YXJnZXROYW1lc3BhY2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBDVVJSRU5UX0NBVEVHUk9ZOiBzdHJpbmcgPSB3Z1RpdGxlO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgd2dGb3JtYXR0ZWROYW1lc3BhY2VzOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0gd2dGb3JtYXR0ZWROYW1lc3BhY2VzO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHdnTmFtZXNwYWNlSWRzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0gd2dOYW1lc3BhY2VJZHM7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBpc0F1dG9Db21wbGV0ZUluaXQgPSBmYWxzZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIGFwaSA9IGFwaTtcblxuXHRcdHByaXZhdGUgc3RhdGljIGFscmVhZHlUaGVyZTogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBjb25uZWN0aW9uRXJyb3I6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbm90Rm91bmQ6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY291bnRlckN1cnJlbnQgPSAwO1xuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJOZWVkZWQgPSAwO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgY291bnRlckNhdCA9IDA7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY3VycmVudENhdGVnb3J5ID0gJyc7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBkaWFsb2dIZWlnaHQgPSA0NTA7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZWRpdFRva2VuID0gJyc7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbG9jYWxDYXROYW1lID0gd2dGb3JtYXR0ZWROYW1lc3BhY2VzW0NBTC5UQVJHRVRfTkFNRVNQQUNFXSBhcyBzdHJpbmc7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBwYXJlbnRDYXRzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIHN1YkNhdHM6IHN0cmluZ1tdID0gW107XG5cblx0XHRwcml2YXRlIHN0YXRpYyBzZXR0aW5nczogTm9uTnVsbGFibGU8dHlwZW9mIHdpbmRvdy5DYXRBTG90UHJlZnM+ID0ge307XG5cdFx0cHJpdmF0ZSBzdGF0aWMgdmFyaWFudENhY2hlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblxuXHRcdHByaXZhdGUgc3RhdGljICRjb3VudGVyOiBKUXVlcnkgPSAkKCk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgJHByb2dyZXNzRGlhbG9nOiBKUXVlcnkgPSAkKCk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgJGxhYmVsczogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRzZWxlY3RlZExhYmVsczogSlF1ZXJ5ID0gJCgpO1xuXG5cdFx0cHJpdmF0ZSByZWFkb25seSAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkY29udGFpbmVyOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkZGF0YUNvbnRhaW5lcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJG1hcmtDb3VudGVyOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkcmVzdWx0TGlzdDogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJHNlYXJjaElucHV0OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD47XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkaGVhZDogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGxpbms6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD47XG5cblx0XHRwdWJsaWMgY29uc3RydWN0b3IoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSB7XG5cdFx0XHRpZiAoIW13Lm1zZygnY2F0LWEtbG90LWxvYWRpbmcnKSkge1xuXHRcdFx0XHRtdy5tZXNzYWdlcy5zZXQoQ0FMLk1FU1NBR0VTKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kYm9keSA9ICRib2R5O1xuXHRcdFx0Q0FMLmluaXRTZXR0aW5ncygpO1xuXG5cdFx0XHRjb25zdCBjb250YWluZXIgPSAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRSwgQ0xBU1NfTkFNRV9DT05UQUlORVIsICdub3ByaW50J119PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUn0gLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9IC8+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVH1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17Q0FMLm1zZygnZW50ZXItbmFtZScpfVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Q0FMLmlzU2VhcmNoTW9kZSA/IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VhcmNoJykgPz8gJycgOiAnJ31cblx0XHRcdFx0XHRcdFx0XHRvbktleURvd249eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpIGFzIEpRdWVyeTxIVE1MSW5wdXRFbGVtZW50Pjtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgY2F0OiBzdHJpbmcgPSAkZWxlbWVudC52YWwoKT8udHJpbSgpID8/ICcnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2F0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKGNhdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfT5cblx0XHRcdFx0XHRcdFx0e1tDQUwubXNnKCdzZWxlY3QnKSwgJyAnXX1cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19BTEx9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwodHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdhbGwnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHR7JyDigKIgJ31cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlQWxsKGZhbHNlKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ25vbmUnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9PlxuXHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9PkNhdC1hLWxvdDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLiRjb250YWluZXIgPSAkKGNvbnRhaW5lcikgYXMgSlF1ZXJ5O1xuXHRcdFx0dGhpcy4kY29udGFpbmVyLmFwcGVuZFRvKHRoaXMuJGJvZHkpO1xuXG5cdFx0XHR0aGlzLiRkYXRhQ29udGFpbmVyID0gdGhpcy4kY29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9YCk7XG5cdFx0XHR0aGlzLiRtYXJrQ291bnRlciA9IHRoaXMuJGRhdGFDb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVJ9YCk7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0ID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9YCk7XG5cdFx0XHR0aGlzLiRzZWFyY2hJbnB1dCA9IHRoaXMuJGRhdGFDb250YWluZXIuZmluZDxIVE1MSW5wdXRFbGVtZW50Pihcblx0XHRcdFx0YC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVH1gXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLiRoZWFkID0gdGhpcy4kY29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9YCk7XG5cdFx0XHR0aGlzLiRsaW5rID0gdGhpcy4kaGVhZC5maW5kPEhUTUxBbmNob3JFbGVtZW50PihgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LfWApO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBidWlsZEVsZW1lbnRzKCk6IHZvaWQge1xuXHRcdFx0Y29uc3QgcmVnZXhDYXQ6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF5cXFxccyoke0NBTC5sb2NhbGl6ZWRSZWdleChDQUwuVEFSR0VUX05BTUVTUEFDRSwgJ0NhdGVnb3J5Jyl9OmAsICcnKTtcblxuXHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQub24oJ2lucHV0IGtleXVwJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0IHtjdXJyZW50VGFyZ2V0fSA9IGV2ZW50O1xuXHRcdFx0XHRjb25zdCB7dmFsdWU6IG9sZFZhbH0gPSBjdXJyZW50VGFyZ2V0O1xuXHRcdFx0XHRjb25zdCBuZXdWYWw6IHN0cmluZyA9IG9sZFZhbC5yZXBsYWNlKHJlZ2V4Q2F0LCAnJyk7XG5cdFx0XHRcdGlmIChuZXdWYWwgIT09IG9sZFZhbCkge1xuXHRcdFx0XHRcdGN1cnJlbnRUYXJnZXQudmFsdWUgPSBuZXdWYWw7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRjb25zdCBpbml0QXV0b2NvbXBsZXRlID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRpZiAoQ0FMLmlzQXV0b0NvbXBsZXRlSW5pdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRDQUwuaXNBdXRvQ29tcGxldGVJbml0ID0gdHJ1ZTtcblxuXHRcdFx0XHR0aGlzLiRzZWFyY2hJbnB1dC5hdXRvY29tcGxldGUoe1xuXHRcdFx0XHRcdHNvdXJjZTogKHJlcXVlc3Q6IHt0ZXJtOiBzdHJpbmd9LCByZXNwb25zZTogKGFyZzogSlF1ZXJ5PHN0cmluZz4pID0+IHZvaWQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiAnb3BlbnNlYXJjaCcsXG5cdFx0XHRcdFx0XHRcdFx0bmFtZXNwYWNlOiBDQUwuVEFSR0VUX05BTUVTUEFDRSxcblx0XHRcdFx0XHRcdFx0XHRyZWRpcmVjdHM6ICdyZXNvbHZlJyxcblx0XHRcdFx0XHRcdFx0XHRzZWFyY2g6IHJlcXVlc3QudGVybSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChyZXN1bHRbMV0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJlc3BvbnNlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkKHJlc3VsdFsxXSkubWFwKChfaW5kZXgsIGl0ZW06IHN0cmluZyk6IHN0cmluZyA9PiBpdGVtLnJlcGxhY2UocmVnZXhDYXQsICcnKSlcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cG9zaXRpb246IHtcblx0XHRcdFx0XHRcdG15OiAncmlnaHQgYm90dG9tJyxcblx0XHRcdFx0XHRcdGF0OiAncmlnaHQgdG9wJyxcblx0XHRcdFx0XHRcdG9mOiB0aGlzLiRzZWFyY2hJbnB1dCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGFwcGVuZFRvOiBgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJ9YCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0dGhpcy4kbGluay5vbignY2xpY2snLCAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0JChldmVudC5jdXJyZW50VGFyZ2V0KS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCk7XG5cdFx0XHRcdGluaXRBdXRvY29tcGxldGUoKTtcblx0XHRcdFx0dGhpcy5ydW4oKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGluaXRTZXR0aW5ncygpOiB2b2lkIHtcblx0XHRcdGxldCBjYXRBTG90UHJlZnM6IHR5cGVvZiBDQUwuc2V0dGluZ3MgPSB3aW5kb3cuQ2F0QUxvdFByZWZzID8/IHt9O1xuXHRcdFx0Y29uc3QgdHlwZU9mQ2F0QUxvdFByZWZzID0gdHlwZW9mIGNhdEFMb3RQcmVmcztcblx0XHRcdGlmICgodHlwZU9mQ2F0QUxvdFByZWZzID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShjYXRBTG90UHJlZnMpKSB8fCB0eXBlT2ZDYXRBTG90UHJlZnMgIT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGNhdEFMb3RQcmVmcyA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IHNldHRpbmdLZXkgb2YgT2JqZWN0LmtleXMoQ0FMLkRFRkFVTFRfU0VUVElORykgYXMgKGtleW9mIFNldHRpbmcpW10pIHtcblx0XHRcdFx0Y29uc3Qgc2V0dGluZyA9IENBTC5ERUZBVUxUX1NFVFRJTkdbc2V0dGluZ0tleV07XG5cblx0XHRcdFx0Q0FMLnNldHRpbmdzW3NldHRpbmdLZXldID0gY2F0QUxvdFByZWZzW3NldHRpbmdLZXldID8/IHNldHRpbmcuZGVmYXVsdDtcblxuXHRcdFx0XHRpZiAoIXNldHRpbmcuc2VsZWN0X2kxOG4pIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNldHRpbmcuc2VsZWN0ID0ge307XG5cdFx0XHRcdGZvciAoY29uc3QgbWVzc2FnZUtleSBvZiBPYmplY3Qua2V5cyhzZXR0aW5nLnNlbGVjdF9pMThuKSkge1xuXHRcdFx0XHRcdGNvbnN0IG1lc3NhZ2U6IHN0cmluZyA9IHNldHRpbmcuc2VsZWN0X2kxOG5bbWVzc2FnZUtleV0gYXMga2V5b2YgdHlwZW9mIHNldHRpbmcuc2VsZWN0X2kxOG47XG5cdFx0XHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdFx0XHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0XHRcdHNldHRpbmcuc2VsZWN0W0NBTC5tc2cobWVzc2FnZUtleSBhcyBuZXZlcildID0gbWVzc2FnZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIG1zZyhrZXk6IE1lc3NhZ2VLZXkgZXh0ZW5kcyBgY2F0LWEtbG90LSR7aW5mZXIgUH1gID8gUCA6IG5ldmVyLCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyB7XG5cdFx0XHRjb25zdCBmdWxsS2V5OiBzdHJpbmcgPSBgY2F0LWEtbG90LSR7a2V5fWA7XG5cdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0cmV0dXJuIGFyZ3MubGVuZ3RoID8gbXcubWVzc2FnZShmdWxsS2V5LCAuLi5hcmdzKS5wYXJzZSgpIDogbXcubWVzc2FnZShmdWxsS2V5KS5wbGFpbigpO1xuXHRcdH1cblx0XHRwcml2YXRlIHN0YXRpYyBsb2NhbGl6ZWRSZWdleChuYW1lc3BhY2VOdW1iZXI6IG51bWJlciwgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0XHQvLyBDb3BpZWQgZnJvbSBIb3RDYXQsIHRoYW5rcyBMdXBvLlxuXHRcdFx0Y29uc3Qgd2lraVRleHRCbGFuazogc3RyaW5nID1cblx0XHRcdFx0J1tcXFxcdCBfXFxcXHhBMFxcXFx1MTY4MFxcXFx1MTgwRVxcXFx1MjAwMC1cXFxcdTIwMEFcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTIwMkZcXFxcdTIwNUZcXFxcdTMwMDBdKyc7XG5cdFx0XHRjb25zdCB3aWtpVGV4dEJsYW5rUkU6IFJlZ0V4cCA9IG5ldyBSZWdFeHAod2lraVRleHRCbGFuaywgJ2cnKTtcblx0XHRcdGNvbnN0IGNyZWF0ZVJlZ2V4U3RyID0gKG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdGlmICghbmFtZT8ubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCByZWdleE5hbWU6IHN0cmluZyA9ICcnO1xuXHRcdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbmFtZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGNvbnN0IGluaXRpYWw6IHN0cmluZyA9IG5hbWUuc2xpY2UoaSwgaSArIDEpO1xuXHRcdFx0XHRcdGNvbnN0IGxsOiBzdHJpbmcgPSBpbml0aWFsLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0Y29uc3QgdWw6IHN0cmluZyA9IGluaXRpYWwudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0XHRyZWdleE5hbWUgKz0gbGwgPT09IHVsID8gaW5pdGlhbCA6IGBbJHtsbH0ke3VsfV1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZWdleE5hbWUucmVwbGFjZSgvKFskKCkqKy4/XFxcXF5dKS9nLCAnXFxcXCQxJykucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsIHdpa2lUZXh0QmxhbmspO1xuXHRcdFx0fTtcblx0XHRcdGZhbGxiYWNrID0gZmFsbGJhY2sudG9Mb3dlckNhc2UoKTtcblx0XHRcdGNvbnN0IGNhbm9uaWNhbDogc3RyaW5nIHwgdW5kZWZpbmVkID0gQ0FMLndnRm9ybWF0dGVkTmFtZXNwYWNlc1tuYW1lc3BhY2VOdW1iZXJdPy50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0bGV0IHJlZ2V4U3RyaW5nOiBzdHJpbmcgPSBjcmVhdGVSZWdleFN0cihjYW5vbmljYWwpO1xuXHRcdFx0aWYgKGZhbGxiYWNrICYmIGNhbm9uaWNhbCAhPT0gZmFsbGJhY2spIHtcblx0XHRcdFx0cmVnZXhTdHJpbmcgKz0gYHwke2NyZWF0ZVJlZ2V4U3RyKGZhbGxiYWNrKX1gO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBjYXROYW1lIG9mIE9iamVjdC5rZXlzKENBTC53Z05hbWVzcGFjZUlkcykpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGNhdE5hbWUudG9Mb3dlckNhc2UoKSAhPT0gY2Fub25pY2FsICYmXG5cdFx0XHRcdFx0Y2F0TmFtZS50b0xvd2VyQ2FzZSgpICE9PSBmYWxsYmFjayAmJlxuXHRcdFx0XHRcdENBTC53Z05hbWVzcGFjZUlkc1tjYXROYW1lXSA9PT0gbmFtZXNwYWNlTnVtYmVyXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJlZ2V4U3RyaW5nICs9IGB8JHtjcmVhdGVSZWdleFN0cihjYXROYW1lKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYCg/OiR7cmVnZXhTdHJpbmd9KWA7XG5cdFx0fVxuXHRcdHByaXZhdGUgdXBkYXRlU2VsZWN0aW9uQ291bnRlcigpOiB2b2lkIHtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMgPSBDQUwuJGxhYmVscy5maWx0ZXIoYC4ke0NMQVNTX05BTUVfTEFCRUxfU0VMRUNURUR9YCk7XG5cdFx0XHR0aGlzLiRtYXJrQ291bnRlci5zaG93KCkuaHRtbChDQUwubXNnKCdmaWxlcy1zZWxlY3RlZCcsIENBTC4kc2VsZWN0ZWRMYWJlbHMubGVuZ3RoLnRvU3RyaW5nKCkpKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSB0b2dnbGVBbGwoc2VsZWN0OiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRDQUwuJGxhYmVscy50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVELCBzZWxlY3QpO1xuXHRcdFx0dGhpcy51cGRhdGVTZWxlY3Rpb25Db3VudGVyKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgYXN5bmMgZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG5cdFx0XHRpZiAoQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gYXMgc3RyaW5nW107XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0ZXh0OiBjYXRlZ29yeSxcblx0XHRcdFx0dGl0bGU6ICd0ZW1wJyxcblx0XHRcdH07XG5cdFx0XHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgVkFSSUFOVFMpIHtcblx0XHRcdFx0Y29uc3Qge3BhcnNlfSA9IGF3YWl0IENBTC5hcGkucG9zdCh7XG5cdFx0XHRcdFx0Li4ucGFyYW1zLFxuXHRcdFx0XHRcdHZhcmlhbnQsXG5cdFx0XHRcdH0gYXMgY29uc3QpO1xuXHRcdFx0XHRjb25zdCB7dGV4dH0gPSBwYXJzZTtcblx0XHRcdFx0cmVzdWx0c1tyZXN1bHRzLmxlbmd0aF0gPSAkKHRleHQpLmVxKDApLnRleHQoKS50cmltKCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBEZS1kdXBsaWNhdGVcblx0XHRcdENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldID0gWy4uLm5ldyBTZXQocmVzdWx0cyldO1xuXHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgYXN5bmMgcmVnZXhCdWlsZGVyKGNhdGVnb3J5OiBzdHJpbmcpOiBQcm9taXNlPFJlZ0V4cD4ge1xuXHRcdFx0Ly8gQnVpbGQgYSByZWdleHAgc3RyaW5nIGZvciBtYXRjaGluZyB0aGUgZ2l2ZW4gY2F0ZWdvcnk6XG5cdFx0XHRjb25zdCBjYXROYW1lOiBzdHJpbmcgPSBDQUwubG9jYWxpemVkUmVnZXgoQ0FMLlRBUkdFVF9OQU1FU1BBQ0UsICdDYXRlZ29yeScpO1xuXHRcdFx0Ly8gdHJpbSBsZWFkaW5nL3RyYWlsaW5nIHdoaXRlc3BhY2UgYW5kIHVuZGVyc2NvcmVzXG5cdFx0XHRjYXRlZ29yeSA9IGNhdGVnb3J5LnJlcGxhY2UoL15bXFxzX10rLywgJycpLnJlcGxhY2UoL1tcXHNfXSskLywgJycpO1xuXHRcdFx0Ly8gRmluZCBhbGwgdmFyaWFudHNcblx0XHRcdGNvbnN0IHZhcmlhbnRzOiBzdHJpbmdbXSA9IGF3YWl0IENBTC5maW5kQWxsVmFyaWFudHMoY2F0ZWdvcnkpO1xuXHRcdFx0Ly8gZXNjYXBlIHJlZ2V4cCBtZXRhY2hhcmFjdGVycyAoPSBhbnkgQVNDSUkgcHVuY3R1YXRpb24gZXhjZXB0IF8pXG5cdFx0XHRjb25zdCB2YXJpYW50UmVnRXhwczogc3RyaW5nW10gPSBbXTtcblx0XHRcdGZvciAobGV0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcblx0XHRcdFx0dmFyaWFudCA9IG13LnV0aWwuZXNjYXBlUmVnRXhwKHZhcmlhbnQpO1xuXHRcdFx0XHQvLyBhbnkgc2VxdWVuY2Ugb2Ygc3BhY2VzIGFuZCB1bmRlcnNjb3JlcyBzaG91bGQgbWF0Y2ggYW55IG90aGVyXG5cdFx0XHRcdHZhcmlhbnQgPSB2YXJpYW50LnJlcGxhY2UoL1tcXHNfXSsvZywgJ1tcXFxcc19dKycpO1xuXHRcdFx0XHQvLyBNYWtlIHRoZSBmaXJzdCBjaGFyYWN0ZXIgY2FzZS1pbnNlbnNpdGl2ZTpcblx0XHRcdFx0Y29uc3QgZmlyc3Q6IHN0cmluZyA9IHZhcmlhbnQuc2xpY2UoMCwgMSk7XG5cdFx0XHRcdGlmIChmaXJzdC50b1VwcGVyQ2FzZSgpICE9PSBmaXJzdC50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRcdFx0dmFyaWFudCA9IGBbJHtmaXJzdC50b1VwcGVyQ2FzZSgpfSR7Zmlyc3QudG9Mb3dlckNhc2UoKX1dJHt2YXJpYW50LnNsaWNlKDEpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyaWFudFJlZ0V4cHNbdmFyaWFudFJlZ0V4cHMubGVuZ3RoXSA9IHZhcmlhbnQ7XG5cdFx0XHR9XG5cdFx0XHQvLyBDb21waWxlIGl0IGludG8gYSBSZWdFeHAgdGhhdCBtYXRjaGVzIE1lZGlhV2lraSBjYXRlZ29yeSBzeW50YXggKHllYWgsIGl0IGxvb2tzIHVnbHkpOlxuXHRcdFx0Ly8gWFhYOiB0aGUgZmlyc3QgY2FwdHVyaW5nIHBhcmVucyBhcmUgYXNzdW1lZCB0byBtYXRjaCB0aGUgc29ydGtleSwgaWYgcHJlc2VudCwgaW5jbHVkaW5nIHRoZSB8IGJ1dCBleGNsdWRpbmcgdGhlIF1dXG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFtbXFxcXHNfXSoke2NhdE5hbWV9W1xcXFxzX10qOltcXFxcc19dKig/OiR7dmFyaWFudFJlZ0V4cHMuam9pbihcblx0XHRcdFx0XHQnfCdcblx0XHRcdFx0KX0pW1xcXFxzX10qKFxcXFx8W15cXFxcXV0qKD86XFxcXF1bXlxcXFxdXSspKik/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvQVBJQ2FsbChcblx0XHRcdF9wYXJhbXM6XG5cdFx0XHRcdHwgT21pdDxBcGlFZGl0UGFnZVBhcmFtcywgJ2Zvcm1hdCc+XG5cdFx0XHRcdHwgT21pdDxBcGlPcGVuU2VhcmNoUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaVF1ZXJ5Q2F0ZWdvcnlNZW1iZXJzUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaVF1ZXJ5VG9rZW5zUGFyYW1zLCAnZm9ybWF0Jz4sXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0Y2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWRcblx0XHQpIHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IF9wYXJhbXMgYXMgdHlwZW9mIF9wYXJhbXMgJiB7XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nO1xuXHRcdFx0XHR0aXRsZT86IHN0cmluZztcblx0XHRcdH07XG5cdFx0XHRwYXJhbXNbJ2Zvcm1hdCddID0gJ2pzb24nO1xuXHRcdFx0cGFyYW1zWydmb3JtYXR2ZXJzaW9uJ10gPSAnMic7XG5cdFx0XHRsZXQgaTogbnVtYmVyID0gMDtcblx0XHRcdGNvbnN0IGRvQ2FsbCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3I6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdG13LmxvZy5lcnJvcignW0NhdC1hLWxvdF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdFx0aWYgKGkgPCA0KSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGRvQ2FsbCwgMzAwKTtcblx0XHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBhcmFtc1sndGl0bGUnXSkge1xuXHRcdFx0XHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvcltDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aF0gPSBwYXJhbXNbJ3RpdGxlJ107XG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdENBTC5hcGkucG9zdChwYXJhbXMpLnRoZW4oY2FsbGJhY2spLmNhdGNoKGhhbmRsZUVycm9yKTtcblx0XHRcdH07XG5cdFx0XHRkb0NhbGwoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBtYXJrQXNEb25lKFxuXHRcdFx0JG1hcmtlZExhYmVsOiBKUXVlcnksXG5cdFx0XHR0YXJnZXRDYXRlZ29yeTogc3RyaW5nLFxuXHRcdFx0bW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZScgfCAncmVtb3ZlJ1xuXHRcdCk6IHZvaWQge1xuXHRcdFx0JG1hcmtlZExhYmVsLmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUxfRE9ORSk7XG5cblx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHRjYXNlICdhZGQnOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FkZGVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NvcHknOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2NvcGllZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtb3ZlJzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdtb3ZlZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZW1vdmUnOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ3JlbW92ZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZG9DbGVhbnVwKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0XHRyZXR1cm4gQ0FMLnNldHRpbmdzLmRvY2xlYW51cCA/IHRleHQucmVwbGFjZSgve3tcXHMqW0NjXWhlY2sgY2F0ZWdvcmllc1xccyooXFx8Py4qPyl9fS8sICcnKSA6IHRleHQ7XG5cdFx0fSAvLyBSZW1vdmUge3tVbmNhdGVnb3JpemVkfX0gKGFsc28gd2l0aCBjb21tZW50KS4gTm8gbmVlZCB0byByZXBsYWNlIGl0IHdpdGggYW55dGhpbmdcblx0XHRwcml2YXRlIHN0YXRpYyByZW1vdmVVbmNhdCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdFx0cmV0dXJuIHRleHQucmVwbGFjZSgvXFx7XFx7XFxzKltVdV1uY2F0ZWdvcml6ZWRcXHMqKFxcfD8uKj8pXFx9XFx9LywgJycpO1xuXHRcdH1cblx0XHRwcml2YXRlIGRpc3BsYXlSZXN1bHQoKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcyh7XG5cdFx0XHRcdGN1cnNvcjogJycsXG5cdFx0XHRcdG92ZXJmbG93OiAnJyxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0ZFRURCQUNLfWApLmFkZENsYXNzKENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSk7XG5cblx0XHRcdGNvbnN0ICRwYXJlbnQ6IEpRdWVyeSA9IENBTC4kY291bnRlci5wYXJlbnQoKTtcblx0XHRcdCRwYXJlbnQuaHRtbCg8aDM+e0NBTC5tc2coJ2RvbmUnKX08L2gzPik7XG5cdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHR7Q0FMLm1zZygnYWxsLWRvbmUnKX1cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXG5cdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0PGFcblx0XHRcdFx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRDQUwuJHByb2dyZXNzRGlhbG9nLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwoZmFsc2UpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7Q0FMLm1zZygncmV0dXJuLXRvLXBhZ2UnKX1cblx0XHRcdFx0PC9hPlxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKENBTC5hbHJlYWR5VGhlcmUubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtYWxyZWFkeScsIENBTC5hbHJlYWR5VGhlcmUubGVuZ3RoLnRvU3RyaW5nKCkpfTwvaDU+XG5cdFx0XHRcdFx0XHR7Q0FMLmFscmVhZHlUaGVyZS5yZWR1Y2U8KHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXT4oXG5cdFx0XHRcdFx0XHRcdChwcmUsIGN1ciwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aCAtIDEgPyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl0gOiBbLi4ucHJlLCBjdXJdLFxuXHRcdFx0XHRcdFx0XHRbXVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGlmIChDQUwubm90Rm91bmQubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtbm90LWZvdW5kJywgQ0FMLm5vdEZvdW5kLmxlbmd0aC50b1N0cmluZygpKX08L2g1PlxuXHRcdFx0XHRcdFx0e0NBTC5ub3RGb3VuZC5yZWR1Y2U8KHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXT4oXG5cdFx0XHRcdFx0XHRcdChwcmUsIGN1ciwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBDQUwubm90Rm91bmQubGVuZ3RoIC0gMSA/IFsuLi5wcmUsIGN1ciwgPGJyIGtleT17aW5kZXh9IC8+XSA6IFsuLi5wcmUsIGN1cl0sXG5cdFx0XHRcdFx0XHRcdFtdXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtc2VydmVyJywgQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGgudG9TdHJpbmcoKSl9PC9oNT5cblx0XHRcdFx0XHRcdHtDQUwuY29ubmVjdGlvbkVycm9yLnJlZHVjZTwoc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50KVtdPihcblx0XHRcdFx0XHRcdFx0KHByZSwgY3VyLCBpbmRleCkgPT5cblx0XHRcdFx0XHRcdFx0XHRpbmRleCA8IENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XHRcdFx0PyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl1cblx0XHRcdFx0XHRcdFx0XHRcdDogWy4uLnByZSwgY3VyXSxcblx0XHRcdFx0XHRcdFx0W11cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgdXBkYXRlQ291bnRlcigpOiB2b2lkIHtcblx0XHRcdENBTC5jb3VudGVyQ3VycmVudCsrO1xuXHRcdFx0aWYgKENBTC5jb3VudGVyQ3VycmVudCA+IENBTC5jb3VudGVyTmVlZGVkKSB7XG5cdFx0XHRcdHRoaXMuZGlzcGxheVJlc3VsdCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Q0FMLiRjb3VudGVyLnRleHQoQ0FMLmNvdW50ZXJDdXJyZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBhc3luYyBlZGl0Q2F0ZWdvcmllcyhcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRyZXN1bHQ6IFJlY29yZDxzdHJpbmcsIGFueT4sXG5cdFx0XHRtYXJrZWRMYWJlbDogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+WzBdLFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnIHwgJ3JlbW92ZSdcblx0XHQpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRcdGNvbnN0IFttYXJrZWRMYWJlbFRpdGxlLCAkbWFya2VkTGFiZWxdID0gbWFya2VkTGFiZWw7XG5cblx0XHRcdGlmICghcmVzdWx0Py5bJ3F1ZXJ5J10pIHtcblx0XHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvcltDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aF0gPSBtYXJrZWRMYWJlbFRpdGxlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgb3JpZ2luVGV4dDogc3RyaW5nID0gJyc7XG5cdFx0XHRsZXQgc3RhcnR0aW1lc3RhbXA6IG51bWJlciA9IDA7XG5cdFx0XHRsZXQgdGltZXN0YW1wOiBudW1iZXIgPSAwO1xuXHRcdFx0Q0FMLmVkaXRUb2tlbiA9IHJlc3VsdFsncXVlcnknXS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0Y29uc3Qge3BhZ2VzfSA9IHJlc3VsdFsncXVlcnknXTtcblxuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcGFnZXM7XG5cdFx0XHRvcmlnaW5UZXh0ID0gcGFnZS5yZXZpc2lvbnNbMF0uY29udGVudDtcblx0XHRcdCh7c3RhcnR0aW1lc3RhbXB9ID0gcGFnZSk7XG5cdFx0XHRbe3RpbWVzdGFtcH1dID0gcGFnZS5yZXZpc2lvbnM7XG5cblx0XHRcdGNvbnN0IHNvdXJjZWNhdDogc3RyaW5nID0gQ0FMLkNVUlJFTlRfQ0FURUdST1k7XG5cdFx0XHQvLyBDaGVjayBpZiB0aGF0IGZpbGUgaXMgYWxyZWFkeSBpbiB0aGF0IGNhdGVnb3J5XG5cdFx0XHRjb25zdCB0YXJnZVJlZ0V4cCA9IGF3YWl0IENBTC5yZWdleEJ1aWxkZXIodGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0aWYgKG1vZGUgIT09ICdyZW1vdmUnICYmIHRhcmdlUmVnRXhwLnRlc3Qob3JpZ2luVGV4dCkgJiYgbW9kZSAhPT0gJ21vdmUnKSB7XG5cdFx0XHRcdENBTC5hbHJlYWR5VGhlcmVbQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGhdID0gbWFya2VkTGFiZWxUaXRsZTtcblx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRml4IHRleHRcblx0XHRcdGxldCB0ZXh0OiBzdHJpbmcgPSBvcmlnaW5UZXh0O1xuXHRcdFx0bGV0IHN1bW1hcnk6IHN0cmluZztcblx0XHRcdGNvbnN0IHNvdXJjZUNhdFJlZ0V4cCA9IGF3YWl0IENBTC5yZWdleEJ1aWxkZXIoc291cmNlY2F0KTtcblx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHRjYXNlICdhZGQnOlxuXHRcdFx0XHRcdHRleHQgKz0gYFxcbltbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fV1dXFxuYDtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1hZGQnKS5yZXBsYWNlKCckMScsIHRhcmdldENhdGVnb3J5KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY29weSc6XG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShcblx0XHRcdFx0XHRcdHNvdXJjZUNhdFJlZ0V4cCxcblx0XHRcdFx0XHRcdGBbWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHtzb3VyY2VjYXR9JDFdXVxcbltbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fSQxXV1gXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1jb3B5JykucmVwbGFjZSgnJDEnLCBzb3VyY2VjYXQpLnJlcGxhY2UoJyQyJywgdGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdC8vIElmIGNhdGVnb3J5IGlzIGFkZGVkIHRocm91Z2ggdGVtcGxhdGU6XG5cdFx0XHRcdFx0aWYgKG9yaWdpblRleHQgPT09IHRleHQpIHtcblx0XHRcdFx0XHRcdHRleHQgKz0gYFxcbltbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fV1dYDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21vdmUnOlxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2Uoc291cmNlQ2F0UmVnRXhwLCBgW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9JDFdXWApO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LW1vdmUnKS5yZXBsYWNlKCckMScsIHNvdXJjZWNhdCkucmVwbGFjZSgnJDInLCB0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JlbW92ZSc6XG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShzb3VyY2VDYXRSZWdFeHAsICcnKTtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1yZW1vdmUnKS5yZXBsYWNlKCckMScsIHNvdXJjZWNhdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0ZXh0ID09PSBvcmlnaW5UZXh0KSB7XG5cdFx0XHRcdENBTC5ub3RGb3VuZFtDQUwubm90Rm91bmQubGVuZ3RoXSA9IG1hcmtlZExhYmVsVGl0bGU7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSB1bmNhdCBhZnRlciB3ZSBjaGVja2VkIHdoZXRoZXIgd2UgY2hhbmdlZCB0aGUgdGV4dCBzdWNjZXNzZnVsbHkuXG5cdFx0XHQvLyBPdGhlcndpc2Ugd2UgbWlnaHQgZmFpbCB0byBkbyB0aGUgY2hhbmdlcywgYnV0IHN0aWxsIHJlcGxhY2Uge3t1bmNhdH19XG5cdFx0XHRpZiAobW9kZSAhPT0gJ3JlbW92ZScpIHtcblx0XHRcdFx0dGV4dCA9IENBTC5kb0NsZWFudXAoQ0FMLnJlbW92ZVVuY2F0KHRleHQpKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHR0b2tlbjogQ0FMLmVkaXRUb2tlbixcblx0XHRcdFx0XHR0YWdzOiBDQUwuQVBJX1RBRyxcblx0XHRcdFx0XHR0aXRsZTogbWFya2VkTGFiZWxUaXRsZSxcblx0XHRcdFx0XHRhc3NlcnQ6ICd1c2VyJyxcblx0XHRcdFx0XHRib3Q6IHRydWUsXG5cdFx0XHRcdFx0YmFzZXRpbWVzdGFtcDogdGltZXN0YW1wIGFzIHVua25vd24gYXMgc3RyaW5nLFxuXHRcdFx0XHRcdHdhdGNobGlzdDogQ0FMLnNldHRpbmdzLndhdGNobGlzdCBhcyBuZXZlcixcblx0XHRcdFx0XHR0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0c3RhcnR0aW1lc3RhbXA6IHN0YXJ0dGltZXN0YW1wIGFzIHVua25vd24gYXMgc3RyaW5nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHRcdENBTC5tYXJrQXNEb25lKCRtYXJrZWRMYWJlbCwgdGFyZ2V0Q2F0ZWdvcnksIG1vZGUpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldENvbnRlbnQoXG5cdFx0XHRtYXJrZWRMYWJlbDogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+WzBdLFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnXG5cdFx0KTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0XHR0aXRsZXM6IG1hcmtlZExhYmVsWzBdLFxuXHRcdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnRcblx0XHRcdFx0XHR2b2lkIHRoaXMuZWRpdENhdGVnb3JpZXMocmVzdWx0LCBtYXJrZWRMYWJlbCwgdGFyZ2V0Q2F0ZWdvcnksIG1vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRwcml2YXRlIHN0YXRpYyBnZXRUaXRsZUZyb21MaW5rKGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXR1cm4gKGRlY29kZVVSSUNvbXBvbmVudChocmVmID8/ICcnKS5tYXRjaCgvd2lraVxcLyguKz8pKD86Iy4rKT8kLyk/LlsxXSA/PyAnJykucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRNYXJrZWRMYWJlbHMoKTogW3N0cmluZywgSlF1ZXJ5XVtdIHtcblx0XHRcdGNvbnN0IG1hcmtlZExhYmVsczogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+ID0gW107XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzID0gQ0FMLiRsYWJlbHMuZmlsdGVyKGAuJHtDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEfWApO1xuXHRcdFx0Q0FMLiRzZWxlY3RlZExhYmVscy5lYWNoKChfaW5kZXgsIGxhYmVsKTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0ICRsYWJlbDogSlF1ZXJ5ID0gJChsYWJlbCk7XG5cdFx0XHRcdGNvbnN0ICRsYWJlbExpbms6IEpRdWVyeSA9ICRsYWJlbC5maW5kKCdhW3RpdGxlXScpO1xuXHRcdFx0XHRjb25zdCB0aXRsZTogc3RyaW5nID1cblx0XHRcdFx0XHQkbGFiZWxMaW5rLmF0dHIoJ3RpdGxlJyk/LnRyaW0oKSB8fFxuXHRcdFx0XHRcdENBTC5nZXRUaXRsZUZyb21MaW5rKCRsYWJlbExpbmsuYXR0cignaHJlZicpKSB8fFxuXHRcdFx0XHRcdENBTC5nZXRUaXRsZUZyb21MaW5rKCRsYWJlbC5maW5kKCdhJykuYXR0cignaHJlZicpKTtcblx0XHRcdFx0bWFya2VkTGFiZWxzW21hcmtlZExhYmVscy5sZW5ndGhdID0gW3RpdGxlLCAkbGFiZWxdO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbWFya2VkTGFiZWxzO1xuXHRcdH1cblx0XHRwcml2YXRlIHNob3dQcm9ncmVzcygpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKHtcblx0XHRcdFx0Y3Vyc29yOiAnd2FpdCcsXG5cdFx0XHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0XHRcdH0pO1xuXHRcdFx0Q0FMLiRwcm9ncmVzc0RpYWxvZyA9ICQoXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ2VkaXRpbmcnKX1cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSfT57Q0FMLmNvdW50ZXJDdXJyZW50fTwvc3Bhbj5cblx0XHRcdFx0XHR7W0NBTC5tc2coJ29mJyksIENBTC5jb3VudGVyTmVlZGVkXX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpLmRpYWxvZyh7XG5cdFx0XHRcdGRpYWxvZ0NsYXNzOiBDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRcdFx0XHRtaW5IZWlnaHQ6IDkwLFxuXHRcdFx0XHRoZWlnaHQ6IDkwLFxuXHRcdFx0XHR3aWR0aDogNDUwLFxuXHRcdFx0XHRtb2RhbDogdHJ1ZSxcblx0XHRcdFx0Y2xvc2VPbkVzY2FwZTogZmFsc2UsXG5cdFx0XHRcdGRyYWdnYWJsZTogZmFsc2UsXG5cdFx0XHRcdHJlc2l6YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9GRUVEQkFDS30gLnVpLWRpYWxvZy10aXRsZWJhcmApLmhpZGUoKTtcblx0XHRcdHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9GRUVEQkFDS30gLnVpLWRpYWxvZy1jb250ZW50YCkuaGVpZ2h0KCdhdXRvJyk7XG5cdFx0XHRDQUwuJGNvdW50ZXIgPSB0aGlzLiRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSfWApO1xuXHRcdH1cblx0XHRwcml2YXRlIGRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5OiBzdHJpbmcsIG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnKTogdm9pZCB7XG5cdFx0XHRjb25zdCBtYXJrZWRMYWJlbHM6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPiA9IHRoaXMuZ2V0TWFya2VkTGFiZWxzKCk7XG5cdFx0XHRpZiAoIW1hcmtlZExhYmVscy5sZW5ndGgpIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoQ0FMLm1zZygnbm9uZS1zZWxlY3RlZCcpLCB7XG5cdFx0XHRcdFx0dGFnOiAnY2F0QUxvdCcsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRDQUwuYWxyZWFkeVRoZXJlID0gW107XG5cdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yID0gW107XG5cdFx0XHRDQUwubm90Rm91bmQgPSBbXTtcblx0XHRcdENBTC5jb3VudGVyQ3VycmVudCA9IDE7XG5cdFx0XHRDQUwuY291bnRlck5lZWRlZCA9IG1hcmtlZExhYmVscy5sZW5ndGg7XG5cdFx0XHR0aGlzLnNob3dQcm9ncmVzcygpO1xuXHRcdFx0Zm9yIChjb25zdCBtYXJrZWRMYWJlbCBvZiBtYXJrZWRMYWJlbHMpIHtcblx0XHRcdFx0dGhpcy5nZXRDb250ZW50KG1hcmtlZExhYmVsLCB0YXJnZXRDYXRlZ29yeSwgbW9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgYWRkSGVyZSh0YXJnZXRDYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5LCAnYWRkJyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgY29weUhlcmUodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeSwgJ2NvcHknKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBtb3ZlSGVyZSh0YXJnZXRDYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5LCAnbW92ZScpO1xuXHRcdH1cblx0XHRwcml2YXRlIGNyZWF0ZUNhdExpbmtzKHN5bWJvbDogc3RyaW5nLCBjYXRlZ29yaWVzOiBzdHJpbmdbXSk6IHZvaWQge1xuXHRcdFx0Y2F0ZWdvcmllcy5zb3J0KCk7XG5cdFx0XHRmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcblx0XHRcdFx0Y29uc3QgJHRyID0gJChcblx0XHRcdFx0XHQ8dHIgZGF0YXNldD17e2NhdGVnb3J5fX0+XG5cdFx0XHRcdFx0XHQ8dGQ+e3N5bWJvbH08L3RkPlxuXHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Y2F0ZWdvcnl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0KTtcblx0XHRcdFx0Ly8gQ2FuJ3QgbW92ZSB0byBzb3VyY2UgY2F0ZWdvcnlcblx0XHRcdFx0aWYgKGNhdGVnb3J5ICE9PSBDQUwuQ1VSUkVOVF9DQVRFR1JPWSAmJiBDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdFx0JHRyLmFwcGVuZChcblx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT059XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmFkZEhlcmUoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdhZGQnKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNhdGVnb3J5ICE9PSBDQUwuQ1VSUkVOVF9DQVRFR1JPWSAmJiAhQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRcdCR0ci5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTn1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuY29weUhlcmUoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdjb3B5Jyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTn1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMubW92ZUhlcmUoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdtb3ZlJyl9XG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmZpbmQoJ3RhYmxlJykuYXBwZW5kKCR0cik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgc2hvd0NhdGVnb3J5TGlzdCgpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnJyk7XG5cdFx0XHRjb25zdCBjdXJyZW50Q2F0ZWdvcmllczogc3RyaW5nW10gPSBbQ0FMLmN1cnJlbnRDYXRlZ29yeV07XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmVtcHR5KCk7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmFwcGVuZCg8dGFibGUgLz4pO1xuXHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaRJywgQ0FMLnBhcmVudENhdHMpO1xuXHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaSJywgY3VycmVudENhdGVnb3JpZXMpO1xuXHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaTJywgQ0FMLnN1YkNhdHMpO1xuXHRcdFx0Ly8gUmVzZXQgd2lkdGhcblx0XHRcdHRoaXMuJGNvbnRhaW5lci53aWR0aCgnJyk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIuaGVpZ2h0KCcnKTtcblx0XHRcdHRoaXMuJGNvbnRhaW5lci53aWR0aChNYXRoLm1pbigodGhpcy4kY29udGFpbmVyLndpZHRoKCkgPz8gMCkgKiAxLjEgKyAxNSwgKCQod2luZG93KS53aWR0aCgpID8/IDApIC0gMTApKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuY3NzKHtcblx0XHRcdFx0J21heC1oZWlnaHQnOiBgJHtDQUwuZGlhbG9nSGVpZ2h0fXB4YCxcblx0XHRcdFx0aGVpZ2h0OiAnJyxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldFBhcmVudENhdHMoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHR0aXRsZXM6IGBDYXRlZ29yeToke0NBTC5jdXJyZW50Q2F0ZWdvcnl9YCxcblx0XHRcdFx0XHRwcm9wOiAnY2F0ZWdvcmllcycsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDQUwucGFyZW50Q2F0cyA9IFtdO1xuXHRcdFx0XHRcdGNvbnN0IHtwYWdlc30gPSByZXN1bHQucXVlcnk7XG5cdFx0XHRcdFx0aWYgKHBhZ2VzWzBdPy5taXNzaW5nKSB7XG5cdFx0XHRcdFx0XHR0aGlzLiRib2R5LmNzcygnY3Vyc29yJywgJycpO1xuXHRcdFx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5odG1sKFxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORH0+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2NhdC1ub3QtZm91bmQnKX1cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkicsIFtDQUwuY3VycmVudENhdGVnb3J5XSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxldCBjYXRlZ29yaWVzOiB7dGl0bGU6IHN0cmluZ31bXSA9IFtdO1xuXHRcdFx0XHRcdFt7Y2F0ZWdvcmllc31dID0gcGFnZXM7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xuXHRcdFx0XHRcdFx0Q0FMLnBhcmVudENhdHNbQ0FMLnBhcmVudENhdHMubGVuZ3RoXSA9IGNhdC50aXRsZS5yZXBsYWNlKC9eW146XSs6LywgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDQUwuY291bnRlckNhdCsrO1xuXHRcdFx0XHRcdGlmIChDQUwuY291bnRlckNhdCA9PT0gMikge1xuXHRcdFx0XHRcdFx0dGhpcy5zaG93Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldFN1YkNhdHMoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRsaXN0OiAnY2F0ZWdvcnltZW1iZXJzJyxcblx0XHRcdFx0XHRjbXR5cGU6ICdzdWJjYXQnLFxuXHRcdFx0XHRcdGNtbGltaXQ6IENBTC5zZXR0aW5ncy5zdWJjYXRjb3VudCBhcyBuZXZlcixcblx0XHRcdFx0XHRjbXRpdGxlOiBgQ2F0ZWdvcnk6JHtDQUwuY3VycmVudENhdGVnb3J5fWAsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRjb25zdCBjYXRzOiB7dGl0bGU6IHN0cmluZ31bXSA9IHJlc3VsdD8ucXVlcnk/LmNhdGVnb3J5bWVtYmVycyB8fCBbXTtcblx0XHRcdFx0XHRDQUwuc3ViQ2F0cyA9IFtdO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgY2F0IG9mIGNhdHMpIHtcblx0XHRcdFx0XHRcdENBTC5zdWJDYXRzW0NBTC5zdWJDYXRzLmxlbmd0aF0gPSBjYXQudGl0bGUucmVwbGFjZSgvXlteOl0rOi8sICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Q0FMLmNvdW50ZXJDYXQrKztcblx0XHRcdFx0XHRpZiAoQ0FMLmNvdW50ZXJDYXQgPT09IDIpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2hvd0NhdGVnb3J5TGlzdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRDYXRlZ29yeUxpc3QoKTogdm9pZCB7XG5cdFx0XHRDQUwuY291bnRlckNhdCA9IDA7XG5cdFx0XHR0aGlzLmdldFBhcmVudENhdHMoKTtcblx0XHRcdHRoaXMuZ2V0U3ViQ2F0cygpO1xuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZUNhdHMoY2F0OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xuXHRcdFx0Q0FMLmN1cnJlbnRDYXRlZ29yeSA9IGNhdDtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuaHRtbCg8ZGl2PntDQUwubXNnKCdsb2FkaW5nJyl9PC9kaXY+KTtcblx0XHRcdHRoaXMuZ2V0Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBmaW5kQWxsTGFiZWxzKCk6IHZvaWQge1xuXHRcdFx0Ly8gSXQncyBwb3NzaWJsZSB0byBhbGxvdyBhbnkga2luZCBvZiBwYWdlcyBhcyB3ZWxsIGJ1dCB3aGF0IGhhcHBlbnMgaWYgeW91IGNsaWNrIG9uIFwic2VsZWN0IGFsbFwiIGFuZCBkb24ndCBleHBlY3QgaXRcblx0XHRcdGlmIChDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdENBTC4kbGFiZWxzID0gdGhpcy4kYm9keS5maW5kKCd0YWJsZS5zZWFyY2hSZXN1bHRJbWFnZScpLmZpbmQoJ3RyPnRkJykuZXEoMSk7XG5cdFx0XHRcdGlmIChDQUwuc2V0dGluZ3MuZWRpdHBhZ2VzKSB7XG5cdFx0XHRcdFx0Q0FMLiRsYWJlbHMgPSBDQUwuJGxhYmVscy5hZGQoJ2Rpdi5tdy1zZWFyY2gtcmVzdWx0LWhlYWRpbmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Q0FMLiRsYWJlbHMgPSB0aGlzLiRib2R5XG5cdFx0XHRcdFx0LmZpbmQoJ2Rpdi5nYWxsZXJ5dGV4dCcpXG5cdFx0XHRcdFx0LmFkZCh0aGlzLiRib2R5LmZpbmQoJ2RpdiNtdy1jYXRlZ29yeS1tZWRpYScpLmZpbmQoJ2xpW2NsYXNzIT1cImdhbGxlcnlib3hcIl0nKSk7XG5cdFx0XHRcdGlmIChDQUwuc2V0dGluZ3MuZWRpdHBhZ2VzKSB7XG5cdFx0XHRcdFx0Y29uc3QgJHBhZ2VzOiBKUXVlcnk8SFRNTExJRWxlbWVudD4gPSB0aGlzLiRib2R5XG5cdFx0XHRcdFx0XHQuZmluZCgnZGl2I213LXBhZ2VzLCBkaXYjbXctc3ViY2F0ZWdvcmllcycpXG5cdFx0XHRcdFx0XHQuZmluZCgnbGknKTtcblx0XHRcdFx0XHRDQUwuJGxhYmVscyA9IENBTC4kbGFiZWxzLmFkZCgkcGFnZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgbWFrZUNsaWNrYWJsZSgpOiB2b2lkIHtcblx0XHRcdHRoaXMuZmluZEFsbExhYmVscygpO1xuXHRcdFx0Q0FMLiRsYWJlbHMuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTCkub25DYXRBTG90U2hpZnRDbGljaygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHRoaXMudXBkYXRlU2VsZWN0aW9uQ291bnRlcigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBydW4oKTogdm9pZCB7XG5cdFx0XHRpZiAodGhpcy4kbGluay5oYXNDbGFzcyhDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCkpIHtcblx0XHRcdFx0dGhpcy5tYWtlQ2xpY2thYmxlKCk7XG5cdFx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIuc2hvdygpO1xuXHRcdFx0XHR0aGlzLiRjb250YWluZXIucmVzaXphYmxlKHtcblx0XHRcdFx0XHRhbHNvUmVzaXplOiB0aGlzLiRyZXN1bHRMaXN0LFxuXHRcdFx0XHRcdGhhbmRsZXM6ICduJyxcblx0XHRcdFx0XHRyZXNpemU6IChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgJGN1cnJlbnRUYXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0JGN1cnJlbnRUYXJnZXQuY3NzKHtcblx0XHRcdFx0XHRcdFx0bGVmdDogJycsXG5cdFx0XHRcdFx0XHRcdHRvcDogJycsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdENBTC5kaWFsb2dIZWlnaHQgPSAkY3VycmVudFRhcmdldC5oZWlnaHQoKSA/PyBDQUwuZGlhbG9nSGVpZ2h0O1xuXHRcdFx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRtYXhIZWlnaHQ6ICcnLFxuXHRcdFx0XHRcdFx0XHR3aWR0aDogJycsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5jc3MoJ21heC1oZWlnaHQnLCAnNDUwcHgnKTtcblx0XHRcdFx0aWYgKENBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoJ1BpY3R1cmVzIGFuZCBpbWFnZXMnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoQ0FMLkNVUlJFTlRfQ0FURUdST1kpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRkYXRhQ29udGFpbmVyLmhpZGUoKTtcblx0XHRcdFx0dGhpcy4kY29udGFpbmVyLnJlc2l6YWJsZSgnZGVzdHJveScpO1xuXHRcdFx0XHR0aGlzLiRjb250YWluZXIuY3NzKCd3aWR0aCcsICcnKTtcblx0XHRcdFx0Q0FMLiRsYWJlbHMub2ZmKCdjbGljay5jYXRBTG90Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKFxuXHRcdCh3Z05hbWVzcGFjZU51bWJlciA9PT0gLTEgJiYgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdTZWFyY2gnKSB8fFxuXHRcdHdnTmFtZXNwYWNlTnVtYmVyID09PSBPUFRJT05TLnRhcmdldE5hbWVzcGFjZVxuXHQpIHtcblx0XHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IC0xKSB7XG5cdFx0XHRDQUwuaXNTZWFyY2hNb2RlID0gdHJ1ZTtcblx0XHR9XG5cdFx0LyohIENhdC1hLWxvdCBtZXNzYWdlcyB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRcdHNldE1lc3NhZ2VzKCk7XG5cdFx0dm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0XHRuZXcgQ0FMKCRib2R5KS5idWlsZEVsZW1lbnRzKCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y2F0QUxvdH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBDYXQtYS1sb3QvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBtZWRpYXdpa2kvY2xhc3MtZG9jICovXG5pbXBvcnQge0NMQVNTX05BTUVfTEFCRUwsIENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCwgQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRH0gZnJvbSAnLi9jb25zdGFudCc7XG5cbnR5cGUgT25DYXRBTG90U2hpZnRDbGljayA9ICh0aGlzOiBKUXVlcnksIGNhbGxiYWNrOiAoKSA9PiB1bmtub3duKSA9PiBKUXVlcnk7XG5kZWNsYXJlIGdsb2JhbCB7XG5cdGludGVyZmFjZSBKUXVlcnkge1xuXHRcdG9uQ2F0QUxvdFNoaWZ0Q2xpY2s6IE9uQ2F0QUxvdFNoaWZ0Q2xpY2s7XG5cdH1cbn1cblxuY29uc3QgZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlID0gKCk6IHZvaWQgPT4ge1xuXHQvKiEgalF1ZXJ5IGNoZWNrYm94U2hpZnRDbGljayB8IEdQTC0yLjAgPGh0dHBzOi8vcXdiay5jYy9IOkdQTD4gKi9cblx0JC5mbi5leHRlbmQoe1xuXHRcdG9uQ2F0QUxvdFNoaWZ0Q2xpY2s6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0bGV0IHByZXZDaGVja2JveDogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXG5cdFx0XHQvLyBXaGVuIG91ciBib3hlcyBhcmUgY2xpY2tlZC4uXG5cdFx0XHR0aGlzLm9uKCdjbGljay5jYXRBTG90JywgKGV2ZW50OiBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0Ly8gUHJldmVudCBmb2xsb3dpbmcgdGhlIGxpbmsgYW5kIHRleHQgc2VsZWN0aW9uXG5cdFx0XHRcdGlmICghZXZlbnQuY3RybEtleSkge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBIaWdobGlnaHQgbGFzdCBzZWxlY3RlZFxuXHRcdFx0XHR0aGlzLnBhcmVudHMoJ2JvZHknKVxuXHRcdFx0XHRcdC5maW5kKGAuJHtDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUR9YClcblx0XHRcdFx0XHQucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEKTtcblxuXHRcdFx0XHRsZXQgJHRoaXNDb250cm9sID0gJChldmVudC50YXJnZXQpIGFzIEpRdWVyeTtcblx0XHRcdFx0aWYgKCEkdGhpc0NvbnRyb2wuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTCkpIHtcblx0XHRcdFx0XHQkdGhpc0NvbnRyb2wgPSAkdGhpc0NvbnRyb2wucGFyZW50cyhgLiR7Q0xBU1NfTkFNRV9MQUJFTH1gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCR0aGlzQ29udHJvbC5hZGRDbGFzcyhDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQpO1xuXG5cdFx0XHRcdC8vIEFuZCBvbmUgaGFzIGJlZW4gY2xpY2tlZCBiZWZvcmUuLi5cblx0XHRcdFx0aWYgKHByZXZDaGVja2JveCAmJiBldmVudC5zaGlmdEtleSkge1xuXHRcdFx0XHRcdGNvbnN0IG1ldGhvZDogJ2FkZENsYXNzJyB8ICdyZW1vdmVDbGFzcycgPSAkdGhpc0NvbnRyb2wuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRClcblx0XHRcdFx0XHRcdD8gJ2FkZENsYXNzJ1xuXHRcdFx0XHRcdFx0OiAncmVtb3ZlQ2xhc3MnO1xuXHRcdFx0XHRcdC8vIENoZWNrIG9yIHVuY2hlY2sgdGhpcyBvbmUgYW5kIGFsbCBpbi1iZXR3ZWVuIGNoZWNrYm94ZXNcblx0XHRcdFx0XHR0aGlzLnNsaWNlKFxuXHRcdFx0XHRcdFx0TWF0aC5taW4odGhpcy5pbmRleChwcmV2Q2hlY2tib3gpLCB0aGlzLmluZGV4KCR0aGlzQ29udHJvbCkpLFxuXHRcdFx0XHRcdFx0TWF0aC5tYXgodGhpcy5pbmRleChwcmV2Q2hlY2tib3gpLCB0aGlzLmluZGV4KCR0aGlzQ29udHJvbCkpICsgMVxuXHRcdFx0XHRcdClbbWV0aG9kXShDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBFaXRoZXIgd2F5LCB1cGRhdGUgdGhlIHByZXZDaGVja2JveCB2YXJpYWJsZSB0byB0aGUgb25lIGNsaWNrZWQgbm93XG5cdFx0XHRcdHByZXZDaGVja2JveCA9ICR0aGlzQ29udHJvbDtcblxuXHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gYXMgT25DYXRBTG90U2hpZnRDbGljayxcblx0fSk7XG59O1xuXG5leHBvcnQge2V4dGVuZEpRdWVyeVByb3RvdHlwZX07XG4iLCAiaW1wb3J0IHtjYXRBTG90fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2V4dGVuZEpRdWVyeVByb3RvdHlwZX0gZnJvbSAnLi9tb2R1bGVzL2V4dGVuZEpRdWVyeVByb3RvdHlwZSc7XG5cbi8qISBqUXVlcnkgY2hlY2tib3hTaGlmdENsaWNrIHwgR1BMLTIuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6R1BMPiAqL1xuZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlKCk7XG4vKiEgQ2F0LWEtbG90IHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG5jYXRBTG90KCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsU0FBVTtBQUNWLElBQUFDLGtCQUFtQjtBQUNuQixJQUFBQyxVQUFXOztBQ0FaLElBQU1DLGFBQXFCO0FBQzNCLElBQU1DLHVCQUFBLEdBQUFDLE9BQWtDRixZQUFVLFlBQUE7QUFDbEQsSUFBTUcsNEJBQUEsR0FBQUQsT0FBdUNELHNCQUFvQixRQUFBO0FBQ2pFLElBQU1HLDBDQUFB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RUFBRXRXLHlCQUF5QjtRQUNwQztBQUVBOFYsdUJBQWVLO0FBRWYsWUFBSSxPQUFPcEosYUFBYSxZQUFZO0FBQ25DQSxtQkFBUztRQUNWO01BQ0QsQ0FBQztBQUVELGFBQU87SUFDUjtFQUNELENBQUM7QUFDRjs7QUN0REE7QUFDQTRJLHNCQUFzQjtBQUN0QjtBQUNBdlQsUUFBUTsiLAogICJuYW1lcyI6IFsiYXBpVGFnIiwgInRhcmdldE5hbWVzcGFjZSIsICJ2ZXJzaW9uIiwgIkNMQVNTX05BTUUiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVIiLCAiY29uY2F0IiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEEiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04iLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX05PX0ZPVU5EIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlMiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOSyIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCIsICJDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUiIsICJDTEFTU19OQU1FX0ZFRURCQUNLIiwgIkNMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSIsICJDTEFTU19OQU1FX0xBQkVMIiwgIkNMQVNTX05BTUVfTEFCRUxfRE9ORSIsICJDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQiLCAiQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCIsICJERUZBVUxUX1NFVFRJTkciLCAiZG9jbGVhbnVwIiwgImRlZmF1bHQiLCAibGFiZWxfaTE4biIsICJlZGl0cGFnZXMiLCAibWlub3IiLCAic3ViY2F0Y291bnQiLCAid2F0Y2hsaXN0IiwgInNlbGVjdF9pMThuIiwgIndhdGNoX25vY2hhbmdlIiwgIndhdGNoX3ByZWYiLCAid2F0Y2hfdW53YXRjaCIsICJ3YXRjaF93YXRjaCIsICJWQVJJQU5UUyIsICJ3Z1VzZXJMYW5ndWFnZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIkRFRkFVTFRfTUVTU0FHRVMiLCAic2V0TWVzc2FnZXMiLCAiaW5jbHVkZXMiLCAibWVzc2FnZXMiLCAic2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dGb3JtYXR0ZWROYW1lc3BhY2VzIiwgIndnTmFtZXNwYWNlSWRzIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnVGl0bGUiLCAiY2F0QUxvdCIsICJDQUwiLCAiaXNTZWFyY2hNb2RlIiwgIk1FU1NBR0VTIiwgIkFQSV9UQUciLCAiVEFSR0VUX05BTUVTUEFDRSIsICJDVVJSRU5UX0NBVEVHUk9ZIiwgImlzQXV0b0NvbXBsZXRlSW5pdCIsICJhbHJlYWR5VGhlcmUiLCAiY29ubmVjdGlvbkVycm9yIiwgIm5vdEZvdW5kIiwgImNvdW50ZXJDdXJyZW50IiwgImNvdW50ZXJOZWVkZWQiLCAiY291bnRlckNhdCIsICJjdXJyZW50Q2F0ZWdvcnkiLCAiZGlhbG9nSGVpZ2h0IiwgImVkaXRUb2tlbiIsICJsb2NhbENhdE5hbWUiLCAicGFyZW50Q2F0cyIsICJzdWJDYXRzIiwgInNldHRpbmdzIiwgInZhcmlhbnRDYWNoZSIsICIkY291bnRlciIsICIkIiwgIiRwcm9ncmVzc0RpYWxvZyIsICIkbGFiZWxzIiwgIiRzZWxlY3RlZExhYmVscyIsICIkYm9keSIsICIkY29udGFpbmVyIiwgIiRkYXRhQ29udGFpbmVyIiwgIiRtYXJrQ291bnRlciIsICIkcmVzdWx0TGlzdCIsICIkc2VhcmNoSW5wdXQiLCAiJGhlYWQiLCAiJGxpbmsiLCAiY29uc3RydWN0b3IiLCAiX213JHV0aWwkZ2V0UGFyYW1WYWx1IiwgIm1zZyIsICJpbml0U2V0dGluZ3MiLCAiY29udGFpbmVyIiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInBsYWNlaG9sZGVyIiwgInR5cGUiLCAidmFsdWUiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIm9uS2V5RG93biIsICJldmVudCIsICIkZWxlbWVudCIsICJjdXJyZW50VGFyZ2V0IiwgImtleSIsICJfJGVsZW1lbnQkdmFsJHRyaW0iLCAiXyRlbGVtZW50JHZhbCIsICJjYXQiLCAidmFsIiwgInRyaW0iLCAidXBkYXRlQ2F0cyIsICJvbkNsaWNrIiwgInRvZ2dsZUFsbCIsICJhcHBlbmRUbyIsICJmaW5kIiwgImJ1aWxkRWxlbWVudHMiLCAicmVnZXhDYXQiLCAiUmVnRXhwIiwgImxvY2FsaXplZFJlZ2V4IiwgIm9uIiwgIm9sZFZhbCIsICJuZXdWYWwiLCAicmVwbGFjZSIsICJpbml0QXV0b2NvbXBsZXRlIiwgImF1dG9jb21wbGV0ZSIsICJzb3VyY2UiLCAicmVxdWVzdCIsICJyZXNwb25zZSIsICJkb0FQSUNhbGwiLCAiYWN0aW9uIiwgIm5hbWVzcGFjZSIsICJyZWRpcmVjdHMiLCAic2VhcmNoIiwgInRlcm0iLCAicmVzdWx0IiwgIm1hcCIsICJfaW5kZXgiLCAiaXRlbSIsICJwb3NpdGlvbiIsICJteSIsICJhdCIsICJvZiIsICJ0b2dnbGVDbGFzcyIsICJydW4iLCAiX3dpbmRvdyRDYXRBTG90UHJlZnMiLCAiY2F0QUxvdFByZWZzIiwgIndpbmRvdyIsICJDYXRBTG90UHJlZnMiLCAidHlwZU9mQ2F0QUxvdFByZWZzIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiX2kiLCAiX09iamVjdCRrZXlzIiwgIk9iamVjdCIsICJrZXlzIiwgImxlbmd0aCIsICJfY2F0QUxvdFByZWZzJHNldHRpbmciLCAic2V0dGluZ0tleSIsICJzZXR0aW5nIiwgInNlbGVjdCIsICJfaTIiLCAiX09iamVjdCRrZXlzMiIsICJtZXNzYWdlS2V5IiwgIm1lc3NhZ2UiLCAiYXJncyIsICJmdWxsS2V5IiwgInBhcnNlIiwgInBsYWluIiwgIm5hbWVzcGFjZU51bWJlciIsICJmYWxsYmFjayIsICJfQ0FMJHdnRm9ybWF0dGVkTmFtZXMiLCAid2lraVRleHRCbGFuayIsICJ3aWtpVGV4dEJsYW5rUkUiLCAiY3JlYXRlUmVnZXhTdHIiLCAibmFtZSIsICJyZWdleE5hbWUiLCAiaSIsICJpbml0aWFsIiwgInNsaWNlIiwgImxsIiwgInRvTG93ZXJDYXNlIiwgInVsIiwgInRvVXBwZXJDYXNlIiwgImNhbm9uaWNhbCIsICJyZWdleFN0cmluZyIsICJfaTMiLCAiX09iamVjdCRrZXlzMyIsICJjYXROYW1lIiwgInVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIiLCAiZmlsdGVyIiwgInNob3ciLCAiaHRtbCIsICJ0b1N0cmluZyIsICJmaW5kQWxsVmFyaWFudHMiLCAiY2F0ZWdvcnkiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicmVzdWx0cyIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGV4dCIsICJ0aXRsZSIsICJfaTQiLCAiX1ZBUklBTlRTIiwgInZhcmlhbnQiLCAicG9zdCIsICJlcSIsICJTZXQiLCAicmVnZXhCdWlsZGVyIiwgInZhcmlhbnRzIiwgInZhcmlhbnRSZWdFeHBzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgImVzY2FwZVJlZ0V4cCIsICJmaXJzdCIsICJlcnIiLCAiZSIsICJmIiwgImpvaW4iLCAiX3BhcmFtcyIsICJjYWxsYmFjayIsICJkb0NhbGwiLCAiaGFuZGxlRXJyb3IiLCAiZXJyb3IiLCAibG9nIiwgInNldFRpbWVvdXQiLCAidXBkYXRlQ291bnRlciIsICJ0aGVuIiwgImNhdGNoIiwgIm1hcmtBc0RvbmUiLCAiJG1hcmtlZExhYmVsIiwgInRhcmdldENhdGVnb3J5IiwgIm1vZGUiLCAiYWRkQ2xhc3MiLCAiYXBwZW5kIiwgIkZyYWdtZW50IiwgImRvQ2xlYW51cCIsICJyZW1vdmVVbmNhdCIsICJkaXNwbGF5UmVzdWx0IiwgImNzcyIsICJjdXJzb3IiLCAib3ZlcmZsb3ciLCAiJHBhcmVudCIsICJwYXJlbnQiLCAicmVtb3ZlIiwgInJlZHVjZSIsICJwcmUiLCAiY3VyIiwgImluZGV4IiwgImVkaXRDYXRlZ29yaWVzIiwgIm1hcmtlZExhYmVsIiwgIl90aGlzIiwgIm1hcmtlZExhYmVsVGl0bGUiLCAib3JpZ2luVGV4dCIsICJzdGFydHRpbWVzdGFtcCIsICJ0aW1lc3RhbXAiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJwYWdlcyIsICJwYWdlIiwgInJldmlzaW9ucyIsICJjb250ZW50IiwgInNvdXJjZWNhdCIsICJ0YXJnZVJlZ0V4cCIsICJ0ZXN0IiwgInN1bW1hcnkiLCAic291cmNlQ2F0UmVnRXhwIiwgInRva2VuIiwgInRhZ3MiLCAiYXNzZXJ0IiwgImJvdCIsICJiYXNldGltZXN0YW1wIiwgImdldENvbnRlbnQiLCAibWV0YSIsICJ0aXRsZXMiLCAicHJvcCIsICJydnByb3AiLCAiZ2V0VGl0bGVGcm9tTGluayIsICJocmVmIiwgIl9kZWNvZGVVUklDb21wb25lbnQkbSIsICJfZGVjb2RlVVJJQ29tcG9uZW50JG0yIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJtYXRjaCIsICJnZXRNYXJrZWRMYWJlbHMiLCAibWFya2VkTGFiZWxzIiwgImVhY2giLCAibGFiZWwiLCAiXyRsYWJlbExpbmskYXR0ciIsICIkbGFiZWwiLCAiJGxhYmVsTGluayIsICJhdHRyIiwgInNob3dQcm9ncmVzcyIsICJkaWFsb2ciLCAiZGlhbG9nQ2xhc3MiLCAibWluSGVpZ2h0IiwgImhlaWdodCIsICJ3aWR0aCIsICJtb2RhbCIsICJjbG9zZU9uRXNjYXBlIiwgImRyYWdnYWJsZSIsICJyZXNpemFibGUiLCAiaGlkZSIsICJkb1NvbWV0aGluZyIsICJub3RpZnkiLCAidGFnIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImFkZEhlcmUiLCAiY29weUhlcmUiLCAibW92ZUhlcmUiLCAiY3JlYXRlQ2F0TGlua3MiLCAic3ltYm9sIiwgImNhdGVnb3JpZXMiLCAic29ydCIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICIkdHIiLCAiZGF0YXNldCIsICJjbG9zZXN0IiwgImRhdGEiLCAic2hvd0NhdGVnb3J5TGlzdCIsICJfdGhpcyQkY29udGFpbmVyJHdpZHQiLCAiXyQkd2lkdGgiLCAiY3VycmVudENhdGVnb3JpZXMiLCAiZW1wdHkiLCAiTWF0aCIsICJtaW4iLCAiZ2V0UGFyZW50Q2F0cyIsICJfcGFnZXMkIiwgInF1ZXJ5IiwgIm1pc3NpbmciLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiZ2V0U3ViQ2F0cyIsICJsaXN0IiwgImNtdHlwZSIsICJjbWxpbWl0IiwgImNtdGl0bGUiLCAiX3Jlc3VsdCRxdWVyeSIsICJjYXRzIiwgImNhdGVnb3J5bWVtYmVycyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJnZXRDYXRlZ29yeUxpc3QiLCAiZmluZEFsbExhYmVscyIsICJhZGQiLCAiJHBhZ2VzIiwgIm1ha2VDbGlja2FibGUiLCAib25DYXRBTG90U2hpZnRDbGljayIsICJoYXNDbGFzcyIsICJhbHNvUmVzaXplIiwgImhhbmRsZXMiLCAicmVzaXplIiwgIl8kY3VycmVudFRhcmdldCRoZWlnaCIsICIkY3VycmVudFRhcmdldCIsICJsZWZ0IiwgInRvcCIsICJtYXhIZWlnaHQiLCAib2ZmIiwgImdldEJvZHkiLCAiZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlIiwgImZuIiwgImV4dGVuZCIsICJwcmV2Q2hlY2tib3giLCAiY3RybEtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJwYXJlbnRzIiwgInJlbW92ZUNsYXNzIiwgIiR0aGlzQ29udHJvbCIsICJ0YXJnZXQiLCAic2hpZnRLZXkiLCAibWV0aG9kIiwgIm1heCJdCn0K
