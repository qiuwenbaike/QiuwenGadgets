/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title1=Cat-a-lot.js|license=CC-BY-SA-4.0}}'
 *
 * Cat-a-lot
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js}
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Cat-a-lot.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Cat-a-lot/}
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
 * SPDX-License-Identifier: MIT
 *
 * check Icon from OOjs UI (constructive; green color)
 *
 * @base {@link https://www.qiuwenbaike.cn/wiki/File:OOjs_UI_icon_check-constructive.svg}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Cat-a-lot-pagestyles/images}
 * @license MIT {@link https://github.com/wikimedia/oojs-ui/blob/master/LICENSE-MIT}
 */

/**
 * Copyright 2011-2022 OOUI Team and other contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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
var _templateObject4;
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
      resizeCleanup;
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
        let autocompleteRequest = 0;
        let selectedSuggestion = -1;
        const $suggestions = $("<ul>").addClass("".concat(CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT, "-suggestions"));
        $suggestions.hide().appendTo(this.$container);
        const hideSuggestions = () => {
          selectedSuggestion = -1;
          $suggestions.empty().hide();
        };
        const selectSuggestion = (category) => {
          this.$searchInput.val(category).trigger("focus");
          hideSuggestions();
        };
        const showSuggestions = (categories) => {
          selectedSuggestion = -1;
          $suggestions.empty();
          var _iterator2 = _createForOfIteratorHelper(categories), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const category = _step2.value;
              $("<li>").text(category).on("mousedown", (event) => {
                event.preventDefault();
                selectSuggestion(category);
              }).appendTo($suggestions);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (categories.length) {
            $suggestions.show();
          } else {
            hideSuggestions();
          }
        };
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
          if (event.type !== "input") {
            return;
          }
          const requestId = ++autocompleteRequest;
          const search = newVal.trim();
          if (!search) {
            hideSuggestions();
            return;
          }
          this.doAPICall({
            action: "opensearch",
            namespace: CAL.TARGET_NAMESPACE,
            redirects: "resolve",
            search
          }, (result) => {
            if (requestId !== autocompleteRequest) {
              return;
            }
            showSuggestions(((result === null || result === void 0 ? void 0 : result[1]) || []).map((item) => item.replace(regexCat, "")).filter((item) => item.length > 0));
          });
        });
        this.$searchInput.on("keydown", (event) => {
          const suggestions = $suggestions.children();
          if (event.key === "Escape") {
            hideSuggestions();
          } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            if (!suggestions.length) return;
            event.preventDefault();
            selectedSuggestion = (event.key === "ArrowDown" ? selectedSuggestion + 1 : selectedSuggestion - 1 + suggestions.length) % suggestions.length;
            suggestions.removeClass("selected").eq(selectedSuggestion).addClass("selected");
          } else if (event.key === "Enter" && selectedSuggestion >= 0) {
            event.preventDefault();
            selectSuggestion(suggestions.eq(selectedSuggestion).text());
          }
        });
        this.$searchInput.on("blur", () => {
          window.setTimeout(hideSuggestions, 100);
        });
        this.$link.on("click", (event) => {
          $(event.currentTarget).toggleClass(CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED);
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
          var _iterator3 = _createForOfIteratorHelper(variants), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              let variant = _step3.value;
              variant = mw.util.escapeRegExp(variant);
              variant = variant.replace(/[\s_]+/g, String.raw(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["[s_]+"], ["[\\s_]+"]))));
              const first = variant.slice(0, 1);
              if (first.toUpperCase() !== first.toLowerCase()) {
                variant = "[".concat(first.toUpperCase()).concat(first.toLowerCase(), "]").concat(variant.slice(1));
              }
              variantRegExps[variantRegExps.length] = variant;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          return new RegExp("\\[\\[[\\s_]*".concat(catName, "[\\s_]*:[\\s_]*(?:").concat(variantRegExps.join("|"), ")[\\s_]*(\\|[^\\]]*(?:\\][^\\]]+)*)?\\]\\]"), "g");
        })();
      }
      static doAPICallAsync(_params) {
        return _asyncToGenerator(function* () {
          const params = {
            ..._params,
            format: "json",
            formatversion: "2"
          };
          let retryCount = 0;
          while (true) {
            try {
              if (params["action"] === "query") {
                return yield CAL.enqueueApiCall(() => CAL.api.get(params));
              }
              return yield CAL.enqueueApiCall(() => CAL.api.post(params));
            } catch (error) {
              mw.log.error("[Cat-a-lot] Ajax error:", error);
              if (retryCount < 4) {
                retryCount++;
                yield new Promise((resolve) => setTimeout(resolve, 300));
                continue;
              }
              throw error;
            }
          }
        })();
      }
      doAPICall(_params, callback) {
        CAL.doAPICallAsync(_params).then(callback).catch((error) => {
          mw.log.error("[Cat-a-lot] Ajax error:", error);
          const params = _params;
          if (params.title) {
            CAL.connectionError[CAL.connectionError.length] = params.title;
            this.updateCounter();
          }
        });
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
              const escapedSourceCat = sourcecat.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              text = text.replace(new RegExp(String.raw(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["({{[ 	]*(?:消歧义模板|消歧义|消歧義|[Dd]isambig|[Dd]isamb|[Dd]ab|[Aa]imai)[ 	]*(?:|[^|{}]*)*?|[ 	]*[Cc]at[ 	]*=[ 	]*)(", ")([ 	]*(?=||}}))"], ["(\\{\\{[ \\t]*(?:消歧义模板|消歧义|消歧義|[Dd]isambig|[Dd]isamb|[Dd]ab|[Aa]imai)[ \\t]*(?:\\|[^|{}]*)*?\\|[ \\t]*[Cc]at[ \\t]*=[ \\t]*)(", ")([ \\t]*(?=\\||\\}\\}))"])), escapedSourceCat), "g"), (_match, prefix, _category, suffix) => "".concat(prefix).concat(targetCategory).concat(suffix));
              break;
            case "remove":
              text = text.replace(sourceCatRegExp, "");
              summary = CAL.msg("summary-remove").replace("$1", sourcecat);
              break;
          }
          if (text === originText) {
            if (markedLabelTitle.startsWith("Template:") && (mode === "move" || mode === "copy")) {
              var _docPage$revisions$0$, _docPage$revisions;
              const docTitle = "".concat(markedLabelTitle, "/doc");
              const docResult = yield CAL.doAPICallAsync({
                action: "query",
                formatversion: "2",
                meta: "tokens",
                titles: docTitle,
                prop: "revisions",
                rvprop: ["content", "timestamp"],
                rvslots: "main"
              });
              if (!(docResult !== null && docResult !== void 0 && docResult["query"])) {
                CAL.connectionError[CAL.connectionError.length] = docTitle;
                _this.updateCounter();
                return;
              }
              const query = docResult === null || docResult === void 0 ? void 0 : docResult["query"];
              if (!query) {
                CAL.connectionError[CAL.connectionError.length] = docTitle;
                _this.updateCounter();
                return;
              }
              const {
                pages: docPages = []
              } = query;
              const [docPage] = docPages;
              const docOriginText = (_docPage$revisions$0$ = docPage === null || docPage === void 0 || (_docPage$revisions = docPage.revisions) === null || _docPage$revisions === void 0 || (_docPage$revisions = _docPage$revisions[0]) === null || _docPage$revisions === void 0 || (_docPage$revisions = _docPage$revisions.slots) === null || _docPage$revisions === void 0 || (_docPage$revisions = _docPage$revisions.main) === null || _docPage$revisions === void 0 ? void 0 : _docPage$revisions.content) !== null && _docPage$revisions$0$ !== void 0 ? _docPage$revisions$0$ : "";
              let docText = docOriginText;
              const docCatRegExp = yield CAL.regexBuilder(sourcecat);
              if (docText.match(docCatRegExp)) {
                if (mode === "move") {
                  docText = docText.replace(docCatRegExp, "[[".concat(CAL.localCatName, ":").concat(targetCategory, "$1]]"));
                } else if (mode === "copy") {
                  docText = docText.replace(docCatRegExp, "[[".concat(CAL.localCatName, ":").concat(sourcecat, "$1]]\n[[").concat(CAL.localCatName, ":").concat(targetCategory, "$1]]"));
                }
              }
              if (docText !== docOriginText) {
                var _docPage$starttimesta, _docPage$revisions$0$2, _docPage$revisions2;
                text = docText;
                const docStarttimestamp = (_docPage$starttimesta = docPage === null || docPage === void 0 ? void 0 : docPage.starttimestamp) !== null && _docPage$starttimesta !== void 0 ? _docPage$starttimesta : 0;
                const docTimestamp = (_docPage$revisions$0$2 = docPage === null || docPage === void 0 || (_docPage$revisions2 = docPage.revisions) === null || _docPage$revisions2 === void 0 || (_docPage$revisions2 = _docPage$revisions2[0]) === null || _docPage$revisions2 === void 0 ? void 0 : _docPage$revisions2.timestamp) !== null && _docPage$revisions$0$2 !== void 0 ? _docPage$revisions$0$2 : 0;
                try {
                  yield CAL.doAPICallAsync({
                    action: "edit",
                    token: CAL.editToken,
                    tags: CAL.API_TAG,
                    title: docTitle,
                    assert: "user",
                    bot: true,
                    basetimestamp: docTimestamp,
                    watchlist: CAL.settings.watchlist,
                    text,
                    summary,
                    starttimestamp: docStarttimestamp
                  });
                  _this.updateCounter();
                  console.log("[Cat-a-lot] Successfully edited template doc page: ".concat(docTitle));
                  yield CAL.doAPICallAsync({
                    action: "purge",
                    formatversion: "2",
                    meta: "tokens",
                    titles: markedLabelTitle
                  });
                  console.log("[Cat-a-lot] Successfully purged template doc page: ".concat(docTitle));
                  CAL.markAsDone($markedLabel, targetCategory, mode);
                } catch {
                  CAL.connectionError[CAL.connectionError.length] = docTitle;
                  _this.updateCounter();
                }
              }
            }
            CAL.notFound[CAL.notFound.length] = markedLabelTitle;
            _this.updateCounter();
            return;
          }
          if (mode !== "remove") {
            text = CAL.doCleanup(CAL.removeUncat(text));
          }
          try {
            yield CAL.doAPICallAsync({
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
            });
            _this.updateCounter();
            CAL.markAsDone($markedLabel, targetCategory, mode);
          } catch {
            CAL.connectionError[CAL.connectionError.length] = markedLabelTitle;
            _this.updateCounter();
          }
        })();
      }
      getContent(markedLabel, targetCategory, mode) {
        var _this2 = this;
        return _asyncToGenerator(function* () {
          try {
            const result = yield CAL.doAPICallAsync({
              action: "query",
              formatversion: "2",
              meta: "tokens",
              titles: markedLabel[0],
              prop: "revisions",
              rvprop: ["content", "timestamp"],
              rvslots: "main"
            });
            yield _this2.editCategories(result, markedLabel, targetCategory, mode);
          } catch {
            CAL.connectionError[CAL.connectionError.length] = markedLabel[0];
            _this2.updateCounter();
          }
        })();
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
        const $overlay = $("<div>").addClass("".concat(CLASS_NAME, "-overlay"));
        const $dialog = $(/* @__PURE__ */ import_ext_gadget3.default.createElement("div", {
          className: CLASS_NAME_FEEDBACK,
          role: "status"
        }, CAL.msg("editing"), /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
          className: CLASS_NAME_CURRENT_COUNTER
        }, CAL.counterCurrent), [CAL.msg("of"), CAL.counterNeeded]));
        $overlay.append($dialog).appendTo(this.$body);
        CAL.$progressDialog = $overlay;
        CAL.$counter = $dialog.find(".".concat(CLASS_NAME_CURRENT_COUNTER));
      }
      doSomething(targetCategory, mode) {
        var _this3 = this;
        return _asyncToGenerator(function* () {
          const markedLabels = _this3.getMarkedLabels();
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
          _this3.showProgress();
          var _iterator4 = _createForOfIteratorHelper(markedLabels), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              const markedLabel = _step4.value;
              yield _this3.getContent(markedLabel, targetCategory, mode);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        })();
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
        var _iterator5 = _createForOfIteratorHelper(categories), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const category = _step5.value;
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
          _iterator5.e(err);
        } finally {
          _iterator5.f();
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
          var _iterator6 = _createForOfIteratorHelper(categories), _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
              const cat = _step6.value;
              const catTitle = cat.title.replace(/^[^:]+:/, "");
              CAL.parentCats[CAL.parentCats.length] = catTitle;
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
          var _iterator7 = _createForOfIteratorHelper(cats), _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
              const cat = _step7.value;
              const catTitle = cat.title.replace(/^[^:]+:/, "");
              CAL.subCats[CAL.subCats.length] = catTitle;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
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
          this.enableResize();
          this.$resultList.css("max-height", "450px");
          if (CAL.isSearchMode) {
            this.updateCats("Pictures and images");
          } else {
            this.updateCats(CAL.CURRENT_CATEGROY);
          }
        } else {
          var _this$resizeCleanup;
          this.$dataContainer.hide();
          (_this$resizeCleanup = this.resizeCleanup) === null || _this$resizeCleanup === void 0 || _this$resizeCleanup.call(this);
          this.resizeCleanup = void 0;
          this.$container.css("width", "");
          CAL.$labels.off("click.catALot");
        }
      }
      enableResize() {
        var _this$resizeCleanup2;
        (_this$resizeCleanup2 = this.resizeCleanup) === null || _this$resizeCleanup2 === void 0 || _this$resizeCleanup2.call(this);
        const $handle = $("<div>").addClass("".concat(CLASS_NAME_CONTAINER, "-resize-handle")).prependTo(this.$container);
        const handle = $handle[0];
        const container = this.$container[0];
        if (!handle || !container) return;
        const onPointerDown = (event) => {
          const startHeight = container.getBoundingClientRect().height;
          const startY = event.clientY;
          const onPointerMove = (moveEvent) => {
            const height = Math.max(90, startHeight + startY - moveEvent.clientY);
            this.$container.height(height);
            CAL.dialogHeight = height;
            this.$resultList.css({
              maxHeight: "".concat(Math.max(0, height - 100), "px"),
              width: ""
            });
          };
          const onPointerUp = () => {
            document.removeEventListener("pointermove", onPointerMove);
            document.removeEventListener("pointerup", onPointerUp);
          };
          document.addEventListener("pointermove", onPointerMove);
          document.addEventListener("pointerup", onPointerUp, {
            once: true
          });
        };
        handle.addEventListener("pointerdown", onPointerDown);
        this.resizeCleanup = () => {
          handle.removeEventListener("pointerdown", onPointerDown);
          $handle.remove();
        };
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NhdC1hLWxvdC9vcHRpb25zLmpzb24iLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9DYXQtYS1sb3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvY29yZS50c3giLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZ2V0Q2FjaGVkS2V5cy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlLnRzIiwgInNyYy9DYXQtYS1sb3QvQ2F0LWEtbG90LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiYXBpVGFnXCI6IFwiQ2F0LWEtbG90XCIsXG5cdFwidGFyZ2V0TmFtZXNwYWNlXCI6IDE0LFxuXHRcInZlcnNpb25cIjogXCI2LjBcIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5DYXQtYS1Mb3RfcmVzdWx0cy1cIlxufVxuIiwgImltcG9ydCB0eXBlIHtTZXR0aW5nfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1jYXRfYV9sb3QnO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVI6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWNvbnRhaW5lcmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUn1fX2RhdGFgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfV9fY2F0ZWdvcnktbGlzdGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9X19hY3Rpb25gO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX05PX0ZPVU5EOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9LS1uby1mb3VuZGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX21hcmstY291bnRlcmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19zZWFyY2gtaW5wdXQtY29udGFpbmVyX19pbnB1dGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlM6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19zZWxlY3Rpb25zYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19BTEw6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU31fX2FsbGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfV9fbm9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUn1fX2hlYWRgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEfV9fbGlua2A7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LfS0tZW5hYmxlZGA7XG5jb25zdCBDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tY3VycmVudF9jb3VudGVyYDtcbmNvbnN0IENMQVNTX05BTUVfRkVFREJBQ0s6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWZlZWRiYWNrYDtcbmNvbnN0IENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9GRUVEQkFDS30tLWRvbmVgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tbGFiZWxgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTF9ET05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0xBQkVMfS0tZG9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1sYXN0LXNlbGVjdGVkYDtcbmNvbnN0IENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1zZWxlY3RlZGA7XG5cbmNvbnN0IERFRkFVTFRfU0VUVElORzogU2V0dGluZyA9IHtcblx0ZG9jbGVhbnVwOiB7XG5cdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0bGFiZWxfaTE4bjogJ2RvY2xlYW51cHByZWYnLFxuXHR9LFxuXHRlZGl0cGFnZXM6IHtcblx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdGxhYmVsX2kxOG46ICdlZGl0cGFnZXNwcmVmJyxcblx0fSxcblx0bWlub3I6IHtcblx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHRsYWJlbF9pMThuOiAnbWlub3JwcmVmJyxcblx0fSxcblx0c3ViY2F0Y291bnQ6IHtcblx0XHRkZWZhdWx0OiA1MCxcblx0XHRsYWJlbF9pMThuOiAnc3ViY2F0Y291bnRwcmVmJyxcblx0fSxcblx0d2F0Y2hsaXN0OiB7XG5cdFx0ZGVmYXVsdDogJ3ByZWZlcmVuY2VzJyxcblx0XHRsYWJlbF9pMThuOiAnd2F0Y2hsaXN0cHJlZicsXG5cdFx0c2VsZWN0X2kxOG46IHtcblx0XHRcdHdhdGNoX25vY2hhbmdlOiAnbm9jaGFuZ2UnLFxuXHRcdFx0d2F0Y2hfcHJlZjogJ3ByZWZlcmVuY2VzJyxcblx0XHRcdHdhdGNoX3Vud2F0Y2g6ICd1bndhdGNoJyxcblx0XHRcdHdhdGNoX3dhdGNoOiAnd2F0Y2gnLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5jb25zdCBWQVJJQU5UUzogc3RyaW5nW10gPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1teScsICd6aC1zZycsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddO1xuXG5leHBvcnQge1xuXHRDTEFTU19OQU1FLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUixcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNULFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOSyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQsXG5cdENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUsXG5cdENMQVNTX05BTUVfTEFCRUwsXG5cdENMQVNTX05BTUVfTEFCRUxfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVELFxuXHRDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVELFxuXHRERUZBVUxUX1NFVFRJTkcsXG5cdFZBUklBTlRTLFxufTtcbiIsICJpbXBvcnQgdHlwZSB7TWVzc2FnZUtleX0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IERFRkFVTFRfTUVTU0FHRVMgPSB7XG5cdC8vIGFzIGluIDE3IGZpbGVzIHNlbGVjdGVkXG5cdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAne3tQTFVSQUw6JDF8T25lIGZpbGV8JDEgZmlsZXN9fSBzZWxlY3RlZC4nLFxuXHQvLyBBY3Rpb25zXG5cdCdjYXQtYS1sb3QtY29weSc6ICdDb3B5Jyxcblx0J2NhdC1hLWxvdC1tb3ZlJzogJ01vdmUnLFxuXHQnY2F0LWEtbG90LWFkZCc6ICdBZGQnLFxuXHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICdSZW1vdmUgZnJvbSB0aGlzIGNhdGVnb3J5Jyxcblx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ0VudGVyIGNhdGVnb3J5IG5hbWUnLFxuXHQnY2F0LWEtbG90LXNlbGVjdCc6ICdTZWxlY3QnLFxuXHQnY2F0LWEtbG90LWFsbCc6ICdhbGwnLFxuXHQnY2F0LWEtbG90LW5vbmUnOiAnbm9uZScsXG5cdCdjYXQtYS1sb3Qtbm9uZS1zZWxlY3RlZCc6ICdObyBmaWxlcyBzZWxlY3RlZCEnLFxuXHQvLyBQcmVmZXJlbmNlc1xuXHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAnV2F0Y2hsaXN0IHByZWZlcmVuY2UgY29uY2VybmluZyBmaWxlcyBlZGl0ZWQgd2l0aCBDYXQtQS1Mb3QnLFxuXHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAnQWNjb3JkaW5nIHRvIHlvdXIgZ2VuZXJhbCBwcmVmZXJlbmNlcycsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAnRG8gbm90IGNoYW5nZSB3YXRjaHN0YXR1cycsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAnV2F0Y2ggcGFnZXMgZWRpdGVkIHdpdGggQ2F0LUEtTG90Jyxcblx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ1JlbW92ZSBwYWdlcyB3aGlsZSBlZGl0aW5nIHdpdGggQ2F0LUEtTG90IGZyb20geW91ciB3YXRjaGxpc3QnLFxuXHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XCJNYXJrIGVkaXRzIGFzIG1pbm9yIChpZiB5b3UgZ2VuZXJhbGx5IG1hcmsgeW91ciBlZGl0cyBhcyBtaW5vciwgdGhpcyB3b24ndCBjaGFuZ2UgYW55dGhpbmcpXCIsXG5cdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICdBbGxvdyBjYXRlZ29yaXNpbmcgcGFnZXMgKGluY2x1ZGluZyBjYXRlZ29yaWVzKSB0aGF0IGFyZSBub3QgZmlsZXMnLFxuXHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAnUmVtb3ZlIHt7Q2hlY2sgY2F0ZWdvcmllc319IGFuZCBvdGhlciBtaW5vciBjbGVhbnVwJyxcblx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAnU3ViLWNhdGVnb3JpZXMgdG8gc2hvdyBhdCBtb3N0Jyxcblx0Ly8gUHJvZ3Jlc3Ncblx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ0xvYWRpbmcuLi4nLFxuXHQnY2F0LWEtbG90LWVkaXRpbmcnOiAnRWRpdGluZyBwYWdlJyxcblx0J2NhdC1hLWxvdC1vZic6ICdvZiAnLFxuXHQnY2F0LWEtbG90LXNraXBwZWQtYWxyZWFkeSc6XG5cdFx0J1RoZSBmb2xsb3dpbmcge3tQTFVSQUw6JDF8cGFnZSB3YXN8JDEgcGFnZXMgd2VyZX19IHNraXBwZWQsIGJlY2F1c2UgdGhlIHBhZ2Ugd2FzIGFscmVhZHkgaW4gdGhlIGNhdGVnb3J5OicsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOlxuXHRcdCdUaGUgZm9sbG93aW5nIHt7UExVUkFMOiQxfHBhZ2Ugd2FzfCQxIHBhZ2VzIHdlcmV9fSBza2lwcGVkLCBiZWNhdXNlIHRoZSBvbGQgY2F0ZWdvcnkgY291bGQgbm90IGJlIGZvdW5kOicsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOlxuXHRcdFwiVGhlIGZvbGxvd2luZyB7e1BMVVJBTDokMXxwYWdlfCQxIHBhZ2VzfX0gY291bGRuJ3QgYmUgY2hhbmdlZCwgc2luY2UgdGhlcmUgd2VyZSBwcm9ibGVtcyBjb25uZWN0aW5nIHRvIHRoZSBzZXJ2ZXI6XCIsXG5cdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAnQWxsIHBhZ2VzIGFyZSBwcm9jZXNzZWQuJyxcblx0J2NhdC1hLWxvdC1kb25lJzogJ0RvbmUhJyxcblx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAnQWRkZWQgY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAnQ29waWVkIHRvIGNhdGVnb3J5ICQxJyxcblx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAnTW92ZWQgdG8gY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ1JlbW92ZWQgZnJvbSBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAnUmV0dXJuIHRvIHBhZ2UnLFxuXHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAnQ2F0ZWdvcnkgbm90IGZvdW5kLicsXG5cdC8vIFN1bW1hcmllczpcblx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBBZGRpbmcgW1tDYXRlZ29yeTokMV1dJyxcblx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXTogQ29weWluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXSB0byBbW0NhdGVnb3J5OiQyXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBNb3ZpbmcgZnJvbSBbW0NhdGVnb3J5OiQxXV0gdG8gW1tDYXRlZ29yeTokMl1dJyxcblx0J2NhdC1hLWxvdC1zdW1tYXJ5LXJlbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBSZW1vdmluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXScsXG59IHNhdGlzZmllcyBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPjtcblxuY29uc3Qgc2V0TWVzc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdC8qISBDYXQtYS1sb3QgbWVzc2FnZXMgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cblx0aWYgKHdnVXNlckxhbmd1YWdlID09PSAnZW4nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldDx0eXBlb2YgREVGQVVMVF9NRVNTQUdFUz4oe1xuXHRcdFx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0XHRcdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAnJDHlgIvmlofku7blt7Lpgbjmk4cnLFxuXHRcdFx0Ly8gQWN0aW9uc1xuXHRcdFx0J2NhdC1hLWxvdC1jb3B5JzogJ+ikh+ijvScsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmUnOiAn56e75YuVJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkJzogJ+WinuWKoCcsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICflvp7mraTliIbpoZ7np7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ+i8uOWFpeWIhumhnuWQjeeosScsXG5cdFx0XHQnY2F0LWEtbG90LXNlbGVjdCc6ICfpgbjmk4cnLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwnOiAn5YWo6YOoJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZSc6ICfnhKEnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ+aykuaciemBuOaTh+aWh+S7tu+8gScsXG5cdFx0XHQvLyBQcmVmZXJlbmNlc1xuXHRcdFx0J2NhdC1hLWxvdC13YXRjaGxpc3RwcmVmJzogJ+S9v+eUqENhdC1BLUxvdOe3qOi8r+aWh+S7tuaZgueahOebo+imluWIl+ihqOmBuOmghScsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAn6IiH57O757Wx5Y+D5pW46Kit572u55u45ZCMJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAn5LiN6KaB5pu05pS555uj6KaW54uA5oWLJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAn55uj6KaW5L2/55SoQ2F0LUEtTG9057eo6Lyv55qE6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfdW53YXRjaCc6ICflsIfkvb/nlKhDYXQtQS1Mb3Tnt6jovK/nmoTpoIHpnaLlvp7nm6PoppbliJfooajnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1taW5vcnByZWYnOlxuXHRcdFx0XHQn5bCH57eo6Lyv5qiZ6KiY54iy5bCP5L+u5pS577yI6Iul5oKo5Zyo57O757Wx5Y+D5pW46Kit572u5Lit5bey6Kit572u5bCH5omA5pyJ57eo6Lyv5qiZ6KiY54iy5bCP5L+u5pS577yM5q2k6YG46aCF5LiN5pyD5bCN54++5pyJ6KGM54iy6YCy6KGM5pS55YuV77yJJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICflhYHoqLHlsI3kuI3mmK/mlofku7bnmoTpoIHpnaLlkozlrZDliIbpoZ7pgLLooYzliIbpoZ7mk43kvZwnLFxuXHRcdFx0J2NhdC1hLWxvdC1kb2NsZWFudXBwcmVmJzogJ+enu+mZpHt7Q2hlY2sgY2F0ZWdvcmllc3195Lim6YCy6KGM5YW25LuW57Sw56+A5riF55CGJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3ViY2F0Y291bnRwcmVmJzogJ+acgOWkmumhr+ekuueahOWtkOWIhumhnuaVuOmHjycsXG5cdFx0XHQvLyBQcm9ncmVzc1xuXHRcdFx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ+ato+WcqOWKoOi8ieKApuKApicsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRpbmcnOiAn5q2j5Zyo57eo6Lyv6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtb2YnOiAn77yM5YWx5pyJJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5JzogJ+S7peS4i+mggemdouW3sui3s+mBju+8jOWboOeIsumggemdouW3sue2k+WcqOWIhumhnuS4re+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtbm90LWZvdW5kJzogJ+S7peS4i+mggemdouW3sui3s+mBju+8jOWboOeIsuaJvuS4jeWIsOePvuacieWIhumhnu+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtc2VydmVyJzogJ+S7peS4i+mggemdoueEoeazlee3qOi8r++8jOWboOeIsumAo+aOpeacjeWLmeWZqOWHuumMr++8micsXG5cdFx0XHQnY2F0LWEtbG90LWFsbC1kb25lJzogJ+WFqOmDqOmggemdouW3suiZleeQhuOAgicsXG5cdFx0XHQnY2F0LWEtbG90LWRvbmUnOiAn5bey5a6M5oiQ77yBJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkZWQtY2F0JzogJ+W3suWKoOWFpeWIhumhnicsXG5cdFx0XHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAn5bey6KSH6KO95Yiw5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZWQtY2F0JzogJ+W3suenu+WLleWIsOWIhumhnicsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ+W3suW+nuWIhumhnuenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LXJldHVybi10by1wYWdlJzogJ+i/lOWbnuWIsOmggemdoicsXG5cdFx0XHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAn5om+5LiN5Yiw5YiG6aGe44CCJyxcblx0XHRcdC8vIFN1bW1hcmllc1xuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5Yqg5YWl5YiG6aGeW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1jb3B5JzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbpoZ7plpPopIfoo73vvJrlvp5bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhumhnumWk+enu+WLle+8muW+nltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrlvp7liIbpoZ7np7vpmaTvvJpbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldDx0eXBlb2YgREVGQVVMVF9NRVNTQUdFUz4oe1xuXHRcdFx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0XHRcdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAn5bey6YCJ5oupJDHkuKrpobXpnaLmiJbmlofku7YnLFxuXHRcdFx0Ly8gQWN0aW9uc1xuXHRcdFx0J2NhdC1hLWxvdC1jb3B5JzogJ+WkjeWIticsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmUnOiAn56e75YqoJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkJzogJ+WinuWKoCcsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICfku47mraTliIbnsbvnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ+i+k+WFpeWIhuexu+WQjeensCcsXG5cdFx0XHQnY2F0LWEtbG90LXNlbGVjdCc6ICfpgInmi6knLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwnOiAn5YWo6YOoJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZSc6ICfml6AnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ+ayoeaciemAieaLqeS7u+S9lemhtemdouaIluaWh+S7tu+8gScsXG5cdFx0XHQvLyBQcmVmZXJlbmNlc1xuXHRcdFx0J2NhdC1hLWxvdC13YXRjaGxpc3RwcmVmJzogJ+S9v+eUqENhdC1hLWxvdOe8lui+keaWh+S7tuaXtueahOebkeinhuWIl+ihqOmAiemhuScsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAn5LiO57O757uf5Y+C5pWw6K6+572u55u45ZCMJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAn5LiN6KaB5pu05pS555uR6KeG54q25oCBJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAn55uR6KeG5L2/55SoQ2F0LWEtbG9057yW6L6R55qE6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfdW53YXRjaCc6ICflsIbkvb/nlKhDYXQtYS1sb3TnvJbovpHnmoTpobXpnaLku47nm5Hop4bliJfooajnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1taW5vcnByZWYnOlxuXHRcdFx0XHQn5bCG57yW6L6R5qCH6K6w5Li65bCP5L+u5pS577yI6Iul5oKo5Zyo57O757uf5Y+C5pWw6K6+572u5Lit5bey6K6+572u5bCG5omA5pyJ57yW6L6R5qCH6K6w5Li65bCP5L+u5pS577yM5q2k6YCJ6aG55LiN5Lya5a+5546w5pyJ6KGM5Li66L+b6KGM5pS55Yqo77yJJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICflhYHorrjlr7nkuI3mmK/mlofku7bnmoTpobXpnaLlkozlrZDliIbnsbvov5vooYzliIbnsbvmk43kvZwnLFxuXHRcdFx0J2NhdC1hLWxvdC1kb2NsZWFudXBwcmVmJzogJ+enu+mZpHt7Q2hlY2sgY2F0ZWdvcmllc3195bm26L+b6KGM5YW25LuW57uG6IqC5riF55CGJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3ViY2F0Y291bnRwcmVmJzogJ+acgOWkmuaYvuekuueahOWtkOWIhuexu+aVsOmHjycsXG5cdFx0XHQvLyBQcm9ncmVzc1xuXHRcdFx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ+ato+WcqOWKoOi9veKApuKApicsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRpbmcnOiAn5q2j5Zyo57yW6L6R6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtb2YnOiAn77yM5YWx5pyJJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5JzogJ+S7peS4i+mhtemdouW3sui3s+i/h++8jOWboOS4uumhtemdouW3sue7j+WcqOWIhuexu+S4re+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtbm90LWZvdW5kJzogJ+S7peS4i+mhtemdouW3sui3s+i/h++8jOWboOS4uuaJvuS4jeWIsOeOsOacieWIhuexu++8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtc2VydmVyJzogJ+S7peS4i+mhtemdouaXoOazlee8lui+ke+8jOWboOS4uui/nuaOpeacjeWKoeWZqOWHuumUme+8micsXG5cdFx0XHQnY2F0LWEtbG90LWFsbC1kb25lJzogJ+WFqOmDqOmhtemdouW3suWkhOeQhuOAgicsXG5cdFx0XHQnY2F0LWEtbG90LWRvbmUnOiAn5bey5a6M5oiQ77yBJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkZWQtY2F0JzogJ+W3suWKoOWFpeWIhuexuycsXG5cdFx0XHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAn5bey5aSN5Yi25Yiw5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZWQtY2F0JzogJ+W3suenu+WKqOWIsOWIhuexuycsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ+W3suS7juWIhuexu+enu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LXJldHVybi10by1wYWdlJzogJ+i/lOWbnuWIsOmhtemdoicsXG5cdFx0XHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAn5om+5LiN5Yiw5YiG57G744CCJyxcblx0XHRcdC8vIFN1bW1hcmllc1xuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5Yqg5YWl5YiG57G7W1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1jb3B5JzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbnsbvpl7TlpI3liLbvvJrku45bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhuexu+mXtOenu+WKqO+8muS7jltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrku47liIbnsbvnp7vpmaTvvJpbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge0RFRkFVTFRfTUVTU0FHRVMsIHNldE1lc3NhZ2VzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1xuXHRDTEFTU19OQU1FLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUixcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNULFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOSyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQsXG5cdENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUsXG5cdENMQVNTX05BTUVfTEFCRUwsXG5cdENMQVNTX05BTUVfTEFCRUxfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCxcblx0REVGQVVMVF9TRVRUSU5HLFxuXHRWQVJJQU5UUyxcbn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge0RFRkFVTFRfTUVTU0FHRVMsIHNldE1lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCB0eXBlIHtNZXNzYWdlS2V5LCBTZXR0aW5nfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Z2V0Qm9keSwgdW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0Q2FjaGVkS2V5c30gZnJvbSAnLi9nZXRDYWNoZWRLZXlzJztcblxuY29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMsIHdnTmFtZXNwYWNlSWRzLCB3Z05hbWVzcGFjZU51bWJlciwgd2dUaXRsZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8qKlxuICogQ2hhbmdlcyBjYXRlZ29yeSBvZiBtdWx0aXBsZSBmaWxlc1xuICovXG5jb25zdCBjYXRBTG90ID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHQvKiEgQ2F0LWEtbG90IHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG5cdGNsYXNzIENBTCB7XG5cdFx0cHVibGljIHN0YXRpYyBpc1NlYXJjaE1vZGUgPSBmYWxzZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1FU1NBR0VTOiBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPiA9IERFRkFVTFRfTUVTU0FHRVM7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TRVRUSU5HOiBTZXR0aW5nID0gREVGQVVMVF9TRVRUSU5HO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQVBJX1RBRzogc3RyaW5nID0gT1BUSU9OUy5hcGlUYWc7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEFSR0VUX05BTUVTUEFDRTogbnVtYmVyID0gT1BUSU9OUy50YXJnZXROYW1lc3BhY2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBDVVJSRU5UX0NBVEVHUk9ZOiBzdHJpbmcgPSB3Z1RpdGxlO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgd2dGb3JtYXR0ZWROYW1lc3BhY2VzOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0gd2dGb3JtYXR0ZWROYW1lc3BhY2VzO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHdnTmFtZXNwYWNlSWRzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0gd2dOYW1lc3BhY2VJZHM7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhcGkgPSBhcGk7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhbHJlYWR5VGhlcmU6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY29ubmVjdGlvbkVycm9yOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdEZvdW5kOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDdXJyZW50ID0gMDtcblx0XHRwcml2YXRlIHN0YXRpYyBjb3VudGVyTmVlZGVkID0gMDtcblxuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDYXQgPSAwO1xuXHRcdHByaXZhdGUgc3RhdGljIGN1cnJlbnRDYXRlZ29yeSA9ICcnO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgZGlhbG9nSGVpZ2h0ID0gNDUwO1xuXHRcdHByaXZhdGUgc3RhdGljIGVkaXRUb2tlbiA9ICcnO1xuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsQ2F0TmFtZSA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlc1tDQUwuVEFSR0VUX05BTUVTUEFDRV0gYXMgc3RyaW5nO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcGFyZW50Q2F0czogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJDYXRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgc2V0dGluZ3M6IE5vbk51bGxhYmxlPHR5cGVvZiB3aW5kb3cuQ2F0QUxvdFByZWZzPiA9IHt9O1xuXHRcdHByaXZhdGUgc3RhdGljIHZhcmlhbnRDYWNoZTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cblx0XHQvLyBSYXRlIGxpbWl0aW5nOiBzZXQgdG8gMTAwMCBtcyBmb3IgfjEgcmVxdWVzdCBwZXIgc2Vjb25kXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVxdWVzdERlbGF5ID0gMTAwMDtcblx0XHRwcml2YXRlIHN0YXRpYyByZXF1ZXN0UXVldWU6IEFycmF5PHtcblx0XHRcdGZuOiAoKSA9PiBQcm9taXNlPHVua25vd24+O1xuXHRcdFx0cmVzb2x2ZTogKHZhbHVlOiB1bmtub3duKSA9PiB2b2lkO1xuXHRcdFx0cmVqZWN0OiAocmVhc29uOiB1bmtub3duKSA9PiB2b2lkO1xuXHRcdH0+ID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcHJvY2Vzc2luZ1F1ZXVlID0gZmFsc2U7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbGFzdFN0YXJ0ID0gMDtcblxuXHRcdHByaXZhdGUgc3RhdGljIGVucXVldWVBcGlDYWxsPFQ+KGZuOiAoKSA9PiBUKTogUHJvbWlzZTxBd2FpdGVkPFQ+PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2U8QXdhaXRlZDxUPj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRDQUwucmVxdWVzdFF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGZuOiBmbiBhcyB1bmtub3duIGFzICgpID0+IFByb21pc2U8dW5rbm93bj4sXG5cdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSBhcyAodjogdW5rbm93bikgPT4gdm9pZCxcblx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdCBhcyAoZTogdW5rbm93bikgPT4gdm9pZCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmICghQ0FMLnByb2Nlc3NpbmdRdWV1ZSkge1xuXHRcdFx0XHRcdENBTC5wcm9jZXNzaW5nUXVldWUgPSB0cnVlO1xuXHRcdFx0XHRcdHZvaWQgQ0FMLnByb2Nlc3NRdWV1ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhc3luYyBwcm9jZXNzUXVldWUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHR3aGlsZSAoQ0FMLnJlcXVlc3RRdWV1ZS5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3Qge2ZuLCByZXNvbHZlLCByZWplY3R9ID0gQ0FMLnJlcXVlc3RRdWV1ZS5zaGlmdCgpITtcblx0XHRcdFx0Y29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblx0XHRcdFx0Y29uc3Qgd2FpdCA9IE1hdGgubWF4KDAsIENBTC5yZXF1ZXN0RGVsYXkgLSAobm93IC0gQ0FMLmxhc3RTdGFydCkpO1xuXHRcdFx0XHRpZiAod2FpdCkge1xuXHRcdFx0XHRcdGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIHdhaXQpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRDQUwubGFzdFN0YXJ0ID0gRGF0ZS5ub3coKTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCByZXMgPSBhd2FpdCBmbigpO1xuXHRcdFx0XHRcdHJlc29sdmUocmVzKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdHJlamVjdChlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Q0FMLnByb2Nlc3NpbmdRdWV1ZSA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljICRjb3VudGVyOiBKUXVlcnkgPSAkKCk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgJHByb2dyZXNzRGlhbG9nOiBKUXVlcnkgPSAkKCk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgJGxhYmVsczogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRzZWxlY3RlZExhYmVsczogSlF1ZXJ5ID0gJCgpO1xuXG5cdFx0cHJpdmF0ZSByZWFkb25seSAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkY29udGFpbmVyOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkZGF0YUNvbnRhaW5lcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJG1hcmtDb3VudGVyOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkcmVzdWx0TGlzdDogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJHNlYXJjaElucHV0OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD47XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkaGVhZDogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGxpbms6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD47XG5cdFx0cHJpdmF0ZSByZXNpemVDbGVhbnVwPzogKCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xuXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pikge1xuXHRcdFx0aWYgKCFtdy5tZXNzYWdlKCdjYXQtYS1sb3QtbG9hZGluZycpLnBhcnNlKCkpIHtcblx0XHRcdFx0bXcubWVzc2FnZXMuc2V0KENBTC5NRVNTQUdFUyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJGJvZHkgPSAkYm9keTtcblx0XHRcdENBTC5pbml0U2V0dGluZ3MoKTtcblxuXHRcdFx0Y29uc3QgY29udGFpbmVyID0gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17W0NMQVNTX05BTUUsIENMQVNTX05BTUVfQ09OVEFJTkVSLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVJ9IC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUfSAvPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVR9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e0NBTC5tc2coJ2VudGVyLW5hbWUnKX1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e0NBTC5pc1NlYXJjaE1vZGUgPyAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCdzZWFyY2gnKSA/PyAnJykgOiAnJ31cblx0XHRcdFx0XHRcdFx0XHRvbktleURvd249eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkPEhUTUxJbnB1dEVsZW1lbnQ+KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXQ6IHN0cmluZyA9ICRlbGVtZW50LnZhbCgpPy50cmltKCkgPz8gJyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjYXQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoY2F0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9PlxuXHRcdFx0XHRcdFx0XHR7W0NBTC5tc2coJ3NlbGVjdCcpLCAnICddfVxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTH1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUFsbCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FsbCcpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdHsnIOKAoiAnfVxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkV9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbm9uZScpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH0+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS30+Q2F0LWEtbG90PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKSBhcyBKUXVlcnk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIuYXBwZW5kVG8odGhpcy4kYm9keSk7XG5cblx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1gKTtcblx0XHRcdHRoaXMuJG1hcmtDb3VudGVyID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUn1gKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QgPSB0aGlzLiRkYXRhQ29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1gKTtcblx0XHRcdHRoaXMuJHNlYXJjaElucHV0ID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KFxuXHRcdFx0XHRgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUfWBcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGhlYWQgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH1gKTtcblx0XHRcdHRoaXMuJGxpbmsgPSB0aGlzLiRoZWFkLmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9YCk7XG5cdFx0fVxuXG5cdFx0cHVibGljIGJ1aWxkRWxlbWVudHMoKTogdm9pZCB7XG5cdFx0XHRjb25zdCByZWdleENhdDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXlxcXFxzKiR7Q0FMLmxvY2FsaXplZFJlZ2V4KENBTC5UQVJHRVRfTkFNRVNQQUNFLCAnQ2F0ZWdvcnknKX06YCwgJycpO1xuXHRcdFx0bGV0IGlzQ29tcG9zaXRpb25TdGFydDogYm9vbGVhbjtcblx0XHRcdGxldCBhdXRvY29tcGxldGVSZXF1ZXN0ID0gMDtcblx0XHRcdGxldCBzZWxlY3RlZFN1Z2dlc3Rpb24gPSAtMTtcblx0XHRcdGNvbnN0ICRzdWdnZXN0aW9ucyA9ICQoJzx1bD4nKS5hZGRDbGFzcyhcblx0XHRcdFx0YCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUfS1zdWdnZXN0aW9uc2Bcblx0XHRcdCk7XG5cdFx0XHQkc3VnZ2VzdGlvbnMuaGlkZSgpLmFwcGVuZFRvKHRoaXMuJGNvbnRhaW5lcik7XG5cdFx0XHRjb25zdCBoaWRlU3VnZ2VzdGlvbnMgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHNlbGVjdGVkU3VnZ2VzdGlvbiA9IC0xO1xuXHRcdFx0XHQkc3VnZ2VzdGlvbnMuZW1wdHkoKS5oaWRlKCk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3Qgc2VsZWN0U3VnZ2VzdGlvbiA9IChjYXRlZ29yeTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdHRoaXMuJHNlYXJjaElucHV0LnZhbChjYXRlZ29yeSkudHJpZ2dlcignZm9jdXMnKTtcblx0XHRcdFx0aGlkZVN1Z2dlc3Rpb25zKCk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3Qgc2hvd1N1Z2dlc3Rpb25zID0gKGNhdGVnb3JpZXM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG5cdFx0XHRcdHNlbGVjdGVkU3VnZ2VzdGlvbiA9IC0xO1xuXHRcdFx0XHQkc3VnZ2VzdGlvbnMuZW1wdHkoKTtcblx0XHRcdFx0Zm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0JCgnPGxpPicpXG5cdFx0XHRcdFx0XHQudGV4dChjYXRlZ29yeSlcblx0XHRcdFx0XHRcdC5vbignbW91c2Vkb3duJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNlbGVjdFN1Z2dlc3Rpb24oY2F0ZWdvcnkpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5hcHBlbmRUbygkc3VnZ2VzdGlvbnMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjYXRlZ29yaWVzLmxlbmd0aCkge1xuXHRcdFx0XHRcdCRzdWdnZXN0aW9ucy5zaG93KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aGlkZVN1Z2dlc3Rpb25zKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdjb21wb3NpdGlvbnN0YXJ0JywgKCkgPT4ge1xuXHRcdFx0XHRpc0NvbXBvc2l0aW9uU3RhcnQgPSB0cnVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdjb21wb3NpdGlvbmVuZCcsICgpID0+IHtcblx0XHRcdFx0aXNDb21wb3NpdGlvblN0YXJ0ID0gZmFsc2U7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQub24oJ2lucHV0IGtleXVwJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGlmIChpc0NvbXBvc2l0aW9uU3RhcnQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3Qge2N1cnJlbnRUYXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHRcdGNvbnN0IHt2YWx1ZTogb2xkVmFsfSA9IGN1cnJlbnRUYXJnZXQ7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbDogc3RyaW5nID0gb2xkVmFsLnJlcGxhY2UocmVnZXhDYXQsICcnKTtcblx0XHRcdFx0aWYgKG5ld1ZhbCAhPT0gb2xkVmFsKSB7XG5cdFx0XHRcdFx0Y3VycmVudFRhcmdldC52YWx1ZSA9IG5ld1ZhbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZXZlbnQudHlwZSAhPT0gJ2lucHV0Jykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCByZXF1ZXN0SWQgPSArK2F1dG9jb21wbGV0ZVJlcXVlc3Q7XG5cdFx0XHRcdGNvbnN0IHNlYXJjaCA9IG5ld1ZhbC50cmltKCk7XG5cdFx0XHRcdGlmICghc2VhcmNoKSB7XG5cdFx0XHRcdFx0aGlkZVN1Z2dlc3Rpb25zKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ29wZW5zZWFyY2gnLFxuXHRcdFx0XHRcdFx0bmFtZXNwYWNlOiBDQUwuVEFSR0VUX05BTUVTUEFDRSxcblx0XHRcdFx0XHRcdHJlZGlyZWN0czogJ3Jlc29sdmUnLFxuXHRcdFx0XHRcdFx0c2VhcmNoLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHJlcXVlc3RJZCAhPT0gYXV0b2NvbXBsZXRlUmVxdWVzdCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzaG93U3VnZ2VzdGlvbnMoXG5cdFx0XHRcdFx0XHRcdChyZXN1bHQ/LlsxXSB8fCBbXSlcblx0XHRcdFx0XHRcdFx0XHQubWFwKChpdGVtOiBzdHJpbmcpID0+IGl0ZW0ucmVwbGFjZShyZWdleENhdCwgJycpKVxuXHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoKGl0ZW06IHN0cmluZykgPT4gaXRlbS5sZW5ndGggPiAwKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdrZXlkb3duJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0IHN1Z2dlc3Rpb25zID0gJHN1Z2dlc3Rpb25zLmNoaWxkcmVuKCk7XG5cdFx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG5cdFx0XHRcdFx0aGlkZVN1Z2dlc3Rpb25zKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xuXHRcdFx0XHRcdGlmICghc3VnZ2VzdGlvbnMubGVuZ3RoKSByZXR1cm47XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRzZWxlY3RlZFN1Z2dlc3Rpb24gPVxuXHRcdFx0XHRcdFx0KGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bidcblx0XHRcdFx0XHRcdFx0PyBzZWxlY3RlZFN1Z2dlc3Rpb24gKyAxXG5cdFx0XHRcdFx0XHRcdDogc2VsZWN0ZWRTdWdnZXN0aW9uIC0gMSArIHN1Z2dlc3Rpb25zLmxlbmd0aCkgJSBzdWdnZXN0aW9ucy5sZW5ndGg7XG5cdFx0XHRcdFx0c3VnZ2VzdGlvbnMucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJykuZXEoc2VsZWN0ZWRTdWdnZXN0aW9uKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcblx0XHRcdFx0fSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgc2VsZWN0ZWRTdWdnZXN0aW9uID49IDApIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHNlbGVjdFN1Z2dlc3Rpb24oc3VnZ2VzdGlvbnMuZXEoc2VsZWN0ZWRTdWdnZXN0aW9uKS50ZXh0KCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdibHVyJywgKCkgPT4ge1xuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChoaWRlU3VnZ2VzdGlvbnMsIDEwMCk7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJGxpbmsub24oJ2NsaWNrJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdCQoZXZlbnQuY3VycmVudFRhcmdldCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQpO1xuXHRcdFx0XHR0aGlzLnJ1bigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaW5pdFNldHRpbmdzKCk6IHZvaWQge1xuXHRcdFx0bGV0IGNhdEFMb3RQcmVmczogdHlwZW9mIENBTC5zZXR0aW5ncyA9IHdpbmRvdy5DYXRBTG90UHJlZnMgPz8ge307XG5cdFx0XHRjb25zdCB0eXBlT2ZDYXRBTG90UHJlZnMgPSB0eXBlb2YgY2F0QUxvdFByZWZzO1xuXHRcdFx0aWYgKCh0eXBlT2ZDYXRBTG90UHJlZnMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGNhdEFMb3RQcmVmcykpIHx8IHR5cGVPZkNhdEFMb3RQcmVmcyAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Y2F0QUxvdFByZWZzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3Qgc2V0dGluZ0tleSBvZiBPYmplY3Qua2V5cyhDQUwuREVGQVVMVF9TRVRUSU5HKSBhcyAoa2V5b2YgU2V0dGluZylbXSkge1xuXHRcdFx0XHRjb25zdCBzZXR0aW5nID0gQ0FMLkRFRkFVTFRfU0VUVElOR1tzZXR0aW5nS2V5XTtcblxuXHRcdFx0XHRDQUwuc2V0dGluZ3Nbc2V0dGluZ0tleV0gPSBjYXRBTG90UHJlZnNbc2V0dGluZ0tleV0gPz8gc2V0dGluZy5kZWZhdWx0O1xuXG5cdFx0XHRcdGlmICghc2V0dGluZy5zZWxlY3RfaTE4bikge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2V0dGluZy5zZWxlY3QgPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBtZXNzYWdlS2V5IG9mIE9iamVjdC5rZXlzKHNldHRpbmcuc2VsZWN0X2kxOG4pKSB7XG5cdFx0XHRcdFx0Y29uc3QgbWVzc2FnZTogc3RyaW5nID0gc2V0dGluZy5zZWxlY3RfaTE4blttZXNzYWdlS2V5XSBhcyBrZXlvZiB0eXBlb2Ygc2V0dGluZy5zZWxlY3RfaTE4bjtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0c2V0dGluZy5zZWxlY3RbQ0FMLm1zZyhtZXNzYWdlS2V5IGFzIG5ldmVyKV0gPSBtZXNzYWdlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgbXNnKGtleTogTWVzc2FnZUtleSBleHRlbmRzIGBjYXQtYS1sb3QtJHtpbmZlciBQfWAgPyBQIDogbmV2ZXIsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcblx0XHRcdGNvbnN0IGZ1bGxLZXk6IHN0cmluZyA9IGBjYXQtYS1sb3QtJHtrZXl9YDtcblx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGZ1bGxLZXksIC4uLmFyZ3MpLnBhcnNlKCkgOiBtdy5tZXNzYWdlKGZ1bGxLZXkpLnBsYWluKCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsaXplZFJlZ2V4KG5hbWVzcGFjZU51bWJlcjogbnVtYmVyLCBmYWxsYmFjazogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdC8vIENvcGllZCBmcm9tIEhvdENhdCwgdGhhbmtzIEx1cG8uXG5cdFx0XHRjb25zdCB3aWtpVGV4dEJsYW5rOiBzdHJpbmcgPSBTdHJpbmcucmF3YFtcXHQgX1xceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMF0rYDtcblx0XHRcdGNvbnN0IHdpa2lUZXh0QmxhbmtSRTogUmVnRXhwID0gbmV3IFJlZ0V4cCh3aWtpVGV4dEJsYW5rLCAnZycpO1xuXHRcdFx0Y29uc3QgY3JlYXRlUmVnZXhTdHIgPSAobmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nID0+IHtcblx0XHRcdFx0aWYgKCFuYW1lPy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHJlZ2V4TmFtZTogc3RyaW5nID0gJyc7XG5cdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW5pdGlhbDogc3RyaW5nID0gbmFtZS5zbGljZShpLCBpICsgMSk7XG5cdFx0XHRcdFx0Y29uc3QgbGw6IHN0cmluZyA9IGluaXRpYWwudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRjb25zdCB1bDogc3RyaW5nID0gaW5pdGlhbC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRcdHJlZ2V4TmFtZSArPSBsbCA9PT0gdWwgPyBpbml0aWFsIDogYFske2xsfSR7dWx9XWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlZ2V4TmFtZS5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csIFN0cmluZy5yYXdgXFwkMWApLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKTtcblx0XHRcdH07XG5cdFx0XHRmYWxsYmFjayA9IGZhbGxiYWNrLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRjb25zdCBjYW5vbmljYWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IENBTC53Z0Zvcm1hdHRlZE5hbWVzcGFjZXNbbmFtZXNwYWNlTnVtYmVyXT8udG9Mb3dlckNhc2UoKTtcblx0XHRcdGxldCByZWdleFN0cmluZzogc3RyaW5nID0gY3JlYXRlUmVnZXhTdHIoY2Fub25pY2FsKTtcblx0XHRcdGlmIChmYWxsYmFjayAmJiBjYW5vbmljYWwgIT09IGZhbGxiYWNrKSB7XG5cdFx0XHRcdHJlZ2V4U3RyaW5nICs9IGB8JHtjcmVhdGVSZWdleFN0cihmYWxsYmFjayl9YDtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3QgY2F0TmFtZSBvZiBPYmplY3Qua2V5cyhDQUwud2dOYW1lc3BhY2VJZHMpKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRjYXROYW1lLnRvTG93ZXJDYXNlKCkgIT09IGNhbm9uaWNhbCAmJlxuXHRcdFx0XHRcdGNhdE5hbWUudG9Mb3dlckNhc2UoKSAhPT0gZmFsbGJhY2sgJiZcblx0XHRcdFx0XHRDQUwud2dOYW1lc3BhY2VJZHNbY2F0TmFtZV0gPT09IG5hbWVzcGFjZU51bWJlclxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZWdleFN0cmluZyArPSBgfCR7Y3JlYXRlUmVnZXhTdHIoY2F0TmFtZSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGAoPzoke3JlZ2V4U3RyaW5nfSlgO1xuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIoKTogdm9pZCB7XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzID0gQ0FMLiRsYWJlbHMuZmlsdGVyKGAuJHtDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEfWApO1xuXHRcdFx0dGhpcy4kbWFya0NvdW50ZXIuc2hvdygpLmh0bWwoQ0FMLm1zZygnZmlsZXMtc2VsZWN0ZWQnLCBDQUwuJHNlbGVjdGVkTGFiZWxzLmxlbmd0aC50b1N0cmluZygpKSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgdG9nZ2xlQWxsKHNlbGVjdDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0Q0FMLiRsYWJlbHMudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCwgc2VsZWN0KTtcblx0XHRcdHRoaXMudXBkYXRlU2VsZWN0aW9uQ291bnRlcigpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBzdGF0aWMgYXN5bmMgZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG5cdFx0XHRpZiAoQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gIT09IHVuZGVmaW5lZCAmJiBBcnJheS5pc0FycmF5KENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldKSkge1xuXHRcdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIGNhdGVnb3J5KSAhPT0gdW5kZWZpbmVkICYmXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgY2F0ZWdvcnkpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgY2F0ZWdvcnkpIGFzIHN0cmluZ1tdO1xuXHRcdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV07XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtjYXRlZ29yeV07XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRleHQ6IGA8dWwgaWQ9XCJjYWwtdmFyaWFudHNcIj5cblx0PGxpIGlkPVwiY2FsLXpoXCI+LXt6aHwke2NhdGVnb3J5fX0tPC9saT5cblx0PGxpIGlkPVwiY2FsLXpoLWhhbnNcIj4te3poLWhhbnN8JHtjYXRlZ29yeX19LTwvbGk+XG5cdDxsaSBpZD1cImNhbC16aC1oYW50XCI+LXt6aC1oYW50fCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtY25cIj4te3poLWNufCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtaGtcIj4te3poLWhrfCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtbW9cIj4te3poLW1vfCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtbXlcIj4te3poLW15fCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtc2dcIj4te3poLXNnfCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtdHdcIj4te3poLXR3fCR7Y2F0ZWdvcnl9fS08L2xpPlxuPC91bD5gLFxuXHRcdFx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdFx0XHR2YXJpYW50OiAnemgnLFxuXHRcdFx0fTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBDQUwuZW5xdWV1ZUFwaUNhbGwoKCkgPT4gQ0FMLmFwaS5nZXQocGFyYW1zKSk7XG5cdFx0XHRcdGNvbnN0IHt0ZXh0fSA9IHBhcnNlO1xuXHRcdFx0XHRjb25zdCAkcGFyc2VkID0gJCh0ZXh0KTtcblx0XHRcdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRcdFx0Y29uc3QgJHZhcmlhbnROb2RlID0gJHBhcnNlZC5maW5kKGAjY2FsLSR7dmFyaWFudH1gKTtcblx0XHRcdFx0XHRpZiAoJHZhcmlhbnROb2RlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdHJlc3VsdHNbcmVzdWx0cy5sZW5ndGhdID0gJHZhcmlhbnROb2RlLnRleHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge31cblx0XHRcdC8vIERlLWR1cGxpY2F0ZVxuXHRcdFx0Q0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gPSB1bmlxdWVBcnJheShyZXN1bHRzKTsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgY2F0ZWdvcnksIENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldLCA2MCAqIDYwICogMjQpOyAvLyAxIGRheVxuXHRcdFx0cmV0dXJuIENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGFzeW5jIHJlZ2V4QnVpbGRlcihjYXRlZ29yeTogc3RyaW5nKTogUHJvbWlzZTxSZWdFeHA+IHtcblx0XHRcdC8vIEJ1aWxkIGEgcmVnZXhwIHN0cmluZyBmb3IgbWF0Y2hpbmcgdGhlIGdpdmVuIGNhdGVnb3J5OlxuXHRcdFx0Y29uc3QgY2F0TmFtZTogc3RyaW5nID0gQ0FMLmxvY2FsaXplZFJlZ2V4KENBTC5UQVJHRVRfTkFNRVNQQUNFLCAnQ2F0ZWdvcnknKTtcblx0XHRcdC8vIHRyaW0gbGVhZGluZy90cmFpbGluZyB3aGl0ZXNwYWNlIGFuZCB1bmRlcnNjb3Jlc1xuXHRcdFx0Y2F0ZWdvcnkgPSBjYXRlZ29yeS5yZXBsYWNlKC9eW1xcc19dKy8sICcnKS5yZXBsYWNlKC9bXFxzX10rJC8sICcnKTtcblx0XHRcdC8vIEZpbmQgYWxsIHZhcmlhbnRzXG5cdFx0XHRjb25zdCB2YXJpYW50czogc3RyaW5nW10gPSBhd2FpdCBDQUwuZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5KTtcblx0XHRcdC8vIGVzY2FwZSByZWdleHAgbWV0YWNoYXJhY3RlcnMgKD0gYW55IEFTQ0lJIHB1bmN0dWF0aW9uIGV4Y2VwdCBfKVxuXHRcdFx0Y29uc3QgdmFyaWFudFJlZ0V4cHM6IHN0cmluZ1tdID0gW107XG5cdFx0XHRmb3IgKGxldCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG5cdFx0XHRcdHZhcmlhbnQgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cCh2YXJpYW50KTtcblx0XHRcdFx0Ly8gYW55IHNlcXVlbmNlIG9mIHNwYWNlcyBhbmQgdW5kZXJzY29yZXMgc2hvdWxkIG1hdGNoIGFueSBvdGhlclxuXHRcdFx0XHR2YXJpYW50ID0gdmFyaWFudC5yZXBsYWNlKC9bXFxzX10rL2csIFN0cmluZy5yYXdgW1xcc19dK2ApO1xuXHRcdFx0XHQvLyBNYWtlIHRoZSBmaXJzdCBjaGFyYWN0ZXIgY2FzZS1pbnNlbnNpdGl2ZTpcblx0XHRcdFx0Y29uc3QgZmlyc3Q6IHN0cmluZyA9IHZhcmlhbnQuc2xpY2UoMCwgMSk7XG5cdFx0XHRcdGlmIChmaXJzdC50b1VwcGVyQ2FzZSgpICE9PSBmaXJzdC50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRcdFx0dmFyaWFudCA9IGBbJHtmaXJzdC50b1VwcGVyQ2FzZSgpfSR7Zmlyc3QudG9Mb3dlckNhc2UoKX1dJHt2YXJpYW50LnNsaWNlKDEpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyaWFudFJlZ0V4cHNbdmFyaWFudFJlZ0V4cHMubGVuZ3RoXSA9IHZhcmlhbnQ7XG5cdFx0XHR9XG5cdFx0XHQvLyBDb21waWxlIGl0IGludG8gYSBSZWdFeHAgdGhhdCBtYXRjaGVzIE1lZGlhV2lraSBjYXRlZ29yeSBzeW50YXggKHllYWgsIGl0IGxvb2tzIHVnbHkpOlxuXHRcdFx0Ly8gWFhYOiB0aGUgZmlyc3QgY2FwdHVyaW5nIHBhcmVucyBhcmUgYXNzdW1lZCB0byBtYXRjaCB0aGUgc29ydGtleSwgaWYgcHJlc2VudCwgaW5jbHVkaW5nIHRoZSB8IGJ1dCBleGNsdWRpbmcgdGhlIF1dXG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFtbXFxcXHNfXSoke2NhdE5hbWV9W1xcXFxzX10qOltcXFxcc19dKig/OiR7dmFyaWFudFJlZ0V4cHMuam9pbihcblx0XHRcdFx0XHQnfCdcblx0XHRcdFx0KX0pW1xcXFxzX10qKFxcXFx8W15cXFxcXV0qKD86XFxcXF1bXlxcXFxdXSspKik/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhc3luYyBkb0FQSUNhbGxBc3luYyhfcGFyYW1zOiBPbWl0PEFwaUVkaXRQYWdlUGFyYW1zLCAnZm9ybWF0Jz4pOiBQcm9taXNlPHVua25vd24+IHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0Li4uX3BhcmFtcyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdH0gYXMgdHlwZW9mIF9wYXJhbXMgJiB7XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nO1xuXHRcdFx0XHR0aXRsZT86IHN0cmluZztcblx0XHRcdH07XG5cdFx0XHRsZXQgcmV0cnlDb3VudDogbnVtYmVyID0gMDtcblx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aWYgKHBhcmFtc1snYWN0aW9uJ10gPT09ICdxdWVyeScpIHtcblx0XHRcdFx0XHRcdHJldHVybiBhd2FpdCBDQUwuZW5xdWV1ZUFwaUNhbGwoKCkgPT4gQ0FMLmFwaS5nZXQocGFyYW1zKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBhd2FpdCBDQUwuZW5xdWV1ZUFwaUNhbGwoKCkgPT4gQ0FMLmFwaS5wb3N0KHBhcmFtcykpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdG13LmxvZy5lcnJvcignW0NhdC1hLWxvdF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdFx0aWYgKHJldHJ5Q291bnQgPCA0KSB7XG5cdFx0XHRcdFx0XHRyZXRyeUNvdW50Kys7XG5cdFx0XHRcdFx0XHRhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAzMDApKTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHByaXZhdGUgZG9BUElDYWxsKFxuXHRcdFx0X3BhcmFtczogT21pdDxBcGlFZGl0UGFnZVBhcmFtcywgJ2Zvcm1hdCc+LFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdGNhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB2b2lkXG5cdFx0KSB7XG5cdFx0XHRDQUwuZG9BUElDYWxsQXN5bmMoX3BhcmFtcylcblx0XHRcdFx0LnRoZW4oY2FsbGJhY2spXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRtdy5sb2cuZXJyb3IoJ1tDYXQtYS1sb3RdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdFx0XHRcdGNvbnN0IHBhcmFtcyA9IF9wYXJhbXMgYXMgdHlwZW9mIF9wYXJhbXMgJiB7XG5cdFx0XHRcdFx0XHR0aXRsZT86IHN0cmluZztcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGlmIChwYXJhbXMudGl0bGUpIHtcblx0XHRcdFx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3JbQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGhdID0gcGFyYW1zLnRpdGxlO1xuXHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBtYXJrQXNEb25lKFxuXHRcdFx0JG1hcmtlZExhYmVsOiBKUXVlcnksXG5cdFx0XHR0YXJnZXRDYXRlZ29yeTogc3RyaW5nLFxuXHRcdFx0bW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZScgfCAncmVtb3ZlJ1xuXHRcdCk6IHZvaWQge1xuXHRcdFx0JG1hcmtlZExhYmVsLmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUxfRE9ORSk7XG5cblx0XHRcdHN3aXRjaCAobW9kZSkge1xuXHRcdFx0XHRjYXNlICdhZGQnOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FkZGVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NvcHknOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2NvcGllZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtb3ZlJzpcblx0XHRcdFx0XHQkbWFya2VkTGFiZWwuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdtb3ZlZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZW1vdmUnOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ3JlbW92ZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZG9DbGVhbnVwKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0XHRyZXR1cm4gQ0FMLnNldHRpbmdzLmRvY2xlYW51cCA/IHRleHQucmVwbGFjZSgve3tcXHMqW0NjXWhlY2sgY2F0ZWdvcmllc1xccyooXFx8Py4qPyl9fS8sICcnKSA6IHRleHQ7XG5cdFx0fSAvLyBSZW1vdmUge3tVbmNhdGVnb3JpemVkfX0gKGFsc28gd2l0aCBjb21tZW50KS4gTm8gbmVlZCB0byByZXBsYWNlIGl0IHdpdGggYW55dGhpbmdcblx0XHRwcml2YXRlIHN0YXRpYyByZW1vdmVVbmNhdCh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdFx0cmV0dXJuIHRleHQucmVwbGFjZSgvXFx7XFx7XFxzKltVdV1uY2F0ZWdvcml6ZWRcXHMqKFxcfD8uKj8pXFx9XFx9LywgJycpO1xuXHRcdH1cblx0XHRwcml2YXRlIGRpc3BsYXlSZXN1bHQoKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcyh7XG5cdFx0XHRcdGN1cnNvcjogJycsXG5cdFx0XHRcdG92ZXJmbG93OiAnJyxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy4kYm9keS5maW5kKGAuJHtDTEFTU19OQU1FX0ZFRURCQUNLfWApLmFkZENsYXNzKENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSk7XG5cblx0XHRcdGNvbnN0ICRwYXJlbnQ6IEpRdWVyeSA9IENBTC4kY291bnRlci5wYXJlbnQoKTtcblx0XHRcdCRwYXJlbnQuaHRtbCg8aDM+e0NBTC5tc2coJ2RvbmUnKX08L2gzPik7XG5cdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHR7Q0FMLm1zZygnYWxsLWRvbmUnKX1cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0PC8+XG5cdFx0XHQpO1xuXG5cdFx0XHQkcGFyZW50LmFwcGVuZChcblx0XHRcdFx0PGFcblx0XHRcdFx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRDQUwuJHByb2dyZXNzRGlhbG9nLnJlbW92ZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwoZmFsc2UpO1xuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7Q0FMLm1zZygncmV0dXJuLXRvLXBhZ2UnKX1cblx0XHRcdFx0PC9hPlxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKENBTC5hbHJlYWR5VGhlcmUubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtYWxyZWFkeScsIENBTC5hbHJlYWR5VGhlcmUubGVuZ3RoLnRvU3RyaW5nKCkpfTwvaDU+XG5cdFx0XHRcdFx0XHR7Q0FMLmFscmVhZHlUaGVyZS5yZWR1Y2U8KHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXT4oXG5cdFx0XHRcdFx0XHRcdChwcmUsIGN1ciwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aCAtIDEgPyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl0gOiBbLi4ucHJlLCBjdXJdLFxuXHRcdFx0XHRcdFx0XHRbXVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdGlmIChDQUwubm90Rm91bmQubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtbm90LWZvdW5kJywgQ0FMLm5vdEZvdW5kLmxlbmd0aC50b1N0cmluZygpKX08L2g1PlxuXHRcdFx0XHRcdFx0e0NBTC5ub3RGb3VuZC5yZWR1Y2U8KHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudClbXT4oXG5cdFx0XHRcdFx0XHRcdChwcmUsIGN1ciwgaW5kZXgpID0+XG5cdFx0XHRcdFx0XHRcdFx0aW5kZXggPCBDQUwubm90Rm91bmQubGVuZ3RoIC0gMSA/IFsuLi5wcmUsIGN1ciwgPGJyIGtleT17aW5kZXh9IC8+XSA6IFsuLi5wcmUsIGN1cl0sXG5cdFx0XHRcdFx0XHRcdFtdXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoKSB7XG5cdFx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8aDU+e0NBTC5tc2coJ3NraXBwZWQtc2VydmVyJywgQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGgudG9TdHJpbmcoKSl9PC9oNT5cblx0XHRcdFx0XHRcdHtDQUwuY29ubmVjdGlvbkVycm9yLnJlZHVjZTwoc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50KVtdPihcblx0XHRcdFx0XHRcdFx0KHByZSwgY3VyLCBpbmRleCkgPT5cblx0XHRcdFx0XHRcdFx0XHRpbmRleCA8IENBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoIC0gMVxuXHRcdFx0XHRcdFx0XHRcdFx0PyBbLi4ucHJlLCBjdXIsIDxiciBrZXk9e2luZGV4fSAvPl1cblx0XHRcdFx0XHRcdFx0XHRcdDogWy4uLnByZSwgY3VyXSxcblx0XHRcdFx0XHRcdFx0W11cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgdXBkYXRlQ291bnRlcigpOiB2b2lkIHtcblx0XHRcdENBTC5jb3VudGVyQ3VycmVudCsrO1xuXHRcdFx0aWYgKENBTC5jb3VudGVyQ3VycmVudCA+IENBTC5jb3VudGVyTmVlZGVkKSB7XG5cdFx0XHRcdHRoaXMuZGlzcGxheVJlc3VsdCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Q0FMLiRjb3VudGVyLnRleHQoQ0FMLmNvdW50ZXJDdXJyZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBhc3luYyBlZGl0Q2F0ZWdvcmllcyhcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0XHRyZXN1bHQ6IFJlY29yZDxzdHJpbmcsIGFueT4sXG5cdFx0XHRtYXJrZWRMYWJlbDogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+WzBdLFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnIHwgJ3JlbW92ZSdcblx0XHQpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRcdGNvbnN0IFttYXJrZWRMYWJlbFRpdGxlLCAkbWFya2VkTGFiZWxdID0gbWFya2VkTGFiZWw7XG5cblx0XHRcdGlmICghcmVzdWx0Py5bJ3F1ZXJ5J10pIHtcblx0XHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvcltDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aF0gPSBtYXJrZWRMYWJlbFRpdGxlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgb3JpZ2luVGV4dDogc3RyaW5nID0gJyc7XG5cdFx0XHRsZXQgc3RhcnR0aW1lc3RhbXA6IG51bWJlciA9IDA7XG5cdFx0XHRsZXQgdGltZXN0YW1wOiBudW1iZXIgPSAwO1xuXHRcdFx0Q0FMLmVkaXRUb2tlbiA9IHJlc3VsdFsncXVlcnknXS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0Y29uc3Qge3BhZ2VzfSA9IHJlc3VsdFsncXVlcnknXTtcblxuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcGFnZXM7XG5cdFx0XHRvcmlnaW5UZXh0ID0gcGFnZT8ucmV2aXNpb25zPy5bMF0uc2xvdHMubWFpbi5jb250ZW50O1xuXHRcdFx0KHtzdGFydHRpbWVzdGFtcH0gPSBwYWdlKTtcblx0XHRcdFt7dGltZXN0YW1wfV0gPSBwYWdlLnJldmlzaW9ucztcblxuXHRcdFx0Y29uc3Qgc291cmNlY2F0OiBzdHJpbmcgPSBDQUwuQ1VSUkVOVF9DQVRFR1JPWTtcblx0XHRcdC8vIENoZWNrIGlmIHRoYXQgZmlsZSBpcyBhbHJlYWR5IGluIHRoYXQgY2F0ZWdvcnlcblx0XHRcdGNvbnN0IHRhcmdlUmVnRXhwID0gYXdhaXQgQ0FMLnJlZ2V4QnVpbGRlcih0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRpZiAobW9kZSAhPT0gJ3JlbW92ZScgJiYgdGFyZ2VSZWdFeHAudGVzdChvcmlnaW5UZXh0KSAmJiBtb2RlICE9PSAnbW92ZScpIHtcblx0XHRcdFx0Q0FMLmFscmVhZHlUaGVyZVtDQUwuYWxyZWFkeVRoZXJlLmxlbmd0aF0gPSBtYXJrZWRMYWJlbFRpdGxlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGaXggdGV4dFxuXHRcdFx0bGV0IHRleHQ6IHN0cmluZyA9IG9yaWdpblRleHQ7XG5cdFx0XHRsZXQgc3VtbWFyeTogc3RyaW5nO1xuXHRcdFx0Y29uc3Qgc291cmNlQ2F0UmVnRXhwID0gYXdhaXQgQ0FMLnJlZ2V4QnVpbGRlcihzb3VyY2VjYXQpO1xuXHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2FkZCc6XG5cdFx0XHRcdFx0dGV4dCArPSBgXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9XV1cXG5gO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LWFkZCcpLnJlcGxhY2UoJyQxJywgdGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjb3B5Jzpcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0c291cmNlQ2F0UmVnRXhwLFxuXHRcdFx0XHRcdFx0YFtbJHtDQUwubG9jYWxDYXROYW1lfToke3NvdXJjZWNhdH0kMV1dXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9JDFdXWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBDQUwubXNnKCdzdW1tYXJ5LWNvcHknKS5yZXBsYWNlKCckMScsIHNvdXJjZWNhdCkucmVwbGFjZSgnJDInLCB0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRcdFx0Ly8gSWYgY2F0ZWdvcnkgaXMgYWRkZWQgdGhyb3VnaCB0ZW1wbGF0ZTpcblx0XHRcdFx0XHRpZiAob3JpZ2luVGV4dCA9PT0gdGV4dCkge1xuXHRcdFx0XHRcdFx0dGV4dCArPSBgXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9XV1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbW92ZSc6XG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShzb3VyY2VDYXRSZWdFeHAsIGBbWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX0kMV1dYCk7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktbW92ZScpLnJlcGxhY2UoJyQxJywgc291cmNlY2F0KS5yZXBsYWNlKCckMicsIHRhcmdldENhdGVnb3J5KTtcblx0XHRcdFx0XHRjb25zdCBlc2NhcGVkU291cmNlQ2F0ID0gc291cmNlY2F0LnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7IC8vIOWwhiBzb3VyY2VjYXQg6L2s5LmJ5Li65q2j5YiZ6KGo6L6+5byP5a6J5YWo55qE5a2X56ym5LiyXG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShcblx0XHRcdFx0XHRcdG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRcdFN0cmluZy5yYXdgKFxce1xce1sgXFx0XSooPzrmtojmrafkuYnmqKHmnb985raI5q2n5LmJfOa2iOatp+e+qXxbRGRdaXNhbWJpZ3xbRGRdaXNhbWJ8W0RkXWFifFtBYV1pbWFpKVsgXFx0XSooPzpcXHxbXnx7fV0qKSo/XFx8WyBcXHRdKltDY11hdFsgXFx0XSo9WyBcXHRdKikoJHtlc2NhcGVkU291cmNlQ2F0fSkoWyBcXHRdKig/PVxcfHxcXH1cXH0pKWAsXG5cdFx0XHRcdFx0XHRcdCdnJ1xuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdChfbWF0Y2gsIHByZWZpeDogc3RyaW5nLCBfY2F0ZWdvcnk6IHN0cmluZywgc3VmZml4OiBzdHJpbmcpID0+XG5cdFx0XHRcdFx0XHRcdGAke3ByZWZpeH0ke3RhcmdldENhdGVnb3J5fSR7c3VmZml4fWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZW1vdmUnOlxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2Uoc291cmNlQ2F0UmVnRXhwLCAnJyk7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktcmVtb3ZlJykucmVwbGFjZSgnJDEnLCBzb3VyY2VjYXQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyDlpoLmnpzmsqHmnInkv67mlLnku7vkvZXlhoXlrrlcblx0XHRcdGlmICh0ZXh0ID09PSBvcmlnaW5UZXh0KSB7XG5cdFx0XHRcdC8vIOWmguaenOivpemhtemdouaYr+aooeadv++8iFRlbXBsYXRlOu+8ieS4lOimgeaJp+ihjOeahOS7juaMqOaPjeaYr+enu+WKqOWIhuexu+aIluWkjeWItuWIhuexu1xuXHRcdFx0XHRpZiAobWFya2VkTGFiZWxUaXRsZS5zdGFydHNXaXRoKCdUZW1wbGF0ZTonKSAmJiAobW9kZSA9PT0gJ21vdmUnIHx8IG1vZGUgPT09ICdjb3B5JykpIHtcblx0XHRcdFx0XHQvLyDlsJ3or5XlnKjlhbbmlofmoaPpobXvvIgvZG9j77yJ5Lit5L+u5pS55YiG57G7XG5cdFx0XHRcdFx0Y29uc3QgZG9jVGl0bGUgPSBgJHttYXJrZWRMYWJlbFRpdGxlfS9kb2NgO1xuXHRcdFx0XHRcdGNvbnN0IGRvY1Jlc3VsdCA9IChhd2FpdCBDQUwuZG9BUElDYWxsQXN5bmMoe1xuXHRcdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdFx0XHR0aXRsZXM6IGRvY1RpdGxlLFxuXHRcdFx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdFx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnXSxcblx0XHRcdFx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdFx0XHR9KSkgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cblx0XHRcdFx0XHQvLyDlpoLmnpzmsqHmnInmib7liLDor6XmlofmoaPpobVcblx0XHRcdFx0XHRpZiAoIWRvY1Jlc3VsdD8uWydxdWVyeSddKSB7XG5cdFx0XHRcdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yW0NBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoXSA9IGRvY1RpdGxlO1xuXHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8g6I635Y+W5paH5qGj6aG155qE5paH5pysXG5cdFx0XHRcdFx0Y29uc3QgcXVlcnkgPSBkb2NSZXN1bHQ/LlsncXVlcnknXSBhc1xuXHRcdFx0XHRcdFx0fCB7XG5cdFx0XHRcdFx0XHRcdFx0cGFnZXM/OiBBcnJheTx7XG5cdFx0XHRcdFx0XHRcdFx0XHRzdGFydHRpbWVzdGFtcD86IHN0cmluZyB8IG51bWJlcjtcblx0XHRcdFx0XHRcdFx0XHRcdHJldmlzaW9ucz86IEFycmF5PHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGltZXN0YW1wPzogc3RyaW5nO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzbG90cz86IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYWluPzoge2NvbnRlbnQ/OiBzdHJpbmd9O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdFx0fT47XG5cdFx0XHRcdFx0XHRcdFx0fT47XG5cdFx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHRcdHwgdW5kZWZpbmVkO1xuXHRcdFx0XHRcdC8vIOWmguaenOayoeacieaJvuWIsOivpeaWh+aho+mhtVxuXHRcdFx0XHRcdGlmICghcXVlcnkpIHtcblx0XHRcdFx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3JbQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGhdID0gZG9jVGl0bGU7XG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCB7cGFnZXM6IGRvY1BhZ2VzID0gW119ID0gcXVlcnk7XG5cdFx0XHRcdFx0Y29uc3QgW2RvY1BhZ2VdID0gZG9jUGFnZXM7XG5cdFx0XHRcdFx0Y29uc3QgZG9jT3JpZ2luVGV4dCA9IGRvY1BhZ2U/LnJldmlzaW9ucz8uWzBdPy5zbG90cz8ubWFpbj8uY29udGVudCA/PyAnJztcblx0XHRcdFx0XHRsZXQgZG9jVGV4dCA9IGRvY09yaWdpblRleHQ7XG5cdFx0XHRcdFx0Y29uc3QgZG9jQ2F0UmVnRXhwID0gYXdhaXQgQ0FMLnJlZ2V4QnVpbGRlcihzb3VyY2VjYXQpOyAvLyDojrflj5bmqKHmnb/liIbnsbvmraPliJlcblxuXHRcdFx0XHRcdC8vIOWmguaenOaooeadv+aWh+aho+mhteS4reWtmOWcqOivpeWIhuexu1xuXHRcdFx0XHRcdGlmIChkb2NUZXh0Lm1hdGNoKGRvY0NhdFJlZ0V4cCkpIHtcblx0XHRcdFx0XHRcdGlmIChtb2RlID09PSAnbW92ZScpIHtcblx0XHRcdFx0XHRcdFx0ZG9jVGV4dCA9IGRvY1RleHQucmVwbGFjZShkb2NDYXRSZWdFeHAsIGBbWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX0kMV1dYCk7IC8vIOabv+aNouaooeadv+aWh+aho+mhteS4reeahOWIhuexu1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChtb2RlID09PSAnY29weScpIHtcblx0XHRcdFx0XHRcdFx0ZG9jVGV4dCA9IGRvY1RleHQucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRkb2NDYXRSZWdFeHAsXG5cdFx0XHRcdFx0XHRcdFx0YFtbJHtDQUwubG9jYWxDYXROYW1lfToke3NvdXJjZWNhdH0kMV1dXFxuW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7dGFyZ2V0Q2F0ZWdvcnl9JDFdXWBcblx0XHRcdFx0XHRcdFx0KTsgLy8g5aSN5Yi25YiG57G7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8g5aaC5p6c5qih5p2/5paH5qGj6aG15Lit55qE5paH5pys5pyJ5Y+Y5YyWXG5cdFx0XHRcdFx0aWYgKGRvY1RleHQgIT09IGRvY09yaWdpblRleHQpIHtcblx0XHRcdFx0XHRcdHRleHQgPSBkb2NUZXh0O1xuXHRcdFx0XHRcdFx0Y29uc3QgZG9jU3RhcnR0aW1lc3RhbXAgPSBkb2NQYWdlPy5zdGFydHRpbWVzdGFtcCA/PyAwO1xuXHRcdFx0XHRcdFx0Y29uc3QgZG9jVGltZXN0YW1wID0gZG9jUGFnZT8ucmV2aXNpb25zPy5bMF0/LnRpbWVzdGFtcCA/PyAwO1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgQ0FMLmRvQVBJQ2FsbEFzeW5jKHtcblx0XHRcdFx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHRcdFx0XHR0b2tlbjogQ0FMLmVkaXRUb2tlbixcblx0XHRcdFx0XHRcdFx0XHR0YWdzOiBDQUwuQVBJX1RBRyxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZG9jVGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0YXNzZXJ0OiAndXNlcicsXG5cdFx0XHRcdFx0XHRcdFx0Ym90OiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdGJhc2V0aW1lc3RhbXA6IGRvY1RpbWVzdGFtcCxcblx0XHRcdFx0XHRcdFx0XHR3YXRjaGxpc3Q6IENBTC5zZXR0aW5ncy53YXRjaGxpc3QgYXMgbmV2ZXIsXG5cdFx0XHRcdFx0XHRcdFx0dGV4dCxcblx0XHRcdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0dGltZXN0YW1wOiBkb2NTdGFydHRpbWVzdGFtcCxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpOyAvLyDmm7TmlrDorqHmlbDlmahcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYFtDYXQtYS1sb3RdIFN1Y2Nlc3NmdWxseSBlZGl0ZWQgdGVtcGxhdGUgZG9jIHBhZ2U6ICR7ZG9jVGl0bGV9YCk7XG5cdFx0XHRcdFx0XHRcdC8vIOWIt+aWsOaooeadv+mhtee8k+WtmFxuXHRcdFx0XHRcdFx0XHRhd2FpdCBDQUwuZG9BUElDYWxsQXN5bmMoe1xuXHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogJ3B1cmdlJyxcblx0XHRcdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVzOiBtYXJrZWRMYWJlbFRpdGxlLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coYFtDYXQtYS1sb3RdIFN1Y2Nlc3NmdWxseSBwdXJnZWQgdGVtcGxhdGUgZG9jIHBhZ2U6ICR7ZG9jVGl0bGV9YCk7XG5cdFx0XHRcdFx0XHRcdENBTC5tYXJrQXNEb25lKCRtYXJrZWRMYWJlbCwgdGFyZ2V0Q2F0ZWdvcnksIG1vZGUpO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3JbQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGhdID0gZG9jVGl0bGU7XG5cdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdENBTC5ub3RGb3VuZFtDQUwubm90Rm91bmQubGVuZ3RoXSA9IG1hcmtlZExhYmVsVGl0bGU7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSB1bmNhdCBhZnRlciB3ZSBjaGVja2VkIHdoZXRoZXIgd2UgY2hhbmdlZCB0aGUgdGV4dCBzdWNjZXNzZnVsbHkuXG5cdFx0XHQvLyBPdGhlcndpc2Ugd2UgbWlnaHQgZmFpbCB0byBkbyB0aGUgY2hhbmdlcywgYnV0IHN0aWxsIHJlcGxhY2Uge3t1bmNhdH19XG5cdFx0XHRpZiAobW9kZSAhPT0gJ3JlbW92ZScpIHtcblx0XHRcdFx0dGV4dCA9IENBTC5kb0NsZWFudXAoQ0FMLnJlbW92ZVVuY2F0KHRleHQpKTtcblx0XHRcdH1cblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgQ0FMLmRvQVBJQ2FsbEFzeW5jKHtcblx0XHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0XHR0b2tlbjogQ0FMLmVkaXRUb2tlbixcblx0XHRcdFx0XHR0YWdzOiBDQUwuQVBJX1RBRyxcblx0XHRcdFx0XHR0aXRsZTogbWFya2VkTGFiZWxUaXRsZSxcblx0XHRcdFx0XHRhc3NlcnQ6ICd1c2VyJyxcblx0XHRcdFx0XHRib3Q6IHRydWUsXG5cdFx0XHRcdFx0YmFzZXRpbWVzdGFtcDogdGltZXN0YW1wLFxuXHRcdFx0XHRcdHdhdGNobGlzdDogQ0FMLnNldHRpbmdzLndhdGNobGlzdCBhcyBuZXZlcixcblx0XHRcdFx0XHR0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0c3RhcnR0aW1lc3RhbXAsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0Q0FMLm1hcmtBc0RvbmUoJG1hcmtlZExhYmVsLCB0YXJnZXRDYXRlZ29yeSwgbW9kZSk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvcltDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aF0gPSBtYXJrZWRMYWJlbFRpdGxlO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBhc3luYyBnZXRDb250ZW50KFxuXHRcdFx0bWFya2VkTGFiZWw6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPlswXSxcblx0XHRcdHRhcmdldENhdGVnb3J5OiBzdHJpbmcsXG5cdFx0XHRtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJ1xuXHRcdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gKGF3YWl0IENBTC5kb0FQSUNhbGxBc3luYyh7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0XHR0aXRsZXM6IG1hcmtlZExhYmVsWzBdLFxuXHRcdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHRcdFx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdFx0fSkpIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuXHRcdFx0XHRhd2FpdCB0aGlzLmVkaXRDYXRlZ29yaWVzKHJlc3VsdCwgbWFya2VkTGFiZWwsIHRhcmdldENhdGVnb3J5LCBtb2RlKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yW0NBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoXSA9IG1hcmtlZExhYmVsWzBdO1xuXHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBzdGF0aWMgZ2V0VGl0bGVGcm9tTGluayhocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIChkZWNvZGVVUklDb21wb25lbnQoaHJlZiA/PyAnJykubWF0Y2goL3dpa2lcXC8oLis/KSg/OiMuKyk/JC8pPy5bMV0gPz8gJycpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0TWFya2VkTGFiZWxzKCk6IFtzdHJpbmcsIEpRdWVyeV1bXSB7XG5cdFx0XHRjb25zdCBtYXJrZWRMYWJlbHM6IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZ2V0TWFya2VkTGFiZWxzPiA9IFtdO1xuXHRcdFx0Q0FMLiRzZWxlY3RlZExhYmVscyA9IENBTC4kbGFiZWxzLmZpbHRlcihgLiR7Q0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRH1gKTtcblx0XHRcdENBTC4kc2VsZWN0ZWRMYWJlbHMuZWFjaCgoX2luZGV4LCBsYWJlbCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCAkbGFiZWw6IEpRdWVyeSA9ICQobGFiZWwpO1xuXHRcdFx0XHRjb25zdCAkbGFiZWxMaW5rOiBKUXVlcnkgPSAkbGFiZWwuZmluZCgnYTpub3QoLkNhdGVnb3J5VHJlZVRvZ2dsZSlbdGl0bGVdJyk7XG5cdFx0XHRcdGNvbnN0IHRpdGxlOiBzdHJpbmcgPVxuXHRcdFx0XHRcdCRsYWJlbExpbmsuYXR0cigndGl0bGUnKT8udHJpbSgpIHx8XG5cdFx0XHRcdFx0Q0FMLmdldFRpdGxlRnJvbUxpbmsoJGxhYmVsTGluay5hdHRyKCdocmVmJykpIHx8XG5cdFx0XHRcdFx0Q0FMLmdldFRpdGxlRnJvbUxpbmsoJGxhYmVsLmZpbmQoJ2E6bm90KC5DYXRlZ29yeVRyZWVUb2dnbGUpJykuYXR0cignaHJlZicpKTtcblx0XHRcdFx0bWFya2VkTGFiZWxzW21hcmtlZExhYmVscy5sZW5ndGhdID0gW3RpdGxlLCAkbGFiZWxdO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gbWFya2VkTGFiZWxzO1xuXHRcdH1cblx0XHRwcml2YXRlIHNob3dQcm9ncmVzcygpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKHtcblx0XHRcdFx0Y3Vyc29yOiAnd2FpdCcsXG5cdFx0XHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgJG92ZXJsYXkgPSAkKCc8ZGl2PicpLmFkZENsYXNzKGAke0NMQVNTX05BTUV9LW92ZXJsYXlgKTtcblx0XHRcdGNvbnN0ICRkaWFsb2cgPSAkKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9GRUVEQkFDS30gcm9sZT1cInN0YXR1c1wiPlxuXHRcdFx0XHRcdHtDQUwubXNnKCdlZGl0aW5nJyl9XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUn0+e0NBTC5jb3VudGVyQ3VycmVudH08L3NwYW4+XG5cdFx0XHRcdFx0e1tDQUwubXNnKCdvZicpLCBDQUwuY291bnRlck5lZWRlZF19XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHRcdCRvdmVybGF5LmFwcGVuZCgkZGlhbG9nKS5hcHBlbmRUbyh0aGlzLiRib2R5KTtcblx0XHRcdENBTC4kcHJvZ3Jlc3NEaWFsb2cgPSAkb3ZlcmxheTtcblx0XHRcdENBTC4kY291bnRlciA9ICRkaWFsb2cuZmluZChgLiR7Q0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVJ9YCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgYXN5bmMgZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZywgbW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZScpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHRcdGNvbnN0IG1hcmtlZExhYmVsczogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+ID0gdGhpcy5nZXRNYXJrZWRMYWJlbHMoKTtcblx0XHRcdGlmICghbWFya2VkTGFiZWxzLmxlbmd0aCkge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShDQUwubXNnKCdub25lLXNlbGVjdGVkJyksIHtcblx0XHRcdFx0XHR0YWc6ICdjYXRBTG90Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdENBTC5hbHJlYWR5VGhlcmUgPSBbXTtcblx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3IgPSBbXTtcblx0XHRcdENBTC5ub3RGb3VuZCA9IFtdO1xuXHRcdFx0Q0FMLmNvdW50ZXJDdXJyZW50ID0gMTtcblx0XHRcdENBTC5jb3VudGVyTmVlZGVkID0gbWFya2VkTGFiZWxzLmxlbmd0aDtcblx0XHRcdHRoaXMuc2hvd1Byb2dyZXNzKCk7XG5cdFx0XHRmb3IgKGNvbnN0IG1hcmtlZExhYmVsIG9mIG1hcmtlZExhYmVscykge1xuXHRcdFx0XHRhd2FpdCB0aGlzLmdldENvbnRlbnQobWFya2VkTGFiZWwsIHRhcmdldENhdGVnb3J5LCBtb2RlKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBhZGRIZXJlKHRhcmdldENhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnksICdhZGQnKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBjb3B5SGVyZSh0YXJnZXRDYXRlZ29yeTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvU29tZXRoaW5nKHRhcmdldENhdGVnb3J5LCAnY29weScpO1xuXHRcdH1cblx0XHRwcml2YXRlIG1vdmVIZXJlKHRhcmdldENhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnksICdtb3ZlJyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgY3JlYXRlQ2F0TGlua3Moc3ltYm9sOiBzdHJpbmcsIGNhdGVnb3JpZXM6IHN0cmluZ1tdKTogdm9pZCB7XG5cdFx0XHRjYXRlZ29yaWVzLnNvcnQoKTtcblx0XHRcdGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuXHRcdFx0XHRjb25zdCAkdHIgPSAkKFxuXHRcdFx0XHRcdDx0ciBkYXRhc2V0PXt7Y2F0ZWdvcnl9fT5cblx0XHRcdFx0XHRcdDx0ZD57c3ltYm9sfTwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoJGVsZW1lbnQuY2xvc2VzdCgndHInKS5kYXRhKCdjYXRlZ29yeScpIGFzIHN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtjYXRlZ29yeX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQpO1xuXHRcdFx0XHQvLyBDYW4ndCBtb3ZlIHRvIHNvdXJjZSBjYXRlZ29yeVxuXHRcdFx0XHRpZiAoY2F0ZWdvcnkgIT09IENBTC5DVVJSRU5UX0NBVEVHUk9ZICYmIENBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0XHQkdHIuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX0FDVElPTn1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuYWRkSGVyZSgkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FkZCcpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2F0ZWdvcnkgIT09IENBTC5DVVJSRU5UX0NBVEVHUk9ZICYmICFDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdFx0JHRyLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5jb3B5SGVyZSgkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2NvcHknKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5tb3ZlSGVyZSgkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ21vdmUnKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuZmluZCgndGFibGUnKS5hcHBlbmQoJHRyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBzaG93Q2F0ZWdvcnlMaXN0KCk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3MoJ2N1cnNvcicsICcnKTtcblx0XHRcdGNvbnN0IGN1cnJlbnRDYXRlZ29yaWVzOiBzdHJpbmdbXSA9IFtDQUwuY3VycmVudENhdGVnb3J5XTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuZW1wdHkoKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuYXBwZW5kKDx0YWJsZSAvPik7XG5cdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpEnLCBDQUwucGFyZW50Q2F0cyk7XG5cdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpInLCBjdXJyZW50Q2F0ZWdvcmllcyk7XG5cdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpMnLCBDQUwuc3ViQ2F0cyk7XG5cdFx0XHQvLyBSZXNldCB3aWR0aFxuXHRcdFx0dGhpcy4kY29udGFpbmVyLndpZHRoKCcnKTtcblx0XHRcdHRoaXMuJGNvbnRhaW5lci5oZWlnaHQoJycpO1xuXHRcdFx0dGhpcy4kY29udGFpbmVyLndpZHRoKE1hdGgubWluKCh0aGlzLiRjb250YWluZXIud2lkdGgoKSA/PyAwKSAqIDEuMSArIDE1LCAoJCh3aW5kb3cpLndpZHRoKCkgPz8gMCkgLSAxMCkpO1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5jc3Moe1xuXHRcdFx0XHQnbWF4LWhlaWdodCc6IGAke0NBTC5kaWFsb2dIZWlnaHR9cHhgLFxuXHRcdFx0XHRoZWlnaHQ6ICcnLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0UGFyZW50Q2F0cygpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdHRpdGxlczogYENhdGVnb3J5OiR7Q0FMLmN1cnJlbnRDYXRlZ29yeX1gLFxuXHRcdFx0XHRcdHByb3A6ICdjYXRlZ29yaWVzJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdENBTC5wYXJlbnRDYXRzID0gW107XG5cdFx0XHRcdFx0Y29uc3Qge3BhZ2VzfSA9IHJlc3VsdC5xdWVyeTtcblx0XHRcdFx0XHRpZiAocGFnZXNbMF0/Lm1pc3NpbmcpIHtcblx0XHRcdFx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnJyk7XG5cdFx0XHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0Lmh0bWwoXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX05PX0ZPVU5EfT5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnY2F0LW5vdC1mb3VuZCcpfVxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dGhpcy5jcmVhdGVDYXRMaW5rcygn4oaSJywgW0NBTC5jdXJyZW50Q2F0ZWdvcnldKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGV0IGNhdGVnb3JpZXM6IHt0aXRsZTogc3RyaW5nfVtdID0gW107XG5cdFx0XHRcdFx0aWYgKHBhZ2VzWzBdPy5jYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0XHRbe2NhdGVnb3JpZXN9XSA9IHBhZ2VzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjYXRUaXRsZSA9IGNhdC50aXRsZS5yZXBsYWNlKC9eW146XSs6LywgJycpO1xuXHRcdFx0XHRcdFx0Q0FMLnBhcmVudENhdHNbQ0FMLnBhcmVudENhdHMubGVuZ3RoXSA9IGNhdFRpdGxlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRDQUwuY291bnRlckNhdCsrO1xuXHRcdFx0XHRcdGlmIChDQUwuY291bnRlckNhdCA9PT0gMikge1xuXHRcdFx0XHRcdFx0dGhpcy5zaG93Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0XHRwcml2YXRlIGdldFN1YkNhdHMoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmRvQVBJQ2FsbChcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRsaXN0OiAnY2F0ZWdvcnltZW1iZXJzJyxcblx0XHRcdFx0XHRjbXR5cGU6ICdzdWJjYXQnLFxuXHRcdFx0XHRcdGNtbGltaXQ6IENBTC5zZXR0aW5ncy5zdWJjYXRjb3VudCBhcyBuZXZlcixcblx0XHRcdFx0XHRjbXRpdGxlOiBgQ2F0ZWdvcnk6JHtDQUwuY3VycmVudENhdGVnb3J5fWAsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChyZXN1bHQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRjb25zdCBjYXRzOiB7dGl0bGU6IHN0cmluZ31bXSA9IHJlc3VsdD8ucXVlcnk/LmNhdGVnb3J5bWVtYmVycyB8fCBbXTtcblx0XHRcdFx0XHRDQUwuc3ViQ2F0cyA9IFtdO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgY2F0IG9mIGNhdHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGNhdFRpdGxlID0gY2F0LnRpdGxlLnJlcGxhY2UoL15bXjpdKzovLCAnJyk7XG5cdFx0XHRcdFx0XHRDQUwuc3ViQ2F0c1tDQUwuc3ViQ2F0cy5sZW5ndGhdID0gY2F0VGl0bGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdENBTC5jb3VudGVyQ2F0Kys7XG5cdFx0XHRcdFx0aWYgKENBTC5jb3VudGVyQ2F0ID09PSAyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNob3dDYXRlZ29yeUxpc3QoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0Q2F0ZWdvcnlMaXN0KCk6IHZvaWQge1xuXHRcdFx0Q0FMLmNvdW50ZXJDYXQgPSAwO1xuXHRcdFx0dGhpcy5nZXRQYXJlbnRDYXRzKCk7XG5cdFx0XHR0aGlzLmdldFN1YkNhdHMoKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSB1cGRhdGVDYXRzKGNhdDogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcblx0XHRcdENBTC5jdXJyZW50Q2F0ZWdvcnkgPSBjYXQ7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0Lmh0bWwoPGRpdj57Q0FMLm1zZygnbG9hZGluZycpfTwvZGl2Pik7XG5cdFx0XHR0aGlzLmdldENhdGVnb3J5TGlzdCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZmluZEFsbExhYmVscygpOiB2b2lkIHtcblx0XHRcdC8vIEl0J3MgcG9zc2libGUgdG8gYWxsb3cgYW55IGtpbmQgb2YgcGFnZXMgYXMgd2VsbCBidXQgd2hhdCBoYXBwZW5zIGlmIHlvdSBjbGljayBvbiBcInNlbGVjdCBhbGxcIiBhbmQgZG9uJ3QgZXhwZWN0IGl0XG5cdFx0XHRpZiAoQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRDQUwuJGxhYmVscyA9IHRoaXMuJGJvZHkuZmluZCgndGFibGUuc2VhcmNoUmVzdWx0SW1hZ2UnKS5maW5kKCd0cj50ZCcpLmVxKDEpO1xuXHRcdFx0XHRpZiAoQ0FMLnNldHRpbmdzLmVkaXRwYWdlcykge1xuXHRcdFx0XHRcdENBTC4kbGFiZWxzID0gQ0FMLiRsYWJlbHMuYWRkKCdkaXYubXctc2VhcmNoLXJlc3VsdC1oZWFkaW5nJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdENBTC4kbGFiZWxzID0gdGhpcy4kYm9keVxuXHRcdFx0XHRcdC5maW5kKCdkaXYuZ2FsbGVyeXRleHQnKVxuXHRcdFx0XHRcdC5hZGQodGhpcy4kYm9keS5maW5kKCdkaXYjbXctY2F0ZWdvcnktbWVkaWEnKS5maW5kKCdsaVtjbGFzcyE9XCJnYWxsZXJ5Ym94XCJdJykpO1xuXHRcdFx0XHRpZiAoQ0FMLnNldHRpbmdzLmVkaXRwYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0ICRwYWdlczogSlF1ZXJ5PEhUTUxMSUVsZW1lbnQ+ID0gdGhpcy4kYm9keVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2RpdiNtdy1wYWdlcywgZGl2I213LXN1YmNhdGVnb3JpZXMnKVxuXHRcdFx0XHRcdFx0LmZpbmQoJ2xpJyk7XG5cdFx0XHRcdFx0Q0FMLiRsYWJlbHMgPSBDQUwuJGxhYmVscy5hZGQoJHBhZ2VzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIG1ha2VDbGlja2FibGUoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmZpbmRBbGxMYWJlbHMoKTtcblx0XHRcdENBTC4kbGFiZWxzLmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUwpLm9uQ2F0QUxvdFNoaWZ0Q2xpY2soKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR0aGlzLnVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgcnVuKCk6IHZvaWQge1xuXHRcdFx0aWYgKHRoaXMuJGxpbmsuaGFzQ2xhc3MoQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQpKSB7XG5cdFx0XHRcdHRoaXMubWFrZUNsaWNrYWJsZSgpO1xuXHRcdFx0XHR0aGlzLiRkYXRhQ29udGFpbmVyLnNob3coKTtcblx0XHRcdFx0dGhpcy5lbmFibGVSZXNpemUoKTtcblx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5jc3MoJ21heC1oZWlnaHQnLCAnNDUwcHgnKTtcblx0XHRcdFx0aWYgKENBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoJ1BpY3R1cmVzIGFuZCBpbWFnZXMnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoQ0FMLkNVUlJFTlRfQ0FURUdST1kpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLiRkYXRhQ29udGFpbmVyLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5yZXNpemVDbGVhbnVwPy4oKTtcblx0XHRcdFx0dGhpcy5yZXNpemVDbGVhbnVwID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR0aGlzLiRjb250YWluZXIuY3NzKCd3aWR0aCcsICcnKTtcblx0XHRcdFx0Q0FMLiRsYWJlbHMub2ZmKCdjbGljay5jYXRBTG90Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBlbmFibGVSZXNpemUoKTogdm9pZCB7XG5cdFx0XHR0aGlzLnJlc2l6ZUNsZWFudXA/LigpO1xuXHRcdFx0Y29uc3QgJGhhbmRsZSA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJ9LXJlc2l6ZS1oYW5kbGVgKS5wcmVwZW5kVG8odGhpcy4kY29udGFpbmVyKTtcblx0XHRcdGNvbnN0IGhhbmRsZSA9ICRoYW5kbGVbMF07XG5cdFx0XHRjb25zdCBjb250YWluZXIgPSB0aGlzLiRjb250YWluZXJbMF07XG5cdFx0XHRpZiAoIWhhbmRsZSB8fCAhY29udGFpbmVyKSByZXR1cm47XG5cdFx0XHRjb25zdCBvblBvaW50ZXJEb3duID0gKGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0Y29uc3Qgc3RhcnRIZWlnaHQgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXHRcdFx0XHRjb25zdCBzdGFydFkgPSBldmVudC5jbGllbnRZO1xuXHRcdFx0XHRjb25zdCBvblBvaW50ZXJNb3ZlID0gKG1vdmVFdmVudDogUG9pbnRlckV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoOTAsIHN0YXJ0SGVpZ2h0ICsgc3RhcnRZIC0gbW92ZUV2ZW50LmNsaWVudFkpO1xuXHRcdFx0XHRcdHRoaXMuJGNvbnRhaW5lci5oZWlnaHQoaGVpZ2h0KTtcblx0XHRcdFx0XHRDQUwuZGlhbG9nSGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuY3NzKHttYXhIZWlnaHQ6IGAke01hdGgubWF4KDAsIGhlaWdodCAtIDEwMCl9cHhgLCB3aWR0aDogJyd9KTtcblx0XHRcdFx0fTtcblx0XHRcdFx0Y29uc3Qgb25Qb2ludGVyVXAgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvblBvaW50ZXJNb3ZlKTtcblx0XHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBvblBvaW50ZXJVcCk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgb25Qb2ludGVyTW92ZSk7XG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIG9uUG9pbnRlclVwLCB7b25jZTogdHJ1ZX0pO1xuXHRcdFx0fTtcblx0XHRcdGhhbmRsZS5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd24pO1xuXHRcdFx0dGhpcy5yZXNpemVDbGVhbnVwID0gKCkgPT4ge1xuXHRcdFx0XHRoYW5kbGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvblBvaW50ZXJEb3duKTtcblx0XHRcdFx0JGhhbmRsZS5yZW1vdmUoKTtcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0aWYgKFxuXHRcdCh3Z05hbWVzcGFjZU51bWJlciA9PT0gLTEgJiYgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdTZWFyY2gnKSB8fFxuXHRcdHdnTmFtZXNwYWNlTnVtYmVyID09PSBPUFRJT05TLnRhcmdldE5hbWVzcGFjZVxuXHQpIHtcblx0XHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IC0xKSB7XG5cdFx0XHRDQUwuaXNTZWFyY2hNb2RlID0gdHJ1ZTtcblx0XHR9XG5cdFx0Q0FMWyd2YXJpYW50Q2FjaGUnXSA9IGdldENhY2hlZEtleXMoKTtcblx0XHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IE9QVElPTlMudGFyZ2V0TmFtZXNwYWNlKSB7XG5cdFx0XHRjb25zdCBjYXRlZ29yeSA9IG13LmNvbmZpZy5nZXQoJ3dnVGl0bGUnKS5yZXBsYWNlKC9eQ2F0ZWdvcnk6LywgJycpO1xuXHRcdFx0Q0FMWyd2YXJpYW50Q2FjaGUnXVtjYXRlZ29yeV0gfHw9IGF3YWl0IENBTC5maW5kQWxsVmFyaWFudHMoY2F0ZWdvcnkpO1xuXHRcdH1cblx0XHQvKiEgQ2F0LWEtbG90IG1lc3NhZ2VzIHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG5cdFx0c2V0TWVzc2FnZXMoKTtcblx0XHR2b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRcdG5ldyBDQUwoJGJvZHkpLmJ1aWxkRWxlbWVudHMoKTtcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtjYXRBTG90fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYENhdC1hLWxvdC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcblxuY29uc3QgZ2V0Q2FjaGVkS2V5cyA9ICgpID0+IHtcblx0Y29uc3QgdmFyaWFudENhY2hlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoXG5cdFx0KG13LnN0b3JhZ2UgYXMgdW5rbm93biBhcyBTdG9yYWdlKVsnc3RvcmUnXSBhcyBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT5cblx0KSkge1xuXHRcdGlmIChrZXkuc3RhcnRzV2l0aChPUFRJT05TLnN0b3JhZ2VLZXkpICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRjb25zdCBjYWNoZUtleSA9IGtleS5yZXBsYWNlKE9QVElPTlMuc3RvcmFnZUtleSwgJycpO1xuXHRcdFx0dmFyaWFudENhY2hlW2NhY2hlS2V5XSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdmFyaWFudENhY2hlO1xufTtcblxuZXhwb3J0IHtnZXRDYWNoZWRLZXlzfTtcbiIsICJpbXBvcnQge0NMQVNTX05BTUVfTEFCRUwsIENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCwgQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRH0gZnJvbSAnLi9jb25zdGFudCc7XG5cbnR5cGUgT25DYXRBTG90U2hpZnRDbGljayA9ICh0aGlzOiBKUXVlcnksIGNhbGxiYWNrOiAoKSA9PiB1bmtub3duKSA9PiBKUXVlcnk7XG5kZWNsYXJlIGdsb2JhbCB7XG5cdGludGVyZmFjZSBKUXVlcnkge1xuXHRcdG9uQ2F0QUxvdFNoaWZ0Q2xpY2s6IE9uQ2F0QUxvdFNoaWZ0Q2xpY2s7XG5cdH1cbn1cblxuY29uc3QgZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlID0gKCk6IHZvaWQgPT4ge1xuXHQkLmZuLmV4dGVuZCh7XG5cdFx0b25DYXRBTG90U2hpZnRDbGljazogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRsZXQgcHJldkNoZWNrYm94OiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cblx0XHRcdC8vIFdoZW4gb3VyIGJveGVzIGFyZSBjbGlja2VkLi5cblx0XHRcdHRoaXMub24oJ2NsaWNrLmNhdEFMb3QnLCAoZXZlbnQ6IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHQvLyBQcmV2ZW50IGZvbGxvd2luZyB0aGUgbGluayBhbmQgdGV4dCBzZWxlY3Rpb25cblx0XHRcdFx0aWYgKCFldmVudC5jdHJsS2V5KSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEhpZ2hsaWdodCBsYXN0IHNlbGVjdGVkXG5cdFx0XHRcdHRoaXMucGFyZW50cygnYm9keScpXG5cdFx0XHRcdFx0LmZpbmQoYC4ke0NMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRH1gKVxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcyhDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQpO1xuXG5cdFx0XHRcdGxldCAkdGhpc0NvbnRyb2wgPSAkKGV2ZW50LnRhcmdldCkgYXMgSlF1ZXJ5O1xuXHRcdFx0XHRpZiAoISR0aGlzQ29udHJvbC5oYXNDbGFzcyhDTEFTU19OQU1FX0xBQkVMKSkge1xuXHRcdFx0XHRcdCR0aGlzQ29udHJvbCA9ICR0aGlzQ29udHJvbC5wYXJlbnRzKGAuJHtDTEFTU19OQU1FX0xBQkVMfWApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JHRoaXNDb250cm9sLmFkZENsYXNzKENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCk7XG5cblx0XHRcdFx0Ly8gQW5kIG9uZSBoYXMgYmVlbiBjbGlja2VkIGJlZm9yZS4uLlxuXHRcdFx0XHRpZiAocHJldkNoZWNrYm94ICYmIGV2ZW50LnNoaWZ0S2V5KSB7XG5cdFx0XHRcdFx0Y29uc3QgbWV0aG9kOiAnYWRkQ2xhc3MnIHwgJ3JlbW92ZUNsYXNzJyA9ICR0aGlzQ29udHJvbC5oYXNDbGFzcyhDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEKVxuXHRcdFx0XHRcdFx0PyAnYWRkQ2xhc3MnXG5cdFx0XHRcdFx0XHQ6ICdyZW1vdmVDbGFzcyc7XG5cdFx0XHRcdFx0Ly8gQ2hlY2sgb3IgdW5jaGVjayB0aGlzIG9uZSBhbmQgYWxsIGluLWJldHdlZW4gY2hlY2tib3hlc1xuXHRcdFx0XHRcdHRoaXMuc2xpY2UoXG5cdFx0XHRcdFx0XHRNYXRoLm1pbih0aGlzLmluZGV4KHByZXZDaGVja2JveCksIHRoaXMuaW5kZXgoJHRoaXNDb250cm9sKSksXG5cdFx0XHRcdFx0XHRNYXRoLm1heCh0aGlzLmluZGV4KHByZXZDaGVja2JveCksIHRoaXMuaW5kZXgoJHRoaXNDb250cm9sKSkgKyAxXG5cdFx0XHRcdFx0KVttZXRob2RdKENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEVpdGhlciB3YXksIHVwZGF0ZSB0aGUgcHJldkNoZWNrYm94IHZhcmlhYmxlIHRvIHRoZSBvbmUgY2xpY2tlZCBub3dcblx0XHRcdFx0cHJldkNoZWNrYm94ID0gJHRoaXNDb250cm9sO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSBhcyBPbkNhdEFMb3RTaGlmdENsaWNrLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7ZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlfTtcbiIsICJpbXBvcnQgJy4vQ2F0LWEtbG90Lmxlc3MnO1xuaW1wb3J0IHtjYXRBTG90fSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2V4dGVuZEpRdWVyeVByb3RvdHlwZX0gZnJvbSAnLi9tb2R1bGVzL2V4dGVuZEpRdWVyeVByb3RvdHlwZSc7XG5cbi8qISBDYXQtYS1sb3QgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cbmV4dGVuZEpRdWVyeVByb3RvdHlwZSgpO1xudm9pZCBjYXRBTG90KCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxTQUFVO0FBQ1YsSUFBQUMsa0JBQW1CO0FBQ25CLElBQUFDLFVBQVc7QUFDWCxJQUFBQyxhQUFjOztBQ0ZmLElBQU1DLGFBQXFCO0FBQzNCLElBQU1DLHVCQUFBLEdBQUFDLE9BQWtDRixZQUFVLFlBQUE7QUFDbEQsSUFBTUcsNEJBQUEsR0FBQUQsT0FBdUNELHNCQUFvQixRQUFBO0FBQ2pFLElBQU1HLDBDQUFBLEdBQUFGLE9BQXFEQywyQkFBeUIsaUJBQUE7QUFDcEYsSUFBTUUsaURBQUEsR0FBQUgsT0FBNERFLHlDQUF1QyxVQUFBO0FBQ3pHLElBQU1FLG1EQUFBLEdBQUFKLE9BQThERSx5Q0FBdUMsWUFBQTtBQUMzRyxJQUFNRyx5Q0FBQSxHQUFB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O0lBQ1g1QixxQkFBcUIsU0FBVWhKLFVBQVU7QUFDeEMsVUFBSTZLO0FBR0osV0FBSy9RLEdBQUcsaUJBQWtCckMsV0FBdUM7QUFFaEUsWUFBSSxDQUFDQSxNQUFNcVQsU0FBUztBQUNuQnJULGdCQUFNc0MsZUFBZTtRQUN0QjtBQUdBLGFBQUtnUixRQUFRLE1BQU0sRUFDakIxUyxLQUFBLElBQUF6SixPQUFTa0IsOEJBQThCLENBQUUsRUFDekNtTCxZQUFZbkwsOEJBQThCO0FBRTVDLFlBQUlrYixlQUFlbFYsRUFBRTJCLE1BQU13VCxNQUFNO0FBQ2pDLFlBQUksQ0FBQ0QsYUFBYS9CLFNBQVNyWixnQkFBZ0IsR0FBRztBQUM3Q29iLHlCQUFlQSxhQUFhRCxRQUFBLElBQUFuYyxPQUFZZ0IsZ0JBQWdCLENBQUU7UUFDM0Q7QUFFQW9iLHFCQUFhbFMsU0FBU2hKLDhCQUE4QixFQUFFc0wsWUFBWXJMLHlCQUF5QjtBQUczRixZQUFJOGEsZ0JBQWdCcFQsTUFBTXlULFVBQVU7QUFDbkMsZ0JBQU1DLFNBQXFDSCxhQUFhL0IsU0FBU2xaLHlCQUF5QixJQUN2RixhQUNBO0FBRUgsZUFBS3NOLE1BQ0o5SCxLQUFLa1MsSUFBSSxLQUFLbkcsTUFBTXVKLFlBQVksR0FBRyxLQUFLdkosTUFBTTBKLFlBQVksQ0FBQyxHQUMzRHpWLEtBQUtDLElBQUksS0FBSzhMLE1BQU11SixZQUFZLEdBQUcsS0FBS3ZKLE1BQU0wSixZQUFZLENBQUMsSUFBSSxDQUNoRSxFQUFFRyxNQUFNLEVBQUVwYix5QkFBeUI7UUFDcEM7QUFFQThhLHVCQUFlRztBQUVmLFlBQUksT0FBT2hMLGFBQWEsWUFBWTtBQUNuQ0EsbUJBQVM7UUFDVjtNQUNELENBQUM7QUFFRCxhQUFPO0lBQ1I7RUFDRCxDQUFDO0FBQ0Y7O0FDbkRBO0FBQ0EySyxzQkFBc0I7QUFDdEIsS0FBS3pYLFFBQVE7IiwKICAibmFtZXMiOiBbImFwaVRhZyIsICJ0YXJnZXROYW1lc3BhY2UiLCAidmVyc2lvbiIsICJzdG9yYWdlS2V5IiwgIkNMQVNTX05BTUUiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVIiLCAiY29uY2F0IiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEEiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT04iLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX05PX0ZPVU5EIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VBUkNIX0lOUFVUX0NPTlRBSU5FUl9JTlBVVCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlMiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORSIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOSyIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCIsICJDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUiIsICJDTEFTU19OQU1FX0ZFRURCQUNLIiwgIkNMQVNTX05BTUVfRkVFREJBQ0tfRE9ORSIsICJDTEFTU19OQU1FX0xBQkVMIiwgIkNMQVNTX05BTUVfTEFCRUxfRE9ORSIsICJDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQiLCAiQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCIsICJERUZBVUxUX1NFVFRJTkciLCAiZG9jbGVhbnVwIiwgImRlZmF1bHQiLCAibGFiZWxfaTE4biIsICJlZGl0cGFnZXMiLCAibWlub3IiLCAic3ViY2F0Y291bnQiLCAid2F0Y2hsaXN0IiwgInNlbGVjdF9pMThuIiwgIndhdGNoX25vY2hhbmdlIiwgIndhdGNoX3ByZWYiLCAid2F0Y2hfdW53YXRjaCIsICJ3YXRjaF93YXRjaCIsICJWQVJJQU5UUyIsICJ3Z1VzZXJMYW5ndWFnZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIkRFRkFVTFRfTUVTU0FHRVMiLCAic2V0TWVzc2FnZXMiLCAiaW5jbHVkZXMiLCAibWVzc2FnZXMiLCAic2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiZ2V0Q2FjaGVkS2V5cyIsICJ2YXJpYW50Q2FjaGUiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgInN0b3JhZ2UiLCAibGVuZ3RoIiwgImtleSIsICJ2YWx1ZSIsICJzdGFydHNXaXRoIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiY2FjaGVLZXkiLCAicmVwbGFjZSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dUaXRsZSIsICJjYXRBTG90IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiQ0FMIiwgImlzU2VhcmNoTW9kZSIsICJNRVNTQUdFUyIsICJBUElfVEFHIiwgIlRBUkdFVF9OQU1FU1BBQ0UiLCAiQ1VSUkVOVF9DQVRFR1JPWSIsICJhbHJlYWR5VGhlcmUiLCAiY29ubmVjdGlvbkVycm9yIiwgIm5vdEZvdW5kIiwgImNvdW50ZXJDdXJyZW50IiwgImNvdW50ZXJOZWVkZWQiLCAiY291bnRlckNhdCIsICJjdXJyZW50Q2F0ZWdvcnkiLCAiZGlhbG9nSGVpZ2h0IiwgImVkaXRUb2tlbiIsICJsb2NhbENhdE5hbWUiLCAicGFyZW50Q2F0cyIsICJzdWJDYXRzIiwgInNldHRpbmdzIiwgInJlcXVlc3REZWxheSIsICJyZXF1ZXN0UXVldWUiLCAicHJvY2Vzc2luZ1F1ZXVlIiwgImxhc3RTdGFydCIsICJlbnF1ZXVlQXBpQ2FsbCIsICJmbiIsICJQcm9taXNlIiwgInJlc29sdmUiLCAicmVqZWN0IiwgInB1c2giLCAicHJvY2Vzc1F1ZXVlIiwgInNoaWZ0IiwgIm5vdyIsICJEYXRlIiwgIndhaXQiLCAiTWF0aCIsICJtYXgiLCAiciIsICJzZXRUaW1lb3V0IiwgInJlcyIsICJlIiwgIiRjb3VudGVyIiwgIiQiLCAiJHByb2dyZXNzRGlhbG9nIiwgIiRsYWJlbHMiLCAiJHNlbGVjdGVkTGFiZWxzIiwgIiRib2R5IiwgIiRjb250YWluZXIiLCAiJGRhdGFDb250YWluZXIiLCAiJG1hcmtDb3VudGVyIiwgIiRyZXN1bHRMaXN0IiwgIiRzZWFyY2hJbnB1dCIsICIkaGVhZCIsICIkbGluayIsICJyZXNpemVDbGVhbnVwIiwgImNvbnN0cnVjdG9yIiwgIl9tdyR1dGlsJGdldFBhcmFtVmFsdSIsICJtZXNzYWdlIiwgInBhcnNlIiwgImluaXRTZXR0aW5ncyIsICJjb250YWluZXIiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAicGxhY2Vob2xkZXIiLCAibXNnIiwgInR5cGUiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIm9uS2V5RG93biIsICJldmVudCIsICIkZWxlbWVudCIsICJjdXJyZW50VGFyZ2V0IiwgIl8kZWxlbWVudCR2YWwkdHJpbSIsICJfJGVsZW1lbnQkdmFsIiwgImNhdCIsICJ2YWwiLCAidHJpbSIsICJ1cGRhdGVDYXRzIiwgIm9uQ2xpY2siLCAidG9nZ2xlQWxsIiwgImFwcGVuZFRvIiwgImZpbmQiLCAiYnVpbGRFbGVtZW50cyIsICJyZWdleENhdCIsICJSZWdFeHAiLCAibG9jYWxpemVkUmVnZXgiLCAiaXNDb21wb3NpdGlvblN0YXJ0IiwgImF1dG9jb21wbGV0ZVJlcXVlc3QiLCAic2VsZWN0ZWRTdWdnZXN0aW9uIiwgIiRzdWdnZXN0aW9ucyIsICJhZGRDbGFzcyIsICJoaWRlIiwgImhpZGVTdWdnZXN0aW9ucyIsICJlbXB0eSIsICJzZWxlY3RTdWdnZXN0aW9uIiwgImNhdGVnb3J5IiwgInRyaWdnZXIiLCAic2hvd1N1Z2dlc3Rpb25zIiwgImNhdGVnb3JpZXMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAidGV4dCIsICJvbiIsICJwcmV2ZW50RGVmYXVsdCIsICJlcnIiLCAiZiIsICJzaG93IiwgIm9sZFZhbCIsICJuZXdWYWwiLCAicmVxdWVzdElkIiwgInNlYXJjaCIsICJkb0FQSUNhbGwiLCAiYWN0aW9uIiwgIm5hbWVzcGFjZSIsICJyZWRpcmVjdHMiLCAicmVzdWx0IiwgIm1hcCIsICJpdGVtIiwgImZpbHRlciIsICJzdWdnZXN0aW9ucyIsICJjaGlsZHJlbiIsICJyZW1vdmVDbGFzcyIsICJlcSIsICJ3aW5kb3ciLCAidG9nZ2xlQ2xhc3MiLCAicnVuIiwgIl93aW5kb3ckQ2F0QUxvdFByZWZzIiwgImNhdEFMb3RQcmVmcyIsICJDYXRBTG90UHJlZnMiLCAidHlwZU9mQ2F0QUxvdFByZWZzIiwgIl9pMiIsICJfT2JqZWN0JGtleXMiLCAia2V5cyIsICJfY2F0QUxvdFByZWZzJHNldHRpbmciLCAic2V0dGluZ0tleSIsICJzZXR0aW5nIiwgInNlbGVjdCIsICJfaTMiLCAiX09iamVjdCRrZXlzMiIsICJtZXNzYWdlS2V5IiwgImFyZ3MiLCAiZnVsbEtleSIsICJwbGFpbiIsICJuYW1lc3BhY2VOdW1iZXIiLCAiZmFsbGJhY2siLCAiX0NBTCR3Z0Zvcm1hdHRlZE5hbWVzIiwgIndpa2lUZXh0QmxhbmsiLCAiU3RyaW5nIiwgInJhdyIsICJfdGVtcGxhdGVPYmplY3QiLCAiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsICJ3aWtpVGV4dEJsYW5rUkUiLCAiY3JlYXRlUmVnZXhTdHIiLCAibmFtZSIsICJyZWdleE5hbWUiLCAiaSIsICJpbml0aWFsIiwgInNsaWNlIiwgImxsIiwgInRvTG93ZXJDYXNlIiwgInVsIiwgInRvVXBwZXJDYXNlIiwgIl90ZW1wbGF0ZU9iamVjdDIiLCAiY2Fub25pY2FsIiwgInJlZ2V4U3RyaW5nIiwgIl9pNCIsICJfT2JqZWN0JGtleXMzIiwgImNhdE5hbWUiLCAidXBkYXRlU2VsZWN0aW9uQ291bnRlciIsICJodG1sIiwgInRvU3RyaW5nIiwgImZpbmRBbGxWYXJpYW50cyIsICJnZXRPYmplY3QiLCAicmVzdWx0cyIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGUiLCAidmFyaWFudCIsICIkcGFyc2VkIiwgIl9pNSIsICJfVkFSSUFOVFMiLCAiJHZhcmlhbnROb2RlIiwgInVuaXF1ZUFycmF5IiwgInNldE9iamVjdCIsICJyZWdleEJ1aWxkZXIiLCAidmFyaWFudHMiLCAidmFyaWFudFJlZ0V4cHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZXNjYXBlUmVnRXhwIiwgIl90ZW1wbGF0ZU9iamVjdDMiLCAiZmlyc3QiLCAiam9pbiIsICJkb0FQSUNhbGxBc3luYyIsICJfcGFyYW1zIiwgInJldHJ5Q291bnQiLCAicG9zdCIsICJlcnJvciIsICJsb2ciLCAiY2FsbGJhY2siLCAidGhlbiIsICJjYXRjaCIsICJ1cGRhdGVDb3VudGVyIiwgIm1hcmtBc0RvbmUiLCAiJG1hcmtlZExhYmVsIiwgInRhcmdldENhdGVnb3J5IiwgIm1vZGUiLCAiYXBwZW5kIiwgIkZyYWdtZW50IiwgImRvQ2xlYW51cCIsICJyZW1vdmVVbmNhdCIsICJkaXNwbGF5UmVzdWx0IiwgImNzcyIsICJjdXJzb3IiLCAib3ZlcmZsb3ciLCAiJHBhcmVudCIsICJwYXJlbnQiLCAicmVtb3ZlIiwgInJlZHVjZSIsICJwcmUiLCAiY3VyIiwgImluZGV4IiwgImVkaXRDYXRlZ29yaWVzIiwgIm1hcmtlZExhYmVsIiwgIl90aGlzIiwgIl9wYWdlJHJldmlzaW9ucyIsICJtYXJrZWRMYWJlbFRpdGxlIiwgIm9yaWdpblRleHQiLCAic3RhcnR0aW1lc3RhbXAiLCAidGltZXN0YW1wIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAicGFnZXMiLCAicGFnZSIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgInNvdXJjZWNhdCIsICJ0YXJnZVJlZ0V4cCIsICJ0ZXN0IiwgInN1bW1hcnkiLCAic291cmNlQ2F0UmVnRXhwIiwgImVzY2FwZWRTb3VyY2VDYXQiLCAiX3RlbXBsYXRlT2JqZWN0NCIsICJfbWF0Y2giLCAicHJlZml4IiwgIl9jYXRlZ29yeSIsICJzdWZmaXgiLCAiX2RvY1BhZ2UkcmV2aXNpb25zJDAkIiwgIl9kb2NQYWdlJHJldmlzaW9ucyIsICJkb2NUaXRsZSIsICJkb2NSZXN1bHQiLCAibWV0YSIsICJ0aXRsZXMiLCAicHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJxdWVyeSIsICJkb2NQYWdlcyIsICJkb2NQYWdlIiwgImRvY09yaWdpblRleHQiLCAiZG9jVGV4dCIsICJkb2NDYXRSZWdFeHAiLCAibWF0Y2giLCAiX2RvY1BhZ2Ukc3RhcnR0aW1lc3RhIiwgIl9kb2NQYWdlJHJldmlzaW9ucyQwJDIiLCAiX2RvY1BhZ2UkcmV2aXNpb25zMiIsICJkb2NTdGFydHRpbWVzdGFtcCIsICJkb2NUaW1lc3RhbXAiLCAidG9rZW4iLCAidGFncyIsICJhc3NlcnQiLCAiYm90IiwgImJhc2V0aW1lc3RhbXAiLCAiY29uc29sZSIsICJnZXRDb250ZW50IiwgIl90aGlzMiIsICJnZXRUaXRsZUZyb21MaW5rIiwgImhyZWYiLCAiX2RlY29kZVVSSUNvbXBvbmVudCRtIiwgIl9kZWNvZGVVUklDb21wb25lbnQkbTIiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImdldE1hcmtlZExhYmVscyIsICJtYXJrZWRMYWJlbHMiLCAiZWFjaCIsICJfaW5kZXgiLCAibGFiZWwiLCAiXyRsYWJlbExpbmskYXR0ciIsICIkbGFiZWwiLCAiJGxhYmVsTGluayIsICJhdHRyIiwgInNob3dQcm9ncmVzcyIsICIkb3ZlcmxheSIsICIkZGlhbG9nIiwgInJvbGUiLCAiZG9Tb21ldGhpbmciLCAiX3RoaXMzIiwgIm5vdGlmeSIsICJ0YWciLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiYWRkSGVyZSIsICJjb3B5SGVyZSIsICJtb3ZlSGVyZSIsICJjcmVhdGVDYXRMaW5rcyIsICJzeW1ib2wiLCAic29ydCIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICIkdHIiLCAiZGF0YXNldCIsICJjbG9zZXN0IiwgImRhdGEiLCAic2hvd0NhdGVnb3J5TGlzdCIsICJfdGhpcyQkY29udGFpbmVyJHdpZHQiLCAiXyQkd2lkdGgiLCAiY3VycmVudENhdGVnb3JpZXMiLCAid2lkdGgiLCAiaGVpZ2h0IiwgIm1pbiIsICJnZXRQYXJlbnRDYXRzIiwgIl9wYWdlcyQiLCAiX3BhZ2VzJDIiLCAibWlzc2luZyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJjYXRUaXRsZSIsICJnZXRTdWJDYXRzIiwgImxpc3QiLCAiY210eXBlIiwgImNtbGltaXQiLCAiY210aXRsZSIsICJfcmVzdWx0JHF1ZXJ5IiwgImNhdHMiLCAiY2F0ZWdvcnltZW1iZXJzIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgImdldENhdGVnb3J5TGlzdCIsICJmaW5kQWxsTGFiZWxzIiwgImFkZCIsICIkcGFnZXMiLCAibWFrZUNsaWNrYWJsZSIsICJvbkNhdEFMb3RTaGlmdENsaWNrIiwgImhhc0NsYXNzIiwgImVuYWJsZVJlc2l6ZSIsICJfdGhpcyRyZXNpemVDbGVhbnVwIiwgImNhbGwiLCAib2ZmIiwgIl90aGlzJHJlc2l6ZUNsZWFudXAyIiwgIiRoYW5kbGUiLCAicHJlcGVuZFRvIiwgImhhbmRsZSIsICJvblBvaW50ZXJEb3duIiwgInN0YXJ0SGVpZ2h0IiwgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsICJzdGFydFkiLCAiY2xpZW50WSIsICJvblBvaW50ZXJNb3ZlIiwgIm1vdmVFdmVudCIsICJtYXhIZWlnaHQiLCAib25Qb2ludGVyVXAiLCAiZG9jdW1lbnQiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJhZGRFdmVudExpc3RlbmVyIiwgIm9uY2UiLCAiX0NBTCR2YXJpYW50Q2FjaGUiLCAiZ2V0Qm9keSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlIiwgImV4dGVuZCIsICJwcmV2Q2hlY2tib3giLCAiY3RybEtleSIsICJwYXJlbnRzIiwgIiR0aGlzQ29udHJvbCIsICJ0YXJnZXQiLCAic2hpZnRLZXkiLCAibWV0aG9kIl0KfQo=
