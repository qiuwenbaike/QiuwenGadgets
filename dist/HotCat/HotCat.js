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
        $("body")[0].style.direction
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hvdENhdC9tb2R1bGVzL2NoZWNrLnRzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9hcGkudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9nZXRNZXNzYWdlLnRzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9jYXRlZ29yeVRleHQudHMiLCAic3JjL0hvdENhdC9pbWFnZXMvUF9uby5zdmciLCAic3JjL0hvdENhdC9pbWFnZXMvUF95ZXMuc3ZnIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9pbWFnZXMudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL2NvbmZpZ3VyYXRpb24udHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL3V0aWxpdGllcy50cyIsICJzcmMvSG90Q2F0L21vZHVsZXMvc3VnZ2VzdGlvbnMudHMiLCAic3JjL0hvdENhdC9Ib3RDYXQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAnLi9jaGVjay5sZXNzJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bXdBcGl9IGZyb20gJy4vYXBpJztcblxuLyohXG4gKiBDaGVja0NhdGVnb3JpZXMgSG90Q2F0IEV4dGVuc2lvbiDigJNcbiAqIHJlbW92ZXMgdGhlIHRlbXBsYXRlIHdoZW4gY2F0ZWdvcml6aW5nIChwcm9tcHRzIGJlZm9yZSkgd2l0aCBIb3RDYXQgYW5kXG4gKiBhZGRzIGEgbGluayBcIkNhdGVnb3JpZXMgYXJlIE9LXCIgdG8gdGhlIGNhdGVnb3J5LXNlY3Rpb25cbiAqXG4gKiBAcmV2IDIgKDIwMTQtMDMtMjApXG4gKiBAYXV0aG9yIFJpbGxrZSwgMjAxMlxuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGhvdENhdENoZWNrKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRpZiAoXG5cdFx0bXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSAhPT0gNiB8fFxuXHRcdHdpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRPcHRPdXQgfHxcblx0XHQhZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrY2F0ZWdvcmllcycpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBhcGkgPSBtd0FwaSgnaG90Q2F0Q2hlY2svMi4wJyk7XG5cdGNvbnN0IGNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCA9IC97e1tDY11oZWNrWyBfXWNhdGVnb3JpZXNbXnt9XSp9fS9nO1xuXHRjb25zdCBzZWxmTmFtZSA9ICcoW1tNZWRpYVdpa2k6R2FkZ2V0LUhvdENhdC1jaGVjay5qc3xTY3JpcHRdXSk6ICc7XG5cdGNvbnN0IHN0b3JhZ2VJdGVtTmFtZSA9ICdjaGVja0NhdCc7XG5cdGNvbnN0IHN0b3JhZ2VJdGVtID0gbXcuc3RvcmFnZS5nZXQoc3RvcmFnZUl0ZW1OYW1lKTtcblx0LyoqXG5cdCAqIEEgZmV3IHN0eWxpbmcgaGVscGVyIGZ1bmN0aW9uc1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWNvbkNsYXNzXG5cdCAqIEByZXR1cm4ge0pRdWVyeX1cblx0ICovXG5cdGNvbnN0IGNyZWF0ZWpJY29uID0gKGljb25DbGFzczogc3RyaW5nKTogSlF1ZXJ5ID0+IHtcblx0XHRyZXR1cm4gJCgnPHNwYW4+JykuYXR0cignY2xhc3MnLCBgaG90Y2F0LWNoZWNrLWljb24gJHtpY29uQ2xhc3N9YCkudGV4dCgnICcpO1xuXHR9O1xuXHRjb25zdCBjcmVhdGVOb3RpZnlBcmVhID0gKHRleHROb2RlOiBKUXVlcnk8SlF1ZXJ5Lk5vZGU+LCBpY29uOiBzdHJpbmcsIHN0YXRlOiBzdHJpbmcpOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0+IHtcblx0XHRyZXR1cm4gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdob3RjYXQtY2hlY2stbm90aWNlJylcblx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0XHQuYXR0cignY2xhc3MnLCBgaG90Y2F0LWNoZWNrLW5vdGljZS1jb250ZW50ICR7c3RhdGV9YClcblx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdCdtYXJnaW4tdG9wJzogJzIwcHgnLFxuXHRcdFx0XHRcdFx0cGFkZGluZzogJzAuN2VtJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPHA+JykuYXBwZW5kKGNyZWF0ZWpJY29uKGljb24pLmNzcygnbWFyZ2luUmlnaHQnLCAnMC4zZW0nKSwgdGV4dE5vZGUpKVxuXHRcdFx0KTtcblx0fTtcblx0Ly8gUmVtb3ZlIFwiY2hlY2sgY2F0ZWdvcmllc1wiIHdoZW4gdXNpbmcgSG90Q2F0XG5cdC8vIE9ubHkgZXhlY3V0ZWQgb24gZmlyc3Qgc3VibWl0XG5cdCRib2R5Lm9uZSgnc3VibWl0LmNoZWNrQ2F0TGlzdGVuZXInLCAnI2hvdGNhdENvbW1pdEZvcm0nLCBmdW5jdGlvbiAoZSkge1xuXHRcdGlmIChzdG9yYWdlSXRlbSA9PT0gJ2Rpc2FibGVkJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cdFx0Y29uc3QgbmV3VmFsID0gKHNlbGYud3BUZXh0Ym94MSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZT8ucmVwbGFjZShjaGVja0NhdGVnb3JpZXNSZWdFeHAsICcnKTtcblx0XHRsZXQgJGRpYWxvZ0NoZWNrU3RvcmFnZTogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0XHRsZXQgJHBlcm1hU2F2ZUhpbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdFx0bGV0ICR0ZXh0SGludE5vZGU7XG5cdFx0bGV0ICRkaWFsb2c7XG5cdFx0bGV0ICRvdmVybGF5OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRcdGNvbnN0IGRvUmVtb3ZlID0gKCkgPT4ge1xuXHRcdFx0KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cblx0XHRcdFx0YFJlbW92aW5nIFtbVGVtcGxhdGU6Q2hlY2sgY2F0ZWdvcmllc3x7e0NoZWNrIGNhdGVnb3JpZXN9fV1dICR7KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlfWA7XG5cblx0XHRcdChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgPSBuZXdWYWw7XG5cdFx0fTtcblx0XHRjb25zdCB3cml0ZVN0b3JhZ2UgPSAodmFsOiBzdHJpbmcpID0+IHtcblx0XHRcdG13LnN0b3JhZ2Uuc2V0KHN0b3JhZ2VJdGVtTmFtZSwgdmFsLCA2MCAqIDYwICogMjQgKiA3KTsgLy8gNyBkYXlzXG5cdFx0fTtcblx0XHRjb25zdCBjbG9zZURpYWxvZyA9ICgpID0+IHtcblx0XHRcdCQoZG9jdW1lbnQpLm9mZigna2V5ZG93bi5ob3RjYXRDaGVjaycpO1xuXHRcdFx0JG92ZXJsYXk/LnJlbW92ZSgpO1xuXHRcdFx0JGJvZHkuZmluZCgnI2hvdGNhdENvbW1pdEZvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZpbmlzaERpYWxvZyA9IChzdG9yYWdlVmFsdWU/OiBzdHJpbmcpID0+IHtcblx0XHRcdGlmIChzdG9yYWdlVmFsdWUgJiYgKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKHN0b3JhZ2VWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRjbG9zZURpYWxvZygpO1xuXHRcdH07XG5cdFx0Y29uc3QgX2FkZFRvSlMgPSBmdW5jdGlvbiAodGhpczogSFRNTEVsZW1lbnQsIF9lOiBKUXVlcnkuRXZlbnQpIHtcblx0XHRcdF9lLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAoJHBlcm1hU2F2ZUhpbnQuaGFzQ2xhc3MoJ2hvdGNhdC1jaGVjay1kaXNhYmxlZCcpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRlbDogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICQodGhpcyk7XG5cdFx0XHQkZWwub2ZmKCdjbGljaycpLnRleHQoJ1BsZWFzZSB3YWl0LicpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQuYWRkQ2xhc3MoJ2hvdGNhdC1jaGVjay1kaXNhYmxlZCcpO1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0aXRsZTogYFVzZXI6JHttdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyl9L2NvbW1vbi5qc2AsXG5cdFx0XHRcdHN1bW1hcnk6IGAke3NlbGZOYW1lfVNhdmluZyBIb3RDYXQgY29uZmlndXJhdGlvbi5gLFxuXHRcdFx0XHRhcHBlbmR0ZXh0OiAkZWwuZGF0YSgnYWRkVGV4dCcpIGFzIHN0cmluZyxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBlZGl0RG9uZSA9IChlZGl0U3RhdD86IHtlcnJvcj86IHtjb2RlPzogc3RyaW5nOyBpbmZvPzogc3RyaW5nfX0pID0+IHtcblx0XHRcdFx0aWYgKCFlZGl0U3RhdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWRpdFN0YXQuZXJyb3IpIHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdGBVbmFibGUgdG8gc2F2ZSB0byB5b3VyIGNvbW1vbi5qcyB1c2luZyB0aGUgQVBJXFxuJHtlZGl0U3RhdC5lcnJvci5jb2RlfVxcbiR7ZWRpdFN0YXQuZXJyb3IuaW5mb31gLFxuXHRcdFx0XHRcdFx0e3RhZzogJ2hvdENhdENoZWNrJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0LUVycm9yIScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdEb25lLicpO1xuXHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHZvaWQgYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbXMpLnRoZW4oZWRpdERvbmUpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogT24gV2lraW1lZGlhIENvbW1vbnMgdGhlcmUgd2VyZSBwZW9wbGUgd2hvIHNhaWQ6XG5cdFx0ICogXCJDYXRlZ29yaXppbmcgd2l0aCBIb3RDYXQgZG9lcyBsZWdpdCBhdXRvbWF0ZWQgcmVtb3ZhbCBvZiB0aGUgY2hlY2stY2F0LW1lc3NhZ2VcIlxuXHRcdCAqIFNvIHdlIGludmVudGVkIGEgZGlhbG9nIHRoYXQgc2hvdWxkIGJlIHJlYWRhYmxlIGJ5IHVzZXJzIGV2ZW4gd2l0aCB2ZXJ5IGZldyBFbmdsaXNoIHNraWxscy5cblx0XHQgKi9cblx0XHRjb25zdCBwcm9tcHQgPSAoKSA9PiB7XG5cdFx0XHQkZGlhbG9nQ2hlY2tTdG9yYWdlID0gJCgnPGlucHV0PicpXG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdGlkOiAnaG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0U3RvcmFnZScsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGlmICgodGhpcyBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5zaG93KCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmhpZGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0JHRleHRIaW50Tm9kZSA9ICQoJzx1bD4nKTtcblx0XHRcdCQoJzxsaT4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjJylcblx0XHRcdFx0XHRcdC50ZXh0KCdEaXNhYmxlIHRoaXMgZmVhdHVyZS4nKVxuXHRcdFx0XHRcdFx0LmRhdGEoJ2FkZFRleHQnLCAnXFxud2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCA9IHRydWU7Jylcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBfYWRkVG9KUylcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kVG8oJHRleHRIaW50Tm9kZSk7XG5cdFx0XHQkKCc8bGk+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHQudGV4dCgnUmVtb3ZlIHt7Y2hlY2sgY2F0ZWdvcmllc319IHdoZW4gZWRpdGluZyB1c2luZyBIb3RDYXQgd2l0aG91dCBwcm9tcHRpbmcuJylcblx0XHRcdFx0XHRcdC5kYXRhKCdhZGRUZXh0JywgJ1xcbndpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQgPSB0cnVlOycpXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX2FkZFRvSlMpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZFRvKCR0ZXh0SGludE5vZGUpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQgPSBjcmVhdGVOb3RpZnlBcmVhKFxuXHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCdTYXZlIHRoZXNlIHNldHRpbmcgaW4geW91ciBjb21tb24uanM6ICcpLmFwcGVuZCgkdGV4dEhpbnROb2RlKSxcblx0XHRcdFx0J2hvdGNhdC1jaGVjay1pY29uLWluZm8nLFxuXHRcdFx0XHQnaG90Y2F0LWNoZWNrLWhpZ2hsaWdodCdcblx0XHRcdCk7XG5cdFx0XHQkZGlhbG9nID0gJCgnPGRpdj4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdFx0J2ZvbnQtc2l6ZSc6ICcyZW0nLFxuXHRcdFx0XHRcdFx0XHQnbGluZS1oZWlnaHQnOiAnMS44ZW0nLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpLnRleHQoJyB7e2NoZWNrIGNhdGVnb3JpZXN9fSAnKS5jc3Moe1xuXHRcdFx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJyNGOENDQjAnLFxuXHRcdFx0XHRcdFx0XHRcdCd0ZXh0LWRlY29yYXRpb24nOiAnbGluZS10aHJvdWdoICFpbXBvcnRhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+JykudGV4dCgnID8nKVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0Jzxicj4nLFxuXHRcdFx0XHRcdCRkaWFsb2dDaGVja1N0b3JhZ2UsXG5cdFx0XHRcdFx0JCgnPGxhYmVsPicpLmF0dHIoJ2ZvcicsICdob3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRTdG9yYWdlJykudGV4dChcIkRvbid0IGFzayBhZ2FpblwiKSxcblx0XHRcdFx0XHQnPGJyPidcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kKG13LnVzZXIuaXNBbm9uKCkgPyAnJyA6ICRwZXJtYVNhdmVIaW50LmhpZGUoKSk7XG5cdFx0XHQkb3ZlcmxheSA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2hvdGNhdC1jaGVjay1vdmVybGF5JykuYXR0cigncm9sZScsICdwcmVzZW50YXRpb24nKTtcblx0XHRcdCRkaWFsb2cgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnaG90Y2F0LWNoZWNrLWRpYWxvZycpXG5cdFx0XHRcdC5hdHRyKHtyb2xlOiAnZGlhbG9nJywgJ2FyaWEtbW9kYWwnOiAndHJ1ZScsICdhcmlhLWxhYmVsbGVkYnknOiAnaG90Y2F0LWNoZWNrLWRpYWxvZy10aXRsZSd9KVxuXHRcdFx0XHQucHJlcGVuZCgkKCc8aDI+JykuYXR0cignaWQnLCAnaG90Y2F0LWNoZWNrLWRpYWxvZy10aXRsZScpLnRleHQoJ3t7Y2hlY2sgY2F0ZWdvcmllc319ICjiiJIpPycpKVxuXHRcdFx0XHQuYXBwZW5kKCRkaWFsb2cpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdob3RjYXQtY2hlY2stZGlhbG9nLWJ1dHRvbnMnKVxuXHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPGJ1dHRvbj4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoJ1llcywgUmVtb3ZlJylcblx0XHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdGZpbmlzaERpYWxvZygnYXV0bycpO1xuXHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHQkKCc8YnV0dG9uPicpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcblx0XHRcdFx0XHRcdFx0XHQudGV4dCgnTm8sIGtlZXAgaXQnKVxuXHRcdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRmaW5pc2hEaWFsb2coJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdCRvdmVybGF5LmFwcGVuZCgkZGlhbG9nKS5hcHBlbmRUbygnYm9keScpO1xuXHRcdFx0JGRpYWxvZy5maW5kKCdidXR0b24nKS5maXJzdCgpLnRyaWdnZXIoJ2ZvY3VzJyk7XG5cdFx0XHQkb3ZlcmxheS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0aWYgKGV2ZW50LnRhcmdldCA9PT0gJG92ZXJsYXlbMF0pIHtcblx0XHRcdFx0XHRjbG9zZURpYWxvZygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdrZXlkb3duLmhvdGNhdENoZWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdrZXlkb3duLmhvdGNhdENoZWNrJyk7XG5cdFx0XHRcdFx0Y2xvc2VEaWFsb2coKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGlmIChuZXdWYWwgIT09IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUpIHtcblx0XHRcdGlmICh3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IHx8IHN0b3JhZ2VJdGVtID09PSAnYXV0bycpIHtcblx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRwcm9tcHQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xuXHQvLyBBZGQgT0stTGluayB0byB0aGUgY2F0cyBwYW5lbFxuXHRjb25zdCAkb2tMaW5rID0gJCgnPGE+Jylcblx0XHQuYXR0cih7XG5cdFx0XHRocmVmOiAnIycsXG5cdFx0XHR0aXRsZTogJ0NhdGVnb3JpZXMgYXJlIE9LISBJbW1lZGlhdGVseSByZW1vdmUgdGhlIHRlbXBsYXRlLicsXG5cdFx0fSlcblx0XHQuYXBwZW5kKCc8cz4nKVxuXHRcdC50ZXh0KCd7e0NoZWNrIGNhdGVnb3JpZXN9fScpO1xuXHQkb2tMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0ICRlbCA9ICQodGhpcyk7XG5cdFx0JGVsLm9mZignY2xpY2snKTtcblx0XHRjb25zdCBkb0VkaXQgPSAocmVzdWx0OiBzdHJpbmcpID0+IHtcblx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRlbC50ZXh0KCdEb2luZy4nKTtcblx0XHRcdGNvbnN0IHRleHQgPSByZXN1bHQucmVwbGFjZShjaGVja0NhdGVnb3JpZXNSZWdFeHAsICcnKTtcblx0XHRcdGlmICh0ZXh0ID09PSByZXN1bHQpIHtcblx0XHRcdFx0JGVsLnRleHQoJ1RlbXBsYXRlIG5vdCBmb3VuZCEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0dGV4dCxcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0aXRsZTogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdFx0XHRzdW1tYXJ5OiBgJHtzZWxmTmFtZX1DYXRlZ29yaWVzIGFyZSBjaGVja2VkIGFuZCBPSy4gWW91IGNhbiBoZWxwIFtbQ2F0ZWdvcnk6TWVkaWEgbmVlZGluZyBjYXRlZ29yeSByZXZpZXd8cmV2aWV3aW5nXV0hYCxcblx0XHRcdFx0bm9jcmVhdGU6IHRydWUsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZWRpdERvbmUgPSAoZWRpdFN0YXQ/OiB7ZXJyb3I/OiB7Y29kZT86IHN0cmluZzsgaW5mbz86IHN0cmluZ319KSA9PiB7XG5cdFx0XHRcdGlmICghZWRpdFN0YXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVkaXRTdGF0LmVycm9yKSB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRgVW5hYmxlIHRvIHJlbW92ZSBcIkNoZWNrIGNhdGVnb3JpZXNcIiB3aXRoIHRoZSBBUElcXG4ke2VkaXRTdGF0LmVycm9yLmNvZGV9XFxuJHtlZGl0U3RhdC5lcnJvci5pbmZvfWAsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRhZzogJ2hvdENhdENoZWNrJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0LUVycm9yIScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0IERvbmUuJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JGJvZHkuZmluZCgnLmNoZWNrY2F0ZWdvcmllcycpLmhpZGUoKTtcblx0XHRcdH07XG5cdFx0XHQkZWwudGV4dCgnRG9pbmcuLicpO1xuXHRcdFx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtcykudGhlbihlZGl0RG9uZSk7XG5cdFx0fTtcblx0XHQkZWwudGV4dCgnRG9pbmcnKTtcblx0XHR2b2lkICQuYWpheCh7XG5cdFx0XHR1cmw6IG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0JyksXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdHRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvIC9nLCAnXycpLFxuXHRcdFx0fSxcblx0XHRcdGRhdGFUeXBlOiAndGV4dCcsXG5cdFx0XHRlcnJvcjogKCkgPT4ge1xuXHRcdFx0XHQkZWwudGV4dCgnRXJyb3IhJyk7XG5cdFx0XHR9LFxuXHRcdFx0c3VjY2VzczogZG9FZGl0LFxuXHRcdFx0dHlwZTogJ0dFVCcsXG5cdFx0XHRjYWNoZTogZmFsc2UsXG5cdFx0fSk7XG5cdH0pO1xuXHQvLyBMb2FkXG5cdCRib2R5LmZpbmQoJyNjYXRsaW5rcycpLmZpbmQoJ3VsOmZpcnN0JykuYXBwZW5kKCQoJzxsaT4nKS5hcHBlbmQoJG9rTGluaykpO1xufSk7XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbi8vIEluaXRpYWxpemUgTWVkaWFXaWtpIEFQSVxuY29uc3QgbXdBcGk6ICh1c2VyQWdlbnQ/OiBzdHJpbmcpID0+IG13LkFwaSA9ICh1c2VyQWdlbnQpID0+IHtcblx0cmV0dXJuIGluaXRNd0FwaSh1c2VyQWdlbnQpO1xufTtcblxuZXhwb3J0IHttd0FwaX07XG4iLCAiKGZ1bmN0aW9uIGhvdENhdE1lc3NhZ2VzKCkge1xuXHRjb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaRbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJzogJ+W3suenu+mZpHt7W1tDYXRlZ29yeTokMV1dfX0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfYWRkZWQnOiAn5bey5re75YqgW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdC8vICQyIGlzIHRoZSBuZXcga2V5XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnOiAn5bey6Kit572uW1tDYXRlZ29yeTokMV1d55qE5paw5o6S5bqP5a2X77yaXCIkMlwiJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X25vdEZvdW5kJzogJ+WIhumhnuKAnCQx4oCd5rKS5pyJ5om+5YiwJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2V4aXN0cyc6ICfliIbpoZ7igJwkMeKAneW3sue2k+WtmOWcqO+8jOaykuaciea3u+WKoOOAgicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZXNvbHZlZCc6ICfvvIjph43lrprlkJFbW0NhdGVnb3J5OiQxXV3lt7LomZXnkIbvvIknLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11bmNhdF9yZW1vdmVkJzogJ+W3suenu+mZpHt7dW5jYXRlZ29yaXplZH19Jyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBwcmVmaXggdG8gdGhlIGVkaXQgc3VtbWFyeS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtcHJlZml4JzogJ+S9v+eUqFtbSDpIT1RDQVR8SG90Q2F0XV0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIGFwcGVuZCB0byB0aGUgZWRpdCBzdW1tYXJ5LiBOYW1lZCAndXNpbmcnIGZvciBoaXN0b3JpY2FsIHJlYXNvbnMuIElmIHlvdSBwcmVmZXJcblx0XHRcdC8vIHRvIGhhdmUgYSBtYXJrZXIgYXQgdGhlIGZyb250LCB1c2UgcHJlZml4IGFuZCBzZXQgdGhpcyB0byB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11c2luZyc6ICcnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9jaGFuZ2UnOiAnJDHlgIvliIbpoZ4nLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnk7IGkuZS4sIGEgY2F0ZWdvcnkgdGhhdCBzaG91bGQgbm90IGNvbnRhaW5cblx0XHRcdC8vIGFueSBpdGVtcywgYnV0IHRoYXQgY29udGFpbnMgbGlua3MgdG8gb3RoZXIgY2F0ZWdvcmllcyB3aGVyZSBzdHVmZiBzaG91bGQgYmUgY2F0ZWdvcml6ZWQuIElmIHlvdSBkb24ndCBoYXZlXG5cdFx0XHQvLyB0aGF0IGNvbmNlcHQgb24geW91ciB3aWtpLCBzZXQgaXQgdG8gYmxhbmsgc3RyaW5nLiBVc2UgYmxhbmtzLCBub3QgdW5kZXJzY29yZXMuXG5cdFx0XHQnaG90Y2F0LWRpc2FtYmlnX2NhdGVnb3J5JzogJycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSAoc29mdCkgcmVkaXJlY3QgdG8gc29tZSBvdGhlciBjYXRlZ29yeSBkZWZpbmVkIGJ5IGEgbGlua1xuXHRcdFx0Ly8gdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnkuIElmIHlvdXIgd2lraSBkb2Vzbid0IGhhdmUgc29mdCBjYXRlZ29yeSByZWRpcmVjdHMsIHNldCB0aGlzIHRvIG51bGwuXG5cdFx0XHQvLyBJZiBhIHNvZnQtcmVkaXJlY3RlZCBjYXRlZ29yeSBjb250YWlucyBtb3JlIHRoYW4gb25lIGxpbmsgdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnksIGl0J3MgY29uc2lkZXJlZFxuXHRcdFx0Ly8gYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeSBpbnN0ZWFkLlxuXHRcdFx0J2hvdGNhdC1yZWRpcl9jYXRlZ29yeSc6ICflt7Lph43lrprlkJHnmoTliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zZXBhcmF0b3InOiAnOyAnLFxuXHRcdFx0Ly8gJDEgaXMgcmVwbGFjZWQgYnkgYSBudW1iZXIuIElmIHlvdXIgbGFuZ3VhZ2UgaGFzIHNldmVyYWwgcGx1cmFsIGZvcm1zIChjLmYuIFtbOmVud2lraTpEdWFsIChncmFtbWF0aWNhbCBmb3JtKV1dKSxcblx0XHRcdC8vIHlvdSBjYW4gc2V0IHRoaXMgdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyBzdWl0YWJsZSBmb3IgcGFzc2luZyB0byBtdy5sYW5ndWFnZS5jb25maWdQbHVyYWwoKS5cblx0XHRcdC8vIElmIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBleGlzdCwgSG90Q2F0IHdpbGwgc2ltcGx5IGZhbGwgYmFjayB0byB1c2luZyB0aGUgbGFzdFxuXHRcdFx0Ly8gZW50cnkgaW4gdGhlIGFycmF5LlxuXHRcdFx0Ly8gRGVmYXVsdHMgdG8gJ1tbJyArIGNhdGVnb3J5X2Nhbm9uaWNhbCArICc6JDFdXScuIENhbiBiZSBvdmVycmlkZGVuIGlmIGluIHRoZSBzaG9ydCBlZGl0IHN1bW1hcmllc1xuXHRcdFx0Ly8gbm90IHRoZSBzdGFuZGFyZCBjYXRlZ29yeSBuYW1lIHNob3VsZCBiZSB1c2VkIGJ1dCwgc2F5LCBhIHNob3J0ZXIgbmFtZXNwYWNlIGFsaWFzLiAkMSBpcyByZXBsYWNlZFxuXHRcdFx0Ly8gYnkgYSBjYXRlZ29yeSBuYW1lLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnOiAnJDEnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY29tbWl0JzogJ+WEsuWtmCcsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1vayc6ICfnorrlrponLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2FuY2VsJzogJ+WPlua2iCcsXG5cdFx0XHQvLyBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2Vycm9yJzpcblx0XHRcdFx0J+eEoeazleW+nuS8uuacjeWZqOWPluW+l+mggemdouaWh+Wtl+OAguWboOatpO+8jOaCqOeahOWIhumhnuiuiuabtOeEoeazleWEsuWtmOOAguaIkeWAkeeCuuatpOS4jeS+v+ihqOekuuaKseatieOAgicsXG5cdFx0XHQvLyBQbHVyYWwgb2YgY2F0ZWdvcnlfY2Fub25pY2FsLlxuXHRcdFx0J2hvdGNhdC1jYXRlZ29yaWVzJzogJ+WIhumhnicsXG5cdFx0XHQvLyBOYW1lcyBmb3IgdGhlIHNlYXJjaCBlbmdpbmVzXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zZWFyY2hpbmRleCc6ICfmkJzlsIvntKLlvJUnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFnZWxpc3QnOiAn6aCB6Z2i5YiX6KGoJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLWNvbWJpbmVkJzogJ+WQiOS9teaQnOWwiycsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zdWJjYXQnOiAn5a2Q5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhcmVudGNhdCc6ICfkuIrlsaTliIbpoZ4nLFxuXHRcdFx0Ly8gVGhlIHRvb2x0aXBzIGZvciB0aGUgYWJvdmUgbGlua3Ncblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtY2hhbmdlJzogJ+S/ruaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlbW92ZSc6ICfnp7vpmaQnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1hZGQnOiAn5aKe5Yqg5LiA5YCL5paw5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVzdG9yZSc6ICflvqnljp/orormm7QnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11bmRvJzogJ+W+qeWOn+iuiuabtCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWRvd24nOiAn5omT6ZaL5Lul5L+u5pS55Lim6aGv56S65a2Q5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdXAnOiAn5omT6ZaL5Lul5L+u5pS55Lim6aGv56S65LiK5bGk5YiG6aGeJyxcblx0XHRcdC8vIFRvb2x0aXAgZm9yIHRoZSBcImVudGVyIG11bHRpLW1vZGVcIiBsaW5rXG5cdFx0XHQnaG90Y2F0LW11bHRpX3Rvb2x0aXAnOiAn5L+u5pS55aSa5YCL5YiG6aGeJyxcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaRbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJzogJ+W3suenu+mZpHt7W1tDYXRlZ29yeTokMV1dfX0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfYWRkZWQnOiAn5bey5re75YqgW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdC8vICQyIGlzIHRoZSBuZXcga2V5XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnOiAn5bey6K6+572uW1tDYXRlZ29yeTokMV1d55qE5paw5o6S5bqP5a2X77yaXCIkMlwiJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X25vdEZvdW5kJzogJ+WIhuexu+KAnCQx4oCd5rKh5pyJ5om+5YiwJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2V4aXN0cyc6ICfliIbnsbvigJwkMeKAneW3sue7j+WtmOWcqO+8jOayoeaciea3u+WKoOOAgicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZXNvbHZlZCc6ICfvvIjph43lrprlkJFbW0NhdGVnb3J5OiQxXV3lt7LlpITnkIbvvIknLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11bmNhdF9yZW1vdmVkJzogJ+W3suenu+mZpHt7dW5jYXRlZ29yaXplZH19Jyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBwcmVmaXggdG8gdGhlIGVkaXQgc3VtbWFyeS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtcHJlZml4JzogJ+S9v+eUqFtbSDpIT1RDQVR8SG90Q2F0XV0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIGFwcGVuZCB0byB0aGUgZWRpdCBzdW1tYXJ5LiBOYW1lZCAndXNpbmcnIGZvciBoaXN0b3JpY2FsIHJlYXNvbnMuIElmIHlvdSBwcmVmZXJcblx0XHRcdC8vIHRvIGhhdmUgYSBtYXJrZXIgYXQgdGhlIGZyb250LCB1c2UgcHJlZml4IGFuZCBzZXQgdGhpcyB0byB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11c2luZyc6ICcnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9jaGFuZ2UnOiAnJDHkuKrliIbnsbsnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnk7IGkuZS4sIGEgY2F0ZWdvcnkgdGhhdCBzaG91bGQgbm90IGNvbnRhaW5cblx0XHRcdC8vIGFueSBpdGVtcywgYnV0IHRoYXQgY29udGFpbnMgbGlua3MgdG8gb3RoZXIgY2F0ZWdvcmllcyB3aGVyZSBzdHVmZiBzaG91bGQgYmUgY2F0ZWdvcml6ZWQuIElmIHlvdSBkb24ndCBoYXZlXG5cdFx0XHQvLyB0aGF0IGNvbmNlcHQgb24geW91ciB3aWtpLCBzZXQgaXQgdG8gYmxhbmsgc3RyaW5nLiBVc2UgYmxhbmtzLCBub3QgdW5kZXJzY29yZXMuXG5cdFx0XHQnaG90Y2F0LWRpc2FtYmlnX2NhdGVnb3J5JzogJycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSAoc29mdCkgcmVkaXJlY3QgdG8gc29tZSBvdGhlciBjYXRlZ29yeSBkZWZpbmVkIGJ5IGEgbGlua1xuXHRcdFx0Ly8gdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnkuIElmIHlvdXIgd2lraSBkb2Vzbid0IGhhdmUgc29mdCBjYXRlZ29yeSByZWRpcmVjdHMsIHNldCB0aGlzIHRvIG51bGwuXG5cdFx0XHQvLyBJZiBhIHNvZnQtcmVkaXJlY3RlZCBjYXRlZ29yeSBjb250YWlucyBtb3JlIHRoYW4gb25lIGxpbmsgdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnksIGl0J3MgY29uc2lkZXJlZFxuXHRcdFx0Ly8gYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeSBpbnN0ZWFkLlx0XHRcdCdob3RjYXQtcmVkaXJfY2F0ZWdvcnknOiAn5bey6YeN5a6a5ZCR55qE5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2VwYXJhdG9yJzogJzsgJyxcblx0XHRcdC8vICQxIGlzIHJlcGxhY2VkIGJ5IGEgbnVtYmVyLiBJZiB5b3VyIGxhbmd1YWdlIGhhcyBzZXZlcmFsIHBsdXJhbCBmb3JtcyAoYy5mLiBbWzplbndpa2k6RHVhbCAoZ3JhbW1hdGljYWwgZm9ybSldXSksXG5cdFx0XHQvLyB5b3UgY2FuIHNldCB0aGlzIHRvIGFuIGFycmF5IG9mIHN0cmluZ3Mgc3VpdGFibGUgZm9yIHBhc3NpbmcgdG8gbXcubGFuZ3VhZ2UuY29uZmlnUGx1cmFsKCkuXG5cdFx0XHQvLyBJZiB0aGF0IGZ1bmN0aW9uIGRvZXNuJ3QgZXhpc3QsIEhvdENhdCB3aWxsIHNpbXBseSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGxhc3Rcblx0XHRcdC8vIGVudHJ5IGluIHRoZSBhcnJheS5cblx0XHRcdC8vIERlZmF1bHRzIHRvICdbWycgKyBjYXRlZ29yeV9jYW5vbmljYWwgKyAnOiQxXV0nLiBDYW4gYmUgb3ZlcnJpZGRlbiBpZiBpbiB0aGUgc2hvcnQgZWRpdCBzdW1tYXJpZXNcblx0XHRcdC8vIG5vdCB0aGUgc3RhbmRhcmQgY2F0ZWdvcnkgbmFtZSBzaG91bGQgYmUgdXNlZCBidXQsIHNheSwgYSBzaG9ydGVyIG5hbWVzcGFjZSBhbGlhcy4gJDEgaXMgcmVwbGFjZWRcblx0XHRcdC8vIGJ5IGEgY2F0ZWdvcnkgbmFtZS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJzogJyQxJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNvbW1pdCc6ICfkv53lrZgnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtb2snOiAn56Gu5a6aJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhbmNlbCc6ICflj5bmtognLFxuXHRcdFx0Ly8gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9lcnJvcic6XG5cdFx0XHRcdCfml6Dms5Xku47mnI3liqHlmajlj5blvpfpobXpnaLmloflrZfjgILlm6DmraTvvIzmgqjnmoTliIbnsbvmm7TmlLnml6Dms5Xkv53lrZjjgILmiJHku6zkuLrmraTkuI3kvr/ooajnpLrmirHmrYnjgIInLFxuXHRcdFx0Ly8gUGx1cmFsIG9mIGNhdGVnb3J5X2Nhbm9uaWNhbC5cblx0XHRcdCdob3RjYXQtY2F0ZWdvcmllcyc6ICfliIbnsbsnLFxuXHRcdFx0Ly8gTmFtZXMgZm9yIHRoZSBzZWFyY2ggZW5naW5lc1xuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc2VhcmNoaW5kZXgnOiAn5pCc57Si57Si5byVJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhZ2VsaXN0JzogJ+mhtemdouWIl+ihqCcsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1jb21iaW5lZCc6ICflkIjlubbmkJzntKInLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc3ViY2F0JzogJ+WtkOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYXJlbnRjYXQnOiAn5LiK5bGC5YiG57G7Jyxcblx0XHRcdC8vIFRoZSB0b29sdGlwcyBmb3IgdGhlIGFib3ZlIGxpbmtzXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWNoYW5nZSc6ICfkv67mlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZW1vdmUnOiAn56e76ZmkJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtYWRkJzogJ+WinuWKoOS4gOS4quaWsOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlc3RvcmUnOiAn5pKk6ZSA5pu05pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdW5kbyc6ICfmkqTplIDmm7TmlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1kb3duJzogJ+aJk+W8gOS7peS/ruaUueW5tuaYvuekuuWtkOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVwJzogJ+aJk+W8gOS7peS/ruaUueW5tuaYvuekuuS4iuWxguWIhuexuycsXG5cdFx0XHQvLyBUb29sdGlwIGZvciB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGlua1xuXHRcdFx0J2hvdGNhdC1tdWx0aV90b29sdGlwJzogJ+S/ruaUueWkmuS4quWIhuexuycsXG5cdFx0fSk7XG5cdH1cbn0pKCk7XG4iLCAiY29uc3QgZ2V0TWVzc2FnZSA9IChrZXk6IHN0cmluZywgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xuXHRrZXkgPSBgaG90Y2F0LSR7a2V5fWA7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gbXcubWVzc2FnZShrZXksIC4uLmFyZ3MpLnBsYWluKCk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB0eXBlIHtIb3RDYXRDb25maWd9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2dldE1lc3NhZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhvdENhdENoYW5nZVJlc3VsdCB7XG5cdHRleHQ6IHN0cmluZztcblx0c3VtbWFyeTogc3RyaW5nW107XG5cdGVycm9yOiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgdHlwZSBIb3RDYXRDYXRlZ29yeU1hdGNoZXMgPSB7XG5cdG1hdGNoOiBSZWdFeHBFeGVjQXJyYXk7XG59W10gJiB7XG5cdHJlPzogUmVnRXhwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNhdGVnb3J5VGV4dFRvb2xzID0gKFxuXHRIQzogSG90Q2F0Q29uZmlnLFxuXHR3aWtpVGV4dEJsYW5rOiBzdHJpbmcsXG5cdHdpa2lUZXh0QmxhbmtSRTogUmVnRXhwLFxuXHR3aWtpVGV4dEJsYW5rT3JCaWRpOiBzdHJpbmcsXG5cdGVzY2FwZVJFOiAoc3RyOiBzdHJpbmcpID0+IHN0cmluZyxcblx0Z2V0SW50ZXJsYW5ndWFnZVJFOiAoKSA9PiBSZWdFeHAgfCBudWxsXG4pID0+IHtcblx0Y29uc3QgZmluZENhdHNSRSA9IG5ldyBSZWdFeHAoXG5cdFx0YFxcXFxbXFxcXFske3dpa2lUZXh0QmxhbmtPckJpZGl9KD86JHtIQy5jYXRlZ29yeV9yZWdleHB9KSR7d2lraVRleHRCbGFua09yQmlkaX06W15cXFxcXV0rXFxcXF1cXFxcXWAsXG5cdFx0J2cnXG5cdCk7XG5cdGNvbnN0IHJlcGxhY2VCeUJsYW5rcyA9IChtYXRjaDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gbWF0Y2gucmVwbGFjZSgvKFxcc3xcXFMpL2csICcgJyk7XG5cdH07XG5cdGNvbnN0IGZpbmRfY2F0ZWdvcnkgPSAoXG5cdFx0d2lraXRleHQ6IHN0cmluZyxcblx0XHRjYXRlZ29yeTogc3RyaW5nLFxuXHRcdG9uY2U/OiBib29sZWFuXG5cdCk6IFJlZ0V4cEV4ZWNBcnJheSB8IEhvdENhdENhdGVnb3J5TWF0Y2hlcyB8IG51bGwgPT4ge1xuXHRcdGxldCBjYXRfcmVnZXg6IFJlZ0V4cDtcblx0XHRpZiAoSEMudGVtcGxhdGVfY2F0ZWdvcmllc1tjYXRlZ29yeV0pIHtcblx0XHRcdGNhdF9yZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxce1xcXFx7JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSgke0hDLnRlbXBsYXRlX3JlZ2V4cH0oPz0ke3dpa2lUZXh0QmxhbmtPckJpZGl9OikpPyR7d2lraVRleHRCbGFua09yQmlkaX0oPzoke1xuXHRcdFx0XHRcdEhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbY2F0ZWdvcnldXG5cdFx0XHRcdH0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfShcXFxcfC4qPyk/XFxcXH1cXFxcfWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgY2F0X25hbWUgPSBlc2NhcGVSRShjYXRlZ29yeSk7XG5cdFx0XHRjb25zdCBpbml0aWFsID0gY2F0X25hbWUuc2xpY2UoMCwgMSk7XG5cdFx0XHRjYXRfcmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcWyR7d2lraVRleHRCbGFua09yQmlkaX0oJHtIQy5jYXRlZ29yeV9yZWdleHB9KSR7d2lraVRleHRCbGFua09yQmlkaX06JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSR7XG5cdFx0XHRcdFx0aW5pdGlhbCA9PT0gJ1xcXFwnIHx8ICFIQy5jYXBpdGFsaXplUGFnZU5hbWVzXG5cdFx0XHRcdFx0XHQ/IGluaXRpYWxcblx0XHRcdFx0XHRcdDogYFske2luaXRpYWwudG9VcHBlckNhc2UoKX0ke2luaXRpYWwudG9Mb3dlckNhc2UoKX1dYFxuXHRcdFx0XHR9JHtjYXRfbmFtZS5zbGljZSgxKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayl9JHt3aWtpVGV4dEJsYW5rT3JCaWRpfShcXFxcfC4qPyk/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKG9uY2UpIHtcblx0XHRcdHJldHVybiBjYXRfcmVnZXguZXhlYyh3aWtpdGV4dCk7XG5cdFx0fVxuXHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0Y29uc3QgY29waWVkdGV4dCA9IHdpa2l0ZXh0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCByZXBsYWNlQnlCbGFua3MpLnJlcGxhY2Uobm93aWtpUmVnZXgsIHJlcGxhY2VCeUJsYW5rcyk7XG5cdFx0Y29uc3QgcmVzdWx0OiBIb3RDYXRDYXRlZ29yeU1hdGNoZXMgPSBbXTtcblx0XHRsZXQgY3Vycl9tYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IG51bGw7XG5cdFx0d2hpbGUgKChjdXJyX21hdGNoID0gY2F0X3JlZ2V4LmV4ZWMoY29waWVkdGV4dCkpICE9PSBudWxsKSB7XG5cdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB7XG5cdFx0XHRcdG1hdGNoOiBjdXJyX21hdGNoLFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmVzdWx0LnJlID0gY2F0X3JlZ2V4O1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdGNvbnN0IGNoYW5nZV9jYXRlZ29yeSA9IChcblx0XHR3aWtpdGV4dDogc3RyaW5nLFxuXHRcdHRvUmVtb3ZlOiBzdHJpbmcgfCBudWxsLFxuXHRcdHRvQWRkOiBzdHJpbmcgfCBudWxsLFxuXHRcdGtleTogc3RyaW5nIHwgbnVsbCxcblx0XHRpc19oaWRkZW4/OiBib29sZWFuXG5cdCk6IEhvdENhdENoYW5nZVJlc3VsdCA9PiB7XG5cdFx0Y29uc3QgZmluZF9pbnNlcnRpb25wb2ludCA9IChfd2lraXRleHQ6IHN0cmluZyk6IHtpZHg6IG51bWJlcjsgb25DYXQ6IGJvb2xlYW59ID0+IHtcblx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRjb25zdCBjb3BpZWR0ZXh0ID0gX3dpa2l0ZXh0XG5cdFx0XHRcdC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgcmVwbGFjZUJ5QmxhbmtzKVxuXHRcdFx0XHQucmVwbGFjZShub3dpa2lSZWdleCwgcmVwbGFjZUJ5QmxhbmtzKTtcblx0XHRcdGxldCBpbmRleCA9IC0xO1xuXHRcdFx0ZmluZENhdHNSRS5sYXN0SW5kZXggPSAwO1xuXHRcdFx0d2hpbGUgKGZpbmRDYXRzUkUuZXhlYyhjb3BpZWR0ZXh0KSAhPT0gbnVsbCkge1xuXHRcdFx0XHRpbmRleCA9IGZpbmRDYXRzUkUubGFzdEluZGV4O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGluZGV4IDwgMCkge1xuXHRcdFx0XHRsZXQgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBudWxsO1xuXHRcdFx0XHRjb25zdCBpbnRlcmxhbmd1YWdlUkUgPSBnZXRJbnRlcmxhbmd1YWdlUkUoKTtcblx0XHRcdFx0aWYgKGludGVybGFuZ3VhZ2VSRSkge1xuXHRcdFx0XHRcdG1hdGNoID0gaW50ZXJsYW5ndWFnZVJFLmV4ZWMoY29waWVkdGV4dCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQXBwcm94aW1hdGlvbiB3aXRob3V0IEFQSTogaW50ZXJsYW5ndWFnZSBsaW5rcyBzdGFydCB3aXRoIDIgdG8gMyBsb3dlciBjYXNlIGxldHRlcnMsIG9wdGlvbmFsbHkgZm9sbG93ZWQgYnlcblx0XHRcdFx0XHQvLyBhIHNlcXVlbmNlIG9mIGdyb3VwcyBjb25zaXN0aW5nIG9mIGEgZGFzaCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBsb3dlciBjYXNlIGxldHRlcnMuIEV4Y2VwdGlvbnMgYXJlIFwic2ltcGxlXCJcblx0XHRcdFx0XHQvLyBhbmQgXCJ0b2tpcG9uYVwiLlxuXHRcdFx0XHRcdG1hdGNoID0gLygoXnxcXG5cXHI/KShcXFtcXFtcXHMqKChbYS16XXsyLDN9KC1bYS16XSspKil8c2ltcGxlfHRva2lwb25hKVxccyo6W15cXF1dK11dXFxzKikpKyQvLmV4ZWMoXG5cdFx0XHRcdFx0XHRjb3BpZWR0ZXh0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdFx0XHRpbmRleCA9IG1hdGNoLmluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aWR4OiBpbmRleCxcblx0XHRcdFx0XHRvbkNhdDogZmFsc2UsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpZHg6IGluZGV4LFxuXHRcdFx0XHRvbkNhdDogaW5kZXggPj0gMCxcblx0XHRcdH07XG5cdFx0fTtcblx0XHRjb25zdCBzdW1tYXJ5OiBzdHJpbmdbXSA9IFtdO1xuXHRcdGNvbnN0IG5hbWVTcGFjZSA9IEhDLmNhdGVnb3J5X2Nhbm9uaWNhbDtcblx0XHRjb25zdCBrZXlDaGFuZ2UgPSB0b1JlbW92ZSAmJiB0b0FkZCAmJiB0b1JlbW92ZSA9PT0gdG9BZGQgJiYgdG9BZGQubGVuZ3RoID4gMDtcblx0XHRsZXQgbWF0Y2hlczogUmVnRXhwRXhlY0FycmF5IHwgSG90Q2F0Q2F0ZWdvcnlNYXRjaGVzIHwgbnVsbDtcblx0XHRsZXQgY2F0X3BvaW50ID0gLTE7XG5cdFx0a2V5ICYmPSBgfCR7a2V5fWA7XG5cdFx0aWYgKHRvUmVtb3ZlICYmIHRvUmVtb3ZlLmxlbmd0aCA+IDApIHtcblx0XHRcdG1hdGNoZXMgPSBmaW5kX2NhdGVnb3J5KHdpa2l0ZXh0LCB0b1JlbW92ZSk7XG5cdFx0XHRpZiAoIW1hdGNoZXMgfHwgbWF0Y2hlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGVycm9yOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfbm90Rm91bmQnLCB0b1JlbW92ZSksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBtYXRjaGVzQXJyYXkgPSBtYXRjaGVzIGFzIEhvdENhdENhdGVnb3J5TWF0Y2hlcztcblx0XHRcdGNvbnN0IGZpcnN0TWF0Y2ggPSBtYXRjaGVzQXJyYXlbMF0hLm1hdGNoO1xuXHRcdFx0bGV0IGJlZm9yZSA9IHdpa2l0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIGZpcnN0TWF0Y2guaW5kZXgpKTtcblx0XHRcdGxldCBhZnRlciA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGZpcnN0TWF0Y2guaW5kZXggKyBmaXJzdE1hdGNoWzBdLmxlbmd0aCkpO1xuXHRcdFx0aWYgKG1hdGNoZXNBcnJheS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdG1hdGNoZXNBcnJheS5yZSEubGFzdEluZGV4ID0gMDtcblx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5yZXBsYWNlKG1hdGNoZXNBcnJheS5yZSEsICcnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0b0FkZCAmJiBrZXkgPT09IG51bGwpIHtcblx0XHRcdFx0a2V5ID0gZmlyc3RNYXRjaFsyXSA/PyBudWxsO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGkgPSBiZWZvcmUubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID49IDAgJiYgYmVmb3JlLmNoYXJBdChpKSAhPT0gJ1xcbicgJiYgYmVmb3JlLnNsaWNlKGksIGkgKyAxKS5zZWFyY2goL1xccy8pID49IDApIHtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGogPSAwO1xuXHRcdFx0d2hpbGUgKGogPCBhZnRlci5sZW5ndGggJiYgYWZ0ZXIuY2hhckF0KGopICE9PSAnXFxuJyAmJiBhZnRlci5zbGljZShqLCBqICsgMSkuc2VhcmNoKC9cXHMvKSA+PSAwKSB7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0aSA+PSAwICYmXG5cdFx0XHRcdGJlZm9yZS5jaGFyQXQoaSkgPT09ICdcXG4nICYmXG5cdFx0XHRcdChhZnRlci5sZW5ndGggPT09IDAgfHwgKGogPCBhZnRlci5sZW5ndGggJiYgYWZ0ZXIuY2hhckF0KGopID09PSAnXFxuJykpXG5cdFx0XHQpIHtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdFx0YmVmb3JlID0gaSA+PSAwID8gYmVmb3JlLnNsaWNlKDAsIE1hdGgubWF4KDAsIGkgKyAxKSkgOiAnJztcblx0XHRcdGFmdGVyID0gaiA8IGFmdGVyLmxlbmd0aCA/IGFmdGVyLnNsaWNlKE1hdGgubWF4KDAsIGopKSA6ICcnO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRiZWZvcmUubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRiZWZvcmUuc2xpY2UoTWF0aC5tYXgoMCwgYmVmb3JlLmxlbmd0aCAtIDEpKS5zZWFyY2goL1xcUy8pID49IDAgJiZcblx0XHRcdFx0YWZ0ZXIubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRhZnRlci5zbGljZSgwLCAxKS5zZWFyY2goL1xcUy8pID49IDBcblx0XHRcdCkge1xuXHRcdFx0XHRiZWZvcmUgKz0gJyAnO1xuXHRcdFx0fVxuXHRcdFx0Y2F0X3BvaW50ID0gYmVmb3JlLmxlbmd0aDtcblx0XHRcdGlmIChjYXRfcG9pbnQgPT09IDAgJiYgYWZ0ZXIubGVuZ3RoID4gMCAmJiBhZnRlci5zbGljZSgwLCAxKSA9PT0gJ1xcbicpIHtcblx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5zbGljZSgxKTtcblx0XHRcdH1cblx0XHRcdHdpa2l0ZXh0ID0gYmVmb3JlICsgYWZ0ZXI7XG5cdFx0XHRpZiAoIWtleUNoYW5nZSkge1xuXHRcdFx0XHRpZiAoSEMudGVtcGxhdGVfY2F0ZWdvcmllc1t0b1JlbW92ZV0pIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXRlbXBsYXRlX3JlbW92ZWQnLCB0b1JlbW92ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfcmVtb3ZlZCcsIHRvUmVtb3ZlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodG9BZGQgJiYgdG9BZGQubGVuZ3RoID4gMCkge1xuXHRcdFx0bWF0Y2hlcyA9IGZpbmRfY2F0ZWdvcnkod2lraXRleHQsIHRvQWRkKTtcblx0XHRcdGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0ZXJyb3I6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9leGlzdHMnLCB0b0FkZCksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRsZXQgb25DYXQgPSBmYWxzZTtcblx0XHRcdGlmIChjYXRfcG9pbnQgPCAwKSB7XG5cdFx0XHRcdGNvbnN0IHBvaW50ID0gZmluZF9pbnNlcnRpb25wb2ludCh3aWtpdGV4dCk7XG5cdFx0XHRcdGNhdF9wb2ludCA9IHBvaW50LmlkeDtcblx0XHRcdFx0KHtvbkNhdH0gPSBwb2ludCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbkNhdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuZXdjYXRzdHJpbmcgPSBgW1ske25hbWVTcGFjZX06JHt0b0FkZH0ke2tleSB8fCAnJ31dXWA7XG5cdFx0XHRpZiAoY2F0X3BvaW50ID49IDApIHtcblx0XHRcdFx0Y29uc3Qgc3VmZml4ID0gd2lraXRleHQuc2xpY2UoTWF0aC5tYXgoMCwgY2F0X3BvaW50KSk7XG5cdFx0XHRcdHdpa2l0ZXh0ID1cblx0XHRcdFx0XHR3aWtpdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBjYXRfcG9pbnQpKSArXG5cdFx0XHRcdFx0KGNhdF9wb2ludCA+IDAgPyAnXFxuJyA6ICcnKSArXG5cdFx0XHRcdFx0bmV3Y2F0c3RyaW5nICtcblx0XHRcdFx0XHQob25DYXQgPyAnJyA6ICdcXG4nKTtcblx0XHRcdFx0d2lraXRleHQgKz0gc3VmZml4Lmxlbmd0aCA+IDAgJiYgc3VmZml4LnNsaWNlKDAsIDEpICE9PSAnXFxuJyA/IGBcXG4ke3N1ZmZpeH1gIDogc3VmZml4O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHdpa2l0ZXh0Lmxlbmd0aCA+IDAgJiYgd2lraXRleHQuc2xpY2UoLTEsIHdpa2l0ZXh0Lmxlbmd0aCAtIDEgKyAxKSAhPT0gJ1xcbicpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCArPSAnXFxuJztcblx0XHRcdFx0fVxuXHRcdFx0XHR3aWtpdGV4dCArPSAod2lraXRleHQubGVuZ3RoID4gMCA/ICdcXG4nIDogJycpICsgbmV3Y2F0c3RyaW5nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGtleUNoYW5nZSkge1xuXHRcdFx0XHRsZXQgayA9IGtleSB8fCAnJztcblx0XHRcdFx0aWYgKGsubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGsgPSBrLnNsaWNlKDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X2tleWNoYW5nZScsIHRvQWRkLCBrKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X2FkZGVkJywgdG9BZGQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKEhDLnVuY2F0X3JlZ2V4cCAmJiAhaXNfaGlkZGVuKSB7XG5cdFx0XHRcdGNvbnN0IHR4dCA9IHdpa2l0ZXh0LnJlcGxhY2UoSEMudW5jYXRfcmVnZXhwLCAnJyk7XG5cdFx0XHRcdGlmICh0eHQubGVuZ3RoICE9PSB3aWtpdGV4dC5sZW5ndGgpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCA9IHR4dDtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVuY2F0X3JlbW92ZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0ZXJyb3I6IG51bGwsXG5cdFx0fTtcblx0fTtcblx0cmV0dXJuIHtmaW5kX2NhdGVnb3J5LCBjaGFuZ2VfY2F0ZWdvcnl9O1xufTtcbiIsICI8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjIuNVwiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPVwiI2FcIiBpZD1cImJcIiB4MT1cIjkyLjYwNFwiIHgyPVwiMjYzLjgzXCIgeTE9XCIzMDQuNTFcIiB5Mj1cIjI2LjI5XCIgZ3JhZGllbnRUcmFuc2Zvcm09XCJyb3RhdGUoLTMxLjYxIDE1LjIxIDYuNDAzKXNjYWxlKC4wNTU0NClcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIi8+PGxpbmVhckdyYWRpZW50IGlkPVwiYVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiI2EwYTNlMVwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiNkZWRjZmFcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD1cInVybCgjYilcIiBkPVwiTTIxLjQ3MSA2LjAzNEE4LjQyNyAxMC41MzQgNTguMzkgMSAxIDMuNTI4IDE3LjA3NyA4LjQyNyAxMC41MzQgNTguMzkgMSAxIDIxLjQ3MSA2LjAzNFwiLz48dXNlIHhsaW5rOmhyZWY9XCIjY1wiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiMzYwXCIgb3BhY2l0eT1cIi4zXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEuMTA5IDEuMTA5KVwiLz48cGF0aCBpZD1cImNcIiBmaWxsPVwiIzAwMFwiIGZpbGwtb3BhY2l0eT1cIjFcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwiYnV0dFwiIHN0cm9rZS1saW5lam9pbj1cIm1pdGVyXCIgc3Ryb2tlLW9wYWNpdHk9XCIxXCIgc3Ryb2tlLXdpZHRoPVwiLjA1NVwiIGQ9XCJNNy43NzEgMTcuMjc2aDIuMTY0Yy45MDUtMi43NjcgNC40MjctOS4zNzQgNy40NDYtMTEuNjg4LjYyNi0uODA0LS45NDYtMS4xMzYtMi4yMTQtLjYwNC0xLjkxLjgwMi03LjkgMTEuMTM1LTcuMzk2IDEyLjI5Mk05LjA3MyA1LjMxSDYuODU2Yy0uMTk2LjMzNSA3LjA0NSA4LjY5NyA5LjM2IDExLjcxNi44MDMuNjI2IDEuMTM1LS45NDYuNjAzLTIuMjE0LS44MDItMS45MS02Ljc5My03LjcxLTcuNzQ2LTkuNTAyXCIvPjwvc3ZnPiIsICI8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjIuNVwiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPVwiI2FcIiBpZD1cImJcIiB4MT1cIjkyLjYwNFwiIHgyPVwiMjYzLjgzXCIgeTE9XCIzMDQuNTFcIiB5Mj1cIjI2LjI5XCIgZ3JhZGllbnRUcmFuc2Zvcm09XCJyb3RhdGUoLTMxLjYxIDE1LjIxIDYuNDAzKXNjYWxlKC4wNTU0NClcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIi8+PGxpbmVhckdyYWRpZW50IGlkPVwiYVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiI2EwYTNlMVwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiNkZWRjZmFcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZmlsbD1cInVybCgjYilcIiBkPVwiTTIxLjQ3MiA2LjAzNEE4LjQyOCAxMC41MzQgNTguMzkxIDEgMSAzLjUyOCAxNy4wNzcgOC40MjggMTAuNTM0IDU4LjM5MSAxIDEgMjEuNDcyIDYuMDM0XCIvPjx1c2UgeGxpbms6aHJlZj1cIiNjXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzNjBcIiBvcGFjaXR5PVwiLjNcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMS4xMDkgMS4xMDkpXCIvPjxwYXRoIGlkPVwiY1wiIGZpbGw9XCIjMDAwXCIgZmlsbC1vcGFjaXR5PVwiMVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJidXR0XCIgc3Ryb2tlLWxpbmVqb2luPVwibWl0ZXJcIiBzdHJva2Utb3BhY2l0eT1cIjFcIiBzdHJva2Utd2lkdGg9XCIuMDU1XCIgZD1cIk01LjY0IDEzLjg0czIuNTE1IDIuODMzIDMuMDE4IDMuOTloMi4xNjRjLjkwNS0yLjc2NyA0LjQyNy05LjM3MyA3LjQ0Ni0xMS42ODguNjI2LS44MDQtLjk0NS0xLjEzNi0yLjIxMy0uNjAzLTEuOTEyLjgwMi01LjUxNiA2LjkyOC02LjE5IDguNDAyLS45NTUuMjUyLTEuOTYyLTEuNjEtMS45NjItMS42MVpcIi8+PC9zdmc+IiwgImltcG9ydCBwTm8gZnJvbSAnLi4vaW1hZ2VzL1Bfbm8uc3ZnJztcbmltcG9ydCBwWWVzIGZyb20gJy4uL2ltYWdlcy9QX3llcy5zdmcnO1xuXG5leHBvcnQgY29uc3QgZXhpc3RzTm8gPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KHBObyl9YDtcbmV4cG9ydCBjb25zdCBleGlzdHNZZXMgPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KHBZZXMpfWA7XG4iLCAiaW1wb3J0IHR5cGUge0hvdENhdENvbmZpZywgSG90Q2F0TXdDb25maWd9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtleGlzdHNObywgZXhpc3RzWWVzfSBmcm9tICcuL2ltYWdlcyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVIb3RDYXRDb25maWcgPSAoY29uZjogSG90Q2F0TXdDb25maWcpOiBIb3RDYXRDb25maWcgPT4ge1xuXHRjb25zdCBIQzogSG90Q2F0Q29uZmlnID0ge1xuXHRcdC8vIFUrMjIxMiBpcyBhIG1pbnVzIHNpZ247IFUrMjE5MyBhbmQgVSsyMTkxIGFyZSBhcnJvd3MuXG5cdFx0bGlua3M6IHtcblx0XHRcdGNoYW5nZTogJyjCsSknLFxuXHRcdFx0cmVtb3ZlOiAnKFxcdTIyMTIpJyxcblx0XHRcdGFkZDogJygrKScsXG5cdFx0XHRyZXN0b3JlOiAnKMOXKScsXG5cdFx0XHR1bmRvOiAnKMOXKScsXG5cdFx0XHRkb3duOiAnKFxcdTIxOTMpJyxcblx0XHRcdHVwOiAnKFxcdTIxOTEpJyxcblx0XHR9LFxuXHRcdGNoYW5nZVRhZzogJ0hvdENhdCcsXG5cdFx0Ly8gSFRNTCBjb250ZW50IG9mIHRoZSBtdWx0aS1tb2RlIGxpbmsuXG5cdFx0YWRkbXVsdGk6ICc8c3Bhbj4rPHN1cD4rPC9zdXA+PC9zcGFuPicsXG5cdFx0Ly8gUmV0dXJuIHRydWUgdG8gZGlzYWJsZSBIb3RDYXQuXG5cdFx0ZGlzYWJsZTogKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgbnMgPSBjb25mLndnTmFtZXNwYWNlTnVtYmVyO1xuXHRcdFx0Y29uc3QgbnNJZHMgPSBjb25mLndnTmFtZXNwYWNlSWRzO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0bnMgPCAwIHx8XG5cdFx0XHRcdG5zID09PSAxMCB8fFxuXHRcdFx0XHRucyA9PT0gODI4IHx8XG5cdFx0XHRcdG5zID09PSA4IHx8XG5cdFx0XHRcdChucyA9PT0gNiAmJiAhY29uZi53Z0FydGljbGVJZCkgfHxcblx0XHRcdFx0KG5zID09PSAyICYmIC9cXC4oanN8Y3NzKSQvLnRlc3QoY29uZi53Z1RpdGxlKSkgfHxcblx0XHRcdFx0KG5zSWRzICYmIChucyA9PT0gbnNJZHNbJ2NyZWF0b3InXSB8fCBucyA9PT0gbnNJZHNbJ3RpbWVkdGV4dCddIHx8IG5zID09PSBuc0lkc1snaW5zdGl0dXRpb24nXSkpIHx8XG5cdFx0XHRcdGZhbHNlXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0Ly8gVGVtcGxhdGVzIG1hdGNoaW5nIHRoaXMgZXhwcmVzc2lvbiBtYXJrIHBhZ2VzIGFzIHVuY2F0ZWdvcml6ZWQuXG5cdFx0dW5jYXRfcmVnZXhwOiAve3tcXHMqW1V1XW5jYXRlZ29yaXplZFxccypbXn1dKn19XFxzKig8IS0tLio/LS0+XFxzKik/L2csXG5cdFx0Ly8gSW1hZ2VzIHVzZWQgYnkgdGhlIGNhdGVnb3J5IGV4aXN0ZW5jZSBpbmRpY2F0b3IuXG5cdFx0ZXhpc3RzWWVzLFxuXHRcdGV4aXN0c05vLFxuXHRcdC8vIENhdGVnb3J5IG5hbWVzIG1hcHBlZCB0byB0ZW1wbGF0ZS1uYW1lIHJlZ3VsYXIgZXhwcmVzc2lvbnMuXG5cdFx0dGVtcGxhdGVfY2F0ZWdvcmllczoge30sXG5cdFx0Ly8gU2V0IGZyb20gc2l0ZWluZm8gdW5sZXNzIGV4cGxpY2l0bHkgY29uZmlndXJlZC5cblx0XHRjYXBpdGFsaXplUGFnZU5hbWVzOiBudWxsLFxuXHRcdHVwbG9hZF9kaXNhYmxlZDogZmFsc2UsXG5cdFx0YmxhY2tsaXN0OiBudWxsLFxuXHRcdC8vIEJhY2tncm91bmQgZm9yIGNoYW5nZWQgY2F0ZWdvcmllcyBpbiBtdWx0aS1lZGl0IG1vZGUuXG5cdFx0YmdfY2hhbmdlZDogJyNGQ0EnLFxuXHRcdC8vIFdoZW4gZW5hYmxlZCwgY2hhbmdlcyBvcGVuIGFuIGVkaXQgcGFnZSBpbnN0ZWFkIG9mIGJlaW5nIHN1Ym1pdHRlZCBhdXRvbWF0aWNhbGx5LlxuXHRcdG5vX2F1dG9jb21taXQ6IGZhbHNlLFxuXHRcdGRlbF9uZWVkc19kaWZmOiBmYWxzZSxcblx0XHQvLyBEZWxheSBiZWZvcmUgcmVxdWVzdGluZyBzdWdnZXN0aW9ucyBhZnRlciBpbnB1dC5cblx0XHRzdWdnZXN0X2RlbGF5OiAxMDAwLFxuXHRcdGVkaXRib3hfd2lkdGg6IDQwLFxuXHRcdHN1Z2dlc3Rpb25zOiAnY29tYmluZWQnLFxuXHRcdGZpeGVkX3NlYXJjaDogZmFsc2UsXG5cdFx0dXNlX3VwX2Rvd246IHRydWUsXG5cdFx0bGlzdFNpemU6IDEwLFxuXHRcdHNpbmdsZV9taW5vcjogdHJ1ZSxcblx0XHRkb250X2FkZF90b193YXRjaGxpc3Q6IGZhbHNlLFxuXHRcdHNob3J0Y3V0czogbnVsbCxcblx0XHRhZGRTaG9ydGN1dHM6IChtYXA/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgbnVsbCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCFtYXApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0SEMuc2hvcnRjdXRzIHx8PSB7fTtcblx0XHRcdGZvciAobGV0IGsgaW4gbWFwKSB7XG5cdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bihtYXAsIGspKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHYgPSBtYXBba107XG5cdFx0XHRcdGlmICh0eXBlb2YgdiAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRrID0gay50cmltKCk7XG5cdFx0XHRcdHYgPSB2LnRyaW0oKTtcblx0XHRcdFx0aWYgKGsubGVuZ3RoID09PSAwIHx8IHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0SEMuc2hvcnRjdXRzW2tdID0gdjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIEZpbGxlZCBpbiBmcm9tIGxvY2FsaXplZCBNZWRpYVdpa2kgbmFtZXNwYWNlcy5cblx0XHRjYXRlZ29yeV9jYW5vbmljYWw6ICcnLFxuXHRcdGNhdGVnb3J5X3JlZ2V4cDogJycsXG5cdFx0dGVtcGxhdGVfcmVnZXhwOiAnJyxcblx0fTtcblx0cmV0dXJuIEhDO1xufTtcbiIsICJpbXBvcnQgdHlwZSB7SG90Q2F0Q29uZmlnLCBIb3RDYXRNd0NvbmZpZ30gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBNYWtlIHtcblx0PEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KGFyZzogSyk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXTtcblx0KGFyZzogc3RyaW5nLCBsaXRlcmFsOiB0cnVlKTogVGV4dDtcbn1cblxuaW50ZXJmYWNlIFN1YnN0aXR1dGVPcHRpb25zIHtcblx0aW5kaWNhdG9yPzogc3RyaW5nO1xuXHRsYnJhY2U/OiBzdHJpbmc7XG5cdHJicmFjZT86IHN0cmluZztcbn1cblxudHlwZSBTdWJzdGl0dXRlTWFwID0gUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgKChtYXRjaDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZD47XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVIb3RDYXRVdGlsaXRpZXMgPSAoY29uZjogSG90Q2F0TXdDb25maWcsIEhDOiBIb3RDYXRDb25maWcpID0+IHtcblx0Ly8gTWVkaWFXaWtpIHRyZWF0cyBzZXZlcmFsIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGFzIG9yZGluYXJ5IHNwYWNlcyBpbiB0aXRsZXMuXG5cdGNvbnN0IHdpa2lUZXh0QmxhbmsgPSBTdHJpbmcucmF3YFtcXHQgX1xceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMF0rYDtcblx0Y29uc3Qgd2lraVRleHRCbGFua1JFID0gbmV3IFJlZ0V4cCh3aWtpVGV4dEJsYW5rLCAnZycpO1xuXHQvLyBBbHNvIGFsbG93IGJpZGkgbWFya3MgYXJvdW5kIGxpbmsgY29tcG9uZW50cywgd2l0aG91dCBhbGxvd2luZyBsaW5lIGJyZWFrcy5cblx0Y29uc3Qgd2lraVRleHRCbGFua09yQmlkaSA9IFN0cmluZy5yYXdgW1xcdCBfXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAwQlxcdTIwMEVcXHUyMDBGXFx1MjAyOC1cXHUyMDJGXFx1MjA1RlxcdTMwMDBdKmA7XG5cdGNvbnN0IGF1dG9Mb2NhbGl6ZSA9IChuYW1lc3BhY2VOdW1iZXI6IG51bWJlciwgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0Y29uc3QgY3JlYXRlUmVnZXhwU3RyID0gKG5hbWU/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0aWYgKCFuYW1lIHx8IG5hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblx0XHRcdGxldCByZWdleF9uYW1lID0gJyc7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgaW5pdGlhbCA9IG5hbWUuY2hhckF0KGkpO1xuXHRcdFx0XHRjb25zdCBsbCA9IGluaXRpYWwudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0Y29uc3QgdWwgPSBpbml0aWFsLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdHJlZ2V4X25hbWUgKz0gbGwgPT09IHVsID8gaW5pdGlhbCA6IGBbJHtsbH0ke3VsfV1gO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlZ2V4X25hbWUucmVwbGFjZSgvKFskKCkqKy4/XFxcXF5dKS9nLCBTdHJpbmcucmF3YFxcJDFgKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayk7XG5cdFx0fTtcblx0XHRmYWxsYmFjayA9IGZhbGxiYWNrLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgY2Fub25pY2FsID0gKGNvbmYud2dGb3JtYXR0ZWROYW1lc3BhY2VzW1N0cmluZyhuYW1lc3BhY2VOdW1iZXIpXSA/PyAnJykudG9Mb3dlckNhc2UoKTtcblx0XHRsZXQgcmVnZXhwID0gY3JlYXRlUmVnZXhwU3RyKGNhbm9uaWNhbCk7XG5cdFx0aWYgKGZhbGxiYWNrICYmIGNhbm9uaWNhbCAhPT0gZmFsbGJhY2spIHtcblx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGZhbGxiYWNrKX1gO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGNhdF9uYW1lIGluIGNvbmYud2dOYW1lc3BhY2VJZHMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dHlwZW9mIGNhdF9uYW1lID09PSAnc3RyaW5nJyAmJlxuXHRcdFx0XHRjYXRfbmFtZS50b0xvd2VyQ2FzZSgpICE9PSBjYW5vbmljYWwgJiZcblx0XHRcdFx0Y2F0X25hbWUudG9Mb3dlckNhc2UoKSAhPT0gZmFsbGJhY2sgJiZcblx0XHRcdFx0Y29uZi53Z05hbWVzcGFjZUlkc1tjYXRfbmFtZV0gPT09IG5hbWVzcGFjZU51bWJlclxuXHRcdFx0KSB7XG5cdFx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGNhdF9uYW1lKX1gO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVnZXhwO1xuXHR9O1xuXHRIQy5jYXRlZ29yeV9jYW5vbmljYWwgPSBjb25mLndnRm9ybWF0dGVkTmFtZXNwYWNlc1snMTQnXSA/PyAnJztcblx0SEMuY2F0ZWdvcnlfcmVnZXhwID0gYXV0b0xvY2FsaXplKDE0LCAnY2F0ZWdvcnknKTtcblx0aWYgKGNvbmYud2dGb3JtYXR0ZWROYW1lc3BhY2VzWycxMCddKSB7XG5cdFx0SEMudGVtcGxhdGVfcmVnZXhwID0gYXV0b0xvY2FsaXplKDEwLCAndGVtcGxhdGUnKTtcblx0fVxuXHRjb25zdCBtYWtlID0gKChhcmc6IHN0cmluZywgbGl0ZXJhbD86IGJvb2xlYW4pOiBOb2RlIHwgbnVsbCA9PiB7XG5cdFx0aWYgKCFhcmcpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbGl0ZXJhbCA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFyZykgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZyk7XG5cdH0pIGFzIE1ha2U7XG5cdGNvbnN0IHBhcmFtID0gKG5hbWU6IHN0cmluZywgdXJpPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCA9PiB7XG5cdFx0dXJpIHx8PSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuXHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgWyY/XSR7bmFtZX09KFteJiNdKilgKTtcblx0XHRjb25zdCBtID0gcmUuZXhlYyh1cmkpO1xuXHRcdGlmIChtICYmIG0ubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChtWzFdIGFzIHN0cmluZyk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCB0aXRsZSA9IChocmVmPzogc3RyaW5nIHwgbnVsbCk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHRcdGlmICghaHJlZikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHNjcmlwdCA9IGAke2NvbmYud2dTY3JpcHR9P2A7XG5cdFx0aWYgKFxuXHRcdFx0aHJlZi5pbmRleE9mKHNjcmlwdCkgPT09IDAgfHxcblx0XHRcdGhyZWYuaW5kZXhPZihjb25mLndnU2VydmVyICsgc2NyaXB0KSA9PT0gMCB8fFxuXHRcdFx0KGNvbmYud2dTZXJ2ZXIuc2xpY2UoMCwgMikgPT09ICcvLycgJiZcblx0XHRcdFx0aHJlZi5pbmRleE9mKGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgY29uZi53Z1NlcnZlciArIHNjcmlwdCkgPT09IDApXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gcGFyYW0oJ3RpdGxlJywgaHJlZik7XG5cdFx0fVxuXHRcdGxldCBwcmVmaXggPSBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyk7XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpKSB7XG5cdFx0XHRwcmVmaXggPSBjb25mLndnU2VydmVyICsgcHJlZml4O1xuXHRcdH1cblx0XHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkgJiYgcHJlZml4LnNsaWNlKDAsIDIpID09PSAnLy8nKSB7XG5cdFx0XHRwcmVmaXggPSBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArIHByZWZpeDtcblx0XHR9XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYuc2xpY2UocHJlZml4Lmxlbmd0aCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgaGFzQ2xhc3MgPSAoe2NsYXNzTmFtZX06IHtjbGFzc05hbWU6IHN0cmluZ30sIG5hbWU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdHJldHVybiBgICR7Y2xhc3NOYW1lfSBgLmluY2x1ZGVzKGAgJHtuYW1lfSBgKTtcblx0fTtcblx0Y29uc3Qgc2V0U3R5bGVQcm9wZXJ0eSA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdChlbGVtZW50LnN0eWxlIGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgc3RyaW5nPilbcHJvcGVydHldID0gdmFsdWU7XG5cdH07XG5cdGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyPzogc3RyaW5nIHwgbnVsbCk6IHN0cmluZyA9PiB7XG5cdFx0aWYgKCFzdHIgfHwgc3RyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdH07XG5cdGNvbnN0IHdpa2lQYWdlUGF0aCA9IChwYWdlTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VOYW1lKS5yZXBsYWNlKC8lM0EvZywgJzonKS5yZXBsYWNlKC8lMkYvZywgJy8nKSk7XG5cdH07XG5cdGNvbnN0IGVzY2FwZVJFID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoLyhbJCgpKisuP1tcXFxcXFxdXl0pL2csIFN0cmluZy5yYXdgXFwkMWApO1xuXHR9O1xuXHRjb25zdCBzdWJzdGl0dXRlRmFjdG9yeSA9IChvcHRpb25zPzogU3Vic3RpdHV0ZU9wdGlvbnMpOiAoKHN0cjogc3RyaW5nLCBtYXA/OiBTdWJzdGl0dXRlTWFwKSA9PiBzdHJpbmcpID0+IHtcblx0XHRvcHRpb25zIHx8PSB7fTtcblx0XHRjb25zdCBsZWFkID0gb3B0aW9ucy5pbmRpY2F0b3IgfHwgJyQnO1xuXHRcdGNvbnN0IGluZGljYXRvciA9IGVzY2FwZVJFKGxlYWQpO1xuXHRcdGNvbnN0IGxicmFjZSA9IGVzY2FwZVJFKG9wdGlvbnMubGJyYWNlIHx8ICd7Jyk7XG5cdFx0Y29uc3QgcmJyYWNlID0gZXNjYXBlUkUob3B0aW9ucy5yYnJhY2UgfHwgJ30nKTtcblx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoXG5cdFx0XHQvLyAkJCwgJDAvJDEsICR7a2V5fSwgYW5kICRrZXlcblx0XHRcdGAoPzoke2luZGljYXRvcn0oJHtpbmRpY2F0b3J9KSl8YCArXG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oXFxcXGQrKSl8YCArXG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oPzoke2xicmFjZX0oW14ke2xicmFjZX0ke3JicmFjZX1dKykke3JicmFjZX0pKXxgICtcblx0XHRcdFx0YCg/OiR7aW5kaWNhdG9yfSg/ISg/Olske2luZGljYXRvcn0ke2xicmFjZX1dfFxcXFxkKSkoXFxcXFMrPylcXFxcYilgLFxuXHRcdFx0J2cnXG5cdFx0KTtcblx0XHRyZXR1cm4gKHN0cjogc3RyaW5nLCBtYXA/OiBTdWJzdGl0dXRlTWFwKTogc3RyaW5nID0+IHtcblx0XHRcdGlmICghbWFwKSB7XG5cdFx0XHRcdHJldHVybiBzdHI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UocmUsIChtYXRjaDogc3RyaW5nLCBwcmVmaXg6IHN0cmluZywgaWR4OiBzdHJpbmcsIGtleTogc3RyaW5nLCBhbHBoYTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdFx0aWYgKHByZWZpeCA9PT0gbGVhZCkge1xuXHRcdFx0XHRcdHJldHVybiBsZWFkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGsgPSBhbHBoYSB8fCBrZXkgfHwgaWR4O1xuXHRcdFx0XHRjb25zdCByZXBsYWNlbWVudCA9IHR5cGVvZiBtYXBba10gPT09ICdmdW5jdGlvbicgPyBtYXBba10obWF0Y2gsIGspIDogbWFwW2tdO1xuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIHJlcGxhY2VtZW50ID09PSAnc3RyaW5nJyA/IHJlcGxhY2VtZW50IDogcmVwbGFjZW1lbnQgfHwgbWF0Y2g7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHR9O1xuXHRjb25zdCByZXBsYWNlU2hvcnRjdXRzID0gKCgpOiAoKHN0cjogc3RyaW5nLCBtYXA/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgbnVsbCkgPT4gc3RyaW5nKSA9PiB7XG5cdFx0Y29uc3QgcmVwbGFjZUhhc2ggPSBzdWJzdGl0dXRlRmFjdG9yeSh7XG5cdFx0XHRpbmRpY2F0b3I6ICcjJyxcblx0XHRcdGxicmFjZTogJ1snLFxuXHRcdFx0cmJyYWNlOiAnXScsXG5cdFx0fSk7XG5cdFx0cmV0dXJuIChzdHI6IHN0cmluZywgbWFwPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IG51bGwpOiBzdHJpbmcgPT4ge1xuXHRcdFx0Y29uc3QgcyA9IHJlcGxhY2VIYXNoKHN0ciwgbWFwID8/IHVuZGVmaW5lZCk7XG5cdFx0XHRyZXR1cm4gSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA/IGNhcGl0YWxpemUocykgOiBzO1xuXHRcdH07XG5cdH0pKCk7XG5cdHJldHVybiB7XG5cdFx0d2lraVRleHRCbGFuayxcblx0XHR3aWtpVGV4dEJsYW5rUkUsXG5cdFx0d2lraVRleHRCbGFua09yQmlkaSxcblx0XHRtYWtlLFxuXHRcdHBhcmFtLFxuXHRcdHRpdGxlLFxuXHRcdGhhc0NsYXNzLFxuXHRcdHNldFN0eWxlUHJvcGVydHksXG5cdFx0Y2FwaXRhbGl6ZSxcblx0XHR3aWtpUGFnZVBhdGgsXG5cdFx0ZXNjYXBlUkUsXG5cdFx0cmVwbGFjZVNob3J0Y3V0cyxcblx0fTtcbn07XG4iLCAiaW1wb3J0IHR5cGUge0hvdENhdENvbmZpZywgSG90Q2F0U3VnZ2VzdGlvbkNvbmZpZywgSG90Q2F0U3VnZ2VzdGlvbkVuZ2luZSwgSG90Q2F0U3VnZ2VzdGlvblRpdGxlc30gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBIb3RDYXRDYXRlZ29yeU1lbWJlciB7XG5cdHRpdGxlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBIb3RDYXRTdWdnZXN0aW9uUXVlcnlSZXNwb25zZSB7XG5cdHF1ZXJ5Pzoge1xuXHRcdGFsbHBhZ2VzPzogSG90Q2F0Q2F0ZWdvcnlNZW1iZXJbXTtcblx0XHRjYXRlZ29yeW1lbWJlcnM/OiBIb3RDYXRDYXRlZ29yeU1lbWJlcltdO1xuXHRcdHBhZ2VzPzogUmVjb3JkPHN0cmluZywge3RpdGxlOiBzdHJpbmc7IGNhdGVnb3JpZXM/OiBIb3RDYXRDYXRlZ29yeU1lbWJlcltdfT47XG5cdH07XG59XG5cbi8qKlxuICogQ3JlYXRlIHRoZSBjb25maWd1cmVkIHN1Z2dlc3Rpb24gZW5naW5lcyBhbmQgc2VhcmNoIHByZXNldHMuXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVTdWdnZXN0aW9uRGF0YSA9IChcblx0SEM6IEhvdENhdENvbmZpZ1xuKToge1xuXHRzdWdnZXN0aW9uRW5naW5lczogUmVjb3JkPHN0cmluZywgSG90Q2F0U3VnZ2VzdGlvbkVuZ2luZT47XG5cdHN1Z2dlc3Rpb25Db25maWdzOiBSZWNvcmQ8c3RyaW5nLCBIb3RDYXRTdWdnZXN0aW9uQ29uZmlnPjtcbn0gPT4ge1xuXHRsZXQgY2F0UHJlZml4OiBSZWdFeHAgfCBudWxsID0gbnVsbDtcblx0Y29uc3QgdG9DYXRlZ29yeVRpdGxlcyA9IChtZW1iZXJzOiBIb3RDYXRDYXRlZ29yeU1lbWJlcltdKTogSG90Q2F0U3VnZ2VzdGlvblRpdGxlcyA9PiB7XG5cdFx0cmV0dXJuIG1lbWJlcnMubWFwKChtZW1iZXIpID0+IHtcblx0XHRcdHJldHVybiBtZW1iZXIudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgbWVtYmVyLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHR9KSBhcyBIb3RDYXRTdWdnZXN0aW9uVGl0bGVzO1xuXHR9O1xuXHRjb25zdCBzdWdnZXN0aW9uRW5naW5lczogUmVjb3JkPHN0cmluZywgSG90Q2F0U3VnZ2VzdGlvbkVuZ2luZT4gPSB7XG5cdFx0b3BlbnNlYXJjaDoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249b3BlbnNlYXJjaCZuYW1lc3BhY2U9MTQmbGltaXQ9MzAmc2VhcmNoPUNhdGVnb3J5OiQxYCxcblx0XHRcdC8vICQxID0gc2VhcmNoIHRlcm1cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIGNvbnZlcnQgcmVzdWx0IG9mIHVyaSBpbnRvIGFuIGFycmF5IG9mIGNhdGVnb3J5IG5hbWVzXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQ6IHVua25vd24sIHF1ZXJ5S2V5Pzogc3RyaW5nKTogSG90Q2F0U3VnZ2VzdGlvblRpdGxlcyB8IG51bGwgPT4ge1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBxdWVyeVJlc3VsdCBhcyBbc3RyaW5nLCBIb3RDYXRTdWdnZXN0aW9uVGl0bGVzXSB8IG51bGw7XG5cdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gU3RyaW5nKHJlc3VsdFswXSkuc2xpY2UoTWF0aC5tYXgoMCwgU3RyaW5nKHJlc3VsdFswXSkuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IHJlc3VsdFsxXTtcblx0XHRcdFx0XHRsZXQgZXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdFx0Y2F0UHJlZml4IHx8PSBuZXcgUmVnRXhwKGBeKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGNhdFByZWZpeC5sYXN0SW5kZXggPSAwO1xuXHRcdFx0XHRcdFx0Y29uc3QgbWF0Y2ggPSBjYXRQcmVmaXguZXhlYyh0aXRsZXNbaV0hKTtcblx0XHRcdFx0XHRcdGlmIChtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXSEuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldIS5pbmRleE9mKCc6JykgKyAxKSk7IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSB0aXRsZXNbaV0pIHtcblx0XHRcdFx0XHRcdFx0XHRleGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMuc3BsaWNlKGksIDEpOyAvLyBOb3BlLCBpdCdzIG5vdCBhIGNhdGVnb3J5IGFmdGVyIGFsbC5cblx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aXRsZXMuZXhpc3RzID0gZXhpc3RzO1xuXHRcdFx0XHRcdGlmIChxdWVyeUtleSAhPT0ga2V5KSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMubm9ybWFsaXplZCA9IGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gUmVtZW1iZXIgdGhlIE5GQyBub3JtYWxpemVkIGtleSB3ZSBnb3QgYmFjayBmcm9tIHRoZSBzZXJ2ZXJcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGludGVybmFsc2VhcmNoOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZsaXN0PWFsbHBhZ2VzJmFwbmFtZXNwYWNlPTE0JmFwbGltaXQ9MzAmYXBmcm9tPSQxJmFwcHJlZml4PSQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdDogdW5rbm93bik6IEhvdENhdFN1Z2dlc3Rpb25UaXRsZXMgfCBudWxsID0+IHtcblx0XHRcdFx0Y29uc3QgYWxscGFnZXMgPSAocXVlcnlSZXN1bHQgYXMgSG90Q2F0U3VnZ2VzdGlvblF1ZXJ5UmVzcG9uc2UgfCBudWxsKT8ucXVlcnk/LmFsbHBhZ2VzO1xuXHRcdFx0XHRyZXR1cm4gYWxscGFnZXMgPyB0b0NhdGVnb3J5VGl0bGVzKGFsbHBhZ2VzKSA6IG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0ZXhpc3RzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZwcm9wPWluZm8mdGl0bGVzPUNhdGVnb3J5OiQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdDogdW5rbm93biwgcXVlcnlLZXk/OiBzdHJpbmcpOiBIb3RDYXRTdWdnZXN0aW9uVGl0bGVzIHwgbnVsbCA9PiB7XG5cdFx0XHRcdGNvbnN0IHtwYWdlc30gPSAocXVlcnlSZXN1bHQgYXMgSG90Q2F0U3VnZ2VzdGlvblF1ZXJ5UmVzcG9uc2UgfCBudWxsKT8ucXVlcnkgPz8ge307XG5cdFx0XHRcdGlmICghcGFnZXMgfHwgcGFnZXNbJy0xJ10pIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBTaG91bGQgaGF2ZSBleGFjdGx5IDFcblx0XHRcdFx0Zm9yIChjb25zdCBwIGluIHBhZ2VzKSB7XG5cdFx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHBhZ2VzLCBwKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxldCB0aXRsZTogc3RyaW5nID0gcGFnZXNbcF0hLnRpdGxlO1xuXHRcdFx0XHRcdHRpdGxlID0gdGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlczogSG90Q2F0U3VnZ2VzdGlvblRpdGxlcyA9IFt0aXRsZV07XG5cdFx0XHRcdFx0dGl0bGVzLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKHF1ZXJ5S2V5ICE9PSB0aXRsZSkge1xuXHRcdFx0XHRcdFx0dGl0bGVzLm5vcm1hbGl6ZWQgPSB0aXRsZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gTkZDXG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRzdWJjYXRlZ29yaWVzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZsaXN0PWNhdGVnb3J5bWVtYmVycyZjbXR5cGU9c3ViY2F0JmNtbGltaXQ9bWF4JmNtdGl0bGU9Q2F0ZWdvcnk6JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0OiB1bmtub3duKTogSG90Q2F0U3VnZ2VzdGlvblRpdGxlcyB8IG51bGwgPT4ge1xuXHRcdFx0XHRjb25zdCBjYXRlZ29yeW1lbWJlcnMgPSAocXVlcnlSZXN1bHQgYXMgSG90Q2F0U3VnZ2VzdGlvblF1ZXJ5UmVzcG9uc2UgfCBudWxsKT8ucXVlcnk/LmNhdGVnb3J5bWVtYmVycztcblx0XHRcdFx0cmV0dXJuIGNhdGVnb3J5bWVtYmVycyA/IHRvQ2F0ZWdvcnlUaXRsZXMoY2F0ZWdvcnltZW1iZXJzKSA6IG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0cGFyZW50Y2F0ZWdvcmllczoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmcHJvcD1jYXRlZ29yaWVzJnRpdGxlcz1DYXRlZ29yeTokMSZjbGxpbWl0PW1heGAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQ6IHVua25vd24pOiBIb3RDYXRTdWdnZXN0aW9uVGl0bGVzIHwgbnVsbCA9PiB7XG5cdFx0XHRcdGNvbnN0IHtwYWdlc30gPSAocXVlcnlSZXN1bHQgYXMgSG90Q2F0U3VnZ2VzdGlvblF1ZXJ5UmVzcG9uc2UgfCBudWxsKT8ucXVlcnkgPz8ge307XG5cdFx0XHRcdGlmICghcGFnZXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGNvbnN0IHAgaW4gcGFnZXMpIHtcblx0XHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocGFnZXMsIHApKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3Qge2NhdGVnb3JpZXN9ID0gcGFnZXNbcF0hO1xuXHRcdFx0XHRcdGlmIChjYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdG9DYXRlZ29yeVRpdGxlcyhjYXRlZ29yaWVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cdGNvbnN0IHN1Z2dlc3Rpb25Db25maWdzOiBSZWNvcmQ8c3RyaW5nLCBIb3RDYXRTdWdnZXN0aW9uQ29uZmlnPiA9IHtcblx0XHRzZWFyY2hpbmRleDoge1xuXHRcdFx0bmFtZTogJ1NlYXJjaCBpbmRleCcsXG5cdFx0XHRlbmdpbmVzOiBbJ29wZW5zZWFyY2gnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRwYWdlbGlzdDoge1xuXHRcdFx0bmFtZTogJ1BhZ2UgbGlzdCcsXG5cdFx0XHRlbmdpbmVzOiBbJ2ludGVybmFsc2VhcmNoJywgJ2V4aXN0cyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdGNvbWJpbmVkOiB7XG5cdFx0XHRuYW1lOiAnQ29tYmluZWQgc2VhcmNoJyxcblx0XHRcdGVuZ2luZXM6IFsnb3BlbnNlYXJjaCcsICdpbnRlcm5hbHNlYXJjaCddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdHN1YmNhdDoge1xuXHRcdFx0bmFtZTogJ1N1YmNhdGVnb3JpZXMnLFxuXHRcdFx0ZW5naW5lczogWydzdWJjYXRlZ29yaWVzJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogdHJ1ZSxcblx0XHRcdG5vQ29tcGxldGlvbjogdHJ1ZSxcblx0XHR9LFxuXHRcdHBhcmVudGNhdDoge1xuXHRcdFx0bmFtZTogJ1BhcmVudCBjYXRlZ29yaWVzJyxcblx0XHRcdGVuZ2luZXM6IFsncGFyZW50Y2F0ZWdvcmllcyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IHRydWUsXG5cdFx0XHRub0NvbXBsZXRpb246IHRydWUsXG5cdFx0fSxcblx0fTtcblx0cmV0dXJuIHtzdWdnZXN0aW9uRW5naW5lcywgc3VnZ2VzdGlvbkNvbmZpZ3N9O1xufTtcbiIsICIvKiFcbiAqIEBkZXNjcmlwdGlvbiBBamF4LWJhc2VkIHNpbXBsZSBDYXRlZ29yeSBtYW5hZ2VyLiBBbGxvd3MgYWRkaW5nL3JlbW92aW5nL2NoYW5naW5nIGNhdGVnb3JpZXMgb24gYSBwYWdlIHZpZXcuXG4gKiBTdXBwb3J0cyBtdWx0aXBsZSBjYXRlZ29yeSBjaGFuZ2VzLCBhcyB3ZWxsIGFzIHJlZGlyZWN0IGFuZCBkaXNhbWJpZ3VhdGlvbiByZXNvbHV0aW9uLiBBbHNvXG4gKiBwbHVncyBpbnRvIHRoZSB1cGxvYWQgZm9ybS4gU2VhcmNoIGVuZ2luZXMgdG8gdXNlIGZvciB0aGUgc3VnZ2VzdGlvbiBsaXN0IGFyZSBjb25maWd1cmFibGUsIGFuZFxuICogY2FuIGJlIHNlbGVjdGVkIGludGVyYWN0aXZlbHkuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9IZWxwOkdhZGdldC1Ib3RDYXR9XG4gKiBAYXV0aG9yIGF1dGhvcnMgPGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvSGVscDpHYWRnZXQtSG90Q2F0L1ZlcnNpb25faGlzdG9yeT5cbiAqL1xuaW1wb3J0ICcuL21vZHVsZXMvY2hlY2snO1xuaW1wb3J0ICcuL21vZHVsZXMvbWVzc2FnZXMnO1xuaW1wb3J0IHR5cGUge1xuXHRIb3RDYXRBcGlQYWdlLFxuXHRIb3RDYXRBcGlRdWVyeVJlc3BvbnNlLFxuXHRIb3RDYXRNd0NvbmZpZyxcblx0SG90Q2F0U3VnZ2VzdGlvbkNhbGxiYWNrLFxuXHRIb3RDYXRTdWdnZXN0aW9uRW5naW5lLFxuXHRIb3RDYXRTdWdnZXN0aW9uVGl0bGVzLFxufSBmcm9tICcuL21vZHVsZXMvdHlwZXMnO1xuaW1wb3J0IHt0eXBlIEhvdENhdENhdGVnb3J5TWF0Y2hlcywgdHlwZSBIb3RDYXRDaGFuZ2VSZXN1bHQsIGNyZWF0ZUNhdGVnb3J5VGV4dFRvb2xzfSBmcm9tICcuL21vZHVsZXMvY2F0ZWdvcnlUZXh0JztcbmltcG9ydCB7Y3JlYXRlSG90Q2F0Q29uZmlnfSBmcm9tICcuL21vZHVsZXMvY29uZmlndXJhdGlvbic7XG5pbXBvcnQge2NyZWF0ZUhvdENhdFV0aWxpdGllc30gZnJvbSAnLi9tb2R1bGVzL3V0aWxpdGllcyc7XG5pbXBvcnQge2NyZWF0ZVN1Z2dlc3Rpb25EYXRhfSBmcm9tICcuL21vZHVsZXMvc3VnZ2VzdGlvbnMnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvZ2V0TWVzc2FnZSc7XG5pbXBvcnQge213QXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcblxuLy8gTWFpbiBib2R5XG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGhvdENhdCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Ly8gRG9uJ3QgdXNlIG13LmNvbmZpZy5nZXQoKSBhcyB0aGF0IHRha2VzIGEgY29weSBvZiB0aGUgY29uZmlnLCBhbmQgc28gZG9lc24ndFxuXHQvLyBhY2NvdW50IGZvciB2YWx1ZXMgY2hhbmdpbmcsIGUuZy4gd2dDdXJSZXZpc2lvbklkIGFmdGVyIGEgVkUgZWRpdFxuXHRjb25zdCBjb25mOiBIb3RDYXRNd0NvbmZpZyA9IG13LmNvbmZpZ1sndmFsdWVzJ107XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKCh3aW5kb3cuSG90Q2F0ICYmICEod2luZG93LkhvdENhdCBhcyB1bmtub3duIGFzIHtub2RlTmFtZT86IHN0cmluZ30pLm5vZGVOYW1lKSB8fCBjb25mLndnQWN0aW9uID09PSAnZWRpdCcpIHtcblx0XHRyZXR1cm47IC8vIE5vdCBvbiBlZGl0IG1vZGVcblx0fVxuXHQvLyBJbml0aWFsaXplIE1lZGlhV2lraSBBUElcblx0Y29uc3QgYXBpID0gbXdBcGkoJ0hvdENhdC8zLjAnKTtcblx0Y29uc3QgSEMgPSBjcmVhdGVIb3RDYXRDb25maWcoY29uZik7XG5cdHdpbmRvdy5Ib3RDYXQgPSBIQztcblx0Ly8gTW9yZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gV2UgaGF2ZSBhIGZldyBwbGFjZXMgd2hlcmUgd2UgdGVzdCBmb3IgdGhlIGJyb3dzZXI6IG9uY2UgZm9yXG5cdC8vIFNhZmFyaSA8IDMuMCwgYW5kIHR3aWNlIGZvciBXZWJLaXQgKENocm9tZSBvciBTYWZhcmksIGFueSB2ZXJzaW9ucylcblx0Y29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG5cdGNvbnN0IGlzX3dlYmtpdCA9IC9hcHBsZXdlYmtpdFxcL1xcZCsvLnRlc3QodWEpICYmICF1YS5pbmNsdWRlcygnc3Bvb2ZlcicpO1xuXHRsZXQgbm9TdWdnZXN0aW9ucyA9IGZhbHNlO1xuXHQvLyBObyBmdXJ0aGVyIGNoYW5nZXMgc2hvdWxkIGJlIG5lY2Vzc2FyeSBoZXJlLlxuXHQvLyBUaGUgZm9sbG93aW5nIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmdzIGFyZSB1c2VkIHdoZW4gc2VhcmNoaW5nIGZvciBjYXRlZ29yaWVzIGluIHdpa2l0ZXh0LlxuXHRjb25zdCB7XG5cdFx0d2lraVRleHRCbGFuayxcblx0XHR3aWtpVGV4dEJsYW5rUkUsXG5cdFx0d2lraVRleHRCbGFua09yQmlkaSxcblx0XHRtYWtlLFxuXHRcdHBhcmFtLFxuXHRcdHRpdGxlLFxuXHRcdGhhc0NsYXNzLFxuXHRcdHNldFN0eWxlUHJvcGVydHksXG5cdFx0Y2FwaXRhbGl6ZSxcblx0XHR3aWtpUGFnZVBhdGgsXG5cdFx0ZXNjYXBlUkUsXG5cdFx0cmVwbGFjZVNob3J0Y3V0cyxcblx0fSA9IGNyZWF0ZUhvdENhdFV0aWxpdGllcyhjb25mLCBIQyk7XG5cdGxldCBpbnRlcmxhbmd1YWdlUkU6IFJlZ0V4cCB8IG51bGwgPSBudWxsO1xuXHRjb25zdCB7ZmluZF9jYXRlZ29yeSwgY2hhbmdlX2NhdGVnb3J5fSA9IGNyZWF0ZUNhdGVnb3J5VGV4dFRvb2xzKFxuXHRcdEhDLFxuXHRcdHdpa2lUZXh0QmxhbmssXG5cdFx0d2lraVRleHRCbGFua1JFLFxuXHRcdHdpa2lUZXh0QmxhbmtPckJpZGksXG5cdFx0ZXNjYXBlUkUsXG5cdFx0KCkgPT4gaW50ZXJsYW5ndWFnZVJFXG5cdCk7XG5cdC8vIFRoZSByZWFsIEhvdENhdCBVSVxuXHRpbnRlcmZhY2UgSG90Q2F0VUlFdmVudCB7XG5cdFx0Y3RybEtleT86IGJvb2xlYW47XG5cdFx0bWV0YUtleT86IGJvb2xlYW47XG5cdFx0c2hpZnRLZXk/OiBib29sZWFuO1xuXHRcdHByZXZlbnREZWZhdWx0PzogKCkgPT4gdm9pZDtcblx0XHRzdG9wUHJvcGFnYXRpb24/OiAoKSA9PiB2b2lkO1xuXHRcdGNhbmNlbEJ1YmJsZT86IGJvb2xlYW47XG5cdH1cblx0aW50ZXJmYWNlIEhvdENhdENvbW1pdEZvcm0gZXh0ZW5kcyBIVE1MRm9ybUVsZW1lbnQge1xuXHRcdHdwVGV4dGJveDE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG5cdFx0d3BTdW1tYXJ5OiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwTWlub3JlZGl0OiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwV2F0Y2h0aGlzOiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwQXV0b1N1bW1hcnk6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0d3BDaGFuZ2VUYWdzOiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwU3RhcnR0aW1lOiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwRWRpdHRpbWU6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0b2xkaWQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0d3BFZGl0VG9rZW46IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0d3BEaWZmOiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwU2F2ZTogSFRNTElucHV0RWxlbWVudDtcblx0XHRoY0NvbW1pdDogSFRNTElucHV0RWxlbWVudDtcblx0fVxuXHR0eXBlIEhvdENhdEZhaWx1cmUgPSAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuXHRjb25zdCBldnRLZXlzID0gKGV2ZW50PzogSG90Q2F0VUlFdmVudCk6IG51bWJlciA9PiB7XG5cdFx0Y29uc3Qge2N0cmxLZXksIG1ldGFLZXksIHNoaWZ0S2V5fSA9IGV2ZW50ID8/IHt9O1xuXHRcdGxldCBjb2RlID0gMDtcblx0XHRpZiAoY3RybEtleSkge1xuXHRcdFx0Ly8gQWxsIG1vZGVybiBicm93c2Vyc1xuXHRcdFx0Ly8gQ3RybC1jbGljayBzZWVtcyB0byBiZSBvdmVybG9hZGVkIGluIEZGL01hYyAoaXQgb3BlbnMgYSBwb3AtdXAgbWVudSksIHNvIHRyZWF0IGNtZC1jbGlja1xuXHRcdFx0Ly8gYXMgYSBjdHJsLWNsaWNrLCB0b28uXG5cdFx0XHRpZiAoY3RybEtleSB8fCBtZXRhS2V5KSB7XG5cdFx0XHRcdGNvZGUgfHw9IDE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2hpZnRLZXkpIHtcblx0XHRcdFx0Y29kZSB8fD0gMjtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNvZGU7XG5cdH07XG5cdGNvbnN0IGV2dEtpbGwgPSAoZXZlbnQ/OiBIb3RDYXRVSUV2ZW50KTogZmFsc2UgPT4ge1xuXHRcdGlmIChldmVudD8ucHJldmVudERlZmF1bHQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24/LigpO1xuXHRcdH0gZWxzZSBpZiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0bGV0IGNhdExpbmU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7IC8vIHRydWUgaWYgTWVkaWFXaWtpIHNlcnZlcyB0aGUgbmV3IFVMLUxJIERPTSBmb3IgY2F0ZWdvcmllc1xuXHRsZXQgb25VcGxvYWQgPSBmYWxzZTtcblx0bGV0IGVkaXRvcnM6IENhdGVnb3J5RWRpdG9yW10gPSBbXTtcblx0bGV0IGNvbW1pdEJ1dHRvbjogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRsZXQgY29tbWl0Rm9ybTogSG90Q2F0Q29tbWl0Rm9ybSB8IG51bGwgPSBudWxsO1xuXHRsZXQgbXVsdGlTcGFuOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRsZXQgcGFnZVRleHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRsZXQgcGFnZVRpbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRsZXQgcGFnZVdhdGNoZWQgPSBmYWxzZTtcblx0bGV0IHdhdGNoQ3JlYXRlID0gZmFsc2U7XG5cdGxldCB3YXRjaEVkaXQgPSBmYWxzZTtcblx0bGV0IG1pbm9yRWRpdHMgPSBmYWxzZTtcblx0bGV0IGVkaXRUb2tlbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdGxldCBpc19ydGwgPSBmYWxzZTtcblx0bGV0IHNlcnZlclRpbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRsZXQgbGFzdFJldklkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblx0bGV0IHBhZ2VUZXh0UmV2SWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXHRsZXQgY29uZmxpY3RpbmdVc2VyOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0bGV0IG5ld0RPTSA9IGZhbHNlO1xuXHRjb25zdCBVTkNIQU5HRUQgPSAwO1xuXHRjb25zdCBPUEVOID0gMTsgLy8gT3BlbiwgYnV0IG5vIGlucHV0IHlldFxuXHRjb25zdCBDSEFOR0VfUEVORElORyA9IDI7IC8vIE9wZW4sIHNvbWUgaW5wdXQgbWFkZVxuXHRjb25zdCBDSEFOR0VEID0gMztcblx0Y29uc3QgREVMRVRFRCA9IDQ7XG5cdGNvbnN0IHNldFBhZ2UgPSAoZGF0YTogSG90Q2F0QXBpUXVlcnlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdGxldCBzdGFydFRpbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRcdGlmIChkYXRhICYmIGRhdGEucXVlcnkpIHtcblx0XHRcdGlmIChkYXRhLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGEucXVlcnkucGFnZXMgYXMgSG90Q2F0QXBpUGFnZVtdO1xuXHRcdFx0XHRpZiAocGFnZSkge1xuXHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9ucyAmJiBwYWdlLnJldmlzaW9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHQvLyBSZXZpc2lvbnMgYXJlIHNvcnRlZCBieSByZXZpc2lvbiBJRCwgaGVuY2UgWzBdIGlzIHRoZSBvbmUgd2UgYXNrZWQgZm9yLCBhbmQgcG9zc2libHkgdGhlcmUncyBhIFsxXSBpZiB3ZSdyZVxuXHRcdFx0XHRcdFx0Ly8gbm90IG9uIHRoZSBsYXRlc3QgcmV2aXNpb24gKGVkaXQgY29uZmxpY3RzIGFuZCBzdWNoKS5cblx0XHRcdFx0XHRcdGNvbnN0IFtsYXRlc3RSZXZpc2lvbiwgY29uZmxpY3RpbmdSZXZpc2lvbl0gPSBwYWdlLnJldmlzaW9ucztcblx0XHRcdFx0XHRcdHBhZ2VUZXh0ID0gbGF0ZXN0UmV2aXNpb24hLnNsb3RzLm1haW4uY29udGVudDtcblx0XHRcdFx0XHRcdGlmIChsYXRlc3RSZXZpc2lvbiEudGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0XHRcdHBhZ2VUaW1lID0gbGF0ZXN0UmV2aXNpb24hLnRpbWVzdGFtcC5yZXBsYWNlKC9cXEQvZywgJycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGxhdGVzdFJldmlzaW9uIS5yZXZpZCkge1xuXHRcdFx0XHRcdFx0XHRwYWdlVGV4dFJldklkID0gbGF0ZXN0UmV2aXNpb24hLnJldmlkO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zLmxlbmd0aCA+IDEgJiYgY29uZmxpY3RpbmdSZXZpc2lvbikge1xuXHRcdFx0XHRcdFx0XHRjb25mbGljdGluZ1VzZXIgPSBjb25mbGljdGluZ1JldmlzaW9uLnVzZXIgPz8gbnVsbDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFzdHJldmlkKSB7XG5cdFx0XHRcdFx0XHRsYXN0UmV2SWQgPSBwYWdlLmxhc3RyZXZpZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2Uuc3RhcnR0aW1lc3RhbXApIHtcblx0XHRcdFx0XHRcdHN0YXJ0VGltZSA9IHBhZ2Uuc3RhcnR0aW1lc3RhbXAucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cGFnZVdhdGNoZWQgPSB0eXBlb2YgcGFnZS53YXRjaGVkID09PSAnc3RyaW5nJztcblx0XHRcdFx0XHRpZiAoZGF0YS5xdWVyeS50b2tlbnMpIHtcblx0XHRcdFx0XHRcdGVkaXRUb2tlbiA9IGRhdGEucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFuZ2xpbmtzICYmICghZGF0YVsncXVlcnktY29udGludWUnXSB8fCAhZGF0YVsncXVlcnktY29udGludWUnXS5sYW5nbGlua3MpKSB7XG5cdFx0XHRcdFx0XHQvLyBXZSBoYXZlIGludGVybGFuZ3VhZ2UgbGlua3MsIGFuZCB3ZSBnb3QgdGhlbSBhbGwuXG5cdFx0XHRcdFx0XHRsZXQgcmUgPSAnJztcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgbGFuZ2xpbmsgb2YgcGFnZS5sYW5nbGlua3MpIHtcblx0XHRcdFx0XHRcdFx0cmUgKz1cblx0XHRcdFx0XHRcdFx0XHQocmUubGVuZ3RoID4gMCA/ICd8JyA6ICcnKSArIGxhbmdsaW5rLmxhbmcucmVwbGFjZSgvKFskKCkqKy4/XFxcXF5dKS9nLCBTdHJpbmcucmF3YFxcJDFgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChyZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGludGVybGFuZ3VhZ2VSRSA9IG5ldyBSZWdFeHAoYCgoXnxcXFxcblxcXFxyPykoXFxcXFtcXFxcW1xcXFxzKigke3JlfSlcXFxccyo6W15cXFxcXV0rXFxcXF1cXFxcXVxcXFxzKikpKyRgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIFNpdGVpbmZvXG5cdFx0XHRpZiAoZGF0YS5xdWVyeS5nZW5lcmFsKSB7XG5cdFx0XHRcdGlmIChkYXRhLnF1ZXJ5LmdlbmVyYWwudGltZSAmJiAhc3RhcnRUaW1lKSB7XG5cdFx0XHRcdFx0c3RhcnRUaW1lID0gZGF0YS5xdWVyeS5nZW5lcmFsLnRpbWUucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFJlc291cmNlTG9hZGVyJ3MgSlNQYXJzZXIgZG9lc24ndCBsaWtlIC5jYXNlLCBzbyBvdmVycmlkZSBlc2xpbnQuXG5cdFx0XHRcdFx0SEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA9IGRhdGEucXVlcnkuZ2VuZXJhbC5jYXNlID09PSAnZmlyc3QtbGV0dGVyJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2VydmVyVGltZSA9IHN0YXJ0VGltZTtcblx0XHRcdC8vIFVzZXJpbmZvXG5cdFx0XHRjb25zdCB7b3B0aW9uc30gPSBkYXRhLnF1ZXJ5LnVzZXJpbmZvID8/IHt9O1xuXHRcdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdFx0d2F0Y2hDcmVhdGUgPSAhSEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ICYmIG9wdGlvbnMud2F0Y2hjcmVhdGlvbnMgPT09ICcxJztcblx0XHRcdFx0d2F0Y2hFZGl0ID0gIUhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCAmJiBvcHRpb25zLndhdGNoZGVmYXVsdCA9PT0gJzEnO1xuXHRcdFx0XHRtaW5vckVkaXRzID0gb3B0aW9ucy5taW5vcmRlZmF1bHQgPT09IDE7XG5cdFx0XHRcdC8vIElmIHRoZSB1c2VyIGhhcyB0aGUgXCJBbGwgZWRpdHMgYXJlIG1pbm9yXCIgcHJlZmVyZW5jZSBlbmFibGVkLCB3ZSBzaG91bGQgaG9ub3IgdGhhdFxuXHRcdFx0XHQvLyBmb3Igc2luZ2xlIGNhdGVnb3J5IGNoYW5nZXMsIG5vIG1hdHRlciB3aGF0IHRoZSBzaXRlIGNvbmZpZ3VyYXRpb24gaXMuXG5cdFx0XHRcdGlmIChtaW5vckVkaXRzKSB7XG5cdFx0XHRcdFx0SEMuc2luZ2xlX21pbm9yID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0bGV0IHNhdmVJblByb2dyZXNzID0gZmFsc2U7XG5cdGNvbnN0IGluaXRpYXRlRWRpdCA9IChkb0VkaXQ6IChmYWlsdXJlOiBIb3RDYXRGYWlsdXJlKSA9PiB2b2lkLCBmYWlsdXJlOiBIb3RDYXRGYWlsdXJlKTogdm9pZCA9PiB7XG5cdFx0aWYgKHNhdmVJblByb2dyZXNzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNhdmVJblByb2dyZXNzID0gdHJ1ZTtcblx0XHRsZXQgb2xkQnV0dG9uU3RhdGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0b2xkQnV0dG9uU3RhdGUgPSBjb21taXRCdXR0b24uZGlzYWJsZWQ7XG5cdFx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBmYWlsID0gKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0c2F2ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblx0XHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gb2xkQnV0dG9uU3RhdGUgPz8gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRmYWlsdXJlKG1lc3NhZ2UpO1xuXHRcdH07XG5cdFx0Ly8gTXVzdCB1c2UgQWpheCBoZXJlIHRvIGdldCB0aGUgdXNlciBvcHRpb25zIGFuZCB0aGUgZWRpdCB0b2tlbi5cblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRyYXdjb250aW51ZTogJycsXG5cdFx0XHR0aXRsZXM6IGNvbmYud2dQYWdlTmFtZSxcblx0XHRcdHByb3A6IFsnaW5mbycsICdyZXZpc2lvbnMnLCAnbGFuZ2xpbmtzJ10sXG5cdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCcsICdpZHMnLCAndXNlciddLFxuXHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0cnZsaW1pdDogJzInLFxuXHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRydnN0YXJ0aWQ6IGNvbmYud2dDdXJSZXZpc2lvbklkLFxuXHRcdFx0bGxsaW1pdDogJzUwMCcsXG5cdFx0XHRtZXRhOiBbJ3NpdGVpbmZvJywgJ3VzZXJpbmZvJywgJ3Rva2VucyddLFxuXHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0dWlwcm9wOiBbJ29wdGlvbnMnXSxcblx0XHR9O1xuXHRcdGFwaS5nZXQocGFyYW1zKVxuXHRcdFx0LmRvbmUoKGRhdGEpID0+IHtcblx0XHRcdFx0c2V0UGFnZShkYXRhIGFzIEhvdENhdEFwaVF1ZXJ5UmVzcG9uc2UpO1xuXHRcdFx0XHRkb0VkaXQoZmFpbCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKGVycm9yOiB1bmtub3duKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHtzdGF0dXMsIHN0YXR1c1RleHR9ID0gKGVycm9yID8/IHt9KSBhcyB7c3RhdHVzPzogbnVtYmVyOyBzdGF0dXNUZXh0Pzogc3RyaW5nfTtcblx0XHRcdFx0ZmFpbChgJHtzdGF0dXMgPz8gJyd9ICR7c3RhdHVzVGV4dCA/PyAnJ31gKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBtdWx0aUNoYW5nZU1zZyA9IChjb3VudDogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtbXVsdGlfY2hhbmdlJywgU3RyaW5nKGNvdW50KSk7XG5cdH07XG5cdGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSAoKTogc3RyaW5nID0+IHtcblx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdGxldCB0cyA9IFN0cmluZyhub3cuZ2V0VVRDRnVsbFllYXIoKSk7XG5cdFx0Y29uc3QgdHdvID0gKHM6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gcy5zbGljZSgtMik7XG5cdFx0fTtcblx0XHR0cyArPVxuXHRcdFx0dHdvKGAwJHtub3cuZ2V0VVRDTW9udGgoKSArIDF9YCkgK1xuXHRcdFx0dHdvKGAwJHtub3cuZ2V0VVRDRGF0ZSgpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENIb3VycygpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENNaW51dGVzKCl9YCkgK1xuXHRcdFx0dHdvKGAwMCR7bm93LmdldFVUQ1NlY29uZHMoKX1gKTtcblx0XHRyZXR1cm4gdHM7XG5cdH07XG5cdGNvbnN0IHBlcmZvcm1DaGFuZ2VzID0gKGZhaWx1cmU6IEhvdENhdEZhaWx1cmUsIHNpbmdsZUVkaXRvcj86IENhdGVnb3J5RWRpdG9yKTogdm9pZCA9PiB7XG5cdFx0aWYgKHBhZ2VUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRmYWlsdXJlKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLW11bHRpX2Vycm9yJykpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBDcmVhdGUgYSBmb3JtIGFuZCBzdWJtaXQgaXQuIFdlIGRvbid0IHVzZSB0aGUgZWRpdCBBUEkgKGFwaS5waHA/YWN0aW9uPWVkaXQpIGJlY2F1c2Vcblx0XHQvLyAoYSkgc2Vuc2libHkgcmVwb3J0aW5nIGJhY2sgZXJyb3JzIGxpa2UgZWRpdCBjb25mbGljdHMgaXMgYWx3YXlzIGEgaGFzc2xlLCBhbmRcblx0XHQvLyAoYikgd2Ugd2FudCB0byBzaG93IGEgZGlmZiBmb3IgbXVsdGktZWRpdHMgYW55d2F5LCBhbmRcblx0XHQvLyAoYykgd2Ugd2FudCB0byB0cmlnZ2VyIG9uc3VibWl0IGV2ZW50cywgYWxsb3dpbmcgdXNlciBjb2RlIHRvIGludGVyY2VwdCB0aGUgZWRpdC5cblx0XHQvLyBVc2luZyB0aGUgZm9ybSwgd2UgY2FuIGRvIChiKSBhbmQgKGMpLCBhbmQgd2UgZ2V0IChhKSBmb3IgZnJlZS4gQW5kLCBvZiBjb3Vyc2UsIHVzaW5nIHRoZSBmb3JtXG5cdFx0Ly8gYXV0b21hdGljYWxseSByZWxvYWRzIHRoZSBwYWdlIHdpdGggdGhlIHVwZGF0ZWQgY2F0ZWdvcmllcyBvbiBhIHN1Y2Nlc3NmdWwgc3VibWl0LCB3aGljaFxuXHRcdC8vIHdlIHdvdWxkIGhhdmUgdG8gZG8gZXhwbGljaXRseSBpZiB3ZSB1c2VkIHRoZSBlZGl0IEFQSS5cblx0XHRsZXQgYWN0aW9uOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHRcdC8vIE5vcm1hbGx5LCB3ZSBkb24ndCBoYXZlIHRvIGNhcmUgYWJvdXQgZWRpdCBjb25mbGljdHMuIElmIHNvbWUgb3RoZXIgdXNlciBlZGl0ZWQgdGhlIHBhZ2UgaW4gdGhlIG1lYW50aW1lLCB0aGVcblx0XHQvLyBzZXJ2ZXIgd2lsbCB0YWtlIGNhcmUgb2YgaXQgYW5kIG1lcmdlIHRoZSBlZGl0IGF1dG9tYXRpY2FsbHkgb3IgcHJlc2VudCBhbiBlZGl0IGNvbmZsaWN0IHNjcmVlbi4gSG93ZXZlciwgdGhlXG5cdFx0Ly8gc2VydmVyIHN1cHByZXNzZXMgZWRpdCBjb25mbGljdHMgd2l0aCBvbmVzZWxmLiBIZW5jZSwgaWYgd2UgaGF2ZSBhIGNvbmZsaWN0LCBhbmQgdGhlIGNvbmZsaWN0aW5nIHVzZXIgaXMgdGhlXG5cdFx0Ly8gY3VycmVudCB1c2VyLCB0aGVuIHdlIHNldCB0aGUgXCJvbGRpZFwiIHZhbHVlIGFuZCBzd2l0Y2ggdG8gZGlmZiwgd2hpY2ggZ2l2ZXMgdGhlIFwieW91IGFyZSBlZGl0aW5nIGFuIG9sZCB2ZXJzaW9uO1xuXHRcdC8vIGlmIHlvdSBzYXZlLCBhbnkgbW9yZSByZWNlbnQgY2hhbmdlcyB3aWxsIGJlIGxvc3RcIiBzY3JlZW4uXG5cdFx0Y29uc3Qgc2VsZkVkaXRDb25mbGljdCA9ICEhKFxuXHRcdFx0KChsYXN0UmV2SWQgIT09IG51bGwgJiYgbGFzdFJldklkICE9PSBjb25mLndnQ3VyUmV2aXNpb25JZCkgfHxcblx0XHRcdFx0KHBhZ2VUZXh0UmV2SWQgIT09IG51bGwgJiYgcGFnZVRleHRSZXZJZCAhPT0gY29uZi53Z0N1clJldmlzaW9uSWQpKSAmJlxuXHRcdFx0Y29uZmxpY3RpbmdVc2VyICYmXG5cdFx0XHRjb25mbGljdGluZ1VzZXIgPT09IGNvbmYud2dVc2VyTmFtZVxuXHRcdCk7XG5cdFx0aWYgKHNpbmdsZUVkaXRvciAmJiAhc2luZ2xlRWRpdG9yLm5vQ29tbWl0ICYmICFIQy5ub19hdXRvY29tbWl0ICYmIGVkaXRUb2tlbiAmJiAhc2VsZkVkaXRDb25mbGljdCkge1xuXHRcdFx0Ly8gSWYgd2UgZG8gaGF2ZSBhbiBlZGl0IGNvbmZsaWN0LCBidXQgbm90IHdpdGggb3Vyc2VsZiwgdGhhdCdzIG5vIHJlYXNvbiBub3QgdG8gYXR0ZW1wdCB0byBzYXZlOiB0aGUgc2VydmVyIHNpZGUgbWF5IGFjdHVhbGx5IGJlIGFibGUgdG9cblx0XHRcdC8vIG1lcmdlIHRoZSBjaGFuZ2VzLiBXZSBqdXN0IG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgd2UgZG8gcHJlc2VudCBhIGRpZmYgdmlldyBpZiBpdCdzIGEgc2VsZiBlZGl0IGNvbmZsaWN0LlxuXHRcdFx0Y29tbWl0Rm9ybSEud3BFZGl0VG9rZW4udmFsdWUgPSBlZGl0VG9rZW47XG5cdFx0XHRhY3Rpb24gPSBjb21taXRGb3JtIS53cERpZmY7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cFNhdmUnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybSEud3BTYXZlO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCByZXN1bHQ6IEhvdENhdENoYW5nZVJlc3VsdCA9IHtcblx0XHRcdHRleHQ6IHBhZ2VUZXh0LFxuXHRcdFx0c3VtbWFyeTogW10sXG5cdFx0XHRlcnJvcjogbnVsbCxcblx0XHR9O1xuXHRcdGNvbnN0IGNoYW5nZWQ6IHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10gPSBbXTtcblx0XHRjb25zdCBhZGRlZDogc3RyaW5nW10gPSBbXTtcblx0XHRjb25zdCBkZWxldGVkOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGNvbnN0IHRvRWRpdCA9IHNpbmdsZUVkaXRvciA/IFtzaW5nbGVFZGl0b3JdIDogZWRpdG9ycztcblx0XHRsZXQgZWRpdDogQ2F0ZWdvcnlFZGl0b3I7XG5cdFx0bGV0IGk6IG51bWJlcjtcblx0XHRsZXQgZXJyb3I6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRcdGxldCBjaGFuZ2VzID0gMDtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9FZGl0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRlZGl0ID0gdG9FZGl0W2ldITtcblx0XHRcdGlmIChlZGl0LnN0YXRlID09PSBDSEFOR0VEKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShcblx0XHRcdFx0XHRyZXN1bHQudGV4dCxcblx0XHRcdFx0XHRlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50Q2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50S2V5LFxuXHRcdFx0XHRcdGVkaXQuY3VycmVudEhpZGRlblxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoIXJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRcdGNoYW5nZXMrKztcblx0XHRcdFx0XHRpZiAoIWVkaXQub3JpZ2luYWxDYXRlZ29yeSB8fCBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRhZGRlZFthZGRlZC5sZW5ndGhdID0gZWRpdC5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNoYW5nZWRbY2hhbmdlZC5sZW5ndGhdID0ge1xuXHRcdFx0XHRcdFx0XHRmcm9tOiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0XHRcdHRvOiBlZGl0LmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGVkaXQuc3RhdGUgPT09IERFTEVURUQgJiYgZWRpdC5vcmlnaW5hbENhdGVnb3J5ICYmIGVkaXQub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShyZXN1bHQudGV4dCwgZWRpdC5vcmlnaW5hbENhdGVnb3J5LCBudWxsLCBudWxsLCBmYWxzZSk7XG5cdFx0XHRcdGlmICghcmVzdWx0LmVycm9yKSB7XG5cdFx0XHRcdFx0Y2hhbmdlcysrO1xuXHRcdFx0XHRcdGRlbGV0ZWRbZGVsZXRlZC5sZW5ndGhdID0gZWRpdC5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChlcnJvciAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gRG8gbm90IGNvbW1pdCBpZiB0aGVyZSB3ZXJlIGVycm9yc1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybSEud3BTYXZlO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghY29uZi53Z0FydGljbGVJZCAmJiBjaGFuZ2VzID4gMCAmJiBlcnJvciA9PT0gbnVsbCkge1xuXHRcdFx0cmVzdWx0LnRleHQgPSBge3tDYXRuYXZ8YXV0bz0xfX1cXG5cXG4ke3Jlc3VsdC50ZXh0fWA7XG5cdFx0fVxuXHRcdC8vIEZpbGwgaW4gdGhlIGZvcm0gYW5kIHN1Ym1pdCBpdFxuXHRcdGNvbW1pdEZvcm0hLndwTWlub3JlZGl0LmNoZWNrZWQgPSBtaW5vckVkaXRzO1xuXHRcdGNvbW1pdEZvcm0hLndwV2F0Y2h0aGlzLmNoZWNrZWQgPSAoIWNvbmYud2dBcnRpY2xlSWQgJiYgd2F0Y2hDcmVhdGUpIHx8IHdhdGNoRWRpdCB8fCBwYWdlV2F0Y2hlZDtcblx0XHRpZiAoY29uZi53Z0FydGljbGVJZCB8fCAhIXNpbmdsZUVkaXRvcikge1xuXHRcdFx0Ly8gUHJlcGFyZSBjaGFuZ2UtdGFnIHNhdmVcblx0XHRcdGlmIChhY3Rpb24gJiYgYWN0aW9uLnZhbHVlID09PSAnd3BTYXZlJykge1xuXHRcdFx0XHRpZiAoSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybSEud3BDaGFuZ2VUYWdzLnZhbHVlID0gSEMuY2hhbmdlVGFnO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb21taXRGb3JtIS53cEF1dG9TdW1tYXJ5LnZhbHVlID0gSEMuY2hhbmdlVGFnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNoYW5nZXMgPT09IDEpIHtcblx0XHRcdFx0aWYgKHJlc3VsdC5zdW1tYXJ5ICYmIHJlc3VsdC5zdW1tYXJ5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjb21taXRGb3JtIS53cFN1bW1hcnkudmFsdWUgPVxuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpICtcblx0XHRcdFx0XHRcdHJlc3VsdC5zdW1tYXJ5LmpvaW4oZ2V0TWVzc2FnZSgnbWVzc2FnZXMtc2VwYXJhdG9yJykpICtcblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbW1pdEZvcm0hLndwTWlub3JlZGl0LmNoZWNrZWQgPSBIQy5zaW5nbGVfbWlub3IgfHwgbWlub3JFZGl0cztcblx0XHRcdH0gZWxzZSBpZiAoY2hhbmdlcykge1xuXHRcdFx0XHRjb25zdCBzdW1tYXJ5OiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRjb25zdCBzaG9ydFN1bW1hcnk6IHN0cmluZ1tdID0gW107XG5cdFx0XHRcdC8vIERlbGV0ZWRcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRlbGV0ZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGDiiJIke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGRlbGV0ZWRbaV0hKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkZWxldGVkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDiiJIke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGRlbGV0ZWRbMF0hKX1gO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGRlbGV0ZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDiiJIgJHttdWx0aUNoYW5nZU1zZyhkZWxldGVkLmxlbmd0aCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBZGRlZFxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYWRkZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGArJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBhZGRlZFtpXSEpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGFkZGVkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGArJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBhZGRlZFswXSEpfWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYWRkZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGArICR7bXVsdGlDaGFuZ2VNc2coYWRkZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIENoYW5nZWRcblx0XHRcdFx0Y29uc3QgYXJyb3cgPSBpc19ydGwgPyAnXFx1MjE5MCcgOiAnXFx1MjE5Mic7IC8vIGxlZnQgYW5kIHJpZ2h0IGFycm93cy4gRG9uJ3QgdXNlIOKGkCBhbmQg4oaSIGluIHRoZSBjb2RlLlxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2hhbmdlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGNvbnN0IGNoYW5nZSA9IGNoYW5nZWRbaV0hO1xuXHRcdFx0XHRcdGlmIChjaGFuZ2UuZnJvbSA9PT0gY2hhbmdlLnRvKSB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlLmZyb20pfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID1cblx0XHRcdFx0XHRcdFx0YMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2UuZnJvbSl9JHthcnJvd30ke2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0XHRcdFx0J21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlLnRvXG5cdFx0XHRcdFx0XHRcdCl9YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNoYW5nZWQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2hhbmdlID0gY2hhbmdlZFswXSE7XG5cdFx0XHRcdFx0aWYgKGNoYW5nZS5mcm9tID09PSBjaGFuZ2UudG8pIHtcblx0XHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlLmZyb20pfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDCsSR7Z2V0TWVzc2FnZShcblx0XHRcdFx0XHRcdFx0J21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsXG5cdFx0XHRcdFx0XHRcdGNoYW5nZS5mcm9tXG5cdFx0XHRcdFx0XHQpfSR7YXJyb3d9JHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2UudG8pfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGNoYW5nZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDCsSAke211bHRpQ2hhbmdlTXNnKGNoYW5nZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdW1tYXJ5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjb25zdCBqb2luZWRTdW1tYXJ5ID0gc3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKTtcblx0XHRcdFx0XHRjb25zdCBmaW5hbFN1bW1hcnkgPVxuXHRcdFx0XHRcdFx0am9pbmVkU3VtbWFyeS5sZW5ndGggPlxuXHRcdFx0XHRcdFx0MjAwIC1cblx0XHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpLmxlbmd0aCAtXG5cdFx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpLmxlbmd0aFxuXHRcdFx0XHRcdFx0XHQ/IHNob3J0U3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKVxuXHRcdFx0XHRcdFx0XHQ6IGpvaW5lZFN1bW1hcnk7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybSEud3BTdW1tYXJ5LnZhbHVlID1cblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpKSArXG5cdFx0XHRcdFx0XHRmaW5hbFN1bW1hcnkgK1xuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y29tbWl0Rm9ybSEud3BUZXh0Ym94MS52YWx1ZSA9IHJlc3VsdC50ZXh0O1xuXHRcdGNvbW1pdEZvcm0hLndwU3RhcnR0aW1lLnZhbHVlID0gc2VydmVyVGltZSB8fCBjdXJyZW50VGltZXN0YW1wKCk7XG5cdFx0Y29tbWl0Rm9ybSEud3BFZGl0dGltZS52YWx1ZSA9IHBhZ2VUaW1lIHx8IGNvbW1pdEZvcm0hLndwU3RhcnR0aW1lLnZhbHVlO1xuXHRcdGlmIChzZWxmRWRpdENvbmZsaWN0KSB7XG5cdFx0XHRjb21taXRGb3JtIS5vbGRpZC52YWx1ZSA9IFN0cmluZyhwYWdlVGV4dFJldklkIHx8IGNvbmYud2dDdXJSZXZpc2lvbklkKTtcblx0XHR9XG5cdFx0Ly8gU3VibWl0IHRoZSBmb3JtIGluIGEgd2F5IHRoYXQgdHJpZ2dlcnMgb25zdWJtaXQgZXZlbnRzOiBjb21taXRGb3JtLnN1Ym1pdCgpIGRvZXNuJ3QuXG5cdFx0Y29tbWl0Rm9ybSEuaGNDb21taXQuY2xpY2soKTtcblx0fTtcblx0Y29uc3QgcmVzb2x2ZU9uZSA9IChwYWdlOiBIb3RDYXRBcGlQYWdlLCB0b1Jlc29sdmU6IENhdGVnb3J5RWRpdG9yW10pOiB2b2lkID0+IHtcblx0XHRjb25zdCBjYXRzID0gcGFnZS5jYXRlZ29yaWVzO1xuXHRcdGNvbnN0IHtsaW5rc30gPSBwYWdlO1xuXHRcdGxldCBpc19kYWIgPSBmYWxzZTsgLy8gSGFyZCByZWRpcmVjdD9cblx0XHRsZXQgaXNfcmVkaXIgPSB0eXBlb2YgcGFnZS5yZWRpcmVjdCA9PT0gJ3N0cmluZyc7XG5cdFx0bGV0IGk6IG51bWJlcjtcblx0XHRjb25zdCBpc19oaWRkZW4gPSBwYWdlLmNhdGVnb3J5aW5mbyAmJiB0eXBlb2YgcGFnZS5jYXRlZ29yeWluZm8uaGlkZGVuID09PSAnc3RyaW5nJztcblx0XHRjb25zdCBpc19taXNzaW5nID0gdHlwZW9mIHBhZ2UubWlzc2luZyA9PT0gJ3N0cmluZyc7XG5cdFx0Y29uc3QgcGFnZVRpdGxlID0gcGFnZS50aXRsZS5zbGljZShNYXRoLm1heCgwLCBwYWdlLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBlZGl0b3IgPSB0b1Jlc29sdmVbaV0hO1xuXHRcdFx0aWYgKGkgJiYgZWRpdG9yLmRhYklucHV0Q2xlYW5lZCAhPT0gcGFnZVRpdGxlKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gTm90ZTogdGhlIHNlcnZlciByZXR1cm5zIGluIHBhZ2UgYW4gTkZDIG5vcm1hbGl6ZWQgVW5pY29kZSB0aXRsZS4gSWYgb3VyIGlucHV0IHdhcyBub3QgTkZDIG5vcm1hbGl6ZWQsIHdlIG1heSBub3QgZmluZFxuXHRcdFx0Ly8gYW55IGVudHJ5IGhlcmUuIElmIHdlIGhhdmUgb25seSBvbmUgZWRpdG9yIHRvIHJlc29sdmUgKHRoZSBtb3N0IGNvbW1vbiBjYXNlLCBJIHByZXN1bWUpLCB3ZSBtYXkgc2ltcGx5IHNraXAgdGhlIGNoZWNrLlxuXHRcdFx0ZWRpdG9yLmN1cnJlbnRIaWRkZW4gPSBpc19oaWRkZW47XG5cdFx0XHRlZGl0b3IuaW5wdXRFeGlzdHMgPSAhaXNfbWlzc2luZztcblx0XHRcdGVkaXRvci5pY29uIS5zcmMgPSBpc19taXNzaW5nID8gSEMuZXhpc3RzTm8gOiBIQy5leGlzdHNZZXM7XG5cdFx0fVxuXHRcdGlmIChpc19taXNzaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghaXNfcmVkaXIgJiYgY2F0cyAmJiAoZ2V0TWVzc2FnZSgnZGlzYW1iaWdfY2F0ZWdvcnknKSB8fCBnZXRNZXNzYWdlKCdyZWRpcl9jYXRlZ29yeScpKSkge1xuXHRcdFx0Zm9yIChjb25zdCBjYXRfIG9mIGNhdHMpIHtcblx0XHRcdFx0bGV0IGNhdCA9IGNhdF8udGl0bGU7XG5cdFx0XHRcdC8vIFN0cmlwIG5hbWVzcGFjZSBwcmVmaXhcblx0XHRcdFx0aWYgKGNhdCkge1xuXHRcdFx0XHRcdGNhdCA9IGNhdC5zbGljZShNYXRoLm1heCgwLCBjYXQuaW5kZXhPZignOicpICsgMSkpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdFx0XHRpZiAoY2F0ID09PSBnZXRNZXNzYWdlKCdkaXNhbWJpZ19jYXRlZ29yeScpKSB7XG5cdFx0XHRcdFx0XHRpc19kYWIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjYXQgPT09IGdldE1lc3NhZ2UoJ3JlZGlyX2NhdGVnb3J5JykpIHtcblx0XHRcdFx0XHRcdGlzX3JlZGlyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWlzX3JlZGlyICYmICFpc19kYWIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFsaW5rcyB8fCBsaW5rcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgdGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQvLyBDYXRlZ29yeSBuYW1lc3BhY2UgLS0gYWx3YXlzIHRydWUgc2luY2Ugd2UgYXNrIG9ubHkgZm9yIHRoZSBjYXRlZ29yeSBsaW5rc1xuXHRcdFx0XHRsaW5rLm5zID09PSAxNCAmJlxuXHRcdFx0XHQvLyBOYW1lIG5vdCBlbXB0eVxuXHRcdFx0XHRsaW5rLnRpdGxlICYmXG5cdFx0XHRcdGxpbmsudGl0bGUubGVuZ3RoID4gMFxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIEludGVybmFsIGxpbmsgdG8gZXhpc3RpbmcgdGhpbmd5LiBFeHRyYWN0IHRoZSBwYWdlIG5hbWUgYW5kIHJlbW92ZSB0aGUgbmFtZXNwYWNlLlxuXHRcdFx0XHRjb25zdCBtYXRjaCA9IGxpbmsudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgbGluay50aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdC8vIEV4Y2x1ZGUgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllcy5cblx0XHRcdFx0aWYgKCFIQy5ibGFja2xpc3QgfHwgIUhDLmJsYWNrbGlzdC50ZXN0KG1hdGNoKSkge1xuXHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IG1hdGNoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGVkaXRvciA9IHRvUmVzb2x2ZVtpXSE7XG5cdFx0XHRpZiAoaSAmJiBlZGl0b3IuZGFiSW5wdXRDbGVhbmVkICE9PSBwYWdlVGl0bGUpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRlZGl0b3IuaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBNaWdodCBhY3R1YWxseSBiZSB3cm9uZyBpZiBpdCdzIGEgcmVkaXJlY3QgcG9pbnRpbmcgdG8gYSBub24tZXhpc3RpbmcgY2F0ZWdvcnlcblx0XHRcdGVkaXRvci5pY29uIS5zcmMgPSBIQy5leGlzdHNZZXM7XG5cdFx0XHRpZiAodGl0bGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0ZWRpdG9yLmRhYiA9IHRpdGxlcztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVkaXRvci50ZXh0IS52YWx1ZSA9IHRpdGxlc1swXSEgKyAoZWRpdG9yLmN1cnJlbnRLZXkgPT09IG51bGwgPyAnJyA6IGB8JHtlZGl0b3IuY3VycmVudEtleX1gKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlc29sdmVSZWRpcmVjdHMgPSAodG9SZXNvbHZlOiBDYXRlZ29yeUVkaXRvcltdLCBwYXJhbXM/OiBIb3RDYXRBcGlRdWVyeVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0aWYgKCFwYXJhbXMgfHwgIXBhcmFtcy5xdWVyeSB8fCAhcGFyYW1zLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHtwYWdlc30gPSBwYXJhbXMucXVlcnk7XG5cdFx0Zm9yIChjb25zdCBwIGluIHBhZ2VzKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocGFnZXMsIHApKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmVzb2x2ZU9uZSgocGFnZXMgYXMgUmVjb3JkPHN0cmluZywgSG90Q2F0QXBpUGFnZT4pW3BdISwgdG9SZXNvbHZlKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlc29sdmVNdWx0aSA9ICh0b1Jlc29sdmU6IENhdGVnb3J5RWRpdG9yW10sIGNhbGxiYWNrOiAocmVzb2x2ZWQ6IENhdGVnb3J5RWRpdG9yW10pID0+IHZvaWQpOiB2b2lkID0+IHtcblx0XHRsZXQgaTogbnVtYmVyO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGVkaXRvciA9IHRvUmVzb2x2ZVtpXSE7XG5cdFx0XHRlZGl0b3IuZGFiID0gbnVsbDtcblx0XHRcdGVkaXRvci5kYWJJbnB1dCA9IGVkaXRvci5sYXN0SW5wdXQ7XG5cdFx0fVxuXHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRwcm9wOiAnaW5mb3xsaW5rc3xjYXRlZ29yaWVzfGNhdGVnb3J5aW5mbycsXG5cdFx0XHRwbG5hbWVzcGFjZTogJzE0Jyxcblx0XHRcdHBsbGltaXQ6IFN0cmluZyh0b1Jlc29sdmUubGVuZ3RoICogMTApLFxuXHRcdFx0Y2xsaW1pdDogU3RyaW5nKHRvUmVzb2x2ZS5sZW5ndGggKiAxMCksXG5cdFx0fTtcblx0XHRjb25zdCB0aXRsZXM6IHN0cmluZ1tdID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgZWRpdG9yID0gdG9SZXNvbHZlW2ldITtcblx0XHRcdGNvbnN0IHYgPSByZXBsYWNlU2hvcnRjdXRzKGVkaXRvci5kYWJJbnB1dCEsIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRlZGl0b3IuZGFiSW5wdXRDbGVhbmVkID0gdjtcblx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IGBDYXRlZ29yeToke3Z9YDtcblx0XHR9XG5cdFx0cGFyYW1zLnRpdGxlcyA9IHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0YXBpLmdldChwYXJhbXMpXG5cdFx0XHQuZG9uZSgoanNvbikgPT4ge1xuXHRcdFx0XHRyZXNvbHZlUmVkaXJlY3RzKHRvUmVzb2x2ZSwganNvbiBhcyBIb3RDYXRBcGlRdWVyeVJlc3BvbnNlKTtcblx0XHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgocmVxKSA9PiB7XG5cdFx0XHRcdGlmICghcmVxKSB7XG5cdFx0XHRcdFx0bm9TdWdnZXN0aW9ucyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBtYWtlQWN0aXZlID0gKHdoaWNoOiBDYXRlZ29yeUVkaXRvcik6IHZvaWQgPT4ge1xuXHRcdGlmICh3aGljaC5pc19hY3RpdmUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvciAhPT0gd2hpY2gpIHtcblx0XHRcdFx0ZWRpdG9yLmluYWN0aXZhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0d2hpY2guaXNfYWN0aXZlID0gdHJ1ZTtcblx0XHRpZiAod2hpY2guZGFiKSB7XG5cdFx0XHRzaG93RGFiKHdoaWNoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gQ2hlY2sgZm9yIHByb2dyYW1tYXRpYyB2YWx1ZSBjaGFuZ2VzLlxuXHRcdFx0Y29uc3QgZXhwZWN0ZWRJbnB1dCA9IHdoaWNoLmxhc3RSZWFsSW5wdXQgfHwgd2hpY2gubGFzdElucHV0IHx8ICcnO1xuXHRcdFx0Y29uc3QgYWN0dWFsVmFsdWUgPSB3aGljaC50ZXh0IS52YWx1ZSB8fCAnJztcblx0XHRcdGlmIChcblx0XHRcdFx0KGV4cGVjdGVkSW5wdXQubGVuZ3RoID09PSAwICYmIGFjdHVhbFZhbHVlLmxlbmd0aCA+IDApIHx8XG5cdFx0XHRcdChleHBlY3RlZElucHV0Lmxlbmd0aCA+IDAgJiYgYWN0dWFsVmFsdWUuaW5kZXhPZihleHBlY3RlZElucHV0KSlcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBTb21laG93IHRoZSBmaWVsZCdzIHZhbHVlIGFwcGVhcnMgdG8gaGF2ZSBjaGFuZ2VkLCBhbmQgd2hpY2gubGFzdFNlbGVjdGlvbiB0aGVyZWZvcmUgaXMgbm8gbG9uZ2VyIHZhbGlkLiBUcnkgdG8gc2V0IHRoZVxuXHRcdFx0XHQvLyBjdXJzb3IgYXQgdGhlIGVuZCBvZiB0aGUgY2F0ZWdvcnksIGFuZCBkbyBub3QgZGlzcGxheSB0aGUgb2xkIHN1Z2dlc3Rpb24gbGlzdC5cblx0XHRcdFx0d2hpY2guc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IHYgPSBhY3R1YWxWYWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRbd2hpY2gubGFzdElucHV0XSA9IHYgYXMgW3N0cmluZ107XG5cdFx0XHRcdHdoaWNoLmxhc3RSZWFsSW5wdXQgPSB3aGljaC5sYXN0SW5wdXQ7XG5cdFx0XHRcdGlmICh2Lmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHR3aGljaC5jdXJyZW50S2V5ID0gdlsxXSE7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2hpY2gubGFzdFNlbGVjdGlvbiAmJj0ge1xuXHRcdFx0XHRcdHN0YXJ0OiB2WzBdIS5sZW5ndGgsXG5cdFx0XHRcdFx0ZW5kOiB2WzBdIS5sZW5ndGgsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAod2hpY2guc2hvd3NMaXN0KSB7XG5cdFx0XHRcdHdoaWNoLmRpc3BsYXlMaXN0KCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2hpY2gubGFzdFNlbGVjdGlvbikge1xuXHRcdFx0XHRjb25zdCB7bGFzdFNlbGVjdGlvbn0gPSB3aGljaDtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0d2hpY2guc2V0U2VsZWN0aW9uKGxhc3RTZWxlY3Rpb24uc3RhcnQsIGxhc3RTZWxlY3Rpb24uZW5kKTtcblx0XHRcdFx0fSwgMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBzaG93RGFiID0gKHdoaWNoOiBDYXRlZ29yeUVkaXRvcik6IHZvaWQgPT4ge1xuXHRcdGlmICh3aGljaC5pc19hY3RpdmUpIHtcblx0XHRcdHdoaWNoLnNob3dTdWdnZXN0aW9ucyh3aGljaC5kYWIsIGZhbHNlLCBudWxsLCBudWxsKTsgLy8gZG8gYXV0b2NvbXBsZXRpb24sIG5vIGtleSwgbm8gZW5naW5lIHNlbGVjdG9yXG5cdFx0XHR3aGljaC5kYWIgPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYWtlQWN0aXZlKHdoaWNoKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG11bHRpU3VibWl0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHRvUmVzb2x2ZTogQ2F0ZWdvcnlFZGl0b3JbXSA9IFtdO1xuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgPT09IENIQU5HRV9QRU5ESU5HIHx8IGVkaXRvci5zdGF0ZSA9PT0gT1BFTikge1xuXHRcdFx0XHR0b1Jlc29sdmVbdG9SZXNvbHZlLmxlbmd0aF0gPSBlZGl0b3I7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0b1Jlc29sdmUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJlc29sdmVNdWx0aSh0b1Jlc29sdmUsIChyZXNvbHZlZCkgPT4ge1xuXHRcdFx0bGV0IGZpcnN0RGFiOiBDYXRlZ29yeUVkaXRvciB8IG51bGwgPSBudWxsO1xuXHRcdFx0bGV0IGRvbnRDaGFuZ2UgPSBmYWxzZTtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiByZXNvbHZlZCkge1xuXHRcdFx0XHRpZiAoZWxlbWVudC5sYXN0SW5wdXQgPT09IGVsZW1lbnQuZGFiSW5wdXQpIHtcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5kYWIpIHtcblx0XHRcdFx0XHRcdGZpcnN0RGFiIHx8PSBlbGVtZW50O1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudC5hY2NlcHRDaGVjayh0cnVlKSkge1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jb21taXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gV2UgZGlkbid0IGRpc2FibGUgYWxsIHRoZSBvcGVuIGVkaXRvcnMsIGJ1dCB3ZSBkaWQgYXN5bmNocm9ub3VzIGNhbGxzLiBJdCBpc1xuXHRcdFx0XHRcdC8vIHRoZW9yZXRpY2FsbHkgcG9zc2libGUgdGhhdCB0aGUgdXNlciBjaGFuZ2VkIHNvbWV0aGluZy4uLlxuXHRcdFx0XHRcdGRvbnRDaGFuZ2UgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZmlyc3REYWIpIHtcblx0XHRcdFx0c2hvd0RhYihmaXJzdERhYik7XG5cdFx0XHR9IGVsc2UgaWYgKCFkb250Q2hhbmdlKSB7XG5cdFx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBzZXRNdWx0aUlucHV0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmIChjb21taXRCdXR0b24gfHwgb25VcGxvYWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29tbWl0QnV0dG9uID0gbWFrZSgnaW5wdXQnKTtcblx0XHRjb21taXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuXHRcdGNvbW1pdEJ1dHRvbi52YWx1ZSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNvbW1pdCcpO1xuXHRcdGNvbW1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG11bHRpU3VibWl0KTtcblx0XHRpZiAobXVsdGlTcGFuKSB7XG5cdFx0XHRtdWx0aVNwYW4ucmVwbGFjZVdpdGgoY29tbWl0QnV0dG9uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2F0TGluZSEuYXBwZW5kKGNvbW1pdEJ1dHRvbik7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBjaGVja011bHRpSW5wdXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKCFjb21taXRCdXR0b24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGhhc0NoYW5nZXMgPSBmYWxzZTtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0aGFzQ2hhbmdlcyA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSAhaGFzQ2hhbmdlcztcblx0fTtcblx0Y29uc3Qge3N1Z2dlc3Rpb25FbmdpbmVzLCBzdWdnZXN0aW9uQ29uZmlnc30gPSBjcmVhdGVTdWdnZXN0aW9uRGF0YShIQyk7XG5cdC8vIEV2ZW50IGtleUNvZGVzIHRoYXQgd2UgaGFuZGxlIGluIHRoZSB0ZXh0IGlucHV0IGZpZWxkL3N1Z2dlc3Rpb24gbGlzdC5cblx0Y29uc3QgQlMgPSA4O1xuXHRjb25zdCBUQUIgPSA5O1xuXHRjb25zdCBSRVQgPSAxMztcblx0Y29uc3QgRVNDID0gMjc7XG5cdGNvbnN0IFNQQUNFID0gMzI7XG5cdGNvbnN0IFBHVVAgPSAzMztcblx0Y29uc3QgUEdET1dOID0gMzQ7XG5cdGNvbnN0IFVQID0gMzg7XG5cdGNvbnN0IERPV04gPSA0MDtcblx0Y29uc3QgREVMID0gNDY7XG5cdGNvbnN0IElNRSA9IDIyOTtcblx0Y2xhc3MgQ2F0ZWdvcnlFZGl0b3Ige1xuXHRcdGlzQ29tcG9zaXRpb25TdGFydCA9IGZhbHNlO1xuXHRcdGlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRjYXRMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdG9yaWdpbmFsQ2F0ZWdvcnkgPSAnJztcblx0XHRvcmlnaW5hbEtleTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdFx0b3JpZ2luYWxFeGlzdHMgPSBmYWxzZTtcblx0XHRvcmlnaW5hbEhpZGRlbjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0XHRvcmlnaW5hbFN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdGxpbmtTcGFuITogSFRNTFNwYW5FbGVtZW50O1xuXHRcdG5vcm1hbExpbmtzOiBIVE1MU3BhbkVsZW1lbnQgfCBudWxsID0gbnVsbDtcblx0XHR1bmRlbExpbms6IEhUTUxTcGFuRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdHVwRG93bkxpbmtzOiBIVE1MU3BhbkVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cdFx0dW5kb0xpbms6IEhUTUxTcGFuRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdGxpbmU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdFx0c3BhbiE6IEhUTUxFbGVtZW50O1xuXHRcdGVuZ2luZSA9ICcnO1xuXHRcdGVuZ2luZU5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRcdGVuZ2luZVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudCB8IHVuZGVmaW5lZDtcblx0XHRmb3JtOiBIVE1MRm9ybUVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cdFx0dGV4dDogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZDtcblx0XHRpY29uOiBIVE1MSW1hZ2VFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHRcdGxpc3Q6IEhUTUxTZWxlY3RFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdFx0b2s6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cdFx0Y2FuY2VsQnV0dG9uOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHRcdGN1cnJlbnRDYXRlZ29yeSA9ICcnO1xuXHRcdGN1cnJlbnRFeGlzdHMgPSBmYWxzZTtcblx0XHRjdXJyZW50SGlkZGVuOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHRcdGN1cnJlbnRLZXk6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRcdHN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdGxhc3RTYXZlZFN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdGxhc3RTYXZlZENhdGVnb3J5ID0gJyc7XG5cdFx0bGFzdFNhdmVkS2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0XHRsYXN0U2F2ZWRFeGlzdHMgPSBmYWxzZTtcblx0XHRsYXN0U2F2ZWRIaWRkZW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdFx0bGFzdElucHV0ID0gJyc7XG5cdFx0bGFzdFJlYWxJbnB1dCA9ICcnO1xuXHRcdGxhc3RTZWxlY3Rpb246IHtzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlcn0gfCB1bmRlZmluZWQ7XG5cdFx0bGFzdFF1ZXJ5OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gbnVsbDtcblx0XHRzaG93c0xpc3QgPSBmYWxzZTtcblx0XHRpbnB1dEV4aXN0cyA9IGZhbHNlO1xuXHRcdGltZSA9IGZhbHNlO1xuXHRcdHVzZXNDb21wb3NpdGlvbiA9IGZhbHNlO1xuXHRcdGxhc3RLZXk6IHN0cmluZyB8IG51bWJlciA9IDA7XG5cdFx0a2V5Q291bnQgPSAwO1xuXHRcdGRhYjogc3RyaW5nW10gfCBudWxsID0gbnVsbDtcblx0XHRkYWJJbnB1dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGRhYklucHV0Q2xlYW5lZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGNhbGxiYWNrT2JqOiBIb3RDYXRTdWdnZXN0aW9uQ2FsbGJhY2sgfCBudWxsID0gbnVsbDtcblx0XHRpc19hY3RpdmUgPSBmYWxzZTtcblx0XHRub0NvbW1pdCA9IGZhbHNlO1xuXHRcdGNvbnN0cnVjdG9yKFxuXHRcdFx0bGluZTogSFRNTEVsZW1lbnQgfCBudWxsLFxuXHRcdFx0c3BhbjogSFRNTEVsZW1lbnQgfCBudWxsLFxuXHRcdFx0YWZ0ZXI6IHN0cmluZyB8IEhUTUxFbGVtZW50IHwgbnVsbCxcblx0XHRcdGtleT86IHN0cmluZyB8IGJvb2xlYW4gfCBudWxsLFxuXHRcdFx0aXNfaGlkZGVuPzogYm9vbGVhblxuXHRcdCkge1xuXHRcdFx0dGhpcy5pbml0aWFsaXplKGxpbmUsIHNwYW4sIGFmdGVyLCBrZXksIGlzX2hpZGRlbik7XG5cdFx0fVxuXHRcdGluaXRpYWxpemUoXG5cdFx0XHRsaW5lOiBIVE1MRWxlbWVudCB8IG51bGwsXG5cdFx0XHRzcGFuOiBIVE1MRWxlbWVudCB8IG51bGwsXG5cdFx0XHRhZnRlcjogc3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBudWxsLFxuXHRcdFx0a2V5Pzogc3RyaW5nIHwgYm9vbGVhbiB8IG51bGwsXG5cdFx0XHRpc19oaWRkZW4/OiBib29sZWFuXG5cdFx0KTogdm9pZCB7XG5cdFx0XHQvLyBJZiBhIHNwYW4gaXMgZ2l2ZW4sICdhZnRlcicgaXMgdGhlIGNhdGVnb3J5IHRpdGxlLCBvdGhlcndpc2UgaXQgbWF5IGJlIGFuIGVsZW1lbnQgYWZ0ZXIgd2hpY2ggdG9cblx0XHRcdC8vIGluc2VydCB0aGUgbmV3IHNwYW4uICdrZXknIGlzIGxpa2V3aXNlIG92ZXJsb2FkZWQ7IGlmIGEgc3BhbiBpcyBnaXZlbiwgaXQgaXMgdGhlIGNhdGVnb3J5IGtleSAoaWZcblx0XHRcdC8vIGtub3duKSwgb3RoZXJ3aXNlIGl0IGlzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgYSBiYXIgc2hhbGwgYmUgcHJlcGVuZGVkLlxuXHRcdFx0aWYgKHNwYW4pIHtcblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdHNwYW4uZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IHNwYW4uZmlyc3RDaGlsZCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbENhdGVnb3J5ID0gYWZ0ZXIgYXMgc3RyaW5nO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsS2V5ID0gdHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5Lmxlbmd0aCA+IDEgPyBrZXkuc2xpY2UoMSkgOiBudWxsOyAvLyA+IDEgYmVjYXVzZSBpdCBpbmNsdWRlcyB0aGUgbGVhZGluZyBiYXJcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEV4aXN0cyA9ICFoYXNDbGFzcyh0aGlzLmNhdExpbmssICduZXcnKTtcblx0XHRcdFx0Ly8gQ3JlYXRlIGNoYW5nZSBhbmQgZGVsIGxpbmtzXG5cdFx0XHRcdHRoaXMubWFrZUxpbmtTcGFuKCk7XG5cdFx0XHRcdGlmICghdGhpcy5vcmlnaW5hbEV4aXN0cyAmJiB0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMubGlua1NwYW4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gdHJ1ZTtcblx0XHRcdFx0Ly8gQ3JlYXRlIGFkZCBzcGFuIGFuZCBhcHBlbmQgdG8gY2F0TGlua3Ncblx0XHRcdFx0dGhpcy5vcmlnaW5hbENhdGVnb3J5ID0gJyc7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxLZXkgPSBudWxsO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsRXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdGxldCBhZnRlckVsZW1lbnQgPSBhZnRlciBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG5cdFx0XHRcdGlmICghbmV3RE9NKSB7XG5cdFx0XHRcdFx0Y29uc3QgYWRkU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0XHRhZGRTcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdFx0XHRpZiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRhZGRTcGFuLmFwcGVuZChtYWtlKCcgfCAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRpZiAoYWZ0ZXJFbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRcdGFmdGVyRWxlbWVudC5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUoYWRkU3BhbiwgYWZ0ZXJFbGVtZW50Lm5leHRTaWJsaW5nKTtcblx0XHRcdFx0XHRcdFx0YWZ0ZXJFbGVtZW50ID0gYWZ0ZXJFbGVtZW50Lm5leHRTaWJsaW5nIGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChsaW5lKSB7XG5cdFx0XHRcdFx0XHRcdGxpbmUuYXBwZW5kKGFkZFNwYW4pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAobGluZSAmJiBsaW5lLmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0XHRcdGFkZFNwYW4uYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRsaW5lLmFwcGVuZChhZGRTcGFuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5saW5rU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCBub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuYWRkLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1hZGQnKTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdGNvbnN0IG91dGVyU3BhbiA9IG1ha2UobmV3RE9NID8gJ2xpJyA6ICdzcGFuJyk7XG5cdFx0XHRcdG91dGVyU3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCc7XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRvdXRlclNwYW4uZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0b3V0ZXJTcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdFx0aWYgKGFmdGVyRWxlbWVudCkge1xuXHRcdFx0XHRcdGFmdGVyRWxlbWVudC5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUob3V0ZXJTcGFuLCBhZnRlckVsZW1lbnQubmV4dFNpYmxpbmcpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUpIHtcblx0XHRcdFx0XHRsaW5lLmFwcGVuZChvdXRlclNwYW4pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW4gPSBvdXRlclNwYW47XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MgPSBudWxsO1xuXHRcdFx0XHR0aGlzLnVuZGVsTGluayA9IG51bGw7XG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm9yaWdpbmFsSGlkZGVuID0gaXNfaGlkZGVuO1xuXHRcdFx0dGhpcy5saW5lID0gbGluZTtcblx0XHRcdHRoaXMuZW5naW5lID0gSEMuc3VnZ2VzdGlvbnM7XG5cdFx0XHR0aGlzLnNwYW4gPSBzcGFuITtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5zdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdHRoaXMubGFzdFNhdmVkU3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0aWYgKHRoaXMuY2F0TGluayAmJiB0aGlzLmN1cnJlbnRLZXkpIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5O1xuXHRcdFx0fVxuXHRcdFx0ZWRpdG9yc1tlZGl0b3JzLmxlbmd0aF0gPSB0aGlzO1xuXHRcdH1cblx0XHRtYWtlTGlua1NwYW4oKTogdm9pZCB7XG5cdFx0XHR0aGlzLm5vcm1hbExpbmtzID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0bGV0IGxpbms6IEhUTUxBbmNob3JFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdFx0XHRpZiAodGhpcy5vcmlnaW5hbENhdGVnb3J5ICYmIHRoaXMub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmUuYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MucmVtb3ZlLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1yZW1vdmUnKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIUhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbdGhpcy5vcmlnaW5hbENhdGVnb3J5XSkge1xuXHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5jaGFuZ2UsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWNoYW5nZScpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zICYmIEhDLnVzZV91cF9kb3duKSB7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcyA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRvd24uYmluZCh0aGlzKSk7XG5cdFx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5kb3duLCB0cnVlKSk7XG5cdFx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWRvd24nKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXAuYmluZCh0aGlzKSk7XG5cdFx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy51cCwgdHJ1ZSkpO1xuXHRcdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy11cCcpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQodGhpcy51cERvd25MaW5rcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHR0aGlzLmxpbmtTcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50IG5vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQodGhpcy5ub3JtYWxMaW5rcyk7XG5cdFx0XHR0aGlzLnVuZGVsTGluayA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rLmNsYXNzTmFtZSA9ICdub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdHRoaXMudW5kZWxMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZXN0b3JlLmJpbmQodGhpcykpO1xuXHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5yZXN0b3JlLCB0cnVlKSk7XG5cdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtcmVzdG9yZScpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5hcHBlbmQobGluayk7XG5cdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZCh0aGlzLnVuZGVsTGluayk7XG5cdFx0fVxuXHRcdGludm9rZVN1Z2dlc3Rpb25zKGRvbnRfYXV0b2NvbXBsZXRlPzogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLmVuZ2luZSAmJlxuXHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0gJiZcblx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdIS50ZW1wICYmXG5cdFx0XHRcdCFkb250X2F1dG9jb21wbGV0ZVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lID0gSEMuc3VnZ2VzdGlvbnM7XG5cdFx0XHR9IC8vIFJlc2V0IHRvIGEgc2VhcmNoIHVwb24gaW5wdXRcblx0XHRcdHRoaXMuc3RhdGUgPSBDSEFOR0VfUEVORElORztcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNlbGYudGV4dGNoYW5nZShkb250X2F1dG9jb21wbGV0ZSk7XG5cdFx0XHR9LCBIQy5zdWdnZXN0X2RlbGF5KTtcblx0XHR9XG5cdFx0bWFrZUZvcm0oKTogdm9pZCB7XG5cdFx0XHRjb25zdCBmb3JtID0gbWFrZSgnZm9ybScpO1xuXHRcdFx0Zm9ybS5tZXRob2QgPSAnUE9TVCc7XG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuYWNjZXB0LmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5mb3JtID0gZm9ybTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0Y29uc3QgdGV4dCA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0XHR0ZXh0LnR5cGUgPSAndGV4dCc7XG5cdFx0XHR0ZXh0LnNpemUgPSBIQy5lZGl0Ym94X3dpZHRoO1xuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdC8vIEJlIGNhcmVmdWwgaGVyZSB0byBoYW5kbGUgSU1FIGlucHV0LiBUaGlzIGlzIGJyb3dzZXIvT1MvSU1FIGRlcGVuZGVudCwgYnV0IGJhc2ljYWxseSB0aGVyZSBhcmUgdHdvIG1lY2hhbmlzbXM6XG5cdFx0XHRcdC8vIC0gTW9kZXJuIChET00gTGV2ZWwgMykgYnJvd3NlcnMgdXNlIGNvbXBvc2l0aW9uc3RhcnQvY29tcG9zaXRpb25lbmQgZXZlbnRzIHRvIHNpZ25hbCBjb21wb3NpdGlvbjsgaWYgdGhlXG5cdFx0XHRcdC8vICAgY29tcG9zaXRpb24gaXMgbm90IGNhbmNlbGVkLCB0aGVyZSdsbCBiZSBhIHRleHRJbnB1dCBldmVudCBmb2xsb3dpbmcuIER1cmluZyBhIGNvbXBvc2l0aW9uIGtleSBldmVudHMgYXJlXG5cdFx0XHRcdC8vICAgZWl0aGVyIGFsbCBzdXBwcmVzc2VkIChGRi9HZWNrbyksIG9yIG90aGVyd2lzZSBoYXZlIGtleURvd24gPT09IElNRSBmb3IgYWxsIGtleXMgKFdlYmtpdCkuXG5cdFx0XHRcdC8vICAgLSBXZWJraXQgc2VuZHMgYSB0ZXh0SW5wdXQgZm9sbG93ZWQgYnkga2V5RG93biA9PT0gSU1FIGFuZCBhIGtleVVwIHdpdGggdGhlIGtleSB0aGF0IGVuZGVkIGNvbXBvc2l0aW9uLlxuXHRcdFx0XHQvLyAgIC0gR2Vja28gZG9lc24ndCBzZW5kIHRleHRJbnB1dCBidXQganVzdCBhIGtleVVwIHdpdGggdGhlIGtleSB0aGF0IGVuZGVkIGNvbXBvc2l0aW9uLCB3aXRob3V0IHNlbmRpbmcga2V5RG93blxuXHRcdFx0XHQvL1x0IGZpcnN0LiBHZWNrbyBkb2Vzbid0IHNlbmQgYW55IGtleWRvd24gd2hpbGUgSU1FIGlzIGFjdGl2ZS5cblx0XHRcdFx0Ly8gLSBPbGRlciBicm93c2VycyBzaWduYWwgY29tcG9zaXRpb24gYnkga2V5RG93biA9PT0gSU1FIGZvciB0aGUgZmlyc3QgYW5kIHN1YnNlcXVlbnQga2V5cyBmb3IgYSBjb21wb3NpdGlvbi4gVGhlXG5cdFx0XHRcdC8vICAgZmlyc3Qga2V5RG93biAhPT0gSU1FIGlzIGNlcnRhaW5seSBhZnRlciB0aGUgZW5kIG9mIHRoZSBjb21wb3NpdGlvbi4gVHlwaWNhbGx5LCBjb21wb3NpdGlvbiBlbmQgY2FuIGFsc28gYmVcblx0XHRcdFx0Ly8gICBkZXRlY3RlZCBieSBhIGtleURvd24gSU1FIHdpdGggYSBrZXlVcCBvZiBzcGFjZSwgdGFiLCBlc2NhcGUsIG9yIHJldHVybi5cblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleTogc3RyaW5nIHwgbnVtYmVyID0gZXZlbnQua2V5IHx8IDA7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgJiZcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9PT0gSU1FICYmXG5cdFx0XHRcdFx0XHQhc2VsZi51c2VzQ29tcG9zaXRpb24gJiZcblx0XHRcdFx0XHRcdChrZXkgPT09IFRBQiB8fCBrZXkgPT09IFJFVCB8fCBrZXkgPT09IEVTQyB8fCBrZXkgPT09IFNQQUNFKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNlbGYuaW1lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gVVAgfHwga2V5ID09PSBET1dOIHx8IGtleSA9PT0gUEdVUCB8fCBrZXkgPT09IFBHRE9XTikge1xuXHRcdFx0XHRcdFx0Ly8gSW4gY2FzZSBhIGJyb3dzZXIgZG9lc24ndCBnZW5lcmF0ZSBrZXlwcmVzcyBldmVudHMgZm9yIGFycm93IGtleXMuLi5cblx0XHRcdFx0XHRcdGlmIChzZWxmLmtleUNvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLnByb2Nlc3NLZXkoZXZlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoa2V5ID09PSBFU0MgJiYgc2VsZi5sYXN0S2V5ICE9PSBJTUUgJiYgIXNlbGYucmVzZXRLZXlTZWxlY3Rpb24oKSkge1xuXHRcdFx0XHRcdFx0XHQvLyBObyB1bmRvIG9mIGtleSBzZWxlY3Rpb246IHRyZWF0IEVTQyBhcyBcImNhbmNlbFwiLlxuXHRcdFx0XHRcdFx0XHRzZWxmLmNhbmNlbCgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBBbHNvIGRvIHRoaXMgZm9yIEVTQyBhcyBhIHdvcmthcm91bmQgZm9yIEZpcmVmb3ggYnVnIDUyNDM2MFxuXHRcdFx0XHRcdFx0Ly8ge0BsaW5rIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTUyNDM2MH1cblx0XHRcdFx0XHRcdGlmIChzZWxmLmlzQ29tcG9zaXRpb25TdGFydCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZWxmLmludm9rZVN1Z2dlc3Rpb25zKGtleSA9PT0gQlMgfHwga2V5ID09PSBERUwgfHwga2V5ID09PSBFU0MpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleTogc3RyaW5nIHwgbnVtYmVyID0gZXZlbnQua2V5IHx8IDA7XG5cdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0ga2V5O1xuXHRcdFx0XHRcdHNlbGYua2V5Q291bnQgPSAwO1xuXHRcdFx0XHRcdC8vIERPTSBMZXZlbCA8IDMgSU1FIGlucHV0XG5cdFx0XHRcdFx0aWYgKCFzZWxmLmltZSAmJiBrZXkgPT09IElNRSAmJiAhc2VsZi51c2VzQ29tcG9zaXRpb24pIHtcblx0XHRcdFx0XHRcdC8vIHNlbGYudXNlc0NvbXBvc2l0aW9uIGNhdGNoZXMgYnJvd3NlcnMgdGhhdCBtYXkgZW1pdCBzcHVyaW91cyBrZXlkb3duIElNRSBhZnRlciBhIGNvbXBvc2l0aW9uIGhhcyBlbmRlZFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0XHRzZWxmLmltZSAmJlxuXHRcdFx0XHRcdFx0a2V5ICE9PSBJTUUgJiZcblx0XHRcdFx0XHRcdCEoXG5cdFx0XHRcdFx0XHRcdChOdW1iZXIoa2V5KSA+PSAxNiAmJiBOdW1iZXIoa2V5KSA8PSAyMCkgfHxcblx0XHRcdFx0XHRcdFx0KE51bWJlcihrZXkpID49IDkxICYmIE51bWJlcihrZXkpIDw9IDkzKSB8fFxuXHRcdFx0XHRcdFx0XHRrZXkgPT09IDE0NFxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0Ly8gSWdub3JlIGNvbnRyb2wga2V5czogY3RybCwgc2hpZnQsIGFsdCwgYWx0IGdyLCBjYXBzIGxvY2ssIHdpbmRvd3MvYXBwbGUgY21kIGtleXMsIG51bSBsb2NrLiBPbmx5IHRoZSB3aW5kb3dzIGtleXNcblx0XHRcdFx0XHRcdC8vIHRlcm1pbmF0ZSBJTUUgKGFwcGxlIGNtZCBkb2Vzbid0KSwgYnV0IHRoZXkgYWxzbyBjYXVzZSBhIGJsdXIsIHNvIGl0J3MgT0sgdG8gaWdub3JlIHRoZW0gaGVyZS5cblx0XHRcdFx0XHRcdC8vIE5vdGU6IFNhZmFyaSA0ICg1MzAuMTcpIHByb3BhZ2F0ZXMgRVNDIG91dCBvZiBhbiBJTUUgY29tcG9zaXRpb24gKG9ic2VydmVkIGF0IGxlYXN0IG9uIFdpbiBYUCkuXG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoc2VsZi5pbWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBIYW5kbGUgcmV0dXJuIGV4cGxpY2l0bHksIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiB0byBiZSBhYmxlIHRvIGNoZWNrIGZvciBjdHJsXG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gUkVUKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5hY2NlcHQoZXZlbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBJbmhpYml0IGRlZmF1bHQgYmVoYXZpb3Igb2YgRVNDIChyZXZlcnQgdG8gbGFzdCByZWFsIGlucHV0IGluIEZGOiB3ZSBkbyB0aGF0IG91cnNlbHZlcylcblx0XHRcdFx0XHRyZXR1cm4ga2V5ID09PSBFU0MgPyBldnRLaWxsKGV2ZW50KSA6IHRydWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBBbmQgaGFuZGxlIGNvbnRpbnVlZCBwcmVzc2luZyBvZiBhcnJvdyBrZXlzXG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRzZWxmLmtleUNvdW50Kys7XG5cdFx0XHRcdFx0cmV0dXJuIHNlbGYucHJvY2Vzc0tleShldmVudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuXHRcdFx0XHRcdG1ha2VBY3RpdmUoc2VsZik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBEb24ndCB0ZXN0IGZvciB0ZXh0LnNlbGVjdGlvblN0YXJ0IGJlaW5nIGRlZmluZWQ7XG5cdFx0XHRcdCQodGV4dCkub24oJ2JsdXInLCB0aGlzLnNhdmVWaWV3LmJpbmQodGhpcykpO1xuXHRcdFx0XHQvLyBET00gTGV2ZWwgMyBJTUUgaGFuZGxpbmdcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBTZXR0aW5nIGxhc3RLZXkgPSBJTUUgcHJvdmlkZXMgYSBmYWtlIGtleURvd24gZm9yIEdlY2tvJ3Mgc2luZ2xlIGtleVVwIGFmdGVyIGEgY21wb3NpdGlvbi4gSWYgd2UgZGlkbid0IGRvIHRoaXMsXG5cdFx0XHRcdFx0Ly8gY2FuY2VsbGluZyBhIGNvbXBvc2l0aW9uIHZpYSBFU0Mgd291bGQgYWxzbyBjYW5jZWwgYW5kIGNsb3NlIHRoZSB3aG9sZSBjYXRlZ29yeSBpbnB1dCBlZGl0b3IuXG5cdFx0XHRcdFx0JCh0ZXh0KS5vbignY29tcG9zaXRpb25zdGFydCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IElNRTtcblx0XHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuaXNDb21wb3NpdGlvblN0YXJ0ID0gdHJ1ZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKHRleHQpLm9uKCdjb21wb3NpdGlvbmVuZCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IElNRTtcblx0XHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRzZWxmLmlzQ29tcG9zaXRpb25TdGFydCA9IGZhbHNlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQodGV4dCkub24oJ3RleHRJbnB1dCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRpZiAoc2VsZi5pc0NvbXBvc2l0aW9uU3RhcnQpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c2VsZi5pbnZva2VTdWdnZXN0aW9ucyhmYWxzZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIEp1c3QgaW4gY2FzZSBzb21lIGJyb3dzZXJzIG1pZ2h0IHByb2R1Y2UgZXhjZXB0aW9ucyB3aXRoIHRoZXNlIERPTSBMZXZlbCAzIGV2ZW50c1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQodGV4dCkub24oJ2JsdXInLCAoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi51c2VzQ29tcG9zaXRpb24gPSBmYWxzZTtcblx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdFx0XHR0aGlzLmljb24gPSBtYWtlKCdpbWcnKTtcblx0XHRcdGxldCBsaXN0OiBIVE1MU2VsZWN0RWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdGxpc3QgPSBtYWtlKCdzZWxlY3QnKTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRpZiAoc2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UoZmFsc2UsIHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCkpIHtcblx0XHRcdFx0XHRcdHNlbGYuYWNjZXB0KGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKTtcblx0XHRcdFx0XHRzZWxmLnRleHQhLmZvY3VzKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5OiBzdHJpbmcgfCBudW1iZXIgPSBldmVudC5rZXkgfHwgMDtcblx0XHRcdFx0XHRpZiAoa2V5ID09PSBFU0MpIHtcblx0XHRcdFx0XHRcdHNlbGYucmVzZXRLZXlTZWxlY3Rpb24oKTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dCEuZm9jdXMoKTtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9LCBIQy5zdWdnZXN0X2RlbGF5KTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGtleSA9PT0gUkVUKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmFjY2VwdChldmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKCFIQy5maXhlZF9zZWFyY2gpIHtcblx0XHRcdFx0XHRjb25zdCBlbmdpbmVTZWxlY3RvciA9IG1ha2UoJ3NlbGVjdCcpO1xuXHRcdFx0XHRcdGZvciAoY29uc3Qga2V5IGluIHN1Z2dlc3Rpb25Db25maWdzKSB7XG5cdFx0XHRcdFx0XHRpZiAoc3VnZ2VzdGlvbkNvbmZpZ3Nba2V5XSEuc2hvdykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBvcHQgPSBtYWtlKCdvcHRpb24nKTtcblx0XHRcdFx0XHRcdFx0b3B0LnZhbHVlID0ga2V5O1xuXHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSB0aGlzLmVuZ2luZSkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdC5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0b3B0LmFwcGVuZChtYWtlKHN1Z2dlc3Rpb25Db25maWdzW2tleV0hLm5hbWUsIHRydWUpKTtcblx0XHRcdFx0XHRcdFx0ZW5naW5lU2VsZWN0b3IuYXBwZW5kKG9wdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVuZ2luZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuZW5naW5lID0gc2VsZi5lbmdpbmVTZWxlY3RvciEub3B0aW9uc1tzZWxmLmVuZ2luZVNlbGVjdG9yIS5zZWxlY3RlZEluZGV4XSEudmFsdWU7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHQhLmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UodHJ1ZSwgdHJ1ZSk7IC8vIERvbid0IGF1dG9jb21wbGV0ZSwgZm9yY2UgcmUtZGlzcGxheSBvZiBsaXN0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3RvciA9IGVuZ2luZVNlbGVjdG9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3QgPSBsaXN0O1xuXHRcdFx0Ly8gRG8gbm90IHVzZSB0eXBlICdzdWJtaXQnOyB3ZSBjYW5ub3QgZGV0ZWN0IG1vZGlmaWVyIGtleXMgaWYgd2UgZG9cblx0XHRcdGNvbnN0IE9LID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdE9LLnR5cGUgPSAnYnV0dG9uJztcblx0XHRcdE9LLnZhbHVlID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtb2snKTtcblx0XHRcdE9LLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY2NlcHQuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLm9rID0gT0s7XG5cdFx0XHRjb25zdCBjYW5jZWwgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0Y2FuY2VsLnR5cGUgPSAnYnV0dG9uJztcblx0XHRcdGNhbmNlbC52YWx1ZSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhbmNlbCcpO1xuXHRcdFx0Y2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLmNhbmNlbEJ1dHRvbiA9IGNhbmNlbDtcblx0XHRcdGNvbnN0IHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRzcGFuLmNsYXNzTmFtZSA9ICdob3RjYXRpbnB1dCc7XG5cdFx0XHRzcGFuLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcblx0XHRcdHNwYW4uYXBwZW5kKHRleHQpO1xuXHRcdFx0c3Bhbi5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG5cdFx0XHRpZiAobGlzdCkge1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaXN0KTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMuZW5naW5lU2VsZWN0b3IpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMuaWNvbik7XG5cdFx0XHR9XG5cdFx0XHRzcGFuLmFwcGVuZChPSyk7XG5cdFx0XHRzcGFuLmFwcGVuZChjYW5jZWwpO1xuXHRcdFx0Zm9ybS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0aGlzLnNwYW4uYXBwZW5kKGZvcm0pO1xuXHRcdH1cblx0XHRkaXNwbGF5KGV2ZW50PzogSG90Q2F0VUlFdmVudCk6IGZhbHNlIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkgJiYgIW9uVXBsb2FkICYmIHRoaXMubGluZSkge1xuXHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IodGhpcy5saW5lLCBudWxsLCB0aGlzLnNwYW4sIHRydWUpOyAvLyBDcmVhdGUgYSBuZXcgb25lXG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNvbW1pdEJ1dHRvbiAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgIT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMuZm9ybSkge1xuXHRcdFx0XHR0aGlzLm1ha2VGb3JtKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLmxhc3RTYXZlZEhpZGRlbjtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMubGFzdFNhdmVkS2V5O1xuXHRcdFx0dGhpcy5pY29uIS5zcmMgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyBIQy5leGlzdHNZZXMgOiBIQy5leGlzdHNObztcblx0XHRcdHRoaXMudGV4dCEudmFsdWUgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeSArICh0aGlzLmN1cnJlbnRLZXkgPT09IG51bGwgPyAnJyA6IGB8JHt0aGlzLmN1cnJlbnRLZXl9YCk7XG5cdFx0XHR0aGlzLm9yaWdpbmFsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0aGlzLmN1cnJlbnRFeGlzdHM7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEID8gT1BFTiA6IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0dGhpcy5sYXN0U2VsZWN0aW9uID0ge1xuXHRcdFx0XHRzdGFydDogdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoLFxuXHRcdFx0XHRlbmQ6IHRoaXMuY3VycmVudENhdGVnb3J5Lmxlbmd0aCxcblx0XHRcdH07XG5cdFx0XHR0aGlzLnNob3dzTGlzdCA9IGZhbHNlO1xuXHRcdFx0Ly8gRGlzcGxheSB0aGUgZm9ybVxuXHRcdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuZm9ybSEuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHRcdFx0dGhpcy5vayEuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdC8vIEtpbGwgdGhlIGV2ZW50IGJlZm9yZSBmb2N1c2luZywgb3RoZXJ3aXNlIElFIHdpbGwga2lsbCB0aGUgb25mb2N1cyBldmVudCFcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0dGhpcy50ZXh0IS5mb2N1cygpO1xuXHRcdFx0dGhpcy50ZXh0IS5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRzaG93KGV2ZW50OiBIb3RDYXRVSUV2ZW50IHwgdW5kZWZpbmVkLCBlbmdpbmU/OiBzdHJpbmcsIHJlYWRPbmx5PzogYm9vbGVhbik6IGZhbHNlIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMuZGlzcGxheShldmVudCk7XG5cdFx0XHRjb25zdCB2ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50ZXh0IS5yZWFkT25seSA9ICEhcmVhZE9ubHk7XG5cdFx0XHR0aGlzLmVuZ2luZSA9IGVuZ2luZSA/PyAnJztcblx0XHRcdHRoaXMudGV4dGNoYW5nZShmYWxzZSwgdHJ1ZSk7IC8vIGRvIGF1dG9jb21wbGV0aW9uLCBmb3JjZSBkaXNwbGF5IG9mIHN1Z2dlc3Rpb25zXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRvcGVuKGV2ZW50PzogSG90Q2F0VUlFdmVudCk6IGZhbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsIHRoaXMuZW5naW5lICYmIHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXSEudGVtcCA/IEhDLnN1Z2dlc3Rpb25zIDogdGhpcy5lbmdpbmUpO1xuXHRcdH1cblx0XHRkb3duKGV2ZW50PzogSG90Q2F0VUlFdmVudCk6IGZhbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsICdzdWJjYXQnLCB0cnVlKTtcblx0XHR9XG5cdFx0dXAoZXZlbnQ/OiBIb3RDYXRVSUV2ZW50KTogZmFsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgJ3BhcmVudGNhdCcpO1xuXHRcdH1cblx0XHRjYW5jZWwoKTogdm9pZCB7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5ICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpOyAvLyBXZSBhZGRlZCBhIG5ldyBhZGRlciB3aGVuIG9wZW5pbmdcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQ2xvc2UsIHJlLWRpc3BsYXkgbGlua1xuXHRcdFx0dGhpcy5pbmFjdGl2YXRlKCk7XG5cdFx0XHR0aGlzLmZvcm0hLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLmxhc3RTYXZlZEtleTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMubGFzdFNhdmVkRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5sYXN0U2F2ZWRIaWRkZW47XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSAmJiB0aGlzLmN1cnJlbnRLZXkubGVuZ3RoID4gMCA/IHRoaXMuY3VycmVudEtleSA6ICcnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rIS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9XG5cdFx0cmVtb3ZlRWRpdG9yKCk6IHZvaWQge1xuXHRcdFx0aWYgKCFuZXdET00pIHtcblx0XHRcdFx0Y29uc3QgbmV4dCA9IHRoaXMuc3Bhbi5uZXh0U2libGluZztcblx0XHRcdFx0aWYgKG5leHQpIHtcblx0XHRcdFx0XHRuZXh0LnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zcGFuICYmIHRoaXMuc3Bhbi5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3Bhbi5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWRpdG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoZWRpdG9yc1tpXSA9PT0gdGhpcykge1xuXHRcdFx0XHRcdGVkaXRvcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9XG5cdFx0cm9sbGJhY2soZXZlbnQ/OiBIb3RDYXRVSUV2ZW50KTogZmFsc2Uge1xuXHRcdFx0dGhpcy51bmRvTGluayEucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLnVuZG9MaW5rID0gbnVsbDtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMubGFzdFNhdmVkS2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMubGFzdFNhdmVkRXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdHRoaXMuc3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHRpZiAoIXRoaXMuY3VycmVudENhdGVnb3J5IHx8IHRoaXMuY3VycmVudENhdGVnb3J5Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHQvLyBJdCB3YXMgYSBuZXdseSBhZGRlZCBjYXRlZ29yeS4gUmVtb3ZlIHRoZSB3aG9sZSBlZGl0b3IuXG5cdFx0XHRcdHRoaXMucmVtb3ZlRWRpdG9yKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBSZWRpc3BsYXkgdGhlIGxpbmsuLi5cblx0XHRcdFx0dGhpcy5jYXRMaW5rIS5maXJzdENoaWxkIS5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rIS5hcHBlbmQobWFrZSh0aGlzLmN1cnJlbnRDYXRlZ29yeSwgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmshLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3RoaXMuY3VycmVudENhdGVnb3J5fWApO1xuXHRcdFx0XHR0aGlzLmNhdExpbmshLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmshLmNsYXNzTmFtZSA9IHRoaXMuY3VycmVudEV4aXN0cyA/ICcnIDogJ25ldyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluayEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdFx0aWYgKHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHR9XG5cdFx0aW5hY3RpdmF0ZSgpOiB2b2lkIHtcblx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlzX2FjdGl2ZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRhY2NlcHRDaGVjayhkb250Q2hlY2s/OiBib29sZWFuKTogYm9vbGVhbiB7XG5cdFx0XHR0aGlzLnNhbml0aXplSW5wdXQoKTtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy50ZXh0IS52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0bGV0IGtleTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdFx0XHRpZiAodmFsdWUubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRrZXkgPSB2YWx1ZVsxXSE7XG5cdFx0XHR9XG5cdFx0XHRsZXQgdiA9IHZhbHVlWzBdIS5yZXBsYWNlKC9fL2csICcgJykudHJpbSgpO1xuXHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMpIHtcblx0XHRcdFx0diA9IGNhcGl0YWxpemUodik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHY7XG5cdFx0XHR2ID0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0IWRvbnRDaGVjayAmJlxuXHRcdFx0XHQoKGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHYgPT09IGNvbmYud2dUaXRsZSkgfHwgKEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB2O1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0ga2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5pbnB1dEV4aXN0cztcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRhY2NlcHQoZXZlbnQ/OiBIb3RDYXRVSUV2ZW50KTogZmFsc2Uge1xuXHRcdFx0Ly8gKGV2dEtleXMoZXZlbnQpICYgMSkgIT09IDBcblx0XHRcdC8vIOW9k+S4lOS7heW9k2V2dEtleXMoZXZlbnQp5Li6MeaXtu+8jOaVtOS4quWIpOWIq+W8j+aJjeS4unRydWVcblx0XHRcdHRoaXMubm9Db21taXQgPSBldnRLZXlzKGV2ZW50KSA9PT0gMTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0aWYgKHRoaXMuYWNjZXB0Q2hlY2soKSkge1xuXHRcdFx0XHRjb25zdCB0b1Jlc29sdmUgPSBbdGhpc107XG5cdFx0XHRcdHJlc29sdmVNdWx0aSh0b1Jlc29sdmUsIChyZXNvbHZlZCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGVkaXRvciA9IHJlc29sdmVkWzBdITtcblx0XHRcdFx0XHRpZiAoZWRpdG9yLmRhYikge1xuXHRcdFx0XHRcdFx0c2hvd0RhYihlZGl0b3IpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZWRpdG9yLmFjY2VwdENoZWNrKHRydWUpKSB7XG5cdFx0XHRcdFx0XHRlZGl0b3IuY29tbWl0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdGNsb3NlKCk6IHZvaWQge1xuXHRcdFx0aWYgKCF0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0Ly8gQ3JlYXRlIGEgY2F0TGlua1xuXHRcdFx0XHR0aGlzLmNhdExpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5hcHBlbmQobWFrZSgnZm9vJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0dGhpcy5zcGFuLmluc2VydEJlZm9yZSh0aGlzLmNhdExpbmssIHRoaXMuc3Bhbi5maXJzdENoaWxkIS5uZXh0U2libGluZyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNhdExpbmsuZmlyc3RDaGlsZCEucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLmNhdExpbmsuYXBwZW5kKG1ha2UodGhpcy5jdXJyZW50Q2F0ZWdvcnksIHRydWUpKTtcblx0XHRcdHRoaXMuY2F0TGluay5ocmVmID0gd2lraVBhZ2VQYXRoKGAke0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0aGlzLmN1cnJlbnRDYXRlZ29yeX1gKTtcblx0XHRcdHRoaXMuY2F0TGluay5jbGFzc05hbWUgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICduZXcnO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLmN1cnJlbnRLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMuY3VycmVudEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5jdXJyZW50SGlkZGVuO1xuXHRcdFx0Ly8gQ2xvc2UgZm9ybSBhbmQgcmVkaXNwbGF5IGNhdGVnb3J5XG5cdFx0XHR0aGlzLmluYWN0aXZhdGUoKTtcblx0XHRcdHRoaXMuZm9ybSEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSB8fCAnJztcblx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5KSB7XG5cdFx0XHRcdGlmIChvblVwbG9hZCAmJiB0aGlzLmxpbmUpIHtcblx0XHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IodGhpcy5saW5lLCBudWxsLCB0aGlzLnNwYW4sIHRydWUpOyAvLyBDcmVhdGUgYSBuZXcgb25lXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubGlua1NwYW4ucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMubWFrZUxpbmtTcGFuKCk7XG5cdFx0XHRcdHRoaXMuc3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMudW5kb0xpbmspIHtcblx0XHRcdFx0Ly8gQXBwZW5kIGFuIHVuZG8gbGluay5cblx0XHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJvbGxiYWNrLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnVuZG8sIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXVuZG8nKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MhLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0dGhpcy51bmRvTGluayA9IHNwYW47XG5cdFx0XHRcdGlmICghb25VcGxvYWQpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHMgPyAnJyA6ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRUQ7XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9XG5cdFx0Y29tbWl0KCk6IHZvaWQge1xuXHRcdFx0Ly8gQ2hlY2sgYWdhaW4gdG8gY2F0Y2ggcHJvYmxlbSBjYXNlcyBhZnRlciByZWRpcmVjdCByZXNvbHV0aW9uXG5cdFx0XHRpZiAoXG5cdFx0XHRcdCh0aGlzLmN1cnJlbnRDYXRlZ29yeSA9PT0gdGhpcy5vcmlnaW5hbENhdGVnb3J5ICYmXG5cdFx0XHRcdFx0KHRoaXMuY3VycmVudEtleSA9PT0gdGhpcy5vcmlnaW5hbEtleSB8fFxuXHRcdFx0XHRcdFx0KHRoaXMuY3VycmVudEtleSA9PT0gbnVsbCAmJiB0aGlzLm9yaWdpbmFsS2V5IS5sZW5ndGggPT09IDApKSkgfHxcblx0XHRcdFx0KGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHRoaXMuY3VycmVudENhdGVnb3J5ID09PSBjb25mLndnVGl0bGUpIHx8XG5cdFx0XHRcdChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QodGhpcy5jdXJyZW50Q2F0ZWdvcnkpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlLCBzZWxmKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlbW92ZShldmVudD86IEhvdENhdFVJRXZlbnQpOiBmYWxzZSB7XG5cdFx0XHQvLyAoZXZ0S2V5cyhldmVudCkgJiAxKVxuXHRcdFx0Ly8g5b2T5LiU5LuF5b2TZXZ0S2V5cyhldmVudCnkuLox5pe277yM5pW05Liq5Yik5Yir5byP5omN5Li6Me+8jOWQpuWImemDveaYrzBcblx0XHRcdHRoaXMuZG9SZW1vdmUoZXZ0S2V5cyhldmVudCkgPT09IDEpO1xuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHRkb1JlbW92ZShub0NvbW1pdD86IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdFx0Ly8gRW1wdHkgaW5wdXQgb24gYWRkaW5nIGEgbmV3IGNhdGVnb3J5XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rIS50aXRsZSA9ICcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmshLnN0eWxlLmNzc1RleHQgKz0gJzsgdGV4dC1kZWNvcmF0aW9uIDogbGluZS10aHJvdWdoICFpbXBvcnRhbnQ7Jztcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmshLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IERFTEVURUQ7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdHRoaXMudW5kZWxMaW5rIS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0fSBlbHNlIGlmIChvblVwbG9hZCkge1xuXHRcdFx0XHQvLyBSZW1vdmUgdGhpcyBlZGl0b3IgY29tcGxldGVseVxuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IERFTEVURUQ7XG5cdFx0XHRcdHRoaXMubm9Db21taXQgPSAhIW5vQ29tbWl0IHx8IEhDLmRlbF9uZWVkc19kaWZmO1xuXHRcdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlLCBzZWxmKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuc3RhdGUgPSBzZWxmLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXN0b3JlKGV2ZW50PzogSG90Q2F0VUlFdmVudCk6IGZhbHNlIHtcblx0XHRcdC8vIENhbiBvY2N1ciBvbmx5IGlmIHdlIGRvIGhhdmUgYSBjb21taXQgYnV0dG9uIGFuZCBhcmUgbm90IG9uIHRoZSB1cGxvYWQgZm9ybVxuXHRcdFx0dGhpcy5jYXRMaW5rIS50aXRsZSA9IHRoaXMuY3VycmVudEtleSB8fCAnJztcblx0XHRcdHRoaXMuY2F0TGluayEuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluayEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rIS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5vcm1hbExpbmtzIS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR0aGlzLnVuZGVsTGluayEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHQvLyBJbnRlcm5hbCBvcGVyYXRpb25zXG5cdFx0c2VsZWN0RW5naW5lKGVuZ2luZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0aWYgKCF0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmdpbmVTZWxlY3Rvci5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iub3B0aW9uc1tpXSEuc2VsZWN0ZWQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbaV0hLnZhbHVlID09PSBlbmdpbmVOYW1lO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzYW5pdGl6ZUlucHV0KCk6IHZvaWQge1xuXHRcdFx0bGV0IHYgPSB0aGlzLnRleHQhLnZhbHVlIHx8ICcnO1xuXHRcdFx0diA9IHYucmVwbGFjZSgvXihcXHN8XykrLywgJycpOyAvLyBUcmltIGxlYWRpbmcgYmxhbmtzIGFuZCB1bmRlcnNjb3Jlc1xuXHRcdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGBeKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRpZiAocmUudGVzdCh2KSkge1xuXHRcdFx0XHR2ID0gdi5zbGljZShNYXRoLm1heCgwLCB2LmluZGV4T2YoJzonKSArIDEpKS5yZXBsYWNlKC9eKFxcc3xfKSsvLCAnJyk7XG5cdFx0XHR9XG5cdFx0XHR2ID0gdi5yZXBsYWNlKC9cXHUyMDBFJC8sICcnKTsgLy8gVHJpbSBlbmRpbmcgbGVmdC10by1yaWdodCBtYXJrXG5cdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcykge1xuXHRcdFx0XHR2ID0gY2FwaXRhbGl6ZSh2KTtcblx0XHRcdH1cblx0XHRcdC8vIE9ubHkgdXBkYXRlIHRoZSBpbnB1dCBmaWVsZCBpZiB0aGVyZSBpcyBhIGRpZmZlcmVuY2UuIFZhcmlvdXMgYnJvd3NlcnMgb3RoZXJ3aXNlXG5cdFx0XHQvLyByZXNldCB0aGUgc2VsZWN0aW9uIGFuZCBjdXJzb3IgcG9zaXRpb24gYWZ0ZXIgZWFjaCB2YWx1ZSByZS1hc3NpZ25tZW50LlxuXHRcdFx0aWYgKHRoaXMudGV4dCEudmFsdWUgIT09IG51bGwgJiYgdGhpcy50ZXh0IS52YWx1ZSAhPT0gdikge1xuXHRcdFx0XHR0aGlzLnRleHQhLnZhbHVlID0gdjtcblx0XHRcdH1cblx0XHR9XG5cdFx0bWFrZUNhbGwoXG5cdFx0XHR1cmw6IHN0cmluZyxcblx0XHRcdGNhbGxiYWNrT2JqOiBIb3RDYXRTdWdnZXN0aW9uQ2FsbGJhY2ssXG5cdFx0XHRlbmdpbmU6IEhvdENhdFN1Z2dlc3Rpb25FbmdpbmUsXG5cdFx0XHRxdWVyeUtleTogc3RyaW5nLFxuXHRcdFx0Y2xlYW5LZXk6IHN0cmluZ1xuXHRcdCk6IHZvaWQge1xuXHRcdFx0bGV0IGNiOiBIb3RDYXRTdWdnZXN0aW9uQ2FsbGJhY2sgfCBudWxsID0gY2FsbGJhY2tPYmo7XG5cdFx0XHRjb25zdCBlID0gZW5naW5lO1xuXHRcdFx0Y29uc3QgdiA9IHF1ZXJ5S2V5O1xuXHRcdFx0Y29uc3QgeiA9IGNsZWFuS2V5O1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRjb25zdCBkb25lID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRjYiEuY2FsbHNNYWRlKys7XG5cdFx0XHRcdGlmIChjYiEuY2FsbHNNYWRlID09PSBjYiEubm9mQ2FsbHMpIHtcblx0XHRcdFx0XHRpZiAoY2IhLmV4aXN0cykge1xuXHRcdFx0XHRcdFx0Y2IhLmFsbFRpdGxlcyEuZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNiIS5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0XHRjYiEuYWxsVGl0bGVzIS5ub3JtYWxpemVkID0gY2IhLm5vcm1hbGl6ZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IHN1Z2dlc3Rpb25Db25maWcgPSBzdWdnZXN0aW9uQ29uZmlnc1tjYiEuZW5naW5lTmFtZV0hO1xuXHRcdFx0XHRcdGlmICghY2IhLmRvbnRDYWNoZSAmJiAhc3VnZ2VzdGlvbkNvbmZpZy5jYWNoZVt6XSkge1xuXHRcdFx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZy5jYWNoZVt6XSA9IGNiIS5hbGxUaXRsZXMhO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzZWxmLnRleHQhLnJlYWRPbmx5ID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKCFjYiEuY2FuY2VsbGVkKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnNob3dTdWdnZXN0aW9ucyhjYiEuYWxsVGl0bGVzLCBjYiEubm9Db21wbGV0aW9uLCB2LCBjYiEuZW5naW5lTmFtZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjYiA9PT0gc2VsZi5jYWxsYmFja09iaikge1xuXHRcdFx0XHRcdFx0c2VsZi5jYWxsYmFja09iaiA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNiID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdCQuZ2V0SlNPTih1cmwsIChqc29uKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlcyA9IGUuaGFuZGxlcihqc29uLCB6KTtcblx0XHRcdFx0aWYgKHRpdGxlcyAmJiB0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNiIS5hbGxUaXRsZXMgPSBjYiEuYWxsVGl0bGVzID09PSBudWxsID8gdGl0bGVzIDogWy4uLmNiIS5hbGxUaXRsZXNdLmNvbmNhdCh0aXRsZXMpO1xuXHRcdFx0XHRcdGlmICh0aXRsZXMuZXhpc3RzKSB7XG5cdFx0XHRcdFx0XHRjYiEuZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRpdGxlcy5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0XHRjYiEubm9ybWFsaXplZCA9IHRpdGxlcy5ub3JtYWxpemVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRkb25lKCk7XG5cdFx0XHR9KS5mYWlsKChyZXEpID0+IHtcblx0XHRcdFx0aWYgKCFyZXEpIHtcblx0XHRcdFx0XHRub1N1Z2dlc3Rpb25zID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYiEuZG9udENhY2hlID0gdHJ1ZTtcblx0XHRcdFx0ZG9uZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHRleHRjaGFuZ2UoZG9udF9hdXRvY29tcGxldGU/OiBib29sZWFuLCBmb3JjZT86IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRcdC8vIEhpZGUgYWxsIG90aGVyIGxpc3RzXG5cdFx0XHRtYWtlQWN0aXZlKHRoaXMpO1xuXHRcdFx0Ly8gQWJvcnQgaWYgaXNDb21wb3NpdGlvblN0YXJ0XG5cdFx0XHRpZiAodGhpcy5pc0NvbXBvc2l0aW9uU3RhcnQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gR2V0IGlucHV0IHZhbHVlLCBvbWl0IHNvcnQga2V5LCBpZiBhbnlcblx0XHRcdHRoaXMuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0bGV0IHYgPSB0aGlzLnRleHQhLnZhbHVlO1xuXHRcdFx0Ly8gRGlzcmVnYXJkIGFueXRoaW5nIGFmdGVyIGEgcGlwZS5cblx0XHRcdGNvbnN0IHBpcGUgPSB2LmluZGV4T2YoJ3wnKTtcblx0XHRcdGlmIChwaXBlID09PSAtMSkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdi5zbGljZShNYXRoLm1heCgwLCBwaXBlICsgMSkpO1xuXHRcdFx0XHR2ID0gdi5zbGljZSgwLCBNYXRoLm1heCgwLCBwaXBlKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQgPT09IHYgJiYgIWZvcmNlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gLy8gTm8gY2hhbmdlXG5cdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQgIT09IHYpIHtcblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHY7XG5cdFx0XHR0aGlzLmxhc3RSZWFsSW5wdXQgPSB2O1xuXHRcdFx0Ly8gTWFyayBibGFja2xpc3RlZCBpbnB1dHMuXG5cdFx0XHR0aGlzLm9rIS5kaXNhYmxlZCA9IHYubGVuZ3RoID4gMCAmJiAhIUhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KTtcblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdC8vIE5vIEFqYXg6IGp1c3QgbWFrZSBzdXJlIHRoZSBsaXN0IGlzIGhpZGRlblxuXHRcdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhbXSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCBjbGVhbktleSA9IHYucmVwbGFjZSgvW1xcdTIwMEVcXHUyMDBGXFx1MjAyQS1cXHUyMDJFXS9nLCAnJykucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsICcgJyk7XG5cdFx0XHRjbGVhbktleSA9IHJlcGxhY2VTaG9ydGN1dHMoY2xlYW5LZXksIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRjbGVhbktleSA9IGNsZWFuS2V5LnRyaW0oKTtcblx0XHRcdGlmIChjbGVhbktleS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoW10pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5jYWxsYmFja09iaikge1xuXHRcdFx0XHR0aGlzLmNhbGxiYWNrT2JqLmNhbmNlbGxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBlbmdpbmVOYW1lID0gc3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdID8gdGhpcy5lbmdpbmUgOiAnY29tYmluZWQnO1xuXHRcdFx0ZG9udF9hdXRvY29tcGxldGUgfHw9IHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdIS5ub0NvbXBsZXRpb247XG5cdFx0XHRjb25zdCBjYWNoZWRUaXRsZXMgPSBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSEuY2FjaGVbY2xlYW5LZXldO1xuXHRcdFx0aWYgKGNhY2hlZFRpdGxlcykge1xuXHRcdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhjYWNoZWRUaXRsZXMsIGRvbnRfYXV0b2NvbXBsZXRlLCB2LCBlbmdpbmVOYW1lKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qge2VuZ2luZXN9ID0gc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0hO1xuXHRcdFx0dGhpcy5jYWxsYmFja09iaiA9IHtcblx0XHRcdFx0YWxsVGl0bGVzOiBudWxsLFxuXHRcdFx0XHRjYWxsc01hZGU6IDAsXG5cdFx0XHRcdG5vZkNhbGxzOiBlbmdpbmVzLmxlbmd0aCxcblx0XHRcdFx0bm9Db21wbGV0aW9uOiBkb250X2F1dG9jb21wbGV0ZSxcblx0XHRcdFx0ZW5naW5lTmFtZSxcblx0XHRcdH07XG5cdFx0XHR0aGlzLm1ha2VDYWxscyhlbmdpbmVzLCB0aGlzLmNhbGxiYWNrT2JqLCB2LCBjbGVhbktleSk7XG5cdFx0fVxuXHRcdG1ha2VDYWxscyhlbmdpbmVzOiBzdHJpbmdbXSwgY2I6IEhvdENhdFN1Z2dlc3Rpb25DYWxsYmFjaywgdjogc3RyaW5nLCBjbGVhbktleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHRmb3IgKGNvbnN0IGVuZ2luZV8gb2YgZW5naW5lcykge1xuXHRcdFx0XHRjb25zdCBlbmdpbmUgPSBzdWdnZXN0aW9uRW5naW5lc1tlbmdpbmVfXSE7XG5cdFx0XHRcdGNvbnN0IHVybCA9IGNvbmYud2dTY3JpcHRQYXRoICsgZW5naW5lLnVyaS5yZXBsYWNlKC9cXCQxL2csIGVuY29kZVVSSUNvbXBvbmVudChjbGVhbktleSkpO1xuXHRcdFx0XHR0aGlzLm1ha2VDYWxsKHVybCwgY2IsIGVuZ2luZSwgdiwgY2xlYW5LZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzaG93U3VnZ2VzdGlvbnMoXG5cdFx0XHR0aXRsZXM6IEhvdENhdFN1Z2dlc3Rpb25UaXRsZXMgfCBudWxsLFxuXHRcdFx0ZG9udEF1dG9jb21wbGV0ZT86IGJvb2xlYW4sXG5cdFx0XHRxdWVyeUtleT86IHN0cmluZyB8IG51bGwsXG5cdFx0XHRlbmdpbmVOYW1lPzogc3RyaW5nIHwgbnVsbFxuXHRcdCk6IHZvaWQge1xuXHRcdFx0dGhpcy50ZXh0IS5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5kYWIgPSBudWxsO1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRcdGlmICghdGhpcy5saXN0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIERlZmF1bHQuLi5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5lbmdpbmVOYW1lID0gZW5naW5lTmFtZSA/PyBudWxsO1xuXHRcdFx0aWYgKGVuZ2luZU5hbWUpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVOYW1lID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdGNvbnN0IGlucHV0VmFsdWUgPSB0aGlzLmxhc3RJbnB1dDtcblx0XHRcdGlmIChxdWVyeUtleSkge1xuXHRcdFx0XHRpZiAoaW5wdXRWYWx1ZS5pbmRleE9mKHF1ZXJ5S2V5KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy5sYXN0UXVlcnkgJiZcblx0XHRcdFx0XHRpbnB1dFZhbHVlLmluZGV4T2YodGhpcy5sYXN0UXVlcnkpID09PSAwICYmXG5cdFx0XHRcdFx0dGhpcy5sYXN0UXVlcnkubGVuZ3RoID4gcXVlcnlLZXkubGVuZ3RoXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0UXVlcnkgPSBxdWVyeUtleTtcblx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdGNvbnN0IHYgPSB0aGlzLnRleHQhLnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHRjb25zdCBjYXRlZ29yeU5hbWUgPSBIQy5jYXBpdGFsaXplUGFnZU5hbWVzID8gY2FwaXRhbGl6ZSh2WzBdKSA6IHZbMF0hO1xuXHRcdFx0bGV0IHZOb3JtYWxpemVkID0gY2F0ZWdvcnlOYW1lO1xuXHRcdFx0Y29uc3Qga25vd25Ub0V4aXN0ID0gdGl0bGVzICYmIHRpdGxlcy5leGlzdHM7XG5cdFx0XHRsZXQgaTogbnVtYmVyO1xuXHRcdFx0aWYgKHRpdGxlcykge1xuXHRcdFx0XHRpZiAodGl0bGVzLm5vcm1hbGl6ZWQgJiYgY2F0ZWdvcnlOYW1lLmluZGV4T2YocXVlcnlLZXkgPz8gJycpID09PSAwKSB7XG5cdFx0XHRcdFx0Ly8gV2UgZ290IGJhY2sgYSBkaWZmZXJlbnQgbm9ybWFsaXphdGlvbiB0aGFuIHdoYXQgaXMgaW4gdGhlIGlucHV0IGZpZWxkXG5cdFx0XHRcdFx0dk5vcm1hbGl6ZWQgPSB0aXRsZXMubm9ybWFsaXplZCArIGNhdGVnb3J5TmFtZS5zbGljZSgocXVlcnlLZXkgPz8gJycpLmxlbmd0aCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdkxvdyA9IHZOb3JtYWxpemVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdC8vIFN0cmlwIGJsYWNrbGlzdGVkIGNhdGVnb3JpZXNcblx0XHRcdFx0aWYgKEhDLmJsYWNrbGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChIQy5ibGFja2xpc3QudGVzdCh0aXRsZXNbaV0hKSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRpdGxlcy5zb3J0KChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdGlmIChhID09PSBiKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGEuaW5kZXhPZihiKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGEgYmVnaW5zIHdpdGggYjogYSA+IGJcblx0XHRcdFx0XHRpZiAoYi5pbmRleE9mKGEpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGIgYmVnaW5zIHdpdGggYTogYSA8IGJcblx0XHRcdFx0XHQvLyBPcGVuc2VhcmNoIG1heSByZXR1cm4gc3R1ZmYgbm90IGJlZ2lubmluZyB3aXRoIHRoZSBzZWFyY2ggcHJlZml4IVxuXHRcdFx0XHRcdGxldCBwcmVmaXhNYXRjaEEgPSBhLmluZGV4T2Yodk5vcm1hbGl6ZWQpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0bGV0IHByZWZpeE1hdGNoQiA9IGIuaW5kZXhPZih2Tm9ybWFsaXplZCkgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRpZiAocHJlZml4TWF0Y2hBICE9PSBwcmVmaXhNYXRjaEIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVmaXhNYXRjaEIgLSBwcmVmaXhNYXRjaEE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIENhc2UtaW5zZW5zaXRpdmUgcHJlZml4IG1hdGNoIVxuXHRcdFx0XHRcdGNvbnN0IGFMb3cgPSBhLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0Y29uc3QgYkxvdyA9IGIudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRwcmVmaXhNYXRjaEEgPSBhTG93LmluZGV4T2YodkxvdykgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRwcmVmaXhNYXRjaEIgPSBiTG93LmluZGV4T2YodkxvdykgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRpZiAocHJlZml4TWF0Y2hBICE9PSBwcmVmaXhNYXRjaEIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVmaXhNYXRjaEIgLSBwcmVmaXhNYXRjaEE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhIDwgYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYiA8IGEpIHtcblx0XHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIFJlbW92ZSBkdXBsaWNhdGVzIGFuZCBzZWxmLXJlZmVyZW5jZXNcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdChpICsgMSA8IHRpdGxlcy5sZW5ndGggJiYgdGl0bGVzW2ldID09PSB0aXRsZXNbaSArIDFdKSB8fFxuXHRcdFx0XHRcdFx0KGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHRpdGxlc1tpXSA9PT0gY29uZi53Z1RpdGxlKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghdGl0bGVzIHx8IHRpdGxlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbmdpbmVOYW1lICYmIHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdICYmICFzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSEudGVtcCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHRcdHRoaXMuaWNvbi5zcmMgPSBIQy5leGlzdHNObztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFtmaXJzdFRpdGxlXSA9IHRpdGxlcztcblx0XHRcdGNvbnN0IGNvbXBsZXRlZCA9IHRoaXMuYXV0b0NvbXBsZXRlKGZpcnN0VGl0bGUhLCBjYXRlZ29yeU5hbWUsIHZOb3JtYWxpemVkLCBrZXksIGRvbnRBdXRvY29tcGxldGUpO1xuXHRcdFx0Y29uc3QgZXhpc3RpbmcgPSBjb21wbGV0ZWQgfHwga25vd25Ub0V4aXN0IHx8IGZpcnN0VGl0bGUgPT09IHJlcGxhY2VTaG9ydGN1dHMoY2F0ZWdvcnlOYW1lLCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0aWYgKGVuZ2luZU5hbWUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0gJiYgIXN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdIS50ZW1wKSB7XG5cdFx0XHRcdHRoaXMuaWNvbiEuc3JjID0gZXhpc3RpbmcgPyBIQy5leGlzdHNZZXMgOiBIQy5leGlzdHNObztcblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9ICEhZXhpc3Rpbmc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY29tcGxldGVkKSB7XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gZmlyc3RUaXRsZSE7XG5cdFx0XHRcdGlmICh0aXRsZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyAoUmUtKWZpbGwgdGhlIGxpc3Rcblx0XHRcdHdoaWxlICh0aGlzLmxpc3QuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHR0aGlzLmxpc3QuZmlyc3RDaGlsZC5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3B0ID0gbWFrZSgnb3B0aW9uJyk7XG5cdFx0XHRcdG9wdC5hcHBlbmQobWFrZSh0aXRsZXNbaV0hLCB0cnVlKSk7XG5cdFx0XHRcdG9wdC5zZWxlY3RlZCA9IGNvbXBsZXRlZCAmJiBpID09PSAwO1xuXHRcdFx0XHR0aGlzLmxpc3QuYXBwZW5kKG9wdCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRpc3BsYXlMaXN0KCk7XG5cdFx0fVxuXHRcdGRpc3BsYXlMaXN0KCk6IHZvaWQge1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSB0cnVlO1xuXHRcdFx0aWYgKCF0aGlzLmlzX2FjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLmxpc3QhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCBub2ZJdGVtcyA9IE1hdGgubWluKHRoaXMubGlzdCEub3B0aW9ucy5sZW5ndGgsIEhDLmxpc3RTaXplKTtcblx0XHRcdGlmIChub2ZJdGVtcyA8PSAxKSB7XG5cdFx0XHRcdG5vZkl0ZW1zID0gMjtcblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdCEuc2l6ZSA9IG5vZkl0ZW1zO1xuXHRcdFx0c2V0U3R5bGVQcm9wZXJ0eSh0aGlzLmxpc3QhLCAnYWxpZ24nLCBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnKTtcblx0XHRcdHRoaXMubGlzdCEuc3R5bGUuekluZGV4ID0gJzUnO1xuXHRcdFx0dGhpcy5saXN0IS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0XHQvLyBDb21wdXRlIGluaXRpYWwgbGlzdCBwb3NpdGlvbi4gRmlyc3QgdGhlIGhlaWdodC5cblx0XHRcdGNvbnN0IGFuY2hvciA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0XHRsZXQgbGlzdGggPSAwO1xuXHRcdFx0aWYgKHRoaXMubGlzdCEuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdC8vIE9mZi1zY3JlZW4gZGlzcGxheSB0byBnZXQgdGhlIGhlaWdodFxuXHRcdFx0XHR0aGlzLmxpc3QhLnN0eWxlLnRvcCA9IGAke3RoaXMudGV4dCEub2Zmc2V0VG9wfXB4YDtcblx0XHRcdFx0dGhpcy5saXN0IS5zdHlsZVthbmNob3JdID0gJy0xMDAwMHB4Jztcblx0XHRcdFx0dGhpcy5saXN0IS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdGxpc3RoID0gdGhpcy5saXN0IS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdHRoaXMubGlzdCEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxpc3RoID0gdGhpcy5saXN0IS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0XHQvLyBBcHByb3hpbWF0ZSBjYWxjdWxhdGlvbiBvZiBtYXhpbXVtIGxpc3Qgc2l6ZVxuXHRcdFx0bGV0IG1heExpc3RIZWlnaHQgPSBsaXN0aDtcblx0XHRcdGlmIChub2ZJdGVtcyA8IEhDLmxpc3RTaXplKSB7XG5cdFx0XHRcdG1heExpc3RIZWlnaHQgPSAobGlzdGggLyBub2ZJdGVtcykgKiBIQy5saXN0U2l6ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHZpZXdwb3J0ID0gKHdoYXQ6ICdXaWR0aCcgfCAnSGVpZ2h0Jyk6IG51bWJlciA9PiB7XG5cdFx0XHRcdGNvbnN0IHMgPSBgY2xpZW50JHt3aGF0fWAgYXMgJ2NsaWVudFdpZHRoJyB8ICdjbGllbnRIZWlnaHQnO1xuXHRcdFx0XHRyZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3NdIDogMDtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBzY3JvbGxfb2Zmc2V0ID0gKHdoYXQ6ICdMZWZ0JyB8ICdUb3AnIHwgJ1dpZHRoJyk6IG51bWJlciA9PiB7XG5cdFx0XHRcdGNvbnN0IHMgPSBgc2Nyb2xsJHt3aGF0fWAgYXMgJ3Njcm9sbExlZnQnIHwgJ3Njcm9sbFRvcCcgfCAnc2Nyb2xsV2lkdGgnO1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3NdIDogMDtcblx0XHRcdFx0aWYgKGlzX3J0bCAmJiB3aGF0ID09PSAnTGVmdCcpIHtcblx0XHRcdFx0XHQvLyBSVEwgaW5jb25zaXN0ZW5jaWVzLlxuXHRcdFx0XHRcdC8vIEZGOiAwIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gaW5jcmVhc2luZ2x5IG5lZ2F0aXZlIHZhbHVlcy5cblx0XHRcdFx0XHQvLyBJRSA+PSA4OiAwIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gaW5jcmVhc2luZ2x5IHBvc2l0aXZlIHZhbHVlcy5cblx0XHRcdFx0XHQvLyBXZWJraXQ6IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggYXQgdGhlIGZhciByaWdodCwgdGhlbiBkb3duIHRvIHplcm8uXG5cdFx0XHRcdFx0Ly8gT3BlcmE6IGRvbid0IGtub3cuLi5cblx0XHRcdFx0XHRpZiAocmVzdWx0IDwgMCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gLXJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFpc193ZWJraXQpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHNjcm9sbF9vZmZzZXQoJ1dpZHRoJykgLSB2aWV3cG9ydCgnV2lkdGgnKSAtIHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gTm93IGFsbCBoYXZlIHdlYmtpdCBiZWhhdmlvciwgaS5lLiB6ZXJvIGlmIGF0IHRoZSBsZWZ0bW9zdCBlZGdlLlxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSAobm9kZTogSFRNTEVsZW1lbnQpOiB7eDogbnVtYmVyOyB5OiBudW1iZXJ9ID0+IHtcblx0XHRcdFx0Ly8gU3RyaXBwZWQtZG93biBzaW1wbGlmaWVkIHBvc2l0aW9uIGZ1bmN0aW9uLiBJdCdzIGdvb2QgZW5vdWdoIGZvciBvdXIgcHVycG9zZXMuXG5cdFx0XHRcdGNvbnN0IGJveCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0eDogTWF0aC5yb3VuZChib3gubGVmdCArIHNjcm9sbF9vZmZzZXQoJ0xlZnQnKSksXG5cdFx0XHRcdFx0eTogTWF0aC5yb3VuZChib3gudG9wICsgc2Nyb2xsX29mZnNldCgnVG9wJykpLFxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHRleHRQb3MgPSBwb3NpdGlvbih0aGlzLnRleHQhKTtcblx0XHRcdGNvbnN0IG5sID0gMDtcblx0XHRcdGxldCBudCA9IDA7XG5cdFx0XHQvLyBPcGVyYSA5LjUgc29tZWhvdyBoYXMgb2Zmc2V0V2lkdGggPSAwIGhlcmU/PyBVc2UgdGhlIG5leHQgYmVzdCB2YWx1ZS4uLlxuXHRcdFx0bGV0IG9mZnNldCA9IDA7XG5cdFx0XHRjb25zdCB0ZXh0Qm94V2lkdGggPSB0aGlzLnRleHQhLm9mZnNldFdpZHRoIHx8IHRoaXMudGV4dCEuY2xpZW50V2lkdGg7XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlLnpJbmRleCA9ICc1Jztcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3RvciEuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS53aWR0aCA9IGAke3RleHRCb3hXaWR0aH1weGA7XG5cdFx0XHRcdC8vIEZpZ3VyZSBvdXQgdGhlIGhlaWdodCBvZiB0aGlzIHNlbGVjdG9yOiBkaXNwbGF5IGl0IG9mZi1zY3JlZW4sIHRoZW4gaGlkZSBpdCBhZ2Fpbi5cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlW2FuY2hvcl0gPSAnLTEwMDAwcHgnO1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlLnRvcCA9ICcwJztcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5lbmdpbmVTZWxlY3RvciEub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5lbmdpbmVTZWxlY3RvciEub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlW2FuY2hvcl0gPSBgJHtubH1weGA7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGV4dFBvcy55IDwgbWF4TGlzdEhlaWdodCArIG9mZnNldCArIDEpIHtcblx0XHRcdFx0Ly8gVGhlIGxpc3QgbWlnaHQgZXh0ZW5kIGJleW9uZCB0aGUgdXBwZXIgYm9yZGVyIG9mIHRoZSBwYWdlLiBMZXQncyBhdm9pZCB0aGF0IGJ5IHBsYWNpbmcgaXRcblx0XHRcdFx0Ly8gYmVsb3cgdGhlIGlucHV0IHRleHQgZmllbGQuXG5cdFx0XHRcdG50ID0gdGhpcy50ZXh0IS5vZmZzZXRIZWlnaHQgKyBvZmZzZXQgKyAxO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3RvciEuc3R5bGUudG9wID0gYCR7dGhpcy50ZXh0IS5vZmZzZXRIZWlnaHR9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRudCA9IC1saXN0aCAtIG9mZnNldCAtIDE7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS50b3AgPSBgJHstKG9mZnNldCArIDEpfXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0IS5zdHlsZS50b3AgPSBgJHtudH1weGA7XG5cdFx0XHR0aGlzLmxpc3QhLnN0eWxlLndpZHRoID0gJyc7IC8vIE5vIGZpeGVkIHdpZHRoICh5ZXQpXG5cdFx0XHR0aGlzLmxpc3QhLnN0eWxlW2FuY2hvcl0gPSBgJHtubH1weGA7XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RW5naW5lKHRoaXMuZW5naW5lTmFtZSk7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdCEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHQvLyBTZXQgdGhlIHdpZHRoIG9mIHRoZSBsaXN0XG5cdFx0XHRpZiAodGhpcy5saXN0IS5vZmZzZXRXaWR0aCA8IHRleHRCb3hXaWR0aCkge1xuXHRcdFx0XHR0aGlzLmxpc3QhLnN0eWxlLndpZHRoID0gYCR7dGV4dEJveFdpZHRofXB4YDtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgdGhlIGxpc3QgaXMgd2lkZXIgdGhhbiB0aGUgdGV4dGJveDogbWFrZSBzdXJlIGl0IGZpdHMgaG9yaXpvbnRhbGx5IGludG8gdGhlIGJyb3dzZXIgd2luZG93XG5cdFx0XHRjb25zdCBzY3JvbGwgPSBzY3JvbGxfb2Zmc2V0KCdMZWZ0Jyk7XG5cdFx0XHRjb25zdCB2aWV3X3cgPSB2aWV3cG9ydCgnV2lkdGgnKTtcblx0XHRcdGxldCB3ID0gdGhpcy5saXN0IS5vZmZzZXRXaWR0aDtcblx0XHRcdGNvbnN0IGxfcG9zID0gcG9zaXRpb24odGhpcy5saXN0ISk7XG5cdFx0XHRsZXQgbGVmdCA9IGxfcG9zLng7XG5cdFx0XHRsZXQgcmlnaHQgPSBsZWZ0ICsgdztcblx0XHRcdGlmIChsZWZ0IDwgc2Nyb2xsIHx8IHJpZ2h0ID4gc2Nyb2xsICsgdmlld193KSB7XG5cdFx0XHRcdGlmICh3ID4gdmlld193KSB7XG5cdFx0XHRcdFx0dyA9IHZpZXdfdztcblx0XHRcdFx0XHR0aGlzLmxpc3QhLnN0eWxlLndpZHRoID0gYCR7d31weGA7XG5cdFx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdFx0bGVmdCA9IHJpZ2h0IC0gdztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmlnaHQgPSBsZWZ0ICsgdztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHJlbGF0aXZlX29mZnNldCA9IDA7XG5cdFx0XHRcdGlmIChsZWZ0IDwgc2Nyb2xsKSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVfb2Zmc2V0ID0gc2Nyb2xsIC0gbGVmdDtcblx0XHRcdFx0fSBlbHNlIGlmIChyaWdodCA+IHNjcm9sbCArIHZpZXdfdykge1xuXHRcdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IC0ocmlnaHQgLSBzY3JvbGwgLSB2aWV3X3cpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSAtcmVsYXRpdmVfb2Zmc2V0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZWxhdGl2ZV9vZmZzZXQpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3QhLnN0eWxlW2FuY2hvcl0gPSBgJHtubCArIHJlbGF0aXZlX29mZnNldH1weGA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0YXV0b0NvbXBsZXRlKFxuXHRcdFx0bmV3VmFsOiBzdHJpbmcsXG5cdFx0XHRhY3RWYWw6IHN0cmluZyxcblx0XHRcdG5vcm1hbGl6ZWRBY3RWYWw6IHN0cmluZyB8IG51bGwsXG5cdFx0XHRrZXk6IHN0cmluZyxcblx0XHRcdGRvbnRNb2RpZnk/OiBib29sZWFuXG5cdFx0KTogYm9vbGVhbiB7XG5cdFx0XHRpZiAobmV3VmFsID09PSBhY3RWYWwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9udE1vZGlmeSB8fCB0aGlzLmltZSB8fCAhdGhpcy5jYW5TZWxlY3QoKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB3ZSBjYW4ndCBzZWxlY3QgcHJvcGVybHkgb3IgYW4gSU1FIGNvbXBvc2l0aW9uIGlzIG9uZ29pbmcsIGF1dG9jb21wbGV0aW9uIHdvdWxkIGJlIGEgbWFqb3IgYW5ub3lhbmNlIHRvIHRoZSB1c2VyLlxuXHRcdFx0aWYgKG5ld1ZhbC5pbmRleE9mKGFjdFZhbCkpIHtcblx0XHRcdFx0Ly8gTWF5YmUgaXQnbGwgd29yayB3aXRoIHRoZSBub3JtYWxpemVkIHZhbHVlIChORkMpP1xuXHRcdFx0XHRpZiAobm9ybWFsaXplZEFjdFZhbCAmJiBuZXdWYWwuaW5kZXhPZihub3JtYWxpemVkQWN0VmFsKSA9PT0gMCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmxhc3RSZWFsSW5wdXQgPT09IGFjdFZhbCkge1xuXHRcdFx0XHRcdFx0dGhpcy5sYXN0UmVhbElucHV0ID0gbm9ybWFsaXplZEFjdFZhbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWN0VmFsID0gbm9ybWFsaXplZEFjdFZhbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIEFjdHVhbCBpbnB1dCBpcyBhIHByZWZpeCBvZiB0aGUgbmV3IHRleHQuIEZpbGwgaW4gbmV3IHRleHQsIHNlbGVjdGluZyB0aGUgbmV3bHkgYWRkZWQgc3VmZml4XG5cdFx0XHQvLyBzdWNoIHRoYXQgaXQgY2FuIGJlIGVhc2lseSByZW1vdmVkIGJ5IHR5cGluZyBiYWNrc3BhY2UgaWYgdGhlIHN1Z2dlc3Rpb24gaXMgdW53YW50ZWQuXG5cdFx0XHR0aGlzLnRleHQhLmZvY3VzKCk7XG5cdFx0XHR0aGlzLnRleHQhLnZhbHVlID0gbmV3VmFsICsga2V5O1xuXHRcdFx0dGhpcy5zZXRTZWxlY3Rpb24oYWN0VmFsLmxlbmd0aCwgbmV3VmFsLmxlbmd0aCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Y2FuU2VsZWN0KCk6IGJvb2xlYW4ge1xuXHRcdFx0cmV0dXJuICEhdGhpcy50ZXh0IS5zZXRTZWxlY3Rpb25SYW5nZSB8fCB0aGlzLnRleHQhLnNlbGVjdGlvblN0YXJ0ICE9PSBudWxsO1xuXHRcdH1cblx0XHRzZXRTZWxlY3Rpb24oZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHQvLyB0aGlzLnRleHQgbXVzdCBiZSBmb2N1c2VkIChhdCBsZWFzdCBvbiBJRSlcblx0XHRcdGlmICghdGhpcy50ZXh0IS52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRleHQhLnNldFNlbGVjdGlvblJhbmdlKGZyb20sIHRvKTtcblx0XHR9XG5cdFx0Z2V0U2VsZWN0aW9uKCk6IHtzdGFydDogbnVtYmVyOyBlbmQ6IG51bWJlcn0ge1xuXHRcdFx0bGV0IGZyb20gPSAwO1xuXHRcdFx0Ly8gdGhpcy50ZXh0IG11c3QgYmUgZm9jdXNlZCAoYXQgbGVhc3Qgb24gSUUpXG5cdFx0XHRsZXQgdG8gPSAwO1xuXHRcdFx0aWYgKCF0aGlzLnRleHQhLnZhbHVlKSB7XG5cdFx0XHRcdC8vIE5vIHRleHQuXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudGV4dCEuc2VsZWN0aW9uU3RhcnQgIT09IG51bGwpIHtcblx0XHRcdFx0ZnJvbSA9IHRoaXMudGV4dCEuc2VsZWN0aW9uU3RhcnQ7XG5cdFx0XHRcdHRvID0gdGhpcy50ZXh0IS5zZWxlY3Rpb25FbmQgPz8gdG87XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdGFydDogZnJvbSxcblx0XHRcdFx0ZW5kOiB0byxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHNhdmVWaWV3KCk6IHZvaWQge1xuXHRcdFx0dGhpcy5sYXN0U2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcblx0XHR9XG5cdFx0cHJvY2Vzc0tleShldmVudDogSG90Q2F0VUlFdmVudCk6IGJvb2xlYW4ge1xuXHRcdFx0bGV0IGRpciA9IDA7XG5cdFx0XHRzd2l0Y2ggKHRoaXMubGFzdEtleSkge1xuXHRcdFx0XHRjYXNlIFVQOlxuXHRcdFx0XHRcdGRpciA9IC0xO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIERPV046XG5cdFx0XHRcdFx0ZGlyID0gMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBQR1VQOlxuXHRcdFx0XHRcdGRpciA9IC1IQy5saXN0U2l6ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBQR0RPV046XG5cdFx0XHRcdFx0ZGlyID0gSEMubGlzdFNpemU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRVNDOlxuXHRcdFx0XHRcdC8vIEluaGliaXQgZGVmYXVsdCBiZWhhdmlvciAocmV2ZXJ0IHRvIGxhc3QgcmVhbCBpbnB1dCBpbiBGRjogd2UgZG8gdGhhdCBvdXJzZWx2ZXMpXG5cdFx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRpcikge1xuXHRcdFx0XHRpZiAodGhpcy5saXN0IS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcblx0XHRcdFx0XHQvLyBMaXN0IGlzIHZpc2libGUsIHNvIHRoZXJlIGFyZSBzdWdnZXN0aW9uc1xuXHRcdFx0XHRcdHRoaXMuaGlnaGxpZ2h0U3VnZ2VzdGlvbihkaXIpO1xuXHRcdFx0XHRcdC8vIEtpbGwgdGhlIGV2ZW50LCBvdGhlcndpc2Ugc29tZSBicm93c2VycyAoZS5nLiwgRmlyZWZveCkgbWF5IGFkZGl0aW9uYWxseSB0cmVhdCBhbiB1cC1hcnJvd1xuXHRcdFx0XHRcdC8vIGFzIFwicGxhY2UgdGhlIHRleHQgY3Vyc29yIGF0IHRoZSBmcm9udFwiLCB3aGljaCB3ZSBkb24ndCB3YW50IGhlcmUuXG5cdFx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdHRoaXMua2V5Q291bnQgPD0gMSAmJlxuXHRcdFx0XHRcdCghdGhpcy5jYWxsYmFja09iaiB8fCB0aGlzLmNhbGxiYWNrT2JqLmNhbGxzTWFkZSA9PT0gdGhpcy5jYWxsYmFja09iai5ub2ZDYWxscylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Ly8gSWYgbm8gc3VnZ2VzdGlvbnMgZGlzcGxheWVkLCBnZXQgdGhlbSwgdW5sZXNzIHdlJ3JlIGFscmVhZHkgZ2V0dGluZyB0aGVtLlxuXHRcdFx0XHRcdHRoaXMudGV4dGNoYW5nZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aGlnaGxpZ2h0U3VnZ2VzdGlvbihkaXI6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMgfHwgIXRoaXMubGlzdCB8fCB0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGN1cnIgPSB0aGlzLmxpc3Quc2VsZWN0ZWRJbmRleDtcblx0XHRcdGxldCB0Z3QgPSAtMTtcblx0XHRcdGlmIChkaXIgPT09IDApIHtcblx0XHRcdFx0aWYgKGN1cnIgPCAwIHx8IGN1cnIgPj0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRndCA9IGN1cnI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0Z3QgPSBjdXJyIDwgMCA/IDAgOiBjdXJyICsgZGlyO1xuXHRcdFx0XHR0Z3QgPSBNYXRoLm1heCh0Z3QsIDApO1xuXHRcdFx0XHRpZiAodGd0ID49IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRcdHRndCA9IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0Z3QgIT09IGN1cnIgfHwgZGlyID09PSAwKSB7XG5cdFx0XHRcdGlmIChjdXJyID49IDAgJiYgY3VyciA8IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCAmJiBkaXIgIT09IDApIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1tjdXJyXSEuc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdIS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdFx0Y29uc3QgdiA9IHRoaXMudGV4dCEudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0XHRjb25zdCBvcHRpb25UZXh0ID0gdGhpcy5saXN0Lm9wdGlvbnNbdGd0XSEudGV4dDtcblx0XHRcdFx0Y29uc3QgY29tcGxldGVkID0gdGhpcy5hdXRvQ29tcGxldGUob3B0aW9uVGV4dCwgdGhpcy5sYXN0UmVhbElucHV0LCBudWxsLCBrZXksIGZhbHNlKTtcblx0XHRcdFx0aWYgKCFjb21wbGV0ZWQgfHwgb3B0aW9uVGV4dCA9PT0gdGhpcy5sYXN0UmVhbElucHV0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0IS52YWx1ZSA9IG9wdGlvblRleHQgKyBrZXk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuY2FuU2VsZWN0KCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U2VsZWN0aW9uKG9wdGlvblRleHQubGVuZ3RoLCBvcHRpb25UZXh0Lmxlbmd0aCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gb3B0aW9uVGV4dDtcblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIE1pZ2h0IGJlIHdyb25nIGlmIGZyb20gYSBkYWIgbGlzdC4uLlxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IEhDLmV4aXN0c1llcztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFX1BFTkRJTkc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmVzZXRLZXlTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucyB8fCAhdGhpcy5saXN0IHx8IHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY3VyciA9IHRoaXMubGlzdC5zZWxlY3RlZEluZGV4O1xuXHRcdFx0aWYgKGN1cnIgPj0gMCAmJiBjdXJyIDwgdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW2N1cnJdIS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRcdGNvbnN0IHYgPSB0aGlzLnRleHQhLnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGNvbnN0IGtleSA9IHYubGVuZ3RoID4gMSA/IGB8JHt2WzFdfWAgOiAnJztcblx0XHRcdFx0Ly8gRVNDIGlzIGhhbmRsZWQgc3RyYW5nZWx5IGJ5IHNvbWUgYnJvd3NlcnMgKGUuZy4sIEZGKTsgc29tZWhvdyBpdCByZXNldHMgdGhlIGlucHV0IHZhbHVlIGJlZm9yZVxuXHRcdFx0XHQvLyBvdXIgZXZlbnQgaGFuZGxlcnMgZXZlciBnZXQgYSBjaGFuY2UgdG8gcnVuLlxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gdlswXSAhPT0gdGhpcy5sYXN0SW5wdXQ7XG5cdFx0XHRcdGlmICh2WzBdICE9PSB0aGlzLmxhc3RSZWFsSW5wdXQpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQhLnZhbHVlID0gdGhpcy5sYXN0UmVhbElucHV0ICsga2V5O1xuXHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmxhc3RSZWFsSW5wdXQ7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdGludGVyZmFjZSBIb3RDYXRVc2VyQ29uZmlnIHtcblx0XHRIb3RDYXREb250QWRkVG9XYXRjaGxpc3Q/OiBib29sZWFuO1xuXHRcdEhvdENhdE5vQXV0b0NvbW1pdD86IGJvb2xlYW47XG5cdFx0SG90Q2F0RGVsTmVlZHNEaWZmPzogYm9vbGVhbjtcblx0XHRIb3RDYXRTdWdnZXN0aW9uRGVsYXk/OiBudW1iZXI7XG5cdFx0SG90Q2F0RWRpdEJveFdpZHRoPzogbnVtYmVyO1xuXHRcdEhvdENhdFN1Z2dlc3Rpb25zPzogc3RyaW5nO1xuXHRcdEhvdENhdEZpeGVkU3VnZ2VzdGlvbnM/OiBib29sZWFuO1xuXHRcdEhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlcz86IGJvb2xlYW47XG5cdFx0SG90Q2F0Q2hhbmdlZEJhY2tncm91bmQ/OiBzdHJpbmc7XG5cdFx0SG90Q2F0VXNlQ2F0ZWdvcnlMaW5rcz86IGJvb2xlYW47XG5cdFx0SG90Q2F0TGlzdFNpemU/OiBudW1iZXI7XG5cdFx0SG90Q2F0Q2hhbmdlVGFnPzogc3RyaW5nO1xuXHR9XG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKTogdm9pZCA9PiB7XG5cdFx0Ly8gVXNlciBjb25maWd1cmF0aW9uczogRG8gdGhpcyBoZXJlLCBjYWxsZWQgZnJvbSB0aGUgb25sb2FkIGhhbmRsZXIsIHNvIHRoYXQgdXNlcnMgY2FuXG5cdFx0Ly8gb3ZlcnJpZGUgaXQgZWFzaWx5IGluIHRoZWlyIG93biB1c2VyIHNjcmlwdCBmaWxlcyBieSBqdXN0IGRlY2xhcmluZyB2YXJpYWJsZXMuXG5cdFx0Y29uc3QgY29uZmlnOiBIb3RDYXRVc2VyQ29uZmlnID0ge307XG5cdFx0SEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdFxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdERvbnRBZGRUb1dhdGNobGlzdFxuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3Q7XG5cdFx0SEMubm9fYXV0b2NvbW1pdCA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X25vX2F1dG9jb21taXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXROb0F1dG9Db21taXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gY29uZi53Z05hbWVzcGFjZU51bWJlciAlIDJcblx0XHRcdFx0XHRcdD8gdHJ1ZVxuXHRcdFx0XHRcdFx0OiBIQy5ub19hdXRvY29tbWl0IC8vIE9uIHRhbGsgbmFtZXNwYWNlIGRlZmF1bHQgYXV0b2NvbW1pdCBvZmZcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXROb0F1dG9Db21taXRcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfbm9fYXV0b2NvbW1pdDtcblx0XHRIQy5kZWxfbmVlZHNfZGlmZiA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X2RlbF9uZWVkc19kaWZmID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0RGVsTmVlZHNEaWZmID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmRlbF9uZWVkc19kaWZmXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0RGVsTmVlZHNEaWZmXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X2RlbF9uZWVkc19kaWZmO1xuXHRcdEhDLnN1Z2dlc3RfZGVsYXkgPSB3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25fZGVsYXkgfHwgY29uZmlnLkhvdENhdFN1Z2dlc3Rpb25EZWxheSB8fCBIQy5zdWdnZXN0X2RlbGF5O1xuXHRcdEhDLmVkaXRib3hfd2lkdGggPSB3aW5kb3cuaG90Y2F0X2VkaXRib3hfd2lkdGggfHwgY29uZmlnLkhvdENhdEVkaXRCb3hXaWR0aCB8fCBIQy5lZGl0Ym94X3dpZHRoO1xuXHRcdEhDLnN1Z2dlc3Rpb25zID0gd2luZG93LmhvdGNhdF9zdWdnZXN0aW9ucyB8fCBjb25maWcuSG90Q2F0U3VnZ2VzdGlvbnMgfHwgSEMuc3VnZ2VzdGlvbnM7XG5cdFx0aWYgKHR5cGVvZiBIQy5zdWdnZXN0aW9ucyAhPT0gJ3N0cmluZycgfHwgIXN1Z2dlc3Rpb25Db25maWdzW0hDLnN1Z2dlc3Rpb25zXSkge1xuXHRcdFx0SEMuc3VnZ2VzdGlvbnMgPSAnY29tYmluZWQnO1xuXHRcdH1cblx0XHRIQy5maXhlZF9zZWFyY2ggPVxuXHRcdFx0d2luZG93LmhvdGNhdF9zdWdnZXN0aW9uc19maXhlZCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdEZpeGVkU3VnZ2VzdGlvbnMgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuZml4ZWRfc2VhcmNoXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0Rml4ZWRTdWdnZXN0aW9uc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9zdWdnZXN0aW9uc19maXhlZDtcblx0XHRIQy5zaW5nbGVfbWlub3IgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3IgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRNaW5vclNpbmdsZUNoYW5nZXMgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuc2luZ2xlX21pbm9yXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X3NpbmdsZV9jaGFuZ2VzX2FyZV9taW5vcjtcblx0XHRIQy5iZ19jaGFuZ2VkID0gd2luZG93LmhvdGNhdF9jaGFuZ2VkX2JhY2tncm91bmQgfHwgY29uZmlnLkhvdENhdENoYW5nZWRCYWNrZ3JvdW5kIHx8IEhDLmJnX2NoYW5nZWQ7XG5cdFx0SEMudXNlX3VwX2Rvd24gPVxuXHRcdFx0d2luZG93LmhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3MgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRVc2VDYXRlZ29yeUxpbmtzID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLnVzZV91cF9kb3duXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3M7XG5cdFx0SEMubGlzdFNpemUgPSB3aW5kb3cuaG90Y2F0X2xpc3Rfc2l6ZSB8fCBjb25maWcuSG90Q2F0TGlzdFNpemUgfHwgSEMubGlzdFNpemU7XG5cdFx0SEMuY2hhbmdlVGFnID0gY29uZmlnLkhvdENhdENoYW5nZVRhZyB8fCAnJztcblx0XHQvLyBUaGUgbmV4dCB3aG9sZSBzaGViYW5nIGlzIG5lZWRlZCwgYmVjYXVzZSBtYW51YWwgdGFncyBnZXQgbm90IHN1Ym1pdHRlZCBleGNlcHQgb2Ygc2F2ZVxuXHRcdGlmIChIQy5jaGFuZ2VUYWcpIHtcblx0XHRcdGNvbnN0IGVGb3JtID0gZG9jdW1lbnQuZWRpdGZvcm07XG5cdFx0XHRjb25zdCBjYXRSZWdFeHAgPSBuZXcgUmVnRXhwKGBeXFxcXFtcXFxcWygke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0bGV0IG9sZFR4dCA9ICcnO1xuXHRcdFx0Ly8gUmV0dXJucyB0cnVlIGlmIG1pbm9yIGNoYW5nZVxuXHRcdFx0Y29uc3QgaXNNaW5vckNoYW5nZSA9ICgpOiBib29sZWFuIHwgdW5kZWZpbmVkID0+IHtcblx0XHRcdFx0Y29uc3QgdGV4dGJveCA9IGVGb3JtPy53cFRleHRib3gxO1xuXHRcdFx0XHRpZiAoIXRleHRib3gpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgbmV3VHh0ID0gdGV4dGJveC52YWx1ZTtcblx0XHRcdFx0Y29uc3Qgb2xkTGluZXMgPSBvbGRUeHQubWF0Y2goL14uKiQvZ20pID8/IFtdO1xuXHRcdFx0XHRjb25zdCBuZXdMaW5lcyA9IG5ld1R4dC5tYXRjaCgvXi4qJC9nbSkgPz8gW107XG5cdFx0XHRcdGNvbnN0IGV4Y2VwdCA9IChhQXJyOiBzdHJpbmdbXSwgYkFycjogc3RyaW5nW10pOiBzdHJpbmdbXSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRcdGxldCBsQXJyOiBzdHJpbmdbXTsgLy8gbGFyZ2VyXG5cdFx0XHRcdFx0bGV0IHNBcnI6IHN0cmluZ1tdOyAvLyBzbWFsbGVyXG5cdFx0XHRcdFx0aWYgKGFBcnIubGVuZ3RoIDwgYkFyci5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGxBcnIgPSBiQXJyO1xuXHRcdFx0XHRcdFx0c0FyciA9IFsuLi5hQXJyXTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bEFyciA9IGFBcnI7XG5cdFx0XHRcdFx0XHRzQXJyID0gWy4uLmJBcnJdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgbEFycikge1xuXHRcdFx0XHRcdFx0Y29uc3QgaW5kID0gc0Fyci5pbmRleE9mKGl0ZW0pO1xuXHRcdFx0XHRcdFx0aWYgKGluZCA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gaXRlbTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNBcnIuc3BsaWNlKGluZCwgMSk7IC8vIGRvbid0IGNoZWNrIHRoaXMgaXRlbSBhZ2FpblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgLi4uc0Fycl07XG5cdFx0XHRcdH07XG5cdFx0XHRcdGxldCBjQXJyID0gZXhjZXB0KG9sZExpbmVzLCBuZXdMaW5lcyk7IC8vIGNoYW5nZXNcblx0XHRcdFx0aWYgKGNBcnIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNBcnIgPSBjQXJyLmZpbHRlcigoYzogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCB0cmltbWVkID0gYy50cmltKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gISF0cmltbWVkICYmICFjYXRSZWdFeHAudGVzdCh0cmltbWVkKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY0Fyci5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRvbGRUeHQgPSBuZXdUeHQ7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdH07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGNvbmYud2dBY3Rpb24gPT09ICdzdWJtaXQnICYmXG5cdFx0XHRcdGNvbmYud2dBcnRpY2xlSWQgJiZcblx0XHRcdFx0ZUZvcm0gJiZcblx0XHRcdFx0ZUZvcm0ud3BTdW1tYXJ5ICYmXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aWtpRGlmZicpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y29uc3Qgc3VtID0gZUZvcm0ud3BTdW1tYXJ5O1xuXHRcdFx0XHRjb25zdCBzdW1BID0gZUZvcm0ud3BBdXRvU3VtbWFyeTtcblx0XHRcdFx0aWYgKHN1bS52YWx1ZSAmJiBzdW1BICYmIHN1bUEudmFsdWUgPT09IEhDLmNoYW5nZVRhZykge1xuXHRcdFx0XHRcdC8vIEhvdENhdCBkaWZmXG5cdFx0XHRcdFx0Ly8gTUQ1IGhhc2ggb2YgdGhlIGVtcHR5IHN0cmluZywgYXMgSG90Q2F0IGVkaXQgaXMgYmFzZWQgb24gZW1wdHkgc3VtXG5cdFx0XHRcdFx0c3VtQS52YWx1ZSA9IHN1bUEudmFsdWUucmVwbGFjZShIQy5jaGFuZ2VUYWcsICdkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZScpO1xuXHRcdFx0XHRcdC8vIEF0dHIgY3JlYXRpb24gYW5kIGV2ZW50IGhhbmRsaW5nIGlzIG5vdCBzYW1lIGluIGFsbCAob2xkKSBicm93c2VycyBzbyB1c2UgJFxuXHRcdFx0XHRcdGNvbnN0ICRjdCA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0XHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnZhbChIQy5jaGFuZ2VUYWcpO1xuXHRcdFx0XHRcdCQoZUZvcm0pLmFwcGVuZCgkY3QpO1xuXHRcdFx0XHRcdG9sZFR4dCA9IGVGb3JtLndwVGV4dGJveDE/LnZhbHVlID8/ICcnO1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BTYXZlXScpLm9uZSgnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoJGN0LnZhbCgpKSB7XG5cdFx0XHRcdFx0XHRcdHN1bS52YWx1ZSA9IHN1bS52YWx1ZS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykgfHwgZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JyksXG5cdFx0XHRcdFx0XHRcdFx0Jydcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb25zdCByZW1vdmVDaGFuZ2VUYWcgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHQkKGVGb3JtLndwVGV4dGJveDEhKVxuXHRcdFx0XHRcdFx0XHQuYWRkKHN1bSlcblx0XHRcdFx0XHRcdFx0Lm9uZSgnaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaXNNaW5vckNoYW5nZSgpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbW92ZUNoYW5nZVRhZygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGN0LnZhbCgnJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZW1vdmVDaGFuZ2VUYWcoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBOdW1lcmljIGlucHV0LCBtYWtlIHN1cmUgd2UgaGF2ZSBhIG51bWVyaWMgdmFsdWVcblx0XHRIQy5saXN0U2l6ZSA9IE51bWJlci5wYXJzZUludChTdHJpbmcoSEMubGlzdFNpemUpLCAxMCk7XG5cdFx0aWYgKE51bWJlci5pc05hTihIQy5saXN0U2l6ZSkgfHwgSEMubGlzdFNpemUgPCA1KSB7XG5cdFx0XHRIQy5saXN0U2l6ZSA9IDU7XG5cdFx0fVxuXHRcdEhDLmxpc3RTaXplID0gTWF0aC5taW4oSEMubGlzdFNpemUsIDMwKTsgLy8gTWF4IHNpemVcblx0XHQvLyBMb2NhbGl6ZSBzZWFyY2ggZW5naW5lIG5hbWVzXG5cdFx0Zm9yIChjb25zdCBba2V5LCBzdWdnZXN0aW9uQ29uZmlnXSBvZiBPYmplY3QuZW50cmllcyhzdWdnZXN0aW9uQ29uZmlncykpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmIChrZXkgJiYgZ2V0TWVzc2FnZShgZW5naW5lX25hbWVzLSR7a2V5fWApKSB7XG5cdFx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZy5uYW1lID0gZ2V0TWVzc2FnZShgZW5naW5lX25hbWVzLSR7a2V5fWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIENhdGNoIGJvdGggbmF0aXZlIFJUTCBhbmQgXCJmYWtlZFwiIFJUTCB0aHJvdWdoIFtbTWVkaWFXaWtpOlJ0bC5qc11dXG5cdFx0Y29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdib2R5JykhO1xuXHRcdGlzX3J0bCA9IGhhc0NsYXNzKGJvZHksICdydGwnKTtcblx0XHRpZiAoIWlzX3J0bCkge1xuXHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gZG9jdW1lbnQuZGVmYXVsdFZpZXdcblx0XHRcdFx0PyAvLyBHZWNrbyBldGMuXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShib2R5LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKVxuXHRcdFx0XHQ6IC8vIE5vdCBleGFjdGx5IHJpZ2h0LCBidXQgYmVzdCBlZmZvcnRcblx0XHRcdFx0XHQkKCdib2R5JylbMF0hLnN0eWxlLmRpcmVjdGlvbjtcblx0XHRcdGlzX3J0bCA9IGRpcmVjdGlvbiA9PT0gJ3J0bCc7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBjYW5fZWRpdCA9ICgpOiBib29sZWFuID0+IHtcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhLWVkaXQnKSAhPT0gbnVsbDtcblx0fTtcblx0Ly8gTGVnYWN5IHN0dWZmXG5cdGNvbnN0IGNsb3NlRm9ybSA9ICgpOiB2b2lkID0+IHtcblx0XHQvLyBDbG9zZSBhbGwgb3BlbiBlZGl0b3JzIHdpdGhvdXQgcmVkaXJlY3QgcmVzb2x1dGlvbiBhbmQgb3RoZXIgYXN5bmNocm9ub3VzIHN0dWZmLlxuXHRcdGZvciAoY29uc3QgZWRpdCBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdC5zdGF0ZSA9PT0gT1BFTikge1xuXHRcdFx0XHRlZGl0LmNhbmNlbCgpO1xuXHRcdFx0fSBlbHNlIGlmIChlZGl0LnN0YXRlID09PSBDSEFOR0VfUEVORElORykge1xuXHRcdFx0XHRlZGl0LnNhbml0aXplSW5wdXQoKTtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBlZGl0LnRleHQhLnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGxldCBrZXk6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRcdFx0XHRpZiAodmFsdWUubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdGtleSA9IHZhbHVlWzFdITtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB2ID0gdmFsdWVbMF0hLnJlcGxhY2UoL18vZywgJyAnKS50cmltKCk7XG5cdFx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGVkaXQuY2FuY2VsKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50Q2F0ZWdvcnkgPSB2O1xuXHRcdFx0XHRcdGVkaXQuY3VycmVudEtleSA9IGtleTtcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRFeGlzdHMgPSBlZGl0LmlucHV0RXhpc3RzO1xuXHRcdFx0XHRcdGVkaXQuY2xvc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3Qgc2V0dXBfdXBsb2FkID0gKCk6IHZvaWQgPT4ge1xuXHRcdG9uVXBsb2FkID0gdHJ1ZTtcblx0XHQvLyBBZGQgYW4gZW1wdHkgY2F0ZWdvcnkgYmFyIGF0IHRoZSBlbmQgb2YgdGhlIHRhYmxlIGNvbnRhaW5pbmcgdGhlIGRlc2NyaXB0aW9uLCBhbmQgY2hhbmdlIHRoZSBvbnN1Ym1pdCBoYW5kbGVyLlxuXHRcdGxldCBpcDogSFRNTEVsZW1lbnQgfCBudWxsID1cblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcjbXctaHRtbGZvcm0tZGVzY3JpcHRpb24nKSA/P1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ2lucHV0W25hbWU9d3BEZXN0RmlsZV0nKTtcblx0XHRpZiAoIWlwKSB7XG5cdFx0XHRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwRGVzdEZpbGVdJyk7XG5cdFx0XHR3aGlsZSAoaXAgJiYgaXAubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3RhYmxlJykge1xuXHRcdFx0XHRpcCA9IGlwLnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWlwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHJldXBsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT13cEZvclJlVXBsb2FkXScpO1xuXHRcdGNvbnN0IGRlc3RGaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT13cERlc3RGaWxlXScpO1xuXHRcdGlmICgocmV1cGxvYWQgJiYgISFyZXVwbG9hZC52YWx1ZSkgfHwgKGRlc3RGaWxlICYmIChkZXN0RmlsZS5kaXNhYmxlZCB8fCBkZXN0RmlsZS5yZWFkT25seSkpKSB7XG5cdFx0XHRyZXR1cm47IC8vIHJlLXVwbG9hZCBmb3JtLi4uXG5cdFx0fVxuXHRcdC8vIEluc2VydCBhIHRhYmxlIHJvdyB3aXRoIHR3byBmaWVsZHMgKGxhYmVsIGFuZCBlbXB0eSBjYXRlZ29yeSBiYXIpXG5cdFx0Y29uc3QgbGFiZWxDZWxsID0gbWFrZSgndGQnKTtcblx0XHRjb25zdCBsaW5lQ2VsbCA9IG1ha2UoJ3RkJyk7XG5cdFx0Ly8gQ3JlYXRlIHRoZSBjYXRlZ29yeSBsaW5lXG5cdFx0Y2F0TGluZSA9IG1ha2UoJ2RpdicpO1xuXHRcdGNhdExpbmUuY2xhc3NOYW1lID0gJ2NhdGxpbmtzJztcblx0XHRjYXRMaW5lLmlkID0gJ2NhdGxpbmtzJztcblx0XHRjYXRMaW5lLnN0eWxlLnRleHRBbGlnbiA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0Ly8gV2UnbGwgYmUgaW5zaWRlIGEgdGFibGUgcm93LiBNYWtlIHN1cmUgdGhhdCB3ZSBkb24ndCBoYXZlIG1hcmdpbnMgb3Igc3RyYW5nZSBib3JkZXJzLlxuXHRcdGNhdExpbmUuc3R5bGUubWFyZ2luID0gJzAnO1xuXHRcdGNhdExpbmUuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuXHRcdGxpbmVDZWxsLmFwcGVuZChjYXRMaW5lKTtcblx0XHQvLyBDcmVhdGUgdGhlIGxhYmVsXG5cdFx0Y29uc3QgbGFiZWw6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdFx0aWYgKGxhYmVsKSB7XG5cdFx0XHRsYWJlbENlbGwuaWQgPSAnaG90Y2F0TGFiZWxUcmFuc2xhdGVkJztcblx0XHRcdGxhYmVsQ2VsbC5hcHBlbmQobGFiZWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsYWJlbENlbGwuaWQgPSAnaG90Y2F0TGFiZWwnO1xuXHRcdFx0bGFiZWxDZWxsLmFwcGVuZChtYWtlKGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKSwgdHJ1ZSkpO1xuXHRcdH1cblx0XHRsYWJlbENlbGwuY2xhc3NOYW1lID0gJ213LWxhYmVsJztcblx0XHRsYWJlbENlbGwuc3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0Jztcblx0XHRsYWJlbENlbGwuc3R5bGUudmVydGljYWxBbGlnbiA9ICdtaWRkbGUnO1xuXHRcdC8vIENoYW5nZSB0aGUgb25zdWJtaXQgaGFuZGxlclxuXHRcdGNvbnN0IGZvcm0gPVxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRm9ybUVsZW1lbnQ+KCcjdXBsb2FkJykgPz9cblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEZvcm1FbGVtZW50PignI213LXVwbG9hZC1mb3JtJyk7XG5cdFx0aWYgKGZvcm0pIHtcblx0XHRcdGNvbnN0IG5ld1JvdyA9IChpcCBhcyBIVE1MVGFibGVFbGVtZW50KS5pbnNlcnRSb3coLTEpO1xuXHRcdFx0bmV3Um93LmFwcGVuZChsYWJlbENlbGwpO1xuXHRcdFx0bmV3Um93LmFwcGVuZChsaW5lQ2VsbCk7XG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcblx0XHRcdFx0Y2xvc2VGb3JtKCk7XG5cdFx0XHRcdC8vIENvcHkgdGhlIGNhdGVnb3JpZXNcblx0XHRcdFx0Y29uc3QgZWIgPVxuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRleHRBcmVhRWxlbWVudD4oJ3RleHRhcmVhW25hbWU9d3BVcGxvYWREZXNjcmlwdGlvbl0nKSA/P1xuXHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRleHRBcmVhRWxlbWVudD4oJyN3cERlc2MnKTtcblx0XHRcdFx0aWYgKCFlYikge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBhZGRlZE9uZSA9IGZhbHNlO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdCA9IGVkaXRvci5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdFx0aWYgKCF0KSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gZWRpdG9yLmN1cnJlbnRLZXk7XG5cdFx0XHRcdFx0Y29uc3QgbmV3X2NhdCA9IGBbWyR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3R9JHtrZXkgPyBgfCR7a2V5fWAgOiAnJ31dXWA7XG5cdFx0XHRcdFx0Ly8gT25seSBhZGQgaWYgbm90IGFscmVhZHkgcHJlc2VudFxuXHRcdFx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRcdFx0bGV0IF9jbGVhbmVkVGV4dCA9IGViLnZhbHVlO1xuXHRcdFx0XHRcdGxldCBwcmV2aW91c0NsZWFuZWRUZXh0OiBzdHJpbmc7XG5cdFx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdFx0cHJldmlvdXNDbGVhbmVkVGV4dCA9IF9jbGVhbmVkVGV4dDtcblx0XHRcdFx0XHRcdF9jbGVhbmVkVGV4dCA9IF9jbGVhbmVkVGV4dC5yZXBsYWNlKC88IS0tL2csICcnKS5yZXBsYWNlKC8tLSE/Pi9nLCAnJykucmVwbGFjZShub3dpa2lSZWdleCwgJycpO1xuXHRcdFx0XHRcdH0gd2hpbGUgKF9jbGVhbmVkVGV4dCAhPT0gcHJldmlvdXNDbGVhbmVkVGV4dCk7XG5cdFx0XHRcdFx0aWYgKCFmaW5kX2NhdGVnb3J5KF9jbGVhbmVkVGV4dCwgdCwgdHJ1ZSkpIHtcblx0XHRcdFx0XHRcdGViLnZhbHVlICs9IGBcXG4ke25ld19jYXR9YDtcblx0XHRcdFx0XHRcdGFkZGVkT25lID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGFkZGVkT25lKSB7XG5cdFx0XHRcdFx0Ly8gUmVtb3ZlIFwic3Vic3Q6dW5jXCIgYWRkZWQgYnkgRmxpbmZvIGlmIGl0IGRpZG4ndCBmaW5kIGNhdGVnb3JpZXNcblx0XHRcdFx0XHRjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ3t7JCcuY29uY2F0KCdzdWJzdDonKS5jb25jYXQoJ3VuY319JyksICdnJyk7XG5cdFx0XHRcdFx0ZWIudmFsdWUgPSBlYi52YWx1ZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cdGxldCBjbGVhbmVkVGV4dDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdGludGVyZmFjZSBIb3RDYXRPblBhZ2VSZXN1bHQge1xuXHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0bWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IEhvdENhdENhdGVnb3J5TWF0Y2hlcyB8IHN0cmluZ1tdIHwgbnVsbDtcblx0fVxuXHRjb25zdCBpc09uUGFnZSA9IChlbGVtZW50OiBFbGVtZW50KTogSG90Q2F0T25QYWdlUmVzdWx0IHwgbnVsbCA9PiB7XG5cdFx0Y29uc3Qge2ZpcnN0Q2hpbGR9ID0gZWxlbWVudDtcblx0XHRpZiAoIWZpcnN0Q2hpbGQgfHwgZmlyc3RDaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgY2F0VGl0bGUgPSB0aXRsZSgoZmlyc3RDaGlsZCBhcyBFbGVtZW50KS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG5cdFx0aWYgKCFjYXRUaXRsZSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhdFRpdGxlID0gY2F0VGl0bGUuc2xpY2UoY2F0VGl0bGUuaW5kZXhPZignOicpICsgMSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdGlmIChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QoY2F0VGl0bGUpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgcmVzdWx0OiBIb3RDYXRPblBhZ2VSZXN1bHQgPSB7XG5cdFx0XHR0aXRsZTogY2F0VGl0bGUsXG5cdFx0XHRtYXRjaDogWycnLCAnJywgJyddLFxuXHRcdH07XG5cdFx0aWYgKHBhZ2VUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRpZiAoY2xlYW5lZFRleHQgPT09IG51bGwpIHtcblx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRjbGVhbmVkVGV4dCA9IHBhZ2VUZXh0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCAnJykucmVwbGFjZShub3dpa2lSZWdleCwgJycpO1xuXHRcdH1cblx0XHRyZXN1bHQubWF0Y2ggPSBmaW5kX2NhdGVnb3J5KGNsZWFuZWRUZXh0LCBjYXRUaXRsZSwgdHJ1ZSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0bGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG5cdGxldCBzZXR1cFRpbWVvdXQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbCA9IG51bGw7XG5cdGNvbnN0IGZpbmRCeUNsYXNzID0gKHNjb3BlOiBQYXJlbnROb2RlLCB0YWc6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB8IG51bGwgPT4ge1xuXHRcdGNvbnN0IHJlc3VsdCA9ICQoc2NvcGUpLmZpbmQoYCR7dGFnfS4ke2NsYXNzTmFtZX1gKTtcblx0XHRyZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5sZW5ndGggPiAwID8gKHJlc3VsdFswXSBhcyBIVE1MRWxlbWVudCkgOiBudWxsO1xuXHR9O1xuXHRjb25zdCBzZXR1cCA9IChhZGRpdGlvbmFsV29yaz86ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0XHRpZiAoaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdGlmIChzZXR1cFRpbWVvdXQpIHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoc2V0dXBUaW1lb3V0KTtcblx0XHRcdHNldHVwVGltZW91dCA9IG51bGw7XG5cdFx0fVxuXHRcdC8vIEZpbmQgdGhlIGNhdGVnb3J5IGJhciwgb3IgY3JlYXRlIGFuIGVtcHR5IG9uZSBpZiB0aGVyZSBpc24ndCBvbmUuIFRoZW4gYWRkIC0vKy0gbGlua3MgYWZ0ZXJcblx0XHQvLyBlYWNoIGNhdGVnb3J5LCBhbmQgYWRkIHRoZSArIGxpbmsuXG5cdFx0Y2F0TGluZSB8fD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJyNtdy1ub3JtYWwtY2F0bGlua3MnKTsgLy8gU3BlY2lhbDpVcGxvYWRcblx0XHRjb25zdCBoaWRkZW5DYXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJyNtdy1oaWRkZW4tY2F0bGlua3MnKTtcblx0XHRpZiAoIWNhdExpbmUpIHtcblx0XHRcdGxldCBmb290ZXI6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdFx0XHRpZiAoIWhpZGRlbkNhdHMpIHtcblx0XHRcdFx0Zm9vdGVyID0gZmluZEJ5Q2xhc3MoZG9jdW1lbnQsICdkaXYnLCAncHJpbnRmb290ZXInKTtcblx0XHRcdFx0aWYgKCFmb290ZXIpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gLy8gRG9uJ3Qga25vdyB3aGVyZSB0byBpbnNlcnQgdGhlIGNhdGVnb3J5IGxpbmVcblx0XHRcdH1cblx0XHRcdGNhdExpbmUgPSBtYWtlKCdkaXYnKTtcblx0XHRcdGNhdExpbmUuaWQgPSAnbXctbm9ybWFsLWNhdGxpbmtzJztcblx0XHRcdGNhdExpbmUuc3R5bGUudGV4dEFsaWduID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdC8vIEFkZCBhIGxhYmVsXG5cdFx0XHRjb25zdCBsYWJlbCA9IG1ha2UoJ2EnKTtcblx0XHRcdGxhYmVsLmhyZWYgPSBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnU3BlY2lhbDpDYXRlZ29yaWVzJyk7XG5cdFx0XHRsYWJlbC50aXRsZSA9IGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKTtcblx0XHRcdGxhYmVsLmFwcGVuZChtYWtlKGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKSwgdHJ1ZSkpO1xuXHRcdFx0Y2F0TGluZS5hcHBlbmQobGFiZWwpO1xuXHRcdFx0Y2F0TGluZS5hcHBlbmQobWFrZSgnOicsIHRydWUpKTtcblx0XHRcdC8vIEluc2VydCB0aGUgbmV3IGNhdGVnb3J5IGxpbmVcblx0XHRcdGxldCBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgbnVsbCA9XG5cdFx0XHRcdChoaWRkZW5DYXRzPy5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50IHwgbnVsbCkgPz8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJyNjYXRsaW5rcycpO1xuXHRcdFx0aWYgKCFjb250YWluZXIpIHtcblx0XHRcdFx0Y29udGFpbmVyID0gbWFrZSgnZGl2Jyk7XG5cdFx0XHRcdGNvbnRhaW5lci5pZCA9ICdjYXRsaW5rcyc7XG5cdFx0XHRcdGZvb3RlciEucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgZm9vdGVyIS5uZXh0U2libGluZyk7XG5cdFx0XHR9XG5cdFx0XHRjb250YWluZXIuY2xhc3NOYW1lID0gJ2NhdGxpbmtzIG5vcHJpbnQnO1xuXHRcdFx0Y29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdGlmIChoaWRkZW5DYXRzKSB7XG5cdFx0XHRcdGhpZGRlbkNhdHMuYmVmb3JlKGNhdExpbmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZChjYXRMaW5lKTtcblx0XHRcdH1cblx0XHR9IC8vIGVuZCBpZiBjYXRMaW5lIGV4aXN0c1xuXHRcdGlmIChpc19ydGwpIHtcblx0XHRcdGNhdExpbmUuZGlyID0gJ3J0bCc7XG5cdFx0fVxuXHRcdC8vIENyZWF0ZSBlZGl0b3JzIGZvciBhbGwgZXhpc3RpbmcgY2F0ZWdvcmllc1xuXHRcdGNvbnN0IGNyZWF0ZUVkaXRvcnMgPSAobGluZTogSFRNTEVsZW1lbnQsIGlzX2hpZGRlbj86IGJvb2xlYW4pOiBIVE1MRWxlbWVudCB8IG51bGwgPT4ge1xuXHRcdFx0bGV0IGNhdHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHwgSFRNTEVsZW1lbnRbXSA9IGxpbmUucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ2xpJyk7XG5cdFx0XHRpZiAoY2F0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdG5ld0RPTSA9IHRydWU7XG5cdFx0XHRcdGxpbmUgPSBjYXRzWzBdIS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2F0cyA9IGxpbmUucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ3NwYW4nKTtcblx0XHRcdH1cblx0XHRcdC8vIENvcHkgY2F0cywgb3RoZXJ3aXNlIGl0J2xsIGFsc28gbWFnaWNhbGx5IGNvbnRhaW4gb3VyIGFkZGVkIHNwYW5zIGFzIGl0IGlzIGEgbGl2ZSBjb2xsZWN0aW9uIVxuXHRcdFx0Y29uc3QgY29weUNhdHMgPSBBcnJheS5mcm9tKGNhdHMpO1xuXHRcdFx0Zm9yIChjb25zdCBjYXQgb2YgY29weUNhdHMpIHtcblx0XHRcdFx0Y29uc3QgdGVzdCA9IGlzT25QYWdlKGNhdCk7XG5cdFx0XHRcdGlmICh0ZXN0ICE9PSBudWxsICYmIHRlc3QubWF0Y2ggIT09IG51bGwgJiYgbGluZSkge1xuXHRcdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcihsaW5lLCBjYXQsIHRlc3QudGl0bGUsICh0ZXN0Lm1hdGNoIGFzIHN0cmluZ1tdKVsyXSwgaXNfaGlkZGVuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvcHlDYXRzLmxlbmd0aCA+IDAgPyBjb3B5Q2F0cy5hdCgtMSkhIDogbnVsbDtcblx0XHR9O1xuXHRcdGNvbnN0IGxhc3RTcGFuID0gY3JlYXRlRWRpdG9ycyhjYXRMaW5lLCBmYWxzZSk7XG5cdFx0Ly8gQ3JlYXRlIG9uZSB0byBhZGQgYSBuZXcgY2F0ZWdvcnlcblx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IoXG5cdFx0XHRuZXdET00gPyBjYXRMaW5lLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCd1bCcpWzBdISA6IGNhdExpbmUsXG5cdFx0XHRudWxsLFxuXHRcdFx0bnVsbCxcblx0XHRcdGxhc3RTcGFuICE9PSBudWxsLFxuXHRcdFx0ZmFsc2Vcblx0XHQpO1xuXHRcdGlmICghb25VcGxvYWQpIHtcblx0XHRcdGlmIChwYWdlVGV4dCAhPT0gbnVsbCAmJiBoaWRkZW5DYXRzKSB7XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRoaWRkZW5DYXRzLmRpciA9ICdydGwnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNyZWF0ZUVkaXRvcnMoaGlkZGVuQ2F0cywgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBBbmQgZmluYWxseSBhZGQgdGhlIFwibXVsdGktbW9kZVwiIHNwYW4uIChEbyB0aGlzIGF0IHRoZSBlbmQsIG90aGVyd2lzZSBpdCBlbmRzIHVwIGluIHRoZSBsaXN0IGFib3ZlLilcblx0XHRcdGNvbnN0IGVuYWJsZU11bHRpID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0ZW5hYmxlTXVsdGkuY2xhc3NOYW1lID0gJ25vcHJpbnQnO1xuXHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRlbmFibGVNdWx0aS5kaXIgPSAncnRsJztcblx0XHRcdH1cblx0XHRcdGNhdExpbmUuaW5zZXJ0QmVmb3JlKGVuYWJsZU11bHRpLCBjYXRMaW5lLmZpcnN0Q2hpbGQhLm5leHRTaWJsaW5nKTtcblx0XHRcdGVuYWJsZU11bHRpLmFwcGVuZChtYWtlKCdcXHUwMEEwJywgdHJ1ZSkpOyAvLyBuYnNwXG5cdFx0XHRtdWx0aVNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRlbmFibGVNdWx0aS5hcHBlbmQobXVsdGlTcGFuKTtcblx0XHRcdG11bHRpU3Bhbi5pbm5lckhUTUwgPSBgKDxhPiR7SEMuYWRkbXVsdGl9PC9hPilgO1xuXHRcdFx0Y29uc3QgW2xpbmtdID0gbXVsdGlTcGFuLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEFuY2hvckVsZW1lbnQ+KCdhJyk7XG5cdFx0XHRsaW5rIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0XHR9KTtcblx0XHRcdGxpbmshLnRpdGxlID0gZ2V0TWVzc2FnZSgnbXVsdGlfdG9vbHRpcCcpO1xuXHRcdFx0bGluayEuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXHRcdH1cblx0XHRjbGVhbmVkVGV4dCA9IG51bGw7XG5cdFx0aWYgKGFkZGl0aW9uYWxXb3JrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcblx0XHRcdGFkZGl0aW9uYWxXb3JrKCk7XG5cdFx0fVxuXHRcdG13Lmhvb2soJ2hvdGNhdC5yZWFkeScpLmZpcmUoKTsgLy8gRXhlY3V0ZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uc1xuXHRcdCRib2R5LnRyaWdnZXIoJ2hvdGNhdFNldHVwQ29tcGxldGVkJyk7XG5cdH07XG5cdGNvbnN0IGNyZWF0ZUNvbW1pdEZvcm0gPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKGNvbW1pdEZvcm0pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgZm9ybUNvbnRhaW5lciA9IG1ha2UoJ2RpdicpO1xuXHRcdGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykhLmFwcGVuZChmb3JtQ29udGFpbmVyKTtcblx0XHRmb3JtQ29udGFpbmVyLmlubmVySFRNTCA9IGA8Zm9ybSBpZD1cImhvdGNhdENvbW1pdEZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBhY3Rpb249XCIke1xuXHRcdFx0Y29uZi53Z1NjcmlwdFxuXHRcdH0/dGl0bGU9JHtlbmNvZGVVUklDb21wb25lbnQoY29uZi53Z1BhZ2VOYW1lKX0mYWN0aW9uPXN1Ym1pdFwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwVGV4dGJveDFcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJtb2RlbFwiIHZhbHVlPVwiJHtjb25mLndnUGFnZUNvbnRlbnRNb2RlbH1cIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtYXRcIiB2YWx1ZT1cInRleHQveC13aWtpXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BTdW1tYXJ5XCIgdmFsdWU9XCJcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIndwTWlub3JlZGl0XCIgdGl0bGU9XCJ3cE1pbm9yZWRpdFwiIHZhbHVlPVwiMVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwid3BXYXRjaHRoaXNcIiB0aXRsZT1cIndwV2F0Y2h0aGlzXCIgdmFsdWU9XCIxXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BBdXRvU3VtbWFyeVwiIHZhbHVlPVwiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2VcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEVkaXR0aW1lXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BTdGFydHRpbWVcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cERpZmZcIiB2YWx1ZT1cIndwRGlmZlwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm9sZGlkXCIgdmFsdWU9XCIwXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwiaGNDb21taXRcIiB2YWx1ZT1cImhjQ29tbWl0XCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BFZGl0VG9rZW5cIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFVsdGltYXRlUGFyYW1cIiB2YWx1ZT1cIjFcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cENoYW5nZVRhZ3NcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwi4oSz8J2SsuKZpfCdk4rwnZOD8J2SvvCdkrjihLTwnZK54oSvXCIgbmFtZT1cIndwVW5pY29kZUNoZWNrXCI+XG5cdFx0PC9mb3JtPmA7XG5cdFx0Y29tbWl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SG90Q2F0Q29tbWl0Rm9ybT4oJyNob3RjYXRDb21taXRGb3JtJyk7XG5cdH07XG5cdGNvbnN0IGdldFBhZ2UgPSAoKTogdm9pZCA9PiB7XG5cdFx0Ly8gV2Uga25vdyB3ZSBoYXZlIGFuIGFydGljbGUgaGVyZS5cblx0XHRpZiAoY29uZi53Z0FydGljbGVJZCkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRyYXdjb250aW51ZTogJycsXG5cdFx0XHRcdHRpdGxlczogY29uZi53Z1BhZ2VOYW1lLFxuXHRcdFx0XHRwcm9wOiBbJ2luZm8nLCAncmV2aXNpb25zJ10sXG5cdFx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCcsICdpZHMnXSxcblx0XHRcdFx0cnZsaW1pdDogJzEnLFxuXHRcdFx0XHRydnN0YXJ0aWQ6IGNvbmYud2dDdXJSZXZpc2lvbklkLFxuXHRcdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRcdG1ldGE6IFsnc2l0ZWluZm8nXSxcblx0XHRcdH07XG5cdFx0XHRIQy5zdGFydCA9IChkYXRhOiBIb3RDYXRBcGlRdWVyeVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdHNldFBhZ2UoZGF0YSk7XG5cdFx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdFx0fTtcblx0XHRcdHZvaWQgYXBpLmdldChwYXJhbXMpLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0SEMuc3RhcnQhKGRhdGEgYXMgSG90Q2F0QXBpUXVlcnlSZXNwb25zZSk7XG5cdFx0XHR9KTtcblx0XHRcdHNldHVwVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHRcdH0sIDQwMDApOyAvLyA0IHNlYywganVzdCBpbiBjYXNlIGdldHRpbmcgdGhlIHdpa2l0ZXh0IHRha2VzIGxvbmdlci5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gRG9lc24ndCBleGlzdCB5ZXQuIERpc2FibGUgb24gbm9uLWV4aXN0aW5nIFVzZXIgcGFnZXMuXG5cdFx0XHRpZiAoY29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gMikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRwYWdlVGV4dCA9ICcnO1xuXHRcdFx0cGFnZVRpbWUgPSBudWxsO1xuXHRcdFx0c2V0dXAoY3JlYXRlQ29tbWl0Rm9ybSk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBzZXRTdGF0ZSA9IChzdGF0ZTogc3RyaW5nKTogbnVsbCA9PiB7XG5cdFx0Y29uc3QgY2F0cyA9IHN0YXRlLnNwbGl0KCdcXG4nKTtcblx0XHRpZiAoY2F0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAoaW5pdGlhbGl6ZWQgJiYgZWRpdG9ycy5sZW5ndGggPT09IDEgJiYgZWRpdG9yc1swXSEuaXNBZGRDYXRlZ29yeSkge1xuXHRcdFx0Ly8gSW5zZXJ0IG5ldyBzcGFucyBhbmQgY3JlYXRlIG5ldyBlZGl0b3JzIGZvciB0aGVtLlxuXHRcdFx0Y29uc3QgbmV3U3BhbnM6IHtlbGVtZW50OiBIVE1MRWxlbWVudDsgdGl0bGU6IHN0cmluZzsga2V5OiBzdHJpbmcgfCBudWxsfVtdID0gW107XG5cdFx0XHRjb25zdCBiZWZvcmUgPSBlZGl0b3JzLmxlbmd0aCA9PT0gMSA/IGVkaXRvcnNbMF0hLnNwYW4gOiBudWxsO1xuXHRcdFx0bGV0IGk6IG51bWJlcjtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChjYXRzW2ldIS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBjYXQgPSBjYXRzW2ldIS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSBjYXQubGVuZ3RoID4gMSA/IGNhdFsxXSEgOiBudWxsO1xuXHRcdFx0XHRjb25zdCBjYXROYW1lID0gY2F0WzBdITtcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gd2lraVBhZ2VQYXRoKGAke0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHtjYXROYW1lfWApO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKGNhdE5hbWUsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGNhdE5hbWU7XG5cdFx0XHRcdGNvbnN0IHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRpZiAoIWkpIHtcblx0XHRcdFx0XHRjYXRMaW5lIS5pbnNlcnRCZWZvcmUobWFrZSgnICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJlZm9yZSEuYmVmb3JlKHNwYW4pO1xuXHRcdFx0XHRpZiAoYmVmb3JlICYmIGkgKyAxIDwgY2F0cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRiZWZvcmUucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKG1ha2UoJyB8ICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5ld1NwYW5zW25ld1NwYW5zLmxlbmd0aF0gPSB7XG5cdFx0XHRcdFx0ZWxlbWVudDogc3Bhbixcblx0XHRcdFx0XHR0aXRsZTogY2F0TmFtZSxcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvLyBBbmQgY2hhbmdlIHRoZSBsYXN0IG9uZS4uLlxuXHRcdFx0aWYgKGJlZm9yZSkge1xuXHRcdFx0XHRiZWZvcmUucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKG1ha2UoJyB8ICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChjb25zdCBuZXdTcGFuIG9mIG5ld1NwYW5zKSB7XG5cdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcihjYXRMaW5lISwgbmV3U3Bhbi5lbGVtZW50LCBuZXdTcGFuLnRpdGxlLCBuZXdTcGFuLmtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCBnZXRTdGF0ZSA9ICgpOiBzdHJpbmcgfCBudWxsID0+IHtcblx0XHRsZXQgcmVzdWx0OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRsZXQgdGV4dCA9IGVkaXRvci5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRjb25zdCBrZXkgPSBlZGl0b3IuY3VycmVudEtleTtcblx0XHRcdGlmICh0ZXh0ICYmIHRleHQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRpZiAoa2V5ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dGV4dCArPSBgfCR7a2V5fWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHRleHQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IGBcXG4ke3RleHR9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRjb25zdCByZWFsbHlfcnVuID0gKCk6IHZvaWQgPT4ge1xuXHRcdGluaXRpYWxpemUoKTtcblx0XHRpZiAoXG5cdFx0XHQhSEMudXBsb2FkX2Rpc2FibGVkICYmXG5cdFx0XHRjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAtMSAmJlxuXHRcdFx0Y29uZi53Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ1VwbG9hZCcgJiZcblx0XHRcdGNvbmYud2dVc2VyTmFtZVxuXHRcdCkge1xuXHRcdFx0c2V0dXBfdXBsb2FkKCk7XG5cdFx0XHRzZXR1cCgoKSA9PiB7XG5cdFx0XHRcdC8vIENoZWNrIGZvciBzdGF0ZSByZXN0b3JhdGlvbiBvbmNlIHRoZSBzZXR1cCBpcyBkb25lIG90aGVyd2lzZSwgYnV0IGJlZm9yZSBzaWduYWxsaW5nIHNldHVwIGNvbXBsZXRpb25cblx0XHRcdFx0aWYgKHdpbmRvdy5VcGxvYWRGb3JtICYmIHdpbmRvdy5VcGxvYWRGb3JtLnByZXZpb3VzX2hvdGNhdF9zdGF0ZSkge1xuXHRcdFx0XHRcdHdpbmRvdy5VcGxvYWRGb3JtLnByZXZpb3VzX2hvdGNhdF9zdGF0ZSA9IHNldFN0YXRlKHdpbmRvdy5VcGxvYWRGb3JtLnByZXZpb3VzX2hvdGNhdF9zdGF0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFjb25mLndnSXNBcnRpY2xlIHx8XG5cdFx0XHRcdGNvbmYud2dBY3Rpb24gIT09ICd2aWV3JyB8fFxuXHRcdFx0XHRwYXJhbSgnZGlmZicpICE9PSBudWxsIHx8XG5cdFx0XHRcdHBhcmFtKCdvbGRpZCcpICE9PSBudWxsIHx8XG5cdFx0XHRcdCFjYW5fZWRpdCgpIHx8XG5cdFx0XHRcdEhDLmRpc2FibGUoKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGdldFBhZ2UoKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJ1biA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAoSEMuc3RhcnRlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRIQy5zdGFydGVkID0gdHJ1ZTtcblx0XHRyZWFsbHlfcnVuKCk7XG5cdH07XG5cdC8vIEV4cG9ydCBsZWdhY3kgZnVuY3Rpb25zXG5cdHdpbmRvdy5ob3RjYXRfZ2V0X3N0YXRlID0gKCk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHRcdHJldHVybiBnZXRTdGF0ZSgpO1xuXHR9O1xuXHR3aW5kb3cuaG90Y2F0X3NldF9zdGF0ZSA9IChzdGF0ZTogc3RyaW5nKTogbnVsbCA9PiB7XG5cdFx0cmV0dXJuIHNldFN0YXRlKHN0YXRlKTtcblx0fTtcblx0d2luZG93LmhvdGNhdF9jbG9zZV9mb3JtID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNsb3NlRm9ybSgpO1xuXHR9O1xuXHRIQy5ydW5XaGVuUmVhZHkgPSAoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0XHQvLyBydW4gdXNlci1yZWdpc3RlcmVkIGNvZGUgb25jZSBIb3RDYXQgaXMgZnVsbHkgc2V0IHVwIGFuZCByZWFkeS5cblx0XHRtdy5ob29rKCdob3RjYXQucmVhZHknKS5hZGQoY2FsbGJhY2spO1xuXHR9O1xuXHQvLyBSdW4gYXMgc29vbiBhcyBwb3NzaWJsZS4gVGhpcyB2YXJpZXMgZGVwZW5kaW5nIG9uIE1lZGlhV2lraSB2ZXJzaW9uO1xuXHQvLyB3aW5kb3cncyAnbG9hZCcgZXZlbnQgaXMgYWx3YXlzIHNhZmUsIGJ1dCB1c3VhbGx5IHdlIGNhbiBkbyBiZXR0ZXIgdGhhbiB0aGF0LlxuXHRpZiAoY29uZi53Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSAhPT0gJ1VwbG9hZCcpIHtcblx0XHQvLyBSZWxvYWQgSG90Q2F0IGFmdGVyIChWRSkgZWRpdHMgKGJ1ZyBUMTAzMjg1KVxuXHRcdG13Lmhvb2soJ3Bvc3RFZGl0JykuYWRkKCgpID0+IHtcblx0XHRcdC8vIFJlc2V0IEhvdENhdCBpbiBjYXNlIHRoaXMgaXMgYSBzb2Z0IHJlbG9hZCAoZS5nLiBWaXN1YWxFZGl0b3IgZWRpdCksIHVubGVzcyB0aGUgY2F0ZWdvcmllc1xuXHRcdFx0Ly8gd2VyZSBub3QgcmUtcmVuZGVyZWQgYW5kIG91ciBpbnRlcmZhY2UgaXMgc3RpbGwgdGhlcmUgKGUuZy4gRGlzY3Vzc2lvblRvb2xzIGVkaXQpXG5cdFx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGxpbmtzIC5ob3RjYXRsaW5rJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y2F0TGluZSA9IG51bGw7XG5cdFx0XHRlZGl0b3JzID0gW107XG5cdFx0XHRpbml0aWFsaXplZCA9IGZhbHNlO1xuXHRcdFx0SEMuc3RhcnRlZCA9IGZhbHNlO1xuXHRcdFx0cnVuKCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2UgY2FuIHNhZmVseSB0cmlnZ2VyIGp1c3QgYWZ0ZXIgdXNlciBjb25maWd1cmF0aW9uIGlzIGxvYWRlZC5cblx0Ly8gVXNlIGFsd2F5cygpIGluc3RlYWQgb2YgdGhlbigpIHRvIGFsc28gc3RhcnQgSG90Q2F0IGlmIHRoZSB1c2VyIG1vZHVsZSBoYXMgcHJvYmxlbXMuXG5cdCQocnVuKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNEdEIsSUFBQUMsb0JBQXdCRCxRQUFBLGlCQUFBO0FBR3hCLElBQU1FLFFBQXlDQyxlQUFjO0FBQzVELFVBQUEsR0FBT0Ysa0JBQUFHLFdBQVVELFNBQVM7QUFDM0I7O0FEREE7Ozs7Ozs7O0FBUUEsTUFBQSxHQUFLSixtQkFBQU0sU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFlBQVlDLE9BQXNDO0FBQzlFLE1BQ0NDLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CLE1BQU0sS0FDdkNDLE9BQU9DLGtDQUNQLENBQUNDLFNBQVNDLGNBQWMsa0JBQWtCLEdBQ3pDO0FBQ0Q7RUFDRDtBQUNBLFFBQU1DLE1BQU1kLE1BQU0saUJBQWlCO0FBQ25DLFFBQU1lLHdCQUF3QjtBQUM5QixRQUFNQyxXQUFXO0FBQ2pCLFFBQU1DLGtCQUFrQjtBQUN4QixRQUFNQyxjQUFjWCxHQUFHWSxRQUFRVixJQUFJUSxlQUFlO0FBT2xELFFBQU1HLGNBQWVDLGVBQThCO0FBQ2xELFdBQU9DLEVBQUUsUUFBUSxFQUFFQyxLQUFLLFNBQUEscUJBQUFDLE9BQThCSCxTQUFTLENBQUUsRUFB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OHpCLEtBQUssVUFBVSxFQUFFbG9CLElBQUksTUFBTTtBQUc3QixVQUFJdkwsU0FBU0MsY0FBYyx1QkFBdUIsR0FBRztBQUNwRDtNQUNEO0FBQ0FzVSxnQkFBVTtBQUNWRSxnQkFBVSxDQUFBO0FBQ1Z5ZCxvQkFBYztBQUNkeHJCLFNBQUdvdUIsVUFBVTtBQUNiRCxVQUFJO0lBQ0wsQ0FBQztFQUNGO0FBR0FuMEIsSUFBRW0wQixHQUFHO0FBQ04sQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAibXdBcGkiLCAidXNlckFnZW50IiwgImluaXRNd0FwaSIsICJnZXRCb2R5IiwgInRoZW4iLCAiaG90Q2F0Q2hlY2siLCAiJGJvZHkiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ3aW5kb3ciLCAiSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0T3B0T3V0IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiYXBpIiwgImNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCIsICJzZWxmTmFtZSIsICJzdG9yYWdlSXRlbU5hbWUiLCAic3RvcmFnZUl0ZW0iLCAic3RvcmFnZSIsICJjcmVhdGVqSWNvbiIsICJpY29uQ2xhc3MiLCAiJCIsICJhdHRyIiwgImNvbmNhdCIsICJ0ZXh0IiwgImNyZWF0ZU5vdGlmeUFyZWEiLCAidGV4dE5vZGUiLCAiaWNvbiIsICJzdGF0ZSIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiY3NzIiwgInBhZGRpbmciLCAib25lIiwgImUiLCAiX3NlbGYkd3BUZXh0Ym94MSR2YWx1IiwgInNlbGYiLCAibmV3VmFsIiwgIndwVGV4dGJveDEiLCAidmFsdWUiLCAicmVwbGFjZSIsICIkZGlhbG9nQ2hlY2tTdG9yYWdlIiwgIiRwZXJtYVNhdmVIaW50IiwgIiR0ZXh0SGludE5vZGUiLCAiJGRpYWxvZyIsICIkb3ZlcmxheSIsICJkb1JlbW92ZSIsICJ3cFN1bW1hcnkiLCAid3JpdGVTdG9yYWdlIiwgInZhbCIsICJzZXQiLCAiY2xvc2VEaWFsb2ciLCAiXyRvdmVybGF5IiwgIm9mZiIsICJyZW1vdmUiLCAiZmluZCIsICJ0cmlnZ2VyIiwgImZpbmlzaERpYWxvZyIsICJzdG9yYWdlVmFsdWUiLCAiXyRkaWFsb2dDaGVja1N0b3JhZ2UkIiwgImNoZWNrZWQiLCAiX2FkZFRvSlMiLCAiX2UiLCAicHJldmVudERlZmF1bHQiLCAiaGFzQ2xhc3MiLCAiJGVsIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgInRpdGxlIiwgInN1bW1hcnkiLCAiYXBwZW5kdGV4dCIsICJkYXRhIiwgImVkaXREb25lIiwgImVkaXRTdGF0IiwgImVycm9yIiwgIm5vdGlmeSIsICJjb2RlIiwgImluZm8iLCAidGFnIiwgInR5cGUiLCAiaGlkZSIsICJwb3N0V2l0aFRva2VuIiwgInByb21wdCIsICJpZCIsICJvbiIsICJzaG93IiwgImFwcGVuZFRvIiwgImRpc3BsYXkiLCAidXNlciIsICJpc0Fub24iLCAicm9sZSIsICJwcmVwZW5kIiwgImZpcnN0IiwgImV2ZW50IiwgInRhcmdldCIsICJrZXkiLCAiSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IiwgIiRva0xpbmsiLCAiaHJlZiIsICJkb0VkaXQiLCAicmVzdWx0IiwgIm5vY3JlYXRlIiwgImFqYXgiLCAidXJsIiwgImRhdGFUeXBlIiwgInN1Y2Nlc3MiLCAiY2FjaGUiLCAiaG90Q2F0TWVzc2FnZXMiLCAid2dVc2VyTGFuZ3VhZ2UiLCAiaW5jbHVkZXMiLCAibWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJhcmdzIiwgIm1lc3NhZ2UiLCAicGxhaW4iLCAiY3JlYXRlQ2F0ZWdvcnlUZXh0VG9vbHMiLCAiSEMiLCAid2lraVRleHRCbGFuayIsICJ3aWtpVGV4dEJsYW5rUkUiLCAid2lraVRleHRCbGFua09yQmlkaSIsICJlc2NhcGVSRSIsICJnZXRJbnRlcmxhbmd1YWdlUkUiLCAiZmluZENhdHNSRSIsICJSZWdFeHAiLCAiY2F0ZWdvcnlfcmVnZXhwIiwgInJlcGxhY2VCeUJsYW5rcyIsICJtYXRjaCIsICJmaW5kX2NhdGVnb3J5IiwgIndpa2l0ZXh0IiwgImNhdGVnb3J5IiwgIm9uY2UiLCAiY2F0X3JlZ2V4IiwgInRlbXBsYXRlX2NhdGVnb3JpZXMiLCAidGVtcGxhdGVfcmVnZXhwIiwgImNhdF9uYW1lIiwgImluaXRpYWwiLCAic2xpY2UiLCAiY2FwaXRhbGl6ZVBhZ2VOYW1lcyIsICJ0b1VwcGVyQ2FzZSIsICJ0b0xvd2VyQ2FzZSIsICJleGVjIiwgIm5vd2lraVJlZ2V4IiwgIlN0cmluZyIsICJyYXciLCAiX3RlbXBsYXRlT2JqZWN0IiwgIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCAiY29waWVkdGV4dCIsICJjdXJyX21hdGNoIiwgImxlbmd0aCIsICJyZSIsICJjaGFuZ2VfY2F0ZWdvcnkiLCAidG9SZW1vdmUiLCAidG9BZGQiLCAiaXNfaGlkZGVuIiwgImZpbmRfaW5zZXJ0aW9ucG9pbnQiLCAiX3dpa2l0ZXh0IiwgIl90ZW1wbGF0ZU9iamVjdDIiLCAiaW5kZXgiLCAibGFzdEluZGV4IiwgImludGVybGFuZ3VhZ2VSRSIsICJpZHgiLCAib25DYXQiLCAibmFtZVNwYWNlIiwgImNhdGVnb3J5X2Nhbm9uaWNhbCIsICJrZXlDaGFuZ2UiLCAibWF0Y2hlcyIsICJjYXRfcG9pbnQiLCAibWF0Y2hlc0FycmF5IiwgImZpcnN0TWF0Y2giLCAiYmVmb3JlIiwgIk1hdGgiLCAibWF4IiwgImFmdGVyIiwgIl9maXJzdE1hdGNoJCIsICJpIiwgImNoYXJBdCIsICJzZWFyY2giLCAiaiIsICJwb2ludCIsICJuZXdjYXRzdHJpbmciLCAic3VmZml4IiwgImsiLCAidW5jYXRfcmVnZXhwIiwgInR4dCIsICJQX25vX2RlZmF1bHQiLCAiUF95ZXNfZGVmYXVsdCIsICJleGlzdHNObyIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiZXhpc3RzWWVzIiwgImNyZWF0ZUhvdENhdENvbmZpZyIsICJjb25mIiwgImxpbmtzIiwgImNoYW5nZSIsICJhZGQiLCAicmVzdG9yZSIsICJ1bmRvIiwgImRvd24iLCAidXAiLCAiY2hhbmdlVGFnIiwgImFkZG11bHRpIiwgImRpc2FibGUiLCAibnMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAibnNJZHMiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dBcnRpY2xlSWQiLCAidGVzdCIsICJ3Z1RpdGxlIiwgInVwbG9hZF9kaXNhYmxlZCIsICJibGFja2xpc3QiLCAiYmdfY2hhbmdlZCIsICJub19hdXRvY29tbWl0IiwgImRlbF9uZWVkc19kaWZmIiwgInN1Z2dlc3RfZGVsYXkiLCAiZWRpdGJveF93aWR0aCIsICJzdWdnZXN0aW9ucyIsICJmaXhlZF9zZWFyY2giLCAidXNlX3VwX2Rvd24iLCAibGlzdFNpemUiLCAic2luZ2xlX21pbm9yIiwgImRvbnRfYWRkX3RvX3dhdGNobGlzdCIsICJzaG9ydGN1dHMiLCAiYWRkU2hvcnRjdXRzIiwgIm1hcCIsICJPYmplY3QiLCAiaGFzT3duIiwgInYiLCAidHJpbSIsICJjcmVhdGVIb3RDYXRVdGlsaXRpZXMiLCAiX2NvbmYkd2dGb3JtYXR0ZWROYW1lMiIsICJfdGVtcGxhdGVPYmplY3QzIiwgIl90ZW1wbGF0ZU9iamVjdDQiLCAiYXV0b0xvY2FsaXplIiwgIm5hbWVzcGFjZU51bWJlciIsICJmYWxsYmFjayIsICJfY29uZiR3Z0Zvcm1hdHRlZE5hbWUiLCAiY3JlYXRlUmVnZXhwU3RyIiwgIm5hbWUiLCAicmVnZXhfbmFtZSIsICJsbCIsICJ1bCIsICJfdGVtcGxhdGVPYmplY3Q1IiwgImNhbm9uaWNhbCIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAicmVnZXhwIiwgIm1ha2UiLCAiYXJnIiwgImxpdGVyYWwiLCAiY3JlYXRlVGV4dE5vZGUiLCAiY3JlYXRlRWxlbWVudCIsICJwYXJhbSIsICJ1cmkiLCAibG9jYXRpb24iLCAibSIsICJkZWNvZGVVUklDb21wb25lbnQiLCAic2NyaXB0IiwgIndnU2NyaXB0IiwgImluZGV4T2YiLCAid2dTZXJ2ZXIiLCAicHJvdG9jb2wiLCAicHJlZml4IiwgIndnQXJ0aWNsZVBhdGgiLCAiY2xhc3NOYW1lIiwgInNldFN0eWxlUHJvcGVydHkiLCAiZWxlbWVudCIsICJwcm9wZXJ0eSIsICJzdHlsZSIsICJjYXBpdGFsaXplIiwgInN0ciIsICJ3aWtpUGFnZVBhdGgiLCAicGFnZU5hbWUiLCAiX3RlbXBsYXRlT2JqZWN0NiIsICJzdWJzdGl0dXRlRmFjdG9yeSIsICJvcHRpb25zIiwgImxlYWQiLCAiaW5kaWNhdG9yIiwgImxicmFjZSIsICJyYnJhY2UiLCAiYWxwaGEiLCAicmVwbGFjZW1lbnQiLCAicmVwbGFjZVNob3J0Y3V0cyIsICJyZXBsYWNlSGFzaCIsICJzIiwgImNyZWF0ZVN1Z2dlc3Rpb25EYXRhIiwgImNhdFByZWZpeCIsICJ0b0NhdGVnb3J5VGl0bGVzIiwgIm1lbWJlcnMiLCAibWVtYmVyIiwgInN1Z2dlc3Rpb25FbmdpbmVzIiwgIm9wZW5zZWFyY2giLCAiaGFuZGxlciIsICJxdWVyeVJlc3VsdCIsICJxdWVyeUtleSIsICJ0aXRsZXMiLCAiZXhpc3RzIiwgInNwbGljZSIsICJub3JtYWxpemVkIiwgImludGVybmFsc2VhcmNoIiwgIl9xdWVyeVJlc3VsdCRxdWVyeSIsICJhbGxwYWdlcyIsICJxdWVyeSIsICJfcXVlcnlSZXN1bHQkcXVlcnkyIiwgInBhZ2VzIiwgInAiLCAic3ViY2F0ZWdvcmllcyIsICJfcXVlcnlSZXN1bHQkcXVlcnkzIiwgImNhdGVnb3J5bWVtYmVycyIsICJwYXJlbnRjYXRlZ29yaWVzIiwgIl9xdWVyeVJlc3VsdCRxdWVyeTQiLCAiY2F0ZWdvcmllcyIsICJzdWdnZXN0aW9uQ29uZmlncyIsICJzZWFyY2hpbmRleCIsICJlbmdpbmVzIiwgInRlbXAiLCAibm9Db21wbGV0aW9uIiwgInBhZ2VsaXN0IiwgImNvbWJpbmVkIiwgInN1YmNhdCIsICJwYXJlbnRjYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImhvdENhdCIsICJIb3RDYXQiLCAibm9kZU5hbWUiLCAid2dBY3Rpb24iLCAidWEiLCAibmF2aWdhdG9yIiwgImlzX3dlYmtpdCIsICJub1N1Z2dlc3Rpb25zIiwgImV2dEtleXMiLCAiY3RybEtleSIsICJtZXRhS2V5IiwgInNoaWZ0S2V5IiwgImV2dEtpbGwiLCAiX2V2ZW50JHN0b3BQcm9wYWdhdGlvIiwgInN0b3BQcm9wYWdhdGlvbiIsICJjYWxsIiwgImNhbmNlbEJ1YmJsZSIsICJjYXRMaW5lIiwgIm9uVXBsb2FkIiwgImVkaXRvcnMiLCAiY29tbWl0QnV0dG9uIiwgImNvbW1pdEZvcm0iLCAibXVsdGlTcGFuIiwgInBhZ2VUZXh0IiwgInBhZ2VUaW1lIiwgInBhZ2VXYXRjaGVkIiwgIndhdGNoQ3JlYXRlIiwgIndhdGNoRWRpdCIsICJtaW5vckVkaXRzIiwgImVkaXRUb2tlbiIsICJpc19ydGwiLCAic2VydmVyVGltZSIsICJsYXN0UmV2SWQiLCAicGFnZVRleHRSZXZJZCIsICJjb25mbGljdGluZ1VzZXIiLCAibmV3RE9NIiwgIlVOQ0hBTkdFRCIsICJPUEVOIiwgIkNIQU5HRV9QRU5ESU5HIiwgIkNIQU5HRUQiLCAiREVMRVRFRCIsICJzZXRQYWdlIiwgInN0YXJ0VGltZSIsICJfZGF0YSRxdWVyeSR1c2VyaW5mbyIsICJwYWdlIiwgInJldmlzaW9ucyIsICJsYXRlc3RSZXZpc2lvbiIsICJjb25mbGljdGluZ1JldmlzaW9uIiwgInNsb3RzIiwgIm1haW4iLCAiY29udGVudCIsICJ0aW1lc3RhbXAiLCAicmV2aWQiLCAiX2NvbmZsaWN0aW5nUmV2aXNpb24kIiwgImxhc3RyZXZpZCIsICJzdGFydHRpbWVzdGFtcCIsICJ3YXRjaGVkIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAibGFuZ2xpbmtzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJuIiwgImRvbmUiLCAibGFuZ2xpbmsiLCAibGFuZyIsICJfdGVtcGxhdGVPYmplY3Q3IiwgImVyciIsICJmIiwgImdlbmVyYWwiLCAidGltZSIsICJjYXNlIiwgInVzZXJpbmZvIiwgIndhdGNoY3JlYXRpb25zIiwgIndhdGNoZGVmYXVsdCIsICJtaW5vcmRlZmF1bHQiLCAic2F2ZUluUHJvZ3Jlc3MiLCAiaW5pdGlhdGVFZGl0IiwgImZhaWx1cmUiLCAib2xkQnV0dG9uU3RhdGUiLCAiZGlzYWJsZWQiLCAiZmFpbCIsICJmb3JtYXR2ZXJzaW9uIiwgInJhd2NvbnRpbnVlIiwgIndnUGFnZU5hbWUiLCAicHJvcCIsICJpbnByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAicnZsaW1pdCIsICJydmRpciIsICJydnN0YXJ0aWQiLCAid2dDdXJSZXZpc2lvbklkIiwgImxsbGltaXQiLCAibWV0YSIsICJ1aXByb3AiLCAic3RhdHVzIiwgInN0YXR1c1RleHQiLCAibXVsdGlDaGFuZ2VNc2ciLCAiY291bnQiLCAiY3VycmVudFRpbWVzdGFtcCIsICJub3ciLCAiRGF0ZSIsICJ0cyIsICJnZXRVVENGdWxsWWVhciIsICJ0d28iLCAiZ2V0VVRDTW9udGgiLCAiZ2V0VVRDRGF0ZSIsICJnZXRVVENIb3VycyIsICJnZXRVVENNaW51dGVzIiwgImdldFVUQ1NlY29uZHMiLCAicGVyZm9ybUNoYW5nZXMiLCAic2luZ2xlRWRpdG9yIiwgInNlbGZFZGl0Q29uZmxpY3QiLCAid2dVc2VyTmFtZSIsICJub0NvbW1pdCIsICJ3cEVkaXRUb2tlbiIsICJ3cERpZmYiLCAid3BTYXZlIiwgImNoYW5nZWQiLCAiYWRkZWQiLCAiZGVsZXRlZCIsICJ0b0VkaXQiLCAiZWRpdCIsICJjaGFuZ2VzIiwgIm9yaWdpbmFsQ2F0ZWdvcnkiLCAiY3VycmVudENhdGVnb3J5IiwgImN1cnJlbnRLZXkiLCAiY3VycmVudEhpZGRlbiIsICJmcm9tIiwgInRvIiwgIndwTWlub3JlZGl0IiwgIndwV2F0Y2h0aGlzIiwgIndwQ2hhbmdlVGFncyIsICJ3cEF1dG9TdW1tYXJ5IiwgImpvaW4iLCAic2hvcnRTdW1tYXJ5IiwgImFycm93IiwgImpvaW5lZFN1bW1hcnkiLCAiZmluYWxTdW1tYXJ5IiwgIndwU3RhcnR0aW1lIiwgIndwRWRpdHRpbWUiLCAib2xkaWQiLCAiaGNDb21taXQiLCAiY2xpY2siLCAicmVzb2x2ZU9uZSIsICJ0b1Jlc29sdmUiLCAiY2F0cyIsICJpc19kYWIiLCAiaXNfcmVkaXIiLCAicmVkaXJlY3QiLCAiY2F0ZWdvcnlpbmZvIiwgImhpZGRlbiIsICJpc19taXNzaW5nIiwgIm1pc3NpbmciLCAicGFnZVRpdGxlIiwgImVkaXRvciIsICJkYWJJbnB1dENsZWFuZWQiLCAiaW5wdXRFeGlzdHMiLCAic3JjIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImNhdF8iLCAiY2F0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImxpbmsiLCAiZGFiIiwgInJlc29sdmVSZWRpcmVjdHMiLCAicmVzb2x2ZU11bHRpIiwgImNhbGxiYWNrIiwgImRhYklucHV0IiwgImxhc3RJbnB1dCIsICJwbG5hbWVzcGFjZSIsICJwbGxpbWl0IiwgImNsbGltaXQiLCAianNvbiIsICJyZXEiLCAibWFrZUFjdGl2ZSIsICJ3aGljaCIsICJpc19hY3RpdmUiLCAiX2kiLCAiX2VkaXRvcnMiLCAiaW5hY3RpdmF0ZSIsICJzaG93RGFiIiwgImV4cGVjdGVkSW5wdXQiLCAibGFzdFJlYWxJbnB1dCIsICJhY3R1YWxWYWx1ZSIsICJzaG93c0xpc3QiLCAic3BsaXQiLCAibGFzdFNlbGVjdGlvbiIsICJzdGFydCIsICJlbmQiLCAiZGlzcGxheUxpc3QiLCAic2V0VGltZW91dCIsICJzZXRTZWxlY3Rpb24iLCAic2hvd1N1Z2dlc3Rpb25zIiwgIm11bHRpU3VibWl0IiwgIl9pMiIsICJfZWRpdG9yczIiLCAibXNnIiwgInJlc29sdmVkIiwgImZpcnN0RGFiIiwgImRvbnRDaGFuZ2UiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiYWNjZXB0Q2hlY2siLCAiY29tbWl0IiwgInNldE11bHRpSW5wdXQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJyZXBsYWNlV2l0aCIsICJjaGVja011bHRpSW5wdXQiLCAiaGFzQ2hhbmdlcyIsICJfaTMiLCAiX2VkaXRvcnMzIiwgIkJTIiwgIlRBQiIsICJSRVQiLCAiRVNDIiwgIlNQQUNFIiwgIlBHVVAiLCAiUEdET1dOIiwgIlVQIiwgIkRPV04iLCAiREVMIiwgIklNRSIsICJDYXRlZ29yeUVkaXRvciIsICJpc0NvbXBvc2l0aW9uU3RhcnQiLCAiaXNBZGRDYXRlZ29yeSIsICJjYXRMaW5rIiwgIm9yaWdpbmFsS2V5IiwgIm9yaWdpbmFsRXhpc3RzIiwgIm9yaWdpbmFsSGlkZGVuIiwgIm9yaWdpbmFsU3RhdGUiLCAibGlua1NwYW4iLCAibm9ybWFsTGlua3MiLCAidW5kZWxMaW5rIiwgInVwRG93bkxpbmtzIiwgInVuZG9MaW5rIiwgImxpbmUiLCAic3BhbiIsICJlbmdpbmUiLCAiZW5naW5lTmFtZSIsICJlbmdpbmVTZWxlY3RvciIsICJmb3JtIiwgImxpc3QiLCAib2siLCAiY2FuY2VsQnV0dG9uIiwgImN1cnJlbnRFeGlzdHMiLCAibGFzdFNhdmVkU3RhdGUiLCAibGFzdFNhdmVkQ2F0ZWdvcnkiLCAibGFzdFNhdmVkS2V5IiwgImxhc3RTYXZlZEV4aXN0cyIsICJsYXN0U2F2ZWRIaWRkZW4iLCAibGFzdFF1ZXJ5IiwgImltZSIsICJ1c2VzQ29tcG9zaXRpb24iLCAibGFzdEtleSIsICJrZXlDb3VudCIsICJjYWxsYmFja09iaiIsICJjb25zdHJ1Y3RvciIsICJpbml0aWFsaXplIiwgImRpciIsICJmaXJzdENoaWxkIiwgIm1ha2VMaW5rU3BhbiIsICJhZnRlckVsZW1lbnQiLCAiYWRkU3BhbiIsICJwYXJlbnROb2RlIiwgImluc2VydEJlZm9yZSIsICJuZXh0U2libGluZyIsICJvcGVuIiwgImJpbmQiLCAib3V0ZXJTcGFuIiwgImludm9rZVN1Z2dlc3Rpb25zIiwgImRvbnRfYXV0b2NvbXBsZXRlIiwgInRleHRjaGFuZ2UiLCAibWFrZUZvcm0iLCAibWV0aG9kIiwgImFjY2VwdCIsICJzaXplIiwgInByb2Nlc3NLZXkiLCAicmVzZXRLZXlTZWxlY3Rpb24iLCAiY2FuY2VsIiwgIk51bWJlciIsICJzYXZlVmlldyIsICJoaWdobGlnaHRTdWdnZXN0aW9uIiwgImZvY3VzIiwgIm9wdCIsICJzZWxlY3RlZCIsICJzZWxlY3RlZEluZGV4IiwgIk9LIiwgInBvc2l0aW9uIiwgIndoaXRlU3BhY2UiLCAiX2k0IiwgIl9lZGl0b3JzNCIsICJyZWFkT25seSIsICJyZW1vdmVFZGl0b3IiLCAiYmFja2dyb3VuZENvbG9yIiwgIm5leHQiLCAicm9sbGJhY2siLCAiZG9udENoZWNrIiwgInNhbml0aXplSW5wdXQiLCAiY2xvc2UiLCAiX2k1IiwgIl9lZGl0b3JzNSIsICJjc3NUZXh0IiwgInRleHREZWNvcmF0aW9uIiwgInNlbGVjdEVuZ2luZSIsICJtYWtlQ2FsbCIsICJjbGVhbktleSIsICJjYiIsICJ6IiwgImNhbGxzTWFkZSIsICJub2ZDYWxscyIsICJhbGxUaXRsZXMiLCAic3VnZ2VzdGlvbkNvbmZpZyIsICJkb250Q2FjaGUiLCAiY2FuY2VsbGVkIiwgImdldEpTT04iLCAiZm9yY2UiLCAicGlwZSIsICJjYWNoZWRUaXRsZXMiLCAibWFrZUNhbGxzIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImVuZ2luZV8iLCAid2dTY3JpcHRQYXRoIiwgImRvbnRBdXRvY29tcGxldGUiLCAiaW5wdXRWYWx1ZSIsICJjYXRlZ29yeU5hbWUiLCAidk5vcm1hbGl6ZWQiLCAia25vd25Ub0V4aXN0IiwgInZMb3ciLCAic29ydCIsICJhIiwgImIiLCAicHJlZml4TWF0Y2hBIiwgInByZWZpeE1hdGNoQiIsICJhTG93IiwgImJMb3ciLCAiZmlyc3RUaXRsZSIsICJjb21wbGV0ZWQiLCAiYXV0b0NvbXBsZXRlIiwgImV4aXN0aW5nIiwgIm5vZkl0ZW1zIiwgIm1pbiIsICJ6SW5kZXgiLCAiYW5jaG9yIiwgImxpc3RoIiwgInRvcCIsICJvZmZzZXRUb3AiLCAib2Zmc2V0SGVpZ2h0IiwgIm1heExpc3RIZWlnaHQiLCAidmlld3BvcnQiLCAid2hhdCIsICJkb2N1bWVudEVsZW1lbnQiLCAic2Nyb2xsX29mZnNldCIsICJub2RlIiwgImJveCIsICJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCAieCIsICJyb3VuZCIsICJsZWZ0IiwgInkiLCAidGV4dFBvcyIsICJubCIsICJudCIsICJvZmZzZXQiLCAidGV4dEJveFdpZHRoIiwgIm9mZnNldFdpZHRoIiwgImNsaWVudFdpZHRoIiwgIndpZHRoIiwgInNjcm9sbCIsICJ2aWV3X3ciLCAidyIsICJsX3BvcyIsICJyaWdodCIsICJyZWxhdGl2ZV9vZmZzZXQiLCAiYWN0VmFsIiwgIm5vcm1hbGl6ZWRBY3RWYWwiLCAiZG9udE1vZGlmeSIsICJjYW5TZWxlY3QiLCAic2V0U2VsZWN0aW9uUmFuZ2UiLCAic2VsZWN0aW9uU3RhcnQiLCAiZ2V0U2VsZWN0aW9uIiwgIl90aGlzJHRleHQkc2VsZWN0aW9uRSIsICJzZWxlY3Rpb25FbmQiLCAiY3VyciIsICJ0Z3QiLCAib3B0aW9uVGV4dCIsICJob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0IiwgIkhvdENhdERvbnRBZGRUb1dhdGNobGlzdCIsICJob3RjYXRfbm9fYXV0b2NvbW1pdCIsICJIb3RDYXROb0F1dG9Db21taXQiLCAiaG90Y2F0X2RlbF9uZWVkc19kaWZmIiwgIkhvdENhdERlbE5lZWRzRGlmZiIsICJob3RjYXRfc3VnZ2VzdGlvbl9kZWxheSIsICJIb3RDYXRTdWdnZXN0aW9uRGVsYXkiLCAiaG90Y2F0X2VkaXRib3hfd2lkdGgiLCAiSG90Q2F0RWRpdEJveFdpZHRoIiwgImhvdGNhdF9zdWdnZXN0aW9ucyIsICJIb3RDYXRTdWdnZXN0aW9ucyIsICJob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQiLCAiSG90Q2F0Rml4ZWRTdWdnZXN0aW9ucyIsICJob3RjYXRfc2luZ2xlX2NoYW5nZXNfYXJlX21pbm9yIiwgIkhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlcyIsICJob3RjYXRfY2hhbmdlZF9iYWNrZ3JvdW5kIiwgIkhvdENhdENoYW5nZWRCYWNrZ3JvdW5kIiwgImhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3MiLCAiSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rcyIsICJob3RjYXRfbGlzdF9zaXplIiwgIkhvdENhdExpc3RTaXplIiwgIkhvdENhdENoYW5nZVRhZyIsICJlRm9ybSIsICJlZGl0Zm9ybSIsICJjYXRSZWdFeHAiLCAib2xkVHh0IiwgImlzTWlub3JDaGFuZ2UiLCAiX29sZFR4dCRtYXRjaCIsICJfbmV3VHh0JG1hdGNoIiwgInRleHRib3giLCAibmV3VHh0IiwgIm9sZExpbmVzIiwgIm5ld0xpbmVzIiwgImV4Y2VwdCIsICJhQXJyIiwgImJBcnIiLCAibEFyciIsICJzQXJyIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgIml0ZW0iLCAiaW5kIiwgImNBcnIiLCAiZmlsdGVyIiwgImMiLCAidHJpbW1lZCIsICJzdW0iLCAic3VtQSIsICJfZUZvcm0kd3BUZXh0Ym94MSR2YWwiLCAiX2VGb3JtJHdwVGV4dGJveCIsICIkY3QiLCAicmVtb3ZlQ2hhbmdlVGFnIiwgInBhcnNlSW50IiwgImlzTmFOIiwgIl9pNiIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJib2R5IiwgImRpcmVjdGlvbiIsICJkZWZhdWx0VmlldyIsICJnZXRDb21wdXRlZFN0eWxlIiwgImdldFByb3BlcnR5VmFsdWUiLCAiY2FuX2VkaXQiLCAiY2xvc2VGb3JtIiwgIl9pNyIsICJfZWRpdG9yczYiLCAic2V0dXBfdXBsb2FkIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwgImlwIiwgInJldXBsb2FkIiwgImRlc3RGaWxlIiwgImxhYmVsQ2VsbCIsICJsaW5lQ2VsbCIsICJ0ZXh0QWxpZ24iLCAibWFyZ2luIiwgImJvcmRlciIsICJsYWJlbCIsICJ2ZXJ0aWNhbEFsaWduIiwgIm5ld1JvdyIsICJpbnNlcnRSb3ciLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MyIsICJlYiIsICJhZGRlZE9uZSIsICJfaTgiLCAiX2VkaXRvcnM3IiwgInQiLCAibmV3X2NhdCIsICJfdGVtcGxhdGVPYmplY3Q4IiwgIl9jbGVhbmVkVGV4dCIsICJwcmV2aW91c0NsZWFuZWRUZXh0IiwgInJlZ2V4IiwgImNsZWFuZWRUZXh0IiwgImlzT25QYWdlIiwgIm5vZGVUeXBlIiwgIk5vZGUiLCAiRUxFTUVOVF9OT0RFIiwgImNhdFRpdGxlIiwgImdldEF0dHJpYnV0ZSIsICJfdGVtcGxhdGVPYmplY3Q5IiwgImluaXRpYWxpemVkIiwgInNldHVwVGltZW91dCIsICJmaW5kQnlDbGFzcyIsICJzY29wZSIsICJzZXR1cCIsICJhZGRpdGlvbmFsV29yayIsICJjbGVhclRpbWVvdXQiLCAiaGlkZGVuQ2F0cyIsICJfaGlkZGVuQ2F0cyRwYXJlbnROb2QiLCAiZm9vdGVyIiwgImNvbnRhaW5lciIsICJjcmVhdGVFZGl0b3JzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiY29weUNhdHMiLCAiQXJyYXkiLCAiX2k5IiwgIl9jb3B5Q2F0cyIsICJhdCIsICJsYXN0U3BhbiIsICJlbmFibGVNdWx0aSIsICJpbm5lckhUTUwiLCAiY3Vyc29yIiwgIkZ1bmN0aW9uIiwgImhvb2siLCAiZmlyZSIsICJjcmVhdGVDb21taXRGb3JtIiwgImZvcm1Db250YWluZXIiLCAid2dQYWdlQ29udGVudE1vZGVsIiwgImdldFBhZ2UiLCAic2V0U3RhdGUiLCAibmV3U3BhbnMiLCAiY2F0TmFtZSIsICJfaTAiLCAiX25ld1NwYW5zIiwgIm5ld1NwYW4iLCAiZ2V0U3RhdGUiLCAiX2kxIiwgIl9lZGl0b3JzOCIsICJyZWFsbHlfcnVuIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIlVwbG9hZEZvcm0iLCAicHJldmlvdXNfaG90Y2F0X3N0YXRlIiwgIndnSXNBcnRpY2xlIiwgInJ1biIsICJzdGFydGVkIiwgImhvdGNhdF9nZXRfc3RhdGUiLCAiaG90Y2F0X3NldF9zdGF0ZSIsICJob3RjYXRfY2xvc2VfZm9ybSIsICJydW5XaGVuUmVhZHkiXQp9Cg==
