/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=HotCat|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-HotCat.js}
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-HotCat.js/zh-hans}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-HotCat.js/local_defaults}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HotCat}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=CheckCategories HotCat Extension|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Hotcatcheck.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HotCat/HotCat-check.js}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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

// dist/HotCat/HotCat.js
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
//! src/HotCat/modules/check.module.less
var catcheckInlineIcon = "check-module__catcheckInlineIcon_mJ5NDq";
//! src/HotCat/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var mwApi = (userAgent) => {
  return (0, import_ext_gadget.initMwApi)(userAgent);
};
//! src/HotCat/modules/check.ts
(function hotCatCheck() {
  if (mw.config.get("wgNamespaceNumber") !== 6 || window.HotCatAutoRemoveCheckCatOptOut || !document.querySelector(".checkcategories")) {
    return;
  }
  const api = mwApi("hotCatCheck/2.0");
  const checkCategoriesRegExp = /{{[Cc]heck[ _]categories[^{}]*}}/g;
  const selfName = "([[MediaWiki:Gadget-HotCat-check.js|Script]]): ";
  const storageItemName = "checkCat";
  const storageItem = mw.storage.get(storageItemName);
  const createjIcon = (iconClass) => {
    return $("<span>").attr("class", "ui-icon ".concat(iconClass, " ").concat(catcheckInlineIcon)).text(" ");
  };
  const createNotifyArea = (textNode, icon, state) => {
    return $("<div>").addClass("ui-widget").append($("<div>").attr("class", "".concat(state, " ui-corner-all")).css({
      "margin-top": "20px",
      padding: "0.7em"
    }).append($("<p>").append(createjIcon(icon).css("marginRight", "0.3em"), textNode)));
  };
  $("body").one("submit.checkCatListener", "#hotcatCommitForm", function(e) {
    var _self$wpTextbox1$valu;
    if (storageItem === "disabled") {
      return true;
    }
    const self = this;
    const newVal = (_self$wpTextbox1$valu = self.wpTextbox1.value) === null || _self$wpTextbox1$valu === void 0 ? void 0 : _self$wpTextbox1$valu.replace(checkCategoriesRegExp, "");
    const dlgButtons = {};
    let $dialogCheckStorage;
    let $permaSaveHint;
    let $textHintNode;
    let $dialog;
    const doRemove = () => {
      self.wpSummary.value = "Removing [[Template:Check categories|{".concat("{Check categories}}]] ".concat(self.wpSummary.value));
      self.wpTextbox1.value = newVal;
    };
    const writeStorage = (val) => {
      mw.storage.set(storageItemName, val, 604800);
    };
    dlgButtons["Yes, Remove"] = function() {
      var _$dialogCheckStorage$;
      doRemove();
      if ((_$dialogCheckStorage$ = $dialogCheckStorage[0]) !== null && _$dialogCheckStorage$ !== void 0 && _$dialogCheckStorage$.checked) {
        writeStorage("auto");
      }
      $(this).dialog("close");
    };
    dlgButtons["No, keep it"] = function() {
      var _$dialogCheckStorage$2;
      if ((_$dialogCheckStorage$2 = $dialogCheckStorage[0]) !== null && _$dialogCheckStorage$2 !== void 0 && _$dialogCheckStorage$2.checked) {
        writeStorage("disabled");
      }
      $(this).dialog("close");
    };
    const _addToJS = function(_e) {
      _e.preventDefault();
      if ($permaSaveHint.hasClass("ui-state-disabled")) {
        return;
      }
      const $el = $(this);
      $el.off("click").text("Please wait.");
      $permaSaveHint.addClass("ui-state-disabled");
      const params = {
        action: "edit",
        title: "User:".concat(mw.config.get("wgUserName"), "/common.js"),
        summary: "".concat(selfName, "Saving HotCat configuration."),
        appendtext: $el.data("addText")
      };
      const editDone = (editStat) => {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          void mw.notify("Unable to save to your common.js using the API\n".concat(editStat.error.code, "\n").concat(editStat.error.info), {
            tag: "hotCatCheck",
            type: "error"
          });
          $el.text("Edit-Error!");
        } else {
          $el.text("Done.");
          $permaSaveHint.fadeOut();
        }
      };
      void api.postWithToken("csrf", params).then(editDone);
    };
    const prompt = () => {
      $dialogCheckStorage = $("<input>").attr({
        type: "checkbox",
        id: "hotCatAutoRemoveCheckCatStorage"
      }).on("change", function() {
        if (this.checked) {
          $permaSaveHint.fadeIn();
        } else {
          $permaSaveHint.fadeOut();
        }
      });
      $textHintNode = $("<ul>");
      $("<li>").append($("<a>").attr("href", "#").text("Disable this feature.").data("addText", "\nwindow.HotCatAutoRemoveCheckCatOptOut = true;").on("click", _addToJS)).appendTo($textHintNode);
      $("<li>").append($("<a>").attr("href", "#").text("Remove {{check categories}} when editing using HotCat without prompting.").data("addText", "\nwindow.HotCatAutoRemoveCheckCat = true;").on("click", _addToJS)).appendTo($textHintNode);
      $permaSaveHint = createNotifyArea($("<span>").text("Save these setting in your common.js: ").append($textHintNode), "ui-icon-info", "ui-state-highlight");
      $dialog = $("<div>").append($("<span>").css({
        "font-size": "2em",
        "line-height": "1.8em"
      }).append($("<span>").text(" {{check categories}} ").css({
        "background-color": "#F8CCB0",
        "text-decoration": "line-through !important",
        display: "inline-block"
      }), $("<span>").text(" ?"))).append("<br>", $dialogCheckStorage, $("<label>").attr("for", "hotCatAutoRemoveCheckCatStorage").text("Don't ask again"), "<br>").append(mw.user.isAnon() ? "" : $permaSaveHint.hide());
      $dialog.dialog({
        modal: true,
        closeOnEscape: true,
        title: "{{check categories}} (−)?",
        width: 450,
        buttons: dlgButtons,
        close: () => {
          const $body = $("body");
          $body.find("#hotcatCommitForm").trigger("submit");
        },
        open() {
          const $buttons = $(this).parent().find(".ui-dialog-buttonpane button");
          $buttons.eq(0).button({
            icons: {
              primary: "ui-icon-circle-check"
            }
          });
          $buttons.eq(1).button({
            icons: {
              primary: "ui-icon-cancel"
            }
          });
        }
      });
    };
    if (newVal !== self.wpTextbox1.value) {
      if (window.HotCatAutoRemoveCheckCat || storageItem === "auto") {
        doRemove();
        return true;
      }
      e.preventDefault();
      prompt();
    }
    return true;
  });
  const $okLink = $("<a>").attr({
    href: "#",
    title: "Categories are OK! Immediately remove the template."
  }).append("<s>").text("{{Check categories}}");
  $okLink.on("click", function(e) {
    e.preventDefault();
    const $el = $(this);
    $el.off("click");
    const doEdit = (result) => {
      if (!result) {
        return;
      }
      $el.text("Doing.");
      const text = result.replace(checkCategoriesRegExp, "");
      if (text === result) {
        $el.text("Template not found!");
        return;
      }
      const params = {
        action: "edit",
        title: mw.config.get("wgPageName"),
        summary: "".concat(selfName, "Categories are checked and OK. You can help [[Category:Media needing category review|reviewing]]!"),
        nocreate: true,
        text
      };
      const editDone = (editStat) => {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          void mw.notify('Unable to remove "Check categories" with the API\n'.concat(editStat.error.code, "\n").concat(editStat.error.info), {
            tag: "hotCatCheck",
            type: "error"
          });
          $el.text("Edit-Error!");
        } else {
          $el.text("Edit Done.");
        }
        const $body = $("body");
        $body.find(".checkcategories").fadeOut();
      };
      $el.text("Doing..");
      void api.postWithToken("csrf", params).then(editDone);
    };
    $el.text("Doing");
    void $.ajax({
      url: mw.config.get("wgScript"),
      data: {
        action: "raw",
        title: mw.config.get("wgPageName").replace(/ /g, "_")
      },
      dataType: "text",
      error: () => {
        $el.text("Error!");
      },
      success: doEdit,
      type: "GET",
      cache: false
    });
  });
  $(function loadHotCatCheck() {
    const $body = $("body");
    $body.find("#catlinks").find("ul:first").append($("<li>").append($okLink));
  });
})();
//! src/HotCat/HotCat.js
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/HotCat/modules/getMessage.ts
var getMessage = (key, ...args) => {
  key = "hotcat-".concat(key);
  return mw.message(key, ...args).plain();
};
//! src/HotCat/modules/messages.ts
var hotCatMessages = () => {
  const {
    wgUserLanguage
  } = mw.config.get();
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(wgUserLanguage)) {
    mw.messages.set({
      "hotcat-messages-cat_removed": "已移除[[Category:$1]]",
      "hotcat-messages-template_removed": "已移除{{[[Category:$1]]}}",
      "hotcat-messages-cat_added": "已添加[[Category:$1]]",
      // $2 is the new key
      "hotcat-messages-cat_keychange": '已設置[[Category:$1]]的新排序字："$2"',
      "hotcat-messages-cat_notFound": "分類“$1”沒有找到",
      "hotcat-messages-cat_exists": "分類“$1”已經存在，沒有添加。",
      "hotcat-messages-cat_resolved": "（重定向[[Category:$1]]已處理）",
      "hotcat-messages-uncat_removed": "已移除{{uncategorized}}",
      // Some text to prefix to the edit summary.
      "hotcat-messages-prefix": "使用[[H:HOTCAT|HotCat]]",
      // Some text to append to the edit summary. Named 'using' for historical reasons. If you prefer
      // to have a marker at the front, use prefix and set this to the empty string.
      "hotcat-messages-using": "",
      "hotcat-messages-multi_change": "$1個分類",
      // Any category in this category is deemed a disambiguation category; i.e., a category that should not contain
      // any items, but that contains links to other categories where stuff should be categorized. If you don't have
      // that concept on your wiki, set it to blank string. Use blanks, not underscores.
      "hotcat-disambig_category": "",
      // Any category in this category is deemed a (soft) redirect to some other category defined by a link
      // to another non-blacklisted category. If your wiki doesn't have soft category redirects, set this to null.
      // If a soft-redirected category contains more than one link to another non-blacklisted category, it's considered
      // a disambiguation category instead.
      "hotcat-redir_category": "已重定向的分类",
      "hotcat-messages-separator": "; ",
      // $1 is replaced by a number. If your language has several plural forms (c.f. [[:enwiki:Dual (grammatical form)]]),
      // you can set this to an array of strings suitable for passing to mw.language.configPlural().
      // If that function doesn't exist, HotCat will simply fall back to using the last
      // entry in the array.
      // Defaults to '[[' + category_canonical + ':$1]]'. Can be overridden if in the short edit summaries
      // not the standard category name should be used but, say, a shorter namespace alias. $1 is replaced
      // by a category name.
      "hotcat-messages-short_catchange": "$1",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-commit": "儲存",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-ok": "確定",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-cancel": "取消",
      // Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-multi_error": "無法從伺服器取得頁面文字。因此，您的分類變更無法儲存。我們為此不便表示抱歉。",
      // Plural of category_canonical.
      "hotcat-categories": "分類",
      // Names for the search engines
      "hotcat-engine_names-searchindex": "搜尋索引",
      "hotcat-engine_names-pagelist": "頁面列表",
      "hotcat-engine_names-combined": "合併搜尋",
      "hotcat-engine_names-subcat": "子分類",
      "hotcat-engine_names-parentcat": "上層分類",
      // The tooltips for the above links
      "hotcat-tooltips-change": "修改",
      "hotcat-tooltips-remove": "移除",
      "hotcat-tooltips-add": "增加一個新分類",
      "hotcat-tooltips-restore": "復原變更",
      "hotcat-tooltips-undo": "復原變更",
      "hotcat-tooltips-down": "打開以修改並顯示子分類",
      "hotcat-tooltips-up": "打開以修改並顯示上層分類",
      // Tooltip for the "enter multi-mode" link
      "hotcat-multi_tooltip": "修改多個分類"
    });
  } else {
    mw.messages.set({
      "hotcat-messages-cat_removed": "已移除[[Category:$1]]",
      "hotcat-messages-template_removed": "已移除{{[[Category:$1]]}}",
      "hotcat-messages-cat_added": "已添加[[Category:$1]]",
      // $2 is the new key
      "hotcat-messages-cat_keychange": '已设置[[Category:$1]]的新排序字："$2"',
      "hotcat-messages-cat_notFound": "分类“$1”没有找到",
      "hotcat-messages-cat_exists": "分类“$1”已经存在，没有添加。",
      "hotcat-messages-cat_resolved": "（重定向[[Category:$1]]已处理）",
      "hotcat-messages-uncat_removed": "已移除{{uncategorized}}",
      // Some text to prefix to the edit summary.
      "hotcat-messages-prefix": "使用[[H:HOTCAT|HotCat]]",
      // Some text to append to the edit summary. Named 'using' for historical reasons. If you prefer
      // to have a marker at the front, use prefix and set this to the empty string.
      "hotcat-messages-using": "",
      "hotcat-messages-multi_change": "$1个分类",
      // Any category in this category is deemed a disambiguation category; i.e., a category that should not contain
      // any items, but that contains links to other categories where stuff should be categorized. If you don't have
      // that concept on your wiki, set it to blank string. Use blanks, not underscores.
      "hotcat-disambig_category": "",
      // Any category in this category is deemed a (soft) redirect to some other category defined by a link
      // to another non-blacklisted category. If your wiki doesn't have soft category redirects, set this to null.
      // If a soft-redirected category contains more than one link to another non-blacklisted category, it's considered
      // a disambiguation category instead.			'hotcat-redir_category': '已重定向的分类',
      "hotcat-messages-separator": "; ",
      // $1 is replaced by a number. If your language has several plural forms (c.f. [[:enwiki:Dual (grammatical form)]]),
      // you can set this to an array of strings suitable for passing to mw.language.configPlural().
      // If that function doesn't exist, HotCat will simply fall back to using the last
      // entry in the array.
      // Defaults to '[[' + category_canonical + ':$1]]'. Can be overridden if in the short edit summaries
      // not the standard category name should be used but, say, a shorter namespace alias. $1 is replaced
      // by a category name.
      "hotcat-messages-short_catchange": "$1",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-commit": "保存",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-ok": "确定",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-cancel": "取消",
      // Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-multi_error": "无法从服务器取得页面文字。因此，您的分类更改无法保存。我们为此不便表示抱歉。",
      // Plural of category_canonical.
      "hotcat-categories": "分类",
      // Names for the search engines
      "hotcat-engine_names-searchindex": "搜索索引",
      "hotcat-engine_names-pagelist": "页面列表",
      "hotcat-engine_names-combined": "合并搜索",
      "hotcat-engine_names-subcat": "子分类",
      "hotcat-engine_names-parentcat": "上层分类",
      // The tooltips for the above links
      "hotcat-tooltips-change": "修改",
      "hotcat-tooltips-remove": "移除",
      "hotcat-tooltips-add": "增加一个新分类",
      "hotcat-tooltips-restore": "撤销更改",
      "hotcat-tooltips-undo": "撤销更改",
      "hotcat-tooltips-down": "打开以修改并显示子分类",
      "hotcat-tooltips-up": "打开以修改并显示上层分类",
      // Tooltip for the "enter multi-mode" link
      "hotcat-multi_tooltip": "修改多个分类"
    });
  }
};
//! src/HotCat/HotCat.js
hotCatMessages();
(function hotCat() {
  const conf = mw.config.values;
  if (window.HotCat && !window.HotCat.nodeName || conf.wgAction === "edit") {
    return;
  }
  const api = mwApi("HotCat/3.0");
  window.HotCat = {
    // The little modification links displayed after category names. U+2212 is a minus sign; U+2193 and U+2191 are
    // downward and upward pointing arrows. Do not use ↓ and ↑ in the code!
    links: {
      change: "(±)",
      remove: "(−)",
      add: "(+)",
      restore: "(×)",
      undo: "(×)",
      down: "(↓)",
      up: "(↑)"
    },
    changeTag: "HotCat",
    // The HTML content of the "enter multi-mode" link at the front.
    addmulti: "<span>+<sup>+</sup></span>",
    // Return true to disable HotCat.
    disable: () => {
      const ns = conf.wgNamespaceNumber;
      const nsIds = conf.wgNamespaceIds;
      return ns < 0 || // Special pages; Special:Upload is handled differently
      ns === 10 || // Templates
      ns === 828 || // Module (Lua)
      ns === 8 || // MediaWiki
      ns === 6 && !conf.wgArticleId || // Non-existing file pages
      ns === 2 && /\.(js|css)$/.test(conf.wgTitle) || // User scripts
      nsIds && (ns === nsIds.creator || ns === nsIds.timedtext || ns === nsIds.institution);
    },
    // A regexp matching a templates used to mark uncategorized pages, if your wiki does have that.
    // If not, set it to null.
    uncat_regexp: /{{\s*[Uu]ncategorized\s*[^}]*}}\s*(<!--.*?-->\s*)?/g,
    // The images used for the little indication icon. Should not need changing.
    existsYes: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/b/be/P_yes.svg/20px-P_yes.svg.png",
    existsNo: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/4/42/P_no.svg/20px-P_no.svg.png",
    // a list of categories which can be removed by removing a template
    // key: the category without namespace
    // value: A regexp matching the template name, again without namespace
    // If you don't have this at your wiki, or don't want this, set it to an empty object {}.
    template_categories: {},
    // Override the decision of whether HotCat should help users by automatically
    // capitalising the title in the user input text if the wiki has case-sensitive page names.
    // Basically, this will make an API query to check the MediaWiki configuration and HotCat then sets
    // this to true for most wikis, and to false on Wiktionary.
    //
    // You can set this directly if there is a problem with it. For example, Georgian Wikipedia (kawiki),
    // is known to have different capitalisation logic between MediaWiki PHP and JavaScript. As such, automatic
    // case changes in JavaScript by HotCat would be wrong.
    capitalizePageNames: null,
    // If upload_disabled is true, HotCat will not be used on the Upload form.
    upload_disabled: false,
    // Single regular expression matching blacklisted categories that cannot be changed or
    // added using HotCat. For instance /\bstubs?$/ (any category ending with the word "stub"
    // or "stubs"), or /(\bstubs?$)|\bmaintenance\b/ (stub categories and any category with the
    // word "maintenance" in its title.
    blacklist: null,
    // Stuff changeable by users:
    // Background for changed categories in multi-edit mode. Default is a very light salmon pink.
    bg_changed: "#FCA",
    // If true, HotCat will never automatically submit changes. HotCat will only open an edit page with
    // the changes; users must always save explicitly.
    no_autocommit: false,
    // If true, the "category deletion" link "(-)" will never save automatically but always show an
    // edit page where the user has to save the edit manually. Is false by default because that's the
    // traditional behavior. This setting overrides no_autocommit for "(-)" links.
    del_needs_diff: false,
    // Time, in milliseconds, that HotCat waits after a keystroke before making a request to the
    // server to get suggestions.
    suggest_delay: 1e3,
    // Default width, in characters, of the text input field.
    editbox_width: 40,
    // One of the engine_names above, to be used as the default suggestion engine.
    suggestions: "combined",
    // If true, always use the default engine, and never display a selector.
    fixed_search: false,
    // If false, do not display the "up" and "down" links
    use_up_down: true,
    // Default list size
    listSize: 10,
    // If true, single category changes are marked as minor edits. If false, they're not.
    single_minor: true,
    // If true, never add a page to the user's watchlist. If false, pages get added to the watchlist if
    // the user has the "Add pages I edit to my watchlist" or the "Add pages I create to my watchlist"
    // options in his or her preferences set.
    dont_add_to_watchlist: false,
    shortcuts: null,
    addShortcuts: (map) => {
      let _a;
      if (!map) {
        return;
      }
      (_a = window.HotCat).shortcuts || (_a.shortcuts = {});
      for (let k in map) {
        if (!Object.hasOwn(map, k) || typeof k !== "string") {
          continue;
        }
        let v = map[k];
        if (typeof v !== "string") {
          continue;
        }
        k = k.trim();
        v = v.trim();
        if (k.length === 0 || v.length === 0) {
          continue;
        }
        window.HotCat.shortcuts[k] = v;
      }
    }
  };
  const HC = window.HotCat;
  const ua = navigator.userAgent.toLowerCase();
  const is_webkit = /applewebkit\/\d+/.test(ua) && !ua.includes("spoofer");
  let cat_prefix = null;
  let noSuggestions = false;
  const wikiTextBlank = "[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+";
  const wikiTextBlankRE = new RegExp(wikiTextBlank, "g");
  const wikiTextBlankOrBidi = "[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200B\\u200E\\u200F\\u2028-\\u202F\\u205F\\u3000]*";
  const formattedNamespaces = conf.wgFormattedNamespaces;
  const namespaceIds = conf.wgNamespaceIds;
  const autoLocalize = (namespaceNumber, fallback) => {
    const createRegexpStr = (name) => {
      if (!name || name.length === 0) {
        return;
      }
      let regex_name = "";
      for (let i = 0; i < name.length; i++) {
        const initial = name.charAt(i);
        const ll = initial.toLowerCase();
        const ul = initial.toUpperCase();
        regex_name += ll === ul ? initial : "[".concat(ll).concat(ul, "]");
      }
      return regex_name.replace(/([$()*+.?\\^])/g, "\\$1").replace(wikiTextBlankRE, wikiTextBlank);
    };
    fallback = fallback.toLowerCase();
    const canonical = formattedNamespaces[String(namespaceNumber)].toLowerCase();
    let regexp = createRegexpStr(canonical);
    if (fallback && canonical !== fallback) {
      regexp += "|".concat(createRegexpStr(fallback));
    }
    if (namespaceIds) {
      for (const cat_name in namespaceIds) {
        if (typeof cat_name === "string" && cat_name.toLowerCase() !== canonical && cat_name.toLowerCase() !== fallback && namespaceIds[cat_name] === namespaceNumber) {
          regexp += "|".concat(createRegexpStr(cat_name));
        }
      }
    }
    return regexp;
  };
  HC.category_canonical = formattedNamespaces["14"];
  HC.category_regexp = autoLocalize(14, "category");
  if (formattedNamespaces["10"]) {
    HC.template_regexp = autoLocalize(10, "template");
  }
  const make = (arg, literal) => {
    if (!arg) {
      return null;
    }
    return literal ? document.createTextNode(arg) : document.createElement(arg);
  };
  const param = (name, uri) => {
    uri || (uri = document.location.href);
    const re = new RegExp("[&?]".concat(name, "=([^&#]*)"));
    const m = re.exec(uri);
    if (m && m.length > 1) {
      return decodeURIComponent(m[1]);
    }
    return null;
  };
  const title = (href) => {
    if (!href) {
      return null;
    }
    const script = "".concat(conf.wgScript, "?");
    if (href.indexOf(script) === 0 || href.indexOf(conf.wgServer + script) === 0 || conf.wgServer.slice(0, 2) === "//" && href.indexOf(document.location.protocol + conf.wgServer + script) === 0) {
      return param("title", href);
    }
    let prefix = conf.wgArticlePath.replace("$1", "");
    if (href.indexOf(prefix)) {
      prefix = conf.wgServer + prefix;
    }
    if (href.indexOf(prefix) && prefix.slice(0, 2) === "//") {
      prefix = document.location.protocol + prefix;
    }
    if (href.indexOf(prefix) === 0) {
      return decodeURIComponent(href.slice(prefix.length));
    }
    return null;
  };
  const hasClass = ({
    className
  }, name) => {
    return " ".concat(className, " ").includes(" ".concat(name, " "));
  };
  const capitalize = (str) => {
    if (!str || str.length === 0) {
      return str;
    }
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };
  const wikiPagePath = (pageName) => {
    return conf.wgArticlePath.replace("$1", encodeURIComponent(pageName).replace(/%3A/g, ":").replace(/%2F/g, "/"));
  };
  const escapeRE = (str) => {
    return str.replace(/([$()*+.?[\\\]^])/g, "\\$1");
  };
  const substituteFactory = (options) => {
    options || (options = {});
    const lead = options.indicator || "$";
    const indicator = escapeRE(lead);
    const lbrace = escapeRE(options.lbrace || "{");
    const rbrace = escapeRE(options.rbrace || "}");
    const re = new RegExp(
      // $$
      "(?:".concat(indicator, "(").concat(indicator, "))|(?:").concat(indicator, "(\\d+))|(?:").concat(indicator, "(?:").concat(lbrace, "([^").concat(lbrace).concat(rbrace, "]+)").concat(rbrace, "))|(?:").concat(indicator, "(?!(?:[").concat(indicator).concat(lbrace, "]|\\d))(\\S+?)\\b)"),
      "g"
    );
    return (str, map) => {
      if (!map) {
        return str;
      }
      return str.replace(re, (match, prefix, idx, key, alpha) => {
        if (prefix === lead) {
          return lead;
        }
        const k = alpha || key || idx;
        const replacement = typeof map[k] === "function" ? map[k](match, k) : map[k];
        return typeof replacement === "string" ? replacement : replacement || match;
      });
    };
  };
  const replaceShortcuts = (() => {
    const replaceHash = substituteFactory({
      indicator: "#",
      lbrace: "[",
      rbrace: "]"
    });
    return (str, map) => {
      const s = replaceHash(str, map);
      return HC.capitalizePageNames ? capitalize(s) : s;
    };
  })();
  const findCatsRE = new RegExp("\\[\\[".concat(wikiTextBlankOrBidi, "(?:").concat(HC.category_regexp, ")").concat(wikiTextBlankOrBidi, ":[^\\]]+\\]\\]"), "g");
  const replaceByBlanks = (match) => {
    return match.replace(/(\s|\S)/g, " ");
  };
  const find_category = (wikitext, category, once) => {
    let cat_regex = null;
    if (HC.template_categories[category]) {
      cat_regex = new RegExp("\\{\\{".concat(wikiTextBlankOrBidi, "(").concat(HC.template_regexp, "(?=").concat(wikiTextBlankOrBidi, ":))?").concat(wikiTextBlankOrBidi, "(?:").concat(HC.template_categories[category], ")").concat(wikiTextBlankOrBidi, "(\\|.*?)?\\}\\}"), "g");
    } else {
      const cat_name = escapeRE(category);
      const initial = cat_name.slice(0, 1);
      cat_regex = new RegExp("\\[\\[".concat(wikiTextBlankOrBidi, "(").concat(HC.category_regexp, ")").concat(wikiTextBlankOrBidi, ":").concat(wikiTextBlankOrBidi).concat(initial === "\\" || !HC.capitalizePageNames ? initial : "[".concat(initial.toUpperCase()).concat(initial.toLowerCase(), "]")).concat(cat_name.slice(1).replace(wikiTextBlankRE, wikiTextBlank)).concat(wikiTextBlankOrBidi, "(\\|.*?)?\\]\\]"), "g");
    }
    if (once) {
      return cat_regex.exec(wikitext);
    }
    const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
    const copiedtext = wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
    const result = [];
    let curr_match = null;
    while ((curr_match = cat_regex.exec(copiedtext)) !== null) {
      result[result.length] = {
        match: curr_match
      };
    }
    result.re = cat_regex;
    return result;
  };
  let interlanguageRE = null;
  const change_category = (wikitext, toRemove, toAdd, key, is_hidden) => {
    const find_insertionpoint = (_wikitext) => {
      const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
      const copiedtext = _wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
      let index = -1;
      findCatsRE.lastIndex = 0;
      while (findCatsRE.exec(copiedtext) !== null) {
        index = findCatsRE.lastIndex;
      }
      if (index < 0) {
        let match = null;
        interlanguageRE ? match = interlanguageRE.exec(copiedtext) : (
          // Approximation without API: interlanguage links start with 2 to 3 lower case letters, optionally followed by
          // a sequence of groups consisting of a dash followed by one or more lower case letters. Exceptions are "simple"
          // and "tokipona".
          match = /((^|\n\r?)(\[\[\s*(([a-z]{2,3}(-[a-z]+)*)|simple|tokipona)\s*:[^\]]+]]\s*))+$/.exec(copiedtext)
        );
        if (match) {
          ({
            index
          } = match);
        }
        return {
          idx: index,
          onCat: false
        };
      }
      return {
        idx: index,
        onCat: index >= 0
      };
    };
    const summary = [];
    const nameSpace = HC.category_canonical;
    const keyChange = toRemove && toAdd && toRemove === toAdd && toAdd.length > 0;
    let matches;
    let cat_point = -1;
    if (key) {
      key = "|".concat(key);
    }
    if (toRemove && toRemove.length > 0) {
      matches = find_category(wikitext, toRemove);
      if (!matches || matches.length === 0) {
        return {
          text: wikitext,
          summary,
          error: getMessage("messages-cat_notFound", toRemove)
        };
      }
      let before = wikitext.slice(0, Math.max(0, matches[0].match.index));
      let after = wikitext.slice(Math.max(0, matches[0].match.index + matches[0].match[0].length));
      if (matches.length > 1) {
        matches.re.lastIndex = 0;
        after = after.replace(matches.re, "");
      }
      if (toAdd && // nameSpace = matches[ 0 ].match[ 1 ] || nameSpace; Canonical namespace should be always preferred
      key === null) {
        [, , key] = matches[0].match;
      }
      let i = before.length - 1;
      while (i >= 0 && before.charAt(i) !== "\n" && before.slice(i, i + 1).search(/\s/) >= 0) {
        i--;
      }
      let j = 0;
      while (j < after.length && after.charAt(j) !== "\n" && after.slice(j, j + 1).search(/\s/) >= 0) {
        j++;
      }
      if (i >= 0 && before.charAt(i) === "\n" && (after.length === 0 || j < after.length && after.charAt(j) === "\n")) {
        i--;
      }
      before = i >= 0 ? before.slice(0, Math.max(0, i + 1)) : "";
      after = j < after.length ? after.slice(Math.max(0, j)) : "";
      if (before.length > 0 && before.slice(Math.max(0, before.length - 1)).search(/\S/) >= 0 && after.length > 0 && after.slice(0, 1).search(/\S/) >= 0) {
        before += " ";
      }
      cat_point = before.length;
      if (cat_point === 0 && after.length > 0 && after.slice(0, 1) === "\n") {
        after = after.slice(1);
      }
      wikitext = before + after;
      if (!keyChange) {
        if (HC.template_categories[toRemove]) {
          summary[summary.length] = getMessage("messages-template_removed", toRemove);
        } else {
          summary[summary.length] = getMessage("messages-cat_removed", toRemove);
        }
      }
    }
    if (toAdd && toAdd.length > 0) {
      matches = find_category(wikitext, toAdd);
      if (matches && matches.length > 0) {
        return {
          text: wikitext,
          summary,
          error: getMessage("messages-cat_exists", toAdd)
        };
      }
      let onCat = false;
      if (cat_point < 0) {
        const point = find_insertionpoint(wikitext);
        cat_point = point.idx;
        ({
          onCat
        } = point);
      } else {
        onCat = true;
      }
      const newcatstring = "[[".concat(nameSpace, ":").concat(toAdd).concat(key || "", "]]");
      if (cat_point >= 0) {
        const suffix = wikitext.slice(Math.max(0, cat_point));
        wikitext = wikitext.slice(0, Math.max(0, cat_point)) + (cat_point > 0 ? "\n" : "") + newcatstring + (onCat ? "" : "\n");
        wikitext += suffix.length > 0 && suffix.slice(0, 1) !== "\n" ? "\n".concat(suffix) : suffix;
      } else {
        if (wikitext.length > 0 && wikitext.slice(-1, wikitext.length - 1 + 1) !== "\n") {
          wikitext += "\n";
        }
        wikitext += (wikitext.length > 0 ? "\n" : "") + newcatstring;
      }
      if (keyChange) {
        let k = key || "";
        if (k.length > 0) {
          k = k.slice(1);
        }
        summary[summary.length] = getMessage("messages-cat_keychange", toAdd, k);
      } else {
        summary[summary.length] = getMessage("messages-cat_added", toAdd);
      }
      if (HC.uncat_regexp && !is_hidden) {
        const txt = wikitext.replace(HC.uncat_regexp, "");
        if (txt.length !== wikitext.length) {
          wikitext = txt;
          summary[summary.length] = getMessage("messages-uncat_removed");
        }
      }
    }
    return {
      text: wikitext,
      summary,
      error: null
    };
  };
  const evtKeys = ({
    ctrlKey,
    metaKey,
    shiftKey
  }) => {
    let code = 0;
    if (ctrlKey) {
      if (ctrlKey || metaKey) {
        code || (code = 1);
      }
      if (shiftKey) {
        code || (code = 2);
      }
    }
    return code;
  };
  const evtKill = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
    return false;
  };
  let catLine = null;
  let onUpload = false;
  let editors = [];
  let commitButton = null;
  let commitForm = null;
  let multiSpan = null;
  let pageText = null;
  let pageTime = null;
  let pageWatched = false;
  let watchCreate = false;
  let watchEdit = false;
  let minorEdits = false;
  let editToken = null;
  let is_rtl = false;
  let serverTime = null;
  let lastRevId = null;
  let pageTextRevId = null;
  let conflictingUser = null;
  let newDOM = false;
  const UNCHANGED = 0;
  const OPEN = 1;
  const CHANGE_PENDING = 2;
  const CHANGED = 3;
  const DELETED = 4;
  const setPage = (data) => {
    let startTime = null;
    if (data && data.query) {
      if (data.query.pages) {
        const [page] = data.query.pages;
        if (page) {
          if (page.revisions && page.revisions.length > 0) {
            pageText = page.revisions[0].slots["main"].content;
            if (page.revisions[0].timestamp) {
              pageTime = page.revisions[0].timestamp.replace(/\D/g, "");
            }
            if (page.revisions[0].revid) {
              pageTextRevId = page.revisions[0].revid;
            }
            if (page.revisions.length > 1) {
              conflictingUser = page.revisions[1].user;
            }
          }
          if (page.lastrevid) {
            lastRevId = page.lastrevid;
          }
          if (page.starttimestamp) {
            startTime = page.starttimestamp.replace(/\D/g, "");
          }
          pageWatched = typeof page.watched === "string";
          if (data.query.tokens) {
            editToken = data.query.tokens.csrftoken;
          }
          if (page.langlinks && (!data["query-continue"] || !data["query-continue"].langlinks)) {
            let re = "";
            for (let i = 0; i < page.langlinks.length; i++) {
              re += (i > 0 ? "|" : "") + page.langlinks[i].lang.replace(/([$()*+.?\\^])/g, "\\$1");
            }
            if (re.length > 0) {
              interlanguageRE = new RegExp("((^|\\n\\r?)(\\[\\[\\s*(".concat(re, ")\\s*:[^\\]]+\\]\\]\\s*))+$"));
            }
          }
        }
      }
      if (data.query.general) {
        if (data.query.general.time && !startTime) {
          startTime = data.query.general.time.replace(/\D/g, "");
        }
        if (HC.capitalizePageNames === null) {
          HC.capitalizePageNames = data.query.general.case === "first-letter";
        }
      }
      serverTime = startTime;
      if (data.query.userinfo && data.query.userinfo.options) {
        watchCreate = !HC.dont_add_to_watchlist && data.query.userinfo.options.watchcreations === "1";
        watchEdit = !HC.dont_add_to_watchlist && data.query.userinfo.options.watchdefault === "1";
        minorEdits = data.query.userinfo.options.minordefault === 1;
        if (minorEdits) {
          HC.single_minor = true;
        }
      }
    }
  };
  let saveInProgress = false;
  const initiateEdit = (doEdit, failure) => {
    if (saveInProgress) {
      return;
    }
    saveInProgress = true;
    let oldButtonState;
    if (commitButton) {
      oldButtonState = commitButton.disabled;
      commitButton.disabled = true;
    }
    const fail = function(...args) {
      saveInProgress = false;
      if (commitButton) {
        commitButton.disabled = oldButtonState;
      }
      failure.apply(this, args);
    };
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      rawcontinue: "",
      titles: conf.wgPageName,
      prop: ["info", "revisions", "langlinks"],
      inprop: "watched",
      rvprop: ["content", "timestamp", "ids", "user"],
      rvslots: "main",
      rvlimit: "2",
      rvdir: "newer",
      rvstartid: conf.wgCurRevisionId,
      lllimit: "500",
      meta: ["siteinfo", "userinfo", "tokens"],
      type: "csrf",
      uiprop: ["options"]
    };
    api.get(params).done((data) => {
      setPage(data);
      doEdit(fail);
    }).fail(({
      status,
      statusText
    }) => {
      fail("".concat(status, " ").concat(statusText));
    });
  };
  const multiChangeMsg = (count) => {
    return getMessage("messages-multi_change", String(count));
  };
  const currentTimestamp = () => {
    const now = /* @__PURE__ */ new Date();
    let ts = String(now.getUTCFullYear());
    const two = (s) => {
      return s.slice(-2);
    };
    ts += two("0".concat(now.getUTCMonth() + 1)) + two("0".concat(now.getUTCDate())) + two("00".concat(now.getUTCHours())) + two("00".concat(now.getUTCMinutes())) + two("00".concat(now.getUTCSeconds()));
    return ts;
  };
  const performChanges = (failure, singleEditor) => {
    if (pageText === null) {
      failure(getMessage("messages-multi_error"));
      return;
    }
    let action;
    const selfEditConflict = (lastRevId !== null && lastRevId !== conf.wgCurRevisionId || pageTextRevId !== null && pageTextRevId !== conf.wgCurRevisionId) && conflictingUser && conflictingUser === conf.wgUserName;
    if (singleEditor && !singleEditor.noCommit && !HC.no_autocommit && editToken && !selfEditConflict) {
      commitForm.wpEditToken.value = editToken;
      action = commitForm.wpDiff;
      if (action) {
        action.value = "wpSave";
        action.name = action.value;
      }
    } else {
      action = commitForm.wpSave;
      if (action) {
        action.value = "wpDiff";
        action.name = action.value;
      }
    }
    let result = {
      text: pageText
    };
    const changed = [];
    const added = [];
    const deleted = [];
    const toEdit = singleEditor ? [singleEditor] : editors;
    let edit;
    let i;
    let error = null;
    let changes = 0;
    for (i = 0; i < toEdit.length; i++) {
      edit = toEdit[i];
      if (edit.state === CHANGED) {
        result = change_category(result.text, edit.originalCategory, edit.currentCategory, edit.currentKey, edit.currentHidden);
        if (!result.error) {
          changes++;
          if (!edit.originalCategory || edit.originalCategory.length === 0) {
            added[added.length] = edit.currentCategory;
          } else {
            changed[changed.length] = {
              from: edit.originalCategory,
              to: edit.currentCategory
            };
          }
        } else if (error === null) {
          ({
            error
          } = result);
        }
      } else if (edit.state === DELETED && edit.originalCategory && edit.originalCategory.length > 0) {
        result = change_category(result.text, edit.originalCategory, null, null, false);
        if (!result.error) {
          changes++;
          deleted[deleted.length] = edit.originalCategory;
        } else if (error === null) {
          ({
            error
          } = result);
        }
      }
    }
    if (error !== null) {
      action = commitForm.wpSave;
      if (action) {
        action.value = "wpDiff";
        action.name = action.value;
      }
    }
    commitForm.wpMinoredit.checked = minorEdits;
    commitForm.wpWatchthis.checked = !conf.wgArticleId && watchCreate || watchEdit || pageWatched;
    if (conf.wgArticleId || !!singleEditor) {
      if (action && action.value === "wpSave") {
        if (HC.changeTag) {
          commitForm.wpChangeTags.value = HC.changeTag;
        }
      } else {
        commitForm.wpAutoSummary.value = HC.changeTag;
      }
      if (changes === 1) {
        if (result.summary && result.summary.length > 0) {
          commitForm.wpSummary.value = (HC.changeTag ? "" : getMessage("messages-prefix")) + result.summary.join(getMessage("messages-separator")) + (HC.changeTag ? "" : getMessage("messages-using"));
        }
        commitForm.wpMinoredit.checked = HC.single_minor || minorEdits;
      } else if (changes) {
        let summary = [];
        const shortSummary = [];
        for (i = 0; i < deleted.length; i++) {
          summary[summary.length] = "−".concat(getMessage("messages-short_catchange", deleted[i]));
        }
        if (deleted.length === 1) {
          shortSummary[shortSummary.length] = "−".concat(getMessage("messages-short_catchange", deleted[0]));
        } else if (deleted.length > 0) {
          shortSummary[shortSummary.length] = "− ".concat(multiChangeMsg(deleted.length));
        }
        for (i = 0; i < added.length; i++) {
          summary[summary.length] = "+".concat(getMessage("messages-short_catchange", added[i]));
        }
        if (added.length === 1) {
          shortSummary[shortSummary.length] = "+".concat(getMessage("messages-short_catchange", added[0]));
        } else if (added.length > 0) {
          shortSummary[shortSummary.length] = "+ ".concat(multiChangeMsg(added.length));
        }
        const arrow = is_rtl ? "←" : "→";
        for (i = 0; i < changed.length; i++) {
          if (changed[i].from === changed[i].to) {
            summary[summary.length] = "±".concat(getMessage("messages-short_catchange", changed[i].from));
          } else {
            summary[summary.length] = "±".concat(getMessage("messages-short_catchange", changed[i].from)).concat(arrow).concat(getMessage("messages-short_catchange", changed[i].to));
          }
        }
        if (changed.length === 1) {
          if (changed[0].from === changed[0].to) {
            shortSummary[shortSummary.length] = "±".concat(getMessage("messages-short_catchange", changed[0].from));
          } else {
            shortSummary[shortSummary.length] = "±".concat(getMessage("messages-short_catchange", changed[0].from)).concat(arrow).concat(getMessage("messages-short_catchange", changed[0].to));
          }
        } else if (changed.length > 0) {
          shortSummary[shortSummary.length] = "± ".concat(multiChangeMsg(changed.length));
        }
        if (summary.length > 0) {
          summary = summary.join(getMessage("messages-separator"));
          if (summary.length > 200 - (HC.changeTag ? "" : getMessage("messages-prefix")).length - (HC.changeTag ? "" : getMessage("messages-using")).length) {
            summary = shortSummary.join(getMessage("messages-separator"));
          }
          commitForm.wpSummary.value = (HC.changeTag ? "" : getMessage("messages-prefix")) + summary + (HC.changeTag ? "" : getMessage("messages-using"));
        }
      }
    }
    commitForm.wpTextbox1.value = result.text;
    commitForm.wpStarttime.value = serverTime || currentTimestamp();
    commitForm.wpEdittime.value = pageTime || commitForm.wpStarttime.value;
    if (selfEditConflict) {
      commitForm.oldid.value = String(pageTextRevId || conf.wgCurRevisionId);
    }
    commitForm.hcCommit.click();
  };
  const resolveOne = (page, toResolve) => {
    const cats = page.categories;
    const {
      links
    } = page;
    let is_dab = false;
    let is_redir = typeof page.redirect === "string";
    let i;
    const is_hidden = page.categoryinfo && typeof page.categoryinfo.hidden === "string";
    const is_missing = typeof page.missing === "string";
    for (i = 0; i < toResolve.length; i++) {
      if (i && toResolve[i].dabInputCleaned !== page.title.slice(Math.max(0, page.title.indexOf(":") + 1))) {
        continue;
      }
      toResolve[i].currentHidden = is_hidden;
      toResolve[i].inputExists = !is_missing;
      toResolve[i].icon.src = is_missing ? HC.existsNo : HC.existsYes;
    }
    if (is_missing) {
      return;
    }
    if (!is_redir && cats && (getMessage("disambig_category") || getMessage("redir_category"))) {
      var _iterator = _createForOfIteratorHelper(cats), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const cat_ = _step.value;
          let cat = cat_.title;
          if (cat) {
            cat = cat.slice(Math.max(0, cat.indexOf(":") + 1)).replace(/_/g, " ");
            if (cat === getMessage("disambig_category")) {
              is_dab = true;
              break;
            } else if (cat === getMessage("redir_category")) {
              is_redir = true;
              break;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (!is_redir && !is_dab) {
      return;
    }
    if (!links || links.length === 0) {
      return;
    }
    const titles = [];
    for (i = 0; i < links.length; i++) {
      if (
        // Category namespace -- always true since we ask only for the category links
        links[i].ns === 14 && // Name not empty
        links[i].title && links[i].title.length > 0
      ) {
        let match = links[i].title;
        match = match.slice(Math.max(0, match.indexOf(":") + 1));
        if (!HC.blacklist || !HC.blacklist.test(match)) {
          titles[titles.length] = match;
        }
      }
    }
    if (titles.length === 0) {
      return;
    }
    for (i = 0; i < toResolve.length; i++) {
      if (i && toResolve[i].dabInputCleaned !== page.title.slice(Math.max(0, page.title.indexOf(":") + 1))) {
        continue;
      }
      toResolve[i].inputExists = true;
      toResolve[i].icon.src = HC.existsYes;
      if (titles.length > 1) {
        toResolve[i].dab = titles;
      } else {
        toResolve[i].text.value = titles[0] + (toResolve[i].currentKey === null ? "" : "|".concat(toResolve[i].currentKey));
      }
    }
  };
  const resolveRedirects = (toResolve, params) => {
    if (!params || !params.query || !params.query.pages) {
      return;
    }
    for (const p in params.query.pages) {
      if (!Object.hasOwn(params.query.pages, p)) {
        continue;
      }
      resolveOne(params.query.pages[p], toResolve);
    }
  };
  const resolveMulti = (toResolve, callback) => {
    let i;
    for (i = 0; i < toResolve.length; i++) {
      toResolve[i].dab = null;
      toResolve[i].dabInput = toResolve[i].lastInput;
    }
    if (noSuggestions) {
      callback(toResolve);
      return;
    }
    const params = {
      action: "query",
      format: "json",
      prop: "info|links|categories|categoryinfo",
      plnamespace: "14",
      pllimit: toResolve.length * 10,
      cllimit: toResolve.length * 10
    };
    const titles = [];
    for (i = 0; i < toResolve.length; i++) {
      let v = toResolve[i].dabInput;
      v = replaceShortcuts(v, HC.shortcuts);
      toResolve[i].dabInputCleaned = v;
      titles[titles.length] = "Category:".concat(v);
    }
    params.titles = titles.join("|");
    api.get(params).done((json) => {
      resolveRedirects(toResolve, json);
      callback(toResolve);
    }).fail((req) => {
      if (!req) {
        noSuggestions = true;
      }
      callback(toResolve);
    });
  };
  const makeActive = (which) => {
    if (which.is_active) {
      return;
    }
    for (var _i = 0, _editors = editors; _i < _editors.length; _i++) {
      const editor = _editors[_i];
      if (editor !== which) {
        editor.inactivate();
      }
    }
    which.is_active = true;
    if (which.dab) {
      showDab(which);
    } else {
      const expectedInput = which.lastRealInput || which.lastInput || "";
      const actualValue = which.text.value || "";
      if (expectedInput.length === 0 && actualValue.length > 0 || expectedInput.length > 0 && actualValue.indexOf(expectedInput)) {
        which.showsList = false;
        const v = actualValue.split("|");
        [which.lastInput] = v;
        which.lastRealInput = which.lastInput;
        if (v.length > 1) {
          [, which.currentKey] = v;
        }
        if (which.lastSelection) {
          which.lastSelection = {
            start: v[0].length,
            end: v[0].length
          };
        }
      }
      if (which.showsList) {
        which.displayList();
      }
      if (which.lastSelection) {
        setTimeout(() => {
          which.setSelection(which.lastSelection.start, which.lastSelection.end);
        }, 0);
      }
    }
  };
  const showDab = (which) => {
    if (which.is_active) {
      which.showSuggestions(which.dab, false, null, null);
      which.dab = null;
    } else {
      makeActive(which);
    }
  };
  const multiSubmit = () => {
    const toResolve = [];
    for (var _i2 = 0, _editors2 = editors; _i2 < _editors2.length; _i2++) {
      const editor = _editors2[_i2];
      if (editor.state === CHANGE_PENDING || editor.state === OPEN) {
        toResolve[toResolve.length] = editor;
      }
    }
    if (toResolve.length === 0) {
      initiateEdit((failure) => {
        performChanges(failure);
      }, (msg) => {
        mw.notify(msg, {
          tag: "hotCat"
        });
      });
      return;
    }
    resolveMulti(toResolve, (resolved) => {
      let firstDab = null;
      let dontChange = false;
      var _iterator2 = _createForOfIteratorHelper(resolved), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const element = _step2.value;
          if (element.lastInput === element.dabInput) {
            if (element.dab) {
              if (!firstDab) {
                firstDab = element;
              }
            } else if (element.acceptCheck(true)) {
              element.commit();
            }
          } else {
            dontChange = true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (firstDab) {
        showDab(firstDab);
      } else if (!dontChange) {
        initiateEdit((failure) => {
          performChanges(failure);
        }, (msg) => {
          mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    });
  };
  const setMultiInput = () => {
    if (commitButton || onUpload) {
      return;
    }
    commitButton = make("input");
    commitButton.type = "button";
    commitButton.value = getMessage("messages-commit");
    commitButton.addEventListener("click", multiSubmit);
    if (multiSpan) {
      multiSpan.parentNode.replaceChild(commitButton, multiSpan);
    } else {
      catLine.append(commitButton);
    }
  };
  const checkMultiInput = () => {
    if (!commitButton) {
      return;
    }
    let hasChanges = false;
    for (var _i3 = 0, _editors3 = editors; _i3 < _editors3.length; _i3++) {
      const editor = _editors3[_i3];
      if (editor.state !== UNCHANGED) {
        hasChanges = true;
        break;
      }
    }
    commitButton.disabled = !hasChanges;
  };
  const suggestionEngines = {
    opensearch: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=opensearch&namespace=14&limit=30&search=Category:$1"),
      // $1 = search term
      // Function to convert result of uri into an array of category names
      handler: (queryResult, queryKey) => {
        if (queryResult && queryResult.length >= 2) {
          const key = queryResult[0].slice(Math.max(0, queryResult[0].indexOf(":") + 1));
          const [, titles] = queryResult;
          let exists = false;
          if (!cat_prefix) {
            cat_prefix = new RegExp("^(".concat(HC.category_regexp, "):"));
          }
          for (let i = 0; i < titles.length; i++) {
            cat_prefix.lastIndex = 0;
            const m = cat_prefix.exec(titles[i]);
            if (m && m.length > 1) {
              titles[i] = titles[i].slice(Math.max(0, titles[i].indexOf(":") + 1));
              if (key === titles[i]) {
                exists = true;
              }
            } else {
              titles.splice(i, 1);
              i--;
            }
          }
          titles.exists = exists;
          if (queryKey !== key) {
            titles.normalized = key;
          }
          return titles;
        }
        return null;
      }
    },
    internalsearch: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&list=allpages&apnamespace=14&aplimit=30&apfrom=$1&apprefix=$1"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.allpages) {
          const titles = queryResult.query.allpages;
          for (let i = 0; i < titles.length; i++) {
            titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
          }
          return titles;
        }
        return null;
      }
    },
    exists: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&prop=info&titles=Category:$1"),
      handler: (queryResult, queryKey) => {
        if (queryResult && queryResult.query && queryResult.query.pages && !queryResult.query.pages[-1]) {
          for (const p in queryResult.query.pages) {
            if (!Object.hasOwn(queryResult.query.pages, p)) {
              continue;
            }
            let _title = queryResult.query.pages[p].title;
            _title = _title.slice(Math.max(0, _title.indexOf(":") + 1));
            const titles = [_title];
            titles.exists = true;
            if (queryKey !== _title) {
              titles.normalized = _title;
            }
            return titles;
          }
        }
        return null;
      }
    },
    subcategories: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&list=categorymembers&cmtype=subcat&cmlimit=max&cmtitle=Category:$1"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.categorymembers) {
          const titles = queryResult.query.categorymembers;
          for (let i = 0; i < titles.length; i++) {
            titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
          }
          return titles;
        }
        return null;
      }
    },
    parentcategories: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&prop=categories&titles=Category:$1&cllimit=max"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.pages) {
          for (const p in queryResult.query.pages) {
            if (queryResult.query.pages[p].categories) {
              const titles = queryResult.query.pages[p].categories;
              for (let i = 0; i < titles.length; i++) {
                titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
              }
              return titles;
            }
          }
        }
        return null;
      }
    }
  };
  const suggestionConfigs = {
    searchindex: {
      name: "Search index",
      engines: ["opensearch"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    pagelist: {
      name: "Page list",
      engines: ["internalsearch", "exists"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    combined: {
      name: "Combined search",
      engines: ["opensearch", "internalsearch"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    subcat: {
      name: "Subcategories",
      engines: ["subcategories"],
      cache: {},
      show: true,
      temp: true,
      noCompletion: true
    },
    parentcat: {
      name: "Parent categories",
      engines: ["parentcategories"],
      cache: {},
      show: true,
      temp: true,
      noCompletion: true
    }
  };
  const BS = 8;
  const TAB = 9;
  const RET = 13;
  const ESC = 27;
  const SPACE = 32;
  const PGUP = 33;
  const PGDOWN = 34;
  const UP = 38;
  const DOWN = 40;
  const DEL = 46;
  const IME = 229;
  class CategoryEditor {
    constructor(...args) {
      this.initialize(...args);
    }
    initialize(line, span, after, key, is_hidden) {
      if (span) {
        if (is_rtl) {
          span.dir = "rtl";
        }
        this.isAddCategory = false;
        this.catLink = span.firstChild;
        this.originalCategory = after;
        this.originalKey = key && key.length > 1 ? key.slice(1) : null;
        this.originalExists = !hasClass(this.catLink, "new");
        this.makeLinkSpan();
        if (!this.originalExists && this.upDownLinks) {
          this.upDownLinks.style.display = "none";
        }
        span.append(this.linkSpan);
      } else {
        this.isAddCategory = true;
        this.originalCategory = "";
        this.originalKey = null;
        this.originalExists = false;
        if (!newDOM) {
          span = make("span");
          span.className = "noprint";
          if (key) {
            span.append(make(" | ", true));
            if (after) {
              after.parentNode.insertBefore(span, after.nextSibling);
              after = after.nextSibling;
            } else if (line) {
              line.append(span);
            }
          } else if (line && line.firstChild) {
            span.append(make(" ", true));
            line.append(span);
          }
        }
        this.linkSpan = make("span");
        this.linkSpan.className = "noprint nopopups hotcatlink";
        const link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.open.bind(this));
        link.append(make(HC.links.add, true));
        link.title = getMessage("tooltips-add");
        this.linkSpan.append(link);
        span = make(newDOM ? "li" : "span");
        span.className = "noprint";
        if (is_rtl) {
          span.dir = "rtl";
        }
        span.append(this.linkSpan);
        if (after) {
          after.parentNode.insertBefore(span, after.nextSibling);
        } else if (line) {
          line.append(span);
        }
        this.normalLinks = null;
        this.undelLink = null;
        this.catLink = null;
      }
      this.originalHidden = is_hidden;
      this.line = line;
      this.engine = HC.suggestions;
      this.span = span;
      this.currentCategory = this.originalCategory;
      this.currentExists = this.originalExists;
      this.currentHidden = this.originalHidden;
      this.currentKey = this.originalKey;
      this.state = UNCHANGED;
      this.lastSavedState = UNCHANGED;
      this.lastSavedCategory = this.originalCategory;
      this.lastSavedKey = this.originalKey;
      this.lastSavedExists = this.originalExists;
      this.lastSavedHidden = this.originalHidden;
      if (this.catLink && this.currentKey) {
        this.catLink.title = this.currentKey;
      }
      editors[editors.length] = this;
    }
    makeLinkSpan() {
      this.normalLinks = make("span");
      let link = null;
      if (this.originalCategory && this.originalCategory.length > 0) {
        link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.remove.bind(this));
        link.append(make(HC.links.remove, true));
        link.title = getMessage("tooltips-remove");
        this.normalLinks.append(make(" ", true));
        this.normalLinks.append(link);
      }
      if (!HC.template_categories[this.originalCategory]) {
        link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.open.bind(this));
        link.append(make(HC.links.change, true));
        link.title = getMessage("tooltips-change");
        this.normalLinks.append(make(" ", true));
        this.normalLinks.append(link);
        if (!noSuggestions && HC.use_up_down) {
          this.upDownLinks = make("span");
          link = make("a");
          link.href = "#catlinks";
          link.addEventListener("click", this.down.bind(this));
          link.append(make(HC.links.down, true));
          link.title = getMessage("tooltips-down");
          this.upDownLinks.append(make(" ", true));
          this.upDownLinks.append(link);
          link = make("a");
          link.href = "#catlinks";
          link.addEventListener("click", this.up.bind(this));
          link.append(make(HC.links.up, true));
          link.title = getMessage("tooltips-up");
          this.upDownLinks.append(make(" ", true));
          this.upDownLinks.append(link);
          this.normalLinks.append(this.upDownLinks);
        }
      }
      this.linkSpan = make("span");
      this.linkSpan.className = "noprint nopopups hotcatlink";
      this.linkSpan.append(this.normalLinks);
      this.undelLink = make("span");
      this.undelLink.className = "nopopups hotcatlink";
      this.undelLink.style.display = "none";
      link = make("a");
      link.href = "#catlinks";
      link.addEventListener("click", this.restore.bind(this));
      link.append(make(HC.links.restore, true));
      link.title = getMessage("tooltips-restore");
      this.undelLink.append(make(" ", true));
      this.undelLink.append(link);
      this.linkSpan.append(this.undelLink);
    }
    invokeSuggestions(dont_autocomplete) {
      if (this.engine && suggestionConfigs[this.engine] && suggestionConfigs[this.engine].temp && !dont_autocomplete) {
        this.engine = HC.suggestions;
      }
      this.state = CHANGE_PENDING;
      const self = this;
      setTimeout(() => {
        self.textchange(dont_autocomplete);
      }, HC.suggest_delay);
    }
    makeForm() {
      const form = make("form");
      form.method = "POST";
      form.addEventListener("submit", this.accept.bind(this));
      this.form = form;
      const self = this;
      const text = make("input");
      text.type = "text";
      text.size = HC.editbox_width;
      if (!noSuggestions) {
        text.addEventListener("keyup", (event) => {
          const key = event.key || 0;
          if (self.ime && self.lastKey === IME && !self.usesComposition && (key === TAB || key === RET || key === ESC || key === SPACE)) {
            self.ime = false;
          }
          if (self.ime) {
            return true;
          }
          if (key === UP || key === DOWN || key === PGUP || key === PGDOWN) {
            if (self.keyCount === 0) {
              return self.processKey(event);
            }
          } else {
            if (key === ESC && self.lastKey !== IME && !self.resetKeySelection()) {
              self.cancel();
              return;
            }
            self.invokeSuggestions(key === BS || key === DEL || key === ESC);
          }
          return true;
        });
        text.addEventListener("keydown", (event) => {
          const key = event.key || 0;
          self.lastKey = key;
          self.keyCount = 0;
          if (!self.ime && key === IME && !self.usesComposition) {
            self.ime = true;
          } else if (self.ime && key !== IME && !(key >= 16 && key <= 20 || key >= 91 && key <= 93 || key === 144)) {
            self.ime = false;
          }
          if (self.ime) {
            return true;
          }
          if (key === RET) {
            return self.accept(event);
          }
          return key === ESC ? evtKill(event) : true;
        });
        text.addEventListener("keypress", (event) => {
          self.keyCount++;
          return self.processKey(event);
        });
        $(text).on("focus", () => {
          makeActive(self);
        });
        $(text).on(text.onbeforedeactivate !== void 0 && text.createTextRange ? "beforedeactivate" : "blur", this.saveView.bind(this));
        try {
          $(text).on("compositionstart", () => {
            self.lastKey = IME;
            self.usesComposition = true;
            self.ime = true;
          });
          $(text).on("compositionend", () => {
            self.lastKey = IME;
            self.usesComposition = true;
            self.ime = false;
          });
          $(text).on("textInput", () => {
            self.ime = false;
            self.invokeSuggestions(false);
          });
        } catch {
        }
        $(text).on("blur", () => {
          self.usesComposition = false;
          self.ime = false;
        });
      }
      this.text = text;
      this.icon = make("img");
      let list = null;
      if (!noSuggestions) {
        list = make("select");
        list.addEventListener("click", () => {
          if (self.highlightSuggestion(0)) {
            self.textchange(false, true);
          }
        });
        list.addEventListener("dblclick", (e) => {
          if (self.highlightSuggestion(0)) {
            self.accept(e);
          }
        });
        list.addEventListener("change", () => {
          self.highlightSuggestion(0);
          self.text.focus();
        });
        list.addEventListener("keyup", (event) => {
          if (event.key === ESC) {
            self.resetKeySelection();
            self.text.focus();
            setTimeout(() => {
              self.textchange(true);
            }, HC.suggest_delay);
          } else if (event.key === RET) {
            self.accept(event);
          }
        });
        if (!HC.fixed_search) {
          const engineSelector = make("select");
          for (const key in suggestionConfigs) {
            if (suggestionConfigs[key].show) {
              const opt = make("option");
              opt.value = key;
              if (key === this.engine) {
                opt.selected = true;
              }
              opt.append(make(suggestionConfigs[key].name, true));
              engineSelector.append(opt);
            }
          }
          engineSelector.addEventListener("change", () => {
            self.engine = self.engineSelector.options[self.engineSelector.selectedIndex].value;
            self.text.focus();
            self.textchange(true, true);
          });
          this.engineSelector = engineSelector;
        }
      }
      this.list = list;
      const button_label = (_id, defaultText) => {
        const label = null;
        if (!label || !label.data) {
          return defaultText;
        }
        return label.data;
      };
      const OK = make("input");
      OK.type = "button";
      OK.value = button_label("wpOkUploadLbl", getMessage("messages-ok"));
      OK.addEventListener("click", this.accept.bind(this));
      this.ok = OK;
      const cancel = make("input");
      cancel.type = "button";
      cancel.value = button_label("wpCancelUploadLbl", getMessage("messages-cancel"));
      cancel.addEventListener("click", this.cancel.bind(this));
      this.cancelButton = cancel;
      const span = make("span");
      span.className = "hotcatinput";
      span.style.position = "relative";
      span.append(text);
      span.append(make(" ", true));
      span.style.whiteSpace = "nowrap";
      if (list) {
        span.append(list);
      }
      if (this.engineSelector) {
        span.append(this.engineSelector);
      }
      if (!noSuggestions) {
        span.append(this.icon);
      }
      span.append(OK);
      span.append(cancel);
      form.append(span);
      form.style.display = "none";
      this.span.append(form);
    }
    display(event) {
      if (this.isAddCategory && !onUpload && this.line) {
        new CategoryEditor(this.line, null, this.span, true);
      }
      if (!commitButton && !onUpload) {
        for (var _i4 = 0, _editors4 = editors; _i4 < _editors4.length; _i4++) {
          const editor = _editors4[_i4];
          if (editor.state !== UNCHANGED) {
            setMultiInput();
            break;
          }
        }
      }
      if (!this.form) {
        this.makeForm();
      }
      if (this.list) {
        this.list.style.display = "none";
      }
      if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      this.currentCategory = this.lastSavedCategory;
      this.currentExists = this.lastSavedExists;
      this.currentHidden = this.lastSavedHidden;
      this.currentKey = this.lastSavedKey;
      this.icon.src = this.currentExists ? HC.existsYes : HC.existsNo;
      this.text.value = this.currentCategory + (this.currentKey === null ? "" : "|".concat(this.currentKey));
      this.originalState = this.state;
      this.lastInput = this.currentCategory;
      this.inputExists = this.currentExists;
      this.state = this.state === UNCHANGED ? OPEN : CHANGE_PENDING;
      this.lastSelection = {
        start: this.currentCategory.length,
        end: this.currentCategory.length
      };
      this.showsList = false;
      if (this.catLink) {
        this.catLink.style.display = "none";
      }
      this.linkSpan.style.display = "none";
      this.form.style.display = "inline";
      this.ok.disabled = false;
      const result = evtKill(event);
      this.text.focus();
      this.text.readOnly = false;
      checkMultiInput();
      return result;
    }
    show(event, engine, readOnly) {
      const result = this.display(event);
      const v = this.lastSavedCategory;
      if (v.length === 0) {
        return result;
      }
      this.text.readOnly = !!readOnly;
      this.engine = engine;
      this.textchange(false, true);
      return result;
    }
    open(event) {
      return this.show(event, this.engine && suggestionConfigs[this.engine].temp ? HC.suggestions : this.engine);
    }
    down(event) {
      return this.show(event, "subcat", true);
    }
    up(event) {
      return this.show(event, "parentcat");
    }
    cancel() {
      if (this.isAddCategory && !onUpload) {
        this.removeEditor();
        return;
      }
      this.inactivate();
      this.form.style.display = "none";
      if (this.catLink) {
        this.catLink.style.display = "";
      }
      this.linkSpan.style.display = "";
      this.state = this.originalState;
      this.currentCategory = this.lastSavedCategory;
      this.currentKey = this.lastSavedKey;
      this.currentExists = this.lastSavedExists;
      this.currentHidden = this.lastSavedHidden;
      if (this.catLink) {
        this.catLink.title = this.currentKey && this.currentKey.length > 0 ? this.currentKey : "";
      }
      if (this.state === UNCHANGED) {
        if (this.catLink) {
          this.catLink.style.backgroundColor = "transparent";
        }
      } else if (!onUpload) {
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
      }
      checkMultiInput();
    }
    removeEditor() {
      if (!newDOM) {
        const next = this.span.nextSibling;
        if (next) {
          next.remove();
        }
      }
      if (this.span && this.span.parentNode) {
        this.span.remove();
      }
      for (let i = 0; i < editors.length; i++) {
        if (editors[i] === this) {
          editors.splice(i, 1);
          break;
        }
      }
      checkMultiInput();
    }
    rollback(event) {
      this.undoLink.remove();
      this.undoLink = null;
      this.currentCategory = this.originalCategory;
      this.currentKey = this.originalKey;
      this.currentExists = this.originalExists;
      this.currentHidden = this.originalHidden;
      this.lastSavedCategory = this.originalCategory;
      this.lastSavedKey = this.originalKey;
      this.lastSavedExists = this.originalExists;
      this.lastSavedHidden = this.originalHidden;
      this.state = UNCHANGED;
      if (!this.currentCategory || this.currentCategory.length === 0) {
        this.removeEditor();
      } else {
        this.catLink.firstChild.remove();
        this.catLink.append(make(this.currentCategory, true));
        this.catLink.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(this.currentCategory));
        this.catLink.title = this.currentKey || "";
        this.catLink.className = this.currentExists ? "" : "new";
        this.catLink.style.backgroundColor = "transparent";
        if (this.upDownLinks) {
          this.upDownLinks.style.display = this.currentExists ? "" : "none";
        }
        checkMultiInput();
      }
      return evtKill(event);
    }
    inactivate() {
      if (this.list) {
        this.list.style.display = "none";
      }
      if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      this.is_active = false;
    }
    acceptCheck(dontCheck) {
      this.sanitizeInput();
      const value = this.text.value.split("|");
      let key = null;
      if (value.length > 1) {
        [, key] = value;
      }
      let v = value[0].replace(/_/g, " ").trim();
      if (HC.capitalizePageNames) {
        v = capitalize(v);
      }
      this.lastInput = v;
      v = replaceShortcuts(v, HC.shortcuts);
      if (v.length === 0) {
        this.cancel();
        return false;
      }
      if (!dontCheck && (conf.wgNamespaceNumber === 14 && v === conf.wgTitle || HC.blacklist && HC.blacklist.test(v))) {
        this.cancel();
        return false;
      }
      this.currentCategory = v;
      this.currentKey = key;
      this.currentExists = this.inputExists;
      return true;
    }
    accept(event) {
      this.noCommit = evtKeys(event) === 1;
      const result = evtKill(event);
      if (this.acceptCheck()) {
        const toResolve = [this];
        const original = this.currentCategory;
        resolveMulti(toResolve, (resolved) => {
          if (resolved[0].dab) {
            showDab(resolved[0]);
          } else if (resolved[0].acceptCheck(true)) {
            resolved[0].commit(resolved[0].currentCategory === original ? null : getMessage("messages-cat_resolved", original));
          }
        });
      }
      return result;
    }
    close() {
      if (!this.catLink) {
        this.catLink = make("a");
        this.catLink.append(make("foo", true));
        this.catLink.style.display = "none";
        this.span.insertBefore(this.catLink, this.span.firstChild.nextSibling);
      }
      this.catLink.firstChild.remove();
      this.catLink.append(make(this.currentCategory, true));
      this.catLink.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(this.currentCategory));
      this.catLink.className = this.currentExists ? "" : "new";
      this.lastSavedCategory = this.currentCategory;
      this.lastSavedKey = this.currentKey;
      this.lastSavedExists = this.currentExists;
      this.lastSavedHidden = this.currentHidden;
      this.inactivate();
      this.form.style.display = "none";
      this.catLink.title = this.currentKey || "";
      this.catLink.style.display = "";
      if (this.isAddCategory) {
        if (onUpload && this.line) {
          new CategoryEditor(this.line, null, this.span, true);
        }
        this.isAddCategory = false;
        this.linkSpan.remove();
        this.makeLinkSpan();
        this.span.append(this.linkSpan);
      }
      if (!this.undoLink) {
        const span = make("span");
        const link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.rollback.bind(this));
        link.append(make(HC.links.undo, true));
        link.title = getMessage("tooltips-undo");
        span.append(make(" ", true));
        span.append(link);
        this.normalLinks.append(span);
        this.undoLink = span;
        if (!onUpload) {
          try {
            this.catLink.style.backgroundColor = HC.bg_changed;
          } catch {
          }
        }
      }
      if (this.upDownLinks) {
        this.upDownLinks.style.display = this.lastSavedExists ? "" : "none";
      }
      this.linkSpan.style.display = "";
      this.state = CHANGED;
      checkMultiInput();
    }
    commit() {
      if (this.currentCategory === this.originalCategory && (this.currentKey === this.originalKey || this.currentKey === null && this.originalKey.length === 0) || conf.wgNamespaceNumber === 14 && this.currentCategory === conf.wgTitle || HC.blacklist && HC.blacklist.test(this.currentCategory)) {
        this.cancel();
        return;
      }
      this.close();
      if (!commitButton && !onUpload) {
        const self = this;
        initiateEdit((failure) => {
          performChanges(failure, self);
        }, (msg) => {
          mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    }
    remove(event) {
      this.doRemove(evtKeys(event) === 1);
      return evtKill(event);
    }
    doRemove(noCommit) {
      if (this.isAddCategory) {
        this.cancel();
        return;
      }
      if (!commitButton && !onUpload) {
        for (var _i5 = 0, _editors5 = editors; _i5 < _editors5.length; _i5++) {
          const editor = _editors5[_i5];
          if (editor.state !== UNCHANGED) {
            setMultiInput();
            break;
          }
        }
      }
      if (commitButton) {
        this.catLink.title = "";
        this.catLink.style.cssText += "; text-decoration : line-through !important;";
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
        this.originalState = this.state;
        this.state = DELETED;
        this.normalLinks.style.display = "none";
        this.undelLink.style.display = "";
        checkMultiInput();
      } else if (onUpload) {
        this.removeEditor();
      } else {
        this.originalState = this.state;
        this.state = DELETED;
        this.noCommit = noCommit || HC.del_needs_diff;
        const self = this;
        initiateEdit((failure) => {
          performChanges(failure, self);
        }, (msg) => {
          self.state = self.originalState;
          mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    }
    restore(event) {
      this.catLink.title = this.currentKey || "";
      this.catLink.style.textDecoration = "";
      this.state = this.originalState;
      if (this.state === UNCHANGED) {
        this.catLink.style.backgroundColor = "transparent";
      } else {
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
      }
      this.normalLinks.style.display = "";
      this.undelLink.style.display = "none";
      checkMultiInput();
      return evtKill(event);
    }
    // Internal operations
    selectEngine(engineName) {
      if (!this.engineSelector) {
        return;
      }
      for (let i = 0; i < this.engineSelector.options.length; i++) {
        this.engineSelector.options[i].selected = this.engineSelector.options[i].value === engineName;
      }
    }
    sanitizeInput() {
      let v = this.text.value || "";
      v = v.replace(/^(\s|_)+/, "");
      const re = new RegExp("^(".concat(HC.category_regexp, "):"));
      if (re.test(v)) {
        v = v.slice(Math.max(0, v.indexOf(":") + 1)).replace(/^(\s|_)+/, "");
      }
      v = v.replace(/\u200E$/, "");
      if (HC.capitalizePageNames) {
        v = capitalize(v);
      }
      if (this.text.value !== null && this.text.value !== v) {
        this.text.value = v;
      }
    }
    makeCall(url, callbackObj, engine, queryKey, cleanKey) {
      let cb = callbackObj;
      const e = engine;
      const v = queryKey;
      const z = cleanKey;
      const self = this;
      const done = () => {
        cb.callsMade++;
        if (cb.callsMade === cb.nofCalls) {
          if (cb.exists) {
            cb.allTitles.exists = true;
          }
          if (cb.normalized) {
            cb.allTitles.normalized = cb.normalized;
          }
          if (!cb.dontCache && !suggestionConfigs[cb.engineName].cache[z]) {
            suggestionConfigs[cb.engineName].cache[z] = cb.allTitles;
          }
          self.text.readOnly = false;
          if (!cb.cancelled) {
            self.showSuggestions(cb.allTitles, cb.noCompletion, v, cb.engineName);
          }
          if (cb === self.callbackObj) {
            self.callbackObj = null;
          }
          cb = void 0;
        }
      };
      $.getJSON(url, (json) => {
        const titles = e.handler(json, z);
        if (titles && titles.length > 0) {
          cb.allTitles = cb.allTitles === null ? titles : [...cb.allTitles, ...(0, import_ext_gadget2.generateArray)(titles)];
          if (titles.exists) {
            cb.exists = true;
          }
          if (titles.normalized) {
            cb.normalized = titles.normalized;
          }
        }
        done();
      }).fail((req) => {
        if (!req) {
          noSuggestions = true;
        }
        cb.dontCache = true;
        done();
      });
    }
    callbackObj = null;
    textchange(dont_autocomplete, force) {
      makeActive(this);
      this.sanitizeInput();
      let v = this.text.value;
      const pipe = v.indexOf("|");
      if (pipe >= 0) {
        this.currentKey = v.slice(Math.max(0, pipe + 1));
        v = v.slice(0, Math.max(0, pipe));
      } else {
        this.currentKey = null;
      }
      if (this.lastInput === v && !force) {
        return;
      }
      if (this.lastInput !== v) {
        checkMultiInput();
      }
      this.lastInput = v;
      this.lastRealInput = v;
      this.ok.disabled = v.length > 0 && HC.blacklist && HC.blacklist.test(v);
      if (noSuggestions) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (this.icon) {
          this.icon.style.display = "none";
        }
        return;
      }
      if (v.length === 0) {
        this.showSuggestions([]);
        return;
      }
      let cleanKey = v.replace(/[\u200E\u200F\u202A-\u202E]/g, "").replace(wikiTextBlankRE, " ");
      cleanKey = replaceShortcuts(cleanKey, HC.shortcuts);
      cleanKey = cleanKey.trim();
      if (cleanKey.length === 0) {
        this.showSuggestions([]);
        return;
      }
      if (this.callbackObj) {
        this.callbackObj.cancelled = true;
      }
      const engineName = suggestionConfigs[this.engine] ? this.engine : "combined";
      dont_autocomplete || (dont_autocomplete = suggestionConfigs[engineName].noCompletion);
      if (suggestionConfigs[engineName].cache[cleanKey]) {
        this.showSuggestions(suggestionConfigs[engineName].cache[cleanKey], dont_autocomplete, v, engineName);
        return;
      }
      const {
        engines
      } = suggestionConfigs[engineName];
      this.callbackObj = {
        allTitles: null,
        callsMade: 0,
        nofCalls: engines.length,
        noCompletion: dont_autocomplete,
        engineName
      };
      this.makeCalls(engines, this.callbackObj, v, cleanKey);
    }
    makeCalls(engines, cb, v, cleanKey) {
      var _iterator3 = _createForOfIteratorHelper(engines), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const engine_ = _step3.value;
          const engine = suggestionEngines[engine_];
          const url = conf.wgScriptPath + engine.uri.replace(/\$1/g, encodeURIComponent(cleanKey));
          this.makeCall(url, cb, engine, v, cleanKey);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    showSuggestions(titles, dontAutocomplete, queryKey, engineName) {
      this.text.readOnly = false;
      this.dab = null;
      this.showsList = false;
      if (!this.list) {
        return;
      }
      if (noSuggestions) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (this.icon) {
          this.icon.style.display = "none";
        }
        this.inputExists = true;
        return;
      }
      this.engineName = engineName;
      if (engineName) {
        if (!this.engineSelector) {
          this.engineName = null;
        }
      } else if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      if (queryKey) {
        if (this.lastInput.indexOf(queryKey)) {
          return;
        }
        if (this.lastQuery && this.lastInput.indexOf(this.lastQuery) === 0 && this.lastQuery.length > queryKey.length) {
          return;
        }
      }
      this.lastQuery = queryKey;
      let v = this.text.value.split("|");
      const key = v.length > 1 ? "|".concat(v[1]) : "";
      v = HC.capitalizePageNames ? capitalize(v[0]) : v[0];
      let vNormalized = v;
      const knownToExist = titles && titles.exists;
      let i;
      if (titles) {
        if (titles.normalized && v.indexOf(queryKey) === 0) {
          vNormalized = titles.normalized + v.slice(queryKey.length);
        }
        const vLow = vNormalized.toLowerCase();
        if (HC.blacklist) {
          for (i = 0; i < titles.length; i++) {
            if (HC.blacklist.test(titles[i])) {
              titles.splice(i, 1);
              i--;
            }
          }
        }
        titles.sort((a, b) => {
          if (a === b) {
            return 0;
          }
          if (a.indexOf(b) === 0) {
            return 1;
          }
          if (b.indexOf(a) === 0) {
            return -1;
          }
          let prefixMatchA = a.indexOf(vNormalized) === 0 ? 1 : 0;
          let prefixMatchB = b.indexOf(vNormalized) === 0 ? 1 : 0;
          if (prefixMatchA !== prefixMatchB) {
            return prefixMatchB - prefixMatchA;
          }
          const aLow = a.toLowerCase();
          const bLow = b.toLowerCase();
          prefixMatchA = aLow.indexOf(vLow) === 0 ? 1 : 0;
          prefixMatchB = bLow.indexOf(vLow) === 0 ? 1 : 0;
          if (prefixMatchA !== prefixMatchB) {
            return prefixMatchB - prefixMatchA;
          }
          if (a < b) {
            return -1;
          }
          if (b < a) {
            return 1;
          }
          return 0;
        });
        for (i = 0; i < titles.length; i++) {
          if (i + 1 < titles.length && titles[i] === titles[i + 1] || conf.wgNamespaceNumber === 14 && titles[i] === conf.wgTitle) {
            titles.splice(i, 1);
            i--;
          }
        }
      }
      if (!titles || titles.length === 0) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (engineName && suggestionConfigs[engineName] && !suggestionConfigs[engineName].temp) {
          if (this.icon) {
            this.icon.src = HC.existsNo;
          }
          this.inputExists = false;
        }
        return;
      }
      const [firstTitle] = titles;
      const completed = this.autoComplete(firstTitle, v, vNormalized, key, dontAutocomplete);
      const existing = completed || knownToExist || firstTitle === replaceShortcuts(v, HC.shortcuts);
      if (engineName && suggestionConfigs[engineName] && !suggestionConfigs[engineName].temp) {
        this.icon.src = existing ? HC.existsYes : HC.existsNo;
        this.inputExists = existing;
      }
      if (completed) {
        this.lastInput = firstTitle;
        if (titles.length === 1) {
          this.list.style.display = "none";
          if (this.engineSelector) {
            this.engineSelector.style.display = "none";
          }
          return;
        }
      }
      while (this.list.firstChild) {
        this.list.firstChild.remove();
      }
      for (i = 0; i < titles.length; i++) {
        const opt = make("option");
        opt.append(make(titles[i], true));
        opt.selected = completed && i === 0;
        this.list.append(opt);
      }
      this.displayList();
    }
    displayList() {
      this.showsList = true;
      if (!this.is_active) {
        this.list.style.display = "none";
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        return;
      }
      let nofItems = this.list.options.length > HC.listSize ? HC.listSize : this.list.options.length;
      if (nofItems <= 1) {
        nofItems = 2;
      }
      this.list.size = nofItems;
      this.list.style.align = is_rtl ? "right" : "left";
      this.list.style.zIndex = 5;
      this.list.style.position = "absolute";
      const anchor = is_rtl ? "right" : "left";
      let listh = 0;
      if (this.list.style.display === "none") {
        this.list.style.top = "".concat(this.text.offsetTop, "px");
        this.list.style[anchor] = "-10000px";
        this.list.style.display = "";
        listh = this.list.offsetHeight;
        this.list.style.display = "none";
      } else {
        listh = this.list.offsetHeight;
      }
      let maxListHeight = listh;
      if (nofItems < HC.listSize) {
        maxListHeight = listh / nofItems * HC.listSize;
      }
      const viewport = (what) => {
        if (is_webkit && !document.evaluate) {
          return window["inner".concat(what)];
        }
        const s = "client".concat(what);
        if (window.opera) {
          return $("body")[0][s];
        }
        return (document.documentElement ? document.documentElement[s] : 0) || $("body")[0][s] || 0;
      };
      const scroll_offset = (what) => {
        const s = "scroll".concat(what);
        let result = (document.documentElement ? document.documentElement[s] : 0) || $("body")[0][s] || 0;
        if (is_rtl && what === "Left") {
          if (result < 0) {
            result = -result;
          }
          if (!is_webkit) {
            result = scroll_offset("Width") - viewport("Width") - result;
          }
        }
        return result;
      };
      const position = (node) => {
        if (node.getBoundingClientRect) {
          const box = node.getBoundingClientRect();
          return {
            x: Math.round(box.left + scroll_offset("Left")),
            y: Math.round(box.top + scroll_offset("Top"))
          };
        }
        let t = 0;
        let l = 0;
        do {
          t += node.offsetTop || 0;
          l += node.offsetLeft || 0;
          node = node.offsetParent;
        } while (node);
        return {
          x: l,
          y: t
        };
      };
      const textPos = position(this.text);
      const nl = 0;
      let nt = 0;
      let offset = 0;
      const textBoxWidth = this.text.offsetWidth || this.text.clientWidth;
      if (this.engineName) {
        this.engineSelector.style.zIndex = 5;
        this.engineSelector.style.position = "absolute";
        this.engineSelector.style.width = "".concat(textBoxWidth, "px");
        if (this.engineSelector.style.display === "none") {
          this.engineSelector.style[anchor] = "-10000px";
          this.engineSelector.style.top = "0";
          this.engineSelector.style.display = "";
          offset = this.engineSelector.offsetHeight;
          this.engineSelector.style.display = "none";
        } else {
          offset = this.engineSelector.offsetHeight;
        }
        this.engineSelector.style[anchor] = "".concat(nl, "px");
      }
      if (textPos.y < maxListHeight + offset + 1) {
        nt = this.text.offsetHeight + offset + 1;
        if (this.engineName) {
          this.engineSelector.style.top = "".concat(this.text.offsetHeight, "px");
        }
      } else {
        nt = -listh - offset - 1;
        if (this.engineName) {
          this.engineSelector.style.top = "".concat(-(offset + 1), "px");
        }
      }
      this.list.style.top = "".concat(nt, "px");
      this.list.style.width = "";
      this.list.style[anchor] = "".concat(nl, "px");
      if (this.engineName) {
        this.selectEngine(this.engineName);
        this.engineSelector.style.display = "";
      }
      this.list.style.display = "block";
      if (this.list.offsetWidth < textBoxWidth) {
        this.list.style.width = "".concat(textBoxWidth, "px");
        return;
      }
      const scroll = scroll_offset("Left");
      const view_w = viewport("Width");
      let w = this.list.offsetWidth;
      const l_pos = position(this.list);
      let left = l_pos.x;
      let right = left + w;
      if (left < scroll || right > scroll + view_w) {
        if (w > view_w) {
          w = view_w;
          this.list.style.width = "".concat(w, "px");
          if (is_rtl) {
            left = right - w;
          } else {
            right = left + w;
          }
        }
        let relative_offset = 0;
        if (left < scroll) {
          relative_offset = scroll - left;
        } else if (right > scroll + view_w) {
          relative_offset = -(right - scroll - view_w);
        }
        if (is_rtl) {
          relative_offset = -relative_offset;
        }
        if (relative_offset) {
          this.list.style[anchor] = "".concat(nl + relative_offset, "px");
        }
      }
    }
    autoComplete(newVal, actVal, normalizedActVal, key, dontModify) {
      if (newVal === actVal) {
        return true;
      }
      if (dontModify || this.ime || !this.canSelect()) {
        return false;
      }
      if (newVal.indexOf(actVal)) {
        if (normalizedActVal && newVal.indexOf(normalizedActVal) === 0) {
          if (this.lastRealInput === actVal) {
            this.lastRealInput = normalizedActVal;
          }
          actVal = normalizedActVal;
        } else {
          return false;
        }
      }
      this.text.focus();
      this.text.value = newVal + key;
      this.setSelection(actVal.length, newVal.length);
      return true;
    }
    canSelect() {
      return this.text.setSelectionRange || this.text.createTextRange || this.text.selectionStart !== void 0 && this.text.selectionEnd !== void 0;
    }
    setSelection(from, to) {
      if (!this.text.value) {
        return;
      }
      if (this.text.setSelectionRange) {
        this.text.setSelectionRange(from, to);
      } else if (this.text.selectionStart !== void 0) {
        if (from > this.text.selectionStart) {
          this.text.selectionEnd = to;
          this.text.selectionStart = from;
        } else {
          this.text.selectionStart = from;
          this.text.selectionEnd = to;
        }
      } else if (this.text.createTextRange) {
        const new_selection = this.text.createTextRange();
        new_selection.move("character", from);
        new_selection.moveEnd("character", to - from);
        new_selection.select();
      }
    }
    getSelection() {
      let from = 0;
      let to = 0;
      if (!this.text.value) {
      } else if (this.text.selectionStart !== void 0) {
        from = this.text.selectionStart;
        to = this.text.selectionEnd;
      } else if (document.selection && document.selection.createRange) {
        const rng = document.selection.createRange().duplicate();
        if (rng.parentNode() === this.text) {
          try {
            const textRng = this.text.createTextRange();
            textRng.move("character", 0);
            textRng.setEndPoint("EndToEnd", rng);
            to = textRng.text.length;
            textRng.setEndPoint("EndToStart", rng);
            from = textRng.text.length;
          } catch {
            from = this.text.value.length;
            to = from;
          }
        }
      }
      return {
        start: from,
        end: to
      };
    }
    saveView() {
      this.lastSelection = this.getSelection();
    }
    processKey(event) {
      let dir = 0;
      switch (this.lastKey) {
        case UP:
          dir = -1;
          break;
        case DOWN:
          dir = 1;
          break;
        case PGUP:
          dir = -HC.listSize;
          break;
        case PGDOWN:
          dir = HC.listSize;
          break;
        case ESC:
          return evtKill(event);
      }
      if (dir) {
        if (this.list.style.display !== "none") {
          this.highlightSuggestion(dir);
          return evtKill(event);
        } else if (this.keyCount <= 1 && (!this.callbackObj || this.callbackObj.callsMade === this.callbackObj.nofCalls)) {
          this.textchange();
        }
      }
      return true;
    }
    highlightSuggestion(dir) {
      if (noSuggestions || !this.list || this.list.style.display === "none") {
        return false;
      }
      const curr = this.list.selectedIndex;
      let tgt = -1;
      if (dir === 0) {
        if (curr < 0 || curr >= this.list.options.length) {
          return false;
        }
        tgt = curr;
      } else {
        tgt = curr < 0 ? 0 : curr + dir;
        tgt = tgt < 0 ? 0 : tgt;
        if (tgt >= this.list.options.length) {
          tgt = this.list.options.length - 1;
        }
      }
      if (tgt !== curr || dir === 0) {
        if (curr >= 0 && curr < this.list.options.length && dir !== 0) {
          this.list.options[curr].selected = false;
        }
        this.list.options[tgt].selected = true;
        const v = this.text.value.split("|");
        const key = v.length > 1 ? "|".concat(v[1]) : "";
        const completed = this.autoComplete(this.list.options[tgt].text, this.lastRealInput, null, key, false);
        if (!completed || this.list.options[tgt].text === this.lastRealInput) {
          this.text.value = this.list.options[tgt].text + key;
          if (this.canSelect()) {
            this.setSelection(this.list.options[tgt].text.length, this.list.options[tgt].text.length);
          }
        }
        this.lastInput = this.list.options[tgt].text;
        this.inputExists = true;
        if (this.icon) {
          this.icon.src = HC.existsYes;
        }
        this.state = CHANGE_PENDING;
      }
      return true;
    }
    resetKeySelection() {
      if (noSuggestions || !this.list || this.list.style.display === "none") {
        return false;
      }
      const curr = this.list.selectedIndex;
      if (curr >= 0 && curr < this.list.options.length) {
        this.list.options[curr].selected = false;
        const v = this.text.value.split("|");
        const key = v.length > 1 ? "|".concat(v[1]) : "";
        let result = v[0] !== this.lastInput;
        if (v[0] !== this.lastRealInput) {
          this.text.value = this.lastRealInput + key;
          result = true;
        }
        this.lastInput = this.lastRealInput;
        return result;
      }
      return false;
    }
  }
  const initialize = () => {
    const config = {};
    HC.dont_add_to_watchlist = window.hotcat_dont_add_to_watchlist === void 0 ? config.HotCatDontAddToWatchlist === void 0 ? HC.dont_add_to_watchlist : config.HotCatDontAddToWatchlist : !!window.hotcat_dont_add_to_watchlist;
    HC.no_autocommit = window.hotcat_no_autocommit === void 0 ? config.HotCatNoAutoCommit === void 0 ? conf.wgNamespaceNumber % 2 ? true : HC.no_autocommit : config.HotCatNoAutoCommit : !!window.hotcat_no_autocommit;
    HC.del_needs_diff = window.hotcat_del_needs_diff === void 0 ? config.HotCatDelNeedsDiff === void 0 ? HC.del_needs_diff : config.HotCatDelNeedsDiff : !!window.hotcat_del_needs_diff;
    HC.suggest_delay = window.hotcat_suggestion_delay || config.HotCatSuggestionDelay || HC.suggest_delay;
    HC.editbox_width = window.hotcat_editbox_width || config.HotCatEditBoxWidth || HC.editbox_width;
    HC.suggestions = window.hotcat_suggestions || config.HotCatSuggestions || HC.suggestions;
    if (typeof HC.suggestions !== "string" || !suggestionConfigs[HC.suggestions]) {
      HC.suggestions = "combined";
    }
    HC.fixed_search = window.hotcat_suggestions_fixed === void 0 ? config.HotCatFixedSuggestions === void 0 ? HC.fixed_search : config.HotCatFixedSuggestions : !!window.hotcat_suggestions_fixed;
    HC.single_minor = window.hotcat_single_changes_are_minor === void 0 ? config.HotCatMinorSingleChanges === void 0 ? HC.single_minor : config.HotCatMinorSingleChanges : !!window.hotcat_single_changes_are_minor;
    HC.bg_changed = window.hotcat_changed_background || config.HotCatChangedBackground || HC.bg_changed;
    HC.use_up_down = window.hotcat_use_category_links === void 0 ? config.HotCatUseCategoryLinks === void 0 ? HC.use_up_down : config.HotCatUseCategoryLinks : !!window.hotcat_use_category_links;
    HC.listSize = window.hotcat_list_size || config.HotCatListSize || HC.listSize;
    HC.changeTag = config.HotCatChangeTag || "";
    if (HC.changeTag) {
      const eForm = document.editform;
      const catRegExp = new RegExp("^\\[\\[(".concat(HC.category_regexp, "):"));
      let oldTxt;
      const isMinorChange = () => {
        let newTxt = eForm.wpTextbox1;
        if (!newTxt) {
          return;
        }
        newTxt = newTxt.value;
        const oldLines = oldTxt.match(/^.*$/gm);
        const newLines = newTxt.match(/^.*$/gm);
        let cArr;
        const except = (aArr, bArr) => {
          const result = [];
          let lArr;
          let sArr;
          if (aArr.length < bArr.length) {
            lArr = bArr;
            sArr = aArr;
          } else {
            lArr = aArr;
            sArr = bArr;
          }
          var _iterator4 = _createForOfIteratorHelper(lArr), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              const item = _step4.value;
              const ind = sArr.indexOf(item);
              if (ind === -1) {
                result[result.length] = item;
              } else {
                sArr.splice(ind, 1);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          return [...result, ...sArr];
        };
        cArr = except(oldLines, newLines);
        if (cArr.length > 0) {
          cArr = cArr.filter((c) => {
            c = c.trim();
            return c && !catRegExp.test(c);
          });
        }
        if (cArr.length === 0) {
          oldTxt = newTxt;
          return true;
        }
      };
      if (conf.wgAction === "submit" && conf.wgArticleId && eForm && eForm.wpSummary && document.querySelector("#wikiDiff")) {
        const sum = eForm.wpSummary;
        const sumA = eForm.wpAutoSummary;
        if (sum.value && sumA.value === HC.changeTag) {
          sumA.value = sumA.value.replace(HC.changeTag, "d41d8cd98f00b204e9800998ecf8427e");
          const $ct = $("<input>").attr({
            type: "hidden",
            name: "wpChangeTags"
          }).val(HC.changeTag);
          $(eForm).append($ct);
          oldTxt = eForm.wpTextbox1.value;
          const $body = $("body");
          $body.find("input[name=wpSave]").one("click", () => {
            if ($ct.val()) {
              sum.value = sum.value.replace(getMessage("messages-using") || getMessage("messages-prefix"), "");
            }
          });
          const removeChangeTag = () => {
            $(eForm.wpTextbox1).add(sum).one("input", () => {
              setTimeout(() => {
                if (isMinorChange()) {
                  removeChangeTag();
                } else {
                  $ct.val("");
                }
              }, 500);
            });
          };
          removeChangeTag();
        }
      }
    }
    HC.listSize = Number.parseInt(HC.listSize, 10);
    if (Number.isNaN(HC.listSize) || HC.listSize < 5) {
      HC.listSize = 5;
    }
    HC.listSize = Math.min(HC.listSize, 30);
    for (var _i6 = 0, _Object$entries = Object.entries(suggestionConfigs); _i6 < _Object$entries.length; _i6++) {
      const [key, suggestionConfig] = _Object$entries[_i6];
      try {
        if (key && getMessage("engine_names-".concat(key))) {
          suggestionConfig.name = getMessage("engine_names-".concat(key));
        }
      } catch {
        continue;
      }
    }
    is_rtl = hasClass(document.querySelector("body"), "rtl");
    if (!is_rtl) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        is_rtl = document.defaultView.getComputedStyle(document.querySelector("body"), null).getPropertyValue("direction");
      } else if ($("body")[0].currentStyle) {
        is_rtl = $("body")[0].currentStyle.direction;
      } else {
        is_rtl = $("body")[0].style.direction;
      }
      is_rtl = is_rtl === "rtl";
    }
  };
  const can_edit = () => {
    return document.querySelector("#ca-edit") !== null;
  };
  const closeForm = function() {
    for (var _i7 = 0, _editors6 = editors; _i7 < _editors6.length; _i7++) {
      const edit = _editors6[_i7];
      if (edit.state === OPEN) {
        edit.cancel();
      } else if (edit.state === CHANGE_PENDING) {
        edit.sanitizeInput();
        const value = edit.text.value.split("|");
        let key = null;
        if (value.length > 1) {
          [, key] = value;
        }
        const v = value[0].replace(/_/g, " ").trim();
        if (v.length === 0) {
          edit.cancel();
        } else {
          edit.currentCategory = v;
          edit.currentKey = key;
          edit.currentExists = this.inputExists;
          edit.close();
        }
      }
    }
  };
  const setup_upload = () => {
    onUpload = true;
    let ip = document.querySelector("#mw-htmlform-description") || document.querySelector("input[name=wpDestFile]");
    if (!ip) {
      ip = document.querySelector("input[name=wpDestFile]");
      while (ip && ip.nodeName.toLowerCase() !== "table") {
        ip = ip.parentNode;
      }
    }
    if (!ip) {
      return;
    }
    const reupload = document.querySelector("input[name=wpForReUpload]");
    const destFile = document.querySelector("input[name=wpDestFile]");
    if (reupload && !!reupload.value || destFile && (destFile.disabled || destFile.readOnly)) {
      return;
    }
    const labelCell = make("td");
    const lineCell = make("td");
    catLine = make("div");
    catLine.className = "catlinks";
    catLine.id = "catlinks";
    catLine.style.textAlign = is_rtl ? "right" : "left";
    catLine.style.margin = "0";
    catLine.style.border = "none";
    lineCell.append(catLine);
    const label = null;
    if (label) {
      labelCell.id = "hotcatLabelTranslated";
      labelCell.append(label);
    } else {
      labelCell.id = "hotcatLabel";
      labelCell.append(make(getMessage("categories"), true));
    }
    labelCell.className = "mw-label";
    labelCell.style.textAlign = "right";
    labelCell.style.verticalAlign = "middle";
    const form = document.querySelector("#upload") || document.querySelector("#mw-upload-form");
    if (form) {
      const newRow = ip.insertRow(-1);
      newRow.append(labelCell);
      newRow.append(lineCell);
      form.addEventListener("submit", (oldSubmit, ...args) => {
        return (() => {
          let do_submit = true;
          if (oldSubmit) {
            if (typeof oldSubmit === "string") {
              do_submit = window.eval(oldSubmit);
            } else if (oldSubmit instanceof Function) {
              do_submit = oldSubmit.apply(form, [oldSubmit, ...args]);
            }
          }
          if (!do_submit) {
            return false;
          }
          closeForm();
          const eb = document.querySelector("textarea[name=wpUploadDescription]") || document.querySelector("#wpDesc");
          let addedOne = false;
          for (var _i8 = 0, _editors7 = editors; _i8 < _editors7.length; _i8++) {
            const editor = _editors7[_i8];
            const t = editor.currentCategory;
            if (!t) {
              continue;
            }
            const key = editor.currentKey;
            const new_cat = "[[".concat(HC.category_canonical, ":").concat(t).concat(key ? "|".concat(key) : "", "]]");
            const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
            const _cleanedText = eb.value.replace(/<!--(\s|\S)*?-->/g, "").replace(nowikiRegex);
            if (!find_category(_cleanedText, t, true)) {
              eb.value += "\n".concat(new_cat);
              addedOne = true;
            }
          }
          if (addedOne) {
            const regex = new RegExp("{{$".concat("subst:").concat("unc}}"), "g");
            eb.value = eb.value.replace(regex, "");
          }
          return true;
        })(form.onsubmit);
      });
    }
  };
  let cleanedText = null;
  const isOnPage = ({
    firstChild
  }) => {
    if (firstChild.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }
    let catTitle = title(firstChild.getAttribute("href"));
    if (!catTitle) {
      return null;
    }
    catTitle = catTitle.slice(catTitle.indexOf(":") + 1).replace(/_/g, " ");
    if (HC.blacklist && HC.blacklist.test(catTitle)) {
      return null;
    }
    const result = {
      title: catTitle,
      match: ["", "", ""]
    };
    if (pageText === null) {
      return result;
    }
    if (cleanedText === null) {
      const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
      cleanedText = pageText.replace(/<!--(\s|\S)*?-->/g, "").replace(nowikiRegex, "");
    }
    result.match = find_category(cleanedText, catTitle, true);
    return result;
  };
  let initialized = false;
  let setupTimeout = null;
  const findByClass = (scope, tag, className) => {
    const result = $(scope).find("".concat(tag, ".").concat(className));
    return result && result.length > 0 ? result[0] : null;
  };
  const setup = (additionalWork) => {
    if (initialized) {
      return;
    }
    initialized = true;
    if (setupTimeout) {
      window.clearTimeout(setupTimeout);
      setupTimeout = null;
    }
    catLine || (catLine = document.querySelector("#mw-normal-catlinks"));
    const hiddenCats = document.querySelector("#mw-hidden-catlinks");
    if (!catLine) {
      let footer = null;
      if (!hiddenCats) {
        footer = findByClass(document, "div", "printfooter");
        if (!footer) {
          return;
        }
      }
      catLine = make("div");
      catLine.id = "mw-normal-catlinks";
      catLine.style.textAlign = is_rtl ? "right" : "left";
      const label = make("a");
      label.href = conf.wgArticlePath.replace("$1", "Special:Categories");
      label.title = getMessage("categories");
      label.append(make(getMessage("categories"), true));
      catLine.append(label);
      catLine.append(make(":", true));
      let container = hiddenCats ? hiddenCats.parentNode : document.querySelector("#catlinks");
      if (!container) {
        container = make("div");
        container.id = "catlinks";
        footer.parentNode.insertBefore(container, footer.nextSibling);
      }
      container.className = "catlinks noprint";
      container.style.display = "";
      if (hiddenCats) {
        hiddenCats.before(catLine);
      } else {
        container.append(catLine);
      }
    }
    if (is_rtl) {
      catLine.dir = "rtl";
    }
    const createEditors = (line, is_hidden) => {
      let i;
      let cats = line.querySelectorAll("li");
      if (cats.length > 0) {
        newDOM = true;
        line = cats[0].parentNode;
      } else {
        cats = line.querySelectorAll("span");
      }
      const copyCats = Array.from({
        length: cats.length
      });
      for (i = 0; i < cats.length; i++) {
        copyCats[i] = cats[i];
      }
      for (i = 0; i < copyCats.length; i++) {
        const test = isOnPage(copyCats[i]);
        if (test !== null && test.match !== null && line) {
          new CategoryEditor(line, copyCats[i], test.title, test.match[2], is_hidden);
        }
      }
      return copyCats.length > 0 ? copyCats.at(-1) : null;
    };
    const lastSpan = createEditors(catLine, false);
    new CategoryEditor(newDOM ? catLine.querySelectorAll("ul")[0] : catLine, null, null, lastSpan !== null, false);
    if (!onUpload) {
      if (pageText !== null && hiddenCats) {
        if (is_rtl) {
          hiddenCats.dir = "rtl";
        }
        createEditors(hiddenCats, true);
      }
      const enableMulti = make("span");
      enableMulti.className = "noprint";
      if (is_rtl) {
        enableMulti.dir = "rtl";
      }
      catLine.insertBefore(enableMulti, catLine.firstChild.nextSibling);
      enableMulti.append(make(" ", true));
      multiSpan = make("span");
      enableMulti.append(multiSpan);
      multiSpan.innerHTML = "(<a>".concat(HC.addmulti, "</a>)");
      const [link] = multiSpan.querySelectorAll("a");
      link.addEventListener("click", (event) => {
        setMultiInput();
        checkMultiInput();
        return evtKill(event);
      });
      link.title = getMessage("multi_tooltip");
      link.style.cursor = "pointer";
    }
    cleanedText = null;
    if (additionalWork instanceof Function) {
      additionalWork();
    }
    mw.hook("hotcat.ready").fire();
    $("body").trigger("hotcatSetupCompleted");
  };
  const createCommitForm = () => {
    if (commitForm) {
      return;
    }
    const formContainer = make("div");
    formContainer.style.display = "none";
    document.querySelector("body").append(formContainer);
    formContainer.innerHTML = '<form id="hotcatCommitForm" method="post" enctype="multipart/form-data" action="'.concat(conf.wgScript, "?title=").concat(encodeURIComponent(conf.wgPageName), '&action=submit"><input type="hidden" name="wpTextbox1">', '<input type="hidden" name="model" value="'.concat(conf.wgPageContentModel, '">'), '<input type="hidden" name="format" value="text/x-wiki"><input type="hidden" name="wpSummary" value=""><input type="checkbox" name="wpMinoredit" value="1"><input type="checkbox" name="wpWatchthis" value="1"><input type="hidden" name="wpAutoSummary" value="d41d8cd98f00b204e9800998ecf8427e"><input type="hidden" name="wpEdittime"><input type="hidden" name="wpStarttime"><input type="hidden" name="wpDiff" value="wpDiff"><input type="hidden" name="oldid" value="0"><input type="submit" name="hcCommit" value="hcCommit"><input type="hidden" name="wpEditToken"><input type="hidden" name="wpUltimateParam" value="1"><input type="hidden" name="wpChangeTags"><input type="hidden" value="ℳ𝒲♥𝓊𝓃𝒾𝒸ℴ𝒹ℯ" name="wpUnicodeCheck"></form>');
    commitForm = document.querySelector("#hotcatCommitForm");
  };
  const getPage = () => {
    if (conf.wgArticleId) {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        rawcontinue: "",
        titles: conf.wgPageName,
        prop: ["info", "revisions"],
        rvprop: ["content", "timestamp", "ids"],
        rvlimit: "1",
        rvstartid: conf.wgCurRevisionId,
        rvslots: "main",
        meta: ["siteinfo"]
      };
      HC.start = (data) => {
        setPage(data);
        setup(createCommitForm);
      };
      api.get(params).then((data) => {
        HC.start(data);
      });
      setupTimeout = setTimeout(() => {
        setup(createCommitForm);
      }, 4e3);
    } else {
      if (conf.wgNamespaceNumber === 2) {
        return;
      }
      pageText = "";
      pageTime = null;
      setup(createCommitForm);
    }
  };
  const setState = (state) => {
    const cats = state.split("\n");
    if (cats.length === 0) {
      return null;
    }
    if (initialized && editors.length === 1 && editors[0].isAddCategory) {
      const newSpans = [];
      const before = editors.length === 1 ? editors[0].span : null;
      let i;
      for (i = 0; i < cats.length; i++) {
        if (cats[i].length === 0) {
          continue;
        }
        let cat = cats[i].split("|");
        const key = cat.length > 1 ? cat[1] : null;
        [cat] = cat;
        const link = make("a");
        link.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(cat));
        link.append(make(cat, true));
        link.title = cat;
        const span = make("span");
        span.append(link);
        if (!i) {
          catLine.insertBefore(make(" ", true), before);
        }
        before.before(span);
        if (before && i + 1 < cats.length) {
          parent.insertBefore(make(" | ", true), before);
        }
        newSpans[newSpans.length] = {
          element: span,
          title: cat,
          key
        };
      }
      if (before) {
        before.parentNode.insertBefore(make(" | ", true), before);
      }
      for (i = 0; i < newSpans.length; i++) {
        new CategoryEditor(catLine, newSpans[i].element, newSpans[i].title, newSpans[i].key);
      }
    }
    return null;
  };
  const getState = () => {
    let result = null;
    for (var _i9 = 0, _editors8 = editors; _i9 < _editors8.length; _i9++) {
      const editor = _editors8[_i9];
      let text = editor.currentCategory;
      const key = editor.currentKey;
      if (text && text.length > 0) {
        if (key !== null) {
          text += "|".concat(key);
        }
        if (result === null) {
          result = text;
        } else {
          result += "\n".concat(text);
        }
      }
    }
    return result;
  };
  const really_run = () => {
    initialize();
    if (!HC.upload_disabled && conf.wgNamespaceNumber === -1 && conf.wgCanonicalSpecialPageName === "Upload" && conf.wgUserName) {
      setup_upload();
      setup(() => {
        if (window.UploadForm && UploadForm.previous_hotcat_state) {
          UploadForm.previous_hotcat_state = setState(UploadForm.previous_hotcat_state);
        }
      });
    } else {
      if (!conf.wgIsArticle || conf.wgAction !== "view" || param("diff") !== null || param("oldid") !== null || !can_edit() || HC.disable()) {
        return;
      }
      getPage();
    }
  };
  const run = () => {
    if (HC.started) {
      return;
    }
    HC.started = true;
    really_run();
  };
  window.hotcat_get_state = () => {
    return getState();
  };
  window.hotcat_set_state = (state) => {
    return setState(state);
  };
  window.hotcat_close_form = () => {
    closeForm();
  };
  HC.runWhenReady = (callback) => {
    mw.hook("hotcat.ready").add(callback);
  };
  if (conf.wgCanonicalSpecialPageName !== "Upload") {
    mw.hook("postEdit").add(() => {
      if (document.querySelector("#catlinks .hotcatlink")) {
        return;
      }
      catLine = null;
      editors = [];
      initialized = false;
      HC.started = false;
      run();
    });
  }
  $(run);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hvdENhdC9tb2R1bGVzL2NoZWNrLm1vZHVsZS5sZXNzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9hcGkudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL2NoZWNrLnRzIiwgInNyYy9Ib3RDYXQvSG90Q2F0LmpzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9nZXRNZXNzYWdlLnRzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9tZXNzYWdlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9Ib3RDYXQvbW9kdWxlcy9jaGVjay5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGNhdGNoZWNrSW5saW5lSWNvbiA9IFwiY2hlY2stbW9kdWxlX19jYXRjaGVja0lubGluZUljb25fbUo1TkRxXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjYXRjaGVja0lubGluZUljb25cIjogY2F0Y2hlY2tJbmxpbmVJY29uXG59O1xuICAgICAgIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vLyBJbml0aWFsaXplIE1lZGlhV2lraSBBUElcbmNvbnN0IG13QXBpOiAodXNlckFnZW50Pzogc3RyaW5nKSA9PiBtdy5BcGkgPSAodXNlckFnZW50KSA9PiB7XG5cdHJldHVybiBpbml0TXdBcGkodXNlckFnZW50KTtcbn07XG5cbmV4cG9ydCB7bXdBcGl9O1xuIiwgImltcG9ydCB7Y2F0Y2hlY2tJbmxpbmVJY29ufSBmcm9tICcuL2NoZWNrLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7bXdBcGl9IGZyb20gJy4vYXBpJztcblxuLyoqXG4gKiBDaGVja0NhdGVnb3JpZXMgSG90Q2F0IEV4dGVuc2lvbiDigJNcbiAqIHJlbW92ZXMgdGhlIHRlbXBsYXRlIHdoZW4gY2F0ZWdvcml6aW5nIChwcm9tcHRzIGJlZm9yZSkgd2l0aCBIb3RDYXQgYW5kXG4gKiBhZGRzIGEgbGluayBcIkNhdGVnb3JpZXMgYXJlIE9LXCIgdG8gdGhlIGNhdGVnb3J5LXNlY3Rpb25cbiAqXG4gKiBAcmV2IDIgKDIwMTQtMDMtMjApXG4gKiBAYXV0aG9yIFJpbGxrZSwgMjAxMlxuICovXG4oZnVuY3Rpb24gaG90Q2F0Q2hlY2soKSB7XG5cdGlmIChcblx0XHRtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpICE9PSA2IHx8XG5cdFx0d2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCB8fFxuXHRcdCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tjYXRlZ29yaWVzJylcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGFwaSA9IG13QXBpKCdob3RDYXRDaGVjay8yLjAnKTtcblx0Y29uc3QgY2hlY2tDYXRlZ29yaWVzUmVnRXhwID0gL3t7W0NjXWhlY2tbIF9dY2F0ZWdvcmllc1tee31dKn19L2c7XG5cdGNvbnN0IHNlbGZOYW1lID0gJyhbW01lZGlhV2lraTpHYWRnZXQtSG90Q2F0LWNoZWNrLmpzfFNjcmlwdF1dKTogJztcblx0Y29uc3Qgc3RvcmFnZUl0ZW1OYW1lID0gJ2NoZWNrQ2F0Jztcblx0Y29uc3Qgc3RvcmFnZUl0ZW0gPSBtdy5zdG9yYWdlLmdldChzdG9yYWdlSXRlbU5hbWUpO1xuXHQvKipcblx0ICogQSBmZXcgc3R5bGluZyBoZWxwZXIgZnVuY3Rpb25zXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpY29uQ2xhc3Ncblx0ICogQHJldHVybiB7SlF1ZXJ5fVxuXHQgKi9cblx0Y29uc3QgY3JlYXRlakljb24gPSAoaWNvbkNsYXNzOiBzdHJpbmcpOiBKUXVlcnkgPT4ge1xuXHRcdHJldHVybiAkKCc8c3Bhbj4nKS5hdHRyKCdjbGFzcycsIGB1aS1pY29uICR7aWNvbkNsYXNzfSAke2NhdGNoZWNrSW5saW5lSWNvbn1gKS50ZXh0KCcgJyk7XG5cdH07XG5cdGNvbnN0IGNyZWF0ZU5vdGlmeUFyZWEgPSAodGV4dE5vZGU6IEpRdWVyeTxKUXVlcnkuTm9kZT4sIGljb246IHN0cmluZywgc3RhdGU6IHN0cmluZyk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRcdHJldHVybiAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3VpLXdpZGdldCcpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdFx0LmF0dHIoJ2NsYXNzJywgYCR7c3RhdGV9IHVpLWNvcm5lci1hbGxgKVxuXHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0J21hcmdpbi10b3AnOiAnMjBweCcsXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAnMC43ZW0nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8cD4nKS5hcHBlbmQoY3JlYXRlakljb24oaWNvbikuY3NzKCdtYXJnaW5SaWdodCcsICcwLjNlbScpLCB0ZXh0Tm9kZSkpXG5cdFx0XHQpO1xuXHR9O1xuXHQvLyBSZW1vdmUgXCJjaGVjayBjYXRlZ29yaWVzXCIgd2hlbiB1c2luZyBIb3RDYXRcblx0Ly8gT25seSBleGVjdXRlZCBvbiBmaXJzdCBzdWJtaXRcblx0JCgnYm9keScpLm9uZSgnc3VibWl0LmNoZWNrQ2F0TGlzdGVuZXInLCAnI2hvdGNhdENvbW1pdEZvcm0nLCBmdW5jdGlvbiAoZSkge1xuXHRcdGlmIChzdG9yYWdlSXRlbSA9PT0gJ2Rpc2FibGVkJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblxuXHRcdGNvbnN0IG5ld1ZhbCA9IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWU/LnJlcGxhY2UoY2hlY2tDYXRlZ29yaWVzUmVnRXhwLCAnJyk7XG5cdFx0Y29uc3QgZGxnQnV0dG9uczoge1xuXHRcdFx0J1llcywgUmVtb3ZlJz86ICgpID0+IHZvaWQ7XG5cdFx0XHQnTm8sIGtlZXAgaXQnPzogKCkgPT4gdm9pZDtcblx0XHR9ID0ge307XG5cdFx0bGV0ICRkaWFsb2dDaGVja1N0b3JhZ2U6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdFx0bGV0ICRwZXJtYVNhdmVIaW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRcdGxldCAkdGV4dEhpbnROb2RlO1xuXHRcdGxldCAkZGlhbG9nO1xuXHRcdGNvbnN0IGRvUmVtb3ZlID0gKCkgPT4ge1xuXHRcdFx0KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cblx0XHRcdFx0YFJlbW92aW5nIFtbVGVtcGxhdGU6Q2hlY2sgY2F0ZWdvcmllc3x7JHtge0NoZWNrIGNhdGVnb3JpZXN9fV1dICR7KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlfWB9YDtcblxuXHRcdFx0KHNlbGYud3BUZXh0Ym94MSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA9IG5ld1ZhbDtcblx0XHR9O1xuXHRcdGNvbnN0IHdyaXRlU3RvcmFnZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuXHRcdFx0bXcuc3RvcmFnZS5zZXQoc3RvcmFnZUl0ZW1OYW1lLCB2YWwsIDYwNDhlMik7IC8vIDcgZGF5c1xuXHRcdH07XG5cdFx0ZGxnQnV0dG9uc1snWWVzLCBSZW1vdmUnXSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGRvUmVtb3ZlKCk7XG5cdFx0XHRpZiAoKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKCdhdXRvJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHR9O1xuXHRcdGRsZ0J1dHRvbnNbJ05vLCBrZWVwIGl0J10gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0fTtcblx0XHRjb25zdCBfYWRkVG9KUyA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCwgX2U6IEpRdWVyeS5FdmVudCkge1xuXHRcdFx0X2UucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmICgkcGVybWFTYXZlSGludC5oYXNDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkZWw6IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkKHRoaXMpO1xuXHRcdFx0JGVsLm9mZignY2xpY2snKS50ZXh0KCdQbGVhc2Ugd2FpdC4nKTtcblx0XHRcdCRwZXJtYVNhdmVIaW50LmFkZENsYXNzKCd1aS1zdGF0ZS1kaXNhYmxlZCcpO1xuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0dGl0bGU6IGBVc2VyOiR7bXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpfS9jb21tb24uanNgLFxuXHRcdFx0XHRzdW1tYXJ5OiBgJHtzZWxmTmFtZX1TYXZpbmcgSG90Q2F0IGNvbmZpZ3VyYXRpb24uYCxcblx0XHRcdFx0YXBwZW5kdGV4dDogJGVsLmRhdGEoJ2FkZFRleHQnKSBhcyBzdHJpbmcsXG5cdFx0XHR9IGFzIGNvbnN0O1xuXHRcdFx0Y29uc3QgZWRpdERvbmUgPSAoZWRpdFN0YXQ/OiB7ZXJyb3I/OiB7Y29kZT86IHN0cmluZzsgaW5mbz86IHN0cmluZ319KSA9PiB7XG5cdFx0XHRcdGlmICghZWRpdFN0YXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVkaXRTdGF0LmVycm9yKSB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRgVW5hYmxlIHRvIHNhdmUgdG8geW91ciBjb21tb24uanMgdXNpbmcgdGhlIEFQSVxcbiR7ZWRpdFN0YXQuZXJyb3IuY29kZX1cXG4ke2VkaXRTdGF0LmVycm9yLmluZm99YCxcblx0XHRcdFx0XHRcdHt0YWc6ICdob3RDYXRDaGVjaycsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRG9uZS4nKTtcblx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5mYWRlT3V0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR2b2lkIGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW1zKS50aGVuKGVkaXREb25lKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIE9uIFdpa2ltZWRpYSBDb21tb25zIHRoZXJlIHdlcmUgcGVvcGxlIHdobyBzYWlkOlxuXHRcdCAqIFwiQ2F0ZWdvcml6aW5nIHdpdGggSG90Q2F0IGRvZXMgbGVnaXQgYXV0b21hdGVkIHJlbW92YWwgb2YgdGhlIGNoZWNrLWNhdC1tZXNzYWdlXCJcblx0XHQgKiBTbyB3ZSBpbnZlbnRlZCBhIGRpYWxvZyB0aGF0IHNob3VsZCBiZSByZWFkYWJsZSBieSB1c2VycyBldmVuIHdpdGggdmVyeSBmZXcgRW5nbGlzaCBza2lsbHMuXG5cdFx0ICovXG5cdFx0Y29uc3QgcHJvbXB0ID0gKCkgPT4ge1xuXHRcdFx0JGRpYWxvZ0NoZWNrU3RvcmFnZSA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRpZDogJ2hvdENhdEF1dG9SZW1vdmVDaGVja0NhdFN0b3JhZ2UnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAoKHRoaXMgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0JHBlcm1hU2F2ZUhpbnQuZmFkZUluKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmZhZGVPdXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0JHRleHRIaW50Tm9kZSA9ICQoJzx1bD4nKTtcblx0XHRcdCQoJzxsaT4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjJylcblx0XHRcdFx0XHRcdC50ZXh0KCdEaXNhYmxlIHRoaXMgZmVhdHVyZS4nKVxuXHRcdFx0XHRcdFx0LmRhdGEoJ2FkZFRleHQnLCAnXFxud2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCA9IHRydWU7Jylcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBfYWRkVG9KUylcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kVG8oJHRleHRIaW50Tm9kZSk7XG5cdFx0XHQkKCc8bGk+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHQudGV4dCgnUmVtb3ZlIHt7Y2hlY2sgY2F0ZWdvcmllc319IHdoZW4gZWRpdGluZyB1c2luZyBIb3RDYXQgd2l0aG91dCBwcm9tcHRpbmcuJylcblx0XHRcdFx0XHRcdC5kYXRhKCdhZGRUZXh0JywgJ1xcbndpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQgPSB0cnVlOycpXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX2FkZFRvSlMpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZFRvKCR0ZXh0SGludE5vZGUpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQgPSBjcmVhdGVOb3RpZnlBcmVhKFxuXHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCdTYXZlIHRoZXNlIHNldHRpbmcgaW4geW91ciBjb21tb24uanM6ICcpLmFwcGVuZCgkdGV4dEhpbnROb2RlKSxcblx0XHRcdFx0J3VpLWljb24taW5mbycsXG5cdFx0XHRcdCd1aS1zdGF0ZS1oaWdobGlnaHQnXG5cdFx0XHQpO1xuXHRcdFx0JGRpYWxvZyA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdCdmb250LXNpemUnOiAnMmVtJyxcblx0XHRcdFx0XHRcdFx0J2xpbmUtaGVpZ2h0JzogJzEuOGVtJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCcge3tjaGVjayBjYXRlZ29yaWVzfX0gJykuY3NzKHtcblx0XHRcdFx0XHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICcjRjhDQ0IwJyxcblx0XHRcdFx0XHRcdFx0XHQndGV4dC1kZWNvcmF0aW9uJzogJ2xpbmUtdGhyb3VnaCAhaW1wb3J0YW50Jyxcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpLnRleHQoJyA/Jylcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCc8YnI+Jyxcblx0XHRcdFx0XHQkZGlhbG9nQ2hlY2tTdG9yYWdlLFxuXHRcdFx0XHRcdCQoJzxsYWJlbD4nKS5hdHRyKCdmb3InLCAnaG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0U3RvcmFnZScpLnRleHQoXCJEb24ndCBhc2sgYWdhaW5cIiksXG5cdFx0XHRcdFx0Jzxicj4nXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZChtdy51c2VyLmlzQW5vbigpID8gJycgOiAkcGVybWFTYXZlSGludC5oaWRlKCkpO1xuXHRcdFx0JGRpYWxvZy5kaWFsb2coe1xuXHRcdFx0XHRtb2RhbDogdHJ1ZSxcblx0XHRcdFx0Y2xvc2VPbkVzY2FwZTogdHJ1ZSxcblx0XHRcdFx0dGl0bGU6ICd7e2NoZWNrIGNhdGVnb3JpZXN9fSAo4oiSKT8nLFxuXHRcdFx0XHR3aWR0aDogNDUwLFxuXHRcdFx0XHRidXR0b25zOiBkbGdCdXR0b25zLFxuXHRcdFx0XHRjbG9zZTogKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJyNob3RjYXRDb21taXRGb3JtJykudHJpZ2dlcignc3VibWl0Jyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdFx0Y29uc3QgJGJ1dHRvbnMgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy51aS1kaWFsb2ctYnV0dG9ucGFuZSBidXR0b24nKTtcblx0XHRcdFx0XHQkYnV0dG9ucy5lcSgwKS5idXR0b24oe1xuXHRcdFx0XHRcdFx0aWNvbnM6IHtcblx0XHRcdFx0XHRcdFx0cHJpbWFyeTogJ3VpLWljb24tY2lyY2xlLWNoZWNrJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JGJ1dHRvbnMuZXEoMSkuYnV0dG9uKHtcblx0XHRcdFx0XHRcdGljb25zOiB7XG5cdFx0XHRcdFx0XHRcdHByaW1hcnk6ICd1aS1pY29uLWNhbmNlbCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGlmIChuZXdWYWwgIT09IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUpIHtcblx0XHRcdGlmICh3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IHx8IHN0b3JhZ2VJdGVtID09PSAnYXV0bycpIHtcblx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRwcm9tcHQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xuXHQvLyBBZGQgT0stTGluayB0byB0aGUgY2F0cyBwYW5lbFxuXHRjb25zdCAkb2tMaW5rID0gJCgnPGE+Jylcblx0XHQuYXR0cih7XG5cdFx0XHRocmVmOiAnIycsXG5cdFx0XHR0aXRsZTogJ0NhdGVnb3JpZXMgYXJlIE9LISBJbW1lZGlhdGVseSByZW1vdmUgdGhlIHRlbXBsYXRlLicsXG5cdFx0fSlcblx0XHQuYXBwZW5kKCc8cz4nKVxuXHRcdC50ZXh0KCd7e0NoZWNrIGNhdGVnb3JpZXN9fScpO1xuXHQkb2tMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0ICRlbCA9ICQodGhpcyk7XG5cdFx0JGVsLm9mZignY2xpY2snKTtcblx0XHRjb25zdCBkb0VkaXQgPSAocmVzdWx0OiBzdHJpbmcpID0+IHtcblx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRlbC50ZXh0KCdEb2luZy4nKTtcblx0XHRcdGNvbnN0IHRleHQgPSByZXN1bHQucmVwbGFjZShjaGVja0NhdGVnb3JpZXNSZWdFeHAsICcnKTtcblx0XHRcdGlmICh0ZXh0ID09PSByZXN1bHQpIHtcblx0XHRcdFx0JGVsLnRleHQoJ1RlbXBsYXRlIG5vdCBmb3VuZCEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdFx0c3VtbWFyeTogYCR7c2VsZk5hbWV9Q2F0ZWdvcmllcyBhcmUgY2hlY2tlZCBhbmQgT0suIFlvdSBjYW4gaGVscCBbW0NhdGVnb3J5Ok1lZGlhIG5lZWRpbmcgY2F0ZWdvcnkgcmV2aWV3fHJldmlld2luZ11dIWAsXG5cdFx0XHRcdG5vY3JlYXRlOiB0cnVlLFxuXHRcdFx0XHR0ZXh0LFxuXHRcdFx0fSBhcyBjb25zdDtcblx0XHRcdGNvbnN0IGVkaXREb25lID0gKGVkaXRTdGF0Pzoge2Vycm9yPzoge2NvZGU/OiBzdHJpbmc7IGluZm8/OiBzdHJpbmd9fSkgPT4ge1xuXHRcdFx0XHRpZiAoIWVkaXRTdGF0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlZGl0U3RhdC5lcnJvcikge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0YFVuYWJsZSB0byByZW1vdmUgXCJDaGVjayBjYXRlZ29yaWVzXCIgd2l0aCB0aGUgQVBJXFxuJHtlZGl0U3RhdC5lcnJvci5jb2RlfVxcbiR7ZWRpdFN0YXQuZXJyb3IuaW5mb31gLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0YWc6ICdob3RDYXRDaGVjaycsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdCBEb25lLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHQkYm9keS5maW5kKCcuY2hlY2tjYXRlZ29yaWVzJykuZmFkZU91dCgpO1xuXHRcdFx0fTtcblx0XHRcdCRlbC50ZXh0KCdEb2luZy4uJyk7XG5cdFx0XHR2b2lkIGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW1zKS50aGVuKGVkaXREb25lKTtcblx0XHR9O1xuXHRcdCRlbC50ZXh0KCdEb2luZycpO1xuXHRcdHZvaWQgJC5hamF4KHtcblx0XHRcdHVybDogbXcuY29uZmlnLmdldCgnd2dTY3JpcHQnKSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC8gL2csICdfJyksXG5cdFx0XHR9LFxuXHRcdFx0ZGF0YVR5cGU6ICd0ZXh0Jyxcblx0XHRcdGVycm9yOiAoKSA9PiB7XG5cdFx0XHRcdCRlbC50ZXh0KCdFcnJvciEnKTtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBkb0VkaXQsXG5cdFx0XHR0eXBlOiAnR0VUJyxcblx0XHRcdGNhY2hlOiBmYWxzZSxcblx0XHR9KTtcblx0fSk7XG5cdCQoZnVuY3Rpb24gbG9hZEhvdENhdENoZWNrKCkge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5LmZpbmQoJyNjYXRsaW5rcycpLmZpbmQoJ3VsOmZpcnN0JykuYXBwZW5kKCQoJzxsaT4nKS5hcHBlbmQoJG9rTGluaykpO1xuXHR9KTtcbn0pKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9tb2R1bGVzL2NoZWNrJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2dldE1lc3NhZ2UnO1xuaW1wb3J0IHtob3RDYXRNZXNzYWdlc30gZnJvbSAnLi9tb2R1bGVzL21lc3NhZ2VzJztcbmltcG9ydCB7bXdBcGl9IGZyb20gJy4vbW9kdWxlcy9hcGknO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBamF4LWJhc2VkIHNpbXBsZSBDYXRlZ29yeSBtYW5hZ2VyLiBBbGxvd3MgYWRkaW5nL3JlbW92aW5nL2NoYW5naW5nIGNhdGVnb3JpZXMgb24gYSBwYWdlIHZpZXcuXG4gKiBTdXBwb3J0cyBtdWx0aXBsZSBjYXRlZ29yeSBjaGFuZ2VzLCBhcyB3ZWxsIGFzIHJlZGlyZWN0IGFuZCBkaXNhbWJpZ3VhdGlvbiByZXNvbHV0aW9uLiBBbHNvXG4gKiBwbHVncyBpbnRvIHRoZSB1cGxvYWQgZm9ybS4gU2VhcmNoIGVuZ2luZXMgdG8gdXNlIGZvciB0aGUgc3VnZ2VzdGlvbiBsaXN0IGFyZSBjb25maWd1cmFibGUsIGFuZFxuICogY2FuIGJlIHNlbGVjdGVkIGludGVyYWN0aXZlbHkuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9IZWxwOkdhZGdldC1Ib3RDYXR9XG4gKiBAYXV0aG9yIGF1dGhvcnMgPGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvSGVscDpHYWRnZXQtSG90Q2F0L1ZlcnNpb25faGlzdG9yeT5cbiAqL1xuLy8gTG9hZCB0cmFuc2xhdGlvbnMgbG9jYWxseVxuaG90Q2F0TWVzc2FnZXMoKTtcblxuLy8gTWFpbiBib2R5XG4oZnVuY3Rpb24gaG90Q2F0KCkge1xuXHQvLyBEb24ndCB1c2UgbXcuY29uZmlnLmdldCgpIGFzIHRoYXQgdGFrZXMgYSBjb3B5IG9mIHRoZSBjb25maWcsIGFuZCBzbyBkb2Vzbid0XG5cdC8vIGFjY291bnQgZm9yIHZhbHVlcyBjaGFuZ2luZywgZS5nLiB3Z0N1clJldmlzaW9uSWQgYWZ0ZXIgYSBWRSBlZGl0XG5cdGNvbnN0IGNvbmYgPSBtdy5jb25maWcudmFsdWVzO1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zIChpbiBvbGQgSUUvT3BlcmEgZWxlbWVudCBpZHMgYmVjb21lIHdpbmRvdyBwcm9wZXJ0aWVzKVxuXHRpZiAoKHdpbmRvdy5Ib3RDYXQgJiYgIXdpbmRvdy5Ib3RDYXQubm9kZU5hbWUpIHx8IGNvbmYud2dBY3Rpb24gPT09ICdlZGl0Jykge1xuXHRcdHJldHVybjsgLy8gTm90IG9uIGVkaXQgbW9kZVxuXHR9XG5cdC8vIEluaXRpYWxpemUgTWVkaWFXaWtpIEFQSVxuXHRjb25zdCBhcGkgPSBtd0FwaSgnSG90Q2F0LzMuMCcpO1xuXHQvLyBDb25maWd1cmF0aW9uIHN0dWZmLlxuXHR3aW5kb3cuSG90Q2F0ID0ge1xuXHRcdC8vIFRoZSBsaXR0bGUgbW9kaWZpY2F0aW9uIGxpbmtzIGRpc3BsYXllZCBhZnRlciBjYXRlZ29yeSBuYW1lcy4gVSsyMjEyIGlzIGEgbWludXMgc2lnbjsgVSsyMTkzIGFuZCBVKzIxOTEgYXJlXG5cdFx0Ly8gZG93bndhcmQgYW5kIHVwd2FyZCBwb2ludGluZyBhcnJvd3MuIERvIG5vdCB1c2Ug4oaTIGFuZCDihpEgaW4gdGhlIGNvZGUhXG5cdFx0bGlua3M6IHtcblx0XHRcdGNoYW5nZTogJyjCsSknLFxuXHRcdFx0cmVtb3ZlOiAnKFxcdTIyMTIpJyxcblx0XHRcdGFkZDogJygrKScsXG5cdFx0XHRyZXN0b3JlOiAnKMOXKScsXG5cdFx0XHR1bmRvOiAnKMOXKScsXG5cdFx0XHRkb3duOiAnKFxcdTIxOTMpJyxcblx0XHRcdHVwOiAnKFxcdTIxOTEpJyxcblx0XHR9LFxuXHRcdGNoYW5nZVRhZzogJ0hvdENhdCcsXG5cdFx0Ly8gVGhlIEhUTUwgY29udGVudCBvZiB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGluayBhdCB0aGUgZnJvbnQuXG5cdFx0YWRkbXVsdGk6ICc8c3Bhbj4rPHN1cD4rPC9zdXA+PC9zcGFuPicsXG5cdFx0Ly8gUmV0dXJuIHRydWUgdG8gZGlzYWJsZSBIb3RDYXQuXG5cdFx0ZGlzYWJsZTogKCkgPT4ge1xuXHRcdFx0Y29uc3QgbnMgPSBjb25mLndnTmFtZXNwYWNlTnVtYmVyO1xuXHRcdFx0Y29uc3QgbnNJZHMgPSBjb25mLndnTmFtZXNwYWNlSWRzO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0bnMgPCAwIHx8XG5cdFx0XHRcdC8vIFNwZWNpYWwgcGFnZXM7IFNwZWNpYWw6VXBsb2FkIGlzIGhhbmRsZWQgZGlmZmVyZW50bHlcblx0XHRcdFx0bnMgPT09IDEwIHx8XG5cdFx0XHRcdC8vIFRlbXBsYXRlc1xuXHRcdFx0XHRucyA9PT0gODI4IHx8XG5cdFx0XHRcdC8vIE1vZHVsZSAoTHVhKVxuXHRcdFx0XHRucyA9PT0gOCB8fFxuXHRcdFx0XHQvLyBNZWRpYVdpa2lcblx0XHRcdFx0KG5zID09PSA2ICYmICFjb25mLndnQXJ0aWNsZUlkKSB8fFxuXHRcdFx0XHQvLyBOb24tZXhpc3RpbmcgZmlsZSBwYWdlc1xuXHRcdFx0XHQobnMgPT09IDIgJiYgL1xcLihqc3xjc3MpJC8udGVzdChjb25mLndnVGl0bGUpKSB8fFxuXHRcdFx0XHQvLyBVc2VyIHNjcmlwdHNcblx0XHRcdFx0KG5zSWRzICYmIChucyA9PT0gbnNJZHMuY3JlYXRvciB8fCBucyA9PT0gbnNJZHMudGltZWR0ZXh0IHx8IG5zID09PSBuc0lkcy5pbnN0aXR1dGlvbikpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0Ly8gQSByZWdleHAgbWF0Y2hpbmcgYSB0ZW1wbGF0ZXMgdXNlZCB0byBtYXJrIHVuY2F0ZWdvcml6ZWQgcGFnZXMsIGlmIHlvdXIgd2lraSBkb2VzIGhhdmUgdGhhdC5cblx0XHQvLyBJZiBub3QsIHNldCBpdCB0byBudWxsLlxuXHRcdHVuY2F0X3JlZ2V4cDogL3t7XFxzKltVdV1uY2F0ZWdvcml6ZWRcXHMqW159XSp9fVxccyooPCEtLS4qPy0tPlxccyopPy9nLFxuXHRcdC8vIFRoZSBpbWFnZXMgdXNlZCBmb3IgdGhlIGxpdHRsZSBpbmRpY2F0aW9uIGljb24uIFNob3VsZCBub3QgbmVlZCBjaGFuZ2luZy5cblx0XHRleGlzdHNZZXM6ICdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iL2IvYmUvUF95ZXMuc3ZnLzIwcHgtUF95ZXMuc3ZnLnBuZycsXG5cdFx0ZXhpc3RzTm86ICdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iLzQvNDIvUF9uby5zdmcvMjBweC1QX25vLnN2Zy5wbmcnLFxuXHRcdC8vIGEgbGlzdCBvZiBjYXRlZ29yaWVzIHdoaWNoIGNhbiBiZSByZW1vdmVkIGJ5IHJlbW92aW5nIGEgdGVtcGxhdGVcblx0XHQvLyBrZXk6IHRoZSBjYXRlZ29yeSB3aXRob3V0IG5hbWVzcGFjZVxuXHRcdC8vIHZhbHVlOiBBIHJlZ2V4cCBtYXRjaGluZyB0aGUgdGVtcGxhdGUgbmFtZSwgYWdhaW4gd2l0aG91dCBuYW1lc3BhY2Vcblx0XHQvLyBJZiB5b3UgZG9uJ3QgaGF2ZSB0aGlzIGF0IHlvdXIgd2lraSwgb3IgZG9uJ3Qgd2FudCB0aGlzLCBzZXQgaXQgdG8gYW4gZW1wdHkgb2JqZWN0IHt9LlxuXHRcdHRlbXBsYXRlX2NhdGVnb3JpZXM6IHt9LFxuXHRcdC8vIE92ZXJyaWRlIHRoZSBkZWNpc2lvbiBvZiB3aGV0aGVyIEhvdENhdCBzaG91bGQgaGVscCB1c2VycyBieSBhdXRvbWF0aWNhbGx5XG5cdFx0Ly8gY2FwaXRhbGlzaW5nIHRoZSB0aXRsZSBpbiB0aGUgdXNlciBpbnB1dCB0ZXh0IGlmIHRoZSB3aWtpIGhhcyBjYXNlLXNlbnNpdGl2ZSBwYWdlIG5hbWVzLlxuXHRcdC8vIEJhc2ljYWxseSwgdGhpcyB3aWxsIG1ha2UgYW4gQVBJIHF1ZXJ5IHRvIGNoZWNrIHRoZSBNZWRpYVdpa2kgY29uZmlndXJhdGlvbiBhbmQgSG90Q2F0IHRoZW4gc2V0c1xuXHRcdC8vIHRoaXMgdG8gdHJ1ZSBmb3IgbW9zdCB3aWtpcywgYW5kIHRvIGZhbHNlIG9uIFdpa3Rpb25hcnkuXG5cdFx0Ly9cblx0XHQvLyBZb3UgY2FuIHNldCB0aGlzIGRpcmVjdGx5IGlmIHRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIGl0LiBGb3IgZXhhbXBsZSwgR2VvcmdpYW4gV2lraXBlZGlhIChrYXdpa2kpLFxuXHRcdC8vIGlzIGtub3duIHRvIGhhdmUgZGlmZmVyZW50IGNhcGl0YWxpc2F0aW9uIGxvZ2ljIGJldHdlZW4gTWVkaWFXaWtpIFBIUCBhbmQgSmF2YVNjcmlwdC4gQXMgc3VjaCwgYXV0b21hdGljXG5cdFx0Ly8gY2FzZSBjaGFuZ2VzIGluIEphdmFTY3JpcHQgYnkgSG90Q2F0IHdvdWxkIGJlIHdyb25nLlxuXHRcdGNhcGl0YWxpemVQYWdlTmFtZXM6IG51bGwsXG5cdFx0Ly8gSWYgdXBsb2FkX2Rpc2FibGVkIGlzIHRydWUsIEhvdENhdCB3aWxsIG5vdCBiZSB1c2VkIG9uIHRoZSBVcGxvYWQgZm9ybS5cblx0XHR1cGxvYWRfZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdC8vIFNpbmdsZSByZWd1bGFyIGV4cHJlc3Npb24gbWF0Y2hpbmcgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllcyB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIG9yXG5cdFx0Ly8gYWRkZWQgdXNpbmcgSG90Q2F0LiBGb3IgaW5zdGFuY2UgL1xcYnN0dWJzPyQvIChhbnkgY2F0ZWdvcnkgZW5kaW5nIHdpdGggdGhlIHdvcmQgXCJzdHViXCJcblx0XHQvLyBvciBcInN0dWJzXCIpLCBvciAvKFxcYnN0dWJzPyQpfFxcYm1haW50ZW5hbmNlXFxiLyAoc3R1YiBjYXRlZ29yaWVzIGFuZCBhbnkgY2F0ZWdvcnkgd2l0aCB0aGVcblx0XHQvLyB3b3JkIFwibWFpbnRlbmFuY2VcIiBpbiBpdHMgdGl0bGUuXG5cdFx0YmxhY2tsaXN0OiBudWxsLFxuXHRcdC8vIFN0dWZmIGNoYW5nZWFibGUgYnkgdXNlcnM6XG5cdFx0Ly8gQmFja2dyb3VuZCBmb3IgY2hhbmdlZCBjYXRlZ29yaWVzIGluIG11bHRpLWVkaXQgbW9kZS4gRGVmYXVsdCBpcyBhIHZlcnkgbGlnaHQgc2FsbW9uIHBpbmsuXG5cdFx0YmdfY2hhbmdlZDogJyNGQ0EnLFxuXHRcdC8vIElmIHRydWUsIEhvdENhdCB3aWxsIG5ldmVyIGF1dG9tYXRpY2FsbHkgc3VibWl0IGNoYW5nZXMuIEhvdENhdCB3aWxsIG9ubHkgb3BlbiBhbiBlZGl0IHBhZ2Ugd2l0aFxuXHRcdC8vIHRoZSBjaGFuZ2VzOyB1c2VycyBtdXN0IGFsd2F5cyBzYXZlIGV4cGxpY2l0bHkuXG5cdFx0bm9fYXV0b2NvbW1pdDogZmFsc2UsXG5cdFx0Ly8gSWYgdHJ1ZSwgdGhlIFwiY2F0ZWdvcnkgZGVsZXRpb25cIiBsaW5rIFwiKC0pXCIgd2lsbCBuZXZlciBzYXZlIGF1dG9tYXRpY2FsbHkgYnV0IGFsd2F5cyBzaG93IGFuXG5cdFx0Ly8gZWRpdCBwYWdlIHdoZXJlIHRoZSB1c2VyIGhhcyB0byBzYXZlIHRoZSBlZGl0IG1hbnVhbGx5LiBJcyBmYWxzZSBieSBkZWZhdWx0IGJlY2F1c2UgdGhhdCdzIHRoZVxuXHRcdC8vIHRyYWRpdGlvbmFsIGJlaGF2aW9yLiBUaGlzIHNldHRpbmcgb3ZlcnJpZGVzIG5vX2F1dG9jb21taXQgZm9yIFwiKC0pXCIgbGlua3MuXG5cdFx0ZGVsX25lZWRzX2RpZmY6IGZhbHNlLFxuXHRcdC8vIFRpbWUsIGluIG1pbGxpc2Vjb25kcywgdGhhdCBIb3RDYXQgd2FpdHMgYWZ0ZXIgYSBrZXlzdHJva2UgYmVmb3JlIG1ha2luZyBhIHJlcXVlc3QgdG8gdGhlXG5cdFx0Ly8gc2VydmVyIHRvIGdldCBzdWdnZXN0aW9ucy5cblx0XHRzdWdnZXN0X2RlbGF5OiAxMDAwLFxuXHRcdC8vIERlZmF1bHQgd2lkdGgsIGluIGNoYXJhY3RlcnMsIG9mIHRoZSB0ZXh0IGlucHV0IGZpZWxkLlxuXHRcdGVkaXRib3hfd2lkdGg6IDQwLFxuXHRcdC8vIE9uZSBvZiB0aGUgZW5naW5lX25hbWVzIGFib3ZlLCB0byBiZSB1c2VkIGFzIHRoZSBkZWZhdWx0IHN1Z2dlc3Rpb24gZW5naW5lLlxuXHRcdHN1Z2dlc3Rpb25zOiAnY29tYmluZWQnLFxuXHRcdC8vIElmIHRydWUsIGFsd2F5cyB1c2UgdGhlIGRlZmF1bHQgZW5naW5lLCBhbmQgbmV2ZXIgZGlzcGxheSBhIHNlbGVjdG9yLlxuXHRcdGZpeGVkX3NlYXJjaDogZmFsc2UsXG5cdFx0Ly8gSWYgZmFsc2UsIGRvIG5vdCBkaXNwbGF5IHRoZSBcInVwXCIgYW5kIFwiZG93blwiIGxpbmtzXG5cdFx0dXNlX3VwX2Rvd246IHRydWUsXG5cdFx0Ly8gRGVmYXVsdCBsaXN0IHNpemVcblx0XHRsaXN0U2l6ZTogMTAsXG5cdFx0Ly8gSWYgdHJ1ZSwgc2luZ2xlIGNhdGVnb3J5IGNoYW5nZXMgYXJlIG1hcmtlZCBhcyBtaW5vciBlZGl0cy4gSWYgZmFsc2UsIHRoZXkncmUgbm90LlxuXHRcdHNpbmdsZV9taW5vcjogdHJ1ZSxcblx0XHQvLyBJZiB0cnVlLCBuZXZlciBhZGQgYSBwYWdlIHRvIHRoZSB1c2VyJ3Mgd2F0Y2hsaXN0LiBJZiBmYWxzZSwgcGFnZXMgZ2V0IGFkZGVkIHRvIHRoZSB3YXRjaGxpc3QgaWZcblx0XHQvLyB0aGUgdXNlciBoYXMgdGhlIFwiQWRkIHBhZ2VzIEkgZWRpdCB0byBteSB3YXRjaGxpc3RcIiBvciB0aGUgXCJBZGQgcGFnZXMgSSBjcmVhdGUgdG8gbXkgd2F0Y2hsaXN0XCJcblx0XHQvLyBvcHRpb25zIGluIGhpcyBvciBoZXIgcHJlZmVyZW5jZXMgc2V0LlxuXHRcdGRvbnRfYWRkX3RvX3dhdGNobGlzdDogZmFsc2UsXG5cdFx0c2hvcnRjdXRzOiBudWxsLFxuXHRcdGFkZFNob3J0Y3V0czogKG1hcCkgPT4ge1xuXHRcdFx0bGV0IF9hO1xuXHRcdFx0aWYgKCFtYXApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0KF9hID0gd2luZG93LkhvdENhdCkuc2hvcnRjdXRzIHx8IChfYS5zaG9ydGN1dHMgPSB7fSk7XG5cdFx0XHRmb3IgKGxldCBrIGluIG1hcCkge1xuXHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24obWFwLCBrKSB8fCB0eXBlb2YgayAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdiA9IG1hcFtrXTtcblx0XHRcdFx0aWYgKHR5cGVvZiB2ICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGsgPSBrLnRyaW0oKTtcblx0XHRcdFx0diA9IHYudHJpbSgpO1xuXHRcdFx0XHRpZiAoay5sZW5ndGggPT09IDAgfHwgdi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR3aW5kb3cuSG90Q2F0LnNob3J0Y3V0c1trXSA9IHY7XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcblx0Y29uc3QgSEMgPSB3aW5kb3cuSG90Q2F0O1xuXHQvLyBNb3JlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBXZSBoYXZlIGEgZmV3IHBsYWNlcyB3aGVyZSB3ZSB0ZXN0IGZvciB0aGUgYnJvd3Nlcjogb25jZSBmb3Jcblx0Ly8gU2FmYXJpIDwgMy4wLCBhbmQgdHdpY2UgZm9yIFdlYktpdCAoQ2hyb21lIG9yIFNhZmFyaSwgYW55IHZlcnNpb25zKVxuXHRjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcblx0Y29uc3QgaXNfd2Via2l0ID0gL2FwcGxld2Via2l0XFwvXFxkKy8udGVzdCh1YSkgJiYgIXVhLmluY2x1ZGVzKCdzcG9vZmVyJyk7XG5cdGxldCBjYXRfcHJlZml4ID0gbnVsbDtcblx0bGV0IG5vU3VnZ2VzdGlvbnMgPSBmYWxzZTtcblx0Ly8gTm8gZnVydGhlciBjaGFuZ2VzIHNob3VsZCBiZSBuZWNlc3NhcnkgaGVyZS5cblx0Ly8gVGhlIGZvbGxvd2luZyByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5ncyBhcmUgdXNlZCB3aGVuIHNlYXJjaGluZyBmb3IgY2F0ZWdvcmllcyBpbiB3aWtpdGV4dC5cblx0Y29uc3Qgd2lraVRleHRCbGFuayA9ICdbXFxcXHQgX1xcXFx4QTBcXFxcdTE2ODBcXFxcdTE4MEVcXFxcdTIwMDAtXFxcXHUyMDBBXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUyMDJGXFxcXHUyMDVGXFxcXHUzMDAwXSsnO1xuXHRjb25zdCB3aWtpVGV4dEJsYW5rUkUgPSBuZXcgUmVnRXhwKHdpa2lUZXh0QmxhbmssICdnJyk7XG5cdC8vIFJlZ2V4cCBmb3IgaGFuZGxpbmcgYmxhbmtzIGluc2lkZSBhIGNhdGVnb3J5IHRpdGxlIG9yIG5hbWVzcGFjZSBuYW1lLlxuXHQvLyBTZWUge0BsaW5rIGh0dHA6Ly9zdm4ud2lraW1lZGlhLm9yZy92aWV3dmMvbWVkaWF3aWtpL3RydW5rL3BoYXNlMy9pbmNsdWRlcy9UaXRsZS5waHA/cmV2aXNpb249MTA0MDUxJnZpZXc9bWFya3VwI2wyNzIyfVxuXHQvLyBTZWUgYWxzbyB7QGxpbmsgaHR0cDovL3d3dy5maWxlZm9ybWF0LmluZm8vaW5mby91bmljb2RlL2NhdGVnb3J5L1pzL2xpc3QuaHRtfVxuXHQvLyAgIE1lZGlhV2lraSBjb2xsYXBzZXMgc2V2ZXJhbCBjb250aWd1b3VzIGJsYW5rcyBpbnNpZGUgYSBwYWdlIHRpdGxlIHRvIG9uZSBzaW5nbGUgYmxhbmsuIEl0IGFsc28gcmVwbGFjZSBhXG5cdC8vIG51bWJlciBvZiBzcGVjaWFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBieSBzaW1wbGUgYmxhbmtzLiBBbmQgZmluYWxseSwgYmxhbmtzIGFyZSB0cmVhdGVkIGFzIHVuZGVyc2NvcmVzLlxuXHQvLyBUaGVyZWZvcmUsIHdoZW4gbG9va2luZyBmb3IgcGFnZSB0aXRsZXMgaW4gd2lraXRleHQsIHdlIG11c3QgaGFuZGxlIGFsbCB0aGVzZSBjYXNlcy5cblx0Ly8gICBOb3RlOiB3ZSBfZG9fIGluY2x1ZGUgdGhlIGhvcml6b250YWwgdGFiIGluIHRoZSBhYm92ZSBsaXN0LCBldmVuIHRob3VnaCB0aGUgTWVkaWFXaWtpIHNvZnR3YXJlIGZvciBzb21lIHJlYXNvblxuXHQvLyBhcHBlYXJzIHRvIG5vdCBoYW5kbGUgaXQuIFRoZSB6ZXJvLXdpZHRoIHNwYWNlIFxcdTIwMEIgaXMgX25vdF8gaGFuZGxlZCBhcyBhIHNwYWNlIGluc2lkZSB0aXRsZXMgYnkgTVcuXG5cdGNvbnN0IHdpa2lUZXh0QmxhbmtPckJpZGkgPSAnW1xcXFx0IF9cXFxceEEwXFxcXHUxNjgwXFxcXHUxODBFXFxcXHUyMDAwLVxcXFx1MjAwQlxcXFx1MjAwRVxcXFx1MjAwRlxcXFx1MjAyOC1cXFxcdTIwMkZcXFxcdTIwNUZcXFxcdTMwMDBdKic7XG5cdC8vIFdoaXRlc3BhY2UgcmVnZXhwIGZvciBoYW5kbGluZyB3aGl0ZXNwYWNlIGJldHdlZW4gbGluayBjb21wb25lbnRzLiBJbmNsdWRpbmcgdGhlIGhvcml6b250YWwgdGFiLCBidXQgbm90IFxcblxcclxcZlxcdjpcblx0Ly8gYSBsaW5rIG11c3QgYmUgb24gb25lIHNpbmdsZSBsaW5lLlxuXHQvLyAgIE1lZGlhV2lraSBhbHNvIHJlbW92ZXMgVW5pY29kZSBiaWRpIG92ZXJyaWRlIGNoYXJhY3RlcnMgaW4gcGFnZSB0aXRsZXMgKGFuZCBuYW1lc3BhY2UgbmFtZXMpIGNvbXBsZXRlbHkuXG5cdC8vIFRoaXMgaXMgKm5vdCogaGFuZGxlZCwgYXMgaXQgd291bGQgcmVxdWlyZSB1cyB0byBhbGxvdyBhbnkgb2YgW1xcdTIwMEVcXHUyMDBGXFx1MjAyQS1cXHUyMDJFXSBiZXR3ZWVuIGFueSB0d29cblx0Ly8gY2hhcmFjdGVycyBpbnNpZGUgYSBjYXRlZ29yeSBsaW5rLiBJdCBfY291bGRfIGJlIGRvbmUgdGhvdWdoLi4uIFdlIF9kb18gaGFuZGxlIHN0cmFuZ2Ugc3BhY2VzLCBpbmNsdWRpbmcgdGhlXG5cdC8vIHplcm8td2lkdGggc3BhY2UgXFx1MjAwQiwgYW5kIGJpZGkgb3ZlcnJpZGVzIGJldHdlZW4gdGhlIGNvbXBvbmVudHMgb2YgYSBjYXRlZ29yeSBsaW5rIChhZGphY2VudCB0byB0aGUgY29sb24sXG5cdC8vIG9yIGFkamFjZW50IHRvIGFuZCBpbnNpZGUgb2YgXCJbW1wiIGFuZCBcIl1dXCIpLlxuXHQvLyBGaXJzdCBhdXRvLWxvY2FsaXplIHRoZSByZWdleHBzIGZvciB0aGUgY2F0ZWdvcnkgYW5kIHRoZSB0ZW1wbGF0ZSBuYW1lc3BhY2VzLlxuXHRjb25zdCBmb3JtYXR0ZWROYW1lc3BhY2VzID0gY29uZi53Z0Zvcm1hdHRlZE5hbWVzcGFjZXM7XG5cdGNvbnN0IG5hbWVzcGFjZUlkcyA9IGNvbmYud2dOYW1lc3BhY2VJZHM7XG5cdGNvbnN0IGF1dG9Mb2NhbGl6ZSA9IChuYW1lc3BhY2VOdW1iZXIsIGZhbGxiYWNrKSA9PiB7XG5cdFx0Y29uc3QgY3JlYXRlUmVnZXhwU3RyID0gKG5hbWUpID0+IHtcblx0XHRcdGlmICghbmFtZSB8fCBuYW1lLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgcmVnZXhfbmFtZSA9ICcnO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGluaXRpYWwgPSBuYW1lLmNoYXJBdChpKTtcblx0XHRcdFx0Y29uc3QgbGwgPSBpbml0aWFsLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGNvbnN0IHVsID0gaW5pdGlhbC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRyZWdleF9uYW1lICs9IGxsID09PSB1bCA/IGluaXRpYWwgOiBgWyR7bGx9JHt1bH1dYDtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZWdleF9uYW1lLnJlcGxhY2UoLyhbJCgpKisuP1xcXFxeXSkvZywgJ1xcXFwkMScpLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKTtcblx0XHR9O1xuXHRcdGZhbGxiYWNrID0gZmFsbGJhY2sudG9Mb3dlckNhc2UoKTtcblx0XHRjb25zdCBjYW5vbmljYWwgPSBmb3JtYXR0ZWROYW1lc3BhY2VzW1N0cmluZyhuYW1lc3BhY2VOdW1iZXIpXS50b0xvd2VyQ2FzZSgpO1xuXHRcdGxldCByZWdleHAgPSBjcmVhdGVSZWdleHBTdHIoY2Fub25pY2FsKTtcblx0XHRpZiAoZmFsbGJhY2sgJiYgY2Fub25pY2FsICE9PSBmYWxsYmFjaykge1xuXHRcdFx0cmVnZXhwICs9IGB8JHtjcmVhdGVSZWdleHBTdHIoZmFsbGJhY2spfWA7XG5cdFx0fVxuXHRcdGlmIChuYW1lc3BhY2VJZHMpIHtcblx0XHRcdGZvciAoY29uc3QgY2F0X25hbWUgaW4gbmFtZXNwYWNlSWRzKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0eXBlb2YgY2F0X25hbWUgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0Y2F0X25hbWUudG9Mb3dlckNhc2UoKSAhPT0gY2Fub25pY2FsICYmXG5cdFx0XHRcdFx0Y2F0X25hbWUudG9Mb3dlckNhc2UoKSAhPT0gZmFsbGJhY2sgJiZcblx0XHRcdFx0XHRuYW1lc3BhY2VJZHNbY2F0X25hbWVdID09PSBuYW1lc3BhY2VOdW1iZXJcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmVnZXhwICs9IGB8JHtjcmVhdGVSZWdleHBTdHIoY2F0X25hbWUpfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlZ2V4cDtcblx0fTtcblx0SEMuY2F0ZWdvcnlfY2Fub25pY2FsID0gZm9ybWF0dGVkTmFtZXNwYWNlc1snMTQnXTtcblx0SEMuY2F0ZWdvcnlfcmVnZXhwID0gYXV0b0xvY2FsaXplKDE0LCAnY2F0ZWdvcnknKTtcblx0aWYgKGZvcm1hdHRlZE5hbWVzcGFjZXNbJzEwJ10pIHtcblx0XHRIQy50ZW1wbGF0ZV9yZWdleHAgPSBhdXRvTG9jYWxpemUoMTAsICd0ZW1wbGF0ZScpO1xuXHR9XG5cdC8vIFV0aWxpdHkgZnVuY3Rpb25zLiBZZXMsIHRoaXMgZHVwbGljYXRlcyBzb21lIGZ1bmN0aW9uYWxpdHkgdGhhdCBhbHNvIGV4aXN0cyBpbiBvdGhlciBwbGFjZXMsIGJ1dFxuXHQvLyB0byBrZWVwIHRoaXMgd2hvbGUgc3R1ZmYgaW4gYSBzaW5nbGUgZmlsZSBub3QgZGVwZW5kaW5nIG9uIGFueSBvdGhlciBvbi13aWtpIEphdmFTY3JpcHRzLCB3ZSByZS1kb1xuXHQvLyB0aGVzZSBmZXcgb3BlcmF0aW9ucyBoZXJlLlxuXHRjb25zdCBtYWtlID0gKGFyZywgbGl0ZXJhbCkgPT4ge1xuXHRcdGlmICghYXJnKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIGxpdGVyYWwgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhcmcpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmcpO1xuXHR9O1xuXHRjb25zdCBwYXJhbSA9IChuYW1lLCB1cmkpID0+IHtcblx0XHR1cmkgfHw9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG5cdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGBbJj9dJHtuYW1lfT0oW14mI10qKWApO1xuXHRcdGNvbnN0IG0gPSByZS5leGVjKHVyaSk7XG5cdFx0aWYgKG0gJiYgbS5sZW5ndGggPiAxKSB7XG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KG1bMV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgdGl0bGUgPSAoaHJlZikgPT4ge1xuXHRcdGlmICghaHJlZikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHNjcmlwdCA9IGAke2NvbmYud2dTY3JpcHR9P2A7XG5cdFx0aWYgKFxuXHRcdFx0aHJlZi5pbmRleE9mKHNjcmlwdCkgPT09IDAgfHxcblx0XHRcdGhyZWYuaW5kZXhPZihjb25mLndnU2VydmVyICsgc2NyaXB0KSA9PT0gMCB8fFxuXHRcdFx0KGNvbmYud2dTZXJ2ZXIuc2xpY2UoMCwgMikgPT09ICcvLycgJiZcblx0XHRcdFx0aHJlZi5pbmRleE9mKGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgY29uZi53Z1NlcnZlciArIHNjcmlwdCkgPT09IDApXG5cdFx0KSB7XG5cdFx0XHQvLyBocmVmPVwiL2luZGV4LnBocD90aXRsZT0uLi5cIlxuXHRcdFx0cmV0dXJuIHBhcmFtKCd0aXRsZScsIGhyZWYpO1xuXHRcdH1cblx0XHQvLyBocmVmPVwiL3dpa2kvLi4uXCJcblx0XHRsZXQgcHJlZml4ID0gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpO1xuXHRcdGlmIChocmVmLmluZGV4T2YocHJlZml4KSkge1xuXHRcdFx0cHJlZml4ID0gY29uZi53Z1NlcnZlciArIHByZWZpeDtcblx0XHR9IC8vIEZ1bGx5IGV4cGFuZGVkIFVSTD9cblx0XHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkgJiYgcHJlZml4LnNsaWNlKDAsIDIpID09PSAnLy8nKSB7XG5cdFx0XHRwcmVmaXggPSBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArIHByZWZpeDtcblx0XHR9IC8vIFByb3RvY29sLXJlbGF0aXZlIHdnU2VydmVyP1xuXHRcdGlmIChocmVmLmluZGV4T2YocHJlZml4KSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChocmVmLnNsaWNlKHByZWZpeC5sZW5ndGgpKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IGhhc0NsYXNzID0gKHtjbGFzc05hbWV9LCBuYW1lKSA9PiB7XG5cdFx0cmV0dXJuIGAgJHtjbGFzc05hbWV9IGAuaW5jbHVkZXMoYCAke25hbWV9IGApO1xuXHR9O1xuXHRjb25zdCBjYXBpdGFsaXplID0gKHN0cikgPT4ge1xuXHRcdGlmICghc3RyIHx8IHN0ci5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fVxuXHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0fTtcblx0Y29uc3Qgd2lraVBhZ2VQYXRoID0gKHBhZ2VOYW1lKSA9PiB7XG5cdFx0cmV0dXJuIGNvbmYud2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsIGVuY29kZVVSSUNvbXBvbmVudChwYWdlTmFtZSkucmVwbGFjZSgvJTNBL2csICc6JykucmVwbGFjZSgvJTJGL2csICcvJykpO1xuXHR9O1xuXHRjb25zdCBlc2NhcGVSRSA9IChzdHIpID0+IHtcblx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoLyhbJCgpKisuP1tcXFxcXFxdXl0pL2csICdcXFxcJDEnKTtcblx0fTtcblx0Y29uc3Qgc3Vic3RpdHV0ZUZhY3RvcnkgPSAob3B0aW9ucykgPT4ge1xuXHRcdG9wdGlvbnMgfHw9IHt9O1xuXHRcdGNvbnN0IGxlYWQgPSBvcHRpb25zLmluZGljYXRvciB8fCAnJCc7XG5cdFx0Y29uc3QgaW5kaWNhdG9yID0gZXNjYXBlUkUobGVhZCk7XG5cdFx0Y29uc3QgbGJyYWNlID0gZXNjYXBlUkUob3B0aW9ucy5sYnJhY2UgfHwgJ3snKTtcblx0XHRjb25zdCByYnJhY2UgPSBlc2NhcGVSRShvcHRpb25zLnJicmFjZSB8fCAnfScpO1xuXHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChcblx0XHRcdC8vICQkXG5cdFx0XHRgKD86JHtpbmRpY2F0b3J9KCR7aW5kaWNhdG9yfSkpfGAgK1xuXHRcdFx0XHQvLyAkMCwgJDFcblx0XHRcdFx0YCg/OiR7aW5kaWNhdG9yfShcXFxcZCspKXxgICtcblx0XHRcdFx0Ly8gJHtrZXl9XG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oPzoke2xicmFjZX0oW14ke2xicmFjZX0ke3JicmFjZX1dKykke3JicmFjZX0pKXxgICtcblx0XHRcdFx0Ly8gJGtleSAob25seSBpZiBmaXJzdCBjaGFyIGFmdGVyICQgaXMgbm90ICQsIGRpZ2l0LCBvciB7IClcblx0XHRcdFx0YCg/OiR7aW5kaWNhdG9yfSg/ISg/Olske2luZGljYXRvcn0ke2xicmFjZX1dfFxcXFxkKSkoXFxcXFMrPylcXFxcYilgLFxuXHRcdFx0J2cnXG5cdFx0KTtcblx0XHQvLyBSZXBsYWNlICQxLCAkMiwgb3IgJHtrZXkxfSwgJHtrZXkyfSwgb3IgJGtleTEsICRrZXkyIGJ5IHZhbHVlcyBmcm9tIG1hcC4gJCQgaXMgcmVwbGFjZWQgYnkgYSBzaW5nbGUgJC5cblx0XHRyZXR1cm4gKHN0ciwgbWFwKSA9PiB7XG5cdFx0XHRpZiAoIW1hcCkge1xuXHRcdFx0XHRyZXR1cm4gc3RyO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKHJlLCAobWF0Y2gsIHByZWZpeCwgaWR4LCBrZXksIGFscGhhKSA9PiB7XG5cdFx0XHRcdGlmIChwcmVmaXggPT09IGxlYWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gbGVhZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBrID0gYWxwaGEgfHwga2V5IHx8IGlkeDtcblx0XHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQgPSB0eXBlb2YgbWFwW2tdID09PSAnZnVuY3Rpb24nID8gbWFwW2tdKG1hdGNoLCBrKSA6IG1hcFtrXTtcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiByZXBsYWNlbWVudCA9PT0gJ3N0cmluZycgPyByZXBsYWNlbWVudCA6IHJlcGxhY2VtZW50IHx8IG1hdGNoO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0fTtcblx0Y29uc3QgcmVwbGFjZVNob3J0Y3V0cyA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgcmVwbGFjZUhhc2ggPSBzdWJzdGl0dXRlRmFjdG9yeSh7XG5cdFx0XHRpbmRpY2F0b3I6ICcjJyxcblx0XHRcdGxicmFjZTogJ1snLFxuXHRcdFx0cmJyYWNlOiAnXScsXG5cdFx0fSk7XG5cdFx0cmV0dXJuIChzdHIsIG1hcCkgPT4ge1xuXHRcdFx0Y29uc3QgcyA9IHJlcGxhY2VIYXNoKHN0ciwgbWFwKTtcblx0XHRcdHJldHVybiBIQy5jYXBpdGFsaXplUGFnZU5hbWVzID8gY2FwaXRhbGl6ZShzKSA6IHM7XG5cdFx0fTtcblx0fSkoKTtcblx0Ly8gVGV4dCBtb2RpZmljYXRpb25cblx0Y29uc3QgZmluZENhdHNSRSA9IG5ldyBSZWdFeHAoXG5cdFx0YFxcXFxbXFxcXFske3dpa2lUZXh0QmxhbmtPckJpZGl9KD86JHtIQy5jYXRlZ29yeV9yZWdleHB9KSR7d2lraVRleHRCbGFua09yQmlkaX06W15cXFxcXV0rXFxcXF1cXFxcXWAsXG5cdFx0J2cnXG5cdCk7XG5cdGNvbnN0IHJlcGxhY2VCeUJsYW5rcyA9IChtYXRjaCkgPT4ge1xuXHRcdHJldHVybiBtYXRjaC5yZXBsYWNlKC8oXFxzfFxcUykvZywgJyAnKTtcblx0fTsgLy8gLy4vIGRvZXNuJ3QgbWF0Y2ggbGluZWJyZWFrcy4gLyhcXHN8XFxTKS8gZG9lcy5cblx0Y29uc3QgZmluZF9jYXRlZ29yeSA9ICh3aWtpdGV4dCwgY2F0ZWdvcnksIG9uY2UpID0+IHtcblx0XHRsZXQgY2F0X3JlZ2V4ID0gbnVsbDtcblx0XHRpZiAoSEMudGVtcGxhdGVfY2F0ZWdvcmllc1tjYXRlZ29yeV0pIHtcblx0XHRcdGNhdF9yZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxce1xcXFx7JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSgke0hDLnRlbXBsYXRlX3JlZ2V4cH0oPz0ke3dpa2lUZXh0QmxhbmtPckJpZGl9OikpPyR7d2lraVRleHRCbGFua09yQmlkaX0oPzoke0hDLnRlbXBsYXRlX2NhdGVnb3JpZXNbY2F0ZWdvcnldfSkke3dpa2lUZXh0QmxhbmtPckJpZGl9KFxcXFx8Lio/KT9cXFxcfVxcXFx9YCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBjYXRfbmFtZSA9IGVzY2FwZVJFKGNhdGVnb3J5KTtcblx0XHRcdGNvbnN0IGluaXRpYWwgPSBjYXRfbmFtZS5zbGljZSgwLCAxKTtcblx0XHRcdGNhdF9yZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxcW1xcXFxbJHt3aWtpVGV4dEJsYW5rT3JCaWRpfSgke0hDLmNhdGVnb3J5X3JlZ2V4cH0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfToke3dpa2lUZXh0QmxhbmtPckJpZGl9JHtcblx0XHRcdFx0XHRpbml0aWFsID09PSAnXFxcXCcgfHwgIUhDLmNhcGl0YWxpemVQYWdlTmFtZXNcblx0XHRcdFx0XHRcdD8gaW5pdGlhbFxuXHRcdFx0XHRcdFx0OiBgWyR7aW5pdGlhbC50b1VwcGVyQ2FzZSgpfSR7aW5pdGlhbC50b0xvd2VyQ2FzZSgpfV1gXG5cdFx0XHRcdH0ke2NhdF9uYW1lLnNsaWNlKDEpLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKX0ke3dpa2lUZXh0QmxhbmtPckJpZGl9KFxcXFx8Lio/KT9cXFxcXVxcXFxdYCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAob25jZSkge1xuXHRcdFx0cmV0dXJuIGNhdF9yZWdleC5leGVjKHdpa2l0ZXh0KTtcblx0XHR9XG5cdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKCc8bm8nLmNvbmNhdCgnd2lraT4nLCAnKFxcXFxzfFxcXFxTKSo/PC9ubycsICd3aWtpJywgJz4nKSwgJ2cnKTtcblx0XHRjb25zdCBjb3BpZWR0ZXh0ID0gd2lraXRleHQucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csIHJlcGxhY2VCeUJsYW5rcykucmVwbGFjZShub3dpa2lSZWdleCwgcmVwbGFjZUJ5QmxhbmtzKTtcblx0XHRjb25zdCByZXN1bHQgPSBbXTtcblx0XHRsZXQgY3Vycl9tYXRjaCA9IG51bGw7XG5cdFx0d2hpbGUgKChjdXJyX21hdGNoID0gY2F0X3JlZ2V4LmV4ZWMoY29waWVkdGV4dCkpICE9PSBudWxsKSB7XG5cdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB7XG5cdFx0XHRcdG1hdGNoOiBjdXJyX21hdGNoLFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmVzdWx0LnJlID0gY2F0X3JlZ2V4O1xuXHRcdHJldHVybiByZXN1bHQ7IC8vIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG1hdGNoZXMsIHdpdGggcG9zaXRpb25zLCBpbiByZXN1bHRbIGkgXS5tYXRjaFxuXHR9O1xuXHRsZXQgaW50ZXJsYW5ndWFnZVJFID0gbnVsbDtcblx0Y29uc3QgY2hhbmdlX2NhdGVnb3J5ID0gKHdpa2l0ZXh0LCB0b1JlbW92ZSwgdG9BZGQsIGtleSwgaXNfaGlkZGVuKSA9PiB7XG5cdFx0Y29uc3QgZmluZF9pbnNlcnRpb25wb2ludCA9IChfd2lraXRleHQpID0+IHtcblx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgJyhcXFxcc3xcXFxcUykqPzwvbm8nLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRjb25zdCBjb3BpZWR0ZXh0ID0gX3dpa2l0ZXh0XG5cdFx0XHRcdC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgcmVwbGFjZUJ5QmxhbmtzKVxuXHRcdFx0XHQucmVwbGFjZShub3dpa2lSZWdleCwgcmVwbGFjZUJ5QmxhbmtzKTtcblx0XHRcdC8vIFNlYXJjaCBpbiBjb3BpZWR0ZXh0IHRvIGF2b2lkIHRoYXQgd2UgaW5zZXJ0IGluc2lkZSBhbiBIVE1MIGNvbW1lbnQgb3IgYSBub3dpa2kgXCJlbGVtZW50XCIuXG5cdFx0XHRsZXQgaW5kZXggPSAtMTtcblx0XHRcdGZpbmRDYXRzUkUubGFzdEluZGV4ID0gMDtcblx0XHRcdHdoaWxlIChmaW5kQ2F0c1JFLmV4ZWMoY29waWVkdGV4dCkgIT09IG51bGwpIHtcblx0XHRcdFx0aW5kZXggPSBmaW5kQ2F0c1JFLmxhc3RJbmRleDtcblx0XHRcdH1cblx0XHRcdGlmIChpbmRleCA8IDApIHtcblx0XHRcdFx0Ly8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGludGVybGFuZ3VhZ2UgbGluay4uLlxuXHRcdFx0XHRsZXQgbWF0Y2ggPSBudWxsO1xuXHRcdFx0XHRpbnRlcmxhbmd1YWdlUkVcblx0XHRcdFx0XHQ/IChtYXRjaCA9IGludGVybGFuZ3VhZ2VSRS5leGVjKGNvcGllZHRleHQpKVxuXHRcdFx0XHRcdDogLy8gQXBwcm94aW1hdGlvbiB3aXRob3V0IEFQSTogaW50ZXJsYW5ndWFnZSBsaW5rcyBzdGFydCB3aXRoIDIgdG8gMyBsb3dlciBjYXNlIGxldHRlcnMsIG9wdGlvbmFsbHkgZm9sbG93ZWQgYnlcblx0XHRcdFx0XHRcdC8vIGEgc2VxdWVuY2Ugb2YgZ3JvdXBzIGNvbnNpc3Rpbmcgb2YgYSBkYXNoIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGxvd2VyIGNhc2UgbGV0dGVycy4gRXhjZXB0aW9ucyBhcmUgXCJzaW1wbGVcIlxuXHRcdFx0XHRcdFx0Ly8gYW5kIFwidG9raXBvbmFcIi5cblx0XHRcdFx0XHRcdChtYXRjaCA9IC8oKF58XFxuXFxyPykoXFxbXFxbXFxzKigoW2Etel17MiwzfSgtW2Etel0rKSopfHNpbXBsZXx0b2tpcG9uYSlcXHMqOlteXFxdXStdXVxccyopKSskLy5leGVjKFxuXHRcdFx0XHRcdFx0XHRjb3BpZWR0ZXh0XG5cdFx0XHRcdFx0XHQpKTtcblx0XHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdFx0KHtpbmRleH0gPSBtYXRjaCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRpZHg6IGluZGV4LFxuXHRcdFx0XHRcdG9uQ2F0OiBmYWxzZSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGlkeDogaW5kZXgsXG5cdFx0XHRcdG9uQ2F0OiBpbmRleCA+PSAwLFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNvbnN0IHN1bW1hcnkgPSBbXTtcblx0XHRjb25zdCBuYW1lU3BhY2UgPSBIQy5jYXRlZ29yeV9jYW5vbmljYWw7XG5cdFx0Y29uc3QgLy8gUG9zaXRpb24gb2YgcmVtb3ZlZCBjYXRlZ29yeTtcblx0XHRcdGtleUNoYW5nZSA9IHRvUmVtb3ZlICYmIHRvQWRkICYmIHRvUmVtb3ZlID09PSB0b0FkZCAmJiB0b0FkZC5sZW5ndGggPiAwO1xuXHRcdGxldCBtYXRjaGVzO1xuXHRcdGxldCBjYXRfcG9pbnQgPSAtMTtcblx0XHRpZiAoa2V5KSB7XG5cdFx0XHRrZXkgPSBgfCR7a2V5fWA7XG5cdFx0fVxuXHRcdC8vIFJlbW92ZVxuXHRcdGlmICh0b1JlbW92ZSAmJiB0b1JlbW92ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRtYXRjaGVzID0gZmluZF9jYXRlZ29yeSh3aWtpdGV4dCwgdG9SZW1vdmUpO1xuXHRcdFx0aWYgKCFtYXRjaGVzIHx8IG1hdGNoZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRlcnJvcjogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X25vdEZvdW5kJywgdG9SZW1vdmUpLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0bGV0IGJlZm9yZSA9IHdpa2l0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIG1hdGNoZXNbMF0ubWF0Y2guaW5kZXgpKTtcblx0XHRcdGxldCBhZnRlciA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIG1hdGNoZXNbMF0ubWF0Y2guaW5kZXggKyBtYXRjaGVzWzBdLm1hdGNoWzBdLmxlbmd0aCkpO1xuXHRcdFx0aWYgKG1hdGNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHQvLyBSZW1vdmUgYWxsIG9jY3VycmVuY2VzIGluIGFmdGVyXG5cdFx0XHRcdG1hdGNoZXMucmUubGFzdEluZGV4ID0gMDtcblx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5yZXBsYWNlKG1hdGNoZXMucmUsICcnKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0dG9BZGQgJiYgLy8gbmFtZVNwYWNlID0gbWF0Y2hlc1sgMCBdLm1hdGNoWyAxIF0gfHwgbmFtZVNwYWNlOyBDYW5vbmljYWwgbmFtZXNwYWNlIHNob3VsZCBiZSBhbHdheXMgcHJlZmVycmVkXG5cdFx0XHRcdGtleSA9PT0gbnVsbFxuXHRcdFx0KSB7XG5cdFx0XHRcdFssICwga2V5XSA9IG1hdGNoZXNbMF0ubWF0Y2g7XG5cdFx0XHR9XG5cdFx0XHQvLyBSZW1lbWJlciB0aGUgY2F0ZWdvcnkga2V5LCBpZiBhbnkuXG5cdFx0XHQvLyBSZW1vdmUgd2hpdGVzcGFjZSAocHJvcGVybHkpOiBzdHJpcCB3aGl0ZXNwYWNlLCBidXQgb25seSB1cCB0byB0aGUgbmV4dCBsaW5lIGZlZWQuXG5cdFx0XHQvLyBJZiB3ZSB0aGVuIGhhdmUgdHdvIGxpbmVmZWVkcyBpbiBhIHJvdywgcmVtb3ZlIG9uZS4gT3RoZXJ3aXNlLCBpZiB3ZSBoYXZlIHR3byBub24tXG5cdFx0XHQvLyB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMsIGluc2VydCBhIGJsYW5rLlxuXHRcdFx0bGV0IGkgPSBiZWZvcmUubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID49IDAgJiYgYmVmb3JlLmNoYXJBdChpKSAhPT0gJ1xcbicgJiYgYmVmb3JlLnNsaWNlKGksIGkgKyAxKS5zZWFyY2goL1xccy8pID49IDApIHtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGogPSAwO1xuXHRcdFx0d2hpbGUgKGogPCBhZnRlci5sZW5ndGggJiYgYWZ0ZXIuY2hhckF0KGopICE9PSAnXFxuJyAmJiBhZnRlci5zbGljZShqLCBqICsgMSkuc2VhcmNoKC9cXHMvKSA+PSAwKSB7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0aSA+PSAwICYmXG5cdFx0XHRcdGJlZm9yZS5jaGFyQXQoaSkgPT09ICdcXG4nICYmXG5cdFx0XHRcdChhZnRlci5sZW5ndGggPT09IDAgfHwgKGogPCBhZnRlci5sZW5ndGggJiYgYWZ0ZXIuY2hhckF0KGopID09PSAnXFxuJykpXG5cdFx0XHQpIHtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdFx0YmVmb3JlID0gaSA+PSAwID8gYmVmb3JlLnNsaWNlKDAsIE1hdGgubWF4KDAsIGkgKyAxKSkgOiAnJztcblx0XHRcdGFmdGVyID0gaiA8IGFmdGVyLmxlbmd0aCA/IGFmdGVyLnNsaWNlKE1hdGgubWF4KDAsIGopKSA6ICcnO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRiZWZvcmUubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRiZWZvcmUuc2xpY2UoTWF0aC5tYXgoMCwgYmVmb3JlLmxlbmd0aCAtIDEpKS5zZWFyY2goL1xcUy8pID49IDAgJiZcblx0XHRcdFx0YWZ0ZXIubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRhZnRlci5zbGljZSgwLCAxKS5zZWFyY2goL1xcUy8pID49IDBcblx0XHRcdCkge1xuXHRcdFx0XHRiZWZvcmUgKz0gJyAnO1xuXHRcdFx0fVxuXHRcdFx0Y2F0X3BvaW50ID0gYmVmb3JlLmxlbmd0aDtcblx0XHRcdGlmIChjYXRfcG9pbnQgPT09IDAgJiYgYWZ0ZXIubGVuZ3RoID4gMCAmJiBhZnRlci5zbGljZSgwLCAxKSA9PT0gJ1xcbicpIHtcblx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5zbGljZSgxKTtcblx0XHRcdH1cblx0XHRcdHdpa2l0ZXh0ID0gYmVmb3JlICsgYWZ0ZXI7XG5cdFx0XHRpZiAoIWtleUNoYW5nZSkge1xuXHRcdFx0XHRpZiAoSEMudGVtcGxhdGVfY2F0ZWdvcmllc1t0b1JlbW92ZV0pIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXRlbXBsYXRlX3JlbW92ZWQnLCB0b1JlbW92ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfcmVtb3ZlZCcsIHRvUmVtb3ZlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBBZGRcblx0XHRpZiAodG9BZGQgJiYgdG9BZGQubGVuZ3RoID4gMCkge1xuXHRcdFx0bWF0Y2hlcyA9IGZpbmRfY2F0ZWdvcnkod2lraXRleHQsIHRvQWRkKTtcblx0XHRcdGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQvLyBBbHJlYWR5IGV4aXN0c1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0ZXJyb3I6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9leGlzdHMnLCB0b0FkZCksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRsZXQgb25DYXQgPSBmYWxzZTtcblx0XHRcdGlmIChjYXRfcG9pbnQgPCAwKSB7XG5cdFx0XHRcdGNvbnN0IHBvaW50ID0gZmluZF9pbnNlcnRpb25wb2ludCh3aWtpdGV4dCk7XG5cdFx0XHRcdGNhdF9wb2ludCA9IHBvaW50LmlkeDtcblx0XHRcdFx0KHtvbkNhdH0gPSBwb2ludCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbkNhdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuZXdjYXRzdHJpbmcgPSBgW1ske25hbWVTcGFjZX06JHt0b0FkZH0ke2tleSB8fCAnJ31dXWA7XG5cdFx0XHRpZiAoY2F0X3BvaW50ID49IDApIHtcblx0XHRcdFx0Y29uc3Qgc3VmZml4ID0gd2lraXRleHQuc2xpY2UoTWF0aC5tYXgoMCwgY2F0X3BvaW50KSk7XG5cdFx0XHRcdHdpa2l0ZXh0ID1cblx0XHRcdFx0XHR3aWtpdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBjYXRfcG9pbnQpKSArXG5cdFx0XHRcdFx0KGNhdF9wb2ludCA+IDAgPyAnXFxuJyA6ICcnKSArXG5cdFx0XHRcdFx0bmV3Y2F0c3RyaW5nICtcblx0XHRcdFx0XHQob25DYXQgPyAnJyA6ICdcXG4nKTtcblx0XHRcdFx0d2lraXRleHQgKz0gc3VmZml4Lmxlbmd0aCA+IDAgJiYgc3VmZml4LnNsaWNlKDAsIDEpICE9PSAnXFxuJyA/IGBcXG4ke3N1ZmZpeH1gIDogc3VmZml4O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHdpa2l0ZXh0Lmxlbmd0aCA+IDAgJiYgd2lraXRleHQuc2xpY2UoLTEsIHdpa2l0ZXh0Lmxlbmd0aCAtIDEgKyAxKSAhPT0gJ1xcbicpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCArPSAnXFxuJztcblx0XHRcdFx0fVxuXHRcdFx0XHR3aWtpdGV4dCArPSAod2lraXRleHQubGVuZ3RoID4gMCA/ICdcXG4nIDogJycpICsgbmV3Y2F0c3RyaW5nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGtleUNoYW5nZSkge1xuXHRcdFx0XHRsZXQgayA9IGtleSB8fCAnJztcblx0XHRcdFx0aWYgKGsubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGsgPSBrLnNsaWNlKDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X2tleWNoYW5nZScsIHRvQWRkLCBrKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X2FkZGVkJywgdG9BZGQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKEhDLnVuY2F0X3JlZ2V4cCAmJiAhaXNfaGlkZGVuKSB7XG5cdFx0XHRcdGNvbnN0IHR4dCA9IHdpa2l0ZXh0LnJlcGxhY2UoSEMudW5jYXRfcmVnZXhwLCAnJyk7IC8vIFJlbW92ZSBcInVuY2F0XCIgdGVtcGxhdGVzXG5cdFx0XHRcdGlmICh0eHQubGVuZ3RoICE9PSB3aWtpdGV4dC5sZW5ndGgpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCA9IHR4dDtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVuY2F0X3JlbW92ZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0ZXJyb3I6IG51bGwsXG5cdFx0fTtcblx0fTtcblx0Ly8gVGhlIHJlYWwgSG90Q2F0IFVJXG5cdGNvbnN0IGV2dEtleXMgPSAoe2N0cmxLZXksIG1ldGFLZXksIHNoaWZ0S2V5fSkgPT4ge1xuXHRcdGxldCBjb2RlID0gMDtcblx0XHRpZiAoY3RybEtleSkge1xuXHRcdFx0Ly8gQWxsIG1vZGVybiBicm93c2Vyc1xuXHRcdFx0Ly8gQ3RybC1jbGljayBzZWVtcyB0byBiZSBvdmVybG9hZGVkIGluIEZGL01hYyAoaXQgb3BlbnMgYSBwb3AtdXAgbWVudSksIHNvIHRyZWF0IGNtZC1jbGlja1xuXHRcdFx0Ly8gYXMgYSBjdHJsLWNsaWNrLCB0b28uXG5cdFx0XHRpZiAoY3RybEtleSB8fCBtZXRhS2V5KSB7XG5cdFx0XHRcdGNvZGUgfHw9IDE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2hpZnRLZXkpIHtcblx0XHRcdFx0Y29kZSB8fD0gMjtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNvZGU7XG5cdH07XG5cdGNvbnN0IGV2dEtpbGwgPSAoZSkgPT4ge1xuXHRcdGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0bGV0IGNhdExpbmUgPSBudWxsOyAvLyB0cnVlIGlmIE1lZGlhV2lraSBzZXJ2ZXMgdGhlIG5ldyBVTC1MSSBET00gZm9yIGNhdGVnb3JpZXNcblx0bGV0IG9uVXBsb2FkID0gZmFsc2U7XG5cdGxldCBlZGl0b3JzID0gW107XG5cdGxldCBjb21taXRCdXR0b24gPSBudWxsO1xuXHRsZXQgY29tbWl0Rm9ybSA9IG51bGw7XG5cdGxldCBtdWx0aVNwYW4gPSBudWxsO1xuXHRsZXQgcGFnZVRleHQgPSBudWxsO1xuXHRsZXQgcGFnZVRpbWUgPSBudWxsO1xuXHRsZXQgcGFnZVdhdGNoZWQgPSBmYWxzZTtcblx0bGV0IHdhdGNoQ3JlYXRlID0gZmFsc2U7XG5cdGxldCB3YXRjaEVkaXQgPSBmYWxzZTtcblx0bGV0IG1pbm9yRWRpdHMgPSBmYWxzZTtcblx0bGV0IGVkaXRUb2tlbiA9IG51bGw7XG5cdGxldCBpc19ydGwgPSBmYWxzZTtcblx0bGV0IHNlcnZlclRpbWUgPSBudWxsO1xuXHRsZXQgbGFzdFJldklkID0gbnVsbDtcblx0bGV0IHBhZ2VUZXh0UmV2SWQgPSBudWxsO1xuXHRsZXQgY29uZmxpY3RpbmdVc2VyID0gbnVsbDtcblx0bGV0IG5ld0RPTSA9IGZhbHNlO1xuXHRjb25zdCBVTkNIQU5HRUQgPSAwO1xuXHRjb25zdCBPUEVOID0gMTsgLy8gT3BlbiwgYnV0IG5vIGlucHV0IHlldFxuXHRjb25zdCBDSEFOR0VfUEVORElORyA9IDI7IC8vIE9wZW4sIHNvbWUgaW5wdXQgbWFkZVxuXHRjb25zdCBDSEFOR0VEID0gMztcblx0Y29uc3QgREVMRVRFRCA9IDQ7XG5cdGNvbnN0IHNldFBhZ2UgPSAoZGF0YSkgPT4ge1xuXHRcdGxldCBzdGFydFRpbWUgPSBudWxsO1xuXHRcdGlmIChkYXRhICYmIGRhdGEucXVlcnkpIHtcblx0XHRcdGlmIChkYXRhLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGEucXVlcnkucGFnZXM7XG5cdFx0XHRcdGlmIChwYWdlKSB7XG5cdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zICYmIHBhZ2UucmV2aXNpb25zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdC8vIFJldmlzaW9ucyBhcmUgc29ydGVkIGJ5IHJldmlzaW9uIElELCBoZW5jZSBbMF0gaXMgdGhlIG9uZSB3ZSBhc2tlZCBmb3IsIGFuZCBwb3NzaWJseSB0aGVyZSdzIGEgWzFdIGlmIHdlJ3JlXG5cdFx0XHRcdFx0XHQvLyBub3Qgb24gdGhlIGxhdGVzdCByZXZpc2lvbiAoZWRpdCBjb25mbGljdHMgYW5kIHN1Y2gpLlxuXHRcdFx0XHRcdFx0cGFnZVRleHQgPSBwYWdlLnJldmlzaW9uc1swXS5zbG90c1snbWFpbiddLmNvbnRlbnQ7XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0XHRcdHBhZ2VUaW1lID0gcGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5yZXZpc2lvbnNbMF0ucmV2aWQpIHtcblx0XHRcdFx0XHRcdFx0cGFnZVRleHRSZXZJZCA9IHBhZ2UucmV2aXNpb25zWzBdLnJldmlkO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0Y29uZmxpY3RpbmdVc2VyID0gcGFnZS5yZXZpc2lvbnNbMV0udXNlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFzdHJldmlkKSB7XG5cdFx0XHRcdFx0XHRsYXN0UmV2SWQgPSBwYWdlLmxhc3RyZXZpZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2Uuc3RhcnR0aW1lc3RhbXApIHtcblx0XHRcdFx0XHRcdHN0YXJ0VGltZSA9IHBhZ2Uuc3RhcnR0aW1lc3RhbXAucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cGFnZVdhdGNoZWQgPSB0eXBlb2YgcGFnZS53YXRjaGVkID09PSAnc3RyaW5nJztcblx0XHRcdFx0XHRpZiAoZGF0YS5xdWVyeS50b2tlbnMpIHtcblx0XHRcdFx0XHRcdGVkaXRUb2tlbiA9IGRhdGEucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFuZ2xpbmtzICYmICghZGF0YVsncXVlcnktY29udGludWUnXSB8fCAhZGF0YVsncXVlcnktY29udGludWUnXS5sYW5nbGlua3MpKSB7XG5cdFx0XHRcdFx0XHQvLyBXZSBoYXZlIGludGVybGFuZ3VhZ2UgbGlua3MsIGFuZCB3ZSBnb3QgdGhlbSBhbGwuXG5cdFx0XHRcdFx0XHRsZXQgcmUgPSAnJztcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZS5sYW5nbGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0cmUgKz0gKGkgPiAwID8gJ3wnIDogJycpICsgcGFnZS5sYW5nbGlua3NbaV0ubGFuZy5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csICdcXFxcJDEnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChyZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGludGVybGFuZ3VhZ2VSRSA9IG5ldyBSZWdFeHAoYCgoXnxcXFxcblxcXFxyPykoXFxcXFtcXFxcW1xcXFxzKigke3JlfSlcXFxccyo6W15cXFxcXV0rXFxcXF1cXFxcXVxcXFxzKikpKyRgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIFNpdGVpbmZvXG5cdFx0XHRpZiAoZGF0YS5xdWVyeS5nZW5lcmFsKSB7XG5cdFx0XHRcdGlmIChkYXRhLnF1ZXJ5LmdlbmVyYWwudGltZSAmJiAhc3RhcnRUaW1lKSB7XG5cdFx0XHRcdFx0c3RhcnRUaW1lID0gZGF0YS5xdWVyeS5nZW5lcmFsLnRpbWUucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFJlc291cmNlTG9hZGVyJ3MgSlNQYXJzZXIgZG9lc24ndCBsaWtlIC5jYXNlLCBzbyBvdmVycmlkZSBlc2xpbnQuXG5cdFx0XHRcdFx0SEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA9IGRhdGEucXVlcnkuZ2VuZXJhbC5jYXNlID09PSAnZmlyc3QtbGV0dGVyJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2VydmVyVGltZSA9IHN0YXJ0VGltZTtcblx0XHRcdC8vIFVzZXJpbmZvXG5cdFx0XHRpZiAoZGF0YS5xdWVyeS51c2VyaW5mbyAmJiBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMpIHtcblx0XHRcdFx0d2F0Y2hDcmVhdGUgPSAhSEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ICYmIGRhdGEucXVlcnkudXNlcmluZm8ub3B0aW9ucy53YXRjaGNyZWF0aW9ucyA9PT0gJzEnO1xuXHRcdFx0XHR3YXRjaEVkaXQgPSAhSEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ICYmIGRhdGEucXVlcnkudXNlcmluZm8ub3B0aW9ucy53YXRjaGRlZmF1bHQgPT09ICcxJztcblx0XHRcdFx0bWlub3JFZGl0cyA9IGRhdGEucXVlcnkudXNlcmluZm8ub3B0aW9ucy5taW5vcmRlZmF1bHQgPT09IDE7XG5cdFx0XHRcdC8vIElmIHRoZSB1c2VyIGhhcyB0aGUgXCJBbGwgZWRpdHMgYXJlIG1pbm9yXCIgcHJlZmVyZW5jZSBlbmFibGVkLCB3ZSBzaG91bGQgaG9ub3IgdGhhdFxuXHRcdFx0XHQvLyBmb3Igc2luZ2xlIGNhdGVnb3J5IGNoYW5nZXMsIG5vIG1hdHRlciB3aGF0IHRoZSBzaXRlIGNvbmZpZ3VyYXRpb24gaXMuXG5cdFx0XHRcdGlmIChtaW5vckVkaXRzKSB7XG5cdFx0XHRcdFx0SEMuc2luZ2xlX21pbm9yID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0bGV0IHNhdmVJblByb2dyZXNzID0gZmFsc2U7XG5cdGNvbnN0IGluaXRpYXRlRWRpdCA9IChkb0VkaXQsIGZhaWx1cmUpID0+IHtcblx0XHRpZiAoc2F2ZUluUHJvZ3Jlc3MpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2F2ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuXHRcdGxldCBvbGRCdXR0b25TdGF0ZTtcblx0XHRpZiAoY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRvbGRCdXR0b25TdGF0ZSA9IGNvbW1pdEJ1dHRvbi5kaXNhYmxlZDtcblx0XHRcdGNvbW1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXHRcdGNvbnN0IGZhaWwgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdFx0c2F2ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblx0XHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gb2xkQnV0dG9uU3RhdGU7XG5cdFx0XHR9XG5cdFx0XHRmYWlsdXJlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXHRcdH07XG5cdFx0Ly8gTXVzdCB1c2UgQWpheCBoZXJlIHRvIGdldCB0aGUgdXNlciBvcHRpb25zIGFuZCB0aGUgZWRpdCB0b2tlbi5cblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHJhd2NvbnRpbnVlOiAnJyxcblx0XHRcdHRpdGxlczogY29uZi53Z1BhZ2VOYW1lLFxuXHRcdFx0cHJvcDogWydpbmZvJywgJ3JldmlzaW9ucycsICdsYW5nbGlua3MnXSxcblx0XHRcdGlucHJvcDogJ3dhdGNoZWQnLFxuXHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJywgJ2lkcycsICd1c2VyJ10sXG5cdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRydmxpbWl0OiAnMicsXG5cdFx0XHRydmRpcjogJ25ld2VyJyxcblx0XHRcdHJ2c3RhcnRpZDogY29uZi53Z0N1clJldmlzaW9uSWQsXG5cdFx0XHRsbGxpbWl0OiAnNTAwJyxcblx0XHRcdG1ldGE6IFsnc2l0ZWluZm8nLCAndXNlcmluZm8nLCAndG9rZW5zJ10sXG5cdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHR1aXByb3A6IFsnb3B0aW9ucyddLFxuXHRcdH07XG5cdFx0YXBpLmdldChwYXJhbXMpXG5cdFx0XHQuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHRzZXRQYWdlKGRhdGEpO1xuXHRcdFx0XHRkb0VkaXQoZmFpbCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKHtzdGF0dXMsIHN0YXR1c1RleHR9KSA9PiB7XG5cdFx0XHRcdGZhaWwoYCR7c3RhdHVzfSAke3N0YXR1c1RleHR9YCk7XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3QgbXVsdGlDaGFuZ2VNc2cgPSAoY291bnQpID0+IHtcblx0XHRyZXR1cm4gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtbXVsdGlfY2hhbmdlJywgU3RyaW5nKGNvdW50KSk7XG5cdH07XG5cdGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0XHRsZXQgdHMgPSBTdHJpbmcobm93LmdldFVUQ0Z1bGxZZWFyKCkpO1xuXHRcdGNvbnN0IHR3byA9IChzKSA9PiB7XG5cdFx0XHRyZXR1cm4gcy5zbGljZSgtMik7XG5cdFx0fTtcblx0XHR0cyArPVxuXHRcdFx0dHdvKGAwJHtub3cuZ2V0VVRDTW9udGgoKSArIDF9YCkgK1xuXHRcdFx0dHdvKGAwJHtub3cuZ2V0VVRDRGF0ZSgpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENIb3VycygpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENNaW51dGVzKCl9YCkgK1xuXHRcdFx0dHdvKGAwMCR7bm93LmdldFVUQ1NlY29uZHMoKX1gKTtcblx0XHRyZXR1cm4gdHM7XG5cdH07XG5cdGNvbnN0IHBlcmZvcm1DaGFuZ2VzID0gKGZhaWx1cmUsIHNpbmdsZUVkaXRvcikgPT4ge1xuXHRcdGlmIChwYWdlVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0ZmFpbHVyZShnZXRNZXNzYWdlKCdtZXNzYWdlcy1tdWx0aV9lcnJvcicpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gQ3JlYXRlIGEgZm9ybSBhbmQgc3VibWl0IGl0LiBXZSBkb24ndCB1c2UgdGhlIGVkaXQgQVBJIChhcGkucGhwP2FjdGlvbj1lZGl0KSBiZWNhdXNlXG5cdFx0Ly8gKGEpIHNlbnNpYmx5IHJlcG9ydGluZyBiYWNrIGVycm9ycyBsaWtlIGVkaXQgY29uZmxpY3RzIGlzIGFsd2F5cyBhIGhhc3NsZSwgYW5kXG5cdFx0Ly8gKGIpIHdlIHdhbnQgdG8gc2hvdyBhIGRpZmYgZm9yIG11bHRpLWVkaXRzIGFueXdheSwgYW5kXG5cdFx0Ly8gKGMpIHdlIHdhbnQgdG8gdHJpZ2dlciBvbnN1Ym1pdCBldmVudHMsIGFsbG93aW5nIHVzZXIgY29kZSB0byBpbnRlcmNlcHQgdGhlIGVkaXQuXG5cdFx0Ly8gVXNpbmcgdGhlIGZvcm0sIHdlIGNhbiBkbyAoYikgYW5kIChjKSwgYW5kIHdlIGdldCAoYSkgZm9yIGZyZWUuIEFuZCwgb2YgY291cnNlLCB1c2luZyB0aGUgZm9ybVxuXHRcdC8vIGF1dG9tYXRpY2FsbHkgcmVsb2FkcyB0aGUgcGFnZSB3aXRoIHRoZSB1cGRhdGVkIGNhdGVnb3JpZXMgb24gYSBzdWNjZXNzZnVsIHN1Ym1pdCwgd2hpY2hcblx0XHQvLyB3ZSB3b3VsZCBoYXZlIHRvIGRvIGV4cGxpY2l0bHkgaWYgd2UgdXNlZCB0aGUgZWRpdCBBUEkuXG5cdFx0bGV0IGFjdGlvbjtcblx0XHQvLyBOb3JtYWxseSwgd2UgZG9uJ3QgaGF2ZSB0byBjYXJlIGFib3V0IGVkaXQgY29uZmxpY3RzLiBJZiBzb21lIG90aGVyIHVzZXIgZWRpdGVkIHRoZSBwYWdlIGluIHRoZSBtZWFudGltZSwgdGhlXG5cdFx0Ly8gc2VydmVyIHdpbGwgdGFrZSBjYXJlIG9mIGl0IGFuZCBtZXJnZSB0aGUgZWRpdCBhdXRvbWF0aWNhbGx5IG9yIHByZXNlbnQgYW4gZWRpdCBjb25mbGljdCBzY3JlZW4uIEhvd2V2ZXIsIHRoZVxuXHRcdC8vIHNlcnZlciBzdXBwcmVzc2VzIGVkaXQgY29uZmxpY3RzIHdpdGggb25lc2VsZi4gSGVuY2UsIGlmIHdlIGhhdmUgYSBjb25mbGljdCwgYW5kIHRoZSBjb25mbGljdGluZyB1c2VyIGlzIHRoZVxuXHRcdC8vIGN1cnJlbnQgdXNlciwgdGhlbiB3ZSBzZXQgdGhlIFwib2xkaWRcIiB2YWx1ZSBhbmQgc3dpdGNoIHRvIGRpZmYsIHdoaWNoIGdpdmVzIHRoZSBcInlvdSBhcmUgZWRpdGluZyBhbiBvbGQgdmVyc2lvbjtcblx0XHQvLyBpZiB5b3Ugc2F2ZSwgYW55IG1vcmUgcmVjZW50IGNoYW5nZXMgd2lsbCBiZSBsb3N0XCIgc2NyZWVuLlxuXHRcdGNvbnN0IHNlbGZFZGl0Q29uZmxpY3QgPVxuXHRcdFx0KChsYXN0UmV2SWQgIT09IG51bGwgJiYgbGFzdFJldklkICE9PSBjb25mLndnQ3VyUmV2aXNpb25JZCkgfHxcblx0XHRcdFx0KHBhZ2VUZXh0UmV2SWQgIT09IG51bGwgJiYgcGFnZVRleHRSZXZJZCAhPT0gY29uZi53Z0N1clJldmlzaW9uSWQpKSAmJlxuXHRcdFx0Y29uZmxpY3RpbmdVc2VyICYmXG5cdFx0XHRjb25mbGljdGluZ1VzZXIgPT09IGNvbmYud2dVc2VyTmFtZTtcblx0XHRpZiAoc2luZ2xlRWRpdG9yICYmICFzaW5nbGVFZGl0b3Iubm9Db21taXQgJiYgIUhDLm5vX2F1dG9jb21taXQgJiYgZWRpdFRva2VuICYmICFzZWxmRWRpdENvbmZsaWN0KSB7XG5cdFx0XHQvLyBJZiB3ZSBkbyBoYXZlIGFuIGVkaXQgY29uZmxpY3QsIGJ1dCBub3Qgd2l0aCBvdXJzZWxmLCB0aGF0J3Mgbm8gcmVhc29uIG5vdCB0byBhdHRlbXB0IHRvIHNhdmU6IHRoZSBzZXJ2ZXIgc2lkZSBtYXkgYWN0dWFsbHkgYmUgYWJsZSB0b1xuXHRcdFx0Ly8gbWVyZ2UgdGhlIGNoYW5nZXMuIFdlIGp1c3QgbmVlZCB0byBtYWtlIHN1cmUgdGhhdCB3ZSBkbyBwcmVzZW50IGEgZGlmZiB2aWV3IGlmIGl0J3MgYSBzZWxmIGVkaXQgY29uZmxpY3QuXG5cdFx0XHRjb21taXRGb3JtLndwRWRpdFRva2VuLnZhbHVlID0gZWRpdFRva2VuO1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybS53cERpZmY7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cFNhdmUnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybS53cFNhdmU7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cERpZmYnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0bGV0IHJlc3VsdCA9IHtcblx0XHRcdHRleHQ6IHBhZ2VUZXh0LFxuXHRcdH07XG5cdFx0Y29uc3QgY2hhbmdlZCA9IFtdO1xuXHRcdGNvbnN0IGFkZGVkID0gW107XG5cdFx0Y29uc3QgZGVsZXRlZCA9IFtdO1xuXHRcdGNvbnN0IHRvRWRpdCA9IHNpbmdsZUVkaXRvciA/IFtzaW5nbGVFZGl0b3JdIDogZWRpdG9ycztcblx0XHRsZXQgZWRpdDtcblx0XHRsZXQgaTtcblx0XHRsZXQgZXJyb3IgPSBudWxsO1xuXHRcdGxldCBjaGFuZ2VzID0gMDtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9FZGl0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRlZGl0ID0gdG9FZGl0W2ldO1xuXHRcdFx0aWYgKGVkaXQuc3RhdGUgPT09IENIQU5HRUQpIHtcblx0XHRcdFx0cmVzdWx0ID0gY2hhbmdlX2NhdGVnb3J5KFxuXHRcdFx0XHRcdHJlc3VsdC50ZXh0LFxuXHRcdFx0XHRcdGVkaXQub3JpZ2luYWxDYXRlZ29yeSxcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRLZXksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50SGlkZGVuXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmICghcmVzdWx0LmVycm9yKSB7XG5cdFx0XHRcdFx0Y2hhbmdlcysrO1xuXHRcdFx0XHRcdGlmICghZWRpdC5vcmlnaW5hbENhdGVnb3J5IHx8IGVkaXQub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdGFkZGVkW2FkZGVkLmxlbmd0aF0gPSBlZGl0LmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y2hhbmdlZFtjaGFuZ2VkLmxlbmd0aF0gPSB7XG5cdFx0XHRcdFx0XHRcdGZyb206IGVkaXQub3JpZ2luYWxDYXRlZ29yeSxcblx0XHRcdFx0XHRcdFx0dG86IGVkaXQuY3VycmVudENhdGVnb3J5LFxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXJyb3IgPT09IG51bGwpIHtcblx0XHRcdFx0XHQoe2Vycm9yfSA9IHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZWRpdC5zdGF0ZSA9PT0gREVMRVRFRCAmJiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkgJiYgZWRpdC5vcmlnaW5hbENhdGVnb3J5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cmVzdWx0ID0gY2hhbmdlX2NhdGVnb3J5KHJlc3VsdC50ZXh0LCBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksIG51bGwsIG51bGwsIGZhbHNlKTtcblx0XHRcdFx0aWYgKCFyZXN1bHQuZXJyb3IpIHtcblx0XHRcdFx0XHRjaGFuZ2VzKys7XG5cdFx0XHRcdFx0ZGVsZXRlZFtkZWxldGVkLmxlbmd0aF0gPSBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXJyb3IgPT09IG51bGwpIHtcblx0XHRcdFx0XHQoe2Vycm9yfSA9IHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGVycm9yICE9PSBudWxsKSB7XG5cdFx0XHQvLyBEbyBub3QgY29tbWl0IGlmIHRoZXJlIHdlcmUgZXJyb3JzXG5cdFx0XHRhY3Rpb24gPSBjb21taXRGb3JtLndwU2F2ZTtcblx0XHRcdGlmIChhY3Rpb24pIHtcblx0XHRcdFx0YWN0aW9uLnZhbHVlID0gJ3dwRGlmZic7XG5cdFx0XHRcdGFjdGlvbi5uYW1lID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBGaWxsIGluIHRoZSBmb3JtIGFuZCBzdWJtaXQgaXRcblx0XHRjb21taXRGb3JtLndwTWlub3JlZGl0LmNoZWNrZWQgPSBtaW5vckVkaXRzO1xuXHRcdGNvbW1pdEZvcm0ud3BXYXRjaHRoaXMuY2hlY2tlZCA9ICghY29uZi53Z0FydGljbGVJZCAmJiB3YXRjaENyZWF0ZSkgfHwgd2F0Y2hFZGl0IHx8IHBhZ2VXYXRjaGVkO1xuXHRcdGlmIChjb25mLndnQXJ0aWNsZUlkIHx8ICEhc2luZ2xlRWRpdG9yKSB7XG5cdFx0XHQvLyBQcmVwYXJlIGNoYW5nZS10YWcgc2F2ZVxuXHRcdFx0aWYgKGFjdGlvbiAmJiBhY3Rpb24udmFsdWUgPT09ICd3cFNhdmUnKSB7XG5cdFx0XHRcdGlmIChIQy5jaGFuZ2VUYWcpIHtcblx0XHRcdFx0XHRjb21taXRGb3JtLndwQ2hhbmdlVGFncy52YWx1ZSA9IEhDLmNoYW5nZVRhZztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29tbWl0Rm9ybS53cEF1dG9TdW1tYXJ5LnZhbHVlID0gSEMuY2hhbmdlVGFnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNoYW5nZXMgPT09IDEpIHtcblx0XHRcdFx0aWYgKHJlc3VsdC5zdW1tYXJ5ICYmIHJlc3VsdC5zdW1tYXJ5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjb21taXRGb3JtLndwU3VtbWFyeS52YWx1ZSA9XG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSkgK1xuXHRcdFx0XHRcdFx0cmVzdWx0LnN1bW1hcnkuam9pbihnZXRNZXNzYWdlKCdtZXNzYWdlcy1zZXBhcmF0b3InKSkgK1xuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29tbWl0Rm9ybS53cE1pbm9yZWRpdC5jaGVja2VkID0gSEMuc2luZ2xlX21pbm9yIHx8IG1pbm9yRWRpdHM7XG5cdFx0XHR9IGVsc2UgaWYgKGNoYW5nZXMpIHtcblx0XHRcdFx0bGV0IHN1bW1hcnkgPSBbXTtcblx0XHRcdFx0Y29uc3Qgc2hvcnRTdW1tYXJ5ID0gW107XG5cdFx0XHRcdC8vIERlbGV0ZWRcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRlbGV0ZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGDiiJIke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGRlbGV0ZWRbaV0pfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRlbGV0ZWQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID0gYOKIkiR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgZGVsZXRlZFswXSl9YDtcblx0XHRcdFx0fSBlbHNlIGlmIChkZWxldGVkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBg4oiSICR7bXVsdGlDaGFuZ2VNc2coZGVsZXRlZC5sZW5ndGgpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQWRkZWRcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGFkZGVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBgKyR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgYWRkZWRbaV0pfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGFkZGVkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGArJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBhZGRlZFswXSl9YDtcblx0XHRcdFx0fSBlbHNlIGlmIChhZGRlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID0gYCsgJHttdWx0aUNoYW5nZU1zZyhhZGRlZC5sZW5ndGgpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQ2hhbmdlZFxuXHRcdFx0XHRjb25zdCBhcnJvdyA9IGlzX3J0bCA/ICdcXHUyMTkwJyA6ICdcXHUyMTkyJzsgLy8gbGVmdCBhbmQgcmlnaHQgYXJyb3dzLiBEb24ndCB1c2Ug4oaQIGFuZCDihpIgaW4gdGhlIGNvZGUuXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjaGFuZ2VkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGNoYW5nZWRbaV0uZnJvbSA9PT0gY2hhbmdlZFtpXS50bykge1xuXHRcdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZWRbaV0uZnJvbSl9YDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPVxuXHRcdFx0XHRcdFx0XHRgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZWRbaV0uZnJvbSl9JHthcnJvd30ke2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0XHRcdFx0J21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlZFtpXS50b1xuXHRcdFx0XHRcdFx0XHQpfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjaGFuZ2VkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdGlmIChjaGFuZ2VkWzBdLmZyb20gPT09IGNoYW5nZWRbMF0udG8pIHtcblx0XHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9XG5cdFx0XHRcdFx0XHRcdGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlZFswXS5mcm9tKX1gO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPVxuXHRcdFx0XHRcdFx0XHRgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZWRbMF0uZnJvbSl9JHthcnJvd30ke2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0XHRcdFx0J21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlZFswXS50b1xuXHRcdFx0XHRcdFx0XHQpfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGNoYW5nZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDCsSAke211bHRpQ2hhbmdlTXNnKGNoYW5nZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdW1tYXJ5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gc3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKTtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRzdW1tYXJ5Lmxlbmd0aCA+XG5cdFx0XHRcdFx0XHQyMDAgLVxuXHRcdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSkubGVuZ3RoIC1cblx0XHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSkubGVuZ3RoXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5ID0gc2hvcnRTdW1tYXJ5LmpvaW4oZ2V0TWVzc2FnZSgnbWVzc2FnZXMtc2VwYXJhdG9yJykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb21taXRGb3JtLndwU3VtbWFyeS52YWx1ZSA9XG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSkgK1xuXHRcdFx0XHRcdFx0c3VtbWFyeSArXG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb21taXRGb3JtLndwVGV4dGJveDEudmFsdWUgPSByZXN1bHQudGV4dDtcblx0XHRjb21taXRGb3JtLndwU3RhcnR0aW1lLnZhbHVlID0gc2VydmVyVGltZSB8fCBjdXJyZW50VGltZXN0YW1wKCk7XG5cdFx0Y29tbWl0Rm9ybS53cEVkaXR0aW1lLnZhbHVlID0gcGFnZVRpbWUgfHwgY29tbWl0Rm9ybS53cFN0YXJ0dGltZS52YWx1ZTtcblx0XHRpZiAoc2VsZkVkaXRDb25mbGljdCkge1xuXHRcdFx0Y29tbWl0Rm9ybS5vbGRpZC52YWx1ZSA9IFN0cmluZyhwYWdlVGV4dFJldklkIHx8IGNvbmYud2dDdXJSZXZpc2lvbklkKTtcblx0XHR9XG5cdFx0Ly8gU3VibWl0IHRoZSBmb3JtIGluIGEgd2F5IHRoYXQgdHJpZ2dlcnMgb25zdWJtaXQgZXZlbnRzOiBjb21taXRGb3JtLnN1Ym1pdCgpIGRvZXNuJ3QuXG5cdFx0Y29tbWl0Rm9ybS5oY0NvbW1pdC5jbGljaygpO1xuXHR9O1xuXHRjb25zdCByZXNvbHZlT25lID0gKHBhZ2UsIHRvUmVzb2x2ZSkgPT4ge1xuXHRcdGNvbnN0IGNhdHMgPSBwYWdlLmNhdGVnb3JpZXM7XG5cdFx0Y29uc3Qge2xpbmtzfSA9IHBhZ2U7XG5cdFx0bGV0IGlzX2RhYiA9IGZhbHNlOyAvLyBIYXJkIHJlZGlyZWN0P1xuXHRcdGxldCBpc19yZWRpciA9IHR5cGVvZiBwYWdlLnJlZGlyZWN0ID09PSAnc3RyaW5nJztcblx0XHRsZXQgaTtcblx0XHRjb25zdCBpc19oaWRkZW4gPSBwYWdlLmNhdGVnb3J5aW5mbyAmJiB0eXBlb2YgcGFnZS5jYXRlZ29yeWluZm8uaGlkZGVuID09PSAnc3RyaW5nJztcblx0XHRjb25zdCBpc19taXNzaW5nID0gdHlwZW9mIHBhZ2UubWlzc2luZyA9PT0gJ3N0cmluZyc7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGkgJiYgdG9SZXNvbHZlW2ldLmRhYklucHV0Q2xlYW5lZCAhPT0gcGFnZS50aXRsZS5zbGljZShNYXRoLm1heCgwLCBwYWdlLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIE5vdGU6IHRoZSBzZXJ2ZXIgcmV0dXJucyBpbiBwYWdlIGFuIE5GQyBub3JtYWxpemVkIFVuaWNvZGUgdGl0bGUuIElmIG91ciBpbnB1dCB3YXMgbm90IE5GQyBub3JtYWxpemVkLCB3ZSBtYXkgbm90IGZpbmRcblx0XHRcdC8vIGFueSBlbnRyeSBoZXJlLiBJZiB3ZSBoYXZlIG9ubHkgb25lIGVkaXRvciB0byByZXNvbHZlICh0aGUgbW9zdCBjb21tb24gY2FzZSwgSSBwcmVzdW1lKSwgd2UgbWF5IHNpbXBseSBza2lwIHRoZSBjaGVjay5cblx0XHRcdHRvUmVzb2x2ZVtpXS5jdXJyZW50SGlkZGVuID0gaXNfaGlkZGVuO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmlucHV0RXhpc3RzID0gIWlzX21pc3Npbmc7XG5cdFx0XHR0b1Jlc29sdmVbaV0uaWNvbi5zcmMgPSBpc19taXNzaW5nID8gSEMuZXhpc3RzTm8gOiBIQy5leGlzdHNZZXM7XG5cdFx0fVxuXHRcdGlmIChpc19taXNzaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghaXNfcmVkaXIgJiYgY2F0cyAmJiAoZ2V0TWVzc2FnZSgnZGlzYW1iaWdfY2F0ZWdvcnknKSB8fCBnZXRNZXNzYWdlKCdyZWRpcl9jYXRlZ29yeScpKSkge1xuXHRcdFx0Zm9yIChjb25zdCBjYXRfIG9mIGNhdHMpIHtcblx0XHRcdFx0bGV0IGNhdCA9IGNhdF8udGl0bGU7XG5cdFx0XHRcdC8vIFN0cmlwIG5hbWVzcGFjZSBwcmVmaXhcblx0XHRcdFx0aWYgKGNhdCkge1xuXHRcdFx0XHRcdGNhdCA9IGNhdC5zbGljZShNYXRoLm1heCgwLCBjYXQuaW5kZXhPZignOicpICsgMSkpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdFx0XHRpZiAoY2F0ID09PSBnZXRNZXNzYWdlKCdkaXNhbWJpZ19jYXRlZ29yeScpKSB7XG5cdFx0XHRcdFx0XHRpc19kYWIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjYXQgPT09IGdldE1lc3NhZ2UoJ3JlZGlyX2NhdGVnb3J5JykpIHtcblx0XHRcdFx0XHRcdGlzX3JlZGlyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWlzX3JlZGlyICYmICFpc19kYWIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFsaW5rcyB8fCBsaW5rcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgdGl0bGVzID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdC8vIENhdGVnb3J5IG5hbWVzcGFjZSAtLSBhbHdheXMgdHJ1ZSBzaW5jZSB3ZSBhc2sgb25seSBmb3IgdGhlIGNhdGVnb3J5IGxpbmtzXG5cdFx0XHRcdGxpbmtzW2ldLm5zID09PSAxNCAmJlxuXHRcdFx0XHQvLyBOYW1lIG5vdCBlbXB0eVxuXHRcdFx0XHRsaW5rc1tpXS50aXRsZSAmJlxuXHRcdFx0XHRsaW5rc1tpXS50aXRsZS5sZW5ndGggPiAwXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gSW50ZXJuYWwgbGluayB0byBleGlzdGluZyB0aGluZ3kuIEV4dHJhY3QgdGhlIHBhZ2UgbmFtZSBhbmQgcmVtb3ZlIHRoZSBuYW1lc3BhY2UuXG5cdFx0XHRcdGxldCBtYXRjaCA9IGxpbmtzW2ldLnRpdGxlO1xuXHRcdFx0XHRtYXRjaCA9IG1hdGNoLnNsaWNlKE1hdGgubWF4KDAsIG1hdGNoLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0Ly8gRXhjbHVkZSBibGFja2xpc3RlZCBjYXRlZ29yaWVzLlxuXHRcdFx0XHRpZiAoIUhDLmJsYWNrbGlzdCB8fCAhSEMuYmxhY2tsaXN0LnRlc3QobWF0Y2gpKSB7XG5cdFx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gbWF0Y2g7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRpdGxlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGkgJiYgdG9SZXNvbHZlW2ldLmRhYklucHV0Q2xlYW5lZCAhPT0gcGFnZS50aXRsZS5zbGljZShNYXRoLm1heCgwLCBwYWdlLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHRvUmVzb2x2ZVtpXS5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIE1pZ2h0IGFjdHVhbGx5IGJlIHdyb25nIGlmIGl0J3MgYSByZWRpcmVjdCBwb2ludGluZyB0byBhIG5vbi1leGlzdGluZyBjYXRlZ29yeVxuXHRcdFx0dG9SZXNvbHZlW2ldLmljb24uc3JjID0gSEMuZXhpc3RzWWVzO1xuXHRcdFx0aWYgKHRpdGxlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdHRvUmVzb2x2ZVtpXS5kYWIgPSB0aXRsZXM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b1Jlc29sdmVbaV0udGV4dC52YWx1ZSA9XG5cdFx0XHRcdFx0dGl0bGVzWzBdICsgKHRvUmVzb2x2ZVtpXS5jdXJyZW50S2V5ID09PSBudWxsID8gJycgOiBgfCR7dG9SZXNvbHZlW2ldLmN1cnJlbnRLZXl9YCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCByZXNvbHZlUmVkaXJlY3RzID0gKHRvUmVzb2x2ZSwgcGFyYW1zKSA9PiB7XG5cdFx0aWYgKCFwYXJhbXMgfHwgIXBhcmFtcy5xdWVyeSB8fCAhcGFyYW1zLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgcCBpbiBwYXJhbXMucXVlcnkucGFnZXMpIHtcblx0XHRcdGlmICghT2JqZWN0Lmhhc093bihwYXJhbXMucXVlcnkucGFnZXMsIHApKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmVzb2x2ZU9uZShwYXJhbXMucXVlcnkucGFnZXNbcF0sIHRvUmVzb2x2ZSk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCByZXNvbHZlTXVsdGkgPSAodG9SZXNvbHZlLCBjYWxsYmFjaykgPT4ge1xuXHRcdGxldCBpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRvUmVzb2x2ZVtpXS5kYWIgPSBudWxsO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmRhYklucHV0ID0gdG9SZXNvbHZlW2ldLmxhc3RJbnB1dDtcblx0XHR9XG5cdFx0aWYgKG5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdGNhbGxiYWNrKHRvUmVzb2x2ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0cHJvcDogJ2luZm98bGlua3N8Y2F0ZWdvcmllc3xjYXRlZ29yeWluZm8nLFxuXHRcdFx0cGxuYW1lc3BhY2U6ICcxNCcsXG5cdFx0XHRwbGxpbWl0OiB0b1Jlc29sdmUubGVuZ3RoICogMTAsXG5cdFx0XHRjbGxpbWl0OiB0b1Jlc29sdmUubGVuZ3RoICogMTAsXG5cdFx0fTtcblx0XHRjb25zdCB0aXRsZXMgPSBbXTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgdiA9IHRvUmVzb2x2ZVtpXS5kYWJJbnB1dDtcblx0XHRcdHYgPSByZXBsYWNlU2hvcnRjdXRzKHYsIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHR0b1Jlc29sdmVbaV0uZGFiSW5wdXRDbGVhbmVkID0gdjtcblx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IGBDYXRlZ29yeToke3Z9YDtcblx0XHR9XG5cdFx0cGFyYW1zLnRpdGxlcyA9IHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0YXBpLmdldChwYXJhbXMpXG5cdFx0XHQuZG9uZSgoanNvbikgPT4ge1xuXHRcdFx0XHRyZXNvbHZlUmVkaXJlY3RzKHRvUmVzb2x2ZSwganNvbik7XG5cdFx0XHRcdGNhbGxiYWNrKHRvUmVzb2x2ZSk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKHJlcSkgPT4ge1xuXHRcdFx0XHRpZiAoIXJlcSkge1xuXHRcdFx0XHRcdG5vU3VnZ2VzdGlvbnMgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhbGxiYWNrKHRvUmVzb2x2ZSk7XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3QgbWFrZUFjdGl2ZSA9ICh3aGljaCkgPT4ge1xuXHRcdGlmICh3aGljaC5pc19hY3RpdmUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvciAhPT0gd2hpY2gpIHtcblx0XHRcdFx0ZWRpdG9yLmluYWN0aXZhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0d2hpY2guaXNfYWN0aXZlID0gdHJ1ZTtcblx0XHRpZiAod2hpY2guZGFiKSB7XG5cdFx0XHRzaG93RGFiKHdoaWNoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gQ2hlY2sgZm9yIHByb2dyYW1tYXRpYyB2YWx1ZSBjaGFuZ2VzLlxuXHRcdFx0Y29uc3QgZXhwZWN0ZWRJbnB1dCA9IHdoaWNoLmxhc3RSZWFsSW5wdXQgfHwgd2hpY2gubGFzdElucHV0IHx8ICcnO1xuXHRcdFx0Y29uc3QgYWN0dWFsVmFsdWUgPSB3aGljaC50ZXh0LnZhbHVlIHx8ICcnO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQoZXhwZWN0ZWRJbnB1dC5sZW5ndGggPT09IDAgJiYgYWN0dWFsVmFsdWUubGVuZ3RoID4gMCkgfHxcblx0XHRcdFx0KGV4cGVjdGVkSW5wdXQubGVuZ3RoID4gMCAmJiBhY3R1YWxWYWx1ZS5pbmRleE9mKGV4cGVjdGVkSW5wdXQpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIFNvbWVob3cgdGhlIGZpZWxkJ3MgdmFsdWUgYXBwZWFycyB0byBoYXZlIGNoYW5nZWQsIGFuZCB3aGljaC5sYXN0U2VsZWN0aW9uIHRoZXJlZm9yZSBpcyBubyBsb25nZXIgdmFsaWQuIFRyeSB0byBzZXQgdGhlXG5cdFx0XHRcdC8vIGN1cnNvciBhdCB0aGUgZW5kIG9mIHRoZSBjYXRlZ29yeSwgYW5kIGRvIG5vdCBkaXNwbGF5IHRoZSBvbGQgc3VnZ2VzdGlvbiBsaXN0LlxuXHRcdFx0XHR3aGljaC5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRcdFx0Y29uc3QgdiA9IGFjdHVhbFZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdFt3aGljaC5sYXN0SW5wdXRdID0gdjtcblx0XHRcdFx0d2hpY2gubGFzdFJlYWxJbnB1dCA9IHdoaWNoLmxhc3RJbnB1dDtcblx0XHRcdFx0aWYgKHYubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFssIHdoaWNoLmN1cnJlbnRLZXldID0gdjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAod2hpY2gubGFzdFNlbGVjdGlvbikge1xuXHRcdFx0XHRcdHdoaWNoLmxhc3RTZWxlY3Rpb24gPSB7XG5cdFx0XHRcdFx0XHRzdGFydDogdlswXS5sZW5ndGgsXG5cdFx0XHRcdFx0XHRlbmQ6IHZbMF0ubGVuZ3RoLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh3aGljaC5zaG93c0xpc3QpIHtcblx0XHRcdFx0d2hpY2guZGlzcGxheUxpc3QoKTtcblx0XHRcdH1cblx0XHRcdGlmICh3aGljaC5sYXN0U2VsZWN0aW9uKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHdoaWNoLnNldFNlbGVjdGlvbih3aGljaC5sYXN0U2VsZWN0aW9uLnN0YXJ0LCB3aGljaC5sYXN0U2VsZWN0aW9uLmVuZCk7XG5cdFx0XHRcdH0sIDApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3Qgc2hvd0RhYiA9ICh3aGljaCkgPT4ge1xuXHRcdGlmICh3aGljaC5pc19hY3RpdmUpIHtcblx0XHRcdHdoaWNoLnNob3dTdWdnZXN0aW9ucyh3aGljaC5kYWIsIGZhbHNlLCBudWxsLCBudWxsKTsgLy8gZG8gYXV0b2NvbXBsZXRpb24sIG5vIGtleSwgbm8gZW5naW5lIHNlbGVjdG9yXG5cdFx0XHR3aGljaC5kYWIgPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYWtlQWN0aXZlKHdoaWNoKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG11bHRpU3VibWl0ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRvUmVzb2x2ZSA9IFtdO1xuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgPT09IENIQU5HRV9QRU5ESU5HIHx8IGVkaXRvci5zdGF0ZSA9PT0gT1BFTikge1xuXHRcdFx0XHR0b1Jlc29sdmVbdG9SZXNvbHZlLmxlbmd0aF0gPSBlZGl0b3I7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0b1Jlc29sdmUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXNvbHZlTXVsdGkodG9SZXNvbHZlLCAocmVzb2x2ZWQpID0+IHtcblx0XHRcdGxldCBmaXJzdERhYiA9IG51bGw7XG5cdFx0XHRsZXQgZG9udENoYW5nZSA9IGZhbHNlO1xuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHJlc29sdmVkKSB7XG5cdFx0XHRcdGlmIChlbGVtZW50Lmxhc3RJbnB1dCA9PT0gZWxlbWVudC5kYWJJbnB1dCkge1xuXHRcdFx0XHRcdGlmIChlbGVtZW50LmRhYikge1xuXHRcdFx0XHRcdFx0aWYgKCFmaXJzdERhYikge1xuXHRcdFx0XHRcdFx0XHRmaXJzdERhYiA9IGVsZW1lbnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50LmFjY2VwdENoZWNrKHRydWUpKSB7XG5cdFx0XHRcdFx0XHRlbGVtZW50LmNvbW1pdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBXZSBkaWRuJ3QgZGlzYWJsZSBhbGwgdGhlIG9wZW4gZWRpdG9ycywgYnV0IHdlIGRpZCBhc3luY2hyb25vdXMgY2FsbHMuIEl0IGlzXG5cdFx0XHRcdFx0Ly8gdGhlb3JldGljYWxseSBwb3NzaWJsZSB0aGF0IHRoZSB1c2VyIGNoYW5nZWQgc29tZXRoaW5nLi4uXG5cdFx0XHRcdFx0ZG9udENoYW5nZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChmaXJzdERhYikge1xuXHRcdFx0XHRzaG93RGFiKGZpcnN0RGFiKTtcblx0XHRcdH0gZWxzZSBpZiAoIWRvbnRDaGFuZ2UpIHtcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBzZXRNdWx0aUlucHV0ID0gKCkgPT4ge1xuXHRcdGlmIChjb21taXRCdXR0b24gfHwgb25VcGxvYWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29tbWl0QnV0dG9uID0gbWFrZSgnaW5wdXQnKTtcblx0XHRjb21taXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuXHRcdGNvbW1pdEJ1dHRvbi52YWx1ZSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNvbW1pdCcpO1xuXHRcdGNvbW1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG11bHRpU3VibWl0KTtcblx0XHRpZiAobXVsdGlTcGFuKSB7XG5cdFx0XHRtdWx0aVNwYW4ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29tbWl0QnV0dG9uLCBtdWx0aVNwYW4pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYXRMaW5lLmFwcGVuZChjb21taXRCdXR0b24pO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgY2hlY2tNdWx0aUlucHV0ID0gKCkgPT4ge1xuXHRcdGlmICghY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBoYXNDaGFuZ2VzID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdGhhc0NoYW5nZXMgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gIWhhc0NoYW5nZXM7XG5cdH07XG5cdGNvbnN0IHN1Z2dlc3Rpb25FbmdpbmVzID0ge1xuXHRcdG9wZW5zZWFyY2g6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPW9wZW5zZWFyY2gmbmFtZXNwYWNlPTE0JmxpbWl0PTMwJnNlYXJjaD1DYXRlZ29yeTokMWAsXG5cdFx0XHQvLyAkMSA9IHNlYXJjaCB0ZXJtXG5cdFx0XHQvLyBGdW5jdGlvbiB0byBjb252ZXJ0IHJlc3VsdCBvZiB1cmkgaW50byBhbiBhcnJheSBvZiBjYXRlZ29yeSBuYW1lc1xuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0LCBxdWVyeUtleSkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBxdWVyeVJlc3VsdFswXS5zbGljZShNYXRoLm1heCgwLCBxdWVyeVJlc3VsdFswXS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0Y29uc3QgWywgdGl0bGVzXSA9IHF1ZXJ5UmVzdWx0O1xuXHRcdFx0XHRcdGxldCBleGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAoIWNhdF9wcmVmaXgpIHtcblx0XHRcdFx0XHRcdGNhdF9wcmVmaXggPSBuZXcgUmVnRXhwKGBeKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRjYXRfcHJlZml4Lmxhc3RJbmRleCA9IDA7XG5cdFx0XHRcdFx0XHRjb25zdCBtID0gY2F0X3ByZWZpeC5leGVjKHRpdGxlc1tpXSk7XG5cdFx0XHRcdFx0XHRpZiAobSAmJiBtLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldLnNsaWNlKE1hdGgubWF4KDAsIHRpdGxlc1tpXS5pbmRleE9mKCc6JykgKyAxKSk7IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSB0aXRsZXNbaV0pIHtcblx0XHRcdFx0XHRcdFx0XHRleGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMuc3BsaWNlKGksIDEpOyAvLyBOb3BlLCBpdCdzIG5vdCBhIGNhdGVnb3J5IGFmdGVyIGFsbC5cblx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aXRsZXMuZXhpc3RzID0gZXhpc3RzO1xuXHRcdFx0XHRcdGlmIChxdWVyeUtleSAhPT0ga2V5KSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMubm9ybWFsaXplZCA9IGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gUmVtZW1iZXIgdGhlIE5GQyBub3JtYWxpemVkIGtleSB3ZSBnb3QgYmFjayBmcm9tIHRoZSBzZXJ2ZXJcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGludGVybmFsc2VhcmNoOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZsaXN0PWFsbHBhZ2VzJmFwbmFtZXNwYWNlPTE0JmFwbGltaXQ9MzAmYXBmcm9tPSQxJmFwcHJlZml4PSQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQucXVlcnkgJiYgcXVlcnlSZXN1bHQucXVlcnkuYWxscGFnZXMpIHtcblx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBxdWVyeVJlc3VsdC5xdWVyeS5hbGxwYWdlcztcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHRpdGxlc1tpXS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0fSAvLyBybSBuYW1lc3BhY2Vcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGV4aXN0czoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KCd3Z1NjcmlwdFBhdGgnKX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmcHJvcD1pbmZvJnRpdGxlcz1DYXRlZ29yeTokMWAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQsIHF1ZXJ5S2V5KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcyAmJiAhcXVlcnlSZXN1bHQucXVlcnkucGFnZXNbLTFdKSB7XG5cdFx0XHRcdFx0Ly8gU2hvdWxkIGhhdmUgZXhhY3RseSAxXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwIGluIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocXVlcnlSZXN1bHQucXVlcnkucGFnZXMsIHApKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGV0IF90aXRsZSA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzW3BdLnRpdGxlO1xuXHRcdFx0XHRcdFx0X3RpdGxlID0gX3RpdGxlLnNsaWNlKE1hdGgubWF4KDAsIF90aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBbX3RpdGxlXTtcblx0XHRcdFx0XHRcdHRpdGxlcy5leGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aWYgKHF1ZXJ5S2V5ICE9PSBfdGl0bGUpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzLm5vcm1hbGl6ZWQgPSBfdGl0bGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBORkNcblx0XHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHN1YmNhdGVnb3JpZXM6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5Jmxpc3Q9Y2F0ZWdvcnltZW1iZXJzJmNtdHlwZT1zdWJjYXQmY21saW1pdD1tYXgmY210aXRsZT1DYXRlZ29yeTokMWAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LmNhdGVnb3J5bWVtYmVycykge1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LmNhdGVnb3J5bWVtYmVycztcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHRpdGxlc1tpXS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0fSAvLyBybSBuYW1lc3BhY2Vcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHBhcmVudGNhdGVnb3JpZXM6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5JnByb3A9Y2F0ZWdvcmllcyZ0aXRsZXM9Q2F0ZWdvcnk6JDEmY2xsaW1pdD1tYXhgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcCBpbiBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzW3BdLmNhdGVnb3JpZXMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gcXVlcnlSZXN1bHQucXVlcnkucGFnZXNbcF0uY2F0ZWdvcmllcztcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0udGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHRcdFx0fSAvLyBybSBuYW1lc3BhY2Vcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cdGNvbnN0IHN1Z2dlc3Rpb25Db25maWdzID0ge1xuXHRcdHNlYXJjaGluZGV4OiB7XG5cdFx0XHRuYW1lOiAnU2VhcmNoIGluZGV4Jyxcblx0XHRcdGVuZ2luZXM6IFsnb3BlbnNlYXJjaCddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdHBhZ2VsaXN0OiB7XG5cdFx0XHRuYW1lOiAnUGFnZSBsaXN0Jyxcblx0XHRcdGVuZ2luZXM6IFsnaW50ZXJuYWxzZWFyY2gnLCAnZXhpc3RzJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogZmFsc2UsXG5cdFx0XHRub0NvbXBsZXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0Y29tYmluZWQ6IHtcblx0XHRcdG5hbWU6ICdDb21iaW5lZCBzZWFyY2gnLFxuXHRcdFx0ZW5naW5lczogWydvcGVuc2VhcmNoJywgJ2ludGVybmFsc2VhcmNoJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogZmFsc2UsXG5cdFx0XHRub0NvbXBsZXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0c3ViY2F0OiB7XG5cdFx0XHRuYW1lOiAnU3ViY2F0ZWdvcmllcycsXG5cdFx0XHRlbmdpbmVzOiBbJ3N1YmNhdGVnb3JpZXMnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiB0cnVlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiB0cnVlLFxuXHRcdH0sXG5cdFx0cGFyZW50Y2F0OiB7XG5cdFx0XHRuYW1lOiAnUGFyZW50IGNhdGVnb3JpZXMnLFxuXHRcdFx0ZW5naW5lczogWydwYXJlbnRjYXRlZ29yaWVzJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogdHJ1ZSxcblx0XHRcdG5vQ29tcGxldGlvbjogdHJ1ZSxcblx0XHR9LFxuXHR9O1xuXHQvLyBFdmVudCBrZXlDb2RlcyB0aGF0IHdlIGhhbmRsZSBpbiB0aGUgdGV4dCBpbnB1dCBmaWVsZC9zdWdnZXN0aW9uIGxpc3QuXG5cdGNvbnN0IEJTID0gODtcblx0Y29uc3QgVEFCID0gOTtcblx0Y29uc3QgUkVUID0gMTM7XG5cdGNvbnN0IEVTQyA9IDI3O1xuXHRjb25zdCBTUEFDRSA9IDMyO1xuXHRjb25zdCBQR1VQID0gMzM7XG5cdGNvbnN0IFBHRE9XTiA9IDM0O1xuXHRjb25zdCBVUCA9IDM4O1xuXHRjb25zdCBET1dOID0gNDA7XG5cdGNvbnN0IERFTCA9IDQ2O1xuXHRjb25zdCBJTUUgPSAyMjk7XG5cdGNsYXNzIENhdGVnb3J5RWRpdG9yIHtcblx0XHRjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG5cdFx0XHR0aGlzLmluaXRpYWxpemUoLi4uYXJncyk7XG5cdFx0fVxuXHRcdGluaXRpYWxpemUobGluZSwgc3BhbiwgYWZ0ZXIsIGtleSwgaXNfaGlkZGVuKSB7XG5cdFx0XHQvLyBJZiBhIHNwYW4gaXMgZ2l2ZW4sICdhZnRlcicgaXMgdGhlIGNhdGVnb3J5IHRpdGxlLCBvdGhlcndpc2UgaXQgbWF5IGJlIGFuIGVsZW1lbnQgYWZ0ZXIgd2hpY2ggdG9cblx0XHRcdC8vIGluc2VydCB0aGUgbmV3IHNwYW4uICdrZXknIGlzIGxpa2V3aXNlIG92ZXJsb2FkZWQ7IGlmIGEgc3BhbiBpcyBnaXZlbiwgaXQgaXMgdGhlIGNhdGVnb3J5IGtleSAoaWZcblx0XHRcdC8vIGtub3duKSwgb3RoZXJ3aXNlIGl0IGlzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgYSBiYXIgc2hhbGwgYmUgcHJlcGVuZGVkLlxuXHRcdFx0aWYgKHNwYW4pIHtcblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdHNwYW4uZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IHNwYW4uZmlyc3RDaGlsZDtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbENhdGVnb3J5ID0gYWZ0ZXI7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxLZXkgPSBrZXkgJiYga2V5Lmxlbmd0aCA+IDEgPyBrZXkuc2xpY2UoMSkgOiBudWxsOyAvLyA+IDEgYmVjYXVzZSBpdCBpbmNsdWRlcyB0aGUgbGVhZGluZyBiYXJcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEV4aXN0cyA9ICFoYXNDbGFzcyh0aGlzLmNhdExpbmssICduZXcnKTtcblx0XHRcdFx0Ly8gQ3JlYXRlIGNoYW5nZSBhbmQgZGVsIGxpbmtzXG5cdFx0XHRcdHRoaXMubWFrZUxpbmtTcGFuKCk7XG5cdFx0XHRcdGlmICghdGhpcy5vcmlnaW5hbEV4aXN0cyAmJiB0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMubGlua1NwYW4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gdHJ1ZTtcblx0XHRcdFx0Ly8gQ3JlYXRlIGFkZCBzcGFuIGFuZCBhcHBlbmQgdG8gY2F0TGlua3Ncblx0XHRcdFx0dGhpcy5vcmlnaW5hbENhdGVnb3J5ID0gJyc7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxLZXkgPSBudWxsO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsRXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdGlmICghbmV3RE9NKSB7XG5cdFx0XHRcdFx0c3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0XHRzcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdFx0XHRpZiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRzcGFuLmFwcGVuZChtYWtlKCcgfCAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRcdFx0YWZ0ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgYWZ0ZXIubmV4dFNpYmxpbmcpO1xuXHRcdFx0XHRcdFx0XHRhZnRlciA9IGFmdGVyLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChsaW5lKSB7XG5cdFx0XHRcdFx0XHRcdGxpbmUuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAobGluZSAmJiBsaW5lLmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRsaW5lLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5saW5rU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCBub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuYWRkLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1hZGQnKTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdHNwYW4gPSBtYWtlKG5ld0RPTSA/ICdsaScgOiAnc3BhbicpO1xuXHRcdFx0XHRzcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdHNwYW4uZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdGFmdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIGFmdGVyLm5leHRTaWJsaW5nKTtcblx0XHRcdFx0fSBlbHNlIGlmIChsaW5lKSB7XG5cdFx0XHRcdFx0bGluZS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcyA9IG51bGw7XG5cdFx0XHRcdHRoaXMudW5kZWxMaW5rID0gbnVsbDtcblx0XHRcdFx0dGhpcy5jYXRMaW5rID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHRoaXMub3JpZ2luYWxIaWRkZW4gPSBpc19oaWRkZW47XG5cdFx0XHR0aGlzLmxpbmUgPSBsaW5lO1xuXHRcdFx0dGhpcy5lbmdpbmUgPSBIQy5zdWdnZXN0aW9ucztcblx0XHRcdHRoaXMuc3BhbiA9IHNwYW47XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMuc3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZFN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMubGFzdFNhdmVkS2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMubGFzdFNhdmVkRXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdGlmICh0aGlzLmNhdExpbmsgJiYgdGhpcy5jdXJyZW50S2V5KSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleTtcblx0XHRcdH1cblx0XHRcdGVkaXRvcnNbZWRpdG9ycy5sZW5ndGhdID0gdGhpcztcblx0XHR9XG5cdFx0bWFrZUxpbmtTcGFuKCkge1xuXHRcdFx0dGhpcy5ub3JtYWxMaW5rcyA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdGxldCBsaW5rID0gbnVsbDtcblx0XHRcdGlmICh0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgJiYgdGhpcy5vcmlnaW5hbENhdGVnb3J5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5yZW1vdmUsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXJlbW92ZScpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdH1cblx0XHRcdGlmICghSEMudGVtcGxhdGVfY2F0ZWdvcmllc1t0aGlzLm9yaWdpbmFsQ2F0ZWdvcnldKSB7XG5cdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLmNoYW5nZSwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtY2hhbmdlJyk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMgJiYgSEMudXNlX3VwX2Rvd24pIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZG93bi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLmRvd24sIHRydWUpKTtcblx0XHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtZG93bicpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cC5iaW5kKHRoaXMpKTtcblx0XHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnVwLCB0cnVlKSk7XG5cdFx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXVwJyk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZCh0aGlzLnVwRG93bkxpbmtzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHRoaXMubGlua1NwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQgbm9wb3B1cHMgaG90Y2F0bGluayc7XG5cdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZCh0aGlzLm5vcm1hbExpbmtzKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuY2xhc3NOYW1lID0gJ25vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlc3RvcmUuYmluZCh0aGlzKSk7XG5cdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnJlc3RvcmUsIHRydWUpKTtcblx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1yZXN0b3JlJyk7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rLmFwcGVuZChsaW5rKTtcblx0XHRcdHRoaXMubGlua1NwYW4uYXBwZW5kKHRoaXMudW5kZWxMaW5rKTtcblx0XHR9XG5cdFx0aW52b2tlU3VnZ2VzdGlvbnMoZG9udF9hdXRvY29tcGxldGUpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy5lbmdpbmUgJiZcblx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdICYmXG5cdFx0XHRcdHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXS50ZW1wICYmXG5cdFx0XHRcdCFkb250X2F1dG9jb21wbGV0ZVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lID0gSEMuc3VnZ2VzdGlvbnM7XG5cdFx0XHR9IC8vIFJlc2V0IHRvIGEgc2VhcmNoIHVwb24gaW5wdXRcblx0XHRcdHRoaXMuc3RhdGUgPSBDSEFOR0VfUEVORElORztcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNlbGYudGV4dGNoYW5nZShkb250X2F1dG9jb21wbGV0ZSk7XG5cdFx0XHR9LCBIQy5zdWdnZXN0X2RlbGF5KTtcblx0XHR9XG5cdFx0bWFrZUZvcm0oKSB7XG5cdFx0XHRjb25zdCBmb3JtID0gbWFrZSgnZm9ybScpO1xuXHRcdFx0Zm9ybS5tZXRob2QgPSAnUE9TVCc7XG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuYWNjZXB0LmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5mb3JtID0gZm9ybTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0Y29uc3QgdGV4dCA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0XHR0ZXh0LnR5cGUgPSAndGV4dCc7XG5cdFx0XHR0ZXh0LnNpemUgPSBIQy5lZGl0Ym94X3dpZHRoO1xuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdC8vIEJlIGNhcmVmdWwgaGVyZSB0byBoYW5kbGUgSU1FIGlucHV0LiBUaGlzIGlzIGJyb3dzZXIvT1MvSU1FIGRlcGVuZGVudCwgYnV0IGJhc2ljYWxseSB0aGVyZSBhcmUgdHdvIG1lY2hhbmlzbXM6XG5cdFx0XHRcdC8vIC0gTW9kZXJuIChET00gTGV2ZWwgMykgYnJvd3NlcnMgdXNlIGNvbXBvc2l0aW9uc3RhcnQvY29tcG9zaXRpb25lbmQgZXZlbnRzIHRvIHNpZ25hbCBjb21wb3NpdGlvbjsgaWYgdGhlXG5cdFx0XHRcdC8vICAgY29tcG9zaXRpb24gaXMgbm90IGNhbmNlbGVkLCB0aGVyZSdsbCBiZSBhIHRleHRJbnB1dCBldmVudCBmb2xsb3dpbmcuIER1cmluZyBhIGNvbXBvc2l0aW9uIGtleSBldmVudHMgYXJlXG5cdFx0XHRcdC8vICAgZWl0aGVyIGFsbCBzdXBwcmVzc2VkIChGRi9HZWNrbyksIG9yIG90aGVyd2lzZSBoYXZlIGtleURvd24gPT09IElNRSBmb3IgYWxsIGtleXMgKFdlYmtpdCkuXG5cdFx0XHRcdC8vICAgLSBXZWJraXQgc2VuZHMgYSB0ZXh0SW5wdXQgZm9sbG93ZWQgYnkga2V5RG93biA9PT0gSU1FIGFuZCBhIGtleVVwIHdpdGggdGhlIGtleSB0aGF0IGVuZGVkIGNvbXBvc2l0aW9uLlxuXHRcdFx0XHQvLyAgIC0gR2Vja28gZG9lc24ndCBzZW5kIHRleHRJbnB1dCBidXQganVzdCBhIGtleVVwIHdpdGggdGhlIGtleSB0aGF0IGVuZGVkIGNvbXBvc2l0aW9uLCB3aXRob3V0IHNlbmRpbmcga2V5RG93blxuXHRcdFx0XHQvL1x0IGZpcnN0LiBHZWNrbyBkb2Vzbid0IHNlbmQgYW55IGtleWRvd24gd2hpbGUgSU1FIGlzIGFjdGl2ZS5cblx0XHRcdFx0Ly8gLSBPbGRlciBicm93c2VycyBzaWduYWwgY29tcG9zaXRpb24gYnkga2V5RG93biA9PT0gSU1FIGZvciB0aGUgZmlyc3QgYW5kIHN1YnNlcXVlbnQga2V5cyBmb3IgYSBjb21wb3NpdGlvbi4gVGhlXG5cdFx0XHRcdC8vICAgZmlyc3Qga2V5RG93biAhPT0gSU1FIGlzIGNlcnRhaW5seSBhZnRlciB0aGUgZW5kIG9mIHRoZSBjb21wb3NpdGlvbi4gVHlwaWNhbGx5LCBjb21wb3NpdGlvbiBlbmQgY2FuIGFsc28gYmVcblx0XHRcdFx0Ly8gICBkZXRlY3RlZCBieSBhIGtleURvd24gSU1FIHdpdGggYSBrZXlVcCBvZiBzcGFjZSwgdGFiLCBlc2NhcGUsIG9yIHJldHVybi5cblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGV2ZW50LmtleSB8fCAwO1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdHNlbGYuaW1lICYmXG5cdFx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPT09IElNRSAmJlxuXHRcdFx0XHRcdFx0IXNlbGYudXNlc0NvbXBvc2l0aW9uICYmXG5cdFx0XHRcdFx0XHQoa2V5ID09PSBUQUIgfHwga2V5ID09PSBSRVQgfHwga2V5ID09PSBFU0MgfHwga2V5ID09PSBTUEFDRSlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChzZWxmLmltZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChrZXkgPT09IFVQIHx8IGtleSA9PT0gRE9XTiB8fCBrZXkgPT09IFBHVVAgfHwga2V5ID09PSBQR0RPV04pIHtcblx0XHRcdFx0XHRcdC8vIEluIGNhc2UgYSBicm93c2VyIGRvZXNuJ3QgZ2VuZXJhdGUga2V5cHJlc3MgZXZlbnRzIGZvciBhcnJvdyBrZXlzLi4uXG5cdFx0XHRcdFx0XHRpZiAoc2VsZi5rZXlDb3VudCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5wcm9jZXNzS2V5KGV2ZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gRVNDICYmIHNlbGYubGFzdEtleSAhPT0gSU1FICYmICFzZWxmLnJlc2V0S2V5U2VsZWN0aW9uKCkpIHtcblx0XHRcdFx0XHRcdFx0Ly8gTm8gdW5kbyBvZiBrZXkgc2VsZWN0aW9uOiB0cmVhdCBFU0MgYXMgXCJjYW5jZWxcIi5cblx0XHRcdFx0XHRcdFx0c2VsZi5jYW5jZWwoKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gQWxzbyBkbyB0aGlzIGZvciBFU0MgYXMgYSB3b3JrYXJvdW5kIGZvciBGaXJlZm94IGJ1ZyA1MjQzNjBcblx0XHRcdFx0XHRcdC8vIHtAbGluayBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01MjQzNjB9XG5cdFx0XHRcdFx0XHRzZWxmLmludm9rZVN1Z2dlc3Rpb25zKGtleSA9PT0gQlMgfHwga2V5ID09PSBERUwgfHwga2V5ID09PSBFU0MpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGV2ZW50LmtleSB8fCAwO1xuXHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IGtleTtcblx0XHRcdFx0XHRzZWxmLmtleUNvdW50ID0gMDtcblx0XHRcdFx0XHQvLyBET00gTGV2ZWwgPCAzIElNRSBpbnB1dFxuXHRcdFx0XHRcdGlmICghc2VsZi5pbWUgJiYga2V5ID09PSBJTUUgJiYgIXNlbGYudXNlc0NvbXBvc2l0aW9uKSB7XG5cdFx0XHRcdFx0XHQvLyBzZWxmLnVzZXNDb21wb3NpdGlvbiBjYXRjaGVzIGJyb3dzZXJzIHRoYXQgbWF5IGVtaXQgc3B1cmlvdXMga2V5ZG93biBJTUUgYWZ0ZXIgYSBjb21wb3NpdGlvbiBoYXMgZW5kZWRcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gdHJ1ZTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgJiZcblx0XHRcdFx0XHRcdGtleSAhPT0gSU1FICYmXG5cdFx0XHRcdFx0XHQhKChrZXkgPj0gMTYgJiYga2V5IDw9IDIwKSB8fCAoa2V5ID49IDkxICYmIGtleSA8PSA5MykgfHwga2V5ID09PSAxNDQpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHQvLyBJZ25vcmUgY29udHJvbCBrZXlzOiBjdHJsLCBzaGlmdCwgYWx0LCBhbHQgZ3IsIGNhcHMgbG9jaywgd2luZG93cy9hcHBsZSBjbWQga2V5cywgbnVtIGxvY2suIE9ubHkgdGhlIHdpbmRvd3Mga2V5c1xuXHRcdFx0XHRcdFx0Ly8gdGVybWluYXRlIElNRSAoYXBwbGUgY21kIGRvZXNuJ3QpLCBidXQgdGhleSBhbHNvIGNhdXNlIGEgYmx1ciwgc28gaXQncyBPSyB0byBpZ25vcmUgdGhlbSBoZXJlLlxuXHRcdFx0XHRcdFx0Ly8gTm90ZTogU2FmYXJpIDQgKDUzMC4xNykgcHJvcGFnYXRlcyBFU0Mgb3V0IG9mIGFuIElNRSBjb21wb3NpdGlvbiAob2JzZXJ2ZWQgYXQgbGVhc3Qgb24gV2luIFhQKS5cblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChzZWxmLmltZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEhhbmRsZSByZXR1cm4gZXhwbGljaXRseSwgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIHRvIGJlIGFibGUgdG8gY2hlY2sgZm9yIGN0cmxcblx0XHRcdFx0XHRpZiAoa2V5ID09PSBSRVQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZWxmLmFjY2VwdChldmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEluaGliaXQgZGVmYXVsdCBiZWhhdmlvciBvZiBFU0MgKHJldmVydCB0byBsYXN0IHJlYWwgaW5wdXQgaW4gRkY6IHdlIGRvIHRoYXQgb3Vyc2VsdmVzKVxuXHRcdFx0XHRcdHJldHVybiBrZXkgPT09IEVTQyA/IGV2dEtpbGwoZXZlbnQpIDogdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIEFuZCBoYW5kbGUgY29udGludWVkIHByZXNzaW5nIG9mIGFycm93IGtleXNcblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYua2V5Q291bnQrKztcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi5wcm9jZXNzS2V5KGV2ZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQodGV4dCkub24oJ2ZvY3VzJywgKCkgPT4ge1xuXHRcdFx0XHRcdG1ha2VBY3RpdmUoc2VsZik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBPbiBJRSwgYmx1ciBldmVudHMgYXJlIGFzeW5jaHJvbm91cywgYW5kIG1heSB0aHVzIGFycml2ZSBhZnRlciB0aGUgZWxlbWVudCBoYXMgbG9zdCB0aGUgZm9jdXMuIFNpbmNlIElFXG5cdFx0XHRcdC8vIGNhbiBnZXQgdGhlIHNlbGVjdGlvbiBvbmx5IHdoaWxlIHRoZSBlbGVtZW50IGlzIGFjdGl2ZSAoaGFzIHRoZSBmb2N1cyksIHdlIG1heSBub3QgYWx3YXlzIGdldCB0aGUgc2VsZWN0aW9uLlxuXHRcdFx0XHQvLyBUaGVyZWZvcmUsIHVzZSBhbiBJRS1zcGVjaWZpYyBzeW5jaHJvbm91cyBldmVudCBvbiBJRS4uLlxuXHRcdFx0XHQvLyBEb24ndCB0ZXN0IGZvciB0ZXh0LnNlbGVjdGlvblN0YXJ0IGJlaW5nIGRlZmluZWQ7XG5cdFx0XHRcdCQodGV4dCkub24oXG5cdFx0XHRcdFx0dGV4dC5vbmJlZm9yZWRlYWN0aXZhdGUgIT09IHVuZGVmaW5lZCAmJiB0ZXh0LmNyZWF0ZVRleHRSYW5nZSA/ICdiZWZvcmVkZWFjdGl2YXRlJyA6ICdibHVyJyxcblx0XHRcdFx0XHR0aGlzLnNhdmVWaWV3LmJpbmQodGhpcylcblx0XHRcdFx0KTtcblx0XHRcdFx0Ly8gRE9NIExldmVsIDMgSU1FIGhhbmRsaW5nXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gU2V0dGluZyBsYXN0S2V5ID0gSU1FIHByb3ZpZGVzIGEgZmFrZSBrZXlEb3duIGZvciBHZWNrbydzIHNpbmdsZSBrZXlVcCBhZnRlciBhIGNtcG9zaXRpb24uIElmIHdlIGRpZG4ndCBkbyB0aGlzLFxuXHRcdFx0XHRcdC8vIGNhbmNlbGxpbmcgYSBjb21wb3NpdGlvbiB2aWEgRVNDIHdvdWxkIGFsc28gY2FuY2VsIGFuZCBjbG9zZSB0aGUgd2hvbGUgY2F0ZWdvcnkgaW5wdXQgZWRpdG9yLlxuXHRcdFx0XHRcdCQodGV4dCkub24oJ2NvbXBvc2l0aW9uc3RhcnQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPSBJTUU7XG5cdFx0XHRcdFx0XHRzZWxmLnVzZXNDb21wb3NpdGlvbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IHRydWU7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JCh0ZXh0KS5vbignY29tcG9zaXRpb25lbmQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPSBJTUU7XG5cdFx0XHRcdFx0XHRzZWxmLnVzZXNDb21wb3NpdGlvbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQodGV4dCkub24oJ3RleHRJbnB1dCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRzZWxmLmludm9rZVN1Z2dlc3Rpb25zKGZhbHNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0Ly8gSnVzdCBpbiBjYXNlIHNvbWUgYnJvd3NlcnMgbWlnaHQgcHJvZHVjZSBleGNlcHRpb25zIHdpdGggdGhlc2UgRE9NIExldmVsIDMgZXZlbnRzXG5cdFx0XHRcdH1cblx0XHRcdFx0JCh0ZXh0KS5vbignYmx1cicsICgpID0+IHtcblx0XHRcdFx0XHRzZWxmLnVzZXNDb21wb3NpdGlvbiA9IGZhbHNlO1xuXHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50ZXh0ID0gdGV4dDtcblx0XHRcdHRoaXMuaWNvbiA9IG1ha2UoJ2ltZycpO1xuXHRcdFx0bGV0IGxpc3QgPSBudWxsO1xuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdGxpc3QgPSBtYWtlKCdzZWxlY3QnKTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRpZiAoc2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UoZmFsc2UsIHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCkpIHtcblx0XHRcdFx0XHRcdHNlbGYuYWNjZXB0KGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKTtcblx0XHRcdFx0XHRzZWxmLnRleHQuZm9jdXMoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRpZiAoZXZlbnQua2V5ID09PSBFU0MpIHtcblx0XHRcdFx0XHRcdHNlbGYucmVzZXRLZXlTZWxlY3Rpb24oKTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZSh0cnVlKTtcblx0XHRcdFx0XHRcdH0sIEhDLnN1Z2dlc3RfZGVsYXkpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBSRVQpIHtcblx0XHRcdFx0XHRcdHNlbGYuYWNjZXB0KGV2ZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAoIUhDLmZpeGVkX3NlYXJjaCkge1xuXHRcdFx0XHRcdGNvbnN0IGVuZ2luZVNlbGVjdG9yID0gbWFrZSgnc2VsZWN0Jyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gc3VnZ2VzdGlvbkNvbmZpZ3MpIHtcblx0XHRcdFx0XHRcdGlmIChzdWdnZXN0aW9uQ29uZmlnc1trZXldLnNob3cpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgb3B0ID0gbWFrZSgnb3B0aW9uJyk7XG5cdFx0XHRcdFx0XHRcdG9wdC52YWx1ZSA9IGtleTtcblx0XHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gdGhpcy5lbmdpbmUpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHQuc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG9wdC5hcHBlbmQobWFrZShzdWdnZXN0aW9uQ29uZmlnc1trZXldLm5hbWUsIHRydWUpKTtcblx0XHRcdFx0XHRcdFx0ZW5naW5lU2VsZWN0b3IuYXBwZW5kKG9wdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVuZ2luZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuZW5naW5lID0gc2VsZi5lbmdpbmVTZWxlY3Rvci5vcHRpb25zW3NlbGYuZW5naW5lU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHQuZm9jdXMoKTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZSh0cnVlLCB0cnVlKTsgLy8gRG9uJ3QgYXV0b2NvbXBsZXRlLCBmb3JjZSByZS1kaXNwbGF5IG9mIGxpc3Rcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yID0gZW5naW5lU2VsZWN0b3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdCA9IGxpc3Q7XG5cdFx0XHRjb25zdCBidXR0b25fbGFiZWwgPSAoX2lkLCBkZWZhdWx0VGV4dCkgPT4ge1xuXHRcdFx0XHRjb25zdCBsYWJlbCA9IG51bGw7XG5cdFx0XHRcdGlmICghbGFiZWwgfHwgIWxhYmVsLmRhdGEpIHtcblx0XHRcdFx0XHRyZXR1cm4gZGVmYXVsdFRleHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGxhYmVsLmRhdGE7XG5cdFx0XHR9O1xuXHRcdFx0Ly8gRG8gbm90IHVzZSB0eXBlICdzdWJtaXQnOyB3ZSBjYW5ub3QgZGV0ZWN0IG1vZGlmaWVyIGtleXMgaWYgd2UgZG9cblx0XHRcdGNvbnN0IE9LID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdE9LLnR5cGUgPSAnYnV0dG9uJztcblx0XHRcdE9LLnZhbHVlID0gYnV0dG9uX2xhYmVsKCd3cE9rVXBsb2FkTGJsJywgZ2V0TWVzc2FnZSgnbWVzc2FnZXMtb2snKSk7XG5cdFx0XHRPSy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWNjZXB0LmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5vayA9IE9LO1xuXHRcdFx0Y29uc3QgY2FuY2VsID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdGNhbmNlbC50eXBlID0gJ2J1dHRvbic7XG5cdFx0XHRjYW5jZWwudmFsdWUgPSBidXR0b25fbGFiZWwoJ3dwQ2FuY2VsVXBsb2FkTGJsJywgZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2FuY2VsJykpO1xuXHRcdFx0Y2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLmNhbmNlbEJ1dHRvbiA9IGNhbmNlbDtcblx0XHRcdGNvbnN0IHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRzcGFuLmNsYXNzTmFtZSA9ICdob3RjYXRpbnB1dCc7XG5cdFx0XHRzcGFuLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcblx0XHRcdHNwYW4uYXBwZW5kKHRleHQpO1xuXHRcdFx0Ly8gUHV0IHNvbWUgdGV4dCBpbnRvIHRoaXMgc3BhbiAoYTAgaXMgbmJzcCkgYW5kIG1ha2Ugc3VyZSBpdCBhbHdheXMgc3RheXMgb24gdGhlIHNhbWVcblx0XHRcdC8vIGxpbmUgYXMgdGhlIGlucHV0IGZpZWxkLCBvdGhlcndpc2UsIElFOC85IG1pc2NhbGN1bGF0ZXMgdGhlIGhlaWdodCBvZiB0aGUgc3BhbiBhbmRcblx0XHRcdC8vIHRoZW4gdGhlIGVuZ2luZSBzZWxlY3RvciBtYXkgb3ZlcmxhcCB0aGUgaW5wdXQgZmllbGQuXG5cdFx0XHRzcGFuLmFwcGVuZChtYWtlKCdcXHUwMEEwJywgdHJ1ZSkpO1xuXHRcdFx0c3Bhbi5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG5cdFx0XHRpZiAobGlzdCkge1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaXN0KTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMuZW5naW5lU2VsZWN0b3IpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMuaWNvbik7XG5cdFx0XHR9XG5cdFx0XHRzcGFuLmFwcGVuZChPSyk7XG5cdFx0XHRzcGFuLmFwcGVuZChjYW5jZWwpO1xuXHRcdFx0Zm9ybS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0aGlzLnNwYW4uYXBwZW5kKGZvcm0pO1xuXHRcdH1cblx0XHRkaXNwbGF5KGV2ZW50KSB7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5ICYmICFvblVwbG9hZCAmJiB0aGlzLmxpbmUpIHtcblx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKHRoaXMubGluZSwgbnVsbCwgdGhpcy5zcGFuLCB0cnVlKTsgLy8gQ3JlYXRlIGEgbmV3IG9uZVxuXHRcdFx0fVxuXHRcdFx0aWYgKCFjb21taXRCdXR0b24gJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0XHRcdHNldE11bHRpSW5wdXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aGlzLmZvcm0pIHtcblx0XHRcdFx0dGhpcy5tYWtlRm9ybSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMubGFzdFNhdmVkRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5sYXN0U2F2ZWRIaWRkZW47XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLmxhc3RTYXZlZEtleTtcblx0XHRcdHRoaXMuaWNvbi5zcmMgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyBIQy5leGlzdHNZZXMgOiBIQy5leGlzdHNObztcblx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHRoaXMuY3VycmVudENhdGVnb3J5ICsgKHRoaXMuY3VycmVudEtleSA9PT0gbnVsbCA/ICcnIDogYHwke3RoaXMuY3VycmVudEtleX1gKTtcblx0XHRcdHRoaXMub3JpZ2luYWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRoaXMuY3VycmVudEV4aXN0cztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlID09PSBVTkNIQU5HRUQgPyBPUEVOIDogQ0hBTkdFX1BFTkRJTkc7XG5cdFx0XHR0aGlzLmxhc3RTZWxlY3Rpb24gPSB7XG5cdFx0XHRcdHN0YXJ0OiB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGgsXG5cdFx0XHRcdGVuZDogdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoLFxuXHRcdFx0fTtcblx0XHRcdHRoaXMuc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHQvLyBEaXNwbGF5IHRoZSBmb3JtXG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3Bhbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0XHRcdHRoaXMub2suZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdC8vIEtpbGwgdGhlIGV2ZW50IGJlZm9yZSBmb2N1c3NpbmcsIG90aGVyd2lzZSBJRSB3aWxsIGtpbGwgdGhlIG9uZm9jdXMgZXZlbnQhXG5cdFx0XHRjb25zdCByZXN1bHQgPSBldnRLaWxsKGV2ZW50KTtcblx0XHRcdHRoaXMudGV4dC5mb2N1cygpO1xuXHRcdFx0dGhpcy50ZXh0LnJlYWRPbmx5ID0gZmFsc2U7XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHNob3coZXZlbnQsIGVuZ2luZSwgcmVhZE9ubHkpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMuZGlzcGxheShldmVudCk7XG5cdFx0XHRjb25zdCB2ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50ZXh0LnJlYWRPbmx5ID0gISFyZWFkT25seTtcblx0XHRcdHRoaXMuZW5naW5lID0gZW5naW5lO1xuXHRcdFx0dGhpcy50ZXh0Y2hhbmdlKGZhbHNlLCB0cnVlKTsgLy8gZG8gYXV0b2NvbXBsZXRpb24sIGZvcmNlIGRpc3BsYXkgb2Ygc3VnZ2VzdGlvbnNcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdG9wZW4oZXZlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsIHRoaXMuZW5naW5lICYmIHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXS50ZW1wID8gSEMuc3VnZ2VzdGlvbnMgOiB0aGlzLmVuZ2luZSk7XG5cdFx0fVxuXHRcdGRvd24oZXZlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsICdzdWJjYXQnLCB0cnVlKTtcblx0XHR9XG5cdFx0dXAoZXZlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsICdwYXJlbnRjYXQnKTtcblx0XHR9XG5cdFx0Y2FuY2VsKCkge1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTsgLy8gV2UgYWRkZWQgYSBuZXcgYWRkZXIgd2hlbiBvcGVuaW5nXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIENsb3NlLCByZS1kaXNwbGF5IGxpbmtcblx0XHRcdHRoaXMuaW5hY3RpdmF0ZSgpO1xuXHRcdFx0dGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLmxhc3RTYXZlZEtleTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMubGFzdFNhdmVkRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5sYXN0U2F2ZWRIaWRkZW47XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSAmJiB0aGlzLmN1cnJlbnRLZXkubGVuZ3RoID4gMCA/IHRoaXMuY3VycmVudEtleSA6ICcnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHRyZW1vdmVFZGl0b3IoKSB7XG5cdFx0XHRpZiAoIW5ld0RPTSkge1xuXHRcdFx0XHRjb25zdCBuZXh0ID0gdGhpcy5zcGFuLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRpZiAobmV4dCkge1xuXHRcdFx0XHRcdG5leHQucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnNwYW4gJiYgdGhpcy5zcGFuLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0dGhpcy5zcGFuLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0b3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChlZGl0b3JzW2ldID09PSB0aGlzKSB7XG5cdFx0XHRcdFx0ZWRpdG9ycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHRyb2xsYmFjayhldmVudCkge1xuXHRcdFx0dGhpcy51bmRvTGluay5yZW1vdmUoKTtcblx0XHRcdHRoaXMudW5kb0xpbmsgPSBudWxsO1xuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdGlmICghdGhpcy5jdXJyZW50Q2F0ZWdvcnkgfHwgdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdC8vIEl0IHdhcyBhIG5ld2x5IGFkZGVkIGNhdGVnb3J5LiBSZW1vdmUgdGhlIHdob2xlIGVkaXRvci5cblx0XHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFJlZGlzcGxheSB0aGUgbGluay4uLlxuXHRcdFx0XHR0aGlzLmNhdExpbmsuZmlyc3RDaGlsZC5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKHRoaXMuY3VycmVudENhdGVnb3J5LCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5ocmVmID0gd2lraVBhZ2VQYXRoKGAke0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0aGlzLmN1cnJlbnRDYXRlZ29yeX1gKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuY2xhc3NOYW1lID0gdGhpcy5jdXJyZW50RXhpc3RzID8gJycgOiAnbmV3Jztcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cdFx0XHRcdGlmICh0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5jdXJyZW50RXhpc3RzID8gJycgOiAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0fVxuXHRcdGluYWN0aXZhdGUoKSB7XG5cdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5pc19hY3RpdmUgPSBmYWxzZTtcblx0XHR9XG5cdFx0YWNjZXB0Q2hlY2soZG9udENoZWNrKSB7XG5cdFx0XHR0aGlzLnNhbml0aXplSW5wdXQoKTtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRsZXQga2V5ID0gbnVsbDtcblx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFssIGtleV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHRcdGxldCB2ID0gdmFsdWVbMF0ucmVwbGFjZSgvXy9nLCAnICcpLnRyaW0oKTtcblx0XHRcdGlmIChIQy5jYXBpdGFsaXplUGFnZU5hbWVzKSB7XG5cdFx0XHRcdHYgPSBjYXBpdGFsaXplKHYpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB2O1xuXHRcdFx0diA9IHJlcGxhY2VTaG9ydGN1dHModiwgSEMuc2hvcnRjdXRzKTtcblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFkb250Q2hlY2sgJiZcblx0XHRcdFx0KChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAxNCAmJiB2ID09PSBjb25mLndnVGl0bGUpIHx8IChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QodikpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdjtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IGtleTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMuaW5wdXRFeGlzdHM7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0YWNjZXB0KGV2ZW50KSB7XG5cdFx0XHQvLyAoZXZ0S2V5cyhldmVudCkgJiAxKSAhPT0gMFxuXHRcdFx0Ly8g5b2T5LiU5LuF5b2TZXZ0S2V5cyhldmVudCnkuLox5pe277yM5pW05Liq5Yik5Yir5byP5omN5Li6dHJ1ZVxuXHRcdFx0dGhpcy5ub0NvbW1pdCA9IGV2dEtleXMoZXZlbnQpID09PSAxO1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZXZ0S2lsbChldmVudCk7XG5cdFx0XHRpZiAodGhpcy5hY2NlcHRDaGVjaygpKSB7XG5cdFx0XHRcdGNvbnN0IHRvUmVzb2x2ZSA9IFt0aGlzXTtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWwgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdFx0cmVzb2x2ZU11bHRpKHRvUmVzb2x2ZSwgKHJlc29sdmVkKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlc29sdmVkWzBdLmRhYikge1xuXHRcdFx0XHRcdFx0c2hvd0RhYihyZXNvbHZlZFswXSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChyZXNvbHZlZFswXS5hY2NlcHRDaGVjayh0cnVlKSkge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZWRbMF0uY29tbWl0KFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlZFswXS5jdXJyZW50Q2F0ZWdvcnkgPT09IG9yaWdpbmFsXG5cdFx0XHRcdFx0XHRcdFx0PyBudWxsXG5cdFx0XHRcdFx0XHRcdFx0OiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfcmVzb2x2ZWQnLCBvcmlnaW5hbClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdGNsb3NlKCkge1xuXHRcdFx0aWYgKCF0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0Ly8gQ3JlYXRlIGEgY2F0TGlua1xuXHRcdFx0XHR0aGlzLmNhdExpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5hcHBlbmQobWFrZSgnZm9vJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0dGhpcy5zcGFuLmluc2VydEJlZm9yZSh0aGlzLmNhdExpbmssIHRoaXMuc3Bhbi5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2F0TGluay5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKHRoaXMuY3VycmVudENhdGVnb3J5LCB0cnVlKSk7XG5cdFx0XHR0aGlzLmNhdExpbmsuaHJlZiA9IHdpa2lQYWdlUGF0aChgJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7dGhpcy5jdXJyZW50Q2F0ZWdvcnl9YCk7XG5cdFx0XHR0aGlzLmNhdExpbmsuY2xhc3NOYW1lID0gdGhpcy5jdXJyZW50RXhpc3RzID8gJycgOiAnbmV3Jztcblx0XHRcdHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnkgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdHRoaXMubGFzdFNhdmVkS2V5ID0gdGhpcy5jdXJyZW50S2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLmN1cnJlbnRFeGlzdHM7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEhpZGRlbiA9IHRoaXMuY3VycmVudEhpZGRlbjtcblx0XHRcdC8vIENsb3NlIGZvcm0gYW5kIHJlZGlzcGxheSBjYXRlZ29yeVxuXHRcdFx0dGhpcy5pbmFjdGl2YXRlKCk7XG5cdFx0XHR0aGlzLmZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSB8fCAnJztcblx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5KSB7XG5cdFx0XHRcdGlmIChvblVwbG9hZCAmJiB0aGlzLmxpbmUpIHtcblx0XHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IodGhpcy5saW5lLCBudWxsLCB0aGlzLnNwYW4sIHRydWUpOyAvLyBDcmVhdGUgYSBuZXcgb25lXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubGlua1NwYW4ucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMubWFrZUxpbmtTcGFuKCk7XG5cdFx0XHRcdHRoaXMuc3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMudW5kb0xpbmspIHtcblx0XHRcdFx0Ly8gQXBwZW5kIGFuIHVuZG8gbGluay5cblx0XHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJvbGxiYWNrLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnVuZG8sIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXVuZG8nKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHR0aGlzLnVuZG9MaW5rID0gc3Bhbjtcblx0XHRcdFx0aWYgKCFvblVwbG9hZCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy51cERvd25MaW5rcykge1xuXHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmxhc3RTYXZlZEV4aXN0cyA/ICcnIDogJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3Bhbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFRDtcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHRjb21taXQoKSB7XG5cdFx0XHQvLyBDaGVjayBhZ2FpbiB0byBjYXRjaCBwcm9ibGVtIGNhc2VzIGFmdGVyIHJlZGlyZWN0IHJlc29sdXRpb25cblx0XHRcdGlmIChcblx0XHRcdFx0KHRoaXMuY3VycmVudENhdGVnb3J5ID09PSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgJiZcblx0XHRcdFx0XHQodGhpcy5jdXJyZW50S2V5ID09PSB0aGlzLm9yaWdpbmFsS2V5IHx8XG5cdFx0XHRcdFx0XHQodGhpcy5jdXJyZW50S2V5ID09PSBudWxsICYmIHRoaXMub3JpZ2luYWxLZXkubGVuZ3RoID09PSAwKSkpIHx8XG5cdFx0XHRcdChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAxNCAmJiB0aGlzLmN1cnJlbnRDYXRlZ29yeSA9PT0gY29uZi53Z1RpdGxlKSB8fFxuXHRcdFx0XHQoSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KHRoaXMuY3VycmVudENhdGVnb3J5KSlcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHRpZiAoIWNvbW1pdEJ1dHRvbiAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSwgc2VsZik7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0XHRtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVtb3ZlKGV2ZW50KSB7XG5cdFx0XHQvLyAoZXZ0S2V5cyhldmVudCkgJiAxKVxuXHRcdFx0Ly8g5b2T5LiU5LuF5b2TZXZ0S2V5cyhldmVudCnkuLox5pe277yM5pW05Liq5Yik5Yir5byP5omN5Li6Me+8jOWQpuWImemDveaYrzBcblx0XHRcdHRoaXMuZG9SZW1vdmUoZXZ0S2V5cyhldmVudCkgPT09IDEpO1xuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHRkb1JlbW92ZShub0NvbW1pdCkge1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSkge1xuXHRcdFx0XHQvLyBFbXB0eSBpbnB1dCBvbiBhZGRpbmcgYSBuZXcgY2F0ZWdvcnlcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjb21taXRCdXR0b24gJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0XHRcdHNldE11bHRpSW5wdXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSAnJztcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmNzc1RleHQgKz0gJzsgdGV4dC1kZWNvcmF0aW9uIDogbGluZS10aHJvdWdoICFpbXBvcnRhbnQ7Jztcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm9yaWdpbmFsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gREVMRVRFRDtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLnVuZGVsTGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0fSBlbHNlIGlmIChvblVwbG9hZCkge1xuXHRcdFx0XHQvLyBSZW1vdmUgdGhpcyBlZGl0b3IgY29tcGxldGVseVxuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IERFTEVURUQ7XG5cdFx0XHRcdHRoaXMubm9Db21taXQgPSBub0NvbW1pdCB8fCBIQy5kZWxfbmVlZHNfZGlmZjtcblx0XHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSwgc2VsZik7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLnN0YXRlID0gc2VsZi5vcmlnaW5hbFN0YXRlO1xuXHRcdFx0XHRcdFx0bXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlc3RvcmUoZXZlbnQpIHtcblx0XHRcdC8vIENhbiBvY2N1ciBvbmx5IGlmIHdlIGRvIGhhdmUgYSBjb21taXQgYnV0dG9uIGFuZCBhcmUgbm90IG9uIHRoZSB1cGxvYWQgZm9ybVxuXHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGhpcy5vcmlnaW5hbFN0YXRlO1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubm9ybWFsTGlua3Muc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHQvLyBJbnRlcm5hbCBvcGVyYXRpb25zXG5cdFx0c2VsZWN0RW5naW5lKGVuZ2luZU5hbWUpIHtcblx0XHRcdGlmICghdGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5naW5lU2VsZWN0b3Iub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbaV0udmFsdWUgPT09IGVuZ2luZU5hbWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNhbml0aXplSW5wdXQoKSB7XG5cdFx0XHRsZXQgdiA9IHRoaXMudGV4dC52YWx1ZSB8fCAnJztcblx0XHRcdHYgPSB2LnJlcGxhY2UoL14oXFxzfF8pKy8sICcnKTsgLy8gVHJpbSBsZWFkaW5nIGJsYW5rcyBhbmQgdW5kZXJzY29yZXNcblx0XHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgXigke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0aWYgKHJlLnRlc3QodikpIHtcblx0XHRcdFx0diA9IHYuc2xpY2UoTWF0aC5tYXgoMCwgdi5pbmRleE9mKCc6JykgKyAxKSkucmVwbGFjZSgvXihcXHN8XykrLywgJycpO1xuXHRcdFx0fVxuXHRcdFx0diA9IHYucmVwbGFjZSgvXFx1MjAwRSQvLCAnJyk7IC8vIFRyaW0gZW5kaW5nIGxlZnQtdG8tcmlnaHQgbWFya1xuXHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMpIHtcblx0XHRcdFx0diA9IGNhcGl0YWxpemUodik7XG5cdFx0XHR9XG5cdFx0XHQvLyBPbmx5IHVwZGF0ZSB0aGUgaW5wdXQgZmllbGQgaWYgdGhlcmUgaXMgYSBkaWZmZXJlbmNlLiBWYXJpb3VzIGJyb3dzZXJzIG90aGVyd2lzZVxuXHRcdFx0Ly8gcmVzZXQgdGhlIHNlbGVjdGlvbiBhbmQgY3Vyc29yIHBvc2l0aW9uIGFmdGVyIGVhY2ggdmFsdWUgcmUtYXNzaWdubWVudC5cblx0XHRcdGlmICh0aGlzLnRleHQudmFsdWUgIT09IG51bGwgJiYgdGhpcy50ZXh0LnZhbHVlICE9PSB2KSB7XG5cdFx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHY7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG1ha2VDYWxsKHVybCwgY2FsbGJhY2tPYmosIGVuZ2luZSwgcXVlcnlLZXksIGNsZWFuS2V5KSB7XG5cdFx0XHRsZXQgY2IgPSBjYWxsYmFja09iajtcblx0XHRcdGNvbnN0IGUgPSBlbmdpbmU7XG5cdFx0XHRjb25zdCB2ID0gcXVlcnlLZXk7XG5cdFx0XHRjb25zdCB6ID0gY2xlYW5LZXk7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0XHRcdGNiLmNhbGxzTWFkZSsrO1xuXHRcdFx0XHRpZiAoY2IuY2FsbHNNYWRlID09PSBjYi5ub2ZDYWxscykge1xuXHRcdFx0XHRcdGlmIChjYi5leGlzdHMpIHtcblx0XHRcdFx0XHRcdGNiLmFsbFRpdGxlcy5leGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2Iubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdFx0Y2IuYWxsVGl0bGVzLm5vcm1hbGl6ZWQgPSBjYi5ub3JtYWxpemVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWNiLmRvbnRDYWNoZSAmJiAhc3VnZ2VzdGlvbkNvbmZpZ3NbY2IuZW5naW5lTmFtZV0uY2FjaGVbel0pIHtcblx0XHRcdFx0XHRcdHN1Z2dlc3Rpb25Db25maWdzW2NiLmVuZ2luZU5hbWVdLmNhY2hlW3pdID0gY2IuYWxsVGl0bGVzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzZWxmLnRleHQucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAoIWNiLmNhbmNlbGxlZCkge1xuXHRcdFx0XHRcdFx0c2VsZi5zaG93U3VnZ2VzdGlvbnMoY2IuYWxsVGl0bGVzLCBjYi5ub0NvbXBsZXRpb24sIHYsIGNiLmVuZ2luZU5hbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2IgPT09IHNlbGYuY2FsbGJhY2tPYmopIHtcblx0XHRcdFx0XHRcdHNlbGYuY2FsbGJhY2tPYmogPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYiA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdCQuZ2V0SlNPTih1cmwsIChqc29uKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlcyA9IGUuaGFuZGxlcihqc29uLCB6KTtcblx0XHRcdFx0aWYgKHRpdGxlcyAmJiB0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNiLmFsbFRpdGxlcyA9IGNiLmFsbFRpdGxlcyA9PT0gbnVsbCA/IHRpdGxlcyA6IFsuLi5jYi5hbGxUaXRsZXMsIC4uLmdlbmVyYXRlQXJyYXkodGl0bGVzKV07XG5cdFx0XHRcdFx0aWYgKHRpdGxlcy5leGlzdHMpIHtcblx0XHRcdFx0XHRcdGNiLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aXRsZXMubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdFx0Y2Iubm9ybWFsaXplZCA9IHRpdGxlcy5ub3JtYWxpemVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRkb25lKCk7XG5cdFx0XHR9KS5mYWlsKChyZXEpID0+IHtcblx0XHRcdFx0aWYgKCFyZXEpIHtcblx0XHRcdFx0XHRub1N1Z2dlc3Rpb25zID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYi5kb250Q2FjaGUgPSB0cnVlO1xuXHRcdFx0XHRkb25lKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y2FsbGJhY2tPYmogPSBudWxsO1xuXHRcdHRleHRjaGFuZ2UoZG9udF9hdXRvY29tcGxldGUsIGZvcmNlKSB7XG5cdFx0XHQvLyBIaWRlIGFsbCBvdGhlciBsaXN0c1xuXHRcdFx0bWFrZUFjdGl2ZSh0aGlzKTtcblx0XHRcdC8vIEdldCBpbnB1dCB2YWx1ZSwgb21pdCBzb3J0IGtleSwgaWYgYW55XG5cdFx0XHR0aGlzLnNhbml0aXplSW5wdXQoKTtcblx0XHRcdGxldCB2ID0gdGhpcy50ZXh0LnZhbHVlO1xuXHRcdFx0Ly8gRGlzcmVnYXJkIGFueXRoaW5nIGFmdGVyIGEgcGlwZS5cblx0XHRcdGNvbnN0IHBpcGUgPSB2LmluZGV4T2YoJ3wnKTtcblx0XHRcdGlmIChwaXBlID49IDApIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdi5zbGljZShNYXRoLm1heCgwLCBwaXBlICsgMSkpO1xuXHRcdFx0XHR2ID0gdi5zbGljZSgwLCBNYXRoLm1heCgwLCBwaXBlKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMubGFzdElucHV0ID09PSB2ICYmICFmb3JjZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9IC8vIE5vIGNoYW5nZVxuXHRcdFx0aWYgKHRoaXMubGFzdElucHV0ICE9PSB2KSB7XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB2O1xuXHRcdFx0dGhpcy5sYXN0UmVhbElucHV0ID0gdjtcblx0XHRcdC8vIE1hcmsgYmxhY2tsaXN0ZWQgaW5wdXRzLlxuXHRcdFx0dGhpcy5vay5kaXNhYmxlZCA9IHYubGVuZ3RoID4gMCAmJiBIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3Qodik7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHQvLyBObyBBamF4OiBqdXN0IG1ha2Ugc3VyZSB0aGUgbGlzdCBpcyBoaWRkZW5cblx0XHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHR0aGlzLmljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoW10pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgY2xlYW5LZXkgPSB2LnJlcGxhY2UoL1tcXHUyMDBFXFx1MjAwRlxcdTIwMkEtXFx1MjAyRV0vZywgJycpLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCAnICcpO1xuXHRcdFx0Y2xlYW5LZXkgPSByZXBsYWNlU2hvcnRjdXRzKGNsZWFuS2V5LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0Y2xlYW5LZXkgPSBjbGVhbktleS50cmltKCk7XG5cdFx0XHRpZiAoY2xlYW5LZXkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1N1Z2dlc3Rpb25zKFtdKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuY2FsbGJhY2tPYmopIHtcblx0XHRcdFx0dGhpcy5jYWxsYmFja09iai5jYW5jZWxsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZW5naW5lTmFtZSA9IHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXSA/IHRoaXMuZW5naW5lIDogJ2NvbWJpbmVkJztcblx0XHRcdGRvbnRfYXV0b2NvbXBsZXRlIHx8PSBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS5ub0NvbXBsZXRpb247XG5cdFx0XHRpZiAoc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0uY2FjaGVbY2xlYW5LZXldKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1N1Z2dlc3Rpb25zKHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLmNhY2hlW2NsZWFuS2V5XSwgZG9udF9hdXRvY29tcGxldGUsIHYsIGVuZ2luZU5hbWUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB7ZW5naW5lc30gPSBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXTtcblx0XHRcdHRoaXMuY2FsbGJhY2tPYmogPSB7XG5cdFx0XHRcdGFsbFRpdGxlczogbnVsbCxcblx0XHRcdFx0Y2FsbHNNYWRlOiAwLFxuXHRcdFx0XHRub2ZDYWxsczogZW5naW5lcy5sZW5ndGgsXG5cdFx0XHRcdG5vQ29tcGxldGlvbjogZG9udF9hdXRvY29tcGxldGUsXG5cdFx0XHRcdGVuZ2luZU5hbWUsXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5tYWtlQ2FsbHMoZW5naW5lcywgdGhpcy5jYWxsYmFja09iaiwgdiwgY2xlYW5LZXkpO1xuXHRcdH1cblx0XHRtYWtlQ2FsbHMoZW5naW5lcywgY2IsIHYsIGNsZWFuS2V5KSB7XG5cdFx0XHRmb3IgKGNvbnN0IGVuZ2luZV8gb2YgZW5naW5lcykge1xuXHRcdFx0XHRjb25zdCBlbmdpbmUgPSBzdWdnZXN0aW9uRW5naW5lc1tlbmdpbmVfXTtcblx0XHRcdFx0Y29uc3QgdXJsID0gY29uZi53Z1NjcmlwdFBhdGggKyBlbmdpbmUudXJpLnJlcGxhY2UoL1xcJDEvZywgZW5jb2RlVVJJQ29tcG9uZW50KGNsZWFuS2V5KSk7XG5cdFx0XHRcdHRoaXMubWFrZUNhbGwodXJsLCBjYiwgZW5naW5lLCB2LCBjbGVhbktleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNob3dTdWdnZXN0aW9ucyh0aXRsZXMsIGRvbnRBdXRvY29tcGxldGUsIHF1ZXJ5S2V5LCBlbmdpbmVOYW1lKSB7XG5cdFx0XHR0aGlzLnRleHQucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdHRoaXMuZGFiID0gbnVsbDtcblx0XHRcdHRoaXMuc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHRpZiAoIXRoaXMubGlzdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBEZWZhdWx0Li4uXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuZW5naW5lTmFtZSA9IGVuZ2luZU5hbWU7XG5cdFx0XHRpZiAoZW5naW5lTmFtZSkge1xuXHRcdFx0XHRpZiAoIXRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZU5hbWUgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHF1ZXJ5S2V5KSB7XG5cdFx0XHRcdGlmICh0aGlzLmxhc3RJbnB1dC5pbmRleE9mKHF1ZXJ5S2V5KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy5sYXN0UXVlcnkgJiZcblx0XHRcdFx0XHR0aGlzLmxhc3RJbnB1dC5pbmRleE9mKHRoaXMubGFzdFF1ZXJ5KSA9PT0gMCAmJlxuXHRcdFx0XHRcdHRoaXMubGFzdFF1ZXJ5Lmxlbmd0aCA+IHF1ZXJ5S2V5Lmxlbmd0aFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGFzdFF1ZXJ5ID0gcXVlcnlLZXk7XG5cdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRsZXQgdiA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0diA9IEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPyBjYXBpdGFsaXplKHZbMF0pIDogdlswXTtcblx0XHRcdGxldCB2Tm9ybWFsaXplZCA9IHY7XG5cdFx0XHRjb25zdCBrbm93blRvRXhpc3QgPSB0aXRsZXMgJiYgdGl0bGVzLmV4aXN0cztcblx0XHRcdGxldCBpO1xuXHRcdFx0aWYgKHRpdGxlcykge1xuXHRcdFx0XHRpZiAodGl0bGVzLm5vcm1hbGl6ZWQgJiYgdi5pbmRleE9mKHF1ZXJ5S2V5KSA9PT0gMCkge1xuXHRcdFx0XHRcdC8vIFdlIGdvdCBiYWNrIGEgZGlmZmVyZW50IG5vcm1hbGl6YXRpb24gdGhhbiB3aGF0IGlzIGluIHRoZSBpbnB1dCBmaWVsZFxuXHRcdFx0XHRcdHZOb3JtYWxpemVkID0gdGl0bGVzLm5vcm1hbGl6ZWQgKyB2LnNsaWNlKHF1ZXJ5S2V5Lmxlbmd0aCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdkxvdyA9IHZOb3JtYWxpemVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdC8vIFN0cmlwIGJsYWNrbGlzdGVkIGNhdGVnb3JpZXNcblx0XHRcdFx0aWYgKEhDLmJsYWNrbGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChIQy5ibGFja2xpc3QudGVzdCh0aXRsZXNbaV0pKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGl0bGVzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdFx0XHRpZiAoYSA9PT0gYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhLmluZGV4T2YoYikgPT09IDApIHtcblx0XHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBhIGJlZ2lucyB3aXRoIGI6IGEgPiBiXG5cdFx0XHRcdFx0aWYgKGIuaW5kZXhPZihhKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBiIGJlZ2lucyB3aXRoIGE6IGEgPCBiXG5cdFx0XHRcdFx0Ly8gT3BlbnNlYXJjaCBtYXkgcmV0dXJuIHN0dWZmIG5vdCBiZWdpbm5pbmcgd2l0aCB0aGUgc2VhcmNoIHByZWZpeCFcblx0XHRcdFx0XHRsZXQgcHJlZml4TWF0Y2hBID0gYS5pbmRleE9mKHZOb3JtYWxpemVkKSA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0XHRcdGxldCBwcmVmaXhNYXRjaEIgPSBiLmluZGV4T2Yodk5vcm1hbGl6ZWQpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0aWYgKHByZWZpeE1hdGNoQSAhPT0gcHJlZml4TWF0Y2hCKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJlZml4TWF0Y2hCIC0gcHJlZml4TWF0Y2hBO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBDYXNlLWluc2Vuc2l0aXZlIHByZWZpeCBtYXRjaCFcblx0XHRcdFx0XHRjb25zdCBhTG93ID0gYS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdGNvbnN0IGJMb3cgPSBiLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0cHJlZml4TWF0Y2hBID0gYUxvdy5pbmRleE9mKHZMb3cpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0cHJlZml4TWF0Y2hCID0gYkxvdy5pbmRleE9mKHZMb3cpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0aWYgKHByZWZpeE1hdGNoQSAhPT0gcHJlZml4TWF0Y2hCKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJlZml4TWF0Y2hCIC0gcHJlZml4TWF0Y2hBO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYSA8IGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGIgPCBhKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBSZW1vdmUgZHVwbGljYXRlcyBhbmQgc2VsZi1yZWZlcmVuY2VzXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHQoaSArIDEgPCB0aXRsZXMubGVuZ3RoICYmIHRpdGxlc1tpXSA9PT0gdGl0bGVzW2kgKyAxXSkgfHxcblx0XHRcdFx0XHRcdChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAxNCAmJiB0aXRsZXNbaV0gPT09IGNvbmYud2dUaXRsZSlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRpdGxlcyB8fCB0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZW5naW5lTmFtZSAmJiBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSAmJiAhc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0udGVtcCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHRcdHRoaXMuaWNvbi5zcmMgPSBIQy5leGlzdHNObztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFtmaXJzdFRpdGxlXSA9IHRpdGxlcztcblx0XHRcdGNvbnN0IGNvbXBsZXRlZCA9IHRoaXMuYXV0b0NvbXBsZXRlKGZpcnN0VGl0bGUsIHYsIHZOb3JtYWxpemVkLCBrZXksIGRvbnRBdXRvY29tcGxldGUpO1xuXHRcdFx0Y29uc3QgZXhpc3RpbmcgPSBjb21wbGV0ZWQgfHwga25vd25Ub0V4aXN0IHx8IGZpcnN0VGl0bGUgPT09IHJlcGxhY2VTaG9ydGN1dHModiwgSEMuc2hvcnRjdXRzKTtcblx0XHRcdGlmIChlbmdpbmVOYW1lICYmIHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdICYmICFzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS50ZW1wKSB7XG5cdFx0XHRcdHRoaXMuaWNvbi5zcmMgPSBleGlzdGluZyA/IEhDLmV4aXN0c1llcyA6IEhDLmV4aXN0c05vO1xuXHRcdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gZXhpc3Rpbmc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY29tcGxldGVkKSB7XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gZmlyc3RUaXRsZTtcblx0XHRcdFx0aWYgKHRpdGxlcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIChSZS0pZmlsbCB0aGUgbGlzdFxuXHRcdFx0d2hpbGUgKHRoaXMubGlzdC5maXJzdENoaWxkKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBvcHQgPSBtYWtlKCdvcHRpb24nKTtcblx0XHRcdFx0b3B0LmFwcGVuZChtYWtlKHRpdGxlc1tpXSwgdHJ1ZSkpO1xuXHRcdFx0XHRvcHQuc2VsZWN0ZWQgPSBjb21wbGV0ZWQgJiYgaSA9PT0gMDtcblx0XHRcdFx0dGhpcy5saXN0LmFwcGVuZChvcHQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kaXNwbGF5TGlzdCgpO1xuXHRcdH1cblx0XHRkaXNwbGF5TGlzdCgpIHtcblx0XHRcdHRoaXMuc2hvd3NMaXN0ID0gdHJ1ZTtcblx0XHRcdGlmICghdGhpcy5pc19hY3RpdmUpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCBub2ZJdGVtcyA9IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCA+IEhDLmxpc3RTaXplID8gSEMubGlzdFNpemUgOiB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGg7XG5cdFx0XHRpZiAobm9mSXRlbXMgPD0gMSkge1xuXHRcdFx0XHRub2ZJdGVtcyA9IDI7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3Quc2l6ZSA9IG5vZkl0ZW1zO1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLmFsaWduID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdHRoaXMubGlzdC5zdHlsZS56SW5kZXggPSA1O1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdC8vIENvbXB1dGUgaW5pdGlhbCBsaXN0IHBvc2l0aW9uLiBGaXJzdCB0aGUgaGVpZ2h0LlxuXHRcdFx0Y29uc3QgYW5jaG9yID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdGxldCBsaXN0aCA9IDA7XG5cdFx0XHRpZiAodGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHQvLyBPZmYtc2NyZWVuIGRpc3BsYXkgdG8gZ2V0IHRoZSBoZWlnaHRcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLnRvcCA9IGAke3RoaXMudGV4dC5vZmZzZXRUb3B9cHhgO1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGVbYW5jaG9yXSA9ICctMTAwMDBweCc7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdGxpc3RoID0gdGhpcy5saXN0Lm9mZnNldEhlaWdodDtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsaXN0aCA9IHRoaXMubGlzdC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0XHQvLyBBcHByb3hpbWF0ZSBjYWxjdWxhdGlvbiBvZiBtYXhpbXVtIGxpc3Qgc2l6ZVxuXHRcdFx0bGV0IG1heExpc3RIZWlnaHQgPSBsaXN0aDtcblx0XHRcdGlmIChub2ZJdGVtcyA8IEhDLmxpc3RTaXplKSB7XG5cdFx0XHRcdG1heExpc3RIZWlnaHQgPSAobGlzdGggLyBub2ZJdGVtcykgKiBIQy5saXN0U2l6ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHZpZXdwb3J0ID0gKHdoYXQpID0+IHtcblx0XHRcdFx0aWYgKGlzX3dlYmtpdCAmJiAhZG9jdW1lbnQuZXZhbHVhdGUpIHtcblx0XHRcdFx0XHQvLyBTYWZhcmkgPCAzLjBcblx0XHRcdFx0XHRyZXR1cm4gd2luZG93W2Bpbm5lciR7d2hhdH1gXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBzID0gYGNsaWVudCR7d2hhdH1gO1xuXHRcdFx0XHRpZiAod2luZG93Lm9wZXJhKSB7XG5cdFx0XHRcdFx0cmV0dXJuICQoJ2JvZHknKVswXVtzXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtzXSA6IDApIHx8ICQoJ2JvZHknKVswXVtzXSB8fCAwO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHNjcm9sbF9vZmZzZXQgPSAod2hhdCkgPT4ge1xuXHRcdFx0XHRjb25zdCBzID0gYHNjcm9sbCR7d2hhdH1gO1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtzXSA6IDApIHx8ICQoJ2JvZHknKVswXVtzXSB8fCAwO1xuXHRcdFx0XHRpZiAoaXNfcnRsICYmIHdoYXQgPT09ICdMZWZ0Jykge1xuXHRcdFx0XHRcdC8vIFJUTCBpbmNvbnNpc3RlbmNpZXMuXG5cdFx0XHRcdFx0Ly8gRkY6IDAgYXQgdGhlIGZhciByaWdodCwgdGhlbiBpbmNyZWFzaW5nbHkgbmVnYXRpdmUgdmFsdWVzLlxuXHRcdFx0XHRcdC8vIElFID49IDg6IDAgYXQgdGhlIGZhciByaWdodCwgdGhlbiBpbmNyZWFzaW5nbHkgcG9zaXRpdmUgdmFsdWVzLlxuXHRcdFx0XHRcdC8vIFdlYmtpdDogc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCBhdCB0aGUgZmFyIHJpZ2h0LCB0aGVuIGRvd24gdG8gemVyby5cblx0XHRcdFx0XHQvLyBPcGVyYTogZG9uJ3Qga25vdy4uLlxuXHRcdFx0XHRcdGlmIChyZXN1bHQgPCAwKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSAtcmVzdWx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWlzX3dlYmtpdCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gc2Nyb2xsX29mZnNldCgnV2lkdGgnKSAtIHZpZXdwb3J0KCdXaWR0aCcpIC0gcmVzdWx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBOb3cgYWxsIGhhdmUgd2Via2l0IGJlaGF2aW9yLCBpLmUuIHplcm8gaWYgYXQgdGhlIGxlZnRtb3N0IGVkZ2UuXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IChub2RlKSA9PiB7XG5cdFx0XHRcdC8vIFN0cmlwcGVkLWRvd24gc2ltcGxpZmllZCBwb3NpdGlvbiBmdW5jdGlvbi4gSXQncyBnb29kIGVub3VnaCBmb3Igb3VyIHB1cnBvc2VzLlxuXHRcdFx0XHRpZiAobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcblx0XHRcdFx0XHRjb25zdCBib3ggPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR4OiBNYXRoLnJvdW5kKGJveC5sZWZ0ICsgc2Nyb2xsX29mZnNldCgnTGVmdCcpKSxcblx0XHRcdFx0XHRcdHk6IE1hdGgucm91bmQoYm94LnRvcCArIHNjcm9sbF9vZmZzZXQoJ1RvcCcpKSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0ID0gMDtcblx0XHRcdFx0bGV0IGwgPSAwO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0dCArPSBub2RlLm9mZnNldFRvcCB8fCAwO1xuXHRcdFx0XHRcdGwgKz0gbm9kZS5vZmZzZXRMZWZ0IHx8IDA7XG5cdFx0XHRcdFx0bm9kZSA9IG5vZGUub2Zmc2V0UGFyZW50O1xuXHRcdFx0XHR9IHdoaWxlIChub2RlKTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR4OiBsLFxuXHRcdFx0XHRcdHk6IHQsXG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgdGV4dFBvcyA9IHBvc2l0aW9uKHRoaXMudGV4dCk7XG5cdFx0XHRjb25zdCBubCA9IDA7XG5cdFx0XHRsZXQgbnQgPSAwO1xuXHRcdFx0Ly8gT3BlcmEgOS41IHNvbWVob3cgaGFzIG9mZnNldFdpZHRoID0gMCBoZXJlPz8gVXNlIHRoZSBuZXh0IGJlc3QgdmFsdWUuLi5cblx0XHRcdGxldCBvZmZzZXQgPSAwO1xuXHRcdFx0Y29uc3QgdGV4dEJveFdpZHRoID0gdGhpcy50ZXh0Lm9mZnNldFdpZHRoIHx8IHRoaXMudGV4dC5jbGllbnRXaWR0aDtcblx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS56SW5kZXggPSA1O1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS53aWR0aCA9IGAke3RleHRCb3hXaWR0aH1weGA7XG5cdFx0XHRcdC8vIEZpZ3VyZSBvdXQgdGhlIGhlaWdodCBvZiB0aGlzIHNlbGVjdG9yOiBkaXNwbGF5IGl0IG9mZi1zY3JlZW4sIHRoZW4gaGlkZSBpdCBhZ2Fpbi5cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZVthbmNob3JdID0gJy0xMDAwMHB4Jztcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnRvcCA9ICcwJztcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdFx0XHRvZmZzZXQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9mZnNldEhlaWdodDtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5lbmdpbmVTZWxlY3Rvci5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZVthbmNob3JdID0gYCR7bmx9cHhgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRleHRQb3MueSA8IG1heExpc3RIZWlnaHQgKyBvZmZzZXQgKyAxKSB7XG5cdFx0XHRcdC8vIFRoZSBsaXN0IG1pZ2h0IGV4dGVuZCBiZXlvbmQgdGhlIHVwcGVyIGJvcmRlciBvZiB0aGUgcGFnZS4gTGV0J3MgYXZvaWQgdGhhdCBieSBwbGFjaW5nIGl0XG5cdFx0XHRcdC8vIGJlbG93IHRoZSBpbnB1dCB0ZXh0IGZpZWxkLlxuXHRcdFx0XHRudCA9IHRoaXMudGV4dC5vZmZzZXRIZWlnaHQgKyBvZmZzZXQgKyAxO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS50b3AgPSBgJHt0aGlzLnRleHQub2Zmc2V0SGVpZ2h0fXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bnQgPSAtbGlzdGggLSBvZmZzZXQgLSAxO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS50b3AgPSBgJHstKG9mZnNldCArIDEpfXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0LnN0eWxlLnRvcCA9IGAke250fXB4YDtcblx0XHRcdHRoaXMubGlzdC5zdHlsZS53aWR0aCA9ICcnOyAvLyBObyBmaXhlZCB3aWR0aCAoeWV0KVxuXHRcdFx0dGhpcy5saXN0LnN0eWxlW2FuY2hvcl0gPSBgJHtubH1weGA7XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RW5naW5lKHRoaXMuZW5naW5lTmFtZSk7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0Ly8gU2V0IHRoZSB3aWR0aCBvZiB0aGUgbGlzdFxuXHRcdFx0aWYgKHRoaXMubGlzdC5vZmZzZXRXaWR0aCA8IHRleHRCb3hXaWR0aCkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUud2lkdGggPSBgJHt0ZXh0Qm94V2lkdGh9cHhgO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB0aGUgbGlzdCBpcyB3aWRlciB0aGFuIHRoZSB0ZXh0Ym94OiBtYWtlIHN1cmUgaXQgZml0cyBob3Jpem9udGFsbHkgaW50byB0aGUgYnJvd3NlciB3aW5kb3dcblx0XHRcdGNvbnN0IHNjcm9sbCA9IHNjcm9sbF9vZmZzZXQoJ0xlZnQnKTtcblx0XHRcdGNvbnN0IHZpZXdfdyA9IHZpZXdwb3J0KCdXaWR0aCcpO1xuXHRcdFx0bGV0IHcgPSB0aGlzLmxpc3Qub2Zmc2V0V2lkdGg7XG5cdFx0XHRjb25zdCBsX3BvcyA9IHBvc2l0aW9uKHRoaXMubGlzdCk7XG5cdFx0XHRsZXQgbGVmdCA9IGxfcG9zLng7XG5cdFx0XHRsZXQgcmlnaHQgPSBsZWZ0ICsgdztcblx0XHRcdGlmIChsZWZ0IDwgc2Nyb2xsIHx8IHJpZ2h0ID4gc2Nyb2xsICsgdmlld193KSB7XG5cdFx0XHRcdGlmICh3ID4gdmlld193KSB7XG5cdFx0XHRcdFx0dyA9IHZpZXdfdztcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUud2lkdGggPSBgJHt3fXB4YDtcblx0XHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0XHRsZWZ0ID0gcmlnaHQgLSB3O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyaWdodCA9IGxlZnQgKyB3O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgcmVsYXRpdmVfb2Zmc2V0ID0gMDtcblx0XHRcdFx0aWYgKGxlZnQgPCBzY3JvbGwpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSBzY3JvbGwgLSBsZWZ0O1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJpZ2h0ID4gc2Nyb2xsICsgdmlld193KSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVfb2Zmc2V0ID0gLShyaWdodCAtIHNjcm9sbCAtIHZpZXdfdyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IC1yZWxhdGl2ZV9vZmZzZXQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlbGF0aXZlX29mZnNldCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZVthbmNob3JdID0gYCR7bmwgKyByZWxhdGl2ZV9vZmZzZXR9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGF1dG9Db21wbGV0ZShuZXdWYWwsIGFjdFZhbCwgbm9ybWFsaXplZEFjdFZhbCwga2V5LCBkb250TW9kaWZ5KSB7XG5cdFx0XHRpZiAobmV3VmFsID09PSBhY3RWYWwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9udE1vZGlmeSB8fCB0aGlzLmltZSB8fCAhdGhpcy5jYW5TZWxlY3QoKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB3ZSBjYW4ndCBzZWxlY3QgcHJvcGVybHkgb3IgYW4gSU1FIGNvbXBvc2l0aW9uIGlzIG9uZ29pbmcsIGF1dG9jb21wbGV0aW9uIHdvdWxkIGJlIGEgbWFqb3IgYW5ub3lhbmNlIHRvIHRoZSB1c2VyLlxuXHRcdFx0aWYgKG5ld1ZhbC5pbmRleE9mKGFjdFZhbCkpIHtcblx0XHRcdFx0Ly8gTWF5YmUgaXQnbGwgd29yayB3aXRoIHRoZSBub3JtYWxpemVkIHZhbHVlIChORkMpP1xuXHRcdFx0XHRpZiAobm9ybWFsaXplZEFjdFZhbCAmJiBuZXdWYWwuaW5kZXhPZihub3JtYWxpemVkQWN0VmFsKSA9PT0gMCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmxhc3RSZWFsSW5wdXQgPT09IGFjdFZhbCkge1xuXHRcdFx0XHRcdFx0dGhpcy5sYXN0UmVhbElucHV0ID0gbm9ybWFsaXplZEFjdFZhbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWN0VmFsID0gbm9ybWFsaXplZEFjdFZhbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIEFjdHVhbCBpbnB1dCBpcyBhIHByZWZpeCBvZiB0aGUgbmV3IHRleHQuIEZpbGwgaW4gbmV3IHRleHQsIHNlbGVjdGluZyB0aGUgbmV3bHkgYWRkZWQgc3VmZml4XG5cdFx0XHQvLyBzdWNoIHRoYXQgaXQgY2FuIGJlIGVhc2lseSByZW1vdmVkIGJ5IHR5cGluZyBiYWNrc3BhY2UgaWYgdGhlIHN1Z2dlc3Rpb24gaXMgdW53YW50ZWQuXG5cdFx0XHR0aGlzLnRleHQuZm9jdXMoKTtcblx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IG5ld1ZhbCArIGtleTtcblx0XHRcdHRoaXMuc2V0U2VsZWN0aW9uKGFjdFZhbC5sZW5ndGgsIG5ld1ZhbC5sZW5ndGgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGNhblNlbGVjdCgpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHRoaXMudGV4dC5zZXRTZWxlY3Rpb25SYW5nZSB8fFxuXHRcdFx0XHR0aGlzLnRleHQuY3JlYXRlVGV4dFJhbmdlIHx8XG5cdFx0XHRcdCh0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRleHQuc2VsZWN0aW9uRW5kICE9PSB1bmRlZmluZWQpXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRzZXRTZWxlY3Rpb24oZnJvbSwgdG8pIHtcblx0XHRcdC8vIHRoaXMudGV4dCBtdXN0IGJlIGZvY3VzZWQgKGF0IGxlYXN0IG9uIElFKVxuXHRcdFx0aWYgKCF0aGlzLnRleHQudmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudGV4dC5zZXRTZWxlY3Rpb25SYW5nZSkge1xuXHRcdFx0XHQvLyBlLmcuIGtodG1sXG5cdFx0XHRcdHRoaXMudGV4dC5zZXRTZWxlY3Rpb25SYW5nZShmcm9tLCB0byk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmIChmcm9tID4gdGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvbkVuZCA9IHRvO1xuXHRcdFx0XHRcdHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCA9IGZyb207XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ID0gZnJvbTtcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uRW5kID0gdG87XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy50ZXh0LmNyZWF0ZVRleHRSYW5nZSkge1xuXHRcdFx0XHQvLyBJRVxuXHRcdFx0XHRjb25zdCBuZXdfc2VsZWN0aW9uID0gdGhpcy50ZXh0LmNyZWF0ZVRleHRSYW5nZSgpO1xuXHRcdFx0XHRuZXdfc2VsZWN0aW9uLm1vdmUoJ2NoYXJhY3RlcicsIGZyb20pO1xuXHRcdFx0XHRuZXdfc2VsZWN0aW9uLm1vdmVFbmQoJ2NoYXJhY3RlcicsIHRvIC0gZnJvbSk7XG5cdFx0XHRcdG5ld19zZWxlY3Rpb24uc2VsZWN0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGdldFNlbGVjdGlvbigpIHtcblx0XHRcdGxldCBmcm9tID0gMDtcblx0XHRcdC8vIHRoaXMudGV4dCBtdXN0IGJlIGZvY3VzZWQgKGF0IGxlYXN0IG9uIElFKVxuXHRcdFx0bGV0IHRvID0gMDtcblx0XHRcdGlmICghdGhpcy50ZXh0LnZhbHVlKSB7XG5cdFx0XHRcdC8vIE5vIHRleHQuXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGZyb20gPSB0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQ7XG5cdFx0XHRcdHRvID0gdGhpcy50ZXh0LnNlbGVjdGlvbkVuZDtcblx0XHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uICYmIGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSkge1xuXHRcdFx0XHQvLyBJRVxuXHRcdFx0XHRjb25zdCBybmcgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS5kdXBsaWNhdGUoKTtcblx0XHRcdFx0aWYgKHJuZy5wYXJlbnROb2RlKCkgPT09IHRoaXMudGV4dCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0ZXh0Um5nID0gdGhpcy50ZXh0LmNyZWF0ZVRleHRSYW5nZSgpO1xuXHRcdFx0XHRcdFx0dGV4dFJuZy5tb3ZlKCdjaGFyYWN0ZXInLCAwKTtcblx0XHRcdFx0XHRcdHRleHRSbmcuc2V0RW5kUG9pbnQoJ0VuZFRvRW5kJywgcm5nKTtcblx0XHRcdFx0XHRcdC8vIFdlJ3JlIGluIGEgc2luZ2xlLWxpbmUgaW5wdXQgYm94OiBubyBuZWVkIHRvIGNhcmUgYWJvdXQgSUUncyBzdHJhbmdlXG5cdFx0XHRcdFx0XHQvLyBoYW5kbGluZyBvZiBsaW5lIGVuZHNcblx0XHRcdFx0XHRcdHRvID0gdGV4dFJuZy50ZXh0Lmxlbmd0aDtcblx0XHRcdFx0XHRcdHRleHRSbmcuc2V0RW5kUG9pbnQoJ0VuZFRvU3RhcnQnLCBybmcpO1xuXHRcdFx0XHRcdFx0ZnJvbSA9IHRleHRSbmcudGV4dC5sZW5ndGg7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRmcm9tID0gdGhpcy50ZXh0LnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdHRvID0gZnJvbTsgLy8gQXQgZW5kIG9mIHRleHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN0YXJ0OiBmcm9tLFxuXHRcdFx0XHRlbmQ6IHRvLFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0c2F2ZVZpZXcoKSB7XG5cdFx0XHR0aGlzLmxhc3RTZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuXHRcdH1cblx0XHRwcm9jZXNzS2V5KGV2ZW50KSB7XG5cdFx0XHRsZXQgZGlyID0gMDtcblx0XHRcdHN3aXRjaCAodGhpcy5sYXN0S2V5KSB7XG5cdFx0XHRcdGNhc2UgVVA6XG5cdFx0XHRcdFx0ZGlyID0gLTE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRE9XTjpcblx0XHRcdFx0XHRkaXIgPSAxO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFBHVVA6XG5cdFx0XHRcdFx0ZGlyID0gLUhDLmxpc3RTaXplO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFBHRE9XTjpcblx0XHRcdFx0XHRkaXIgPSBIQy5saXN0U2l6ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBFU0M6XG5cdFx0XHRcdFx0Ly8gSW5oaWJpdCBkZWZhdWx0IGJlaGF2aW9yIChyZXZlcnQgdG8gbGFzdCByZWFsIGlucHV0IGluIEZGOiB3ZSBkbyB0aGF0IG91cnNlbHZlcylcblx0XHRcdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0Ly8gTGlzdCBpcyB2aXNpYmxlLCBzbyB0aGVyZSBhcmUgc3VnZ2VzdGlvbnNcblx0XHRcdFx0XHR0aGlzLmhpZ2hsaWdodFN1Z2dlc3Rpb24oZGlyKTtcblx0XHRcdFx0XHQvLyBLaWxsIHRoZSBldmVudCwgb3RoZXJ3aXNlIHNvbWUgYnJvd3NlcnMgKGUuZy4sIEZpcmVmb3gpIG1heSBhZGRpdGlvbmFsbHkgdHJlYXQgYW4gdXAtYXJyb3dcblx0XHRcdFx0XHQvLyBhcyBcInBsYWNlIHRoZSB0ZXh0IGN1cnNvciBhdCB0aGUgZnJvbnRcIiwgd2hpY2ggd2UgZG9uJ3Qgd2FudCBoZXJlLlxuXHRcdFx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHR0aGlzLmtleUNvdW50IDw9IDEgJiZcblx0XHRcdFx0XHQoIXRoaXMuY2FsbGJhY2tPYmogfHwgdGhpcy5jYWxsYmFja09iai5jYWxsc01hZGUgPT09IHRoaXMuY2FsbGJhY2tPYmoubm9mQ2FsbHMpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdC8vIElmIG5vIHN1Z2dlc3Rpb25zIGRpc3BsYXllZCwgZ2V0IHRoZW0sIHVubGVzcyB3ZSdyZSBhbHJlYWR5IGdldHRpbmcgdGhlbS5cblx0XHRcdFx0XHR0aGlzLnRleHRjaGFuZ2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGhpZ2hsaWdodFN1Z2dlc3Rpb24oZGlyKSB7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucyB8fCAhdGhpcy5saXN0IHx8IHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY3VyciA9IHRoaXMubGlzdC5zZWxlY3RlZEluZGV4O1xuXHRcdFx0bGV0IHRndCA9IC0xO1xuXHRcdFx0aWYgKGRpciA9PT0gMCkge1xuXHRcdFx0XHRpZiAoY3VyciA8IDAgfHwgY3VyciA+PSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGd0ID0gY3Vycjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRndCA9IGN1cnIgPCAwID8gMCA6IGN1cnIgKyBkaXI7XG5cdFx0XHRcdHRndCA9IHRndCA8IDAgPyAwIDogdGd0O1xuXHRcdFx0XHRpZiAodGd0ID49IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRcdHRndCA9IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0Z3QgIT09IGN1cnIgfHwgZGlyID09PSAwKSB7XG5cdFx0XHRcdGlmIChjdXJyID49IDAgJiYgY3VyciA8IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCAmJiBkaXIgIT09IDApIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1tjdXJyXS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW3RndF0uc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRcdGNvbnN0IHYgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0XHRjb25zdCBjb21wbGV0ZWQgPSB0aGlzLmF1dG9Db21wbGV0ZSh0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQsIHRoaXMubGFzdFJlYWxJbnB1dCwgbnVsbCwga2V5LCBmYWxzZSk7XG5cdFx0XHRcdGlmICghY29tcGxldGVkIHx8IHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dCA9PT0gdGhpcy5sYXN0UmVhbElucHV0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0ICsga2V5O1xuXHRcdFx0XHRcdGlmICh0aGlzLmNhblNlbGVjdCgpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldFNlbGVjdGlvbih0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQubGVuZ3RoLCB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQubGVuZ3RoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQ7XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBNaWdodCBiZSB3cm9uZyBpZiBmcm9tIGEgZGFiIGxpc3QuLi5cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zcmMgPSBIQy5leGlzdHNZZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJlc2V0S2V5U2VsZWN0aW9uKCkge1xuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMgfHwgIXRoaXMubGlzdCB8fCB0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGN1cnIgPSB0aGlzLmxpc3Quc2VsZWN0ZWRJbmRleDtcblx0XHRcdGlmIChjdXJyID49IDAgJiYgY3VyciA8IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1tjdXJyXS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRcdGNvbnN0IHYgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0XHQvLyBFU0MgaXMgaGFuZGxlZCBzdHJhbmdlbHkgYnkgc29tZSBicm93c2VycyAoZS5nLiwgRkYpOyBzb21laG93IGl0IHJlc2V0cyB0aGUgaW5wdXQgdmFsdWUgYmVmb3JlXG5cdFx0XHRcdC8vIG91ciBldmVudCBoYW5kbGVycyBldmVyIGdldCBhIGNoYW5jZSB0byBydW4uXG5cdFx0XHRcdGxldCByZXN1bHQgPSB2WzBdICE9PSB0aGlzLmxhc3RJbnB1dDtcblx0XHRcdFx0aWYgKHZbMF0gIT09IHRoaXMubGFzdFJlYWxJbnB1dCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHRoaXMubGFzdFJlYWxJbnB1dCArIGtleTtcblx0XHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gdGhpcy5sYXN0UmVhbElucHV0O1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuXHRcdC8vIFVzZXIgY29uZmlndXJhdGlvbnM6IERvIHRoaXMgaGVyZSwgY2FsbGVkIGZyb20gdGhlIG9ubG9hZCBoYW5kbGVyLCBzbyB0aGF0IHVzZXJzIGNhblxuXHRcdC8vIG92ZXJyaWRlIGl0IGVhc2lseSBpbiB0aGVpciBvd24gdXNlciBzY3JpcHQgZmlsZXMgYnkganVzdCBkZWNsYXJpbmcgdmFyaWFibGVzLlxuXHRcdGNvbnN0IGNvbmZpZyA9IHt9O1xuXHRcdEhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X2RvbnRfYWRkX3RvX3dhdGNobGlzdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdERvbnRBZGRUb1dhdGNobGlzdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5kb250X2FkZF90b193YXRjaGxpc3Rcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXREb250QWRkVG9XYXRjaGxpc3Rcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0O1xuXHRcdEhDLm5vX2F1dG9jb21taXQgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9ub19hdXRvY29tbWl0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0Tm9BdXRvQ29tbWl0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgJSAyXG5cdFx0XHRcdFx0XHQ/IHRydWVcblx0XHRcdFx0XHRcdDogSEMubm9fYXV0b2NvbW1pdCAvLyBPbiB0YWxrIG5hbWVzcGFjZSBkZWZhdWx0IGF1dG9jb21taXQgb2ZmXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0Tm9BdXRvQ29tbWl0XG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X25vX2F1dG9jb21taXQ7XG5cdFx0SEMuZGVsX25lZWRzX2RpZmYgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9kZWxfbmVlZHNfZGlmZiA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdERlbE5lZWRzRGlmZiA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5kZWxfbmVlZHNfZGlmZlxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdERlbE5lZWRzRGlmZlxuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9kZWxfbmVlZHNfZGlmZjtcblx0XHRIQy5zdWdnZXN0X2RlbGF5ID0gd2luZG93LmhvdGNhdF9zdWdnZXN0aW9uX2RlbGF5IHx8IGNvbmZpZy5Ib3RDYXRTdWdnZXN0aW9uRGVsYXkgfHwgSEMuc3VnZ2VzdF9kZWxheTtcblx0XHRIQy5lZGl0Ym94X3dpZHRoID0gd2luZG93LmhvdGNhdF9lZGl0Ym94X3dpZHRoIHx8IGNvbmZpZy5Ib3RDYXRFZGl0Qm94V2lkdGggfHwgSEMuZWRpdGJveF93aWR0aDtcblx0XHRIQy5zdWdnZXN0aW9ucyA9IHdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnMgfHwgY29uZmlnLkhvdENhdFN1Z2dlc3Rpb25zIHx8IEhDLnN1Z2dlc3Rpb25zO1xuXHRcdGlmICh0eXBlb2YgSEMuc3VnZ2VzdGlvbnMgIT09ICdzdHJpbmcnIHx8ICFzdWdnZXN0aW9uQ29uZmlnc1tIQy5zdWdnZXN0aW9uc10pIHtcblx0XHRcdEhDLnN1Z2dlc3Rpb25zID0gJ2NvbWJpbmVkJztcblx0XHR9XG5cdFx0SEMuZml4ZWRfc2VhcmNoID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRGaXhlZFN1Z2dlc3Rpb25zID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmZpeGVkX3NlYXJjaFxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdEZpeGVkU3VnZ2VzdGlvbnNcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQ7XG5cdFx0SEMuc2luZ2xlX21pbm9yID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfc2luZ2xlX2NoYW5nZXNfYXJlX21pbm9yID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLnNpbmdsZV9taW5vclxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3I7XG5cdFx0SEMuYmdfY2hhbmdlZCA9IHdpbmRvdy5ob3RjYXRfY2hhbmdlZF9iYWNrZ3JvdW5kIHx8IGNvbmZpZy5Ib3RDYXRDaGFuZ2VkQmFja2dyb3VuZCB8fCBIQy5iZ19jaGFuZ2VkO1xuXHRcdEhDLnVzZV91cF9kb3duID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfdXNlX2NhdGVnb3J5X2xpbmtzID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rcyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy51c2VfdXBfZG93blxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdFVzZUNhdGVnb3J5TGlua3Ncblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfdXNlX2NhdGVnb3J5X2xpbmtzO1xuXHRcdEhDLmxpc3RTaXplID0gd2luZG93LmhvdGNhdF9saXN0X3NpemUgfHwgY29uZmlnLkhvdENhdExpc3RTaXplIHx8IEhDLmxpc3RTaXplO1xuXHRcdEhDLmNoYW5nZVRhZyA9IGNvbmZpZy5Ib3RDYXRDaGFuZ2VUYWcgfHwgJyc7XG5cdFx0Ly8gVGhlIG5leHQgd2hvbGUgc2hlYmFuZyBpcyBuZWVkZWQsIGJlY2F1c2UgbWFudWFsIHRhZ3MgZ2V0IG5vdCBzdWJtaXR0ZWQgZXhjZXB0IG9mIHNhdmVcblx0XHRpZiAoSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRjb25zdCBlRm9ybSA9IGRvY3VtZW50LmVkaXRmb3JtO1xuXHRcdFx0Y29uc3QgY2F0UmVnRXhwID0gbmV3IFJlZ0V4cChgXlxcXFxbXFxcXFsoJHtIQy5jYXRlZ29yeV9yZWdleHB9KTpgKTtcblx0XHRcdGxldCBvbGRUeHQ7XG5cdFx0XHQvLyBSZXR1cm5zIHRydWUgaWYgbWlub3IgY2hhbmdlXG5cdFx0XHRjb25zdCBpc01pbm9yQ2hhbmdlID0gKCkgPT4ge1xuXHRcdFx0XHRsZXQgbmV3VHh0ID0gZUZvcm0ud3BUZXh0Ym94MTtcblx0XHRcdFx0aWYgKCFuZXdUeHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0bmV3VHh0ID0gbmV3VHh0LnZhbHVlO1xuXHRcdFx0XHRjb25zdCBvbGRMaW5lcyA9IG9sZFR4dC5tYXRjaCgvXi4qJC9nbSk7XG5cdFx0XHRcdGNvbnN0IG5ld0xpbmVzID0gbmV3VHh0Lm1hdGNoKC9eLiokL2dtKTtcblx0XHRcdFx0bGV0IGNBcnI7IC8vIGNoYW5nZXNcblx0XHRcdFx0Y29uc3QgZXhjZXB0ID0gKGFBcnIsIGJBcnIpID0+IHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBbXTtcblx0XHRcdFx0XHRsZXQgbEFycjsgLy8gc21hbGxlclxuXHRcdFx0XHRcdGxldCAvLyBsYXJnZXJcblx0XHRcdFx0XHRcdHNBcnI7XG5cdFx0XHRcdFx0aWYgKGFBcnIubGVuZ3RoIDwgYkFyci5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGxBcnIgPSBiQXJyO1xuXHRcdFx0XHRcdFx0c0FyciA9IGFBcnI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxBcnIgPSBhQXJyO1xuXHRcdFx0XHRcdFx0c0FyciA9IGJBcnI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAoY29uc3QgaXRlbSBvZiBsQXJyKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBpbmQgPSBzQXJyLmluZGV4T2YoaXRlbSk7XG5cdFx0XHRcdFx0XHRpZiAoaW5kID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBpdGVtO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c0Fyci5zcGxpY2UoaW5kLCAxKTsgLy8gZG9uJ3QgY2hlY2sgdGhpcyBpdGVtIGFnYWluXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCAuLi5zQXJyXTtcblx0XHRcdFx0fTtcblx0XHRcdFx0Y0FyciA9IGV4Y2VwdChvbGRMaW5lcywgbmV3TGluZXMpO1xuXHRcdFx0XHRpZiAoY0Fyci5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y0FyciA9IGNBcnIuZmlsdGVyKChjKSA9PiB7XG5cdFx0XHRcdFx0XHRjID0gYy50cmltKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYyAmJiAhY2F0UmVnRXhwLnRlc3QoYyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNBcnIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0b2xkVHh0ID0gbmV3VHh0O1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjb25mLndnQWN0aW9uID09PSAnc3VibWl0JyAmJlxuXHRcdFx0XHRjb25mLndnQXJ0aWNsZUlkICYmXG5cdFx0XHRcdGVGb3JtICYmXG5cdFx0XHRcdGVGb3JtLndwU3VtbWFyeSAmJlxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lraURpZmYnKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNvbnN0IHN1bSA9IGVGb3JtLndwU3VtbWFyeTtcblx0XHRcdFx0Y29uc3Qgc3VtQSA9IGVGb3JtLndwQXV0b1N1bW1hcnk7XG5cdFx0XHRcdGlmIChzdW0udmFsdWUgJiYgc3VtQS52YWx1ZSA9PT0gSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRcdFx0Ly8gSG90Q2F0IGRpZmZcblx0XHRcdFx0XHQvLyBNRDUgaGFzaCBvZiB0aGUgZW1wdHkgc3RyaW5nLCBhcyBIb3RDYXQgZWRpdCBpcyBiYXNlZCBvbiBlbXB0eSBzdW1cblx0XHRcdFx0XHRzdW1BLnZhbHVlID0gc3VtQS52YWx1ZS5yZXBsYWNlKEhDLmNoYW5nZVRhZywgJ2Q0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlJyk7XG5cdFx0XHRcdFx0Ly8gQXR0ciBjcmVhdGlvbiBhbmQgZXZlbnQgaGFuZGxpbmcgaXMgbm90IHNhbWUgaW4gYWxsIChvbGQpIGJyb3dzZXJzIHNvIHVzZSAkXG5cdFx0XHRcdFx0Y29uc3QgJGN0ID0gJCgnPGlucHV0PicpXG5cdFx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHRcdFx0XHRuYW1lOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQudmFsKEhDLmNoYW5nZVRhZyk7XG5cdFx0XHRcdFx0JChlRm9ybSkuYXBwZW5kKCRjdCk7XG5cdFx0XHRcdFx0b2xkVHh0ID0gZUZvcm0ud3BUZXh0Ym94MS52YWx1ZTtcblx0XHRcdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwU2F2ZV0nKS5vbmUoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCRjdC52YWwoKSkge1xuXHRcdFx0XHRcdFx0XHRzdW0udmFsdWUgPSBzdW0udmFsdWUucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpIHx8IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpLFxuXHRcdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29uc3QgcmVtb3ZlQ2hhbmdlVGFnID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0JChlRm9ybS53cFRleHRib3gxKVxuXHRcdFx0XHRcdFx0XHQuYWRkKHN1bSlcblx0XHRcdFx0XHRcdFx0Lm9uZSgnaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaXNNaW5vckNoYW5nZSgpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbW92ZUNoYW5nZVRhZygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGN0LnZhbCgnJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZW1vdmVDaGFuZ2VUYWcoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBOdW1lcmljIGlucHV0LCBtYWtlIHN1cmUgd2UgaGF2ZSBhIG51bWVyaWMgdmFsdWVcblx0XHRIQy5saXN0U2l6ZSA9IE51bWJlci5wYXJzZUludChIQy5saXN0U2l6ZSwgMTApO1xuXHRcdGlmIChOdW1iZXIuaXNOYU4oSEMubGlzdFNpemUpIHx8IEhDLmxpc3RTaXplIDwgNSkge1xuXHRcdFx0SEMubGlzdFNpemUgPSA1O1xuXHRcdH1cblx0XHRIQy5saXN0U2l6ZSA9IE1hdGgubWluKEhDLmxpc3RTaXplLCAzMCk7IC8vIE1heCBzaXplXG5cdFx0Ly8gTG9jYWxpemUgc2VhcmNoIGVuZ2luZSBuYW1lc1xuXHRcdGZvciAoY29uc3QgW2tleSwgc3VnZ2VzdGlvbkNvbmZpZ10gb2YgT2JqZWN0LmVudHJpZXMoc3VnZ2VzdGlvbkNvbmZpZ3MpKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoa2V5ICYmIGdldE1lc3NhZ2UoYGVuZ2luZV9uYW1lcy0ke2tleX1gKSkge1xuXHRcdFx0XHRcdHN1Z2dlc3Rpb25Db25maWcubmFtZSA9IGdldE1lc3NhZ2UoYGVuZ2luZV9uYW1lcy0ke2tleX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBDYXRjaCBib3RoIG5hdGl2ZSBSVEwgYW5kIFwiZmFrZWRcIiBSVEwgdGhyb3VnaCBbW01lZGlhV2lraTpSdGwuanNdXVxuXHRcdGlzX3J0bCA9IGhhc0NsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ3J0bCcpO1xuXHRcdGlmICghaXNfcnRsKSB7XG5cdFx0XHRpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuXHRcdFx0XHQvLyBHZWNrbyBldGMuXG5cdFx0XHRcdGlzX3J0bCA9IGRvY3VtZW50LmRlZmF1bHRWaWV3XG5cdFx0XHRcdFx0LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCBudWxsKVxuXHRcdFx0XHRcdC5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKTtcblx0XHRcdH0gZWxzZSBpZiAoJCgnYm9keScpWzBdLmN1cnJlbnRTdHlsZSkge1xuXHRcdFx0XHQvLyBJRSwgaGFzIHN1YnRsZSBkaWZmZXJlbmNlcyB0byBnZXRDb21wdXRlZFN0eWxlXG5cdFx0XHRcdGlzX3J0bCA9ICQoJ2JvZHknKVswXS5jdXJyZW50U3R5bGUuZGlyZWN0aW9uO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gTm90IGV4YWN0bHkgcmlnaHQsIGJ1dCBiZXN0IGVmZm9ydFxuXHRcdFx0XHRpc19ydGwgPSAkKCdib2R5JylbMF0uc3R5bGUuZGlyZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0aXNfcnRsID0gaXNfcnRsID09PSAncnRsJztcblx0XHR9XG5cdH07XG5cdGNvbnN0IGNhbl9lZGl0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2EtZWRpdCcpICE9PSBudWxsO1xuXHR9O1xuXHQvLyBMZWdhY3kgc3R1ZmZcblx0Y29uc3QgY2xvc2VGb3JtID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIENsb3NlIGFsbCBvcGVuIGVkaXRvcnMgd2l0aG91dCByZWRpcmVjdCByZXNvbHV0aW9uIGFuZCBvdGhlciBhc3luY2hyb25vdXMgc3R1ZmYuXG5cdFx0Zm9yIChjb25zdCBlZGl0IG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0LnN0YXRlID09PSBPUEVOKSB7XG5cdFx0XHRcdGVkaXQuY2FuY2VsKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGVkaXQuc3RhdGUgPT09IENIQU5HRV9QRU5ESU5HKSB7XG5cdFx0XHRcdGVkaXQuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGVkaXQudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRsZXQga2V5ID0gbnVsbDtcblx0XHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRbLCBrZXldID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdiA9IHZhbHVlWzBdLnJlcGxhY2UoL18vZywgJyAnKS50cmltKCk7XG5cdFx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGVkaXQuY2FuY2VsKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50Q2F0ZWdvcnkgPSB2O1xuXHRcdFx0XHRcdGVkaXQuY3VycmVudEtleSA9IGtleTtcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRFeGlzdHMgPSB0aGlzLmlucHV0RXhpc3RzO1xuXHRcdFx0XHRcdGVkaXQuY2xvc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3Qgc2V0dXBfdXBsb2FkID0gKCkgPT4ge1xuXHRcdG9uVXBsb2FkID0gdHJ1ZTtcblx0XHQvLyBBZGQgYW4gZW1wdHkgY2F0ZWdvcnkgYmFyIGF0IHRoZSBlbmQgb2YgdGhlIHRhYmxlIGNvbnRhaW5pbmcgdGhlIGRlc2NyaXB0aW9uLCBhbmQgY2hhbmdlIHRoZSBvbnN1Ym1pdCBoYW5kbGVyLlxuXHRcdGxldCBpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1odG1sZm9ybS1kZXNjcmlwdGlvbicpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BEZXN0RmlsZV0nKTtcblx0XHRpZiAoIWlwKSB7XG5cdFx0XHRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BEZXN0RmlsZV0nKTtcblx0XHRcdHdoaWxlIChpcCAmJiBpcC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAndGFibGUnKSB7XG5cdFx0XHRcdGlwID0gaXAucGFyZW50Tm9kZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFpcCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZXVwbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BGb3JSZVVwbG9hZF0nKTtcblx0XHRjb25zdCBkZXN0RmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BEZXN0RmlsZV0nKTtcblx0XHRpZiAoKHJldXBsb2FkICYmICEhcmV1cGxvYWQudmFsdWUpIHx8IChkZXN0RmlsZSAmJiAoZGVzdEZpbGUuZGlzYWJsZWQgfHwgZGVzdEZpbGUucmVhZE9ubHkpKSkge1xuXHRcdFx0cmV0dXJuOyAvLyByZS11cGxvYWQgZm9ybS4uLlxuXHRcdH1cblx0XHQvLyBJbnNlcnQgYSB0YWJsZSByb3cgd2l0aCB0d28gZmllbGRzIChsYWJlbCBhbmQgZW1wdHkgY2F0ZWdvcnkgYmFyKVxuXHRcdGNvbnN0IGxhYmVsQ2VsbCA9IG1ha2UoJ3RkJyk7XG5cdFx0Y29uc3QgbGluZUNlbGwgPSBtYWtlKCd0ZCcpO1xuXHRcdC8vIENyZWF0ZSB0aGUgY2F0ZWdvcnkgbGluZVxuXHRcdGNhdExpbmUgPSBtYWtlKCdkaXYnKTtcblx0XHRjYXRMaW5lLmNsYXNzTmFtZSA9ICdjYXRsaW5rcyc7XG5cdFx0Y2F0TGluZS5pZCA9ICdjYXRsaW5rcyc7XG5cdFx0Y2F0TGluZS5zdHlsZS50ZXh0QWxpZ24gPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdC8vIFdlJ2xsIGJlIGluc2lkZSBhIHRhYmxlIHJvdy4gTWFrZSBzdXJlIHRoYXQgd2UgZG9uJ3QgaGF2ZSBtYXJnaW5zIG9yIHN0cmFuZ2UgYm9yZGVycy5cblx0XHRjYXRMaW5lLnN0eWxlLm1hcmdpbiA9ICcwJztcblx0XHRjYXRMaW5lLnN0eWxlLmJvcmRlciA9ICdub25lJztcblx0XHRsaW5lQ2VsbC5hcHBlbmQoY2F0TGluZSk7XG5cdFx0Ly8gQ3JlYXRlIHRoZSBsYWJlbFxuXHRcdGNvbnN0IGxhYmVsID0gbnVsbDtcblx0XHRpZiAobGFiZWwpIHtcblx0XHRcdGxhYmVsQ2VsbC5pZCA9ICdob3RjYXRMYWJlbFRyYW5zbGF0ZWQnO1xuXHRcdFx0bGFiZWxDZWxsLmFwcGVuZChsYWJlbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxhYmVsQ2VsbC5pZCA9ICdob3RjYXRMYWJlbCc7XG5cdFx0XHRsYWJlbENlbGwuYXBwZW5kKG1ha2UoZ2V0TWVzc2FnZSgnY2F0ZWdvcmllcycpLCB0cnVlKSk7XG5cdFx0fVxuXHRcdGxhYmVsQ2VsbC5jbGFzc05hbWUgPSAnbXctbGFiZWwnO1xuXHRcdGxhYmVsQ2VsbC5zdHlsZS50ZXh0QWxpZ24gPSAncmlnaHQnO1xuXHRcdGxhYmVsQ2VsbC5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ21pZGRsZSc7XG5cdFx0Ly8gQ2hhbmdlIHRoZSBvbnN1Ym1pdCBoYW5kbGVyXG5cdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGxvYWQnKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctdXBsb2FkLWZvcm0nKTtcblx0XHRpZiAoZm9ybSkge1xuXHRcdFx0Y29uc3QgbmV3Um93ID0gaXAuaW5zZXJ0Um93KC0xKTtcblx0XHRcdG5ld1Jvdy5hcHBlbmQobGFiZWxDZWxsKTtcblx0XHRcdG5ld1Jvdy5hcHBlbmQobGluZUNlbGwpO1xuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAob2xkU3VibWl0LCAuLi5hcmdzKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBkb19zdWJtaXQgPSB0cnVlO1xuXHRcdFx0XHRcdGlmIChvbGRTdWJtaXQpIHtcblx0XHRcdFx0XHRcdGlmICh0eXBlb2Ygb2xkU3VibWl0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuXHRcdFx0XHRcdFx0XHRkb19zdWJtaXQgPSB3aW5kb3cuZXZhbChvbGRTdWJtaXQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChvbGRTdWJtaXQgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuXHRcdFx0XHRcdFx0XHRkb19zdWJtaXQgPSBvbGRTdWJtaXQuYXBwbHkoZm9ybSwgW29sZFN1Ym1pdCwgLi4uYXJnc10pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWRvX3N1Ym1pdCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbG9zZUZvcm0oKTtcblx0XHRcdFx0XHQvLyBDb3B5IHRoZSBjYXRlZ29yaWVzXG5cdFx0XHRcdFx0Y29uc3QgZWIgPVxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT13cFVwbG9hZERlc2NyaXB0aW9uXScpIHx8XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BEZXNjJyk7XG5cdFx0XHRcdFx0bGV0IGFkZGVkT25lID0gZmFsc2U7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdFx0Y29uc3QgdCA9IGVkaXRvci5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdFx0XHRpZiAoIXQpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zdCBrZXkgPSBlZGl0b3IuY3VycmVudEtleTtcblx0XHRcdFx0XHRcdGNvbnN0IG5ld19jYXQgPSBgW1ske0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0fSR7a2V5ID8gYHwke2tleX1gIDogJyd9XV1gO1xuXHRcdFx0XHRcdFx0Ly8gT25seSBhZGQgaWYgbm90IGFscmVhZHkgcHJlc2VudFxuXHRcdFx0XHRcdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKCc8bm8nLmNvbmNhdCgnd2lraT4nLCAnKFxcXFxzfFxcXFxTKSo/PC9ubycsICd3aWtpJywgJz4nKSwgJ2cnKTtcblx0XHRcdFx0XHRcdGNvbnN0IF9jbGVhbmVkVGV4dCA9IGViLnZhbHVlLnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCAnJykucmVwbGFjZShub3dpa2lSZWdleCk7XG5cdFx0XHRcdFx0XHRpZiAoIWZpbmRfY2F0ZWdvcnkoX2NsZWFuZWRUZXh0LCB0LCB0cnVlKSkge1xuXHRcdFx0XHRcdFx0XHRlYi52YWx1ZSArPSBgXFxuJHtuZXdfY2F0fWA7XG5cdFx0XHRcdFx0XHRcdGFkZGVkT25lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGFkZGVkT25lKSB7XG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgXCJzdWJzdDp1bmNcIiBhZGRlZCBieSBGbGluZm8gaWYgaXQgZGlkbid0IGZpbmQgY2F0ZWdvcmllc1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCd7eyQnLmNvbmNhdCgnc3Vic3Q6JykuY29uY2F0KCd1bmN9fScpLCAnZycpO1xuXHRcdFx0XHRcdFx0ZWIudmFsdWUgPSBlYi52YWx1ZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9KShmb3JtLm9uc3VibWl0KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblx0bGV0IGNsZWFuZWRUZXh0ID0gbnVsbDtcblx0Y29uc3QgaXNPblBhZ2UgPSAoe2ZpcnN0Q2hpbGR9KSA9PiB7XG5cdFx0aWYgKGZpcnN0Q2hpbGQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IGNhdFRpdGxlID0gdGl0bGUoZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG5cdFx0aWYgKCFjYXRUaXRsZSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhdFRpdGxlID0gY2F0VGl0bGUuc2xpY2UoY2F0VGl0bGUuaW5kZXhPZignOicpICsgMSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdGlmIChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QoY2F0VGl0bGUpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgcmVzdWx0ID0ge1xuXHRcdFx0dGl0bGU6IGNhdFRpdGxlLFxuXHRcdFx0bWF0Y2g6IFsnJywgJycsICcnXSxcblx0XHR9O1xuXHRcdGlmIChwYWdlVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0aWYgKGNsZWFuZWRUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsICcoXFxcXHN8XFxcXFMpKj88L25vJywgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdFx0Y2xlYW5lZFRleHQgPSBwYWdlVGV4dC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgJycpLnJlcGxhY2Uobm93aWtpUmVnZXgsICcnKTtcblx0XHR9XG5cdFx0cmVzdWx0Lm1hdGNoID0gZmluZF9jYXRlZ29yeShjbGVhbmVkVGV4dCwgY2F0VGl0bGUsIHRydWUpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdGxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuXHRsZXQgc2V0dXBUaW1lb3V0ID0gbnVsbDtcblx0Y29uc3QgZmluZEJ5Q2xhc3MgPSAoc2NvcGUsIHRhZywgY2xhc3NOYW1lKSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gJChzY29wZSkuZmluZChgJHt0YWd9LiR7Y2xhc3NOYW1lfWApO1xuXHRcdHJldHVybiByZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA+IDAgPyByZXN1bHRbMF0gOiBudWxsO1xuXHR9O1xuXHRjb25zdCBzZXR1cCA9IChhZGRpdGlvbmFsV29yaykgPT4ge1xuXHRcdGlmIChpbml0aWFsaXplZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbml0aWFsaXplZCA9IHRydWU7XG5cdFx0aWYgKHNldHVwVGltZW91dCkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dChzZXR1cFRpbWVvdXQpO1xuXHRcdFx0c2V0dXBUaW1lb3V0ID0gbnVsbDtcblx0XHR9XG5cdFx0Ly8gRmluZCB0aGUgY2F0ZWdvcnkgYmFyLCBvciBjcmVhdGUgYW4gZW1wdHkgb25lIGlmIHRoZXJlIGlzbid0IG9uZS4gVGhlbiBhZGQgLS8rLSBsaW5rcyBhZnRlclxuXHRcdC8vIGVhY2ggY2F0ZWdvcnksIGFuZCBhZGQgdGhlICsgbGluay5cblx0XHRjYXRMaW5lIHx8PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctbm9ybWFsLWNhdGxpbmtzJyk7IC8vIFNwZWNpYWw6VXBsb2FkXG5cdFx0Y29uc3QgaGlkZGVuQ2F0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1oaWRkZW4tY2F0bGlua3MnKTtcblx0XHRpZiAoIWNhdExpbmUpIHtcblx0XHRcdGxldCBmb290ZXIgPSBudWxsO1xuXHRcdFx0aWYgKCFoaWRkZW5DYXRzKSB7XG5cdFx0XHRcdGZvb3RlciA9IGZpbmRCeUNsYXNzKGRvY3VtZW50LCAnZGl2JywgJ3ByaW50Zm9vdGVyJyk7XG5cdFx0XHRcdGlmICghZm9vdGVyKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IC8vIERvbid0IGtub3cgd2hlcmUgdG8gaW5zZXJ0IHRoZSBjYXRlZ29yeSBsaW5lXG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lID0gbWFrZSgnZGl2Jyk7XG5cdFx0XHRjYXRMaW5lLmlkID0gJ213LW5vcm1hbC1jYXRsaW5rcyc7XG5cdFx0XHRjYXRMaW5lLnN0eWxlLnRleHRBbGlnbiA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0XHQvLyBBZGQgYSBsYWJlbFxuXHRcdFx0Y29uc3QgbGFiZWwgPSBtYWtlKCdhJyk7XG5cdFx0XHRsYWJlbC5ocmVmID0gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJ1NwZWNpYWw6Q2F0ZWdvcmllcycpO1xuXHRcdFx0bGFiZWwudGl0bGUgPSBnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyk7XG5cdFx0XHRsYWJlbC5hcHBlbmQobWFrZShnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyksIHRydWUpKTtcblx0XHRcdGNhdExpbmUuYXBwZW5kKGxhYmVsKTtcblx0XHRcdGNhdExpbmUuYXBwZW5kKG1ha2UoJzonLCB0cnVlKSk7XG5cdFx0XHQvLyBJbnNlcnQgdGhlIG5ldyBjYXRlZ29yeSBsaW5lXG5cdFx0XHRsZXQgY29udGFpbmVyID0gaGlkZGVuQ2F0cyA/IGhpZGRlbkNhdHMucGFyZW50Tm9kZSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRsaW5rcycpO1xuXHRcdFx0aWYgKCFjb250YWluZXIpIHtcblx0XHRcdFx0Y29udGFpbmVyID0gbWFrZSgnZGl2Jyk7XG5cdFx0XHRcdGNvbnRhaW5lci5pZCA9ICdjYXRsaW5rcyc7XG5cdFx0XHRcdGZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb250YWluZXIsIGZvb3Rlci5uZXh0U2libGluZyk7XG5cdFx0XHR9XG5cdFx0XHRjb250YWluZXIuY2xhc3NOYW1lID0gJ2NhdGxpbmtzIG5vcHJpbnQnO1xuXHRcdFx0Y29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdGlmIChoaWRkZW5DYXRzKSB7XG5cdFx0XHRcdGhpZGRlbkNhdHMuYmVmb3JlKGNhdExpbmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZChjYXRMaW5lKTtcblx0XHRcdH1cblx0XHR9IC8vIGVuZCBpZiBjYXRMaW5lIGV4aXN0c1xuXHRcdGlmIChpc19ydGwpIHtcblx0XHRcdGNhdExpbmUuZGlyID0gJ3J0bCc7XG5cdFx0fVxuXHRcdC8vIENyZWF0ZSBlZGl0b3JzIGZvciBhbGwgZXhpc3RpbmcgY2F0ZWdvcmllc1xuXHRcdGNvbnN0IGNyZWF0ZUVkaXRvcnMgPSAobGluZSwgaXNfaGlkZGVuKSA9PiB7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGxldCBjYXRzID0gbGluZS5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuXHRcdFx0aWYgKGNhdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRuZXdET00gPSB0cnVlO1xuXHRcdFx0XHRsaW5lID0gY2F0c1swXS5wYXJlbnROb2RlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2F0cyA9IGxpbmUucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQ29weSBjYXRzLCBvdGhlcndpc2UgaXQnbGwgYWxzbyBtYWdpY2FsbHkgY29udGFpbiBvdXIgYWRkZWQgc3BhbnMgYXMgaXQgaXMgYSBsaXZlIGNvbGxlY3Rpb24hXG5cdFx0XHRjb25zdCBjb3B5Q2F0cyA9IEFycmF5LmZyb20oe1xuXHRcdFx0XHRsZW5ndGg6IGNhdHMubGVuZ3RoLFxuXHRcdFx0fSk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2F0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb3B5Q2F0c1tpXSA9IGNhdHNbaV07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY29weUNhdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgdGVzdCA9IGlzT25QYWdlKGNvcHlDYXRzW2ldKTtcblx0XHRcdFx0aWYgKHRlc3QgIT09IG51bGwgJiYgdGVzdC5tYXRjaCAhPT0gbnVsbCAmJiBsaW5lKSB7XG5cdFx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKGxpbmUsIGNvcHlDYXRzW2ldLCB0ZXN0LnRpdGxlLCB0ZXN0Lm1hdGNoWzJdLCBpc19oaWRkZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29weUNhdHMubGVuZ3RoID4gMCA/IGNvcHlDYXRzLmF0KC0xKSA6IG51bGw7XG5cdFx0fTtcblx0XHRjb25zdCBsYXN0U3BhbiA9IGNyZWF0ZUVkaXRvcnMoY2F0TGluZSwgZmFsc2UpO1xuXHRcdC8vIENyZWF0ZSBvbmUgdG8gYWRkIGEgbmV3IGNhdGVnb3J5XG5cdFx0bmV3IENhdGVnb3J5RWRpdG9yKG5ld0RPTSA/IGNhdExpbmUucXVlcnlTZWxlY3RvckFsbCgndWwnKVswXSA6IGNhdExpbmUsIG51bGwsIG51bGwsIGxhc3RTcGFuICE9PSBudWxsLCBmYWxzZSk7XG5cdFx0aWYgKCFvblVwbG9hZCkge1xuXHRcdFx0aWYgKHBhZ2VUZXh0ICE9PSBudWxsICYmIGhpZGRlbkNhdHMpIHtcblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdGhpZGRlbkNhdHMuZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3JlYXRlRWRpdG9ycyhoaWRkZW5DYXRzLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdC8vIEFuZCBmaW5hbGx5IGFkZCB0aGUgXCJtdWx0aS1tb2RlXCIgc3Bhbi4gKERvIHRoaXMgYXQgdGhlIGVuZCwgb3RoZXJ3aXNlIGl0IGVuZHMgdXAgaW4gdGhlIGxpc3QgYWJvdmUuKVxuXHRcdFx0Y29uc3QgZW5hYmxlTXVsdGkgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRlbmFibGVNdWx0aS5jbGFzc05hbWUgPSAnbm9wcmludCc7XG5cdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdGVuYWJsZU11bHRpLmRpciA9ICdydGwnO1xuXHRcdFx0fVxuXHRcdFx0Y2F0TGluZS5pbnNlcnRCZWZvcmUoZW5hYmxlTXVsdGksIGNhdExpbmUuZmlyc3RDaGlsZC5uZXh0U2libGluZyk7XG5cdFx0XHRlbmFibGVNdWx0aS5hcHBlbmQobWFrZSgnXFx1MDBBMCcsIHRydWUpKTsgLy8gbmJzcFxuXHRcdFx0bXVsdGlTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0ZW5hYmxlTXVsdGkuYXBwZW5kKG11bHRpU3Bhbik7XG5cdFx0XHRtdWx0aVNwYW4uaW5uZXJIVE1MID0gYCg8YT4ke0hDLmFkZG11bHRpfTwvYT4pYDtcblx0XHRcdGNvbnN0IFtsaW5rXSA9IG11bHRpU3Bhbi5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdHNldE11bHRpSW5wdXQoKTtcblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHRcdH0pO1xuXHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ211bHRpX3Rvb2x0aXAnKTtcblx0XHRcdGxpbmsuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXHRcdH1cblx0XHRjbGVhbmVkVGV4dCA9IG51bGw7XG5cdFx0aWYgKGFkZGl0aW9uYWxXb3JrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcblx0XHRcdGFkZGl0aW9uYWxXb3JrKCk7XG5cdFx0fVxuXHRcdG13Lmhvb2soJ2hvdGNhdC5yZWFkeScpLmZpcmUoKTsgLy8gRXhlY3V0ZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uc1xuXHRcdCQoJ2JvZHknKS50cmlnZ2VyKCdob3RjYXRTZXR1cENvbXBsZXRlZCcpO1xuXHR9O1xuXHRjb25zdCBjcmVhdGVDb21taXRGb3JtID0gKCkgPT4ge1xuXHRcdGlmIChjb21taXRGb3JtKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGZvcm1Db250YWluZXIgPSBtYWtlKCdkaXYnKTtcblx0XHRmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZChmb3JtQ29udGFpbmVyKTtcblx0XHRmb3JtQ29udGFpbmVyLmlubmVySFRNTCA9IGA8Zm9ybSBpZD1cImhvdGNhdENvbW1pdEZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBhY3Rpb249XCIke1xuXHRcdFx0Y29uZi53Z1NjcmlwdFxuXHRcdH0/dGl0bGU9JHtlbmNvZGVVUklDb21wb25lbnQoXG5cdFx0XHRjb25mLndnUGFnZU5hbWVcblx0XHQpfSZhY3Rpb249c3VibWl0XCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BUZXh0Ym94MVwiPiR7YDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm1vZGVsXCIgdmFsdWU9XCIke2NvbmYud2dQYWdlQ29udGVudE1vZGVsfVwiPmB9PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybWF0XCIgdmFsdWU9XCJ0ZXh0L3gtd2lraVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwU3VtbWFyeVwiIHZhbHVlPVwiXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ3cE1pbm9yZWRpdFwiIHZhbHVlPVwiMVwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwid3BXYXRjaHRoaXNcIiB2YWx1ZT1cIjFcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEF1dG9TdW1tYXJ5XCIgdmFsdWU9XCJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRWRpdHRpbWVcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFN0YXJ0dGltZVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRGlmZlwiIHZhbHVlPVwid3BEaWZmXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwib2xkaWRcIiB2YWx1ZT1cIjBcIj48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJoY0NvbW1pdFwiIHZhbHVlPVwiaGNDb21taXRcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEVkaXRUb2tlblwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwVWx0aW1hdGVQYXJhbVwiIHZhbHVlPVwiMVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwQ2hhbmdlVGFnc1wiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCLihLPwnZKy4pml8J2TivCdk4PwnZK+8J2SuOKEtPCdkrnihK9cIiBuYW1lPVwid3BVbmljb2RlQ2hlY2tcIj48L2Zvcm0+YDtcblx0XHRjb21taXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdGNhdENvbW1pdEZvcm0nKTtcblx0fTtcblx0Y29uc3QgZ2V0UGFnZSA9ICgpID0+IHtcblx0XHQvLyBXZSBrbm93IHdlIGhhdmUgYW4gYXJ0aWNsZSBoZXJlLlxuXHRcdGlmIChjb25mLndnQXJ0aWNsZUlkKSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cmF3Y29udGludWU6ICcnLFxuXHRcdFx0XHR0aXRsZXM6IGNvbmYud2dQYWdlTmFtZSxcblx0XHRcdFx0cHJvcDogWydpbmZvJywgJ3JldmlzaW9ucyddLFxuXHRcdFx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnLCAnaWRzJ10sXG5cdFx0XHRcdHJ2bGltaXQ6ICcxJyxcblx0XHRcdFx0cnZzdGFydGlkOiBjb25mLndnQ3VyUmV2aXNpb25JZCxcblx0XHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0XHRtZXRhOiBbJ3NpdGVpbmZvJ10sXG5cdFx0XHR9O1xuXHRcdFx0SEMuc3RhcnQgPSAoZGF0YSkgPT4ge1xuXHRcdFx0XHRzZXRQYWdlKGRhdGEpO1xuXHRcdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHRcdH07XG5cdFx0XHRhcGkuZ2V0KHBhcmFtcykudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRIQy5zdGFydChkYXRhKTtcblx0XHRcdH0pO1xuXHRcdFx0c2V0dXBUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdFx0fSwgNDAwMCk7IC8vIDQgc2VjLCBqdXN0IGluIGNhc2UgZ2V0dGluZyB0aGUgd2lraXRleHQgdGFrZXMgbG9uZ2VyLlxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEb2Vzbid0IGV4aXN0IHlldC4gRGlzYWJsZSBvbiBub24tZXhpc3RpbmcgVXNlciBwYWdlcy5cblx0XHRcdGlmIChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAyKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHBhZ2VUZXh0ID0gJyc7XG5cdFx0XHRwYWdlVGltZSA9IG51bGw7XG5cdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHNldFN0YXRlID0gKHN0YXRlKSA9PiB7XG5cdFx0Y29uc3QgY2F0cyA9IHN0YXRlLnNwbGl0KCdcXG4nKTtcblx0XHRpZiAoY2F0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAoaW5pdGlhbGl6ZWQgJiYgZWRpdG9ycy5sZW5ndGggPT09IDEgJiYgZWRpdG9yc1swXS5pc0FkZENhdGVnb3J5KSB7XG5cdFx0XHQvLyBJbnNlcnQgbmV3IHNwYW5zIGFuZCBjcmVhdGUgbmV3IGVkaXRvcnMgZm9yIHRoZW0uXG5cdFx0XHRjb25zdCBuZXdTcGFucyA9IFtdO1xuXHRcdFx0Y29uc3QgYmVmb3JlID0gZWRpdG9ycy5sZW5ndGggPT09IDEgPyBlZGl0b3JzWzBdLnNwYW4gOiBudWxsO1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2F0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoY2F0c1tpXS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgY2F0ID0gY2F0c1tpXS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSBjYXQubGVuZ3RoID4gMSA/IGNhdFsxXSA6IG51bGw7XG5cdFx0XHRcdFtjYXRdID0gY2F0O1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke2NhdH1gKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShjYXQsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGNhdDtcblx0XHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdGlmICghaSkge1xuXHRcdFx0XHRcdGNhdExpbmUuaW5zZXJ0QmVmb3JlKG1ha2UoJyAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRiZWZvcmUuYmVmb3JlKHNwYW4pO1xuXHRcdFx0XHRpZiAoYmVmb3JlICYmIGkgKyAxIDwgY2F0cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKG1ha2UoJyB8ICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5ld1NwYW5zW25ld1NwYW5zLmxlbmd0aF0gPSB7XG5cdFx0XHRcdFx0ZWxlbWVudDogc3Bhbixcblx0XHRcdFx0XHR0aXRsZTogY2F0LFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8vIEFuZCBjaGFuZ2UgdGhlIGxhc3Qgb25lLi4uXG5cdFx0XHRpZiAoYmVmb3JlKSB7XG5cdFx0XHRcdGJlZm9yZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShtYWtlKCcgfCAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBuZXdTcGFucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IoY2F0TGluZSwgbmV3U3BhbnNbaV0uZWxlbWVudCwgbmV3U3BhbnNbaV0udGl0bGUsIG5ld1NwYW5zW2ldLmtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcblx0XHRsZXQgcmVzdWx0ID0gbnVsbDtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRsZXQgdGV4dCA9IGVkaXRvci5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRjb25zdCBrZXkgPSBlZGl0b3IuY3VycmVudEtleTtcblx0XHRcdGlmICh0ZXh0ICYmIHRleHQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRpZiAoa2V5ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dGV4dCArPSBgfCR7a2V5fWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHRleHQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IGBcXG4ke3RleHR9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRjb25zdCByZWFsbHlfcnVuID0gKCkgPT4ge1xuXHRcdGluaXRpYWxpemUoKTtcblx0XHRpZiAoXG5cdFx0XHQhSEMudXBsb2FkX2Rpc2FibGVkICYmXG5cdFx0XHRjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAtMSAmJlxuXHRcdFx0Y29uZi53Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ1VwbG9hZCcgJiZcblx0XHRcdGNvbmYud2dVc2VyTmFtZVxuXHRcdCkge1xuXHRcdFx0c2V0dXBfdXBsb2FkKCk7XG5cdFx0XHRzZXR1cCgoKSA9PiB7XG5cdFx0XHRcdC8vIENoZWNrIGZvciBzdGF0ZSByZXN0b3JhdGlvbiBvbmNlIHRoZSBzZXR1cCBpcyBkb25lIG90aGVyd2lzZSwgYnV0IGJlZm9yZSBzaWduYWxsaW5nIHNldHVwIGNvbXBsZXRpb25cblx0XHRcdFx0aWYgKHdpbmRvdy5VcGxvYWRGb3JtICYmIFVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlKSB7XG5cdFx0XHRcdFx0VXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUgPSBzZXRTdGF0ZShVcGxvYWRGb3JtLnByZXZpb3VzX2hvdGNhdF9zdGF0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFjb25mLndnSXNBcnRpY2xlIHx8XG5cdFx0XHRcdGNvbmYud2dBY3Rpb24gIT09ICd2aWV3JyB8fFxuXHRcdFx0XHRwYXJhbSgnZGlmZicpICE9PSBudWxsIHx8XG5cdFx0XHRcdHBhcmFtKCdvbGRpZCcpICE9PSBudWxsIHx8XG5cdFx0XHRcdCFjYW5fZWRpdCgpIHx8XG5cdFx0XHRcdEhDLmRpc2FibGUoKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGdldFBhZ2UoKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJ1biA9ICgpID0+IHtcblx0XHRpZiAoSEMuc3RhcnRlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRIQy5zdGFydGVkID0gdHJ1ZTtcblx0XHRyZWFsbHlfcnVuKCk7XG5cdH07XG5cdC8vIEV4cG9ydCBsZWdhY3kgZnVuY3Rpb25zXG5cdHdpbmRvdy5ob3RjYXRfZ2V0X3N0YXRlID0gKCkgPT4ge1xuXHRcdHJldHVybiBnZXRTdGF0ZSgpO1xuXHR9O1xuXHR3aW5kb3cuaG90Y2F0X3NldF9zdGF0ZSA9IChzdGF0ZSkgPT4ge1xuXHRcdHJldHVybiBzZXRTdGF0ZShzdGF0ZSk7XG5cdH07XG5cdHdpbmRvdy5ob3RjYXRfY2xvc2VfZm9ybSA9ICgpID0+IHtcblx0XHRjbG9zZUZvcm0oKTtcblx0fTtcblx0SEMucnVuV2hlblJlYWR5ID0gKGNhbGxiYWNrKSA9PiB7XG5cdFx0Ly8gcnVuIHVzZXItcmVnaXN0ZXJlZCBjb2RlIG9uY2UgSG90Q2F0IGlzIGZ1bGx5IHNldCB1cCBhbmQgcmVhZHkuXG5cdFx0bXcuaG9vaygnaG90Y2F0LnJlYWR5JykuYWRkKGNhbGxiYWNrKTtcblx0fTtcblx0Ly8gUnVuIGFzIHNvb24gYXMgcG9zc2libGUuIFRoaXMgdmFyaWVzIGRlcGVuZGluZyBvbiBNZWRpYVdpa2kgdmVyc2lvbjtcblx0Ly8gd2luZG93J3MgJ2xvYWQnIGV2ZW50IGlzIGFsd2F5cyBzYWZlLCBidXQgdXN1YWxseSB3ZSBjYW4gZG8gYmV0dGVyIHRoYW4gdGhhdC5cblx0aWYgKGNvbmYud2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdVcGxvYWQnKSB7XG5cdFx0Ly8gUmVsb2FkIEhvdENhdCBhZnRlciAoVkUpIGVkaXRzIChidWcgVDEwMzI4NSlcblx0XHRtdy5ob29rKCdwb3N0RWRpdCcpLmFkZCgoKSA9PiB7XG5cdFx0XHQvLyBSZXNldCBIb3RDYXQgaW4gY2FzZSB0aGlzIGlzIGEgc29mdCByZWxvYWQgKGUuZy4gVmlzdWFsRWRpdG9yIGVkaXQpLCB1bmxlc3MgdGhlIGNhdGVnb3JpZXNcblx0XHRcdC8vIHdlcmUgbm90IHJlLXJlbmRlcmVkIGFuZCBvdXIgaW50ZXJmYWNlIGlzIHN0aWxsIHRoZXJlIChlLmcuIERpc2N1c3Npb25Ub29scyBlZGl0KVxuXHRcdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRsaW5rcyAuaG90Y2F0bGluaycpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNhdExpbmUgPSBudWxsO1xuXHRcdFx0ZWRpdG9ycyA9IFtdO1xuXHRcdFx0aW5pdGlhbGl6ZWQgPSBmYWxzZTtcblx0XHRcdEhDLnN0YXJ0ZWQgPSBmYWxzZTtcblx0XHRcdHJ1bigpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdlIGNhbiBzYWZlbHkgdHJpZ2dlciBqdXN0IGFmdGVyIHVzZXIgY29uZmlndXJhdGlvbiBpcyBsb2FkZWQuXG5cdC8vIFVzZSBhbHdheXMoKSBpbnN0ZWFkIG9mIHRoZW4oKSB0byBhbHNvIHN0YXJ0IEhvdENhdCBpZiB0aGUgdXNlciBtb2R1bGUgaGFzIHByb2JsZW1zLlxuXHQkKHJ1bik7XG59KSgpO1xuIiwgImNvbnN0IGdldE1lc3NhZ2UgPSAoa2V5OiBzdHJpbmcsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nID0+IHtcblx0a2V5ID0gYGhvdGNhdC0ke2tleX1gO1xuXHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0cmV0dXJuIG13Lm1lc3NhZ2Uoa2V5LCAuLi5hcmdzKS5wbGFpbigpO1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBob3RDYXRNZXNzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3JlbW92ZWQnOiAn5bey56e76ZmkW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdGVtcGxhdGVfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e1tbQ2F0ZWdvcnk6JDFdXX19Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2FkZGVkJzogJ+W3sua3u+WKoFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQvLyAkMiBpcyB0aGUgbmV3IGtleVxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfa2V5Y2hhbmdlJzogJ+W3suioree9rltbQ2F0ZWdvcnk6JDFdXeeahOaWsOaOkuW6j+Wtl++8mlwiJDJcIicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9ub3RGb3VuZCc6ICfliIbpoZ7igJwkMeKAneaykuacieaJvuWIsCcsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9leGlzdHMnOiAn5YiG6aGe4oCcJDHigJ3lt7LntpPlrZjlnKjvvIzmspLmnInmt7vliqDjgIInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVzb2x2ZWQnOiAn77yI6YeN5a6a5ZCRW1tDYXRlZ29yeTokMV1d5bey6JmV55CG77yJJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdW5jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e3VuY2F0ZWdvcml6ZWR9fScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gcHJlZml4IHRvIHRoZSBlZGl0IHN1bW1hcnkuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXByZWZpeCc6ICfkvb/nlKhbW0g6SE9UQ0FUfEhvdENhdF1dJyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBhcHBlbmQgdG8gdGhlIGVkaXQgc3VtbWFyeS4gTmFtZWQgJ3VzaW5nJyBmb3IgaGlzdG9yaWNhbCByZWFzb25zLiBJZiB5b3UgcHJlZmVyXG5cdFx0XHQvLyB0byBoYXZlIGEgbWFya2VyIGF0IHRoZSBmcm9udCwgdXNlIHByZWZpeCBhbmQgc2V0IHRoaXMgdG8gdGhlIGVtcHR5IHN0cmluZy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdXNpbmcnOiAnJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfY2hhbmdlJzogJyQx5YCL5YiG6aGeJyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5OyBpLmUuLCBhIGNhdGVnb3J5IHRoYXQgc2hvdWxkIG5vdCBjb250YWluXG5cdFx0XHQvLyBhbnkgaXRlbXMsIGJ1dCB0aGF0IGNvbnRhaW5zIGxpbmtzIHRvIG90aGVyIGNhdGVnb3JpZXMgd2hlcmUgc3R1ZmYgc2hvdWxkIGJlIGNhdGVnb3JpemVkLiBJZiB5b3UgZG9uJ3QgaGF2ZVxuXHRcdFx0Ly8gdGhhdCBjb25jZXB0IG9uIHlvdXIgd2lraSwgc2V0IGl0IHRvIGJsYW5rIHN0cmluZy4gVXNlIGJsYW5rcywgbm90IHVuZGVyc2NvcmVzLlxuXHRcdFx0J2hvdGNhdC1kaXNhbWJpZ19jYXRlZ29yeSc6ICcnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgKHNvZnQpIHJlZGlyZWN0IHRvIHNvbWUgb3RoZXIgY2F0ZWdvcnkgZGVmaW5lZCBieSBhIGxpbmtcblx0XHRcdC8vIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LiBJZiB5b3VyIHdpa2kgZG9lc24ndCBoYXZlIHNvZnQgY2F0ZWdvcnkgcmVkaXJlY3RzLCBzZXQgdGhpcyB0byBudWxsLlxuXHRcdFx0Ly8gSWYgYSBzb2Z0LXJlZGlyZWN0ZWQgY2F0ZWdvcnkgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBsaW5rIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LCBpdCdzIGNvbnNpZGVyZWRcblx0XHRcdC8vIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnkgaW5zdGVhZC5cblx0XHRcdCdob3RjYXQtcmVkaXJfY2F0ZWdvcnknOiAn5bey6YeN5a6a5ZCR55qE5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2VwYXJhdG9yJzogJzsgJyxcblx0XHRcdC8vICQxIGlzIHJlcGxhY2VkIGJ5IGEgbnVtYmVyLiBJZiB5b3VyIGxhbmd1YWdlIGhhcyBzZXZlcmFsIHBsdXJhbCBmb3JtcyAoYy5mLiBbWzplbndpa2k6RHVhbCAoZ3JhbW1hdGljYWwgZm9ybSldXSksXG5cdFx0XHQvLyB5b3UgY2FuIHNldCB0aGlzIHRvIGFuIGFycmF5IG9mIHN0cmluZ3Mgc3VpdGFibGUgZm9yIHBhc3NpbmcgdG8gbXcubGFuZ3VhZ2UuY29uZmlnUGx1cmFsKCkuXG5cdFx0XHQvLyBJZiB0aGF0IGZ1bmN0aW9uIGRvZXNuJ3QgZXhpc3QsIEhvdENhdCB3aWxsIHNpbXBseSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGxhc3Rcblx0XHRcdC8vIGVudHJ5IGluIHRoZSBhcnJheS5cblx0XHRcdC8vIERlZmF1bHRzIHRvICdbWycgKyBjYXRlZ29yeV9jYW5vbmljYWwgKyAnOiQxXV0nLiBDYW4gYmUgb3ZlcnJpZGRlbiBpZiBpbiB0aGUgc2hvcnQgZWRpdCBzdW1tYXJpZXNcblx0XHRcdC8vIG5vdCB0aGUgc3RhbmRhcmQgY2F0ZWdvcnkgbmFtZSBzaG91bGQgYmUgdXNlZCBidXQsIHNheSwgYSBzaG9ydGVyIG5hbWVzcGFjZSBhbGlhcy4gJDEgaXMgcmVwbGFjZWRcblx0XHRcdC8vIGJ5IGEgY2F0ZWdvcnkgbmFtZS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJzogJyQxJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNvbW1pdCc6ICflhLLlrZgnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtb2snOiAn56K65a6aJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhbmNlbCc6ICflj5bmtognLFxuXHRcdFx0Ly8gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9lcnJvcic6XG5cdFx0XHRcdCfnhKHms5Xlvp7kvLrmnI3lmajlj5blvpfpoIHpnaLmloflrZfjgILlm6DmraTvvIzmgqjnmoTliIbpoZ7orormm7TnhKHms5XlhLLlrZjjgILmiJHlgJHngrrmraTkuI3kvr/ooajnpLrmirHmrYnjgIInLFxuXHRcdFx0Ly8gUGx1cmFsIG9mIGNhdGVnb3J5X2Nhbm9uaWNhbC5cblx0XHRcdCdob3RjYXQtY2F0ZWdvcmllcyc6ICfliIbpoZ4nLFxuXHRcdFx0Ly8gTmFtZXMgZm9yIHRoZSBzZWFyY2ggZW5naW5lc1xuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc2VhcmNoaW5kZXgnOiAn5pCc5bCL57Si5byVJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhZ2VsaXN0JzogJ+mggemdouWIl+ihqCcsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1jb21iaW5lZCc6ICflkIjkvbXmkJzlsIsnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc3ViY2F0JzogJ+WtkOWIhumhnicsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYXJlbnRjYXQnOiAn5LiK5bGk5YiG6aGeJyxcblx0XHRcdC8vIFRoZSB0b29sdGlwcyBmb3IgdGhlIGFib3ZlIGxpbmtzXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWNoYW5nZSc6ICfkv67mlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZW1vdmUnOiAn56e76ZmkJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtYWRkJzogJ+WinuWKoOS4gOWAi+aWsOWIhumhnicsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlc3RvcmUnOiAn5b6p5Y6f6K6K5pu0Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdW5kbyc6ICflvqnljp/orormm7QnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1kb3duJzogJ+aJk+mWi+S7peS/ruaUueS4pumhr+ekuuWtkOWIhumhnicsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVwJzogJ+aJk+mWi+S7peS/ruaUueS4pumhr+ekuuS4iuWxpOWIhumhnicsXG5cdFx0XHQvLyBUb29sdGlwIGZvciB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGlua1xuXHRcdFx0J2hvdGNhdC1tdWx0aV90b29sdGlwJzogJ+S/ruaUueWkmuWAi+WIhumhnicsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3JlbW92ZWQnOiAn5bey56e76ZmkW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdGVtcGxhdGVfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e1tbQ2F0ZWdvcnk6JDFdXX19Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2FkZGVkJzogJ+W3sua3u+WKoFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQvLyAkMiBpcyB0aGUgbmV3IGtleVxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfa2V5Y2hhbmdlJzogJ+W3suiuvue9rltbQ2F0ZWdvcnk6JDFdXeeahOaWsOaOkuW6j+Wtl++8mlwiJDJcIicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9ub3RGb3VuZCc6ICfliIbnsbvigJwkMeKAneayoeacieaJvuWIsCcsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9leGlzdHMnOiAn5YiG57G74oCcJDHigJ3lt7Lnu4/lrZjlnKjvvIzmsqHmnInmt7vliqDjgIInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVzb2x2ZWQnOiAn77yI6YeN5a6a5ZCRW1tDYXRlZ29yeTokMV1d5bey5aSE55CG77yJJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdW5jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e3VuY2F0ZWdvcml6ZWR9fScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gcHJlZml4IHRvIHRoZSBlZGl0IHN1bW1hcnkuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXByZWZpeCc6ICfkvb/nlKhbW0g6SE9UQ0FUfEhvdENhdF1dJyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBhcHBlbmQgdG8gdGhlIGVkaXQgc3VtbWFyeS4gTmFtZWQgJ3VzaW5nJyBmb3IgaGlzdG9yaWNhbCByZWFzb25zLiBJZiB5b3UgcHJlZmVyXG5cdFx0XHQvLyB0byBoYXZlIGEgbWFya2VyIGF0IHRoZSBmcm9udCwgdXNlIHByZWZpeCBhbmQgc2V0IHRoaXMgdG8gdGhlIGVtcHR5IHN0cmluZy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdXNpbmcnOiAnJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfY2hhbmdlJzogJyQx5Liq5YiG57G7Jyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5OyBpLmUuLCBhIGNhdGVnb3J5IHRoYXQgc2hvdWxkIG5vdCBjb250YWluXG5cdFx0XHQvLyBhbnkgaXRlbXMsIGJ1dCB0aGF0IGNvbnRhaW5zIGxpbmtzIHRvIG90aGVyIGNhdGVnb3JpZXMgd2hlcmUgc3R1ZmYgc2hvdWxkIGJlIGNhdGVnb3JpemVkLiBJZiB5b3UgZG9uJ3QgaGF2ZVxuXHRcdFx0Ly8gdGhhdCBjb25jZXB0IG9uIHlvdXIgd2lraSwgc2V0IGl0IHRvIGJsYW5rIHN0cmluZy4gVXNlIGJsYW5rcywgbm90IHVuZGVyc2NvcmVzLlxuXHRcdFx0J2hvdGNhdC1kaXNhbWJpZ19jYXRlZ29yeSc6ICcnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgKHNvZnQpIHJlZGlyZWN0IHRvIHNvbWUgb3RoZXIgY2F0ZWdvcnkgZGVmaW5lZCBieSBhIGxpbmtcblx0XHRcdC8vIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LiBJZiB5b3VyIHdpa2kgZG9lc24ndCBoYXZlIHNvZnQgY2F0ZWdvcnkgcmVkaXJlY3RzLCBzZXQgdGhpcyB0byBudWxsLlxuXHRcdFx0Ly8gSWYgYSBzb2Z0LXJlZGlyZWN0ZWQgY2F0ZWdvcnkgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBsaW5rIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LCBpdCdzIGNvbnNpZGVyZWRcblx0XHRcdC8vIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnkgaW5zdGVhZC5cdFx0XHQnaG90Y2F0LXJlZGlyX2NhdGVnb3J5JzogJ+W3sumHjeWumuWQkeeahOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNlcGFyYXRvcic6ICc7ICcsXG5cdFx0XHQvLyAkMSBpcyByZXBsYWNlZCBieSBhIG51bWJlci4gSWYgeW91ciBsYW5ndWFnZSBoYXMgc2V2ZXJhbCBwbHVyYWwgZm9ybXMgKGMuZi4gW1s6ZW53aWtpOkR1YWwgKGdyYW1tYXRpY2FsIGZvcm0pXV0pLFxuXHRcdFx0Ly8geW91IGNhbiBzZXQgdGhpcyB0byBhbiBhcnJheSBvZiBzdHJpbmdzIHN1aXRhYmxlIGZvciBwYXNzaW5nIHRvIG13Lmxhbmd1YWdlLmNvbmZpZ1BsdXJhbCgpLlxuXHRcdFx0Ly8gSWYgdGhhdCBmdW5jdGlvbiBkb2Vzbid0IGV4aXN0LCBIb3RDYXQgd2lsbCBzaW1wbHkgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBsYXN0XG5cdFx0XHQvLyBlbnRyeSBpbiB0aGUgYXJyYXkuXG5cdFx0XHQvLyBEZWZhdWx0cyB0byAnW1snICsgY2F0ZWdvcnlfY2Fub25pY2FsICsgJzokMV1dJy4gQ2FuIGJlIG92ZXJyaWRkZW4gaWYgaW4gdGhlIHNob3J0IGVkaXQgc3VtbWFyaWVzXG5cdFx0XHQvLyBub3QgdGhlIHN0YW5kYXJkIGNhdGVnb3J5IG5hbWUgc2hvdWxkIGJlIHVzZWQgYnV0LCBzYXksIGEgc2hvcnRlciBuYW1lc3BhY2UgYWxpYXMuICQxIGlzIHJlcGxhY2VkXG5cdFx0XHQvLyBieSBhIGNhdGVnb3J5IG5hbWUuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZSc6ICckMScsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jb21taXQnOiAn5L+d5a2YJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW9rJzogJ+ehruWumicsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYW5jZWwnOiAn5Y+W5raIJyxcblx0XHRcdC8vIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfZXJyb3InOlxuXHRcdFx0XHQn5peg5rOV5LuO5pyN5Yqh5Zmo5Y+W5b6X6aG16Z2i5paH5a2X44CC5Zug5q2k77yM5oKo55qE5YiG57G75pu05pS55peg5rOV5L+d5a2Y44CC5oiR5Lus5Li65q2k5LiN5L6/6KGo56S65oqx5q2J44CCJyxcblx0XHRcdC8vIFBsdXJhbCBvZiBjYXRlZ29yeV9jYW5vbmljYWwuXG5cdFx0XHQnaG90Y2F0LWNhdGVnb3JpZXMnOiAn5YiG57G7Jyxcblx0XHRcdC8vIE5hbWVzIGZvciB0aGUgc2VhcmNoIGVuZ2luZXNcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXNlYXJjaGluZGV4JzogJ+aQnOe0oue0ouW8lScsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYWdlbGlzdCc6ICfpobXpnaLliJfooagnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtY29tYmluZWQnOiAn5ZCI5bm25pCc57SiJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXN1YmNhdCc6ICflrZDliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFyZW50Y2F0JzogJ+S4iuWxguWIhuexuycsXG5cdFx0XHQvLyBUaGUgdG9vbHRpcHMgZm9yIHRoZSBhYm92ZSBsaW5rc1xuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1jaGFuZ2UnOiAn5L+u5pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVtb3ZlJzogJ+enu+mZpCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWFkZCc6ICflop7liqDkuIDkuKrmlrDliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZXN0b3JlJzogJ+aSpOmUgOabtOaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVuZG8nOiAn5pKk6ZSA5pu05pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtZG93bic6ICfmiZPlvIDku6Xkv67mlLnlubbmmL7npLrlrZDliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11cCc6ICfmiZPlvIDku6Xkv67mlLnlubbmmL7npLrkuIrlsYLliIbnsbsnLFxuXHRcdFx0Ly8gVG9vbHRpcCBmb3IgdGhlIFwiZW50ZXIgbXVsdGktbW9kZVwiIGxpbmtcblx0XHRcdCdob3RjYXQtbXVsdGlfdG9vbHRpcCc6ICfkv67mlLnlpJrkuKrliIbnsbsnLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2hvdENhdE1lc3NhZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxxQkFBcUI7O0FDRGxDLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUd4QixJQUFNQyxRQUF5Q0MsZUFBYztBQUM1RCxVQUFBLEdBQU9ILGtCQUFBSSxXQUFVRCxTQUFTO0FBQzNCOztDQ01DLFNBQVNFLGNBQWM7QUFDdkIsTUFDQ0MsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUIsTUFBTSxLQUN2Q0MsT0FBT0Msa0NBQ1AsQ0FBQ0MsU0FBU0MsY0FBYyxrQkFBa0IsR0FDekM7QUFDRDtFQUNEO0FBQ0EsUUFBTUMsTUFBTVgsTUFBTSxpQkFBaUI7QUFDbkMsUUFBTVksd0JBQXdCO0FBQzlCLFFBQU1DLFdBQVc7QUFDakIsUUFBTUMsa0JBQWtCO0FBQ3hCLFFBQU1DLGNBQWNYLEdBQUdZLFFBQVFWLElBQUlRLGVBQWU7QUFPbEQsUUFBTUcsY0FBZUMsZUFBOEI7QUFDbEQsV0FBT0MsRUFBRSxRQUFRLEVBQUVDLEtBQUssU0FBQSxXQUFBQyxPQUFvQkgsV0FBUyxHQUFBLEVBQUFHLE9BQUl4QixrQkFBa0IsQ0FBRSxFQUFFeUIsS0FBSyxHQUFHO0VBQ3hGO0FBQ0EsUUFBTUMsbUJBQW1CQSxDQUFDQyxVQUErQkMsTUFBY0MsVUFBdUM7QUFDN0csV0FBT1AsRUFBRSxPQUFPLEVBQ2RRLFNBQVMsV0FBVyxFQUNwQkMsT0FDQVQsRUFBRSxPQUFPLEVBQ1BDLEtBQUssU0FBQSxHQUFBQyxPQUFZSyxPQUFLLGdCQUFBLENBQWdCLEVBQ3RDRyxJQUFJO01B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TUFBTUEsTUFBTTtBQUNqQixRQUFJeG9CLEdBQUd5b0IsU0FBUztBQUNmO0lBQ0Q7QUFDQXpvQixPQUFHeW9CLFVBQVU7QUFDYk4sZUFBVztFQUNaO0FBRUE3eUIsU0FBT296QixtQkFBbUIsTUFBTTtBQUMvQixXQUFPVixTQUFTO0VBQ2pCO0FBQ0ExeUIsU0FBT3F6QixtQkFBb0JseUIsV0FBVTtBQUNwQyxXQUFPcXhCLFNBQVNyeEIsS0FBSztFQUN0QjtBQUNBbkIsU0FBT3N6QixvQkFBb0IsTUFBTTtBQUNoQ3pFLGNBQVU7RUFDWDtBQUNBbmtCLEtBQUc2b0IsZUFBZ0IxWSxjQUFhO0FBRS9CaGIsT0FBR3F5QixLQUFLLGNBQWMsRUFBRXRxQixJQUFJaVQsUUFBUTtFQUNyQztBQUdBLE1BQUl6VCxLQUFLMHJCLCtCQUErQixVQUFVO0FBRWpEanpCLE9BQUdxeUIsS0FBSyxVQUFVLEVBQUV0cUIsSUFBSSxNQUFNO0FBRzdCLFVBQUkxSCxTQUFTQyxjQUFjLHVCQUF1QixHQUFHO0FBQ3BEO01BQ0Q7QUFDQXlSLGdCQUFVO0FBQ1ZFLGdCQUFVLENBQUE7QUFDVmlmLG9CQUFjO0FBQ2RybUIsU0FBR3lvQixVQUFVO0FBQ2JELFVBQUk7SUFDTCxDQUFDO0VBQ0Y7QUFHQXR5QixJQUFFc3lCLEdBQUc7QUFDTixHQUFHOyIsCiAgIm5hbWVzIjogWyJjYXRjaGVja0lubGluZUljb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJtd0FwaSIsICJ1c2VyQWdlbnQiLCAiaW5pdE13QXBpIiwgImhvdENhdENoZWNrIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAid2luZG93IiwgIkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImFwaSIsICJjaGVja0NhdGVnb3JpZXNSZWdFeHAiLCAic2VsZk5hbWUiLCAic3RvcmFnZUl0ZW1OYW1lIiwgInN0b3JhZ2VJdGVtIiwgInN0b3JhZ2UiLCAiY3JlYXRlakljb24iLCAiaWNvbkNsYXNzIiwgIiQiLCAiYXR0ciIsICJjb25jYXQiLCAidGV4dCIsICJjcmVhdGVOb3RpZnlBcmVhIiwgInRleHROb2RlIiwgImljb24iLCAic3RhdGUiLCAiYWRkQ2xhc3MiLCAiYXBwZW5kIiwgImNzcyIsICJwYWRkaW5nIiwgIm9uZSIsICJlIiwgIl9zZWxmJHdwVGV4dGJveDEkdmFsdSIsICJzZWxmIiwgIm5ld1ZhbCIsICJ3cFRleHRib3gxIiwgInZhbHVlIiwgInJlcGxhY2UiLCAiZGxnQnV0dG9ucyIsICIkZGlhbG9nQ2hlY2tTdG9yYWdlIiwgIiRwZXJtYVNhdmVIaW50IiwgIiR0ZXh0SGludE5vZGUiLCAiJGRpYWxvZyIsICJkb1JlbW92ZSIsICJ3cFN1bW1hcnkiLCAid3JpdGVTdG9yYWdlIiwgInZhbCIsICJzZXQiLCAiXyRkaWFsb2dDaGVja1N0b3JhZ2UkIiwgImNoZWNrZWQiLCAiZGlhbG9nIiwgIl8kZGlhbG9nQ2hlY2tTdG9yYWdlJDIiLCAiX2FkZFRvSlMiLCAiX2UiLCAicHJldmVudERlZmF1bHQiLCAiaGFzQ2xhc3MiLCAiJGVsIiwgIm9mZiIsICJwYXJhbXMiLCAiYWN0aW9uIiwgInRpdGxlIiwgInN1bW1hcnkiLCAiYXBwZW5kdGV4dCIsICJkYXRhIiwgImVkaXREb25lIiwgImVkaXRTdGF0IiwgImVycm9yIiwgIm5vdGlmeSIsICJjb2RlIiwgImluZm8iLCAidGFnIiwgInR5cGUiLCAiZmFkZU91dCIsICJwb3N0V2l0aFRva2VuIiwgInRoZW4iLCAicHJvbXB0IiwgImlkIiwgIm9uIiwgImZhZGVJbiIsICJhcHBlbmRUbyIsICJkaXNwbGF5IiwgInVzZXIiLCAiaXNBbm9uIiwgImhpZGUiLCAibW9kYWwiLCAiY2xvc2VPbkVzY2FwZSIsICJ3aWR0aCIsICJidXR0b25zIiwgImNsb3NlIiwgIiRib2R5IiwgImZpbmQiLCAidHJpZ2dlciIsICJvcGVuIiwgIiRidXR0b25zIiwgInBhcmVudCIsICJlcSIsICJidXR0b24iLCAiaWNvbnMiLCAicHJpbWFyeSIsICJIb3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQiLCAiJG9rTGluayIsICJocmVmIiwgImRvRWRpdCIsICJyZXN1bHQiLCAibm9jcmVhdGUiLCAiYWpheCIsICJ1cmwiLCAiZGF0YVR5cGUiLCAic3VjY2VzcyIsICJjYWNoZSIsICJsb2FkSG90Q2F0Q2hlY2siLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFyZ3MiLCAibWVzc2FnZSIsICJwbGFpbiIsICJob3RDYXRNZXNzYWdlcyIsICJ3Z1VzZXJMYW5ndWFnZSIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJob3RDYXQiLCAiY29uZiIsICJ2YWx1ZXMiLCAiSG90Q2F0IiwgIm5vZGVOYW1lIiwgIndnQWN0aW9uIiwgImxpbmtzIiwgImNoYW5nZSIsICJyZW1vdmUiLCAiYWRkIiwgInJlc3RvcmUiLCAidW5kbyIsICJkb3duIiwgInVwIiwgImNoYW5nZVRhZyIsICJhZGRtdWx0aSIsICJkaXNhYmxlIiwgIm5zIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIm5zSWRzIiwgIndnTmFtZXNwYWNlSWRzIiwgIndnQXJ0aWNsZUlkIiwgInRlc3QiLCAid2dUaXRsZSIsICJjcmVhdG9yIiwgInRpbWVkdGV4dCIsICJpbnN0aXR1dGlvbiIsICJ1bmNhdF9yZWdleHAiLCAiZXhpc3RzWWVzIiwgImV4aXN0c05vIiwgInRlbXBsYXRlX2NhdGVnb3JpZXMiLCAiY2FwaXRhbGl6ZVBhZ2VOYW1lcyIsICJ1cGxvYWRfZGlzYWJsZWQiLCAiYmxhY2tsaXN0IiwgImJnX2NoYW5nZWQiLCAibm9fYXV0b2NvbW1pdCIsICJkZWxfbmVlZHNfZGlmZiIsICJzdWdnZXN0X2RlbGF5IiwgImVkaXRib3hfd2lkdGgiLCAic3VnZ2VzdGlvbnMiLCAiZml4ZWRfc2VhcmNoIiwgInVzZV91cF9kb3duIiwgImxpc3RTaXplIiwgInNpbmdsZV9taW5vciIsICJkb250X2FkZF90b193YXRjaGxpc3QiLCAic2hvcnRjdXRzIiwgImFkZFNob3J0Y3V0cyIsICJtYXAiLCAiX2EiLCAiayIsICJPYmplY3QiLCAiaGFzT3duIiwgInYiLCAidHJpbSIsICJsZW5ndGgiLCAiSEMiLCAidWEiLCAibmF2aWdhdG9yIiwgInRvTG93ZXJDYXNlIiwgImlzX3dlYmtpdCIsICJjYXRfcHJlZml4IiwgIm5vU3VnZ2VzdGlvbnMiLCAid2lraVRleHRCbGFuayIsICJ3aWtpVGV4dEJsYW5rUkUiLCAiUmVnRXhwIiwgIndpa2lUZXh0QmxhbmtPckJpZGkiLCAiZm9ybWF0dGVkTmFtZXNwYWNlcyIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAibmFtZXNwYWNlSWRzIiwgImF1dG9Mb2NhbGl6ZSIsICJuYW1lc3BhY2VOdW1iZXIiLCAiZmFsbGJhY2siLCAiY3JlYXRlUmVnZXhwU3RyIiwgIm5hbWUiLCAicmVnZXhfbmFtZSIsICJpIiwgImluaXRpYWwiLCAiY2hhckF0IiwgImxsIiwgInVsIiwgInRvVXBwZXJDYXNlIiwgImNhbm9uaWNhbCIsICJTdHJpbmciLCAicmVnZXhwIiwgImNhdF9uYW1lIiwgImNhdGVnb3J5X2Nhbm9uaWNhbCIsICJjYXRlZ29yeV9yZWdleHAiLCAidGVtcGxhdGVfcmVnZXhwIiwgIm1ha2UiLCAiYXJnIiwgImxpdGVyYWwiLCAiY3JlYXRlVGV4dE5vZGUiLCAiY3JlYXRlRWxlbWVudCIsICJwYXJhbSIsICJ1cmkiLCAibG9jYXRpb24iLCAicmUiLCAibSIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJzY3JpcHQiLCAid2dTY3JpcHQiLCAiaW5kZXhPZiIsICJ3Z1NlcnZlciIsICJzbGljZSIsICJwcm90b2NvbCIsICJwcmVmaXgiLCAid2dBcnRpY2xlUGF0aCIsICJjbGFzc05hbWUiLCAiY2FwaXRhbGl6ZSIsICJzdHIiLCAid2lraVBhZ2VQYXRoIiwgInBhZ2VOYW1lIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJlc2NhcGVSRSIsICJzdWJzdGl0dXRlRmFjdG9yeSIsICJvcHRpb25zIiwgImxlYWQiLCAiaW5kaWNhdG9yIiwgImxicmFjZSIsICJyYnJhY2UiLCAibWF0Y2giLCAiaWR4IiwgImFscGhhIiwgInJlcGxhY2VtZW50IiwgInJlcGxhY2VTaG9ydGN1dHMiLCAicmVwbGFjZUhhc2giLCAicyIsICJmaW5kQ2F0c1JFIiwgInJlcGxhY2VCeUJsYW5rcyIsICJmaW5kX2NhdGVnb3J5IiwgIndpa2l0ZXh0IiwgImNhdGVnb3J5IiwgIm9uY2UiLCAiY2F0X3JlZ2V4IiwgIm5vd2lraVJlZ2V4IiwgImNvcGllZHRleHQiLCAiY3Vycl9tYXRjaCIsICJpbnRlcmxhbmd1YWdlUkUiLCAiY2hhbmdlX2NhdGVnb3J5IiwgInRvUmVtb3ZlIiwgInRvQWRkIiwgImlzX2hpZGRlbiIsICJmaW5kX2luc2VydGlvbnBvaW50IiwgIl93aWtpdGV4dCIsICJpbmRleCIsICJsYXN0SW5kZXgiLCAib25DYXQiLCAibmFtZVNwYWNlIiwgImtleUNoYW5nZSIsICJtYXRjaGVzIiwgImNhdF9wb2ludCIsICJiZWZvcmUiLCAiTWF0aCIsICJtYXgiLCAiYWZ0ZXIiLCAic2VhcmNoIiwgImoiLCAicG9pbnQiLCAibmV3Y2F0c3RyaW5nIiwgInN1ZmZpeCIsICJ0eHQiLCAiZXZ0S2V5cyIsICJjdHJsS2V5IiwgIm1ldGFLZXkiLCAic2hpZnRLZXkiLCAiZXZ0S2lsbCIsICJzdG9wUHJvcGFnYXRpb24iLCAiY2FuY2VsQnViYmxlIiwgImNhdExpbmUiLCAib25VcGxvYWQiLCAiZWRpdG9ycyIsICJjb21taXRCdXR0b24iLCAiY29tbWl0Rm9ybSIsICJtdWx0aVNwYW4iLCAicGFnZVRleHQiLCAicGFnZVRpbWUiLCAicGFnZVdhdGNoZWQiLCAid2F0Y2hDcmVhdGUiLCAid2F0Y2hFZGl0IiwgIm1pbm9yRWRpdHMiLCAiZWRpdFRva2VuIiwgImlzX3J0bCIsICJzZXJ2ZXJUaW1lIiwgImxhc3RSZXZJZCIsICJwYWdlVGV4dFJldklkIiwgImNvbmZsaWN0aW5nVXNlciIsICJuZXdET00iLCAiVU5DSEFOR0VEIiwgIk9QRU4iLCAiQ0hBTkdFX1BFTkRJTkciLCAiQ0hBTkdFRCIsICJERUxFVEVEIiwgInNldFBhZ2UiLCAic3RhcnRUaW1lIiwgInF1ZXJ5IiwgInBhZ2VzIiwgInBhZ2UiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgImNvbnRlbnQiLCAidGltZXN0YW1wIiwgInJldmlkIiwgImxhc3RyZXZpZCIsICJzdGFydHRpbWVzdGFtcCIsICJ3YXRjaGVkIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAibGFuZ2xpbmtzIiwgImxhbmciLCAiZ2VuZXJhbCIsICJ0aW1lIiwgImNhc2UiLCAidXNlcmluZm8iLCAid2F0Y2hjcmVhdGlvbnMiLCAid2F0Y2hkZWZhdWx0IiwgIm1pbm9yZGVmYXVsdCIsICJzYXZlSW5Qcm9ncmVzcyIsICJpbml0aWF0ZUVkaXQiLCAiZmFpbHVyZSIsICJvbGRCdXR0b25TdGF0ZSIsICJkaXNhYmxlZCIsICJmYWlsIiwgImFwcGx5IiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInJhd2NvbnRpbnVlIiwgInRpdGxlcyIsICJ3Z1BhZ2VOYW1lIiwgInByb3AiLCAiaW5wcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInJ2bGltaXQiLCAicnZkaXIiLCAicnZzdGFydGlkIiwgIndnQ3VyUmV2aXNpb25JZCIsICJsbGxpbWl0IiwgIm1ldGEiLCAidWlwcm9wIiwgImRvbmUiLCAic3RhdHVzIiwgInN0YXR1c1RleHQiLCAibXVsdGlDaGFuZ2VNc2ciLCAiY291bnQiLCAiY3VycmVudFRpbWVzdGFtcCIsICJub3ciLCAiRGF0ZSIsICJ0cyIsICJnZXRVVENGdWxsWWVhciIsICJ0d28iLCAiZ2V0VVRDTW9udGgiLCAiZ2V0VVRDRGF0ZSIsICJnZXRVVENIb3VycyIsICJnZXRVVENNaW51dGVzIiwgImdldFVUQ1NlY29uZHMiLCAicGVyZm9ybUNoYW5nZXMiLCAic2luZ2xlRWRpdG9yIiwgInNlbGZFZGl0Q29uZmxpY3QiLCAid2dVc2VyTmFtZSIsICJub0NvbW1pdCIsICJ3cEVkaXRUb2tlbiIsICJ3cERpZmYiLCAid3BTYXZlIiwgImNoYW5nZWQiLCAiYWRkZWQiLCAiZGVsZXRlZCIsICJ0b0VkaXQiLCAiZWRpdCIsICJjaGFuZ2VzIiwgIm9yaWdpbmFsQ2F0ZWdvcnkiLCAiY3VycmVudENhdGVnb3J5IiwgImN1cnJlbnRLZXkiLCAiY3VycmVudEhpZGRlbiIsICJmcm9tIiwgInRvIiwgIndwTWlub3JlZGl0IiwgIndwV2F0Y2h0aGlzIiwgIndwQ2hhbmdlVGFncyIsICJ3cEF1dG9TdW1tYXJ5IiwgImpvaW4iLCAic2hvcnRTdW1tYXJ5IiwgImFycm93IiwgIndwU3RhcnR0aW1lIiwgIndwRWRpdHRpbWUiLCAib2xkaWQiLCAiaGNDb21taXQiLCAiY2xpY2siLCAicmVzb2x2ZU9uZSIsICJ0b1Jlc29sdmUiLCAiY2F0cyIsICJjYXRlZ29yaWVzIiwgImlzX2RhYiIsICJpc19yZWRpciIsICJyZWRpcmVjdCIsICJjYXRlZ29yeWluZm8iLCAiaGlkZGVuIiwgImlzX21pc3NpbmciLCAibWlzc2luZyIsICJkYWJJbnB1dENsZWFuZWQiLCAiaW5wdXRFeGlzdHMiLCAic3JjIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJuIiwgImNhdF8iLCAiY2F0IiwgImVyciIsICJmIiwgImRhYiIsICJyZXNvbHZlUmVkaXJlY3RzIiwgInAiLCAicmVzb2x2ZU11bHRpIiwgImNhbGxiYWNrIiwgImRhYklucHV0IiwgImxhc3RJbnB1dCIsICJwbG5hbWVzcGFjZSIsICJwbGxpbWl0IiwgImNsbGltaXQiLCAianNvbiIsICJyZXEiLCAibWFrZUFjdGl2ZSIsICJ3aGljaCIsICJpc19hY3RpdmUiLCAiX2kiLCAiX2VkaXRvcnMiLCAiZWRpdG9yIiwgImluYWN0aXZhdGUiLCAic2hvd0RhYiIsICJleHBlY3RlZElucHV0IiwgImxhc3RSZWFsSW5wdXQiLCAiYWN0dWFsVmFsdWUiLCAic2hvd3NMaXN0IiwgInNwbGl0IiwgImxhc3RTZWxlY3Rpb24iLCAic3RhcnQiLCAiZW5kIiwgImRpc3BsYXlMaXN0IiwgInNldFRpbWVvdXQiLCAic2V0U2VsZWN0aW9uIiwgInNob3dTdWdnZXN0aW9ucyIsICJtdWx0aVN1Ym1pdCIsICJfaTIiLCAiX2VkaXRvcnMyIiwgIm1zZyIsICJyZXNvbHZlZCIsICJmaXJzdERhYiIsICJkb250Q2hhbmdlIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImVsZW1lbnQiLCAiYWNjZXB0Q2hlY2siLCAiY29tbWl0IiwgInNldE11bHRpSW5wdXQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJwYXJlbnROb2RlIiwgInJlcGxhY2VDaGlsZCIsICJjaGVja011bHRpSW5wdXQiLCAiaGFzQ2hhbmdlcyIsICJfaTMiLCAiX2VkaXRvcnMzIiwgInN1Z2dlc3Rpb25FbmdpbmVzIiwgIm9wZW5zZWFyY2giLCAiaGFuZGxlciIsICJxdWVyeVJlc3VsdCIsICJxdWVyeUtleSIsICJleGlzdHMiLCAic3BsaWNlIiwgIm5vcm1hbGl6ZWQiLCAiaW50ZXJuYWxzZWFyY2giLCAiYWxscGFnZXMiLCAiX3RpdGxlIiwgInN1YmNhdGVnb3JpZXMiLCAiY2F0ZWdvcnltZW1iZXJzIiwgInBhcmVudGNhdGVnb3JpZXMiLCAic3VnZ2VzdGlvbkNvbmZpZ3MiLCAic2VhcmNoaW5kZXgiLCAiZW5naW5lcyIsICJzaG93IiwgInRlbXAiLCAibm9Db21wbGV0aW9uIiwgInBhZ2VsaXN0IiwgImNvbWJpbmVkIiwgInN1YmNhdCIsICJwYXJlbnRjYXQiLCAiQlMiLCAiVEFCIiwgIlJFVCIsICJFU0MiLCAiU1BBQ0UiLCAiUEdVUCIsICJQR0RPV04iLCAiVVAiLCAiRE9XTiIsICJERUwiLCAiSU1FIiwgIkNhdGVnb3J5RWRpdG9yIiwgImNvbnN0cnVjdG9yIiwgImluaXRpYWxpemUiLCAibGluZSIsICJzcGFuIiwgImRpciIsICJpc0FkZENhdGVnb3J5IiwgImNhdExpbmsiLCAiZmlyc3RDaGlsZCIsICJvcmlnaW5hbEtleSIsICJvcmlnaW5hbEV4aXN0cyIsICJtYWtlTGlua1NwYW4iLCAidXBEb3duTGlua3MiLCAic3R5bGUiLCAibGlua1NwYW4iLCAiaW5zZXJ0QmVmb3JlIiwgIm5leHRTaWJsaW5nIiwgImxpbmsiLCAiYmluZCIsICJub3JtYWxMaW5rcyIsICJ1bmRlbExpbmsiLCAib3JpZ2luYWxIaWRkZW4iLCAiZW5naW5lIiwgImN1cnJlbnRFeGlzdHMiLCAibGFzdFNhdmVkU3RhdGUiLCAibGFzdFNhdmVkQ2F0ZWdvcnkiLCAibGFzdFNhdmVkS2V5IiwgImxhc3RTYXZlZEV4aXN0cyIsICJsYXN0U2F2ZWRIaWRkZW4iLCAiaW52b2tlU3VnZ2VzdGlvbnMiLCAiZG9udF9hdXRvY29tcGxldGUiLCAidGV4dGNoYW5nZSIsICJtYWtlRm9ybSIsICJmb3JtIiwgIm1ldGhvZCIsICJhY2NlcHQiLCAic2l6ZSIsICJldmVudCIsICJpbWUiLCAibGFzdEtleSIsICJ1c2VzQ29tcG9zaXRpb24iLCAia2V5Q291bnQiLCAicHJvY2Vzc0tleSIsICJyZXNldEtleVNlbGVjdGlvbiIsICJjYW5jZWwiLCAib25iZWZvcmVkZWFjdGl2YXRlIiwgImNyZWF0ZVRleHRSYW5nZSIsICJzYXZlVmlldyIsICJsaXN0IiwgImhpZ2hsaWdodFN1Z2dlc3Rpb24iLCAiZm9jdXMiLCAiZW5naW5lU2VsZWN0b3IiLCAib3B0IiwgInNlbGVjdGVkIiwgInNlbGVjdGVkSW5kZXgiLCAiYnV0dG9uX2xhYmVsIiwgIl9pZCIsICJkZWZhdWx0VGV4dCIsICJsYWJlbCIsICJPSyIsICJvayIsICJjYW5jZWxCdXR0b24iLCAicG9zaXRpb24iLCAid2hpdGVTcGFjZSIsICJfaTQiLCAiX2VkaXRvcnM0IiwgIm9yaWdpbmFsU3RhdGUiLCAicmVhZE9ubHkiLCAicmVtb3ZlRWRpdG9yIiwgImJhY2tncm91bmRDb2xvciIsICJuZXh0IiwgInJvbGxiYWNrIiwgInVuZG9MaW5rIiwgImRvbnRDaGVjayIsICJzYW5pdGl6ZUlucHV0IiwgIm9yaWdpbmFsIiwgIl9pNSIsICJfZWRpdG9yczUiLCAiY3NzVGV4dCIsICJ0ZXh0RGVjb3JhdGlvbiIsICJzZWxlY3RFbmdpbmUiLCAiZW5naW5lTmFtZSIsICJtYWtlQ2FsbCIsICJjYWxsYmFja09iaiIsICJjbGVhbktleSIsICJjYiIsICJ6IiwgImNhbGxzTWFkZSIsICJub2ZDYWxscyIsICJhbGxUaXRsZXMiLCAiZG9udENhY2hlIiwgImNhbmNlbGxlZCIsICJnZXRKU09OIiwgImdlbmVyYXRlQXJyYXkiLCAiZm9yY2UiLCAicGlwZSIsICJtYWtlQ2FsbHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZW5naW5lXyIsICJ3Z1NjcmlwdFBhdGgiLCAiZG9udEF1dG9jb21wbGV0ZSIsICJsYXN0UXVlcnkiLCAidk5vcm1hbGl6ZWQiLCAia25vd25Ub0V4aXN0IiwgInZMb3ciLCAic29ydCIsICJhIiwgImIiLCAicHJlZml4TWF0Y2hBIiwgInByZWZpeE1hdGNoQiIsICJhTG93IiwgImJMb3ciLCAiZmlyc3RUaXRsZSIsICJjb21wbGV0ZWQiLCAiYXV0b0NvbXBsZXRlIiwgImV4aXN0aW5nIiwgIm5vZkl0ZW1zIiwgImFsaWduIiwgInpJbmRleCIsICJhbmNob3IiLCAibGlzdGgiLCAidG9wIiwgIm9mZnNldFRvcCIsICJvZmZzZXRIZWlnaHQiLCAibWF4TGlzdEhlaWdodCIsICJ2aWV3cG9ydCIsICJ3aGF0IiwgImV2YWx1YXRlIiwgIm9wZXJhIiwgImRvY3VtZW50RWxlbWVudCIsICJzY3JvbGxfb2Zmc2V0IiwgIm5vZGUiLCAiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwgImJveCIsICJ4IiwgInJvdW5kIiwgImxlZnQiLCAieSIsICJ0IiwgImwiLCAib2Zmc2V0TGVmdCIsICJvZmZzZXRQYXJlbnQiLCAidGV4dFBvcyIsICJubCIsICJudCIsICJvZmZzZXQiLCAidGV4dEJveFdpZHRoIiwgIm9mZnNldFdpZHRoIiwgImNsaWVudFdpZHRoIiwgInNjcm9sbCIsICJ2aWV3X3ciLCAidyIsICJsX3BvcyIsICJyaWdodCIsICJyZWxhdGl2ZV9vZmZzZXQiLCAiYWN0VmFsIiwgIm5vcm1hbGl6ZWRBY3RWYWwiLCAiZG9udE1vZGlmeSIsICJjYW5TZWxlY3QiLCAic2V0U2VsZWN0aW9uUmFuZ2UiLCAic2VsZWN0aW9uU3RhcnQiLCAic2VsZWN0aW9uRW5kIiwgIm5ld19zZWxlY3Rpb24iLCAibW92ZSIsICJtb3ZlRW5kIiwgInNlbGVjdCIsICJnZXRTZWxlY3Rpb24iLCAic2VsZWN0aW9uIiwgImNyZWF0ZVJhbmdlIiwgInJuZyIsICJkdXBsaWNhdGUiLCAidGV4dFJuZyIsICJzZXRFbmRQb2ludCIsICJjdXJyIiwgInRndCIsICJob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0IiwgIkhvdENhdERvbnRBZGRUb1dhdGNobGlzdCIsICJob3RjYXRfbm9fYXV0b2NvbW1pdCIsICJIb3RDYXROb0F1dG9Db21taXQiLCAiaG90Y2F0X2RlbF9uZWVkc19kaWZmIiwgIkhvdENhdERlbE5lZWRzRGlmZiIsICJob3RjYXRfc3VnZ2VzdGlvbl9kZWxheSIsICJIb3RDYXRTdWdnZXN0aW9uRGVsYXkiLCAiaG90Y2F0X2VkaXRib3hfd2lkdGgiLCAiSG90Q2F0RWRpdEJveFdpZHRoIiwgImhvdGNhdF9zdWdnZXN0aW9ucyIsICJIb3RDYXRTdWdnZXN0aW9ucyIsICJob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQiLCAiSG90Q2F0Rml4ZWRTdWdnZXN0aW9ucyIsICJob3RjYXRfc2luZ2xlX2NoYW5nZXNfYXJlX21pbm9yIiwgIkhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlcyIsICJob3RjYXRfY2hhbmdlZF9iYWNrZ3JvdW5kIiwgIkhvdENhdENoYW5nZWRCYWNrZ3JvdW5kIiwgImhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3MiLCAiSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rcyIsICJob3RjYXRfbGlzdF9zaXplIiwgIkhvdENhdExpc3RTaXplIiwgIkhvdENhdENoYW5nZVRhZyIsICJlRm9ybSIsICJlZGl0Zm9ybSIsICJjYXRSZWdFeHAiLCAib2xkVHh0IiwgImlzTWlub3JDaGFuZ2UiLCAibmV3VHh0IiwgIm9sZExpbmVzIiwgIm5ld0xpbmVzIiwgImNBcnIiLCAiZXhjZXB0IiwgImFBcnIiLCAiYkFyciIsICJsQXJyIiwgInNBcnIiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiaXRlbSIsICJpbmQiLCAiZmlsdGVyIiwgImMiLCAic3VtIiwgInN1bUEiLCAiJGN0IiwgInJlbW92ZUNoYW5nZVRhZyIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiaXNOYU4iLCAibWluIiwgIl9pNiIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJzdWdnZXN0aW9uQ29uZmlnIiwgImRlZmF1bHRWaWV3IiwgImdldENvbXB1dGVkU3R5bGUiLCAiZ2V0UHJvcGVydHlWYWx1ZSIsICJjdXJyZW50U3R5bGUiLCAiZGlyZWN0aW9uIiwgImNhbl9lZGl0IiwgImNsb3NlRm9ybSIsICJfaTciLCAiX2VkaXRvcnM2IiwgInNldHVwX3VwbG9hZCIsICJpcCIsICJyZXVwbG9hZCIsICJkZXN0RmlsZSIsICJsYWJlbENlbGwiLCAibGluZUNlbGwiLCAidGV4dEFsaWduIiwgIm1hcmdpbiIsICJib3JkZXIiLCAidmVydGljYWxBbGlnbiIsICJuZXdSb3ciLCAiaW5zZXJ0Um93IiwgIm9sZFN1Ym1pdCIsICJkb19zdWJtaXQiLCAiZXZhbCIsICJGdW5jdGlvbiIsICJlYiIsICJhZGRlZE9uZSIsICJfaTgiLCAiX2VkaXRvcnM3IiwgIm5ld19jYXQiLCAiX2NsZWFuZWRUZXh0IiwgInJlZ2V4IiwgIm9uc3VibWl0IiwgImNsZWFuZWRUZXh0IiwgImlzT25QYWdlIiwgIm5vZGVUeXBlIiwgIk5vZGUiLCAiRUxFTUVOVF9OT0RFIiwgImNhdFRpdGxlIiwgImdldEF0dHJpYnV0ZSIsICJpbml0aWFsaXplZCIsICJzZXR1cFRpbWVvdXQiLCAiZmluZEJ5Q2xhc3MiLCAic2NvcGUiLCAic2V0dXAiLCAiYWRkaXRpb25hbFdvcmsiLCAiY2xlYXJUaW1lb3V0IiwgImhpZGRlbkNhdHMiLCAiZm9vdGVyIiwgImNvbnRhaW5lciIsICJjcmVhdGVFZGl0b3JzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiY29weUNhdHMiLCAiQXJyYXkiLCAiYXQiLCAibGFzdFNwYW4iLCAiZW5hYmxlTXVsdGkiLCAiaW5uZXJIVE1MIiwgImN1cnNvciIsICJob29rIiwgImZpcmUiLCAiY3JlYXRlQ29tbWl0Rm9ybSIsICJmb3JtQ29udGFpbmVyIiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJnZXRQYWdlIiwgInNldFN0YXRlIiwgIm5ld1NwYW5zIiwgImdldFN0YXRlIiwgIl9pOSIsICJfZWRpdG9yczgiLCAicmVhbGx5X3J1biIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJVcGxvYWRGb3JtIiwgInByZXZpb3VzX2hvdGNhdF9zdGF0ZSIsICJ3Z0lzQXJ0aWNsZSIsICJydW4iLCAic3RhcnRlZCIsICJob3RjYXRfZ2V0X3N0YXRlIiwgImhvdGNhdF9zZXRfc3RhdGUiLCAiaG90Y2F0X2Nsb3NlX2Zvcm0iLCAicnVuV2hlblJlYWR5Il0KfQo=
