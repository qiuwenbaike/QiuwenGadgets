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
//! src/HotCat/modules/api.ts
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
    return $("<span>").attr("class", "hotcat-check-icon ".concat(iconClass)).text(" ");
  };
  const createNotifyArea = (textNode, icon, state) => {
    return $("<div>").addClass("hotcat-check-notice").append($("<div>").attr("class", "hotcat-check-notice-content ".concat(state)).css({
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
      $("body").find("#hotcatCommitForm").trigger("submit");
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
        const $body = $("body");
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
  $(function loadHotCatCheck() {
    const $body = $("body");
    $body.find("#catlinks").find("ul:first").append($("<li>").append($okLink));
  });
})();
//! src/HotCat/HotCat.ts
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
//! src/HotCat/images/P_no.svg
var P_no_default = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="22.5"><defs><linearGradient xlink:href="#a" id="b" x1="92.604" x2="263.83" y1="304.51" y2="26.29" gradientTransform="rotate(-31.61 15.21 6.403)scale(.05544)" gradientUnits="userSpaceOnUse"/><linearGradient id="a"><stop offset="0" stop-color="#a0a3e1"/><stop offset="1" stop-color="#dedcfa"/></linearGradient></defs><path fill="url(#b)" d="M21.471 6.034A8.427 10.534 58.39 1 1 3.528 17.077 8.427 10.534 58.39 1 1 21.471 6.034"/><use xlink:href="#c" width="400" height="360" opacity=".3" transform="translate(1.109 1.109)"/><path id="c" fill="#000" fill-opacity="1" fill-rule="nonzero" stroke="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-opacity="1" stroke-width=".055" d="M7.771 17.276h2.164c.905-2.767 4.427-9.374 7.446-11.688.626-.804-.946-1.136-2.214-.604-1.91.802-7.9 11.135-7.396 12.292M9.073 5.31H6.856c-.196.335 7.045 8.697 9.36 11.716.803.626 1.135-.946.603-2.214-.802-1.91-6.793-7.71-7.746-9.502"/></svg>';
//! src/HotCat/images/P_yes.svg
var P_yes_default = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="22.5"><defs><linearGradient xlink:href="#a" id="b" x1="92.604" x2="263.83" y1="304.51" y2="26.29" gradientTransform="rotate(-31.61 15.21 6.403)scale(.05544)" gradientUnits="userSpaceOnUse"/><linearGradient id="a"><stop offset="0" stop-color="#a0a3e1"/><stop offset="1" stop-color="#dedcfa"/></linearGradient></defs><path fill="url(#b)" d="M21.472 6.034A8.428 10.534 58.391 1 1 3.528 17.077 8.428 10.534 58.391 1 1 21.472 6.034"/><use xlink:href="#c" width="400" height="360" opacity=".3" transform="translate(1.109 1.109)"/><path id="c" fill="#000" fill-opacity="1" fill-rule="evenodd" stroke="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-opacity="1" stroke-width=".055" d="M5.64 13.84s2.515 2.833 3.018 3.99h2.164c.905-2.767 4.427-9.373 7.446-11.688.626-.804-.945-1.136-2.213-.603-1.912.802-5.516 6.928-6.19 8.402-.955.252-1.962-1.61-1.962-1.61Z"/></svg>';
//! src/HotCat/HotCat.ts
/*!
 * @description Ajax-based simple Category manager. Allows adding/removing/changing categories on a page view.
 * Supports multiple category changes, as well as redirect and disambiguation resolution. Also
 * plugs into the upload form. Search engines to use for the suggestion list are configurable, and
 * can be selected interactively.
 *
 * @see {@link https://commons.wikimedia.org/wiki/Help:Gadget-HotCat}
 * @author authors <https://commons.wikimedia.org/wiki/Help:Gadget-HotCat/Version_history>
 */
hotCatMessages();
(function hotCat() {
  var _formattedNamespaces$2;
  const conf = mw.config["values"];
  if (window.HotCat && !window.HotCat.nodeName || conf.wgAction === "edit") {
    return;
  }
  const api = mwApi("HotCat/3.0");
  const HC = {
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
      nsIds && (ns === nsIds["creator"] || ns === nsIds["timedtext"] || ns === nsIds["institution"]) || false;
    },
    // A regexp matching a templates used to mark uncategorized pages, if your wiki does have that.
    // If not, set it to null.
    uncat_regexp: /{{\s*[Uu]ncategorized\s*[^}]*}}\s*(<!--.*?-->\s*)?/g,
    // The images used for the little indication icon. Should not need changing.
    existsYes: "data:image/svg+xml,".concat(encodeURIComponent(P_yes_default)),
    existsNo: "data:image/svg+xml,".concat(encodeURIComponent(P_no_default)),
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
    // Filled in below
    category_canonical: "",
    category_regexp: "",
    template_regexp: ""
  };
  window.HotCat = HC;
  const ua = navigator.userAgent.toLowerCase();
  const is_webkit = /applewebkit\/\d+/.test(ua) && !ua.includes("spoofer");
  let cat_prefix = null;
  let noSuggestions = false;
  const wikiTextBlank = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["[	 _  ᠎ - \u2028\u2029  　]+"], ["[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+"])));
  const wikiTextBlankRE = new RegExp(wikiTextBlank, "g");
  const wikiTextBlankOrBidi = String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["[	 _  ᠎ -​‎‏\u2028-  　]*"], ["[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200B\\u200E\\u200F\\u2028-\\u202F\\u205F\\u3000]*"])));
  const formattedNamespaces = conf.wgFormattedNamespaces;
  const namespaceIds = conf.wgNamespaceIds;
  const autoLocalize = (namespaceNumber, fallback) => {
    var _formattedNamespaces$;
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
      return regex_name.replace(/([$()*+.?\\^])/g, String.raw(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["$1"], ["\\$1"])))).replace(wikiTextBlankRE, wikiTextBlank);
    };
    fallback = fallback.toLowerCase();
    const canonical = ((_formattedNamespaces$ = formattedNamespaces[String(namespaceNumber)]) !== null && _formattedNamespaces$ !== void 0 ? _formattedNamespaces$ : "").toLowerCase();
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
  HC.category_canonical = (_formattedNamespaces$2 = formattedNamespaces["14"]) !== null && _formattedNamespaces$2 !== void 0 ? _formattedNamespaces$2 : "";
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
    return str.replace(/([$()*+.?[\\\]^])/g, String.raw(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["$1"], ["\\$1"]))));
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
      const s = replaceHash(str, map !== null && map !== void 0 ? map : void 0);
      return HC.capitalizePageNames ? capitalize(s) : s;
    };
  })();
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
    const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["(s|S)*?</no"], ["(\\s|\\S)*?</no"]))), "wiki", ">"), "g");
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
      const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["(s|S)*?</no"], ["(\\s|\\S)*?</no"]))), "wiki", ">"), "g");
      const copiedtext = _wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
      let index = -1;
      findCatsRE.lastIndex = 0;
      while (findCatsRE.exec(copiedtext) !== null) {
        index = findCatsRE.lastIndex;
      }
      if (index < 0) {
        let match = null;
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
      if (toAdd && // nameSpace = matches[ 0 ].match[ 1 ] || nameSpace; Canonical namespace should be always preferred
      key === null) {
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
          cat_prefix || (cat_prefix = new RegExp("^(".concat(HC.category_regexp, "):")));
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
          let _title = pages[p].title;
          _title = _title.slice(Math.max(0, _title.indexOf(":") + 1));
          const titles = [_title];
          titles.exists = true;
          if (queryKey !== _title) {
            titles.normalized = _title;
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
    $("body").trigger("hotcatSetupCompleted");
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
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hvdENhdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvSG90Q2F0L21vZHVsZXMvY2hlY2sudHMiLCAic3JjL0hvdENhdC9Ib3RDYXQudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL2dldE1lc3NhZ2UudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Ib3RDYXQvaW1hZ2VzL1Bfbm8uc3ZnIiwgInNyYy9Ib3RDYXQvaW1hZ2VzL1BfeWVzLnN2ZyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbi8vIEluaXRpYWxpemUgTWVkaWFXaWtpIEFQSVxuY29uc3QgbXdBcGk6ICh1c2VyQWdlbnQ/OiBzdHJpbmcpID0+IG13LkFwaSA9ICh1c2VyQWdlbnQpID0+IHtcblx0cmV0dXJuIGluaXRNd0FwaSh1c2VyQWdlbnQpO1xufTtcblxuZXhwb3J0IHttd0FwaX07XG4iLCAiaW1wb3J0ICcuL2NoZWNrLmxlc3MnO1xuaW1wb3J0IHttd0FwaX0gZnJvbSAnLi9hcGknO1xuXG4vKipcbiAqIENoZWNrQ2F0ZWdvcmllcyBIb3RDYXQgRXh0ZW5zaW9uIOKAk1xuICogcmVtb3ZlcyB0aGUgdGVtcGxhdGUgd2hlbiBjYXRlZ29yaXppbmcgKHByb21wdHMgYmVmb3JlKSB3aXRoIEhvdENhdCBhbmRcbiAqIGFkZHMgYSBsaW5rIFwiQ2F0ZWdvcmllcyBhcmUgT0tcIiB0byB0aGUgY2F0ZWdvcnktc2VjdGlvblxuICpcbiAqIEByZXYgMiAoMjAxNC0wMy0yMClcbiAqIEBhdXRob3IgUmlsbGtlLCAyMDEyXG4gKi9cbihmdW5jdGlvbiBob3RDYXRDaGVjaygpIHtcblx0aWYgKFxuXHRcdG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgIT09IDYgfHxcblx0XHR3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0T3B0T3V0IHx8XG5cdFx0IWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2NhdGVnb3JpZXMnKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgYXBpID0gbXdBcGkoJ2hvdENhdENoZWNrLzIuMCcpO1xuXHRjb25zdCBjaGVja0NhdGVnb3JpZXNSZWdFeHAgPSAve3tbQ2NdaGVja1sgX11jYXRlZ29yaWVzW157fV0qfX0vZztcblx0Y29uc3Qgc2VsZk5hbWUgPSAnKFtbTWVkaWFXaWtpOkdhZGdldC1Ib3RDYXQtY2hlY2suanN8U2NyaXB0XV0pOiAnO1xuXHRjb25zdCBzdG9yYWdlSXRlbU5hbWUgPSAnY2hlY2tDYXQnO1xuXHRjb25zdCBzdG9yYWdlSXRlbSA9IG13LnN0b3JhZ2UuZ2V0KHN0b3JhZ2VJdGVtTmFtZSk7XG5cdC8qKlxuXHQgKiBBIGZldyBzdHlsaW5nIGhlbHBlciBmdW5jdGlvbnNcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGljb25DbGFzc1xuXHQgKiBAcmV0dXJuIHtKUXVlcnl9XG5cdCAqL1xuXHRjb25zdCBjcmVhdGVqSWNvbiA9IChpY29uQ2xhc3M6IHN0cmluZyk6IEpRdWVyeSA9PiB7XG5cdFx0cmV0dXJuICQoJzxzcGFuPicpLmF0dHIoJ2NsYXNzJywgYGhvdGNhdC1jaGVjay1pY29uICR7aWNvbkNsYXNzfWApLnRleHQoJyAnKTtcblx0fTtcblx0Y29uc3QgY3JlYXRlTm90aWZ5QXJlYSA9ICh0ZXh0Tm9kZTogSlF1ZXJ5PEpRdWVyeS5Ob2RlPiwgaWNvbjogc3RyaW5nLCBzdGF0ZTogc3RyaW5nKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9PiB7XG5cdFx0cmV0dXJuICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnaG90Y2F0LWNoZWNrLW5vdGljZScpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdFx0LmF0dHIoJ2NsYXNzJywgYGhvdGNhdC1jaGVjay1ub3RpY2UtY29udGVudCAke3N0YXRlfWApXG5cdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHQnbWFyZ2luLXRvcCc6ICcyMHB4Jyxcblx0XHRcdFx0XHRcdHBhZGRpbmc6ICcwLjdlbScsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxwPicpLmFwcGVuZChjcmVhdGVqSWNvbihpY29uKS5jc3MoJ21hcmdpblJpZ2h0JywgJzAuM2VtJyksIHRleHROb2RlKSlcblx0XHRcdCk7XG5cdH07XG5cdC8vIFJlbW92ZSBcImNoZWNrIGNhdGVnb3JpZXNcIiB3aGVuIHVzaW5nIEhvdENhdFxuXHQvLyBPbmx5IGV4ZWN1dGVkIG9uIGZpcnN0IHN1Ym1pdFxuXHQkKCdib2R5Jykub25lKCdzdWJtaXQuY2hlY2tDYXRMaXN0ZW5lcicsICcjaG90Y2F0Q29tbWl0Rm9ybScsIGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKHN0b3JhZ2VJdGVtID09PSAnZGlzYWJsZWQnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cblx0XHRjb25zdCBuZXdWYWwgPSAoc2VsZi53cFRleHRib3gxIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlPy5yZXBsYWNlKGNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCwgJycpO1xuXHRcdGxldCAkZGlhbG9nQ2hlY2tTdG9yYWdlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRcdGxldCAkcGVybWFTYXZlSGludDogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0XHRsZXQgJHRleHRIaW50Tm9kZTtcblx0XHRsZXQgJGRpYWxvZztcblx0XHRsZXQgJG92ZXJsYXk6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdFx0Y29uc3QgZG9SZW1vdmUgPSAoKSA9PiB7XG5cdFx0XHQoc2VsZi53cFN1bW1hcnkgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPVxuXHRcdFx0XHRgUmVtb3ZpbmcgW1tUZW1wbGF0ZTpDaGVjayBjYXRlZ29yaWVzfHt7Q2hlY2sgY2F0ZWdvcmllc319XV0gJHsoc2VsZi53cFN1bW1hcnkgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWV9YDtcblxuXHRcdFx0KHNlbGYud3BUZXh0Ym94MSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA9IG5ld1ZhbDtcblx0XHR9O1xuXHRcdGNvbnN0IHdyaXRlU3RvcmFnZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuXHRcdFx0bXcuc3RvcmFnZS5zZXQoc3RvcmFnZUl0ZW1OYW1lLCB2YWwsIDYwICogNjAgKiAyNCAqIDcpOyAvLyA3IGRheXNcblx0XHR9O1xuXHRcdGNvbnN0IGNsb3NlRGlhbG9nID0gKCkgPT4ge1xuXHRcdFx0JChkb2N1bWVudCkub2ZmKCdrZXlkb3duLmhvdGNhdENoZWNrJyk7XG5cdFx0XHQkb3ZlcmxheT8ucmVtb3ZlKCk7XG5cdFx0XHQkKCdib2R5JykuZmluZCgnI2hvdGNhdENvbW1pdEZvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZpbmlzaERpYWxvZyA9IChzdG9yYWdlVmFsdWU/OiBzdHJpbmcpID0+IHtcblx0XHRcdGlmIChzdG9yYWdlVmFsdWUgJiYgKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKHN0b3JhZ2VWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRjbG9zZURpYWxvZygpO1xuXHRcdH07XG5cdFx0Y29uc3QgX2FkZFRvSlMgPSBmdW5jdGlvbiAodGhpczogSFRNTEVsZW1lbnQsIF9lOiBKUXVlcnkuRXZlbnQpIHtcblx0XHRcdF9lLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAoJHBlcm1hU2F2ZUhpbnQuaGFzQ2xhc3MoJ2hvdGNhdC1jaGVjay1kaXNhYmxlZCcpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRlbDogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICQodGhpcyk7XG5cdFx0XHQkZWwub2ZmKCdjbGljaycpLnRleHQoJ1BsZWFzZSB3YWl0LicpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQuYWRkQ2xhc3MoJ2hvdGNhdC1jaGVjay1kaXNhYmxlZCcpO1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0aXRsZTogYFVzZXI6JHttdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyl9L2NvbW1vbi5qc2AsXG5cdFx0XHRcdHN1bW1hcnk6IGAke3NlbGZOYW1lfVNhdmluZyBIb3RDYXQgY29uZmlndXJhdGlvbi5gLFxuXHRcdFx0XHRhcHBlbmR0ZXh0OiAkZWwuZGF0YSgnYWRkVGV4dCcpIGFzIHN0cmluZyxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBlZGl0RG9uZSA9IChlZGl0U3RhdD86IHtlcnJvcj86IHtjb2RlPzogc3RyaW5nOyBpbmZvPzogc3RyaW5nfX0pID0+IHtcblx0XHRcdFx0aWYgKCFlZGl0U3RhdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWRpdFN0YXQuZXJyb3IpIHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdGBVbmFibGUgdG8gc2F2ZSB0byB5b3VyIGNvbW1vbi5qcyB1c2luZyB0aGUgQVBJXFxuJHtlZGl0U3RhdC5lcnJvci5jb2RlfVxcbiR7ZWRpdFN0YXQuZXJyb3IuaW5mb31gLFxuXHRcdFx0XHRcdFx0e3RhZzogJ2hvdENhdENoZWNrJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0LUVycm9yIScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdEb25lLicpO1xuXHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHZvaWQgYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbXMpLnRoZW4oZWRpdERvbmUpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogT24gV2lraW1lZGlhIENvbW1vbnMgdGhlcmUgd2VyZSBwZW9wbGUgd2hvIHNhaWQ6XG5cdFx0ICogXCJDYXRlZ29yaXppbmcgd2l0aCBIb3RDYXQgZG9lcyBsZWdpdCBhdXRvbWF0ZWQgcmVtb3ZhbCBvZiB0aGUgY2hlY2stY2F0LW1lc3NhZ2VcIlxuXHRcdCAqIFNvIHdlIGludmVudGVkIGEgZGlhbG9nIHRoYXQgc2hvdWxkIGJlIHJlYWRhYmxlIGJ5IHVzZXJzIGV2ZW4gd2l0aCB2ZXJ5IGZldyBFbmdsaXNoIHNraWxscy5cblx0XHQgKi9cblx0XHRjb25zdCBwcm9tcHQgPSAoKSA9PiB7XG5cdFx0XHQkZGlhbG9nQ2hlY2tTdG9yYWdlID0gJCgnPGlucHV0PicpXG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdGlkOiAnaG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0U3RvcmFnZScsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGlmICgodGhpcyBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5zaG93KCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmhpZGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0JHRleHRIaW50Tm9kZSA9ICQoJzx1bD4nKTtcblx0XHRcdCQoJzxsaT4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjJylcblx0XHRcdFx0XHRcdC50ZXh0KCdEaXNhYmxlIHRoaXMgZmVhdHVyZS4nKVxuXHRcdFx0XHRcdFx0LmRhdGEoJ2FkZFRleHQnLCAnXFxud2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCA9IHRydWU7Jylcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBfYWRkVG9KUylcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kVG8oJHRleHRIaW50Tm9kZSk7XG5cdFx0XHQkKCc8bGk+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHQudGV4dCgnUmVtb3ZlIHt7Y2hlY2sgY2F0ZWdvcmllc319IHdoZW4gZWRpdGluZyB1c2luZyBIb3RDYXQgd2l0aG91dCBwcm9tcHRpbmcuJylcblx0XHRcdFx0XHRcdC5kYXRhKCdhZGRUZXh0JywgJ1xcbndpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQgPSB0cnVlOycpXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX2FkZFRvSlMpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZFRvKCR0ZXh0SGludE5vZGUpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQgPSBjcmVhdGVOb3RpZnlBcmVhKFxuXHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCdTYXZlIHRoZXNlIHNldHRpbmcgaW4geW91ciBjb21tb24uanM6ICcpLmFwcGVuZCgkdGV4dEhpbnROb2RlKSxcblx0XHRcdFx0J2hvdGNhdC1jaGVjay1pY29uLWluZm8nLFxuXHRcdFx0XHQnaG90Y2F0LWNoZWNrLWhpZ2hsaWdodCdcblx0XHRcdCk7XG5cdFx0XHQkZGlhbG9nID0gJCgnPGRpdj4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdFx0J2ZvbnQtc2l6ZSc6ICcyZW0nLFxuXHRcdFx0XHRcdFx0XHQnbGluZS1oZWlnaHQnOiAnMS44ZW0nLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpLnRleHQoJyB7e2NoZWNrIGNhdGVnb3JpZXN9fSAnKS5jc3Moe1xuXHRcdFx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJyNGOENDQjAnLFxuXHRcdFx0XHRcdFx0XHRcdCd0ZXh0LWRlY29yYXRpb24nOiAnbGluZS10aHJvdWdoICFpbXBvcnRhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+JykudGV4dCgnID8nKVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0Jzxicj4nLFxuXHRcdFx0XHRcdCRkaWFsb2dDaGVja1N0b3JhZ2UsXG5cdFx0XHRcdFx0JCgnPGxhYmVsPicpLmF0dHIoJ2ZvcicsICdob3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRTdG9yYWdlJykudGV4dChcIkRvbid0IGFzayBhZ2FpblwiKSxcblx0XHRcdFx0XHQnPGJyPidcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kKG13LnVzZXIuaXNBbm9uKCkgPyAnJyA6ICRwZXJtYVNhdmVIaW50LmhpZGUoKSk7XG5cdFx0XHQkb3ZlcmxheSA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2hvdGNhdC1jaGVjay1vdmVybGF5JykuYXR0cigncm9sZScsICdwcmVzZW50YXRpb24nKTtcblx0XHRcdCRkaWFsb2cgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnaG90Y2F0LWNoZWNrLWRpYWxvZycpXG5cdFx0XHRcdC5hdHRyKHtyb2xlOiAnZGlhbG9nJywgJ2FyaWEtbW9kYWwnOiAndHJ1ZScsICdhcmlhLWxhYmVsbGVkYnknOiAnaG90Y2F0LWNoZWNrLWRpYWxvZy10aXRsZSd9KVxuXHRcdFx0XHQucHJlcGVuZCgkKCc8aDI+JykuYXR0cignaWQnLCAnaG90Y2F0LWNoZWNrLWRpYWxvZy10aXRsZScpLnRleHQoJ3t7Y2hlY2sgY2F0ZWdvcmllc319ICjiiJIpPycpKVxuXHRcdFx0XHQuYXBwZW5kKCRkaWFsb2cpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdob3RjYXQtY2hlY2stZGlhbG9nLWJ1dHRvbnMnKVxuXHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPGJ1dHRvbj4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoJ1llcywgUmVtb3ZlJylcblx0XHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdGZpbmlzaERpYWxvZygnYXV0bycpO1xuXHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHQkKCc8YnV0dG9uPicpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcblx0XHRcdFx0XHRcdFx0XHQudGV4dCgnTm8sIGtlZXAgaXQnKVxuXHRcdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRmaW5pc2hEaWFsb2coJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdCRvdmVybGF5LmFwcGVuZCgkZGlhbG9nKS5hcHBlbmRUbygnYm9keScpO1xuXHRcdFx0JGRpYWxvZy5maW5kKCdidXR0b24nKS5maXJzdCgpLnRyaWdnZXIoJ2ZvY3VzJyk7XG5cdFx0XHQkb3ZlcmxheS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0aWYgKGV2ZW50LnRhcmdldCA9PT0gJG92ZXJsYXlbMF0pIHtcblx0XHRcdFx0XHRjbG9zZURpYWxvZygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdrZXlkb3duLmhvdGNhdENoZWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdrZXlkb3duLmhvdGNhdENoZWNrJyk7XG5cdFx0XHRcdFx0Y2xvc2VEaWFsb2coKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGlmIChuZXdWYWwgIT09IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUpIHtcblx0XHRcdGlmICh3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IHx8IHN0b3JhZ2VJdGVtID09PSAnYXV0bycpIHtcblx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRwcm9tcHQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xuXHQvLyBBZGQgT0stTGluayB0byB0aGUgY2F0cyBwYW5lbFxuXHRjb25zdCAkb2tMaW5rID0gJCgnPGE+Jylcblx0XHQuYXR0cih7XG5cdFx0XHRocmVmOiAnIycsXG5cdFx0XHR0aXRsZTogJ0NhdGVnb3JpZXMgYXJlIE9LISBJbW1lZGlhdGVseSByZW1vdmUgdGhlIHRlbXBsYXRlLicsXG5cdFx0fSlcblx0XHQuYXBwZW5kKCc8cz4nKVxuXHRcdC50ZXh0KCd7e0NoZWNrIGNhdGVnb3JpZXN9fScpO1xuXHQkb2tMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0ICRlbCA9ICQodGhpcyk7XG5cdFx0JGVsLm9mZignY2xpY2snKTtcblx0XHRjb25zdCBkb0VkaXQgPSAocmVzdWx0OiBzdHJpbmcpID0+IHtcblx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRlbC50ZXh0KCdEb2luZy4nKTtcblx0XHRcdGNvbnN0IHRleHQgPSByZXN1bHQucmVwbGFjZShjaGVja0NhdGVnb3JpZXNSZWdFeHAsICcnKTtcblx0XHRcdGlmICh0ZXh0ID09PSByZXN1bHQpIHtcblx0XHRcdFx0JGVsLnRleHQoJ1RlbXBsYXRlIG5vdCBmb3VuZCEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0dGV4dCxcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0aXRsZTogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdFx0XHRzdW1tYXJ5OiBgJHtzZWxmTmFtZX1DYXRlZ29yaWVzIGFyZSBjaGVja2VkIGFuZCBPSy4gWW91IGNhbiBoZWxwIFtbQ2F0ZWdvcnk6TWVkaWEgbmVlZGluZyBjYXRlZ29yeSByZXZpZXd8cmV2aWV3aW5nXV0hYCxcblx0XHRcdFx0bm9jcmVhdGU6IHRydWUsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZWRpdERvbmUgPSAoZWRpdFN0YXQ/OiB7ZXJyb3I/OiB7Y29kZT86IHN0cmluZzsgaW5mbz86IHN0cmluZ319KSA9PiB7XG5cdFx0XHRcdGlmICghZWRpdFN0YXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVkaXRTdGF0LmVycm9yKSB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRgVW5hYmxlIHRvIHJlbW92ZSBcIkNoZWNrIGNhdGVnb3JpZXNcIiB3aXRoIHRoZSBBUElcXG4ke2VkaXRTdGF0LmVycm9yLmNvZGV9XFxuJHtlZGl0U3RhdC5lcnJvci5pbmZvfWAsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRhZzogJ2hvdENhdENoZWNrJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0LUVycm9yIScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0IERvbmUuJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdCRib2R5LmZpbmQoJy5jaGVja2NhdGVnb3JpZXMnKS5oaWRlKCk7XG5cdFx0XHR9O1xuXHRcdFx0JGVsLnRleHQoJ0RvaW5nLi4nKTtcblx0XHRcdHZvaWQgYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbXMpLnRoZW4oZWRpdERvbmUpO1xuXHRcdH07XG5cdFx0JGVsLnRleHQoJ0RvaW5nJyk7XG5cdFx0dm9pZCAkLmFqYXgoe1xuXHRcdFx0dXJsOiBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHR0aXRsZTogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnJlcGxhY2UoLyAvZywgJ18nKSxcblx0XHRcdH0sXG5cdFx0XHRkYXRhVHlwZTogJ3RleHQnLFxuXHRcdFx0ZXJyb3I6ICgpID0+IHtcblx0XHRcdFx0JGVsLnRleHQoJ0Vycm9yIScpO1xuXHRcdFx0fSxcblx0XHRcdHN1Y2Nlc3M6IGRvRWRpdCxcblx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0Y2FjaGU6IGZhbHNlLFxuXHRcdH0pO1xuXHR9KTtcblx0JChmdW5jdGlvbiBsb2FkSG90Q2F0Q2hlY2soKSB7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHkuZmluZCgnI2NhdGxpbmtzJykuZmluZCgndWw6Zmlyc3QnKS5hcHBlbmQoJCgnPGxpPicpLmFwcGVuZCgkb2tMaW5rKSk7XG5cdH0pO1xufSkoKTtcbiIsICIvKiFcbiAqIEBkZXNjcmlwdGlvbiBBamF4LWJhc2VkIHNpbXBsZSBDYXRlZ29yeSBtYW5hZ2VyLiBBbGxvd3MgYWRkaW5nL3JlbW92aW5nL2NoYW5naW5nIGNhdGVnb3JpZXMgb24gYSBwYWdlIHZpZXcuXG4gKiBTdXBwb3J0cyBtdWx0aXBsZSBjYXRlZ29yeSBjaGFuZ2VzLCBhcyB3ZWxsIGFzIHJlZGlyZWN0IGFuZCBkaXNhbWJpZ3VhdGlvbiByZXNvbHV0aW9uLiBBbHNvXG4gKiBwbHVncyBpbnRvIHRoZSB1cGxvYWQgZm9ybS4gU2VhcmNoIGVuZ2luZXMgdG8gdXNlIGZvciB0aGUgc3VnZ2VzdGlvbiBsaXN0IGFyZSBjb25maWd1cmFibGUsIGFuZFxuICogY2FuIGJlIHNlbGVjdGVkIGludGVyYWN0aXZlbHkuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9IZWxwOkdhZGdldC1Ib3RDYXR9XG4gKiBAYXV0aG9yIGF1dGhvcnMgPGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvSGVscDpHYWRnZXQtSG90Q2F0L1ZlcnNpb25faGlzdG9yeT5cbiAqL1xuaW1wb3J0ICcuL21vZHVsZXMvY2hlY2snO1xuaW1wb3J0IHR5cGUge1xuXHRIb3RDYXRBcGlQYWdlLFxuXHRIb3RDYXRBcGlRdWVyeVJlc3BvbnNlLFxuXHRIb3RDYXRDb25maWcsXG5cdEhvdENhdE13Q29uZmlnLFxuXHRIb3RDYXRTdWdnZXN0aW9uQ2FsbGJhY2ssXG5cdEhvdENhdFN1Z2dlc3Rpb25Db25maWcsXG5cdEhvdENhdFN1Z2dlc3Rpb25FbmdpbmUsXG5cdEhvdENhdFN1Z2dlc3Rpb25UaXRsZXMsXG59IGZyb20gJy4vbW9kdWxlcy90eXBlcyc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9nZXRNZXNzYWdlJztcbmltcG9ydCB7aG90Q2F0TWVzc2FnZXN9IGZyb20gJy4vbW9kdWxlcy9tZXNzYWdlcyc7XG5pbXBvcnQge213QXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcbmltcG9ydCBwbm8gZnJvbSAnLi9pbWFnZXMvUF9uby5zdmcnO1xuaW1wb3J0IHB5ZXMgZnJvbSAnLi9pbWFnZXMvUF95ZXMuc3ZnJztcblxuLy8gTG9hZCB0cmFuc2xhdGlvbnMgbG9jYWxseVxuaG90Q2F0TWVzc2FnZXMoKTtcblxuLy8gTWFpbiBib2R5XG4oZnVuY3Rpb24gaG90Q2F0KCk6IHZvaWQge1xuXHQvLyBEb24ndCB1c2UgbXcuY29uZmlnLmdldCgpIGFzIHRoYXQgdGFrZXMgYSBjb3B5IG9mIHRoZSBjb25maWcsIGFuZCBzbyBkb2Vzbid0XG5cdC8vIGFjY291bnQgZm9yIHZhbHVlcyBjaGFuZ2luZywgZS5nLiB3Z0N1clJldmlzaW9uSWQgYWZ0ZXIgYSBWRSBlZGl0XG5cdGNvbnN0IGNvbmY6IEhvdENhdE13Q29uZmlnID0gbXcuY29uZmlnWyd2YWx1ZXMnXTtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAoKHdpbmRvdy5Ib3RDYXQgJiYgISh3aW5kb3cuSG90Q2F0IGFzIHVua25vd24gYXMge25vZGVOYW1lPzogc3RyaW5nfSkubm9kZU5hbWUpIHx8IGNvbmYud2dBY3Rpb24gPT09ICdlZGl0Jykge1xuXHRcdHJldHVybjsgLy8gTm90IG9uIGVkaXQgbW9kZVxuXHR9XG5cdC8vIEluaXRpYWxpemUgTWVkaWFXaWtpIEFQSVxuXHRjb25zdCBhcGkgPSBtd0FwaSgnSG90Q2F0LzMuMCcpO1xuXHQvLyBDb25maWd1cmF0aW9uIHN0dWZmLlxuXHRjb25zdCBIQzogSG90Q2F0Q29uZmlnID0ge1xuXHRcdC8vIFRoZSBsaXR0bGUgbW9kaWZpY2F0aW9uIGxpbmtzIGRpc3BsYXllZCBhZnRlciBjYXRlZ29yeSBuYW1lcy4gVSsyMjEyIGlzIGEgbWludXMgc2lnbjsgVSsyMTkzIGFuZCBVKzIxOTEgYXJlXG5cdFx0Ly8gZG93bndhcmQgYW5kIHVwd2FyZCBwb2ludGluZyBhcnJvd3MuIERvIG5vdCB1c2Ug4oaTIGFuZCDihpEgaW4gdGhlIGNvZGUhXG5cdFx0bGlua3M6IHtcblx0XHRcdGNoYW5nZTogJyjCsSknLFxuXHRcdFx0cmVtb3ZlOiAnKFxcdTIyMTIpJyxcblx0XHRcdGFkZDogJygrKScsXG5cdFx0XHRyZXN0b3JlOiAnKMOXKScsXG5cdFx0XHR1bmRvOiAnKMOXKScsXG5cdFx0XHRkb3duOiAnKFxcdTIxOTMpJyxcblx0XHRcdHVwOiAnKFxcdTIxOTEpJyxcblx0XHR9LFxuXHRcdGNoYW5nZVRhZzogJ0hvdENhdCcsXG5cdFx0Ly8gVGhlIEhUTUwgY29udGVudCBvZiB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGluayBhdCB0aGUgZnJvbnQuXG5cdFx0YWRkbXVsdGk6ICc8c3Bhbj4rPHN1cD4rPC9zdXA+PC9zcGFuPicsXG5cdFx0Ly8gUmV0dXJuIHRydWUgdG8gZGlzYWJsZSBIb3RDYXQuXG5cdFx0ZGlzYWJsZTogKCk6IGJvb2xlYW4gPT4ge1xuXHRcdFx0Y29uc3QgbnMgPSBjb25mLndnTmFtZXNwYWNlTnVtYmVyO1xuXHRcdFx0Y29uc3QgbnNJZHMgPSBjb25mLndnTmFtZXNwYWNlSWRzO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0bnMgPCAwIHx8XG5cdFx0XHRcdC8vIFNwZWNpYWwgcGFnZXM7IFNwZWNpYWw6VXBsb2FkIGlzIGhhbmRsZWQgZGlmZmVyZW50bHlcblx0XHRcdFx0bnMgPT09IDEwIHx8XG5cdFx0XHRcdC8vIFRlbXBsYXRlc1xuXHRcdFx0XHRucyA9PT0gODI4IHx8XG5cdFx0XHRcdC8vIE1vZHVsZSAoTHVhKVxuXHRcdFx0XHRucyA9PT0gOCB8fFxuXHRcdFx0XHQvLyBNZWRpYVdpa2lcblx0XHRcdFx0KG5zID09PSA2ICYmICFjb25mLndnQXJ0aWNsZUlkKSB8fFxuXHRcdFx0XHQvLyBOb24tZXhpc3RpbmcgZmlsZSBwYWdlc1xuXHRcdFx0XHQobnMgPT09IDIgJiYgL1xcLihqc3xjc3MpJC8udGVzdChjb25mLndnVGl0bGUpKSB8fFxuXHRcdFx0XHQvLyBVc2VyIHNjcmlwdHNcblx0XHRcdFx0KG5zSWRzICYmIChucyA9PT0gbnNJZHNbJ2NyZWF0b3InXSB8fCBucyA9PT0gbnNJZHNbJ3RpbWVkdGV4dCddIHx8IG5zID09PSBuc0lkc1snaW5zdGl0dXRpb24nXSkpIHx8XG5cdFx0XHRcdGZhbHNlXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0Ly8gQSByZWdleHAgbWF0Y2hpbmcgYSB0ZW1wbGF0ZXMgdXNlZCB0byBtYXJrIHVuY2F0ZWdvcml6ZWQgcGFnZXMsIGlmIHlvdXIgd2lraSBkb2VzIGhhdmUgdGhhdC5cblx0XHQvLyBJZiBub3QsIHNldCBpdCB0byBudWxsLlxuXHRcdHVuY2F0X3JlZ2V4cDogL3t7XFxzKltVdV1uY2F0ZWdvcml6ZWRcXHMqW159XSp9fVxccyooPCEtLS4qPy0tPlxccyopPy9nLFxuXHRcdC8vIFRoZSBpbWFnZXMgdXNlZCBmb3IgdGhlIGxpdHRsZSBpbmRpY2F0aW9uIGljb24uIFNob3VsZCBub3QgbmVlZCBjaGFuZ2luZy5cblx0XHRleGlzdHNZZXM6IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtlbmNvZGVVUklDb21wb25lbnQocHllcyl9YCxcblx0XHRleGlzdHNObzogYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke2VuY29kZVVSSUNvbXBvbmVudChwbm8pfWAsXG5cdFx0Ly8gYSBsaXN0IG9mIGNhdGVnb3JpZXMgd2hpY2ggY2FuIGJlIHJlbW92ZWQgYnkgcmVtb3ZpbmcgYSB0ZW1wbGF0ZVxuXHRcdC8vIGtleTogdGhlIGNhdGVnb3J5IHdpdGhvdXQgbmFtZXNwYWNlXG5cdFx0Ly8gdmFsdWU6IEEgcmVnZXhwIG1hdGNoaW5nIHRoZSB0ZW1wbGF0ZSBuYW1lLCBhZ2FpbiB3aXRob3V0IG5hbWVzcGFjZVxuXHRcdC8vIElmIHlvdSBkb24ndCBoYXZlIHRoaXMgYXQgeW91ciB3aWtpLCBvciBkb24ndCB3YW50IHRoaXMsIHNldCBpdCB0byBhbiBlbXB0eSBvYmplY3Qge30uXG5cdFx0dGVtcGxhdGVfY2F0ZWdvcmllczoge30sXG5cdFx0Ly8gT3ZlcnJpZGUgdGhlIGRlY2lzaW9uIG9mIHdoZXRoZXIgSG90Q2F0IHNob3VsZCBoZWxwIHVzZXJzIGJ5IGF1dG9tYXRpY2FsbHlcblx0XHQvLyBjYXBpdGFsaXNpbmcgdGhlIHRpdGxlIGluIHRoZSB1c2VyIGlucHV0IHRleHQgaWYgdGhlIHdpa2kgaGFzIGNhc2Utc2Vuc2l0aXZlIHBhZ2UgbmFtZXMuXG5cdFx0Ly8gQmFzaWNhbGx5LCB0aGlzIHdpbGwgbWFrZSBhbiBBUEkgcXVlcnkgdG8gY2hlY2sgdGhlIE1lZGlhV2lraSBjb25maWd1cmF0aW9uIGFuZCBIb3RDYXQgdGhlbiBzZXRzXG5cdFx0Ly8gdGhpcyB0byB0cnVlIGZvciBtb3N0IHdpa2lzLCBhbmQgdG8gZmFsc2Ugb24gV2lrdGlvbmFyeS5cblx0XHQvL1xuXHRcdC8vIFlvdSBjYW4gc2V0IHRoaXMgZGlyZWN0bHkgaWYgdGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggaXQuIEZvciBleGFtcGxlLCBHZW9yZ2lhbiBXaWtpcGVkaWEgKGthd2lraSksXG5cdFx0Ly8gaXMga25vd24gdG8gaGF2ZSBkaWZmZXJlbnQgY2FwaXRhbGlzYXRpb24gbG9naWMgYmV0d2VlbiBNZWRpYVdpa2kgUEhQIGFuZCBKYXZhU2NyaXB0LiBBcyBzdWNoLCBhdXRvbWF0aWNcblx0XHQvLyBjYXNlIGNoYW5nZXMgaW4gSmF2YVNjcmlwdCBieSBIb3RDYXQgd291bGQgYmUgd3JvbmcuXG5cdFx0Y2FwaXRhbGl6ZVBhZ2VOYW1lczogbnVsbCxcblx0XHQvLyBJZiB1cGxvYWRfZGlzYWJsZWQgaXMgdHJ1ZSwgSG90Q2F0IHdpbGwgbm90IGJlIHVzZWQgb24gdGhlIFVwbG9hZCBmb3JtLlxuXHRcdHVwbG9hZF9kaXNhYmxlZDogZmFsc2UsXG5cdFx0Ly8gU2luZ2xlIHJlZ3VsYXIgZXhwcmVzc2lvbiBtYXRjaGluZyBibGFja2xpc3RlZCBjYXRlZ29yaWVzIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgb3Jcblx0XHQvLyBhZGRlZCB1c2luZyBIb3RDYXQuIEZvciBpbnN0YW5jZSAvXFxic3R1YnM/JC8gKGFueSBjYXRlZ29yeSBlbmRpbmcgd2l0aCB0aGUgd29yZCBcInN0dWJcIlxuXHRcdC8vIG9yIFwic3R1YnNcIiksIG9yIC8oXFxic3R1YnM/JCl8XFxibWFpbnRlbmFuY2VcXGIvIChzdHViIGNhdGVnb3JpZXMgYW5kIGFueSBjYXRlZ29yeSB3aXRoIHRoZVxuXHRcdC8vIHdvcmQgXCJtYWludGVuYW5jZVwiIGluIGl0cyB0aXRsZS5cblx0XHRibGFja2xpc3Q6IG51bGwsXG5cdFx0Ly8gU3R1ZmYgY2hhbmdlYWJsZSBieSB1c2Vyczpcblx0XHQvLyBCYWNrZ3JvdW5kIGZvciBjaGFuZ2VkIGNhdGVnb3JpZXMgaW4gbXVsdGktZWRpdCBtb2RlLiBEZWZhdWx0IGlzIGEgdmVyeSBsaWdodCBzYWxtb24gcGluay5cblx0XHRiZ19jaGFuZ2VkOiAnI0ZDQScsXG5cdFx0Ly8gSWYgdHJ1ZSwgSG90Q2F0IHdpbGwgbmV2ZXIgYXV0b21hdGljYWxseSBzdWJtaXQgY2hhbmdlcy4gSG90Q2F0IHdpbGwgb25seSBvcGVuIGFuIGVkaXQgcGFnZSB3aXRoXG5cdFx0Ly8gdGhlIGNoYW5nZXM7IHVzZXJzIG11c3QgYWx3YXlzIHNhdmUgZXhwbGljaXRseS5cblx0XHRub19hdXRvY29tbWl0OiBmYWxzZSxcblx0XHQvLyBJZiB0cnVlLCB0aGUgXCJjYXRlZ29yeSBkZWxldGlvblwiIGxpbmsgXCIoLSlcIiB3aWxsIG5ldmVyIHNhdmUgYXV0b21hdGljYWxseSBidXQgYWx3YXlzIHNob3cgYW5cblx0XHQvLyBlZGl0IHBhZ2Ugd2hlcmUgdGhlIHVzZXIgaGFzIHRvIHNhdmUgdGhlIGVkaXQgbWFudWFsbHkuIElzIGZhbHNlIGJ5IGRlZmF1bHQgYmVjYXVzZSB0aGF0J3MgdGhlXG5cdFx0Ly8gdHJhZGl0aW9uYWwgYmVoYXZpb3IuIFRoaXMgc2V0dGluZyBvdmVycmlkZXMgbm9fYXV0b2NvbW1pdCBmb3IgXCIoLSlcIiBsaW5rcy5cblx0XHRkZWxfbmVlZHNfZGlmZjogZmFsc2UsXG5cdFx0Ly8gVGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0aGF0IEhvdENhdCB3YWl0cyBhZnRlciBhIGtleXN0cm9rZSBiZWZvcmUgbWFraW5nIGEgcmVxdWVzdCB0byB0aGVcblx0XHQvLyBzZXJ2ZXIgdG8gZ2V0IHN1Z2dlc3Rpb25zLlxuXHRcdHN1Z2dlc3RfZGVsYXk6IDEwMDAsXG5cdFx0Ly8gRGVmYXVsdCB3aWR0aCwgaW4gY2hhcmFjdGVycywgb2YgdGhlIHRleHQgaW5wdXQgZmllbGQuXG5cdFx0ZWRpdGJveF93aWR0aDogNDAsXG5cdFx0Ly8gT25lIG9mIHRoZSBlbmdpbmVfbmFtZXMgYWJvdmUsIHRvIGJlIHVzZWQgYXMgdGhlIGRlZmF1bHQgc3VnZ2VzdGlvbiBlbmdpbmUuXG5cdFx0c3VnZ2VzdGlvbnM6ICdjb21iaW5lZCcsXG5cdFx0Ly8gSWYgdHJ1ZSwgYWx3YXlzIHVzZSB0aGUgZGVmYXVsdCBlbmdpbmUsIGFuZCBuZXZlciBkaXNwbGF5IGEgc2VsZWN0b3IuXG5cdFx0Zml4ZWRfc2VhcmNoOiBmYWxzZSxcblx0XHQvLyBJZiBmYWxzZSwgZG8gbm90IGRpc3BsYXkgdGhlIFwidXBcIiBhbmQgXCJkb3duXCIgbGlua3Ncblx0XHR1c2VfdXBfZG93bjogdHJ1ZSxcblx0XHQvLyBEZWZhdWx0IGxpc3Qgc2l6ZVxuXHRcdGxpc3RTaXplOiAxMCxcblx0XHQvLyBJZiB0cnVlLCBzaW5nbGUgY2F0ZWdvcnkgY2hhbmdlcyBhcmUgbWFya2VkIGFzIG1pbm9yIGVkaXRzLiBJZiBmYWxzZSwgdGhleSdyZSBub3QuXG5cdFx0c2luZ2xlX21pbm9yOiB0cnVlLFxuXHRcdC8vIElmIHRydWUsIG5ldmVyIGFkZCBhIHBhZ2UgdG8gdGhlIHVzZXIncyB3YXRjaGxpc3QuIElmIGZhbHNlLCBwYWdlcyBnZXQgYWRkZWQgdG8gdGhlIHdhdGNobGlzdCBpZlxuXHRcdC8vIHRoZSB1c2VyIGhhcyB0aGUgXCJBZGQgcGFnZXMgSSBlZGl0IHRvIG15IHdhdGNobGlzdFwiIG9yIHRoZSBcIkFkZCBwYWdlcyBJIGNyZWF0ZSB0byBteSB3YXRjaGxpc3RcIlxuXHRcdC8vIG9wdGlvbnMgaW4gaGlzIG9yIGhlciBwcmVmZXJlbmNlcyBzZXQuXG5cdFx0ZG9udF9hZGRfdG9fd2F0Y2hsaXN0OiBmYWxzZSxcblx0XHRzaG9ydGN1dHM6IG51bGwsXG5cdFx0YWRkU2hvcnRjdXRzOiAobWFwPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IG51bGwpOiB2b2lkID0+IHtcblx0XHRcdGlmICghbWFwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdEhDLnNob3J0Y3V0cyB8fD0ge307XG5cdFx0XHRmb3IgKGxldCBrIGluIG1hcCkge1xuXHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24obWFwLCBrKSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB2ID0gbWFwW2tdO1xuXHRcdFx0XHRpZiAodHlwZW9mIHYgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ayA9IGsudHJpbSgpO1xuXHRcdFx0XHR2ID0gdi50cmltKCk7XG5cdFx0XHRcdGlmIChrLmxlbmd0aCA9PT0gMCB8fCB2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdEhDLnNob3J0Y3V0c1trXSA9IHY7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyBGaWxsZWQgaW4gYmVsb3dcblx0XHRjYXRlZ29yeV9jYW5vbmljYWw6ICcnLFxuXHRcdGNhdGVnb3J5X3JlZ2V4cDogJycsXG5cdFx0dGVtcGxhdGVfcmVnZXhwOiAnJyxcblx0fTtcblx0d2luZG93LkhvdENhdCA9IEhDO1xuXHQvLyBNb3JlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBXZSBoYXZlIGEgZmV3IHBsYWNlcyB3aGVyZSB3ZSB0ZXN0IGZvciB0aGUgYnJvd3Nlcjogb25jZSBmb3Jcblx0Ly8gU2FmYXJpIDwgMy4wLCBhbmQgdHdpY2UgZm9yIFdlYktpdCAoQ2hyb21lIG9yIFNhZmFyaSwgYW55IHZlcnNpb25zKVxuXHRjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcblx0Y29uc3QgaXNfd2Via2l0ID0gL2FwcGxld2Via2l0XFwvXFxkKy8udGVzdCh1YSkgJiYgIXVhLmluY2x1ZGVzKCdzcG9vZmVyJyk7XG5cdGxldCBjYXRfcHJlZml4OiBSZWdFeHAgfCBudWxsID0gbnVsbDtcblx0bGV0IG5vU3VnZ2VzdGlvbnMgPSBmYWxzZTtcblx0Ly8gTm8gZnVydGhlciBjaGFuZ2VzIHNob3VsZCBiZSBuZWNlc3NhcnkgaGVyZS5cblx0Ly8gVGhlIGZvbGxvd2luZyByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5ncyBhcmUgdXNlZCB3aGVuIHNlYXJjaGluZyBmb3IgY2F0ZWdvcmllcyBpbiB3aWtpdGV4dC5cblx0Y29uc3Qgd2lraVRleHRCbGFuayA9IFN0cmluZy5yYXdgW1xcdCBfXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAwQVxcdTIwMjhcXHUyMDI5XFx1MjAyRlxcdTIwNUZcXHUzMDAwXStgO1xuXHRjb25zdCB3aWtpVGV4dEJsYW5rUkUgPSBuZXcgUmVnRXhwKHdpa2lUZXh0QmxhbmssICdnJyk7XG5cdC8vIFJlZ2V4cCBmb3IgaGFuZGxpbmcgYmxhbmtzIGluc2lkZSBhIGNhdGVnb3J5IHRpdGxlIG9yIG5hbWVzcGFjZSBuYW1lLlxuXHQvLyBTZWUge0BsaW5rIGh0dHA6Ly9zdm4ud2lraW1lZGlhLm9yZy92aWV3dmMvbWVkaWF3aWtpL3RydW5rL3BoYXNlMy9pbmNsdWRlcy9UaXRsZS5waHA/cmV2aXNpb249MTA0MDUxJnZpZXc9bWFya3VwI2wyNzIyfVxuXHQvLyBTZWUgYWxzbyB7QGxpbmsgaHR0cDovL3d3dy5maWxlZm9ybWF0LmluZm8vaW5mby91bmljb2RlL2NhdGVnb3J5L1pzL2xpc3QuaHRtfVxuXHQvLyAgIE1lZGlhV2lraSBjb2xsYXBzZXMgc2V2ZXJhbCBjb250aWd1b3VzIGJsYW5rcyBpbnNpZGUgYSBwYWdlIHRpdGxlIHRvIG9uZSBzaW5nbGUgYmxhbmsuIEl0IGFsc28gcmVwbGFjZSBhXG5cdC8vIG51bWJlciBvZiBzcGVjaWFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBieSBzaW1wbGUgYmxhbmtzLiBBbmQgZmluYWxseSwgYmxhbmtzIGFyZSB0cmVhdGVkIGFzIHVuZGVyc2NvcmVzLlxuXHQvLyBUaGVyZWZvcmUsIHdoZW4gbG9va2luZyBmb3IgcGFnZSB0aXRsZXMgaW4gd2lraXRleHQsIHdlIG11c3QgaGFuZGxlIGFsbCB0aGVzZSBjYXNlcy5cblx0Ly8gICBOb3RlOiB3ZSBfZG9fIGluY2x1ZGUgdGhlIGhvcml6b250YWwgdGFiIGluIHRoZSBhYm92ZSBsaXN0LCBldmVuIHRob3VnaCB0aGUgTWVkaWFXaWtpIHNvZnR3YXJlIGZvciBzb21lIHJlYXNvblxuXHQvLyBhcHBlYXJzIHRvIG5vdCBoYW5kbGUgaXQuIFRoZSB6ZXJvLXdpZHRoIHNwYWNlIFxcdTIwMEIgaXMgX25vdF8gaGFuZGxlZCBhcyBhIHNwYWNlIGluc2lkZSB0aXRsZXMgYnkgTVcuXG5cdGNvbnN0IHdpa2lUZXh0QmxhbmtPckJpZGkgPSBTdHJpbmcucmF3YFtcXHQgX1xceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMEJcXHUyMDBFXFx1MjAwRlxcdTIwMjgtXFx1MjAyRlxcdTIwNUZcXHUzMDAwXSpgO1xuXHQvLyBXaGl0ZXNwYWNlIHJlZ2V4cCBmb3IgaGFuZGxpbmcgd2hpdGVzcGFjZSBiZXR3ZWVuIGxpbmsgY29tcG9uZW50cy4gSW5jbHVkaW5nIHRoZSBob3Jpem9udGFsIHRhYiwgYnV0IG5vdCBcXG5cXHJcXGZcXHY6XG5cdC8vIGEgbGluayBtdXN0IGJlIG9uIG9uZSBzaW5nbGUgbGluZS5cblx0Ly8gICBNZWRpYVdpa2kgYWxzbyByZW1vdmVzIFVuaWNvZGUgYmlkaSBvdmVycmlkZSBjaGFyYWN0ZXJzIGluIHBhZ2UgdGl0bGVzIChhbmQgbmFtZXNwYWNlIG5hbWVzKSBjb21wbGV0ZWx5LlxuXHQvLyBUaGlzIGlzICpub3QqIGhhbmRsZWQsIGFzIGl0IHdvdWxkIHJlcXVpcmUgdXMgdG8gYWxsb3cgYW55IG9mIFtcXHUyMDBFXFx1MjAwRlxcdTIwMkEtXFx1MjAyRV0gYmV0d2VlbiBhbnkgdHdvXG5cdC8vIGNoYXJhY3RlcnMgaW5zaWRlIGEgY2F0ZWdvcnkgbGluay4gSXQgX2NvdWxkXyBiZSBkb25lIHRob3VnaC4uLiBXZSBfZG9fIGhhbmRsZSBzdHJhbmdlIHNwYWNlcywgaW5jbHVkaW5nIHRoZVxuXHQvLyB6ZXJvLXdpZHRoIHNwYWNlIFxcdTIwMEIsIGFuZCBiaWRpIG92ZXJyaWRlcyBiZXR3ZWVuIHRoZSBjb21wb25lbnRzIG9mIGEgY2F0ZWdvcnkgbGluayAoYWRqYWNlbnQgdG8gdGhlIGNvbG9uLFxuXHQvLyBvciBhZGphY2VudCB0byBhbmQgaW5zaWRlIG9mIFwiW1tcIiBhbmQgXCJdXVwiKS5cblx0Ly8gRmlyc3QgYXV0by1sb2NhbGl6ZSB0aGUgcmVnZXhwcyBmb3IgdGhlIGNhdGVnb3J5IGFuZCB0aGUgdGVtcGxhdGUgbmFtZXNwYWNlcy5cblx0Y29uc3QgZm9ybWF0dGVkTmFtZXNwYWNlcyA9IGNvbmYud2dGb3JtYXR0ZWROYW1lc3BhY2VzO1xuXHRjb25zdCBuYW1lc3BhY2VJZHMgPSBjb25mLndnTmFtZXNwYWNlSWRzO1xuXHRjb25zdCBhdXRvTG9jYWxpemUgPSAobmFtZXNwYWNlTnVtYmVyOiBudW1iZXIsIGZhbGxiYWNrOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdGNvbnN0IGNyZWF0ZVJlZ2V4cFN0ciA9IChuYW1lPzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdGlmICghbmFtZSB8fCBuYW1lLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0XHRsZXQgcmVnZXhfbmFtZSA9ICcnO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGluaXRpYWwgPSBuYW1lLmNoYXJBdChpKTtcblx0XHRcdFx0Y29uc3QgbGwgPSBpbml0aWFsLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGNvbnN0IHVsID0gaW5pdGlhbC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRyZWdleF9uYW1lICs9IGxsID09PSB1bCA/IGluaXRpYWwgOiBgWyR7bGx9JHt1bH1dYDtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZWdleF9uYW1lLnJlcGxhY2UoLyhbJCgpKisuP1xcXFxeXSkvZywgU3RyaW5nLnJhd2BcXCQxYCkucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsIHdpa2lUZXh0QmxhbmspO1xuXHRcdH07XG5cdFx0ZmFsbGJhY2sgPSBmYWxsYmFjay50b0xvd2VyQ2FzZSgpO1xuXHRcdGNvbnN0IGNhbm9uaWNhbCA9IChmb3JtYXR0ZWROYW1lc3BhY2VzW1N0cmluZyhuYW1lc3BhY2VOdW1iZXIpXSA/PyAnJykudG9Mb3dlckNhc2UoKTtcblx0XHRsZXQgcmVnZXhwID0gY3JlYXRlUmVnZXhwU3RyKGNhbm9uaWNhbCk7XG5cdFx0aWYgKGZhbGxiYWNrICYmIGNhbm9uaWNhbCAhPT0gZmFsbGJhY2spIHtcblx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGZhbGxiYWNrKX1gO1xuXHRcdH1cblx0XHRpZiAobmFtZXNwYWNlSWRzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGNhdF9uYW1lIGluIG5hbWVzcGFjZUlkcykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dHlwZW9mIGNhdF9uYW1lID09PSAnc3RyaW5nJyAmJlxuXHRcdFx0XHRcdGNhdF9uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGNhbm9uaWNhbCAmJlxuXHRcdFx0XHRcdGNhdF9uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGZhbGxiYWNrICYmXG5cdFx0XHRcdFx0bmFtZXNwYWNlSWRzW2NhdF9uYW1lXSA9PT0gbmFtZXNwYWNlTnVtYmVyXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGNhdF9uYW1lKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZWdleHA7XG5cdH07XG5cdEhDLmNhdGVnb3J5X2Nhbm9uaWNhbCA9IGZvcm1hdHRlZE5hbWVzcGFjZXNbJzE0J10gPz8gJyc7XG5cdEhDLmNhdGVnb3J5X3JlZ2V4cCA9IGF1dG9Mb2NhbGl6ZSgxNCwgJ2NhdGVnb3J5Jyk7XG5cdGlmIChmb3JtYXR0ZWROYW1lc3BhY2VzWycxMCddKSB7XG5cdFx0SEMudGVtcGxhdGVfcmVnZXhwID0gYXV0b0xvY2FsaXplKDEwLCAndGVtcGxhdGUnKTtcblx0fVxuXHQvLyBVdGlsaXR5IGZ1bmN0aW9ucy4gWWVzLCB0aGlzIGR1cGxpY2F0ZXMgc29tZSBmdW5jdGlvbmFsaXR5IHRoYXQgYWxzbyBleGlzdHMgaW4gb3RoZXIgcGxhY2VzLCBidXRcblx0Ly8gdG8ga2VlcCB0aGlzIHdob2xlIHN0dWZmIGluIGEgc2luZ2xlIGZpbGUgbm90IGRlcGVuZGluZyBvbiBhbnkgb3RoZXIgb24td2lraSBKYXZhU2NyaXB0cywgd2UgcmUtZG9cblx0Ly8gdGhlc2UgZmV3IG9wZXJhdGlvbnMgaGVyZS5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhcmdcblx0ICogQHBhcmFtIHtib29sZWFufSBbbGl0ZXJhbF0gUmV0dXJuIGEgdGV4dCBub2RlIGluc3RlYWQgb2YgYW4gZWxlbWVudFxuXHQgKiBAcmV0dXJuIHtOb2RlfG51bGx9XG5cdCAqL1xuXHRpbnRlcmZhY2UgTWFrZSB7XG5cdFx0PEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KGFyZzogSyk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXTtcblx0XHQoYXJnOiBzdHJpbmcsIGxpdGVyYWw6IHRydWUpOiBUZXh0O1xuXHR9XG5cdGNvbnN0IG1ha2UgPSAoKGFyZzogc3RyaW5nLCBsaXRlcmFsPzogYm9vbGVhbik6IE5vZGUgfCBudWxsID0+IHtcblx0XHRpZiAoIWFyZykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBsaXRlcmFsID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXJnKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJnKTtcblx0fSkgYXMgTWFrZTtcblx0Y29uc3QgcGFyYW0gPSAobmFtZTogc3RyaW5nLCB1cmk/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsID0+IHtcblx0XHR1cmkgfHw9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG5cdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGBbJj9dJHtuYW1lfT0oW14mI10qKWApO1xuXHRcdGNvbnN0IG0gPSByZS5leGVjKHVyaSk7XG5cdFx0aWYgKG0gJiYgbS5sZW5ndGggPiAxKSB7XG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KG1bMV0gYXMgc3RyaW5nKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IHRpdGxlID0gKGhyZWY/OiBzdHJpbmcgfCBudWxsKTogc3RyaW5nIHwgbnVsbCA9PiB7XG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3Qgc2NyaXB0ID0gYCR7Y29uZi53Z1NjcmlwdH0/YDtcblx0XHRpZiAoXG5cdFx0XHRocmVmLmluZGV4T2Yoc2NyaXB0KSA9PT0gMCB8fFxuXHRcdFx0aHJlZi5pbmRleE9mKGNvbmYud2dTZXJ2ZXIgKyBzY3JpcHQpID09PSAwIHx8XG5cdFx0XHQoY29uZi53Z1NlcnZlci5zbGljZSgwLCAyKSA9PT0gJy8vJyAmJlxuXHRcdFx0XHRocmVmLmluZGV4T2YoZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKyBjb25mLndnU2VydmVyICsgc2NyaXB0KSA9PT0gMClcblx0XHQpIHtcblx0XHRcdC8vIGhyZWY9XCIvaW5kZXgucGhwP3RpdGxlPS4uLlwiXG5cdFx0XHRyZXR1cm4gcGFyYW0oJ3RpdGxlJywgaHJlZik7XG5cdFx0fVxuXHRcdC8vIGhyZWY9XCIvd2lraS8uLi5cIlxuXHRcdGxldCBwcmVmaXggPSBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyk7XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpKSB7XG5cdFx0XHRwcmVmaXggPSBjb25mLndnU2VydmVyICsgcHJlZml4O1xuXHRcdH0gLy8gRnVsbHkgZXhwYW5kZWQgVVJMP1xuXHRcdGlmIChocmVmLmluZGV4T2YocHJlZml4KSAmJiBwcmVmaXguc2xpY2UoMCwgMikgPT09ICcvLycpIHtcblx0XHRcdHByZWZpeCA9IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgcHJlZml4O1xuXHRcdH0gLy8gUHJvdG9jb2wtcmVsYXRpdmUgd2dTZXJ2ZXI/XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYuc2xpY2UocHJlZml4Lmxlbmd0aCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgaGFzQ2xhc3MgPSAoe2NsYXNzTmFtZX06IHtjbGFzc05hbWU6IHN0cmluZ30sIG5hbWU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdHJldHVybiBgICR7Y2xhc3NOYW1lfSBgLmluY2x1ZGVzKGAgJHtuYW1lfSBgKTtcblx0fTtcblx0LyoqXG5cdCAqIExlZ2FjeSBzdHlsZSBwcm9wZXJ0aWVzIChzdWNoIGFzIGBhbGlnbmApIGFyZSBub3QgcGFydCBvZiBgQ1NTU3R5bGVEZWNsYXJhdGlvbmAgaW4gVHlwZVNjcmlwdFxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcblx0ICovXG5cdGNvbnN0IHNldFN0eWxlUHJvcGVydHkgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHQoZWxlbWVudC5zdHlsZSBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pW3Byb3BlcnR5XSA9IHZhbHVlO1xuXHR9O1xuXHRjb25zdCBjYXBpdGFsaXplID0gKHN0cj86IHN0cmluZyB8IG51bGwpOiBzdHJpbmcgPT4ge1xuXHRcdGlmICghc3RyIHx8IHN0ci5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0cmV0dXJuIHN0ci5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXHR9O1xuXHRjb25zdCB3aWtpUGFnZVBhdGggPSAocGFnZU5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0cmV0dXJuIGNvbmYud2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsIGVuY29kZVVSSUNvbXBvbmVudChwYWdlTmFtZSkucmVwbGFjZSgvJTNBL2csICc6JykucmVwbGFjZSgvJTJGL2csICcvJykpO1xuXHR9O1xuXHRjb25zdCBlc2NhcGVSRSA9IChzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8oWyQoKSorLj9bXFxcXFxcXV5dKS9nLCBTdHJpbmcucmF3YFxcJDFgKTtcblx0fTtcblx0aW50ZXJmYWNlIFN1YnN0aXR1dGVPcHRpb25zIHtcblx0XHRpbmRpY2F0b3I/OiBzdHJpbmc7XG5cdFx0bGJyYWNlPzogc3RyaW5nO1xuXHRcdHJicmFjZT86IHN0cmluZztcblx0fVxuXHR0eXBlIFN1YnN0aXR1dGVNYXAgPSBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCAoKG1hdGNoOiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkPjtcblx0Y29uc3Qgc3Vic3RpdHV0ZUZhY3RvcnkgPSAob3B0aW9ucz86IFN1YnN0aXR1dGVPcHRpb25zKTogKChzdHI6IHN0cmluZywgbWFwPzogU3Vic3RpdHV0ZU1hcCkgPT4gc3RyaW5nKSA9PiB7XG5cdFx0b3B0aW9ucyB8fD0ge307XG5cdFx0Y29uc3QgbGVhZCA9IG9wdGlvbnMuaW5kaWNhdG9yIHx8ICckJztcblx0XHRjb25zdCBpbmRpY2F0b3IgPSBlc2NhcGVSRShsZWFkKTtcblx0XHRjb25zdCBsYnJhY2UgPSBlc2NhcGVSRShvcHRpb25zLmxicmFjZSB8fCAneycpO1xuXHRcdGNvbnN0IHJicmFjZSA9IGVzY2FwZVJFKG9wdGlvbnMucmJyYWNlIHx8ICd9Jyk7XG5cdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKFxuXHRcdFx0Ly8gJCRcblx0XHRcdGAoPzoke2luZGljYXRvcn0oJHtpbmRpY2F0b3J9KSl8YCArXG5cdFx0XHRcdC8vICQwLCAkMVxuXHRcdFx0XHRgKD86JHtpbmRpY2F0b3J9KFxcXFxkKykpfGAgK1xuXHRcdFx0XHQvLyAke2tleX1cblx0XHRcdFx0YCg/OiR7aW5kaWNhdG9yfSg/OiR7bGJyYWNlfShbXiR7bGJyYWNlfSR7cmJyYWNlfV0rKSR7cmJyYWNlfSkpfGAgK1xuXHRcdFx0XHQvLyAka2V5IChvbmx5IGlmIGZpcnN0IGNoYXIgYWZ0ZXIgJCBpcyBub3QgJCwgZGlnaXQsIG9yIHsgKVxuXHRcdFx0XHRgKD86JHtpbmRpY2F0b3J9KD8hKD86WyR7aW5kaWNhdG9yfSR7bGJyYWNlfV18XFxcXGQpKShcXFxcUys/KVxcXFxiKWAsXG5cdFx0XHQnZydcblx0XHQpO1xuXHRcdC8vIFJlcGxhY2UgJDEsICQyLCBvciAke2tleTF9LCAke2tleTJ9LCBvciAka2V5MSwgJGtleTIgYnkgdmFsdWVzIGZyb20gbWFwLiAkJCBpcyByZXBsYWNlZCBieSBhIHNpbmdsZSAkLlxuXHRcdHJldHVybiAoc3RyOiBzdHJpbmcsIG1hcD86IFN1YnN0aXR1dGVNYXApOiBzdHJpbmcgPT4ge1xuXHRcdFx0aWYgKCFtYXApIHtcblx0XHRcdFx0cmV0dXJuIHN0cjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHIucmVwbGFjZShyZSwgKG1hdGNoOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nLCBpZHg6IHN0cmluZywga2V5OiBzdHJpbmcsIGFscGhhOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRpZiAocHJlZml4ID09PSBsZWFkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGxlYWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgayA9IGFscGhhIHx8IGtleSB8fCBpZHg7XG5cdFx0XHRcdGNvbnN0IHJlcGxhY2VtZW50ID0gdHlwZW9mIG1hcFtrXSA9PT0gJ2Z1bmN0aW9uJyA/IG1hcFtrXShtYXRjaCwgaykgOiBtYXBba107XG5cdFx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZW1lbnQgPT09ICdzdHJpbmcnID8gcmVwbGFjZW1lbnQgOiByZXBsYWNlbWVudCB8fCBtYXRjaDtcblx0XHRcdH0pO1xuXHRcdH07XG5cdH07XG5cdGNvbnN0IHJlcGxhY2VTaG9ydGN1dHMgPSAoKCk6ICgoc3RyOiBzdHJpbmcsIG1hcD86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfCBudWxsKSA9PiBzdHJpbmcpID0+IHtcblx0XHRjb25zdCByZXBsYWNlSGFzaCA9IHN1YnN0aXR1dGVGYWN0b3J5KHtcblx0XHRcdGluZGljYXRvcjogJyMnLFxuXHRcdFx0bGJyYWNlOiAnWycsXG5cdFx0XHRyYnJhY2U6ICddJyxcblx0XHR9KTtcblx0XHRyZXR1cm4gKHN0cjogc3RyaW5nLCBtYXA/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgbnVsbCk6IHN0cmluZyA9PiB7XG5cdFx0XHRjb25zdCBzID0gcmVwbGFjZUhhc2goc3RyLCBtYXAgPz8gdW5kZWZpbmVkKTtcblx0XHRcdHJldHVybiBIQy5jYXBpdGFsaXplUGFnZU5hbWVzID8gY2FwaXRhbGl6ZShzKSA6IHM7XG5cdFx0fTtcblx0fSkoKTtcblx0Ly8gVGV4dCBtb2RpZmljYXRpb25cblx0Y29uc3QgZmluZENhdHNSRSA9IG5ldyBSZWdFeHAoXG5cdFx0YFxcXFxbXFxcXFske3dpa2lUZXh0QmxhbmtPckJpZGl9KD86JHtIQy5jYXRlZ29yeV9yZWdleHB9KSR7d2lraVRleHRCbGFua09yQmlkaX06W15cXFxcXV0rXFxcXF1cXFxcXWAsXG5cdFx0J2cnXG5cdCk7XG5cdGNvbnN0IHJlcGxhY2VCeUJsYW5rcyA9IChtYXRjaDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gbWF0Y2gucmVwbGFjZSgvKFxcc3xcXFMpL2csICcgJyk7XG5cdH07IC8vIC8uLyBkb2Vzbid0IG1hdGNoIGxpbmVicmVha3MuIC8oXFxzfFxcUykvIGRvZXMuXG5cdHR5cGUgSG90Q2F0Q2F0ZWdvcnlNYXRjaGVzID0ge1xuXHRcdG1hdGNoOiBSZWdFeHBFeGVjQXJyYXk7XG5cdH1bXSAmIHtcblx0XHRyZT86IFJlZ0V4cDtcblx0fTtcblx0Y29uc3QgZmluZF9jYXRlZ29yeSA9IChcblx0XHR3aWtpdGV4dDogc3RyaW5nLFxuXHRcdGNhdGVnb3J5OiBzdHJpbmcsXG5cdFx0b25jZT86IGJvb2xlYW5cblx0KTogUmVnRXhwRXhlY0FycmF5IHwgSG90Q2F0Q2F0ZWdvcnlNYXRjaGVzIHwgbnVsbCA9PiB7XG5cdFx0bGV0IGNhdF9yZWdleDogUmVnRXhwO1xuXHRcdGlmIChIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW2NhdGVnb3J5XSkge1xuXHRcdFx0Y2F0X3JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFx7XFxcXHske3dpa2lUZXh0QmxhbmtPckJpZGl9KCR7SEMudGVtcGxhdGVfcmVnZXhwfSg/PSR7d2lraVRleHRCbGFua09yQmlkaX06KSk/JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSg/OiR7XG5cdFx0XHRcdFx0SEMudGVtcGxhdGVfY2F0ZWdvcmllc1tjYXRlZ29yeV1cblx0XHRcdFx0fSkke3dpa2lUZXh0QmxhbmtPckJpZGl9KFxcXFx8Lio/KT9cXFxcfVxcXFx9YCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBjYXRfbmFtZSA9IGVzY2FwZVJFKGNhdGVnb3J5KTtcblx0XHRcdGNvbnN0IGluaXRpYWwgPSBjYXRfbmFtZS5zbGljZSgwLCAxKTtcblx0XHRcdGNhdF9yZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxcW1xcXFxbJHt3aWtpVGV4dEJsYW5rT3JCaWRpfSgke0hDLmNhdGVnb3J5X3JlZ2V4cH0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfToke3dpa2lUZXh0QmxhbmtPckJpZGl9JHtcblx0XHRcdFx0XHRpbml0aWFsID09PSAnXFxcXCcgfHwgIUhDLmNhcGl0YWxpemVQYWdlTmFtZXNcblx0XHRcdFx0XHRcdD8gaW5pdGlhbFxuXHRcdFx0XHRcdFx0OiBgWyR7aW5pdGlhbC50b1VwcGVyQ2FzZSgpfSR7aW5pdGlhbC50b0xvd2VyQ2FzZSgpfV1gXG5cdFx0XHRcdH0ke2NhdF9uYW1lLnNsaWNlKDEpLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKX0ke3dpa2lUZXh0QmxhbmtPckJpZGl9KFxcXFx8Lio/KT9cXFxcXVxcXFxdYCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAob25jZSkge1xuXHRcdFx0cmV0dXJuIGNhdF9yZWdleC5leGVjKHdpa2l0ZXh0KTtcblx0XHR9XG5cdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKCc8bm8nLmNvbmNhdCgnd2lraT4nLCBTdHJpbmcucmF3YChcXHN8XFxTKSo/PC9ub2AsICd3aWtpJywgJz4nKSwgJ2cnKTtcblx0XHRjb25zdCBjb3BpZWR0ZXh0ID0gd2lraXRleHQucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csIHJlcGxhY2VCeUJsYW5rcykucmVwbGFjZShub3dpa2lSZWdleCwgcmVwbGFjZUJ5QmxhbmtzKTtcblx0XHRjb25zdCByZXN1bHQ6IEhvdENhdENhdGVnb3J5TWF0Y2hlcyA9IFtdO1xuXHRcdGxldCBjdXJyX21hdGNoOiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gbnVsbDtcblx0XHR3aGlsZSAoKGN1cnJfbWF0Y2ggPSBjYXRfcmVnZXguZXhlYyhjb3BpZWR0ZXh0KSkgIT09IG51bGwpIHtcblx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHtcblx0XHRcdFx0bWF0Y2g6IGN1cnJfbWF0Y2gsXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRyZXN1bHQucmUgPSBjYXRfcmVnZXg7XG5cdFx0cmV0dXJuIHJlc3VsdDsgLy8gQW4gYXJyYXkgY29udGFpbmluZyBhbGwgbWF0Y2hlcywgd2l0aCBwb3NpdGlvbnMsIGluIHJlc3VsdFsgaSBdLm1hdGNoXG5cdH07XG5cdGxldCBpbnRlcmxhbmd1YWdlUkU6IFJlZ0V4cCB8IG51bGwgPSBudWxsO1xuXHRpbnRlcmZhY2UgSG90Q2F0Q2hhbmdlUmVzdWx0IHtcblx0XHR0ZXh0OiBzdHJpbmc7XG5cdFx0c3VtbWFyeTogc3RyaW5nW107XG5cdFx0ZXJyb3I6IHN0cmluZyB8IG51bGw7XG5cdH1cblx0Y29uc3QgY2hhbmdlX2NhdGVnb3J5ID0gKFxuXHRcdHdpa2l0ZXh0OiBzdHJpbmcsXG5cdFx0dG9SZW1vdmU6IHN0cmluZyB8IG51bGwsXG5cdFx0dG9BZGQ6IHN0cmluZyB8IG51bGwsXG5cdFx0a2V5OiBzdHJpbmcgfCBudWxsLFxuXHRcdGlzX2hpZGRlbj86IGJvb2xlYW5cblx0KTogSG90Q2F0Q2hhbmdlUmVzdWx0ID0+IHtcblx0XHRjb25zdCBmaW5kX2luc2VydGlvbnBvaW50ID0gKF93aWtpdGV4dDogc3RyaW5nKToge2lkeDogbnVtYmVyOyBvbkNhdDogYm9vbGVhbn0gPT4ge1xuXHRcdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKCc8bm8nLmNvbmNhdCgnd2lraT4nLCBTdHJpbmcucmF3YChcXHN8XFxTKSo/PC9ub2AsICd3aWtpJywgJz4nKSwgJ2cnKTtcblx0XHRcdGNvbnN0IGNvcGllZHRleHQgPSBfd2lraXRleHRcblx0XHRcdFx0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCByZXBsYWNlQnlCbGFua3MpXG5cdFx0XHRcdC5yZXBsYWNlKG5vd2lraVJlZ2V4LCByZXBsYWNlQnlCbGFua3MpO1xuXHRcdFx0Ly8gU2VhcmNoIGluIGNvcGllZHRleHQgdG8gYXZvaWQgdGhhdCB3ZSBpbnNlcnQgaW5zaWRlIGFuIEhUTUwgY29tbWVudCBvciBhIG5vd2lraSBcImVsZW1lbnRcIi5cblx0XHRcdGxldCBpbmRleCA9IC0xO1xuXHRcdFx0ZmluZENhdHNSRS5sYXN0SW5kZXggPSAwO1xuXHRcdFx0d2hpbGUgKGZpbmRDYXRzUkUuZXhlYyhjb3BpZWR0ZXh0KSAhPT0gbnVsbCkge1xuXHRcdFx0XHRpbmRleCA9IGZpbmRDYXRzUkUubGFzdEluZGV4O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGluZGV4IDwgMCkge1xuXHRcdFx0XHQvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaW50ZXJsYW5ndWFnZSBsaW5rLi4uXG5cdFx0XHRcdGxldCBtYXRjaDogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IG51bGw7XG5cdFx0XHRcdGlmIChpbnRlcmxhbmd1YWdlUkUpIHtcblx0XHRcdFx0XHRtYXRjaCA9IGludGVybGFuZ3VhZ2VSRS5leGVjKGNvcGllZHRleHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIEFwcHJveGltYXRpb24gd2l0aG91dCBBUEk6IGludGVybGFuZ3VhZ2UgbGlua3Mgc3RhcnQgd2l0aCAyIHRvIDMgbG93ZXIgY2FzZSBsZXR0ZXJzLCBvcHRpb25hbGx5IGZvbGxvd2VkIGJ5XG5cdFx0XHRcdFx0Ly8gYSBzZXF1ZW5jZSBvZiBncm91cHMgY29uc2lzdGluZyBvZiBhIGRhc2ggZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgbG93ZXIgY2FzZSBsZXR0ZXJzLiBFeGNlcHRpb25zIGFyZSBcInNpbXBsZVwiXG5cdFx0XHRcdFx0Ly8gYW5kIFwidG9raXBvbmFcIi5cblx0XHRcdFx0XHRtYXRjaCA9IC8oKF58XFxuXFxyPykoXFxbXFxbXFxzKigoW2Etel17MiwzfSgtW2Etel0rKSopfHNpbXBsZXx0b2tpcG9uYSlcXHMqOlteXFxdXStdXVxccyopKSskLy5leGVjKFxuXHRcdFx0XHRcdFx0Y29waWVkdGV4dFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdFx0aW5kZXggPSBtYXRjaC5pbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGlkeDogaW5kZXgsXG5cdFx0XHRcdFx0b25DYXQ6IGZhbHNlLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aWR4OiBpbmRleCxcblx0XHRcdFx0b25DYXQ6IGluZGV4ID49IDAsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0Y29uc3Qgc3VtbWFyeTogc3RyaW5nW10gPSBbXTtcblx0XHRjb25zdCBuYW1lU3BhY2UgPSBIQy5jYXRlZ29yeV9jYW5vbmljYWw7XG5cdFx0Ly8gUG9zaXRpb24gb2YgcmVtb3ZlZCBjYXRlZ29yeTtcblx0XHRjb25zdCBrZXlDaGFuZ2UgPSB0b1JlbW92ZSAmJiB0b0FkZCAmJiB0b1JlbW92ZSA9PT0gdG9BZGQgJiYgdG9BZGQubGVuZ3RoID4gMDtcblx0XHRsZXQgbWF0Y2hlczogUmVnRXhwRXhlY0FycmF5IHwgSG90Q2F0Q2F0ZWdvcnlNYXRjaGVzIHwgbnVsbDtcblx0XHRsZXQgY2F0X3BvaW50ID0gLTE7XG5cdFx0a2V5ICYmPSBgfCR7a2V5fWA7XG5cdFx0Ly8gUmVtb3ZlXG5cdFx0aWYgKHRvUmVtb3ZlICYmIHRvUmVtb3ZlLmxlbmd0aCA+IDApIHtcblx0XHRcdG1hdGNoZXMgPSBmaW5kX2NhdGVnb3J5KHdpa2l0ZXh0LCB0b1JlbW92ZSk7XG5cdFx0XHRpZiAoIW1hdGNoZXMgfHwgbWF0Y2hlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGVycm9yOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfbm90Rm91bmQnLCB0b1JlbW92ZSksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBtYXRjaGVzQXJyYXkgPSBtYXRjaGVzIGFzIEhvdENhdENhdGVnb3J5TWF0Y2hlcztcblx0XHRcdGNvbnN0IGZpcnN0TWF0Y2ggPSBtYXRjaGVzQXJyYXlbMF0hLm1hdGNoO1xuXHRcdFx0bGV0IGJlZm9yZSA9IHdpa2l0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIGZpcnN0TWF0Y2guaW5kZXgpKTtcblx0XHRcdGxldCBhZnRlciA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGZpcnN0TWF0Y2guaW5kZXggKyBmaXJzdE1hdGNoWzBdLmxlbmd0aCkpO1xuXHRcdFx0aWYgKG1hdGNoZXNBcnJheS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdC8vIFJlbW92ZSBhbGwgb2NjdXJyZW5jZXMgaW4gYWZ0ZXJcblx0XHRcdFx0bWF0Y2hlc0FycmF5LnJlIS5sYXN0SW5kZXggPSAwO1xuXHRcdFx0XHRhZnRlciA9IGFmdGVyLnJlcGxhY2UobWF0Y2hlc0FycmF5LnJlISwgJycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHR0b0FkZCAmJiAvLyBuYW1lU3BhY2UgPSBtYXRjaGVzWyAwIF0ubWF0Y2hbIDEgXSB8fCBuYW1lU3BhY2U7IENhbm9uaWNhbCBuYW1lc3BhY2Ugc2hvdWxkIGJlIGFsd2F5cyBwcmVmZXJyZWRcblx0XHRcdFx0a2V5ID09PSBudWxsXG5cdFx0XHQpIHtcblx0XHRcdFx0a2V5ID0gZmlyc3RNYXRjaFsyXSA/PyBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhlIGNhdGVnb3J5IGtleSwgaWYgYW55LlxuXHRcdFx0Ly8gUmVtb3ZlIHdoaXRlc3BhY2UgKHByb3Blcmx5KTogc3RyaXAgd2hpdGVzcGFjZSwgYnV0IG9ubHkgdXAgdG8gdGhlIG5leHQgbGluZSBmZWVkLlxuXHRcdFx0Ly8gSWYgd2UgdGhlbiBoYXZlIHR3byBsaW5lZmVlZHMgaW4gYSByb3csIHJlbW92ZSBvbmUuIE90aGVyd2lzZSwgaWYgd2UgaGF2ZSB0d28gbm9uLVxuXHRcdFx0Ly8gd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLCBpbnNlcnQgYSBibGFuay5cblx0XHRcdGxldCBpID0gYmVmb3JlLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+PSAwICYmIGJlZm9yZS5jaGFyQXQoaSkgIT09ICdcXG4nICYmIGJlZm9yZS5zbGljZShpLCBpICsgMSkuc2VhcmNoKC9cXHMvKSA+PSAwKSB7XG5cdFx0XHRcdGktLTtcblx0XHRcdH1cblx0XHRcdGxldCBqID0gMDtcblx0XHRcdHdoaWxlIChqIDwgYWZ0ZXIubGVuZ3RoICYmIGFmdGVyLmNoYXJBdChqKSAhPT0gJ1xcbicgJiYgYWZ0ZXIuc2xpY2UoaiwgaiArIDEpLnNlYXJjaCgvXFxzLykgPj0gMCkge1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGkgPj0gMCAmJlxuXHRcdFx0XHRiZWZvcmUuY2hhckF0KGkpID09PSAnXFxuJyAmJlxuXHRcdFx0XHQoYWZ0ZXIubGVuZ3RoID09PSAwIHx8IChqIDwgYWZ0ZXIubGVuZ3RoICYmIGFmdGVyLmNoYXJBdChqKSA9PT0gJ1xcbicpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGktLTtcblx0XHRcdH1cblx0XHRcdGJlZm9yZSA9IGkgPj0gMCA/IGJlZm9yZS5zbGljZSgwLCBNYXRoLm1heCgwLCBpICsgMSkpIDogJyc7XG5cdFx0XHRhZnRlciA9IGogPCBhZnRlci5sZW5ndGggPyBhZnRlci5zbGljZShNYXRoLm1heCgwLCBqKSkgOiAnJztcblx0XHRcdGlmIChcblx0XHRcdFx0YmVmb3JlLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0YmVmb3JlLnNsaWNlKE1hdGgubWF4KDAsIGJlZm9yZS5sZW5ndGggLSAxKSkuc2VhcmNoKC9cXFMvKSA+PSAwICYmXG5cdFx0XHRcdGFmdGVyLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0YWZ0ZXIuc2xpY2UoMCwgMSkuc2VhcmNoKC9cXFMvKSA+PSAwXG5cdFx0XHQpIHtcblx0XHRcdFx0YmVmb3JlICs9ICcgJztcblx0XHRcdH1cblx0XHRcdGNhdF9wb2ludCA9IGJlZm9yZS5sZW5ndGg7XG5cdFx0XHRpZiAoY2F0X3BvaW50ID09PSAwICYmIGFmdGVyLmxlbmd0aCA+IDAgJiYgYWZ0ZXIuc2xpY2UoMCwgMSkgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGFmdGVyID0gYWZ0ZXIuc2xpY2UoMSk7XG5cdFx0XHR9XG5cdFx0XHR3aWtpdGV4dCA9IGJlZm9yZSArIGFmdGVyO1xuXHRcdFx0aWYgKCFrZXlDaGFuZ2UpIHtcblx0XHRcdFx0aWYgKEhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbdG9SZW1vdmVdKSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJywgdG9SZW1vdmUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X3JlbW92ZWQnLCB0b1JlbW92ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gQWRkXG5cdFx0aWYgKHRvQWRkICYmIHRvQWRkLmxlbmd0aCA+IDApIHtcblx0XHRcdG1hdGNoZXMgPSBmaW5kX2NhdGVnb3J5KHdpa2l0ZXh0LCB0b0FkZCk7XG5cdFx0XHRpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Ly8gQWxyZWFkeSBleGlzdHNcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGVycm9yOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfZXhpc3RzJywgdG9BZGQpLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0bGV0IG9uQ2F0ID0gZmFsc2U7XG5cdFx0XHRpZiAoY2F0X3BvaW50IDwgMCkge1xuXHRcdFx0XHRjb25zdCBwb2ludCA9IGZpbmRfaW5zZXJ0aW9ucG9pbnQod2lraXRleHQpO1xuXHRcdFx0XHRjYXRfcG9pbnQgPSBwb2ludC5pZHg7XG5cdFx0XHRcdCh7b25DYXR9ID0gcG9pbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b25DYXQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbmV3Y2F0c3RyaW5nID0gYFtbJHtuYW1lU3BhY2V9OiR7dG9BZGR9JHtrZXkgfHwgJyd9XV1gO1xuXHRcdFx0aWYgKGNhdF9wb2ludCA+PSAwKSB7XG5cdFx0XHRcdGNvbnN0IHN1ZmZpeCA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGNhdF9wb2ludCkpO1xuXHRcdFx0XHR3aWtpdGV4dCA9XG5cdFx0XHRcdFx0d2lraXRleHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgY2F0X3BvaW50KSkgK1xuXHRcdFx0XHRcdChjYXRfcG9pbnQgPiAwID8gJ1xcbicgOiAnJykgK1xuXHRcdFx0XHRcdG5ld2NhdHN0cmluZyArXG5cdFx0XHRcdFx0KG9uQ2F0ID8gJycgOiAnXFxuJyk7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IHN1ZmZpeC5sZW5ndGggPiAwICYmIHN1ZmZpeC5zbGljZSgwLCAxKSAhPT0gJ1xcbicgPyBgXFxuJHtzdWZmaXh9YCA6IHN1ZmZpeDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh3aWtpdGV4dC5sZW5ndGggPiAwICYmIHdpa2l0ZXh0LnNsaWNlKC0xLCB3aWtpdGV4dC5sZW5ndGggLSAxICsgMSkgIT09ICdcXG4nKSB7XG5cdFx0XHRcdFx0d2lraXRleHQgKz0gJ1xcbic7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2lraXRleHQgKz0gKHdpa2l0ZXh0Lmxlbmd0aCA+IDAgPyAnXFxuJyA6ICcnKSArIG5ld2NhdHN0cmluZztcblx0XHRcdH1cblx0XHRcdGlmIChrZXlDaGFuZ2UpIHtcblx0XHRcdFx0bGV0IGsgPSBrZXkgfHwgJyc7XG5cdFx0XHRcdGlmIChrLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRrID0gay5zbGljZSgxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnLCB0b0FkZCwgayk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9hZGRlZCcsIHRvQWRkKTtcblx0XHRcdH1cblx0XHRcdGlmIChIQy51bmNhdF9yZWdleHAgJiYgIWlzX2hpZGRlbikge1xuXHRcdFx0XHRjb25zdCB0eHQgPSB3aWtpdGV4dC5yZXBsYWNlKEhDLnVuY2F0X3JlZ2V4cCwgJycpOyAvLyBSZW1vdmUgXCJ1bmNhdFwiIHRlbXBsYXRlc1xuXHRcdFx0XHRpZiAodHh0Lmxlbmd0aCAhPT0gd2lraXRleHQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0d2lraXRleHQgPSB0eHQ7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy11bmNhdF9yZW1vdmVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdGVycm9yOiBudWxsLFxuXHRcdH07XG5cdH07XG5cdC8vIFRoZSByZWFsIEhvdENhdCBVSVxuXHRpbnRlcmZhY2UgSG90Q2F0VUlFdmVudCB7XG5cdFx0Y3RybEtleT86IGJvb2xlYW47XG5cdFx0bWV0YUtleT86IGJvb2xlYW47XG5cdFx0c2hpZnRLZXk/OiBib29sZWFuO1xuXHRcdHByZXZlbnREZWZhdWx0PzogKCkgPT4gdm9pZDtcblx0XHRzdG9wUHJvcGFnYXRpb24/OiAoKSA9PiB2b2lkO1xuXHRcdGNhbmNlbEJ1YmJsZT86IGJvb2xlYW47XG5cdH1cblx0aW50ZXJmYWNlIEhvdENhdENvbW1pdEZvcm0gZXh0ZW5kcyBIVE1MRm9ybUVsZW1lbnQge1xuXHRcdHdwVGV4dGJveDE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG5cdFx0d3BTdW1tYXJ5OiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwTWlub3JlZGl0OiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwV2F0Y2h0aGlzOiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwQXV0b1N1bW1hcnk6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0d3BDaGFuZ2VUYWdzOiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwU3RhcnR0aW1lOiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwRWRpdHRpbWU6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0b2xkaWQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0d3BFZGl0VG9rZW46IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdFx0d3BEaWZmOiBIVE1MSW5wdXRFbGVtZW50O1xuXHRcdHdwU2F2ZTogSFRNTElucHV0RWxlbWVudDtcblx0XHRoY0NvbW1pdDogSFRNTElucHV0RWxlbWVudDtcblx0fVxuXHR0eXBlIEhvdENhdEZhaWx1cmUgPSAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuXHRjb25zdCBldnRLZXlzID0gKGV2ZW50PzogSG90Q2F0VUlFdmVudCk6IG51bWJlciA9PiB7XG5cdFx0Y29uc3Qge2N0cmxLZXksIG1ldGFLZXksIHNoaWZ0S2V5fSA9IGV2ZW50ID8/IHt9O1xuXHRcdGxldCBjb2RlID0gMDtcblx0XHRpZiAoY3RybEtleSkge1xuXHRcdFx0Ly8gQWxsIG1vZGVybiBicm93c2Vyc1xuXHRcdFx0Ly8gQ3RybC1jbGljayBzZWVtcyB0byBiZSBvdmVybG9hZGVkIGluIEZGL01hYyAoaXQgb3BlbnMgYSBwb3AtdXAgbWVudSksIHNvIHRyZWF0IGNtZC1jbGlja1xuXHRcdFx0Ly8gYXMgYSBjdHJsLWNsaWNrLCB0b28uXG5cdFx0XHRpZiAoY3RybEtleSB8fCBtZXRhS2V5KSB7XG5cdFx0XHRcdGNvZGUgfHw9IDE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2hpZnRLZXkpIHtcblx0XHRcdFx0Y29kZSB8fD0gMjtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNvZGU7XG5cdH07XG5cdGNvbnN0IGV2dEtpbGwgPSAoZXZlbnQ/OiBIb3RDYXRVSUV2ZW50KTogZmFsc2UgPT4ge1xuXHRcdGlmIChldmVudD8ucHJldmVudERlZmF1bHQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24/LigpO1xuXHRcdH0gZWxzZSBpZiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0bGV0IGNhdExpbmU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7IC8vIHRydWUgaWYgTWVkaWFXaWtpIHNlcnZlcyB0aGUgbmV3IFVMLUxJIERPTSBmb3IgY2F0ZWdvcmllc1xuXHRsZXQgb25VcGxvYWQgPSBmYWxzZTtcblx0bGV0IGVkaXRvcnM6IENhdGVnb3J5RWRpdG9yW10gPSBbXTtcblx0bGV0IGNvbW1pdEJ1dHRvbjogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRsZXQgY29tbWl0Rm9ybTogSG90Q2F0Q29tbWl0Rm9ybSB8IG51bGwgPSBudWxsO1xuXHRsZXQgbXVsdGlTcGFuOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRsZXQgcGFnZVRleHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRsZXQgcGFnZVRpbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRsZXQgcGFnZVdhdGNoZWQgPSBmYWxzZTtcblx0bGV0IHdhdGNoQ3JlYXRlID0gZmFsc2U7XG5cdGxldCB3YXRjaEVkaXQgPSBmYWxzZTtcblx0bGV0IG1pbm9yRWRpdHMgPSBmYWxzZTtcblx0bGV0IGVkaXRUb2tlbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdGxldCBpc19ydGwgPSBmYWxzZTtcblx0bGV0IHNlcnZlclRpbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRsZXQgbGFzdFJldklkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcblx0bGV0IHBhZ2VUZXh0UmV2SWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXHRsZXQgY29uZmxpY3RpbmdVc2VyOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0bGV0IG5ld0RPTSA9IGZhbHNlO1xuXHRjb25zdCBVTkNIQU5HRUQgPSAwO1xuXHRjb25zdCBPUEVOID0gMTsgLy8gT3BlbiwgYnV0IG5vIGlucHV0IHlldFxuXHRjb25zdCBDSEFOR0VfUEVORElORyA9IDI7IC8vIE9wZW4sIHNvbWUgaW5wdXQgbWFkZVxuXHRjb25zdCBDSEFOR0VEID0gMztcblx0Y29uc3QgREVMRVRFRCA9IDQ7XG5cdGNvbnN0IHNldFBhZ2UgPSAoZGF0YTogSG90Q2F0QXBpUXVlcnlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdGxldCBzdGFydFRpbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRcdGlmIChkYXRhICYmIGRhdGEucXVlcnkpIHtcblx0XHRcdGlmIChkYXRhLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGEucXVlcnkucGFnZXMgYXMgSG90Q2F0QXBpUGFnZVtdO1xuXHRcdFx0XHRpZiAocGFnZSkge1xuXHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9ucyAmJiBwYWdlLnJldmlzaW9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHQvLyBSZXZpc2lvbnMgYXJlIHNvcnRlZCBieSByZXZpc2lvbiBJRCwgaGVuY2UgWzBdIGlzIHRoZSBvbmUgd2UgYXNrZWQgZm9yLCBhbmQgcG9zc2libHkgdGhlcmUncyBhIFsxXSBpZiB3ZSdyZVxuXHRcdFx0XHRcdFx0Ly8gbm90IG9uIHRoZSBsYXRlc3QgcmV2aXNpb24gKGVkaXQgY29uZmxpY3RzIGFuZCBzdWNoKS5cblx0XHRcdFx0XHRcdGNvbnN0IFtsYXRlc3RSZXZpc2lvbiwgY29uZmxpY3RpbmdSZXZpc2lvbl0gPSBwYWdlLnJldmlzaW9ucztcblx0XHRcdFx0XHRcdHBhZ2VUZXh0ID0gbGF0ZXN0UmV2aXNpb24hLnNsb3RzLm1haW4uY29udGVudDtcblx0XHRcdFx0XHRcdGlmIChsYXRlc3RSZXZpc2lvbiEudGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0XHRcdHBhZ2VUaW1lID0gbGF0ZXN0UmV2aXNpb24hLnRpbWVzdGFtcC5yZXBsYWNlKC9cXEQvZywgJycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGxhdGVzdFJldmlzaW9uIS5yZXZpZCkge1xuXHRcdFx0XHRcdFx0XHRwYWdlVGV4dFJldklkID0gbGF0ZXN0UmV2aXNpb24hLnJldmlkO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zLmxlbmd0aCA+IDEgJiYgY29uZmxpY3RpbmdSZXZpc2lvbikge1xuXHRcdFx0XHRcdFx0XHRjb25mbGljdGluZ1VzZXIgPSBjb25mbGljdGluZ1JldmlzaW9uLnVzZXIgPz8gbnVsbDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFzdHJldmlkKSB7XG5cdFx0XHRcdFx0XHRsYXN0UmV2SWQgPSBwYWdlLmxhc3RyZXZpZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2Uuc3RhcnR0aW1lc3RhbXApIHtcblx0XHRcdFx0XHRcdHN0YXJ0VGltZSA9IHBhZ2Uuc3RhcnR0aW1lc3RhbXAucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cGFnZVdhdGNoZWQgPSB0eXBlb2YgcGFnZS53YXRjaGVkID09PSAnc3RyaW5nJztcblx0XHRcdFx0XHRpZiAoZGF0YS5xdWVyeS50b2tlbnMpIHtcblx0XHRcdFx0XHRcdGVkaXRUb2tlbiA9IGRhdGEucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFuZ2xpbmtzICYmICghZGF0YVsncXVlcnktY29udGludWUnXSB8fCAhZGF0YVsncXVlcnktY29udGludWUnXS5sYW5nbGlua3MpKSB7XG5cdFx0XHRcdFx0XHQvLyBXZSBoYXZlIGludGVybGFuZ3VhZ2UgbGlua3MsIGFuZCB3ZSBnb3QgdGhlbSBhbGwuXG5cdFx0XHRcdFx0XHRsZXQgcmUgPSAnJztcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgbGFuZ2xpbmsgb2YgcGFnZS5sYW5nbGlua3MpIHtcblx0XHRcdFx0XHRcdFx0cmUgKz1cblx0XHRcdFx0XHRcdFx0XHQocmUubGVuZ3RoID4gMCA/ICd8JyA6ICcnKSArIGxhbmdsaW5rLmxhbmcucmVwbGFjZSgvKFskKCkqKy4/XFxcXF5dKS9nLCBTdHJpbmcucmF3YFxcJDFgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChyZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGludGVybGFuZ3VhZ2VSRSA9IG5ldyBSZWdFeHAoYCgoXnxcXFxcblxcXFxyPykoXFxcXFtcXFxcW1xcXFxzKigke3JlfSlcXFxccyo6W15cXFxcXV0rXFxcXF1cXFxcXVxcXFxzKikpKyRgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIFNpdGVpbmZvXG5cdFx0XHRpZiAoZGF0YS5xdWVyeS5nZW5lcmFsKSB7XG5cdFx0XHRcdGlmIChkYXRhLnF1ZXJ5LmdlbmVyYWwudGltZSAmJiAhc3RhcnRUaW1lKSB7XG5cdFx0XHRcdFx0c3RhcnRUaW1lID0gZGF0YS5xdWVyeS5nZW5lcmFsLnRpbWUucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFJlc291cmNlTG9hZGVyJ3MgSlNQYXJzZXIgZG9lc24ndCBsaWtlIC5jYXNlLCBzbyBvdmVycmlkZSBlc2xpbnQuXG5cdFx0XHRcdFx0SEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA9IGRhdGEucXVlcnkuZ2VuZXJhbC5jYXNlID09PSAnZmlyc3QtbGV0dGVyJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2VydmVyVGltZSA9IHN0YXJ0VGltZTtcblx0XHRcdC8vIFVzZXJpbmZvXG5cdFx0XHRjb25zdCB7b3B0aW9uc30gPSBkYXRhLnF1ZXJ5LnVzZXJpbmZvID8/IHt9O1xuXHRcdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdFx0d2F0Y2hDcmVhdGUgPSAhSEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ICYmIG9wdGlvbnMud2F0Y2hjcmVhdGlvbnMgPT09ICcxJztcblx0XHRcdFx0d2F0Y2hFZGl0ID0gIUhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCAmJiBvcHRpb25zLndhdGNoZGVmYXVsdCA9PT0gJzEnO1xuXHRcdFx0XHRtaW5vckVkaXRzID0gb3B0aW9ucy5taW5vcmRlZmF1bHQgPT09IDE7XG5cdFx0XHRcdC8vIElmIHRoZSB1c2VyIGhhcyB0aGUgXCJBbGwgZWRpdHMgYXJlIG1pbm9yXCIgcHJlZmVyZW5jZSBlbmFibGVkLCB3ZSBzaG91bGQgaG9ub3IgdGhhdFxuXHRcdFx0XHQvLyBmb3Igc2luZ2xlIGNhdGVnb3J5IGNoYW5nZXMsIG5vIG1hdHRlciB3aGF0IHRoZSBzaXRlIGNvbmZpZ3VyYXRpb24gaXMuXG5cdFx0XHRcdGlmIChtaW5vckVkaXRzKSB7XG5cdFx0XHRcdFx0SEMuc2luZ2xlX21pbm9yID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0bGV0IHNhdmVJblByb2dyZXNzID0gZmFsc2U7XG5cdGNvbnN0IGluaXRpYXRlRWRpdCA9IChkb0VkaXQ6IChmYWlsdXJlOiBIb3RDYXRGYWlsdXJlKSA9PiB2b2lkLCBmYWlsdXJlOiBIb3RDYXRGYWlsdXJlKTogdm9pZCA9PiB7XG5cdFx0aWYgKHNhdmVJblByb2dyZXNzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNhdmVJblByb2dyZXNzID0gdHJ1ZTtcblx0XHRsZXQgb2xkQnV0dG9uU3RhdGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0b2xkQnV0dG9uU3RhdGUgPSBjb21taXRCdXR0b24uZGlzYWJsZWQ7XG5cdFx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBmYWlsID0gKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0c2F2ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblx0XHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gb2xkQnV0dG9uU3RhdGUgPz8gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRmYWlsdXJlKG1lc3NhZ2UpO1xuXHRcdH07XG5cdFx0Ly8gTXVzdCB1c2UgQWpheCBoZXJlIHRvIGdldCB0aGUgdXNlciBvcHRpb25zIGFuZCB0aGUgZWRpdCB0b2tlbi5cblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRyYXdjb250aW51ZTogJycsXG5cdFx0XHR0aXRsZXM6IGNvbmYud2dQYWdlTmFtZSxcblx0XHRcdHByb3A6IFsnaW5mbycsICdyZXZpc2lvbnMnLCAnbGFuZ2xpbmtzJ10sXG5cdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCcsICdpZHMnLCAndXNlciddLFxuXHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0cnZsaW1pdDogJzInLFxuXHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRydnN0YXJ0aWQ6IGNvbmYud2dDdXJSZXZpc2lvbklkLFxuXHRcdFx0bGxsaW1pdDogJzUwMCcsXG5cdFx0XHRtZXRhOiBbJ3NpdGVpbmZvJywgJ3VzZXJpbmZvJywgJ3Rva2VucyddLFxuXHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0dWlwcm9wOiBbJ29wdGlvbnMnXSxcblx0XHR9O1xuXHRcdGFwaS5nZXQocGFyYW1zKVxuXHRcdFx0LmRvbmUoKGRhdGEpID0+IHtcblx0XHRcdFx0c2V0UGFnZShkYXRhIGFzIEhvdENhdEFwaVF1ZXJ5UmVzcG9uc2UpO1xuXHRcdFx0XHRkb0VkaXQoZmFpbCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKGVycm9yOiB1bmtub3duKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHtzdGF0dXMsIHN0YXR1c1RleHR9ID0gKGVycm9yID8/IHt9KSBhcyB7c3RhdHVzPzogbnVtYmVyOyBzdGF0dXNUZXh0Pzogc3RyaW5nfTtcblx0XHRcdFx0ZmFpbChgJHtzdGF0dXMgPz8gJyd9ICR7c3RhdHVzVGV4dCA/PyAnJ31gKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBtdWx0aUNoYW5nZU1zZyA9IChjb3VudDogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtbXVsdGlfY2hhbmdlJywgU3RyaW5nKGNvdW50KSk7XG5cdH07XG5cdGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSAoKTogc3RyaW5nID0+IHtcblx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdGxldCB0cyA9IFN0cmluZyhub3cuZ2V0VVRDRnVsbFllYXIoKSk7XG5cdFx0Y29uc3QgdHdvID0gKHM6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gcy5zbGljZSgtMik7XG5cdFx0fTtcblx0XHR0cyArPVxuXHRcdFx0dHdvKGAwJHtub3cuZ2V0VVRDTW9udGgoKSArIDF9YCkgK1xuXHRcdFx0dHdvKGAwJHtub3cuZ2V0VVRDRGF0ZSgpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENIb3VycygpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENNaW51dGVzKCl9YCkgK1xuXHRcdFx0dHdvKGAwMCR7bm93LmdldFVUQ1NlY29uZHMoKX1gKTtcblx0XHRyZXR1cm4gdHM7XG5cdH07XG5cdGNvbnN0IHBlcmZvcm1DaGFuZ2VzID0gKGZhaWx1cmU6IEhvdENhdEZhaWx1cmUsIHNpbmdsZUVkaXRvcj86IENhdGVnb3J5RWRpdG9yKTogdm9pZCA9PiB7XG5cdFx0aWYgKHBhZ2VUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRmYWlsdXJlKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLW11bHRpX2Vycm9yJykpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBDcmVhdGUgYSBmb3JtIGFuZCBzdWJtaXQgaXQuIFdlIGRvbid0IHVzZSB0aGUgZWRpdCBBUEkgKGFwaS5waHA/YWN0aW9uPWVkaXQpIGJlY2F1c2Vcblx0XHQvLyAoYSkgc2Vuc2libHkgcmVwb3J0aW5nIGJhY2sgZXJyb3JzIGxpa2UgZWRpdCBjb25mbGljdHMgaXMgYWx3YXlzIGEgaGFzc2xlLCBhbmRcblx0XHQvLyAoYikgd2Ugd2FudCB0byBzaG93IGEgZGlmZiBmb3IgbXVsdGktZWRpdHMgYW55d2F5LCBhbmRcblx0XHQvLyAoYykgd2Ugd2FudCB0byB0cmlnZ2VyIG9uc3VibWl0IGV2ZW50cywgYWxsb3dpbmcgdXNlciBjb2RlIHRvIGludGVyY2VwdCB0aGUgZWRpdC5cblx0XHQvLyBVc2luZyB0aGUgZm9ybSwgd2UgY2FuIGRvIChiKSBhbmQgKGMpLCBhbmQgd2UgZ2V0IChhKSBmb3IgZnJlZS4gQW5kLCBvZiBjb3Vyc2UsIHVzaW5nIHRoZSBmb3JtXG5cdFx0Ly8gYXV0b21hdGljYWxseSByZWxvYWRzIHRoZSBwYWdlIHdpdGggdGhlIHVwZGF0ZWQgY2F0ZWdvcmllcyBvbiBhIHN1Y2Nlc3NmdWwgc3VibWl0LCB3aGljaFxuXHRcdC8vIHdlIHdvdWxkIGhhdmUgdG8gZG8gZXhwbGljaXRseSBpZiB3ZSB1c2VkIHRoZSBlZGl0IEFQSS5cblx0XHRsZXQgYWN0aW9uOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHRcdC8vIE5vcm1hbGx5LCB3ZSBkb24ndCBoYXZlIHRvIGNhcmUgYWJvdXQgZWRpdCBjb25mbGljdHMuIElmIHNvbWUgb3RoZXIgdXNlciBlZGl0ZWQgdGhlIHBhZ2UgaW4gdGhlIG1lYW50aW1lLCB0aGVcblx0XHQvLyBzZXJ2ZXIgd2lsbCB0YWtlIGNhcmUgb2YgaXQgYW5kIG1lcmdlIHRoZSBlZGl0IGF1dG9tYXRpY2FsbHkgb3IgcHJlc2VudCBhbiBlZGl0IGNvbmZsaWN0IHNjcmVlbi4gSG93ZXZlciwgdGhlXG5cdFx0Ly8gc2VydmVyIHN1cHByZXNzZXMgZWRpdCBjb25mbGljdHMgd2l0aCBvbmVzZWxmLiBIZW5jZSwgaWYgd2UgaGF2ZSBhIGNvbmZsaWN0LCBhbmQgdGhlIGNvbmZsaWN0aW5nIHVzZXIgaXMgdGhlXG5cdFx0Ly8gY3VycmVudCB1c2VyLCB0aGVuIHdlIHNldCB0aGUgXCJvbGRpZFwiIHZhbHVlIGFuZCBzd2l0Y2ggdG8gZGlmZiwgd2hpY2ggZ2l2ZXMgdGhlIFwieW91IGFyZSBlZGl0aW5nIGFuIG9sZCB2ZXJzaW9uO1xuXHRcdC8vIGlmIHlvdSBzYXZlLCBhbnkgbW9yZSByZWNlbnQgY2hhbmdlcyB3aWxsIGJlIGxvc3RcIiBzY3JlZW4uXG5cdFx0Y29uc3Qgc2VsZkVkaXRDb25mbGljdCA9ICEhKFxuXHRcdFx0KChsYXN0UmV2SWQgIT09IG51bGwgJiYgbGFzdFJldklkICE9PSBjb25mLndnQ3VyUmV2aXNpb25JZCkgfHxcblx0XHRcdFx0KHBhZ2VUZXh0UmV2SWQgIT09IG51bGwgJiYgcGFnZVRleHRSZXZJZCAhPT0gY29uZi53Z0N1clJldmlzaW9uSWQpKSAmJlxuXHRcdFx0Y29uZmxpY3RpbmdVc2VyICYmXG5cdFx0XHRjb25mbGljdGluZ1VzZXIgPT09IGNvbmYud2dVc2VyTmFtZVxuXHRcdCk7XG5cdFx0aWYgKHNpbmdsZUVkaXRvciAmJiAhc2luZ2xlRWRpdG9yLm5vQ29tbWl0ICYmICFIQy5ub19hdXRvY29tbWl0ICYmIGVkaXRUb2tlbiAmJiAhc2VsZkVkaXRDb25mbGljdCkge1xuXHRcdFx0Ly8gSWYgd2UgZG8gaGF2ZSBhbiBlZGl0IGNvbmZsaWN0LCBidXQgbm90IHdpdGggb3Vyc2VsZiwgdGhhdCdzIG5vIHJlYXNvbiBub3QgdG8gYXR0ZW1wdCB0byBzYXZlOiB0aGUgc2VydmVyIHNpZGUgbWF5IGFjdHVhbGx5IGJlIGFibGUgdG9cblx0XHRcdC8vIG1lcmdlIHRoZSBjaGFuZ2VzLiBXZSBqdXN0IG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgd2UgZG8gcHJlc2VudCBhIGRpZmYgdmlldyBpZiBpdCdzIGEgc2VsZiBlZGl0IGNvbmZsaWN0LlxuXHRcdFx0Y29tbWl0Rm9ybSEud3BFZGl0VG9rZW4udmFsdWUgPSBlZGl0VG9rZW47XG5cdFx0XHRhY3Rpb24gPSBjb21taXRGb3JtIS53cERpZmY7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cFNhdmUnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybSEud3BTYXZlO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCByZXN1bHQ6IEhvdENhdENoYW5nZVJlc3VsdCA9IHtcblx0XHRcdHRleHQ6IHBhZ2VUZXh0LFxuXHRcdFx0c3VtbWFyeTogW10sXG5cdFx0XHRlcnJvcjogbnVsbCxcblx0XHR9O1xuXHRcdGNvbnN0IGNoYW5nZWQ6IHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10gPSBbXTtcblx0XHRjb25zdCBhZGRlZDogc3RyaW5nW10gPSBbXTtcblx0XHRjb25zdCBkZWxldGVkOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGNvbnN0IHRvRWRpdCA9IHNpbmdsZUVkaXRvciA/IFtzaW5nbGVFZGl0b3JdIDogZWRpdG9ycztcblx0XHRsZXQgZWRpdDogQ2F0ZWdvcnlFZGl0b3I7XG5cdFx0bGV0IGk6IG51bWJlcjtcblx0XHRsZXQgZXJyb3I6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRcdGxldCBjaGFuZ2VzID0gMDtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9FZGl0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRlZGl0ID0gdG9FZGl0W2ldITtcblx0XHRcdGlmIChlZGl0LnN0YXRlID09PSBDSEFOR0VEKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShcblx0XHRcdFx0XHRyZXN1bHQudGV4dCxcblx0XHRcdFx0XHRlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50Q2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50S2V5LFxuXHRcdFx0XHRcdGVkaXQuY3VycmVudEhpZGRlblxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoIXJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRcdGNoYW5nZXMrKztcblx0XHRcdFx0XHRpZiAoIWVkaXQub3JpZ2luYWxDYXRlZ29yeSB8fCBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRhZGRlZFthZGRlZC5sZW5ndGhdID0gZWRpdC5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNoYW5nZWRbY2hhbmdlZC5sZW5ndGhdID0ge1xuXHRcdFx0XHRcdFx0XHRmcm9tOiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0XHRcdHRvOiBlZGl0LmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGVkaXQuc3RhdGUgPT09IERFTEVURUQgJiYgZWRpdC5vcmlnaW5hbENhdGVnb3J5ICYmIGVkaXQub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShyZXN1bHQudGV4dCwgZWRpdC5vcmlnaW5hbENhdGVnb3J5LCBudWxsLCBudWxsLCBmYWxzZSk7XG5cdFx0XHRcdGlmICghcmVzdWx0LmVycm9yKSB7XG5cdFx0XHRcdFx0Y2hhbmdlcysrO1xuXHRcdFx0XHRcdGRlbGV0ZWRbZGVsZXRlZC5sZW5ndGhdID0gZWRpdC5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChlcnJvciAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gRG8gbm90IGNvbW1pdCBpZiB0aGVyZSB3ZXJlIGVycm9yc1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybSEud3BTYXZlO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghY29uZi53Z0FydGljbGVJZCAmJiBjaGFuZ2VzID4gMCAmJiBlcnJvciA9PT0gbnVsbCkge1xuXHRcdFx0cmVzdWx0LnRleHQgPSBge3tDYXRuYXZ8YXV0bz0xfX1cXG5cXG4ke3Jlc3VsdC50ZXh0fWA7XG5cdFx0fVxuXHRcdC8vIEZpbGwgaW4gdGhlIGZvcm0gYW5kIHN1Ym1pdCBpdFxuXHRcdGNvbW1pdEZvcm0hLndwTWlub3JlZGl0LmNoZWNrZWQgPSBtaW5vckVkaXRzO1xuXHRcdGNvbW1pdEZvcm0hLndwV2F0Y2h0aGlzLmNoZWNrZWQgPSAoIWNvbmYud2dBcnRpY2xlSWQgJiYgd2F0Y2hDcmVhdGUpIHx8IHdhdGNoRWRpdCB8fCBwYWdlV2F0Y2hlZDtcblx0XHRpZiAoY29uZi53Z0FydGljbGVJZCB8fCAhIXNpbmdsZUVkaXRvcikge1xuXHRcdFx0Ly8gUHJlcGFyZSBjaGFuZ2UtdGFnIHNhdmVcblx0XHRcdGlmIChhY3Rpb24gJiYgYWN0aW9uLnZhbHVlID09PSAnd3BTYXZlJykge1xuXHRcdFx0XHRpZiAoSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybSEud3BDaGFuZ2VUYWdzLnZhbHVlID0gSEMuY2hhbmdlVGFnO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb21taXRGb3JtIS53cEF1dG9TdW1tYXJ5LnZhbHVlID0gSEMuY2hhbmdlVGFnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNoYW5nZXMgPT09IDEpIHtcblx0XHRcdFx0aWYgKHJlc3VsdC5zdW1tYXJ5ICYmIHJlc3VsdC5zdW1tYXJ5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjb21taXRGb3JtIS53cFN1bW1hcnkudmFsdWUgPVxuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpICtcblx0XHRcdFx0XHRcdHJlc3VsdC5zdW1tYXJ5LmpvaW4oZ2V0TWVzc2FnZSgnbWVzc2FnZXMtc2VwYXJhdG9yJykpICtcblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbW1pdEZvcm0hLndwTWlub3JlZGl0LmNoZWNrZWQgPSBIQy5zaW5nbGVfbWlub3IgfHwgbWlub3JFZGl0cztcblx0XHRcdH0gZWxzZSBpZiAoY2hhbmdlcykge1xuXHRcdFx0XHRjb25zdCBzdW1tYXJ5OiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRjb25zdCBzaG9ydFN1bW1hcnk6IHN0cmluZ1tdID0gW107XG5cdFx0XHRcdC8vIERlbGV0ZWRcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRlbGV0ZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGDiiJIke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGRlbGV0ZWRbaV0hKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkZWxldGVkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDiiJIke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGRlbGV0ZWRbMF0hKX1gO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGRlbGV0ZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDiiJIgJHttdWx0aUNoYW5nZU1zZyhkZWxldGVkLmxlbmd0aCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBZGRlZFxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYWRkZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGArJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBhZGRlZFtpXSEpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGFkZGVkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGArJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBhZGRlZFswXSEpfWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYWRkZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGArICR7bXVsdGlDaGFuZ2VNc2coYWRkZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIENoYW5nZWRcblx0XHRcdFx0Y29uc3QgYXJyb3cgPSBpc19ydGwgPyAnXFx1MjE5MCcgOiAnXFx1MjE5Mic7IC8vIGxlZnQgYW5kIHJpZ2h0IGFycm93cy4gRG9uJ3QgdXNlIOKGkCBhbmQg4oaSIGluIHRoZSBjb2RlLlxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2hhbmdlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGNvbnN0IGNoYW5nZSA9IGNoYW5nZWRbaV0hO1xuXHRcdFx0XHRcdGlmIChjaGFuZ2UuZnJvbSA9PT0gY2hhbmdlLnRvKSB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlLmZyb20pfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID1cblx0XHRcdFx0XHRcdFx0YMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2UuZnJvbSl9JHthcnJvd30ke2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0XHRcdFx0J21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlLnRvXG5cdFx0XHRcdFx0XHRcdCl9YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNoYW5nZWQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0Y29uc3QgY2hhbmdlID0gY2hhbmdlZFswXSE7XG5cdFx0XHRcdFx0aWYgKGNoYW5nZS5mcm9tID09PSBjaGFuZ2UudG8pIHtcblx0XHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlLmZyb20pfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDCsSR7Z2V0TWVzc2FnZShcblx0XHRcdFx0XHRcdFx0J21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsXG5cdFx0XHRcdFx0XHRcdGNoYW5nZS5mcm9tXG5cdFx0XHRcdFx0XHQpfSR7YXJyb3d9JHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2UudG8pfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGNoYW5nZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDCsSAke211bHRpQ2hhbmdlTXNnKGNoYW5nZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdW1tYXJ5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjb25zdCBqb2luZWRTdW1tYXJ5ID0gc3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKTtcblx0XHRcdFx0XHRjb25zdCBmaW5hbFN1bW1hcnkgPVxuXHRcdFx0XHRcdFx0am9pbmVkU3VtbWFyeS5sZW5ndGggPlxuXHRcdFx0XHRcdFx0MjAwIC1cblx0XHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpLmxlbmd0aCAtXG5cdFx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpLmxlbmd0aFxuXHRcdFx0XHRcdFx0XHQ/IHNob3J0U3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKVxuXHRcdFx0XHRcdFx0XHQ6IGpvaW5lZFN1bW1hcnk7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybSEud3BTdW1tYXJ5LnZhbHVlID1cblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpKSArXG5cdFx0XHRcdFx0XHRmaW5hbFN1bW1hcnkgK1xuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y29tbWl0Rm9ybSEud3BUZXh0Ym94MS52YWx1ZSA9IHJlc3VsdC50ZXh0O1xuXHRcdGNvbW1pdEZvcm0hLndwU3RhcnR0aW1lLnZhbHVlID0gc2VydmVyVGltZSB8fCBjdXJyZW50VGltZXN0YW1wKCk7XG5cdFx0Y29tbWl0Rm9ybSEud3BFZGl0dGltZS52YWx1ZSA9IHBhZ2VUaW1lIHx8IGNvbW1pdEZvcm0hLndwU3RhcnR0aW1lLnZhbHVlO1xuXHRcdGlmIChzZWxmRWRpdENvbmZsaWN0KSB7XG5cdFx0XHRjb21taXRGb3JtIS5vbGRpZC52YWx1ZSA9IFN0cmluZyhwYWdlVGV4dFJldklkIHx8IGNvbmYud2dDdXJSZXZpc2lvbklkKTtcblx0XHR9XG5cdFx0Ly8gU3VibWl0IHRoZSBmb3JtIGluIGEgd2F5IHRoYXQgdHJpZ2dlcnMgb25zdWJtaXQgZXZlbnRzOiBjb21taXRGb3JtLnN1Ym1pdCgpIGRvZXNuJ3QuXG5cdFx0Y29tbWl0Rm9ybSEuaGNDb21taXQuY2xpY2soKTtcblx0fTtcblx0Y29uc3QgcmVzb2x2ZU9uZSA9IChwYWdlOiBIb3RDYXRBcGlQYWdlLCB0b1Jlc29sdmU6IENhdGVnb3J5RWRpdG9yW10pOiB2b2lkID0+IHtcblx0XHRjb25zdCBjYXRzID0gcGFnZS5jYXRlZ29yaWVzO1xuXHRcdGNvbnN0IHtsaW5rc30gPSBwYWdlO1xuXHRcdGxldCBpc19kYWIgPSBmYWxzZTsgLy8gSGFyZCByZWRpcmVjdD9cblx0XHRsZXQgaXNfcmVkaXIgPSB0eXBlb2YgcGFnZS5yZWRpcmVjdCA9PT0gJ3N0cmluZyc7XG5cdFx0bGV0IGk6IG51bWJlcjtcblx0XHRjb25zdCBpc19oaWRkZW4gPSBwYWdlLmNhdGVnb3J5aW5mbyAmJiB0eXBlb2YgcGFnZS5jYXRlZ29yeWluZm8uaGlkZGVuID09PSAnc3RyaW5nJztcblx0XHRjb25zdCBpc19taXNzaW5nID0gdHlwZW9mIHBhZ2UubWlzc2luZyA9PT0gJ3N0cmluZyc7XG5cdFx0Y29uc3QgcGFnZVRpdGxlID0gcGFnZS50aXRsZS5zbGljZShNYXRoLm1heCgwLCBwYWdlLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBlZGl0b3IgPSB0b1Jlc29sdmVbaV0hO1xuXHRcdFx0aWYgKGkgJiYgZWRpdG9yLmRhYklucHV0Q2xlYW5lZCAhPT0gcGFnZVRpdGxlKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gTm90ZTogdGhlIHNlcnZlciByZXR1cm5zIGluIHBhZ2UgYW4gTkZDIG5vcm1hbGl6ZWQgVW5pY29kZSB0aXRsZS4gSWYgb3VyIGlucHV0IHdhcyBub3QgTkZDIG5vcm1hbGl6ZWQsIHdlIG1heSBub3QgZmluZFxuXHRcdFx0Ly8gYW55IGVudHJ5IGhlcmUuIElmIHdlIGhhdmUgb25seSBvbmUgZWRpdG9yIHRvIHJlc29sdmUgKHRoZSBtb3N0IGNvbW1vbiBjYXNlLCBJIHByZXN1bWUpLCB3ZSBtYXkgc2ltcGx5IHNraXAgdGhlIGNoZWNrLlxuXHRcdFx0ZWRpdG9yLmN1cnJlbnRIaWRkZW4gPSBpc19oaWRkZW47XG5cdFx0XHRlZGl0b3IuaW5wdXRFeGlzdHMgPSAhaXNfbWlzc2luZztcblx0XHRcdGVkaXRvci5pY29uIS5zcmMgPSBpc19taXNzaW5nID8gSEMuZXhpc3RzTm8gOiBIQy5leGlzdHNZZXM7XG5cdFx0fVxuXHRcdGlmIChpc19taXNzaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghaXNfcmVkaXIgJiYgY2F0cyAmJiAoZ2V0TWVzc2FnZSgnZGlzYW1iaWdfY2F0ZWdvcnknKSB8fCBnZXRNZXNzYWdlKCdyZWRpcl9jYXRlZ29yeScpKSkge1xuXHRcdFx0Zm9yIChjb25zdCBjYXRfIG9mIGNhdHMpIHtcblx0XHRcdFx0bGV0IGNhdCA9IGNhdF8udGl0bGU7XG5cdFx0XHRcdC8vIFN0cmlwIG5hbWVzcGFjZSBwcmVmaXhcblx0XHRcdFx0aWYgKGNhdCkge1xuXHRcdFx0XHRcdGNhdCA9IGNhdC5zbGljZShNYXRoLm1heCgwLCBjYXQuaW5kZXhPZignOicpICsgMSkpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdFx0XHRpZiAoY2F0ID09PSBnZXRNZXNzYWdlKCdkaXNhbWJpZ19jYXRlZ29yeScpKSB7XG5cdFx0XHRcdFx0XHRpc19kYWIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjYXQgPT09IGdldE1lc3NhZ2UoJ3JlZGlyX2NhdGVnb3J5JykpIHtcblx0XHRcdFx0XHRcdGlzX3JlZGlyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWlzX3JlZGlyICYmICFpc19kYWIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFsaW5rcyB8fCBsaW5rcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgdGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQvLyBDYXRlZ29yeSBuYW1lc3BhY2UgLS0gYWx3YXlzIHRydWUgc2luY2Ugd2UgYXNrIG9ubHkgZm9yIHRoZSBjYXRlZ29yeSBsaW5rc1xuXHRcdFx0XHRsaW5rLm5zID09PSAxNCAmJlxuXHRcdFx0XHQvLyBOYW1lIG5vdCBlbXB0eVxuXHRcdFx0XHRsaW5rLnRpdGxlICYmXG5cdFx0XHRcdGxpbmsudGl0bGUubGVuZ3RoID4gMFxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIEludGVybmFsIGxpbmsgdG8gZXhpc3RpbmcgdGhpbmd5LiBFeHRyYWN0IHRoZSBwYWdlIG5hbWUgYW5kIHJlbW92ZSB0aGUgbmFtZXNwYWNlLlxuXHRcdFx0XHRjb25zdCBtYXRjaCA9IGxpbmsudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgbGluay50aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdC8vIEV4Y2x1ZGUgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllcy5cblx0XHRcdFx0aWYgKCFIQy5ibGFja2xpc3QgfHwgIUhDLmJsYWNrbGlzdC50ZXN0KG1hdGNoKSkge1xuXHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IG1hdGNoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGVkaXRvciA9IHRvUmVzb2x2ZVtpXSE7XG5cdFx0XHRpZiAoaSAmJiBlZGl0b3IuZGFiSW5wdXRDbGVhbmVkICE9PSBwYWdlVGl0bGUpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRlZGl0b3IuaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBNaWdodCBhY3R1YWxseSBiZSB3cm9uZyBpZiBpdCdzIGEgcmVkaXJlY3QgcG9pbnRpbmcgdG8gYSBub24tZXhpc3RpbmcgY2F0ZWdvcnlcblx0XHRcdGVkaXRvci5pY29uIS5zcmMgPSBIQy5leGlzdHNZZXM7XG5cdFx0XHRpZiAodGl0bGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0ZWRpdG9yLmRhYiA9IHRpdGxlcztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVkaXRvci50ZXh0IS52YWx1ZSA9IHRpdGxlc1swXSEgKyAoZWRpdG9yLmN1cnJlbnRLZXkgPT09IG51bGwgPyAnJyA6IGB8JHtlZGl0b3IuY3VycmVudEtleX1gKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlc29sdmVSZWRpcmVjdHMgPSAodG9SZXNvbHZlOiBDYXRlZ29yeUVkaXRvcltdLCBwYXJhbXM/OiBIb3RDYXRBcGlRdWVyeVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0aWYgKCFwYXJhbXMgfHwgIXBhcmFtcy5xdWVyeSB8fCAhcGFyYW1zLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHtwYWdlc30gPSBwYXJhbXMucXVlcnk7XG5cdFx0Zm9yIChjb25zdCBwIGluIHBhZ2VzKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocGFnZXMsIHApKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmVzb2x2ZU9uZSgocGFnZXMgYXMgUmVjb3JkPHN0cmluZywgSG90Q2F0QXBpUGFnZT4pW3BdISwgdG9SZXNvbHZlKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlc29sdmVNdWx0aSA9ICh0b1Jlc29sdmU6IENhdGVnb3J5RWRpdG9yW10sIGNhbGxiYWNrOiAocmVzb2x2ZWQ6IENhdGVnb3J5RWRpdG9yW10pID0+IHZvaWQpOiB2b2lkID0+IHtcblx0XHRsZXQgaTogbnVtYmVyO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGVkaXRvciA9IHRvUmVzb2x2ZVtpXSE7XG5cdFx0XHRlZGl0b3IuZGFiID0gbnVsbDtcblx0XHRcdGVkaXRvci5kYWJJbnB1dCA9IGVkaXRvci5sYXN0SW5wdXQ7XG5cdFx0fVxuXHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRwcm9wOiAnaW5mb3xsaW5rc3xjYXRlZ29yaWVzfGNhdGVnb3J5aW5mbycsXG5cdFx0XHRwbG5hbWVzcGFjZTogJzE0Jyxcblx0XHRcdHBsbGltaXQ6IFN0cmluZyh0b1Jlc29sdmUubGVuZ3RoICogMTApLFxuXHRcdFx0Y2xsaW1pdDogU3RyaW5nKHRvUmVzb2x2ZS5sZW5ndGggKiAxMCksXG5cdFx0fTtcblx0XHRjb25zdCB0aXRsZXM6IHN0cmluZ1tdID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgZWRpdG9yID0gdG9SZXNvbHZlW2ldITtcblx0XHRcdGNvbnN0IHYgPSByZXBsYWNlU2hvcnRjdXRzKGVkaXRvci5kYWJJbnB1dCEsIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRlZGl0b3IuZGFiSW5wdXRDbGVhbmVkID0gdjtcblx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IGBDYXRlZ29yeToke3Z9YDtcblx0XHR9XG5cdFx0cGFyYW1zLnRpdGxlcyA9IHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0YXBpLmdldChwYXJhbXMpXG5cdFx0XHQuZG9uZSgoanNvbikgPT4ge1xuXHRcdFx0XHRyZXNvbHZlUmVkaXJlY3RzKHRvUmVzb2x2ZSwganNvbiBhcyBIb3RDYXRBcGlRdWVyeVJlc3BvbnNlKTtcblx0XHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgocmVxKSA9PiB7XG5cdFx0XHRcdGlmICghcmVxKSB7XG5cdFx0XHRcdFx0bm9TdWdnZXN0aW9ucyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBtYWtlQWN0aXZlID0gKHdoaWNoOiBDYXRlZ29yeUVkaXRvcik6IHZvaWQgPT4ge1xuXHRcdGlmICh3aGljaC5pc19hY3RpdmUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvciAhPT0gd2hpY2gpIHtcblx0XHRcdFx0ZWRpdG9yLmluYWN0aXZhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0d2hpY2guaXNfYWN0aXZlID0gdHJ1ZTtcblx0XHRpZiAod2hpY2guZGFiKSB7XG5cdFx0XHRzaG93RGFiKHdoaWNoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gQ2hlY2sgZm9yIHByb2dyYW1tYXRpYyB2YWx1ZSBjaGFuZ2VzLlxuXHRcdFx0Y29uc3QgZXhwZWN0ZWRJbnB1dCA9IHdoaWNoLmxhc3RSZWFsSW5wdXQgfHwgd2hpY2gubGFzdElucHV0IHx8ICcnO1xuXHRcdFx0Y29uc3QgYWN0dWFsVmFsdWUgPSB3aGljaC50ZXh0IS52YWx1ZSB8fCAnJztcblx0XHRcdGlmIChcblx0XHRcdFx0KGV4cGVjdGVkSW5wdXQubGVuZ3RoID09PSAwICYmIGFjdHVhbFZhbHVlLmxlbmd0aCA+IDApIHx8XG5cdFx0XHRcdChleHBlY3RlZElucHV0Lmxlbmd0aCA+IDAgJiYgYWN0dWFsVmFsdWUuaW5kZXhPZihleHBlY3RlZElucHV0KSlcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBTb21laG93IHRoZSBmaWVsZCdzIHZhbHVlIGFwcGVhcnMgdG8gaGF2ZSBjaGFuZ2VkLCBhbmQgd2hpY2gubGFzdFNlbGVjdGlvbiB0aGVyZWZvcmUgaXMgbm8gbG9uZ2VyIHZhbGlkLiBUcnkgdG8gc2V0IHRoZVxuXHRcdFx0XHQvLyBjdXJzb3IgYXQgdGhlIGVuZCBvZiB0aGUgY2F0ZWdvcnksIGFuZCBkbyBub3QgZGlzcGxheSB0aGUgb2xkIHN1Z2dlc3Rpb24gbGlzdC5cblx0XHRcdFx0d2hpY2guc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IHYgPSBhY3R1YWxWYWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRbd2hpY2gubGFzdElucHV0XSA9IHYgYXMgW3N0cmluZ107XG5cdFx0XHRcdHdoaWNoLmxhc3RSZWFsSW5wdXQgPSB3aGljaC5sYXN0SW5wdXQ7XG5cdFx0XHRcdGlmICh2Lmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHR3aGljaC5jdXJyZW50S2V5ID0gdlsxXSE7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2hpY2gubGFzdFNlbGVjdGlvbiAmJj0ge1xuXHRcdFx0XHRcdHN0YXJ0OiB2WzBdIS5sZW5ndGgsXG5cdFx0XHRcdFx0ZW5kOiB2WzBdIS5sZW5ndGgsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAod2hpY2guc2hvd3NMaXN0KSB7XG5cdFx0XHRcdHdoaWNoLmRpc3BsYXlMaXN0KCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2hpY2gubGFzdFNlbGVjdGlvbikge1xuXHRcdFx0XHRjb25zdCB7bGFzdFNlbGVjdGlvbn0gPSB3aGljaDtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0d2hpY2guc2V0U2VsZWN0aW9uKGxhc3RTZWxlY3Rpb24uc3RhcnQsIGxhc3RTZWxlY3Rpb24uZW5kKTtcblx0XHRcdFx0fSwgMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBzaG93RGFiID0gKHdoaWNoOiBDYXRlZ29yeUVkaXRvcik6IHZvaWQgPT4ge1xuXHRcdGlmICh3aGljaC5pc19hY3RpdmUpIHtcblx0XHRcdHdoaWNoLnNob3dTdWdnZXN0aW9ucyh3aGljaC5kYWIsIGZhbHNlLCBudWxsLCBudWxsKTsgLy8gZG8gYXV0b2NvbXBsZXRpb24sIG5vIGtleSwgbm8gZW5naW5lIHNlbGVjdG9yXG5cdFx0XHR3aGljaC5kYWIgPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYWtlQWN0aXZlKHdoaWNoKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG11bHRpU3VibWl0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHRvUmVzb2x2ZTogQ2F0ZWdvcnlFZGl0b3JbXSA9IFtdO1xuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgPT09IENIQU5HRV9QRU5ESU5HIHx8IGVkaXRvci5zdGF0ZSA9PT0gT1BFTikge1xuXHRcdFx0XHR0b1Jlc29sdmVbdG9SZXNvbHZlLmxlbmd0aF0gPSBlZGl0b3I7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0b1Jlc29sdmUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJlc29sdmVNdWx0aSh0b1Jlc29sdmUsIChyZXNvbHZlZCkgPT4ge1xuXHRcdFx0bGV0IGZpcnN0RGFiOiBDYXRlZ29yeUVkaXRvciB8IG51bGwgPSBudWxsO1xuXHRcdFx0bGV0IGRvbnRDaGFuZ2UgPSBmYWxzZTtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiByZXNvbHZlZCkge1xuXHRcdFx0XHRpZiAoZWxlbWVudC5sYXN0SW5wdXQgPT09IGVsZW1lbnQuZGFiSW5wdXQpIHtcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5kYWIpIHtcblx0XHRcdFx0XHRcdGZpcnN0RGFiIHx8PSBlbGVtZW50O1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudC5hY2NlcHRDaGVjayh0cnVlKSkge1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jb21taXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gV2UgZGlkbid0IGRpc2FibGUgYWxsIHRoZSBvcGVuIGVkaXRvcnMsIGJ1dCB3ZSBkaWQgYXN5bmNocm9ub3VzIGNhbGxzLiBJdCBpc1xuXHRcdFx0XHRcdC8vIHRoZW9yZXRpY2FsbHkgcG9zc2libGUgdGhhdCB0aGUgdXNlciBjaGFuZ2VkIHNvbWV0aGluZy4uLlxuXHRcdFx0XHRcdGRvbnRDaGFuZ2UgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZmlyc3REYWIpIHtcblx0XHRcdFx0c2hvd0RhYihmaXJzdERhYik7XG5cdFx0XHR9IGVsc2UgaWYgKCFkb250Q2hhbmdlKSB7XG5cdFx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBzZXRNdWx0aUlucHV0ID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmIChjb21taXRCdXR0b24gfHwgb25VcGxvYWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29tbWl0QnV0dG9uID0gbWFrZSgnaW5wdXQnKTtcblx0XHRjb21taXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuXHRcdGNvbW1pdEJ1dHRvbi52YWx1ZSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNvbW1pdCcpO1xuXHRcdGNvbW1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG11bHRpU3VibWl0KTtcblx0XHRpZiAobXVsdGlTcGFuKSB7XG5cdFx0XHRtdWx0aVNwYW4ucmVwbGFjZVdpdGgoY29tbWl0QnV0dG9uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2F0TGluZSEuYXBwZW5kKGNvbW1pdEJ1dHRvbik7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBjaGVja011bHRpSW5wdXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKCFjb21taXRCdXR0b24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGhhc0NoYW5nZXMgPSBmYWxzZTtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0aGFzQ2hhbmdlcyA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSAhaGFzQ2hhbmdlcztcblx0fTtcblx0aW50ZXJmYWNlIEhvdENhdENhdGVnb3J5TWVtYmVyIHtcblx0XHR0aXRsZTogc3RyaW5nO1xuXHR9XG5cdGludGVyZmFjZSBIb3RDYXRTdWdnZXN0aW9uUXVlcnlSZXNwb25zZSB7XG5cdFx0cXVlcnk/OiB7XG5cdFx0XHRhbGxwYWdlcz86IEhvdENhdENhdGVnb3J5TWVtYmVyW107XG5cdFx0XHRjYXRlZ29yeW1lbWJlcnM/OiBIb3RDYXRDYXRlZ29yeU1lbWJlcltdO1xuXHRcdFx0cGFnZXM/OiBSZWNvcmQ8c3RyaW5nLCB7dGl0bGU6IHN0cmluZzsgY2F0ZWdvcmllcz86IEhvdENhdENhdGVnb3J5TWVtYmVyW119Pjtcblx0XHR9O1xuXHR9XG5cdC8qKlxuXHQgKiBSZW1vdmUgdGhlIG5hbWVzcGFjZSBwcmVmaXggZnJvbSBhIGxpc3Qgb2YgcGFnZSB0aXRsZXNcblx0ICpcblx0ICogQHBhcmFtIHtIb3RDYXRDYXRlZ29yeU1lbWJlcltdfSBtZW1iZXJzXG5cdCAqIEByZXR1cm4ge0hvdENhdFN1Z2dlc3Rpb25UaXRsZXN9XG5cdCAqL1xuXHRjb25zdCB0b0NhdGVnb3J5VGl0bGVzID0gKG1lbWJlcnM6IEhvdENhdENhdGVnb3J5TWVtYmVyW10pOiBIb3RDYXRTdWdnZXN0aW9uVGl0bGVzID0+IHtcblx0XHRyZXR1cm4gbWVtYmVycy5tYXAoKG1lbWJlcikgPT4ge1xuXHRcdFx0cmV0dXJuIG1lbWJlci50aXRsZS5zbGljZShNYXRoLm1heCgwLCBtZW1iZXIudGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdH0pIGFzIEhvdENhdFN1Z2dlc3Rpb25UaXRsZXM7XG5cdH07XG5cdGNvbnN0IHN1Z2dlc3Rpb25FbmdpbmVzOiBSZWNvcmQ8c3RyaW5nLCBIb3RDYXRTdWdnZXN0aW9uRW5naW5lPiA9IHtcblx0XHRvcGVuc2VhcmNoOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1vcGVuc2VhcmNoJm5hbWVzcGFjZT0xNCZsaW1pdD0zMCZzZWFyY2g9Q2F0ZWdvcnk6JDFgLFxuXHRcdFx0Ly8gJDEgPSBzZWFyY2ggdGVybVxuXHRcdFx0Ly8gRnVuY3Rpb24gdG8gY29udmVydCByZXN1bHQgb2YgdXJpIGludG8gYW4gYXJyYXkgb2YgY2F0ZWdvcnkgbmFtZXNcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdDogdW5rbm93biwgcXVlcnlLZXk/OiBzdHJpbmcpOiBIb3RDYXRTdWdnZXN0aW9uVGl0bGVzIHwgbnVsbCA9PiB7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHF1ZXJ5UmVzdWx0IGFzIFtzdHJpbmcsIEhvdENhdFN1Z2dlc3Rpb25UaXRsZXNdIHwgbnVsbDtcblx0XHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBTdHJpbmcocmVzdWx0WzBdKS5zbGljZShNYXRoLm1heCgwLCBTdHJpbmcocmVzdWx0WzBdKS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gcmVzdWx0WzFdO1xuXHRcdFx0XHRcdGxldCBleGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0XHRjYXRfcHJlZml4IHx8PSBuZXcgUmVnRXhwKGBeKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGNhdF9wcmVmaXgubGFzdEluZGV4ID0gMDtcblx0XHRcdFx0XHRcdGNvbnN0IG0gPSBjYXRfcHJlZml4LmV4ZWModGl0bGVzW2ldISk7XG5cdFx0XHRcdFx0XHRpZiAobSAmJiBtLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldIS5zbGljZShNYXRoLm1heCgwLCB0aXRsZXNbaV0hLmluZGV4T2YoJzonKSArIDEpKTsgLy8gcm0gbmFtZXNwYWNlXG5cdFx0XHRcdFx0XHRcdGlmIChrZXkgPT09IHRpdGxlc1tpXSkge1xuXHRcdFx0XHRcdFx0XHRcdGV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7IC8vIE5vcGUsIGl0J3Mgbm90IGEgY2F0ZWdvcnkgYWZ0ZXIgYWxsLlxuXHRcdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRpdGxlcy5leGlzdHMgPSBleGlzdHM7XG5cdFx0XHRcdFx0aWYgKHF1ZXJ5S2V5ICE9PSBrZXkpIHtcblx0XHRcdFx0XHRcdHRpdGxlcy5ub3JtYWxpemVkID0ga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBSZW1lbWJlciB0aGUgTkZDIG5vcm1hbGl6ZWQga2V5IHdlIGdvdCBiYWNrIGZyb20gdGhlIHNlcnZlclxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0aW50ZXJuYWxzZWFyY2g6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5Jmxpc3Q9YWxscGFnZXMmYXBuYW1lc3BhY2U9MTQmYXBsaW1pdD0zMCZhcGZyb209JDEmYXBwcmVmaXg9JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0OiB1bmtub3duKTogSG90Q2F0U3VnZ2VzdGlvblRpdGxlcyB8IG51bGwgPT4ge1xuXHRcdFx0XHRjb25zdCBhbGxwYWdlcyA9IChxdWVyeVJlc3VsdCBhcyBIb3RDYXRTdWdnZXN0aW9uUXVlcnlSZXNwb25zZSB8IG51bGwpPy5xdWVyeT8uYWxscGFnZXM7XG5cdFx0XHRcdHJldHVybiBhbGxwYWdlcyA/IHRvQ2F0ZWdvcnlUaXRsZXMoYWxscGFnZXMpIDogbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRleGlzdHM6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldCgnd2dTY3JpcHRQYXRoJyl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5JnByb3A9aW5mbyZ0aXRsZXM9Q2F0ZWdvcnk6JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0OiB1bmtub3duLCBxdWVyeUtleT86IHN0cmluZyk6IEhvdENhdFN1Z2dlc3Rpb25UaXRsZXMgfCBudWxsID0+IHtcblx0XHRcdFx0Y29uc3Qge3BhZ2VzfSA9IChxdWVyeVJlc3VsdCBhcyBIb3RDYXRTdWdnZXN0aW9uUXVlcnlSZXNwb25zZSB8IG51bGwpPy5xdWVyeSA/PyB7fTtcblx0XHRcdFx0aWYgKCFwYWdlcyB8fCBwYWdlc1snLTEnXSkge1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFNob3VsZCBoYXZlIGV4YWN0bHkgMVxuXHRcdFx0XHRmb3IgKGNvbnN0IHAgaW4gcGFnZXMpIHtcblx0XHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocGFnZXMsIHApKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGV0IF90aXRsZTogc3RyaW5nID0gcGFnZXNbcF0hLnRpdGxlO1xuXHRcdFx0XHRcdF90aXRsZSA9IF90aXRsZS5zbGljZShNYXRoLm1heCgwLCBfdGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlczogSG90Q2F0U3VnZ2VzdGlvblRpdGxlcyA9IFtfdGl0bGVdO1xuXHRcdFx0XHRcdHRpdGxlcy5leGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdGlmIChxdWVyeUtleSAhPT0gX3RpdGxlKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMubm9ybWFsaXplZCA9IF90aXRsZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gTkZDXG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRzdWJjYXRlZ29yaWVzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZsaXN0PWNhdGVnb3J5bWVtYmVycyZjbXR5cGU9c3ViY2F0JmNtbGltaXQ9bWF4JmNtdGl0bGU9Q2F0ZWdvcnk6JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0OiB1bmtub3duKTogSG90Q2F0U3VnZ2VzdGlvblRpdGxlcyB8IG51bGwgPT4ge1xuXHRcdFx0XHRjb25zdCBjYXRlZ29yeW1lbWJlcnMgPSAocXVlcnlSZXN1bHQgYXMgSG90Q2F0U3VnZ2VzdGlvblF1ZXJ5UmVzcG9uc2UgfCBudWxsKT8ucXVlcnk/LmNhdGVnb3J5bWVtYmVycztcblx0XHRcdFx0cmV0dXJuIGNhdGVnb3J5bWVtYmVycyA/IHRvQ2F0ZWdvcnlUaXRsZXMoY2F0ZWdvcnltZW1iZXJzKSA6IG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0cGFyZW50Y2F0ZWdvcmllczoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmcHJvcD1jYXRlZ29yaWVzJnRpdGxlcz1DYXRlZ29yeTokMSZjbGxpbWl0PW1heGAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQ6IHVua25vd24pOiBIb3RDYXRTdWdnZXN0aW9uVGl0bGVzIHwgbnVsbCA9PiB7XG5cdFx0XHRcdGNvbnN0IHtwYWdlc30gPSAocXVlcnlSZXN1bHQgYXMgSG90Q2F0U3VnZ2VzdGlvblF1ZXJ5UmVzcG9uc2UgfCBudWxsKT8ucXVlcnkgPz8ge307XG5cdFx0XHRcdGlmICghcGFnZXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGNvbnN0IHAgaW4gcGFnZXMpIHtcblx0XHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocGFnZXMsIHApKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3Qge2NhdGVnb3JpZXN9ID0gcGFnZXNbcF0hO1xuXHRcdFx0XHRcdGlmIChjYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdG9DYXRlZ29yeVRpdGxlcyhjYXRlZ29yaWVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cdGNvbnN0IHN1Z2dlc3Rpb25Db25maWdzOiBSZWNvcmQ8c3RyaW5nLCBIb3RDYXRTdWdnZXN0aW9uQ29uZmlnPiA9IHtcblx0XHRzZWFyY2hpbmRleDoge1xuXHRcdFx0bmFtZTogJ1NlYXJjaCBpbmRleCcsXG5cdFx0XHRlbmdpbmVzOiBbJ29wZW5zZWFyY2gnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRwYWdlbGlzdDoge1xuXHRcdFx0bmFtZTogJ1BhZ2UgbGlzdCcsXG5cdFx0XHRlbmdpbmVzOiBbJ2ludGVybmFsc2VhcmNoJywgJ2V4aXN0cyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdGNvbWJpbmVkOiB7XG5cdFx0XHRuYW1lOiAnQ29tYmluZWQgc2VhcmNoJyxcblx0XHRcdGVuZ2luZXM6IFsnb3BlbnNlYXJjaCcsICdpbnRlcm5hbHNlYXJjaCddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdHN1YmNhdDoge1xuXHRcdFx0bmFtZTogJ1N1YmNhdGVnb3JpZXMnLFxuXHRcdFx0ZW5naW5lczogWydzdWJjYXRlZ29yaWVzJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogdHJ1ZSxcblx0XHRcdG5vQ29tcGxldGlvbjogdHJ1ZSxcblx0XHR9LFxuXHRcdHBhcmVudGNhdDoge1xuXHRcdFx0bmFtZTogJ1BhcmVudCBjYXRlZ29yaWVzJyxcblx0XHRcdGVuZ2luZXM6IFsncGFyZW50Y2F0ZWdvcmllcyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IHRydWUsXG5cdFx0XHRub0NvbXBsZXRpb246IHRydWUsXG5cdFx0fSxcblx0fTtcblx0Ly8gRXZlbnQga2V5Q29kZXMgdGhhdCB3ZSBoYW5kbGUgaW4gdGhlIHRleHQgaW5wdXQgZmllbGQvc3VnZ2VzdGlvbiBsaXN0LlxuXHRjb25zdCBCUyA9IDg7XG5cdGNvbnN0IFRBQiA9IDk7XG5cdGNvbnN0IFJFVCA9IDEzO1xuXHRjb25zdCBFU0MgPSAyNztcblx0Y29uc3QgU1BBQ0UgPSAzMjtcblx0Y29uc3QgUEdVUCA9IDMzO1xuXHRjb25zdCBQR0RPV04gPSAzNDtcblx0Y29uc3QgVVAgPSAzODtcblx0Y29uc3QgRE9XTiA9IDQwO1xuXHRjb25zdCBERUwgPSA0Njtcblx0Y29uc3QgSU1FID0gMjI5O1xuXHRjbGFzcyBDYXRlZ29yeUVkaXRvciB7XG5cdFx0aXNDb21wb3NpdGlvblN0YXJ0ID0gZmFsc2U7XG5cdFx0aXNBZGRDYXRlZ29yeSA9IGZhbHNlO1xuXHRcdGNhdExpbms6IEhUTUxBbmNob3JFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdFx0b3JpZ2luYWxDYXRlZ29yeSA9ICcnO1xuXHRcdG9yaWdpbmFsS2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0XHRvcmlnaW5hbEV4aXN0cyA9IGZhbHNlO1xuXHRcdG9yaWdpbmFsSGlkZGVuOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHRcdG9yaWdpbmFsU3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0bGlua1NwYW4hOiBIVE1MU3BhbkVsZW1lbnQ7XG5cdFx0bm9ybWFsTGlua3M6IEhUTUxTcGFuRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdHVuZGVsTGluazogSFRNTFNwYW5FbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdFx0dXBEb3duTGlua3M6IEhUTUxTcGFuRWxlbWVudCB8IHVuZGVmaW5lZDtcblx0XHR1bmRvTGluazogSFRNTFNwYW5FbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdFx0bGluZTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblx0XHRzcGFuITogSFRNTEVsZW1lbnQ7XG5cdFx0ZW5naW5lID0gJyc7XG5cdFx0ZW5naW5lTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdFx0ZW5naW5lU2VsZWN0b3I6IEhUTUxTZWxlY3RFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHRcdGZvcm06IEhUTUxGb3JtRWxlbWVudCB8IHVuZGVmaW5lZDtcblx0XHR0ZXh0OiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHRcdGljb246IEhUTUxJbWFnZUVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cdFx0bGlzdDogSFRNTFNlbGVjdEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblx0XHRvazogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZDtcblx0XHRjYW5jZWxCdXR0b246IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cdFx0Y3VycmVudENhdGVnb3J5ID0gJyc7XG5cdFx0Y3VycmVudEV4aXN0cyA9IGZhbHNlO1xuXHRcdGN1cnJlbnRIaWRkZW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdFx0Y3VycmVudEtleTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdFx0c3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0bGFzdFNhdmVkU3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0bGFzdFNhdmVkQ2F0ZWdvcnkgPSAnJztcblx0XHRsYXN0U2F2ZWRLZXk6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRcdGxhc3RTYXZlZEV4aXN0cyA9IGZhbHNlO1xuXHRcdGxhc3RTYXZlZEhpZGRlbjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0XHRsYXN0SW5wdXQgPSAnJztcblx0XHRsYXN0UmVhbElucHV0ID0gJyc7XG5cdFx0bGFzdFNlbGVjdGlvbjoge3N0YXJ0OiBudW1iZXI7IGVuZDogbnVtYmVyfSB8IHVuZGVmaW5lZDtcblx0XHRsYXN0UXVlcnk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgPSBudWxsO1xuXHRcdHNob3dzTGlzdCA9IGZhbHNlO1xuXHRcdGlucHV0RXhpc3RzID0gZmFsc2U7XG5cdFx0aW1lID0gZmFsc2U7XG5cdFx0dXNlc0NvbXBvc2l0aW9uID0gZmFsc2U7XG5cdFx0bGFzdEtleTogc3RyaW5nIHwgbnVtYmVyID0gMDtcblx0XHRrZXlDb3VudCA9IDA7XG5cdFx0ZGFiOiBzdHJpbmdbXSB8IG51bGwgPSBudWxsO1xuXHRcdGRhYklucHV0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0ZGFiSW5wdXRDbGVhbmVkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdFx0Y2FsbGJhY2tPYmo6IEhvdENhdFN1Z2dlc3Rpb25DYWxsYmFjayB8IG51bGwgPSBudWxsO1xuXHRcdGlzX2FjdGl2ZSA9IGZhbHNlO1xuXHRcdG5vQ29tbWl0ID0gZmFsc2U7XG5cdFx0Y29uc3RydWN0b3IoXG5cdFx0XHRsaW5lOiBIVE1MRWxlbWVudCB8IG51bGwsXG5cdFx0XHRzcGFuOiBIVE1MRWxlbWVudCB8IG51bGwsXG5cdFx0XHRhZnRlcjogc3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBudWxsLFxuXHRcdFx0a2V5Pzogc3RyaW5nIHwgYm9vbGVhbiB8IG51bGwsXG5cdFx0XHRpc19oaWRkZW4/OiBib29sZWFuXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmluaXRpYWxpemUobGluZSwgc3BhbiwgYWZ0ZXIsIGtleSwgaXNfaGlkZGVuKTtcblx0XHR9XG5cdFx0aW5pdGlhbGl6ZShcblx0XHRcdGxpbmU6IEhUTUxFbGVtZW50IHwgbnVsbCxcblx0XHRcdHNwYW46IEhUTUxFbGVtZW50IHwgbnVsbCxcblx0XHRcdGFmdGVyOiBzdHJpbmcgfCBIVE1MRWxlbWVudCB8IG51bGwsXG5cdFx0XHRrZXk/OiBzdHJpbmcgfCBib29sZWFuIHwgbnVsbCxcblx0XHRcdGlzX2hpZGRlbj86IGJvb2xlYW5cblx0XHQpOiB2b2lkIHtcblx0XHRcdC8vIElmIGEgc3BhbiBpcyBnaXZlbiwgJ2FmdGVyJyBpcyB0aGUgY2F0ZWdvcnkgdGl0bGUsIG90aGVyd2lzZSBpdCBtYXkgYmUgYW4gZWxlbWVudCBhZnRlciB3aGljaCB0b1xuXHRcdFx0Ly8gaW5zZXJ0IHRoZSBuZXcgc3Bhbi4gJ2tleScgaXMgbGlrZXdpc2Ugb3ZlcmxvYWRlZDsgaWYgYSBzcGFuIGlzIGdpdmVuLCBpdCBpcyB0aGUgY2F0ZWdvcnkga2V5IChpZlxuXHRcdFx0Ly8ga25vd24pLCBvdGhlcndpc2UgaXQgaXMgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBhIGJhciBzaGFsbCBiZSBwcmVwZW5kZWQuXG5cdFx0XHRpZiAoc3Bhbikge1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0c3Bhbi5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rID0gc3Bhbi5maXJzdENoaWxkIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgPSBhZnRlciBhcyBzdHJpbmc7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxLZXkgPSB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkubGVuZ3RoID4gMSA/IGtleS5zbGljZSgxKSA6IG51bGw7IC8vID4gMSBiZWNhdXNlIGl0IGluY2x1ZGVzIHRoZSBsZWFkaW5nIGJhclxuXHRcdFx0XHR0aGlzLm9yaWdpbmFsRXhpc3RzID0gIWhhc0NsYXNzKHRoaXMuY2F0TGluaywgJ25ldycpO1xuXHRcdFx0XHQvLyBDcmVhdGUgY2hhbmdlIGFuZCBkZWwgbGlua3Ncblx0XHRcdFx0dGhpcy5tYWtlTGlua1NwYW4oKTtcblx0XHRcdFx0aWYgKCF0aGlzLm9yaWdpbmFsRXhpc3RzICYmIHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSB0cnVlO1xuXHRcdFx0XHQvLyBDcmVhdGUgYWRkIHNwYW4gYW5kIGFwcGVuZCB0byBjYXRMaW5rc1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgPSAnJztcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEtleSA9IG51bGw7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxFeGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0bGV0IGFmdGVyRWxlbWVudCA9IGFmdGVyIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcblx0XHRcdFx0aWYgKCFuZXdET00pIHtcblx0XHRcdFx0XHRjb25zdCBhZGRTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRcdGFkZFNwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQnO1xuXHRcdFx0XHRcdGlmIChrZXkpIHtcblx0XHRcdFx0XHRcdGFkZFNwYW4uYXBwZW5kKG1ha2UoJyB8ICcsIHRydWUpKTtcblx0XHRcdFx0XHRcdGlmIChhZnRlckVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdFx0YWZ0ZXJFbGVtZW50LnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShhZGRTcGFuLCBhZnRlckVsZW1lbnQubmV4dFNpYmxpbmcpO1xuXHRcdFx0XHRcdFx0XHRhZnRlckVsZW1lbnQgPSBhZnRlckVsZW1lbnQubmV4dFNpYmxpbmcgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUpIHtcblx0XHRcdFx0XHRcdFx0bGluZS5hcHBlbmQoYWRkU3Bhbik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChsaW5lICYmIGxpbmUuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRcdFx0YWRkU3Bhbi5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHRcdGxpbmUuYXBwZW5kKGFkZFNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxpbmtTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHR0aGlzLmxpbmtTcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50IG5vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5hZGQsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWFkZCcpO1xuXHRcdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0Y29uc3Qgb3V0ZXJTcGFuID0gbWFrZShuZXdET00gPyAnbGknIDogJ3NwYW4nKTtcblx0XHRcdFx0b3V0ZXJTcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdG91dGVyU3Bhbi5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRvdXRlclNwYW4uYXBwZW5kKHRoaXMubGlua1NwYW4pO1xuXHRcdFx0XHRpZiAoYWZ0ZXJFbGVtZW50KSB7XG5cdFx0XHRcdFx0YWZ0ZXJFbGVtZW50LnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShvdXRlclNwYW4sIGFmdGVyRWxlbWVudC5uZXh0U2libGluZyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAobGluZSkge1xuXHRcdFx0XHRcdGxpbmUuYXBwZW5kKG91dGVyU3Bhbik7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3BhbiA9IG91dGVyU3Bhbjtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcyA9IG51bGw7XG5cdFx0XHRcdHRoaXMudW5kZWxMaW5rID0gbnVsbDtcblx0XHRcdFx0dGhpcy5jYXRMaW5rID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHRoaXMub3JpZ2luYWxIaWRkZW4gPSBpc19oaWRkZW47XG5cdFx0XHR0aGlzLmxpbmUgPSBsaW5lO1xuXHRcdFx0dGhpcy5lbmdpbmUgPSBIQy5zdWdnZXN0aW9ucztcblx0XHRcdHRoaXMuc3BhbiA9IHNwYW4hO1xuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLnN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRTdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rICYmIHRoaXMuY3VycmVudEtleSkge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXk7XG5cdFx0XHR9XG5cdFx0XHRlZGl0b3JzW2VkaXRvcnMubGVuZ3RoXSA9IHRoaXM7XG5cdFx0fVxuXHRcdG1ha2VMaW5rU3BhbigpOiB2b2lkIHtcblx0XHRcdHRoaXMubm9ybWFsTGlua3MgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRsZXQgbGluazogSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsID0gbnVsbDtcblx0XHRcdGlmICh0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgJiYgdGhpcy5vcmlnaW5hbENhdGVnb3J5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5yZW1vdmUsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXJlbW92ZScpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdH1cblx0XHRcdGlmICghSEMudGVtcGxhdGVfY2F0ZWdvcmllc1t0aGlzLm9yaWdpbmFsQ2F0ZWdvcnldKSB7XG5cdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLmNoYW5nZSwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtY2hhbmdlJyk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMgJiYgSEMudXNlX3VwX2Rvd24pIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZG93bi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLmRvd24sIHRydWUpKTtcblx0XHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtZG93bicpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cC5iaW5kKHRoaXMpKTtcblx0XHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnVwLCB0cnVlKSk7XG5cdFx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXVwJyk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZCh0aGlzLnVwRG93bkxpbmtzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHRoaXMubGlua1NwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQgbm9wb3B1cHMgaG90Y2F0bGluayc7XG5cdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZCh0aGlzLm5vcm1hbExpbmtzKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuY2xhc3NOYW1lID0gJ25vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlc3RvcmUuYmluZCh0aGlzKSk7XG5cdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnJlc3RvcmUsIHRydWUpKTtcblx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1yZXN0b3JlJyk7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rLmFwcGVuZChsaW5rKTtcblx0XHRcdHRoaXMubGlua1NwYW4uYXBwZW5kKHRoaXMudW5kZWxMaW5rKTtcblx0XHR9XG5cdFx0aW52b2tlU3VnZ2VzdGlvbnMoZG9udF9hdXRvY29tcGxldGU/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoaXMuZW5naW5lICYmXG5cdFx0XHRcdHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXSAmJlxuXHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0hLnRlbXAgJiZcblx0XHRcdFx0IWRvbnRfYXV0b2NvbXBsZXRlXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmUgPSBIQy5zdWdnZXN0aW9ucztcblx0XHRcdH0gLy8gUmVzZXQgdG8gYSBzZWFyY2ggdXBvbiBpbnB1dFxuXHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKGRvbnRfYXV0b2NvbXBsZXRlKTtcblx0XHRcdH0sIEhDLnN1Z2dlc3RfZGVsYXkpO1xuXHRcdH1cblx0XHRtYWtlRm9ybSgpOiB2b2lkIHtcblx0XHRcdGNvbnN0IGZvcm0gPSBtYWtlKCdmb3JtJyk7XG5cdFx0XHRmb3JtLm1ldGhvZCA9ICdQT1NUJztcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5hY2NlcHQuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLmZvcm0gPSBmb3JtO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRjb25zdCB0ZXh0ID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdHRleHQudHlwZSA9ICd0ZXh0Jztcblx0XHRcdHRleHQuc2l6ZSA9IEhDLmVkaXRib3hfd2lkdGg7XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0Ly8gQmUgY2FyZWZ1bCBoZXJlIHRvIGhhbmRsZSBJTUUgaW5wdXQuIFRoaXMgaXMgYnJvd3Nlci9PUy9JTUUgZGVwZW5kZW50LCBidXQgYmFzaWNhbGx5IHRoZXJlIGFyZSB0d28gbWVjaGFuaXNtczpcblx0XHRcdFx0Ly8gLSBNb2Rlcm4gKERPTSBMZXZlbCAzKSBicm93c2VycyB1c2UgY29tcG9zaXRpb25zdGFydC9jb21wb3NpdGlvbmVuZCBldmVudHMgdG8gc2lnbmFsIGNvbXBvc2l0aW9uOyBpZiB0aGVcblx0XHRcdFx0Ly8gICBjb21wb3NpdGlvbiBpcyBub3QgY2FuY2VsZWQsIHRoZXJlJ2xsIGJlIGEgdGV4dElucHV0IGV2ZW50IGZvbGxvd2luZy4gRHVyaW5nIGEgY29tcG9zaXRpb24ga2V5IGV2ZW50cyBhcmVcblx0XHRcdFx0Ly8gICBlaXRoZXIgYWxsIHN1cHByZXNzZWQgKEZGL0dlY2tvKSwgb3Igb3RoZXJ3aXNlIGhhdmUga2V5RG93biA9PT0gSU1FIGZvciBhbGwga2V5cyAoV2Via2l0KS5cblx0XHRcdFx0Ly8gICAtIFdlYmtpdCBzZW5kcyBhIHRleHRJbnB1dCBmb2xsb3dlZCBieSBrZXlEb3duID09PSBJTUUgYW5kIGEga2V5VXAgd2l0aCB0aGUga2V5IHRoYXQgZW5kZWQgY29tcG9zaXRpb24uXG5cdFx0XHRcdC8vICAgLSBHZWNrbyBkb2Vzbid0IHNlbmQgdGV4dElucHV0IGJ1dCBqdXN0IGEga2V5VXAgd2l0aCB0aGUga2V5IHRoYXQgZW5kZWQgY29tcG9zaXRpb24sIHdpdGhvdXQgc2VuZGluZyBrZXlEb3duXG5cdFx0XHRcdC8vXHQgZmlyc3QuIEdlY2tvIGRvZXNuJ3Qgc2VuZCBhbnkga2V5ZG93biB3aGlsZSBJTUUgaXMgYWN0aXZlLlxuXHRcdFx0XHQvLyAtIE9sZGVyIGJyb3dzZXJzIHNpZ25hbCBjb21wb3NpdGlvbiBieSBrZXlEb3duID09PSBJTUUgZm9yIHRoZSBmaXJzdCBhbmQgc3Vic2VxdWVudCBrZXlzIGZvciBhIGNvbXBvc2l0aW9uLiBUaGVcblx0XHRcdFx0Ly8gICBmaXJzdCBrZXlEb3duICE9PSBJTUUgaXMgY2VydGFpbmx5IGFmdGVyIHRoZSBlbmQgb2YgdGhlIGNvbXBvc2l0aW9uLiBUeXBpY2FsbHksIGNvbXBvc2l0aW9uIGVuZCBjYW4gYWxzbyBiZVxuXHRcdFx0XHQvLyAgIGRldGVjdGVkIGJ5IGEga2V5RG93biBJTUUgd2l0aCBhIGtleVVwIG9mIHNwYWNlLCB0YWIsIGVzY2FwZSwgb3IgcmV0dXJuLlxuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5OiBzdHJpbmcgfCBudW1iZXIgPSBldmVudC5rZXkgfHwgMDtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRzZWxmLmltZSAmJlxuXHRcdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID09PSBJTUUgJiZcblx0XHRcdFx0XHRcdCFzZWxmLnVzZXNDb21wb3NpdGlvbiAmJlxuXHRcdFx0XHRcdFx0KGtleSA9PT0gVEFCIHx8IGtleSA9PT0gUkVUIHx8IGtleSA9PT0gRVNDIHx8IGtleSA9PT0gU1BBQ0UpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoc2VsZi5pbWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoa2V5ID09PSBVUCB8fCBrZXkgPT09IERPV04gfHwga2V5ID09PSBQR1VQIHx8IGtleSA9PT0gUEdET1dOKSB7XG5cdFx0XHRcdFx0XHQvLyBJbiBjYXNlIGEgYnJvd3NlciBkb2Vzbid0IGdlbmVyYXRlIGtleXByZXNzIGV2ZW50cyBmb3IgYXJyb3cga2V5cy4uLlxuXHRcdFx0XHRcdFx0aWYgKHNlbGYua2V5Q291bnQgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYucHJvY2Vzc0tleShldmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChrZXkgPT09IEVTQyAmJiBzZWxmLmxhc3RLZXkgIT09IElNRSAmJiAhc2VsZi5yZXNldEtleVNlbGVjdGlvbigpKSB7XG5cdFx0XHRcdFx0XHRcdC8vIE5vIHVuZG8gb2Yga2V5IHNlbGVjdGlvbjogdHJlYXQgRVNDIGFzIFwiY2FuY2VsXCIuXG5cdFx0XHRcdFx0XHRcdHNlbGYuY2FuY2VsKCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIEFsc28gZG8gdGhpcyBmb3IgRVNDIGFzIGEgd29ya2Fyb3VuZCBmb3IgRmlyZWZveCBidWcgNTI0MzYwXG5cdFx0XHRcdFx0XHQvLyB7QGxpbmsgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTI0MzYwfVxuXHRcdFx0XHRcdFx0aWYgKHNlbGYuaXNDb21wb3NpdGlvblN0YXJ0KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNlbGYuaW52b2tlU3VnZ2VzdGlvbnMoa2V5ID09PSBCUyB8fCBrZXkgPT09IERFTCB8fCBrZXkgPT09IEVTQyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5OiBzdHJpbmcgfCBudW1iZXIgPSBldmVudC5rZXkgfHwgMDtcblx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPSBrZXk7XG5cdFx0XHRcdFx0c2VsZi5rZXlDb3VudCA9IDA7XG5cdFx0XHRcdFx0Ly8gRE9NIExldmVsIDwgMyBJTUUgaW5wdXRcblx0XHRcdFx0XHRpZiAoIXNlbGYuaW1lICYmIGtleSA9PT0gSU1FICYmICFzZWxmLnVzZXNDb21wb3NpdGlvbikge1xuXHRcdFx0XHRcdFx0Ly8gc2VsZi51c2VzQ29tcG9zaXRpb24gY2F0Y2hlcyBicm93c2VycyB0aGF0IG1heSBlbWl0IHNwdXJpb3VzIGtleWRvd24gSU1FIGFmdGVyIGEgY29tcG9zaXRpb24gaGFzIGVuZGVkXG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdHNlbGYuaW1lICYmXG5cdFx0XHRcdFx0XHRrZXkgIT09IElNRSAmJlxuXHRcdFx0XHRcdFx0IShcblx0XHRcdFx0XHRcdFx0KE51bWJlcihrZXkpID49IDE2ICYmIE51bWJlcihrZXkpIDw9IDIwKSB8fFxuXHRcdFx0XHRcdFx0XHQoTnVtYmVyKGtleSkgPj0gOTEgJiYgTnVtYmVyKGtleSkgPD0gOTMpIHx8XG5cdFx0XHRcdFx0XHRcdGtleSA9PT0gMTQ0XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHQvLyBJZ25vcmUgY29udHJvbCBrZXlzOiBjdHJsLCBzaGlmdCwgYWx0LCBhbHQgZ3IsIGNhcHMgbG9jaywgd2luZG93cy9hcHBsZSBjbWQga2V5cywgbnVtIGxvY2suIE9ubHkgdGhlIHdpbmRvd3Mga2V5c1xuXHRcdFx0XHRcdFx0Ly8gdGVybWluYXRlIElNRSAoYXBwbGUgY21kIGRvZXNuJ3QpLCBidXQgdGhleSBhbHNvIGNhdXNlIGEgYmx1ciwgc28gaXQncyBPSyB0byBpZ25vcmUgdGhlbSBoZXJlLlxuXHRcdFx0XHRcdFx0Ly8gTm90ZTogU2FmYXJpIDQgKDUzMC4xNykgcHJvcGFnYXRlcyBFU0Mgb3V0IG9mIGFuIElNRSBjb21wb3NpdGlvbiAob2JzZXJ2ZWQgYXQgbGVhc3Qgb24gV2luIFhQKS5cblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChzZWxmLmltZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEhhbmRsZSByZXR1cm4gZXhwbGljaXRseSwgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIHRvIGJlIGFibGUgdG8gY2hlY2sgZm9yIGN0cmxcblx0XHRcdFx0XHRpZiAoa2V5ID09PSBSRVQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZWxmLmFjY2VwdChldmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEluaGliaXQgZGVmYXVsdCBiZWhhdmlvciBvZiBFU0MgKHJldmVydCB0byBsYXN0IHJlYWwgaW5wdXQgaW4gRkY6IHdlIGRvIHRoYXQgb3Vyc2VsdmVzKVxuXHRcdFx0XHRcdHJldHVybiBrZXkgPT09IEVTQyA/IGV2dEtpbGwoZXZlbnQpIDogdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIEFuZCBoYW5kbGUgY29udGludWVkIHByZXNzaW5nIG9mIGFycm93IGtleXNcblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYua2V5Q291bnQrKztcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi5wcm9jZXNzS2V5KGV2ZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG5cdFx0XHRcdFx0bWFrZUFjdGl2ZShzZWxmKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIERvbid0IHRlc3QgZm9yIHRleHQuc2VsZWN0aW9uU3RhcnQgYmVpbmcgZGVmaW5lZDtcblx0XHRcdFx0JCh0ZXh0KS5vbignYmx1cicsIHRoaXMuc2F2ZVZpZXcuYmluZCh0aGlzKSk7XG5cdFx0XHRcdC8vIERPTSBMZXZlbCAzIElNRSBoYW5kbGluZ1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFNldHRpbmcgbGFzdEtleSA9IElNRSBwcm92aWRlcyBhIGZha2Uga2V5RG93biBmb3IgR2Vja28ncyBzaW5nbGUga2V5VXAgYWZ0ZXIgYSBjbXBvc2l0aW9uLiBJZiB3ZSBkaWRuJ3QgZG8gdGhpcyxcblx0XHRcdFx0XHQvLyBjYW5jZWxsaW5nIGEgY29tcG9zaXRpb24gdmlhIEVTQyB3b3VsZCBhbHNvIGNhbmNlbCBhbmQgY2xvc2UgdGhlIHdob2xlIGNhdGVnb3J5IGlucHV0IGVkaXRvci5cblx0XHRcdFx0XHQkKHRleHQpLm9uKCdjb21wb3NpdGlvbnN0YXJ0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0gSU1FO1xuXHRcdFx0XHRcdFx0c2VsZi51c2VzQ29tcG9zaXRpb24gPSB0cnVlO1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0c2VsZi5pc0NvbXBvc2l0aW9uU3RhcnQgPSB0cnVlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQodGV4dCkub24oJ2NvbXBvc2l0aW9uZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0gSU1FO1xuXHRcdFx0XHRcdFx0c2VsZi51c2VzQ29tcG9zaXRpb24gPSB0cnVlO1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHNlbGYuaXNDb21wb3NpdGlvblN0YXJ0ID0gZmFsc2U7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JCh0ZXh0KS5vbigndGV4dElucHV0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdGlmIChzZWxmLmlzQ29tcG9zaXRpb25TdGFydCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZWxmLmludm9rZVN1Z2dlc3Rpb25zKGZhbHNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0Ly8gSnVzdCBpbiBjYXNlIHNvbWUgYnJvd3NlcnMgbWlnaHQgcHJvZHVjZSBleGNlcHRpb25zIHdpdGggdGhlc2UgRE9NIExldmVsIDMgZXZlbnRzXG5cdFx0XHRcdH1cblx0XHRcdFx0JCh0ZXh0KS5vbignYmx1cicsICgpID0+IHtcblx0XHRcdFx0XHRzZWxmLnVzZXNDb21wb3NpdGlvbiA9IGZhbHNlO1xuXHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50ZXh0ID0gdGV4dDtcblx0XHRcdHRoaXMuaWNvbiA9IG1ha2UoJ2ltZycpO1xuXHRcdFx0bGV0IGxpc3Q6IEhUTUxTZWxlY3RFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0bGlzdCA9IG1ha2UoJ3NlbGVjdCcpO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCkpIHtcblx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZShmYWxzZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKSkge1xuXHRcdFx0XHRcdFx0c2VsZi5hY2NlcHQoZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApO1xuXHRcdFx0XHRcdHNlbGYudGV4dCEuZm9jdXMoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBrZXk6IHN0cmluZyB8IG51bWJlciA9IGV2ZW50LmtleSB8fCAwO1xuXHRcdFx0XHRcdGlmIChrZXkgPT09IEVTQykge1xuXHRcdFx0XHRcdFx0c2VsZi5yZXNldEtleVNlbGVjdGlvbigpO1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0IS5mb2N1cygpO1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZSh0cnVlKTtcblx0XHRcdFx0XHRcdH0sIEhDLnN1Z2dlc3RfZGVsYXkpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoa2V5ID09PSBSRVQpIHtcblx0XHRcdFx0XHRcdHNlbGYuYWNjZXB0KGV2ZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAoIUhDLmZpeGVkX3NlYXJjaCkge1xuXHRcdFx0XHRcdGNvbnN0IGVuZ2luZVNlbGVjdG9yID0gbWFrZSgnc2VsZWN0Jyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gc3VnZ2VzdGlvbkNvbmZpZ3MpIHtcblx0XHRcdFx0XHRcdGlmIChzdWdnZXN0aW9uQ29uZmlnc1trZXldIS5zaG93KSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG9wdCA9IG1ha2UoJ29wdGlvbicpO1xuXHRcdFx0XHRcdFx0XHRvcHQudmFsdWUgPSBrZXk7XG5cdFx0XHRcdFx0XHRcdGlmIChrZXkgPT09IHRoaXMuZW5naW5lKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0LnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRvcHQuYXBwZW5kKG1ha2Uoc3VnZ2VzdGlvbkNvbmZpZ3Nba2V5XSEubmFtZSwgdHJ1ZSkpO1xuXHRcdFx0XHRcdFx0XHRlbmdpbmVTZWxlY3Rvci5hcHBlbmQob3B0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZW5naW5lU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5lbmdpbmUgPSBzZWxmLmVuZ2luZVNlbGVjdG9yIS5vcHRpb25zW3NlbGYuZW5naW5lU2VsZWN0b3IhLnNlbGVjdGVkSW5kZXhdIS52YWx1ZTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dCEuZm9jdXMoKTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZSh0cnVlLCB0cnVlKTsgLy8gRG9uJ3QgYXV0b2NvbXBsZXRlLCBmb3JjZSByZS1kaXNwbGF5IG9mIGxpc3Rcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yID0gZW5naW5lU2VsZWN0b3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdCA9IGxpc3Q7XG5cdFx0XHQvLyBEbyBub3QgdXNlIHR5cGUgJ3N1Ym1pdCc7IHdlIGNhbm5vdCBkZXRlY3QgbW9kaWZpZXIga2V5cyBpZiB3ZSBkb1xuXHRcdFx0Y29uc3QgT0sgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0T0sudHlwZSA9ICdidXR0b24nO1xuXHRcdFx0T0sudmFsdWUgPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy1vaycpO1xuXHRcdFx0T0suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFjY2VwdC5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMub2sgPSBPSztcblx0XHRcdGNvbnN0IGNhbmNlbCA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0XHRjYW5jZWwudHlwZSA9ICdidXR0b24nO1xuXHRcdFx0Y2FuY2VsLnZhbHVlID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2FuY2VsJyk7XG5cdFx0XHRjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMuY2FuY2VsQnV0dG9uID0gY2FuY2VsO1xuXHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ2hvdGNhdGlucHV0Jztcblx0XHRcdHNwYW4uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXHRcdFx0c3Bhbi5hcHBlbmQodGV4dCk7XG5cdFx0XHRzcGFuLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcblx0XHRcdGlmIChsaXN0KSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKGxpc3QpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5lbmdpbmVTZWxlY3Rvcik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5pY29uKTtcblx0XHRcdH1cblx0XHRcdHNwYW4uYXBwZW5kKE9LKTtcblx0XHRcdHNwYW4uYXBwZW5kKGNhbmNlbCk7XG5cdFx0XHRmb3JtLmFwcGVuZChzcGFuKTtcblx0XHRcdGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuc3Bhbi5hcHBlbmQoZm9ybSk7XG5cdFx0fVxuXHRcdGRpc3BsYXkoZXZlbnQ/OiBIb3RDYXRVSUV2ZW50KTogZmFsc2Uge1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSAmJiAhb25VcGxvYWQgJiYgdGhpcy5saW5lKSB7XG5cdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcih0aGlzLmxpbmUsIG51bGwsIHRoaXMuc3BhbiwgdHJ1ZSk7IC8vIENyZWF0ZSBhIG5ldyBvbmVcblx0XHRcdH1cblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghdGhpcy5mb3JtKSB7XG5cdFx0XHRcdHRoaXMubWFrZUZvcm0oKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLmxhc3RTYXZlZEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMubGFzdFNhdmVkSGlkZGVuO1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5sYXN0U2F2ZWRLZXk7XG5cdFx0XHR0aGlzLmljb24hLnNyYyA9IHRoaXMuY3VycmVudEV4aXN0cyA/IEhDLmV4aXN0c1llcyA6IEhDLmV4aXN0c05vO1xuXHRcdFx0dGhpcy50ZXh0IS52YWx1ZSA9IHRoaXMuY3VycmVudENhdGVnb3J5ICsgKHRoaXMuY3VycmVudEtleSA9PT0gbnVsbCA/ICcnIDogYHwke3RoaXMuY3VycmVudEtleX1gKTtcblx0XHRcdHRoaXMub3JpZ2luYWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRoaXMuY3VycmVudEV4aXN0cztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlID09PSBVTkNIQU5HRUQgPyBPUEVOIDogQ0hBTkdFX1BFTkRJTkc7XG5cdFx0XHR0aGlzLmxhc3RTZWxlY3Rpb24gPSB7XG5cdFx0XHRcdHN0YXJ0OiB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGgsXG5cdFx0XHRcdGVuZDogdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoLFxuXHRcdFx0fTtcblx0XHRcdHRoaXMuc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHQvLyBEaXNwbGF5IHRoZSBmb3JtXG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3Bhbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5mb3JtIS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cdFx0XHR0aGlzLm9rIS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0Ly8gS2lsbCB0aGUgZXZlbnQgYmVmb3JlIGZvY3VzaW5nLCBvdGhlcndpc2UgSUUgd2lsbCBraWxsIHRoZSBvbmZvY3VzIGV2ZW50IVxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZXZ0S2lsbChldmVudCk7XG5cdFx0XHR0aGlzLnRleHQhLmZvY3VzKCk7XG5cdFx0XHR0aGlzLnRleHQhLnJlYWRPbmx5ID0gZmFsc2U7XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHNob3coZXZlbnQ6IEhvdENhdFVJRXZlbnQgfCB1bmRlZmluZWQsIGVuZ2luZT86IHN0cmluZywgcmVhZE9ubHk/OiBib29sZWFuKTogZmFsc2Uge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5kaXNwbGF5KGV2ZW50KTtcblx0XHRcdGNvbnN0IHYgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRleHQhLnJlYWRPbmx5ID0gISFyZWFkT25seTtcblx0XHRcdHRoaXMuZW5naW5lID0gZW5naW5lID8/ICcnO1xuXHRcdFx0dGhpcy50ZXh0Y2hhbmdlKGZhbHNlLCB0cnVlKTsgLy8gZG8gYXV0b2NvbXBsZXRpb24sIGZvcmNlIGRpc3BsYXkgb2Ygc3VnZ2VzdGlvbnNcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdG9wZW4oZXZlbnQ/OiBIb3RDYXRVSUV2ZW50KTogZmFsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgdGhpcy5lbmdpbmUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdIS50ZW1wID8gSEMuc3VnZ2VzdGlvbnMgOiB0aGlzLmVuZ2luZSk7XG5cdFx0fVxuXHRcdGRvd24oZXZlbnQ/OiBIb3RDYXRVSUV2ZW50KTogZmFsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgJ3N1YmNhdCcsIHRydWUpO1xuXHRcdH1cblx0XHR1cChldmVudD86IEhvdENhdFVJRXZlbnQpOiBmYWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zaG93KGV2ZW50LCAncGFyZW50Y2F0Jyk7XG5cdFx0fVxuXHRcdGNhbmNlbCgpOiB2b2lkIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkgJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlRWRpdG9yKCk7IC8vIFdlIGFkZGVkIGEgbmV3IGFkZGVyIHdoZW4gb3BlbmluZ1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBDbG9zZSwgcmUtZGlzcGxheSBsaW5rXG5cdFx0XHR0aGlzLmluYWN0aXZhdGUoKTtcblx0XHRcdHRoaXMuZm9ybSEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMub3JpZ2luYWxTdGF0ZTtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMubGFzdFNhdmVkS2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLmxhc3RTYXZlZEhpZGRlbjtcblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5ICYmIHRoaXMuY3VycmVudEtleS5sZW5ndGggPiAwID8gdGhpcy5jdXJyZW50S2V5IDogJyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICghb25VcGxvYWQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmshLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHRyZW1vdmVFZGl0b3IoKTogdm9pZCB7XG5cdFx0XHRpZiAoIW5ld0RPTSkge1xuXHRcdFx0XHRjb25zdCBuZXh0ID0gdGhpcy5zcGFuLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRpZiAobmV4dCkge1xuXHRcdFx0XHRcdG5leHQucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnNwYW4gJiYgdGhpcy5zcGFuLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0dGhpcy5zcGFuLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0b3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChlZGl0b3JzW2ldID09PSB0aGlzKSB7XG5cdFx0XHRcdFx0ZWRpdG9ycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHRyb2xsYmFjayhldmVudD86IEhvdENhdFVJRXZlbnQpOiBmYWxzZSB7XG5cdFx0XHR0aGlzLnVuZG9MaW5rIS5yZW1vdmUoKTtcblx0XHRcdHRoaXMudW5kb0xpbmsgPSBudWxsO1xuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdGlmICghdGhpcy5jdXJyZW50Q2F0ZWdvcnkgfHwgdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdC8vIEl0IHdhcyBhIG5ld2x5IGFkZGVkIGNhdGVnb3J5LiBSZW1vdmUgdGhlIHdob2xlIGVkaXRvci5cblx0XHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFJlZGlzcGxheSB0aGUgbGluay4uLlxuXHRcdFx0XHR0aGlzLmNhdExpbmshLmZpcnN0Q2hpbGQhLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmshLmFwcGVuZChtYWtlKHRoaXMuY3VycmVudENhdGVnb3J5LCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMuY2F0TGluayEuaHJlZiA9IHdpa2lQYWdlUGF0aChgJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7dGhpcy5jdXJyZW50Q2F0ZWdvcnl9YCk7XG5cdFx0XHRcdHRoaXMuY2F0TGluayEudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXkgfHwgJyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluayEuY2xhc3NOYW1lID0gdGhpcy5jdXJyZW50RXhpc3RzID8gJycgOiAnbmV3Jztcblx0XHRcdFx0dGhpcy5jYXRMaW5rIS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXHRcdFx0XHRpZiAodGhpcy51cERvd25MaW5rcykge1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3Muc3R5bGUuZGlzcGxheSA9IHRoaXMuY3VycmVudEV4aXN0cyA/ICcnIDogJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHRpbmFjdGl2YXRlKCk6IHZvaWQge1xuXHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMuaXNfYWN0aXZlID0gZmFsc2U7XG5cdFx0fVxuXHRcdGFjY2VwdENoZWNrKGRvbnRDaGVjaz86IGJvb2xlYW4pOiBib29sZWFuIHtcblx0XHRcdHRoaXMuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnRleHQhLnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRsZXQga2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdGtleSA9IHZhbHVlWzFdITtcblx0XHRcdH1cblx0XHRcdGxldCB2ID0gdmFsdWVbMF0hLnJlcGxhY2UoL18vZywgJyAnKS50cmltKCk7XG5cdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcykge1xuXHRcdFx0XHR2ID0gY2FwaXRhbGl6ZSh2KTtcblx0XHRcdH1cblx0XHRcdHRoaXMubGFzdElucHV0ID0gdjtcblx0XHRcdHYgPSByZXBsYWNlU2hvcnRjdXRzKHYsIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHQhZG9udENoZWNrICYmXG5cdFx0XHRcdCgoY29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gMTQgJiYgdiA9PT0gY29uZi53Z1RpdGxlKSB8fCAoSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KHYpKSlcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHY7XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSBrZXk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLmlucHV0RXhpc3RzO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGFjY2VwdChldmVudD86IEhvdENhdFVJRXZlbnQpOiBmYWxzZSB7XG5cdFx0XHQvLyAoZXZ0S2V5cyhldmVudCkgJiAxKSAhPT0gMFxuXHRcdFx0Ly8g5b2T5LiU5LuF5b2TZXZ0S2V5cyhldmVudCnkuLox5pe277yM5pW05Liq5Yik5Yir5byP5omN5Li6dHJ1ZVxuXHRcdFx0dGhpcy5ub0NvbW1pdCA9IGV2dEtleXMoZXZlbnQpID09PSAxO1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZXZ0S2lsbChldmVudCk7XG5cdFx0XHRpZiAodGhpcy5hY2NlcHRDaGVjaygpKSB7XG5cdFx0XHRcdGNvbnN0IHRvUmVzb2x2ZSA9IFt0aGlzXTtcblx0XHRcdFx0cmVzb2x2ZU11bHRpKHRvUmVzb2x2ZSwgKHJlc29sdmVkKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgZWRpdG9yID0gcmVzb2x2ZWRbMF0hO1xuXHRcdFx0XHRcdGlmIChlZGl0b3IuZGFiKSB7XG5cdFx0XHRcdFx0XHRzaG93RGFiKGVkaXRvcik7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChlZGl0b3IuYWNjZXB0Q2hlY2sodHJ1ZSkpIHtcblx0XHRcdFx0XHRcdGVkaXRvci5jb21taXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0Y2xvc2UoKTogdm9pZCB7XG5cdFx0XHRpZiAoIXRoaXMuY2F0TGluaykge1xuXHRcdFx0XHQvLyBDcmVhdGUgYSBjYXRMaW5rXG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKCdmb28nLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLnNwYW4uaW5zZXJ0QmVmb3JlKHRoaXMuY2F0TGluaywgdGhpcy5zcGFuLmZpcnN0Q2hpbGQhLm5leHRTaWJsaW5nKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2F0TGluay5maXJzdENoaWxkIS5yZW1vdmUoKTtcblx0XHRcdHRoaXMuY2F0TGluay5hcHBlbmQobWFrZSh0aGlzLmN1cnJlbnRDYXRlZ29yeSwgdHJ1ZSkpO1xuXHRcdFx0dGhpcy5jYXRMaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3RoaXMuY3VycmVudENhdGVnb3J5fWApO1xuXHRcdFx0dGhpcy5jYXRMaW5rLmNsYXNzTmFtZSA9IHRoaXMuY3VycmVudEV4aXN0cyA/ICcnIDogJ25ldyc7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMuY3VycmVudEtleTtcblx0XHRcdHRoaXMubGFzdFNhdmVkRXhpc3RzID0gdGhpcy5jdXJyZW50RXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLmN1cnJlbnRIaWRkZW47XG5cdFx0XHQvLyBDbG9zZSBmb3JtIGFuZCByZWRpc3BsYXkgY2F0ZWdvcnlcblx0XHRcdHRoaXMuaW5hY3RpdmF0ZSgpO1xuXHRcdFx0dGhpcy5mb3JtIS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdFx0aWYgKG9uVXBsb2FkICYmIHRoaXMubGluZSkge1xuXHRcdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcih0aGlzLmxpbmUsIG51bGwsIHRoaXMuc3BhbiwgdHJ1ZSk7IC8vIENyZWF0ZSBhIG5ldyBvbmVcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5tYWtlTGlua1NwYW4oKTtcblx0XHRcdFx0dGhpcy5zcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdH1cblx0XHRcdGlmICghdGhpcy51bmRvTGluaykge1xuXHRcdFx0XHQvLyBBcHBlbmQgYW4gdW5kbyBsaW5rLlxuXHRcdFx0XHRjb25zdCBzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm9sbGJhY2suYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MudW5kbywgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtdW5kbycpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcyEuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHR0aGlzLnVuZG9MaW5rID0gc3Bhbjtcblx0XHRcdFx0aWYgKCFvblVwbG9hZCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy51cERvd25MaW5rcykge1xuXHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmxhc3RTYXZlZEV4aXN0cyA/ICcnIDogJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3Bhbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFRDtcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHRjb21taXQoKTogdm9pZCB7XG5cdFx0XHQvLyBDaGVjayBhZ2FpbiB0byBjYXRjaCBwcm9ibGVtIGNhc2VzIGFmdGVyIHJlZGlyZWN0IHJlc29sdXRpb25cblx0XHRcdGlmIChcblx0XHRcdFx0KHRoaXMuY3VycmVudENhdGVnb3J5ID09PSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgJiZcblx0XHRcdFx0XHQodGhpcy5jdXJyZW50S2V5ID09PSB0aGlzLm9yaWdpbmFsS2V5IHx8XG5cdFx0XHRcdFx0XHQodGhpcy5jdXJyZW50S2V5ID09PSBudWxsICYmIHRoaXMub3JpZ2luYWxLZXkhLmxlbmd0aCA9PT0gMCkpKSB8fFxuXHRcdFx0XHQoY29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gMTQgJiYgdGhpcy5jdXJyZW50Q2F0ZWdvcnkgPT09IGNvbmYud2dUaXRsZSkgfHxcblx0XHRcdFx0KEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh0aGlzLmN1cnJlbnRDYXRlZ29yeSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdFx0aWYgKCFjb21taXRCdXR0b24gJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUsIHNlbGYpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVtb3ZlKGV2ZW50PzogSG90Q2F0VUlFdmVudCk6IGZhbHNlIHtcblx0XHRcdC8vIChldnRLZXlzKGV2ZW50KSAmIDEpXG5cdFx0XHQvLyDlvZPkuJTku4XlvZNldnRLZXlzKGV2ZW50KeS4ujHml7bvvIzmlbTkuKrliKTliKvlvI/miY3kuLox77yM5ZCm5YiZ6YO95pivMFxuXHRcdFx0dGhpcy5kb1JlbW92ZShldnRLZXlzKGV2ZW50KSA9PT0gMSk7XG5cdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0fVxuXHRcdGRvUmVtb3ZlKG5vQ29tbWl0PzogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSkge1xuXHRcdFx0XHQvLyBFbXB0eSBpbnB1dCBvbiBhZGRpbmcgYSBuZXcgY2F0ZWdvcnlcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjb21taXRCdXR0b24gJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0XHRcdHNldE11bHRpSW5wdXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0XHR0aGlzLmNhdExpbmshLnRpdGxlID0gJyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluayEuc3R5bGUuY3NzVGV4dCArPSAnOyB0ZXh0LWRlY29yYXRpb24gOiBsaW5lLXRocm91Z2ggIWltcG9ydGFudDsnO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuY2F0TGluayEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm9yaWdpbmFsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gREVMRVRFRDtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcyEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0dGhpcy51bmRlbExpbmshLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKG9uVXBsb2FkKSB7XG5cdFx0XHRcdC8vIFJlbW92ZSB0aGlzIGVkaXRvciBjb21wbGV0ZWx5XG5cdFx0XHRcdHRoaXMucmVtb3ZlRWRpdG9yKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gREVMRVRFRDtcblx0XHRcdFx0dGhpcy5ub0NvbW1pdCA9ICEhbm9Db21taXQgfHwgSEMuZGVsX25lZWRzX2RpZmY7XG5cdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUsIHNlbGYpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5zdGF0ZSA9IHNlbGYub3JpZ2luYWxTdGF0ZTtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlc3RvcmUoZXZlbnQ/OiBIb3RDYXRVSUV2ZW50KTogZmFsc2Uge1xuXHRcdFx0Ly8gQ2FuIG9jY3VyIG9ubHkgaWYgd2UgZG8gaGF2ZSBhIGNvbW1pdCBidXR0b24gYW5kIGFyZSBub3Qgb24gdGhlIHVwbG9hZCBmb3JtXG5cdFx0XHR0aGlzLmNhdExpbmshLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0dGhpcy5jYXRMaW5rIS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICcnO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMub3JpZ2luYWxTdGF0ZTtcblx0XHRcdGlmICh0aGlzLnN0YXRlID09PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rIS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmshLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubm9ybWFsTGlua3MhLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdHRoaXMudW5kZWxMaW5rIS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0fVxuXHRcdC8vIEludGVybmFsIG9wZXJhdGlvbnNcblx0XHRzZWxlY3RFbmdpbmUoZW5naW5lTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHRpZiAoIXRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5vcHRpb25zW2ldIS5zZWxlY3RlZCA9IHRoaXMuZW5naW5lU2VsZWN0b3Iub3B0aW9uc1tpXSEudmFsdWUgPT09IGVuZ2luZU5hbWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNhbml0aXplSW5wdXQoKTogdm9pZCB7XG5cdFx0XHRsZXQgdiA9IHRoaXMudGV4dCEudmFsdWUgfHwgJyc7XG5cdFx0XHR2ID0gdi5yZXBsYWNlKC9eKFxcc3xfKSsvLCAnJyk7IC8vIFRyaW0gbGVhZGluZyBibGFua3MgYW5kIHVuZGVyc2NvcmVzXG5cdFx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoYF4oJHtIQy5jYXRlZ29yeV9yZWdleHB9KTpgKTtcblx0XHRcdGlmIChyZS50ZXN0KHYpKSB7XG5cdFx0XHRcdHYgPSB2LnNsaWNlKE1hdGgubWF4KDAsIHYuaW5kZXhPZignOicpICsgMSkpLnJlcGxhY2UoL14oXFxzfF8pKy8sICcnKTtcblx0XHRcdH1cblx0XHRcdHYgPSB2LnJlcGxhY2UoL1xcdTIwMEUkLywgJycpOyAvLyBUcmltIGVuZGluZyBsZWZ0LXRvLXJpZ2h0IG1hcmtcblx0XHRcdGlmIChIQy5jYXBpdGFsaXplUGFnZU5hbWVzKSB7XG5cdFx0XHRcdHYgPSBjYXBpdGFsaXplKHYpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gT25seSB1cGRhdGUgdGhlIGlucHV0IGZpZWxkIGlmIHRoZXJlIGlzIGEgZGlmZmVyZW5jZS4gVmFyaW91cyBicm93c2VycyBvdGhlcndpc2Vcblx0XHRcdC8vIHJlc2V0IHRoZSBzZWxlY3Rpb24gYW5kIGN1cnNvciBwb3NpdGlvbiBhZnRlciBlYWNoIHZhbHVlIHJlLWFzc2lnbm1lbnQuXG5cdFx0XHRpZiAodGhpcy50ZXh0IS52YWx1ZSAhPT0gbnVsbCAmJiB0aGlzLnRleHQhLnZhbHVlICE9PSB2KSB7XG5cdFx0XHRcdHRoaXMudGV4dCEudmFsdWUgPSB2O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRtYWtlQ2FsbChcblx0XHRcdHVybDogc3RyaW5nLFxuXHRcdFx0Y2FsbGJhY2tPYmo6IEhvdENhdFN1Z2dlc3Rpb25DYWxsYmFjayxcblx0XHRcdGVuZ2luZTogSG90Q2F0U3VnZ2VzdGlvbkVuZ2luZSxcblx0XHRcdHF1ZXJ5S2V5OiBzdHJpbmcsXG5cdFx0XHRjbGVhbktleTogc3RyaW5nXG5cdFx0KTogdm9pZCB7XG5cdFx0XHRsZXQgY2I6IEhvdENhdFN1Z2dlc3Rpb25DYWxsYmFjayB8IG51bGwgPSBjYWxsYmFja09iajtcblx0XHRcdGNvbnN0IGUgPSBlbmdpbmU7XG5cdFx0XHRjb25zdCB2ID0gcXVlcnlLZXk7XG5cdFx0XHRjb25zdCB6ID0gY2xlYW5LZXk7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGNvbnN0IGRvbmUgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdGNiIS5jYWxsc01hZGUrKztcblx0XHRcdFx0aWYgKGNiIS5jYWxsc01hZGUgPT09IGNiIS5ub2ZDYWxscykge1xuXHRcdFx0XHRcdGlmIChjYiEuZXhpc3RzKSB7XG5cdFx0XHRcdFx0XHRjYiEuYWxsVGl0bGVzIS5leGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2IhLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRcdGNiIS5hbGxUaXRsZXMhLm5vcm1hbGl6ZWQgPSBjYiEubm9ybWFsaXplZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc3Qgc3VnZ2VzdGlvbkNvbmZpZyA9IHN1Z2dlc3Rpb25Db25maWdzW2NiIS5lbmdpbmVOYW1lXSE7XG5cdFx0XHRcdFx0aWYgKCFjYiEuZG9udENhY2hlICYmICFzdWdnZXN0aW9uQ29uZmlnLmNhY2hlW3pdKSB7XG5cdFx0XHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnLmNhY2hlW3pdID0gY2IhLmFsbFRpdGxlcyE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNlbGYudGV4dCEucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAoIWNiIS5jYW5jZWxsZWQpIHtcblx0XHRcdFx0XHRcdHNlbGYuc2hvd1N1Z2dlc3Rpb25zKGNiIS5hbGxUaXRsZXMsIGNiIS5ub0NvbXBsZXRpb24sIHYsIGNiIS5lbmdpbmVOYW1lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNiID09PSBzZWxmLmNhbGxiYWNrT2JqKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmNhbGxiYWNrT2JqID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2IgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0JC5nZXRKU09OKHVybCwgKGpzb24pID0+IHtcblx0XHRcdFx0Y29uc3QgdGl0bGVzID0gZS5oYW5kbGVyKGpzb24sIHopO1xuXHRcdFx0XHRpZiAodGl0bGVzICYmIHRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y2IhLmFsbFRpdGxlcyA9IGNiIS5hbGxUaXRsZXMgPT09IG51bGwgPyB0aXRsZXMgOiBbLi4uY2IhLmFsbFRpdGxlcywgLi4uZ2VuZXJhdGVBcnJheSh0aXRsZXMpXTtcblx0XHRcdFx0XHRpZiAodGl0bGVzLmV4aXN0cykge1xuXHRcdFx0XHRcdFx0Y2IhLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aXRsZXMubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdFx0Y2IhLm5vcm1hbGl6ZWQgPSB0aXRsZXMubm9ybWFsaXplZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZG9uZSgpO1xuXHRcdFx0fSkuZmFpbCgocmVxKSA9PiB7XG5cdFx0XHRcdGlmICghcmVxKSB7XG5cdFx0XHRcdFx0bm9TdWdnZXN0aW9ucyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2IhLmRvbnRDYWNoZSA9IHRydWU7XG5cdFx0XHRcdGRvbmUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR0ZXh0Y2hhbmdlKGRvbnRfYXV0b2NvbXBsZXRlPzogYm9vbGVhbiwgZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHQvLyBIaWRlIGFsbCBvdGhlciBsaXN0c1xuXHRcdFx0bWFrZUFjdGl2ZSh0aGlzKTtcblx0XHRcdC8vIEFib3J0IGlmIGlzQ29tcG9zaXRpb25TdGFydFxuXHRcdFx0aWYgKHRoaXMuaXNDb21wb3NpdGlvblN0YXJ0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIEdldCBpbnB1dCB2YWx1ZSwgb21pdCBzb3J0IGtleSwgaWYgYW55XG5cdFx0XHR0aGlzLnNhbml0aXplSW5wdXQoKTtcblx0XHRcdGxldCB2ID0gdGhpcy50ZXh0IS52YWx1ZTtcblx0XHRcdC8vIERpc3JlZ2FyZCBhbnl0aGluZyBhZnRlciBhIHBpcGUuXG5cdFx0XHRjb25zdCBwaXBlID0gdi5pbmRleE9mKCd8Jyk7XG5cdFx0XHRpZiAocGlwZSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gbnVsbDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudEtleSA9IHYuc2xpY2UoTWF0aC5tYXgoMCwgcGlwZSArIDEpKTtcblx0XHRcdFx0diA9IHYuc2xpY2UoMCwgTWF0aC5tYXgoMCwgcGlwZSkpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMubGFzdElucHV0ID09PSB2ICYmICFmb3JjZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9IC8vIE5vIGNoYW5nZVxuXHRcdFx0aWYgKHRoaXMubGFzdElucHV0ICE9PSB2KSB7XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB2O1xuXHRcdFx0dGhpcy5sYXN0UmVhbElucHV0ID0gdjtcblx0XHRcdC8vIE1hcmsgYmxhY2tsaXN0ZWQgaW5wdXRzLlxuXHRcdFx0dGhpcy5vayEuZGlzYWJsZWQgPSB2Lmxlbmd0aCA+IDAgJiYgISFIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3Qodik7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHQvLyBObyBBamF4OiBqdXN0IG1ha2Ugc3VyZSB0aGUgbGlzdCBpcyBoaWRkZW5cblx0XHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHR0aGlzLmljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoW10pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgY2xlYW5LZXkgPSB2LnJlcGxhY2UoL1tcXHUyMDBFXFx1MjAwRlxcdTIwMkEtXFx1MjAyRV0vZywgJycpLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCAnICcpO1xuXHRcdFx0Y2xlYW5LZXkgPSByZXBsYWNlU2hvcnRjdXRzKGNsZWFuS2V5LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0Y2xlYW5LZXkgPSBjbGVhbktleS50cmltKCk7XG5cdFx0XHRpZiAoY2xlYW5LZXkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1N1Z2dlc3Rpb25zKFtdKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuY2FsbGJhY2tPYmopIHtcblx0XHRcdFx0dGhpcy5jYWxsYmFja09iai5jYW5jZWxsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZW5naW5lTmFtZSA9IHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXSA/IHRoaXMuZW5naW5lIDogJ2NvbWJpbmVkJztcblx0XHRcdGRvbnRfYXV0b2NvbXBsZXRlIHx8PSBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSEubm9Db21wbGV0aW9uO1xuXHRcdFx0Y29uc3QgY2FjaGVkVGl0bGVzID0gc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0hLmNhY2hlW2NsZWFuS2V5XTtcblx0XHRcdGlmIChjYWNoZWRUaXRsZXMpIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoY2FjaGVkVGl0bGVzLCBkb250X2F1dG9jb21wbGV0ZSwgdiwgZW5naW5lTmFtZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHtlbmdpbmVzfSA9IHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdITtcblx0XHRcdHRoaXMuY2FsbGJhY2tPYmogPSB7XG5cdFx0XHRcdGFsbFRpdGxlczogbnVsbCxcblx0XHRcdFx0Y2FsbHNNYWRlOiAwLFxuXHRcdFx0XHRub2ZDYWxsczogZW5naW5lcy5sZW5ndGgsXG5cdFx0XHRcdG5vQ29tcGxldGlvbjogZG9udF9hdXRvY29tcGxldGUsXG5cdFx0XHRcdGVuZ2luZU5hbWUsXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5tYWtlQ2FsbHMoZW5naW5lcywgdGhpcy5jYWxsYmFja09iaiwgdiwgY2xlYW5LZXkpO1xuXHRcdH1cblx0XHRtYWtlQ2FsbHMoZW5naW5lczogc3RyaW5nW10sIGNiOiBIb3RDYXRTdWdnZXN0aW9uQ2FsbGJhY2ssIHY6IHN0cmluZywgY2xlYW5LZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0Zm9yIChjb25zdCBlbmdpbmVfIG9mIGVuZ2luZXMpIHtcblx0XHRcdFx0Y29uc3QgZW5naW5lID0gc3VnZ2VzdGlvbkVuZ2luZXNbZW5naW5lX10hO1xuXHRcdFx0XHRjb25zdCB1cmwgPSBjb25mLndnU2NyaXB0UGF0aCArIGVuZ2luZS51cmkucmVwbGFjZSgvXFwkMS9nLCBlbmNvZGVVUklDb21wb25lbnQoY2xlYW5LZXkpKTtcblx0XHRcdFx0dGhpcy5tYWtlQ2FsbCh1cmwsIGNiLCBlbmdpbmUsIHYsIGNsZWFuS2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c2hvd1N1Z2dlc3Rpb25zKFxuXHRcdFx0dGl0bGVzOiBIb3RDYXRTdWdnZXN0aW9uVGl0bGVzIHwgbnVsbCxcblx0XHRcdGRvbnRBdXRvY29tcGxldGU/OiBib29sZWFuLFxuXHRcdFx0cXVlcnlLZXk/OiBzdHJpbmcgfCBudWxsLFxuXHRcdFx0ZW5naW5lTmFtZT86IHN0cmluZyB8IG51bGxcblx0XHQpOiB2b2lkIHtcblx0XHRcdHRoaXMudGV4dCEucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdHRoaXMuZGFiID0gbnVsbDtcblx0XHRcdHRoaXMuc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHRpZiAoIXRoaXMubGlzdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBEZWZhdWx0Li4uXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuZW5naW5lTmFtZSA9IGVuZ2luZU5hbWUgPz8gbnVsbDtcblx0XHRcdGlmIChlbmdpbmVOYW1lKSB7XG5cdFx0XHRcdGlmICghdGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lTmFtZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5sYXN0SW5wdXQ7XG5cdFx0XHRpZiAocXVlcnlLZXkpIHtcblx0XHRcdFx0aWYgKGlucHV0VmFsdWUuaW5kZXhPZihxdWVyeUtleSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHRoaXMubGFzdFF1ZXJ5ICYmXG5cdFx0XHRcdFx0aW5wdXRWYWx1ZS5pbmRleE9mKHRoaXMubGFzdFF1ZXJ5KSA9PT0gMCAmJlxuXHRcdFx0XHRcdHRoaXMubGFzdFF1ZXJ5Lmxlbmd0aCA+IHF1ZXJ5S2V5Lmxlbmd0aFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGFzdFF1ZXJ5ID0gcXVlcnlLZXk7XG5cdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRjb25zdCB2ID0gdGhpcy50ZXh0IS52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0Y29uc3QgY2F0ZWdvcnlOYW1lID0gSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA/IGNhcGl0YWxpemUodlswXSkgOiB2WzBdITtcblx0XHRcdGxldCB2Tm9ybWFsaXplZCA9IGNhdGVnb3J5TmFtZTtcblx0XHRcdGNvbnN0IGtub3duVG9FeGlzdCA9IHRpdGxlcyAmJiB0aXRsZXMuZXhpc3RzO1xuXHRcdFx0bGV0IGk6IG51bWJlcjtcblx0XHRcdGlmICh0aXRsZXMpIHtcblx0XHRcdFx0aWYgKHRpdGxlcy5ub3JtYWxpemVkICYmIGNhdGVnb3J5TmFtZS5pbmRleE9mKHF1ZXJ5S2V5ID8/ICcnKSA9PT0gMCkge1xuXHRcdFx0XHRcdC8vIFdlIGdvdCBiYWNrIGEgZGlmZmVyZW50IG5vcm1hbGl6YXRpb24gdGhhbiB3aGF0IGlzIGluIHRoZSBpbnB1dCBmaWVsZFxuXHRcdFx0XHRcdHZOb3JtYWxpemVkID0gdGl0bGVzLm5vcm1hbGl6ZWQgKyBjYXRlZ29yeU5hbWUuc2xpY2UoKHF1ZXJ5S2V5ID8/ICcnKS5sZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHZMb3cgPSB2Tm9ybWFsaXplZC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHQvLyBTdHJpcCBibGFja2xpc3RlZCBjYXRlZ29yaWVzXG5cdFx0XHRcdGlmIChIQy5ibGFja2xpc3QpIHtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZiAoSEMuYmxhY2tsaXN0LnRlc3QodGl0bGVzW2ldISkpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aXRsZXMuc29ydCgoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHRpZiAoYSA9PT0gYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhLmluZGV4T2YoYikgPT09IDApIHtcblx0XHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBhIGJlZ2lucyB3aXRoIGI6IGEgPiBiXG5cdFx0XHRcdFx0aWYgKGIuaW5kZXhPZihhKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBiIGJlZ2lucyB3aXRoIGE6IGEgPCBiXG5cdFx0XHRcdFx0Ly8gT3BlbnNlYXJjaCBtYXkgcmV0dXJuIHN0dWZmIG5vdCBiZWdpbm5pbmcgd2l0aCB0aGUgc2VhcmNoIHByZWZpeCFcblx0XHRcdFx0XHRsZXQgcHJlZml4TWF0Y2hBID0gYS5pbmRleE9mKHZOb3JtYWxpemVkKSA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0XHRcdGxldCBwcmVmaXhNYXRjaEIgPSBiLmluZGV4T2Yodk5vcm1hbGl6ZWQpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0aWYgKHByZWZpeE1hdGNoQSAhPT0gcHJlZml4TWF0Y2hCKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJlZml4TWF0Y2hCIC0gcHJlZml4TWF0Y2hBO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBDYXNlLWluc2Vuc2l0aXZlIHByZWZpeCBtYXRjaCFcblx0XHRcdFx0XHRjb25zdCBhTG93ID0gYS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdGNvbnN0IGJMb3cgPSBiLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0cHJlZml4TWF0Y2hBID0gYUxvdy5pbmRleE9mKHZMb3cpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0cHJlZml4TWF0Y2hCID0gYkxvdy5pbmRleE9mKHZMb3cpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0aWYgKHByZWZpeE1hdGNoQSAhPT0gcHJlZml4TWF0Y2hCKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJlZml4TWF0Y2hCIC0gcHJlZml4TWF0Y2hBO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYSA8IGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGIgPCBhKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBSZW1vdmUgZHVwbGljYXRlcyBhbmQgc2VsZi1yZWZlcmVuY2VzXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHQoaSArIDEgPCB0aXRsZXMubGVuZ3RoICYmIHRpdGxlc1tpXSA9PT0gdGl0bGVzW2kgKyAxXSkgfHxcblx0XHRcdFx0XHRcdChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAxNCAmJiB0aXRsZXNbaV0gPT09IGNvbmYud2dUaXRsZSlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRpdGxlcyB8fCB0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZW5naW5lTmFtZSAmJiBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSAmJiAhc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0hLnRlbXApIHtcblx0XHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmljb24uc3JjID0gSEMuZXhpc3RzTm87XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbZmlyc3RUaXRsZV0gPSB0aXRsZXM7XG5cdFx0XHRjb25zdCBjb21wbGV0ZWQgPSB0aGlzLmF1dG9Db21wbGV0ZShmaXJzdFRpdGxlISwgY2F0ZWdvcnlOYW1lLCB2Tm9ybWFsaXplZCwga2V5LCBkb250QXV0b2NvbXBsZXRlKTtcblx0XHRcdGNvbnN0IGV4aXN0aW5nID0gY29tcGxldGVkIHx8IGtub3duVG9FeGlzdCB8fCBmaXJzdFRpdGxlID09PSByZXBsYWNlU2hvcnRjdXRzKGNhdGVnb3J5TmFtZSwgSEMuc2hvcnRjdXRzKTtcblx0XHRcdGlmIChlbmdpbmVOYW1lICYmIHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdICYmICFzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSEudGVtcCkge1xuXHRcdFx0XHR0aGlzLmljb24hLnNyYyA9IGV4aXN0aW5nID8gSEMuZXhpc3RzWWVzIDogSEMuZXhpc3RzTm87XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSAhIWV4aXN0aW5nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNvbXBsZXRlZCkge1xuXHRcdFx0XHR0aGlzLmxhc3RJbnB1dCA9IGZpcnN0VGl0bGUhO1xuXHRcdFx0XHRpZiAodGl0bGVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gKFJlLSlmaWxsIHRoZSBsaXN0XG5cdFx0XHR3aGlsZSAodGhpcy5saXN0LmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0dGhpcy5saXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG9wdCA9IG1ha2UoJ29wdGlvbicpO1xuXHRcdFx0XHRvcHQuYXBwZW5kKG1ha2UodGl0bGVzW2ldISwgdHJ1ZSkpO1xuXHRcdFx0XHRvcHQuc2VsZWN0ZWQgPSBjb21wbGV0ZWQgJiYgaSA9PT0gMDtcblx0XHRcdFx0dGhpcy5saXN0LmFwcGVuZChvcHQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kaXNwbGF5TGlzdCgpO1xuXHRcdH1cblx0XHRkaXNwbGF5TGlzdCgpOiB2b2lkIHtcblx0XHRcdHRoaXMuc2hvd3NMaXN0ID0gdHJ1ZTtcblx0XHRcdGlmICghdGhpcy5pc19hY3RpdmUpIHtcblx0XHRcdFx0dGhpcy5saXN0IS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgbm9mSXRlbXMgPSBNYXRoLm1pbih0aGlzLmxpc3QhLm9wdGlvbnMubGVuZ3RoLCBIQy5saXN0U2l6ZSk7XG5cdFx0XHRpZiAobm9mSXRlbXMgPD0gMSkge1xuXHRcdFx0XHRub2ZJdGVtcyA9IDI7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3QhLnNpemUgPSBub2ZJdGVtcztcblx0XHRcdHNldFN0eWxlUHJvcGVydHkodGhpcy5saXN0ISwgJ2FsaWduJywgaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jyk7XG5cdFx0XHR0aGlzLmxpc3QhLnN0eWxlLnpJbmRleCA9ICc1Jztcblx0XHRcdHRoaXMubGlzdCEuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0Ly8gQ29tcHV0ZSBpbml0aWFsIGxpc3QgcG9zaXRpb24uIEZpcnN0IHRoZSBoZWlnaHQuXG5cdFx0XHRjb25zdCBhbmNob3IgPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdFx0bGV0IGxpc3RoID0gMDtcblx0XHRcdGlmICh0aGlzLmxpc3QhLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHQvLyBPZmYtc2NyZWVuIGRpc3BsYXkgdG8gZ2V0IHRoZSBoZWlnaHRcblx0XHRcdFx0dGhpcy5saXN0IS5zdHlsZS50b3AgPSBgJHt0aGlzLnRleHQhLm9mZnNldFRvcH1weGA7XG5cdFx0XHRcdHRoaXMubGlzdCEuc3R5bGVbYW5jaG9yXSA9ICctMTAwMDBweCc7XG5cdFx0XHRcdHRoaXMubGlzdCEuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0XHRsaXN0aCA9IHRoaXMubGlzdCEub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR0aGlzLmxpc3QhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsaXN0aCA9IHRoaXMubGlzdCEub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0fVxuXHRcdFx0Ly8gQXBwcm94aW1hdGUgY2FsY3VsYXRpb24gb2YgbWF4aW11bSBsaXN0IHNpemVcblx0XHRcdGxldCBtYXhMaXN0SGVpZ2h0ID0gbGlzdGg7XG5cdFx0XHRpZiAobm9mSXRlbXMgPCBIQy5saXN0U2l6ZSkge1xuXHRcdFx0XHRtYXhMaXN0SGVpZ2h0ID0gKGxpc3RoIC8gbm9mSXRlbXMpICogSEMubGlzdFNpemU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB2aWV3cG9ydCA9ICh3aGF0OiAnV2lkdGgnIHwgJ0hlaWdodCcpOiBudW1iZXIgPT4ge1xuXHRcdFx0XHRjb25zdCBzID0gYGNsaWVudCR7d2hhdH1gIGFzICdjbGllbnRXaWR0aCcgfCAnY2xpZW50SGVpZ2h0Jztcblx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtzXSA6IDA7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3Qgc2Nyb2xsX29mZnNldCA9ICh3aGF0OiAnTGVmdCcgfCAnVG9wJyB8ICdXaWR0aCcpOiBudW1iZXIgPT4ge1xuXHRcdFx0XHRjb25zdCBzID0gYHNjcm9sbCR7d2hhdH1gIGFzICdzY3JvbGxMZWZ0JyB8ICdzY3JvbGxUb3AnIHwgJ3Njcm9sbFdpZHRoJztcblx0XHRcdFx0bGV0IHJlc3VsdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtzXSA6IDA7XG5cdFx0XHRcdGlmIChpc19ydGwgJiYgd2hhdCA9PT0gJ0xlZnQnKSB7XG5cdFx0XHRcdFx0Ly8gUlRMIGluY29uc2lzdGVuY2llcy5cblx0XHRcdFx0XHQvLyBGRjogMCBhdCB0aGUgZmFyIHJpZ2h0LCB0aGVuIGluY3JlYXNpbmdseSBuZWdhdGl2ZSB2YWx1ZXMuXG5cdFx0XHRcdFx0Ly8gSUUgPj0gODogMCBhdCB0aGUgZmFyIHJpZ2h0LCB0aGVuIGluY3JlYXNpbmdseSBwb3NpdGl2ZSB2YWx1ZXMuXG5cdFx0XHRcdFx0Ly8gV2Via2l0OiBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gZG93biB0byB6ZXJvLlxuXHRcdFx0XHRcdC8vIE9wZXJhOiBkb24ndCBrbm93Li4uXG5cdFx0XHRcdFx0aWYgKHJlc3VsdCA8IDApIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IC1yZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghaXNfd2Via2l0KSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBzY3JvbGxfb2Zmc2V0KCdXaWR0aCcpIC0gdmlld3BvcnQoJ1dpZHRoJykgLSByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIE5vdyBhbGwgaGF2ZSB3ZWJraXQgYmVoYXZpb3IsIGkuZS4gemVybyBpZiBhdCB0aGUgbGVmdG1vc3QgZWRnZS5cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gKG5vZGU6IEhUTUxFbGVtZW50KToge3g6IG51bWJlcjsgeTogbnVtYmVyfSA9PiB7XG5cdFx0XHRcdC8vIFN0cmlwcGVkLWRvd24gc2ltcGxpZmllZCBwb3NpdGlvbiBmdW5jdGlvbi4gSXQncyBnb29kIGVub3VnaCBmb3Igb3VyIHB1cnBvc2VzLlxuXHRcdFx0XHRjb25zdCBib3ggPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHg6IE1hdGgucm91bmQoYm94LmxlZnQgKyBzY3JvbGxfb2Zmc2V0KCdMZWZ0JykpLFxuXHRcdFx0XHRcdHk6IE1hdGgucm91bmQoYm94LnRvcCArIHNjcm9sbF9vZmZzZXQoJ1RvcCcpKSxcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCB0ZXh0UG9zID0gcG9zaXRpb24odGhpcy50ZXh0ISk7XG5cdFx0XHRjb25zdCBubCA9IDA7XG5cdFx0XHRsZXQgbnQgPSAwO1xuXHRcdFx0Ly8gT3BlcmEgOS41IHNvbWVob3cgaGFzIG9mZnNldFdpZHRoID0gMCBoZXJlPz8gVXNlIHRoZSBuZXh0IGJlc3QgdmFsdWUuLi5cblx0XHRcdGxldCBvZmZzZXQgPSAwO1xuXHRcdFx0Y29uc3QgdGV4dEJveFdpZHRoID0gdGhpcy50ZXh0IS5vZmZzZXRXaWR0aCB8fCB0aGlzLnRleHQhLmNsaWVudFdpZHRoO1xuXHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS56SW5kZXggPSAnNSc7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3RvciEuc3R5bGUud2lkdGggPSBgJHt0ZXh0Qm94V2lkdGh9cHhgO1xuXHRcdFx0XHQvLyBGaWd1cmUgb3V0IHRoZSBoZWlnaHQgb2YgdGhpcyBzZWxlY3RvcjogZGlzcGxheSBpdCBvZmYtc2NyZWVuLCB0aGVuIGhpZGUgaXQgYWdhaW4uXG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZVthbmNob3JdID0gJy0xMDAwMHB4Jztcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS50b3AgPSAnMCc7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3RvciEuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0XHRcdG9mZnNldCA9IHRoaXMuZW5naW5lU2VsZWN0b3IhLm9mZnNldEhlaWdodDtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG9mZnNldCA9IHRoaXMuZW5naW5lU2VsZWN0b3IhLm9mZnNldEhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZVthbmNob3JdID0gYCR7bmx9cHhgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRleHRQb3MueSA8IG1heExpc3RIZWlnaHQgKyBvZmZzZXQgKyAxKSB7XG5cdFx0XHRcdC8vIFRoZSBsaXN0IG1pZ2h0IGV4dGVuZCBiZXlvbmQgdGhlIHVwcGVyIGJvcmRlciBvZiB0aGUgcGFnZS4gTGV0J3MgYXZvaWQgdGhhdCBieSBwbGFjaW5nIGl0XG5cdFx0XHRcdC8vIGJlbG93IHRoZSBpbnB1dCB0ZXh0IGZpZWxkLlxuXHRcdFx0XHRudCA9IHRoaXMudGV4dCEub2Zmc2V0SGVpZ2h0ICsgb2Zmc2V0ICsgMTtcblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlLnRvcCA9IGAke3RoaXMudGV4dCEub2Zmc2V0SGVpZ2h0fXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bnQgPSAtbGlzdGggLSBvZmZzZXQgLSAxO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3RvciEuc3R5bGUudG9wID0gYCR7LShvZmZzZXQgKyAxKX1weGA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdCEuc3R5bGUudG9wID0gYCR7bnR9cHhgO1xuXHRcdFx0dGhpcy5saXN0IS5zdHlsZS53aWR0aCA9ICcnOyAvLyBObyBmaXhlZCB3aWR0aCAoeWV0KVxuXHRcdFx0dGhpcy5saXN0IS5zdHlsZVthbmNob3JdID0gYCR7bmx9cHhgO1xuXHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdEVuZ2luZSh0aGlzLmVuZ2luZU5hbWUpO1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3QhLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0Ly8gU2V0IHRoZSB3aWR0aCBvZiB0aGUgbGlzdFxuXHRcdFx0aWYgKHRoaXMubGlzdCEub2Zmc2V0V2lkdGggPCB0ZXh0Qm94V2lkdGgpIHtcblx0XHRcdFx0dGhpcy5saXN0IS5zdHlsZS53aWR0aCA9IGAke3RleHRCb3hXaWR0aH1weGA7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIElmIHRoZSBsaXN0IGlzIHdpZGVyIHRoYW4gdGhlIHRleHRib3g6IG1ha2Ugc3VyZSBpdCBmaXRzIGhvcml6b250YWxseSBpbnRvIHRoZSBicm93c2VyIHdpbmRvd1xuXHRcdFx0Y29uc3Qgc2Nyb2xsID0gc2Nyb2xsX29mZnNldCgnTGVmdCcpO1xuXHRcdFx0Y29uc3Qgdmlld193ID0gdmlld3BvcnQoJ1dpZHRoJyk7XG5cdFx0XHRsZXQgdyA9IHRoaXMubGlzdCEub2Zmc2V0V2lkdGg7XG5cdFx0XHRjb25zdCBsX3BvcyA9IHBvc2l0aW9uKHRoaXMubGlzdCEpO1xuXHRcdFx0bGV0IGxlZnQgPSBsX3Bvcy54O1xuXHRcdFx0bGV0IHJpZ2h0ID0gbGVmdCArIHc7XG5cdFx0XHRpZiAobGVmdCA8IHNjcm9sbCB8fCByaWdodCA+IHNjcm9sbCArIHZpZXdfdykge1xuXHRcdFx0XHRpZiAodyA+IHZpZXdfdykge1xuXHRcdFx0XHRcdHcgPSB2aWV3X3c7XG5cdFx0XHRcdFx0dGhpcy5saXN0IS5zdHlsZS53aWR0aCA9IGAke3d9cHhgO1xuXHRcdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRcdGxlZnQgPSByaWdodCAtIHc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJpZ2h0ID0gbGVmdCArIHc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCByZWxhdGl2ZV9vZmZzZXQgPSAwO1xuXHRcdFx0XHRpZiAobGVmdCA8IHNjcm9sbCkge1xuXHRcdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IHNjcm9sbCAtIGxlZnQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAocmlnaHQgPiBzY3JvbGwgKyB2aWV3X3cpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSAtKHJpZ2h0IC0gc2Nyb2xsIC0gdmlld193KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVfb2Zmc2V0ID0gLXJlbGF0aXZlX29mZnNldDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVsYXRpdmVfb2Zmc2V0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0IS5zdHlsZVthbmNob3JdID0gYCR7bmwgKyByZWxhdGl2ZV9vZmZzZXR9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGF1dG9Db21wbGV0ZShcblx0XHRcdG5ld1ZhbDogc3RyaW5nLFxuXHRcdFx0YWN0VmFsOiBzdHJpbmcsXG5cdFx0XHRub3JtYWxpemVkQWN0VmFsOiBzdHJpbmcgfCBudWxsLFxuXHRcdFx0a2V5OiBzdHJpbmcsXG5cdFx0XHRkb250TW9kaWZ5PzogYm9vbGVhblxuXHRcdCk6IGJvb2xlYW4ge1xuXHRcdFx0aWYgKG5ld1ZhbCA9PT0gYWN0VmFsKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvbnRNb2RpZnkgfHwgdGhpcy5pbWUgfHwgIXRoaXMuY2FuU2VsZWN0KCkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgd2UgY2FuJ3Qgc2VsZWN0IHByb3Blcmx5IG9yIGFuIElNRSBjb21wb3NpdGlvbiBpcyBvbmdvaW5nLCBhdXRvY29tcGxldGlvbiB3b3VsZCBiZSBhIG1ham9yIGFubm95YW5jZSB0byB0aGUgdXNlci5cblx0XHRcdGlmIChuZXdWYWwuaW5kZXhPZihhY3RWYWwpKSB7XG5cdFx0XHRcdC8vIE1heWJlIGl0J2xsIHdvcmsgd2l0aCB0aGUgbm9ybWFsaXplZCB2YWx1ZSAoTkZDKT9cblx0XHRcdFx0aWYgKG5vcm1hbGl6ZWRBY3RWYWwgJiYgbmV3VmFsLmluZGV4T2Yobm9ybWFsaXplZEFjdFZhbCkgPT09IDApIHtcblx0XHRcdFx0XHRpZiAodGhpcy5sYXN0UmVhbElucHV0ID09PSBhY3RWYWwpIHtcblx0XHRcdFx0XHRcdHRoaXMubGFzdFJlYWxJbnB1dCA9IG5vcm1hbGl6ZWRBY3RWYWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjdFZhbCA9IG5vcm1hbGl6ZWRBY3RWYWw7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBBY3R1YWwgaW5wdXQgaXMgYSBwcmVmaXggb2YgdGhlIG5ldyB0ZXh0LiBGaWxsIGluIG5ldyB0ZXh0LCBzZWxlY3RpbmcgdGhlIG5ld2x5IGFkZGVkIHN1ZmZpeFxuXHRcdFx0Ly8gc3VjaCB0aGF0IGl0IGNhbiBiZSBlYXNpbHkgcmVtb3ZlZCBieSB0eXBpbmcgYmFja3NwYWNlIGlmIHRoZSBzdWdnZXN0aW9uIGlzIHVud2FudGVkLlxuXHRcdFx0dGhpcy50ZXh0IS5mb2N1cygpO1xuXHRcdFx0dGhpcy50ZXh0IS52YWx1ZSA9IG5ld1ZhbCArIGtleTtcblx0XHRcdHRoaXMuc2V0U2VsZWN0aW9uKGFjdFZhbC5sZW5ndGgsIG5ld1ZhbC5sZW5ndGgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGNhblNlbGVjdCgpOiBib29sZWFuIHtcblx0XHRcdHJldHVybiAhIXRoaXMudGV4dCEuc2V0U2VsZWN0aW9uUmFuZ2UgfHwgdGhpcy50ZXh0IS5zZWxlY3Rpb25TdGFydCAhPT0gbnVsbDtcblx0XHR9XG5cdFx0c2V0U2VsZWN0aW9uKGZyb206IG51bWJlciwgdG86IG51bWJlcik6IHZvaWQge1xuXHRcdFx0Ly8gdGhpcy50ZXh0IG11c3QgYmUgZm9jdXNlZCAoYXQgbGVhc3Qgb24gSUUpXG5cdFx0XHRpZiAoIXRoaXMudGV4dCEudmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50ZXh0IS5zZXRTZWxlY3Rpb25SYW5nZShmcm9tLCB0byk7XG5cdFx0fVxuXHRcdGdldFNlbGVjdGlvbigpOiB7c3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXJ9IHtcblx0XHRcdGxldCBmcm9tID0gMDtcblx0XHRcdC8vIHRoaXMudGV4dCBtdXN0IGJlIGZvY3VzZWQgKGF0IGxlYXN0IG9uIElFKVxuXHRcdFx0bGV0IHRvID0gMDtcblx0XHRcdGlmICghdGhpcy50ZXh0IS52YWx1ZSkge1xuXHRcdFx0XHQvLyBObyB0ZXh0LlxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnRleHQhLnNlbGVjdGlvblN0YXJ0ICE9PSBudWxsKSB7XG5cdFx0XHRcdGZyb20gPSB0aGlzLnRleHQhLnNlbGVjdGlvblN0YXJ0O1xuXHRcdFx0XHR0byA9IHRoaXMudGV4dCEuc2VsZWN0aW9uRW5kID8/IHRvO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3RhcnQ6IGZyb20sXG5cdFx0XHRcdGVuZDogdG8sXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRzYXZlVmlldygpOiB2b2lkIHtcblx0XHRcdHRoaXMubGFzdFNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0fVxuXHRcdHByb2Nlc3NLZXkoZXZlbnQ6IEhvdENhdFVJRXZlbnQpOiBib29sZWFuIHtcblx0XHRcdGxldCBkaXIgPSAwO1xuXHRcdFx0c3dpdGNoICh0aGlzLmxhc3RLZXkpIHtcblx0XHRcdFx0Y2FzZSBVUDpcblx0XHRcdFx0XHRkaXIgPSAtMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBET1dOOlxuXHRcdFx0XHRcdGRpciA9IDE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUEdVUDpcblx0XHRcdFx0XHRkaXIgPSAtSEMubGlzdFNpemU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUEdET1dOOlxuXHRcdFx0XHRcdGRpciA9IEhDLmxpc3RTaXplO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIEVTQzpcblx0XHRcdFx0XHQvLyBJbmhpYml0IGRlZmF1bHQgYmVoYXZpb3IgKHJldmVydCB0byBsYXN0IHJlYWwgaW5wdXQgaW4gRkY6IHdlIGRvIHRoYXQgb3Vyc2VsdmVzKVxuXHRcdFx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHRcdH1cblx0XHRcdGlmIChkaXIpIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdCEuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0Ly8gTGlzdCBpcyB2aXNpYmxlLCBzbyB0aGVyZSBhcmUgc3VnZ2VzdGlvbnNcblx0XHRcdFx0XHR0aGlzLmhpZ2hsaWdodFN1Z2dlc3Rpb24oZGlyKTtcblx0XHRcdFx0XHQvLyBLaWxsIHRoZSBldmVudCwgb3RoZXJ3aXNlIHNvbWUgYnJvd3NlcnMgKGUuZy4sIEZpcmVmb3gpIG1heSBhZGRpdGlvbmFsbHkgdHJlYXQgYW4gdXAtYXJyb3dcblx0XHRcdFx0XHQvLyBhcyBcInBsYWNlIHRoZSB0ZXh0IGN1cnNvciBhdCB0aGUgZnJvbnRcIiwgd2hpY2ggd2UgZG9uJ3Qgd2FudCBoZXJlLlxuXHRcdFx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHR0aGlzLmtleUNvdW50IDw9IDEgJiZcblx0XHRcdFx0XHQoIXRoaXMuY2FsbGJhY2tPYmogfHwgdGhpcy5jYWxsYmFja09iai5jYWxsc01hZGUgPT09IHRoaXMuY2FsbGJhY2tPYmoubm9mQ2FsbHMpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdC8vIElmIG5vIHN1Z2dlc3Rpb25zIGRpc3BsYXllZCwgZ2V0IHRoZW0sIHVubGVzcyB3ZSdyZSBhbHJlYWR5IGdldHRpbmcgdGhlbS5cblx0XHRcdFx0XHR0aGlzLnRleHRjaGFuZ2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGhpZ2hsaWdodFN1Z2dlc3Rpb24oZGlyOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zIHx8ICF0aGlzLmxpc3QgfHwgdGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjdXJyID0gdGhpcy5saXN0LnNlbGVjdGVkSW5kZXg7XG5cdFx0XHRsZXQgdGd0ID0gLTE7XG5cdFx0XHRpZiAoZGlyID09PSAwKSB7XG5cdFx0XHRcdGlmIChjdXJyIDwgMCB8fCBjdXJyID49IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0Z3QgPSBjdXJyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGd0ID0gY3VyciA8IDAgPyAwIDogY3VyciArIGRpcjtcblx0XHRcdFx0dGd0ID0gTWF0aC5tYXgodGd0LCAwKTtcblx0XHRcdFx0aWYgKHRndCA+PSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0XHR0Z3QgPSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGggLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGd0ICE9PSBjdXJyIHx8IGRpciA9PT0gMCkge1xuXHRcdFx0XHRpZiAoY3VyciA+PSAwICYmIGN1cnIgPCB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGggJiYgZGlyICE9PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0Lm9wdGlvbnNbY3Vycl0hLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5saXN0Lm9wdGlvbnNbdGd0XSEuc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRcdGNvbnN0IHYgPSB0aGlzLnRleHQhLnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGNvbnN0IGtleSA9IHYubGVuZ3RoID4gMSA/IGB8JHt2WzFdfWAgOiAnJztcblx0XHRcdFx0Y29uc3Qgb3B0aW9uVGV4dCA9IHRoaXMubGlzdC5vcHRpb25zW3RndF0hLnRleHQ7XG5cdFx0XHRcdGNvbnN0IGNvbXBsZXRlZCA9IHRoaXMuYXV0b0NvbXBsZXRlKG9wdGlvblRleHQsIHRoaXMubGFzdFJlYWxJbnB1dCwgbnVsbCwga2V5LCBmYWxzZSk7XG5cdFx0XHRcdGlmICghY29tcGxldGVkIHx8IG9wdGlvblRleHQgPT09IHRoaXMubGFzdFJlYWxJbnB1dCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dCEudmFsdWUgPSBvcHRpb25UZXh0ICsga2V5O1xuXHRcdFx0XHRcdGlmICh0aGlzLmNhblNlbGVjdCgpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldFNlbGVjdGlvbihvcHRpb25UZXh0Lmxlbmd0aCwgb3B0aW9uVGV4dC5sZW5ndGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxhc3RJbnB1dCA9IG9wdGlvblRleHQ7XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBNaWdodCBiZSB3cm9uZyBpZiBmcm9tIGEgZGFiIGxpc3QuLi5cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zcmMgPSBIQy5leGlzdHNZZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJlc2V0S2V5U2VsZWN0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMgfHwgIXRoaXMubGlzdCB8fCB0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGN1cnIgPSB0aGlzLmxpc3Quc2VsZWN0ZWRJbmRleDtcblx0XHRcdGlmIChjdXJyID49IDAgJiYgY3VyciA8IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1tjdXJyXSEuc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0Ly8gR2V0IGN1cnJlbnQgaW5wdXQgdGV4dFxuXHRcdFx0XHRjb25zdCB2ID0gdGhpcy50ZXh0IS52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHRcdC8vIEVTQyBpcyBoYW5kbGVkIHN0cmFuZ2VseSBieSBzb21lIGJyb3dzZXJzIChlLmcuLCBGRik7IHNvbWVob3cgaXQgcmVzZXRzIHRoZSBpbnB1dCB2YWx1ZSBiZWZvcmVcblx0XHRcdFx0Ly8gb3VyIGV2ZW50IGhhbmRsZXJzIGV2ZXIgZ2V0IGEgY2hhbmNlIHRvIHJ1bi5cblx0XHRcdFx0bGV0IHJlc3VsdCA9IHZbMF0gIT09IHRoaXMubGFzdElucHV0O1xuXHRcdFx0XHRpZiAodlswXSAhPT0gdGhpcy5sYXN0UmVhbElucHV0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0IS52YWx1ZSA9IHRoaXMubGFzdFJlYWxJbnB1dCArIGtleTtcblx0XHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gdGhpcy5sYXN0UmVhbElucHV0O1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRpbnRlcmZhY2UgSG90Q2F0VXNlckNvbmZpZyB7XG5cdFx0SG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0PzogYm9vbGVhbjtcblx0XHRIb3RDYXROb0F1dG9Db21taXQ/OiBib29sZWFuO1xuXHRcdEhvdENhdERlbE5lZWRzRGlmZj86IGJvb2xlYW47XG5cdFx0SG90Q2F0U3VnZ2VzdGlvbkRlbGF5PzogbnVtYmVyO1xuXHRcdEhvdENhdEVkaXRCb3hXaWR0aD86IG51bWJlcjtcblx0XHRIb3RDYXRTdWdnZXN0aW9ucz86IHN0cmluZztcblx0XHRIb3RDYXRGaXhlZFN1Z2dlc3Rpb25zPzogYm9vbGVhbjtcblx0XHRIb3RDYXRNaW5vclNpbmdsZUNoYW5nZXM/OiBib29sZWFuO1xuXHRcdEhvdENhdENoYW5nZWRCYWNrZ3JvdW5kPzogc3RyaW5nO1xuXHRcdEhvdENhdFVzZUNhdGVnb3J5TGlua3M/OiBib29sZWFuO1xuXHRcdEhvdENhdExpc3RTaXplPzogbnVtYmVyO1xuXHRcdEhvdENhdENoYW5nZVRhZz86IHN0cmluZztcblx0fVxuXHRjb25zdCBpbml0aWFsaXplID0gKCk6IHZvaWQgPT4ge1xuXHRcdC8vIFVzZXIgY29uZmlndXJhdGlvbnM6IERvIHRoaXMgaGVyZSwgY2FsbGVkIGZyb20gdGhlIG9ubG9hZCBoYW5kbGVyLCBzbyB0aGF0IHVzZXJzIGNhblxuXHRcdC8vIG92ZXJyaWRlIGl0IGVhc2lseSBpbiB0aGVpciBvd24gdXNlciBzY3JpcHQgZmlsZXMgYnkganVzdCBkZWNsYXJpbmcgdmFyaWFibGVzLlxuXHRcdGNvbnN0IGNvbmZpZzogSG90Q2F0VXNlckNvbmZpZyA9IHt9O1xuXHRcdEhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X2RvbnRfYWRkX3RvX3dhdGNobGlzdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdERvbnRBZGRUb1dhdGNobGlzdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5kb250X2FkZF90b193YXRjaGxpc3Rcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXREb250QWRkVG9XYXRjaGxpc3Rcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0O1xuXHRcdEhDLm5vX2F1dG9jb21taXQgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9ub19hdXRvY29tbWl0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0Tm9BdXRvQ29tbWl0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgJSAyXG5cdFx0XHRcdFx0XHQ/IHRydWVcblx0XHRcdFx0XHRcdDogSEMubm9fYXV0b2NvbW1pdCAvLyBPbiB0YWxrIG5hbWVzcGFjZSBkZWZhdWx0IGF1dG9jb21taXQgb2ZmXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0Tm9BdXRvQ29tbWl0XG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X25vX2F1dG9jb21taXQ7XG5cdFx0SEMuZGVsX25lZWRzX2RpZmYgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9kZWxfbmVlZHNfZGlmZiA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdERlbE5lZWRzRGlmZiA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5kZWxfbmVlZHNfZGlmZlxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdERlbE5lZWRzRGlmZlxuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9kZWxfbmVlZHNfZGlmZjtcblx0XHRIQy5zdWdnZXN0X2RlbGF5ID0gd2luZG93LmhvdGNhdF9zdWdnZXN0aW9uX2RlbGF5IHx8IGNvbmZpZy5Ib3RDYXRTdWdnZXN0aW9uRGVsYXkgfHwgSEMuc3VnZ2VzdF9kZWxheTtcblx0XHRIQy5lZGl0Ym94X3dpZHRoID0gd2luZG93LmhvdGNhdF9lZGl0Ym94X3dpZHRoIHx8IGNvbmZpZy5Ib3RDYXRFZGl0Qm94V2lkdGggfHwgSEMuZWRpdGJveF93aWR0aDtcblx0XHRIQy5zdWdnZXN0aW9ucyA9IHdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnMgfHwgY29uZmlnLkhvdENhdFN1Z2dlc3Rpb25zIHx8IEhDLnN1Z2dlc3Rpb25zO1xuXHRcdGlmICh0eXBlb2YgSEMuc3VnZ2VzdGlvbnMgIT09ICdzdHJpbmcnIHx8ICFzdWdnZXN0aW9uQ29uZmlnc1tIQy5zdWdnZXN0aW9uc10pIHtcblx0XHRcdEhDLnN1Z2dlc3Rpb25zID0gJ2NvbWJpbmVkJztcblx0XHR9XG5cdFx0SEMuZml4ZWRfc2VhcmNoID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRGaXhlZFN1Z2dlc3Rpb25zID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmZpeGVkX3NlYXJjaFxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdEZpeGVkU3VnZ2VzdGlvbnNcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQ7XG5cdFx0SEMuc2luZ2xlX21pbm9yID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfc2luZ2xlX2NoYW5nZXNfYXJlX21pbm9yID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLnNpbmdsZV9taW5vclxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3I7XG5cdFx0SEMuYmdfY2hhbmdlZCA9IHdpbmRvdy5ob3RjYXRfY2hhbmdlZF9iYWNrZ3JvdW5kIHx8IGNvbmZpZy5Ib3RDYXRDaGFuZ2VkQmFja2dyb3VuZCB8fCBIQy5iZ19jaGFuZ2VkO1xuXHRcdEhDLnVzZV91cF9kb3duID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfdXNlX2NhdGVnb3J5X2xpbmtzID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rcyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy51c2VfdXBfZG93blxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdFVzZUNhdGVnb3J5TGlua3Ncblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfdXNlX2NhdGVnb3J5X2xpbmtzO1xuXHRcdEhDLmxpc3RTaXplID0gd2luZG93LmhvdGNhdF9saXN0X3NpemUgfHwgY29uZmlnLkhvdENhdExpc3RTaXplIHx8IEhDLmxpc3RTaXplO1xuXHRcdEhDLmNoYW5nZVRhZyA9IGNvbmZpZy5Ib3RDYXRDaGFuZ2VUYWcgfHwgJyc7XG5cdFx0Ly8gVGhlIG5leHQgd2hvbGUgc2hlYmFuZyBpcyBuZWVkZWQsIGJlY2F1c2UgbWFudWFsIHRhZ3MgZ2V0IG5vdCBzdWJtaXR0ZWQgZXhjZXB0IG9mIHNhdmVcblx0XHRpZiAoSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRjb25zdCBlRm9ybSA9IGRvY3VtZW50LmVkaXRmb3JtO1xuXHRcdFx0Y29uc3QgY2F0UmVnRXhwID0gbmV3IFJlZ0V4cChgXlxcXFxbXFxcXFsoJHtIQy5jYXRlZ29yeV9yZWdleHB9KTpgKTtcblx0XHRcdGxldCBvbGRUeHQgPSAnJztcblx0XHRcdC8vIFJldHVybnMgdHJ1ZSBpZiBtaW5vciBjaGFuZ2Vcblx0XHRcdGNvbnN0IGlzTWlub3JDaGFuZ2UgPSAoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9PiB7XG5cdFx0XHRcdGNvbnN0IHRleHRib3ggPSBlRm9ybT8ud3BUZXh0Ym94MTtcblx0XHRcdFx0aWYgKCF0ZXh0Ym94KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IG5ld1R4dCA9IHRleHRib3gudmFsdWU7XG5cdFx0XHRcdGNvbnN0IG9sZExpbmVzID0gb2xkVHh0Lm1hdGNoKC9eLiokL2dtKSA/PyBbXTtcblx0XHRcdFx0Y29uc3QgbmV3TGluZXMgPSBuZXdUeHQubWF0Y2goL14uKiQvZ20pID8/IFtdO1xuXHRcdFx0XHRjb25zdCBleGNlcHQgPSAoYUFycjogc3RyaW5nW10sIGJBcnI6IHN0cmluZ1tdKTogc3RyaW5nW10gPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcblx0XHRcdFx0XHRsZXQgbEFycjogc3RyaW5nW107IC8vIGxhcmdlclxuXHRcdFx0XHRcdGxldCBzQXJyOiBzdHJpbmdbXTsgLy8gc21hbGxlclxuXHRcdFx0XHRcdGlmIChhQXJyLmxlbmd0aCA8IGJBcnIubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRsQXJyID0gYkFycjtcblx0XHRcdFx0XHRcdHNBcnIgPSBbLi4uYUFycl07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxBcnIgPSBhQXJyO1xuXHRcdFx0XHRcdFx0c0FyciA9IFsuLi5iQXJyXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBpdGVtIG9mIGxBcnIpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGluZCA9IHNBcnIuaW5kZXhPZihpdGVtKTtcblx0XHRcdFx0XHRcdGlmIChpbmQgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGl0ZW07XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzQXJyLnNwbGljZShpbmQsIDEpOyAvLyBkb24ndCBjaGVjayB0aGlzIGl0ZW0gYWdhaW5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIC4uLnNBcnJdO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRsZXQgY0FyciA9IGV4Y2VwdChvbGRMaW5lcywgbmV3TGluZXMpOyAvLyBjaGFuZ2VzXG5cdFx0XHRcdGlmIChjQXJyLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjQXJyID0gY0Fyci5maWx0ZXIoKGM6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgdHJpbW1lZCA9IGMudHJpbSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuICEhdHJpbW1lZCAmJiAhY2F0UmVnRXhwLnRlc3QodHJpbW1lZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNBcnIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0b2xkVHh0ID0gbmV3VHh0O1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHR9O1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjb25mLndnQWN0aW9uID09PSAnc3VibWl0JyAmJlxuXHRcdFx0XHRjb25mLndnQXJ0aWNsZUlkICYmXG5cdFx0XHRcdGVGb3JtICYmXG5cdFx0XHRcdGVGb3JtLndwU3VtbWFyeSAmJlxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lraURpZmYnKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNvbnN0IHN1bSA9IGVGb3JtLndwU3VtbWFyeTtcblx0XHRcdFx0Y29uc3Qgc3VtQSA9IGVGb3JtLndwQXV0b1N1bW1hcnk7XG5cdFx0XHRcdGlmIChzdW0udmFsdWUgJiYgc3VtQSAmJiBzdW1BLnZhbHVlID09PSBIQy5jaGFuZ2VUYWcpIHtcblx0XHRcdFx0XHQvLyBIb3RDYXQgZGlmZlxuXHRcdFx0XHRcdC8vIE1ENSBoYXNoIG9mIHRoZSBlbXB0eSBzdHJpbmcsIGFzIEhvdENhdCBlZGl0IGlzIGJhc2VkIG9uIGVtcHR5IHN1bVxuXHRcdFx0XHRcdHN1bUEudmFsdWUgPSBzdW1BLnZhbHVlLnJlcGxhY2UoSEMuY2hhbmdlVGFnLCAnZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UnKTtcblx0XHRcdFx0XHQvLyBBdHRyIGNyZWF0aW9uIGFuZCBldmVudCBoYW5kbGluZyBpcyBub3Qgc2FtZSBpbiBhbGwgKG9sZCkgYnJvd3NlcnMgc28gdXNlICRcblx0XHRcdFx0XHRjb25zdCAkY3QgPSAkKCc8aW5wdXQ+Jylcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdFx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC52YWwoSEMuY2hhbmdlVGFnKTtcblx0XHRcdFx0XHQkKGVGb3JtKS5hcHBlbmQoJGN0KTtcblx0XHRcdFx0XHRvbGRUeHQgPSBlRm9ybS53cFRleHRib3gxPy52YWx1ZSA/PyAnJztcblx0XHRcdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0XHQkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwU2F2ZV0nKS5vbmUoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCRjdC52YWwoKSkge1xuXHRcdFx0XHRcdFx0XHRzdW0udmFsdWUgPSBzdW0udmFsdWUucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpIHx8IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpLFxuXHRcdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29uc3QgcmVtb3ZlQ2hhbmdlVGFnID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0JChlRm9ybS53cFRleHRib3gxISlcblx0XHRcdFx0XHRcdFx0LmFkZChzdW0pXG5cdFx0XHRcdFx0XHRcdC5vbmUoJ2lucHV0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGlzTWlub3JDaGFuZ2UoKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZW1vdmVDaGFuZ2VUYWcoKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRjdC52YWwoJycpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmVtb3ZlQ2hhbmdlVGFnKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gTnVtZXJpYyBpbnB1dCwgbWFrZSBzdXJlIHdlIGhhdmUgYSBudW1lcmljIHZhbHVlXG5cdFx0SEMubGlzdFNpemUgPSBOdW1iZXIucGFyc2VJbnQoU3RyaW5nKEhDLmxpc3RTaXplKSwgMTApO1xuXHRcdGlmIChOdW1iZXIuaXNOYU4oSEMubGlzdFNpemUpIHx8IEhDLmxpc3RTaXplIDwgNSkge1xuXHRcdFx0SEMubGlzdFNpemUgPSA1O1xuXHRcdH1cblx0XHRIQy5saXN0U2l6ZSA9IE1hdGgubWluKEhDLmxpc3RTaXplLCAzMCk7IC8vIE1heCBzaXplXG5cdFx0Ly8gTG9jYWxpemUgc2VhcmNoIGVuZ2luZSBuYW1lc1xuXHRcdGZvciAoY29uc3QgW2tleSwgc3VnZ2VzdGlvbkNvbmZpZ10gb2YgT2JqZWN0LmVudHJpZXMoc3VnZ2VzdGlvbkNvbmZpZ3MpKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoa2V5ICYmIGdldE1lc3NhZ2UoYGVuZ2luZV9uYW1lcy0ke2tleX1gKSkge1xuXHRcdFx0XHRcdHN1Z2dlc3Rpb25Db25maWcubmFtZSA9IGdldE1lc3NhZ2UoYGVuZ2luZV9uYW1lcy0ke2tleX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBDYXRjaCBib3RoIG5hdGl2ZSBSVEwgYW5kIFwiZmFrZWRcIiBSVEwgdGhyb3VnaCBbW01lZGlhV2lraTpSdGwuanNdXVxuXHRcdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignYm9keScpITtcblx0XHRpc19ydGwgPSBoYXNDbGFzcyhib2R5LCAncnRsJyk7XG5cdFx0aWYgKCFpc19ydGwpIHtcblx0XHRcdGNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LmRlZmF1bHRWaWV3XG5cdFx0XHRcdD8gLy8gR2Vja28gZXRjLlxuXHRcdFx0XHRcdGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoYm9keSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJylcblx0XHRcdFx0OiAvLyBOb3QgZXhhY3RseSByaWdodCwgYnV0IGJlc3QgZWZmb3J0XG5cdFx0XHRcdFx0JCgnYm9keScpWzBdIS5zdHlsZS5kaXJlY3Rpb247XG5cdFx0XHRpc19ydGwgPSBkaXJlY3Rpb24gPT09ICdydGwnO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgY2FuX2VkaXQgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYS1lZGl0JykgIT09IG51bGw7XG5cdH07XG5cdC8vIExlZ2FjeSBzdHVmZlxuXHRjb25zdCBjbG9zZUZvcm0gPSAoKTogdm9pZCA9PiB7XG5cdFx0Ly8gQ2xvc2UgYWxsIG9wZW4gZWRpdG9ycyB3aXRob3V0IHJlZGlyZWN0IHJlc29sdXRpb24gYW5kIG90aGVyIGFzeW5jaHJvbm91cyBzdHVmZi5cblx0XHRmb3IgKGNvbnN0IGVkaXQgb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXQuc3RhdGUgPT09IE9QRU4pIHtcblx0XHRcdFx0ZWRpdC5jYW5jZWwoKTtcblx0XHRcdH0gZWxzZSBpZiAoZWRpdC5zdGF0ZSA9PT0gQ0hBTkdFX1BFTkRJTkcpIHtcblx0XHRcdFx0ZWRpdC5zYW5pdGl6ZUlucHV0KCk7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gZWRpdC50ZXh0IS52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRsZXQga2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0XHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRrZXkgPSB2YWx1ZVsxXSE7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdiA9IHZhbHVlWzBdIS5yZXBsYWNlKC9fL2csICcgJykudHJpbSgpO1xuXHRcdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRlZGl0LmNhbmNlbCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVkaXQuY3VycmVudENhdGVnb3J5ID0gdjtcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRLZXkgPSBrZXk7XG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50RXhpc3RzID0gZWRpdC5pbnB1dEV4aXN0cztcblx0XHRcdFx0XHRlZGl0LmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHNldHVwX3VwbG9hZCA9ICgpOiB2b2lkID0+IHtcblx0XHRvblVwbG9hZCA9IHRydWU7XG5cdFx0Ly8gQWRkIGFuIGVtcHR5IGNhdGVnb3J5IGJhciBhdCB0aGUgZW5kIG9mIHRoZSB0YWJsZSBjb250YWluaW5nIHRoZSBkZXNjcmlwdGlvbiwgYW5kIGNoYW5nZSB0aGUgb25zdWJtaXQgaGFuZGxlci5cblx0XHRsZXQgaXA6IEhUTUxFbGVtZW50IHwgbnVsbCA9XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI213LWh0bWxmb3JtLWRlc2NyaXB0aW9uJykgPz9cblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwRGVzdEZpbGVdJyk7XG5cdFx0aWYgKCFpcCkge1xuXHRcdFx0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignaW5wdXRbbmFtZT13cERlc3RGaWxlXScpO1xuXHRcdFx0d2hpbGUgKGlwICYmIGlwLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICd0YWJsZScpIHtcblx0XHRcdFx0aXAgPSBpcC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFpcCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZXVwbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BGb3JSZVVwbG9hZF0nKTtcblx0XHRjb25zdCBkZXN0RmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJ2lucHV0W25hbWU9d3BEZXN0RmlsZV0nKTtcblx0XHRpZiAoKHJldXBsb2FkICYmICEhcmV1cGxvYWQudmFsdWUpIHx8IChkZXN0RmlsZSAmJiAoZGVzdEZpbGUuZGlzYWJsZWQgfHwgZGVzdEZpbGUucmVhZE9ubHkpKSkge1xuXHRcdFx0cmV0dXJuOyAvLyByZS11cGxvYWQgZm9ybS4uLlxuXHRcdH1cblx0XHQvLyBJbnNlcnQgYSB0YWJsZSByb3cgd2l0aCB0d28gZmllbGRzIChsYWJlbCBhbmQgZW1wdHkgY2F0ZWdvcnkgYmFyKVxuXHRcdGNvbnN0IGxhYmVsQ2VsbCA9IG1ha2UoJ3RkJyk7XG5cdFx0Y29uc3QgbGluZUNlbGwgPSBtYWtlKCd0ZCcpO1xuXHRcdC8vIENyZWF0ZSB0aGUgY2F0ZWdvcnkgbGluZVxuXHRcdGNhdExpbmUgPSBtYWtlKCdkaXYnKTtcblx0XHRjYXRMaW5lLmNsYXNzTmFtZSA9ICdjYXRsaW5rcyc7XG5cdFx0Y2F0TGluZS5pZCA9ICdjYXRsaW5rcyc7XG5cdFx0Y2F0TGluZS5zdHlsZS50ZXh0QWxpZ24gPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdC8vIFdlJ2xsIGJlIGluc2lkZSBhIHRhYmxlIHJvdy4gTWFrZSBzdXJlIHRoYXQgd2UgZG9uJ3QgaGF2ZSBtYXJnaW5zIG9yIHN0cmFuZ2UgYm9yZGVycy5cblx0XHRjYXRMaW5lLnN0eWxlLm1hcmdpbiA9ICcwJztcblx0XHRjYXRMaW5lLnN0eWxlLmJvcmRlciA9ICdub25lJztcblx0XHRsaW5lQ2VsbC5hcHBlbmQoY2F0TGluZSk7XG5cdFx0Ly8gQ3JlYXRlIHRoZSBsYWJlbFxuXHRcdGNvbnN0IGxhYmVsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdGlmIChsYWJlbCkge1xuXHRcdFx0bGFiZWxDZWxsLmlkID0gJ2hvdGNhdExhYmVsVHJhbnNsYXRlZCc7XG5cdFx0XHRsYWJlbENlbGwuYXBwZW5kKGxhYmVsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGFiZWxDZWxsLmlkID0gJ2hvdGNhdExhYmVsJztcblx0XHRcdGxhYmVsQ2VsbC5hcHBlbmQobWFrZShnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyksIHRydWUpKTtcblx0XHR9XG5cdFx0bGFiZWxDZWxsLmNsYXNzTmFtZSA9ICdtdy1sYWJlbCc7XG5cdFx0bGFiZWxDZWxsLnN0eWxlLnRleHRBbGlnbiA9ICdyaWdodCc7XG5cdFx0bGFiZWxDZWxsLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnbWlkZGxlJztcblx0XHQvLyBDaGFuZ2UgdGhlIG9uc3VibWl0IGhhbmRsZXJcblx0XHRjb25zdCBmb3JtID1cblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEZvcm1FbGVtZW50PignI3VwbG9hZCcpID8/XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxGb3JtRWxlbWVudD4oJyNtdy11cGxvYWQtZm9ybScpO1xuXHRcdGlmIChmb3JtKSB7XG5cdFx0XHRjb25zdCBuZXdSb3cgPSAoaXAgYXMgSFRNTFRhYmxlRWxlbWVudCkuaW5zZXJ0Um93KC0xKTtcblx0XHRcdG5ld1Jvdy5hcHBlbmQobGFiZWxDZWxsKTtcblx0XHRcdG5ld1Jvdy5hcHBlbmQobGluZUNlbGwpO1xuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG5cdFx0XHRcdGNsb3NlRm9ybSgpO1xuXHRcdFx0XHQvLyBDb3B5IHRoZSBjYXRlZ29yaWVzXG5cdFx0XHRcdGNvbnN0IGViID1cblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCd0ZXh0YXJlYVtuYW1lPXdwVXBsb2FkRGVzY3JpcHRpb25dJykgPz9cblx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCcjd3BEZXNjJyk7XG5cdFx0XHRcdGlmICghZWIpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgYWRkZWRPbmUgPSBmYWxzZTtcblx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdGNvbnN0IHQgPSBlZGl0b3IuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0XHRcdGlmICghdCkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGVkaXRvci5jdXJyZW50S2V5O1xuXHRcdFx0XHRcdGNvbnN0IG5ld19jYXQgPSBgW1ske0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0fSR7a2V5ID8gYHwke2tleX1gIDogJyd9XV1gO1xuXHRcdFx0XHRcdC8vIE9ubHkgYWRkIGlmIG5vdCBhbHJlYWR5IHByZXNlbnRcblx0XHRcdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsIFN0cmluZy5yYXdgKFxcc3xcXFMpKj88L25vYCwgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdFx0XHRcdGxldCBfY2xlYW5lZFRleHQgPSBlYi52YWx1ZTtcblx0XHRcdFx0XHRsZXQgcHJldmlvdXNDbGVhbmVkVGV4dDogc3RyaW5nO1xuXHRcdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRcdHByZXZpb3VzQ2xlYW5lZFRleHQgPSBfY2xlYW5lZFRleHQ7XG5cdFx0XHRcdFx0XHRfY2xlYW5lZFRleHQgPSBfY2xlYW5lZFRleHQucmVwbGFjZSgvPCEtLS9nLCAnJykucmVwbGFjZSgvLS0hPz4vZywgJycpLnJlcGxhY2Uobm93aWtpUmVnZXgsICcnKTtcblx0XHRcdFx0XHR9IHdoaWxlIChfY2xlYW5lZFRleHQgIT09IHByZXZpb3VzQ2xlYW5lZFRleHQpO1xuXHRcdFx0XHRcdGlmICghZmluZF9jYXRlZ29yeShfY2xlYW5lZFRleHQsIHQsIHRydWUpKSB7XG5cdFx0XHRcdFx0XHRlYi52YWx1ZSArPSBgXFxuJHtuZXdfY2F0fWA7XG5cdFx0XHRcdFx0XHRhZGRlZE9uZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChhZGRlZE9uZSkge1xuXHRcdFx0XHRcdC8vIFJlbW92ZSBcInN1YnN0OnVuY1wiIGFkZGVkIGJ5IEZsaW5mbyBpZiBpdCBkaWRuJ3QgZmluZCBjYXRlZ29yaWVzXG5cdFx0XHRcdFx0Y29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCd7eyQnLmNvbmNhdCgnc3Vic3Q6JykuY29uY2F0KCd1bmN9fScpLCAnZycpO1xuXHRcdFx0XHRcdGViLnZhbHVlID0gZWIudmFsdWUucmVwbGFjZShyZWdleCwgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRsZXQgY2xlYW5lZFRleHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRpbnRlcmZhY2UgSG90Q2F0T25QYWdlUmVzdWx0IHtcblx0XHR0aXRsZTogc3RyaW5nO1xuXHRcdG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgfCBIb3RDYXRDYXRlZ29yeU1hdGNoZXMgfCBzdHJpbmdbXSB8IG51bGw7XG5cdH1cblx0Y29uc3QgaXNPblBhZ2UgPSAoZWxlbWVudDogRWxlbWVudCk6IEhvdENhdE9uUGFnZVJlc3VsdCB8IG51bGwgPT4ge1xuXHRcdGNvbnN0IHtmaXJzdENoaWxkfSA9IGVsZW1lbnQ7XG5cdFx0aWYgKCFmaXJzdENoaWxkIHx8IGZpcnN0Q2hpbGQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IGNhdFRpdGxlID0gdGl0bGUoKGZpcnN0Q2hpbGQgYXMgRWxlbWVudCkuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuXHRcdGlmICghY2F0VGl0bGUpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXRUaXRsZSA9IGNhdFRpdGxlLnNsaWNlKGNhdFRpdGxlLmluZGV4T2YoJzonKSArIDEpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRpZiAoSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KGNhdFRpdGxlKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3VsdDogSG90Q2F0T25QYWdlUmVzdWx0ID0ge1xuXHRcdFx0dGl0bGU6IGNhdFRpdGxlLFxuXHRcdFx0bWF0Y2g6IFsnJywgJycsICcnXSxcblx0XHR9O1xuXHRcdGlmIChwYWdlVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0aWYgKGNsZWFuZWRUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsIFN0cmluZy5yYXdgKFxcc3xcXFMpKj88L25vYCwgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdFx0Y2xlYW5lZFRleHQgPSBwYWdlVGV4dC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgJycpLnJlcGxhY2Uobm93aWtpUmVnZXgsICcnKTtcblx0XHR9XG5cdFx0cmVzdWx0Lm1hdGNoID0gZmluZF9jYXRlZ29yeShjbGVhbmVkVGV4dCwgY2F0VGl0bGUsIHRydWUpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdGxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuXHRsZXQgc2V0dXBUaW1lb3V0OiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PiB8IG51bGwgPSBudWxsO1xuXHRjb25zdCBmaW5kQnlDbGFzcyA9IChzY29wZTogUGFyZW50Tm9kZSwgdGFnOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQgfCBudWxsID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSAkKHNjb3BlKS5maW5kKGAke3RhZ30uJHtjbGFzc05hbWV9YCk7XG5cdFx0cmV0dXJuIHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID4gMCA/IChyZXN1bHRbMF0gYXMgSFRNTEVsZW1lbnQpIDogbnVsbDtcblx0fTtcblx0Y29uc3Qgc2V0dXAgPSAoYWRkaXRpb25hbFdvcms/OiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0aWYgKGluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRpZiAoc2V0dXBUaW1lb3V0KSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHNldHVwVGltZW91dCk7XG5cdFx0XHRzZXR1cFRpbWVvdXQgPSBudWxsO1xuXHRcdH1cblx0XHQvLyBGaW5kIHRoZSBjYXRlZ29yeSBiYXIsIG9yIGNyZWF0ZSBhbiBlbXB0eSBvbmUgaWYgdGhlcmUgaXNuJ3Qgb25lLiBUaGVuIGFkZCAtLystIGxpbmtzIGFmdGVyXG5cdFx0Ly8gZWFjaCBjYXRlZ29yeSwgYW5kIGFkZCB0aGUgKyBsaW5rLlxuXHRcdGNhdExpbmUgfHw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcjbXctbm9ybWFsLWNhdGxpbmtzJyk7IC8vIFNwZWNpYWw6VXBsb2FkXG5cdFx0Y29uc3QgaGlkZGVuQ2F0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcjbXctaGlkZGVuLWNhdGxpbmtzJyk7XG5cdFx0aWYgKCFjYXRMaW5lKSB7XG5cdFx0XHRsZXQgZm9vdGVyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdFx0aWYgKCFoaWRkZW5DYXRzKSB7XG5cdFx0XHRcdGZvb3RlciA9IGZpbmRCeUNsYXNzKGRvY3VtZW50LCAnZGl2JywgJ3ByaW50Zm9vdGVyJyk7XG5cdFx0XHRcdGlmICghZm9vdGVyKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IC8vIERvbid0IGtub3cgd2hlcmUgdG8gaW5zZXJ0IHRoZSBjYXRlZ29yeSBsaW5lXG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lID0gbWFrZSgnZGl2Jyk7XG5cdFx0XHRjYXRMaW5lLmlkID0gJ213LW5vcm1hbC1jYXRsaW5rcyc7XG5cdFx0XHRjYXRMaW5lLnN0eWxlLnRleHRBbGlnbiA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0XHQvLyBBZGQgYSBsYWJlbFxuXHRcdFx0Y29uc3QgbGFiZWwgPSBtYWtlKCdhJyk7XG5cdFx0XHRsYWJlbC5ocmVmID0gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJ1NwZWNpYWw6Q2F0ZWdvcmllcycpO1xuXHRcdFx0bGFiZWwudGl0bGUgPSBnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyk7XG5cdFx0XHRsYWJlbC5hcHBlbmQobWFrZShnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyksIHRydWUpKTtcblx0XHRcdGNhdExpbmUuYXBwZW5kKGxhYmVsKTtcblx0XHRcdGNhdExpbmUuYXBwZW5kKG1ha2UoJzonLCB0cnVlKSk7XG5cdFx0XHQvLyBJbnNlcnQgdGhlIG5ldyBjYXRlZ29yeSBsaW5lXG5cdFx0XHRsZXQgY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwgPVxuXHRcdFx0XHQoaGlkZGVuQ2F0cz8ucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCB8IG51bGwpID8/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcjY2F0bGlua3MnKTtcblx0XHRcdGlmICghY29udGFpbmVyKSB7XG5cdFx0XHRcdGNvbnRhaW5lciA9IG1ha2UoJ2RpdicpO1xuXHRcdFx0XHRjb250YWluZXIuaWQgPSAnY2F0bGlua3MnO1xuXHRcdFx0XHRmb290ZXIhLnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShjb250YWluZXIsIGZvb3RlciEubmV4dFNpYmxpbmcpO1xuXHRcdFx0fVxuXHRcdFx0Y29udGFpbmVyLmNsYXNzTmFtZSA9ICdjYXRsaW5rcyBub3ByaW50Jztcblx0XHRcdGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRpZiAoaGlkZGVuQ2F0cykge1xuXHRcdFx0XHRoaWRkZW5DYXRzLmJlZm9yZShjYXRMaW5lKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnRhaW5lci5hcHBlbmQoY2F0TGluZSk7XG5cdFx0XHR9XG5cdFx0fSAvLyBlbmQgaWYgY2F0TGluZSBleGlzdHNcblx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRjYXRMaW5lLmRpciA9ICdydGwnO1xuXHRcdH1cblx0XHQvLyBDcmVhdGUgZWRpdG9ycyBmb3IgYWxsIGV4aXN0aW5nIGNhdGVnb3JpZXNcblx0XHRjb25zdCBjcmVhdGVFZGl0b3JzID0gKGxpbmU6IEhUTUxFbGVtZW50LCBpc19oaWRkZW4/OiBib29sZWFuKTogSFRNTEVsZW1lbnQgfCBudWxsID0+IHtcblx0XHRcdGxldCBjYXRzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiB8IEhUTUxFbGVtZW50W10gPSBsaW5lLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdsaScpO1xuXHRcdFx0aWYgKGNhdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRuZXdET00gPSB0cnVlO1xuXHRcdFx0XHRsaW5lID0gY2F0c1swXSEucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNhdHMgPSBsaW5lLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCdzcGFuJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBDb3B5IGNhdHMsIG90aGVyd2lzZSBpdCdsbCBhbHNvIG1hZ2ljYWxseSBjb250YWluIG91ciBhZGRlZCBzcGFucyBhcyBpdCBpcyBhIGxpdmUgY29sbGVjdGlvbiFcblx0XHRcdGNvbnN0IGNvcHlDYXRzID0gQXJyYXkuZnJvbShjYXRzKTtcblx0XHRcdGZvciAoY29uc3QgY2F0IG9mIGNvcHlDYXRzKSB7XG5cdFx0XHRcdGNvbnN0IHRlc3QgPSBpc09uUGFnZShjYXQpO1xuXHRcdFx0XHRpZiAodGVzdCAhPT0gbnVsbCAmJiB0ZXN0Lm1hdGNoICE9PSBudWxsICYmIGxpbmUpIHtcblx0XHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IobGluZSwgY2F0LCB0ZXN0LnRpdGxlLCAodGVzdC5tYXRjaCBhcyBzdHJpbmdbXSlbMl0sIGlzX2hpZGRlbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjb3B5Q2F0cy5sZW5ndGggPiAwID8gY29weUNhdHMuYXQoLTEpISA6IG51bGw7XG5cdFx0fTtcblx0XHRjb25zdCBsYXN0U3BhbiA9IGNyZWF0ZUVkaXRvcnMoY2F0TGluZSwgZmFsc2UpO1xuXHRcdC8vIENyZWF0ZSBvbmUgdG8gYWRkIGEgbmV3IGNhdGVnb3J5XG5cdFx0bmV3IENhdGVnb3J5RWRpdG9yKFxuXHRcdFx0bmV3RE9NID8gY2F0TGluZS5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PigndWwnKVswXSEgOiBjYXRMaW5lLFxuXHRcdFx0bnVsbCxcblx0XHRcdG51bGwsXG5cdFx0XHRsYXN0U3BhbiAhPT0gbnVsbCxcblx0XHRcdGZhbHNlXG5cdFx0KTtcblx0XHRpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRpZiAocGFnZVRleHQgIT09IG51bGwgJiYgaGlkZGVuQ2F0cykge1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0aGlkZGVuQ2F0cy5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjcmVhdGVFZGl0b3JzKGhpZGRlbkNhdHMsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQW5kIGZpbmFsbHkgYWRkIHRoZSBcIm11bHRpLW1vZGVcIiBzcGFuLiAoRG8gdGhpcyBhdCB0aGUgZW5kLCBvdGhlcndpc2UgaXQgZW5kcyB1cCBpbiB0aGUgbGlzdCBhYm92ZS4pXG5cdFx0XHRjb25zdCBlbmFibGVNdWx0aSA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdGVuYWJsZU11bHRpLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0ZW5hYmxlTXVsdGkuZGlyID0gJ3J0bCc7XG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lLmluc2VydEJlZm9yZShlbmFibGVNdWx0aSwgY2F0TGluZS5maXJzdENoaWxkIS5uZXh0U2libGluZyk7XG5cdFx0XHRlbmFibGVNdWx0aS5hcHBlbmQobWFrZSgnXFx1MDBBMCcsIHRydWUpKTsgLy8gbmJzcFxuXHRcdFx0bXVsdGlTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0ZW5hYmxlTXVsdGkuYXBwZW5kKG11bHRpU3Bhbik7XG5cdFx0XHRtdWx0aVNwYW4uaW5uZXJIVE1MID0gYCg8YT4ke0hDLmFkZG11bHRpfTwvYT4pYDtcblx0XHRcdGNvbnN0IFtsaW5rXSA9IG11bHRpU3Bhbi5xdWVyeVNlbGVjdG9yQWxsPEhUTUxBbmNob3JFbGVtZW50PignYScpO1xuXHRcdFx0bGluayEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0fSk7XG5cdFx0XHRsaW5rIS50aXRsZSA9IGdldE1lc3NhZ2UoJ211bHRpX3Rvb2x0aXAnKTtcblx0XHRcdGxpbmshLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblx0XHR9XG5cdFx0Y2xlYW5lZFRleHQgPSBudWxsO1xuXHRcdGlmIChhZGRpdGlvbmFsV29yayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG5cdFx0XHRhZGRpdGlvbmFsV29yaygpO1xuXHRcdH1cblx0XHRtdy5ob29rKCdob3RjYXQucmVhZHknKS5maXJlKCk7IC8vIEV4ZWN1dGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbnNcblx0XHQkKCdib2R5JykudHJpZ2dlcignaG90Y2F0U2V0dXBDb21wbGV0ZWQnKTtcblx0fTtcblx0Y29uc3QgY3JlYXRlQ29tbWl0Rm9ybSA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAoY29tbWl0Rm9ybSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBmb3JtQ29udGFpbmVyID0gbWFrZSgnZGl2Jyk7XG5cdFx0Zm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSEuYXBwZW5kKGZvcm1Db250YWluZXIpO1xuXHRcdGZvcm1Db250YWluZXIuaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwiaG90Y2F0Q29tbWl0Rm9ybVwiIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIGFjdGlvbj1cIiR7XG5cdFx0XHRjb25mLndnU2NyaXB0XG5cdFx0fT90aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChjb25mLndnUGFnZU5hbWUpfSZhY3Rpb249c3VibWl0XCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BUZXh0Ym94MVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm1vZGVsXCIgdmFsdWU9XCIke2NvbmYud2dQYWdlQ29udGVudE1vZGVsfVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZvcm1hdFwiIHZhbHVlPVwidGV4dC94LXdpa2lcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFN1bW1hcnlcIiB2YWx1ZT1cIlwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwid3BNaW5vcmVkaXRcIiB0aXRsZT1cIndwTWlub3JlZGl0XCIgdmFsdWU9XCIxXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ3cFdhdGNodGhpc1wiIHRpdGxlPVwid3BXYXRjaHRoaXNcIiB2YWx1ZT1cIjFcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEF1dG9TdW1tYXJ5XCIgdmFsdWU9XCJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRWRpdHRpbWVcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFN0YXJ0dGltZVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRGlmZlwiIHZhbHVlPVwid3BEaWZmXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwib2xkaWRcIiB2YWx1ZT1cIjBcIj5cblx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJoY0NvbW1pdFwiIHZhbHVlPVwiaGNDb21taXRcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEVkaXRUb2tlblwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwVWx0aW1hdGVQYXJhbVwiIHZhbHVlPVwiMVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwQ2hhbmdlVGFnc1wiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCLihLPwnZKy4pml8J2TivCdk4PwnZK+8J2SuOKEtPCdkrnihK9cIiBuYW1lPVwid3BVbmljb2RlQ2hlY2tcIj5cblx0XHQ8L2Zvcm0+YDtcblx0XHRjb21taXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIb3RDYXRDb21taXRGb3JtPignI2hvdGNhdENvbW1pdEZvcm0nKTtcblx0fTtcblx0Y29uc3QgZ2V0UGFnZSA9ICgpOiB2b2lkID0+IHtcblx0XHQvLyBXZSBrbm93IHdlIGhhdmUgYW4gYXJ0aWNsZSBoZXJlLlxuXHRcdGlmIChjb25mLndnQXJ0aWNsZUlkKSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHJhd2NvbnRpbnVlOiAnJyxcblx0XHRcdFx0dGl0bGVzOiBjb25mLndnUGFnZU5hbWUsXG5cdFx0XHRcdHByb3A6IFsnaW5mbycsICdyZXZpc2lvbnMnXSxcblx0XHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJywgJ2lkcyddLFxuXHRcdFx0XHRydmxpbWl0OiAnMScsXG5cdFx0XHRcdHJ2c3RhcnRpZDogY29uZi53Z0N1clJldmlzaW9uSWQsXG5cdFx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdFx0bWV0YTogWydzaXRlaW5mbyddLFxuXHRcdFx0fTtcblx0XHRcdEhDLnN0YXJ0ID0gKGRhdGE6IEhvdENhdEFwaVF1ZXJ5UmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0c2V0UGFnZShkYXRhKTtcblx0XHRcdFx0c2V0dXAoY3JlYXRlQ29tbWl0Rm9ybSk7XG5cdFx0XHR9O1xuXHRcdFx0dm9pZCBhcGkuZ2V0KHBhcmFtcykudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRIQy5zdGFydCEoZGF0YSBhcyBIb3RDYXRBcGlRdWVyeVJlc3BvbnNlKTtcblx0XHRcdH0pO1xuXHRcdFx0c2V0dXBUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdFx0fSwgNDAwMCk7IC8vIDQgc2VjLCBqdXN0IGluIGNhc2UgZ2V0dGluZyB0aGUgd2lraXRleHQgdGFrZXMgbG9uZ2VyLlxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEb2Vzbid0IGV4aXN0IHlldC4gRGlzYWJsZSBvbiBub24tZXhpc3RpbmcgVXNlciBwYWdlcy5cblx0XHRcdGlmIChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAyKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHBhZ2VUZXh0ID0gJyc7XG5cdFx0XHRwYWdlVGltZSA9IG51bGw7XG5cdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHNldFN0YXRlID0gKHN0YXRlOiBzdHJpbmcpOiBudWxsID0+IHtcblx0XHRjb25zdCBjYXRzID0gc3RhdGUuc3BsaXQoJ1xcbicpO1xuXHRcdGlmIChjYXRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmIChpbml0aWFsaXplZCAmJiBlZGl0b3JzLmxlbmd0aCA9PT0gMSAmJiBlZGl0b3JzWzBdIS5pc0FkZENhdGVnb3J5KSB7XG5cdFx0XHQvLyBJbnNlcnQgbmV3IHNwYW5zIGFuZCBjcmVhdGUgbmV3IGVkaXRvcnMgZm9yIHRoZW0uXG5cdFx0XHRjb25zdCBuZXdTcGFuczoge2VsZW1lbnQ6IEhUTUxFbGVtZW50OyB0aXRsZTogc3RyaW5nOyBrZXk6IHN0cmluZyB8IG51bGx9W10gPSBbXTtcblx0XHRcdGNvbnN0IGJlZm9yZSA9IGVkaXRvcnMubGVuZ3RoID09PSAxID8gZWRpdG9yc1swXSEuc3BhbiA6IG51bGw7XG5cdFx0XHRsZXQgaTogbnVtYmVyO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGNhdHNbaV0hLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGNhdCA9IGNhdHNbaV0hLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGNvbnN0IGtleSA9IGNhdC5sZW5ndGggPiAxID8gY2F0WzFdISA6IG51bGw7XG5cdFx0XHRcdGNvbnN0IGNhdE5hbWUgPSBjYXRbMF0hO1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke2NhdE5hbWV9YCk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoY2F0TmFtZSwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gY2F0TmFtZTtcblx0XHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdGlmICghaSkge1xuXHRcdFx0XHRcdGNhdExpbmUhLmluc2VydEJlZm9yZShtYWtlKCcgJywgdHJ1ZSksIGJlZm9yZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YmVmb3JlIS5iZWZvcmUoc3Bhbik7XG5cdFx0XHRcdGlmIChiZWZvcmUgJiYgaSArIDEgPCBjYXRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGJlZm9yZS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUobWFrZSgnIHwgJywgdHJ1ZSksIGJlZm9yZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bmV3U3BhbnNbbmV3U3BhbnMubGVuZ3RoXSA9IHtcblx0XHRcdFx0XHRlbGVtZW50OiBzcGFuLFxuXHRcdFx0XHRcdHRpdGxlOiBjYXROYW1lLFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8vIEFuZCBjaGFuZ2UgdGhlIGxhc3Qgb25lLi4uXG5cdFx0XHRpZiAoYmVmb3JlKSB7XG5cdFx0XHRcdGJlZm9yZS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUobWFrZSgnIHwgJywgdHJ1ZSksIGJlZm9yZSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IG5ld1NwYW4gb2YgbmV3U3BhbnMpIHtcblx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKGNhdExpbmUhLCBuZXdTcGFuLmVsZW1lbnQsIG5ld1NwYW4udGl0bGUsIG5ld1NwYW4ua2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IGdldFN0YXRlID0gKCk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHRcdGxldCByZXN1bHQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGxldCB0ZXh0ID0gZWRpdG9yLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdGNvbnN0IGtleSA9IGVkaXRvci5jdXJyZW50S2V5O1xuXHRcdFx0aWYgKHRleHQgJiYgdGV4dC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGlmIChrZXkgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0ZXh0ICs9IGB8JHtrZXl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVzdWx0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gdGV4dDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQgKz0gYFxcbiR7dGV4dH1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdGNvbnN0IHJlYWxseV9ydW4gPSAoKTogdm9pZCA9PiB7XG5cdFx0aW5pdGlhbGl6ZSgpO1xuXHRcdGlmIChcblx0XHRcdCFIQy51cGxvYWRfZGlzYWJsZWQgJiZcblx0XHRcdGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IC0xICYmXG5cdFx0XHRjb25mLndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lID09PSAnVXBsb2FkJyAmJlxuXHRcdFx0Y29uZi53Z1VzZXJOYW1lXG5cdFx0KSB7XG5cdFx0XHRzZXR1cF91cGxvYWQoKTtcblx0XHRcdHNldHVwKCgpID0+IHtcblx0XHRcdFx0Ly8gQ2hlY2sgZm9yIHN0YXRlIHJlc3RvcmF0aW9uIG9uY2UgdGhlIHNldHVwIGlzIGRvbmUgb3RoZXJ3aXNlLCBidXQgYmVmb3JlIHNpZ25hbGxpbmcgc2V0dXAgY29tcGxldGlvblxuXHRcdFx0XHRpZiAod2luZG93LlVwbG9hZEZvcm0gJiYgd2luZG93LlVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlKSB7XG5cdFx0XHRcdFx0d2luZG93LlVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlID0gc2V0U3RhdGUod2luZG93LlVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChcblx0XHRcdFx0IWNvbmYud2dJc0FydGljbGUgfHxcblx0XHRcdFx0Y29uZi53Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8XG5cdFx0XHRcdHBhcmFtKCdkaWZmJykgIT09IG51bGwgfHxcblx0XHRcdFx0cGFyYW0oJ29sZGlkJykgIT09IG51bGwgfHxcblx0XHRcdFx0IWNhbl9lZGl0KCkgfHxcblx0XHRcdFx0SEMuZGlzYWJsZSgpXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Z2V0UGFnZSgpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcnVuID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmIChIQy5zdGFydGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdEhDLnN0YXJ0ZWQgPSB0cnVlO1xuXHRcdHJlYWxseV9ydW4oKTtcblx0fTtcblx0Ly8gRXhwb3J0IGxlZ2FjeSBmdW5jdGlvbnNcblx0d2luZG93LmhvdGNhdF9nZXRfc3RhdGUgPSAoKTogc3RyaW5nIHwgbnVsbCA9PiB7XG5cdFx0cmV0dXJuIGdldFN0YXRlKCk7XG5cdH07XG5cdHdpbmRvdy5ob3RjYXRfc2V0X3N0YXRlID0gKHN0YXRlOiBzdHJpbmcpOiBudWxsID0+IHtcblx0XHRyZXR1cm4gc2V0U3RhdGUoc3RhdGUpO1xuXHR9O1xuXHR3aW5kb3cuaG90Y2F0X2Nsb3NlX2Zvcm0gPSAoKTogdm9pZCA9PiB7XG5cdFx0Y2xvc2VGb3JtKCk7XG5cdH07XG5cdEhDLnJ1bldoZW5SZWFkeSA9IChjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRcdC8vIHJ1biB1c2VyLXJlZ2lzdGVyZWQgY29kZSBvbmNlIEhvdENhdCBpcyBmdWxseSBzZXQgdXAgYW5kIHJlYWR5LlxuXHRcdG13Lmhvb2soJ2hvdGNhdC5yZWFkeScpLmFkZChjYWxsYmFjayk7XG5cdH07XG5cdC8vIFJ1biBhcyBzb29uIGFzIHBvc3NpYmxlLiBUaGlzIHZhcmllcyBkZXBlbmRpbmcgb24gTWVkaWFXaWtpIHZlcnNpb247XG5cdC8vIHdpbmRvdydzICdsb2FkJyBldmVudCBpcyBhbHdheXMgc2FmZSwgYnV0IHVzdWFsbHkgd2UgY2FuIGRvIGJldHRlciB0aGFuIHRoYXQuXG5cdGlmIChjb25mLndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lICE9PSAnVXBsb2FkJykge1xuXHRcdC8vIFJlbG9hZCBIb3RDYXQgYWZ0ZXIgKFZFKSBlZGl0cyAoYnVnIFQxMDMyODUpXG5cdFx0bXcuaG9vaygncG9zdEVkaXQnKS5hZGQoKCkgPT4ge1xuXHRcdFx0Ly8gUmVzZXQgSG90Q2F0IGluIGNhc2UgdGhpcyBpcyBhIHNvZnQgcmVsb2FkIChlLmcuIFZpc3VhbEVkaXRvciBlZGl0KSwgdW5sZXNzIHRoZSBjYXRlZ29yaWVzXG5cdFx0XHQvLyB3ZXJlIG5vdCByZS1yZW5kZXJlZCBhbmQgb3VyIGludGVyZmFjZSBpcyBzdGlsbCB0aGVyZSAoZS5nLiBEaXNjdXNzaW9uVG9vbHMgZWRpdClcblx0XHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0bGlua3MgLmhvdGNhdGxpbmsnKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lID0gbnVsbDtcblx0XHRcdGVkaXRvcnMgPSBbXTtcblx0XHRcdGluaXRpYWxpemVkID0gZmFsc2U7XG5cdFx0XHRIQy5zdGFydGVkID0gZmFsc2U7XG5cdFx0XHRydW4oKTtcblx0XHR9KTtcblx0fVxuXHQvLyBXZSBjYW4gc2FmZWx5IHRyaWdnZXIganVzdCBhZnRlciB1c2VyIGNvbmZpZ3VyYXRpb24gaXMgbG9hZGVkLlxuXHQvLyBVc2UgYWx3YXlzKCkgaW5zdGVhZCBvZiB0aGVuKCkgdG8gYWxzbyBzdGFydCBIb3RDYXQgaWYgdGhlIHVzZXIgbW9kdWxlIGhhcyBwcm9ibGVtcy5cblx0JChydW4pO1xufSkoKTtcbiIsICJjb25zdCBnZXRNZXNzYWdlID0gKGtleTogc3RyaW5nLCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG5cdGtleSA9IGBob3RjYXQtJHtrZXl9YDtcblx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdHJldHVybiBtdy5tZXNzYWdlKGtleSwgLi4uYXJncykucGxhaW4oKTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3QgaG90Q2F0TWVzc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z1VzZXJMYW5ndWFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddLmluY2x1ZGVzKHdnVXNlckxhbmd1YWdlKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldCh7XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZW1vdmVkJzogJ+W3suenu+mZpFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXRlbXBsYXRlX3JlbW92ZWQnOiAn5bey56e76Zmke3tbW0NhdGVnb3J5OiQxXV19fScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9hZGRlZCc6ICflt7Lmt7vliqBbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0Ly8gJDIgaXMgdGhlIG5ldyBrZXlcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2tleWNoYW5nZSc6ICflt7LoqK3nva5bW0NhdGVnb3J5OiQxXV3nmoTmlrDmjpLluo/lrZfvvJpcIiQyXCInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfbm90Rm91bmQnOiAn5YiG6aGe4oCcJDHigJ3mspLmnInmib7liLAnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfZXhpc3RzJzogJ+WIhumhnuKAnCQx4oCd5bey57aT5a2Y5Zyo77yM5rKS5pyJ5re75Yqg44CCJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3Jlc29sdmVkJzogJ++8iOmHjeWumuWQkVtbQ2F0ZWdvcnk6JDFdXeW3suiZleeQhu+8iScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVuY2F0X3JlbW92ZWQnOiAn5bey56e76Zmke3t1bmNhdGVnb3JpemVkfX0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIHByZWZpeCB0byB0aGUgZWRpdCBzdW1tYXJ5LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1wcmVmaXgnOiAn5L2/55SoW1tIOkhPVENBVHxIb3RDYXRdXScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gYXBwZW5kIHRvIHRoZSBlZGl0IHN1bW1hcnkuIE5hbWVkICd1c2luZycgZm9yIGhpc3RvcmljYWwgcmVhc29ucy4gSWYgeW91IHByZWZlclxuXHRcdFx0Ly8gdG8gaGF2ZSBhIG1hcmtlciBhdCB0aGUgZnJvbnQsIHVzZSBwcmVmaXggYW5kIHNldCB0aGlzIHRvIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVzaW5nJzogJycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2NoYW5nZSc6ICckMeWAi+WIhumhnicsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeTsgaS5lLiwgYSBjYXRlZ29yeSB0aGF0IHNob3VsZCBub3QgY29udGFpblxuXHRcdFx0Ly8gYW55IGl0ZW1zLCBidXQgdGhhdCBjb250YWlucyBsaW5rcyB0byBvdGhlciBjYXRlZ29yaWVzIHdoZXJlIHN0dWZmIHNob3VsZCBiZSBjYXRlZ29yaXplZC4gSWYgeW91IGRvbid0IGhhdmVcblx0XHRcdC8vIHRoYXQgY29uY2VwdCBvbiB5b3VyIHdpa2ksIHNldCBpdCB0byBibGFuayBzdHJpbmcuIFVzZSBibGFua3MsIG5vdCB1bmRlcnNjb3Jlcy5cblx0XHRcdCdob3RjYXQtZGlzYW1iaWdfY2F0ZWdvcnknOiAnJyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIChzb2Z0KSByZWRpcmVjdCB0byBzb21lIG90aGVyIGNhdGVnb3J5IGRlZmluZWQgYnkgYSBsaW5rXG5cdFx0XHQvLyB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeS4gSWYgeW91ciB3aWtpIGRvZXNuJ3QgaGF2ZSBzb2Z0IGNhdGVnb3J5IHJlZGlyZWN0cywgc2V0IHRoaXMgdG8gbnVsbC5cblx0XHRcdC8vIElmIGEgc29mdC1yZWRpcmVjdGVkIGNhdGVnb3J5IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgbGluayB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeSwgaXQncyBjb25zaWRlcmVkXG5cdFx0XHQvLyBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5IGluc3RlYWQuXG5cdFx0XHQnaG90Y2F0LXJlZGlyX2NhdGVnb3J5JzogJ+W3sumHjeWumuWQkeeahOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNlcGFyYXRvcic6ICc7ICcsXG5cdFx0XHQvLyAkMSBpcyByZXBsYWNlZCBieSBhIG51bWJlci4gSWYgeW91ciBsYW5ndWFnZSBoYXMgc2V2ZXJhbCBwbHVyYWwgZm9ybXMgKGMuZi4gW1s6ZW53aWtpOkR1YWwgKGdyYW1tYXRpY2FsIGZvcm0pXV0pLFxuXHRcdFx0Ly8geW91IGNhbiBzZXQgdGhpcyB0byBhbiBhcnJheSBvZiBzdHJpbmdzIHN1aXRhYmxlIGZvciBwYXNzaW5nIHRvIG13Lmxhbmd1YWdlLmNvbmZpZ1BsdXJhbCgpLlxuXHRcdFx0Ly8gSWYgdGhhdCBmdW5jdGlvbiBkb2Vzbid0IGV4aXN0LCBIb3RDYXQgd2lsbCBzaW1wbHkgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBsYXN0XG5cdFx0XHQvLyBlbnRyeSBpbiB0aGUgYXJyYXkuXG5cdFx0XHQvLyBEZWZhdWx0cyB0byAnW1snICsgY2F0ZWdvcnlfY2Fub25pY2FsICsgJzokMV1dJy4gQ2FuIGJlIG92ZXJyaWRkZW4gaWYgaW4gdGhlIHNob3J0IGVkaXQgc3VtbWFyaWVzXG5cdFx0XHQvLyBub3QgdGhlIHN0YW5kYXJkIGNhdGVnb3J5IG5hbWUgc2hvdWxkIGJlIHVzZWQgYnV0LCBzYXksIGEgc2hvcnRlciBuYW1lc3BhY2UgYWxpYXMuICQxIGlzIHJlcGxhY2VkXG5cdFx0XHQvLyBieSBhIGNhdGVnb3J5IG5hbWUuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZSc6ICckMScsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jb21taXQnOiAn5YSy5a2YJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW9rJzogJ+eiuuWumicsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYW5jZWwnOiAn5Y+W5raIJyxcblx0XHRcdC8vIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfZXJyb3InOlxuXHRcdFx0XHQn54Sh5rOV5b6e5Ly65pyN5Zmo5Y+W5b6X6aCB6Z2i5paH5a2X44CC5Zug5q2k77yM5oKo55qE5YiG6aGe6K6K5pu054Sh5rOV5YSy5a2Y44CC5oiR5YCR54K65q2k5LiN5L6/6KGo56S65oqx5q2J44CCJyxcblx0XHRcdC8vIFBsdXJhbCBvZiBjYXRlZ29yeV9jYW5vbmljYWwuXG5cdFx0XHQnaG90Y2F0LWNhdGVnb3JpZXMnOiAn5YiG6aGeJyxcblx0XHRcdC8vIE5hbWVzIGZvciB0aGUgc2VhcmNoIGVuZ2luZXNcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXNlYXJjaGluZGV4JzogJ+aQnOWwi+e0ouW8lScsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYWdlbGlzdCc6ICfpoIHpnaLliJfooagnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtY29tYmluZWQnOiAn5ZCI5L215pCc5bCLJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXN1YmNhdCc6ICflrZDliIbpoZ4nLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFyZW50Y2F0JzogJ+S4iuWxpOWIhumhnicsXG5cdFx0XHQvLyBUaGUgdG9vbHRpcHMgZm9yIHRoZSBhYm92ZSBsaW5rc1xuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1jaGFuZ2UnOiAn5L+u5pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVtb3ZlJzogJ+enu+mZpCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWFkZCc6ICflop7liqDkuIDlgIvmlrDliIbpoZ4nLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZXN0b3JlJzogJ+W+qeWOn+iuiuabtCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVuZG8nOiAn5b6p5Y6f6K6K5pu0Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtZG93bic6ICfmiZPplovku6Xkv67mlLnkuKbpoa/npLrlrZDliIbpoZ4nLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11cCc6ICfmiZPplovku6Xkv67mlLnkuKbpoa/npLrkuIrlsaTliIbpoZ4nLFxuXHRcdFx0Ly8gVG9vbHRpcCBmb3IgdGhlIFwiZW50ZXIgbXVsdGktbW9kZVwiIGxpbmtcblx0XHRcdCdob3RjYXQtbXVsdGlfdG9vbHRpcCc6ICfkv67mlLnlpJrlgIvliIbpoZ4nLFxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldCh7XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZW1vdmVkJzogJ+W3suenu+mZpFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXRlbXBsYXRlX3JlbW92ZWQnOiAn5bey56e76Zmke3tbW0NhdGVnb3J5OiQxXV19fScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9hZGRlZCc6ICflt7Lmt7vliqBbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0Ly8gJDIgaXMgdGhlIG5ldyBrZXlcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2tleWNoYW5nZSc6ICflt7Lorr7nva5bW0NhdGVnb3J5OiQxXV3nmoTmlrDmjpLluo/lrZfvvJpcIiQyXCInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfbm90Rm91bmQnOiAn5YiG57G74oCcJDHigJ3msqHmnInmib7liLAnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfZXhpc3RzJzogJ+WIhuexu+KAnCQx4oCd5bey57uP5a2Y5Zyo77yM5rKh5pyJ5re75Yqg44CCJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3Jlc29sdmVkJzogJ++8iOmHjeWumuWQkVtbQ2F0ZWdvcnk6JDFdXeW3suWkhOeQhu+8iScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVuY2F0X3JlbW92ZWQnOiAn5bey56e76Zmke3t1bmNhdGVnb3JpemVkfX0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIHByZWZpeCB0byB0aGUgZWRpdCBzdW1tYXJ5LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1wcmVmaXgnOiAn5L2/55SoW1tIOkhPVENBVHxIb3RDYXRdXScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gYXBwZW5kIHRvIHRoZSBlZGl0IHN1bW1hcnkuIE5hbWVkICd1c2luZycgZm9yIGhpc3RvcmljYWwgcmVhc29ucy4gSWYgeW91IHByZWZlclxuXHRcdFx0Ly8gdG8gaGF2ZSBhIG1hcmtlciBhdCB0aGUgZnJvbnQsIHVzZSBwcmVmaXggYW5kIHNldCB0aGlzIHRvIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVzaW5nJzogJycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2NoYW5nZSc6ICckMeS4quWIhuexuycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeTsgaS5lLiwgYSBjYXRlZ29yeSB0aGF0IHNob3VsZCBub3QgY29udGFpblxuXHRcdFx0Ly8gYW55IGl0ZW1zLCBidXQgdGhhdCBjb250YWlucyBsaW5rcyB0byBvdGhlciBjYXRlZ29yaWVzIHdoZXJlIHN0dWZmIHNob3VsZCBiZSBjYXRlZ29yaXplZC4gSWYgeW91IGRvbid0IGhhdmVcblx0XHRcdC8vIHRoYXQgY29uY2VwdCBvbiB5b3VyIHdpa2ksIHNldCBpdCB0byBibGFuayBzdHJpbmcuIFVzZSBibGFua3MsIG5vdCB1bmRlcnNjb3Jlcy5cblx0XHRcdCdob3RjYXQtZGlzYW1iaWdfY2F0ZWdvcnknOiAnJyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIChzb2Z0KSByZWRpcmVjdCB0byBzb21lIG90aGVyIGNhdGVnb3J5IGRlZmluZWQgYnkgYSBsaW5rXG5cdFx0XHQvLyB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeS4gSWYgeW91ciB3aWtpIGRvZXNuJ3QgaGF2ZSBzb2Z0IGNhdGVnb3J5IHJlZGlyZWN0cywgc2V0IHRoaXMgdG8gbnVsbC5cblx0XHRcdC8vIElmIGEgc29mdC1yZWRpcmVjdGVkIGNhdGVnb3J5IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgbGluayB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeSwgaXQncyBjb25zaWRlcmVkXG5cdFx0XHQvLyBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5IGluc3RlYWQuXHRcdFx0J2hvdGNhdC1yZWRpcl9jYXRlZ29yeSc6ICflt7Lph43lrprlkJHnmoTliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zZXBhcmF0b3InOiAnOyAnLFxuXHRcdFx0Ly8gJDEgaXMgcmVwbGFjZWQgYnkgYSBudW1iZXIuIElmIHlvdXIgbGFuZ3VhZ2UgaGFzIHNldmVyYWwgcGx1cmFsIGZvcm1zIChjLmYuIFtbOmVud2lraTpEdWFsIChncmFtbWF0aWNhbCBmb3JtKV1dKSxcblx0XHRcdC8vIHlvdSBjYW4gc2V0IHRoaXMgdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyBzdWl0YWJsZSBmb3IgcGFzc2luZyB0byBtdy5sYW5ndWFnZS5jb25maWdQbHVyYWwoKS5cblx0XHRcdC8vIElmIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBleGlzdCwgSG90Q2F0IHdpbGwgc2ltcGx5IGZhbGwgYmFjayB0byB1c2luZyB0aGUgbGFzdFxuXHRcdFx0Ly8gZW50cnkgaW4gdGhlIGFycmF5LlxuXHRcdFx0Ly8gRGVmYXVsdHMgdG8gJ1tbJyArIGNhdGVnb3J5X2Nhbm9uaWNhbCArICc6JDFdXScuIENhbiBiZSBvdmVycmlkZGVuIGlmIGluIHRoZSBzaG9ydCBlZGl0IHN1bW1hcmllc1xuXHRcdFx0Ly8gbm90IHRoZSBzdGFuZGFyZCBjYXRlZ29yeSBuYW1lIHNob3VsZCBiZSB1c2VkIGJ1dCwgc2F5LCBhIHNob3J0ZXIgbmFtZXNwYWNlIGFsaWFzLiAkMSBpcyByZXBsYWNlZFxuXHRcdFx0Ly8gYnkgYSBjYXRlZ29yeSBuYW1lLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnOiAnJDEnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY29tbWl0JzogJ+S/neWtmCcsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1vayc6ICfnoa7lrponLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2FuY2VsJzogJ+WPlua2iCcsXG5cdFx0XHQvLyBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2Vycm9yJzpcblx0XHRcdFx0J+aXoOazleS7juacjeWKoeWZqOWPluW+l+mhtemdouaWh+Wtl+OAguWboOatpO+8jOaCqOeahOWIhuexu+abtOaUueaXoOazleS/neWtmOOAguaIkeS7rOS4uuatpOS4jeS+v+ihqOekuuaKseatieOAgicsXG5cdFx0XHQvLyBQbHVyYWwgb2YgY2F0ZWdvcnlfY2Fub25pY2FsLlxuXHRcdFx0J2hvdGNhdC1jYXRlZ29yaWVzJzogJ+WIhuexuycsXG5cdFx0XHQvLyBOYW1lcyBmb3IgdGhlIHNlYXJjaCBlbmdpbmVzXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zZWFyY2hpbmRleCc6ICfmkJzntKLntKLlvJUnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFnZWxpc3QnOiAn6aG16Z2i5YiX6KGoJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLWNvbWJpbmVkJzogJ+WQiOW5tuaQnOe0oicsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zdWJjYXQnOiAn5a2Q5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhcmVudGNhdCc6ICfkuIrlsYLliIbnsbsnLFxuXHRcdFx0Ly8gVGhlIHRvb2x0aXBzIGZvciB0aGUgYWJvdmUgbGlua3Ncblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtY2hhbmdlJzogJ+S/ruaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlbW92ZSc6ICfnp7vpmaQnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1hZGQnOiAn5aKe5Yqg5LiA5Liq5paw5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVzdG9yZSc6ICfmkqTplIDmm7TmlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11bmRvJzogJ+aSpOmUgOabtOaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWRvd24nOiAn5omT5byA5Lul5L+u5pS55bm25pi+56S65a2Q5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdXAnOiAn5omT5byA5Lul5L+u5pS55bm25pi+56S65LiK5bGC5YiG57G7Jyxcblx0XHRcdC8vIFRvb2x0aXAgZm9yIHRoZSBcImVudGVyIG11bHRpLW1vZGVcIiBsaW5rXG5cdFx0XHQnaG90Y2F0LW11bHRpX3Rvb2x0aXAnOiAn5L+u5pS55aSa5Liq5YiG57G7Jyxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtob3RDYXRNZXNzYWdlc307XG4iLCAiPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjIyLjVcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeGxpbms6aHJlZj1cIiNhXCIgaWQ9XCJiXCIgeDE9XCI5Mi42MDRcIiB4Mj1cIjI2My44M1wiIHkxPVwiMzA0LjUxXCIgeTI9XCIyNi4yOVwiIGdyYWRpZW50VHJhbnNmb3JtPVwicm90YXRlKC0zMS42MSAxNS4yMSA2LjQwMylzY2FsZSguMDU1NDQpXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIvPjxsaW5lYXJHcmFkaWVudCBpZD1cImFcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiNhMGEzZTFcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjZGVkY2ZhXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9XCJ1cmwoI2IpXCIgZD1cIk0yMS40NzEgNi4wMzRBOC40MjcgMTAuNTM0IDU4LjM5IDEgMSAzLjUyOCAxNy4wNzcgOC40MjcgMTAuNTM0IDU4LjM5IDEgMSAyMS40NzEgNi4wMzRcIi8+PHVzZSB4bGluazpocmVmPVwiI2NcIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjM2MFwiIG9wYWNpdHk9XCIuM1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxLjEwOSAxLjEwOSlcIi8+PHBhdGggaWQ9XCJjXCIgZmlsbD1cIiMwMDBcIiBmaWxsLW9wYWNpdHk9XCIxXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cImJ1dHRcIiBzdHJva2UtbGluZWpvaW49XCJtaXRlclwiIHN0cm9rZS1vcGFjaXR5PVwiMVwiIHN0cm9rZS13aWR0aD1cIi4wNTVcIiBkPVwiTTcuNzcxIDE3LjI3NmgyLjE2NGMuOTA1LTIuNzY3IDQuNDI3LTkuMzc0IDcuNDQ2LTExLjY4OC42MjYtLjgwNC0uOTQ2LTEuMTM2LTIuMjE0LS42MDQtMS45MS44MDItNy45IDExLjEzNS03LjM5NiAxMi4yOTJNOS4wNzMgNS4zMUg2Ljg1NmMtLjE5Ni4zMzUgNy4wNDUgOC42OTcgOS4zNiAxMS43MTYuODAzLjYyNiAxLjEzNS0uOTQ2LjYwMy0yLjIxNC0uODAyLTEuOTEtNi43OTMtNy43MS03Ljc0Ni05LjUwMlwiLz48L3N2Zz4iLCAiPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjIyLjVcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeGxpbms6aHJlZj1cIiNhXCIgaWQ9XCJiXCIgeDE9XCI5Mi42MDRcIiB4Mj1cIjI2My44M1wiIHkxPVwiMzA0LjUxXCIgeTI9XCIyNi4yOVwiIGdyYWRpZW50VHJhbnNmb3JtPVwicm90YXRlKC0zMS42MSAxNS4yMSA2LjQwMylzY2FsZSguMDU1NDQpXCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIvPjxsaW5lYXJHcmFkaWVudCBpZD1cImFcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiNhMGEzZTFcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjZGVkY2ZhXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9XCJ1cmwoI2IpXCIgZD1cIk0yMS40NzIgNi4wMzRBOC40MjggMTAuNTM0IDU4LjM5MSAxIDEgMy41MjggMTcuMDc3IDguNDI4IDEwLjUzNCA1OC4zOTEgMSAxIDIxLjQ3MiA2LjAzNFwiLz48dXNlIHhsaW5rOmhyZWY9XCIjY1wiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiMzYwXCIgb3BhY2l0eT1cIi4zXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEuMTA5IDEuMTA5KVwiLz48cGF0aCBpZD1cImNcIiBmaWxsPVwiIzAwMFwiIGZpbGwtb3BhY2l0eT1cIjFcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwiYnV0dFwiIHN0cm9rZS1saW5lam9pbj1cIm1pdGVyXCIgc3Ryb2tlLW9wYWNpdHk9XCIxXCIgc3Ryb2tlLXdpZHRoPVwiLjA1NVwiIGQ9XCJNNS42NCAxMy44NHMyLjUxNSAyLjgzMyAzLjAxOCAzLjk5aDIuMTY0Yy45MDUtMi43NjcgNC40MjctOS4zNzMgNy40NDYtMTEuNjg4LjYyNi0uODA0LS45NDUtMS4xMzYtMi4yMTMtLjYwMy0xLjkxMi44MDItNS41MTYgNi45MjgtNi4xOSA4LjQwMi0uOTU1LjI1Mi0xLjk2Mi0xLjYxLTEuOTYyLTEuNjFaXCIvPjwvc3ZnPiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBd0JDLFFBQUEsaUJBQUE7QUFHeEIsSUFBTUMsUUFBeUNDLGVBQWM7QUFDNUQsVUFBQSxHQUFPSCxrQkFBQUksV0FBVUQsU0FBUztBQUMzQjs7Q0NNQyxTQUFTRSxjQUFjO0FBQ3ZCLE1BQ0NDLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CLE1BQU0sS0FDdkNDLE9B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QUFDTixHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIm13QXBpIiwgInVzZXJBZ2VudCIsICJpbml0TXdBcGkiLCAiaG90Q2F0Q2hlY2siLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ3aW5kb3ciLCAiSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0T3B0T3V0IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiYXBpIiwgImNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCIsICJzZWxmTmFtZSIsICJzdG9yYWdlSXRlbU5hbWUiLCAic3RvcmFnZUl0ZW0iLCAic3RvcmFnZSIsICJjcmVhdGVqSWNvbiIsICJpY29uQ2xhc3MiLCAiJCIsICJhdHRyIiwgImNvbmNhdCIsICJ0ZXh0IiwgImNyZWF0ZU5vdGlmeUFyZWEiLCAidGV4dE5vZGUiLCAiaWNvbiIsICJzdGF0ZSIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiY3NzIiwgInBhZGRpbmciLCAib25lIiwgImUiLCAiX3NlbGYkd3BUZXh0Ym94MSR2YWx1IiwgInNlbGYiLCAibmV3VmFsIiwgIndwVGV4dGJveDEiLCAidmFsdWUiLCAicmVwbGFjZSIsICIkZGlhbG9nQ2hlY2tTdG9yYWdlIiwgIiRwZXJtYVNhdmVIaW50IiwgIiR0ZXh0SGludE5vZGUiLCAiJGRpYWxvZyIsICIkb3ZlcmxheSIsICJkb1JlbW92ZSIsICJ3cFN1bW1hcnkiLCAid3JpdGVTdG9yYWdlIiwgInZhbCIsICJzZXQiLCAiY2xvc2VEaWFsb2ciLCAiXyRvdmVybGF5IiwgIm9mZiIsICJyZW1vdmUiLCAiZmluZCIsICJ0cmlnZ2VyIiwgImZpbmlzaERpYWxvZyIsICJzdG9yYWdlVmFsdWUiLCAiXyRkaWFsb2dDaGVja1N0b3JhZ2UkIiwgImNoZWNrZWQiLCAiX2FkZFRvSlMiLCAiX2UiLCAicHJldmVudERlZmF1bHQiLCAiaGFzQ2xhc3MiLCAiJGVsIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgInRpdGxlIiwgInN1bW1hcnkiLCAiYXBwZW5kdGV4dCIsICJkYXRhIiwgImVkaXREb25lIiwgImVkaXRTdGF0IiwgImVycm9yIiwgIm5vdGlmeSIsICJjb2RlIiwgImluZm8iLCAidGFnIiwgInR5cGUiLCAiaGlkZSIsICJwb3N0V2l0aFRva2VuIiwgInRoZW4iLCAicHJvbXB0IiwgImlkIiwgIm9uIiwgInNob3ciLCAiYXBwZW5kVG8iLCAiZGlzcGxheSIsICJ1c2VyIiwgImlzQW5vbiIsICJyb2xlIiwgInByZXBlbmQiLCAiZmlyc3QiLCAiZXZlbnQiLCAidGFyZ2V0IiwgImtleSIsICJIb3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQiLCAiJG9rTGluayIsICJocmVmIiwgImRvRWRpdCIsICJyZXN1bHQiLCAibm9jcmVhdGUiLCAiJGJvZHkiLCAiYWpheCIsICJ1cmwiLCAiZGF0YVR5cGUiLCAic3VjY2VzcyIsICJjYWNoZSIsICJsb2FkSG90Q2F0Q2hlY2siLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldE1lc3NhZ2UiLCAiYXJncyIsICJtZXNzYWdlIiwgInBsYWluIiwgImhvdENhdE1lc3NhZ2VzIiwgIndnVXNlckxhbmd1YWdlIiwgImluY2x1ZGVzIiwgIm1lc3NhZ2VzIiwgIlBfbm9fZGVmYXVsdCIsICJQX3llc19kZWZhdWx0IiwgImhvdENhdCIsICJfZm9ybWF0dGVkTmFtZXNwYWNlcyQyIiwgImNvbmYiLCAiSG90Q2F0IiwgIm5vZGVOYW1lIiwgIndnQWN0aW9uIiwgIkhDIiwgImxpbmtzIiwgImNoYW5nZSIsICJhZGQiLCAicmVzdG9yZSIsICJ1bmRvIiwgImRvd24iLCAidXAiLCAiY2hhbmdlVGFnIiwgImFkZG11bHRpIiwgImRpc2FibGUiLCAibnMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAibnNJZHMiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dBcnRpY2xlSWQiLCAidGVzdCIsICJ3Z1RpdGxlIiwgInVuY2F0X3JlZ2V4cCIsICJleGlzdHNZZXMiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImV4aXN0c05vIiwgInRlbXBsYXRlX2NhdGVnb3JpZXMiLCAiY2FwaXRhbGl6ZVBhZ2VOYW1lcyIsICJ1cGxvYWRfZGlzYWJsZWQiLCAiYmxhY2tsaXN0IiwgImJnX2NoYW5nZWQiLCAibm9fYXV0b2NvbW1pdCIsICJkZWxfbmVlZHNfZGlmZiIsICJzdWdnZXN0X2RlbGF5IiwgImVkaXRib3hfd2lkdGgiLCAic3VnZ2VzdGlvbnMiLCAiZml4ZWRfc2VhcmNoIiwgInVzZV91cF9kb3duIiwgImxpc3RTaXplIiwgInNpbmdsZV9taW5vciIsICJkb250X2FkZF90b193YXRjaGxpc3QiLCAic2hvcnRjdXRzIiwgImFkZFNob3J0Y3V0cyIsICJtYXAiLCAiayIsICJPYmplY3QiLCAiaGFzT3duIiwgInYiLCAidHJpbSIsICJsZW5ndGgiLCAiY2F0ZWdvcnlfY2Fub25pY2FsIiwgImNhdGVnb3J5X3JlZ2V4cCIsICJ0ZW1wbGF0ZV9yZWdleHAiLCAidWEiLCAibmF2aWdhdG9yIiwgInRvTG93ZXJDYXNlIiwgImlzX3dlYmtpdCIsICJjYXRfcHJlZml4IiwgIm5vU3VnZ2VzdGlvbnMiLCAid2lraVRleHRCbGFuayIsICJTdHJpbmciLCAicmF3IiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgIndpa2lUZXh0QmxhbmtSRSIsICJSZWdFeHAiLCAid2lraVRleHRCbGFua09yQmlkaSIsICJfdGVtcGxhdGVPYmplY3QyIiwgImZvcm1hdHRlZE5hbWVzcGFjZXMiLCAid2dGb3JtYXR0ZWROYW1lc3BhY2VzIiwgIm5hbWVzcGFjZUlkcyIsICJhdXRvTG9jYWxpemUiLCAibmFtZXNwYWNlTnVtYmVyIiwgImZhbGxiYWNrIiwgIl9mb3JtYXR0ZWROYW1lc3BhY2VzJCIsICJjcmVhdGVSZWdleHBTdHIiLCAibmFtZSIsICJyZWdleF9uYW1lIiwgImkiLCAiaW5pdGlhbCIsICJjaGFyQXQiLCAibGwiLCAidWwiLCAidG9VcHBlckNhc2UiLCAiX3RlbXBsYXRlT2JqZWN0MyIsICJjYW5vbmljYWwiLCAicmVnZXhwIiwgImNhdF9uYW1lIiwgIm1ha2UiLCAiYXJnIiwgImxpdGVyYWwiLCAiY3JlYXRlVGV4dE5vZGUiLCAiY3JlYXRlRWxlbWVudCIsICJwYXJhbSIsICJ1cmkiLCAibG9jYXRpb24iLCAicmUiLCAibSIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJzY3JpcHQiLCAid2dTY3JpcHQiLCAiaW5kZXhPZiIsICJ3Z1NlcnZlciIsICJzbGljZSIsICJwcm90b2NvbCIsICJwcmVmaXgiLCAid2dBcnRpY2xlUGF0aCIsICJjbGFzc05hbWUiLCAic2V0U3R5bGVQcm9wZXJ0eSIsICJlbGVtZW50IiwgInByb3BlcnR5IiwgInN0eWxlIiwgImNhcGl0YWxpemUiLCAic3RyIiwgIndpa2lQYWdlUGF0aCIsICJwYWdlTmFtZSIsICJlc2NhcGVSRSIsICJfdGVtcGxhdGVPYmplY3Q0IiwgInN1YnN0aXR1dGVGYWN0b3J5IiwgIm9wdGlvbnMiLCAibGVhZCIsICJpbmRpY2F0b3IiLCAibGJyYWNlIiwgInJicmFjZSIsICJtYXRjaCIsICJpZHgiLCAiYWxwaGEiLCAicmVwbGFjZW1lbnQiLCAicmVwbGFjZVNob3J0Y3V0cyIsICJyZXBsYWNlSGFzaCIsICJzIiwgImZpbmRDYXRzUkUiLCAicmVwbGFjZUJ5QmxhbmtzIiwgImZpbmRfY2F0ZWdvcnkiLCAid2lraXRleHQiLCAiY2F0ZWdvcnkiLCAib25jZSIsICJjYXRfcmVnZXgiLCAibm93aWtpUmVnZXgiLCAiX3RlbXBsYXRlT2JqZWN0NSIsICJjb3BpZWR0ZXh0IiwgImN1cnJfbWF0Y2giLCAiaW50ZXJsYW5ndWFnZVJFIiwgImNoYW5nZV9jYXRlZ29yeSIsICJ0b1JlbW92ZSIsICJ0b0FkZCIsICJpc19oaWRkZW4iLCAiZmluZF9pbnNlcnRpb25wb2ludCIsICJfd2lraXRleHQiLCAiX3RlbXBsYXRlT2JqZWN0NiIsICJpbmRleCIsICJsYXN0SW5kZXgiLCAib25DYXQiLCAibmFtZVNwYWNlIiwgImtleUNoYW5nZSIsICJtYXRjaGVzIiwgImNhdF9wb2ludCIsICJtYXRjaGVzQXJyYXkiLCAiZmlyc3RNYXRjaCIsICJiZWZvcmUiLCAiTWF0aCIsICJtYXgiLCAiYWZ0ZXIiLCAiX2ZpcnN0TWF0Y2gkIiwgInNlYXJjaCIsICJqIiwgInBvaW50IiwgIm5ld2NhdHN0cmluZyIsICJzdWZmaXgiLCAidHh0IiwgImV2dEtleXMiLCAiY3RybEtleSIsICJtZXRhS2V5IiwgInNoaWZ0S2V5IiwgImV2dEtpbGwiLCAiX2V2ZW50JHN0b3BQcm9wYWdhdGlvIiwgInN0b3BQcm9wYWdhdGlvbiIsICJjYWxsIiwgImNhbmNlbEJ1YmJsZSIsICJjYXRMaW5lIiwgIm9uVXBsb2FkIiwgImVkaXRvcnMiLCAiY29tbWl0QnV0dG9uIiwgImNvbW1pdEZvcm0iLCAibXVsdGlTcGFuIiwgInBhZ2VUZXh0IiwgInBhZ2VUaW1lIiwgInBhZ2VXYXRjaGVkIiwgIndhdGNoQ3JlYXRlIiwgIndhdGNoRWRpdCIsICJtaW5vckVkaXRzIiwgImVkaXRUb2tlbiIsICJpc19ydGwiLCAic2VydmVyVGltZSIsICJsYXN0UmV2SWQiLCAicGFnZVRleHRSZXZJZCIsICJjb25mbGljdGluZ1VzZXIiLCAibmV3RE9NIiwgIlVOQ0hBTkdFRCIsICJPUEVOIiwgIkNIQU5HRV9QRU5ESU5HIiwgIkNIQU5HRUQiLCAiREVMRVRFRCIsICJzZXRQYWdlIiwgInN0YXJ0VGltZSIsICJxdWVyeSIsICJfZGF0YSRxdWVyeSR1c2VyaW5mbyIsICJwYWdlcyIsICJwYWdlIiwgInJldmlzaW9ucyIsICJsYXRlc3RSZXZpc2lvbiIsICJjb25mbGljdGluZ1JldmlzaW9uIiwgInNsb3RzIiwgIm1haW4iLCAiY29udGVudCIsICJ0aW1lc3RhbXAiLCAicmV2aWQiLCAiX2NvbmZsaWN0aW5nUmV2aXNpb24kIiwgImxhc3RyZXZpZCIsICJzdGFydHRpbWVzdGFtcCIsICJ3YXRjaGVkIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAibGFuZ2xpbmtzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJuIiwgImRvbmUiLCAibGFuZ2xpbmsiLCAibGFuZyIsICJfdGVtcGxhdGVPYmplY3Q3IiwgImVyciIsICJmIiwgImdlbmVyYWwiLCAidGltZSIsICJjYXNlIiwgInVzZXJpbmZvIiwgIndhdGNoY3JlYXRpb25zIiwgIndhdGNoZGVmYXVsdCIsICJtaW5vcmRlZmF1bHQiLCAic2F2ZUluUHJvZ3Jlc3MiLCAiaW5pdGlhdGVFZGl0IiwgImZhaWx1cmUiLCAib2xkQnV0dG9uU3RhdGUiLCAiZGlzYWJsZWQiLCAiZmFpbCIsICJmb3JtYXR2ZXJzaW9uIiwgInJhd2NvbnRpbnVlIiwgInRpdGxlcyIsICJ3Z1BhZ2VOYW1lIiwgInByb3AiLCAiaW5wcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInJ2bGltaXQiLCAicnZkaXIiLCAicnZzdGFydGlkIiwgIndnQ3VyUmV2aXNpb25JZCIsICJsbGxpbWl0IiwgIm1ldGEiLCAidWlwcm9wIiwgInN0YXR1cyIsICJzdGF0dXNUZXh0IiwgIm11bHRpQ2hhbmdlTXNnIiwgImNvdW50IiwgImN1cnJlbnRUaW1lc3RhbXAiLCAibm93IiwgIkRhdGUiLCAidHMiLCAiZ2V0VVRDRnVsbFllYXIiLCAidHdvIiwgImdldFVUQ01vbnRoIiwgImdldFVUQ0RhdGUiLCAiZ2V0VVRDSG91cnMiLCAiZ2V0VVRDTWludXRlcyIsICJnZXRVVENTZWNvbmRzIiwgInBlcmZvcm1DaGFuZ2VzIiwgInNpbmdsZUVkaXRvciIsICJzZWxmRWRpdENvbmZsaWN0IiwgIndnVXNlck5hbWUiLCAibm9Db21taXQiLCAid3BFZGl0VG9rZW4iLCAid3BEaWZmIiwgIndwU2F2ZSIsICJjaGFuZ2VkIiwgImFkZGVkIiwgImRlbGV0ZWQiLCAidG9FZGl0IiwgImVkaXQiLCAiY2hhbmdlcyIsICJvcmlnaW5hbENhdGVnb3J5IiwgImN1cnJlbnRDYXRlZ29yeSIsICJjdXJyZW50S2V5IiwgImN1cnJlbnRIaWRkZW4iLCAiZnJvbSIsICJ0byIsICJ3cE1pbm9yZWRpdCIsICJ3cFdhdGNodGhpcyIsICJ3cENoYW5nZVRhZ3MiLCAid3BBdXRvU3VtbWFyeSIsICJqb2luIiwgInNob3J0U3VtbWFyeSIsICJhcnJvdyIsICJqb2luZWRTdW1tYXJ5IiwgImZpbmFsU3VtbWFyeSIsICJ3cFN0YXJ0dGltZSIsICJ3cEVkaXR0aW1lIiwgIm9sZGlkIiwgImhjQ29tbWl0IiwgImNsaWNrIiwgInJlc29sdmVPbmUiLCAidG9SZXNvbHZlIiwgImNhdHMiLCAiY2F0ZWdvcmllcyIsICJpc19kYWIiLCAiaXNfcmVkaXIiLCAicmVkaXJlY3QiLCAiY2F0ZWdvcnlpbmZvIiwgImhpZGRlbiIsICJpc19taXNzaW5nIiwgIm1pc3NpbmciLCAicGFnZVRpdGxlIiwgImVkaXRvciIsICJkYWJJbnB1dENsZWFuZWQiLCAiaW5wdXRFeGlzdHMiLCAic3JjIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImNhdF8iLCAiY2F0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImxpbmsiLCAiZGFiIiwgInJlc29sdmVSZWRpcmVjdHMiLCAicCIsICJyZXNvbHZlTXVsdGkiLCAiY2FsbGJhY2siLCAiZGFiSW5wdXQiLCAibGFzdElucHV0IiwgInBsbmFtZXNwYWNlIiwgInBsbGltaXQiLCAiY2xsaW1pdCIsICJqc29uIiwgInJlcSIsICJtYWtlQWN0aXZlIiwgIndoaWNoIiwgImlzX2FjdGl2ZSIsICJfaSIsICJfZWRpdG9ycyIsICJpbmFjdGl2YXRlIiwgInNob3dEYWIiLCAiZXhwZWN0ZWRJbnB1dCIsICJsYXN0UmVhbElucHV0IiwgImFjdHVhbFZhbHVlIiwgInNob3dzTGlzdCIsICJzcGxpdCIsICJsYXN0U2VsZWN0aW9uIiwgInN0YXJ0IiwgImVuZCIsICJkaXNwbGF5TGlzdCIsICJzZXRUaW1lb3V0IiwgInNldFNlbGVjdGlvbiIsICJzaG93U3VnZ2VzdGlvbnMiLCAibXVsdGlTdWJtaXQiLCAiX2kyIiwgIl9lZGl0b3JzMiIsICJtc2ciLCAicmVzb2x2ZWQiLCAiZmlyc3REYWIiLCAiZG9udENoYW5nZSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJhY2NlcHRDaGVjayIsICJjb21taXQiLCAic2V0TXVsdGlJbnB1dCIsICJhZGRFdmVudExpc3RlbmVyIiwgInJlcGxhY2VXaXRoIiwgImNoZWNrTXVsdGlJbnB1dCIsICJoYXNDaGFuZ2VzIiwgIl9pMyIsICJfZWRpdG9yczMiLCAidG9DYXRlZ29yeVRpdGxlcyIsICJtZW1iZXJzIiwgIm1lbWJlciIsICJzdWdnZXN0aW9uRW5naW5lcyIsICJvcGVuc2VhcmNoIiwgImhhbmRsZXIiLCAicXVlcnlSZXN1bHQiLCAicXVlcnlLZXkiLCAiZXhpc3RzIiwgInNwbGljZSIsICJub3JtYWxpemVkIiwgImludGVybmFsc2VhcmNoIiwgIl9xdWVyeVJlc3VsdCRxdWVyeSIsICJhbGxwYWdlcyIsICJfcXVlcnlSZXN1bHQkcXVlcnkyIiwgIl90aXRsZSIsICJzdWJjYXRlZ29yaWVzIiwgIl9xdWVyeVJlc3VsdCRxdWVyeTMiLCAiY2F0ZWdvcnltZW1iZXJzIiwgInBhcmVudGNhdGVnb3JpZXMiLCAiX3F1ZXJ5UmVzdWx0JHF1ZXJ5NCIsICJzdWdnZXN0aW9uQ29uZmlncyIsICJzZWFyY2hpbmRleCIsICJlbmdpbmVzIiwgInRlbXAiLCAibm9Db21wbGV0aW9uIiwgInBhZ2VsaXN0IiwgImNvbWJpbmVkIiwgInN1YmNhdCIsICJwYXJlbnRjYXQiLCAiQlMiLCAiVEFCIiwgIlJFVCIsICJFU0MiLCAiU1BBQ0UiLCAiUEdVUCIsICJQR0RPV04iLCAiVVAiLCAiRE9XTiIsICJERUwiLCAiSU1FIiwgIkNhdGVnb3J5RWRpdG9yIiwgImlzQ29tcG9zaXRpb25TdGFydCIsICJpc0FkZENhdGVnb3J5IiwgImNhdExpbmsiLCAib3JpZ2luYWxLZXkiLCAib3JpZ2luYWxFeGlzdHMiLCAib3JpZ2luYWxIaWRkZW4iLCAib3JpZ2luYWxTdGF0ZSIsICJsaW5rU3BhbiIsICJub3JtYWxMaW5rcyIsICJ1bmRlbExpbmsiLCAidXBEb3duTGlua3MiLCAidW5kb0xpbmsiLCAibGluZSIsICJzcGFuIiwgImVuZ2luZSIsICJlbmdpbmVOYW1lIiwgImVuZ2luZVNlbGVjdG9yIiwgImZvcm0iLCAibGlzdCIsICJvayIsICJjYW5jZWxCdXR0b24iLCAiY3VycmVudEV4aXN0cyIsICJsYXN0U2F2ZWRTdGF0ZSIsICJsYXN0U2F2ZWRDYXRlZ29yeSIsICJsYXN0U2F2ZWRLZXkiLCAibGFzdFNhdmVkRXhpc3RzIiwgImxhc3RTYXZlZEhpZGRlbiIsICJsYXN0UXVlcnkiLCAiaW1lIiwgInVzZXNDb21wb3NpdGlvbiIsICJsYXN0S2V5IiwgImtleUNvdW50IiwgImNhbGxiYWNrT2JqIiwgImNvbnN0cnVjdG9yIiwgImluaXRpYWxpemUiLCAiZGlyIiwgImZpcnN0Q2hpbGQiLCAibWFrZUxpbmtTcGFuIiwgImFmdGVyRWxlbWVudCIsICJhZGRTcGFuIiwgInBhcmVudE5vZGUiLCAiaW5zZXJ0QmVmb3JlIiwgIm5leHRTaWJsaW5nIiwgIm9wZW4iLCAiYmluZCIsICJvdXRlclNwYW4iLCAiaW52b2tlU3VnZ2VzdGlvbnMiLCAiZG9udF9hdXRvY29tcGxldGUiLCAidGV4dGNoYW5nZSIsICJtYWtlRm9ybSIsICJtZXRob2QiLCAiYWNjZXB0IiwgInNpemUiLCAicHJvY2Vzc0tleSIsICJyZXNldEtleVNlbGVjdGlvbiIsICJjYW5jZWwiLCAiTnVtYmVyIiwgInNhdmVWaWV3IiwgImhpZ2hsaWdodFN1Z2dlc3Rpb24iLCAiZm9jdXMiLCAib3B0IiwgInNlbGVjdGVkIiwgInNlbGVjdGVkSW5kZXgiLCAiT0siLCAicG9zaXRpb24iLCAid2hpdGVTcGFjZSIsICJfaTQiLCAiX2VkaXRvcnM0IiwgInJlYWRPbmx5IiwgInJlbW92ZUVkaXRvciIsICJiYWNrZ3JvdW5kQ29sb3IiLCAibmV4dCIsICJyb2xsYmFjayIsICJkb250Q2hlY2siLCAic2FuaXRpemVJbnB1dCIsICJjbG9zZSIsICJfaTUiLCAiX2VkaXRvcnM1IiwgImNzc1RleHQiLCAidGV4dERlY29yYXRpb24iLCAic2VsZWN0RW5naW5lIiwgIm1ha2VDYWxsIiwgImNsZWFuS2V5IiwgImNiIiwgInoiLCAiY2FsbHNNYWRlIiwgIm5vZkNhbGxzIiwgImFsbFRpdGxlcyIsICJzdWdnZXN0aW9uQ29uZmlnIiwgImRvbnRDYWNoZSIsICJjYW5jZWxsZWQiLCAiZ2V0SlNPTiIsICJnZW5lcmF0ZUFycmF5IiwgImZvcmNlIiwgInBpcGUiLCAiY2FjaGVkVGl0bGVzIiwgIm1ha2VDYWxscyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJlbmdpbmVfIiwgIndnU2NyaXB0UGF0aCIsICJkb250QXV0b2NvbXBsZXRlIiwgImlucHV0VmFsdWUiLCAiY2F0ZWdvcnlOYW1lIiwgInZOb3JtYWxpemVkIiwgImtub3duVG9FeGlzdCIsICJ2TG93IiwgInNvcnQiLCAiYSIsICJiIiwgInByZWZpeE1hdGNoQSIsICJwcmVmaXhNYXRjaEIiLCAiYUxvdyIsICJiTG93IiwgImZpcnN0VGl0bGUiLCAiY29tcGxldGVkIiwgImF1dG9Db21wbGV0ZSIsICJleGlzdGluZyIsICJub2ZJdGVtcyIsICJtaW4iLCAiekluZGV4IiwgImFuY2hvciIsICJsaXN0aCIsICJ0b3AiLCAib2Zmc2V0VG9wIiwgIm9mZnNldEhlaWdodCIsICJtYXhMaXN0SGVpZ2h0IiwgInZpZXdwb3J0IiwgIndoYXQiLCAiZG9jdW1lbnRFbGVtZW50IiwgInNjcm9sbF9vZmZzZXQiLCAibm9kZSIsICJib3giLCAiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwgIngiLCAicm91bmQiLCAibGVmdCIsICJ5IiwgInRleHRQb3MiLCAibmwiLCAibnQiLCAib2Zmc2V0IiwgInRleHRCb3hXaWR0aCIsICJvZmZzZXRXaWR0aCIsICJjbGllbnRXaWR0aCIsICJ3aWR0aCIsICJzY3JvbGwiLCAidmlld193IiwgInciLCAibF9wb3MiLCAicmlnaHQiLCAicmVsYXRpdmVfb2Zmc2V0IiwgImFjdFZhbCIsICJub3JtYWxpemVkQWN0VmFsIiwgImRvbnRNb2RpZnkiLCAiY2FuU2VsZWN0IiwgInNldFNlbGVjdGlvblJhbmdlIiwgInNlbGVjdGlvblN0YXJ0IiwgImdldFNlbGVjdGlvbiIsICJfdGhpcyR0ZXh0JHNlbGVjdGlvbkUiLCAic2VsZWN0aW9uRW5kIiwgImN1cnIiLCAidGd0IiwgIm9wdGlvblRleHQiLCAiaG90Y2F0X2RvbnRfYWRkX3RvX3dhdGNobGlzdCIsICJIb3RDYXREb250QWRkVG9XYXRjaGxpc3QiLCAiaG90Y2F0X25vX2F1dG9jb21taXQiLCAiSG90Q2F0Tm9BdXRvQ29tbWl0IiwgImhvdGNhdF9kZWxfbmVlZHNfZGlmZiIsICJIb3RDYXREZWxOZWVkc0RpZmYiLCAiaG90Y2F0X3N1Z2dlc3Rpb25fZGVsYXkiLCAiSG90Q2F0U3VnZ2VzdGlvbkRlbGF5IiwgImhvdGNhdF9lZGl0Ym94X3dpZHRoIiwgIkhvdENhdEVkaXRCb3hXaWR0aCIsICJob3RjYXRfc3VnZ2VzdGlvbnMiLCAiSG90Q2F0U3VnZ2VzdGlvbnMiLCAiaG90Y2F0X3N1Z2dlc3Rpb25zX2ZpeGVkIiwgIkhvdENhdEZpeGVkU3VnZ2VzdGlvbnMiLCAiaG90Y2F0X3NpbmdsZV9jaGFuZ2VzX2FyZV9taW5vciIsICJIb3RDYXRNaW5vclNpbmdsZUNoYW5nZXMiLCAiaG90Y2F0X2NoYW5nZWRfYmFja2dyb3VuZCIsICJIb3RDYXRDaGFuZ2VkQmFja2dyb3VuZCIsICJob3RjYXRfdXNlX2NhdGVnb3J5X2xpbmtzIiwgIkhvdENhdFVzZUNhdGVnb3J5TGlua3MiLCAiaG90Y2F0X2xpc3Rfc2l6ZSIsICJIb3RDYXRMaXN0U2l6ZSIsICJIb3RDYXRDaGFuZ2VUYWciLCAiZUZvcm0iLCAiZWRpdGZvcm0iLCAiY2F0UmVnRXhwIiwgIm9sZFR4dCIsICJpc01pbm9yQ2hhbmdlIiwgIl9vbGRUeHQkbWF0Y2giLCAiX25ld1R4dCRtYXRjaCIsICJ0ZXh0Ym94IiwgIm5ld1R4dCIsICJvbGRMaW5lcyIsICJuZXdMaW5lcyIsICJleGNlcHQiLCAiYUFyciIsICJiQXJyIiwgImxBcnIiLCAic0FyciIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJpdGVtIiwgImluZCIsICJjQXJyIiwgImZpbHRlciIsICJjIiwgInRyaW1tZWQiLCAic3VtIiwgInN1bUEiLCAiX2VGb3JtJHdwVGV4dGJveDEkdmFsIiwgIl9lRm9ybSR3cFRleHRib3giLCAiJGN0IiwgInJlbW92ZUNoYW5nZVRhZyIsICJwYXJzZUludCIsICJpc05hTiIsICJfaTYiLCAiX09iamVjdCRlbnRyaWVzIiwgImVudHJpZXMiLCAiYm9keSIsICJkaXJlY3Rpb24iLCAiZGVmYXVsdFZpZXciLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJnZXRQcm9wZXJ0eVZhbHVlIiwgImNhbl9lZGl0IiwgImNsb3NlRm9ybSIsICJfaTciLCAiX2VkaXRvcnM2IiwgInNldHVwX3VwbG9hZCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJpcCIsICJyZXVwbG9hZCIsICJkZXN0RmlsZSIsICJsYWJlbENlbGwiLCAibGluZUNlbGwiLCAidGV4dEFsaWduIiwgIm1hcmdpbiIsICJib3JkZXIiLCAibGFiZWwiLCAidmVydGljYWxBbGlnbiIsICJuZXdSb3ciLCAiaW5zZXJ0Um93IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDMiLCAiZWIiLCAiYWRkZWRPbmUiLCAiX2k4IiwgIl9lZGl0b3JzNyIsICJ0IiwgIm5ld19jYXQiLCAiX3RlbXBsYXRlT2JqZWN0OCIsICJfY2xlYW5lZFRleHQiLCAicHJldmlvdXNDbGVhbmVkVGV4dCIsICJyZWdleCIsICJjbGVhbmVkVGV4dCIsICJpc09uUGFnZSIsICJub2RlVHlwZSIsICJOb2RlIiwgIkVMRU1FTlRfTk9ERSIsICJjYXRUaXRsZSIsICJnZXRBdHRyaWJ1dGUiLCAiX3RlbXBsYXRlT2JqZWN0OSIsICJpbml0aWFsaXplZCIsICJzZXR1cFRpbWVvdXQiLCAiZmluZEJ5Q2xhc3MiLCAic2NvcGUiLCAic2V0dXAiLCAiYWRkaXRpb25hbFdvcmsiLCAiY2xlYXJUaW1lb3V0IiwgImhpZGRlbkNhdHMiLCAiX2hpZGRlbkNhdHMkcGFyZW50Tm9kIiwgImZvb3RlciIsICJjb250YWluZXIiLCAiY3JlYXRlRWRpdG9ycyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImNvcHlDYXRzIiwgIkFycmF5IiwgIl9pOSIsICJfY29weUNhdHMiLCAiYXQiLCAibGFzdFNwYW4iLCAiZW5hYmxlTXVsdGkiLCAiaW5uZXJIVE1MIiwgImN1cnNvciIsICJGdW5jdGlvbiIsICJob29rIiwgImZpcmUiLCAiY3JlYXRlQ29tbWl0Rm9ybSIsICJmb3JtQ29udGFpbmVyIiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJnZXRQYWdlIiwgInNldFN0YXRlIiwgIm5ld1NwYW5zIiwgImNhdE5hbWUiLCAiX2kwIiwgIl9uZXdTcGFucyIsICJuZXdTcGFuIiwgImdldFN0YXRlIiwgIl9pMSIsICJfZWRpdG9yczgiLCAicmVhbGx5X3J1biIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJVcGxvYWRGb3JtIiwgInByZXZpb3VzX2hvdGNhdF9zdGF0ZSIsICJ3Z0lzQXJ0aWNsZSIsICJydW4iLCAic3RhcnRlZCIsICJob3RjYXRfZ2V0X3N0YXRlIiwgImhvdGNhdF9zZXRfc3RhdGUiLCAiaG90Y2F0X2Nsb3NlX2Zvcm0iLCAicnVuV2hlblJlYWR5Il0KfQo=
