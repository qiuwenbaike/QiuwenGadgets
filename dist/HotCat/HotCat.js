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
var _formattedNamespaces$2;
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
  const api2 = mwApi("hotCatCheck/2.0");
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
      void api2.postWithToken("csrf", params).then(editDone);
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
      void api2.postWithToken("csrf", params).then(editDone);
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
//! src/HotCat/modules/conf.ts
var conf = mw.config["values"];
//! src/HotCat/HotCat.ts
var import_ext_gadget3 = require("ext.gadget.Util");
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
//! src/HotCat/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/HotCat/modules/getMessage.ts
var getMessage = (key, ...args) => {
  key = "hotcat-".concat(key);
  return mw.message(key, ...args).plain();
};
//! src/HotCat/images/P_no.svg
var P_no_default = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="22.5"><defs><linearGradient xlink:href="#a" id="b" x1="92.604" x2="263.83" y1="304.51" y2="26.29" gradientTransform="rotate(-31.61 15.21 6.403)scale(.05544)" gradientUnits="userSpaceOnUse"/><linearGradient id="a"><stop offset="0" stop-color="#a0a3e1"/><stop offset="1" stop-color="#dedcfa"/></linearGradient></defs><path fill="url(#b)" d="M21.471 6.034A8.427 10.534 58.39 1 1 3.528 17.077 8.427 10.534 58.39 1 1 21.471 6.034"/><use xlink:href="#c" width="400" height="360" opacity=".3" transform="translate(1.109 1.109)"/><path id="c" fill="#000" fill-opacity="1" fill-rule="nonzero" stroke="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-opacity="1" stroke-width=".055" d="M7.771 17.276h2.164c.905-2.767 4.427-9.374 7.446-11.688.626-.804-.946-1.136-2.214-.604-1.91.802-7.9 11.135-7.396 12.292M9.073 5.31H6.856c-.196.335 7.045 8.697 9.36 11.716.803.626 1.135-.946.603-2.214-.802-1.91-6.793-7.71-7.746-9.502"/></svg>';
//! src/HotCat/images/P_yes.svg
var P_yes_default = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="22.5"><defs><linearGradient xlink:href="#a" id="b" x1="92.604" x2="263.83" y1="304.51" y2="26.29" gradientTransform="rotate(-31.61 15.21 6.403)scale(.05544)" gradientUnits="userSpaceOnUse"/><linearGradient id="a"><stop offset="0" stop-color="#a0a3e1"/><stop offset="1" stop-color="#dedcfa"/></linearGradient></defs><path fill="url(#b)" d="M21.472 6.034A8.428 10.534 58.391 1 1 3.528 17.077 8.428 10.534 58.391 1 1 21.472 6.034"/><use xlink:href="#c" width="400" height="360" opacity=".3" transform="translate(1.109 1.109)"/><path id="c" fill="#000" fill-opacity="1" fill-rule="evenodd" stroke="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-opacity="1" stroke-width=".055" d="M5.64 13.84s2.515 2.833 3.018 3.99h2.164c.905-2.767 4.427-9.373 7.446-11.688.626-.804-.945-1.136-2.213-.603-1.912.802-5.516 6.928-6.19 8.402-.955.252-1.962-1.61-1.962-1.61Z"/></svg>';
//! src/HotCat/modules/core.ts
/*!
 * @description Ajax-based simple Category manager. Allows adding/removing/changing categories on a page view.
 * Supports multiple category changes, as well as redirect and disambiguation resolution. Also
 * plugs into the upload form. Search engines to use for the suggestion list are configurable, and
 * can be selected interactively.
 *
 * @see {@link https://commons.wikimedia.org/wiki/Help:Gadget-HotCat}
 * @author authors <https://commons.wikimedia.org/wiki/Help:Gadget-HotCat/Version_history>
 */
var api = mwApi("HotCat/3.0");
var HC = {
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
var ua = navigator.userAgent.toLowerCase();
var is_webkit = /applewebkit\/\d+/.test(ua) && !ua.includes("spoofer");
var cat_prefix = null;
var noSuggestions = false;
var wikiTextBlank = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["[	 _  ᠎ - \u2028\u2029  　]+"], ["[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+"])));
var wikiTextBlankRE = new RegExp(wikiTextBlank, "g");
var wikiTextBlankOrBidi = String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["[	 _  ᠎ -​‎‏\u2028-  　]*"], ["[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200B\\u200E\\u200F\\u2028-\\u202F\\u205F\\u3000]*"])));
var formattedNamespaces = conf.wgFormattedNamespaces;
var namespaceIds = conf.wgNamespaceIds;
var autoLocalize = (namespaceNumber, fallback) => {
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
var make = (arg, literal) => {
  if (!arg) {
    return null;
  }
  return literal ? document.createTextNode(arg) : document.createElement(arg);
};
var param = (name, uri) => {
  uri || (uri = document.location.href);
  const re = new RegExp("[&?]".concat(name, "=([^&#]*)"));
  const m = re.exec(uri);
  if (m && m.length > 1) {
    return decodeURIComponent(m[1]);
  }
  return null;
};
var title = (href) => {
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
var hasClass = ({
  className
}, name) => {
  return " ".concat(className, " ").includes(" ".concat(name, " "));
};
var setStyleProperty = (element, property, value) => {
  element.style[property] = value;
};
var capitalize = (str) => {
  if (!str || str.length === 0) {
    return "";
  }
  return str.slice(0, 1).toUpperCase() + str.slice(1);
};
var wikiPagePath = (pageName) => {
  return conf.wgArticlePath.replace("$1", encodeURIComponent(pageName).replace(/%3A/g, ":").replace(/%2F/g, "/"));
};
var escapeRE = (str) => {
  return str.replace(/([$()*+.?[\\\]^])/g, String.raw(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["$1"], ["\\$1"]))));
};
var substituteFactory = (options) => {
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
var replaceShortcuts = (() => {
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
var findCatsRE = new RegExp("\\[\\[".concat(wikiTextBlankOrBidi, "(?:").concat(HC.category_regexp, ")").concat(wikiTextBlankOrBidi, ":[^\\]]+\\]\\]"), "g");
var replaceByBlanks = (match) => {
  return match.replace(/(\s|\S)/g, " ");
};
var find_category = (wikitext, category, once) => {
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
var interlanguageRE = null;
var change_category = (wikitext, toRemove, toAdd, key, is_hidden) => {
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
var evtKeys = (event) => {
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
var evtKill = (event) => {
  if (event !== null && event !== void 0 && event.preventDefault) {
    var _event$stopPropagatio;
    event.preventDefault();
    (_event$stopPropagatio = event.stopPropagation) === null || _event$stopPropagatio === void 0 || _event$stopPropagatio.call(event);
  } else if (event) {
    event.cancelBubble = true;
  }
  return false;
};
var catLine = null;
var onUpload = false;
var editors = [];
var commitButton = null;
var commitForm = null;
var multiSpan = null;
var pageText = null;
var pageTime = null;
var pageWatched = false;
var watchCreate = false;
var watchEdit = false;
var minorEdits = false;
var editToken = null;
var is_rtl = false;
var serverTime = null;
var lastRevId = null;
var pageTextRevId = null;
var conflictingUser = null;
var newDOM = false;
var UNCHANGED = 0;
var OPEN = 1;
var CHANGE_PENDING = 2;
var CHANGED = 3;
var DELETED = 4;
var setPage = (data) => {
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
var saveInProgress = false;
var initiateEdit = (doEdit, failure) => {
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
var multiChangeMsg = (count) => {
  return getMessage("messages-multi_change", String(count));
};
var currentTimestamp = () => {
  const now = /* @__PURE__ */ new Date();
  let ts = String(now.getUTCFullYear());
  const two = (s) => {
    return s.slice(-2);
  };
  ts += two("0".concat(now.getUTCMonth() + 1)) + two("0".concat(now.getUTCDate())) + two("00".concat(now.getUTCHours())) + two("00".concat(now.getUTCMinutes())) + two("00".concat(now.getUTCSeconds()));
  return ts;
};
var performChanges = (failure, singleEditor) => {
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
var resolveOne = (page, toResolve) => {
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
var resolveRedirects = (toResolve, params) => {
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
var resolveMulti = (toResolve, callback) => {
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
var makeActive = (which) => {
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
var showDab = (which) => {
  if (which.is_active) {
    which.showSuggestions(which.dab, false, null, null);
    which.dab = null;
  } else {
    makeActive(which);
  }
};
var multiSubmit = () => {
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
var setMultiInput = () => {
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
var checkMultiInput = () => {
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
var toCategoryTitles = (members) => {
  return members.map((member) => {
    return member.title.slice(Math.max(0, member.title.indexOf(":") + 1));
  });
};
var suggestionEngines = {
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
var suggestionConfigs = {
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
var BS = 8;
var TAB = 9;
var RET = 13;
var ESC = 27;
var SPACE = 32;
var PGUP = 33;
var PGDOWN = 34;
var UP = 38;
var DOWN = 40;
var DEL = 46;
var IME = 229;
var CategoryEditor = class _CategoryEditor {
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
      new _CategoryEditor(this.line, null, this.span, true);
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
        new _CategoryEditor(this.line, null, this.span, true);
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
};
var initialize = () => {
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
var can_edit = () => {
  return document.querySelector("#ca-edit") !== null;
};
var closeForm = () => {
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
var setup_upload = () => {
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
var cleanedText = null;
var isOnPage = (element) => {
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
var initialized = false;
var setupTimeout = null;
var findByClass = (scope, tag, className) => {
  const result = $(scope).find("".concat(tag, ".").concat(className));
  return result && result.length > 0 ? result[0] : null;
};
var setup = (additionalWork) => {
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
var createCommitForm = () => {
  if (commitForm) {
    return;
  }
  const formContainer = make("div");
  formContainer.style.display = "none";
  document.querySelector("body").append(formContainer);
  formContainer.innerHTML = '<form id="hotcatCommitForm" method="post" enctype="multipart/form-data" action="'.concat(conf.wgScript, "?title=").concat(encodeURIComponent(conf.wgPageName), '&action=submit">\n		<input type="hidden" name="wpTextbox1">\n		<input type="hidden" name="model" value="').concat(conf.wgPageContentModel, '">\n		<input type="hidden" name="format" value="text/x-wiki">\n		<input type="hidden" name="wpSummary" value="">\n		<input type="checkbox" name="wpMinoredit" title="wpMinoredit" value="1">\n		<input type="checkbox" name="wpWatchthis" title="wpWatchthis" value="1">\n		<input type="hidden" name="wpAutoSummary" value="d41d8cd98f00b204e9800998ecf8427e">\n		<input type="hidden" name="wpEdittime">\n		<input type="hidden" name="wpStarttime">\n		<input type="hidden" name="wpDiff" value="wpDiff">\n		<input type="hidden" name="oldid" value="0">\n		<input type="submit" name="hcCommit" value="hcCommit">\n		<input type="hidden" name="wpEditToken">\n		<input type="hidden" name="wpUltimateParam" value="1">\n		<input type="hidden" name="wpChangeTags">\n		<input type="hidden" value="ℳ𝒲♥𝓊𝓃𝒾𝒸ℴ𝒹ℯ" name="wpUnicodeCheck">\n		</form>');
  commitForm = document.querySelector("#hotcatCommitForm");
};
var getPage = () => {
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
var setState = (state) => {
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
var getState = () => {
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
var really_run = () => {
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
var run = () => {
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
void (0, import_ext_gadget3.getBody)().then(function hotCat() {
  hotCatMessages();
  if (window.HotCat && !window.HotCat.nodeName || conf.wgAction === "edit") {
    return;
  }
  run();
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hvdENhdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvSG90Q2F0L21vZHVsZXMvY2hlY2sudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL2NvbmYudHMiLCAic3JjL0hvdENhdC9Ib3RDYXQudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9nZXRNZXNzYWdlLnRzIiwgInNyYy9Ib3RDYXQvaW1hZ2VzL1Bfbm8uc3ZnIiwgInNyYy9Ib3RDYXQvaW1hZ2VzL1BfeWVzLnN2ZyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbi8vIEluaXRpYWxpemUgTWVkaWFXaWtpIEFQSVxuY29uc3QgbXdBcGk6ICh1c2VyQWdlbnQ/OiBzdHJpbmcpID0+IG13LkFwaSA9ICh1c2VyQWdlbnQpID0+IHtcblx0cmV0dXJuIGluaXRNd0FwaSh1c2VyQWdlbnQpO1xufTtcblxuZXhwb3J0IHttd0FwaX07XG4iLCAiaW1wb3J0ICcuL2NoZWNrLmxlc3MnO1xuaW1wb3J0IHttd0FwaX0gZnJvbSAnLi9hcGknO1xuXG4vKipcbiAqIENoZWNrQ2F0ZWdvcmllcyBIb3RDYXQgRXh0ZW5zaW9uIOKAk1xuICogcmVtb3ZlcyB0aGUgdGVtcGxhdGUgd2hlbiBjYXRlZ29yaXppbmcgKHByb21wdHMgYmVmb3JlKSB3aXRoIEhvdENhdCBhbmRcbiAqIGFkZHMgYSBsaW5rIFwiQ2F0ZWdvcmllcyBhcmUgT0tcIiB0byB0aGUgY2F0ZWdvcnktc2VjdGlvblxuICpcbiAqIEByZXYgMiAoMjAxNC0wMy0yMClcbiAqIEBhdXRob3IgUmlsbGtlLCAyMDEyXG4gKi9cbihmdW5jdGlvbiBob3RDYXRDaGVjaygpIHtcblx0aWYgKFxuXHRcdG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgIT09IDYgfHxcblx0XHR3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0T3B0T3V0IHx8XG5cdFx0IWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2NhdGVnb3JpZXMnKVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgYXBpID0gbXdBcGkoJ2hvdENhdENoZWNrLzIuMCcpO1xuXHRjb25zdCBjaGVja0NhdGVnb3JpZXNSZWdFeHAgPSAve3tbQ2NdaGVja1sgX11jYXRlZ29yaWVzW157fV0qfX0vZztcblx0Y29uc3Qgc2VsZk5hbWUgPSAnKFtbTWVkaWFXaWtpOkdhZGdldC1Ib3RDYXQtY2hlY2suanN8U2NyaXB0XV0pOiAnO1xuXHRjb25zdCBzdG9yYWdlSXRlbU5hbWUgPSAnY2hlY2tDYXQnO1xuXHRjb25zdCBzdG9yYWdlSXRlbSA9IG13LnN0b3JhZ2UuZ2V0KHN0b3JhZ2VJdGVtTmFtZSk7XG5cdC8qKlxuXHQgKiBBIGZldyBzdHlsaW5nIGhlbHBlciBmdW5jdGlvbnNcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGljb25DbGFzc1xuXHQgKiBAcmV0dXJuIHtKUXVlcnl9XG5cdCAqL1xuXHRjb25zdCBjcmVhdGVqSWNvbiA9IChpY29uQ2xhc3M6IHN0cmluZyk6IEpRdWVyeSA9PiB7XG5cdFx0cmV0dXJuICQoJzxzcGFuPicpLmF0dHIoJ2NsYXNzJywgYGhvdGNhdC1jaGVjay1pY29uICR7aWNvbkNsYXNzfWApLnRleHQoJyAnKTtcblx0fTtcblx0Y29uc3QgY3JlYXRlTm90aWZ5QXJlYSA9ICh0ZXh0Tm9kZTogSlF1ZXJ5PEpRdWVyeS5Ob2RlPiwgaWNvbjogc3RyaW5nLCBzdGF0ZTogc3RyaW5nKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9PiB7XG5cdFx0cmV0dXJuICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnaG90Y2F0LWNoZWNrLW5vdGljZScpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdFx0LmF0dHIoJ2NsYXNzJywgYGhvdGNhdC1jaGVjay1ub3RpY2UtY29udGVudCAke3N0YXRlfWApXG5cdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHQnbWFyZ2luLXRvcCc6ICcyMHB4Jyxcblx0XHRcdFx0XHRcdHBhZGRpbmc6ICcwLjdlbScsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxwPicpLmFwcGVuZChjcmVhdGVqSWNvbihpY29uKS5jc3MoJ21hcmdpblJpZ2h0JywgJzAuM2VtJyksIHRleHROb2RlKSlcblx0XHRcdCk7XG5cdH07XG5cdC8vIFJlbW92ZSBcImNoZWNrIGNhdGVnb3JpZXNcIiB3aGVuIHVzaW5nIEhvdENhdFxuXHQvLyBPbmx5IGV4ZWN1dGVkIG9uIGZpcnN0IHN1Ym1pdFxuXHQkKCdib2R5Jykub25lKCdzdWJtaXQuY2hlY2tDYXRMaXN0ZW5lcicsICcjaG90Y2F0Q29tbWl0Rm9ybScsIGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKHN0b3JhZ2VJdGVtID09PSAnZGlzYWJsZWQnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cblx0XHRjb25zdCBuZXdWYWwgPSAoc2VsZi53cFRleHRib3gxIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlPy5yZXBsYWNlKGNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCwgJycpO1xuXHRcdGxldCAkZGlhbG9nQ2hlY2tTdG9yYWdlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRcdGxldCAkcGVybWFTYXZlSGludDogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0XHRsZXQgJHRleHRIaW50Tm9kZTtcblx0XHRsZXQgJGRpYWxvZztcblx0XHRsZXQgJG92ZXJsYXk6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdFx0Y29uc3QgZG9SZW1vdmUgPSAoKSA9PiB7XG5cdFx0XHQoc2VsZi53cFN1bW1hcnkgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPVxuXHRcdFx0XHRgUmVtb3ZpbmcgW1tUZW1wbGF0ZTpDaGVjayBjYXRlZ29yaWVzfHt7Q2hlY2sgY2F0ZWdvcmllc319XV0gJHsoc2VsZi53cFN1bW1hcnkgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWV9YDtcblxuXHRcdFx0KHNlbGYud3BUZXh0Ym94MSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA9IG5ld1ZhbDtcblx0XHR9O1xuXHRcdGNvbnN0IHdyaXRlU3RvcmFnZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuXHRcdFx0bXcuc3RvcmFnZS5zZXQoc3RvcmFnZUl0ZW1OYW1lLCB2YWwsIDYwICogNjAgKiAyNCAqIDcpOyAvLyA3IGRheXNcblx0XHR9O1xuXHRcdGNvbnN0IGNsb3NlRGlhbG9nID0gKCkgPT4ge1xuXHRcdFx0JChkb2N1bWVudCkub2ZmKCdrZXlkb3duLmhvdGNhdENoZWNrJyk7XG5cdFx0XHQkb3ZlcmxheT8ucmVtb3ZlKCk7XG5cdFx0XHQkKCdib2R5JykuZmluZCgnI2hvdGNhdENvbW1pdEZvcm0nKS50cmlnZ2VyKCdzdWJtaXQnKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZpbmlzaERpYWxvZyA9IChzdG9yYWdlVmFsdWU/OiBzdHJpbmcpID0+IHtcblx0XHRcdGlmIChzdG9yYWdlVmFsdWUgJiYgKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKHN0b3JhZ2VWYWx1ZSk7XG5cdFx0XHR9XG5cdFx0XHRjbG9zZURpYWxvZygpO1xuXHRcdH07XG5cdFx0Y29uc3QgX2FkZFRvSlMgPSBmdW5jdGlvbiAodGhpczogSFRNTEVsZW1lbnQsIF9lOiBKUXVlcnkuRXZlbnQpIHtcblx0XHRcdF9lLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAoJHBlcm1hU2F2ZUhpbnQuaGFzQ2xhc3MoJ2hvdGNhdC1jaGVjay1kaXNhYmxlZCcpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRlbDogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICQodGhpcyk7XG5cdFx0XHQkZWwub2ZmKCdjbGljaycpLnRleHQoJ1BsZWFzZSB3YWl0LicpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQuYWRkQ2xhc3MoJ2hvdGNhdC1jaGVjay1kaXNhYmxlZCcpO1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0aXRsZTogYFVzZXI6JHttdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyl9L2NvbW1vbi5qc2AsXG5cdFx0XHRcdHN1bW1hcnk6IGAke3NlbGZOYW1lfVNhdmluZyBIb3RDYXQgY29uZmlndXJhdGlvbi5gLFxuXHRcdFx0XHRhcHBlbmR0ZXh0OiAkZWwuZGF0YSgnYWRkVGV4dCcpIGFzIHN0cmluZyxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBlZGl0RG9uZSA9IChlZGl0U3RhdD86IHtlcnJvcj86IHtjb2RlPzogc3RyaW5nOyBpbmZvPzogc3RyaW5nfX0pID0+IHtcblx0XHRcdFx0aWYgKCFlZGl0U3RhdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWRpdFN0YXQuZXJyb3IpIHtcblx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdGBVbmFibGUgdG8gc2F2ZSB0byB5b3VyIGNvbW1vbi5qcyB1c2luZyB0aGUgQVBJXFxuJHtlZGl0U3RhdC5lcnJvci5jb2RlfVxcbiR7ZWRpdFN0YXQuZXJyb3IuaW5mb31gLFxuXHRcdFx0XHRcdFx0e3RhZzogJ2hvdENhdENoZWNrJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0LUVycm9yIScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdEb25lLicpO1xuXHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHZvaWQgYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbXMpLnRoZW4oZWRpdERvbmUpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogT24gV2lraW1lZGlhIENvbW1vbnMgdGhlcmUgd2VyZSBwZW9wbGUgd2hvIHNhaWQ6XG5cdFx0ICogXCJDYXRlZ29yaXppbmcgd2l0aCBIb3RDYXQgZG9lcyBsZWdpdCBhdXRvbWF0ZWQgcmVtb3ZhbCBvZiB0aGUgY2hlY2stY2F0LW1lc3NhZ2VcIlxuXHRcdCAqIFNvIHdlIGludmVudGVkIGEgZGlhbG9nIHRoYXQgc2hvdWxkIGJlIHJlYWRhYmxlIGJ5IHVzZXJzIGV2ZW4gd2l0aCB2ZXJ5IGZldyBFbmdsaXNoIHNraWxscy5cblx0XHQgKi9cblx0XHRjb25zdCBwcm9tcHQgPSAoKSA9PiB7XG5cdFx0XHQkZGlhbG9nQ2hlY2tTdG9yYWdlID0gJCgnPGlucHV0PicpXG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHR0eXBlOiAnY2hlY2tib3gnLFxuXHRcdFx0XHRcdGlkOiAnaG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0U3RvcmFnZScsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGlmICgodGhpcyBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5zaG93KCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmhpZGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0JHRleHRIaW50Tm9kZSA9ICQoJzx1bD4nKTtcblx0XHRcdCQoJzxsaT4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjJylcblx0XHRcdFx0XHRcdC50ZXh0KCdEaXNhYmxlIHRoaXMgZmVhdHVyZS4nKVxuXHRcdFx0XHRcdFx0LmRhdGEoJ2FkZFRleHQnLCAnXFxud2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCA9IHRydWU7Jylcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBfYWRkVG9KUylcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kVG8oJHRleHRIaW50Tm9kZSk7XG5cdFx0XHQkKCc8bGk+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHQudGV4dCgnUmVtb3ZlIHt7Y2hlY2sgY2F0ZWdvcmllc319IHdoZW4gZWRpdGluZyB1c2luZyBIb3RDYXQgd2l0aG91dCBwcm9tcHRpbmcuJylcblx0XHRcdFx0XHRcdC5kYXRhKCdhZGRUZXh0JywgJ1xcbndpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQgPSB0cnVlOycpXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX2FkZFRvSlMpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZFRvKCR0ZXh0SGludE5vZGUpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQgPSBjcmVhdGVOb3RpZnlBcmVhKFxuXHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCdTYXZlIHRoZXNlIHNldHRpbmcgaW4geW91ciBjb21tb24uanM6ICcpLmFwcGVuZCgkdGV4dEhpbnROb2RlKSxcblx0XHRcdFx0J2hvdGNhdC1jaGVjay1pY29uLWluZm8nLFxuXHRcdFx0XHQnaG90Y2F0LWNoZWNrLWhpZ2hsaWdodCdcblx0XHRcdCk7XG5cdFx0XHQkZGlhbG9nID0gJCgnPGRpdj4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdFx0J2ZvbnQtc2l6ZSc6ICcyZW0nLFxuXHRcdFx0XHRcdFx0XHQnbGluZS1oZWlnaHQnOiAnMS44ZW0nLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpLnRleHQoJyB7e2NoZWNrIGNhdGVnb3JpZXN9fSAnKS5jc3Moe1xuXHRcdFx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJyNGOENDQjAnLFxuXHRcdFx0XHRcdFx0XHRcdCd0ZXh0LWRlY29yYXRpb24nOiAnbGluZS10aHJvdWdoICFpbXBvcnRhbnQnLFxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+JykudGV4dCgnID8nKVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0Jzxicj4nLFxuXHRcdFx0XHRcdCRkaWFsb2dDaGVja1N0b3JhZ2UsXG5cdFx0XHRcdFx0JCgnPGxhYmVsPicpLmF0dHIoJ2ZvcicsICdob3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRTdG9yYWdlJykudGV4dChcIkRvbid0IGFzayBhZ2FpblwiKSxcblx0XHRcdFx0XHQnPGJyPidcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kKG13LnVzZXIuaXNBbm9uKCkgPyAnJyA6ICRwZXJtYVNhdmVIaW50LmhpZGUoKSk7XG5cdFx0XHQkb3ZlcmxheSA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2hvdGNhdC1jaGVjay1vdmVybGF5JykuYXR0cigncm9sZScsICdwcmVzZW50YXRpb24nKTtcblx0XHRcdCRkaWFsb2cgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnaG90Y2F0LWNoZWNrLWRpYWxvZycpXG5cdFx0XHRcdC5hdHRyKHtyb2xlOiAnZGlhbG9nJywgJ2FyaWEtbW9kYWwnOiAndHJ1ZScsICdhcmlhLWxhYmVsbGVkYnknOiAnaG90Y2F0LWNoZWNrLWRpYWxvZy10aXRsZSd9KVxuXHRcdFx0XHQucHJlcGVuZCgkKCc8aDI+JykuYXR0cignaWQnLCAnaG90Y2F0LWNoZWNrLWRpYWxvZy10aXRsZScpLnRleHQoJ3t7Y2hlY2sgY2F0ZWdvcmllc319ICjiiJIpPycpKVxuXHRcdFx0XHQuYXBwZW5kKCRkaWFsb2cpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdob3RjYXQtY2hlY2stZGlhbG9nLWJ1dHRvbnMnKVxuXHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPGJ1dHRvbj4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoJ1llcywgUmVtb3ZlJylcblx0XHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0XHRcdFx0XHRcdGZpbmlzaERpYWxvZygnYXV0bycpO1xuXHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHQkKCc8YnV0dG9uPicpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcblx0XHRcdFx0XHRcdFx0XHQudGV4dCgnTm8sIGtlZXAgaXQnKVxuXHRcdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRmaW5pc2hEaWFsb2coJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdCRvdmVybGF5LmFwcGVuZCgkZGlhbG9nKS5hcHBlbmRUbygnYm9keScpO1xuXHRcdFx0JGRpYWxvZy5maW5kKCdidXR0b24nKS5maXJzdCgpLnRyaWdnZXIoJ2ZvY3VzJyk7XG5cdFx0XHQkb3ZlcmxheS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0aWYgKGV2ZW50LnRhcmdldCA9PT0gJG92ZXJsYXlbMF0pIHtcblx0XHRcdFx0XHRjbG9zZURpYWxvZygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdrZXlkb3duLmhvdGNhdENoZWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdrZXlkb3duLmhvdGNhdENoZWNrJyk7XG5cdFx0XHRcdFx0Y2xvc2VEaWFsb2coKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGlmIChuZXdWYWwgIT09IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUpIHtcblx0XHRcdGlmICh3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IHx8IHN0b3JhZ2VJdGVtID09PSAnYXV0bycpIHtcblx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRwcm9tcHQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xuXHQvLyBBZGQgT0stTGluayB0byB0aGUgY2F0cyBwYW5lbFxuXHRjb25zdCAkb2tMaW5rID0gJCgnPGE+Jylcblx0XHQuYXR0cih7XG5cdFx0XHRocmVmOiAnIycsXG5cdFx0XHR0aXRsZTogJ0NhdGVnb3JpZXMgYXJlIE9LISBJbW1lZGlhdGVseSByZW1vdmUgdGhlIHRlbXBsYXRlLicsXG5cdFx0fSlcblx0XHQuYXBwZW5kKCc8cz4nKVxuXHRcdC50ZXh0KCd7e0NoZWNrIGNhdGVnb3JpZXN9fScpO1xuXHQkb2tMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0ICRlbCA9ICQodGhpcyk7XG5cdFx0JGVsLm9mZignY2xpY2snKTtcblx0XHRjb25zdCBkb0VkaXQgPSAocmVzdWx0OiBzdHJpbmcpID0+IHtcblx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRlbC50ZXh0KCdEb2luZy4nKTtcblx0XHRcdGNvbnN0IHRleHQgPSByZXN1bHQucmVwbGFjZShjaGVja0NhdGVnb3JpZXNSZWdFeHAsICcnKTtcblx0XHRcdGlmICh0ZXh0ID09PSByZXN1bHQpIHtcblx0XHRcdFx0JGVsLnRleHQoJ1RlbXBsYXRlIG5vdCBmb3VuZCEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRcdFx0dGV4dCxcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR0aXRsZTogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdFx0XHRzdW1tYXJ5OiBgJHtzZWxmTmFtZX1DYXRlZ29yaWVzIGFyZSBjaGVja2VkIGFuZCBPSy4gWW91IGNhbiBoZWxwIFtbQ2F0ZWdvcnk6TWVkaWEgbmVlZGluZyBjYXRlZ29yeSByZXZpZXd8cmV2aWV3aW5nXV0hYCxcblx0XHRcdFx0bm9jcmVhdGU6IHRydWUsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZWRpdERvbmUgPSAoZWRpdFN0YXQ/OiB7ZXJyb3I/OiB7Y29kZT86IHN0cmluZzsgaW5mbz86IHN0cmluZ319KSA9PiB7XG5cdFx0XHRcdGlmICghZWRpdFN0YXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVkaXRTdGF0LmVycm9yKSB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRgVW5hYmxlIHRvIHJlbW92ZSBcIkNoZWNrIGNhdGVnb3JpZXNcIiB3aXRoIHRoZSBBUElcXG4ke2VkaXRTdGF0LmVycm9yLmNvZGV9XFxuJHtlZGl0U3RhdC5lcnJvci5pbmZvfWAsXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRhZzogJ2hvdENhdENoZWNrJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0LUVycm9yIScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRlbC50ZXh0KCdFZGl0IERvbmUuJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdCRib2R5LmZpbmQoJy5jaGVja2NhdGVnb3JpZXMnKS5oaWRlKCk7XG5cdFx0XHR9O1xuXHRcdFx0JGVsLnRleHQoJ0RvaW5nLi4nKTtcblx0XHRcdHZvaWQgYXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCBwYXJhbXMpLnRoZW4oZWRpdERvbmUpO1xuXHRcdH07XG5cdFx0JGVsLnRleHQoJ0RvaW5nJyk7XG5cdFx0dm9pZCAkLmFqYXgoe1xuXHRcdFx0dXJsOiBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHR0aXRsZTogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnJlcGxhY2UoLyAvZywgJ18nKSxcblx0XHRcdH0sXG5cdFx0XHRkYXRhVHlwZTogJ3RleHQnLFxuXHRcdFx0ZXJyb3I6ICgpID0+IHtcblx0XHRcdFx0JGVsLnRleHQoJ0Vycm9yIScpO1xuXHRcdFx0fSxcblx0XHRcdHN1Y2Nlc3M6IGRvRWRpdCxcblx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0Y2FjaGU6IGZhbHNlLFxuXHRcdH0pO1xuXHR9KTtcblx0JChmdW5jdGlvbiBsb2FkSG90Q2F0Q2hlY2soKSB7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHkuZmluZCgnI2NhdGxpbmtzJykuZmluZCgndWw6Zmlyc3QnKS5hcHBlbmQoJCgnPGxpPicpLmFwcGVuZCgkb2tMaW5rKSk7XG5cdH0pO1xufSkoKTtcbiIsICJpbXBvcnQge0hvdENhdE13Q29uZmlnfSBmcm9tICcuL3R5cGVzJztcblxuLy8gRG9uJ3QgdXNlIG13LmNvbmZpZy5nZXQoKSBhcyB0aGF0IHRha2VzIGEgY29weSBvZiB0aGUgY29uZmlnLCBhbmQgc28gZG9lc24ndFxuLy8gYWNjb3VudCBmb3IgdmFsdWVzIGNoYW5naW5nLCBlLmcuIHdnQ3VyUmV2aXNpb25JZCBhZnRlciBhIFZFIGVkaXRcbmNvbnN0IGNvbmY6IEhvdENhdE13Q29uZmlnID0gbXcuY29uZmlnWyd2YWx1ZXMnXTtcblxuZXhwb3J0IHtjb25mfTtcbiIsICIvKiFcbiAqIEBkZXNjcmlwdGlvbiBBamF4LWJhc2VkIHNpbXBsZSBDYXRlZ29yeSBtYW5hZ2VyLiBBbGxvd3MgYWRkaW5nL3JlbW92aW5nL2NoYW5naW5nIGNhdGVnb3JpZXMgb24gYSBwYWdlIHZpZXcuXG4gKiBTdXBwb3J0cyBtdWx0aXBsZSBjYXRlZ29yeSBjaGFuZ2VzLCBhcyB3ZWxsIGFzIHJlZGlyZWN0IGFuZCBkaXNhbWJpZ3VhdGlvbiByZXNvbHV0aW9uLiBBbHNvXG4gKiBwbHVncyBpbnRvIHRoZSB1cGxvYWQgZm9ybS4gU2VhcmNoIGVuZ2luZXMgdG8gdXNlIGZvciB0aGUgc3VnZ2VzdGlvbiBsaXN0IGFyZSBjb25maWd1cmFibGUsIGFuZFxuICogY2FuIGJlIHNlbGVjdGVkIGludGVyYWN0aXZlbHkuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9IZWxwOkdhZGdldC1Ib3RDYXR9XG4gKiBAYXV0aG9yIGF1dGhvcnMgPGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvSGVscDpHYWRnZXQtSG90Q2F0L1ZlcnNpb25faGlzdG9yeT5cbiAqL1xuaW1wb3J0ICcuL21vZHVsZXMvY2hlY2snO1xuaW1wb3J0IHtjb25mfSBmcm9tICcuL21vZHVsZXMvY29uZic7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2hvdENhdE1lc3NhZ2VzfSBmcm9tICcuL21vZHVsZXMvbWVzc2FnZXMnO1xuaW1wb3J0IHtydW59IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBob3RDYXQoKTogdm9pZCB7XG5cdC8vIExvYWQgdHJhbnNsYXRpb25zIGxvY2FsbHlcblx0aG90Q2F0TWVzc2FnZXMoKTtcblxuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmICgod2luZG93LkhvdENhdCAmJiAhKHdpbmRvdy5Ib3RDYXQgYXMgdW5rbm93biBhcyB7bm9kZU5hbWU/OiBzdHJpbmd9KS5ub2RlTmFtZSkgfHwgY29uZi53Z0FjdGlvbiA9PT0gJ2VkaXQnKSB7XG5cdFx0cmV0dXJuOyAvLyBOb3Qgb24gZWRpdCBtb2RlXG5cdH1cblxuXHQvLyBXZSBjYW4gc2FmZWx5IHRyaWdnZXIganVzdCBhZnRlciB1c2VyIGNvbmZpZ3VyYXRpb24gaXMgbG9hZGVkLlxuXHQvLyBVc2UgYWx3YXlzKCkgaW5zdGVhZCBvZiB0aGVuKCkgdG8gYWxzbyBzdGFydCBIb3RDYXQgaWYgdGhlIHVzZXIgbW9kdWxlIGhhcyBwcm9ibGVtcy5cblx0cnVuKCk7XG59KTtcbiIsICJjb25zdCBob3RDYXRNZXNzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3JlbW92ZWQnOiAn5bey56e76ZmkW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdGVtcGxhdGVfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e1tbQ2F0ZWdvcnk6JDFdXX19Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2FkZGVkJzogJ+W3sua3u+WKoFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQvLyAkMiBpcyB0aGUgbmV3IGtleVxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfa2V5Y2hhbmdlJzogJ+W3suioree9rltbQ2F0ZWdvcnk6JDFdXeeahOaWsOaOkuW6j+Wtl++8mlwiJDJcIicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9ub3RGb3VuZCc6ICfliIbpoZ7igJwkMeKAneaykuacieaJvuWIsCcsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9leGlzdHMnOiAn5YiG6aGe4oCcJDHigJ3lt7LntpPlrZjlnKjvvIzmspLmnInmt7vliqDjgIInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVzb2x2ZWQnOiAn77yI6YeN5a6a5ZCRW1tDYXRlZ29yeTokMV1d5bey6JmV55CG77yJJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdW5jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e3VuY2F0ZWdvcml6ZWR9fScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gcHJlZml4IHRvIHRoZSBlZGl0IHN1bW1hcnkuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXByZWZpeCc6ICfkvb/nlKhbW0g6SE9UQ0FUfEhvdENhdF1dJyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBhcHBlbmQgdG8gdGhlIGVkaXQgc3VtbWFyeS4gTmFtZWQgJ3VzaW5nJyBmb3IgaGlzdG9yaWNhbCByZWFzb25zLiBJZiB5b3UgcHJlZmVyXG5cdFx0XHQvLyB0byBoYXZlIGEgbWFya2VyIGF0IHRoZSBmcm9udCwgdXNlIHByZWZpeCBhbmQgc2V0IHRoaXMgdG8gdGhlIGVtcHR5IHN0cmluZy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdXNpbmcnOiAnJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfY2hhbmdlJzogJyQx5YCL5YiG6aGeJyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5OyBpLmUuLCBhIGNhdGVnb3J5IHRoYXQgc2hvdWxkIG5vdCBjb250YWluXG5cdFx0XHQvLyBhbnkgaXRlbXMsIGJ1dCB0aGF0IGNvbnRhaW5zIGxpbmtzIHRvIG90aGVyIGNhdGVnb3JpZXMgd2hlcmUgc3R1ZmYgc2hvdWxkIGJlIGNhdGVnb3JpemVkLiBJZiB5b3UgZG9uJ3QgaGF2ZVxuXHRcdFx0Ly8gdGhhdCBjb25jZXB0IG9uIHlvdXIgd2lraSwgc2V0IGl0IHRvIGJsYW5rIHN0cmluZy4gVXNlIGJsYW5rcywgbm90IHVuZGVyc2NvcmVzLlxuXHRcdFx0J2hvdGNhdC1kaXNhbWJpZ19jYXRlZ29yeSc6ICcnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgKHNvZnQpIHJlZGlyZWN0IHRvIHNvbWUgb3RoZXIgY2F0ZWdvcnkgZGVmaW5lZCBieSBhIGxpbmtcblx0XHRcdC8vIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LiBJZiB5b3VyIHdpa2kgZG9lc24ndCBoYXZlIHNvZnQgY2F0ZWdvcnkgcmVkaXJlY3RzLCBzZXQgdGhpcyB0byBudWxsLlxuXHRcdFx0Ly8gSWYgYSBzb2Z0LXJlZGlyZWN0ZWQgY2F0ZWdvcnkgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBsaW5rIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LCBpdCdzIGNvbnNpZGVyZWRcblx0XHRcdC8vIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnkgaW5zdGVhZC5cblx0XHRcdCdob3RjYXQtcmVkaXJfY2F0ZWdvcnknOiAn5bey6YeN5a6a5ZCR55qE5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2VwYXJhdG9yJzogJzsgJyxcblx0XHRcdC8vICQxIGlzIHJlcGxhY2VkIGJ5IGEgbnVtYmVyLiBJZiB5b3VyIGxhbmd1YWdlIGhhcyBzZXZlcmFsIHBsdXJhbCBmb3JtcyAoYy5mLiBbWzplbndpa2k6RHVhbCAoZ3JhbW1hdGljYWwgZm9ybSldXSksXG5cdFx0XHQvLyB5b3UgY2FuIHNldCB0aGlzIHRvIGFuIGFycmF5IG9mIHN0cmluZ3Mgc3VpdGFibGUgZm9yIHBhc3NpbmcgdG8gbXcubGFuZ3VhZ2UuY29uZmlnUGx1cmFsKCkuXG5cdFx0XHQvLyBJZiB0aGF0IGZ1bmN0aW9uIGRvZXNuJ3QgZXhpc3QsIEhvdENhdCB3aWxsIHNpbXBseSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGxhc3Rcblx0XHRcdC8vIGVudHJ5IGluIHRoZSBhcnJheS5cblx0XHRcdC8vIERlZmF1bHRzIHRvICdbWycgKyBjYXRlZ29yeV9jYW5vbmljYWwgKyAnOiQxXV0nLiBDYW4gYmUgb3ZlcnJpZGRlbiBpZiBpbiB0aGUgc2hvcnQgZWRpdCBzdW1tYXJpZXNcblx0XHRcdC8vIG5vdCB0aGUgc3RhbmRhcmQgY2F0ZWdvcnkgbmFtZSBzaG91bGQgYmUgdXNlZCBidXQsIHNheSwgYSBzaG9ydGVyIG5hbWVzcGFjZSBhbGlhcy4gJDEgaXMgcmVwbGFjZWRcblx0XHRcdC8vIGJ5IGEgY2F0ZWdvcnkgbmFtZS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJzogJyQxJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNvbW1pdCc6ICflhLLlrZgnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtb2snOiAn56K65a6aJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhbmNlbCc6ICflj5bmtognLFxuXHRcdFx0Ly8gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9lcnJvcic6XG5cdFx0XHRcdCfnhKHms5Xlvp7kvLrmnI3lmajlj5blvpfpoIHpnaLmloflrZfjgILlm6DmraTvvIzmgqjnmoTliIbpoZ7orormm7TnhKHms5XlhLLlrZjjgILmiJHlgJHngrrmraTkuI3kvr/ooajnpLrmirHmrYnjgIInLFxuXHRcdFx0Ly8gUGx1cmFsIG9mIGNhdGVnb3J5X2Nhbm9uaWNhbC5cblx0XHRcdCdob3RjYXQtY2F0ZWdvcmllcyc6ICfliIbpoZ4nLFxuXHRcdFx0Ly8gTmFtZXMgZm9yIHRoZSBzZWFyY2ggZW5naW5lc1xuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc2VhcmNoaW5kZXgnOiAn5pCc5bCL57Si5byVJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhZ2VsaXN0JzogJ+mggemdouWIl+ihqCcsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1jb21iaW5lZCc6ICflkIjkvbXmkJzlsIsnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc3ViY2F0JzogJ+WtkOWIhumhnicsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYXJlbnRjYXQnOiAn5LiK5bGk5YiG6aGeJyxcblx0XHRcdC8vIFRoZSB0b29sdGlwcyBmb3IgdGhlIGFib3ZlIGxpbmtzXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWNoYW5nZSc6ICfkv67mlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZW1vdmUnOiAn56e76ZmkJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtYWRkJzogJ+WinuWKoOS4gOWAi+aWsOWIhumhnicsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlc3RvcmUnOiAn5b6p5Y6f6K6K5pu0Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdW5kbyc6ICflvqnljp/orormm7QnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1kb3duJzogJ+aJk+mWi+S7peS/ruaUueS4pumhr+ekuuWtkOWIhumhnicsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVwJzogJ+aJk+mWi+S7peS/ruaUueS4pumhr+ekuuS4iuWxpOWIhumhnicsXG5cdFx0XHQvLyBUb29sdGlwIGZvciB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGlua1xuXHRcdFx0J2hvdGNhdC1tdWx0aV90b29sdGlwJzogJ+S/ruaUueWkmuWAi+WIhumhnicsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3JlbW92ZWQnOiAn5bey56e76ZmkW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdGVtcGxhdGVfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e1tbQ2F0ZWdvcnk6JDFdXX19Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2FkZGVkJzogJ+W3sua3u+WKoFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQvLyAkMiBpcyB0aGUgbmV3IGtleVxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfa2V5Y2hhbmdlJzogJ+W3suiuvue9rltbQ2F0ZWdvcnk6JDFdXeeahOaWsOaOkuW6j+Wtl++8mlwiJDJcIicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9ub3RGb3VuZCc6ICfliIbnsbvigJwkMeKAneayoeacieaJvuWIsCcsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9leGlzdHMnOiAn5YiG57G74oCcJDHigJ3lt7Lnu4/lrZjlnKjvvIzmsqHmnInmt7vliqDjgIInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVzb2x2ZWQnOiAn77yI6YeN5a6a5ZCRW1tDYXRlZ29yeTokMV1d5bey5aSE55CG77yJJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdW5jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e3VuY2F0ZWdvcml6ZWR9fScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gcHJlZml4IHRvIHRoZSBlZGl0IHN1bW1hcnkuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXByZWZpeCc6ICfkvb/nlKhbW0g6SE9UQ0FUfEhvdENhdF1dJyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBhcHBlbmQgdG8gdGhlIGVkaXQgc3VtbWFyeS4gTmFtZWQgJ3VzaW5nJyBmb3IgaGlzdG9yaWNhbCByZWFzb25zLiBJZiB5b3UgcHJlZmVyXG5cdFx0XHQvLyB0byBoYXZlIGEgbWFya2VyIGF0IHRoZSBmcm9udCwgdXNlIHByZWZpeCBhbmQgc2V0IHRoaXMgdG8gdGhlIGVtcHR5IHN0cmluZy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdXNpbmcnOiAnJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfY2hhbmdlJzogJyQx5Liq5YiG57G7Jyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5OyBpLmUuLCBhIGNhdGVnb3J5IHRoYXQgc2hvdWxkIG5vdCBjb250YWluXG5cdFx0XHQvLyBhbnkgaXRlbXMsIGJ1dCB0aGF0IGNvbnRhaW5zIGxpbmtzIHRvIG90aGVyIGNhdGVnb3JpZXMgd2hlcmUgc3R1ZmYgc2hvdWxkIGJlIGNhdGVnb3JpemVkLiBJZiB5b3UgZG9uJ3QgaGF2ZVxuXHRcdFx0Ly8gdGhhdCBjb25jZXB0IG9uIHlvdXIgd2lraSwgc2V0IGl0IHRvIGJsYW5rIHN0cmluZy4gVXNlIGJsYW5rcywgbm90IHVuZGVyc2NvcmVzLlxuXHRcdFx0J2hvdGNhdC1kaXNhbWJpZ19jYXRlZ29yeSc6ICcnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgKHNvZnQpIHJlZGlyZWN0IHRvIHNvbWUgb3RoZXIgY2F0ZWdvcnkgZGVmaW5lZCBieSBhIGxpbmtcblx0XHRcdC8vIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LiBJZiB5b3VyIHdpa2kgZG9lc24ndCBoYXZlIHNvZnQgY2F0ZWdvcnkgcmVkaXJlY3RzLCBzZXQgdGhpcyB0byBudWxsLlxuXHRcdFx0Ly8gSWYgYSBzb2Z0LXJlZGlyZWN0ZWQgY2F0ZWdvcnkgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBsaW5rIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LCBpdCdzIGNvbnNpZGVyZWRcblx0XHRcdC8vIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnkgaW5zdGVhZC5cdFx0XHQnaG90Y2F0LXJlZGlyX2NhdGVnb3J5JzogJ+W3sumHjeWumuWQkeeahOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNlcGFyYXRvcic6ICc7ICcsXG5cdFx0XHQvLyAkMSBpcyByZXBsYWNlZCBieSBhIG51bWJlci4gSWYgeW91ciBsYW5ndWFnZSBoYXMgc2V2ZXJhbCBwbHVyYWwgZm9ybXMgKGMuZi4gW1s6ZW53aWtpOkR1YWwgKGdyYW1tYXRpY2FsIGZvcm0pXV0pLFxuXHRcdFx0Ly8geW91IGNhbiBzZXQgdGhpcyB0byBhbiBhcnJheSBvZiBzdHJpbmdzIHN1aXRhYmxlIGZvciBwYXNzaW5nIHRvIG13Lmxhbmd1YWdlLmNvbmZpZ1BsdXJhbCgpLlxuXHRcdFx0Ly8gSWYgdGhhdCBmdW5jdGlvbiBkb2Vzbid0IGV4aXN0LCBIb3RDYXQgd2lsbCBzaW1wbHkgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBsYXN0XG5cdFx0XHQvLyBlbnRyeSBpbiB0aGUgYXJyYXkuXG5cdFx0XHQvLyBEZWZhdWx0cyB0byAnW1snICsgY2F0ZWdvcnlfY2Fub25pY2FsICsgJzokMV1dJy4gQ2FuIGJlIG92ZXJyaWRkZW4gaWYgaW4gdGhlIHNob3J0IGVkaXQgc3VtbWFyaWVzXG5cdFx0XHQvLyBub3QgdGhlIHN0YW5kYXJkIGNhdGVnb3J5IG5hbWUgc2hvdWxkIGJlIHVzZWQgYnV0LCBzYXksIGEgc2hvcnRlciBuYW1lc3BhY2UgYWxpYXMuICQxIGlzIHJlcGxhY2VkXG5cdFx0XHQvLyBieSBhIGNhdGVnb3J5IG5hbWUuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZSc6ICckMScsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jb21taXQnOiAn5L+d5a2YJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW9rJzogJ+ehruWumicsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYW5jZWwnOiAn5Y+W5raIJyxcblx0XHRcdC8vIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfZXJyb3InOlxuXHRcdFx0XHQn5peg5rOV5LuO5pyN5Yqh5Zmo5Y+W5b6X6aG16Z2i5paH5a2X44CC5Zug5q2k77yM5oKo55qE5YiG57G75pu05pS55peg5rOV5L+d5a2Y44CC5oiR5Lus5Li65q2k5LiN5L6/6KGo56S65oqx5q2J44CCJyxcblx0XHRcdC8vIFBsdXJhbCBvZiBjYXRlZ29yeV9jYW5vbmljYWwuXG5cdFx0XHQnaG90Y2F0LWNhdGVnb3JpZXMnOiAn5YiG57G7Jyxcblx0XHRcdC8vIE5hbWVzIGZvciB0aGUgc2VhcmNoIGVuZ2luZXNcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXNlYXJjaGluZGV4JzogJ+aQnOe0oue0ouW8lScsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYWdlbGlzdCc6ICfpobXpnaLliJfooagnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtY29tYmluZWQnOiAn5ZCI5bm25pCc57SiJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXN1YmNhdCc6ICflrZDliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFyZW50Y2F0JzogJ+S4iuWxguWIhuexuycsXG5cdFx0XHQvLyBUaGUgdG9vbHRpcHMgZm9yIHRoZSBhYm92ZSBsaW5rc1xuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1jaGFuZ2UnOiAn5L+u5pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVtb3ZlJzogJ+enu+mZpCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWFkZCc6ICflop7liqDkuIDkuKrmlrDliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZXN0b3JlJzogJ+aSpOmUgOabtOaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVuZG8nOiAn5pKk6ZSA5pu05pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtZG93bic6ICfmiZPlvIDku6Xkv67mlLnlubbmmL7npLrlrZDliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11cCc6ICfmiZPlvIDku6Xkv67mlLnlubbmmL7npLrkuIrlsYLliIbnsbsnLFxuXHRcdFx0Ly8gVG9vbHRpcCBmb3IgdGhlIFwiZW50ZXIgbXVsdGktbW9kZVwiIGxpbmtcblx0XHRcdCdob3RjYXQtbXVsdGlfdG9vbHRpcCc6ICfkv67mlLnlpJrkuKrliIbnsbsnLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2hvdENhdE1lc3NhZ2VzfTtcbiIsICIvKiFcbiAqIEBkZXNjcmlwdGlvbiBBamF4LWJhc2VkIHNpbXBsZSBDYXRlZ29yeSBtYW5hZ2VyLiBBbGxvd3MgYWRkaW5nL3JlbW92aW5nL2NoYW5naW5nIGNhdGVnb3JpZXMgb24gYSBwYWdlIHZpZXcuXG4gKiBTdXBwb3J0cyBtdWx0aXBsZSBjYXRlZ29yeSBjaGFuZ2VzLCBhcyB3ZWxsIGFzIHJlZGlyZWN0IGFuZCBkaXNhbWJpZ3VhdGlvbiByZXNvbHV0aW9uLiBBbHNvXG4gKiBwbHVncyBpbnRvIHRoZSB1cGxvYWQgZm9ybS4gU2VhcmNoIGVuZ2luZXMgdG8gdXNlIGZvciB0aGUgc3VnZ2VzdGlvbiBsaXN0IGFyZSBjb25maWd1cmFibGUsIGFuZFxuICogY2FuIGJlIHNlbGVjdGVkIGludGVyYWN0aXZlbHkuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9IZWxwOkdhZGdldC1Ib3RDYXR9XG4gKiBAYXV0aG9yIGF1dGhvcnMgPGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvSGVscDpHYWRnZXQtSG90Q2F0L1ZlcnNpb25faGlzdG9yeT5cbiAqL1xuaW1wb3J0IHR5cGUge1xuXHRIb3RDYXRBcGlQYWdlLFxuXHRIb3RDYXRBcGlRdWVyeVJlc3BvbnNlLFxuXHRIb3RDYXRDb25maWcsXG5cdEhvdENhdFN1Z2dlc3Rpb25DYWxsYmFjayxcblx0SG90Q2F0U3VnZ2VzdGlvbkNvbmZpZyxcblx0SG90Q2F0U3VnZ2VzdGlvbkVuZ2luZSxcblx0SG90Q2F0U3VnZ2VzdGlvblRpdGxlcyxcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2NvbmZ9IGZyb20gJy4vY29uZic7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vZ2V0TWVzc2FnZSc7XG5pbXBvcnQge213QXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgcG5vIGZyb20gJy4uL2ltYWdlcy9QX25vLnN2Zyc7XG5pbXBvcnQgcHllcyBmcm9tICcuLi9pbWFnZXMvUF95ZXMuc3ZnJztcblxuLy8gTWFpbiBib2R5XG5cbi8vIEluaXRpYWxpemUgTWVkaWFXaWtpIEFQSVxuY29uc3QgYXBpID0gbXdBcGkoJ0hvdENhdC8zLjAnKTtcbi8vIENvbmZpZ3VyYXRpb24gc3R1ZmYuXG5jb25zdCBIQzogSG90Q2F0Q29uZmlnID0ge1xuXHQvLyBUaGUgbGl0dGxlIG1vZGlmaWNhdGlvbiBsaW5rcyBkaXNwbGF5ZWQgYWZ0ZXIgY2F0ZWdvcnkgbmFtZXMuIFUrMjIxMiBpcyBhIG1pbnVzIHNpZ247IFUrMjE5MyBhbmQgVSsyMTkxIGFyZVxuXHQvLyBkb3dud2FyZCBhbmQgdXB3YXJkIHBvaW50aW5nIGFycm93cy4gRG8gbm90IHVzZSDihpMgYW5kIOKGkSBpbiB0aGUgY29kZSFcblx0bGlua3M6IHtcblx0XHRjaGFuZ2U6ICcowrEpJyxcblx0XHRyZW1vdmU6ICcoXFx1MjIxMiknLFxuXHRcdGFkZDogJygrKScsXG5cdFx0cmVzdG9yZTogJyjDlyknLFxuXHRcdHVuZG86ICcow5cpJyxcblx0XHRkb3duOiAnKFxcdTIxOTMpJyxcblx0XHR1cDogJyhcXHUyMTkxKScsXG5cdH0sXG5cdGNoYW5nZVRhZzogJ0hvdENhdCcsXG5cdC8vIFRoZSBIVE1MIGNvbnRlbnQgb2YgdGhlIFwiZW50ZXIgbXVsdGktbW9kZVwiIGxpbmsgYXQgdGhlIGZyb250LlxuXHRhZGRtdWx0aTogJzxzcGFuPis8c3VwPis8L3N1cD48L3NwYW4+Jyxcblx0Ly8gUmV0dXJuIHRydWUgdG8gZGlzYWJsZSBIb3RDYXQuXG5cdGRpc2FibGU6ICgpOiBib29sZWFuID0+IHtcblx0XHRjb25zdCBucyA9IGNvbmYud2dOYW1lc3BhY2VOdW1iZXI7XG5cdFx0Y29uc3QgbnNJZHMgPSBjb25mLndnTmFtZXNwYWNlSWRzO1xuXHRcdHJldHVybiAoXG5cdFx0XHRucyA8IDAgfHxcblx0XHRcdC8vIFNwZWNpYWwgcGFnZXM7IFNwZWNpYWw6VXBsb2FkIGlzIGhhbmRsZWQgZGlmZmVyZW50bHlcblx0XHRcdG5zID09PSAxMCB8fFxuXHRcdFx0Ly8gVGVtcGxhdGVzXG5cdFx0XHRucyA9PT0gODI4IHx8XG5cdFx0XHQvLyBNb2R1bGUgKEx1YSlcblx0XHRcdG5zID09PSA4IHx8XG5cdFx0XHQvLyBNZWRpYVdpa2lcblx0XHRcdChucyA9PT0gNiAmJiAhY29uZi53Z0FydGljbGVJZCkgfHxcblx0XHRcdC8vIE5vbi1leGlzdGluZyBmaWxlIHBhZ2VzXG5cdFx0XHQobnMgPT09IDIgJiYgL1xcLihqc3xjc3MpJC8udGVzdChjb25mLndnVGl0bGUpKSB8fFxuXHRcdFx0Ly8gVXNlciBzY3JpcHRzXG5cdFx0XHQobnNJZHMgJiYgKG5zID09PSBuc0lkc1snY3JlYXRvciddIHx8IG5zID09PSBuc0lkc1sndGltZWR0ZXh0J10gfHwgbnMgPT09IG5zSWRzWydpbnN0aXR1dGlvbiddKSkgfHxcblx0XHRcdGZhbHNlXG5cdFx0KTtcblx0fSxcblx0Ly8gQSByZWdleHAgbWF0Y2hpbmcgYSB0ZW1wbGF0ZXMgdXNlZCB0byBtYXJrIHVuY2F0ZWdvcml6ZWQgcGFnZXMsIGlmIHlvdXIgd2lraSBkb2VzIGhhdmUgdGhhdC5cblx0Ly8gSWYgbm90LCBzZXQgaXQgdG8gbnVsbC5cblx0dW5jYXRfcmVnZXhwOiAve3tcXHMqW1V1XW5jYXRlZ29yaXplZFxccypbXn1dKn19XFxzKig8IS0tLio/LS0+XFxzKik/L2csXG5cdC8vIFRoZSBpbWFnZXMgdXNlZCBmb3IgdGhlIGxpdHRsZSBpbmRpY2F0aW9uIGljb24uIFNob3VsZCBub3QgbmVlZCBjaGFuZ2luZy5cblx0ZXhpc3RzWWVzOiBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KHB5ZXMpfWAsXG5cdGV4aXN0c05vOiBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KHBubyl9YCxcblx0Ly8gYSBsaXN0IG9mIGNhdGVnb3JpZXMgd2hpY2ggY2FuIGJlIHJlbW92ZWQgYnkgcmVtb3ZpbmcgYSB0ZW1wbGF0ZVxuXHQvLyBrZXk6IHRoZSBjYXRlZ29yeSB3aXRob3V0IG5hbWVzcGFjZVxuXHQvLyB2YWx1ZTogQSByZWdleHAgbWF0Y2hpbmcgdGhlIHRlbXBsYXRlIG5hbWUsIGFnYWluIHdpdGhvdXQgbmFtZXNwYWNlXG5cdC8vIElmIHlvdSBkb24ndCBoYXZlIHRoaXMgYXQgeW91ciB3aWtpLCBvciBkb24ndCB3YW50IHRoaXMsIHNldCBpdCB0byBhbiBlbXB0eSBvYmplY3Qge30uXG5cdHRlbXBsYXRlX2NhdGVnb3JpZXM6IHt9LFxuXHQvLyBPdmVycmlkZSB0aGUgZGVjaXNpb24gb2Ygd2hldGhlciBIb3RDYXQgc2hvdWxkIGhlbHAgdXNlcnMgYnkgYXV0b21hdGljYWxseVxuXHQvLyBjYXBpdGFsaXNpbmcgdGhlIHRpdGxlIGluIHRoZSB1c2VyIGlucHV0IHRleHQgaWYgdGhlIHdpa2kgaGFzIGNhc2Utc2Vuc2l0aXZlIHBhZ2UgbmFtZXMuXG5cdC8vIEJhc2ljYWxseSwgdGhpcyB3aWxsIG1ha2UgYW4gQVBJIHF1ZXJ5IHRvIGNoZWNrIHRoZSBNZWRpYVdpa2kgY29uZmlndXJhdGlvbiBhbmQgSG90Q2F0IHRoZW4gc2V0c1xuXHQvLyB0aGlzIHRvIHRydWUgZm9yIG1vc3Qgd2lraXMsIGFuZCB0byBmYWxzZSBvbiBXaWt0aW9uYXJ5LlxuXHQvL1xuXHQvLyBZb3UgY2FuIHNldCB0aGlzIGRpcmVjdGx5IGlmIHRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIGl0LiBGb3IgZXhhbXBsZSwgR2VvcmdpYW4gV2lraXBlZGlhIChrYXdpa2kpLFxuXHQvLyBpcyBrbm93biB0byBoYXZlIGRpZmZlcmVudCBjYXBpdGFsaXNhdGlvbiBsb2dpYyBiZXR3ZWVuIE1lZGlhV2lraSBQSFAgYW5kIEphdmFTY3JpcHQuIEFzIHN1Y2gsIGF1dG9tYXRpY1xuXHQvLyBjYXNlIGNoYW5nZXMgaW4gSmF2YVNjcmlwdCBieSBIb3RDYXQgd291bGQgYmUgd3JvbmcuXG5cdGNhcGl0YWxpemVQYWdlTmFtZXM6IG51bGwsXG5cdC8vIElmIHVwbG9hZF9kaXNhYmxlZCBpcyB0cnVlLCBIb3RDYXQgd2lsbCBub3QgYmUgdXNlZCBvbiB0aGUgVXBsb2FkIGZvcm0uXG5cdHVwbG9hZF9kaXNhYmxlZDogZmFsc2UsXG5cdC8vIFNpbmdsZSByZWd1bGFyIGV4cHJlc3Npb24gbWF0Y2hpbmcgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllcyB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIG9yXG5cdC8vIGFkZGVkIHVzaW5nIEhvdENhdC4gRm9yIGluc3RhbmNlIC9cXGJzdHVicz8kLyAoYW55IGNhdGVnb3J5IGVuZGluZyB3aXRoIHRoZSB3b3JkIFwic3R1YlwiXG5cdC8vIG9yIFwic3R1YnNcIiksIG9yIC8oXFxic3R1YnM/JCl8XFxibWFpbnRlbmFuY2VcXGIvIChzdHViIGNhdGVnb3JpZXMgYW5kIGFueSBjYXRlZ29yeSB3aXRoIHRoZVxuXHQvLyB3b3JkIFwibWFpbnRlbmFuY2VcIiBpbiBpdHMgdGl0bGUuXG5cdGJsYWNrbGlzdDogbnVsbCxcblx0Ly8gU3R1ZmYgY2hhbmdlYWJsZSBieSB1c2Vyczpcblx0Ly8gQmFja2dyb3VuZCBmb3IgY2hhbmdlZCBjYXRlZ29yaWVzIGluIG11bHRpLWVkaXQgbW9kZS4gRGVmYXVsdCBpcyBhIHZlcnkgbGlnaHQgc2FsbW9uIHBpbmsuXG5cdGJnX2NoYW5nZWQ6ICcjRkNBJyxcblx0Ly8gSWYgdHJ1ZSwgSG90Q2F0IHdpbGwgbmV2ZXIgYXV0b21hdGljYWxseSBzdWJtaXQgY2hhbmdlcy4gSG90Q2F0IHdpbGwgb25seSBvcGVuIGFuIGVkaXQgcGFnZSB3aXRoXG5cdC8vIHRoZSBjaGFuZ2VzOyB1c2VycyBtdXN0IGFsd2F5cyBzYXZlIGV4cGxpY2l0bHkuXG5cdG5vX2F1dG9jb21taXQ6IGZhbHNlLFxuXHQvLyBJZiB0cnVlLCB0aGUgXCJjYXRlZ29yeSBkZWxldGlvblwiIGxpbmsgXCIoLSlcIiB3aWxsIG5ldmVyIHNhdmUgYXV0b21hdGljYWxseSBidXQgYWx3YXlzIHNob3cgYW5cblx0Ly8gZWRpdCBwYWdlIHdoZXJlIHRoZSB1c2VyIGhhcyB0byBzYXZlIHRoZSBlZGl0IG1hbnVhbGx5LiBJcyBmYWxzZSBieSBkZWZhdWx0IGJlY2F1c2UgdGhhdCdzIHRoZVxuXHQvLyB0cmFkaXRpb25hbCBiZWhhdmlvci4gVGhpcyBzZXR0aW5nIG92ZXJyaWRlcyBub19hdXRvY29tbWl0IGZvciBcIigtKVwiIGxpbmtzLlxuXHRkZWxfbmVlZHNfZGlmZjogZmFsc2UsXG5cdC8vIFRpbWUsIGluIG1pbGxpc2Vjb25kcywgdGhhdCBIb3RDYXQgd2FpdHMgYWZ0ZXIgYSBrZXlzdHJva2UgYmVmb3JlIG1ha2luZyBhIHJlcXVlc3QgdG8gdGhlXG5cdC8vIHNlcnZlciB0byBnZXQgc3VnZ2VzdGlvbnMuXG5cdHN1Z2dlc3RfZGVsYXk6IDEwMDAsXG5cdC8vIERlZmF1bHQgd2lkdGgsIGluIGNoYXJhY3RlcnMsIG9mIHRoZSB0ZXh0IGlucHV0IGZpZWxkLlxuXHRlZGl0Ym94X3dpZHRoOiA0MCxcblx0Ly8gT25lIG9mIHRoZSBlbmdpbmVfbmFtZXMgYWJvdmUsIHRvIGJlIHVzZWQgYXMgdGhlIGRlZmF1bHQgc3VnZ2VzdGlvbiBlbmdpbmUuXG5cdHN1Z2dlc3Rpb25zOiAnY29tYmluZWQnLFxuXHQvLyBJZiB0cnVlLCBhbHdheXMgdXNlIHRoZSBkZWZhdWx0IGVuZ2luZSwgYW5kIG5ldmVyIGRpc3BsYXkgYSBzZWxlY3Rvci5cblx0Zml4ZWRfc2VhcmNoOiBmYWxzZSxcblx0Ly8gSWYgZmFsc2UsIGRvIG5vdCBkaXNwbGF5IHRoZSBcInVwXCIgYW5kIFwiZG93blwiIGxpbmtzXG5cdHVzZV91cF9kb3duOiB0cnVlLFxuXHQvLyBEZWZhdWx0IGxpc3Qgc2l6ZVxuXHRsaXN0U2l6ZTogMTAsXG5cdC8vIElmIHRydWUsIHNpbmdsZSBjYXRlZ29yeSBjaGFuZ2VzIGFyZSBtYXJrZWQgYXMgbWlub3IgZWRpdHMuIElmIGZhbHNlLCB0aGV5J3JlIG5vdC5cblx0c2luZ2xlX21pbm9yOiB0cnVlLFxuXHQvLyBJZiB0cnVlLCBuZXZlciBhZGQgYSBwYWdlIHRvIHRoZSB1c2VyJ3Mgd2F0Y2hsaXN0LiBJZiBmYWxzZSwgcGFnZXMgZ2V0IGFkZGVkIHRvIHRoZSB3YXRjaGxpc3QgaWZcblx0Ly8gdGhlIHVzZXIgaGFzIHRoZSBcIkFkZCBwYWdlcyBJIGVkaXQgdG8gbXkgd2F0Y2hsaXN0XCIgb3IgdGhlIFwiQWRkIHBhZ2VzIEkgY3JlYXRlIHRvIG15IHdhdGNobGlzdFwiXG5cdC8vIG9wdGlvbnMgaW4gaGlzIG9yIGhlciBwcmVmZXJlbmNlcyBzZXQuXG5cdGRvbnRfYWRkX3RvX3dhdGNobGlzdDogZmFsc2UsXG5cdHNob3J0Y3V0czogbnVsbCxcblx0YWRkU2hvcnRjdXRzOiAobWFwPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IG51bGwpOiB2b2lkID0+IHtcblx0XHRpZiAoIW1hcCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRIQy5zaG9ydGN1dHMgfHw9IHt9O1xuXHRcdGZvciAobGV0IGsgaW4gbWFwKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24obWFwLCBrKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGxldCB2ID0gbWFwW2tdO1xuXHRcdFx0aWYgKHR5cGVvZiB2ICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGsgPSBrLnRyaW0oKTtcblx0XHRcdHYgPSB2LnRyaW0oKTtcblx0XHRcdGlmIChrLmxlbmd0aCA9PT0gMCB8fCB2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdEhDLnNob3J0Y3V0c1trXSA9IHY7XG5cdFx0fVxuXHR9LFxuXHQvLyBGaWxsZWQgaW4gYmVsb3dcblx0Y2F0ZWdvcnlfY2Fub25pY2FsOiAnJyxcblx0Y2F0ZWdvcnlfcmVnZXhwOiAnJyxcblx0dGVtcGxhdGVfcmVnZXhwOiAnJyxcbn07XG53aW5kb3cuSG90Q2F0ID0gSEM7XG4vLyBNb3JlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBXZSBoYXZlIGEgZmV3IHBsYWNlcyB3aGVyZSB3ZSB0ZXN0IGZvciB0aGUgYnJvd3Nlcjogb25jZSBmb3Jcbi8vIFNhZmFyaSA8IDMuMCwgYW5kIHR3aWNlIGZvciBXZWJLaXQgKENocm9tZSBvciBTYWZhcmksIGFueSB2ZXJzaW9ucylcbmNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuY29uc3QgaXNfd2Via2l0ID0gL2FwcGxld2Via2l0XFwvXFxkKy8udGVzdCh1YSkgJiYgIXVhLmluY2x1ZGVzKCdzcG9vZmVyJyk7XG5sZXQgY2F0X3ByZWZpeDogUmVnRXhwIHwgbnVsbCA9IG51bGw7XG5sZXQgbm9TdWdnZXN0aW9ucyA9IGZhbHNlO1xuLy8gTm8gZnVydGhlciBjaGFuZ2VzIHNob3VsZCBiZSBuZWNlc3NhcnkgaGVyZS5cbi8vIFRoZSBmb2xsb3dpbmcgcmVndWxhciBleHByZXNzaW9uIHN0cmluZ3MgYXJlIHVzZWQgd2hlbiBzZWFyY2hpbmcgZm9yIGNhdGVnb3JpZXMgaW4gd2lraXRleHQuXG5jb25zdCB3aWtpVGV4dEJsYW5rID0gU3RyaW5nLnJhd2BbXFx0IF9cXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDBBXFx1MjAyOFxcdTIwMjlcXHUyMDJGXFx1MjA1RlxcdTMwMDBdK2A7XG5jb25zdCB3aWtpVGV4dEJsYW5rUkUgPSBuZXcgUmVnRXhwKHdpa2lUZXh0QmxhbmssICdnJyk7XG4vLyBSZWdleHAgZm9yIGhhbmRsaW5nIGJsYW5rcyBpbnNpZGUgYSBjYXRlZ29yeSB0aXRsZSBvciBuYW1lc3BhY2UgbmFtZS5cbi8vIFNlZSB7QGxpbmsgaHR0cDovL3N2bi53aWtpbWVkaWEub3JnL3ZpZXd2Yy9tZWRpYXdpa2kvdHJ1bmsvcGhhc2UzL2luY2x1ZGVzL1RpdGxlLnBocD9yZXZpc2lvbj0xMDQwNTEmdmlldz1tYXJrdXAjbDI3MjJ9XG4vLyBTZWUgYWxzbyB7QGxpbmsgaHR0cDovL3d3dy5maWxlZm9ybWF0LmluZm8vaW5mby91bmljb2RlL2NhdGVnb3J5L1pzL2xpc3QuaHRtfVxuLy8gICBNZWRpYVdpa2kgY29sbGFwc2VzIHNldmVyYWwgY29udGlndW91cyBibGFua3MgaW5zaWRlIGEgcGFnZSB0aXRsZSB0byBvbmUgc2luZ2xlIGJsYW5rLiBJdCBhbHNvIHJlcGxhY2UgYVxuLy8gbnVtYmVyIG9mIHNwZWNpYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGJ5IHNpbXBsZSBibGFua3MuIEFuZCBmaW5hbGx5LCBibGFua3MgYXJlIHRyZWF0ZWQgYXMgdW5kZXJzY29yZXMuXG4vLyBUaGVyZWZvcmUsIHdoZW4gbG9va2luZyBmb3IgcGFnZSB0aXRsZXMgaW4gd2lraXRleHQsIHdlIG11c3QgaGFuZGxlIGFsbCB0aGVzZSBjYXNlcy5cbi8vICAgTm90ZTogd2UgX2RvXyBpbmNsdWRlIHRoZSBob3Jpem9udGFsIHRhYiBpbiB0aGUgYWJvdmUgbGlzdCwgZXZlbiB0aG91Z2ggdGhlIE1lZGlhV2lraSBzb2Z0d2FyZSBmb3Igc29tZSByZWFzb25cbi8vIGFwcGVhcnMgdG8gbm90IGhhbmRsZSBpdC4gVGhlIHplcm8td2lkdGggc3BhY2UgXFx1MjAwQiBpcyBfbm90XyBoYW5kbGVkIGFzIGEgc3BhY2UgaW5zaWRlIHRpdGxlcyBieSBNVy5cbmNvbnN0IHdpa2lUZXh0QmxhbmtPckJpZGkgPSBTdHJpbmcucmF3YFtcXHQgX1xceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMEJcXHUyMDBFXFx1MjAwRlxcdTIwMjgtXFx1MjAyRlxcdTIwNUZcXHUzMDAwXSpgO1xuLy8gV2hpdGVzcGFjZSByZWdleHAgZm9yIGhhbmRsaW5nIHdoaXRlc3BhY2UgYmV0d2VlbiBsaW5rIGNvbXBvbmVudHMuIEluY2x1ZGluZyB0aGUgaG9yaXpvbnRhbCB0YWIsIGJ1dCBub3QgXFxuXFxyXFxmXFx2OlxuLy8gYSBsaW5rIG11c3QgYmUgb24gb25lIHNpbmdsZSBsaW5lLlxuLy8gICBNZWRpYVdpa2kgYWxzbyByZW1vdmVzIFVuaWNvZGUgYmlkaSBvdmVycmlkZSBjaGFyYWN0ZXJzIGluIHBhZ2UgdGl0bGVzIChhbmQgbmFtZXNwYWNlIG5hbWVzKSBjb21wbGV0ZWx5LlxuLy8gVGhpcyBpcyAqbm90KiBoYW5kbGVkLCBhcyBpdCB3b3VsZCByZXF1aXJlIHVzIHRvIGFsbG93IGFueSBvZiBbXFx1MjAwRVxcdTIwMEZcXHUyMDJBLVxcdTIwMkVdIGJldHdlZW4gYW55IHR3b1xuLy8gY2hhcmFjdGVycyBpbnNpZGUgYSBjYXRlZ29yeSBsaW5rLiBJdCBfY291bGRfIGJlIGRvbmUgdGhvdWdoLi4uIFdlIF9kb18gaGFuZGxlIHN0cmFuZ2Ugc3BhY2VzLCBpbmNsdWRpbmcgdGhlXG4vLyB6ZXJvLXdpZHRoIHNwYWNlIFxcdTIwMEIsIGFuZCBiaWRpIG92ZXJyaWRlcyBiZXR3ZWVuIHRoZSBjb21wb25lbnRzIG9mIGEgY2F0ZWdvcnkgbGluayAoYWRqYWNlbnQgdG8gdGhlIGNvbG9uLFxuLy8gb3IgYWRqYWNlbnQgdG8gYW5kIGluc2lkZSBvZiBcIltbXCIgYW5kIFwiXV1cIikuXG4vLyBGaXJzdCBhdXRvLWxvY2FsaXplIHRoZSByZWdleHBzIGZvciB0aGUgY2F0ZWdvcnkgYW5kIHRoZSB0ZW1wbGF0ZSBuYW1lc3BhY2VzLlxuY29uc3QgZm9ybWF0dGVkTmFtZXNwYWNlcyA9IGNvbmYud2dGb3JtYXR0ZWROYW1lc3BhY2VzO1xuY29uc3QgbmFtZXNwYWNlSWRzID0gY29uZi53Z05hbWVzcGFjZUlkcztcbmNvbnN0IGF1dG9Mb2NhbGl6ZSA9IChuYW1lc3BhY2VOdW1iZXI6IG51bWJlciwgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGNyZWF0ZVJlZ2V4cFN0ciA9IChuYW1lPzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRpZiAoIW5hbWUgfHwgbmFtZS5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0bGV0IHJlZ2V4X25hbWUgPSAnJztcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGluaXRpYWwgPSBuYW1lLmNoYXJBdChpKTtcblx0XHRcdGNvbnN0IGxsID0gaW5pdGlhbC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0Y29uc3QgdWwgPSBpbml0aWFsLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRyZWdleF9uYW1lICs9IGxsID09PSB1bCA/IGluaXRpYWwgOiBgWyR7bGx9JHt1bH1dYDtcblx0XHR9XG5cdFx0cmV0dXJuIHJlZ2V4X25hbWUucmVwbGFjZSgvKFskKCkqKy4/XFxcXF5dKS9nLCBTdHJpbmcucmF3YFxcJDFgKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayk7XG5cdH07XG5cdGZhbGxiYWNrID0gZmFsbGJhY2sudG9Mb3dlckNhc2UoKTtcblx0Y29uc3QgY2Fub25pY2FsID0gKGZvcm1hdHRlZE5hbWVzcGFjZXNbU3RyaW5nKG5hbWVzcGFjZU51bWJlcildID8/ICcnKS50b0xvd2VyQ2FzZSgpO1xuXHRsZXQgcmVnZXhwID0gY3JlYXRlUmVnZXhwU3RyKGNhbm9uaWNhbCk7XG5cdGlmIChmYWxsYmFjayAmJiBjYW5vbmljYWwgIT09IGZhbGxiYWNrKSB7XG5cdFx0cmVnZXhwICs9IGB8JHtjcmVhdGVSZWdleHBTdHIoZmFsbGJhY2spfWA7XG5cdH1cblx0aWYgKG5hbWVzcGFjZUlkcykge1xuXHRcdGZvciAoY29uc3QgY2F0X25hbWUgaW4gbmFtZXNwYWNlSWRzKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHR5cGVvZiBjYXRfbmFtZSA9PT0gJ3N0cmluZycgJiZcblx0XHRcdFx0Y2F0X25hbWUudG9Mb3dlckNhc2UoKSAhPT0gY2Fub25pY2FsICYmXG5cdFx0XHRcdGNhdF9uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGZhbGxiYWNrICYmXG5cdFx0XHRcdG5hbWVzcGFjZUlkc1tjYXRfbmFtZV0gPT09IG5hbWVzcGFjZU51bWJlclxuXHRcdFx0KSB7XG5cdFx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGNhdF9uYW1lKX1gO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVnZXhwO1xufTtcbkhDLmNhdGVnb3J5X2Nhbm9uaWNhbCA9IGZvcm1hdHRlZE5hbWVzcGFjZXNbJzE0J10gPz8gJyc7XG5IQy5jYXRlZ29yeV9yZWdleHAgPSBhdXRvTG9jYWxpemUoMTQsICdjYXRlZ29yeScpO1xuaWYgKGZvcm1hdHRlZE5hbWVzcGFjZXNbJzEwJ10pIHtcblx0SEMudGVtcGxhdGVfcmVnZXhwID0gYXV0b0xvY2FsaXplKDEwLCAndGVtcGxhdGUnKTtcbn1cbi8vIFV0aWxpdHkgZnVuY3Rpb25zLiBZZXMsIHRoaXMgZHVwbGljYXRlcyBzb21lIGZ1bmN0aW9uYWxpdHkgdGhhdCBhbHNvIGV4aXN0cyBpbiBvdGhlciBwbGFjZXMsIGJ1dFxuLy8gdG8ga2VlcCB0aGlzIHdob2xlIHN0dWZmIGluIGEgc2luZ2xlIGZpbGUgbm90IGRlcGVuZGluZyBvbiBhbnkgb3RoZXIgb24td2lraSBKYXZhU2NyaXB0cywgd2UgcmUtZG9cbi8vIHRoZXNlIGZldyBvcGVyYXRpb25zIGhlcmUuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBhcmdcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2xpdGVyYWxdIFJldHVybiBhIHRleHQgbm9kZSBpbnN0ZWFkIG9mIGFuIGVsZW1lbnRcbiAqIEByZXR1cm4ge05vZGV8bnVsbH1cbiAqL1xuaW50ZXJmYWNlIE1ha2Uge1xuXHQ8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4oYXJnOiBLKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdO1xuXHQoYXJnOiBzdHJpbmcsIGxpdGVyYWw6IHRydWUpOiBUZXh0O1xufVxuY29uc3QgbWFrZSA9ICgoYXJnOiBzdHJpbmcsIGxpdGVyYWw/OiBib29sZWFuKTogTm9kZSB8IG51bGwgPT4ge1xuXHRpZiAoIWFyZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHJldHVybiBsaXRlcmFsID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXJnKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJnKTtcbn0pIGFzIE1ha2U7XG5jb25zdCBwYXJhbSA9IChuYW1lOiBzdHJpbmcsIHVyaT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHR1cmkgfHw9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG5cdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgWyY/XSR7bmFtZX09KFteJiNdKilgKTtcblx0Y29uc3QgbSA9IHJlLmV4ZWModXJpKTtcblx0aWYgKG0gJiYgbS5sZW5ndGggPiAxKSB7XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChtWzFdIGFzIHN0cmluZyk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59O1xuY29uc3QgdGl0bGUgPSAoaHJlZj86IHN0cmluZyB8IG51bGwpOiBzdHJpbmcgfCBudWxsID0+IHtcblx0aWYgKCFocmVmKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0Y29uc3Qgc2NyaXB0ID0gYCR7Y29uZi53Z1NjcmlwdH0/YDtcblx0aWYgKFxuXHRcdGhyZWYuaW5kZXhPZihzY3JpcHQpID09PSAwIHx8XG5cdFx0aHJlZi5pbmRleE9mKGNvbmYud2dTZXJ2ZXIgKyBzY3JpcHQpID09PSAwIHx8XG5cdFx0KGNvbmYud2dTZXJ2ZXIuc2xpY2UoMCwgMikgPT09ICcvLycgJiYgaHJlZi5pbmRleE9mKGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgY29uZi53Z1NlcnZlciArIHNjcmlwdCkgPT09IDApXG5cdCkge1xuXHRcdC8vIGhyZWY9XCIvaW5kZXgucGhwP3RpdGxlPS4uLlwiXG5cdFx0cmV0dXJuIHBhcmFtKCd0aXRsZScsIGhyZWYpO1xuXHR9XG5cdC8vIGhyZWY9XCIvd2lraS8uLi5cIlxuXHRsZXQgcHJlZml4ID0gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpO1xuXHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkpIHtcblx0XHRwcmVmaXggPSBjb25mLndnU2VydmVyICsgcHJlZml4O1xuXHR9IC8vIEZ1bGx5IGV4cGFuZGVkIFVSTD9cblx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpICYmIHByZWZpeC5zbGljZSgwLCAyKSA9PT0gJy8vJykge1xuXHRcdHByZWZpeCA9IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgcHJlZml4O1xuXHR9IC8vIFByb3RvY29sLXJlbGF0aXZlIHdnU2VydmVyP1xuXHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkgPT09IDApIHtcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYuc2xpY2UocHJlZml4Lmxlbmd0aCkpO1xuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbmNvbnN0IGhhc0NsYXNzID0gKHtjbGFzc05hbWV9OiB7Y2xhc3NOYW1lOiBzdHJpbmd9LCBuYW1lOiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIGAgJHtjbGFzc05hbWV9IGAuaW5jbHVkZXMoYCAke25hbWV9IGApO1xufTtcbi8qKlxuICogTGVnYWN5IHN0eWxlIHByb3BlcnRpZXMgKHN1Y2ggYXMgYGFsaWduYCkgYXJlIG5vdCBwYXJ0IG9mIGBDU1NTdHlsZURlY2xhcmF0aW9uYCBpbiBUeXBlU2NyaXB0XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5XG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqL1xuY29uc3Qgc2V0U3R5bGVQcm9wZXJ0eSA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHQoZWxlbWVudC5zdHlsZSBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pW3Byb3BlcnR5XSA9IHZhbHVlO1xufTtcbmNvbnN0IGNhcGl0YWxpemUgPSAoc3RyPzogc3RyaW5nIHwgbnVsbCk6IHN0cmluZyA9PiB7XG5cdGlmICghc3RyIHx8IHN0ci5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0cmV0dXJuIHN0ci5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcbmNvbnN0IHdpa2lQYWdlUGF0aCA9IChwYWdlTmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIGNvbmYud2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsIGVuY29kZVVSSUNvbXBvbmVudChwYWdlTmFtZSkucmVwbGFjZSgvJTNBL2csICc6JykucmVwbGFjZSgvJTJGL2csICcvJykpO1xufTtcbmNvbnN0IGVzY2FwZVJFID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIHN0ci5yZXBsYWNlKC8oWyQoKSorLj9bXFxcXFxcXV5dKS9nLCBTdHJpbmcucmF3YFxcJDFgKTtcbn07XG5pbnRlcmZhY2UgU3Vic3RpdHV0ZU9wdGlvbnMge1xuXHRpbmRpY2F0b3I/OiBzdHJpbmc7XG5cdGxicmFjZT86IHN0cmluZztcblx0cmJyYWNlPzogc3RyaW5nO1xufVxudHlwZSBTdWJzdGl0dXRlTWFwID0gUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgKChtYXRjaDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZD47XG5jb25zdCBzdWJzdGl0dXRlRmFjdG9yeSA9IChvcHRpb25zPzogU3Vic3RpdHV0ZU9wdGlvbnMpOiAoKHN0cjogc3RyaW5nLCBtYXA/OiBTdWJzdGl0dXRlTWFwKSA9PiBzdHJpbmcpID0+IHtcblx0b3B0aW9ucyB8fD0ge307XG5cdGNvbnN0IGxlYWQgPSBvcHRpb25zLmluZGljYXRvciB8fCAnJCc7XG5cdGNvbnN0IGluZGljYXRvciA9IGVzY2FwZVJFKGxlYWQpO1xuXHRjb25zdCBsYnJhY2UgPSBlc2NhcGVSRShvcHRpb25zLmxicmFjZSB8fCAneycpO1xuXHRjb25zdCByYnJhY2UgPSBlc2NhcGVSRShvcHRpb25zLnJicmFjZSB8fCAnfScpO1xuXHRjb25zdCByZSA9IG5ldyBSZWdFeHAoXG5cdFx0Ly8gJCRcblx0XHRgKD86JHtpbmRpY2F0b3J9KCR7aW5kaWNhdG9yfSkpfGAgK1xuXHRcdFx0Ly8gJDAsICQxXG5cdFx0XHRgKD86JHtpbmRpY2F0b3J9KFxcXFxkKykpfGAgK1xuXHRcdFx0Ly8gJHtrZXl9XG5cdFx0XHRgKD86JHtpbmRpY2F0b3J9KD86JHtsYnJhY2V9KFteJHtsYnJhY2V9JHtyYnJhY2V9XSspJHtyYnJhY2V9KSl8YCArXG5cdFx0XHQvLyAka2V5IChvbmx5IGlmIGZpcnN0IGNoYXIgYWZ0ZXIgJCBpcyBub3QgJCwgZGlnaXQsIG9yIHsgKVxuXHRcdFx0YCg/OiR7aW5kaWNhdG9yfSg/ISg/Olske2luZGljYXRvcn0ke2xicmFjZX1dfFxcXFxkKSkoXFxcXFMrPylcXFxcYilgLFxuXHRcdCdnJ1xuXHQpO1xuXHQvLyBSZXBsYWNlICQxLCAkMiwgb3IgJHtrZXkxfSwgJHtrZXkyfSwgb3IgJGtleTEsICRrZXkyIGJ5IHZhbHVlcyBmcm9tIG1hcC4gJCQgaXMgcmVwbGFjZWQgYnkgYSBzaW5nbGUgJC5cblx0cmV0dXJuIChzdHI6IHN0cmluZywgbWFwPzogU3Vic3RpdHV0ZU1hcCk6IHN0cmluZyA9PiB7XG5cdFx0aWYgKCFtYXApIHtcblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fVxuXHRcdHJldHVybiBzdHIucmVwbGFjZShyZSwgKG1hdGNoOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nLCBpZHg6IHN0cmluZywga2V5OiBzdHJpbmcsIGFscGhhOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0aWYgKHByZWZpeCA9PT0gbGVhZCkge1xuXHRcdFx0XHRyZXR1cm4gbGVhZDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGsgPSBhbHBoYSB8fCBrZXkgfHwgaWR4O1xuXHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQgPSB0eXBlb2YgbWFwW2tdID09PSAnZnVuY3Rpb24nID8gbWFwW2tdKG1hdGNoLCBrKSA6IG1hcFtrXTtcblx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZW1lbnQgPT09ICdzdHJpbmcnID8gcmVwbGFjZW1lbnQgOiByZXBsYWNlbWVudCB8fCBtYXRjaDtcblx0XHR9KTtcblx0fTtcbn07XG5jb25zdCByZXBsYWNlU2hvcnRjdXRzID0gKCgpOiAoKHN0cjogc3RyaW5nLCBtYXA/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgbnVsbCkgPT4gc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHJlcGxhY2VIYXNoID0gc3Vic3RpdHV0ZUZhY3Rvcnkoe1xuXHRcdGluZGljYXRvcjogJyMnLFxuXHRcdGxicmFjZTogJ1snLFxuXHRcdHJicmFjZTogJ10nLFxuXHR9KTtcblx0cmV0dXJuIChzdHI6IHN0cmluZywgbWFwPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IG51bGwpOiBzdHJpbmcgPT4ge1xuXHRcdGNvbnN0IHMgPSByZXBsYWNlSGFzaChzdHIsIG1hcCA/PyB1bmRlZmluZWQpO1xuXHRcdHJldHVybiBIQy5jYXBpdGFsaXplUGFnZU5hbWVzID8gY2FwaXRhbGl6ZShzKSA6IHM7XG5cdH07XG59KSgpO1xuLy8gVGV4dCBtb2RpZmljYXRpb25cbmNvbnN0IGZpbmRDYXRzUkUgPSBuZXcgUmVnRXhwKFxuXHRgXFxcXFtcXFxcWyR7d2lraVRleHRCbGFua09yQmlkaX0oPzoke0hDLmNhdGVnb3J5X3JlZ2V4cH0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfTpbXlxcXFxdXStcXFxcXVxcXFxdYCxcblx0J2cnXG4pO1xuY29uc3QgcmVwbGFjZUJ5QmxhbmtzID0gKG1hdGNoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gbWF0Y2gucmVwbGFjZSgvKFxcc3xcXFMpL2csICcgJyk7XG59OyAvLyAvLi8gZG9lc24ndCBtYXRjaCBsaW5lYnJlYWtzLiAvKFxcc3xcXFMpLyBkb2VzLlxudHlwZSBIb3RDYXRDYXRlZ29yeU1hdGNoZXMgPSB7XG5cdG1hdGNoOiBSZWdFeHBFeGVjQXJyYXk7XG59W10gJiB7XG5cdHJlPzogUmVnRXhwO1xufTtcbmNvbnN0IGZpbmRfY2F0ZWdvcnkgPSAoXG5cdHdpa2l0ZXh0OiBzdHJpbmcsXG5cdGNhdGVnb3J5OiBzdHJpbmcsXG5cdG9uY2U/OiBib29sZWFuXG4pOiBSZWdFeHBFeGVjQXJyYXkgfCBIb3RDYXRDYXRlZ29yeU1hdGNoZXMgfCBudWxsID0+IHtcblx0bGV0IGNhdF9yZWdleDogUmVnRXhwO1xuXHRpZiAoSEMudGVtcGxhdGVfY2F0ZWdvcmllc1tjYXRlZ29yeV0pIHtcblx0XHRjYXRfcmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0YFxcXFx7XFxcXHske3dpa2lUZXh0QmxhbmtPckJpZGl9KCR7SEMudGVtcGxhdGVfcmVnZXhwfSg/PSR7d2lraVRleHRCbGFua09yQmlkaX06KSk/JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSg/OiR7XG5cdFx0XHRcdEhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbY2F0ZWdvcnldXG5cdFx0XHR9KSR7d2lraVRleHRCbGFua09yQmlkaX0oXFxcXHwuKj8pP1xcXFx9XFxcXH1gLFxuXHRcdFx0J2cnXG5cdFx0KTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBjYXRfbmFtZSA9IGVzY2FwZVJFKGNhdGVnb3J5KTtcblx0XHRjb25zdCBpbml0aWFsID0gY2F0X25hbWUuc2xpY2UoMCwgMSk7XG5cdFx0Y2F0X3JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdGBcXFxcW1xcXFxbJHt3aWtpVGV4dEJsYW5rT3JCaWRpfSgke0hDLmNhdGVnb3J5X3JlZ2V4cH0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfToke3dpa2lUZXh0QmxhbmtPckJpZGl9JHtcblx0XHRcdFx0aW5pdGlhbCA9PT0gJ1xcXFwnIHx8ICFIQy5jYXBpdGFsaXplUGFnZU5hbWVzXG5cdFx0XHRcdFx0PyBpbml0aWFsXG5cdFx0XHRcdFx0OiBgWyR7aW5pdGlhbC50b1VwcGVyQ2FzZSgpfSR7aW5pdGlhbC50b0xvd2VyQ2FzZSgpfV1gXG5cdFx0XHR9JHtjYXRfbmFtZS5zbGljZSgxKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayl9JHt3aWtpVGV4dEJsYW5rT3JCaWRpfShcXFxcfC4qPyk/XFxcXF1cXFxcXWAsXG5cdFx0XHQnZydcblx0XHQpO1xuXHR9XG5cdGlmIChvbmNlKSB7XG5cdFx0cmV0dXJuIGNhdF9yZWdleC5leGVjKHdpa2l0ZXh0KTtcblx0fVxuXHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsIFN0cmluZy5yYXdgKFxcc3xcXFMpKj88L25vYCwgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRjb25zdCBjb3BpZWR0ZXh0ID0gd2lraXRleHQucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csIHJlcGxhY2VCeUJsYW5rcykucmVwbGFjZShub3dpa2lSZWdleCwgcmVwbGFjZUJ5QmxhbmtzKTtcblx0Y29uc3QgcmVzdWx0OiBIb3RDYXRDYXRlZ29yeU1hdGNoZXMgPSBbXTtcblx0bGV0IGN1cnJfbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBudWxsO1xuXHR3aGlsZSAoKGN1cnJfbWF0Y2ggPSBjYXRfcmVnZXguZXhlYyhjb3BpZWR0ZXh0KSkgIT09IG51bGwpIHtcblx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB7XG5cdFx0XHRtYXRjaDogY3Vycl9tYXRjaCxcblx0XHR9O1xuXHR9XG5cdHJlc3VsdC5yZSA9IGNhdF9yZWdleDtcblx0cmV0dXJuIHJlc3VsdDsgLy8gQW4gYXJyYXkgY29udGFpbmluZyBhbGwgbWF0Y2hlcywgd2l0aCBwb3NpdGlvbnMsIGluIHJlc3VsdFsgaSBdLm1hdGNoXG59O1xubGV0IGludGVybGFuZ3VhZ2VSRTogUmVnRXhwIHwgbnVsbCA9IG51bGw7XG5pbnRlcmZhY2UgSG90Q2F0Q2hhbmdlUmVzdWx0IHtcblx0dGV4dDogc3RyaW5nO1xuXHRzdW1tYXJ5OiBzdHJpbmdbXTtcblx0ZXJyb3I6IHN0cmluZyB8IG51bGw7XG59XG5jb25zdCBjaGFuZ2VfY2F0ZWdvcnkgPSAoXG5cdHdpa2l0ZXh0OiBzdHJpbmcsXG5cdHRvUmVtb3ZlOiBzdHJpbmcgfCBudWxsLFxuXHR0b0FkZDogc3RyaW5nIHwgbnVsbCxcblx0a2V5OiBzdHJpbmcgfCBudWxsLFxuXHRpc19oaWRkZW4/OiBib29sZWFuXG4pOiBIb3RDYXRDaGFuZ2VSZXN1bHQgPT4ge1xuXHRjb25zdCBmaW5kX2luc2VydGlvbnBvaW50ID0gKF93aWtpdGV4dDogc3RyaW5nKToge2lkeDogbnVtYmVyOyBvbkNhdDogYm9vbGVhbn0gPT4ge1xuXHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0Y29uc3QgY29waWVkdGV4dCA9IF93aWtpdGV4dFxuXHRcdFx0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCByZXBsYWNlQnlCbGFua3MpXG5cdFx0XHQucmVwbGFjZShub3dpa2lSZWdleCwgcmVwbGFjZUJ5QmxhbmtzKTtcblx0XHQvLyBTZWFyY2ggaW4gY29waWVkdGV4dCB0byBhdm9pZCB0aGF0IHdlIGluc2VydCBpbnNpZGUgYW4gSFRNTCBjb21tZW50IG9yIGEgbm93aWtpIFwiZWxlbWVudFwiLlxuXHRcdGxldCBpbmRleCA9IC0xO1xuXHRcdGZpbmRDYXRzUkUubGFzdEluZGV4ID0gMDtcblx0XHR3aGlsZSAoZmluZENhdHNSRS5leGVjKGNvcGllZHRleHQpICE9PSBudWxsKSB7XG5cdFx0XHRpbmRleCA9IGZpbmRDYXRzUkUubGFzdEluZGV4O1xuXHRcdH1cblx0XHRpZiAoaW5kZXggPCAwKSB7XG5cdFx0XHQvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaW50ZXJsYW5ndWFnZSBsaW5rLi4uXG5cdFx0XHRsZXQgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBudWxsO1xuXHRcdFx0aWYgKGludGVybGFuZ3VhZ2VSRSkge1xuXHRcdFx0XHRtYXRjaCA9IGludGVybGFuZ3VhZ2VSRS5leGVjKGNvcGllZHRleHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQXBwcm94aW1hdGlvbiB3aXRob3V0IEFQSTogaW50ZXJsYW5ndWFnZSBsaW5rcyBzdGFydCB3aXRoIDIgdG8gMyBsb3dlciBjYXNlIGxldHRlcnMsIG9wdGlvbmFsbHkgZm9sbG93ZWQgYnlcblx0XHRcdFx0Ly8gYSBzZXF1ZW5jZSBvZiBncm91cHMgY29uc2lzdGluZyBvZiBhIGRhc2ggZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgbG93ZXIgY2FzZSBsZXR0ZXJzLiBFeGNlcHRpb25zIGFyZSBcInNpbXBsZVwiXG5cdFx0XHRcdC8vIGFuZCBcInRva2lwb25hXCIuXG5cdFx0XHRcdG1hdGNoID0gLygoXnxcXG5cXHI/KShcXFtcXFtcXHMqKChbYS16XXsyLDN9KC1bYS16XSspKil8c2ltcGxlfHRva2lwb25hKVxccyo6W15cXF1dK11dXFxzKikpKyQvLmV4ZWMoXG5cdFx0XHRcdFx0Y29waWVkdGV4dFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdGluZGV4ID0gbWF0Y2guaW5kZXg7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpZHg6IGluZGV4LFxuXHRcdFx0XHRvbkNhdDogZmFsc2UsXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0aWR4OiBpbmRleCxcblx0XHRcdG9uQ2F0OiBpbmRleCA+PSAwLFxuXHRcdH07XG5cdH07XG5cdGNvbnN0IHN1bW1hcnk6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IG5hbWVTcGFjZSA9IEhDLmNhdGVnb3J5X2Nhbm9uaWNhbDtcblx0Ly8gUG9zaXRpb24gb2YgcmVtb3ZlZCBjYXRlZ29yeTtcblx0Y29uc3Qga2V5Q2hhbmdlID0gdG9SZW1vdmUgJiYgdG9BZGQgJiYgdG9SZW1vdmUgPT09IHRvQWRkICYmIHRvQWRkLmxlbmd0aCA+IDA7XG5cdGxldCBtYXRjaGVzOiBSZWdFeHBFeGVjQXJyYXkgfCBIb3RDYXRDYXRlZ29yeU1hdGNoZXMgfCBudWxsO1xuXHRsZXQgY2F0X3BvaW50ID0gLTE7XG5cdGtleSAmJj0gYHwke2tleX1gO1xuXHQvLyBSZW1vdmVcblx0aWYgKHRvUmVtb3ZlICYmIHRvUmVtb3ZlLmxlbmd0aCA+IDApIHtcblx0XHRtYXRjaGVzID0gZmluZF9jYXRlZ29yeSh3aWtpdGV4dCwgdG9SZW1vdmUpO1xuXHRcdGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdGVycm9yOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfbm90Rm91bmQnLCB0b1JlbW92ZSksXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRjb25zdCBtYXRjaGVzQXJyYXkgPSBtYXRjaGVzIGFzIEhvdENhdENhdGVnb3J5TWF0Y2hlcztcblx0XHRjb25zdCBmaXJzdE1hdGNoID0gbWF0Y2hlc0FycmF5WzBdIS5tYXRjaDtcblx0XHRsZXQgYmVmb3JlID0gd2lraXRleHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgZmlyc3RNYXRjaC5pbmRleCkpO1xuXHRcdGxldCBhZnRlciA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGZpcnN0TWF0Y2guaW5kZXggKyBmaXJzdE1hdGNoWzBdLmxlbmd0aCkpO1xuXHRcdGlmIChtYXRjaGVzQXJyYXkubGVuZ3RoID4gMSkge1xuXHRcdFx0Ly8gUmVtb3ZlIGFsbCBvY2N1cnJlbmNlcyBpbiBhZnRlclxuXHRcdFx0bWF0Y2hlc0FycmF5LnJlIS5sYXN0SW5kZXggPSAwO1xuXHRcdFx0YWZ0ZXIgPSBhZnRlci5yZXBsYWNlKG1hdGNoZXNBcnJheS5yZSEsICcnKTtcblx0XHR9XG5cdFx0aWYgKFxuXHRcdFx0dG9BZGQgJiYgLy8gbmFtZVNwYWNlID0gbWF0Y2hlc1sgMCBdLm1hdGNoWyAxIF0gfHwgbmFtZVNwYWNlOyBDYW5vbmljYWwgbmFtZXNwYWNlIHNob3VsZCBiZSBhbHdheXMgcHJlZmVycmVkXG5cdFx0XHRrZXkgPT09IG51bGxcblx0XHQpIHtcblx0XHRcdGtleSA9IGZpcnN0TWF0Y2hbMl0gPz8gbnVsbDtcblx0XHR9XG5cdFx0Ly8gUmVtZW1iZXIgdGhlIGNhdGVnb3J5IGtleSwgaWYgYW55LlxuXHRcdC8vIFJlbW92ZSB3aGl0ZXNwYWNlIChwcm9wZXJseSk6IHN0cmlwIHdoaXRlc3BhY2UsIGJ1dCBvbmx5IHVwIHRvIHRoZSBuZXh0IGxpbmUgZmVlZC5cblx0XHQvLyBJZiB3ZSB0aGVuIGhhdmUgdHdvIGxpbmVmZWVkcyBpbiBhIHJvdywgcmVtb3ZlIG9uZS4gT3RoZXJ3aXNlLCBpZiB3ZSBoYXZlIHR3byBub24tXG5cdFx0Ly8gd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLCBpbnNlcnQgYSBibGFuay5cblx0XHRsZXQgaSA9IGJlZm9yZS5sZW5ndGggLSAxO1xuXHRcdHdoaWxlIChpID49IDAgJiYgYmVmb3JlLmNoYXJBdChpKSAhPT0gJ1xcbicgJiYgYmVmb3JlLnNsaWNlKGksIGkgKyAxKS5zZWFyY2goL1xccy8pID49IDApIHtcblx0XHRcdGktLTtcblx0XHR9XG5cdFx0bGV0IGogPSAwO1xuXHRcdHdoaWxlIChqIDwgYWZ0ZXIubGVuZ3RoICYmIGFmdGVyLmNoYXJBdChqKSAhPT0gJ1xcbicgJiYgYWZ0ZXIuc2xpY2UoaiwgaiArIDEpLnNlYXJjaCgvXFxzLykgPj0gMCkge1xuXHRcdFx0aisrO1xuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHRpID49IDAgJiZcblx0XHRcdGJlZm9yZS5jaGFyQXQoaSkgPT09ICdcXG4nICYmXG5cdFx0XHQoYWZ0ZXIubGVuZ3RoID09PSAwIHx8IChqIDwgYWZ0ZXIubGVuZ3RoICYmIGFmdGVyLmNoYXJBdChqKSA9PT0gJ1xcbicpKVxuXHRcdCkge1xuXHRcdFx0aS0tO1xuXHRcdH1cblx0XHRiZWZvcmUgPSBpID49IDAgPyBiZWZvcmUuc2xpY2UoMCwgTWF0aC5tYXgoMCwgaSArIDEpKSA6ICcnO1xuXHRcdGFmdGVyID0gaiA8IGFmdGVyLmxlbmd0aCA/IGFmdGVyLnNsaWNlKE1hdGgubWF4KDAsIGopKSA6ICcnO1xuXHRcdGlmIChcblx0XHRcdGJlZm9yZS5sZW5ndGggPiAwICYmXG5cdFx0XHRiZWZvcmUuc2xpY2UoTWF0aC5tYXgoMCwgYmVmb3JlLmxlbmd0aCAtIDEpKS5zZWFyY2goL1xcUy8pID49IDAgJiZcblx0XHRcdGFmdGVyLmxlbmd0aCA+IDAgJiZcblx0XHRcdGFmdGVyLnNsaWNlKDAsIDEpLnNlYXJjaCgvXFxTLykgPj0gMFxuXHRcdCkge1xuXHRcdFx0YmVmb3JlICs9ICcgJztcblx0XHR9XG5cdFx0Y2F0X3BvaW50ID0gYmVmb3JlLmxlbmd0aDtcblx0XHRpZiAoY2F0X3BvaW50ID09PSAwICYmIGFmdGVyLmxlbmd0aCA+IDAgJiYgYWZ0ZXIuc2xpY2UoMCwgMSkgPT09ICdcXG4nKSB7XG5cdFx0XHRhZnRlciA9IGFmdGVyLnNsaWNlKDEpO1xuXHRcdH1cblx0XHR3aWtpdGV4dCA9IGJlZm9yZSArIGFmdGVyO1xuXHRcdGlmICgha2V5Q2hhbmdlKSB7XG5cdFx0XHRpZiAoSEMudGVtcGxhdGVfY2F0ZWdvcmllc1t0b1JlbW92ZV0pIHtcblx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJywgdG9SZW1vdmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfcmVtb3ZlZCcsIHRvUmVtb3ZlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gQWRkXG5cdGlmICh0b0FkZCAmJiB0b0FkZC5sZW5ndGggPiAwKSB7XG5cdFx0bWF0Y2hlcyA9IGZpbmRfY2F0ZWdvcnkod2lraXRleHQsIHRvQWRkKTtcblx0XHRpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdC8vIEFscmVhZHkgZXhpc3RzXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0ZXJyb3I6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9leGlzdHMnLCB0b0FkZCksXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRsZXQgb25DYXQgPSBmYWxzZTtcblx0XHRpZiAoY2F0X3BvaW50IDwgMCkge1xuXHRcdFx0Y29uc3QgcG9pbnQgPSBmaW5kX2luc2VydGlvbnBvaW50KHdpa2l0ZXh0KTtcblx0XHRcdGNhdF9wb2ludCA9IHBvaW50LmlkeDtcblx0XHRcdCh7b25DYXR9ID0gcG9pbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvbkNhdCA9IHRydWU7XG5cdFx0fVxuXHRcdGNvbnN0IG5ld2NhdHN0cmluZyA9IGBbWyR7bmFtZVNwYWNlfToke3RvQWRkfSR7a2V5IHx8ICcnfV1dYDtcblx0XHRpZiAoY2F0X3BvaW50ID49IDApIHtcblx0XHRcdGNvbnN0IHN1ZmZpeCA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGNhdF9wb2ludCkpO1xuXHRcdFx0d2lraXRleHQgPVxuXHRcdFx0XHR3aWtpdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBjYXRfcG9pbnQpKSArXG5cdFx0XHRcdChjYXRfcG9pbnQgPiAwID8gJ1xcbicgOiAnJykgK1xuXHRcdFx0XHRuZXdjYXRzdHJpbmcgK1xuXHRcdFx0XHQob25DYXQgPyAnJyA6ICdcXG4nKTtcblx0XHRcdHdpa2l0ZXh0ICs9IHN1ZmZpeC5sZW5ndGggPiAwICYmIHN1ZmZpeC5zbGljZSgwLCAxKSAhPT0gJ1xcbicgPyBgXFxuJHtzdWZmaXh9YCA6IHN1ZmZpeDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHdpa2l0ZXh0Lmxlbmd0aCA+IDAgJiYgd2lraXRleHQuc2xpY2UoLTEsIHdpa2l0ZXh0Lmxlbmd0aCAtIDEgKyAxKSAhPT0gJ1xcbicpIHtcblx0XHRcdFx0d2lraXRleHQgKz0gJ1xcbic7XG5cdFx0XHR9XG5cdFx0XHR3aWtpdGV4dCArPSAod2lraXRleHQubGVuZ3RoID4gMCA/ICdcXG4nIDogJycpICsgbmV3Y2F0c3RyaW5nO1xuXHRcdH1cblx0XHRpZiAoa2V5Q2hhbmdlKSB7XG5cdFx0XHRsZXQgayA9IGtleSB8fCAnJztcblx0XHRcdGlmIChrLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0ayA9IGsuc2xpY2UoMSk7XG5cdFx0XHR9XG5cdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnLCB0b0FkZCwgayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X2FkZGVkJywgdG9BZGQpO1xuXHRcdH1cblx0XHRpZiAoSEMudW5jYXRfcmVnZXhwICYmICFpc19oaWRkZW4pIHtcblx0XHRcdGNvbnN0IHR4dCA9IHdpa2l0ZXh0LnJlcGxhY2UoSEMudW5jYXRfcmVnZXhwLCAnJyk7IC8vIFJlbW92ZSBcInVuY2F0XCIgdGVtcGxhdGVzXG5cdFx0XHRpZiAodHh0Lmxlbmd0aCAhPT0gd2lraXRleHQubGVuZ3RoKSB7XG5cdFx0XHRcdHdpa2l0ZXh0ID0gdHh0O1xuXHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVuY2F0X3JlbW92ZWQnKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHtcblx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRzdW1tYXJ5LFxuXHRcdGVycm9yOiBudWxsLFxuXHR9O1xufTtcbi8vIFRoZSByZWFsIEhvdENhdCBVSVxuaW50ZXJmYWNlIEhvdENhdFVJRXZlbnQge1xuXHRjdHJsS2V5PzogYm9vbGVhbjtcblx0bWV0YUtleT86IGJvb2xlYW47XG5cdHNoaWZ0S2V5PzogYm9vbGVhbjtcblx0cHJldmVudERlZmF1bHQ/OiAoKSA9PiB2b2lkO1xuXHRzdG9wUHJvcGFnYXRpb24/OiAoKSA9PiB2b2lkO1xuXHRjYW5jZWxCdWJibGU/OiBib29sZWFuO1xufVxuaW50ZXJmYWNlIEhvdENhdENvbW1pdEZvcm0gZXh0ZW5kcyBIVE1MRm9ybUVsZW1lbnQge1xuXHR3cFRleHRib3gxOiBIVE1MVGV4dEFyZWFFbGVtZW50O1xuXHR3cFN1bW1hcnk6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdHdwTWlub3JlZGl0OiBIVE1MSW5wdXRFbGVtZW50O1xuXHR3cFdhdGNodGhpczogSFRNTElucHV0RWxlbWVudDtcblx0d3BBdXRvU3VtbWFyeTogSFRNTElucHV0RWxlbWVudDtcblx0d3BDaGFuZ2VUYWdzOiBIVE1MSW5wdXRFbGVtZW50O1xuXHR3cFN0YXJ0dGltZTogSFRNTElucHV0RWxlbWVudDtcblx0d3BFZGl0dGltZTogSFRNTElucHV0RWxlbWVudDtcblx0b2xkaWQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdHdwRWRpdFRva2VuOiBIVE1MSW5wdXRFbGVtZW50O1xuXHR3cERpZmY6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdHdwU2F2ZTogSFRNTElucHV0RWxlbWVudDtcblx0aGNDb21taXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG59XG50eXBlIEhvdENhdEZhaWx1cmUgPSAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xuY29uc3QgZXZ0S2V5cyA9IChldmVudD86IEhvdENhdFVJRXZlbnQpOiBudW1iZXIgPT4ge1xuXHRjb25zdCB7Y3RybEtleSwgbWV0YUtleSwgc2hpZnRLZXl9ID0gZXZlbnQgPz8ge307XG5cdGxldCBjb2RlID0gMDtcblx0aWYgKGN0cmxLZXkpIHtcblx0XHQvLyBBbGwgbW9kZXJuIGJyb3dzZXJzXG5cdFx0Ly8gQ3RybC1jbGljayBzZWVtcyB0byBiZSBvdmVybG9hZGVkIGluIEZGL01hYyAoaXQgb3BlbnMgYSBwb3AtdXAgbWVudSksIHNvIHRyZWF0IGNtZC1jbGlja1xuXHRcdC8vIGFzIGEgY3RybC1jbGljaywgdG9vLlxuXHRcdGlmIChjdHJsS2V5IHx8IG1ldGFLZXkpIHtcblx0XHRcdGNvZGUgfHw9IDE7XG5cdFx0fVxuXHRcdGlmIChzaGlmdEtleSkge1xuXHRcdFx0Y29kZSB8fD0gMjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNvZGU7XG59O1xuY29uc3QgZXZ0S2lsbCA9IChldmVudD86IEhvdENhdFVJRXZlbnQpOiBmYWxzZSA9PiB7XG5cdGlmIChldmVudD8ucHJldmVudERlZmF1bHQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbj8uKCk7XG5cdH0gZWxzZSBpZiAoZXZlbnQpIHtcblx0XHRldmVudC5jYW5jZWxCdWJibGUgPSB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5sZXQgY2F0TGluZTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDsgLy8gdHJ1ZSBpZiBNZWRpYVdpa2kgc2VydmVzIHRoZSBuZXcgVUwtTEkgRE9NIGZvciBjYXRlZ29yaWVzXG5sZXQgb25VcGxvYWQgPSBmYWxzZTtcbmxldCBlZGl0b3JzOiBDYXRlZ29yeUVkaXRvcltdID0gW107XG5sZXQgY29tbWl0QnV0dG9uOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5sZXQgY29tbWl0Rm9ybTogSG90Q2F0Q29tbWl0Rm9ybSB8IG51bGwgPSBudWxsO1xubGV0IG11bHRpU3BhbjogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbmxldCBwYWdlVGV4dDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5sZXQgcGFnZVRpbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xubGV0IHBhZ2VXYXRjaGVkID0gZmFsc2U7XG5sZXQgd2F0Y2hDcmVhdGUgPSBmYWxzZTtcbmxldCB3YXRjaEVkaXQgPSBmYWxzZTtcbmxldCBtaW5vckVkaXRzID0gZmFsc2U7XG5sZXQgZWRpdFRva2VuOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbmxldCBpc19ydGwgPSBmYWxzZTtcbmxldCBzZXJ2ZXJUaW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbmxldCBsYXN0UmV2SWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xubGV0IHBhZ2VUZXh0UmV2SWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xubGV0IGNvbmZsaWN0aW5nVXNlcjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5sZXQgbmV3RE9NID0gZmFsc2U7XG5jb25zdCBVTkNIQU5HRUQgPSAwO1xuY29uc3QgT1BFTiA9IDE7IC8vIE9wZW4sIGJ1dCBubyBpbnB1dCB5ZXRcbmNvbnN0IENIQU5HRV9QRU5ESU5HID0gMjsgLy8gT3Blbiwgc29tZSBpbnB1dCBtYWRlXG5jb25zdCBDSEFOR0VEID0gMztcbmNvbnN0IERFTEVURUQgPSA0O1xuY29uc3Qgc2V0UGFnZSA9IChkYXRhOiBIb3RDYXRBcGlRdWVyeVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdGxldCBzdGFydFRpbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRpZiAoZGF0YSAmJiBkYXRhLnF1ZXJ5KSB7XG5cdFx0aWYgKGRhdGEucXVlcnkucGFnZXMpIHtcblx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGEucXVlcnkucGFnZXMgYXMgSG90Q2F0QXBpUGFnZVtdO1xuXHRcdFx0aWYgKHBhZ2UpIHtcblx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zICYmIHBhZ2UucmV2aXNpb25zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHQvLyBSZXZpc2lvbnMgYXJlIHNvcnRlZCBieSByZXZpc2lvbiBJRCwgaGVuY2UgWzBdIGlzIHRoZSBvbmUgd2UgYXNrZWQgZm9yLCBhbmQgcG9zc2libHkgdGhlcmUncyBhIFsxXSBpZiB3ZSdyZVxuXHRcdFx0XHRcdC8vIG5vdCBvbiB0aGUgbGF0ZXN0IHJldmlzaW9uIChlZGl0IGNvbmZsaWN0cyBhbmQgc3VjaCkuXG5cdFx0XHRcdFx0Y29uc3QgW2xhdGVzdFJldmlzaW9uLCBjb25mbGljdGluZ1JldmlzaW9uXSA9IHBhZ2UucmV2aXNpb25zO1xuXHRcdFx0XHRcdHBhZ2VUZXh0ID0gbGF0ZXN0UmV2aXNpb24hLnNsb3RzLm1haW4uY29udGVudDtcblx0XHRcdFx0XHRpZiAobGF0ZXN0UmV2aXNpb24hLnRpbWVzdGFtcCkge1xuXHRcdFx0XHRcdFx0cGFnZVRpbWUgPSBsYXRlc3RSZXZpc2lvbiEudGltZXN0YW1wLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChsYXRlc3RSZXZpc2lvbiEucmV2aWQpIHtcblx0XHRcdFx0XHRcdHBhZ2VUZXh0UmV2SWQgPSBsYXRlc3RSZXZpc2lvbiEucmV2aWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9ucy5sZW5ndGggPiAxICYmIGNvbmZsaWN0aW5nUmV2aXNpb24pIHtcblx0XHRcdFx0XHRcdGNvbmZsaWN0aW5nVXNlciA9IGNvbmZsaWN0aW5nUmV2aXNpb24udXNlciA/PyBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocGFnZS5sYXN0cmV2aWQpIHtcblx0XHRcdFx0XHRsYXN0UmV2SWQgPSBwYWdlLmxhc3RyZXZpZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocGFnZS5zdGFydHRpbWVzdGFtcCkge1xuXHRcdFx0XHRcdHN0YXJ0VGltZSA9IHBhZ2Uuc3RhcnR0aW1lc3RhbXAucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwYWdlV2F0Y2hlZCA9IHR5cGVvZiBwYWdlLndhdGNoZWQgPT09ICdzdHJpbmcnO1xuXHRcdFx0XHRpZiAoZGF0YS5xdWVyeS50b2tlbnMpIHtcblx0XHRcdFx0XHRlZGl0VG9rZW4gPSBkYXRhLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHBhZ2UubGFuZ2xpbmtzICYmICghZGF0YVsncXVlcnktY29udGludWUnXSB8fCAhZGF0YVsncXVlcnktY29udGludWUnXS5sYW5nbGlua3MpKSB7XG5cdFx0XHRcdFx0Ly8gV2UgaGF2ZSBpbnRlcmxhbmd1YWdlIGxpbmtzLCBhbmQgd2UgZ290IHRoZW0gYWxsLlxuXHRcdFx0XHRcdGxldCByZSA9ICcnO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgbGFuZ2xpbmsgb2YgcGFnZS5sYW5nbGlua3MpIHtcblx0XHRcdFx0XHRcdHJlICs9IChyZS5sZW5ndGggPiAwID8gJ3wnIDogJycpICsgbGFuZ2xpbmsubGFuZy5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csIFN0cmluZy5yYXdgXFwkMWApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocmUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0aW50ZXJsYW5ndWFnZVJFID0gbmV3IFJlZ0V4cChgKChefFxcXFxuXFxcXHI/KShcXFxcW1xcXFxbXFxcXHMqKCR7cmV9KVxcXFxzKjpbXlxcXFxdXStcXFxcXVxcXFxdXFxcXHMqKSkrJGApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBTaXRlaW5mb1xuXHRcdGlmIChkYXRhLnF1ZXJ5LmdlbmVyYWwpIHtcblx0XHRcdGlmIChkYXRhLnF1ZXJ5LmdlbmVyYWwudGltZSAmJiAhc3RhcnRUaW1lKSB7XG5cdFx0XHRcdHN0YXJ0VGltZSA9IGRhdGEucXVlcnkuZ2VuZXJhbC50aW1lLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA9PT0gbnVsbCkge1xuXHRcdFx0XHQvLyBSZXNvdXJjZUxvYWRlcidzIEpTUGFyc2VyIGRvZXNuJ3QgbGlrZSAuY2FzZSwgc28gb3ZlcnJpZGUgZXNsaW50LlxuXHRcdFx0XHRIQy5jYXBpdGFsaXplUGFnZU5hbWVzID0gZGF0YS5xdWVyeS5nZW5lcmFsLmNhc2UgPT09ICdmaXJzdC1sZXR0ZXInO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzZXJ2ZXJUaW1lID0gc3RhcnRUaW1lO1xuXHRcdC8vIFVzZXJpbmZvXG5cdFx0Y29uc3Qge29wdGlvbnN9ID0gZGF0YS5xdWVyeS51c2VyaW5mbyA/PyB7fTtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0d2F0Y2hDcmVhdGUgPSAhSEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ICYmIG9wdGlvbnMud2F0Y2hjcmVhdGlvbnMgPT09ICcxJztcblx0XHRcdHdhdGNoRWRpdCA9ICFIQy5kb250X2FkZF90b193YXRjaGxpc3QgJiYgb3B0aW9ucy53YXRjaGRlZmF1bHQgPT09ICcxJztcblx0XHRcdG1pbm9yRWRpdHMgPSBvcHRpb25zLm1pbm9yZGVmYXVsdCA9PT0gMTtcblx0XHRcdC8vIElmIHRoZSB1c2VyIGhhcyB0aGUgXCJBbGwgZWRpdHMgYXJlIG1pbm9yXCIgcHJlZmVyZW5jZSBlbmFibGVkLCB3ZSBzaG91bGQgaG9ub3IgdGhhdFxuXHRcdFx0Ly8gZm9yIHNpbmdsZSBjYXRlZ29yeSBjaGFuZ2VzLCBubyBtYXR0ZXIgd2hhdCB0aGUgc2l0ZSBjb25maWd1cmF0aW9uIGlzLlxuXHRcdFx0aWYgKG1pbm9yRWRpdHMpIHtcblx0XHRcdFx0SEMuc2luZ2xlX21pbm9yID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5sZXQgc2F2ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcbmNvbnN0IGluaXRpYXRlRWRpdCA9IChkb0VkaXQ6IChmYWlsdXJlOiBIb3RDYXRGYWlsdXJlKSA9PiB2b2lkLCBmYWlsdXJlOiBIb3RDYXRGYWlsdXJlKTogdm9pZCA9PiB7XG5cdGlmIChzYXZlSW5Qcm9ncmVzcykge1xuXHRcdHJldHVybjtcblx0fVxuXHRzYXZlSW5Qcm9ncmVzcyA9IHRydWU7XG5cdGxldCBvbGRCdXR0b25TdGF0ZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdG9sZEJ1dHRvblN0YXRlID0gY29tbWl0QnV0dG9uLmRpc2FibGVkO1xuXHRcdGNvbW1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cdH1cblx0Y29uc3QgZmFpbCA9IChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRzYXZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdGNvbW1pdEJ1dHRvbi5kaXNhYmxlZCA9IG9sZEJ1dHRvblN0YXRlID8/IGZhbHNlO1xuXHRcdH1cblx0XHRmYWlsdXJlKG1lc3NhZ2UpO1xuXHR9O1xuXHQvLyBNdXN0IHVzZSBBamF4IGhlcmUgdG8gZ2V0IHRoZSB1c2VyIG9wdGlvbnMgYW5kIHRoZSBlZGl0IHRva2VuLlxuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cmF3Y29udGludWU6ICcnLFxuXHRcdHRpdGxlczogY29uZi53Z1BhZ2VOYW1lLFxuXHRcdHByb3A6IFsnaW5mbycsICdyZXZpc2lvbnMnLCAnbGFuZ2xpbmtzJ10sXG5cdFx0aW5wcm9wOiAnd2F0Y2hlZCcsXG5cdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJywgJ2lkcycsICd1c2VyJ10sXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHRcdHJ2bGltaXQ6ICcyJyxcblx0XHRydmRpcjogJ25ld2VyJyxcblx0XHRydnN0YXJ0aWQ6IGNvbmYud2dDdXJSZXZpc2lvbklkLFxuXHRcdGxsbGltaXQ6ICc1MDAnLFxuXHRcdG1ldGE6IFsnc2l0ZWluZm8nLCAndXNlcmluZm8nLCAndG9rZW5zJ10sXG5cdFx0dHlwZTogJ2NzcmYnLFxuXHRcdHVpcHJvcDogWydvcHRpb25zJ10sXG5cdH07XG5cdGFwaS5nZXQocGFyYW1zKVxuXHRcdC5kb25lKChkYXRhKSA9PiB7XG5cdFx0XHRzZXRQYWdlKGRhdGEgYXMgSG90Q2F0QXBpUXVlcnlSZXNwb25zZSk7XG5cdFx0XHRkb0VkaXQoZmFpbCk7XG5cdFx0fSlcblx0XHQuZmFpbCgoZXJyb3I6IHVua25vd24pID0+IHtcblx0XHRcdGNvbnN0IHtzdGF0dXMsIHN0YXR1c1RleHR9ID0gKGVycm9yID8/IHt9KSBhcyB7c3RhdHVzPzogbnVtYmVyOyBzdGF0dXNUZXh0Pzogc3RyaW5nfTtcblx0XHRcdGZhaWwoYCR7c3RhdHVzID8/ICcnfSAke3N0YXR1c1RleHQgPz8gJyd9YCk7XG5cdFx0fSk7XG59O1xuY29uc3QgbXVsdGlDaGFuZ2VNc2cgPSAoY291bnQ6IG51bWJlcik6IHN0cmluZyA9PiB7XG5cdHJldHVybiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1tdWx0aV9jaGFuZ2UnLCBTdHJpbmcoY291bnQpKTtcbn07XG5jb25zdCBjdXJyZW50VGltZXN0YW1wID0gKCk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdGxldCB0cyA9IFN0cmluZyhub3cuZ2V0VVRDRnVsbFllYXIoKSk7XG5cdGNvbnN0IHR3byA9IChzOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBzLnNsaWNlKC0yKTtcblx0fTtcblx0dHMgKz1cblx0XHR0d28oYDAke25vdy5nZXRVVENNb250aCgpICsgMX1gKSArXG5cdFx0dHdvKGAwJHtub3cuZ2V0VVRDRGF0ZSgpfWApICtcblx0XHR0d28oYDAwJHtub3cuZ2V0VVRDSG91cnMoKX1gKSArXG5cdFx0dHdvKGAwMCR7bm93LmdldFVUQ01pbnV0ZXMoKX1gKSArXG5cdFx0dHdvKGAwMCR7bm93LmdldFVUQ1NlY29uZHMoKX1gKTtcblx0cmV0dXJuIHRzO1xufTtcbmNvbnN0IHBlcmZvcm1DaGFuZ2VzID0gKGZhaWx1cmU6IEhvdENhdEZhaWx1cmUsIHNpbmdsZUVkaXRvcj86IENhdGVnb3J5RWRpdG9yKTogdm9pZCA9PiB7XG5cdGlmIChwYWdlVGV4dCA9PT0gbnVsbCkge1xuXHRcdGZhaWx1cmUoZ2V0TWVzc2FnZSgnbWVzc2FnZXMtbXVsdGlfZXJyb3InKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdC8vIENyZWF0ZSBhIGZvcm0gYW5kIHN1Ym1pdCBpdC4gV2UgZG9uJ3QgdXNlIHRoZSBlZGl0IEFQSSAoYXBpLnBocD9hY3Rpb249ZWRpdCkgYmVjYXVzZVxuXHQvLyAoYSkgc2Vuc2libHkgcmVwb3J0aW5nIGJhY2sgZXJyb3JzIGxpa2UgZWRpdCBjb25mbGljdHMgaXMgYWx3YXlzIGEgaGFzc2xlLCBhbmRcblx0Ly8gKGIpIHdlIHdhbnQgdG8gc2hvdyBhIGRpZmYgZm9yIG11bHRpLWVkaXRzIGFueXdheSwgYW5kXG5cdC8vIChjKSB3ZSB3YW50IHRvIHRyaWdnZXIgb25zdWJtaXQgZXZlbnRzLCBhbGxvd2luZyB1c2VyIGNvZGUgdG8gaW50ZXJjZXB0IHRoZSBlZGl0LlxuXHQvLyBVc2luZyB0aGUgZm9ybSwgd2UgY2FuIGRvIChiKSBhbmQgKGMpLCBhbmQgd2UgZ2V0IChhKSBmb3IgZnJlZS4gQW5kLCBvZiBjb3Vyc2UsIHVzaW5nIHRoZSBmb3JtXG5cdC8vIGF1dG9tYXRpY2FsbHkgcmVsb2FkcyB0aGUgcGFnZSB3aXRoIHRoZSB1cGRhdGVkIGNhdGVnb3JpZXMgb24gYSBzdWNjZXNzZnVsIHN1Ym1pdCwgd2hpY2hcblx0Ly8gd2Ugd291bGQgaGF2ZSB0byBkbyBleHBsaWNpdGx5IGlmIHdlIHVzZWQgdGhlIGVkaXQgQVBJLlxuXHRsZXQgYWN0aW9uOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHQvLyBOb3JtYWxseSwgd2UgZG9uJ3QgaGF2ZSB0byBjYXJlIGFib3V0IGVkaXQgY29uZmxpY3RzLiBJZiBzb21lIG90aGVyIHVzZXIgZWRpdGVkIHRoZSBwYWdlIGluIHRoZSBtZWFudGltZSwgdGhlXG5cdC8vIHNlcnZlciB3aWxsIHRha2UgY2FyZSBvZiBpdCBhbmQgbWVyZ2UgdGhlIGVkaXQgYXV0b21hdGljYWxseSBvciBwcmVzZW50IGFuIGVkaXQgY29uZmxpY3Qgc2NyZWVuLiBIb3dldmVyLCB0aGVcblx0Ly8gc2VydmVyIHN1cHByZXNzZXMgZWRpdCBjb25mbGljdHMgd2l0aCBvbmVzZWxmLiBIZW5jZSwgaWYgd2UgaGF2ZSBhIGNvbmZsaWN0LCBhbmQgdGhlIGNvbmZsaWN0aW5nIHVzZXIgaXMgdGhlXG5cdC8vIGN1cnJlbnQgdXNlciwgdGhlbiB3ZSBzZXQgdGhlIFwib2xkaWRcIiB2YWx1ZSBhbmQgc3dpdGNoIHRvIGRpZmYsIHdoaWNoIGdpdmVzIHRoZSBcInlvdSBhcmUgZWRpdGluZyBhbiBvbGQgdmVyc2lvbjtcblx0Ly8gaWYgeW91IHNhdmUsIGFueSBtb3JlIHJlY2VudCBjaGFuZ2VzIHdpbGwgYmUgbG9zdFwiIHNjcmVlbi5cblx0Y29uc3Qgc2VsZkVkaXRDb25mbGljdCA9ICEhKFxuXHRcdCgobGFzdFJldklkICE9PSBudWxsICYmIGxhc3RSZXZJZCAhPT0gY29uZi53Z0N1clJldmlzaW9uSWQpIHx8XG5cdFx0XHQocGFnZVRleHRSZXZJZCAhPT0gbnVsbCAmJiBwYWdlVGV4dFJldklkICE9PSBjb25mLndnQ3VyUmV2aXNpb25JZCkpICYmXG5cdFx0Y29uZmxpY3RpbmdVc2VyICYmXG5cdFx0Y29uZmxpY3RpbmdVc2VyID09PSBjb25mLndnVXNlck5hbWVcblx0KTtcblx0aWYgKHNpbmdsZUVkaXRvciAmJiAhc2luZ2xlRWRpdG9yLm5vQ29tbWl0ICYmICFIQy5ub19hdXRvY29tbWl0ICYmIGVkaXRUb2tlbiAmJiAhc2VsZkVkaXRDb25mbGljdCkge1xuXHRcdC8vIElmIHdlIGRvIGhhdmUgYW4gZWRpdCBjb25mbGljdCwgYnV0IG5vdCB3aXRoIG91cnNlbGYsIHRoYXQncyBubyByZWFzb24gbm90IHRvIGF0dGVtcHQgdG8gc2F2ZTogdGhlIHNlcnZlciBzaWRlIG1heSBhY3R1YWxseSBiZSBhYmxlIHRvXG5cdFx0Ly8gbWVyZ2UgdGhlIGNoYW5nZXMuIFdlIGp1c3QgbmVlZCB0byBtYWtlIHN1cmUgdGhhdCB3ZSBkbyBwcmVzZW50IGEgZGlmZiB2aWV3IGlmIGl0J3MgYSBzZWxmIGVkaXQgY29uZmxpY3QuXG5cdFx0Y29tbWl0Rm9ybSEud3BFZGl0VG9rZW4udmFsdWUgPSBlZGl0VG9rZW47XG5cdFx0YWN0aW9uID0gY29tbWl0Rm9ybSEud3BEaWZmO1xuXHRcdGlmIChhY3Rpb24pIHtcblx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cFNhdmUnO1xuXHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0hLndwU2F2ZTtcblx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdGFjdGlvbi5uYW1lID0gYWN0aW9uLnZhbHVlO1xuXHRcdH1cblx0fVxuXHRsZXQgcmVzdWx0OiBIb3RDYXRDaGFuZ2VSZXN1bHQgPSB7XG5cdFx0dGV4dDogcGFnZVRleHQsXG5cdFx0c3VtbWFyeTogW10sXG5cdFx0ZXJyb3I6IG51bGwsXG5cdH07XG5cdGNvbnN0IGNoYW5nZWQ6IHtmcm9tOiBzdHJpbmc7IHRvOiBzdHJpbmd9W10gPSBbXTtcblx0Y29uc3QgYWRkZWQ6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IGRlbGV0ZWQ6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHRvRWRpdCA9IHNpbmdsZUVkaXRvciA/IFtzaW5nbGVFZGl0b3JdIDogZWRpdG9ycztcblx0bGV0IGVkaXQ6IENhdGVnb3J5RWRpdG9yO1xuXHRsZXQgaTogbnVtYmVyO1xuXHRsZXQgZXJyb3I6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRsZXQgY2hhbmdlcyA9IDA7XG5cdGZvciAoaSA9IDA7IGkgPCB0b0VkaXQubGVuZ3RoOyBpKyspIHtcblx0XHRlZGl0ID0gdG9FZGl0W2ldITtcblx0XHRpZiAoZWRpdC5zdGF0ZSA9PT0gQ0hBTkdFRCkge1xuXHRcdFx0cmVzdWx0ID0gY2hhbmdlX2NhdGVnb3J5KFxuXHRcdFx0XHRyZXN1bHQudGV4dCxcblx0XHRcdFx0ZWRpdC5vcmlnaW5hbENhdGVnb3J5LFxuXHRcdFx0XHRlZGl0LmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdFx0ZWRpdC5jdXJyZW50S2V5LFxuXHRcdFx0XHRlZGl0LmN1cnJlbnRIaWRkZW5cblx0XHRcdCk7XG5cdFx0XHRpZiAoIXJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRjaGFuZ2VzKys7XG5cdFx0XHRcdGlmICghZWRpdC5vcmlnaW5hbENhdGVnb3J5IHx8IGVkaXQub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRhZGRlZFthZGRlZC5sZW5ndGhdID0gZWRpdC5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2hhbmdlZFtjaGFuZ2VkLmxlbmd0aF0gPSB7XG5cdFx0XHRcdFx0XHRmcm9tOiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0XHR0bzogZWRpdC5jdXJyZW50Q2F0ZWdvcnksXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChlcnJvciA9PT0gbnVsbCkge1xuXHRcdFx0XHQoe2Vycm9yfSA9IHJlc3VsdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChlZGl0LnN0YXRlID09PSBERUxFVEVEICYmIGVkaXQub3JpZ2luYWxDYXRlZ29yeSAmJiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0cmVzdWx0ID0gY2hhbmdlX2NhdGVnb3J5KHJlc3VsdC50ZXh0LCBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksIG51bGwsIG51bGwsIGZhbHNlKTtcblx0XHRcdGlmICghcmVzdWx0LmVycm9yKSB7XG5cdFx0XHRcdGNoYW5nZXMrKztcblx0XHRcdFx0ZGVsZXRlZFtkZWxldGVkLmxlbmd0aF0gPSBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdCh7ZXJyb3J9ID0gcmVzdWx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0aWYgKGVycm9yICE9PSBudWxsKSB7XG5cdFx0Ly8gRG8gbm90IGNvbW1pdCBpZiB0aGVyZSB3ZXJlIGVycm9yc1xuXHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0hLndwU2F2ZTtcblx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdGFjdGlvbi5uYW1lID0gYWN0aW9uLnZhbHVlO1xuXHRcdH1cblx0fVxuXHRpZiAoIWNvbmYud2dBcnRpY2xlSWQgJiYgY2hhbmdlcyA+IDAgJiYgZXJyb3IgPT09IG51bGwpIHtcblx0XHRyZXN1bHQudGV4dCA9IGB7e0NhdG5hdnxhdXRvPTF9fVxcblxcbiR7cmVzdWx0LnRleHR9YDtcblx0fVxuXHQvLyBGaWxsIGluIHRoZSBmb3JtIGFuZCBzdWJtaXQgaXRcblx0Y29tbWl0Rm9ybSEud3BNaW5vcmVkaXQuY2hlY2tlZCA9IG1pbm9yRWRpdHM7XG5cdGNvbW1pdEZvcm0hLndwV2F0Y2h0aGlzLmNoZWNrZWQgPSAoIWNvbmYud2dBcnRpY2xlSWQgJiYgd2F0Y2hDcmVhdGUpIHx8IHdhdGNoRWRpdCB8fCBwYWdlV2F0Y2hlZDtcblx0aWYgKGNvbmYud2dBcnRpY2xlSWQgfHwgISFzaW5nbGVFZGl0b3IpIHtcblx0XHQvLyBQcmVwYXJlIGNoYW5nZS10YWcgc2F2ZVxuXHRcdGlmIChhY3Rpb24gJiYgYWN0aW9uLnZhbHVlID09PSAnd3BTYXZlJykge1xuXHRcdFx0aWYgKEhDLmNoYW5nZVRhZykge1xuXHRcdFx0XHRjb21taXRGb3JtIS53cENoYW5nZVRhZ3MudmFsdWUgPSBIQy5jaGFuZ2VUYWc7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbW1pdEZvcm0hLndwQXV0b1N1bW1hcnkudmFsdWUgPSBIQy5jaGFuZ2VUYWc7XG5cdFx0fVxuXHRcdGlmIChjaGFuZ2VzID09PSAxKSB7XG5cdFx0XHRpZiAocmVzdWx0LnN1bW1hcnkgJiYgcmVzdWx0LnN1bW1hcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjb21taXRGb3JtIS53cFN1bW1hcnkudmFsdWUgPVxuXHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpKSArXG5cdFx0XHRcdFx0cmVzdWx0LnN1bW1hcnkuam9pbihnZXRNZXNzYWdlKCdtZXNzYWdlcy1zZXBhcmF0b3InKSkgK1xuXHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpO1xuXHRcdFx0fVxuXHRcdFx0Y29tbWl0Rm9ybSEud3BNaW5vcmVkaXQuY2hlY2tlZCA9IEhDLnNpbmdsZV9taW5vciB8fCBtaW5vckVkaXRzO1xuXHRcdH0gZWxzZSBpZiAoY2hhbmdlcykge1xuXHRcdFx0Y29uc3Qgc3VtbWFyeTogc3RyaW5nW10gPSBbXTtcblx0XHRcdGNvbnN0IHNob3J0U3VtbWFyeTogc3RyaW5nW10gPSBbXTtcblx0XHRcdC8vIERlbGV0ZWRcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBkZWxldGVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gYOKIkiR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgZGVsZXRlZFtpXSEpfWA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGVsZXRlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID0gYOKIkiR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgZGVsZXRlZFswXSEpfWA7XG5cdFx0XHR9IGVsc2UgaWYgKGRlbGV0ZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBg4oiSICR7bXVsdGlDaGFuZ2VNc2coZGVsZXRlZC5sZW5ndGgpfWA7XG5cdFx0XHR9XG5cdFx0XHQvLyBBZGRlZFxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGFkZGVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gYCske2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGFkZGVkW2ldISl9YDtcblx0XHRcdH1cblx0XHRcdGlmIChhZGRlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID0gYCske2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGFkZGVkWzBdISl9YDtcblx0XHRcdH0gZWxzZSBpZiAoYWRkZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBgKyAke211bHRpQ2hhbmdlTXNnKGFkZGVkLmxlbmd0aCl9YDtcblx0XHRcdH1cblx0XHRcdC8vIENoYW5nZWRcblx0XHRcdGNvbnN0IGFycm93ID0gaXNfcnRsID8gJ1xcdTIxOTAnIDogJ1xcdTIxOTInOyAvLyBsZWZ0IGFuZCByaWdodCBhcnJvd3MuIERvbid0IHVzZSDihpAgYW5kIOKGkiBpbiB0aGUgY29kZS5cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjaGFuZ2VkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGNoYW5nZSA9IGNoYW5nZWRbaV0hO1xuXHRcdFx0XHRpZiAoY2hhbmdlLmZyb20gPT09IGNoYW5nZS50bykge1xuXHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gYMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2UuZnJvbSl9YDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9XG5cdFx0XHRcdFx0XHRgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZS5mcm9tKX0ke2Fycm93fSR7Z2V0TWVzc2FnZShcblx0XHRcdFx0XHRcdFx0J21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsXG5cdFx0XHRcdFx0XHRcdGNoYW5nZS50b1xuXHRcdFx0XHRcdFx0KX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2hhbmdlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Y29uc3QgY2hhbmdlID0gY2hhbmdlZFswXSE7XG5cdFx0XHRcdGlmIChjaGFuZ2UuZnJvbSA9PT0gY2hhbmdlLnRvKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID0gYMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2UuZnJvbSl9YDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBgwrEke2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0XHQnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJyxcblx0XHRcdFx0XHRcdGNoYW5nZS5mcm9tXG5cdFx0XHRcdFx0KX0ke2Fycm93fSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlLnRvKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGNoYW5nZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBgwrEgJHttdWx0aUNoYW5nZU1zZyhjaGFuZ2VkLmxlbmd0aCl9YDtcblx0XHRcdH1cblx0XHRcdGlmIChzdW1tYXJ5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29uc3Qgam9pbmVkU3VtbWFyeSA9IHN1bW1hcnkuam9pbihnZXRNZXNzYWdlKCdtZXNzYWdlcy1zZXBhcmF0b3InKSk7XG5cdFx0XHRcdGNvbnN0IGZpbmFsU3VtbWFyeSA9XG5cdFx0XHRcdFx0am9pbmVkU3VtbWFyeS5sZW5ndGggPlxuXHRcdFx0XHRcdDIwMCAtXG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSkubGVuZ3RoIC1cblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpLmxlbmd0aFxuXHRcdFx0XHRcdFx0PyBzaG9ydFN1bW1hcnkuam9pbihnZXRNZXNzYWdlKCdtZXNzYWdlcy1zZXBhcmF0b3InKSlcblx0XHRcdFx0XHRcdDogam9pbmVkU3VtbWFyeTtcblx0XHRcdFx0Y29tbWl0Rm9ybSEud3BTdW1tYXJ5LnZhbHVlID1cblx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSkgK1xuXHRcdFx0XHRcdGZpbmFsU3VtbWFyeSArXG5cdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGNvbW1pdEZvcm0hLndwVGV4dGJveDEudmFsdWUgPSByZXN1bHQudGV4dDtcblx0Y29tbWl0Rm9ybSEud3BTdGFydHRpbWUudmFsdWUgPSBzZXJ2ZXJUaW1lIHx8IGN1cnJlbnRUaW1lc3RhbXAoKTtcblx0Y29tbWl0Rm9ybSEud3BFZGl0dGltZS52YWx1ZSA9IHBhZ2VUaW1lIHx8IGNvbW1pdEZvcm0hLndwU3RhcnR0aW1lLnZhbHVlO1xuXHRpZiAoc2VsZkVkaXRDb25mbGljdCkge1xuXHRcdGNvbW1pdEZvcm0hLm9sZGlkLnZhbHVlID0gU3RyaW5nKHBhZ2VUZXh0UmV2SWQgfHwgY29uZi53Z0N1clJldmlzaW9uSWQpO1xuXHR9XG5cdC8vIFN1Ym1pdCB0aGUgZm9ybSBpbiBhIHdheSB0aGF0IHRyaWdnZXJzIG9uc3VibWl0IGV2ZW50czogY29tbWl0Rm9ybS5zdWJtaXQoKSBkb2Vzbid0LlxuXHRjb21taXRGb3JtIS5oY0NvbW1pdC5jbGljaygpO1xufTtcbmNvbnN0IHJlc29sdmVPbmUgPSAocGFnZTogSG90Q2F0QXBpUGFnZSwgdG9SZXNvbHZlOiBDYXRlZ29yeUVkaXRvcltdKTogdm9pZCA9PiB7XG5cdGNvbnN0IGNhdHMgPSBwYWdlLmNhdGVnb3JpZXM7XG5cdGNvbnN0IHtsaW5rc30gPSBwYWdlO1xuXHRsZXQgaXNfZGFiID0gZmFsc2U7IC8vIEhhcmQgcmVkaXJlY3Q/XG5cdGxldCBpc19yZWRpciA9IHR5cGVvZiBwYWdlLnJlZGlyZWN0ID09PSAnc3RyaW5nJztcblx0bGV0IGk6IG51bWJlcjtcblx0Y29uc3QgaXNfaGlkZGVuID0gcGFnZS5jYXRlZ29yeWluZm8gJiYgdHlwZW9mIHBhZ2UuY2F0ZWdvcnlpbmZvLmhpZGRlbiA9PT0gJ3N0cmluZyc7XG5cdGNvbnN0IGlzX21pc3NpbmcgPSB0eXBlb2YgcGFnZS5taXNzaW5nID09PSAnc3RyaW5nJztcblx0Y29uc3QgcGFnZVRpdGxlID0gcGFnZS50aXRsZS5zbGljZShNYXRoLm1heCgwLCBwYWdlLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGVkaXRvciA9IHRvUmVzb2x2ZVtpXSE7XG5cdFx0aWYgKGkgJiYgZWRpdG9yLmRhYklucHV0Q2xlYW5lZCAhPT0gcGFnZVRpdGxlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gTm90ZTogdGhlIHNlcnZlciByZXR1cm5zIGluIHBhZ2UgYW4gTkZDIG5vcm1hbGl6ZWQgVW5pY29kZSB0aXRsZS4gSWYgb3VyIGlucHV0IHdhcyBub3QgTkZDIG5vcm1hbGl6ZWQsIHdlIG1heSBub3QgZmluZFxuXHRcdC8vIGFueSBlbnRyeSBoZXJlLiBJZiB3ZSBoYXZlIG9ubHkgb25lIGVkaXRvciB0byByZXNvbHZlICh0aGUgbW9zdCBjb21tb24gY2FzZSwgSSBwcmVzdW1lKSwgd2UgbWF5IHNpbXBseSBza2lwIHRoZSBjaGVjay5cblx0XHRlZGl0b3IuY3VycmVudEhpZGRlbiA9IGlzX2hpZGRlbjtcblx0XHRlZGl0b3IuaW5wdXRFeGlzdHMgPSAhaXNfbWlzc2luZztcblx0XHRlZGl0b3IuaWNvbiEuc3JjID0gaXNfbWlzc2luZyA/IEhDLmV4aXN0c05vIDogSEMuZXhpc3RzWWVzO1xuXHR9XG5cdGlmIChpc19taXNzaW5nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmICghaXNfcmVkaXIgJiYgY2F0cyAmJiAoZ2V0TWVzc2FnZSgnZGlzYW1iaWdfY2F0ZWdvcnknKSB8fCBnZXRNZXNzYWdlKCdyZWRpcl9jYXRlZ29yeScpKSkge1xuXHRcdGZvciAoY29uc3QgY2F0XyBvZiBjYXRzKSB7XG5cdFx0XHRsZXQgY2F0ID0gY2F0Xy50aXRsZTtcblx0XHRcdC8vIFN0cmlwIG5hbWVzcGFjZSBwcmVmaXhcblx0XHRcdGlmIChjYXQpIHtcblx0XHRcdFx0Y2F0ID0gY2F0LnNsaWNlKE1hdGgubWF4KDAsIGNhdC5pbmRleE9mKCc6JykgKyAxKSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdFx0XHRpZiAoY2F0ID09PSBnZXRNZXNzYWdlKCdkaXNhbWJpZ19jYXRlZ29yeScpKSB7XG5cdFx0XHRcdFx0aXNfZGFiID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fSBlbHNlIGlmIChjYXQgPT09IGdldE1lc3NhZ2UoJ3JlZGlyX2NhdGVnb3J5JykpIHtcblx0XHRcdFx0XHRpc19yZWRpciA9IHRydWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0aWYgKCFpc19yZWRpciAmJiAhaXNfZGFiKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmICghbGlua3MgfHwgbGlua3MubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHRpdGxlczogc3RyaW5nW10gPSBbXTtcblx0Zm9yIChjb25zdCBsaW5rIG9mIGxpbmtzKSB7XG5cdFx0aWYgKFxuXHRcdFx0Ly8gQ2F0ZWdvcnkgbmFtZXNwYWNlIC0tIGFsd2F5cyB0cnVlIHNpbmNlIHdlIGFzayBvbmx5IGZvciB0aGUgY2F0ZWdvcnkgbGlua3Ncblx0XHRcdGxpbmsubnMgPT09IDE0ICYmXG5cdFx0XHQvLyBOYW1lIG5vdCBlbXB0eVxuXHRcdFx0bGluay50aXRsZSAmJlxuXHRcdFx0bGluay50aXRsZS5sZW5ndGggPiAwXG5cdFx0KSB7XG5cdFx0XHQvLyBJbnRlcm5hbCBsaW5rIHRvIGV4aXN0aW5nIHRoaW5neS4gRXh0cmFjdCB0aGUgcGFnZSBuYW1lIGFuZCByZW1vdmUgdGhlIG5hbWVzcGFjZS5cblx0XHRcdGNvbnN0IG1hdGNoID0gbGluay50aXRsZS5zbGljZShNYXRoLm1heCgwLCBsaW5rLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdC8vIEV4Y2x1ZGUgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllcy5cblx0XHRcdGlmICghSEMuYmxhY2tsaXN0IHx8ICFIQy5ibGFja2xpc3QudGVzdChtYXRjaCkpIHtcblx0XHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gbWF0Y2g7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGlmICh0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0b1Jlc29sdmVbaV0hO1xuXHRcdGlmIChpICYmIGVkaXRvci5kYWJJbnB1dENsZWFuZWQgIT09IHBhZ2VUaXRsZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGVkaXRvci5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIE1pZ2h0IGFjdHVhbGx5IGJlIHdyb25nIGlmIGl0J3MgYSByZWRpcmVjdCBwb2ludGluZyB0byBhIG5vbi1leGlzdGluZyBjYXRlZ29yeVxuXHRcdGVkaXRvci5pY29uIS5zcmMgPSBIQy5leGlzdHNZZXM7XG5cdFx0aWYgKHRpdGxlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRlZGl0b3IuZGFiID0gdGl0bGVzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlZGl0b3IudGV4dCEudmFsdWUgPSB0aXRsZXNbMF0hICsgKGVkaXRvci5jdXJyZW50S2V5ID09PSBudWxsID8gJycgOiBgfCR7ZWRpdG9yLmN1cnJlbnRLZXl9YCk7XG5cdFx0fVxuXHR9XG59O1xuY29uc3QgcmVzb2x2ZVJlZGlyZWN0cyA9ICh0b1Jlc29sdmU6IENhdGVnb3J5RWRpdG9yW10sIHBhcmFtcz86IEhvdENhdEFwaVF1ZXJ5UmVzcG9uc2UpOiB2b2lkID0+IHtcblx0aWYgKCFwYXJhbXMgfHwgIXBhcmFtcy5xdWVyeSB8fCAhcGFyYW1zLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IHtwYWdlc30gPSBwYXJhbXMucXVlcnk7XG5cdGZvciAoY29uc3QgcCBpbiBwYWdlcykge1xuXHRcdGlmICghT2JqZWN0Lmhhc093bihwYWdlcywgcCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRyZXNvbHZlT25lKChwYWdlcyBhcyBSZWNvcmQ8c3RyaW5nLCBIb3RDYXRBcGlQYWdlPilbcF0hLCB0b1Jlc29sdmUpO1xuXHR9XG59O1xuY29uc3QgcmVzb2x2ZU11bHRpID0gKHRvUmVzb2x2ZTogQ2F0ZWdvcnlFZGl0b3JbXSwgY2FsbGJhY2s6IChyZXNvbHZlZDogQ2F0ZWdvcnlFZGl0b3JbXSkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRsZXQgaTogbnVtYmVyO1xuXHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgZWRpdG9yID0gdG9SZXNvbHZlW2ldITtcblx0XHRlZGl0b3IuZGFiID0gbnVsbDtcblx0XHRlZGl0b3IuZGFiSW5wdXQgPSBlZGl0b3IubGFzdElucHV0O1xuXHR9XG5cdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0cHJvcDogJ2luZm98bGlua3N8Y2F0ZWdvcmllc3xjYXRlZ29yeWluZm8nLFxuXHRcdHBsbmFtZXNwYWNlOiAnMTQnLFxuXHRcdHBsbGltaXQ6IFN0cmluZyh0b1Jlc29sdmUubGVuZ3RoICogMTApLFxuXHRcdGNsbGltaXQ6IFN0cmluZyh0b1Jlc29sdmUubGVuZ3RoICogMTApLFxuXHR9O1xuXHRjb25zdCB0aXRsZXM6IHN0cmluZ1tdID0gW107XG5cdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBlZGl0b3IgPSB0b1Jlc29sdmVbaV0hO1xuXHRcdGNvbnN0IHYgPSByZXBsYWNlU2hvcnRjdXRzKGVkaXRvci5kYWJJbnB1dCEsIEhDLnNob3J0Y3V0cyk7XG5cdFx0ZWRpdG9yLmRhYklucHV0Q2xlYW5lZCA9IHY7XG5cdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gYENhdGVnb3J5OiR7dn1gO1xuXHR9XG5cdHBhcmFtcy50aXRsZXMgPSB0aXRsZXMuam9pbignfCcpO1xuXHRhcGkuZ2V0KHBhcmFtcylcblx0XHQuZG9uZSgoanNvbikgPT4ge1xuXHRcdFx0cmVzb2x2ZVJlZGlyZWN0cyh0b1Jlc29sdmUsIGpzb24gYXMgSG90Q2F0QXBpUXVlcnlSZXNwb25zZSk7XG5cdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdH0pXG5cdFx0LmZhaWwoKHJlcSkgPT4ge1xuXHRcdFx0aWYgKCFyZXEpIHtcblx0XHRcdFx0bm9TdWdnZXN0aW9ucyA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdH0pO1xufTtcbmNvbnN0IG1ha2VBY3RpdmUgPSAod2hpY2g6IENhdGVnb3J5RWRpdG9yKTogdm9pZCA9PiB7XG5cdGlmICh3aGljaC5pc19hY3RpdmUpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdGlmIChlZGl0b3IgIT09IHdoaWNoKSB7XG5cdFx0XHRlZGl0b3IuaW5hY3RpdmF0ZSgpO1xuXHRcdH1cblx0fVxuXHR3aGljaC5pc19hY3RpdmUgPSB0cnVlO1xuXHRpZiAod2hpY2guZGFiKSB7XG5cdFx0c2hvd0RhYih3aGljaCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQ2hlY2sgZm9yIHByb2dyYW1tYXRpYyB2YWx1ZSBjaGFuZ2VzLlxuXHRcdGNvbnN0IGV4cGVjdGVkSW5wdXQgPSB3aGljaC5sYXN0UmVhbElucHV0IHx8IHdoaWNoLmxhc3RJbnB1dCB8fCAnJztcblx0XHRjb25zdCBhY3R1YWxWYWx1ZSA9IHdoaWNoLnRleHQhLnZhbHVlIHx8ICcnO1xuXHRcdGlmIChcblx0XHRcdChleHBlY3RlZElucHV0Lmxlbmd0aCA9PT0gMCAmJiBhY3R1YWxWYWx1ZS5sZW5ndGggPiAwKSB8fFxuXHRcdFx0KGV4cGVjdGVkSW5wdXQubGVuZ3RoID4gMCAmJiBhY3R1YWxWYWx1ZS5pbmRleE9mKGV4cGVjdGVkSW5wdXQpKVxuXHRcdCkge1xuXHRcdFx0Ly8gU29tZWhvdyB0aGUgZmllbGQncyB2YWx1ZSBhcHBlYXJzIHRvIGhhdmUgY2hhbmdlZCwgYW5kIHdoaWNoLmxhc3RTZWxlY3Rpb24gdGhlcmVmb3JlIGlzIG5vIGxvbmdlciB2YWxpZC4gVHJ5IHRvIHNldCB0aGVcblx0XHRcdC8vIGN1cnNvciBhdCB0aGUgZW5kIG9mIHRoZSBjYXRlZ29yeSwgYW5kIGRvIG5vdCBkaXNwbGF5IHRoZSBvbGQgc3VnZ2VzdGlvbiBsaXN0LlxuXHRcdFx0d2hpY2guc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHRjb25zdCB2ID0gYWN0dWFsVmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFt3aGljaC5sYXN0SW5wdXRdID0gdiBhcyBbc3RyaW5nXTtcblx0XHRcdHdoaWNoLmxhc3RSZWFsSW5wdXQgPSB3aGljaC5sYXN0SW5wdXQ7XG5cdFx0XHRpZiAodi5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdHdoaWNoLmN1cnJlbnRLZXkgPSB2WzFdITtcblx0XHRcdH1cblx0XHRcdHdoaWNoLmxhc3RTZWxlY3Rpb24gJiY9IHtcblx0XHRcdFx0c3RhcnQ6IHZbMF0hLmxlbmd0aCxcblx0XHRcdFx0ZW5kOiB2WzBdIS5sZW5ndGgsXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZiAod2hpY2guc2hvd3NMaXN0KSB7XG5cdFx0XHR3aGljaC5kaXNwbGF5TGlzdCgpO1xuXHRcdH1cblx0XHRpZiAod2hpY2gubGFzdFNlbGVjdGlvbikge1xuXHRcdFx0Y29uc3Qge2xhc3RTZWxlY3Rpb259ID0gd2hpY2g7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0d2hpY2guc2V0U2VsZWN0aW9uKGxhc3RTZWxlY3Rpb24uc3RhcnQsIGxhc3RTZWxlY3Rpb24uZW5kKTtcblx0XHRcdH0sIDApO1xuXHRcdH1cblx0fVxufTtcbmNvbnN0IHNob3dEYWIgPSAod2hpY2g6IENhdGVnb3J5RWRpdG9yKTogdm9pZCA9PiB7XG5cdGlmICh3aGljaC5pc19hY3RpdmUpIHtcblx0XHR3aGljaC5zaG93U3VnZ2VzdGlvbnMod2hpY2guZGFiLCBmYWxzZSwgbnVsbCwgbnVsbCk7IC8vIGRvIGF1dG9jb21wbGV0aW9uLCBubyBrZXksIG5vIGVuZ2luZSBzZWxlY3RvclxuXHRcdHdoaWNoLmRhYiA9IG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0bWFrZUFjdGl2ZSh3aGljaCk7XG5cdH1cbn07XG5jb25zdCBtdWx0aVN1Ym1pdCA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3QgdG9SZXNvbHZlOiBDYXRlZ29yeUVkaXRvcltdID0gW107XG5cdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRpZiAoZWRpdG9yLnN0YXRlID09PSBDSEFOR0VfUEVORElORyB8fCBlZGl0b3Iuc3RhdGUgPT09IE9QRU4pIHtcblx0XHRcdHRvUmVzb2x2ZVt0b1Jlc29sdmUubGVuZ3RoXSA9IGVkaXRvcjtcblx0XHR9XG5cdH1cblx0aWYgKHRvUmVzb2x2ZS5sZW5ndGggPT09IDApIHtcblx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlKTtcblx0XHRcdH0sXG5cdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybjtcblx0fVxuXHRyZXNvbHZlTXVsdGkodG9SZXNvbHZlLCAocmVzb2x2ZWQpID0+IHtcblx0XHRsZXQgZmlyc3REYWI6IENhdGVnb3J5RWRpdG9yIHwgbnVsbCA9IG51bGw7XG5cdFx0bGV0IGRvbnRDaGFuZ2UgPSBmYWxzZTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcmVzb2x2ZWQpIHtcblx0XHRcdGlmIChlbGVtZW50Lmxhc3RJbnB1dCA9PT0gZWxlbWVudC5kYWJJbnB1dCkge1xuXHRcdFx0XHRpZiAoZWxlbWVudC5kYWIpIHtcblx0XHRcdFx0XHRmaXJzdERhYiB8fD0gZWxlbWVudDtcblx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50LmFjY2VwdENoZWNrKHRydWUpKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5jb21taXQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gV2UgZGlkbid0IGRpc2FibGUgYWxsIHRoZSBvcGVuIGVkaXRvcnMsIGJ1dCB3ZSBkaWQgYXN5bmNocm9ub3VzIGNhbGxzLiBJdCBpc1xuXHRcdFx0XHQvLyB0aGVvcmV0aWNhbGx5IHBvc3NpYmxlIHRoYXQgdGhlIHVzZXIgY2hhbmdlZCBzb21ldGhpbmcuLi5cblx0XHRcdFx0ZG9udENoYW5nZSA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChmaXJzdERhYikge1xuXHRcdFx0c2hvd0RhYihmaXJzdERhYik7XG5cdFx0fSBlbHNlIGlmICghZG9udENoYW5nZSkge1xuXHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0fSk7XG59O1xuY29uc3Qgc2V0TXVsdGlJbnB1dCA9ICgpOiB2b2lkID0+IHtcblx0aWYgKGNvbW1pdEJ1dHRvbiB8fCBvblVwbG9hZCkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb21taXRCdXR0b24gPSBtYWtlKCdpbnB1dCcpO1xuXHRjb21taXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuXHRjb21taXRCdXR0b24udmFsdWUgPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jb21taXQnKTtcblx0Y29tbWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbXVsdGlTdWJtaXQpO1xuXHRpZiAobXVsdGlTcGFuKSB7XG5cdFx0bXVsdGlTcGFuLnJlcGxhY2VXaXRoKGNvbW1pdEJ1dHRvbik7XG5cdH0gZWxzZSB7XG5cdFx0Y2F0TGluZSEuYXBwZW5kKGNvbW1pdEJ1dHRvbik7XG5cdH1cbn07XG5jb25zdCBjaGVja011bHRpSW5wdXQgPSAoKTogdm9pZCA9PiB7XG5cdGlmICghY29tbWl0QnV0dG9uKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGxldCBoYXNDaGFuZ2VzID0gZmFsc2U7XG5cdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdGhhc0NoYW5nZXMgPSB0cnVlO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdGNvbW1pdEJ1dHRvbi5kaXNhYmxlZCA9ICFoYXNDaGFuZ2VzO1xufTtcbmludGVyZmFjZSBIb3RDYXRDYXRlZ29yeU1lbWJlciB7XG5cdHRpdGxlOiBzdHJpbmc7XG59XG5pbnRlcmZhY2UgSG90Q2F0U3VnZ2VzdGlvblF1ZXJ5UmVzcG9uc2Uge1xuXHRxdWVyeT86IHtcblx0XHRhbGxwYWdlcz86IEhvdENhdENhdGVnb3J5TWVtYmVyW107XG5cdFx0Y2F0ZWdvcnltZW1iZXJzPzogSG90Q2F0Q2F0ZWdvcnlNZW1iZXJbXTtcblx0XHRwYWdlcz86IFJlY29yZDxzdHJpbmcsIHt0aXRsZTogc3RyaW5nOyBjYXRlZ29yaWVzPzogSG90Q2F0Q2F0ZWdvcnlNZW1iZXJbXX0+O1xuXHR9O1xufVxuLyoqXG4gKiBSZW1vdmUgdGhlIG5hbWVzcGFjZSBwcmVmaXggZnJvbSBhIGxpc3Qgb2YgcGFnZSB0aXRsZXNcbiAqXG4gKiBAcGFyYW0ge0hvdENhdENhdGVnb3J5TWVtYmVyW119IG1lbWJlcnNcbiAqIEByZXR1cm4ge0hvdENhdFN1Z2dlc3Rpb25UaXRsZXN9XG4gKi9cbmNvbnN0IHRvQ2F0ZWdvcnlUaXRsZXMgPSAobWVtYmVyczogSG90Q2F0Q2F0ZWdvcnlNZW1iZXJbXSk6IEhvdENhdFN1Z2dlc3Rpb25UaXRsZXMgPT4ge1xuXHRyZXR1cm4gbWVtYmVycy5tYXAoKG1lbWJlcikgPT4ge1xuXHRcdHJldHVybiBtZW1iZXIudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgbWVtYmVyLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0fSkgYXMgSG90Q2F0U3VnZ2VzdGlvblRpdGxlcztcbn07XG5jb25zdCBzdWdnZXN0aW9uRW5naW5lczogUmVjb3JkPHN0cmluZywgSG90Q2F0U3VnZ2VzdGlvbkVuZ2luZT4gPSB7XG5cdG9wZW5zZWFyY2g6IHtcblx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPW9wZW5zZWFyY2gmbmFtZXNwYWNlPTE0JmxpbWl0PTMwJnNlYXJjaD1DYXRlZ29yeTokMWAsXG5cdFx0Ly8gJDEgPSBzZWFyY2ggdGVybVxuXHRcdC8vIEZ1bmN0aW9uIHRvIGNvbnZlcnQgcmVzdWx0IG9mIHVyaSBpbnRvIGFuIGFycmF5IG9mIGNhdGVnb3J5IG5hbWVzXG5cdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0OiB1bmtub3duLCBxdWVyeUtleT86IHN0cmluZyk6IEhvdENhdFN1Z2dlc3Rpb25UaXRsZXMgfCBudWxsID0+IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHF1ZXJ5UmVzdWx0IGFzIFtzdHJpbmcsIEhvdENhdFN1Z2dlc3Rpb25UaXRsZXNdIHwgbnVsbDtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdGNvbnN0IGtleSA9IFN0cmluZyhyZXN1bHRbMF0pLnNsaWNlKE1hdGgubWF4KDAsIFN0cmluZyhyZXN1bHRbMF0pLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0Y29uc3QgdGl0bGVzID0gcmVzdWx0WzFdO1xuXHRcdFx0XHRsZXQgZXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdGNhdF9wcmVmaXggfHw9IG5ldyBSZWdFeHAoYF4oJHtIQy5jYXRlZ29yeV9yZWdleHB9KTpgKTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRjYXRfcHJlZml4Lmxhc3RJbmRleCA9IDA7XG5cdFx0XHRcdFx0Y29uc3QgbSA9IGNhdF9wcmVmaXguZXhlYyh0aXRsZXNbaV0hKTtcblx0XHRcdFx0XHRpZiAobSAmJiBtLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXSEuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldIS5pbmRleE9mKCc6JykgKyAxKSk7IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gdGl0bGVzW2ldKSB7XG5cdFx0XHRcdFx0XHRcdGV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7IC8vIE5vcGUsIGl0J3Mgbm90IGEgY2F0ZWdvcnkgYWZ0ZXIgYWxsLlxuXHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aXRsZXMuZXhpc3RzID0gZXhpc3RzO1xuXHRcdFx0XHRpZiAocXVlcnlLZXkgIT09IGtleSkge1xuXHRcdFx0XHRcdHRpdGxlcy5ub3JtYWxpemVkID0ga2V5O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFJlbWVtYmVyIHRoZSBORkMgbm9ybWFsaXplZCBrZXkgd2UgZ290IGJhY2sgZnJvbSB0aGUgc2VydmVyXG5cdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9LFxuXHR9LFxuXHRpbnRlcm5hbHNlYXJjaDoge1xuXHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmbGlzdD1hbGxwYWdlcyZhcG5hbWVzcGFjZT0xNCZhcGxpbWl0PTMwJmFwZnJvbT0kMSZhcHByZWZpeD0kMWAsXG5cdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0OiB1bmtub3duKTogSG90Q2F0U3VnZ2VzdGlvblRpdGxlcyB8IG51bGwgPT4ge1xuXHRcdFx0Y29uc3QgYWxscGFnZXMgPSAocXVlcnlSZXN1bHQgYXMgSG90Q2F0U3VnZ2VzdGlvblF1ZXJ5UmVzcG9uc2UgfCBudWxsKT8ucXVlcnk/LmFsbHBhZ2VzO1xuXHRcdFx0cmV0dXJuIGFsbHBhZ2VzID8gdG9DYXRlZ29yeVRpdGxlcyhhbGxwYWdlcykgOiBudWxsO1xuXHRcdH0sXG5cdH0sXG5cdGV4aXN0czoge1xuXHRcdHVyaTogYCR7bXcuY29uZmlnLmdldCgnd2dTY3JpcHRQYXRoJyl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5JnByb3A9aW5mbyZ0aXRsZXM9Q2F0ZWdvcnk6JDFgLFxuXHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdDogdW5rbm93biwgcXVlcnlLZXk/OiBzdHJpbmcpOiBIb3RDYXRTdWdnZXN0aW9uVGl0bGVzIHwgbnVsbCA9PiB7XG5cdFx0XHRjb25zdCB7cGFnZXN9ID0gKHF1ZXJ5UmVzdWx0IGFzIEhvdENhdFN1Z2dlc3Rpb25RdWVyeVJlc3BvbnNlIHwgbnVsbCk/LnF1ZXJ5ID8/IHt9O1xuXHRcdFx0aWYgKCFwYWdlcyB8fCBwYWdlc1snLTEnXSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdC8vIFNob3VsZCBoYXZlIGV4YWN0bHkgMVxuXHRcdFx0Zm9yIChjb25zdCBwIGluIHBhZ2VzKSB7XG5cdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bihwYWdlcywgcCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgX3RpdGxlOiBzdHJpbmcgPSBwYWdlc1twXSEudGl0bGU7XG5cdFx0XHRcdF90aXRsZSA9IF90aXRsZS5zbGljZShNYXRoLm1heCgwLCBfdGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRjb25zdCB0aXRsZXM6IEhvdENhdFN1Z2dlc3Rpb25UaXRsZXMgPSBbX3RpdGxlXTtcblx0XHRcdFx0dGl0bGVzLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdGlmIChxdWVyeUtleSAhPT0gX3RpdGxlKSB7XG5cdFx0XHRcdFx0dGl0bGVzLm5vcm1hbGl6ZWQgPSBfdGl0bGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gTkZDXG5cdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9LFxuXHR9LFxuXHRzdWJjYXRlZ29yaWVzOiB7XG5cdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZsaXN0PWNhdGVnb3J5bWVtYmVycyZjbXR5cGU9c3ViY2F0JmNtbGltaXQ9bWF4JmNtdGl0bGU9Q2F0ZWdvcnk6JDFgLFxuXHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdDogdW5rbm93bik6IEhvdENhdFN1Z2dlc3Rpb25UaXRsZXMgfCBudWxsID0+IHtcblx0XHRcdGNvbnN0IGNhdGVnb3J5bWVtYmVycyA9IChxdWVyeVJlc3VsdCBhcyBIb3RDYXRTdWdnZXN0aW9uUXVlcnlSZXNwb25zZSB8IG51bGwpPy5xdWVyeT8uY2F0ZWdvcnltZW1iZXJzO1xuXHRcdFx0cmV0dXJuIGNhdGVnb3J5bWVtYmVycyA/IHRvQ2F0ZWdvcnlUaXRsZXMoY2F0ZWdvcnltZW1iZXJzKSA6IG51bGw7XG5cdFx0fSxcblx0fSxcblx0cGFyZW50Y2F0ZWdvcmllczoge1xuXHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmcHJvcD1jYXRlZ29yaWVzJnRpdGxlcz1DYXRlZ29yeTokMSZjbGxpbWl0PW1heGAsXG5cdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0OiB1bmtub3duKTogSG90Q2F0U3VnZ2VzdGlvblRpdGxlcyB8IG51bGwgPT4ge1xuXHRcdFx0Y29uc3Qge3BhZ2VzfSA9IChxdWVyeVJlc3VsdCBhcyBIb3RDYXRTdWdnZXN0aW9uUXVlcnlSZXNwb25zZSB8IG51bGwpPy5xdWVyeSA/PyB7fTtcblx0XHRcdGlmICghcGFnZXMpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGNvbnN0IHAgaW4gcGFnZXMpIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHBhZ2VzLCBwKSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHtjYXRlZ29yaWVzfSA9IHBhZ2VzW3BdITtcblx0XHRcdFx0aWYgKGNhdGVnb3JpZXMpIHtcblx0XHRcdFx0XHRyZXR1cm4gdG9DYXRlZ29yeVRpdGxlcyhjYXRlZ29yaWVzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fSxcblx0fSxcbn07XG5jb25zdCBzdWdnZXN0aW9uQ29uZmlnczogUmVjb3JkPHN0cmluZywgSG90Q2F0U3VnZ2VzdGlvbkNvbmZpZz4gPSB7XG5cdHNlYXJjaGluZGV4OiB7XG5cdFx0bmFtZTogJ1NlYXJjaCBpbmRleCcsXG5cdFx0ZW5naW5lczogWydvcGVuc2VhcmNoJ10sXG5cdFx0Y2FjaGU6IHt9LFxuXHRcdHNob3c6IHRydWUsXG5cdFx0dGVtcDogZmFsc2UsXG5cdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0fSxcblx0cGFnZWxpc3Q6IHtcblx0XHRuYW1lOiAnUGFnZSBsaXN0Jyxcblx0XHRlbmdpbmVzOiBbJ2ludGVybmFsc2VhcmNoJywgJ2V4aXN0cyddLFxuXHRcdGNhY2hlOiB7fSxcblx0XHRzaG93OiB0cnVlLFxuXHRcdHRlbXA6IGZhbHNlLFxuXHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdH0sXG5cdGNvbWJpbmVkOiB7XG5cdFx0bmFtZTogJ0NvbWJpbmVkIHNlYXJjaCcsXG5cdFx0ZW5naW5lczogWydvcGVuc2VhcmNoJywgJ2ludGVybmFsc2VhcmNoJ10sXG5cdFx0Y2FjaGU6IHt9LFxuXHRcdHNob3c6IHRydWUsXG5cdFx0dGVtcDogZmFsc2UsXG5cdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0fSxcblx0c3ViY2F0OiB7XG5cdFx0bmFtZTogJ1N1YmNhdGVnb3JpZXMnLFxuXHRcdGVuZ2luZXM6IFsnc3ViY2F0ZWdvcmllcyddLFxuXHRcdGNhY2hlOiB7fSxcblx0XHRzaG93OiB0cnVlLFxuXHRcdHRlbXA6IHRydWUsXG5cdFx0bm9Db21wbGV0aW9uOiB0cnVlLFxuXHR9LFxuXHRwYXJlbnRjYXQ6IHtcblx0XHRuYW1lOiAnUGFyZW50IGNhdGVnb3JpZXMnLFxuXHRcdGVuZ2luZXM6IFsncGFyZW50Y2F0ZWdvcmllcyddLFxuXHRcdGNhY2hlOiB7fSxcblx0XHRzaG93OiB0cnVlLFxuXHRcdHRlbXA6IHRydWUsXG5cdFx0bm9Db21wbGV0aW9uOiB0cnVlLFxuXHR9LFxufTtcbi8vIEV2ZW50IGtleUNvZGVzIHRoYXQgd2UgaGFuZGxlIGluIHRoZSB0ZXh0IGlucHV0IGZpZWxkL3N1Z2dlc3Rpb24gbGlzdC5cbmNvbnN0IEJTID0gODtcbmNvbnN0IFRBQiA9IDk7XG5jb25zdCBSRVQgPSAxMztcbmNvbnN0IEVTQyA9IDI3O1xuY29uc3QgU1BBQ0UgPSAzMjtcbmNvbnN0IFBHVVAgPSAzMztcbmNvbnN0IFBHRE9XTiA9IDM0O1xuY29uc3QgVVAgPSAzODtcbmNvbnN0IERPV04gPSA0MDtcbmNvbnN0IERFTCA9IDQ2O1xuY29uc3QgSU1FID0gMjI5O1xuY2xhc3MgQ2F0ZWdvcnlFZGl0b3Ige1xuXHRpc0NvbXBvc2l0aW9uU3RhcnQgPSBmYWxzZTtcblx0aXNBZGRDYXRlZ29yeSA9IGZhbHNlO1xuXHRjYXRMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRvcmlnaW5hbENhdGVnb3J5ID0gJyc7XG5cdG9yaWdpbmFsS2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0b3JpZ2luYWxFeGlzdHMgPSBmYWxzZTtcblx0b3JpZ2luYWxIaWRkZW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cdG9yaWdpbmFsU3RhdGUgPSBVTkNIQU5HRUQ7XG5cdGxpbmtTcGFuITogSFRNTFNwYW5FbGVtZW50O1xuXHRub3JtYWxMaW5rczogSFRNTFNwYW5FbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdHVuZGVsTGluazogSFRNTFNwYW5FbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdHVwRG93bkxpbmtzOiBIVE1MU3BhbkVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cdHVuZG9MaW5rOiBIVE1MU3BhbkVsZW1lbnQgfCBudWxsID0gbnVsbDtcblx0bGluZTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblx0c3BhbiE6IEhUTUxFbGVtZW50O1xuXHRlbmdpbmUgPSAnJztcblx0ZW5naW5lTmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdGVuZ2luZVNlbGVjdG9yOiBIVE1MU2VsZWN0RWxlbWVudCB8IHVuZGVmaW5lZDtcblx0Zm9ybTogSFRNTEZvcm1FbGVtZW50IHwgdW5kZWZpbmVkO1xuXHR0ZXh0OiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHRpY29uOiBIVE1MSW1hZ2VFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHRsaXN0OiBIVE1MU2VsZWN0RWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRvazogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZDtcblx0Y2FuY2VsQnV0dG9uOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xuXHRjdXJyZW50Q2F0ZWdvcnkgPSAnJztcblx0Y3VycmVudEV4aXN0cyA9IGZhbHNlO1xuXHRjdXJyZW50SGlkZGVuOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHRjdXJyZW50S2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0c3RhdGUgPSBVTkNIQU5HRUQ7XG5cdGxhc3RTYXZlZFN0YXRlID0gVU5DSEFOR0VEO1xuXHRsYXN0U2F2ZWRDYXRlZ29yeSA9ICcnO1xuXHRsYXN0U2F2ZWRLZXk6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXHRsYXN0U2F2ZWRFeGlzdHMgPSBmYWxzZTtcblx0bGFzdFNhdmVkSGlkZGVuOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXHRsYXN0SW5wdXQgPSAnJztcblx0bGFzdFJlYWxJbnB1dCA9ICcnO1xuXHRsYXN0U2VsZWN0aW9uOiB7c3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXJ9IHwgdW5kZWZpbmVkO1xuXHRsYXN0UXVlcnk6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgPSBudWxsO1xuXHRzaG93c0xpc3QgPSBmYWxzZTtcblx0aW5wdXRFeGlzdHMgPSBmYWxzZTtcblx0aW1lID0gZmFsc2U7XG5cdHVzZXNDb21wb3NpdGlvbiA9IGZhbHNlO1xuXHRsYXN0S2V5OiBzdHJpbmcgfCBudW1iZXIgPSAwO1xuXHRrZXlDb3VudCA9IDA7XG5cdGRhYjogc3RyaW5nW10gfCBudWxsID0gbnVsbDtcblx0ZGFiSW5wdXQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0ZGFiSW5wdXRDbGVhbmVkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGNhbGxiYWNrT2JqOiBIb3RDYXRTdWdnZXN0aW9uQ2FsbGJhY2sgfCBudWxsID0gbnVsbDtcblx0aXNfYWN0aXZlID0gZmFsc2U7XG5cdG5vQ29tbWl0ID0gZmFsc2U7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdGxpbmU6IEhUTUxFbGVtZW50IHwgbnVsbCxcblx0XHRzcGFuOiBIVE1MRWxlbWVudCB8IG51bGwsXG5cdFx0YWZ0ZXI6IHN0cmluZyB8IEhUTUxFbGVtZW50IHwgbnVsbCxcblx0XHRrZXk/OiBzdHJpbmcgfCBib29sZWFuIHwgbnVsbCxcblx0XHRpc19oaWRkZW4/OiBib29sZWFuXG5cdCkge1xuXHRcdHRoaXMuaW5pdGlhbGl6ZShsaW5lLCBzcGFuLCBhZnRlciwga2V5LCBpc19oaWRkZW4pO1xuXHR9XG5cdGluaXRpYWxpemUoXG5cdFx0bGluZTogSFRNTEVsZW1lbnQgfCBudWxsLFxuXHRcdHNwYW46IEhUTUxFbGVtZW50IHwgbnVsbCxcblx0XHRhZnRlcjogc3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBudWxsLFxuXHRcdGtleT86IHN0cmluZyB8IGJvb2xlYW4gfCBudWxsLFxuXHRcdGlzX2hpZGRlbj86IGJvb2xlYW5cblx0KTogdm9pZCB7XG5cdFx0Ly8gSWYgYSBzcGFuIGlzIGdpdmVuLCAnYWZ0ZXInIGlzIHRoZSBjYXRlZ29yeSB0aXRsZSwgb3RoZXJ3aXNlIGl0IG1heSBiZSBhbiBlbGVtZW50IGFmdGVyIHdoaWNoIHRvXG5cdFx0Ly8gaW5zZXJ0IHRoZSBuZXcgc3Bhbi4gJ2tleScgaXMgbGlrZXdpc2Ugb3ZlcmxvYWRlZDsgaWYgYSBzcGFuIGlzIGdpdmVuLCBpdCBpcyB0aGUgY2F0ZWdvcnkga2V5IChpZlxuXHRcdC8vIGtub3duKSwgb3RoZXJ3aXNlIGl0IGlzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgYSBiYXIgc2hhbGwgYmUgcHJlcGVuZGVkLlxuXHRcdGlmIChzcGFuKSB7XG5cdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdHNwYW4uZGlyID0gJ3J0bCc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRcdHRoaXMuY2F0TGluayA9IHNwYW4uZmlyc3RDaGlsZCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblx0XHRcdHRoaXMub3JpZ2luYWxDYXRlZ29yeSA9IGFmdGVyIGFzIHN0cmluZztcblx0XHRcdHRoaXMub3JpZ2luYWxLZXkgPSB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkubGVuZ3RoID4gMSA/IGtleS5zbGljZSgxKSA6IG51bGw7IC8vID4gMSBiZWNhdXNlIGl0IGluY2x1ZGVzIHRoZSBsZWFkaW5nIGJhclxuXHRcdFx0dGhpcy5vcmlnaW5hbEV4aXN0cyA9ICFoYXNDbGFzcyh0aGlzLmNhdExpbmssICduZXcnKTtcblx0XHRcdC8vIENyZWF0ZSBjaGFuZ2UgYW5kIGRlbCBsaW5rc1xuXHRcdFx0dGhpcy5tYWtlTGlua1NwYW4oKTtcblx0XHRcdGlmICghdGhpcy5vcmlnaW5hbEV4aXN0cyAmJiB0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdHRoaXMudXBEb3duTGlua3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdHNwYW4uYXBwZW5kKHRoaXMubGlua1NwYW4pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSB0cnVlO1xuXHRcdFx0Ly8gQ3JlYXRlIGFkZCBzcGFuIGFuZCBhcHBlbmQgdG8gY2F0TGlua3Ncblx0XHRcdHRoaXMub3JpZ2luYWxDYXRlZ29yeSA9ICcnO1xuXHRcdFx0dGhpcy5vcmlnaW5hbEtleSA9IG51bGw7XG5cdFx0XHR0aGlzLm9yaWdpbmFsRXhpc3RzID0gZmFsc2U7XG5cdFx0XHRsZXQgYWZ0ZXJFbGVtZW50ID0gYWZ0ZXIgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuXHRcdFx0aWYgKCFuZXdET00pIHtcblx0XHRcdFx0Y29uc3QgYWRkU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0YWRkU3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCc7XG5cdFx0XHRcdGlmIChrZXkpIHtcblx0XHRcdFx0XHRhZGRTcGFuLmFwcGVuZChtYWtlKCcgfCAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0aWYgKGFmdGVyRWxlbWVudCkge1xuXHRcdFx0XHRcdFx0YWZ0ZXJFbGVtZW50LnBhcmVudE5vZGUhLmluc2VydEJlZm9yZShhZGRTcGFuLCBhZnRlckVsZW1lbnQubmV4dFNpYmxpbmcpO1xuXHRcdFx0XHRcdFx0YWZ0ZXJFbGVtZW50ID0gYWZ0ZXJFbGVtZW50Lm5leHRTaWJsaW5nIGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAobGluZSkge1xuXHRcdFx0XHRcdFx0bGluZS5hcHBlbmQoYWRkU3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUgJiYgbGluZS5maXJzdENoaWxkKSB7XG5cdFx0XHRcdFx0YWRkU3Bhbi5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHRsaW5lLmFwcGVuZChhZGRTcGFuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHRoaXMubGlua1NwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQgbm9wb3B1cHMgaG90Y2F0bGluayc7XG5cdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuLmJpbmQodGhpcykpO1xuXHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5hZGQsIHRydWUpKTtcblx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1hZGQnKTtcblx0XHRcdHRoaXMubGlua1NwYW4uYXBwZW5kKGxpbmspO1xuXHRcdFx0Y29uc3Qgb3V0ZXJTcGFuID0gbWFrZShuZXdET00gPyAnbGknIDogJ3NwYW4nKTtcblx0XHRcdG91dGVyU3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCc7XG5cdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdG91dGVyU3Bhbi5kaXIgPSAncnRsJztcblx0XHRcdH1cblx0XHRcdG91dGVyU3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHRpZiAoYWZ0ZXJFbGVtZW50KSB7XG5cdFx0XHRcdGFmdGVyRWxlbWVudC5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUob3V0ZXJTcGFuLCBhZnRlckVsZW1lbnQubmV4dFNpYmxpbmcpO1xuXHRcdFx0fSBlbHNlIGlmIChsaW5lKSB7XG5cdFx0XHRcdGxpbmUuYXBwZW5kKG91dGVyU3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRzcGFuID0gb3V0ZXJTcGFuO1xuXHRcdFx0dGhpcy5ub3JtYWxMaW5rcyA9IG51bGw7XG5cdFx0XHR0aGlzLnVuZGVsTGluayA9IG51bGw7XG5cdFx0XHR0aGlzLmNhdExpbmsgPSBudWxsO1xuXHRcdH1cblx0XHR0aGlzLm9yaWdpbmFsSGlkZGVuID0gaXNfaGlkZGVuO1xuXHRcdHRoaXMubGluZSA9IGxpbmU7XG5cdFx0dGhpcy5lbmdpbmUgPSBIQy5zdWdnZXN0aW9ucztcblx0XHR0aGlzLnNwYW4gPSBzcGFuITtcblx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHR0aGlzLnN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdHRoaXMubGFzdFNhdmVkU3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRpZiAodGhpcy5jYXRMaW5rICYmIHRoaXMuY3VycmVudEtleSkge1xuXHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5O1xuXHRcdH1cblx0XHRlZGl0b3JzW2VkaXRvcnMubGVuZ3RoXSA9IHRoaXM7XG5cdH1cblx0bWFrZUxpbmtTcGFuKCk6IHZvaWQge1xuXHRcdHRoaXMubm9ybWFsTGlua3MgPSBtYWtlKCdzcGFuJyk7XG5cdFx0bGV0IGxpbms6IEhUTUxBbmNob3JFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cdFx0aWYgKHRoaXMub3JpZ2luYWxDYXRlZ29yeSAmJiB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlLmJpbmQodGhpcykpO1xuXHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5yZW1vdmUsIHRydWUpKTtcblx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1yZW1vdmUnKTtcblx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChsaW5rKTtcblx0XHR9XG5cdFx0aWYgKCFIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW3RoaXMub3JpZ2luYWxDYXRlZ29yeV0pIHtcblx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG5cdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLmNoYW5nZSwgdHJ1ZSkpO1xuXHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWNoYW5nZScpO1xuXHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zICYmIEhDLnVzZV91cF9kb3duKSB7XG5cdFx0XHRcdHRoaXMudXBEb3duTGlua3MgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb3duLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLmRvd24sIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWRvd24nKTtcblx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cC5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy51cCwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtdXAnKTtcblx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKHRoaXMudXBEb3duTGlua3MpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLmxpbmtTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdHRoaXMubGlua1NwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQgbm9wb3B1cHMgaG90Y2F0bGluayc7XG5cdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQodGhpcy5ub3JtYWxMaW5rcyk7XG5cdFx0dGhpcy51bmRlbExpbmsgPSBtYWtlKCdzcGFuJyk7XG5cdFx0dGhpcy51bmRlbExpbmsuY2xhc3NOYW1lID0gJ25vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdHRoaXMudW5kZWxMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZXN0b3JlLmJpbmQodGhpcykpO1xuXHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MucmVzdG9yZSwgdHJ1ZSkpO1xuXHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1yZXN0b3JlJyk7XG5cdFx0dGhpcy51bmRlbExpbmsuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0dGhpcy51bmRlbExpbmsuYXBwZW5kKGxpbmspO1xuXHRcdHRoaXMubGlua1NwYW4uYXBwZW5kKHRoaXMudW5kZWxMaW5rKTtcblx0fVxuXHRpbnZva2VTdWdnZXN0aW9ucyhkb250X2F1dG9jb21wbGV0ZT86IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRpZiAoXG5cdFx0XHR0aGlzLmVuZ2luZSAmJlxuXHRcdFx0c3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdICYmXG5cdFx0XHRzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0hLnRlbXAgJiZcblx0XHRcdCFkb250X2F1dG9jb21wbGV0ZVxuXHRcdCkge1xuXHRcdFx0dGhpcy5lbmdpbmUgPSBIQy5zdWdnZXN0aW9ucztcblx0XHR9IC8vIFJlc2V0IHRvIGEgc2VhcmNoIHVwb24gaW5wdXRcblx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFX1BFTkRJTkc7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzZWxmLnRleHRjaGFuZ2UoZG9udF9hdXRvY29tcGxldGUpO1xuXHRcdH0sIEhDLnN1Z2dlc3RfZGVsYXkpO1xuXHR9XG5cdG1ha2VGb3JtKCk6IHZvaWQge1xuXHRcdGNvbnN0IGZvcm0gPSBtYWtlKCdmb3JtJyk7XG5cdFx0Zm9ybS5tZXRob2QgPSAnUE9TVCc7XG5cdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmFjY2VwdC5iaW5kKHRoaXMpKTtcblx0XHR0aGlzLmZvcm0gPSBmb3JtO1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IHRleHQgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdHRleHQudHlwZSA9ICd0ZXh0Jztcblx0XHR0ZXh0LnNpemUgPSBIQy5lZGl0Ym94X3dpZHRoO1xuXHRcdGlmICghbm9TdWdnZXN0aW9ucykge1xuXHRcdFx0Ly8gQmUgY2FyZWZ1bCBoZXJlIHRvIGhhbmRsZSBJTUUgaW5wdXQuIFRoaXMgaXMgYnJvd3Nlci9PUy9JTUUgZGVwZW5kZW50LCBidXQgYmFzaWNhbGx5IHRoZXJlIGFyZSB0d28gbWVjaGFuaXNtczpcblx0XHRcdC8vIC0gTW9kZXJuIChET00gTGV2ZWwgMykgYnJvd3NlcnMgdXNlIGNvbXBvc2l0aW9uc3RhcnQvY29tcG9zaXRpb25lbmQgZXZlbnRzIHRvIHNpZ25hbCBjb21wb3NpdGlvbjsgaWYgdGhlXG5cdFx0XHQvLyAgIGNvbXBvc2l0aW9uIGlzIG5vdCBjYW5jZWxlZCwgdGhlcmUnbGwgYmUgYSB0ZXh0SW5wdXQgZXZlbnQgZm9sbG93aW5nLiBEdXJpbmcgYSBjb21wb3NpdGlvbiBrZXkgZXZlbnRzIGFyZVxuXHRcdFx0Ly8gICBlaXRoZXIgYWxsIHN1cHByZXNzZWQgKEZGL0dlY2tvKSwgb3Igb3RoZXJ3aXNlIGhhdmUga2V5RG93biA9PT0gSU1FIGZvciBhbGwga2V5cyAoV2Via2l0KS5cblx0XHRcdC8vICAgLSBXZWJraXQgc2VuZHMgYSB0ZXh0SW5wdXQgZm9sbG93ZWQgYnkga2V5RG93biA9PT0gSU1FIGFuZCBhIGtleVVwIHdpdGggdGhlIGtleSB0aGF0IGVuZGVkIGNvbXBvc2l0aW9uLlxuXHRcdFx0Ly8gICAtIEdlY2tvIGRvZXNuJ3Qgc2VuZCB0ZXh0SW5wdXQgYnV0IGp1c3QgYSBrZXlVcCB3aXRoIHRoZSBrZXkgdGhhdCBlbmRlZCBjb21wb3NpdGlvbiwgd2l0aG91dCBzZW5kaW5nIGtleURvd25cblx0XHRcdC8vXHQgZmlyc3QuIEdlY2tvIGRvZXNuJ3Qgc2VuZCBhbnkga2V5ZG93biB3aGlsZSBJTUUgaXMgYWN0aXZlLlxuXHRcdFx0Ly8gLSBPbGRlciBicm93c2VycyBzaWduYWwgY29tcG9zaXRpb24gYnkga2V5RG93biA9PT0gSU1FIGZvciB0aGUgZmlyc3QgYW5kIHN1YnNlcXVlbnQga2V5cyBmb3IgYSBjb21wb3NpdGlvbi4gVGhlXG5cdFx0XHQvLyAgIGZpcnN0IGtleURvd24gIT09IElNRSBpcyBjZXJ0YWlubHkgYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgY29tcG9zaXRpb24uIFR5cGljYWxseSwgY29tcG9zaXRpb24gZW5kIGNhbiBhbHNvIGJlXG5cdFx0XHQvLyAgIGRldGVjdGVkIGJ5IGEga2V5RG93biBJTUUgd2l0aCBhIGtleVVwIG9mIHNwYWNlLCB0YWIsIGVzY2FwZSwgb3IgcmV0dXJuLlxuXHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0XHRjb25zdCBrZXk6IHN0cmluZyB8IG51bWJlciA9IGV2ZW50LmtleSB8fCAwO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0c2VsZi5pbWUgJiZcblx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPT09IElNRSAmJlxuXHRcdFx0XHRcdCFzZWxmLnVzZXNDb21wb3NpdGlvbiAmJlxuXHRcdFx0XHRcdChrZXkgPT09IFRBQiB8fCBrZXkgPT09IFJFVCB8fCBrZXkgPT09IEVTQyB8fCBrZXkgPT09IFNQQUNFKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzZWxmLmltZSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChrZXkgPT09IFVQIHx8IGtleSA9PT0gRE9XTiB8fCBrZXkgPT09IFBHVVAgfHwga2V5ID09PSBQR0RPV04pIHtcblx0XHRcdFx0XHQvLyBJbiBjYXNlIGEgYnJvd3NlciBkb2Vzbid0IGdlbmVyYXRlIGtleXByZXNzIGV2ZW50cyBmb3IgYXJyb3cga2V5cy4uLlxuXHRcdFx0XHRcdGlmIChzZWxmLmtleUNvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5wcm9jZXNzS2V5KGV2ZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gRVNDICYmIHNlbGYubGFzdEtleSAhPT0gSU1FICYmICFzZWxmLnJlc2V0S2V5U2VsZWN0aW9uKCkpIHtcblx0XHRcdFx0XHRcdC8vIE5vIHVuZG8gb2Yga2V5IHNlbGVjdGlvbjogdHJlYXQgRVNDIGFzIFwiY2FuY2VsXCIuXG5cdFx0XHRcdFx0XHRzZWxmLmNhbmNlbCgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBBbHNvIGRvIHRoaXMgZm9yIEVTQyBhcyBhIHdvcmthcm91bmQgZm9yIEZpcmVmb3ggYnVnIDUyNDM2MFxuXHRcdFx0XHRcdC8vIHtAbGluayBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01MjQzNjB9XG5cdFx0XHRcdFx0aWYgKHNlbGYuaXNDb21wb3NpdGlvblN0YXJ0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNlbGYuaW52b2tlU3VnZ2VzdGlvbnMoa2V5ID09PSBCUyB8fCBrZXkgPT09IERFTCB8fCBrZXkgPT09IEVTQyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9KTtcblx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuXHRcdFx0XHRjb25zdCBrZXk6IHN0cmluZyB8IG51bWJlciA9IGV2ZW50LmtleSB8fCAwO1xuXHRcdFx0XHRzZWxmLmxhc3RLZXkgPSBrZXk7XG5cdFx0XHRcdHNlbGYua2V5Q291bnQgPSAwO1xuXHRcdFx0XHQvLyBET00gTGV2ZWwgPCAzIElNRSBpbnB1dFxuXHRcdFx0XHRpZiAoIXNlbGYuaW1lICYmIGtleSA9PT0gSU1FICYmICFzZWxmLnVzZXNDb21wb3NpdGlvbikge1xuXHRcdFx0XHRcdC8vIHNlbGYudXNlc0NvbXBvc2l0aW9uIGNhdGNoZXMgYnJvd3NlcnMgdGhhdCBtYXkgZW1pdCBzcHVyaW91cyBrZXlkb3duIElNRSBhZnRlciBhIGNvbXBvc2l0aW9uIGhhcyBlbmRlZFxuXHRcdFx0XHRcdHNlbGYuaW1lID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRzZWxmLmltZSAmJlxuXHRcdFx0XHRcdGtleSAhPT0gSU1FICYmXG5cdFx0XHRcdFx0IShcblx0XHRcdFx0XHRcdChOdW1iZXIoa2V5KSA+PSAxNiAmJiBOdW1iZXIoa2V5KSA8PSAyMCkgfHxcblx0XHRcdFx0XHRcdChOdW1iZXIoa2V5KSA+PSA5MSAmJiBOdW1iZXIoa2V5KSA8PSA5MykgfHxcblx0XHRcdFx0XHRcdGtleSA9PT0gMTQ0XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBJZ25vcmUgY29udHJvbCBrZXlzOiBjdHJsLCBzaGlmdCwgYWx0LCBhbHQgZ3IsIGNhcHMgbG9jaywgd2luZG93cy9hcHBsZSBjbWQga2V5cywgbnVtIGxvY2suIE9ubHkgdGhlIHdpbmRvd3Mga2V5c1xuXHRcdFx0XHRcdC8vIHRlcm1pbmF0ZSBJTUUgKGFwcGxlIGNtZCBkb2Vzbid0KSwgYnV0IHRoZXkgYWxzbyBjYXVzZSBhIGJsdXIsIHNvIGl0J3MgT0sgdG8gaWdub3JlIHRoZW0gaGVyZS5cblx0XHRcdFx0XHQvLyBOb3RlOiBTYWZhcmkgNCAoNTMwLjE3KSBwcm9wYWdhdGVzIEVTQyBvdXQgb2YgYW4gSU1FIGNvbXBvc2l0aW9uIChvYnNlcnZlZCBhdCBsZWFzdCBvbiBXaW4gWFApLlxuXHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHNlbGYuaW1lKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gSGFuZGxlIHJldHVybiBleHBsaWNpdGx5LCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gdG8gYmUgYWJsZSB0byBjaGVjayBmb3IgY3RybFxuXHRcdFx0XHRpZiAoa2V5ID09PSBSRVQpIHtcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi5hY2NlcHQoZXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEluaGliaXQgZGVmYXVsdCBiZWhhdmlvciBvZiBFU0MgKHJldmVydCB0byBsYXN0IHJlYWwgaW5wdXQgaW4gRkY6IHdlIGRvIHRoYXQgb3Vyc2VsdmVzKVxuXHRcdFx0XHRyZXR1cm4ga2V5ID09PSBFU0MgPyBldnRLaWxsKGV2ZW50KSA6IHRydWU7XG5cdFx0XHR9KTtcblx0XHRcdC8vIEFuZCBoYW5kbGUgY29udGludWVkIHByZXNzaW5nIG9mIGFycm93IGtleXNcblx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0c2VsZi5rZXlDb3VudCsrO1xuXHRcdFx0XHRyZXR1cm4gc2VsZi5wcm9jZXNzS2V5KGV2ZW50KTtcblx0XHRcdH0pO1xuXHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcblx0XHRcdFx0bWFrZUFjdGl2ZShzZWxmKTtcblx0XHRcdH0pO1xuXHRcdFx0Ly8gRG9uJ3QgdGVzdCBmb3IgdGV4dC5zZWxlY3Rpb25TdGFydCBiZWluZyBkZWZpbmVkO1xuXHRcdFx0JCh0ZXh0KS5vbignYmx1cicsIHRoaXMuc2F2ZVZpZXcuYmluZCh0aGlzKSk7XG5cdFx0XHQvLyBET00gTGV2ZWwgMyBJTUUgaGFuZGxpbmdcblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIFNldHRpbmcgbGFzdEtleSA9IElNRSBwcm92aWRlcyBhIGZha2Uga2V5RG93biBmb3IgR2Vja28ncyBzaW5nbGUga2V5VXAgYWZ0ZXIgYSBjbXBvc2l0aW9uLiBJZiB3ZSBkaWRuJ3QgZG8gdGhpcyxcblx0XHRcdFx0Ly8gY2FuY2VsbGluZyBhIGNvbXBvc2l0aW9uIHZpYSBFU0Mgd291bGQgYWxzbyBjYW5jZWwgYW5kIGNsb3NlIHRoZSB3aG9sZSBjYXRlZ29yeSBpbnB1dCBlZGl0b3IuXG5cdFx0XHRcdCQodGV4dCkub24oJ2NvbXBvc2l0aW9uc3RhcnQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0gSU1FO1xuXHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRzZWxmLmltZSA9IHRydWU7XG5cdFx0XHRcdFx0c2VsZi5pc0NvbXBvc2l0aW9uU3RhcnQgPSB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0JCh0ZXh0KS5vbignY29tcG9zaXRpb25lbmQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0gSU1FO1xuXHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdHNlbGYuaXNDb21wb3NpdGlvblN0YXJ0ID0gZmFsc2U7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKHRleHQpLm9uKCd0ZXh0SW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAoc2VsZi5pc0NvbXBvc2l0aW9uU3RhcnQpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c2VsZi5pbnZva2VTdWdnZXN0aW9ucyhmYWxzZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdC8vIEp1c3QgaW4gY2FzZSBzb21lIGJyb3dzZXJzIG1pZ2h0IHByb2R1Y2UgZXhjZXB0aW9ucyB3aXRoIHRoZXNlIERPTSBMZXZlbCAzIGV2ZW50c1xuXHRcdFx0fVxuXHRcdFx0JCh0ZXh0KS5vbignYmx1cicsICgpID0+IHtcblx0XHRcdFx0c2VsZi51c2VzQ29tcG9zaXRpb24gPSBmYWxzZTtcblx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHRcdHRoaXMuaWNvbiA9IG1ha2UoJ2ltZycpO1xuXHRcdGxldCBsaXN0OiBIVE1MU2VsZWN0RWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdGlmICghbm9TdWdnZXN0aW9ucykge1xuXHRcdFx0bGlzdCA9IG1ha2UoJ3NlbGVjdCcpO1xuXHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0aWYgKHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKSkge1xuXHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZShmYWxzZSwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGlmIChzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCkpIHtcblx0XHRcdFx0XHRzZWxmLmFjY2VwdChlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0c2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApO1xuXHRcdFx0XHRzZWxmLnRleHQhLmZvY3VzKCk7XG5cdFx0XHR9KTtcblx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0Y29uc3Qga2V5OiBzdHJpbmcgfCBudW1iZXIgPSBldmVudC5rZXkgfHwgMDtcblx0XHRcdFx0aWYgKGtleSA9PT0gRVNDKSB7XG5cdFx0XHRcdFx0c2VsZi5yZXNldEtleVNlbGVjdGlvbigpO1xuXHRcdFx0XHRcdHNlbGYudGV4dCEuZm9jdXMoKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZSh0cnVlKTtcblx0XHRcdFx0XHR9LCBIQy5zdWdnZXN0X2RlbGF5KTtcblx0XHRcdFx0fSBlbHNlIGlmIChrZXkgPT09IFJFVCkge1xuXHRcdFx0XHRcdHNlbGYuYWNjZXB0KGV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRpZiAoIUhDLmZpeGVkX3NlYXJjaCkge1xuXHRcdFx0XHRjb25zdCBlbmdpbmVTZWxlY3RvciA9IG1ha2UoJ3NlbGVjdCcpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGtleSBpbiBzdWdnZXN0aW9uQ29uZmlncykge1xuXHRcdFx0XHRcdGlmIChzdWdnZXN0aW9uQ29uZmlnc1trZXldIS5zaG93KSB7XG5cdFx0XHRcdFx0XHRjb25zdCBvcHQgPSBtYWtlKCdvcHRpb24nKTtcblx0XHRcdFx0XHRcdG9wdC52YWx1ZSA9IGtleTtcblx0XHRcdFx0XHRcdGlmIChrZXkgPT09IHRoaXMuZW5naW5lKSB7XG5cdFx0XHRcdFx0XHRcdG9wdC5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRvcHQuYXBwZW5kKG1ha2Uoc3VnZ2VzdGlvbkNvbmZpZ3Nba2V5XSEubmFtZSwgdHJ1ZSkpO1xuXHRcdFx0XHRcdFx0ZW5naW5lU2VsZWN0b3IuYXBwZW5kKG9wdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVuZ2luZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmVuZ2luZSA9IHNlbGYuZW5naW5lU2VsZWN0b3IhLm9wdGlvbnNbc2VsZi5lbmdpbmVTZWxlY3RvciEuc2VsZWN0ZWRJbmRleF0hLnZhbHVlO1xuXHRcdFx0XHRcdHNlbGYudGV4dCEuZm9jdXMoKTtcblx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UodHJ1ZSwgdHJ1ZSk7IC8vIERvbid0IGF1dG9jb21wbGV0ZSwgZm9yY2UgcmUtZGlzcGxheSBvZiBsaXN0XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yID0gZW5naW5lU2VsZWN0b3I7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMubGlzdCA9IGxpc3Q7XG5cdFx0Ly8gRG8gbm90IHVzZSB0eXBlICdzdWJtaXQnOyB3ZSBjYW5ub3QgZGV0ZWN0IG1vZGlmaWVyIGtleXMgaWYgd2UgZG9cblx0XHRjb25zdCBPSyA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0T0sudHlwZSA9ICdidXR0b24nO1xuXHRcdE9LLnZhbHVlID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtb2snKTtcblx0XHRPSy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWNjZXB0LmJpbmQodGhpcykpO1xuXHRcdHRoaXMub2sgPSBPSztcblx0XHRjb25zdCBjYW5jZWwgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdGNhbmNlbC50eXBlID0gJ2J1dHRvbic7XG5cdFx0Y2FuY2VsLnZhbHVlID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2FuY2VsJyk7XG5cdFx0Y2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5jYW5jZWxCdXR0b24gPSBjYW5jZWw7XG5cdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRzcGFuLmNsYXNzTmFtZSA9ICdob3RjYXRpbnB1dCc7XG5cdFx0c3Bhbi5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cdFx0c3Bhbi5hcHBlbmQodGV4dCk7XG5cdFx0c3Bhbi5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG5cdFx0aWYgKGxpc3QpIHtcblx0XHRcdHNwYW4uYXBwZW5kKGxpc3QpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5lbmdpbmVTZWxlY3Rvcik7XG5cdFx0fVxuXHRcdGlmICghbm9TdWdnZXN0aW9ucykge1xuXHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5pY29uKTtcblx0XHR9XG5cdFx0c3Bhbi5hcHBlbmQoT0spO1xuXHRcdHNwYW4uYXBwZW5kKGNhbmNlbCk7XG5cdFx0Zm9ybS5hcHBlbmQoc3Bhbik7XG5cdFx0Zm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdHRoaXMuc3Bhbi5hcHBlbmQoZm9ybSk7XG5cdH1cblx0ZGlzcGxheShldmVudD86IEhvdENhdFVJRXZlbnQpOiBmYWxzZSB7XG5cdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSAmJiAhb25VcGxvYWQgJiYgdGhpcy5saW5lKSB7XG5cdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IodGhpcy5saW5lLCBudWxsLCB0aGlzLnNwYW4sIHRydWUpOyAvLyBDcmVhdGUgYSBuZXcgb25lXG5cdFx0fVxuXHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCF0aGlzLmZvcm0pIHtcblx0XHRcdHRoaXMubWFrZUZvcm0oKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0fVxuXHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLmxhc3RTYXZlZEV4aXN0cztcblx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLmxhc3RTYXZlZEhpZGRlbjtcblx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLmxhc3RTYXZlZEtleTtcblx0XHR0aGlzLmljb24hLnNyYyA9IHRoaXMuY3VycmVudEV4aXN0cyA/IEhDLmV4aXN0c1llcyA6IEhDLmV4aXN0c05vO1xuXHRcdHRoaXMudGV4dCEudmFsdWUgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeSArICh0aGlzLmN1cnJlbnRLZXkgPT09IG51bGwgPyAnJyA6IGB8JHt0aGlzLmN1cnJlbnRLZXl9YCk7XG5cdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHR0aGlzLmxhc3RJbnB1dCA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0aGlzLmN1cnJlbnRFeGlzdHM7XG5cdFx0dGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCA/IE9QRU4gOiBDSEFOR0VfUEVORElORztcblx0XHR0aGlzLmxhc3RTZWxlY3Rpb24gPSB7XG5cdFx0XHRzdGFydDogdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoLFxuXHRcdFx0ZW5kOiB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGgsXG5cdFx0fTtcblx0XHR0aGlzLnNob3dzTGlzdCA9IGZhbHNlO1xuXHRcdC8vIERpc3BsYXkgdGhlIGZvcm1cblx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR9XG5cdFx0dGhpcy5saW5rU3Bhbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdHRoaXMuZm9ybSEuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHRcdHRoaXMub2shLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0Ly8gS2lsbCB0aGUgZXZlbnQgYmVmb3JlIGZvY3VzaW5nLCBvdGhlcndpc2UgSUUgd2lsbCBraWxsIHRoZSBvbmZvY3VzIGV2ZW50IVxuXHRcdGNvbnN0IHJlc3VsdCA9IGV2dEtpbGwoZXZlbnQpO1xuXHRcdHRoaXMudGV4dCEuZm9jdXMoKTtcblx0XHR0aGlzLnRleHQhLnJlYWRPbmx5ID0gZmFsc2U7XG5cdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRzaG93KGV2ZW50OiBIb3RDYXRVSUV2ZW50IHwgdW5kZWZpbmVkLCBlbmdpbmU/OiBzdHJpbmcsIHJlYWRPbmx5PzogYm9vbGVhbik6IGZhbHNlIHtcblx0XHRjb25zdCByZXN1bHQgPSB0aGlzLmRpc3BsYXkoZXZlbnQpO1xuXHRcdGNvbnN0IHYgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0dGhpcy50ZXh0IS5yZWFkT25seSA9ICEhcmVhZE9ubHk7XG5cdFx0dGhpcy5lbmdpbmUgPSBlbmdpbmUgPz8gJyc7XG5cdFx0dGhpcy50ZXh0Y2hhbmdlKGZhbHNlLCB0cnVlKTsgLy8gZG8gYXV0b2NvbXBsZXRpb24sIGZvcmNlIGRpc3BsYXkgb2Ygc3VnZ2VzdGlvbnNcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdG9wZW4oZXZlbnQ/OiBIb3RDYXRVSUV2ZW50KTogZmFsc2Uge1xuXHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsIHRoaXMuZW5naW5lICYmIHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXSEudGVtcCA/IEhDLnN1Z2dlc3Rpb25zIDogdGhpcy5lbmdpbmUpO1xuXHR9XG5cdGRvd24oZXZlbnQ/OiBIb3RDYXRVSUV2ZW50KTogZmFsc2Uge1xuXHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsICdzdWJjYXQnLCB0cnVlKTtcblx0fVxuXHR1cChldmVudD86IEhvdENhdFVJRXZlbnQpOiBmYWxzZSB7XG5cdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgJ3BhcmVudGNhdCcpO1xuXHR9XG5cdGNhbmNlbCgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5ICYmICFvblVwbG9hZCkge1xuXHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTsgLy8gV2UgYWRkZWQgYSBuZXcgYWRkZXIgd2hlbiBvcGVuaW5nXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIENsb3NlLCByZS1kaXNwbGF5IGxpbmtcblx0XHR0aGlzLmluYWN0aXZhdGUoKTtcblx0XHR0aGlzLmZvcm0hLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHR9XG5cdFx0dGhpcy5saW5rU3Bhbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0dGhpcy5zdGF0ZSA9IHRoaXMub3JpZ2luYWxTdGF0ZTtcblx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnk7XG5cdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5sYXN0U2F2ZWRLZXk7XG5cdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHM7XG5cdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5sYXN0U2F2ZWRIaWRkZW47XG5cdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5ICYmIHRoaXMuY3VycmVudEtleS5sZW5ndGggPiAwID8gdGhpcy5jdXJyZW50S2V5IDogJyc7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnN0YXRlID09PSBVTkNIQU5HRUQpIHtcblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICghb25VcGxvYWQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluayEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0fVxuXHRyZW1vdmVFZGl0b3IoKTogdm9pZCB7XG5cdFx0aWYgKCFuZXdET00pIHtcblx0XHRcdGNvbnN0IG5leHQgPSB0aGlzLnNwYW4ubmV4dFNpYmxpbmc7XG5cdFx0XHRpZiAobmV4dCkge1xuXHRcdFx0XHRuZXh0LnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGhpcy5zcGFuICYmIHRoaXMuc3Bhbi5wYXJlbnROb2RlKSB7XG5cdFx0XHR0aGlzLnNwYW4ucmVtb3ZlKCk7XG5cdFx0fVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWRpdG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGVkaXRvcnNbaV0gPT09IHRoaXMpIHtcblx0XHRcdFx0ZWRpdG9ycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0fVxuXHRyb2xsYmFjayhldmVudD86IEhvdENhdFVJRXZlbnQpOiBmYWxzZSB7XG5cdFx0dGhpcy51bmRvTGluayEucmVtb3ZlKCk7XG5cdFx0dGhpcy51bmRvTGluayA9IG51bGw7XG5cdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHR0aGlzLnN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdGlmICghdGhpcy5jdXJyZW50Q2F0ZWdvcnkgfHwgdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHQvLyBJdCB3YXMgYSBuZXdseSBhZGRlZCBjYXRlZ29yeS4gUmVtb3ZlIHRoZSB3aG9sZSBlZGl0b3IuXG5cdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBSZWRpc3BsYXkgdGhlIGxpbmsuLi5cblx0XHRcdHRoaXMuY2F0TGluayEuZmlyc3RDaGlsZCEucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLmNhdExpbmshLmFwcGVuZChtYWtlKHRoaXMuY3VycmVudENhdGVnb3J5LCB0cnVlKSk7XG5cdFx0XHR0aGlzLmNhdExpbmshLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3RoaXMuY3VycmVudENhdGVnb3J5fWApO1xuXHRcdFx0dGhpcy5jYXRMaW5rIS50aXRsZSA9IHRoaXMuY3VycmVudEtleSB8fCAnJztcblx0XHRcdHRoaXMuY2F0TGluayEuY2xhc3NOYW1lID0gdGhpcy5jdXJyZW50RXhpc3RzID8gJycgOiAnbmV3Jztcblx0XHRcdHRoaXMuY2F0TGluayEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdGlmICh0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdHRoaXMudXBEb3duTGlua3Muc3R5bGUuZGlzcGxheSA9IHRoaXMuY3VycmVudEV4aXN0cyA/ICcnIDogJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0fVxuXHRpbmFjdGl2YXRlKCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdH1cblx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdH1cblx0XHR0aGlzLmlzX2FjdGl2ZSA9IGZhbHNlO1xuXHR9XG5cdGFjY2VwdENoZWNrKGRvbnRDaGVjaz86IGJvb2xlYW4pOiBib29sZWFuIHtcblx0XHR0aGlzLnNhbml0aXplSW5wdXQoKTtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMudGV4dCEudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRsZXQga2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0XHRpZiAodmFsdWUubGVuZ3RoID4gMSkge1xuXHRcdFx0a2V5ID0gdmFsdWVbMV0hO1xuXHRcdH1cblx0XHRsZXQgdiA9IHZhbHVlWzBdIS5yZXBsYWNlKC9fL2csICcgJykudHJpbSgpO1xuXHRcdGlmIChIQy5jYXBpdGFsaXplUGFnZU5hbWVzKSB7XG5cdFx0XHR2ID0gY2FwaXRhbGl6ZSh2KTtcblx0XHR9XG5cdFx0dGhpcy5sYXN0SW5wdXQgPSB2O1xuXHRcdHYgPSByZXBsYWNlU2hvcnRjdXRzKHYsIEhDLnNob3J0Y3V0cyk7XG5cdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoXG5cdFx0XHQhZG9udENoZWNrICYmXG5cdFx0XHQoKGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHYgPT09IGNvbmYud2dUaXRsZSkgfHwgKEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KSkpXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHY7XG5cdFx0dGhpcy5jdXJyZW50S2V5ID0ga2V5O1xuXHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMuaW5wdXRFeGlzdHM7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0YWNjZXB0KGV2ZW50PzogSG90Q2F0VUlFdmVudCk6IGZhbHNlIHtcblx0XHQvLyAoZXZ0S2V5cyhldmVudCkgJiAxKSAhPT0gMFxuXHRcdC8vIOW9k+S4lOS7heW9k2V2dEtleXMoZXZlbnQp5Li6MeaXtu+8jOaVtOS4quWIpOWIq+W8j+aJjeS4unRydWVcblx0XHR0aGlzLm5vQ29tbWl0ID0gZXZ0S2V5cyhldmVudCkgPT09IDE7XG5cdFx0Y29uc3QgcmVzdWx0ID0gZXZ0S2lsbChldmVudCk7XG5cdFx0aWYgKHRoaXMuYWNjZXB0Q2hlY2soKSkge1xuXHRcdFx0Y29uc3QgdG9SZXNvbHZlID0gW3RoaXNdO1xuXHRcdFx0cmVzb2x2ZU11bHRpKHRvUmVzb2x2ZSwgKHJlc29sdmVkKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGVkaXRvciA9IHJlc29sdmVkWzBdITtcblx0XHRcdFx0aWYgKGVkaXRvci5kYWIpIHtcblx0XHRcdFx0XHRzaG93RGFiKGVkaXRvcik7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZWRpdG9yLmFjY2VwdENoZWNrKHRydWUpKSB7XG5cdFx0XHRcdFx0ZWRpdG9yLmNvbW1pdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRjbG9zZSgpOiB2b2lkIHtcblx0XHRpZiAoIXRoaXMuY2F0TGluaykge1xuXHRcdFx0Ly8gQ3JlYXRlIGEgY2F0TGlua1xuXHRcdFx0dGhpcy5jYXRMaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKCdmb28nLCB0cnVlKSk7XG5cdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuc3Bhbi5pbnNlcnRCZWZvcmUodGhpcy5jYXRMaW5rLCB0aGlzLnNwYW4uZmlyc3RDaGlsZCEubmV4dFNpYmxpbmcpO1xuXHRcdH1cblx0XHR0aGlzLmNhdExpbmsuZmlyc3RDaGlsZCEucmVtb3ZlKCk7XG5cdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKHRoaXMuY3VycmVudENhdGVnb3J5LCB0cnVlKSk7XG5cdFx0dGhpcy5jYXRMaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3RoaXMuY3VycmVudENhdGVnb3J5fWApO1xuXHRcdHRoaXMuY2F0TGluay5jbGFzc05hbWUgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICduZXcnO1xuXHRcdHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnkgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeTtcblx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMuY3VycmVudEtleTtcblx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMuY3VycmVudEV4aXN0cztcblx0XHR0aGlzLmxhc3RTYXZlZEhpZGRlbiA9IHRoaXMuY3VycmVudEhpZGRlbjtcblx0XHQvLyBDbG9zZSBmb3JtIGFuZCByZWRpc3BsYXkgY2F0ZWdvcnlcblx0XHR0aGlzLmluYWN0aXZhdGUoKTtcblx0XHR0aGlzLmZvcm0hLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSkge1xuXHRcdFx0aWYgKG9uVXBsb2FkICYmIHRoaXMubGluZSkge1xuXHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IodGhpcy5saW5lLCBudWxsLCB0aGlzLnNwYW4sIHRydWUpOyAvLyBDcmVhdGUgYSBuZXcgb25lXG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRcdHRoaXMubGlua1NwYW4ucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLm1ha2VMaW5rU3BhbigpO1xuXHRcdFx0dGhpcy5zcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLnVuZG9MaW5rKSB7XG5cdFx0XHQvLyBBcHBlbmQgYW4gdW5kbyBsaW5rLlxuXHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdGNvbnN0IGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJvbGxiYWNrLmJpbmQodGhpcykpO1xuXHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy51bmRvLCB0cnVlKSk7XG5cdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtdW5kbycpO1xuXHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdHNwYW4uYXBwZW5kKGxpbmspO1xuXHRcdFx0dGhpcy5ub3JtYWxMaW5rcyEuYXBwZW5kKHNwYW4pO1xuXHRcdFx0dGhpcy51bmRvTGluayA9IHNwYW47XG5cdFx0XHRpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdHRoaXMudXBEb3duTGlua3Muc3R5bGUuZGlzcGxheSA9IHRoaXMubGFzdFNhdmVkRXhpc3RzID8gJycgOiAnbm9uZSc7XG5cdFx0fVxuXHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdHRoaXMuc3RhdGUgPSBDSEFOR0VEO1xuXHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHR9XG5cdGNvbW1pdCgpOiB2b2lkIHtcblx0XHQvLyBDaGVjayBhZ2FpbiB0byBjYXRjaCBwcm9ibGVtIGNhc2VzIGFmdGVyIHJlZGlyZWN0IHJlc29sdXRpb25cblx0XHRpZiAoXG5cdFx0XHQodGhpcy5jdXJyZW50Q2F0ZWdvcnkgPT09IHRoaXMub3JpZ2luYWxDYXRlZ29yeSAmJlxuXHRcdFx0XHQodGhpcy5jdXJyZW50S2V5ID09PSB0aGlzLm9yaWdpbmFsS2V5IHx8XG5cdFx0XHRcdFx0KHRoaXMuY3VycmVudEtleSA9PT0gbnVsbCAmJiB0aGlzLm9yaWdpbmFsS2V5IS5sZW5ndGggPT09IDApKSkgfHxcblx0XHRcdChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAxNCAmJiB0aGlzLmN1cnJlbnRDYXRlZ29yeSA9PT0gY29uZi53Z1RpdGxlKSB8fFxuXHRcdFx0KEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh0aGlzLmN1cnJlbnRDYXRlZ29yeSkpXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0aWYgKCFjb21taXRCdXR0b24gJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlLCBzZWxmKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0cmVtb3ZlKGV2ZW50PzogSG90Q2F0VUlFdmVudCk6IGZhbHNlIHtcblx0XHQvLyAoZXZ0S2V5cyhldmVudCkgJiAxKVxuXHRcdC8vIOW9k+S4lOS7heW9k2V2dEtleXMoZXZlbnQp5Li6MeaXtu+8jOaVtOS4quWIpOWIq+W8j+aJjeS4ujHvvIzlkKbliJnpg73mmK8wXG5cdFx0dGhpcy5kb1JlbW92ZShldnRLZXlzKGV2ZW50KSA9PT0gMSk7XG5cdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHR9XG5cdGRvUmVtb3ZlKG5vQ29tbWl0PzogYm9vbGVhbik6IHZvaWQge1xuXHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdC8vIEVtcHR5IGlucHV0IG9uIGFkZGluZyBhIG5ldyBjYXRlZ29yeVxuXHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFjb21taXRCdXR0b24gJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgIT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRcdHNldE11bHRpSW5wdXQoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoY29tbWl0QnV0dG9uKSB7XG5cdFx0XHR0aGlzLmNhdExpbmshLnRpdGxlID0gJyc7XG5cdFx0XHR0aGlzLmNhdExpbmshLnN0eWxlLmNzc1RleHQgKz0gJzsgdGV4dC1kZWNvcmF0aW9uIDogbGluZS10aHJvdWdoICFpbXBvcnRhbnQ7Jztcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluayEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdHRoaXMuc3RhdGUgPSBERUxFVEVEO1xuXHRcdFx0dGhpcy5ub3JtYWxMaW5rcyEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMudW5kZWxMaW5rIS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9IGVsc2UgaWYgKG9uVXBsb2FkKSB7XG5cdFx0XHQvLyBSZW1vdmUgdGhpcyBlZGl0b3IgY29tcGxldGVseVxuXHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdHRoaXMuc3RhdGUgPSBERUxFVEVEO1xuXHRcdFx0dGhpcy5ub0NvbW1pdCA9ICEhbm9Db21taXQgfHwgSEMuZGVsX25lZWRzX2RpZmY7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlLCBzZWxmKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdHNlbGYuc3RhdGUgPSBzZWxmLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXHRyZXN0b3JlKGV2ZW50PzogSG90Q2F0VUlFdmVudCk6IGZhbHNlIHtcblx0XHQvLyBDYW4gb2NjdXIgb25seSBpZiB3ZSBkbyBoYXZlIGEgY29tbWl0IGJ1dHRvbiBhbmQgYXJlIG5vdCBvbiB0aGUgdXBsb2FkIGZvcm1cblx0XHR0aGlzLmNhdExpbmshLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdHRoaXMuY2F0TGluayEuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcblx0XHR0aGlzLnN0YXRlID0gdGhpcy5vcmlnaW5hbFN0YXRlO1xuXHRcdGlmICh0aGlzLnN0YXRlID09PSBVTkNIQU5HRUQpIHtcblx0XHRcdHRoaXMuY2F0TGluayEuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rIS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMubm9ybWFsTGlua3MhLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHR0aGlzLnVuZGVsTGluayEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdH1cblx0Ly8gSW50ZXJuYWwgb3BlcmF0aW9uc1xuXHRzZWxlY3RFbmdpbmUoZW5naW5lTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKCF0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmdpbmVTZWxlY3Rvci5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbaV0hLnNlbGVjdGVkID0gdGhpcy5lbmdpbmVTZWxlY3Rvci5vcHRpb25zW2ldIS52YWx1ZSA9PT0gZW5naW5lTmFtZTtcblx0XHR9XG5cdH1cblx0c2FuaXRpemVJbnB1dCgpOiB2b2lkIHtcblx0XHRsZXQgdiA9IHRoaXMudGV4dCEudmFsdWUgfHwgJyc7XG5cdFx0diA9IHYucmVwbGFjZSgvXihcXHN8XykrLywgJycpOyAvLyBUcmltIGxlYWRpbmcgYmxhbmtzIGFuZCB1bmRlcnNjb3Jlc1xuXHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgXigke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdGlmIChyZS50ZXN0KHYpKSB7XG5cdFx0XHR2ID0gdi5zbGljZShNYXRoLm1heCgwLCB2LmluZGV4T2YoJzonKSArIDEpKS5yZXBsYWNlKC9eKFxcc3xfKSsvLCAnJyk7XG5cdFx0fVxuXHRcdHYgPSB2LnJlcGxhY2UoL1xcdTIwMEUkLywgJycpOyAvLyBUcmltIGVuZGluZyBsZWZ0LXRvLXJpZ2h0IG1hcmtcblx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcykge1xuXHRcdFx0diA9IGNhcGl0YWxpemUodik7XG5cdFx0fVxuXHRcdC8vIE9ubHkgdXBkYXRlIHRoZSBpbnB1dCBmaWVsZCBpZiB0aGVyZSBpcyBhIGRpZmZlcmVuY2UuIFZhcmlvdXMgYnJvd3NlcnMgb3RoZXJ3aXNlXG5cdFx0Ly8gcmVzZXQgdGhlIHNlbGVjdGlvbiBhbmQgY3Vyc29yIHBvc2l0aW9uIGFmdGVyIGVhY2ggdmFsdWUgcmUtYXNzaWdubWVudC5cblx0XHRpZiAodGhpcy50ZXh0IS52YWx1ZSAhPT0gbnVsbCAmJiB0aGlzLnRleHQhLnZhbHVlICE9PSB2KSB7XG5cdFx0XHR0aGlzLnRleHQhLnZhbHVlID0gdjtcblx0XHR9XG5cdH1cblx0bWFrZUNhbGwoXG5cdFx0dXJsOiBzdHJpbmcsXG5cdFx0Y2FsbGJhY2tPYmo6IEhvdENhdFN1Z2dlc3Rpb25DYWxsYmFjayxcblx0XHRlbmdpbmU6IEhvdENhdFN1Z2dlc3Rpb25FbmdpbmUsXG5cdFx0cXVlcnlLZXk6IHN0cmluZyxcblx0XHRjbGVhbktleTogc3RyaW5nXG5cdCk6IHZvaWQge1xuXHRcdGxldCBjYjogSG90Q2F0U3VnZ2VzdGlvbkNhbGxiYWNrIHwgbnVsbCA9IGNhbGxiYWNrT2JqO1xuXHRcdGNvbnN0IGUgPSBlbmdpbmU7XG5cdFx0Y29uc3QgdiA9IHF1ZXJ5S2V5O1xuXHRcdGNvbnN0IHogPSBjbGVhbktleTtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBkb25lID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0Y2IhLmNhbGxzTWFkZSsrO1xuXHRcdFx0aWYgKGNiIS5jYWxsc01hZGUgPT09IGNiIS5ub2ZDYWxscykge1xuXHRcdFx0XHRpZiAoY2IhLmV4aXN0cykge1xuXHRcdFx0XHRcdGNiIS5hbGxUaXRsZXMhLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNiIS5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0Y2IhLmFsbFRpdGxlcyEubm9ybWFsaXplZCA9IGNiIS5ub3JtYWxpemVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHN1Z2dlc3Rpb25Db25maWcgPSBzdWdnZXN0aW9uQ29uZmlnc1tjYiEuZW5naW5lTmFtZV0hO1xuXHRcdFx0XHRpZiAoIWNiIS5kb250Q2FjaGUgJiYgIXN1Z2dlc3Rpb25Db25maWcuY2FjaGVbel0pIHtcblx0XHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnLmNhY2hlW3pdID0gY2IhLmFsbFRpdGxlcyE7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi50ZXh0IS5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoIWNiIS5jYW5jZWxsZWQpIHtcblx0XHRcdFx0XHRzZWxmLnNob3dTdWdnZXN0aW9ucyhjYiEuYWxsVGl0bGVzLCBjYiEubm9Db21wbGV0aW9uLCB2LCBjYiEuZW5naW5lTmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNiID09PSBzZWxmLmNhbGxiYWNrT2JqKSB7XG5cdFx0XHRcdFx0c2VsZi5jYWxsYmFja09iaiA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2IgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0JC5nZXRKU09OKHVybCwgKGpzb24pID0+IHtcblx0XHRcdGNvbnN0IHRpdGxlcyA9IGUuaGFuZGxlcihqc29uLCB6KTtcblx0XHRcdGlmICh0aXRsZXMgJiYgdGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y2IhLmFsbFRpdGxlcyA9IGNiIS5hbGxUaXRsZXMgPT09IG51bGwgPyB0aXRsZXMgOiBbLi4uY2IhLmFsbFRpdGxlcywgLi4uZ2VuZXJhdGVBcnJheSh0aXRsZXMpXTtcblx0XHRcdFx0aWYgKHRpdGxlcy5leGlzdHMpIHtcblx0XHRcdFx0XHRjYiEuZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGl0bGVzLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRjYiEubm9ybWFsaXplZCA9IHRpdGxlcy5ub3JtYWxpemVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRkb25lKCk7XG5cdFx0fSkuZmFpbCgocmVxKSA9PiB7XG5cdFx0XHRpZiAoIXJlcSkge1xuXHRcdFx0XHRub1N1Z2dlc3Rpb25zID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGNiIS5kb250Q2FjaGUgPSB0cnVlO1xuXHRcdFx0ZG9uZSgpO1xuXHRcdH0pO1xuXHR9XG5cdHRleHRjaGFuZ2UoZG9udF9hdXRvY29tcGxldGU/OiBib29sZWFuLCBmb3JjZT86IGJvb2xlYW4pOiB2b2lkIHtcblx0XHQvLyBIaWRlIGFsbCBvdGhlciBsaXN0c1xuXHRcdG1ha2VBY3RpdmUodGhpcyk7XG5cdFx0Ly8gQWJvcnQgaWYgaXNDb21wb3NpdGlvblN0YXJ0XG5cdFx0aWYgKHRoaXMuaXNDb21wb3NpdGlvblN0YXJ0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIEdldCBpbnB1dCB2YWx1ZSwgb21pdCBzb3J0IGtleSwgaWYgYW55XG5cdFx0dGhpcy5zYW5pdGl6ZUlucHV0KCk7XG5cdFx0bGV0IHYgPSB0aGlzLnRleHQhLnZhbHVlO1xuXHRcdC8vIERpc3JlZ2FyZCBhbnl0aGluZyBhZnRlciBhIHBpcGUuXG5cdFx0Y29uc3QgcGlwZSA9IHYuaW5kZXhPZignfCcpO1xuXHRcdGlmIChwaXBlID09PSAtMSkge1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdi5zbGljZShNYXRoLm1heCgwLCBwaXBlICsgMSkpO1xuXHRcdFx0diA9IHYuc2xpY2UoMCwgTWF0aC5tYXgoMCwgcGlwZSkpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5sYXN0SW5wdXQgPT09IHYgJiYgIWZvcmNlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSAvLyBObyBjaGFuZ2Vcblx0XHRpZiAodGhpcy5sYXN0SW5wdXQgIT09IHYpIHtcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHR0aGlzLmxhc3RJbnB1dCA9IHY7XG5cdFx0dGhpcy5sYXN0UmVhbElucHV0ID0gdjtcblx0XHQvLyBNYXJrIGJsYWNrbGlzdGVkIGlucHV0cy5cblx0XHR0aGlzLm9rIS5kaXNhYmxlZCA9IHYubGVuZ3RoID4gMCAmJiAhIUhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KTtcblx0XHRpZiAobm9TdWdnZXN0aW9ucykge1xuXHRcdFx0Ly8gTm8gQWpheDoganVzdCBtYWtlIHN1cmUgdGhlIGxpc3QgaXMgaGlkZGVuXG5cdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHR0aGlzLmljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhbXSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBjbGVhbktleSA9IHYucmVwbGFjZSgvW1xcdTIwMEVcXHUyMDBGXFx1MjAyQS1cXHUyMDJFXS9nLCAnJykucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsICcgJyk7XG5cdFx0Y2xlYW5LZXkgPSByZXBsYWNlU2hvcnRjdXRzKGNsZWFuS2V5LCBIQy5zaG9ydGN1dHMpO1xuXHRcdGNsZWFuS2V5ID0gY2xlYW5LZXkudHJpbSgpO1xuXHRcdGlmIChjbGVhbktleS5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuc2hvd1N1Z2dlc3Rpb25zKFtdKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKHRoaXMuY2FsbGJhY2tPYmopIHtcblx0XHRcdHRoaXMuY2FsbGJhY2tPYmouY2FuY2VsbGVkID0gdHJ1ZTtcblx0XHR9XG5cdFx0Y29uc3QgZW5naW5lTmFtZSA9IHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXSA/IHRoaXMuZW5naW5lIDogJ2NvbWJpbmVkJztcblx0XHRkb250X2F1dG9jb21wbGV0ZSB8fD0gc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0hLm5vQ29tcGxldGlvbjtcblx0XHRjb25zdCBjYWNoZWRUaXRsZXMgPSBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSEuY2FjaGVbY2xlYW5LZXldO1xuXHRcdGlmIChjYWNoZWRUaXRsZXMpIHtcblx0XHRcdHRoaXMuc2hvd1N1Z2dlc3Rpb25zKGNhY2hlZFRpdGxlcywgZG9udF9hdXRvY29tcGxldGUsIHYsIGVuZ2luZU5hbWUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB7ZW5naW5lc30gPSBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSE7XG5cdFx0dGhpcy5jYWxsYmFja09iaiA9IHtcblx0XHRcdGFsbFRpdGxlczogbnVsbCxcblx0XHRcdGNhbGxzTWFkZTogMCxcblx0XHRcdG5vZkNhbGxzOiBlbmdpbmVzLmxlbmd0aCxcblx0XHRcdG5vQ29tcGxldGlvbjogZG9udF9hdXRvY29tcGxldGUsXG5cdFx0XHRlbmdpbmVOYW1lLFxuXHRcdH07XG5cdFx0dGhpcy5tYWtlQ2FsbHMoZW5naW5lcywgdGhpcy5jYWxsYmFja09iaiwgdiwgY2xlYW5LZXkpO1xuXHR9XG5cdG1ha2VDYWxscyhlbmdpbmVzOiBzdHJpbmdbXSwgY2I6IEhvdENhdFN1Z2dlc3Rpb25DYWxsYmFjaywgdjogc3RyaW5nLCBjbGVhbktleTogc3RyaW5nKTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBlbmdpbmVfIG9mIGVuZ2luZXMpIHtcblx0XHRcdGNvbnN0IGVuZ2luZSA9IHN1Z2dlc3Rpb25FbmdpbmVzW2VuZ2luZV9dITtcblx0XHRcdGNvbnN0IHVybCA9IGNvbmYud2dTY3JpcHRQYXRoICsgZW5naW5lLnVyaS5yZXBsYWNlKC9cXCQxL2csIGVuY29kZVVSSUNvbXBvbmVudChjbGVhbktleSkpO1xuXHRcdFx0dGhpcy5tYWtlQ2FsbCh1cmwsIGNiLCBlbmdpbmUsIHYsIGNsZWFuS2V5KTtcblx0XHR9XG5cdH1cblx0c2hvd1N1Z2dlc3Rpb25zKFxuXHRcdHRpdGxlczogSG90Q2F0U3VnZ2VzdGlvblRpdGxlcyB8IG51bGwsXG5cdFx0ZG9udEF1dG9jb21wbGV0ZT86IGJvb2xlYW4sXG5cdFx0cXVlcnlLZXk/OiBzdHJpbmcgfCBudWxsLFxuXHRcdGVuZ2luZU5hbWU/OiBzdHJpbmcgfCBudWxsXG5cdCk6IHZvaWQge1xuXHRcdHRoaXMudGV4dCEucmVhZE9ubHkgPSBmYWxzZTtcblx0XHR0aGlzLmRhYiA9IG51bGw7XG5cdFx0dGhpcy5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRpZiAoIXRoaXMubGlzdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAobm9TdWdnZXN0aW9ucykge1xuXHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0dGhpcy5pY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gdHJ1ZTsgLy8gRGVmYXVsdC4uLlxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmVuZ2luZU5hbWUgPSBlbmdpbmVOYW1lID8/IG51bGw7XG5cdFx0aWYgKGVuZ2luZU5hbWUpIHtcblx0XHRcdGlmICghdGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZU5hbWUgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdH1cblx0XHRjb25zdCBpbnB1dFZhbHVlID0gdGhpcy5sYXN0SW5wdXQ7XG5cdFx0aWYgKHF1ZXJ5S2V5KSB7XG5cdFx0XHRpZiAoaW5wdXRWYWx1ZS5pbmRleE9mKHF1ZXJ5S2V5KSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5sYXN0UXVlcnkgJiYgaW5wdXRWYWx1ZS5pbmRleE9mKHRoaXMubGFzdFF1ZXJ5KSA9PT0gMCAmJiB0aGlzLmxhc3RRdWVyeS5sZW5ndGggPiBxdWVyeUtleS5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLmxhc3RRdWVyeSA9IHF1ZXJ5S2V5O1xuXHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRjb25zdCB2ID0gdGhpcy50ZXh0IS52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdGNvbnN0IGtleSA9IHYubGVuZ3RoID4gMSA/IGB8JHt2WzFdfWAgOiAnJztcblx0XHRjb25zdCBjYXRlZ29yeU5hbWUgPSBIQy5jYXBpdGFsaXplUGFnZU5hbWVzID8gY2FwaXRhbGl6ZSh2WzBdKSA6IHZbMF0hO1xuXHRcdGxldCB2Tm9ybWFsaXplZCA9IGNhdGVnb3J5TmFtZTtcblx0XHRjb25zdCBrbm93blRvRXhpc3QgPSB0aXRsZXMgJiYgdGl0bGVzLmV4aXN0cztcblx0XHRsZXQgaTogbnVtYmVyO1xuXHRcdGlmICh0aXRsZXMpIHtcblx0XHRcdGlmICh0aXRsZXMubm9ybWFsaXplZCAmJiBjYXRlZ29yeU5hbWUuaW5kZXhPZihxdWVyeUtleSA/PyAnJykgPT09IDApIHtcblx0XHRcdFx0Ly8gV2UgZ290IGJhY2sgYSBkaWZmZXJlbnQgbm9ybWFsaXphdGlvbiB0aGFuIHdoYXQgaXMgaW4gdGhlIGlucHV0IGZpZWxkXG5cdFx0XHRcdHZOb3JtYWxpemVkID0gdGl0bGVzLm5vcm1hbGl6ZWQgKyBjYXRlZ29yeU5hbWUuc2xpY2UoKHF1ZXJ5S2V5ID8/ICcnKS5sZW5ndGgpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgdkxvdyA9IHZOb3JtYWxpemVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHQvLyBTdHJpcCBibGFja2xpc3RlZCBjYXRlZ29yaWVzXG5cdFx0XHRpZiAoSEMuYmxhY2tsaXN0KSB7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoSEMuYmxhY2tsaXN0LnRlc3QodGl0bGVzW2ldISkpIHtcblx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aXRsZXMuc29ydCgoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0aWYgKGEgPT09IGIpIHtcblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYS5pbmRleE9mKGIpID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gYSBiZWdpbnMgd2l0aCBiOiBhID4gYlxuXHRcdFx0XHRpZiAoYi5pbmRleE9mKGEpID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGIgYmVnaW5zIHdpdGggYTogYSA8IGJcblx0XHRcdFx0Ly8gT3BlbnNlYXJjaCBtYXkgcmV0dXJuIHN0dWZmIG5vdCBiZWdpbm5pbmcgd2l0aCB0aGUgc2VhcmNoIHByZWZpeCFcblx0XHRcdFx0bGV0IHByZWZpeE1hdGNoQSA9IGEuaW5kZXhPZih2Tm9ybWFsaXplZCkgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0bGV0IHByZWZpeE1hdGNoQiA9IGIuaW5kZXhPZih2Tm9ybWFsaXplZCkgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0aWYgKHByZWZpeE1hdGNoQSAhPT0gcHJlZml4TWF0Y2hCKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByZWZpeE1hdGNoQiAtIHByZWZpeE1hdGNoQTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBDYXNlLWluc2Vuc2l0aXZlIHByZWZpeCBtYXRjaCFcblx0XHRcdFx0Y29uc3QgYUxvdyA9IGEudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0Y29uc3QgYkxvdyA9IGIudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0cHJlZml4TWF0Y2hBID0gYUxvdy5pbmRleE9mKHZMb3cpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdHByZWZpeE1hdGNoQiA9IGJMb3cuaW5kZXhPZih2TG93KSA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0XHRpZiAocHJlZml4TWF0Y2hBICE9PSBwcmVmaXhNYXRjaEIpIHtcblx0XHRcdFx0XHRyZXR1cm4gcHJlZml4TWF0Y2hCIC0gcHJlZml4TWF0Y2hBO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChhIDwgYikge1xuXHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYiA8IGEpIHtcblx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdH0pO1xuXHRcdFx0Ly8gUmVtb3ZlIGR1cGxpY2F0ZXMgYW5kIHNlbGYtcmVmZXJlbmNlc1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0KGkgKyAxIDwgdGl0bGVzLmxlbmd0aCAmJiB0aXRsZXNbaV0gPT09IHRpdGxlc1tpICsgMV0pIHx8XG5cdFx0XHRcdFx0KGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHRpdGxlc1tpXSA9PT0gY29uZi53Z1RpdGxlKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHR0aXRsZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdGktLTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIXRpdGxlcyB8fCB0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVuZ2luZU5hbWUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0gJiYgIXN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdIS50ZW1wKSB7XG5cdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHR0aGlzLmljb24uc3JjID0gSEMuZXhpc3RzTm87XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBbZmlyc3RUaXRsZV0gPSB0aXRsZXM7XG5cdFx0Y29uc3QgY29tcGxldGVkID0gdGhpcy5hdXRvQ29tcGxldGUoZmlyc3RUaXRsZSEsIGNhdGVnb3J5TmFtZSwgdk5vcm1hbGl6ZWQsIGtleSwgZG9udEF1dG9jb21wbGV0ZSk7XG5cdFx0Y29uc3QgZXhpc3RpbmcgPSBjb21wbGV0ZWQgfHwga25vd25Ub0V4aXN0IHx8IGZpcnN0VGl0bGUgPT09IHJlcGxhY2VTaG9ydGN1dHMoY2F0ZWdvcnlOYW1lLCBIQy5zaG9ydGN1dHMpO1xuXHRcdGlmIChlbmdpbmVOYW1lICYmIHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdICYmICFzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSEudGVtcCkge1xuXHRcdFx0dGhpcy5pY29uIS5zcmMgPSBleGlzdGluZyA/IEhDLmV4aXN0c1llcyA6IEhDLmV4aXN0c05vO1xuXHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9ICEhZXhpc3Rpbmc7XG5cdFx0fVxuXHRcdGlmIChjb21wbGV0ZWQpIHtcblx0XHRcdHRoaXMubGFzdElucHV0ID0gZmlyc3RUaXRsZSE7XG5cdFx0XHRpZiAodGl0bGVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyAoUmUtKWZpbGwgdGhlIGxpc3Rcblx0XHR3aGlsZSAodGhpcy5saXN0LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHRoaXMubGlzdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdH1cblx0XHRmb3IgKGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBvcHQgPSBtYWtlKCdvcHRpb24nKTtcblx0XHRcdG9wdC5hcHBlbmQobWFrZSh0aXRsZXNbaV0hLCB0cnVlKSk7XG5cdFx0XHRvcHQuc2VsZWN0ZWQgPSBjb21wbGV0ZWQgJiYgaSA9PT0gMDtcblx0XHRcdHRoaXMubGlzdC5hcHBlbmQob3B0KTtcblx0XHR9XG5cdFx0dGhpcy5kaXNwbGF5TGlzdCgpO1xuXHR9XG5cdGRpc3BsYXlMaXN0KCk6IHZvaWQge1xuXHRcdHRoaXMuc2hvd3NMaXN0ID0gdHJ1ZTtcblx0XHRpZiAoIXRoaXMuaXNfYWN0aXZlKSB7XG5cdFx0XHR0aGlzLmxpc3QhLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBub2ZJdGVtcyA9IE1hdGgubWluKHRoaXMubGlzdCEub3B0aW9ucy5sZW5ndGgsIEhDLmxpc3RTaXplKTtcblx0XHRpZiAobm9mSXRlbXMgPD0gMSkge1xuXHRcdFx0bm9mSXRlbXMgPSAyO1xuXHRcdH1cblx0XHR0aGlzLmxpc3QhLnNpemUgPSBub2ZJdGVtcztcblx0XHRzZXRTdHlsZVByb3BlcnR5KHRoaXMubGlzdCEsICdhbGlnbicsIGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCcpO1xuXHRcdHRoaXMubGlzdCEuc3R5bGUuekluZGV4ID0gJzUnO1xuXHRcdHRoaXMubGlzdCEuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdC8vIENvbXB1dGUgaW5pdGlhbCBsaXN0IHBvc2l0aW9uLiBGaXJzdCB0aGUgaGVpZ2h0LlxuXHRcdGNvbnN0IGFuY2hvciA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0bGV0IGxpc3RoID0gMDtcblx0XHRpZiAodGhpcy5saXN0IS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdC8vIE9mZi1zY3JlZW4gZGlzcGxheSB0byBnZXQgdGhlIGhlaWdodFxuXHRcdFx0dGhpcy5saXN0IS5zdHlsZS50b3AgPSBgJHt0aGlzLnRleHQhLm9mZnNldFRvcH1weGA7XG5cdFx0XHR0aGlzLmxpc3QhLnN0eWxlW2FuY2hvcl0gPSAnLTEwMDAwcHgnO1xuXHRcdFx0dGhpcy5saXN0IS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRsaXN0aCA9IHRoaXMubGlzdCEub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0dGhpcy5saXN0IS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsaXN0aCA9IHRoaXMubGlzdCEub2Zmc2V0SGVpZ2h0O1xuXHRcdH1cblx0XHQvLyBBcHByb3hpbWF0ZSBjYWxjdWxhdGlvbiBvZiBtYXhpbXVtIGxpc3Qgc2l6ZVxuXHRcdGxldCBtYXhMaXN0SGVpZ2h0ID0gbGlzdGg7XG5cdFx0aWYgKG5vZkl0ZW1zIDwgSEMubGlzdFNpemUpIHtcblx0XHRcdG1heExpc3RIZWlnaHQgPSAobGlzdGggLyBub2ZJdGVtcykgKiBIQy5saXN0U2l6ZTtcblx0XHR9XG5cdFx0Y29uc3Qgdmlld3BvcnQgPSAod2hhdDogJ1dpZHRoJyB8ICdIZWlnaHQnKTogbnVtYmVyID0+IHtcblx0XHRcdGNvbnN0IHMgPSBgY2xpZW50JHt3aGF0fWAgYXMgJ2NsaWVudFdpZHRoJyB8ICdjbGllbnRIZWlnaHQnO1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtzXSA6IDA7XG5cdFx0fTtcblx0XHRjb25zdCBzY3JvbGxfb2Zmc2V0ID0gKHdoYXQ6ICdMZWZ0JyB8ICdUb3AnIHwgJ1dpZHRoJyk6IG51bWJlciA9PiB7XG5cdFx0XHRjb25zdCBzID0gYHNjcm9sbCR7d2hhdH1gIGFzICdzY3JvbGxMZWZ0JyB8ICdzY3JvbGxUb3AnIHwgJ3Njcm9sbFdpZHRoJztcblx0XHRcdGxldCByZXN1bHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbc10gOiAwO1xuXHRcdFx0aWYgKGlzX3J0bCAmJiB3aGF0ID09PSAnTGVmdCcpIHtcblx0XHRcdFx0Ly8gUlRMIGluY29uc2lzdGVuY2llcy5cblx0XHRcdFx0Ly8gRkY6IDAgYXQgdGhlIGZhciByaWdodCwgdGhlbiBpbmNyZWFzaW5nbHkgbmVnYXRpdmUgdmFsdWVzLlxuXHRcdFx0XHQvLyBJRSA+PSA4OiAwIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gaW5jcmVhc2luZ2x5IHBvc2l0aXZlIHZhbHVlcy5cblx0XHRcdFx0Ly8gV2Via2l0OiBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gZG93biB0byB6ZXJvLlxuXHRcdFx0XHQvLyBPcGVyYTogZG9uJ3Qga25vdy4uLlxuXHRcdFx0XHRpZiAocmVzdWx0IDwgMCkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IC1yZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFpc193ZWJraXQpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSBzY3JvbGxfb2Zmc2V0KCdXaWR0aCcpIC0gdmlld3BvcnQoJ1dpZHRoJykgLSByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gTm93IGFsbCBoYXZlIHdlYmtpdCBiZWhhdmlvciwgaS5lLiB6ZXJvIGlmIGF0IHRoZSBsZWZ0bW9zdCBlZGdlLlxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9O1xuXHRcdGNvbnN0IHBvc2l0aW9uID0gKG5vZGU6IEhUTUxFbGVtZW50KToge3g6IG51bWJlcjsgeTogbnVtYmVyfSA9PiB7XG5cdFx0XHQvLyBTdHJpcHBlZC1kb3duIHNpbXBsaWZpZWQgcG9zaXRpb24gZnVuY3Rpb24uIEl0J3MgZ29vZCBlbm91Z2ggZm9yIG91ciBwdXJwb3Nlcy5cblx0XHRcdGNvbnN0IGJveCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR4OiBNYXRoLnJvdW5kKGJveC5sZWZ0ICsgc2Nyb2xsX29mZnNldCgnTGVmdCcpKSxcblx0XHRcdFx0eTogTWF0aC5yb3VuZChib3gudG9wICsgc2Nyb2xsX29mZnNldCgnVG9wJykpLFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNvbnN0IHRleHRQb3MgPSBwb3NpdGlvbih0aGlzLnRleHQhKTtcblx0XHRjb25zdCBubCA9IDA7XG5cdFx0bGV0IG50ID0gMDtcblx0XHQvLyBPcGVyYSA5LjUgc29tZWhvdyBoYXMgb2Zmc2V0V2lkdGggPSAwIGhlcmU/PyBVc2UgdGhlIG5leHQgYmVzdCB2YWx1ZS4uLlxuXHRcdGxldCBvZmZzZXQgPSAwO1xuXHRcdGNvbnN0IHRleHRCb3hXaWR0aCA9IHRoaXMudGV4dCEub2Zmc2V0V2lkdGggfHwgdGhpcy50ZXh0IS5jbGllbnRXaWR0aDtcblx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS56SW5kZXggPSAnNSc7XG5cdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS53aWR0aCA9IGAke3RleHRCb3hXaWR0aH1weGA7XG5cdFx0XHQvLyBGaWd1cmUgb3V0IHRoZSBoZWlnaHQgb2YgdGhpcyBzZWxlY3RvcjogZGlzcGxheSBpdCBvZmYtc2NyZWVuLCB0aGVuIGhpZGUgaXQgYWdhaW4uXG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3RvciEuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlW2FuY2hvcl0gPSAnLTEwMDAwcHgnO1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS50b3AgPSAnMCc7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5lbmdpbmVTZWxlY3RvciEub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5lbmdpbmVTZWxlY3RvciEub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5lbmdpbmVTZWxlY3RvciEuc3R5bGVbYW5jaG9yXSA9IGAke25sfXB4YDtcblx0XHR9XG5cdFx0aWYgKHRleHRQb3MueSA8IG1heExpc3RIZWlnaHQgKyBvZmZzZXQgKyAxKSB7XG5cdFx0XHQvLyBUaGUgbGlzdCBtaWdodCBleHRlbmQgYmV5b25kIHRoZSB1cHBlciBib3JkZXIgb2YgdGhlIHBhZ2UuIExldCdzIGF2b2lkIHRoYXQgYnkgcGxhY2luZyBpdFxuXHRcdFx0Ly8gYmVsb3cgdGhlIGlucHV0IHRleHQgZmllbGQuXG5cdFx0XHRudCA9IHRoaXMudGV4dCEub2Zmc2V0SGVpZ2h0ICsgb2Zmc2V0ICsgMTtcblx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3RvciEuc3R5bGUudG9wID0gYCR7dGhpcy50ZXh0IS5vZmZzZXRIZWlnaHR9cHhgO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRudCA9IC1saXN0aCAtIG9mZnNldCAtIDE7XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IhLnN0eWxlLnRvcCA9IGAkey0ob2Zmc2V0ICsgMSl9cHhgO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLmxpc3QhLnN0eWxlLnRvcCA9IGAke250fXB4YDtcblx0XHR0aGlzLmxpc3QhLnN0eWxlLndpZHRoID0gJyc7IC8vIE5vIGZpeGVkIHdpZHRoICh5ZXQpXG5cdFx0dGhpcy5saXN0IS5zdHlsZVthbmNob3JdID0gYCR7bmx9cHhgO1xuXHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdHRoaXMuc2VsZWN0RW5naW5lKHRoaXMuZW5naW5lTmFtZSk7XG5cdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yIS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0fVxuXHRcdHRoaXMubGlzdCEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0Ly8gU2V0IHRoZSB3aWR0aCBvZiB0aGUgbGlzdFxuXHRcdGlmICh0aGlzLmxpc3QhLm9mZnNldFdpZHRoIDwgdGV4dEJveFdpZHRoKSB7XG5cdFx0XHR0aGlzLmxpc3QhLnN0eWxlLndpZHRoID0gYCR7dGV4dEJveFdpZHRofXB4YDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gSWYgdGhlIGxpc3QgaXMgd2lkZXIgdGhhbiB0aGUgdGV4dGJveDogbWFrZSBzdXJlIGl0IGZpdHMgaG9yaXpvbnRhbGx5IGludG8gdGhlIGJyb3dzZXIgd2luZG93XG5cdFx0Y29uc3Qgc2Nyb2xsID0gc2Nyb2xsX29mZnNldCgnTGVmdCcpO1xuXHRcdGNvbnN0IHZpZXdfdyA9IHZpZXdwb3J0KCdXaWR0aCcpO1xuXHRcdGxldCB3ID0gdGhpcy5saXN0IS5vZmZzZXRXaWR0aDtcblx0XHRjb25zdCBsX3BvcyA9IHBvc2l0aW9uKHRoaXMubGlzdCEpO1xuXHRcdGxldCBsZWZ0ID0gbF9wb3MueDtcblx0XHRsZXQgcmlnaHQgPSBsZWZ0ICsgdztcblx0XHRpZiAobGVmdCA8IHNjcm9sbCB8fCByaWdodCA+IHNjcm9sbCArIHZpZXdfdykge1xuXHRcdFx0aWYgKHcgPiB2aWV3X3cpIHtcblx0XHRcdFx0dyA9IHZpZXdfdztcblx0XHRcdFx0dGhpcy5saXN0IS5zdHlsZS53aWR0aCA9IGAke3d9cHhgO1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0bGVmdCA9IHJpZ2h0IC0gdztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyaWdodCA9IGxlZnQgKyB3O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRsZXQgcmVsYXRpdmVfb2Zmc2V0ID0gMDtcblx0XHRcdGlmIChsZWZ0IDwgc2Nyb2xsKSB7XG5cdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IHNjcm9sbCAtIGxlZnQ7XG5cdFx0XHR9IGVsc2UgaWYgKHJpZ2h0ID4gc2Nyb2xsICsgdmlld193KSB7XG5cdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IC0ocmlnaHQgLSBzY3JvbGwgLSB2aWV3X3cpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSAtcmVsYXRpdmVfb2Zmc2V0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHJlbGF0aXZlX29mZnNldCkge1xuXHRcdFx0XHR0aGlzLmxpc3QhLnN0eWxlW2FuY2hvcl0gPSBgJHtubCArIHJlbGF0aXZlX29mZnNldH1weGA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGF1dG9Db21wbGV0ZShcblx0XHRuZXdWYWw6IHN0cmluZyxcblx0XHRhY3RWYWw6IHN0cmluZyxcblx0XHRub3JtYWxpemVkQWN0VmFsOiBzdHJpbmcgfCBudWxsLFxuXHRcdGtleTogc3RyaW5nLFxuXHRcdGRvbnRNb2RpZnk/OiBib29sZWFuXG5cdCk6IGJvb2xlYW4ge1xuXHRcdGlmIChuZXdWYWwgPT09IGFjdFZhbCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGlmIChkb250TW9kaWZ5IHx8IHRoaXMuaW1lIHx8ICF0aGlzLmNhblNlbGVjdCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdC8vIElmIHdlIGNhbid0IHNlbGVjdCBwcm9wZXJseSBvciBhbiBJTUUgY29tcG9zaXRpb24gaXMgb25nb2luZywgYXV0b2NvbXBsZXRpb24gd291bGQgYmUgYSBtYWpvciBhbm5veWFuY2UgdG8gdGhlIHVzZXIuXG5cdFx0aWYgKG5ld1ZhbC5pbmRleE9mKGFjdFZhbCkpIHtcblx0XHRcdC8vIE1heWJlIGl0J2xsIHdvcmsgd2l0aCB0aGUgbm9ybWFsaXplZCB2YWx1ZSAoTkZDKT9cblx0XHRcdGlmIChub3JtYWxpemVkQWN0VmFsICYmIG5ld1ZhbC5pbmRleE9mKG5vcm1hbGl6ZWRBY3RWYWwpID09PSAwKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxhc3RSZWFsSW5wdXQgPT09IGFjdFZhbCkge1xuXHRcdFx0XHRcdHRoaXMubGFzdFJlYWxJbnB1dCA9IG5vcm1hbGl6ZWRBY3RWYWw7XG5cdFx0XHRcdH1cblx0XHRcdFx0YWN0VmFsID0gbm9ybWFsaXplZEFjdFZhbDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gQWN0dWFsIGlucHV0IGlzIGEgcHJlZml4IG9mIHRoZSBuZXcgdGV4dC4gRmlsbCBpbiBuZXcgdGV4dCwgc2VsZWN0aW5nIHRoZSBuZXdseSBhZGRlZCBzdWZmaXhcblx0XHQvLyBzdWNoIHRoYXQgaXQgY2FuIGJlIGVhc2lseSByZW1vdmVkIGJ5IHR5cGluZyBiYWNrc3BhY2UgaWYgdGhlIHN1Z2dlc3Rpb24gaXMgdW53YW50ZWQuXG5cdFx0dGhpcy50ZXh0IS5mb2N1cygpO1xuXHRcdHRoaXMudGV4dCEudmFsdWUgPSBuZXdWYWwgKyBrZXk7XG5cdFx0dGhpcy5zZXRTZWxlY3Rpb24oYWN0VmFsLmxlbmd0aCwgbmV3VmFsLmxlbmd0aCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0Y2FuU2VsZWN0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIXRoaXMudGV4dCEuc2V0U2VsZWN0aW9uUmFuZ2UgfHwgdGhpcy50ZXh0IS5zZWxlY3Rpb25TdGFydCAhPT0gbnVsbDtcblx0fVxuXHRzZXRTZWxlY3Rpb24oZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKTogdm9pZCB7XG5cdFx0Ly8gdGhpcy50ZXh0IG11c3QgYmUgZm9jdXNlZCAoYXQgbGVhc3Qgb24gSUUpXG5cdFx0aWYgKCF0aGlzLnRleHQhLnZhbHVlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMudGV4dCEuc2V0U2VsZWN0aW9uUmFuZ2UoZnJvbSwgdG8pO1xuXHR9XG5cdGdldFNlbGVjdGlvbigpOiB7c3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXJ9IHtcblx0XHRsZXQgZnJvbSA9IDA7XG5cdFx0Ly8gdGhpcy50ZXh0IG11c3QgYmUgZm9jdXNlZCAoYXQgbGVhc3Qgb24gSUUpXG5cdFx0bGV0IHRvID0gMDtcblx0XHRpZiAoIXRoaXMudGV4dCEudmFsdWUpIHtcblx0XHRcdC8vIE5vIHRleHQuXG5cdFx0fSBlbHNlIGlmICh0aGlzLnRleHQhLnNlbGVjdGlvblN0YXJ0ICE9PSBudWxsKSB7XG5cdFx0XHRmcm9tID0gdGhpcy50ZXh0IS5zZWxlY3Rpb25TdGFydDtcblx0XHRcdHRvID0gdGhpcy50ZXh0IS5zZWxlY3Rpb25FbmQgPz8gdG87XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRzdGFydDogZnJvbSxcblx0XHRcdGVuZDogdG8sXG5cdFx0fTtcblx0fVxuXHRzYXZlVmlldygpOiB2b2lkIHtcblx0XHR0aGlzLmxhc3RTZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuXHR9XG5cdHByb2Nlc3NLZXkoZXZlbnQ6IEhvdENhdFVJRXZlbnQpOiBib29sZWFuIHtcblx0XHRsZXQgZGlyID0gMDtcblx0XHRzd2l0Y2ggKHRoaXMubGFzdEtleSkge1xuXHRcdFx0Y2FzZSBVUDpcblx0XHRcdFx0ZGlyID0gLTE7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBET1dOOlxuXHRcdFx0XHRkaXIgPSAxO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgUEdVUDpcblx0XHRcdFx0ZGlyID0gLUhDLmxpc3RTaXplO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgUEdET1dOOlxuXHRcdFx0XHRkaXIgPSBIQy5saXN0U2l6ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIEVTQzpcblx0XHRcdFx0Ly8gSW5oaWJpdCBkZWZhdWx0IGJlaGF2aW9yIChyZXZlcnQgdG8gbGFzdCByZWFsIGlucHV0IGluIEZGOiB3ZSBkbyB0aGF0IG91cnNlbHZlcylcblx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHRpZiAoZGlyKSB7XG5cdFx0XHRpZiAodGhpcy5saXN0IS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcblx0XHRcdFx0Ly8gTGlzdCBpcyB2aXNpYmxlLCBzbyB0aGVyZSBhcmUgc3VnZ2VzdGlvbnNcblx0XHRcdFx0dGhpcy5oaWdobGlnaHRTdWdnZXN0aW9uKGRpcik7XG5cdFx0XHRcdC8vIEtpbGwgdGhlIGV2ZW50LCBvdGhlcndpc2Ugc29tZSBicm93c2VycyAoZS5nLiwgRmlyZWZveCkgbWF5IGFkZGl0aW9uYWxseSB0cmVhdCBhbiB1cC1hcnJvd1xuXHRcdFx0XHQvLyBhcyBcInBsYWNlIHRoZSB0ZXh0IGN1cnNvciBhdCB0aGUgZnJvbnRcIiwgd2hpY2ggd2UgZG9uJ3Qgd2FudCBoZXJlLlxuXHRcdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHR0aGlzLmtleUNvdW50IDw9IDEgJiZcblx0XHRcdFx0KCF0aGlzLmNhbGxiYWNrT2JqIHx8IHRoaXMuY2FsbGJhY2tPYmouY2FsbHNNYWRlID09PSB0aGlzLmNhbGxiYWNrT2JqLm5vZkNhbGxzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIElmIG5vIHN1Z2dlc3Rpb25zIGRpc3BsYXllZCwgZ2V0IHRoZW0sIHVubGVzcyB3ZSdyZSBhbHJlYWR5IGdldHRpbmcgdGhlbS5cblx0XHRcdFx0dGhpcy50ZXh0Y2hhbmdlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdGhpZ2hsaWdodFN1Z2dlc3Rpb24oZGlyOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRpZiAobm9TdWdnZXN0aW9ucyB8fCAhdGhpcy5saXN0IHx8IHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgY3VyciA9IHRoaXMubGlzdC5zZWxlY3RlZEluZGV4O1xuXHRcdGxldCB0Z3QgPSAtMTtcblx0XHRpZiAoZGlyID09PSAwKSB7XG5cdFx0XHRpZiAoY3VyciA8IDAgfHwgY3VyciA+PSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGd0ID0gY3Vycjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGd0ID0gY3VyciA8IDAgPyAwIDogY3VyciArIGRpcjtcblx0XHRcdHRndCA9IE1hdGgubWF4KHRndCwgMCk7XG5cdFx0XHRpZiAodGd0ID49IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHR0Z3QgPSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGggLSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGd0ICE9PSBjdXJyIHx8IGRpciA9PT0gMCkge1xuXHRcdFx0aWYgKGN1cnIgPj0gMCAmJiBjdXJyIDwgdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoICYmIGRpciAhPT0gMCkge1xuXHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1tjdXJyXSEuc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdC5vcHRpb25zW3RndF0hLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdGNvbnN0IHYgPSB0aGlzLnRleHQhLnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHRjb25zdCBvcHRpb25UZXh0ID0gdGhpcy5saXN0Lm9wdGlvbnNbdGd0XSEudGV4dDtcblx0XHRcdGNvbnN0IGNvbXBsZXRlZCA9IHRoaXMuYXV0b0NvbXBsZXRlKG9wdGlvblRleHQsIHRoaXMubGFzdFJlYWxJbnB1dCwgbnVsbCwga2V5LCBmYWxzZSk7XG5cdFx0XHRpZiAoIWNvbXBsZXRlZCB8fCBvcHRpb25UZXh0ID09PSB0aGlzLmxhc3RSZWFsSW5wdXQpIHtcblx0XHRcdFx0dGhpcy50ZXh0IS52YWx1ZSA9IG9wdGlvblRleHQgKyBrZXk7XG5cdFx0XHRcdGlmICh0aGlzLmNhblNlbGVjdCgpKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTZWxlY3Rpb24ob3B0aW9uVGV4dC5sZW5ndGgsIG9wdGlvblRleHQubGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0SW5wdXQgPSBvcHRpb25UZXh0O1xuXHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIE1pZ2h0IGJlIHdyb25nIGlmIGZyb20gYSBkYWIgbGlzdC4uLlxuXHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHR0aGlzLmljb24uc3JjID0gSEMuZXhpc3RzWWVzO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRV9QRU5ESU5HO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXNldEtleVNlbGVjdGlvbigpOiBib29sZWFuIHtcblx0XHRpZiAobm9TdWdnZXN0aW9ucyB8fCAhdGhpcy5saXN0IHx8IHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgY3VyciA9IHRoaXMubGlzdC5zZWxlY3RlZEluZGV4O1xuXHRcdGlmIChjdXJyID49IDAgJiYgY3VyciA8IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5saXN0Lm9wdGlvbnNbY3Vycl0hLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRjb25zdCB2ID0gdGhpcy50ZXh0IS52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0Ly8gRVNDIGlzIGhhbmRsZWQgc3RyYW5nZWx5IGJ5IHNvbWUgYnJvd3NlcnMgKGUuZy4sIEZGKTsgc29tZWhvdyBpdCByZXNldHMgdGhlIGlucHV0IHZhbHVlIGJlZm9yZVxuXHRcdFx0Ly8gb3VyIGV2ZW50IGhhbmRsZXJzIGV2ZXIgZ2V0IGEgY2hhbmNlIHRvIHJ1bi5cblx0XHRcdGxldCByZXN1bHQgPSB2WzBdICE9PSB0aGlzLmxhc3RJbnB1dDtcblx0XHRcdGlmICh2WzBdICE9PSB0aGlzLmxhc3RSZWFsSW5wdXQpIHtcblx0XHRcdFx0dGhpcy50ZXh0IS52YWx1ZSA9IHRoaXMubGFzdFJlYWxJbnB1dCArIGtleTtcblx0XHRcdFx0cmVzdWx0ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMubGFzdElucHV0ID0gdGhpcy5sYXN0UmVhbElucHV0O1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5pbnRlcmZhY2UgSG90Q2F0VXNlckNvbmZpZyB7XG5cdEhvdENhdERvbnRBZGRUb1dhdGNobGlzdD86IGJvb2xlYW47XG5cdEhvdENhdE5vQXV0b0NvbW1pdD86IGJvb2xlYW47XG5cdEhvdENhdERlbE5lZWRzRGlmZj86IGJvb2xlYW47XG5cdEhvdENhdFN1Z2dlc3Rpb25EZWxheT86IG51bWJlcjtcblx0SG90Q2F0RWRpdEJveFdpZHRoPzogbnVtYmVyO1xuXHRIb3RDYXRTdWdnZXN0aW9ucz86IHN0cmluZztcblx0SG90Q2F0Rml4ZWRTdWdnZXN0aW9ucz86IGJvb2xlYW47XG5cdEhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlcz86IGJvb2xlYW47XG5cdEhvdENhdENoYW5nZWRCYWNrZ3JvdW5kPzogc3RyaW5nO1xuXHRIb3RDYXRVc2VDYXRlZ29yeUxpbmtzPzogYm9vbGVhbjtcblx0SG90Q2F0TGlzdFNpemU/OiBudW1iZXI7XG5cdEhvdENhdENoYW5nZVRhZz86IHN0cmluZztcbn1cbmNvbnN0IGluaXRpYWxpemUgPSAoKTogdm9pZCA9PiB7XG5cdC8vIFVzZXIgY29uZmlndXJhdGlvbnM6IERvIHRoaXMgaGVyZSwgY2FsbGVkIGZyb20gdGhlIG9ubG9hZCBoYW5kbGVyLCBzbyB0aGF0IHVzZXJzIGNhblxuXHQvLyBvdmVycmlkZSBpdCBlYXNpbHkgaW4gdGhlaXIgb3duIHVzZXIgc2NyaXB0IGZpbGVzIGJ5IGp1c3QgZGVjbGFyaW5nIHZhcmlhYmxlcy5cblx0Y29uc3QgY29uZmlnOiBIb3RDYXRVc2VyQ29uZmlnID0ge307XG5cdEhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCA9XG5cdFx0d2luZG93LmhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3QgPT09IHVuZGVmaW5lZFxuXHRcdFx0PyBjb25maWcuSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBIQy5kb250X2FkZF90b193YXRjaGxpc3Rcblx0XHRcdFx0OiBjb25maWcuSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0XG5cdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3Q7XG5cdEhDLm5vX2F1dG9jb21taXQgPVxuXHRcdHdpbmRvdy5ob3RjYXRfbm9fYXV0b2NvbW1pdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHQ/IGNvbmZpZy5Ib3RDYXROb0F1dG9Db21taXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgJSAyXG5cdFx0XHRcdFx0PyB0cnVlXG5cdFx0XHRcdFx0OiBIQy5ub19hdXRvY29tbWl0IC8vIE9uIHRhbGsgbmFtZXNwYWNlIGRlZmF1bHQgYXV0b2NvbW1pdCBvZmZcblx0XHRcdFx0OiBjb25maWcuSG90Q2F0Tm9BdXRvQ29tbWl0XG5cdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9ub19hdXRvY29tbWl0O1xuXHRIQy5kZWxfbmVlZHNfZGlmZiA9XG5cdFx0d2luZG93LmhvdGNhdF9kZWxfbmVlZHNfZGlmZiA9PT0gdW5kZWZpbmVkXG5cdFx0XHQ/IGNvbmZpZy5Ib3RDYXREZWxOZWVkc0RpZmYgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IEhDLmRlbF9uZWVkc19kaWZmXG5cdFx0XHRcdDogY29uZmlnLkhvdENhdERlbE5lZWRzRGlmZlxuXHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfZGVsX25lZWRzX2RpZmY7XG5cdEhDLnN1Z2dlc3RfZGVsYXkgPSB3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25fZGVsYXkgfHwgY29uZmlnLkhvdENhdFN1Z2dlc3Rpb25EZWxheSB8fCBIQy5zdWdnZXN0X2RlbGF5O1xuXHRIQy5lZGl0Ym94X3dpZHRoID0gd2luZG93LmhvdGNhdF9lZGl0Ym94X3dpZHRoIHx8IGNvbmZpZy5Ib3RDYXRFZGl0Qm94V2lkdGggfHwgSEMuZWRpdGJveF93aWR0aDtcblx0SEMuc3VnZ2VzdGlvbnMgPSB3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25zIHx8IGNvbmZpZy5Ib3RDYXRTdWdnZXN0aW9ucyB8fCBIQy5zdWdnZXN0aW9ucztcblx0aWYgKHR5cGVvZiBIQy5zdWdnZXN0aW9ucyAhPT0gJ3N0cmluZycgfHwgIXN1Z2dlc3Rpb25Db25maWdzW0hDLnN1Z2dlc3Rpb25zXSkge1xuXHRcdEhDLnN1Z2dlc3Rpb25zID0gJ2NvbWJpbmVkJztcblx0fVxuXHRIQy5maXhlZF9zZWFyY2ggPVxuXHRcdHdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQgPT09IHVuZGVmaW5lZFxuXHRcdFx0PyBjb25maWcuSG90Q2F0Rml4ZWRTdWdnZXN0aW9ucyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gSEMuZml4ZWRfc2VhcmNoXG5cdFx0XHRcdDogY29uZmlnLkhvdENhdEZpeGVkU3VnZ2VzdGlvbnNcblx0XHRcdDogISF3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25zX2ZpeGVkO1xuXHRIQy5zaW5nbGVfbWlub3IgPVxuXHRcdHdpbmRvdy5ob3RjYXRfc2luZ2xlX2NoYW5nZXNfYXJlX21pbm9yID09PSB1bmRlZmluZWRcblx0XHRcdD8gY29uZmlnLkhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlcyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gSEMuc2luZ2xlX21pbm9yXG5cdFx0XHRcdDogY29uZmlnLkhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlc1xuXHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfc2luZ2xlX2NoYW5nZXNfYXJlX21pbm9yO1xuXHRIQy5iZ19jaGFuZ2VkID0gd2luZG93LmhvdGNhdF9jaGFuZ2VkX2JhY2tncm91bmQgfHwgY29uZmlnLkhvdENhdENoYW5nZWRCYWNrZ3JvdW5kIHx8IEhDLmJnX2NoYW5nZWQ7XG5cdEhDLnVzZV91cF9kb3duID1cblx0XHR3aW5kb3cuaG90Y2F0X3VzZV9jYXRlZ29yeV9saW5rcyA9PT0gdW5kZWZpbmVkXG5cdFx0XHQ/IGNvbmZpZy5Ib3RDYXRVc2VDYXRlZ29yeUxpbmtzID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBIQy51c2VfdXBfZG93blxuXHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXRVc2VDYXRlZ29yeUxpbmtzXG5cdFx0XHQ6ICEhd2luZG93LmhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3M7XG5cdEhDLmxpc3RTaXplID0gd2luZG93LmhvdGNhdF9saXN0X3NpemUgfHwgY29uZmlnLkhvdENhdExpc3RTaXplIHx8IEhDLmxpc3RTaXplO1xuXHRIQy5jaGFuZ2VUYWcgPSBjb25maWcuSG90Q2F0Q2hhbmdlVGFnIHx8ICcnO1xuXHQvLyBUaGUgbmV4dCB3aG9sZSBzaGViYW5nIGlzIG5lZWRlZCwgYmVjYXVzZSBtYW51YWwgdGFncyBnZXQgbm90IHN1Ym1pdHRlZCBleGNlcHQgb2Ygc2F2ZVxuXHRpZiAoSEMuY2hhbmdlVGFnKSB7XG5cdFx0Y29uc3QgZUZvcm0gPSBkb2N1bWVudC5lZGl0Zm9ybTtcblx0XHRjb25zdCBjYXRSZWdFeHAgPSBuZXcgUmVnRXhwKGBeXFxcXFtcXFxcWygke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdGxldCBvbGRUeHQgPSAnJztcblx0XHQvLyBSZXR1cm5zIHRydWUgaWYgbWlub3IgY2hhbmdlXG5cdFx0Y29uc3QgaXNNaW5vckNoYW5nZSA9ICgpOiBib29sZWFuIHwgdW5kZWZpbmVkID0+IHtcblx0XHRcdGNvbnN0IHRleHRib3ggPSBlRm9ybT8ud3BUZXh0Ym94MTtcblx0XHRcdGlmICghdGV4dGJveCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuZXdUeHQgPSB0ZXh0Ym94LnZhbHVlO1xuXHRcdFx0Y29uc3Qgb2xkTGluZXMgPSBvbGRUeHQubWF0Y2goL14uKiQvZ20pID8/IFtdO1xuXHRcdFx0Y29uc3QgbmV3TGluZXMgPSBuZXdUeHQubWF0Y2goL14uKiQvZ20pID8/IFtdO1xuXHRcdFx0Y29uc3QgZXhjZXB0ID0gKGFBcnI6IHN0cmluZ1tdLCBiQXJyOiBzdHJpbmdbXSk6IHN0cmluZ1tdID0+IHtcblx0XHRcdFx0Y29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRsZXQgbEFycjogc3RyaW5nW107IC8vIGxhcmdlclxuXHRcdFx0XHRsZXQgc0Fycjogc3RyaW5nW107IC8vIHNtYWxsZXJcblx0XHRcdFx0aWYgKGFBcnIubGVuZ3RoIDwgYkFyci5sZW5ndGgpIHtcblx0XHRcdFx0XHRsQXJyID0gYkFycjtcblx0XHRcdFx0XHRzQXJyID0gWy4uLmFBcnJdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxBcnIgPSBhQXJyO1xuXHRcdFx0XHRcdHNBcnIgPSBbLi4uYkFycl07XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChjb25zdCBpdGVtIG9mIGxBcnIpIHtcblx0XHRcdFx0XHRjb25zdCBpbmQgPSBzQXJyLmluZGV4T2YoaXRlbSk7XG5cdFx0XHRcdFx0aWYgKGluZCA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGl0ZW07XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNBcnIuc3BsaWNlKGluZCwgMSk7IC8vIGRvbid0IGNoZWNrIHRoaXMgaXRlbSBhZ2FpblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgLi4uc0Fycl07XG5cdFx0XHR9O1xuXHRcdFx0bGV0IGNBcnIgPSBleGNlcHQob2xkTGluZXMsIG5ld0xpbmVzKTsgLy8gY2hhbmdlc1xuXHRcdFx0aWYgKGNBcnIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjQXJyID0gY0Fyci5maWx0ZXIoKGM6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHRyaW1tZWQgPSBjLnRyaW0oKTtcblx0XHRcdFx0XHRyZXR1cm4gISF0cmltbWVkICYmICFjYXRSZWdFeHAudGVzdCh0cmltbWVkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY0Fyci5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0b2xkVHh0ID0gbmV3VHh0O1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fTtcblx0XHRpZiAoXG5cdFx0XHRjb25mLndnQWN0aW9uID09PSAnc3VibWl0JyAmJlxuXHRcdFx0Y29uZi53Z0FydGljbGVJZCAmJlxuXHRcdFx0ZUZvcm0gJiZcblx0XHRcdGVGb3JtLndwU3VtbWFyeSAmJlxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpa2lEaWZmJylcblx0XHQpIHtcblx0XHRcdGNvbnN0IHN1bSA9IGVGb3JtLndwU3VtbWFyeTtcblx0XHRcdGNvbnN0IHN1bUEgPSBlRm9ybS53cEF1dG9TdW1tYXJ5O1xuXHRcdFx0aWYgKHN1bS52YWx1ZSAmJiBzdW1BICYmIHN1bUEudmFsdWUgPT09IEhDLmNoYW5nZVRhZykge1xuXHRcdFx0XHQvLyBIb3RDYXQgZGlmZlxuXHRcdFx0XHQvLyBNRDUgaGFzaCBvZiB0aGUgZW1wdHkgc3RyaW5nLCBhcyBIb3RDYXQgZWRpdCBpcyBiYXNlZCBvbiBlbXB0eSBzdW1cblx0XHRcdFx0c3VtQS52YWx1ZSA9IHN1bUEudmFsdWUucmVwbGFjZShIQy5jaGFuZ2VUYWcsICdkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZScpO1xuXHRcdFx0XHQvLyBBdHRyIGNyZWF0aW9uIGFuZCBldmVudCBoYW5kbGluZyBpcyBub3Qgc2FtZSBpbiBhbGwgKG9sZCkgYnJvd3NlcnMgc28gdXNlICRcblx0XHRcdFx0Y29uc3QgJGN0ID0gJCgnPGlucHV0PicpXG5cdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdFx0XHRuYW1lOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC52YWwoSEMuY2hhbmdlVGFnKTtcblx0XHRcdFx0JChlRm9ybSkuYXBwZW5kKCRjdCk7XG5cdFx0XHRcdG9sZFR4dCA9IGVGb3JtLndwVGV4dGJveDE/LnZhbHVlID8/ICcnO1xuXHRcdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0JGJvZHkuZmluZCgnaW5wdXRbbmFtZT13cFNhdmVdJykub25lKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRpZiAoJGN0LnZhbCgpKSB7XG5cdFx0XHRcdFx0XHRzdW0udmFsdWUgPSBzdW0udmFsdWUucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0Z2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSB8fCBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSxcblx0XHRcdFx0XHRcdFx0Jydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Y29uc3QgcmVtb3ZlQ2hhbmdlVGFnID0gKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdCQoZUZvcm0ud3BUZXh0Ym94MSEpXG5cdFx0XHRcdFx0XHQuYWRkKHN1bSlcblx0XHRcdFx0XHRcdC5vbmUoJ2lucHV0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoaXNNaW5vckNoYW5nZSgpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZW1vdmVDaGFuZ2VUYWcoKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0JGN0LnZhbCgnJyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH07XG5cdFx0XHRcdHJlbW92ZUNoYW5nZVRhZygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvLyBOdW1lcmljIGlucHV0LCBtYWtlIHN1cmUgd2UgaGF2ZSBhIG51bWVyaWMgdmFsdWVcblx0SEMubGlzdFNpemUgPSBOdW1iZXIucGFyc2VJbnQoU3RyaW5nKEhDLmxpc3RTaXplKSwgMTApO1xuXHRpZiAoTnVtYmVyLmlzTmFOKEhDLmxpc3RTaXplKSB8fCBIQy5saXN0U2l6ZSA8IDUpIHtcblx0XHRIQy5saXN0U2l6ZSA9IDU7XG5cdH1cblx0SEMubGlzdFNpemUgPSBNYXRoLm1pbihIQy5saXN0U2l6ZSwgMzApOyAvLyBNYXggc2l6ZVxuXHQvLyBMb2NhbGl6ZSBzZWFyY2ggZW5naW5lIG5hbWVzXG5cdGZvciAoY29uc3QgW2tleSwgc3VnZ2VzdGlvbkNvbmZpZ10gb2YgT2JqZWN0LmVudHJpZXMoc3VnZ2VzdGlvbkNvbmZpZ3MpKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChrZXkgJiYgZ2V0TWVzc2FnZShgZW5naW5lX25hbWVzLSR7a2V5fWApKSB7XG5cdFx0XHRcdHN1Z2dlc3Rpb25Db25maWcubmFtZSA9IGdldE1lc3NhZ2UoYGVuZ2luZV9uYW1lcy0ke2tleX1gKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0fVxuXHQvLyBDYXRjaCBib3RoIG5hdGl2ZSBSVEwgYW5kIFwiZmFrZWRcIiBSVEwgdGhyb3VnaCBbW01lZGlhV2lraTpSdGwuanNdXVxuXHRjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ2JvZHknKSE7XG5cdGlzX3J0bCA9IGhhc0NsYXNzKGJvZHksICdydGwnKTtcblx0aWYgKCFpc19ydGwpIHtcblx0XHRjb25zdCBkaXJlY3Rpb24gPSBkb2N1bWVudC5kZWZhdWx0Vmlld1xuXHRcdFx0PyAvLyBHZWNrbyBldGMuXG5cdFx0XHRcdGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoYm9keSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJylcblx0XHRcdDogLy8gTm90IGV4YWN0bHkgcmlnaHQsIGJ1dCBiZXN0IGVmZm9ydFxuXHRcdFx0XHQkKCdib2R5JylbMF0hLnN0eWxlLmRpcmVjdGlvbjtcblx0XHRpc19ydGwgPSBkaXJlY3Rpb24gPT09ICdydGwnO1xuXHR9XG59O1xuY29uc3QgY2FuX2VkaXQgPSAoKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2EtZWRpdCcpICE9PSBudWxsO1xufTtcbi8vIExlZ2FjeSBzdHVmZlxuY29uc3QgY2xvc2VGb3JtID0gKCk6IHZvaWQgPT4ge1xuXHQvLyBDbG9zZSBhbGwgb3BlbiBlZGl0b3JzIHdpdGhvdXQgcmVkaXJlY3QgcmVzb2x1dGlvbiBhbmQgb3RoZXIgYXN5bmNocm9ub3VzIHN0dWZmLlxuXHRmb3IgKGNvbnN0IGVkaXQgb2YgZWRpdG9ycykge1xuXHRcdGlmIChlZGl0LnN0YXRlID09PSBPUEVOKSB7XG5cdFx0XHRlZGl0LmNhbmNlbCgpO1xuXHRcdH0gZWxzZSBpZiAoZWRpdC5zdGF0ZSA9PT0gQ0hBTkdFX1BFTkRJTkcpIHtcblx0XHRcdGVkaXQuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSBlZGl0LnRleHQhLnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRsZXQga2V5OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdGtleSA9IHZhbHVlWzFdITtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHYgPSB2YWx1ZVswXSEucmVwbGFjZSgvXy9nLCAnICcpLnRyaW0oKTtcblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRlZGl0LmNhbmNlbCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWRpdC5jdXJyZW50Q2F0ZWdvcnkgPSB2O1xuXHRcdFx0XHRlZGl0LmN1cnJlbnRLZXkgPSBrZXk7XG5cdFx0XHRcdGVkaXQuY3VycmVudEV4aXN0cyA9IGVkaXQuaW5wdXRFeGlzdHM7XG5cdFx0XHRcdGVkaXQuY2xvc2UoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5jb25zdCBzZXR1cF91cGxvYWQgPSAoKTogdm9pZCA9PiB7XG5cdG9uVXBsb2FkID0gdHJ1ZTtcblx0Ly8gQWRkIGFuIGVtcHR5IGNhdGVnb3J5IGJhciBhdCB0aGUgZW5kIG9mIHRoZSB0YWJsZSBjb250YWluaW5nIHRoZSBkZXNjcmlwdGlvbiwgYW5kIGNoYW5nZSB0aGUgb25zdWJtaXQgaGFuZGxlci5cblx0bGV0IGlwOiBIVE1MRWxlbWVudCB8IG51bGwgPVxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcjbXctaHRtbGZvcm0tZGVzY3JpcHRpb24nKSA/P1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwRGVzdEZpbGVdJyk7XG5cdGlmICghaXApIHtcblx0XHRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwRGVzdEZpbGVdJyk7XG5cdFx0d2hpbGUgKGlwICYmIGlwLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICd0YWJsZScpIHtcblx0XHRcdGlwID0gaXAucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCB8IG51bGw7XG5cdFx0fVxuXHR9XG5cdGlmICghaXApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgcmV1cGxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwRm9yUmVVcGxvYWRdJyk7XG5cdGNvbnN0IGRlc3RGaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignaW5wdXRbbmFtZT13cERlc3RGaWxlXScpO1xuXHRpZiAoKHJldXBsb2FkICYmICEhcmV1cGxvYWQudmFsdWUpIHx8IChkZXN0RmlsZSAmJiAoZGVzdEZpbGUuZGlzYWJsZWQgfHwgZGVzdEZpbGUucmVhZE9ubHkpKSkge1xuXHRcdHJldHVybjsgLy8gcmUtdXBsb2FkIGZvcm0uLi5cblx0fVxuXHQvLyBJbnNlcnQgYSB0YWJsZSByb3cgd2l0aCB0d28gZmllbGRzIChsYWJlbCBhbmQgZW1wdHkgY2F0ZWdvcnkgYmFyKVxuXHRjb25zdCBsYWJlbENlbGwgPSBtYWtlKCd0ZCcpO1xuXHRjb25zdCBsaW5lQ2VsbCA9IG1ha2UoJ3RkJyk7XG5cdC8vIENyZWF0ZSB0aGUgY2F0ZWdvcnkgbGluZVxuXHRjYXRMaW5lID0gbWFrZSgnZGl2Jyk7XG5cdGNhdExpbmUuY2xhc3NOYW1lID0gJ2NhdGxpbmtzJztcblx0Y2F0TGluZS5pZCA9ICdjYXRsaW5rcyc7XG5cdGNhdExpbmUuc3R5bGUudGV4dEFsaWduID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0Ly8gV2UnbGwgYmUgaW5zaWRlIGEgdGFibGUgcm93LiBNYWtlIHN1cmUgdGhhdCB3ZSBkb24ndCBoYXZlIG1hcmdpbnMgb3Igc3RyYW5nZSBib3JkZXJzLlxuXHRjYXRMaW5lLnN0eWxlLm1hcmdpbiA9ICcwJztcblx0Y2F0TGluZS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG5cdGxpbmVDZWxsLmFwcGVuZChjYXRMaW5lKTtcblx0Ly8gQ3JlYXRlIHRoZSBsYWJlbFxuXHRjb25zdCBsYWJlbDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblx0aWYgKGxhYmVsKSB7XG5cdFx0bGFiZWxDZWxsLmlkID0gJ2hvdGNhdExhYmVsVHJhbnNsYXRlZCc7XG5cdFx0bGFiZWxDZWxsLmFwcGVuZChsYWJlbCk7XG5cdH0gZWxzZSB7XG5cdFx0bGFiZWxDZWxsLmlkID0gJ2hvdGNhdExhYmVsJztcblx0XHRsYWJlbENlbGwuYXBwZW5kKG1ha2UoZ2V0TWVzc2FnZSgnY2F0ZWdvcmllcycpLCB0cnVlKSk7XG5cdH1cblx0bGFiZWxDZWxsLmNsYXNzTmFtZSA9ICdtdy1sYWJlbCc7XG5cdGxhYmVsQ2VsbC5zdHlsZS50ZXh0QWxpZ24gPSAncmlnaHQnO1xuXHRsYWJlbENlbGwuc3R5bGUudmVydGljYWxBbGlnbiA9ICdtaWRkbGUnO1xuXHQvLyBDaGFuZ2UgdGhlIG9uc3VibWl0IGhhbmRsZXJcblx0Y29uc3QgZm9ybSA9XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRm9ybUVsZW1lbnQ+KCcjdXBsb2FkJykgPz9cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxGb3JtRWxlbWVudD4oJyNtdy11cGxvYWQtZm9ybScpO1xuXHRpZiAoZm9ybSkge1xuXHRcdGNvbnN0IG5ld1JvdyA9IChpcCBhcyBIVE1MVGFibGVFbGVtZW50KS5pbnNlcnRSb3coLTEpO1xuXHRcdG5ld1Jvdy5hcHBlbmQobGFiZWxDZWxsKTtcblx0XHRuZXdSb3cuYXBwZW5kKGxpbmVDZWxsKTtcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcblx0XHRcdGNsb3NlRm9ybSgpO1xuXHRcdFx0Ly8gQ29weSB0aGUgY2F0ZWdvcmllc1xuXHRcdFx0Y29uc3QgZWIgPVxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCd0ZXh0YXJlYVtuYW1lPXdwVXBsb2FkRGVzY3JpcHRpb25dJykgPz9cblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVGV4dEFyZWFFbGVtZW50PignI3dwRGVzYycpO1xuXHRcdFx0aWYgKCFlYikge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGxldCBhZGRlZE9uZSA9IGZhbHNlO1xuXHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRjb25zdCB0ID0gZWRpdG9yLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdFx0aWYgKCF0KSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3Qga2V5ID0gZWRpdG9yLmN1cnJlbnRLZXk7XG5cdFx0XHRcdGNvbnN0IG5ld19jYXQgPSBgW1ske0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0fSR7a2V5ID8gYHwke2tleX1gIDogJyd9XV1gO1xuXHRcdFx0XHQvLyBPbmx5IGFkZCBpZiBub3QgYWxyZWFkeSBwcmVzZW50XG5cdFx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRcdGxldCBfY2xlYW5lZFRleHQgPSBlYi52YWx1ZTtcblx0XHRcdFx0bGV0IHByZXZpb3VzQ2xlYW5lZFRleHQ6IHN0cmluZztcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdHByZXZpb3VzQ2xlYW5lZFRleHQgPSBfY2xlYW5lZFRleHQ7XG5cdFx0XHRcdFx0X2NsZWFuZWRUZXh0ID0gX2NsZWFuZWRUZXh0LnJlcGxhY2UoLzwhLS0vZywgJycpLnJlcGxhY2UoLy0tIT8+L2csICcnKS5yZXBsYWNlKG5vd2lraVJlZ2V4LCAnJyk7XG5cdFx0XHRcdH0gd2hpbGUgKF9jbGVhbmVkVGV4dCAhPT0gcHJldmlvdXNDbGVhbmVkVGV4dCk7XG5cdFx0XHRcdGlmICghZmluZF9jYXRlZ29yeShfY2xlYW5lZFRleHQsIHQsIHRydWUpKSB7XG5cdFx0XHRcdFx0ZWIudmFsdWUgKz0gYFxcbiR7bmV3X2NhdH1gO1xuXHRcdFx0XHRcdGFkZGVkT25lID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGFkZGVkT25lKSB7XG5cdFx0XHRcdC8vIFJlbW92ZSBcInN1YnN0OnVuY1wiIGFkZGVkIGJ5IEZsaW5mbyBpZiBpdCBkaWRuJ3QgZmluZCBjYXRlZ29yaWVzXG5cdFx0XHRcdGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgne3skJy5jb25jYXQoJ3N1YnN0OicpLmNvbmNhdCgndW5jfX0nKSwgJ2cnKTtcblx0XHRcdFx0ZWIudmFsdWUgPSBlYi52YWx1ZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9KTtcblx0fVxufTtcbmxldCBjbGVhbmVkVGV4dDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5pbnRlcmZhY2UgSG90Q2F0T25QYWdlUmVzdWx0IHtcblx0dGl0bGU6IHN0cmluZztcblx0bWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSB8IEhvdENhdENhdGVnb3J5TWF0Y2hlcyB8IHN0cmluZ1tdIHwgbnVsbDtcbn1cbmNvbnN0IGlzT25QYWdlID0gKGVsZW1lbnQ6IEVsZW1lbnQpOiBIb3RDYXRPblBhZ2VSZXN1bHQgfCBudWxsID0+IHtcblx0Y29uc3Qge2ZpcnN0Q2hpbGR9ID0gZWxlbWVudDtcblx0aWYgKCFmaXJzdENoaWxkIHx8IGZpcnN0Q2hpbGQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0bGV0IGNhdFRpdGxlID0gdGl0bGUoKGZpcnN0Q2hpbGQgYXMgRWxlbWVudCkuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuXHRpZiAoIWNhdFRpdGxlKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0Y2F0VGl0bGUgPSBjYXRUaXRsZS5zbGljZShjYXRUaXRsZS5pbmRleE9mKCc6JykgKyAxKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdGlmIChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QoY2F0VGl0bGUpKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0Y29uc3QgcmVzdWx0OiBIb3RDYXRPblBhZ2VSZXN1bHQgPSB7XG5cdFx0dGl0bGU6IGNhdFRpdGxlLFxuXHRcdG1hdGNoOiBbJycsICcnLCAnJ10sXG5cdH07XG5cdGlmIChwYWdlVGV4dCA9PT0gbnVsbCkge1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0aWYgKGNsZWFuZWRUZXh0ID09PSBudWxsKSB7XG5cdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKCc8bm8nLmNvbmNhdCgnd2lraT4nLCBTdHJpbmcucmF3YChcXHN8XFxTKSo/PC9ub2AsICd3aWtpJywgJz4nKSwgJ2cnKTtcblx0XHRjbGVhbmVkVGV4dCA9IHBhZ2VUZXh0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCAnJykucmVwbGFjZShub3dpa2lSZWdleCwgJycpO1xuXHR9XG5cdHJlc3VsdC5tYXRjaCA9IGZpbmRfY2F0ZWdvcnkoY2xlYW5lZFRleHQsIGNhdFRpdGxlLCB0cnVlKTtcblx0cmV0dXJuIHJlc3VsdDtcbn07XG5sZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbmxldCBzZXR1cFRpbWVvdXQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgbnVsbCA9IG51bGw7XG5jb25zdCBmaW5kQnlDbGFzcyA9IChzY29wZTogUGFyZW50Tm9kZSwgdGFnOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKTogSFRNTEVsZW1lbnQgfCBudWxsID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gJChzY29wZSkuZmluZChgJHt0YWd9LiR7Y2xhc3NOYW1lfWApO1xuXHRyZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5sZW5ndGggPiAwID8gKHJlc3VsdFswXSBhcyBIVE1MRWxlbWVudCkgOiBudWxsO1xufTtcbmNvbnN0IHNldHVwID0gKGFkZGl0aW9uYWxXb3JrPzogKCkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRpZiAoaW5pdGlhbGl6ZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0aW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRpZiAoc2V0dXBUaW1lb3V0KSB7XG5cdFx0d2luZG93LmNsZWFyVGltZW91dChzZXR1cFRpbWVvdXQpO1xuXHRcdHNldHVwVGltZW91dCA9IG51bGw7XG5cdH1cblx0Ly8gRmluZCB0aGUgY2F0ZWdvcnkgYmFyLCBvciBjcmVhdGUgYW4gZW1wdHkgb25lIGlmIHRoZXJlIGlzbid0IG9uZS4gVGhlbiBhZGQgLS8rLSBsaW5rcyBhZnRlclxuXHQvLyBlYWNoIGNhdGVnb3J5LCBhbmQgYWRkIHRoZSArIGxpbmsuXG5cdGNhdExpbmUgfHw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcjbXctbm9ybWFsLWNhdGxpbmtzJyk7IC8vIFNwZWNpYWw6VXBsb2FkXG5cdGNvbnN0IGhpZGRlbkNhdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI213LWhpZGRlbi1jYXRsaW5rcycpO1xuXHRpZiAoIWNhdExpbmUpIHtcblx0XHRsZXQgZm9vdGVyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXHRcdGlmICghaGlkZGVuQ2F0cykge1xuXHRcdFx0Zm9vdGVyID0gZmluZEJ5Q2xhc3MoZG9jdW1lbnQsICdkaXYnLCAncHJpbnRmb290ZXInKTtcblx0XHRcdGlmICghZm9vdGVyKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gLy8gRG9uJ3Qga25vdyB3aGVyZSB0byBpbnNlcnQgdGhlIGNhdGVnb3J5IGxpbmVcblx0XHR9XG5cdFx0Y2F0TGluZSA9IG1ha2UoJ2RpdicpO1xuXHRcdGNhdExpbmUuaWQgPSAnbXctbm9ybWFsLWNhdGxpbmtzJztcblx0XHRjYXRMaW5lLnN0eWxlLnRleHRBbGlnbiA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0Ly8gQWRkIGEgbGFiZWxcblx0XHRjb25zdCBsYWJlbCA9IG1ha2UoJ2EnKTtcblx0XHRsYWJlbC5ocmVmID0gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJ1NwZWNpYWw6Q2F0ZWdvcmllcycpO1xuXHRcdGxhYmVsLnRpdGxlID0gZ2V0TWVzc2FnZSgnY2F0ZWdvcmllcycpO1xuXHRcdGxhYmVsLmFwcGVuZChtYWtlKGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKSwgdHJ1ZSkpO1xuXHRcdGNhdExpbmUuYXBwZW5kKGxhYmVsKTtcblx0XHRjYXRMaW5lLmFwcGVuZChtYWtlKCc6JywgdHJ1ZSkpO1xuXHRcdC8vIEluc2VydCB0aGUgbmV3IGNhdGVnb3J5IGxpbmVcblx0XHRsZXQgY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwgPVxuXHRcdFx0KGhpZGRlbkNhdHM/LnBhcmVudE5vZGUgYXMgSFRNTEVsZW1lbnQgfCBudWxsKSA/PyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI2NhdGxpbmtzJyk7XG5cdFx0aWYgKCFjb250YWluZXIpIHtcblx0XHRcdGNvbnRhaW5lciA9IG1ha2UoJ2RpdicpO1xuXHRcdFx0Y29udGFpbmVyLmlkID0gJ2NhdGxpbmtzJztcblx0XHRcdGZvb3RlciEucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgZm9vdGVyIS5uZXh0U2libGluZyk7XG5cdFx0fVxuXHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY2F0bGlua3Mgbm9wcmludCc7XG5cdFx0Y29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRpZiAoaGlkZGVuQ2F0cykge1xuXHRcdFx0aGlkZGVuQ2F0cy5iZWZvcmUoY2F0TGluZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnRhaW5lci5hcHBlbmQoY2F0TGluZSk7XG5cdFx0fVxuXHR9IC8vIGVuZCBpZiBjYXRMaW5lIGV4aXN0c1xuXHRpZiAoaXNfcnRsKSB7XG5cdFx0Y2F0TGluZS5kaXIgPSAncnRsJztcblx0fVxuXHQvLyBDcmVhdGUgZWRpdG9ycyBmb3IgYWxsIGV4aXN0aW5nIGNhdGVnb3JpZXNcblx0Y29uc3QgY3JlYXRlRWRpdG9ycyA9IChsaW5lOiBIVE1MRWxlbWVudCwgaXNfaGlkZGVuPzogYm9vbGVhbik6IEhUTUxFbGVtZW50IHwgbnVsbCA9PiB7XG5cdFx0bGV0IGNhdHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+IHwgSFRNTEVsZW1lbnRbXSA9IGxpbmUucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ2xpJyk7XG5cdFx0aWYgKGNhdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0bmV3RE9NID0gdHJ1ZTtcblx0XHRcdGxpbmUgPSBjYXRzWzBdIS5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYXRzID0gbGluZS5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50Pignc3BhbicpO1xuXHRcdH1cblx0XHQvLyBDb3B5IGNhdHMsIG90aGVyd2lzZSBpdCdsbCBhbHNvIG1hZ2ljYWxseSBjb250YWluIG91ciBhZGRlZCBzcGFucyBhcyBpdCBpcyBhIGxpdmUgY29sbGVjdGlvbiFcblx0XHRjb25zdCBjb3B5Q2F0cyA9IEFycmF5LmZyb20oY2F0cyk7XG5cdFx0Zm9yIChjb25zdCBjYXQgb2YgY29weUNhdHMpIHtcblx0XHRcdGNvbnN0IHRlc3QgPSBpc09uUGFnZShjYXQpO1xuXHRcdFx0aWYgKHRlc3QgIT09IG51bGwgJiYgdGVzdC5tYXRjaCAhPT0gbnVsbCAmJiBsaW5lKSB7XG5cdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcihsaW5lLCBjYXQsIHRlc3QudGl0bGUsICh0ZXN0Lm1hdGNoIGFzIHN0cmluZ1tdKVsyXSwgaXNfaGlkZGVuKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNvcHlDYXRzLmxlbmd0aCA+IDAgPyBjb3B5Q2F0cy5hdCgtMSkhIDogbnVsbDtcblx0fTtcblx0Y29uc3QgbGFzdFNwYW4gPSBjcmVhdGVFZGl0b3JzKGNhdExpbmUsIGZhbHNlKTtcblx0Ly8gQ3JlYXRlIG9uZSB0byBhZGQgYSBuZXcgY2F0ZWdvcnlcblx0bmV3IENhdGVnb3J5RWRpdG9yKFxuXHRcdG5ld0RPTSA/IGNhdExpbmUucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ3VsJylbMF0hIDogY2F0TGluZSxcblx0XHRudWxsLFxuXHRcdG51bGwsXG5cdFx0bGFzdFNwYW4gIT09IG51bGwsXG5cdFx0ZmFsc2Vcblx0KTtcblx0aWYgKCFvblVwbG9hZCkge1xuXHRcdGlmIChwYWdlVGV4dCAhPT0gbnVsbCAmJiBoaWRkZW5DYXRzKSB7XG5cdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdGhpZGRlbkNhdHMuZGlyID0gJ3J0bCc7XG5cdFx0XHR9XG5cdFx0XHRjcmVhdGVFZGl0b3JzKGhpZGRlbkNhdHMsIHRydWUpO1xuXHRcdH1cblx0XHQvLyBBbmQgZmluYWxseSBhZGQgdGhlIFwibXVsdGktbW9kZVwiIHNwYW4uIChEbyB0aGlzIGF0IHRoZSBlbmQsIG90aGVyd2lzZSBpdCBlbmRzIHVwIGluIHRoZSBsaXN0IGFib3ZlLilcblx0XHRjb25zdCBlbmFibGVNdWx0aSA9IG1ha2UoJ3NwYW4nKTtcblx0XHRlbmFibGVNdWx0aS5jbGFzc05hbWUgPSAnbm9wcmludCc7XG5cdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0ZW5hYmxlTXVsdGkuZGlyID0gJ3J0bCc7XG5cdFx0fVxuXHRcdGNhdExpbmUuaW5zZXJ0QmVmb3JlKGVuYWJsZU11bHRpLCBjYXRMaW5lLmZpcnN0Q2hpbGQhLm5leHRTaWJsaW5nKTtcblx0XHRlbmFibGVNdWx0aS5hcHBlbmQobWFrZSgnXFx1MDBBMCcsIHRydWUpKTsgLy8gbmJzcFxuXHRcdG11bHRpU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRlbmFibGVNdWx0aS5hcHBlbmQobXVsdGlTcGFuKTtcblx0XHRtdWx0aVNwYW4uaW5uZXJIVE1MID0gYCg8YT4ke0hDLmFkZG11bHRpfTwvYT4pYDtcblx0XHRjb25zdCBbbGlua10gPSBtdWx0aVNwYW4ucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oJ2EnKTtcblx0XHRsaW5rIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0fSk7XG5cdFx0bGluayEudGl0bGUgPSBnZXRNZXNzYWdlKCdtdWx0aV90b29sdGlwJyk7XG5cdFx0bGluayEuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXHR9XG5cdGNsZWFuZWRUZXh0ID0gbnVsbDtcblx0aWYgKGFkZGl0aW9uYWxXb3JrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcblx0XHRhZGRpdGlvbmFsV29yaygpO1xuXHR9XG5cdG13Lmhvb2soJ2hvdGNhdC5yZWFkeScpLmZpcmUoKTsgLy8gRXhlY3V0ZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uc1xuXHQkKCdib2R5JykudHJpZ2dlcignaG90Y2F0U2V0dXBDb21wbGV0ZWQnKTtcbn07XG5jb25zdCBjcmVhdGVDb21taXRGb3JtID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoY29tbWl0Rm9ybSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRjb25zdCBmb3JtQ29udGFpbmVyID0gbWFrZSgnZGl2Jyk7XG5cdGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIS5hcHBlbmQoZm9ybUNvbnRhaW5lcik7XG5cdGZvcm1Db250YWluZXIuaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwiaG90Y2F0Q29tbWl0Rm9ybVwiIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIGFjdGlvbj1cIiR7XG5cdFx0Y29uZi53Z1NjcmlwdFxuXHR9P3RpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGNvbmYud2dQYWdlTmFtZSl9JmFjdGlvbj1zdWJtaXRcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFRleHRib3gxXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibW9kZWxcIiB2YWx1ZT1cIiR7Y29uZi53Z1BhZ2VDb250ZW50TW9kZWx9XCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybWF0XCIgdmFsdWU9XCJ0ZXh0L3gtd2lraVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwU3VtbWFyeVwiIHZhbHVlPVwiXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ3cE1pbm9yZWRpdFwiIHRpdGxlPVwid3BNaW5vcmVkaXRcIiB2YWx1ZT1cIjFcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIndwV2F0Y2h0aGlzXCIgdGl0bGU9XCJ3cFdhdGNodGhpc1wiIHZhbHVlPVwiMVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwQXV0b1N1bW1hcnlcIiB2YWx1ZT1cImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BFZGl0dGltZVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwU3RhcnR0aW1lXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BEaWZmXCIgdmFsdWU9XCJ3cERpZmZcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvbGRpZFwiIHZhbHVlPVwiMFwiPlxuXHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cImhjQ29tbWl0XCIgdmFsdWU9XCJoY0NvbW1pdFwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRWRpdFRva2VuXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BVbHRpbWF0ZVBhcmFtXCIgdmFsdWU9XCIxXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BDaGFuZ2VUYWdzXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIuKEs/CdkrLimaXwnZOK8J2Tg/Cdkr7wnZK44oS08J2SueKEr1wiIG5hbWU9XCJ3cFVuaWNvZGVDaGVja1wiPlxuXHRcdDwvZm9ybT5gO1xuXHRjb21taXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIb3RDYXRDb21taXRGb3JtPignI2hvdGNhdENvbW1pdEZvcm0nKTtcbn07XG5jb25zdCBnZXRQYWdlID0gKCk6IHZvaWQgPT4ge1xuXHQvLyBXZSBrbm93IHdlIGhhdmUgYW4gYXJ0aWNsZSBoZXJlLlxuXHRpZiAoY29uZi53Z0FydGljbGVJZCkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHJhd2NvbnRpbnVlOiAnJyxcblx0XHRcdHRpdGxlczogY29uZi53Z1BhZ2VOYW1lLFxuXHRcdFx0cHJvcDogWydpbmZvJywgJ3JldmlzaW9ucyddLFxuXHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJywgJ2lkcyddLFxuXHRcdFx0cnZsaW1pdDogJzEnLFxuXHRcdFx0cnZzdGFydGlkOiBjb25mLndnQ3VyUmV2aXNpb25JZCxcblx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdG1ldGE6IFsnc2l0ZWluZm8nXSxcblx0XHR9O1xuXHRcdEhDLnN0YXJ0ID0gKGRhdGE6IEhvdENhdEFwaVF1ZXJ5UmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdHNldFBhZ2UoZGF0YSk7XG5cdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHR9O1xuXHRcdHZvaWQgYXBpLmdldChwYXJhbXMpLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdEhDLnN0YXJ0IShkYXRhIGFzIEhvdENhdEFwaVF1ZXJ5UmVzcG9uc2UpO1xuXHRcdH0pO1xuXHRcdHNldHVwVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0c2V0dXAoY3JlYXRlQ29tbWl0Rm9ybSk7XG5cdFx0fSwgNDAwMCk7IC8vIDQgc2VjLCBqdXN0IGluIGNhc2UgZ2V0dGluZyB0aGUgd2lraXRleHQgdGFrZXMgbG9uZ2VyLlxuXHR9IGVsc2Uge1xuXHRcdC8vIERvZXNuJ3QgZXhpc3QgeWV0LiBEaXNhYmxlIG9uIG5vbi1leGlzdGluZyBVc2VyIHBhZ2VzLlxuXHRcdGlmIChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAyKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHBhZ2VUZXh0ID0gJyc7XG5cdFx0cGFnZVRpbWUgPSBudWxsO1xuXHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHR9XG59O1xuY29uc3Qgc2V0U3RhdGUgPSAoc3RhdGU6IHN0cmluZyk6IG51bGwgPT4ge1xuXHRjb25zdCBjYXRzID0gc3RhdGUuc3BsaXQoJ1xcbicpO1xuXHRpZiAoY2F0cy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRpZiAoaW5pdGlhbGl6ZWQgJiYgZWRpdG9ycy5sZW5ndGggPT09IDEgJiYgZWRpdG9yc1swXSEuaXNBZGRDYXRlZ29yeSkge1xuXHRcdC8vIEluc2VydCBuZXcgc3BhbnMgYW5kIGNyZWF0ZSBuZXcgZWRpdG9ycyBmb3IgdGhlbS5cblx0XHRjb25zdCBuZXdTcGFuczoge2VsZW1lbnQ6IEhUTUxFbGVtZW50OyB0aXRsZTogc3RyaW5nOyBrZXk6IHN0cmluZyB8IG51bGx9W10gPSBbXTtcblx0XHRjb25zdCBiZWZvcmUgPSBlZGl0b3JzLmxlbmd0aCA9PT0gMSA/IGVkaXRvcnNbMF0hLnNwYW4gOiBudWxsO1xuXHRcdGxldCBpOiBudW1iZXI7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGNhdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChjYXRzW2ldIS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjYXQgPSBjYXRzW2ldIS5zcGxpdCgnfCcpO1xuXHRcdFx0Y29uc3Qga2V5ID0gY2F0Lmxlbmd0aCA+IDEgPyBjYXRbMV0hIDogbnVsbDtcblx0XHRcdGNvbnN0IGNhdE5hbWUgPSBjYXRbMF0hO1xuXHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdGxpbmsuaHJlZiA9IHdpa2lQYWdlUGF0aChgJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7Y2F0TmFtZX1gKTtcblx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoY2F0TmFtZSwgdHJ1ZSkpO1xuXHRcdFx0bGluay50aXRsZSA9IGNhdE5hbWU7XG5cdFx0XHRjb25zdCBzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0c3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRpZiAoIWkpIHtcblx0XHRcdFx0Y2F0TGluZSEuaW5zZXJ0QmVmb3JlKG1ha2UoJyAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdH1cblx0XHRcdGJlZm9yZSEuYmVmb3JlKHNwYW4pO1xuXHRcdFx0aWYgKGJlZm9yZSAmJiBpICsgMSA8IGNhdHMubGVuZ3RoKSB7XG5cdFx0XHRcdGJlZm9yZS5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUobWFrZSgnIHwgJywgdHJ1ZSksIGJlZm9yZSk7XG5cdFx0XHR9XG5cdFx0XHRuZXdTcGFuc1tuZXdTcGFucy5sZW5ndGhdID0ge1xuXHRcdFx0XHRlbGVtZW50OiBzcGFuLFxuXHRcdFx0XHR0aXRsZTogY2F0TmFtZSxcblx0XHRcdFx0a2V5LFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0Ly8gQW5kIGNoYW5nZSB0aGUgbGFzdCBvbmUuLi5cblx0XHRpZiAoYmVmb3JlKSB7XG5cdFx0XHRiZWZvcmUucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKG1ha2UoJyB8ICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IG5ld1NwYW4gb2YgbmV3U3BhbnMpIHtcblx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcihjYXRMaW5lISwgbmV3U3Bhbi5lbGVtZW50LCBuZXdTcGFuLnRpdGxlLCBuZXdTcGFuLmtleSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBudWxsO1xufTtcbmNvbnN0IGdldFN0YXRlID0gKCk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHRsZXQgcmVzdWx0OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdGxldCB0ZXh0ID0gZWRpdG9yLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRjb25zdCBrZXkgPSBlZGl0b3IuY3VycmVudEtleTtcblx0XHRpZiAodGV4dCAmJiB0ZXh0Lmxlbmd0aCA+IDApIHtcblx0XHRcdGlmIChrZXkgIT09IG51bGwpIHtcblx0XHRcdFx0dGV4dCArPSBgfCR7a2V5fWA7XG5cdFx0XHR9XG5cdFx0XHRpZiAocmVzdWx0ID09PSBudWxsKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHRleHQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQgKz0gYFxcbiR7dGV4dH1gO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTtcbmNvbnN0IHJlYWxseV9ydW4gPSAoKTogdm9pZCA9PiB7XG5cdGluaXRpYWxpemUoKTtcblx0aWYgKFxuXHRcdCFIQy51cGxvYWRfZGlzYWJsZWQgJiZcblx0XHRjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAtMSAmJlxuXHRcdGNvbmYud2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdVcGxvYWQnICYmXG5cdFx0Y29uZi53Z1VzZXJOYW1lXG5cdCkge1xuXHRcdHNldHVwX3VwbG9hZCgpO1xuXHRcdHNldHVwKCgpID0+IHtcblx0XHRcdC8vIENoZWNrIGZvciBzdGF0ZSByZXN0b3JhdGlvbiBvbmNlIHRoZSBzZXR1cCBpcyBkb25lIG90aGVyd2lzZSwgYnV0IGJlZm9yZSBzaWduYWxsaW5nIHNldHVwIGNvbXBsZXRpb25cblx0XHRcdGlmICh3aW5kb3cuVXBsb2FkRm9ybSAmJiB3aW5kb3cuVXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUpIHtcblx0XHRcdFx0d2luZG93LlVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlID0gc2V0U3RhdGUod2luZG93LlVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRpZiAoXG5cdFx0XHQhY29uZi53Z0lzQXJ0aWNsZSB8fFxuXHRcdFx0Y29uZi53Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8XG5cdFx0XHRwYXJhbSgnZGlmZicpICE9PSBudWxsIHx8XG5cdFx0XHRwYXJhbSgnb2xkaWQnKSAhPT0gbnVsbCB8fFxuXHRcdFx0IWNhbl9lZGl0KCkgfHxcblx0XHRcdEhDLmRpc2FibGUoKVxuXHRcdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRnZXRQYWdlKCk7XG5cdH1cbn07XG5jb25zdCBydW4gPSAoKTogdm9pZCA9PiB7XG5cdGlmIChIQy5zdGFydGVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdEhDLnN0YXJ0ZWQgPSB0cnVlO1xuXHRyZWFsbHlfcnVuKCk7XG59O1xuLy8gRXhwb3J0IGxlZ2FjeSBmdW5jdGlvbnNcbndpbmRvdy5ob3RjYXRfZ2V0X3N0YXRlID0gKCk6IHN0cmluZyB8IG51bGwgPT4ge1xuXHRyZXR1cm4gZ2V0U3RhdGUoKTtcbn07XG53aW5kb3cuaG90Y2F0X3NldF9zdGF0ZSA9IChzdGF0ZTogc3RyaW5nKTogbnVsbCA9PiB7XG5cdHJldHVybiBzZXRTdGF0ZShzdGF0ZSk7XG59O1xud2luZG93LmhvdGNhdF9jbG9zZV9mb3JtID0gKCk6IHZvaWQgPT4ge1xuXHRjbG9zZUZvcm0oKTtcbn07XG5IQy5ydW5XaGVuUmVhZHkgPSAoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0Ly8gcnVuIHVzZXItcmVnaXN0ZXJlZCBjb2RlIG9uY2UgSG90Q2F0IGlzIGZ1bGx5IHNldCB1cCBhbmQgcmVhZHkuXG5cdG13Lmhvb2soJ2hvdGNhdC5yZWFkeScpLmFkZChjYWxsYmFjayk7XG59O1xuLy8gUnVuIGFzIHNvb24gYXMgcG9zc2libGUuIFRoaXMgdmFyaWVzIGRlcGVuZGluZyBvbiBNZWRpYVdpa2kgdmVyc2lvbjtcbi8vIHdpbmRvdydzICdsb2FkJyBldmVudCBpcyBhbHdheXMgc2FmZSwgYnV0IHVzdWFsbHkgd2UgY2FuIGRvIGJldHRlciB0aGFuIHRoYXQuXG5pZiAoY29uZi53Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSAhPT0gJ1VwbG9hZCcpIHtcblx0Ly8gUmVsb2FkIEhvdENhdCBhZnRlciAoVkUpIGVkaXRzIChidWcgVDEwMzI4NSlcblx0bXcuaG9vaygncG9zdEVkaXQnKS5hZGQoKCkgPT4ge1xuXHRcdC8vIFJlc2V0IEhvdENhdCBpbiBjYXNlIHRoaXMgaXMgYSBzb2Z0IHJlbG9hZCAoZS5nLiBWaXN1YWxFZGl0b3IgZWRpdCksIHVubGVzcyB0aGUgY2F0ZWdvcmllc1xuXHRcdC8vIHdlcmUgbm90IHJlLXJlbmRlcmVkIGFuZCBvdXIgaW50ZXJmYWNlIGlzIHN0aWxsIHRoZXJlIChlLmcuIERpc2N1c3Npb25Ub29scyBlZGl0KVxuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0bGlua3MgLmhvdGNhdGxpbmsnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjYXRMaW5lID0gbnVsbDtcblx0XHRlZGl0b3JzID0gW107XG5cdFx0aW5pdGlhbGl6ZWQgPSBmYWxzZTtcblx0XHRIQy5zdGFydGVkID0gZmFsc2U7XG5cdFx0cnVuKCk7XG5cdH0pO1xufVxuXG5leHBvcnQge3J1bn07XG4iLCAiY29uc3QgZ2V0TWVzc2FnZSA9IChrZXk6IHN0cmluZywgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xuXHRrZXkgPSBgaG90Y2F0LSR7a2V5fWA7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gbXcubWVzc2FnZShrZXksIC4uLmFyZ3MpLnBsYWluKCk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMi41XCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHhsaW5rOmhyZWY9XCIjYVwiIGlkPVwiYlwiIHgxPVwiOTIuNjA0XCIgeDI9XCIyNjMuODNcIiB5MT1cIjMwNC41MVwiIHkyPVwiMjYuMjlcIiBncmFkaWVudFRyYW5zZm9ybT1cInJvdGF0ZSgtMzEuNjEgMTUuMjEgNi40MDMpc2NhbGUoLjA1NTQ0KVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiLz48bGluZWFyR3JhZGllbnQgaWQ9XCJhXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjYTBhM2UxXCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiI2RlZGNmYVwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPVwidXJsKCNiKVwiIGQ9XCJNMjEuNDcxIDYuMDM0QTguNDI3IDEwLjUzNCA1OC4zOSAxIDEgMy41MjggMTcuMDc3IDguNDI3IDEwLjUzNCA1OC4zOSAxIDEgMjEuNDcxIDYuMDM0XCIvPjx1c2UgeGxpbms6aHJlZj1cIiNjXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzNjBcIiBvcGFjaXR5PVwiLjNcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMS4xMDkgMS4xMDkpXCIvPjxwYXRoIGlkPVwiY1wiIGZpbGw9XCIjMDAwXCIgZmlsbC1vcGFjaXR5PVwiMVwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJidXR0XCIgc3Ryb2tlLWxpbmVqb2luPVwibWl0ZXJcIiBzdHJva2Utb3BhY2l0eT1cIjFcIiBzdHJva2Utd2lkdGg9XCIuMDU1XCIgZD1cIk03Ljc3MSAxNy4yNzZoMi4xNjRjLjkwNS0yLjc2NyA0LjQyNy05LjM3NCA3LjQ0Ni0xMS42ODguNjI2LS44MDQtLjk0Ni0xLjEzNi0yLjIxNC0uNjA0LTEuOTEuODAyLTcuOSAxMS4xMzUtNy4zOTYgMTIuMjkyTTkuMDczIDUuMzFINi44NTZjLS4xOTYuMzM1IDcuMDQ1IDguNjk3IDkuMzYgMTEuNzE2LjgwMy42MjYgMS4xMzUtLjk0Ni42MDMtMi4yMTQtLjgwMi0xLjkxLTYuNzkzLTcuNzEtNy43NDYtOS41MDJcIi8+PC9zdmc+IiwgIjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyMi41XCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHhsaW5rOmhyZWY9XCIjYVwiIGlkPVwiYlwiIHgxPVwiOTIuNjA0XCIgeDI9XCIyNjMuODNcIiB5MT1cIjMwNC41MVwiIHkyPVwiMjYuMjlcIiBncmFkaWVudFRyYW5zZm9ybT1cInJvdGF0ZSgtMzEuNjEgMTUuMjEgNi40MDMpc2NhbGUoLjA1NTQ0KVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiLz48bGluZWFyR3JhZGllbnQgaWQ9XCJhXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjYTBhM2UxXCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiI2RlZGNmYVwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBmaWxsPVwidXJsKCNiKVwiIGQ9XCJNMjEuNDcyIDYuMDM0QTguNDI4IDEwLjUzNCA1OC4zOTEgMSAxIDMuNTI4IDE3LjA3NyA4LjQyOCAxMC41MzQgNTguMzkxIDEgMSAyMS40NzIgNi4wMzRcIi8+PHVzZSB4bGluazpocmVmPVwiI2NcIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjM2MFwiIG9wYWNpdHk9XCIuM1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxLjEwOSAxLjEwOSlcIi8+PHBhdGggaWQ9XCJjXCIgZmlsbD1cIiMwMDBcIiBmaWxsLW9wYWNpdHk9XCIxXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cImJ1dHRcIiBzdHJva2UtbGluZWpvaW49XCJtaXRlclwiIHN0cm9rZS1vcGFjaXR5PVwiMVwiIHN0cm9rZS13aWR0aD1cIi4wNTVcIiBkPVwiTTUuNjQgMTMuODRzMi41MTUgMi44MzMgMy4wMTggMy45OWgyLjE2NGMuOTA1LTIuNzY3IDQuNDI3LTkuMzczIDcuNDQ2LTExLjY4OC42MjYtLjgwNC0uOTQ1LTEuMTM2LTIuMjEzLS42MDMtMS45MTIuODAyLTUuNTE2IDYuOTI4LTYuMTkgOC40MDItLjk1NS4yNTItMS45NjItMS42MS0xLjk2Mi0xLjYxWlwiLz48L3N2Zz4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUd4QixJQUFNQyxRQUF5Q0MsZUFBYztBQUM1RCxVQUFBLEdBQU9ILGtCQUFBSSxXQUFVRCxTQUFTO0FBQzNCOztDQ01DLFNBQVNFLGNBQWM7QUFDdkIsTUFDQ0MsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUIsTUFBTSxLQUN2Q0MsT0FBT0Msa0NBQ1AsQ0FBQ0MsU0FBU0MsY0FBYyxrQkFBa0IsR0FDekM7QUFDRDtFQUNEO0FBQ0EsUUFBTUMsT0FBTVgsTUFBTSxpQkFBaUI7QUFDbkMsUUFBTVksd0JBQXdCO0FBQzlCLFFBQU1DLFdBQVc7QUFDakIsUUFBTUMsa0JBQWtCO0FBQ3hCLFFBQU1DLGNBQWNYLEdBQUdZLFFBQVFWLElBQUlRLGVBQWU7QUFPbEQsUUFBTUcsY0FBZUMsZUFBOEI7QUFDbEQsV0FBT0MsRUFBRSxRQUFRLEVBQUVDLEtBQUssU0FBQSxxQkFBQUMsT0FBOEJILFNBQVMsQ0FBRSxFQUFFSSxLQUFLLEdBQUc7RUFDNUU7QUFDQSxRQUFNQyxtQkFBbUJBLENBQUNDLFVBQStCQyxNQUFjQyxVQUF1QztBQUM3RyxXQUFPUCxFQUFFLE9BQU8sRUFDZFEsU0FBUyxxQkFBcUIsRUFDOUJDLE9BQ0FULEVBQUUsT0FBTyxFQUNQQyxLQUFLLFNBQUEsK0JBQUFDLE9BQXdDSyxLQUFLLENBQUUsRUFDcERHLElBQUk7TUFDSixjQUFjO01BQ2RDLFNBQVM7SUFDVixDQUFDLEVBQ0FGLE9BQU9ULEVBQUUsS0FBSyxFQUFFUyxPQUFPWCxZQUFZUSxJQUFJLEVBQUVJLElBQUksZUFBZSxPQUFPLEdBQUdMLFFBQVEsQ0FBQyxDQUNsRjtFQUNGO0FBR0FMLElBQUUsTUFBTSxFQUFFWSxJQUFJLDJCQUEyQixxQkFBcUIsU0FBVUMsR0FBRztBQUFBLFFBQUFDO0FBQzFFLFFBQUlsQixnQkFBZ0IsWUFBWTtBQUMvQixhQUFPO0lBQ1I7QUFDQSxVQUFNbUIsT0FBTztBQUViLFVBQU1DLFVBQUFGLHdCQUFVQyxLQUFLRSxXQUFtQ0MsV0FBQSxRQUFBSiwwQkFBQSxTQUFBLFNBQXhDQSxzQkFBK0NLLFFBQVExQix1QkFBdUIsRUFBRTtBQUNoRyxRQUFJMkI7QUFDSixRQUFJQztBQUNKLFFBQUlDO0FBQ0osUUFBSUM7QUFDSixRQUFJQztBQUNKLFVBQU1DLFdBQVdBLE1BQU07QUFDckJWLFdBQUtXLFVBQStCUixRQUFBLCtEQUFBaEIsT0FDNEJhLEtBQUtXLFVBQStCUixLQUFLO0FBRXpHSCxXQUFLRSxXQUFtQ0MsUUFBUUY7SUFDbEQ7QUFDQSxVQUFNVyxlQUFnQkMsU0FBZ0I7QUFDckMzQyxTQUFHWSxRQUFRZ0MsSUFBSWxDLGlCQUFpQmlDLEtBQUssS0FBSyxLQUFLLEtBQUssQ0FBQztJQUN0RDtBQUNBLFVBQU1FLGNBQWNBLE1BQU07QUFBQSxVQUFBQztBQUN6Qi9CLFFBQUVWLFFBQVEsRUFBRTBDLElBQUkscUJBQXFCO0FBQ3JDLE9BQUFELFlBQUFQLGNBQUEsUUFBQU8sY0FBQSxVQUFBQSxVQUFVRSxPQUFPO0FBQ2pCakMsUUFBRSxNQUFNLEVBQUVrQyxLQUFLLG1CQUFtQixFQUFFQyxRQUFRLFFBQVE7SUFDckQ7QUFDQSxVQUFNQyxlQUFnQkMsa0JBQTBCO0FBQUEsVUFBQUM7QUFDL0MsVUFBSUQsaUJBQUFDLHdCQUFpQmxCLG9CQUFvQixDQUFDLE9BQUEsUUFBQWtCLDBCQUFBLFVBQXJCQSxzQkFBNkNDLFNBQVM7QUFDMUVaLHFCQUFhVSxZQUFZO01BQzFCO0FBQ0FQLGtCQUFZO0lBQ2I7QUFDQSxVQUFNVSxXQUFXLFNBQTZCQyxJQUFrQjtBQUMvREEsU0FBR0MsZUFBZTtBQUNsQixVQUFJckIsZUFBZXNCLFNBQVMsdUJBQXVCLEdBQUc7QUFDckQ7TUFDRDtBQUNBLFlBQU1DLE1BQTJCNUMsRUFBRSxJQUFJO0FBQ3ZDNEMsVUFBSVosSUFBSSxPQUFPLEVBQUU3QixLQUFLLGNBQWM7QUFDcENrQixxQkFBZWIsU0FBUyx1QkFBdUI7QUFDL0MsWUFBTXFDLFNBQTRCO1FBQ2pDQyxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsT0FBQSxRQUFBOUMsT0FBZWpCLEdBQUdDLE9BQU9DLElBQUksWUFBWSxHQUFDLFlBQUE7UUFDMUM4RCxTQUFBLEdBQUEvQyxPQUFZUixVQUFRLDhCQUFBO1FBQ3BCd0QsWUFBWU4sSUFBSU8sS0FBSyxTQUFTO01BQy9CO0FBQ0EsWUFBTUMsV0FBWUMsY0FBd0Q7QUFDekUsWUFBSSxDQUFDQSxVQUFVO0FBQ2Q7UUFDRDtBQUNBLFlBQUlBLFNBQVNDLE9BQU87QUFDbkIsZUFBS3JFLEdBQUdzRSxPQUFBLG1EQUFBckQsT0FDNENtRCxTQUFTQyxNQUFNRSxNQUFJLElBQUEsRUFBQXRELE9BQUttRCxTQUFTQyxNQUFNRyxJQUFJLEdBQzlGO1lBQUNDLEtBQUs7WUFBZUMsTUFBTTtVQUFPLENBQ25DO0FBQ0FmLGNBQUl6QyxLQUFLLGFBQWE7UUFDdkIsT0FBTztBQUNOeUMsY0FBSXpDLEtBQUssT0FBTztBQUNoQmtCLHlCQUFldUMsS0FBSztRQUNyQjtNQUNEO0FBQ0EsV0FBS3BFLEtBQUlxRSxjQUFjLFFBQVFoQixNQUFNLEVBQUVpQixLQUFLVixRQUFRO0lBQ3JEO0FBTUEsVUFBTVcsU0FBU0EsTUFBTTtBQUNwQjNDLDRCQUFzQnBCLEVBQUUsU0FBUyxFQUMvQkMsS0FBSztRQUNMMEQsTUFBTTtRQUNOSyxJQUFJO01BQ0wsQ0FBQyxFQUNBQyxHQUFHLFVBQVUsV0FBWTtBQUN6QixZQUFLLEtBQTBCMUIsU0FBUztBQUN2Q2xCLHlCQUFlNkMsS0FBSztRQUNyQixPQUFPO0FBQ043Qyx5QkFBZXVDLEtBQUs7UUFDckI7TUFDRCxDQUFDO0FBQ0Z0QyxzQkFBZ0J0QixFQUFFLE1BQU07QUFDeEJBLFFBQUUsTUFBTSxFQUNOUyxPQUNBVCxFQUFFLEtBQUssRUFDTEMsS0FBSyxRQUFRLEdBQUcsRUFDaEJFLEtBQUssdUJBQXVCLEVBQzVCZ0QsS0FBSyxXQUFXLGlEQUFpRCxFQUNqRWMsR0FBRyxTQUFTekIsUUFBUSxDQUN2QixFQUNDMkIsU0FBUzdDLGFBQWE7QUFDeEJ0QixRQUFFLE1BQU0sRUFDTlMsT0FDQVQsRUFBRSxLQUFLLEVBQ0xDLEtBQUssUUFBUSxHQUFHLEVBQ2hCRSxLQUFLLDBFQUEwRSxFQUMvRWdELEtBQUssV0FBVywyQ0FBMkMsRUFDM0RjLEdBQUcsU0FBU3pCLFFBQVEsQ0FDdkIsRUFDQzJCLFNBQVM3QyxhQUFhO0FBQ3hCRCx1QkFBaUJqQixpQkFDaEJKLEVBQUUsUUFBUSxFQUFFRyxLQUFLLHdDQUF3QyxFQUFFTSxPQUFPYSxhQUFhLEdBQy9FLDBCQUNBLHdCQUNEO0FBQ0FDLGdCQUFVdkIsRUFBRSxPQUFPLEVBQ2pCUyxPQUNBVCxFQUFFLFFBQVEsRUFDUlUsSUFBSTtRQUNKLGFBQWE7UUFDYixlQUFlO01BQ2hCLENBQUMsRUFDQUQsT0FDQVQsRUFBRSxRQUFRLEVBQUVHLEtBQUssd0JBQXdCLEVBQUVPLElBQUk7UUFDOUMsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQjBELFNBQVM7TUFDVixDQUFDLEdBQ0RwRSxFQUFFLFFBQVEsRUFBRUcsS0FBSyxJQUFJLENBQ3RCLENBQ0YsRUFDQ00sT0FDQSxRQUNBVyxxQkFDQXBCLEVBQUUsU0FBUyxFQUFFQyxLQUFLLE9BQU8saUNBQWlDLEVBQUVFLEtBQUssaUJBQWlCLEdBQ2xGLE1BQ0QsRUFDQ00sT0FBT3hCLEdBQUdvRixLQUFLQyxPQUFPLElBQUksS0FBS2pELGVBQWV1QyxLQUFLLENBQUM7QUFDdERwQyxpQkFBV3hCLEVBQUUsT0FBTyxFQUFFUSxTQUFTLHNCQUFzQixFQUFFUCxLQUFLLFFBQVEsY0FBYztBQUNsRnNCLGdCQUFVdkIsRUFBRSxPQUFPLEVBQ2pCUSxTQUFTLHFCQUFxQixFQUM5QlAsS0FBSztRQUFDc0UsTUFBTTtRQUFVLGNBQWM7UUFBUSxtQkFBbUI7TUFBMkIsQ0FBQyxFQUMzRkMsUUFBUXhFLEVBQUUsTUFBTSxFQUFFQyxLQUFLLE1BQU0sMkJBQTJCLEVBQUVFLEtBQUssMkJBQTJCLENBQUMsRUFDM0ZNLE9BQU9jLE9BQU8sRUFDZGQsT0FDQVQsRUFBRSxPQUFPLEVBQ1BRLFNBQVMsNkJBQTZCLEVBQ3RDQyxPQUNBVCxFQUFFLFVBQVUsRUFDVkMsS0FBSyxRQUFRLFFBQVEsRUFDckJFLEtBQUssYUFBYSxFQUNsQjhELEdBQUcsU0FBUyxNQUFNO0FBQ2xCeEMsaUJBQVM7QUFDVFcscUJBQWEsTUFBTTtNQUNwQixDQUFDLEdBQ0ZwQyxFQUFFLFVBQVUsRUFDVkMsS0FBSyxRQUFRLFFBQVEsRUFDckJFLEtBQUssYUFBYSxFQUNsQjhELEdBQUcsU0FBUyxNQUFNO0FBQ2xCN0IscUJBQWEsVUFBVTtNQUN4QixDQUFDLENBQ0gsQ0FDRjtBQUNEWixlQUFTZixPQUFPYyxPQUFPLEVBQUU0QyxTQUFTLE1BQU07QUFDeEM1QyxjQUFRVyxLQUFLLFFBQVEsRUFBRXVDLE1BQU0sRUFBRXRDLFFBQVEsT0FBTztBQUM5Q1gsZUFBU3lDLEdBQUcsU0FBVVMsV0FBVTtBQUMvQixZQUFJQSxNQUFNQyxXQUFXbkQsU0FBUyxDQUFDLEdBQUc7QUFDakNNLHNCQUFZO1FBQ2I7TUFDRCxDQUFDO0FBQ0Q5QixRQUFFVixRQUFRLEVBQUUyRSxHQUFHLHVCQUF3QlMsV0FBVTtBQUNoRCxZQUFJQSxNQUFNRSxRQUFRLFVBQVU7QUFDM0I1RSxZQUFFVixRQUFRLEVBQUUwQyxJQUFJLHFCQUFxQjtBQUNyQ0Ysc0JBQVk7UUFDYjtNQUNELENBQUM7SUFDRjtBQUVBLFFBQUlkLFdBQVlELEtBQUtFLFdBQW1DQyxPQUFPO0FBQzlELFVBQUk5QixPQUFPeUYsNEJBQTRCakYsZ0JBQWdCLFFBQVE7QUFDOUQ2QixpQkFBUztBQUNULGVBQU87TUFDUjtBQUNBWixRQUFFNkIsZUFBZTtBQUNqQnFCLGFBQU87SUFDUjtBQUNBLFdBQU87RUFDUixDQUFDO0FBRUQsUUFBTWUsVUFBVTlFLEVBQUUsS0FBSyxFQUNyQkMsS0FBSztJQUNMOEUsTUFBTTtJQUNOL0IsT0FBTztFQUNSLENBQUMsRUFDQXZDLE9BQU8sS0FBSyxFQUNaTixLQUFLLHNCQUFzQjtBQUM3QjJFLFVBQVFiLEdBQUcsU0FBUyxTQUFVcEQsR0FBRztBQUNoQ0EsTUFBRTZCLGVBQWU7QUFDakIsVUFBTUUsTUFBTTVDLEVBQUUsSUFBSTtBQUNsQjRDLFFBQUlaLElBQUksT0FBTztBQUNmLFVBQU1nRCxTQUFVQyxZQUFtQjtBQUNsQyxVQUFJLENBQUNBLFFBQVE7QUFDWjtNQUNEO0FBQ0FyQyxVQUFJekMsS0FBSyxRQUFRO0FBQ2pCLFlBQU1BLE9BQU84RSxPQUFPOUQsUUFBUTFCLHVCQUF1QixFQUFFO0FBQ3JELFVBQUlVLFNBQVM4RSxRQUFRO0FBQ3BCckMsWUFBSXpDLEtBQUsscUJBQXFCO0FBQzlCO01BQ0Q7QUFDQSxZQUFNMEMsU0FBNEI7UUFDakMxQztRQUNBMkMsUUFBUTtRQUNSQyxRQUFRO1FBQ1JDLE9BQU8vRCxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7UUFDakM4RCxTQUFBLEdBQUEvQyxPQUFZUixVQUFRLG1HQUFBO1FBQ3BCd0YsVUFBVTtNQUNYO0FBQ0EsWUFBTTlCLFdBQVlDLGNBQXdEO0FBQ3pFLFlBQUksQ0FBQ0EsVUFBVTtBQUNkO1FBQ0Q7QUFDQSxZQUFJQSxTQUFTQyxPQUFPO0FBQ25CLGVBQUtyRSxHQUFHc0UsT0FBQSxxREFBQXJELE9BQzhDbUQsU0FBU0MsTUFBTUUsTUFBSSxJQUFBLEVBQUF0RCxPQUFLbUQsU0FBU0MsTUFBTUcsSUFBSSxHQUNoRztZQUNDQyxLQUFLO1lBQ0xDLE1BQU07VUFDUCxDQUNEO0FBQ0FmLGNBQUl6QyxLQUFLLGFBQWE7UUFDdkIsT0FBTztBQUNOeUMsY0FBSXpDLEtBQUssWUFBWTtRQUN0QjtBQUNBLGNBQU1nRixRQUFRbkYsRUFBRSxNQUFNO0FBQ3RCbUYsY0FBTWpELEtBQUssa0JBQWtCLEVBQUUwQixLQUFLO01BQ3JDO0FBQ0FoQixVQUFJekMsS0FBSyxTQUFTO0FBQ2xCLFdBQUtYLEtBQUlxRSxjQUFjLFFBQVFoQixNQUFNLEVBQUVpQixLQUFLVixRQUFRO0lBQ3JEO0FBQ0FSLFFBQUl6QyxLQUFLLE9BQU87QUFDaEIsU0FBS0gsRUFBRW9GLEtBQUs7TUFDWEMsS0FBS3BHLEdBQUdDLE9BQU9DLElBQUksVUFBVTtNQUM3QmdFLE1BQU07UUFDTEwsUUFBUTtRQUNSRSxPQUFPL0QsR0FBR0MsT0FBT0MsSUFBSSxZQUFZLEVBQUVnQyxRQUFRLE1BQU0sR0FBRztNQUNyRDtNQUNBbUUsVUFBVTtNQUNWaEMsT0FBT0EsTUFBTTtBQUNaVixZQUFJekMsS0FBSyxRQUFRO01BQ2xCO01BQ0FvRixTQUFTUDtNQUNUckIsTUFBTTtNQUNONkIsT0FBTztJQUNSLENBQUM7RUFDRixDQUFDO0FBQ0R4RixJQUFFLFNBQVN5RixrQkFBa0I7QUFDNUIsVUFBTU4sUUFBUW5GLEVBQUUsTUFBTTtBQUN0Qm1GLFVBQU1qRCxLQUFLLFdBQVcsRUFBRUEsS0FBSyxVQUFVLEVBQUV6QixPQUFPVCxFQUFFLE1BQU0sRUFBRVMsT0FBT3FFLE9BQU8sQ0FBQztFQUMxRSxDQUFDO0FBQ0YsR0FBRzs7QUN2U0gsSUFBTVksT0FBdUJ6RyxHQUFHQyxPQUFPLFFBQVE7O0FDTy9DLElBQUF5RyxxQkFBc0IvRyxRQUFBLGlCQUFBOztBQ1h0QixJQUFNZ0gsaUJBQWlCQSxNQUFZO0FBQ2xDLFFBQU07SUFBQ0M7RUFBYyxJQUFJNUcsR0FBR0MsT0FBT0MsSUFBSTtBQUV2QyxNQUFJLENBQUMsV0FBVyxTQUFTLFNBQVMsT0FBTyxFQUFFMkcsU0FBU0QsY0FBYyxHQUFHO0FBQ3BFNUcsT0FBRzhHLFNBQVNsRSxJQUFJO01BQ2YsK0JBQStCO01BQy9CLG9DQUFvQztNQUNwQyw2QkFBNkI7O01BRTdCLGlDQUFpQztNQUNqQyxnQ0FBZ0M7TUFDaEMsOEJBQThCO01BQzlCLGdDQUFnQztNQUNoQyxpQ0FBaUM7O01BRWpDLDBCQUEwQjs7O01BRzFCLHlCQUF5QjtNQUN6QixnQ0FBZ0M7Ozs7TUFJaEMsNEJBQTRCOzs7OztNQUs1Qix5QkFBeUI7TUFDekIsNkJBQTZCOzs7Ozs7OztNQVE3QixtQ0FBbUM7OztNQUduQywwQkFBMEI7OztNQUcxQixzQkFBc0I7OztNQUd0QiwwQkFBMEI7OztNQUcxQiwrQkFDQzs7TUFFRCxxQkFBcUI7O01BRXJCLG1DQUFtQztNQUNuQyxnQ0FBZ0M7TUFDaEMsZ0NBQWdDO01BQ2hDLDhCQUE4QjtNQUM5QixpQ0FBaUM7O01BRWpDLDBCQUEwQjtNQUMxQiwwQkFBMEI7TUFDMUIsdUJBQXVCO01BQ3ZCLDJCQUEyQjtNQUMzQix3QkFBd0I7TUFDeEIsd0JBQXdCO01BQ3hCLHNCQUFzQjs7TUFFdEIsd0JBQXdCO0lBQ3pCLENBQUM7RUFDRixPQUFPO0FBQ041QyxPQUFHOEcsU0FBU2xFLElBQUk7TUFDZiwrQkFBK0I7TUFDL0Isb0NBQW9DO01BQ3BDLDZCQUE2Qjs7TUFFN0IsaUNBQWlDO01BQ2pDLGdDQUFnQztNQUNoQyw4QkFBOEI7TUFDOUIsZ0NBQWdDO01BQ2hDLGlDQUFpQzs7TUFFakMsMEJBQTBCOzs7TUFHMUIseUJBQXlCO01BQ3pCLGdDQUFnQzs7OztNQUloQyw0QkFBNEI7Ozs7O01BSzVCLDZCQUE2Qjs7Ozs7Ozs7TUFRN0IsbUNBQW1DOzs7TUFHbkMsMEJBQTBCOzs7TUFHMUIsc0JBQXNCOzs7TUFHdEIsMEJBQTBCOzs7TUFHMUIsK0JBQ0M7O01BRUQscUJBQXFCOztNQUVyQixtQ0FBbUM7TUFDbkMsZ0NBQWdDO01BQ2hDLGdDQUFnQztNQUNoQyw4QkFBOEI7TUFDOUIsaUNBQWlDOztNQUVqQywwQkFBMEI7TUFDMUIsMEJBQTBCO01BQzFCLHVCQUF1QjtNQUN2QiwyQkFBMkI7TUFDM0Isd0JBQXdCO01BQ3hCLHdCQUF3QjtNQUN4QixzQkFBc0I7O01BRXRCLHdCQUF3QjtJQUN6QixDQUFDO0VBQ0Y7QUFDRDs7QUN0SEEsSUFBQW1FLHFCQUE0QnBILFFBQUEsaUJBQUE7O0FDbkI1QixJQUFNcUgsYUFBYUEsQ0FBQ3JCLFFBQWdCc0IsU0FBMkI7QUFDOUR0QixRQUFBLFVBQUExRSxPQUFnQjBFLEdBQUc7QUFJbkIsU0FBTzNGLEdBQUdrSCxRQUFRdkIsS0FBSyxHQUFHc0IsSUFBSSxFQUFFRSxNQUFNO0FBQ3ZDOztBQ05BLElBQUFDLGVBQUE7O0FDQUEsSUFBQUMsZ0JBQUE7O0FIQUE7Ozs7Ozs7OztBQTRCQSxJQUFNQyxNQUFNMUgsTUFBTSxZQUFZO0FBRTlCLElBQU0ySCxLQUFtQjs7O0VBR3hCQyxPQUFPO0lBQ05DLFFBQVE7SUFDUnpFLFFBQVE7SUFDUjBFLEtBQUs7SUFDTEMsU0FBUztJQUNUQyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsSUFBSTtFQUNMO0VBQ0FDLFdBQVc7O0VBRVhDLFVBQVU7O0VBRVZDLFNBQVNBLE1BQWU7QUFDdkIsVUFBTUMsS0FBS3pCLEtBQUswQjtBQUNoQixVQUFNQyxRQUFRM0IsS0FBSzRCO0FBQ25CLFdBQ0NILEtBQUs7SUFFTEEsT0FBTztJQUVQQSxPQUFPO0lBRVBBLE9BQU87SUFFTkEsT0FBTyxLQUFLLENBQUN6QixLQUFLNkI7SUFFbEJKLE9BQU8sS0FBSyxjQUFjSyxLQUFLOUIsS0FBSytCLE9BQU87SUFFM0NKLFVBQVVGLE9BQU9FLE1BQU0sU0FBUyxLQUFLRixPQUFPRSxNQUFNLFdBQVcsS0FBS0YsT0FBT0UsTUFBTSxhQUFhLE1BQzdGO0VBRUY7OztFQUdBSyxjQUFjOztFQUVkQyxXQUFBLHNCQUFBekgsT0FBaUMwSCxtQkFBbUJ0QixhQUFJLENBQUM7RUFDekR1QixVQUFBLHNCQUFBM0gsT0FBZ0MwSCxtQkFBbUJ2QixZQUFHLENBQUM7Ozs7O0VBS3ZEeUIscUJBQXFCLENBQUM7Ozs7Ozs7OztFQVN0QkMscUJBQXFCOztFQUVyQkMsaUJBQWlCOzs7OztFQUtqQkMsV0FBVzs7O0VBR1hDLFlBQVk7OztFQUdaQyxlQUFlOzs7O0VBSWZDLGdCQUFnQjs7O0VBR2hCQyxlQUFlOztFQUVmQyxlQUFlOztFQUVmQyxhQUFhOztFQUViQyxjQUFjOztFQUVkQyxhQUFhOztFQUViQyxVQUFVOztFQUVWQyxjQUFjOzs7O0VBSWRDLHVCQUF1QjtFQUN2QkMsV0FBVztFQUNYQyxjQUFlQyxTQUE4QztBQUM1RCxRQUFJLENBQUNBLEtBQUs7QUFDVDtJQUNEO0FBQ0F2QyxPQUFHcUMsY0FBSHJDLEdBQUdxQyxZQUFjLENBQUM7QUFDbEIsYUFBU0csS0FBS0QsS0FBSztBQUNsQixVQUFJLENBQUNFLE9BQU9DLE9BQU9ILEtBQUtDLENBQUMsR0FBRztBQUMzQjtNQUNEO0FBQ0EsVUFBSUcsSUFBSUosSUFBSUMsQ0FBQztBQUNiLFVBQUksT0FBT0csTUFBTSxVQUFVO0FBQzFCO01BQ0Q7QUFDQUgsVUFBSUEsRUFBRUksS0FBSztBQUNYRCxVQUFJQSxFQUFFQyxLQUFLO0FBQ1gsVUFBSUosRUFBRUssV0FBVyxLQUFLRixFQUFFRSxXQUFXLEdBQUc7QUFDckM7TUFDRDtBQUNBN0MsU0FBR3FDLFVBQVVHLENBQUMsSUFBSUc7SUFDbkI7RUFDRDs7RUFFQUcsb0JBQW9CO0VBQ3BCQyxpQkFBaUI7RUFDakJDLGlCQUFpQjtBQUNsQjtBQUNBcEssT0FBT3FLLFNBQVNqRDtBQUdoQixJQUFNa0QsS0FBS0MsVUFBVTdLLFVBQVU4SyxZQUFZO0FBQzNDLElBQU1DLFlBQVksbUJBQW1CckMsS0FBS2tDLEVBQUUsS0FBSyxDQUFDQSxHQUFHNUQsU0FBUyxTQUFTO0FBQ3ZFLElBQUlnRSxhQUE0QjtBQUNoQyxJQUFJQyxnQkFBZ0I7QUFHcEIsSUFBTUMsZ0JBQWdCQyxPQUFPQyxJQUFBQyxvQkFBQUEsa0JBQUFDLHVCQUFBLENBQUEsNkJBQUEsR0FBQSxDQUFBLCtFQUFBLENBQUEsRUFBQTtBQUM3QixJQUFNQyxrQkFBa0IsSUFBSUMsT0FBT04sZUFBZSxHQUFHO0FBU3JELElBQU1PLHNCQUFzQk4sT0FBT0MsSUFBQU0scUJBQUFBLG1CQUFBSix1QkFBQSxDQUFBLDBCQUFBLEdBQUEsQ0FBQSx1RkFBQSxDQUFBLEVBQUE7QUFTbkMsSUFBTUssc0JBQXNCL0UsS0FBS2dGO0FBQ2pDLElBQU1DLGVBQWVqRixLQUFLNEI7QUFDMUIsSUFBTXNELGVBQWVBLENBQUNDLGlCQUF5QkMsYUFBNkI7QUFBQSxNQUFBQztBQUMzRSxRQUFNQyxrQkFBbUJDLFVBQTBCO0FBQ2xELFFBQUksQ0FBQ0EsUUFBUUEsS0FBSzVCLFdBQVcsR0FBRztBQUMvQixhQUFPO0lBQ1I7QUFDQSxRQUFJNkIsYUFBYTtBQUNqQixhQUFTQyxJQUFJLEdBQUdBLElBQUlGLEtBQUs1QixRQUFROEIsS0FBSztBQUNyQyxZQUFNQyxVQUFVSCxLQUFLSSxPQUFPRixDQUFDO0FBQzdCLFlBQU1HLEtBQUtGLFFBQVF4QixZQUFZO0FBQy9CLFlBQU0yQixLQUFLSCxRQUFRSSxZQUFZO0FBQy9CTixvQkFBY0ksT0FBT0MsS0FBS0gsVUFBQSxJQUFBbEwsT0FBY29MLEVBQUUsRUFBQXBMLE9BQUdxTCxJQUFFLEdBQUE7SUFDaEQ7QUFDQSxXQUFPTCxXQUFXL0osUUFBUSxtQkFBbUI4SSxPQUFPQyxJQUFBdUIscUJBQUFBLG1CQUFBckIsdUJBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxDQUFRLEVBQUVqSixRQUFRa0osaUJBQWlCTCxhQUFhO0VBQ3JHO0FBQ0FjLGFBQVdBLFNBQVNsQixZQUFZO0FBQ2hDLFFBQU04QixjQUFBWCx3QkFBYU4sb0JBQW9CUixPQUFPWSxlQUFlLENBQUMsT0FBQSxRQUFBRSwwQkFBQSxTQUFBQSx3QkFBSyxJQUFJbkIsWUFBWTtBQUNuRixNQUFJK0IsU0FBU1gsZ0JBQWdCVSxTQUFTO0FBQ3RDLE1BQUlaLFlBQVlZLGNBQWNaLFVBQVU7QUFDdkNhLGNBQUEsSUFBQXpMLE9BQWM4SyxnQkFBZ0JGLFFBQVEsQ0FBQztFQUN4QztBQUNBLE1BQUlILGNBQWM7QUFDakIsZUFBV2lCLFlBQVlqQixjQUFjO0FBQ3BDLFVBQ0MsT0FBT2lCLGFBQWEsWUFDcEJBLFNBQVNoQyxZQUFZLE1BQU04QixhQUMzQkUsU0FBU2hDLFlBQVksTUFBTWtCLFlBQzNCSCxhQUFhaUIsUUFBUSxNQUFNZixpQkFDMUI7QUFDRGMsa0JBQUEsSUFBQXpMLE9BQWM4SyxnQkFBZ0JZLFFBQVEsQ0FBQztNQUN4QztJQUNEO0VBQ0Q7QUFDQSxTQUFPRDtBQUNSO0FBQ0FuRixHQUFHOEMsc0JBQUF1Qyx5QkFBcUJwQixvQkFBb0IsSUFBSSxPQUFBLFFBQUFvQiwyQkFBQSxTQUFBQSx5QkFBSztBQUNyRHJGLEdBQUcrQyxrQkFBa0JxQixhQUFhLElBQUksVUFBVTtBQUNoRCxJQUFJSCxvQkFBb0IsSUFBSSxHQUFHO0FBQzlCakUsS0FBR2dELGtCQUFrQm9CLGFBQWEsSUFBSSxVQUFVO0FBQ2pEO0FBYUEsSUFBTWtCLE9BQVFBLENBQUNDLEtBQWFDLFlBQW1DO0FBQzlELE1BQUksQ0FBQ0QsS0FBSztBQUNULFdBQU87RUFDUjtBQUNBLFNBQU9DLFVBQVUxTSxTQUFTMk0sZUFBZUYsR0FBRyxJQUFJek0sU0FBUzRNLGNBQWNILEdBQUc7QUFDM0U7QUFDQSxJQUFNSSxRQUFRQSxDQUFDbEIsTUFBY21CLFFBQWdDO0FBQzVEQSxVQUFBQSxNQUFROU0sU0FBUytNLFNBQVN0SDtBQUMxQixRQUFNdUgsS0FBSyxJQUFJaEMsT0FBQSxPQUFBcEssT0FBYytLLE1BQUksV0FBQSxDQUFXO0FBQzVDLFFBQU1zQixJQUFJRCxHQUFHRSxLQUFLSixHQUFHO0FBQ3JCLE1BQUlHLEtBQUtBLEVBQUVsRCxTQUFTLEdBQUc7QUFDdEIsV0FBT29ELG1CQUFtQkYsRUFBRSxDQUFDLENBQVc7RUFDekM7QUFDQSxTQUFPO0FBQ1I7QUFDQSxJQUFNdkosUUFBUytCLFVBQXdDO0FBQ3RELE1BQUksQ0FBQ0EsTUFBTTtBQUNWLFdBQU87RUFDUjtBQUNBLFFBQU0ySCxTQUFBLEdBQUF4TSxPQUFZd0YsS0FBS2lILFVBQVEsR0FBQTtBQUMvQixNQUNDNUgsS0FBSzZILFFBQVFGLE1BQU0sTUFBTSxLQUN6QjNILEtBQUs2SCxRQUFRbEgsS0FBS21ILFdBQVdILE1BQU0sTUFBTSxLQUN4Q2hILEtBQUttSCxTQUFTQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLFFBQVEvSCxLQUFLNkgsUUFBUXROLFNBQVMrTSxTQUFTVSxXQUFXckgsS0FBS21ILFdBQVdILE1BQU0sTUFBTSxHQUM1RztBQUVELFdBQU9QLE1BQU0sU0FBU3BILElBQUk7RUFDM0I7QUFFQSxNQUFJaUksU0FBU3RILEtBQUt1SCxjQUFjOUwsUUFBUSxNQUFNLEVBQUU7QUFDaEQsTUFBSTRELEtBQUs2SCxRQUFRSSxNQUFNLEdBQUc7QUFDekJBLGFBQVN0SCxLQUFLbUgsV0FBV0c7RUFDMUI7QUFDQSxNQUFJakksS0FBSzZILFFBQVFJLE1BQU0sS0FBS0EsT0FBT0YsTUFBTSxHQUFHLENBQUMsTUFBTSxNQUFNO0FBQ3hERSxhQUFTMU4sU0FBUytNLFNBQVNVLFdBQVdDO0VBQ3ZDO0FBQ0EsTUFBSWpJLEtBQUs2SCxRQUFRSSxNQUFNLE1BQU0sR0FBRztBQUMvQixXQUFPUCxtQkFBbUIxSCxLQUFLK0gsTUFBTUUsT0FBTzNELE1BQU0sQ0FBQztFQUNwRDtBQUNBLFNBQU87QUFDUjtBQUNBLElBQU0xRyxXQUFXQSxDQUFDO0VBQUN1SztBQUFTLEdBQXdCakMsU0FBMEI7QUFDN0UsU0FBTyxJQUFBL0ssT0FBSWdOLFdBQVMsR0FBQSxFQUFJcEgsU0FBQSxJQUFBNUYsT0FBYStLLE1BQUksR0FBQSxDQUFHO0FBQzdDO0FBUUEsSUFBTWtDLG1CQUFtQkEsQ0FBQ0MsU0FBc0JDLFVBQWtCbk0sVUFBd0I7QUFDeEZrTSxVQUFRRSxNQUE0Q0QsUUFBUSxJQUFJbk07QUFDbEU7QUFDQSxJQUFNcU0sYUFBY0MsU0FBZ0M7QUFDbkQsTUFBSSxDQUFDQSxPQUFPQSxJQUFJbkUsV0FBVyxHQUFHO0FBQzdCLFdBQU87RUFDUjtBQUNBLFNBQU9tRSxJQUFJVixNQUFNLEdBQUcsQ0FBQyxFQUFFdEIsWUFBWSxJQUFJZ0MsSUFBSVYsTUFBTSxDQUFDO0FBQ25EO0FBQ0EsSUFBTVcsZUFBZ0JDLGNBQTZCO0FBQ2xELFNBQU9oSSxLQUFLdUgsY0FBYzlMLFFBQVEsTUFBTXlHLG1CQUFtQjhGLFFBQVEsRUFBRXZNLFFBQVEsUUFBUSxHQUFHLEVBQUVBLFFBQVEsUUFBUSxHQUFHLENBQUM7QUFDL0c7QUFDQSxJQUFNd00sV0FBWUgsU0FBd0I7QUFDekMsU0FBT0EsSUFBSXJNLFFBQVEsc0JBQXNCOEksT0FBT0MsSUFBQTBELHFCQUFBQSxtQkFBQXhELHVCQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsTUFBQSxDQUFBLEVBQUEsQ0FBUTtBQUN6RDtBQU9BLElBQU15RCxvQkFBcUJDLGFBQWdGO0FBQzFHQSxjQUFBQSxVQUFZLENBQUM7QUFDYixRQUFNQyxPQUFPRCxRQUFRRSxhQUFhO0FBQ2xDLFFBQU1BLFlBQVlMLFNBQVNJLElBQUk7QUFDL0IsUUFBTUUsU0FBU04sU0FBU0csUUFBUUcsVUFBVSxHQUFHO0FBQzdDLFFBQU1DLFNBQVNQLFNBQVNHLFFBQVFJLFVBQVUsR0FBRztBQUM3QyxRQUFNNUIsS0FBSyxJQUFJaEM7O0lBQUEsTUFBQXBLLE9BRVI4TixXQUFTLEdBQUEsRUFBQTlOLE9BQUk4TixXQUFTLFFBQUEsRUFBQTlOLE9BRXJCOE4sV0FBUyxhQUFBLEVBQUE5TixPQUVUOE4sV0FBUyxLQUFBLEVBQUE5TixPQUFNK04sUUFBTSxLQUFBLEVBQUEvTixPQUFNK04sTUFBTSxFQUFBL04sT0FBR2dPLFFBQU0sS0FBQSxFQUFBaE8sT0FBTWdPLFFBQU0sUUFBQSxFQUFBaE8sT0FFdEQ4TixXQUFTLFNBQUEsRUFBQTlOLE9BQVU4TixTQUFTLEVBQUE5TixPQUFHK04sUUFBTSxvQkFBQTtJQUM1QztFQUNEO0FBRUEsU0FBTyxDQUFDVCxLQUFhekUsUUFBZ0M7QUFDcEQsUUFBSSxDQUFDQSxLQUFLO0FBQ1QsYUFBT3lFO0lBQ1I7QUFDQSxXQUFPQSxJQUFJck0sUUFBUW1MLElBQUksQ0FBQzZCLE9BQWVuQixRQUFnQm9CLEtBQWF4SixLQUFheUosVUFBMEI7QUFDMUcsVUFBSXJCLFdBQVdlLE1BQU07QUFDcEIsZUFBT0E7TUFDUjtBQUNBLFlBQU0vRSxJQUFJcUYsU0FBU3pKLE9BQU93SjtBQUMxQixZQUFNRSxjQUFjLE9BQU92RixJQUFJQyxDQUFDLE1BQU0sYUFBYUQsSUFBSUMsQ0FBQyxFQUFFbUYsT0FBT25GLENBQUMsSUFBSUQsSUFBSUMsQ0FBQztBQUMzRSxhQUFPLE9BQU9zRixnQkFBZ0IsV0FBV0EsY0FBY0EsZUFBZUg7SUFDdkUsQ0FBQztFQUNGO0FBQ0Q7QUFDQSxJQUFNSSxvQkFBb0IsTUFBc0U7QUFDL0YsUUFBTUMsY0FBY1gsa0JBQWtCO0lBQ3JDRyxXQUFXO0lBQ1hDLFFBQVE7SUFDUkMsUUFBUTtFQUNULENBQUM7QUFDRCxTQUFPLENBQUNWLEtBQWF6RSxRQUFnRDtBQUNwRSxVQUFNMEYsSUFBSUQsWUFBWWhCLEtBQUt6RSxRQUFBLFFBQUFBLFFBQUEsU0FBQUEsTUFBTyxNQUFTO0FBQzNDLFdBQU92QyxHQUFHdUIsc0JBQXNCd0YsV0FBV2tCLENBQUMsSUFBSUE7RUFDakQ7QUFDRCxHQUFHO0FBRUgsSUFBTUMsYUFBYSxJQUFJcEUsT0FBQSxTQUFBcEssT0FDYnFLLHFCQUFtQixLQUFBLEVBQUFySyxPQUFNc0csR0FBRytDLGlCQUFlLEdBQUEsRUFBQXJKLE9BQUlxSyxxQkFBbUIsZ0JBQUEsR0FDM0UsR0FDRDtBQUNBLElBQU1vRSxrQkFBbUJSLFdBQTBCO0FBQ2xELFNBQU9BLE1BQU1oTixRQUFRLFlBQVksR0FBRztBQUNyQztBQU1BLElBQU15TixnQkFBZ0JBLENBQ3JCQyxVQUNBQyxVQUNBQyxTQUNvRDtBQUNwRCxNQUFJQztBQUNKLE1BQUl4SSxHQUFHc0Isb0JBQW9CZ0gsUUFBUSxHQUFHO0FBQ3JDRSxnQkFBWSxJQUFJMUUsT0FBQSxTQUFBcEssT0FDTnFLLHFCQUFtQixHQUFBLEVBQUFySyxPQUFJc0csR0FBR2dELGlCQUFlLEtBQUEsRUFBQXRKLE9BQU1xSyxxQkFBbUIsTUFBQSxFQUFBckssT0FBT3FLLHFCQUFtQixLQUFBLEVBQUFySyxPQUNwR3NHLEdBQUdzQixvQkFBb0JnSCxRQUFRLEdBQ2hDLEdBQUEsRUFBQTVPLE9BQUlxSyxxQkFBbUIsaUJBQUEsR0FDdkIsR0FDRDtFQUNELE9BQU87QUFDTixVQUFNcUIsV0FBVytCLFNBQVNtQixRQUFRO0FBQ2xDLFVBQU0xRCxVQUFVUSxTQUFTa0IsTUFBTSxHQUFHLENBQUM7QUFDbkNrQyxnQkFBWSxJQUFJMUUsT0FBQSxTQUFBcEssT0FDTnFLLHFCQUFtQixHQUFBLEVBQUFySyxPQUFJc0csR0FBRytDLGlCQUFlLEdBQUEsRUFBQXJKLE9BQUlxSyxxQkFBbUIsR0FBQSxFQUFBckssT0FBSXFLLG1CQUFtQixFQUFBckssT0FDL0ZrTCxZQUFZLFFBQVEsQ0FBQzVFLEdBQUd1QixzQkFDckJxRCxVQUFBLElBQUFsTCxPQUNJa0wsUUFBUUksWUFBWSxDQUFDLEVBQUF0TCxPQUFHa0wsUUFBUXhCLFlBQVksR0FBQyxHQUFBLENBQ3JELEVBQUExSixPQUFHMEwsU0FBU2tCLE1BQU0sQ0FBQyxFQUFFM0wsUUFBUWtKLGlCQUFpQkwsYUFBYSxDQUFDLEVBQUE5SixPQUFHcUsscUJBQW1CLGlCQUFBLEdBQ2xGLEdBQ0Q7RUFDRDtBQUNBLE1BQUl3RSxNQUFNO0FBQ1QsV0FBT0MsVUFBVXhDLEtBQUtxQyxRQUFRO0VBQy9CO0FBQ0EsUUFBTUksY0FBYyxJQUFJM0UsT0FBTyxNQUFNcEssT0FBTyxTQUFTK0osT0FBT0MsSUFBQWdGLHFCQUFBQSxtQkFBQTlFLHVCQUFBLENBQUEsYUFBQSxHQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLEdBQW9CLFFBQVEsR0FBRyxHQUFHLEdBQUc7QUFDakcsUUFBTStFLGFBQWFOLFNBQVMxTixRQUFRLHFCQUFxQndOLGVBQWUsRUFBRXhOLFFBQVE4TixhQUFhTixlQUFlO0FBQzlHLFFBQU0xSixTQUFnQyxDQUFBO0FBQ3RDLE1BQUltSyxhQUFxQztBQUN6QyxVQUFRQSxhQUFhSixVQUFVeEMsS0FBSzJDLFVBQVUsT0FBTyxNQUFNO0FBQzFEbEssV0FBT0EsT0FBT29FLE1BQU0sSUFBSTtNQUN2QjhFLE9BQU9pQjtJQUNSO0VBQ0Q7QUFDQW5LLFNBQU9xSCxLQUFLMEM7QUFDWixTQUFPL0o7QUFDUjtBQUNBLElBQUlvSyxrQkFBaUM7QUFNckMsSUFBTUMsa0JBQWtCQSxDQUN2QlQsVUFDQVUsVUFDQUMsT0FDQTVLLEtBQ0E2SyxjQUN3QjtBQUN4QixRQUFNQyxzQkFBdUJDLGVBQXFEO0FBQ2pGLFVBQU1WLGNBQWMsSUFBSTNFLE9BQU8sTUFBTXBLLE9BQU8sU0FBUytKLE9BQU9DLElBQUEwRixxQkFBQUEsbUJBQUF4Rix1QkFBQSxDQUFBLGFBQUEsR0FBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxHQUFvQixRQUFRLEdBQUcsR0FBRyxHQUFHO0FBQ2pHLFVBQU0rRSxhQUFhUSxVQUNqQnhPLFFBQVEscUJBQXFCd04sZUFBZSxFQUM1Q3hOLFFBQVE4TixhQUFhTixlQUFlO0FBRXRDLFFBQUlrQixRQUFRO0FBQ1puQixlQUFXb0IsWUFBWTtBQUN2QixXQUFPcEIsV0FBV2xDLEtBQUsyQyxVQUFVLE1BQU0sTUFBTTtBQUM1Q1UsY0FBUW5CLFdBQVdvQjtJQUNwQjtBQUNBLFFBQUlELFFBQVEsR0FBRztBQUVkLFVBQUkxQixRQUFnQztBQUNwQyxVQUFJa0IsaUJBQWlCO0FBQ3BCbEIsZ0JBQVFrQixnQkFBZ0I3QyxLQUFLMkMsVUFBVTtNQUN4QyxPQUFPO0FBSU5oQixnQkFBUSxnRkFBZ0YzQixLQUN2RjJDLFVBQ0Q7TUFDRDtBQUNBLFVBQUloQixPQUFPO0FBQ1YwQixnQkFBUTFCLE1BQU0wQjtNQUNmO0FBQ0EsYUFBTztRQUNOekIsS0FBS3lCO1FBQ0xFLE9BQU87TUFDUjtJQUNEO0FBQ0EsV0FBTztNQUNOM0IsS0FBS3lCO01BQ0xFLE9BQU9GLFNBQVM7SUFDakI7RUFDRDtBQUNBLFFBQU01TSxVQUFvQixDQUFBO0FBQzFCLFFBQU0rTSxZQUFZeEosR0FBRzhDO0FBRXJCLFFBQU0yRyxZQUFZVixZQUFZQyxTQUFTRCxhQUFhQyxTQUFTQSxNQUFNbkcsU0FBUztBQUM1RSxNQUFJNkc7QUFDSixNQUFJQyxZQUFZO0FBQ2hCdkwsVUFBQUEsTUFBQSxJQUFBMUUsT0FBWTBFLEdBQUc7QUFFZixNQUFJMkssWUFBWUEsU0FBU2xHLFNBQVMsR0FBRztBQUNwQzZHLGNBQVV0QixjQUFjQyxVQUFVVSxRQUFRO0FBQzFDLFFBQUksQ0FBQ1csV0FBV0EsUUFBUTdHLFdBQVcsR0FBRztBQUNyQyxhQUFPO1FBQ05sSixNQUFNME87UUFDTjVMO1FBQ0FLLE9BQU8yQyxXQUFXLHlCQUF5QnNKLFFBQVE7TUFDcEQ7SUFDRDtBQUNBLFVBQU1hLGVBQWVGO0FBQ3JCLFVBQU1HLGFBQWFELGFBQWEsQ0FBQyxFQUFHakM7QUFDcEMsUUFBSW1DLFNBQVN6QixTQUFTL0IsTUFBTSxHQUFHeUQsS0FBS0MsSUFBSSxHQUFHSCxXQUFXUixLQUFLLENBQUM7QUFDNUQsUUFBSVksUUFBUTVCLFNBQVMvQixNQUFNeUQsS0FBS0MsSUFBSSxHQUFHSCxXQUFXUixRQUFRUSxXQUFXLENBQUMsRUFBRWhILE1BQU0sQ0FBQztBQUMvRSxRQUFJK0csYUFBYS9HLFNBQVMsR0FBRztBQUU1QitHLG1CQUFhOUQsR0FBSXdELFlBQVk7QUFDN0JXLGNBQVFBLE1BQU10UCxRQUFRaVAsYUFBYTlELElBQUssRUFBRTtJQUMzQztBQUNBLFFBQ0NrRDtJQUNBNUssUUFBUSxNQUNQO0FBQUEsVUFBQThMO0FBQ0Q5TCxhQUFBOEwsZUFBTUwsV0FBVyxDQUFDLE9BQUEsUUFBQUssaUJBQUEsU0FBQUEsZUFBSztJQUN4QjtBQUtBLFFBQUl2RixJQUFJbUYsT0FBT2pILFNBQVM7QUFDeEIsV0FBTzhCLEtBQUssS0FBS21GLE9BQU9qRixPQUFPRixDQUFDLE1BQU0sUUFBUW1GLE9BQU94RCxNQUFNM0IsR0FBR0EsSUFBSSxDQUFDLEVBQUV3RixPQUFPLElBQUksS0FBSyxHQUFHO0FBQ3ZGeEY7SUFDRDtBQUNBLFFBQUl5RixJQUFJO0FBQ1IsV0FBT0EsSUFBSUgsTUFBTXBILFVBQVVvSCxNQUFNcEYsT0FBT3VGLENBQUMsTUFBTSxRQUFRSCxNQUFNM0QsTUFBTThELEdBQUdBLElBQUksQ0FBQyxFQUFFRCxPQUFPLElBQUksS0FBSyxHQUFHO0FBQy9GQztJQUNEO0FBQ0EsUUFDQ3pGLEtBQUssS0FDTG1GLE9BQU9qRixPQUFPRixDQUFDLE1BQU0sU0FDcEJzRixNQUFNcEgsV0FBVyxLQUFNdUgsSUFBSUgsTUFBTXBILFVBQVVvSCxNQUFNcEYsT0FBT3VGLENBQUMsTUFBTSxPQUMvRDtBQUNEekY7SUFDRDtBQUNBbUYsYUFBU25GLEtBQUssSUFBSW1GLE9BQU94RCxNQUFNLEdBQUd5RCxLQUFLQyxJQUFJLEdBQUdyRixJQUFJLENBQUMsQ0FBQyxJQUFJO0FBQ3hEc0YsWUFBUUcsSUFBSUgsTUFBTXBILFNBQVNvSCxNQUFNM0QsTUFBTXlELEtBQUtDLElBQUksR0FBR0ksQ0FBQyxDQUFDLElBQUk7QUFDekQsUUFDQ04sT0FBT2pILFNBQVMsS0FDaEJpSCxPQUFPeEQsTUFBTXlELEtBQUtDLElBQUksR0FBR0YsT0FBT2pILFNBQVMsQ0FBQyxDQUFDLEVBQUVzSCxPQUFPLElBQUksS0FBSyxLQUM3REYsTUFBTXBILFNBQVMsS0FDZm9ILE1BQU0zRCxNQUFNLEdBQUcsQ0FBQyxFQUFFNkQsT0FBTyxJQUFJLEtBQUssR0FDakM7QUFDREwsZ0JBQVU7SUFDWDtBQUNBSCxnQkFBWUcsT0FBT2pIO0FBQ25CLFFBQUk4RyxjQUFjLEtBQUtNLE1BQU1wSCxTQUFTLEtBQUtvSCxNQUFNM0QsTUFBTSxHQUFHLENBQUMsTUFBTSxNQUFNO0FBQ3RFMkQsY0FBUUEsTUFBTTNELE1BQU0sQ0FBQztJQUN0QjtBQUNBK0IsZUFBV3lCLFNBQVNHO0FBQ3BCLFFBQUksQ0FBQ1IsV0FBVztBQUNmLFVBQUl6SixHQUFHc0Isb0JBQW9CeUgsUUFBUSxHQUFHO0FBQ3JDdE0sZ0JBQVFBLFFBQVFvRyxNQUFNLElBQUlwRCxXQUFXLDZCQUE2QnNKLFFBQVE7TUFDM0UsT0FBTztBQUNOdE0sZ0JBQVFBLFFBQVFvRyxNQUFNLElBQUlwRCxXQUFXLHdCQUF3QnNKLFFBQVE7TUFDdEU7SUFDRDtFQUNEO0FBRUEsTUFBSUMsU0FBU0EsTUFBTW5HLFNBQVMsR0FBRztBQUM5QjZHLGNBQVV0QixjQUFjQyxVQUFVVyxLQUFLO0FBQ3ZDLFFBQUlVLFdBQVdBLFFBQVE3RyxTQUFTLEdBQUc7QUFFbEMsYUFBTztRQUNObEosTUFBTTBPO1FBQ041TDtRQUNBSyxPQUFPMkMsV0FBVyx1QkFBdUJ1SixLQUFLO01BQy9DO0lBQ0Q7QUFDQSxRQUFJTyxRQUFRO0FBQ1osUUFBSUksWUFBWSxHQUFHO0FBQ2xCLFlBQU1VLFFBQVFuQixvQkFBb0JiLFFBQVE7QUFDMUNzQixrQkFBWVUsTUFBTXpDO0FBQ2xCLE9BQUM7UUFBQzJCO01BQUssSUFBSWM7SUFDWixPQUFPO0FBQ05kLGNBQVE7SUFDVDtBQUNBLFVBQU1lLGVBQUEsS0FBQTVRLE9BQW9COFAsV0FBUyxHQUFBLEVBQUE5UCxPQUFJc1AsS0FBSyxFQUFBdFAsT0FBRzBFLE9BQU8sSUFBRSxJQUFBO0FBQ3hELFFBQUl1TCxhQUFhLEdBQUc7QUFDbkIsWUFBTVksU0FBU2xDLFNBQVMvQixNQUFNeUQsS0FBS0MsSUFBSSxHQUFHTCxTQUFTLENBQUM7QUFDcER0QixpQkFDQ0EsU0FBUy9CLE1BQU0sR0FBR3lELEtBQUtDLElBQUksR0FBR0wsU0FBUyxDQUFDLEtBQ3ZDQSxZQUFZLElBQUksT0FBTyxNQUN4QlcsZ0JBQ0NmLFFBQVEsS0FBSztBQUNmbEIsa0JBQVlrQyxPQUFPMUgsU0FBUyxLQUFLMEgsT0FBT2pFLE1BQU0sR0FBRyxDQUFDLE1BQU0sT0FBQSxLQUFBNU0sT0FBWTZRLE1BQU0sSUFBS0E7SUFDaEYsT0FBTztBQUNOLFVBQUlsQyxTQUFTeEYsU0FBUyxLQUFLd0YsU0FBUy9CLE1BQU0sSUFBSStCLFNBQVN4RixTQUFTLElBQUksQ0FBQyxNQUFNLE1BQU07QUFDaEZ3RixvQkFBWTtNQUNiO0FBQ0FBLG1CQUFhQSxTQUFTeEYsU0FBUyxJQUFJLE9BQU8sTUFBTXlIO0lBQ2pEO0FBQ0EsUUFBSWIsV0FBVztBQUNkLFVBQUlqSCxJQUFJcEUsT0FBTztBQUNmLFVBQUlvRSxFQUFFSyxTQUFTLEdBQUc7QUFDakJMLFlBQUlBLEVBQUU4RCxNQUFNLENBQUM7TUFDZDtBQUNBN0osY0FBUUEsUUFBUW9HLE1BQU0sSUFBSXBELFdBQVcsMEJBQTBCdUosT0FBT3hHLENBQUM7SUFDeEUsT0FBTztBQUNOL0YsY0FBUUEsUUFBUW9HLE1BQU0sSUFBSXBELFdBQVcsc0JBQXNCdUosS0FBSztJQUNqRTtBQUNBLFFBQUloSixHQUFHa0IsZ0JBQWdCLENBQUMrSCxXQUFXO0FBQ2xDLFlBQU11QixNQUFNbkMsU0FBUzFOLFFBQVFxRixHQUFHa0IsY0FBYyxFQUFFO0FBQ2hELFVBQUlzSixJQUFJM0gsV0FBV3dGLFNBQVN4RixRQUFRO0FBQ25Dd0YsbUJBQVdtQztBQUNYL04sZ0JBQVFBLFFBQVFvRyxNQUFNLElBQUlwRCxXQUFXLHdCQUF3QjtNQUM5RDtJQUNEO0VBQ0Q7QUFDQSxTQUFPO0lBQ045RixNQUFNME87SUFDTjVMO0lBQ0FLLE9BQU87RUFDUjtBQUNEO0FBMEJBLElBQU0yTixVQUFXdk0sV0FBa0M7QUFDbEQsUUFBTTtJQUFDd007SUFBU0M7SUFBU0M7RUFBUSxJQUFJMU0sVUFBQSxRQUFBQSxVQUFBLFNBQUFBLFFBQVMsQ0FBQztBQUMvQyxNQUFJbEIsT0FBTztBQUNYLE1BQUkwTixTQUFTO0FBSVosUUFBSUEsV0FBV0MsU0FBUztBQUN2QjNOLGVBQUFBLE9BQVM7SUFDVjtBQUNBLFFBQUk0TixVQUFVO0FBQ2I1TixlQUFBQSxPQUFTO0lBQ1Y7RUFDRDtBQUNBLFNBQU9BO0FBQ1I7QUFDQSxJQUFNNk4sVUFBVzNNLFdBQWlDO0FBQ2pELE1BQUlBLFVBQUEsUUFBQUEsVUFBQSxVQUFBQSxNQUFPaEMsZ0JBQWdCO0FBQUEsUUFBQTRPO0FBQzFCNU0sVUFBTWhDLGVBQWU7QUFDckIsS0FBQTRPLHdCQUFBNU0sTUFBTTZNLHFCQUFBLFFBQUFELDBCQUFBLFVBQU5BLHNCQUFBRSxLQUFBOU0sS0FBd0I7RUFDekIsV0FBV0EsT0FBTztBQUNqQkEsVUFBTStNLGVBQWU7RUFDdEI7QUFDQSxTQUFPO0FBQ1I7QUFDQSxJQUFJQyxVQUE4QjtBQUNsQyxJQUFJQyxXQUFXO0FBQ2YsSUFBSUMsVUFBNEIsQ0FBQTtBQUNoQyxJQUFJQyxlQUF3QztBQUM1QyxJQUFJQyxhQUFzQztBQUMxQyxJQUFJQyxZQUFnQztBQUNwQyxJQUFJQyxXQUEwQjtBQUM5QixJQUFJQyxXQUEwQjtBQUM5QixJQUFJQyxjQUFjO0FBQ2xCLElBQUlDLGNBQWM7QUFDbEIsSUFBSUMsWUFBWTtBQUNoQixJQUFJQyxhQUFhO0FBQ2pCLElBQUlDLFlBQTJCO0FBQy9CLElBQUlDLFNBQVM7QUFDYixJQUFJQyxhQUE0QjtBQUNoQyxJQUFJQyxZQUEyQjtBQUMvQixJQUFJQyxnQkFBK0I7QUFDbkMsSUFBSUMsa0JBQWlDO0FBQ3JDLElBQUlDLFNBQVM7QUFDYixJQUFNQyxZQUFZO0FBQ2xCLElBQU1DLE9BQU87QUFDYixJQUFNQyxpQkFBaUI7QUFDdkIsSUFBTUMsVUFBVTtBQUNoQixJQUFNQyxVQUFVO0FBQ2hCLElBQU1DLFVBQVcvUCxVQUF1QztBQUN2RCxNQUFJZ1EsWUFBMkI7QUFDL0IsTUFBSWhRLFFBQVFBLEtBQUtpUSxPQUFPO0FBQUEsUUFBQUM7QUFDdkIsUUFBSWxRLEtBQUtpUSxNQUFNRSxPQUFPO0FBQ3JCLFlBQU0sQ0FBQ0MsSUFBSSxJQUFJcFEsS0FBS2lRLE1BQU1FO0FBQzFCLFVBQUlDLE1BQU07QUFDVCxZQUFJQSxLQUFLQyxhQUFhRCxLQUFLQyxVQUFVbkssU0FBUyxHQUFHO0FBR2hELGdCQUFNLENBQUNvSyxnQkFBZ0JDLG1CQUFtQixJQUFJSCxLQUFLQztBQUNuRHhCLHFCQUFXeUIsZUFBZ0JFLE1BQU1DLEtBQUtDO0FBQ3RDLGNBQUlKLGVBQWdCSyxXQUFXO0FBQzlCN0IsdUJBQVd3QixlQUFnQkssVUFBVTNTLFFBQVEsT0FBTyxFQUFFO1VBQ3ZEO0FBQ0EsY0FBSXNTLGVBQWdCTSxPQUFPO0FBQzFCckIsNEJBQWdCZSxlQUFnQk07VUFDakM7QUFDQSxjQUFJUixLQUFLQyxVQUFVbkssU0FBUyxLQUFLcUsscUJBQXFCO0FBQUEsZ0JBQUFNO0FBQ3JEckIsK0JBQUFxQix3QkFBa0JOLG9CQUFvQnJQLFVBQUEsUUFBQTJQLDBCQUFBLFNBQUFBLHdCQUFRO1VBQy9DO1FBQ0Q7QUFDQSxZQUFJVCxLQUFLVSxXQUFXO0FBQ25CeEIsc0JBQVljLEtBQUtVO1FBQ2xCO0FBQ0EsWUFBSVYsS0FBS1csZ0JBQWdCO0FBQ3hCZixzQkFBWUksS0FBS1csZUFBZS9TLFFBQVEsT0FBTyxFQUFFO1FBQ2xEO0FBQ0ErUSxzQkFBYyxPQUFPcUIsS0FBS1ksWUFBWTtBQUN0QyxZQUFJaFIsS0FBS2lRLE1BQU1nQixRQUFRO0FBQ3RCOUIsc0JBQVluUCxLQUFLaVEsTUFBTWdCLE9BQU9DO1FBQy9CO0FBQ0EsWUFBSWQsS0FBS2UsY0FBYyxDQUFDblIsS0FBSyxnQkFBZ0IsS0FBSyxDQUFDQSxLQUFLLGdCQUFnQixFQUFFbVIsWUFBWTtBQUVyRixjQUFJaEksS0FBSztBQUFBLGNBQUFpSSxZQUFBQywyQkFDY2pCLEtBQUtlLFNBQUEsR0FBQUc7QUFBQSxjQUFBO0FBQTVCLGlCQUFBRixVQUFBOUYsRUFBQSxHQUFBLEVBQUFnRyxRQUFBRixVQUFBRyxFQUFBLEdBQUFDLFFBQXVDO0FBQUEsb0JBQTVCQyxXQUFBSCxNQUFBdlQ7QUFDVm9MLHFCQUFPQSxHQUFHakQsU0FBUyxJQUFJLE1BQU0sTUFBTXVMLFNBQVNDLEtBQUsxVCxRQUFRLG1CQUFtQjhJLE9BQU9DLElBQUE0SyxxQkFBQUEsbUJBQUExSyx1QkFBQSxDQUFBLElBQUEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxFQUFBLENBQVE7WUFDNUY7VUFBQSxTQUFBMkssS0FBQTtBQUFBUixzQkFBQTFULEVBQUFrVSxHQUFBO1VBQUEsVUFBQTtBQUFBUixzQkFBQVMsRUFBQTtVQUFBO0FBQ0EsY0FBSTFJLEdBQUdqRCxTQUFTLEdBQUc7QUFDbEJnRyw4QkFBa0IsSUFBSS9FLE9BQUEsMkJBQUFwSyxPQUFrQ29NLElBQUUsNkJBQUEsQ0FBNkI7VUFDeEY7UUFDRDtNQUNEO0lBQ0Q7QUFFQSxRQUFJbkosS0FBS2lRLE1BQU02QixTQUFTO0FBQ3ZCLFVBQUk5UixLQUFLaVEsTUFBTTZCLFFBQVFDLFFBQVEsQ0FBQy9CLFdBQVc7QUFDMUNBLG9CQUFZaFEsS0FBS2lRLE1BQU02QixRQUFRQyxLQUFLL1QsUUFBUSxPQUFPLEVBQUU7TUFDdEQ7QUFDQSxVQUFJcUYsR0FBR3VCLHdCQUF3QixNQUFNO0FBRXBDdkIsV0FBR3VCLHNCQUFzQjVFLEtBQUtpUSxNQUFNNkIsUUFBUUUsU0FBUztNQUN0RDtJQUNEO0FBQ0EzQyxpQkFBYVc7QUFFYixVQUFNO01BQUNyRjtJQUFPLEtBQUF1Rix1QkFBSWxRLEtBQUtpUSxNQUFNZ0MsY0FBQSxRQUFBL0IseUJBQUEsU0FBQUEsdUJBQVksQ0FBQztBQUMxQyxRQUFJdkYsU0FBUztBQUNacUUsb0JBQWMsQ0FBQzNMLEdBQUdvQyx5QkFBeUJrRixRQUFRdUgsbUJBQW1CO0FBQ3RFakQsa0JBQVksQ0FBQzVMLEdBQUdvQyx5QkFBeUJrRixRQUFRd0gsaUJBQWlCO0FBQ2xFakQsbUJBQWF2RSxRQUFReUgsaUJBQWlCO0FBR3RDLFVBQUlsRCxZQUFZO0FBQ2Y3TCxXQUFHbUMsZUFBZTtNQUNuQjtJQUNEO0VBQ0Q7QUFDRDtBQUNBLElBQUk2TSxpQkFBaUI7QUFDckIsSUFBTUMsZUFBZUEsQ0FBQ3pRLFFBQTBDMFEsWUFBaUM7QUFDaEcsTUFBSUYsZ0JBQWdCO0FBQ25CO0VBQ0Q7QUFDQUEsbUJBQWlCO0FBQ2pCLE1BQUlHO0FBQ0osTUFBSTlELGNBQWM7QUFDakI4RCxxQkFBaUI5RCxhQUFhK0Q7QUFDOUIvRCxpQkFBYStELFdBQVc7RUFDekI7QUFDQSxRQUFNQyxPQUFRMVAsYUFBMEI7QUFDdkNxUCxxQkFBaUI7QUFDakIsUUFBSTNELGNBQWM7QUFDakJBLG1CQUFhK0QsV0FBV0QsbUJBQUEsUUFBQUEsbUJBQUEsU0FBQUEsaUJBQWtCO0lBQzNDO0FBQ0FELFlBQVF2UCxPQUFPO0VBQ2hCO0FBRUEsUUFBTXRELFNBQXlCO0lBQzlCQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUitTLGVBQWU7SUFDZkMsYUFBYTtJQUNiQyxRQUFRdFEsS0FBS3VRO0lBQ2JDLE1BQU0sQ0FBQyxRQUFRLGFBQWEsV0FBVztJQUN2Q0MsUUFBUTtJQUNSQyxRQUFRLENBQUMsV0FBVyxhQUFhLE9BQU8sTUFBTTtJQUM5Q0MsU0FBUztJQUNUQyxTQUFTO0lBQ1RDLE9BQU87SUFDUEMsV0FBVzlRLEtBQUsrUTtJQUNoQkMsU0FBUztJQUNUQyxNQUFNLENBQUMsWUFBWSxZQUFZLFFBQVE7SUFDdkNoVCxNQUFNO0lBQ05pVCxRQUFRLENBQUMsU0FBUztFQUNuQjtBQUNBclEsTUFBSXBILElBQUkwRCxNQUFNLEVBQ1o4UixLQUFNeFIsVUFBUztBQUNmK1AsWUFBUS9QLElBQThCO0FBQ3RDNkIsV0FBTzZRLElBQUk7RUFDWixDQUFDLEVBQ0FBLEtBQU12UyxXQUFtQjtBQUN6QixVQUFNO01BQUN1VDtNQUFRQztJQUFVLElBQUt4VCxVQUFBLFFBQUFBLFVBQUEsU0FBQUEsUUFBUyxDQUFDO0FBQ3hDdVMsU0FBQSxHQUFBM1YsT0FBUTJXLFdBQUEsUUFBQUEsV0FBQSxTQUFBQSxTQUFVLElBQUUsR0FBQSxFQUFBM1csT0FBSTRXLGVBQUEsUUFBQUEsZUFBQSxTQUFBQSxhQUFjLEVBQUUsQ0FBRTtFQUMzQyxDQUFDO0FBQ0g7QUFDQSxJQUFNQyxpQkFBa0JDLFdBQTBCO0FBQ2pELFNBQU8vUSxXQUFXLHlCQUF5QmdFLE9BQU8rTSxLQUFLLENBQUM7QUFDekQ7QUFDQSxJQUFNQyxtQkFBbUJBLE1BQWM7QUFDdEMsUUFBTUMsTUFBTSxvQkFBSUMsS0FBSztBQUNyQixNQUFJQyxLQUFLbk4sT0FBT2lOLElBQUlHLGVBQWUsQ0FBQztBQUNwQyxRQUFNQyxNQUFPN0ksT0FBc0I7QUFDbEMsV0FBT0EsRUFBRTNCLE1BQU0sRUFBRTtFQUNsQjtBQUNBc0ssUUFDQ0UsSUFBQSxJQUFBcFgsT0FBUWdYLElBQUlLLFlBQVksSUFBSSxDQUFDLENBQUUsSUFDL0JELElBQUEsSUFBQXBYLE9BQVFnWCxJQUFJTSxXQUFXLENBQUMsQ0FBRSxJQUMxQkYsSUFBQSxLQUFBcFgsT0FBU2dYLElBQUlPLFlBQVksQ0FBQyxDQUFFLElBQzVCSCxJQUFBLEtBQUFwWCxPQUFTZ1gsSUFBSVEsY0FBYyxDQUFDLENBQUUsSUFDOUJKLElBQUEsS0FBQXBYLE9BQVNnWCxJQUFJUyxjQUFjLENBQUMsQ0FBRTtBQUMvQixTQUFPUDtBQUNSO0FBQ0EsSUFBTVEsaUJBQWlCQSxDQUFDbEMsU0FBd0JtQyxpQkFBd0M7QUFDdkYsTUFBSTdGLGFBQWEsTUFBTTtBQUN0QjBELFlBQVF6UCxXQUFXLHNCQUFzQixDQUFDO0FBQzFDO0VBQ0Q7QUFRQSxNQUFJbkQ7QUFNSixRQUFNZ1YsbUJBQW1CLENBQUMsR0FDdkJyRixjQUFjLFFBQVFBLGNBQWMvTSxLQUFLK1EsbUJBQ3pDL0Qsa0JBQWtCLFFBQVFBLGtCQUFrQmhOLEtBQUsrUSxvQkFDbkQ5RCxtQkFDQUEsb0JBQW9Cak4sS0FBS3FTO0FBRTFCLE1BQUlGLGdCQUFnQixDQUFDQSxhQUFhRyxZQUFZLENBQUN4UixHQUFHMkIsaUJBQWlCbUssYUFBYSxDQUFDd0Ysa0JBQWtCO0FBR2xHaEcsZUFBWW1HLFlBQVkvVyxRQUFRb1I7QUFDaEN4UCxhQUFTZ1AsV0FBWW9HO0FBQ3JCLFFBQUlwVixRQUFRO0FBQ1hBLGFBQU81QixRQUFRO0FBQ2Y0QixhQUFPbUksT0FBT25JLE9BQU81QjtJQUN0QjtFQUNELE9BQU87QUFDTjRCLGFBQVNnUCxXQUFZcUc7QUFDckIsUUFBSXJWLFFBQVE7QUFDWEEsYUFBTzVCLFFBQVE7QUFDZjRCLGFBQU9tSSxPQUFPbkksT0FBTzVCO0lBQ3RCO0VBQ0Q7QUFDQSxNQUFJK0QsU0FBNkI7SUFDaEM5RSxNQUFNNlI7SUFDTi9PLFNBQVMsQ0FBQTtJQUNUSyxPQUFPO0VBQ1I7QUFDQSxRQUFNOFUsVUFBd0MsQ0FBQTtBQUM5QyxRQUFNQyxRQUFrQixDQUFBO0FBQ3hCLFFBQU1DLFVBQW9CLENBQUE7QUFDMUIsUUFBTUMsU0FBU1YsZUFBZSxDQUFDQSxZQUFZLElBQUlqRztBQUMvQyxNQUFJNEc7QUFDSixNQUFJck47QUFDSixNQUFJN0gsUUFBdUI7QUFDM0IsTUFBSW1WLFVBQVU7QUFDZCxPQUFLdE4sSUFBSSxHQUFHQSxJQUFJb04sT0FBT2xQLFFBQVE4QixLQUFLO0FBQ25DcU4sV0FBT0QsT0FBT3BOLENBQUM7QUFDZixRQUFJcU4sS0FBS2pZLFVBQVV5UyxTQUFTO0FBQzNCL04sZUFBU3FLLGdCQUNSckssT0FBTzlFLE1BQ1BxWSxLQUFLRSxrQkFDTEYsS0FBS0csaUJBQ0xILEtBQUtJLFlBQ0xKLEtBQUtLLGFBQ047QUFDQSxVQUFJLENBQUM1VCxPQUFPM0IsT0FBTztBQUNsQm1WO0FBQ0EsWUFBSSxDQUFDRCxLQUFLRSxvQkFBb0JGLEtBQUtFLGlCQUFpQnJQLFdBQVcsR0FBRztBQUNqRWdQLGdCQUFNQSxNQUFNaFAsTUFBTSxJQUFJbVAsS0FBS0c7UUFDNUIsT0FBTztBQUNOUCxrQkFBUUEsUUFBUS9PLE1BQU0sSUFBSTtZQUN6QnlQLE1BQU1OLEtBQUtFO1lBQ1hLLElBQUlQLEtBQUtHO1VBQ1Y7UUFDRDtNQUNELFdBQVdyVixVQUFVLE1BQU07QUFDMUIsU0FBQztVQUFDQTtRQUFLLElBQUkyQjtNQUNaO0lBQ0QsV0FBV3VULEtBQUtqWSxVQUFVMFMsV0FBV3VGLEtBQUtFLG9CQUFvQkYsS0FBS0UsaUJBQWlCclAsU0FBUyxHQUFHO0FBQy9GcEUsZUFBU3FLLGdCQUFnQnJLLE9BQU85RSxNQUFNcVksS0FBS0Usa0JBQWtCLE1BQU0sTUFBTSxLQUFLO0FBQzlFLFVBQUksQ0FBQ3pULE9BQU8zQixPQUFPO0FBQ2xCbVY7QUFDQUgsZ0JBQVFBLFFBQVFqUCxNQUFNLElBQUltUCxLQUFLRTtNQUNoQyxXQUFXcFYsVUFBVSxNQUFNO0FBQzFCLFNBQUM7VUFBQ0E7UUFBSyxJQUFJMkI7TUFDWjtJQUNEO0VBQ0Q7QUFDQSxNQUFJM0IsVUFBVSxNQUFNO0FBRW5CUixhQUFTZ1AsV0FBWXFHO0FBQ3JCLFFBQUlyVixRQUFRO0FBQ1hBLGFBQU81QixRQUFRO0FBQ2Y0QixhQUFPbUksT0FBT25JLE9BQU81QjtJQUN0QjtFQUNEO0FBQ0EsTUFBSSxDQUFDd0UsS0FBSzZCLGVBQWVrUixVQUFVLEtBQUtuVixVQUFVLE1BQU07QUFDdkQyQixXQUFPOUUsT0FBQSx3QkFBQUQsT0FBK0IrRSxPQUFPOUUsSUFBSTtFQUNsRDtBQUVBMlIsYUFBWWtILFlBQVl6VyxVQUFVOFA7QUFDbENQLGFBQVltSCxZQUFZMVcsVUFBVyxDQUFDbUQsS0FBSzZCLGVBQWU0SyxlQUFnQkMsYUFBYUY7QUFDckYsTUFBSXhNLEtBQUs2QixlQUFlLENBQUMsQ0FBQ3NRLGNBQWM7QUFFdkMsUUFBSS9VLFVBQVVBLE9BQU81QixVQUFVLFVBQVU7QUFDeEMsVUFBSXNGLEdBQUdRLFdBQVc7QUFDakI4SyxtQkFBWW9ILGFBQWFoWSxRQUFRc0YsR0FBR1E7TUFDckM7SUFDRCxPQUFPO0FBQ044SyxpQkFBWXFILGNBQWNqWSxRQUFRc0YsR0FBR1E7SUFDdEM7QUFDQSxRQUFJeVIsWUFBWSxHQUFHO0FBQ2xCLFVBQUl4VCxPQUFPaEMsV0FBV2dDLE9BQU9oQyxRQUFRb0csU0FBUyxHQUFHO0FBQ2hEeUksbUJBQVlwUSxVQUFVUixTQUNwQnNGLEdBQUdRLFlBQVksS0FBS2YsV0FBVyxpQkFBaUIsS0FDakRoQixPQUFPaEMsUUFBUW1XLEtBQUtuVCxXQUFXLG9CQUFvQixDQUFDLEtBQ25ETyxHQUFHUSxZQUFZLEtBQUtmLFdBQVcsZ0JBQWdCO01BQ2xEO0FBQ0E2TCxpQkFBWWtILFlBQVl6VyxVQUFVaUUsR0FBR21DLGdCQUFnQjBKO0lBQ3RELFdBQVdvRyxTQUFTO0FBQ25CLFlBQU14VixVQUFvQixDQUFBO0FBQzFCLFlBQU1vVyxlQUF5QixDQUFBO0FBRS9CLFdBQUtsTyxJQUFJLEdBQUdBLElBQUltTixRQUFRalAsUUFBUThCLEtBQUs7QUFDcENsSSxnQkFBUUEsUUFBUW9HLE1BQU0sSUFBQSxJQUFBbkosT0FBUStGLFdBQVcsNEJBQTRCcVMsUUFBUW5OLENBQUMsQ0FBRSxDQUFDO01BQ2xGO0FBQ0EsVUFBSW1OLFFBQVFqUCxXQUFXLEdBQUc7QUFDekJnUSxxQkFBYUEsYUFBYWhRLE1BQU0sSUFBQSxJQUFBbkosT0FBUStGLFdBQVcsNEJBQTRCcVMsUUFBUSxDQUFDLENBQUUsQ0FBQztNQUM1RixXQUFXQSxRQUFRalAsU0FBUyxHQUFHO0FBQzlCZ1EscUJBQWFBLGFBQWFoUSxNQUFNLElBQUEsS0FBQW5KLE9BQVM2VyxlQUFldUIsUUFBUWpQLE1BQU0sQ0FBQztNQUN4RTtBQUVBLFdBQUs4QixJQUFJLEdBQUdBLElBQUlrTixNQUFNaFAsUUFBUThCLEtBQUs7QUFDbENsSSxnQkFBUUEsUUFBUW9HLE1BQU0sSUFBQSxJQUFBbkosT0FBUStGLFdBQVcsNEJBQTRCb1MsTUFBTWxOLENBQUMsQ0FBRSxDQUFDO01BQ2hGO0FBQ0EsVUFBSWtOLE1BQU1oUCxXQUFXLEdBQUc7QUFDdkJnUSxxQkFBYUEsYUFBYWhRLE1BQU0sSUFBQSxJQUFBbkosT0FBUStGLFdBQVcsNEJBQTRCb1MsTUFBTSxDQUFDLENBQUUsQ0FBQztNQUMxRixXQUFXQSxNQUFNaFAsU0FBUyxHQUFHO0FBQzVCZ1EscUJBQWFBLGFBQWFoUSxNQUFNLElBQUEsS0FBQW5KLE9BQVM2VyxlQUFlc0IsTUFBTWhQLE1BQU0sQ0FBQztNQUN0RTtBQUVBLFlBQU1pUSxRQUFRL0csU0FBUyxNQUFXO0FBQ2xDLFdBQUtwSCxJQUFJLEdBQUdBLElBQUlpTixRQUFRL08sUUFBUThCLEtBQUs7QUFDcEMsY0FBTXpFLFNBQVMwUixRQUFRak4sQ0FBQztBQUN4QixZQUFJekUsT0FBT29TLFNBQVNwUyxPQUFPcVMsSUFBSTtBQUM5QjlWLGtCQUFRQSxRQUFRb0csTUFBTSxJQUFBLElBQUFuSixPQUFRK0YsV0FBVyw0QkFBNEJTLE9BQU9vUyxJQUFJLENBQUM7UUFDbEYsT0FBTztBQUNON1Ysa0JBQVFBLFFBQVFvRyxNQUFNLElBQUEsSUFBQW5KLE9BQ2pCK0YsV0FBVyw0QkFBNEJTLE9BQU9vUyxJQUFJLENBQUMsRUFBQTVZLE9BQUdvWixLQUFLLEVBQUFwWixPQUFHK0YsV0FDakUsNEJBQ0FTLE9BQU9xUyxFQUNSLENBQUM7UUFDSDtNQUNEO0FBQ0EsVUFBSVgsUUFBUS9PLFdBQVcsR0FBRztBQUN6QixjQUFNM0MsU0FBUzBSLFFBQVEsQ0FBQztBQUN4QixZQUFJMVIsT0FBT29TLFNBQVNwUyxPQUFPcVMsSUFBSTtBQUM5Qk0sdUJBQWFBLGFBQWFoUSxNQUFNLElBQUEsSUFBQW5KLE9BQVErRixXQUFXLDRCQUE0QlMsT0FBT29TLElBQUksQ0FBQztRQUM1RixPQUFPO0FBQ05PLHVCQUFhQSxhQUFhaFEsTUFBTSxJQUFBLElBQUFuSixPQUFRK0YsV0FDdkMsNEJBQ0FTLE9BQU9vUyxJQUNSLENBQUMsRUFBQTVZLE9BQUdvWixLQUFLLEVBQUFwWixPQUFHK0YsV0FBVyw0QkFBNEJTLE9BQU9xUyxFQUFFLENBQUM7UUFDOUQ7TUFDRCxXQUFXWCxRQUFRL08sU0FBUyxHQUFHO0FBQzlCZ1EscUJBQWFBLGFBQWFoUSxNQUFNLElBQUEsS0FBQW5KLE9BQVM2VyxlQUFlcUIsUUFBUS9PLE1BQU0sQ0FBQztNQUN4RTtBQUNBLFVBQUlwRyxRQUFRb0csU0FBUyxHQUFHO0FBQ3ZCLGNBQU1rUSxnQkFBZ0J0VyxRQUFRbVcsS0FBS25ULFdBQVcsb0JBQW9CLENBQUM7QUFDbkUsY0FBTXVULGVBQ0xELGNBQWNsUSxTQUNkLE9BQ0U3QyxHQUFHUSxZQUFZLEtBQUtmLFdBQVcsaUJBQWlCLEdBQUdvRCxVQUNuRDdDLEdBQUdRLFlBQVksS0FBS2YsV0FBVyxnQkFBZ0IsR0FBR29ELFNBQ2pEZ1EsYUFBYUQsS0FBS25ULFdBQVcsb0JBQW9CLENBQUMsSUFDbERzVDtBQUNKekgsbUJBQVlwUSxVQUFVUixTQUNwQnNGLEdBQUdRLFlBQVksS0FBS2YsV0FBVyxpQkFBaUIsS0FDakR1VCxnQkFDQ2hULEdBQUdRLFlBQVksS0FBS2YsV0FBVyxnQkFBZ0I7TUFDbEQ7SUFDRDtFQUNEO0FBQ0E2TCxhQUFZN1EsV0FBV0MsUUFBUStELE9BQU85RTtBQUN0QzJSLGFBQVkySCxZQUFZdlksUUFBUXNSLGNBQWN5RSxpQkFBaUI7QUFDL0RuRixhQUFZNEgsV0FBV3hZLFFBQVErUSxZQUFZSCxXQUFZMkgsWUFBWXZZO0FBQ25FLE1BQUk0VyxrQkFBa0I7QUFDckJoRyxlQUFZNkgsTUFBTXpZLFFBQVErSSxPQUFPeUksaUJBQWlCaE4sS0FBSytRLGVBQWU7RUFDdkU7QUFFQTNFLGFBQVk4SCxTQUFTQyxNQUFNO0FBQzVCO0FBQ0EsSUFBTUMsYUFBYUEsQ0FBQ3ZHLE1BQXFCd0csY0FBc0M7QUFDOUUsUUFBTUMsT0FBT3pHLEtBQUswRztBQUNsQixRQUFNO0lBQUN4VDtFQUFLLElBQUk4TTtBQUNoQixNQUFJMkcsU0FBUztBQUNiLE1BQUlDLFdBQVcsT0FBTzVHLEtBQUs2RyxhQUFhO0FBQ3hDLE1BQUlqUDtBQUNKLFFBQU1zRSxZQUFZOEQsS0FBSzhHLGdCQUFnQixPQUFPOUcsS0FBSzhHLGFBQWFDLFdBQVc7QUFDM0UsUUFBTUMsYUFBYSxPQUFPaEgsS0FBS2lILFlBQVk7QUFDM0MsUUFBTUMsWUFBWWxILEtBQUt2USxNQUFNOEosTUFBTXlELEtBQUtDLElBQUksR0FBRytDLEtBQUt2USxNQUFNNEosUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzNFLE9BQUt6QixJQUFJLEdBQUdBLElBQUk0TyxVQUFVMVEsUUFBUThCLEtBQUs7QUFDdEMsVUFBTXVQLFNBQVNYLFVBQVU1TyxDQUFDO0FBQzFCLFFBQUlBLEtBQUt1UCxPQUFPQyxvQkFBb0JGLFdBQVc7QUFDOUM7SUFDRDtBQUdBQyxXQUFPN0IsZ0JBQWdCcEo7QUFDdkJpTCxXQUFPRSxjQUFjLENBQUNMO0FBQ3RCRyxXQUFPcGEsS0FBTXVhLE1BQU1OLGFBQWEvVCxHQUFHcUIsV0FBV3JCLEdBQUdtQjtFQUNsRDtBQUNBLE1BQUk0UyxZQUFZO0FBQ2Y7RUFDRDtBQUNBLE1BQUksQ0FBQ0osWUFBWUgsU0FBUy9ULFdBQVcsbUJBQW1CLEtBQUtBLFdBQVcsZ0JBQWdCLElBQUk7QUFBQSxRQUFBNlUsYUFBQXRHLDJCQUN4RXdGLElBQUEsR0FBQWU7QUFBQSxRQUFBO0FBQW5CLFdBQUFELFdBQUFyTSxFQUFBLEdBQUEsRUFBQXNNLFNBQUFELFdBQUFwRyxFQUFBLEdBQUFDLFFBQXlCO0FBQUEsY0FBZHFHLE9BQUFELE9BQUE3WjtBQUNWLFlBQUkrWixNQUFNRCxLQUFLaFk7QUFFZixZQUFJaVksS0FBSztBQUNSQSxnQkFBTUEsSUFBSW5PLE1BQU15RCxLQUFLQyxJQUFJLEdBQUd5SyxJQUFJck8sUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUV6TCxRQUFRLE1BQU0sR0FBRztBQUNwRSxjQUFJOFosUUFBUWhWLFdBQVcsbUJBQW1CLEdBQUc7QUFDNUNpVSxxQkFBUztBQUNUO1VBQ0QsV0FBV2UsUUFBUWhWLFdBQVcsZ0JBQWdCLEdBQUc7QUFDaERrVSx1QkFBVztBQUNYO1VBQ0Q7UUFDRDtNQUNEO0lBQUEsU0FBQXBGLEtBQUE7QUFBQStGLGlCQUFBamEsRUFBQWtVLEdBQUE7SUFBQSxVQUFBO0FBQUErRixpQkFBQTlGLEVBQUE7SUFBQTtFQUNEO0FBQ0EsTUFBSSxDQUFDbUYsWUFBWSxDQUFDRCxRQUFRO0FBQ3pCO0VBQ0Q7QUFDQSxNQUFJLENBQUN6VCxTQUFTQSxNQUFNNEMsV0FBVyxHQUFHO0FBQ2pDO0VBQ0Q7QUFDQSxRQUFNMk0sU0FBbUIsQ0FBQTtBQUFDLE1BQUFrRixhQUFBMUcsMkJBQ1AvTixLQUFBLEdBQUEwVTtBQUFBLE1BQUE7QUFBbkIsU0FBQUQsV0FBQXpNLEVBQUEsR0FBQSxFQUFBME0sU0FBQUQsV0FBQXhHLEVBQUEsR0FBQUMsUUFBMEI7QUFBQSxZQUFmeUcsT0FBQUQsT0FBQWphO0FBQ1Y7O1FBRUNrYSxLQUFLalUsT0FBTztRQUVaaVUsS0FBS3BZLFNBQ0xvWSxLQUFLcFksTUFBTXFHLFNBQVM7UUFDbkI7QUFFRCxjQUFNOEUsUUFBUWlOLEtBQUtwWSxNQUFNOEosTUFBTXlELEtBQUtDLElBQUksR0FBRzRLLEtBQUtwWSxNQUFNNEosUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRXZFLFlBQUksQ0FBQ3BHLEdBQUd5QixhQUFhLENBQUN6QixHQUFHeUIsVUFBVVQsS0FBSzJHLEtBQUssR0FBRztBQUMvQzZILGlCQUFPQSxPQUFPM00sTUFBTSxJQUFJOEU7UUFDekI7TUFDRDtJQUNEO0VBQUEsU0FBQTRHLEtBQUE7QUFBQW1HLGVBQUFyYSxFQUFBa1UsR0FBQTtFQUFBLFVBQUE7QUFBQW1HLGVBQUFsRyxFQUFBO0VBQUE7QUFDQSxNQUFJZ0IsT0FBTzNNLFdBQVcsR0FBRztBQUN4QjtFQUNEO0FBQ0EsT0FBSzhCLElBQUksR0FBR0EsSUFBSTRPLFVBQVUxUSxRQUFROEIsS0FBSztBQUN0QyxVQUFNdVAsU0FBU1gsVUFBVTVPLENBQUM7QUFDMUIsUUFBSUEsS0FBS3VQLE9BQU9DLG9CQUFvQkYsV0FBVztBQUM5QztJQUNEO0FBQ0FDLFdBQU9FLGNBQWM7QUFDckJGLFdBQU9wYSxLQUFNdWEsTUFBTXJVLEdBQUdtQjtBQUN0QixRQUFJcU8sT0FBTzNNLFNBQVMsR0FBRztBQUN0QnFSLGFBQU9XLE1BQU1yRjtJQUNkLE9BQU87QUFDTjBFLGFBQU92YSxLQUFNZSxRQUFROFUsT0FBTyxDQUFDLEtBQU0wRSxPQUFPOUIsZUFBZSxPQUFPLEtBQUEsSUFBQTFZLE9BQVN3YSxPQUFPOUIsVUFBVTtJQUMzRjtFQUNEO0FBQ0Q7QUFDQSxJQUFNMEMsbUJBQW1CQSxDQUFDdkIsV0FBNkJsWCxXQUEwQztBQUNoRyxNQUFJLENBQUNBLFVBQVUsQ0FBQ0EsT0FBT3VRLFNBQVMsQ0FBQ3ZRLE9BQU91USxNQUFNRSxPQUFPO0FBQ3BEO0VBQ0Q7QUFDQSxRQUFNO0lBQUNBO0VBQUssSUFBSXpRLE9BQU91UTtBQUN2QixhQUFXbUksS0FBS2pJLE9BQU87QUFDdEIsUUFBSSxDQUFDckssT0FBT0MsT0FBT29LLE9BQU9pSSxDQUFDLEdBQUc7QUFDN0I7SUFDRDtBQUNBekIsZUFBWXhHLE1BQXdDaUksQ0FBQyxHQUFJeEIsU0FBUztFQUNuRTtBQUNEO0FBQ0EsSUFBTXlCLGVBQWVBLENBQUN6QixXQUE2QjBCLGFBQXlEO0FBQzNHLE1BQUl0UTtBQUNKLE9BQUtBLElBQUksR0FBR0EsSUFBSTRPLFVBQVUxUSxRQUFROEIsS0FBSztBQUN0QyxVQUFNdVAsU0FBU1gsVUFBVTVPLENBQUM7QUFDMUJ1UCxXQUFPVyxNQUFNO0FBQ2JYLFdBQU9nQixXQUFXaEIsT0FBT2lCO0VBQzFCO0FBQ0EsTUFBSTVSLGVBQWU7QUFDbEIwUixhQUFTMUIsU0FBUztBQUNsQjtFQUNEO0FBQ0EsUUFBTWxYLFNBQXlCO0lBQzlCQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUm1ULE1BQU07SUFDTjBGLGFBQWE7SUFDYkMsU0FBUzVSLE9BQU84UCxVQUFVMVEsU0FBUyxFQUFFO0lBQ3JDeVMsU0FBUzdSLE9BQU84UCxVQUFVMVEsU0FBUyxFQUFFO0VBQ3RDO0FBQ0EsUUFBTTJNLFNBQW1CLENBQUE7QUFDekIsT0FBSzdLLElBQUksR0FBR0EsSUFBSTRPLFVBQVUxUSxRQUFROEIsS0FBSztBQUN0QyxVQUFNdVAsU0FBU1gsVUFBVTVPLENBQUM7QUFDMUIsVUFBTWhDLElBQUlvRixpQkFBaUJtTSxPQUFPZ0IsVUFBV2xWLEdBQUdxQyxTQUFTO0FBQ3pENlIsV0FBT0Msa0JBQWtCeFI7QUFDekI2TSxXQUFPQSxPQUFPM00sTUFBTSxJQUFBLFlBQUFuSixPQUFnQmlKLENBQUM7RUFDdEM7QUFDQXRHLFNBQU9tVCxTQUFTQSxPQUFPb0QsS0FBSyxHQUFHO0FBQy9CN1MsTUFBSXBILElBQUkwRCxNQUFNLEVBQ1o4UixLQUFNb0gsVUFBUztBQUNmVCxxQkFBaUJ2QixXQUFXZ0MsSUFBOEI7QUFDMUROLGFBQVMxQixTQUFTO0VBQ25CLENBQUMsRUFDQWxFLEtBQU1tRyxTQUFRO0FBQ2QsUUFBSSxDQUFDQSxLQUFLO0FBQ1RqUyxzQkFBZ0I7SUFDakI7QUFDQTBSLGFBQVMxQixTQUFTO0VBQ25CLENBQUM7QUFDSDtBQUNBLElBQU1rQyxhQUFjQyxXQUFnQztBQUNuRCxNQUFJQSxNQUFNQyxXQUFXO0FBQ3BCO0VBQ0Q7QUFDQSxXQUFBQyxLQUFBLEdBQUFDLFdBQXFCekssU0FBQXdLLEtBQUFDLFNBQUFoVCxRQUFBK1MsTUFBUztBQUE5QixVQUFXMUIsU0FBQTJCLFNBQUFELEVBQUE7QUFDVixRQUFJMUIsV0FBV3dCLE9BQU87QUFDckJ4QixhQUFPNEIsV0FBVztJQUNuQjtFQUNEO0FBQ0FKLFFBQU1DLFlBQVk7QUFDbEIsTUFBSUQsTUFBTWIsS0FBSztBQUNka0IsWUFBUUwsS0FBSztFQUNkLE9BQU87QUFFTixVQUFNTSxnQkFBZ0JOLE1BQU1PLGlCQUFpQlAsTUFBTVAsYUFBYTtBQUNoRSxVQUFNZSxjQUFjUixNQUFNL2IsS0FBTWUsU0FBUztBQUN6QyxRQUNFc2IsY0FBY25ULFdBQVcsS0FBS3FULFlBQVlyVCxTQUFTLEtBQ25EbVQsY0FBY25ULFNBQVMsS0FBS3FULFlBQVk5UCxRQUFRNFAsYUFBYSxHQUM3RDtBQUdETixZQUFNUyxZQUFZO0FBQ2xCLFlBQU14VCxJQUFJdVQsWUFBWUUsTUFBTSxHQUFHO0FBQy9CLE9BQUNWLE1BQU1QLFNBQVMsSUFBSXhTO0FBQ3BCK1MsWUFBTU8sZ0JBQWdCUCxNQUFNUDtBQUM1QixVQUFJeFMsRUFBRUUsU0FBUyxHQUFHO0FBQ2pCNlMsY0FBTXRELGFBQWF6UCxFQUFFLENBQUM7TUFDdkI7QUFDQStTLFlBQU1XLGtCQUFOWCxNQUFNVyxnQkFBa0I7UUFDdkJDLE9BQU8zVCxFQUFFLENBQUMsRUFBR0U7UUFDYjBULEtBQUs1VCxFQUFFLENBQUMsRUFBR0U7TUFDWjtJQUNEO0FBQ0EsUUFBSTZTLE1BQU1TLFdBQVc7QUFDcEJULFlBQU1jLFlBQVk7SUFDbkI7QUFDQSxRQUFJZCxNQUFNVyxlQUFlO0FBQ3hCLFlBQU07UUFBQ0E7TUFBYSxJQUFJWDtBQUN4QmUsaUJBQVcsTUFBTTtBQUNoQmYsY0FBTWdCLGFBQWFMLGNBQWNDLE9BQU9ELGNBQWNFLEdBQUc7TUFDMUQsR0FBRyxDQUFDO0lBQ0w7RUFDRDtBQUNEO0FBQ0EsSUFBTVIsVUFBV0wsV0FBZ0M7QUFDaEQsTUFBSUEsTUFBTUMsV0FBVztBQUNwQkQsVUFBTWlCLGdCQUFnQmpCLE1BQU1iLEtBQUssT0FBTyxNQUFNLElBQUk7QUFDbERhLFVBQU1iLE1BQU07RUFDYixPQUFPO0FBQ05ZLGVBQVdDLEtBQUs7RUFDakI7QUFDRDtBQUNBLElBQU1rQixjQUFjQSxNQUFZO0FBQy9CLFFBQU1yRCxZQUE4QixDQUFBO0FBQ3BDLFdBQUFzRCxNQUFBLEdBQUFDLFlBQXFCMUwsU0FBQXlMLE1BQUFDLFVBQUFqVSxRQUFBZ1UsT0FBUztBQUE5QixVQUFXM0MsU0FBQTRDLFVBQUFELEdBQUE7QUFDVixRQUFJM0MsT0FBT25hLFVBQVV3UyxrQkFBa0IySCxPQUFPbmEsVUFBVXVTLE1BQU07QUFDN0RpSCxnQkFBVUEsVUFBVTFRLE1BQU0sSUFBSXFSO0lBQy9CO0VBQ0Q7QUFDQSxNQUFJWCxVQUFVMVEsV0FBVyxHQUFHO0FBQzNCb00saUJBQ0VDLGFBQVk7QUFDWmtDLHFCQUFlbEMsT0FBTztJQUN2QixHQUNDNkgsU0FBUTtBQUNSLFdBQUt0ZSxHQUFHc0UsT0FBT2dhLEtBQUs7UUFBQzdaLEtBQUs7TUFBUSxDQUFDO0lBQ3BDLENBQ0Q7QUFDQTtFQUNEO0FBQ0E4WCxlQUFhekIsV0FBWXlELGNBQWE7QUFDckMsUUFBSUMsV0FBa0M7QUFDdEMsUUFBSUMsYUFBYTtBQUFBLFFBQUFDLGFBQUFuSiwyQkFDS2dKLFFBQUEsR0FBQUk7QUFBQSxRQUFBO0FBQXRCLFdBQUFELFdBQUFsUCxFQUFBLEdBQUEsRUFBQW1QLFNBQUFELFdBQUFqSixFQUFBLEdBQUFDLFFBQWdDO0FBQUEsY0FBckJ2SCxVQUFBd1EsT0FBQTFjO0FBQ1YsWUFBSWtNLFFBQVF1TyxjQUFjdk8sUUFBUXNPLFVBQVU7QUFDM0MsY0FBSXRPLFFBQVFpTyxLQUFLO0FBQ2hCb0MseUJBQUFBLFdBQWFyUTtVQUNkLFdBQVdBLFFBQVF5USxZQUFZLElBQUksR0FBRztBQUNyQ3pRLG9CQUFRMFEsT0FBTztVQUNoQjtRQUNELE9BQU87QUFHTkosdUJBQWE7UUFDZDtNQUNEO0lBQUEsU0FBQTNJLEtBQUE7QUFBQTRJLGlCQUFBOWMsRUFBQWtVLEdBQUE7SUFBQSxVQUFBO0FBQUE0SSxpQkFBQTNJLEVBQUE7SUFBQTtBQUNBLFFBQUl5SSxVQUFVO0FBQ2JsQixjQUFRa0IsUUFBUTtJQUNqQixXQUFXLENBQUNDLFlBQVk7QUFDdkJqSSxtQkFDRUMsYUFBWTtBQUNaa0MsdUJBQWVsQyxPQUFPO01BQ3ZCLEdBQ0M2SCxTQUFRO0FBQ1IsYUFBS3RlLEdBQUdzRSxPQUFPZ2EsS0FBSztVQUFDN1osS0FBSztRQUFRLENBQUM7TUFDcEMsQ0FDRDtJQUNEO0VBQ0QsQ0FBQztBQUNGO0FBQ0EsSUFBTXFhLGdCQUFnQkEsTUFBWTtBQUNqQyxNQUFJbE0sZ0JBQWdCRixVQUFVO0FBQzdCO0VBQ0Q7QUFDQUUsaUJBQWUvRixLQUFLLE9BQU87QUFDM0IrRixlQUFhbE8sT0FBTztBQUNwQmtPLGVBQWEzUSxRQUFRK0UsV0FBVyxpQkFBaUI7QUFDakQ0TCxlQUFhbU0saUJBQWlCLFNBQVNaLFdBQVc7QUFDbEQsTUFBSXJMLFdBQVc7QUFDZEEsY0FBVWtNLFlBQVlwTSxZQUFZO0VBQ25DLE9BQU87QUFDTkgsWUFBU2pSLE9BQU9vUixZQUFZO0VBQzdCO0FBQ0Q7QUFDQSxJQUFNcU0sa0JBQWtCQSxNQUFZO0FBQ25DLE1BQUksQ0FBQ3JNLGNBQWM7QUFDbEI7RUFDRDtBQUNBLE1BQUlzTSxhQUFhO0FBQ2pCLFdBQUFDLE1BQUEsR0FBQUMsWUFBcUJ6TSxTQUFBd00sTUFBQUMsVUFBQWhWLFFBQUErVSxPQUFTO0FBQTlCLFVBQVcxRCxTQUFBMkQsVUFBQUQsR0FBQTtBQUNWLFFBQUkxRCxPQUFPbmEsVUFBVXNTLFdBQVc7QUFDL0JzTCxtQkFBYTtBQUNiO0lBQ0Q7RUFDRDtBQUNBdE0sZUFBYStELFdBQVcsQ0FBQ3VJO0FBQzFCO0FBaUJBLElBQU1HLG1CQUFvQkMsYUFBNEQ7QUFDckYsU0FBT0EsUUFBUXhWLElBQUt5VixZQUFXO0FBQzlCLFdBQU9BLE9BQU94YixNQUFNOEosTUFBTXlELEtBQUtDLElBQUksR0FBR2dPLE9BQU94YixNQUFNNEosUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0VBQ3JFLENBQUM7QUFDRjtBQUNBLElBQU02UixvQkFBNEQ7RUFDakVDLFlBQVk7SUFDWHRTLEtBQUEsR0FBQWxNLE9BQVFqQixHQUFHQyxPQUFPQyxJQUNqQixjQUNELEdBQUMsaUZBQUE7OztJQUdEd2YsU0FBU0EsQ0FBQ0MsYUFBc0JDLGFBQXFEO0FBQ3BGLFlBQU01WixTQUFTMlo7QUFDZixVQUFJM1osVUFBVUEsT0FBT29FLFVBQVUsR0FBRztBQUNqQyxjQUFNekUsTUFBTXFGLE9BQU9oRixPQUFPLENBQUMsQ0FBQyxFQUFFNkgsTUFBTXlELEtBQUtDLElBQUksR0FBR3ZHLE9BQU9oRixPQUFPLENBQUMsQ0FBQyxFQUFFMkgsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ25GLGNBQU1vSixTQUFTL1EsT0FBTyxDQUFDO0FBQ3ZCLFlBQUk2WixTQUFTO0FBQ2JoVix1QkFBQUEsYUFBZSxJQUFJUSxPQUFBLEtBQUFwSyxPQUFZc0csR0FBRytDLGlCQUFlLElBQUEsQ0FBSTtBQUNyRCxpQkFBUzRCLElBQUksR0FBR0EsSUFBSTZLLE9BQU8zTSxRQUFROEIsS0FBSztBQUN2Q3JCLHFCQUFXZ0csWUFBWTtBQUN2QixnQkFBTXZELElBQUl6QyxXQUFXMEMsS0FBS3dKLE9BQU83SyxDQUFDLENBQUU7QUFDcEMsY0FBSW9CLEtBQUtBLEVBQUVsRCxTQUFTLEdBQUc7QUFDdEIyTSxtQkFBTzdLLENBQUMsSUFBSTZLLE9BQU83SyxDQUFDLEVBQUcyQixNQUFNeUQsS0FBS0MsSUFBSSxHQUFHd0YsT0FBTzdLLENBQUMsRUFBR3lCLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNyRSxnQkFBSWhJLFFBQVFvUixPQUFPN0ssQ0FBQyxHQUFHO0FBQ3RCMlQsdUJBQVM7WUFDVjtVQUNELE9BQU87QUFDTjlJLG1CQUFPK0ksT0FBTzVULEdBQUcsQ0FBQztBQUNsQkE7VUFDRDtRQUNEO0FBQ0E2SyxlQUFPOEksU0FBU0E7QUFDaEIsWUFBSUQsYUFBYWphLEtBQUs7QUFDckJvUixpQkFBT2dKLGFBQWFwYTtRQUNyQjtBQUVBLGVBQU9vUjtNQUNSO0FBQ0EsYUFBTztJQUNSO0VBQ0Q7RUFDQWlKLGdCQUFnQjtJQUNmN1MsS0FBQSxHQUFBbE0sT0FBUWpCLEdBQUdDLE9BQU9DLElBQ2pCLGNBQ0QsR0FBQyxpR0FBQTtJQUNEd2YsU0FBVUMsaUJBQXdEO0FBQUEsVUFBQU07QUFDakUsWUFBTUMsV0FBWVAsZ0JBQUEsUUFBQUEsZ0JBQUEsV0FBQU0scUJBQUFOLFlBQXNEeEwsV0FBQSxRQUFBOEwsdUJBQUEsU0FBQSxTQUF0REEsbUJBQTZEQztBQUMvRSxhQUFPQSxXQUFXYixpQkFBaUJhLFFBQVEsSUFBSTtJQUNoRDtFQUNEO0VBQ0FMLFFBQVE7SUFDUDFTLEtBQUEsR0FBQWxNLE9BQVFqQixHQUFHQyxPQUFPQyxJQUFJLGNBQWMsR0FBQyxnRUFBQTtJQUNyQ3dmLFNBQVNBLENBQUNDLGFBQXNCQyxhQUFxRDtBQUFBLFVBQUFPO0FBQ3BGLFlBQU07UUFBQzlMO01BQUssS0FBQThMLHNCQUFLUixnQkFBQSxRQUFBQSxnQkFBQSxTQUFBLFNBQUFBLFlBQXNEeEwsV0FBQSxRQUFBZ00sd0JBQUEsU0FBQUEsc0JBQVMsQ0FBQztBQUNqRixVQUFJLENBQUM5TCxTQUFTQSxNQUFNLElBQUksR0FBRztBQUMxQixlQUFPO01BQ1I7QUFFQSxpQkFBV2lJLEtBQUtqSSxPQUFPO0FBQ3RCLFlBQUksQ0FBQ3JLLE9BQU9DLE9BQU9vSyxPQUFPaUksQ0FBQyxHQUFHO0FBQzdCO1FBQ0Q7QUFDQSxZQUFJOEQsU0FBaUIvTCxNQUFNaUksQ0FBQyxFQUFHdlk7QUFDL0JxYyxpQkFBU0EsT0FBT3ZTLE1BQU15RCxLQUFLQyxJQUFJLEdBQUc2TyxPQUFPelMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzFELGNBQU1vSixTQUFpQyxDQUFDcUosTUFBTTtBQUM5Q3JKLGVBQU84SSxTQUFTO0FBQ2hCLFlBQUlELGFBQWFRLFFBQVE7QUFDeEJySixpQkFBT2dKLGFBQWFLO1FBQ3JCO0FBRUEsZUFBT3JKO01BQ1I7QUFDQSxhQUFPO0lBQ1I7RUFDRDtFQUNBc0osZUFBZTtJQUNkbFQsS0FBQSxHQUFBbE0sT0FBUWpCLEdBQUdDLE9BQU9DLElBQ2pCLGNBQ0QsR0FBQyxzR0FBQTtJQUNEd2YsU0FBVUMsaUJBQXdEO0FBQUEsVUFBQVc7QUFDakUsWUFBTUMsa0JBQW1CWixnQkFBQSxRQUFBQSxnQkFBQSxXQUFBVyxzQkFBQVgsWUFBc0R4TCxXQUFBLFFBQUFtTSx3QkFBQSxTQUFBLFNBQXREQSxvQkFBNkRDO0FBQ3RGLGFBQU9BLGtCQUFrQmxCLGlCQUFpQmtCLGVBQWUsSUFBSTtJQUM5RDtFQUNEO0VBQ0FDLGtCQUFrQjtJQUNqQnJULEtBQUEsR0FBQWxNLE9BQVFqQixHQUFHQyxPQUFPQyxJQUNqQixjQUNELEdBQUMsa0ZBQUE7SUFDRHdmLFNBQVVDLGlCQUF3RDtBQUFBLFVBQUFjO0FBQ2pFLFlBQU07UUFBQ3BNO01BQUssS0FBQW9NLHNCQUFLZCxnQkFBQSxRQUFBQSxnQkFBQSxTQUFBLFNBQUFBLFlBQXNEeEwsV0FBQSxRQUFBc00sd0JBQUEsU0FBQUEsc0JBQVMsQ0FBQztBQUNqRixVQUFJLENBQUNwTSxPQUFPO0FBQ1gsZUFBTztNQUNSO0FBQ0EsaUJBQVdpSSxLQUFLakksT0FBTztBQUN0QixZQUFJLENBQUNySyxPQUFPQyxPQUFPb0ssT0FBT2lJLENBQUMsR0FBRztBQUM3QjtRQUNEO0FBQ0EsY0FBTTtVQUFDdEI7UUFBVSxJQUFJM0csTUFBTWlJLENBQUM7QUFDNUIsWUFBSXRCLFlBQVk7QUFDZixpQkFBT3FFLGlCQUFpQnJFLFVBQVU7UUFDbkM7TUFDRDtBQUNBLGFBQU87SUFDUjtFQUNEO0FBQ0Q7QUFDQSxJQUFNMEYsb0JBQTREO0VBQ2pFQyxhQUFhO0lBQ1ozVSxNQUFNO0lBQ040VSxTQUFTLENBQUMsWUFBWTtJQUN0QnJhLE9BQU8sQ0FBQztJQUNSdEIsTUFBTTtJQUNONGIsTUFBTTtJQUNOQyxjQUFjO0VBQ2Y7RUFDQUMsVUFBVTtJQUNUL1UsTUFBTTtJQUNONFUsU0FBUyxDQUFDLGtCQUFrQixRQUFRO0lBQ3BDcmEsT0FBTyxDQUFDO0lBQ1J0QixNQUFNO0lBQ040YixNQUFNO0lBQ05DLGNBQWM7RUFDZjtFQUNBRSxVQUFVO0lBQ1RoVixNQUFNO0lBQ040VSxTQUFTLENBQUMsY0FBYyxnQkFBZ0I7SUFDeENyYSxPQUFPLENBQUM7SUFDUnRCLE1BQU07SUFDTjRiLE1BQU07SUFDTkMsY0FBYztFQUNmO0VBQ0FHLFFBQVE7SUFDUGpWLE1BQU07SUFDTjRVLFNBQVMsQ0FBQyxlQUFlO0lBQ3pCcmEsT0FBTyxDQUFDO0lBQ1J0QixNQUFNO0lBQ040YixNQUFNO0lBQ05DLGNBQWM7RUFDZjtFQUNBSSxXQUFXO0lBQ1ZsVixNQUFNO0lBQ040VSxTQUFTLENBQUMsa0JBQWtCO0lBQzVCcmEsT0FBTyxDQUFDO0lBQ1J0QixNQUFNO0lBQ040YixNQUFNO0lBQ05DLGNBQWM7RUFDZjtBQUNEO0FBRUEsSUFBTUssS0FBSztBQUNYLElBQU1DLE1BQU07QUFDWixJQUFNQyxNQUFNO0FBQ1osSUFBTUMsTUFBTTtBQUNaLElBQU1DLFFBQVE7QUFDZCxJQUFNQyxPQUFPO0FBQ2IsSUFBTUMsU0FBUztBQUNmLElBQU1DLEtBQUs7QUFDWCxJQUFNQyxPQUFPO0FBQ2IsSUFBTUMsTUFBTTtBQUNaLElBQU1DLE1BQU07QUFDWixJQUFNQyxpQkFBTixNQUFNQyxnQkFBZTtFQUNwQkMscUJBQXFCO0VBQ3JCQyxnQkFBZ0I7RUFDaEJDLFVBQW9DO0VBQ3BDekksbUJBQW1CO0VBQ25CMEksY0FBNkI7RUFDN0JDLGlCQUFpQjtFQUNqQkM7RUFDQUMsZ0JBQWdCMU87RUFDaEIyTztFQUNBQyxjQUFzQztFQUN0Q0MsWUFBb0M7RUFDcENDO0VBQ0FDLFdBQW1DO0VBQ25DQyxPQUEyQjtFQUMzQkM7RUFDQUMsU0FBUztFQUNUQyxhQUE0QjtFQUM1QkM7RUFDQUM7RUFDQS9oQjtFQUNBRztFQUNBNmhCLE9BQWlDO0VBQ2pDQztFQUNBQztFQUNBMUosa0JBQWtCO0VBQ2xCMkosZ0JBQWdCO0VBQ2hCeko7RUFDQUQsYUFBNEI7RUFDNUJyWSxRQUFRc1M7RUFDUjBQLGlCQUFpQjFQO0VBQ2pCMlAsb0JBQW9CO0VBQ3BCQyxlQUE4QjtFQUM5QkMsa0JBQWtCO0VBQ2xCQztFQUNBaEgsWUFBWTtFQUNaYyxnQkFBZ0I7RUFDaEJJO0VBQ0ErRixZQUF1QztFQUN2Q2pHLFlBQVk7RUFDWi9CLGNBQWM7RUFDZGlJLE1BQU07RUFDTkMsa0JBQWtCO0VBQ2xCQyxVQUEyQjtFQUMzQkMsV0FBVztFQUNYM0gsTUFBdUI7RUFDdkJLO0VBQ0FmO0VBQ0FzSSxjQUErQztFQUMvQzlHLFlBQVk7RUFDWm5FLFdBQVc7RUFDWGtMLFlBQ0NyQixNQUNBQyxNQUNBclIsT0FDQTdMLEtBQ0E2SyxXQUNDO0FBQ0QsU0FBSzBULFdBQVd0QixNQUFNQyxNQUFNclIsT0FBTzdMLEtBQUs2SyxTQUFTO0VBQ2xEO0VBQ0EwVCxXQUNDdEIsTUFDQUMsTUFDQXJSLE9BQ0E3TCxLQUNBNkssV0FDTztBQUlQLFFBQUlxUyxNQUFNO0FBQ1QsVUFBSXZQLFFBQVE7QUFDWHVQLGFBQUtzQixNQUFNO01BQ1o7QUFDQSxXQUFLbEMsZ0JBQWdCO0FBQ3JCLFdBQUtDLFVBQVVXLEtBQUt1QjtBQUNwQixXQUFLM0ssbUJBQW1Cakk7QUFDeEIsV0FBSzJRLGNBQWMsT0FBT3hjLFFBQVEsWUFBWUEsSUFBSXlFLFNBQVMsSUFBSXpFLElBQUlrSSxNQUFNLENBQUMsSUFBSTtBQUM5RSxXQUFLdVUsaUJBQWlCLENBQUMxZSxTQUFTLEtBQUt3ZSxTQUFTLEtBQUs7QUFFbkQsV0FBS21DLGFBQWE7QUFDbEIsVUFBSSxDQUFDLEtBQUtqQyxrQkFBa0IsS0FBS00sYUFBYTtBQUM3QyxhQUFLQSxZQUFZclUsTUFBTWxKLFVBQVU7TUFDbEM7QUFDQTBkLFdBQUtyaEIsT0FBTyxLQUFLK2dCLFFBQVE7SUFDMUIsT0FBTztBQUNOLFdBQUtOLGdCQUFnQjtBQUVyQixXQUFLeEksbUJBQW1CO0FBQ3hCLFdBQUswSSxjQUFjO0FBQ25CLFdBQUtDLGlCQUFpQjtBQUN0QixVQUFJa0MsZUFBZTlTO0FBQ25CLFVBQUksQ0FBQ21DLFFBQVE7QUFDWixjQUFNNFEsVUFBVTFYLEtBQUssTUFBTTtBQUMzQjBYLGdCQUFRdFcsWUFBWTtBQUNwQixZQUFJdEksS0FBSztBQUNSNGUsa0JBQVEvaUIsT0FBT3FMLEtBQUssT0FBTyxJQUFJLENBQUM7QUFDaEMsY0FBSXlYLGNBQWM7QUFDakJBLHlCQUFhRSxXQUFZQyxhQUFhRixTQUFTRCxhQUFhSSxXQUFXO0FBQ3ZFSiwyQkFBZUEsYUFBYUk7VUFDN0IsV0FBVzlCLE1BQU07QUFDaEJBLGlCQUFLcGhCLE9BQU8raUIsT0FBTztVQUNwQjtRQUNELFdBQVczQixRQUFRQSxLQUFLd0IsWUFBWTtBQUNuQ0csa0JBQVEvaUIsT0FBT3FMLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDOUIrVixlQUFLcGhCLE9BQU8raUIsT0FBTztRQUNwQjtNQUNEO0FBQ0EsV0FBS2hDLFdBQVcxVixLQUFLLE1BQU07QUFDM0IsV0FBSzBWLFNBQVN0VSxZQUFZO0FBQzFCLFlBQU1rTyxPQUFPdFAsS0FBSyxHQUFHO0FBQ3JCc1AsV0FBS3JXLE9BQU87QUFDWnFXLFdBQUs0QyxpQkFBaUIsU0FBUyxLQUFLNEYsS0FBS0MsS0FBSyxJQUFJLENBQUM7QUFDbkR6SSxXQUFLM2EsT0FBT3FMLEtBQUt0RixHQUFHQyxNQUFNRSxLQUFLLElBQUksQ0FBQztBQUNwQ3lVLFdBQUtwWSxRQUFRaUQsV0FBVyxjQUFjO0FBQ3RDLFdBQUt1YixTQUFTL2dCLE9BQU8yYSxJQUFJO0FBQ3pCLFlBQU0wSSxZQUFZaFksS0FBSzhHLFNBQVMsT0FBTyxNQUFNO0FBQzdDa1IsZ0JBQVU1VyxZQUFZO0FBQ3RCLFVBQUlxRixRQUFRO0FBQ1h1UixrQkFBVVYsTUFBTTtNQUNqQjtBQUNBVSxnQkFBVXJqQixPQUFPLEtBQUsrZ0IsUUFBUTtBQUM5QixVQUFJK0IsY0FBYztBQUNqQkEscUJBQWFFLFdBQVlDLGFBQWFJLFdBQVdQLGFBQWFJLFdBQVc7TUFDMUUsV0FBVzlCLE1BQU07QUFDaEJBLGFBQUtwaEIsT0FBT3FqQixTQUFTO01BQ3RCO0FBQ0FoQyxhQUFPZ0M7QUFDUCxXQUFLckMsY0FBYztBQUNuQixXQUFLQyxZQUFZO0FBQ2pCLFdBQUtQLFVBQVU7SUFDaEI7QUFDQSxTQUFLRyxpQkFBaUI3UjtBQUN0QixTQUFLb1MsT0FBT0E7QUFDWixTQUFLRSxTQUFTdmIsR0FBRytCO0FBQ2pCLFNBQUt1WixPQUFPQTtBQUNaLFNBQUtuSixrQkFBa0IsS0FBS0Q7QUFDNUIsU0FBSzRKLGdCQUFnQixLQUFLakI7QUFDMUIsU0FBS3hJLGdCQUFnQixLQUFLeUk7QUFDMUIsU0FBSzFJLGFBQWEsS0FBS3dJO0FBQ3ZCLFNBQUs3Z0IsUUFBUXNTO0FBQ2IsU0FBSzBQLGlCQUFpQjFQO0FBQ3RCLFNBQUsyUCxvQkFBb0IsS0FBSzlKO0FBQzlCLFNBQUsrSixlQUFlLEtBQUtyQjtBQUN6QixTQUFLc0Isa0JBQWtCLEtBQUtyQjtBQUM1QixTQUFLc0Isa0JBQWtCLEtBQUtyQjtBQUM1QixRQUFJLEtBQUtILFdBQVcsS0FBS3ZJLFlBQVk7QUFDcEMsV0FBS3VJLFFBQVFuZSxRQUFRLEtBQUs0VjtJQUMzQjtBQUNBaEgsWUFBUUEsUUFBUXZJLE1BQU0sSUFBSTtFQUMzQjtFQUNBaWEsZUFBcUI7QUFDcEIsU0FBSzdCLGNBQWMzVixLQUFLLE1BQU07QUFDOUIsUUFBSXNQLE9BQWlDO0FBQ3JDLFFBQUksS0FBSzFDLG9CQUFvQixLQUFLQSxpQkFBaUJyUCxTQUFTLEdBQUc7QUFDOUQrUixhQUFPdFAsS0FBSyxHQUFHO0FBQ2ZzUCxXQUFLclcsT0FBTztBQUNacVcsV0FBSzRDLGlCQUFpQixTQUFTLEtBQUsvYixPQUFPNGhCLEtBQUssSUFBSSxDQUFDO0FBQ3JEekksV0FBSzNhLE9BQU9xTCxLQUFLdEYsR0FBR0MsTUFBTXhFLFFBQVEsSUFBSSxDQUFDO0FBQ3ZDbVosV0FBS3BZLFFBQVFpRCxXQUFXLGlCQUFpQjtBQUN6QyxXQUFLd2IsWUFBWWhoQixPQUFPcUwsS0FBSyxLQUFLLElBQUksQ0FBQztBQUN2QyxXQUFLMlYsWUFBWWhoQixPQUFPMmEsSUFBSTtJQUM3QjtBQUNBLFFBQUksQ0FBQzVVLEdBQUdzQixvQkFBb0IsS0FBSzRRLGdCQUFnQixHQUFHO0FBQ25EMEMsYUFBT3RQLEtBQUssR0FBRztBQUNmc1AsV0FBS3JXLE9BQU87QUFDWnFXLFdBQUs0QyxpQkFBaUIsU0FBUyxLQUFLNEYsS0FBS0MsS0FBSyxJQUFJLENBQUM7QUFDbkR6SSxXQUFLM2EsT0FBT3FMLEtBQUt0RixHQUFHQyxNQUFNQyxRQUFRLElBQUksQ0FBQztBQUN2QzBVLFdBQUtwWSxRQUFRaUQsV0FBVyxpQkFBaUI7QUFDekMsV0FBS3diLFlBQVloaEIsT0FBT3FMLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDdkMsV0FBSzJWLFlBQVloaEIsT0FBTzJhLElBQUk7QUFDNUIsVUFBSSxDQUFDclIsaUJBQWlCdkQsR0FBR2lDLGFBQWE7QUFDckMsYUFBS2taLGNBQWM3VixLQUFLLE1BQU07QUFDOUJzUCxlQUFPdFAsS0FBSyxHQUFHO0FBQ2ZzUCxhQUFLclcsT0FBTztBQUNacVcsYUFBSzRDLGlCQUFpQixTQUFTLEtBQUtsWCxLQUFLK2MsS0FBSyxJQUFJLENBQUM7QUFDbkR6SSxhQUFLM2EsT0FBT3FMLEtBQUt0RixHQUFHQyxNQUFNSyxNQUFNLElBQUksQ0FBQztBQUNyQ3NVLGFBQUtwWSxRQUFRaUQsV0FBVyxlQUFlO0FBQ3ZDLGFBQUswYixZQUFZbGhCLE9BQU9xTCxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQ3ZDLGFBQUs2VixZQUFZbGhCLE9BQU8yYSxJQUFJO0FBQzVCQSxlQUFPdFAsS0FBSyxHQUFHO0FBQ2ZzUCxhQUFLclcsT0FBTztBQUNacVcsYUFBSzRDLGlCQUFpQixTQUFTLEtBQUtqWCxHQUFHOGMsS0FBSyxJQUFJLENBQUM7QUFDakR6SSxhQUFLM2EsT0FBT3FMLEtBQUt0RixHQUFHQyxNQUFNTSxJQUFJLElBQUksQ0FBQztBQUNuQ3FVLGFBQUtwWSxRQUFRaUQsV0FBVyxhQUFhO0FBQ3JDLGFBQUswYixZQUFZbGhCLE9BQU9xTCxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQ3ZDLGFBQUs2VixZQUFZbGhCLE9BQU8yYSxJQUFJO0FBQzVCLGFBQUtxRyxZQUFZaGhCLE9BQU8sS0FBS2toQixXQUFXO01BQ3pDO0lBQ0Q7QUFDQSxTQUFLSCxXQUFXMVYsS0FBSyxNQUFNO0FBQzNCLFNBQUswVixTQUFTdFUsWUFBWTtBQUMxQixTQUFLc1UsU0FBUy9nQixPQUFPLEtBQUtnaEIsV0FBVztBQUNyQyxTQUFLQyxZQUFZNVYsS0FBSyxNQUFNO0FBQzVCLFNBQUs0VixVQUFVeFUsWUFBWTtBQUMzQixTQUFLd1UsVUFBVXBVLE1BQU1sSixVQUFVO0FBQy9CZ1gsV0FBT3RQLEtBQUssR0FBRztBQUNmc1AsU0FBS3JXLE9BQU87QUFDWnFXLFNBQUs0QyxpQkFBaUIsU0FBUyxLQUFLcFgsUUFBUWlkLEtBQUssSUFBSSxDQUFDO0FBQ3REekksU0FBSzNhLE9BQU9xTCxLQUFLdEYsR0FBR0MsTUFBTUcsU0FBUyxJQUFJLENBQUM7QUFDeEN3VSxTQUFLcFksUUFBUWlELFdBQVcsa0JBQWtCO0FBQzFDLFNBQUt5YixVQUFVamhCLE9BQU9xTCxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQ3JDLFNBQUs0VixVQUFVamhCLE9BQU8yYSxJQUFJO0FBQzFCLFNBQUtvRyxTQUFTL2dCLE9BQU8sS0FBS2loQixTQUFTO0VBQ3BDO0VBQ0FxQyxrQkFBa0JDLG1CQUFtQztBQUNwRCxRQUNDLEtBQUtqQyxVQUNMcEMsa0JBQWtCLEtBQUtvQyxNQUFNLEtBQzdCcEMsa0JBQWtCLEtBQUtvQyxNQUFNLEVBQUdqQyxRQUNoQyxDQUFDa0UsbUJBQ0E7QUFDRCxXQUFLakMsU0FBU3ZiLEdBQUcrQjtJQUNsQjtBQUNBLFNBQUtoSSxRQUFRd1M7QUFDYixVQUFNaFMsT0FBTztBQUNia2MsZUFBVyxNQUFNO0FBQ2hCbGMsV0FBS2tqQixXQUFXRCxpQkFBaUI7SUFDbEMsR0FBR3hkLEdBQUc2QixhQUFhO0VBQ3BCO0VBQ0E2YixXQUFpQjtBQUNoQixVQUFNaEMsT0FBT3BXLEtBQUssTUFBTTtBQUN4Qm9XLFNBQUtpQyxTQUFTO0FBQ2RqQyxTQUFLbEUsaUJBQWlCLFVBQVUsS0FBS29HLE9BQU9QLEtBQUssSUFBSSxDQUFDO0FBQ3RELFNBQUszQixPQUFPQTtBQUNaLFVBQU1uaEIsT0FBTztBQUNiLFVBQU1aLE9BQU8yTCxLQUFLLE9BQU87QUFDekIzTCxTQUFLd0QsT0FBTztBQUNaeEQsU0FBS2trQixPQUFPN2QsR0FBRzhCO0FBQ2YsUUFBSSxDQUFDeUIsZUFBZTtBQVduQjVKLFdBQUs2ZCxpQkFBaUIsU0FBVXRaLFdBQVU7QUFDekMsY0FBTUUsTUFBdUJGLE1BQU1FLE9BQU87QUFDMUMsWUFDQzdELEtBQUs4aEIsT0FDTDloQixLQUFLZ2lCLFlBQVlqQyxPQUNqQixDQUFDL2YsS0FBSytoQixvQkFDTGxlLFFBQVF5YixPQUFPemIsUUFBUTBiLE9BQU8xYixRQUFRMmIsT0FBTzNiLFFBQVE0YixRQUNyRDtBQUNEemYsZUFBSzhoQixNQUFNO1FBQ1o7QUFDQSxZQUFJOWhCLEtBQUs4aEIsS0FBSztBQUNiLGlCQUFPO1FBQ1I7QUFDQSxZQUFJamUsUUFBUStiLE1BQU0vYixRQUFRZ2MsUUFBUWhjLFFBQVE2YixRQUFRN2IsUUFBUThiLFFBQVE7QUFFakUsY0FBSTNmLEtBQUtpaUIsYUFBYSxHQUFHO0FBQ3hCLG1CQUFPamlCLEtBQUt1akIsV0FBVzVmLEtBQUs7VUFDN0I7UUFDRCxPQUFPO0FBQ04sY0FBSUUsUUFBUTJiLE9BQU94ZixLQUFLZ2lCLFlBQVlqQyxPQUFPLENBQUMvZixLQUFLd2pCLGtCQUFrQixHQUFHO0FBRXJFeGpCLGlCQUFLeWpCLE9BQU87QUFDWjtVQUNEO0FBR0EsY0FBSXpqQixLQUFLa2dCLG9CQUFvQjtBQUM1QjtVQUNEO0FBQ0FsZ0IsZUFBS2dqQixrQkFBa0JuZixRQUFRd2IsTUFBTXhiLFFBQVFpYyxPQUFPamMsUUFBUTJiLEdBQUc7UUFDaEU7QUFDQSxlQUFPO01BQ1IsQ0FBQztBQUNEcGdCLFdBQUs2ZCxpQkFBaUIsV0FBWXRaLFdBQVU7QUFDM0MsY0FBTUUsTUFBdUJGLE1BQU1FLE9BQU87QUFDMUM3RCxhQUFLZ2lCLFVBQVVuZTtBQUNmN0QsYUFBS2lpQixXQUFXO0FBRWhCLFlBQUksQ0FBQ2ppQixLQUFLOGhCLE9BQU9qZSxRQUFRa2MsT0FBTyxDQUFDL2YsS0FBSytoQixpQkFBaUI7QUFFdEQvaEIsZUFBSzhoQixNQUFNO1FBQ1osV0FDQzloQixLQUFLOGhCLE9BQ0xqZSxRQUFRa2MsT0FDUixFQUNFMkQsT0FBTzdmLEdBQUcsS0FBSyxNQUFNNmYsT0FBTzdmLEdBQUcsS0FBSyxNQUNwQzZmLE9BQU83ZixHQUFHLEtBQUssTUFBTTZmLE9BQU83ZixHQUFHLEtBQUssTUFDckNBLFFBQVEsTUFFUjtBQUlEN0QsZUFBSzhoQixNQUFNO1FBQ1o7QUFDQSxZQUFJOWhCLEtBQUs4aEIsS0FBSztBQUNiLGlCQUFPO1FBQ1I7QUFFQSxZQUFJamUsUUFBUTBiLEtBQUs7QUFDaEIsaUJBQU92ZixLQUFLcWpCLE9BQU8xZixLQUFLO1FBQ3pCO0FBRUEsZUFBT0UsUUFBUTJiLE1BQU1sUCxRQUFRM00sS0FBSyxJQUFJO01BQ3ZDLENBQUM7QUFFRHZFLFdBQUs2ZCxpQkFBaUIsWUFBYXRaLFdBQVU7QUFDNUMzRCxhQUFLaWlCO0FBQ0wsZUFBT2ppQixLQUFLdWpCLFdBQVc1ZixLQUFLO01BQzdCLENBQUM7QUFDRHZFLFdBQUs2ZCxpQkFBaUIsU0FBUyxNQUFNO0FBQ3BDL0IsbUJBQVdsYixJQUFJO01BQ2hCLENBQUM7QUFFRGYsUUFBRUcsSUFBSSxFQUFFOEQsR0FBRyxRQUFRLEtBQUt5Z0IsU0FBU2IsS0FBSyxJQUFJLENBQUM7QUFFM0MsVUFBSTtBQUdIN2pCLFVBQUVHLElBQUksRUFBRThELEdBQUcsb0JBQW9CLE1BQU07QUFDcENsRCxlQUFLZ2lCLFVBQVVqQztBQUNmL2YsZUFBSytoQixrQkFBa0I7QUFDdkIvaEIsZUFBSzhoQixNQUFNO0FBQ1g5aEIsZUFBS2tnQixxQkFBcUI7UUFDM0IsQ0FBQztBQUNEamhCLFVBQUVHLElBQUksRUFBRThELEdBQUcsa0JBQWtCLE1BQU07QUFDbENsRCxlQUFLZ2lCLFVBQVVqQztBQUNmL2YsZUFBSytoQixrQkFBa0I7QUFDdkIvaEIsZUFBSzhoQixNQUFNO0FBQ1g5aEIsZUFBS2tnQixxQkFBcUI7UUFDM0IsQ0FBQztBQUNEamhCLFVBQUVHLElBQUksRUFBRThELEdBQUcsYUFBYSxNQUFNO0FBQzdCbEQsZUFBSzhoQixNQUFNO0FBQ1gsY0FBSTloQixLQUFLa2dCLG9CQUFvQjtBQUM1QjtVQUNEO0FBQ0FsZ0IsZUFBS2dqQixrQkFBa0IsS0FBSztRQUM3QixDQUFDO01BQ0YsUUFBUTtNQUVSO0FBQ0EvakIsUUFBRUcsSUFBSSxFQUFFOEQsR0FBRyxRQUFRLE1BQU07QUFDeEJsRCxhQUFLK2hCLGtCQUFrQjtBQUN2Qi9oQixhQUFLOGhCLE1BQU07TUFDWixDQUFDO0lBQ0Y7QUFDQSxTQUFLMWlCLE9BQU9BO0FBQ1osU0FBS0csT0FBT3dMLEtBQUssS0FBSztBQUN0QixRQUFJcVcsT0FBaUM7QUFDckMsUUFBSSxDQUFDcFksZUFBZTtBQUNuQm9ZLGFBQU9yVyxLQUFLLFFBQVE7QUFDcEJxVyxXQUFLbkUsaUJBQWlCLFNBQVMsTUFBTTtBQUNwQyxZQUFJamQsS0FBSzRqQixvQkFBb0IsQ0FBQyxHQUFHO0FBQ2hDNWpCLGVBQUtrakIsV0FBVyxPQUFPLElBQUk7UUFDNUI7TUFDRCxDQUFDO0FBQ0Q5QixXQUFLbkUsaUJBQWlCLFlBQWFuZCxPQUFNO0FBQ3hDLFlBQUlFLEtBQUs0akIsb0JBQW9CLENBQUMsR0FBRztBQUNoQzVqQixlQUFLcWpCLE9BQU92akIsQ0FBQztRQUNkO01BQ0QsQ0FBQztBQUNEc2hCLFdBQUtuRSxpQkFBaUIsVUFBVSxNQUFNO0FBQ3JDamQsYUFBSzRqQixvQkFBb0IsQ0FBQztBQUMxQjVqQixhQUFLWixLQUFNeWtCLE1BQU07TUFDbEIsQ0FBQztBQUNEekMsV0FBS25FLGlCQUFpQixTQUFVdFosV0FBVTtBQUN6QyxjQUFNRSxNQUF1QkYsTUFBTUUsT0FBTztBQUMxQyxZQUFJQSxRQUFRMmIsS0FBSztBQUNoQnhmLGVBQUt3akIsa0JBQWtCO0FBQ3ZCeGpCLGVBQUtaLEtBQU15a0IsTUFBTTtBQUNqQjNILHFCQUFXLE1BQU07QUFDaEJsYyxpQkFBS2tqQixXQUFXLElBQUk7VUFDckIsR0FBR3pkLEdBQUc2QixhQUFhO1FBQ3BCLFdBQVd6RCxRQUFRMGIsS0FBSztBQUN2QnZmLGVBQUtxakIsT0FBTzFmLEtBQUs7UUFDbEI7TUFDRCxDQUFDO0FBQ0QsVUFBSSxDQUFDOEIsR0FBR2dDLGNBQWM7QUFDckIsY0FBTXlaLGlCQUFpQm5XLEtBQUssUUFBUTtBQUNwQyxtQkFBV2xILE9BQU8rYSxtQkFBbUI7QUFDcEMsY0FBSUEsa0JBQWtCL2EsR0FBRyxFQUFHVixNQUFNO0FBQ2pDLGtCQUFNMmdCLE1BQU0vWSxLQUFLLFFBQVE7QUFDekIrWSxnQkFBSTNqQixRQUFRMEQ7QUFDWixnQkFBSUEsUUFBUSxLQUFLbWQsUUFBUTtBQUN4QjhDLGtCQUFJQyxXQUFXO1lBQ2hCO0FBQ0FELGdCQUFJcGtCLE9BQU9xTCxLQUFLNlQsa0JBQWtCL2EsR0FBRyxFQUFHcUcsTUFBTSxJQUFJLENBQUM7QUFDbkRnWCwyQkFBZXhoQixPQUFPb2tCLEdBQUc7VUFDMUI7UUFDRDtBQUNBNUMsdUJBQWVqRSxpQkFBaUIsVUFBVSxNQUFNO0FBQy9DamQsZUFBS2doQixTQUFTaGhCLEtBQUtraEIsZUFBZ0JuVSxRQUFRL00sS0FBS2toQixlQUFnQjhDLGFBQWEsRUFBRzdqQjtBQUNoRkgsZUFBS1osS0FBTXlrQixNQUFNO0FBQ2pCN2pCLGVBQUtrakIsV0FBVyxNQUFNLElBQUk7UUFDM0IsQ0FBQztBQUNELGFBQUtoQyxpQkFBaUJBO01BQ3ZCO0lBQ0Q7QUFDQSxTQUFLRSxPQUFPQTtBQUVaLFVBQU02QyxLQUFLbFosS0FBSyxPQUFPO0FBQ3ZCa1osT0FBR3JoQixPQUFPO0FBQ1ZxaEIsT0FBRzlqQixRQUFRK0UsV0FBVyxhQUFhO0FBQ25DK2UsT0FBR2hILGlCQUFpQixTQUFTLEtBQUtvRyxPQUFPUCxLQUFLLElBQUksQ0FBQztBQUNuRCxTQUFLekIsS0FBSzRDO0FBQ1YsVUFBTVIsU0FBUzFZLEtBQUssT0FBTztBQUMzQjBZLFdBQU83Z0IsT0FBTztBQUNkNmdCLFdBQU90akIsUUFBUStFLFdBQVcsaUJBQWlCO0FBQzNDdWUsV0FBT3hHLGlCQUFpQixTQUFTLEtBQUt3RyxPQUFPWCxLQUFLLElBQUksQ0FBQztBQUN2RCxTQUFLeEIsZUFBZW1DO0FBQ3BCLFVBQU0xQyxPQUFPaFcsS0FBSyxNQUFNO0FBQ3hCZ1csU0FBSzVVLFlBQVk7QUFDakI0VSxTQUFLeFUsTUFBTTJYLFdBQVc7QUFDdEJuRCxTQUFLcmhCLE9BQU9OLElBQUk7QUFDaEIyaEIsU0FBS3hVLE1BQU00WCxhQUFhO0FBQ3hCLFFBQUkvQyxNQUFNO0FBQ1RMLFdBQUtyaEIsT0FBTzBoQixJQUFJO0lBQ2pCO0FBQ0EsUUFBSSxLQUFLRixnQkFBZ0I7QUFDeEJILFdBQUtyaEIsT0FBTyxLQUFLd2hCLGNBQWM7SUFDaEM7QUFDQSxRQUFJLENBQUNsWSxlQUFlO0FBQ25CK1gsV0FBS3JoQixPQUFPLEtBQUtILElBQUk7SUFDdEI7QUFDQXdoQixTQUFLcmhCLE9BQU91a0IsRUFBRTtBQUNkbEQsU0FBS3JoQixPQUFPK2pCLE1BQU07QUFDbEJ0QyxTQUFLemhCLE9BQU9xaEIsSUFBSTtBQUNoQkksU0FBSzVVLE1BQU1sSixVQUFVO0FBQ3JCLFNBQUswZCxLQUFLcmhCLE9BQU95aEIsSUFBSTtFQUN0QjtFQUNBOWQsUUFBUU0sT0FBOEI7QUFDckMsUUFBSSxLQUFLd2MsaUJBQWlCLENBQUN2UCxZQUFZLEtBQUtrUSxNQUFNO0FBQ2pELFVBQUliLGdCQUFlLEtBQUthLE1BQU0sTUFBTSxLQUFLQyxNQUFNLElBQUk7SUFDcEQ7QUFDQSxRQUFJLENBQUNqUSxnQkFBZ0IsQ0FBQ0YsVUFBVTtBQUMvQixlQUFBd1QsTUFBQSxHQUFBQyxZQUFxQnhULFNBQUF1VCxNQUFBQyxVQUFBL2IsUUFBQThiLE9BQVM7QUFBOUIsY0FBV3pLLFNBQUEwSyxVQUFBRCxHQUFBO0FBQ1YsWUFBSXpLLE9BQU9uYSxVQUFVc1MsV0FBVztBQUMvQmtMLHdCQUFjO0FBQ2Q7UUFDRDtNQUNEO0lBQ0Q7QUFDQSxRQUFJLENBQUMsS0FBS21FLE1BQU07QUFDZixXQUFLZ0MsU0FBUztJQUNmO0FBQ0EsUUFBSSxLQUFLL0IsTUFBTTtBQUNkLFdBQUtBLEtBQUs3VSxNQUFNbEosVUFBVTtJQUMzQjtBQUNBLFFBQUksS0FBSzZkLGdCQUFnQjtBQUN4QixXQUFLQSxlQUFlM1UsTUFBTWxKLFVBQVU7SUFDckM7QUFDQSxTQUFLdVUsa0JBQWtCLEtBQUs2SjtBQUM1QixTQUFLRixnQkFBZ0IsS0FBS0k7QUFDMUIsU0FBSzdKLGdCQUFnQixLQUFLOEo7QUFDMUIsU0FBSy9KLGFBQWEsS0FBSzZKO0FBQ3ZCLFNBQUtuaUIsS0FBTXVhLE1BQU0sS0FBS3lILGdCQUFnQjliLEdBQUdtQixZQUFZbkIsR0FBR3FCO0FBQ3hELFNBQUsxSCxLQUFNZSxRQUFRLEtBQUt5WCxtQkFBbUIsS0FBS0MsZUFBZSxPQUFPLEtBQUEsSUFBQTFZLE9BQVMsS0FBSzBZLFVBQVU7QUFDOUYsU0FBSzJJLGdCQUFnQixLQUFLaGhCO0FBQzFCLFNBQUtvYixZQUFZLEtBQUtoRDtBQUN0QixTQUFLaUMsY0FBYyxLQUFLMEg7QUFDeEIsU0FBSy9oQixRQUFRLEtBQUtBLFVBQVVzUyxZQUFZQyxPQUFPQztBQUMvQyxTQUFLOEosZ0JBQWdCO01BQ3BCQyxPQUFPLEtBQUtuRSxnQkFBZ0J0UDtNQUM1QjBULEtBQUssS0FBS3BFLGdCQUFnQnRQO0lBQzNCO0FBQ0EsU0FBS3NULFlBQVk7QUFFakIsUUFBSSxLQUFLd0UsU0FBUztBQUNqQixXQUFLQSxRQUFRN1QsTUFBTWxKLFVBQVU7SUFDOUI7QUFDQSxTQUFLb2QsU0FBU2xVLE1BQU1sSixVQUFVO0FBQzlCLFNBQUs4ZCxLQUFNNVUsTUFBTWxKLFVBQVU7QUFDM0IsU0FBS2dlLEdBQUl4TSxXQUFXO0FBRXBCLFVBQU0zUSxTQUFTb00sUUFBUTNNLEtBQUs7QUFDNUIsU0FBS3ZFLEtBQU15a0IsTUFBTTtBQUNqQixTQUFLemtCLEtBQU1rbEIsV0FBVztBQUN0Qm5ILG9CQUFnQjtBQUNoQixXQUFPalo7RUFDUjtFQUNBZixLQUFLUSxPQUFrQ3FkLFFBQWlCc0QsVUFBMkI7QUFDbEYsVUFBTXBnQixTQUFTLEtBQUtiLFFBQVFNLEtBQUs7QUFDakMsVUFBTXlFLElBQUksS0FBS3FaO0FBQ2YsUUFBSXJaLEVBQUVFLFdBQVcsR0FBRztBQUNuQixhQUFPcEU7SUFDUjtBQUNBLFNBQUs5RSxLQUFNa2xCLFdBQVcsQ0FBQyxDQUFDQTtBQUN4QixTQUFLdEQsU0FBU0EsV0FBQSxRQUFBQSxXQUFBLFNBQUFBLFNBQVU7QUFDeEIsU0FBS2tDLFdBQVcsT0FBTyxJQUFJO0FBQzNCLFdBQU9oZjtFQUNSO0VBQ0EyZSxLQUFLbGYsT0FBOEI7QUFDbEMsV0FBTyxLQUFLUixLQUFLUSxPQUFPLEtBQUtxZCxVQUFVcEMsa0JBQWtCLEtBQUtvQyxNQUFNLEVBQUdqQyxPQUFPdFosR0FBRytCLGNBQWMsS0FBS3daLE1BQU07RUFDM0c7RUFDQWpiLEtBQUtwQyxPQUE4QjtBQUNsQyxXQUFPLEtBQUtSLEtBQUtRLE9BQU8sVUFBVSxJQUFJO0VBQ3ZDO0VBQ0FxQyxHQUFHckMsT0FBOEI7QUFDaEMsV0FBTyxLQUFLUixLQUFLUSxPQUFPLFdBQVc7RUFDcEM7RUFDQThmLFNBQWU7QUFDZCxRQUFJLEtBQUt0RCxpQkFBaUIsQ0FBQ3ZQLFVBQVU7QUFDcEMsV0FBSzJULGFBQWE7QUFDbEI7SUFDRDtBQUVBLFNBQUtoSixXQUFXO0FBQ2hCLFNBQUs0RixLQUFNNVUsTUFBTWxKLFVBQVU7QUFDM0IsUUFBSSxLQUFLK2MsU0FBUztBQUNqQixXQUFLQSxRQUFRN1QsTUFBTWxKLFVBQVU7SUFDOUI7QUFDQSxTQUFLb2QsU0FBU2xVLE1BQU1sSixVQUFVO0FBQzlCLFNBQUs3RCxRQUFRLEtBQUtnaEI7QUFDbEIsU0FBSzVJLGtCQUFrQixLQUFLNko7QUFDNUIsU0FBSzVKLGFBQWEsS0FBSzZKO0FBQ3ZCLFNBQUtILGdCQUFnQixLQUFLSTtBQUMxQixTQUFLN0osZ0JBQWdCLEtBQUs4SjtBQUMxQixRQUFJLEtBQUt4QixTQUFTO0FBQ2pCLFdBQUtBLFFBQVFuZSxRQUFRLEtBQUs0VixjQUFjLEtBQUtBLFdBQVd2UCxTQUFTLElBQUksS0FBS3VQLGFBQWE7SUFDeEY7QUFDQSxRQUFJLEtBQUtyWSxVQUFVc1MsV0FBVztBQUM3QixVQUFJLEtBQUtzTyxTQUFTO0FBQ2pCLGFBQUtBLFFBQVE3VCxNQUFNaVksa0JBQWtCO01BQ3RDO0lBQ0QsV0FBVyxDQUFDNVQsVUFBVTtBQUNyQixVQUFJO0FBQ0gsYUFBS3dQLFFBQVM3VCxNQUFNaVksa0JBQWtCL2UsR0FBRzBCO01BQzFDLFFBQVE7TUFFUjtJQUNEO0FBQ0FnVyxvQkFBZ0I7RUFDakI7RUFDQW9ILGVBQXFCO0FBQ3BCLFFBQUksQ0FBQzFTLFFBQVE7QUFDWixZQUFNNFMsT0FBTyxLQUFLMUQsS0FBSzZCO0FBQ3ZCLFVBQUk2QixNQUFNO0FBQ1RBLGFBQUt2akIsT0FBTztNQUNiO0lBQ0Q7QUFDQSxRQUFJLEtBQUs2ZixRQUFRLEtBQUtBLEtBQUsyQixZQUFZO0FBQ3RDLFdBQUszQixLQUFLN2YsT0FBTztJQUNsQjtBQUNBLGFBQVNrSixJQUFJLEdBQUdBLElBQUl5RyxRQUFRdkksUUFBUThCLEtBQUs7QUFDeEMsVUFBSXlHLFFBQVF6RyxDQUFDLE1BQU0sTUFBTTtBQUN4QnlHLGdCQUFRbU4sT0FBTzVULEdBQUcsQ0FBQztBQUNuQjtNQUNEO0lBQ0Q7QUFDQStTLG9CQUFnQjtFQUNqQjtFQUNBdUgsU0FBUy9nQixPQUE4QjtBQUN0QyxTQUFLa2QsU0FBVTNmLE9BQU87QUFDdEIsU0FBSzJmLFdBQVc7QUFDaEIsU0FBS2pKLGtCQUFrQixLQUFLRDtBQUM1QixTQUFLRSxhQUFhLEtBQUt3STtBQUN2QixTQUFLa0IsZ0JBQWdCLEtBQUtqQjtBQUMxQixTQUFLeEksZ0JBQWdCLEtBQUt5STtBQUMxQixTQUFLa0Isb0JBQW9CLEtBQUs5SjtBQUM5QixTQUFLK0osZUFBZSxLQUFLckI7QUFDekIsU0FBS3NCLGtCQUFrQixLQUFLckI7QUFDNUIsU0FBS3NCLGtCQUFrQixLQUFLckI7QUFDNUIsU0FBSy9nQixRQUFRc1M7QUFDYixRQUFJLENBQUMsS0FBSzhGLG1CQUFtQixLQUFLQSxnQkFBZ0J0UCxXQUFXLEdBQUc7QUFFL0QsV0FBS2ljLGFBQWE7SUFDbkIsT0FBTztBQUVOLFdBQUtuRSxRQUFTa0MsV0FBWXBoQixPQUFPO0FBQ2pDLFdBQUtrZixRQUFTMWdCLE9BQU9xTCxLQUFLLEtBQUs2TSxpQkFBaUIsSUFBSSxDQUFDO0FBQ3JELFdBQUt3SSxRQUFTcGMsT0FBTzBJLGFBQUEsR0FBQXZOLE9BQWdCc0csR0FBRzhDLG9CQUFrQixHQUFBLEVBQUFwSixPQUFJLEtBQUt5WSxlQUFlLENBQUU7QUFDcEYsV0FBS3dJLFFBQVNuZSxRQUFRLEtBQUs0VixjQUFjO0FBQ3pDLFdBQUt1SSxRQUFTalUsWUFBWSxLQUFLb1YsZ0JBQWdCLEtBQUs7QUFDcEQsV0FBS25CLFFBQVM3VCxNQUFNaVksa0JBQWtCO0FBQ3RDLFVBQUksS0FBSzVELGFBQWE7QUFDckIsYUFBS0EsWUFBWXJVLE1BQU1sSixVQUFVLEtBQUtrZSxnQkFBZ0IsS0FBSztNQUM1RDtBQUNBcEUsc0JBQWdCO0lBQ2pCO0FBQ0EsV0FBTzdNLFFBQVEzTSxLQUFLO0VBQ3JCO0VBQ0E0WCxhQUFtQjtBQUNsQixRQUFJLEtBQUs2RixNQUFNO0FBQ2QsV0FBS0EsS0FBSzdVLE1BQU1sSixVQUFVO0lBQzNCO0FBQ0EsUUFBSSxLQUFLNmQsZ0JBQWdCO0FBQ3hCLFdBQUtBLGVBQWUzVSxNQUFNbEosVUFBVTtJQUNyQztBQUNBLFNBQUsrWCxZQUFZO0VBQ2xCO0VBQ0EwQixZQUFZNkgsV0FBOEI7QUFDekMsU0FBS0MsY0FBYztBQUNuQixVQUFNemtCLFFBQVEsS0FBS2YsS0FBTWUsTUFBTTBiLE1BQU0sR0FBRztBQUN4QyxRQUFJaFksTUFBcUI7QUFDekIsUUFBSTFELE1BQU1tSSxTQUFTLEdBQUc7QUFDckJ6RSxZQUFNMUQsTUFBTSxDQUFDO0lBQ2Q7QUFDQSxRQUFJaUksSUFBSWpJLE1BQU0sQ0FBQyxFQUFHQyxRQUFRLE1BQU0sR0FBRyxFQUFFaUksS0FBSztBQUMxQyxRQUFJNUMsR0FBR3VCLHFCQUFxQjtBQUMzQm9CLFVBQUlvRSxXQUFXcEUsQ0FBQztJQUNqQjtBQUNBLFNBQUt3UyxZQUFZeFM7QUFDakJBLFFBQUlvRixpQkFBaUJwRixHQUFHM0MsR0FBR3FDLFNBQVM7QUFDcEMsUUFBSU0sRUFBRUUsV0FBVyxHQUFHO0FBQ25CLFdBQUttYixPQUFPO0FBQ1osYUFBTztJQUNSO0FBQ0EsUUFDQyxDQUFDa0IsY0FDQ2hnQixLQUFLMEIsc0JBQXNCLE1BQU0rQixNQUFNekQsS0FBSytCLFdBQWFqQixHQUFHeUIsYUFBYXpCLEdBQUd5QixVQUFVVCxLQUFLMkIsQ0FBQyxJQUM3RjtBQUNELFdBQUtxYixPQUFPO0FBQ1osYUFBTztJQUNSO0FBQ0EsU0FBSzdMLGtCQUFrQnhQO0FBQ3ZCLFNBQUt5UCxhQUFhaFU7QUFDbEIsU0FBSzBkLGdCQUFnQixLQUFLMUg7QUFDMUIsV0FBTztFQUNSO0VBQ0F3SixPQUFPMWYsT0FBOEI7QUFHcEMsU0FBS3NULFdBQVcvRyxRQUFRdk0sS0FBSyxNQUFNO0FBQ25DLFVBQU1PLFNBQVNvTSxRQUFRM00sS0FBSztBQUM1QixRQUFJLEtBQUttWixZQUFZLEdBQUc7QUFDdkIsWUFBTTlELFlBQVksQ0FBQyxJQUFJO0FBQ3ZCeUIsbUJBQWF6QixXQUFZeUQsY0FBYTtBQUNyQyxjQUFNOUMsU0FBUzhDLFNBQVMsQ0FBQztBQUN6QixZQUFJOUMsT0FBT1csS0FBSztBQUNma0Isa0JBQVE3QixNQUFNO1FBQ2YsV0FBV0EsT0FBT21ELFlBQVksSUFBSSxHQUFHO0FBQ3BDbkQsaUJBQU9vRCxPQUFPO1FBQ2Y7TUFDRCxDQUFDO0lBQ0Y7QUFDQSxXQUFPN1k7RUFDUjtFQUNBMmdCLFFBQWM7QUFDYixRQUFJLENBQUMsS0FBS3pFLFNBQVM7QUFFbEIsV0FBS0EsVUFBVXJWLEtBQUssR0FBRztBQUN2QixXQUFLcVYsUUFBUTFnQixPQUFPcUwsS0FBSyxPQUFPLElBQUksQ0FBQztBQUNyQyxXQUFLcVYsUUFBUTdULE1BQU1sSixVQUFVO0FBQzdCLFdBQUswZCxLQUFLNEIsYUFBYSxLQUFLdkMsU0FBUyxLQUFLVyxLQUFLdUIsV0FBWU0sV0FBVztJQUN2RTtBQUNBLFNBQUt4QyxRQUFRa0MsV0FBWXBoQixPQUFPO0FBQ2hDLFNBQUtrZixRQUFRMWdCLE9BQU9xTCxLQUFLLEtBQUs2TSxpQkFBaUIsSUFBSSxDQUFDO0FBQ3BELFNBQUt3SSxRQUFRcGMsT0FBTzBJLGFBQUEsR0FBQXZOLE9BQWdCc0csR0FBRzhDLG9CQUFrQixHQUFBLEVBQUFwSixPQUFJLEtBQUt5WSxlQUFlLENBQUU7QUFDbkYsU0FBS3dJLFFBQVFqVSxZQUFZLEtBQUtvVixnQkFBZ0IsS0FBSztBQUNuRCxTQUFLRSxvQkFBb0IsS0FBSzdKO0FBQzlCLFNBQUs4SixlQUFlLEtBQUs3SjtBQUN6QixTQUFLOEosa0JBQWtCLEtBQUtKO0FBQzVCLFNBQUtLLGtCQUFrQixLQUFLOUo7QUFFNUIsU0FBS3lELFdBQVc7QUFDaEIsU0FBSzRGLEtBQU01VSxNQUFNbEosVUFBVTtBQUMzQixTQUFLK2MsUUFBUW5lLFFBQVEsS0FBSzRWLGNBQWM7QUFDeEMsU0FBS3VJLFFBQVE3VCxNQUFNbEosVUFBVTtBQUM3QixRQUFJLEtBQUs4YyxlQUFlO0FBQ3ZCLFVBQUl2UCxZQUFZLEtBQUtrUSxNQUFNO0FBQzFCLFlBQUliLGdCQUFlLEtBQUthLE1BQU0sTUFBTSxLQUFLQyxNQUFNLElBQUk7TUFDcEQ7QUFDQSxXQUFLWixnQkFBZ0I7QUFDckIsV0FBS00sU0FBU3ZmLE9BQU87QUFDckIsV0FBS3FoQixhQUFhO0FBQ2xCLFdBQUt4QixLQUFLcmhCLE9BQU8sS0FBSytnQixRQUFRO0lBQy9CO0FBQ0EsUUFBSSxDQUFDLEtBQUtJLFVBQVU7QUFFbkIsWUFBTUUsT0FBT2hXLEtBQUssTUFBTTtBQUN4QixZQUFNc1AsT0FBT3RQLEtBQUssR0FBRztBQUNyQnNQLFdBQUtyVyxPQUFPO0FBQ1pxVyxXQUFLNEMsaUJBQWlCLFNBQVMsS0FBS3lILFNBQVM1QixLQUFLLElBQUksQ0FBQztBQUN2RHpJLFdBQUszYSxPQUFPcUwsS0FBS3RGLEdBQUdDLE1BQU1JLE1BQU0sSUFBSSxDQUFDO0FBQ3JDdVUsV0FBS3BZLFFBQVFpRCxXQUFXLGVBQWU7QUFDdkM2YixXQUFLcmhCLE9BQU9xTCxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQzNCZ1csV0FBS3JoQixPQUFPMmEsSUFBSTtBQUNoQixXQUFLcUcsWUFBYWhoQixPQUFPcWhCLElBQUk7QUFDN0IsV0FBS0YsV0FBV0U7QUFDaEIsVUFBSSxDQUFDblEsVUFBVTtBQUNkLFlBQUk7QUFDSCxlQUFLd1AsUUFBUTdULE1BQU1pWSxrQkFBa0IvZSxHQUFHMEI7UUFDekMsUUFBUTtRQUVSO01BQ0Q7SUFDRDtBQUNBLFFBQUksS0FBS3laLGFBQWE7QUFDckIsV0FBS0EsWUFBWXJVLE1BQU1sSixVQUFVLEtBQUtzZSxrQkFBa0IsS0FBSztJQUM5RDtBQUNBLFNBQUtsQixTQUFTbFUsTUFBTWxKLFVBQVU7QUFDOUIsU0FBSzdELFFBQVF5UztBQUNia0wsb0JBQWdCO0VBQ2pCO0VBQ0FKLFNBQWU7QUFFZCxRQUNFLEtBQUtuRixvQkFBb0IsS0FBS0QscUJBQzdCLEtBQUtFLGVBQWUsS0FBS3dJLGVBQ3hCLEtBQUt4SSxlQUFlLFFBQVEsS0FBS3dJLFlBQWEvWCxXQUFXLE1BQzNEM0QsS0FBSzBCLHNCQUFzQixNQUFNLEtBQUt1UixvQkFBb0JqVCxLQUFLK0IsV0FDL0RqQixHQUFHeUIsYUFBYXpCLEdBQUd5QixVQUFVVCxLQUFLLEtBQUttUixlQUFlLEdBQ3REO0FBQ0QsV0FBSzZMLE9BQU87QUFDWjtJQUNEO0FBQ0EsU0FBS29CLE1BQU07QUFDWCxRQUFJLENBQUMvVCxnQkFBZ0IsQ0FBQ0YsVUFBVTtBQUMvQixZQUFNNVEsT0FBTztBQUNiMFUsbUJBQ0VDLGFBQVk7QUFDWmtDLHVCQUFlbEMsU0FBUzNVLElBQUk7TUFDN0IsR0FDQ3djLFNBQVE7QUFDUixhQUFLdGUsR0FBR3NFLE9BQU9nYSxLQUFLO1VBQUM3WixLQUFLO1FBQVEsQ0FBQztNQUNwQyxDQUNEO0lBQ0Q7RUFDRDtFQUNBekIsT0FBT3lDLE9BQThCO0FBR3BDLFNBQUtqRCxTQUFTd1AsUUFBUXZNLEtBQUssTUFBTSxDQUFDO0FBQ2xDLFdBQU8yTSxRQUFRM00sS0FBSztFQUNyQjtFQUNBakQsU0FBU3VXLFVBQTBCO0FBQ2xDLFFBQUksS0FBS2tKLGVBQWU7QUFFdkIsV0FBS3NELE9BQU87QUFDWjtJQUNEO0FBQ0EsUUFBSSxDQUFDM1MsZ0JBQWdCLENBQUNGLFVBQVU7QUFDL0IsZUFBQWtVLE1BQUEsR0FBQUMsWUFBcUJsVSxTQUFBaVUsTUFBQUMsVUFBQXpjLFFBQUF3YyxPQUFTO0FBQTlCLGNBQVduTCxTQUFBb0wsVUFBQUQsR0FBQTtBQUNWLFlBQUluTCxPQUFPbmEsVUFBVXNTLFdBQVc7QUFDL0JrTCx3QkFBYztBQUNkO1FBQ0Q7TUFDRDtJQUNEO0FBQ0EsUUFBSWxNLGNBQWM7QUFDakIsV0FBS3NQLFFBQVNuZSxRQUFRO0FBQ3RCLFdBQUttZSxRQUFTN1QsTUFBTXlZLFdBQVc7QUFDL0IsVUFBSTtBQUNILGFBQUs1RSxRQUFTN1QsTUFBTWlZLGtCQUFrQi9lLEdBQUcwQjtNQUMxQyxRQUFRO01BRVI7QUFDQSxXQUFLcVosZ0JBQWdCLEtBQUtoaEI7QUFDMUIsV0FBS0EsUUFBUTBTO0FBQ2IsV0FBS3dPLFlBQWFuVSxNQUFNbEosVUFBVTtBQUNsQyxXQUFLc2QsVUFBV3BVLE1BQU1sSixVQUFVO0FBQ2hDOFosc0JBQWdCO0lBQ2pCLFdBQVd2TSxVQUFVO0FBRXBCLFdBQUsyVCxhQUFhO0lBQ25CLE9BQU87QUFDTixXQUFLL0QsZ0JBQWdCLEtBQUtoaEI7QUFDMUIsV0FBS0EsUUFBUTBTO0FBQ2IsV0FBSytFLFdBQVcsQ0FBQyxDQUFDQSxZQUFZeFIsR0FBRzRCO0FBQ2pDLFlBQU1ySCxPQUFPO0FBQ2IwVSxtQkFDRUMsYUFBWTtBQUNaa0MsdUJBQWVsQyxTQUFTM1UsSUFBSTtNQUM3QixHQUNDd2MsU0FBUTtBQUNSeGMsYUFBS1IsUUFBUVEsS0FBS3dnQjtBQUNsQixhQUFLdGlCLEdBQUdzRSxPQUFPZ2EsS0FBSztVQUFDN1osS0FBSztRQUFRLENBQUM7TUFDcEMsQ0FDRDtJQUNEO0VBQ0Q7RUFDQWtELFFBQVFsQyxPQUE4QjtBQUVyQyxTQUFLeWMsUUFBU25lLFFBQVEsS0FBSzRWLGNBQWM7QUFDekMsU0FBS3VJLFFBQVM3VCxNQUFNMFksaUJBQWlCO0FBQ3JDLFNBQUt6bEIsUUFBUSxLQUFLZ2hCO0FBQ2xCLFFBQUksS0FBS2hoQixVQUFVc1MsV0FBVztBQUM3QixXQUFLc08sUUFBUzdULE1BQU1pWSxrQkFBa0I7SUFDdkMsT0FBTztBQUNOLFVBQUk7QUFDSCxhQUFLcEUsUUFBUzdULE1BQU1pWSxrQkFBa0IvZSxHQUFHMEI7TUFDMUMsUUFBUTtNQUVSO0lBQ0Q7QUFDQSxTQUFLdVosWUFBYW5VLE1BQU1sSixVQUFVO0FBQ2xDLFNBQUtzZCxVQUFXcFUsTUFBTWxKLFVBQVU7QUFDaEM4WixvQkFBZ0I7QUFDaEIsV0FBTzdNLFFBQVEzTSxLQUFLO0VBQ3JCOztFQUVBdWhCLGFBQWFqRSxZQUEwQjtBQUN0QyxRQUFJLENBQUMsS0FBS0MsZ0JBQWdCO0FBQ3pCO0lBQ0Q7QUFDQSxhQUFTOVcsSUFBSSxHQUFHQSxJQUFJLEtBQUs4VyxlQUFlblUsUUFBUXpFLFFBQVE4QixLQUFLO0FBQzVELFdBQUs4VyxlQUFlblUsUUFBUTNDLENBQUMsRUFBRzJaLFdBQVcsS0FBSzdDLGVBQWVuVSxRQUFRM0MsQ0FBQyxFQUFHakssVUFBVThnQjtJQUN0RjtFQUNEO0VBQ0EyRCxnQkFBc0I7QUFDckIsUUFBSXhjLElBQUksS0FBS2hKLEtBQU1lLFNBQVM7QUFDNUJpSSxRQUFJQSxFQUFFaEksUUFBUSxZQUFZLEVBQUU7QUFDNUIsVUFBTW1MLEtBQUssSUFBSWhDLE9BQUEsS0FBQXBLLE9BQVlzRyxHQUFHK0MsaUJBQWUsSUFBQSxDQUFJO0FBQ2pELFFBQUkrQyxHQUFHOUUsS0FBSzJCLENBQUMsR0FBRztBQUNmQSxVQUFJQSxFQUFFMkQsTUFBTXlELEtBQUtDLElBQUksR0FBR3JILEVBQUV5RCxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRXpMLFFBQVEsWUFBWSxFQUFFO0lBQ3BFO0FBQ0FnSSxRQUFJQSxFQUFFaEksUUFBUSxXQUFXLEVBQUU7QUFDM0IsUUFBSXFGLEdBQUd1QixxQkFBcUI7QUFDM0JvQixVQUFJb0UsV0FBV3BFLENBQUM7SUFDakI7QUFHQSxRQUFJLEtBQUtoSixLQUFNZSxVQUFVLFFBQVEsS0FBS2YsS0FBTWUsVUFBVWlJLEdBQUc7QUFDeEQsV0FBS2hKLEtBQU1lLFFBQVFpSTtJQUNwQjtFQUNEO0VBQ0ErYyxTQUNDN2dCLEtBQ0E0ZCxhQUNBbEIsUUFDQWxELFVBQ0FzSCxVQUNPO0FBQ1AsUUFBSUMsS0FBc0NuRDtBQUMxQyxVQUFNcGlCLElBQUlraEI7QUFDVixVQUFNNVksSUFBSTBWO0FBQ1YsVUFBTXdILElBQUlGO0FBQ1YsVUFBTXBsQixPQUFPO0FBQ2IsVUFBTTRULE9BQU9BLE1BQVk7QUFDeEJ5UixTQUFJRTtBQUNKLFVBQUlGLEdBQUlFLGNBQWNGLEdBQUlHLFVBQVU7QUFDbkMsWUFBSUgsR0FBSXRILFFBQVE7QUFDZnNILGFBQUlJLFVBQVcxSCxTQUFTO1FBQ3pCO0FBQ0EsWUFBSXNILEdBQUlwSCxZQUFZO0FBQ25Cb0gsYUFBSUksVUFBV3hILGFBQWFvSCxHQUFJcEg7UUFDakM7QUFDQSxjQUFNeUgsbUJBQW1COUcsa0JBQWtCeUcsR0FBSXBFLFVBQVU7QUFDekQsWUFBSSxDQUFDb0UsR0FBSU0sYUFBYSxDQUFDRCxpQkFBaUJqaEIsTUFBTTZnQixDQUFDLEdBQUc7QUFDakRJLDJCQUFpQmpoQixNQUFNNmdCLENBQUMsSUFBSUQsR0FBSUk7UUFDakM7QUFDQXpsQixhQUFLWixLQUFNa2xCLFdBQVc7QUFDdEIsWUFBSSxDQUFDZSxHQUFJTyxXQUFXO0FBQ25CNWxCLGVBQUtvYyxnQkFBZ0JpSixHQUFJSSxXQUFXSixHQUFJckcsY0FBYzVXLEdBQUdpZCxHQUFJcEUsVUFBVTtRQUN4RTtBQUNBLFlBQUlvRSxPQUFPcmxCLEtBQUtraUIsYUFBYTtBQUM1QmxpQixlQUFLa2lCLGNBQWM7UUFDcEI7QUFDQW1ELGFBQUs7TUFDTjtJQUNEO0FBQ0FwbUIsTUFBRTRtQixRQUFRdmhCLEtBQU0wVyxVQUFTO0FBQ3hCLFlBQU0vRixTQUFTblYsRUFBRThkLFFBQVE1QyxNQUFNc0ssQ0FBQztBQUNoQyxVQUFJclEsVUFBVUEsT0FBTzNNLFNBQVMsR0FBRztBQUNoQytjLFdBQUlJLFlBQVlKLEdBQUlJLGNBQWMsT0FBT3hRLFNBQVMsQ0FBQyxHQUFHb1EsR0FBSUksV0FBVyxJQUFBLEdBQUd4Z0IsbUJBQUE2Z0IsZUFBYzdRLE1BQU0sQ0FBQztBQUM3RixZQUFJQSxPQUFPOEksUUFBUTtBQUNsQnNILGFBQUl0SCxTQUFTO1FBQ2Q7QUFDQSxZQUFJOUksT0FBT2dKLFlBQVk7QUFDdEJvSCxhQUFJcEgsYUFBYWhKLE9BQU9nSjtRQUN6QjtNQUNEO0FBQ0FySyxXQUFLO0lBQ04sQ0FBQyxFQUFFa0IsS0FBTW1HLFNBQVE7QUFDaEIsVUFBSSxDQUFDQSxLQUFLO0FBQ1RqUyx3QkFBZ0I7TUFDakI7QUFDQXFjLFNBQUlNLFlBQVk7QUFDaEIvUixXQUFLO0lBQ04sQ0FBQztFQUNGO0VBQ0FzUCxXQUFXRCxtQkFBNkI4QyxPQUF1QjtBQUU5RDdLLGVBQVcsSUFBSTtBQUVmLFFBQUksS0FBS2dGLG9CQUFvQjtBQUM1QjtJQUNEO0FBRUEsU0FBSzBFLGNBQWM7QUFDbkIsUUFBSXhjLElBQUksS0FBS2hKLEtBQU1lO0FBRW5CLFVBQU02bEIsT0FBTzVkLEVBQUV5RCxRQUFRLEdBQUc7QUFDMUIsUUFBSW1hLFNBQVMsSUFBSTtBQUNoQixXQUFLbk8sYUFBYTtJQUNuQixPQUFPO0FBQ04sV0FBS0EsYUFBYXpQLEVBQUUyRCxNQUFNeUQsS0FBS0MsSUFBSSxHQUFHdVcsT0FBTyxDQUFDLENBQUM7QUFDL0M1ZCxVQUFJQSxFQUFFMkQsTUFBTSxHQUFHeUQsS0FBS0MsSUFBSSxHQUFHdVcsSUFBSSxDQUFDO0lBQ2pDO0FBQ0EsUUFBSSxLQUFLcEwsY0FBY3hTLEtBQUssQ0FBQzJkLE9BQU87QUFDbkM7SUFDRDtBQUNBLFFBQUksS0FBS25MLGNBQWN4UyxHQUFHO0FBQ3pCK1Usc0JBQWdCO0lBQ2pCO0FBQ0EsU0FBS3ZDLFlBQVl4UztBQUNqQixTQUFLc1QsZ0JBQWdCdFQ7QUFFckIsU0FBS2laLEdBQUl4TSxXQUFXek0sRUFBRUUsU0FBUyxLQUFLLENBQUMsQ0FBQzdDLEdBQUd5QixhQUFhekIsR0FBR3lCLFVBQVVULEtBQUsyQixDQUFDO0FBQ3pFLFFBQUlZLGVBQWU7QUFFbEIsVUFBSSxLQUFLb1ksTUFBTTtBQUNkLGFBQUtBLEtBQUs3VSxNQUFNbEosVUFBVTtNQUMzQjtBQUNBLFVBQUksS0FBSzZkLGdCQUFnQjtBQUN4QixhQUFLQSxlQUFlM1UsTUFBTWxKLFVBQVU7TUFDckM7QUFDQSxVQUFJLEtBQUs5RCxNQUFNO0FBQ2QsYUFBS0EsS0FBS2dOLE1BQU1sSixVQUFVO01BQzNCO0FBQ0E7SUFDRDtBQUNBLFFBQUkrRSxFQUFFRSxXQUFXLEdBQUc7QUFDbkIsV0FBSzhULGdCQUFnQixDQUFBLENBQUU7QUFDdkI7SUFDRDtBQUNBLFFBQUlnSixXQUFXaGQsRUFBRWhJLFFBQVEsZ0NBQWdDLEVBQUUsRUFBRUEsUUFBUWtKLGlCQUFpQixHQUFHO0FBQ3pGOGIsZUFBVzVYLGlCQUFpQjRYLFVBQVUzZixHQUFHcUMsU0FBUztBQUNsRHNkLGVBQVdBLFNBQVMvYyxLQUFLO0FBQ3pCLFFBQUkrYyxTQUFTOWMsV0FBVyxHQUFHO0FBQzFCLFdBQUs4VCxnQkFBZ0IsQ0FBQSxDQUFFO0FBQ3ZCO0lBQ0Q7QUFDQSxRQUFJLEtBQUs4RixhQUFhO0FBQ3JCLFdBQUtBLFlBQVkwRCxZQUFZO0lBQzlCO0FBQ0EsVUFBTTNFLGFBQWFyQyxrQkFBa0IsS0FBS29DLE1BQU0sSUFBSSxLQUFLQSxTQUFTO0FBQ2xFaUMsMEJBQUFBLG9CQUFzQnJFLGtCQUFrQnFDLFVBQVUsRUFBR2pDO0FBQ3JELFVBQU1pSCxlQUFlckgsa0JBQWtCcUMsVUFBVSxFQUFHeGMsTUFBTTJnQixRQUFRO0FBQ2xFLFFBQUlhLGNBQWM7QUFDakIsV0FBSzdKLGdCQUFnQjZKLGNBQWNoRCxtQkFBbUI3YSxHQUFHNlksVUFBVTtBQUNuRTtJQUNEO0FBQ0EsVUFBTTtNQUFDbkM7SUFBTyxJQUFJRixrQkFBa0JxQyxVQUFVO0FBQzlDLFNBQUtpQixjQUFjO01BQ2xCdUQsV0FBVztNQUNYRixXQUFXO01BQ1hDLFVBQVUxRyxRQUFReFc7TUFDbEIwVyxjQUFjaUU7TUFDZGhDO0lBQ0Q7QUFDQSxTQUFLaUYsVUFBVXBILFNBQVMsS0FBS29ELGFBQWE5WixHQUFHZ2QsUUFBUTtFQUN0RDtFQUNBYyxVQUFVcEgsU0FBbUJ1RyxJQUE4QmpkLEdBQVdnZCxVQUF3QjtBQUFBLFFBQUFlLGFBQUExUywyQkFDdkVxTCxPQUFBLEdBQUFzSDtBQUFBLFFBQUE7QUFBdEIsV0FBQUQsV0FBQXpZLEVBQUEsR0FBQSxFQUFBMFksU0FBQUQsV0FBQXhTLEVBQUEsR0FBQUMsUUFBK0I7QUFBQSxjQUFwQnlTLFVBQUFELE9BQUFqbUI7QUFDVixjQUFNNmdCLFNBQVN0RCxrQkFBa0IySSxPQUFPO0FBQ3hDLGNBQU0vaEIsTUFBTUssS0FBSzJoQixlQUFldEYsT0FBTzNWLElBQUlqTCxRQUFRLFFBQVF5RyxtQkFBbUJ1ZSxRQUFRLENBQUM7QUFDdkYsYUFBS0QsU0FBUzdnQixLQUFLK2dCLElBQUlyRSxRQUFRNVksR0FBR2dkLFFBQVE7TUFDM0M7SUFBQSxTQUFBcFIsS0FBQTtBQUFBbVMsaUJBQUFybUIsRUFBQWtVLEdBQUE7SUFBQSxVQUFBO0FBQUFtUyxpQkFBQWxTLEVBQUE7SUFBQTtFQUNEO0VBQ0FtSSxnQkFDQ25ILFFBQ0FzUixrQkFDQXpJLFVBQ0FtRCxZQUNPO0FBQ1AsU0FBSzdoQixLQUFNa2xCLFdBQVc7QUFDdEIsU0FBS2hLLE1BQU07QUFDWCxTQUFLc0IsWUFBWTtBQUNqQixRQUFJLENBQUMsS0FBS3dGLE1BQU07QUFDZjtJQUNEO0FBQ0EsUUFBSXBZLGVBQWU7QUFDbEIsVUFBSSxLQUFLb1ksTUFBTTtBQUNkLGFBQUtBLEtBQUs3VSxNQUFNbEosVUFBVTtNQUMzQjtBQUNBLFVBQUksS0FBSzZkLGdCQUFnQjtBQUN4QixhQUFLQSxlQUFlM1UsTUFBTWxKLFVBQVU7TUFDckM7QUFDQSxVQUFJLEtBQUs5RCxNQUFNO0FBQ2QsYUFBS0EsS0FBS2dOLE1BQU1sSixVQUFVO01BQzNCO0FBQ0EsV0FBS3dXLGNBQWM7QUFDbkI7SUFDRDtBQUNBLFNBQUtvSCxhQUFhQSxlQUFBLFFBQUFBLGVBQUEsU0FBQUEsYUFBYztBQUNoQyxRQUFJQSxZQUFZO0FBQ2YsVUFBSSxDQUFDLEtBQUtDLGdCQUFnQjtBQUN6QixhQUFLRCxhQUFhO01BQ25CO0lBQ0QsV0FBVyxLQUFLQyxnQkFBZ0I7QUFDL0IsV0FBS0EsZUFBZTNVLE1BQU1sSixVQUFVO0lBQ3JDO0FBQ0EsVUFBTW1qQixhQUFhLEtBQUs1TDtBQUN4QixRQUFJa0QsVUFBVTtBQUNiLFVBQUkwSSxXQUFXM2EsUUFBUWlTLFFBQVEsR0FBRztBQUNqQztNQUNEO0FBQ0EsVUFBSSxLQUFLK0QsYUFBYTJFLFdBQVczYSxRQUFRLEtBQUtnVyxTQUFTLE1BQU0sS0FBSyxLQUFLQSxVQUFVdlosU0FBU3dWLFNBQVN4VixRQUFRO0FBQzFHO01BQ0Q7SUFDRDtBQUNBLFNBQUt1WixZQUFZL0Q7QUFFakIsVUFBTTFWLElBQUksS0FBS2hKLEtBQU1lLE1BQU0wYixNQUFNLEdBQUc7QUFDcEMsVUFBTWhZLE1BQU11RSxFQUFFRSxTQUFTLElBQUEsSUFBQW5KLE9BQVFpSixFQUFFLENBQUMsQ0FBQyxJQUFLO0FBQ3hDLFVBQU1xZSxlQUFlaGhCLEdBQUd1QixzQkFBc0J3RixXQUFXcEUsRUFBRSxDQUFDLENBQUMsSUFBSUEsRUFBRSxDQUFDO0FBQ3BFLFFBQUlzZSxjQUFjRDtBQUNsQixVQUFNRSxlQUFlMVIsVUFBVUEsT0FBTzhJO0FBQ3RDLFFBQUkzVDtBQUNKLFFBQUk2SyxRQUFRO0FBQ1gsVUFBSUEsT0FBT2dKLGNBQWN3SSxhQUFhNWEsUUFBUWlTLGFBQUEsUUFBQUEsYUFBQSxTQUFBQSxXQUFZLEVBQUUsTUFBTSxHQUFHO0FBRXBFNEksc0JBQWN6UixPQUFPZ0osYUFBYXdJLGFBQWExYSxPQUFPK1IsYUFBQSxRQUFBQSxhQUFBLFNBQUFBLFdBQVksSUFBSXhWLE1BQU07TUFDN0U7QUFDQSxZQUFNc2UsT0FBT0YsWUFBWTdkLFlBQVk7QUFFckMsVUFBSXBELEdBQUd5QixXQUFXO0FBQ2pCLGFBQUtrRCxJQUFJLEdBQUdBLElBQUk2SyxPQUFPM00sUUFBUThCLEtBQUs7QUFDbkMsY0FBSTNFLEdBQUd5QixVQUFVVCxLQUFLd08sT0FBTzdLLENBQUMsQ0FBRSxHQUFHO0FBQ2xDNkssbUJBQU8rSSxPQUFPNVQsR0FBRyxDQUFDO0FBQ2xCQTtVQUNEO1FBQ0Q7TUFDRDtBQUNBNkssYUFBTzRSLEtBQUssQ0FBQ0MsR0FBV0MsTUFBYztBQUNyQyxZQUFJRCxNQUFNQyxHQUFHO0FBQ1osaUJBQU87UUFDUjtBQUNBLFlBQUlELEVBQUVqYixRQUFRa2IsQ0FBQyxNQUFNLEdBQUc7QUFDdkIsaUJBQU87UUFDUjtBQUVBLFlBQUlBLEVBQUVsYixRQUFRaWIsQ0FBQyxNQUFNLEdBQUc7QUFDdkIsaUJBQU87UUFDUjtBQUdBLFlBQUlFLGVBQWVGLEVBQUVqYixRQUFRNmEsV0FBVyxNQUFNLElBQUksSUFBSTtBQUN0RCxZQUFJTyxlQUFlRixFQUFFbGIsUUFBUTZhLFdBQVcsTUFBTSxJQUFJLElBQUk7QUFDdEQsWUFBSU0saUJBQWlCQyxjQUFjO0FBQ2xDLGlCQUFPQSxlQUFlRDtRQUN2QjtBQUVBLGNBQU1FLE9BQU9KLEVBQUVqZSxZQUFZO0FBQzNCLGNBQU1zZSxPQUFPSixFQUFFbGUsWUFBWTtBQUMzQm1lLHVCQUFlRSxLQUFLcmIsUUFBUSthLElBQUksTUFBTSxJQUFJLElBQUk7QUFDOUNLLHVCQUFlRSxLQUFLdGIsUUFBUSthLElBQUksTUFBTSxJQUFJLElBQUk7QUFDOUMsWUFBSUksaUJBQWlCQyxjQUFjO0FBQ2xDLGlCQUFPQSxlQUFlRDtRQUN2QjtBQUNBLFlBQUlGLElBQUlDLEdBQUc7QUFDVixpQkFBTztRQUNSO0FBQ0EsWUFBSUEsSUFBSUQsR0FBRztBQUNWLGlCQUFPO1FBQ1I7QUFDQSxlQUFPO01BQ1IsQ0FBQztBQUVELFdBQUsxYyxJQUFJLEdBQUdBLElBQUk2SyxPQUFPM00sUUFBUThCLEtBQUs7QUFDbkMsWUFDRUEsSUFBSSxJQUFJNkssT0FBTzNNLFVBQVUyTSxPQUFPN0ssQ0FBQyxNQUFNNkssT0FBTzdLLElBQUksQ0FBQyxLQUNuRHpGLEtBQUswQixzQkFBc0IsTUFBTTRPLE9BQU83SyxDQUFDLE1BQU16RixLQUFLK0IsU0FDcEQ7QUFDRHVPLGlCQUFPK0ksT0FBTzVULEdBQUcsQ0FBQztBQUNsQkE7UUFDRDtNQUNEO0lBQ0Q7QUFDQSxRQUFJLENBQUM2SyxVQUFVQSxPQUFPM00sV0FBVyxHQUFHO0FBQ25DLFVBQUksS0FBSzhZLE1BQU07QUFDZCxhQUFLQSxLQUFLN1UsTUFBTWxKLFVBQVU7TUFDM0I7QUFDQSxVQUFJLEtBQUs2ZCxnQkFBZ0I7QUFDeEIsYUFBS0EsZUFBZTNVLE1BQU1sSixVQUFVO01BQ3JDO0FBQ0EsVUFBSTRkLGNBQWNyQyxrQkFBa0JxQyxVQUFVLEtBQUssQ0FBQ3JDLGtCQUFrQnFDLFVBQVUsRUFBR2xDLE1BQU07QUFDeEYsWUFBSSxLQUFLeGYsTUFBTTtBQUNkLGVBQUtBLEtBQUt1YSxNQUFNclUsR0FBR3FCO1FBQ3BCO0FBQ0EsYUFBSytTLGNBQWM7TUFDcEI7QUFDQTtJQUNEO0FBQ0EsVUFBTSxDQUFDdU4sVUFBVSxJQUFJblM7QUFDckIsVUFBTW9TLFlBQVksS0FBS0MsYUFBYUYsWUFBYVgsY0FBY0MsYUFBYTdpQixLQUFLMGlCLGdCQUFnQjtBQUNqRyxVQUFNZ0IsV0FBV0YsYUFBYVYsZ0JBQWdCUyxlQUFlNVosaUJBQWlCaVosY0FBY2hoQixHQUFHcUMsU0FBUztBQUN4RyxRQUFJbVosY0FBY3JDLGtCQUFrQnFDLFVBQVUsS0FBSyxDQUFDckMsa0JBQWtCcUMsVUFBVSxFQUFHbEMsTUFBTTtBQUN4RixXQUFLeGYsS0FBTXVhLE1BQU15TixXQUFXOWhCLEdBQUdtQixZQUFZbkIsR0FBR3FCO0FBQzlDLFdBQUsrUyxjQUFjLENBQUMsQ0FBQzBOO0lBQ3RCO0FBQ0EsUUFBSUYsV0FBVztBQUNkLFdBQUt6TSxZQUFZd007QUFDakIsVUFBSW5TLE9BQU8zTSxXQUFXLEdBQUc7QUFDeEIsYUFBSzhZLEtBQUs3VSxNQUFNbEosVUFBVTtBQUMxQixZQUFJLEtBQUs2ZCxnQkFBZ0I7QUFDeEIsZUFBS0EsZUFBZTNVLE1BQU1sSixVQUFVO1FBQ3JDO0FBQ0E7TUFDRDtJQUNEO0FBRUEsV0FBTyxLQUFLK2QsS0FBS2tCLFlBQVk7QUFDNUIsV0FBS2xCLEtBQUtrQixXQUFXcGhCLE9BQU87SUFDN0I7QUFDQSxTQUFLa0osSUFBSSxHQUFHQSxJQUFJNkssT0FBTzNNLFFBQVE4QixLQUFLO0FBQ25DLFlBQU0wWixNQUFNL1ksS0FBSyxRQUFRO0FBQ3pCK1ksVUFBSXBrQixPQUFPcUwsS0FBS2tLLE9BQU83SyxDQUFDLEdBQUksSUFBSSxDQUFDO0FBQ2pDMFosVUFBSUMsV0FBV3NELGFBQWFqZCxNQUFNO0FBQ2xDLFdBQUtnWCxLQUFLMWhCLE9BQU9va0IsR0FBRztJQUNyQjtBQUNBLFNBQUs3SCxZQUFZO0VBQ2xCO0VBQ0FBLGNBQW9CO0FBQ25CLFNBQUtMLFlBQVk7QUFDakIsUUFBSSxDQUFDLEtBQUtSLFdBQVc7QUFDcEIsV0FBS2dHLEtBQU03VSxNQUFNbEosVUFBVTtBQUMzQixVQUFJLEtBQUs2ZCxnQkFBZ0I7QUFDeEIsYUFBS0EsZUFBZTNVLE1BQU1sSixVQUFVO01BQ3JDO0FBQ0E7SUFDRDtBQUNBLFFBQUlta0IsV0FBV2hZLEtBQUtpWSxJQUFJLEtBQUtyRyxLQUFNclUsUUFBUXpFLFFBQVE3QyxHQUFHa0MsUUFBUTtBQUM5RCxRQUFJNmYsWUFBWSxHQUFHO0FBQ2xCQSxpQkFBVztJQUNaO0FBQ0EsU0FBS3BHLEtBQU1rQyxPQUFPa0U7QUFDbEJwYixxQkFBaUIsS0FBS2dWLE1BQU8sU0FBUzVQLFNBQVMsVUFBVSxNQUFNO0FBQy9ELFNBQUs0UCxLQUFNN1UsTUFBTW1iLFNBQVM7QUFDMUIsU0FBS3RHLEtBQU03VSxNQUFNMlgsV0FBVztBQUU1QixVQUFNeUQsU0FBU25XLFNBQVMsVUFBVTtBQUNsQyxRQUFJb1csUUFBUTtBQUNaLFFBQUksS0FBS3hHLEtBQU03VSxNQUFNbEosWUFBWSxRQUFRO0FBRXhDLFdBQUsrZCxLQUFNN1UsTUFBTXNiLE1BQUEsR0FBQTFvQixPQUFTLEtBQUtDLEtBQU0wb0IsV0FBUyxJQUFBO0FBQzlDLFdBQUsxRyxLQUFNN1UsTUFBTW9iLE1BQU0sSUFBSTtBQUMzQixXQUFLdkcsS0FBTTdVLE1BQU1sSixVQUFVO0FBQzNCdWtCLGNBQVEsS0FBS3hHLEtBQU0yRztBQUNuQixXQUFLM0csS0FBTTdVLE1BQU1sSixVQUFVO0lBQzVCLE9BQU87QUFDTnVrQixjQUFRLEtBQUt4RyxLQUFNMkc7SUFDcEI7QUFFQSxRQUFJQyxnQkFBZ0JKO0FBQ3BCLFFBQUlKLFdBQVcvaEIsR0FBR2tDLFVBQVU7QUFDM0JxZ0Isc0JBQWlCSixRQUFRSixXQUFZL2hCLEdBQUdrQztJQUN6QztBQUNBLFVBQU1zZ0IsV0FBWUMsVUFBcUM7QUFDdEQsWUFBTXhhLElBQUEsU0FBQXZPLE9BQWErb0IsSUFBSTtBQUN2QixhQUFPM3BCLFNBQVM0cEIsa0JBQWtCNXBCLFNBQVM0cEIsZ0JBQWdCemEsQ0FBQyxJQUFJO0lBQ2pFO0FBQ0EsVUFBTTBhLGdCQUFpQkYsVUFBMkM7QUFDakUsWUFBTXhhLElBQUEsU0FBQXZPLE9BQWErb0IsSUFBSTtBQUN2QixVQUFJaGtCLFNBQVMzRixTQUFTNHBCLGtCQUFrQjVwQixTQUFTNHBCLGdCQUFnQnphLENBQUMsSUFBSTtBQUN0RSxVQUFJOEQsVUFBVTBXLFNBQVMsUUFBUTtBQU05QixZQUFJaGtCLFNBQVMsR0FBRztBQUNmQSxtQkFBUyxDQUFDQTtRQUNYO0FBQ0EsWUFBSSxDQUFDNEUsV0FBVztBQUNmNUUsbUJBQVNra0IsY0FBYyxPQUFPLElBQUlILFNBQVMsT0FBTyxJQUFJL2pCO1FBQ3ZEO01BRUQ7QUFDQSxhQUFPQTtJQUNSO0FBQ0EsVUFBTWdnQixXQUFZbUUsVUFBOEM7QUFFL0QsWUFBTUMsTUFBTUQsS0FBS0Usc0JBQXNCO0FBQ3ZDLGFBQU87UUFDTkMsR0FBR2haLEtBQUtpWixNQUFNSCxJQUFJSSxPQUFPTixjQUFjLE1BQU0sQ0FBQztRQUM5Q08sR0FBR25aLEtBQUtpWixNQUFNSCxJQUFJVCxNQUFNTyxjQUFjLEtBQUssQ0FBQztNQUM3QztJQUNEO0FBQ0EsVUFBTVEsVUFBVTFFLFNBQVMsS0FBSzlrQixJQUFLO0FBQ25DLFVBQU15cEIsS0FBSztBQUNYLFFBQUlDLEtBQUs7QUFFVCxRQUFJQyxTQUFTO0FBQ2IsVUFBTUMsZUFBZSxLQUFLNXBCLEtBQU02cEIsZUFBZSxLQUFLN3BCLEtBQU04cEI7QUFDMUQsUUFBSSxLQUFLakksWUFBWTtBQUNwQixXQUFLQyxlQUFnQjNVLE1BQU1tYixTQUFTO0FBQ3BDLFdBQUt4RyxlQUFnQjNVLE1BQU0yWCxXQUFXO0FBQ3RDLFdBQUtoRCxlQUFnQjNVLE1BQU00YyxRQUFBLEdBQUFocUIsT0FBVzZwQixjQUFZLElBQUE7QUFFbEQsVUFBSSxLQUFLOUgsZUFBZ0IzVSxNQUFNbEosWUFBWSxRQUFRO0FBQ2xELGFBQUs2ZCxlQUFnQjNVLE1BQU1vYixNQUFNLElBQUk7QUFDckMsYUFBS3pHLGVBQWdCM1UsTUFBTXNiLE1BQU07QUFDakMsYUFBSzNHLGVBQWdCM1UsTUFBTWxKLFVBQVU7QUFDckMwbEIsaUJBQVMsS0FBSzdILGVBQWdCNkc7QUFDOUIsYUFBSzdHLGVBQWdCM1UsTUFBTWxKLFVBQVU7TUFDdEMsT0FBTztBQUNOMGxCLGlCQUFTLEtBQUs3SCxlQUFnQjZHO01BQy9CO0FBQ0EsV0FBSzdHLGVBQWdCM1UsTUFBTW9iLE1BQU0sSUFBQSxHQUFBeG9CLE9BQU8wcEIsSUFBRSxJQUFBO0lBQzNDO0FBQ0EsUUFBSUQsUUFBUUQsSUFBSVgsZ0JBQWdCZSxTQUFTLEdBQUc7QUFHM0NELFdBQUssS0FBSzFwQixLQUFNMm9CLGVBQWVnQixTQUFTO0FBQ3hDLFVBQUksS0FBSzlILFlBQVk7QUFDcEIsYUFBS0MsZUFBZ0IzVSxNQUFNc2IsTUFBQSxHQUFBMW9CLE9BQVMsS0FBS0MsS0FBTTJvQixjQUFZLElBQUE7TUFDNUQ7SUFDRCxPQUFPO0FBQ05lLFdBQUssQ0FBQ2xCLFFBQVFtQixTQUFTO0FBQ3ZCLFVBQUksS0FBSzlILFlBQVk7QUFDcEIsYUFBS0MsZUFBZ0IzVSxNQUFNc2IsTUFBQSxHQUFBMW9CLE9BQVMsRUFBRTRwQixTQUFTLElBQUUsSUFBQTtNQUNsRDtJQUNEO0FBQ0EsU0FBSzNILEtBQU03VSxNQUFNc2IsTUFBQSxHQUFBMW9CLE9BQVMycEIsSUFBRSxJQUFBO0FBQzVCLFNBQUsxSCxLQUFNN1UsTUFBTTRjLFFBQVE7QUFDekIsU0FBSy9ILEtBQU03VSxNQUFNb2IsTUFBTSxJQUFBLEdBQUF4b0IsT0FBTzBwQixJQUFFLElBQUE7QUFDaEMsUUFBSSxLQUFLNUgsWUFBWTtBQUNwQixXQUFLaUUsYUFBYSxLQUFLakUsVUFBVTtBQUNqQyxXQUFLQyxlQUFnQjNVLE1BQU1sSixVQUFVO0lBQ3RDO0FBQ0EsU0FBSytkLEtBQU03VSxNQUFNbEosVUFBVTtBQUUzQixRQUFJLEtBQUsrZCxLQUFNNkgsY0FBY0QsY0FBYztBQUMxQyxXQUFLNUgsS0FBTTdVLE1BQU00YyxRQUFBLEdBQUFocUIsT0FBVzZwQixjQUFZLElBQUE7QUFDeEM7SUFDRDtBQUVBLFVBQU1JLFNBQVNoQixjQUFjLE1BQU07QUFDbkMsVUFBTWlCLFNBQVNwQixTQUFTLE9BQU87QUFDL0IsUUFBSXFCLElBQUksS0FBS2xJLEtBQU02SDtBQUNuQixVQUFNTSxRQUFRckYsU0FBUyxLQUFLOUMsSUFBSztBQUNqQyxRQUFJc0gsT0FBT2EsTUFBTWY7QUFDakIsUUFBSWdCLFFBQVFkLE9BQU9ZO0FBQ25CLFFBQUlaLE9BQU9VLFVBQVVJLFFBQVFKLFNBQVNDLFFBQVE7QUFDN0MsVUFBSUMsSUFBSUQsUUFBUTtBQUNmQyxZQUFJRDtBQUNKLGFBQUtqSSxLQUFNN1UsTUFBTTRjLFFBQUEsR0FBQWhxQixPQUFXbXFCLEdBQUMsSUFBQTtBQUM3QixZQUFJOVgsUUFBUTtBQUNYa1gsaUJBQU9jLFFBQVFGO1FBQ2hCLE9BQU87QUFDTkUsa0JBQVFkLE9BQU9ZO1FBQ2hCO01BQ0Q7QUFDQSxVQUFJRyxrQkFBa0I7QUFDdEIsVUFBSWYsT0FBT1UsUUFBUTtBQUNsQkssMEJBQWtCTCxTQUFTVjtNQUM1QixXQUFXYyxRQUFRSixTQUFTQyxRQUFRO0FBQ25DSSwwQkFBa0IsRUFBRUQsUUFBUUosU0FBU0M7TUFDdEM7QUFDQSxVQUFJN1gsUUFBUTtBQUNYaVksMEJBQWtCLENBQUNBO01BQ3BCO0FBQ0EsVUFBSUEsaUJBQWlCO0FBQ3BCLGFBQUtySSxLQUFNN1UsTUFBTW9iLE1BQU0sSUFBQSxHQUFBeG9CLE9BQU8wcEIsS0FBS1ksaUJBQWUsSUFBQTtNQUNuRDtJQUNEO0VBQ0Q7RUFDQW5DLGFBQ0NybkIsUUFDQXlwQixRQUNBQyxrQkFDQTlsQixLQUNBK2xCLFlBQ1U7QUFDVixRQUFJM3BCLFdBQVd5cEIsUUFBUTtBQUN0QixhQUFPO0lBQ1I7QUFDQSxRQUFJRSxjQUFjLEtBQUs5SCxPQUFPLENBQUMsS0FBSytILFVBQVUsR0FBRztBQUNoRCxhQUFPO0lBQ1I7QUFFQSxRQUFJNXBCLE9BQU80TCxRQUFRNmQsTUFBTSxHQUFHO0FBRTNCLFVBQUlDLG9CQUFvQjFwQixPQUFPNEwsUUFBUThkLGdCQUFnQixNQUFNLEdBQUc7QUFDL0QsWUFBSSxLQUFLak8sa0JBQWtCZ08sUUFBUTtBQUNsQyxlQUFLaE8sZ0JBQWdCaU87UUFDdEI7QUFDQUQsaUJBQVNDO01BQ1YsT0FBTztBQUNOLGVBQU87TUFDUjtJQUNEO0FBR0EsU0FBS3ZxQixLQUFNeWtCLE1BQU07QUFDakIsU0FBS3prQixLQUFNZSxRQUFRRixTQUFTNEQ7QUFDNUIsU0FBS3NZLGFBQWF1TixPQUFPcGhCLFFBQVFySSxPQUFPcUksTUFBTTtBQUM5QyxXQUFPO0VBQ1I7RUFDQXVoQixZQUFxQjtBQUNwQixXQUFPLENBQUMsQ0FBQyxLQUFLenFCLEtBQU0wcUIscUJBQXFCLEtBQUsxcUIsS0FBTTJxQixtQkFBbUI7RUFDeEU7RUFDQTVOLGFBQWFwRSxNQUFjQyxJQUFrQjtBQUU1QyxRQUFJLENBQUMsS0FBSzVZLEtBQU1lLE9BQU87QUFDdEI7SUFDRDtBQUNBLFNBQUtmLEtBQU0wcUIsa0JBQWtCL1IsTUFBTUMsRUFBRTtFQUN0QztFQUNBZ1MsZUFBNkM7QUFDNUMsUUFBSWpTLE9BQU87QUFFWCxRQUFJQyxLQUFLO0FBQ1QsUUFBSSxDQUFDLEtBQUs1WSxLQUFNZSxPQUFPO0lBRXZCLFdBQVcsS0FBS2YsS0FBTTJxQixtQkFBbUIsTUFBTTtBQUFBLFVBQUFFO0FBQzlDbFMsYUFBTyxLQUFLM1ksS0FBTTJxQjtBQUNsQi9SLFlBQUFpUyx3QkFBSyxLQUFLN3FCLEtBQU04cUIsa0JBQUEsUUFBQUQsMEJBQUEsU0FBQUEsd0JBQWdCalM7SUFDakM7QUFDQSxXQUFPO01BQ04rRCxPQUFPaEU7TUFDUGlFLEtBQUtoRTtJQUNOO0VBQ0Q7RUFDQTJMLFdBQWlCO0FBQ2hCLFNBQUs3SCxnQkFBZ0IsS0FBS2tPLGFBQWE7RUFDeEM7RUFDQXpHLFdBQVc1ZixPQUErQjtBQUN6QyxRQUFJMGUsTUFBTTtBQUNWLFlBQVEsS0FBS0wsU0FBQTtNQUNaLEtBQUtwQztBQUNKeUMsY0FBTTtBQUNOO01BQ0QsS0FBS3hDO0FBQ0p3QyxjQUFNO0FBQ047TUFDRCxLQUFLM0M7QUFDSjJDLGNBQU0sQ0FBQzVjLEdBQUdrQztBQUNWO01BQ0QsS0FBS2dZO0FBQ0owQyxjQUFNNWMsR0FBR2tDO0FBQ1Q7TUFDRCxLQUFLNlg7QUFFSixlQUFPbFAsUUFBUTNNLEtBQUs7SUFDdEI7QUFDQSxRQUFJMGUsS0FBSztBQUNSLFVBQUksS0FBS2pCLEtBQU03VSxNQUFNbEosWUFBWSxRQUFRO0FBRXhDLGFBQUt1Z0Isb0JBQW9CdkIsR0FBRztBQUc1QixlQUFPL1IsUUFBUTNNLEtBQUs7TUFDckIsV0FDQyxLQUFLc2UsWUFBWSxNQUNoQixDQUFDLEtBQUtDLGVBQWUsS0FBS0EsWUFBWXFELGNBQWMsS0FBS3JELFlBQVlzRCxXQUNyRTtBQUVELGFBQUt0QyxXQUFXO01BQ2pCO0lBQ0Q7QUFDQSxXQUFPO0VBQ1I7RUFDQVUsb0JBQW9CdkIsS0FBc0I7QUFDekMsUUFBSXJaLGlCQUFpQixDQUFDLEtBQUtvWSxRQUFRLEtBQUtBLEtBQUs3VSxNQUFNbEosWUFBWSxRQUFRO0FBQ3RFLGFBQU87SUFDUjtBQUNBLFVBQU04bUIsT0FBTyxLQUFLL0ksS0FBSzRDO0FBQ3ZCLFFBQUlvRyxNQUFNO0FBQ1YsUUFBSS9ILFFBQVEsR0FBRztBQUNkLFVBQUk4SCxPQUFPLEtBQUtBLFFBQVEsS0FBSy9JLEtBQUtyVSxRQUFRekUsUUFBUTtBQUNqRCxlQUFPO01BQ1I7QUFDQThoQixZQUFNRDtJQUNQLE9BQU87QUFDTkMsWUFBTUQsT0FBTyxJQUFJLElBQUlBLE9BQU85SDtBQUM1QitILFlBQU01YSxLQUFLQyxJQUFJMmEsS0FBSyxDQUFDO0FBQ3JCLFVBQUlBLE9BQU8sS0FBS2hKLEtBQUtyVSxRQUFRekUsUUFBUTtBQUNwQzhoQixjQUFNLEtBQUtoSixLQUFLclUsUUFBUXpFLFNBQVM7TUFDbEM7SUFDRDtBQUNBLFFBQUk4aEIsUUFBUUQsUUFBUTlILFFBQVEsR0FBRztBQUM5QixVQUFJOEgsUUFBUSxLQUFLQSxPQUFPLEtBQUsvSSxLQUFLclUsUUFBUXpFLFVBQVUrWixRQUFRLEdBQUc7QUFDOUQsYUFBS2pCLEtBQUtyVSxRQUFRb2QsSUFBSSxFQUFHcEcsV0FBVztNQUNyQztBQUNBLFdBQUszQyxLQUFLclUsUUFBUXFkLEdBQUcsRUFBR3JHLFdBQVc7QUFFbkMsWUFBTTNiLElBQUksS0FBS2hKLEtBQU1lLE1BQU0wYixNQUFNLEdBQUc7QUFDcEMsWUFBTWhZLE1BQU11RSxFQUFFRSxTQUFTLElBQUEsSUFBQW5KLE9BQVFpSixFQUFFLENBQUMsQ0FBQyxJQUFLO0FBQ3hDLFlBQU1paUIsYUFBYSxLQUFLakosS0FBS3JVLFFBQVFxZCxHQUFHLEVBQUdockI7QUFDM0MsWUFBTWlvQixZQUFZLEtBQUtDLGFBQWErQyxZQUFZLEtBQUszTyxlQUFlLE1BQU03WCxLQUFLLEtBQUs7QUFDcEYsVUFBSSxDQUFDd2pCLGFBQWFnRCxlQUFlLEtBQUszTyxlQUFlO0FBQ3BELGFBQUt0YyxLQUFNZSxRQUFRa3FCLGFBQWF4bUI7QUFDaEMsWUFBSSxLQUFLZ21CLFVBQVUsR0FBRztBQUNyQixlQUFLMU4sYUFBYWtPLFdBQVcvaEIsUUFBUStoQixXQUFXL2hCLE1BQU07UUFDdkQ7TUFDRDtBQUNBLFdBQUtzUyxZQUFZeVA7QUFDakIsV0FBS3hRLGNBQWM7QUFDbkIsVUFBSSxLQUFLdGEsTUFBTTtBQUNkLGFBQUtBLEtBQUt1YSxNQUFNclUsR0FBR21CO01BQ3BCO0FBQ0EsV0FBS3BILFFBQVF3UztJQUNkO0FBQ0EsV0FBTztFQUNSO0VBQ0F3UixvQkFBNkI7QUFDNUIsUUFBSXhhLGlCQUFpQixDQUFDLEtBQUtvWSxRQUFRLEtBQUtBLEtBQUs3VSxNQUFNbEosWUFBWSxRQUFRO0FBQ3RFLGFBQU87SUFDUjtBQUNBLFVBQU04bUIsT0FBTyxLQUFLL0ksS0FBSzRDO0FBQ3ZCLFFBQUltRyxRQUFRLEtBQUtBLE9BQU8sS0FBSy9JLEtBQUtyVSxRQUFRekUsUUFBUTtBQUNqRCxXQUFLOFksS0FBS3JVLFFBQVFvZCxJQUFJLEVBQUdwRyxXQUFXO0FBRXBDLFlBQU0zYixJQUFJLEtBQUtoSixLQUFNZSxNQUFNMGIsTUFBTSxHQUFHO0FBQ3BDLFlBQU1oWSxNQUFNdUUsRUFBRUUsU0FBUyxJQUFBLElBQUFuSixPQUFRaUosRUFBRSxDQUFDLENBQUMsSUFBSztBQUd4QyxVQUFJbEUsU0FBU2tFLEVBQUUsQ0FBQyxNQUFNLEtBQUt3UztBQUMzQixVQUFJeFMsRUFBRSxDQUFDLE1BQU0sS0FBS3NULGVBQWU7QUFDaEMsYUFBS3RjLEtBQU1lLFFBQVEsS0FBS3ViLGdCQUFnQjdYO0FBQ3hDSyxpQkFBUztNQUNWO0FBQ0EsV0FBSzBXLFlBQVksS0FBS2M7QUFDdEIsYUFBT3hYO0lBQ1I7QUFDQSxXQUFPO0VBQ1I7QUFDRDtBQWVBLElBQU1rZSxhQUFhQSxNQUFZO0FBRzlCLFFBQU1qa0IsU0FBMkIsQ0FBQztBQUNsQ3NILEtBQUdvQyx3QkFDRnhKLE9BQU9pc0IsaUNBQWlDLFNBQ3JDbnNCLE9BQU9vc0IsNkJBQTZCLFNBQ25DOWtCLEdBQUdvQyx3QkFDSDFKLE9BQU9vc0IsMkJBQ1IsQ0FBQyxDQUFDbHNCLE9BQU9pc0I7QUFDYjdrQixLQUFHMkIsZ0JBQ0YvSSxPQUFPbXNCLHlCQUF5QixTQUM3QnJzQixPQUFPc3NCLHVCQUF1QixTQUM3QjlsQixLQUFLMEIsb0JBQW9CLElBQ3hCLE9BQ0FaLEdBQUcyQixnQkFDSmpKLE9BQU9zc0IscUJBQ1IsQ0FBQyxDQUFDcHNCLE9BQU9tc0I7QUFDYi9rQixLQUFHNEIsaUJBQ0ZoSixPQUFPcXNCLDBCQUEwQixTQUM5QnZzQixPQUFPd3NCLHVCQUF1QixTQUM3QmxsQixHQUFHNEIsaUJBQ0hsSixPQUFPd3NCLHFCQUNSLENBQUMsQ0FBQ3RzQixPQUFPcXNCO0FBQ2JqbEIsS0FBRzZCLGdCQUFnQmpKLE9BQU91c0IsMkJBQTJCenNCLE9BQU8wc0IseUJBQXlCcGxCLEdBQUc2QjtBQUN4RjdCLEtBQUc4QixnQkFBZ0JsSixPQUFPeXNCLHdCQUF3QjNzQixPQUFPNHNCLHNCQUFzQnRsQixHQUFHOEI7QUFDbEY5QixLQUFHK0IsY0FBY25KLE9BQU8yc0Isc0JBQXNCN3NCLE9BQU84c0IscUJBQXFCeGxCLEdBQUcrQjtBQUM3RSxNQUFJLE9BQU8vQixHQUFHK0IsZ0JBQWdCLFlBQVksQ0FBQ29YLGtCQUFrQm5aLEdBQUcrQixXQUFXLEdBQUc7QUFDN0UvQixPQUFHK0IsY0FBYztFQUNsQjtBQUNBL0IsS0FBR2dDLGVBQ0ZwSixPQUFPNnNCLDZCQUE2QixTQUNqQy9zQixPQUFPZ3RCLDJCQUEyQixTQUNqQzFsQixHQUFHZ0MsZUFDSHRKLE9BQU9ndEIseUJBQ1IsQ0FBQyxDQUFDOXNCLE9BQU82c0I7QUFDYnpsQixLQUFHbUMsZUFDRnZKLE9BQU8rc0Isb0NBQW9DLFNBQ3hDanRCLE9BQU9rdEIsNkJBQTZCLFNBQ25DNWxCLEdBQUdtQyxlQUNIekosT0FBT2t0QiwyQkFDUixDQUFDLENBQUNodEIsT0FBTytzQjtBQUNiM2xCLEtBQUcwQixhQUFhOUksT0FBT2l0Qiw2QkFBNkJudEIsT0FBT290QiwyQkFBMkI5bEIsR0FBRzBCO0FBQ3pGMUIsS0FBR2lDLGNBQ0ZySixPQUFPbXRCLDhCQUE4QixTQUNsQ3J0QixPQUFPc3RCLDJCQUEyQixTQUNqQ2htQixHQUFHaUMsY0FDSHZKLE9BQU9zdEIseUJBQ1IsQ0FBQyxDQUFDcHRCLE9BQU9tdEI7QUFDYi9sQixLQUFHa0MsV0FBV3RKLE9BQU9xdEIsb0JBQW9CdnRCLE9BQU93dEIsa0JBQWtCbG1CLEdBQUdrQztBQUNyRWxDLEtBQUdRLFlBQVk5SCxPQUFPeXRCLG1CQUFtQjtBQUV6QyxNQUFJbm1CLEdBQUdRLFdBQVc7QUFDakIsVUFBTTRsQixRQUFRdHRCLFNBQVN1dEI7QUFDdkIsVUFBTUMsWUFBWSxJQUFJeGlCLE9BQUEsV0FBQXBLLE9BQWtCc0csR0FBRytDLGlCQUFlLElBQUEsQ0FBSTtBQUM5RCxRQUFJd2pCLFNBQVM7QUFFYixVQUFNQyxnQkFBZ0JBLE1BQTJCO0FBQUEsVUFBQUMsZUFBQUM7QUFDaEQsWUFBTUMsVUFBVVAsVUFBQSxRQUFBQSxVQUFBLFNBQUEsU0FBQUEsTUFBTzNyQjtBQUN2QixVQUFJLENBQUNrc0IsU0FBUztBQUNiO01BQ0Q7QUFDQSxZQUFNQyxTQUFTRCxRQUFRanNCO0FBQ3ZCLFlBQU1tc0IsWUFBQUosZ0JBQVdGLE9BQU81ZSxNQUFNLFFBQVEsT0FBQSxRQUFBOGUsa0JBQUEsU0FBQUEsZ0JBQUssQ0FBQTtBQUMzQyxZQUFNSyxZQUFBSixnQkFBV0UsT0FBT2pmLE1BQU0sUUFBUSxPQUFBLFFBQUErZSxrQkFBQSxTQUFBQSxnQkFBSyxDQUFBO0FBQzNDLFlBQU1LLFNBQVNBLENBQUNDLE1BQWdCQyxTQUE2QjtBQUM1RCxjQUFNeG9CLFNBQW1CLENBQUE7QUFDekIsWUFBSXlvQjtBQUNKLFlBQUlDO0FBQ0osWUFBSUgsS0FBS25rQixTQUFTb2tCLEtBQUtwa0IsUUFBUTtBQUM5QnFrQixpQkFBT0Q7QUFDUEUsaUJBQU8sQ0FBQyxHQUFHSCxJQUFJO1FBQ2hCLE9BQU87QUFDTkUsaUJBQU9GO0FBQ1BHLGlCQUFPLENBQUMsR0FBR0YsSUFBSTtRQUNoQjtBQUFBLFlBQUFHLGFBQUFwWiwyQkFDbUJrWixJQUFBLEdBQUFHO0FBQUEsWUFBQTtBQUFuQixlQUFBRCxXQUFBbmYsRUFBQSxHQUFBLEVBQUFvZixTQUFBRCxXQUFBbFosRUFBQSxHQUFBQyxRQUF5QjtBQUFBLGtCQUFkbVosT0FBQUQsT0FBQTNzQjtBQUNWLGtCQUFNNnNCLE1BQU1KLEtBQUsvZ0IsUUFBUWtoQixJQUFJO0FBQzdCLGdCQUFJQyxRQUFRLElBQUk7QUFDZjlvQixxQkFBT0EsT0FBT29FLE1BQU0sSUFBSXlrQjtZQUN6QixPQUFPO0FBQ05ILG1CQUFLNU8sT0FBT2dQLEtBQUssQ0FBQztZQUNuQjtVQUNEO1FBQUEsU0FBQWhaLEtBQUE7QUFBQTZZLHFCQUFBL3NCLEVBQUFrVSxHQUFBO1FBQUEsVUFBQTtBQUFBNlkscUJBQUE1WSxFQUFBO1FBQUE7QUFDQSxlQUFPLENBQUMsR0FBRy9QLFFBQVEsR0FBRzBvQixJQUFJO01BQzNCO0FBQ0EsVUFBSUssT0FBT1QsT0FBT0YsVUFBVUMsUUFBUTtBQUNwQyxVQUFJVSxLQUFLM2tCLFNBQVMsR0FBRztBQUNwQjJrQixlQUFPQSxLQUFLQyxPQUFRQyxPQUFjO0FBQ2pDLGdCQUFNQyxVQUFVRCxFQUFFOWtCLEtBQUs7QUFDdkIsaUJBQU8sQ0FBQyxDQUFDK2tCLFdBQVcsQ0FBQ3JCLFVBQVV0bEIsS0FBSzJtQixPQUFPO1FBQzVDLENBQUM7TUFDRjtBQUNBLFVBQUlILEtBQUsza0IsV0FBVyxHQUFHO0FBQ3RCMGpCLGlCQUFTSztBQUNULGVBQU87TUFDUjtBQUNBLGFBQU87SUFDUjtBQUNBLFFBQ0MxbkIsS0FBSzBvQixhQUFhLFlBQ2xCMW9CLEtBQUs2QixlQUNMcWxCLFNBQ0FBLE1BQU1sckIsYUFDTnBDLFNBQVNDLGNBQWMsV0FBVyxHQUNqQztBQUNELFlBQU04dUIsTUFBTXpCLE1BQU1sckI7QUFDbEIsWUFBTTRzQixPQUFPMUIsTUFBTXpUO0FBQ25CLFVBQUlrVixJQUFJbnRCLFNBQVNvdEIsUUFBUUEsS0FBS3B0QixVQUFVc0YsR0FBR1EsV0FBVztBQUFBLFlBQUF1bkIsdUJBQUFDO0FBR3JERixhQUFLcHRCLFFBQVFvdEIsS0FBS3B0QixNQUFNQyxRQUFRcUYsR0FBR1EsV0FBVyxrQ0FBa0M7QUFFaEYsY0FBTXluQixNQUFNenVCLEVBQUUsU0FBUyxFQUNyQkMsS0FBSztVQUNMMEQsTUFBTTtVQUNOc0gsTUFBTTtRQUNQLENBQUMsRUFDQXJKLElBQUk0RSxHQUFHUSxTQUFTO0FBQ2xCaEgsVUFBRTRzQixLQUFLLEVBQUVuc0IsT0FBT2d1QixHQUFHO0FBQ25CMUIsa0JBQUF3Qix5QkFBQUMsbUJBQVM1QixNQUFNM3JCLGdCQUFBLFFBQUF1dEIscUJBQUEsU0FBQSxTQUFOQSxpQkFBa0J0dEIsV0FBQSxRQUFBcXRCLDBCQUFBLFNBQUFBLHdCQUFTO0FBQ3BDLGNBQU1wcEIsUUFBUW5GLEVBQUUsTUFBTTtBQUN0Qm1GLGNBQU1qRCxLQUFLLG9CQUFvQixFQUFFdEIsSUFBSSxTQUFTLE1BQU07QUFDbkQsY0FBSTZ0QixJQUFJN3NCLElBQUksR0FBRztBQUNkeXNCLGdCQUFJbnRCLFFBQVFtdEIsSUFBSW50QixNQUFNQyxRQUNyQjhFLFdBQVcsZ0JBQWdCLEtBQUtBLFdBQVcsaUJBQWlCLEdBQzVELEVBQ0Q7VUFDRDtRQUNELENBQUM7QUFDRCxjQUFNeW9CLGtCQUFrQkEsTUFBWTtBQUNuQzF1QixZQUFFNHNCLE1BQU0zckIsVUFBVyxFQUNqQjBGLElBQUkwbkIsR0FBRyxFQUNQenRCLElBQUksU0FBUyxNQUFNO0FBQ25CcWMsdUJBQVcsTUFBTTtBQUNoQixrQkFBSStQLGNBQWMsR0FBRztBQUNwQjBCLGdDQUFnQjtjQUNqQixPQUFPO0FBQ05ELG9CQUFJN3NCLElBQUksRUFBRTtjQUNYO1lBQ0QsR0FBRyxHQUFHO1VBQ1AsQ0FBQztRQUNIO0FBQ0E4c0Isd0JBQWdCO01BQ2pCO0lBQ0Q7RUFDRDtBQUVBbG9CLEtBQUdrQyxXQUFXK2IsT0FBT2tLLFNBQVMxa0IsT0FBT3pELEdBQUdrQyxRQUFRLEdBQUcsRUFBRTtBQUNyRCxNQUFJK2IsT0FBT21LLE1BQU1wb0IsR0FBR2tDLFFBQVEsS0FBS2xDLEdBQUdrQyxXQUFXLEdBQUc7QUFDakRsQyxPQUFHa0MsV0FBVztFQUNmO0FBQ0FsQyxLQUFHa0MsV0FBVzZILEtBQUtpWSxJQUFJaGlCLEdBQUdrQyxVQUFVLEVBQUU7QUFFdEMsV0FBQW1tQixNQUFBLEdBQUFDLGtCQUFzQzdsQixPQUFPOGxCLFFBQVFwUCxpQkFBaUIsR0FBQWtQLE1BQUFDLGdCQUFBemxCLFFBQUF3bEIsT0FBRztBQUF6RSxVQUFXLENBQUNqcUIsS0FBSzZoQixnQkFBZ0IsSUFBQXFJLGdCQUFBRCxHQUFBO0FBQ2hDLFFBQUk7QUFDSCxVQUFJanFCLE9BQU9xQixXQUFBLGdCQUFBL0YsT0FBMkIwRSxHQUFHLENBQUUsR0FBRztBQUM3QzZoQix5QkFBaUJ4YixPQUFPaEYsV0FBQSxnQkFBQS9GLE9BQTJCMEUsR0FBRyxDQUFFO01BQ3pEO0lBQ0QsUUFBUTtBQUNQO0lBQ0Q7RUFDRDtBQUVBLFFBQU1vcUIsT0FBTzF2QixTQUFTQyxjQUEyQixNQUFNO0FBQ3ZEZ1QsV0FBUzVQLFNBQVNxc0IsTUFBTSxLQUFLO0FBQzdCLE1BQUksQ0FBQ3pjLFFBQVE7QUFDWixVQUFNMGMsWUFBWTN2QixTQUFTNHZCOztNQUV6QjV2QixTQUFTNHZCLFlBQVlDLGlCQUFpQkgsTUFBTSxJQUFJLEVBQUVJLGlCQUFpQixXQUFXOzs7TUFFOUVwdkIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFHc04sTUFBTTJoQjs7QUFDdEIxYyxhQUFTMGMsY0FBYztFQUN4QjtBQUNEO0FBQ0EsSUFBTUksV0FBV0EsTUFBZTtBQUMvQixTQUFPL3ZCLFNBQVNDLGNBQWMsVUFBVSxNQUFNO0FBQy9DO0FBRUEsSUFBTSt2QixZQUFZQSxNQUFZO0FBRTdCLFdBQUFDLE1BQUEsR0FBQUMsWUFBbUI1ZCxTQUFBMmQsTUFBQUMsVUFBQW5tQixRQUFBa21CLE9BQVM7QUFBNUIsVUFBVy9XLE9BQUFnWCxVQUFBRCxHQUFBO0FBQ1YsUUFBSS9XLEtBQUtqWSxVQUFVdVMsTUFBTTtBQUN4QjBGLFdBQUtnTSxPQUFPO0lBQ2IsV0FBV2hNLEtBQUtqWSxVQUFVd1MsZ0JBQWdCO0FBQ3pDeUYsV0FBS21OLGNBQWM7QUFDbkIsWUFBTXprQixRQUFRc1gsS0FBS3JZLEtBQU1lLE1BQU0wYixNQUFNLEdBQUc7QUFDeEMsVUFBSWhZLE1BQXFCO0FBQ3pCLFVBQUkxRCxNQUFNbUksU0FBUyxHQUFHO0FBQ3JCekUsY0FBTTFELE1BQU0sQ0FBQztNQUNkO0FBQ0EsWUFBTWlJLElBQUlqSSxNQUFNLENBQUMsRUFBR0MsUUFBUSxNQUFNLEdBQUcsRUFBRWlJLEtBQUs7QUFDNUMsVUFBSUQsRUFBRUUsV0FBVyxHQUFHO0FBQ25CbVAsYUFBS2dNLE9BQU87TUFDYixPQUFPO0FBQ05oTSxhQUFLRyxrQkFBa0J4UDtBQUN2QnFQLGFBQUtJLGFBQWFoVTtBQUNsQjRULGFBQUs4SixnQkFBZ0I5SixLQUFLb0M7QUFDMUJwQyxhQUFLb04sTUFBTTtNQUNaO0lBQ0Q7RUFDRDtBQUNEO0FBQ0EsSUFBTTZKLGVBQWVBLE1BQVk7QUFBQSxNQUFBQyx1QkFBQUM7QUFDaENoZSxhQUFXO0FBRVgsTUFBSWllLE1BQUFGLHdCQUNIcHdCLFNBQVNDLGNBQTJCLDBCQUEwQixPQUFBLFFBQUFtd0IsMEJBQUEsU0FBQUEsd0JBQzlEcHdCLFNBQVNDLGNBQTJCLHdCQUF3QjtBQUM3RCxNQUFJLENBQUNxd0IsSUFBSTtBQUNSQSxTQUFLdHdCLFNBQVNDLGNBQTJCLHdCQUF3QjtBQUNqRSxXQUFPcXdCLE1BQU1BLEdBQUdDLFNBQVNqbUIsWUFBWSxNQUFNLFNBQVM7QUFDbkRnbUIsV0FBS0EsR0FBR25NO0lBQ1Q7RUFDRDtBQUNBLE1BQUksQ0FBQ21NLElBQUk7QUFDUjtFQUNEO0FBQ0EsUUFBTUUsV0FBV3h3QixTQUFTQyxjQUFnQywyQkFBMkI7QUFDckYsUUFBTXd3QixXQUFXendCLFNBQVNDLGNBQWdDLHdCQUF3QjtBQUNsRixNQUFLdXdCLFlBQVksQ0FBQyxDQUFDQSxTQUFTNXVCLFNBQVc2dUIsYUFBYUEsU0FBU25hLFlBQVltYSxTQUFTMUssV0FBWTtBQUM3RjtFQUNEO0FBRUEsUUFBTTJLLFlBQVlsa0IsS0FBSyxJQUFJO0FBQzNCLFFBQU1ta0IsV0FBV25rQixLQUFLLElBQUk7QUFFMUI0RixZQUFVNUYsS0FBSyxLQUFLO0FBQ3BCNEYsVUFBUXhFLFlBQVk7QUFDcEJ3RSxVQUFRMU4sS0FBSztBQUNiME4sVUFBUXBFLE1BQU00aUIsWUFBWTNkLFNBQVMsVUFBVTtBQUU3Q2IsVUFBUXBFLE1BQU02aUIsU0FBUztBQUN2QnplLFVBQVFwRSxNQUFNOGlCLFNBQVM7QUFDdkJILFdBQVN4dkIsT0FBT2lSLE9BQU87QUFFdkIsUUFBTTJlLFFBQTRCO0FBQ2xDLE1BQUlBLE9BQU87QUFDVkwsY0FBVWhzQixLQUFLO0FBQ2Znc0IsY0FBVXZ2QixPQUFPNHZCLEtBQUs7RUFDdkIsT0FBTztBQUNOTCxjQUFVaHNCLEtBQUs7QUFDZmdzQixjQUFVdnZCLE9BQU9xTCxLQUFLN0YsV0FBVyxZQUFZLEdBQUcsSUFBSSxDQUFDO0VBQ3REO0FBQ0ErcEIsWUFBVTlpQixZQUFZO0FBQ3RCOGlCLFlBQVUxaUIsTUFBTTRpQixZQUFZO0FBQzVCRixZQUFVMWlCLE1BQU1nakIsZ0JBQWdCO0FBRWhDLFFBQU1wTyxRQUFBeU4seUJBQ0xyd0IsU0FBU0MsY0FBK0IsU0FBUyxPQUFBLFFBQUFvd0IsMkJBQUEsU0FBQUEseUJBQ2pEcndCLFNBQVNDLGNBQStCLGlCQUFpQjtBQUMxRCxNQUFJMmlCLE1BQU07QUFDVCxVQUFNcU8sU0FBVVgsR0FBd0JZLFVBQVUsRUFBRTtBQUNwREQsV0FBTzl2QixPQUFPdXZCLFNBQVM7QUFDdkJPLFdBQU85dkIsT0FBT3d2QixRQUFRO0FBQ3RCL04sU0FBS2xFLGlCQUFpQixVQUFVLE1BQU07QUFBQSxVQUFBeVM7QUFDckNuQixnQkFBVTtBQUVWLFlBQU1vQixNQUFBRCx5QkFDTG54QixTQUFTQyxjQUFtQyxvQ0FBb0MsT0FBQSxRQUFBa3hCLDJCQUFBLFNBQUFBLHlCQUNoRm54QixTQUFTQyxjQUFtQyxTQUFTO0FBQ3RELFVBQUksQ0FBQ214QixJQUFJO0FBQ1IsZUFBTztNQUNSO0FBQ0EsVUFBSUMsV0FBVztBQUNmLGVBQUFDLE1BQUEsR0FBQUMsWUFBcUJqZixTQUFBZ2YsTUFBQUMsVUFBQXhuQixRQUFBdW5CLE9BQVM7QUFBOUIsY0FBV2xXLFNBQUFtVyxVQUFBRCxHQUFBO0FBQ1YsY0FBTUUsSUFBSXBXLE9BQU8vQjtBQUNqQixZQUFJLENBQUNtWSxHQUFHO0FBQ1A7UUFDRDtBQUNBLGNBQU1sc0IsTUFBTThWLE9BQU85QjtBQUNuQixjQUFNbVksVUFBQSxLQUFBN3dCLE9BQWVzRyxHQUFHOEMsb0JBQWtCLEdBQUEsRUFBQXBKLE9BQUk0d0IsQ0FBQyxFQUFBNXdCLE9BQUcwRSxNQUFBLElBQUExRSxPQUFVMEUsR0FBRyxJQUFLLElBQUUsSUFBQTtBQUV0RSxjQUFNcUssY0FBYyxJQUFJM0UsT0FBTyxNQUFNcEssT0FBTyxTQUFTK0osT0FBT0MsSUFBQThtQixxQkFBQUEsbUJBQUE1bUIsdUJBQUEsQ0FBQSxhQUFBLEdBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsR0FBb0IsUUFBUSxHQUFHLEdBQUcsR0FBRztBQUNqRyxZQUFJNm1CLGVBQWVQLEdBQUd4dkI7QUFDdEIsWUFBSWd3QjtBQUNKLFdBQUc7QUFDRkEsZ0NBQXNCRDtBQUN0QkEseUJBQWVBLGFBQWE5dkIsUUFBUSxTQUFTLEVBQUUsRUFBRUEsUUFBUSxVQUFVLEVBQUUsRUFBRUEsUUFBUThOLGFBQWEsRUFBRTtRQUMvRixTQUFTZ2lCLGlCQUFpQkM7QUFDMUIsWUFBSSxDQUFDdGlCLGNBQWNxaUIsY0FBY0gsR0FBRyxJQUFJLEdBQUc7QUFDMUNKLGFBQUd4dkIsU0FBQSxLQUFBaEIsT0FBYzZ3QixPQUFPO0FBQ3hCSixxQkFBVztRQUNaO01BQ0Q7QUFDQSxVQUFJQSxVQUFVO0FBRWIsY0FBTVEsUUFBUSxJQUFJN21CLE9BQU8sTUFBTXBLLE9BQU8sUUFBUSxFQUFFQSxPQUFPLE9BQU8sR0FBRyxHQUFHO0FBQ3BFd3dCLFdBQUd4dkIsUUFBUXd2QixHQUFHeHZCLE1BQU1DLFFBQVFnd0IsT0FBTyxFQUFFO01BQ3RDO0FBQ0EsYUFBTztJQUNSLENBQUM7RUFDRjtBQUNEO0FBQ0EsSUFBSUMsY0FBNkI7QUFLakMsSUFBTUMsV0FBWWprQixhQUFnRDtBQUNqRSxRQUFNO0lBQUNpVztFQUFVLElBQUlqVztBQUNyQixNQUFJLENBQUNpVyxjQUFjQSxXQUFXaU8sYUFBYUMsS0FBS0MsY0FBYztBQUM3RCxXQUFPO0VBQ1I7QUFDQSxNQUFJQyxXQUFXenVCLE1BQU9xZ0IsV0FBdUJxTyxhQUFhLE1BQU0sQ0FBQztBQUNqRSxNQUFJLENBQUNELFVBQVU7QUFDZCxXQUFPO0VBQ1I7QUFDQUEsYUFBV0EsU0FBUzNrQixNQUFNMmtCLFNBQVM3a0IsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFekwsUUFBUSxNQUFNLEdBQUc7QUFDdEUsTUFBSXFGLEdBQUd5QixhQUFhekIsR0FBR3lCLFVBQVVULEtBQUtpcUIsUUFBUSxHQUFHO0FBQ2hELFdBQU87RUFDUjtBQUNBLFFBQU14c0IsU0FBNkI7SUFDbENqQyxPQUFPeXVCO0lBQ1B0akIsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFO0VBQ25CO0FBQ0EsTUFBSTZELGFBQWEsTUFBTTtBQUN0QixXQUFPL007RUFDUjtBQUNBLE1BQUltc0IsZ0JBQWdCLE1BQU07QUFDekIsVUFBTW5pQixjQUFjLElBQUkzRSxPQUFPLE1BQU1wSyxPQUFPLFNBQVMrSixPQUFPQyxJQUFBeW5CLHFCQUFBQSxtQkFBQXZuQix1QkFBQSxDQUFBLGFBQUEsR0FBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxHQUFvQixRQUFRLEdBQUcsR0FBRyxHQUFHO0FBQ2pHZ25CLGtCQUFjcGYsU0FBUzdRLFFBQVEscUJBQXFCLEVBQUUsRUFBRUEsUUFBUThOLGFBQWEsRUFBRTtFQUNoRjtBQUNBaEssU0FBT2tKLFFBQVFTLGNBQWN3aUIsYUFBYUssVUFBVSxJQUFJO0FBQ3hELFNBQU94c0I7QUFDUjtBQUNBLElBQUkyc0IsY0FBYztBQUNsQixJQUFJQyxlQUFxRDtBQUN6RCxJQUFNQyxjQUFjQSxDQUFDQyxPQUFtQnJ1QixLQUFhd0osY0FBMEM7QUFDOUYsUUFBTWpJLFNBQVNqRixFQUFFK3hCLEtBQUssRUFBRTd2QixLQUFBLEdBQUFoQyxPQUFRd0QsS0FBRyxHQUFBLEVBQUF4RCxPQUFJZ04sU0FBUyxDQUFFO0FBQ2xELFNBQU9qSSxVQUFVQSxPQUFPb0UsU0FBUyxJQUFLcEUsT0FBTyxDQUFDLElBQW9CO0FBQ25FO0FBQ0EsSUFBTStzQixRQUFTQyxvQkFBc0M7QUFDcEQsTUFBSUwsYUFBYTtBQUNoQjtFQUNEO0FBQ0FBLGdCQUFjO0FBQ2QsTUFBSUMsY0FBYztBQUNqQnp5QixXQUFPOHlCLGFBQWFMLFlBQVk7QUFDaENBLG1CQUFlO0VBQ2hCO0FBR0FuZ0IsY0FBQUEsVUFBWXBTLFNBQVNDLGNBQTJCLHFCQUFxQjtBQUNyRSxRQUFNNHlCLGFBQWE3eUIsU0FBU0MsY0FBMkIscUJBQXFCO0FBQzVFLE1BQUksQ0FBQ21TLFNBQVM7QUFBQSxRQUFBMGdCO0FBQ2IsUUFBSUMsU0FBNkI7QUFDakMsUUFBSSxDQUFDRixZQUFZO0FBQ2hCRSxlQUFTUCxZQUFZeHlCLFVBQVUsT0FBTyxhQUFhO0FBQ25ELFVBQUksQ0FBQyt5QixRQUFRO0FBQ1o7TUFDRDtJQUNEO0FBQ0EzZ0IsY0FBVTVGLEtBQUssS0FBSztBQUNwQjRGLFlBQVExTixLQUFLO0FBQ2IwTixZQUFRcEUsTUFBTTRpQixZQUFZM2QsU0FBUyxVQUFVO0FBRTdDLFVBQU04ZCxRQUFRdmtCLEtBQUssR0FBRztBQUN0QnVrQixVQUFNdHJCLE9BQU9XLEtBQUt1SCxjQUFjOUwsUUFBUSxNQUFNLG9CQUFvQjtBQUNsRWt2QixVQUFNcnRCLFFBQVFpRCxXQUFXLFlBQVk7QUFDckNvcUIsVUFBTTV2QixPQUFPcUwsS0FBSzdGLFdBQVcsWUFBWSxHQUFHLElBQUksQ0FBQztBQUNqRHlMLFlBQVFqUixPQUFPNHZCLEtBQUs7QUFDcEIzZSxZQUFRalIsT0FBT3FMLEtBQUssS0FBSyxJQUFJLENBQUM7QUFFOUIsUUFBSXdtQixhQUFBRix3QkFDRkQsZUFBQSxRQUFBQSxlQUFBLFNBQUEsU0FBQUEsV0FBWTFPLGdCQUFBLFFBQUEyTywwQkFBQSxTQUFBQSx3QkFBcUM5eUIsU0FBU0MsY0FBMkIsV0FBVztBQUNsRyxRQUFJLENBQUMreUIsV0FBVztBQUNmQSxrQkFBWXhtQixLQUFLLEtBQUs7QUFDdEJ3bUIsZ0JBQVV0dUIsS0FBSztBQUNmcXVCLGFBQVE1TyxXQUFZQyxhQUFhNE8sV0FBV0QsT0FBUTFPLFdBQVc7SUFDaEU7QUFDQTJPLGNBQVVwbEIsWUFBWTtBQUN0Qm9sQixjQUFVaGxCLE1BQU1sSixVQUFVO0FBQzFCLFFBQUkrdEIsWUFBWTtBQUNmQSxpQkFBVzdoQixPQUFPb0IsT0FBTztJQUMxQixPQUFPO0FBQ040Z0IsZ0JBQVU3eEIsT0FBT2lSLE9BQU87SUFDekI7RUFDRDtBQUNBLE1BQUlhLFFBQVE7QUFDWGIsWUFBUTBSLE1BQU07RUFDZjtBQUVBLFFBQU1tUCxnQkFBZ0JBLENBQUMxUSxNQUFtQnBTLGNBQTRDO0FBQ3JGLFFBQUl1SyxPQUFnRDZILEtBQUsyUSxpQkFBOEIsSUFBSTtBQUMzRixRQUFJeFksS0FBSzNRLFNBQVMsR0FBRztBQUNwQnVKLGVBQVM7QUFDVGlQLGFBQU83SCxLQUFLLENBQUMsRUFBR3lKO0lBQ2pCLE9BQU87QUFDTnpKLGFBQU82SCxLQUFLMlEsaUJBQThCLE1BQU07SUFDakQ7QUFFQSxVQUFNQyxXQUFXQyxNQUFNNVosS0FBS2tCLElBQUk7QUFDaEMsYUFBQTJZLE1BQUEsR0FBQUMsWUFBa0JILFVBQUFFLE1BQUFDLFVBQUF2cEIsUUFBQXNwQixPQUFVO0FBQTVCLFlBQVcxWCxNQUFBMlgsVUFBQUQsR0FBQTtBQUNWLFlBQU1uckIsT0FBTzZwQixTQUFTcFcsR0FBRztBQUN6QixVQUFJelQsU0FBUyxRQUFRQSxLQUFLMkcsVUFBVSxRQUFRMFQsTUFBTTtBQUNqRCxZQUFJZCxlQUFlYyxNQUFNNUcsS0FBS3pULEtBQUt4RSxPQUFRd0UsS0FBSzJHLE1BQW1CLENBQUMsR0FBR3NCLFNBQVM7TUFDakY7SUFDRDtBQUNBLFdBQU9nakIsU0FBU3BwQixTQUFTLElBQUlvcEIsU0FBU0ksR0FBRyxFQUFFLElBQUs7RUFDakQ7QUFDQSxRQUFNQyxXQUFXUCxjQUFjN2dCLFNBQVMsS0FBSztBQUU3QyxNQUFJcVAsZUFDSG5PLFNBQVNsQixRQUFROGdCLGlCQUE4QixJQUFJLEVBQUUsQ0FBQyxJQUFLOWdCLFNBQzNELE1BQ0EsTUFDQW9oQixhQUFhLE1BQ2IsS0FDRDtBQUNBLE1BQUksQ0FBQ25oQixVQUFVO0FBQ2QsUUFBSUssYUFBYSxRQUFRbWdCLFlBQVk7QUFDcEMsVUFBSTVmLFFBQVE7QUFDWDRmLG1CQUFXL08sTUFBTTtNQUNsQjtBQUNBbVAsb0JBQWNKLFlBQVksSUFBSTtJQUMvQjtBQUVBLFVBQU1ZLGNBQWNqbkIsS0FBSyxNQUFNO0FBQy9CaW5CLGdCQUFZN2xCLFlBQVk7QUFDeEIsUUFBSXFGLFFBQVE7QUFDWHdnQixrQkFBWTNQLE1BQU07SUFDbkI7QUFDQTFSLFlBQVFnUyxhQUFhcVAsYUFBYXJoQixRQUFRMlIsV0FBWU0sV0FBVztBQUNqRW9QLGdCQUFZdHlCLE9BQU9xTCxLQUFLLEtBQVUsSUFBSSxDQUFDO0FBQ3ZDaUcsZ0JBQVlqRyxLQUFLLE1BQU07QUFDdkJpbkIsZ0JBQVl0eUIsT0FBT3NSLFNBQVM7QUFDNUJBLGNBQVVpaEIsWUFBQSxPQUFBOXlCLE9BQW1Cc0csR0FBR1MsVUFBUSxPQUFBO0FBQ3hDLFVBQU0sQ0FBQ21VLElBQUksSUFBSXJKLFVBQVV5Z0IsaUJBQW9DLEdBQUc7QUFDaEVwWCxTQUFNNEMsaUJBQWlCLFNBQVV0WixXQUFVO0FBQzFDcVosb0JBQWM7QUFDZEcsc0JBQWdCO0FBQ2hCLGFBQU83TSxRQUFRM00sS0FBSztJQUNyQixDQUFDO0FBQ0QwVyxTQUFNcFksUUFBUWlELFdBQVcsZUFBZTtBQUN4Q21WLFNBQU05TixNQUFNMmxCLFNBQVM7RUFDdEI7QUFDQTdCLGdCQUFjO0FBQ2QsTUFBSWEsMEJBQTBCaUIsVUFBVTtBQUN2Q2pCLG1CQUFlO0VBQ2hCO0FBQ0FoekIsS0FBR2swQixLQUFLLGNBQWMsRUFBRUMsS0FBSztBQUM3QnB6QixJQUFFLE1BQU0sRUFBRW1DLFFBQVEsc0JBQXNCO0FBQ3pDO0FBQ0EsSUFBTWt4QixtQkFBbUJBLE1BQVk7QUFDcEMsTUFBSXZoQixZQUFZO0FBQ2Y7RUFDRDtBQUNBLFFBQU13aEIsZ0JBQWdCeG5CLEtBQUssS0FBSztBQUNoQ3duQixnQkFBY2htQixNQUFNbEosVUFBVTtBQUM5QjlFLFdBQVNDLGNBQWMsTUFBTSxFQUFHa0IsT0FBTzZ5QixhQUFhO0FBQ3BEQSxnQkFBY04sWUFBQSxtRkFBQTl5QixPQUNid0YsS0FBS2lILFVBQ04sU0FBQSxFQUFBek0sT0FBVTBILG1CQUFtQmxDLEtBQUt1USxVQUFVLEdBQUMsMEdBQUEsRUFBQS9WLE9BRUR3RixLQUFLNnRCLG9CQUFrQiw4ekJBQUE7QUFnQm5FemhCLGVBQWF4UyxTQUFTQyxjQUFnQyxtQkFBbUI7QUFDMUU7QUFDQSxJQUFNaTBCLFVBQVVBLE1BQVk7QUFFM0IsTUFBSTl0QixLQUFLNkIsYUFBYTtBQUNyQixVQUFNMUUsU0FBeUI7TUFDOUJDLFFBQVE7TUFDUkMsUUFBUTtNQUNSK1MsZUFBZTtNQUNmQyxhQUFhO01BQ2JDLFFBQVF0USxLQUFLdVE7TUFDYkMsTUFBTSxDQUFDLFFBQVEsV0FBVztNQUMxQkUsUUFBUSxDQUFDLFdBQVcsYUFBYSxLQUFLO01BQ3RDRSxTQUFTO01BQ1RFLFdBQVc5USxLQUFLK1E7TUFDaEJKLFNBQVM7TUFDVE0sTUFBTSxDQUFDLFVBQVU7SUFDbEI7QUFDQW5RLE9BQUdzVyxRQUFTM1osVUFBdUM7QUFDbEQrUCxjQUFRL1AsSUFBSTtBQUNaNnVCLFlBQU1xQixnQkFBZ0I7SUFDdkI7QUFDQSxTQUFLOXNCLElBQUlwSCxJQUFJMEQsTUFBTSxFQUFFaUIsS0FBTVgsVUFBUztBQUNuQ3FELFNBQUdzVyxNQUFPM1osSUFBOEI7SUFDekMsQ0FBQztBQUNEMHVCLG1CQUFlNVUsV0FBVyxNQUFNO0FBQy9CK1UsWUFBTXFCLGdCQUFnQjtJQUN2QixHQUFHLEdBQUk7RUFDUixPQUFPO0FBRU4sUUFBSTN0QixLQUFLMEIsc0JBQXNCLEdBQUc7QUFDakM7SUFDRDtBQUNBNEssZUFBVztBQUNYQyxlQUFXO0FBQ1grZixVQUFNcUIsZ0JBQWdCO0VBQ3ZCO0FBQ0Q7QUFDQSxJQUFNSSxXQUFZbHpCLFdBQXdCO0FBQ3pDLFFBQU15WixPQUFPelosTUFBTXFjLE1BQU0sSUFBSTtBQUM3QixNQUFJNUMsS0FBSzNRLFdBQVcsR0FBRztBQUN0QixXQUFPO0VBQ1I7QUFDQSxNQUFJdW9CLGVBQWVoZ0IsUUFBUXZJLFdBQVcsS0FBS3VJLFFBQVEsQ0FBQyxFQUFHc1AsZUFBZTtBQUVyRSxVQUFNd1MsV0FBd0UsQ0FBQTtBQUM5RSxVQUFNcGpCLFNBQVNzQixRQUFRdkksV0FBVyxJQUFJdUksUUFBUSxDQUFDLEVBQUdrUSxPQUFPO0FBQ3pELFFBQUkzVztBQUNKLFNBQUtBLElBQUksR0FBR0EsSUFBSTZPLEtBQUszUSxRQUFROEIsS0FBSztBQUNqQyxVQUFJNk8sS0FBSzdPLENBQUMsRUFBRzlCLFdBQVcsR0FBRztBQUMxQjtNQUNEO0FBQ0EsWUFBTTRSLE1BQU1qQixLQUFLN08sQ0FBQyxFQUFHeVIsTUFBTSxHQUFHO0FBQzlCLFlBQU1oWSxNQUFNcVcsSUFBSTVSLFNBQVMsSUFBSTRSLElBQUksQ0FBQyxJQUFLO0FBQ3ZDLFlBQU0wWSxVQUFVMVksSUFBSSxDQUFDO0FBQ3JCLFlBQU1HLE9BQU90UCxLQUFLLEdBQUc7QUFDckJzUCxXQUFLclcsT0FBTzBJLGFBQUEsR0FBQXZOLE9BQWdCc0csR0FBRzhDLG9CQUFrQixHQUFBLEVBQUFwSixPQUFJeXpCLE9BQU8sQ0FBRTtBQUM5RHZZLFdBQUszYSxPQUFPcUwsS0FBSzZuQixTQUFTLElBQUksQ0FBQztBQUMvQnZZLFdBQUtwWSxRQUFRMndCO0FBQ2IsWUFBTTdSLE9BQU9oVyxLQUFLLE1BQU07QUFDeEJnVyxXQUFLcmhCLE9BQU8yYSxJQUFJO0FBQ2hCLFVBQUksQ0FBQ2pRLEdBQUc7QUFDUHVHLGdCQUFTZ1MsYUFBYTVYLEtBQUssS0FBSyxJQUFJLEdBQUd3RSxNQUFNO01BQzlDO0FBQ0FBLGFBQVFBLE9BQU93UixJQUFJO0FBQ25CLFVBQUl4UixVQUFVbkYsSUFBSSxJQUFJNk8sS0FBSzNRLFFBQVE7QUFDbENpSCxlQUFPbVQsV0FBWUMsYUFBYTVYLEtBQUssT0FBTyxJQUFJLEdBQUd3RSxNQUFNO01BQzFEO0FBQ0FvakIsZUFBU0EsU0FBU3JxQixNQUFNLElBQUk7UUFDM0IrRCxTQUFTMFU7UUFDVDllLE9BQU8yd0I7UUFDUC91QjtNQUNEO0lBQ0Q7QUFFQSxRQUFJMEwsUUFBUTtBQUNYQSxhQUFPbVQsV0FBWUMsYUFBYTVYLEtBQUssT0FBTyxJQUFJLEdBQUd3RSxNQUFNO0lBQzFEO0FBQ0EsYUFBQXNqQixNQUFBLEdBQUFDLFlBQXNCSCxVQUFBRSxNQUFBQyxVQUFBeHFCLFFBQUF1cUIsT0FBVTtBQUFoQyxZQUFXRSxVQUFBRCxVQUFBRCxHQUFBO0FBQ1YsVUFBSTdTLGVBQWVyUCxTQUFVb2lCLFFBQVExbUIsU0FBUzBtQixRQUFROXdCLE9BQU84d0IsUUFBUWx2QixHQUFHO0lBQ3pFO0VBQ0Q7QUFDQSxTQUFPO0FBQ1I7QUFDQSxJQUFNbXZCLFdBQVdBLE1BQXFCO0FBQ3JDLE1BQUk5dUIsU0FBd0I7QUFDNUIsV0FBQSt1QixNQUFBLEdBQUFDLFlBQXFCcmlCLFNBQUFvaUIsTUFBQUMsVUFBQTVxQixRQUFBMnFCLE9BQVM7QUFBOUIsVUFBV3RaLFNBQUF1WixVQUFBRCxHQUFBO0FBQ1YsUUFBSTd6QixPQUFPdWEsT0FBTy9CO0FBQ2xCLFVBQU0vVCxNQUFNOFYsT0FBTzlCO0FBQ25CLFFBQUl6WSxRQUFRQSxLQUFLa0osU0FBUyxHQUFHO0FBQzVCLFVBQUl6RSxRQUFRLE1BQU07QUFDakJ6RSxnQkFBQSxJQUFBRCxPQUFZMEUsR0FBRztNQUNoQjtBQUNBLFVBQUlLLFdBQVcsTUFBTTtBQUNwQkEsaUJBQVM5RTtNQUNWLE9BQU87QUFDTjhFLGtCQUFBLEtBQUEvRSxPQUFlQyxJQUFJO01BQ3BCO0lBQ0Q7RUFDRDtBQUNBLFNBQU84RTtBQUNSO0FBQ0EsSUFBTWl2QixhQUFhQSxNQUFZO0FBQzlCL1EsYUFBVztBQUNYLE1BQ0MsQ0FBQzNjLEdBQUd3QixtQkFDSnRDLEtBQUswQixzQkFBc0IsTUFDM0IxQixLQUFLeXVCLCtCQUErQixZQUNwQ3p1QixLQUFLcVMsWUFDSjtBQUNEMFgsaUJBQWE7QUFDYnVDLFVBQU0sTUFBTTtBQUVYLFVBQUk1eUIsT0FBT2cxQixjQUFjaDFCLE9BQU9nMUIsV0FBV0MsdUJBQXVCO0FBQ2pFajFCLGVBQU9nMUIsV0FBV0Msd0JBQXdCWixTQUFTcjBCLE9BQU9nMUIsV0FBV0MscUJBQXFCO01BQzNGO0lBQ0QsQ0FBQztFQUNGLE9BQU87QUFDTixRQUNDLENBQUMzdUIsS0FBSzR1QixlQUNONXVCLEtBQUswb0IsYUFBYSxVQUNsQmppQixNQUFNLE1BQU0sTUFBTSxRQUNsQkEsTUFBTSxPQUFPLE1BQU0sUUFDbkIsQ0FBQ2tqQixTQUFTLEtBQ1Y3b0IsR0FBR1UsUUFBUSxHQUNWO0FBQ0Q7SUFDRDtBQUNBc3NCLFlBQVE7RUFDVDtBQUNEO0FBQ0EsSUFBTWUsTUFBTUEsTUFBWTtBQUN2QixNQUFJL3RCLEdBQUdndUIsU0FBUztBQUNmO0VBQ0Q7QUFDQWh1QixLQUFHZ3VCLFVBQVU7QUFDYk4sYUFBVztBQUNaO0FBRUE5MEIsT0FBT3ExQixtQkFBbUIsTUFBcUI7QUFDOUMsU0FBT1YsU0FBUztBQUNqQjtBQUNBMzBCLE9BQU9zMUIsbUJBQW9CbjBCLFdBQXdCO0FBQ2xELFNBQU9rekIsU0FBU2x6QixLQUFLO0FBQ3RCO0FBQ0FuQixPQUFPdTFCLG9CQUFvQixNQUFZO0FBQ3RDckYsWUFBVTtBQUNYO0FBQ0E5b0IsR0FBR291QixlQUFnQm5aLGNBQStCO0FBRWpEeGMsS0FBR2swQixLQUFLLGNBQWMsRUFBRXhzQixJQUFJOFUsUUFBUTtBQUNyQztBQUdBLElBQUkvVixLQUFLeXVCLCtCQUErQixVQUFVO0FBRWpEbDFCLEtBQUdrMEIsS0FBSyxVQUFVLEVBQUV4c0IsSUFBSSxNQUFNO0FBRzdCLFFBQUlySCxTQUFTQyxjQUFjLHVCQUF1QixHQUFHO0FBQ3BEO0lBQ0Q7QUFDQW1TLGNBQVU7QUFDVkUsY0FBVSxDQUFBO0FBQ1ZnZ0Isa0JBQWM7QUFDZHByQixPQUFHZ3VCLFVBQVU7QUFDYkQsUUFBSTtFQUNMLENBQUM7QUFDRjs7QUZsNUdBOzs7Ozs7Ozs7QUFlQSxNQUFBLEdBQUs1dUIsbUJBQUFrdkIsU0FBUSxFQUFFL3dCLEtBQUssU0FBU2d4QixTQUFlO0FBRTNDbHZCLGlCQUFlO0FBR2YsTUFBS3hHLE9BQU9xSyxVQUFVLENBQUVySyxPQUFPcUssT0FBMENvbUIsWUFBYW5xQixLQUFLMG9CLGFBQWEsUUFBUTtBQUMvRztFQUNEO0FBSUFtRyxNQUFJO0FBQ0wsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJtd0FwaSIsICJ1c2VyQWdlbnQiLCAiaW5pdE13QXBpIiwgImhvdENhdENoZWNrIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAid2luZG93IiwgIkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImFwaTIiLCAiY2hlY2tDYXRlZ29yaWVzUmVnRXhwIiwgInNlbGZOYW1lIiwgInN0b3JhZ2VJdGVtTmFtZSIsICJzdG9yYWdlSXRlbSIsICJzdG9yYWdlIiwgImNyZWF0ZWpJY29uIiwgImljb25DbGFzcyIsICIkIiwgImF0dHIiLCAiY29uY2F0IiwgInRleHQiLCAiY3JlYXRlTm90aWZ5QXJlYSIsICJ0ZXh0Tm9kZSIsICJpY29uIiwgInN0YXRlIiwgImFkZENsYXNzIiwgImFwcGVuZCIsICJjc3MiLCAicGFkZGluZyIsICJvbmUiLCAiZSIsICJfc2VsZiR3cFRleHRib3gxJHZhbHUiLCAic2VsZiIsICJuZXdWYWwiLCAid3BUZXh0Ym94MSIsICJ2YWx1ZSIsICJyZXBsYWNlIiwgIiRkaWFsb2dDaGVja1N0b3JhZ2UiLCAiJHBlcm1hU2F2ZUhpbnQiLCAiJHRleHRIaW50Tm9kZSIsICIkZGlhbG9nIiwgIiRvdmVybGF5IiwgImRvUmVtb3ZlIiwgIndwU3VtbWFyeSIsICJ3cml0ZVN0b3JhZ2UiLCAidmFsIiwgInNldCIsICJjbG9zZURpYWxvZyIsICJfJG92ZXJsYXkiLCAib2ZmIiwgInJlbW92ZSIsICJmaW5kIiwgInRyaWdnZXIiLCAiZmluaXNoRGlhbG9nIiwgInN0b3JhZ2VWYWx1ZSIsICJfJGRpYWxvZ0NoZWNrU3RvcmFnZSQiLCAiY2hlY2tlZCIsICJfYWRkVG9KUyIsICJfZSIsICJwcmV2ZW50RGVmYXVsdCIsICJoYXNDbGFzcyIsICIkZWwiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAidGl0bGUiLCAic3VtbWFyeSIsICJhcHBlbmR0ZXh0IiwgImRhdGEiLCAiZWRpdERvbmUiLCAiZWRpdFN0YXQiLCAiZXJyb3IiLCAibm90aWZ5IiwgImNvZGUiLCAiaW5mbyIsICJ0YWciLCAidHlwZSIsICJoaWRlIiwgInBvc3RXaXRoVG9rZW4iLCAidGhlbiIsICJwcm9tcHQiLCAiaWQiLCAib24iLCAic2hvdyIsICJhcHBlbmRUbyIsICJkaXNwbGF5IiwgInVzZXIiLCAiaXNBbm9uIiwgInJvbGUiLCAicHJlcGVuZCIsICJmaXJzdCIsICJldmVudCIsICJ0YXJnZXQiLCAia2V5IiwgIkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdCIsICIkb2tMaW5rIiwgImhyZWYiLCAiZG9FZGl0IiwgInJlc3VsdCIsICJub2NyZWF0ZSIsICIkYm9keSIsICJhamF4IiwgInVybCIsICJkYXRhVHlwZSIsICJzdWNjZXNzIiwgImNhY2hlIiwgImxvYWRIb3RDYXRDaGVjayIsICJjb25mIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJob3RDYXRNZXNzYWdlcyIsICJ3Z1VzZXJMYW5ndWFnZSIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0TWVzc2FnZSIsICJhcmdzIiwgIm1lc3NhZ2UiLCAicGxhaW4iLCAiUF9ub19kZWZhdWx0IiwgIlBfeWVzX2RlZmF1bHQiLCAiYXBpIiwgIkhDIiwgImxpbmtzIiwgImNoYW5nZSIsICJhZGQiLCAicmVzdG9yZSIsICJ1bmRvIiwgImRvd24iLCAidXAiLCAiY2hhbmdlVGFnIiwgImFkZG11bHRpIiwgImRpc2FibGUiLCAibnMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAibnNJZHMiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dBcnRpY2xlSWQiLCAidGVzdCIsICJ3Z1RpdGxlIiwgInVuY2F0X3JlZ2V4cCIsICJleGlzdHNZZXMiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImV4aXN0c05vIiwgInRlbXBsYXRlX2NhdGVnb3JpZXMiLCAiY2FwaXRhbGl6ZVBhZ2VOYW1lcyIsICJ1cGxvYWRfZGlzYWJsZWQiLCAiYmxhY2tsaXN0IiwgImJnX2NoYW5nZWQiLCAibm9fYXV0b2NvbW1pdCIsICJkZWxfbmVlZHNfZGlmZiIsICJzdWdnZXN0X2RlbGF5IiwgImVkaXRib3hfd2lkdGgiLCAic3VnZ2VzdGlvbnMiLCAiZml4ZWRfc2VhcmNoIiwgInVzZV91cF9kb3duIiwgImxpc3RTaXplIiwgInNpbmdsZV9taW5vciIsICJkb250X2FkZF90b193YXRjaGxpc3QiLCAic2hvcnRjdXRzIiwgImFkZFNob3J0Y3V0cyIsICJtYXAiLCAiayIsICJPYmplY3QiLCAiaGFzT3duIiwgInYiLCAidHJpbSIsICJsZW5ndGgiLCAiY2F0ZWdvcnlfY2Fub25pY2FsIiwgImNhdGVnb3J5X3JlZ2V4cCIsICJ0ZW1wbGF0ZV9yZWdleHAiLCAiSG90Q2F0IiwgInVhIiwgIm5hdmlnYXRvciIsICJ0b0xvd2VyQ2FzZSIsICJpc193ZWJraXQiLCAiY2F0X3ByZWZpeCIsICJub1N1Z2dlc3Rpb25zIiwgIndpa2lUZXh0QmxhbmsiLCAiU3RyaW5nIiwgInJhdyIsICJfdGVtcGxhdGVPYmplY3QiLCAiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsICJ3aWtpVGV4dEJsYW5rUkUiLCAiUmVnRXhwIiwgIndpa2lUZXh0QmxhbmtPckJpZGkiLCAiX3RlbXBsYXRlT2JqZWN0MiIsICJmb3JtYXR0ZWROYW1lc3BhY2VzIiwgIndnRm9ybWF0dGVkTmFtZXNwYWNlcyIsICJuYW1lc3BhY2VJZHMiLCAiYXV0b0xvY2FsaXplIiwgIm5hbWVzcGFjZU51bWJlciIsICJmYWxsYmFjayIsICJfZm9ybWF0dGVkTmFtZXNwYWNlcyQiLCAiY3JlYXRlUmVnZXhwU3RyIiwgIm5hbWUiLCAicmVnZXhfbmFtZSIsICJpIiwgImluaXRpYWwiLCAiY2hhckF0IiwgImxsIiwgInVsIiwgInRvVXBwZXJDYXNlIiwgIl90ZW1wbGF0ZU9iamVjdDMiLCAiY2Fub25pY2FsIiwgInJlZ2V4cCIsICJjYXRfbmFtZSIsICJfZm9ybWF0dGVkTmFtZXNwYWNlcyQyIiwgIm1ha2UiLCAiYXJnIiwgImxpdGVyYWwiLCAiY3JlYXRlVGV4dE5vZGUiLCAiY3JlYXRlRWxlbWVudCIsICJwYXJhbSIsICJ1cmkiLCAibG9jYXRpb24iLCAicmUiLCAibSIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJzY3JpcHQiLCAid2dTY3JpcHQiLCAiaW5kZXhPZiIsICJ3Z1NlcnZlciIsICJzbGljZSIsICJwcm90b2NvbCIsICJwcmVmaXgiLCAid2dBcnRpY2xlUGF0aCIsICJjbGFzc05hbWUiLCAic2V0U3R5bGVQcm9wZXJ0eSIsICJlbGVtZW50IiwgInByb3BlcnR5IiwgInN0eWxlIiwgImNhcGl0YWxpemUiLCAic3RyIiwgIndpa2lQYWdlUGF0aCIsICJwYWdlTmFtZSIsICJlc2NhcGVSRSIsICJfdGVtcGxhdGVPYmplY3Q0IiwgInN1YnN0aXR1dGVGYWN0b3J5IiwgIm9wdGlvbnMiLCAibGVhZCIsICJpbmRpY2F0b3IiLCAibGJyYWNlIiwgInJicmFjZSIsICJtYXRjaCIsICJpZHgiLCAiYWxwaGEiLCAicmVwbGFjZW1lbnQiLCAicmVwbGFjZVNob3J0Y3V0cyIsICJyZXBsYWNlSGFzaCIsICJzIiwgImZpbmRDYXRzUkUiLCAicmVwbGFjZUJ5QmxhbmtzIiwgImZpbmRfY2F0ZWdvcnkiLCAid2lraXRleHQiLCAiY2F0ZWdvcnkiLCAib25jZSIsICJjYXRfcmVnZXgiLCAibm93aWtpUmVnZXgiLCAiX3RlbXBsYXRlT2JqZWN0NSIsICJjb3BpZWR0ZXh0IiwgImN1cnJfbWF0Y2giLCAiaW50ZXJsYW5ndWFnZVJFIiwgImNoYW5nZV9jYXRlZ29yeSIsICJ0b1JlbW92ZSIsICJ0b0FkZCIsICJpc19oaWRkZW4iLCAiZmluZF9pbnNlcnRpb25wb2ludCIsICJfd2lraXRleHQiLCAiX3RlbXBsYXRlT2JqZWN0NiIsICJpbmRleCIsICJsYXN0SW5kZXgiLCAib25DYXQiLCAibmFtZVNwYWNlIiwgImtleUNoYW5nZSIsICJtYXRjaGVzIiwgImNhdF9wb2ludCIsICJtYXRjaGVzQXJyYXkiLCAiZmlyc3RNYXRjaCIsICJiZWZvcmUiLCAiTWF0aCIsICJtYXgiLCAiYWZ0ZXIiLCAiX2ZpcnN0TWF0Y2gkIiwgInNlYXJjaCIsICJqIiwgInBvaW50IiwgIm5ld2NhdHN0cmluZyIsICJzdWZmaXgiLCAidHh0IiwgImV2dEtleXMiLCAiY3RybEtleSIsICJtZXRhS2V5IiwgInNoaWZ0S2V5IiwgImV2dEtpbGwiLCAiX2V2ZW50JHN0b3BQcm9wYWdhdGlvIiwgInN0b3BQcm9wYWdhdGlvbiIsICJjYWxsIiwgImNhbmNlbEJ1YmJsZSIsICJjYXRMaW5lIiwgIm9uVXBsb2FkIiwgImVkaXRvcnMiLCAiY29tbWl0QnV0dG9uIiwgImNvbW1pdEZvcm0iLCAibXVsdGlTcGFuIiwgInBhZ2VUZXh0IiwgInBhZ2VUaW1lIiwgInBhZ2VXYXRjaGVkIiwgIndhdGNoQ3JlYXRlIiwgIndhdGNoRWRpdCIsICJtaW5vckVkaXRzIiwgImVkaXRUb2tlbiIsICJpc19ydGwiLCAic2VydmVyVGltZSIsICJsYXN0UmV2SWQiLCAicGFnZVRleHRSZXZJZCIsICJjb25mbGljdGluZ1VzZXIiLCAibmV3RE9NIiwgIlVOQ0hBTkdFRCIsICJPUEVOIiwgIkNIQU5HRV9QRU5ESU5HIiwgIkNIQU5HRUQiLCAiREVMRVRFRCIsICJzZXRQYWdlIiwgInN0YXJ0VGltZSIsICJxdWVyeSIsICJfZGF0YSRxdWVyeSR1c2VyaW5mbyIsICJwYWdlcyIsICJwYWdlIiwgInJldmlzaW9ucyIsICJsYXRlc3RSZXZpc2lvbiIsICJjb25mbGljdGluZ1JldmlzaW9uIiwgInNsb3RzIiwgIm1haW4iLCAiY29udGVudCIsICJ0aW1lc3RhbXAiLCAicmV2aWQiLCAiX2NvbmZsaWN0aW5nUmV2aXNpb24kIiwgImxhc3RyZXZpZCIsICJzdGFydHRpbWVzdGFtcCIsICJ3YXRjaGVkIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAibGFuZ2xpbmtzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJuIiwgImRvbmUiLCAibGFuZ2xpbmsiLCAibGFuZyIsICJfdGVtcGxhdGVPYmplY3Q3IiwgImVyciIsICJmIiwgImdlbmVyYWwiLCAidGltZSIsICJjYXNlIiwgInVzZXJpbmZvIiwgIndhdGNoY3JlYXRpb25zIiwgIndhdGNoZGVmYXVsdCIsICJtaW5vcmRlZmF1bHQiLCAic2F2ZUluUHJvZ3Jlc3MiLCAiaW5pdGlhdGVFZGl0IiwgImZhaWx1cmUiLCAib2xkQnV0dG9uU3RhdGUiLCAiZGlzYWJsZWQiLCAiZmFpbCIsICJmb3JtYXR2ZXJzaW9uIiwgInJhd2NvbnRpbnVlIiwgInRpdGxlcyIsICJ3Z1BhZ2VOYW1lIiwgInByb3AiLCAiaW5wcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInJ2bGltaXQiLCAicnZkaXIiLCAicnZzdGFydGlkIiwgIndnQ3VyUmV2aXNpb25JZCIsICJsbGxpbWl0IiwgIm1ldGEiLCAidWlwcm9wIiwgInN0YXR1cyIsICJzdGF0dXNUZXh0IiwgIm11bHRpQ2hhbmdlTXNnIiwgImNvdW50IiwgImN1cnJlbnRUaW1lc3RhbXAiLCAibm93IiwgIkRhdGUiLCAidHMiLCAiZ2V0VVRDRnVsbFllYXIiLCAidHdvIiwgImdldFVUQ01vbnRoIiwgImdldFVUQ0RhdGUiLCAiZ2V0VVRDSG91cnMiLCAiZ2V0VVRDTWludXRlcyIsICJnZXRVVENTZWNvbmRzIiwgInBlcmZvcm1DaGFuZ2VzIiwgInNpbmdsZUVkaXRvciIsICJzZWxmRWRpdENvbmZsaWN0IiwgIndnVXNlck5hbWUiLCAibm9Db21taXQiLCAid3BFZGl0VG9rZW4iLCAid3BEaWZmIiwgIndwU2F2ZSIsICJjaGFuZ2VkIiwgImFkZGVkIiwgImRlbGV0ZWQiLCAidG9FZGl0IiwgImVkaXQiLCAiY2hhbmdlcyIsICJvcmlnaW5hbENhdGVnb3J5IiwgImN1cnJlbnRDYXRlZ29yeSIsICJjdXJyZW50S2V5IiwgImN1cnJlbnRIaWRkZW4iLCAiZnJvbSIsICJ0byIsICJ3cE1pbm9yZWRpdCIsICJ3cFdhdGNodGhpcyIsICJ3cENoYW5nZVRhZ3MiLCAid3BBdXRvU3VtbWFyeSIsICJqb2luIiwgInNob3J0U3VtbWFyeSIsICJhcnJvdyIsICJqb2luZWRTdW1tYXJ5IiwgImZpbmFsU3VtbWFyeSIsICJ3cFN0YXJ0dGltZSIsICJ3cEVkaXR0aW1lIiwgIm9sZGlkIiwgImhjQ29tbWl0IiwgImNsaWNrIiwgInJlc29sdmVPbmUiLCAidG9SZXNvbHZlIiwgImNhdHMiLCAiY2F0ZWdvcmllcyIsICJpc19kYWIiLCAiaXNfcmVkaXIiLCAicmVkaXJlY3QiLCAiY2F0ZWdvcnlpbmZvIiwgImhpZGRlbiIsICJpc19taXNzaW5nIiwgIm1pc3NpbmciLCAicGFnZVRpdGxlIiwgImVkaXRvciIsICJkYWJJbnB1dENsZWFuZWQiLCAiaW5wdXRFeGlzdHMiLCAic3JjIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImNhdF8iLCAiY2F0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImxpbmsiLCAiZGFiIiwgInJlc29sdmVSZWRpcmVjdHMiLCAicCIsICJyZXNvbHZlTXVsdGkiLCAiY2FsbGJhY2siLCAiZGFiSW5wdXQiLCAibGFzdElucHV0IiwgInBsbmFtZXNwYWNlIiwgInBsbGltaXQiLCAiY2xsaW1pdCIsICJqc29uIiwgInJlcSIsICJtYWtlQWN0aXZlIiwgIndoaWNoIiwgImlzX2FjdGl2ZSIsICJfaSIsICJfZWRpdG9ycyIsICJpbmFjdGl2YXRlIiwgInNob3dEYWIiLCAiZXhwZWN0ZWRJbnB1dCIsICJsYXN0UmVhbElucHV0IiwgImFjdHVhbFZhbHVlIiwgInNob3dzTGlzdCIsICJzcGxpdCIsICJsYXN0U2VsZWN0aW9uIiwgInN0YXJ0IiwgImVuZCIsICJkaXNwbGF5TGlzdCIsICJzZXRUaW1lb3V0IiwgInNldFNlbGVjdGlvbiIsICJzaG93U3VnZ2VzdGlvbnMiLCAibXVsdGlTdWJtaXQiLCAiX2kyIiwgIl9lZGl0b3JzMiIsICJtc2ciLCAicmVzb2x2ZWQiLCAiZmlyc3REYWIiLCAiZG9udENoYW5nZSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJhY2NlcHRDaGVjayIsICJjb21taXQiLCAic2V0TXVsdGlJbnB1dCIsICJhZGRFdmVudExpc3RlbmVyIiwgInJlcGxhY2VXaXRoIiwgImNoZWNrTXVsdGlJbnB1dCIsICJoYXNDaGFuZ2VzIiwgIl9pMyIsICJfZWRpdG9yczMiLCAidG9DYXRlZ29yeVRpdGxlcyIsICJtZW1iZXJzIiwgIm1lbWJlciIsICJzdWdnZXN0aW9uRW5naW5lcyIsICJvcGVuc2VhcmNoIiwgImhhbmRsZXIiLCAicXVlcnlSZXN1bHQiLCAicXVlcnlLZXkiLCAiZXhpc3RzIiwgInNwbGljZSIsICJub3JtYWxpemVkIiwgImludGVybmFsc2VhcmNoIiwgIl9xdWVyeVJlc3VsdCRxdWVyeSIsICJhbGxwYWdlcyIsICJfcXVlcnlSZXN1bHQkcXVlcnkyIiwgIl90aXRsZSIsICJzdWJjYXRlZ29yaWVzIiwgIl9xdWVyeVJlc3VsdCRxdWVyeTMiLCAiY2F0ZWdvcnltZW1iZXJzIiwgInBhcmVudGNhdGVnb3JpZXMiLCAiX3F1ZXJ5UmVzdWx0JHF1ZXJ5NCIsICJzdWdnZXN0aW9uQ29uZmlncyIsICJzZWFyY2hpbmRleCIsICJlbmdpbmVzIiwgInRlbXAiLCAibm9Db21wbGV0aW9uIiwgInBhZ2VsaXN0IiwgImNvbWJpbmVkIiwgInN1YmNhdCIsICJwYXJlbnRjYXQiLCAiQlMiLCAiVEFCIiwgIlJFVCIsICJFU0MiLCAiU1BBQ0UiLCAiUEdVUCIsICJQR0RPV04iLCAiVVAiLCAiRE9XTiIsICJERUwiLCAiSU1FIiwgIkNhdGVnb3J5RWRpdG9yIiwgIl9DYXRlZ29yeUVkaXRvciIsICJpc0NvbXBvc2l0aW9uU3RhcnQiLCAiaXNBZGRDYXRlZ29yeSIsICJjYXRMaW5rIiwgIm9yaWdpbmFsS2V5IiwgIm9yaWdpbmFsRXhpc3RzIiwgIm9yaWdpbmFsSGlkZGVuIiwgIm9yaWdpbmFsU3RhdGUiLCAibGlua1NwYW4iLCAibm9ybWFsTGlua3MiLCAidW5kZWxMaW5rIiwgInVwRG93bkxpbmtzIiwgInVuZG9MaW5rIiwgImxpbmUiLCAic3BhbiIsICJlbmdpbmUiLCAiZW5naW5lTmFtZSIsICJlbmdpbmVTZWxlY3RvciIsICJmb3JtIiwgImxpc3QiLCAib2siLCAiY2FuY2VsQnV0dG9uIiwgImN1cnJlbnRFeGlzdHMiLCAibGFzdFNhdmVkU3RhdGUiLCAibGFzdFNhdmVkQ2F0ZWdvcnkiLCAibGFzdFNhdmVkS2V5IiwgImxhc3RTYXZlZEV4aXN0cyIsICJsYXN0U2F2ZWRIaWRkZW4iLCAibGFzdFF1ZXJ5IiwgImltZSIsICJ1c2VzQ29tcG9zaXRpb24iLCAibGFzdEtleSIsICJrZXlDb3VudCIsICJjYWxsYmFja09iaiIsICJjb25zdHJ1Y3RvciIsICJpbml0aWFsaXplIiwgImRpciIsICJmaXJzdENoaWxkIiwgIm1ha2VMaW5rU3BhbiIsICJhZnRlckVsZW1lbnQiLCAiYWRkU3BhbiIsICJwYXJlbnROb2RlIiwgImluc2VydEJlZm9yZSIsICJuZXh0U2libGluZyIsICJvcGVuIiwgImJpbmQiLCAib3V0ZXJTcGFuIiwgImludm9rZVN1Z2dlc3Rpb25zIiwgImRvbnRfYXV0b2NvbXBsZXRlIiwgInRleHRjaGFuZ2UiLCAibWFrZUZvcm0iLCAibWV0aG9kIiwgImFjY2VwdCIsICJzaXplIiwgInByb2Nlc3NLZXkiLCAicmVzZXRLZXlTZWxlY3Rpb24iLCAiY2FuY2VsIiwgIk51bWJlciIsICJzYXZlVmlldyIsICJoaWdobGlnaHRTdWdnZXN0aW9uIiwgImZvY3VzIiwgIm9wdCIsICJzZWxlY3RlZCIsICJzZWxlY3RlZEluZGV4IiwgIk9LIiwgInBvc2l0aW9uIiwgIndoaXRlU3BhY2UiLCAiX2k0IiwgIl9lZGl0b3JzNCIsICJyZWFkT25seSIsICJyZW1vdmVFZGl0b3IiLCAiYmFja2dyb3VuZENvbG9yIiwgIm5leHQiLCAicm9sbGJhY2siLCAiZG9udENoZWNrIiwgInNhbml0aXplSW5wdXQiLCAiY2xvc2UiLCAiX2k1IiwgIl9lZGl0b3JzNSIsICJjc3NUZXh0IiwgInRleHREZWNvcmF0aW9uIiwgInNlbGVjdEVuZ2luZSIsICJtYWtlQ2FsbCIsICJjbGVhbktleSIsICJjYiIsICJ6IiwgImNhbGxzTWFkZSIsICJub2ZDYWxscyIsICJhbGxUaXRsZXMiLCAic3VnZ2VzdGlvbkNvbmZpZyIsICJkb250Q2FjaGUiLCAiY2FuY2VsbGVkIiwgImdldEpTT04iLCAiZ2VuZXJhdGVBcnJheSIsICJmb3JjZSIsICJwaXBlIiwgImNhY2hlZFRpdGxlcyIsICJtYWtlQ2FsbHMiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiZW5naW5lXyIsICJ3Z1NjcmlwdFBhdGgiLCAiZG9udEF1dG9jb21wbGV0ZSIsICJpbnB1dFZhbHVlIiwgImNhdGVnb3J5TmFtZSIsICJ2Tm9ybWFsaXplZCIsICJrbm93blRvRXhpc3QiLCAidkxvdyIsICJzb3J0IiwgImEiLCAiYiIsICJwcmVmaXhNYXRjaEEiLCAicHJlZml4TWF0Y2hCIiwgImFMb3ciLCAiYkxvdyIsICJmaXJzdFRpdGxlIiwgImNvbXBsZXRlZCIsICJhdXRvQ29tcGxldGUiLCAiZXhpc3RpbmciLCAibm9mSXRlbXMiLCAibWluIiwgInpJbmRleCIsICJhbmNob3IiLCAibGlzdGgiLCAidG9wIiwgIm9mZnNldFRvcCIsICJvZmZzZXRIZWlnaHQiLCAibWF4TGlzdEhlaWdodCIsICJ2aWV3cG9ydCIsICJ3aGF0IiwgImRvY3VtZW50RWxlbWVudCIsICJzY3JvbGxfb2Zmc2V0IiwgIm5vZGUiLCAiYm94IiwgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsICJ4IiwgInJvdW5kIiwgImxlZnQiLCAieSIsICJ0ZXh0UG9zIiwgIm5sIiwgIm50IiwgIm9mZnNldCIsICJ0ZXh0Qm94V2lkdGgiLCAib2Zmc2V0V2lkdGgiLCAiY2xpZW50V2lkdGgiLCAid2lkdGgiLCAic2Nyb2xsIiwgInZpZXdfdyIsICJ3IiwgImxfcG9zIiwgInJpZ2h0IiwgInJlbGF0aXZlX29mZnNldCIsICJhY3RWYWwiLCAibm9ybWFsaXplZEFjdFZhbCIsICJkb250TW9kaWZ5IiwgImNhblNlbGVjdCIsICJzZXRTZWxlY3Rpb25SYW5nZSIsICJzZWxlY3Rpb25TdGFydCIsICJnZXRTZWxlY3Rpb24iLCAiX3RoaXMkdGV4dCRzZWxlY3Rpb25FIiwgInNlbGVjdGlvbkVuZCIsICJjdXJyIiwgInRndCIsICJvcHRpb25UZXh0IiwgImhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3QiLCAiSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0IiwgImhvdGNhdF9ub19hdXRvY29tbWl0IiwgIkhvdENhdE5vQXV0b0NvbW1pdCIsICJob3RjYXRfZGVsX25lZWRzX2RpZmYiLCAiSG90Q2F0RGVsTmVlZHNEaWZmIiwgImhvdGNhdF9zdWdnZXN0aW9uX2RlbGF5IiwgIkhvdENhdFN1Z2dlc3Rpb25EZWxheSIsICJob3RjYXRfZWRpdGJveF93aWR0aCIsICJIb3RDYXRFZGl0Qm94V2lkdGgiLCAiaG90Y2F0X3N1Z2dlc3Rpb25zIiwgIkhvdENhdFN1Z2dlc3Rpb25zIiwgImhvdGNhdF9zdWdnZXN0aW9uc19maXhlZCIsICJIb3RDYXRGaXhlZFN1Z2dlc3Rpb25zIiwgImhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3IiLCAiSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzIiwgImhvdGNhdF9jaGFuZ2VkX2JhY2tncm91bmQiLCAiSG90Q2F0Q2hhbmdlZEJhY2tncm91bmQiLCAiaG90Y2F0X3VzZV9jYXRlZ29yeV9saW5rcyIsICJIb3RDYXRVc2VDYXRlZ29yeUxpbmtzIiwgImhvdGNhdF9saXN0X3NpemUiLCAiSG90Q2F0TGlzdFNpemUiLCAiSG90Q2F0Q2hhbmdlVGFnIiwgImVGb3JtIiwgImVkaXRmb3JtIiwgImNhdFJlZ0V4cCIsICJvbGRUeHQiLCAiaXNNaW5vckNoYW5nZSIsICJfb2xkVHh0JG1hdGNoIiwgIl9uZXdUeHQkbWF0Y2giLCAidGV4dGJveCIsICJuZXdUeHQiLCAib2xkTGluZXMiLCAibmV3TGluZXMiLCAiZXhjZXB0IiwgImFBcnIiLCAiYkFyciIsICJsQXJyIiwgInNBcnIiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiaXRlbSIsICJpbmQiLCAiY0FyciIsICJmaWx0ZXIiLCAiYyIsICJ0cmltbWVkIiwgIndnQWN0aW9uIiwgInN1bSIsICJzdW1BIiwgIl9lRm9ybSR3cFRleHRib3gxJHZhbCIsICJfZUZvcm0kd3BUZXh0Ym94IiwgIiRjdCIsICJyZW1vdmVDaGFuZ2VUYWciLCAicGFyc2VJbnQiLCAiaXNOYU4iLCAiX2k2IiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgImJvZHkiLCAiZGlyZWN0aW9uIiwgImRlZmF1bHRWaWV3IiwgImdldENvbXB1dGVkU3R5bGUiLCAiZ2V0UHJvcGVydHlWYWx1ZSIsICJjYW5fZWRpdCIsICJjbG9zZUZvcm0iLCAiX2k3IiwgIl9lZGl0b3JzNiIsICJzZXR1cF91cGxvYWQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCAiaXAiLCAibm9kZU5hbWUiLCAicmV1cGxvYWQiLCAiZGVzdEZpbGUiLCAibGFiZWxDZWxsIiwgImxpbmVDZWxsIiwgInRleHRBbGlnbiIsICJtYXJnaW4iLCAiYm9yZGVyIiwgImxhYmVsIiwgInZlcnRpY2FsQWxpZ24iLCAibmV3Um93IiwgImluc2VydFJvdyIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QzIiwgImViIiwgImFkZGVkT25lIiwgIl9pOCIsICJfZWRpdG9yczciLCAidCIsICJuZXdfY2F0IiwgIl90ZW1wbGF0ZU9iamVjdDgiLCAiX2NsZWFuZWRUZXh0IiwgInByZXZpb3VzQ2xlYW5lZFRleHQiLCAicmVnZXgiLCAiY2xlYW5lZFRleHQiLCAiaXNPblBhZ2UiLCAibm9kZVR5cGUiLCAiTm9kZSIsICJFTEVNRU5UX05PREUiLCAiY2F0VGl0bGUiLCAiZ2V0QXR0cmlidXRlIiwgIl90ZW1wbGF0ZU9iamVjdDkiLCAiaW5pdGlhbGl6ZWQiLCAic2V0dXBUaW1lb3V0IiwgImZpbmRCeUNsYXNzIiwgInNjb3BlIiwgInNldHVwIiwgImFkZGl0aW9uYWxXb3JrIiwgImNsZWFyVGltZW91dCIsICJoaWRkZW5DYXRzIiwgIl9oaWRkZW5DYXRzJHBhcmVudE5vZCIsICJmb290ZXIiLCAiY29udGFpbmVyIiwgImNyZWF0ZUVkaXRvcnMiLCAicXVlcnlTZWxlY3RvckFsbCIsICJjb3B5Q2F0cyIsICJBcnJheSIsICJfaTkiLCAiX2NvcHlDYXRzIiwgImF0IiwgImxhc3RTcGFuIiwgImVuYWJsZU11bHRpIiwgImlubmVySFRNTCIsICJjdXJzb3IiLCAiRnVuY3Rpb24iLCAiaG9vayIsICJmaXJlIiwgImNyZWF0ZUNvbW1pdEZvcm0iLCAiZm9ybUNvbnRhaW5lciIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAiZ2V0UGFnZSIsICJzZXRTdGF0ZSIsICJuZXdTcGFucyIsICJjYXROYW1lIiwgIl9pMCIsICJfbmV3U3BhbnMiLCAibmV3U3BhbiIsICJnZXRTdGF0ZSIsICJfaTEiLCAiX2VkaXRvcnM4IiwgInJlYWxseV9ydW4iLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAiVXBsb2FkRm9ybSIsICJwcmV2aW91c19ob3RjYXRfc3RhdGUiLCAid2dJc0FydGljbGUiLCAicnVuIiwgInN0YXJ0ZWQiLCAiaG90Y2F0X2dldF9zdGF0ZSIsICJob3RjYXRfc2V0X3N0YXRlIiwgImhvdGNhdF9jbG9zZV9mb3JtIiwgInJ1bldoZW5SZWFkeSIsICJnZXRCb2R5IiwgImhvdENhdCJdCn0K
