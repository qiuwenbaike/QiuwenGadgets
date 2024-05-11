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
        format: "json",
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
        text,
        action: "edit",
        format: "json",
        title: mw.config.get("wgPageName"),
        summary: "".concat(selfName, "Categories are checked and OK. You can help [[Category:Media needing category review|reviewing]]!"),
        nocreate: true
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
        void mw.notify(msg, {
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
          void mw.notify(msg, {
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
          void mw.notify(msg, {
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
          void mw.notify(msg, {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hvdENhdC9tb2R1bGVzL2NoZWNrLm1vZHVsZS5sZXNzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9hcGkudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL2NoZWNrLnRzIiwgInNyYy9Ib3RDYXQvSG90Q2F0LmpzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9nZXRNZXNzYWdlLnRzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9tZXNzYWdlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9Ib3RDYXQvbW9kdWxlcy9jaGVjay5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGNhdGNoZWNrSW5saW5lSWNvbiA9IFwiY2hlY2stbW9kdWxlX19jYXRjaGVja0lubGluZUljb25fbUo1TkRxXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjYXRjaGVja0lubGluZUljb25cIjogY2F0Y2hlY2tJbmxpbmVJY29uXG59O1xuICAgICAgIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vLyBJbml0aWFsaXplIE1lZGlhV2lraSBBUElcbmNvbnN0IG13QXBpOiAodXNlckFnZW50Pzogc3RyaW5nKSA9PiBtdy5BcGkgPSAodXNlckFnZW50KSA9PiB7XG5cdHJldHVybiBpbml0TXdBcGkodXNlckFnZW50KTtcbn07XG5cbmV4cG9ydCB7bXdBcGl9O1xuIiwgImltcG9ydCB7Y2F0Y2hlY2tJbmxpbmVJY29ufSBmcm9tICcuL2NoZWNrLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7bXdBcGl9IGZyb20gJy4vYXBpJztcblxuLyoqXG4gKiBDaGVja0NhdGVnb3JpZXMgSG90Q2F0IEV4dGVuc2lvbiDigJNcbiAqIHJlbW92ZXMgdGhlIHRlbXBsYXRlIHdoZW4gY2F0ZWdvcml6aW5nIChwcm9tcHRzIGJlZm9yZSkgd2l0aCBIb3RDYXQgYW5kXG4gKiBhZGRzIGEgbGluayBcIkNhdGVnb3JpZXMgYXJlIE9LXCIgdG8gdGhlIGNhdGVnb3J5LXNlY3Rpb25cbiAqXG4gKiBAcmV2IDIgKDIwMTQtMDMtMjApXG4gKiBAYXV0aG9yIFJpbGxrZSwgMjAxMlxuICovXG4oZnVuY3Rpb24gaG90Q2F0Q2hlY2soKSB7XG5cdGlmIChcblx0XHRtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpICE9PSA2IHx8XG5cdFx0d2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCB8fFxuXHRcdCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tjYXRlZ29yaWVzJylcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGFwaSA9IG13QXBpKCdob3RDYXRDaGVjay8yLjAnKTtcblx0Y29uc3QgY2hlY2tDYXRlZ29yaWVzUmVnRXhwID0gL3t7W0NjXWhlY2tbIF9dY2F0ZWdvcmllc1tee31dKn19L2c7XG5cdGNvbnN0IHNlbGZOYW1lID0gJyhbW01lZGlhV2lraTpHYWRnZXQtSG90Q2F0LWNoZWNrLmpzfFNjcmlwdF1dKTogJztcblx0Y29uc3Qgc3RvcmFnZUl0ZW1OYW1lID0gJ2NoZWNrQ2F0Jztcblx0Y29uc3Qgc3RvcmFnZUl0ZW0gPSBtdy5zdG9yYWdlLmdldChzdG9yYWdlSXRlbU5hbWUpO1xuXHQvKipcblx0ICogQSBmZXcgc3R5bGluZyBoZWxwZXIgZnVuY3Rpb25zXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpY29uQ2xhc3Ncblx0ICogQHJldHVybiB7SlF1ZXJ5fVxuXHQgKi9cblx0Y29uc3QgY3JlYXRlakljb24gPSAoaWNvbkNsYXNzOiBzdHJpbmcpOiBKUXVlcnkgPT4ge1xuXHRcdHJldHVybiAkKCc8c3Bhbj4nKS5hdHRyKCdjbGFzcycsIGB1aS1pY29uICR7aWNvbkNsYXNzfSAke2NhdGNoZWNrSW5saW5lSWNvbn1gKS50ZXh0KCcgJyk7XG5cdH07XG5cdGNvbnN0IGNyZWF0ZU5vdGlmeUFyZWEgPSAodGV4dE5vZGU6IEpRdWVyeTxKUXVlcnkuTm9kZT4sIGljb246IHN0cmluZywgc3RhdGU6IHN0cmluZyk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRcdHJldHVybiAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3VpLXdpZGdldCcpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdFx0LmF0dHIoJ2NsYXNzJywgYCR7c3RhdGV9IHVpLWNvcm5lci1hbGxgKVxuXHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0J21hcmdpbi10b3AnOiAnMjBweCcsXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAnMC43ZW0nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8cD4nKS5hcHBlbmQoY3JlYXRlakljb24oaWNvbikuY3NzKCdtYXJnaW5SaWdodCcsICcwLjNlbScpLCB0ZXh0Tm9kZSkpXG5cdFx0XHQpO1xuXHR9O1xuXHQvLyBSZW1vdmUgXCJjaGVjayBjYXRlZ29yaWVzXCIgd2hlbiB1c2luZyBIb3RDYXRcblx0Ly8gT25seSBleGVjdXRlZCBvbiBmaXJzdCBzdWJtaXRcblx0JCgnYm9keScpLm9uZSgnc3VibWl0LmNoZWNrQ2F0TGlzdGVuZXInLCAnI2hvdGNhdENvbW1pdEZvcm0nLCBmdW5jdGlvbiAoZSkge1xuXHRcdGlmIChzdG9yYWdlSXRlbSA9PT0gJ2Rpc2FibGVkJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblxuXHRcdGNvbnN0IG5ld1ZhbCA9IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWU/LnJlcGxhY2UoY2hlY2tDYXRlZ29yaWVzUmVnRXhwLCAnJyk7XG5cdFx0Y29uc3QgZGxnQnV0dG9uczoge1xuXHRcdFx0J1llcywgUmVtb3ZlJz86ICgpID0+IHZvaWQ7XG5cdFx0XHQnTm8sIGtlZXAgaXQnPzogKCkgPT4gdm9pZDtcblx0XHR9ID0ge307XG5cdFx0bGV0ICRkaWFsb2dDaGVja1N0b3JhZ2U6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdFx0bGV0ICRwZXJtYVNhdmVIaW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRcdGxldCAkdGV4dEhpbnROb2RlO1xuXHRcdGxldCAkZGlhbG9nO1xuXHRcdGNvbnN0IGRvUmVtb3ZlID0gKCkgPT4ge1xuXHRcdFx0KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cblx0XHRcdFx0YFJlbW92aW5nIFtbVGVtcGxhdGU6Q2hlY2sgY2F0ZWdvcmllc3x7JHtge0NoZWNrIGNhdGVnb3JpZXN9fV1dICR7KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlfWB9YDtcblxuXHRcdFx0KHNlbGYud3BUZXh0Ym94MSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA9IG5ld1ZhbDtcblx0XHR9O1xuXHRcdGNvbnN0IHdyaXRlU3RvcmFnZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuXHRcdFx0bXcuc3RvcmFnZS5zZXQoc3RvcmFnZUl0ZW1OYW1lLCB2YWwsIDYwNDhlMik7IC8vIDcgZGF5c1xuXHRcdH07XG5cdFx0ZGxnQnV0dG9uc1snWWVzLCBSZW1vdmUnXSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGRvUmVtb3ZlKCk7XG5cdFx0XHRpZiAoKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKCdhdXRvJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHR9O1xuXHRcdGRsZ0J1dHRvbnNbJ05vLCBrZWVwIGl0J10gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0fTtcblx0XHRjb25zdCBfYWRkVG9KUyA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCwgX2U6IEpRdWVyeS5FdmVudCkge1xuXHRcdFx0X2UucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmICgkcGVybWFTYXZlSGludC5oYXNDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkZWw6IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkKHRoaXMpO1xuXHRcdFx0JGVsLm9mZignY2xpY2snKS50ZXh0KCdQbGVhc2Ugd2FpdC4nKTtcblx0XHRcdCRwZXJtYVNhdmVIaW50LmFkZENsYXNzKCd1aS1zdGF0ZS1kaXNhYmxlZCcpO1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0aXRsZTogYFVzZXI6JHttdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyl9L2NvbW1vbi5qc2AsXG5cdFx0XHRcdHN1bW1hcnk6IGAke3NlbGZOYW1lfVNhdmluZyBIb3RDYXQgY29uZmlndXJhdGlvbi5gLFxuXHRcdFx0XHRhcHBlbmR0ZXh0OiAkZWwuZGF0YSgnYWRkVGV4dCcpIGFzIHN0cmluZyxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBlZGl0RG9uZSA9IChlZGl0U3RhdD86IHtlcnJvcj86IHtjb2RlPzogc3RyaW5nOyBpbmZvPzogc3RyaW5nfX0pID0+IHtcblx0XHRcdFx0aWYgKCFlZGl0U3RhdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWRpdFN0YXQuZXJyb3IpIHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdGBVbmFibGUgdG8gc2F2ZSB0byB5b3VyIGNvbW1vbi5qcyB1c2luZyB0aGUgQVBJXFxuJHtlZGl0U3RhdC5lcnJvci5jb2RlfVxcbiR7ZWRpdFN0YXQuZXJyb3IuaW5mb31gLFxuXHRcdFx0XHRcdFx0e3RhZzogJ2hvdENhdENoZWNrJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0LUVycm9yIScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdEb25lLicpO1xuXHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmZhZGVPdXQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHZvaWQgYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbXMpLnRoZW4oZWRpdERvbmUpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogT24gV2lraW1lZGlhIENvbW1vbnMgdGhlcmUgd2VyZSBwZW9wbGUgd2hvIHNhaWQ6XG5cdFx0ICogXCJDYXRlZ29yaXppbmcgd2l0aCBIb3RDYXQgZG9lcyBsZWdpdCBhdXRvbWF0ZWQgcmVtb3ZhbCBvZiB0aGUgY2hlY2stY2F0LW1lc3NhZ2VcIlxuXHRcdCAqIFNvIHdlIGludmVudGVkIGEgZGlhbG9nIHRoYXQgc2hvdWxkIGJlIHJlYWRhYmxlIGJ5IHVzZXJzIGV2ZW4gd2l0aCB2ZXJ5IGZldyBFbmdsaXNoIHNraWxscy5cblx0XHQgKi9cblx0XHRjb25zdCBwcm9tcHQgPSAoKSA9PiB7XG5cdFx0XHQkZGlhbG9nQ2hlY2tTdG9yYWdlID0gJCgnPGlucHV0PicpXG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdGlkOiAnaG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0U3RvcmFnZScsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGlmICgodGhpcyBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5mYWRlSW4oKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JHBlcm1hU2F2ZUhpbnQuZmFkZU91dCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHQkdGV4dEhpbnROb2RlID0gJCgnPHVsPicpO1xuXHRcdFx0JCgnPGxpPicpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJyMnKVxuXHRcdFx0XHRcdFx0LnRleHQoJ0Rpc2FibGUgdGhpcyBmZWF0dXJlLicpXG5cdFx0XHRcdFx0XHQuZGF0YSgnYWRkVGV4dCcsICdcXG53aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0T3B0T3V0ID0gdHJ1ZTsnKVxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIF9hZGRUb0pTKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmRUbygkdGV4dEhpbnROb2RlKTtcblx0XHRcdCQoJzxsaT4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjJylcblx0XHRcdFx0XHRcdC50ZXh0KCdSZW1vdmUge3tjaGVjayBjYXRlZ29yaWVzfX0gd2hlbiBlZGl0aW5nIHVzaW5nIEhvdENhdCB3aXRob3V0IHByb21wdGluZy4nKVxuXHRcdFx0XHRcdFx0LmRhdGEoJ2FkZFRleHQnLCAnXFxud2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdCA9IHRydWU7Jylcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBfYWRkVG9KUylcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kVG8oJHRleHRIaW50Tm9kZSk7XG5cdFx0XHQkcGVybWFTYXZlSGludCA9IGNyZWF0ZU5vdGlmeUFyZWEoXG5cdFx0XHRcdCQoJzxzcGFuPicpLnRleHQoJ1NhdmUgdGhlc2Ugc2V0dGluZyBpbiB5b3VyIGNvbW1vbi5qczogJykuYXBwZW5kKCR0ZXh0SGludE5vZGUpLFxuXHRcdFx0XHQndWktaWNvbi1pbmZvJyxcblx0XHRcdFx0J3VpLXN0YXRlLWhpZ2hsaWdodCdcblx0XHRcdCk7XG5cdFx0XHQkZGlhbG9nID0gJCgnPGRpdj4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdFx0J2ZvbnQtc2l6ZSc6ICcyZW0nLFxuXHRcdFx0XHRcdFx0XHQnbGluZS1oZWlnaHQnOiAnMS44ZW0nLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpLnRleHQoJyB7e2NoZWNrIGNhdGVnb3JpZXN9fSAnKS5jc3Moe1xuXHRcdFx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJyNGOENDQjAnLFxuXHRcdFx0XHRcdFx0XHRcdCd0ZXh0LWRlY29yYXRpb24nOiAnbGluZS10aHJvdWdoICFpbXBvcnRhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+JykudGV4dCgnID8nKVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0Jzxicj4nLFxuXHRcdFx0XHRcdCRkaWFsb2dDaGVja1N0b3JhZ2UsXG5cdFx0XHRcdFx0JCgnPGxhYmVsPicpLmF0dHIoJ2ZvcicsICdob3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRTdG9yYWdlJykudGV4dChcIkRvbid0IGFzayBhZ2FpblwiKSxcblx0XHRcdFx0XHQnPGJyPidcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kKG13LnVzZXIuaXNBbm9uKCkgPyAnJyA6ICRwZXJtYVNhdmVIaW50LmhpZGUoKSk7XG5cdFx0XHQkZGlhbG9nLmRpYWxvZyh7XG5cdFx0XHRcdG1vZGFsOiB0cnVlLFxuXHRcdFx0XHRjbG9zZU9uRXNjYXBlOiB0cnVlLFxuXHRcdFx0XHR0aXRsZTogJ3t7Y2hlY2sgY2F0ZWdvcmllc319ICjiiJIpPycsXG5cdFx0XHRcdHdpZHRoOiA0NTAsXG5cdFx0XHRcdGJ1dHRvbnM6IGRsZ0J1dHRvbnMsXG5cdFx0XHRcdGNsb3NlOiAoKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdFx0JGJvZHkuZmluZCgnI2hvdGNhdENvbW1pdEZvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0b3BlbigpIHtcblx0XHRcdFx0XHRjb25zdCAkYnV0dG9ucyA9ICQodGhpcykucGFyZW50KCkuZmluZCgnLnVpLWRpYWxvZy1idXR0b25wYW5lIGJ1dHRvbicpO1xuXHRcdFx0XHRcdCRidXR0b25zLmVxKDApLmJ1dHRvbih7XG5cdFx0XHRcdFx0XHRpY29uczoge1xuXHRcdFx0XHRcdFx0XHRwcmltYXJ5OiAndWktaWNvbi1jaXJjbGUtY2hlY2snLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkYnV0dG9ucy5lcSgxKS5idXR0b24oe1xuXHRcdFx0XHRcdFx0aWNvbnM6IHtcblx0XHRcdFx0XHRcdFx0cHJpbWFyeTogJ3VpLWljb24tY2FuY2VsJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0aWYgKG5ld1ZhbCAhPT0gKHNlbGYud3BUZXh0Ym94MSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSkge1xuXHRcdFx0aWYgKHdpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQgfHwgc3RvcmFnZUl0ZW0gPT09ICdhdXRvJykge1xuXHRcdFx0XHRkb1JlbW92ZSgpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHByb21wdCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSk7XG5cdC8vIEFkZCBPSy1MaW5rIHRvIHRoZSBjYXRzIHBhbmVsXG5cdGNvbnN0ICRva0xpbmsgPSAkKCc8YT4nKVxuXHRcdC5hdHRyKHtcblx0XHRcdGhyZWY6ICcjJyxcblx0XHRcdHRpdGxlOiAnQ2F0ZWdvcmllcyBhcmUgT0shIEltbWVkaWF0ZWx5IHJlbW92ZSB0aGUgdGVtcGxhdGUuJyxcblx0XHR9KVxuXHRcdC5hcHBlbmQoJzxzPicpXG5cdFx0LnRleHQoJ3t7Q2hlY2sgY2F0ZWdvcmllc319Jyk7XG5cdCRva0xpbmsub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29uc3QgJGVsID0gJCh0aGlzKTtcblx0XHQkZWwub2ZmKCdjbGljaycpO1xuXHRcdGNvbnN0IGRvRWRpdCA9IChyZXN1bHQ6IHN0cmluZykgPT4ge1xuXHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0JGVsLnRleHQoJ0RvaW5nLicpO1xuXHRcdFx0Y29uc3QgdGV4dCA9IHJlc3VsdC5yZXBsYWNlKGNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCwgJycpO1xuXHRcdFx0aWYgKHRleHQgPT09IHJlc3VsdCkge1xuXHRcdFx0XHQkZWwudGV4dCgnVGVtcGxhdGUgbm90IGZvdW5kIScpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdFx0XHR0ZXh0LFxuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdHRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHRcdHN1bW1hcnk6IGAke3NlbGZOYW1lfUNhdGVnb3JpZXMgYXJlIGNoZWNrZWQgYW5kIE9LLiBZb3UgY2FuIGhlbHAgW1tDYXRlZ29yeTpNZWRpYSBuZWVkaW5nIGNhdGVnb3J5IHJldmlld3xyZXZpZXdpbmddXSFgLFxuXHRcdFx0XHRub2NyZWF0ZTogdHJ1ZSxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBlZGl0RG9uZSA9IChlZGl0U3RhdD86IHtlcnJvcj86IHtjb2RlPzogc3RyaW5nOyBpbmZvPzogc3RyaW5nfX0pID0+IHtcblx0XHRcdFx0aWYgKCFlZGl0U3RhdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWRpdFN0YXQuZXJyb3IpIHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdGBVbmFibGUgdG8gcmVtb3ZlIFwiQ2hlY2sgY2F0ZWdvcmllc1wiIHdpdGggdGhlIEFQSVxcbiR7ZWRpdFN0YXQuZXJyb3IuY29kZX1cXG4ke2VkaXRTdGF0LmVycm9yLmluZm99YCxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGFnOiAnaG90Q2F0Q2hlY2snLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0JGVsLnRleHQoJ0VkaXQtRXJyb3IhJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsLnRleHQoJ0VkaXQgRG9uZS4nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0JGJvZHkuZmluZCgnLmNoZWNrY2F0ZWdvcmllcycpLmZhZGVPdXQoKTtcblx0XHRcdH07XG5cdFx0XHQkZWwudGV4dCgnRG9pbmcuLicpO1xuXHRcdFx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtcykudGhlbihlZGl0RG9uZSk7XG5cdFx0fTtcblx0XHQkZWwudGV4dCgnRG9pbmcnKTtcblx0XHR2b2lkICQuYWpheCh7XG5cdFx0XHR1cmw6IG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0JyksXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdHRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvIC9nLCAnXycpLFxuXHRcdFx0fSxcblx0XHRcdGRhdGFUeXBlOiAndGV4dCcsXG5cdFx0XHRlcnJvcjogKCkgPT4ge1xuXHRcdFx0XHQkZWwudGV4dCgnRXJyb3IhJyk7XG5cdFx0XHR9LFxuXHRcdFx0c3VjY2VzczogZG9FZGl0LFxuXHRcdFx0dHlwZTogJ0dFVCcsXG5cdFx0XHRjYWNoZTogZmFsc2UsXG5cdFx0fSk7XG5cdH0pO1xuXHQkKGZ1bmN0aW9uIGxvYWRIb3RDYXRDaGVjaygpIHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHQkYm9keS5maW5kKCcjY2F0bGlua3MnKS5maW5kKCd1bDpmaXJzdCcpLmFwcGVuZCgkKCc8bGk+JykuYXBwZW5kKCRva0xpbmspKTtcblx0fSk7XG59KSgpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgJy4vbW9kdWxlcy9jaGVjayc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9nZXRNZXNzYWdlJztcbmltcG9ydCB7aG90Q2F0TWVzc2FnZXN9IGZyb20gJy4vbW9kdWxlcy9tZXNzYWdlcyc7XG5pbXBvcnQge213QXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQWpheC1iYXNlZCBzaW1wbGUgQ2F0ZWdvcnkgbWFuYWdlci4gQWxsb3dzIGFkZGluZy9yZW1vdmluZy9jaGFuZ2luZyBjYXRlZ29yaWVzIG9uIGEgcGFnZSB2aWV3LlxuICogU3VwcG9ydHMgbXVsdGlwbGUgY2F0ZWdvcnkgY2hhbmdlcywgYXMgd2VsbCBhcyByZWRpcmVjdCBhbmQgZGlzYW1iaWd1YXRpb24gcmVzb2x1dGlvbi4gQWxzb1xuICogcGx1Z3MgaW50byB0aGUgdXBsb2FkIGZvcm0uIFNlYXJjaCBlbmdpbmVzIHRvIHVzZSBmb3IgdGhlIHN1Z2dlc3Rpb24gbGlzdCBhcmUgY29uZmlndXJhYmxlLCBhbmRcbiAqIGNhbiBiZSBzZWxlY3RlZCBpbnRlcmFjdGl2ZWx5LlxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvSGVscDpHYWRnZXQtSG90Q2F0fVxuICogQGF1dGhvciBhdXRob3JzIDxodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0hlbHA6R2FkZ2V0LUhvdENhdC9WZXJzaW9uX2hpc3Rvcnk+XG4gKi9cbi8vIExvYWQgdHJhbnNsYXRpb25zIGxvY2FsbHlcbmhvdENhdE1lc3NhZ2VzKCk7XG5cbi8vIE1haW4gYm9keVxuKGZ1bmN0aW9uIGhvdENhdCgpIHtcblx0Ly8gRG9uJ3QgdXNlIG13LmNvbmZpZy5nZXQoKSBhcyB0aGF0IHRha2VzIGEgY29weSBvZiB0aGUgY29uZmlnLCBhbmQgc28gZG9lc24ndFxuXHQvLyBhY2NvdW50IGZvciB2YWx1ZXMgY2hhbmdpbmcsIGUuZy4gd2dDdXJSZXZpc2lvbklkIGFmdGVyIGEgVkUgZWRpdFxuXHRjb25zdCBjb25mID0gbXcuY29uZmlnLnZhbHVlcztcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9ucyAoaW4gb2xkIElFL09wZXJhIGVsZW1lbnQgaWRzIGJlY29tZSB3aW5kb3cgcHJvcGVydGllcylcblx0aWYgKCh3aW5kb3cuSG90Q2F0ICYmICF3aW5kb3cuSG90Q2F0Lm5vZGVOYW1lKSB8fCBjb25mLndnQWN0aW9uID09PSAnZWRpdCcpIHtcblx0XHRyZXR1cm47IC8vIE5vdCBvbiBlZGl0IG1vZGVcblx0fVxuXHQvLyBJbml0aWFsaXplIE1lZGlhV2lraSBBUElcblx0Y29uc3QgYXBpID0gbXdBcGkoJ0hvdENhdC8zLjAnKTtcblx0Ly8gQ29uZmlndXJhdGlvbiBzdHVmZi5cblx0d2luZG93LkhvdENhdCA9IHtcblx0XHQvLyBUaGUgbGl0dGxlIG1vZGlmaWNhdGlvbiBsaW5rcyBkaXNwbGF5ZWQgYWZ0ZXIgY2F0ZWdvcnkgbmFtZXMuIFUrMjIxMiBpcyBhIG1pbnVzIHNpZ247IFUrMjE5MyBhbmQgVSsyMTkxIGFyZVxuXHRcdC8vIGRvd253YXJkIGFuZCB1cHdhcmQgcG9pbnRpbmcgYXJyb3dzLiBEbyBub3QgdXNlIOKGkyBhbmQg4oaRIGluIHRoZSBjb2RlIVxuXHRcdGxpbmtzOiB7XG5cdFx0XHRjaGFuZ2U6ICcowrEpJyxcblx0XHRcdHJlbW92ZTogJyhcXHUyMjEyKScsXG5cdFx0XHRhZGQ6ICcoKyknLFxuXHRcdFx0cmVzdG9yZTogJyjDlyknLFxuXHRcdFx0dW5kbzogJyjDlyknLFxuXHRcdFx0ZG93bjogJyhcXHUyMTkzKScsXG5cdFx0XHR1cDogJyhcXHUyMTkxKScsXG5cdFx0fSxcblx0XHRjaGFuZ2VUYWc6ICdIb3RDYXQnLFxuXHRcdC8vIFRoZSBIVE1MIGNvbnRlbnQgb2YgdGhlIFwiZW50ZXIgbXVsdGktbW9kZVwiIGxpbmsgYXQgdGhlIGZyb250LlxuXHRcdGFkZG11bHRpOiAnPHNwYW4+KzxzdXA+Kzwvc3VwPjwvc3Bhbj4nLFxuXHRcdC8vIFJldHVybiB0cnVlIHRvIGRpc2FibGUgSG90Q2F0LlxuXHRcdGRpc2FibGU6ICgpID0+IHtcblx0XHRcdGNvbnN0IG5zID0gY29uZi53Z05hbWVzcGFjZU51bWJlcjtcblx0XHRcdGNvbnN0IG5zSWRzID0gY29uZi53Z05hbWVzcGFjZUlkcztcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdG5zIDwgMCB8fFxuXHRcdFx0XHQvLyBTcGVjaWFsIHBhZ2VzOyBTcGVjaWFsOlVwbG9hZCBpcyBoYW5kbGVkIGRpZmZlcmVudGx5XG5cdFx0XHRcdG5zID09PSAxMCB8fFxuXHRcdFx0XHQvLyBUZW1wbGF0ZXNcblx0XHRcdFx0bnMgPT09IDgyOCB8fFxuXHRcdFx0XHQvLyBNb2R1bGUgKEx1YSlcblx0XHRcdFx0bnMgPT09IDggfHxcblx0XHRcdFx0Ly8gTWVkaWFXaWtpXG5cdFx0XHRcdChucyA9PT0gNiAmJiAhY29uZi53Z0FydGljbGVJZCkgfHxcblx0XHRcdFx0Ly8gTm9uLWV4aXN0aW5nIGZpbGUgcGFnZXNcblx0XHRcdFx0KG5zID09PSAyICYmIC9cXC4oanN8Y3NzKSQvLnRlc3QoY29uZi53Z1RpdGxlKSkgfHxcblx0XHRcdFx0Ly8gVXNlciBzY3JpcHRzXG5cdFx0XHRcdChuc0lkcyAmJiAobnMgPT09IG5zSWRzLmNyZWF0b3IgfHwgbnMgPT09IG5zSWRzLnRpbWVkdGV4dCB8fCBucyA9PT0gbnNJZHMuaW5zdGl0dXRpb24pKVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdC8vIEEgcmVnZXhwIG1hdGNoaW5nIGEgdGVtcGxhdGVzIHVzZWQgdG8gbWFyayB1bmNhdGVnb3JpemVkIHBhZ2VzLCBpZiB5b3VyIHdpa2kgZG9lcyBoYXZlIHRoYXQuXG5cdFx0Ly8gSWYgbm90LCBzZXQgaXQgdG8gbnVsbC5cblx0XHR1bmNhdF9yZWdleHA6IC97e1xccypbVXVdbmNhdGVnb3JpemVkXFxzKltefV0qfX1cXHMqKDwhLS0uKj8tLT5cXHMqKT8vZyxcblx0XHQvLyBUaGUgaW1hZ2VzIHVzZWQgZm9yIHRoZSBsaXR0bGUgaW5kaWNhdGlvbiBpY29uLiBTaG91bGQgbm90IG5lZWQgY2hhbmdpbmcuXG5cdFx0ZXhpc3RzWWVzOiAnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi9iL2JlL1BfeWVzLnN2Zy8yMHB4LVBfeWVzLnN2Zy5wbmcnLFxuXHRcdGV4aXN0c05vOiAnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi80LzQyL1Bfbm8uc3ZnLzIwcHgtUF9uby5zdmcucG5nJyxcblx0XHQvLyBhIGxpc3Qgb2YgY2F0ZWdvcmllcyB3aGljaCBjYW4gYmUgcmVtb3ZlZCBieSByZW1vdmluZyBhIHRlbXBsYXRlXG5cdFx0Ly8ga2V5OiB0aGUgY2F0ZWdvcnkgd2l0aG91dCBuYW1lc3BhY2Vcblx0XHQvLyB2YWx1ZTogQSByZWdleHAgbWF0Y2hpbmcgdGhlIHRlbXBsYXRlIG5hbWUsIGFnYWluIHdpdGhvdXQgbmFtZXNwYWNlXG5cdFx0Ly8gSWYgeW91IGRvbid0IGhhdmUgdGhpcyBhdCB5b3VyIHdpa2ksIG9yIGRvbid0IHdhbnQgdGhpcywgc2V0IGl0IHRvIGFuIGVtcHR5IG9iamVjdCB7fS5cblx0XHR0ZW1wbGF0ZV9jYXRlZ29yaWVzOiB7fSxcblx0XHQvLyBPdmVycmlkZSB0aGUgZGVjaXNpb24gb2Ygd2hldGhlciBIb3RDYXQgc2hvdWxkIGhlbHAgdXNlcnMgYnkgYXV0b21hdGljYWxseVxuXHRcdC8vIGNhcGl0YWxpc2luZyB0aGUgdGl0bGUgaW4gdGhlIHVzZXIgaW5wdXQgdGV4dCBpZiB0aGUgd2lraSBoYXMgY2FzZS1zZW5zaXRpdmUgcGFnZSBuYW1lcy5cblx0XHQvLyBCYXNpY2FsbHksIHRoaXMgd2lsbCBtYWtlIGFuIEFQSSBxdWVyeSB0byBjaGVjayB0aGUgTWVkaWFXaWtpIGNvbmZpZ3VyYXRpb24gYW5kIEhvdENhdCB0aGVuIHNldHNcblx0XHQvLyB0aGlzIHRvIHRydWUgZm9yIG1vc3Qgd2lraXMsIGFuZCB0byBmYWxzZSBvbiBXaWt0aW9uYXJ5LlxuXHRcdC8vXG5cdFx0Ly8gWW91IGNhbiBzZXQgdGhpcyBkaXJlY3RseSBpZiB0aGVyZSBpcyBhIHByb2JsZW0gd2l0aCBpdC4gRm9yIGV4YW1wbGUsIEdlb3JnaWFuIFdpa2lwZWRpYSAoa2F3aWtpKSxcblx0XHQvLyBpcyBrbm93biB0byBoYXZlIGRpZmZlcmVudCBjYXBpdGFsaXNhdGlvbiBsb2dpYyBiZXR3ZWVuIE1lZGlhV2lraSBQSFAgYW5kIEphdmFTY3JpcHQuIEFzIHN1Y2gsIGF1dG9tYXRpY1xuXHRcdC8vIGNhc2UgY2hhbmdlcyBpbiBKYXZhU2NyaXB0IGJ5IEhvdENhdCB3b3VsZCBiZSB3cm9uZy5cblx0XHRjYXBpdGFsaXplUGFnZU5hbWVzOiBudWxsLFxuXHRcdC8vIElmIHVwbG9hZF9kaXNhYmxlZCBpcyB0cnVlLCBIb3RDYXQgd2lsbCBub3QgYmUgdXNlZCBvbiB0aGUgVXBsb2FkIGZvcm0uXG5cdFx0dXBsb2FkX2Rpc2FibGVkOiBmYWxzZSxcblx0XHQvLyBTaW5nbGUgcmVndWxhciBleHByZXNzaW9uIG1hdGNoaW5nIGJsYWNrbGlzdGVkIGNhdGVnb3JpZXMgdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBvclxuXHRcdC8vIGFkZGVkIHVzaW5nIEhvdENhdC4gRm9yIGluc3RhbmNlIC9cXGJzdHVicz8kLyAoYW55IGNhdGVnb3J5IGVuZGluZyB3aXRoIHRoZSB3b3JkIFwic3R1YlwiXG5cdFx0Ly8gb3IgXCJzdHVic1wiKSwgb3IgLyhcXGJzdHVicz8kKXxcXGJtYWludGVuYW5jZVxcYi8gKHN0dWIgY2F0ZWdvcmllcyBhbmQgYW55IGNhdGVnb3J5IHdpdGggdGhlXG5cdFx0Ly8gd29yZCBcIm1haW50ZW5hbmNlXCIgaW4gaXRzIHRpdGxlLlxuXHRcdGJsYWNrbGlzdDogbnVsbCxcblx0XHQvLyBTdHVmZiBjaGFuZ2VhYmxlIGJ5IHVzZXJzOlxuXHRcdC8vIEJhY2tncm91bmQgZm9yIGNoYW5nZWQgY2F0ZWdvcmllcyBpbiBtdWx0aS1lZGl0IG1vZGUuIERlZmF1bHQgaXMgYSB2ZXJ5IGxpZ2h0IHNhbG1vbiBwaW5rLlxuXHRcdGJnX2NoYW5nZWQ6ICcjRkNBJyxcblx0XHQvLyBJZiB0cnVlLCBIb3RDYXQgd2lsbCBuZXZlciBhdXRvbWF0aWNhbGx5IHN1Ym1pdCBjaGFuZ2VzLiBIb3RDYXQgd2lsbCBvbmx5IG9wZW4gYW4gZWRpdCBwYWdlIHdpdGhcblx0XHQvLyB0aGUgY2hhbmdlczsgdXNlcnMgbXVzdCBhbHdheXMgc2F2ZSBleHBsaWNpdGx5LlxuXHRcdG5vX2F1dG9jb21taXQ6IGZhbHNlLFxuXHRcdC8vIElmIHRydWUsIHRoZSBcImNhdGVnb3J5IGRlbGV0aW9uXCIgbGluayBcIigtKVwiIHdpbGwgbmV2ZXIgc2F2ZSBhdXRvbWF0aWNhbGx5IGJ1dCBhbHdheXMgc2hvdyBhblxuXHRcdC8vIGVkaXQgcGFnZSB3aGVyZSB0aGUgdXNlciBoYXMgdG8gc2F2ZSB0aGUgZWRpdCBtYW51YWxseS4gSXMgZmFsc2UgYnkgZGVmYXVsdCBiZWNhdXNlIHRoYXQncyB0aGVcblx0XHQvLyB0cmFkaXRpb25hbCBiZWhhdmlvci4gVGhpcyBzZXR0aW5nIG92ZXJyaWRlcyBub19hdXRvY29tbWl0IGZvciBcIigtKVwiIGxpbmtzLlxuXHRcdGRlbF9uZWVkc19kaWZmOiBmYWxzZSxcblx0XHQvLyBUaW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgSG90Q2F0IHdhaXRzIGFmdGVyIGEga2V5c3Ryb2tlIGJlZm9yZSBtYWtpbmcgYSByZXF1ZXN0IHRvIHRoZVxuXHRcdC8vIHNlcnZlciB0byBnZXQgc3VnZ2VzdGlvbnMuXG5cdFx0c3VnZ2VzdF9kZWxheTogMTAwMCxcblx0XHQvLyBEZWZhdWx0IHdpZHRoLCBpbiBjaGFyYWN0ZXJzLCBvZiB0aGUgdGV4dCBpbnB1dCBmaWVsZC5cblx0XHRlZGl0Ym94X3dpZHRoOiA0MCxcblx0XHQvLyBPbmUgb2YgdGhlIGVuZ2luZV9uYW1lcyBhYm92ZSwgdG8gYmUgdXNlZCBhcyB0aGUgZGVmYXVsdCBzdWdnZXN0aW9uIGVuZ2luZS5cblx0XHRzdWdnZXN0aW9uczogJ2NvbWJpbmVkJyxcblx0XHQvLyBJZiB0cnVlLCBhbHdheXMgdXNlIHRoZSBkZWZhdWx0IGVuZ2luZSwgYW5kIG5ldmVyIGRpc3BsYXkgYSBzZWxlY3Rvci5cblx0XHRmaXhlZF9zZWFyY2g6IGZhbHNlLFxuXHRcdC8vIElmIGZhbHNlLCBkbyBub3QgZGlzcGxheSB0aGUgXCJ1cFwiIGFuZCBcImRvd25cIiBsaW5rc1xuXHRcdHVzZV91cF9kb3duOiB0cnVlLFxuXHRcdC8vIERlZmF1bHQgbGlzdCBzaXplXG5cdFx0bGlzdFNpemU6IDEwLFxuXHRcdC8vIElmIHRydWUsIHNpbmdsZSBjYXRlZ29yeSBjaGFuZ2VzIGFyZSBtYXJrZWQgYXMgbWlub3IgZWRpdHMuIElmIGZhbHNlLCB0aGV5J3JlIG5vdC5cblx0XHRzaW5nbGVfbWlub3I6IHRydWUsXG5cdFx0Ly8gSWYgdHJ1ZSwgbmV2ZXIgYWRkIGEgcGFnZSB0byB0aGUgdXNlcidzIHdhdGNobGlzdC4gSWYgZmFsc2UsIHBhZ2VzIGdldCBhZGRlZCB0byB0aGUgd2F0Y2hsaXN0IGlmXG5cdFx0Ly8gdGhlIHVzZXIgaGFzIHRoZSBcIkFkZCBwYWdlcyBJIGVkaXQgdG8gbXkgd2F0Y2hsaXN0XCIgb3IgdGhlIFwiQWRkIHBhZ2VzIEkgY3JlYXRlIHRvIG15IHdhdGNobGlzdFwiXG5cdFx0Ly8gb3B0aW9ucyBpbiBoaXMgb3IgaGVyIHByZWZlcmVuY2VzIHNldC5cblx0XHRkb250X2FkZF90b193YXRjaGxpc3Q6IGZhbHNlLFxuXHRcdHNob3J0Y3V0czogbnVsbCxcblx0XHRhZGRTaG9ydGN1dHM6IChtYXApID0+IHtcblx0XHRcdGxldCBfYTtcblx0XHRcdGlmICghbWFwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdChfYSA9IHdpbmRvdy5Ib3RDYXQpLnNob3J0Y3V0cyB8fCAoX2Euc2hvcnRjdXRzID0ge30pO1xuXHRcdFx0Zm9yIChsZXQgayBpbiBtYXApIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKG1hcCwgaykgfHwgdHlwZW9mIGsgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHYgPSBtYXBba107XG5cdFx0XHRcdGlmICh0eXBlb2YgdiAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRrID0gay50cmltKCk7XG5cdFx0XHRcdHYgPSB2LnRyaW0oKTtcblx0XHRcdFx0aWYgKGsubGVuZ3RoID09PSAwIHx8IHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2luZG93LkhvdENhdC5zaG9ydGN1dHNba10gPSB2O1xuXHRcdFx0fVxuXHRcdH0sXG5cdH07XG5cdGNvbnN0IEhDID0gd2luZG93LkhvdENhdDtcblx0Ly8gTW9yZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gV2UgaGF2ZSBhIGZldyBwbGFjZXMgd2hlcmUgd2UgdGVzdCBmb3IgdGhlIGJyb3dzZXI6IG9uY2UgZm9yXG5cdC8vIFNhZmFyaSA8IDMuMCwgYW5kIHR3aWNlIGZvciBXZWJLaXQgKENocm9tZSBvciBTYWZhcmksIGFueSB2ZXJzaW9ucylcblx0Y29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG5cdGNvbnN0IGlzX3dlYmtpdCA9IC9hcHBsZXdlYmtpdFxcL1xcZCsvLnRlc3QodWEpICYmICF1YS5pbmNsdWRlcygnc3Bvb2ZlcicpO1xuXHRsZXQgY2F0X3ByZWZpeCA9IG51bGw7XG5cdGxldCBub1N1Z2dlc3Rpb25zID0gZmFsc2U7XG5cdC8vIE5vIGZ1cnRoZXIgY2hhbmdlcyBzaG91bGQgYmUgbmVjZXNzYXJ5IGhlcmUuXG5cdC8vIFRoZSBmb2xsb3dpbmcgcmVndWxhciBleHByZXNzaW9uIHN0cmluZ3MgYXJlIHVzZWQgd2hlbiBzZWFyY2hpbmcgZm9yIGNhdGVnb3JpZXMgaW4gd2lraXRleHQuXG5cdGNvbnN0IHdpa2lUZXh0QmxhbmsgPSAnW1xcXFx0IF9cXFxceEEwXFxcXHUxNjgwXFxcXHUxODBFXFxcXHUyMDAwLVxcXFx1MjAwQVxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MjAyRlxcXFx1MjA1RlxcXFx1MzAwMF0rJztcblx0Y29uc3Qgd2lraVRleHRCbGFua1JFID0gbmV3IFJlZ0V4cCh3aWtpVGV4dEJsYW5rLCAnZycpO1xuXHQvLyBSZWdleHAgZm9yIGhhbmRsaW5nIGJsYW5rcyBpbnNpZGUgYSBjYXRlZ29yeSB0aXRsZSBvciBuYW1lc3BhY2UgbmFtZS5cblx0Ly8gU2VlIHtAbGluayBodHRwOi8vc3ZuLndpa2ltZWRpYS5vcmcvdmlld3ZjL21lZGlhd2lraS90cnVuay9waGFzZTMvaW5jbHVkZXMvVGl0bGUucGhwP3JldmlzaW9uPTEwNDA1MSZ2aWV3PW1hcmt1cCNsMjcyMn1cblx0Ly8gU2VlIGFsc28ge0BsaW5rIGh0dHA6Ly93d3cuZmlsZWZvcm1hdC5pbmZvL2luZm8vdW5pY29kZS9jYXRlZ29yeS9acy9saXN0Lmh0bX1cblx0Ly8gICBNZWRpYVdpa2kgY29sbGFwc2VzIHNldmVyYWwgY29udGlndW91cyBibGFua3MgaW5zaWRlIGEgcGFnZSB0aXRsZSB0byBvbmUgc2luZ2xlIGJsYW5rLiBJdCBhbHNvIHJlcGxhY2UgYVxuXHQvLyBudW1iZXIgb2Ygc3BlY2lhbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYnkgc2ltcGxlIGJsYW5rcy4gQW5kIGZpbmFsbHksIGJsYW5rcyBhcmUgdHJlYXRlZCBhcyB1bmRlcnNjb3Jlcy5cblx0Ly8gVGhlcmVmb3JlLCB3aGVuIGxvb2tpbmcgZm9yIHBhZ2UgdGl0bGVzIGluIHdpa2l0ZXh0LCB3ZSBtdXN0IGhhbmRsZSBhbGwgdGhlc2UgY2FzZXMuXG5cdC8vICAgTm90ZTogd2UgX2RvXyBpbmNsdWRlIHRoZSBob3Jpem9udGFsIHRhYiBpbiB0aGUgYWJvdmUgbGlzdCwgZXZlbiB0aG91Z2ggdGhlIE1lZGlhV2lraSBzb2Z0d2FyZSBmb3Igc29tZSByZWFzb25cblx0Ly8gYXBwZWFycyB0byBub3QgaGFuZGxlIGl0LiBUaGUgemVyby13aWR0aCBzcGFjZSBcXHUyMDBCIGlzIF9ub3RfIGhhbmRsZWQgYXMgYSBzcGFjZSBpbnNpZGUgdGl0bGVzIGJ5IE1XLlxuXHRjb25zdCB3aWtpVGV4dEJsYW5rT3JCaWRpID0gJ1tcXFxcdCBfXFxcXHhBMFxcXFx1MTY4MFxcXFx1MTgwRVxcXFx1MjAwMC1cXFxcdTIwMEJcXFxcdTIwMEVcXFxcdTIwMEZcXFxcdTIwMjgtXFxcXHUyMDJGXFxcXHUyMDVGXFxcXHUzMDAwXSonO1xuXHQvLyBXaGl0ZXNwYWNlIHJlZ2V4cCBmb3IgaGFuZGxpbmcgd2hpdGVzcGFjZSBiZXR3ZWVuIGxpbmsgY29tcG9uZW50cy4gSW5jbHVkaW5nIHRoZSBob3Jpem9udGFsIHRhYiwgYnV0IG5vdCBcXG5cXHJcXGZcXHY6XG5cdC8vIGEgbGluayBtdXN0IGJlIG9uIG9uZSBzaW5nbGUgbGluZS5cblx0Ly8gICBNZWRpYVdpa2kgYWxzbyByZW1vdmVzIFVuaWNvZGUgYmlkaSBvdmVycmlkZSBjaGFyYWN0ZXJzIGluIHBhZ2UgdGl0bGVzIChhbmQgbmFtZXNwYWNlIG5hbWVzKSBjb21wbGV0ZWx5LlxuXHQvLyBUaGlzIGlzICpub3QqIGhhbmRsZWQsIGFzIGl0IHdvdWxkIHJlcXVpcmUgdXMgdG8gYWxsb3cgYW55IG9mIFtcXHUyMDBFXFx1MjAwRlxcdTIwMkEtXFx1MjAyRV0gYmV0d2VlbiBhbnkgdHdvXG5cdC8vIGNoYXJhY3RlcnMgaW5zaWRlIGEgY2F0ZWdvcnkgbGluay4gSXQgX2NvdWxkXyBiZSBkb25lIHRob3VnaC4uLiBXZSBfZG9fIGhhbmRsZSBzdHJhbmdlIHNwYWNlcywgaW5jbHVkaW5nIHRoZVxuXHQvLyB6ZXJvLXdpZHRoIHNwYWNlIFxcdTIwMEIsIGFuZCBiaWRpIG92ZXJyaWRlcyBiZXR3ZWVuIHRoZSBjb21wb25lbnRzIG9mIGEgY2F0ZWdvcnkgbGluayAoYWRqYWNlbnQgdG8gdGhlIGNvbG9uLFxuXHQvLyBvciBhZGphY2VudCB0byBhbmQgaW5zaWRlIG9mIFwiW1tcIiBhbmQgXCJdXVwiKS5cblx0Ly8gRmlyc3QgYXV0by1sb2NhbGl6ZSB0aGUgcmVnZXhwcyBmb3IgdGhlIGNhdGVnb3J5IGFuZCB0aGUgdGVtcGxhdGUgbmFtZXNwYWNlcy5cblx0Y29uc3QgZm9ybWF0dGVkTmFtZXNwYWNlcyA9IGNvbmYud2dGb3JtYXR0ZWROYW1lc3BhY2VzO1xuXHRjb25zdCBuYW1lc3BhY2VJZHMgPSBjb25mLndnTmFtZXNwYWNlSWRzO1xuXHRjb25zdCBhdXRvTG9jYWxpemUgPSAobmFtZXNwYWNlTnVtYmVyLCBmYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IGNyZWF0ZVJlZ2V4cFN0ciA9IChuYW1lKSA9PiB7XG5cdFx0XHRpZiAoIW5hbWUgfHwgbmFtZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHJlZ2V4X25hbWUgPSAnJztcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBpbml0aWFsID0gbmFtZS5jaGFyQXQoaSk7XG5cdFx0XHRcdGNvbnN0IGxsID0gaW5pdGlhbC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRjb25zdCB1bCA9IGluaXRpYWwudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0cmVnZXhfbmFtZSArPSBsbCA9PT0gdWwgPyBpbml0aWFsIDogYFske2xsfSR7dWx9XWA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVnZXhfbmFtZS5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csICdcXFxcJDEnKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayk7XG5cdFx0fTtcblx0XHRmYWxsYmFjayA9IGZhbGxiYWNrLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgY2Fub25pY2FsID0gZm9ybWF0dGVkTmFtZXNwYWNlc1tTdHJpbmcobmFtZXNwYWNlTnVtYmVyKV0udG9Mb3dlckNhc2UoKTtcblx0XHRsZXQgcmVnZXhwID0gY3JlYXRlUmVnZXhwU3RyKGNhbm9uaWNhbCk7XG5cdFx0aWYgKGZhbGxiYWNrICYmIGNhbm9uaWNhbCAhPT0gZmFsbGJhY2spIHtcblx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGZhbGxiYWNrKX1gO1xuXHRcdH1cblx0XHRpZiAobmFtZXNwYWNlSWRzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGNhdF9uYW1lIGluIG5hbWVzcGFjZUlkcykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dHlwZW9mIGNhdF9uYW1lID09PSAnc3RyaW5nJyAmJlxuXHRcdFx0XHRcdGNhdF9uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGNhbm9uaWNhbCAmJlxuXHRcdFx0XHRcdGNhdF9uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGZhbGxiYWNrICYmXG5cdFx0XHRcdFx0bmFtZXNwYWNlSWRzW2NhdF9uYW1lXSA9PT0gbmFtZXNwYWNlTnVtYmVyXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGNhdF9uYW1lKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZWdleHA7XG5cdH07XG5cdEhDLmNhdGVnb3J5X2Nhbm9uaWNhbCA9IGZvcm1hdHRlZE5hbWVzcGFjZXNbJzE0J107XG5cdEhDLmNhdGVnb3J5X3JlZ2V4cCA9IGF1dG9Mb2NhbGl6ZSgxNCwgJ2NhdGVnb3J5Jyk7XG5cdGlmIChmb3JtYXR0ZWROYW1lc3BhY2VzWycxMCddKSB7XG5cdFx0SEMudGVtcGxhdGVfcmVnZXhwID0gYXV0b0xvY2FsaXplKDEwLCAndGVtcGxhdGUnKTtcblx0fVxuXHQvLyBVdGlsaXR5IGZ1bmN0aW9ucy4gWWVzLCB0aGlzIGR1cGxpY2F0ZXMgc29tZSBmdW5jdGlvbmFsaXR5IHRoYXQgYWxzbyBleGlzdHMgaW4gb3RoZXIgcGxhY2VzLCBidXRcblx0Ly8gdG8ga2VlcCB0aGlzIHdob2xlIHN0dWZmIGluIGEgc2luZ2xlIGZpbGUgbm90IGRlcGVuZGluZyBvbiBhbnkgb3RoZXIgb24td2lraSBKYXZhU2NyaXB0cywgd2UgcmUtZG9cblx0Ly8gdGhlc2UgZmV3IG9wZXJhdGlvbnMgaGVyZS5cblx0Y29uc3QgbWFrZSA9IChhcmcsIGxpdGVyYWwpID0+IHtcblx0XHRpZiAoIWFyZykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBsaXRlcmFsID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXJnKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJnKTtcblx0fTtcblx0Y29uc3QgcGFyYW0gPSAobmFtZSwgdXJpKSA9PiB7XG5cdFx0dXJpIHx8PSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuXHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgWyY/XSR7bmFtZX09KFteJiNdKilgKTtcblx0XHRjb25zdCBtID0gcmUuZXhlYyh1cmkpO1xuXHRcdGlmIChtICYmIG0ubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChtWzFdKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IHRpdGxlID0gKGhyZWYpID0+IHtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBzY3JpcHQgPSBgJHtjb25mLndnU2NyaXB0fT9gO1xuXHRcdGlmIChcblx0XHRcdGhyZWYuaW5kZXhPZihzY3JpcHQpID09PSAwIHx8XG5cdFx0XHRocmVmLmluZGV4T2YoY29uZi53Z1NlcnZlciArIHNjcmlwdCkgPT09IDAgfHxcblx0XHRcdChjb25mLndnU2VydmVyLnNsaWNlKDAsIDIpID09PSAnLy8nICYmXG5cdFx0XHRcdGhyZWYuaW5kZXhPZihkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArIGNvbmYud2dTZXJ2ZXIgKyBzY3JpcHQpID09PSAwKVxuXHRcdCkge1xuXHRcdFx0Ly8gaHJlZj1cIi9pbmRleC5waHA/dGl0bGU9Li4uXCJcblx0XHRcdHJldHVybiBwYXJhbSgndGl0bGUnLCBocmVmKTtcblx0XHR9XG5cdFx0Ly8gaHJlZj1cIi93aWtpLy4uLlwiXG5cdFx0bGV0IHByZWZpeCA9IGNvbmYud2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKTtcblx0XHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkpIHtcblx0XHRcdHByZWZpeCA9IGNvbmYud2dTZXJ2ZXIgKyBwcmVmaXg7XG5cdFx0fSAvLyBGdWxseSBleHBhbmRlZCBVUkw/XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpICYmIHByZWZpeC5zbGljZSgwLCAyKSA9PT0gJy8vJykge1xuXHRcdFx0cHJlZml4ID0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKyBwcmVmaXg7XG5cdFx0fSAvLyBQcm90b2NvbC1yZWxhdGl2ZSB3Z1NlcnZlcj9cblx0XHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkgPT09IDApIHtcblx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaHJlZi5zbGljZShwcmVmaXgubGVuZ3RoKSk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCBoYXNDbGFzcyA9ICh7Y2xhc3NOYW1lfSwgbmFtZSkgPT4ge1xuXHRcdHJldHVybiBgICR7Y2xhc3NOYW1lfSBgLmluY2x1ZGVzKGAgJHtuYW1lfSBgKTtcblx0fTtcblx0Y29uc3QgY2FwaXRhbGl6ZSA9IChzdHIpID0+IHtcblx0XHRpZiAoIXN0ciB8fCBzdHIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gc3RyO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdH07XG5cdGNvbnN0IHdpa2lQYWdlUGF0aCA9IChwYWdlTmFtZSkgPT4ge1xuXHRcdHJldHVybiBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCBlbmNvZGVVUklDb21wb25lbnQocGFnZU5hbWUpLnJlcGxhY2UoLyUzQS9nLCAnOicpLnJlcGxhY2UoLyUyRi9nLCAnLycpKTtcblx0fTtcblx0Y29uc3QgZXNjYXBlUkUgPSAoc3RyKSA9PiB7XG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8oWyQoKSorLj9bXFxcXFxcXV5dKS9nLCAnXFxcXCQxJyk7XG5cdH07XG5cdGNvbnN0IHN1YnN0aXR1dGVGYWN0b3J5ID0gKG9wdGlvbnMpID0+IHtcblx0XHRvcHRpb25zIHx8PSB7fTtcblx0XHRjb25zdCBsZWFkID0gb3B0aW9ucy5pbmRpY2F0b3IgfHwgJyQnO1xuXHRcdGNvbnN0IGluZGljYXRvciA9IGVzY2FwZVJFKGxlYWQpO1xuXHRcdGNvbnN0IGxicmFjZSA9IGVzY2FwZVJFKG9wdGlvbnMubGJyYWNlIHx8ICd7Jyk7XG5cdFx0Y29uc3QgcmJyYWNlID0gZXNjYXBlUkUob3B0aW9ucy5yYnJhY2UgfHwgJ30nKTtcblx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoXG5cdFx0XHQvLyAkJFxuXHRcdFx0YCg/OiR7aW5kaWNhdG9yfSgke2luZGljYXRvcn0pKXxgICtcblx0XHRcdFx0Ly8gJDAsICQxXG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oXFxcXGQrKSl8YCArXG5cdFx0XHRcdC8vICR7a2V5fVxuXHRcdFx0XHRgKD86JHtpbmRpY2F0b3J9KD86JHtsYnJhY2V9KFteJHtsYnJhY2V9JHtyYnJhY2V9XSspJHtyYnJhY2V9KSl8YCArXG5cdFx0XHRcdC8vICRrZXkgKG9ubHkgaWYgZmlyc3QgY2hhciBhZnRlciAkIGlzIG5vdCAkLCBkaWdpdCwgb3IgeyApXG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oPyEoPzpbJHtpbmRpY2F0b3J9JHtsYnJhY2V9XXxcXFxcZCkpKFxcXFxTKz8pXFxcXGIpYCxcblx0XHRcdCdnJ1xuXHRcdCk7XG5cdFx0Ly8gUmVwbGFjZSAkMSwgJDIsIG9yICR7a2V5MX0sICR7a2V5Mn0sIG9yICRrZXkxLCAka2V5MiBieSB2YWx1ZXMgZnJvbSBtYXAuICQkIGlzIHJlcGxhY2VkIGJ5IGEgc2luZ2xlICQuXG5cdFx0cmV0dXJuIChzdHIsIG1hcCkgPT4ge1xuXHRcdFx0aWYgKCFtYXApIHtcblx0XHRcdFx0cmV0dXJuIHN0cjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHIucmVwbGFjZShyZSwgKG1hdGNoLCBwcmVmaXgsIGlkeCwga2V5LCBhbHBoYSkgPT4ge1xuXHRcdFx0XHRpZiAocHJlZml4ID09PSBsZWFkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGxlYWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgayA9IGFscGhhIHx8IGtleSB8fCBpZHg7XG5cdFx0XHRcdGNvbnN0IHJlcGxhY2VtZW50ID0gdHlwZW9mIG1hcFtrXSA9PT0gJ2Z1bmN0aW9uJyA/IG1hcFtrXShtYXRjaCwgaykgOiBtYXBba107XG5cdFx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZW1lbnQgPT09ICdzdHJpbmcnID8gcmVwbGFjZW1lbnQgOiByZXBsYWNlbWVudCB8fCBtYXRjaDtcblx0XHRcdH0pO1xuXHRcdH07XG5cdH07XG5cdGNvbnN0IHJlcGxhY2VTaG9ydGN1dHMgPSAoKCkgPT4ge1xuXHRcdGNvbnN0IHJlcGxhY2VIYXNoID0gc3Vic3RpdHV0ZUZhY3Rvcnkoe1xuXHRcdFx0aW5kaWNhdG9yOiAnIycsXG5cdFx0XHRsYnJhY2U6ICdbJyxcblx0XHRcdHJicmFjZTogJ10nLFxuXHRcdH0pO1xuXHRcdHJldHVybiAoc3RyLCBtYXApID0+IHtcblx0XHRcdGNvbnN0IHMgPSByZXBsYWNlSGFzaChzdHIsIG1hcCk7XG5cdFx0XHRyZXR1cm4gSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA/IGNhcGl0YWxpemUocykgOiBzO1xuXHRcdH07XG5cdH0pKCk7XG5cdC8vIFRleHQgbW9kaWZpY2F0aW9uXG5cdGNvbnN0IGZpbmRDYXRzUkUgPSBuZXcgUmVnRXhwKFxuXHRcdGBcXFxcW1xcXFxbJHt3aWtpVGV4dEJsYW5rT3JCaWRpfSg/OiR7SEMuY2F0ZWdvcnlfcmVnZXhwfSkke3dpa2lUZXh0QmxhbmtPckJpZGl9OlteXFxcXF1dK1xcXFxdXFxcXF1gLFxuXHRcdCdnJ1xuXHQpO1xuXHRjb25zdCByZXBsYWNlQnlCbGFua3MgPSAobWF0Y2gpID0+IHtcblx0XHRyZXR1cm4gbWF0Y2gucmVwbGFjZSgvKFxcc3xcXFMpL2csICcgJyk7XG5cdH07IC8vIC8uLyBkb2Vzbid0IG1hdGNoIGxpbmVicmVha3MuIC8oXFxzfFxcUykvIGRvZXMuXG5cdGNvbnN0IGZpbmRfY2F0ZWdvcnkgPSAod2lraXRleHQsIGNhdGVnb3J5LCBvbmNlKSA9PiB7XG5cdFx0bGV0IGNhdF9yZWdleCA9IG51bGw7XG5cdFx0aWYgKEhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbY2F0ZWdvcnldKSB7XG5cdFx0XHRjYXRfcmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXHtcXFxceyR7d2lraVRleHRCbGFua09yQmlkaX0oJHtIQy50ZW1wbGF0ZV9yZWdleHB9KD89JHt3aWtpVGV4dEJsYW5rT3JCaWRpfTopKT8ke3dpa2lUZXh0QmxhbmtPckJpZGl9KD86JHtIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW2NhdGVnb3J5XX0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfShcXFxcfC4qPyk/XFxcXH1cXFxcfWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgY2F0X25hbWUgPSBlc2NhcGVSRShjYXRlZ29yeSk7XG5cdFx0XHRjb25zdCBpbml0aWFsID0gY2F0X25hbWUuc2xpY2UoMCwgMSk7XG5cdFx0XHRjYXRfcmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcWyR7d2lraVRleHRCbGFua09yQmlkaX0oJHtIQy5jYXRlZ29yeV9yZWdleHB9KSR7d2lraVRleHRCbGFua09yQmlkaX06JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSR7XG5cdFx0XHRcdFx0aW5pdGlhbCA9PT0gJ1xcXFwnIHx8ICFIQy5jYXBpdGFsaXplUGFnZU5hbWVzXG5cdFx0XHRcdFx0XHQ/IGluaXRpYWxcblx0XHRcdFx0XHRcdDogYFske2luaXRpYWwudG9VcHBlckNhc2UoKX0ke2luaXRpYWwudG9Mb3dlckNhc2UoKX1dYFxuXHRcdFx0XHR9JHtjYXRfbmFtZS5zbGljZSgxKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayl9JHt3aWtpVGV4dEJsYW5rT3JCaWRpfShcXFxcfC4qPyk/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKG9uY2UpIHtcblx0XHRcdHJldHVybiBjYXRfcmVnZXguZXhlYyh3aWtpdGV4dCk7XG5cdFx0fVxuXHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgJyhcXFxcc3xcXFxcUykqPzwvbm8nLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0Y29uc3QgY29waWVkdGV4dCA9IHdpa2l0ZXh0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCByZXBsYWNlQnlCbGFua3MpLnJlcGxhY2Uobm93aWtpUmVnZXgsIHJlcGxhY2VCeUJsYW5rcyk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gW107XG5cdFx0bGV0IGN1cnJfbWF0Y2ggPSBudWxsO1xuXHRcdHdoaWxlICgoY3Vycl9tYXRjaCA9IGNhdF9yZWdleC5leGVjKGNvcGllZHRleHQpKSAhPT0gbnVsbCkge1xuXHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0ge1xuXHRcdFx0XHRtYXRjaDogY3Vycl9tYXRjaCxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJlc3VsdC5yZSA9IGNhdF9yZWdleDtcblx0XHRyZXR1cm4gcmVzdWx0OyAvLyBBbiBhcnJheSBjb250YWluaW5nIGFsbCBtYXRjaGVzLCB3aXRoIHBvc2l0aW9ucywgaW4gcmVzdWx0WyBpIF0ubWF0Y2hcblx0fTtcblx0bGV0IGludGVybGFuZ3VhZ2VSRSA9IG51bGw7XG5cdGNvbnN0IGNoYW5nZV9jYXRlZ29yeSA9ICh3aWtpdGV4dCwgdG9SZW1vdmUsIHRvQWRkLCBrZXksIGlzX2hpZGRlbikgPT4ge1xuXHRcdGNvbnN0IGZpbmRfaW5zZXJ0aW9ucG9pbnQgPSAoX3dpa2l0ZXh0KSA9PiB7XG5cdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsICcoXFxcXHN8XFxcXFMpKj88L25vJywgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdFx0Y29uc3QgY29waWVkdGV4dCA9IF93aWtpdGV4dFxuXHRcdFx0XHQucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csIHJlcGxhY2VCeUJsYW5rcylcblx0XHRcdFx0LnJlcGxhY2Uobm93aWtpUmVnZXgsIHJlcGxhY2VCeUJsYW5rcyk7XG5cdFx0XHQvLyBTZWFyY2ggaW4gY29waWVkdGV4dCB0byBhdm9pZCB0aGF0IHdlIGluc2VydCBpbnNpZGUgYW4gSFRNTCBjb21tZW50IG9yIGEgbm93aWtpIFwiZWxlbWVudFwiLlxuXHRcdFx0bGV0IGluZGV4ID0gLTE7XG5cdFx0XHRmaW5kQ2F0c1JFLmxhc3RJbmRleCA9IDA7XG5cdFx0XHR3aGlsZSAoZmluZENhdHNSRS5leGVjKGNvcGllZHRleHQpICE9PSBudWxsKSB7XG5cdFx0XHRcdGluZGV4ID0gZmluZENhdHNSRS5sYXN0SW5kZXg7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaW5kZXggPCAwKSB7XG5cdFx0XHRcdC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpbnRlcmxhbmd1YWdlIGxpbmsuLi5cblx0XHRcdFx0bGV0IG1hdGNoID0gbnVsbDtcblx0XHRcdFx0aW50ZXJsYW5ndWFnZVJFXG5cdFx0XHRcdFx0PyAobWF0Y2ggPSBpbnRlcmxhbmd1YWdlUkUuZXhlYyhjb3BpZWR0ZXh0KSlcblx0XHRcdFx0XHQ6IC8vIEFwcHJveGltYXRpb24gd2l0aG91dCBBUEk6IGludGVybGFuZ3VhZ2UgbGlua3Mgc3RhcnQgd2l0aCAyIHRvIDMgbG93ZXIgY2FzZSBsZXR0ZXJzLCBvcHRpb25hbGx5IGZvbGxvd2VkIGJ5XG5cdFx0XHRcdFx0XHQvLyBhIHNlcXVlbmNlIG9mIGdyb3VwcyBjb25zaXN0aW5nIG9mIGEgZGFzaCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBsb3dlciBjYXNlIGxldHRlcnMuIEV4Y2VwdGlvbnMgYXJlIFwic2ltcGxlXCJcblx0XHRcdFx0XHRcdC8vIGFuZCBcInRva2lwb25hXCIuXG5cdFx0XHRcdFx0XHQobWF0Y2ggPSAvKChefFxcblxccj8pKFxcW1xcW1xccyooKFthLXpdezIsM30oLVthLXpdKykqKXxzaW1wbGV8dG9raXBvbmEpXFxzKjpbXlxcXV0rXV1cXHMqKSkrJC8uZXhlYyhcblx0XHRcdFx0XHRcdFx0Y29waWVkdGV4dFxuXHRcdFx0XHRcdFx0KSk7XG5cdFx0XHRcdGlmIChtYXRjaCkge1xuXHRcdFx0XHRcdCh7aW5kZXh9ID0gbWF0Y2gpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aWR4OiBpbmRleCxcblx0XHRcdFx0XHRvbkNhdDogZmFsc2UsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpZHg6IGluZGV4LFxuXHRcdFx0XHRvbkNhdDogaW5kZXggPj0gMCxcblx0XHRcdH07XG5cdFx0fTtcblx0XHRjb25zdCBzdW1tYXJ5ID0gW107XG5cdFx0Y29uc3QgbmFtZVNwYWNlID0gSEMuY2F0ZWdvcnlfY2Fub25pY2FsO1xuXHRcdGNvbnN0IC8vIFBvc2l0aW9uIG9mIHJlbW92ZWQgY2F0ZWdvcnk7XG5cdFx0XHRrZXlDaGFuZ2UgPSB0b1JlbW92ZSAmJiB0b0FkZCAmJiB0b1JlbW92ZSA9PT0gdG9BZGQgJiYgdG9BZGQubGVuZ3RoID4gMDtcblx0XHRsZXQgbWF0Y2hlcztcblx0XHRsZXQgY2F0X3BvaW50ID0gLTE7XG5cdFx0aWYgKGtleSkge1xuXHRcdFx0a2V5ID0gYHwke2tleX1gO1xuXHRcdH1cblx0XHQvLyBSZW1vdmVcblx0XHRpZiAodG9SZW1vdmUgJiYgdG9SZW1vdmUubGVuZ3RoID4gMCkge1xuXHRcdFx0bWF0Y2hlcyA9IGZpbmRfY2F0ZWdvcnkod2lraXRleHQsIHRvUmVtb3ZlKTtcblx0XHRcdGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0ZXJyb3I6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9ub3RGb3VuZCcsIHRvUmVtb3ZlKSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGxldCBiZWZvcmUgPSB3aWtpdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBtYXRjaGVzWzBdLm1hdGNoLmluZGV4KSk7XG5cdFx0XHRsZXQgYWZ0ZXIgPSB3aWtpdGV4dC5zbGljZShNYXRoLm1heCgwLCBtYXRjaGVzWzBdLm1hdGNoLmluZGV4ICsgbWF0Y2hlc1swXS5tYXRjaFswXS5sZW5ndGgpKTtcblx0XHRcdGlmIChtYXRjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIGFsbCBvY2N1cnJlbmNlcyBpbiBhZnRlclxuXHRcdFx0XHRtYXRjaGVzLnJlLmxhc3RJbmRleCA9IDA7XG5cdFx0XHRcdGFmdGVyID0gYWZ0ZXIucmVwbGFjZShtYXRjaGVzLnJlLCAnJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRvQWRkICYmIC8vIG5hbWVTcGFjZSA9IG1hdGNoZXNbIDAgXS5tYXRjaFsgMSBdIHx8IG5hbWVTcGFjZTsgQ2Fub25pY2FsIG5hbWVzcGFjZSBzaG91bGQgYmUgYWx3YXlzIHByZWZlcnJlZFxuXHRcdFx0XHRrZXkgPT09IG51bGxcblx0XHRcdCkge1xuXHRcdFx0XHRbLCAsIGtleV0gPSBtYXRjaGVzWzBdLm1hdGNoO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhlIGNhdGVnb3J5IGtleSwgaWYgYW55LlxuXHRcdFx0Ly8gUmVtb3ZlIHdoaXRlc3BhY2UgKHByb3Blcmx5KTogc3RyaXAgd2hpdGVzcGFjZSwgYnV0IG9ubHkgdXAgdG8gdGhlIG5leHQgbGluZSBmZWVkLlxuXHRcdFx0Ly8gSWYgd2UgdGhlbiBoYXZlIHR3byBsaW5lZmVlZHMgaW4gYSByb3csIHJlbW92ZSBvbmUuIE90aGVyd2lzZSwgaWYgd2UgaGF2ZSB0d28gbm9uLVxuXHRcdFx0Ly8gd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLCBpbnNlcnQgYSBibGFuay5cblx0XHRcdGxldCBpID0gYmVmb3JlLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+PSAwICYmIGJlZm9yZS5jaGFyQXQoaSkgIT09ICdcXG4nICYmIGJlZm9yZS5zbGljZShpLCBpICsgMSkuc2VhcmNoKC9cXHMvKSA+PSAwKSB7XG5cdFx0XHRcdGktLTtcblx0XHRcdH1cblx0XHRcdGxldCBqID0gMDtcblx0XHRcdHdoaWxlIChqIDwgYWZ0ZXIubGVuZ3RoICYmIGFmdGVyLmNoYXJBdChqKSAhPT0gJ1xcbicgJiYgYWZ0ZXIuc2xpY2UoaiwgaiArIDEpLnNlYXJjaCgvXFxzLykgPj0gMCkge1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGkgPj0gMCAmJlxuXHRcdFx0XHRiZWZvcmUuY2hhckF0KGkpID09PSAnXFxuJyAmJlxuXHRcdFx0XHQoYWZ0ZXIubGVuZ3RoID09PSAwIHx8IChqIDwgYWZ0ZXIubGVuZ3RoICYmIGFmdGVyLmNoYXJBdChqKSA9PT0gJ1xcbicpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGktLTtcblx0XHRcdH1cblx0XHRcdGJlZm9yZSA9IGkgPj0gMCA/IGJlZm9yZS5zbGljZSgwLCBNYXRoLm1heCgwLCBpICsgMSkpIDogJyc7XG5cdFx0XHRhZnRlciA9IGogPCBhZnRlci5sZW5ndGggPyBhZnRlci5zbGljZShNYXRoLm1heCgwLCBqKSkgOiAnJztcblx0XHRcdGlmIChcblx0XHRcdFx0YmVmb3JlLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0YmVmb3JlLnNsaWNlKE1hdGgubWF4KDAsIGJlZm9yZS5sZW5ndGggLSAxKSkuc2VhcmNoKC9cXFMvKSA+PSAwICYmXG5cdFx0XHRcdGFmdGVyLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0YWZ0ZXIuc2xpY2UoMCwgMSkuc2VhcmNoKC9cXFMvKSA+PSAwXG5cdFx0XHQpIHtcblx0XHRcdFx0YmVmb3JlICs9ICcgJztcblx0XHRcdH1cblx0XHRcdGNhdF9wb2ludCA9IGJlZm9yZS5sZW5ndGg7XG5cdFx0XHRpZiAoY2F0X3BvaW50ID09PSAwICYmIGFmdGVyLmxlbmd0aCA+IDAgJiYgYWZ0ZXIuc2xpY2UoMCwgMSkgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGFmdGVyID0gYWZ0ZXIuc2xpY2UoMSk7XG5cdFx0XHR9XG5cdFx0XHR3aWtpdGV4dCA9IGJlZm9yZSArIGFmdGVyO1xuXHRcdFx0aWYgKCFrZXlDaGFuZ2UpIHtcblx0XHRcdFx0aWYgKEhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbdG9SZW1vdmVdKSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJywgdG9SZW1vdmUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X3JlbW92ZWQnLCB0b1JlbW92ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gQWRkXG5cdFx0aWYgKHRvQWRkICYmIHRvQWRkLmxlbmd0aCA+IDApIHtcblx0XHRcdG1hdGNoZXMgPSBmaW5kX2NhdGVnb3J5KHdpa2l0ZXh0LCB0b0FkZCk7XG5cdFx0XHRpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Ly8gQWxyZWFkeSBleGlzdHNcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGVycm9yOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfZXhpc3RzJywgdG9BZGQpLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0bGV0IG9uQ2F0ID0gZmFsc2U7XG5cdFx0XHRpZiAoY2F0X3BvaW50IDwgMCkge1xuXHRcdFx0XHRjb25zdCBwb2ludCA9IGZpbmRfaW5zZXJ0aW9ucG9pbnQod2lraXRleHQpO1xuXHRcdFx0XHRjYXRfcG9pbnQgPSBwb2ludC5pZHg7XG5cdFx0XHRcdCh7b25DYXR9ID0gcG9pbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b25DYXQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbmV3Y2F0c3RyaW5nID0gYFtbJHtuYW1lU3BhY2V9OiR7dG9BZGR9JHtrZXkgfHwgJyd9XV1gO1xuXHRcdFx0aWYgKGNhdF9wb2ludCA+PSAwKSB7XG5cdFx0XHRcdGNvbnN0IHN1ZmZpeCA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGNhdF9wb2ludCkpO1xuXHRcdFx0XHR3aWtpdGV4dCA9XG5cdFx0XHRcdFx0d2lraXRleHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgY2F0X3BvaW50KSkgK1xuXHRcdFx0XHRcdChjYXRfcG9pbnQgPiAwID8gJ1xcbicgOiAnJykgK1xuXHRcdFx0XHRcdG5ld2NhdHN0cmluZyArXG5cdFx0XHRcdFx0KG9uQ2F0ID8gJycgOiAnXFxuJyk7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IHN1ZmZpeC5sZW5ndGggPiAwICYmIHN1ZmZpeC5zbGljZSgwLCAxKSAhPT0gJ1xcbicgPyBgXFxuJHtzdWZmaXh9YCA6IHN1ZmZpeDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh3aWtpdGV4dC5sZW5ndGggPiAwICYmIHdpa2l0ZXh0LnNsaWNlKC0xLCB3aWtpdGV4dC5sZW5ndGggLSAxICsgMSkgIT09ICdcXG4nKSB7XG5cdFx0XHRcdFx0d2lraXRleHQgKz0gJ1xcbic7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2lraXRleHQgKz0gKHdpa2l0ZXh0Lmxlbmd0aCA+IDAgPyAnXFxuJyA6ICcnKSArIG5ld2NhdHN0cmluZztcblx0XHRcdH1cblx0XHRcdGlmIChrZXlDaGFuZ2UpIHtcblx0XHRcdFx0bGV0IGsgPSBrZXkgfHwgJyc7XG5cdFx0XHRcdGlmIChrLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRrID0gay5zbGljZSgxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnLCB0b0FkZCwgayk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9hZGRlZCcsIHRvQWRkKTtcblx0XHRcdH1cblx0XHRcdGlmIChIQy51bmNhdF9yZWdleHAgJiYgIWlzX2hpZGRlbikge1xuXHRcdFx0XHRjb25zdCB0eHQgPSB3aWtpdGV4dC5yZXBsYWNlKEhDLnVuY2F0X3JlZ2V4cCwgJycpOyAvLyBSZW1vdmUgXCJ1bmNhdFwiIHRlbXBsYXRlc1xuXHRcdFx0XHRpZiAodHh0Lmxlbmd0aCAhPT0gd2lraXRleHQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0d2lraXRleHQgPSB0eHQ7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy11bmNhdF9yZW1vdmVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdGVycm9yOiBudWxsLFxuXHRcdH07XG5cdH07XG5cdC8vIFRoZSByZWFsIEhvdENhdCBVSVxuXHRjb25zdCBldnRLZXlzID0gKHtjdHJsS2V5LCBtZXRhS2V5LCBzaGlmdEtleX0pID0+IHtcblx0XHRsZXQgY29kZSA9IDA7XG5cdFx0aWYgKGN0cmxLZXkpIHtcblx0XHRcdC8vIEFsbCBtb2Rlcm4gYnJvd3NlcnNcblx0XHRcdC8vIEN0cmwtY2xpY2sgc2VlbXMgdG8gYmUgb3ZlcmxvYWRlZCBpbiBGRi9NYWMgKGl0IG9wZW5zIGEgcG9wLXVwIG1lbnUpLCBzbyB0cmVhdCBjbWQtY2xpY2tcblx0XHRcdC8vIGFzIGEgY3RybC1jbGljaywgdG9vLlxuXHRcdFx0aWYgKGN0cmxLZXkgfHwgbWV0YUtleSkge1xuXHRcdFx0XHRjb2RlIHx8PSAxO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNoaWZ0S2V5KSB7XG5cdFx0XHRcdGNvZGUgfHw9IDI7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjb2RlO1xuXHR9O1xuXHRjb25zdCBldnRLaWxsID0gKGUpID0+IHtcblx0XHRpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGxldCBjYXRMaW5lID0gbnVsbDsgLy8gdHJ1ZSBpZiBNZWRpYVdpa2kgc2VydmVzIHRoZSBuZXcgVUwtTEkgRE9NIGZvciBjYXRlZ29yaWVzXG5cdGxldCBvblVwbG9hZCA9IGZhbHNlO1xuXHRsZXQgZWRpdG9ycyA9IFtdO1xuXHRsZXQgY29tbWl0QnV0dG9uID0gbnVsbDtcblx0bGV0IGNvbW1pdEZvcm0gPSBudWxsO1xuXHRsZXQgbXVsdGlTcGFuID0gbnVsbDtcblx0bGV0IHBhZ2VUZXh0ID0gbnVsbDtcblx0bGV0IHBhZ2VUaW1lID0gbnVsbDtcblx0bGV0IHBhZ2VXYXRjaGVkID0gZmFsc2U7XG5cdGxldCB3YXRjaENyZWF0ZSA9IGZhbHNlO1xuXHRsZXQgd2F0Y2hFZGl0ID0gZmFsc2U7XG5cdGxldCBtaW5vckVkaXRzID0gZmFsc2U7XG5cdGxldCBlZGl0VG9rZW4gPSBudWxsO1xuXHRsZXQgaXNfcnRsID0gZmFsc2U7XG5cdGxldCBzZXJ2ZXJUaW1lID0gbnVsbDtcblx0bGV0IGxhc3RSZXZJZCA9IG51bGw7XG5cdGxldCBwYWdlVGV4dFJldklkID0gbnVsbDtcblx0bGV0IGNvbmZsaWN0aW5nVXNlciA9IG51bGw7XG5cdGxldCBuZXdET00gPSBmYWxzZTtcblx0Y29uc3QgVU5DSEFOR0VEID0gMDtcblx0Y29uc3QgT1BFTiA9IDE7IC8vIE9wZW4sIGJ1dCBubyBpbnB1dCB5ZXRcblx0Y29uc3QgQ0hBTkdFX1BFTkRJTkcgPSAyOyAvLyBPcGVuLCBzb21lIGlucHV0IG1hZGVcblx0Y29uc3QgQ0hBTkdFRCA9IDM7XG5cdGNvbnN0IERFTEVURUQgPSA0O1xuXHRjb25zdCBzZXRQYWdlID0gKGRhdGEpID0+IHtcblx0XHRsZXQgc3RhcnRUaW1lID0gbnVsbDtcblx0XHRpZiAoZGF0YSAmJiBkYXRhLnF1ZXJ5KSB7XG5cdFx0XHRpZiAoZGF0YS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhLnF1ZXJ5LnBhZ2VzO1xuXHRcdFx0XHRpZiAocGFnZSkge1xuXHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9ucyAmJiBwYWdlLnJldmlzaW9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHQvLyBSZXZpc2lvbnMgYXJlIHNvcnRlZCBieSByZXZpc2lvbiBJRCwgaGVuY2UgWzBdIGlzIHRoZSBvbmUgd2UgYXNrZWQgZm9yLCBhbmQgcG9zc2libHkgdGhlcmUncyBhIFsxXSBpZiB3ZSdyZVxuXHRcdFx0XHRcdFx0Ly8gbm90IG9uIHRoZSBsYXRlc3QgcmV2aXNpb24gKGVkaXQgY29uZmxpY3RzIGFuZCBzdWNoKS5cblx0XHRcdFx0XHRcdHBhZ2VUZXh0ID0gcGFnZS5yZXZpc2lvbnNbMF0uc2xvdHNbJ21haW4nXS5jb250ZW50O1xuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcCkge1xuXHRcdFx0XHRcdFx0XHRwYWdlVGltZSA9IHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcC5yZXBsYWNlKC9cXEQvZywgJycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zWzBdLnJldmlkKSB7XG5cdFx0XHRcdFx0XHRcdHBhZ2VUZXh0UmV2SWQgPSBwYWdlLnJldmlzaW9uc1swXS5yZXZpZDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9ucy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdGNvbmZsaWN0aW5nVXNlciA9IHBhZ2UucmV2aXNpb25zWzFdLnVzZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLmxhc3RyZXZpZCkge1xuXHRcdFx0XHRcdFx0bGFzdFJldklkID0gcGFnZS5sYXN0cmV2aWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLnN0YXJ0dGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0XHRzdGFydFRpbWUgPSBwYWdlLnN0YXJ0dGltZXN0YW1wLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBhZ2VXYXRjaGVkID0gdHlwZW9mIHBhZ2Uud2F0Y2hlZCA9PT0gJ3N0cmluZyc7XG5cdFx0XHRcdFx0aWYgKGRhdGEucXVlcnkudG9rZW5zKSB7XG5cdFx0XHRcdFx0XHRlZGl0VG9rZW4gPSBkYXRhLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLmxhbmdsaW5rcyAmJiAoIWRhdGFbJ3F1ZXJ5LWNvbnRpbnVlJ10gfHwgIWRhdGFbJ3F1ZXJ5LWNvbnRpbnVlJ10ubGFuZ2xpbmtzKSkge1xuXHRcdFx0XHRcdFx0Ly8gV2UgaGF2ZSBpbnRlcmxhbmd1YWdlIGxpbmtzLCBhbmQgd2UgZ290IHRoZW0gYWxsLlxuXHRcdFx0XHRcdFx0bGV0IHJlID0gJyc7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2UubGFuZ2xpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdHJlICs9IChpID4gMCA/ICd8JyA6ICcnKSArIHBhZ2UubGFuZ2xpbmtzW2ldLmxhbmcucmVwbGFjZSgvKFskKCkqKy4/XFxcXF5dKS9nLCAnXFxcXCQxJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocmUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRpbnRlcmxhbmd1YWdlUkUgPSBuZXcgUmVnRXhwKGAoKF58XFxcXG5cXFxccj8pKFxcXFxbXFxcXFtcXFxccyooJHtyZX0pXFxcXHMqOlteXFxcXF1dK1xcXFxdXFxcXF1cXFxccyopKSskYCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBTaXRlaW5mb1xuXHRcdFx0aWYgKGRhdGEucXVlcnkuZ2VuZXJhbCkge1xuXHRcdFx0XHRpZiAoZGF0YS5xdWVyeS5nZW5lcmFsLnRpbWUgJiYgIXN0YXJ0VGltZSkge1xuXHRcdFx0XHRcdHN0YXJ0VGltZSA9IGRhdGEucXVlcnkuZ2VuZXJhbC50aW1lLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBSZXNvdXJjZUxvYWRlcidzIEpTUGFyc2VyIGRvZXNuJ3QgbGlrZSAuY2FzZSwgc28gb3ZlcnJpZGUgZXNsaW50LlxuXHRcdFx0XHRcdEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPSBkYXRhLnF1ZXJ5LmdlbmVyYWwuY2FzZSA9PT0gJ2ZpcnN0LWxldHRlcic7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNlcnZlclRpbWUgPSBzdGFydFRpbWU7XG5cdFx0XHQvLyBVc2VyaW5mb1xuXHRcdFx0aWYgKGRhdGEucXVlcnkudXNlcmluZm8gJiYgZGF0YS5xdWVyeS51c2VyaW5mby5vcHRpb25zKSB7XG5cdFx0XHRcdHdhdGNoQ3JlYXRlID0gIUhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCAmJiBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMud2F0Y2hjcmVhdGlvbnMgPT09ICcxJztcblx0XHRcdFx0d2F0Y2hFZGl0ID0gIUhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCAmJiBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMud2F0Y2hkZWZhdWx0ID09PSAnMSc7XG5cdFx0XHRcdG1pbm9yRWRpdHMgPSBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMubWlub3JkZWZhdWx0ID09PSAxO1xuXHRcdFx0XHQvLyBJZiB0aGUgdXNlciBoYXMgdGhlIFwiQWxsIGVkaXRzIGFyZSBtaW5vclwiIHByZWZlcmVuY2UgZW5hYmxlZCwgd2Ugc2hvdWxkIGhvbm9yIHRoYXRcblx0XHRcdFx0Ly8gZm9yIHNpbmdsZSBjYXRlZ29yeSBjaGFuZ2VzLCBubyBtYXR0ZXIgd2hhdCB0aGUgc2l0ZSBjb25maWd1cmF0aW9uIGlzLlxuXHRcdFx0XHRpZiAobWlub3JFZGl0cykge1xuXHRcdFx0XHRcdEhDLnNpbmdsZV9taW5vciA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGxldCBzYXZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXHRjb25zdCBpbml0aWF0ZUVkaXQgPSAoZG9FZGl0LCBmYWlsdXJlKSA9PiB7XG5cdFx0aWYgKHNhdmVJblByb2dyZXNzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNhdmVJblByb2dyZXNzID0gdHJ1ZTtcblx0XHRsZXQgb2xkQnV0dG9uU3RhdGU7XG5cdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0b2xkQnV0dG9uU3RhdGUgPSBjb21taXRCdXR0b24uZGlzYWJsZWQ7XG5cdFx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBmYWlsID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRcdHNhdmVJblByb2dyZXNzID0gZmFsc2U7XG5cdFx0XHRpZiAoY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRcdGNvbW1pdEJ1dHRvbi5kaXNhYmxlZCA9IG9sZEJ1dHRvblN0YXRlO1xuXHRcdFx0fVxuXHRcdFx0ZmFpbHVyZS5hcHBseSh0aGlzLCBhcmdzKTtcblx0XHR9O1xuXHRcdC8vIE11c3QgdXNlIEFqYXggaGVyZSB0byBnZXQgdGhlIHVzZXIgb3B0aW9ucyBhbmQgdGhlIGVkaXQgdG9rZW4uXG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRyYXdjb250aW51ZTogJycsXG5cdFx0XHR0aXRsZXM6IGNvbmYud2dQYWdlTmFtZSxcblx0XHRcdHByb3A6IFsnaW5mbycsICdyZXZpc2lvbnMnLCAnbGFuZ2xpbmtzJ10sXG5cdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCcsICdpZHMnLCAndXNlciddLFxuXHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0cnZsaW1pdDogJzInLFxuXHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRydnN0YXJ0aWQ6IGNvbmYud2dDdXJSZXZpc2lvbklkLFxuXHRcdFx0bGxsaW1pdDogJzUwMCcsXG5cdFx0XHRtZXRhOiBbJ3NpdGVpbmZvJywgJ3VzZXJpbmZvJywgJ3Rva2VucyddLFxuXHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0dWlwcm9wOiBbJ29wdGlvbnMnXSxcblx0XHR9O1xuXHRcdGFwaS5nZXQocGFyYW1zKVxuXHRcdFx0LmRvbmUoKGRhdGEpID0+IHtcblx0XHRcdFx0c2V0UGFnZShkYXRhKTtcblx0XHRcdFx0ZG9FZGl0KGZhaWwpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKCh7c3RhdHVzLCBzdGF0dXNUZXh0fSkgPT4ge1xuXHRcdFx0XHRmYWlsKGAke3N0YXR1c30gJHtzdGF0dXNUZXh0fWApO1xuXHRcdFx0fSk7XG5cdH07XG5cdGNvbnN0IG11bHRpQ2hhbmdlTXNnID0gKGNvdW50KSA9PiB7XG5cdFx0cmV0dXJuIGdldE1lc3NhZ2UoJ21lc3NhZ2VzLW11bHRpX2NoYW5nZScsIFN0cmluZyhjb3VudCkpO1xuXHR9O1xuXHRjb25zdCBjdXJyZW50VGltZXN0YW1wID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdFx0bGV0IHRzID0gU3RyaW5nKG5vdy5nZXRVVENGdWxsWWVhcigpKTtcblx0XHRjb25zdCB0d28gPSAocykgPT4ge1xuXHRcdFx0cmV0dXJuIHMuc2xpY2UoLTIpO1xuXHRcdH07XG5cdFx0dHMgKz1cblx0XHRcdHR3byhgMCR7bm93LmdldFVUQ01vbnRoKCkgKyAxfWApICtcblx0XHRcdHR3byhgMCR7bm93LmdldFVUQ0RhdGUoKX1gKSArXG5cdFx0XHR0d28oYDAwJHtub3cuZ2V0VVRDSG91cnMoKX1gKSArXG5cdFx0XHR0d28oYDAwJHtub3cuZ2V0VVRDTWludXRlcygpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENTZWNvbmRzKCl9YCk7XG5cdFx0cmV0dXJuIHRzO1xuXHR9O1xuXHRjb25zdCBwZXJmb3JtQ2hhbmdlcyA9IChmYWlsdXJlLCBzaW5nbGVFZGl0b3IpID0+IHtcblx0XHRpZiAocGFnZVRleHQgPT09IG51bGwpIHtcblx0XHRcdGZhaWx1cmUoZ2V0TWVzc2FnZSgnbWVzc2FnZXMtbXVsdGlfZXJyb3InKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIENyZWF0ZSBhIGZvcm0gYW5kIHN1Ym1pdCBpdC4gV2UgZG9uJ3QgdXNlIHRoZSBlZGl0IEFQSSAoYXBpLnBocD9hY3Rpb249ZWRpdCkgYmVjYXVzZVxuXHRcdC8vIChhKSBzZW5zaWJseSByZXBvcnRpbmcgYmFjayBlcnJvcnMgbGlrZSBlZGl0IGNvbmZsaWN0cyBpcyBhbHdheXMgYSBoYXNzbGUsIGFuZFxuXHRcdC8vIChiKSB3ZSB3YW50IHRvIHNob3cgYSBkaWZmIGZvciBtdWx0aS1lZGl0cyBhbnl3YXksIGFuZFxuXHRcdC8vIChjKSB3ZSB3YW50IHRvIHRyaWdnZXIgb25zdWJtaXQgZXZlbnRzLCBhbGxvd2luZyB1c2VyIGNvZGUgdG8gaW50ZXJjZXB0IHRoZSBlZGl0LlxuXHRcdC8vIFVzaW5nIHRoZSBmb3JtLCB3ZSBjYW4gZG8gKGIpIGFuZCAoYyksIGFuZCB3ZSBnZXQgKGEpIGZvciBmcmVlLiBBbmQsIG9mIGNvdXJzZSwgdXNpbmcgdGhlIGZvcm1cblx0XHQvLyBhdXRvbWF0aWNhbGx5IHJlbG9hZHMgdGhlIHBhZ2Ugd2l0aCB0aGUgdXBkYXRlZCBjYXRlZ29yaWVzIG9uIGEgc3VjY2Vzc2Z1bCBzdWJtaXQsIHdoaWNoXG5cdFx0Ly8gd2Ugd291bGQgaGF2ZSB0byBkbyBleHBsaWNpdGx5IGlmIHdlIHVzZWQgdGhlIGVkaXQgQVBJLlxuXHRcdGxldCBhY3Rpb247XG5cdFx0Ly8gTm9ybWFsbHksIHdlIGRvbid0IGhhdmUgdG8gY2FyZSBhYm91dCBlZGl0IGNvbmZsaWN0cy4gSWYgc29tZSBvdGhlciB1c2VyIGVkaXRlZCB0aGUgcGFnZSBpbiB0aGUgbWVhbnRpbWUsIHRoZVxuXHRcdC8vIHNlcnZlciB3aWxsIHRha2UgY2FyZSBvZiBpdCBhbmQgbWVyZ2UgdGhlIGVkaXQgYXV0b21hdGljYWxseSBvciBwcmVzZW50IGFuIGVkaXQgY29uZmxpY3Qgc2NyZWVuLiBIb3dldmVyLCB0aGVcblx0XHQvLyBzZXJ2ZXIgc3VwcHJlc3NlcyBlZGl0IGNvbmZsaWN0cyB3aXRoIG9uZXNlbGYuIEhlbmNlLCBpZiB3ZSBoYXZlIGEgY29uZmxpY3QsIGFuZCB0aGUgY29uZmxpY3RpbmcgdXNlciBpcyB0aGVcblx0XHQvLyBjdXJyZW50IHVzZXIsIHRoZW4gd2Ugc2V0IHRoZSBcIm9sZGlkXCIgdmFsdWUgYW5kIHN3aXRjaCB0byBkaWZmLCB3aGljaCBnaXZlcyB0aGUgXCJ5b3UgYXJlIGVkaXRpbmcgYW4gb2xkIHZlcnNpb247XG5cdFx0Ly8gaWYgeW91IHNhdmUsIGFueSBtb3JlIHJlY2VudCBjaGFuZ2VzIHdpbGwgYmUgbG9zdFwiIHNjcmVlbi5cblx0XHRjb25zdCBzZWxmRWRpdENvbmZsaWN0ID1cblx0XHRcdCgobGFzdFJldklkICE9PSBudWxsICYmIGxhc3RSZXZJZCAhPT0gY29uZi53Z0N1clJldmlzaW9uSWQpIHx8XG5cdFx0XHRcdChwYWdlVGV4dFJldklkICE9PSBudWxsICYmIHBhZ2VUZXh0UmV2SWQgIT09IGNvbmYud2dDdXJSZXZpc2lvbklkKSkgJiZcblx0XHRcdGNvbmZsaWN0aW5nVXNlciAmJlxuXHRcdFx0Y29uZmxpY3RpbmdVc2VyID09PSBjb25mLndnVXNlck5hbWU7XG5cdFx0aWYgKHNpbmdsZUVkaXRvciAmJiAhc2luZ2xlRWRpdG9yLm5vQ29tbWl0ICYmICFIQy5ub19hdXRvY29tbWl0ICYmIGVkaXRUb2tlbiAmJiAhc2VsZkVkaXRDb25mbGljdCkge1xuXHRcdFx0Ly8gSWYgd2UgZG8gaGF2ZSBhbiBlZGl0IGNvbmZsaWN0LCBidXQgbm90IHdpdGggb3Vyc2VsZiwgdGhhdCdzIG5vIHJlYXNvbiBub3QgdG8gYXR0ZW1wdCB0byBzYXZlOiB0aGUgc2VydmVyIHNpZGUgbWF5IGFjdHVhbGx5IGJlIGFibGUgdG9cblx0XHRcdC8vIG1lcmdlIHRoZSBjaGFuZ2VzLiBXZSBqdXN0IG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgd2UgZG8gcHJlc2VudCBhIGRpZmYgdmlldyBpZiBpdCdzIGEgc2VsZiBlZGl0IGNvbmZsaWN0LlxuXHRcdFx0Y29tbWl0Rm9ybS53cEVkaXRUb2tlbi52YWx1ZSA9IGVkaXRUb2tlbjtcblx0XHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0ud3BEaWZmO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BTYXZlJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0ud3BTYXZlO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCByZXN1bHQgPSB7XG5cdFx0XHR0ZXh0OiBwYWdlVGV4dCxcblx0XHR9O1xuXHRcdGNvbnN0IGNoYW5nZWQgPSBbXTtcblx0XHRjb25zdCBhZGRlZCA9IFtdO1xuXHRcdGNvbnN0IGRlbGV0ZWQgPSBbXTtcblx0XHRjb25zdCB0b0VkaXQgPSBzaW5nbGVFZGl0b3IgPyBbc2luZ2xlRWRpdG9yXSA6IGVkaXRvcnM7XG5cdFx0bGV0IGVkaXQ7XG5cdFx0bGV0IGk7XG5cdFx0bGV0IGVycm9yID0gbnVsbDtcblx0XHRsZXQgY2hhbmdlcyA9IDA7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvRWRpdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZWRpdCA9IHRvRWRpdFtpXTtcblx0XHRcdGlmIChlZGl0LnN0YXRlID09PSBDSEFOR0VEKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShcblx0XHRcdFx0XHRyZXN1bHQudGV4dCxcblx0XHRcdFx0XHRlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50Q2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50S2V5LFxuXHRcdFx0XHRcdGVkaXQuY3VycmVudEhpZGRlblxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoIXJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRcdGNoYW5nZXMrKztcblx0XHRcdFx0XHRpZiAoIWVkaXQub3JpZ2luYWxDYXRlZ29yeSB8fCBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRhZGRlZFthZGRlZC5sZW5ndGhdID0gZWRpdC5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNoYW5nZWRbY2hhbmdlZC5sZW5ndGhdID0ge1xuXHRcdFx0XHRcdFx0XHRmcm9tOiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0XHRcdHRvOiBlZGl0LmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGVkaXQuc3RhdGUgPT09IERFTEVURUQgJiYgZWRpdC5vcmlnaW5hbENhdGVnb3J5ICYmIGVkaXQub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShyZXN1bHQudGV4dCwgZWRpdC5vcmlnaW5hbENhdGVnb3J5LCBudWxsLCBudWxsLCBmYWxzZSk7XG5cdFx0XHRcdGlmICghcmVzdWx0LmVycm9yKSB7XG5cdFx0XHRcdFx0Y2hhbmdlcysrO1xuXHRcdFx0XHRcdGRlbGV0ZWRbZGVsZXRlZC5sZW5ndGhdID0gZWRpdC5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChlcnJvciAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gRG8gbm90IGNvbW1pdCBpZiB0aGVyZSB3ZXJlIGVycm9yc1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybS53cFNhdmU7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cERpZmYnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gRmlsbCBpbiB0aGUgZm9ybSBhbmQgc3VibWl0IGl0XG5cdFx0Y29tbWl0Rm9ybS53cE1pbm9yZWRpdC5jaGVja2VkID0gbWlub3JFZGl0cztcblx0XHRjb21taXRGb3JtLndwV2F0Y2h0aGlzLmNoZWNrZWQgPSAoIWNvbmYud2dBcnRpY2xlSWQgJiYgd2F0Y2hDcmVhdGUpIHx8IHdhdGNoRWRpdCB8fCBwYWdlV2F0Y2hlZDtcblx0XHRpZiAoY29uZi53Z0FydGljbGVJZCB8fCAhIXNpbmdsZUVkaXRvcikge1xuXHRcdFx0Ly8gUHJlcGFyZSBjaGFuZ2UtdGFnIHNhdmVcblx0XHRcdGlmIChhY3Rpb24gJiYgYWN0aW9uLnZhbHVlID09PSAnd3BTYXZlJykge1xuXHRcdFx0XHRpZiAoSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybS53cENoYW5nZVRhZ3MudmFsdWUgPSBIQy5jaGFuZ2VUYWc7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbW1pdEZvcm0ud3BBdXRvU3VtbWFyeS52YWx1ZSA9IEhDLmNoYW5nZVRhZztcblx0XHRcdH1cblx0XHRcdGlmIChjaGFuZ2VzID09PSAxKSB7XG5cdFx0XHRcdGlmIChyZXN1bHQuc3VtbWFyeSAmJiByZXN1bHQuc3VtbWFyeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybS53cFN1bW1hcnkudmFsdWUgPVxuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpICtcblx0XHRcdFx0XHRcdHJlc3VsdC5zdW1tYXJ5LmpvaW4oZ2V0TWVzc2FnZSgnbWVzc2FnZXMtc2VwYXJhdG9yJykpICtcblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbW1pdEZvcm0ud3BNaW5vcmVkaXQuY2hlY2tlZCA9IEhDLnNpbmdsZV9taW5vciB8fCBtaW5vckVkaXRzO1xuXHRcdFx0fSBlbHNlIGlmIChjaGFuZ2VzKSB7XG5cdFx0XHRcdGxldCBzdW1tYXJ5ID0gW107XG5cdFx0XHRcdGNvbnN0IHNob3J0U3VtbWFyeSA9IFtdO1xuXHRcdFx0XHQvLyBEZWxldGVkXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkZWxldGVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBg4oiSJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBkZWxldGVkW2ldKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkZWxldGVkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDiiJIke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGRlbGV0ZWRbMF0pfWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZGVsZXRlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID0gYOKIkiAke211bHRpQ2hhbmdlTXNnKGRlbGV0ZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFkZGVkXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBhZGRlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gYCske2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGFkZGVkW2ldKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChhZGRlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBgKyR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgYWRkZWRbMF0pfWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYWRkZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGArICR7bXVsdGlDaGFuZ2VNc2coYWRkZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIENoYW5nZWRcblx0XHRcdFx0Y29uc3QgYXJyb3cgPSBpc19ydGwgPyAnXFx1MjE5MCcgOiAnXFx1MjE5Mic7IC8vIGxlZnQgYW5kIHJpZ2h0IGFycm93cy4gRG9uJ3QgdXNlIOKGkCBhbmQg4oaSIGluIHRoZSBjb2RlLlxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2hhbmdlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChjaGFuZ2VkW2ldLmZyb20gPT09IGNoYW5nZWRbaV0udG8pIHtcblx0XHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gYMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkW2ldLmZyb20pfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID1cblx0XHRcdFx0XHRcdFx0YMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkW2ldLmZyb20pfSR7YXJyb3d9JHtnZXRNZXNzYWdlKFxuXHRcdFx0XHRcdFx0XHRcdCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLFxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZWRbaV0udG9cblx0XHRcdFx0XHRcdFx0KX1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2hhbmdlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRpZiAoY2hhbmdlZFswXS5mcm9tID09PSBjaGFuZ2VkWzBdLnRvKSB7XG5cdFx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPVxuXHRcdFx0XHRcdFx0XHRgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZWRbMF0uZnJvbSl9YDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID1cblx0XHRcdFx0XHRcdFx0YMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkWzBdLmZyb20pfSR7YXJyb3d9JHtnZXRNZXNzYWdlKFxuXHRcdFx0XHRcdFx0XHRcdCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLFxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZWRbMF0udG9cblx0XHRcdFx0XHRcdFx0KX1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChjaGFuZ2VkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBgwrEgJHttdWx0aUNoYW5nZU1zZyhjaGFuZ2VkLmxlbmd0aCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3VtbWFyeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IHN1bW1hcnkuam9pbihnZXRNZXNzYWdlKCdtZXNzYWdlcy1zZXBhcmF0b3InKSk7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0c3VtbWFyeS5sZW5ndGggPlxuXHRcdFx0XHRcdFx0MjAwIC1cblx0XHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpLmxlbmd0aCAtXG5cdFx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpLmxlbmd0aFxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSA9IHNob3J0U3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybS53cFN1bW1hcnkudmFsdWUgPVxuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpICtcblx0XHRcdFx0XHRcdHN1bW1hcnkgK1xuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y29tbWl0Rm9ybS53cFRleHRib3gxLnZhbHVlID0gcmVzdWx0LnRleHQ7XG5cdFx0Y29tbWl0Rm9ybS53cFN0YXJ0dGltZS52YWx1ZSA9IHNlcnZlclRpbWUgfHwgY3VycmVudFRpbWVzdGFtcCgpO1xuXHRcdGNvbW1pdEZvcm0ud3BFZGl0dGltZS52YWx1ZSA9IHBhZ2VUaW1lIHx8IGNvbW1pdEZvcm0ud3BTdGFydHRpbWUudmFsdWU7XG5cdFx0aWYgKHNlbGZFZGl0Q29uZmxpY3QpIHtcblx0XHRcdGNvbW1pdEZvcm0ub2xkaWQudmFsdWUgPSBTdHJpbmcocGFnZVRleHRSZXZJZCB8fCBjb25mLndnQ3VyUmV2aXNpb25JZCk7XG5cdFx0fVxuXHRcdC8vIFN1Ym1pdCB0aGUgZm9ybSBpbiBhIHdheSB0aGF0IHRyaWdnZXJzIG9uc3VibWl0IGV2ZW50czogY29tbWl0Rm9ybS5zdWJtaXQoKSBkb2Vzbid0LlxuXHRcdGNvbW1pdEZvcm0uaGNDb21taXQuY2xpY2soKTtcblx0fTtcblx0Y29uc3QgcmVzb2x2ZU9uZSA9IChwYWdlLCB0b1Jlc29sdmUpID0+IHtcblx0XHRjb25zdCBjYXRzID0gcGFnZS5jYXRlZ29yaWVzO1xuXHRcdGNvbnN0IHtsaW5rc30gPSBwYWdlO1xuXHRcdGxldCBpc19kYWIgPSBmYWxzZTsgLy8gSGFyZCByZWRpcmVjdD9cblx0XHRsZXQgaXNfcmVkaXIgPSB0eXBlb2YgcGFnZS5yZWRpcmVjdCA9PT0gJ3N0cmluZyc7XG5cdFx0bGV0IGk7XG5cdFx0Y29uc3QgaXNfaGlkZGVuID0gcGFnZS5jYXRlZ29yeWluZm8gJiYgdHlwZW9mIHBhZ2UuY2F0ZWdvcnlpbmZvLmhpZGRlbiA9PT0gJ3N0cmluZyc7XG5cdFx0Y29uc3QgaXNfbWlzc2luZyA9IHR5cGVvZiBwYWdlLm1pc3NpbmcgPT09ICdzdHJpbmcnO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChpICYmIHRvUmVzb2x2ZVtpXS5kYWJJbnB1dENsZWFuZWQgIT09IHBhZ2UudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgcGFnZS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBOb3RlOiB0aGUgc2VydmVyIHJldHVybnMgaW4gcGFnZSBhbiBORkMgbm9ybWFsaXplZCBVbmljb2RlIHRpdGxlLiBJZiBvdXIgaW5wdXQgd2FzIG5vdCBORkMgbm9ybWFsaXplZCwgd2UgbWF5IG5vdCBmaW5kXG5cdFx0XHQvLyBhbnkgZW50cnkgaGVyZS4gSWYgd2UgaGF2ZSBvbmx5IG9uZSBlZGl0b3IgdG8gcmVzb2x2ZSAodGhlIG1vc3QgY29tbW9uIGNhc2UsIEkgcHJlc3VtZSksIHdlIG1heSBzaW1wbHkgc2tpcCB0aGUgY2hlY2suXG5cdFx0XHR0b1Jlc29sdmVbaV0uY3VycmVudEhpZGRlbiA9IGlzX2hpZGRlbjtcblx0XHRcdHRvUmVzb2x2ZVtpXS5pbnB1dEV4aXN0cyA9ICFpc19taXNzaW5nO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmljb24uc3JjID0gaXNfbWlzc2luZyA/IEhDLmV4aXN0c05vIDogSEMuZXhpc3RzWWVzO1xuXHRcdH1cblx0XHRpZiAoaXNfbWlzc2luZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIWlzX3JlZGlyICYmIGNhdHMgJiYgKGdldE1lc3NhZ2UoJ2Rpc2FtYmlnX2NhdGVnb3J5JykgfHwgZ2V0TWVzc2FnZSgncmVkaXJfY2F0ZWdvcnknKSkpIHtcblx0XHRcdGZvciAoY29uc3QgY2F0XyBvZiBjYXRzKSB7XG5cdFx0XHRcdGxldCBjYXQgPSBjYXRfLnRpdGxlO1xuXHRcdFx0XHQvLyBTdHJpcCBuYW1lc3BhY2UgcHJlZml4XG5cdFx0XHRcdGlmIChjYXQpIHtcblx0XHRcdFx0XHRjYXQgPSBjYXQuc2xpY2UoTWF0aC5tYXgoMCwgY2F0LmluZGV4T2YoJzonKSArIDEpKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHRcdFx0aWYgKGNhdCA9PT0gZ2V0TWVzc2FnZSgnZGlzYW1iaWdfY2F0ZWdvcnknKSkge1xuXHRcdFx0XHRcdFx0aXNfZGFiID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY2F0ID09PSBnZXRNZXNzYWdlKCdyZWRpcl9jYXRlZ29yeScpKSB7XG5cdFx0XHRcdFx0XHRpc19yZWRpciA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFpc19yZWRpciAmJiAhaXNfZGFiKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghbGlua3MgfHwgbGlua3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHRpdGxlcyA9IFtdO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQvLyBDYXRlZ29yeSBuYW1lc3BhY2UgLS0gYWx3YXlzIHRydWUgc2luY2Ugd2UgYXNrIG9ubHkgZm9yIHRoZSBjYXRlZ29yeSBsaW5rc1xuXHRcdFx0XHRsaW5rc1tpXS5ucyA9PT0gMTQgJiZcblx0XHRcdFx0Ly8gTmFtZSBub3QgZW1wdHlcblx0XHRcdFx0bGlua3NbaV0udGl0bGUgJiZcblx0XHRcdFx0bGlua3NbaV0udGl0bGUubGVuZ3RoID4gMFxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIEludGVybmFsIGxpbmsgdG8gZXhpc3RpbmcgdGhpbmd5LiBFeHRyYWN0IHRoZSBwYWdlIG5hbWUgYW5kIHJlbW92ZSB0aGUgbmFtZXNwYWNlLlxuXHRcdFx0XHRsZXQgbWF0Y2ggPSBsaW5rc1tpXS50aXRsZTtcblx0XHRcdFx0bWF0Y2ggPSBtYXRjaC5zbGljZShNYXRoLm1heCgwLCBtYXRjaC5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdC8vIEV4Y2x1ZGUgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllcy5cblx0XHRcdFx0aWYgKCFIQy5ibGFja2xpc3QgfHwgIUhDLmJsYWNrbGlzdC50ZXN0KG1hdGNoKSkge1xuXHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IG1hdGNoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChpICYmIHRvUmVzb2x2ZVtpXS5kYWJJbnB1dENsZWFuZWQgIT09IHBhZ2UudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgcGFnZS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0b1Jlc29sdmVbaV0uaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBNaWdodCBhY3R1YWxseSBiZSB3cm9uZyBpZiBpdCdzIGEgcmVkaXJlY3QgcG9pbnRpbmcgdG8gYSBub24tZXhpc3RpbmcgY2F0ZWdvcnlcblx0XHRcdHRvUmVzb2x2ZVtpXS5pY29uLnNyYyA9IEhDLmV4aXN0c1llcztcblx0XHRcdGlmICh0aXRsZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHR0b1Jlc29sdmVbaV0uZGFiID0gdGl0bGVzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9SZXNvbHZlW2ldLnRleHQudmFsdWUgPVxuXHRcdFx0XHRcdHRpdGxlc1swXSArICh0b1Jlc29sdmVbaV0uY3VycmVudEtleSA9PT0gbnVsbCA/ICcnIDogYHwke3RvUmVzb2x2ZVtpXS5jdXJyZW50S2V5fWApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVzb2x2ZVJlZGlyZWN0cyA9ICh0b1Jlc29sdmUsIHBhcmFtcykgPT4ge1xuXHRcdGlmICghcGFyYW1zIHx8ICFwYXJhbXMucXVlcnkgfHwgIXBhcmFtcy5xdWVyeS5wYWdlcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IHAgaW4gcGFyYW1zLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocGFyYW1zLnF1ZXJ5LnBhZ2VzLCBwKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJlc29sdmVPbmUocGFyYW1zLnF1ZXJ5LnBhZ2VzW3BdLCB0b1Jlc29sdmUpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVzb2x2ZU11bHRpID0gKHRvUmVzb2x2ZSwgY2FsbGJhY2spID0+IHtcblx0XHRsZXQgaTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0b1Jlc29sdmVbaV0uZGFiID0gbnVsbDtcblx0XHRcdHRvUmVzb2x2ZVtpXS5kYWJJbnB1dCA9IHRvUmVzb2x2ZVtpXS5sYXN0SW5wdXQ7XG5cdFx0fVxuXHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdHByb3A6ICdpbmZvfGxpbmtzfGNhdGVnb3JpZXN8Y2F0ZWdvcnlpbmZvJyxcblx0XHRcdHBsbmFtZXNwYWNlOiAnMTQnLFxuXHRcdFx0cGxsaW1pdDogdG9SZXNvbHZlLmxlbmd0aCAqIDEwLFxuXHRcdFx0Y2xsaW1pdDogdG9SZXNvbHZlLmxlbmd0aCAqIDEwLFxuXHRcdH07XG5cdFx0Y29uc3QgdGl0bGVzID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IHYgPSB0b1Jlc29sdmVbaV0uZGFiSW5wdXQ7XG5cdFx0XHR2ID0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmRhYklucHV0Q2xlYW5lZCA9IHY7XG5cdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSBgQ2F0ZWdvcnk6JHt2fWA7XG5cdFx0fVxuXHRcdHBhcmFtcy50aXRsZXMgPSB0aXRsZXMuam9pbignfCcpO1xuXHRcdGFwaS5nZXQocGFyYW1zKVxuXHRcdFx0LmRvbmUoKGpzb24pID0+IHtcblx0XHRcdFx0cmVzb2x2ZVJlZGlyZWN0cyh0b1Jlc29sdmUsIGpzb24pO1xuXHRcdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChyZXEpID0+IHtcblx0XHRcdFx0aWYgKCFyZXEpIHtcblx0XHRcdFx0XHRub1N1Z2dlc3Rpb25zID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0fSk7XG5cdH07XG5cdGNvbnN0IG1ha2VBY3RpdmUgPSAod2hpY2gpID0+IHtcblx0XHRpZiAod2hpY2guaXNfYWN0aXZlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0b3IgIT09IHdoaWNoKSB7XG5cdFx0XHRcdGVkaXRvci5pbmFjdGl2YXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWNoLmlzX2FjdGl2ZSA9IHRydWU7XG5cdFx0aWYgKHdoaWNoLmRhYikge1xuXHRcdFx0c2hvd0RhYih3aGljaCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIENoZWNrIGZvciBwcm9ncmFtbWF0aWMgdmFsdWUgY2hhbmdlcy5cblx0XHRcdGNvbnN0IGV4cGVjdGVkSW5wdXQgPSB3aGljaC5sYXN0UmVhbElucHV0IHx8IHdoaWNoLmxhc3RJbnB1dCB8fCAnJztcblx0XHRcdGNvbnN0IGFjdHVhbFZhbHVlID0gd2hpY2gudGV4dC52YWx1ZSB8fCAnJztcblx0XHRcdGlmIChcblx0XHRcdFx0KGV4cGVjdGVkSW5wdXQubGVuZ3RoID09PSAwICYmIGFjdHVhbFZhbHVlLmxlbmd0aCA+IDApIHx8XG5cdFx0XHRcdChleHBlY3RlZElucHV0Lmxlbmd0aCA+IDAgJiYgYWN0dWFsVmFsdWUuaW5kZXhPZihleHBlY3RlZElucHV0KSlcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBTb21laG93IHRoZSBmaWVsZCdzIHZhbHVlIGFwcGVhcnMgdG8gaGF2ZSBjaGFuZ2VkLCBhbmQgd2hpY2gubGFzdFNlbGVjdGlvbiB0aGVyZWZvcmUgaXMgbm8gbG9uZ2VyIHZhbGlkLiBUcnkgdG8gc2V0IHRoZVxuXHRcdFx0XHQvLyBjdXJzb3IgYXQgdGhlIGVuZCBvZiB0aGUgY2F0ZWdvcnksIGFuZCBkbyBub3QgZGlzcGxheSB0aGUgb2xkIHN1Z2dlc3Rpb24gbGlzdC5cblx0XHRcdFx0d2hpY2guc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IHYgPSBhY3R1YWxWYWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRbd2hpY2gubGFzdElucHV0XSA9IHY7XG5cdFx0XHRcdHdoaWNoLmxhc3RSZWFsSW5wdXQgPSB3aGljaC5sYXN0SW5wdXQ7XG5cdFx0XHRcdGlmICh2Lmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRbLCB3aGljaC5jdXJyZW50S2V5XSA9IHY7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHdoaWNoLmxhc3RTZWxlY3Rpb24pIHtcblx0XHRcdFx0XHR3aGljaC5sYXN0U2VsZWN0aW9uID0ge1xuXHRcdFx0XHRcdFx0c3RhcnQ6IHZbMF0ubGVuZ3RoLFxuXHRcdFx0XHRcdFx0ZW5kOiB2WzBdLmxlbmd0aCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAod2hpY2guc2hvd3NMaXN0KSB7XG5cdFx0XHRcdHdoaWNoLmRpc3BsYXlMaXN0KCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2hpY2gubGFzdFNlbGVjdGlvbikge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR3aGljaC5zZXRTZWxlY3Rpb24od2hpY2gubGFzdFNlbGVjdGlvbi5zdGFydCwgd2hpY2gubGFzdFNlbGVjdGlvbi5lbmQpO1xuXHRcdFx0XHR9LCAwKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHNob3dEYWIgPSAod2hpY2gpID0+IHtcblx0XHRpZiAod2hpY2guaXNfYWN0aXZlKSB7XG5cdFx0XHR3aGljaC5zaG93U3VnZ2VzdGlvbnMod2hpY2guZGFiLCBmYWxzZSwgbnVsbCwgbnVsbCk7IC8vIGRvIGF1dG9jb21wbGV0aW9uLCBubyBrZXksIG5vIGVuZ2luZSBzZWxlY3RvclxuXHRcdFx0d2hpY2guZGFiID0gbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWFrZUFjdGl2ZSh3aGljaCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBtdWx0aVN1Ym1pdCA9ICgpID0+IHtcblx0XHRjb25zdCB0b1Jlc29sdmUgPSBbXTtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdG9yLnN0YXRlID09PSBDSEFOR0VfUEVORElORyB8fCBlZGl0b3Iuc3RhdGUgPT09IE9QRU4pIHtcblx0XHRcdFx0dG9SZXNvbHZlW3RvUmVzb2x2ZS5sZW5ndGhdID0gZWRpdG9yO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodG9SZXNvbHZlLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXNvbHZlTXVsdGkodG9SZXNvbHZlLCAocmVzb2x2ZWQpID0+IHtcblx0XHRcdGxldCBmaXJzdERhYiA9IG51bGw7XG5cdFx0XHRsZXQgZG9udENoYW5nZSA9IGZhbHNlO1xuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHJlc29sdmVkKSB7XG5cdFx0XHRcdGlmIChlbGVtZW50Lmxhc3RJbnB1dCA9PT0gZWxlbWVudC5kYWJJbnB1dCkge1xuXHRcdFx0XHRcdGlmIChlbGVtZW50LmRhYikge1xuXHRcdFx0XHRcdFx0aWYgKCFmaXJzdERhYikge1xuXHRcdFx0XHRcdFx0XHRmaXJzdERhYiA9IGVsZW1lbnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50LmFjY2VwdENoZWNrKHRydWUpKSB7XG5cdFx0XHRcdFx0XHRlbGVtZW50LmNvbW1pdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBXZSBkaWRuJ3QgZGlzYWJsZSBhbGwgdGhlIG9wZW4gZWRpdG9ycywgYnV0IHdlIGRpZCBhc3luY2hyb25vdXMgY2FsbHMuIEl0IGlzXG5cdFx0XHRcdFx0Ly8gdGhlb3JldGljYWxseSBwb3NzaWJsZSB0aGF0IHRoZSB1c2VyIGNoYW5nZWQgc29tZXRoaW5nLi4uXG5cdFx0XHRcdFx0ZG9udENoYW5nZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChmaXJzdERhYikge1xuXHRcdFx0XHRzaG93RGFiKGZpcnN0RGFiKTtcblx0XHRcdH0gZWxzZSBpZiAoIWRvbnRDaGFuZ2UpIHtcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHNldE11bHRpSW5wdXQgPSAoKSA9PiB7XG5cdFx0aWYgKGNvbW1pdEJ1dHRvbiB8fCBvblVwbG9hZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb21taXRCdXR0b24gPSBtYWtlKCdpbnB1dCcpO1xuXHRcdGNvbW1pdEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG5cdFx0Y29tbWl0QnV0dG9uLnZhbHVlID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY29tbWl0Jyk7XG5cdFx0Y29tbWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbXVsdGlTdWJtaXQpO1xuXHRcdGlmIChtdWx0aVNwYW4pIHtcblx0XHRcdG11bHRpU3Bhbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjb21taXRCdXR0b24sIG11bHRpU3Bhbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhdExpbmUuYXBwZW5kKGNvbW1pdEJ1dHRvbik7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBjaGVja011bHRpSW5wdXQgPSAoKSA9PiB7XG5cdFx0aWYgKCFjb21taXRCdXR0b24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGhhc0NoYW5nZXMgPSBmYWxzZTtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0aGFzQ2hhbmdlcyA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSAhaGFzQ2hhbmdlcztcblx0fTtcblx0Y29uc3Qgc3VnZ2VzdGlvbkVuZ2luZXMgPSB7XG5cdFx0b3BlbnNlYXJjaDoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249b3BlbnNlYXJjaCZuYW1lc3BhY2U9MTQmbGltaXQ9MzAmc2VhcmNoPUNhdGVnb3J5OiQxYCxcblx0XHRcdC8vICQxID0gc2VhcmNoIHRlcm1cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIGNvbnZlcnQgcmVzdWx0IG9mIHVyaSBpbnRvIGFuIGFycmF5IG9mIGNhdGVnb3J5IG5hbWVzXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQsIHF1ZXJ5S2V5KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5sZW5ndGggPj0gMikge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IHF1ZXJ5UmVzdWx0WzBdLnNsaWNlKE1hdGgubWF4KDAsIHF1ZXJ5UmVzdWx0WzBdLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHRjb25zdCBbLCB0aXRsZXNdID0gcXVlcnlSZXN1bHQ7XG5cdFx0XHRcdFx0bGV0IGV4aXN0cyA9IGZhbHNlO1xuXHRcdFx0XHRcdGlmICghY2F0X3ByZWZpeCkge1xuXHRcdFx0XHRcdFx0Y2F0X3ByZWZpeCA9IG5ldyBSZWdFeHAoYF4oJHtIQy5jYXRlZ29yeV9yZWdleHB9KTpgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGNhdF9wcmVmaXgubGFzdEluZGV4ID0gMDtcblx0XHRcdFx0XHRcdGNvbnN0IG0gPSBjYXRfcHJlZml4LmV4ZWModGl0bGVzW2ldKTtcblx0XHRcdFx0XHRcdGlmIChtICYmIG0ubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0uc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLmluZGV4T2YoJzonKSArIDEpKTsgLy8gcm0gbmFtZXNwYWNlXG5cdFx0XHRcdFx0XHRcdGlmIChrZXkgPT09IHRpdGxlc1tpXSkge1xuXHRcdFx0XHRcdFx0XHRcdGV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7IC8vIE5vcGUsIGl0J3Mgbm90IGEgY2F0ZWdvcnkgYWZ0ZXIgYWxsLlxuXHRcdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRpdGxlcy5leGlzdHMgPSBleGlzdHM7XG5cdFx0XHRcdFx0aWYgKHF1ZXJ5S2V5ICE9PSBrZXkpIHtcblx0XHRcdFx0XHRcdHRpdGxlcy5ub3JtYWxpemVkID0ga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBSZW1lbWJlciB0aGUgTkZDIG5vcm1hbGl6ZWQga2V5IHdlIGdvdCBiYWNrIGZyb20gdGhlIHNlcnZlclxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0aW50ZXJuYWxzZWFyY2g6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5Jmxpc3Q9YWxscGFnZXMmYXBuYW1lc3BhY2U9MTQmYXBsaW1pdD0zMCZhcGZyb209JDEmYXBwcmVmaXg9JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5hbGxwYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LmFsbHBhZ2VzO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0udGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHR9IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0ZXhpc3RzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZwcm9wPWluZm8mdGl0bGVzPUNhdGVnb3J5OiQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCwgcXVlcnlLZXkpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzICYmICFxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1stMV0pIHtcblx0XHRcdFx0XHQvLyBTaG91bGQgaGF2ZSBleGFjdGx5IDFcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHAgaW4gcXVlcnlSZXN1bHQucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bihxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcywgcCkpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsZXQgX3RpdGxlID0gcXVlcnlSZXN1bHQucXVlcnkucGFnZXNbcF0udGl0bGU7XG5cdFx0XHRcdFx0XHRfdGl0bGUgPSBfdGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgX3RpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IFtfdGl0bGVdO1xuXHRcdFx0XHRcdFx0dGl0bGVzLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0XHRpZiAocXVlcnlLZXkgIT09IF90aXRsZSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMubm9ybWFsaXplZCA9IF90aXRsZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIE5GQ1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0c3ViY2F0ZWdvcmllczoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmbGlzdD1jYXRlZ29yeW1lbWJlcnMmY210eXBlPXN1YmNhdCZjbWxpbWl0PW1heCZjbXRpdGxlPUNhdGVnb3J5OiQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQucXVlcnkgJiYgcXVlcnlSZXN1bHQucXVlcnkuY2F0ZWdvcnltZW1iZXJzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gcXVlcnlSZXN1bHQucXVlcnkuY2F0ZWdvcnltZW1iZXJzO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0udGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHR9IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0cGFyZW50Y2F0ZWdvcmllczoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmcHJvcD1jYXRlZ29yaWVzJnRpdGxlcz1DYXRlZ29yeTokMSZjbGxpbWl0PW1heGAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwIGluIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRpZiAocXVlcnlSZXN1bHQucXVlcnkucGFnZXNbcF0uY2F0ZWdvcmllcykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1twXS5jYXRlZ29yaWVzO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXS50aXRsZS5zbGljZShNYXRoLm1heCgwLCB0aXRsZXNbaV0udGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdFx0XHR9IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblx0Y29uc3Qgc3VnZ2VzdGlvbkNvbmZpZ3MgPSB7XG5cdFx0c2VhcmNoaW5kZXg6IHtcblx0XHRcdG5hbWU6ICdTZWFyY2ggaW5kZXgnLFxuXHRcdFx0ZW5naW5lczogWydvcGVuc2VhcmNoJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogZmFsc2UsXG5cdFx0XHRub0NvbXBsZXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0cGFnZWxpc3Q6IHtcblx0XHRcdG5hbWU6ICdQYWdlIGxpc3QnLFxuXHRcdFx0ZW5naW5lczogWydpbnRlcm5hbHNlYXJjaCcsICdleGlzdHMnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRjb21iaW5lZDoge1xuXHRcdFx0bmFtZTogJ0NvbWJpbmVkIHNlYXJjaCcsXG5cdFx0XHRlbmdpbmVzOiBbJ29wZW5zZWFyY2gnLCAnaW50ZXJuYWxzZWFyY2gnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRzdWJjYXQ6IHtcblx0XHRcdG5hbWU6ICdTdWJjYXRlZ29yaWVzJyxcblx0XHRcdGVuZ2luZXM6IFsnc3ViY2F0ZWdvcmllcyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IHRydWUsXG5cdFx0XHRub0NvbXBsZXRpb246IHRydWUsXG5cdFx0fSxcblx0XHRwYXJlbnRjYXQ6IHtcblx0XHRcdG5hbWU6ICdQYXJlbnQgY2F0ZWdvcmllcycsXG5cdFx0XHRlbmdpbmVzOiBbJ3BhcmVudGNhdGVnb3JpZXMnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiB0cnVlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiB0cnVlLFxuXHRcdH0sXG5cdH07XG5cdC8vIEV2ZW50IGtleUNvZGVzIHRoYXQgd2UgaGFuZGxlIGluIHRoZSB0ZXh0IGlucHV0IGZpZWxkL3N1Z2dlc3Rpb24gbGlzdC5cblx0Y29uc3QgQlMgPSA4O1xuXHRjb25zdCBUQUIgPSA5O1xuXHRjb25zdCBSRVQgPSAxMztcblx0Y29uc3QgRVNDID0gMjc7XG5cdGNvbnN0IFNQQUNFID0gMzI7XG5cdGNvbnN0IFBHVVAgPSAzMztcblx0Y29uc3QgUEdET1dOID0gMzQ7XG5cdGNvbnN0IFVQID0gMzg7XG5cdGNvbnN0IERPV04gPSA0MDtcblx0Y29uc3QgREVMID0gNDY7XG5cdGNvbnN0IElNRSA9IDIyOTtcblx0Y2xhc3MgQ2F0ZWdvcnlFZGl0b3Ige1xuXHRcdGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcblx0XHR9XG5cdFx0aW5pdGlhbGl6ZShsaW5lLCBzcGFuLCBhZnRlciwga2V5LCBpc19oaWRkZW4pIHtcblx0XHRcdC8vIElmIGEgc3BhbiBpcyBnaXZlbiwgJ2FmdGVyJyBpcyB0aGUgY2F0ZWdvcnkgdGl0bGUsIG90aGVyd2lzZSBpdCBtYXkgYmUgYW4gZWxlbWVudCBhZnRlciB3aGljaCB0b1xuXHRcdFx0Ly8gaW5zZXJ0IHRoZSBuZXcgc3Bhbi4gJ2tleScgaXMgbGlrZXdpc2Ugb3ZlcmxvYWRlZDsgaWYgYSBzcGFuIGlzIGdpdmVuLCBpdCBpcyB0aGUgY2F0ZWdvcnkga2V5IChpZlxuXHRcdFx0Ly8ga25vd24pLCBvdGhlcndpc2UgaXQgaXMgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBhIGJhciBzaGFsbCBiZSBwcmVwZW5kZWQuXG5cdFx0XHRpZiAoc3Bhbikge1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0c3Bhbi5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rID0gc3Bhbi5maXJzdENoaWxkO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgPSBhZnRlcjtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEtleSA9IGtleSAmJiBrZXkubGVuZ3RoID4gMSA/IGtleS5zbGljZSgxKSA6IG51bGw7IC8vID4gMSBiZWNhdXNlIGl0IGluY2x1ZGVzIHRoZSBsZWFkaW5nIGJhclxuXHRcdFx0XHR0aGlzLm9yaWdpbmFsRXhpc3RzID0gIWhhc0NsYXNzKHRoaXMuY2F0TGluaywgJ25ldycpO1xuXHRcdFx0XHQvLyBDcmVhdGUgY2hhbmdlIGFuZCBkZWwgbGlua3Ncblx0XHRcdFx0dGhpcy5tYWtlTGlua1NwYW4oKTtcblx0XHRcdFx0aWYgKCF0aGlzLm9yaWdpbmFsRXhpc3RzICYmIHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSB0cnVlO1xuXHRcdFx0XHQvLyBDcmVhdGUgYWRkIHNwYW4gYW5kIGFwcGVuZCB0byBjYXRMaW5rc1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgPSAnJztcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEtleSA9IG51bGw7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxFeGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0aWYgKCFuZXdET00pIHtcblx0XHRcdFx0XHRzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQnO1xuXHRcdFx0XHRcdGlmIChrZXkpIHtcblx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJyB8ICcsIHRydWUpKTtcblx0XHRcdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdFx0XHRhZnRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCBhZnRlci5uZXh0U2libGluZyk7XG5cdFx0XHRcdFx0XHRcdGFmdGVyID0gYWZ0ZXIubmV4dFNpYmxpbmc7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUpIHtcblx0XHRcdFx0XHRcdFx0bGluZS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChsaW5lICYmIGxpbmUuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHRcdGxpbmUuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxpbmtTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHR0aGlzLmxpbmtTcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50IG5vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5hZGQsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWFkZCcpO1xuXHRcdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0c3BhbiA9IG1ha2UobmV3RE9NID8gJ2xpJyA6ICdzcGFuJyk7XG5cdFx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQnO1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0c3Bhbi5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRzcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0YWZ0ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgYWZ0ZXIubmV4dFNpYmxpbmcpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUpIHtcblx0XHRcdFx0XHRsaW5lLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzID0gbnVsbDtcblx0XHRcdFx0dGhpcy51bmRlbExpbmsgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5vcmlnaW5hbEhpZGRlbiA9IGlzX2hpZGRlbjtcblx0XHRcdHRoaXMubGluZSA9IGxpbmU7XG5cdFx0XHR0aGlzLmVuZ2luZSA9IEhDLnN1Z2dlc3Rpb25zO1xuXHRcdFx0dGhpcy5zcGFuID0gc3Bhbjtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5zdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdHRoaXMubGFzdFNhdmVkU3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0aWYgKHRoaXMuY2F0TGluayAmJiB0aGlzLmN1cnJlbnRLZXkpIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5O1xuXHRcdFx0fVxuXHRcdFx0ZWRpdG9yc1tlZGl0b3JzLmxlbmd0aF0gPSB0aGlzO1xuXHRcdH1cblx0XHRtYWtlTGlua1NwYW4oKSB7XG5cdFx0XHR0aGlzLm5vcm1hbExpbmtzID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0bGV0IGxpbmsgPSBudWxsO1xuXHRcdFx0aWYgKHRoaXMub3JpZ2luYWxDYXRlZ29yeSAmJiB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnJlbW92ZSwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtcmVtb3ZlJyk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW3RoaXMub3JpZ2luYWxDYXRlZ29yeV0pIHtcblx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuY2hhbmdlLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1jaGFuZ2UnKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdGlmICghbm9TdWdnZXN0aW9ucyAmJiBIQy51c2VfdXBfZG93bikge1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb3duLmJpbmQodGhpcykpO1xuXHRcdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuZG93biwgdHJ1ZSkpO1xuXHRcdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1kb3duJyk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwLmJpbmQodGhpcykpO1xuXHRcdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MudXAsIHRydWUpKTtcblx0XHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtdXAnKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKHRoaXMudXBEb3duTGlua3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0dGhpcy5saW5rU3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCBub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdHRoaXMubGlua1NwYW4uYXBwZW5kKHRoaXMubm9ybWFsTGlua3MpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5jbGFzc05hbWUgPSAnbm9wb3B1cHMgaG90Y2F0bGluayc7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVzdG9yZS5iaW5kKHRoaXMpKTtcblx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MucmVzdG9yZSwgdHJ1ZSkpO1xuXHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXJlc3RvcmUnKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuYXBwZW5kKGxpbmspO1xuXHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQodGhpcy51bmRlbExpbmspO1xuXHRcdH1cblx0XHRpbnZva2VTdWdnZXN0aW9ucyhkb250X2F1dG9jb21wbGV0ZSkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLmVuZ2luZSAmJlxuXHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0gJiZcblx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdLnRlbXAgJiZcblx0XHRcdFx0IWRvbnRfYXV0b2NvbXBsZXRlXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmUgPSBIQy5zdWdnZXN0aW9ucztcblx0XHRcdH0gLy8gUmVzZXQgdG8gYSBzZWFyY2ggdXBvbiBpbnB1dFxuXHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKGRvbnRfYXV0b2NvbXBsZXRlKTtcblx0XHRcdH0sIEhDLnN1Z2dlc3RfZGVsYXkpO1xuXHRcdH1cblx0XHRtYWtlRm9ybSgpIHtcblx0XHRcdGNvbnN0IGZvcm0gPSBtYWtlKCdmb3JtJyk7XG5cdFx0XHRmb3JtLm1ldGhvZCA9ICdQT1NUJztcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5hY2NlcHQuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLmZvcm0gPSBmb3JtO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRjb25zdCB0ZXh0ID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdHRleHQudHlwZSA9ICd0ZXh0Jztcblx0XHRcdHRleHQuc2l6ZSA9IEhDLmVkaXRib3hfd2lkdGg7XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0Ly8gQmUgY2FyZWZ1bCBoZXJlIHRvIGhhbmRsZSBJTUUgaW5wdXQuIFRoaXMgaXMgYnJvd3Nlci9PUy9JTUUgZGVwZW5kZW50LCBidXQgYmFzaWNhbGx5IHRoZXJlIGFyZSB0d28gbWVjaGFuaXNtczpcblx0XHRcdFx0Ly8gLSBNb2Rlcm4gKERPTSBMZXZlbCAzKSBicm93c2VycyB1c2UgY29tcG9zaXRpb25zdGFydC9jb21wb3NpdGlvbmVuZCBldmVudHMgdG8gc2lnbmFsIGNvbXBvc2l0aW9uOyBpZiB0aGVcblx0XHRcdFx0Ly8gICBjb21wb3NpdGlvbiBpcyBub3QgY2FuY2VsZWQsIHRoZXJlJ2xsIGJlIGEgdGV4dElucHV0IGV2ZW50IGZvbGxvd2luZy4gRHVyaW5nIGEgY29tcG9zaXRpb24ga2V5IGV2ZW50cyBhcmVcblx0XHRcdFx0Ly8gICBlaXRoZXIgYWxsIHN1cHByZXNzZWQgKEZGL0dlY2tvKSwgb3Igb3RoZXJ3aXNlIGhhdmUga2V5RG93biA9PT0gSU1FIGZvciBhbGwga2V5cyAoV2Via2l0KS5cblx0XHRcdFx0Ly8gICAtIFdlYmtpdCBzZW5kcyBhIHRleHRJbnB1dCBmb2xsb3dlZCBieSBrZXlEb3duID09PSBJTUUgYW5kIGEga2V5VXAgd2l0aCB0aGUga2V5IHRoYXQgZW5kZWQgY29tcG9zaXRpb24uXG5cdFx0XHRcdC8vICAgLSBHZWNrbyBkb2Vzbid0IHNlbmQgdGV4dElucHV0IGJ1dCBqdXN0IGEga2V5VXAgd2l0aCB0aGUga2V5IHRoYXQgZW5kZWQgY29tcG9zaXRpb24sIHdpdGhvdXQgc2VuZGluZyBrZXlEb3duXG5cdFx0XHRcdC8vXHQgZmlyc3QuIEdlY2tvIGRvZXNuJ3Qgc2VuZCBhbnkga2V5ZG93biB3aGlsZSBJTUUgaXMgYWN0aXZlLlxuXHRcdFx0XHQvLyAtIE9sZGVyIGJyb3dzZXJzIHNpZ25hbCBjb21wb3NpdGlvbiBieSBrZXlEb3duID09PSBJTUUgZm9yIHRoZSBmaXJzdCBhbmQgc3Vic2VxdWVudCBrZXlzIGZvciBhIGNvbXBvc2l0aW9uLiBUaGVcblx0XHRcdFx0Ly8gICBmaXJzdCBrZXlEb3duICE9PSBJTUUgaXMgY2VydGFpbmx5IGFmdGVyIHRoZSBlbmQgb2YgdGhlIGNvbXBvc2l0aW9uLiBUeXBpY2FsbHksIGNvbXBvc2l0aW9uIGVuZCBjYW4gYWxzbyBiZVxuXHRcdFx0XHQvLyAgIGRldGVjdGVkIGJ5IGEga2V5RG93biBJTUUgd2l0aCBhIGtleVVwIG9mIHNwYWNlLCB0YWIsIGVzY2FwZSwgb3IgcmV0dXJuLlxuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gZXZlbnQua2V5IHx8IDA7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgJiZcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9PT0gSU1FICYmXG5cdFx0XHRcdFx0XHQhc2VsZi51c2VzQ29tcG9zaXRpb24gJiZcblx0XHRcdFx0XHRcdChrZXkgPT09IFRBQiB8fCBrZXkgPT09IFJFVCB8fCBrZXkgPT09IEVTQyB8fCBrZXkgPT09IFNQQUNFKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNlbGYuaW1lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gVVAgfHwga2V5ID09PSBET1dOIHx8IGtleSA9PT0gUEdVUCB8fCBrZXkgPT09IFBHRE9XTikge1xuXHRcdFx0XHRcdFx0Ly8gSW4gY2FzZSBhIGJyb3dzZXIgZG9lc24ndCBnZW5lcmF0ZSBrZXlwcmVzcyBldmVudHMgZm9yIGFycm93IGtleXMuLi5cblx0XHRcdFx0XHRcdGlmIChzZWxmLmtleUNvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLnByb2Nlc3NLZXkoZXZlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoa2V5ID09PSBFU0MgJiYgc2VsZi5sYXN0S2V5ICE9PSBJTUUgJiYgIXNlbGYucmVzZXRLZXlTZWxlY3Rpb24oKSkge1xuXHRcdFx0XHRcdFx0XHQvLyBObyB1bmRvIG9mIGtleSBzZWxlY3Rpb246IHRyZWF0IEVTQyBhcyBcImNhbmNlbFwiLlxuXHRcdFx0XHRcdFx0XHRzZWxmLmNhbmNlbCgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBBbHNvIGRvIHRoaXMgZm9yIEVTQyBhcyBhIHdvcmthcm91bmQgZm9yIEZpcmVmb3ggYnVnIDUyNDM2MFxuXHRcdFx0XHRcdFx0Ly8ge0BsaW5rIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTUyNDM2MH1cblx0XHRcdFx0XHRcdHNlbGYuaW52b2tlU3VnZ2VzdGlvbnMoa2V5ID09PSBCUyB8fCBrZXkgPT09IERFTCB8fCBrZXkgPT09IEVTQyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gZXZlbnQua2V5IHx8IDA7XG5cdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0ga2V5O1xuXHRcdFx0XHRcdHNlbGYua2V5Q291bnQgPSAwO1xuXHRcdFx0XHRcdC8vIERPTSBMZXZlbCA8IDMgSU1FIGlucHV0XG5cdFx0XHRcdFx0aWYgKCFzZWxmLmltZSAmJiBrZXkgPT09IElNRSAmJiAhc2VsZi51c2VzQ29tcG9zaXRpb24pIHtcblx0XHRcdFx0XHRcdC8vIHNlbGYudXNlc0NvbXBvc2l0aW9uIGNhdGNoZXMgYnJvd3NlcnMgdGhhdCBtYXkgZW1pdCBzcHVyaW91cyBrZXlkb3duIElNRSBhZnRlciBhIGNvbXBvc2l0aW9uIGhhcyBlbmRlZFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0XHRzZWxmLmltZSAmJlxuXHRcdFx0XHRcdFx0a2V5ICE9PSBJTUUgJiZcblx0XHRcdFx0XHRcdCEoKGtleSA+PSAxNiAmJiBrZXkgPD0gMjApIHx8IChrZXkgPj0gOTEgJiYga2V5IDw9IDkzKSB8fCBrZXkgPT09IDE0NClcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdC8vIElnbm9yZSBjb250cm9sIGtleXM6IGN0cmwsIHNoaWZ0LCBhbHQsIGFsdCBnciwgY2FwcyBsb2NrLCB3aW5kb3dzL2FwcGxlIGNtZCBrZXlzLCBudW0gbG9jay4gT25seSB0aGUgd2luZG93cyBrZXlzXG5cdFx0XHRcdFx0XHQvLyB0ZXJtaW5hdGUgSU1FIChhcHBsZSBjbWQgZG9lc24ndCksIGJ1dCB0aGV5IGFsc28gY2F1c2UgYSBibHVyLCBzbyBpdCdzIE9LIHRvIGlnbm9yZSB0aGVtIGhlcmUuXG5cdFx0XHRcdFx0XHQvLyBOb3RlOiBTYWZhcmkgNCAoNTMwLjE3KSBwcm9wYWdhdGVzIEVTQyBvdXQgb2YgYW4gSU1FIGNvbXBvc2l0aW9uIChvYnNlcnZlZCBhdCBsZWFzdCBvbiBXaW4gWFApLlxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNlbGYuaW1lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSGFuZGxlIHJldHVybiBleHBsaWNpdGx5LCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gdG8gYmUgYWJsZSB0byBjaGVjayBmb3IgY3RybFxuXHRcdFx0XHRcdGlmIChrZXkgPT09IFJFVCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYuYWNjZXB0KGV2ZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSW5oaWJpdCBkZWZhdWx0IGJlaGF2aW9yIG9mIEVTQyAocmV2ZXJ0IHRvIGxhc3QgcmVhbCBpbnB1dCBpbiBGRjogd2UgZG8gdGhhdCBvdXJzZWx2ZXMpXG5cdFx0XHRcdFx0cmV0dXJuIGtleSA9PT0gRVNDID8gZXZ0S2lsbChldmVudCkgOiB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gQW5kIGhhbmRsZSBjb250aW51ZWQgcHJlc3Npbmcgb2YgYXJyb3cga2V5c1xuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5rZXlDb3VudCsrO1xuXHRcdFx0XHRcdHJldHVybiBzZWxmLnByb2Nlc3NLZXkoZXZlbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0JCh0ZXh0KS5vbignZm9jdXMnLCAoKSA9PiB7XG5cdFx0XHRcdFx0bWFrZUFjdGl2ZShzZWxmKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIE9uIElFLCBibHVyIGV2ZW50cyBhcmUgYXN5bmNocm9ub3VzLCBhbmQgbWF5IHRodXMgYXJyaXZlIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBsb3N0IHRoZSBmb2N1cy4gU2luY2UgSUVcblx0XHRcdFx0Ly8gY2FuIGdldCB0aGUgc2VsZWN0aW9uIG9ubHkgd2hpbGUgdGhlIGVsZW1lbnQgaXMgYWN0aXZlIChoYXMgdGhlIGZvY3VzKSwgd2UgbWF5IG5vdCBhbHdheXMgZ2V0IHRoZSBzZWxlY3Rpb24uXG5cdFx0XHRcdC8vIFRoZXJlZm9yZSwgdXNlIGFuIElFLXNwZWNpZmljIHN5bmNocm9ub3VzIGV2ZW50IG9uIElFLi4uXG5cdFx0XHRcdC8vIERvbid0IHRlc3QgZm9yIHRleHQuc2VsZWN0aW9uU3RhcnQgYmVpbmcgZGVmaW5lZDtcblx0XHRcdFx0JCh0ZXh0KS5vbihcblx0XHRcdFx0XHR0ZXh0Lm9uYmVmb3JlZGVhY3RpdmF0ZSAhPT0gdW5kZWZpbmVkICYmIHRleHQuY3JlYXRlVGV4dFJhbmdlID8gJ2JlZm9yZWRlYWN0aXZhdGUnIDogJ2JsdXInLFxuXHRcdFx0XHRcdHRoaXMuc2F2ZVZpZXcuYmluZCh0aGlzKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHQvLyBET00gTGV2ZWwgMyBJTUUgaGFuZGxpbmdcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBTZXR0aW5nIGxhc3RLZXkgPSBJTUUgcHJvdmlkZXMgYSBmYWtlIGtleURvd24gZm9yIEdlY2tvJ3Mgc2luZ2xlIGtleVVwIGFmdGVyIGEgY21wb3NpdGlvbi4gSWYgd2UgZGlkbid0IGRvIHRoaXMsXG5cdFx0XHRcdFx0Ly8gY2FuY2VsbGluZyBhIGNvbXBvc2l0aW9uIHZpYSBFU0Mgd291bGQgYWxzbyBjYW5jZWwgYW5kIGNsb3NlIHRoZSB3aG9sZSBjYXRlZ29yeSBpbnB1dCBlZGl0b3IuXG5cdFx0XHRcdFx0JCh0ZXh0KS5vbignY29tcG9zaXRpb25zdGFydCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IElNRTtcblx0XHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gdHJ1ZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKHRleHQpLm9uKCdjb21wb3NpdGlvbmVuZCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IElNRTtcblx0XHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JCh0ZXh0KS5vbigndGV4dElucHV0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHNlbGYuaW52b2tlU3VnZ2VzdGlvbnMoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvLyBKdXN0IGluIGNhc2Ugc29tZSBicm93c2VycyBtaWdodCBwcm9kdWNlIGV4Y2VwdGlvbnMgd2l0aCB0aGVzZSBET00gTGV2ZWwgMyBldmVudHNcblx0XHRcdFx0fVxuXHRcdFx0XHQkKHRleHQpLm9uKCdibHVyJywgKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gZmFsc2U7XG5cdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHRcdFx0dGhpcy5pY29uID0gbWFrZSgnaW1nJyk7XG5cdFx0XHRsZXQgbGlzdCA9IG51bGw7XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0bGlzdCA9IG1ha2UoJ3NlbGVjdCcpO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCkpIHtcblx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZShmYWxzZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKSkge1xuXHRcdFx0XHRcdFx0c2VsZi5hY2NlcHQoZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApO1xuXHRcdFx0XHRcdHNlbGYudGV4dC5mb2N1cygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGlmIChldmVudC5rZXkgPT09IEVTQykge1xuXHRcdFx0XHRcdFx0c2VsZi5yZXNldEtleVNlbGVjdGlvbigpO1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0LmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKHRydWUpO1xuXHRcdFx0XHRcdFx0fSwgSEMuc3VnZ2VzdF9kZWxheSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChldmVudC5rZXkgPT09IFJFVCkge1xuXHRcdFx0XHRcdFx0c2VsZi5hY2NlcHQoZXZlbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmICghSEMuZml4ZWRfc2VhcmNoKSB7XG5cdFx0XHRcdFx0Y29uc3QgZW5naW5lU2VsZWN0b3IgPSBtYWtlKCdzZWxlY3QnKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGtleSBpbiBzdWdnZXN0aW9uQ29uZmlncykge1xuXHRcdFx0XHRcdFx0aWYgKHN1Z2dlc3Rpb25Db25maWdzW2tleV0uc2hvdykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBvcHQgPSBtYWtlKCdvcHRpb24nKTtcblx0XHRcdFx0XHRcdFx0b3B0LnZhbHVlID0ga2V5O1xuXHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSB0aGlzLmVuZ2luZSkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdC5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0b3B0LmFwcGVuZChtYWtlKHN1Z2dlc3Rpb25Db25maWdzW2tleV0ubmFtZSwgdHJ1ZSkpO1xuXHRcdFx0XHRcdFx0XHRlbmdpbmVTZWxlY3Rvci5hcHBlbmQob3B0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZW5naW5lU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5lbmdpbmUgPSBzZWxmLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbc2VsZi5lbmdpbmVTZWxlY3Rvci5zZWxlY3RlZEluZGV4XS52YWx1ZTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKHRydWUsIHRydWUpOyAvLyBEb24ndCBhdXRvY29tcGxldGUsIGZvcmNlIHJlLWRpc3BsYXkgb2YgbGlzdFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IgPSBlbmdpbmVTZWxlY3Rvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0ID0gbGlzdDtcblx0XHRcdGNvbnN0IGJ1dHRvbl9sYWJlbCA9IChfaWQsIGRlZmF1bHRUZXh0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGxhYmVsID0gbnVsbDtcblx0XHRcdFx0aWYgKCFsYWJlbCB8fCAhbGFiZWwuZGF0YSkge1xuXHRcdFx0XHRcdHJldHVybiBkZWZhdWx0VGV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbGFiZWwuZGF0YTtcblx0XHRcdH07XG5cdFx0XHQvLyBEbyBub3QgdXNlIHR5cGUgJ3N1Ym1pdCc7IHdlIGNhbm5vdCBkZXRlY3QgbW9kaWZpZXIga2V5cyBpZiB3ZSBkb1xuXHRcdFx0Y29uc3QgT0sgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0T0sudHlwZSA9ICdidXR0b24nO1xuXHRcdFx0T0sudmFsdWUgPSBidXR0b25fbGFiZWwoJ3dwT2tVcGxvYWRMYmwnLCBnZXRNZXNzYWdlKCdtZXNzYWdlcy1vaycpKTtcblx0XHRcdE9LLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY2NlcHQuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLm9rID0gT0s7XG5cdFx0XHRjb25zdCBjYW5jZWwgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0Y2FuY2VsLnR5cGUgPSAnYnV0dG9uJztcblx0XHRcdGNhbmNlbC52YWx1ZSA9IGJ1dHRvbl9sYWJlbCgnd3BDYW5jZWxVcGxvYWRMYmwnLCBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYW5jZWwnKSk7XG5cdFx0XHRjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMuY2FuY2VsQnV0dG9uID0gY2FuY2VsO1xuXHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ2hvdGNhdGlucHV0Jztcblx0XHRcdHNwYW4uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXHRcdFx0c3Bhbi5hcHBlbmQodGV4dCk7XG5cdFx0XHQvLyBQdXQgc29tZSB0ZXh0IGludG8gdGhpcyBzcGFuIChhMCBpcyBuYnNwKSBhbmQgbWFrZSBzdXJlIGl0IGFsd2F5cyBzdGF5cyBvbiB0aGUgc2FtZVxuXHRcdFx0Ly8gbGluZSBhcyB0aGUgaW5wdXQgZmllbGQsIG90aGVyd2lzZSwgSUU4LzkgbWlzY2FsY3VsYXRlcyB0aGUgaGVpZ2h0IG9mIHRoZSBzcGFuIGFuZFxuXHRcdFx0Ly8gdGhlbiB0aGUgZW5naW5lIHNlbGVjdG9yIG1heSBvdmVybGFwIHRoZSBpbnB1dCBmaWVsZC5cblx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJ1xcdTAwQTAnLCB0cnVlKSk7XG5cdFx0XHRzcGFuLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcblx0XHRcdGlmIChsaXN0KSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKGxpc3QpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5lbmdpbmVTZWxlY3Rvcik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5pY29uKTtcblx0XHRcdH1cblx0XHRcdHNwYW4uYXBwZW5kKE9LKTtcblx0XHRcdHNwYW4uYXBwZW5kKGNhbmNlbCk7XG5cdFx0XHRmb3JtLmFwcGVuZChzcGFuKTtcblx0XHRcdGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuc3Bhbi5hcHBlbmQoZm9ybSk7XG5cdFx0fVxuXHRcdGRpc3BsYXkoZXZlbnQpIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkgJiYgIW9uVXBsb2FkICYmIHRoaXMubGluZSkge1xuXHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IodGhpcy5saW5lLCBudWxsLCB0aGlzLnNwYW4sIHRydWUpOyAvLyBDcmVhdGUgYSBuZXcgb25lXG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNvbW1pdEJ1dHRvbiAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgIT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMuZm9ybSkge1xuXHRcdFx0XHR0aGlzLm1ha2VGb3JtKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLmxhc3RTYXZlZEhpZGRlbjtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMubGFzdFNhdmVkS2V5O1xuXHRcdFx0dGhpcy5pY29uLnNyYyA9IHRoaXMuY3VycmVudEV4aXN0cyA/IEhDLmV4aXN0c1llcyA6IEhDLmV4aXN0c05vO1xuXHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnkgKyAodGhpcy5jdXJyZW50S2V5ID09PSBudWxsID8gJycgOiBgfCR7dGhpcy5jdXJyZW50S2V5fWApO1xuXHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdHRoaXMubGFzdElucHV0ID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gdGhpcy5jdXJyZW50RXhpc3RzO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCA/IE9QRU4gOiBDSEFOR0VfUEVORElORztcblx0XHRcdHRoaXMubGFzdFNlbGVjdGlvbiA9IHtcblx0XHRcdFx0c3RhcnQ6IHRoaXMuY3VycmVudENhdGVnb3J5Lmxlbmd0aCxcblx0XHRcdFx0ZW5kOiB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGgsXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRcdC8vIERpc3BsYXkgdGhlIGZvcm1cblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0aGlzLmZvcm0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHRcdFx0dGhpcy5vay5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0Ly8gS2lsbCB0aGUgZXZlbnQgYmVmb3JlIGZvY3Vzc2luZywgb3RoZXJ3aXNlIElFIHdpbGwga2lsbCB0aGUgb25mb2N1cyBldmVudCFcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0dGhpcy50ZXh0LmZvY3VzKCk7XG5cdFx0XHR0aGlzLnRleHQucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0c2hvdyhldmVudCwgZW5naW5lLCByZWFkT25seSkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5kaXNwbGF5KGV2ZW50KTtcblx0XHRcdGNvbnN0IHYgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRleHQucmVhZE9ubHkgPSAhIXJlYWRPbmx5O1xuXHRcdFx0dGhpcy5lbmdpbmUgPSBlbmdpbmU7XG5cdFx0XHR0aGlzLnRleHRjaGFuZ2UoZmFsc2UsIHRydWUpOyAvLyBkbyBhdXRvY29tcGxldGlvbiwgZm9yY2UgZGlzcGxheSBvZiBzdWdnZXN0aW9uc1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0b3BlbihldmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgdGhpcy5lbmdpbmUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdLnRlbXAgPyBIQy5zdWdnZXN0aW9ucyA6IHRoaXMuZW5naW5lKTtcblx0XHR9XG5cdFx0ZG93bihldmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgJ3N1YmNhdCcsIHRydWUpO1xuXHRcdH1cblx0XHR1cChldmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgJ3BhcmVudGNhdCcpO1xuXHRcdH1cblx0XHRjYW5jZWwoKSB7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5ICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpOyAvLyBXZSBhZGRlZCBhIG5ldyBhZGRlciB3aGVuIG9wZW5pbmdcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQ2xvc2UsIHJlLWRpc3BsYXkgbGlua1xuXHRcdFx0dGhpcy5pbmFjdGl2YXRlKCk7XG5cdFx0XHR0aGlzLmZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMub3JpZ2luYWxTdGF0ZTtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMubGFzdFNhdmVkS2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLmxhc3RTYXZlZEhpZGRlbjtcblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5ICYmIHRoaXMuY3VycmVudEtleS5sZW5ndGggPiAwID8gdGhpcy5jdXJyZW50S2V5IDogJyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICghb25VcGxvYWQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdHJlbW92ZUVkaXRvcigpIHtcblx0XHRcdGlmICghbmV3RE9NKSB7XG5cdFx0XHRcdGNvbnN0IG5leHQgPSB0aGlzLnNwYW4ubmV4dFNpYmxpbmc7XG5cdFx0XHRcdGlmIChuZXh0KSB7XG5cdFx0XHRcdFx0bmV4dC5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3BhbiAmJiB0aGlzLnNwYW4ucGFyZW50Tm9kZSkge1xuXHRcdFx0XHR0aGlzLnNwYW4ucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGVkaXRvcnNbaV0gPT09IHRoaXMpIHtcblx0XHRcdFx0XHRlZGl0b3JzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdHJvbGxiYWNrKGV2ZW50KSB7XG5cdFx0XHR0aGlzLnVuZG9MaW5rLnJlbW92ZSgpO1xuXHRcdFx0dGhpcy51bmRvTGluayA9IG51bGw7XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLnN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdFx0aWYgKCF0aGlzLmN1cnJlbnRDYXRlZ29yeSB8fCB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0Ly8gSXQgd2FzIGEgbmV3bHkgYWRkZWQgY2F0ZWdvcnkuIFJlbW92ZSB0aGUgd2hvbGUgZWRpdG9yLlxuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gUmVkaXNwbGF5IHRoZSBsaW5rLi4uXG5cdFx0XHRcdHRoaXMuY2F0TGluay5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuYXBwZW5kKG1ha2UodGhpcy5jdXJyZW50Q2F0ZWdvcnksIHRydWUpKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3RoaXMuY3VycmVudENhdGVnb3J5fWApO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXkgfHwgJyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5jbGFzc05hbWUgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICduZXcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdFx0aWYgKHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHR9XG5cdFx0aW5hY3RpdmF0ZSgpIHtcblx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlzX2FjdGl2ZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRhY2NlcHRDaGVjayhkb250Q2hlY2spIHtcblx0XHRcdHRoaXMuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdGxldCBrZXkgPSBudWxsO1xuXHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Wywga2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHYgPSB2YWx1ZVswXS5yZXBsYWNlKC9fL2csICcgJykudHJpbSgpO1xuXHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMpIHtcblx0XHRcdFx0diA9IGNhcGl0YWxpemUodik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHY7XG5cdFx0XHR2ID0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0IWRvbnRDaGVjayAmJlxuXHRcdFx0XHQoKGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHYgPT09IGNvbmYud2dUaXRsZSkgfHwgKEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB2O1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0ga2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5pbnB1dEV4aXN0cztcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRhY2NlcHQoZXZlbnQpIHtcblx0XHRcdC8vIChldnRLZXlzKGV2ZW50KSAmIDEpICE9PSAwXG5cdFx0XHQvLyDlvZPkuJTku4XlvZNldnRLZXlzKGV2ZW50KeS4ujHml7bvvIzmlbTkuKrliKTliKvlvI/miY3kuLp0cnVlXG5cdFx0XHR0aGlzLm5vQ29tbWl0ID0gZXZ0S2V5cyhldmVudCkgPT09IDE7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBldnRLaWxsKGV2ZW50KTtcblx0XHRcdGlmICh0aGlzLmFjY2VwdENoZWNrKCkpIHtcblx0XHRcdFx0Y29uc3QgdG9SZXNvbHZlID0gW3RoaXNdO1xuXHRcdFx0XHRjb25zdCBvcmlnaW5hbCA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0XHRyZXNvbHZlTXVsdGkodG9SZXNvbHZlLCAocmVzb2x2ZWQpID0+IHtcblx0XHRcdFx0XHRpZiAocmVzb2x2ZWRbMF0uZGFiKSB7XG5cdFx0XHRcdFx0XHRzaG93RGFiKHJlc29sdmVkWzBdKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlc29sdmVkWzBdLmFjY2VwdENoZWNrKHRydWUpKSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlZFswXS5jb21taXQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmVkWzBdLmN1cnJlbnRDYXRlZ29yeSA9PT0gb3JpZ2luYWxcblx0XHRcdFx0XHRcdFx0XHQ/IG51bGxcblx0XHRcdFx0XHRcdFx0XHQ6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9yZXNvbHZlZCcsIG9yaWdpbmFsKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0Y2xvc2UoKSB7XG5cdFx0XHRpZiAoIXRoaXMuY2F0TGluaykge1xuXHRcdFx0XHQvLyBDcmVhdGUgYSBjYXRMaW5rXG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKCdmb28nLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLnNwYW4uaW5zZXJ0QmVmb3JlKHRoaXMuY2F0TGluaywgdGhpcy5zcGFuLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jYXRMaW5rLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLmNhdExpbmsuYXBwZW5kKG1ha2UodGhpcy5jdXJyZW50Q2F0ZWdvcnksIHRydWUpKTtcblx0XHRcdHRoaXMuY2F0TGluay5ocmVmID0gd2lraVBhZ2VQYXRoKGAke0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0aGlzLmN1cnJlbnRDYXRlZ29yeX1gKTtcblx0XHRcdHRoaXMuY2F0TGluay5jbGFzc05hbWUgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICduZXcnO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLmN1cnJlbnRLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMuY3VycmVudEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5jdXJyZW50SGlkZGVuO1xuXHRcdFx0Ly8gQ2xvc2UgZm9ybSBhbmQgcmVkaXNwbGF5IGNhdGVnb3J5XG5cdFx0XHR0aGlzLmluYWN0aXZhdGUoKTtcblx0XHRcdHRoaXMuZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdFx0aWYgKG9uVXBsb2FkICYmIHRoaXMubGluZSkge1xuXHRcdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcih0aGlzLmxpbmUsIG51bGwsIHRoaXMuc3BhbiwgdHJ1ZSk7IC8vIENyZWF0ZSBhIG5ldyBvbmVcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5tYWtlTGlua1NwYW4oKTtcblx0XHRcdFx0dGhpcy5zcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdH1cblx0XHRcdGlmICghdGhpcy51bmRvTGluaykge1xuXHRcdFx0XHQvLyBBcHBlbmQgYW4gdW5kbyBsaW5rLlxuXHRcdFx0XHRjb25zdCBzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm9sbGJhY2suYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MudW5kbywgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtdW5kbycpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdHRoaXMudW5kb0xpbmsgPSBzcGFuO1xuXHRcdFx0XHRpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdHRoaXMudXBEb3duTGlua3Muc3R5bGUuZGlzcGxheSA9IHRoaXMubGFzdFNhdmVkRXhpc3RzID8gJycgOiAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSBDSEFOR0VEO1xuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdGNvbW1pdCgpIHtcblx0XHRcdC8vIENoZWNrIGFnYWluIHRvIGNhdGNoIHByb2JsZW0gY2FzZXMgYWZ0ZXIgcmVkaXJlY3QgcmVzb2x1dGlvblxuXHRcdFx0aWYgKFxuXHRcdFx0XHQodGhpcy5jdXJyZW50Q2F0ZWdvcnkgPT09IHRoaXMub3JpZ2luYWxDYXRlZ29yeSAmJlxuXHRcdFx0XHRcdCh0aGlzLmN1cnJlbnRLZXkgPT09IHRoaXMub3JpZ2luYWxLZXkgfHxcblx0XHRcdFx0XHRcdCh0aGlzLmN1cnJlbnRLZXkgPT09IG51bGwgJiYgdGhpcy5vcmlnaW5hbEtleS5sZW5ndGggPT09IDApKSkgfHxcblx0XHRcdFx0KGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHRoaXMuY3VycmVudENhdGVnb3J5ID09PSBjb25mLndnVGl0bGUpIHx8XG5cdFx0XHRcdChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QodGhpcy5jdXJyZW50Q2F0ZWdvcnkpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlLCBzZWxmKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlbW92ZShldmVudCkge1xuXHRcdFx0Ly8gKGV2dEtleXMoZXZlbnQpICYgMSlcblx0XHRcdC8vIOW9k+S4lOS7heW9k2V2dEtleXMoZXZlbnQp5Li6MeaXtu+8jOaVtOS4quWIpOWIq+W8j+aJjeS4ujHvvIzlkKbliJnpg73mmK8wXG5cdFx0XHR0aGlzLmRvUmVtb3ZlKGV2dEtleXMoZXZlbnQpID09PSAxKTtcblx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHR9XG5cdFx0ZG9SZW1vdmUobm9Db21taXQpIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdFx0Ly8gRW1wdHkgaW5wdXQgb24gYWRkaW5nIGEgbmV3IGNhdGVnb3J5XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gJyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5jc3NUZXh0ICs9ICc7IHRleHQtZGVjb3JhdGlvbiA6IGxpbmUtdGhyb3VnaCAhaW1wb3J0YW50Oyc7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IERFTEVURUQ7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdH0gZWxzZSBpZiAob25VcGxvYWQpIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIHRoaXMgZWRpdG9yIGNvbXBsZXRlbHlcblx0XHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSBERUxFVEVEO1xuXHRcdFx0XHR0aGlzLm5vQ29tbWl0ID0gbm9Db21taXQgfHwgSEMuZGVsX25lZWRzX2RpZmY7XG5cdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUsIHNlbGYpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5zdGF0ZSA9IHNlbGYub3JpZ2luYWxTdGF0ZTtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlc3RvcmUoZXZlbnQpIHtcblx0XHRcdC8vIENhbiBvY2N1ciBvbmx5IGlmIHdlIGRvIGhhdmUgYSBjb21taXQgYnV0dG9uIGFuZCBhcmUgbm90IG9uIHRoZSB1cGxvYWQgZm9ybVxuXHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGhpcy5vcmlnaW5hbFN0YXRlO1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubm9ybWFsTGlua3Muc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHQvLyBJbnRlcm5hbCBvcGVyYXRpb25zXG5cdFx0c2VsZWN0RW5naW5lKGVuZ2luZU5hbWUpIHtcblx0XHRcdGlmICghdGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5naW5lU2VsZWN0b3Iub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbaV0udmFsdWUgPT09IGVuZ2luZU5hbWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNhbml0aXplSW5wdXQoKSB7XG5cdFx0XHRsZXQgdiA9IHRoaXMudGV4dC52YWx1ZSB8fCAnJztcblx0XHRcdHYgPSB2LnJlcGxhY2UoL14oXFxzfF8pKy8sICcnKTsgLy8gVHJpbSBsZWFkaW5nIGJsYW5rcyBhbmQgdW5kZXJzY29yZXNcblx0XHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgXigke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0aWYgKHJlLnRlc3QodikpIHtcblx0XHRcdFx0diA9IHYuc2xpY2UoTWF0aC5tYXgoMCwgdi5pbmRleE9mKCc6JykgKyAxKSkucmVwbGFjZSgvXihcXHN8XykrLywgJycpO1xuXHRcdFx0fVxuXHRcdFx0diA9IHYucmVwbGFjZSgvXFx1MjAwRSQvLCAnJyk7IC8vIFRyaW0gZW5kaW5nIGxlZnQtdG8tcmlnaHQgbWFya1xuXHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMpIHtcblx0XHRcdFx0diA9IGNhcGl0YWxpemUodik7XG5cdFx0XHR9XG5cdFx0XHQvLyBPbmx5IHVwZGF0ZSB0aGUgaW5wdXQgZmllbGQgaWYgdGhlcmUgaXMgYSBkaWZmZXJlbmNlLiBWYXJpb3VzIGJyb3dzZXJzIG90aGVyd2lzZVxuXHRcdFx0Ly8gcmVzZXQgdGhlIHNlbGVjdGlvbiBhbmQgY3Vyc29yIHBvc2l0aW9uIGFmdGVyIGVhY2ggdmFsdWUgcmUtYXNzaWdubWVudC5cblx0XHRcdGlmICh0aGlzLnRleHQudmFsdWUgIT09IG51bGwgJiYgdGhpcy50ZXh0LnZhbHVlICE9PSB2KSB7XG5cdFx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHY7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG1ha2VDYWxsKHVybCwgY2FsbGJhY2tPYmosIGVuZ2luZSwgcXVlcnlLZXksIGNsZWFuS2V5KSB7XG5cdFx0XHRsZXQgY2IgPSBjYWxsYmFja09iajtcblx0XHRcdGNvbnN0IGUgPSBlbmdpbmU7XG5cdFx0XHRjb25zdCB2ID0gcXVlcnlLZXk7XG5cdFx0XHRjb25zdCB6ID0gY2xlYW5LZXk7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0XHRcdGNiLmNhbGxzTWFkZSsrO1xuXHRcdFx0XHRpZiAoY2IuY2FsbHNNYWRlID09PSBjYi5ub2ZDYWxscykge1xuXHRcdFx0XHRcdGlmIChjYi5leGlzdHMpIHtcblx0XHRcdFx0XHRcdGNiLmFsbFRpdGxlcy5leGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2Iubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdFx0Y2IuYWxsVGl0bGVzLm5vcm1hbGl6ZWQgPSBjYi5ub3JtYWxpemVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWNiLmRvbnRDYWNoZSAmJiAhc3VnZ2VzdGlvbkNvbmZpZ3NbY2IuZW5naW5lTmFtZV0uY2FjaGVbel0pIHtcblx0XHRcdFx0XHRcdHN1Z2dlc3Rpb25Db25maWdzW2NiLmVuZ2luZU5hbWVdLmNhY2hlW3pdID0gY2IuYWxsVGl0bGVzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzZWxmLnRleHQucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAoIWNiLmNhbmNlbGxlZCkge1xuXHRcdFx0XHRcdFx0c2VsZi5zaG93U3VnZ2VzdGlvbnMoY2IuYWxsVGl0bGVzLCBjYi5ub0NvbXBsZXRpb24sIHYsIGNiLmVuZ2luZU5hbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2IgPT09IHNlbGYuY2FsbGJhY2tPYmopIHtcblx0XHRcdFx0XHRcdHNlbGYuY2FsbGJhY2tPYmogPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYiA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdCQuZ2V0SlNPTih1cmwsIChqc29uKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlcyA9IGUuaGFuZGxlcihqc29uLCB6KTtcblx0XHRcdFx0aWYgKHRpdGxlcyAmJiB0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNiLmFsbFRpdGxlcyA9IGNiLmFsbFRpdGxlcyA9PT0gbnVsbCA/IHRpdGxlcyA6IFsuLi5jYi5hbGxUaXRsZXMsIC4uLmdlbmVyYXRlQXJyYXkodGl0bGVzKV07XG5cdFx0XHRcdFx0aWYgKHRpdGxlcy5leGlzdHMpIHtcblx0XHRcdFx0XHRcdGNiLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aXRsZXMubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdFx0Y2Iubm9ybWFsaXplZCA9IHRpdGxlcy5ub3JtYWxpemVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRkb25lKCk7XG5cdFx0XHR9KS5mYWlsKChyZXEpID0+IHtcblx0XHRcdFx0aWYgKCFyZXEpIHtcblx0XHRcdFx0XHRub1N1Z2dlc3Rpb25zID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYi5kb250Q2FjaGUgPSB0cnVlO1xuXHRcdFx0XHRkb25lKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y2FsbGJhY2tPYmogPSBudWxsO1xuXHRcdHRleHRjaGFuZ2UoZG9udF9hdXRvY29tcGxldGUsIGZvcmNlKSB7XG5cdFx0XHQvLyBIaWRlIGFsbCBvdGhlciBsaXN0c1xuXHRcdFx0bWFrZUFjdGl2ZSh0aGlzKTtcblx0XHRcdC8vIEdldCBpbnB1dCB2YWx1ZSwgb21pdCBzb3J0IGtleSwgaWYgYW55XG5cdFx0XHR0aGlzLnNhbml0aXplSW5wdXQoKTtcblx0XHRcdGxldCB2ID0gdGhpcy50ZXh0LnZhbHVlO1xuXHRcdFx0Ly8gRGlzcmVnYXJkIGFueXRoaW5nIGFmdGVyIGEgcGlwZS5cblx0XHRcdGNvbnN0IHBpcGUgPSB2LmluZGV4T2YoJ3wnKTtcblx0XHRcdGlmIChwaXBlID49IDApIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdi5zbGljZShNYXRoLm1heCgwLCBwaXBlICsgMSkpO1xuXHRcdFx0XHR2ID0gdi5zbGljZSgwLCBNYXRoLm1heCgwLCBwaXBlKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMubGFzdElucHV0ID09PSB2ICYmICFmb3JjZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9IC8vIE5vIGNoYW5nZVxuXHRcdFx0aWYgKHRoaXMubGFzdElucHV0ICE9PSB2KSB7XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB2O1xuXHRcdFx0dGhpcy5sYXN0UmVhbElucHV0ID0gdjtcblx0XHRcdC8vIE1hcmsgYmxhY2tsaXN0ZWQgaW5wdXRzLlxuXHRcdFx0dGhpcy5vay5kaXNhYmxlZCA9IHYubGVuZ3RoID4gMCAmJiBIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3Qodik7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHQvLyBObyBBamF4OiBqdXN0IG1ha2Ugc3VyZSB0aGUgbGlzdCBpcyBoaWRkZW5cblx0XHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHR0aGlzLmljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoW10pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgY2xlYW5LZXkgPSB2LnJlcGxhY2UoL1tcXHUyMDBFXFx1MjAwRlxcdTIwMkEtXFx1MjAyRV0vZywgJycpLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCAnICcpO1xuXHRcdFx0Y2xlYW5LZXkgPSByZXBsYWNlU2hvcnRjdXRzKGNsZWFuS2V5LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0Y2xlYW5LZXkgPSBjbGVhbktleS50cmltKCk7XG5cdFx0XHRpZiAoY2xlYW5LZXkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1N1Z2dlc3Rpb25zKFtdKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuY2FsbGJhY2tPYmopIHtcblx0XHRcdFx0dGhpcy5jYWxsYmFja09iai5jYW5jZWxsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZW5naW5lTmFtZSA9IHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXSA/IHRoaXMuZW5naW5lIDogJ2NvbWJpbmVkJztcblx0XHRcdGRvbnRfYXV0b2NvbXBsZXRlIHx8PSBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS5ub0NvbXBsZXRpb247XG5cdFx0XHRpZiAoc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0uY2FjaGVbY2xlYW5LZXldKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1N1Z2dlc3Rpb25zKHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLmNhY2hlW2NsZWFuS2V5XSwgZG9udF9hdXRvY29tcGxldGUsIHYsIGVuZ2luZU5hbWUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB7ZW5naW5lc30gPSBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXTtcblx0XHRcdHRoaXMuY2FsbGJhY2tPYmogPSB7XG5cdFx0XHRcdGFsbFRpdGxlczogbnVsbCxcblx0XHRcdFx0Y2FsbHNNYWRlOiAwLFxuXHRcdFx0XHRub2ZDYWxsczogZW5naW5lcy5sZW5ndGgsXG5cdFx0XHRcdG5vQ29tcGxldGlvbjogZG9udF9hdXRvY29tcGxldGUsXG5cdFx0XHRcdGVuZ2luZU5hbWUsXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5tYWtlQ2FsbHMoZW5naW5lcywgdGhpcy5jYWxsYmFja09iaiwgdiwgY2xlYW5LZXkpO1xuXHRcdH1cblx0XHRtYWtlQ2FsbHMoZW5naW5lcywgY2IsIHYsIGNsZWFuS2V5KSB7XG5cdFx0XHRmb3IgKGNvbnN0IGVuZ2luZV8gb2YgZW5naW5lcykge1xuXHRcdFx0XHRjb25zdCBlbmdpbmUgPSBzdWdnZXN0aW9uRW5naW5lc1tlbmdpbmVfXTtcblx0XHRcdFx0Y29uc3QgdXJsID0gY29uZi53Z1NjcmlwdFBhdGggKyBlbmdpbmUudXJpLnJlcGxhY2UoL1xcJDEvZywgZW5jb2RlVVJJQ29tcG9uZW50KGNsZWFuS2V5KSk7XG5cdFx0XHRcdHRoaXMubWFrZUNhbGwodXJsLCBjYiwgZW5naW5lLCB2LCBjbGVhbktleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNob3dTdWdnZXN0aW9ucyh0aXRsZXMsIGRvbnRBdXRvY29tcGxldGUsIHF1ZXJ5S2V5LCBlbmdpbmVOYW1lKSB7XG5cdFx0XHR0aGlzLnRleHQucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdHRoaXMuZGFiID0gbnVsbDtcblx0XHRcdHRoaXMuc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHRpZiAoIXRoaXMubGlzdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBEZWZhdWx0Li4uXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuZW5naW5lTmFtZSA9IGVuZ2luZU5hbWU7XG5cdFx0XHRpZiAoZW5naW5lTmFtZSkge1xuXHRcdFx0XHRpZiAoIXRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZU5hbWUgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHF1ZXJ5S2V5KSB7XG5cdFx0XHRcdGlmICh0aGlzLmxhc3RJbnB1dC5pbmRleE9mKHF1ZXJ5S2V5KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy5sYXN0UXVlcnkgJiZcblx0XHRcdFx0XHR0aGlzLmxhc3RJbnB1dC5pbmRleE9mKHRoaXMubGFzdFF1ZXJ5KSA9PT0gMCAmJlxuXHRcdFx0XHRcdHRoaXMubGFzdFF1ZXJ5Lmxlbmd0aCA+IHF1ZXJ5S2V5Lmxlbmd0aFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGFzdFF1ZXJ5ID0gcXVlcnlLZXk7XG5cdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRsZXQgdiA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0diA9IEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPyBjYXBpdGFsaXplKHZbMF0pIDogdlswXTtcblx0XHRcdGxldCB2Tm9ybWFsaXplZCA9IHY7XG5cdFx0XHRjb25zdCBrbm93blRvRXhpc3QgPSB0aXRsZXMgJiYgdGl0bGVzLmV4aXN0cztcblx0XHRcdGxldCBpO1xuXHRcdFx0aWYgKHRpdGxlcykge1xuXHRcdFx0XHRpZiAodGl0bGVzLm5vcm1hbGl6ZWQgJiYgdi5pbmRleE9mKHF1ZXJ5S2V5KSA9PT0gMCkge1xuXHRcdFx0XHRcdC8vIFdlIGdvdCBiYWNrIGEgZGlmZmVyZW50IG5vcm1hbGl6YXRpb24gdGhhbiB3aGF0IGlzIGluIHRoZSBpbnB1dCBmaWVsZFxuXHRcdFx0XHRcdHZOb3JtYWxpemVkID0gdGl0bGVzLm5vcm1hbGl6ZWQgKyB2LnNsaWNlKHF1ZXJ5S2V5Lmxlbmd0aCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdkxvdyA9IHZOb3JtYWxpemVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdC8vIFN0cmlwIGJsYWNrbGlzdGVkIGNhdGVnb3JpZXNcblx0XHRcdFx0aWYgKEhDLmJsYWNrbGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChIQy5ibGFja2xpc3QudGVzdCh0aXRsZXNbaV0pKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGl0bGVzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdFx0XHRpZiAoYSA9PT0gYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhLmluZGV4T2YoYikgPT09IDApIHtcblx0XHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBhIGJlZ2lucyB3aXRoIGI6IGEgPiBiXG5cdFx0XHRcdFx0aWYgKGIuaW5kZXhPZihhKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBiIGJlZ2lucyB3aXRoIGE6IGEgPCBiXG5cdFx0XHRcdFx0Ly8gT3BlbnNlYXJjaCBtYXkgcmV0dXJuIHN0dWZmIG5vdCBiZWdpbm5pbmcgd2l0aCB0aGUgc2VhcmNoIHByZWZpeCFcblx0XHRcdFx0XHRsZXQgcHJlZml4TWF0Y2hBID0gYS5pbmRleE9mKHZOb3JtYWxpemVkKSA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0XHRcdGxldCBwcmVmaXhNYXRjaEIgPSBiLmluZGV4T2Yodk5vcm1hbGl6ZWQpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0aWYgKHByZWZpeE1hdGNoQSAhPT0gcHJlZml4TWF0Y2hCKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJlZml4TWF0Y2hCIC0gcHJlZml4TWF0Y2hBO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBDYXNlLWluc2Vuc2l0aXZlIHByZWZpeCBtYXRjaCFcblx0XHRcdFx0XHRjb25zdCBhTG93ID0gYS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdGNvbnN0IGJMb3cgPSBiLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0cHJlZml4TWF0Y2hBID0gYUxvdy5pbmRleE9mKHZMb3cpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0cHJlZml4TWF0Y2hCID0gYkxvdy5pbmRleE9mKHZMb3cpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0aWYgKHByZWZpeE1hdGNoQSAhPT0gcHJlZml4TWF0Y2hCKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJlZml4TWF0Y2hCIC0gcHJlZml4TWF0Y2hBO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYSA8IGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGIgPCBhKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBSZW1vdmUgZHVwbGljYXRlcyBhbmQgc2VsZi1yZWZlcmVuY2VzXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHQoaSArIDEgPCB0aXRsZXMubGVuZ3RoICYmIHRpdGxlc1tpXSA9PT0gdGl0bGVzW2kgKyAxXSkgfHxcblx0XHRcdFx0XHRcdChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAxNCAmJiB0aXRsZXNbaV0gPT09IGNvbmYud2dUaXRsZSlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRpdGxlcyB8fCB0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZW5naW5lTmFtZSAmJiBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSAmJiAhc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0udGVtcCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHRcdHRoaXMuaWNvbi5zcmMgPSBIQy5leGlzdHNObztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFtmaXJzdFRpdGxlXSA9IHRpdGxlcztcblx0XHRcdGNvbnN0IGNvbXBsZXRlZCA9IHRoaXMuYXV0b0NvbXBsZXRlKGZpcnN0VGl0bGUsIHYsIHZOb3JtYWxpemVkLCBrZXksIGRvbnRBdXRvY29tcGxldGUpO1xuXHRcdFx0Y29uc3QgZXhpc3RpbmcgPSBjb21wbGV0ZWQgfHwga25vd25Ub0V4aXN0IHx8IGZpcnN0VGl0bGUgPT09IHJlcGxhY2VTaG9ydGN1dHModiwgSEMuc2hvcnRjdXRzKTtcblx0XHRcdGlmIChlbmdpbmVOYW1lICYmIHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdICYmICFzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS50ZW1wKSB7XG5cdFx0XHRcdHRoaXMuaWNvbi5zcmMgPSBleGlzdGluZyA/IEhDLmV4aXN0c1llcyA6IEhDLmV4aXN0c05vO1xuXHRcdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gZXhpc3Rpbmc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY29tcGxldGVkKSB7XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gZmlyc3RUaXRsZTtcblx0XHRcdFx0aWYgKHRpdGxlcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIChSZS0pZmlsbCB0aGUgbGlzdFxuXHRcdFx0d2hpbGUgKHRoaXMubGlzdC5maXJzdENoaWxkKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBvcHQgPSBtYWtlKCdvcHRpb24nKTtcblx0XHRcdFx0b3B0LmFwcGVuZChtYWtlKHRpdGxlc1tpXSwgdHJ1ZSkpO1xuXHRcdFx0XHRvcHQuc2VsZWN0ZWQgPSBjb21wbGV0ZWQgJiYgaSA9PT0gMDtcblx0XHRcdFx0dGhpcy5saXN0LmFwcGVuZChvcHQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kaXNwbGF5TGlzdCgpO1xuXHRcdH1cblx0XHRkaXNwbGF5TGlzdCgpIHtcblx0XHRcdHRoaXMuc2hvd3NMaXN0ID0gdHJ1ZTtcblx0XHRcdGlmICghdGhpcy5pc19hY3RpdmUpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCBub2ZJdGVtcyA9IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCA+IEhDLmxpc3RTaXplID8gSEMubGlzdFNpemUgOiB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGg7XG5cdFx0XHRpZiAobm9mSXRlbXMgPD0gMSkge1xuXHRcdFx0XHRub2ZJdGVtcyA9IDI7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3Quc2l6ZSA9IG5vZkl0ZW1zO1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLmFsaWduID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdHRoaXMubGlzdC5zdHlsZS56SW5kZXggPSA1O1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdC8vIENvbXB1dGUgaW5pdGlhbCBsaXN0IHBvc2l0aW9uLiBGaXJzdCB0aGUgaGVpZ2h0LlxuXHRcdFx0Y29uc3QgYW5jaG9yID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdGxldCBsaXN0aCA9IDA7XG5cdFx0XHRpZiAodGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHQvLyBPZmYtc2NyZWVuIGRpc3BsYXkgdG8gZ2V0IHRoZSBoZWlnaHRcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLnRvcCA9IGAke3RoaXMudGV4dC5vZmZzZXRUb3B9cHhgO1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGVbYW5jaG9yXSA9ICctMTAwMDBweCc7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdGxpc3RoID0gdGhpcy5saXN0Lm9mZnNldEhlaWdodDtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsaXN0aCA9IHRoaXMubGlzdC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0XHQvLyBBcHByb3hpbWF0ZSBjYWxjdWxhdGlvbiBvZiBtYXhpbXVtIGxpc3Qgc2l6ZVxuXHRcdFx0bGV0IG1heExpc3RIZWlnaHQgPSBsaXN0aDtcblx0XHRcdGlmIChub2ZJdGVtcyA8IEhDLmxpc3RTaXplKSB7XG5cdFx0XHRcdG1heExpc3RIZWlnaHQgPSAobGlzdGggLyBub2ZJdGVtcykgKiBIQy5saXN0U2l6ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHZpZXdwb3J0ID0gKHdoYXQpID0+IHtcblx0XHRcdFx0aWYgKGlzX3dlYmtpdCAmJiAhZG9jdW1lbnQuZXZhbHVhdGUpIHtcblx0XHRcdFx0XHQvLyBTYWZhcmkgPCAzLjBcblx0XHRcdFx0XHRyZXR1cm4gd2luZG93W2Bpbm5lciR7d2hhdH1gXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBzID0gYGNsaWVudCR7d2hhdH1gO1xuXHRcdFx0XHRpZiAod2luZG93Lm9wZXJhKSB7XG5cdFx0XHRcdFx0cmV0dXJuICQoJ2JvZHknKVswXVtzXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtzXSA6IDApIHx8ICQoJ2JvZHknKVswXVtzXSB8fCAwO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHNjcm9sbF9vZmZzZXQgPSAod2hhdCkgPT4ge1xuXHRcdFx0XHRjb25zdCBzID0gYHNjcm9sbCR7d2hhdH1gO1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtzXSA6IDApIHx8ICQoJ2JvZHknKVswXVtzXSB8fCAwO1xuXHRcdFx0XHRpZiAoaXNfcnRsICYmIHdoYXQgPT09ICdMZWZ0Jykge1xuXHRcdFx0XHRcdC8vIFJUTCBpbmNvbnNpc3RlbmNpZXMuXG5cdFx0XHRcdFx0Ly8gRkY6IDAgYXQgdGhlIGZhciByaWdodCwgdGhlbiBpbmNyZWFzaW5nbHkgbmVnYXRpdmUgdmFsdWVzLlxuXHRcdFx0XHRcdC8vIElFID49IDg6IDAgYXQgdGhlIGZhciByaWdodCwgdGhlbiBpbmNyZWFzaW5nbHkgcG9zaXRpdmUgdmFsdWVzLlxuXHRcdFx0XHRcdC8vIFdlYmtpdDogc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCBhdCB0aGUgZmFyIHJpZ2h0LCB0aGVuIGRvd24gdG8gemVyby5cblx0XHRcdFx0XHQvLyBPcGVyYTogZG9uJ3Qga25vdy4uLlxuXHRcdFx0XHRcdGlmIChyZXN1bHQgPCAwKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSAtcmVzdWx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWlzX3dlYmtpdCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gc2Nyb2xsX29mZnNldCgnV2lkdGgnKSAtIHZpZXdwb3J0KCdXaWR0aCcpIC0gcmVzdWx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBOb3cgYWxsIGhhdmUgd2Via2l0IGJlaGF2aW9yLCBpLmUuIHplcm8gaWYgYXQgdGhlIGxlZnRtb3N0IGVkZ2UuXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IChub2RlKSA9PiB7XG5cdFx0XHRcdC8vIFN0cmlwcGVkLWRvd24gc2ltcGxpZmllZCBwb3NpdGlvbiBmdW5jdGlvbi4gSXQncyBnb29kIGVub3VnaCBmb3Igb3VyIHB1cnBvc2VzLlxuXHRcdFx0XHRpZiAobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcblx0XHRcdFx0XHRjb25zdCBib3ggPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR4OiBNYXRoLnJvdW5kKGJveC5sZWZ0ICsgc2Nyb2xsX29mZnNldCgnTGVmdCcpKSxcblx0XHRcdFx0XHRcdHk6IE1hdGgucm91bmQoYm94LnRvcCArIHNjcm9sbF9vZmZzZXQoJ1RvcCcpKSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0ID0gMDtcblx0XHRcdFx0bGV0IGwgPSAwO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0dCArPSBub2RlLm9mZnNldFRvcCB8fCAwO1xuXHRcdFx0XHRcdGwgKz0gbm9kZS5vZmZzZXRMZWZ0IHx8IDA7XG5cdFx0XHRcdFx0bm9kZSA9IG5vZGUub2Zmc2V0UGFyZW50O1xuXHRcdFx0XHR9IHdoaWxlIChub2RlKTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR4OiBsLFxuXHRcdFx0XHRcdHk6IHQsXG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgdGV4dFBvcyA9IHBvc2l0aW9uKHRoaXMudGV4dCk7XG5cdFx0XHRjb25zdCBubCA9IDA7XG5cdFx0XHRsZXQgbnQgPSAwO1xuXHRcdFx0Ly8gT3BlcmEgOS41IHNvbWVob3cgaGFzIG9mZnNldFdpZHRoID0gMCBoZXJlPz8gVXNlIHRoZSBuZXh0IGJlc3QgdmFsdWUuLi5cblx0XHRcdGxldCBvZmZzZXQgPSAwO1xuXHRcdFx0Y29uc3QgdGV4dEJveFdpZHRoID0gdGhpcy50ZXh0Lm9mZnNldFdpZHRoIHx8IHRoaXMudGV4dC5jbGllbnRXaWR0aDtcblx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS56SW5kZXggPSA1O1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS53aWR0aCA9IGAke3RleHRCb3hXaWR0aH1weGA7XG5cdFx0XHRcdC8vIEZpZ3VyZSBvdXQgdGhlIGhlaWdodCBvZiB0aGlzIHNlbGVjdG9yOiBkaXNwbGF5IGl0IG9mZi1zY3JlZW4sIHRoZW4gaGlkZSBpdCBhZ2Fpbi5cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZVthbmNob3JdID0gJy0xMDAwMHB4Jztcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnRvcCA9ICcwJztcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdFx0XHRvZmZzZXQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9mZnNldEhlaWdodDtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5lbmdpbmVTZWxlY3Rvci5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZVthbmNob3JdID0gYCR7bmx9cHhgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRleHRQb3MueSA8IG1heExpc3RIZWlnaHQgKyBvZmZzZXQgKyAxKSB7XG5cdFx0XHRcdC8vIFRoZSBsaXN0IG1pZ2h0IGV4dGVuZCBiZXlvbmQgdGhlIHVwcGVyIGJvcmRlciBvZiB0aGUgcGFnZS4gTGV0J3MgYXZvaWQgdGhhdCBieSBwbGFjaW5nIGl0XG5cdFx0XHRcdC8vIGJlbG93IHRoZSBpbnB1dCB0ZXh0IGZpZWxkLlxuXHRcdFx0XHRudCA9IHRoaXMudGV4dC5vZmZzZXRIZWlnaHQgKyBvZmZzZXQgKyAxO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS50b3AgPSBgJHt0aGlzLnRleHQub2Zmc2V0SGVpZ2h0fXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bnQgPSAtbGlzdGggLSBvZmZzZXQgLSAxO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS50b3AgPSBgJHstKG9mZnNldCArIDEpfXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0LnN0eWxlLnRvcCA9IGAke250fXB4YDtcblx0XHRcdHRoaXMubGlzdC5zdHlsZS53aWR0aCA9ICcnOyAvLyBObyBmaXhlZCB3aWR0aCAoeWV0KVxuXHRcdFx0dGhpcy5saXN0LnN0eWxlW2FuY2hvcl0gPSBgJHtubH1weGA7XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RW5naW5lKHRoaXMuZW5naW5lTmFtZSk7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0Ly8gU2V0IHRoZSB3aWR0aCBvZiB0aGUgbGlzdFxuXHRcdFx0aWYgKHRoaXMubGlzdC5vZmZzZXRXaWR0aCA8IHRleHRCb3hXaWR0aCkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUud2lkdGggPSBgJHt0ZXh0Qm94V2lkdGh9cHhgO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB0aGUgbGlzdCBpcyB3aWRlciB0aGFuIHRoZSB0ZXh0Ym94OiBtYWtlIHN1cmUgaXQgZml0cyBob3Jpem9udGFsbHkgaW50byB0aGUgYnJvd3NlciB3aW5kb3dcblx0XHRcdGNvbnN0IHNjcm9sbCA9IHNjcm9sbF9vZmZzZXQoJ0xlZnQnKTtcblx0XHRcdGNvbnN0IHZpZXdfdyA9IHZpZXdwb3J0KCdXaWR0aCcpO1xuXHRcdFx0bGV0IHcgPSB0aGlzLmxpc3Qub2Zmc2V0V2lkdGg7XG5cdFx0XHRjb25zdCBsX3BvcyA9IHBvc2l0aW9uKHRoaXMubGlzdCk7XG5cdFx0XHRsZXQgbGVmdCA9IGxfcG9zLng7XG5cdFx0XHRsZXQgcmlnaHQgPSBsZWZ0ICsgdztcblx0XHRcdGlmIChsZWZ0IDwgc2Nyb2xsIHx8IHJpZ2h0ID4gc2Nyb2xsICsgdmlld193KSB7XG5cdFx0XHRcdGlmICh3ID4gdmlld193KSB7XG5cdFx0XHRcdFx0dyA9IHZpZXdfdztcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUud2lkdGggPSBgJHt3fXB4YDtcblx0XHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0XHRsZWZ0ID0gcmlnaHQgLSB3O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyaWdodCA9IGxlZnQgKyB3O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgcmVsYXRpdmVfb2Zmc2V0ID0gMDtcblx0XHRcdFx0aWYgKGxlZnQgPCBzY3JvbGwpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSBzY3JvbGwgLSBsZWZ0O1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJpZ2h0ID4gc2Nyb2xsICsgdmlld193KSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVfb2Zmc2V0ID0gLShyaWdodCAtIHNjcm9sbCAtIHZpZXdfdyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IC1yZWxhdGl2ZV9vZmZzZXQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlbGF0aXZlX29mZnNldCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZVthbmNob3JdID0gYCR7bmwgKyByZWxhdGl2ZV9vZmZzZXR9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGF1dG9Db21wbGV0ZShuZXdWYWwsIGFjdFZhbCwgbm9ybWFsaXplZEFjdFZhbCwga2V5LCBkb250TW9kaWZ5KSB7XG5cdFx0XHRpZiAobmV3VmFsID09PSBhY3RWYWwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9udE1vZGlmeSB8fCB0aGlzLmltZSB8fCAhdGhpcy5jYW5TZWxlY3QoKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB3ZSBjYW4ndCBzZWxlY3QgcHJvcGVybHkgb3IgYW4gSU1FIGNvbXBvc2l0aW9uIGlzIG9uZ29pbmcsIGF1dG9jb21wbGV0aW9uIHdvdWxkIGJlIGEgbWFqb3IgYW5ub3lhbmNlIHRvIHRoZSB1c2VyLlxuXHRcdFx0aWYgKG5ld1ZhbC5pbmRleE9mKGFjdFZhbCkpIHtcblx0XHRcdFx0Ly8gTWF5YmUgaXQnbGwgd29yayB3aXRoIHRoZSBub3JtYWxpemVkIHZhbHVlIChORkMpP1xuXHRcdFx0XHRpZiAobm9ybWFsaXplZEFjdFZhbCAmJiBuZXdWYWwuaW5kZXhPZihub3JtYWxpemVkQWN0VmFsKSA9PT0gMCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmxhc3RSZWFsSW5wdXQgPT09IGFjdFZhbCkge1xuXHRcdFx0XHRcdFx0dGhpcy5sYXN0UmVhbElucHV0ID0gbm9ybWFsaXplZEFjdFZhbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWN0VmFsID0gbm9ybWFsaXplZEFjdFZhbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIEFjdHVhbCBpbnB1dCBpcyBhIHByZWZpeCBvZiB0aGUgbmV3IHRleHQuIEZpbGwgaW4gbmV3IHRleHQsIHNlbGVjdGluZyB0aGUgbmV3bHkgYWRkZWQgc3VmZml4XG5cdFx0XHQvLyBzdWNoIHRoYXQgaXQgY2FuIGJlIGVhc2lseSByZW1vdmVkIGJ5IHR5cGluZyBiYWNrc3BhY2UgaWYgdGhlIHN1Z2dlc3Rpb24gaXMgdW53YW50ZWQuXG5cdFx0XHR0aGlzLnRleHQuZm9jdXMoKTtcblx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IG5ld1ZhbCArIGtleTtcblx0XHRcdHRoaXMuc2V0U2VsZWN0aW9uKGFjdFZhbC5sZW5ndGgsIG5ld1ZhbC5sZW5ndGgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGNhblNlbGVjdCgpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHRoaXMudGV4dC5zZXRTZWxlY3Rpb25SYW5nZSB8fFxuXHRcdFx0XHR0aGlzLnRleHQuY3JlYXRlVGV4dFJhbmdlIHx8XG5cdFx0XHRcdCh0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRleHQuc2VsZWN0aW9uRW5kICE9PSB1bmRlZmluZWQpXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRzZXRTZWxlY3Rpb24oZnJvbSwgdG8pIHtcblx0XHRcdC8vIHRoaXMudGV4dCBtdXN0IGJlIGZvY3VzZWQgKGF0IGxlYXN0IG9uIElFKVxuXHRcdFx0aWYgKCF0aGlzLnRleHQudmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudGV4dC5zZXRTZWxlY3Rpb25SYW5nZSkge1xuXHRcdFx0XHQvLyBlLmcuIGtodG1sXG5cdFx0XHRcdHRoaXMudGV4dC5zZXRTZWxlY3Rpb25SYW5nZShmcm9tLCB0byk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmIChmcm9tID4gdGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvbkVuZCA9IHRvO1xuXHRcdFx0XHRcdHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCA9IGZyb207XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ID0gZnJvbTtcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uRW5kID0gdG87XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy50ZXh0LmNyZWF0ZVRleHRSYW5nZSkge1xuXHRcdFx0XHQvLyBJRVxuXHRcdFx0XHRjb25zdCBuZXdfc2VsZWN0aW9uID0gdGhpcy50ZXh0LmNyZWF0ZVRleHRSYW5nZSgpO1xuXHRcdFx0XHRuZXdfc2VsZWN0aW9uLm1vdmUoJ2NoYXJhY3RlcicsIGZyb20pO1xuXHRcdFx0XHRuZXdfc2VsZWN0aW9uLm1vdmVFbmQoJ2NoYXJhY3RlcicsIHRvIC0gZnJvbSk7XG5cdFx0XHRcdG5ld19zZWxlY3Rpb24uc2VsZWN0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGdldFNlbGVjdGlvbigpIHtcblx0XHRcdGxldCBmcm9tID0gMDtcblx0XHRcdC8vIHRoaXMudGV4dCBtdXN0IGJlIGZvY3VzZWQgKGF0IGxlYXN0IG9uIElFKVxuXHRcdFx0bGV0IHRvID0gMDtcblx0XHRcdGlmICghdGhpcy50ZXh0LnZhbHVlKSB7XG5cdFx0XHRcdC8vIE5vIHRleHQuXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGZyb20gPSB0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQ7XG5cdFx0XHRcdHRvID0gdGhpcy50ZXh0LnNlbGVjdGlvbkVuZDtcblx0XHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uICYmIGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSkge1xuXHRcdFx0XHQvLyBJRVxuXHRcdFx0XHRjb25zdCBybmcgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS5kdXBsaWNhdGUoKTtcblx0XHRcdFx0aWYgKHJuZy5wYXJlbnROb2RlKCkgPT09IHRoaXMudGV4dCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0ZXh0Um5nID0gdGhpcy50ZXh0LmNyZWF0ZVRleHRSYW5nZSgpO1xuXHRcdFx0XHRcdFx0dGV4dFJuZy5tb3ZlKCdjaGFyYWN0ZXInLCAwKTtcblx0XHRcdFx0XHRcdHRleHRSbmcuc2V0RW5kUG9pbnQoJ0VuZFRvRW5kJywgcm5nKTtcblx0XHRcdFx0XHRcdC8vIFdlJ3JlIGluIGEgc2luZ2xlLWxpbmUgaW5wdXQgYm94OiBubyBuZWVkIHRvIGNhcmUgYWJvdXQgSUUncyBzdHJhbmdlXG5cdFx0XHRcdFx0XHQvLyBoYW5kbGluZyBvZiBsaW5lIGVuZHNcblx0XHRcdFx0XHRcdHRvID0gdGV4dFJuZy50ZXh0Lmxlbmd0aDtcblx0XHRcdFx0XHRcdHRleHRSbmcuc2V0RW5kUG9pbnQoJ0VuZFRvU3RhcnQnLCBybmcpO1xuXHRcdFx0XHRcdFx0ZnJvbSA9IHRleHRSbmcudGV4dC5sZW5ndGg7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRmcm9tID0gdGhpcy50ZXh0LnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdHRvID0gZnJvbTsgLy8gQXQgZW5kIG9mIHRleHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN0YXJ0OiBmcm9tLFxuXHRcdFx0XHRlbmQ6IHRvLFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0c2F2ZVZpZXcoKSB7XG5cdFx0XHR0aGlzLmxhc3RTZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuXHRcdH1cblx0XHRwcm9jZXNzS2V5KGV2ZW50KSB7XG5cdFx0XHRsZXQgZGlyID0gMDtcblx0XHRcdHN3aXRjaCAodGhpcy5sYXN0S2V5KSB7XG5cdFx0XHRcdGNhc2UgVVA6XG5cdFx0XHRcdFx0ZGlyID0gLTE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRE9XTjpcblx0XHRcdFx0XHRkaXIgPSAxO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFBHVVA6XG5cdFx0XHRcdFx0ZGlyID0gLUhDLmxpc3RTaXplO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFBHRE9XTjpcblx0XHRcdFx0XHRkaXIgPSBIQy5saXN0U2l6ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBFU0M6XG5cdFx0XHRcdFx0Ly8gSW5oaWJpdCBkZWZhdWx0IGJlaGF2aW9yIChyZXZlcnQgdG8gbGFzdCByZWFsIGlucHV0IGluIEZGOiB3ZSBkbyB0aGF0IG91cnNlbHZlcylcblx0XHRcdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0Ly8gTGlzdCBpcyB2aXNpYmxlLCBzbyB0aGVyZSBhcmUgc3VnZ2VzdGlvbnNcblx0XHRcdFx0XHR0aGlzLmhpZ2hsaWdodFN1Z2dlc3Rpb24oZGlyKTtcblx0XHRcdFx0XHQvLyBLaWxsIHRoZSBldmVudCwgb3RoZXJ3aXNlIHNvbWUgYnJvd3NlcnMgKGUuZy4sIEZpcmVmb3gpIG1heSBhZGRpdGlvbmFsbHkgdHJlYXQgYW4gdXAtYXJyb3dcblx0XHRcdFx0XHQvLyBhcyBcInBsYWNlIHRoZSB0ZXh0IGN1cnNvciBhdCB0aGUgZnJvbnRcIiwgd2hpY2ggd2UgZG9uJ3Qgd2FudCBoZXJlLlxuXHRcdFx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHR0aGlzLmtleUNvdW50IDw9IDEgJiZcblx0XHRcdFx0XHQoIXRoaXMuY2FsbGJhY2tPYmogfHwgdGhpcy5jYWxsYmFja09iai5jYWxsc01hZGUgPT09IHRoaXMuY2FsbGJhY2tPYmoubm9mQ2FsbHMpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdC8vIElmIG5vIHN1Z2dlc3Rpb25zIGRpc3BsYXllZCwgZ2V0IHRoZW0sIHVubGVzcyB3ZSdyZSBhbHJlYWR5IGdldHRpbmcgdGhlbS5cblx0XHRcdFx0XHR0aGlzLnRleHRjaGFuZ2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGhpZ2hsaWdodFN1Z2dlc3Rpb24oZGlyKSB7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucyB8fCAhdGhpcy5saXN0IHx8IHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY3VyciA9IHRoaXMubGlzdC5zZWxlY3RlZEluZGV4O1xuXHRcdFx0bGV0IHRndCA9IC0xO1xuXHRcdFx0aWYgKGRpciA9PT0gMCkge1xuXHRcdFx0XHRpZiAoY3VyciA8IDAgfHwgY3VyciA+PSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGd0ID0gY3Vycjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRndCA9IGN1cnIgPCAwID8gMCA6IGN1cnIgKyBkaXI7XG5cdFx0XHRcdHRndCA9IHRndCA8IDAgPyAwIDogdGd0O1xuXHRcdFx0XHRpZiAodGd0ID49IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRcdHRndCA9IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0Z3QgIT09IGN1cnIgfHwgZGlyID09PSAwKSB7XG5cdFx0XHRcdGlmIChjdXJyID49IDAgJiYgY3VyciA8IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCAmJiBkaXIgIT09IDApIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1tjdXJyXS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW3RndF0uc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRcdGNvbnN0IHYgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0XHRjb25zdCBjb21wbGV0ZWQgPSB0aGlzLmF1dG9Db21wbGV0ZSh0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQsIHRoaXMubGFzdFJlYWxJbnB1dCwgbnVsbCwga2V5LCBmYWxzZSk7XG5cdFx0XHRcdGlmICghY29tcGxldGVkIHx8IHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dCA9PT0gdGhpcy5sYXN0UmVhbElucHV0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0ICsga2V5O1xuXHRcdFx0XHRcdGlmICh0aGlzLmNhblNlbGVjdCgpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldFNlbGVjdGlvbih0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQubGVuZ3RoLCB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQubGVuZ3RoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQ7XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBNaWdodCBiZSB3cm9uZyBpZiBmcm9tIGEgZGFiIGxpc3QuLi5cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zcmMgPSBIQy5leGlzdHNZZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJlc2V0S2V5U2VsZWN0aW9uKCkge1xuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMgfHwgIXRoaXMubGlzdCB8fCB0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGN1cnIgPSB0aGlzLmxpc3Quc2VsZWN0ZWRJbmRleDtcblx0XHRcdGlmIChjdXJyID49IDAgJiYgY3VyciA8IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1tjdXJyXS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRcdGNvbnN0IHYgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0XHQvLyBFU0MgaXMgaGFuZGxlZCBzdHJhbmdlbHkgYnkgc29tZSBicm93c2VycyAoZS5nLiwgRkYpOyBzb21laG93IGl0IHJlc2V0cyB0aGUgaW5wdXQgdmFsdWUgYmVmb3JlXG5cdFx0XHRcdC8vIG91ciBldmVudCBoYW5kbGVycyBldmVyIGdldCBhIGNoYW5jZSB0byBydW4uXG5cdFx0XHRcdGxldCByZXN1bHQgPSB2WzBdICE9PSB0aGlzLmxhc3RJbnB1dDtcblx0XHRcdFx0aWYgKHZbMF0gIT09IHRoaXMubGFzdFJlYWxJbnB1dCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHRoaXMubGFzdFJlYWxJbnB1dCArIGtleTtcblx0XHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gdGhpcy5sYXN0UmVhbElucHV0O1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuXHRcdC8vIFVzZXIgY29uZmlndXJhdGlvbnM6IERvIHRoaXMgaGVyZSwgY2FsbGVkIGZyb20gdGhlIG9ubG9hZCBoYW5kbGVyLCBzbyB0aGF0IHVzZXJzIGNhblxuXHRcdC8vIG92ZXJyaWRlIGl0IGVhc2lseSBpbiB0aGVpciBvd24gdXNlciBzY3JpcHQgZmlsZXMgYnkganVzdCBkZWNsYXJpbmcgdmFyaWFibGVzLlxuXHRcdGNvbnN0IGNvbmZpZyA9IHt9O1xuXHRcdEhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X2RvbnRfYWRkX3RvX3dhdGNobGlzdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdERvbnRBZGRUb1dhdGNobGlzdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5kb250X2FkZF90b193YXRjaGxpc3Rcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXREb250QWRkVG9XYXRjaGxpc3Rcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0O1xuXHRcdEhDLm5vX2F1dG9jb21taXQgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9ub19hdXRvY29tbWl0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0Tm9BdXRvQ29tbWl0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgJSAyXG5cdFx0XHRcdFx0XHQ/IHRydWVcblx0XHRcdFx0XHRcdDogSEMubm9fYXV0b2NvbW1pdCAvLyBPbiB0YWxrIG5hbWVzcGFjZSBkZWZhdWx0IGF1dG9jb21taXQgb2ZmXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0Tm9BdXRvQ29tbWl0XG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X25vX2F1dG9jb21taXQ7XG5cdFx0SEMuZGVsX25lZWRzX2RpZmYgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9kZWxfbmVlZHNfZGlmZiA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdERlbE5lZWRzRGlmZiA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5kZWxfbmVlZHNfZGlmZlxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdERlbE5lZWRzRGlmZlxuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9kZWxfbmVlZHNfZGlmZjtcblx0XHRIQy5zdWdnZXN0X2RlbGF5ID0gd2luZG93LmhvdGNhdF9zdWdnZXN0aW9uX2RlbGF5IHx8IGNvbmZpZy5Ib3RDYXRTdWdnZXN0aW9uRGVsYXkgfHwgSEMuc3VnZ2VzdF9kZWxheTtcblx0XHRIQy5lZGl0Ym94X3dpZHRoID0gd2luZG93LmhvdGNhdF9lZGl0Ym94X3dpZHRoIHx8IGNvbmZpZy5Ib3RDYXRFZGl0Qm94V2lkdGggfHwgSEMuZWRpdGJveF93aWR0aDtcblx0XHRIQy5zdWdnZXN0aW9ucyA9IHdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnMgfHwgY29uZmlnLkhvdENhdFN1Z2dlc3Rpb25zIHx8IEhDLnN1Z2dlc3Rpb25zO1xuXHRcdGlmICh0eXBlb2YgSEMuc3VnZ2VzdGlvbnMgIT09ICdzdHJpbmcnIHx8ICFzdWdnZXN0aW9uQ29uZmlnc1tIQy5zdWdnZXN0aW9uc10pIHtcblx0XHRcdEhDLnN1Z2dlc3Rpb25zID0gJ2NvbWJpbmVkJztcblx0XHR9XG5cdFx0SEMuZml4ZWRfc2VhcmNoID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRGaXhlZFN1Z2dlc3Rpb25zID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmZpeGVkX3NlYXJjaFxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdEZpeGVkU3VnZ2VzdGlvbnNcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQ7XG5cdFx0SEMuc2luZ2xlX21pbm9yID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfc2luZ2xlX2NoYW5nZXNfYXJlX21pbm9yID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLnNpbmdsZV9taW5vclxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3I7XG5cdFx0SEMuYmdfY2hhbmdlZCA9IHdpbmRvdy5ob3RjYXRfY2hhbmdlZF9iYWNrZ3JvdW5kIHx8IGNvbmZpZy5Ib3RDYXRDaGFuZ2VkQmFja2dyb3VuZCB8fCBIQy5iZ19jaGFuZ2VkO1xuXHRcdEhDLnVzZV91cF9kb3duID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfdXNlX2NhdGVnb3J5X2xpbmtzID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rcyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy51c2VfdXBfZG93blxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdFVzZUNhdGVnb3J5TGlua3Ncblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfdXNlX2NhdGVnb3J5X2xpbmtzO1xuXHRcdEhDLmxpc3RTaXplID0gd2luZG93LmhvdGNhdF9saXN0X3NpemUgfHwgY29uZmlnLkhvdENhdExpc3RTaXplIHx8IEhDLmxpc3RTaXplO1xuXHRcdEhDLmNoYW5nZVRhZyA9IGNvbmZpZy5Ib3RDYXRDaGFuZ2VUYWcgfHwgJyc7XG5cdFx0Ly8gVGhlIG5leHQgd2hvbGUgc2hlYmFuZyBpcyBuZWVkZWQsIGJlY2F1c2UgbWFudWFsIHRhZ3MgZ2V0IG5vdCBzdWJtaXR0ZWQgZXhjZXB0IG9mIHNhdmVcblx0XHRpZiAoSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRjb25zdCBlRm9ybSA9IGRvY3VtZW50LmVkaXRmb3JtO1xuXHRcdFx0Y29uc3QgY2F0UmVnRXhwID0gbmV3IFJlZ0V4cChgXlxcXFxbXFxcXFsoJHtIQy5jYXRlZ29yeV9yZWdleHB9KTpgKTtcblx0XHRcdGxldCBvbGRUeHQ7XG5cdFx0XHQvLyBSZXR1cm5zIHRydWUgaWYgbWlub3IgY2hhbmdlXG5cdFx0XHRjb25zdCBpc01pbm9yQ2hhbmdlID0gKCkgPT4ge1xuXHRcdFx0XHRsZXQgbmV3VHh0ID0gZUZvcm0ud3BUZXh0Ym94MTtcblx0XHRcdFx0aWYgKCFuZXdUeHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0bmV3VHh0ID0gbmV3VHh0LnZhbHVlO1xuXHRcdFx0XHRjb25zdCBvbGRMaW5lcyA9IG9sZFR4dC5tYXRjaCgvXi4qJC9nbSk7XG5cdFx0XHRcdGNvbnN0IG5ld0xpbmVzID0gbmV3VHh0Lm1hdGNoKC9eLiokL2dtKTtcblx0XHRcdFx0bGV0IGNBcnI7IC8vIGNoYW5nZXNcblx0XHRcdFx0Y29uc3QgZXhjZXB0ID0gKGFBcnIsIGJBcnIpID0+IHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBbXTtcblx0XHRcdFx0XHRsZXQgbEFycjsgLy8gc21hbGxlclxuXHRcdFx0XHRcdGxldCAvLyBsYXJnZXJcblx0XHRcdFx0XHRcdHNBcnI7XG5cdFx0XHRcdFx0aWYgKGFBcnIubGVuZ3RoIDwgYkFyci5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGxBcnIgPSBiQXJyO1xuXHRcdFx0XHRcdFx0c0FyciA9IGFBcnI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxBcnIgPSBhQXJyO1xuXHRcdFx0XHRcdFx0c0FyciA9IGJBcnI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAoY29uc3QgaXRlbSBvZiBsQXJyKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBpbmQgPSBzQXJyLmluZGV4T2YoaXRlbSk7XG5cdFx0XHRcdFx0XHRpZiAoaW5kID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBpdGVtO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c0Fyci5zcGxpY2UoaW5kLCAxKTsgLy8gZG9uJ3QgY2hlY2sgdGhpcyBpdGVtIGFnYWluXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCAuLi5zQXJyXTtcblx0XHRcdFx0fTtcblx0XHRcdFx0Y0FyciA9IGV4Y2VwdChvbGRMaW5lcywgbmV3TGluZXMpO1xuXHRcdFx0XHRpZiAoY0Fyci5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y0FyciA9IGNBcnIuZmlsdGVyKChjKSA9PiB7XG5cdFx0XHRcdFx0XHRjID0gYy50cmltKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYyAmJiAhY2F0UmVnRXhwLnRlc3QoYyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNBcnIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0b2xkVHh0ID0gbmV3VHh0O1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjb25mLndnQWN0aW9uID09PSAnc3VibWl0JyAmJlxuXHRcdFx0XHRjb25mLndnQXJ0aWNsZUlkICYmXG5cdFx0XHRcdGVGb3JtICYmXG5cdFx0XHRcdGVGb3JtLndwU3VtbWFyeSAmJlxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lraURpZmYnKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNvbnN0IHN1bSA9IGVGb3JtLndwU3VtbWFyeTtcblx0XHRcdFx0Y29uc3Qgc3VtQSA9IGVGb3JtLndwQXV0b1N1bW1hcnk7XG5cdFx0XHRcdGlmIChzdW0udmFsdWUgJiYgc3VtQS52YWx1ZSA9PT0gSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRcdFx0Ly8gSG90Q2F0IGRpZmZcblx0XHRcdFx0XHQvLyBNRDUgaGFzaCBvZiB0aGUgZW1wdHkgc3RyaW5nLCBhcyBIb3RDYXQgZWRpdCBpcyBiYXNlZCBvbiBlbXB0eSBzdW1cblx0XHRcdFx0XHRzdW1BLnZhbHVlID0gc3VtQS52YWx1ZS5yZXBsYWNlKEhDLmNoYW5nZVRhZywgJ2Q0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlJyk7XG5cdFx0XHRcdFx0Ly8gQXR0ciBjcmVhdGlvbiBhbmQgZXZlbnQgaGFuZGxpbmcgaXMgbm90IHNhbWUgaW4gYWxsIChvbGQpIGJyb3dzZXJzIHNvIHVzZSAkXG5cdFx0XHRcdFx0Y29uc3QgJGN0ID0gJCgnPGlucHV0PicpXG5cdFx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHRcdFx0XHRuYW1lOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQudmFsKEhDLmNoYW5nZVRhZyk7XG5cdFx0XHRcdFx0JChlRm9ybSkuYXBwZW5kKCRjdCk7XG5cdFx0XHRcdFx0b2xkVHh0ID0gZUZvcm0ud3BUZXh0Ym94MS52YWx1ZTtcblx0XHRcdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwU2F2ZV0nKS5vbmUoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCRjdC52YWwoKSkge1xuXHRcdFx0XHRcdFx0XHRzdW0udmFsdWUgPSBzdW0udmFsdWUucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpIHx8IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpLFxuXHRcdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29uc3QgcmVtb3ZlQ2hhbmdlVGFnID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0JChlRm9ybS53cFRleHRib3gxKVxuXHRcdFx0XHRcdFx0XHQuYWRkKHN1bSlcblx0XHRcdFx0XHRcdFx0Lm9uZSgnaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaXNNaW5vckNoYW5nZSgpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbW92ZUNoYW5nZVRhZygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGN0LnZhbCgnJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZW1vdmVDaGFuZ2VUYWcoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBOdW1lcmljIGlucHV0LCBtYWtlIHN1cmUgd2UgaGF2ZSBhIG51bWVyaWMgdmFsdWVcblx0XHRIQy5saXN0U2l6ZSA9IE51bWJlci5wYXJzZUludChIQy5saXN0U2l6ZSwgMTApO1xuXHRcdGlmIChOdW1iZXIuaXNOYU4oSEMubGlzdFNpemUpIHx8IEhDLmxpc3RTaXplIDwgNSkge1xuXHRcdFx0SEMubGlzdFNpemUgPSA1O1xuXHRcdH1cblx0XHRIQy5saXN0U2l6ZSA9IE1hdGgubWluKEhDLmxpc3RTaXplLCAzMCk7IC8vIE1heCBzaXplXG5cdFx0Ly8gTG9jYWxpemUgc2VhcmNoIGVuZ2luZSBuYW1lc1xuXHRcdGZvciAoY29uc3QgW2tleSwgc3VnZ2VzdGlvbkNvbmZpZ10gb2YgT2JqZWN0LmVudHJpZXMoc3VnZ2VzdGlvbkNvbmZpZ3MpKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoa2V5ICYmIGdldE1lc3NhZ2UoYGVuZ2luZV9uYW1lcy0ke2tleX1gKSkge1xuXHRcdFx0XHRcdHN1Z2dlc3Rpb25Db25maWcubmFtZSA9IGdldE1lc3NhZ2UoYGVuZ2luZV9uYW1lcy0ke2tleX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBDYXRjaCBib3RoIG5hdGl2ZSBSVEwgYW5kIFwiZmFrZWRcIiBSVEwgdGhyb3VnaCBbW01lZGlhV2lraTpSdGwuanNdXVxuXHRcdGlzX3J0bCA9IGhhc0NsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ3J0bCcpO1xuXHRcdGlmICghaXNfcnRsKSB7XG5cdFx0XHRpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuXHRcdFx0XHQvLyBHZWNrbyBldGMuXG5cdFx0XHRcdGlzX3J0bCA9IGRvY3VtZW50LmRlZmF1bHRWaWV3XG5cdFx0XHRcdFx0LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCBudWxsKVxuXHRcdFx0XHRcdC5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKTtcblx0XHRcdH0gZWxzZSBpZiAoJCgnYm9keScpWzBdLmN1cnJlbnRTdHlsZSkge1xuXHRcdFx0XHQvLyBJRSwgaGFzIHN1YnRsZSBkaWZmZXJlbmNlcyB0byBnZXRDb21wdXRlZFN0eWxlXG5cdFx0XHRcdGlzX3J0bCA9ICQoJ2JvZHknKVswXS5jdXJyZW50U3R5bGUuZGlyZWN0aW9uO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gTm90IGV4YWN0bHkgcmlnaHQsIGJ1dCBiZXN0IGVmZm9ydFxuXHRcdFx0XHRpc19ydGwgPSAkKCdib2R5JylbMF0uc3R5bGUuZGlyZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0aXNfcnRsID0gaXNfcnRsID09PSAncnRsJztcblx0XHR9XG5cdH07XG5cdGNvbnN0IGNhbl9lZGl0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2EtZWRpdCcpICE9PSBudWxsO1xuXHR9O1xuXHQvLyBMZWdhY3kgc3R1ZmZcblx0Y29uc3QgY2xvc2VGb3JtID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIENsb3NlIGFsbCBvcGVuIGVkaXRvcnMgd2l0aG91dCByZWRpcmVjdCByZXNvbHV0aW9uIGFuZCBvdGhlciBhc3luY2hyb25vdXMgc3R1ZmYuXG5cdFx0Zm9yIChjb25zdCBlZGl0IG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0LnN0YXRlID09PSBPUEVOKSB7XG5cdFx0XHRcdGVkaXQuY2FuY2VsKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGVkaXQuc3RhdGUgPT09IENIQU5HRV9QRU5ESU5HKSB7XG5cdFx0XHRcdGVkaXQuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGVkaXQudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRsZXQga2V5ID0gbnVsbDtcblx0XHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRbLCBrZXldID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdiA9IHZhbHVlWzBdLnJlcGxhY2UoL18vZywgJyAnKS50cmltKCk7XG5cdFx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGVkaXQuY2FuY2VsKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50Q2F0ZWdvcnkgPSB2O1xuXHRcdFx0XHRcdGVkaXQuY3VycmVudEtleSA9IGtleTtcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRFeGlzdHMgPSB0aGlzLmlucHV0RXhpc3RzO1xuXHRcdFx0XHRcdGVkaXQuY2xvc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3Qgc2V0dXBfdXBsb2FkID0gKCkgPT4ge1xuXHRcdG9uVXBsb2FkID0gdHJ1ZTtcblx0XHQvLyBBZGQgYW4gZW1wdHkgY2F0ZWdvcnkgYmFyIGF0IHRoZSBlbmQgb2YgdGhlIHRhYmxlIGNvbnRhaW5pbmcgdGhlIGRlc2NyaXB0aW9uLCBhbmQgY2hhbmdlIHRoZSBvbnN1Ym1pdCBoYW5kbGVyLlxuXHRcdGxldCBpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1odG1sZm9ybS1kZXNjcmlwdGlvbicpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BEZXN0RmlsZV0nKTtcblx0XHRpZiAoIWlwKSB7XG5cdFx0XHRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BEZXN0RmlsZV0nKTtcblx0XHRcdHdoaWxlIChpcCAmJiBpcC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAndGFibGUnKSB7XG5cdFx0XHRcdGlwID0gaXAucGFyZW50Tm9kZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFpcCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZXVwbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BGb3JSZVVwbG9hZF0nKTtcblx0XHRjb25zdCBkZXN0RmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9d3BEZXN0RmlsZV0nKTtcblx0XHRpZiAoKHJldXBsb2FkICYmICEhcmV1cGxvYWQudmFsdWUpIHx8IChkZXN0RmlsZSAmJiAoZGVzdEZpbGUuZGlzYWJsZWQgfHwgZGVzdEZpbGUucmVhZE9ubHkpKSkge1xuXHRcdFx0cmV0dXJuOyAvLyByZS11cGxvYWQgZm9ybS4uLlxuXHRcdH1cblx0XHQvLyBJbnNlcnQgYSB0YWJsZSByb3cgd2l0aCB0d28gZmllbGRzIChsYWJlbCBhbmQgZW1wdHkgY2F0ZWdvcnkgYmFyKVxuXHRcdGNvbnN0IGxhYmVsQ2VsbCA9IG1ha2UoJ3RkJyk7XG5cdFx0Y29uc3QgbGluZUNlbGwgPSBtYWtlKCd0ZCcpO1xuXHRcdC8vIENyZWF0ZSB0aGUgY2F0ZWdvcnkgbGluZVxuXHRcdGNhdExpbmUgPSBtYWtlKCdkaXYnKTtcblx0XHRjYXRMaW5lLmNsYXNzTmFtZSA9ICdjYXRsaW5rcyc7XG5cdFx0Y2F0TGluZS5pZCA9ICdjYXRsaW5rcyc7XG5cdFx0Y2F0TGluZS5zdHlsZS50ZXh0QWxpZ24gPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdC8vIFdlJ2xsIGJlIGluc2lkZSBhIHRhYmxlIHJvdy4gTWFrZSBzdXJlIHRoYXQgd2UgZG9uJ3QgaGF2ZSBtYXJnaW5zIG9yIHN0cmFuZ2UgYm9yZGVycy5cblx0XHRjYXRMaW5lLnN0eWxlLm1hcmdpbiA9ICcwJztcblx0XHRjYXRMaW5lLnN0eWxlLmJvcmRlciA9ICdub25lJztcblx0XHRsaW5lQ2VsbC5hcHBlbmQoY2F0TGluZSk7XG5cdFx0Ly8gQ3JlYXRlIHRoZSBsYWJlbFxuXHRcdGNvbnN0IGxhYmVsID0gbnVsbDtcblx0XHRpZiAobGFiZWwpIHtcblx0XHRcdGxhYmVsQ2VsbC5pZCA9ICdob3RjYXRMYWJlbFRyYW5zbGF0ZWQnO1xuXHRcdFx0bGFiZWxDZWxsLmFwcGVuZChsYWJlbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxhYmVsQ2VsbC5pZCA9ICdob3RjYXRMYWJlbCc7XG5cdFx0XHRsYWJlbENlbGwuYXBwZW5kKG1ha2UoZ2V0TWVzc2FnZSgnY2F0ZWdvcmllcycpLCB0cnVlKSk7XG5cdFx0fVxuXHRcdGxhYmVsQ2VsbC5jbGFzc05hbWUgPSAnbXctbGFiZWwnO1xuXHRcdGxhYmVsQ2VsbC5zdHlsZS50ZXh0QWxpZ24gPSAncmlnaHQnO1xuXHRcdGxhYmVsQ2VsbC5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ21pZGRsZSc7XG5cdFx0Ly8gQ2hhbmdlIHRoZSBvbnN1Ym1pdCBoYW5kbGVyXG5cdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGxvYWQnKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctdXBsb2FkLWZvcm0nKTtcblx0XHRpZiAoZm9ybSkge1xuXHRcdFx0Y29uc3QgbmV3Um93ID0gaXAuaW5zZXJ0Um93KC0xKTtcblx0XHRcdG5ld1Jvdy5hcHBlbmQobGFiZWxDZWxsKTtcblx0XHRcdG5ld1Jvdy5hcHBlbmQobGluZUNlbGwpO1xuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAob2xkU3VibWl0LCAuLi5hcmdzKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBkb19zdWJtaXQgPSB0cnVlO1xuXHRcdFx0XHRcdGlmIChvbGRTdWJtaXQpIHtcblx0XHRcdFx0XHRcdGlmICh0eXBlb2Ygb2xkU3VibWl0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuXHRcdFx0XHRcdFx0XHRkb19zdWJtaXQgPSB3aW5kb3cuZXZhbChvbGRTdWJtaXQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChvbGRTdWJtaXQgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuXHRcdFx0XHRcdFx0XHRkb19zdWJtaXQgPSBvbGRTdWJtaXQuYXBwbHkoZm9ybSwgW29sZFN1Ym1pdCwgLi4uYXJnc10pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWRvX3N1Ym1pdCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbG9zZUZvcm0oKTtcblx0XHRcdFx0XHQvLyBDb3B5IHRoZSBjYXRlZ29yaWVzXG5cdFx0XHRcdFx0Y29uc3QgZWIgPVxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT13cFVwbG9hZERlc2NyaXB0aW9uXScpIHx8XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BEZXNjJyk7XG5cdFx0XHRcdFx0bGV0IGFkZGVkT25lID0gZmFsc2U7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdFx0Y29uc3QgdCA9IGVkaXRvci5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdFx0XHRpZiAoIXQpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zdCBrZXkgPSBlZGl0b3IuY3VycmVudEtleTtcblx0XHRcdFx0XHRcdGNvbnN0IG5ld19jYXQgPSBgW1ske0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0fSR7a2V5ID8gYHwke2tleX1gIDogJyd9XV1gO1xuXHRcdFx0XHRcdFx0Ly8gT25seSBhZGQgaWYgbm90IGFscmVhZHkgcHJlc2VudFxuXHRcdFx0XHRcdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKCc8bm8nLmNvbmNhdCgnd2lraT4nLCAnKFxcXFxzfFxcXFxTKSo/PC9ubycsICd3aWtpJywgJz4nKSwgJ2cnKTtcblx0XHRcdFx0XHRcdGNvbnN0IF9jbGVhbmVkVGV4dCA9IGViLnZhbHVlLnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCAnJykucmVwbGFjZShub3dpa2lSZWdleCk7XG5cdFx0XHRcdFx0XHRpZiAoIWZpbmRfY2F0ZWdvcnkoX2NsZWFuZWRUZXh0LCB0LCB0cnVlKSkge1xuXHRcdFx0XHRcdFx0XHRlYi52YWx1ZSArPSBgXFxuJHtuZXdfY2F0fWA7XG5cdFx0XHRcdFx0XHRcdGFkZGVkT25lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGFkZGVkT25lKSB7XG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgXCJzdWJzdDp1bmNcIiBhZGRlZCBieSBGbGluZm8gaWYgaXQgZGlkbid0IGZpbmQgY2F0ZWdvcmllc1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCd7eyQnLmNvbmNhdCgnc3Vic3Q6JykuY29uY2F0KCd1bmN9fScpLCAnZycpO1xuXHRcdFx0XHRcdFx0ZWIudmFsdWUgPSBlYi52YWx1ZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9KShmb3JtLm9uc3VibWl0KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblx0bGV0IGNsZWFuZWRUZXh0ID0gbnVsbDtcblx0Y29uc3QgaXNPblBhZ2UgPSAoe2ZpcnN0Q2hpbGR9KSA9PiB7XG5cdFx0aWYgKGZpcnN0Q2hpbGQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IGNhdFRpdGxlID0gdGl0bGUoZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG5cdFx0aWYgKCFjYXRUaXRsZSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhdFRpdGxlID0gY2F0VGl0bGUuc2xpY2UoY2F0VGl0bGUuaW5kZXhPZignOicpICsgMSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdGlmIChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QoY2F0VGl0bGUpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgcmVzdWx0ID0ge1xuXHRcdFx0dGl0bGU6IGNhdFRpdGxlLFxuXHRcdFx0bWF0Y2g6IFsnJywgJycsICcnXSxcblx0XHR9O1xuXHRcdGlmIChwYWdlVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0aWYgKGNsZWFuZWRUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsICcoXFxcXHN8XFxcXFMpKj88L25vJywgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdFx0Y2xlYW5lZFRleHQgPSBwYWdlVGV4dC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgJycpLnJlcGxhY2Uobm93aWtpUmVnZXgsICcnKTtcblx0XHR9XG5cdFx0cmVzdWx0Lm1hdGNoID0gZmluZF9jYXRlZ29yeShjbGVhbmVkVGV4dCwgY2F0VGl0bGUsIHRydWUpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdGxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuXHRsZXQgc2V0dXBUaW1lb3V0ID0gbnVsbDtcblx0Y29uc3QgZmluZEJ5Q2xhc3MgPSAoc2NvcGUsIHRhZywgY2xhc3NOYW1lKSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gJChzY29wZSkuZmluZChgJHt0YWd9LiR7Y2xhc3NOYW1lfWApO1xuXHRcdHJldHVybiByZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA+IDAgPyByZXN1bHRbMF0gOiBudWxsO1xuXHR9O1xuXHRjb25zdCBzZXR1cCA9IChhZGRpdGlvbmFsV29yaykgPT4ge1xuXHRcdGlmIChpbml0aWFsaXplZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbml0aWFsaXplZCA9IHRydWU7XG5cdFx0aWYgKHNldHVwVGltZW91dCkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dChzZXR1cFRpbWVvdXQpO1xuXHRcdFx0c2V0dXBUaW1lb3V0ID0gbnVsbDtcblx0XHR9XG5cdFx0Ly8gRmluZCB0aGUgY2F0ZWdvcnkgYmFyLCBvciBjcmVhdGUgYW4gZW1wdHkgb25lIGlmIHRoZXJlIGlzbid0IG9uZS4gVGhlbiBhZGQgLS8rLSBsaW5rcyBhZnRlclxuXHRcdC8vIGVhY2ggY2F0ZWdvcnksIGFuZCBhZGQgdGhlICsgbGluay5cblx0XHRjYXRMaW5lIHx8PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctbm9ybWFsLWNhdGxpbmtzJyk7IC8vIFNwZWNpYWw6VXBsb2FkXG5cdFx0Y29uc3QgaGlkZGVuQ2F0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1oaWRkZW4tY2F0bGlua3MnKTtcblx0XHRpZiAoIWNhdExpbmUpIHtcblx0XHRcdGxldCBmb290ZXIgPSBudWxsO1xuXHRcdFx0aWYgKCFoaWRkZW5DYXRzKSB7XG5cdFx0XHRcdGZvb3RlciA9IGZpbmRCeUNsYXNzKGRvY3VtZW50LCAnZGl2JywgJ3ByaW50Zm9vdGVyJyk7XG5cdFx0XHRcdGlmICghZm9vdGVyKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IC8vIERvbid0IGtub3cgd2hlcmUgdG8gaW5zZXJ0IHRoZSBjYXRlZ29yeSBsaW5lXG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lID0gbWFrZSgnZGl2Jyk7XG5cdFx0XHRjYXRMaW5lLmlkID0gJ213LW5vcm1hbC1jYXRsaW5rcyc7XG5cdFx0XHRjYXRMaW5lLnN0eWxlLnRleHRBbGlnbiA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0XHQvLyBBZGQgYSBsYWJlbFxuXHRcdFx0Y29uc3QgbGFiZWwgPSBtYWtlKCdhJyk7XG5cdFx0XHRsYWJlbC5ocmVmID0gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJ1NwZWNpYWw6Q2F0ZWdvcmllcycpO1xuXHRcdFx0bGFiZWwudGl0bGUgPSBnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyk7XG5cdFx0XHRsYWJlbC5hcHBlbmQobWFrZShnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyksIHRydWUpKTtcblx0XHRcdGNhdExpbmUuYXBwZW5kKGxhYmVsKTtcblx0XHRcdGNhdExpbmUuYXBwZW5kKG1ha2UoJzonLCB0cnVlKSk7XG5cdFx0XHQvLyBJbnNlcnQgdGhlIG5ldyBjYXRlZ29yeSBsaW5lXG5cdFx0XHRsZXQgY29udGFpbmVyID0gaGlkZGVuQ2F0cyA/IGhpZGRlbkNhdHMucGFyZW50Tm9kZSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRsaW5rcycpO1xuXHRcdFx0aWYgKCFjb250YWluZXIpIHtcblx0XHRcdFx0Y29udGFpbmVyID0gbWFrZSgnZGl2Jyk7XG5cdFx0XHRcdGNvbnRhaW5lci5pZCA9ICdjYXRsaW5rcyc7XG5cdFx0XHRcdGZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb250YWluZXIsIGZvb3Rlci5uZXh0U2libGluZyk7XG5cdFx0XHR9XG5cdFx0XHRjb250YWluZXIuY2xhc3NOYW1lID0gJ2NhdGxpbmtzIG5vcHJpbnQnO1xuXHRcdFx0Y29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdGlmIChoaWRkZW5DYXRzKSB7XG5cdFx0XHRcdGhpZGRlbkNhdHMuYmVmb3JlKGNhdExpbmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZChjYXRMaW5lKTtcblx0XHRcdH1cblx0XHR9IC8vIGVuZCBpZiBjYXRMaW5lIGV4aXN0c1xuXHRcdGlmIChpc19ydGwpIHtcblx0XHRcdGNhdExpbmUuZGlyID0gJ3J0bCc7XG5cdFx0fVxuXHRcdC8vIENyZWF0ZSBlZGl0b3JzIGZvciBhbGwgZXhpc3RpbmcgY2F0ZWdvcmllc1xuXHRcdGNvbnN0IGNyZWF0ZUVkaXRvcnMgPSAobGluZSwgaXNfaGlkZGVuKSA9PiB7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGxldCBjYXRzID0gbGluZS5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuXHRcdFx0aWYgKGNhdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRuZXdET00gPSB0cnVlO1xuXHRcdFx0XHRsaW5lID0gY2F0c1swXS5wYXJlbnROb2RlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2F0cyA9IGxpbmUucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQ29weSBjYXRzLCBvdGhlcndpc2UgaXQnbGwgYWxzbyBtYWdpY2FsbHkgY29udGFpbiBvdXIgYWRkZWQgc3BhbnMgYXMgaXQgaXMgYSBsaXZlIGNvbGxlY3Rpb24hXG5cdFx0XHRjb25zdCBjb3B5Q2F0cyA9IEFycmF5LmZyb20oe1xuXHRcdFx0XHRsZW5ndGg6IGNhdHMubGVuZ3RoLFxuXHRcdFx0fSk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2F0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb3B5Q2F0c1tpXSA9IGNhdHNbaV07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY29weUNhdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgdGVzdCA9IGlzT25QYWdlKGNvcHlDYXRzW2ldKTtcblx0XHRcdFx0aWYgKHRlc3QgIT09IG51bGwgJiYgdGVzdC5tYXRjaCAhPT0gbnVsbCAmJiBsaW5lKSB7XG5cdFx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKGxpbmUsIGNvcHlDYXRzW2ldLCB0ZXN0LnRpdGxlLCB0ZXN0Lm1hdGNoWzJdLCBpc19oaWRkZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29weUNhdHMubGVuZ3RoID4gMCA/IGNvcHlDYXRzLmF0KC0xKSA6IG51bGw7XG5cdFx0fTtcblx0XHRjb25zdCBsYXN0U3BhbiA9IGNyZWF0ZUVkaXRvcnMoY2F0TGluZSwgZmFsc2UpO1xuXHRcdC8vIENyZWF0ZSBvbmUgdG8gYWRkIGEgbmV3IGNhdGVnb3J5XG5cdFx0bmV3IENhdGVnb3J5RWRpdG9yKG5ld0RPTSA/IGNhdExpbmUucXVlcnlTZWxlY3RvckFsbCgndWwnKVswXSA6IGNhdExpbmUsIG51bGwsIG51bGwsIGxhc3RTcGFuICE9PSBudWxsLCBmYWxzZSk7XG5cdFx0aWYgKCFvblVwbG9hZCkge1xuXHRcdFx0aWYgKHBhZ2VUZXh0ICE9PSBudWxsICYmIGhpZGRlbkNhdHMpIHtcblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdGhpZGRlbkNhdHMuZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3JlYXRlRWRpdG9ycyhoaWRkZW5DYXRzLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdC8vIEFuZCBmaW5hbGx5IGFkZCB0aGUgXCJtdWx0aS1tb2RlXCIgc3Bhbi4gKERvIHRoaXMgYXQgdGhlIGVuZCwgb3RoZXJ3aXNlIGl0IGVuZHMgdXAgaW4gdGhlIGxpc3QgYWJvdmUuKVxuXHRcdFx0Y29uc3QgZW5hYmxlTXVsdGkgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRlbmFibGVNdWx0aS5jbGFzc05hbWUgPSAnbm9wcmludCc7XG5cdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdGVuYWJsZU11bHRpLmRpciA9ICdydGwnO1xuXHRcdFx0fVxuXHRcdFx0Y2F0TGluZS5pbnNlcnRCZWZvcmUoZW5hYmxlTXVsdGksIGNhdExpbmUuZmlyc3RDaGlsZC5uZXh0U2libGluZyk7XG5cdFx0XHRlbmFibGVNdWx0aS5hcHBlbmQobWFrZSgnXFx1MDBBMCcsIHRydWUpKTsgLy8gbmJzcFxuXHRcdFx0bXVsdGlTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0ZW5hYmxlTXVsdGkuYXBwZW5kKG11bHRpU3Bhbik7XG5cdFx0XHRtdWx0aVNwYW4uaW5uZXJIVE1MID0gYCg8YT4ke0hDLmFkZG11bHRpfTwvYT4pYDtcblx0XHRcdGNvbnN0IFtsaW5rXSA9IG11bHRpU3Bhbi5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdHNldE11bHRpSW5wdXQoKTtcblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHRcdH0pO1xuXHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ211bHRpX3Rvb2x0aXAnKTtcblx0XHRcdGxpbmsuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXHRcdH1cblx0XHRjbGVhbmVkVGV4dCA9IG51bGw7XG5cdFx0aWYgKGFkZGl0aW9uYWxXb3JrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcblx0XHRcdGFkZGl0aW9uYWxXb3JrKCk7XG5cdFx0fVxuXHRcdG13Lmhvb2soJ2hvdGNhdC5yZWFkeScpLmZpcmUoKTsgLy8gRXhlY3V0ZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uc1xuXHRcdCQoJ2JvZHknKS50cmlnZ2VyKCdob3RjYXRTZXR1cENvbXBsZXRlZCcpO1xuXHR9O1xuXHRjb25zdCBjcmVhdGVDb21taXRGb3JtID0gKCkgPT4ge1xuXHRcdGlmIChjb21taXRGb3JtKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGZvcm1Db250YWluZXIgPSBtYWtlKCdkaXYnKTtcblx0XHRmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZChmb3JtQ29udGFpbmVyKTtcblx0XHRmb3JtQ29udGFpbmVyLmlubmVySFRNTCA9IGA8Zm9ybSBpZD1cImhvdGNhdENvbW1pdEZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBhY3Rpb249XCIke1xuXHRcdFx0Y29uZi53Z1NjcmlwdFxuXHRcdH0/dGl0bGU9JHtlbmNvZGVVUklDb21wb25lbnQoXG5cdFx0XHRjb25mLndnUGFnZU5hbWVcblx0XHQpfSZhY3Rpb249c3VibWl0XCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BUZXh0Ym94MVwiPiR7YDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm1vZGVsXCIgdmFsdWU9XCIke2NvbmYud2dQYWdlQ29udGVudE1vZGVsfVwiPmB9PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybWF0XCIgdmFsdWU9XCJ0ZXh0L3gtd2lraVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwU3VtbWFyeVwiIHZhbHVlPVwiXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ3cE1pbm9yZWRpdFwiIHZhbHVlPVwiMVwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwid3BXYXRjaHRoaXNcIiB2YWx1ZT1cIjFcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEF1dG9TdW1tYXJ5XCIgdmFsdWU9XCJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRWRpdHRpbWVcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFN0YXJ0dGltZVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRGlmZlwiIHZhbHVlPVwid3BEaWZmXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwib2xkaWRcIiB2YWx1ZT1cIjBcIj48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJoY0NvbW1pdFwiIHZhbHVlPVwiaGNDb21taXRcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEVkaXRUb2tlblwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwVWx0aW1hdGVQYXJhbVwiIHZhbHVlPVwiMVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwQ2hhbmdlVGFnc1wiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCLihLPwnZKy4pml8J2TivCdk4PwnZK+8J2SuOKEtPCdkrnihK9cIiBuYW1lPVwid3BVbmljb2RlQ2hlY2tcIj48L2Zvcm0+YDtcblx0XHRjb21taXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdGNhdENvbW1pdEZvcm0nKTtcblx0fTtcblx0Y29uc3QgZ2V0UGFnZSA9ICgpID0+IHtcblx0XHQvLyBXZSBrbm93IHdlIGhhdmUgYW4gYXJ0aWNsZSBoZXJlLlxuXHRcdGlmIChjb25mLndnQXJ0aWNsZUlkKSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cmF3Y29udGludWU6ICcnLFxuXHRcdFx0XHR0aXRsZXM6IGNvbmYud2dQYWdlTmFtZSxcblx0XHRcdFx0cHJvcDogWydpbmZvJywgJ3JldmlzaW9ucyddLFxuXHRcdFx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnLCAnaWRzJ10sXG5cdFx0XHRcdHJ2bGltaXQ6ICcxJyxcblx0XHRcdFx0cnZzdGFydGlkOiBjb25mLndnQ3VyUmV2aXNpb25JZCxcblx0XHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0XHRtZXRhOiBbJ3NpdGVpbmZvJ10sXG5cdFx0XHR9O1xuXHRcdFx0SEMuc3RhcnQgPSAoZGF0YSkgPT4ge1xuXHRcdFx0XHRzZXRQYWdlKGRhdGEpO1xuXHRcdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHRcdH07XG5cdFx0XHRhcGkuZ2V0KHBhcmFtcykudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRIQy5zdGFydChkYXRhKTtcblx0XHRcdH0pO1xuXHRcdFx0c2V0dXBUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdFx0fSwgNDAwMCk7IC8vIDQgc2VjLCBqdXN0IGluIGNhc2UgZ2V0dGluZyB0aGUgd2lraXRleHQgdGFrZXMgbG9uZ2VyLlxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEb2Vzbid0IGV4aXN0IHlldC4gRGlzYWJsZSBvbiBub24tZXhpc3RpbmcgVXNlciBwYWdlcy5cblx0XHRcdGlmIChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAyKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHBhZ2VUZXh0ID0gJyc7XG5cdFx0XHRwYWdlVGltZSA9IG51bGw7XG5cdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHNldFN0YXRlID0gKHN0YXRlKSA9PiB7XG5cdFx0Y29uc3QgY2F0cyA9IHN0YXRlLnNwbGl0KCdcXG4nKTtcblx0XHRpZiAoY2F0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAoaW5pdGlhbGl6ZWQgJiYgZWRpdG9ycy5sZW5ndGggPT09IDEgJiYgZWRpdG9yc1swXS5pc0FkZENhdGVnb3J5KSB7XG5cdFx0XHQvLyBJbnNlcnQgbmV3IHNwYW5zIGFuZCBjcmVhdGUgbmV3IGVkaXRvcnMgZm9yIHRoZW0uXG5cdFx0XHRjb25zdCBuZXdTcGFucyA9IFtdO1xuXHRcdFx0Y29uc3QgYmVmb3JlID0gZWRpdG9ycy5sZW5ndGggPT09IDEgPyBlZGl0b3JzWzBdLnNwYW4gOiBudWxsO1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2F0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoY2F0c1tpXS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgY2F0ID0gY2F0c1tpXS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSBjYXQubGVuZ3RoID4gMSA/IGNhdFsxXSA6IG51bGw7XG5cdFx0XHRcdFtjYXRdID0gY2F0O1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke2NhdH1gKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShjYXQsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGNhdDtcblx0XHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdGlmICghaSkge1xuXHRcdFx0XHRcdGNhdExpbmUuaW5zZXJ0QmVmb3JlKG1ha2UoJyAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRiZWZvcmUuYmVmb3JlKHNwYW4pO1xuXHRcdFx0XHRpZiAoYmVmb3JlICYmIGkgKyAxIDwgY2F0cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKG1ha2UoJyB8ICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5ld1NwYW5zW25ld1NwYW5zLmxlbmd0aF0gPSB7XG5cdFx0XHRcdFx0ZWxlbWVudDogc3Bhbixcblx0XHRcdFx0XHR0aXRsZTogY2F0LFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8vIEFuZCBjaGFuZ2UgdGhlIGxhc3Qgb25lLi4uXG5cdFx0XHRpZiAoYmVmb3JlKSB7XG5cdFx0XHRcdGJlZm9yZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShtYWtlKCcgfCAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBuZXdTcGFucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IoY2F0TGluZSwgbmV3U3BhbnNbaV0uZWxlbWVudCwgbmV3U3BhbnNbaV0udGl0bGUsIG5ld1NwYW5zW2ldLmtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcblx0XHRsZXQgcmVzdWx0ID0gbnVsbDtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRsZXQgdGV4dCA9IGVkaXRvci5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRjb25zdCBrZXkgPSBlZGl0b3IuY3VycmVudEtleTtcblx0XHRcdGlmICh0ZXh0ICYmIHRleHQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRpZiAoa2V5ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dGV4dCArPSBgfCR7a2V5fWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHRleHQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IGBcXG4ke3RleHR9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRjb25zdCByZWFsbHlfcnVuID0gKCkgPT4ge1xuXHRcdGluaXRpYWxpemUoKTtcblx0XHRpZiAoXG5cdFx0XHQhSEMudXBsb2FkX2Rpc2FibGVkICYmXG5cdFx0XHRjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAtMSAmJlxuXHRcdFx0Y29uZi53Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ1VwbG9hZCcgJiZcblx0XHRcdGNvbmYud2dVc2VyTmFtZVxuXHRcdCkge1xuXHRcdFx0c2V0dXBfdXBsb2FkKCk7XG5cdFx0XHRzZXR1cCgoKSA9PiB7XG5cdFx0XHRcdC8vIENoZWNrIGZvciBzdGF0ZSByZXN0b3JhdGlvbiBvbmNlIHRoZSBzZXR1cCBpcyBkb25lIG90aGVyd2lzZSwgYnV0IGJlZm9yZSBzaWduYWxsaW5nIHNldHVwIGNvbXBsZXRpb25cblx0XHRcdFx0aWYgKHdpbmRvdy5VcGxvYWRGb3JtICYmIFVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlKSB7XG5cdFx0XHRcdFx0VXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUgPSBzZXRTdGF0ZShVcGxvYWRGb3JtLnByZXZpb3VzX2hvdGNhdF9zdGF0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFjb25mLndnSXNBcnRpY2xlIHx8XG5cdFx0XHRcdGNvbmYud2dBY3Rpb24gIT09ICd2aWV3JyB8fFxuXHRcdFx0XHRwYXJhbSgnZGlmZicpICE9PSBudWxsIHx8XG5cdFx0XHRcdHBhcmFtKCdvbGRpZCcpICE9PSBudWxsIHx8XG5cdFx0XHRcdCFjYW5fZWRpdCgpIHx8XG5cdFx0XHRcdEhDLmRpc2FibGUoKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGdldFBhZ2UoKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJ1biA9ICgpID0+IHtcblx0XHRpZiAoSEMuc3RhcnRlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRIQy5zdGFydGVkID0gdHJ1ZTtcblx0XHRyZWFsbHlfcnVuKCk7XG5cdH07XG5cdC8vIEV4cG9ydCBsZWdhY3kgZnVuY3Rpb25zXG5cdHdpbmRvdy5ob3RjYXRfZ2V0X3N0YXRlID0gKCkgPT4ge1xuXHRcdHJldHVybiBnZXRTdGF0ZSgpO1xuXHR9O1xuXHR3aW5kb3cuaG90Y2F0X3NldF9zdGF0ZSA9IChzdGF0ZSkgPT4ge1xuXHRcdHJldHVybiBzZXRTdGF0ZShzdGF0ZSk7XG5cdH07XG5cdHdpbmRvdy5ob3RjYXRfY2xvc2VfZm9ybSA9ICgpID0+IHtcblx0XHRjbG9zZUZvcm0oKTtcblx0fTtcblx0SEMucnVuV2hlblJlYWR5ID0gKGNhbGxiYWNrKSA9PiB7XG5cdFx0Ly8gcnVuIHVzZXItcmVnaXN0ZXJlZCBjb2RlIG9uY2UgSG90Q2F0IGlzIGZ1bGx5IHNldCB1cCBhbmQgcmVhZHkuXG5cdFx0bXcuaG9vaygnaG90Y2F0LnJlYWR5JykuYWRkKGNhbGxiYWNrKTtcblx0fTtcblx0Ly8gUnVuIGFzIHNvb24gYXMgcG9zc2libGUuIFRoaXMgdmFyaWVzIGRlcGVuZGluZyBvbiBNZWRpYVdpa2kgdmVyc2lvbjtcblx0Ly8gd2luZG93J3MgJ2xvYWQnIGV2ZW50IGlzIGFsd2F5cyBzYWZlLCBidXQgdXN1YWxseSB3ZSBjYW4gZG8gYmV0dGVyIHRoYW4gdGhhdC5cblx0aWYgKGNvbmYud2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdVcGxvYWQnKSB7XG5cdFx0Ly8gUmVsb2FkIEhvdENhdCBhZnRlciAoVkUpIGVkaXRzIChidWcgVDEwMzI4NSlcblx0XHRtdy5ob29rKCdwb3N0RWRpdCcpLmFkZCgoKSA9PiB7XG5cdFx0XHQvLyBSZXNldCBIb3RDYXQgaW4gY2FzZSB0aGlzIGlzIGEgc29mdCByZWxvYWQgKGUuZy4gVmlzdWFsRWRpdG9yIGVkaXQpLCB1bmxlc3MgdGhlIGNhdGVnb3JpZXNcblx0XHRcdC8vIHdlcmUgbm90IHJlLXJlbmRlcmVkIGFuZCBvdXIgaW50ZXJmYWNlIGlzIHN0aWxsIHRoZXJlIChlLmcuIERpc2N1c3Npb25Ub29scyBlZGl0KVxuXHRcdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRsaW5rcyAuaG90Y2F0bGluaycpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNhdExpbmUgPSBudWxsO1xuXHRcdFx0ZWRpdG9ycyA9IFtdO1xuXHRcdFx0aW5pdGlhbGl6ZWQgPSBmYWxzZTtcblx0XHRcdEhDLnN0YXJ0ZWQgPSBmYWxzZTtcblx0XHRcdHJ1bigpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdlIGNhbiBzYWZlbHkgdHJpZ2dlciBqdXN0IGFmdGVyIHVzZXIgY29uZmlndXJhdGlvbiBpcyBsb2FkZWQuXG5cdC8vIFVzZSBhbHdheXMoKSBpbnN0ZWFkIG9mIHRoZW4oKSB0byBhbHNvIHN0YXJ0IEhvdENhdCBpZiB0aGUgdXNlciBtb2R1bGUgaGFzIHByb2JsZW1zLlxuXHQkKHJ1bik7XG59KSgpO1xuIiwgImNvbnN0IGdldE1lc3NhZ2UgPSAoa2V5OiBzdHJpbmcsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nID0+IHtcblx0a2V5ID0gYGhvdGNhdC0ke2tleX1gO1xuXHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0cmV0dXJuIG13Lm1lc3NhZ2Uoa2V5LCAuLi5hcmdzKS5wbGFpbigpO1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBob3RDYXRNZXNzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3JlbW92ZWQnOiAn5bey56e76ZmkW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdGVtcGxhdGVfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e1tbQ2F0ZWdvcnk6JDFdXX19Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2FkZGVkJzogJ+W3sua3u+WKoFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQvLyAkMiBpcyB0aGUgbmV3IGtleVxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfa2V5Y2hhbmdlJzogJ+W3suioree9rltbQ2F0ZWdvcnk6JDFdXeeahOaWsOaOkuW6j+Wtl++8mlwiJDJcIicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9ub3RGb3VuZCc6ICfliIbpoZ7igJwkMeKAneaykuacieaJvuWIsCcsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9leGlzdHMnOiAn5YiG6aGe4oCcJDHigJ3lt7LntpPlrZjlnKjvvIzmspLmnInmt7vliqDjgIInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVzb2x2ZWQnOiAn77yI6YeN5a6a5ZCRW1tDYXRlZ29yeTokMV1d5bey6JmV55CG77yJJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdW5jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e3VuY2F0ZWdvcml6ZWR9fScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gcHJlZml4IHRvIHRoZSBlZGl0IHN1bW1hcnkuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXByZWZpeCc6ICfkvb/nlKhbW0g6SE9UQ0FUfEhvdENhdF1dJyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBhcHBlbmQgdG8gdGhlIGVkaXQgc3VtbWFyeS4gTmFtZWQgJ3VzaW5nJyBmb3IgaGlzdG9yaWNhbCByZWFzb25zLiBJZiB5b3UgcHJlZmVyXG5cdFx0XHQvLyB0byBoYXZlIGEgbWFya2VyIGF0IHRoZSBmcm9udCwgdXNlIHByZWZpeCBhbmQgc2V0IHRoaXMgdG8gdGhlIGVtcHR5IHN0cmluZy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdXNpbmcnOiAnJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfY2hhbmdlJzogJyQx5YCL5YiG6aGeJyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5OyBpLmUuLCBhIGNhdGVnb3J5IHRoYXQgc2hvdWxkIG5vdCBjb250YWluXG5cdFx0XHQvLyBhbnkgaXRlbXMsIGJ1dCB0aGF0IGNvbnRhaW5zIGxpbmtzIHRvIG90aGVyIGNhdGVnb3JpZXMgd2hlcmUgc3R1ZmYgc2hvdWxkIGJlIGNhdGVnb3JpemVkLiBJZiB5b3UgZG9uJ3QgaGF2ZVxuXHRcdFx0Ly8gdGhhdCBjb25jZXB0IG9uIHlvdXIgd2lraSwgc2V0IGl0IHRvIGJsYW5rIHN0cmluZy4gVXNlIGJsYW5rcywgbm90IHVuZGVyc2NvcmVzLlxuXHRcdFx0J2hvdGNhdC1kaXNhbWJpZ19jYXRlZ29yeSc6ICcnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgKHNvZnQpIHJlZGlyZWN0IHRvIHNvbWUgb3RoZXIgY2F0ZWdvcnkgZGVmaW5lZCBieSBhIGxpbmtcblx0XHRcdC8vIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LiBJZiB5b3VyIHdpa2kgZG9lc24ndCBoYXZlIHNvZnQgY2F0ZWdvcnkgcmVkaXJlY3RzLCBzZXQgdGhpcyB0byBudWxsLlxuXHRcdFx0Ly8gSWYgYSBzb2Z0LXJlZGlyZWN0ZWQgY2F0ZWdvcnkgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBsaW5rIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LCBpdCdzIGNvbnNpZGVyZWRcblx0XHRcdC8vIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnkgaW5zdGVhZC5cblx0XHRcdCdob3RjYXQtcmVkaXJfY2F0ZWdvcnknOiAn5bey6YeN5a6a5ZCR55qE5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2VwYXJhdG9yJzogJzsgJyxcblx0XHRcdC8vICQxIGlzIHJlcGxhY2VkIGJ5IGEgbnVtYmVyLiBJZiB5b3VyIGxhbmd1YWdlIGhhcyBzZXZlcmFsIHBsdXJhbCBmb3JtcyAoYy5mLiBbWzplbndpa2k6RHVhbCAoZ3JhbW1hdGljYWwgZm9ybSldXSksXG5cdFx0XHQvLyB5b3UgY2FuIHNldCB0aGlzIHRvIGFuIGFycmF5IG9mIHN0cmluZ3Mgc3VpdGFibGUgZm9yIHBhc3NpbmcgdG8gbXcubGFuZ3VhZ2UuY29uZmlnUGx1cmFsKCkuXG5cdFx0XHQvLyBJZiB0aGF0IGZ1bmN0aW9uIGRvZXNuJ3QgZXhpc3QsIEhvdENhdCB3aWxsIHNpbXBseSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGxhc3Rcblx0XHRcdC8vIGVudHJ5IGluIHRoZSBhcnJheS5cblx0XHRcdC8vIERlZmF1bHRzIHRvICdbWycgKyBjYXRlZ29yeV9jYW5vbmljYWwgKyAnOiQxXV0nLiBDYW4gYmUgb3ZlcnJpZGRlbiBpZiBpbiB0aGUgc2hvcnQgZWRpdCBzdW1tYXJpZXNcblx0XHRcdC8vIG5vdCB0aGUgc3RhbmRhcmQgY2F0ZWdvcnkgbmFtZSBzaG91bGQgYmUgdXNlZCBidXQsIHNheSwgYSBzaG9ydGVyIG5hbWVzcGFjZSBhbGlhcy4gJDEgaXMgcmVwbGFjZWRcblx0XHRcdC8vIGJ5IGEgY2F0ZWdvcnkgbmFtZS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJzogJyQxJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNvbW1pdCc6ICflhLLlrZgnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtb2snOiAn56K65a6aJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhbmNlbCc6ICflj5bmtognLFxuXHRcdFx0Ly8gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9lcnJvcic6XG5cdFx0XHRcdCfnhKHms5Xlvp7kvLrmnI3lmajlj5blvpfpoIHpnaLmloflrZfjgILlm6DmraTvvIzmgqjnmoTliIbpoZ7orormm7TnhKHms5XlhLLlrZjjgILmiJHlgJHngrrmraTkuI3kvr/ooajnpLrmirHmrYnjgIInLFxuXHRcdFx0Ly8gUGx1cmFsIG9mIGNhdGVnb3J5X2Nhbm9uaWNhbC5cblx0XHRcdCdob3RjYXQtY2F0ZWdvcmllcyc6ICfliIbpoZ4nLFxuXHRcdFx0Ly8gTmFtZXMgZm9yIHRoZSBzZWFyY2ggZW5naW5lc1xuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc2VhcmNoaW5kZXgnOiAn5pCc5bCL57Si5byVJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhZ2VsaXN0JzogJ+mggemdouWIl+ihqCcsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1jb21iaW5lZCc6ICflkIjkvbXmkJzlsIsnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc3ViY2F0JzogJ+WtkOWIhumhnicsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYXJlbnRjYXQnOiAn5LiK5bGk5YiG6aGeJyxcblx0XHRcdC8vIFRoZSB0b29sdGlwcyBmb3IgdGhlIGFib3ZlIGxpbmtzXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWNoYW5nZSc6ICfkv67mlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZW1vdmUnOiAn56e76ZmkJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtYWRkJzogJ+WinuWKoOS4gOWAi+aWsOWIhumhnicsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlc3RvcmUnOiAn5b6p5Y6f6K6K5pu0Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdW5kbyc6ICflvqnljp/orormm7QnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1kb3duJzogJ+aJk+mWi+S7peS/ruaUueS4pumhr+ekuuWtkOWIhumhnicsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVwJzogJ+aJk+mWi+S7peS/ruaUueS4pumhr+ekuuS4iuWxpOWIhumhnicsXG5cdFx0XHQvLyBUb29sdGlwIGZvciB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGlua1xuXHRcdFx0J2hvdGNhdC1tdWx0aV90b29sdGlwJzogJ+S/ruaUueWkmuWAi+WIhumhnicsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3JlbW92ZWQnOiAn5bey56e76ZmkW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdGVtcGxhdGVfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e1tbQ2F0ZWdvcnk6JDFdXX19Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2FkZGVkJzogJ+W3sua3u+WKoFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQvLyAkMiBpcyB0aGUgbmV3IGtleVxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfa2V5Y2hhbmdlJzogJ+W3suiuvue9rltbQ2F0ZWdvcnk6JDFdXeeahOaWsOaOkuW6j+Wtl++8mlwiJDJcIicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9ub3RGb3VuZCc6ICfliIbnsbvigJwkMeKAneayoeacieaJvuWIsCcsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9leGlzdHMnOiAn5YiG57G74oCcJDHigJ3lt7Lnu4/lrZjlnKjvvIzmsqHmnInmt7vliqDjgIInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVzb2x2ZWQnOiAn77yI6YeN5a6a5ZCRW1tDYXRlZ29yeTokMV1d5bey5aSE55CG77yJJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdW5jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e3VuY2F0ZWdvcml6ZWR9fScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gcHJlZml4IHRvIHRoZSBlZGl0IHN1bW1hcnkuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXByZWZpeCc6ICfkvb/nlKhbW0g6SE9UQ0FUfEhvdENhdF1dJyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBhcHBlbmQgdG8gdGhlIGVkaXQgc3VtbWFyeS4gTmFtZWQgJ3VzaW5nJyBmb3IgaGlzdG9yaWNhbCByZWFzb25zLiBJZiB5b3UgcHJlZmVyXG5cdFx0XHQvLyB0byBoYXZlIGEgbWFya2VyIGF0IHRoZSBmcm9udCwgdXNlIHByZWZpeCBhbmQgc2V0IHRoaXMgdG8gdGhlIGVtcHR5IHN0cmluZy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdXNpbmcnOiAnJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfY2hhbmdlJzogJyQx5Liq5YiG57G7Jyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5OyBpLmUuLCBhIGNhdGVnb3J5IHRoYXQgc2hvdWxkIG5vdCBjb250YWluXG5cdFx0XHQvLyBhbnkgaXRlbXMsIGJ1dCB0aGF0IGNvbnRhaW5zIGxpbmtzIHRvIG90aGVyIGNhdGVnb3JpZXMgd2hlcmUgc3R1ZmYgc2hvdWxkIGJlIGNhdGVnb3JpemVkLiBJZiB5b3UgZG9uJ3QgaGF2ZVxuXHRcdFx0Ly8gdGhhdCBjb25jZXB0IG9uIHlvdXIgd2lraSwgc2V0IGl0IHRvIGJsYW5rIHN0cmluZy4gVXNlIGJsYW5rcywgbm90IHVuZGVyc2NvcmVzLlxuXHRcdFx0J2hvdGNhdC1kaXNhbWJpZ19jYXRlZ29yeSc6ICcnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgKHNvZnQpIHJlZGlyZWN0IHRvIHNvbWUgb3RoZXIgY2F0ZWdvcnkgZGVmaW5lZCBieSBhIGxpbmtcblx0XHRcdC8vIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LiBJZiB5b3VyIHdpa2kgZG9lc24ndCBoYXZlIHNvZnQgY2F0ZWdvcnkgcmVkaXJlY3RzLCBzZXQgdGhpcyB0byBudWxsLlxuXHRcdFx0Ly8gSWYgYSBzb2Z0LXJlZGlyZWN0ZWQgY2F0ZWdvcnkgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBsaW5rIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LCBpdCdzIGNvbnNpZGVyZWRcblx0XHRcdC8vIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnkgaW5zdGVhZC5cdFx0XHQnaG90Y2F0LXJlZGlyX2NhdGVnb3J5JzogJ+W3sumHjeWumuWQkeeahOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNlcGFyYXRvcic6ICc7ICcsXG5cdFx0XHQvLyAkMSBpcyByZXBsYWNlZCBieSBhIG51bWJlci4gSWYgeW91ciBsYW5ndWFnZSBoYXMgc2V2ZXJhbCBwbHVyYWwgZm9ybXMgKGMuZi4gW1s6ZW53aWtpOkR1YWwgKGdyYW1tYXRpY2FsIGZvcm0pXV0pLFxuXHRcdFx0Ly8geW91IGNhbiBzZXQgdGhpcyB0byBhbiBhcnJheSBvZiBzdHJpbmdzIHN1aXRhYmxlIGZvciBwYXNzaW5nIHRvIG13Lmxhbmd1YWdlLmNvbmZpZ1BsdXJhbCgpLlxuXHRcdFx0Ly8gSWYgdGhhdCBmdW5jdGlvbiBkb2Vzbid0IGV4aXN0LCBIb3RDYXQgd2lsbCBzaW1wbHkgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBsYXN0XG5cdFx0XHQvLyBlbnRyeSBpbiB0aGUgYXJyYXkuXG5cdFx0XHQvLyBEZWZhdWx0cyB0byAnW1snICsgY2F0ZWdvcnlfY2Fub25pY2FsICsgJzokMV1dJy4gQ2FuIGJlIG92ZXJyaWRkZW4gaWYgaW4gdGhlIHNob3J0IGVkaXQgc3VtbWFyaWVzXG5cdFx0XHQvLyBub3QgdGhlIHN0YW5kYXJkIGNhdGVnb3J5IG5hbWUgc2hvdWxkIGJlIHVzZWQgYnV0LCBzYXksIGEgc2hvcnRlciBuYW1lc3BhY2UgYWxpYXMuICQxIGlzIHJlcGxhY2VkXG5cdFx0XHQvLyBieSBhIGNhdGVnb3J5IG5hbWUuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZSc6ICckMScsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jb21taXQnOiAn5L+d5a2YJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW9rJzogJ+ehruWumicsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYW5jZWwnOiAn5Y+W5raIJyxcblx0XHRcdC8vIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfZXJyb3InOlxuXHRcdFx0XHQn5peg5rOV5LuO5pyN5Yqh5Zmo5Y+W5b6X6aG16Z2i5paH5a2X44CC5Zug5q2k77yM5oKo55qE5YiG57G75pu05pS55peg5rOV5L+d5a2Y44CC5oiR5Lus5Li65q2k5LiN5L6/6KGo56S65oqx5q2J44CCJyxcblx0XHRcdC8vIFBsdXJhbCBvZiBjYXRlZ29yeV9jYW5vbmljYWwuXG5cdFx0XHQnaG90Y2F0LWNhdGVnb3JpZXMnOiAn5YiG57G7Jyxcblx0XHRcdC8vIE5hbWVzIGZvciB0aGUgc2VhcmNoIGVuZ2luZXNcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXNlYXJjaGluZGV4JzogJ+aQnOe0oue0ouW8lScsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYWdlbGlzdCc6ICfpobXpnaLliJfooagnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtY29tYmluZWQnOiAn5ZCI5bm25pCc57SiJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXN1YmNhdCc6ICflrZDliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFyZW50Y2F0JzogJ+S4iuWxguWIhuexuycsXG5cdFx0XHQvLyBUaGUgdG9vbHRpcHMgZm9yIHRoZSBhYm92ZSBsaW5rc1xuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1jaGFuZ2UnOiAn5L+u5pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVtb3ZlJzogJ+enu+mZpCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWFkZCc6ICflop7liqDkuIDkuKrmlrDliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZXN0b3JlJzogJ+aSpOmUgOabtOaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVuZG8nOiAn5pKk6ZSA5pu05pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtZG93bic6ICfmiZPlvIDku6Xkv67mlLnlubbmmL7npLrlrZDliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11cCc6ICfmiZPlvIDku6Xkv67mlLnlubbmmL7npLrkuIrlsYLliIbnsbsnLFxuXHRcdFx0Ly8gVG9vbHRpcCBmb3IgdGhlIFwiZW50ZXIgbXVsdGktbW9kZVwiIGxpbmtcblx0XHRcdCdob3RjYXQtbXVsdGlfdG9vbHRpcCc6ICfkv67mlLnlpJrkuKrliIbnsbsnLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2hvdENhdE1lc3NhZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxxQkFBcUI7O0FDRGxDLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUd4QixJQUFNQyxRQUF5Q0MsZUFBYztBQUM1RCxVQUFBLEdBQU9ILGtCQUFBSSxXQUFVRCxTQUFTO0FBQzNCOztDQ01DLFNBQVNFLGNBQWM7QUFDdkIsTUFDQ0MsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUIsTUFBTSxLQUN2Q0MsT0FBT0Msa0NBQ1AsQ0FBQ0MsU0FBU0MsY0FBYyxrQkFBa0IsR0FDekM7QUFDRDtFQUNEO0FBQ0EsUUFBTUMsTUFBTVgsTUFBTSxpQkFBaUI7QUFDbkMsUUFBTVksd0JBQXdCO0FBQzlCLFFBQU1DLFdBQVc7QUFDakIsUUFBTUMsa0JBQWtCO0FBQ3hCLFFBQU1DLGNBQWNYLEdBQUdZLFFBQVFWLElBQUlRLGVBQWU7QUFPbEQsUUFBTUcsY0FBZUMsZUFBOEI7QUFDbEQsV0FBT0MsRUFBRSxRQUFRLEVBQUVDLEtBQUssU0FBQSxXQUFBQyxPQUFvQkgsV0FBUyxHQUFBLEVBQUFHLE9BQUl4QixrQkFBa0IsQ0FBRSxFQUFFeUIsS0FBSyxHQUFHO0VBQ3hGO0FBQ0EsUUFBTUMsbUJBQW1CQSxDQUFDQyxVQUErQkMsTUFBY0MsVUFBdUM7QUFDN0csV0FBT1AsRUFBRSxPQUFPLEVBQ2RRLFNB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SSxhQUFhLFVBQ2xCd0YsTUFBTSxNQUFNLE1BQU0sUUFDbEJBLE1BQU0sT0FBTyxNQUFNLFFBQ25CLENBQUMyaEIsU0FBUyxLQUNWamtCLEdBQUd2QyxRQUFRLEdBQ1Y7QUFDRDtNQUNEO0FBQ0FtcUIsY0FBUTtJQUNUO0VBQ0Q7QUFDQSxRQUFNVyxNQUFNQSxNQUFNO0FBQ2pCLFFBQUl2b0IsR0FBR3dvQixTQUFTO0FBQ2Y7SUFDRDtBQUNBeG9CLE9BQUd3b0IsVUFBVTtBQUNiTixlQUFXO0VBQ1o7QUFFQTd5QixTQUFPb3pCLG1CQUFtQixNQUFNO0FBQy9CLFdBQU9WLFNBQVM7RUFDakI7QUFDQTF5QixTQUFPcXpCLG1CQUFvQmx5QixXQUFVO0FBQ3BDLFdBQU9xeEIsU0FBU3J4QixLQUFLO0VBQ3RCO0FBQ0FuQixTQUFPc3pCLG9CQUFvQixNQUFNO0FBQ2hDekUsY0FBVTtFQUNYO0FBQ0Fsa0IsS0FBRzRvQixlQUFnQjFZLGNBQWE7QUFFL0JoYixPQUFHcXlCLEtBQUssY0FBYyxFQUFFcnFCLElBQUlnVCxRQUFRO0VBQ3JDO0FBR0EsTUFBSXhULEtBQUt5ckIsK0JBQStCLFVBQVU7QUFFakRqekIsT0FBR3F5QixLQUFLLFVBQVUsRUFBRXJxQixJQUFJLE1BQU07QUFHN0IsVUFBSTNILFNBQVNDLGNBQWMsdUJBQXVCLEdBQUc7QUFDcEQ7TUFDRDtBQUNBMFIsZ0JBQVU7QUFDVkUsZ0JBQVUsQ0FBQTtBQUNWZ2Ysb0JBQWM7QUFDZHBtQixTQUFHd29CLFVBQVU7QUFDYkQsVUFBSTtJQUNMLENBQUM7RUFDRjtBQUdBdHlCLElBQUVzeUIsR0FBRztBQUNOLEdBQUc7IiwKICAibmFtZXMiOiBbImNhdGNoZWNrSW5saW5lSWNvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIm13QXBpIiwgInVzZXJBZ2VudCIsICJpbml0TXdBcGkiLCAiaG90Q2F0Q2hlY2siLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ3aW5kb3ciLCAiSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0T3B0T3V0IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiYXBpIiwgImNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCIsICJzZWxmTmFtZSIsICJzdG9yYWdlSXRlbU5hbWUiLCAic3RvcmFnZUl0ZW0iLCAic3RvcmFnZSIsICJjcmVhdGVqSWNvbiIsICJpY29uQ2xhc3MiLCAiJCIsICJhdHRyIiwgImNvbmNhdCIsICJ0ZXh0IiwgImNyZWF0ZU5vdGlmeUFyZWEiLCAidGV4dE5vZGUiLCAiaWNvbiIsICJzdGF0ZSIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiY3NzIiwgInBhZGRpbmciLCAib25lIiwgImUiLCAiX3NlbGYkd3BUZXh0Ym94MSR2YWx1IiwgInNlbGYiLCAibmV3VmFsIiwgIndwVGV4dGJveDEiLCAidmFsdWUiLCAicmVwbGFjZSIsICJkbGdCdXR0b25zIiwgIiRkaWFsb2dDaGVja1N0b3JhZ2UiLCAiJHBlcm1hU2F2ZUhpbnQiLCAiJHRleHRIaW50Tm9kZSIsICIkZGlhbG9nIiwgImRvUmVtb3ZlIiwgIndwU3VtbWFyeSIsICJ3cml0ZVN0b3JhZ2UiLCAidmFsIiwgInNldCIsICJfJGRpYWxvZ0NoZWNrU3RvcmFnZSQiLCAiY2hlY2tlZCIsICJkaWFsb2ciLCAiXyRkaWFsb2dDaGVja1N0b3JhZ2UkMiIsICJfYWRkVG9KUyIsICJfZSIsICJwcmV2ZW50RGVmYXVsdCIsICJoYXNDbGFzcyIsICIkZWwiLCAib2ZmIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgInRpdGxlIiwgInN1bW1hcnkiLCAiYXBwZW5kdGV4dCIsICJkYXRhIiwgImVkaXREb25lIiwgImVkaXRTdGF0IiwgImVycm9yIiwgIm5vdGlmeSIsICJjb2RlIiwgImluZm8iLCAidGFnIiwgInR5cGUiLCAiZmFkZU91dCIsICJwb3N0V2l0aFRva2VuIiwgInRoZW4iLCAicHJvbXB0IiwgImlkIiwgIm9uIiwgImZhZGVJbiIsICJhcHBlbmRUbyIsICJkaXNwbGF5IiwgInVzZXIiLCAiaXNBbm9uIiwgImhpZGUiLCAibW9kYWwiLCAiY2xvc2VPbkVzY2FwZSIsICJ3aWR0aCIsICJidXR0b25zIiwgImNsb3NlIiwgIiRib2R5IiwgImZpbmQiLCAidHJpZ2dlciIsICJvcGVuIiwgIiRidXR0b25zIiwgInBhcmVudCIsICJlcSIsICJidXR0b24iLCAiaWNvbnMiLCAicHJpbWFyeSIsICJIb3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQiLCAiJG9rTGluayIsICJocmVmIiwgImRvRWRpdCIsICJyZXN1bHQiLCAibm9jcmVhdGUiLCAiYWpheCIsICJ1cmwiLCAiZGF0YVR5cGUiLCAic3VjY2VzcyIsICJjYWNoZSIsICJsb2FkSG90Q2F0Q2hlY2siLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFyZ3MiLCAibWVzc2FnZSIsICJwbGFpbiIsICJob3RDYXRNZXNzYWdlcyIsICJ3Z1VzZXJMYW5ndWFnZSIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJob3RDYXQiLCAiY29uZiIsICJ2YWx1ZXMiLCAiSG90Q2F0IiwgIm5vZGVOYW1lIiwgIndnQWN0aW9uIiwgImxpbmtzIiwgImNoYW5nZSIsICJyZW1vdmUiLCAiYWRkIiwgInJlc3RvcmUiLCAidW5kbyIsICJkb3duIiwgInVwIiwgImNoYW5nZVRhZyIsICJhZGRtdWx0aSIsICJkaXNhYmxlIiwgIm5zIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIm5zSWRzIiwgIndnTmFtZXNwYWNlSWRzIiwgIndnQXJ0aWNsZUlkIiwgInRlc3QiLCAid2dUaXRsZSIsICJjcmVhdG9yIiwgInRpbWVkdGV4dCIsICJpbnN0aXR1dGlvbiIsICJ1bmNhdF9yZWdleHAiLCAiZXhpc3RzWWVzIiwgImV4aXN0c05vIiwgInRlbXBsYXRlX2NhdGVnb3JpZXMiLCAiY2FwaXRhbGl6ZVBhZ2VOYW1lcyIsICJ1cGxvYWRfZGlzYWJsZWQiLCAiYmxhY2tsaXN0IiwgImJnX2NoYW5nZWQiLCAibm9fYXV0b2NvbW1pdCIsICJkZWxfbmVlZHNfZGlmZiIsICJzdWdnZXN0X2RlbGF5IiwgImVkaXRib3hfd2lkdGgiLCAic3VnZ2VzdGlvbnMiLCAiZml4ZWRfc2VhcmNoIiwgInVzZV91cF9kb3duIiwgImxpc3RTaXplIiwgInNpbmdsZV9taW5vciIsICJkb250X2FkZF90b193YXRjaGxpc3QiLCAic2hvcnRjdXRzIiwgImFkZFNob3J0Y3V0cyIsICJtYXAiLCAiX2EiLCAiayIsICJPYmplY3QiLCAiaGFzT3duIiwgInYiLCAidHJpbSIsICJsZW5ndGgiLCAiSEMiLCAidWEiLCAibmF2aWdhdG9yIiwgInRvTG93ZXJDYXNlIiwgImlzX3dlYmtpdCIsICJjYXRfcHJlZml4IiwgIm5vU3VnZ2VzdGlvbnMiLCAid2lraVRleHRCbGFuayIsICJ3aWtpVGV4dEJsYW5rUkUiLCAiUmVnRXhwIiwgIndpa2lUZXh0QmxhbmtPckJpZGkiLCAiZm9ybWF0dGVkTmFtZXNwYWNlcyIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAibmFtZXNwYWNlSWRzIiwgImF1dG9Mb2NhbGl6ZSIsICJuYW1lc3BhY2VOdW1iZXIiLCAiZmFsbGJhY2siLCAiY3JlYXRlUmVnZXhwU3RyIiwgIm5hbWUiLCAicmVnZXhfbmFtZSIsICJpIiwgImluaXRpYWwiLCAiY2hhckF0IiwgImxsIiwgInVsIiwgInRvVXBwZXJDYXNlIiwgImNhbm9uaWNhbCIsICJTdHJpbmciLCAicmVnZXhwIiwgImNhdF9uYW1lIiwgImNhdGVnb3J5X2Nhbm9uaWNhbCIsICJjYXRlZ29yeV9yZWdleHAiLCAidGVtcGxhdGVfcmVnZXhwIiwgIm1ha2UiLCAiYXJnIiwgImxpdGVyYWwiLCAiY3JlYXRlVGV4dE5vZGUiLCAiY3JlYXRlRWxlbWVudCIsICJwYXJhbSIsICJ1cmkiLCAibG9jYXRpb24iLCAicmUiLCAibSIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJzY3JpcHQiLCAid2dTY3JpcHQiLCAiaW5kZXhPZiIsICJ3Z1NlcnZlciIsICJzbGljZSIsICJwcm90b2NvbCIsICJwcmVmaXgiLCAid2dBcnRpY2xlUGF0aCIsICJjbGFzc05hbWUiLCAiY2FwaXRhbGl6ZSIsICJzdHIiLCAid2lraVBhZ2VQYXRoIiwgInBhZ2VOYW1lIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJlc2NhcGVSRSIsICJzdWJzdGl0dXRlRmFjdG9yeSIsICJvcHRpb25zIiwgImxlYWQiLCAiaW5kaWNhdG9yIiwgImxicmFjZSIsICJyYnJhY2UiLCAibWF0Y2giLCAiaWR4IiwgImFscGhhIiwgInJlcGxhY2VtZW50IiwgInJlcGxhY2VTaG9ydGN1dHMiLCAicmVwbGFjZUhhc2giLCAicyIsICJmaW5kQ2F0c1JFIiwgInJlcGxhY2VCeUJsYW5rcyIsICJmaW5kX2NhdGVnb3J5IiwgIndpa2l0ZXh0IiwgImNhdGVnb3J5IiwgIm9uY2UiLCAiY2F0X3JlZ2V4IiwgIm5vd2lraVJlZ2V4IiwgImNvcGllZHRleHQiLCAiY3Vycl9tYXRjaCIsICJpbnRlcmxhbmd1YWdlUkUiLCAiY2hhbmdlX2NhdGVnb3J5IiwgInRvUmVtb3ZlIiwgInRvQWRkIiwgImlzX2hpZGRlbiIsICJmaW5kX2luc2VydGlvbnBvaW50IiwgIl93aWtpdGV4dCIsICJpbmRleCIsICJsYXN0SW5kZXgiLCAib25DYXQiLCAibmFtZVNwYWNlIiwgImtleUNoYW5nZSIsICJtYXRjaGVzIiwgImNhdF9wb2ludCIsICJiZWZvcmUiLCAiTWF0aCIsICJtYXgiLCAiYWZ0ZXIiLCAic2VhcmNoIiwgImoiLCAicG9pbnQiLCAibmV3Y2F0c3RyaW5nIiwgInN1ZmZpeCIsICJ0eHQiLCAiZXZ0S2V5cyIsICJjdHJsS2V5IiwgIm1ldGFLZXkiLCAic2hpZnRLZXkiLCAiZXZ0S2lsbCIsICJzdG9wUHJvcGFnYXRpb24iLCAiY2FuY2VsQnViYmxlIiwgImNhdExpbmUiLCAib25VcGxvYWQiLCAiZWRpdG9ycyIsICJjb21taXRCdXR0b24iLCAiY29tbWl0Rm9ybSIsICJtdWx0aVNwYW4iLCAicGFnZVRleHQiLCAicGFnZVRpbWUiLCAicGFnZVdhdGNoZWQiLCAid2F0Y2hDcmVhdGUiLCAid2F0Y2hFZGl0IiwgIm1pbm9yRWRpdHMiLCAiZWRpdFRva2VuIiwgImlzX3J0bCIsICJzZXJ2ZXJUaW1lIiwgImxhc3RSZXZJZCIsICJwYWdlVGV4dFJldklkIiwgImNvbmZsaWN0aW5nVXNlciIsICJuZXdET00iLCAiVU5DSEFOR0VEIiwgIk9QRU4iLCAiQ0hBTkdFX1BFTkRJTkciLCAiQ0hBTkdFRCIsICJERUxFVEVEIiwgInNldFBhZ2UiLCAic3RhcnRUaW1lIiwgInF1ZXJ5IiwgInBhZ2VzIiwgInBhZ2UiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgImNvbnRlbnQiLCAidGltZXN0YW1wIiwgInJldmlkIiwgImxhc3RyZXZpZCIsICJzdGFydHRpbWVzdGFtcCIsICJ3YXRjaGVkIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAibGFuZ2xpbmtzIiwgImxhbmciLCAiZ2VuZXJhbCIsICJ0aW1lIiwgImNhc2UiLCAidXNlcmluZm8iLCAid2F0Y2hjcmVhdGlvbnMiLCAid2F0Y2hkZWZhdWx0IiwgIm1pbm9yZGVmYXVsdCIsICJzYXZlSW5Qcm9ncmVzcyIsICJpbml0aWF0ZUVkaXQiLCAiZmFpbHVyZSIsICJvbGRCdXR0b25TdGF0ZSIsICJkaXNhYmxlZCIsICJmYWlsIiwgImFwcGx5IiwgImZvcm1hdHZlcnNpb24iLCAicmF3Y29udGludWUiLCAidGl0bGVzIiwgIndnUGFnZU5hbWUiLCAicHJvcCIsICJpbnByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAicnZsaW1pdCIsICJydmRpciIsICJydnN0YXJ0aWQiLCAid2dDdXJSZXZpc2lvbklkIiwgImxsbGltaXQiLCAibWV0YSIsICJ1aXByb3AiLCAiZG9uZSIsICJzdGF0dXMiLCAic3RhdHVzVGV4dCIsICJtdWx0aUNoYW5nZU1zZyIsICJjb3VudCIsICJjdXJyZW50VGltZXN0YW1wIiwgIm5vdyIsICJEYXRlIiwgInRzIiwgImdldFVUQ0Z1bGxZZWFyIiwgInR3byIsICJnZXRVVENNb250aCIsICJnZXRVVENEYXRlIiwgImdldFVUQ0hvdXJzIiwgImdldFVUQ01pbnV0ZXMiLCAiZ2V0VVRDU2Vjb25kcyIsICJwZXJmb3JtQ2hhbmdlcyIsICJzaW5nbGVFZGl0b3IiLCAic2VsZkVkaXRDb25mbGljdCIsICJ3Z1VzZXJOYW1lIiwgIm5vQ29tbWl0IiwgIndwRWRpdFRva2VuIiwgIndwRGlmZiIsICJ3cFNhdmUiLCAiY2hhbmdlZCIsICJhZGRlZCIsICJkZWxldGVkIiwgInRvRWRpdCIsICJlZGl0IiwgImNoYW5nZXMiLCAib3JpZ2luYWxDYXRlZ29yeSIsICJjdXJyZW50Q2F0ZWdvcnkiLCAiY3VycmVudEtleSIsICJjdXJyZW50SGlkZGVuIiwgImZyb20iLCAidG8iLCAid3BNaW5vcmVkaXQiLCAid3BXYXRjaHRoaXMiLCAid3BDaGFuZ2VUYWdzIiwgIndwQXV0b1N1bW1hcnkiLCAiam9pbiIsICJzaG9ydFN1bW1hcnkiLCAiYXJyb3ciLCAid3BTdGFydHRpbWUiLCAid3BFZGl0dGltZSIsICJvbGRpZCIsICJoY0NvbW1pdCIsICJjbGljayIsICJyZXNvbHZlT25lIiwgInRvUmVzb2x2ZSIsICJjYXRzIiwgImNhdGVnb3JpZXMiLCAiaXNfZGFiIiwgImlzX3JlZGlyIiwgInJlZGlyZWN0IiwgImNhdGVnb3J5aW5mbyIsICJoaWRkZW4iLCAiaXNfbWlzc2luZyIsICJtaXNzaW5nIiwgImRhYklucHV0Q2xlYW5lZCIsICJpbnB1dEV4aXN0cyIsICJzcmMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgIm4iLCAiY2F0XyIsICJjYXQiLCAiZXJyIiwgImYiLCAiZGFiIiwgInJlc29sdmVSZWRpcmVjdHMiLCAicCIsICJyZXNvbHZlTXVsdGkiLCAiY2FsbGJhY2siLCAiZGFiSW5wdXQiLCAibGFzdElucHV0IiwgInBsbmFtZXNwYWNlIiwgInBsbGltaXQiLCAiY2xsaW1pdCIsICJqc29uIiwgInJlcSIsICJtYWtlQWN0aXZlIiwgIndoaWNoIiwgImlzX2FjdGl2ZSIsICJfaSIsICJfZWRpdG9ycyIsICJlZGl0b3IiLCAiaW5hY3RpdmF0ZSIsICJzaG93RGFiIiwgImV4cGVjdGVkSW5wdXQiLCAibGFzdFJlYWxJbnB1dCIsICJhY3R1YWxWYWx1ZSIsICJzaG93c0xpc3QiLCAic3BsaXQiLCAibGFzdFNlbGVjdGlvbiIsICJzdGFydCIsICJlbmQiLCAiZGlzcGxheUxpc3QiLCAic2V0VGltZW91dCIsICJzZXRTZWxlY3Rpb24iLCAic2hvd1N1Z2dlc3Rpb25zIiwgIm11bHRpU3VibWl0IiwgIl9pMiIsICJfZWRpdG9yczIiLCAibXNnIiwgInJlc29sdmVkIiwgImZpcnN0RGFiIiwgImRvbnRDaGFuZ2UiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZWxlbWVudCIsICJhY2NlcHRDaGVjayIsICJjb21taXQiLCAic2V0TXVsdGlJbnB1dCIsICJhZGRFdmVudExpc3RlbmVyIiwgInBhcmVudE5vZGUiLCAicmVwbGFjZUNoaWxkIiwgImNoZWNrTXVsdGlJbnB1dCIsICJoYXNDaGFuZ2VzIiwgIl9pMyIsICJfZWRpdG9yczMiLCAic3VnZ2VzdGlvbkVuZ2luZXMiLCAib3BlbnNlYXJjaCIsICJoYW5kbGVyIiwgInF1ZXJ5UmVzdWx0IiwgInF1ZXJ5S2V5IiwgImV4aXN0cyIsICJzcGxpY2UiLCAibm9ybWFsaXplZCIsICJpbnRlcm5hbHNlYXJjaCIsICJhbGxwYWdlcyIsICJfdGl0bGUiLCAic3ViY2F0ZWdvcmllcyIsICJjYXRlZ29yeW1lbWJlcnMiLCAicGFyZW50Y2F0ZWdvcmllcyIsICJzdWdnZXN0aW9uQ29uZmlncyIsICJzZWFyY2hpbmRleCIsICJlbmdpbmVzIiwgInNob3ciLCAidGVtcCIsICJub0NvbXBsZXRpb24iLCAicGFnZWxpc3QiLCAiY29tYmluZWQiLCAic3ViY2F0IiwgInBhcmVudGNhdCIsICJCUyIsICJUQUIiLCAiUkVUIiwgIkVTQyIsICJTUEFDRSIsICJQR1VQIiwgIlBHRE9XTiIsICJVUCIsICJET1dOIiwgIkRFTCIsICJJTUUiLCAiQ2F0ZWdvcnlFZGl0b3IiLCAiY29uc3RydWN0b3IiLCAiaW5pdGlhbGl6ZSIsICJsaW5lIiwgInNwYW4iLCAiZGlyIiwgImlzQWRkQ2F0ZWdvcnkiLCAiY2F0TGluayIsICJmaXJzdENoaWxkIiwgIm9yaWdpbmFsS2V5IiwgIm9yaWdpbmFsRXhpc3RzIiwgIm1ha2VMaW5rU3BhbiIsICJ1cERvd25MaW5rcyIsICJzdHlsZSIsICJsaW5rU3BhbiIsICJpbnNlcnRCZWZvcmUiLCAibmV4dFNpYmxpbmciLCAibGluayIsICJiaW5kIiwgIm5vcm1hbExpbmtzIiwgInVuZGVsTGluayIsICJvcmlnaW5hbEhpZGRlbiIsICJlbmdpbmUiLCAiY3VycmVudEV4aXN0cyIsICJsYXN0U2F2ZWRTdGF0ZSIsICJsYXN0U2F2ZWRDYXRlZ29yeSIsICJsYXN0U2F2ZWRLZXkiLCAibGFzdFNhdmVkRXhpc3RzIiwgImxhc3RTYXZlZEhpZGRlbiIsICJpbnZva2VTdWdnZXN0aW9ucyIsICJkb250X2F1dG9jb21wbGV0ZSIsICJ0ZXh0Y2hhbmdlIiwgIm1ha2VGb3JtIiwgImZvcm0iLCAibWV0aG9kIiwgImFjY2VwdCIsICJzaXplIiwgImV2ZW50IiwgImltZSIsICJsYXN0S2V5IiwgInVzZXNDb21wb3NpdGlvbiIsICJrZXlDb3VudCIsICJwcm9jZXNzS2V5IiwgInJlc2V0S2V5U2VsZWN0aW9uIiwgImNhbmNlbCIsICJvbmJlZm9yZWRlYWN0aXZhdGUiLCAiY3JlYXRlVGV4dFJhbmdlIiwgInNhdmVWaWV3IiwgImxpc3QiLCAiaGlnaGxpZ2h0U3VnZ2VzdGlvbiIsICJmb2N1cyIsICJlbmdpbmVTZWxlY3RvciIsICJvcHQiLCAic2VsZWN0ZWQiLCAic2VsZWN0ZWRJbmRleCIsICJidXR0b25fbGFiZWwiLCAiX2lkIiwgImRlZmF1bHRUZXh0IiwgImxhYmVsIiwgIk9LIiwgIm9rIiwgImNhbmNlbEJ1dHRvbiIsICJwb3NpdGlvbiIsICJ3aGl0ZVNwYWNlIiwgIl9pNCIsICJfZWRpdG9yczQiLCAib3JpZ2luYWxTdGF0ZSIsICJyZWFkT25seSIsICJyZW1vdmVFZGl0b3IiLCAiYmFja2dyb3VuZENvbG9yIiwgIm5leHQiLCAicm9sbGJhY2siLCAidW5kb0xpbmsiLCAiZG9udENoZWNrIiwgInNhbml0aXplSW5wdXQiLCAib3JpZ2luYWwiLCAiX2k1IiwgIl9lZGl0b3JzNSIsICJjc3NUZXh0IiwgInRleHREZWNvcmF0aW9uIiwgInNlbGVjdEVuZ2luZSIsICJlbmdpbmVOYW1lIiwgIm1ha2VDYWxsIiwgImNhbGxiYWNrT2JqIiwgImNsZWFuS2V5IiwgImNiIiwgInoiLCAiY2FsbHNNYWRlIiwgIm5vZkNhbGxzIiwgImFsbFRpdGxlcyIsICJkb250Q2FjaGUiLCAiY2FuY2VsbGVkIiwgImdldEpTT04iLCAiZ2VuZXJhdGVBcnJheSIsICJmb3JjZSIsICJwaXBlIiwgIm1ha2VDYWxscyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJlbmdpbmVfIiwgIndnU2NyaXB0UGF0aCIsICJkb250QXV0b2NvbXBsZXRlIiwgImxhc3RRdWVyeSIsICJ2Tm9ybWFsaXplZCIsICJrbm93blRvRXhpc3QiLCAidkxvdyIsICJzb3J0IiwgImEiLCAiYiIsICJwcmVmaXhNYXRjaEEiLCAicHJlZml4TWF0Y2hCIiwgImFMb3ciLCAiYkxvdyIsICJmaXJzdFRpdGxlIiwgImNvbXBsZXRlZCIsICJhdXRvQ29tcGxldGUiLCAiZXhpc3RpbmciLCAibm9mSXRlbXMiLCAiYWxpZ24iLCAiekluZGV4IiwgImFuY2hvciIsICJsaXN0aCIsICJ0b3AiLCAib2Zmc2V0VG9wIiwgIm9mZnNldEhlaWdodCIsICJtYXhMaXN0SGVpZ2h0IiwgInZpZXdwb3J0IiwgIndoYXQiLCAiZXZhbHVhdGUiLCAib3BlcmEiLCAiZG9jdW1lbnRFbGVtZW50IiwgInNjcm9sbF9vZmZzZXQiLCAibm9kZSIsICJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCAiYm94IiwgIngiLCAicm91bmQiLCAibGVmdCIsICJ5IiwgInQiLCAibCIsICJvZmZzZXRMZWZ0IiwgIm9mZnNldFBhcmVudCIsICJ0ZXh0UG9zIiwgIm5sIiwgIm50IiwgIm9mZnNldCIsICJ0ZXh0Qm94V2lkdGgiLCAib2Zmc2V0V2lkdGgiLCAiY2xpZW50V2lkdGgiLCAic2Nyb2xsIiwgInZpZXdfdyIsICJ3IiwgImxfcG9zIiwgInJpZ2h0IiwgInJlbGF0aXZlX29mZnNldCIsICJhY3RWYWwiLCAibm9ybWFsaXplZEFjdFZhbCIsICJkb250TW9kaWZ5IiwgImNhblNlbGVjdCIsICJzZXRTZWxlY3Rpb25SYW5nZSIsICJzZWxlY3Rpb25TdGFydCIsICJzZWxlY3Rpb25FbmQiLCAibmV3X3NlbGVjdGlvbiIsICJtb3ZlIiwgIm1vdmVFbmQiLCAic2VsZWN0IiwgImdldFNlbGVjdGlvbiIsICJzZWxlY3Rpb24iLCAiY3JlYXRlUmFuZ2UiLCAicm5nIiwgImR1cGxpY2F0ZSIsICJ0ZXh0Um5nIiwgInNldEVuZFBvaW50IiwgImN1cnIiLCAidGd0IiwgImhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3QiLCAiSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0IiwgImhvdGNhdF9ub19hdXRvY29tbWl0IiwgIkhvdENhdE5vQXV0b0NvbW1pdCIsICJob3RjYXRfZGVsX25lZWRzX2RpZmYiLCAiSG90Q2F0RGVsTmVlZHNEaWZmIiwgImhvdGNhdF9zdWdnZXN0aW9uX2RlbGF5IiwgIkhvdENhdFN1Z2dlc3Rpb25EZWxheSIsICJob3RjYXRfZWRpdGJveF93aWR0aCIsICJIb3RDYXRFZGl0Qm94V2lkdGgiLCAiaG90Y2F0X3N1Z2dlc3Rpb25zIiwgIkhvdENhdFN1Z2dlc3Rpb25zIiwgImhvdGNhdF9zdWdnZXN0aW9uc19maXhlZCIsICJIb3RDYXRGaXhlZFN1Z2dlc3Rpb25zIiwgImhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3IiLCAiSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzIiwgImhvdGNhdF9jaGFuZ2VkX2JhY2tncm91bmQiLCAiSG90Q2F0Q2hhbmdlZEJhY2tncm91bmQiLCAiaG90Y2F0X3VzZV9jYXRlZ29yeV9saW5rcyIsICJIb3RDYXRVc2VDYXRlZ29yeUxpbmtzIiwgImhvdGNhdF9saXN0X3NpemUiLCAiSG90Q2F0TGlzdFNpemUiLCAiSG90Q2F0Q2hhbmdlVGFnIiwgImVGb3JtIiwgImVkaXRmb3JtIiwgImNhdFJlZ0V4cCIsICJvbGRUeHQiLCAiaXNNaW5vckNoYW5nZSIsICJuZXdUeHQiLCAib2xkTGluZXMiLCAibmV3TGluZXMiLCAiY0FyciIsICJleGNlcHQiLCAiYUFyciIsICJiQXJyIiwgImxBcnIiLCAic0FyciIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJpdGVtIiwgImluZCIsICJmaWx0ZXIiLCAiYyIsICJzdW0iLCAic3VtQSIsICIkY3QiLCAicmVtb3ZlQ2hhbmdlVGFnIiwgIk51bWJlciIsICJwYXJzZUludCIsICJpc05hTiIsICJtaW4iLCAiX2k2IiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgInN1Z2dlc3Rpb25Db25maWciLCAiZGVmYXVsdFZpZXciLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJnZXRQcm9wZXJ0eVZhbHVlIiwgImN1cnJlbnRTdHlsZSIsICJkaXJlY3Rpb24iLCAiY2FuX2VkaXQiLCAiY2xvc2VGb3JtIiwgIl9pNyIsICJfZWRpdG9yczYiLCAic2V0dXBfdXBsb2FkIiwgImlwIiwgInJldXBsb2FkIiwgImRlc3RGaWxlIiwgImxhYmVsQ2VsbCIsICJsaW5lQ2VsbCIsICJ0ZXh0QWxpZ24iLCAibWFyZ2luIiwgImJvcmRlciIsICJ2ZXJ0aWNhbEFsaWduIiwgIm5ld1JvdyIsICJpbnNlcnRSb3ciLCAib2xkU3VibWl0IiwgImRvX3N1Ym1pdCIsICJldmFsIiwgIkZ1bmN0aW9uIiwgImViIiwgImFkZGVkT25lIiwgIl9pOCIsICJfZWRpdG9yczciLCAibmV3X2NhdCIsICJfY2xlYW5lZFRleHQiLCAicmVnZXgiLCAib25zdWJtaXQiLCAiY2xlYW5lZFRleHQiLCAiaXNPblBhZ2UiLCAibm9kZVR5cGUiLCAiTm9kZSIsICJFTEVNRU5UX05PREUiLCAiY2F0VGl0bGUiLCAiZ2V0QXR0cmlidXRlIiwgImluaXRpYWxpemVkIiwgInNldHVwVGltZW91dCIsICJmaW5kQnlDbGFzcyIsICJzY29wZSIsICJzZXR1cCIsICJhZGRpdGlvbmFsV29yayIsICJjbGVhclRpbWVvdXQiLCAiaGlkZGVuQ2F0cyIsICJmb290ZXIiLCAiY29udGFpbmVyIiwgImNyZWF0ZUVkaXRvcnMiLCAicXVlcnlTZWxlY3RvckFsbCIsICJjb3B5Q2F0cyIsICJBcnJheSIsICJhdCIsICJsYXN0U3BhbiIsICJlbmFibGVNdWx0aSIsICJpbm5lckhUTUwiLCAiY3Vyc29yIiwgImhvb2siLCAiZmlyZSIsICJjcmVhdGVDb21taXRGb3JtIiwgImZvcm1Db250YWluZXIiLCAid2dQYWdlQ29udGVudE1vZGVsIiwgImdldFBhZ2UiLCAic2V0U3RhdGUiLCAibmV3U3BhbnMiLCAiZ2V0U3RhdGUiLCAiX2k5IiwgIl9lZGl0b3JzOCIsICJyZWFsbHlfcnVuIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIlVwbG9hZEZvcm0iLCAicHJldmlvdXNfaG90Y2F0X3N0YXRlIiwgIndnSXNBcnRpY2xlIiwgInJ1biIsICJzdGFydGVkIiwgImhvdGNhdF9nZXRfc3RhdGUiLCAiaG90Y2F0X3NldF9zdGF0ZSIsICJob3RjYXRfY2xvc2VfZm9ybSIsICJydW5XaGVuUmVhZHkiXQp9Cg==
