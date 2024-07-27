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
 * jQuery checkboxShiftClick
 * Copyright (C) Krinkle
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
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
    static MESSAGES = /* @__PURE__ */ (() => DEFAULT_MESSAGES)();
    static DEFAULT_SETTING = /* @__PURE__ */ (() => DEFAULT_SETTING)();
    static API_TAG = /* @__PURE__ */ (() => apiTag)();
    static TARGET_NAMESPACE = /* @__PURE__ */ (() => targetNamespace)();
    static CURRENT_CATEGROY = /* @__PURE__ */ (() => wgTitle)();
    static wgFormattedNamespaces = /* @__PURE__ */ (() => wgFormattedNamespaces)();
    static wgNamespaceIds = /* @__PURE__ */ (() => wgNamespaceIds)();
    static isAutoCompleteInit = false;
    static api = /* @__PURE__ */ (() => api)();
    static alreadyThere = [];
    static connectionError = [];
    static notFound = [];
    static counterCurrent = 0;
    static counterNeeded = 0;
    static counterCat = 0;
    static currentCategory = "";
    static dialogHeight = 450;
    static editToken = "";
    static localCatName = (() => wgFormattedNamespaces[CAL.TARGET_NAMESPACE])();
    static parentCats = [];
    static subCats = [];
    static settings = {};
    static variantCache = {};
    static variantCache2 = {};
    static $counter = (() => $())();
    static $progressDialog = (() => $())();
    static $labels = (() => $())();
    static $selectedLabels = (() => $())();
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
        var _CAL$variantCache, _CAL$variantCache$cat;
        if (CAL.variantCache[category] !== void 0) {
          return CAL.variantCache[category];
        }
        (_CAL$variantCache$cat = (_CAL$variantCache = CAL.variantCache2)[category]) !== null && _CAL$variantCache$cat !== void 0 ? _CAL$variantCache$cat : _CAL$variantCache[category] = {};
        const results = [];
        const params = {
          action: "parse",
          format: "json",
          formatversion: "2",
          text: category,
          title: "temp"
        };
        for (var _i4 = 0, _VARIANTS = VARIANTS; _i4 < _VARIANTS.length; _i4++) {
          var _Object$getOwnPropert;
          const variant = _VARIANTS[_i4];
          const result2 = (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(CAL.variantCache2[category], variant)) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.value;
          if (result2) {
            results[results.length] = result2;
            continue;
          }
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
            if (CAL.variantCache2[category]) {
              Object.defineProperty(CAL.variantCache2[category], variant, {
                value: result
              });
            }
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
        if (params.action === "query") {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NhdC1hLWxvdC9vcHRpb25zLmpzb24iLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9DYXQtYS1sb3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvY29yZS50c3giLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlLnRzIiwgInNyYy9DYXQtYS1sb3QvQ2F0LWEtbG90LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiYXBpVGFnXCI6IFwiQ2F0LWEtbG90XCIsXG5cdFwidGFyZ2V0TmFtZXNwYWNlXCI6IDE0LFxuXHRcInZlcnNpb25cIjogXCI2LjBcIlxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IHR5cGUge1NldHRpbmd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWNhdF9hX2xvdCc7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tY29udGFpbmVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEE6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9fZGF0YWA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1Q6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19jYXRlZ29yeS1saXN0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT046IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1fX2FjdGlvbmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH0tLW5vLWZvdW5kYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfV9fbWFyay1jb3VudGVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlYXJjaC1pbnB1dC1jb250YWluZXJfX2lucHV0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlbGVjdGlvbnNgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfV9fYWxsYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9X19ub25lYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9faGVhZGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTks6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9X19saW5rYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9LS1lbmFibGVkYDtcbmNvbnN0IENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1jdXJyZW50X2NvdW50ZXJgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDSzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tZmVlZGJhY2tgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0ZFRURCQUNLfS0tZG9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1sYWJlbGA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMX0RPTkU6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1kb25lYDtcbmNvbnN0IENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLWxhc3Qtc2VsZWN0ZWRgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLXNlbGVjdGVkYDtcblxuY29uc3QgREVGQVVMVF9TRVRUSU5HOiBTZXR0aW5nID0ge1xuXHRkb2NsZWFudXA6IHtcblx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHRsYWJlbF9pMThuOiAnZG9jbGVhbnVwcHJlZicsXG5cdH0sXG5cdGVkaXRwYWdlczoge1xuXHRcdGRlZmF1bHQ6IHRydWUsXG5cdFx0bGFiZWxfaTE4bjogJ2VkaXRwYWdlc3ByZWYnLFxuXHR9LFxuXHRtaW5vcjoge1xuXHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdGxhYmVsX2kxOG46ICdtaW5vcnByZWYnLFxuXHR9LFxuXHRzdWJjYXRjb3VudDoge1xuXHRcdGRlZmF1bHQ6IDUwLFxuXHRcdGxhYmVsX2kxOG46ICdzdWJjYXRjb3VudHByZWYnLFxuXHR9LFxuXHR3YXRjaGxpc3Q6IHtcblx0XHRkZWZhdWx0OiAncHJlZmVyZW5jZXMnLFxuXHRcdGxhYmVsX2kxOG46ICd3YXRjaGxpc3RwcmVmJyxcblx0XHRzZWxlY3RfaTE4bjoge1xuXHRcdFx0d2F0Y2hfbm9jaGFuZ2U6ICdub2NoYW5nZScsXG5cdFx0XHR3YXRjaF9wcmVmOiAncHJlZmVyZW5jZXMnLFxuXHRcdFx0d2F0Y2hfdW53YXRjaDogJ3Vud2F0Y2gnLFxuXHRcdFx0d2F0Y2hfd2F0Y2g6ICd3YXRjaCcsXG5cdFx0fSxcblx0fSxcbn07XG5cbmNvbnN0IFZBUklBTlRTOiBzdHJpbmdbXSA9IFsnemgtaGFucycsICd6aC1oYW50JywgJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04sXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCxcblx0Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIsXG5cdENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQsXG5cdENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQsXG5cdERFRkFVTFRfU0VUVElORyxcblx0VkFSSUFOVFMsXG59O1xuIiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgREVGQVVMVF9NRVNTQUdFUyA9IHtcblx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICd7e1BMVVJBTDokMXxPbmUgZmlsZXwkMSBmaWxlc319IHNlbGVjdGVkLicsXG5cdC8vIEFjdGlvbnNcblx0J2NhdC1hLWxvdC1jb3B5JzogJ0NvcHknLFxuXHQnY2F0LWEtbG90LW1vdmUnOiAnTW92ZScsXG5cdCdjYXQtYS1sb3QtYWRkJzogJ0FkZCcsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ1JlbW92ZSBmcm9tIHRoaXMgY2F0ZWdvcnknLFxuXHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAnRW50ZXIgY2F0ZWdvcnkgbmFtZScsXG5cdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ1NlbGVjdCcsXG5cdCdjYXQtYS1sb3QtYWxsJzogJ2FsbCcsXG5cdCdjYXQtYS1sb3Qtbm9uZSc6ICdub25lJyxcblx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ05vIGZpbGVzIHNlbGVjdGVkIScsXG5cdC8vIFByZWZlcmVuY2VzXG5cdCdjYXQtYS1sb3Qtd2F0Y2hsaXN0cHJlZic6ICdXYXRjaGxpc3QgcHJlZmVyZW5jZSBjb25jZXJuaW5nIGZpbGVzIGVkaXRlZCB3aXRoIENhdC1BLUxvdCcsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICdBY2NvcmRpbmcgdG8geW91ciBnZW5lcmFsIHByZWZlcmVuY2VzJyxcblx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICdEbyBub3QgY2hhbmdlIHdhdGNoc3RhdHVzJyxcblx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICdXYXRjaCBwYWdlcyBlZGl0ZWQgd2l0aCBDYXQtQS1Mb3QnLFxuXHQnY2F0LWEtbG90LXdhdGNoX3Vud2F0Y2gnOiAnUmVtb3ZlIHBhZ2VzIHdoaWxlIGVkaXRpbmcgd2l0aCBDYXQtQS1Mb3QgZnJvbSB5b3VyIHdhdGNobGlzdCcsXG5cdCdjYXQtYS1sb3QtbWlub3JwcmVmJzpcblx0XHRcIk1hcmsgZWRpdHMgYXMgbWlub3IgKGlmIHlvdSBnZW5lcmFsbHkgbWFyayB5b3VyIGVkaXRzIGFzIG1pbm9yLCB0aGlzIHdvbid0IGNoYW5nZSBhbnl0aGluZylcIixcblx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ0FsbG93IGNhdGVnb3Jpc2luZyBwYWdlcyAoaW5jbHVkaW5nIGNhdGVnb3JpZXMpIHRoYXQgYXJlIG5vdCBmaWxlcycsXG5cdCdjYXQtYS1sb3QtZG9jbGVhbnVwcHJlZic6ICdSZW1vdmUge3tDaGVjayBjYXRlZ29yaWVzfX0gYW5kIG90aGVyIG1pbm9yIGNsZWFudXAnLFxuXHQnY2F0LWEtbG90LXN1YmNhdGNvdW50cHJlZic6ICdTdWItY2F0ZWdvcmllcyB0byBzaG93IGF0IG1vc3QnLFxuXHQvLyBQcm9ncmVzc1xuXHQnY2F0LWEtbG90LWxvYWRpbmcnOiAnTG9hZGluZy4uLicsXG5cdCdjYXQtYS1sb3QtZWRpdGluZyc6ICdFZGl0aW5nIHBhZ2UnLFxuXHQnY2F0LWEtbG90LW9mJzogJ29mICcsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5Jzpcblx0XHQnVGhlIGZvbGxvd2luZyB7e1BMVVJBTDokMXxwYWdlIHdhc3wkMSBwYWdlcyB3ZXJlfX0gc2tpcHBlZCwgYmVjYXVzZSB0aGUgcGFnZSB3YXMgYWxyZWFkeSBpbiB0aGUgY2F0ZWdvcnk6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLW5vdC1mb3VuZCc6XG5cdFx0J1RoZSBmb2xsb3dpbmcge3tQTFVSQUw6JDF8cGFnZSB3YXN8JDEgcGFnZXMgd2VyZX19IHNraXBwZWQsIGJlY2F1c2UgdGhlIG9sZCBjYXRlZ29yeSBjb3VsZCBub3QgYmUgZm91bmQ6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLXNlcnZlcic6XG5cdFx0XCJUaGUgZm9sbG93aW5nIHt7UExVUkFMOiQxfHBhZ2V8JDEgcGFnZXN9fSBjb3VsZG4ndCBiZSBjaGFuZ2VkLCBzaW5jZSB0aGVyZSB3ZXJlIHByb2JsZW1zIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlcjpcIixcblx0J2NhdC1hLWxvdC1hbGwtZG9uZSc6ICdBbGwgcGFnZXMgYXJlIHByb2Nlc3NlZC4nLFxuXHQnY2F0LWEtbG90LWRvbmUnOiAnRG9uZSEnLFxuXHQnY2F0LWEtbG90LWFkZGVkLWNhdCc6ICdBZGRlZCBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICdDb3BpZWQgdG8gY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LW1vdmVkLWNhdCc6ICdNb3ZlZCB0byBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAnUmVtb3ZlZCBmcm9tIGNhdGVnb3J5ICQxJyxcblx0J2NhdC1hLWxvdC1yZXR1cm4tdG8tcGFnZSc6ICdSZXR1cm4gdG8gcGFnZScsXG5cdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICdDYXRlZ29yeSBub3QgZm91bmQuJyxcblx0Ly8gU3VtbWFyaWVzOlxuXHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IEFkZGluZyBbW0NhdGVnb3J5OiQxXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktY29weSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBDb3B5aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dIHRvIFtbQ2F0ZWdvcnk6JDJdXScsXG5cdCdjYXQtYS1sb3Qtc3VtbWFyeS1tb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IE1vdmluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXSB0byBbW0NhdGVnb3J5OiQyXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IFJlbW92aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dJyxcbn0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXG5jb25zdCBzZXRNZXNzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0LyohIENhdC1hLWxvdCBtZXNzYWdlcyB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRpZiAod2dVc2VyTGFuZ3VhZ2UgPT09ICdlbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0PHR5cGVvZiBERUZBVUxUX01FU1NBR0VTPih7XG5cdFx0XHQvLyBhcyBpbiAxNyBmaWxlcyBzZWxlY3RlZFxuXHRcdFx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICckMeWAi+aWh+S7tuW3sumBuOaThycsXG5cdFx0XHQvLyBBY3Rpb25zXG5cdFx0XHQnY2F0LWEtbG90LWNvcHknOiAn6KSH6KO9Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZSc6ICfnp7vli5UnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGQnOiAn5aKe5YqgJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ+W+nuatpOWIhumhnuenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAn6Ly45YWl5YiG6aGe5ZCN56ixJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ+mBuOaThycsXG5cdFx0XHQnY2F0LWEtbG90LWFsbCc6ICflhajpg6gnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lJzogJ+eEoScsXG5cdFx0XHQnY2F0LWEtbG90LW5vbmUtc2VsZWN0ZWQnOiAn5rKS5pyJ6YG45pOH5paH5Lu277yBJyxcblx0XHRcdC8vIFByZWZlcmVuY2VzXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAn5L2/55SoQ2F0LUEtTG9057eo6Lyv5paH5Lu25pmC55qE55uj6KaW5YiX6KGo6YG46aCFJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICfoiIfns7vntbHlj4PmlbjoqK3nva7nm7jlkIwnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICfkuI3opoHmm7TmlLnnm6Poppbni4DmhYsnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICfnm6Poppbkvb/nlKhDYXQtQS1Mb3Tnt6jovK/nmoTpoIHpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ+Wwh+S9v+eUqENhdC1BLUxvdOe3qOi8r+eahOmggemdouW+nuebo+imluWIl+ihqOenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XHRcdCflsIfnt6jovK/mqJnoqJjniLLlsI/kv67mlLnvvIjoi6XmgqjlnKjns7vntbHlj4PmlbjoqK3nva7kuK3lt7LoqK3nva7lsIfmiYDmnInnt6jovK/mqJnoqJjniLLlsI/kv67mlLnvvIzmraTpgbjpoIXkuI3mnIPlsI3nj77mnInooYzniLLpgLLooYzmlLnli5XvvIknLFxuXHRcdFx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ+WFgeioseWwjeS4jeaYr+aWh+S7tueahOmggemdouWSjOWtkOWIhumhnumAsuihjOWIhumhnuaTjeS9nCcsXG5cdFx0XHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAn56e76Zmke3tDaGVjayBjYXRlZ29yaWVzfX3kuKbpgLLooYzlhbbku5bntLDnr4DmuIXnkIYnLFxuXHRcdFx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAn5pyA5aSa6aGv56S655qE5a2Q5YiG6aGe5pW46YePJyxcblx0XHRcdC8vIFByb2dyZXNzXG5cdFx0XHQnY2F0LWEtbG90LWxvYWRpbmcnOiAn5q2j5Zyo5Yqg6LyJ4oCm4oCmJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdGluZyc6ICfmraPlnKjnt6jovK/poIHpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC1vZic6ICfvvIzlhbHmnIknLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLWFscmVhZHknOiAn5Lul5LiL6aCB6Z2i5bey6Lez6YGO77yM5Zug54iy6aCB6Z2i5bey57aT5Zyo5YiG6aGe5Lit77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOiAn5Lul5LiL6aCB6Z2i5bey6Lez6YGO77yM5Zug54iy5om+5LiN5Yiw54++5pyJ5YiG6aGe77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOiAn5Lul5LiL6aCB6Z2i54Sh5rOV57eo6Lyv77yM5Zug54iy6YCj5o6l5pyN5YuZ5Zmo5Ye66Yyv77yaJyxcblx0XHRcdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAn5YWo6YOo6aCB6Z2i5bey6JmV55CG44CCJyxcblx0XHRcdCdjYXQtYS1sb3QtZG9uZSc6ICflt7LlrozmiJDvvIEnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAn5bey5Yqg5YWl5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICflt7LopIfoo73liLDliIbpoZ4nLFxuXHRcdFx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAn5bey56e75YuV5Yiw5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAn5bey5b6e5YiG6aGe56e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAn6L+U5Zue5Yiw6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICfmib7kuI3liLDliIbpoZ7jgIInLFxuXHRcdFx0Ly8gU3VtbWFyaWVzXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliqDlhaXliIbpoZ5bW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhumhnumWk+ikh+ijve+8muW+nltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5YiG6aGe6ZaT56e75YuV77ya5b6eW1tDYXRlZ29yeTokMV1d5YiwW1tDYXRlZ29yeTokMl1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1yZW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muW+nuWIhumhnuenu+mZpO+8mltbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0PHR5cGVvZiBERUZBVUxUX01FU1NBR0VTPih7XG5cdFx0XHQvLyBhcyBpbiAxNyBmaWxlcyBzZWxlY3RlZFxuXHRcdFx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICflt7LpgInmi6kkMeS4qumhtemdouaIluaWh+S7ticsXG5cdFx0XHQvLyBBY3Rpb25zXG5cdFx0XHQnY2F0LWEtbG90LWNvcHknOiAn5aSN5Yi2Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZSc6ICfnp7vliqgnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGQnOiAn5aKe5YqgJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ+S7juatpOWIhuexu+enu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAn6L6T5YWl5YiG57G75ZCN56ewJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ+mAieaLqScsXG5cdFx0XHQnY2F0LWEtbG90LWFsbCc6ICflhajpg6gnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lJzogJ+aXoCcsXG5cdFx0XHQnY2F0LWEtbG90LW5vbmUtc2VsZWN0ZWQnOiAn5rKh5pyJ6YCJ5oup5Lu75L2V6aG16Z2i5oiW5paH5Lu277yBJyxcblx0XHRcdC8vIFByZWZlcmVuY2VzXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAn5L2/55SoQ2F0LWEtbG9057yW6L6R5paH5Lu25pe255qE55uR6KeG5YiX6KGo6YCJ6aG5Jyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICfkuI7ns7vnu5/lj4LmlbDorr7nva7nm7jlkIwnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICfkuI3opoHmm7TmlLnnm5Hop4bnirbmgIEnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICfnm5Hop4bkvb/nlKhDYXQtYS1sb3TnvJbovpHnmoTpobXpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ+WwhuS9v+eUqENhdC1hLWxvdOe8lui+keeahOmhtemdouS7juebkeinhuWIl+ihqOenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XHRcdCflsIbnvJbovpHmoIforrDkuLrlsI/kv67mlLnvvIjoi6XmgqjlnKjns7vnu5/lj4LmlbDorr7nva7kuK3lt7Lorr7nva7lsIbmiYDmnInnvJbovpHmoIforrDkuLrlsI/kv67mlLnvvIzmraTpgInpobnkuI3kvJrlr7nnjrDmnInooYzkuLrov5vooYzmlLnliqjvvIknLFxuXHRcdFx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ+WFgeiuuOWvueS4jeaYr+aWh+S7tueahOmhtemdouWSjOWtkOWIhuexu+i/m+ihjOWIhuexu+aTjeS9nCcsXG5cdFx0XHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAn56e76Zmke3tDaGVjayBjYXRlZ29yaWVzfX3lubbov5vooYzlhbbku5bnu4boioLmuIXnkIYnLFxuXHRcdFx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAn5pyA5aSa5pi+56S655qE5a2Q5YiG57G75pWw6YePJyxcblx0XHRcdC8vIFByb2dyZXNzXG5cdFx0XHQnY2F0LWEtbG90LWxvYWRpbmcnOiAn5q2j5Zyo5Yqg6L294oCm4oCmJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdGluZyc6ICfmraPlnKjnvJbovpHpobXpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC1vZic6ICfvvIzlhbHmnIknLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLWFscmVhZHknOiAn5Lul5LiL6aG16Z2i5bey6Lez6L+H77yM5Zug5Li66aG16Z2i5bey57uP5Zyo5YiG57G75Lit77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOiAn5Lul5LiL6aG16Z2i5bey6Lez6L+H77yM5Zug5Li65om+5LiN5Yiw546w5pyJ5YiG57G777yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOiAn5Lul5LiL6aG16Z2i5peg5rOV57yW6L6R77yM5Zug5Li66L+e5o6l5pyN5Yqh5Zmo5Ye66ZSZ77yaJyxcblx0XHRcdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAn5YWo6YOo6aG16Z2i5bey5aSE55CG44CCJyxcblx0XHRcdCdjYXQtYS1sb3QtZG9uZSc6ICflt7LlrozmiJDvvIEnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAn5bey5Yqg5YWl5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICflt7LlpI3liLbliLDliIbnsbsnLFxuXHRcdFx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAn5bey56e75Yqo5Yiw5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAn5bey5LuO5YiG57G756e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAn6L+U5Zue5Yiw6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICfmib7kuI3liLDliIbnsbvjgIInLFxuXHRcdFx0Ly8gU3VtbWFyaWVzXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliqDlhaXliIbnsbtbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhuexu+mXtOWkjeWItu+8muS7jltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5YiG57G76Ze056e75Yqo77ya5LuOW1tDYXRlZ29yeTokMV1d5YiwW1tDYXRlZ29yeTokMl1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1yZW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muS7juWIhuexu+enu+mZpO+8mltbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7REVGQVVMVF9NRVNTQUdFUywgc2V0TWVzc2FnZXN9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIG1lZGlhd2lraS9jbGFzcy1kb2MgKi9cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04sXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCxcblx0Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIsXG5cdENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVELFxuXHRERUZBVUxUX1NFVFRJTkcsXG5cdFZBUklBTlRTLFxufSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7REVGQVVMVF9NRVNTQUdFUywgc2V0TWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuaW1wb3J0IHR5cGUge01lc3NhZ2VLZXksIFNldHRpbmd9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtnZXRCb2R5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSwgd2dGb3JtYXR0ZWROYW1lc3BhY2VzLCB3Z05hbWVzcGFjZUlkcywgd2dOYW1lc3BhY2VOdW1iZXIsIHdnVGl0bGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vKipcbiAqIENoYW5nZXMgY2F0ZWdvcnkgb2YgbXVsdGlwbGUgZmlsZXNcbiAqL1xuY29uc3QgY2F0QUxvdCA9ICgpOiB2b2lkID0+IHtcblx0LyohIENhdC1hLWxvdCB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRjbGFzcyBDQUwge1xuXHRcdHB1YmxpYyBzdGF0aWMgaXNTZWFyY2hNb2RlID0gZmFsc2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBNRVNTQUdFUzogUmVjb3JkPE1lc3NhZ2VLZXksIHN0cmluZz4gPSBERUZBVUxUX01FU1NBR0VTO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0VUVElORzogU2V0dGluZyA9IERFRkFVTFRfU0VUVElORztcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEFQSV9UQUc6IHN0cmluZyA9IE9QVElPTlMuYXBpVGFnO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRBUkdFVF9OQU1FU1BBQ0U6IG51bWJlciA9IE9QVElPTlMudGFyZ2V0TmFtZXNwYWNlO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ1VSUkVOVF9DQVRFR1JPWTogc3RyaW5nID0gd2dUaXRsZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHdnRm9ybWF0dGVkTmFtZXNwYWNlczogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlcztcblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSB3Z05hbWVzcGFjZUlkczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHdnTmFtZXNwYWNlSWRzO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaXNBdXRvQ29tcGxldGVJbml0ID0gZmFsc2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhcGkgPSBhcGk7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhbHJlYWR5VGhlcmU6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY29ubmVjdGlvbkVycm9yOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdEZvdW5kOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDdXJyZW50ID0gMDtcblx0XHRwcml2YXRlIHN0YXRpYyBjb3VudGVyTmVlZGVkID0gMDtcblxuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDYXQgPSAwO1xuXHRcdHByaXZhdGUgc3RhdGljIGN1cnJlbnRDYXRlZ29yeSA9ICcnO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgZGlhbG9nSGVpZ2h0ID0gNDUwO1xuXHRcdHByaXZhdGUgc3RhdGljIGVkaXRUb2tlbiA9ICcnO1xuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsQ2F0TmFtZSA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlc1tDQUwuVEFSR0VUX05BTUVTUEFDRV0gYXMgc3RyaW5nO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcGFyZW50Q2F0czogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJDYXRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgc2V0dGluZ3M6IE5vbk51bGxhYmxlPHR5cGVvZiB3aW5kb3cuQ2F0QUxvdFByZWZzPiA9IHt9O1xuXHRcdHByaXZhdGUgc3RhdGljIHZhcmlhbnRDYWNoZTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdFx0cHJpdmF0ZSBzdGF0aWMgdmFyaWFudENhY2hlMjogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7fTtcblxuXHRcdHByaXZhdGUgc3RhdGljICRjb3VudGVyOiBKUXVlcnkgPSAkKCk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgJHByb2dyZXNzRGlhbG9nOiBKUXVlcnkgPSAkKCk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgJGxhYmVsczogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRzZWxlY3RlZExhYmVsczogSlF1ZXJ5ID0gJCgpO1xuXG5cdFx0cHJpdmF0ZSByZWFkb25seSAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkY29udGFpbmVyOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkZGF0YUNvbnRhaW5lcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJG1hcmtDb3VudGVyOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkcmVzdWx0TGlzdDogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJHNlYXJjaElucHV0OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD47XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkaGVhZDogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGxpbms6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD47XG5cblx0XHRwdWJsaWMgY29uc3RydWN0b3IoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSB7XG5cdFx0XHRpZiAoIW13Lm1zZygnY2F0LWEtbG90LWxvYWRpbmcnKSkge1xuXHRcdFx0XHRtdy5tZXNzYWdlcy5zZXQoQ0FMLk1FU1NBR0VTKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kYm9keSA9ICRib2R5O1xuXHRcdFx0Q0FMLmluaXRTZXR0aW5ncygpO1xuXG5cdFx0XHRjb25zdCBjb250YWluZXIgPSAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRSwgQ0xBU1NfTkFNRV9DT05UQUlORVIsICdub3ByaW50J119PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUn0gLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9IC8+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVH1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17Q0FMLm1zZygnZW50ZXItbmFtZScpfVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Q0FMLmlzU2VhcmNoTW9kZSA/IChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3NlYXJjaCcpID8/ICcnKSA6ICcnfVxuXHRcdFx0XHRcdFx0XHRcdG9uS2V5RG93bj17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkgYXMgSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXQ6IHN0cmluZyA9ICRlbGVtZW50LnZhbCgpPy50cmltKCkgPz8gJyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjYXQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoY2F0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9PlxuXHRcdFx0XHRcdFx0XHR7W0NBTC5tc2coJ3NlbGVjdCcpLCAnICddfVxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTH1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUFsbCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FsbCcpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdHsnIOKAoiAnfVxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkV9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbm9uZScpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH0+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS30+Q2F0LWEtbG90PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKSBhcyBKUXVlcnk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIuYXBwZW5kVG8odGhpcy4kYm9keSk7XG5cblx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1gKTtcblx0XHRcdHRoaXMuJG1hcmtDb3VudGVyID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUn1gKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QgPSB0aGlzLiRkYXRhQ29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1gKTtcblx0XHRcdHRoaXMuJHNlYXJjaElucHV0ID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KFxuXHRcdFx0XHRgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUfWBcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGhlYWQgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH1gKTtcblx0XHRcdHRoaXMuJGxpbmsgPSB0aGlzLiRoZWFkLmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9YCk7XG5cdFx0fVxuXG5cdFx0cHVibGljIGJ1aWxkRWxlbWVudHMoKTogdm9pZCB7XG5cdFx0XHRjb25zdCByZWdleENhdDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXlxcXFxzKiR7Q0FMLmxvY2FsaXplZFJlZ2V4KENBTC5UQVJHRVRfTkFNRVNQQUNFLCAnQ2F0ZWdvcnknKX06YCwgJycpO1xuXG5cdFx0XHR0aGlzLiRzZWFyY2hJbnB1dC5vbignaW5wdXQga2V5dXAnLCAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3Qge2N1cnJlbnRUYXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHRcdGNvbnN0IHt2YWx1ZTogb2xkVmFsfSA9IGN1cnJlbnRUYXJnZXQ7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbDogc3RyaW5nID0gb2xkVmFsLnJlcGxhY2UocmVnZXhDYXQsICcnKTtcblx0XHRcdFx0aWYgKG5ld1ZhbCAhPT0gb2xkVmFsKSB7XG5cdFx0XHRcdFx0Y3VycmVudFRhcmdldC52YWx1ZSA9IG5ld1ZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IGluaXRBdXRvY29tcGxldGUgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdGlmIChDQUwuaXNBdXRvQ29tcGxldGVJbml0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdENBTC5pc0F1dG9Db21wbGV0ZUluaXQgPSB0cnVlO1xuXG5cdFx0XHRcdHRoaXMuJHNlYXJjaElucHV0LmF1dG9jb21wbGV0ZSh7XG5cdFx0XHRcdFx0c291cmNlOiAocmVxdWVzdDoge3Rlcm06IHN0cmluZ30sIHJlc3BvbnNlOiAoYXJnOiBKUXVlcnk8c3RyaW5nPikgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdvcGVuc2VhcmNoJyxcblx0XHRcdFx0XHRcdFx0XHRuYW1lc3BhY2U6IENBTC5UQVJHRVRfTkFNRVNQQUNFLFxuXHRcdFx0XHRcdFx0XHRcdHJlZGlyZWN0czogJ3Jlc29sdmUnLFxuXHRcdFx0XHRcdFx0XHRcdHNlYXJjaDogcmVxdWVzdC50ZXJtLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdFsxXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2UoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQocmVzdWx0WzFdKS5tYXAoKF9pbmRleCwgaXRlbTogc3RyaW5nKTogc3RyaW5nID0+IGl0ZW0ucmVwbGFjZShyZWdleENhdCwgJycpKVxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0bXk6ICdyaWdodCBib3R0b20nLFxuXHRcdFx0XHRcdFx0YXQ6ICdyaWdodCB0b3AnLFxuXHRcdFx0XHRcdFx0b2Y6IHRoaXMuJHNlYXJjaElucHV0LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YXBwZW5kVG86IGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUn1gLFxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHR0aGlzLiRsaW5rLm9uKCdjbGljaycsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHQkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEKTtcblx0XHRcdFx0aW5pdEF1dG9jb21wbGV0ZSgpO1xuXHRcdFx0XHR0aGlzLnJ1bigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaW5pdFNldHRpbmdzKCk6IHZvaWQge1xuXHRcdFx0bGV0IGNhdEFMb3RQcmVmczogdHlwZW9mIENBTC5zZXR0aW5ncyA9IHdpbmRvdy5DYXRBTG90UHJlZnMgPz8ge307XG5cdFx0XHRjb25zdCB0eXBlT2ZDYXRBTG90UHJlZnMgPSB0eXBlb2YgY2F0QUxvdFByZWZzO1xuXHRcdFx0aWYgKCh0eXBlT2ZDYXRBTG90UHJlZnMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGNhdEFMb3RQcmVmcykpIHx8IHR5cGVPZkNhdEFMb3RQcmVmcyAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Y2F0QUxvdFByZWZzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3Qgc2V0dGluZ0tleSBvZiBPYmplY3Qua2V5cyhDQUwuREVGQVVMVF9TRVRUSU5HKSBhcyAoa2V5b2YgU2V0dGluZylbXSkge1xuXHRcdFx0XHRjb25zdCBzZXR0aW5nID0gQ0FMLkRFRkFVTFRfU0VUVElOR1tzZXR0aW5nS2V5XTtcblxuXHRcdFx0XHRDQUwuc2V0dGluZ3Nbc2V0dGluZ0tleV0gPSBjYXRBTG90UHJlZnNbc2V0dGluZ0tleV0gPz8gc2V0dGluZy5kZWZhdWx0O1xuXG5cdFx0XHRcdGlmICghc2V0dGluZy5zZWxlY3RfaTE4bikge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2V0dGluZy5zZWxlY3QgPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBtZXNzYWdlS2V5IG9mIE9iamVjdC5rZXlzKHNldHRpbmcuc2VsZWN0X2kxOG4pKSB7XG5cdFx0XHRcdFx0Y29uc3QgbWVzc2FnZTogc3RyaW5nID0gc2V0dGluZy5zZWxlY3RfaTE4blttZXNzYWdlS2V5XSBhcyBrZXlvZiB0eXBlb2Ygc2V0dGluZy5zZWxlY3RfaTE4bjtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0c2V0dGluZy5zZWxlY3RbQ0FMLm1zZyhtZXNzYWdlS2V5IGFzIG5ldmVyKV0gPSBtZXNzYWdlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgbXNnKGtleTogTWVzc2FnZUtleSBleHRlbmRzIGBjYXQtYS1sb3QtJHtpbmZlciBQfWAgPyBQIDogbmV2ZXIsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcblx0XHRcdGNvbnN0IGZ1bGxLZXk6IHN0cmluZyA9IGBjYXQtYS1sb3QtJHtrZXl9YDtcblx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGZ1bGxLZXksIC4uLmFyZ3MpLnBhcnNlKCkgOiBtdy5tZXNzYWdlKGZ1bGxLZXkpLnBsYWluKCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsaXplZFJlZ2V4KG5hbWVzcGFjZU51bWJlcjogbnVtYmVyLCBmYWxsYmFjazogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdC8vIENvcGllZCBmcm9tIEhvdENhdCwgdGhhbmtzIEx1cG8uXG5cdFx0XHRjb25zdCB3aWtpVGV4dEJsYW5rOiBzdHJpbmcgPSBTdHJpbmcucmF3YFtcXHQgX1xceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMF0rYDtcblx0XHRcdGNvbnN0IHdpa2lUZXh0QmxhbmtSRTogUmVnRXhwID0gbmV3IFJlZ0V4cCh3aWtpVGV4dEJsYW5rLCAnZycpO1xuXHRcdFx0Y29uc3QgY3JlYXRlUmVnZXhTdHIgPSAobmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nID0+IHtcblx0XHRcdFx0aWYgKCFuYW1lPy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHJlZ2V4TmFtZTogc3RyaW5nID0gJyc7XG5cdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW5pdGlhbDogc3RyaW5nID0gbmFtZS5zbGljZShpLCBpICsgMSk7XG5cdFx0XHRcdFx0Y29uc3QgbGw6IHN0cmluZyA9IGluaXRpYWwudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRjb25zdCB1bDogc3RyaW5nID0gaW5pdGlhbC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRcdHJlZ2V4TmFtZSArPSBsbCA9PT0gdWwgPyBpbml0aWFsIDogYFske2xsfSR7dWx9XWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlZ2V4TmFtZS5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csIFN0cmluZy5yYXdgXFwkMWApLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKTtcblx0XHRcdH07XG5cdFx0XHRmYWxsYmFjayA9IGZhbGxiYWNrLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRjb25zdCBjYW5vbmljYWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IENBTC53Z0Zvcm1hdHRlZE5hbWVzcGFjZXNbbmFtZXNwYWNlTnVtYmVyXT8udG9Mb3dlckNhc2UoKTtcblx0XHRcdGxldCByZWdleFN0cmluZzogc3RyaW5nID0gY3JlYXRlUmVnZXhTdHIoY2Fub25pY2FsKTtcblx0XHRcdGlmIChmYWxsYmFjayAmJiBjYW5vbmljYWwgIT09IGZhbGxiYWNrKSB7XG5cdFx0XHRcdHJlZ2V4U3RyaW5nICs9IGB8JHtjcmVhdGVSZWdleFN0cihmYWxsYmFjayl9YDtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3QgY2F0TmFtZSBvZiBPYmplY3Qua2V5cyhDQUwud2dOYW1lc3BhY2VJZHMpKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRjYXROYW1lLnRvTG93ZXJDYXNlKCkgIT09IGNhbm9uaWNhbCAmJlxuXHRcdFx0XHRcdGNhdE5hbWUudG9Mb3dlckNhc2UoKSAhPT0gZmFsbGJhY2sgJiZcblx0XHRcdFx0XHRDQUwud2dOYW1lc3BhY2VJZHNbY2F0TmFtZV0gPT09IG5hbWVzcGFjZU51bWJlclxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZWdleFN0cmluZyArPSBgfCR7Y3JlYXRlUmVnZXhTdHIoY2F0TmFtZSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGAoPzoke3JlZ2V4U3RyaW5nfSlgO1xuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIoKTogdm9pZCB7XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzID0gQ0FMLiRsYWJlbHMuZmlsdGVyKGAuJHtDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEfWApO1xuXHRcdFx0dGhpcy4kbWFya0NvdW50ZXIuc2hvdygpLmh0bWwoQ0FMLm1zZygnZmlsZXMtc2VsZWN0ZWQnLCBDQUwuJHNlbGVjdGVkTGFiZWxzLmxlbmd0aC50b1N0cmluZygpKSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgdG9nZ2xlQWxsKHNlbGVjdDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0Q0FMLiRsYWJlbHMudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCwgc2VsZWN0KTtcblx0XHRcdHRoaXMudXBkYXRlU2VsZWN0aW9uQ291bnRlcigpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGFzeW5jIGZpbmRBbGxWYXJpYW50cyhjYXRlZ29yeTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuXHRcdFx0aWYgKENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldO1xuXHRcdFx0fVxuXHRcdFx0Q0FMLnZhcmlhbnRDYWNoZTJbY2F0ZWdvcnldID8/PSB7fTtcblx0XHRcdGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRleHQ6IGNhdGVnb3J5LFxuXHRcdFx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdFx0fTtcblx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiBWQVJJQU5UUykge1xuXHRcdFx0XHRjb25zdCByZXN1bHQyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihDQUwudmFyaWFudENhY2hlMltjYXRlZ29yeV0sIHZhcmlhbnQpPy52YWx1ZTtcblx0XHRcdFx0aWYgKHJlc3VsdDIpIHtcblx0XHRcdFx0XHRyZXN1bHRzW3Jlc3VsdHMubGVuZ3RoXSA9IHJlc3VsdDI7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCB7cGFyc2V9ID0gYXdhaXQgQ0FMLmFwaS5nZXQoe1xuXHRcdFx0XHRcdFx0Li4ucGFyYW1zLFxuXHRcdFx0XHRcdFx0dmFyaWFudCxcblx0XHRcdFx0XHR9IGFzIHR5cGVvZiBwYXJhbXMpO1xuXHRcdFx0XHRcdGNvbnN0IHt0ZXh0fSA9IHBhcnNlO1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9ICQodGV4dCkuZXEoMCkudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0XHRyZXN1bHRzW3Jlc3VsdHMubGVuZ3RoXSA9IHJlc3VsdDtcblx0XHRcdFx0XHRpZiAoQ0FMLnZhcmlhbnRDYWNoZTJbY2F0ZWdvcnldKSB7XG5cdFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoQ0FMLnZhcmlhbnRDYWNoZTJbY2F0ZWdvcnldLCB2YXJpYW50LCB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiByZXN1bHQsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdH1cblx0XHRcdC8vIERlLWR1cGxpY2F0ZVxuXHRcdFx0Q0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gPSB1bmlxdWVBcnJheShyZXN1bHRzKTsgLy8gUmVwbGFjZSBgWy4uLm5ldyBTZXQoKV1gIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGFzeW5jIHJlZ2V4QnVpbGRlcihjYXRlZ29yeTogc3RyaW5nKTogUHJvbWlzZTxSZWdFeHA+IHtcblx0XHRcdC8vIEJ1aWxkIGEgcmVnZXhwIHN0cmluZyBmb3IgbWF0Y2hpbmcgdGhlIGdpdmVuIGNhdGVnb3J5OlxuXHRcdFx0Y29uc3QgY2F0TmFtZTogc3RyaW5nID0gQ0FMLmxvY2FsaXplZFJlZ2V4KENBTC5UQVJHRVRfTkFNRVNQQUNFLCAnQ2F0ZWdvcnknKTtcblx0XHRcdC8vIHRyaW0gbGVhZGluZy90cmFpbGluZyB3aGl0ZXNwYWNlIGFuZCB1bmRlcnNjb3Jlc1xuXHRcdFx0Y2F0ZWdvcnkgPSBjYXRlZ29yeS5yZXBsYWNlKC9eW1xcc19dKy8sICcnKS5yZXBsYWNlKC9bXFxzX10rJC8sICcnKTtcblx0XHRcdC8vIEZpbmQgYWxsIHZhcmlhbnRzXG5cdFx0XHRjb25zdCB2YXJpYW50czogc3RyaW5nW10gPSBhd2FpdCBDQUwuZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5KTtcblx0XHRcdC8vIGVzY2FwZSByZWdleHAgbWV0YWNoYXJhY3RlcnMgKD0gYW55IEFTQ0lJIHB1bmN0dWF0aW9uIGV4Y2VwdCBfKVxuXHRcdFx0Y29uc3QgdmFyaWFudFJlZ0V4cHM6IHN0cmluZ1tdID0gW107XG5cdFx0XHRmb3IgKGxldCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG5cdFx0XHRcdHZhcmlhbnQgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cCh2YXJpYW50KTtcblx0XHRcdFx0Ly8gYW55IHNlcXVlbmNlIG9mIHNwYWNlcyBhbmQgdW5kZXJzY29yZXMgc2hvdWxkIG1hdGNoIGFueSBvdGhlclxuXHRcdFx0XHR2YXJpYW50ID0gdmFyaWFudC5yZXBsYWNlKC9bXFxzX10rL2csIFN0cmluZy5yYXdgW1xcc19dK2ApO1xuXHRcdFx0XHQvLyBNYWtlIHRoZSBmaXJzdCBjaGFyYWN0ZXIgY2FzZS1pbnNlbnNpdGl2ZTpcblx0XHRcdFx0Y29uc3QgZmlyc3Q6IHN0cmluZyA9IHZhcmlhbnQuc2xpY2UoMCwgMSk7XG5cdFx0XHRcdGlmIChmaXJzdC50b1VwcGVyQ2FzZSgpICE9PSBmaXJzdC50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRcdFx0dmFyaWFudCA9IGBbJHtmaXJzdC50b1VwcGVyQ2FzZSgpfSR7Zmlyc3QudG9Mb3dlckNhc2UoKX1dJHt2YXJpYW50LnNsaWNlKDEpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyaWFudFJlZ0V4cHNbdmFyaWFudFJlZ0V4cHMubGVuZ3RoXSA9IHZhcmlhbnQ7XG5cdFx0XHR9XG5cdFx0XHQvLyBDb21waWxlIGl0IGludG8gYSBSZWdFeHAgdGhhdCBtYXRjaGVzIE1lZGlhV2lraSBjYXRlZ29yeSBzeW50YXggKHllYWgsIGl0IGxvb2tzIHVnbHkpOlxuXHRcdFx0Ly8gWFhYOiB0aGUgZmlyc3QgY2FwdHVyaW5nIHBhcmVucyBhcmUgYXNzdW1lZCB0byBtYXRjaCB0aGUgc29ydGtleSwgaWYgcHJlc2VudCwgaW5jbHVkaW5nIHRoZSB8IGJ1dCBleGNsdWRpbmcgdGhlIF1dXG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFtbXFxcXHNfXSoke2NhdE5hbWV9W1xcXFxzX10qOltcXFxcc19dKig/OiR7dmFyaWFudFJlZ0V4cHMuam9pbihcblx0XHRcdFx0XHQnfCdcblx0XHRcdFx0KX0pW1xcXFxzX10qKFxcXFx8W15cXFxcXV0qKD86XFxcXF1bXlxcXFxdXSspKik/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvQVBJQ2FsbChcblx0XHRcdF9wYXJhbXM6XG5cdFx0XHRcdHwgT21pdDxBcGlFZGl0UGFnZVBhcmFtcywgJ2Zvcm1hdCc+XG5cdFx0XHRcdHwgT21pdDxBcGlPcGVuU2VhcmNoUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaVF1ZXJ5Q2F0ZWdvcnlNZW1iZXJzUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaVF1ZXJ5VG9rZW5zUGFyYW1zLCAnZm9ybWF0Jz4sXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0Y2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWRcblx0XHQpIHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IF9wYXJhbXMgYXMgdHlwZW9mIF9wYXJhbXMgJiB7XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nO1xuXHRcdFx0XHR0aXRsZT86IHN0cmluZztcblx0XHRcdH07XG5cdFx0XHRwYXJhbXNbJ2Zvcm1hdCddID0gJ2pzb24nO1xuXHRcdFx0cGFyYW1zWydmb3JtYXR2ZXJzaW9uJ10gPSAnMic7XG5cdFx0XHRsZXQgaTogbnVtYmVyID0gMDtcblx0XHRcdGNvbnN0IGRvQ2FsbCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3I6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdG13LmxvZy5lcnJvcignW0NhdC1hLWxvdF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdFx0aWYgKGkgPCA0KSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGRvQ2FsbCwgMzAwKTtcblx0XHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBhcmFtc1sndGl0bGUnXSkge1xuXHRcdFx0XHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvcltDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aF0gPSBwYXJhbXNbJ3RpdGxlJ107XG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChwYXJhbXMuYWN0aW9uID09PSAncXVlcnknKSB7XG5cdFx0XHRcdFx0Q0FMLmFwaS5nZXQocGFyYW1zKS50aGVuKGNhbGxiYWNrKS5jYXRjaChoYW5kbGVFcnJvcik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Q0FMLmFwaS5wb3N0KHBhcmFtcykudGhlbihjYWxsYmFjaykuY2F0Y2goaGFuZGxlRXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0ZG9DYWxsKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgbWFya0FzRG9uZShcblx0XHRcdCRtYXJrZWRMYWJlbDogSlF1ZXJ5LFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnIHwgJ3JlbW92ZSdcblx0XHQpOiB2b2lkIHtcblx0XHRcdCRtYXJrZWRMYWJlbC5hZGRDbGFzcyhDTEFTU19OQU1FX0xBQkVMX0RPTkUpO1xuXG5cdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnYWRkJzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdhZGRlZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjb3B5Jzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdjb3BpZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbW92ZSc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbW92ZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmVtb3ZlJzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdyZW1vdmVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGRvQ2xlYW51cCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdFx0cmV0dXJuIENBTC5zZXR0aW5ncy5kb2NsZWFudXAgPyB0ZXh0LnJlcGxhY2UoL3t7XFxzKltDY11oZWNrIGNhdGVnb3JpZXNcXHMqKFxcfD8uKj8pfX0vLCAnJykgOiB0ZXh0O1xuXHRcdH0gLy8gUmVtb3ZlIHt7VW5jYXRlZ29yaXplZH19IChhbHNvIHdpdGggY29tbWVudCkuIE5vIG5lZWQgdG8gcmVwbGFjZSBpdCB3aXRoIGFueXRoaW5nXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVW5jYXQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdHJldHVybiB0ZXh0LnJlcGxhY2UoL1xce1xce1xccypbVXVdbmNhdGVnb3JpemVkXFxzKihcXHw/Lio/KVxcfVxcfS8sICcnKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBkaXNwbGF5UmVzdWx0KCk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3Moe1xuXHRcdFx0XHRjdXJzb3I6ICcnLFxuXHRcdFx0XHRvdmVyZmxvdzogJycsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9GRUVEQkFDS31gKS5hZGRDbGFzcyhDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUpO1xuXG5cdFx0XHRjb25zdCAkcGFyZW50OiBKUXVlcnkgPSBDQUwuJGNvdW50ZXIucGFyZW50KCk7XG5cdFx0XHQkcGFyZW50Lmh0bWwoPGgzPntDQUwubXNnKCdkb25lJyl9PC9oMz4pO1xuXHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ2FsbC1kb25lJyl9XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KTtcblxuXHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0Q0FMLiRwcm9ncmVzc0RpYWxvZy5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlQWxsKGZhbHNlKTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ3JldHVybi10by1wYWdlJyl9XG5cdFx0XHRcdDwvYT5cblx0XHRcdCk7XG5cblx0XHRcdGlmIChDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aCkge1xuXHRcdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGg1PntDQUwubXNnKCdza2lwcGVkLWFscmVhZHknLCBDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aC50b1N0cmluZygpKX08L2g1PlxuXHRcdFx0XHRcdFx0e0NBTC5hbHJlYWR5VGhlcmUucmVkdWNlPChzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpW10+KFxuXHRcdFx0XHRcdFx0XHQocHJlLCBjdXIsIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0XHRcdGluZGV4IDwgQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGggLSAxID8gWy4uLnByZSwgY3VyLCA8YnIga2V5PXtpbmRleH0gLz5dIDogWy4uLnByZSwgY3VyXSxcblx0XHRcdFx0XHRcdFx0W11cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoQ0FMLm5vdEZvdW5kLmxlbmd0aCkge1xuXHRcdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGg1PntDQUwubXNnKCdza2lwcGVkLW5vdC1mb3VuZCcsIENBTC5ub3RGb3VuZC5sZW5ndGgudG9TdHJpbmcoKSl9PC9oNT5cblx0XHRcdFx0XHRcdHtDQUwubm90Rm91bmQucmVkdWNlPChzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpW10+KFxuXHRcdFx0XHRcdFx0XHQocHJlLCBjdXIsIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0XHRcdGluZGV4IDwgQ0FMLm5vdEZvdW5kLmxlbmd0aCAtIDEgPyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl0gOiBbLi4ucHJlLCBjdXJdLFxuXHRcdFx0XHRcdFx0XHRbXVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGlmIChDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aCkge1xuXHRcdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGg1PntDQUwubXNnKCdza2lwcGVkLXNlcnZlcicsIENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoLnRvU3RyaW5nKCkpfTwvaDU+XG5cdFx0XHRcdFx0XHR7Q0FMLmNvbm5lY3Rpb25FcnJvci5yZWR1Y2U8KHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXT4oXG5cdFx0XHRcdFx0XHRcdChwcmUsIGN1ciwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aCAtIDFcblx0XHRcdFx0XHRcdFx0XHRcdD8gWy4uLnByZSwgY3VyLCA8YnIga2V5PXtpbmRleH0gLz5dXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IFsuLi5wcmUsIGN1cl0sXG5cdFx0XHRcdFx0XHRcdFtdXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZUNvdW50ZXIoKTogdm9pZCB7XG5cdFx0XHRDQUwuY291bnRlckN1cnJlbnQrKztcblx0XHRcdGlmIChDQUwuY291bnRlckN1cnJlbnQgPiBDQUwuY291bnRlck5lZWRlZCkge1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlSZXN1bHQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdENBTC4kY291bnRlci50ZXh0KENBTC5jb3VudGVyQ3VycmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgYXN5bmMgZWRpdENhdGVnb3JpZXMoXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0cmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuXHRcdFx0bWFya2VkTGFiZWw6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPlswXSxcblx0XHRcdHRhcmdldENhdGVnb3J5OiBzdHJpbmcsXG5cdFx0XHRtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJyB8ICdyZW1vdmUnXG5cdFx0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHRjb25zdCBbbWFya2VkTGFiZWxUaXRsZSwgJG1hcmtlZExhYmVsXSA9IG1hcmtlZExhYmVsO1xuXG5cdFx0XHRpZiAoIXJlc3VsdD8uWydxdWVyeSddKSB7XG5cdFx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3JbQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGhdID0gbWFya2VkTGFiZWxUaXRsZTtcblx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bGV0IG9yaWdpblRleHQ6IHN0cmluZyA9ICcnO1xuXHRcdFx0bGV0IHN0YXJ0dGltZXN0YW1wOiBudW1iZXIgPSAwO1xuXHRcdFx0bGV0IHRpbWVzdGFtcDogbnVtYmVyID0gMDtcblx0XHRcdENBTC5lZGl0VG9rZW4gPSByZXN1bHRbJ3F1ZXJ5J10udG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGNvbnN0IHtwYWdlc30gPSByZXN1bHRbJ3F1ZXJ5J107XG5cblx0XHRcdGNvbnN0IFtwYWdlXSA9IHBhZ2VzO1xuXHRcdFx0b3JpZ2luVGV4dCA9IHBhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnQ7XG5cdFx0XHQoe3N0YXJ0dGltZXN0YW1wfSA9IHBhZ2UpO1xuXHRcdFx0W3t0aW1lc3RhbXB9XSA9IHBhZ2UucmV2aXNpb25zO1xuXG5cdFx0XHRjb25zdCBzb3VyY2VjYXQ6IHN0cmluZyA9IENBTC5DVVJSRU5UX0NBVEVHUk9ZO1xuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhhdCBmaWxlIGlzIGFscmVhZHkgaW4gdGhhdCBjYXRlZ29yeVxuXHRcdFx0Y29uc3QgdGFyZ2VSZWdFeHAgPSBhd2FpdCBDQUwucmVnZXhCdWlsZGVyKHRhcmdldENhdGVnb3J5KTtcblx0XHRcdGlmIChtb2RlICE9PSAncmVtb3ZlJyAmJiB0YXJnZVJlZ0V4cC50ZXN0KG9yaWdpblRleHQpICYmIG1vZGUgIT09ICdtb3ZlJykge1xuXHRcdFx0XHRDQUwuYWxyZWFkeVRoZXJlW0NBTC5hbHJlYWR5VGhlcmUubGVuZ3RoXSA9IG1hcmtlZExhYmVsVGl0bGU7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpeCB0ZXh0XG5cdFx0XHRsZXQgdGV4dDogc3RyaW5nID0gb3JpZ2luVGV4dDtcblx0XHRcdGxldCBzdW1tYXJ5OiBzdHJpbmc7XG5cdFx0XHRjb25zdCBzb3VyY2VDYXRSZWdFeHAgPSBhd2FpdCBDQUwucmVnZXhCdWlsZGVyKHNvdXJjZWNhdCk7XG5cdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnYWRkJzpcblx0XHRcdFx0XHR0ZXh0ICs9IGBcXG5bWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX1dXVxcbmA7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktYWRkJykucmVwbGFjZSgnJDEnLCB0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NvcHknOlxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRzb3VyY2VDYXRSZWdFeHAsXG5cdFx0XHRcdFx0XHRgW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7c291cmNlY2F0fSQxXV1cXG5bWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX0kMV1dYFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktY29weScpLnJlcGxhY2UoJyQxJywgc291cmNlY2F0KS5yZXBsYWNlKCckMicsIHRhcmdldENhdGVnb3J5KTtcblx0XHRcdFx0XHQvLyBJZiBjYXRlZ29yeSBpcyBhZGRlZCB0aHJvdWdoIHRlbXBsYXRlOlxuXHRcdFx0XHRcdGlmIChvcmlnaW5UZXh0ID09PSB0ZXh0KSB7XG5cdFx0XHRcdFx0XHR0ZXh0ICs9IGBcXG5bWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX1dXWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtb3ZlJzpcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKHNvdXJjZUNhdFJlZ0V4cCwgYFtbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fSQxXV1gKTtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1tb3ZlJykucmVwbGFjZSgnJDEnLCBzb3VyY2VjYXQpLnJlcGxhY2UoJyQyJywgdGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZW1vdmUnOlxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2Uoc291cmNlQ2F0UmVnRXhwLCAnJyk7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktcmVtb3ZlJykucmVwbGFjZSgnJDEnLCBzb3VyY2VjYXQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGV4dCA9PT0gb3JpZ2luVGV4dCkge1xuXHRcdFx0XHRDQUwubm90Rm91bmRbQ0FMLm5vdEZvdW5kLmxlbmd0aF0gPSBtYXJrZWRMYWJlbFRpdGxlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmUgdW5jYXQgYWZ0ZXIgd2UgY2hlY2tlZCB3aGV0aGVyIHdlIGNoYW5nZWQgdGhlIHRleHQgc3VjY2Vzc2Z1bGx5LlxuXHRcdFx0Ly8gT3RoZXJ3aXNlIHdlIG1pZ2h0IGZhaWwgdG8gZG8gdGhlIGNoYW5nZXMsIGJ1dCBzdGlsbCByZXBsYWNlIHt7dW5jYXR9fVxuXHRcdFx0aWYgKG1vZGUgIT09ICdyZW1vdmUnKSB7XG5cdFx0XHRcdHRleHQgPSBDQUwuZG9DbGVhbnVwKENBTC5yZW1vdmVVbmNhdCh0ZXh0KSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0dG9rZW46IENBTC5lZGl0VG9rZW4sXG5cdFx0XHRcdFx0dGFnczogQ0FMLkFQSV9UQUcsXG5cdFx0XHRcdFx0dGl0bGU6IG1hcmtlZExhYmVsVGl0bGUsXG5cdFx0XHRcdFx0YXNzZXJ0OiAndXNlcicsXG5cdFx0XHRcdFx0Ym90OiB0cnVlLFxuXHRcdFx0XHRcdGJhc2V0aW1lc3RhbXA6IHRpbWVzdGFtcCBhcyB1bmtub3duIGFzIHN0cmluZyxcblx0XHRcdFx0XHR3YXRjaGxpc3Q6IENBTC5zZXR0aW5ncy53YXRjaGxpc3QgYXMgbmV2ZXIsXG5cdFx0XHRcdFx0dGV4dCxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdHN0YXJ0dGltZXN0YW1wOiBzdGFydHRpbWVzdGFtcCBhcyB1bmtub3duIGFzIHN0cmluZyxcblx0XHRcdFx0fSxcblx0XHRcdFx0KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0XHRDQUwubWFya0FzRG9uZSgkbWFya2VkTGFiZWwsIHRhcmdldENhdGVnb3J5LCBtb2RlKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRDb250ZW50KFxuXHRcdFx0bWFya2VkTGFiZWw6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPlswXSxcblx0XHRcdHRhcmdldENhdGVnb3J5OiBzdHJpbmcsXG5cdFx0XHRtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJ1xuXHRcdCk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdFx0dGl0bGVzOiBtYXJrZWRMYWJlbFswXSxcblx0XHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50XG5cdFx0XHRcdFx0dm9pZCB0aGlzLmVkaXRDYXRlZ29yaWVzKHJlc3VsdCwgbWFya2VkTGFiZWwsIHRhcmdldENhdGVnb3J5LCBtb2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZ2V0VGl0bGVGcm9tTGluayhocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIChkZWNvZGVVUklDb21wb25lbnQoaHJlZiA/PyAnJykubWF0Y2goL3dpa2lcXC8oLis/KSg/OiMuKyk/JC8pPy5bMV0gPz8gJycpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0TWFya2VkTGFiZWxzKCk6IFtzdHJpbmcsIEpRdWVyeV1bXSB7XG5cdFx0XHRjb25zdCBtYXJrZWRMYWJlbHM6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPiA9IFtdO1xuXHRcdFx0Q0FMLiRzZWxlY3RlZExhYmVscyA9IENBTC4kbGFiZWxzLmZpbHRlcihgLiR7Q0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRH1gKTtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMuZWFjaCgoX2luZGV4LCBsYWJlbCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCAkbGFiZWw6IEpRdWVyeSA9ICQobGFiZWwpO1xuXHRcdFx0XHRjb25zdCAkbGFiZWxMaW5rOiBKUXVlcnkgPSAkbGFiZWwuZmluZCgnYVt0aXRsZV0nKTtcblx0XHRcdFx0Y29uc3QgdGl0bGU6IHN0cmluZyA9XG5cdFx0XHRcdFx0JGxhYmVsTGluay5hdHRyKCd0aXRsZScpPy50cmltKCkgfHxcblx0XHRcdFx0XHRDQUwuZ2V0VGl0bGVGcm9tTGluaygkbGFiZWxMaW5rLmF0dHIoJ2hyZWYnKSkgfHxcblx0XHRcdFx0XHRDQUwuZ2V0VGl0bGVGcm9tTGluaygkbGFiZWwuZmluZCgnYScpLmF0dHIoJ2hyZWYnKSk7XG5cdFx0XHRcdG1hcmtlZExhYmVsc1ttYXJrZWRMYWJlbHMubGVuZ3RoXSA9IFt0aXRsZSwgJGxhYmVsXTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIG1hcmtlZExhYmVscztcblx0XHR9XG5cdFx0cHJpdmF0ZSBzaG93UHJvZ3Jlc3MoKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcyh7XG5cdFx0XHRcdGN1cnNvcjogJ3dhaXQnLFxuXHRcdFx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXG5cdFx0XHR9KTtcblx0XHRcdENBTC4kcHJvZ3Jlc3NEaWFsb2cgPSAkKFxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdHtDQUwubXNnKCdlZGl0aW5nJyl9XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUn0+e0NBTC5jb3VudGVyQ3VycmVudH08L3NwYW4+XG5cdFx0XHRcdFx0e1tDQUwubXNnKCdvZicpLCBDQUwuY291bnRlck5lZWRlZF19XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KS5kaWFsb2coe1xuXHRcdFx0XHRkaWFsb2dDbGFzczogQ0xBU1NfTkFNRV9GRUVEQkFDSyxcblx0XHRcdFx0bWluSGVpZ2h0OiA5MCxcblx0XHRcdFx0aGVpZ2h0OiA5MCxcblx0XHRcdFx0d2lkdGg6IDQ1MCxcblx0XHRcdFx0bW9kYWw6IHRydWUsXG5cdFx0XHRcdGNsb3NlT25Fc2NhcGU6IGZhbHNlLFxuXHRcdFx0XHRkcmFnZ2FibGU6IGZhbHNlLFxuXHRcdFx0XHRyZXNpemFibGU6IGZhbHNlLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLiRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUVfRkVFREJBQ0t9IC51aS1kaWFsb2ctdGl0bGViYXJgKS5oaWRlKCk7XG5cdFx0XHR0aGlzLiRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUVfRkVFREJBQ0t9IC51aS1kaWFsb2ctY29udGVudGApLmhlaWdodCgnYXV0bycpO1xuXHRcdFx0Q0FMLiRjb3VudGVyID0gdGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUn1gKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBkb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeTogc3RyaW5nLCBtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJyk6IHZvaWQge1xuXHRcdFx0Y29uc3QgbWFya2VkTGFiZWxzOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz4gPSB0aGlzLmdldE1hcmtlZExhYmVscygpO1xuXHRcdFx0aWYgKCFtYXJrZWRMYWJlbHMubGVuZ3RoKSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KENBTC5tc2coJ25vbmUtc2VsZWN0ZWQnKSwge1xuXHRcdFx0XHRcdHRhZzogJ2NhdEFMb3QnLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Q0FMLmFscmVhZHlUaGVyZSA9IFtdO1xuXHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvciA9IFtdO1xuXHRcdFx0Q0FMLm5vdEZvdW5kID0gW107XG5cdFx0XHRDQUwuY291bnRlckN1cnJlbnQgPSAxO1xuXHRcdFx0Q0FMLmNvdW50ZXJOZWVkZWQgPSBtYXJrZWRMYWJlbHMubGVuZ3RoO1xuXHRcdFx0dGhpcy5zaG93UHJvZ3Jlc3MoKTtcblx0XHRcdGZvciAoY29uc3QgbWFya2VkTGFiZWwgb2YgbWFya2VkTGFiZWxzKSB7XG5cdFx0XHRcdHRoaXMuZ2V0Q29udGVudChtYXJrZWRMYWJlbCwgdGFyZ2V0Q2F0ZWdvcnksIG1vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIGFkZEhlcmUodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeSwgJ2FkZCcpO1xuXHRcdH1cblx0XHRwcml2YXRlIGNvcHlIZXJlKHRhcmdldENhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnksICdjb3B5Jyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgbW92ZUhlcmUodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeSwgJ21vdmUnKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBjcmVhdGVDYXRMaW5rcyhzeW1ib2w6IHN0cmluZywgY2F0ZWdvcmllczogc3RyaW5nW10pOiB2b2lkIHtcblx0XHRcdGNhdGVnb3JpZXMuc29ydCgpO1xuXHRcdFx0Zm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0XHRcdGNvbnN0ICR0ciA9ICQoXG5cdFx0XHRcdFx0PHRyIGRhdGFzZXQ9e3tjYXRlZ29yeX19PlxuXHRcdFx0XHRcdFx0PHRkPntzeW1ib2x9PC90ZD5cblx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cygkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3J5fVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdCk7XG5cdFx0XHRcdC8vIENhbid0IG1vdmUgdG8gc291cmNlIGNhdGVnb3J5XG5cdFx0XHRcdGlmIChjYXRlZ29yeSAhPT0gQ0FMLkNVUlJFTlRfQ0FURUdST1kgJiYgQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRcdCR0ci5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5hZGRIZXJlKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnYWRkJyl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIGlmIChjYXRlZ29yeSAhPT0gQ0FMLkNVUlJFTlRfQ0FURUdST1kgJiYgIUNBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0XHQkdHIuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT059XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNvcHlIZXJlKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnY29weScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT059XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm1vdmVIZXJlKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbW92ZScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5maW5kKCd0YWJsZScpLmFwcGVuZCgkdHIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIHNob3dDYXRlZ29yeUxpc3QoKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcygnY3Vyc29yJywgJycpO1xuXHRcdFx0Y29uc3QgY3VycmVudENhdGVnb3JpZXM6IHN0cmluZ1tdID0gW0NBTC5jdXJyZW50Q2F0ZWdvcnldO1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5lbXB0eSgpO1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5hcHBlbmQoPHRhYmxlIC8+KTtcblx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkScsIENBTC5wYXJlbnRDYXRzKTtcblx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkicsIGN1cnJlbnRDYXRlZ29yaWVzKTtcblx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkycsIENBTC5zdWJDYXRzKTtcblx0XHRcdC8vIFJlc2V0IHdpZHRoXG5cdFx0XHR0aGlzLiRjb250YWluZXIud2lkdGgoJycpO1xuXHRcdFx0dGhpcy4kY29udGFpbmVyLmhlaWdodCgnJyk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIud2lkdGgoTWF0aC5taW4oKHRoaXMuJGNvbnRhaW5lci53aWR0aCgpID8/IDApICogMS4xICsgMTUsICgkKHdpbmRvdykud2lkdGgoKSA/PyAwKSAtIDEwKSk7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmNzcyh7XG5cdFx0XHRcdCdtYXgtaGVpZ2h0JzogYCR7Q0FMLmRpYWxvZ0hlaWdodH1weGAsXG5cdFx0XHRcdGhlaWdodDogJycsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRQYXJlbnRDYXRzKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0dGl0bGVzOiBgQ2F0ZWdvcnk6JHtDQUwuY3VycmVudENhdGVnb3J5fWAsXG5cdFx0XHRcdFx0cHJvcDogJ2NhdGVnb3JpZXMnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Q0FMLnBhcmVudENhdHMgPSBbXTtcblx0XHRcdFx0XHRjb25zdCB7cGFnZXN9ID0gcmVzdWx0LnF1ZXJ5O1xuXHRcdFx0XHRcdGlmIChwYWdlc1swXT8ubWlzc2luZykge1xuXHRcdFx0XHRcdFx0dGhpcy4kYm9keS5jc3MoJ2N1cnNvcicsICcnKTtcblx0XHRcdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuaHRtbChcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkR9PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdjYXQtbm90LWZvdW5kJyl9XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpInLCBbQ0FMLmN1cnJlbnRDYXRlZ29yeV0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsZXQgY2F0ZWdvcmllczoge3RpdGxlOiBzdHJpbmd9W10gPSBbXTtcblx0XHRcdFx0XHRbe2NhdGVnb3JpZXN9XSA9IHBhZ2VzO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcblx0XHRcdFx0XHRcdENBTC5wYXJlbnRDYXRzW0NBTC5wYXJlbnRDYXRzLmxlbmd0aF0gPSBjYXQudGl0bGUucmVwbGFjZSgvXlteOl0rOi8sICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Q0FMLmNvdW50ZXJDYXQrKztcblx0XHRcdFx0XHRpZiAoQ0FMLmNvdW50ZXJDYXQgPT09IDIpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2hvd0NhdGVnb3J5TGlzdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRTdWJDYXRzKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0bGlzdDogJ2NhdGVnb3J5bWVtYmVycycsXG5cdFx0XHRcdFx0Y210eXBlOiAnc3ViY2F0Jyxcblx0XHRcdFx0XHRjbWxpbWl0OiBDQUwuc2V0dGluZ3Muc3ViY2F0Y291bnQgYXMgbmV2ZXIsXG5cdFx0XHRcdFx0Y210aXRsZTogYENhdGVnb3J5OiR7Q0FMLmN1cnJlbnRDYXRlZ29yeX1gLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgY2F0czoge3RpdGxlOiBzdHJpbmd9W10gPSByZXN1bHQ/LnF1ZXJ5Py5jYXRlZ29yeW1lbWJlcnMgfHwgW107XG5cdFx0XHRcdFx0Q0FMLnN1YkNhdHMgPSBbXTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGNhdCBvZiBjYXRzKSB7XG5cdFx0XHRcdFx0XHRDQUwuc3ViQ2F0c1tDQUwuc3ViQ2F0cy5sZW5ndGhdID0gY2F0LnRpdGxlLnJlcGxhY2UoL15bXjpdKzovLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdENBTC5jb3VudGVyQ2F0Kys7XG5cdFx0XHRcdFx0aWYgKENBTC5jb3VudGVyQ2F0ID09PSAyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNob3dDYXRlZ29yeUxpc3QoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0Q2F0ZWdvcnlMaXN0KCk6IHZvaWQge1xuXHRcdFx0Q0FMLmNvdW50ZXJDYXQgPSAwO1xuXHRcdFx0dGhpcy5nZXRQYXJlbnRDYXRzKCk7XG5cdFx0XHR0aGlzLmdldFN1YkNhdHMoKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSB1cGRhdGVDYXRzKGNhdDogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcblx0XHRcdENBTC5jdXJyZW50Q2F0ZWdvcnkgPSBjYXQ7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0Lmh0bWwoPGRpdj57Q0FMLm1zZygnbG9hZGluZycpfTwvZGl2Pik7XG5cdFx0XHR0aGlzLmdldENhdGVnb3J5TGlzdCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZmluZEFsbExhYmVscygpOiB2b2lkIHtcblx0XHRcdC8vIEl0J3MgcG9zc2libGUgdG8gYWxsb3cgYW55IGtpbmQgb2YgcGFnZXMgYXMgd2VsbCBidXQgd2hhdCBoYXBwZW5zIGlmIHlvdSBjbGljayBvbiBcInNlbGVjdCBhbGxcIiBhbmQgZG9uJ3QgZXhwZWN0IGl0XG5cdFx0XHRpZiAoQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRDQUwuJGxhYmVscyA9IHRoaXMuJGJvZHkuZmluZCgndGFibGUuc2VhcmNoUmVzdWx0SW1hZ2UnKS5maW5kKCd0cj50ZCcpLmVxKDEpO1xuXHRcdFx0XHRpZiAoQ0FMLnNldHRpbmdzLmVkaXRwYWdlcykge1xuXHRcdFx0XHRcdENBTC4kbGFiZWxzID0gQ0FMLiRsYWJlbHMuYWRkKCdkaXYubXctc2VhcmNoLXJlc3VsdC1oZWFkaW5nJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdENBTC4kbGFiZWxzID0gdGhpcy4kYm9keVxuXHRcdFx0XHRcdC5maW5kKCdkaXYuZ2FsbGVyeXRleHQnKVxuXHRcdFx0XHRcdC5hZGQodGhpcy4kYm9keS5maW5kKCdkaXYjbXctY2F0ZWdvcnktbWVkaWEnKS5maW5kKCdsaVtjbGFzcyE9XCJnYWxsZXJ5Ym94XCJdJykpO1xuXHRcdFx0XHRpZiAoQ0FMLnNldHRpbmdzLmVkaXRwYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0ICRwYWdlczogSlF1ZXJ5PEhUTUxMSUVsZW1lbnQ+ID0gdGhpcy4kYm9keVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2RpdiNtdy1wYWdlcywgZGl2I213LXN1YmNhdGVnb3JpZXMnKVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2xpJyk7XG5cdFx0XHRcdFx0Q0FMLiRsYWJlbHMgPSBDQUwuJGxhYmVscy5hZGQoJHBhZ2VzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIG1ha2VDbGlja2FibGUoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmZpbmRBbGxMYWJlbHMoKTtcblx0XHRcdENBTC4kbGFiZWxzLmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUwpLm9uQ2F0QUxvdFNoaWZ0Q2xpY2soKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR0aGlzLnVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgcnVuKCk6IHZvaWQge1xuXHRcdFx0aWYgKHRoaXMuJGxpbmsuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQpKSB7XG5cdFx0XHRcdHRoaXMubWFrZUNsaWNrYWJsZSgpO1xuXHRcdFx0XHR0aGlzLiRkYXRhQ29udGFpbmVyLnNob3coKTtcblx0XHRcdFx0dGhpcy4kY29udGFpbmVyLnJlc2l6YWJsZSh7XG5cdFx0XHRcdFx0YWxzb1Jlc2l6ZTogdGhpcy4kcmVzdWx0TGlzdCxcblx0XHRcdFx0XHRoYW5kbGVzOiAnbicsXG5cdFx0XHRcdFx0cmVzaXplOiAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0ICRjdXJyZW50VGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdCRjdXJyZW50VGFyZ2V0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdGxlZnQ6ICcnLFxuXHRcdFx0XHRcdFx0XHR0b3A6ICcnLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRDQUwuZGlhbG9nSGVpZ2h0ID0gJGN1cnJlbnRUYXJnZXQuaGVpZ2h0KCkgPz8gQ0FMLmRpYWxvZ0hlaWdodDtcblx0XHRcdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuY3NzKHtcblx0XHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiAnJyxcblx0XHRcdFx0XHRcdFx0d2lkdGg6ICcnLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuY3NzKCdtYXgtaGVpZ2h0JywgJzQ1MHB4Jyk7XG5cdFx0XHRcdGlmIChDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKCdQaWN0dXJlcyBhbmQgaW1hZ2VzJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVDYXRzKENBTC5DVVJSRU5UX0NBVEVHUk9ZKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy4kZGF0YUNvbnRhaW5lci5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuJGNvbnRhaW5lci5yZXNpemFibGUoJ2Rlc3Ryb3knKTtcblx0XHRcdFx0dGhpcy4kY29udGFpbmVyLmNzcygnd2lkdGgnLCAnJyk7XG5cdFx0XHRcdENBTC4kbGFiZWxzLm9mZignY2xpY2suY2F0QUxvdCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChcblx0XHQod2dOYW1lc3BhY2VOdW1iZXIgPT09IC0xICYmIHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lID09PSAnU2VhcmNoJykgfHxcblx0XHR3Z05hbWVzcGFjZU51bWJlciA9PT0gT1BUSU9OUy50YXJnZXROYW1lc3BhY2Vcblx0KSB7XG5cdFx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAtMSkge1xuXHRcdFx0Q0FMLmlzU2VhcmNoTW9kZSA9IHRydWU7XG5cdFx0fVxuXHRcdC8qISBDYXQtYS1sb3QgbWVzc2FnZXMgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cblx0XHRzZXRNZXNzYWdlcygpO1xuXHRcdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdFx0bmV3IENBTCgkYm9keSkuYnVpbGRFbGVtZW50cygpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2NhdEFMb3R9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQ2F0LWEtbG90LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgbWVkaWF3aWtpL2NsYXNzLWRvYyAqL1xuaW1wb3J0IHtDTEFTU19OQU1FX0xBQkVMLCBDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQsIENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUR9IGZyb20gJy4vY29uc3RhbnQnO1xuXG50eXBlIE9uQ2F0QUxvdFNoaWZ0Q2xpY2sgPSAodGhpczogSlF1ZXJ5LCBjYWxsYmFjazogKCkgPT4gdW5rbm93bikgPT4gSlF1ZXJ5O1xuZGVjbGFyZSBnbG9iYWwge1xuXHRpbnRlcmZhY2UgSlF1ZXJ5IHtcblx0XHRvbkNhdEFMb3RTaGlmdENsaWNrOiBPbkNhdEFMb3RTaGlmdENsaWNrO1xuXHR9XG59XG5cbmNvbnN0IGV4dGVuZEpRdWVyeVByb3RvdHlwZSA9ICgpOiB2b2lkID0+IHtcblx0LyohIGpRdWVyeSBjaGVja2JveFNoaWZ0Q2xpY2sgfCBHUEwtMi4wIDxodHRwczovL3F3YmsuY2MvSDpHUEw+ICovXG5cdCQuZm4uZXh0ZW5kKHtcblx0XHRvbkNhdEFMb3RTaGlmdENsaWNrOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGxldCBwcmV2Q2hlY2tib3g6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblxuXHRcdFx0Ly8gV2hlbiBvdXIgYm94ZXMgYXJlIGNsaWNrZWQuLlxuXHRcdFx0dGhpcy5vbignY2xpY2suY2F0QUxvdCcsIChldmVudDogSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdC8vIFByZXZlbnQgZm9sbG93aW5nIHRoZSBsaW5rIGFuZCB0ZXh0IHNlbGVjdGlvblxuXHRcdFx0XHRpZiAoIWV2ZW50LmN0cmxLZXkpIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSGlnaGxpZ2h0IGxhc3Qgc2VsZWN0ZWRcblx0XHRcdFx0dGhpcy5wYXJlbnRzKCdib2R5Jylcblx0XHRcdFx0XHQuZmluZChgLiR7Q0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEfWApXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCk7XG5cblx0XHRcdFx0bGV0ICR0aGlzQ29udHJvbCA9ICQoZXZlbnQudGFyZ2V0KSBhcyBKUXVlcnk7XG5cdFx0XHRcdGlmICghJHRoaXNDb250cm9sLmhhc0NsYXNzKENMQVNTX05BTUVfTEFCRUwpKSB7XG5cdFx0XHRcdFx0JHRoaXNDb250cm9sID0gJHRoaXNDb250cm9sLnBhcmVudHMoYC4ke0NMQVNTX05BTUVfTEFCRUx9YCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkdGhpc0NvbnRyb2wuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEKS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEKTtcblxuXHRcdFx0XHQvLyBBbmQgb25lIGhhcyBiZWVuIGNsaWNrZWQgYmVmb3JlLi4uXG5cdFx0XHRcdGlmIChwcmV2Q2hlY2tib3ggJiYgZXZlbnQuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHRjb25zdCBtZXRob2Q6ICdhZGRDbGFzcycgfCAncmVtb3ZlQ2xhc3MnID0gJHRoaXNDb250cm9sLmhhc0NsYXNzKENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQpXG5cdFx0XHRcdFx0XHQ/ICdhZGRDbGFzcydcblx0XHRcdFx0XHRcdDogJ3JlbW92ZUNsYXNzJztcblx0XHRcdFx0XHQvLyBDaGVjayBvciB1bmNoZWNrIHRoaXMgb25lIGFuZCBhbGwgaW4tYmV0d2VlbiBjaGVja2JveGVzXG5cdFx0XHRcdFx0dGhpcy5zbGljZShcblx0XHRcdFx0XHRcdE1hdGgubWluKHRoaXMuaW5kZXgocHJldkNoZWNrYm94KSwgdGhpcy5pbmRleCgkdGhpc0NvbnRyb2wpKSxcblx0XHRcdFx0XHRcdE1hdGgubWF4KHRoaXMuaW5kZXgocHJldkNoZWNrYm94KSwgdGhpcy5pbmRleCgkdGhpc0NvbnRyb2wpKSArIDFcblx0XHRcdFx0XHQpW21ldGhvZF0oQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gRWl0aGVyIHdheSwgdXBkYXRlIHRoZSBwcmV2Q2hlY2tib3ggdmFyaWFibGUgdG8gdGhlIG9uZSBjbGlja2VkIG5vd1xuXHRcdFx0XHRwcmV2Q2hlY2tib3ggPSAkdGhpc0NvbnRyb2w7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IGFzIE9uQ2F0QUxvdFNoaWZ0Q2xpY2ssXG5cdH0pO1xufTtcblxuZXhwb3J0IHtleHRlbmRKUXVlcnlQcm90b3R5cGV9O1xuIiwgImltcG9ydCB7Y2F0QUxvdH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtleHRlbmRKUXVlcnlQcm90b3R5cGV9IGZyb20gJy4vbW9kdWxlcy9leHRlbmRKUXVlcnlQcm90b3R5cGUnO1xuXG4vKiEgalF1ZXJ5IGNoZWNrYm94U2hpZnRDbGljayB8IEdQTC0yLjAgPGh0dHBzOi8vcXdiay5jYy9IOkdQTD4gKi9cbmV4dGVuZEpRdWVyeVByb3RvdHlwZSgpO1xuLyohIENhdC1hLWxvdCB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuY2F0QUxvdCgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsU0FBVTtBQUNWLElBQUFDLGtCQUFtQjtBQUNuQixJQUFBQyxVQUFXOztBQ0FaLElBQU1DLGFBQXFCO0FBQzNCLElBQU1DLHVCQUFBLEdBQUFDLE9BQWtDRixZQUFVLFlBQUE7QUFDbEQsSUFBTUcsNEJBQUEsR0FBQUQsT0FBdUNELHNCQUFvQixRQUFBO0FBQ2pFLElBQU1HLDBDQUFBLEdBQUFGLE9BQXFEQywyQkFBeUIsaUJBQUE7QUFDcEYsSUFBTUUsaURBQUEsR0FBQUgsT0FBNERFLHlDQUF1QyxVQUFBO0FBQ3pHLElBQU1FLG1EQUFBLEdBQUFKLE9BQThERSx5Q0FBdUMs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LE9BQU9ySixhQUFhLFlBQVk7QUFDbkNBLG1CQUFTO1FBQ1Y7TUFDRCxDQUFDO0FBRUQsYUFBTztJQUNSO0VBQ0QsQ0FBQztBQUNGOztBQ3REQTtBQUNBNkksc0JBQXNCO0FBQ3RCO0FBQ0FwVSxRQUFROyIsCiAgIm5hbWVzIjogWyJhcGlUYWciLCAidGFyZ2V0TmFtZXNwYWNlIiwgInZlcnNpb24iLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUiIsICJjb25jYXQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTiIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEIiwgIkNMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSIiwgIkNMQVNTX05BTUVfRkVFREJBQ0siLCAiQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FIiwgIkNMQVNTX05BTUVfTEFCRUwiLCAiQ0xBU1NfTkFNRV9MQUJFTF9ET05FIiwgIkNMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCIsICJDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEIiwgIkRFRkFVTFRfU0VUVElORyIsICJkb2NsZWFudXAiLCAiZGVmYXVsdCIsICJsYWJlbF9pMThuIiwgImVkaXRwYWdlcyIsICJtaW5vciIsICJzdWJjYXRjb3VudCIsICJ3YXRjaGxpc3QiLCAic2VsZWN0X2kxOG4iLCAid2F0Y2hfbm9jaGFuZ2UiLCAid2F0Y2hfcHJlZiIsICJ3YXRjaF91bndhdGNoIiwgIndhdGNoX3dhdGNoIiwgIlZBUklBTlRTIiwgIndnVXNlckxhbmd1YWdlIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiREVGQVVMVF9NRVNTQUdFUyIsICJzZXRNZXNzYWdlcyIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJzZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dUaXRsZSIsICJjYXRBTG90IiwgIkNBTCIsICJpc1NlYXJjaE1vZGUiLCAiTUVTU0FHRVMiLCAiQVBJX1RBRyIsICJUQVJHRVRfTkFNRVNQQUNFIiwgIkNVUlJFTlRfQ0FURUdST1kiLCAiaXNBdXRvQ29tcGxldGVJbml0IiwgImFscmVhZHlUaGVyZSIsICJjb25uZWN0aW9uRXJyb3IiLCAibm90Rm91bmQiLCAiY291bnRlckN1cnJlbnQiLCAiY291bnRlck5lZWRlZCIsICJjb3VudGVyQ2F0IiwgImN1cnJlbnRDYXRlZ29yeSIsICJkaWFsb2dIZWlnaHQiLCAiZWRpdFRva2VuIiwgImxvY2FsQ2F0TmFtZSIsICJwYXJlbnRDYXRzIiwgInN1YkNhdHMiLCAic2V0dGluZ3MiLCAidmFyaWFudENhY2hlIiwgInZhcmlhbnRDYWNoZTIiLCAiJGNvdW50ZXIiLCAiJCIsICIkcHJvZ3Jlc3NEaWFsb2ciLCAiJGxhYmVscyIsICIkc2VsZWN0ZWRMYWJlbHMiLCAiJGJvZHkiLCAiJGNvbnRhaW5lciIsICIkZGF0YUNvbnRhaW5lciIsICIkbWFya0NvdW50ZXIiLCAiJHJlc3VsdExpc3QiLCAiJHNlYXJjaElucHV0IiwgIiRoZWFkIiwgIiRsaW5rIiwgImNvbnN0cnVjdG9yIiwgIl9tdyR1dGlsJGdldFBhcmFtVmFsdSIsICJtc2ciLCAiaW5pdFNldHRpbmdzIiwgImNvbnRhaW5lciIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJwbGFjZWhvbGRlciIsICJ0eXBlIiwgInZhbHVlIiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJvbktleURvd24iLCAiZXZlbnQiLCAiJGVsZW1lbnQiLCAiY3VycmVudFRhcmdldCIsICJrZXkiLCAiXyRlbGVtZW50JHZhbCR0cmltIiwgIl8kZWxlbWVudCR2YWwiLCAiY2F0IiwgInZhbCIsICJ0cmltIiwgInVwZGF0ZUNhdHMiLCAib25DbGljayIsICJ0b2dnbGVBbGwiLCAiYXBwZW5kVG8iLCAiZmluZCIsICJidWlsZEVsZW1lbnRzIiwgInJlZ2V4Q2F0IiwgIlJlZ0V4cCIsICJsb2NhbGl6ZWRSZWdleCIsICJvbiIsICJvbGRWYWwiLCAibmV3VmFsIiwgInJlcGxhY2UiLCAiaW5pdEF1dG9jb21wbGV0ZSIsICJhdXRvY29tcGxldGUiLCAic291cmNlIiwgInJlcXVlc3QiLCAicmVzcG9uc2UiLCAiZG9BUElDYWxsIiwgImFjdGlvbiIsICJuYW1lc3BhY2UiLCAicmVkaXJlY3RzIiwgInNlYXJjaCIsICJ0ZXJtIiwgInJlc3VsdCIsICJtYXAiLCAiX2luZGV4IiwgIml0ZW0iLCAicG9zaXRpb24iLCAibXkiLCAiYXQiLCAib2YiLCAidG9nZ2xlQ2xhc3MiLCAicnVuIiwgIl93aW5kb3ckQ2F0QUxvdFByZWZzIiwgImNhdEFMb3RQcmVmcyIsICJ3aW5kb3ciLCAiQ2F0QUxvdFByZWZzIiwgInR5cGVPZkNhdEFMb3RQcmVmcyIsICJBcnJheSIsICJpc0FycmF5IiwgIl9pIiwgIl9PYmplY3Qka2V5cyIsICJPYmplY3QiLCAia2V5cyIsICJsZW5ndGgiLCAiX2NhdEFMb3RQcmVmcyRzZXR0aW5nIiwgInNldHRpbmdLZXkiLCAic2V0dGluZyIsICJzZWxlY3QiLCAiX2kyIiwgIl9PYmplY3Qka2V5czIiLCAibWVzc2FnZUtleSIsICJtZXNzYWdlIiwgImFyZ3MiLCAiZnVsbEtleSIsICJwYXJzZSIsICJwbGFpbiIsICJuYW1lc3BhY2VOdW1iZXIiLCAiZmFsbGJhY2siLCAiX0NBTCR3Z0Zvcm1hdHRlZE5hbWVzIiwgIndpa2lUZXh0QmxhbmsiLCAiU3RyaW5nIiwgInJhdyIsICJfdGVtcGxhdGVPYmplY3QiLCAiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsICJ3aWtpVGV4dEJsYW5rUkUiLCAiY3JlYXRlUmVnZXhTdHIiLCAibmFtZSIsICJyZWdleE5hbWUiLCAiaSIsICJpbml0aWFsIiwgInNsaWNlIiwgImxsIiwgInRvTG93ZXJDYXNlIiwgInVsIiwgInRvVXBwZXJDYXNlIiwgIl90ZW1wbGF0ZU9iamVjdDIiLCAiY2Fub25pY2FsIiwgInJlZ2V4U3RyaW5nIiwgIl9pMyIsICJfT2JqZWN0JGtleXMzIiwgImNhdE5hbWUiLCAidXBkYXRlU2VsZWN0aW9uQ291bnRlciIsICJmaWx0ZXIiLCAic2hvdyIsICJodG1sIiwgInRvU3RyaW5nIiwgImZpbmRBbGxWYXJpYW50cyIsICJjYXRlZ29yeSIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJfQ0FMJHZhcmlhbnRDYWNoZSIsICJfQ0FMJHZhcmlhbnRDYWNoZSRjYXQiLCAicmVzdWx0cyIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGV4dCIsICJ0aXRsZSIsICJfaTQiLCAiX1ZBUklBTlRTIiwgIl9PYmplY3QkZ2V0T3duUHJvcGVydCIsICJ2YXJpYW50IiwgInJlc3VsdDIiLCAiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwgImVxIiwgImRlZmluZVByb3BlcnR5IiwgInVuaXF1ZUFycmF5IiwgInJlZ2V4QnVpbGRlciIsICJ2YXJpYW50cyIsICJ2YXJpYW50UmVnRXhwcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJlc2NhcGVSZWdFeHAiLCAiX3RlbXBsYXRlT2JqZWN0MyIsICJmaXJzdCIsICJlcnIiLCAiZSIsICJmIiwgImpvaW4iLCAiX3BhcmFtcyIsICJjYWxsYmFjayIsICJkb0NhbGwiLCAiaGFuZGxlRXJyb3IiLCAiZXJyb3IiLCAibG9nIiwgInNldFRpbWVvdXQiLCAidXBkYXRlQ291bnRlciIsICJ0aGVuIiwgImNhdGNoIiwgInBvc3QiLCAibWFya0FzRG9uZSIsICIkbWFya2VkTGFiZWwiLCAidGFyZ2V0Q2F0ZWdvcnkiLCAibW9kZSIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiRnJhZ21lbnQiLCAiZG9DbGVhbnVwIiwgInJlbW92ZVVuY2F0IiwgImRpc3BsYXlSZXN1bHQiLCAiY3NzIiwgImN1cnNvciIsICJvdmVyZmxvdyIsICIkcGFyZW50IiwgInBhcmVudCIsICJyZW1vdmUiLCAicmVkdWNlIiwgInByZSIsICJjdXIiLCAiaW5kZXgiLCAiZWRpdENhdGVnb3JpZXMiLCAibWFya2VkTGFiZWwiLCAiX3RoaXMiLCAibWFya2VkTGFiZWxUaXRsZSIsICJvcmlnaW5UZXh0IiwgInN0YXJ0dGltZXN0YW1wIiwgInRpbWVzdGFtcCIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgInBhZ2VzIiwgInBhZ2UiLCAicmV2aXNpb25zIiwgImNvbnRlbnQiLCAic291cmNlY2F0IiwgInRhcmdlUmVnRXhwIiwgInRlc3QiLCAic3VtbWFyeSIsICJzb3VyY2VDYXRSZWdFeHAiLCAidG9rZW4iLCAidGFncyIsICJhc3NlcnQiLCAiYm90IiwgImJhc2V0aW1lc3RhbXAiLCAiZ2V0Q29udGVudCIsICJtZXRhIiwgInRpdGxlcyIsICJwcm9wIiwgInJ2cHJvcCIsICJnZXRUaXRsZUZyb21MaW5rIiwgImhyZWYiLCAiX2RlY29kZVVSSUNvbXBvbmVudCRtIiwgIl9kZWNvZGVVUklDb21wb25lbnQkbTIiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgIm1hdGNoIiwgImdldE1hcmtlZExhYmVscyIsICJtYXJrZWRMYWJlbHMiLCAiZWFjaCIsICJsYWJlbCIsICJfJGxhYmVsTGluayRhdHRyIiwgIiRsYWJlbCIsICIkbGFiZWxMaW5rIiwgImF0dHIiLCAic2hvd1Byb2dyZXNzIiwgImRpYWxvZyIsICJkaWFsb2dDbGFzcyIsICJtaW5IZWlnaHQiLCAiaGVpZ2h0IiwgIndpZHRoIiwgIm1vZGFsIiwgImNsb3NlT25Fc2NhcGUiLCAiZHJhZ2dhYmxlIiwgInJlc2l6YWJsZSIsICJoaWRlIiwgImRvU29tZXRoaW5nIiwgIm5vdGlmeSIsICJ0YWciLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiYWRkSGVyZSIsICJjb3B5SGVyZSIsICJtb3ZlSGVyZSIsICJjcmVhdGVDYXRMaW5rcyIsICJzeW1ib2wiLCAiY2F0ZWdvcmllcyIsICJzb3J0IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgIiR0ciIsICJkYXRhc2V0IiwgImNsb3Nlc3QiLCAiZGF0YSIsICJzaG93Q2F0ZWdvcnlMaXN0IiwgIl90aGlzJCRjb250YWluZXIkd2lkdCIsICJfJCR3aWR0aCIsICJjdXJyZW50Q2F0ZWdvcmllcyIsICJlbXB0eSIsICJNYXRoIiwgIm1pbiIsICJnZXRQYXJlbnRDYXRzIiwgIl9wYWdlcyQiLCAicXVlcnkiLCAibWlzc2luZyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJnZXRTdWJDYXRzIiwgImxpc3QiLCAiY210eXBlIiwgImNtbGltaXQiLCAiY210aXRsZSIsICJfcmVzdWx0JHF1ZXJ5IiwgImNhdHMiLCAiY2F0ZWdvcnltZW1iZXJzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImdldENhdGVnb3J5TGlzdCIsICJmaW5kQWxsTGFiZWxzIiwgImFkZCIsICIkcGFnZXMiLCAibWFrZUNsaWNrYWJsZSIsICJvbkNhdEFMb3RTaGlmdENsaWNrIiwgImhhc0NsYXNzIiwgImFsc29SZXNpemUiLCAiaGFuZGxlcyIsICJyZXNpemUiLCAiXyRjdXJyZW50VGFyZ2V0JGhlaWdoIiwgIiRjdXJyZW50VGFyZ2V0IiwgImxlZnQiLCAidG9wIiwgIm1heEhlaWdodCIsICJvZmYiLCAiZ2V0Qm9keSIsICJleHRlbmRKUXVlcnlQcm90b3R5cGUiLCAiZm4iLCAiZXh0ZW5kIiwgInByZXZDaGVja2JveCIsICJjdHJsS2V5IiwgInByZXZlbnREZWZhdWx0IiwgInBhcmVudHMiLCAicmVtb3ZlQ2xhc3MiLCAiJHRoaXNDb250cm9sIiwgInRhcmdldCIsICJzaGlmdEtleSIsICJtZXRob2QiLCAibWF4Il0KfQo=
