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
            const parsed = new DOMParser().parseFromString(text, "text/html");
            for (var _i5 = 0, _VARIANTS = VARIANTS; _i5 < _VARIANTS.length; _i5++) {
              const variant = _VARIANTS[_i5];
              const variantNode = parsed.querySelector("#cal-".concat(variant));
              if (variantNode) {
                results[results.length] = variantNode.textContent;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NhdC1hLWxvdC9vcHRpb25zLmpzb24iLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9DYXQtYS1sb3QvbW9kdWxlcy9tZXNzYWdlcy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvY29yZS50c3giLCAic3JjL0NhdC1hLWxvdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZ2V0Q2FjaGVkS2V5cy50cyIsICJzcmMvQ2F0LWEtbG90L21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlLnRzIiwgInNyYy9DYXQtYS1sb3QvQ2F0LWEtbG90LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiYXBpVGFnXCI6IFwiQ2F0LWEtbG90XCIsXG5cdFwidGFyZ2V0TmFtZXNwYWNlXCI6IDE0LFxuXHRcInZlcnNpb25cIjogXCI2LjBcIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5DYXQtYS1Mb3RfcmVzdWx0cy1cIlxufVxuIiwgImltcG9ydCB0eXBlIHtTZXR0aW5nfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1jYXRfYV9sb3QnO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVI6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWNvbnRhaW5lcmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUn1fX2RhdGFgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBfV9fY2F0ZWdvcnktbGlzdGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9X19hY3Rpb25gO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUX05PX0ZPVU5EOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1R9LS1uby1mb3VuZGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1fX21hcmstY291bnRlcmA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19zZWFyY2gtaW5wdXQtY29udGFpbmVyX19pbnB1dGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlM6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEF9X19zZWxlY3Rpb25zYDtcbmNvbnN0IENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19BTEw6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU31fX2FsbGA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlNfTk9ORTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TfV9fbm9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUn1fX2hlYWRgO1xuY29uc3QgQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEfV9fbGlua2A7XG5jb25zdCBDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LfS0tZW5hYmxlZGA7XG5jb25zdCBDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUjogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tY3VycmVudF9jb3VudGVyYDtcbmNvbnN0IENMQVNTX05BTUVfRkVFREJBQ0s6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LWZlZWRiYWNrYDtcbmNvbnN0IENMQVNTX05BTUVfRkVFREJBQ0tfRE9ORTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRV9GRUVEQkFDS30tLWRvbmVgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX0tbGFiZWxgO1xuY29uc3QgQ0xBU1NfTkFNRV9MQUJFTF9ET05FOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX0xBQkVMfS0tZG9uZWA7XG5jb25zdCBDTEFTU19OQU1FX0xBQkVMX0xBU1RfU0VMRUNURUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1sYXN0LXNlbGVjdGVkYDtcbmNvbnN0IENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQ6IHN0cmluZyA9IGAke0NMQVNTX05BTUVfTEFCRUx9LS1zZWxlY3RlZGA7XG5cbmNvbnN0IERFRkFVTFRfU0VUVElORzogU2V0dGluZyA9IHtcblx0ZG9jbGVhbnVwOiB7XG5cdFx0ZGVmYXVsdDogZmFsc2UsXG5cdFx0bGFiZWxfaTE4bjogJ2RvY2xlYW51cHByZWYnLFxuXHR9LFxuXHRlZGl0cGFnZXM6IHtcblx0XHRkZWZhdWx0OiB0cnVlLFxuXHRcdGxhYmVsX2kxOG46ICdlZGl0cGFnZXNwcmVmJyxcblx0fSxcblx0bWlub3I6IHtcblx0XHRkZWZhdWx0OiBmYWxzZSxcblx0XHRsYWJlbF9pMThuOiAnbWlub3JwcmVmJyxcblx0fSxcblx0c3ViY2F0Y291bnQ6IHtcblx0XHRkZWZhdWx0OiA1MCxcblx0XHRsYWJlbF9pMThuOiAnc3ViY2F0Y291bnRwcmVmJyxcblx0fSxcblx0d2F0Y2hsaXN0OiB7XG5cdFx0ZGVmYXVsdDogJ3ByZWZlcmVuY2VzJyxcblx0XHRsYWJlbF9pMThuOiAnd2F0Y2hsaXN0cHJlZicsXG5cdFx0c2VsZWN0X2kxOG46IHtcblx0XHRcdHdhdGNoX25vY2hhbmdlOiAnbm9jaGFuZ2UnLFxuXHRcdFx0d2F0Y2hfcHJlZjogJ3ByZWZlcmVuY2VzJyxcblx0XHRcdHdhdGNoX3Vud2F0Y2g6ICd1bndhdGNoJyxcblx0XHRcdHdhdGNoX3dhdGNoOiAnd2F0Y2gnLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5jb25zdCBWQVJJQU5UUzogc3RyaW5nW10gPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1teScsICd6aC1zZycsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddO1xuXG5leHBvcnQge1xuXHRDTEFTU19OQU1FLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUixcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNULFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOSyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQsXG5cdENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUsXG5cdENMQVNTX05BTUVfTEFCRUwsXG5cdENMQVNTX05BTUVfTEFCRUxfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVELFxuXHRDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVELFxuXHRERUZBVUxUX1NFVFRJTkcsXG5cdFZBUklBTlRTLFxufTtcbiIsICJpbXBvcnQgdHlwZSB7TWVzc2FnZUtleX0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IERFRkFVTFRfTUVTU0FHRVMgPSB7XG5cdC8vIGFzIGluIDE3IGZpbGVzIHNlbGVjdGVkXG5cdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAne3tQTFVSQUw6JDF8T25lIGZpbGV8JDEgZmlsZXN9fSBzZWxlY3RlZC4nLFxuXHQvLyBBY3Rpb25zXG5cdCdjYXQtYS1sb3QtY29weSc6ICdDb3B5Jyxcblx0J2NhdC1hLWxvdC1tb3ZlJzogJ01vdmUnLFxuXHQnY2F0LWEtbG90LWFkZCc6ICdBZGQnLFxuXHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICdSZW1vdmUgZnJvbSB0aGlzIGNhdGVnb3J5Jyxcblx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ0VudGVyIGNhdGVnb3J5IG5hbWUnLFxuXHQnY2F0LWEtbG90LXNlbGVjdCc6ICdTZWxlY3QnLFxuXHQnY2F0LWEtbG90LWFsbCc6ICdhbGwnLFxuXHQnY2F0LWEtbG90LW5vbmUnOiAnbm9uZScsXG5cdCdjYXQtYS1sb3Qtbm9uZS1zZWxlY3RlZCc6ICdObyBmaWxlcyBzZWxlY3RlZCEnLFxuXHQvLyBQcmVmZXJlbmNlc1xuXHQnY2F0LWEtbG90LXdhdGNobGlzdHByZWYnOiAnV2F0Y2hsaXN0IHByZWZlcmVuY2UgY29uY2VybmluZyBmaWxlcyBlZGl0ZWQgd2l0aCBDYXQtQS1Mb3QnLFxuXHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAnQWNjb3JkaW5nIHRvIHlvdXIgZ2VuZXJhbCBwcmVmZXJlbmNlcycsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAnRG8gbm90IGNoYW5nZSB3YXRjaHN0YXR1cycsXG5cdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAnV2F0Y2ggcGFnZXMgZWRpdGVkIHdpdGggQ2F0LUEtTG90Jyxcblx0J2NhdC1hLWxvdC13YXRjaF91bndhdGNoJzogJ1JlbW92ZSBwYWdlcyB3aGlsZSBlZGl0aW5nIHdpdGggQ2F0LUEtTG90IGZyb20geW91ciB3YXRjaGxpc3QnLFxuXHQnY2F0LWEtbG90LW1pbm9ycHJlZic6XG5cdFx0XCJNYXJrIGVkaXRzIGFzIG1pbm9yIChpZiB5b3UgZ2VuZXJhbGx5IG1hcmsgeW91ciBlZGl0cyBhcyBtaW5vciwgdGhpcyB3b24ndCBjaGFuZ2UgYW55dGhpbmcpXCIsXG5cdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICdBbGxvdyBjYXRlZ29yaXNpbmcgcGFnZXMgKGluY2x1ZGluZyBjYXRlZ29yaWVzKSB0aGF0IGFyZSBub3QgZmlsZXMnLFxuXHQnY2F0LWEtbG90LWRvY2xlYW51cHByZWYnOiAnUmVtb3ZlIHt7Q2hlY2sgY2F0ZWdvcmllc319IGFuZCBvdGhlciBtaW5vciBjbGVhbnVwJyxcblx0J2NhdC1hLWxvdC1zdWJjYXRjb3VudHByZWYnOiAnU3ViLWNhdGVnb3JpZXMgdG8gc2hvdyBhdCBtb3N0Jyxcblx0Ly8gUHJvZ3Jlc3Ncblx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ0xvYWRpbmcuLi4nLFxuXHQnY2F0LWEtbG90LWVkaXRpbmcnOiAnRWRpdGluZyBwYWdlJyxcblx0J2NhdC1hLWxvdC1vZic6ICdvZiAnLFxuXHQnY2F0LWEtbG90LXNraXBwZWQtYWxyZWFkeSc6XG5cdFx0J1RoZSBmb2xsb3dpbmcge3tQTFVSQUw6JDF8cGFnZSB3YXN8JDEgcGFnZXMgd2VyZX19IHNraXBwZWQsIGJlY2F1c2UgdGhlIHBhZ2Ugd2FzIGFscmVhZHkgaW4gdGhlIGNhdGVnb3J5OicsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1ub3QtZm91bmQnOlxuXHRcdCdUaGUgZm9sbG93aW5nIHt7UExVUkFMOiQxfHBhZ2Ugd2FzfCQxIHBhZ2VzIHdlcmV9fSBza2lwcGVkLCBiZWNhdXNlIHRoZSBvbGQgY2F0ZWdvcnkgY291bGQgbm90IGJlIGZvdW5kOicsXG5cdCdjYXQtYS1sb3Qtc2tpcHBlZC1zZXJ2ZXInOlxuXHRcdFwiVGhlIGZvbGxvd2luZyB7e1BMVVJBTDokMXxwYWdlfCQxIHBhZ2VzfX0gY291bGRuJ3QgYmUgY2hhbmdlZCwgc2luY2UgdGhlcmUgd2VyZSBwcm9ibGVtcyBjb25uZWN0aW5nIHRvIHRoZSBzZXJ2ZXI6XCIsXG5cdCdjYXQtYS1sb3QtYWxsLWRvbmUnOiAnQWxsIHBhZ2VzIGFyZSBwcm9jZXNzZWQuJyxcblx0J2NhdC1hLWxvdC1kb25lJzogJ0RvbmUhJyxcblx0J2NhdC1hLWxvdC1hZGRlZC1jYXQnOiAnQWRkZWQgY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAnQ29waWVkIHRvIGNhdGVnb3J5ICQxJyxcblx0J2NhdC1hLWxvdC1tb3ZlZC1jYXQnOiAnTW92ZWQgdG8gY2F0ZWdvcnkgJDEnLFxuXHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ1JlbW92ZWQgZnJvbSBjYXRlZ29yeSAkMScsXG5cdCdjYXQtYS1sb3QtcmV0dXJuLXRvLXBhZ2UnOiAnUmV0dXJuIHRvIHBhZ2UnLFxuXHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAnQ2F0ZWdvcnkgbm90IGZvdW5kLicsXG5cdC8vIFN1bW1hcmllczpcblx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBBZGRpbmcgW1tDYXRlZ29yeTokMV1dJyxcblx0J2NhdC1hLWxvdC1zdW1tYXJ5LWNvcHknOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXTogQ29weWluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXSB0byBbW0NhdGVnb3J5OiQyXV0nLFxuXHQnY2F0LWEtbG90LXN1bW1hcnktbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBNb3ZpbmcgZnJvbSBbW0NhdGVnb3J5OiQxXV0gdG8gW1tDYXRlZ29yeTokMl1dJyxcblx0J2NhdC1hLWxvdC1zdW1tYXJ5LXJlbW92ZSc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1dOiBSZW1vdmluZyBmcm9tIFtbQ2F0ZWdvcnk6JDFdXScsXG59IHNhdGlzZmllcyBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPjtcblxuY29uc3Qgc2V0TWVzc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdC8qISBDYXQtYS1sb3QgbWVzc2FnZXMgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cblx0aWYgKHdnVXNlckxhbmd1YWdlID09PSAnZW4nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldDx0eXBlb2YgREVGQVVMVF9NRVNTQUdFUz4oe1xuXHRcdFx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0XHRcdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAnJDHlgIvmlofku7blt7Lpgbjmk4cnLFxuXHRcdFx0Ly8gQWN0aW9uc1xuXHRcdFx0J2NhdC1hLWxvdC1jb3B5JzogJ+ikh+ijvScsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmUnOiAn56e75YuVJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkJzogJ+WinuWKoCcsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICflvp7mraTliIbpoZ7np7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ+i8uOWFpeWIhumhnuWQjeeosScsXG5cdFx0XHQnY2F0LWEtbG90LXNlbGVjdCc6ICfpgbjmk4cnLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwnOiAn5YWo6YOoJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZSc6ICfnhKEnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ+aykuaciemBuOaTh+aWh+S7tu+8gScsXG5cdFx0XHQvLyBQcmVmZXJlbmNlc1xuXHRcdFx0J2NhdC1hLWxvdC13YXRjaGxpc3RwcmVmJzogJ+S9v+eUqENhdC1BLUxvdOe3qOi8r+aWh+S7tuaZgueahOebo+imluWIl+ihqOmBuOmghScsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAn6IiH57O757Wx5Y+D5pW46Kit572u55u45ZCMJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAn5LiN6KaB5pu05pS555uj6KaW54uA5oWLJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAn55uj6KaW5L2/55SoQ2F0LUEtTG9057eo6Lyv55qE6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfdW53YXRjaCc6ICflsIfkvb/nlKhDYXQtQS1Mb3Tnt6jovK/nmoTpoIHpnaLlvp7nm6PoppbliJfooajnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1taW5vcnByZWYnOlxuXHRcdFx0XHQn5bCH57eo6Lyv5qiZ6KiY54iy5bCP5L+u5pS577yI6Iul5oKo5Zyo57O757Wx5Y+D5pW46Kit572u5Lit5bey6Kit572u5bCH5omA5pyJ57eo6Lyv5qiZ6KiY54iy5bCP5L+u5pS577yM5q2k6YG46aCF5LiN5pyD5bCN54++5pyJ6KGM54iy6YCy6KGM5pS55YuV77yJJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICflhYHoqLHlsI3kuI3mmK/mlofku7bnmoTpoIHpnaLlkozlrZDliIbpoZ7pgLLooYzliIbpoZ7mk43kvZwnLFxuXHRcdFx0J2NhdC1hLWxvdC1kb2NsZWFudXBwcmVmJzogJ+enu+mZpHt7Q2hlY2sgY2F0ZWdvcmllc3195Lim6YCy6KGM5YW25LuW57Sw56+A5riF55CGJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3ViY2F0Y291bnRwcmVmJzogJ+acgOWkmumhr+ekuueahOWtkOWIhumhnuaVuOmHjycsXG5cdFx0XHQvLyBQcm9ncmVzc1xuXHRcdFx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ+ato+WcqOWKoOi8ieKApuKApicsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRpbmcnOiAn5q2j5Zyo57eo6Lyv6aCB6Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtb2YnOiAn77yM5YWx5pyJJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5JzogJ+S7peS4i+mggemdouW3sui3s+mBju+8jOWboOeIsumggemdouW3sue2k+WcqOWIhumhnuS4re+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtbm90LWZvdW5kJzogJ+S7peS4i+mggemdouW3sui3s+mBju+8jOWboOeIsuaJvuS4jeWIsOePvuacieWIhumhnu+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtc2VydmVyJzogJ+S7peS4i+mggemdoueEoeazlee3qOi8r++8jOWboOeIsumAo+aOpeacjeWLmeWZqOWHuumMr++8micsXG5cdFx0XHQnY2F0LWEtbG90LWFsbC1kb25lJzogJ+WFqOmDqOmggemdouW3suiZleeQhuOAgicsXG5cdFx0XHQnY2F0LWEtbG90LWRvbmUnOiAn5bey5a6M5oiQ77yBJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkZWQtY2F0JzogJ+W3suWKoOWFpeWIhumhnicsXG5cdFx0XHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAn5bey6KSH6KO95Yiw5YiG6aGeJyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZWQtY2F0JzogJ+W3suenu+WLleWIsOWIhumhnicsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ+W3suW+nuWIhumhnuenu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LXJldHVybi10by1wYWdlJzogJ+i/lOWbnuWIsOmggemdoicsXG5cdFx0XHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAn5om+5LiN5Yiw5YiG6aGe44CCJyxcblx0XHRcdC8vIFN1bW1hcmllc1xuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5Yqg5YWl5YiG6aGeW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1jb3B5JzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbpoZ7plpPopIfoo73vvJrlvp5bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhumhnumWk+enu+WLle+8muW+nltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrlvp7liIbpoZ7np7vpmaTvvJpbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldDx0eXBlb2YgREVGQVVMVF9NRVNTQUdFUz4oe1xuXHRcdFx0Ly8gYXMgaW4gMTcgZmlsZXMgc2VsZWN0ZWRcblx0XHRcdCdjYXQtYS1sb3QtZmlsZXMtc2VsZWN0ZWQnOiAn5bey6YCJ5oupJDHkuKrpobXpnaLmiJbmlofku7YnLFxuXHRcdFx0Ly8gQWN0aW9uc1xuXHRcdFx0J2NhdC1hLWxvdC1jb3B5JzogJ+WkjeWIticsXG5cdFx0XHQnY2F0LWEtbG90LW1vdmUnOiAn56e75YqoJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkJzogJ+WinuWKoCcsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZS1mcm9tLWNhdCc6ICfku47mraTliIbnsbvnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1lbnRlci1uYW1lJzogJ+i+k+WFpeWIhuexu+WQjeensCcsXG5cdFx0XHQnY2F0LWEtbG90LXNlbGVjdCc6ICfpgInmi6knLFxuXHRcdFx0J2NhdC1hLWxvdC1hbGwnOiAn5YWo6YOoJyxcblx0XHRcdCdjYXQtYS1sb3Qtbm9uZSc6ICfml6AnLFxuXHRcdFx0J2NhdC1hLWxvdC1ub25lLXNlbGVjdGVkJzogJ+ayoeaciemAieaLqeS7u+S9lemhtemdouaIluaWh+S7tu+8gScsXG5cdFx0XHQvLyBQcmVmZXJlbmNlc1xuXHRcdFx0J2NhdC1hLWxvdC13YXRjaGxpc3RwcmVmJzogJ+S9v+eUqENhdC1hLWxvdOe8lui+keaWh+S7tuaXtueahOebkeinhuWIl+ihqOmAiemhuScsXG5cdFx0XHQnY2F0LWEtbG90LXdhdGNoX3ByZWYnOiAn5LiO57O757uf5Y+C5pWw6K6+572u55u45ZCMJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfbm9jaGFuZ2UnOiAn5LiN6KaB5pu05pS555uR6KeG54q25oCBJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfd2F0Y2gnOiAn55uR6KeG5L2/55SoQ2F0LWEtbG9057yW6L6R55qE6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtd2F0Y2hfdW53YXRjaCc6ICflsIbkvb/nlKhDYXQtYS1sb3TnvJbovpHnmoTpobXpnaLku47nm5Hop4bliJfooajnp7vpmaQnLFxuXHRcdFx0J2NhdC1hLWxvdC1taW5vcnByZWYnOlxuXHRcdFx0XHQn5bCG57yW6L6R5qCH6K6w5Li65bCP5L+u5pS577yI6Iul5oKo5Zyo57O757uf5Y+C5pWw6K6+572u5Lit5bey6K6+572u5bCG5omA5pyJ57yW6L6R5qCH6K6w5Li65bCP5L+u5pS577yM5q2k6YCJ6aG55LiN5Lya5a+5546w5pyJ6KGM5Li66L+b6KGM5pS55Yqo77yJJyxcblx0XHRcdCdjYXQtYS1sb3QtZWRpdHBhZ2VzcHJlZic6ICflhYHorrjlr7nkuI3mmK/mlofku7bnmoTpobXpnaLlkozlrZDliIbnsbvov5vooYzliIbnsbvmk43kvZwnLFxuXHRcdFx0J2NhdC1hLWxvdC1kb2NsZWFudXBwcmVmJzogJ+enu+mZpHt7Q2hlY2sgY2F0ZWdvcmllc3195bm26L+b6KGM5YW25LuW57uG6IqC5riF55CGJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3ViY2F0Y291bnRwcmVmJzogJ+acgOWkmuaYvuekuueahOWtkOWIhuexu+aVsOmHjycsXG5cdFx0XHQvLyBQcm9ncmVzc1xuXHRcdFx0J2NhdC1hLWxvdC1sb2FkaW5nJzogJ+ato+WcqOWKoOi9veKApuKApicsXG5cdFx0XHQnY2F0LWEtbG90LWVkaXRpbmcnOiAn5q2j5Zyo57yW6L6R6aG16Z2iJyxcblx0XHRcdCdjYXQtYS1sb3Qtb2YnOiAn77yM5YWx5pyJJyxcblx0XHRcdCdjYXQtYS1sb3Qtc2tpcHBlZC1hbHJlYWR5JzogJ+S7peS4i+mhtemdouW3sui3s+i/h++8jOWboOS4uumhtemdouW3sue7j+WcqOWIhuexu+S4re+8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtbm90LWZvdW5kJzogJ+S7peS4i+mhtemdouW3sui3s+i/h++8jOWboOS4uuaJvuS4jeWIsOeOsOacieWIhuexu++8micsXG5cdFx0XHQnY2F0LWEtbG90LXNraXBwZWQtc2VydmVyJzogJ+S7peS4i+mhtemdouaXoOazlee8lui+ke+8jOWboOS4uui/nuaOpeacjeWKoeWZqOWHuumUme+8micsXG5cdFx0XHQnY2F0LWEtbG90LWFsbC1kb25lJzogJ+WFqOmDqOmhtemdouW3suWkhOeQhuOAgicsXG5cdFx0XHQnY2F0LWEtbG90LWRvbmUnOiAn5bey5a6M5oiQ77yBJyxcblx0XHRcdCdjYXQtYS1sb3QtYWRkZWQtY2F0JzogJ+W3suWKoOWFpeWIhuexuycsXG5cdFx0XHQnY2F0LWEtbG90LWNvcGllZC1jYXQnOiAn5bey5aSN5Yi25Yiw5YiG57G7Jyxcblx0XHRcdCdjYXQtYS1sb3QtbW92ZWQtY2F0JzogJ+W3suenu+WKqOWIsOWIhuexuycsXG5cdFx0XHQnY2F0LWEtbG90LXJlbW92ZWQtY2F0JzogJ+W3suS7juWIhuexu+enu+mZpCcsXG5cdFx0XHQnY2F0LWEtbG90LXJldHVybi10by1wYWdlJzogJ+i/lOWbnuWIsOmhtemdoicsXG5cdFx0XHQnY2F0LWEtbG90LWNhdC1ub3QtZm91bmQnOiAn5om+5LiN5Yiw5YiG57G744CCJyxcblx0XHRcdC8vIFN1bW1hcmllc1xuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LWFkZCc6ICdbW0hlbHA6Q2F0LWEtbG90fENhdC1hLWxvdF1d77ya5Yqg5YWl5YiG57G7W1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdjYXQtYS1sb3Qtc3VtbWFyeS1jb3B5JzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrliIbnsbvpl7TlpI3liLbvvJrku45bW0NhdGVnb3J5OiQxXV3liLBbW0NhdGVnb3J5OiQyXV0nLFxuXHRcdFx0J2NhdC1hLWxvdC1zdW1tYXJ5LW1vdmUnOiAnW1tIZWxwOkNhdC1hLWxvdHxDYXQtYS1sb3RdXe+8muWIhuexu+mXtOenu+WKqO+8muS7jltbQ2F0ZWdvcnk6JDFdXeWIsFtbQ2F0ZWdvcnk6JDJdXScsXG5cdFx0XHQnY2F0LWEtbG90LXN1bW1hcnktcmVtb3ZlJzogJ1tbSGVscDpDYXQtYS1sb3R8Q2F0LWEtbG90XV3vvJrku47liIbnsbvnp7vpmaTvvJpbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge0RFRkFVTFRfTUVTU0FHRVMsIHNldE1lc3NhZ2VzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1xuXHRDTEFTU19OQU1FLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUixcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQSxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNULFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfTUFSS19DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OUyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTCxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkUsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQUQsXG5cdENMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOSyxcblx0Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQsXG5cdENMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLLFxuXHRDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUsXG5cdENMQVNTX05BTUVfTEFCRUwsXG5cdENMQVNTX05BTUVfTEFCRUxfRE9ORSxcblx0Q0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCxcblx0REVGQVVMVF9TRVRUSU5HLFxuXHRWQVJJQU5UUyxcbn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge0RFRkFVTFRfTUVTU0FHRVMsIHNldE1lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCB0eXBlIHtNZXNzYWdlS2V5LCBTZXR0aW5nfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7Z2V0Qm9keSwgdW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0Q2FjaGVkS2V5c30gZnJvbSAnLi9nZXRDYWNoZWRLZXlzJztcblxuY29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMsIHdnTmFtZXNwYWNlSWRzLCB3Z05hbWVzcGFjZU51bWJlciwgd2dUaXRsZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8qKlxuICogQ2hhbmdlcyBjYXRlZ29yeSBvZiBtdWx0aXBsZSBmaWxlc1xuICovXG5jb25zdCBjYXRBTG90ID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHQvKiEgQ2F0LWEtbG90IHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG5cdGNsYXNzIENBTCB7XG5cdFx0cHVibGljIHN0YXRpYyBpc1NlYXJjaE1vZGUgPSBmYWxzZTtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IE1FU1NBR0VTOiBSZWNvcmQ8TWVzc2FnZUtleSwgc3RyaW5nPiA9IERFRkFVTFRfTUVTU0FHRVM7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TRVRUSU5HOiBTZXR0aW5nID0gREVGQVVMVF9TRVRUSU5HO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQVBJX1RBRzogc3RyaW5nID0gT1BUSU9OUy5hcGlUYWc7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEFSR0VUX05BTUVTUEFDRTogbnVtYmVyID0gT1BUSU9OUy50YXJnZXROYW1lc3BhY2U7XG5cblx0XHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBDVVJSRU5UX0NBVEVHUk9ZOiBzdHJpbmcgPSB3Z1RpdGxlO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgd2dGb3JtYXR0ZWROYW1lc3BhY2VzOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0gd2dGb3JtYXR0ZWROYW1lc3BhY2VzO1xuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHdnTmFtZXNwYWNlSWRzOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0gd2dOYW1lc3BhY2VJZHM7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhcGkgPSBhcGk7XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhbHJlYWR5VGhlcmU6IHN0cmluZ1tdID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgY29ubmVjdGlvbkVycm9yOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIG5vdEZvdW5kOiBzdHJpbmdbXSA9IFtdO1xuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDdXJyZW50ID0gMDtcblx0XHRwcml2YXRlIHN0YXRpYyBjb3VudGVyTmVlZGVkID0gMDtcblxuXHRcdHByaXZhdGUgc3RhdGljIGNvdW50ZXJDYXQgPSAwO1xuXHRcdHByaXZhdGUgc3RhdGljIGN1cnJlbnRDYXRlZ29yeSA9ICcnO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgZGlhbG9nSGVpZ2h0ID0gNDUwO1xuXHRcdHByaXZhdGUgc3RhdGljIGVkaXRUb2tlbiA9ICcnO1xuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsQ2F0TmFtZSA9IHdnRm9ybWF0dGVkTmFtZXNwYWNlc1tDQUwuVEFSR0VUX05BTUVTUEFDRV0gYXMgc3RyaW5nO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcGFyZW50Q2F0czogc3RyaW5nW10gPSBbXTtcblx0XHRwcml2YXRlIHN0YXRpYyBzdWJDYXRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgc2V0dGluZ3M6IE5vbk51bGxhYmxlPHR5cGVvZiB3aW5kb3cuQ2F0QUxvdFByZWZzPiA9IHt9O1xuXHRcdHByaXZhdGUgc3RhdGljIHZhcmlhbnRDYWNoZTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cblx0XHQvLyBSYXRlIGxpbWl0aW5nOiBzZXQgdG8gMTAwMCBtcyBmb3IgfjEgcmVxdWVzdCBwZXIgc2Vjb25kXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVxdWVzdERlbGF5ID0gMTAwMDtcblx0XHRwcml2YXRlIHN0YXRpYyByZXF1ZXN0UXVldWU6IEFycmF5PHtcblx0XHRcdGZuOiAoKSA9PiBQcm9taXNlPHVua25vd24+O1xuXHRcdFx0cmVzb2x2ZTogKHZhbHVlOiB1bmtub3duKSA9PiB2b2lkO1xuXHRcdFx0cmVqZWN0OiAocmVhc29uOiB1bmtub3duKSA9PiB2b2lkO1xuXHRcdH0+ID0gW107XG5cdFx0cHJpdmF0ZSBzdGF0aWMgcHJvY2Vzc2luZ1F1ZXVlID0gZmFsc2U7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbGFzdFN0YXJ0ID0gMDtcblxuXHRcdHByaXZhdGUgc3RhdGljIGVucXVldWVBcGlDYWxsPFQ+KGZuOiAoKSA9PiBUKTogUHJvbWlzZTxBd2FpdGVkPFQ+PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2U8QXdhaXRlZDxUPj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0XHRDQUwucmVxdWVzdFF1ZXVlLnB1c2goe1xuXHRcdFx0XHRcdGZuOiBmbiBhcyB1bmtub3duIGFzICgpID0+IFByb21pc2U8dW5rbm93bj4sXG5cdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSBhcyAodjogdW5rbm93bikgPT4gdm9pZCxcblx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdCBhcyAoZTogdW5rbm93bikgPT4gdm9pZCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmICghQ0FMLnByb2Nlc3NpbmdRdWV1ZSkge1xuXHRcdFx0XHRcdENBTC5wcm9jZXNzaW5nUXVldWUgPSB0cnVlO1xuXHRcdFx0XHRcdHZvaWQgQ0FMLnByb2Nlc3NRdWV1ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBhc3luYyBwcm9jZXNzUXVldWUoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHR3aGlsZSAoQ0FMLnJlcXVlc3RRdWV1ZS5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3Qge2ZuLCByZXNvbHZlLCByZWplY3R9ID0gQ0FMLnJlcXVlc3RRdWV1ZS5zaGlmdCgpITtcblx0XHRcdFx0Y29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblx0XHRcdFx0Y29uc3Qgd2FpdCA9IE1hdGgubWF4KDAsIENBTC5yZXF1ZXN0RGVsYXkgLSAobm93IC0gQ0FMLmxhc3RTdGFydCkpO1xuXHRcdFx0XHRpZiAod2FpdCkge1xuXHRcdFx0XHRcdGF3YWl0IG5ldyBQcm9taXNlKChyKSA9PiBzZXRUaW1lb3V0KHIsIHdhaXQpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRDQUwubGFzdFN0YXJ0ID0gRGF0ZS5ub3coKTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCByZXMgPSBhd2FpdCBmbigpO1xuXHRcdFx0XHRcdHJlc29sdmUocmVzKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdHJlamVjdChlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Q0FMLnByb2Nlc3NpbmdRdWV1ZSA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljICRjb3VudGVyOiBKUXVlcnkgPSAkKCk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgJHByb2dyZXNzRGlhbG9nOiBKUXVlcnkgPSAkKCk7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgJGxhYmVsczogSlF1ZXJ5ID0gJCgpO1xuXHRcdHByaXZhdGUgc3RhdGljICRzZWxlY3RlZExhYmVsczogSlF1ZXJ5ID0gJCgpO1xuXG5cdFx0cHJpdmF0ZSByZWFkb25seSAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD47XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkY29udGFpbmVyOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkZGF0YUNvbnRhaW5lcjogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJG1hcmtDb3VudGVyOiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkcmVzdWx0TGlzdDogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJHNlYXJjaElucHV0OiBKUXVlcnk8SFRNTElucHV0RWxlbWVudD47XG5cdFx0cHJpdmF0ZSByZWFkb25seSAkaGVhZDogSlF1ZXJ5O1xuXHRcdHByaXZhdGUgcmVhZG9ubHkgJGxpbms6IEpRdWVyeTxIVE1MQW5jaG9yRWxlbWVudD47XG5cdFx0cHJpdmF0ZSByZXNpemVDbGVhbnVwPzogKCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xuXG5cdFx0cHVibGljIGNvbnN0cnVjdG9yKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pikge1xuXHRcdFx0aWYgKCFtdy5tZXNzYWdlKCdjYXQtYS1sb3QtbG9hZGluZycpLnBhcnNlKCkpIHtcblx0XHRcdFx0bXcubWVzc2FnZXMuc2V0KENBTC5NRVNTQUdFUyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJGJvZHkgPSAkYm9keTtcblx0XHRcdENBTC5pbml0U2V0dGluZ3MoKTtcblxuXHRcdFx0Y29uc3QgY29udGFpbmVyID0gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17W0NMQVNTX05BTUUsIENMQVNTX05BTUVfQ09OVEFJTkVSLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9NQVJLX0NPVU5URVJ9IC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9DQVRFR09SWV9MSVNUfSAvPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVR9XG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9e0NBTC5tc2coJ2VudGVyLW5hbWUnKX1cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e0NBTC5pc1NlYXJjaE1vZGUgPyAobXcudXRpbC5nZXRQYXJhbVZhbHVlKCdzZWFyY2gnKSA/PyAnJykgOiAnJ31cblx0XHRcdFx0XHRcdFx0XHRvbktleURvd249eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkPEhUTUxJbnB1dEVsZW1lbnQ+KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBjYXQ6IHN0cmluZyA9ICRlbGVtZW50LnZhbCgpPy50cmltKCkgPz8gJyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjYXQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNhdHMoY2F0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFTEVDVElPTlN9PlxuXHRcdFx0XHRcdFx0XHR7W0NBTC5tc2coJ3NlbGVjdCcpLCAnICddfVxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX0FMTH1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUFsbCh0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ2FsbCcpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdHsnIOKAoiAnfVxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkV9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVBbGwoZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbm9uZScpfVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH0+XG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0hFQURfTElOS30+Q2F0LWEtbG90PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKSBhcyBKUXVlcnk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIuYXBwZW5kVG8odGhpcy4kYm9keSk7XG5cblx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQX1gKTtcblx0XHRcdHRoaXMuJG1hcmtDb3VudGVyID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kKGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUn1gKTtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QgPSB0aGlzLiRkYXRhQ29udGFpbmVyLmZpbmQoYC4ke0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVH1gKTtcblx0XHRcdHRoaXMuJHNlYXJjaElucHV0ID0gdGhpcy4kZGF0YUNvbnRhaW5lci5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KFxuXHRcdFx0XHRgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUfWBcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMuJGhlYWQgPSB0aGlzLiRjb250YWluZXIuZmluZChgLiR7Q0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRH1gKTtcblx0XHRcdHRoaXMuJGxpbmsgPSB0aGlzLiRoZWFkLmZpbmQ8SFRNTEFuY2hvckVsZW1lbnQ+KGAuJHtDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTkt9YCk7XG5cdFx0fVxuXG5cdFx0cHVibGljIGJ1aWxkRWxlbWVudHMoKTogdm9pZCB7XG5cdFx0XHRjb25zdCByZWdleENhdDogUmVnRXhwID0gbmV3IFJlZ0V4cChgXlxcXFxzKiR7Q0FMLmxvY2FsaXplZFJlZ2V4KENBTC5UQVJHRVRfTkFNRVNQQUNFLCAnQ2F0ZWdvcnknKX06YCwgJycpO1xuXHRcdFx0bGV0IGlzQ29tcG9zaXRpb25TdGFydDogYm9vbGVhbjtcblx0XHRcdGxldCBhdXRvY29tcGxldGVSZXF1ZXN0ID0gMDtcblx0XHRcdGxldCBzZWxlY3RlZFN1Z2dlc3Rpb24gPSAtMTtcblx0XHRcdGNvbnN0ICRzdWdnZXN0aW9ucyA9ICQoJzx1bD4nKS5hZGRDbGFzcyhcblx0XHRcdFx0YCR7Q0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUFSQ0hfSU5QVVRfQ09OVEFJTkVSX0lOUFVUfS1zdWdnZXN0aW9uc2Bcblx0XHRcdCk7XG5cdFx0XHQkc3VnZ2VzdGlvbnMuaGlkZSgpLmFwcGVuZFRvKHRoaXMuJGNvbnRhaW5lcik7XG5cdFx0XHRjb25zdCBoaWRlU3VnZ2VzdGlvbnMgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHNlbGVjdGVkU3VnZ2VzdGlvbiA9IC0xO1xuXHRcdFx0XHQkc3VnZ2VzdGlvbnMuZW1wdHkoKS5oaWRlKCk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3Qgc2VsZWN0U3VnZ2VzdGlvbiA9IChjYXRlZ29yeTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdHRoaXMuJHNlYXJjaElucHV0LnZhbChjYXRlZ29yeSkudHJpZ2dlcignZm9jdXMnKTtcblx0XHRcdFx0aGlkZVN1Z2dlc3Rpb25zKCk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3Qgc2hvd1N1Z2dlc3Rpb25zID0gKGNhdGVnb3JpZXM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG5cdFx0XHRcdHNlbGVjdGVkU3VnZ2VzdGlvbiA9IC0xO1xuXHRcdFx0XHQkc3VnZ2VzdGlvbnMuZW1wdHkoKTtcblx0XHRcdFx0Zm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0JCgnPGxpPicpXG5cdFx0XHRcdFx0XHQudGV4dChjYXRlZ29yeSlcblx0XHRcdFx0XHRcdC5vbignbW91c2Vkb3duJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNlbGVjdFN1Z2dlc3Rpb24oY2F0ZWdvcnkpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5hcHBlbmRUbygkc3VnZ2VzdGlvbnMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjYXRlZ29yaWVzLmxlbmd0aCkge1xuXHRcdFx0XHRcdCRzdWdnZXN0aW9ucy5zaG93KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aGlkZVN1Z2dlc3Rpb25zKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdjb21wb3NpdGlvbnN0YXJ0JywgKCkgPT4ge1xuXHRcdFx0XHRpc0NvbXBvc2l0aW9uU3RhcnQgPSB0cnVlO1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdjb21wb3NpdGlvbmVuZCcsICgpID0+IHtcblx0XHRcdFx0aXNDb21wb3NpdGlvblN0YXJ0ID0gZmFsc2U7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kc2VhcmNoSW5wdXQub24oJ2lucHV0IGtleXVwJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGlmIChpc0NvbXBvc2l0aW9uU3RhcnQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3Qge2N1cnJlbnRUYXJnZXR9ID0gZXZlbnQ7XG5cdFx0XHRcdGNvbnN0IHt2YWx1ZTogb2xkVmFsfSA9IGN1cnJlbnRUYXJnZXQ7XG5cdFx0XHRcdGNvbnN0IG5ld1ZhbDogc3RyaW5nID0gb2xkVmFsLnJlcGxhY2UocmVnZXhDYXQsICcnKTtcblx0XHRcdFx0aWYgKG5ld1ZhbCAhPT0gb2xkVmFsKSB7XG5cdFx0XHRcdFx0Y3VycmVudFRhcmdldC52YWx1ZSA9IG5ld1ZhbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZXZlbnQudHlwZSAhPT0gJ2lucHV0Jykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCByZXF1ZXN0SWQgPSArK2F1dG9jb21wbGV0ZVJlcXVlc3Q7XG5cdFx0XHRcdGNvbnN0IHNlYXJjaCA9IG5ld1ZhbC50cmltKCk7XG5cdFx0XHRcdGlmICghc2VhcmNoKSB7XG5cdFx0XHRcdFx0aGlkZVN1Z2dlc3Rpb25zKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ29wZW5zZWFyY2gnLFxuXHRcdFx0XHRcdFx0bmFtZXNwYWNlOiBDQUwuVEFSR0VUX05BTUVTUEFDRSxcblx0XHRcdFx0XHRcdHJlZGlyZWN0czogJ3Jlc29sdmUnLFxuXHRcdFx0XHRcdFx0c2VhcmNoLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHJlcXVlc3RJZCAhPT0gYXV0b2NvbXBsZXRlUmVxdWVzdCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzaG93U3VnZ2VzdGlvbnMoXG5cdFx0XHRcdFx0XHRcdChyZXN1bHQ/LlsxXSB8fCBbXSlcblx0XHRcdFx0XHRcdFx0XHQubWFwKChpdGVtOiBzdHJpbmcpID0+IGl0ZW0ucmVwbGFjZShyZWdleENhdCwgJycpKVxuXHRcdFx0XHRcdFx0XHRcdC5maWx0ZXIoKGl0ZW06IHN0cmluZykgPT4gaXRlbS5sZW5ndGggPiAwKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdrZXlkb3duJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0IHN1Z2dlc3Rpb25zID0gJHN1Z2dlc3Rpb25zLmNoaWxkcmVuKCk7XG5cdFx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG5cdFx0XHRcdFx0aGlkZVN1Z2dlc3Rpb25zKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyB8fCBldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xuXHRcdFx0XHRcdGlmICghc3VnZ2VzdGlvbnMubGVuZ3RoKSByZXR1cm47XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRzZWxlY3RlZFN1Z2dlc3Rpb24gPVxuXHRcdFx0XHRcdFx0KGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bidcblx0XHRcdFx0XHRcdFx0PyBzZWxlY3RlZFN1Z2dlc3Rpb24gKyAxXG5cdFx0XHRcdFx0XHRcdDogc2VsZWN0ZWRTdWdnZXN0aW9uIC0gMSArIHN1Z2dlc3Rpb25zLmxlbmd0aCkgJSBzdWdnZXN0aW9ucy5sZW5ndGg7XG5cdFx0XHRcdFx0c3VnZ2VzdGlvbnMucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJykuZXEoc2VsZWN0ZWRTdWdnZXN0aW9uKS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcblx0XHRcdFx0fSBlbHNlIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgc2VsZWN0ZWRTdWdnZXN0aW9uID49IDApIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHNlbGVjdFN1Z2dlc3Rpb24oc3VnZ2VzdGlvbnMuZXEoc2VsZWN0ZWRTdWdnZXN0aW9uKS50ZXh0KCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJHNlYXJjaElucHV0Lm9uKCdibHVyJywgKCkgPT4ge1xuXHRcdFx0XHR3aW5kb3cuc2V0VGltZW91dChoaWRlU3VnZ2VzdGlvbnMsIDEwMCk7XG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuJGxpbmsub24oJ2NsaWNrJywgKGV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdCQoZXZlbnQuY3VycmVudFRhcmdldCkudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQpO1xuXHRcdFx0XHR0aGlzLnJ1bigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgaW5pdFNldHRpbmdzKCk6IHZvaWQge1xuXHRcdFx0bGV0IGNhdEFMb3RQcmVmczogdHlwZW9mIENBTC5zZXR0aW5ncyA9IHdpbmRvdy5DYXRBTG90UHJlZnMgPz8ge307XG5cdFx0XHRjb25zdCB0eXBlT2ZDYXRBTG90UHJlZnMgPSB0eXBlb2YgY2F0QUxvdFByZWZzO1xuXHRcdFx0aWYgKCh0eXBlT2ZDYXRBTG90UHJlZnMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGNhdEFMb3RQcmVmcykpIHx8IHR5cGVPZkNhdEFMb3RQcmVmcyAhPT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Y2F0QUxvdFByZWZzID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3Qgc2V0dGluZ0tleSBvZiBPYmplY3Qua2V5cyhDQUwuREVGQVVMVF9TRVRUSU5HKSBhcyAoa2V5b2YgU2V0dGluZylbXSkge1xuXHRcdFx0XHRjb25zdCBzZXR0aW5nID0gQ0FMLkRFRkFVTFRfU0VUVElOR1tzZXR0aW5nS2V5XTtcblxuXHRcdFx0XHRDQUwuc2V0dGluZ3Nbc2V0dGluZ0tleV0gPSBjYXRBTG90UHJlZnNbc2V0dGluZ0tleV0gPz8gc2V0dGluZy5kZWZhdWx0O1xuXG5cdFx0XHRcdGlmICghc2V0dGluZy5zZWxlY3RfaTE4bikge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2V0dGluZy5zZWxlY3QgPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBtZXNzYWdlS2V5IG9mIE9iamVjdC5rZXlzKHNldHRpbmcuc2VsZWN0X2kxOG4pKSB7XG5cdFx0XHRcdFx0Y29uc3QgbWVzc2FnZTogc3RyaW5nID0gc2V0dGluZy5zZWxlY3RfaTE4blttZXNzYWdlS2V5XSBhcyBrZXlvZiB0eXBlb2Ygc2V0dGluZy5zZWxlY3RfaTE4bjtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0c2V0dGluZy5zZWxlY3RbQ0FMLm1zZyhtZXNzYWdlS2V5IGFzIG5ldmVyKV0gPSBtZXNzYWdlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgbXNnKGtleTogTWVzc2FnZUtleSBleHRlbmRzIGBjYXQtYS1sb3QtJHtpbmZlciBQfWAgPyBQIDogbmV2ZXIsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcblx0XHRcdGNvbnN0IGZ1bGxLZXk6IHN0cmluZyA9IGBjYXQtYS1sb3QtJHtrZXl9YDtcblx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGZ1bGxLZXksIC4uLmFyZ3MpLnBhcnNlKCkgOiBtdy5tZXNzYWdlKGZ1bGxLZXkpLnBsYWluKCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgc3RhdGljIGxvY2FsaXplZFJlZ2V4KG5hbWVzcGFjZU51bWJlcjogbnVtYmVyLCBmYWxsYmFjazogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdC8vIENvcGllZCBmcm9tIEhvdENhdCwgdGhhbmtzIEx1cG8uXG5cdFx0XHRjb25zdCB3aWtpVGV4dEJsYW5rOiBzdHJpbmcgPSBTdHJpbmcucmF3YFtcXHQgX1xceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMF0rYDtcblx0XHRcdGNvbnN0IHdpa2lUZXh0QmxhbmtSRTogUmVnRXhwID0gbmV3IFJlZ0V4cCh3aWtpVGV4dEJsYW5rLCAnZycpO1xuXHRcdFx0Y29uc3QgY3JlYXRlUmVnZXhTdHIgPSAobmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkKTogc3RyaW5nID0+IHtcblx0XHRcdFx0aWYgKCFuYW1lPy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHJlZ2V4TmFtZTogc3RyaW5nID0gJyc7XG5cdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29uc3QgaW5pdGlhbDogc3RyaW5nID0gbmFtZS5zbGljZShpLCBpICsgMSk7XG5cdFx0XHRcdFx0Y29uc3QgbGw6IHN0cmluZyA9IGluaXRpYWwudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRjb25zdCB1bDogc3RyaW5nID0gaW5pdGlhbC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRcdHJlZ2V4TmFtZSArPSBsbCA9PT0gdWwgPyBpbml0aWFsIDogYFske2xsfSR7dWx9XWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlZ2V4TmFtZS5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csIFN0cmluZy5yYXdgXFwkMWApLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKTtcblx0XHRcdH07XG5cdFx0XHRmYWxsYmFjayA9IGZhbGxiYWNrLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRjb25zdCBjYW5vbmljYWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IENBTC53Z0Zvcm1hdHRlZE5hbWVzcGFjZXNbbmFtZXNwYWNlTnVtYmVyXT8udG9Mb3dlckNhc2UoKTtcblx0XHRcdGxldCByZWdleFN0cmluZzogc3RyaW5nID0gY3JlYXRlUmVnZXhTdHIoY2Fub25pY2FsKTtcblx0XHRcdGlmIChmYWxsYmFjayAmJiBjYW5vbmljYWwgIT09IGZhbGxiYWNrKSB7XG5cdFx0XHRcdHJlZ2V4U3RyaW5nICs9IGB8JHtjcmVhdGVSZWdleFN0cihmYWxsYmFjayl9YDtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3QgY2F0TmFtZSBvZiBPYmplY3Qua2V5cyhDQUwud2dOYW1lc3BhY2VJZHMpKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRjYXROYW1lLnRvTG93ZXJDYXNlKCkgIT09IGNhbm9uaWNhbCAmJlxuXHRcdFx0XHRcdGNhdE5hbWUudG9Mb3dlckNhc2UoKSAhPT0gZmFsbGJhY2sgJiZcblx0XHRcdFx0XHRDQUwud2dOYW1lc3BhY2VJZHNbY2F0TmFtZV0gPT09IG5hbWVzcGFjZU51bWJlclxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZWdleFN0cmluZyArPSBgfCR7Y3JlYXRlUmVnZXhTdHIoY2F0TmFtZSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGAoPzoke3JlZ2V4U3RyaW5nfSlgO1xuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIoKTogdm9pZCB7XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzID0gQ0FMLiRsYWJlbHMuZmlsdGVyKGAuJHtDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEfWApO1xuXHRcdFx0dGhpcy4kbWFya0NvdW50ZXIuc2hvdygpLmh0bWwoQ0FMLm1zZygnZmlsZXMtc2VsZWN0ZWQnLCBDQUwuJHNlbGVjdGVkTGFiZWxzLmxlbmd0aC50b1N0cmluZygpKSk7XG5cdFx0fVxuXHRcdHByaXZhdGUgdG9nZ2xlQWxsKHNlbGVjdDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0Q0FMLiRsYWJlbHMudG9nZ2xlQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCwgc2VsZWN0KTtcblx0XHRcdHRoaXMudXBkYXRlU2VsZWN0aW9uQ291bnRlcigpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBzdGF0aWMgYXN5bmMgZmluZEFsbFZhcmlhbnRzKGNhdGVnb3J5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG5cdFx0XHRpZiAoQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0gIT09IHVuZGVmaW5lZCAmJiBBcnJheS5pc0FycmF5KENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldKSkge1xuXHRcdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV07XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIGNhdGVnb3J5KSAhPT0gdW5kZWZpbmVkICYmXG5cdFx0XHRcdEFycmF5LmlzQXJyYXkobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgY2F0ZWdvcnkpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdENBTC52YXJpYW50Q2FjaGVbY2F0ZWdvcnldID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgY2F0ZWdvcnkpIGFzIHN0cmluZ1tdO1xuXHRcdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV07XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtjYXRlZ29yeV07XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRleHQ6IGA8dWwgaWQ9XCJjYWwtdmFyaWFudHNcIj5cblx0PGxpIGlkPVwiY2FsLXpoXCI+LXt6aHwke2NhdGVnb3J5fX0tPC9saT5cblx0PGxpIGlkPVwiY2FsLXpoLWhhbnNcIj4te3poLWhhbnN8JHtjYXRlZ29yeX19LTwvbGk+XG5cdDxsaSBpZD1cImNhbC16aC1oYW50XCI+LXt6aC1oYW50fCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtY25cIj4te3poLWNufCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtaGtcIj4te3poLWhrfCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtbW9cIj4te3poLW1vfCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtbXlcIj4te3poLW15fCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtc2dcIj4te3poLXNnfCR7Y2F0ZWdvcnl9fS08L2xpPlxuXHQ8bGkgaWQ9XCJjYWwtemgtdHdcIj4te3poLXR3fCR7Y2F0ZWdvcnl9fS08L2xpPlxuPC91bD5gLFxuXHRcdFx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdFx0XHR2YXJpYW50OiAnemgnLFxuXHRcdFx0fTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBDQUwuZW5xdWV1ZUFwaUNhbGwoKCkgPT4gQ0FMLmFwaS5nZXQocGFyYW1zKSk7XG5cdFx0XHRcdGNvbnN0IHt0ZXh0fSA9IHBhcnNlO1xuXHRcdFx0XHRjb25zdCBwYXJzZWQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHRleHQsICd0ZXh0L2h0bWwnKTtcblx0XHRcdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFyaWFudE5vZGUgPSBwYXJzZWQucXVlcnlTZWxlY3RvcihgI2NhbC0ke3ZhcmlhbnR9YCk7XG5cdFx0XHRcdFx0aWYgKHZhcmlhbnROb2RlKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRzW3Jlc3VsdHMubGVuZ3RoXSA9IHZhcmlhbnROb2RlLnRleHRDb250ZW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0Ly8gRGUtZHVwbGljYXRlXG5cdFx0XHRDQUwudmFyaWFudENhY2hlW2NhdGVnb3J5XSA9IHVuaXF1ZUFycmF5KHJlc3VsdHMpOyAvLyBSZXBsYWNlIFNldCB3aXRoIHVuaXF1ZUFycmF5LCBhdm9pZGluZyBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyBjYXRlZ29yeSwgQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV0sIDYwICogNjAgKiAyNCk7IC8vIDEgZGF5XG5cdFx0XHRyZXR1cm4gQ0FMLnZhcmlhbnRDYWNoZVtjYXRlZ29yeV07XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgYXN5bmMgcmVnZXhCdWlsZGVyKGNhdGVnb3J5OiBzdHJpbmcpOiBQcm9taXNlPFJlZ0V4cD4ge1xuXHRcdFx0Ly8gQnVpbGQgYSByZWdleHAgc3RyaW5nIGZvciBtYXRjaGluZyB0aGUgZ2l2ZW4gY2F0ZWdvcnk6XG5cdFx0XHRjb25zdCBjYXROYW1lOiBzdHJpbmcgPSBDQUwubG9jYWxpemVkUmVnZXgoQ0FMLlRBUkdFVF9OQU1FU1BBQ0UsICdDYXRlZ29yeScpO1xuXHRcdFx0Ly8gdHJpbSBsZWFkaW5nL3RyYWlsaW5nIHdoaXRlc3BhY2UgYW5kIHVuZGVyc2NvcmVzXG5cdFx0XHRjYXRlZ29yeSA9IGNhdGVnb3J5LnJlcGxhY2UoL15bXFxzX10rLywgJycpLnJlcGxhY2UoL1tcXHNfXSskLywgJycpO1xuXHRcdFx0Ly8gRmluZCBhbGwgdmFyaWFudHNcblx0XHRcdGNvbnN0IHZhcmlhbnRzOiBzdHJpbmdbXSA9IGF3YWl0IENBTC5maW5kQWxsVmFyaWFudHMoY2F0ZWdvcnkpO1xuXHRcdFx0Ly8gZXNjYXBlIHJlZ2V4cCBtZXRhY2hhcmFjdGVycyAoPSBhbnkgQVNDSUkgcHVuY3R1YXRpb24gZXhjZXB0IF8pXG5cdFx0XHRjb25zdCB2YXJpYW50UmVnRXhwczogc3RyaW5nW10gPSBbXTtcblx0XHRcdGZvciAobGV0IHZhcmlhbnQgb2YgdmFyaWFudHMpIHtcblx0XHRcdFx0dmFyaWFudCA9IG13LnV0aWwuZXNjYXBlUmVnRXhwKHZhcmlhbnQpO1xuXHRcdFx0XHQvLyBhbnkgc2VxdWVuY2Ugb2Ygc3BhY2VzIGFuZCB1bmRlcnNjb3JlcyBzaG91bGQgbWF0Y2ggYW55IG90aGVyXG5cdFx0XHRcdHZhcmlhbnQgPSB2YXJpYW50LnJlcGxhY2UoL1tcXHNfXSsvZywgU3RyaW5nLnJhd2BbXFxzX10rYCk7XG5cdFx0XHRcdC8vIE1ha2UgdGhlIGZpcnN0IGNoYXJhY3RlciBjYXNlLWluc2Vuc2l0aXZlOlxuXHRcdFx0XHRjb25zdCBmaXJzdDogc3RyaW5nID0gdmFyaWFudC5zbGljZSgwLCAxKTtcblx0XHRcdFx0aWYgKGZpcnN0LnRvVXBwZXJDYXNlKCkgIT09IGZpcnN0LnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdFx0XHR2YXJpYW50ID0gYFske2ZpcnN0LnRvVXBwZXJDYXNlKCl9JHtmaXJzdC50b0xvd2VyQ2FzZSgpfV0ke3ZhcmlhbnQuc2xpY2UoMSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXJpYW50UmVnRXhwc1t2YXJpYW50UmVnRXhwcy5sZW5ndGhdID0gdmFyaWFudDtcblx0XHRcdH1cblx0XHRcdC8vIENvbXBpbGUgaXQgaW50byBhIFJlZ0V4cCB0aGF0IG1hdGNoZXMgTWVkaWFXaWtpIGNhdGVnb3J5IHN5bnRheCAoeWVhaCwgaXQgbG9va3MgdWdseSk6XG5cdFx0XHQvLyBYWFg6IHRoZSBmaXJzdCBjYXB0dXJpbmcgcGFyZW5zIGFyZSBhc3N1bWVkIHRvIG1hdGNoIHRoZSBzb3J0a2V5LCBpZiBwcmVzZW50LCBpbmNsdWRpbmcgdGhlIHwgYnV0IGV4Y2x1ZGluZyB0aGUgXV1cblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcW1tcXFxcc19dKiR7Y2F0TmFtZX1bXFxcXHNfXSo6W1xcXFxzX10qKD86JHt2YXJpYW50UmVnRXhwcy5qb2luKFxuXHRcdFx0XHRcdCd8J1xuXHRcdFx0XHQpfSlbXFxcXHNfXSooXFxcXHxbXlxcXFxdXSooPzpcXFxcXVteXFxcXF1dKykqKT9cXFxcXVxcXFxdYCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGFzeW5jIGRvQVBJQ2FsbEFzeW5jKF9wYXJhbXM6IE9taXQ8QXBpRWRpdFBhZ2VQYXJhbXMsICdmb3JtYXQnPik6IFByb21pc2U8dW5rbm93bj4ge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHQuLi5fcGFyYW1zLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0fSBhcyB0eXBlb2YgX3BhcmFtcyAmIHtcblx0XHRcdFx0Zm9ybWF0OiAnanNvbic7XG5cdFx0XHRcdHRpdGxlPzogc3RyaW5nO1xuXHRcdFx0fTtcblx0XHRcdGxldCByZXRyeUNvdW50OiBudW1iZXIgPSAwO1xuXHRcdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAocGFyYW1zWydhY3Rpb24nXSA9PT0gJ3F1ZXJ5Jykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGF3YWl0IENBTC5lbnF1ZXVlQXBpQ2FsbCgoKSA9PiBDQUwuYXBpLmdldChwYXJhbXMpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGF3YWl0IENBTC5lbnF1ZXVlQXBpQ2FsbCgoKSA9PiBDQUwuYXBpLnBvc3QocGFyYW1zKSk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0bXcubG9nLmVycm9yKCdbQ2F0LWEtbG90XSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdFx0XHRpZiAocmV0cnlDb3VudCA8IDQpIHtcblx0XHRcdFx0XHRcdHJldHJ5Q291bnQrKztcblx0XHRcdFx0XHRcdGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDMwMCkpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBkb0FQSUNhbGwoXG5cdFx0XHRfcGFyYW1zOiBPbWl0PEFwaUVkaXRQYWdlUGFyYW1zLCAnZm9ybWF0Jz4sXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdFx0Y2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHZvaWRcblx0XHQpIHtcblx0XHRcdENBTC5kb0FQSUNhbGxBc3luYyhfcGFyYW1zKVxuXHRcdFx0XHQudGhlbihjYWxsYmFjaylcblx0XHRcdFx0LmNhdGNoKChlcnJvcikgPT4ge1xuXHRcdFx0XHRcdG13LmxvZy5lcnJvcignW0NhdC1hLWxvdF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0XHRcdFx0Y29uc3QgcGFyYW1zID0gX3BhcmFtcyBhcyB0eXBlb2YgX3BhcmFtcyAmIHtcblx0XHRcdFx0XHRcdHRpdGxlPzogc3RyaW5nO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0aWYgKHBhcmFtcy50aXRsZSkge1xuXHRcdFx0XHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvcltDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aF0gPSBwYXJhbXMudGl0bGU7XG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIG1hcmtBc0RvbmUoXG5cdFx0XHQkbWFya2VkTGFiZWw6IEpRdWVyeSxcblx0XHRcdHRhcmdldENhdGVnb3J5OiBzdHJpbmcsXG5cdFx0XHRtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJyB8ICdyZW1vdmUnXG5cdFx0KTogdm9pZCB7XG5cdFx0XHQkbWFya2VkTGFiZWwuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9ET05FKTtcblxuXHRcdFx0c3dpdGNoIChtb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2FkZCc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnYWRkZWQtY2F0JywgdGFyZ2V0Q2F0ZWdvcnkpfVxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY29weSc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnY29waWVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ21vdmUnOlxuXHRcdFx0XHRcdCRtYXJrZWRMYWJlbC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0e0NBTC5tc2coJ21vdmVkLWNhdCcsIHRhcmdldENhdGVnb3J5KX1cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JlbW92ZSc6XG5cdFx0XHRcdFx0JG1hcmtlZExhYmVsLmFwcGVuZChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygncmVtb3ZlZC1jYXQnLCB0YXJnZXRDYXRlZ29yeSl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIHN0YXRpYyBkb0NsZWFudXAodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRcdHJldHVybiBDQUwuc2V0dGluZ3MuZG9jbGVhbnVwID8gdGV4dC5yZXBsYWNlKC97e1xccypbQ2NdaGVjayBjYXRlZ29yaWVzXFxzKihcXHw/Lio/KX19LywgJycpIDogdGV4dDtcblx0XHR9IC8vIFJlbW92ZSB7e1VuY2F0ZWdvcml6ZWR9fSAoYWxzbyB3aXRoIGNvbW1lbnQpLiBObyBuZWVkIHRvIHJlcGxhY2UgaXQgd2l0aCBhbnl0aGluZ1xuXHRcdHByaXZhdGUgc3RhdGljIHJlbW92ZVVuY2F0KHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG5cdFx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKC9cXHtcXHtcXHMqW1V1XW5jYXRlZ29yaXplZFxccyooXFx8Py4qPylcXH1cXH0vLCAnJyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZGlzcGxheVJlc3VsdCgpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKHtcblx0XHRcdFx0Y3Vyc29yOiAnJyxcblx0XHRcdFx0b3ZlcmZsb3c6ICcnLFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLiRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUVfRkVFREJBQ0t9YCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9GRUVEQkFDS19ET05FKTtcblxuXHRcdFx0Y29uc3QgJHBhcmVudDogSlF1ZXJ5ID0gQ0FMLiRjb3VudGVyLnBhcmVudCgpO1xuXHRcdFx0JHBhcmVudC5odG1sKDxoMz57Q0FMLm1zZygnZG9uZScpfTwvaDM+KTtcblx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdHtDQUwubXNnKCdhbGwtZG9uZScpfVxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCk7XG5cblx0XHRcdCRwYXJlbnQuYXBwZW5kKFxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdENBTC4kcHJvZ3Jlc3NEaWFsb2cucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUFsbChmYWxzZSk7XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtDQUwubXNnKCdyZXR1cm4tdG8tcGFnZScpfVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAoQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGgpIHtcblx0XHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxoNT57Q0FMLm1zZygnc2tpcHBlZC1hbHJlYWR5JywgQ0FMLmFscmVhZHlUaGVyZS5sZW5ndGgudG9TdHJpbmcoKSl9PC9oNT5cblx0XHRcdFx0XHRcdHtDQUwuYWxyZWFkeVRoZXJlLnJlZHVjZTwoc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50KVtdPihcblx0XHRcdFx0XHRcdFx0KHByZSwgY3VyLCBpbmRleCkgPT5cblx0XHRcdFx0XHRcdFx0XHRpbmRleCA8IENBTC5hbHJlYWR5VGhlcmUubGVuZ3RoIC0gMSA/IFsuLi5wcmUsIGN1ciwgPGJyIGtleT17aW5kZXh9IC8+XSA6IFsuLi5wcmUsIGN1cl0sXG5cdFx0XHRcdFx0XHRcdFtdXG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKENBTC5ub3RGb3VuZC5sZW5ndGgpIHtcblx0XHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxoNT57Q0FMLm1zZygnc2tpcHBlZC1ub3QtZm91bmQnLCBDQUwubm90Rm91bmQubGVuZ3RoLnRvU3RyaW5nKCkpfTwvaDU+XG5cdFx0XHRcdFx0XHR7Q0FMLm5vdEZvdW5kLnJlZHVjZTwoc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50KVtdPihcblx0XHRcdFx0XHRcdFx0KHByZSwgY3VyLCBpbmRleCkgPT5cblx0XHRcdFx0XHRcdFx0XHRpbmRleCA8IENBTC5ub3RGb3VuZC5sZW5ndGggLSAxID8gWy4uLnByZSwgY3VyLCA8YnIga2V5PXtpbmRleH0gLz5dIDogWy4uLnByZSwgY3VyXSxcblx0XHRcdFx0XHRcdFx0W11cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGgpIHtcblx0XHRcdFx0JHBhcmVudC5hcHBlbmQoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxoNT57Q0FMLm1zZygnc2tpcHBlZC1zZXJ2ZXInLCBDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aC50b1N0cmluZygpKX08L2g1PlxuXHRcdFx0XHRcdFx0e0NBTC5jb25uZWN0aW9uRXJyb3IucmVkdWNlPChzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpW10+KFxuXHRcdFx0XHRcdFx0XHQocHJlLCBjdXIsIGluZGV4KSA9PlxuXHRcdFx0XHRcdFx0XHRcdGluZGV4IDwgQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGggLSAxXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IFsuLi5wcmUsIGN1ciwgPGJyIGtleT17aW5kZXh9IC8+XVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBbLi4ucHJlLCBjdXJdLFxuXHRcdFx0XHRcdFx0XHRbXVxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSB1cGRhdGVDb3VudGVyKCk6IHZvaWQge1xuXHRcdFx0Q0FMLmNvdW50ZXJDdXJyZW50Kys7XG5cdFx0XHRpZiAoQ0FMLmNvdW50ZXJDdXJyZW50ID4gQ0FMLmNvdW50ZXJOZWVkZWQpIHtcblx0XHRcdFx0dGhpcy5kaXNwbGF5UmVzdWx0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRDQUwuJGNvdW50ZXIudGV4dChDQUwuY291bnRlckN1cnJlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIGFzeW5jIGVkaXRDYXRlZ29yaWVzKFxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdHJlc3VsdDogUmVjb3JkPHN0cmluZywgYW55Pixcblx0XHRcdG1hcmtlZExhYmVsOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz5bMF0sXG5cdFx0XHR0YXJnZXRDYXRlZ29yeTogc3RyaW5nLFxuXHRcdFx0bW9kZTogJ2FkZCcgfCAnY29weScgfCAnbW92ZScgfCAncmVtb3ZlJ1xuXHRcdCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdFx0Y29uc3QgW21hcmtlZExhYmVsVGl0bGUsICRtYXJrZWRMYWJlbF0gPSBtYXJrZWRMYWJlbDtcblxuXHRcdFx0aWYgKCFyZXN1bHQ/LlsncXVlcnknXSkge1xuXHRcdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yW0NBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoXSA9IG1hcmtlZExhYmVsVGl0bGU7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGxldCBvcmlnaW5UZXh0OiBzdHJpbmcgPSAnJztcblx0XHRcdGxldCBzdGFydHRpbWVzdGFtcDogbnVtYmVyID0gMDtcblx0XHRcdGxldCB0aW1lc3RhbXA6IG51bWJlciA9IDA7XG5cdFx0XHRDQUwuZWRpdFRva2VuID0gcmVzdWx0WydxdWVyeSddLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRjb25zdCB7cGFnZXN9ID0gcmVzdWx0WydxdWVyeSddO1xuXG5cdFx0XHRjb25zdCBbcGFnZV0gPSBwYWdlcztcblx0XHRcdG9yaWdpblRleHQgPSBwYWdlPy5yZXZpc2lvbnM/LlswXS5zbG90cy5tYWluLmNvbnRlbnQ7XG5cdFx0XHQoe3N0YXJ0dGltZXN0YW1wfSA9IHBhZ2UpO1xuXHRcdFx0W3t0aW1lc3RhbXB9XSA9IHBhZ2UucmV2aXNpb25zO1xuXG5cdFx0XHRjb25zdCBzb3VyY2VjYXQ6IHN0cmluZyA9IENBTC5DVVJSRU5UX0NBVEVHUk9ZO1xuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhhdCBmaWxlIGlzIGFscmVhZHkgaW4gdGhhdCBjYXRlZ29yeVxuXHRcdFx0Y29uc3QgdGFyZ2VSZWdFeHAgPSBhd2FpdCBDQUwucmVnZXhCdWlsZGVyKHRhcmdldENhdGVnb3J5KTtcblx0XHRcdGlmIChtb2RlICE9PSAncmVtb3ZlJyAmJiB0YXJnZVJlZ0V4cC50ZXN0KG9yaWdpblRleHQpICYmIG1vZGUgIT09ICdtb3ZlJykge1xuXHRcdFx0XHRDQUwuYWxyZWFkeVRoZXJlW0NBTC5hbHJlYWR5VGhlcmUubGVuZ3RoXSA9IG1hcmtlZExhYmVsVGl0bGU7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZpeCB0ZXh0XG5cdFx0XHRsZXQgdGV4dDogc3RyaW5nID0gb3JpZ2luVGV4dDtcblx0XHRcdGxldCBzdW1tYXJ5OiBzdHJpbmc7XG5cdFx0XHRjb25zdCBzb3VyY2VDYXRSZWdFeHAgPSBhd2FpdCBDQUwucmVnZXhCdWlsZGVyKHNvdXJjZWNhdCk7XG5cdFx0XHRzd2l0Y2ggKG1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnYWRkJzpcblx0XHRcdFx0XHR0ZXh0ICs9IGBcXG5bWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX1dXVxcbmA7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktYWRkJykucmVwbGFjZSgnJDEnLCB0YXJnZXRDYXRlZ29yeSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NvcHknOlxuXHRcdFx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRzb3VyY2VDYXRSZWdFeHAsXG5cdFx0XHRcdFx0XHRgW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7c291cmNlY2F0fSQxXV1cXG5bWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX0kMV1dYFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IENBTC5tc2coJ3N1bW1hcnktY29weScpLnJlcGxhY2UoJyQxJywgc291cmNlY2F0KS5yZXBsYWNlKCckMicsIHRhcmdldENhdGVnb3J5KTtcblx0XHRcdFx0XHQvLyBJZiBjYXRlZ29yeSBpcyBhZGRlZCB0aHJvdWdoIHRlbXBsYXRlOlxuXHRcdFx0XHRcdGlmIChvcmlnaW5UZXh0ID09PSB0ZXh0KSB7XG5cdFx0XHRcdFx0XHR0ZXh0ICs9IGBcXG5bWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX1dXWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdtb3ZlJzpcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKHNvdXJjZUNhdFJlZ0V4cCwgYFtbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fSQxXV1gKTtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1tb3ZlJykucmVwbGFjZSgnJDEnLCBzb3VyY2VjYXQpLnJlcGxhY2UoJyQyJywgdGFyZ2V0Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdGNvbnN0IGVzY2FwZWRTb3VyY2VDYXQgPSBzb3VyY2VjYXQucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTsgLy8g5bCGIHNvdXJjZWNhdCDovazkuYnkuLrmraPliJnooajovr7lvI/lronlhajnmoTlrZfnrKbkuLJcblx0XHRcdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0bmV3IFJlZ0V4cChcblx0XHRcdFx0XHRcdFx0U3RyaW5nLnJhd2AoXFx7XFx7WyBcXHRdKig/Oua2iOatp+S5ieaooeadv3zmtojmrafkuYl85raI5q2n576pfFtEZF1pc2FtYmlnfFtEZF1pc2FtYnxbRGRdYWJ8W0FhXWltYWkpWyBcXHRdKig/OlxcfFtefHt9XSopKj9cXHxbIFxcdF0qW0NjXWF0WyBcXHRdKj1bIFxcdF0qKSgke2VzY2FwZWRTb3VyY2VDYXR9KShbIFxcdF0qKD89XFx8fFxcfVxcfSkpYCxcblx0XHRcdFx0XHRcdFx0J2cnXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0KF9tYXRjaCwgcHJlZml4OiBzdHJpbmcsIF9jYXRlZ29yeTogc3RyaW5nLCBzdWZmaXg6IHN0cmluZykgPT5cblx0XHRcdFx0XHRcdFx0YCR7cHJlZml4fSR7dGFyZ2V0Q2F0ZWdvcnl9JHtzdWZmaXh9YFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JlbW92ZSc6XG5cdFx0XHRcdFx0dGV4dCA9IHRleHQucmVwbGFjZShzb3VyY2VDYXRSZWdFeHAsICcnKTtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gQ0FMLm1zZygnc3VtbWFyeS1yZW1vdmUnKS5yZXBsYWNlKCckMScsIHNvdXJjZWNhdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdC8vIOWmguaenOayoeacieS/ruaUueS7u+S9leWGheWuuVxuXHRcdFx0aWYgKHRleHQgPT09IG9yaWdpblRleHQpIHtcblx0XHRcdFx0Ly8g5aaC5p6c6K+l6aG16Z2i5piv5qih5p2/77yIVGVtcGxhdGU677yJ5LiU6KaB5omn6KGM55qE5LuO5oyo5o+N5piv56e75Yqo5YiG57G75oiW5aSN5Yi25YiG57G7XG5cdFx0XHRcdGlmIChtYXJrZWRMYWJlbFRpdGxlLnN0YXJ0c1dpdGgoJ1RlbXBsYXRlOicpICYmIChtb2RlID09PSAnbW92ZScgfHwgbW9kZSA9PT0gJ2NvcHknKSkge1xuXHRcdFx0XHRcdC8vIOWwneivleWcqOWFtuaWh+aho+mhte+8iC9kb2PvvInkuK3kv67mlLnliIbnsbtcblx0XHRcdFx0XHRjb25zdCBkb2NUaXRsZSA9IGAke21hcmtlZExhYmVsVGl0bGV9L2RvY2A7XG5cdFx0XHRcdFx0Y29uc3QgZG9jUmVzdWx0ID0gKGF3YWl0IENBTC5kb0FQSUNhbGxBc3luYyh7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0XHRcdHRpdGxlczogZG9jVGl0bGUsXG5cdFx0XHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCddLFxuXHRcdFx0XHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0XHRcdH0pKSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcblxuXHRcdFx0XHRcdC8vIOWmguaenOayoeacieaJvuWIsOivpeaWh+aho+mhtVxuXHRcdFx0XHRcdGlmICghZG9jUmVzdWx0Py5bJ3F1ZXJ5J10pIHtcblx0XHRcdFx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3JbQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGhdID0gZG9jVGl0bGU7XG5cdFx0XHRcdFx0XHR0aGlzLnVwZGF0ZUNvdW50ZXIoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyDojrflj5bmlofmoaPpobXnmoTmlofmnKxcblx0XHRcdFx0XHRjb25zdCBxdWVyeSA9IGRvY1Jlc3VsdD8uWydxdWVyeSddIGFzXG5cdFx0XHRcdFx0XHR8IHtcblx0XHRcdFx0XHRcdFx0XHRwYWdlcz86IEFycmF5PHtcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXJ0dGltZXN0YW1wPzogc3RyaW5nIHwgbnVtYmVyO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV2aXNpb25zPzogQXJyYXk8e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aW1lc3RhbXA/OiBzdHJpbmc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNsb3RzPzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1haW4/OiB7Y29udGVudD86IHN0cmluZ307XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XHR9Pjtcblx0XHRcdFx0XHRcdFx0XHR9Pjtcblx0XHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdFx0fCB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0Ly8g5aaC5p6c5rKh5pyJ5om+5Yiw6K+l5paH5qGj6aG1XG5cdFx0XHRcdFx0aWYgKCFxdWVyeSkge1xuXHRcdFx0XHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvcltDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aF0gPSBkb2NUaXRsZTtcblx0XHRcdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IHtwYWdlczogZG9jUGFnZXMgPSBbXX0gPSBxdWVyeTtcblx0XHRcdFx0XHRjb25zdCBbZG9jUGFnZV0gPSBkb2NQYWdlcztcblx0XHRcdFx0XHRjb25zdCBkb2NPcmlnaW5UZXh0ID0gZG9jUGFnZT8ucmV2aXNpb25zPy5bMF0/LnNsb3RzPy5tYWluPy5jb250ZW50ID8/ICcnO1xuXHRcdFx0XHRcdGxldCBkb2NUZXh0ID0gZG9jT3JpZ2luVGV4dDtcblx0XHRcdFx0XHRjb25zdCBkb2NDYXRSZWdFeHAgPSBhd2FpdCBDQUwucmVnZXhCdWlsZGVyKHNvdXJjZWNhdCk7IC8vIOiOt+WPluaooeadv+WIhuexu+ato+WImVxuXG5cdFx0XHRcdFx0Ly8g5aaC5p6c5qih5p2/5paH5qGj6aG15Lit5a2Y5Zyo6K+l5YiG57G7XG5cdFx0XHRcdFx0aWYgKGRvY1RleHQubWF0Y2goZG9jQ2F0UmVnRXhwKSkge1xuXHRcdFx0XHRcdFx0aWYgKG1vZGUgPT09ICdtb3ZlJykge1xuXHRcdFx0XHRcdFx0XHRkb2NUZXh0ID0gZG9jVGV4dC5yZXBsYWNlKGRvY0NhdFJlZ0V4cCwgYFtbJHtDQUwubG9jYWxDYXROYW1lfToke3RhcmdldENhdGVnb3J5fSQxXV1gKTsgLy8g5pu/5o2i5qih5p2/5paH5qGj6aG15Lit55qE5YiG57G7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG1vZGUgPT09ICdjb3B5Jykge1xuXHRcdFx0XHRcdFx0XHRkb2NUZXh0ID0gZG9jVGV4dC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdGRvY0NhdFJlZ0V4cCxcblx0XHRcdFx0XHRcdFx0XHRgW1ske0NBTC5sb2NhbENhdE5hbWV9OiR7c291cmNlY2F0fSQxXV1cXG5bWyR7Q0FMLmxvY2FsQ2F0TmFtZX06JHt0YXJnZXRDYXRlZ29yeX0kMV1dYFxuXHRcdFx0XHRcdFx0XHQpOyAvLyDlpI3liLbliIbnsbtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyDlpoLmnpzmqKHmnb/mlofmoaPpobXkuK3nmoTmlofmnKzmnInlj5jljJZcblx0XHRcdFx0XHRpZiAoZG9jVGV4dCAhPT0gZG9jT3JpZ2luVGV4dCkge1xuXHRcdFx0XHRcdFx0dGV4dCA9IGRvY1RleHQ7XG5cdFx0XHRcdFx0XHRjb25zdCBkb2NTdGFydHRpbWVzdGFtcCA9IGRvY1BhZ2U/LnN0YXJ0dGltZXN0YW1wID8/IDA7XG5cdFx0XHRcdFx0XHRjb25zdCBkb2NUaW1lc3RhbXAgPSBkb2NQYWdlPy5yZXZpc2lvbnM/LlswXT8udGltZXN0YW1wID8/IDA7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRhd2FpdCBDQUwuZG9BUElDYWxsQXN5bmMoe1xuXHRcdFx0XHRcdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdFx0XHRcdHRva2VuOiBDQUwuZWRpdFRva2VuLFxuXHRcdFx0XHRcdFx0XHRcdHRhZ3M6IENBTC5BUElfVEFHLFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBkb2NUaXRsZSxcblx0XHRcdFx0XHRcdFx0XHRhc3NlcnQ6ICd1c2VyJyxcblx0XHRcdFx0XHRcdFx0XHRib3Q6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0YmFzZXRpbWVzdGFtcDogZG9jVGltZXN0YW1wLFxuXHRcdFx0XHRcdFx0XHRcdHdhdGNobGlzdDogQ0FMLnNldHRpbmdzLndhdGNobGlzdCBhcyBuZXZlcixcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LFxuXHRcdFx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnR0aW1lc3RhbXA6IGRvY1N0YXJ0dGltZXN0YW1wLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7IC8vIOabtOaWsOiuoeaVsOWZqFxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgW0NhdC1hLWxvdF0gU3VjY2Vzc2Z1bGx5IGVkaXRlZCB0ZW1wbGF0ZSBkb2MgcGFnZTogJHtkb2NUaXRsZX1gKTtcblx0XHRcdFx0XHRcdFx0Ly8g5Yi35paw5qih5p2/6aG157yT5a2YXG5cdFx0XHRcdFx0XHRcdGF3YWl0IENBTC5kb0FQSUNhbGxBc3luYyh7XG5cdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiAncHVyZ2UnLFxuXHRcdFx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZXM6IG1hcmtlZExhYmVsVGl0bGUsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgW0NhdC1hLWxvdF0gU3VjY2Vzc2Z1bGx5IHB1cmdlZCB0ZW1wbGF0ZSBkb2MgcGFnZTogJHtkb2NUaXRsZX1gKTtcblx0XHRcdFx0XHRcdFx0Q0FMLm1hcmtBc0RvbmUoJG1hcmtlZExhYmVsLCB0YXJnZXRDYXRlZ29yeSwgbW9kZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvcltDQUwuY29ubmVjdGlvbkVycm9yLmxlbmd0aF0gPSBkb2NUaXRsZTtcblx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Q0FMLm5vdEZvdW5kW0NBTC5ub3RGb3VuZC5sZW5ndGhdID0gbWFya2VkTGFiZWxUaXRsZTtcblx0XHRcdFx0dGhpcy51cGRhdGVDb3VudGVyKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIHVuY2F0IGFmdGVyIHdlIGNoZWNrZWQgd2hldGhlciB3ZSBjaGFuZ2VkIHRoZSB0ZXh0IHN1Y2Nlc3NmdWxseS5cblx0XHRcdC8vIE90aGVyd2lzZSB3ZSBtaWdodCBmYWlsIHRvIGRvIHRoZSBjaGFuZ2VzLCBidXQgc3RpbGwgcmVwbGFjZSB7e3VuY2F0fX1cblx0XHRcdGlmIChtb2RlICE9PSAncmVtb3ZlJykge1xuXHRcdFx0XHR0ZXh0ID0gQ0FMLmRvQ2xlYW51cChDQUwucmVtb3ZlVW5jYXQodGV4dCkpO1xuXHRcdFx0fVxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBDQUwuZG9BUElDYWxsQXN5bmMoe1xuXHRcdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRcdHRva2VuOiBDQUwuZWRpdFRva2VuLFxuXHRcdFx0XHRcdHRhZ3M6IENBTC5BUElfVEFHLFxuXHRcdFx0XHRcdHRpdGxlOiBtYXJrZWRMYWJlbFRpdGxlLFxuXHRcdFx0XHRcdGFzc2VydDogJ3VzZXInLFxuXHRcdFx0XHRcdGJvdDogdHJ1ZSxcblx0XHRcdFx0XHRiYXNldGltZXN0YW1wOiB0aW1lc3RhbXAsXG5cdFx0XHRcdFx0d2F0Y2hsaXN0OiBDQUwuc2V0dGluZ3Mud2F0Y2hsaXN0IGFzIG5ldmVyLFxuXHRcdFx0XHRcdHRleHQsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRzdGFydHRpbWVzdGFtcCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0XHRDQUwubWFya0FzRG9uZSgkbWFya2VkTGFiZWwsIHRhcmdldENhdGVnb3J5LCBtb2RlKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRDQUwuY29ubmVjdGlvbkVycm9yW0NBTC5jb25uZWN0aW9uRXJyb3IubGVuZ3RoXSA9IG1hcmtlZExhYmVsVGl0bGU7XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIGFzeW5jIGdldENvbnRlbnQoXG5cdFx0XHRtYXJrZWRMYWJlbDogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+WzBdLFxuXHRcdFx0dGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyxcblx0XHRcdG1vZGU6ICdhZGQnIHwgJ2NvcHknIHwgJ21vdmUnXG5cdFx0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSAoYXdhaXQgQ0FMLmRvQVBJQ2FsbEFzeW5jKHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0XHRcdHRpdGxlczogbWFya2VkTGFiZWxbMF0sXG5cdFx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJ10sXG5cdFx0XHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0XHR9KSkgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cdFx0XHRcdGF3YWl0IHRoaXMuZWRpdENhdGVnb3JpZXMocmVzdWx0LCBtYXJrZWRMYWJlbCwgdGFyZ2V0Q2F0ZWdvcnksIG1vZGUpO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdENBTC5jb25uZWN0aW9uRXJyb3JbQ0FMLmNvbm5lY3Rpb25FcnJvci5sZW5ndGhdID0gbWFya2VkTGFiZWxbMF07XG5cdFx0XHRcdHRoaXMudXBkYXRlQ291bnRlcigpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIHN0YXRpYyBnZXRUaXRsZUZyb21MaW5rKGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXR1cm4gKGRlY29kZVVSSUNvbXBvbmVudChocmVmID8/ICcnKS5tYXRjaCgvd2lraVxcLyguKz8pKD86Iy4rKT8kLyk/LlsxXSA/PyAnJykucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRNYXJrZWRMYWJlbHMoKTogW3N0cmluZywgSlF1ZXJ5XVtdIHtcblx0XHRcdGNvbnN0IG1hcmtlZExhYmVsczogUmV0dXJuVHlwZTx0eXBlb2YgdGhpcy5nZXRNYXJrZWRMYWJlbHM+ID0gW107XG5cdFx0XHRDQUwuJHNlbGVjdGVkTGFiZWxzID0gQ0FMLiRsYWJlbHMuZmlsdGVyKGAuJHtDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEfWApO1xuXHRcdFx0Q0FMLiRzZWxlY3RlZExhYmVscy5lYWNoKChfaW5kZXgsIGxhYmVsKTogdm9pZCA9PiB7XG5cdFx0XHRcdGNvbnN0ICRsYWJlbDogSlF1ZXJ5ID0gJChsYWJlbCk7XG5cdFx0XHRcdGNvbnN0ICRsYWJlbExpbms6IEpRdWVyeSA9ICRsYWJlbC5maW5kKCdhOm5vdCguQ2F0ZWdvcnlUcmVlVG9nZ2xlKVt0aXRsZV0nKTtcblx0XHRcdFx0Y29uc3QgdGl0bGU6IHN0cmluZyA9XG5cdFx0XHRcdFx0JGxhYmVsTGluay5hdHRyKCd0aXRsZScpPy50cmltKCkgfHxcblx0XHRcdFx0XHRDQUwuZ2V0VGl0bGVGcm9tTGluaygkbGFiZWxMaW5rLmF0dHIoJ2hyZWYnKSkgfHxcblx0XHRcdFx0XHRDQUwuZ2V0VGl0bGVGcm9tTGluaygkbGFiZWwuZmluZCgnYTpub3QoLkNhdGVnb3J5VHJlZVRvZ2dsZSknKS5hdHRyKCdocmVmJykpO1xuXHRcdFx0XHRtYXJrZWRMYWJlbHNbbWFya2VkTGFiZWxzLmxlbmd0aF0gPSBbdGl0bGUsICRsYWJlbF07XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBtYXJrZWRMYWJlbHM7XG5cdFx0fVxuXHRcdHByaXZhdGUgc2hvd1Byb2dyZXNzKCk6IHZvaWQge1xuXHRcdFx0dGhpcy4kYm9keS5jc3Moe1xuXHRcdFx0XHRjdXJzb3I6ICd3YWl0Jyxcblx0XHRcdFx0b3ZlcmZsb3c6ICdoaWRkZW4nLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCAkb3ZlcmxheSA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoYCR7Q0xBU1NfTkFNRX0tb3ZlcmxheWApO1xuXHRcdFx0Y29uc3QgJGRpYWxvZyA9ICQoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0ZFRURCQUNLfSByb2xlPVwic3RhdHVzXCI+XG5cdFx0XHRcdFx0e0NBTC5tc2coJ2VkaXRpbmcnKX1cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e0NMQVNTX05BTUVfQ1VSUkVOVF9DT1VOVEVSfT57Q0FMLmNvdW50ZXJDdXJyZW50fTwvc3Bhbj5cblx0XHRcdFx0XHR7W0NBTC5tc2coJ29mJyksIENBTC5jb3VudGVyTmVlZGVkXX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdFx0JG92ZXJsYXkuYXBwZW5kKCRkaWFsb2cpLmFwcGVuZFRvKHRoaXMuJGJvZHkpO1xuXHRcdFx0Q0FMLiRwcm9ncmVzc0RpYWxvZyA9ICRvdmVybGF5O1xuXHRcdFx0Q0FMLiRjb3VudGVyID0gJGRpYWxvZy5maW5kKGAuJHtDTEFTU19OQU1FX0NVUlJFTlRfQ09VTlRFUn1gKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBhc3luYyBkb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeTogc3RyaW5nLCBtb2RlOiAnYWRkJyB8ICdjb3B5JyB8ICdtb3ZlJyk6IFByb21pc2U8dm9pZD4ge1xuXHRcdFx0Y29uc3QgbWFya2VkTGFiZWxzOiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmdldE1hcmtlZExhYmVscz4gPSB0aGlzLmdldE1hcmtlZExhYmVscygpO1xuXHRcdFx0aWYgKCFtYXJrZWRMYWJlbHMubGVuZ3RoKSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KENBTC5tc2coJ25vbmUtc2VsZWN0ZWQnKSwge1xuXHRcdFx0XHRcdHRhZzogJ2NhdEFMb3QnLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Q0FMLmFscmVhZHlUaGVyZSA9IFtdO1xuXHRcdFx0Q0FMLmNvbm5lY3Rpb25FcnJvciA9IFtdO1xuXHRcdFx0Q0FMLm5vdEZvdW5kID0gW107XG5cdFx0XHRDQUwuY291bnRlckN1cnJlbnQgPSAxO1xuXHRcdFx0Q0FMLmNvdW50ZXJOZWVkZWQgPSBtYXJrZWRMYWJlbHMubGVuZ3RoO1xuXHRcdFx0dGhpcy5zaG93UHJvZ3Jlc3MoKTtcblx0XHRcdGZvciAoY29uc3QgbWFya2VkTGFiZWwgb2YgbWFya2VkTGFiZWxzKSB7XG5cdFx0XHRcdGF3YWl0IHRoaXMuZ2V0Q29udGVudChtYXJrZWRMYWJlbCwgdGFyZ2V0Q2F0ZWdvcnksIG1vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIGFkZEhlcmUodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeSwgJ2FkZCcpO1xuXHRcdH1cblx0XHRwcml2YXRlIGNvcHlIZXJlKHRhcmdldENhdGVnb3J5OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9Tb21ldGhpbmcodGFyZ2V0Q2F0ZWdvcnksICdjb3B5Jyk7XG5cdFx0fVxuXHRcdHByaXZhdGUgbW92ZUhlcmUodGFyZ2V0Q2F0ZWdvcnk6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb1NvbWV0aGluZyh0YXJnZXRDYXRlZ29yeSwgJ21vdmUnKTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBjcmVhdGVDYXRMaW5rcyhzeW1ib2w6IHN0cmluZywgY2F0ZWdvcmllczogc3RyaW5nW10pOiB2b2lkIHtcblx0XHRcdGNhdGVnb3JpZXMuc29ydCgpO1xuXHRcdFx0Zm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0XHRcdGNvbnN0ICR0ciA9ICQoXG5cdFx0XHRcdFx0PHRyIGRhdGFzZXQ9e3tjYXRlZ29yeX19PlxuXHRcdFx0XHRcdFx0PHRkPntzeW1ib2x9PC90ZD5cblx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cygkZWxlbWVudC5jbG9zZXN0KCd0cicpLmRhdGEoJ2NhdGVnb3J5JykgYXMgc3RyaW5nKTtcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e2NhdGVnb3J5fVxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdCk7XG5cdFx0XHRcdC8vIENhbid0IG1vdmUgdG8gc291cmNlIGNhdGVnb3J5XG5cdFx0XHRcdGlmIChjYXRlZ29yeSAhPT0gQ0FMLkNVUlJFTlRfQ0FURUdST1kgJiYgQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRcdCR0ci5hcHBlbmQoXG5cdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5hZGRIZXJlKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnYWRkJyl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIGlmIChjYXRlZ29yeSAhPT0gQ0FMLkNVUlJFTlRfQ0FURUdST1kgJiYgIUNBTC5pc1NlYXJjaE1vZGUpIHtcblx0XHRcdFx0XHQkdHIuYXBwZW5kKFxuXHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT059XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNvcHlIZXJlKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnY29weScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e0NMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9BQ1RJT059XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLm1vdmVIZXJlKCRlbGVtZW50LmNsb3Nlc3QoJ3RyJykuZGF0YSgnY2F0ZWdvcnknKSBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Q0FMLm1zZygnbW92ZScpfVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5maW5kKCd0YWJsZScpLmFwcGVuZCgkdHIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRwcml2YXRlIHNob3dDYXRlZ29yeUxpc3QoKTogdm9pZCB7XG5cdFx0XHR0aGlzLiRib2R5LmNzcygnY3Vyc29yJywgJycpO1xuXHRcdFx0Y29uc3QgY3VycmVudENhdGVnb3JpZXM6IHN0cmluZ1tdID0gW0NBTC5jdXJyZW50Q2F0ZWdvcnldO1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5lbXB0eSgpO1xuXHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5hcHBlbmQoPHRhYmxlIC8+KTtcblx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkScsIENBTC5wYXJlbnRDYXRzKTtcblx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkicsIGN1cnJlbnRDYXRlZ29yaWVzKTtcblx0XHRcdHRoaXMuY3JlYXRlQ2F0TGlua3MoJ+KGkycsIENBTC5zdWJDYXRzKTtcblx0XHRcdC8vIFJlc2V0IHdpZHRoXG5cdFx0XHR0aGlzLiRjb250YWluZXIud2lkdGgoJycpO1xuXHRcdFx0dGhpcy4kY29udGFpbmVyLmhlaWdodCgnJyk7XG5cdFx0XHR0aGlzLiRjb250YWluZXIud2lkdGgoTWF0aC5taW4oKHRoaXMuJGNvbnRhaW5lci53aWR0aCgpID8/IDApICogMS4xICsgMTUsICgkKHdpbmRvdykud2lkdGgoKSA/PyAwKSAtIDEwKSk7XG5cdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmNzcyh7XG5cdFx0XHRcdCdtYXgtaGVpZ2h0JzogYCR7Q0FMLmRpYWxvZ0hlaWdodH1weGAsXG5cdFx0XHRcdGhlaWdodDogJycsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRQYXJlbnRDYXRzKCk6IHZvaWQge1xuXHRcdFx0dGhpcy5kb0FQSUNhbGwoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0dGl0bGVzOiBgQ2F0ZWdvcnk6JHtDQUwuY3VycmVudENhdGVnb3J5fWAsXG5cdFx0XHRcdFx0cHJvcDogJ2NhdGVnb3JpZXMnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQocmVzdWx0KTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Q0FMLnBhcmVudENhdHMgPSBbXTtcblx0XHRcdFx0XHRjb25zdCB7cGFnZXN9ID0gcmVzdWx0LnF1ZXJ5O1xuXHRcdFx0XHRcdGlmIChwYWdlc1swXT8ubWlzc2luZykge1xuXHRcdFx0XHRcdFx0dGhpcy4kYm9keS5jc3MoJ2N1cnNvcicsICcnKTtcblx0XHRcdFx0XHRcdHRoaXMuJHJlc3VsdExpc3QuaHRtbChcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfTk9fRk9VTkR9PlxuXHRcdFx0XHRcdFx0XHRcdHtDQUwubXNnKCdjYXQtbm90LWZvdW5kJyl9XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0aGlzLmNyZWF0ZUNhdExpbmtzKCfihpInLCBbQ0FMLmN1cnJlbnRDYXRlZ29yeV0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsZXQgY2F0ZWdvcmllczoge3RpdGxlOiBzdHJpbmd9W10gPSBbXTtcblx0XHRcdFx0XHRpZiAocGFnZXNbMF0/LmNhdGVnb3JpZXMpIHtcblx0XHRcdFx0XHRcdFt7Y2F0ZWdvcmllc31dID0gcGFnZXM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGNhdFRpdGxlID0gY2F0LnRpdGxlLnJlcGxhY2UoL15bXjpdKzovLCAnJyk7XG5cdFx0XHRcdFx0XHRDQUwucGFyZW50Q2F0c1tDQUwucGFyZW50Q2F0cy5sZW5ndGhdID0gY2F0VGl0bGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdENBTC5jb3VudGVyQ2F0Kys7XG5cdFx0XHRcdFx0aWYgKENBTC5jb3VudGVyQ2F0ID09PSAyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNob3dDYXRlZ29yeUxpc3QoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXHRcdHByaXZhdGUgZ2V0U3ViQ2F0cygpOiB2b2lkIHtcblx0XHRcdHRoaXMuZG9BUElDYWxsKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdGxpc3Q6ICdjYXRlZ29yeW1lbWJlcnMnLFxuXHRcdFx0XHRcdGNtdHlwZTogJ3N1YmNhdCcsXG5cdFx0XHRcdFx0Y21saW1pdDogQ0FMLnNldHRpbmdzLnN1YmNhdGNvdW50IGFzIG5ldmVyLFxuXHRcdFx0XHRcdGNtdGl0bGU6IGBDYXRlZ29yeToke0NBTC5jdXJyZW50Q2F0ZWdvcnl9YCxcblx0XHRcdFx0fSxcblx0XHRcdFx0KHJlc3VsdCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGNhdHM6IHt0aXRsZTogc3RyaW5nfVtdID0gcmVzdWx0Py5xdWVyeT8uY2F0ZWdvcnltZW1iZXJzIHx8IFtdO1xuXHRcdFx0XHRcdENBTC5zdWJDYXRzID0gW107XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBjYXQgb2YgY2F0cykge1xuXHRcdFx0XHRcdFx0Y29uc3QgY2F0VGl0bGUgPSBjYXQudGl0bGUucmVwbGFjZSgvXlteOl0rOi8sICcnKTtcblx0XHRcdFx0XHRcdENBTC5zdWJDYXRzW0NBTC5zdWJDYXRzLmxlbmd0aF0gPSBjYXRUaXRsZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Q0FMLmNvdW50ZXJDYXQrKztcblx0XHRcdFx0XHRpZiAoQ0FMLmNvdW50ZXJDYXQgPT09IDIpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2hvd0NhdGVnb3J5TGlzdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cHJpdmF0ZSBnZXRDYXRlZ29yeUxpc3QoKTogdm9pZCB7XG5cdFx0XHRDQUwuY291bnRlckNhdCA9IDA7XG5cdFx0XHR0aGlzLmdldFBhcmVudENhdHMoKTtcblx0XHRcdHRoaXMuZ2V0U3ViQ2F0cygpO1xuXHRcdH1cblx0XHRwcml2YXRlIHVwZGF0ZUNhdHMoY2F0OiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuJGJvZHkuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xuXHRcdFx0Q0FMLmN1cnJlbnRDYXRlZ29yeSA9IGNhdDtcblx0XHRcdHRoaXMuJHJlc3VsdExpc3QuaHRtbCg8ZGl2PntDQUwubXNnKCdsb2FkaW5nJyl9PC9kaXY+KTtcblx0XHRcdHRoaXMuZ2V0Q2F0ZWdvcnlMaXN0KCk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBmaW5kQWxsTGFiZWxzKCk6IHZvaWQge1xuXHRcdFx0Ly8gSXQncyBwb3NzaWJsZSB0byBhbGxvdyBhbnkga2luZCBvZiBwYWdlcyBhcyB3ZWxsIGJ1dCB3aGF0IGhhcHBlbnMgaWYgeW91IGNsaWNrIG9uIFwic2VsZWN0IGFsbFwiIGFuZCBkb24ndCBleHBlY3QgaXRcblx0XHRcdGlmIChDQUwuaXNTZWFyY2hNb2RlKSB7XG5cdFx0XHRcdENBTC4kbGFiZWxzID0gdGhpcy4kYm9keS5maW5kKCd0YWJsZS5zZWFyY2hSZXN1bHRJbWFnZScpLmZpbmQoJ3RyPnRkJykuZXEoMSk7XG5cdFx0XHRcdGlmIChDQUwuc2V0dGluZ3MuZWRpdHBhZ2VzKSB7XG5cdFx0XHRcdFx0Q0FMLiRsYWJlbHMgPSBDQUwuJGxhYmVscy5hZGQoJ2Rpdi5tdy1zZWFyY2gtcmVzdWx0LWhlYWRpbmcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Q0FMLiRsYWJlbHMgPSB0aGlzLiRib2R5XG5cdFx0XHRcdFx0LmZpbmQoJ2Rpdi5nYWxsZXJ5dGV4dCcpXG5cdFx0XHRcdFx0LmFkZCh0aGlzLiRib2R5LmZpbmQoJ2RpdiNtdy1jYXRlZ29yeS1tZWRpYScpLmZpbmQoJ2xpW2NsYXNzIT1cImdhbGxlcnlib3hcIl0nKSk7XG5cdFx0XHRcdGlmIChDQUwuc2V0dGluZ3MuZWRpdHBhZ2VzKSB7XG5cdFx0XHRcdFx0Y29uc3QgJHBhZ2VzOiBKUXVlcnk8SFRNTExJRWxlbWVudD4gPSB0aGlzLiRib2R5XG5cdFx0XHRcdFx0XHQuZmluZCgnZGl2I213LXBhZ2VzLCBkaXYjbXctc3ViY2F0ZWdvcmllcycpXG5cdFx0XHRcdFx0XHQuZmluZCgnbGknKTtcblx0XHRcdFx0XHRDQUwuJGxhYmVscyA9IENBTC4kbGFiZWxzLmFkZCgkcGFnZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHByaXZhdGUgbWFrZUNsaWNrYWJsZSgpOiB2b2lkIHtcblx0XHRcdHRoaXMuZmluZEFsbExhYmVscygpO1xuXHRcdFx0Q0FMLiRsYWJlbHMuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTCkub25DYXRBTG90U2hpZnRDbGljaygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHRoaXMudXBkYXRlU2VsZWN0aW9uQ291bnRlcigpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBydW4oKTogdm9pZCB7XG5cdFx0XHRpZiAodGhpcy4kbGluay5oYXNDbGFzcyhDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTktfRU5BQkxFRCkpIHtcblx0XHRcdFx0dGhpcy5tYWtlQ2xpY2thYmxlKCk7XG5cdFx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIuc2hvdygpO1xuXHRcdFx0XHR0aGlzLmVuYWJsZVJlc2l6ZSgpO1xuXHRcdFx0XHR0aGlzLiRyZXN1bHRMaXN0LmNzcygnbWF4LWhlaWdodCcsICc0NTBweCcpO1xuXHRcdFx0XHRpZiAoQ0FMLmlzU2VhcmNoTW9kZSkge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cygnUGljdHVyZXMgYW5kIGltYWdlcycpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlQ2F0cyhDQUwuQ1VSUkVOVF9DQVRFR1JPWSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuJGRhdGFDb250YWluZXIuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLnJlc2l6ZUNsZWFudXA/LigpO1xuXHRcdFx0XHR0aGlzLnJlc2l6ZUNsZWFudXAgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdHRoaXMuJGNvbnRhaW5lci5jc3MoJ3dpZHRoJywgJycpO1xuXHRcdFx0XHRDQUwuJGxhYmVscy5vZmYoJ2NsaWNrLmNhdEFMb3QnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRwcml2YXRlIGVuYWJsZVJlc2l6ZSgpOiB2b2lkIHtcblx0XHRcdHRoaXMucmVzaXplQ2xlYW51cD8uKCk7XG5cdFx0XHRjb25zdCAkaGFuZGxlID0gJCgnPGRpdj4nKS5hZGRDbGFzcyhgJHtDTEFTU19OQU1FX0NPTlRBSU5FUn0tcmVzaXplLWhhbmRsZWApLnByZXBlbmRUbyh0aGlzLiRjb250YWluZXIpO1xuXHRcdFx0Y29uc3QgaGFuZGxlID0gJGhhbmRsZVswXTtcblx0XHRcdGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuJGNvbnRhaW5lclswXTtcblx0XHRcdGlmICghaGFuZGxlIHx8ICFjb250YWluZXIpIHJldHVybjtcblx0XHRcdGNvbnN0IG9uUG9pbnRlckRvd24gPSAoZXZlbnQ6IFBvaW50ZXJFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjb25zdCBzdGFydEhlaWdodCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cdFx0XHRcdGNvbnN0IHN0YXJ0WSA9IGV2ZW50LmNsaWVudFk7XG5cdFx0XHRcdGNvbnN0IG9uUG9pbnRlck1vdmUgPSAobW92ZUV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRjb25zdCBoZWlnaHQgPSBNYXRoLm1heCg5MCwgc3RhcnRIZWlnaHQgKyBzdGFydFkgLSBtb3ZlRXZlbnQuY2xpZW50WSk7XG5cdFx0XHRcdFx0dGhpcy4kY29udGFpbmVyLmhlaWdodChoZWlnaHQpO1xuXHRcdFx0XHRcdENBTC5kaWFsb2dIZWlnaHQgPSBoZWlnaHQ7XG5cdFx0XHRcdFx0dGhpcy4kcmVzdWx0TGlzdC5jc3Moe21heEhlaWdodDogYCR7TWF0aC5tYXgoMCwgaGVpZ2h0IC0gMTAwKX1weGAsIHdpZHRoOiAnJ30pO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRjb25zdCBvblBvaW50ZXJVcCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsIG9uUG9pbnRlck1vdmUpO1xuXHRcdFx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIG9uUG9pbnRlclVwKTtcblx0XHRcdFx0fTtcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcm1vdmUnLCBvblBvaW50ZXJNb3ZlKTtcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgb25Qb2ludGVyVXAsIHtvbmNlOiB0cnVlfSk7XG5cdFx0XHR9O1xuXHRcdFx0aGFuZGxlLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25Qb2ludGVyRG93bik7XG5cdFx0XHR0aGlzLnJlc2l6ZUNsZWFudXAgPSAoKSA9PiB7XG5cdFx0XHRcdGhhbmRsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uUG9pbnRlckRvd24pO1xuXHRcdFx0XHQkaGFuZGxlLnJlbW92ZSgpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRpZiAoXG5cdFx0KHdnTmFtZXNwYWNlTnVtYmVyID09PSAtMSAmJiB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ1NlYXJjaCcpIHx8XG5cdFx0d2dOYW1lc3BhY2VOdW1iZXIgPT09IE9QVElPTlMudGFyZ2V0TmFtZXNwYWNlXG5cdCkge1xuXHRcdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gLTEpIHtcblx0XHRcdENBTC5pc1NlYXJjaE1vZGUgPSB0cnVlO1xuXHRcdH1cblx0XHRDQUxbJ3ZhcmlhbnRDYWNoZSddID0gZ2V0Q2FjaGVkS2V5cygpO1xuXHRcdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gT1BUSU9OUy50YXJnZXROYW1lc3BhY2UpIHtcblx0XHRcdGNvbnN0IGNhdGVnb3J5ID0gbXcuY29uZmlnLmdldCgnd2dUaXRsZScpLnJlcGxhY2UoL15DYXRlZ29yeTovLCAnJyk7XG5cdFx0XHRDQUxbJ3ZhcmlhbnRDYWNoZSddW2NhdGVnb3J5XSB8fD0gYXdhaXQgQ0FMLmZpbmRBbGxWYXJpYW50cyhjYXRlZ29yeSk7XG5cdFx0fVxuXHRcdC8qISBDYXQtYS1sb3QgbWVzc2FnZXMgfCBDQy1CWS1TQS00LjAgPGh0dHBzOi8vcXdiay5jYy9IOkNDLUJZLVNBLTQuMD4gKi9cblx0XHRzZXRNZXNzYWdlcygpO1xuXHRcdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdFx0bmV3IENBTCgkYm9keSkuYnVpbGRFbGVtZW50cygpO1xuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2NhdEFMb3R9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQ2F0LWEtbG90LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuXG5jb25zdCBnZXRDYWNoZWRLZXlzID0gKCkgPT4ge1xuXHRjb25zdCB2YXJpYW50Q2FjaGU6IFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPiA9IHt9O1xuXHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhcblx0XHQobXcuc3RvcmFnZSBhcyB1bmtub3duIGFzIFN0b3JhZ2UpWydzdG9yZSddIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPlxuXHQpKSB7XG5cdFx0aWYgKGtleS5zdGFydHNXaXRoKE9QVElPTlMuc3RvcmFnZUtleSkgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdGNvbnN0IGNhY2hlS2V5ID0ga2V5LnJlcGxhY2UoT1BUSU9OUy5zdG9yYWdlS2V5LCAnJyk7XG5cdFx0XHR2YXJpYW50Q2FjaGVbY2FjaGVLZXldID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2YXJpYW50Q2FjaGU7XG59O1xuXG5leHBvcnQge2dldENhY2hlZEtleXN9O1xuIiwgImltcG9ydCB7Q0xBU1NfTkFNRV9MQUJFTCwgQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVELCBDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEfSBmcm9tICcuL2NvbnN0YW50JztcblxudHlwZSBPbkNhdEFMb3RTaGlmdENsaWNrID0gKHRoaXM6IEpRdWVyeSwgY2FsbGJhY2s6ICgpID0+IHVua25vd24pID0+IEpRdWVyeTtcbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIEpRdWVyeSB7XG5cdFx0b25DYXRBTG90U2hpZnRDbGljazogT25DYXRBTG90U2hpZnRDbGljaztcblx0fVxufVxuXG5jb25zdCBleHRlbmRKUXVlcnlQcm90b3R5cGUgPSAoKTogdm9pZCA9PiB7XG5cdCQuZm4uZXh0ZW5kKHtcblx0XHRvbkNhdEFMb3RTaGlmdENsaWNrOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGxldCBwcmV2Q2hlY2tib3g6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblxuXHRcdFx0Ly8gV2hlbiBvdXIgYm94ZXMgYXJlIGNsaWNrZWQuLlxuXHRcdFx0dGhpcy5vbignY2xpY2suY2F0QUxvdCcsIChldmVudDogSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdC8vIFByZXZlbnQgZm9sbG93aW5nIHRoZSBsaW5rIGFuZCB0ZXh0IHNlbGVjdGlvblxuXHRcdFx0XHRpZiAoIWV2ZW50LmN0cmxLZXkpIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSGlnaGxpZ2h0IGxhc3Qgc2VsZWN0ZWRcblx0XHRcdFx0dGhpcy5wYXJlbnRzKCdib2R5Jylcblx0XHRcdFx0XHQuZmluZChgLiR7Q0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEfWApXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKENMQVNTX05BTUVfTEFCRUxfTEFTVF9TRUxFQ1RFRCk7XG5cblx0XHRcdFx0bGV0ICR0aGlzQ29udHJvbCA9ICQoZXZlbnQudGFyZ2V0KSBhcyBKUXVlcnk7XG5cdFx0XHRcdGlmICghJHRoaXNDb250cm9sLmhhc0NsYXNzKENMQVNTX05BTUVfTEFCRUwpKSB7XG5cdFx0XHRcdFx0JHRoaXNDb250cm9sID0gJHRoaXNDb250cm9sLnBhcmVudHMoYC4ke0NMQVNTX05BTUVfTEFCRUx9YCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQkdGhpc0NvbnRyb2wuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEKS50b2dnbGVDbGFzcyhDTEFTU19OQU1FX0xBQkVMX1NFTEVDVEVEKTtcblxuXHRcdFx0XHQvLyBBbmQgb25lIGhhcyBiZWVuIGNsaWNrZWQgYmVmb3JlLi4uXG5cdFx0XHRcdGlmIChwcmV2Q2hlY2tib3ggJiYgZXZlbnQuc2hpZnRLZXkpIHtcblx0XHRcdFx0XHRjb25zdCBtZXRob2Q6ICdhZGRDbGFzcycgfCAncmVtb3ZlQ2xhc3MnID0gJHRoaXNDb250cm9sLmhhc0NsYXNzKENMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQpXG5cdFx0XHRcdFx0XHQ/ICdhZGRDbGFzcydcblx0XHRcdFx0XHRcdDogJ3JlbW92ZUNsYXNzJztcblx0XHRcdFx0XHQvLyBDaGVjayBvciB1bmNoZWNrIHRoaXMgb25lIGFuZCBhbGwgaW4tYmV0d2VlbiBjaGVja2JveGVzXG5cdFx0XHRcdFx0dGhpcy5zbGljZShcblx0XHRcdFx0XHRcdE1hdGgubWluKHRoaXMuaW5kZXgocHJldkNoZWNrYm94KSwgdGhpcy5pbmRleCgkdGhpc0NvbnRyb2wpKSxcblx0XHRcdFx0XHRcdE1hdGgubWF4KHRoaXMuaW5kZXgocHJldkNoZWNrYm94KSwgdGhpcy5pbmRleCgkdGhpc0NvbnRyb2wpKSArIDFcblx0XHRcdFx0XHQpW21ldGhvZF0oQ0xBU1NfTkFNRV9MQUJFTF9TRUxFQ1RFRCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gRWl0aGVyIHdheSwgdXBkYXRlIHRoZSBwcmV2Q2hlY2tib3ggdmFyaWFibGUgdG8gdGhlIG9uZSBjbGlja2VkIG5vd1xuXHRcdFx0XHRwcmV2Q2hlY2tib3ggPSAkdGhpc0NvbnRyb2w7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IGFzIE9uQ2F0QUxvdFNoaWZ0Q2xpY2ssXG5cdH0pO1xufTtcblxuZXhwb3J0IHtleHRlbmRKUXVlcnlQcm90b3R5cGV9O1xuIiwgImltcG9ydCAnLi9DYXQtYS1sb3QubGVzcyc7XG5pbXBvcnQge2NhdEFMb3R9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7ZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlfSBmcm9tICcuL21vZHVsZXMvZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlJztcblxuLyohIENhdC1hLWxvdCB8IENDLUJZLVNBLTQuMCA8aHR0cHM6Ly9xd2JrLmNjL0g6Q0MtQlktU0EtNC4wPiAqL1xuZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlKCk7XG52b2lkIGNhdEFMb3QoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFNBQVU7QUFDVixJQUFBQyxrQkFBbUI7QUFDbkIsSUFBQUMsVUFBVztBQUNYLElBQUFDLGFBQWM7O0FDRmYsSUFBTUMsYUFBcUI7QUFDM0IsSUFBTUMsdUJBQUEsR0FBQUMsT0FBa0NGLFlBQVUsWUFBQTtBQUNsRCxJQUFNRyw0QkFBQSxHQUFBRCxPQUF1Q0Qsc0JBQW9CLFFBQUE7QUFDakUsSUFBTUcsMENBQUEsR0FBQUYsT0FBcURDLDJCQUF5QixpQkFBQTtBQUNwRixJQUFNRSxpREFBQSxHQUFBSCxPQUE0REUseUNBQXVDLFVBQUE7QUFDekcsSUFBTUUsbURBQUEsR0FBQUos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IiwgInZlcnNpb24iLCAic3RvcmFnZUtleSIsICJDTEFTU19OQU1FIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSIiwgImNvbmNhdCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX0NBVEVHT1JZX0xJU1RfQUNUSU9OIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfQ0FURUdPUllfTElTVF9OT19GT1VORCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX01BUktfQ09VTlRFUiIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9EQVRBX1NFQVJDSF9JTlBVVF9DT05UQUlORVJfSU5QVVQiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TIiwgIkNMQVNTX05BTUVfQ09OVEFJTkVSX0RBVEFfU0VMRUNUSU9OU19BTEwiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfREFUQV9TRUxFQ1RJT05TX05PTkUiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRCIsICJDTEFTU19OQU1FX0NPTlRBSU5FUl9IRUFEX0xJTksiLCAiQ0xBU1NfTkFNRV9DT05UQUlORVJfSEVBRF9MSU5LX0VOQUJMRUQiLCAiQ0xBU1NfTkFNRV9DVVJSRU5UX0NPVU5URVIiLCAiQ0xBU1NfTkFNRV9GRUVEQkFDSyIsICJDTEFTU19OQU1FX0ZFRURCQUNLX0RPTkUiLCAiQ0xBU1NfTkFNRV9MQUJFTCIsICJDTEFTU19OQU1FX0xBQkVMX0RPTkUiLCAiQ0xBU1NfTkFNRV9MQUJFTF9MQVNUX1NFTEVDVEVEIiwgIkNMQVNTX05BTUVfTEFCRUxfU0VMRUNURUQiLCAiREVGQVVMVF9TRVRUSU5HIiwgImRvY2xlYW51cCIsICJkZWZhdWx0IiwgImxhYmVsX2kxOG4iLCAiZWRpdHBhZ2VzIiwgIm1pbm9yIiwgInN1YmNhdGNvdW50IiwgIndhdGNobGlzdCIsICJzZWxlY3RfaTE4biIsICJ3YXRjaF9ub2NoYW5nZSIsICJ3YXRjaF9wcmVmIiwgIndhdGNoX3Vud2F0Y2giLCAid2F0Y2hfd2F0Y2giLCAiVkFSSUFOVFMiLCAid2dVc2VyTGFuZ3VhZ2UiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJERUZBVUxUX01FU1NBR0VTIiwgInNldE1lc3NhZ2VzIiwgImluY2x1ZGVzIiwgIm1lc3NhZ2VzIiwgInNldCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImdldENhY2hlZEtleXMiLCAidmFyaWFudENhY2hlIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJzdG9yYWdlIiwgImxlbmd0aCIsICJrZXkiLCAidmFsdWUiLCAic3RhcnRzV2l0aCIsICJBcnJheSIsICJpc0FycmF5IiwgImNhY2hlS2V5IiwgInJlcGxhY2UiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dGb3JtYXR0ZWROYW1lc3BhY2VzIiwgIndnTmFtZXNwYWNlSWRzIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnVGl0bGUiLCAiY2F0QUxvdCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIkNBTCIsICJpc1NlYXJjaE1vZGUiLCAiTUVTU0FHRVMiLCAiQVBJX1RBRyIsICJUQVJHRVRfTkFNRVNQQUNFIiwgIkNVUlJFTlRfQ0FURUdST1kiLCAiYWxyZWFkeVRoZXJlIiwgImNvbm5lY3Rpb25FcnJvciIsICJub3RGb3VuZCIsICJjb3VudGVyQ3VycmVudCIsICJjb3VudGVyTmVlZGVkIiwgImNvdW50ZXJDYXQiLCAiY3VycmVudENhdGVnb3J5IiwgImRpYWxvZ0hlaWdodCIsICJlZGl0VG9rZW4iLCAibG9jYWxDYXROYW1lIiwgInBhcmVudENhdHMiLCAic3ViQ2F0cyIsICJzZXR0aW5ncyIsICJyZXF1ZXN0RGVsYXkiLCAicmVxdWVzdFF1ZXVlIiwgInByb2Nlc3NpbmdRdWV1ZSIsICJsYXN0U3RhcnQiLCAiZW5xdWV1ZUFwaUNhbGwiLCAiZm4iLCAiUHJvbWlzZSIsICJyZXNvbHZlIiwgInJlamVjdCIsICJwdXNoIiwgInByb2Nlc3NRdWV1ZSIsICJzaGlmdCIsICJub3ciLCAiRGF0ZSIsICJ3YWl0IiwgIk1hdGgiLCAibWF4IiwgInIiLCAic2V0VGltZW91dCIsICJyZXMiLCAiZSIsICIkY291bnRlciIsICIkIiwgIiRwcm9ncmVzc0RpYWxvZyIsICIkbGFiZWxzIiwgIiRzZWxlY3RlZExhYmVscyIsICIkYm9keSIsICIkY29udGFpbmVyIiwgIiRkYXRhQ29udGFpbmVyIiwgIiRtYXJrQ291bnRlciIsICIkcmVzdWx0TGlzdCIsICIkc2VhcmNoSW5wdXQiLCAiJGhlYWQiLCAiJGxpbmsiLCAicmVzaXplQ2xlYW51cCIsICJjb25zdHJ1Y3RvciIsICJfbXckdXRpbCRnZXRQYXJhbVZhbHUiLCAibWVzc2FnZSIsICJwYXJzZSIsICJpbml0U2V0dGluZ3MiLCAiY29udGFpbmVyIiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInBsYWNlaG9sZGVyIiwgIm1zZyIsICJ0eXBlIiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJvbktleURvd24iLCAiZXZlbnQiLCAiJGVsZW1lbnQiLCAiY3VycmVudFRhcmdldCIsICJfJGVsZW1lbnQkdmFsJHRyaW0iLCAiXyRlbGVtZW50JHZhbCIsICJjYXQiLCAidmFsIiwgInRyaW0iLCAidXBkYXRlQ2F0cyIsICJvbkNsaWNrIiwgInRvZ2dsZUFsbCIsICJhcHBlbmRUbyIsICJmaW5kIiwgImJ1aWxkRWxlbWVudHMiLCAicmVnZXhDYXQiLCAiUmVnRXhwIiwgImxvY2FsaXplZFJlZ2V4IiwgImlzQ29tcG9zaXRpb25TdGFydCIsICJhdXRvY29tcGxldGVSZXF1ZXN0IiwgInNlbGVjdGVkU3VnZ2VzdGlvbiIsICIkc3VnZ2VzdGlvbnMiLCAiYWRkQ2xhc3MiLCAiaGlkZSIsICJoaWRlU3VnZ2VzdGlvbnMiLCAiZW1wdHkiLCAic2VsZWN0U3VnZ2VzdGlvbiIsICJjYXRlZ29yeSIsICJ0cmlnZ2VyIiwgInNob3dTdWdnZXN0aW9ucyIsICJjYXRlZ29yaWVzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInRleHQiLCAib24iLCAicHJldmVudERlZmF1bHQiLCAiZXJyIiwgImYiLCAic2hvdyIsICJvbGRWYWwiLCAibmV3VmFsIiwgInJlcXVlc3RJZCIsICJzZWFyY2giLCAiZG9BUElDYWxsIiwgImFjdGlvbiIsICJuYW1lc3BhY2UiLCAicmVkaXJlY3RzIiwgInJlc3VsdCIsICJtYXAiLCAiaXRlbSIsICJmaWx0ZXIiLCAic3VnZ2VzdGlvbnMiLCAiY2hpbGRyZW4iLCAicmVtb3ZlQ2xhc3MiLCAiZXEiLCAid2luZG93IiwgInRvZ2dsZUNsYXNzIiwgInJ1biIsICJfd2luZG93JENhdEFMb3RQcmVmcyIsICJjYXRBTG90UHJlZnMiLCAiQ2F0QUxvdFByZWZzIiwgInR5cGVPZkNhdEFMb3RQcmVmcyIsICJfaTIiLCAiX09iamVjdCRrZXlzIiwgImtleXMiLCAiX2NhdEFMb3RQcmVmcyRzZXR0aW5nIiwgInNldHRpbmdLZXkiLCAic2V0dGluZyIsICJzZWxlY3QiLCAiX2kzIiwgIl9PYmplY3Qka2V5czIiLCAibWVzc2FnZUtleSIsICJhcmdzIiwgImZ1bGxLZXkiLCAicGxhaW4iLCAibmFtZXNwYWNlTnVtYmVyIiwgImZhbGxiYWNrIiwgIl9DQUwkd2dGb3JtYXR0ZWROYW1lcyIsICJ3aWtpVGV4dEJsYW5rIiwgIlN0cmluZyIsICJyYXciLCAiX3RlbXBsYXRlT2JqZWN0IiwgIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCAid2lraVRleHRCbGFua1JFIiwgImNyZWF0ZVJlZ2V4U3RyIiwgIm5hbWUiLCAicmVnZXhOYW1lIiwgImkiLCAiaW5pdGlhbCIsICJzbGljZSIsICJsbCIsICJ0b0xvd2VyQ2FzZSIsICJ1bCIsICJ0b1VwcGVyQ2FzZSIsICJfdGVtcGxhdGVPYmplY3QyIiwgImNhbm9uaWNhbCIsICJyZWdleFN0cmluZyIsICJfaTQiLCAiX09iamVjdCRrZXlzMyIsICJjYXROYW1lIiwgInVwZGF0ZVNlbGVjdGlvbkNvdW50ZXIiLCAiaHRtbCIsICJ0b1N0cmluZyIsICJmaW5kQWxsVmFyaWFudHMiLCAiZ2V0T2JqZWN0IiwgInJlc3VsdHMiLCAicGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRpdGxlIiwgInZhcmlhbnQiLCAicGFyc2VkIiwgIkRPTVBhcnNlciIsICJwYXJzZUZyb21TdHJpbmciLCAiX2k1IiwgIl9WQVJJQU5UUyIsICJ2YXJpYW50Tm9kZSIsICJxdWVyeVNlbGVjdG9yIiwgInRleHRDb250ZW50IiwgInVuaXF1ZUFycmF5IiwgInNldE9iamVjdCIsICJyZWdleEJ1aWxkZXIiLCAidmFyaWFudHMiLCAidmFyaWFudFJlZ0V4cHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZXNjYXBlUmVnRXhwIiwgIl90ZW1wbGF0ZU9iamVjdDMiLCAiZmlyc3QiLCAiam9pbiIsICJkb0FQSUNhbGxBc3luYyIsICJfcGFyYW1zIiwgInJldHJ5Q291bnQiLCAicG9zdCIsICJlcnJvciIsICJsb2ciLCAiY2FsbGJhY2siLCAidGhlbiIsICJjYXRjaCIsICJ1cGRhdGVDb3VudGVyIiwgIm1hcmtBc0RvbmUiLCAiJG1hcmtlZExhYmVsIiwgInRhcmdldENhdGVnb3J5IiwgIm1vZGUiLCAiYXBwZW5kIiwgIkZyYWdtZW50IiwgImRvQ2xlYW51cCIsICJyZW1vdmVVbmNhdCIsICJkaXNwbGF5UmVzdWx0IiwgImNzcyIsICJjdXJzb3IiLCAib3ZlcmZsb3ciLCAiJHBhcmVudCIsICJwYXJlbnQiLCAicmVtb3ZlIiwgInJlZHVjZSIsICJwcmUiLCAiY3VyIiwgImluZGV4IiwgImVkaXRDYXRlZ29yaWVzIiwgIm1hcmtlZExhYmVsIiwgIl90aGlzIiwgIl9wYWdlJHJldmlzaW9ucyIsICJtYXJrZWRMYWJlbFRpdGxlIiwgIm9yaWdpblRleHQiLCAic3RhcnR0aW1lc3RhbXAiLCAidGltZXN0YW1wIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAicGFnZXMiLCAicGFnZSIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgInNvdXJjZWNhdCIsICJ0YXJnZVJlZ0V4cCIsICJ0ZXN0IiwgInN1bW1hcnkiLCAic291cmNlQ2F0UmVnRXhwIiwgImVzY2FwZWRTb3VyY2VDYXQiLCAiX3RlbXBsYXRlT2JqZWN0NCIsICJfbWF0Y2giLCAicHJlZml4IiwgIl9jYXRlZ29yeSIsICJzdWZmaXgiLCAiX2RvY1BhZ2UkcmV2aXNpb25zJDAkIiwgIl9kb2NQYWdlJHJldmlzaW9ucyIsICJkb2NUaXRsZSIsICJkb2NSZXN1bHQiLCAibWV0YSIsICJ0aXRsZXMiLCAicHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJxdWVyeSIsICJkb2NQYWdlcyIsICJkb2NQYWdlIiwgImRvY09yaWdpblRleHQiLCAiZG9jVGV4dCIsICJkb2NDYXRSZWdFeHAiLCAibWF0Y2giLCAiX2RvY1BhZ2Ukc3RhcnR0aW1lc3RhIiwgIl9kb2NQYWdlJHJldmlzaW9ucyQwJDIiLCAiX2RvY1BhZ2UkcmV2aXNpb25zMiIsICJkb2NTdGFydHRpbWVzdGFtcCIsICJkb2NUaW1lc3RhbXAiLCAidG9rZW4iLCAidGFncyIsICJhc3NlcnQiLCAiYm90IiwgImJhc2V0aW1lc3RhbXAiLCAiY29uc29sZSIsICJnZXRDb250ZW50IiwgIl90aGlzMiIsICJnZXRUaXRsZUZyb21MaW5rIiwgImhyZWYiLCAiX2RlY29kZVVSSUNvbXBvbmVudCRtIiwgIl9kZWNvZGVVUklDb21wb25lbnQkbTIiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImdldE1hcmtlZExhYmVscyIsICJtYXJrZWRMYWJlbHMiLCAiZWFjaCIsICJfaW5kZXgiLCAibGFiZWwiLCAiXyRsYWJlbExpbmskYXR0ciIsICIkbGFiZWwiLCAiJGxhYmVsTGluayIsICJhdHRyIiwgInNob3dQcm9ncmVzcyIsICIkb3ZlcmxheSIsICIkZGlhbG9nIiwgInJvbGUiLCAiZG9Tb21ldGhpbmciLCAiX3RoaXMzIiwgIm5vdGlmeSIsICJ0YWciLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiYWRkSGVyZSIsICJjb3B5SGVyZSIsICJtb3ZlSGVyZSIsICJjcmVhdGVDYXRMaW5rcyIsICJzeW1ib2wiLCAic29ydCIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICIkdHIiLCAiZGF0YXNldCIsICJjbG9zZXN0IiwgImRhdGEiLCAic2hvd0NhdGVnb3J5TGlzdCIsICJfdGhpcyQkY29udGFpbmVyJHdpZHQiLCAiXyQkd2lkdGgiLCAiY3VycmVudENhdGVnb3JpZXMiLCAid2lkdGgiLCAiaGVpZ2h0IiwgIm1pbiIsICJnZXRQYXJlbnRDYXRzIiwgIl9wYWdlcyQiLCAiX3BhZ2VzJDIiLCAibWlzc2luZyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJjYXRUaXRsZSIsICJnZXRTdWJDYXRzIiwgImxpc3QiLCAiY210eXBlIiwgImNtbGltaXQiLCAiY210aXRsZSIsICJfcmVzdWx0JHF1ZXJ5IiwgImNhdHMiLCAiY2F0ZWdvcnltZW1iZXJzIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgImdldENhdGVnb3J5TGlzdCIsICJmaW5kQWxsTGFiZWxzIiwgImFkZCIsICIkcGFnZXMiLCAibWFrZUNsaWNrYWJsZSIsICJvbkNhdEFMb3RTaGlmdENsaWNrIiwgImhhc0NsYXNzIiwgImVuYWJsZVJlc2l6ZSIsICJfdGhpcyRyZXNpemVDbGVhbnVwIiwgImNhbGwiLCAib2ZmIiwgIl90aGlzJHJlc2l6ZUNsZWFudXAyIiwgIiRoYW5kbGUiLCAicHJlcGVuZFRvIiwgImhhbmRsZSIsICJvblBvaW50ZXJEb3duIiwgInN0YXJ0SGVpZ2h0IiwgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsICJzdGFydFkiLCAiY2xpZW50WSIsICJvblBvaW50ZXJNb3ZlIiwgIm1vdmVFdmVudCIsICJtYXhIZWlnaHQiLCAib25Qb2ludGVyVXAiLCAiZG9jdW1lbnQiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJhZGRFdmVudExpc3RlbmVyIiwgIm9uY2UiLCAiX0NBTCR2YXJpYW50Q2FjaGUiLCAiZ2V0Qm9keSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZXh0ZW5kSlF1ZXJ5UHJvdG90eXBlIiwgImV4dGVuZCIsICJwcmV2Q2hlY2tib3giLCAiY3RybEtleSIsICJwYXJlbnRzIiwgIiR0aGlzQ29udHJvbCIsICJ0YXJnZXQiLCAic2hpZnRLZXkiLCAibWV0aG9kIl0KfQo=
