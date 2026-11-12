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
//! src/Cat-a-lot/options.json
var apiTag = "Cat-a-lot";
var targetNamespace = 14;
var version = "6.0";
var storageKey = "ext.gadget.Cat-a-Lot_results-";
//! src/Cat-a-lot/modules/constant.ts
var CLASS_NAME = "gadget-cat_a_lot";
var CLASS_NAME_CONTAINER = `${CLASS_NAME}-container`;
var CLASS_NAME_CONTAINER_DATA = `${CLASS_NAME_CONTAINER}__data`;
var CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST = `${CLASS_NAME_CONTAINER_DATA}__category-list`;
var CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION = `${CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST}__action`;
var CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_NO_FOUND = `${CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST}--no-found`;
var CLASS_NAME_CONTAINER_DATA_MARK_COUNTER = `${CLASS_NAME_CONTAINER_DATA}__mark-counter`;
var CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT = `${CLASS_NAME_CONTAINER_DATA}__search-input-container__input`;
var CLASS_NAME_CONTAINER_DATA_SELECTIONS = `${CLASS_NAME_CONTAINER_DATA}__selections`;
var CLASS_NAME_CONTAINER_DATA_SELECTIONS_ALL = `${CLASS_NAME_CONTAINER_DATA_SELECTIONS}__all`;
var CLASS_NAME_CONTAINER_DATA_SELECTIONS_NONE = `${CLASS_NAME_CONTAINER_DATA_SELECTIONS}__none`;
var CLASS_NAME_CONTAINER_HEAD = `${CLASS_NAME_CONTAINER}__head`;
var CLASS_NAME_CONTAINER_HEAD_LINK = `${CLASS_NAME_CONTAINER_HEAD}__link`;
var CLASS_NAME_CONTAINER_HEAD_LINK_ENABLED = `${CLASS_NAME_CONTAINER_HEAD_LINK}--enabled`;
var CLASS_NAME_CURRENT_COUNTER = `${CLASS_NAME}-current_counter`;
var CLASS_NAME_FEEDBACK = `${CLASS_NAME}-feedback`;
var CLASS_NAME_FEEDBACK_DONE = `${CLASS_NAME_FEEDBACK}--done`;
var CLASS_NAME_LABEL = `${CLASS_NAME}-label`;
var CLASS_NAME_LABEL_DONE = `${CLASS_NAME_LABEL}--done`;
var CLASS_NAME_LABEL_LAST_SELECTED = `${CLASS_NAME_LABEL}--last-selected`;
var CLASS_NAME_LABEL_SELECTED = `${CLASS_NAME_LABEL}--selected`;
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
//! src/Cat-a-lot/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)(`Cat-a-lot/${version}`);
//! src/Cat-a-lot/modules/getCachedKeys.ts
var getCachedKeys = () => {
  const variantCache = {};
  for (const [key, value] of Object.entries(mw.storage["store"])) {
    if (key.startsWith(storageKey) && Array.isArray(value)) {
      const cacheKey = key.replace(storageKey, "");
      variantCache[cacheKey] = value;
    }
  }
  return variantCache;
};
//! src/Cat-a-lot/modules/core.ts
var {
  wgCanonicalSpecialPageName,
  wgFormattedNamespaces,
  wgNamespaceIds,
  wgNamespaceNumber,
  wgTitle
} = mw.config.get();
var catALot = async ($body) => {
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
    static async processQueue() {
      while (CAL.requestQueue.length) {
        const {
          fn,
          resolve,
          reject
        } = CAL.requestQueue.shift();
        const now = Date.now();
        const wait = Math.max(0, CAL.requestDelay - (now - CAL.lastStart));
        if (wait) {
          await new Promise((r) => setTimeout(r, wait));
        }
        CAL.lastStart = Date.now();
        try {
          const res = await fn();
          resolve(res);
        } catch (e) {
          reject(e);
        }
      }
      CAL.processingQueue = false;
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
    constructor($body2) {
      if (!mw.message("cat-a-lot-loading").parse()) {
        mw.messages.set(CAL.MESSAGES);
      }
      this.$body = $body2;
      CAL.initSettings();
      const $container = $("<div>").addClass([CLASS_NAME, CLASS_NAME_CONTAINER, "noprint"]).append($("<div>").addClass(CLASS_NAME_CONTAINER_DATA).append($("<div>").addClass(CLASS_NAME_CONTAINER_DATA_MARK_COUNTER), $("<div>").addClass(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST), $("<div>").append($("<input>").addClass(CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT).attr({
        placeholder: CAL.msg("enter-name"),
        type: "text",
        value: CAL.isSearchMode ? mw.util.getParamValue("search") ?? "" : ""
      }).on("keydown", (event) => {
        const $element = $(event.currentTarget);
        if (event.key === "Enter") {
          const cat = `${$element.val()}`.trim() ?? "";
          if (cat) {
            this.updateCats(cat);
          }
        }
      })), $("<div>").addClass(CLASS_NAME_CONTAINER_DATA_SELECTIONS).append(`${CAL.msg("select")} `, $("<a>").addClass(CLASS_NAME_CONTAINER_DATA_SELECTIONS_ALL).on("click", () => {
        this.toggleAll(true);
      }).text(CAL.msg("all")), " • ", $("<a>").addClass(CLASS_NAME_CONTAINER_DATA_SELECTIONS_NONE).on("click", () => {
        this.toggleAll(false);
      }).text(CAL.msg("none")))), $("<div>").addClass(CLASS_NAME_CONTAINER_HEAD).append($("<a>").addClass(CLASS_NAME_CONTAINER_HEAD_LINK).text("Cat-a-lot")));
      this.$container = $container;
      this.$container.appendTo(this.$body);
      this.$dataContainer = this.$container.find(`.${CLASS_NAME_CONTAINER_DATA}`);
      this.$markCounter = this.$dataContainer.find(`.${CLASS_NAME_CONTAINER_DATA_MARK_COUNTER}`);
      this.$resultList = this.$dataContainer.find(`.${CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST}`);
      this.$searchInput = this.$dataContainer.find(`.${CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT}`);
      this.$head = this.$container.find(`.${CLASS_NAME_CONTAINER_HEAD}`);
      this.$link = this.$head.find(`.${CLASS_NAME_CONTAINER_HEAD_LINK}`);
    }
    buildElements() {
      const regexCat = new RegExp(`^\\s*${CAL.localizedRegex(CAL.TARGET_NAMESPACE, "Category")}:`, "");
      let isCompositionStart;
      let autocompleteRequest = 0;
      let selectedSuggestion = -1;
      const $suggestions = $("<ul>").addClass(`${CLASS_NAME_CONTAINER_DATA_SEARCH_INPUT_CONTAINER_INPUT}-suggestions`);
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
        for (const category of categories) {
          $("<li>").text(category).on("mousedown", (event) => {
            event.preventDefault();
            selectSuggestion(category);
          }).appendTo($suggestions);
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
      let catALotPrefs = window.CatALotPrefs ?? {};
      const typeOfCatALotPrefs = typeof catALotPrefs;
      if (typeOfCatALotPrefs === "object" && !Array.isArray(catALotPrefs) || typeOfCatALotPrefs !== "object") {
        catALotPrefs = {};
      }
      for (const settingKey of Object.keys(CAL.DEFAULT_SETTING)) {
        const setting = CAL.DEFAULT_SETTING[settingKey];
        CAL.settings[settingKey] = catALotPrefs[settingKey] ?? setting.default;
        if (!setting.select_i18n) {
          continue;
        }
        setting.select = {};
        for (const messageKey of Object.keys(setting.select_i18n)) {
          const message = setting.select_i18n[messageKey];
          setting.select[CAL.msg(messageKey)] = message;
        }
      }
    }
    static msg(key, ...args) {
      const fullKey = `cat-a-lot-${key}`;
      return args.length ? mw.message(fullKey, ...args).parse() : mw.message(fullKey).plain();
    }
    static localizedRegex(namespaceNumber, fallback) {
      var _CAL$wgFormattedNames;
      const wikiTextBlank = String.raw`[\t _\xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]+`;
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
          regexName += ll === ul ? initial : `[${ll}${ul}]`;
        }
        return regexName.replace(/([$()*+.?\\^])/g, String.raw`\$1`).replace(wikiTextBlankRE, wikiTextBlank);
      };
      fallback = fallback.toLowerCase();
      const canonical = (_CAL$wgFormattedNames = CAL.wgFormattedNamespaces[namespaceNumber]) === null || _CAL$wgFormattedNames === void 0 ? void 0 : _CAL$wgFormattedNames.toLowerCase();
      let regexString = createRegexStr(canonical);
      if (fallback && canonical !== fallback) {
        regexString += `|${createRegexStr(fallback)}`;
      }
      for (const catName of Object.keys(CAL.wgNamespaceIds)) {
        if (catName.toLowerCase() !== canonical && catName.toLowerCase() !== fallback && CAL.wgNamespaceIds[catName] === namespaceNumber) {
          regexString += `|${createRegexStr(catName)}`;
        }
      }
      return `(?:${regexString})`;
    }
    updateSelectionCounter() {
      CAL.$selectedLabels = CAL.$labels.filter(`.${CLASS_NAME_LABEL_SELECTED}`);
      this.$markCounter.show().html(CAL.msg("files-selected", CAL.$selectedLabels.length.toString()));
    }
    toggleAll(select) {
      CAL.$labels.toggleClass(CLASS_NAME_LABEL_SELECTED, select);
      this.updateSelectionCounter();
    }
    static async findAllVariants(category) {
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
        text: `<ul id="cal-variants">
	<li id="cal-zh">-{zh|${category}}-</li>
	<li id="cal-zh-hans">-{zh-hans|${category}}-</li>
	<li id="cal-zh-hant">-{zh-hant|${category}}-</li>
	<li id="cal-zh-cn">-{zh-cn|${category}}-</li>
	<li id="cal-zh-hk">-{zh-hk|${category}}-</li>
	<li id="cal-zh-mo">-{zh-mo|${category}}-</li>
	<li id="cal-zh-my">-{zh-my|${category}}-</li>
	<li id="cal-zh-sg">-{zh-sg|${category}}-</li>
	<li id="cal-zh-tw">-{zh-tw|${category}}-</li>
</ul>`,
        title: "temp",
        variant: "zh"
      };
      try {
        const {
          parse
        } = await CAL.enqueueApiCall(() => CAL.api.get(params));
        const {
          text
        } = parse;
        const parsed = new DOMParser().parseFromString(text, "text/html");
        for (const variant of VARIANTS) {
          const variantNode = parsed.querySelector(`#cal-${variant}`);
          if (variantNode) {
            results.push(variantNode.textContent);
          }
        }
      } catch {
      }
      CAL.variantCache[category] = [...new Set(results)];
      mw.storage.setObject(storageKey + category, CAL.variantCache[category], 60 * 60 * 24);
      return CAL.variantCache[category];
    }
    static async regexBuilder(category) {
      const catName = CAL.localizedRegex(CAL.TARGET_NAMESPACE, "Category");
      category = category.replace(/^[\s_]+/, "").replace(/[\s_]+$/, "");
      const variants = await CAL.findAllVariants(category);
      const variantRegExps = [];
      for (let variant of variants) {
        variant = mw.util.escapeRegExp(variant);
        variant = variant.replace(/[\s_]+/g, String.raw`[\s_]+`);
        const first = variant.slice(0, 1);
        if (first.toUpperCase() !== first.toLowerCase()) {
          variant = `[${first.toUpperCase()}${first.toLowerCase()}]${variant.slice(1)}`;
        }
        variantRegExps.push(variant);
      }
      return new RegExp(`\\[\\[[\\s_]*${catName}[\\s_]*:[\\s_]*(?:${variantRegExps.join("|")})[\\s_]*(\\|[^\\]]*(?:\\][^\\]]+)*)?\\]\\]`, "g");
    }
    static async doAPICallAsync(_params) {
      const params = {
        ..._params,
        format: "json",
        formatversion: "2"
      };
      let retryCount = 0;
      while (true) {
        try {
          if (params["action"] === "query") {
            return await CAL.enqueueApiCall(() => CAL.api.get(params));
          }
          return await CAL.enqueueApiCall(() => CAL.api.post(params));
        } catch (error) {
          mw.log.error("[Cat-a-lot] Ajax error:", error);
          if (retryCount < 4) {
            retryCount++;
            await new Promise((resolve) => setTimeout(resolve, 300));
            continue;
          }
          throw error;
        }
      }
    }
    doAPICall(_params, callback) {
      CAL.doAPICallAsync(_params).then((data) => {
        callback(data);
      }).catch((error) => {
        mw.log.error("[Cat-a-lot] Ajax error:", error);
        const params = _params;
        if (params.title) {
          CAL.connectionError.push(params.title);
          this.updateCounter();
        }
      });
    }
    static markAsDone($markedLabel, targetCategory, mode) {
      $markedLabel.addClass(CLASS_NAME_LABEL_DONE);
      switch (mode) {
        case "add":
          $markedLabel.append($("<br>"), CAL.msg("added-cat", targetCategory));
          break;
        case "copy":
          $markedLabel.append($("<br>"), CAL.msg("copied-cat", targetCategory));
          break;
        case "move":
          $markedLabel.append($("<br>"), CAL.msg("moved-cat", targetCategory));
          break;
        case "remove":
          $markedLabel.append($("<br>"), CAL.msg("removed-cat", targetCategory));
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
      this.$body.find(`.${CLASS_NAME_FEEDBACK}`).addClass(CLASS_NAME_FEEDBACK_DONE);
      const $parent = CAL.$counter.parent();
      $parent.empty().append($("<h3>").text(CAL.msg("done")));
      $parent.append(CAL.msg("all-done"), $("<br>"));
      $parent.append($("<a>").on("click", () => {
        CAL.$progressDialog.remove();
        this.toggleAll(false);
      }).text(CAL.msg("return-to-page")));
      if (CAL.alreadyThere.length) {
        $parent.append($("<h5>").text(CAL.msg("skipped-already", CAL.alreadyThere.length.toString())), ...CAL.alreadyThere.reduce((pre, cur, index) => index < CAL.alreadyThere.length - 1 ? [...pre, cur, $("<br>")] : [...pre, cur], []));
      }
      if (CAL.notFound.length) {
        $parent.append($("<h5>").text(CAL.msg("skipped-not-found", CAL.notFound.length.toString())), ...CAL.notFound.reduce((pre, cur, index) => index < CAL.notFound.length - 1 ? [...pre, cur, $("<br>")] : [...pre, cur], []));
      }
      if (CAL.connectionError.length) {
        $parent.append($("<h5>").text(CAL.msg("skipped-server", CAL.connectionError.length.toString())), ...CAL.connectionError.reduce((pre, cur, index) => index < CAL.connectionError.length - 1 ? [...pre, cur, $("<br>")] : [...pre, cur], []));
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
    async editCategories(result, markedLabel, targetCategory, mode) {
      var _page$revisions;
      const [markedLabelTitle, $markedLabel] = markedLabel;
      if (!(result !== null && result !== void 0 && result["query"])) {
        CAL.connectionError.push(markedLabelTitle);
        this.updateCounter();
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
      const revision = page === null || page === void 0 || (_page$revisions = page.revisions) === null || _page$revisions === void 0 ? void 0 : _page$revisions[0];
      if (!page || !revision) {
        throw new Error("[Cat-a-lot] No revision returned for the page");
      }
      originText = revision.slots.main.content;
      starttimestamp = page.starttimestamp ?? 0;
      timestamp = revision.timestamp ?? 0;
      const sourcecat = CAL.CURRENT_CATEGROY;
      const targeRegExp = await CAL.regexBuilder(targetCategory);
      if (mode !== "remove" && targeRegExp.test(originText) && mode !== "move") {
        CAL.alreadyThere.push(markedLabelTitle);
        this.updateCounter();
        return;
      }
      let text = originText;
      let summary;
      const sourceCatRegExp = await CAL.regexBuilder(sourcecat);
      switch (mode) {
        case "add":
          text += `
[[${CAL.localCatName}:${targetCategory}]]
`;
          summary = CAL.msg("summary-add").replace("$1", targetCategory);
          break;
        case "copy":
          text = text.replace(sourceCatRegExp, `[[${CAL.localCatName}:${sourcecat}$1]]
[[${CAL.localCatName}:${targetCategory}$1]]`);
          summary = CAL.msg("summary-copy").replace("$1", sourcecat).replace("$2", targetCategory);
          if (originText === text) {
            text += `
[[${CAL.localCatName}:${targetCategory}]]`;
          }
          break;
        case "move":
          text = text.replace(sourceCatRegExp, `[[${CAL.localCatName}:${targetCategory}$1]]`);
          summary = CAL.msg("summary-move").replace("$1", sourcecat).replace("$2", targetCategory);
          const escapedSourceCat = sourcecat.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          text = text.replace(new RegExp(String.raw`(\{\{[ \t]*(?:消歧义模板|消歧义|消歧義|[Dd]isambig|[Dd]isamb|[Dd]ab|[Aa]imai)[ \t]*(?:\|[^|{}]*)*?\|[ \t]*[Cc]at[ \t]*=[ \t]*)(${escapedSourceCat})([ \t]*(?=\||\}\}))`, "g"), (_match, prefix, _category, suffix) => `${prefix}${targetCategory}${suffix}`);
          break;
        case "remove":
          text = text.replace(sourceCatRegExp, "");
          summary = CAL.msg("summary-remove").replace("$1", sourcecat);
          break;
      }
      if (text === originText) {
        if (markedLabelTitle.startsWith("Template:") && (mode === "move" || mode === "copy")) {
          var _docPage$revisions;
          const docTitle = `${markedLabelTitle}/doc`;
          const docResult = await CAL.doAPICallAsync({
            action: "query",
            formatversion: "2",
            meta: "tokens",
            titles: docTitle,
            prop: "revisions",
            rvprop: ["content", "timestamp"],
            rvslots: "main"
          });
          if (!(docResult !== null && docResult !== void 0 && docResult["query"])) {
            CAL.connectionError.push(docTitle);
            this.updateCounter();
            return;
          }
          const query = docResult === null || docResult === void 0 ? void 0 : docResult["query"];
          if (!query) {
            CAL.connectionError.push(docTitle);
            this.updateCounter();
            return;
          }
          const {
            pages: docPages = []
          } = query;
          const [docPage] = docPages;
          const docOriginText = (docPage === null || docPage === void 0 || (_docPage$revisions = docPage.revisions) === null || _docPage$revisions === void 0 || (_docPage$revisions = _docPage$revisions[0]) === null || _docPage$revisions === void 0 || (_docPage$revisions = _docPage$revisions.slots) === null || _docPage$revisions === void 0 || (_docPage$revisions = _docPage$revisions.main) === null || _docPage$revisions === void 0 ? void 0 : _docPage$revisions.content) ?? "";
          let docText = docOriginText;
          const docCatRegExp = await CAL.regexBuilder(sourcecat);
          if (docText.match(docCatRegExp)) {
            if (mode === "move") {
              docText = docText.replace(docCatRegExp, `[[${CAL.localCatName}:${targetCategory}$1]]`);
            } else if (mode === "copy") {
              docText = docText.replace(docCatRegExp, `[[${CAL.localCatName}:${sourcecat}$1]]
[[${CAL.localCatName}:${targetCategory}$1]]`);
            }
          }
          if (docText !== docOriginText) {
            var _docPage$revisions2;
            text = docText;
            const docStarttimestamp = (docPage === null || docPage === void 0 ? void 0 : docPage.starttimestamp) ?? 0;
            const docTimestamp = (docPage === null || docPage === void 0 || (_docPage$revisions2 = docPage.revisions) === null || _docPage$revisions2 === void 0 || (_docPage$revisions2 = _docPage$revisions2[0]) === null || _docPage$revisions2 === void 0 ? void 0 : _docPage$revisions2.timestamp) ?? 0;
            try {
              await CAL.doAPICallAsync({
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
              this.updateCounter();
              console.log(`[Cat-a-lot] Successfully edited template doc page: ${docTitle}`);
              await CAL.doAPICallAsync({
                action: "purge",
                formatversion: "2",
                meta: "tokens",
                titles: markedLabelTitle
              });
              console.log(`[Cat-a-lot] Successfully purged template doc page: ${docTitle}`);
              CAL.markAsDone($markedLabel, targetCategory, mode);
            } catch {
              CAL.connectionError.push(docTitle);
              this.updateCounter();
            }
          }
        }
        CAL.notFound.push(markedLabelTitle);
        this.updateCounter();
        return;
      }
      if (mode !== "remove") {
        text = CAL.doCleanup(CAL.removeUncat(text));
      }
      try {
        await CAL.doAPICallAsync({
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
        this.updateCounter();
        CAL.markAsDone($markedLabel, targetCategory, mode);
      } catch {
        CAL.connectionError.push(markedLabelTitle);
        this.updateCounter();
      }
    }
    async getContent(markedLabel, targetCategory, mode) {
      try {
        const result = await CAL.doAPICallAsync({
          action: "query",
          formatversion: "2",
          meta: "tokens",
          titles: markedLabel[0],
          prop: "revisions",
          rvprop: ["content", "timestamp"],
          rvslots: "main"
        });
        await this.editCategories(result, markedLabel, targetCategory, mode);
      } catch {
        CAL.connectionError.push(markedLabel[0]);
        this.updateCounter();
      }
    }
    static getTitleFromLink(href) {
      try {
        var _decodeURIComponent$m;
        return (((_decodeURIComponent$m = decodeURIComponent(href ?? "").match(/wiki\/(.+?)(?:#.+)?$/)) === null || _decodeURIComponent$m === void 0 ? void 0 : _decodeURIComponent$m[1]) ?? "").replace(/_/g, " ");
      } catch {
        return "";
      }
    }
    getMarkedLabels() {
      const markedLabels = [];
      CAL.$selectedLabels = CAL.$labels.filter(`.${CLASS_NAME_LABEL_SELECTED}`);
      CAL.$selectedLabels.each((_index, label) => {
        var _$labelLink$attr;
        const $label = $(label);
        const $labelLink = $label.find("a:not(.CategoryTreeToggle)[title]");
        const title = ((_$labelLink$attr = $labelLink.attr("title")) === null || _$labelLink$attr === void 0 ? void 0 : _$labelLink$attr.trim()) || CAL.getTitleFromLink($labelLink.attr("href")) || CAL.getTitleFromLink($label.find("a:not(.CategoryTreeToggle)").attr("href"));
        markedLabels.push([title, $label]);
      });
      return markedLabels;
    }
    showProgress() {
      this.$body.css({
        cursor: "wait",
        overflow: "hidden"
      });
      const $overlay = $("<div>").addClass(`${CLASS_NAME}-overlay`);
      const $dialog = $("<div>").addClass(CLASS_NAME_FEEDBACK).attr("role", "status").append(CAL.msg("editing"), $("<span>").addClass(CLASS_NAME_CURRENT_COUNTER).text(`${CAL.counterCurrent}`), `${CAL.msg("of")}${CAL.counterNeeded}`);
      $overlay.append($dialog).appendTo(this.$body);
      CAL.$progressDialog = $overlay;
      CAL.$counter = $dialog.find(`.${CLASS_NAME_CURRENT_COUNTER}`);
    }
    async doSomething(targetCategory, mode) {
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
      for (const markedLabel of markedLabels) {
        await this.getContent(markedLabel, targetCategory, mode);
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
      for (const category of categories) {
        const $tr = $("<tr>").data("category", category).append($("<td>").text(symbol), $("<td>").append($("<a>").on("click", (event) => {
          const $element = $(event.currentTarget);
          this.updateCats($element.closest("tr").data("category"));
        }).text(category)));
        if (category !== CAL.CURRENT_CATEGROY && CAL.isSearchMode) {
          $tr.append($("<td>").append($("<a>").addClass(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION).on("click", (event) => {
            const $element = $(event.currentTarget);
            this.addHere($element.closest("tr").data("category"));
          }).text(CAL.msg("add"))));
        } else if (category !== CAL.CURRENT_CATEGROY && !CAL.isSearchMode) {
          $tr.append($("<td>").append($("<a>").addClass(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION).on("click", (event) => {
            const $element = $(event.currentTarget);
            this.copyHere($element.closest("tr").data("category"));
          }).text(CAL.msg("copy")), $("<td>").append($("<a>").addClass(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_ACTION).on("click", (event) => {
            const $element = $(event.currentTarget);
            this.moveHere($element.closest("tr").data("category"));
          }).text(CAL.msg("move")))));
        }
        this.$resultList.find("table").append($tr);
      }
    }
    showCategoryList() {
      this.$body.css("cursor", "");
      const currentCategories = [CAL.currentCategory];
      this.$resultList.empty();
      this.$resultList.append($("<table>"));
      this.createCatLinks("↑", CAL.parentCats);
      this.createCatLinks("→", currentCategories);
      this.createCatLinks("↓", CAL.subCats);
      this.$container.width("");
      this.$container.height("");
      this.$container.width(Math.min((this.$container.width() ?? 0) * 1.1 + 15, ($(window).width() ?? 0) - 10));
      this.$resultList.css({
        "max-height": `${CAL.dialogHeight}px`,
        height: ""
      });
    }
    getParentCats() {
      this.doAPICall({
        action: "query",
        titles: `Category:${CAL.currentCategory}`,
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
          this.$resultList.empty().append($("<span>").addClass(CLASS_NAME_CONTAINER_DATA_CATEGORY_LIST_NO_FOUND).text(CAL.msg("cat-not-found")));
          this.createCatLinks("→", [CAL.currentCategory]);
          return;
        }
        let categories = [];
        if ((_pages$2 = pages[0]) !== null && _pages$2 !== void 0 && _pages$2.categories) {
          categories = pages[0].categories;
        }
        for (const cat of categories) {
          const catTitle = cat.title.replace(/^[^:]+:/, "");
          CAL.parentCats.push(catTitle);
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
        cmtitle: `Category:${CAL.currentCategory}`
      }, (result) => {
        var _result$query;
        const cats = (result === null || result === void 0 || (_result$query = result.query) === null || _result$query === void 0 ? void 0 : _result$query.categorymembers) || [];
        CAL.subCats = [];
        for (const cat of cats) {
          const catTitle = cat.title.replace(/^[^:]+:/, "");
          CAL.subCats.push(catTitle);
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
      this.$resultList.empty().append($("<div>").text(CAL.msg("loading")));
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
      const $handle = $("<div>").addClass(`${CLASS_NAME_CONTAINER}-resize-handle`).prependTo(this.$container);
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
            maxHeight: `${Math.max(0, height - 100)}px`,
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
      (_CAL$variantCache = CAL["variantCache"])[category] || (_CAL$variantCache[category] = await CAL.findAllVariants(category));
    }
    new CAL($body).buildElements();
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
        this.parents("body").find(`.${CLASS_NAME_LABEL_LAST_SELECTED}`).removeClass(CLASS_NAME_LABEL_LAST_SELECTED);
        let $thisControl = $(event.target);
        if (!$thisControl.hasClass(CLASS_NAME_LABEL)) {
          $thisControl = $thisControl.parents(`.${CLASS_NAME_LABEL}`);
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
var import_ext_gadget2 = require("ext.gadget.Util");
void (0, import_ext_gadget2.getBody)().then(($body) => {
  /*! jQuery checkboxShiftClick | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
  extendJQueryPrototype();
  /*! Cat-a-lot messages | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
  setMessages();
  /*! Cat-a-lot | CC-BY-SA-4.0 <https://qwbk.cc/H:CC-BY-SA-4.0> */
  void catALot($body);
});

})();

/* </nowiki> */

