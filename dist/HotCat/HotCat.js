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
 * SPDX-License-Identifier: CC-BY-SA-3.0 OR GFDL-1.3-no-invariants-or-later
 *
 * Icons used in HotCat:
 * - P no
 * - P yes
 *
 * @base {@link https://www.qiuwenbaike.cn/wiki/File:P_no.svg}
 * @base {@link https://www.qiuwenbaike.cn/wiki/File:P_yes.svg}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HotCat/images}
 * @license CC-BY-SA-3.0 OR GFDL-1.3-no-invariants-or-later {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-3.0}
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
//! src/HotCat/modules/check.ts
var _templateObject;
var _templateObject2;
var _templateObject3;
var _templateObject4;
var _templateObject5;
var _templateObject6;
var _templateObject7;
var _templateObject8;
var _templateObject9;
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
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/HotCat/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var mwApi = (userAgent) => {
  return (0, import_ext_gadget.initMwApi)(userAgent);
};
//! src/HotCat/modules/check.ts
/*!
 * CheckCategories HotCat Extension –
 * removes the template when categorizing (prompts before) with HotCat and
 * adds a link "Categories are OK" to the category-section
 *
 * @rev 2 (2014-03-20)
 * @author Rillke, 2012
 */
void (0, import_ext_gadget2.getBody)().then(function hotCatCheck($body) {
  if (mw.config.get("wgNamespaceNumber") !== 6 || window.HotCatAutoRemoveCheckCatOptOut || !document.querySelector(".checkcategories")) {
    return;
  }
  const api = mwApi("hotCatCheck/2.0");
  const checkCategoriesRegExp = /{{[Cc]heck[ _]categories[^{}]*}}/g;
  const selfName = "([[MediaWiki:Gadget-HotCat-check.js|Script]]): ";
  const storageItemName = "checkCat";
  const storageItem = mw.storage.get(storageItemName);
  const createjIcon = (iconClass) => {
    return $("<span>").attr("class", "hotcat-check-icon ".concat(iconClass)).text(" ");
  };
  const createNotifyArea = (textNode, icon, state) => {
    return $("<div>").addClass("hotcat-check-notice").append($("<div>").attr("class", "hotcat-check-notice-content ".concat(state)).css({
      "margin-top": "20px",
      padding: "0.7em"
    }).append($("<p>").append(createjIcon(icon).css("marginRight", "0.3em"), textNode)));
  };
  $body.one("submit.checkCatListener", "#hotcatCommitForm", function(e) {
    var _self$wpTextbox1$valu;
    if (storageItem === "disabled") {
      return true;
    }
    const self = this;
    const newVal = (_self$wpTextbox1$valu = self.wpTextbox1.value) === null || _self$wpTextbox1$valu === void 0 ? void 0 : _self$wpTextbox1$valu.replace(checkCategoriesRegExp, "");
    let $dialogCheckStorage;
    let $permaSaveHint;
    let $textHintNode;
    let $dialog;
    let $overlay;
    const doRemove = () => {
      self.wpSummary.value = "Removing [[Template:Check categories|{{Check categories}}]] ".concat(self.wpSummary.value);
      self.wpTextbox1.value = newVal;
    };
    const writeStorage = (val) => {
      mw.storage.set(storageItemName, val, 60 * 60 * 24 * 7);
    };
    const closeDialog = () => {
      var _$overlay;
      $(document).off("keydown.hotcatCheck");
      (_$overlay = $overlay) === null || _$overlay === void 0 || _$overlay.remove();
      $body.find("#hotcatCommitForm").trigger("submit");
    };
    const finishDialog = (storageValue) => {
      var _$dialogCheckStorage$;
      if (storageValue && (_$dialogCheckStorage$ = $dialogCheckStorage[0]) !== null && _$dialogCheckStorage$ !== void 0 && _$dialogCheckStorage$.checked) {
        writeStorage(storageValue);
      }
      closeDialog();
    };
    const _addToJS = function(_e) {
      _e.preventDefault();
      if ($permaSaveHint.hasClass("hotcat-check-disabled")) {
        return;
      }
      const $el = $(this);
      $el.off("click").text("Please wait.");
      $permaSaveHint.addClass("hotcat-check-disabled");
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
          $permaSaveHint.hide();
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
          $permaSaveHint.show();
        } else {
          $permaSaveHint.hide();
        }
      });
      $textHintNode = $("<ul>");
      $("<li>").append($("<a>").attr("href", "#").text("Disable this feature.").data("addText", "\nwindow.HotCatAutoRemoveCheckCatOptOut = true;").on("click", _addToJS)).appendTo($textHintNode);
      $("<li>").append($("<a>").attr("href", "#").text("Remove {{check categories}} when editing using HotCat without prompting.").data("addText", "\nwindow.HotCatAutoRemoveCheckCat = true;").on("click", _addToJS)).appendTo($textHintNode);
      $permaSaveHint = createNotifyArea($("<span>").text("Save these setting in your common.js: ").append($textHintNode), "hotcat-check-icon-info", "hotcat-check-highlight");
      $dialog = $("<div>").append($("<span>").css({
        "font-size": "2em",
        "line-height": "1.8em"
      }).append($("<span>").text(" {{check categories}} ").css({
        "background-color": "#F8CCB0",
        "text-decoration": "line-through !important",
        display: "inline-block"
      }), $("<span>").text(" ?"))).append("<br>", $dialogCheckStorage, $("<label>").attr("for", "hotCatAutoRemoveCheckCatStorage").text("Don't ask again"), "<br>").append(mw.user.isAnon() ? "" : $permaSaveHint.hide());
      $overlay = $("<div>").addClass("hotcat-check-overlay").attr("role", "presentation");
      $dialog = $("<div>").addClass("hotcat-check-dialog").attr({
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "hotcat-check-dialog-title"
      }).prepend($("<h2>").attr("id", "hotcat-check-dialog-title").text("{{check categories}} (−)?")).append($dialog).append($("<div>").addClass("hotcat-check-dialog-buttons").append($("<button>").attr("type", "button").text("Yes, Remove").on("click", () => {
        doRemove();
        finishDialog("auto");
      }), $("<button>").attr("type", "button").text("No, keep it").on("click", () => {
        finishDialog("disabled");
      })));
      $overlay.append($dialog).appendTo("body");
      $dialog.find("button").first().trigger("focus");
      $overlay.on("click", (event) => {
        if (event.target === $overlay[0]) {
          closeDialog();
        }
      });
      $(document).on("keydown.hotcatCheck", (event) => {
        if (event.key === "Escape") {
          $(document).off("keydown.hotcatCheck");
          closeDialog();
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
        $body.find(".checkcategories").hide();
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
  $body.find("#catlinks").find("ul:first").append($("<li>").append($okLink));
});
//! src/HotCat/modules/messages.ts
(function hotCatMessages() {
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
})();
//! src/HotCat/modules/getMessage.ts
var getMessage = (key, ...args) => {
  key = "hotcat-".concat(key);
  return mw.message(key, ...args).plain();
};
//! src/HotCat/modules/categoryText.ts
var createCategoryTextTools = (HC, wikiTextBlank, wikiTextBlankRE, wikiTextBlankOrBidi, escapeRE, getInterlanguageRE) => {
  const findCatsRE = new RegExp("\\[\\[".concat(wikiTextBlankOrBidi, "(?:").concat(HC.category_regexp, ")").concat(wikiTextBlankOrBidi, ":[^\\]]+\\]\\]"), "g");
  const replaceByBlanks = (match) => {
    return match.replace(/(\s|\S)/g, " ");
  };
  const find_category = (wikitext, category, once) => {
    let cat_regex;
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
    const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["(s|S)*?</no"], ["(\\s|\\S)*?</no"]))), "wiki", ">"), "g");
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
  const change_category = (wikitext, toRemove, toAdd, key, is_hidden) => {
    const find_insertionpoint = (_wikitext) => {
      const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["(s|S)*?</no"], ["(\\s|\\S)*?</no"]))), "wiki", ">"), "g");
      const copiedtext = _wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
      let index = -1;
      findCatsRE.lastIndex = 0;
      while (findCatsRE.exec(copiedtext) !== null) {
        index = findCatsRE.lastIndex;
      }
      if (index < 0) {
        let match = null;
        const interlanguageRE = getInterlanguageRE();
        if (interlanguageRE) {
          match = interlanguageRE.exec(copiedtext);
        } else {
          match = /((^|\n\r?)(\[\[\s*(([a-z]{2,3}(-[a-z]+)*)|simple|tokipona)\s*:[^\]]+]]\s*))+$/.exec(copiedtext);
        }
        if (match) {
          index = match.index;
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
    key && (key = "|".concat(key));
    if (toRemove && toRemove.length > 0) {
      matches = find_category(wikitext, toRemove);
      if (!matches || matches.length === 0) {
        return {
          text: wikitext,
          summary,
          error: getMessage("messages-cat_notFound", toRemove)
        };
      }
      const matchesArray = matches;
      const firstMatch = matchesArray[0].match;
      let before = wikitext.slice(0, Math.max(0, firstMatch.index));
      let after = wikitext.slice(Math.max(0, firstMatch.index + firstMatch[0].length));
      if (matchesArray.length > 1) {
        matchesArray.re.lastIndex = 0;
        after = after.replace(matchesArray.re, "");
      }
      if (toAdd && key === null) {
        var _firstMatch$;
        key = (_firstMatch$ = firstMatch[2]) !== null && _firstMatch$ !== void 0 ? _firstMatch$ : null;
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
  return {
    find_category,
    change_category
  };
};
//! src/HotCat/images/P_no.svg
var P_no_default = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="22.5"><defs><linearGradient xlink:href="#a" id="b" x1="92.604" x2="263.83" y1="304.51" y2="26.29" gradientTransform="rotate(-31.61 15.21 6.403)scale(.05544)" gradientUnits="userSpaceOnUse"/><linearGradient id="a"><stop offset="0" stop-color="#a0a3e1"/><stop offset="1" stop-color="#dedcfa"/></linearGradient></defs><path fill="url(#b)" d="M21.471 6.034A8.427 10.534 58.39 1 1 3.528 17.077 8.427 10.534 58.39 1 1 21.471 6.034"/><use xlink:href="#c" width="400" height="360" opacity=".3" transform="translate(1.109 1.109)"/><path id="c" fill="#000" fill-opacity="1" fill-rule="nonzero" stroke="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-opacity="1" stroke-width=".055" d="M7.771 17.276h2.164c.905-2.767 4.427-9.374 7.446-11.688.626-.804-.946-1.136-2.214-.604-1.91.802-7.9 11.135-7.396 12.292M9.073 5.31H6.856c-.196.335 7.045 8.697 9.36 11.716.803.626 1.135-.946.603-2.214-.802-1.91-6.793-7.71-7.746-9.502"/></svg>';
//! src/HotCat/images/P_yes.svg
var P_yes_default = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="22.5"><defs><linearGradient xlink:href="#a" id="b" x1="92.604" x2="263.83" y1="304.51" y2="26.29" gradientTransform="rotate(-31.61 15.21 6.403)scale(.05544)" gradientUnits="userSpaceOnUse"/><linearGradient id="a"><stop offset="0" stop-color="#a0a3e1"/><stop offset="1" stop-color="#dedcfa"/></linearGradient></defs><path fill="url(#b)" d="M21.472 6.034A8.428 10.534 58.391 1 1 3.528 17.077 8.428 10.534 58.391 1 1 21.472 6.034"/><use xlink:href="#c" width="400" height="360" opacity=".3" transform="translate(1.109 1.109)"/><path id="c" fill="#000" fill-opacity="1" fill-rule="evenodd" stroke="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-opacity="1" stroke-width=".055" d="M5.64 13.84s2.515 2.833 3.018 3.99h2.164c.905-2.767 4.427-9.373 7.446-11.688.626-.804-.945-1.136-2.213-.603-1.912.802-5.516 6.928-6.19 8.402-.955.252-1.962-1.61-1.962-1.61Z"/></svg>';
//! src/HotCat/modules/images.ts
var existsNo = "data:image/svg+xml,".concat(encodeURIComponent(P_no_default));
var existsYes = "data:image/svg+xml,".concat(encodeURIComponent(P_yes_default));
//! src/HotCat/modules/configuration.ts
var createHotCatConfig = (conf) => {
  const HC = {
    // U+2212 is a minus sign; U+2193 and U+2191 are arrows.
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
    // HTML content of the multi-mode link.
    addmulti: "<span>+<sup>+</sup></span>",
    // Return true to disable HotCat.
    disable: () => {
      const ns = conf.wgNamespaceNumber;
      const nsIds = conf.wgNamespaceIds;
      return ns < 0 || ns === 10 || ns === 828 || ns === 8 || ns === 6 && !conf.wgArticleId || ns === 2 && /\.(js|css)$/.test(conf.wgTitle) || nsIds && (ns === nsIds["creator"] || ns === nsIds["timedtext"] || ns === nsIds["institution"]) || false;
    },
    // Templates matching this expression mark pages as uncategorized.
    uncat_regexp: /{{\s*[Uu]ncategorized\s*[^}]*}}\s*(<!--.*?-->\s*)?/g,
    // Images used by the category existence indicator.
    existsYes,
    existsNo,
    // Category names mapped to template-name regular expressions.
    template_categories: {},
    // Set from siteinfo unless explicitly configured.
    capitalizePageNames: null,
    upload_disabled: false,
    blacklist: null,
    // Background for changed categories in multi-edit mode.
    bg_changed: "#FCA",
    // When enabled, changes open an edit page instead of being submitted automatically.
    no_autocommit: false,
    del_needs_diff: false,
    // Delay before requesting suggestions after input.
    suggest_delay: 1e3,
    editbox_width: 40,
    suggestions: "combined",
    fixed_search: false,
    use_up_down: true,
    listSize: 10,
    single_minor: true,
    dont_add_to_watchlist: false,
    shortcuts: null,
    addShortcuts: (map) => {
      if (!map) {
        return;
      }
      HC.shortcuts || (HC.shortcuts = {});
      for (let k in map) {
        if (!Object.hasOwn(map, k)) {
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
        HC.shortcuts[k] = v;
      }
    },
    // Filled in from localized MediaWiki namespaces.
    category_canonical: "",
    category_regexp: "",
    template_regexp: ""
  };
  return HC;
};
//! src/HotCat/modules/utilities.ts
var createHotCatUtilities = (conf, HC) => {
  var _conf$wgFormattedName2;
  const wikiTextBlank = String.raw(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["[	 _  ᠎ - \u2028\u2029  　]+"], ["[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+"])));
  const wikiTextBlankRE = new RegExp(wikiTextBlank, "g");
  const wikiTextBlankOrBidi = String.raw(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["[	 _  ᠎ -​‎‏\u2028-  　]*"], ["[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200B\\u200E\\u200F\\u2028-\\u202F\\u205F\\u3000]*"])));
  const autoLocalize = (namespaceNumber, fallback) => {
    var _conf$wgFormattedName;
    const createRegexpStr = (name) => {
      if (!name || name.length === 0) {
        return "";
      }
      let regex_name = "";
      for (let i = 0; i < name.length; i++) {
        const initial = name.charAt(i);
        const ll = initial.toLowerCase();
        const ul = initial.toUpperCase();
        regex_name += ll === ul ? initial : "[".concat(ll).concat(ul, "]");
      }
      return regex_name.replace(/([$()*+.?\\^])/g, String.raw(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["$1"], ["\\$1"])))).replace(wikiTextBlankRE, wikiTextBlank);
    };
    fallback = fallback.toLowerCase();
    const canonical = ((_conf$wgFormattedName = conf.wgFormattedNamespaces[String(namespaceNumber)]) !== null && _conf$wgFormattedName !== void 0 ? _conf$wgFormattedName : "").toLowerCase();
    let regexp = createRegexpStr(canonical);
    if (fallback && canonical !== fallback) {
      regexp += "|".concat(createRegexpStr(fallback));
    }
    for (const cat_name in conf.wgNamespaceIds) {
      if (typeof cat_name === "string" && cat_name.toLowerCase() !== canonical && cat_name.toLowerCase() !== fallback && conf.wgNamespaceIds[cat_name] === namespaceNumber) {
        regexp += "|".concat(createRegexpStr(cat_name));
      }
    }
    return regexp;
  };
  HC.category_canonical = (_conf$wgFormattedName2 = conf.wgFormattedNamespaces["14"]) !== null && _conf$wgFormattedName2 !== void 0 ? _conf$wgFormattedName2 : "";
  HC.category_regexp = autoLocalize(14, "category");
  if (conf.wgFormattedNamespaces["10"]) {
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
  const setStyleProperty = (element, property, value) => {
    element.style[property] = value;
  };
  const capitalize = (str) => {
    if (!str || str.length === 0) {
      return "";
    }
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };
  const wikiPagePath = (pageName) => {
    return conf.wgArticlePath.replace("$1", encodeURIComponent(pageName).replace(/%3A/g, ":").replace(/%2F/g, "/"));
  };
  const escapeRE = (str) => {
    return str.replace(/([$()*+.?[\\\]^])/g, String.raw(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["$1"], ["\\$1"]))));
  };
  const substituteFactory = (options) => {
    options || (options = {});
    const lead = options.indicator || "$";
    const indicator = escapeRE(lead);
    const lbrace = escapeRE(options.lbrace || "{");
    const rbrace = escapeRE(options.rbrace || "}");
    const re = new RegExp(
      // $$, $0/$1, ${key}, and $key
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
      const s = replaceHash(str, map !== null && map !== void 0 ? map : void 0);
      return HC.capitalizePageNames ? capitalize(s) : s;
    };
  })();
  return {
    wikiTextBlank,
    wikiTextBlankRE,
    wikiTextBlankOrBidi,
    make,
    param,
    title,
    hasClass,
    setStyleProperty,
    capitalize,
    wikiPagePath,
    escapeRE,
    replaceShortcuts
  };
};
//! src/HotCat/modules/suggestions.ts
var createSuggestionData = (HC) => {
  let catPrefix = null;
  const toCategoryTitles = (members) => {
    return members.map((member) => {
      return member.title.slice(Math.max(0, member.title.indexOf(":") + 1));
    });
  };
  const suggestionEngines = {
    opensearch: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=opensearch&namespace=14&limit=30&search=Category:$1"),
      // $1 = search term
      // Function to convert result of uri into an array of category names
      handler: (queryResult, queryKey) => {
        const result = queryResult;
        if (result && result.length >= 2) {
          const key = String(result[0]).slice(Math.max(0, String(result[0]).indexOf(":") + 1));
          const titles = result[1];
          let exists = false;
          catPrefix || (catPrefix = new RegExp("^(".concat(HC.category_regexp, "):")));
          for (let i = 0; i < titles.length; i++) {
            catPrefix.lastIndex = 0;
            const match = catPrefix.exec(titles[i]);
            if (match && match.length > 1) {
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
        var _queryResult$query;
        const allpages = queryResult === null || queryResult === void 0 || (_queryResult$query = queryResult.query) === null || _queryResult$query === void 0 ? void 0 : _queryResult$query.allpages;
        return allpages ? toCategoryTitles(allpages) : null;
      }
    },
    exists: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&prop=info&titles=Category:$1"),
      handler: (queryResult, queryKey) => {
        var _queryResult$query2;
        const {
          pages
        } = (_queryResult$query2 = queryResult === null || queryResult === void 0 ? void 0 : queryResult.query) !== null && _queryResult$query2 !== void 0 ? _queryResult$query2 : {};
        if (!pages || pages["-1"]) {
          return null;
        }
        for (const p in pages) {
          if (!Object.hasOwn(pages, p)) {
            continue;
          }
          let title = pages[p].title;
          title = title.slice(Math.max(0, title.indexOf(":") + 1));
          const titles = [title];
          titles.exists = true;
          if (queryKey !== title) {
            titles.normalized = title;
          }
          return titles;
        }
        return null;
      }
    },
    subcategories: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&list=categorymembers&cmtype=subcat&cmlimit=max&cmtitle=Category:$1"),
      handler: (queryResult) => {
        var _queryResult$query3;
        const categorymembers = queryResult === null || queryResult === void 0 || (_queryResult$query3 = queryResult.query) === null || _queryResult$query3 === void 0 ? void 0 : _queryResult$query3.categorymembers;
        return categorymembers ? toCategoryTitles(categorymembers) : null;
      }
    },
    parentcategories: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&prop=categories&titles=Category:$1&cllimit=max"),
      handler: (queryResult) => {
        var _queryResult$query4;
        const {
          pages
        } = (_queryResult$query4 = queryResult === null || queryResult === void 0 ? void 0 : queryResult.query) !== null && _queryResult$query4 !== void 0 ? _queryResult$query4 : {};
        if (!pages) {
          return null;
        }
        for (const p in pages) {
          if (!Object.hasOwn(pages, p)) {
            continue;
          }
          const {
            categories
          } = pages[p];
          if (categories) {
            return toCategoryTitles(categories);
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
  return {
    suggestionEngines,
    suggestionConfigs
  };
};
//! src/HotCat/HotCat.ts
var import_ext_gadget3 = require("ext.gadget.Util");
/*!
 * @description Ajax-based simple Category manager. Allows adding/removing/changing categories on a page view.
 * Supports multiple category changes, as well as redirect and disambiguation resolution. Also
 * plugs into the upload form. Search engines to use for the suggestion list are configurable, and
 * can be selected interactively.
 *
 * @see {@link https://commons.wikimedia.org/wiki/Help:Gadget-HotCat}
 * @author authors <https://commons.wikimedia.org/wiki/Help:Gadget-HotCat/Version_history>
 */
void (0, import_ext_gadget3.getBody)().then(function hotCat($body) {
  const conf = mw.config["values"];
  if (window.HotCat && !window.HotCat.nodeName || conf.wgAction === "edit") {
    return;
  }
  const api = mwApi("HotCat/3.0");
  const HC = createHotCatConfig(conf);
  window.HotCat = HC;
  const ua = navigator.userAgent.toLowerCase();
  const is_webkit = /applewebkit\/\d+/.test(ua) && !ua.includes("spoofer");
  let noSuggestions = false;
  const {
    wikiTextBlank,
    wikiTextBlankRE,
    wikiTextBlankOrBidi,
    make,
    param,
    title,
    hasClass,
    setStyleProperty,
    capitalize,
    wikiPagePath,
    escapeRE,
    replaceShortcuts
  } = createHotCatUtilities(conf, HC);
  let interlanguageRE = null;
  const {
    find_category,
    change_category
  } = createCategoryTextTools(HC, wikiTextBlank, wikiTextBlankRE, wikiTextBlankOrBidi, escapeRE, () => interlanguageRE);
  const evtKeys = (event) => {
    const {
      ctrlKey,
      metaKey,
      shiftKey
    } = event !== null && event !== void 0 ? event : {};
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
  const evtKill = (event) => {
    if (event !== null && event !== void 0 && event.preventDefault) {
      var _event$stopPropagatio;
      event.preventDefault();
      (_event$stopPropagatio = event.stopPropagation) === null || _event$stopPropagatio === void 0 || _event$stopPropagatio.call(event);
    } else if (event) {
      event.cancelBubble = true;
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
      var _data$query$userinfo;
      if (data.query.pages) {
        const [page] = data.query.pages;
        if (page) {
          if (page.revisions && page.revisions.length > 0) {
            const [latestRevision, conflictingRevision] = page.revisions;
            pageText = latestRevision.slots.main.content;
            if (latestRevision.timestamp) {
              pageTime = latestRevision.timestamp.replace(/\D/g, "");
            }
            if (latestRevision.revid) {
              pageTextRevId = latestRevision.revid;
            }
            if (page.revisions.length > 1 && conflictingRevision) {
              var _conflictingRevision$;
              conflictingUser = (_conflictingRevision$ = conflictingRevision.user) !== null && _conflictingRevision$ !== void 0 ? _conflictingRevision$ : null;
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
            var _iterator = _createForOfIteratorHelper(page.langlinks), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                const langlink = _step.value;
                re += (re.length > 0 ? "|" : "") + langlink.lang.replace(/([$()*+.?\\^])/g, String.raw(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["$1"], ["\\$1"]))));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
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
      const {
        options
      } = (_data$query$userinfo = data.query.userinfo) !== null && _data$query$userinfo !== void 0 ? _data$query$userinfo : {};
      if (options) {
        watchCreate = !HC.dont_add_to_watchlist && options.watchcreations === "1";
        watchEdit = !HC.dont_add_to_watchlist && options.watchdefault === "1";
        minorEdits = options.minordefault === 1;
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
    const fail = (message) => {
      saveInProgress = false;
      if (commitButton) {
        commitButton.disabled = oldButtonState !== null && oldButtonState !== void 0 ? oldButtonState : false;
      }
      failure(message);
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
    }).fail((error) => {
      const {
        status,
        statusText
      } = error !== null && error !== void 0 ? error : {};
      fail("".concat(status !== null && status !== void 0 ? status : "", " ").concat(statusText !== null && statusText !== void 0 ? statusText : ""));
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
    const selfEditConflict = !!((lastRevId !== null && lastRevId !== conf.wgCurRevisionId || pageTextRevId !== null && pageTextRevId !== conf.wgCurRevisionId) && conflictingUser && conflictingUser === conf.wgUserName);
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
      text: pageText,
      summary: [],
      error: null
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
    if (!conf.wgArticleId && changes > 0 && error === null) {
      result.text = "{{Catnav|auto=1}}\n\n".concat(result.text);
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
        const summary = [];
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
          const change = changed[i];
          if (change.from === change.to) {
            summary[summary.length] = "±".concat(getMessage("messages-short_catchange", change.from));
          } else {
            summary[summary.length] = "±".concat(getMessage("messages-short_catchange", change.from)).concat(arrow).concat(getMessage("messages-short_catchange", change.to));
          }
        }
        if (changed.length === 1) {
          const change = changed[0];
          if (change.from === change.to) {
            shortSummary[shortSummary.length] = "±".concat(getMessage("messages-short_catchange", change.from));
          } else {
            shortSummary[shortSummary.length] = "±".concat(getMessage("messages-short_catchange", change.from)).concat(arrow).concat(getMessage("messages-short_catchange", change.to));
          }
        } else if (changed.length > 0) {
          shortSummary[shortSummary.length] = "± ".concat(multiChangeMsg(changed.length));
        }
        if (summary.length > 0) {
          const joinedSummary = summary.join(getMessage("messages-separator"));
          const finalSummary = joinedSummary.length > 200 - (HC.changeTag ? "" : getMessage("messages-prefix")).length - (HC.changeTag ? "" : getMessage("messages-using")).length ? shortSummary.join(getMessage("messages-separator")) : joinedSummary;
          commitForm.wpSummary.value = (HC.changeTag ? "" : getMessage("messages-prefix")) + finalSummary + (HC.changeTag ? "" : getMessage("messages-using"));
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
    const pageTitle = page.title.slice(Math.max(0, page.title.indexOf(":") + 1));
    for (i = 0; i < toResolve.length; i++) {
      const editor = toResolve[i];
      if (i && editor.dabInputCleaned !== pageTitle) {
        continue;
      }
      editor.currentHidden = is_hidden;
      editor.inputExists = !is_missing;
      editor.icon.src = is_missing ? HC.existsNo : HC.existsYes;
    }
    if (is_missing) {
      return;
    }
    if (!is_redir && cats && (getMessage("disambig_category") || getMessage("redir_category"))) {
      var _iterator2 = _createForOfIteratorHelper(cats), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const cat_ = _step2.value;
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
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    if (!is_redir && !is_dab) {
      return;
    }
    if (!links || links.length === 0) {
      return;
    }
    const titles = [];
    var _iterator3 = _createForOfIteratorHelper(links), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const link = _step3.value;
        if (
          // Category namespace -- always true since we ask only for the category links
          link.ns === 14 && // Name not empty
          link.title && link.title.length > 0
        ) {
          const match = link.title.slice(Math.max(0, link.title.indexOf(":") + 1));
          if (!HC.blacklist || !HC.blacklist.test(match)) {
            titles[titles.length] = match;
          }
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (titles.length === 0) {
      return;
    }
    for (i = 0; i < toResolve.length; i++) {
      const editor = toResolve[i];
      if (i && editor.dabInputCleaned !== pageTitle) {
        continue;
      }
      editor.inputExists = true;
      editor.icon.src = HC.existsYes;
      if (titles.length > 1) {
        editor.dab = titles;
      } else {
        editor.text.value = titles[0] + (editor.currentKey === null ? "" : "|".concat(editor.currentKey));
      }
    }
  };
  const resolveRedirects = (toResolve, params) => {
    if (!params || !params.query || !params.query.pages) {
      return;
    }
    const {
      pages
    } = params.query;
    for (const p in pages) {
      if (!Object.hasOwn(pages, p)) {
        continue;
      }
      resolveOne(pages[p], toResolve);
    }
  };
  const resolveMulti = (toResolve, callback) => {
    let i;
    for (i = 0; i < toResolve.length; i++) {
      const editor = toResolve[i];
      editor.dab = null;
      editor.dabInput = editor.lastInput;
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
      pllimit: String(toResolve.length * 10),
      cllimit: String(toResolve.length * 10)
    };
    const titles = [];
    for (i = 0; i < toResolve.length; i++) {
      const editor = toResolve[i];
      const v = replaceShortcuts(editor.dabInput, HC.shortcuts);
      editor.dabInputCleaned = v;
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
          which.currentKey = v[1];
        }
        which.lastSelection && (which.lastSelection = {
          start: v[0].length,
          end: v[0].length
        });
      }
      if (which.showsList) {
        which.displayList();
      }
      if (which.lastSelection) {
        const {
          lastSelection
        } = which;
        setTimeout(() => {
          which.setSelection(lastSelection.start, lastSelection.end);
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
      var _iterator4 = _createForOfIteratorHelper(resolved), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          const element = _step4.value;
          if (element.lastInput === element.dabInput) {
            if (element.dab) {
              firstDab || (firstDab = element);
            } else if (element.acceptCheck(true)) {
              element.commit();
            }
          } else {
            dontChange = true;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
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
      multiSpan.replaceWith(commitButton);
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
  const {
    suggestionEngines,
    suggestionConfigs
  } = createSuggestionData(HC);
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
    isCompositionStart = false;
    isAddCategory = false;
    catLink = null;
    originalCategory = "";
    originalKey = null;
    originalExists = false;
    originalHidden;
    originalState = UNCHANGED;
    linkSpan;
    normalLinks = null;
    undelLink = null;
    upDownLinks;
    undoLink = null;
    line = null;
    span;
    engine = "";
    engineName = null;
    engineSelector;
    form;
    text;
    icon;
    list = null;
    ok;
    cancelButton;
    currentCategory = "";
    currentExists = false;
    currentHidden;
    currentKey = null;
    state = UNCHANGED;
    lastSavedState = UNCHANGED;
    lastSavedCategory = "";
    lastSavedKey = null;
    lastSavedExists = false;
    lastSavedHidden;
    lastInput = "";
    lastRealInput = "";
    lastSelection;
    lastQuery = null;
    showsList = false;
    inputExists = false;
    ime = false;
    usesComposition = false;
    lastKey = 0;
    keyCount = 0;
    dab = null;
    dabInput;
    dabInputCleaned;
    callbackObj = null;
    is_active = false;
    noCommit = false;
    constructor(line, span, after, key, is_hidden) {
      this.initialize(line, span, after, key, is_hidden);
    }
    initialize(line, span, after, key, is_hidden) {
      if (span) {
        if (is_rtl) {
          span.dir = "rtl";
        }
        this.isAddCategory = false;
        this.catLink = span.firstChild;
        this.originalCategory = after;
        this.originalKey = typeof key === "string" && key.length > 1 ? key.slice(1) : null;
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
        let afterElement = after;
        if (!newDOM) {
          const addSpan = make("span");
          addSpan.className = "noprint";
          if (key) {
            addSpan.append(make(" | ", true));
            if (afterElement) {
              afterElement.parentNode.insertBefore(addSpan, afterElement.nextSibling);
              afterElement = afterElement.nextSibling;
            } else if (line) {
              line.append(addSpan);
            }
          } else if (line && line.firstChild) {
            addSpan.append(make(" ", true));
            line.append(addSpan);
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
        const outerSpan = make(newDOM ? "li" : "span");
        outerSpan.className = "noprint";
        if (is_rtl) {
          outerSpan.dir = "rtl";
        }
        outerSpan.append(this.linkSpan);
        if (afterElement) {
          afterElement.parentNode.insertBefore(outerSpan, afterElement.nextSibling);
        } else if (line) {
          line.append(outerSpan);
        }
        span = outerSpan;
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
            if (self.isCompositionStart) {
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
          } else if (self.ime && key !== IME && !(Number(key) >= 16 && Number(key) <= 20 || Number(key) >= 91 && Number(key) <= 93 || key === 144)) {
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
        text.addEventListener("focus", () => {
          makeActive(self);
        });
        $(text).on("blur", this.saveView.bind(this));
        try {
          $(text).on("compositionstart", () => {
            self.lastKey = IME;
            self.usesComposition = true;
            self.ime = true;
            self.isCompositionStart = true;
          });
          $(text).on("compositionend", () => {
            self.lastKey = IME;
            self.usesComposition = true;
            self.ime = false;
            self.isCompositionStart = false;
          });
          $(text).on("textInput", () => {
            self.ime = false;
            if (self.isCompositionStart) {
              return;
            }
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
          const key = event.key || 0;
          if (key === ESC) {
            self.resetKeySelection();
            self.text.focus();
            setTimeout(() => {
              self.textchange(true);
            }, HC.suggest_delay);
          } else if (key === RET) {
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
      const OK = make("input");
      OK.type = "button";
      OK.value = getMessage("messages-ok");
      OK.addEventListener("click", this.accept.bind(this));
      this.ok = OK;
      const cancel = make("input");
      cancel.type = "button";
      cancel.value = getMessage("messages-cancel");
      cancel.addEventListener("click", this.cancel.bind(this));
      this.cancelButton = cancel;
      const span = make("span");
      span.className = "hotcatinput";
      span.style.position = "relative";
      span.append(text);
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
      this.engine = engine !== null && engine !== void 0 ? engine : "";
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
        key = value[1];
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
        resolveMulti(toResolve, (resolved) => {
          const editor = resolved[0];
          if (editor.dab) {
            showDab(editor);
          } else if (editor.acceptCheck(true)) {
            editor.commit();
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
        this.noCommit = !!noCommit || HC.del_needs_diff;
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
          const suggestionConfig = suggestionConfigs[cb.engineName];
          if (!cb.dontCache && !suggestionConfig.cache[z]) {
            suggestionConfig.cache[z] = cb.allTitles;
          }
          self.text.readOnly = false;
          if (!cb.cancelled) {
            self.showSuggestions(cb.allTitles, cb.noCompletion, v, cb.engineName);
          }
          if (cb === self.callbackObj) {
            self.callbackObj = null;
          }
          cb = null;
        }
      };
      $.getJSON(url, (json) => {
        const titles = e.handler(json, z);
        if (titles && titles.length > 0) {
          cb.allTitles = cb.allTitles === null ? titles : [...cb.allTitles].concat(titles);
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
    textchange(dont_autocomplete, force) {
      makeActive(this);
      if (this.isCompositionStart) {
        return;
      }
      this.sanitizeInput();
      let v = this.text.value;
      const pipe = v.indexOf("|");
      if (pipe === -1) {
        this.currentKey = null;
      } else {
        this.currentKey = v.slice(Math.max(0, pipe + 1));
        v = v.slice(0, Math.max(0, pipe));
      }
      if (this.lastInput === v && !force) {
        return;
      }
      if (this.lastInput !== v) {
        checkMultiInput();
      }
      this.lastInput = v;
      this.lastRealInput = v;
      this.ok.disabled = v.length > 0 && !!HC.blacklist && HC.blacklist.test(v);
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
      const cachedTitles = suggestionConfigs[engineName].cache[cleanKey];
      if (cachedTitles) {
        this.showSuggestions(cachedTitles, dont_autocomplete, v, engineName);
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
      var _iterator5 = _createForOfIteratorHelper(engines), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          const engine_ = _step5.value;
          const engine = suggestionEngines[engine_];
          const url = conf.wgScriptPath + engine.uri.replace(/\$1/g, encodeURIComponent(cleanKey));
          this.makeCall(url, cb, engine, v, cleanKey);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
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
      this.engineName = engineName !== null && engineName !== void 0 ? engineName : null;
      if (engineName) {
        if (!this.engineSelector) {
          this.engineName = null;
        }
      } else if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      const inputValue = this.lastInput;
      if (queryKey) {
        if (inputValue.indexOf(queryKey)) {
          return;
        }
        if (this.lastQuery && inputValue.indexOf(this.lastQuery) === 0 && this.lastQuery.length > queryKey.length) {
          return;
        }
      }
      this.lastQuery = queryKey;
      const v = this.text.value.split("|");
      const key = v.length > 1 ? "|".concat(v[1]) : "";
      const categoryName = HC.capitalizePageNames ? capitalize(v[0]) : v[0];
      let vNormalized = categoryName;
      const knownToExist = titles && titles.exists;
      let i;
      if (titles) {
        if (titles.normalized && categoryName.indexOf(queryKey !== null && queryKey !== void 0 ? queryKey : "") === 0) {
          vNormalized = titles.normalized + categoryName.slice((queryKey !== null && queryKey !== void 0 ? queryKey : "").length);
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
      const completed = this.autoComplete(firstTitle, categoryName, vNormalized, key, dontAutocomplete);
      const existing = completed || knownToExist || firstTitle === replaceShortcuts(categoryName, HC.shortcuts);
      if (engineName && suggestionConfigs[engineName] && !suggestionConfigs[engineName].temp) {
        this.icon.src = existing ? HC.existsYes : HC.existsNo;
        this.inputExists = !!existing;
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
      let nofItems = Math.min(this.list.options.length, HC.listSize);
      if (nofItems <= 1) {
        nofItems = 2;
      }
      this.list.size = nofItems;
      setStyleProperty(this.list, "align", is_rtl ? "right" : "left");
      this.list.style.zIndex = "5";
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
        const s = "client".concat(what);
        return document.documentElement ? document.documentElement[s] : 0;
      };
      const scroll_offset = (what) => {
        const s = "scroll".concat(what);
        let result = document.documentElement ? document.documentElement[s] : 0;
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
        const box = node.getBoundingClientRect();
        return {
          x: Math.round(box.left + scroll_offset("Left")),
          y: Math.round(box.top + scroll_offset("Top"))
        };
      };
      const textPos = position(this.text);
      const nl = 0;
      let nt = 0;
      let offset = 0;
      const textBoxWidth = this.text.offsetWidth || this.text.clientWidth;
      if (this.engineName) {
        this.engineSelector.style.zIndex = "5";
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
      return !!this.text.setSelectionRange || this.text.selectionStart !== null;
    }
    setSelection(from, to) {
      if (!this.text.value) {
        return;
      }
      this.text.setSelectionRange(from, to);
    }
    getSelection() {
      let from = 0;
      let to = 0;
      if (!this.text.value) {
      } else if (this.text.selectionStart !== null) {
        var _this$text$selectionE;
        from = this.text.selectionStart;
        to = (_this$text$selectionE = this.text.selectionEnd) !== null && _this$text$selectionE !== void 0 ? _this$text$selectionE : to;
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
        tgt = Math.max(tgt, 0);
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
        const optionText = this.list.options[tgt].text;
        const completed = this.autoComplete(optionText, this.lastRealInput, null, key, false);
        if (!completed || optionText === this.lastRealInput) {
          this.text.value = optionText + key;
          if (this.canSelect()) {
            this.setSelection(optionText.length, optionText.length);
          }
        }
        this.lastInput = optionText;
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
      let oldTxt = "";
      const isMinorChange = () => {
        var _oldTxt$match, _newTxt$match;
        const textbox = eForm === null || eForm === void 0 ? void 0 : eForm.wpTextbox1;
        if (!textbox) {
          return;
        }
        const newTxt = textbox.value;
        const oldLines = (_oldTxt$match = oldTxt.match(/^.*$/gm)) !== null && _oldTxt$match !== void 0 ? _oldTxt$match : [];
        const newLines = (_newTxt$match = newTxt.match(/^.*$/gm)) !== null && _newTxt$match !== void 0 ? _newTxt$match : [];
        const except = (aArr, bArr) => {
          const result = [];
          let lArr;
          let sArr;
          if (aArr.length < bArr.length) {
            lArr = bArr;
            sArr = [...aArr];
          } else {
            lArr = aArr;
            sArr = [...bArr];
          }
          var _iterator6 = _createForOfIteratorHelper(lArr), _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
              const item = _step6.value;
              const ind = sArr.indexOf(item);
              if (ind === -1) {
                result[result.length] = item;
              } else {
                sArr.splice(ind, 1);
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          return [...result, ...sArr];
        };
        let cArr = except(oldLines, newLines);
        if (cArr.length > 0) {
          cArr = cArr.filter((c) => {
            const trimmed = c.trim();
            return !!trimmed && !catRegExp.test(trimmed);
          });
        }
        if (cArr.length === 0) {
          oldTxt = newTxt;
          return true;
        }
        return void 0;
      };
      if (conf.wgAction === "submit" && conf.wgArticleId && eForm && eForm.wpSummary && document.querySelector("#wikiDiff")) {
        const sum = eForm.wpSummary;
        const sumA = eForm.wpAutoSummary;
        if (sum.value && sumA && sumA.value === HC.changeTag) {
          var _eForm$wpTextbox1$val, _eForm$wpTextbox;
          sumA.value = sumA.value.replace(HC.changeTag, "d41d8cd98f00b204e9800998ecf8427e");
          const $ct = $("<input>").attr({
            type: "hidden",
            name: "wpChangeTags"
          }).val(HC.changeTag);
          $(eForm).append($ct);
          oldTxt = (_eForm$wpTextbox1$val = (_eForm$wpTextbox = eForm.wpTextbox1) === null || _eForm$wpTextbox === void 0 ? void 0 : _eForm$wpTextbox.value) !== null && _eForm$wpTextbox1$val !== void 0 ? _eForm$wpTextbox1$val : "";
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
    HC.listSize = Number.parseInt(String(HC.listSize), 10);
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
    const body = document.querySelector("body");
    is_rtl = hasClass(body, "rtl");
    if (!is_rtl) {
      const direction = document.defaultView ? (
        // Gecko etc.
        document.defaultView.getComputedStyle(body, null).getPropertyValue("direction")
      ) : (
        // Not exactly right, but best effort
        document.dir
      );
      is_rtl = direction === "rtl";
    }
  };
  const can_edit = () => {
    return document.querySelector("#ca-edit") !== null;
  };
  const closeForm = () => {
    for (var _i7 = 0, _editors6 = editors; _i7 < _editors6.length; _i7++) {
      const edit = _editors6[_i7];
      if (edit.state === OPEN) {
        edit.cancel();
      } else if (edit.state === CHANGE_PENDING) {
        edit.sanitizeInput();
        const value = edit.text.value.split("|");
        let key = null;
        if (value.length > 1) {
          key = value[1];
        }
        const v = value[0].replace(/_/g, " ").trim();
        if (v.length === 0) {
          edit.cancel();
        } else {
          edit.currentCategory = v;
          edit.currentKey = key;
          edit.currentExists = edit.inputExists;
          edit.close();
        }
      }
    }
  };
  const setup_upload = () => {
    var _document$querySelect, _document$querySelect2;
    onUpload = true;
    let ip = (_document$querySelect = document.querySelector("#mw-htmlform-description")) !== null && _document$querySelect !== void 0 ? _document$querySelect : document.querySelector("input[name=wpDestFile]");
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
    const form = (_document$querySelect2 = document.querySelector("#upload")) !== null && _document$querySelect2 !== void 0 ? _document$querySelect2 : document.querySelector("#mw-upload-form");
    if (form) {
      const newRow = ip.insertRow(-1);
      newRow.append(labelCell);
      newRow.append(lineCell);
      form.addEventListener("submit", () => {
        var _document$querySelect3;
        closeForm();
        const eb = (_document$querySelect3 = document.querySelector("textarea[name=wpUploadDescription]")) !== null && _document$querySelect3 !== void 0 ? _document$querySelect3 : document.querySelector("#wpDesc");
        if (!eb) {
          return true;
        }
        let addedOne = false;
        for (var _i8 = 0, _editors7 = editors; _i8 < _editors7.length; _i8++) {
          const editor = _editors7[_i8];
          const t = editor.currentCategory;
          if (!t) {
            continue;
          }
          const key = editor.currentKey;
          const new_cat = "[[".concat(HC.category_canonical, ":").concat(t).concat(key ? "|".concat(key) : "", "]]");
          const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["(s|S)*?</no"], ["(\\s|\\S)*?</no"]))), "wiki", ">"), "g");
          let _cleanedText = eb.value;
          let previousCleanedText;
          do {
            previousCleanedText = _cleanedText;
            _cleanedText = _cleanedText.replace(/<!--/g, "").replace(/--!?>/g, "").replace(nowikiRegex, "");
          } while (_cleanedText !== previousCleanedText);
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
      });
    }
  };
  let cleanedText = null;
  const isOnPage = (element) => {
    const {
      firstChild
    } = element;
    if (!firstChild || firstChild.nodeType !== Node.ELEMENT_NODE) {
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
      const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["(s|S)*?</no"], ["(\\s|\\S)*?</no"]))), "wiki", ">"), "g");
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
      var _hiddenCats$parentNod;
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
      let container = (_hiddenCats$parentNod = hiddenCats === null || hiddenCats === void 0 ? void 0 : hiddenCats.parentNode) !== null && _hiddenCats$parentNod !== void 0 ? _hiddenCats$parentNod : document.querySelector("#catlinks");
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
      let cats = line.querySelectorAll("li");
      if (cats.length > 0) {
        newDOM = true;
        line = cats[0].parentNode;
      } else {
        cats = line.querySelectorAll("span");
      }
      const copyCats = Array.from(cats);
      for (var _i9 = 0, _copyCats = copyCats; _i9 < _copyCats.length; _i9++) {
        const cat = _copyCats[_i9];
        const test = isOnPage(cat);
        if (test !== null && test.match !== null && line) {
          new CategoryEditor(line, cat, test.title, test.match[2], is_hidden);
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
    $body.trigger("hotcatSetupCompleted");
  };
  const createCommitForm = () => {
    if (commitForm) {
      return;
    }
    const formContainer = make("div");
    formContainer.style.display = "none";
    document.querySelector("body").append(formContainer);
    formContainer.innerHTML = '<form id="hotcatCommitForm" method="post" enctype="multipart/form-data" action="'.concat(conf.wgScript, "?title=").concat(encodeURIComponent(conf.wgPageName), '&action=submit">\n		<input type="hidden" name="wpTextbox1">\n		<input type="hidden" name="model" value="').concat(conf.wgPageContentModel, '">\n		<input type="hidden" name="format" value="text/x-wiki">\n		<input type="hidden" name="wpSummary" value="">\n		<input type="checkbox" name="wpMinoredit" title="wpMinoredit" value="1">\n		<input type="checkbox" name="wpWatchthis" title="wpWatchthis" value="1">\n		<input type="hidden" name="wpAutoSummary" value="d41d8cd98f00b204e9800998ecf8427e">\n		<input type="hidden" name="wpEdittime">\n		<input type="hidden" name="wpStarttime">\n		<input type="hidden" name="wpDiff" value="wpDiff">\n		<input type="hidden" name="oldid" value="0">\n		<input type="submit" name="hcCommit" value="hcCommit">\n		<input type="hidden" name="wpEditToken">\n		<input type="hidden" name="wpUltimateParam" value="1">\n		<input type="hidden" name="wpChangeTags">\n		<input type="hidden" value="ℳ𝒲♥𝓊𝓃𝒾𝒸ℴ𝒹ℯ" name="wpUnicodeCheck">\n		</form>');
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
      void api.get(params).then((data) => {
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
        const cat = cats[i].split("|");
        const key = cat.length > 1 ? cat[1] : null;
        const catName = cat[0];
        const link = make("a");
        link.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(catName));
        link.append(make(catName, true));
        link.title = catName;
        const span = make("span");
        span.append(link);
        if (!i) {
          catLine.insertBefore(make(" ", true), before);
        }
        before.before(span);
        if (before && i + 1 < cats.length) {
          before.parentNode.insertBefore(make(" | ", true), before);
        }
        newSpans[newSpans.length] = {
          element: span,
          title: catName,
          key
        };
      }
      if (before) {
        before.parentNode.insertBefore(make(" | ", true), before);
      }
      for (var _i0 = 0, _newSpans = newSpans; _i0 < _newSpans.length; _i0++) {
        const newSpan = _newSpans[_i0];
        new CategoryEditor(catLine, newSpan.element, newSpan.title, newSpan.key);
      }
    }
    return null;
  };
  const getState = () => {
    let result = null;
    for (var _i1 = 0, _editors8 = editors; _i1 < _editors8.length; _i1++) {
      const editor = _editors8[_i1];
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
        if (window.UploadForm && window.UploadForm.previous_hotcat_state) {
          window.UploadForm.previous_hotcat_state = setState(window.UploadForm.previous_hotcat_state);
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
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hvdENhdC9tb2R1bGVzL2NoZWNrLnRzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9hcGkudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9nZXRNZXNzYWdlLnRzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9jYXRlZ29yeVRleHQudHMiLCAic3JjL0hvdENhdC9pbWFnZXMvUF9uby5zdmciLCAic3JjL0hvdENhdC9pbWFnZXMvUF95ZXMuc3ZnIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9pbWFnZXMudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL2NvbmZpZ3VyYXRpb24udHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL3V0aWxpdGllcy50cyIsICJzcmMvSG90Q2F0L21vZHVsZXMvc3VnZ2VzdGlvbnMudHMiLCAic3JjL0hvdENhdC9Ib3RDYXQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAnLi9jaGVjay5sZXNzJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bXdBcGl9IGZyb20gJy4vYXBpJztcblxuLyohXG4gKiBDaGVja0NhdGVnb3JpZXMgSG90Q2F0IEV4dGVuc2lvbiDigJNcbiAqIHJlbW92ZXMgdGhlIHRlbXBsYXRlIHdoZW4gY2F0ZWdvcml6aW5nIChwcm9tcHRzIGJlZm9yZSkgd2l0aCBIb3RDYXQgYW5kXG4gKiBhZGRzIGEgbGluayBcIkNhdGVnb3JpZXMgYXJlIE9LXCIgdG8gdGhlIGNhdGVnb3J5LXNlY3Rpb25cbiAqXG4gKiBAcmV2IDIgKDIwMTQtMDMtMjApXG4gKiBAYXV0aG9yIFJpbGxrZSwgMjAxMlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGhvdENhdENoZWNrKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRpZiAoXG5cdFx0bXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSAhPT0gNiB8fFxuXHRcdHdpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRPcHRPdXQgfHxcblx0XHQhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrY2F0ZWdvcmllcycpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBhcGkgPSBtd0FwaSgnaG90Q2F0Q2hlY2svMi4wJyk7XG5cdGNvbnN0IGNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCA9IC97e1tDY11oZWNrWyBfXWNhdGVnb3JpZXNbXnt9XSp9fS9nO1xuXHRjb25zdCBzZWxmTmFtZSA9ICcoW1tNZWRpYVdpa2k6R2FkZ2V0LUhvdENhdC1jaGVjay5qc3xTY3JpcHRdXSk6ICc7XG5cdGNvbnN0IHN0b3JhZ2VJdGVtTmFtZSA9ICdjaGVja0NhdCc7XG5cdGNvbnN0IHN0b3JhZ2VJdGVtID0gbXcuc3RvcmFnZS5nZXQoc3RvcmFnZUl0ZW1OYW1lKTtcblx0LyoqXG5cdCAqIEEgZmV3IHN0eWxpbmcgaGVscGVyIGZ1bmN0aW9uc1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWNvbkNsYXNzXG5cdCAqIEByZXR1cm4ge0pRdWVyeX1cblx0ICovXG5cdGNvbnN0IGNyZWF0ZWpJY29uID0gKGljb25DbGFzczogc3RyaW5nKTogSlF1ZXJ5ID0+IHtcblx0XHRyZXR1cm4gJCgnPHNwYW4+JykuYXR0cignY2xhc3MnLCBgaG90Y2F0LWNoZWNrLWljb24gJHtpY29uQ2xhc3N9YCkudGV4dCgnICcpO1xuXHR9O1xuXHRjb25zdCBjcmVhdGVOb3RpZnlBcmVhID0gKHRleHROb2RlOiBKUXVlcnk8SlF1ZXJ5Lk5vZGU+LCBpY29uOiBzdHJpbmcsIHN0YXRlOiBzdHJpbmcpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0+IHtcblx0XHRyZXR1cm4gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdob3RjYXQtY2hlY2stbm90aWNlJylcblx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0XHQuYXR0cignY2xhc3MnLCBgaG90Y2F0LWNoZWNrLW5vdGljZS1jb250ZW50ICR7c3RhdGV9YClcblx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdCdtYXJnaW4tdG9wJzogJzIwcHgnLFxuXHRcdFx0XHRcdFx0cGFkZGluZzogJzAuN2VtJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPHA+JykuYXBwZW5kKGNyZWF0ZWpJY29uKGljb24pLmNzcygnbWFyZ2luUmlnaHQnLCAnMC4zZW0nKSwgdGV4dE5vZGUpKVxuXHRcdFx0KTtcblx0fTtcblx0Ly8gUmVtb3ZlIFwiY2hlY2sgY2F0ZWdvcmllc1wiIHdoZW4gdXNpbmcgSG90Q2F0XG5cdC8vIE9ubHkgZXhlY3V0ZWQgb24gZmlyc3Qgc3VibWl0XG5cdCRib2R5Lm9uZSgnc3VibWl0LmNoZWNrQ2F0TGlzdGVuZXInLCAnI2hvdGNhdENvbW1pdEZvcm0nLCBmdW5jdGlvbiAoZSkge1xuXHRcdGlmIChzdG9yYWdlSXRlbSA9PT0gJ2Rpc2FibGVkJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cdFx0Y29uc3QgbmV3VmFsID0gKHNlbGYud3BUZXh0Ym94MSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZT8ucmVwbGFjZShjaGVja0NhdGVnb3JpZXNSZWdFeHAsICcnKTtcblx0XHRsZXQgJGRpYWxvZ0NoZWNrU3RvcmFnZTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0XHRsZXQgJHBlcm1hU2F2ZUhpbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdFx0bGV0ICR0ZXh0SGludE5vZGU7XG5cdFx0bGV0ICRkaWFsb2c7XG5cdFx0bGV0ICRvdmVybGF5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRcdGNvbnN0IGRvUmVtb3ZlID0gKCkgPT4ge1xuXHRcdFx0KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cblx0XHRcdFx0YFJlbW92aW5nIFtbVGVtcGxhdGU6Q2hlY2sgY2F0ZWdvcmllc3x7e0NoZWNrIGNhdGVnb3JpZXN9fV1dICR7KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlfWA7XG5cblx0XHRcdChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgPSBuZXdWYWw7XG5cdFx0fTtcblx0XHRjb25zdCB3cml0ZVN0b3JhZ2UgPSAodmFsOiBzdHJpbmcpID0+IHtcblx0XHRcdG13LnN0b3JhZ2Uuc2V0KHN0b3JhZ2VJdGVtTmFtZSwgdmFsLCA2MCAqIDYwICogMjQgKiA3KTsgLy8gNyBkYXlzXG5cdFx0fTtcblx0XHRjb25zdCBjbG9zZURpYWxvZyA9ICgpID0+IHtcblx0XHRcdCQoZG9jdW1lbnQpLm9mZigna2V5ZG93bi5ob3RjYXRDaGVjaycpO1xuXHRcdFx0JG92ZXJsYXk/LnJlbW92ZSgpO1xuXHRcdFx0JGJvZHkuZmluZCgnI2hvdGNhdENvbW1pdEZvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZpbmlzaERpYWxvZyA9IChzdG9yYWdlVmFsdWU/OiBzdHJpbmcpID0+IHtcblx0XHRcdGlmIChzdG9yYWdlVmFsdWUgJiYgKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKHN0b3JhZ2VWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRjbG9zZURpYWxvZygpO1xuXHRcdH07XG5cdFx0Y29uc3QgX2FkZFRvSlMgPSBmdW5jdGlvbiAodGhpczogSFRNTEVsZW1lbnQsIF9lOiBKUXVlcnkuRXZlbnQpIHtcblx0XHRcdF9lLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAoJHBlcm1hU2F2ZUhpbnQuaGFzQ2xhc3MoJ2hvdGNhdC1jaGVjay1kaXNhYmxlZCcpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRlbDogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICQodGhpcyk7XG5cdFx0XHQkZWwub2ZmKCdjbGljaycpLnRleHQoJ1BsZWFzZSB3YWl0LicpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQuYWRkQ2xhc3MoJ2hvdGNhdC1jaGVjay1kaXNhYmxlZCcpO1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0aXRsZTogYFVzZXI6JHttdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyl9L2NvbW1vbi5qc2AsXG5cdFx0XHRcdHN1bW1hcnk6IGAke3NlbGZOYW1lfVNhdmluZyBIb3RDYXQgY29uZmlndXJhdGlvbi5gLFxuXHRcdFx0XHRhcHBlbmR0ZXh0OiAkZWwuZGF0YSgnYWRkVGV4dCcpIGFzIHN0cmluZyxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBlZGl0RG9uZSA9IChlZGl0U3RhdD86IHtlcnJvcj86IHtjb2RlPzogc3RyaW5nOyBpbmZvPzogc3RyaW5nfX0pID0+IHtcblx0XHRcdFx0aWYgKCFlZGl0U3RhdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWRpdFN0YXQuZXJyb3IpIHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdGBVbmFibGUgdG8gc2F2ZSB0byB5b3VyIGNvbW1vbi5qcyB1c2luZyB0aGUgQVBJXFxuJHtlZGl0U3RhdC5lcnJvci5jb2RlfVxcbiR7ZWRpdFN0YXQuZXJyb3IuaW5mb31gLFxuXHRcdFx0XHRcdFx0e3RhZzogJ2hvdENhdENoZWNrJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0LUVycm9yIScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdEb25lLicpO1xuXHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHZvaWQgYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbXMpLnRoZW4oZWRpdERvbmUpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogT24gV2lraW1lZGlhIENvbW1vbnMgdGhlcmUgd2VyZSBwZW9wbGUgd2hvIHNhaWQ6XG5cdFx0ICogXCJDYXRlZ29yaXppbmcgd2l0aCBIb3RDYXQgZG9lcyBsZWdpdCBhdXRvbWF0ZWQgcmVtb3ZhbCBvZiB0aGUgY2hlY2stY2F0LW1lc3NhZ2VcIlxuXHRcdCAqIFNvIHdlIGludmVudGVkIGEgZGlhbG9nIHRoYXQgc2hvdWxkIGJlIHJlYWRhYmxlIGJ5IHVzZXJzIGV2ZW4gd2l0aCB2ZXJ5IGZldyBFbmdsaXNoIHNraWxscy5cblx0XHQgKi9cblx0XHRjb25zdCBwcm9tcHQgPSAoKSA9PiB7XG5cdFx0XHQkZGlhbG9nQ2hlY2tTdG9yYWdlID0gJCgnPGlucHV0PicpXG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdGlkOiAnaG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0U3RvcmFnZScsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGlmICgodGhpcyBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5zaG93KCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmhpZGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0JHRleHRIaW50Tm9kZSA9ICQoJzx1bD4nKTtcblx0XHRcdCQoJzxsaT4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjJylcblx0XHRcdFx0XHRcdC50ZXh0KCdEaXNhYmxlIHRoaXMgZmVhdHVyZS4nKVxuXHRcdFx0XHRcdFx0LmRhdGEoJ2FkZFRleHQnLCAnXFxud2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCA9IHRydWU7Jylcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBfYWRkVG9KUylcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kVG8oJHRleHRIaW50Tm9kZSk7XG5cdFx0XHQkKCc8bGk+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHQudGV4dCgnUmVtb3ZlIHt7Y2hlY2sgY2F0ZWdvcmllc319IHdoZW4gZWRpdGluZyB1c2luZyBIb3RDYXQgd2l0aG91dCBwcm9tcHRpbmcuJylcblx0XHRcdFx0XHRcdC5kYXRhKCdhZGRUZXh0JywgJ1xcbndpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQgPSB0cnVlOycpXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX2FkZFRvSlMpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZFRvKCR0ZXh0SGludE5vZGUpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQgPSBjcmVhdGVOb3RpZnlBcmVhKFxuXHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCdTYXZlIHRoZXNlIHNldHRpbmcgaW4geW91ciBjb21tb24uanM6ICcpLmFwcGVuZCgkdGV4dEhpbnROb2RlKSxcblx0XHRcdFx0J2hvdGNhdC1jaGVjay1pY29uLWluZm8nLFxuXHRcdFx0XHQnaG90Y2F0LWNoZWNrLWhpZ2hsaWdodCdcblx0XHRcdCk7XG5cdFx0XHQkZGlhbG9nID0gJCgnPGRpdj4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdFx0J2ZvbnQtc2l6ZSc6ICcyZW0nLFxuXHRcdFx0XHRcdFx0XHQnbGluZS1oZWlnaHQnOiAnMS44ZW0nLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpLnRleHQoJyB7e2NoZWNrIGNhdGVnb3JpZXN9fSAnKS5jc3Moe1xuXHRcdFx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJyNGOENDQjAnLFxuXHRcdFx0XHRcdFx0XHRcdCd0ZXh0LWRlY29yYXRpb24nOiAnbGluZS10aHJvdWdoICFpbXBvcnRhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+JykudGV4dCgnID8nKVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0Jzxicj4nLFxuXHRcdFx0XHRcdCRkaWFsb2dDaGVja1N0b3JhZ2UsXG5cdFx0XHRcdFx0JCgnPGxhYmVsPicpLmF0dHIoJ2ZvcicsICdob3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRTdG9yYWdlJykudGV4dChcIkRvbid0IGFzayBhZ2FpblwiKSxcblx0XHRcdFx0XHQnPGJyPidcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kKG13LnVzZXIuaXNBbm9uKCkgPyAnJyA6ICRwZXJtYVNhdmVIaW50LmhpZGUoKSk7XG5cdFx0XHQkb3ZlcmxheSA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2hvdGNhdC1jaGVjay1vdmVybGF5JykuYXR0cigncm9sZScsICdwcmVzZW50YXRpb24nKTtcblx0XHRcdCRkaWFsb2cgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnaG90Y2F0LWNoZWNrLWRpYWxvZycpXG5cdFx0XHRcdC5hdHRyKHtyb2xlOiAnZGlhbG9nJywgJ2FyaWEtbW9kYWwnOiAndHJ1ZScsICdhcmlhLWxhYmVsbGVkYnknOiAnaG90Y2F0LWNoZWNrLWRpYWxvZy10aXRsZSd9KVxuXHRcdFx0XHQucHJlcGVuZCgkKCc8aDI+JykuYXR0cignaWQnLCAnaG90Y2F0LWNoZWNrLWRpYWxvZy10aXRsZScpLnRleHQoJ3t7Y2hlY2sgY2F0ZWdvcmllc319ICjiiJIpPycpKVxuXHRcdFx0XHQuYXBwZW5kKCRkaWFsb2cpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdob3RjYXQtY2hlY2stZGlhbG9nLWJ1dHRvbnMnKVxuXHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPGJ1dHRvbj4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoJ1llcywgUmVtb3ZlJylcblx0XHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdGZpbmlzaERpYWxvZygnYXV0bycpO1xuXHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHQkKCc8YnV0dG9uPicpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcblx0XHRcdFx0XHRcdFx0XHQudGV4dCgnTm8sIGtlZXAgaXQnKVxuXHRcdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRmaW5pc2hEaWFsb2coJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdCRvdmVybGF5LmFwcGVuZCgkZGlhbG9nKS5hcHBlbmRUbygnYm9keScpO1xuXHRcdFx0JGRpYWxvZy5maW5kKCdidXR0b24nKS5maXJzdCgpLnRyaWdnZXIoJ2ZvY3VzJyk7XG5cdFx0XHQkb3ZlcmxheS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0aWYgKGV2ZW50LnRhcmdldCA9PT0gJG92ZXJsYXlbMF0pIHtcblx0XHRcdFx0XHRjbG9zZURpYWxvZygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdrZXlkb3duLmhvdGNhdENoZWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdrZXlkb3duLmhvdGNhdENoZWNrJyk7XG5cdFx0XHRcdFx0Y2xvc2VEaWFsb2coKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGlmIChuZXdWYWwgIT09IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUpIHtcblx0XHRcdGlmICh3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IHx8IHN0b3JhZ2VJdGVtID09PSAnYXV0bycpIHtcblx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRwcm9tcHQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xuXHQvLyBBZGQgT0stTGluayB0byB0aGUgY2F0cyBwYW5lbFxuXHRjb25zdCAkb2tMaW5rID0gJCgnPGE+Jylcblx0XHQuYXR0cih7XG5cdFx0XHRocmVmOiAnIycsXG5cdFx0XHR0aXRsZTogJ0NhdGVnb3JpZXMgYXJlIE9LISBJbW1lZGlhdGVseSByZW1vdmUgdGhlIHRlbXBsYXRlLicsXG5cdFx0fSlcblx0XHQuYXBwZW5kKCc8cz4nKVxuXHRcdC50ZXh0KCd7e0NoZWNrIGNhdGVnb3JpZXN9fScpO1xuXHQkb2tMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0ICRlbCA9ICQodGhpcyk7XG5cdFx0JGVsLm9mZignY2xpY2snKTtcblx0XHRjb25zdCBkb0VkaXQgPSAocmVzdWx0OiBzdHJpbmcpID0+IHtcblx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRlbC50ZXh0KCdEb2luZy4nKTtcblx0XHRcdGNvbnN0IHRleHQgPSByZXN1bHQucmVwbGFjZShjaGVja0NhdGVnb3JpZXNSZWdFeHAsICcnKTtcblx0XHRcdGlmICh0ZXh0ID09PSByZXN1bHQpIHtcblx0XHRcdFx0JGVsLnRleHQoJ1RlbXBsYXRlIG5vdCBmb3VuZCEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0dGV4dCxcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0aXRsZTogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdFx0XHRzdW1tYXJ5OiBgJHtzZWxmTmFtZX1DYXRlZ29yaWVzIGFyZSBjaGVja2VkIGFuZCBPSy4gWW91IGNhbiBoZWxwIFtbQ2F0ZWdvcnk6TWVkaWEgbmVlZGluZyBjYXRlZ29yeSByZXZpZXd8cmV2aWV3aW5nXV0hYCxcblx0XHRcdFx0bm9jcmVhdGU6IHRydWUsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZWRpdERvbmUgPSAoZWRpdFN0YXQ/OiB7ZXJyb3I/OiB7Y29kZT86IHN0cmluZzsgaW5mbz86IHN0cmluZ319KSA9PiB7XG5cdFx0XHRcdGlmICghZWRpdFN0YXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVkaXRTdGF0LmVycm9yKSB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRgVW5hYmxlIHRvIHJlbW92ZSBcIkNoZWNrIGNhdGVnb3JpZXNcIiB3aXRoIHRoZSBBUElcXG4ke2VkaXRTdGF0LmVycm9yLmNvZGV9XFxuJHtlZGl0U3RhdC5lcnJvci5pbmZvfWAsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRhZzogJ2hvdENhdENoZWNrJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0LUVycm9yIScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0IERvbmUuJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JGJvZHkuZmluZCgnLmNoZWNrY2F0ZWdvcmllcycpLmhpZGUoKTtcblx0XHRcdH07XG5cdFx0XHQkZWwudGV4dCgnRG9pbmcuLicpO1xuXHRcdFx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtcykudGhlbihlZGl0RG9uZSk7XG5cdFx0fTtcblx0XHQkZWwudGV4dCgnRG9pbmcnKTtcblx0XHR2b2lkICQuYWpheCh7XG5cdFx0XHR1cmw6IG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0JyksXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdHRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvIC9nLCAnXycpLFxuXHRcdFx0fSxcblx0XHRcdGRhdGFUeXBlOiAndGV4dCcsXG5cdFx0XHRlcnJvcjogKCkgPT4ge1xuXHRcdFx0XHQkZWwudGV4dCgnRXJyb3IhJyk7XG5cdFx0XHR9LFxuXHRcdFx0c3VjY2VzczogZG9FZGl0LFxuXHRcdFx0dHlwZTogJ0dFVCcsXG5cdFx0XHRjYWNoZTogZmFsc2UsXG5cdFx0fSk7XG5cdH0pO1xuXHQvLyBMb2FkXG5cdCRib2R5LmZpbmQoJyNjYXRsaW5rcycpLmZpbmQoJ3VsOmZpcnN0JykuYXBwZW5kKCQoJzxsaT4nKS5hcHBlbmQoJG9rTGluaykpO1xufSk7XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbi8vIEluaXRpYWxpemUgTWVkaWFXaWtpIEFQSVxuY29uc3QgbXdBcGk6ICh1c2VyQWdlbnQ/OiBzdHJpbmcpID0+IG13LkFwaSA9ICh1c2VyQWdlbnQpID0+IHtcblx0cmV0dXJuIGluaXRNd0FwaSh1c2VyQWdlbnQpO1xufTtcblxuZXhwb3J0IHttd0FwaX07XG4iLCAiKGZ1bmN0aW9uIGhvdENhdE1lc3NhZ2VzKCkge1xuXHRjb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaRbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJzogJ+W3suenu+mZpHt7W1tDYXRlZ29yeTokMV1dfX0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfYWRkZWQnOiAn5bey5re75YqgW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdC8vICQyIGlzIHRoZSBuZXcga2V5XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnOiAn5bey6Kit572uW1tDYXRlZ29yeTokMV1d55qE5paw5o6S5bqP5a2X77yaXCIkMlwiJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X25vdEZvdW5kJzogJ+WIhumhnuKAnCQx4oCd5rKS5pyJ5om+5YiwJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2V4aXN0cyc6ICfliIbpoZ7igJwkMeKAneW3sue2k+WtmOWcqO+8jOaykuaciea3u+WKoOOAgicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZXNvbHZlZCc6ICfvvIjph43lrprlkJFbW0NhdGVnb3J5OiQxXV3lt7LomZXnkIbvvIknLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11bmNhdF9yZW1vdmVkJzogJ+W3suenu+mZpHt7dW5jYXRlZ29yaXplZH19Jyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBwcmVmaXggdG8gdGhlIGVkaXQgc3VtbWFyeS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtcHJlZml4JzogJ+S9v+eUqFtbSDpIT1RDQVR8SG90Q2F0XV0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIGFwcGVuZCB0byB0aGUgZWRpdCBzdW1tYXJ5LiBOYW1lZCAndXNpbmcnIGZvciBoaXN0b3JpY2FsIHJlYXNvbnMuIElmIHlvdSBwcmVmZXJcblx0XHRcdC8vIHRvIGhhdmUgYSBtYXJrZXIgYXQgdGhlIGZyb250LCB1c2UgcHJlZml4IGFuZCBzZXQgdGhpcyB0byB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11c2luZyc6ICcnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9jaGFuZ2UnOiAnJDHlgIvliIbpoZ4nLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnk7IGkuZS4sIGEgY2F0ZWdvcnkgdGhhdCBzaG91bGQgbm90IGNvbnRhaW5cblx0XHRcdC8vIGFueSBpdGVtcywgYnV0IHRoYXQgY29udGFpbnMgbGlua3MgdG8gb3RoZXIgY2F0ZWdvcmllcyB3aGVyZSBzdHVmZiBzaG91bGQgYmUgY2F0ZWdvcml6ZWQuIElmIHlvdSBkb24ndCBoYXZlXG5cdFx0XHQvLyB0aGF0IGNvbmNlcHQgb24geW91ciB3aWtpLCBzZXQgaXQgdG8gYmxhbmsgc3RyaW5nLiBVc2UgYmxhbmtzLCBub3QgdW5kZXJzY29yZXMuXG5cdFx0XHQnaG90Y2F0LWRpc2FtYmlnX2NhdGVnb3J5JzogJycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSAoc29mdCkgcmVkaXJlY3QgdG8gc29tZSBvdGhlciBjYXRlZ29yeSBkZWZpbmVkIGJ5IGEgbGlua1xuXHRcdFx0Ly8gdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnkuIElmIHlvdXIgd2lraSBkb2Vzbid0IGhhdmUgc29mdCBjYXRlZ29yeSByZWRpcmVjdHMsIHNldCB0aGlzIHRvIG51bGwuXG5cdFx0XHQvLyBJZiBhIHNvZnQtcmVkaXJlY3RlZCBjYXRlZ29yeSBjb250YWlucyBtb3JlIHRoYW4gb25lIGxpbmsgdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnksIGl0J3MgY29uc2lkZXJlZFxuXHRcdFx0Ly8gYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeSBpbnN0ZWFkLlxuXHRcdFx0J2hvdGNhdC1yZWRpcl9jYXRlZ29yeSc6ICflt7Lph43lrprlkJHnmoTliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zZXBhcmF0b3InOiAnOyAnLFxuXHRcdFx0Ly8gJDEgaXMgcmVwbGFjZWQgYnkgYSBudW1iZXIuIElmIHlvdXIgbGFuZ3VhZ2UgaGFzIHNldmVyYWwgcGx1cmFsIGZvcm1zIChjLmYuIFtbOmVud2lraTpEdWFsIChncmFtbWF0aWNhbCBmb3JtKV1dKSxcblx0XHRcdC8vIHlvdSBjYW4gc2V0IHRoaXMgdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyBzdWl0YWJsZSBmb3IgcGFzc2luZyB0byBtdy5sYW5ndWFnZS5jb25maWdQbHVyYWwoKS5cblx0XHRcdC8vIElmIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBleGlzdCwgSG90Q2F0IHdpbGwgc2ltcGx5IGZhbGwgYmFjayB0byB1c2luZyB0aGUgbGFzdFxuXHRcdFx0Ly8gZW50cnkgaW4gdGhlIGFycmF5LlxuXHRcdFx0Ly8gRGVmYXVsdHMgdG8gJ1tbJyArIGNhdGVnb3J5X2Nhbm9uaWNhbCArICc6JDFdXScuIENhbiBiZSBvdmVycmlkZGVuIGlmIGluIHRoZSBzaG9ydCBlZGl0IHN1bW1hcmllc1xuXHRcdFx0Ly8gbm90IHRoZSBzdGFuZGFyZCBjYXRlZ29yeSBuYW1lIHNob3VsZCBiZSB1c2VkIGJ1dCwgc2F5LCBhIHNob3J0ZXIgbmFtZXNwYWNlIGFsaWFzLiAkMSBpcyByZXBsYWNlZFxuXHRcdFx0Ly8gYnkgYSBjYXRlZ29yeSBuYW1lLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnOiAnJDEnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY29tbWl0JzogJ+WEsuWtmCcsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1vayc6ICfnorrlrponLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2FuY2VsJzogJ+WPlua2iCcsXG5cdFx0XHQvLyBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2Vycm9yJzpcblx0XHRcdFx0J+eEoeazleW+nuS8uuacjeWZqOWPluW+l+mggemdouaWh+Wtl+OAguWboOatpO+8jOaCqOeahOWIhumhnuiuiuabtOeEoeazleWEsuWtmOOAguaIkeWAkeeCuuatpOS4jeS+v+ihqOekuuaKseatieOAgicsXG5cdFx0XHQvLyBQbHVyYWwgb2YgY2F0ZWdvcnlfY2Fub25pY2FsLlxuXHRcdFx0J2hvdGNhdC1jYXRlZ29yaWVzJzogJ+WIhumhnicsXG5cdFx0XHQvLyBOYW1lcyBmb3IgdGhlIHNlYXJjaCBlbmdpbmVzXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zZWFyY2hpbmRleCc6ICfmkJzlsIvntKLlvJUnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFnZWxpc3QnOiAn6aCB6Z2i5YiX6KGoJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLWNvbWJpbmVkJzogJ+WQiOS9teaQnOWwiycsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zdWJjYXQnOiAn5a2Q5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhcmVudGNhdCc6ICfkuIrlsaTliIbpoZ4nLFxuXHRcdFx0Ly8gVGhlIHRvb2x0aXBzIGZvciB0aGUgYWJvdmUgbGlua3Ncblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtY2hhbmdlJzogJ+S/ruaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlbW92ZSc6ICfnp7vpmaQnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1hZGQnOiAn5aKe5Yqg5LiA5YCL5paw5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVzdG9yZSc6ICflvqnljp/orormm7QnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11bmRvJzogJ+W+qeWOn+iuiuabtCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWRvd24nOiAn5omT6ZaL5Lul5L+u5pS55Lim6aGv56S65a2Q5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdXAnOiAn5omT6ZaL5Lul5L+u5pS55Lim6aGv56S65LiK5bGk5YiG6aGeJyxcblx0XHRcdC8vIFRvb2x0aXAgZm9yIHRoZSBcImVudGVyIG11bHRpLW1vZGVcIiBsaW5rXG5cdFx0XHQnaG90Y2F0LW11bHRpX3Rvb2x0aXAnOiAn5L+u5pS55aSa5YCL5YiG6aGeJyxcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaRbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJzogJ+W3suenu+mZpHt7W1tDYXRlZ29yeTokMV1dfX0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfYWRkZWQnOiAn5bey5re75YqgW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdC8vICQyIGlzIHRoZSBuZXcga2V5XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnOiAn5bey6K6+572uW1tDYXRlZ29yeTokMV1d55qE5paw5o6S5bqP5a2X77yaXCIkMlwiJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X25vdEZvdW5kJzogJ+WIhuexu+KAnCQx4oCd5rKh5pyJ5om+5YiwJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2V4aXN0cyc6ICfliIbnsbvigJwkMeKAneW3sue7j+WtmOWcqO+8jOayoeaciea3u+WKoOOAgicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZXNvbHZlZCc6ICfvvIjph43lrprlkJFbW0NhdGVnb3J5OiQxXV3lt7LlpITnkIbvvIknLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11bmNhdF9yZW1vdmVkJzogJ+W3suenu+mZpHt7dW5jYXRlZ29yaXplZH19Jyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBwcmVmaXggdG8gdGhlIGVkaXQgc3VtbWFyeS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtcHJlZml4JzogJ+S9v+eUqFtbSDpIT1RDQVR8SG90Q2F0XV0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIGFwcGVuZCB0byB0aGUgZWRpdCBzdW1tYXJ5LiBOYW1lZCAndXNpbmcnIGZvciBoaXN0b3JpY2FsIHJlYXNvbnMuIElmIHlvdSBwcmVmZXJcblx0XHRcdC8vIHRvIGhhdmUgYSBtYXJrZXIgYXQgdGhlIGZyb250LCB1c2UgcHJlZml4IGFuZCBzZXQgdGhpcyB0byB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11c2luZyc6ICcnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9jaGFuZ2UnOiAnJDHkuKrliIbnsbsnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnk7IGkuZS4sIGEgY2F0ZWdvcnkgdGhhdCBzaG91bGQgbm90IGNvbnRhaW5cblx0XHRcdC8vIGFueSBpdGVtcywgYnV0IHRoYXQgY29udGFpbnMgbGlua3MgdG8gb3RoZXIgY2F0ZWdvcmllcyB3aGVyZSBzdHVmZiBzaG91bGQgYmUgY2F0ZWdvcml6ZWQuIElmIHlvdSBkb24ndCBoYXZlXG5cdFx0XHQvLyB0aGF0IGNvbmNlcHQgb24geW91ciB3aWtpLCBzZXQgaXQgdG8gYmxhbmsgc3RyaW5nLiBVc2UgYmxhbmtzLCBub3QgdW5kZXJzY29yZXMuXG5cdFx0XHQnaG90Y2F0LWRpc2FtYmlnX2NhdGVnb3J5JzogJycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSAoc29mdCkgcmVkaXJlY3QgdG8gc29tZSBvdGhlciBjYXRlZ29yeSBkZWZpbmVkIGJ5IGEgbGlua1xuXHRcdFx0Ly8gdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnkuIElmIHlvdXIgd2lraSBkb2Vzbid0IGhhdmUgc29mdCBjYXRlZ29yeSByZWRpcmVjdHMsIHNldCB0aGlzIHRvIG51bGwuXG5cdFx0XHQvLyBJZiBhIHNvZnQtcmVkaXJlY3RlZCBjYXRlZ29yeSBjb250YWlucyBtb3JlIHRoYW4gb25lIGxpbmsgdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnksIGl0J3MgY29uc2lkZXJlZFxuXHRcdFx0Ly8gYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeSBpbnN0ZWFkLlx0XHRcdCdob3RjYXQtcmVkaXJfY2F0ZWdvcnknOiAn5bey6YeN5a6a5ZCR55qE5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2VwYXJhdG9yJzogJzsgJyxcblx0XHRcdC8vICQxIGlzIHJlcGxhY2VkIGJ5IGEgbnVtYmVyLiBJZiB5b3VyIGxhbmd1YWdlIGhhcyBzZXZlcmFsIHBsdXJhbCBmb3JtcyAoYy5mLiBbWzplbndpa2k6RHVhbCAoZ3JhbW1hdGljYWwgZm9ybSldXSksXG5cdFx0XHQvLyB5b3UgY2FuIHNldCB0aGlzIHRvIGFuIGFycmF5IG9mIHN0cmluZ3Mgc3VpdGFibGUgZm9yIHBhc3NpbmcgdG8gbXcubGFuZ3VhZ2UuY29uZmlnUGx1cmFsKCkuXG5cdFx0XHQvLyBJZiB0aGF0IGZ1bmN0aW9uIGRvZXNuJ3QgZXhpc3QsIEhvdENhdCB3aWxsIHNpbXBseSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGxhc3Rcblx0XHRcdC8vIGVudHJ5IGluIHRoZSBhcnJheS5cblx0XHRcdC8vIERlZmF1bHRzIHRvICdbWycgKyBjYXRlZ29yeV9jYW5vbmljYWwgKyAnOiQxXV0nLiBDYW4gYmUgb3ZlcnJpZGRlbiBpZiBpbiB0aGUgc2hvcnQgZWRpdCBzdW1tYXJpZXNcblx0XHRcdC8vIG5vdCB0aGUgc3RhbmRhcmQgY2F0ZWdvcnkgbmFtZSBzaG91bGQgYmUgdXNlZCBidXQsIHNheSwgYSBzaG9ydGVyIG5hbWVzcGFjZSBhbGlhcy4gJDEgaXMgcmVwbGFjZWRcblx0XHRcdC8vIGJ5IGEgY2F0ZWdvcnkgbmFtZS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJzogJyQxJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNvbW1pdCc6ICfkv53lrZgnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtb2snOiAn56Gu5a6aJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhbmNlbCc6ICflj5bmtognLFxuXHRcdFx0Ly8gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9lcnJvcic6XG5cdFx0XHRcdCfml6Dms5Xku47mnI3liqHlmajlj5blvpfpobXpnaLmloflrZfjgILlm6DmraTvvIzmgqjnmoTliIbnsbvmm7TmlLnml6Dms5Xkv53lrZjjgILmiJHku6zkuLrmraTkuI3kvr/ooajnpLrmirHmrYnjgIInLFxuXHRcdFx0Ly8gUGx1cmFsIG9mIGNhdGVnb3J5X2Nhbm9uaWNhbC5cblx0XHRcdCdob3RjYXQtY2F0ZWdvcmllcyc6ICfliIbnsbsnLFxuXHRcdFx0Ly8gTmFtZXMgZm9yIHRoZSBzZWFyY2ggZW5naW5lc1xuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc2VhcmNoaW5kZXgnOiAn5pCc57Si57Si5byVJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhZ2VsaXN0JzogJ+mhtemdouWIl+ihqCcsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1jb21iaW5lZCc6ICflkIjlubbmkJzntKInLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc3ViY2F0JzogJ+WtkOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYXJlbnRjYXQnOiAn5LiK5bGC5YiG57G7Jyxcblx0XHRcdC8vIFRoZSB0b29sdGlwcyBmb3IgdGhlIGFib3ZlIGxpbmtzXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWNoYW5nZSc6ICfkv67mlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZW1vdmUnOiAn56e76ZmkJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtYWRkJzogJ+WinuWKoOS4gOS4quaWsOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlc3RvcmUnOiAn5pKk6ZSA5pu05pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdW5kbyc6ICfmkqTplIDmm7TmlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1kb3duJzogJ+aJk+W8gOS7peS/ruaUueW5tuaYvuekuuWtkOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVwJzogJ+aJk+W8gOS7peS/ruaUueW5tuaYvuekuuS4iuWxguWIhuexuycsXG5cdFx0XHQvLyBUb29sdGlwIGZvciB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGlua1xuXHRcdFx0J2hvdGNhdC1tdWx0aV90b29sdGlwJzogJ+S/ruaUueWkmuS4quWIhuexuycsXG5cdFx0fSk7XG5cdH1cbn0pKCk7XG4iLCAiY29uc3QgZ2V0TWVzc2FnZSA9IChrZXk6IHN0cmluZywgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xuXHRrZXkgPSBgaG90Y2F0LSR7a2V5fWA7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gbXcubWVzc2FnZShrZXksIC4uLmFyZ3MpLnBsYWluKCk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB0eXBlIHtIb3RDYXRDb25maWd9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2dldE1lc3NhZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhvdENhdENoYW5nZVJlc3VsdCB7XG5cdHRleHQ6IHN0cmluZztcblx0c3VtbWFyeTogc3RyaW5nW107XG5cdGVycm9yOiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgdHlwZSBIb3RDYXRDYXRlZ29yeU1hdGNoZXMgPSB7XG5cdG1hdGNoOiBSZWdFeHBFeGVjQXJyYXk7XG59W10gJiB7XG5cdHJlPzogUmVnRXhwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNhdGVnb3J5VGV4dFRvb2xzID0gKFxuXHRIQzogSG90Q2F0Q29uZmlnLFxuXHR3aWtpVGV4dEJsYW5rOiBzdHJpbmcsXG5cdHdpa2lUZXh0QmxhbmtSRTogUmVnRXhwLFxuXHR3aWtpVGV4dEJsYW5rT3JCaWRpOiBzdHJpbmcsXG5cdGVzY2FwZVJFOiAoc3RyOiBzdHJpbmcpID0+IHN0cmluZyxcblx0Z2V0SW50ZXJsYW5ndWFnZVJFOiAoKSA9PiBSZWdFeHAgfCBudWxsXG4pID0+IHtcblx0Y29uc3QgZmluZENhdHNSRSA9IG5ldyBSZWdFeHAoXG5cdFx0YFxcXFxbXFxcXFske3dpa2lUZXh0QmxhbmtPckJpZGl9KD86JHtIQy5jYXRlZ29yeV9yZWdleHB9KSR7d2lraVRleHRCbGFua09yQmlkaX06W15cXFxcXV0rXFxcXF1cXFxcXWAsXG5cdFx0J2cnXG5cdCk7XG5cdGNvbnN0IHJlcGxhY2VCeUJsYW5rcyA9IChtYXRjaDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gbWF0Y2gucmVwbGFjZSgvKFxcc3xcXFMpL2csICcgJyk7XG5cdH07XG5cdGNvbnN0IGZpbmRfY2F0ZWdvcnkgPSAoXG5cdFx0d2lraXRleHQ6IHN0cmluZyxcblx0XHRjYXRlZ29yeTogc3RyaW5nLFxuXHRcdG9uY2U/OiBib29sZWFuXG5cdCk6IFJlZ0V4cEV4ZWNBcnJheSB8IEhvdENhdENhdGVnb3J5TWF0Y2hlcyB8IG51bGwgPT4ge1xuXHRcdGxldCBjYXRfcmVnZXg6IFJlZ0V4cDtcblx0XHRpZiAoSEMudGVtcGxhdGVfY2F0ZWdvcmllc1tjYXRlZ29yeV0pIHtcblx0XHRcdGNhdF9yZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxce1xcXFx7JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSgke0hDLnRlbXBsYXRlX3JlZ2V4cH0oPz0ke3dpa2lUZXh0QmxhbmtPckJpZGl9OikpPyR7d2lraVRleHRCbGFua09yQmlkaX0oPzoke1xuXHRcdFx0XHRcdEhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbY2F0ZWdvcnldXG5cdFx0XHRcdH0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfShcXFxcfC4qPyk/XFxcXH1cXFxcfWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgY2F0X25hbWUgPSBlc2NhcGVSRShjYXRlZ29yeSk7XG5cdFx0XHRjb25zdCBpbml0aWFsID0gY2F0X25hbWUuc2xpY2UoMCwgMSk7XG5cdFx0XHRjYXRfcmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcWyR7d2lraVRleHRCbGFua09yQmlkaX0oJHtIQy5jYXRlZ29yeV9yZWdleHB9KSR7d2lraVRleHRCbGFua09yQmlkaX06JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSR7XG5cdFx0XHRcdFx0aW5pdGlhbCA9PT0gJ1xcXFwnIHx8ICFIQy5jYXBpdGFsaXplUGFnZU5hbWVzXG5cdFx0XHRcdFx0XHQ/IGluaXRpYWxcblx0XHRcdFx0XHRcdDogYFske2luaXRpYWwudG9VcHBlckNhc2UoKX0ke2luaXRpYWwudG9Mb3dlckNhc2UoKX1dYFxuXHRcdFx0XHR9JHtjYXRfbmFtZS5zbGljZSgxKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayl9JHt3aWtpVGV4dEJsYW5rT3JCaWRpfShcXFxcfC4qPyk/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKG9uY2UpIHtcblx0XHRcdHJldHVybiBjYXRfcmVnZXguZXhlYyh3aWtpdGV4dCk7XG5cdFx0fVxuXHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0Y29uc3QgY29waWVkdGV4dCA9IHdpa2l0ZXh0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCByZXBsYWNlQnlCbGFua3MpLnJlcGxhY2Uobm93aWtpUmVnZXgsIHJlcGxhY2VCeUJsYW5rcyk7XG5cdFx0Y29uc3QgcmVzdWx0OiBIb3RDYXRDYXRlZ29yeU1hdGNoZXMgPSBbXTtcblx0XHRsZXQgY3Vycl9tYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IG51bGw7XG5cdFx0d2hpbGUgKChjdXJyX21hdGNoID0gY2F0X3JlZ2V4LmV4ZWMoY29waWVkdGV4dCkpICE9PSBudWxsKSB7XG5cdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB7XG5cdFx0XHRcdG1hdGNoOiBjdXJyX21hdGNoLFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmVzdWx0LnJlID0gY2F0X3JlZ2V4O1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdGNvbnN0IGNoYW5nZV9jYXRlZ29yeSA9IChcblx0XHR3aWtpdGV4dDogc3RyaW5nLFxuXHRcdHRvUmVtb3ZlOiBzdHJpbmcgfCBudWxsLFxuXHRcdHRvQWRkOiBzdHJpbmcgfCBudWxsLFxuXHRcdGtleTogc3RyaW5nIHwgbnVsbCxcblx0XHRpc19oaWRkZW4/OiBib29sZWFuXG5cdCk6IEhvdENhdENoYW5nZVJlc3VsdCA9PiB7XG5cdFx0Y29uc3QgZmluZF9pbnNlcnRpb25wb2ludCA9IChfd2lraXRleHQ6IHN0cmluZyk6IHtpZHg6IG51bWJlcjsgb25DYXQ6IGJvb2xlYW59ID0+IHtcblx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRjb25zdCBjb3BpZWR0ZXh0ID0gX3dpa2l0ZXh0XG5cdFx0XHRcdC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgcmVwbGFjZUJ5QmxhbmtzKVxuXHRcdFx0XHQucmVwbGFjZShub3dpa2lSZWdleCwgcmVwbGFjZUJ5QmxhbmtzKTtcblx0XHRcdGxldCBpbmRleCA9IC0xO1xuXHRcdFx0ZmluZENhdHNSRS5sYXN0SW5kZXggPSAwO1xuXHRcdFx0d2hpbGUgKGZpbmRDYXRzUkUuZXhlYyhjb3BpZWR0ZXh0KSAhPT0gbnVsbCkge1xuXHRcdFx0XHRpbmRleCA9IGZpbmRDYXRzUkUubGFzdEluZGV4O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGluZGV4IDwgMCkge1xuXHRcdFx0XHRsZXQgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBudWxsO1xuXHRcdFx0XHRjb25zdCBpbnRlcmxhbmd1YWdlUkUgPSBnZXRJbnRlcmxhbmd1YWdlUkUoKTtcblx0XHRcdFx0aWYgKGludGVybGFuZ3VhZ2VSRSkge1xuXHRcdFx0XHRcdG1hdGNoID0gaW50ZXJsYW5ndWFnZVJFLmV4ZWMoY29waWVkdGV4dCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQXBwcm94aW1hdGlvbiB3aXRob3V0IEFQSTogaW50ZXJsYW5ndWFnZSBsaW5rcyBzdGFydCB3aXRoIDIgdG8gMyBsb3dlciBjYXNlIGxldHRlcnMsIG9wdGlvbmFsbHkgZm9sbG93ZWQgYnlcblx0XHRcdFx0XHQvLyBhIHNlcXVlbmNlIG9mIGdyb3VwcyBjb25zaXN0aW5nIG9mIGEgZGFzaCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBsb3dlciBjYXNlIGxldHRlcnMuIEV4Y2VwdGlvbnMgYXJlIFwic2ltcGxlXCJcblx0XHRcdFx0XHQvLyBhbmQgXCJ0b2tpcG9uYVwiLlxuXHRcdFx0XHRcdG1hdGNoID0gLygoXnxcXG5cXHI/KShcXFtcXFtcXHMqKChbYS16XXsyLDN9KC1bYS16XSspKil8c2ltcGxlfHRva2lwb25hKVxccyo6W15cXF1dK11dXFxzKikpKyQvLmV4ZWMoXG5cdFx0XHRcdFx0XHRjb3BpZWR0ZXh0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdFx0XHRpbmRleCA9IG1hdGNoLmluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aWR4OiBpbmRleCxcblx0XHRcdFx0XHRvbkNhdDogZmFsc2UsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpZHg6IGluZGV4LFxuXHRcdFx0XHRvbkNhdDogaW5kZXggPj0gMCxcblx0XHRcdH07XG5cdFx0fTtcblx0XHRjb25zdCBzdW1tYXJ5OiBzdHJpbmdbXSA9IFtdO1xuXHRcdGNvbnN0IG5hbWVTcGFjZSA9IEhDLmNhdGVnb3J5X2Nhbm9uaWNhbDtcblx0XHRjb25zdCBrZXlDaGFuZ2UgPSB0b1JlbW92ZSAmJiB0b0FkZCAmJiB0b1JlbW92ZSA9PT0gdG9BZGQgJiYgdG9BZGQubGVuZ3RoID4gMDtcblx0XHRsZXQgbWF0Y2hlczogUmVnRXhwRXhlY0FycmF5IHwgSG90Q2F0Q2F0ZWdvcnlNYXRjaGVzIHwgbnVsbDtcblx0XHRsZXQgY2F0X3BvaW50ID0gLTE7XG5cdFx0a2V5ICYmPSBgfCR7a2V5fWA7XG5cdFx0aWYgKHRvUmVtb3ZlICYmIHRvUmVtb3ZlLmxlbmd0aCA+IDApIHtcblx0XHRcdG1hdGNoZXMgPSBmaW5kX2NhdGVnb3J5KHdpa2l0ZXh0LCB0b1JlbW92ZSk7XG5cdFx0XHRpZiAoIW1hdGNoZXMgfHwgbWF0Y2hlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGVycm9yOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfbm90Rm91bmQnLCB0b1JlbW92ZSksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBtYXRjaGVzQXJyYXkgPSBtYXRjaGVzIGFzIEhvdENhdENhdGVnb3J5TWF0Y2hlcztcblx0XHRcdGNvbnN0IGZpcnN0TWF0Y2ggPSBtYXRjaGVzQXJyYXlbMF0hLm1hdGNoO1xuXHRcdFx0bGV0IGJlZm9yZSA9IHdpa2l0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIGZpcnN0TWF0Y2guaW5kZXgpKTtcblx0XHRcdGxldCBhZnRlciA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGZpcnN0TWF0Y2guaW5kZXggKyBmaXJzdE1hdGNoWzBdLmxlbmd0aCkpO1xuXHRcdFx0aWYgKG1hdGNoZXNBcnJheS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdG1hdGNoZXNBcnJheS5yZSEubGFzdEluZGV4ID0gMDtcblx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5yZXBsYWNlKG1hdGNoZXNBcnJheS5yZSEsICcnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0b0FkZCAmJiBrZXkgPT09IG51bGwpIHtcblx0XHRcdFx0a2V5ID0gZmlyc3RNYXRjaFsyXSA/PyBudWxsO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGkgPSBiZWZvcmUubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID49IDAgJiYgYmVmb3JlLmNoYXJBdChpKSAhPT0gJ1xcbicgJiYgYmVmb3JlLnNsaWNlKGksIGkgKyAxKS5zZWFyY2goL1xccy8pID49IDApIHtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGogPSAwO1xuXHRcdFx0d2hpbGUgKGogPCBhZnRlci5sZW5ndGggJiYgYWZ0ZXIuY2hhckF0KGopICE9PSAnXFxuJyAmJiBhZnRlci5zbGljZShqLCBqICsgMSkuc2VhcmNoKC9cXHMvKSA+PSAwKSB7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0aSA+PSAwICYmXG5cdFx0XHRcdGJlZm9yZS5jaGFyQXQoaSkgPT09ICdcXG4nICYmXG5cdFx0XHRcdChhZnRlci5sZW5ndGggPT09IDAgfHwgKGogPCBhZnRlci5sZW5ndGggJiYgYWZ0ZXIuY2hhckF0KGopID09PSAnXFxuJykpXG5cdFx0XHQpIHtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdFx0YmVmb3JlID0gaSA+PSAwID8gYmVmb3JlLnNsaWNlKDAsIE1hdGgubWF4KDAsIGkgKyAxKSkgOiAnJztcblx0XHRcdGFmdGVyID0gaiA8IGFmdGVyLmxlbmd0aCA/IGFmdGVyLnNsaWNlKE1hdGgubWF4KDAsIGopKSA6ICcnO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRiZWZvcmUubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRiZWZvcmUuc2xpY2UoTWF0aC5tYXgoMCwgYmVmb3JlLmxlbmd0aCAtIDEpKS5zZWFyY2goL1xcUy8pID49IDAgJiZcblx0XHRcdFx0YWZ0ZXIubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRhZnRlci5zbGljZSgwLCAxKS5zZWFyY2goL1xcUy8pID49IDBcblx0XHRcdCkge1xuXHRcdFx0XHRiZWZvcmUgKz0gJyAnO1xuXHRcdFx0fVxuXHRcdFx0Y2F0X3BvaW50ID0gYmVmb3JlLmxlbmd0aDtcblx0XHRcdGlmIChjYXRfcG9pbnQgPT09IDAgJiYgYWZ0ZXIubGVuZ3RoID4gMCAmJiBhZnRlci5zbGljZSgwLCAxKSA9PT0gJ1xcbicpIHtcblx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5zbGljZSgxKTtcblx0XHRcdH1cblx0XHRcdHdpa2l0ZXh0ID0gYmVmb3JlICsgYWZ0ZXI7XG5cdFx0XHRpZiAoIWtleUNoYW5nZSkge1xuXHRcdFx0XHRpZiAoSEMudGVtcGxhdGVfY2F0ZWdvcmllc1t0b1JlbW92ZV0pIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXRlbXBsYXRlX3JlbW92ZWQnLCB0b1JlbW92ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfcmVtb3ZlZCcsIHRvUmVtb3ZlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodG9BZGQgJiYgdG9BZGQubGVuZ3RoID4gMCkge1xuXHRcdFx0bWF0Y2hlcyA9IGZpbmRfY2F0ZWdvcnkod2lraXRleHQsIHRvQWRkKTtcblx0XHRcdGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0ZXJyb3I6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9leGlzdHMnLCB0b0FkZCksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRsZXQgb25DYXQgPSBmYWxzZTtcblx0XHRcdGlmIChjYXRfcG9pbnQgPCAwKSB7XG5cdFx0XHRcdGNvbnN0IHBvaW50ID0gZmluZF9pbnNlcnRpb25wb2ludCh3aWtpdGV4dCk7XG5cdFx0XHRcdGNhdF9wb2ludCA9IHBvaW50LmlkeDtcblx0XHRcdFx0KHtvbkNhdH0gPSBwb2ludCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbkNhdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuZXdjYXRzdHJpbmcgPSBgW1ske25hbWVTcGFjZX06JHt0b0FkZH0ke2tleSB8fCAnJ31dXWA7XG5cdFx0XHRpZiAoY2F0X3BvaW50ID49IDApIHtcblx0XHRcdFx0Y29uc3Qgc3VmZml4ID0gd2lraXRleHQuc2xpY2UoTWF0aC5tYXgoMCwgY2F0X3BvaW50KSk7XG5cdFx0XHRcdHdpa2l0ZXh0ID1cblx0XHRcdFx0XHR3aWtpdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBjYXRfcG9pbnQpKSArXG5cdFx0XHRcdFx0KGNhdF9wb2ludCA+IDAgPyAnXFxuJyA6ICcnKSArXG5cdFx0XHRcdFx0bmV3Y2F0c3RyaW5nICtcblx0XHRcdFx0XHQob25DYXQgPyAnJyA6ICdcXG4nKTtcblx0XHRcdFx0d2lraXRleHQgKz0gc3VmZml4Lmxlbmd0aCA+IDAgJiYgc3VmZml4LnNsaWNlKDAsIDEpICE9PSAnXFxuJyA/IGBcXG4ke3N1ZmZpeH1gIDogc3VmZml4O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHdpa2l0ZXh0Lmxlbmd0aCA+IDAgJiYgd2lraXRleHQuc2xpY2UoLTEsIHdpa2l0ZXh0Lmxlbmd0aCAtIDEgKyAxKSAhPT0gJ1xcbicpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCArPSAnXFxuJztcblx0XHRcdFx0fVxuXHRcdFx0XHR3aWtpdGV4dCArPSAod2lraXRleHQubGVuZ3RoID4gMCA/ICdcXG4nIDogJycpICsgbmV3Y2F0c3RyaW5nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGtleUNoYW5nZSkge1xuXHRcdFx0XHRsZXQgayA9IGtleSB8fCAnJztcblx0XHRcdFx0aWYgKGsubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGsgPSBrLnNsaWNlKDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X2tleWNoYW5nZScsIHRvQWRkLCBrKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X2FkZGVkJywgdG9BZGQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKEhDLnVuY2F0X3JlZ2V4cCAmJiAhaXNfaGlkZGVuKSB7XG5cdFx0XHRcdGNvbnN0IHR4dCA9IHdpa2l0ZXh0LnJlcGxhY2UoSEMudW5jYXRfcmVnZXhwLCAnJyk7XG5cdFx0XHRcdGlmICh0eHQubGVuZ3RoICE9PSB3aWtpdGV4dC5sZW5ndGgpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCA9IHR4dDtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVuY2F0X3JlbW92ZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0ZXJyb3I6IG51bGwsXG5cdFx0fTtcblx0fTtcblx0cmV0dXJuIHtmaW5kX2NhdGVnb3J5LCBjaGFuZ2VfY2F0ZWdvcnl9O1xufTtcbiIsICI8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjIuNVwiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPVwiI2FcIiBpZD1cImJcIiB4MT1cIjkyLjYwNFwiIHgyPVwiMjYzLjgzXCIgeTE9XCIzMDQuNTFcIiB5Mj1cIjI2LjI5XCIgZ3JhZGllbnRUcmFuc2Zvcm09XCJyb3RhdGUoLTMxLjYxIDE1LjIxIDYuNDAzKXNjYWxlKC4wNTU0NClcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIi8+PGxpbmVhckdyYWRpZW50IGlkPVwiYVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiI2EwYTNlMVwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiNkZWRjZmFcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD1cInVybCgjYilcIiBkPVwiTTIxLjQ3MSA2LjAzNEE4LjQyNyAxMC41MzQgNTguMzkgMSAxIDMuNTI4IDE3LjA3NyA4LjQyNyAxMC41MzQgNTguMzkgMSAxIDIxLjQ3MSA2LjAzNFwiLz48dXNlIHhsaW5rOmhyZWY9XCIjY1wiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiMzYwXCIgb3BhY2l0eT1cIi4zXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEuMTA5IDEuMTA5KVwiLz48cGF0aCBpZD1cImNcIiBmaWxsPVwiIzAwMFwiIGZpbGwtb3BhY2l0eT1cIjFcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwiYnV0dFwiIHN0cm9rZS1saW5lam9pbj1cIm1pdGVyXCIgc3Ryb2tlLW9wYWNpdHk9XCIxXCIgc3Ryb2tlLXdpZHRoPVwiLjA1NVwiIGQ9XCJNNy43NzEgMTcuMjc2aDIuMTY0Yy45MDUtMi43NjcgNC40MjctOS4zNzQgNy40NDYtMTEuNjg4LjYyNi0uODA0LS45NDYtMS4xMzYtMi4yMTQtLjYwNC0xLjkxLjgwMi03LjkgMTEuMTM1LTcuMzk2IDEyLjI5Mk05LjA3MyA1LjMxSDYuODU2Yy0uMTk2LjMzNSA3LjA0NSA4LjY5NyA5LjM2IDExLjcxNi44MDMuNjI2IDEuMTM1LS45NDYuNjAzLTIuMjE0LS44MDItMS45MS02Ljc5My03LjcxLTcuNzQ2LTkuNTAyXCIvPjwvc3ZnPiIsICI8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjIuNVwiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPVwiI2FcIiBpZD1cImJcIiB4MT1cIjkyLjYwNFwiIHgyPVwiMjYzLjgzXCIgeTE9XCIzMDQuNTFcIiB5Mj1cIjI2LjI5XCIgZ3JhZGllbnRUcmFuc2Zvcm09XCJyb3RhdGUoLTMxLjYxIDE1LjIxIDYuNDAzKXNjYWxlKC4wNTU0NClcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIi8+PGxpbmVhckdyYWRpZW50IGlkPVwiYVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiI2EwYTNlMVwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiNkZWRjZmFcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD1cInVybCgjYilcIiBkPVwiTTIxLjQ3MiA2LjAzNEE4LjQyOCAxMC41MzQgNTguMzkxIDEgMSAzLjUyOCAxNy4wNzcgOC40MjggMTAuNTM0IDU4LjM5MSAxIDEgMjEuNDcyIDYuMDM0XCIvPjx1c2UgeGxpbms6aHJlZj1cIiNjXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzNjBcIiBvcGFjaXR5PVwiLjNcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMS4xMDkgMS4xMDkpXCIvPjxwYXRoIGlkPVwiY1wiIGZpbGw9XCIjMDAwXCIgZmlsbC1vcGFjaXR5PVwiMVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJidXR0XCIgc3Ryb2tlLWxpbmVqb2luPVwibWl0ZXJcIiBzdHJva2Utb3BhY2l0eT1cIjFcIiBzdHJva2Utd2lkdGg9XCIuMDU1XCIgZD1cIk01LjY0IDEzLjg0czIuNTE1IDIuODMzIDMuMDE4IDMuOTloMi4xNjRjLjkwNS0yLjc2NyA0LjQyNy05LjM3MyA3LjQ0Ni0xMS42ODguNjI2LS44MDQtLjk0NS0xLjEzNi0yLjIxMy0uNjAzLTEuOTEyLjgwMi01LjUxNiA2LjkyOC02LjE5IDguNDAyLS45NTUuMjUyLTEuOTYyLTEuNjEtMS45NjItMS42MVpcIi8+PC9zdmc+IiwgImltcG9ydCBwTm8gZnJvbSAnLi4vaW1hZ2VzL1Bfbm8uc3ZnJztcbmltcG9ydCBwWWVzIGZyb20gJy4uL2ltYWdlcy9QX3llcy5zdmcnO1xuXG5leHBvcnQgY29uc3QgZXhpc3RzTm8gPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KHBObyl9YDtcbmV4cG9ydCBjb25zdCBleGlzdHNZZXMgPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KHBZZXMpfWA7XG4iLCAiaW1wb3J0IHR5cGUge0hvdENhdENvbmZpZywgSG90Q2F0TXdDb25maWd9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtleGlzdHNObywgZXhpc3RzWWVzfSBmcm9tICcuL2ltYWdlcyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVIb3RDYXRDb25maWcgPSAoY29uZjogSG90Q2F0TXdDb25maWcpOiBIb3RDYXRDb25maWcgPT4ge1xuXHRjb25zdCBIQzogSG90Q2F0Q29uZmlnID0ge1xuXHRcdC8vIFUrMjIxMiBpcyBhIG1pbnVzIHNpZ247IFUrMjE5MyBhbmQgVSsyMTkxIGFyZSBhcnJvd3MuXG5cdFx0bGlua3M6IHtcblx0XHRcdGNoYW5nZTogJyjCsSknLFxuXHRcdFx0cmVtb3ZlOiAnKFxcdTIyMTIpJyxcblx0XHRcdGFkZDogJygrKScsXG5cdFx0XHRyZXN0b3JlOiAnKMOXKScsXG5cdFx0XHR1bmRvOiAnKMOXKScsXG5cdFx0XHRkb3duOiAnKFxcdTIxOTMpJyxcblx0XHRcdHVwOiAnKFxcdTIxOTEpJyxcblx0XHR9LFxuXHRcdGNoYW5nZVRhZzogJ0hvdENhdCcsXG5cdFx0Ly8gSFRNTCBjb250ZW50IG9mIHRoZSBtdWx0aS1tb2RlIGxpbmsuXG5cdFx0YWRkbXVsdGk6ICc8c3Bhbj4rPHN1cD4rPC9zdXA+PC9zcGFuPicsXG5cdFx0Ly8gUmV0dXJuIHRydWUgdG8gZGlzYWJsZSBIb3RDYXQuXG5cdFx0ZGlzYWJsZTogKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgbnMgPSBjb25mLndnTmFtZXNwYWNlTnVtYmVyO1xuXHRcdFx0Y29uc3QgbnNJZHMgPSBjb25mLndnTmFtZXNwYWNlSWRzO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0bnMgPCAwIHx8XG5cdFx0XHRcdG5zID09PSAxMCB8fFxuXHRcdFx0XHRucyA9PT0gODI4IHx8XG5cdFx0XHRcdG5zID09PSA4IHx8XG5cdFx0XHRcdChucyA9PT0gNiAmJiAhY29uZi53Z0FydGljbGVJZCkgfHxcblx0XHRcdFx0KG5zID09PSAyICYmIC9cXC4oanN8Y3NzKSQvLnRlc3QoY29uZi53Z1RpdGxlKSkgfHxcblx0XHRcdFx0KG5zSWRzICYmIChucyA9PT0gbnNJZHNbJ2NyZWF0b3InXSB8fCBucyA9PT0gbnNJZHNbJ3RpbWVkdGV4dCddIHx8IG5zID09PSBuc0lkc1snaW5zdGl0dXRpb24nXSkpIHx8XG5cdFx0XHRcdGZhbHNlXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0Ly8gVGVtcGxhdGVzIG1hdGNoaW5nIHRoaXMgZXhwcmVzc2lvbiBtYXJrIHBhZ2VzIGFzIHVuY2F0ZWdvcml6ZWQuXG5cdFx0dW5jYXRfcmVnZXhwOiAve3tcXHMqW1V1XW5jYXRlZ29yaXplZFxccypbXn1dKn19XFxzKig8IS0tLio/LS0+XFxzKik/L2csXG5cdFx0Ly8gSW1hZ2VzIHVzZWQgYnkgdGhlIGNhdGVnb3J5IGV4aXN0ZW5jZSBpbmRpY2F0b3IuXG5cdFx0ZXhpc3RzWWVzLFxuXHRcdGV4aXN0c05vLFxuXHRcdC8vIENhdGVnb3J5IG5hbWVzIG1hcHBlZCB0byB0ZW1wbGF0ZS1uYW1lIHJlZ3VsYXIgZXhwcmVzc2lvbnMuXG5cdFx0dGVtcGxhdGVfY2F0ZWdvcmllczoge30sXG5cdFx0Ly8gU2V0IGZyb20gc2l0ZWluZm8gdW5sZXNzIGV4cGxpY2l0bHkgY29uZmlndXJlZC5cblx0XHRjYXBpdGFsaXplUGFnZU5hbWVzOiBudWxsLFxuXHRcdHVwbG9hZF9kaXNhYmxlZDogZmFsc2UsXG5cdFx0YmxhY2tsaXN0OiBudWxsLFxuXHRcdC8vIEJhY2tncm91bmQgZm9yIGNoYW5nZWQgY2F0ZWdvcmllcyBpbiBtdWx0aS1lZGl0IG1vZGUuXG5cdFx0YmdfY2hhbmdlZDogJyNGQ0EnLFxuXHRcdC8vIFdoZW4gZW5hYmxlZCwgY2hhbmdlcyBvcGVuIGFuIGVkaXQgcGFnZSBpbnN0ZWFkIG9mIGJlaW5nIHN1Ym1pdHRlZCBhdXRvbWF0aWNhbGx5LlxuXHRcdG5vX2F1dG9jb21taXQ6IGZhbHNlLFxuXHRcdGRlbF9uZWVkc19kaWZmOiBmYWxzZSxcblx0XHQvLyBEZWxheSBiZWZvcmUgcmVxdWVzdGluZyBzdWdnZXN0aW9ucyBhZnRlciBpbnB1dC5cblx0XHRzdWdnZXN0X2RlbGF5OiAxMDAwLFxuXHRcdGVkaXRib3hfd2lkdGg6IDQwLFxuXHRcdHN1Z2dlc3Rpb25zOiAnY29tYmluZWQnLFxuXHRcdGZpeGVkX3NlYXJjaDogZmFsc2UsXG5cdFx0dXNlX3VwX2Rvd246IHRydWUsXG5cdFx0bGlzdFNpemU6IDEwLFxuXHRcdHNpbmdsZV9taW5vcjogdHJ1ZSxcblx0XHRkb250X2FkZF90b193YXRjaGxpc3Q6IGZhbHNlLFxuXHRcdHNob3J0Y3V0czogbnVsbCxcblx0XHRhZGRTaG9ydGN1dHM6IChtYXA/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgbnVsbCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCFtYXApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0SEMuc2hvcnRjdXRzIHx8PSB7fTtcblx0XHRcdGZvciAobGV0IGsgaW4gbWFwKSB7XG5cdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bihtYXAsIGspKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHYgPSBtYXBba107XG5cdFx0XHRcdGlmICh0eXBlb2YgdiAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRrID0gay50cmltKCk7XG5cdFx0XHRcdHYgPSB2LnRyaW0oKTtcblx0XHRcdFx0aWYgKGsubGVuZ3RoID09PSAwIHx8IHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0SEMuc2hvcnRjdXRzW2tdID0gdjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIEZpbGxlZCBpbiBmcm9tIGxvY2FsaXplZCBNZWRpYVdpa2kgbmFtZXNwYWNlcy5cblx0XHRjYXRlZ29yeV9jYW5vbmljYWw6ICcnLFxuXHRcdGNhdGVnb3J5X3JlZ2V4cDogJycsXG5cdFx0dGVtcGxhdGVfcmVnZXhwOiAnJyxcblx0fTtcblx0cmV0dXJuIEhDO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7SG90Q2F0Q29uZmlnLCBIb3RDYXRNd0NvbmZpZ30gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBNYWtlIHtcblx0PEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KGFyZzogSyk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXTtcblx0KGFyZzogc3RyaW5nLCBsaXRlcmFsOiB0cnVlKTogVGV4dDtcbn1cblxuaW50ZXJmYWNlIFN1YnN0aXR1dGVPcHRpb25zIHtcblx0aW5kaWNhdG9yPzogc3RyaW5nO1xuXHRsYnJhY2U/OiBzdHJpbmc7XG5cdHJicmFjZT86IHN0cmluZztcbn1cblxudHlwZSBTdWJzdGl0dXRlTWFwID0gUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgKChtYXRjaDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZD47XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVIb3RDYXRVdGlsaXRpZXMgPSAoY29uZjogSG90Q2F0TXdDb25maWcsIEhDOiBIb3RDYXRDb25maWcpID0+IHtcblx0Ly8gTWVkaWFXaWtpIHRyZWF0cyBzZXZlcmFsIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGFzIG9yZGluYXJ5IHNwYWNlcyBpbiB0aXRsZXMuXG5cdGNvbnN0IHdpa2lUZXh0QmxhbmsgPSBTdHJpbmcucmF3YFtcXHQgX1xceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMF0rYDtcblx0Y29uc3Qgd2lraVRleHRCbGFua1JFID0gbmV3IFJlZ0V4cCh3aWtpVGV4dEJsYW5rLCAnZycpO1xuXHQvLyBBbHNvIGFsbG93IGJpZGkgbWFya3MgYXJvdW5kIGxpbmsgY29tcG9uZW50cywgd2l0aG91dCBhbGxvd2luZyBsaW5lIGJyZWFrcy5cblx0Y29uc3Qgd2lraVRleHRCbGFua09yQmlkaSA9IFN0cmluZy5yYXdgW1xcdCBfXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAwQlxcdTIwMEVcXHUyMDBGXFx1MjAyOC1cXHUyMDJGXFx1MjA1RlxcdTMwMDBdKmA7XG5cdGNvbnN0IGF1dG9Mb2NhbGl6ZSA9IChuYW1lc3BhY2VOdW1iZXI6IG51bWJlciwgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0Y29uc3QgY3JlYXRlUmVnZXhwU3RyID0gKG5hbWU/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0aWYgKCFuYW1lIHx8IG5hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblx0XHRcdGxldCByZWdleF9uYW1lID0gJyc7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgaW5pdGlhbCA9IG5hbWUuY2hhckF0KGkpO1xuXHRcdFx0XHRjb25zdCBsbCA9IGluaXRpYWwudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0Y29uc3QgdWwgPSBpbml0aWFsLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdHJlZ2V4X25hbWUgKz0gbGwgPT09IHVsID8gaW5pdGlhbCA6IGBbJHtsbH0ke3VsfV1gO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlZ2V4X25hbWUucmVwbGFjZSgvKFskKCkqKy4/XFxcXF5dKS9nLCBTdHJpbmcucmF3YFxcJDFgKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayk7XG5cdFx0fTtcblx0XHRmYWxsYmFjayA9IGZhbGxiYWNrLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgY2Fub25pY2FsID0gKGNvbmYud2dGb3JtYXR0ZWROYW1lc3BhY2VzW1N0cmluZyhuYW1lc3BhY2VOdW1iZXIpXSA/PyAnJykudG9Mb3dlckNhc2UoKTtcblx0XHRsZXQgcmVnZXhwID0gY3JlYXRlUmVnZXhwU3RyKGNhbm9uaWNhbCk7XG5cdFx0aWYgKGZhbGxiYWNrICYmIGNhbm9uaWNhbCAhPT0gZmFsbGJhY2spIHtcblx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGZhbGxiYWNrKX1gO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGNhdF9uYW1lIGluIGNvbmYud2dOYW1lc3BhY2VJZHMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dHlwZW9mIGNhdF9uYW1lID09PSAnc3RyaW5nJyAmJlxuXHRcdFx0XHRjYXRfbmFtZS50b0xvd2VyQ2FzZSgpICE9PSBjYW5vbmljYWwgJiZcblx0XHRcdFx0Y2F0X25hbWUudG9Mb3dlckNhc2UoKSAhPT0gZmFsbGJhY2sgJiZcblx0XHRcdFx0Y29uZi53Z05hbWVzcGFjZUlkc1tjYXRfbmFtZV0gPT09IG5hbWVzcGFjZU51bWJlclxuXHRcdFx0KSB7XG5cdFx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGNhdF9uYW1lKX1gO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVnZXhwO1xuXHR9O1xuXHRIQy5jYXRlZ29yeV9jYW5vbmljYWwgPSBjb25mLndnRm9ybWF0dGVkTmFtZXNwYWNlc1snMTQnXSA/PyAnJztcblx0SEMuY2F0ZWdvcnlfcmVnZXhwID0gYXV0b0xvY2FsaXplKDE0LCAnY2F0ZWdvcnknKTtcblx0aWYgKGNvbmYud2dGb3JtYXR0ZWROYW1lc3BhY2VzWycxMCddKSB7XG5cdFx0SEMudGVtcGxhdGVfcmVnZXhwID0gYXV0b0xvY2FsaXplKDEwLCAndGVtcGxhdGUnKTtcblx0fVxuXHRjb25zdCBtYWtlID0gKChhcmc6IHN0cmluZywgbGl0ZXJhbD86IGJvb2xlYW4pOiBOb2RlIHwgbnVsbCA9PiB7XG5cdFx0aWYgKCFhcmcpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbGl0ZXJhbCA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFyZykgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZyk7XG5cdH0pIGFzIE1ha2U7XG5cdGNvbnN0IHBhcmFtID0gKG5hbWU6IHN0cmluZywgdXJpPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCA9PiB7XG5cdFx0dXJpIHx8PSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuXHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgWyY/XSR7bmFtZX09KFteJiNdKilgKTtcblx0XHRjb25zdCBtID0gcmUuZXhlYyh1cmkpO1xuXHRcdGlmIChtICYmIG0ubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChtWzFdIGFzIHN0cmluZyk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCB0aXRsZSA9IChocmVmPzogc3RyaW5nIHwgbnVsbCk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHRcdGlmICghaHJlZikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHNjcmlwdCA9IGAke2NvbmYud2dTY3JpcHR9P2A7XG5cdFx0aWYgKFxuXHRcdFx0aHJlZi5pbmRleE9mKHNjcmlwdCkgPT09IDAgfHxcblx0XHRcdGhyZWYuaW5kZXhPZihjb25mLndnU2VydmVyICsgc2NyaXB0KSA9PT0gMCB8fFxuXHRcdFx0KGNvbmYud2dTZXJ2ZXIuc2xpY2UoMCwgMikgPT09ICcvLycgJiZcblx0XHRcdFx0aHJlZi5pbmRleE9mKGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgY29uZi53Z1NlcnZlciArIHNjcmlwdCkgPT09IDApXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gcGFyYW0oJ3RpdGxlJywgaHJlZik7XG5cdFx0fVxuXHRcdGxldCBwcmVmaXggPSBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyk7XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpKSB7XG5cdFx0XHRwcmVmaXggPSBjb25mLndnU2VydmVyICsgcHJlZml4O1xuXHRcdH1cblx0XHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkgJiYgcHJlZml4LnNsaWNlKDAsIDIpID09PSAnLy8nKSB7XG5cdFx0XHRwcmVmaXggPSBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArIHByZWZpeDtcblx0XHR9XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYuc2xpY2UocHJlZml4Lmxlbmd0aCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgaGFzQ2xhc3MgPSAoe2NsYXNzTmFtZX06IHtjbGFzc05hbWU6IHN0cmluZ30sIG5hbWU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdHJldHVybiBgICR7Y2xhc3NOYW1lfSBgLmluY2x1ZGVzKGAgJHtuYW1lfSBgKTtcblx0fTtcblx0Y29uc3Qgc2V0U3R5bGVQcm9wZXJ0eSA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdChlbGVtZW50LnN0eWxlIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPilbcHJvcGVydHldID0gdmFsdWU7XG5cdH07XG5cdGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyPzogc3RyaW5nIHwgbnVsbCk6IHN0cmluZyA9PiB7XG5cdFx0aWYgKCFzdHIgfHwgc3RyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdH07XG5cdGNvbnN0IHdpa2lQYWdlUGF0aCA9IChwYWdlTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VOYW1lKS5yZXBsYWNlKC8lM0EvZywgJzonKS5yZXBsYWNlKC8lMkYvZywgJy8nKSk7XG5cdH07XG5cdGNvbnN0IGVzY2FwZVJFID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoLyhbJCgpKisuP1tcXFxcXFxdXl0pL2csIFN0cmluZy5yYXdgXFwkMWApO1xuXHR9O1xuXHRjb25zdCBzdWJzdGl0dXRlRmFjdG9yeSA9IChvcHRpb25zPzogU3Vic3RpdHV0ZU9wdGlvbnMpOiAoKHN0cjogc3RyaW5nLCBtYXA/OiBTdWJzdGl0dXRlTWFwKSA9PiBzdHJpbmcpID0+IHtcblx0XHRvcHRpb25zIHx8PSB7fTtcblx0XHRjb25zdCBsZWFkID0gb3B0aW9ucy5pbmRpY2F0b3IgfHwgJyQnO1xuXHRcdGNvbnN0IGluZGljYXRvciA9IGVzY2FwZVJFKGxlYWQpO1xuXHRcdGNvbnN0IGxicmFjZSA9IGVzY2FwZVJFKG9wdGlvbnMubGJyYWNlIHx8ICd7Jyk7XG5cdFx0Y29uc3QgcmJyYWNlID0gZXNjYXBlUkUob3B0aW9ucy5yYnJhY2UgfHwgJ30nKTtcblx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoXG5cdFx0XHQvLyAkJCwgJDAvJDEsICR7a2V5fSwgYW5kICRrZXlcblx0XHRcdGAoPzoke2luZGljYXRvcn0oJHtpbmRpY2F0b3J9KSl8YCArXG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oXFxcXGQrKSl8YCArXG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oPzoke2xicmFjZX0oW14ke2xicmFjZX0ke3JicmFjZX1dKykke3JicmFjZX0pKXxgICtcblx0XHRcdFx0YCg/OiR7aW5kaWNhdG9yfSg/ISg/Olske2luZGljYXRvcn0ke2xicmFjZX1dfFxcXFxkKSkoXFxcXFMrPylcXFxcYilgLFxuXHRcdFx0J2cnXG5cdFx0KTtcblx0XHRyZXR1cm4gKHN0cjogc3RyaW5nLCBtYXA/OiBTdWJzdGl0dXRlTWFwKTogc3RyaW5nID0+IHtcblx0XHRcdGlmICghbWFwKSB7XG5cdFx0XHRcdHJldHVybiBzdHI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UocmUsIChtYXRjaDogc3RyaW5nLCBwcmVmaXg6IHN0cmluZywgaWR4OiBzdHJpbmcsIGtleTogc3RyaW5nLCBhbHBoYTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdFx0aWYgKHByZWZpeCA9PT0gbGVhZCkge1xuXHRcdFx0XHRcdHJldHVybiBsZWFkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGsgPSBhbHBoYSB8fCBrZXkgfHwgaWR4O1xuXHRcdFx0XHRjb25zdCByZXBsYWNlbWVudCA9IHR5cGVvZiBtYXBba10gPT09ICdmdW5jdGlvbicgPyBtYXBba10obWF0Y2gsIGspIDogbWFwW2tdO1xuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIHJlcGxhY2VtZW50ID09PSAnc3RyaW5nJyA/IHJlcGxhY2VtZW50IDogcmVwbGFjZW1lbnQgfHwgbWF0Y2g7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHR9O1xuXHRjb25zdCByZXBsYWNlU2hvcnRjdXRzID0gKCgpOiAoKHN0cjogc3RyaW5nLCBtYXA/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgbnVsbCkgPT4gc3RyaW5nKSA9PiB7XG5cdFx0Y29uc3QgcmVwbGFjZUhhc2ggPSBzdWJzdGl0dXRlRmFjdG9yeSh7XG5cdFx0XHRpbmRpY2F0b3I6ICcjJyxcblx0XHRcdGxicmFjZTogJ1snLFxuXHRcdFx0cmJyYWNlOiAnXScsXG5cdFx0fSk7XG5cdFx0cmV0dXJuIChzdHI6IHN0cmluZywgbWFwPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IG51bGwpOiBzdHJpbmcgPT4ge1xuXHRcdFx0Y29uc3QgcyA9IHJlcGxhY2VIYXNoKHN0ciwgbWFwID8/IHVuZGVmaW5lZCk7XG5cdFx0XHRyZXR1cm4gSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA/IGNhcGl0YWxpemUocykgOiBzO1xuXHRcdH07XG5cdH0pKCk7XG5cdHJldHVybiB7XG5cdFx0d2lraVRleHRCbGFuayxcblx0XHR3aWtpVGV4dEJsYW5rUkUsXG5cdFx0d2lraVRleHRCbGFua09yQmlkaSxcblx0XHRtYWtlLFxuXHRcdHBhcmFtLFxuXHRcdHRpdGxlLFxuXHRcdGhhc0NsYXNzLFxuXHRcdHNldFN0eWxlUHJvcGVydHksXG5cdFx0Y2FwaXRhbGl6ZSxcblx0XHR3aWtpUGFnZVBhdGgsXG5cdFx0ZXNjYXBlUkUsXG5cdFx0cmVwbGFjZVNob3J0Y3V0cyxcblx0fTtcbn07XG4iLCAiaW1wb3J0IHR5cGUge0hvdENhdENvbmZpZywgSG90Q2F0U3VnZ2VzdGlvbkNvbmZpZywgSG90Q2F0U3VnZ2VzdGlvbkVuZ2luZSwgSG90Q2F0U3VnZ2VzdGlvblRpdGxlc30gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBIb3RDYXRDYXRlZ29yeU1lbWJlciB7XG5cdHRpdGxlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBIb3RDYXRTdWdnZXN0aW9uUXVlcnlSZXNwb25zZSB7XG5cdHF1ZXJ5Pzoge1xuXHRcdGFsbHBhZ2VzPzogSG90Q2F0Q2F0ZWdvcnlNZW1iZXJbXTtcblx0XHRjYXRlZ29yeW1lbWJlcnM/OiBIb3RDYXRDYXRlZ29yeU1lbWJlcltdO1xuXHRcdHBhZ2VzPzogUmVjb3JkPHN0cmluZywge3RpdGxlOiBzdHJpbmc7IGNhdGVnb3JpZXM/OiBIb3RDYXRDYXRlZ29yeU1lbWJlcltdfT47XG5cdH07XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBjb25maWd1cmVkIHN1Z2dlc3Rpb24gZW5naW5lcyBhbmQgc2VhcmNoIHByZXNldHMuXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVTdWdnZXN0aW9uRGF0YSA9IChcblx0SEM6IEhvdENhdENvbmZpZ1xuKToge1xuXHRzdWdnZXN0aW9uRW5naW5lczogUmVjb3JkPHN0cmluZywgSG90Q2F0U3VnZ2VzdGlvbkVuZ2luZT47XG5cdHN1Z2dlc3Rpb25Db25maWdzOiBSZWNvcmQ8c3RyaW5nLCBIb3RDYXRTdWdnZXN0aW9uQ29uZmlnPjtcbn0gPT4ge1xuXHRsZXQgY2F0UHJlZml4OiBSZWdFeHAgfCBudWxsID0gbnVsbDtcblx0Y29uc3QgdG9DYXRlZ29yeVRpdGxlcyA9IChtZW1iZXJzOiBIb3RDYXRDYXRlZ29yeU1lbWJlcltdKTogSG90Q2F0U3VnZ2VzdGlvblRpdGxlcyA9PiB7XG5cdFx0cmV0dXJuIG1lbWJlcnMubWFwKChtZW1iZXIpID0+IHtcblx0XHRcdHJldHVybiBtZW1iZXIudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgbWVtYmVyLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHR9KSBhcyBIb3RDYXRTdWdnZXN0aW9uVGl0bGVzO1xuXHR9O1xuXHRjb25zdCBzdWdnZXN0aW9uRW5naW5lczogUmVjb3JkPHN0cmluZywgSG90Q2F0U3VnZ2VzdGlvbkVuZ2luZT4gPSB7XG5cdFx0b3BlbnNlYXJjaDoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249b3BlbnNlYXJjaCZuYW1lc3BhY2U9MTQmbGltaXQ9MzAmc2VhcmNoPUNhdGVnb3J5OiQxYCxcblx0XHRcdC8vICQxID0gc2VhcmNoIHRlcm1cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIGNvbnZlcnQgcmVzdWx0IG9mIHVyaSBpbnRvIGFuIGFycmF5IG9mIGNhdGVnb3J5IG5hbWVzXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQ6IHVua25vd24sIHF1ZXJ5S2V5Pzogc3RyaW5nKTogSG90Q2F0U3VnZ2VzdGlvblRpdGxlcyB8IG51bGwgPT4ge1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBxdWVyeVJlc3VsdCBhcyBbc3RyaW5nLCBIb3RDYXRTdWdnZXN0aW9uVGl0bGVzXSB8IG51bGw7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gU3RyaW5nKHJlc3VsdFswXSkuc2xpY2UoTWF0aC5tYXgoMCwgU3RyaW5nKHJlc3VsdFswXSkuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IHJlc3VsdFsxXTtcblx0XHRcdFx0XHRsZXQgZXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdFx0Y2F0UHJlZml4IHx8PSBuZXcgUmVnRXhwKGBeKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGNhdFByZWZpeC5sYXN0SW5kZXggPSAwO1xuXHRcdFx0XHRcdFx0Y29uc3QgbWF0Y2ggPSBjYXRQcmVmaXguZXhlYyh0aXRsZXNbaV0hKTtcblx0XHRcdFx0XHRcdGlmIChtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXSEuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldIS5pbmRleE9mKCc6JykgKyAxKSk7IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSB0aXRsZXNbaV0pIHtcblx0XHRcdFx0XHRcdFx0XHRleGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMuc3BsaWNlKGksIDEpOyAvLyBOb3BlLCBpdCdzIG5vdCBhIGNhdGVnb3J5IGFmdGVyIGFsbC5cblx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aXRsZXMuZXhpc3RzID0gZXhpc3RzO1xuXHRcdFx0XHRcdGlmIChxdWVyeUtleSAhPT0ga2V5KSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMubm9ybWFsaXplZCA9IGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gUmVtZW1iZXIgdGhlIE5GQyBub3JtYWxpemVkIGtleSB3ZSBnb3QgYmFjayBmcm9tIHRoZSBzZXJ2ZXJcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGludGVybmFsc2VhcmNoOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZsaXN0PWFsbHBhZ2VzJmFwbmFtZXNwYWNlPTE0JmFwbGltaXQ9MzAmYXBmcm9tPSQxJmFwcHJlZml4PSQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdDogdW5rbm93bik6IEhvdENhdFN1Z2dlc3Rpb25UaXRsZXMgfCBudWxsID0+IHtcblx0XHRcdFx0Y29uc3QgYWxscGFnZXMgPSAocXVlcnlSZXN1bHQgYXMgSG90Q2F0U3VnZ2VzdGlvblF1ZXJ5UmVzcG9uc2UgfCBudWxsKT8ucXVlcnk/LmFsbHBhZ2VzO1xuXHRcdFx0XHRyZXR1cm4gYWxscGFnZXMgPyB0b0NhdGVnb3J5VGl0bGVzKGFsbHBhZ2VzKSA6IG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0ZXhpc3RzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZwcm9wPWluZm8mdGl0bGVzPUNhdGVnb3J5OiQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdDogdW5rbm93biwgcXVlcnlLZXk/OiBzdHJpbmcpOiBIb3RDYXRTdWdnZXN0aW9uVGl0bGVzIHwgbnVsbCA9PiB7XG5cdFx0XHRcdGNvbnN0IHtwYWdlc30gPSAocXVlcnlSZXN1bHQgYXMgSG90Q2F0U3VnZ2VzdGlvblF1ZXJ5UmVzcG9uc2UgfCBudWxsKT8ucXVlcnkgPz8ge307XG5cdFx0XHRcdGlmICghcGFnZXMgfHwgcGFnZXNbJy0xJ10pIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBTaG91bGQgaGF2ZSBleGFjdGx5IDFcblx0XHRcdFx0Zm9yIChjb25zdCBwIGluIHBhZ2VzKSB7XG5cdFx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHBhZ2VzLCBwKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxldCB0aXRsZTogc3RyaW5nID0gcGFnZXNbcF0hLnRpdGxlO1xuXHRcdFx0XHRcdHRpdGxlID0gdGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlczogSG90Q2F0U3VnZ2VzdGlvblRpdGxlcyA9IFt0aXRsZV07XG5cdFx0XHRcdFx0dGl0bGVzLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKHF1ZXJ5S2V5ICE9PSB0aXRsZSkge1xuXHRcdFx0XHRcdFx0dGl0bGVzLm5vcm1hbGl6ZWQgPSB0aXRsZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gTkZDXG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRzdWJjYXRlZ29yaWVzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZsaXN0PWNhdGVnb3J5bWVtYmVycyZjbXR5cGU9c3ViY2F0JmNtbGltaXQ9bWF4JmNtdGl0bGU9Q2F0ZWdvcnk6JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0OiB1bmtub3duKTogSG90Q2F0U3VnZ2VzdGlvblRpdGxlcyB8IG51bGwgPT4ge1xuXHRcdFx0XHRjb25zdCBjYXRlZ29yeW1lbWJlcnMgPSAocXVlcnlSZXN1bHQgYXMgSG90Q2F0U3VnZ2VzdGlvblF1ZXJ5UmVzcG9uc2UgfCBudWxsKT8ucXVlcnk/LmNhdGVnb3J5bWVtYmVycztcblx0XHRcdFx0cmV0dXJuIGNhdGVnb3J5bWVtYmVycyA/IHRvQ2F0ZWdvcnlUaXRsZXMoY2F0ZWdvcnltZW1iZXJzKSA6IG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0cGFyZW50Y2F0ZWdvcmllczoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmcHJvcD1jYXRlZ29yaWVzJnRpdGxlcz1DYXRlZ29yeTokMSZjbGxpbWl0PW1heGAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQ6IHVua25vd24pOiBIb3RDYXRTdWdnZXN0aW9uVGl0bGVzIHwgbnVsbCA9PiB7XG5cdFx0XHRcdGNvbnN0IHtwYWdlc30gPSAocXVlcnlSZXN1bHQgYXMgSG90Q2F0U3VnZ2VzdGlvblF1ZXJ5UmVzcG9uc2UgfCBudWxsKT8ucXVlcnkgPz8ge307XG5cdFx0XHRcdGlmICghcGFnZXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGNvbnN0IHAgaW4gcGFnZXMpIHtcblx0XHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocGFnZXMsIHApKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3Qge2NhdGVnb3JpZXN9ID0gcGFnZXNbcF0hO1xuXHRcdFx0XHRcdGlmIChjYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdG9DYXRlZ29yeVRpdGxlcyhjYXRlZ29yaWVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cdGNvbnN0IHN1Z2dlc3Rpb25Db25maWdzOiBSZWNvcmQ8c3RyaW5nLCBIb3RDYXRTdWdnZXN0aW9uQ29uZmlnPiA9IHtcblx0XHRzZWFyY2hpbmRleDoge1xuXHRcdFx0bmFtZTogJ1NlYXJjaCBpbmRleCcsXG5cdFx0XHRlbmdpbmVzOiBbJ29wZW5zZWFyY2gnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRwYWdlbGlzdDoge1xuXHRcdFx0bmFtZTogJ1BhZ2UgbGlzdCcsXG5cdFx0XHRlbmdpbmVzOiBbJ2ludGVybmFsc2VhcmNoJywgJ2V4aXN0cyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdGNvbWJpbmVkOiB7XG5cdFx0XHRuYW1lOiAnQ29tYmluZWQgc2VhcmNoJyxcblx0XHRcdGVuZ2luZXM6IFsnb3BlbnNlYXJjaCcsICdpbnRlcm5hbHNlYXJjaCddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdHN1YmNhdDoge1xuXHRcdFx0bmFtZTogJ1N1YmNhdGVnb3JpZXMnLFxuXHRcdFx0ZW5naW5lczogWydzdWJjYXRlZ29yaWVzJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogdHJ1ZSxcblx0XHRcdG5vQ29tcGxldGlvbjogdHJ1ZSxcblx0XHR9LFxuXHRcdHBhcmVudGNhdDoge1xuXHRcdFx0bmFtZTogJ1BhcmVudCBjYXRlZ29yaWVzJyxcblx0XHRcdGVuZ2luZXM6IFsncGFyZW50Y2F0ZWdvcmllcyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IHRydWUsXG5cdFx0XHRub0NvbXBsZXRpb246IHRydWUsXG5cdFx0fSxcblx0fTtcblx0cmV0dXJuIHtzdWdnZXN0aW9uRW5naW5lcywgc3VnZ2VzdGlvbkNvbmZpZ3N9O1xufTtcbiIsICIvKiFcbiAqIEBkZXNjcmlwdGlvbiBBamF4LWJhc2VkIHNpbXBsZSBDYXRlZ29yeSBtYW5hZ2VyLiBBbGxvd3MgYWRkaW5nL3JlbW92aW5nL2NoYW5naW5nIGNhdGVnb3JpZXMgb24gYSBwYWdlIHZpZXcuXG4gKiBTdXBwb3J0cyBtdWx0aXBsZSBjYXRlZ29yeSBjaGFuZ2VzLCBhcyB3ZWxsIGFzIHJlZGlyZWN0IGFuZCBkaXNhbWJpZ3VhdGlvbiByZXNvbHV0aW9uLiBBbHNvXG4gKiBwbHVncyBpbnRvIHRoZSB1cGxvYWQgZm9ybS4gU2VhcmNoIGVuZ2luZXMgdG8gdXNlIGZvciB0aGUgc3VnZ2VzdGlvbiBsaXN0IGFyZSBjb25maWd1cmFibGUsIGFuZFxuICogY2FuIGJlIHNlbGVjdGVkIGludGVyYWN0aXZlbHkuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9IZWxwOkdhZGdldC1Ib3RDYXR9XG4gKiBAYXV0aG9yIGF1dGhvcnMgPGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvSGVscDpHYWRnZXQtSG90Q2F0L1ZlcnNpb25faGlzdG9yeT5cbiAqL1xuaW1wb3J0ICcuL21vZHVsZXMvY2hlY2snO1xuaW1wb3J0ICcuL21vZHVsZXMvbWVzc2FnZXMnO1xuaW1wb3J0IHR5cGUge1xuXHRIb3RDYXRBcGlQYWdlLFxuXHRIb3RDYXRBcGlRdWVyeVJlc3BvbnNlLFxuXHRIb3RDYXRNd0NvbmZpZyxcblx0SG90Q2F0U3VnZ2VzdGlvbkNhbGxiYWNrLFxuXHRIb3RDYXRTdWdnZXN0aW9uRW5naW5lLFxuXHRIb3RDYXRTdWdnZXN0aW9uVGl0bGVzLFxufSBmcm9tICcuL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHt0eXBlIEhvdENhdENhdGVnb3J5TWF0Y2hlcywgdHlwZSBIb3RDYXRDaGFuZ2VSZXN1bHQsIGNyZWF0ZUNhdGVnb3J5VGV4dFRvb2xzfSBmcm9tICcuL21vZHVsZXMvY2F0ZWdvcnlUZXh0JztcbmltcG9ydCB7Y3JlYXRlSG90Q2F0Q29uZmlnfSBmcm9tICcuL21vZHVsZXMvY29uZmlndXJhdGlvbic7XG5pbXBvcnQge2NyZWF0ZUhvdENhdFV0aWxpdGllc30gZnJvbSAnLi9tb2R1bGVzL3V0aWxpdGllcyc7XG5pbXBvcnQge2NyZWF0ZVN1Z2dlc3Rpb25EYXRhfSBmcm9tICcuL21vZHVsZXMvc3VnZ2VzdGlvbnMnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvZ2V0TWVzc2FnZSc7XG5pbXBvcnQge213QXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcblxuLy8gTWFpbiBib2R5XG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGhvdENhdCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Ly8gRG9uJ3QgdXNlIG13LmNvbmZpZy5nZXQoKSBhcyB0aGF0IHRha2VzIGEgY29weSBvZiB0aGUgY29uZmlnLCBhbmQgc28gZG9lc24ndFxuXHQvLyBhY2NvdW50IGZvciB2YWx1ZXMgY2hhbmdpbmcsIGUuZy4gd2dDdXJSZXZpc2lvbklkIGFmdGVyIGEgVkUgZWRpdFxuXHRjb25zdCBjb25mOiBIb3RDYXRNd0NvbmZpZyA9IG13LmNvbmZpZ1sndmFsdWVzJ107XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKCh3aW5kb3cuSG90Q2F0ICYmICEod2luZG93LkhvdENhdCBhcyB1bmtub3duIGFzIHtub2RlTmFtZT86IHN0cmluZ30pLm5vZGVOYW1lKSB8fCBjb25mLndnQWN0aW9uID09PSAnZWRpdCcpIHtcblx0XHRyZXR1cm47IC8vIE5vdCBvbiBlZGl0IG1vZGVcblx0fVxuXHQvLyBJbml0aWFsaXplIE1lZGlhV2lraSBBUElcblx0Y29uc3QgYXBpID0gbXdBcGkoJ0hvdENhdC8zLjAnKTtcblx0Y29uc3QgSEMgPSBjcmVhdGVIb3RDYXRDb25maWcoY29uZik7XG5cdHdpbmRvdy5Ib3RDYXQgPSBIQztcblx0Ly8gTW9yZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gV2UgaGF2ZSBhIGZldyBwbGFjZXMgd2hlcmUgd2UgdGVzdCBmb3IgdGhlIGJyb3dzZXI6IG9uY2UgZm9yXG5cdC8vIFNhZmFyaSA8IDMuMCwgYW5kIHR3aWNlIGZvciBXZWJLaXQgKENocm9tZSBvciBTYWZhcmksIGFueSB2ZXJzaW9ucylcblx0Y29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG5cdGNvbnN0IGlzX3dlYmtpdCA9IC9hcHBsZXdlYmtpdFxcL1xcZCsvLnRlc3QodWEpICYmICF1YS5pbmNsdWRlcygnc3Bvb2ZlcicpO1xuXHRsZXQgbm9TdWdnZXN0aW9ucyA9IGZhbHNlO1xuXHQvLyBObyBmdXJ0aGVyIGNoYW5nZXMgc2hvdWxkIGJlIG5lY2Vzc2FyeSBoZXJlLlxuXHQvLyBUaGUgZm9sbG93aW5nIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmdzIGFyZSB1c2VkIHdoZW4gc2VhcmNoaW5nIGZvciBjYXRlZ29yaWVzIGluIHdpa2l0ZXh0LlxuXHRjb25zdCB7XG5cdFx0d2lraVRleHRCbGFuayxcblx0XHR3aWtpVGV4dEJsYW5rUkUsXG5cdFx0d2lraVRleHRCbGFua09yQmlkaSxcblx0XHRtYWtlLFxuXHRcdHBhcmFtLFxuXHRcdHRpdGxlLFxuXHRcdGhhc0NsYXNzLFxuXHRcdHNldFN0eWxlUHJvcGVydHksXG5cdFx0Y2FwaXRhbGl6ZSxcblx0XHR3aWtpUGFnZVBhdGgsXG5cdFx0ZXNjYXBlUkUsXG5cdFx0cmVwbGFjZVNob3J0Y3V0cyxcblx0fSA9IGNyZWF0ZUhvdENhdFV0aWxpdGllcyhjb25mLCBIQyk7XG5cdGxldCBpbnRlcmxhbmd1YWdlUkU6IFJlZ0V4cCB8IG51bGwgPSBudWxsO1xuXHRjb25zdCB7ZmluZF9jYXRlZ29yeSwgY2hhbmdlX2NhdGVnb3J5fSA9IGNyZWF0ZUNhdGVnb3J5VGV4dFRvb2xzKFxuXHRcdEhDLFxuXHRcdHdpa2lUZXh0QmxhbmssXG5cdFx0d2lraVRleHRCbGFua1JFLFxuXHRcdHdpa2lUZXh0QmxhbmtPckJpZGksXG5cdFx0ZXNjYXBlUkUsXG5cdFx0KCkgPT4gaW50ZXJsYW5ndWFnZVJFXG5cdCk7XG5cdC8vIFRoZSByZWFsIEhvdENhdCBVSVxuXHRpbnRlcmZhY2UgSG90Q2F0VUlFdmVudCB7XG5cdFx0Y3RybEtleT86IGJvb2xlYW47XG5cdFx0bWV0YUtleT86IGJvb2xlYW47XG5cdFx0c2hpZnRLZXk/OiBib29sZWFuO1xuXHRcdHByZXZlbnREZWZhdWx0PzogKCkgPT4gdm9pZDtcblx0XHRzdG9wUHJvcGFnYXRpb24/OiAoKSA9PiB2b2lkO1xuXHRcdGNhbmNlbEJ1YmJsZT86IGJvb2xlYW47XG5cdH1cblx0aW50ZXJmYWNlIEhvdENhdENvbW1pdEZvcm0gZXh0ZW5kcyBIVE1MRm9ybUVsZW1lbnQge1xuXHRcdHdwVGV4dGJveDE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG5cdFx0d3BTdW1tYXJ5OiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwTWlub3JlZGl0OiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwV2F0Y2h0aGlzOiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwQXV0b1N1bW1hcnk6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0d3BDaGFuZ2VUYWdzOiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwU3RhcnR0aW1lOiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwRWRpdHRpbWU6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0b2xkaWQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0d3BFZGl0VG9rZW46IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0d3BEaWZmOiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwU2F2ZTogSFRNTElucHV0RWxlbWVudDtcblx0XHRoY0NvbW1pdDogSFRNTElucHV0RWxlbWVudDtcblx0fVxuXHR0eXBlIEhvdENhdEZhaWx1cmUgPSAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuXHRjb25zdCBldnRLZXlzID0gKGV2ZW50PzogSG90Q2F0VUlFdmVudCk6IG51bWJlciA9PiB7XG5cdFx0Y29uc3Qge2N0cmxLZXksIG1ldGFLZXksIHNoaWZ0S2V5fSA9IGV2ZW50ID8/IHt9O1xuXHRcdGxldCBjb2RlID0gMDtcblx0XHRpZiAoY3RybEtleSkge1xuXHRcdFx0Ly8gQWxsIG1vZGVybiBicm93c2Vyc1xuXHRcdFx0Ly8gQ3RybC1jbGljayBzZWVtcyB0byBiZSBvdmVybG9hZGVkIGluIEZGL01hYyAoaXQgb3BlbnMgYSBwb3AtdXAgbWVudSksIHNvIHRyZWF0IGNtZC1jbGlja1xuXHRcdFx0Ly8gYXMgYSBjdHJsLWNsaWNrLCB0b28uXG5cdFx0XHRpZiAoY3RybEtleSB8fCBtZXRhS2V5KSB7XG5cdFx0XHRcdGNvZGUgfHw9IDE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2hpZnRLZXkpIHtcblx0XHRcdFx0Y29kZSB8fD0gMjtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNvZGU7XG5cdH07XG5cdGNvbnN0IGV2dEtpbGwgPSAoZXZlbnQ/OiBIb3RDYXRVSUV2ZW50KTogZmFsc2UgPT4ge1xuXHRcdGlmIChldmVudD8ucHJldmVudERlZmF1bHQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24/LigpO1xuXHRcdH0gZWxzZSBpZiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0bGV0IGNhdExpbmU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7IC8vIHRydWUgaWYgTWVkaWFXaWtpIHNlcnZlcyB0aGUgbmV3IFVMLUxJIERPTSBmb3IgY2F0ZWdvcmllc1xuXHRsZXQgb25VcGxvYWQgPSBmYWxzZTtcblx0bGV0IGVkaXRvcnM6IENhdGVnb3J5RWRpdG9yW10gPSBbXTtcblx0bGV0IGNvbW1pdEJ1dHRvbjogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRsZXQgY29tbWl0Rm9ybTogSG90Q2F0Q29tbWl0Rm9ybSB8IG51bGwgPSBudWxsO1xuXHRsZXQgbXVsdGlTcGFuOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRsZXQgcGFnZVRleHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRsZXQgcGFnZVRpbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRsZXQgcGFnZVdhdGNoZWQgPSBmYWxzZTtcblx0bGV0IHdhdGNoQ3JlYXRlID0gZmFsc2U7XG5cdGxldCB3YXRjaEVkaXQgPSBmYWxzZTtcblx0bGV0IG1pbm9yRWRpdHMgPSBmYWxzZTtcblx0bGV0IGVkaXRUb2tlbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdGxldCBpc19ydGwgPSBmYWxzZTtcblx0bGV0IHNlcnZlclRpbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRsZXQgbGFzdFJldklkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblx0bGV0IHBhZ2VUZXh0UmV2SWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXHRsZXQgY29uZmxpY3RpbmdVc2VyOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0bGV0IG5ld0RPTSA9IGZhbHNlO1xuXHRjb25zdCBVTkNIQU5HRUQgPSAwO1xuXHRjb25zdCBPUEVOID0gMTsgLy8gT3BlbiwgYnV0IG5vIGlucHV0IHlldFxuXHRjb25zdCBDSEFOR0VfUEVORElORyA9IDI7IC8vIE9wZW4sIHNvbWUgaW5wdXQgbWFkZVxuXHRjb25zdCBDSEFOR0VEID0gMztcblx0Y29uc3QgREVMRVRFRCA9IDQ7XG5cdGNvbnN0IHNldFBhZ2UgPSAoZGF0YTogSG90Q2F0QXBpUXVlcnlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdGxldCBzdGFydFRpbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRcdGlmIChkYXRhICYmIGRhdGEucXVlcnkpIHtcblx0XHRcdGlmIChkYXRhLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGEucXVlcnkucGFnZXMgYXMgSG90Q2F0QXBpUGFnZVtdO1xuXHRcdFx0XHRpZiAocGFnZSkge1xuXHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9ucyAmJiBwYWdlLnJldmlzaW9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHQvLyBSZXZpc2lvbnMgYXJlIHNvcnRlZCBieSByZXZpc2lvbiBJRCwgaGVuY2UgWzBdIGlzIHRoZSBvbmUgd2UgYXNrZWQgZm9yLCBhbmQgcG9zc2libHkgdGhlcmUncyBhIFsxXSBpZiB3ZSdyZVxuXHRcdFx0XHRcdFx0Ly8gbm90IG9uIHRoZSBsYXRlc3QgcmV2aXNpb24gKGVkaXQgY29uZmxpY3RzIGFuZCBzdWNoKS5cblx0XHRcdFx0XHRcdGNvbnN0IFtsYXRlc3RSZXZpc2lvbiwgY29uZmxpY3RpbmdSZXZpc2lvbl0gPSBwYWdlLnJldmlzaW9ucztcblx0XHRcdFx0XHRcdHBhZ2VUZXh0ID0gbGF0ZXN0UmV2aXNpb24hLnNsb3RzLm1haW4uY29udGVudDtcblx0XHRcdFx0XHRcdGlmIChsYXRlc3RSZXZpc2lvbiEudGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0XHRcdHBhZ2VUaW1lID0gbGF0ZXN0UmV2aXNpb24hLnRpbWVzdGFtcC5yZXBsYWNlKC9cXEQvZywgJycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGxhdGVzdFJldmlzaW9uIS5yZXZpZCkge1xuXHRcdFx0XHRcdFx0XHRwYWdlVGV4dFJldklkID0gbGF0ZXN0UmV2aXNpb24hLnJldmlkO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zLmxlbmd0aCA+IDEgJiYgY29uZmxpY3RpbmdSZXZpc2lvbikge1xuXHRcdFx0XHRcdFx0XHRjb25mbGljdGluZ1VzZXIgPSBjb25mbGljdGluZ1JldmlzaW9uLnVzZXIgPz8gbnVsbDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFzdHJldmlkKSB7XG5cdFx0XHRcdFx0XHRsYXN0UmV2SWQgPSBwYWdlLmxhc3RyZXZpZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2Uuc3RhcnR0aW1lc3RhbXApIHtcblx0XHRcdFx0XHRcdHN0YXJ0VGltZSA9IHBhZ2Uuc3RhcnR0aW1lc3RhbXAucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cGFnZVdhdGNoZWQgPSB0eXBlb2YgcGFnZS53YXRjaGVkID09PSAnc3RyaW5nJztcblx0XHRcdFx0XHRpZiAoZGF0YS5xdWVyeS50b2tlbnMpIHtcblx0XHRcdFx0XHRcdGVkaXRUb2tlbiA9IGRhdGEucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFuZ2xpbmtzICYmICghZGF0YVsncXVlcnktY29udGludWUnXSB8fCAhZGF0YVsncXVlcnktY29udGludWUnXS5sYW5nbGlua3MpKSB7XG5cdFx0XHRcdFx0XHQvLyBXZSBoYXZlIGludGVybGFuZ3VhZ2UgbGlua3MsIGFuZCB3ZSBnb3QgdGhlbSBhbGwuXG5cdFx0XHRcdFx0XHRsZXQgcmUgPSAnJztcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgbGFuZ2xpbmsgb2YgcGFnZS5sYW5nbGlua3MpIHtcblx0XHRcdFx0XHRcdFx0cmUgKz1cblx0XHRcdFx0XHRcdFx0XHQocmUubGVuZ3RoID4gMCA/ICd8JyA6ICcnKSArIGxhbmdsaW5rLmxhbmcucmVwbGFjZSgvKFskKCkqKy4/XFxcXF5dKS9nLCBTdHJpbmcucmF3YFxcJDFgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChyZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGludGVybGFuZ3VhZ2VSRSA9IG5ldyBSZWdFeHAoYCgoXnxcXFxcblxcXFxyPykoXFxcXFtcXFxcW1xcXFxzKigke3JlfSlcXFxccyo6W15cXFxcXV0rXFxcXF1cXFxcXVxcXFxzKikpKyRgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIFNpdGVpbmZvXG5cdFx0XHRpZiAoZGF0YS5xdWVyeS5nZW5lcmFsKSB7XG5cdFx0XHRcdGlmIChkYXRhLnF1ZXJ5LmdlbmVyYWwudGltZSAmJiAhc3RhcnRUaW1lKSB7XG5cdFx0XHRcdFx0c3RhcnRUaW1lID0gZGF0YS5xdWVyeS5nZW5lcmFsLnRpbWUucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFJlc291cmNlTG9hZGVyJ3MgSlNQYXJzZXIgZG9lc24ndCBsaWtlIC5jYXNlLCBzbyBvdmVycmlkZSBlc2xpbnQuXG5cdFx0XHRcdFx0SEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA9IGRhdGEucXVlcnkuZ2VuZXJhbC5jYXNlID09PSAnZmlyc3QtbGV0dGVyJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2VydmVyVGltZSA9IHN0YXJ0VGltZTtcblx0XHRcdC8vIFVzZXJpbmZvXG5cdFx0XHRjb25zdCB7b3B0aW9uc30gPSBkYXRhLnF1ZXJ5LnVzZXJpbmZvID8/IHt9O1xuXHRcdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdFx0d2F0Y2hDcmVhdGUgPSAhSEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ICYmIG9wdGlvbnMud2F0Y2hjcmVhdGlvbnMgPT09ICcxJztcblx0XHRcdFx0d2F0Y2hFZGl0ID0gIUhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCAmJiBvcHRpb25zLndhdGNoZGVmYXVsdCA9PT0gJzEnO1xuXHRcdFx0XHRtaW5vckVkaXRzID0gb3B0aW9ucy5taW5vcmRlZmF1bHQgPT09IDE7XG5cdFx0XHRcdC8vIElmIHRoZSB1c2VyIGhhcyB0aGUgXCJBbGwgZWRpdHMgYXJlIG1pbm9yXCIgcHJlZmVyZW5jZSBlbmFibGVkLCB3ZSBzaG91bGQgaG9ub3IgdGhhdFxuXHRcdFx0XHQvLyBmb3Igc2luZ2xlIGNhdGVnb3J5IGNoYW5nZXMsIG5vIG1hdHRlciB3aGF0IHRoZSBzaXRlIGNvbmZpZ3VyYXRpb24gaXMuXG5cdFx0XHRcdGlmIChtaW5vckVkaXRzKSB7XG5cdFx0XHRcdFx0SEMuc2luZ2xlX21pbm9yID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0bGV0IHNhdmVJblByb2dyZXNzID0gZmFsc2U7XG5cdGNvbnN0IGluaXRpYXRlRWRpdCA9IChkb0VkaXQ6IChmYWlsdXJlOiBIb3RDYXRGYWlsdXJlKSA9PiB2b2lkLCBmYWlsdXJlOiBIb3RDYXRGYWlsdXJlKTogdm9pZCA9PiB7XG5cdFx0aWYgKHNhdmVJblByb2dyZXNzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNhdmVJblByb2dyZXNzID0gdHJ1ZTtcblx0XHRsZXQgb2xkQnV0dG9uU3RhdGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0b2xkQnV0dG9uU3RhdGUgPSBjb21taXRCdXR0b24uZGlzYWJsZWQ7XG5cdFx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBmYWlsID0gKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0c2F2ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblx0XHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gb2xkQnV0dG9uU3RhdGUgPz8gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRmYWlsdXJlKG1lc3NhZ2UpO1xuXHRcdH07XG5cdFx0Ly8gTXVzdCB1c2UgQWpheCBoZXJlIHRvIGdldCB0aGUgdXNlciBvcHRpb25zIGFuZCB0aGUgZWRpdCB0b2tlbi5cblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRyYXdjb250aW51ZTogJycsXG5cdFx0XHR0aXRsZXM6IGNvbmYud2dQYWdlTmFtZSxcblx0XHRcdHByb3A6IFsnaW5mbycsICdyZXZpc2lvbnMnLCAnbGFuZ2xpbmtzJ10sXG5cdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCcsICdpZHMnLCAndXNlciddLFxuXHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0cnZsaW1pdDogJzInLFxuXHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRydnN0YXJ0aWQ6IGNvbmYud2dDdXJSZXZpc2lvbklkLFxuXHRcdFx0bGxsaW1pdDogJzUwMCcsXG5cdFx0XHRtZXRhOiBbJ3NpdGVpbmZvJywgJ3VzZXJpbmZvJywgJ3Rva2VucyddLFxuXHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0dWlwcm9wOiBbJ29wdGlvbnMnXSxcblx0XHR9O1xuXHRcdGFwaS5nZXQocGFyYW1zKVxuXHRcdFx0LmRvbmUoKGRhdGEpID0+IHtcblx0XHRcdFx0c2V0UGFnZShkYXRhIGFzIEhvdENhdEFwaVF1ZXJ5UmVzcG9uc2UpO1xuXHRcdFx0XHRkb0VkaXQoZmFpbCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKGVycm9yOiB1bmtub3duKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHtzdGF0dXMsIHN0YXR1c1RleHR9ID0gKGVycm9yID8/IHt9KSBhcyB7c3RhdHVzPzogbnVtYmVyOyBzdGF0dXNUZXh0Pzogc3RyaW5nfTtcblx0XHRcdFx0ZmFpbChgJHtzdGF0dXMgPz8gJyd9ICR7c3RhdHVzVGV4dCA/PyAnJ31gKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBtdWx0aUNoYW5nZU1zZyA9IChjb3VudDogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtbXVsdGlfY2hhbmdlJywgU3RyaW5nKGNvdW50KSk7XG5cdH07XG5cdGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSAoKTogc3RyaW5nID0+IHtcblx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdGxldCB0cyA9IFN0cmluZyhub3cuZ2V0VVRDRnVsbFllYXIoKSk7XG5cdFx0Y29uc3QgdHdvID0gKHM6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gcy5zbGljZSgtMik7XG5cdFx0fTtcblx0XHR0cyArPVxuXHRcdFx0dHdvKGAwJHtub3cuZ2V0VVRDTW9udGgoKSArIDF9YCkgK1xuXHRcdFx0dHdvKGAwJHtub3cuZ2V0VVRDRGF0ZSgpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENIb3VycygpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENNaW51dGVzKCl9YCkgK1xuXHRcdFx0dHdvKGAwMCR7bm93LmdldFVUQ1NlY29uZHMoKX1gKTtcblx0XHRyZXR1cm4gdHM7XG5cdH07XG5cdGNvbnN0IHBlcmZvcm1DaGFuZ2VzID0gKGZhaWx1cmU6IEhvdENhdEZhaWx1cmUsIHNpbmdsZUVkaXRvcj86IENhdGVnb3J5RWRpdG9yKTogdm9pZCA9PiB7XG5cdFx0aWYgKHBhZ2VUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRmYWlsdXJlKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLW11bHRpX2Vycm9yJykpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBDcmVhdGUgYSBmb3JtIGFuZCBzdWJtaXQgaXQuIFdlIGRvbid0IHVzZSB0aGUgZWRpdCBBUEkgKGFwaS5waHA/YWN0aW9uPWVkaXQpIGJlY2F1c2Vcblx0XHQvLyAoYSkgc2Vuc2libHkgcmVwb3J0aW5nIGJhY2sgZXJyb3JzIGxpa2UgZWRpdCBjb25mbGljdHMgaXMgYWx3YXlzIGEgaGFzc2xlLCBhbmRcblx0XHQvLyAoYikgd2Ugd2FudCB0byBzaG93IGEgZGlmZiBmb3IgbXVsdGktZWRpdHMgYW55d2F5LCBhbmRcblx0XHQvLyAoYykgd2Ugd2FudCB0byB0cmlnZ2VyIG9uc3VibWl0IGV2ZW50cywgYWxsb3dpbmcgdXNlciBjb2RlIHRvIGludGVyY2VwdCB0aGUgZWRpdC5cblx0XHQvLyBVc2luZyB0aGUgZm9ybSwgd2UgY2FuIGRvIChiKSBhbmQgKGMpLCBhbmQgd2UgZ2V0IChhKSBmb3IgZnJlZS4gQW5kLCBvZiBjb3Vyc2UsIHVzaW5nIHRoZSBmb3JtXG5cdFx0Ly8gYXV0b21hdGljYWxseSByZWxvYWRzIHRoZSBwYWdlIHdpdGggdGhlIHVwZGF0ZWQgY2F0ZWdvcmllcyBvbiBhIHN1Y2Nlc3NmdWwgc3VibWl0LCB3aGljaFxuXHRcdC8vIHdlIHdvdWxkIGhhdmUgdG8gZG8gZXhwbGljaXRseSBpZiB3ZSB1c2VkIHRoZSBlZGl0IEFQSS5cblx0XHRsZXQgYWN0aW9uOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHRcdC8vIE5vcm1hbGx5LCB3ZSBkb24ndCBoYXZlIHRvIGNhcmUgYWJvdXQgZWRpdCBjb25mbGljdHMuIElmIHNvbWUgb3RoZXIgdXNlciBlZGl0ZWQgdGhlIHBhZ2UgaW4gdGhlIG1lYW50aW1lLCB0aGVcblx0XHQvLyBzZXJ2ZXIgd2lsbCB0YWtlIGNhcmUgb2YgaXQgYW5kIG1lcmdlIHRoZSBlZGl0IGF1dG9tYXRpY2FsbHkgb3IgcHJlc2VudCBhbiBlZGl0IGNvbmZsaWN0IHNjcmVlbi4gSG93ZXZlciwgdGhlXG5cdFx0Ly8gc2VydmVyIHN1cHByZXNzZXMgZWRpdCBjb25mbGljdHMgd2l0aCBvbmVzZWxmLiBIZW5jZSwgaWYgd2UgaGF2ZSBhIGNvbmZsaWN0LCBhbmQgdGhlIGNvbmZsaWN0aW5nIHVzZXIgaXMgdGhlXG5cdFx0Ly8gY3VycmVudCB1c2VyLCB0aGVuIHdlIHNldCB0aGUgXCJvbGRpZFwiIHZhbHVlIGFuZCBzd2l0Y2ggdG8gZGlmZiwgd2hpY2ggZ2l2ZXMgdGhlIFwieW91IGFyZSBlZGl0aW5nIGFuIG9sZCB2ZXJzaW9uO1xuXHRcdC8vIGlmIHlvdSBzYXZlLCBhbnkgbW9yZSByZWNlbnQgY2hhbmdlcyB3aWxsIGJlIGxvc3RcIiBzY3JlZW4uXG5cdFx0Y29uc3Qgc2VsZkVkaXRDb25mbGljdCA9ICEhKFxuXHRcdFx0KChsYXN0UmV2SWQgIT09IG51bGwgJiYgbGFzdFJldklkICE9PSBjb25mLndnQ3VyUmV2aXNpb25JZCkgfHxcblx0XHRcdFx0KHBhZ2VUZXh0UmV2SWQgIT09IG51bGwgJiYgcGFnZVRleHRSZXZJZCAhPT0gY29uZi53Z0N1clJldmlzaW9uSWQpKSAmJlxuXHRcdFx0Y29uZmxpY3RpbmdVc2VyICYmXG5cdFx0XHRjb25mbGljdGluZ1VzZXIgPT09IGNvbmYud2dVc2VyTmFtZVxuXHRcdCk7XG5cdFx0aWYgKHNpbmdsZUVkaXRvciAmJiAhc2luZ2xlRWRpdG9yLm5vQ29tbWl0ICYmICFIQy5ub19hdXRvY29tbWl0ICYmIGVkaXRUb2tlbiAmJiAhc2VsZkVkaXRDb25mbGljdCkge1xuXHRcdFx0Ly8gSWYgd2UgZG8gaGF2ZSBhbiBlZGl0IGNvbmZsaWN0LCBidXQgbm90IHdpdGggb3Vyc2VsZiwgdGhhdCdzIG5vIHJlYXNvbiBub3QgdG8gYXR0ZW1wdCB0byBzYXZlOiB0aGUgc2VydmVyIHNpZGUgbWF5IGFjdHVhbGx5IGJlIGFibGUgdG9cblx0XHRcdC8vIG1lcmdlIHRoZSBjaGFuZ2VzLiBXZSBqdXN0IG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgd2UgZG8gcHJlc2VudCBhIGRpZmYgdmlldyBpZiBpdCdzIGEgc2VsZiBlZGl0IGNvbmZsaWN0LlxuXHRcdFx0Y29tbWl0Rm9ybSEud3BFZGl0VG9rZW4udmFsdWUgPSBlZGl0VG9rZW47XG5cdFx0XHRhY3Rpb24gPSBjb21taXRGb3JtIS53cERpZmY7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cFNhdmUnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybSEud3BTYXZlO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCByZXN1bHQ6IEhvdENhdENoYW5nZVJlc3VsdCA9IHtcblx0XHRcdHRleHQ6IHBhZ2VUZXh0LFxuXHRcdFx0c3VtbWFyeTogW10sXG5cdFx0XHRlcnJvcjogbnVsbCxcblx0XHR9O1xuXHRcdGNvbnN0IGNoYW5nZWQ6IHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10gPSBbXTtcblx0XHRjb25zdCBhZGRlZDogc3RyaW5nW10gPSBbXTtcblx0XHRjb25zdCBkZWxldGVkOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGNvbnN0IHRvRWRpdCA9IHNpbmdsZUVkaXRvciA/IFtzaW5nbGVFZGl0b3JdIDogZWRpdG9ycztcblx0XHRsZXQgZWRpdDogQ2F0ZWdvcnlFZGl0b3I7XG5cdFx0bGV0IGk6IG51bWJlcjtcblx0XHRsZXQgZXJyb3I6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRcdGxldCBjaGFuZ2VzID0gMDtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9FZGl0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRlZGl0ID0gdG9FZGl0W2ldITtcblx0XHRcdGlmIChlZGl0LnN0YXRlID09PSBDSEFOR0VEKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShcblx0XHRcdFx0XHRyZXN1bHQudGV4dCxcblx0XHRcdFx0XHRlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50Q2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50S2V5LFxuXHRcdFx0XHRcdGVkaXQuY3VycmVudEhpZGRlblxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoIXJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRcdGNoYW5nZXMrKztcblx0XHRcdFx0XHRpZiAoIWVkaXQub3JpZ2luYWxDYXRlZ29yeSB8fCBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRhZGRlZFthZGRlZC5sZW5ndGhdID0gZWRpdC5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNoYW5nZWRbY2hhbmdlZC5sZW5ndGhdID0ge1xuXHRcdFx0XHRcdFx0XHRmcm9tOiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0XHRcdHRvOiBlZGl0LmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGVkaXQuc3RhdGUgPT09IERFTEVURUQgJiYgZWRpdC5vcmlnaW5hbENhdGVnb3J5ICYmIGVkaXQub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShyZXN1bHQudGV4dCwgZWRpdC5vcmlnaW5hbENhdGVnb3J5LCBudWxsLCBudWxsLCBmYWxzZSk7XG5cdFx0XHRcdGlmICghcmVzdWx0LmVycm9yKSB7XG5cdFx0XHRcdFx0Y2hhbmdlcysrO1xuXHRcdFx0XHRcdGRlbGV0ZWRbZGVsZXRlZC5sZW5ndGhdID0gZWRpdC5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChlcnJvciAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gRG8gbm90IGNvbW1pdCBpZiB0aGVyZSB3ZXJlIGVycm9yc1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybSEud3BTYXZlO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghY29uZi53Z0FydGljbGVJZCAmJiBjaGFuZ2VzID4gMCAmJiBlcnJvciA9PT0gbnVsbCkge1xuXHRcdFx0cmVzdWx0LnRleHQgPSBge3tDYXRuYXZ8YXV0bz0xfX1cXG5cXG4ke3Jlc3VsdC50ZXh0fWA7XG5cdFx0fVxuXHRcdC8vIEZpbGwgaW4gdGhlIGZvcm0gYW5kIHN1Ym1pdCBpdFxuXHRcdGNvbW1pdEZvcm0hLndwTWlub3JlZGl0LmNoZWNrZWQgPSBtaW5vckVkaXRzO1xuXHRcdGNvbW1pdEZvcm0hLndwV2F0Y2h0aGlzLmNoZWNrZWQgPSAoIWNvbmYud2dBcnRpY2xlSWQgJiYgd2F0Y2hDcmVhdGUpIHx8IHdhdGNoRWRpdCB8fCBwYWdlV2F0Y2hlZDtcblx0XHRpZiAoY29uZi53Z0FydGljbGVJZCB8fCAhIXNpbmdsZUVkaXRvcikge1xuXHRcdFx0Ly8gUHJlcGFyZSBjaGFuZ2UtdGFnIHNhdmVcblx0XHRcdGlmIChhY3Rpb24gJiYgYWN0aW9uLnZhbHVlID09PSAnd3BTYXZlJykge1xuXHRcdFx0XHRpZiAoSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybSEud3BDaGFuZ2VUYWdzLnZhbHVlID0gSEMuY2hhbmdlVGFnO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb21taXRGb3JtIS53cEF1dG9TdW1tYXJ5LnZhbHVlID0gSEMuY2hhbmdlVGFnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNoYW5nZXMgPT09IDEpIHtcblx0XHRcdFx0aWYgKHJlc3VsdC5zdW1tYXJ5ICYmIHJlc3VsdC5zdW1tYXJ5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjb21taXRGb3JtIS53cFN1bW1hcnkudmFsdWUgPVxuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpICtcblx0XHRcdFx0XHRcdHJlc3VsdC5zdW1tYXJ5LmpvaW4oZ2V0TWVzc2FnZSgnbWVzc2FnZXMtc2VwYXJhdG9yJykpICtcblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbW1pdEZvcm0hLndwTWlub3JlZGl0LmNoZWNrZWQgPSBIQy5zaW5nbGVfbWlub3IgfHwgbWlub3JFZGl0cztcblx0XHRcdH0gZWxzZSBpZiAoY2hhbmdlcykge1xuXHRcdFx0XHRjb25zdCBzdW1tYXJ5OiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRjb25zdCBzaG9ydFN1bW1hcnk6IHN0cmluZ1tdID0gW107XG5cdFx0XHRcdC8vIERlbGV0ZWRcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRlbGV0ZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGDiiJIke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGRlbGV0ZWRbaV0hKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkZWxldGVkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDiiJIke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGRlbGV0ZWRbMF0hKX1gO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGRlbGV0ZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDiiJIgJHttdWx0aUNoYW5nZU1zZyhkZWxldGVkLmxlbmd0aCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBZGRlZFxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYWRkZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGArJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBhZGRlZFtpXSEpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGFkZGVkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGArJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBhZGRlZFswXSEpfWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYWRkZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGArICR7bXVsdGlDaGFuZ2VNc2coYWRkZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIENoYW5nZWRcblx0XHRcdFx0Y29uc3QgYXJyb3cgPSBpc19ydGwgPyAnXFx1MjE5MCcgOiAnXFx1MjE5Mic7IC8vIGxlZnQgYW5kIHJpZ2h0IGFycm93cy4gRG9uJ3QgdXNlIOKGkCBhbmQg4oaSIGluIHRoZSBjb2RlLlxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2hhbmdlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGNvbnN0IGNoYW5nZSA9IGNoYW5nZWRbaV0hO1xuXHRcdFx0XHRcdGlmIChjaGFuZ2UuZnJvbSA9PT0gY2hhbmdlLnRvKSB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlLmZyb20pfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID1cblx0XHRcdFx0XHRcdFx0YMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2UuZnJvbSl9JHthcnJvd30ke2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0XHRcdFx0J21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlLnRvXG5cdFx0XHRcdFx0XHRcdCl9YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNoYW5nZWQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2hhbmdlID0gY2hhbmdlZFswXSE7XG5cdFx0XHRcdFx0aWYgKGNoYW5nZS5mcm9tID09PSBjaGFuZ2UudG8pIHtcblx0XHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlLmZyb20pfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDCsSR7Z2V0TWVzc2FnZShcblx0XHRcdFx0XHRcdFx0J21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsXG5cdFx0XHRcdFx0XHRcdGNoYW5nZS5mcm9tXG5cdFx0XHRcdFx0XHQpfSR7YXJyb3d9JHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2UudG8pfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGNoYW5nZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDCsSAke211bHRpQ2hhbmdlTXNnKGNoYW5nZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdW1tYXJ5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjb25zdCBqb2luZWRTdW1tYXJ5ID0gc3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKTtcblx0XHRcdFx0XHRjb25zdCBmaW5hbFN1bW1hcnkgPVxuXHRcdFx0XHRcdFx0am9pbmVkU3VtbWFyeS5sZW5ndGggPlxuXHRcdFx0XHRcdFx0MjAwIC1cblx0XHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpLmxlbmd0aCAtXG5cdFx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpLmxlbmd0aFxuXHRcdFx0XHRcdFx0XHQ/IHNob3J0U3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKVxuXHRcdFx0XHRcdFx0XHQ6IGpvaW5lZFN1bW1hcnk7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybSEud3BTdW1tYXJ5LnZhbHVlID1cblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpKSArXG5cdFx0XHRcdFx0XHRmaW5hbFN1bW1hcnkgK1xuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y29tbWl0Rm9ybSEud3BUZXh0Ym94MS52YWx1ZSA9IHJlc3VsdC50ZXh0O1xuXHRcdGNvbW1pdEZvcm0hLndwU3RhcnR0aW1lLnZhbHVlID0gc2VydmVyVGltZSB8fCBjdXJyZW50VGltZXN0YW1wKCk7XG5cdFx0Y29tbWl0Rm9ybSEud3BFZGl0dGltZS52YWx1ZSA9IHBhZ2VUaW1lIHx8IGNvbW1pdEZvcm0hLndwU3RhcnR0aW1lLnZhbHVlO1xuXHRcdGlmIChzZWxmRWRpdENvbmZsaWN0KSB7XG5cdFx0XHRjb21taXRGb3JtIS5vbGRpZC52YWx1ZSA9IFN0cmluZyhwYWdlVGV4dFJldklkIHx8IGNvbmYud2dDdXJSZXZpc2lvbklkKTtcblx0XHR9XG5cdFx0Ly8gU3VibWl0IHRoZSBmb3JtIGluIGEgd2F5IHRoYXQgdHJpZ2dlcnMgb25zdWJtaXQgZXZlbnRzOiBjb21taXRGb3JtLnN1Ym1pdCgpIGRvZXNuJ3QuXG5cdFx0Y29tbWl0Rm9ybSEuaGNDb21taXQuY2xpY2soKTtcblx0fTtcblx0Y29uc3QgcmVzb2x2ZU9uZSA9IChwYWdlOiBIb3RDYXRBcGlQYWdlLCB0b1Jlc29sdmU6IENhdGVnb3J5RWRpdG9yW10pOiB2b2lkID0+IHtcblx0XHRjb25zdCBjYXRzID0gcGFnZS5jYXRlZ29yaWVzO1xuXHRcdGNvbnN0IHtsaW5rc30gPSBwYWdlO1xuXHRcdGxldCBpc19kYWIgPSBmYWxzZTsgLy8gSGFyZCByZWRpcmVjdD9cblx0XHRsZXQgaXNfcmVkaXIgPSB0eXBlb2YgcGFnZS5yZWRpcmVjdCA9PT0gJ3N0cmluZyc7XG5cdFx0bGV0IGk6IG51bWJlcjtcblx0XHRjb25zdCBpc19oaWRkZW4gPSBwYWdlLmNhdGVnb3J5aW5mbyAmJiB0eXBlb2YgcGFnZS5jYXRlZ29yeWluZm8uaGlkZGVuID09PSAnc3RyaW5nJztcblx0XHRjb25zdCBpc19taXNzaW5nID0gdHlwZW9mIHBhZ2UubWlzc2luZyA9PT0gJ3N0cmluZyc7XG5cdFx0Y29uc3QgcGFnZVRpdGxlID0gcGFnZS50aXRsZS5zbGljZShNYXRoLm1heCgwLCBwYWdlLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBlZGl0b3IgPSB0b1Jlc29sdmVbaV0hO1xuXHRcdFx0aWYgKGkgJiYgZWRpdG9yLmRhYklucHV0Q2xlYW5lZCAhPT0gcGFnZVRpdGxlKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gTm90ZTogdGhlIHNlcnZlciByZXR1cm5zIGluIHBhZ2UgYW4gTkZDIG5vcm1hbGl6ZWQgVW5pY29kZSB0aXRsZS4gSWYgb3VyIGlucHV0IHdhcyBub3QgTkZDIG5vcm1hbGl6ZWQsIHdlIG1heSBub3QgZmluZFxuXHRcdFx0Ly8gYW55IGVudHJ5IGhlcmUuIElmIHdlIGhhdmUgb25seSBvbmUgZWRpdG9yIHRvIHJlc29sdmUgKHRoZSBtb3N0IGNvbW1vbiBjYXNlLCBJIHByZXN1bWUpLCB3ZSBtYXkgc2ltcGx5IHNraXAgdGhlIGNoZWNrLlxuXHRcdFx0ZWRpdG9yLmN1cnJlbnRIaWRkZW4gPSBpc19oaWRkZW47XG5cdFx0XHRlZGl0b3IuaW5wdXRFeGlzdHMgPSAhaXNfbWlzc2luZztcblx0XHRcdGVkaXRvci5pY29uIS5zcmMgPSBpc19taXNzaW5nID8gSEMuZXhpc3RzTm8gOiBIQy5leGlzdHNZZXM7XG5cdFx0fVxuXHRcdGlmIChpc19taXNzaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghaXNfcmVkaXIgJiYgY2F0cyAmJiAoZ2V0TWVzc2FnZSgnZGlzYW1iaWdfY2F0ZWdvcnknKSB8fCBnZXRNZXNzYWdlKCdyZWRpcl9jYXRlZ29yeScpKSkge1xuXHRcdFx0Zm9yIChjb25zdCBjYXRfIG9mIGNhdHMpIHtcblx0XHRcdFx0bGV0IGNhdCA9IGNhdF8udGl0bGU7XG5cdFx0XHRcdC8vIFN0cmlwIG5hbWVzcGFjZSBwcmVmaXhcblx0XHRcdFx0aWYgKGNhdCkge1xuXHRcdFx0XHRcdGNhdCA9IGNhdC5zbGljZShNYXRoLm1heCgwLCBjYXQuaW5kZXhPZignOicpICsgMSkpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdFx0XHRpZiAoY2F0ID09PSBnZXRNZXNzYWdlKCdkaXNhbWJpZ19jYXRlZ29yeScpKSB7XG5cdFx0XHRcdFx0XHRpc19kYWIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjYXQgPT09IGdldE1lc3NhZ2UoJ3JlZGlyX2NhdGVnb3J5JykpIHtcblx0XHRcdFx0XHRcdGlzX3JlZGlyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWlzX3JlZGlyICYmICFpc19kYWIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFsaW5rcyB8fCBsaW5rcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgdGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQvLyBDYXRlZ29yeSBuYW1lc3BhY2UgLS0gYWx3YXlzIHRydWUgc2luY2Ugd2UgYXNrIG9ubHkgZm9yIHRoZSBjYXRlZ29yeSBsaW5rc1xuXHRcdFx0XHRsaW5rLm5zID09PSAxNCAmJlxuXHRcdFx0XHQvLyBOYW1lIG5vdCBlbXB0eVxuXHRcdFx0XHRsaW5rLnRpdGxlICYmXG5cdFx0XHRcdGxpbmsudGl0bGUubGVuZ3RoID4gMFxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIEludGVybmFsIGxpbmsgdG8gZXhpc3RpbmcgdGhpbmd5LiBFeHRyYWN0IHRoZSBwYWdlIG5hbWUgYW5kIHJlbW92ZSB0aGUgbmFtZXNwYWNlLlxuXHRcdFx0XHRjb25zdCBtYXRjaCA9IGxpbmsudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgbGluay50aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdC8vIEV4Y2x1ZGUgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllcy5cblx0XHRcdFx0aWYgKCFIQy5ibGFja2xpc3QgfHwgIUhDLmJsYWNrbGlzdC50ZXN0KG1hdGNoKSkge1xuXHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IG1hdGNoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGVkaXRvciA9IHRvUmVzb2x2ZVtpXSE7XG5cdFx0XHRpZiAoaSAmJiBlZGl0b3IuZGFiSW5wdXRDbGVhbmVkICE9PSBwYWdlVGl0bGUpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRlZGl0b3IuaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBNaWdodCBhY3R1YWxseSBiZSB3cm9uZyBpZiBpdCdzIGEgcmVkaXJlY3QgcG9pbnRpbmcgdG8gYSBub24tZXhpc3RpbmcgY2F0ZWdvcnlcblx0XHRcdGVkaXRvci5pY29uIS5zcmMgPSBIQy5leGlzdHNZZXM7XG5cdFx0XHRpZiAodGl0bGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0ZWRpdG9yLmRhYiA9IHRpdGxlcztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVkaXRvci50ZXh0IS52YWx1ZSA9IHRpdGxlc1swXSEgKyAoZWRpdG9yLmN1cnJlbnRLZXkgPT09IG51bGwgPyAnJyA6IGB8JHtlZGl0b3IuY3VycmVudEtleX1gKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlc29sdmVSZWRpcmVjdHMgPSAodG9SZXNvbHZlOiBDYXRlZ29yeUVkaXRvcltdLCBwYXJhbXM/OiBIb3RDYXRBcGlRdWVyeVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0aWYgKCFwYXJhbXMgfHwgIXBhcmFtcy5xdWVyeSB8fCAhcGFyYW1zLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHtwYWdlc30gPSBwYXJhbXMucXVlcnk7XG5cdFx0Zm9yIChjb25zdCBwIGluIHBhZ2VzKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocGFnZXMsIHApKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmVzb2x2ZU9uZSgocGFnZXMgYXMgUmVjb3JkPHN0cmluZywgSG90Q2F0QXBpUGFnZT4pW3BdISwgdG9SZXNvbHZlKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlc29sdmVNdWx0aSA9ICh0b1Jlc29sdmU6IENhdGVnb3J5RWRpdG9yW10sIGNhbGxiYWNrOiAocmVzb2x2ZWQ6IENhdGVnb3J5RWRpdG9yW10pID0+IHZvaWQpOiB2b2lkID0+IHtcblx0XHRsZXQgaTogbnVtYmVyO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGVkaXRvciA9IHRvUmVzb2x2ZVtpXSE7XG5cdFx0XHRlZGl0b3IuZGFiID0gbnVsbDtcblx0XHRcdGVkaXRvci5kYWJJbnB1dCA9IGVkaXRvci5sYXN0SW5wdXQ7XG5cdFx0fVxuXHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRwcm9wOiAnaW5mb3xsaW5rc3xjYXRlZ29yaWVzfGNhdGVnb3J5aW5mbycsXG5cdFx0XHRwbG5hbWVzcGFjZTogJzE0Jyxcblx0XHRcdHBsbGltaXQ6IFN0cmluZyh0b1Jlc29sdmUubGVuZ3RoICogMTApLFxuXHRcdFx0Y2xsaW1pdDogU3RyaW5nKHRvUmVzb2x2ZS5sZW5ndGggKiAxMCksXG5cdFx0fTtcblx0XHRjb25zdCB0aXRsZXM6IHN0cmluZ1tdID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgZWRpdG9yID0gdG9SZXNvbHZlW2ldITtcblx0XHRcdGNvbnN0IHYgPSByZXBsYWNlU2hvcnRjdXRzKGVkaXRvci5kYWJJbnB1dCEsIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRlZGl0b3IuZGFiSW5wdXRDbGVhbmVkID0gdjtcblx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IGBDYXRlZ29yeToke3Z9YDtcblx0XHR9XG5cdFx0cGFyYW1zLnRpdGxlcyA9IHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0YXBpLmdldChwYXJhbXMpXG5cdFx0XHQuZG9uZSgoanNvbikgPT4ge1xuXHRcdFx0XHRyZXNvbHZlUmVkaXJlY3RzKHRvUmVzb2x2ZSwganNvbiBhcyBIb3RDYXRBcGlRdWVyeVJlc3BvbnNlKTtcblx0XHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgocmVxKSA9PiB7XG5cdFx0XHRcdGlmICghcmVxKSB7XG5cdFx0XHRcdFx0bm9TdWdnZXN0aW9ucyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBtYWtlQWN0aXZlID0gKHdoaWNoOiBDYXRlZ29yeUVkaXRvcik6IHZvaWQgPT4ge1xuXHRcdGlmICh3aGljaC5pc19hY3RpdmUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvciAhPT0gd2hpY2gpIHtcblx0XHRcdFx0ZWRpdG9yLmluYWN0aXZhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0d2hpY2guaXNfYWN0aXZlID0gdHJ1ZTtcblx0XHRpZiAod2hpY2guZGFiKSB7XG5cdFx0XHRzaG93RGFiKHdoaWNoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gQ2hlY2sgZm9yIHByb2dyYW1tYXRpYyB2YWx1ZSBjaGFuZ2VzLlxuXHRcdFx0Y29uc3QgZXhwZWN0ZWRJbnB1dCA9IHdoaWNoLmxhc3RSZWFsSW5wdXQgfHwgd2hpY2gubGFzdElucHV0IHx8ICcnO1xuXHRcdFx0Y29uc3QgYWN0dWFsVmFsdWUgPSB3aGljaC50ZXh0IS52YWx1ZSB8fCAnJztcblx0XHRcdGlmIChcblx0XHRcdFx0KGV4cGVjdGVkSW5wdXQubGVuZ3RoID09PSAwICYmIGFjdHVhbFZhbHVlLmxlbmd0aCA+IDApIHx8XG5cdFx0XHRcdChleHBlY3RlZElucHV0Lmxlbmd0aCA+IDAgJiYgYWN0dWFsVmFsdWUuaW5kZXhPZihleHBlY3RlZElucHV0KSlcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBTb21laG93IHRoZSBmaWVsZCdzIHZhbHVlIGFwcGVhcnMgdG8gaGF2ZSBjaGFuZ2VkLCBhbmQgd2hpY2gubGFzdFNlbGVjdGlvbiB0aGVyZWZvcmUgaXMgbm8gbG9uZ2VyIHZhbGlkLiBUcnkgdG8gc2V0IHRoZVxuXHRcdFx0XHQvLyBjdXJzb3IgYXQgdGhlIGVuZCBvZiB0aGUgY2F0ZWdvcnksIGFuZCBkbyBub3QgZGlzcGxheSB0aGUgb2xkIHN1Z2dlc3Rpb24gbGlzdC5cblx0XHRcdFx0d2hpY2guc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IHYgPSBhY3R1YWxWYWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRbd2hpY2gubGFzdElucHV0XSA9IHYgYXMgW3N0cmluZ107XG5cdFx0XHRcdHdoaWNoLmxhc3RSZWFsSW5wdXQgPSB3aGljaC5sYXN0SW5wdXQ7XG5cdFx0XHRcdGlmICh2Lmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHR3aGljaC5jdXJyZW50S2V5ID0gdlsxXSE7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2hpY2gubGFzdFNlbGVjdGlvbiAmJj0ge1xuXHRcdFx0XHRcdHN0YXJ0OiB2WzBdIS5sZW5ndGgsXG5cdFx0XHRcdFx0ZW5kOiB2WzBdIS5sZW5ndGgsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAod2hpY2guc2hvd3NMaXN0KSB7XG5cdFx0XHRcdHdoaWNoLmRpc3BsYXlMaXN0KCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2hpY2gubGFzdFNlbGVjdGlvbikge1xuXHRcdFx0XHRjb25zdCB7bGFzdFNlbGVjdGlvbn0gPSB3aGljaDtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0d2hpY2guc2V0U2VsZWN0aW9uKGxhc3RTZWxlY3Rpb24uc3RhcnQsIGxhc3RTZWxlY3Rpb24uZW5kKTtcblx0XHRcdFx0fSwgMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBzaG93RGFiID0gKHdoaWNoOiBDYXRlZ29yeUVkaXRvcik6IHZvaWQgPT4ge1xuXHRcdGlmICh3aGljaC5pc19hY3RpdmUpIHtcblx0XHRcdHdoaWNoLnNob3dTdWdnZXN0aW9ucyh3aGljaC5kYWIsIGZhbHNlLCBudWxsLCBudWxsKTsgLy8gZG8gYXV0b2NvbXBsZXRpb24sIG5vIGtleSwgbm8gZW5naW5lIHNlbGVjdG9yXG5cdFx0XHR3aGljaC5kYWIgPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYWtlQWN0aXZlKHdoaWNoKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG11bHRpU3VibWl0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHRvUmVzb2x2ZTogQ2F0ZWdvcnlFZGl0b3JbXSA9IFtdO1xuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgPT09IENIQU5HRV9QRU5ESU5HIHx8IGVkaXRvci5zdGF0ZSA9PT0gT1BFTikge1xuXHRcdFx0XHR0b1Jlc29sdmVbdG9SZXNvbHZlLmxlbmd0aF0gPSBlZGl0b3I7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0b1Jlc29sdmUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJlc29sdmVNdWx0aSh0b1Jlc29sdmUsIChyZXNvbHZlZCkgPT4ge1xuXHRcdFx0bGV0IGZpcnN0RGFiOiBDYXRlZ29yeUVkaXRvciB8IG51bGwgPSBudWxsO1xuXHRcdFx0bGV0IGRvbnRDaGFuZ2UgPSBmYWxzZTtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiByZXNvbHZlZCkge1xuXHRcdFx0XHRpZiAoZWxlbWVudC5sYXN0SW5wdXQgPT09IGVsZW1lbnQuZGFiSW5wdXQpIHtcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5kYWIpIHtcblx0XHRcdFx0XHRcdGZpcnN0RGFiIHx8PSBlbGVtZW50O1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudC5hY2NlcHRDaGVjayh0cnVlKSkge1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jb21taXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gV2UgZGlkbid0IGRpc2FibGUgYWxsIHRoZSBvcGVuIGVkaXRvcnMsIGJ1dCB3ZSBkaWQgYXN5bmNocm9ub3VzIGNhbGxzLiBJdCBpc1xuXHRcdFx0XHRcdC8vIHRoZW9yZXRpY2FsbHkgcG9zc2libGUgdGhhdCB0aGUgdXNlciBjaGFuZ2VkIHNvbWV0aGluZy4uLlxuXHRcdFx0XHRcdGRvbnRDaGFuZ2UgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZmlyc3REYWIpIHtcblx0XHRcdFx0c2hvd0RhYihmaXJzdERhYik7XG5cdFx0XHR9IGVsc2UgaWYgKCFkb250Q2hhbmdlKSB7XG5cdFx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBzZXRNdWx0aUlucHV0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmIChjb21taXRCdXR0b24gfHwgb25VcGxvYWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29tbWl0QnV0dG9uID0gbWFrZSgnaW5wdXQnKTtcblx0XHRjb21taXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuXHRcdGNvbW1pdEJ1dHRvbi52YWx1ZSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNvbW1pdCcpO1xuXHRcdGNvbW1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG11bHRpU3VibWl0KTtcblx0XHRpZiAobXVsdGlTcGFuKSB7XG5cdFx0XHRtdWx0aVNwYW4ucmVwbGFjZVdpdGgoY29tbWl0QnV0dG9uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2F0TGluZSEuYXBwZW5kKGNvbW1pdEJ1dHRvbik7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBjaGVja011bHRpSW5wdXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKCFjb21taXRCdXR0b24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGhhc0NoYW5nZXMgPSBmYWxzZTtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0aGFzQ2hhbmdlcyA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSAhaGFzQ2hhbmdlcztcblx0fTtcblx0Y29uc3Qge3N1Z2dlc3Rpb25FbmdpbmVzLCBzdWdnZXN0aW9uQ29uZmlnc30gPSBjcmVhdGVTdWdnZXN0aW9uRGF0YShIQyk7XG5cdC8vIEV2ZW50IGtleUNvZGVzIHRoYXQgd2UgaGFuZGxlIGluIHRoZSB0ZXh0IGlucHV0IGZpZWxkL3N1Z2dlc3Rpb24gbGlzdC5cblx0Y29uc3QgQlMgPSA4O1xuXHRjb25zdCBUQUIgPSA5O1xuXHRjb25zdCBSRVQgPSAxMztcblx0Y29uc3QgRVNDID0gMjc7XG5cdGNvbnN0IFNQQUNFID0gMzI7XG5cdGNvbnN0IFBHVVAgPSAzMztcblx0Y29uc3QgUEdET1dOID0gMzQ7XG5cdGNvbnN0IFVQID0gMzg7XG5cdGNvbnN0IERPV04gPSA0MDtcblx0Y29uc3QgREVMID0gNDY7XG5cdGNvbnN0IElNRSA9IDIyOTtcblx0Y2xhc3MgQ2F0ZWdvcnlFZGl0b3Ige1xuXHRcdGlzQ29tcG9zaXRpb25TdGFydCA9IGZhbHNlO1xuXHRcdGlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRjYXRMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdG9yaWdpbmFsQ2F0ZWdvcnkgPSAnJztcblx0XHRvcmlnaW5hbEtleTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdFx0b3JpZ2luYWxFeGlzdHMgPSBmYWxzZTtcblx0XHRvcmlnaW5hbEhpZGRlbjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0XHRvcmlnaW5hbFN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdGxpbmtTcGFuITogSFRNTFNwYW5FbGVtZW50O1xuXHRcdG5vcm1hbExpbmtzOiBIVE1MU3BhbkVsZW1lbnQgfCBudWxsID0gbnVsbDtcblx0XHR1bmRlbExpbms6IEhUTUxTcGFuRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdHVwRG93bkxpbmtzOiBIVE1MU3BhbkVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cdFx0dW5kb0xpbms6IEhUTUxTcGFuRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdGxpbmU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdFx0c3BhbiE6IEhUTUxFbGVtZW50O1xuXHRcdGVuZ2luZSA9ICcnO1xuXHRcdGVuZ2luZU5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRcdGVuZ2luZVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudCB8IHVuZGVmaW5lZDtcblx0XHRmb3JtOiBIVE1MRm9ybUVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cdFx0dGV4dDogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZDtcblx0XHRpY29uOiBIVE1MSW1hZ2VFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHRcdGxpc3Q6IEhUTUxTZWxlY3RFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdFx0b2s6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cdFx0Y2FuY2VsQnV0dG9uOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHRcdGN1cnJlbnRDYXRlZ29yeSA9ICcnO1xuXHRcdGN1cnJlbnRFeGlzdHMgPSBmYWxzZTtcblx0XHRjdXJyZW50SGlkZGVuOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHRcdGN1cnJlbnRLZXk6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRcdHN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdGxhc3RTYXZlZFN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdGxhc3RTYXZlZENhdGVnb3J5ID0gJyc7XG5cdFx0bGFzdFNhdmVkS2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0XHRsYXN0U2F2ZWRFeGlzdHMgPSBmYWxzZTtcblx0XHRsYXN0U2F2ZWRIaWRkZW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdFx0bGFzdElucHV0ID0gJyc7XG5cdFx0bGFzdFJlYWxJbnB1dCA9ICcnO1xuXHRcdGxhc3RTZWxlY3Rpb246IHtzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlcn0gfCB1bmRlZmluZWQ7XG5cdFx0bGFzdFF1ZXJ5OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gbnVsbDtcblx0XHRzaG93c0xpc3QgPSBmYWxzZTtcblx0XHRpbnB1dEV4aXN0cyA9IGZhbHNlO1xuXHRcdGltZSA9IGZhbHNlO1xuXHRcdHVzZXNDb21wb3NpdGlvbiA9IGZhbHNlO1xuXHRcdGxhc3RLZXk6IHN0cmluZyB8IG51bWJlciA9IDA7XG5cdFx0a2V5Q291bnQgPSAwO1xuXHRcdGRhYjogc3RyaW5nW10gfCBudWxsID0gbnVsbDtcblx0XHRkYWJJbnB1dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGRhYklucHV0Q2xlYW5lZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGNhbGxiYWNrT2JqOiBIb3RDYXRTdWdnZXN0aW9uQ2FsbGJhY2sgfCBudWxsID0gbnVsbDtcblx0XHRpc19hY3RpdmUgPSBmYWxzZTtcblx0XHRub0NvbW1pdCA9IGZhbHNlO1xuXHRcdGNvbnN0cnVjdG9yKFxuXHRcdFx0bGluZTogSFRNTEVsZW1lbnQgfCBudWxsLFxuXHRcdFx0c3BhbjogSFRNTEVsZW1lbnQgfCBudWxsLFxuXHRcdFx0YWZ0ZXI6IHN0cmluZyB8IEhUTUxFbGVtZW50IHwgbnVsbCxcblx0XHRcdGtleT86IHN0cmluZyB8IGJvb2xlYW4gfCBudWxsLFxuXHRcdFx0aXNfaGlkZGVuPzogYm9vbGVhblxuXHRcdCkge1xuXHRcdFx0dGhpcy5pbml0aWFsaXplKGxpbmUsIHNwYW4sIGFmdGVyLCBrZXksIGlzX2hpZGRlbik7XG5cdFx0fVxuXHRcdGluaXRpYWxpemUoXG5cdFx0XHRsaW5lOiBIVE1MRWxlbWVudCB8IG51bGwsXG5cdFx0XHRzcGFuOiBIVE1MRWxlbWVudCB8IG51bGwsXG5cdFx0XHRhZnRlcjogc3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBudWxsLFxuXHRcdFx0a2V5Pzogc3RyaW5nIHwgYm9vbGVhbiB8IG51bGwsXG5cdFx0XHRpc19oaWRkZW4/OiBib29sZWFuXG5cdFx0KTogdm9pZCB7XG5cdFx0XHQvLyBJZiBhIHNwYW4gaXMgZ2l2ZW4sICdhZnRlcicgaXMgdGhlIGNhdGVnb3J5IHRpdGxlLCBvdGhlcndpc2UgaXQgbWF5IGJlIGFuIGVsZW1lbnQgYWZ0ZXIgd2hpY2ggdG9cblx0XHRcdC8vIGluc2VydCB0aGUgbmV3IHNwYW4uICdrZXknIGlzIGxpa2V3aXNlIG92ZXJsb2FkZWQ7IGlmIGEgc3BhbiBpcyBnaXZlbiwgaXQgaXMgdGhlIGNhdGVnb3J5IGtleSAoaWZcblx0XHRcdC8vIGtub3duKSwgb3RoZXJ3aXNlIGl0IGlzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgYSBiYXIgc2hhbGwgYmUgcHJlcGVuZGVkLlxuXHRcdFx0aWYgKHNwYW4pIHtcblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdHNwYW4uZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IHNwYW4uZmlyc3RDaGlsZCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbENhdGVnb3J5ID0gYWZ0ZXIgYXMgc3RyaW5nO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsS2V5ID0gdHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5Lmxlbmd0aCA+IDEgPyBrZXkuc2xpY2UoMSkgOiBudWxsOyAvLyA+IDEgYmVjYXVzZSBpdCBpbmNsdWRlcyB0aGUgbGVhZGluZyBiYXJcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEV4aXN0cyA9ICFoYXNDbGFzcyh0aGlzLmNhdExpbmssICduZXcnKTtcblx0XHRcdFx0Ly8gQ3JlYXRlIGNoYW5nZSBhbmQgZGVsIGxpbmtzXG5cdFx0XHRcdHRoaXMubWFrZUxpbmtTcGFuKCk7XG5cdFx0XHRcdGlmICghdGhpcy5vcmlnaW5hbEV4aXN0cyAmJiB0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMubGlua1NwYW4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gdHJ1ZTtcblx0XHRcdFx0Ly8gQ3JlYXRlIGFkZCBzcGFuIGFuZCBhcHBlbmQgdG8gY2F0TGlua3Ncblx0XHRcdFx0dGhpcy5vcmlnaW5hbENhdGVnb3J5ID0gJyc7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxLZXkgPSBudWxsO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsRXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdGxldCBhZnRlckVsZW1lbnQgPSBhZnRlciBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG5cdFx0XHRcdGlmICghbmV3RE9NKSB7XG5cdFx0XHRcdFx0Y29uc3QgYWRkU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0XHRhZGRTcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdFx0XHRpZiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRhZGRTcGFuLmFwcGVuZChtYWtlKCcgfCAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRpZiAoYWZ0ZXJFbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRcdGFmdGVyRWxlbWVudC5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUoYWRkU3BhbiwgYWZ0ZXJFbGVtZW50Lm5leHRTaWJsaW5nKTtcblx0XHRcdFx0XHRcdFx0YWZ0ZXJFbGVtZW50ID0gYWZ0ZXJFbGVtZW50Lm5leHRTaWJsaW5nIGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChsaW5lKSB7XG5cdFx0XHRcdFx0XHRcdGxpbmUuYXBwZW5kKGFkZFNwYW4pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAobGluZSAmJiBsaW5lLmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0XHRcdGFkZFNwYW4uYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRsaW5lLmFwcGVuZChhZGRTcGFuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5saW5rU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCBub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuYWRkLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1hZGQnKTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdGNvbnN0IG91dGVyU3BhbiA9IG1ha2UobmV3RE9NID8gJ2xpJyA6ICdzcGFuJyk7XG5cdFx0XHRcdG91dGVyU3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCc7XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRvdXRlclNwYW4uZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0b3V0ZXJTcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdFx0aWYgKGFmdGVyRWxlbWVudCkge1xuXHRcdFx0XHRcdGFmdGVyRWxlbWVudC5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUob3V0ZXJTcGFuLCBhZnRlckVsZW1lbnQubmV4dFNpYmxpbmcpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUpIHtcblx0XHRcdFx0XHRsaW5lLmFwcGVuZChvdXRlclNwYW4pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW4gPSBvdXRlclNwYW47XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MgPSBudWxsO1xuXHRcdFx0XHR0aGlzLnVuZGVsTGluayA9IG51bGw7XG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm9yaWdpbmFsSGlkZGVuID0gaXNfaGlkZGVuO1xuXHRcdFx0dGhpcy5saW5lID0gbGluZTtcblx0XHRcdHRoaXMuZW5naW5lID0gSEMuc3VnZ2VzdGlvbnM7XG5cdFx0XHR0aGlzLnNwYW4gPSBzcGFuITtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5zdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdHRoaXMubGFzdFNhdmVkU3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0aWYgKHRoaXMuY2F0TGluayAmJiB0aGlzLmN1cnJlbnRLZXkpIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5O1xuXHRcdFx0fVxuXHRcdFx0ZWRpdG9yc1tlZGl0b3JzLmxlbmd0aF0gPSB0aGlzO1xuXHRcdH1cblx0XHRtYWtlTGlua1NwYW4oKTogdm9pZCB7XG5cdFx0XHR0aGlzLm5vcm1hbExpbmtzID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0bGV0IGxpbms6IEhUTUxBbmNob3JFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdFx0XHRpZiAodGhpcy5vcmlnaW5hbENhdGVnb3J5ICYmIHRoaXMub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmUuYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MucmVtb3ZlLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1yZW1vdmUnKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIUhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbdGhpcy5vcmlnaW5hbENhdGVnb3J5XSkge1xuXHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5jaGFuZ2UsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWNoYW5nZScpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zICYmIEhDLnVzZV91cF9kb3duKSB7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcyA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRvd24uYmluZCh0aGlzKSk7XG5cdFx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5kb3duLCB0cnVlKSk7XG5cdFx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWRvd24nKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXAuYmluZCh0aGlzKSk7XG5cdFx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy51cCwgdHJ1ZSkpO1xuXHRcdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy11cCcpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQodGhpcy51cERvd25MaW5rcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHR0aGlzLmxpbmtTcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50IG5vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQodGhpcy5ub3JtYWxMaW5rcyk7XG5cdFx0XHR0aGlzLnVuZGVsTGluayA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rLmNsYXNzTmFtZSA9ICdub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdHRoaXMudW5kZWxMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZXN0b3JlLmJpbmQodGhpcykpO1xuXHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5yZXN0b3JlLCB0cnVlKSk7XG5cdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtcmVzdG9yZScpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5hcHBlbmQobGluayk7XG5cdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZCh0aGlzLnVuZGVsTGluayk7XG5cdFx0fVxuXHRcdGludm9rZVN1Z2dlc3Rpb25zKGRvbnRfYXV0b2NvbXBsZXRlPzogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLmVuZ2luZSAmJlxuXHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0gJiZcblx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdIS50ZW1wICYmXG5cdFx0XHRcdCFkb250X2F1dG9jb21wbGV0ZVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lID0gSEMuc3VnZ2VzdGlvbnM7XG5cdFx0XHR9IC8vIFJlc2V0IHRvIGEgc2VhcmNoIHVwb24gaW5wdXRcblx0XHRcdHRoaXMuc3RhdGUgPSBDSEFOR0VfUEVORElORztcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNlbGYudGV4dGNoYW5nZShkb250X2F1dG9jb21wbGV0ZSk7XG5cdFx0XHR9LCBIQy5zdWdnZXN0X2RlbGF5KTtcblx0XHR9XG5cdFx0bWFrZUZvcm0oKTogdm9pZCB7XG5cdFx0XHRjb25zdCBmb3JtID0gbWFrZSgnZm9ybScpO1xuXHRcdFx0Zm9ybS5tZXRob2QgPSAnUE9TVCc7XG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuYWNjZXB0LmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5mb3JtID0gZm9ybTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0Y29uc3QgdGV4dCA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0XHR0ZXh0LnR5cGUgPSAndGV4dCc7XG5cdFx0XHR0ZXh0LnNpemUgPSBIQy5lZGl0Ym94X3dpZHRoO1xuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdC8vIEJlIGNhcmVmdWwgaGVyZSB0byBoYW5kbGUgSU1FIGlucHV0LiBUaGlzIGlzIGJyb3dzZXIvT1MvSU1FIGRlcGVuZGVudCwgYnV0IGJhc2ljYWxseSB0aGVyZSBhcmUgdHdvIG1lY2hhbmlzbXM6XG5cdFx0XHRcdC8vIC0gTW9kZXJuIChET00gTGV2ZWwgMykgYnJvd3NlcnMgdXNlIGNvbXBvc2l0aW9uc3RhcnQvY29tcG9zaXRpb25lbmQgZXZlbnRzIHRvIHNpZ25hbCBjb21wb3NpdGlvbjsgaWYgdGhlXG5cdFx0XHRcdC8vICAgY29tcG9zaXRpb24gaXMgbm90IGNhbmNlbGVkLCB0aGVyZSdsbCBiZSBhIHRleHRJbnB1dCBldmVudCBmb2xsb3dpbmcuIER1cmluZyBhIGNvbXBvc2l0aW9uIGtleSBldmVudHMgYXJlXG5cdFx0XHRcdC8vICAgZWl0aGVyIGFsbCBzdXBwcmVzc2VkIChGRi9HZWNrbyksIG9yIG90aGVyd2lzZSBoYXZlIGtleURvd24gPT09IElNRSBmb3IgYWxsIGtleXMgKFdlYmtpdCkuXG5cdFx0XHRcdC8vICAgLSBXZWJraXQgc2VuZHMgYSB0ZXh0SW5wdXQgZm9sbG93ZWQgYnkga2V5RG93biA9PT0gSU1FIGFuZCBhIGtleVVwIHdpdGggdGhlIGtleSB0aGF0IGVuZGVkIGNvbXBvc2l0aW9uLlxuXHRcdFx0XHQvLyAgIC0gR2Vja28gZG9lc24ndCBzZW5kIHRleHRJbnB1dCBidXQganVzdCBhIGtleVVwIHdpdGggdGhlIGtleSB0aGF0IGVuZGVkIGNvbXBvc2l0aW9uLCB3aXRob3V0IHNlbmRpbmcga2V5RG93blxuXHRcdFx0XHQvL1x0IGZpcnN0LiBHZWNrbyBkb2Vzbid0IHNlbmQgYW55IGtleWRvd24gd2hpbGUgSU1FIGlzIGFjdGl2ZS5cblx0XHRcdFx0Ly8gLSBPbGRlciBicm93c2VycyBzaWduYWwgY29tcG9zaXRpb24gYnkga2V5RG93biA9PT0gSU1FIGZvciB0aGUgZmlyc3QgYW5kIHN1YnNlcXVlbnQga2V5cyBmb3IgYSBjb21wb3NpdGlvbi4gVGhlXG5cdFx0XHRcdC8vICAgZmlyc3Qga2V5RG93biAhPT0gSU1FIGlzIGNlcnRhaW5seSBhZnRlciB0aGUgZW5kIG9mIHRoZSBjb21wb3NpdGlvbi4gVHlwaWNhbGx5LCBjb21wb3NpdGlvbiBlbmQgY2FuIGFsc28gYmVcblx0XHRcdFx0Ly8gICBkZXRlY3RlZCBieSBhIGtleURvd24gSU1FIHdpdGggYSBrZXlVcCBvZiBzcGFjZSwgdGFiLCBlc2NhcGUsIG9yIHJldHVybi5cblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleTogc3RyaW5nIHwgbnVtYmVyID0gZXZlbnQua2V5IHx8IDA7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgJiZcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9PT0gSU1FICYmXG5cdFx0XHRcdFx0XHQhc2VsZi51c2VzQ29tcG9zaXRpb24gJiZcblx0XHRcdFx0XHRcdChrZXkgPT09IFRBQiB8fCBrZXkgPT09IFJFVCB8fCBrZXkgPT09IEVTQyB8fCBrZXkgPT09IFNQQUNFKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNlbGYuaW1lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gVVAgfHwga2V5ID09PSBET1dOIHx8IGtleSA9PT0gUEdVUCB8fCBrZXkgPT09IFBHRE9XTikge1xuXHRcdFx0XHRcdFx0Ly8gSW4gY2FzZSBhIGJyb3dzZXIgZG9lc24ndCBnZW5lcmF0ZSBrZXlwcmVzcyBldmVudHMgZm9yIGFycm93IGtleXMuLi5cblx0XHRcdFx0XHRcdGlmIChzZWxmLmtleUNvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLnByb2Nlc3NLZXkoZXZlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoa2V5ID09PSBFU0MgJiYgc2VsZi5sYXN0S2V5ICE9PSBJTUUgJiYgIXNlbGYucmVzZXRLZXlTZWxlY3Rpb24oKSkge1xuXHRcdFx0XHRcdFx0XHQvLyBObyB1bmRvIG9mIGtleSBzZWxlY3Rpb246IHRyZWF0IEVTQyBhcyBcImNhbmNlbFwiLlxuXHRcdFx0XHRcdFx0XHRzZWxmLmNhbmNlbCgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBBbHNvIGRvIHRoaXMgZm9yIEVTQyBhcyBhIHdvcmthcm91bmQgZm9yIEZpcmVmb3ggYnVnIDUyNDM2MFxuXHRcdFx0XHRcdFx0Ly8ge0BsaW5rIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTUyNDM2MH1cblx0XHRcdFx0XHRcdGlmIChzZWxmLmlzQ29tcG9zaXRpb25TdGFydCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZWxmLmludm9rZVN1Z2dlc3Rpb25zKGtleSA9PT0gQlMgfHwga2V5ID09PSBERUwgfHwga2V5ID09PSBFU0MpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleTogc3RyaW5nIHwgbnVtYmVyID0gZXZlbnQua2V5IHx8IDA7XG5cdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0ga2V5O1xuXHRcdFx0XHRcdHNlbGYua2V5Q291bnQgPSAwO1xuXHRcdFx0XHRcdC8vIERPTSBMZXZlbCA8IDMgSU1FIGlucHV0XG5cdFx0XHRcdFx0aWYgKCFzZWxmLmltZSAmJiBrZXkgPT09IElNRSAmJiAhc2VsZi51c2VzQ29tcG9zaXRpb24pIHtcblx0XHRcdFx0XHRcdC8vIHNlbGYudXNlc0NvbXBvc2l0aW9uIGNhdGNoZXMgYnJvd3NlcnMgdGhhdCBtYXkgZW1pdCBzcHVyaW91cyBrZXlkb3duIElNRSBhZnRlciBhIGNvbXBvc2l0aW9uIGhhcyBlbmRlZFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0XHRzZWxmLmltZSAmJlxuXHRcdFx0XHRcdFx0a2V5ICE9PSBJTUUgJiZcblx0XHRcdFx0XHRcdCEoXG5cdFx0XHRcdFx0XHRcdChOdW1iZXIoa2V5KSA+PSAxNiAmJiBOdW1iZXIoa2V5KSA8PSAyMCkgfHxcblx0XHRcdFx0XHRcdFx0KE51bWJlcihrZXkpID49IDkxICYmIE51bWJlcihrZXkpIDw9IDkzKSB8fFxuXHRcdFx0XHRcdFx0XHRrZXkgPT09IDE0NFxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0Ly8gSWdub3JlIGNvbnRyb2wga2V5czogY3RybCwgc2hpZnQsIGFsdCwgYWx0IGdyLCBjYXBzIGxvY2ssIHdpbmRvd3MvYXBwbGUgY21kIGtleXMsIG51bSBsb2NrLiBPbmx5IHRoZSB3aW5kb3dzIGtleXNcblx0XHRcdFx0XHRcdC8vIHRlcm1pbmF0ZSBJTUUgKGFwcGxlIGNtZCBkb2Vzbid0KSwgYnV0IHRoZXkgYWxzbyBjYXVzZSBhIGJsdXIsIHNvIGl0J3MgT0sgdG8gaWdub3JlIHRoZW0gaGVyZS5cblx0XHRcdFx0XHRcdC8vIE5vdGU6IFNhZmFyaSA0ICg1MzAuMTcpIHByb3BhZ2F0ZXMgRVNDIG91dCBvZiBhbiBJTUUgY29tcG9zaXRpb24gKG9ic2VydmVkIGF0IGxlYXN0IG9uIFdpbiBYUCkuXG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoc2VsZi5pbWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBIYW5kbGUgcmV0dXJuIGV4cGxpY2l0bHksIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiB0byBiZSBhYmxlIHRvIGNoZWNrIGZvciBjdHJsXG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gUkVUKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5hY2NlcHQoZXZlbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBJbmhpYml0IGRlZmF1bHQgYmVoYXZpb3Igb2YgRVNDIChyZXZlcnQgdG8gbGFzdCByZWFsIGlucHV0IGluIEZGOiB3ZSBkbyB0aGF0IG91cnNlbHZlcylcblx0XHRcdFx0XHRyZXR1cm4ga2V5ID09PSBFU0MgPyBldnRLaWxsKGV2ZW50KSA6IHRydWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBBbmQgaGFuZGxlIGNvbnRpbnVlZCBwcmVzc2luZyBvZiBhcnJvdyBrZXlzXG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRzZWxmLmtleUNvdW50Kys7XG5cdFx0XHRcdFx0cmV0dXJuIHNlbGYucHJvY2Vzc0tleShldmVudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuXHRcdFx0XHRcdG1ha2VBY3RpdmUoc2VsZik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBEb24ndCB0ZXN0IGZvciB0ZXh0LnNlbGVjdGlvblN0YXJ0IGJlaW5nIGRlZmluZWQ7XG5cdFx0XHRcdCQodGV4dCkub24oJ2JsdXInLCB0aGlzLnNhdmVWaWV3LmJpbmQodGhpcykpO1xuXHRcdFx0XHQvLyBET00gTGV2ZWwgMyBJTUUgaGFuZGxpbmdcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBTZXR0aW5nIGxhc3RLZXkgPSBJTUUgcHJvdmlkZXMgYSBmYWtlIGtleURvd24gZm9yIEdlY2tvJ3Mgc2luZ2xlIGtleVVwIGFmdGVyIGEgY21wb3NpdGlvbi4gSWYgd2UgZGlkbid0IGRvIHRoaXMsXG5cdFx0XHRcdFx0Ly8gY2FuY2VsbGluZyBhIGNvbXBvc2l0aW9uIHZpYSBFU0Mgd291bGQgYWxzbyBjYW5jZWwgYW5kIGNsb3NlIHRoZSB3aG9sZSBjYXRlZ29yeSBpbnB1dCBlZGl0b3IuXG5cdFx0XHRcdFx0JCh0ZXh0KS5vbignY29tcG9zaXRpb25zdGFydCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IElNRTtcblx0XHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuaXNDb21wb3NpdGlvblN0YXJ0ID0gdHJ1ZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKHRleHQpLm9uKCdjb21wb3NpdGlvbmVuZCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IElNRTtcblx0XHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRzZWxmLmlzQ29tcG9zaXRpb25TdGFydCA9IGZhbHNlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQodGV4dCkub24oJ3RleHRJbnB1dCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRpZiAoc2VsZi5pc0NvbXBvc2l0aW9uU3RhcnQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2VsZi5pbnZva2VTdWdnZXN0aW9ucyhmYWxzZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIEp1c3QgaW4gY2FzZSBzb21lIGJyb3dzZXJzIG1pZ2h0IHByb2R1Y2UgZXhjZXB0aW9ucyB3aXRoIHRoZXNlIERPTSBMZXZlbCAzIGV2ZW50c1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQodGV4dCkub24oJ2JsdXInLCAoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi51c2VzQ29tcG9zaXRpb24gPSBmYWxzZTtcblx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdFx0XHR0aGlzLmljb24gPSBtYWtlKCdpbWcnKTtcblx0XHRcdGxldCBsaXN0OiBIVE1MU2VsZWN0RWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdGxpc3QgPSBtYWtlKCdzZWxlY3QnKTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRpZiAoc2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UoZmFsc2UsIHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCkpIHtcblx0XHRcdFx0XHRcdHNlbGYuYWNjZXB0KGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKTtcblx0XHRcdFx0XHRzZWxmLnRleHQhLmZvY3VzKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5OiBzdHJpbmcgfCBudW1iZXIgPSBldmVudC5rZXkgfHwgMDtcblx0XHRcdFx0XHRpZiAoa2V5ID09PSBFU0MpIHtcblx0XHRcdFx0XHRcdHNlbGYucmVzZXRLZXlTZWxlY3Rpb24oKTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dCEuZm9jdXMoKTtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9LCBIQy5zdWdnZXN0X2RlbGF5KTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGtleSA9PT0gUkVUKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmFjY2VwdChldmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKCFIQy5maXhlZF9zZWFyY2gpIHtcblx0XHRcdFx0XHRjb25zdCBlbmdpbmVTZWxlY3RvciA9IG1ha2UoJ3NlbGVjdCcpO1xuXHRcdFx0XHRcdGZvciAoY29uc3Qga2V5IGluIHN1Z2dlc3Rpb25Db25maWdzKSB7XG5cdFx0XHRcdFx0XHRpZiAoc3VnZ2VzdGlvbkNvbmZpZ3Nba2V5XSEuc2hvdykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBvcHQgPSBtYWtlKCdvcHRpb24nKTtcblx0XHRcdFx0XHRcdFx0b3B0LnZhbHVlID0ga2V5O1xuXHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSB0aGlzLmVuZ2luZSkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdC5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0b3B0LmFwcGVuZChtYWtlKHN1Z2dlc3Rpb25Db25maWdzW2tleV0hLm5hbWUsIHRydWUpKTtcblx0XHRcdFx0XHRcdFx0ZW5naW5lU2VsZWN0b3IuYXBwZW5kKG9wdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVuZ2luZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuZW5naW5lID0gc2VsZi5lbmdpbmVTZWxlY3RvciEub3B0aW9uc1tzZWxmLmVuZ2luZVNlbGVjdG9yIS5zZWxlY3RlZEluZGV4XSEudmFsdWU7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHQhLmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UodHJ1ZSwgdHJ1ZSk7IC8vIERvbid0IGF1dG9jb21wbGV0ZSwgZm9yY2UgcmUtZGlzcGxheSBvZiBsaXN0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3RvciA9IGVuZ2luZVNlbGVjdG9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3QgPSBsaXN0O1xuXHRcdFx0Ly8gRG8gbm90IHVzZSB0eXBlICdzdWJtaXQnOyB3ZSBjYW5ub3QgZGV0ZWN0IG1vZGlmaWVyIGtleXMgaWYgd2UgZG9cblx0XHRcdGNvbnN0IE9LID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdE9LLnR5cGUgPSAnYnV0dG9uJztcblx0XHRcdE9LLnZhbHVlID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtb2snKTtcblx0XHRcdE9LLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY2NlcHQuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLm9rID0gT0s7XG5cdFx0XHRjb25zdCBjYW5jZWwgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0Y2FuY2VsLnR5cGUgPSAnYnV0dG9uJztcblx0XHRcdGNhbmNlbC52YWx1ZSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhbmNlbCcpO1xuXHRcdFx0Y2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLmNhbmNlbEJ1dHRvbiA9IGNhbmNlbDtcblx0XHRcdGNvbnN0IHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRzcGFuLmNsYXNzTmFtZSA9ICdob3RjYXRpbnB1dCc7XG5cdFx0XHRzcGFuLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcblx0XHRcdHNwYW4uYXBwZW5kKHRleHQpO1xuXHRcdFx0c3Bhbi5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG5cdFx0XHRpZiAobGlzdCkge1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaXN0KTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMuZW5naW5lU2VsZWN0b3IpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMuaWNvbik7XG5cdFx0XHR9XG5cdFx0XHRzcGFuLmFwcGVuZChPSyk7XG5cdFx0XHRzcGFuLmFwcGVuZChjYW5jZWwpO1xuXHRcdFx0Zm9ybS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0aGlzLnNwYW4uYXBwZW5kKGZvcm0pO1xuXHRcdH1cblx0XHRkaXNwbGF5KGV2ZW50PzogSG90Q2F0VUlFdmVudCk6IGZhbHNlIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkgJiYgIW9uVXBsb2FkICYmIHRoaXMubGluZSkge1xuXHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IodGhpcy5saW5lLCBudWxsLCB0aGlzLnNwYW4sIHRydWUpOyAvLyBDcmVhdGUgYSBuZXcgb25lXG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNvbW1pdEJ1dHRvbiAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgIT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMuZm9ybSkge1xuXHRcdFx0XHR0aGlzLm1ha2VGb3JtKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLmxhc3RTYXZlZEhpZGRlbjtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMubGFzdFNhdmVkS2V5O1xuXHRcdFx0dGhpcy5pY29uIS5zcmMgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyBIQy5leGlzdHNZZXMgOiBIQy5leGlzdHNObztcblx0XHRcdHRoaXMudGV4dCEudmFsdWUgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeSArICh0aGlzLmN1cnJlbnRLZXkgPT09IG51bGwgPyAnJyA6IGB8JHt0aGlzLmN1cnJlbnRLZXl9YCk7XG5cdFx0XHR0aGlzLm9yaWdpbmFsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0aGlzLmN1cnJlbnRFeGlzdHM7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEID8gT1BFTiA6IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0dGhpcy5sYXN0U2VsZWN0aW9uID0ge1xuXHRcdFx0XHRzdGFydDogdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoLFxuXHRcdFx0XHRlbmQ6IHRoaXMuY3VycmVudENhdGVnb3J5Lmxlbmd0aCxcblx0XHRcdH07XG5cdFx0XHR0aGlzLnNob3dzTGlzdCA9IGZhbHNlO1xuXHRcdFx0Ly8gRGlzcGxheSB0aGUgZm9ybVxuXHRcdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuZm9ybSEuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHRcdFx0dGhpcy5vayEuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdC8vIEtpbGwgdGhlIGV2ZW50IGJlZm9yZSBmb2N1c2luZywgb3RoZXJ3aXNlIElFIHdpbGwga2lsbCB0aGUgb25mb2N1cyBldmVudCFcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0dGhpcy50ZXh0IS5mb2N1cygpO1xuXHRcdFx0dGhpcy50ZXh0IS5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRzaG93KGV2ZW50OiBIb3RDYXRVSUV2ZW50IHwgdW5kZWZpbmVkLCBlbmdpbmU/OiBzdHJpbmcsIHJlYWRPbmx5PzogYm9vbGVhbik6IGZhbHNlIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMuZGlzcGxheShldmVudCk7XG5cdFx0XHRjb25zdCB2ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50ZXh0IS5yZWFkT25seSA9ICEhcmVhZE9ubHk7XG5cdFx0XHR0aGlzLmVuZ2luZSA9IGVuZ2luZSA/PyAnJztcblx0XHRcdHRoaXMudGV4dGNoYW5nZShmYWxzZSwgdHJ1ZSk7IC8vIGRvIGF1dG9jb21wbGV0aW9uLCBmb3JjZSBkaXNwbGF5IG9mIHN1Z2dlc3Rpb25zXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRvcGVuKGV2ZW50PzogSG90Q2F0VUlFdmVudCk6IGZhbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsIHRoaXMuZW5naW5lICYmIHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXSEudGVtcCA/IEhDLnN1Z2dlc3Rpb25zIDogdGhpcy5lbmdpbmUpO1xuXHRcdH1cblx0XHRkb3duKGV2ZW50PzogSG90Q2F0VUlFdmVudCk6IGZhbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsICdzdWJjYXQnLCB0cnVlKTtcblx0XHR9XG5cdFx0dXAoZXZlbnQ/OiBIb3RDYXRVSUV2ZW50KTogZmFsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgJ3BhcmVudGNhdCcpO1xuXHRcdH1cblx0XHRjYW5jZWwoKTogdm9pZCB7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5ICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpOyAvLyBXZSBhZGRlZCBhIG5ldyBhZGRlciB3aGVuIG9wZW5pbmdcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQ2xvc2UsIHJlLWRpc3BsYXkgbGlua1xuXHRcdFx0dGhpcy5pbmFjdGl2YXRlKCk7XG5cdFx0XHR0aGlzLmZvcm0hLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLmxhc3RTYXZlZEtleTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMubGFzdFNhdmVkRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5sYXN0U2F2ZWRIaWRkZW47XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSAmJiB0aGlzLmN1cnJlbnRLZXkubGVuZ3RoID4gMCA/IHRoaXMuY3VycmVudEtleSA6ICcnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rIS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9XG5cdFx0cmVtb3ZlRWRpdG9yKCk6IHZvaWQge1xuXHRcdFx0aWYgKCFuZXdET00pIHtcblx0XHRcdFx0Y29uc3QgbmV4dCA9IHRoaXMuc3Bhbi5uZXh0U2libGluZztcblx0XHRcdFx0aWYgKG5leHQpIHtcblx0XHRcdFx0XHRuZXh0LnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zcGFuICYmIHRoaXMuc3Bhbi5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3Bhbi5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWRpdG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoZWRpdG9yc1tpXSA9PT0gdGhpcykge1xuXHRcdFx0XHRcdGVkaXRvcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9XG5cdFx0cm9sbGJhY2soZXZlbnQ/OiBIb3RDYXRVSUV2ZW50KTogZmFsc2Uge1xuXHRcdFx0dGhpcy51bmRvTGluayEucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLnVuZG9MaW5rID0gbnVsbDtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMubGFzdFNhdmVkS2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMubGFzdFNhdmVkRXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdHRoaXMuc3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHRpZiAoIXRoaXMuY3VycmVudENhdGVnb3J5IHx8IHRoaXMuY3VycmVudENhdGVnb3J5Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHQvLyBJdCB3YXMgYSBuZXdseSBhZGRlZCBjYXRlZ29yeS4gUmVtb3ZlIHRoZSB3aG9sZSBlZGl0b3IuXG5cdFx0XHRcdHRoaXMucmVtb3ZlRWRpdG9yKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBSZWRpc3BsYXkgdGhlIGxpbmsuLi5cblx0XHRcdFx0dGhpcy5jYXRMaW5rIS5maXJzdENoaWxkIS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rIS5hcHBlbmQobWFrZSh0aGlzLmN1cnJlbnRDYXRlZ29yeSwgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmshLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3RoaXMuY3VycmVudENhdGVnb3J5fWApO1xuXHRcdFx0XHR0aGlzLmNhdExpbmshLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmshLmNsYXNzTmFtZSA9IHRoaXMuY3VycmVudEV4aXN0cyA/ICcnIDogJ25ldyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluayEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdFx0aWYgKHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHR9XG5cdFx0aW5hY3RpdmF0ZSgpOiB2b2lkIHtcblx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlzX2FjdGl2ZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRhY2NlcHRDaGVjayhkb250Q2hlY2s/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cdFx0XHR0aGlzLnNhbml0aXplSW5wdXQoKTtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy50ZXh0IS52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0bGV0IGtleTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdFx0XHRpZiAodmFsdWUubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRrZXkgPSB2YWx1ZVsxXSE7XG5cdFx0XHR9XG5cdFx0XHRsZXQgdiA9IHZhbHVlWzBdIS5yZXBsYWNlKC9fL2csICcgJykudHJpbSgpO1xuXHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMpIHtcblx0XHRcdFx0diA9IGNhcGl0YWxpemUodik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHY7XG5cdFx0XHR2ID0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0IWRvbnRDaGVjayAmJlxuXHRcdFx0XHQoKGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHYgPT09IGNvbmYud2dUaXRsZSkgfHwgKEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB2O1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0ga2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5pbnB1dEV4aXN0cztcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRhY2NlcHQoZXZlbnQ/OiBIb3RDYXRVSUV2ZW50KTogZmFsc2Uge1xuXHRcdFx0Ly8gKGV2dEtleXMoZXZlbnQpICYgMSkgIT09IDBcblx0XHRcdC8vIOW9k+S4lOS7heW9k2V2dEtleXMoZXZlbnQp5Li6MeaXtu+8jOaVtOS4quWIpOWIq+W8j+aJjeS4unRydWVcblx0XHRcdHRoaXMubm9Db21taXQgPSBldnRLZXlzKGV2ZW50KSA9PT0gMTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0aWYgKHRoaXMuYWNjZXB0Q2hlY2soKSkge1xuXHRcdFx0XHRjb25zdCB0b1Jlc29sdmUgPSBbdGhpc107XG5cdFx0XHRcdHJlc29sdmVNdWx0aSh0b1Jlc29sdmUsIChyZXNvbHZlZCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGVkaXRvciA9IHJlc29sdmVkWzBdITtcblx0XHRcdFx0XHRpZiAoZWRpdG9yLmRhYikge1xuXHRcdFx0XHRcdFx0c2hvd0RhYihlZGl0b3IpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZWRpdG9yLmFjY2VwdENoZWNrKHRydWUpKSB7XG5cdFx0XHRcdFx0XHRlZGl0b3IuY29tbWl0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdGNsb3NlKCk6IHZvaWQge1xuXHRcdFx0aWYgKCF0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0Ly8gQ3JlYXRlIGEgY2F0TGlua1xuXHRcdFx0XHR0aGlzLmNhdExpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5hcHBlbmQobWFrZSgnZm9vJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0dGhpcy5zcGFuLmluc2VydEJlZm9yZSh0aGlzLmNhdExpbmssIHRoaXMuc3Bhbi5maXJzdENoaWxkIS5uZXh0U2libGluZyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNhdExpbmsuZmlyc3RDaGlsZCEucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLmNhdExpbmsuYXBwZW5kKG1ha2UodGhpcy5jdXJyZW50Q2F0ZWdvcnksIHRydWUpKTtcblx0XHRcdHRoaXMuY2F0TGluay5ocmVmID0gd2lraVBhZ2VQYXRoKGAke0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0aGlzLmN1cnJlbnRDYXRlZ29yeX1gKTtcblx0XHRcdHRoaXMuY2F0TGluay5jbGFzc05hbWUgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICduZXcnO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLmN1cnJlbnRLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMuY3VycmVudEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5jdXJyZW50SGlkZGVuO1xuXHRcdFx0Ly8gQ2xvc2UgZm9ybSBhbmQgcmVkaXNwbGF5IGNhdGVnb3J5XG5cdFx0XHR0aGlzLmluYWN0aXZhdGUoKTtcblx0XHRcdHRoaXMuZm9ybSEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSB8fCAnJztcblx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5KSB7XG5cdFx0XHRcdGlmIChvblVwbG9hZCAmJiB0aGlzLmxpbmUpIHtcblx0XHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IodGhpcy5saW5lLCBudWxsLCB0aGlzLnNwYW4sIHRydWUpOyAvLyBDcmVhdGUgYSBuZXcgb25lXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubGlua1NwYW4ucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMubWFrZUxpbmtTcGFuKCk7XG5cdFx0XHRcdHRoaXMuc3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMudW5kb0xpbmspIHtcblx0XHRcdFx0Ly8gQXBwZW5kIGFuIHVuZG8gbGluay5cblx0XHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJvbGxiYWNrLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnVuZG8sIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXVuZG8nKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MhLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0dGhpcy51bmRvTGluayA9IHNwYW47XG5cdFx0XHRcdGlmICghb25VcGxvYWQpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHMgPyAnJyA6ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRUQ7XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9XG5cdFx0Y29tbWl0KCk6IHZvaWQge1xuXHRcdFx0Ly8gQ2hlY2sgYWdhaW4gdG8gY2F0Y2ggcHJvYmxlbSBjYXNlcyBhZnRlciByZWRpcmVjdCByZXNvbHV0aW9uXG5cdFx0XHRpZiAoXG5cdFx0XHRcdCh0aGlzLmN1cnJlbnRDYXRlZ29yeSA9PT0gdGhpcy5vcmlnaW5hbENhdGVnb3J5ICYmXG5cdFx0XHRcdFx0KHRoaXMuY3VycmVudEtleSA9PT0gdGhpcy5vcmlnaW5hbEtleSB8fFxuXHRcdFx0XHRcdFx0KHRoaXMuY3VycmVudEtleSA9PT0gbnVsbCAmJiB0aGlzLm9yaWdpbmFsS2V5IS5sZW5ndGggPT09IDApKSkgfHxcblx0XHRcdFx0KGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHRoaXMuY3VycmVudENhdGVnb3J5ID09PSBjb25mLndnVGl0bGUpIHx8XG5cdFx0XHRcdChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QodGhpcy5jdXJyZW50Q2F0ZWdvcnkpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlLCBzZWxmKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlbW92ZShldmVudD86IEhvdENhdFVJRXZlbnQpOiBmYWxzZSB7XG5cdFx0XHQvLyAoZXZ0S2V5cyhldmVudCkgJiAxKVxuXHRcdFx0Ly8g5b2T5LiU5LuF5b2TZXZ0S2V5cyhldmVudCnkuLox5pe277yM5pW05Liq5Yik5Yir5byP5omN5Li6Me+8jOWQpuWImemDveaYrzBcblx0XHRcdHRoaXMuZG9SZW1vdmUoZXZ0S2V5cyhldmVudCkgPT09IDEpO1xuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHRkb1JlbW92ZShub0NvbW1pdD86IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdFx0Ly8gRW1wdHkgaW5wdXQgb24gYWRkaW5nIGEgbmV3IGNhdGVnb3J5XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rIS50aXRsZSA9ICcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmshLnN0eWxlLmNzc1RleHQgKz0gJzsgdGV4dC1kZWNvcmF0aW9uIDogbGluZS10aHJvdWdoICFpbXBvcnRhbnQ7Jztcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmshLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IERFTEVURUQ7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdHRoaXMudW5kZWxMaW5rIS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0fSBlbHNlIGlmIChvblVwbG9hZCkge1xuXHRcdFx0XHQvLyBSZW1vdmUgdGhpcyBlZGl0b3IgY29tcGxldGVseVxuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IERFTEVURUQ7XG5cdFx0XHRcdHRoaXMubm9Db21taXQgPSAhIW5vQ29tbWl0IHx8IEhDLmRlbF9uZWVkc19kaWZmO1xuXHRcdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlLCBzZWxmKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuc3RhdGUgPSBzZWxmLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXN0b3JlKGV2ZW50PzogSG90Q2F0VUlFdmVudCk6IGZhbHNlIHtcblx0XHRcdC8vIENhbiBvY2N1ciBvbmx5IGlmIHdlIGRvIGhhdmUgYSBjb21taXQgYnV0dG9uIGFuZCBhcmUgbm90IG9uIHRoZSB1cGxvYWQgZm9ybVxuXHRcdFx0dGhpcy5jYXRMaW5rIS50aXRsZSA9IHRoaXMuY3VycmVudEtleSB8fCAnJztcblx0XHRcdHRoaXMuY2F0TGluayEuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluayEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rIS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5vcm1hbExpbmtzIS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR0aGlzLnVuZGVsTGluayEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHQvLyBJbnRlcm5hbCBvcGVyYXRpb25zXG5cdFx0c2VsZWN0RW5naW5lKGVuZ2luZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0aWYgKCF0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmdpbmVTZWxlY3Rvci5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iub3B0aW9uc1tpXSEuc2VsZWN0ZWQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbaV0hLnZhbHVlID09PSBlbmdpbmVOYW1lO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzYW5pdGl6ZUlucHV0KCk6IHZvaWQge1xuXHRcdFx0bGV0IHYgPSB0aGlzLnRleHQhLnZhbHVlIHx8ICcnO1xuXHRcdFx0diA9IHYucmVwbGFjZSgvXihcXHN8XykrLywgJycpOyAvLyBUcmltIGxlYWRpbmcgYmxhbmtzIGFuZCB1bmRlcnNjb3Jlc1xuXHRcdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGBeKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRpZiAocmUudGVzdCh2KSkge1xuXHRcdFx0XHR2ID0gdi5zbGljZShNYXRoLm1heCgwLCB2LmluZGV4T2YoJzonKSArIDEpKS5yZXBsYWNlKC9eKFxcc3xfKSsvLCAnJyk7XG5cdFx0XHR9XG5cdFx0XHR2ID0gdi5yZXBsYWNlKC9cXHUyMDBFJC8sICcnKTsgLy8gVHJpbSBlbmRpbmcgbGVmdC10by1yaWdodCBtYXJrXG5cdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcykge1xuXHRcdFx0XHR2ID0gY2FwaXRhbGl6ZSh2KTtcblx0XHRcdH1cblx0XHRcdC8vIE9ubHkgdXBkYXRlIHRoZSBpbnB1dCBmaWVsZCBpZiB0aGVyZSBpcyBhIGRpZmZlcmVuY2UuIFZhcmlvdXMgYnJvd3NlcnMgb3RoZXJ3aXNlXG5cdFx0XHQvLyByZXNldCB0aGUgc2VsZWN0aW9uIGFuZCBjdXJzb3IgcG9zaXRpb24gYWZ0ZXIgZWFjaCB2YWx1ZSByZS1hc3NpZ25tZW50LlxuXHRcdFx0aWYgKHRoaXMudGV4dCEudmFsdWUgIT09IG51bGwgJiYgdGhpcy50ZXh0IS52YWx1ZSAhPT0gdikge1xuXHRcdFx0XHR0aGlzLnRleHQhLnZhbHVlID0gdjtcblx0XHRcdH1cblx0XHR9XG5cdFx0bWFrZUNhbGwoXG5cdFx0XHR1cmw6IHN0cmluZyxcblx0XHRcdGNhbGxiYWNrT2JqOiBIb3RDYXRTdWdnZXN0aW9uQ2FsbGJhY2ssXG5cdFx0XHRlbmdpbmU6IEhvdENhdFN1Z2dlc3Rpb25FbmdpbmUsXG5cdFx0XHRxdWVyeUtleTogc3RyaW5nLFxuXHRcdFx0Y2xlYW5LZXk6IHN0cmluZ1xuXHRcdCk6IHZvaWQge1xuXHRcdFx0bGV0IGNiOiBIb3RDYXRTdWdnZXN0aW9uQ2FsbGJhY2sgfCBudWxsID0gY2FsbGJhY2tPYmo7XG5cdFx0XHRjb25zdCBlID0gZW5naW5lO1xuXHRcdFx0Y29uc3QgdiA9IHF1ZXJ5S2V5O1xuXHRcdFx0Y29uc3QgeiA9IGNsZWFuS2V5O1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRjb25zdCBkb25lID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjYiEuY2FsbHNNYWRlKys7XG5cdFx0XHRcdGlmIChjYiEuY2FsbHNNYWRlID09PSBjYiEubm9mQ2FsbHMpIHtcblx0XHRcdFx0XHRpZiAoY2IhLmV4aXN0cykge1xuXHRcdFx0XHRcdFx0Y2IhLmFsbFRpdGxlcyEuZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNiIS5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0XHRjYiEuYWxsVGl0bGVzIS5ub3JtYWxpemVkID0gY2IhLm5vcm1hbGl6ZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IHN1Z2dlc3Rpb25Db25maWcgPSBzdWdnZXN0aW9uQ29uZmlnc1tjYiEuZW5naW5lTmFtZV0hO1xuXHRcdFx0XHRcdGlmICghY2IhLmRvbnRDYWNoZSAmJiAhc3VnZ2VzdGlvbkNvbmZpZy5jYWNoZVt6XSkge1xuXHRcdFx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZy5jYWNoZVt6XSA9IGNiIS5hbGxUaXRsZXMhO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzZWxmLnRleHQhLnJlYWRPbmx5ID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKCFjYiEuY2FuY2VsbGVkKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnNob3dTdWdnZXN0aW9ucyhjYiEuYWxsVGl0bGVzLCBjYiEubm9Db21wbGV0aW9uLCB2LCBjYiEuZW5naW5lTmFtZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjYiA9PT0gc2VsZi5jYWxsYmFja09iaikge1xuXHRcdFx0XHRcdFx0c2VsZi5jYWxsYmFja09iaiA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNiID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdCQuZ2V0SlNPTih1cmwsIChqc29uKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlcyA9IGUuaGFuZGxlcihqc29uLCB6KTtcblx0XHRcdFx0aWYgKHRpdGxlcyAmJiB0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNiIS5hbGxUaXRsZXMgPSBjYiEuYWxsVGl0bGVzID09PSBudWxsID8gdGl0bGVzIDogWy4uLmNiIS5hbGxUaXRsZXNdLmNvbmNhdCh0aXRsZXMpO1xuXHRcdFx0XHRcdGlmICh0aXRsZXMuZXhpc3RzKSB7XG5cdFx0XHRcdFx0XHRjYiEuZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRpdGxlcy5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0XHRjYiEubm9ybWFsaXplZCA9IHRpdGxlcy5ub3JtYWxpemVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRkb25lKCk7XG5cdFx0XHR9KS5mYWlsKChyZXEpID0+IHtcblx0XHRcdFx0aWYgKCFyZXEpIHtcblx0XHRcdFx0XHRub1N1Z2dlc3Rpb25zID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYiEuZG9udENhY2hlID0gdHJ1ZTtcblx0XHRcdFx0ZG9uZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHRleHRjaGFuZ2UoZG9udF9hdXRvY29tcGxldGU/OiBib29sZWFuLCBmb3JjZT86IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRcdC8vIEhpZGUgYWxsIG90aGVyIGxpc3RzXG5cdFx0XHRtYWtlQWN0aXZlKHRoaXMpO1xuXHRcdFx0Ly8gQWJvcnQgaWYgaXNDb21wb3NpdGlvblN0YXJ0XG5cdFx0XHRpZiAodGhpcy5pc0NvbXBvc2l0aW9uU3RhcnQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gR2V0IGlucHV0IHZhbHVlLCBvbWl0IHNvcnQga2V5LCBpZiBhbnlcblx0XHRcdHRoaXMuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0bGV0IHYgPSB0aGlzLnRleHQhLnZhbHVlO1xuXHRcdFx0Ly8gRGlzcmVnYXJkIGFueXRoaW5nIGFmdGVyIGEgcGlwZS5cblx0XHRcdGNvbnN0IHBpcGUgPSB2LmluZGV4T2YoJ3wnKTtcblx0XHRcdGlmIChwaXBlID09PSAtMSkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdi5zbGljZShNYXRoLm1heCgwLCBwaXBlICsgMSkpO1xuXHRcdFx0XHR2ID0gdi5zbGljZSgwLCBNYXRoLm1heCgwLCBwaXBlKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQgPT09IHYgJiYgIWZvcmNlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gLy8gTm8gY2hhbmdlXG5cdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQgIT09IHYpIHtcblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHY7XG5cdFx0XHR0aGlzLmxhc3RSZWFsSW5wdXQgPSB2O1xuXHRcdFx0Ly8gTWFyayBibGFja2xpc3RlZCBpbnB1dHMuXG5cdFx0XHR0aGlzLm9rIS5kaXNhYmxlZCA9IHYubGVuZ3RoID4gMCAmJiAhIUhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KTtcblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdC8vIE5vIEFqYXg6IGp1c3QgbWFrZSBzdXJlIHRoZSBsaXN0IGlzIGhpZGRlblxuXHRcdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhbXSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCBjbGVhbktleSA9IHYucmVwbGFjZSgvW1xcdTIwMEVcXHUyMDBGXFx1MjAyQS1cXHUyMDJFXS9nLCAnJykucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsICcgJyk7XG5cdFx0XHRjbGVhbktleSA9IHJlcGxhY2VTaG9ydGN1dHMoY2xlYW5LZXksIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRjbGVhbktleSA9IGNsZWFuS2V5LnRyaW0oKTtcblx0XHRcdGlmIChjbGVhbktleS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoW10pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5jYWxsYmFja09iaikge1xuXHRcdFx0XHR0aGlzLmNhbGxiYWNrT2JqLmNhbmNlbGxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBlbmdpbmVOYW1lID0gc3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdID8gdGhpcy5lbmdpbmUgOiAnY29tYmluZWQnO1xuXHRcdFx0ZG9udF9hdXRvY29tcGxldGUgfHw9IHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdIS5ub0NvbXBsZXRpb247XG5cdFx0XHRjb25zdCBjYWNoZWRUaXRsZXMgPSBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSEuY2FjaGVbY2xlYW5LZXldO1xuXHRcdFx0aWYgKGNhY2hlZFRpdGxlcykge1xuXHRcdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhjYWNoZWRUaXRsZXMsIGRvbnRfYXV0b2NvbXBsZXRlLCB2LCBlbmdpbmVOYW1lKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qge2VuZ2luZXN9ID0gc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0hO1xuXHRcdFx0dGhpcy5jYWxsYmFja09iaiA9IHtcblx0XHRcdFx0YWxsVGl0bGVzOiBudWxsLFxuXHRcdFx0XHRjYWxsc01hZGU6IDAsXG5cdFx0XHRcdG5vZkNhbGxzOiBlbmdpbmVzLmxlbmd0aCxcblx0XHRcdFx0bm9Db21wbGV0aW9uOiBkb250X2F1dG9jb21wbGV0ZSxcblx0XHRcdFx0ZW5naW5lTmFtZSxcblx0XHRcdH07XG5cdFx0XHR0aGlzLm1ha2VDYWxscyhlbmdpbmVzLCB0aGlzLmNhbGxiYWNrT2JqLCB2LCBjbGVhbktleSk7XG5cdFx0fVxuXHRcdG1ha2VDYWxscyhlbmdpbmVzOiBzdHJpbmdbXSwgY2I6IEhvdENhdFN1Z2dlc3Rpb25DYWxsYmFjaywgdjogc3RyaW5nLCBjbGVhbktleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHRmb3IgKGNvbnN0IGVuZ2luZV8gb2YgZW5naW5lcykge1xuXHRcdFx0XHRjb25zdCBlbmdpbmUgPSBzdWdnZXN0aW9uRW5naW5lc1tlbmdpbmVfXSE7XG5cdFx0XHRcdGNvbnN0IHVybCA9IGNvbmYud2dTY3JpcHRQYXRoICsgZW5naW5lLnVyaS5yZXBsYWNlKC9cXCQxL2csIGVuY29kZVVSSUNvbXBvbmVudChjbGVhbktleSkpO1xuXHRcdFx0XHR0aGlzLm1ha2VDYWxsKHVybCwgY2IsIGVuZ2luZSwgdiwgY2xlYW5LZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzaG93U3VnZ2VzdGlvbnMoXG5cdFx0XHR0aXRsZXM6IEhvdENhdFN1Z2dlc3Rpb25UaXRsZXMgfCBudWxsLFxuXHRcdFx0ZG9udEF1dG9jb21wbGV0ZT86IGJvb2xlYW4sXG5cdFx0XHRxdWVyeUtleT86IHN0cmluZyB8IG51bGwsXG5cdFx0XHRlbmdpbmVOYW1lPzogc3RyaW5nIHwgbnVsbFxuXHRcdCk6IHZvaWQge1xuXHRcdFx0dGhpcy50ZXh0IS5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5kYWIgPSBudWxsO1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRcdGlmICghdGhpcy5saXN0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIERlZmF1bHQuLi5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5lbmdpbmVOYW1lID0gZW5naW5lTmFtZSA/PyBudWxsO1xuXHRcdFx0aWYgKGVuZ2luZU5hbWUpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVOYW1lID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLmxhc3RJbnB1dDtcblx0XHRcdGlmIChxdWVyeUtleSkge1xuXHRcdFx0XHRpZiAoaW5wdXRWYWx1ZS5pbmRleE9mKHF1ZXJ5S2V5KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy5sYXN0UXVlcnkgJiZcblx0XHRcdFx0XHRpbnB1dFZhbHVlLmluZGV4T2YodGhpcy5sYXN0UXVlcnkpID09PSAwICYmXG5cdFx0XHRcdFx0dGhpcy5sYXN0UXVlcnkubGVuZ3RoID4gcXVlcnlLZXkubGVuZ3RoXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0UXVlcnkgPSBxdWVyeUtleTtcblx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdGNvbnN0IHYgPSB0aGlzLnRleHQhLnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHRjb25zdCBjYXRlZ29yeU5hbWUgPSBIQy5jYXBpdGFsaXplUGFnZU5hbWVzID8gY2FwaXRhbGl6ZSh2WzBdKSA6IHZbMF0hO1xuXHRcdFx0bGV0IHZOb3JtYWxpemVkID0gY2F0ZWdvcnlOYW1lO1xuXHRcdFx0Y29uc3Qga25vd25Ub0V4aXN0ID0gdGl0bGVzICYmIHRpdGxlcy5leGlzdHM7XG5cdFx0XHRsZXQgaTogbnVtYmVyO1xuXHRcdFx0aWYgKHRpdGxlcykge1xuXHRcdFx0XHRpZiAodGl0bGVzLm5vcm1hbGl6ZWQgJiYgY2F0ZWdvcnlOYW1lLmluZGV4T2YocXVlcnlLZXkgPz8gJycpID09PSAwKSB7XG5cdFx0XHRcdFx0Ly8gV2UgZ290IGJhY2sgYSBkaWZmZXJlbnQgbm9ybWFsaXphdGlvbiB0aGFuIHdoYXQgaXMgaW4gdGhlIGlucHV0IGZpZWxkXG5cdFx0XHRcdFx0dk5vcm1hbGl6ZWQgPSB0aXRsZXMubm9ybWFsaXplZCArIGNhdGVnb3J5TmFtZS5zbGljZSgocXVlcnlLZXkgPz8gJycpLmxlbmd0aCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdkxvdyA9IHZOb3JtYWxpemVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdC8vIFN0cmlwIGJsYWNrbGlzdGVkIGNhdGVnb3JpZXNcblx0XHRcdFx0aWYgKEhDLmJsYWNrbGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChIQy5ibGFja2xpc3QudGVzdCh0aXRsZXNbaV0hKSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRpdGxlcy5zb3J0KChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdGlmIChhID09PSBiKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGEuaW5kZXhPZihiKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGEgYmVnaW5zIHdpdGggYjogYSA+IGJcblx0XHRcdFx0XHRpZiAoYi5pbmRleE9mKGEpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGIgYmVnaW5zIHdpdGggYTogYSA8IGJcblx0XHRcdFx0XHQvLyBPcGVuc2VhcmNoIG1heSByZXR1cm4gc3R1ZmYgbm90IGJlZ2lubmluZyB3aXRoIHRoZSBzZWFyY2ggcHJlZml4IVxuXHRcdFx0XHRcdGxldCBwcmVmaXhNYXRjaEEgPSBhLmluZGV4T2Yodk5vcm1hbGl6ZWQpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0bGV0IHByZWZpeE1hdGNoQiA9IGIuaW5kZXhPZih2Tm9ybWFsaXplZCkgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRpZiAocHJlZml4TWF0Y2hBICE9PSBwcmVmaXhNYXRjaEIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVmaXhNYXRjaEIgLSBwcmVmaXhNYXRjaEE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIENhc2UtaW5zZW5zaXRpdmUgcHJlZml4IG1hdGNoIVxuXHRcdFx0XHRcdGNvbnN0IGFMb3cgPSBhLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0Y29uc3QgYkxvdyA9IGIudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRwcmVmaXhNYXRjaEEgPSBhTG93LmluZGV4T2YodkxvdykgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRwcmVmaXhNYXRjaEIgPSBiTG93LmluZGV4T2YodkxvdykgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRpZiAocHJlZml4TWF0Y2hBICE9PSBwcmVmaXhNYXRjaEIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVmaXhNYXRjaEIgLSBwcmVmaXhNYXRjaEE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhIDwgYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYiA8IGEpIHtcblx0XHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIFJlbW92ZSBkdXBsaWNhdGVzIGFuZCBzZWxmLXJlZmVyZW5jZXNcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdChpICsgMSA8IHRpdGxlcy5sZW5ndGggJiYgdGl0bGVzW2ldID09PSB0aXRsZXNbaSArIDFdKSB8fFxuXHRcdFx0XHRcdFx0KGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHRpdGxlc1tpXSA9PT0gY29uZi53Z1RpdGxlKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghdGl0bGVzIHx8IHRpdGxlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbmdpbmVOYW1lICYmIHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdICYmICFzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSEudGVtcCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHRcdHRoaXMuaWNvbi5zcmMgPSBIQy5leGlzdHNObztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFtmaXJzdFRpdGxlXSA9IHRpdGxlcztcblx0XHRcdGNvbnN0IGNvbXBsZXRlZCA9IHRoaXMuYXV0b0NvbXBsZXRlKGZpcnN0VGl0bGUhLCBjYXRlZ29yeU5hbWUsIHZOb3JtYWxpemVkLCBrZXksIGRvbnRBdXRvY29tcGxldGUpO1xuXHRcdFx0Y29uc3QgZXhpc3RpbmcgPSBjb21wbGV0ZWQgfHwga25vd25Ub0V4aXN0IHx8IGZpcnN0VGl0bGUgPT09IHJlcGxhY2VTaG9ydGN1dHMoY2F0ZWdvcnlOYW1lLCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0aWYgKGVuZ2luZU5hbWUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0gJiYgIXN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdIS50ZW1wKSB7XG5cdFx0XHRcdHRoaXMuaWNvbiEuc3JjID0gZXhpc3RpbmcgPyBIQy5leGlzdHNZZXMgOiBIQy5leGlzdHNObztcblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9ICEhZXhpc3Rpbmc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY29tcGxldGVkKSB7XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gZmlyc3RUaXRsZSE7XG5cdFx0XHRcdGlmICh0aXRsZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyAoUmUtKWZpbGwgdGhlIGxpc3Rcblx0XHRcdHdoaWxlICh0aGlzLmxpc3QuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHR0aGlzLmxpc3QuZmlyc3RDaGlsZC5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3B0ID0gbWFrZSgnb3B0aW9uJyk7XG5cdFx0XHRcdG9wdC5hcHBlbmQobWFrZSh0aXRsZXNbaV0hLCB0cnVlKSk7XG5cdFx0XHRcdG9wdC5zZWxlY3RlZCA9IGNvbXBsZXRlZCAmJiBpID09PSAwO1xuXHRcdFx0XHR0aGlzLmxpc3QuYXBwZW5kKG9wdCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRpc3BsYXlMaXN0KCk7XG5cdFx0fVxuXHRcdGRpc3BsYXlMaXN0KCk6IHZvaWQge1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSB0cnVlO1xuXHRcdFx0aWYgKCF0aGlzLmlzX2FjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLmxpc3QhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCBub2ZJdGVtcyA9IE1hdGgubWluKHRoaXMubGlzdCEub3B0aW9ucy5sZW5ndGgsIEhDLmxpc3RTaXplKTtcblx0XHRcdGlmIChub2ZJdGVtcyA8PSAxKSB7XG5cdFx0XHRcdG5vZkl0ZW1zID0gMjtcblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdCEuc2l6ZSA9IG5vZkl0ZW1zO1xuXHRcdFx0c2V0U3R5bGVQcm9wZXJ0eSh0aGlzLmxpc3QhLCAnYWxpZ24nLCBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnKTtcblx0XHRcdHRoaXMubGlzdCEuc3R5bGUuekluZGV4ID0gJzUnO1xuXHRcdFx0dGhpcy5saXN0IS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0XHQvLyBDb21wdXRlIGluaXRpYWwgbGlzdCBwb3NpdGlvbi4gRmlyc3QgdGhlIGhlaWdodC5cblx0XHRcdGNvbnN0IGFuY2hvciA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0XHRsZXQgbGlzdGggPSAwO1xuXHRcdFx0aWYgKHRoaXMubGlzdCEuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdC8vIE9mZi1zY3JlZW4gZGlzcGxheSB0byBnZXQgdGhlIGhlaWdodFxuXHRcdFx0XHR0aGlzLmxpc3QhLnN0eWxlLnRvcCA9IGAke3RoaXMudGV4dCEub2Zmc2V0VG9wfXB4YDtcblx0XHRcdFx0dGhpcy5saXN0IS5zdHlsZVthbmNob3JdID0gJy0xMDAwMHB4Jztcblx0XHRcdFx0dGhpcy5saXN0IS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdGxpc3RoID0gdGhpcy5saXN0IS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdHRoaXMubGlzdCEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxpc3RoID0gdGhpcy5saXN0IS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0XHQvLyBBcHByb3hpbWF0ZSBjYWxjdWxhdGlvbiBvZiBtYXhpbXVtIGxpc3Qgc2l6ZVxuXHRcdFx0bGV0IG1heExpc3RIZWlnaHQgPSBsaXN0aDtcblx0XHRcdGlmIChub2ZJdGVtcyA8IEhDLmxpc3RTaXplKSB7XG5cdFx0XHRcdG1heExpc3RIZWlnaHQgPSAobGlzdGggLyBub2ZJdGVtcykgKiBIQy5saXN0U2l6ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHZpZXdwb3J0ID0gKHdoYXQ6ICdXaWR0aCcgfCAnSGVpZ2h0Jyk6IG51bWJlciA9PiB7XG5cdFx0XHRcdGNvbnN0IHMgPSBgY2xpZW50JHt3aGF0fWAgYXMgJ2NsaWVudFdpZHRoJyB8ICdjbGllbnRIZWlnaHQnO1xuXHRcdFx0XHRyZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3NdIDogMDtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBzY3JvbGxfb2Zmc2V0ID0gKHdoYXQ6ICdMZWZ0JyB8ICdUb3AnIHwgJ1dpZHRoJyk6IG51bWJlciA9PiB7XG5cdFx0XHRcdGNvbnN0IHMgPSBgc2Nyb2xsJHt3aGF0fWAgYXMgJ3Njcm9sbExlZnQnIHwgJ3Njcm9sbFRvcCcgfCAnc2Nyb2xsV2lkdGgnO1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3NdIDogMDtcblx0XHRcdFx0aWYgKGlzX3J0bCAmJiB3aGF0ID09PSAnTGVmdCcpIHtcblx0XHRcdFx0XHQvLyBSVEwgaW5jb25zaXN0ZW5jaWVzLlxuXHRcdFx0XHRcdC8vIEZGOiAwIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gaW5jcmVhc2luZ2x5IG5lZ2F0aXZlIHZhbHVlcy5cblx0XHRcdFx0XHQvLyBJRSA+PSA4OiAwIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gaW5jcmVhc2luZ2x5IHBvc2l0aXZlIHZhbHVlcy5cblx0XHRcdFx0XHQvLyBXZWJraXQ6IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggYXQgdGhlIGZhciByaWdodCwgdGhlbiBkb3duIHRvIHplcm8uXG5cdFx0XHRcdFx0Ly8gT3BlcmE6IGRvbid0IGtub3cuLi5cblx0XHRcdFx0XHRpZiAocmVzdWx0IDwgMCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gLXJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFpc193ZWJraXQpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHNjcm9sbF9vZmZzZXQoJ1dpZHRoJykgLSB2aWV3cG9ydCgnV2lkdGgnKSAtIHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gTm93IGFsbCBoYXZlIHdlYmtpdCBiZWhhdmlvciwgaS5lLiB6ZXJvIGlmIGF0IHRoZSBsZWZ0bW9zdCBlZGdlLlxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSAobm9kZTogSFRNTEVsZW1lbnQpOiB7eDogbnVtYmVyOyB5OiBudW1iZXJ9ID0+IHtcblx0XHRcdFx0Ly8gU3RyaXBwZWQtZG93biBzaW1wbGlmaWVkIHBvc2l0aW9uIGZ1bmN0aW9uLiBJdCdzIGdvb2QgZW5vdWdoIGZvciBvdXIgcHVycG9zZXMuXG5cdFx0XHRcdGNvbnN0IGJveCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0eDogTWF0aC5yb3VuZChib3gubGVmdCArIHNjcm9sbF9vZmZzZXQoJ0xlZnQnKSksXG5cdFx0XHRcdFx0eTogTWF0aC5yb3VuZChib3gudG9wICsgc2Nyb2xsX29mZnNldCgnVG9wJykpLFxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHRleHRQb3MgPSBwb3NpdGlvbih0aGlzLnRleHQhKTtcblx0XHRcdGNvbnN0IG5sID0gMDtcblx0XHRcdGxldCBudCA9IDA7XG5cdFx0XHQvLyBPcGVyYSA5LjUgc29tZWhvdyBoYXMgb2Zmc2V0V2lkdGggPSAwIGhlcmU/PyBVc2UgdGhlIG5leHQgYmVzdCB2YWx1ZS4uLlxuXHRcdFx0bGV0IG9mZnNldCA9IDA7XG5cdFx0XHRjb25zdCB0ZXh0Qm94V2lkdGggPSB0aGlzLnRleHQhLm9mZnNldFdpZHRoIHx8IHRoaXMudGV4dCEuY2xpZW50V2lkdGg7XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlLnpJbmRleCA9ICc1Jztcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3RvciEuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS53aWR0aCA9IGAke3RleHRCb3hXaWR0aH1weGA7XG5cdFx0XHRcdC8vIEZpZ3VyZSBvdXQgdGhlIGhlaWdodCBvZiB0aGlzIHNlbGVjdG9yOiBkaXNwbGF5IGl0IG9mZi1zY3JlZW4sIHRoZW4gaGlkZSBpdCBhZ2Fpbi5cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlW2FuY2hvcl0gPSAnLTEwMDAwcHgnO1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlLnRvcCA9ICcwJztcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5lbmdpbmVTZWxlY3RvciEub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5lbmdpbmVTZWxlY3RvciEub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlW2FuY2hvcl0gPSBgJHtubH1weGA7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGV4dFBvcy55IDwgbWF4TGlzdEhlaWdodCArIG9mZnNldCArIDEpIHtcblx0XHRcdFx0Ly8gVGhlIGxpc3QgbWlnaHQgZXh0ZW5kIGJleW9uZCB0aGUgdXBwZXIgYm9yZGVyIG9mIHRoZSBwYWdlLiBMZXQncyBhdm9pZCB0aGF0IGJ5IHBsYWNpbmcgaXRcblx0XHRcdFx0Ly8gYmVsb3cgdGhlIGlucHV0IHRleHQgZmllbGQuXG5cdFx0XHRcdG50ID0gdGhpcy50ZXh0IS5vZmZzZXRIZWlnaHQgKyBvZmZzZXQgKyAxO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3RvciEuc3R5bGUudG9wID0gYCR7dGhpcy50ZXh0IS5vZmZzZXRIZWlnaHR9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRudCA9IC1saXN0aCAtIG9mZnNldCAtIDE7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS50b3AgPSBgJHstKG9mZnNldCArIDEpfXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0IS5zdHlsZS50b3AgPSBgJHtudH1weGA7XG5cdFx0XHR0aGlzLmxpc3QhLnN0eWxlLndpZHRoID0gJyc7IC8vIE5vIGZpeGVkIHdpZHRoICh5ZXQpXG5cdFx0XHR0aGlzLmxpc3QhLnN0eWxlW2FuY2hvcl0gPSBgJHtubH1weGA7XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RW5naW5lKHRoaXMuZW5naW5lTmFtZSk7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdCEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHQvLyBTZXQgdGhlIHdpZHRoIG9mIHRoZSBsaXN0XG5cdFx0XHRpZiAodGhpcy5saXN0IS5vZmZzZXRXaWR0aCA8IHRleHRCb3hXaWR0aCkge1xuXHRcdFx0XHR0aGlzLmxpc3QhLnN0eWxlLndpZHRoID0gYCR7dGV4dEJveFdpZHRofXB4YDtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgdGhlIGxpc3QgaXMgd2lkZXIgdGhhbiB0aGUgdGV4dGJveDogbWFrZSBzdXJlIGl0IGZpdHMgaG9yaXpvbnRhbGx5IGludG8gdGhlIGJyb3dzZXIgd2luZG93XG5cdFx0XHRjb25zdCBzY3JvbGwgPSBzY3JvbGxfb2Zmc2V0KCdMZWZ0Jyk7XG5cdFx0XHRjb25zdCB2aWV3X3cgPSB2aWV3cG9ydCgnV2lkdGgnKTtcblx0XHRcdGxldCB3ID0gdGhpcy5saXN0IS5vZmZzZXRXaWR0aDtcblx0XHRcdGNvbnN0IGxfcG9zID0gcG9zaXRpb24odGhpcy5saXN0ISk7XG5cdFx0XHRsZXQgbGVmdCA9IGxfcG9zLng7XG5cdFx0XHRsZXQgcmlnaHQgPSBsZWZ0ICsgdztcblx0XHRcdGlmIChsZWZ0IDwgc2Nyb2xsIHx8IHJpZ2h0ID4gc2Nyb2xsICsgdmlld193KSB7XG5cdFx0XHRcdGlmICh3ID4gdmlld193KSB7XG5cdFx0XHRcdFx0dyA9IHZpZXdfdztcblx0XHRcdFx0XHR0aGlzLmxpc3QhLnN0eWxlLndpZHRoID0gYCR7d31weGA7XG5cdFx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdFx0bGVmdCA9IHJpZ2h0IC0gdztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmlnaHQgPSBsZWZ0ICsgdztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHJlbGF0aXZlX29mZnNldCA9IDA7XG5cdFx0XHRcdGlmIChsZWZ0IDwgc2Nyb2xsKSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVfb2Zmc2V0ID0gc2Nyb2xsIC0gbGVmdDtcblx0XHRcdFx0fSBlbHNlIGlmIChyaWdodCA+IHNjcm9sbCArIHZpZXdfdykge1xuXHRcdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IC0ocmlnaHQgLSBzY3JvbGwgLSB2aWV3X3cpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSAtcmVsYXRpdmVfb2Zmc2V0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZWxhdGl2ZV9vZmZzZXQpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3QhLnN0eWxlW2FuY2hvcl0gPSBgJHtubCArIHJlbGF0aXZlX29mZnNldH1weGA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0YXV0b0NvbXBsZXRlKFxuXHRcdFx0bmV3VmFsOiBzdHJpbmcsXG5cdFx0XHRhY3RWYWw6IHN0cmluZyxcblx0XHRcdG5vcm1hbGl6ZWRBY3RWYWw6IHN0cmluZyB8IG51bGwsXG5cdFx0XHRrZXk6IHN0cmluZyxcblx0XHRcdGRvbnRNb2RpZnk/OiBib29sZWFuXG5cdFx0KTogYm9vbGVhbiB7XG5cdFx0XHRpZiAobmV3VmFsID09PSBhY3RWYWwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9udE1vZGlmeSB8fCB0aGlzLmltZSB8fCAhdGhpcy5jYW5TZWxlY3QoKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB3ZSBjYW4ndCBzZWxlY3QgcHJvcGVybHkgb3IgYW4gSU1FIGNvbXBvc2l0aW9uIGlzIG9uZ29pbmcsIGF1dG9jb21wbGV0aW9uIHdvdWxkIGJlIGEgbWFqb3IgYW5ub3lhbmNlIHRvIHRoZSB1c2VyLlxuXHRcdFx0aWYgKG5ld1ZhbC5pbmRleE9mKGFjdFZhbCkpIHtcblx0XHRcdFx0Ly8gTWF5YmUgaXQnbGwgd29yayB3aXRoIHRoZSBub3JtYWxpemVkIHZhbHVlIChORkMpP1xuXHRcdFx0XHRpZiAobm9ybWFsaXplZEFjdFZhbCAmJiBuZXdWYWwuaW5kZXhPZihub3JtYWxpemVkQWN0VmFsKSA9PT0gMCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmxhc3RSZWFsSW5wdXQgPT09IGFjdFZhbCkge1xuXHRcdFx0XHRcdFx0dGhpcy5sYXN0UmVhbElucHV0ID0gbm9ybWFsaXplZEFjdFZhbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWN0VmFsID0gbm9ybWFsaXplZEFjdFZhbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIEFjdHVhbCBpbnB1dCBpcyBhIHByZWZpeCBvZiB0aGUgbmV3IHRleHQuIEZpbGwgaW4gbmV3IHRleHQsIHNlbGVjdGluZyB0aGUgbmV3bHkgYWRkZWQgc3VmZml4XG5cdFx0XHQvLyBzdWNoIHRoYXQgaXQgY2FuIGJlIGVhc2lseSByZW1vdmVkIGJ5IHR5cGluZyBiYWNrc3BhY2UgaWYgdGhlIHN1Z2dlc3Rpb24gaXMgdW53YW50ZWQuXG5cdFx0XHR0aGlzLnRleHQhLmZvY3VzKCk7XG5cdFx0XHR0aGlzLnRleHQhLnZhbHVlID0gbmV3VmFsICsga2V5O1xuXHRcdFx0dGhpcy5zZXRTZWxlY3Rpb24oYWN0VmFsLmxlbmd0aCwgbmV3VmFsLmxlbmd0aCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Y2FuU2VsZWN0KCk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuICEhdGhpcy50ZXh0IS5zZXRTZWxlY3Rpb25SYW5nZSB8fCB0aGlzLnRleHQhLnNlbGVjdGlvblN0YXJ0ICE9PSBudWxsO1xuXHRcdH1cblx0XHRzZXRTZWxlY3Rpb24oZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHQvLyB0aGlzLnRleHQgbXVzdCBiZSBmb2N1c2VkIChhdCBsZWFzdCBvbiBJRSlcblx0XHRcdGlmICghdGhpcy50ZXh0IS52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRleHQhLnNldFNlbGVjdGlvblJhbmdlKGZyb20sIHRvKTtcblx0XHR9XG5cdFx0Z2V0U2VsZWN0aW9uKCk6IHtzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlcn0ge1xuXHRcdFx0bGV0IGZyb20gPSAwO1xuXHRcdFx0Ly8gdGhpcy50ZXh0IG11c3QgYmUgZm9jdXNlZCAoYXQgbGVhc3Qgb24gSUUpXG5cdFx0XHRsZXQgdG8gPSAwO1xuXHRcdFx0aWYgKCF0aGlzLnRleHQhLnZhbHVlKSB7XG5cdFx0XHRcdC8vIE5vIHRleHQuXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudGV4dCEuc2VsZWN0aW9uU3RhcnQgIT09IG51bGwpIHtcblx0XHRcdFx0ZnJvbSA9IHRoaXMudGV4dCEuc2VsZWN0aW9uU3RhcnQ7XG5cdFx0XHRcdHRvID0gdGhpcy50ZXh0IS5zZWxlY3Rpb25FbmQgPz8gdG87XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdGFydDogZnJvbSxcblx0XHRcdFx0ZW5kOiB0byxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHNhdmVWaWV3KCk6IHZvaWQge1xuXHRcdFx0dGhpcy5sYXN0U2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcblx0XHR9XG5cdFx0cHJvY2Vzc0tleShldmVudDogSG90Q2F0VUlFdmVudCk6IGJvb2xlYW4ge1xuXHRcdFx0bGV0IGRpciA9IDA7XG5cdFx0XHRzd2l0Y2ggKHRoaXMubGFzdEtleSkge1xuXHRcdFx0XHRjYXNlIFVQOlxuXHRcdFx0XHRcdGRpciA9IC0xO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIERPV046XG5cdFx0XHRcdFx0ZGlyID0gMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBQR1VQOlxuXHRcdFx0XHRcdGRpciA9IC1IQy5saXN0U2l6ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBQR0RPV046XG5cdFx0XHRcdFx0ZGlyID0gSEMubGlzdFNpemU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRVNDOlxuXHRcdFx0XHRcdC8vIEluaGliaXQgZGVmYXVsdCBiZWhhdmlvciAocmV2ZXJ0IHRvIGxhc3QgcmVhbCBpbnB1dCBpbiBGRjogd2UgZG8gdGhhdCBvdXJzZWx2ZXMpXG5cdFx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRpcikge1xuXHRcdFx0XHRpZiAodGhpcy5saXN0IS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcblx0XHRcdFx0XHQvLyBMaXN0IGlzIHZpc2libGUsIHNvIHRoZXJlIGFyZSBzdWdnZXN0aW9uc1xuXHRcdFx0XHRcdHRoaXMuaGlnaGxpZ2h0U3VnZ2VzdGlvbihkaXIpO1xuXHRcdFx0XHRcdC8vIEtpbGwgdGhlIGV2ZW50LCBvdGhlcndpc2Ugc29tZSBicm93c2VycyAoZS5nLiwgRmlyZWZveCkgbWF5IGFkZGl0aW9uYWxseSB0cmVhdCBhbiB1cC1hcnJvd1xuXHRcdFx0XHRcdC8vIGFzIFwicGxhY2UgdGhlIHRleHQgY3Vyc29yIGF0IHRoZSBmcm9udFwiLCB3aGljaCB3ZSBkb24ndCB3YW50IGhlcmUuXG5cdFx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdHRoaXMua2V5Q291bnQgPD0gMSAmJlxuXHRcdFx0XHRcdCghdGhpcy5jYWxsYmFja09iaiB8fCB0aGlzLmNhbGxiYWNrT2JqLmNhbGxzTWFkZSA9PT0gdGhpcy5jYWxsYmFja09iai5ub2ZDYWxscylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Ly8gSWYgbm8gc3VnZ2VzdGlvbnMgZGlzcGxheWVkLCBnZXQgdGhlbSwgdW5sZXNzIHdlJ3JlIGFscmVhZHkgZ2V0dGluZyB0aGVtLlxuXHRcdFx0XHRcdHRoaXMudGV4dGNoYW5nZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aGlnaGxpZ2h0U3VnZ2VzdGlvbihkaXI6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMgfHwgIXRoaXMubGlzdCB8fCB0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGN1cnIgPSB0aGlzLmxpc3Quc2VsZWN0ZWRJbmRleDtcblx0XHRcdGxldCB0Z3QgPSAtMTtcblx0XHRcdGlmIChkaXIgPT09IDApIHtcblx0XHRcdFx0aWYgKGN1cnIgPCAwIHx8IGN1cnIgPj0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRndCA9IGN1cnI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0Z3QgPSBjdXJyIDwgMCA/IDAgOiBjdXJyICsgZGlyO1xuXHRcdFx0XHR0Z3QgPSBNYXRoLm1heCh0Z3QsIDApO1xuXHRcdFx0XHRpZiAodGd0ID49IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRcdHRndCA9IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0Z3QgIT09IGN1cnIgfHwgZGlyID09PSAwKSB7XG5cdFx0XHRcdGlmIChjdXJyID49IDAgJiYgY3VyciA8IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCAmJiBkaXIgIT09IDApIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1tjdXJyXSEuc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdIS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdFx0Y29uc3QgdiA9IHRoaXMudGV4dCEudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0XHRjb25zdCBvcHRpb25UZXh0ID0gdGhpcy5saXN0Lm9wdGlvbnNbdGd0XSEudGV4dDtcblx0XHRcdFx0Y29uc3QgY29tcGxldGVkID0gdGhpcy5hdXRvQ29tcGxldGUob3B0aW9uVGV4dCwgdGhpcy5sYXN0UmVhbElucHV0LCBudWxsLCBrZXksIGZhbHNlKTtcblx0XHRcdFx0aWYgKCFjb21wbGV0ZWQgfHwgb3B0aW9uVGV4dCA9PT0gdGhpcy5sYXN0UmVhbElucHV0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0IS52YWx1ZSA9IG9wdGlvblRleHQgKyBrZXk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuY2FuU2VsZWN0KCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U2VsZWN0aW9uKG9wdGlvblRleHQubGVuZ3RoLCBvcHRpb25UZXh0Lmxlbmd0aCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gb3B0aW9uVGV4dDtcblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIE1pZ2h0IGJlIHdyb25nIGlmIGZyb20gYSBkYWIgbGlzdC4uLlxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IEhDLmV4aXN0c1llcztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFX1BFTkRJTkc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmVzZXRLZXlTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucyB8fCAhdGhpcy5saXN0IHx8IHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY3VyciA9IHRoaXMubGlzdC5zZWxlY3RlZEluZGV4O1xuXHRcdFx0aWYgKGN1cnIgPj0gMCAmJiBjdXJyIDwgdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW2N1cnJdIS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRcdGNvbnN0IHYgPSB0aGlzLnRleHQhLnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGNvbnN0IGtleSA9IHYubGVuZ3RoID4gMSA/IGB8JHt2WzFdfWAgOiAnJztcblx0XHRcdFx0Ly8gRVNDIGlzIGhhbmRsZWQgc3RyYW5nZWx5IGJ5IHNvbWUgYnJvd3NlcnMgKGUuZy4sIEZGKTsgc29tZWhvdyBpdCByZXNldHMgdGhlIGlucHV0IHZhbHVlIGJlZm9yZVxuXHRcdFx0XHQvLyBvdXIgZXZlbnQgaGFuZGxlcnMgZXZlciBnZXQgYSBjaGFuY2UgdG8gcnVuLlxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gdlswXSAhPT0gdGhpcy5sYXN0SW5wdXQ7XG5cdFx0XHRcdGlmICh2WzBdICE9PSB0aGlzLmxhc3RSZWFsSW5wdXQpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQhLnZhbHVlID0gdGhpcy5sYXN0UmVhbElucHV0ICsga2V5O1xuXHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmxhc3RSZWFsSW5wdXQ7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdGludGVyZmFjZSBIb3RDYXRVc2VyQ29uZmlnIHtcblx0XHRIb3RDYXREb250QWRkVG9XYXRjaGxpc3Q/OiBib29sZWFuO1xuXHRcdEhvdENhdE5vQXV0b0NvbW1pdD86IGJvb2xlYW47XG5cdFx0SG90Q2F0RGVsTmVlZHNEaWZmPzogYm9vbGVhbjtcblx0XHRIb3RDYXRTdWdnZXN0aW9uRGVsYXk/OiBudW1iZXI7XG5cdFx0SG90Q2F0RWRpdEJveFdpZHRoPzogbnVtYmVyO1xuXHRcdEhvdENhdFN1Z2dlc3Rpb25zPzogc3RyaW5nO1xuXHRcdEhvdENhdEZpeGVkU3VnZ2VzdGlvbnM/OiBib29sZWFuO1xuXHRcdEhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlcz86IGJvb2xlYW47XG5cdFx0SG90Q2F0Q2hhbmdlZEJhY2tncm91bmQ/OiBzdHJpbmc7XG5cdFx0SG90Q2F0VXNlQ2F0ZWdvcnlMaW5rcz86IGJvb2xlYW47XG5cdFx0SG90Q2F0TGlzdFNpemU/OiBudW1iZXI7XG5cdFx0SG90Q2F0Q2hhbmdlVGFnPzogc3RyaW5nO1xuXHR9XG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKTogdm9pZCA9PiB7XG5cdFx0Ly8gVXNlciBjb25maWd1cmF0aW9uczogRG8gdGhpcyBoZXJlLCBjYWxsZWQgZnJvbSB0aGUgb25sb2FkIGhhbmRsZXIsIHNvIHRoYXQgdXNlcnMgY2FuXG5cdFx0Ly8gb3ZlcnJpZGUgaXQgZWFzaWx5IGluIHRoZWlyIG93biB1c2VyIHNjcmlwdCBmaWxlcyBieSBqdXN0IGRlY2xhcmluZyB2YXJpYWJsZXMuXG5cdFx0Y29uc3QgY29uZmlnOiBIb3RDYXRVc2VyQ29uZmlnID0ge307XG5cdFx0SEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdFxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdERvbnRBZGRUb1dhdGNobGlzdFxuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3Q7XG5cdFx0SEMubm9fYXV0b2NvbW1pdCA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X25vX2F1dG9jb21taXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXROb0F1dG9Db21taXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gY29uZi53Z05hbWVzcGFjZU51bWJlciAlIDJcblx0XHRcdFx0XHRcdD8gdHJ1ZVxuXHRcdFx0XHRcdFx0OiBIQy5ub19hdXRvY29tbWl0IC8vIE9uIHRhbGsgbmFtZXNwYWNlIGRlZmF1bHQgYXV0b2NvbW1pdCBvZmZcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXROb0F1dG9Db21taXRcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfbm9fYXV0b2NvbW1pdDtcblx0XHRIQy5kZWxfbmVlZHNfZGlmZiA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X2RlbF9uZWVkc19kaWZmID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0RGVsTmVlZHNEaWZmID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmRlbF9uZWVkc19kaWZmXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0RGVsTmVlZHNEaWZmXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X2RlbF9uZWVkc19kaWZmO1xuXHRcdEhDLnN1Z2dlc3RfZGVsYXkgPSB3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25fZGVsYXkgfHwgY29uZmlnLkhvdENhdFN1Z2dlc3Rpb25EZWxheSB8fCBIQy5zdWdnZXN0X2RlbGF5O1xuXHRcdEhDLmVkaXRib3hfd2lkdGggPSB3aW5kb3cuaG90Y2F0X2VkaXRib3hfd2lkdGggfHwgY29uZmlnLkhvdENhdEVkaXRCb3hXaWR0aCB8fCBIQy5lZGl0Ym94X3dpZHRoO1xuXHRcdEhDLnN1Z2dlc3Rpb25zID0gd2luZG93LmhvdGNhdF9zdWdnZXN0aW9ucyB8fCBjb25maWcuSG90Q2F0U3VnZ2VzdGlvbnMgfHwgSEMuc3VnZ2VzdGlvbnM7XG5cdFx0aWYgKHR5cGVvZiBIQy5zdWdnZXN0aW9ucyAhPT0gJ3N0cmluZycgfHwgIXN1Z2dlc3Rpb25Db25maWdzW0hDLnN1Z2dlc3Rpb25zXSkge1xuXHRcdFx0SEMuc3VnZ2VzdGlvbnMgPSAnY29tYmluZWQnO1xuXHRcdH1cblx0XHRIQy5maXhlZF9zZWFyY2ggPVxuXHRcdFx0d2luZG93LmhvdGNhdF9zdWdnZXN0aW9uc19maXhlZCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdEZpeGVkU3VnZ2VzdGlvbnMgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuZml4ZWRfc2VhcmNoXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0Rml4ZWRTdWdnZXN0aW9uc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9zdWdnZXN0aW9uc19maXhlZDtcblx0XHRIQy5zaW5nbGVfbWlub3IgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3IgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRNaW5vclNpbmdsZUNoYW5nZXMgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuc2luZ2xlX21pbm9yXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X3NpbmdsZV9jaGFuZ2VzX2FyZV9taW5vcjtcblx0XHRIQy5iZ19jaGFuZ2VkID0gd2luZG93LmhvdGNhdF9jaGFuZ2VkX2JhY2tncm91bmQgfHwgY29uZmlnLkhvdENhdENoYW5nZWRCYWNrZ3JvdW5kIHx8IEhDLmJnX2NoYW5nZWQ7XG5cdFx0SEMudXNlX3VwX2Rvd24gPVxuXHRcdFx0d2luZG93LmhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3MgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRVc2VDYXRlZ29yeUxpbmtzID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLnVzZV91cF9kb3duXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3M7XG5cdFx0SEMubGlzdFNpemUgPSB3aW5kb3cuaG90Y2F0X2xpc3Rfc2l6ZSB8fCBjb25maWcuSG90Q2F0TGlzdFNpemUgfHwgSEMubGlzdFNpemU7XG5cdFx0SEMuY2hhbmdlVGFnID0gY29uZmlnLkhvdENhdENoYW5nZVRhZyB8fCAnJztcblx0XHQvLyBUaGUgbmV4dCB3aG9sZSBzaGViYW5nIGlzIG5lZWRlZCwgYmVjYXVzZSBtYW51YWwgdGFncyBnZXQgbm90IHN1Ym1pdHRlZCBleGNlcHQgb2Ygc2F2ZVxuXHRcdGlmIChIQy5jaGFuZ2VUYWcpIHtcblx0XHRcdGNvbnN0IGVGb3JtID0gZG9jdW1lbnQuZWRpdGZvcm07XG5cdFx0XHRjb25zdCBjYXRSZWdFeHAgPSBuZXcgUmVnRXhwKGBeXFxcXFtcXFxcWygke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0bGV0IG9sZFR4dCA9ICcnO1xuXHRcdFx0Ly8gUmV0dXJucyB0cnVlIGlmIG1pbm9yIGNoYW5nZVxuXHRcdFx0Y29uc3QgaXNNaW5vckNoYW5nZSA9ICgpOiBib29sZWFuIHwgdW5kZWZpbmVkID0+IHtcblx0XHRcdFx0Y29uc3QgdGV4dGJveCA9IGVGb3JtPy53cFRleHRib3gxO1xuXHRcdFx0XHRpZiAoIXRleHRib3gpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgbmV3VHh0ID0gdGV4dGJveC52YWx1ZTtcblx0XHRcdFx0Y29uc3Qgb2xkTGluZXMgPSBvbGRUeHQubWF0Y2goL14uKiQvZ20pID8/IFtdO1xuXHRcdFx0XHRjb25zdCBuZXdMaW5lcyA9IG5ld1R4dC5tYXRjaCgvXi4qJC9nbSkgPz8gW107XG5cdFx0XHRcdGNvbnN0IGV4Y2VwdCA9IChhQXJyOiBzdHJpbmdbXSwgYkFycjogc3RyaW5nW10pOiBzdHJpbmdbXSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRcdGxldCBsQXJyOiBzdHJpbmdbXTsgLy8gbGFyZ2VyXG5cdFx0XHRcdFx0bGV0IHNBcnI6IHN0cmluZ1tdOyAvLyBzbWFsbGVyXG5cdFx0XHRcdFx0aWYgKGFBcnIubGVuZ3RoIDwgYkFyci5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGxBcnIgPSBiQXJyO1xuXHRcdFx0XHRcdFx0c0FyciA9IFsuLi5hQXJyXTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bEFyciA9IGFBcnI7XG5cdFx0XHRcdFx0XHRzQXJyID0gWy4uLmJBcnJdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgbEFycikge1xuXHRcdFx0XHRcdFx0Y29uc3QgaW5kID0gc0Fyci5pbmRleE9mKGl0ZW0pO1xuXHRcdFx0XHRcdFx0aWYgKGluZCA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gaXRlbTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNBcnIuc3BsaWNlKGluZCwgMSk7IC8vIGRvbid0IGNoZWNrIHRoaXMgaXRlbSBhZ2FpblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgLi4uc0Fycl07XG5cdFx0XHRcdH07XG5cdFx0XHRcdGxldCBjQXJyID0gZXhjZXB0KG9sZExpbmVzLCBuZXdMaW5lcyk7IC8vIGNoYW5nZXNcblx0XHRcdFx0aWYgKGNBcnIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNBcnIgPSBjQXJyLmZpbHRlcigoYzogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCB0cmltbWVkID0gYy50cmltKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gISF0cmltbWVkICYmICFjYXRSZWdFeHAudGVzdCh0cmltbWVkKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY0Fyci5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRvbGRUeHQgPSBuZXdUeHQ7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdH07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGNvbmYud2dBY3Rpb24gPT09ICdzdWJtaXQnICYmXG5cdFx0XHRcdGNvbmYud2dBcnRpY2xlSWQgJiZcblx0XHRcdFx0ZUZvcm0gJiZcblx0XHRcdFx0ZUZvcm0ud3BTdW1tYXJ5ICYmXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aWtpRGlmZicpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y29uc3Qgc3VtID0gZUZvcm0ud3BTdW1tYXJ5O1xuXHRcdFx0XHRjb25zdCBzdW1BID0gZUZvcm0ud3BBdXRvU3VtbWFyeTtcblx0XHRcdFx0aWYgKHN1bS52YWx1ZSAmJiBzdW1BICYmIHN1bUEudmFsdWUgPT09IEhDLmNoYW5nZVRhZykge1xuXHRcdFx0XHRcdC8vIEhvdENhdCBkaWZmXG5cdFx0XHRcdFx0Ly8gTUQ1IGhhc2ggb2YgdGhlIGVtcHR5IHN0cmluZywgYXMgSG90Q2F0IGVkaXQgaXMgYmFzZWQgb24gZW1wdHkgc3VtXG5cdFx0XHRcdFx0c3VtQS52YWx1ZSA9IHN1bUEudmFsdWUucmVwbGFjZShIQy5jaGFuZ2VUYWcsICdkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZScpO1xuXHRcdFx0XHRcdC8vIEF0dHIgY3JlYXRpb24gYW5kIGV2ZW50IGhhbmRsaW5nIGlzIG5vdCBzYW1lIGluIGFsbCAob2xkKSBicm93c2VycyBzbyB1c2UgJFxuXHRcdFx0XHRcdGNvbnN0ICRjdCA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0XHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnZhbChIQy5jaGFuZ2VUYWcpO1xuXHRcdFx0XHRcdCQoZUZvcm0pLmFwcGVuZCgkY3QpO1xuXHRcdFx0XHRcdG9sZFR4dCA9IGVGb3JtLndwVGV4dGJveDE/LnZhbHVlID8/ICcnO1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BTYXZlXScpLm9uZSgnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoJGN0LnZhbCgpKSB7XG5cdFx0XHRcdFx0XHRcdHN1bS52YWx1ZSA9IHN1bS52YWx1ZS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykgfHwgZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JyksXG5cdFx0XHRcdFx0XHRcdFx0Jydcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb25zdCByZW1vdmVDaGFuZ2VUYWcgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHQkKGVGb3JtLndwVGV4dGJveDEhKVxuXHRcdFx0XHRcdFx0XHQuYWRkKHN1bSlcblx0XHRcdFx0XHRcdFx0Lm9uZSgnaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaXNNaW5vckNoYW5nZSgpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbW92ZUNoYW5nZVRhZygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGN0LnZhbCgnJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZW1vdmVDaGFuZ2VUYWcoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBOdW1lcmljIGlucHV0LCBtYWtlIHN1cmUgd2UgaGF2ZSBhIG51bWVyaWMgdmFsdWVcblx0XHRIQy5saXN0U2l6ZSA9IE51bWJlci5wYXJzZUludChTdHJpbmcoSEMubGlzdFNpemUpLCAxMCk7XG5cdFx0aWYgKE51bWJlci5pc05hTihIQy5saXN0U2l6ZSkgfHwgSEMubGlzdFNpemUgPCA1KSB7XG5cdFx0XHRIQy5saXN0U2l6ZSA9IDU7XG5cdFx0fVxuXHRcdEhDLmxpc3RTaXplID0gTWF0aC5taW4oSEMubGlzdFNpemUsIDMwKTsgLy8gTWF4IHNpemVcblx0XHQvLyBMb2NhbGl6ZSBzZWFyY2ggZW5naW5lIG5hbWVzXG5cdFx0Zm9yIChjb25zdCBba2V5LCBzdWdnZXN0aW9uQ29uZmlnXSBvZiBPYmplY3QuZW50cmllcyhzdWdnZXN0aW9uQ29uZmlncykpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmIChrZXkgJiYgZ2V0TWVzc2FnZShgZW5naW5lX25hbWVzLSR7a2V5fWApKSB7XG5cdFx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZy5uYW1lID0gZ2V0TWVzc2FnZShgZW5naW5lX25hbWVzLSR7a2V5fWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIENhdGNoIGJvdGggbmF0aXZlIFJUTCBhbmQgXCJmYWtlZFwiIFJUTCB0aHJvdWdoIFtbTWVkaWFXaWtpOlJ0bC5qc11dXG5cdFx0Y29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdib2R5JykhO1xuXHRcdGlzX3J0bCA9IGhhc0NsYXNzKGJvZHksICdydGwnKTtcblx0XHRpZiAoIWlzX3J0bCkge1xuXHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gZG9jdW1lbnQuZGVmYXVsdFZpZXdcblx0XHRcdFx0PyAvLyBHZWNrbyBldGMuXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShib2R5LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKVxuXHRcdFx0XHQ6IC8vIE5vdCBleGFjdGx5IHJpZ2h0LCBidXQgYmVzdCBlZmZvcnRcblx0XHRcdFx0XHRkb2N1bWVudC5kaXI7XG5cdFx0XHRpc19ydGwgPSBkaXJlY3Rpb24gPT09ICdydGwnO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgY2FuX2VkaXQgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYS1lZGl0JykgIT09IG51bGw7XG5cdH07XG5cdC8vIExlZ2FjeSBzdHVmZlxuXHRjb25zdCBjbG9zZUZvcm0gPSAoKTogdm9pZCA9PiB7XG5cdFx0Ly8gQ2xvc2UgYWxsIG9wZW4gZWRpdG9ycyB3aXRob3V0IHJlZGlyZWN0IHJlc29sdXRpb24gYW5kIG90aGVyIGFzeW5jaHJvbm91cyBzdHVmZi5cblx0XHRmb3IgKGNvbnN0IGVkaXQgb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXQuc3RhdGUgPT09IE9QRU4pIHtcblx0XHRcdFx0ZWRpdC5jYW5jZWwoKTtcblx0XHRcdH0gZWxzZSBpZiAoZWRpdC5zdGF0ZSA9PT0gQ0hBTkdFX1BFTkRJTkcpIHtcblx0XHRcdFx0ZWRpdC5zYW5pdGl6ZUlucHV0KCk7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gZWRpdC50ZXh0IS52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRsZXQga2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0XHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRrZXkgPSB2YWx1ZVsxXSE7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdiA9IHZhbHVlWzBdIS5yZXBsYWNlKC9fL2csICcgJykudHJpbSgpO1xuXHRcdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRlZGl0LmNhbmNlbCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVkaXQuY3VycmVudENhdGVnb3J5ID0gdjtcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRLZXkgPSBrZXk7XG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50RXhpc3RzID0gZWRpdC5pbnB1dEV4aXN0cztcblx0XHRcdFx0XHRlZGl0LmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHNldHVwX3VwbG9hZCA9ICgpOiB2b2lkID0+IHtcblx0XHRvblVwbG9hZCA9IHRydWU7XG5cdFx0Ly8gQWRkIGFuIGVtcHR5IGNhdGVnb3J5IGJhciBhdCB0aGUgZW5kIG9mIHRoZSB0YWJsZSBjb250YWluaW5nIHRoZSBkZXNjcmlwdGlvbiwgYW5kIGNoYW5nZSB0aGUgb25zdWJtaXQgaGFuZGxlci5cblx0XHRsZXQgaXA6IEhUTUxFbGVtZW50IHwgbnVsbCA9XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI213LWh0bWxmb3JtLWRlc2NyaXB0aW9uJykgPz9cblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwRGVzdEZpbGVdJyk7XG5cdFx0aWYgKCFpcCkge1xuXHRcdFx0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignaW5wdXRbbmFtZT13cERlc3RGaWxlXScpO1xuXHRcdFx0d2hpbGUgKGlwICYmIGlwLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICd0YWJsZScpIHtcblx0XHRcdFx0aXAgPSBpcC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFpcCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZXVwbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BGb3JSZVVwbG9hZF0nKTtcblx0XHRjb25zdCBkZXN0RmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BEZXN0RmlsZV0nKTtcblx0XHRpZiAoKHJldXBsb2FkICYmICEhcmV1cGxvYWQudmFsdWUpIHx8IChkZXN0RmlsZSAmJiAoZGVzdEZpbGUuZGlzYWJsZWQgfHwgZGVzdEZpbGUucmVhZE9ubHkpKSkge1xuXHRcdFx0cmV0dXJuOyAvLyByZS11cGxvYWQgZm9ybS4uLlxuXHRcdH1cblx0XHQvLyBJbnNlcnQgYSB0YWJsZSByb3cgd2l0aCB0d28gZmllbGRzIChsYWJlbCBhbmQgZW1wdHkgY2F0ZWdvcnkgYmFyKVxuXHRcdGNvbnN0IGxhYmVsQ2VsbCA9IG1ha2UoJ3RkJyk7XG5cdFx0Y29uc3QgbGluZUNlbGwgPSBtYWtlKCd0ZCcpO1xuXHRcdC8vIENyZWF0ZSB0aGUgY2F0ZWdvcnkgbGluZVxuXHRcdGNhdExpbmUgPSBtYWtlKCdkaXYnKTtcblx0XHRjYXRMaW5lLmNsYXNzTmFtZSA9ICdjYXRsaW5rcyc7XG5cdFx0Y2F0TGluZS5pZCA9ICdjYXRsaW5rcyc7XG5cdFx0Y2F0TGluZS5zdHlsZS50ZXh0QWxpZ24gPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdC8vIFdlJ2xsIGJlIGluc2lkZSBhIHRhYmxlIHJvdy4gTWFrZSBzdXJlIHRoYXQgd2UgZG9uJ3QgaGF2ZSBtYXJnaW5zIG9yIHN0cmFuZ2UgYm9yZGVycy5cblx0XHRjYXRMaW5lLnN0eWxlLm1hcmdpbiA9ICcwJztcblx0XHRjYXRMaW5lLnN0eWxlLmJvcmRlciA9ICdub25lJztcblx0XHRsaW5lQ2VsbC5hcHBlbmQoY2F0TGluZSk7XG5cdFx0Ly8gQ3JlYXRlIHRoZSBsYWJlbFxuXHRcdGNvbnN0IGxhYmVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdGlmIChsYWJlbCkge1xuXHRcdFx0bGFiZWxDZWxsLmlkID0gJ2hvdGNhdExhYmVsVHJhbnNsYXRlZCc7XG5cdFx0XHRsYWJlbENlbGwuYXBwZW5kKGxhYmVsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGFiZWxDZWxsLmlkID0gJ2hvdGNhdExhYmVsJztcblx0XHRcdGxhYmVsQ2VsbC5hcHBlbmQobWFrZShnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyksIHRydWUpKTtcblx0XHR9XG5cdFx0bGFiZWxDZWxsLmNsYXNzTmFtZSA9ICdtdy1sYWJlbCc7XG5cdFx0bGFiZWxDZWxsLnN0eWxlLnRleHRBbGlnbiA9ICdyaWdodCc7XG5cdFx0bGFiZWxDZWxsLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnbWlkZGxlJztcblx0XHQvLyBDaGFuZ2UgdGhlIG9uc3VibWl0IGhhbmRsZXJcblx0XHRjb25zdCBmb3JtID1cblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEZvcm1FbGVtZW50PignI3VwbG9hZCcpID8/XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxGb3JtRWxlbWVudD4oJyNtdy11cGxvYWQtZm9ybScpO1xuXHRcdGlmIChmb3JtKSB7XG5cdFx0XHRjb25zdCBuZXdSb3cgPSAoaXAgYXMgSFRNTFRhYmxlRWxlbWVudCkuaW5zZXJ0Um93KC0xKTtcblx0XHRcdG5ld1Jvdy5hcHBlbmQobGFiZWxDZWxsKTtcblx0XHRcdG5ld1Jvdy5hcHBlbmQobGluZUNlbGwpO1xuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG5cdFx0XHRcdGNsb3NlRm9ybSgpO1xuXHRcdFx0XHQvLyBDb3B5IHRoZSBjYXRlZ29yaWVzXG5cdFx0XHRcdGNvbnN0IGViID1cblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCd0ZXh0YXJlYVtuYW1lPXdwVXBsb2FkRGVzY3JpcHRpb25dJykgPz9cblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCcjd3BEZXNjJyk7XG5cdFx0XHRcdGlmICghZWIpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgYWRkZWRPbmUgPSBmYWxzZTtcblx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdGNvbnN0IHQgPSBlZGl0b3IuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0XHRcdGlmICghdCkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGVkaXRvci5jdXJyZW50S2V5O1xuXHRcdFx0XHRcdGNvbnN0IG5ld19jYXQgPSBgW1ske0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0fSR7a2V5ID8gYHwke2tleX1gIDogJyd9XV1gO1xuXHRcdFx0XHRcdC8vIE9ubHkgYWRkIGlmIG5vdCBhbHJlYWR5IHByZXNlbnRcblx0XHRcdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsIFN0cmluZy5yYXdgKFxcc3xcXFMpKj88L25vYCwgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdFx0XHRcdGxldCBfY2xlYW5lZFRleHQgPSBlYi52YWx1ZTtcblx0XHRcdFx0XHRsZXQgcHJldmlvdXNDbGVhbmVkVGV4dDogc3RyaW5nO1xuXHRcdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRcdHByZXZpb3VzQ2xlYW5lZFRleHQgPSBfY2xlYW5lZFRleHQ7XG5cdFx0XHRcdFx0XHRfY2xlYW5lZFRleHQgPSBfY2xlYW5lZFRleHQucmVwbGFjZSgvPCEtLS9nLCAnJykucmVwbGFjZSgvLS0hPz4vZywgJycpLnJlcGxhY2Uobm93aWtpUmVnZXgsICcnKTtcblx0XHRcdFx0XHR9IHdoaWxlIChfY2xlYW5lZFRleHQgIT09IHByZXZpb3VzQ2xlYW5lZFRleHQpO1xuXHRcdFx0XHRcdGlmICghZmluZF9jYXRlZ29yeShfY2xlYW5lZFRleHQsIHQsIHRydWUpKSB7XG5cdFx0XHRcdFx0XHRlYi52YWx1ZSArPSBgXFxuJHtuZXdfY2F0fWA7XG5cdFx0XHRcdFx0XHRhZGRlZE9uZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChhZGRlZE9uZSkge1xuXHRcdFx0XHRcdC8vIFJlbW92ZSBcInN1YnN0OnVuY1wiIGFkZGVkIGJ5IEZsaW5mbyBpZiBpdCBkaWRuJ3QgZmluZCBjYXRlZ29yaWVzXG5cdFx0XHRcdFx0Y29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCd7eyQnLmNvbmNhdCgnc3Vic3Q6JykuY29uY2F0KCd1bmN9fScpLCAnZycpO1xuXHRcdFx0XHRcdGViLnZhbHVlID0gZWIudmFsdWUucmVwbGFjZShyZWdleCwgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRsZXQgY2xlYW5lZFRleHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRpbnRlcmZhY2UgSG90Q2F0T25QYWdlUmVzdWx0IHtcblx0XHR0aXRsZTogc3RyaW5nO1xuXHRcdG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgfCBIb3RDYXRDYXRlZ29yeU1hdGNoZXMgfCBzdHJpbmdbXSB8IG51bGw7XG5cdH1cblx0Y29uc3QgaXNPblBhZ2UgPSAoZWxlbWVudDogRWxlbWVudCk6IEhvdENhdE9uUGFnZVJlc3VsdCB8IG51bGwgPT4ge1xuXHRcdGNvbnN0IHtmaXJzdENoaWxkfSA9IGVsZW1lbnQ7XG5cdFx0aWYgKCFmaXJzdENoaWxkIHx8IGZpcnN0Q2hpbGQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IGNhdFRpdGxlID0gdGl0bGUoKGZpcnN0Q2hpbGQgYXMgRWxlbWVudCkuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuXHRcdGlmICghY2F0VGl0bGUpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXRUaXRsZSA9IGNhdFRpdGxlLnNsaWNlKGNhdFRpdGxlLmluZGV4T2YoJzonKSArIDEpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRpZiAoSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KGNhdFRpdGxlKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3VsdDogSG90Q2F0T25QYWdlUmVzdWx0ID0ge1xuXHRcdFx0dGl0bGU6IGNhdFRpdGxlLFxuXHRcdFx0bWF0Y2g6IFsnJywgJycsICcnXSxcblx0XHR9O1xuXHRcdGlmIChwYWdlVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0aWYgKGNsZWFuZWRUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsIFN0cmluZy5yYXdgKFxcc3xcXFMpKj88L25vYCwgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdFx0Y2xlYW5lZFRleHQgPSBwYWdlVGV4dC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgJycpLnJlcGxhY2Uobm93aWtpUmVnZXgsICcnKTtcblx0XHR9XG5cdFx0cmVzdWx0Lm1hdGNoID0gZmluZF9jYXRlZ29yeShjbGVhbmVkVGV4dCwgY2F0VGl0bGUsIHRydWUpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdGxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuXHRsZXQgc2V0dXBUaW1lb3V0OiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGwgPSBudWxsO1xuXHRjb25zdCBmaW5kQnlDbGFzcyA9IChzY29wZTogUGFyZW50Tm9kZSwgdGFnOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQgfCBudWxsID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSAkKHNjb3BlKS5maW5kKGAke3RhZ30uJHtjbGFzc05hbWV9YCk7XG5cdFx0cmV0dXJuIHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID4gMCA/IChyZXN1bHRbMF0gYXMgSFRNTEVsZW1lbnQpIDogbnVsbDtcblx0fTtcblx0Y29uc3Qgc2V0dXAgPSAoYWRkaXRpb25hbFdvcms/OiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0aWYgKGluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRpZiAoc2V0dXBUaW1lb3V0KSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHNldHVwVGltZW91dCk7XG5cdFx0XHRzZXR1cFRpbWVvdXQgPSBudWxsO1xuXHRcdH1cblx0XHQvLyBGaW5kIHRoZSBjYXRlZ29yeSBiYXIsIG9yIGNyZWF0ZSBhbiBlbXB0eSBvbmUgaWYgdGhlcmUgaXNuJ3Qgb25lLiBUaGVuIGFkZCAtLystIGxpbmtzIGFmdGVyXG5cdFx0Ly8gZWFjaCBjYXRlZ29yeSwgYW5kIGFkZCB0aGUgKyBsaW5rLlxuXHRcdGNhdExpbmUgfHw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcjbXctbm9ybWFsLWNhdGxpbmtzJyk7IC8vIFNwZWNpYWw6VXBsb2FkXG5cdFx0Y29uc3QgaGlkZGVuQ2F0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcjbXctaGlkZGVuLWNhdGxpbmtzJyk7XG5cdFx0aWYgKCFjYXRMaW5lKSB7XG5cdFx0XHRsZXQgZm9vdGVyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdFx0aWYgKCFoaWRkZW5DYXRzKSB7XG5cdFx0XHRcdGZvb3RlciA9IGZpbmRCeUNsYXNzKGRvY3VtZW50LCAnZGl2JywgJ3ByaW50Zm9vdGVyJyk7XG5cdFx0XHRcdGlmICghZm9vdGVyKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IC8vIERvbid0IGtub3cgd2hlcmUgdG8gaW5zZXJ0IHRoZSBjYXRlZ29yeSBsaW5lXG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lID0gbWFrZSgnZGl2Jyk7XG5cdFx0XHRjYXRMaW5lLmlkID0gJ213LW5vcm1hbC1jYXRsaW5rcyc7XG5cdFx0XHRjYXRMaW5lLnN0eWxlLnRleHRBbGlnbiA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0XHQvLyBBZGQgYSBsYWJlbFxuXHRcdFx0Y29uc3QgbGFiZWwgPSBtYWtlKCdhJyk7XG5cdFx0XHRsYWJlbC5ocmVmID0gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJ1NwZWNpYWw6Q2F0ZWdvcmllcycpO1xuXHRcdFx0bGFiZWwudGl0bGUgPSBnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyk7XG5cdFx0XHRsYWJlbC5hcHBlbmQobWFrZShnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyksIHRydWUpKTtcblx0XHRcdGNhdExpbmUuYXBwZW5kKGxhYmVsKTtcblx0XHRcdGNhdExpbmUuYXBwZW5kKG1ha2UoJzonLCB0cnVlKSk7XG5cdFx0XHQvLyBJbnNlcnQgdGhlIG5ldyBjYXRlZ29yeSBsaW5lXG5cdFx0XHRsZXQgY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwgPVxuXHRcdFx0XHQoaGlkZGVuQ2F0cz8ucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCB8IG51bGwpID8/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcjY2F0bGlua3MnKTtcblx0XHRcdGlmICghY29udGFpbmVyKSB7XG5cdFx0XHRcdGNvbnRhaW5lciA9IG1ha2UoJ2RpdicpO1xuXHRcdFx0XHRjb250YWluZXIuaWQgPSAnY2F0bGlua3MnO1xuXHRcdFx0XHRmb290ZXIhLnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShjb250YWluZXIsIGZvb3RlciEubmV4dFNpYmxpbmcpO1xuXHRcdFx0fVxuXHRcdFx0Y29udGFpbmVyLmNsYXNzTmFtZSA9ICdjYXRsaW5rcyBub3ByaW50Jztcblx0XHRcdGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRpZiAoaGlkZGVuQ2F0cykge1xuXHRcdFx0XHRoaWRkZW5DYXRzLmJlZm9yZShjYXRMaW5lKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnRhaW5lci5hcHBlbmQoY2F0TGluZSk7XG5cdFx0XHR9XG5cdFx0fSAvLyBlbmQgaWYgY2F0TGluZSBleGlzdHNcblx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRjYXRMaW5lLmRpciA9ICdydGwnO1xuXHRcdH1cblx0XHQvLyBDcmVhdGUgZWRpdG9ycyBmb3IgYWxsIGV4aXN0aW5nIGNhdGVnb3JpZXNcblx0XHRjb25zdCBjcmVhdGVFZGl0b3JzID0gKGxpbmU6IEhUTUxFbGVtZW50LCBpc19oaWRkZW4/OiBib29sZWFuKTogSFRNTEVsZW1lbnQgfCBudWxsID0+IHtcblx0XHRcdGxldCBjYXRzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB8IEhUTUxFbGVtZW50W10gPSBsaW5lLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdsaScpO1xuXHRcdFx0aWYgKGNhdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRuZXdET00gPSB0cnVlO1xuXHRcdFx0XHRsaW5lID0gY2F0c1swXSEucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNhdHMgPSBsaW5lLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdzcGFuJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBDb3B5IGNhdHMsIG90aGVyd2lzZSBpdCdsbCBhbHNvIG1hZ2ljYWxseSBjb250YWluIG91ciBhZGRlZCBzcGFucyBhcyBpdCBpcyBhIGxpdmUgY29sbGVjdGlvbiFcblx0XHRcdGNvbnN0IGNvcHlDYXRzID0gQXJyYXkuZnJvbShjYXRzKTtcblx0XHRcdGZvciAoY29uc3QgY2F0IG9mIGNvcHlDYXRzKSB7XG5cdFx0XHRcdGNvbnN0IHRlc3QgPSBpc09uUGFnZShjYXQpO1xuXHRcdFx0XHRpZiAodGVzdCAhPT0gbnVsbCAmJiB0ZXN0Lm1hdGNoICE9PSBudWxsICYmIGxpbmUpIHtcblx0XHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IobGluZSwgY2F0LCB0ZXN0LnRpdGxlLCAodGVzdC5tYXRjaCBhcyBzdHJpbmdbXSlbMl0sIGlzX2hpZGRlbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjb3B5Q2F0cy5sZW5ndGggPiAwID8gY29weUNhdHMuYXQoLTEpISA6IG51bGw7XG5cdFx0fTtcblx0XHRjb25zdCBsYXN0U3BhbiA9IGNyZWF0ZUVkaXRvcnMoY2F0TGluZSwgZmFsc2UpO1xuXHRcdC8vIENyZWF0ZSBvbmUgdG8gYWRkIGEgbmV3IGNhdGVnb3J5XG5cdFx0bmV3IENhdGVnb3J5RWRpdG9yKFxuXHRcdFx0bmV3RE9NID8gY2F0TGluZS5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PigndWwnKVswXSEgOiBjYXRMaW5lLFxuXHRcdFx0bnVsbCxcblx0XHRcdG51bGwsXG5cdFx0XHRsYXN0U3BhbiAhPT0gbnVsbCxcblx0XHRcdGZhbHNlXG5cdFx0KTtcblx0XHRpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRpZiAocGFnZVRleHQgIT09IG51bGwgJiYgaGlkZGVuQ2F0cykge1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0aGlkZGVuQ2F0cy5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjcmVhdGVFZGl0b3JzKGhpZGRlbkNhdHMsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQW5kIGZpbmFsbHkgYWRkIHRoZSBcIm11bHRpLW1vZGVcIiBzcGFuLiAoRG8gdGhpcyBhdCB0aGUgZW5kLCBvdGhlcndpc2UgaXQgZW5kcyB1cCBpbiB0aGUgbGlzdCBhYm92ZS4pXG5cdFx0XHRjb25zdCBlbmFibGVNdWx0aSA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdGVuYWJsZU11bHRpLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0ZW5hYmxlTXVsdGkuZGlyID0gJ3J0bCc7XG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lLmluc2VydEJlZm9yZShlbmFibGVNdWx0aSwgY2F0TGluZS5maXJzdENoaWxkIS5uZXh0U2libGluZyk7XG5cdFx0XHRlbmFibGVNdWx0aS5hcHBlbmQobWFrZSgnXFx1MDBBMCcsIHRydWUpKTsgLy8gbmJzcFxuXHRcdFx0bXVsdGlTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0ZW5hYmxlTXVsdGkuYXBwZW5kKG11bHRpU3Bhbik7XG5cdFx0XHRtdWx0aVNwYW4uaW5uZXJIVE1MID0gYCg8YT4ke0hDLmFkZG11bHRpfTwvYT4pYDtcblx0XHRcdGNvbnN0IFtsaW5rXSA9IG11bHRpU3Bhbi5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PignYScpO1xuXHRcdFx0bGluayEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0fSk7XG5cdFx0XHRsaW5rIS50aXRsZSA9IGdldE1lc3NhZ2UoJ211bHRpX3Rvb2x0aXAnKTtcblx0XHRcdGxpbmshLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblx0XHR9XG5cdFx0Y2xlYW5lZFRleHQgPSBudWxsO1xuXHRcdGlmIChhZGRpdGlvbmFsV29yayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG5cdFx0XHRhZGRpdGlvbmFsV29yaygpO1xuXHRcdH1cblx0XHRtdy5ob29rKCdob3RjYXQucmVhZHknKS5maXJlKCk7IC8vIEV4ZWN1dGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbnNcblx0XHQkYm9keS50cmlnZ2VyKCdob3RjYXRTZXR1cENvbXBsZXRlZCcpO1xuXHR9O1xuXHRjb25zdCBjcmVhdGVDb21taXRGb3JtID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmIChjb21taXRGb3JtKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGZvcm1Db250YWluZXIgPSBtYWtlKCdkaXYnKTtcblx0XHRmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIS5hcHBlbmQoZm9ybUNvbnRhaW5lcik7XG5cdFx0Zm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGZvcm0gaWQ9XCJob3RjYXRDb21taXRGb3JtXCIgbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgYWN0aW9uPVwiJHtcblx0XHRcdGNvbmYud2dTY3JpcHRcblx0XHR9P3RpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGNvbmYud2dQYWdlTmFtZSl9JmFjdGlvbj1zdWJtaXRcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFRleHRib3gxXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibW9kZWxcIiB2YWx1ZT1cIiR7Y29uZi53Z1BhZ2VDb250ZW50TW9kZWx9XCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybWF0XCIgdmFsdWU9XCJ0ZXh0L3gtd2lraVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwU3VtbWFyeVwiIHZhbHVlPVwiXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ3cE1pbm9yZWRpdFwiIHRpdGxlPVwid3BNaW5vcmVkaXRcIiB2YWx1ZT1cIjFcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIndwV2F0Y2h0aGlzXCIgdGl0bGU9XCJ3cFdhdGNodGhpc1wiIHZhbHVlPVwiMVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwQXV0b1N1bW1hcnlcIiB2YWx1ZT1cImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BFZGl0dGltZVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwU3RhcnR0aW1lXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BEaWZmXCIgdmFsdWU9XCJ3cERpZmZcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvbGRpZFwiIHZhbHVlPVwiMFwiPlxuXHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cImhjQ29tbWl0XCIgdmFsdWU9XCJoY0NvbW1pdFwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRWRpdFRva2VuXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BVbHRpbWF0ZVBhcmFtXCIgdmFsdWU9XCIxXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BDaGFuZ2VUYWdzXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIuKEs/CdkrLimaXwnZOK8J2Tg/Cdkr7wnZK44oS08J2SueKEr1wiIG5hbWU9XCJ3cFVuaWNvZGVDaGVja1wiPlxuXHRcdDwvZm9ybT5gO1xuXHRcdGNvbW1pdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhvdENhdENvbW1pdEZvcm0+KCcjaG90Y2F0Q29tbWl0Rm9ybScpO1xuXHR9O1xuXHRjb25zdCBnZXRQYWdlID0gKCk6IHZvaWQgPT4ge1xuXHRcdC8vIFdlIGtub3cgd2UgaGF2ZSBhbiBhcnRpY2xlIGhlcmUuXG5cdFx0aWYgKGNvbmYud2dBcnRpY2xlSWQpIHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cmF3Y29udGludWU6ICcnLFxuXHRcdFx0XHR0aXRsZXM6IGNvbmYud2dQYWdlTmFtZSxcblx0XHRcdFx0cHJvcDogWydpbmZvJywgJ3JldmlzaW9ucyddLFxuXHRcdFx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnLCAnaWRzJ10sXG5cdFx0XHRcdHJ2bGltaXQ6ICcxJyxcblx0XHRcdFx0cnZzdGFydGlkOiBjb25mLndnQ3VyUmV2aXNpb25JZCxcblx0XHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0XHRtZXRhOiBbJ3NpdGVpbmZvJ10sXG5cdFx0XHR9O1xuXHRcdFx0SEMuc3RhcnQgPSAoZGF0YTogSG90Q2F0QXBpUXVlcnlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRzZXRQYWdlKGRhdGEpO1xuXHRcdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHRcdH07XG5cdFx0XHR2b2lkIGFwaS5nZXQocGFyYW1zKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdEhDLnN0YXJ0IShkYXRhIGFzIEhvdENhdEFwaVF1ZXJ5UmVzcG9uc2UpO1xuXHRcdFx0fSk7XG5cdFx0XHRzZXR1cFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2V0dXAoY3JlYXRlQ29tbWl0Rm9ybSk7XG5cdFx0XHR9LCA0MDAwKTsgLy8gNCBzZWMsIGp1c3QgaW4gY2FzZSBnZXR0aW5nIHRoZSB3aWtpdGV4dCB0YWtlcyBsb25nZXIuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIERvZXNuJ3QgZXhpc3QgeWV0LiBEaXNhYmxlIG9uIG5vbi1leGlzdGluZyBVc2VyIHBhZ2VzLlxuXHRcdFx0aWYgKGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cGFnZVRleHQgPSAnJztcblx0XHRcdHBhZ2VUaW1lID0gbnVsbDtcblx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdH1cblx0fTtcblx0Y29uc3Qgc2V0U3RhdGUgPSAoc3RhdGU6IHN0cmluZyk6IG51bGwgPT4ge1xuXHRcdGNvbnN0IGNhdHMgPSBzdGF0ZS5zcGxpdCgnXFxuJyk7XG5cdFx0aWYgKGNhdHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKGluaXRpYWxpemVkICYmIGVkaXRvcnMubGVuZ3RoID09PSAxICYmIGVkaXRvcnNbMF0hLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdC8vIEluc2VydCBuZXcgc3BhbnMgYW5kIGNyZWF0ZSBuZXcgZWRpdG9ycyBmb3IgdGhlbS5cblx0XHRcdGNvbnN0IG5ld1NwYW5zOiB7ZWxlbWVudDogSFRNTEVsZW1lbnQ7IHRpdGxlOiBzdHJpbmc7IGtleTogc3RyaW5nIHwgbnVsbH1bXSA9IFtdO1xuXHRcdFx0Y29uc3QgYmVmb3JlID0gZWRpdG9ycy5sZW5ndGggPT09IDEgPyBlZGl0b3JzWzBdIS5zcGFuIDogbnVsbDtcblx0XHRcdGxldCBpOiBudW1iZXI7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2F0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoY2F0c1tpXSEubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgY2F0ID0gY2F0c1tpXSEuc3BsaXQoJ3wnKTtcblx0XHRcdFx0Y29uc3Qga2V5ID0gY2F0Lmxlbmd0aCA+IDEgPyBjYXRbMV0hIDogbnVsbDtcblx0XHRcdFx0Y29uc3QgY2F0TmFtZSA9IGNhdFswXSE7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9IHdpa2lQYWdlUGF0aChgJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7Y2F0TmFtZX1gKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShjYXROYW1lLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBjYXROYW1lO1xuXHRcdFx0XHRjb25zdCBzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0aWYgKCFpKSB7XG5cdFx0XHRcdFx0Y2F0TGluZSEuaW5zZXJ0QmVmb3JlKG1ha2UoJyAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRiZWZvcmUhLmJlZm9yZShzcGFuKTtcblx0XHRcdFx0aWYgKGJlZm9yZSAmJiBpICsgMSA8IGNhdHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0YmVmb3JlLnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShtYWtlKCcgfCAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdTcGFuc1tuZXdTcGFucy5sZW5ndGhdID0ge1xuXHRcdFx0XHRcdGVsZW1lbnQ6IHNwYW4sXG5cdFx0XHRcdFx0dGl0bGU6IGNhdE5hbWUsXG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Ly8gQW5kIGNoYW5nZSB0aGUgbGFzdCBvbmUuLi5cblx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0YmVmb3JlLnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShtYWtlKCcgfCAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdH1cblx0XHRcdGZvciAoY29uc3QgbmV3U3BhbiBvZiBuZXdTcGFucykge1xuXHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IoY2F0TGluZSEsIG5ld1NwYW4uZWxlbWVudCwgbmV3U3Bhbi50aXRsZSwgbmV3U3Bhbi5rZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgZ2V0U3RhdGUgPSAoKTogc3RyaW5nIHwgbnVsbCA9PiB7XG5cdFx0bGV0IHJlc3VsdDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0bGV0IHRleHQgPSBlZGl0b3IuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0Y29uc3Qga2V5ID0gZWRpdG9yLmN1cnJlbnRLZXk7XG5cdFx0XHRpZiAodGV4dCAmJiB0ZXh0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0aWYgKGtleSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHRleHQgKz0gYHwke2tleX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZXN1bHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSB0ZXh0O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdCArPSBgXFxuJHt0ZXh0fWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0Y29uc3QgcmVhbGx5X3J1biA9ICgpOiB2b2lkID0+IHtcblx0XHRpbml0aWFsaXplKCk7XG5cdFx0aWYgKFxuXHRcdFx0IUhDLnVwbG9hZF9kaXNhYmxlZCAmJlxuXHRcdFx0Y29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gLTEgJiZcblx0XHRcdGNvbmYud2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdVcGxvYWQnICYmXG5cdFx0XHRjb25mLndnVXNlck5hbWVcblx0XHQpIHtcblx0XHRcdHNldHVwX3VwbG9hZCgpO1xuXHRcdFx0c2V0dXAoKCkgPT4ge1xuXHRcdFx0XHQvLyBDaGVjayBmb3Igc3RhdGUgcmVzdG9yYXRpb24gb25jZSB0aGUgc2V0dXAgaXMgZG9uZSBvdGhlcndpc2UsIGJ1dCBiZWZvcmUgc2lnbmFsbGluZyBzZXR1cCBjb21wbGV0aW9uXG5cdFx0XHRcdGlmICh3aW5kb3cuVXBsb2FkRm9ybSAmJiB3aW5kb3cuVXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUpIHtcblx0XHRcdFx0XHR3aW5kb3cuVXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUgPSBzZXRTdGF0ZSh3aW5kb3cuVXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhY29uZi53Z0lzQXJ0aWNsZSB8fFxuXHRcdFx0XHRjb25mLndnQWN0aW9uICE9PSAndmlldycgfHxcblx0XHRcdFx0cGFyYW0oJ2RpZmYnKSAhPT0gbnVsbCB8fFxuXHRcdFx0XHRwYXJhbSgnb2xkaWQnKSAhPT0gbnVsbCB8fFxuXHRcdFx0XHQhY2FuX2VkaXQoKSB8fFxuXHRcdFx0XHRIQy5kaXNhYmxlKClcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRnZXRQYWdlKCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBydW4gPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKEhDLnN0YXJ0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0SEMuc3RhcnRlZCA9IHRydWU7XG5cdFx0cmVhbGx5X3J1bigpO1xuXHR9O1xuXHQvLyBFeHBvcnQgbGVnYWN5IGZ1bmN0aW9uc1xuXHR3aW5kb3cuaG90Y2F0X2dldF9zdGF0ZSA9ICgpOiBzdHJpbmcgfCBudWxsID0+IHtcblx0XHRyZXR1cm4gZ2V0U3RhdGUoKTtcblx0fTtcblx0d2luZG93LmhvdGNhdF9zZXRfc3RhdGUgPSAoc3RhdGU6IHN0cmluZyk6IG51bGwgPT4ge1xuXHRcdHJldHVybiBzZXRTdGF0ZShzdGF0ZSk7XG5cdH07XG5cdHdpbmRvdy5ob3RjYXRfY2xvc2VfZm9ybSA9ICgpOiB2b2lkID0+IHtcblx0XHRjbG9zZUZvcm0oKTtcblx0fTtcblx0SEMucnVuV2hlblJlYWR5ID0gKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0Ly8gcnVuIHVzZXItcmVnaXN0ZXJlZCBjb2RlIG9uY2UgSG90Q2F0IGlzIGZ1bGx5IHNldCB1cCBhbmQgcmVhZHkuXG5cdFx0bXcuaG9vaygnaG90Y2F0LnJlYWR5JykuYWRkKGNhbGxiYWNrKTtcblx0fTtcblx0Ly8gUnVuIGFzIHNvb24gYXMgcG9zc2libGUuIFRoaXMgdmFyaWVzIGRlcGVuZGluZyBvbiBNZWRpYVdpa2kgdmVyc2lvbjtcblx0Ly8gd2luZG93J3MgJ2xvYWQnIGV2ZW50IGlzIGFsd2F5cyBzYWZlLCBidXQgdXN1YWxseSB3ZSBjYW4gZG8gYmV0dGVyIHRoYW4gdGhhdC5cblx0aWYgKGNvbmYud2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdVcGxvYWQnKSB7XG5cdFx0Ly8gUmVsb2FkIEhvdENhdCBhZnRlciAoVkUpIGVkaXRzIChidWcgVDEwMzI4NSlcblx0XHRtdy5ob29rKCdwb3N0RWRpdCcpLmFkZCgoKSA9PiB7XG5cdFx0XHQvLyBSZXNldCBIb3RDYXQgaW4gY2FzZSB0aGlzIGlzIGEgc29mdCByZWxvYWQgKGUuZy4gVmlzdWFsRWRpdG9yIGVkaXQpLCB1bmxlc3MgdGhlIGNhdGVnb3JpZXNcblx0XHRcdC8vIHdlcmUgbm90IHJlLXJlbmRlcmVkIGFuZCBvdXIgaW50ZXJmYWNlIGlzIHN0aWxsIHRoZXJlIChlLmcuIERpc2N1c3Npb25Ub29scyBlZGl0KVxuXHRcdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRsaW5rcyAuaG90Y2F0bGluaycpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNhdExpbmUgPSBudWxsO1xuXHRcdFx0ZWRpdG9ycyA9IFtdO1xuXHRcdFx0aW5pdGlhbGl6ZWQgPSBmYWxzZTtcblx0XHRcdEhDLnN0YXJ0ZWQgPSBmYWxzZTtcblx0XHRcdHJ1bigpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdlIGNhbiBzYWZlbHkgdHJpZ2dlciBqdXN0IGFmdGVyIHVzZXIgY29uZmlndXJhdGlvbiBpcyBsb2FkZWQuXG5cdC8vIFVzZSBhbHdheXMoKSBpbnN0ZWFkIG9mIHRoZW4oKSB0byBhbHNvIHN0YXJ0IEhvdENhdCBpZiB0aGUgdXNlciBtb2R1bGUgaGFzIHByb2JsZW1zLlxuXHQkKHJ1bik7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDRHRCLElBQUFDLG9CQUF3QkQsUUFBQSxpQkFBQTtBQUd4QixJQUFNRSxRQUF5Q0MsZUFBYztBQUM1RCxVQUFBLEdBQU9GLGtCQUFBRyxXQUFVRCxTQUFTO0FBQzNCOztBRERBOzs7Ozs7OztBQVFBLE1BQUEsR0FBS0osbUJBQUFNLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxZQUFZQyxPQUFzQztBQUM5RSxNQUNDQyxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQixNQUFNLEtBQ3ZDQyxPQUFPQyxrQ0FDUCxDQUFDQyxTQUFTQyxjQUFjLGtCQUFrQixHQUN6QztBQUNEO0VBQ0Q7QUFDQSxRQUFNQyxNQUFNZCxNQUFNLGlCQUFpQjtBQUNuQyxRQUFNZSx3QkFBd0I7QUFDOUIsUUFBTUMsV0FBVztBQUNqQixRQUFNQyxrQkFBa0I7QUFDeEIsUUFBTUMsY0FBY1gsR0FBR1ksUUFBUVYsSUFBSVEsZUFBZTtBQU9sRCxRQUFNRyxjQUFlQyxlQUE4QjtBQUNsRCxXQUFPQyxFQUFFLFFBQVEsRUFBRUMsS0FBSyxTQUFBLHFCQUFBQyxPQUE4QkgsU0FBUyxDQUFFLEVBQUVJLEtBQUssR0FBRztFQUM1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LFNBQVNDLGNBQWMsdUJBQXVCLEdBQUc7QUFDcEQ7TUFDRDtBQUNBc1UsZ0JBQVU7QUFDVkUsZ0JBQVUsQ0FBQTtBQUNWeWQsb0JBQWM7QUFDZHhyQixTQUFHb3VCLFVBQVU7QUFDYkQsVUFBSTtJQUNMLENBQUM7RUFDRjtBQUdBbjBCLElBQUVtMEIsR0FBRztBQUNOLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgIm13QXBpIiwgInVzZXJBZ2VudCIsICJpbml0TXdBcGkiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImhvdENhdENoZWNrIiwgIiRib2R5IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAid2luZG93IiwgIkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImFwaSIsICJjaGVja0NhdGVnb3JpZXNSZWdFeHAiLCAic2VsZk5hbWUiLCAic3RvcmFnZUl0ZW1OYW1lIiwgInN0b3JhZ2VJdGVtIiwgInN0b3JhZ2UiLCAiY3JlYXRlakljb24iLCAiaWNvbkNsYXNzIiwgIiQiLCAiYXR0ciIsICJjb25jYXQiLCAidGV4dCIsICJjcmVhdGVOb3RpZnlBcmVhIiwgInRleHROb2RlIiwgImljb24iLCAic3RhdGUiLCAiYWRkQ2xhc3MiLCAiYXBwZW5kIiwgImNzcyIsICJwYWRkaW5nIiwgIm9uZSIsICJlIiwgIl9zZWxmJHdwVGV4dGJveDEkdmFsdSIsICJzZWxmIiwgIm5ld1ZhbCIsICJ3cFRleHRib3gxIiwgInZhbHVlIiwgInJlcGxhY2UiLCAiJGRpYWxvZ0NoZWNrU3RvcmFnZSIsICIkcGVybWFTYXZlSGludCIsICIkdGV4dEhpbnROb2RlIiwgIiRkaWFsb2ciLCAiJG92ZXJsYXkiLCAiZG9SZW1vdmUiLCAid3BTdW1tYXJ5IiwgIndyaXRlU3RvcmFnZSIsICJ2YWwiLCAic2V0IiwgImNsb3NlRGlhbG9nIiwgIl8kb3ZlcmxheSIsICJvZmYiLCAicmVtb3ZlIiwgImZpbmQiLCAidHJpZ2dlciIsICJmaW5pc2hEaWFsb2ciLCAic3RvcmFnZVZhbHVlIiwgIl8kZGlhbG9nQ2hlY2tTdG9yYWdlJCIsICJjaGVja2VkIiwgIl9hZGRUb0pTIiwgIl9lIiwgInByZXZlbnREZWZhdWx0IiwgImhhc0NsYXNzIiwgIiRlbCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJ0aXRsZSIsICJzdW1tYXJ5IiwgImFwcGVuZHRleHQiLCAiZGF0YSIsICJlZGl0RG9uZSIsICJlZGl0U3RhdCIsICJlcnJvciIsICJub3RpZnkiLCAiY29kZSIsICJpbmZvIiwgInRhZyIsICJ0eXBlIiwgImhpZGUiLCAicG9zdFdpdGhUb2tlbiIsICJwcm9tcHQiLCAiaWQiLCAib24iLCAic2hvdyIsICJhcHBlbmRUbyIsICJkaXNwbGF5IiwgInVzZXIiLCAiaXNBbm9uIiwgInJvbGUiLCAicHJlcGVuZCIsICJmaXJzdCIsICJldmVudCIsICJ0YXJnZXQiLCAia2V5IiwgIkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdCIsICIkb2tMaW5rIiwgImhyZWYiLCAiZG9FZGl0IiwgInJlc3VsdCIsICJub2NyZWF0ZSIsICJhamF4IiwgInVybCIsICJkYXRhVHlwZSIsICJzdWNjZXNzIiwgImNhY2hlIiwgImhvdENhdE1lc3NhZ2VzIiwgIndnVXNlckxhbmd1YWdlIiwgImluY2x1ZGVzIiwgIm1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAiYXJncyIsICJtZXNzYWdlIiwgInBsYWluIiwgImNyZWF0ZUNhdGVnb3J5VGV4dFRvb2xzIiwgIkhDIiwgIndpa2lUZXh0QmxhbmsiLCAid2lraVRleHRCbGFua1JFIiwgIndpa2lUZXh0QmxhbmtPckJpZGkiLCAiZXNjYXBlUkUiLCAiZ2V0SW50ZXJsYW5ndWFnZVJFIiwgImZpbmRDYXRzUkUiLCAiUmVnRXhwIiwgImNhdGVnb3J5X3JlZ2V4cCIsICJyZXBsYWNlQnlCbGFua3MiLCAibWF0Y2giLCAiZmluZF9jYXRlZ29yeSIsICJ3aWtpdGV4dCIsICJjYXRlZ29yeSIsICJvbmNlIiwgImNhdF9yZWdleCIsICJ0ZW1wbGF0ZV9jYXRlZ29yaWVzIiwgInRlbXBsYXRlX3JlZ2V4cCIsICJjYXRfbmFtZSIsICJpbml0aWFsIiwgInNsaWNlIiwgImNhcGl0YWxpemVQYWdlTmFtZXMiLCAidG9VcHBlckNhc2UiLCAidG9Mb3dlckNhc2UiLCAiZXhlYyIsICJub3dpa2lSZWdleCIsICJTdHJpbmciLCAicmF3IiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgImNvcGllZHRleHQiLCAiY3Vycl9tYXRjaCIsICJsZW5ndGgiLCAicmUiLCAiY2hhbmdlX2NhdGVnb3J5IiwgInRvUmVtb3ZlIiwgInRvQWRkIiwgImlzX2hpZGRlbiIsICJmaW5kX2luc2VydGlvbnBvaW50IiwgIl93aWtpdGV4dCIsICJfdGVtcGxhdGVPYmplY3QyIiwgImluZGV4IiwgImxhc3RJbmRleCIsICJpbnRlcmxhbmd1YWdlUkUiLCAiaWR4IiwgIm9uQ2F0IiwgIm5hbWVTcGFjZSIsICJjYXRlZ29yeV9jYW5vbmljYWwiLCAia2V5Q2hhbmdlIiwgIm1hdGNoZXMiLCAiY2F0X3BvaW50IiwgIm1hdGNoZXNBcnJheSIsICJmaXJzdE1hdGNoIiwgImJlZm9yZSIsICJNYXRoIiwgIm1heCIsICJhZnRlciIsICJfZmlyc3RNYXRjaCQiLCAiaSIsICJjaGFyQXQiLCAic2VhcmNoIiwgImoiLCAicG9pbnQiLCAibmV3Y2F0c3RyaW5nIiwgInN1ZmZpeCIsICJrIiwgInVuY2F0X3JlZ2V4cCIsICJ0eHQiLCAiUF9ub19kZWZhdWx0IiwgIlBfeWVzX2RlZmF1bHQiLCAiZXhpc3RzTm8iLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImV4aXN0c1llcyIsICJjcmVhdGVIb3RDYXRDb25maWciLCAiY29uZiIsICJsaW5rcyIsICJjaGFuZ2UiLCAiYWRkIiwgInJlc3RvcmUiLCAidW5kbyIsICJkb3duIiwgInVwIiwgImNoYW5nZVRhZyIsICJhZGRtdWx0aSIsICJkaXNhYmxlIiwgIm5zIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIm5zSWRzIiwgIndnTmFtZXNwYWNlSWRzIiwgIndnQXJ0aWNsZUlkIiwgInRlc3QiLCAid2dUaXRsZSIsICJ1cGxvYWRfZGlzYWJsZWQiLCAiYmxhY2tsaXN0IiwgImJnX2NoYW5nZWQiLCAibm9fYXV0b2NvbW1pdCIsICJkZWxfbmVlZHNfZGlmZiIsICJzdWdnZXN0X2RlbGF5IiwgImVkaXRib3hfd2lkdGgiLCAic3VnZ2VzdGlvbnMiLCAiZml4ZWRfc2VhcmNoIiwgInVzZV91cF9kb3duIiwgImxpc3RTaXplIiwgInNpbmdsZV9taW5vciIsICJkb250X2FkZF90b193YXRjaGxpc3QiLCAic2hvcnRjdXRzIiwgImFkZFNob3J0Y3V0cyIsICJtYXAiLCAiT2JqZWN0IiwgImhhc093biIsICJ2IiwgInRyaW0iLCAiY3JlYXRlSG90Q2F0VXRpbGl0aWVzIiwgIl9jb25mJHdnRm9ybWF0dGVkTmFtZTIiLCAiX3RlbXBsYXRlT2JqZWN0MyIsICJfdGVtcGxhdGVPYmplY3Q0IiwgImF1dG9Mb2NhbGl6ZSIsICJuYW1lc3BhY2VOdW1iZXIiLCAiZmFsbGJhY2siLCAiX2NvbmYkd2dGb3JtYXR0ZWROYW1lIiwgImNyZWF0ZVJlZ2V4cFN0ciIsICJuYW1lIiwgInJlZ2V4X25hbWUiLCAibGwiLCAidWwiLCAiX3RlbXBsYXRlT2JqZWN0NSIsICJjYW5vbmljYWwiLCAid2dGb3JtYXR0ZWROYW1lc3BhY2VzIiwgInJlZ2V4cCIsICJtYWtlIiwgImFyZyIsICJsaXRlcmFsIiwgImNyZWF0ZVRleHROb2RlIiwgImNyZWF0ZUVsZW1lbnQiLCAicGFyYW0iLCAidXJpIiwgImxvY2F0aW9uIiwgIm0iLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgInNjcmlwdCIsICJ3Z1NjcmlwdCIsICJpbmRleE9mIiwgIndnU2VydmVyIiwgInByb3RvY29sIiwgInByZWZpeCIsICJ3Z0FydGljbGVQYXRoIiwgImNsYXNzTmFtZSIsICJzZXRTdHlsZVByb3BlcnR5IiwgImVsZW1lbnQiLCAicHJvcGVydHkiLCAic3R5bGUiLCAiY2FwaXRhbGl6ZSIsICJzdHIiLCAid2lraVBhZ2VQYXRoIiwgInBhZ2VOYW1lIiwgIl90ZW1wbGF0ZU9iamVjdDYiLCAic3Vic3RpdHV0ZUZhY3RvcnkiLCAib3B0aW9ucyIsICJsZWFkIiwgImluZGljYXRvciIsICJsYnJhY2UiLCAicmJyYWNlIiwgImFscGhhIiwgInJlcGxhY2VtZW50IiwgInJlcGxhY2VTaG9ydGN1dHMiLCAicmVwbGFjZUhhc2giLCAicyIsICJjcmVhdGVTdWdnZXN0aW9uRGF0YSIsICJjYXRQcmVmaXgiLCAidG9DYXRlZ29yeVRpdGxlcyIsICJtZW1iZXJzIiwgIm1lbWJlciIsICJzdWdnZXN0aW9uRW5naW5lcyIsICJvcGVuc2VhcmNoIiwgImhhbmRsZXIiLCAicXVlcnlSZXN1bHQiLCAicXVlcnlLZXkiLCAidGl0bGVzIiwgImV4aXN0cyIsICJzcGxpY2UiLCAibm9ybWFsaXplZCIsICJpbnRlcm5hbHNlYXJjaCIsICJfcXVlcnlSZXN1bHQkcXVlcnkiLCAiYWxscGFnZXMiLCAicXVlcnkiLCAiX3F1ZXJ5UmVzdWx0JHF1ZXJ5MiIsICJwYWdlcyIsICJwIiwgInN1YmNhdGVnb3JpZXMiLCAiX3F1ZXJ5UmVzdWx0JHF1ZXJ5MyIsICJjYXRlZ29yeW1lbWJlcnMiLCAicGFyZW50Y2F0ZWdvcmllcyIsICJfcXVlcnlSZXN1bHQkcXVlcnk0IiwgImNhdGVnb3JpZXMiLCAic3VnZ2VzdGlvbkNvbmZpZ3MiLCAic2VhcmNoaW5kZXgiLCAiZW5naW5lcyIsICJ0ZW1wIiwgIm5vQ29tcGxldGlvbiIsICJwYWdlbGlzdCIsICJjb21iaW5lZCIsICJzdWJjYXQiLCAicGFyZW50Y2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJob3RDYXQiLCAiSG90Q2F0IiwgIm5vZGVOYW1lIiwgIndnQWN0aW9uIiwgInVhIiwgIm5hdmlnYXRvciIsICJpc193ZWJraXQiLCAibm9TdWdnZXN0aW9ucyIsICJldnRLZXlzIiwgImN0cmxLZXkiLCAibWV0YUtleSIsICJzaGlmdEtleSIsICJldnRLaWxsIiwgIl9ldmVudCRzdG9wUHJvcGFnYXRpbyIsICJzdG9wUHJvcGFnYXRpb24iLCAiY2FsbCIsICJjYW5jZWxCdWJibGUiLCAiY2F0TGluZSIsICJvblVwbG9hZCIsICJlZGl0b3JzIiwgImNvbW1pdEJ1dHRvbiIsICJjb21taXRGb3JtIiwgIm11bHRpU3BhbiIsICJwYWdlVGV4dCIsICJwYWdlVGltZSIsICJwYWdlV2F0Y2hlZCIsICJ3YXRjaENyZWF0ZSIsICJ3YXRjaEVkaXQiLCAibWlub3JFZGl0cyIsICJlZGl0VG9rZW4iLCAiaXNfcnRsIiwgInNlcnZlclRpbWUiLCAibGFzdFJldklkIiwgInBhZ2VUZXh0UmV2SWQiLCAiY29uZmxpY3RpbmdVc2VyIiwgIm5ld0RPTSIsICJVTkNIQU5HRUQiLCAiT1BFTiIsICJDSEFOR0VfUEVORElORyIsICJDSEFOR0VEIiwgIkRFTEVURUQiLCAic2V0UGFnZSIsICJzdGFydFRpbWUiLCAiX2RhdGEkcXVlcnkkdXNlcmluZm8iLCAicGFnZSIsICJyZXZpc2lvbnMiLCAibGF0ZXN0UmV2aXNpb24iLCAiY29uZmxpY3RpbmdSZXZpc2lvbiIsICJzbG90cyIsICJtYWluIiwgImNvbnRlbnQiLCAidGltZXN0YW1wIiwgInJldmlkIiwgIl9jb25mbGljdGluZ1JldmlzaW9uJCIsICJsYXN0cmV2aWQiLCAic3RhcnR0aW1lc3RhbXAiLCAid2F0Y2hlZCIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgImxhbmdsaW5rcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAibiIsICJkb25lIiwgImxhbmdsaW5rIiwgImxhbmciLCAiX3RlbXBsYXRlT2JqZWN0NyIsICJlcnIiLCAiZiIsICJnZW5lcmFsIiwgInRpbWUiLCAiY2FzZSIsICJ1c2VyaW5mbyIsICJ3YXRjaGNyZWF0aW9ucyIsICJ3YXRjaGRlZmF1bHQiLCAibWlub3JkZWZhdWx0IiwgInNhdmVJblByb2dyZXNzIiwgImluaXRpYXRlRWRpdCIsICJmYWlsdXJlIiwgIm9sZEJ1dHRvblN0YXRlIiwgImRpc2FibGVkIiwgImZhaWwiLCAiZm9ybWF0dmVyc2lvbiIsICJyYXdjb250aW51ZSIsICJ3Z1BhZ2VOYW1lIiwgInByb3AiLCAiaW5wcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInJ2bGltaXQiLCAicnZkaXIiLCAicnZzdGFydGlkIiwgIndnQ3VyUmV2aXNpb25JZCIsICJsbGxpbWl0IiwgIm1ldGEiLCAidWlwcm9wIiwgInN0YXR1cyIsICJzdGF0dXNUZXh0IiwgIm11bHRpQ2hhbmdlTXNnIiwgImNvdW50IiwgImN1cnJlbnRUaW1lc3RhbXAiLCAibm93IiwgIkRhdGUiLCAidHMiLCAiZ2V0VVRDRnVsbFllYXIiLCAidHdvIiwgImdldFVUQ01vbnRoIiwgImdldFVUQ0RhdGUiLCAiZ2V0VVRDSG91cnMiLCAiZ2V0VVRDTWludXRlcyIsICJnZXRVVENTZWNvbmRzIiwgInBlcmZvcm1DaGFuZ2VzIiwgInNpbmdsZUVkaXRvciIsICJzZWxmRWRpdENvbmZsaWN0IiwgIndnVXNlck5hbWUiLCAibm9Db21taXQiLCAid3BFZGl0VG9rZW4iLCAid3BEaWZmIiwgIndwU2F2ZSIsICJjaGFuZ2VkIiwgImFkZGVkIiwgImRlbGV0ZWQiLCAidG9FZGl0IiwgImVkaXQiLCAiY2hhbmdlcyIsICJvcmlnaW5hbENhdGVnb3J5IiwgImN1cnJlbnRDYXRlZ29yeSIsICJjdXJyZW50S2V5IiwgImN1cnJlbnRIaWRkZW4iLCAiZnJvbSIsICJ0byIsICJ3cE1pbm9yZWRpdCIsICJ3cFdhdGNodGhpcyIsICJ3cENoYW5nZVRhZ3MiLCAid3BBdXRvU3VtbWFyeSIsICJqb2luIiwgInNob3J0U3VtbWFyeSIsICJhcnJvdyIsICJqb2luZWRTdW1tYXJ5IiwgImZpbmFsU3VtbWFyeSIsICJ3cFN0YXJ0dGltZSIsICJ3cEVkaXR0aW1lIiwgIm9sZGlkIiwgImhjQ29tbWl0IiwgImNsaWNrIiwgInJlc29sdmVPbmUiLCAidG9SZXNvbHZlIiwgImNhdHMiLCAiaXNfZGFiIiwgImlzX3JlZGlyIiwgInJlZGlyZWN0IiwgImNhdGVnb3J5aW5mbyIsICJoaWRkZW4iLCAiaXNfbWlzc2luZyIsICJtaXNzaW5nIiwgInBhZ2VUaXRsZSIsICJlZGl0b3IiLCAiZGFiSW5wdXRDbGVhbmVkIiwgImlucHV0RXhpc3RzIiwgInNyYyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJjYXRfIiwgImNhdCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJsaW5rIiwgImRhYiIsICJyZXNvbHZlUmVkaXJlY3RzIiwgInJlc29sdmVNdWx0aSIsICJjYWxsYmFjayIsICJkYWJJbnB1dCIsICJsYXN0SW5wdXQiLCAicGxuYW1lc3BhY2UiLCAicGxsaW1pdCIsICJjbGxpbWl0IiwgImpzb24iLCAicmVxIiwgIm1ha2VBY3RpdmUiLCAid2hpY2giLCAiaXNfYWN0aXZlIiwgIl9pIiwgIl9lZGl0b3JzIiwgImluYWN0aXZhdGUiLCAic2hvd0RhYiIsICJleHBlY3RlZElucHV0IiwgImxhc3RSZWFsSW5wdXQiLCAiYWN0dWFsVmFsdWUiLCAic2hvd3NMaXN0IiwgInNwbGl0IiwgImxhc3RTZWxlY3Rpb24iLCAic3RhcnQiLCAiZW5kIiwgImRpc3BsYXlMaXN0IiwgInNldFRpbWVvdXQiLCAic2V0U2VsZWN0aW9uIiwgInNob3dTdWdnZXN0aW9ucyIsICJtdWx0aVN1Ym1pdCIsICJfaTIiLCAiX2VkaXRvcnMyIiwgIm1zZyIsICJyZXNvbHZlZCIsICJmaXJzdERhYiIsICJkb250Q2hhbmdlIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImFjY2VwdENoZWNrIiwgImNvbW1pdCIsICJzZXRNdWx0aUlucHV0IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAicmVwbGFjZVdpdGgiLCAiY2hlY2tNdWx0aUlucHV0IiwgImhhc0NoYW5nZXMiLCAiX2kzIiwgIl9lZGl0b3JzMyIsICJCUyIsICJUQUIiLCAiUkVUIiwgIkVTQyIsICJTUEFDRSIsICJQR1VQIiwgIlBHRE9XTiIsICJVUCIsICJET1dOIiwgIkRFTCIsICJJTUUiLCAiQ2F0ZWdvcnlFZGl0b3IiLCAiaXNDb21wb3NpdGlvblN0YXJ0IiwgImlzQWRkQ2F0ZWdvcnkiLCAiY2F0TGluayIsICJvcmlnaW5hbEtleSIsICJvcmlnaW5hbEV4aXN0cyIsICJvcmlnaW5hbEhpZGRlbiIsICJvcmlnaW5hbFN0YXRlIiwgImxpbmtTcGFuIiwgIm5vcm1hbExpbmtzIiwgInVuZGVsTGluayIsICJ1cERvd25MaW5rcyIsICJ1bmRvTGluayIsICJsaW5lIiwgInNwYW4iLCAiZW5naW5lIiwgImVuZ2luZU5hbWUiLCAiZW5naW5lU2VsZWN0b3IiLCAiZm9ybSIsICJsaXN0IiwgIm9rIiwgImNhbmNlbEJ1dHRvbiIsICJjdXJyZW50RXhpc3RzIiwgImxhc3RTYXZlZFN0YXRlIiwgImxhc3RTYXZlZENhdGVnb3J5IiwgImxhc3RTYXZlZEtleSIsICJsYXN0U2F2ZWRFeGlzdHMiLCAibGFzdFNhdmVkSGlkZGVuIiwgImxhc3RRdWVyeSIsICJpbWUiLCAidXNlc0NvbXBvc2l0aW9uIiwgImxhc3RLZXkiLCAia2V5Q291bnQiLCAiY2FsbGJhY2tPYmoiLCAiY29uc3RydWN0b3IiLCAiaW5pdGlhbGl6ZSIsICJkaXIiLCAiZmlyc3RDaGlsZCIsICJtYWtlTGlua1NwYW4iLCAiYWZ0ZXJFbGVtZW50IiwgImFkZFNwYW4iLCAicGFyZW50Tm9kZSIsICJpbnNlcnRCZWZvcmUiLCAibmV4dFNpYmxpbmciLCAib3BlbiIsICJiaW5kIiwgIm91dGVyU3BhbiIsICJpbnZva2VTdWdnZXN0aW9ucyIsICJkb250X2F1dG9jb21wbGV0ZSIsICJ0ZXh0Y2hhbmdlIiwgIm1ha2VGb3JtIiwgIm1ldGhvZCIsICJhY2NlcHQiLCAic2l6ZSIsICJwcm9jZXNzS2V5IiwgInJlc2V0S2V5U2VsZWN0aW9uIiwgImNhbmNlbCIsICJOdW1iZXIiLCAic2F2ZVZpZXciLCAiaGlnaGxpZ2h0U3VnZ2VzdGlvbiIsICJmb2N1cyIsICJvcHQiLCAic2VsZWN0ZWQiLCAic2VsZWN0ZWRJbmRleCIsICJPSyIsICJwb3NpdGlvbiIsICJ3aGl0ZVNwYWNlIiwgIl9pNCIsICJfZWRpdG9yczQiLCAicmVhZE9ubHkiLCAicmVtb3ZlRWRpdG9yIiwgImJhY2tncm91bmRDb2xvciIsICJuZXh0IiwgInJvbGxiYWNrIiwgImRvbnRDaGVjayIsICJzYW5pdGl6ZUlucHV0IiwgImNsb3NlIiwgIl9pNSIsICJfZWRpdG9yczUiLCAiY3NzVGV4dCIsICJ0ZXh0RGVjb3JhdGlvbiIsICJzZWxlY3RFbmdpbmUiLCAibWFrZUNhbGwiLCAiY2xlYW5LZXkiLCAiY2IiLCAieiIsICJjYWxsc01hZGUiLCAibm9mQ2FsbHMiLCAiYWxsVGl0bGVzIiwgInN1Z2dlc3Rpb25Db25maWciLCAiZG9udENhY2hlIiwgImNhbmNlbGxlZCIsICJnZXRKU09OIiwgImZvcmNlIiwgInBpcGUiLCAiY2FjaGVkVGl0bGVzIiwgIm1ha2VDYWxscyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJlbmdpbmVfIiwgIndnU2NyaXB0UGF0aCIsICJkb250QXV0b2NvbXBsZXRlIiwgImlucHV0VmFsdWUiLCAiY2F0ZWdvcnlOYW1lIiwgInZOb3JtYWxpemVkIiwgImtub3duVG9FeGlzdCIsICJ2TG93IiwgInNvcnQiLCAiYSIsICJiIiwgInByZWZpeE1hdGNoQSIsICJwcmVmaXhNYXRjaEIiLCAiYUxvdyIsICJiTG93IiwgImZpcnN0VGl0bGUiLCAiY29tcGxldGVkIiwgImF1dG9Db21wbGV0ZSIsICJleGlzdGluZyIsICJub2ZJdGVtcyIsICJtaW4iLCAiekluZGV4IiwgImFuY2hvciIsICJsaXN0aCIsICJ0b3AiLCAib2Zmc2V0VG9wIiwgIm9mZnNldEhlaWdodCIsICJtYXhMaXN0SGVpZ2h0IiwgInZpZXdwb3J0IiwgIndoYXQiLCAiZG9jdW1lbnRFbGVtZW50IiwgInNjcm9sbF9vZmZzZXQiLCAibm9kZSIsICJib3giLCAiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwgIngiLCAicm91bmQiLCAibGVmdCIsICJ5IiwgInRleHRQb3MiLCAibmwiLCAibnQiLCAib2Zmc2V0IiwgInRleHRCb3hXaWR0aCIsICJvZmZzZXRXaWR0aCIsICJjbGllbnRXaWR0aCIsICJ3aWR0aCIsICJzY3JvbGwiLCAidmlld193IiwgInciLCAibF9wb3MiLCAicmlnaHQiLCAicmVsYXRpdmVfb2Zmc2V0IiwgImFjdFZhbCIsICJub3JtYWxpemVkQWN0VmFsIiwgImRvbnRNb2RpZnkiLCAiY2FuU2VsZWN0IiwgInNldFNlbGVjdGlvblJhbmdlIiwgInNlbGVjdGlvblN0YXJ0IiwgImdldFNlbGVjdGlvbiIsICJfdGhpcyR0ZXh0JHNlbGVjdGlvbkUiLCAic2VsZWN0aW9uRW5kIiwgImN1cnIiLCAidGd0IiwgIm9wdGlvblRleHQiLCAiaG90Y2F0X2RvbnRfYWRkX3RvX3dhdGNobGlzdCIsICJIb3RDYXREb250QWRkVG9XYXRjaGxpc3QiLCAiaG90Y2F0X25vX2F1dG9jb21taXQiLCAiSG90Q2F0Tm9BdXRvQ29tbWl0IiwgImhvdGNhdF9kZWxfbmVlZHNfZGlmZiIsICJIb3RDYXREZWxOZWVkc0RpZmYiLCAiaG90Y2F0X3N1Z2dlc3Rpb25fZGVsYXkiLCAiSG90Q2F0U3VnZ2VzdGlvbkRlbGF5IiwgImhvdGNhdF9lZGl0Ym94X3dpZHRoIiwgIkhvdENhdEVkaXRCb3hXaWR0aCIsICJob3RjYXRfc3VnZ2VzdGlvbnMiLCAiSG90Q2F0U3VnZ2VzdGlvbnMiLCAiaG90Y2F0X3N1Z2dlc3Rpb25zX2ZpeGVkIiwgIkhvdENhdEZpeGVkU3VnZ2VzdGlvbnMiLCAiaG90Y2F0X3NpbmdsZV9jaGFuZ2VzX2FyZV9taW5vciIsICJIb3RDYXRNaW5vclNpbmdsZUNoYW5nZXMiLCAiaG90Y2F0X2NoYW5nZWRfYmFja2dyb3VuZCIsICJIb3RDYXRDaGFuZ2VkQmFja2dyb3VuZCIsICJob3RjYXRfdXNlX2NhdGVnb3J5X2xpbmtzIiwgIkhvdENhdFVzZUNhdGVnb3J5TGlua3MiLCAiaG90Y2F0X2xpc3Rfc2l6ZSIsICJIb3RDYXRMaXN0U2l6ZSIsICJIb3RDYXRDaGFuZ2VUYWciLCAiZUZvcm0iLCAiZWRpdGZvcm0iLCAiY2F0UmVnRXhwIiwgIm9sZFR4dCIsICJpc01pbm9yQ2hhbmdlIiwgIl9vbGRUeHQkbWF0Y2giLCAiX25ld1R4dCRtYXRjaCIsICJ0ZXh0Ym94IiwgIm5ld1R4dCIsICJvbGRMaW5lcyIsICJuZXdMaW5lcyIsICJleGNlcHQiLCAiYUFyciIsICJiQXJyIiwgImxBcnIiLCAic0FyciIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJpdGVtIiwgImluZCIsICJjQXJyIiwgImZpbHRlciIsICJjIiwgInRyaW1tZWQiLCAic3VtIiwgInN1bUEiLCAiX2VGb3JtJHdwVGV4dGJveDEkdmFsIiwgIl9lRm9ybSR3cFRleHRib3giLCAiJGN0IiwgInJlbW92ZUNoYW5nZVRhZyIsICJwYXJzZUludCIsICJpc05hTiIsICJfaTYiLCAiX09iamVjdCRlbnRyaWVzIiwgImVudHJpZXMiLCAiYm9keSIsICJkaXJlY3Rpb24iLCAiZGVmYXVsdFZpZXciLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJnZXRQcm9wZXJ0eVZhbHVlIiwgImNhbl9lZGl0IiwgImNsb3NlRm9ybSIsICJfaTciLCAiX2VkaXRvcnM2IiwgInNldHVwX3VwbG9hZCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJpcCIsICJyZXVwbG9hZCIsICJkZXN0RmlsZSIsICJsYWJlbENlbGwiLCAibGluZUNlbGwiLCAidGV4dEFsaWduIiwgIm1hcmdpbiIsICJib3JkZXIiLCAibGFiZWwiLCAidmVydGljYWxBbGlnbiIsICJuZXdSb3ciLCAiaW5zZXJ0Um93IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDMiLCAiZWIiLCAiYWRkZWRPbmUiLCAiX2k4IiwgIl9lZGl0b3JzNyIsICJ0IiwgIm5ld19jYXQiLCAiX3RlbXBsYXRlT2JqZWN0OCIsICJfY2xlYW5lZFRleHQiLCAicHJldmlvdXNDbGVhbmVkVGV4dCIsICJyZWdleCIsICJjbGVhbmVkVGV4dCIsICJpc09uUGFnZSIsICJub2RlVHlwZSIsICJOb2RlIiwgIkVMRU1FTlRfTk9ERSIsICJjYXRUaXRsZSIsICJnZXRBdHRyaWJ1dGUiLCAiX3RlbXBsYXRlT2JqZWN0OSIsICJpbml0aWFsaXplZCIsICJzZXR1cFRpbWVvdXQiLCAiZmluZEJ5Q2xhc3MiLCAic2NvcGUiLCAic2V0dXAiLCAiYWRkaXRpb25hbFdvcmsiLCAiY2xlYXJUaW1lb3V0IiwgImhpZGRlbkNhdHMiLCAiX2hpZGRlbkNhdHMkcGFyZW50Tm9kIiwgImZvb3RlciIsICJjb250YWluZXIiLCAiY3JlYXRlRWRpdG9ycyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImNvcHlDYXRzIiwgIkFycmF5IiwgIl9pOSIsICJfY29weUNhdHMiLCAiYXQiLCAibGFzdFNwYW4iLCAiZW5hYmxlTXVsdGkiLCAiaW5uZXJIVE1MIiwgImN1cnNvciIsICJGdW5jdGlvbiIsICJob29rIiwgImZpcmUiLCAiY3JlYXRlQ29tbWl0Rm9ybSIsICJmb3JtQ29udGFpbmVyIiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJnZXRQYWdlIiwgInNldFN0YXRlIiwgIm5ld1NwYW5zIiwgImNhdE5hbWUiLCAiX2kwIiwgIl9uZXdTcGFucyIsICJuZXdTcGFuIiwgImdldFN0YXRlIiwgIl9pMSIsICJfZWRpdG9yczgiLCAicmVhbGx5X3J1biIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJVcGxvYWRGb3JtIiwgInByZXZpb3VzX2hvdGNhdF9zdGF0ZSIsICJ3Z0lzQXJ0aWNsZSIsICJydW4iLCAic3RhcnRlZCIsICJob3RjYXRfZ2V0X3N0YXRlIiwgImhvdGNhdF9zZXRfc3RhdGUiLCAiaG90Y2F0X2Nsb3NlX2Zvcm0iLCAicnVuV2hlblJlYWR5Il0KfQo=
