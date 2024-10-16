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
        originText = page.revisions[0].slots.main.content;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NhdC1hLWxvdC9vcHRpb25zLmpzb24iLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9DYXQtYS1sb3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvY29yZS50c3giLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlLnRzIiwgInNyYy9DYXQtYS1sb3QvQ2F0LWEtbG90LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiYXBpVGFnXCI6IFwiQ2F0LWEtbG90XCIsXG5cdFwidGFyZ2V0TmFtZXNwYWNlXCI6IDE0LFxuXHRcInZlcnNpb25cIjogXCI2LjBcIlxufVxuIiwgIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IHR5cGUge1NldHRpbmd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWNhdF9hX2xvdCc7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tY29udGFpbmVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEE6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9fZGF0YWA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1Q6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19jYXRlZ29yeS1saXN0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT046IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1fX2FjdGlvbmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH0tLW5vLWZvdW5kYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfV9fbWFyay1jb3VudGVyYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlYXJjaC1pbnB1dC1jb250YWluZXJfX2lucHV0YDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX3NlbGVjdGlvbnNgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfV9fYWxsYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9X19ub25lYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSfV9faGVhZGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTks6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUR9X19saW5rYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9LS1lbmFibGVkYDtcbmNvbnN0IENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1jdXJyZW50X2NvdW50ZXJgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDSzogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tZmVlZGJhY2tgO1xuY29uc3QgQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0ZFRURCQUNLfS0tZG9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS1sYWJlbGA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMX0RPTkU6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1kb25lYDtcbmNvbnN0IENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLWxhc3Qtc2VsZWN0ZWRgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9MQUJFTH0tLXNlbGVjdGVkYDtcblxuY29uc3QgREVGQVVMVF9TRVRUSU5HOiBTZXR0aW5nID0ge1xuXHRkb2NsZWFudXA6IHtcblx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHRsYWJlbF9pMThuOiAnZG9jbGVhbnVwcHJlZicsXG5cdH0sXG5cdGVkaXRwYWdlczoge1xuXHRcdGRlZmF1bHQ6IHRydWUsXG5cdFx0bGFiZWxfaTE4bjogJ2VkaXRwYWdlc3ByZWYnLFxuXHR9LFxuXHRtaW5vcjoge1xuXHRcdGRlZmF1bHQ6IGZhbHNlLFxuXHRcdGxhYmVsX2kxOG46ICdtaW5vcnByZWYnLFxuXHR9LFxuXHRzdWJjYXRjb3VudDoge1xuXHRcdGRlZmF1bHQ6IDUwLFxuXHRcdGxhYmVsX2kxOG46ICdzdWJjYXRjb3VudHByZWYnLFxuXHR9LFxuXHR3YXRjaGxpc3Q6IHtcblx0XHRkZWZhdWx0OiAncHJlZmVyZW5jZXMnLFxuXHRcdGxhYmVsX2kxOG46ICd3YXRjaGxpc3RwcmVmJyxcblx0XHRzZWxlY3RfaTE4bjoge1xuXHRcdFx0d2F0Y2hfbm9jaGFuZ2U6ICdub2NoYW5nZScsXG5cdFx0XHR3YXRjaF9wcmVmOiAncHJlZmVyZW5jZXMnLFxuXHRcdFx0d2F0Y2hfdW53YXRjaDogJ3Vud2F0Y2gnLFxuXHRcdFx0d2F0Y2hfd2F0Y2g6ICd3YXRjaCcsXG5cdFx0fSxcblx0fSxcbn07XG5cbmNvbnN0IFZBUklBTlRTOiBzdHJpbmdbXSA9IFsnemgtaGFucycsICd6aC1oYW50JywgJ3poLWNuJywgJ3poLW15JywgJ3poLXNnJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04sXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCxcblx0Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIsXG5cdENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQsXG5cdENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQsXG5cdERFRkFVTFRfU0VUVElORyxcblx0VkFSSUFOVFMsXG59O1xuIiwgImltcG9ydCB0eXBlIHtNZXNzYWdlS2V5fSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgREVGQVVMVF9NRVNTQUdFUyA9IHtcblx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICd7e1BMVVJBTDokMXxPbmUgZmlsZXwkMSBmaWxlc319IHNlbGVjdGVkLicsXG5cdC8vIEFjdGlvbnNcblx0J2NhdC1hLWxvdC1jb3B5JzogJ0NvcHknLFxuXHQnY2F0LWEtbG90LW1vdmUnOiAnTW92ZScsXG5cdCdjYXQtYS1sb3QtYWRkJzogJ0FkZCcsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ1JlbW92ZSBmcm9tIHRoaXMgY2F0ZWdvcnknLFxuXHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAnRW50ZXIgY2F0ZWdvcnkgbmFtZScsXG5cdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ1NlbGVjdCcsXG5cdCdjYXQtYS1sb3QtYWxsJzogJ2FsbCcsXG5cdCdjYXQtYS1sb3Qtbm9uZSc6ICdub25lJyxcblx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ05vIGZpbGVzIHNlbGVjdGVkIScsXG5cdC8vIFByZWZlcmVuY2VzXG5cdCdjYXQtYS1sb3Qtd2F0Y2hsaXN0cHJlZic6ICdXYXRjaGxpc3QgcHJlZmVyZW5jZSBjb25jZXJuaW5nIGZpbGVzIGVkaXRlZCB3aXRoIENhdC1BLUxvdCcsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICdBY2NvcmRpbmcgdG8geW91ciBnZW5lcmFsIHByZWZlcmVuY2VzJyxcblx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICdEbyBub3QgY2hhbmdlIHdhdGNoc3RhdHVzJyxcblx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICdXYXRjaCBwYWdlcyBlZGl0ZWQgd2l0aCBDYXQtQS1Mb3QnLFxuXHQnY2F0LWEtbG90LXdhdGNoX3Vud2F0Y2gnOiAnUmVtb3ZlIHBhZ2VzIHdoaWxlIGVkaXRpbmcgd2l0aCBDYXQtQS1Mb3QgZnJvbSB5b3VyIHdhdGNobGlzdCcsXG5cdCdjYXQtYS1sb3QtbWlub3JwcmVmJzpcblx0XHRcIk1hcmsgZWRpdHMgYXMgbWlub3IgKGlmIHlvdSBnZW5lcmFsbHkgbWFyayB5b3VyIGVkaXRzIGFzIG1pbm9yLCB0aGlzIHdvbid0IGNoYW5nZSBhbnl0aGluZylcIixcblx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ0FsbG93IGNhdGVnb3Jpc2luZyBwYWdlcyAoaW5jbHVkaW5nIGNhdGVnb3JpZXMpIHRoYXQgYXJlIG5vdCBmaWxlcycsXG5cdCdjYXQtYS1sb3QtZG9jbGVhbnVwcHJlZic6ICdSZW1vdmUge3tDaGVjayBjYXRlZ29yaWVzfX0gYW5kIG90aGVyIG1pbm9yIGNsZWFudXAnLFxuXHQnY2F0LWEtbG90LXN1YmNhdGNvdW50cHJlZic6ICdTdWItY2F0ZWdvcmllcyB0byBzaG93IGF0IG1vc3QnLFxuXHQvLyBQcm9ncmVzc1xuXHQnY2F0LWEtbG90LWxvYWRpbmcnOiAnTG9hZGluZy4uLicsXG5cdCdjYXQtYS1sb3QtZWRpdGluZyc6ICdFZGl0aW5nIHBhZ2UnLFxuXHQnY2F0LWEtbG90LW9mJzogJ29mICcsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5Jzpcblx0XHQnVGhlIGZvbGxvd2luZyB7e1BMVVJBTDokMXxwYWdlIHdhc3wkMSBwYWdlcyB3ZXJlfX0gc2tpcHBlZCwgYmVjYXVzZSB0aGUgcGFnZSB3YXMgYWxyZWFkeSBpbiB0aGUgY2F0ZWdvcnk6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLW5vdC1mb3VuZCc6XG5cdFx0J1RoZSBmb2xsb3dpbmcge3tQTFVSQUw6JDF8cGFnZSB3YXN8JDEgcGFnZXMgd2VyZX19IHNraXBwZWQsIGJlY2F1c2UgdGhlIG9sZCBjYXRlZ29yeSBjb3VsZCBub3QgYmUgZm91bmQ6Jyxcblx0J2NhdC1hLWxvdC1za2lwcGVkLXNlcnZlcic6XG5cdFx0XCJUaGUgZm9sbG93aW5nIHt7UExVUkFMOiQxfHBhZ2V8JDEgcGFnZXN9fSBjb3VsZG4ndCBiZSBjaGFuZ2VkLCBzaW5jZSB0aGVyZSB3ZXJlIHByb2JsZW1zIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlcjpcIixcblx0J2NhdC1hLWxvdC1hbGwtZG9uZSc6ICdBbGwgcGFnZXMgYXJlIHByb2Nlc3NlZC4nLFxuXHQnY2F0LWEtbG90LWRvbmUnOiAnRG9uZSEnLFxuXHQnY2F0LWEtbG90LWFkZGVkLWNhdCc6ICdBZGRlZCBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICdDb3BpZWQgdG8gY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LW1vdmVkLWNhdCc6ICdNb3ZlZCB0byBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAnUmVtb3ZlZCBmcm9tIGNhdGVnb3J5ICQxJyxcblx0J2NhdC1hLWxvdC1yZXR1cm4tdG8tcGFnZSc6ICdSZXR1cm4gdG8gcGFnZScsXG5cdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICdDYXRlZ29yeSBub3QgZm91bmQuJyxcblx0Ly8gU3VtbWFyaWVzOlxuXHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IEFkZGluZyBbW0NhdGVnb3J5OiQxXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktY29weSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBDb3B5aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dIHRvIFtbQ2F0ZWdvcnk6JDJdXScsXG5cdCdjYXQtYS1sb3Qtc3VtbWFyeS1tb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IE1vdmluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXSB0byBbW0NhdGVnb3J5OiQyXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV06IFJlbW92aW5nIGZyb20gW1tDYXRlZ29yeTokMV1dJyxcbn0gc2F0aXNmaWVzIFJlY29yZDxNZXNzYWdlS2V5LCBzdHJpbmc+O1xuXG5jb25zdCBzZXRNZXNzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0LyohIENhdC1hLWxvdCBtZXNzYWdlcyB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRpZiAod2dVc2VyTGFuZ3VhZ2UgPT09ICdlbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0PHR5cGVvZiBERUZBVUxUX01FU1NBR0VTPih7XG5cdFx0XHQvLyBhcyBpbiAxNyBmaWxlcyBzZWxlY3RlZFxuXHRcdFx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICckMeWAi+aWh+S7tuW3sumBuOaThycsXG5cdFx0XHQvLyBBY3Rpb25zXG5cdFx0XHQnY2F0LWEtbG90LWNvcHknOiAn6KSH6KO9Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZSc6ICfnp7vli5UnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGQnOiAn5aKe5YqgJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ+W+nuatpOWIhumhnuenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAn6Ly45YWl5YiG6aGe5ZCN56ixJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ+mBuOaThycsXG5cdFx0XHQnY2F0LWEtbG90LWFsbCc6ICflhajpg6gnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lJzogJ+eEoScsXG5cdFx0XHQnY2F0LWEtbG90LW5vbmUtc2VsZWN0ZWQnOiAn5rKS5pyJ6YG45pOH5paH5Lu277yBJyxcblx0XHRcdC8vIFByZWZlcmVuY2VzXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAn5L2/55SoQ2F0LUEtTG9057eo6Lyv5paH5Lu25pmC55qE55uj6KaW5YiX6KGo6YG46aCFJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICfoiIfns7vntbHlj4PmlbjoqK3nva7nm7jlkIwnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICfkuI3opoHmm7TmlLnnm6Poppbni4DmhYsnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICfnm6Poppbkvb/nlKhDYXQtQS1Mb3Tnt6jovK/nmoTpoIHpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ+Wwh+S9v+eUqENhdC1BLUxvdOe3qOi8r+eahOmggemdouW+nuebo+imluWIl+ihqOenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XHRcdCflsIfnt6jovK/mqJnoqJjniLLlsI/kv67mlLnvvIjoi6XmgqjlnKjns7vntbHlj4PmlbjoqK3nva7kuK3lt7LoqK3nva7lsIfmiYDmnInnt6jovK/mqJnoqJjniLLlsI/kv67mlLnvvIzmraTpgbjpoIXkuI3mnIPlsI3nj77mnInooYzniLLpgLLooYzmlLnli5XvvIknLFxuXHRcdFx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ+WFgeioseWwjeS4jeaYr+aWh+S7tueahOmggemdouWSjOWtkOWIhumhnumAsuihjOWIhumhnuaTjeS9nCcsXG5cdFx0XHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAn56e76Zmke3tDaGVjayBjYXRlZ29yaWVzfX3kuKbpgLLooYzlhbbku5bntLDnr4DmuIXnkIYnLFxuXHRcdFx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAn5pyA5aSa6aGv56S655qE5a2Q5YiG6aGe5pW46YePJyxcblx0XHRcdC8vIFByb2dyZXNzXG5cdFx0XHQnY2F0LWEtbG90LWxvYWRpbmcnOiAn5q2j5Zyo5Yqg6LyJ4oCm4oCmJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdGluZyc6ICfmraPlnKjnt6jovK/poIHpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC1vZic6ICfvvIzlhbHmnIknLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLWFscmVhZHknOiAn5Lul5LiL6aCB6Z2i5bey6Lez6YGO77yM5Zug54iy6aCB6Z2i5bey57aT5Zyo5YiG6aGe5Lit77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOiAn5Lul5LiL6aCB6Z2i5bey6Lez6YGO77yM5Zug54iy5om+5LiN5Yiw54++5pyJ5YiG6aGe77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOiAn5Lul5LiL6aCB6Z2i54Sh5rOV57eo6Lyv77yM5Zug54iy6YCj5o6l5pyN5YuZ5Zmo5Ye66Yyv77yaJyxcblx0XHRcdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAn5YWo6YOo6aCB6Z2i5bey6JmV55CG44CCJyxcblx0XHRcdCdjYXQtYS1sb3QtZG9uZSc6ICflt7LlrozmiJDvvIEnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAn5bey5Yqg5YWl5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICflt7LopIfoo73liLDliIbpoZ4nLFxuXHRcdFx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAn5bey56e75YuV5Yiw5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAn5bey5b6e5YiG6aGe56e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAn6L+U5Zue5Yiw6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICfmib7kuI3liLDliIbpoZ7jgIInLFxuXHRcdFx0Ly8gU3VtbWFyaWVzXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliqDlhaXliIbpoZ5bW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhumhnumWk+ikh+ijve+8muW+nltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5YiG6aGe6ZaT56e75YuV77ya5b6eW1tDYXRlZ29yeTokMV1d5YiwW1tDYXRlZ29yeTokMl1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1yZW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muW+nuWIhumhnuenu+mZpO+8mltbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0PHR5cGVvZiBERUZBVUxUX01FU1NBR0VTPih7XG5cdFx0XHQvLyBhcyBpbiAxNyBmaWxlcyBzZWxlY3RlZFxuXHRcdFx0J2NhdC1hLWxvdC1maWxlcy1zZWxlY3RlZCc6ICflt7LpgInmi6kkMeS4qumhtemdouaIluaWh+S7ticsXG5cdFx0XHQvLyBBY3Rpb25zXG5cdFx0XHQnY2F0LWEtbG90LWNvcHknOiAn5aSN5Yi2Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZSc6ICfnp7vliqgnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGQnOiAn5aKe5YqgJyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlLWZyb20tY2F0JzogJ+S7juatpOWIhuexu+enu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LWVudGVyLW5hbWUnOiAn6L6T5YWl5YiG57G75ZCN56ewJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2VsZWN0JzogJ+mAieaLqScsXG5cdFx0XHQnY2F0LWEtbG90LWFsbCc6ICflhajpg6gnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lJzogJ+aXoCcsXG5cdFx0XHQnY2F0LWEtbG90LW5vbmUtc2VsZWN0ZWQnOiAn5rKh5pyJ6YCJ5oup5Lu75L2V6aG16Z2i5oiW5paH5Lu277yBJyxcblx0XHRcdC8vIFByZWZlcmVuY2VzXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAn5L2/55SoQ2F0LWEtbG9057yW6L6R5paH5Lu25pe255qE55uR6KeG5YiX6KGo6YCJ6aG5Jyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfcHJlZic6ICfkuI7ns7vnu5/lj4LmlbDorr7nva7nm7jlkIwnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF9ub2NoYW5nZSc6ICfkuI3opoHmm7TmlLnnm5Hop4bnirbmgIEnLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF93YXRjaCc6ICfnm5Hop4bkvb/nlKhDYXQtYS1sb3TnvJbovpHnmoTpobXpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ+WwhuS9v+eUqENhdC1hLWxvdOe8lui+keeahOmhtemdouS7juebkeinhuWIl+ihqOenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XHRcdCflsIbnvJbovpHmoIforrDkuLrlsI/kv67mlLnvvIjoi6XmgqjlnKjns7vnu5/lj4LmlbDorr7nva7kuK3lt7Lorr7nva7lsIbmiYDmnInnvJbovpHmoIforrDkuLrlsI/kv67mlLnvvIzmraTpgInpobnkuI3kvJrlr7nnjrDmnInooYzkuLrov5vooYzmlLnliqjvvIknLFxuXHRcdFx0J2NhdC1hLWxvdC1lZGl0cGFnZXNwcmVmJzogJ+WFgeiuuOWvueS4jeaYr+aWh+S7tueahOmhtemdouWSjOWtkOWIhuexu+i/m+ihjOWIhuexu+aTjeS9nCcsXG5cdFx0XHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAn56e76Zmke3tDaGVjayBjYXRlZ29yaWVzfX3lubbov5vooYzlhbbku5bnu4boioLmuIXnkIYnLFxuXHRcdFx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAn5pyA5aSa5pi+56S655qE5a2Q5YiG57G75pWw6YePJyxcblx0XHRcdC8vIFByb2dyZXNzXG5cdFx0XHQnY2F0LWEtbG90LWxvYWRpbmcnOiAn5q2j5Zyo5Yqg6L294oCm4oCmJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdGluZyc6ICfmraPlnKjnvJbovpHpobXpnaInLFxuXHRcdFx0J2NhdC1hLWxvdC1vZic6ICfvvIzlhbHmnIknLFxuXHRcdFx0J2NhdC1hLWxvdC1za2lwcGVkLWFscmVhZHknOiAn5Lul5LiL6aG16Z2i5bey6Lez6L+H77yM5Zug5Li66aG16Z2i5bey57uP5Zyo5YiG57G75Lit77yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOiAn5Lul5LiL6aG16Z2i5bey6Lez6L+H77yM5Zug5Li65om+5LiN5Yiw546w5pyJ5YiG57G777yaJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOiAn5Lul5LiL6aG16Z2i5peg5rOV57yW6L6R77yM5Zug5Li66L+e5o6l5pyN5Yqh5Zmo5Ye66ZSZ77yaJyxcblx0XHRcdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAn5YWo6YOo6aG16Z2i5bey5aSE55CG44CCJyxcblx0XHRcdCdjYXQtYS1sb3QtZG9uZSc6ICflt7LlrozmiJDvvIEnLFxuXHRcdFx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAn5bey5Yqg5YWl5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtY29waWVkLWNhdCc6ICflt7LlpI3liLbliLDliIbnsbsnLFxuXHRcdFx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAn5bey56e75Yqo5Yiw5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtcmVtb3ZlZC1jYXQnOiAn5bey5LuO5YiG57G756e76ZmkJyxcblx0XHRcdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAn6L+U5Zue5Yiw6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3QtY2F0LW5vdC1mb3VuZCc6ICfmib7kuI3liLDliIbnsbvjgIInLFxuXHRcdFx0Ly8gU3VtbWFyaWVzXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktYWRkJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliqDlhaXliIbnsbtbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhuexu+mXtOWkjeWItu+8muS7jltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5YiG57G76Ze056e75Yqo77ya5LuOW1tDYXRlZ29yeTokMV1d5YiwW1tDYXRlZ29yeTokMl1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1yZW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muS7juWIhuexu+enu+mZpO+8mltbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7REVGQVVMVF9NRVNTQUdFUywgc2V0TWVzc2FnZXN9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIG1lZGlhd2lraS9jbGFzcy1kb2MgKi9cbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7XG5cdENMQVNTX05BTUUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04sXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCxcblx0Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIsXG5cdENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTCxcblx0Q0xBU1NfTkFNRV9MQUJFTF9ET05FLFxuXHRDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVELFxuXHRERUZBVUxUX1NFVFRJTkcsXG5cdFZBUklBTlRTLFxufSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7REVGQVVMVF9NRVNTQUdFUywgc2V0TWVzc2FnZXN9IGZyb20gJy4vbWVzc2FnZXMnO1xuaW1wb3J0IHR5cGUge01lc3NhZ2VLZXksIFNldHRpbmd9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtnZXRCb2R5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSwgd2dGb3JtYXR0ZWROYW1lc3BhY2VzLCB3Z05hbWVzcGFjZUlkcywgd2dOYW1lc3BhY2VOdW1iZXIsIHdnVGl0bGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vKipcbiAqIENoYW5nZXMgY2F0ZWdvcnkgb2YgbXVsdGlwbGUgZmlsZXNcbiAqL1xuY29uc3QgY2F0QUxvdCA9ICgpOiB2b2lkID0+IHtcblx0LyohIENhdC1hLWxvdCB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuXHRjbGFzcyBDQUwge1xuXHRcdHB1YmxpYyBzdGF0aWMgaXNTZWFyY2hNb2RlID0gZmFsc2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBNRVNTQUdFUzogUmVjb3JkPE1lc3NhZ2VLZXksIHN0cmluZz4gPSBERUZBVUxUX01FU1NBR0VTO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0VUVElORzogU2V0dGluZyA9IERFRkFVTFRfU0VUVElORztcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEFQSV9UQUc6IHN0cmluZyA9IE9QVElPTlMuYXBpVGFnO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRBUkdFVF9OQU1FU1BBQ0U6IG51bWJlciA9IE9QVElPTlMudGFyZ2V0TmFtZXNwYWNlO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ1VSUkVOVF9DQVRFR1JPWTogc3RyaW5nID0gd2dUaXRsZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHdnRm9ybWF0dGVkTmFtZXNwYWNlczogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlcztcblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSB3Z05hbWVzcGFjZUlkczogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHdnTmFtZXNwYWNlSWRzO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaXNBdXRvQ29tcGxldGVJbml0ID0gZmFsc2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhcGkgPSBhcGk7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhbHJlYWR5VGhlcmU6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY29ubmVjdGlvbkVycm9yOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdEZvdW5kOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDdXJyZW50ID0gMDtcblx0XHRwcml2YXRlIHN0YXRpYyBjb3VudGVyTmVlZGVkID0gMDtcblxuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDYXQgPSAwO1xuXHRcdHByaXZhdGUgc3RhdGljIGN1cnJlbnRDYXRlZ29yeSA9ICcnO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgZGlhbG9nSGVpZ2h0ID0gNDUwO1xuXHRcdHByaXZhdGUgc3RhdGljIGVkaXRUb2tlbiA9ICcnO1xuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsQ2F0TmFtZSA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlc1tDQUwuVEFSR0VUX05BTUVTUEFDRV0gYXMgc3RyaW5nO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcGFyZW50Q2F0czogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJDYXRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgc2V0dGluZ3M6IE5vbk51bGxhYmxlPHR5cGVvZiB3aW5kb3cuQ2F0QUxvdFByZWZzPiA9IHt9O1xuXHRcdHByaXZhdGUgc3RhdGljIHZhcmlhbnRDYWNoZTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdFx0cHJpdmF0ZSBzdGF0aWMgdmFyaWFudENhY2hlMjogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7fTtcblxuXHRcdHByaXZhdGUgc3RhdGljICRjb3VudGVyOiBKUXVlcnkgPSAkKCk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgJHByb2dyZXNzRGlhbG9nOiBKUXVlcnkgPSAkKCk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgJGxhYmVsczogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRzZWxlY3RlZExhYmVsczogSlF1ZXJ5ID0gJCgpO1xuXG5cdFx0cHJpdmF0ZSByZWFkb25seSAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkY29udGFpbmVyOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkZGF0YUNvbnRhaW5lcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJG1hcmtDb3VudGVyOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkcmVzdWx0TGlzdDogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJHNlYXJjaElucHV0OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD47XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkaGVhZDogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGxpbms6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD47XG5cblx0XHRwdWJsaWMgY29uc3RydWN0b3IoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSB7XG5cdFx0XHRpZiAoIW13Lm1zZygnY2F0LWEtbG90LWxvYWRpbmcnKSkge1xuXHRcdFx0XHRtdy5tZXNzYWdlcy5zZXQoQ0FMLk1FU1NBR0VTKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kYm9keSA9ICRib2R5O1xuXHRcdFx0Q0FMLmluaXRTZXR0aW5ncygpO1xuXG5cdFx0XHRjb25zdCBjb250YWluZXIgPSAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRSwgQ0xBU1NfTkFNRV9DT05UQUlORVIsICdub3ByaW50J119PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUn0gLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9IC8+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVH1cblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj17Q0FMLm1zZygnZW50ZXItbmFtZScpfVxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Q0FMLmlzU2VhcmNoTW9kZSA/IChtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3NlYXJjaCcpID8/ICcnKSA6ICcnfVxuXHRcdFx0XHRcdFx0XHRcdG9uS2V5RG93bj17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkgYXMgSlF1ZXJ5PEhUTUxJbnB1dEVsZW1lbnQ+O1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXQ6IHN0cmluZyA9ICRlbGVtZW50LnZhbCgpPy50cmltKCkgPz8gJyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjYXQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoY2F0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9PlxuXHRcdFx0XHRcdFx0XHR7W0NBTC5tc2coJ3NlbGVjdCcpLCAnICddfVxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTH1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUFsbCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FsbCcpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdHsnIOKAoiAnfVxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkV9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbm9uZScpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH0+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS30+Q2F0LWEtbG90PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKSBhcyBKUXVlcnk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIuYXBwZW5kVG8odGhpcy4kYm9keSk7XG5cblx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1gKTtcblx0XHRcdHRoaXMuJG1hcmtDb3VudGVyID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUn1gKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QgPSB0aGlzLiRkYXRhQ29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1gKTtcblx0XHRcdHRoaXMuJHNlYXJjaElucHV0ID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KFxuXHRcdFx0XHRgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUfWBcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGhlYWQgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH1gKTtcblx0XHRcdHRoaXMuJGxpbmsgPSB0aGlzLiRoZWFkLmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9YCk7XG5cdFx0fVxuXG5cdFx0cHVibGljIGJ1aWxkRWxlbWVudHMoKTogdm9pZCB7XG5cdFx0XHRjb25zdCByZWdleENhdDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXlxcXFxzKiR7Q0FMLmxvY2FsaXplZFJlZ2V4KENBTC5UQVJHRVRfTkFNRVNQQUNFLCAnQ2F0ZWdvcnknKX06YCwgJycpO1xuXG5cdFx0XHR0aGlzLiRzZWFyY2hJbnB1dC5vbignaW5wdXQga2V5dXAnLCAoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3Qge2N1cnJlbnRUYXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHRcdGNvbnN0IHt2YWx1ZTogb2xkVmFsfSA9IGN1cnJlbnRUYXJnZXQ7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbDogc3RyaW5nID0gb2xkVmFsLnJlcGxhY2UocmVnZXhDYXQsICcnKTtcblx0XHRcdFx0aWYgKG5ld1ZhbCAhPT0gb2xkVmFsKSB7XG5cdFx0XHRcdFx0Y3VycmVudFRhcmdldC52YWx1ZSA9IG5ld1ZhbDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IGluaXRBdXRvY29tcGxldGUgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdGlmIChDQUwuaXNBdXRvQ29tcGxldGVJbml0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdENBTC5pc0F1dG9Db21wbGV0ZUluaXQgPSB0cnVlO1xuXG5cdFx0XHRcdHRoaXMuJHNlYXJjaElucHV0LmF1dG9jb21wbGV0ZSh7XG5cdFx0XHRcdFx0c291cmNlOiAocmVxdWVzdDoge3Rlcm06IHN0cmluZ30sIHJlc3BvbnNlOiAoYXJnOiBKUXVlcnk8c3RyaW5nPikgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdvcGVuc2VhcmNoJyxcblx0XHRcdFx0XHRcdFx0XHRuYW1lc3BhY2U6IENBTC5UQVJHRVRfTkFNRVNQQUNFLFxuXHRcdFx0XHRcdFx0XHRcdHJlZGlyZWN0czogJ3Jlc29sdmUnLFxuXHRcdFx0XHRcdFx0XHRcdHNlYXJjaDogcmVxdWVzdC50ZXJtLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdFsxXSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2UoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQocmVzdWx0WzFdKS5tYXAoKF9pbmRleCwgaXRlbTogc3RyaW5nKTogc3RyaW5nID0+IGl0ZW0ucmVwbGFjZShyZWdleENhdCwgJycpKVxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRcdFx0bXk6ICdyaWdodCBib3R0b20nLFxuXHRcdFx0XHRcdFx0YXQ6ICdyaWdodCB0b3AnLFxuXHRcdFx0XHRcdFx0b2Y6IHRoaXMuJHNlYXJjaElucHV0LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YXBwZW5kVG86IGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUn1gLFxuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHR0aGlzLiRsaW5rLm9uKCdjbGljaycsIChldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHQkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZUNsYXNzKENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEKTtcblx0XHRcdFx0aW5pdEF1dG9jb21wbGV0ZSgpO1xuXHRcdFx0XHR0aGlzLnJ1bigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaW5pdFNldHRpbmdzKCk6IHZvaWQge1xuXHRcdFx0bGV0IGNhdEFMb3RQcmVmczogdHlwZW9mIENBTC5zZXR0aW5ncyA9IHdpbmRvdy5DYXRBTG90UHJlZnMgPz8ge307XG5cdFx0XHRjb25zdCB0eXBlT2ZDYXRBTG90UHJlZnMgPSB0eXBlb2YgY2F0QUxvdFByZWZzO1xuXHRcdFx0aWYgKCh0eXBlT2ZDYXRBTG90UHJlZnMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGNhdEFMb3RQcmVmcykpIHx8IHR5cGVPZkNhdEFMb3RQcmVmcyAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Y2F0QUxvdFByZWZzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3Qgc2V0dGluZ0tleSBvZiBPYmplY3Qua2V5cyhDQUwuREVGQVVMVF9TRVRUSU5HKSBhcyAoa2V5b2YgU2V0dGluZylbXSkge1xuXHRcdFx0XHRjb25zdCBzZXR0aW5nID0gQ0FMLkRFRkFVTFRfU0VUVElOR1tzZXR0aW5nS2V5XTtcblxuXHRcdFx0XHRDQUwuc2V0dGluZ3Nbc2V0dGluZ0tleV0gPSBjYXRBTG90UHJlZnNbc2V0dGluZ0tleV0gPz8gc2V0dGluZy5kZWZhdWx0O1xuXG5cdFx0XHRcdGlmICghc2V0dGluZy5zZWxlY3RfaTE4bikge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2V0dGluZy5zZWxlY3QgPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBtZXNzYWdlS2V5IG9mIE9iamVjdC5rZXlzKHNldHRpbmcuc2VsZWN0X2kxOG4pKSB7XG5cdFx0XHRcdFx0Y29uc3QgbWVzc2FnZTogc3RyaW5nID0gc2V0dGluZy5zZWxlY3RfaTE4blttZXNzYWdlS2V5XSBhcyBrZXlvZiB0eXBlb2Ygc2V0dGluZy5zZWxlY3RfaTE4bjtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0c2V0dGluZy5zZWxlY3RbQ0FMLm1zZyhtZXNzYWdlS2V5IGFzIG5ldmVyKV0gPSBtZXNzYWdlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgbXNnKGtleTogTWVzc2FnZUtleSBleHRlbmRzIGBjYXQtYS1sb3QtJHtpbmZlciBQfWAgPyBQIDogbmV2ZXIsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcblx0XHRcdGNvbnN0IGZ1bGxLZXk6IHN0cmluZyA9IGBjYXQtYS1sb3QtJHtrZXl9YDtcblx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGZ1bGxLZXksIC4uLmFyZ3MpLnBhcnNlKCkgOiBtdy5tZXNzYWdlKGZ1bGxLZXkpLnBsYWluKCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsaXplZFJlZ2V4KG5hbWVzcGFjZU51bWJlcjogbnVtYmVyLCBmYWxsYmFjazogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdC8vIENvcGllZCBmcm9tIEhvdENhdCwgdGhhbmtzIEx1cG8uXG5cdFx0XHRjb25zdCB3aWtpVGV4dEJsYW5rOiBzdHJpbmcgPSBTdHJpbmcucmF3YFtcXHQgX1xceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMF0rYDtcblx0XHRcdGNvbnN0IHdpa2lUZXh0QmxhbmtSRTogUmVnRXhwID0gbmV3IFJlZ0V4cCh3aWtpVGV4dEJsYW5rLCAnZycpO1xuXHRcdFx0Y29uc3QgY3JlYXRlUmVnZXhTdHIgPSAobmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nID0+IHtcblx0XHRcdFx0aWYgKCFuYW1lPy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHJlZ2V4TmFtZTogc3RyaW5nID0gJyc7XG5cdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW5pdGlhbDogc3RyaW5nID0gbmFtZS5zbGljZShpLCBpICsgMSk7XG5cdFx0XHRcdFx0Y29uc3QgbGw6IHN0cmluZyA9IGluaXRpYWwudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRjb25zdCB1bDogc3RyaW5nID0gaW5pdGlhbC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRcdHJlZ2V4TmFtZSArPSBsbCA9PT0gdWwgPyBpbml0aWFsIDogYFske2xsfSR7dWx9XWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlZ2V4TmFtZS5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csIFN0cmluZy5yYXdgXFwkMWApLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKTtcblx0XHRcdH07XG5cdFx0XHRmYWxsYmFjayA9IGZhbGxiYWNrLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRjb25zdCBjYW5vbmljYWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IENBTC53Z0Zvcm1hdHRlZE5hbWVzcGFjZXNbbmFtZXNwYWNlTnVtYmVyXT8udG9Mb3dlckNhc2UoKTtcblx0XHRcdGxldCByZWdleFN0cmluZzogc3RyaW5nID0gY3JlYXRlUmVnZXhTdHIoY2Fub25pY2FsKTtcblx0XHRcdGlmIChmYWxsYmFjayAmJiBjYW5vbmljYWwgIT09IGZhbGxiYWNrKSB7XG5cdFx0XHRcdHJlZ2V4U3RyaW5nICs9IGB8JHtjcmVhdGVSZWdleFN0cihmYWxsYmFjayl9YDtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3QgY2F0TmFtZSBvZiBPYmplY3Qua2V5cyhDQUwud2dOYW1lc3BhY2VJZHMpKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRjYXROYW1lLnRvTG93ZXJDYXNlKCkgIT09IGNhbm9uaWNhbCAmJlxuXHRcdFx0XHRcdGNhdE5hbWUudG9Mb3dlckNhc2UoKSAhPT0gZmFsbGJhY2sgJiZcblx0XHRcdFx0XHRDQUwud2dOYW1lc3BhY2VJZHNbY2F0TmFtZV0gPT09IG5hbWVzcGFjZU51bWJlclxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZWdleFN0cmluZyArPSBgfCR7Y3JlYXRlUmVnZXhTdHIoY2F0TmFtZSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGAoPzoke3JlZ2V4U3RyaW5nfSlgO1xuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIoKTogdm9pZCB7XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzID0gQ0FMLiRsYWJlbHMuZmlsdGVyKGAuJHtDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEfWApO1xuXHRcdFx0dGhpcy4kbWFya0NvdW50ZXIuc2hvdygpLmh0bWwoQ0FMLm1zZygnZmlsZXMtc2VsZWN0ZWQnLCBDQUwuJHNlbGVjdGVkTGFiZWxzLmxlbmd0aC50b1N0cmluZygpKSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgdG9nZ2xlQWxsKHNlbGVjdDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0Q0FMLiRsYWJlbHMudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCwgc2VsZWN0KTtcblx0XHRcdHRoaXMudXBkYXRlU2VsZWN0aW9uQ291bnRlcigpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGFzeW5jIGZpbmRBbGxWYXJpYW50cyhjYXRlZ29yeTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuXHRcdFx0aWYgKENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmV0dXJuIENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldO1xuXHRcdFx0fVxuXHRcdFx0Q0FMLnZhcmlhbnRDYWNoZTJbY2F0ZWdvcnldID8/PSB7fTtcblx0XHRcdGNvbnN0IHJlc3VsdHM6IHN0cmluZ1tdID0gW107XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRleHQ6IGNhdGVnb3J5LFxuXHRcdFx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdFx0fTtcblx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiBWQVJJQU5UUykge1xuXHRcdFx0XHRjb25zdCByZXN1bHQyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihDQUwudmFyaWFudENhY2hlMltjYXRlZ29yeV0sIHZhcmlhbnQpPy52YWx1ZTtcblx0XHRcdFx0aWYgKHJlc3VsdDIpIHtcblx0XHRcdFx0XHRyZXN1bHRzW3Jlc3VsdHMubGVuZ3RoXSA9IHJlc3VsdDI7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCB7cGFyc2V9ID0gYXdhaXQgQ0FMLmFwaS5nZXQoe1xuXHRcdFx0XHRcdFx0Li4ucGFyYW1zLFxuXHRcdFx0XHRcdFx0dmFyaWFudCxcblx0XHRcdFx0XHR9IGFzIHR5cGVvZiBwYXJhbXMpO1xuXHRcdFx0XHRcdGNvbnN0IHt0ZXh0fSA9IHBhcnNlO1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9ICQodGV4dCkuZXEoMCkudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0XHRyZXN1bHRzW3Jlc3VsdHMubGVuZ3RoXSA9IHJlc3VsdDtcblx0XHRcdFx0XHRpZiAoQ0FMLnZhcmlhbnRDYWNoZTJbY2F0ZWdvcnldKSB7XG5cdFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoQ0FMLnZhcmlhbnRDYWNoZTJbY2F0ZWdvcnldLCB2YXJpYW50LCB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiByZXN1bHQsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdH1cblx0XHRcdC8vIERlLWR1cGxpY2F0ZVxuXHRcdFx0Q0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gPSB1bmlxdWVBcnJheShyZXN1bHRzKTsgLy8gUmVwbGFjZSBgWy4uLm5ldyBTZXQoKV1gIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGFzeW5jIHJlZ2V4QnVpbGRlcihjYXRlZ29yeTogc3RyaW5nKTogUHJvbWlzZTxSZWdFeHA+IHtcblx0XHRcdC8vIEJ1aWxkIGEgcmVnZXhwIHN0cmluZyBmb3IgbWF0Y2hpbmcgdGhlIGdpdmVuIGNhdGVnb3J5OlxuXHRcdFx0Y29uc3QgY2F0TmFtZTogc3RyaW5nID0gQ0FMLmxvY2FsaXplZFJlZ2V4KENBTC5UQVJHRVRfTkFNRVNQQUNFLCAnQ2F0ZWdvcnknKTtcblx0XHRcdC8vIHRyaW0gbGVhZGluZy90cmFpbGluZyB3aGl0ZXNwYWNlIGFuZCB1bmRlcnNjb3Jlc1xuXHRcdFx0Y2F0ZWdvcnkgPSBjYXRlZ29yeS5yZXBsYWNlKC9eW1xcc19dKy8sICcnKS5yZXBsYWNlKC9bXFxzX10rJC8sICcnKTtcblx0XHRcdC8vIEZpbmQgYWxsIHZhcmlhbnRzXG5cdFx0XHRjb25zdCB2YXJpYW50czogc3RyaW5nW10gPSBhd2FpdCBDQUwuZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5KTtcblx0XHRcdC8vIGVzY2FwZSByZWdleHAgbWV0YWNoYXJhY3RlcnMgKD0gYW55IEFTQ0lJIHB1bmN0dWF0aW9uIGV4Y2VwdCBfKVxuXHRcdFx0Y29uc3QgdmFyaWFudFJlZ0V4cHM6IHN0cmluZ1tdID0gW107XG5cdFx0XHRmb3IgKGxldCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG5cdFx0XHRcdHZhcmlhbnQgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cCh2YXJpYW50KTtcblx0XHRcdFx0Ly8gYW55IHNlcXVlbmNlIG9mIHNwYWNlcyBhbmQgdW5kZXJzY29yZXMgc2hvdWxkIG1hdGNoIGFueSBvdGhlclxuXHRcdFx0XHR2YXJpYW50ID0gdmFyaWFudC5yZXBsYWNlKC9bXFxzX10rL2csIFN0cmluZy5yYXdgW1xcc19dK2ApO1xuXHRcdFx0XHQvLyBNYWtlIHRoZSBmaXJzdCBjaGFyYWN0ZXIgY2FzZS1pbnNlbnNpdGl2ZTpcblx0XHRcdFx0Y29uc3QgZmlyc3Q6IHN0cmluZyA9IHZhcmlhbnQuc2xpY2UoMCwgMSk7XG5cdFx0XHRcdGlmIChmaXJzdC50b1VwcGVyQ2FzZSgpICE9PSBmaXJzdC50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRcdFx0dmFyaWFudCA9IGBbJHtmaXJzdC50b1VwcGVyQ2FzZSgpfSR7Zmlyc3QudG9Mb3dlckNhc2UoKX1dJHt2YXJpYW50LnNsaWNlKDEpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyaWFudFJlZ0V4cHNbdmFyaWFudFJlZ0V4cHMubGVuZ3RoXSA9IHZhcmlhbnQ7XG5cdFx0XHR9XG5cdFx0XHQvLyBDb21waWxlIGl0IGludG8gYSBSZWdFeHAgdGhhdCBtYXRjaGVzIE1lZGlhV2lraSBjYXRlZ29yeSBzeW50YXggKHllYWgsIGl0IGxvb2tzIHVnbHkpOlxuXHRcdFx0Ly8gWFhYOiB0aGUgZmlyc3QgY2FwdHVyaW5nIHBhcmVucyBhcmUgYXNzdW1lZCB0byBtYXRjaCB0aGUgc29ydGtleSwgaWYgcHJlc2VudCwgaW5jbHVkaW5nIHRoZSB8IGJ1dCBleGNsdWRpbmcgdGhlIF1dXG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFtbXFxcXHNfXSoke2NhdE5hbWV9W1xcXFxzX10qOltcXFxcc19dKig/OiR7dmFyaWFudFJlZ0V4cHMuam9pbihcblx0XHRcdFx0XHQnfCdcblx0XHRcdFx0KX0pW1xcXFxzX10qKFxcXFx8W15cXFxcXV0qKD86XFxcXF1bXlxcXFxdXSspKik/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvQVBJQ2FsbChcblx0XHRcdF9wYXJhbXM6XG5cdFx0XHRcdHwgT21pdDxBcGlFZGl0UGFnZVBhcmFtcywgJ2Zvcm1hdCc+XG5cdFx0XHRcdHwgT21pdDxBcGlPcGVuU2VhcmNoUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaVF1ZXJ5Q2F0ZWdvcnlNZW1iZXJzUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zLCAnZm9ybWF0Jz5cblx0XHRcdFx0fCBPbWl0PEFwaVF1ZXJ5VG9rZW5zUGFyYW1zLCAnZm9ybWF0Jz4sXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0Y2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWRcblx0XHQpIHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IF9wYXJhbXMgYXMgdHlwZW9mIF9wYXJhbXMgJiB7XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nO1xuXHRcdFx0XHR0aXRsZT86IHN0cmluZztcblx0XHRcdH07XG5cdFx0XHRwYXJhbXNbJ2Zvcm1hdCddID0gJ2pzb24nO1xuXHRcdFx0cGFyYW1zWydmb3JtYXR2ZXJzaW9uJ10gPSAnMic7XG5cdFx0XHRsZXQgaTogbnVtYmVyID0gMDtcblx0XHRcdGNvbnN0IGRvQ2FsbCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgaGFuZGxlRXJyb3IgPSAoZXJyb3I6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdG13LmxvZy5lcnJvcignW0NhdC1hLWxvdF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdFx0aWYgKGkgPCA0KSB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGRvQ2FsbCwgMzAwKTtcblx0XHRcdFx0XHRcdGkrKztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBhcmFtc1sndGl0bGUnXSkge1xuXHRcdFx0XHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvcltDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aF0gPSBwYXJhbXNbJ3RpdGxlJ107XG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChwYXJhbXMuYWN0aW9uID09PSAncXVlcnknKSB7XG5cdFx0XHRcdFx0Q0FMLmFwaS5nZXQocGFyYW1zKS50aGVuKGNhbGxiYWNrKS5jYXRjaChoYW5kbGVFcnJvcik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Q0FMLmFwaS5wb3N0KHBhcmFtcykudGhlbihjYWxsYmFjaykuY2F0Y2goaGFuZGxlRXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0ZG9DYWxsKCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgbWFya0FzRG9uZShcblx0XHRcdCRtYXJrZWRMYWJlbDogSlF1ZXJ5LFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnIHwgJ3JlbW92ZSdcblx0XHQpOiB2b2lkIHtcblx0XHRcdCRtYXJrZWRMYWJlbC5hZGRDbGFzcyhDTEFTU19OQU1FX0xBQkVMX0RPTkUpO1xuXG5cdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnYWRkJzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdhZGRlZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjb3B5Jzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdjb3BpZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbW92ZSc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbW92ZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmVtb3ZlJzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdyZW1vdmVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGRvQ2xlYW51cCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdFx0cmV0dXJuIENBTC5zZXR0aW5ncy5kb2NsZWFudXAgPyB0ZXh0LnJlcGxhY2UoL3t7XFxzKltDY11oZWNrIGNhdGVnb3JpZXNcXHMqKFxcfD8uKj8pfX0vLCAnJykgOiB0ZXh0O1xuXHRcdH0gLy8gUmVtb3ZlIHt7VW5jYXRlZ29yaXplZH19IChhbHNvIHdpdGggY29tbWVudCkuIE5vIG5lZWQgdG8gcmVwbGFjZSBpdCB3aXRoIGFueXRoaW5nXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVW5jYXQodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdHJldHVybiB0ZXh0LnJlcGxhY2UoL1xce1xce1xccypbVXVdbmNhdGVnb3JpemVkXFxzKihcXHw/Lio/KVxcfVxcfS8sICcnKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBkaXNwbGF5UmVzdWx0KCk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3Moe1xuXHRcdFx0XHRjdXJzb3I6ICcnLFxuXHRcdFx0XHRvdmVyZmxvdzogJycsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9GRUVEQkFDS31gKS5hZGRDbGFzcyhDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUpO1xuXG5cdFx0XHRjb25zdCAkcGFyZW50OiBKUXVlcnkgPSBDQUwuJGNvdW50ZXIucGFyZW50KCk7XG5cdFx0XHQkcGFyZW50Lmh0bWwoPGgzPntDQUwubXNnKCdkb25lJyl9PC9oMz4pO1xuXHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ2FsbC1kb25lJyl9XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KTtcblxuXHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0Q0FMLiRwcm9ncmVzc0RpYWxvZy5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlQWxsKGZhbHNlKTtcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ3JldHVybi10by1wYWdlJyl9XG5cdFx0XHRcdDwvYT5cblx0XHRcdCk7XG5cblx0XHRcdGlmIChDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aCkge1xuXHRcdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGg1PntDQUwubXNnKCdza2lwcGVkLWFscmVhZHknLCBDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aC50b1N0cmluZygpKX08L2g1PlxuXHRcdFx0XHRcdFx0e0NBTC5hbHJlYWR5VGhlcmUucmVkdWNlPChzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpW10+KFxuXHRcdFx0XHRcdFx0XHQocHJlLCBjdXIsIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0XHRcdGluZGV4IDwgQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGggLSAxID8gWy4uLnByZSwgY3VyLCA8YnIga2V5PXtpbmRleH0gLz5dIDogWy4uLnByZSwgY3VyXSxcblx0XHRcdFx0XHRcdFx0W11cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoQ0FMLm5vdEZvdW5kLmxlbmd0aCkge1xuXHRcdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGg1PntDQUwubXNnKCdza2lwcGVkLW5vdC1mb3VuZCcsIENBTC5ub3RGb3VuZC5sZW5ndGgudG9TdHJpbmcoKSl9PC9oNT5cblx0XHRcdFx0XHRcdHtDQUwubm90Rm91bmQucmVkdWNlPChzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpW10+KFxuXHRcdFx0XHRcdFx0XHQocHJlLCBjdXIsIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0XHRcdGluZGV4IDwgQ0FMLm5vdEZvdW5kLmxlbmd0aCAtIDEgPyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl0gOiBbLi4ucHJlLCBjdXJdLFxuXHRcdFx0XHRcdFx0XHRbXVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGlmIChDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aCkge1xuXHRcdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGg1PntDQUwubXNnKCdza2lwcGVkLXNlcnZlcicsIENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoLnRvU3RyaW5nKCkpfTwvaDU+XG5cdFx0XHRcdFx0XHR7Q0FMLmNvbm5lY3Rpb25FcnJvci5yZWR1Y2U8KHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXT4oXG5cdFx0XHRcdFx0XHRcdChwcmUsIGN1ciwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aCAtIDFcblx0XHRcdFx0XHRcdFx0XHRcdD8gWy4uLnByZSwgY3VyLCA8YnIga2V5PXtpbmRleH0gLz5dXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IFsuLi5wcmUsIGN1cl0sXG5cdFx0XHRcdFx0XHRcdFtdXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZUNvdW50ZXIoKTogdm9pZCB7XG5cdFx0XHRDQUwuY291bnRlckN1cnJlbnQrKztcblx0XHRcdGlmIChDQUwuY291bnRlckN1cnJlbnQgPiBDQUwuY291bnRlck5lZWRlZCkge1xuXHRcdFx0XHR0aGlzLmRpc3BsYXlSZXN1bHQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdENBTC4kY291bnRlci50ZXh0KENBTC5jb3VudGVyQ3VycmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgYXN5bmMgZWRpdENhdGVnb3JpZXMoXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0cmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBhbnk+LFxuXHRcdFx0bWFya2VkTGFiZWw6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPlswXSxcblx0XHRcdHRhcmdldENhdGVnb3J5OiBzdHJpbmcsXG5cdFx0XHRtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJyB8ICdyZW1vdmUnXG5cdFx0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHRjb25zdCBbbWFya2VkTGFiZWxUaXRsZSwgJG1hcmtlZExhYmVsXSA9IG1hcmtlZExhYmVsO1xuXG5cdFx0XHRpZiAoIXJlc3VsdD8uWydxdWVyeSddKSB7XG5cdFx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3JbQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGhdID0gbWFya2VkTGFiZWxUaXRsZTtcblx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bGV0IG9yaWdpblRleHQ6IHN0cmluZyA9ICcnO1xuXHRcdFx0bGV0IHN0YXJ0dGltZXN0YW1wOiBudW1iZXIgPSAwO1xuXHRcdFx0bGV0IHRpbWVzdGFtcDogbnVtYmVyID0gMDtcblx0XHRcdENBTC5lZGl0VG9rZW4gPSByZXN1bHRbJ3F1ZXJ5J10udG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGNvbnN0IHtwYWdlc30gPSByZXN1bHRbJ3F1ZXJ5J107XG5cblx0XHRcdGNvbnN0IFtwYWdlXSA9IHBhZ2VzO1xuXHRcdFx0b3JpZ2luVGV4dCA9IHBhZ2UucmV2aXNpb25zWzBdLnNsb3RzLm1haW4uY29udGVudDtcblx0XHRcdCh7c3RhcnR0aW1lc3RhbXB9ID0gcGFnZSk7XG5cdFx0XHRbe3RpbWVzdGFtcH1dID0gcGFnZS5yZXZpc2lvbnM7XG5cblx0XHRcdGNvbnN0IHNvdXJjZWNhdDogc3RyaW5nID0gQ0FMLkNVUlJFTlRfQ0FURUdST1k7XG5cdFx0XHQvLyBDaGVjayBpZiB0aGF0IGZpbGUgaXMgYWxyZWFkeSBpbiB0aGF0IGNhdGVnb3J5XG5cdFx0XHRjb25zdCB0YXJnZVJlZ0V4cCA9IGF3YWl0IENBTC5yZWdleEJ1aWxkZXIodGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0aWYgKG1vZGUgIT09ICdyZW1vdmUnICYmIHRhcmdlUmVnRXhwLnRlc3Qob3JpZ2luVGV4dCkgJiYgbW9kZSAhPT0gJ21vdmUnKSB7XG5cdFx0XHRcdENBTC5hbHJlYWR5VGhlcmVbQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGhdID0gbWFya2VkTGFiZWxUaXRsZTtcblx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRml4IHRleHRcblx0XHRcdGxldCB0ZXh0OiBzdHJpbmcgPSBvcmlnaW5UZXh0O1xuXHRcdFx0bGV0IHN1bW1hcnk6IHN0cmluZztcblx0XHRcdGNvbnN0IHNvdXJjZUNhdFJlZ0V4cCA9IGF3YWl0IENBTC5yZWdleEJ1aWxkZXIoc291cmNlY2F0KTtcblx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHRjYXNlICdhZGQnOlxuXHRcdFx0XHRcdHRleHQgKz0gYFxcbltbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fV1dXFxuYDtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1hZGQnKS5yZXBsYWNlKCckMScsIHRhcmdldENhdGVnb3J5KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY29weSc6XG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShcblx0XHRcdFx0XHRcdHNvdXJjZUNhdFJlZ0V4cCxcblx0XHRcdFx0XHRcdGBbWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHtzb3VyY2VjYXR9JDFdXVxcbltbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fSQxXV1gXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1jb3B5JykucmVwbGFjZSgnJDEnLCBzb3VyY2VjYXQpLnJlcGxhY2UoJyQyJywgdGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdC8vIElmIGNhdGVnb3J5IGlzIGFkZGVkIHRocm91Z2ggdGVtcGxhdGU6XG5cdFx0XHRcdFx0aWYgKG9yaWdpblRleHQgPT09IHRleHQpIHtcblx0XHRcdFx0XHRcdHRleHQgKz0gYFxcbltbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fV1dYDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21vdmUnOlxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2Uoc291cmNlQ2F0UmVnRXhwLCBgW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9JDFdXWApO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LW1vdmUnKS5yZXBsYWNlKCckMScsIHNvdXJjZWNhdCkucmVwbGFjZSgnJDInLCB0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JlbW92ZSc6XG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShzb3VyY2VDYXRSZWdFeHAsICcnKTtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1yZW1vdmUnKS5yZXBsYWNlKCckMScsIHNvdXJjZWNhdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0ZXh0ID09PSBvcmlnaW5UZXh0KSB7XG5cdFx0XHRcdENBTC5ub3RGb3VuZFtDQUwubm90Rm91bmQubGVuZ3RoXSA9IG1hcmtlZExhYmVsVGl0bGU7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSB1bmNhdCBhZnRlciB3ZSBjaGVja2VkIHdoZXRoZXIgd2UgY2hhbmdlZCB0aGUgdGV4dCBzdWNjZXNzZnVsbHkuXG5cdFx0XHQvLyBPdGhlcndpc2Ugd2UgbWlnaHQgZmFpbCB0byBkbyB0aGUgY2hhbmdlcywgYnV0IHN0aWxsIHJlcGxhY2Uge3t1bmNhdH19XG5cdFx0XHRpZiAobW9kZSAhPT0gJ3JlbW92ZScpIHtcblx0XHRcdFx0dGV4dCA9IENBTC5kb0NsZWFudXAoQ0FMLnJlbW92ZVVuY2F0KHRleHQpKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHR0b2tlbjogQ0FMLmVkaXRUb2tlbixcblx0XHRcdFx0XHR0YWdzOiBDQUwuQVBJX1RBRyxcblx0XHRcdFx0XHR0aXRsZTogbWFya2VkTGFiZWxUaXRsZSxcblx0XHRcdFx0XHRhc3NlcnQ6ICd1c2VyJyxcblx0XHRcdFx0XHRib3Q6IHRydWUsXG5cdFx0XHRcdFx0YmFzZXRpbWVzdGFtcDogdGltZXN0YW1wIGFzIHVua25vd24gYXMgc3RyaW5nLFxuXHRcdFx0XHRcdHdhdGNobGlzdDogQ0FMLnNldHRpbmdzLndhdGNobGlzdCBhcyBuZXZlcixcblx0XHRcdFx0XHR0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0c3RhcnR0aW1lc3RhbXA6IHN0YXJ0dGltZXN0YW1wIGFzIHVua25vd24gYXMgc3RyaW5nLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHRcdENBTC5tYXJrQXNEb25lKCRtYXJrZWRMYWJlbCwgdGFyZ2V0Q2F0ZWdvcnksIG1vZGUpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldENvbnRlbnQoXG5cdFx0XHRtYXJrZWRMYWJlbDogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+WzBdLFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnXG5cdFx0KTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdFx0dGl0bGVzOiBtYXJrZWRMYWJlbFswXSxcblx0XHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0XHRcdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxuXHRcdFx0XHRcdHZvaWQgdGhpcy5lZGl0Q2F0ZWdvcmllcyhyZXN1bHQsIG1hcmtlZExhYmVsLCB0YXJnZXRDYXRlZ29yeSwgbW9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGdldFRpdGxlRnJvbUxpbmsoaHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJldHVybiAoZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYgPz8gJycpLm1hdGNoKC93aWtpXFwvKC4rPykoPzojLispPyQvKT8uWzFdID8/ICcnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIGdldE1hcmtlZExhYmVscygpOiBbc3RyaW5nLCBKUXVlcnldW10ge1xuXHRcdFx0Y29uc3QgbWFya2VkTGFiZWxzOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz4gPSBbXTtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMgPSBDQUwuJGxhYmVscy5maWx0ZXIoYC4ke0NMQVNTX05BTUVfTEFCRUxfU0VMRUNURUR9YCk7XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzLmVhY2goKF9pbmRleCwgbGFiZWwpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3QgJGxhYmVsOiBKUXVlcnkgPSAkKGxhYmVsKTtcblx0XHRcdFx0Y29uc3QgJGxhYmVsTGluazogSlF1ZXJ5ID0gJGxhYmVsLmZpbmQoJ2FbdGl0bGVdJyk7XG5cdFx0XHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgPVxuXHRcdFx0XHRcdCRsYWJlbExpbmsuYXR0cigndGl0bGUnKT8udHJpbSgpIHx8XG5cdFx0XHRcdFx0Q0FMLmdldFRpdGxlRnJvbUxpbmsoJGxhYmVsTGluay5hdHRyKCdocmVmJykpIHx8XG5cdFx0XHRcdFx0Q0FMLmdldFRpdGxlRnJvbUxpbmsoJGxhYmVsLmZpbmQoJ2EnKS5hdHRyKCdocmVmJykpO1xuXHRcdFx0XHRtYXJrZWRMYWJlbHNbbWFya2VkTGFiZWxzLmxlbmd0aF0gPSBbdGl0bGUsICRsYWJlbF07XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBtYXJrZWRMYWJlbHM7XG5cdFx0fVxuXHRcdHByaXZhdGUgc2hvd1Byb2dyZXNzKCk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3Moe1xuXHRcdFx0XHRjdXJzb3I6ICd3YWl0Jyxcblx0XHRcdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdFx0fSk7XG5cdFx0XHRDQUwuJHByb2dyZXNzRGlhbG9nID0gJChcblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7Q0FMLm1zZygnZWRpdGluZycpfVxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVJ9PntDQUwuY291bnRlckN1cnJlbnR9PC9zcGFuPlxuXHRcdFx0XHRcdHtbQ0FMLm1zZygnb2YnKSwgQ0FMLmNvdW50ZXJOZWVkZWRdfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkuZGlhbG9nKHtcblx0XHRcdFx0ZGlhbG9nQ2xhc3M6IENMQVNTX05BTUVfRkVFREJBQ0ssXG5cdFx0XHRcdG1pbkhlaWdodDogOTAsXG5cdFx0XHRcdGhlaWdodDogOTAsXG5cdFx0XHRcdHdpZHRoOiA0NTAsXG5cdFx0XHRcdG1vZGFsOiB0cnVlLFxuXHRcdFx0XHRjbG9zZU9uRXNjYXBlOiBmYWxzZSxcblx0XHRcdFx0ZHJhZ2dhYmxlOiBmYWxzZSxcblx0XHRcdFx0cmVzaXphYmxlOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0ZFRURCQUNLfSAudWktZGlhbG9nLXRpdGxlYmFyYCkuaGlkZSgpO1xuXHRcdFx0dGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0ZFRURCQUNLfSAudWktZGlhbG9nLWNvbnRlbnRgKS5oZWlnaHQoJ2F1dG8nKTtcblx0XHRcdENBTC4kY291bnRlciA9IHRoaXMuJGJvZHkuZmluZChgLiR7Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVJ9YCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZywgbW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZScpOiB2b2lkIHtcblx0XHRcdGNvbnN0IG1hcmtlZExhYmVsczogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+ID0gdGhpcy5nZXRNYXJrZWRMYWJlbHMoKTtcblx0XHRcdGlmICghbWFya2VkTGFiZWxzLmxlbmd0aCkge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShDQUwubXNnKCdub25lLXNlbGVjdGVkJyksIHtcblx0XHRcdFx0XHR0YWc6ICdjYXRBTG90Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdENBTC5hbHJlYWR5VGhlcmUgPSBbXTtcblx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3IgPSBbXTtcblx0XHRcdENBTC5ub3RGb3VuZCA9IFtdO1xuXHRcdFx0Q0FMLmNvdW50ZXJDdXJyZW50ID0gMTtcblx0XHRcdENBTC5jb3VudGVyTmVlZGVkID0gbWFya2VkTGFiZWxzLmxlbmd0aDtcblx0XHRcdHRoaXMuc2hvd1Byb2dyZXNzKCk7XG5cdFx0XHRmb3IgKGNvbnN0IG1hcmtlZExhYmVsIG9mIG1hcmtlZExhYmVscykge1xuXHRcdFx0XHR0aGlzLmdldENvbnRlbnQobWFya2VkTGFiZWwsIHRhcmdldENhdGVnb3J5LCBtb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBhZGRIZXJlKHRhcmdldENhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnksICdhZGQnKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBjb3B5SGVyZSh0YXJnZXRDYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5LCAnY29weScpO1xuXHRcdH1cblx0XHRwcml2YXRlIG1vdmVIZXJlKHRhcmdldENhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnksICdtb3ZlJyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgY3JlYXRlQ2F0TGlua3Moc3ltYm9sOiBzdHJpbmcsIGNhdGVnb3JpZXM6IHN0cmluZ1tdKTogdm9pZCB7XG5cdFx0XHRjYXRlZ29yaWVzLnNvcnQoKTtcblx0XHRcdGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuXHRcdFx0XHRjb25zdCAkdHIgPSAkKFxuXHRcdFx0XHRcdDx0ciBkYXRhc2V0PXt7Y2F0ZWdvcnl9fT5cblx0XHRcdFx0XHRcdDx0ZD57c3ltYm9sfTwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtjYXRlZ29yeX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQpO1xuXHRcdFx0XHQvLyBDYW4ndCBtb3ZlIHRvIHNvdXJjZSBjYXRlZ29yeVxuXHRcdFx0XHRpZiAoY2F0ZWdvcnkgIT09IENBTC5DVVJSRU5UX0NBVEVHUk9ZICYmIENBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0XHQkdHIuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTn1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuYWRkSGVyZSgkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FkZCcpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2F0ZWdvcnkgIT09IENBTC5DVVJSRU5UX0NBVEVHUk9ZICYmICFDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdFx0JHRyLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5jb3B5SGVyZSgkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2NvcHknKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5tb3ZlSGVyZSgkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ21vdmUnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuZmluZCgndGFibGUnKS5hcHBlbmQoJHRyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBzaG93Q2F0ZWdvcnlMaXN0KCk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3MoJ2N1cnNvcicsICcnKTtcblx0XHRcdGNvbnN0IGN1cnJlbnRDYXRlZ29yaWVzOiBzdHJpbmdbXSA9IFtDQUwuY3VycmVudENhdGVnb3J5XTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuZW1wdHkoKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuYXBwZW5kKDx0YWJsZSAvPik7XG5cdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpEnLCBDQUwucGFyZW50Q2F0cyk7XG5cdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpInLCBjdXJyZW50Q2F0ZWdvcmllcyk7XG5cdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpMnLCBDQUwuc3ViQ2F0cyk7XG5cdFx0XHQvLyBSZXNldCB3aWR0aFxuXHRcdFx0dGhpcy4kY29udGFpbmVyLndpZHRoKCcnKTtcblx0XHRcdHRoaXMuJGNvbnRhaW5lci5oZWlnaHQoJycpO1xuXHRcdFx0dGhpcy4kY29udGFpbmVyLndpZHRoKE1hdGgubWluKCh0aGlzLiRjb250YWluZXIud2lkdGgoKSA/PyAwKSAqIDEuMSArIDE1LCAoJCh3aW5kb3cpLndpZHRoKCkgPz8gMCkgLSAxMCkpO1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5jc3Moe1xuXHRcdFx0XHQnbWF4LWhlaWdodCc6IGAke0NBTC5kaWFsb2dIZWlnaHR9cHhgLFxuXHRcdFx0XHRoZWlnaHQ6ICcnLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0UGFyZW50Q2F0cygpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdHRpdGxlczogYENhdGVnb3J5OiR7Q0FMLmN1cnJlbnRDYXRlZ29yeX1gLFxuXHRcdFx0XHRcdHByb3A6ICdjYXRlZ29yaWVzJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdENBTC5wYXJlbnRDYXRzID0gW107XG5cdFx0XHRcdFx0Y29uc3Qge3BhZ2VzfSA9IHJlc3VsdC5xdWVyeTtcblx0XHRcdFx0XHRpZiAocGFnZXNbMF0/Lm1pc3NpbmcpIHtcblx0XHRcdFx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnJyk7XG5cdFx0XHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0Lmh0bWwoXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX05PX0ZPVU5EfT5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnY2F0LW5vdC1mb3VuZCcpfVxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaSJywgW0NBTC5jdXJyZW50Q2F0ZWdvcnldKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGV0IGNhdGVnb3JpZXM6IHt0aXRsZTogc3RyaW5nfVtdID0gW107XG5cdFx0XHRcdFx0W3tjYXRlZ29yaWVzfV0gPSBwYWdlcztcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0XHRDQUwucGFyZW50Q2F0c1tDQUwucGFyZW50Q2F0cy5sZW5ndGhdID0gY2F0LnRpdGxlLnJlcGxhY2UoL15bXjpdKzovLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdENBTC5jb3VudGVyQ2F0Kys7XG5cdFx0XHRcdFx0aWYgKENBTC5jb3VudGVyQ2F0ID09PSAyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNob3dDYXRlZ29yeUxpc3QoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0U3ViQ2F0cygpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdGxpc3Q6ICdjYXRlZ29yeW1lbWJlcnMnLFxuXHRcdFx0XHRcdGNtdHlwZTogJ3N1YmNhdCcsXG5cdFx0XHRcdFx0Y21saW1pdDogQ0FMLnNldHRpbmdzLnN1YmNhdGNvdW50IGFzIG5ldmVyLFxuXHRcdFx0XHRcdGNtdGl0bGU6IGBDYXRlZ29yeToke0NBTC5jdXJyZW50Q2F0ZWdvcnl9YCxcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGNhdHM6IHt0aXRsZTogc3RyaW5nfVtdID0gcmVzdWx0Py5xdWVyeT8uY2F0ZWdvcnltZW1iZXJzIHx8IFtdO1xuXHRcdFx0XHRcdENBTC5zdWJDYXRzID0gW107XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBjYXQgb2YgY2F0cykge1xuXHRcdFx0XHRcdFx0Q0FMLnN1YkNhdHNbQ0FMLnN1YkNhdHMubGVuZ3RoXSA9IGNhdC50aXRsZS5yZXBsYWNlKC9eW146XSs6LywgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDQUwuY291bnRlckNhdCsrO1xuXHRcdFx0XHRcdGlmIChDQUwuY291bnRlckNhdCA9PT0gMikge1xuXHRcdFx0XHRcdFx0dGhpcy5zaG93Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldENhdGVnb3J5TGlzdCgpOiB2b2lkIHtcblx0XHRcdENBTC5jb3VudGVyQ2F0ID0gMDtcblx0XHRcdHRoaXMuZ2V0UGFyZW50Q2F0cygpO1xuXHRcdFx0dGhpcy5nZXRTdWJDYXRzKCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgdXBkYXRlQ2F0cyhjYXQ6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XG5cdFx0XHRDQUwuY3VycmVudENhdGVnb3J5ID0gY2F0O1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5odG1sKDxkaXY+e0NBTC5tc2coJ2xvYWRpbmcnKX08L2Rpdj4pO1xuXHRcdFx0dGhpcy5nZXRDYXRlZ29yeUxpc3QoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGZpbmRBbGxMYWJlbHMoKTogdm9pZCB7XG5cdFx0XHQvLyBJdCdzIHBvc3NpYmxlIHRvIGFsbG93IGFueSBraW5kIG9mIHBhZ2VzIGFzIHdlbGwgYnV0IHdoYXQgaGFwcGVucyBpZiB5b3UgY2xpY2sgb24gXCJzZWxlY3QgYWxsXCIgYW5kIGRvbid0IGV4cGVjdCBpdFxuXHRcdFx0aWYgKENBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0Q0FMLiRsYWJlbHMgPSB0aGlzLiRib2R5LmZpbmQoJ3RhYmxlLnNlYXJjaFJlc3VsdEltYWdlJykuZmluZCgndHI+dGQnKS5lcSgxKTtcblx0XHRcdFx0aWYgKENBTC5zZXR0aW5ncy5lZGl0cGFnZXMpIHtcblx0XHRcdFx0XHRDQUwuJGxhYmVscyA9IENBTC4kbGFiZWxzLmFkZCgnZGl2Lm13LXNlYXJjaC1yZXN1bHQtaGVhZGluZycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRDQUwuJGxhYmVscyA9IHRoaXMuJGJvZHlcblx0XHRcdFx0XHQuZmluZCgnZGl2LmdhbGxlcnl0ZXh0Jylcblx0XHRcdFx0XHQuYWRkKHRoaXMuJGJvZHkuZmluZCgnZGl2I213LWNhdGVnb3J5LW1lZGlhJykuZmluZCgnbGlbY2xhc3MhPVwiZ2FsbGVyeWJveFwiXScpKTtcblx0XHRcdFx0aWYgKENBTC5zZXR0aW5ncy5lZGl0cGFnZXMpIHtcblx0XHRcdFx0XHRjb25zdCAkcGFnZXM6IEpRdWVyeTxIVE1MTElFbGVtZW50PiA9IHRoaXMuJGJvZHlcblx0XHRcdFx0XHRcdC5maW5kKCdkaXYjbXctcGFnZXMsIGRpdiNtdy1zdWJjYXRlZ29yaWVzJylcblx0XHRcdFx0XHRcdC5maW5kKCdsaScpO1xuXHRcdFx0XHRcdENBTC4kbGFiZWxzID0gQ0FMLiRsYWJlbHMuYWRkKCRwYWdlcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBtYWtlQ2xpY2thYmxlKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5maW5kQWxsTGFiZWxzKCk7XG5cdFx0XHRDQUwuJGxhYmVscy5hZGRDbGFzcyhDTEFTU19OQU1FX0xBQkVMKS5vbkNhdEFMb3RTaGlmdENsaWNrKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0dGhpcy51cGRhdGVTZWxlY3Rpb25Db3VudGVyKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHJ1bigpOiB2b2lkIHtcblx0XHRcdGlmICh0aGlzLiRsaW5rLmhhc0NsYXNzKENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEKSkge1xuXHRcdFx0XHR0aGlzLm1ha2VDbGlja2FibGUoKTtcblx0XHRcdFx0dGhpcy4kZGF0YUNvbnRhaW5lci5zaG93KCk7XG5cdFx0XHRcdHRoaXMuJGNvbnRhaW5lci5yZXNpemFibGUoe1xuXHRcdFx0XHRcdGFsc29SZXNpemU6IHRoaXMuJHJlc3VsdExpc3QsXG5cdFx0XHRcdFx0aGFuZGxlczogJ24nLFxuXHRcdFx0XHRcdHJlc2l6ZTogKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCAkY3VycmVudFRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHQkY3VycmVudFRhcmdldC5jc3Moe1xuXHRcdFx0XHRcdFx0XHRsZWZ0OiAnJyxcblx0XHRcdFx0XHRcdFx0dG9wOiAnJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0Q0FMLmRpYWxvZ0hlaWdodCA9ICRjdXJyZW50VGFyZ2V0LmhlaWdodCgpID8/IENBTC5kaWFsb2dIZWlnaHQ7XG5cdFx0XHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdG1heEhlaWdodDogJycsXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAnJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmNzcygnbWF4LWhlaWdodCcsICc0NTBweCcpO1xuXHRcdFx0XHRpZiAoQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cygnUGljdHVyZXMgYW5kIGltYWdlcycpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cyhDQUwuQ1VSUkVOVF9DQVRFR1JPWSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLiRjb250YWluZXIucmVzaXphYmxlKCdkZXN0cm95Jyk7XG5cdFx0XHRcdHRoaXMuJGNvbnRhaW5lci5jc3MoJ3dpZHRoJywgJycpO1xuXHRcdFx0XHRDQUwuJGxhYmVscy5vZmYoJ2NsaWNrLmNhdEFMb3QnKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAoXG5cdFx0KHdnTmFtZXNwYWNlTnVtYmVyID09PSAtMSAmJiB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ1NlYXJjaCcpIHx8XG5cdFx0d2dOYW1lc3BhY2VOdW1iZXIgPT09IE9QVElPTlMudGFyZ2V0TmFtZXNwYWNlXG5cdCkge1xuXHRcdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gLTEpIHtcblx0XHRcdENBTC5pc1NlYXJjaE1vZGUgPSB0cnVlO1xuXHRcdH1cblx0XHQvKiEgQ2F0LWEtbG90IG1lc3NhZ2VzIHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG5cdFx0c2V0TWVzc2FnZXMoKTtcblx0XHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRcdG5ldyBDQUwoJGJvZHkpLmJ1aWxkRWxlbWVudHMoKTtcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtjYXRBTG90fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYENhdC1hLWxvdC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIG1lZGlhd2lraS9jbGFzcy1kb2MgKi9cbmltcG9ydCB7Q0xBU1NfTkFNRV9MQUJFTCwgQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVELCBDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEfSBmcm9tICcuL2NvbnN0YW50JztcblxudHlwZSBPbkNhdEFMb3RTaGlmdENsaWNrID0gKHRoaXM6IEpRdWVyeSwgY2FsbGJhY2s6ICgpID0+IHVua25vd24pID0+IEpRdWVyeTtcbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIEpRdWVyeSB7XG5cdFx0b25DYXRBTG90U2hpZnRDbGljazogT25DYXRBTG90U2hpZnRDbGljaztcblx0fVxufVxuXG5jb25zdCBleHRlbmRKUXVlcnlQcm90b3R5cGUgPSAoKTogdm9pZCA9PiB7XG5cdC8qISBqUXVlcnkgY2hlY2tib3hTaGlmdENsaWNrIHwgR1BMLTIuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6R1BMPiAqL1xuXHQkLmZuLmV4dGVuZCh7XG5cdFx0b25DYXRBTG90U2hpZnRDbGljazogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRsZXQgcHJldkNoZWNrYm94OiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cblx0XHRcdC8vIFdoZW4gb3VyIGJveGVzIGFyZSBjbGlja2VkLi5cblx0XHRcdHRoaXMub24oJ2NsaWNrLmNhdEFMb3QnLCAoZXZlbnQ6IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHQvLyBQcmV2ZW50IGZvbGxvd2luZyB0aGUgbGluayBhbmQgdGV4dCBzZWxlY3Rpb25cblx0XHRcdFx0aWYgKCFldmVudC5jdHJsS2V5KSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEhpZ2hsaWdodCBsYXN0IHNlbGVjdGVkXG5cdFx0XHRcdHRoaXMucGFyZW50cygnYm9keScpXG5cdFx0XHRcdFx0LmZpbmQoYC4ke0NMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRH1gKVxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQpO1xuXG5cdFx0XHRcdGxldCAkdGhpc0NvbnRyb2wgPSAkKGV2ZW50LnRhcmdldCkgYXMgSlF1ZXJ5O1xuXHRcdFx0XHRpZiAoISR0aGlzQ29udHJvbC5oYXNDbGFzcyhDTEFTU19OQU1FX0xBQkVMKSkge1xuXHRcdFx0XHRcdCR0aGlzQ29udHJvbCA9ICR0aGlzQ29udHJvbC5wYXJlbnRzKGAuJHtDTEFTU19OQU1FX0xBQkVMfWApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JHRoaXNDb250cm9sLmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCk7XG5cblx0XHRcdFx0Ly8gQW5kIG9uZSBoYXMgYmVlbiBjbGlja2VkIGJlZm9yZS4uLlxuXHRcdFx0XHRpZiAocHJldkNoZWNrYm94ICYmIGV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0XHRcdFx0Y29uc3QgbWV0aG9kOiAnYWRkQ2xhc3MnIHwgJ3JlbW92ZUNsYXNzJyA9ICR0aGlzQ29udHJvbC5oYXNDbGFzcyhDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEKVxuXHRcdFx0XHRcdFx0PyAnYWRkQ2xhc3MnXG5cdFx0XHRcdFx0XHQ6ICdyZW1vdmVDbGFzcyc7XG5cdFx0XHRcdFx0Ly8gQ2hlY2sgb3IgdW5jaGVjayB0aGlzIG9uZSBhbmQgYWxsIGluLWJldHdlZW4gY2hlY2tib3hlc1xuXHRcdFx0XHRcdHRoaXMuc2xpY2UoXG5cdFx0XHRcdFx0XHRNYXRoLm1pbih0aGlzLmluZGV4KHByZXZDaGVja2JveCksIHRoaXMuaW5kZXgoJHRoaXNDb250cm9sKSksXG5cdFx0XHRcdFx0XHRNYXRoLm1heCh0aGlzLmluZGV4KHByZXZDaGVja2JveCksIHRoaXMuaW5kZXgoJHRoaXNDb250cm9sKSkgKyAxXG5cdFx0XHRcdFx0KVttZXRob2RdKENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEVpdGhlciB3YXksIHVwZGF0ZSB0aGUgcHJldkNoZWNrYm94IHZhcmlhYmxlIHRvIHRoZSBvbmUgY2xpY2tlZCBub3dcblx0XHRcdFx0cHJldkNoZWNrYm94ID0gJHRoaXNDb250cm9sO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSBhcyBPbkNhdEFMb3RTaGlmdENsaWNrLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7ZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlfTtcbiIsICJpbXBvcnQge2NhdEFMb3R9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7ZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlfSBmcm9tICcuL21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlJztcblxuLyohIGpRdWVyeSBjaGVja2JveFNoaWZ0Q2xpY2sgfCBHUEwtMi4wIDxodHRwczovL3F3YmsuY2MvSDpHUEw+ICovXG5leHRlbmRKUXVlcnlQcm90b3R5cGUoKTtcbi8qISBDYXQtYS1sb3QgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cbmNhdEFMb3QoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFNBQVU7QUFDVixJQUFBQyxrQkFBbUI7QUFDbkIsSUFBQUMsVUFBVzs7QUNBWixJQUFNQyxhQUFxQjtBQUMzQixJQUFNQyx1QkFBQSxHQUFBQyxPQUFrQ0YsWUFBVSxZQUFBO0FBQ2xELElBQU1HLDRCQUFBLEdBQUFELE9BQXVDRCxzQkFBb0IsUUFBQTtBQUNqRSxJQUFNRywwQ0FBQSxHQUFBRixPQUFxREMsMkJBQXlCLGlCQUFBO0FBQ3BGLElBQU1F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QUFNc0gsWUFBWSxHQUFHLEtBQUt0SCxNQUFNMkgsWUFBWSxDQUFDLElBQUksQ0FDaEUsRUFBRUcsTUFBTSxFQUFFdFgseUJBQXlCO1FBQ3BDO0FBRUE4Vyx1QkFBZUs7QUFFZixZQUFJLE9BQU94SixhQUFhLFlBQVk7QUFDbkNBLG1CQUFTO1FBQ1Y7TUFDRCxDQUFDO0FBRUQsYUFBTztJQUNSO0VBQ0QsQ0FBQztBQUNGOztBQ3REQTtBQUNBZ0osc0JBQXNCO0FBQ3RCO0FBQ0F2VSxRQUFROyIsCiAgIm5hbWVzIjogWyJhcGlUYWciLCAidGFyZ2V0TmFtZXNwYWNlIiwgInZlcnNpb24iLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUiIsICJjb25jYXQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1QiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTiIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVIiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfQUxMIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19OT05FIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS19FTkFCTEVEIiwgIkNMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSIiwgIkNMQVNTX05BTUVfRkVFREJBQ0siLCAiQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FIiwgIkNMQVNTX05BTUVfTEFCRUwiLCAiQ0xBU1NfTkFNRV9MQUJFTF9ET05FIiwgIkNMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCIsICJDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEIiwgIkRFRkFVTFRfU0VUVElORyIsICJkb2NsZWFudXAiLCAiZGVmYXVsdCIsICJsYWJlbF9pMThuIiwgImVkaXRwYWdlcyIsICJtaW5vciIsICJzdWJjYXRjb3VudCIsICJ3YXRjaGxpc3QiLCAic2VsZWN0X2kxOG4iLCAid2F0Y2hfbm9jaGFuZ2UiLCAid2F0Y2hfcHJlZiIsICJ3YXRjaF91bndhdGNoIiwgIndhdGNoX3dhdGNoIiwgIlZBUklBTlRTIiwgIndnVXNlckxhbmd1YWdlIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiREVGQVVMVF9NRVNTQUdFUyIsICJzZXRNZXNzYWdlcyIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJzZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dUaXRsZSIsICJjYXRBTG90IiwgIkNBTCIsICJpc1NlYXJjaE1vZGUiLCAiTUVTU0FHRVMiLCAiQVBJX1RBRyIsICJUQVJHRVRfTkFNRVNQQUNFIiwgIkNVUlJFTlRfQ0FURUdST1kiLCAiaXNBdXRvQ29tcGxldGVJbml0IiwgImFscmVhZHlUaGVyZSIsICJjb25uZWN0aW9uRXJyb3IiLCAibm90Rm91bmQiLCAiY291bnRlckN1cnJlbnQiLCAiY291bnRlck5lZWRlZCIsICJjb3VudGVyQ2F0IiwgImN1cnJlbnRDYXRlZ29yeSIsICJkaWFsb2dIZWlnaHQiLCAiZWRpdFRva2VuIiwgImxvY2FsQ2F0TmFtZSIsICJwYXJlbnRDYXRzIiwgInN1YkNhdHMiLCAic2V0dGluZ3MiLCAidmFyaWFudENhY2hlIiwgInZhcmlhbnRDYWNoZTIiLCAiJGNvdW50ZXIiLCAiJCIsICIkcHJvZ3Jlc3NEaWFsb2ciLCAiJGxhYmVscyIsICIkc2VsZWN0ZWRMYWJlbHMiLCAiJGJvZHkiLCAiJGNvbnRhaW5lciIsICIkZGF0YUNvbnRhaW5lciIsICIkbWFya0NvdW50ZXIiLCAiJHJlc3VsdExpc3QiLCAiJHNlYXJjaElucHV0IiwgIiRoZWFkIiwgIiRsaW5rIiwgImNvbnN0cnVjdG9yIiwgIl9tdyR1dGlsJGdldFBhcmFtVmFsdSIsICJtc2ciLCAiaW5pdFNldHRpbmdzIiwgImNvbnRhaW5lciIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJwbGFjZWhvbGRlciIsICJ0eXBlIiwgInZhbHVlIiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJvbktleURvd24iLCAiZXZlbnQiLCAiJGVsZW1lbnQiLCAiY3VycmVudFRhcmdldCIsICJrZXkiLCAiXyRlbGVtZW50JHZhbCR0cmltIiwgIl8kZWxlbWVudCR2YWwiLCAiY2F0IiwgInZhbCIsICJ0cmltIiwgInVwZGF0ZUNhdHMiLCAib25DbGljayIsICJ0b2dnbGVBbGwiLCAiYXBwZW5kVG8iLCAiZmluZCIsICJidWlsZEVsZW1lbnRzIiwgInJlZ2V4Q2F0IiwgIlJlZ0V4cCIsICJsb2NhbGl6ZWRSZWdleCIsICJvbiIsICJvbGRWYWwiLCAibmV3VmFsIiwgInJlcGxhY2UiLCAiaW5pdEF1dG9jb21wbGV0ZSIsICJhdXRvY29tcGxldGUiLCAic291cmNlIiwgInJlcXVlc3QiLCAicmVzcG9uc2UiLCAiZG9BUElDYWxsIiwgImFjdGlvbiIsICJuYW1lc3BhY2UiLCAicmVkaXJlY3RzIiwgInNlYXJjaCIsICJ0ZXJtIiwgInJlc3VsdCIsICJtYXAiLCAiX2luZGV4IiwgIml0ZW0iLCAicG9zaXRpb24iLCAibXkiLCAiYXQiLCAib2YiLCAidG9nZ2xlQ2xhc3MiLCAicnVuIiwgIl93aW5kb3ckQ2F0QUxvdFByZWZzIiwgImNhdEFMb3RQcmVmcyIsICJ3aW5kb3ciLCAiQ2F0QUxvdFByZWZzIiwgInR5cGVPZkNhdEFMb3RQcmVmcyIsICJBcnJheSIsICJpc0FycmF5IiwgIl9pIiwgIl9PYmplY3Qka2V5cyIsICJPYmplY3QiLCAia2V5cyIsICJsZW5ndGgiLCAiX2NhdEFMb3RQcmVmcyRzZXR0aW5nIiwgInNldHRpbmdLZXkiLCAic2V0dGluZyIsICJzZWxlY3QiLCAiX2kyIiwgIl9PYmplY3Qka2V5czIiLCAibWVzc2FnZUtleSIsICJtZXNzYWdlIiwgImFyZ3MiLCAiZnVsbEtleSIsICJwYXJzZSIsICJwbGFpbiIsICJuYW1lc3BhY2VOdW1iZXIiLCAiZmFsbGJhY2siLCAiX0NBTCR3Z0Zvcm1hdHRlZE5hbWVzIiwgIndpa2lUZXh0QmxhbmsiLCAiU3RyaW5nIiwgInJhdyIsICJfdGVtcGxhdGVPYmplY3QiLCAiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsICJ3aWtpVGV4dEJsYW5rUkUiLCAiY3JlYXRlUmVnZXhTdHIiLCAibmFtZSIsICJyZWdleE5hbWUiLCAiaSIsICJpbml0aWFsIiwgInNsaWNlIiwgImxsIiwgInRvTG93ZXJDYXNlIiwgInVsIiwgInRvVXBwZXJDYXNlIiwgIl90ZW1wbGF0ZU9iamVjdDIiLCAiY2Fub25pY2FsIiwgInJlZ2V4U3RyaW5nIiwgIl9pMyIsICJfT2JqZWN0JGtleXMzIiwgImNhdE5hbWUiLCAidXBkYXRlU2VsZWN0aW9uQ291bnRlciIsICJmaWx0ZXIiLCAic2hvdyIsICJodG1sIiwgInRvU3RyaW5nIiwgImZpbmRBbGxWYXJpYW50cyIsICJjYXRlZ29yeSIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJfQ0FMJHZhcmlhbnRDYWNoZSIsICJfQ0FMJHZhcmlhbnRDYWNoZSRjYXQiLCAicmVzdWx0cyIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGV4dCIsICJ0aXRsZSIsICJfaTQiLCAiX1ZBUklBTlRTIiwgIl9PYmplY3QkZ2V0T3duUHJvcGVydCIsICJ2YXJpYW50IiwgInJlc3VsdDIiLCAiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwgImVxIiwgImRlZmluZVByb3BlcnR5IiwgInVuaXF1ZUFycmF5IiwgInJlZ2V4QnVpbGRlciIsICJ2YXJpYW50cyIsICJ2YXJpYW50UmVnRXhwcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJlc2NhcGVSZWdFeHAiLCAiX3RlbXBsYXRlT2JqZWN0MyIsICJmaXJzdCIsICJlcnIiLCAiZSIsICJmIiwgImpvaW4iLCAiX3BhcmFtcyIsICJjYWxsYmFjayIsICJkb0NhbGwiLCAiaGFuZGxlRXJyb3IiLCAiZXJyb3IiLCAibG9nIiwgInNldFRpbWVvdXQiLCAidXBkYXRlQ291bnRlciIsICJ0aGVuIiwgImNhdGNoIiwgInBvc3QiLCAibWFya0FzRG9uZSIsICIkbWFya2VkTGFiZWwiLCAidGFyZ2V0Q2F0ZWdvcnkiLCAibW9kZSIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiRnJhZ21lbnQiLCAiZG9DbGVhbnVwIiwgInJlbW92ZVVuY2F0IiwgImRpc3BsYXlSZXN1bHQiLCAiY3NzIiwgImN1cnNvciIsICJvdmVyZmxvdyIsICIkcGFyZW50IiwgInBhcmVudCIsICJyZW1vdmUiLCAicmVkdWNlIiwgInByZSIsICJjdXIiLCAiaW5kZXgiLCAiZWRpdENhdGVnb3JpZXMiLCAibWFya2VkTGFiZWwiLCAiX3RoaXMiLCAibWFya2VkTGFiZWxUaXRsZSIsICJvcmlnaW5UZXh0IiwgInN0YXJ0dGltZXN0YW1wIiwgInRpbWVzdGFtcCIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgInBhZ2VzIiwgInBhZ2UiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAiY29udGVudCIsICJzb3VyY2VjYXQiLCAidGFyZ2VSZWdFeHAiLCAidGVzdCIsICJzdW1tYXJ5IiwgInNvdXJjZUNhdFJlZ0V4cCIsICJ0b2tlbiIsICJ0YWdzIiwgImFzc2VydCIsICJib3QiLCAiYmFzZXRpbWVzdGFtcCIsICJnZXRDb250ZW50IiwgIm1ldGEiLCAidGl0bGVzIiwgInByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAiZ2V0VGl0bGVGcm9tTGluayIsICJocmVmIiwgIl9kZWNvZGVVUklDb21wb25lbnQkbSIsICJfZGVjb2RlVVJJQ29tcG9uZW50JG0yIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJtYXRjaCIsICJnZXRNYXJrZWRMYWJlbHMiLCAibWFya2VkTGFiZWxzIiwgImVhY2giLCAibGFiZWwiLCAiXyRsYWJlbExpbmskYXR0ciIsICIkbGFiZWwiLCAiJGxhYmVsTGluayIsICJhdHRyIiwgInNob3dQcm9ncmVzcyIsICJkaWFsb2ciLCAiZGlhbG9nQ2xhc3MiLCAibWluSGVpZ2h0IiwgImhlaWdodCIsICJ3aWR0aCIsICJtb2RhbCIsICJjbG9zZU9uRXNjYXBlIiwgImRyYWdnYWJsZSIsICJyZXNpemFibGUiLCAiaGlkZSIsICJkb1NvbWV0aGluZyIsICJub3RpZnkiLCAidGFnIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImFkZEhlcmUiLCAiY29weUhlcmUiLCAibW92ZUhlcmUiLCAiY3JlYXRlQ2F0TGlua3MiLCAic3ltYm9sIiwgImNhdGVnb3JpZXMiLCAic29ydCIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICIkdHIiLCAiZGF0YXNldCIsICJjbG9zZXN0IiwgImRhdGEiLCAic2hvd0NhdGVnb3J5TGlzdCIsICJfdGhpcyQkY29udGFpbmVyJHdpZHQiLCAiXyQkd2lkdGgiLCAiY3VycmVudENhdGVnb3JpZXMiLCAiZW1wdHkiLCAiTWF0aCIsICJtaW4iLCAiZ2V0UGFyZW50Q2F0cyIsICJfcGFnZXMkIiwgInF1ZXJ5IiwgIm1pc3NpbmciLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiZ2V0U3ViQ2F0cyIsICJsaXN0IiwgImNtdHlwZSIsICJjbWxpbWl0IiwgImNtdGl0bGUiLCAiX3Jlc3VsdCRxdWVyeSIsICJjYXRzIiwgImNhdGVnb3J5bWVtYmVycyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJnZXRDYXRlZ29yeUxpc3QiLCAiZmluZEFsbExhYmVscyIsICJhZGQiLCAiJHBhZ2VzIiwgIm1ha2VDbGlja2FibGUiLCAib25DYXRBTG90U2hpZnRDbGljayIsICJoYXNDbGFzcyIsICJhbHNvUmVzaXplIiwgImhhbmRsZXMiLCAicmVzaXplIiwgIl8kY3VycmVudFRhcmdldCRoZWlnaCIsICIkY3VycmVudFRhcmdldCIsICJsZWZ0IiwgInRvcCIsICJtYXhIZWlnaHQiLCAib2ZmIiwgImdldEJvZHkiLCAiZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlIiwgImZuIiwgImV4dGVuZCIsICJwcmV2Q2hlY2tib3giLCAiY3RybEtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJwYXJlbnRzIiwgInJlbW92ZUNsYXNzIiwgIiR0aGlzQ29udHJvbCIsICJ0YXJnZXQiLCAic2hpZnRLZXkiLCAibWV0aG9kIiwgIm1heCJdCn0K
