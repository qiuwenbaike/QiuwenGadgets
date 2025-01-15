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
 * SPDX-License-Identifier: CC-BY-SA-3.0 + GFDL-1.3-no-invariants-or-later
 *
 * P no
 *
 * @base {@link https://www.qiuwenbaike.cn/wiki/File:P_no.svg}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HotCat/images}
 * @license CC-BY-SA-3.0 + GFDL-1.3-no-invariants-or-later {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-3.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-3.0 + GFDL-1.3-no-invariants-or-later
 *
 * P yes
 *
 * @base {@link https://www.qiuwenbaike.cn/wiki/File:P_yes.svg}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HotCat/images}
 * @license CC-BY-SA-3.0 + GFDL-1.3-no-invariants-or-later {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-3.0}
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
      self.wpSummary.value = "Removing [[Template:Check categories|{{Check categories}}]] ".concat(self.wpSummary.value);
      self.wpTextbox1.value = newVal;
    };
    const writeStorage = (val) => {
      mw.storage.set(storageItemName, val, 60 * 60 * 24 * 7);
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
//! src/HotCat/images/P_no.png
var P_no_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAABmJLR0QA/wD/AP+gvaeTAAADOUlEQVQ4jY2SXUzbZRjFf/9/y1fsKEGQQaDbmEKZzrmL6Qg6RzQQso9ELcm6i043zURJTPy40IQF9WqJmZpdaEIWIyH76EzwZsZEs6spc2TSJgjFhQEZUrqh2RAK9P++7+ONLbVs6pOcq+e853lzzrH4n3PtmhTny0qZyRMzOVk43dxsqbvxrH8XcRot0YcEaw9QnbVaBC4JcrKurvDCfwqOjCw/ZIucxKI1d6e1Jh6/QWVlNS6XG4GzKafw5W3brEUAO/dBNLoQPHGia/hYd2frTHwGpSWDocggzc/U8WxLA/1fn8ZRBq3lgMu19IWIWGsEoz8vhMTQt6Vhe374/Ck6OwPM/zmPUoapqet0vPYcN2/OEHjhMMXFpcTjv6GUQTmmPRJJ7v+H4ODgnccdI6eUFnvX0/tob3+FkdEhurpeZSWlePe9I9y+/Tu7d++j6ck2Nmz0U3p/Zeb3xuijGQ/DYXH5fPPDgD99wBhNR8ceotEB/P7HiMUi1NRsprPzQ2pqaqmtbch1a27nTm+5DVBdfed5rcWvtZCGiM3x42eoqKgmFovgdrsJBI7i8ZTg89WTzf0b6wDcAI6jg3cLvKiomKqqjSQS04hAMrnIpk0Po7UAkkv/I+Oh0jRlp5nGwMD3DA1dwuPxImLo7f2I8euja3hKC46WH1cFlSlVypANx1H09HwAQEtrkJbWIEtLi7zf/RK3biXI5SutzmQEtTbzuZ5cvNjP+Pgw6ys3sPWRJg4efIfGxjbm5uJ88vGbOI5a5SsZvvzDA/0ZQUeZwdyL5859CsCOHS0UFHrweit46+3P8fnquXLlO8ZiEZQyaGUcY9SL3d2WWf2hWJ9l+zExEWNqcpSiIg8NW56grNyHNmC78uk6dpqSknJmE9OkHGWUMof37q26mk7GAhAR6/xX8TCWBABSqWVm4xNMTP5CibeMrY8+hW27MnGurCQZG7uarHtw+5FQqP5sdtSZrvT2zt7nLnB6wAqmi+04KWzbRV5efk5DrG8dWX7j0IHNv+Z2Z035+vputAm8jmV2gbUuizoF8o3Y1pehYM1Pue/uKZiecFhcC3qmCqPy3LogEQqtX7wXN3v+ApHw44zjlQ7KAAAAAElFTkSuQmCC";
//! src/HotCat/images/P_yes.png
var P_yes_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAABmJLR0QA/wD/AP+gvaeTAAADAElEQVQ4jY2S32vbZRSHnzffdMvWJVmWtJamnUXWbnZgHKuTMSnOm1GcCJ3iil0qcyBDUIbzYl5N8K43SileFDc60h/0RlR0/gE6JkVpIQy0DLo4pavbsEvTtP2+7zlezKRZ2joPnJv3fM7DOef9GP5nzMxoZIuuJKRGZXY2dPvoUWM30pn/hviHjbo+xbwMNFWUCsAPig60tYW+fSzwxo3l1oDqAIZjj5tcYXzVD51JpUwBIFgtyGaXToqTIYEdGwHy+QUyI4P8cfsWZ89eIJlsOel5RU9V3zDG6CPA6V8W09aXy0BgI9jdu3OcfvsYudxNUqnnmZ+fIxpNEAptf31qamkE+KrcODm5cMgX/cI6DVinVOfKqs8H53vJ5W6yZ89+envfxzoIeFuwThFx75RXnphQz7kHwyDrTlCKwcGPmZ6+TjS6i1OnzrFzZ4K9ew8gYhARgOfKwKamhW7n2LcZbGrqGpnMZwB0d58hGo3T2vosqgbntCQLl4G+73o2c5Dvr9Lffw5VpaPjRdraDtDS0o4xQayVSun9MtA6joCuVe7PE4vVYYxhdHSA2dlfqa2N0NXVSzzRSDiSwK5NBoDCNfj3N62VXdYKvu/45uth+tKHGBn5lHv3/mJs7OGqnZ2vsm17hGSyFWtlfTo7VgY6Jw+cU5aXV7h6NcPSUp7Llz6hL91BsbhILFbPwYMv0dDwFMYEcU4fTavZ6z/Wf1kG+lYmrRUCgRoufHSJaDQOQLG4CMCRF14htC1MPN64bjJnxRexb128aGRtQjWfl/wWiT7B+Q+HCAQeWjQUquXp9sPU17fgxFT7U6yV08ePN/5cuqUHMD7a/1s2m98vqu0iSiLRhOcFsb7PM6lOdjfvY/eT7agaRLSUeXWSPnEiOV75OWWvXLkyVxvc6g+B6Sm9zd/JUSj8zY5wjLq65sq279WT9958rXmm2mbrzJfJ/N6l8C5GOsGEK6S3QL/TgBlO9zT/VN23KbAUExPqLbo/GxFbE3Rb76TTDYXNtJXxD+yujTqqNmcnAAAAAElFTkSuQmCC";
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
    existsYes: P_yes_default,
    existsNo: P_no_default,
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
      var _window$HotCat;
      if (!map) {
        return;
      }
      (_window$HotCat = window.HotCat).shortcuts || (_window$HotCat.shortcuts = {});
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
  const wikiTextBlank = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["[	 _  ᠎ - \u2028\u2029  　]+"], ["[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+"])));
  const wikiTextBlankRE = new RegExp(wikiTextBlank, "g");
  const wikiTextBlankOrBidi = String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["[	 _  ᠎ -​‎‏\u2028-  　]*"], ["[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200B\\u200E\\u200F\\u2028-\\u202F\\u205F\\u3000]*"])));
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
      return regex_name.replace(/([$()*+.?\\^])/g, String.raw(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["$1"], ["\\$1"])))).replace(wikiTextBlankRE, wikiTextBlank);
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
            pageText = page.revisions[0].slots.main.content;
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
              re += (i > 0 ? "|" : "") + page.langlinks[i].lang.replace(/([$()*+.?\\^])/g, String.raw(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["$1"], ["\\$1"]))));
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
        which.lastSelection && (which.lastSelection = {
          start: v[0].length,
          end: v[0].length
        });
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
              firstDab || (firstDab = element);
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
    isCompositionStart = false;
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
      let nofItems = Math.min(this.list.options.length, HC.listSize);
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
            const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["(s|S)*?</no"], ["(\\s|\\S)*?</no"]))), "wiki", ">"), "g");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hvdENhdC9tb2R1bGVzL2NoZWNrLm1vZHVsZS5sZXNzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9hcGkudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL2NoZWNrLnRzIiwgInNyYy9Ib3RDYXQvSG90Q2F0LmpzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9nZXRNZXNzYWdlLnRzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9tZXNzYWdlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9Ib3RDYXQvbW9kdWxlcy9jaGVjay5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGNhdGNoZWNrSW5saW5lSWNvbiA9IFwiY2hlY2stbW9kdWxlX19jYXRjaGVja0lubGluZUljb25fbUo1TkRxXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjYXRjaGVja0lubGluZUljb25cIjogY2F0Y2hlY2tJbmxpbmVJY29uXG59O1xuICAgICAgIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vLyBJbml0aWFsaXplIE1lZGlhV2lraSBBUElcbmNvbnN0IG13QXBpOiAodXNlckFnZW50Pzogc3RyaW5nKSA9PiBtdy5BcGkgPSAodXNlckFnZW50KSA9PiB7XG5cdHJldHVybiBpbml0TXdBcGkodXNlckFnZW50KTtcbn07XG5cbmV4cG9ydCB7bXdBcGl9O1xuIiwgImltcG9ydCB7Y2F0Y2hlY2tJbmxpbmVJY29ufSBmcm9tICcuL2NoZWNrLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7bXdBcGl9IGZyb20gJy4vYXBpJztcblxuLyoqXG4gKiBDaGVja0NhdGVnb3JpZXMgSG90Q2F0IEV4dGVuc2lvbiDigJNcbiAqIHJlbW92ZXMgdGhlIHRlbXBsYXRlIHdoZW4gY2F0ZWdvcml6aW5nIChwcm9tcHRzIGJlZm9yZSkgd2l0aCBIb3RDYXQgYW5kXG4gKiBhZGRzIGEgbGluayBcIkNhdGVnb3JpZXMgYXJlIE9LXCIgdG8gdGhlIGNhdGVnb3J5LXNlY3Rpb25cbiAqXG4gKiBAcmV2IDIgKDIwMTQtMDMtMjApXG4gKiBAYXV0aG9yIFJpbGxrZSwgMjAxMlxuICovXG4oZnVuY3Rpb24gaG90Q2F0Q2hlY2soKSB7XG5cdGlmIChcblx0XHRtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpICE9PSA2IHx8XG5cdFx0d2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCB8fFxuXHRcdCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tjYXRlZ29yaWVzJylcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGFwaSA9IG13QXBpKCdob3RDYXRDaGVjay8yLjAnKTtcblx0Y29uc3QgY2hlY2tDYXRlZ29yaWVzUmVnRXhwID0gL3t7W0NjXWhlY2tbIF9dY2F0ZWdvcmllc1tee31dKn19L2c7XG5cdGNvbnN0IHNlbGZOYW1lID0gJyhbW01lZGlhV2lraTpHYWRnZXQtSG90Q2F0LWNoZWNrLmpzfFNjcmlwdF1dKTogJztcblx0Y29uc3Qgc3RvcmFnZUl0ZW1OYW1lID0gJ2NoZWNrQ2F0Jztcblx0Y29uc3Qgc3RvcmFnZUl0ZW0gPSBtdy5zdG9yYWdlLmdldChzdG9yYWdlSXRlbU5hbWUpO1xuXHQvKipcblx0ICogQSBmZXcgc3R5bGluZyBoZWxwZXIgZnVuY3Rpb25zXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpY29uQ2xhc3Ncblx0ICogQHJldHVybiB7SlF1ZXJ5fVxuXHQgKi9cblx0Y29uc3QgY3JlYXRlakljb24gPSAoaWNvbkNsYXNzOiBzdHJpbmcpOiBKUXVlcnkgPT4ge1xuXHRcdHJldHVybiAkKCc8c3Bhbj4nKS5hdHRyKCdjbGFzcycsIGB1aS1pY29uICR7aWNvbkNsYXNzfSAke2NhdGNoZWNrSW5saW5lSWNvbn1gKS50ZXh0KCcgJyk7XG5cdH07XG5cdGNvbnN0IGNyZWF0ZU5vdGlmeUFyZWEgPSAodGV4dE5vZGU6IEpRdWVyeTxKUXVlcnkuTm9kZT4sIGljb246IHN0cmluZywgc3RhdGU6IHN0cmluZyk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRcdHJldHVybiAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3VpLXdpZGdldCcpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdFx0LmF0dHIoJ2NsYXNzJywgYCR7c3RhdGV9IHVpLWNvcm5lci1hbGxgKVxuXHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0J21hcmdpbi10b3AnOiAnMjBweCcsXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAnMC43ZW0nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8cD4nKS5hcHBlbmQoY3JlYXRlakljb24oaWNvbikuY3NzKCdtYXJnaW5SaWdodCcsICcwLjNlbScpLCB0ZXh0Tm9kZSkpXG5cdFx0XHQpO1xuXHR9O1xuXHQvLyBSZW1vdmUgXCJjaGVjayBjYXRlZ29yaWVzXCIgd2hlbiB1c2luZyBIb3RDYXRcblx0Ly8gT25seSBleGVjdXRlZCBvbiBmaXJzdCBzdWJtaXRcblx0JCgnYm9keScpLm9uZSgnc3VibWl0LmNoZWNrQ2F0TGlzdGVuZXInLCAnI2hvdGNhdENvbW1pdEZvcm0nLCBmdW5jdGlvbiAoZSkge1xuXHRcdGlmIChzdG9yYWdlSXRlbSA9PT0gJ2Rpc2FibGVkJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblxuXHRcdGNvbnN0IG5ld1ZhbCA9IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWU/LnJlcGxhY2UoY2hlY2tDYXRlZ29yaWVzUmVnRXhwLCAnJyk7XG5cdFx0Y29uc3QgZGxnQnV0dG9uczoge1xuXHRcdFx0J1llcywgUmVtb3ZlJz86ICgpID0+IHZvaWQ7XG5cdFx0XHQnTm8sIGtlZXAgaXQnPzogKCkgPT4gdm9pZDtcblx0XHR9ID0ge307XG5cdFx0bGV0ICRkaWFsb2dDaGVja1N0b3JhZ2U6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdFx0bGV0ICRwZXJtYVNhdmVIaW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRcdGxldCAkdGV4dEhpbnROb2RlO1xuXHRcdGxldCAkZGlhbG9nO1xuXHRcdGNvbnN0IGRvUmVtb3ZlID0gKCkgPT4ge1xuXHRcdFx0KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cblx0XHRcdFx0YFJlbW92aW5nIFtbVGVtcGxhdGU6Q2hlY2sgY2F0ZWdvcmllc3x7e0NoZWNrIGNhdGVnb3JpZXN9fV1dICR7KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlfWA7XG5cblx0XHRcdChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgPSBuZXdWYWw7XG5cdFx0fTtcblx0XHRjb25zdCB3cml0ZVN0b3JhZ2UgPSAodmFsOiBzdHJpbmcpID0+IHtcblx0XHRcdG13LnN0b3JhZ2Uuc2V0KHN0b3JhZ2VJdGVtTmFtZSwgdmFsLCA2MCAqIDYwICogMjQgKiA3KTsgLy8gNyBkYXlzXG5cdFx0fTtcblx0XHRkbGdCdXR0b25zWydZZXMsIFJlbW92ZSddID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdGlmICgoJGRpYWxvZ0NoZWNrU3RvcmFnZVswXSBhcyBIVE1MSW5wdXRFbGVtZW50KT8uY2hlY2tlZCkge1xuXHRcdFx0XHR3cml0ZVN0b3JhZ2UoJ2F1dG8nKTtcblx0XHRcdH1cblx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdH07XG5cdFx0ZGxnQnV0dG9uc1snTm8sIGtlZXAgaXQnXSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICgoJGRpYWxvZ0NoZWNrU3RvcmFnZVswXSBhcyBIVE1MSW5wdXRFbGVtZW50KT8uY2hlY2tlZCkge1xuXHRcdFx0XHR3cml0ZVN0b3JhZ2UoJ2Rpc2FibGVkJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHR9O1xuXHRcdGNvbnN0IF9hZGRUb0pTID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxFbGVtZW50LCBfZTogSlF1ZXJ5LkV2ZW50KSB7XG5cdFx0XHRfZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aWYgKCRwZXJtYVNhdmVIaW50Lmhhc0NsYXNzKCd1aS1zdGF0ZS1kaXNhYmxlZCcpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRlbDogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICQodGhpcyk7XG5cdFx0XHQkZWwub2ZmKCdjbGljaycpLnRleHQoJ1BsZWFzZSB3YWl0LicpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQuYWRkQ2xhc3MoJ3VpLXN0YXRlLWRpc2FibGVkJyk7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdHRpdGxlOiBgVXNlcjoke213LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKX0vY29tbW9uLmpzYCxcblx0XHRcdFx0c3VtbWFyeTogYCR7c2VsZk5hbWV9U2F2aW5nIEhvdENhdCBjb25maWd1cmF0aW9uLmAsXG5cdFx0XHRcdGFwcGVuZHRleHQ6ICRlbC5kYXRhKCdhZGRUZXh0JykgYXMgc3RyaW5nLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGVkaXREb25lID0gKGVkaXRTdGF0Pzoge2Vycm9yPzoge2NvZGU/OiBzdHJpbmc7IGluZm8/OiBzdHJpbmd9fSkgPT4ge1xuXHRcdFx0XHRpZiAoIWVkaXRTdGF0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlZGl0U3RhdC5lcnJvcikge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0YFVuYWJsZSB0byBzYXZlIHRvIHlvdXIgY29tbW9uLmpzIHVzaW5nIHRoZSBBUElcXG4ke2VkaXRTdGF0LmVycm9yLmNvZGV9XFxuJHtlZGl0U3RhdC5lcnJvci5pbmZvfWAsXG5cdFx0XHRcdFx0XHR7dGFnOiAnaG90Q2F0Q2hlY2snLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0JGVsLnRleHQoJ0VkaXQtRXJyb3IhJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsLnRleHQoJ0RvbmUuJyk7XG5cdFx0XHRcdFx0JHBlcm1hU2F2ZUhpbnQuZmFkZU91dCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtcykudGhlbihlZGl0RG9uZSk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBPbiBXaWtpbWVkaWEgQ29tbW9ucyB0aGVyZSB3ZXJlIHBlb3BsZSB3aG8gc2FpZDpcblx0XHQgKiBcIkNhdGVnb3JpemluZyB3aXRoIEhvdENhdCBkb2VzIGxlZ2l0IGF1dG9tYXRlZCByZW1vdmFsIG9mIHRoZSBjaGVjay1jYXQtbWVzc2FnZVwiXG5cdFx0ICogU28gd2UgaW52ZW50ZWQgYSBkaWFsb2cgdGhhdCBzaG91bGQgYmUgcmVhZGFibGUgYnkgdXNlcnMgZXZlbiB3aXRoIHZlcnkgZmV3IEVuZ2xpc2ggc2tpbGxzLlxuXHRcdCAqL1xuXHRcdGNvbnN0IHByb21wdCA9ICgpID0+IHtcblx0XHRcdCRkaWFsb2dDaGVja1N0b3JhZ2UgPSAkKCc8aW5wdXQ+Jylcblx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRcdFx0aWQ6ICdob3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRTdG9yYWdlJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0aWYgKCh0aGlzIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmZhZGVJbigpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5mYWRlT3V0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdCR0ZXh0SGludE5vZGUgPSAkKCc8dWw+Jyk7XG5cdFx0XHQkKCc8bGk+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHQudGV4dCgnRGlzYWJsZSB0aGlzIGZlYXR1cmUuJylcblx0XHRcdFx0XHRcdC5kYXRhKCdhZGRUZXh0JywgJ1xcbndpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRPcHRPdXQgPSB0cnVlOycpXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX2FkZFRvSlMpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZFRvKCR0ZXh0SGludE5vZGUpO1xuXHRcdFx0JCgnPGxpPicpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJyMnKVxuXHRcdFx0XHRcdFx0LnRleHQoJ1JlbW92ZSB7e2NoZWNrIGNhdGVnb3JpZXN9fSB3aGVuIGVkaXRpbmcgdXNpbmcgSG90Q2F0IHdpdGhvdXQgcHJvbXB0aW5nLicpXG5cdFx0XHRcdFx0XHQuZGF0YSgnYWRkVGV4dCcsICdcXG53aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0ID0gdHJ1ZTsnKVxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIF9hZGRUb0pTKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmRUbygkdGV4dEhpbnROb2RlKTtcblx0XHRcdCRwZXJtYVNhdmVIaW50ID0gY3JlYXRlTm90aWZ5QXJlYShcblx0XHRcdFx0JCgnPHNwYW4+JykudGV4dCgnU2F2ZSB0aGVzZSBzZXR0aW5nIGluIHlvdXIgY29tbW9uLmpzOiAnKS5hcHBlbmQoJHRleHRIaW50Tm9kZSksXG5cdFx0XHRcdCd1aS1pY29uLWluZm8nLFxuXHRcdFx0XHQndWktc3RhdGUtaGlnaGxpZ2h0J1xuXHRcdFx0KTtcblx0XHRcdCRkaWFsb2cgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHQnZm9udC1zaXplJzogJzJlbScsXG5cdFx0XHRcdFx0XHRcdCdsaW5lLWhlaWdodCc6ICcxLjhlbScsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+JykudGV4dCgnIHt7Y2hlY2sgY2F0ZWdvcmllc319ICcpLmNzcyh7XG5cdFx0XHRcdFx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAnI0Y4Q0NCMCcsXG5cdFx0XHRcdFx0XHRcdFx0J3RleHQtZGVjb3JhdGlvbic6ICdsaW5lLXRocm91Z2ggIWltcG9ydGFudCcsXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCcgPycpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQnPGJyPicsXG5cdFx0XHRcdFx0JGRpYWxvZ0NoZWNrU3RvcmFnZSxcblx0XHRcdFx0XHQkKCc8bGFiZWw+JykuYXR0cignZm9yJywgJ2hvdENhdEF1dG9SZW1vdmVDaGVja0NhdFN0b3JhZ2UnKS50ZXh0KFwiRG9uJ3QgYXNrIGFnYWluXCIpLFxuXHRcdFx0XHRcdCc8YnI+J1xuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmQobXcudXNlci5pc0Fub24oKSA/ICcnIDogJHBlcm1hU2F2ZUhpbnQuaGlkZSgpKTtcblx0XHRcdCRkaWFsb2cuZGlhbG9nKHtcblx0XHRcdFx0bW9kYWw6IHRydWUsXG5cdFx0XHRcdGNsb3NlT25Fc2NhcGU6IHRydWUsXG5cdFx0XHRcdHRpdGxlOiAne3tjaGVjayBjYXRlZ29yaWVzfX0gKOKIkik/Jyxcblx0XHRcdFx0d2lkdGg6IDQ1MCxcblx0XHRcdFx0YnV0dG9uczogZGxnQnV0dG9ucyxcblx0XHRcdFx0Y2xvc2U6ICgpID0+IHtcblx0XHRcdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0XHQkYm9keS5maW5kKCcjaG90Y2F0Q29tbWl0Rm9ybScpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvcGVuKCkge1xuXHRcdFx0XHRcdGNvbnN0ICRidXR0b25zID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcudWktZGlhbG9nLWJ1dHRvbnBhbmUgYnV0dG9uJyk7XG5cdFx0XHRcdFx0JGJ1dHRvbnMuZXEoMCkuYnV0dG9uKHtcblx0XHRcdFx0XHRcdGljb25zOiB7XG5cdFx0XHRcdFx0XHRcdHByaW1hcnk6ICd1aS1pY29uLWNpcmNsZS1jaGVjaycsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCRidXR0b25zLmVxKDEpLmJ1dHRvbih7XG5cdFx0XHRcdFx0XHRpY29uczoge1xuXHRcdFx0XHRcdFx0XHRwcmltYXJ5OiAndWktaWNvbi1jYW5jZWwnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRpZiAobmV3VmFsICE9PSAoc2VsZi53cFRleHRib3gxIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlKSB7XG5cdFx0XHRpZiAod2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdCB8fCBzdG9yYWdlSXRlbSA9PT0gJ2F1dG8nKSB7XG5cdFx0XHRcdGRvUmVtb3ZlKCk7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0cHJvbXB0KCk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9KTtcblx0Ly8gQWRkIE9LLUxpbmsgdG8gdGhlIGNhdHMgcGFuZWxcblx0Y29uc3QgJG9rTGluayA9ICQoJzxhPicpXG5cdFx0LmF0dHIoe1xuXHRcdFx0aHJlZjogJyMnLFxuXHRcdFx0dGl0bGU6ICdDYXRlZ29yaWVzIGFyZSBPSyEgSW1tZWRpYXRlbHkgcmVtb3ZlIHRoZSB0ZW1wbGF0ZS4nLFxuXHRcdH0pXG5cdFx0LmFwcGVuZCgnPHM+Jylcblx0XHQudGV4dCgne3tDaGVjayBjYXRlZ29yaWVzfX0nKTtcblx0JG9rTGluay5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRjb25zdCAkZWwgPSAkKHRoaXMpO1xuXHRcdCRlbC5vZmYoJ2NsaWNrJyk7XG5cdFx0Y29uc3QgZG9FZGl0ID0gKHJlc3VsdDogc3RyaW5nKSA9PiB7XG5cdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkZWwudGV4dCgnRG9pbmcuJyk7XG5cdFx0XHRjb25zdCB0ZXh0ID0gcmVzdWx0LnJlcGxhY2UoY2hlY2tDYXRlZ29yaWVzUmVnRXhwLCAnJyk7XG5cdFx0XHRpZiAodGV4dCA9PT0gcmVzdWx0KSB7XG5cdFx0XHRcdCRlbC50ZXh0KCdUZW1wbGF0ZSBub3QgZm91bmQhJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0XHRcdHRleHQsXG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdFx0c3VtbWFyeTogYCR7c2VsZk5hbWV9Q2F0ZWdvcmllcyBhcmUgY2hlY2tlZCBhbmQgT0suIFlvdSBjYW4gaGVscCBbW0NhdGVnb3J5Ok1lZGlhIG5lZWRpbmcgY2F0ZWdvcnkgcmV2aWV3fHJldmlld2luZ11dIWAsXG5cdFx0XHRcdG5vY3JlYXRlOiB0cnVlLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGVkaXREb25lID0gKGVkaXRTdGF0Pzoge2Vycm9yPzoge2NvZGU/OiBzdHJpbmc7IGluZm8/OiBzdHJpbmd9fSkgPT4ge1xuXHRcdFx0XHRpZiAoIWVkaXRTdGF0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlZGl0U3RhdC5lcnJvcikge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0YFVuYWJsZSB0byByZW1vdmUgXCJDaGVjayBjYXRlZ29yaWVzXCIgd2l0aCB0aGUgQVBJXFxuJHtlZGl0U3RhdC5lcnJvci5jb2RlfVxcbiR7ZWRpdFN0YXQuZXJyb3IuaW5mb31gLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0YWc6ICdob3RDYXRDaGVjaycsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdCBEb25lLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHQkYm9keS5maW5kKCcuY2hlY2tjYXRlZ29yaWVzJykuZmFkZU91dCgpO1xuXHRcdFx0fTtcblx0XHRcdCRlbC50ZXh0KCdEb2luZy4uJyk7XG5cdFx0XHR2b2lkIGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW1zKS50aGVuKGVkaXREb25lKTtcblx0XHR9O1xuXHRcdCRlbC50ZXh0KCdEb2luZycpO1xuXHRcdHZvaWQgJC5hamF4KHtcblx0XHRcdHVybDogbXcuY29uZmlnLmdldCgnd2dTY3JpcHQnKSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC8gL2csICdfJyksXG5cdFx0XHR9LFxuXHRcdFx0ZGF0YVR5cGU6ICd0ZXh0Jyxcblx0XHRcdGVycm9yOiAoKSA9PiB7XG5cdFx0XHRcdCRlbC50ZXh0KCdFcnJvciEnKTtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBkb0VkaXQsXG5cdFx0XHR0eXBlOiAnR0VUJyxcblx0XHRcdGNhY2hlOiBmYWxzZSxcblx0XHR9KTtcblx0fSk7XG5cdCQoZnVuY3Rpb24gbG9hZEhvdENhdENoZWNrKCkge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5LmZpbmQoJyNjYXRsaW5rcycpLmZpbmQoJ3VsOmZpcnN0JykuYXBwZW5kKCQoJzxsaT4nKS5hcHBlbmQoJG9rTGluaykpO1xuXHR9KTtcbn0pKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9tb2R1bGVzL2NoZWNrJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2dldE1lc3NhZ2UnO1xuaW1wb3J0IHtob3RDYXRNZXNzYWdlc30gZnJvbSAnLi9tb2R1bGVzL21lc3NhZ2VzJztcbmltcG9ydCB7bXdBcGl9IGZyb20gJy4vbW9kdWxlcy9hcGknO1xuaW1wb3J0IHBubyBmcm9tICcuL2ltYWdlcy9QX25vLnBuZyc7XG5pbXBvcnQgcHllcyBmcm9tICcuL2ltYWdlcy9QX3llcy5wbmcnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBamF4LWJhc2VkIHNpbXBsZSBDYXRlZ29yeSBtYW5hZ2VyLiBBbGxvd3MgYWRkaW5nL3JlbW92aW5nL2NoYW5naW5nIGNhdGVnb3JpZXMgb24gYSBwYWdlIHZpZXcuXG4gKiBTdXBwb3J0cyBtdWx0aXBsZSBjYXRlZ29yeSBjaGFuZ2VzLCBhcyB3ZWxsIGFzIHJlZGlyZWN0IGFuZCBkaXNhbWJpZ3VhdGlvbiByZXNvbHV0aW9uLiBBbHNvXG4gKiBwbHVncyBpbnRvIHRoZSB1cGxvYWQgZm9ybS4gU2VhcmNoIGVuZ2luZXMgdG8gdXNlIGZvciB0aGUgc3VnZ2VzdGlvbiBsaXN0IGFyZSBjb25maWd1cmFibGUsIGFuZFxuICogY2FuIGJlIHNlbGVjdGVkIGludGVyYWN0aXZlbHkuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9IZWxwOkdhZGdldC1Ib3RDYXR9XG4gKiBAYXV0aG9yIGF1dGhvcnMgPGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvSGVscDpHYWRnZXQtSG90Q2F0L1ZlcnNpb25faGlzdG9yeT5cbiAqL1xuLy8gTG9hZCB0cmFuc2xhdGlvbnMgbG9jYWxseVxuaG90Q2F0TWVzc2FnZXMoKTtcblxuLy8gTWFpbiBib2R5XG4oZnVuY3Rpb24gaG90Q2F0KCkge1xuXHQvLyBEb24ndCB1c2UgbXcuY29uZmlnLmdldCgpIGFzIHRoYXQgdGFrZXMgYSBjb3B5IG9mIHRoZSBjb25maWcsIGFuZCBzbyBkb2Vzbid0XG5cdC8vIGFjY291bnQgZm9yIHZhbHVlcyBjaGFuZ2luZywgZS5nLiB3Z0N1clJldmlzaW9uSWQgYWZ0ZXIgYSBWRSBlZGl0XG5cdGNvbnN0IGNvbmYgPSBtdy5jb25maWcudmFsdWVzO1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zIChpbiBvbGQgSUUvT3BlcmEgZWxlbWVudCBpZHMgYmVjb21lIHdpbmRvdyBwcm9wZXJ0aWVzKVxuXHRpZiAoKHdpbmRvdy5Ib3RDYXQgJiYgIXdpbmRvdy5Ib3RDYXQubm9kZU5hbWUpIHx8IGNvbmYud2dBY3Rpb24gPT09ICdlZGl0Jykge1xuXHRcdHJldHVybjsgLy8gTm90IG9uIGVkaXQgbW9kZVxuXHR9XG5cdC8vIEluaXRpYWxpemUgTWVkaWFXaWtpIEFQSVxuXHRjb25zdCBhcGkgPSBtd0FwaSgnSG90Q2F0LzMuMCcpO1xuXHQvLyBDb25maWd1cmF0aW9uIHN0dWZmLlxuXHR3aW5kb3cuSG90Q2F0ID0ge1xuXHRcdC8vIFRoZSBsaXR0bGUgbW9kaWZpY2F0aW9uIGxpbmtzIGRpc3BsYXllZCBhZnRlciBjYXRlZ29yeSBuYW1lcy4gVSsyMjEyIGlzIGEgbWludXMgc2lnbjsgVSsyMTkzIGFuZCBVKzIxOTEgYXJlXG5cdFx0Ly8gZG93bndhcmQgYW5kIHVwd2FyZCBwb2ludGluZyBhcnJvd3MuIERvIG5vdCB1c2Ug4oaTIGFuZCDihpEgaW4gdGhlIGNvZGUhXG5cdFx0bGlua3M6IHtcblx0XHRcdGNoYW5nZTogJyjCsSknLFxuXHRcdFx0cmVtb3ZlOiAnKFxcdTIyMTIpJyxcblx0XHRcdGFkZDogJygrKScsXG5cdFx0XHRyZXN0b3JlOiAnKMOXKScsXG5cdFx0XHR1bmRvOiAnKMOXKScsXG5cdFx0XHRkb3duOiAnKFxcdTIxOTMpJyxcblx0XHRcdHVwOiAnKFxcdTIxOTEpJyxcblx0XHR9LFxuXHRcdGNoYW5nZVRhZzogJ0hvdENhdCcsXG5cdFx0Ly8gVGhlIEhUTUwgY29udGVudCBvZiB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGluayBhdCB0aGUgZnJvbnQuXG5cdFx0YWRkbXVsdGk6ICc8c3Bhbj4rPHN1cD4rPC9zdXA+PC9zcGFuPicsXG5cdFx0Ly8gUmV0dXJuIHRydWUgdG8gZGlzYWJsZSBIb3RDYXQuXG5cdFx0ZGlzYWJsZTogKCkgPT4ge1xuXHRcdFx0Y29uc3QgbnMgPSBjb25mLndnTmFtZXNwYWNlTnVtYmVyO1xuXHRcdFx0Y29uc3QgbnNJZHMgPSBjb25mLndnTmFtZXNwYWNlSWRzO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0bnMgPCAwIHx8XG5cdFx0XHRcdC8vIFNwZWNpYWwgcGFnZXM7IFNwZWNpYWw6VXBsb2FkIGlzIGhhbmRsZWQgZGlmZmVyZW50bHlcblx0XHRcdFx0bnMgPT09IDEwIHx8XG5cdFx0XHRcdC8vIFRlbXBsYXRlc1xuXHRcdFx0XHRucyA9PT0gODI4IHx8XG5cdFx0XHRcdC8vIE1vZHVsZSAoTHVhKVxuXHRcdFx0XHRucyA9PT0gOCB8fFxuXHRcdFx0XHQvLyBNZWRpYVdpa2lcblx0XHRcdFx0KG5zID09PSA2ICYmICFjb25mLndnQXJ0aWNsZUlkKSB8fFxuXHRcdFx0XHQvLyBOb24tZXhpc3RpbmcgZmlsZSBwYWdlc1xuXHRcdFx0XHQobnMgPT09IDIgJiYgL1xcLihqc3xjc3MpJC8udGVzdChjb25mLndnVGl0bGUpKSB8fFxuXHRcdFx0XHQvLyBVc2VyIHNjcmlwdHNcblx0XHRcdFx0KG5zSWRzICYmIChucyA9PT0gbnNJZHMuY3JlYXRvciB8fCBucyA9PT0gbnNJZHMudGltZWR0ZXh0IHx8IG5zID09PSBuc0lkcy5pbnN0aXR1dGlvbikpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0Ly8gQSByZWdleHAgbWF0Y2hpbmcgYSB0ZW1wbGF0ZXMgdXNlZCB0byBtYXJrIHVuY2F0ZWdvcml6ZWQgcGFnZXMsIGlmIHlvdXIgd2lraSBkb2VzIGhhdmUgdGhhdC5cblx0XHQvLyBJZiBub3QsIHNldCBpdCB0byBudWxsLlxuXHRcdHVuY2F0X3JlZ2V4cDogL3t7XFxzKltVdV1uY2F0ZWdvcml6ZWRcXHMqW159XSp9fVxccyooPCEtLS4qPy0tPlxccyopPy9nLFxuXHRcdC8vIFRoZSBpbWFnZXMgdXNlZCBmb3IgdGhlIGxpdHRsZSBpbmRpY2F0aW9uIGljb24uIFNob3VsZCBub3QgbmVlZCBjaGFuZ2luZy5cblx0XHRleGlzdHNZZXM6IHB5ZXMsXG5cdFx0ZXhpc3RzTm86IHBubyxcblx0XHQvLyBhIGxpc3Qgb2YgY2F0ZWdvcmllcyB3aGljaCBjYW4gYmUgcmVtb3ZlZCBieSByZW1vdmluZyBhIHRlbXBsYXRlXG5cdFx0Ly8ga2V5OiB0aGUgY2F0ZWdvcnkgd2l0aG91dCBuYW1lc3BhY2Vcblx0XHQvLyB2YWx1ZTogQSByZWdleHAgbWF0Y2hpbmcgdGhlIHRlbXBsYXRlIG5hbWUsIGFnYWluIHdpdGhvdXQgbmFtZXNwYWNlXG5cdFx0Ly8gSWYgeW91IGRvbid0IGhhdmUgdGhpcyBhdCB5b3VyIHdpa2ksIG9yIGRvbid0IHdhbnQgdGhpcywgc2V0IGl0IHRvIGFuIGVtcHR5IG9iamVjdCB7fS5cblx0XHR0ZW1wbGF0ZV9jYXRlZ29yaWVzOiB7fSxcblx0XHQvLyBPdmVycmlkZSB0aGUgZGVjaXNpb24gb2Ygd2hldGhlciBIb3RDYXQgc2hvdWxkIGhlbHAgdXNlcnMgYnkgYXV0b21hdGljYWxseVxuXHRcdC8vIGNhcGl0YWxpc2luZyB0aGUgdGl0bGUgaW4gdGhlIHVzZXIgaW5wdXQgdGV4dCBpZiB0aGUgd2lraSBoYXMgY2FzZS1zZW5zaXRpdmUgcGFnZSBuYW1lcy5cblx0XHQvLyBCYXNpY2FsbHksIHRoaXMgd2lsbCBtYWtlIGFuIEFQSSBxdWVyeSB0byBjaGVjayB0aGUgTWVkaWFXaWtpIGNvbmZpZ3VyYXRpb24gYW5kIEhvdENhdCB0aGVuIHNldHNcblx0XHQvLyB0aGlzIHRvIHRydWUgZm9yIG1vc3Qgd2lraXMsIGFuZCB0byBmYWxzZSBvbiBXaWt0aW9uYXJ5LlxuXHRcdC8vXG5cdFx0Ly8gWW91IGNhbiBzZXQgdGhpcyBkaXJlY3RseSBpZiB0aGVyZSBpcyBhIHByb2JsZW0gd2l0aCBpdC4gRm9yIGV4YW1wbGUsIEdlb3JnaWFuIFdpa2lwZWRpYSAoa2F3aWtpKSxcblx0XHQvLyBpcyBrbm93biB0byBoYXZlIGRpZmZlcmVudCBjYXBpdGFsaXNhdGlvbiBsb2dpYyBiZXR3ZWVuIE1lZGlhV2lraSBQSFAgYW5kIEphdmFTY3JpcHQuIEFzIHN1Y2gsIGF1dG9tYXRpY1xuXHRcdC8vIGNhc2UgY2hhbmdlcyBpbiBKYXZhU2NyaXB0IGJ5IEhvdENhdCB3b3VsZCBiZSB3cm9uZy5cblx0XHRjYXBpdGFsaXplUGFnZU5hbWVzOiBudWxsLFxuXHRcdC8vIElmIHVwbG9hZF9kaXNhYmxlZCBpcyB0cnVlLCBIb3RDYXQgd2lsbCBub3QgYmUgdXNlZCBvbiB0aGUgVXBsb2FkIGZvcm0uXG5cdFx0dXBsb2FkX2Rpc2FibGVkOiBmYWxzZSxcblx0XHQvLyBTaW5nbGUgcmVndWxhciBleHByZXNzaW9uIG1hdGNoaW5nIGJsYWNrbGlzdGVkIGNhdGVnb3JpZXMgdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBvclxuXHRcdC8vIGFkZGVkIHVzaW5nIEhvdENhdC4gRm9yIGluc3RhbmNlIC9cXGJzdHVicz8kLyAoYW55IGNhdGVnb3J5IGVuZGluZyB3aXRoIHRoZSB3b3JkIFwic3R1YlwiXG5cdFx0Ly8gb3IgXCJzdHVic1wiKSwgb3IgLyhcXGJzdHVicz8kKXxcXGJtYWludGVuYW5jZVxcYi8gKHN0dWIgY2F0ZWdvcmllcyBhbmQgYW55IGNhdGVnb3J5IHdpdGggdGhlXG5cdFx0Ly8gd29yZCBcIm1haW50ZW5hbmNlXCIgaW4gaXRzIHRpdGxlLlxuXHRcdGJsYWNrbGlzdDogbnVsbCxcblx0XHQvLyBTdHVmZiBjaGFuZ2VhYmxlIGJ5IHVzZXJzOlxuXHRcdC8vIEJhY2tncm91bmQgZm9yIGNoYW5nZWQgY2F0ZWdvcmllcyBpbiBtdWx0aS1lZGl0IG1vZGUuIERlZmF1bHQgaXMgYSB2ZXJ5IGxpZ2h0IHNhbG1vbiBwaW5rLlxuXHRcdGJnX2NoYW5nZWQ6ICcjRkNBJyxcblx0XHQvLyBJZiB0cnVlLCBIb3RDYXQgd2lsbCBuZXZlciBhdXRvbWF0aWNhbGx5IHN1Ym1pdCBjaGFuZ2VzLiBIb3RDYXQgd2lsbCBvbmx5IG9wZW4gYW4gZWRpdCBwYWdlIHdpdGhcblx0XHQvLyB0aGUgY2hhbmdlczsgdXNlcnMgbXVzdCBhbHdheXMgc2F2ZSBleHBsaWNpdGx5LlxuXHRcdG5vX2F1dG9jb21taXQ6IGZhbHNlLFxuXHRcdC8vIElmIHRydWUsIHRoZSBcImNhdGVnb3J5IGRlbGV0aW9uXCIgbGluayBcIigtKVwiIHdpbGwgbmV2ZXIgc2F2ZSBhdXRvbWF0aWNhbGx5IGJ1dCBhbHdheXMgc2hvdyBhblxuXHRcdC8vIGVkaXQgcGFnZSB3aGVyZSB0aGUgdXNlciBoYXMgdG8gc2F2ZSB0aGUgZWRpdCBtYW51YWxseS4gSXMgZmFsc2UgYnkgZGVmYXVsdCBiZWNhdXNlIHRoYXQncyB0aGVcblx0XHQvLyB0cmFkaXRpb25hbCBiZWhhdmlvci4gVGhpcyBzZXR0aW5nIG92ZXJyaWRlcyBub19hdXRvY29tbWl0IGZvciBcIigtKVwiIGxpbmtzLlxuXHRcdGRlbF9uZWVkc19kaWZmOiBmYWxzZSxcblx0XHQvLyBUaW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgSG90Q2F0IHdhaXRzIGFmdGVyIGEga2V5c3Ryb2tlIGJlZm9yZSBtYWtpbmcgYSByZXF1ZXN0IHRvIHRoZVxuXHRcdC8vIHNlcnZlciB0byBnZXQgc3VnZ2VzdGlvbnMuXG5cdFx0c3VnZ2VzdF9kZWxheTogMTAwMCxcblx0XHQvLyBEZWZhdWx0IHdpZHRoLCBpbiBjaGFyYWN0ZXJzLCBvZiB0aGUgdGV4dCBpbnB1dCBmaWVsZC5cblx0XHRlZGl0Ym94X3dpZHRoOiA0MCxcblx0XHQvLyBPbmUgb2YgdGhlIGVuZ2luZV9uYW1lcyBhYm92ZSwgdG8gYmUgdXNlZCBhcyB0aGUgZGVmYXVsdCBzdWdnZXN0aW9uIGVuZ2luZS5cblx0XHRzdWdnZXN0aW9uczogJ2NvbWJpbmVkJyxcblx0XHQvLyBJZiB0cnVlLCBhbHdheXMgdXNlIHRoZSBkZWZhdWx0IGVuZ2luZSwgYW5kIG5ldmVyIGRpc3BsYXkgYSBzZWxlY3Rvci5cblx0XHRmaXhlZF9zZWFyY2g6IGZhbHNlLFxuXHRcdC8vIElmIGZhbHNlLCBkbyBub3QgZGlzcGxheSB0aGUgXCJ1cFwiIGFuZCBcImRvd25cIiBsaW5rc1xuXHRcdHVzZV91cF9kb3duOiB0cnVlLFxuXHRcdC8vIERlZmF1bHQgbGlzdCBzaXplXG5cdFx0bGlzdFNpemU6IDEwLFxuXHRcdC8vIElmIHRydWUsIHNpbmdsZSBjYXRlZ29yeSBjaGFuZ2VzIGFyZSBtYXJrZWQgYXMgbWlub3IgZWRpdHMuIElmIGZhbHNlLCB0aGV5J3JlIG5vdC5cblx0XHRzaW5nbGVfbWlub3I6IHRydWUsXG5cdFx0Ly8gSWYgdHJ1ZSwgbmV2ZXIgYWRkIGEgcGFnZSB0byB0aGUgdXNlcidzIHdhdGNobGlzdC4gSWYgZmFsc2UsIHBhZ2VzIGdldCBhZGRlZCB0byB0aGUgd2F0Y2hsaXN0IGlmXG5cdFx0Ly8gdGhlIHVzZXIgaGFzIHRoZSBcIkFkZCBwYWdlcyBJIGVkaXQgdG8gbXkgd2F0Y2hsaXN0XCIgb3IgdGhlIFwiQWRkIHBhZ2VzIEkgY3JlYXRlIHRvIG15IHdhdGNobGlzdFwiXG5cdFx0Ly8gb3B0aW9ucyBpbiBoaXMgb3IgaGVyIHByZWZlcmVuY2VzIHNldC5cblx0XHRkb250X2FkZF90b193YXRjaGxpc3Q6IGZhbHNlLFxuXHRcdHNob3J0Y3V0czogbnVsbCxcblx0XHRhZGRTaG9ydGN1dHM6IChtYXApID0+IHtcblx0XHRcdGlmICghbWFwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHdpbmRvdy5Ib3RDYXQuc2hvcnRjdXRzIHx8PSB7fTtcblx0XHRcdGZvciAobGV0IGsgaW4gbWFwKSB7XG5cdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bihtYXAsIGspIHx8IHR5cGVvZiBrICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB2ID0gbWFwW2tdO1xuXHRcdFx0XHRpZiAodHlwZW9mIHYgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ayA9IGsudHJpbSgpO1xuXHRcdFx0XHR2ID0gdi50cmltKCk7XG5cdFx0XHRcdGlmIChrLmxlbmd0aCA9PT0gMCB8fCB2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHdpbmRvdy5Ib3RDYXQuc2hvcnRjdXRzW2tdID0gdjtcblx0XHRcdH1cblx0XHR9LFxuXHR9O1xuXHRjb25zdCBIQyA9IHdpbmRvdy5Ib3RDYXQ7XG5cdC8vIE1vcmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIFdlIGhhdmUgYSBmZXcgcGxhY2VzIHdoZXJlIHdlIHRlc3QgZm9yIHRoZSBicm93c2VyOiBvbmNlIGZvclxuXHQvLyBTYWZhcmkgPCAzLjAsIGFuZCB0d2ljZSBmb3IgV2ViS2l0IChDaHJvbWUgb3IgU2FmYXJpLCBhbnkgdmVyc2lvbnMpXG5cdGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuXHRjb25zdCBpc193ZWJraXQgPSAvYXBwbGV3ZWJraXRcXC9cXGQrLy50ZXN0KHVhKSAmJiAhdWEuaW5jbHVkZXMoJ3Nwb29mZXInKTtcblx0bGV0IGNhdF9wcmVmaXggPSBudWxsO1xuXHRsZXQgbm9TdWdnZXN0aW9ucyA9IGZhbHNlO1xuXHQvLyBObyBmdXJ0aGVyIGNoYW5nZXMgc2hvdWxkIGJlIG5lY2Vzc2FyeSBoZXJlLlxuXHQvLyBUaGUgZm9sbG93aW5nIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmdzIGFyZSB1c2VkIHdoZW4gc2VhcmNoaW5nIGZvciBjYXRlZ29yaWVzIGluIHdpa2l0ZXh0LlxuXHRjb25zdCB3aWtpVGV4dEJsYW5rID0gU3RyaW5nLnJhd2BbXFx0IF9cXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDBBXFx1MjAyOFxcdTIwMjlcXHUyMDJGXFx1MjA1RlxcdTMwMDBdK2A7XG5cdGNvbnN0IHdpa2lUZXh0QmxhbmtSRSA9IG5ldyBSZWdFeHAod2lraVRleHRCbGFuaywgJ2cnKTtcblx0Ly8gUmVnZXhwIGZvciBoYW5kbGluZyBibGFua3MgaW5zaWRlIGEgY2F0ZWdvcnkgdGl0bGUgb3IgbmFtZXNwYWNlIG5hbWUuXG5cdC8vIFNlZSB7QGxpbmsgaHR0cDovL3N2bi53aWtpbWVkaWEub3JnL3ZpZXd2Yy9tZWRpYXdpa2kvdHJ1bmsvcGhhc2UzL2luY2x1ZGVzL1RpdGxlLnBocD9yZXZpc2lvbj0xMDQwNTEmdmlldz1tYXJrdXAjbDI3MjJ9XG5cdC8vIFNlZSBhbHNvIHtAbGluayBodHRwOi8vd3d3LmZpbGVmb3JtYXQuaW5mby9pbmZvL3VuaWNvZGUvY2F0ZWdvcnkvWnMvbGlzdC5odG19XG5cdC8vICAgTWVkaWFXaWtpIGNvbGxhcHNlcyBzZXZlcmFsIGNvbnRpZ3VvdXMgYmxhbmtzIGluc2lkZSBhIHBhZ2UgdGl0bGUgdG8gb25lIHNpbmdsZSBibGFuay4gSXQgYWxzbyByZXBsYWNlIGFcblx0Ly8gbnVtYmVyIG9mIHNwZWNpYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGJ5IHNpbXBsZSBibGFua3MuIEFuZCBmaW5hbGx5LCBibGFua3MgYXJlIHRyZWF0ZWQgYXMgdW5kZXJzY29yZXMuXG5cdC8vIFRoZXJlZm9yZSwgd2hlbiBsb29raW5nIGZvciBwYWdlIHRpdGxlcyBpbiB3aWtpdGV4dCwgd2UgbXVzdCBoYW5kbGUgYWxsIHRoZXNlIGNhc2VzLlxuXHQvLyAgIE5vdGU6IHdlIF9kb18gaW5jbHVkZSB0aGUgaG9yaXpvbnRhbCB0YWIgaW4gdGhlIGFib3ZlIGxpc3QsIGV2ZW4gdGhvdWdoIHRoZSBNZWRpYVdpa2kgc29mdHdhcmUgZm9yIHNvbWUgcmVhc29uXG5cdC8vIGFwcGVhcnMgdG8gbm90IGhhbmRsZSBpdC4gVGhlIHplcm8td2lkdGggc3BhY2UgXFx1MjAwQiBpcyBfbm90XyBoYW5kbGVkIGFzIGEgc3BhY2UgaW5zaWRlIHRpdGxlcyBieSBNVy5cblx0Y29uc3Qgd2lraVRleHRCbGFua09yQmlkaSA9IFN0cmluZy5yYXdgW1xcdCBfXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDAtXFx1MjAwQlxcdTIwMEVcXHUyMDBGXFx1MjAyOC1cXHUyMDJGXFx1MjA1RlxcdTMwMDBdKmA7XG5cdC8vIFdoaXRlc3BhY2UgcmVnZXhwIGZvciBoYW5kbGluZyB3aGl0ZXNwYWNlIGJldHdlZW4gbGluayBjb21wb25lbnRzLiBJbmNsdWRpbmcgdGhlIGhvcml6b250YWwgdGFiLCBidXQgbm90IFxcblxcclxcZlxcdjpcblx0Ly8gYSBsaW5rIG11c3QgYmUgb24gb25lIHNpbmdsZSBsaW5lLlxuXHQvLyAgIE1lZGlhV2lraSBhbHNvIHJlbW92ZXMgVW5pY29kZSBiaWRpIG92ZXJyaWRlIGNoYXJhY3RlcnMgaW4gcGFnZSB0aXRsZXMgKGFuZCBuYW1lc3BhY2UgbmFtZXMpIGNvbXBsZXRlbHkuXG5cdC8vIFRoaXMgaXMgKm5vdCogaGFuZGxlZCwgYXMgaXQgd291bGQgcmVxdWlyZSB1cyB0byBhbGxvdyBhbnkgb2YgW1xcdTIwMEVcXHUyMDBGXFx1MjAyQS1cXHUyMDJFXSBiZXR3ZWVuIGFueSB0d29cblx0Ly8gY2hhcmFjdGVycyBpbnNpZGUgYSBjYXRlZ29yeSBsaW5rLiBJdCBfY291bGRfIGJlIGRvbmUgdGhvdWdoLi4uIFdlIF9kb18gaGFuZGxlIHN0cmFuZ2Ugc3BhY2VzLCBpbmNsdWRpbmcgdGhlXG5cdC8vIHplcm8td2lkdGggc3BhY2UgXFx1MjAwQiwgYW5kIGJpZGkgb3ZlcnJpZGVzIGJldHdlZW4gdGhlIGNvbXBvbmVudHMgb2YgYSBjYXRlZ29yeSBsaW5rIChhZGphY2VudCB0byB0aGUgY29sb24sXG5cdC8vIG9yIGFkamFjZW50IHRvIGFuZCBpbnNpZGUgb2YgXCJbW1wiIGFuZCBcIl1dXCIpLlxuXHQvLyBGaXJzdCBhdXRvLWxvY2FsaXplIHRoZSByZWdleHBzIGZvciB0aGUgY2F0ZWdvcnkgYW5kIHRoZSB0ZW1wbGF0ZSBuYW1lc3BhY2VzLlxuXHRjb25zdCBmb3JtYXR0ZWROYW1lc3BhY2VzID0gY29uZi53Z0Zvcm1hdHRlZE5hbWVzcGFjZXM7XG5cdGNvbnN0IG5hbWVzcGFjZUlkcyA9IGNvbmYud2dOYW1lc3BhY2VJZHM7XG5cdGNvbnN0IGF1dG9Mb2NhbGl6ZSA9IChuYW1lc3BhY2VOdW1iZXIsIGZhbGxiYWNrKSA9PiB7XG5cdFx0Y29uc3QgY3JlYXRlUmVnZXhwU3RyID0gKG5hbWUpID0+IHtcblx0XHRcdGlmICghbmFtZSB8fCBuYW1lLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgcmVnZXhfbmFtZSA9ICcnO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGluaXRpYWwgPSBuYW1lLmNoYXJBdChpKTtcblx0XHRcdFx0Y29uc3QgbGwgPSBpbml0aWFsLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGNvbnN0IHVsID0gaW5pdGlhbC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRyZWdleF9uYW1lICs9IGxsID09PSB1bCA/IGluaXRpYWwgOiBgWyR7bGx9JHt1bH1dYDtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZWdleF9uYW1lLnJlcGxhY2UoLyhbJCgpKisuP1xcXFxeXSkvZywgU3RyaW5nLnJhd2BcXCQxYCkucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsIHdpa2lUZXh0QmxhbmspO1xuXHRcdH07XG5cdFx0ZmFsbGJhY2sgPSBmYWxsYmFjay50b0xvd2VyQ2FzZSgpO1xuXHRcdGNvbnN0IGNhbm9uaWNhbCA9IGZvcm1hdHRlZE5hbWVzcGFjZXNbU3RyaW5nKG5hbWVzcGFjZU51bWJlcildLnRvTG93ZXJDYXNlKCk7XG5cdFx0bGV0IHJlZ2V4cCA9IGNyZWF0ZVJlZ2V4cFN0cihjYW5vbmljYWwpO1xuXHRcdGlmIChmYWxsYmFjayAmJiBjYW5vbmljYWwgIT09IGZhbGxiYWNrKSB7XG5cdFx0XHRyZWdleHAgKz0gYHwke2NyZWF0ZVJlZ2V4cFN0cihmYWxsYmFjayl9YDtcblx0XHR9XG5cdFx0aWYgKG5hbWVzcGFjZUlkcykge1xuXHRcdFx0Zm9yIChjb25zdCBjYXRfbmFtZSBpbiBuYW1lc3BhY2VJZHMpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHR5cGVvZiBjYXRfbmFtZSA9PT0gJ3N0cmluZycgJiZcblx0XHRcdFx0XHRjYXRfbmFtZS50b0xvd2VyQ2FzZSgpICE9PSBjYW5vbmljYWwgJiZcblx0XHRcdFx0XHRjYXRfbmFtZS50b0xvd2VyQ2FzZSgpICE9PSBmYWxsYmFjayAmJlxuXHRcdFx0XHRcdG5hbWVzcGFjZUlkc1tjYXRfbmFtZV0gPT09IG5hbWVzcGFjZU51bWJlclxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZWdleHAgKz0gYHwke2NyZWF0ZVJlZ2V4cFN0cihjYXRfbmFtZSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVnZXhwO1xuXHR9O1xuXHRIQy5jYXRlZ29yeV9jYW5vbmljYWwgPSBmb3JtYXR0ZWROYW1lc3BhY2VzWycxNCddO1xuXHRIQy5jYXRlZ29yeV9yZWdleHAgPSBhdXRvTG9jYWxpemUoMTQsICdjYXRlZ29yeScpO1xuXHRpZiAoZm9ybWF0dGVkTmFtZXNwYWNlc1snMTAnXSkge1xuXHRcdEhDLnRlbXBsYXRlX3JlZ2V4cCA9IGF1dG9Mb2NhbGl6ZSgxMCwgJ3RlbXBsYXRlJyk7XG5cdH1cblx0Ly8gVXRpbGl0eSBmdW5jdGlvbnMuIFllcywgdGhpcyBkdXBsaWNhdGVzIHNvbWUgZnVuY3Rpb25hbGl0eSB0aGF0IGFsc28gZXhpc3RzIGluIG90aGVyIHBsYWNlcywgYnV0XG5cdC8vIHRvIGtlZXAgdGhpcyB3aG9sZSBzdHVmZiBpbiBhIHNpbmdsZSBmaWxlIG5vdCBkZXBlbmRpbmcgb24gYW55IG90aGVyIG9uLXdpa2kgSmF2YVNjcmlwdHMsIHdlIHJlLWRvXG5cdC8vIHRoZXNlIGZldyBvcGVyYXRpb25zIGhlcmUuXG5cdGNvbnN0IG1ha2UgPSAoYXJnLCBsaXRlcmFsKSA9PiB7XG5cdFx0aWYgKCFhcmcpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbGl0ZXJhbCA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFyZykgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZyk7XG5cdH07XG5cdGNvbnN0IHBhcmFtID0gKG5hbWUsIHVyaSkgPT4ge1xuXHRcdHVyaSB8fD0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcblx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoYFsmP10ke25hbWV9PShbXiYjXSopYCk7XG5cdFx0Y29uc3QgbSA9IHJlLmV4ZWModXJpKTtcblx0XHRpZiAobSAmJiBtLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQobVsxXSk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCB0aXRsZSA9IChocmVmKSA9PiB7XG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3Qgc2NyaXB0ID0gYCR7Y29uZi53Z1NjcmlwdH0/YDtcblx0XHRpZiAoXG5cdFx0XHRocmVmLmluZGV4T2Yoc2NyaXB0KSA9PT0gMCB8fFxuXHRcdFx0aHJlZi5pbmRleE9mKGNvbmYud2dTZXJ2ZXIgKyBzY3JpcHQpID09PSAwIHx8XG5cdFx0XHQoY29uZi53Z1NlcnZlci5zbGljZSgwLCAyKSA9PT0gJy8vJyAmJlxuXHRcdFx0XHRocmVmLmluZGV4T2YoZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKyBjb25mLndnU2VydmVyICsgc2NyaXB0KSA9PT0gMClcblx0XHQpIHtcblx0XHRcdC8vIGhyZWY9XCIvaW5kZXgucGhwP3RpdGxlPS4uLlwiXG5cdFx0XHRyZXR1cm4gcGFyYW0oJ3RpdGxlJywgaHJlZik7XG5cdFx0fVxuXHRcdC8vIGhyZWY9XCIvd2lraS8uLi5cIlxuXHRcdGxldCBwcmVmaXggPSBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyk7XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpKSB7XG5cdFx0XHRwcmVmaXggPSBjb25mLndnU2VydmVyICsgcHJlZml4O1xuXHRcdH0gLy8gRnVsbHkgZXhwYW5kZWQgVVJMP1xuXHRcdGlmIChocmVmLmluZGV4T2YocHJlZml4KSAmJiBwcmVmaXguc2xpY2UoMCwgMikgPT09ICcvLycpIHtcblx0XHRcdHByZWZpeCA9IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgcHJlZml4O1xuXHRcdH0gLy8gUHJvdG9jb2wtcmVsYXRpdmUgd2dTZXJ2ZXI/XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYuc2xpY2UocHJlZml4Lmxlbmd0aCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgaGFzQ2xhc3MgPSAoe2NsYXNzTmFtZX0sIG5hbWUpID0+IHtcblx0XHRyZXR1cm4gYCAke2NsYXNzTmFtZX0gYC5pbmNsdWRlcyhgICR7bmFtZX0gYCk7XG5cdH07XG5cdGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyKSA9PiB7XG5cdFx0aWYgKCFzdHIgfHwgc3RyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9XG5cdFx0cmV0dXJuIHN0ci5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXHR9O1xuXHRjb25zdCB3aWtpUGFnZVBhdGggPSAocGFnZU5hbWUpID0+IHtcblx0XHRyZXR1cm4gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VOYW1lKS5yZXBsYWNlKC8lM0EvZywgJzonKS5yZXBsYWNlKC8lMkYvZywgJy8nKSk7XG5cdH07XG5cdGNvbnN0IGVzY2FwZVJFID0gKHN0cikgPT4ge1xuXHRcdHJldHVybiBzdHIucmVwbGFjZSgvKFskKCkqKy4/W1xcXFxcXF1eXSkvZywgU3RyaW5nLnJhd2BcXCQxYCk7XG5cdH07XG5cdGNvbnN0IHN1YnN0aXR1dGVGYWN0b3J5ID0gKG9wdGlvbnMpID0+IHtcblx0XHRvcHRpb25zIHx8PSB7fTtcblx0XHRjb25zdCBsZWFkID0gb3B0aW9ucy5pbmRpY2F0b3IgfHwgJyQnO1xuXHRcdGNvbnN0IGluZGljYXRvciA9IGVzY2FwZVJFKGxlYWQpO1xuXHRcdGNvbnN0IGxicmFjZSA9IGVzY2FwZVJFKG9wdGlvbnMubGJyYWNlIHx8ICd7Jyk7XG5cdFx0Y29uc3QgcmJyYWNlID0gZXNjYXBlUkUob3B0aW9ucy5yYnJhY2UgfHwgJ30nKTtcblx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoXG5cdFx0XHQvLyAkJFxuXHRcdFx0YCg/OiR7aW5kaWNhdG9yfSgke2luZGljYXRvcn0pKXxgICtcblx0XHRcdFx0Ly8gJDAsICQxXG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oXFxcXGQrKSl8YCArXG5cdFx0XHRcdC8vICR7a2V5fVxuXHRcdFx0XHRgKD86JHtpbmRpY2F0b3J9KD86JHtsYnJhY2V9KFteJHtsYnJhY2V9JHtyYnJhY2V9XSspJHtyYnJhY2V9KSl8YCArXG5cdFx0XHRcdC8vICRrZXkgKG9ubHkgaWYgZmlyc3QgY2hhciBhZnRlciAkIGlzIG5vdCAkLCBkaWdpdCwgb3IgeyApXG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oPyEoPzpbJHtpbmRpY2F0b3J9JHtsYnJhY2V9XXxcXFxcZCkpKFxcXFxTKz8pXFxcXGIpYCxcblx0XHRcdCdnJ1xuXHRcdCk7XG5cdFx0Ly8gUmVwbGFjZSAkMSwgJDIsIG9yICR7a2V5MX0sICR7a2V5Mn0sIG9yICRrZXkxLCAka2V5MiBieSB2YWx1ZXMgZnJvbSBtYXAuICQkIGlzIHJlcGxhY2VkIGJ5IGEgc2luZ2xlICQuXG5cdFx0cmV0dXJuIChzdHIsIG1hcCkgPT4ge1xuXHRcdFx0aWYgKCFtYXApIHtcblx0XHRcdFx0cmV0dXJuIHN0cjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHIucmVwbGFjZShyZSwgKG1hdGNoLCBwcmVmaXgsIGlkeCwga2V5LCBhbHBoYSkgPT4ge1xuXHRcdFx0XHRpZiAocHJlZml4ID09PSBsZWFkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGxlYWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgayA9IGFscGhhIHx8IGtleSB8fCBpZHg7XG5cdFx0XHRcdGNvbnN0IHJlcGxhY2VtZW50ID0gdHlwZW9mIG1hcFtrXSA9PT0gJ2Z1bmN0aW9uJyA/IG1hcFtrXShtYXRjaCwgaykgOiBtYXBba107XG5cdFx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZW1lbnQgPT09ICdzdHJpbmcnID8gcmVwbGFjZW1lbnQgOiByZXBsYWNlbWVudCB8fCBtYXRjaDtcblx0XHRcdH0pO1xuXHRcdH07XG5cdH07XG5cdGNvbnN0IHJlcGxhY2VTaG9ydGN1dHMgPSAoKCkgPT4ge1xuXHRcdGNvbnN0IHJlcGxhY2VIYXNoID0gc3Vic3RpdHV0ZUZhY3Rvcnkoe1xuXHRcdFx0aW5kaWNhdG9yOiAnIycsXG5cdFx0XHRsYnJhY2U6ICdbJyxcblx0XHRcdHJicmFjZTogJ10nLFxuXHRcdH0pO1xuXHRcdHJldHVybiAoc3RyLCBtYXApID0+IHtcblx0XHRcdGNvbnN0IHMgPSByZXBsYWNlSGFzaChzdHIsIG1hcCk7XG5cdFx0XHRyZXR1cm4gSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA/IGNhcGl0YWxpemUocykgOiBzO1xuXHRcdH07XG5cdH0pKCk7XG5cdC8vIFRleHQgbW9kaWZpY2F0aW9uXG5cdGNvbnN0IGZpbmRDYXRzUkUgPSBuZXcgUmVnRXhwKFxuXHRcdGBcXFxcW1xcXFxbJHt3aWtpVGV4dEJsYW5rT3JCaWRpfSg/OiR7SEMuY2F0ZWdvcnlfcmVnZXhwfSkke3dpa2lUZXh0QmxhbmtPckJpZGl9OlteXFxcXF1dK1xcXFxdXFxcXF1gLFxuXHRcdCdnJ1xuXHQpO1xuXHRjb25zdCByZXBsYWNlQnlCbGFua3MgPSAobWF0Y2gpID0+IHtcblx0XHRyZXR1cm4gbWF0Y2gucmVwbGFjZSgvKFxcc3xcXFMpL2csICcgJyk7XG5cdH07IC8vIC8uLyBkb2Vzbid0IG1hdGNoIGxpbmVicmVha3MuIC8oXFxzfFxcUykvIGRvZXMuXG5cdGNvbnN0IGZpbmRfY2F0ZWdvcnkgPSAod2lraXRleHQsIGNhdGVnb3J5LCBvbmNlKSA9PiB7XG5cdFx0bGV0IGNhdF9yZWdleCA9IG51bGw7XG5cdFx0aWYgKEhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbY2F0ZWdvcnldKSB7XG5cdFx0XHRjYXRfcmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXHtcXFxceyR7d2lraVRleHRCbGFua09yQmlkaX0oJHtIQy50ZW1wbGF0ZV9yZWdleHB9KD89JHt3aWtpVGV4dEJsYW5rT3JCaWRpfTopKT8ke3dpa2lUZXh0QmxhbmtPckJpZGl9KD86JHtIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW2NhdGVnb3J5XX0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfShcXFxcfC4qPyk/XFxcXH1cXFxcfWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgY2F0X25hbWUgPSBlc2NhcGVSRShjYXRlZ29yeSk7XG5cdFx0XHRjb25zdCBpbml0aWFsID0gY2F0X25hbWUuc2xpY2UoMCwgMSk7XG5cdFx0XHRjYXRfcmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcWyR7d2lraVRleHRCbGFua09yQmlkaX0oJHtIQy5jYXRlZ29yeV9yZWdleHB9KSR7d2lraVRleHRCbGFua09yQmlkaX06JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSR7XG5cdFx0XHRcdFx0aW5pdGlhbCA9PT0gJ1xcXFwnIHx8ICFIQy5jYXBpdGFsaXplUGFnZU5hbWVzXG5cdFx0XHRcdFx0XHQ/IGluaXRpYWxcblx0XHRcdFx0XHRcdDogYFske2luaXRpYWwudG9VcHBlckNhc2UoKX0ke2luaXRpYWwudG9Mb3dlckNhc2UoKX1dYFxuXHRcdFx0XHR9JHtjYXRfbmFtZS5zbGljZSgxKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayl9JHt3aWtpVGV4dEJsYW5rT3JCaWRpfShcXFxcfC4qPyk/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKG9uY2UpIHtcblx0XHRcdHJldHVybiBjYXRfcmVnZXguZXhlYyh3aWtpdGV4dCk7XG5cdFx0fVxuXHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0Y29uc3QgY29waWVkdGV4dCA9IHdpa2l0ZXh0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCByZXBsYWNlQnlCbGFua3MpLnJlcGxhY2Uobm93aWtpUmVnZXgsIHJlcGxhY2VCeUJsYW5rcyk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gW107XG5cdFx0bGV0IGN1cnJfbWF0Y2ggPSBudWxsO1xuXHRcdHdoaWxlICgoY3Vycl9tYXRjaCA9IGNhdF9yZWdleC5leGVjKGNvcGllZHRleHQpKSAhPT0gbnVsbCkge1xuXHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0ge1xuXHRcdFx0XHRtYXRjaDogY3Vycl9tYXRjaCxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJlc3VsdC5yZSA9IGNhdF9yZWdleDtcblx0XHRyZXR1cm4gcmVzdWx0OyAvLyBBbiBhcnJheSBjb250YWluaW5nIGFsbCBtYXRjaGVzLCB3aXRoIHBvc2l0aW9ucywgaW4gcmVzdWx0WyBpIF0ubWF0Y2hcblx0fTtcblx0bGV0IGludGVybGFuZ3VhZ2VSRSA9IG51bGw7XG5cdGNvbnN0IGNoYW5nZV9jYXRlZ29yeSA9ICh3aWtpdGV4dCwgdG9SZW1vdmUsIHRvQWRkLCBrZXksIGlzX2hpZGRlbikgPT4ge1xuXHRcdGNvbnN0IGZpbmRfaW5zZXJ0aW9ucG9pbnQgPSAoX3dpa2l0ZXh0KSA9PiB7XG5cdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsIFN0cmluZy5yYXdgKFxcc3xcXFMpKj88L25vYCwgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdFx0Y29uc3QgY29waWVkdGV4dCA9IF93aWtpdGV4dFxuXHRcdFx0XHQucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csIHJlcGxhY2VCeUJsYW5rcylcblx0XHRcdFx0LnJlcGxhY2Uobm93aWtpUmVnZXgsIHJlcGxhY2VCeUJsYW5rcyk7XG5cdFx0XHQvLyBTZWFyY2ggaW4gY29waWVkdGV4dCB0byBhdm9pZCB0aGF0IHdlIGluc2VydCBpbnNpZGUgYW4gSFRNTCBjb21tZW50IG9yIGEgbm93aWtpIFwiZWxlbWVudFwiLlxuXHRcdFx0bGV0IGluZGV4ID0gLTE7XG5cdFx0XHRmaW5kQ2F0c1JFLmxhc3RJbmRleCA9IDA7XG5cdFx0XHR3aGlsZSAoZmluZENhdHNSRS5leGVjKGNvcGllZHRleHQpICE9PSBudWxsKSB7XG5cdFx0XHRcdGluZGV4ID0gZmluZENhdHNSRS5sYXN0SW5kZXg7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaW5kZXggPCAwKSB7XG5cdFx0XHRcdC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpbnRlcmxhbmd1YWdlIGxpbmsuLi5cblx0XHRcdFx0bGV0IG1hdGNoID0gbnVsbDtcblx0XHRcdFx0aWYgKGludGVybGFuZ3VhZ2VSRSkge1xuXHRcdFx0XHRcdG1hdGNoID0gaW50ZXJsYW5ndWFnZVJFLmV4ZWMoY29waWVkdGV4dCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQXBwcm94aW1hdGlvbiB3aXRob3V0IEFQSTogaW50ZXJsYW5ndWFnZSBsaW5rcyBzdGFydCB3aXRoIDIgdG8gMyBsb3dlciBjYXNlIGxldHRlcnMsIG9wdGlvbmFsbHkgZm9sbG93ZWQgYnlcblx0XHRcdFx0XHQvLyBhIHNlcXVlbmNlIG9mIGdyb3VwcyBjb25zaXN0aW5nIG9mIGEgZGFzaCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBsb3dlciBjYXNlIGxldHRlcnMuIEV4Y2VwdGlvbnMgYXJlIFwic2ltcGxlXCJcblx0XHRcdFx0XHQvLyBhbmQgXCJ0b2tpcG9uYVwiLlxuXHRcdFx0XHRcdG1hdGNoID0gLygoXnxcXG5cXHI/KShcXFtcXFtcXHMqKChbYS16XXsyLDN9KC1bYS16XSspKil8c2ltcGxlfHRva2lwb25hKVxccyo6W15cXF1dK11dXFxzKikpKyQvLmV4ZWMoXG5cdFx0XHRcdFx0XHRjb3BpZWR0ZXh0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdFx0XHQoe2luZGV4fSA9IG1hdGNoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGlkeDogaW5kZXgsXG5cdFx0XHRcdFx0b25DYXQ6IGZhbHNlLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aWR4OiBpbmRleCxcblx0XHRcdFx0b25DYXQ6IGluZGV4ID49IDAsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0Y29uc3Qgc3VtbWFyeSA9IFtdO1xuXHRcdGNvbnN0IG5hbWVTcGFjZSA9IEhDLmNhdGVnb3J5X2Nhbm9uaWNhbDtcblx0XHRjb25zdCAvLyBQb3NpdGlvbiBvZiByZW1vdmVkIGNhdGVnb3J5O1xuXHRcdFx0a2V5Q2hhbmdlID0gdG9SZW1vdmUgJiYgdG9BZGQgJiYgdG9SZW1vdmUgPT09IHRvQWRkICYmIHRvQWRkLmxlbmd0aCA+IDA7XG5cdFx0bGV0IG1hdGNoZXM7XG5cdFx0bGV0IGNhdF9wb2ludCA9IC0xO1xuXHRcdGtleSAmJj0gYHwke2tleX1gO1xuXHRcdC8vIFJlbW92ZVxuXHRcdGlmICh0b1JlbW92ZSAmJiB0b1JlbW92ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRtYXRjaGVzID0gZmluZF9jYXRlZ29yeSh3aWtpdGV4dCwgdG9SZW1vdmUpO1xuXHRcdFx0aWYgKCFtYXRjaGVzIHx8IG1hdGNoZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRlcnJvcjogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X25vdEZvdW5kJywgdG9SZW1vdmUpLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0bGV0IGJlZm9yZSA9IHdpa2l0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIG1hdGNoZXNbMF0ubWF0Y2guaW5kZXgpKTtcblx0XHRcdGxldCBhZnRlciA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIG1hdGNoZXNbMF0ubWF0Y2guaW5kZXggKyBtYXRjaGVzWzBdLm1hdGNoWzBdLmxlbmd0aCkpO1xuXHRcdFx0aWYgKG1hdGNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHQvLyBSZW1vdmUgYWxsIG9jY3VycmVuY2VzIGluIGFmdGVyXG5cdFx0XHRcdG1hdGNoZXMucmUubGFzdEluZGV4ID0gMDtcblx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5yZXBsYWNlKG1hdGNoZXMucmUsICcnKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0dG9BZGQgJiYgLy8gbmFtZVNwYWNlID0gbWF0Y2hlc1sgMCBdLm1hdGNoWyAxIF0gfHwgbmFtZVNwYWNlOyBDYW5vbmljYWwgbmFtZXNwYWNlIHNob3VsZCBiZSBhbHdheXMgcHJlZmVycmVkXG5cdFx0XHRcdGtleSA9PT0gbnVsbFxuXHRcdFx0KSB7XG5cdFx0XHRcdFssICwga2V5XSA9IG1hdGNoZXNbMF0ubWF0Y2g7XG5cdFx0XHR9XG5cdFx0XHQvLyBSZW1lbWJlciB0aGUgY2F0ZWdvcnkga2V5LCBpZiBhbnkuXG5cdFx0XHQvLyBSZW1vdmUgd2hpdGVzcGFjZSAocHJvcGVybHkpOiBzdHJpcCB3aGl0ZXNwYWNlLCBidXQgb25seSB1cCB0byB0aGUgbmV4dCBsaW5lIGZlZWQuXG5cdFx0XHQvLyBJZiB3ZSB0aGVuIGhhdmUgdHdvIGxpbmVmZWVkcyBpbiBhIHJvdywgcmVtb3ZlIG9uZS4gT3RoZXJ3aXNlLCBpZiB3ZSBoYXZlIHR3byBub24tXG5cdFx0XHQvLyB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMsIGluc2VydCBhIGJsYW5rLlxuXHRcdFx0bGV0IGkgPSBiZWZvcmUubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID49IDAgJiYgYmVmb3JlLmNoYXJBdChpKSAhPT0gJ1xcbicgJiYgYmVmb3JlLnNsaWNlKGksIGkgKyAxKS5zZWFyY2goL1xccy8pID49IDApIHtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGogPSAwO1xuXHRcdFx0d2hpbGUgKGogPCBhZnRlci5sZW5ndGggJiYgYWZ0ZXIuY2hhckF0KGopICE9PSAnXFxuJyAmJiBhZnRlci5zbGljZShqLCBqICsgMSkuc2VhcmNoKC9cXHMvKSA+PSAwKSB7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0aSA+PSAwICYmXG5cdFx0XHRcdGJlZm9yZS5jaGFyQXQoaSkgPT09ICdcXG4nICYmXG5cdFx0XHRcdChhZnRlci5sZW5ndGggPT09IDAgfHwgKGogPCBhZnRlci5sZW5ndGggJiYgYWZ0ZXIuY2hhckF0KGopID09PSAnXFxuJykpXG5cdFx0XHQpIHtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdFx0YmVmb3JlID0gaSA+PSAwID8gYmVmb3JlLnNsaWNlKDAsIE1hdGgubWF4KDAsIGkgKyAxKSkgOiAnJztcblx0XHRcdGFmdGVyID0gaiA8IGFmdGVyLmxlbmd0aCA/IGFmdGVyLnNsaWNlKE1hdGgubWF4KDAsIGopKSA6ICcnO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRiZWZvcmUubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRiZWZvcmUuc2xpY2UoTWF0aC5tYXgoMCwgYmVmb3JlLmxlbmd0aCAtIDEpKS5zZWFyY2goL1xcUy8pID49IDAgJiZcblx0XHRcdFx0YWZ0ZXIubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRhZnRlci5zbGljZSgwLCAxKS5zZWFyY2goL1xcUy8pID49IDBcblx0XHRcdCkge1xuXHRcdFx0XHRiZWZvcmUgKz0gJyAnO1xuXHRcdFx0fVxuXHRcdFx0Y2F0X3BvaW50ID0gYmVmb3JlLmxlbmd0aDtcblx0XHRcdGlmIChjYXRfcG9pbnQgPT09IDAgJiYgYWZ0ZXIubGVuZ3RoID4gMCAmJiBhZnRlci5zbGljZSgwLCAxKSA9PT0gJ1xcbicpIHtcblx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5zbGljZSgxKTtcblx0XHRcdH1cblx0XHRcdHdpa2l0ZXh0ID0gYmVmb3JlICsgYWZ0ZXI7XG5cdFx0XHRpZiAoIWtleUNoYW5nZSkge1xuXHRcdFx0XHRpZiAoSEMudGVtcGxhdGVfY2F0ZWdvcmllc1t0b1JlbW92ZV0pIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXRlbXBsYXRlX3JlbW92ZWQnLCB0b1JlbW92ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfcmVtb3ZlZCcsIHRvUmVtb3ZlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBBZGRcblx0XHRpZiAodG9BZGQgJiYgdG9BZGQubGVuZ3RoID4gMCkge1xuXHRcdFx0bWF0Y2hlcyA9IGZpbmRfY2F0ZWdvcnkod2lraXRleHQsIHRvQWRkKTtcblx0XHRcdGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQvLyBBbHJlYWR5IGV4aXN0c1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0ZXJyb3I6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9leGlzdHMnLCB0b0FkZCksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRsZXQgb25DYXQgPSBmYWxzZTtcblx0XHRcdGlmIChjYXRfcG9pbnQgPCAwKSB7XG5cdFx0XHRcdGNvbnN0IHBvaW50ID0gZmluZF9pbnNlcnRpb25wb2ludCh3aWtpdGV4dCk7XG5cdFx0XHRcdGNhdF9wb2ludCA9IHBvaW50LmlkeDtcblx0XHRcdFx0KHtvbkNhdH0gPSBwb2ludCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbkNhdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuZXdjYXRzdHJpbmcgPSBgW1ske25hbWVTcGFjZX06JHt0b0FkZH0ke2tleSB8fCAnJ31dXWA7XG5cdFx0XHRpZiAoY2F0X3BvaW50ID49IDApIHtcblx0XHRcdFx0Y29uc3Qgc3VmZml4ID0gd2lraXRleHQuc2xpY2UoTWF0aC5tYXgoMCwgY2F0X3BvaW50KSk7XG5cdFx0XHRcdHdpa2l0ZXh0ID1cblx0XHRcdFx0XHR3aWtpdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBjYXRfcG9pbnQpKSArXG5cdFx0XHRcdFx0KGNhdF9wb2ludCA+IDAgPyAnXFxuJyA6ICcnKSArXG5cdFx0XHRcdFx0bmV3Y2F0c3RyaW5nICtcblx0XHRcdFx0XHQob25DYXQgPyAnJyA6ICdcXG4nKTtcblx0XHRcdFx0d2lraXRleHQgKz0gc3VmZml4Lmxlbmd0aCA+IDAgJiYgc3VmZml4LnNsaWNlKDAsIDEpICE9PSAnXFxuJyA/IGBcXG4ke3N1ZmZpeH1gIDogc3VmZml4O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHdpa2l0ZXh0Lmxlbmd0aCA+IDAgJiYgd2lraXRleHQuc2xpY2UoLTEsIHdpa2l0ZXh0Lmxlbmd0aCAtIDEgKyAxKSAhPT0gJ1xcbicpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCArPSAnXFxuJztcblx0XHRcdFx0fVxuXHRcdFx0XHR3aWtpdGV4dCArPSAod2lraXRleHQubGVuZ3RoID4gMCA/ICdcXG4nIDogJycpICsgbmV3Y2F0c3RyaW5nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGtleUNoYW5nZSkge1xuXHRcdFx0XHRsZXQgayA9IGtleSB8fCAnJztcblx0XHRcdFx0aWYgKGsubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGsgPSBrLnNsaWNlKDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X2tleWNoYW5nZScsIHRvQWRkLCBrKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X2FkZGVkJywgdG9BZGQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKEhDLnVuY2F0X3JlZ2V4cCAmJiAhaXNfaGlkZGVuKSB7XG5cdFx0XHRcdGNvbnN0IHR4dCA9IHdpa2l0ZXh0LnJlcGxhY2UoSEMudW5jYXRfcmVnZXhwLCAnJyk7IC8vIFJlbW92ZSBcInVuY2F0XCIgdGVtcGxhdGVzXG5cdFx0XHRcdGlmICh0eHQubGVuZ3RoICE9PSB3aWtpdGV4dC5sZW5ndGgpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCA9IHR4dDtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVuY2F0X3JlbW92ZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0ZXJyb3I6IG51bGwsXG5cdFx0fTtcblx0fTtcblx0Ly8gVGhlIHJlYWwgSG90Q2F0IFVJXG5cdGNvbnN0IGV2dEtleXMgPSAoe2N0cmxLZXksIG1ldGFLZXksIHNoaWZ0S2V5fSkgPT4ge1xuXHRcdGxldCBjb2RlID0gMDtcblx0XHRpZiAoY3RybEtleSkge1xuXHRcdFx0Ly8gQWxsIG1vZGVybiBicm93c2Vyc1xuXHRcdFx0Ly8gQ3RybC1jbGljayBzZWVtcyB0byBiZSBvdmVybG9hZGVkIGluIEZGL01hYyAoaXQgb3BlbnMgYSBwb3AtdXAgbWVudSksIHNvIHRyZWF0IGNtZC1jbGlja1xuXHRcdFx0Ly8gYXMgYSBjdHJsLWNsaWNrLCB0b28uXG5cdFx0XHRpZiAoY3RybEtleSB8fCBtZXRhS2V5KSB7XG5cdFx0XHRcdGNvZGUgfHw9IDE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2hpZnRLZXkpIHtcblx0XHRcdFx0Y29kZSB8fD0gMjtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNvZGU7XG5cdH07XG5cdGNvbnN0IGV2dEtpbGwgPSAoZSkgPT4ge1xuXHRcdGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0bGV0IGNhdExpbmUgPSBudWxsOyAvLyB0cnVlIGlmIE1lZGlhV2lraSBzZXJ2ZXMgdGhlIG5ldyBVTC1MSSBET00gZm9yIGNhdGVnb3JpZXNcblx0bGV0IG9uVXBsb2FkID0gZmFsc2U7XG5cdGxldCBlZGl0b3JzID0gW107XG5cdGxldCBjb21taXRCdXR0b24gPSBudWxsO1xuXHRsZXQgY29tbWl0Rm9ybSA9IG51bGw7XG5cdGxldCBtdWx0aVNwYW4gPSBudWxsO1xuXHRsZXQgcGFnZVRleHQgPSBudWxsO1xuXHRsZXQgcGFnZVRpbWUgPSBudWxsO1xuXHRsZXQgcGFnZVdhdGNoZWQgPSBmYWxzZTtcblx0bGV0IHdhdGNoQ3JlYXRlID0gZmFsc2U7XG5cdGxldCB3YXRjaEVkaXQgPSBmYWxzZTtcblx0bGV0IG1pbm9yRWRpdHMgPSBmYWxzZTtcblx0bGV0IGVkaXRUb2tlbiA9IG51bGw7XG5cdGxldCBpc19ydGwgPSBmYWxzZTtcblx0bGV0IHNlcnZlclRpbWUgPSBudWxsO1xuXHRsZXQgbGFzdFJldklkID0gbnVsbDtcblx0bGV0IHBhZ2VUZXh0UmV2SWQgPSBudWxsO1xuXHRsZXQgY29uZmxpY3RpbmdVc2VyID0gbnVsbDtcblx0bGV0IG5ld0RPTSA9IGZhbHNlO1xuXHRjb25zdCBVTkNIQU5HRUQgPSAwO1xuXHRjb25zdCBPUEVOID0gMTsgLy8gT3BlbiwgYnV0IG5vIGlucHV0IHlldFxuXHRjb25zdCBDSEFOR0VfUEVORElORyA9IDI7IC8vIE9wZW4sIHNvbWUgaW5wdXQgbWFkZVxuXHRjb25zdCBDSEFOR0VEID0gMztcblx0Y29uc3QgREVMRVRFRCA9IDQ7XG5cdGNvbnN0IHNldFBhZ2UgPSAoZGF0YSkgPT4ge1xuXHRcdGxldCBzdGFydFRpbWUgPSBudWxsO1xuXHRcdGlmIChkYXRhICYmIGRhdGEucXVlcnkpIHtcblx0XHRcdGlmIChkYXRhLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGEucXVlcnkucGFnZXM7XG5cdFx0XHRcdGlmIChwYWdlKSB7XG5cdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zICYmIHBhZ2UucmV2aXNpb25zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdC8vIFJldmlzaW9ucyBhcmUgc29ydGVkIGJ5IHJldmlzaW9uIElELCBoZW5jZSBbMF0gaXMgdGhlIG9uZSB3ZSBhc2tlZCBmb3IsIGFuZCBwb3NzaWJseSB0aGVyZSdzIGEgWzFdIGlmIHdlJ3JlXG5cdFx0XHRcdFx0XHQvLyBub3Qgb24gdGhlIGxhdGVzdCByZXZpc2lvbiAoZWRpdCBjb25mbGljdHMgYW5kIHN1Y2gpLlxuXHRcdFx0XHRcdFx0cGFnZVRleHQgPSBwYWdlLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQ7XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0XHRcdHBhZ2VUaW1lID0gcGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5yZXZpc2lvbnNbMF0ucmV2aWQpIHtcblx0XHRcdFx0XHRcdFx0cGFnZVRleHRSZXZJZCA9IHBhZ2UucmV2aXNpb25zWzBdLnJldmlkO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0Y29uZmxpY3RpbmdVc2VyID0gcGFnZS5yZXZpc2lvbnNbMV0udXNlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFzdHJldmlkKSB7XG5cdFx0XHRcdFx0XHRsYXN0UmV2SWQgPSBwYWdlLmxhc3RyZXZpZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2Uuc3RhcnR0aW1lc3RhbXApIHtcblx0XHRcdFx0XHRcdHN0YXJ0VGltZSA9IHBhZ2Uuc3RhcnR0aW1lc3RhbXAucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cGFnZVdhdGNoZWQgPSB0eXBlb2YgcGFnZS53YXRjaGVkID09PSAnc3RyaW5nJztcblx0XHRcdFx0XHRpZiAoZGF0YS5xdWVyeS50b2tlbnMpIHtcblx0XHRcdFx0XHRcdGVkaXRUb2tlbiA9IGRhdGEucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFuZ2xpbmtzICYmICghZGF0YVsncXVlcnktY29udGludWUnXSB8fCAhZGF0YVsncXVlcnktY29udGludWUnXS5sYW5nbGlua3MpKSB7XG5cdFx0XHRcdFx0XHQvLyBXZSBoYXZlIGludGVybGFuZ3VhZ2UgbGlua3MsIGFuZCB3ZSBnb3QgdGhlbSBhbGwuXG5cdFx0XHRcdFx0XHRsZXQgcmUgPSAnJztcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZS5sYW5nbGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0cmUgKz1cblx0XHRcdFx0XHRcdFx0XHQoaSA+IDAgPyAnfCcgOiAnJykgKyBwYWdlLmxhbmdsaW5rc1tpXS5sYW5nLnJlcGxhY2UoLyhbJCgpKisuP1xcXFxeXSkvZywgU3RyaW5nLnJhd2BcXCQxYCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocmUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRpbnRlcmxhbmd1YWdlUkUgPSBuZXcgUmVnRXhwKGAoKF58XFxcXG5cXFxccj8pKFxcXFxbXFxcXFtcXFxccyooJHtyZX0pXFxcXHMqOlteXFxcXF1dK1xcXFxdXFxcXF1cXFxccyopKSskYCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBTaXRlaW5mb1xuXHRcdFx0aWYgKGRhdGEucXVlcnkuZ2VuZXJhbCkge1xuXHRcdFx0XHRpZiAoZGF0YS5xdWVyeS5nZW5lcmFsLnRpbWUgJiYgIXN0YXJ0VGltZSkge1xuXHRcdFx0XHRcdHN0YXJ0VGltZSA9IGRhdGEucXVlcnkuZ2VuZXJhbC50aW1lLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBSZXNvdXJjZUxvYWRlcidzIEpTUGFyc2VyIGRvZXNuJ3QgbGlrZSAuY2FzZSwgc28gb3ZlcnJpZGUgZXNsaW50LlxuXHRcdFx0XHRcdEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPSBkYXRhLnF1ZXJ5LmdlbmVyYWwuY2FzZSA9PT0gJ2ZpcnN0LWxldHRlcic7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNlcnZlclRpbWUgPSBzdGFydFRpbWU7XG5cdFx0XHQvLyBVc2VyaW5mb1xuXHRcdFx0aWYgKGRhdGEucXVlcnkudXNlcmluZm8gJiYgZGF0YS5xdWVyeS51c2VyaW5mby5vcHRpb25zKSB7XG5cdFx0XHRcdHdhdGNoQ3JlYXRlID0gIUhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCAmJiBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMud2F0Y2hjcmVhdGlvbnMgPT09ICcxJztcblx0XHRcdFx0d2F0Y2hFZGl0ID0gIUhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCAmJiBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMud2F0Y2hkZWZhdWx0ID09PSAnMSc7XG5cdFx0XHRcdG1pbm9yRWRpdHMgPSBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMubWlub3JkZWZhdWx0ID09PSAxO1xuXHRcdFx0XHQvLyBJZiB0aGUgdXNlciBoYXMgdGhlIFwiQWxsIGVkaXRzIGFyZSBtaW5vclwiIHByZWZlcmVuY2UgZW5hYmxlZCwgd2Ugc2hvdWxkIGhvbm9yIHRoYXRcblx0XHRcdFx0Ly8gZm9yIHNpbmdsZSBjYXRlZ29yeSBjaGFuZ2VzLCBubyBtYXR0ZXIgd2hhdCB0aGUgc2l0ZSBjb25maWd1cmF0aW9uIGlzLlxuXHRcdFx0XHRpZiAobWlub3JFZGl0cykge1xuXHRcdFx0XHRcdEhDLnNpbmdsZV9taW5vciA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGxldCBzYXZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXHRjb25zdCBpbml0aWF0ZUVkaXQgPSAoZG9FZGl0LCBmYWlsdXJlKSA9PiB7XG5cdFx0aWYgKHNhdmVJblByb2dyZXNzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNhdmVJblByb2dyZXNzID0gdHJ1ZTtcblx0XHRsZXQgb2xkQnV0dG9uU3RhdGU7XG5cdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0b2xkQnV0dG9uU3RhdGUgPSBjb21taXRCdXR0b24uZGlzYWJsZWQ7XG5cdFx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBmYWlsID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRcdHNhdmVJblByb2dyZXNzID0gZmFsc2U7XG5cdFx0XHRpZiAoY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRcdGNvbW1pdEJ1dHRvbi5kaXNhYmxlZCA9IG9sZEJ1dHRvblN0YXRlO1xuXHRcdFx0fVxuXHRcdFx0ZmFpbHVyZS5hcHBseSh0aGlzLCBhcmdzKTtcblx0XHR9O1xuXHRcdC8vIE11c3QgdXNlIEFqYXggaGVyZSB0byBnZXQgdGhlIHVzZXIgb3B0aW9ucyBhbmQgdGhlIGVkaXQgdG9rZW4uXG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRyYXdjb250aW51ZTogJycsXG5cdFx0XHR0aXRsZXM6IGNvbmYud2dQYWdlTmFtZSxcblx0XHRcdHByb3A6IFsnaW5mbycsICdyZXZpc2lvbnMnLCAnbGFuZ2xpbmtzJ10sXG5cdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCcsICdpZHMnLCAndXNlciddLFxuXHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0cnZsaW1pdDogJzInLFxuXHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRydnN0YXJ0aWQ6IGNvbmYud2dDdXJSZXZpc2lvbklkLFxuXHRcdFx0bGxsaW1pdDogJzUwMCcsXG5cdFx0XHRtZXRhOiBbJ3NpdGVpbmZvJywgJ3VzZXJpbmZvJywgJ3Rva2VucyddLFxuXHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0dWlwcm9wOiBbJ29wdGlvbnMnXSxcblx0XHR9O1xuXHRcdGFwaS5nZXQocGFyYW1zKVxuXHRcdFx0LmRvbmUoKGRhdGEpID0+IHtcblx0XHRcdFx0c2V0UGFnZShkYXRhKTtcblx0XHRcdFx0ZG9FZGl0KGZhaWwpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKCh7c3RhdHVzLCBzdGF0dXNUZXh0fSkgPT4ge1xuXHRcdFx0XHRmYWlsKGAke3N0YXR1c30gJHtzdGF0dXNUZXh0fWApO1xuXHRcdFx0fSk7XG5cdH07XG5cdGNvbnN0IG11bHRpQ2hhbmdlTXNnID0gKGNvdW50KSA9PiB7XG5cdFx0cmV0dXJuIGdldE1lc3NhZ2UoJ21lc3NhZ2VzLW11bHRpX2NoYW5nZScsIFN0cmluZyhjb3VudCkpO1xuXHR9O1xuXHRjb25zdCBjdXJyZW50VGltZXN0YW1wID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdFx0bGV0IHRzID0gU3RyaW5nKG5vdy5nZXRVVENGdWxsWWVhcigpKTtcblx0XHRjb25zdCB0d28gPSAocykgPT4ge1xuXHRcdFx0cmV0dXJuIHMuc2xpY2UoLTIpO1xuXHRcdH07XG5cdFx0dHMgKz1cblx0XHRcdHR3byhgMCR7bm93LmdldFVUQ01vbnRoKCkgKyAxfWApICtcblx0XHRcdHR3byhgMCR7bm93LmdldFVUQ0RhdGUoKX1gKSArXG5cdFx0XHR0d28oYDAwJHtub3cuZ2V0VVRDSG91cnMoKX1gKSArXG5cdFx0XHR0d28oYDAwJHtub3cuZ2V0VVRDTWludXRlcygpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENTZWNvbmRzKCl9YCk7XG5cdFx0cmV0dXJuIHRzO1xuXHR9O1xuXHRjb25zdCBwZXJmb3JtQ2hhbmdlcyA9IChmYWlsdXJlLCBzaW5nbGVFZGl0b3IpID0+IHtcblx0XHRpZiAocGFnZVRleHQgPT09IG51bGwpIHtcblx0XHRcdGZhaWx1cmUoZ2V0TWVzc2FnZSgnbWVzc2FnZXMtbXVsdGlfZXJyb3InKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIENyZWF0ZSBhIGZvcm0gYW5kIHN1Ym1pdCBpdC4gV2UgZG9uJ3QgdXNlIHRoZSBlZGl0IEFQSSAoYXBpLnBocD9hY3Rpb249ZWRpdCkgYmVjYXVzZVxuXHRcdC8vIChhKSBzZW5zaWJseSByZXBvcnRpbmcgYmFjayBlcnJvcnMgbGlrZSBlZGl0IGNvbmZsaWN0cyBpcyBhbHdheXMgYSBoYXNzbGUsIGFuZFxuXHRcdC8vIChiKSB3ZSB3YW50IHRvIHNob3cgYSBkaWZmIGZvciBtdWx0aS1lZGl0cyBhbnl3YXksIGFuZFxuXHRcdC8vIChjKSB3ZSB3YW50IHRvIHRyaWdnZXIgb25zdWJtaXQgZXZlbnRzLCBhbGxvd2luZyB1c2VyIGNvZGUgdG8gaW50ZXJjZXB0IHRoZSBlZGl0LlxuXHRcdC8vIFVzaW5nIHRoZSBmb3JtLCB3ZSBjYW4gZG8gKGIpIGFuZCAoYyksIGFuZCB3ZSBnZXQgKGEpIGZvciBmcmVlLiBBbmQsIG9mIGNvdXJzZSwgdXNpbmcgdGhlIGZvcm1cblx0XHQvLyBhdXRvbWF0aWNhbGx5IHJlbG9hZHMgdGhlIHBhZ2Ugd2l0aCB0aGUgdXBkYXRlZCBjYXRlZ29yaWVzIG9uIGEgc3VjY2Vzc2Z1bCBzdWJtaXQsIHdoaWNoXG5cdFx0Ly8gd2Ugd291bGQgaGF2ZSB0byBkbyBleHBsaWNpdGx5IGlmIHdlIHVzZWQgdGhlIGVkaXQgQVBJLlxuXHRcdGxldCBhY3Rpb247XG5cdFx0Ly8gTm9ybWFsbHksIHdlIGRvbid0IGhhdmUgdG8gY2FyZSBhYm91dCBlZGl0IGNvbmZsaWN0cy4gSWYgc29tZSBvdGhlciB1c2VyIGVkaXRlZCB0aGUgcGFnZSBpbiB0aGUgbWVhbnRpbWUsIHRoZVxuXHRcdC8vIHNlcnZlciB3aWxsIHRha2UgY2FyZSBvZiBpdCBhbmQgbWVyZ2UgdGhlIGVkaXQgYXV0b21hdGljYWxseSBvciBwcmVzZW50IGFuIGVkaXQgY29uZmxpY3Qgc2NyZWVuLiBIb3dldmVyLCB0aGVcblx0XHQvLyBzZXJ2ZXIgc3VwcHJlc3NlcyBlZGl0IGNvbmZsaWN0cyB3aXRoIG9uZXNlbGYuIEhlbmNlLCBpZiB3ZSBoYXZlIGEgY29uZmxpY3QsIGFuZCB0aGUgY29uZmxpY3RpbmcgdXNlciBpcyB0aGVcblx0XHQvLyBjdXJyZW50IHVzZXIsIHRoZW4gd2Ugc2V0IHRoZSBcIm9sZGlkXCIgdmFsdWUgYW5kIHN3aXRjaCB0byBkaWZmLCB3aGljaCBnaXZlcyB0aGUgXCJ5b3UgYXJlIGVkaXRpbmcgYW4gb2xkIHZlcnNpb247XG5cdFx0Ly8gaWYgeW91IHNhdmUsIGFueSBtb3JlIHJlY2VudCBjaGFuZ2VzIHdpbGwgYmUgbG9zdFwiIHNjcmVlbi5cblx0XHRjb25zdCBzZWxmRWRpdENvbmZsaWN0ID1cblx0XHRcdCgobGFzdFJldklkICE9PSBudWxsICYmIGxhc3RSZXZJZCAhPT0gY29uZi53Z0N1clJldmlzaW9uSWQpIHx8XG5cdFx0XHRcdChwYWdlVGV4dFJldklkICE9PSBudWxsICYmIHBhZ2VUZXh0UmV2SWQgIT09IGNvbmYud2dDdXJSZXZpc2lvbklkKSkgJiZcblx0XHRcdGNvbmZsaWN0aW5nVXNlciAmJlxuXHRcdFx0Y29uZmxpY3RpbmdVc2VyID09PSBjb25mLndnVXNlck5hbWU7XG5cdFx0aWYgKHNpbmdsZUVkaXRvciAmJiAhc2luZ2xlRWRpdG9yLm5vQ29tbWl0ICYmICFIQy5ub19hdXRvY29tbWl0ICYmIGVkaXRUb2tlbiAmJiAhc2VsZkVkaXRDb25mbGljdCkge1xuXHRcdFx0Ly8gSWYgd2UgZG8gaGF2ZSBhbiBlZGl0IGNvbmZsaWN0LCBidXQgbm90IHdpdGggb3Vyc2VsZiwgdGhhdCdzIG5vIHJlYXNvbiBub3QgdG8gYXR0ZW1wdCB0byBzYXZlOiB0aGUgc2VydmVyIHNpZGUgbWF5IGFjdHVhbGx5IGJlIGFibGUgdG9cblx0XHRcdC8vIG1lcmdlIHRoZSBjaGFuZ2VzLiBXZSBqdXN0IG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgd2UgZG8gcHJlc2VudCBhIGRpZmYgdmlldyBpZiBpdCdzIGEgc2VsZiBlZGl0IGNvbmZsaWN0LlxuXHRcdFx0Y29tbWl0Rm9ybS53cEVkaXRUb2tlbi52YWx1ZSA9IGVkaXRUb2tlbjtcblx0XHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0ud3BEaWZmO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BTYXZlJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0ud3BTYXZlO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCByZXN1bHQgPSB7XG5cdFx0XHR0ZXh0OiBwYWdlVGV4dCxcblx0XHR9O1xuXHRcdGNvbnN0IGNoYW5nZWQgPSBbXTtcblx0XHRjb25zdCBhZGRlZCA9IFtdO1xuXHRcdGNvbnN0IGRlbGV0ZWQgPSBbXTtcblx0XHRjb25zdCB0b0VkaXQgPSBzaW5nbGVFZGl0b3IgPyBbc2luZ2xlRWRpdG9yXSA6IGVkaXRvcnM7XG5cdFx0bGV0IGVkaXQ7XG5cdFx0bGV0IGk7XG5cdFx0bGV0IGVycm9yID0gbnVsbDtcblx0XHRsZXQgY2hhbmdlcyA9IDA7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvRWRpdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZWRpdCA9IHRvRWRpdFtpXTtcblx0XHRcdGlmIChlZGl0LnN0YXRlID09PSBDSEFOR0VEKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShcblx0XHRcdFx0XHRyZXN1bHQudGV4dCxcblx0XHRcdFx0XHRlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50Q2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50S2V5LFxuXHRcdFx0XHRcdGVkaXQuY3VycmVudEhpZGRlblxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoIXJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRcdGNoYW5nZXMrKztcblx0XHRcdFx0XHRpZiAoIWVkaXQub3JpZ2luYWxDYXRlZ29yeSB8fCBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRhZGRlZFthZGRlZC5sZW5ndGhdID0gZWRpdC5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNoYW5nZWRbY2hhbmdlZC5sZW5ndGhdID0ge1xuXHRcdFx0XHRcdFx0XHRmcm9tOiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0XHRcdHRvOiBlZGl0LmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGVkaXQuc3RhdGUgPT09IERFTEVURUQgJiYgZWRpdC5vcmlnaW5hbENhdGVnb3J5ICYmIGVkaXQub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShyZXN1bHQudGV4dCwgZWRpdC5vcmlnaW5hbENhdGVnb3J5LCBudWxsLCBudWxsLCBmYWxzZSk7XG5cdFx0XHRcdGlmICghcmVzdWx0LmVycm9yKSB7XG5cdFx0XHRcdFx0Y2hhbmdlcysrO1xuXHRcdFx0XHRcdGRlbGV0ZWRbZGVsZXRlZC5sZW5ndGhdID0gZWRpdC5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChlcnJvciAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gRG8gbm90IGNvbW1pdCBpZiB0aGVyZSB3ZXJlIGVycm9yc1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybS53cFNhdmU7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cERpZmYnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gRmlsbCBpbiB0aGUgZm9ybSBhbmQgc3VibWl0IGl0XG5cdFx0Y29tbWl0Rm9ybS53cE1pbm9yZWRpdC5jaGVja2VkID0gbWlub3JFZGl0cztcblx0XHRjb21taXRGb3JtLndwV2F0Y2h0aGlzLmNoZWNrZWQgPSAoIWNvbmYud2dBcnRpY2xlSWQgJiYgd2F0Y2hDcmVhdGUpIHx8IHdhdGNoRWRpdCB8fCBwYWdlV2F0Y2hlZDtcblx0XHRpZiAoY29uZi53Z0FydGljbGVJZCB8fCAhIXNpbmdsZUVkaXRvcikge1xuXHRcdFx0Ly8gUHJlcGFyZSBjaGFuZ2UtdGFnIHNhdmVcblx0XHRcdGlmIChhY3Rpb24gJiYgYWN0aW9uLnZhbHVlID09PSAnd3BTYXZlJykge1xuXHRcdFx0XHRpZiAoSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybS53cENoYW5nZVRhZ3MudmFsdWUgPSBIQy5jaGFuZ2VUYWc7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbW1pdEZvcm0ud3BBdXRvU3VtbWFyeS52YWx1ZSA9IEhDLmNoYW5nZVRhZztcblx0XHRcdH1cblx0XHRcdGlmIChjaGFuZ2VzID09PSAxKSB7XG5cdFx0XHRcdGlmIChyZXN1bHQuc3VtbWFyeSAmJiByZXN1bHQuc3VtbWFyeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybS53cFN1bW1hcnkudmFsdWUgPVxuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpICtcblx0XHRcdFx0XHRcdHJlc3VsdC5zdW1tYXJ5LmpvaW4oZ2V0TWVzc2FnZSgnbWVzc2FnZXMtc2VwYXJhdG9yJykpICtcblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbW1pdEZvcm0ud3BNaW5vcmVkaXQuY2hlY2tlZCA9IEhDLnNpbmdsZV9taW5vciB8fCBtaW5vckVkaXRzO1xuXHRcdFx0fSBlbHNlIGlmIChjaGFuZ2VzKSB7XG5cdFx0XHRcdGxldCBzdW1tYXJ5ID0gW107XG5cdFx0XHRcdGNvbnN0IHNob3J0U3VtbWFyeSA9IFtdO1xuXHRcdFx0XHQvLyBEZWxldGVkXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkZWxldGVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBg4oiSJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBkZWxldGVkW2ldKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkZWxldGVkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDiiJIke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGRlbGV0ZWRbMF0pfWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZGVsZXRlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID0gYOKIkiAke211bHRpQ2hhbmdlTXNnKGRlbGV0ZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFkZGVkXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBhZGRlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gYCske2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGFkZGVkW2ldKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChhZGRlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBgKyR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgYWRkZWRbMF0pfWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYWRkZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGArICR7bXVsdGlDaGFuZ2VNc2coYWRkZWQubGVuZ3RoKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIENoYW5nZWRcblx0XHRcdFx0Y29uc3QgYXJyb3cgPSBpc19ydGwgPyAnXFx1MjE5MCcgOiAnXFx1MjE5Mic7IC8vIGxlZnQgYW5kIHJpZ2h0IGFycm93cy4gRG9uJ3QgdXNlIOKGkCBhbmQg4oaSIGluIHRoZSBjb2RlLlxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2hhbmdlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChjaGFuZ2VkW2ldLmZyb20gPT09IGNoYW5nZWRbaV0udG8pIHtcblx0XHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gYMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkW2ldLmZyb20pfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID1cblx0XHRcdFx0XHRcdFx0YMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkW2ldLmZyb20pfSR7YXJyb3d9JHtnZXRNZXNzYWdlKFxuXHRcdFx0XHRcdFx0XHRcdCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLFxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZWRbaV0udG9cblx0XHRcdFx0XHRcdFx0KX1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2hhbmdlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRpZiAoY2hhbmdlZFswXS5mcm9tID09PSBjaGFuZ2VkWzBdLnRvKSB7XG5cdFx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPVxuXHRcdFx0XHRcdFx0XHRgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZWRbMF0uZnJvbSl9YDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID1cblx0XHRcdFx0XHRcdFx0YMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkWzBdLmZyb20pfSR7YXJyb3d9JHtnZXRNZXNzYWdlKFxuXHRcdFx0XHRcdFx0XHRcdCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLFxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZWRbMF0udG9cblx0XHRcdFx0XHRcdFx0KX1gO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChjaGFuZ2VkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBgwrEgJHttdWx0aUNoYW5nZU1zZyhjaGFuZ2VkLmxlbmd0aCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3VtbWFyeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IHN1bW1hcnkuam9pbihnZXRNZXNzYWdlKCdtZXNzYWdlcy1zZXBhcmF0b3InKSk7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0c3VtbWFyeS5sZW5ndGggPlxuXHRcdFx0XHRcdFx0MjAwIC1cblx0XHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpLmxlbmd0aCAtXG5cdFx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpLmxlbmd0aFxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSA9IHNob3J0U3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybS53cFN1bW1hcnkudmFsdWUgPVxuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpICtcblx0XHRcdFx0XHRcdHN1bW1hcnkgK1xuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y29tbWl0Rm9ybS53cFRleHRib3gxLnZhbHVlID0gcmVzdWx0LnRleHQ7XG5cdFx0Y29tbWl0Rm9ybS53cFN0YXJ0dGltZS52YWx1ZSA9IHNlcnZlclRpbWUgfHwgY3VycmVudFRpbWVzdGFtcCgpO1xuXHRcdGNvbW1pdEZvcm0ud3BFZGl0dGltZS52YWx1ZSA9IHBhZ2VUaW1lIHx8IGNvbW1pdEZvcm0ud3BTdGFydHRpbWUudmFsdWU7XG5cdFx0aWYgKHNlbGZFZGl0Q29uZmxpY3QpIHtcblx0XHRcdGNvbW1pdEZvcm0ub2xkaWQudmFsdWUgPSBTdHJpbmcocGFnZVRleHRSZXZJZCB8fCBjb25mLndnQ3VyUmV2aXNpb25JZCk7XG5cdFx0fVxuXHRcdC8vIFN1Ym1pdCB0aGUgZm9ybSBpbiBhIHdheSB0aGF0IHRyaWdnZXJzIG9uc3VibWl0IGV2ZW50czogY29tbWl0Rm9ybS5zdWJtaXQoKSBkb2Vzbid0LlxuXHRcdGNvbW1pdEZvcm0uaGNDb21taXQuY2xpY2soKTtcblx0fTtcblx0Y29uc3QgcmVzb2x2ZU9uZSA9IChwYWdlLCB0b1Jlc29sdmUpID0+IHtcblx0XHRjb25zdCBjYXRzID0gcGFnZS5jYXRlZ29yaWVzO1xuXHRcdGNvbnN0IHtsaW5rc30gPSBwYWdlO1xuXHRcdGxldCBpc19kYWIgPSBmYWxzZTsgLy8gSGFyZCByZWRpcmVjdD9cblx0XHRsZXQgaXNfcmVkaXIgPSB0eXBlb2YgcGFnZS5yZWRpcmVjdCA9PT0gJ3N0cmluZyc7XG5cdFx0bGV0IGk7XG5cdFx0Y29uc3QgaXNfaGlkZGVuID0gcGFnZS5jYXRlZ29yeWluZm8gJiYgdHlwZW9mIHBhZ2UuY2F0ZWdvcnlpbmZvLmhpZGRlbiA9PT0gJ3N0cmluZyc7XG5cdFx0Y29uc3QgaXNfbWlzc2luZyA9IHR5cGVvZiBwYWdlLm1pc3NpbmcgPT09ICdzdHJpbmcnO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChpICYmIHRvUmVzb2x2ZVtpXS5kYWJJbnB1dENsZWFuZWQgIT09IHBhZ2UudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgcGFnZS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBOb3RlOiB0aGUgc2VydmVyIHJldHVybnMgaW4gcGFnZSBhbiBORkMgbm9ybWFsaXplZCBVbmljb2RlIHRpdGxlLiBJZiBvdXIgaW5wdXQgd2FzIG5vdCBORkMgbm9ybWFsaXplZCwgd2UgbWF5IG5vdCBmaW5kXG5cdFx0XHQvLyBhbnkgZW50cnkgaGVyZS4gSWYgd2UgaGF2ZSBvbmx5IG9uZSBlZGl0b3IgdG8gcmVzb2x2ZSAodGhlIG1vc3QgY29tbW9uIGNhc2UsIEkgcHJlc3VtZSksIHdlIG1heSBzaW1wbHkgc2tpcCB0aGUgY2hlY2suXG5cdFx0XHR0b1Jlc29sdmVbaV0uY3VycmVudEhpZGRlbiA9IGlzX2hpZGRlbjtcblx0XHRcdHRvUmVzb2x2ZVtpXS5pbnB1dEV4aXN0cyA9ICFpc19taXNzaW5nO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmljb24uc3JjID0gaXNfbWlzc2luZyA/IEhDLmV4aXN0c05vIDogSEMuZXhpc3RzWWVzO1xuXHRcdH1cblx0XHRpZiAoaXNfbWlzc2luZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIWlzX3JlZGlyICYmIGNhdHMgJiYgKGdldE1lc3NhZ2UoJ2Rpc2FtYmlnX2NhdGVnb3J5JykgfHwgZ2V0TWVzc2FnZSgncmVkaXJfY2F0ZWdvcnknKSkpIHtcblx0XHRcdGZvciAoY29uc3QgY2F0XyBvZiBjYXRzKSB7XG5cdFx0XHRcdGxldCBjYXQgPSBjYXRfLnRpdGxlO1xuXHRcdFx0XHQvLyBTdHJpcCBuYW1lc3BhY2UgcHJlZml4XG5cdFx0XHRcdGlmIChjYXQpIHtcblx0XHRcdFx0XHRjYXQgPSBjYXQuc2xpY2UoTWF0aC5tYXgoMCwgY2F0LmluZGV4T2YoJzonKSArIDEpKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHRcdFx0aWYgKGNhdCA9PT0gZ2V0TWVzc2FnZSgnZGlzYW1iaWdfY2F0ZWdvcnknKSkge1xuXHRcdFx0XHRcdFx0aXNfZGFiID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY2F0ID09PSBnZXRNZXNzYWdlKCdyZWRpcl9jYXRlZ29yeScpKSB7XG5cdFx0XHRcdFx0XHRpc19yZWRpciA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFpc19yZWRpciAmJiAhaXNfZGFiKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghbGlua3MgfHwgbGlua3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHRpdGxlcyA9IFtdO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQvLyBDYXRlZ29yeSBuYW1lc3BhY2UgLS0gYWx3YXlzIHRydWUgc2luY2Ugd2UgYXNrIG9ubHkgZm9yIHRoZSBjYXRlZ29yeSBsaW5rc1xuXHRcdFx0XHRsaW5rc1tpXS5ucyA9PT0gMTQgJiZcblx0XHRcdFx0Ly8gTmFtZSBub3QgZW1wdHlcblx0XHRcdFx0bGlua3NbaV0udGl0bGUgJiZcblx0XHRcdFx0bGlua3NbaV0udGl0bGUubGVuZ3RoID4gMFxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIEludGVybmFsIGxpbmsgdG8gZXhpc3RpbmcgdGhpbmd5LiBFeHRyYWN0IHRoZSBwYWdlIG5hbWUgYW5kIHJlbW92ZSB0aGUgbmFtZXNwYWNlLlxuXHRcdFx0XHRsZXQgbWF0Y2ggPSBsaW5rc1tpXS50aXRsZTtcblx0XHRcdFx0bWF0Y2ggPSBtYXRjaC5zbGljZShNYXRoLm1heCgwLCBtYXRjaC5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdC8vIEV4Y2x1ZGUgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllcy5cblx0XHRcdFx0aWYgKCFIQy5ibGFja2xpc3QgfHwgIUhDLmJsYWNrbGlzdC50ZXN0KG1hdGNoKSkge1xuXHRcdFx0XHRcdHRpdGxlc1t0aXRsZXMubGVuZ3RoXSA9IG1hdGNoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChpICYmIHRvUmVzb2x2ZVtpXS5kYWJJbnB1dENsZWFuZWQgIT09IHBhZ2UudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgcGFnZS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0b1Jlc29sdmVbaV0uaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBNaWdodCBhY3R1YWxseSBiZSB3cm9uZyBpZiBpdCdzIGEgcmVkaXJlY3QgcG9pbnRpbmcgdG8gYSBub24tZXhpc3RpbmcgY2F0ZWdvcnlcblx0XHRcdHRvUmVzb2x2ZVtpXS5pY29uLnNyYyA9IEhDLmV4aXN0c1llcztcblx0XHRcdGlmICh0aXRsZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHR0b1Jlc29sdmVbaV0uZGFiID0gdGl0bGVzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9SZXNvbHZlW2ldLnRleHQudmFsdWUgPVxuXHRcdFx0XHRcdHRpdGxlc1swXSArICh0b1Jlc29sdmVbaV0uY3VycmVudEtleSA9PT0gbnVsbCA/ICcnIDogYHwke3RvUmVzb2x2ZVtpXS5jdXJyZW50S2V5fWApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVzb2x2ZVJlZGlyZWN0cyA9ICh0b1Jlc29sdmUsIHBhcmFtcykgPT4ge1xuXHRcdGlmICghcGFyYW1zIHx8ICFwYXJhbXMucXVlcnkgfHwgIXBhcmFtcy5xdWVyeS5wYWdlcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IHAgaW4gcGFyYW1zLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocGFyYW1zLnF1ZXJ5LnBhZ2VzLCBwKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJlc29sdmVPbmUocGFyYW1zLnF1ZXJ5LnBhZ2VzW3BdLCB0b1Jlc29sdmUpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVzb2x2ZU11bHRpID0gKHRvUmVzb2x2ZSwgY2FsbGJhY2spID0+IHtcblx0XHRsZXQgaTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0b1Jlc29sdmVbaV0uZGFiID0gbnVsbDtcblx0XHRcdHRvUmVzb2x2ZVtpXS5kYWJJbnB1dCA9IHRvUmVzb2x2ZVtpXS5sYXN0SW5wdXQ7XG5cdFx0fVxuXHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdHByb3A6ICdpbmZvfGxpbmtzfGNhdGVnb3JpZXN8Y2F0ZWdvcnlpbmZvJyxcblx0XHRcdHBsbmFtZXNwYWNlOiAnMTQnLFxuXHRcdFx0cGxsaW1pdDogdG9SZXNvbHZlLmxlbmd0aCAqIDEwLFxuXHRcdFx0Y2xsaW1pdDogdG9SZXNvbHZlLmxlbmd0aCAqIDEwLFxuXHRcdH07XG5cdFx0Y29uc3QgdGl0bGVzID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IHYgPSB0b1Jlc29sdmVbaV0uZGFiSW5wdXQ7XG5cdFx0XHR2ID0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmRhYklucHV0Q2xlYW5lZCA9IHY7XG5cdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSBgQ2F0ZWdvcnk6JHt2fWA7XG5cdFx0fVxuXHRcdHBhcmFtcy50aXRsZXMgPSB0aXRsZXMuam9pbignfCcpO1xuXHRcdGFwaS5nZXQocGFyYW1zKVxuXHRcdFx0LmRvbmUoKGpzb24pID0+IHtcblx0XHRcdFx0cmVzb2x2ZVJlZGlyZWN0cyh0b1Jlc29sdmUsIGpzb24pO1xuXHRcdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChyZXEpID0+IHtcblx0XHRcdFx0aWYgKCFyZXEpIHtcblx0XHRcdFx0XHRub1N1Z2dlc3Rpb25zID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0fSk7XG5cdH07XG5cdGNvbnN0IG1ha2VBY3RpdmUgPSAod2hpY2gpID0+IHtcblx0XHRpZiAod2hpY2guaXNfYWN0aXZlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0b3IgIT09IHdoaWNoKSB7XG5cdFx0XHRcdGVkaXRvci5pbmFjdGl2YXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWNoLmlzX2FjdGl2ZSA9IHRydWU7XG5cdFx0aWYgKHdoaWNoLmRhYikge1xuXHRcdFx0c2hvd0RhYih3aGljaCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIENoZWNrIGZvciBwcm9ncmFtbWF0aWMgdmFsdWUgY2hhbmdlcy5cblx0XHRcdGNvbnN0IGV4cGVjdGVkSW5wdXQgPSB3aGljaC5sYXN0UmVhbElucHV0IHx8IHdoaWNoLmxhc3RJbnB1dCB8fCAnJztcblx0XHRcdGNvbnN0IGFjdHVhbFZhbHVlID0gd2hpY2gudGV4dC52YWx1ZSB8fCAnJztcblx0XHRcdGlmIChcblx0XHRcdFx0KGV4cGVjdGVkSW5wdXQubGVuZ3RoID09PSAwICYmIGFjdHVhbFZhbHVlLmxlbmd0aCA+IDApIHx8XG5cdFx0XHRcdChleHBlY3RlZElucHV0Lmxlbmd0aCA+IDAgJiYgYWN0dWFsVmFsdWUuaW5kZXhPZihleHBlY3RlZElucHV0KSlcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBTb21laG93IHRoZSBmaWVsZCdzIHZhbHVlIGFwcGVhcnMgdG8gaGF2ZSBjaGFuZ2VkLCBhbmQgd2hpY2gubGFzdFNlbGVjdGlvbiB0aGVyZWZvcmUgaXMgbm8gbG9uZ2VyIHZhbGlkLiBUcnkgdG8gc2V0IHRoZVxuXHRcdFx0XHQvLyBjdXJzb3IgYXQgdGhlIGVuZCBvZiB0aGUgY2F0ZWdvcnksIGFuZCBkbyBub3QgZGlzcGxheSB0aGUgb2xkIHN1Z2dlc3Rpb24gbGlzdC5cblx0XHRcdFx0d2hpY2guc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IHYgPSBhY3R1YWxWYWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRbd2hpY2gubGFzdElucHV0XSA9IHY7XG5cdFx0XHRcdHdoaWNoLmxhc3RSZWFsSW5wdXQgPSB3aGljaC5sYXN0SW5wdXQ7XG5cdFx0XHRcdGlmICh2Lmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRbLCB3aGljaC5jdXJyZW50S2V5XSA9IHY7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2hpY2gubGFzdFNlbGVjdGlvbiAmJj0ge1xuXHRcdFx0XHRcdHN0YXJ0OiB2WzBdLmxlbmd0aCxcblx0XHRcdFx0XHRlbmQ6IHZbMF0ubGVuZ3RoLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdoaWNoLnNob3dzTGlzdCkge1xuXHRcdFx0XHR3aGljaC5kaXNwbGF5TGlzdCgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdoaWNoLmxhc3RTZWxlY3Rpb24pIHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0d2hpY2guc2V0U2VsZWN0aW9uKHdoaWNoLmxhc3RTZWxlY3Rpb24uc3RhcnQsIHdoaWNoLmxhc3RTZWxlY3Rpb24uZW5kKTtcblx0XHRcdFx0fSwgMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBzaG93RGFiID0gKHdoaWNoKSA9PiB7XG5cdFx0aWYgKHdoaWNoLmlzX2FjdGl2ZSkge1xuXHRcdFx0d2hpY2guc2hvd1N1Z2dlc3Rpb25zKHdoaWNoLmRhYiwgZmFsc2UsIG51bGwsIG51bGwpOyAvLyBkbyBhdXRvY29tcGxldGlvbiwgbm8ga2V5LCBubyBlbmdpbmUgc2VsZWN0b3Jcblx0XHRcdHdoaWNoLmRhYiA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1ha2VBY3RpdmUod2hpY2gpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgbXVsdGlTdWJtaXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9SZXNvbHZlID0gW107XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvci5zdGF0ZSA9PT0gQ0hBTkdFX1BFTkRJTkcgfHwgZWRpdG9yLnN0YXRlID09PSBPUEVOKSB7XG5cdFx0XHRcdHRvUmVzb2x2ZVt0b1Jlc29sdmUubGVuZ3RoXSA9IGVkaXRvcjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRvUmVzb2x2ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmVzb2x2ZU11bHRpKHRvUmVzb2x2ZSwgKHJlc29sdmVkKSA9PiB7XG5cdFx0XHRsZXQgZmlyc3REYWIgPSBudWxsO1xuXHRcdFx0bGV0IGRvbnRDaGFuZ2UgPSBmYWxzZTtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiByZXNvbHZlZCkge1xuXHRcdFx0XHRpZiAoZWxlbWVudC5sYXN0SW5wdXQgPT09IGVsZW1lbnQuZGFiSW5wdXQpIHtcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5kYWIpIHtcblx0XHRcdFx0XHRcdGZpcnN0RGFiIHx8PSBlbGVtZW50O1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudC5hY2NlcHRDaGVjayh0cnVlKSkge1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jb21taXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gV2UgZGlkbid0IGRpc2FibGUgYWxsIHRoZSBvcGVuIGVkaXRvcnMsIGJ1dCB3ZSBkaWQgYXN5bmNocm9ub3VzIGNhbGxzLiBJdCBpc1xuXHRcdFx0XHRcdC8vIHRoZW9yZXRpY2FsbHkgcG9zc2libGUgdGhhdCB0aGUgdXNlciBjaGFuZ2VkIHNvbWV0aGluZy4uLlxuXHRcdFx0XHRcdGRvbnRDaGFuZ2UgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZmlyc3REYWIpIHtcblx0XHRcdFx0c2hvd0RhYihmaXJzdERhYik7XG5cdFx0XHR9IGVsc2UgaWYgKCFkb250Q2hhbmdlKSB7XG5cdFx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBzZXRNdWx0aUlucHV0ID0gKCkgPT4ge1xuXHRcdGlmIChjb21taXRCdXR0b24gfHwgb25VcGxvYWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29tbWl0QnV0dG9uID0gbWFrZSgnaW5wdXQnKTtcblx0XHRjb21taXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuXHRcdGNvbW1pdEJ1dHRvbi52YWx1ZSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNvbW1pdCcpO1xuXHRcdGNvbW1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG11bHRpU3VibWl0KTtcblx0XHRpZiAobXVsdGlTcGFuKSB7XG5cdFx0XHRtdWx0aVNwYW4ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29tbWl0QnV0dG9uLCBtdWx0aVNwYW4pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYXRMaW5lLmFwcGVuZChjb21taXRCdXR0b24pO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgY2hlY2tNdWx0aUlucHV0ID0gKCkgPT4ge1xuXHRcdGlmICghY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBoYXNDaGFuZ2VzID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdGhhc0NoYW5nZXMgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gIWhhc0NoYW5nZXM7XG5cdH07XG5cdGNvbnN0IHN1Z2dlc3Rpb25FbmdpbmVzID0ge1xuXHRcdG9wZW5zZWFyY2g6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPW9wZW5zZWFyY2gmbmFtZXNwYWNlPTE0JmxpbWl0PTMwJnNlYXJjaD1DYXRlZ29yeTokMWAsXG5cdFx0XHQvLyAkMSA9IHNlYXJjaCB0ZXJtXG5cdFx0XHQvLyBGdW5jdGlvbiB0byBjb252ZXJ0IHJlc3VsdCBvZiB1cmkgaW50byBhbiBhcnJheSBvZiBjYXRlZ29yeSBuYW1lc1xuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0LCBxdWVyeUtleSkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBxdWVyeVJlc3VsdFswXS5zbGljZShNYXRoLm1heCgwLCBxdWVyeVJlc3VsdFswXS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0Y29uc3QgWywgdGl0bGVzXSA9IHF1ZXJ5UmVzdWx0O1xuXHRcdFx0XHRcdGxldCBleGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0XHRjYXRfcHJlZml4IHx8PSBuZXcgUmVnRXhwKGBeKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGNhdF9wcmVmaXgubGFzdEluZGV4ID0gMDtcblx0XHRcdFx0XHRcdGNvbnN0IG0gPSBjYXRfcHJlZml4LmV4ZWModGl0bGVzW2ldKTtcblx0XHRcdFx0XHRcdGlmIChtICYmIG0ubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0uc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLmluZGV4T2YoJzonKSArIDEpKTsgLy8gcm0gbmFtZXNwYWNlXG5cdFx0XHRcdFx0XHRcdGlmIChrZXkgPT09IHRpdGxlc1tpXSkge1xuXHRcdFx0XHRcdFx0XHRcdGV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7IC8vIE5vcGUsIGl0J3Mgbm90IGEgY2F0ZWdvcnkgYWZ0ZXIgYWxsLlxuXHRcdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRpdGxlcy5leGlzdHMgPSBleGlzdHM7XG5cdFx0XHRcdFx0aWYgKHF1ZXJ5S2V5ICE9PSBrZXkpIHtcblx0XHRcdFx0XHRcdHRpdGxlcy5ub3JtYWxpemVkID0ga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBSZW1lbWJlciB0aGUgTkZDIG5vcm1hbGl6ZWQga2V5IHdlIGdvdCBiYWNrIGZyb20gdGhlIHNlcnZlclxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0aW50ZXJuYWxzZWFyY2g6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5Jmxpc3Q9YWxscGFnZXMmYXBuYW1lc3BhY2U9MTQmYXBsaW1pdD0zMCZhcGZyb209JDEmYXBwcmVmaXg9JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5hbGxwYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LmFsbHBhZ2VzO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0udGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHR9IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0ZXhpc3RzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZwcm9wPWluZm8mdGl0bGVzPUNhdGVnb3J5OiQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCwgcXVlcnlLZXkpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzICYmICFxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1stMV0pIHtcblx0XHRcdFx0XHQvLyBTaG91bGQgaGF2ZSBleGFjdGx5IDFcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHAgaW4gcXVlcnlSZXN1bHQucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bihxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcywgcCkpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsZXQgX3RpdGxlID0gcXVlcnlSZXN1bHQucXVlcnkucGFnZXNbcF0udGl0bGU7XG5cdFx0XHRcdFx0XHRfdGl0bGUgPSBfdGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgX3RpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IFtfdGl0bGVdO1xuXHRcdFx0XHRcdFx0dGl0bGVzLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0XHRpZiAocXVlcnlLZXkgIT09IF90aXRsZSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMubm9ybWFsaXplZCA9IF90aXRsZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIE5GQ1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0c3ViY2F0ZWdvcmllczoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmbGlzdD1jYXRlZ29yeW1lbWJlcnMmY210eXBlPXN1YmNhdCZjbWxpbWl0PW1heCZjbXRpdGxlPUNhdGVnb3J5OiQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQucXVlcnkgJiYgcXVlcnlSZXN1bHQucXVlcnkuY2F0ZWdvcnltZW1iZXJzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gcXVlcnlSZXN1bHQucXVlcnkuY2F0ZWdvcnltZW1iZXJzO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0udGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHR9IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0cGFyZW50Y2F0ZWdvcmllczoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmcHJvcD1jYXRlZ29yaWVzJnRpdGxlcz1DYXRlZ29yeTokMSZjbGxpbWl0PW1heGAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwIGluIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRpZiAocXVlcnlSZXN1bHQucXVlcnkucGFnZXNbcF0uY2F0ZWdvcmllcykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1twXS5jYXRlZ29yaWVzO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXS50aXRsZS5zbGljZShNYXRoLm1heCgwLCB0aXRsZXNbaV0udGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdFx0XHR9IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblx0Y29uc3Qgc3VnZ2VzdGlvbkNvbmZpZ3MgPSB7XG5cdFx0c2VhcmNoaW5kZXg6IHtcblx0XHRcdG5hbWU6ICdTZWFyY2ggaW5kZXgnLFxuXHRcdFx0ZW5naW5lczogWydvcGVuc2VhcmNoJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogZmFsc2UsXG5cdFx0XHRub0NvbXBsZXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0cGFnZWxpc3Q6IHtcblx0XHRcdG5hbWU6ICdQYWdlIGxpc3QnLFxuXHRcdFx0ZW5naW5lczogWydpbnRlcm5hbHNlYXJjaCcsICdleGlzdHMnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRjb21iaW5lZDoge1xuXHRcdFx0bmFtZTogJ0NvbWJpbmVkIHNlYXJjaCcsXG5cdFx0XHRlbmdpbmVzOiBbJ29wZW5zZWFyY2gnLCAnaW50ZXJuYWxzZWFyY2gnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRzdWJjYXQ6IHtcblx0XHRcdG5hbWU6ICdTdWJjYXRlZ29yaWVzJyxcblx0XHRcdGVuZ2luZXM6IFsnc3ViY2F0ZWdvcmllcyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IHRydWUsXG5cdFx0XHRub0NvbXBsZXRpb246IHRydWUsXG5cdFx0fSxcblx0XHRwYXJlbnRjYXQ6IHtcblx0XHRcdG5hbWU6ICdQYXJlbnQgY2F0ZWdvcmllcycsXG5cdFx0XHRlbmdpbmVzOiBbJ3BhcmVudGNhdGVnb3JpZXMnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiB0cnVlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiB0cnVlLFxuXHRcdH0sXG5cdH07XG5cdC8vIEV2ZW50IGtleUNvZGVzIHRoYXQgd2UgaGFuZGxlIGluIHRoZSB0ZXh0IGlucHV0IGZpZWxkL3N1Z2dlc3Rpb24gbGlzdC5cblx0Y29uc3QgQlMgPSA4O1xuXHRjb25zdCBUQUIgPSA5O1xuXHRjb25zdCBSRVQgPSAxMztcblx0Y29uc3QgRVNDID0gMjc7XG5cdGNvbnN0IFNQQUNFID0gMzI7XG5cdGNvbnN0IFBHVVAgPSAzMztcblx0Y29uc3QgUEdET1dOID0gMzQ7XG5cdGNvbnN0IFVQID0gMzg7XG5cdGNvbnN0IERPV04gPSA0MDtcblx0Y29uc3QgREVMID0gNDY7XG5cdGNvbnN0IElNRSA9IDIyOTtcblx0Y2xhc3MgQ2F0ZWdvcnlFZGl0b3Ige1xuXHRcdGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcblx0XHR9XG5cdFx0aXNDb21wb3NpdGlvblN0YXJ0ID0gZmFsc2U7XG5cdFx0aW5pdGlhbGl6ZShsaW5lLCBzcGFuLCBhZnRlciwga2V5LCBpc19oaWRkZW4pIHtcblx0XHRcdC8vIElmIGEgc3BhbiBpcyBnaXZlbiwgJ2FmdGVyJyBpcyB0aGUgY2F0ZWdvcnkgdGl0bGUsIG90aGVyd2lzZSBpdCBtYXkgYmUgYW4gZWxlbWVudCBhZnRlciB3aGljaCB0b1xuXHRcdFx0Ly8gaW5zZXJ0IHRoZSBuZXcgc3Bhbi4gJ2tleScgaXMgbGlrZXdpc2Ugb3ZlcmxvYWRlZDsgaWYgYSBzcGFuIGlzIGdpdmVuLCBpdCBpcyB0aGUgY2F0ZWdvcnkga2V5IChpZlxuXHRcdFx0Ly8ga25vd24pLCBvdGhlcndpc2UgaXQgaXMgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBhIGJhciBzaGFsbCBiZSBwcmVwZW5kZWQuXG5cdFx0XHRpZiAoc3Bhbikge1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0c3Bhbi5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rID0gc3Bhbi5maXJzdENoaWxkO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgPSBhZnRlcjtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEtleSA9IGtleSAmJiBrZXkubGVuZ3RoID4gMSA/IGtleS5zbGljZSgxKSA6IG51bGw7IC8vID4gMSBiZWNhdXNlIGl0IGluY2x1ZGVzIHRoZSBsZWFkaW5nIGJhclxuXHRcdFx0XHR0aGlzLm9yaWdpbmFsRXhpc3RzID0gIWhhc0NsYXNzKHRoaXMuY2F0TGluaywgJ25ldycpO1xuXHRcdFx0XHQvLyBDcmVhdGUgY2hhbmdlIGFuZCBkZWwgbGlua3Ncblx0XHRcdFx0dGhpcy5tYWtlTGlua1NwYW4oKTtcblx0XHRcdFx0aWYgKCF0aGlzLm9yaWdpbmFsRXhpc3RzICYmIHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSB0cnVlO1xuXHRcdFx0XHQvLyBDcmVhdGUgYWRkIHNwYW4gYW5kIGFwcGVuZCB0byBjYXRMaW5rc1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgPSAnJztcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEtleSA9IG51bGw7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxFeGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0aWYgKCFuZXdET00pIHtcblx0XHRcdFx0XHRzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQnO1xuXHRcdFx0XHRcdGlmIChrZXkpIHtcblx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJyB8ICcsIHRydWUpKTtcblx0XHRcdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdFx0XHRhZnRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCBhZnRlci5uZXh0U2libGluZyk7XG5cdFx0XHRcdFx0XHRcdGFmdGVyID0gYWZ0ZXIubmV4dFNpYmxpbmc7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUpIHtcblx0XHRcdFx0XHRcdFx0bGluZS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChsaW5lICYmIGxpbmUuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHRcdGxpbmUuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxpbmtTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHR0aGlzLmxpbmtTcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50IG5vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5hZGQsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWFkZCcpO1xuXHRcdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0c3BhbiA9IG1ha2UobmV3RE9NID8gJ2xpJyA6ICdzcGFuJyk7XG5cdFx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQnO1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0c3Bhbi5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRzcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0YWZ0ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgYWZ0ZXIubmV4dFNpYmxpbmcpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUpIHtcblx0XHRcdFx0XHRsaW5lLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzID0gbnVsbDtcblx0XHRcdFx0dGhpcy51bmRlbExpbmsgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5vcmlnaW5hbEhpZGRlbiA9IGlzX2hpZGRlbjtcblx0XHRcdHRoaXMubGluZSA9IGxpbmU7XG5cdFx0XHR0aGlzLmVuZ2luZSA9IEhDLnN1Z2dlc3Rpb25zO1xuXHRcdFx0dGhpcy5zcGFuID0gc3Bhbjtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5zdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdHRoaXMubGFzdFNhdmVkU3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0aWYgKHRoaXMuY2F0TGluayAmJiB0aGlzLmN1cnJlbnRLZXkpIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5O1xuXHRcdFx0fVxuXHRcdFx0ZWRpdG9yc1tlZGl0b3JzLmxlbmd0aF0gPSB0aGlzO1xuXHRcdH1cblx0XHRtYWtlTGlua1NwYW4oKSB7XG5cdFx0XHR0aGlzLm5vcm1hbExpbmtzID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0bGV0IGxpbmsgPSBudWxsO1xuXHRcdFx0aWYgKHRoaXMub3JpZ2luYWxDYXRlZ29yeSAmJiB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnJlbW92ZSwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtcmVtb3ZlJyk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW3RoaXMub3JpZ2luYWxDYXRlZ29yeV0pIHtcblx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuY2hhbmdlLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1jaGFuZ2UnKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdGlmICghbm9TdWdnZXN0aW9ucyAmJiBIQy51c2VfdXBfZG93bikge1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb3duLmJpbmQodGhpcykpO1xuXHRcdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuZG93biwgdHJ1ZSkpO1xuXHRcdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1kb3duJyk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwLmJpbmQodGhpcykpO1xuXHRcdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MudXAsIHRydWUpKTtcblx0XHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtdXAnKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKHRoaXMudXBEb3duTGlua3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0dGhpcy5saW5rU3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCBub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdHRoaXMubGlua1NwYW4uYXBwZW5kKHRoaXMubm9ybWFsTGlua3MpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5jbGFzc05hbWUgPSAnbm9wb3B1cHMgaG90Y2F0bGluayc7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVzdG9yZS5iaW5kKHRoaXMpKTtcblx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MucmVzdG9yZSwgdHJ1ZSkpO1xuXHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXJlc3RvcmUnKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuYXBwZW5kKGxpbmspO1xuXHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQodGhpcy51bmRlbExpbmspO1xuXHRcdH1cblx0XHRpbnZva2VTdWdnZXN0aW9ucyhkb250X2F1dG9jb21wbGV0ZSkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLmVuZ2luZSAmJlxuXHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0gJiZcblx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdLnRlbXAgJiZcblx0XHRcdFx0IWRvbnRfYXV0b2NvbXBsZXRlXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmUgPSBIQy5zdWdnZXN0aW9ucztcblx0XHRcdH0gLy8gUmVzZXQgdG8gYSBzZWFyY2ggdXBvbiBpbnB1dFxuXHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKGRvbnRfYXV0b2NvbXBsZXRlKTtcblx0XHRcdH0sIEhDLnN1Z2dlc3RfZGVsYXkpO1xuXHRcdH1cblx0XHRtYWtlRm9ybSgpIHtcblx0XHRcdGNvbnN0IGZvcm0gPSBtYWtlKCdmb3JtJyk7XG5cdFx0XHRmb3JtLm1ldGhvZCA9ICdQT1NUJztcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5hY2NlcHQuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLmZvcm0gPSBmb3JtO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRjb25zdCB0ZXh0ID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdHRleHQudHlwZSA9ICd0ZXh0Jztcblx0XHRcdHRleHQuc2l6ZSA9IEhDLmVkaXRib3hfd2lkdGg7XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0Ly8gQmUgY2FyZWZ1bCBoZXJlIHRvIGhhbmRsZSBJTUUgaW5wdXQuIFRoaXMgaXMgYnJvd3Nlci9PUy9JTUUgZGVwZW5kZW50LCBidXQgYmFzaWNhbGx5IHRoZXJlIGFyZSB0d28gbWVjaGFuaXNtczpcblx0XHRcdFx0Ly8gLSBNb2Rlcm4gKERPTSBMZXZlbCAzKSBicm93c2VycyB1c2UgY29tcG9zaXRpb25zdGFydC9jb21wb3NpdGlvbmVuZCBldmVudHMgdG8gc2lnbmFsIGNvbXBvc2l0aW9uOyBpZiB0aGVcblx0XHRcdFx0Ly8gICBjb21wb3NpdGlvbiBpcyBub3QgY2FuY2VsZWQsIHRoZXJlJ2xsIGJlIGEgdGV4dElucHV0IGV2ZW50IGZvbGxvd2luZy4gRHVyaW5nIGEgY29tcG9zaXRpb24ga2V5IGV2ZW50cyBhcmVcblx0XHRcdFx0Ly8gICBlaXRoZXIgYWxsIHN1cHByZXNzZWQgKEZGL0dlY2tvKSwgb3Igb3RoZXJ3aXNlIGhhdmUga2V5RG93biA9PT0gSU1FIGZvciBhbGwga2V5cyAoV2Via2l0KS5cblx0XHRcdFx0Ly8gICAtIFdlYmtpdCBzZW5kcyBhIHRleHRJbnB1dCBmb2xsb3dlZCBieSBrZXlEb3duID09PSBJTUUgYW5kIGEga2V5VXAgd2l0aCB0aGUga2V5IHRoYXQgZW5kZWQgY29tcG9zaXRpb24uXG5cdFx0XHRcdC8vICAgLSBHZWNrbyBkb2Vzbid0IHNlbmQgdGV4dElucHV0IGJ1dCBqdXN0IGEga2V5VXAgd2l0aCB0aGUga2V5IHRoYXQgZW5kZWQgY29tcG9zaXRpb24sIHdpdGhvdXQgc2VuZGluZyBrZXlEb3duXG5cdFx0XHRcdC8vXHQgZmlyc3QuIEdlY2tvIGRvZXNuJ3Qgc2VuZCBhbnkga2V5ZG93biB3aGlsZSBJTUUgaXMgYWN0aXZlLlxuXHRcdFx0XHQvLyAtIE9sZGVyIGJyb3dzZXJzIHNpZ25hbCBjb21wb3NpdGlvbiBieSBrZXlEb3duID09PSBJTUUgZm9yIHRoZSBmaXJzdCBhbmQgc3Vic2VxdWVudCBrZXlzIGZvciBhIGNvbXBvc2l0aW9uLiBUaGVcblx0XHRcdFx0Ly8gICBmaXJzdCBrZXlEb3duICE9PSBJTUUgaXMgY2VydGFpbmx5IGFmdGVyIHRoZSBlbmQgb2YgdGhlIGNvbXBvc2l0aW9uLiBUeXBpY2FsbHksIGNvbXBvc2l0aW9uIGVuZCBjYW4gYWxzbyBiZVxuXHRcdFx0XHQvLyAgIGRldGVjdGVkIGJ5IGEga2V5RG93biBJTUUgd2l0aCBhIGtleVVwIG9mIHNwYWNlLCB0YWIsIGVzY2FwZSwgb3IgcmV0dXJuLlxuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gZXZlbnQua2V5IHx8IDA7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgJiZcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9PT0gSU1FICYmXG5cdFx0XHRcdFx0XHQhc2VsZi51c2VzQ29tcG9zaXRpb24gJiZcblx0XHRcdFx0XHRcdChrZXkgPT09IFRBQiB8fCBrZXkgPT09IFJFVCB8fCBrZXkgPT09IEVTQyB8fCBrZXkgPT09IFNQQUNFKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNlbGYuaW1lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gVVAgfHwga2V5ID09PSBET1dOIHx8IGtleSA9PT0gUEdVUCB8fCBrZXkgPT09IFBHRE9XTikge1xuXHRcdFx0XHRcdFx0Ly8gSW4gY2FzZSBhIGJyb3dzZXIgZG9lc24ndCBnZW5lcmF0ZSBrZXlwcmVzcyBldmVudHMgZm9yIGFycm93IGtleXMuLi5cblx0XHRcdFx0XHRcdGlmIChzZWxmLmtleUNvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLnByb2Nlc3NLZXkoZXZlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoa2V5ID09PSBFU0MgJiYgc2VsZi5sYXN0S2V5ICE9PSBJTUUgJiYgIXNlbGYucmVzZXRLZXlTZWxlY3Rpb24oKSkge1xuXHRcdFx0XHRcdFx0XHQvLyBObyB1bmRvIG9mIGtleSBzZWxlY3Rpb246IHRyZWF0IEVTQyBhcyBcImNhbmNlbFwiLlxuXHRcdFx0XHRcdFx0XHRzZWxmLmNhbmNlbCgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBBbHNvIGRvIHRoaXMgZm9yIEVTQyBhcyBhIHdvcmthcm91bmQgZm9yIEZpcmVmb3ggYnVnIDUyNDM2MFxuXHRcdFx0XHRcdFx0Ly8ge0BsaW5rIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTUyNDM2MH1cblx0XHRcdFx0XHRcdGlmIChzZWxmLmlzQ29tcG9zaXRpb25TdGFydCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzZWxmLmludm9rZVN1Z2dlc3Rpb25zKGtleSA9PT0gQlMgfHwga2V5ID09PSBERUwgfHwga2V5ID09PSBFU0MpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGV2ZW50LmtleSB8fCAwO1xuXHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IGtleTtcblx0XHRcdFx0XHRzZWxmLmtleUNvdW50ID0gMDtcblx0XHRcdFx0XHQvLyBET00gTGV2ZWwgPCAzIElNRSBpbnB1dFxuXHRcdFx0XHRcdGlmICghc2VsZi5pbWUgJiYga2V5ID09PSBJTUUgJiYgIXNlbGYudXNlc0NvbXBvc2l0aW9uKSB7XG5cdFx0XHRcdFx0XHQvLyBzZWxmLnVzZXNDb21wb3NpdGlvbiBjYXRjaGVzIGJyb3dzZXJzIHRoYXQgbWF5IGVtaXQgc3B1cmlvdXMga2V5ZG93biBJTUUgYWZ0ZXIgYSBjb21wb3NpdGlvbiBoYXMgZW5kZWRcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gdHJ1ZTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgJiZcblx0XHRcdFx0XHRcdGtleSAhPT0gSU1FICYmXG5cdFx0XHRcdFx0XHQhKChrZXkgPj0gMTYgJiYga2V5IDw9IDIwKSB8fCAoa2V5ID49IDkxICYmIGtleSA8PSA5MykgfHwga2V5ID09PSAxNDQpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHQvLyBJZ25vcmUgY29udHJvbCBrZXlzOiBjdHJsLCBzaGlmdCwgYWx0LCBhbHQgZ3IsIGNhcHMgbG9jaywgd2luZG93cy9hcHBsZSBjbWQga2V5cywgbnVtIGxvY2suIE9ubHkgdGhlIHdpbmRvd3Mga2V5c1xuXHRcdFx0XHRcdFx0Ly8gdGVybWluYXRlIElNRSAoYXBwbGUgY21kIGRvZXNuJ3QpLCBidXQgdGhleSBhbHNvIGNhdXNlIGEgYmx1ciwgc28gaXQncyBPSyB0byBpZ25vcmUgdGhlbSBoZXJlLlxuXHRcdFx0XHRcdFx0Ly8gTm90ZTogU2FmYXJpIDQgKDUzMC4xNykgcHJvcGFnYXRlcyBFU0Mgb3V0IG9mIGFuIElNRSBjb21wb3NpdGlvbiAob2JzZXJ2ZWQgYXQgbGVhc3Qgb24gV2luIFhQKS5cblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChzZWxmLmltZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEhhbmRsZSByZXR1cm4gZXhwbGljaXRseSwgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIHRvIGJlIGFibGUgdG8gY2hlY2sgZm9yIGN0cmxcblx0XHRcdFx0XHRpZiAoa2V5ID09PSBSRVQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZWxmLmFjY2VwdChldmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEluaGliaXQgZGVmYXVsdCBiZWhhdmlvciBvZiBFU0MgKHJldmVydCB0byBsYXN0IHJlYWwgaW5wdXQgaW4gRkY6IHdlIGRvIHRoYXQgb3Vyc2VsdmVzKVxuXHRcdFx0XHRcdHJldHVybiBrZXkgPT09IEVTQyA/IGV2dEtpbGwoZXZlbnQpIDogdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIEFuZCBoYW5kbGUgY29udGludWVkIHByZXNzaW5nIG9mIGFycm93IGtleXNcblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYua2V5Q291bnQrKztcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi5wcm9jZXNzS2V5KGV2ZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQodGV4dCkub24oJ2ZvY3VzJywgKCkgPT4ge1xuXHRcdFx0XHRcdG1ha2VBY3RpdmUoc2VsZik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBPbiBJRSwgYmx1ciBldmVudHMgYXJlIGFzeW5jaHJvbm91cywgYW5kIG1heSB0aHVzIGFycml2ZSBhZnRlciB0aGUgZWxlbWVudCBoYXMgbG9zdCB0aGUgZm9jdXMuIFNpbmNlIElFXG5cdFx0XHRcdC8vIGNhbiBnZXQgdGhlIHNlbGVjdGlvbiBvbmx5IHdoaWxlIHRoZSBlbGVtZW50IGlzIGFjdGl2ZSAoaGFzIHRoZSBmb2N1cyksIHdlIG1heSBub3QgYWx3YXlzIGdldCB0aGUgc2VsZWN0aW9uLlxuXHRcdFx0XHQvLyBUaGVyZWZvcmUsIHVzZSBhbiBJRS1zcGVjaWZpYyBzeW5jaHJvbm91cyBldmVudCBvbiBJRS4uLlxuXHRcdFx0XHQvLyBEb24ndCB0ZXN0IGZvciB0ZXh0LnNlbGVjdGlvblN0YXJ0IGJlaW5nIGRlZmluZWQ7XG5cdFx0XHRcdCQodGV4dCkub24oXG5cdFx0XHRcdFx0dGV4dC5vbmJlZm9yZWRlYWN0aXZhdGUgIT09IHVuZGVmaW5lZCAmJiB0ZXh0LmNyZWF0ZVRleHRSYW5nZSA/ICdiZWZvcmVkZWFjdGl2YXRlJyA6ICdibHVyJyxcblx0XHRcdFx0XHR0aGlzLnNhdmVWaWV3LmJpbmQodGhpcylcblx0XHRcdFx0KTtcblx0XHRcdFx0Ly8gRE9NIExldmVsIDMgSU1FIGhhbmRsaW5nXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gU2V0dGluZyBsYXN0S2V5ID0gSU1FIHByb3ZpZGVzIGEgZmFrZSBrZXlEb3duIGZvciBHZWNrbydzIHNpbmdsZSBrZXlVcCBhZnRlciBhIGNtcG9zaXRpb24uIElmIHdlIGRpZG4ndCBkbyB0aGlzLFxuXHRcdFx0XHRcdC8vIGNhbmNlbGxpbmcgYSBjb21wb3NpdGlvbiB2aWEgRVNDIHdvdWxkIGFsc28gY2FuY2VsIGFuZCBjbG9zZSB0aGUgd2hvbGUgY2F0ZWdvcnkgaW5wdXQgZWRpdG9yLlxuXHRcdFx0XHRcdCQodGV4dCkub24oJ2NvbXBvc2l0aW9uc3RhcnQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPSBJTUU7XG5cdFx0XHRcdFx0XHRzZWxmLnVzZXNDb21wb3NpdGlvbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZWxmLmlzQ29tcG9zaXRpb25TdGFydCA9IHRydWU7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JCh0ZXh0KS5vbignY29tcG9zaXRpb25lbmQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPSBJTUU7XG5cdFx0XHRcdFx0XHRzZWxmLnVzZXNDb21wb3NpdGlvbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0c2VsZi5pc0NvbXBvc2l0aW9uU3RhcnQgPSBmYWxzZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKHRleHQpLm9uKCd0ZXh0SW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0aWYgKHNlbGYuaXNDb21wb3NpdGlvblN0YXJ0KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHNlbGYuaW52b2tlU3VnZ2VzdGlvbnMoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvLyBKdXN0IGluIGNhc2Ugc29tZSBicm93c2VycyBtaWdodCBwcm9kdWNlIGV4Y2VwdGlvbnMgd2l0aCB0aGVzZSBET00gTGV2ZWwgMyBldmVudHNcblx0XHRcdFx0fVxuXHRcdFx0XHQkKHRleHQpLm9uKCdibHVyJywgKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gZmFsc2U7XG5cdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHRcdFx0dGhpcy5pY29uID0gbWFrZSgnaW1nJyk7XG5cdFx0XHRsZXQgbGlzdCA9IG51bGw7XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0bGlzdCA9IG1ha2UoJ3NlbGVjdCcpO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCkpIHtcblx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZShmYWxzZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKSkge1xuXHRcdFx0XHRcdFx0c2VsZi5hY2NlcHQoZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApO1xuXHRcdFx0XHRcdHNlbGYudGV4dC5mb2N1cygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGlmIChldmVudC5rZXkgPT09IEVTQykge1xuXHRcdFx0XHRcdFx0c2VsZi5yZXNldEtleVNlbGVjdGlvbigpO1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0LmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKHRydWUpO1xuXHRcdFx0XHRcdFx0fSwgSEMuc3VnZ2VzdF9kZWxheSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChldmVudC5rZXkgPT09IFJFVCkge1xuXHRcdFx0XHRcdFx0c2VsZi5hY2NlcHQoZXZlbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmICghSEMuZml4ZWRfc2VhcmNoKSB7XG5cdFx0XHRcdFx0Y29uc3QgZW5naW5lU2VsZWN0b3IgPSBtYWtlKCdzZWxlY3QnKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGtleSBpbiBzdWdnZXN0aW9uQ29uZmlncykge1xuXHRcdFx0XHRcdFx0aWYgKHN1Z2dlc3Rpb25Db25maWdzW2tleV0uc2hvdykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBvcHQgPSBtYWtlKCdvcHRpb24nKTtcblx0XHRcdFx0XHRcdFx0b3B0LnZhbHVlID0ga2V5O1xuXHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSB0aGlzLmVuZ2luZSkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdC5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0b3B0LmFwcGVuZChtYWtlKHN1Z2dlc3Rpb25Db25maWdzW2tleV0ubmFtZSwgdHJ1ZSkpO1xuXHRcdFx0XHRcdFx0XHRlbmdpbmVTZWxlY3Rvci5hcHBlbmQob3B0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZW5naW5lU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5lbmdpbmUgPSBzZWxmLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbc2VsZi5lbmdpbmVTZWxlY3Rvci5zZWxlY3RlZEluZGV4XS52YWx1ZTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKHRydWUsIHRydWUpOyAvLyBEb24ndCBhdXRvY29tcGxldGUsIGZvcmNlIHJlLWRpc3BsYXkgb2YgbGlzdFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IgPSBlbmdpbmVTZWxlY3Rvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0ID0gbGlzdDtcblx0XHRcdGNvbnN0IGJ1dHRvbl9sYWJlbCA9IChfaWQsIGRlZmF1bHRUZXh0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGxhYmVsID0gbnVsbDtcblx0XHRcdFx0aWYgKCFsYWJlbCB8fCAhbGFiZWwuZGF0YSkge1xuXHRcdFx0XHRcdHJldHVybiBkZWZhdWx0VGV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbGFiZWwuZGF0YTtcblx0XHRcdH07XG5cdFx0XHQvLyBEbyBub3QgdXNlIHR5cGUgJ3N1Ym1pdCc7IHdlIGNhbm5vdCBkZXRlY3QgbW9kaWZpZXIga2V5cyBpZiB3ZSBkb1xuXHRcdFx0Y29uc3QgT0sgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0T0sudHlwZSA9ICdidXR0b24nO1xuXHRcdFx0T0sudmFsdWUgPSBidXR0b25fbGFiZWwoJ3dwT2tVcGxvYWRMYmwnLCBnZXRNZXNzYWdlKCdtZXNzYWdlcy1vaycpKTtcblx0XHRcdE9LLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY2NlcHQuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLm9rID0gT0s7XG5cdFx0XHRjb25zdCBjYW5jZWwgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0Y2FuY2VsLnR5cGUgPSAnYnV0dG9uJztcblx0XHRcdGNhbmNlbC52YWx1ZSA9IGJ1dHRvbl9sYWJlbCgnd3BDYW5jZWxVcGxvYWRMYmwnLCBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYW5jZWwnKSk7XG5cdFx0XHRjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMuY2FuY2VsQnV0dG9uID0gY2FuY2VsO1xuXHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ2hvdGNhdGlucHV0Jztcblx0XHRcdHNwYW4uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXHRcdFx0c3Bhbi5hcHBlbmQodGV4dCk7XG5cdFx0XHQvLyBQdXQgc29tZSB0ZXh0IGludG8gdGhpcyBzcGFuIChhMCBpcyBuYnNwKSBhbmQgbWFrZSBzdXJlIGl0IGFsd2F5cyBzdGF5cyBvbiB0aGUgc2FtZVxuXHRcdFx0Ly8gbGluZSBhcyB0aGUgaW5wdXQgZmllbGQsIG90aGVyd2lzZSwgSUU4LzkgbWlzY2FsY3VsYXRlcyB0aGUgaGVpZ2h0IG9mIHRoZSBzcGFuIGFuZFxuXHRcdFx0Ly8gdGhlbiB0aGUgZW5naW5lIHNlbGVjdG9yIG1heSBvdmVybGFwIHRoZSBpbnB1dCBmaWVsZC5cblx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJ1xcdTAwQTAnLCB0cnVlKSk7XG5cdFx0XHRzcGFuLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcblx0XHRcdGlmIChsaXN0KSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKGxpc3QpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5lbmdpbmVTZWxlY3Rvcik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5pY29uKTtcblx0XHRcdH1cblx0XHRcdHNwYW4uYXBwZW5kKE9LKTtcblx0XHRcdHNwYW4uYXBwZW5kKGNhbmNlbCk7XG5cdFx0XHRmb3JtLmFwcGVuZChzcGFuKTtcblx0XHRcdGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuc3Bhbi5hcHBlbmQoZm9ybSk7XG5cdFx0fVxuXHRcdGRpc3BsYXkoZXZlbnQpIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkgJiYgIW9uVXBsb2FkICYmIHRoaXMubGluZSkge1xuXHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IodGhpcy5saW5lLCBudWxsLCB0aGlzLnNwYW4sIHRydWUpOyAvLyBDcmVhdGUgYSBuZXcgb25lXG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNvbW1pdEJ1dHRvbiAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgIT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMuZm9ybSkge1xuXHRcdFx0XHR0aGlzLm1ha2VGb3JtKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLmxhc3RTYXZlZEhpZGRlbjtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMubGFzdFNhdmVkS2V5O1xuXHRcdFx0dGhpcy5pY29uLnNyYyA9IHRoaXMuY3VycmVudEV4aXN0cyA/IEhDLmV4aXN0c1llcyA6IEhDLmV4aXN0c05vO1xuXHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnkgKyAodGhpcy5jdXJyZW50S2V5ID09PSBudWxsID8gJycgOiBgfCR7dGhpcy5jdXJyZW50S2V5fWApO1xuXHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdHRoaXMubGFzdElucHV0ID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gdGhpcy5jdXJyZW50RXhpc3RzO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCA/IE9QRU4gOiBDSEFOR0VfUEVORElORztcblx0XHRcdHRoaXMubGFzdFNlbGVjdGlvbiA9IHtcblx0XHRcdFx0c3RhcnQ6IHRoaXMuY3VycmVudENhdGVnb3J5Lmxlbmd0aCxcblx0XHRcdFx0ZW5kOiB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGgsXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRcdC8vIERpc3BsYXkgdGhlIGZvcm1cblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0aGlzLmZvcm0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHRcdFx0dGhpcy5vay5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0Ly8gS2lsbCB0aGUgZXZlbnQgYmVmb3JlIGZvY3Vzc2luZywgb3RoZXJ3aXNlIElFIHdpbGwga2lsbCB0aGUgb25mb2N1cyBldmVudCFcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0dGhpcy50ZXh0LmZvY3VzKCk7XG5cdFx0XHR0aGlzLnRleHQucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0c2hvdyhldmVudCwgZW5naW5lLCByZWFkT25seSkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5kaXNwbGF5KGV2ZW50KTtcblx0XHRcdGNvbnN0IHYgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRleHQucmVhZE9ubHkgPSAhIXJlYWRPbmx5O1xuXHRcdFx0dGhpcy5lbmdpbmUgPSBlbmdpbmU7XG5cdFx0XHR0aGlzLnRleHRjaGFuZ2UoZmFsc2UsIHRydWUpOyAvLyBkbyBhdXRvY29tcGxldGlvbiwgZm9yY2UgZGlzcGxheSBvZiBzdWdnZXN0aW9uc1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0b3BlbihldmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgdGhpcy5lbmdpbmUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdLnRlbXAgPyBIQy5zdWdnZXN0aW9ucyA6IHRoaXMuZW5naW5lKTtcblx0XHR9XG5cdFx0ZG93bihldmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgJ3N1YmNhdCcsIHRydWUpO1xuXHRcdH1cblx0XHR1cChldmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgJ3BhcmVudGNhdCcpO1xuXHRcdH1cblx0XHRjYW5jZWwoKSB7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5ICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpOyAvLyBXZSBhZGRlZCBhIG5ldyBhZGRlciB3aGVuIG9wZW5pbmdcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQ2xvc2UsIHJlLWRpc3BsYXkgbGlua1xuXHRcdFx0dGhpcy5pbmFjdGl2YXRlKCk7XG5cdFx0XHR0aGlzLmZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMub3JpZ2luYWxTdGF0ZTtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMubGFzdFNhdmVkS2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLmxhc3RTYXZlZEhpZGRlbjtcblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5ICYmIHRoaXMuY3VycmVudEtleS5sZW5ndGggPiAwID8gdGhpcy5jdXJyZW50S2V5IDogJyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICghb25VcGxvYWQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdHJlbW92ZUVkaXRvcigpIHtcblx0XHRcdGlmICghbmV3RE9NKSB7XG5cdFx0XHRcdGNvbnN0IG5leHQgPSB0aGlzLnNwYW4ubmV4dFNpYmxpbmc7XG5cdFx0XHRcdGlmIChuZXh0KSB7XG5cdFx0XHRcdFx0bmV4dC5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3BhbiAmJiB0aGlzLnNwYW4ucGFyZW50Tm9kZSkge1xuXHRcdFx0XHR0aGlzLnNwYW4ucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGVkaXRvcnNbaV0gPT09IHRoaXMpIHtcblx0XHRcdFx0XHRlZGl0b3JzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdHJvbGxiYWNrKGV2ZW50KSB7XG5cdFx0XHR0aGlzLnVuZG9MaW5rLnJlbW92ZSgpO1xuXHRcdFx0dGhpcy51bmRvTGluayA9IG51bGw7XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLnN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdFx0aWYgKCF0aGlzLmN1cnJlbnRDYXRlZ29yeSB8fCB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0Ly8gSXQgd2FzIGEgbmV3bHkgYWRkZWQgY2F0ZWdvcnkuIFJlbW92ZSB0aGUgd2hvbGUgZWRpdG9yLlxuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gUmVkaXNwbGF5IHRoZSBsaW5rLi4uXG5cdFx0XHRcdHRoaXMuY2F0TGluay5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuYXBwZW5kKG1ha2UodGhpcy5jdXJyZW50Q2F0ZWdvcnksIHRydWUpKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3RoaXMuY3VycmVudENhdGVnb3J5fWApO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXkgfHwgJyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5jbGFzc05hbWUgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICduZXcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdFx0aWYgKHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHR9XG5cdFx0aW5hY3RpdmF0ZSgpIHtcblx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlzX2FjdGl2ZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRhY2NlcHRDaGVjayhkb250Q2hlY2spIHtcblx0XHRcdHRoaXMuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdGxldCBrZXkgPSBudWxsO1xuXHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Wywga2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHYgPSB2YWx1ZVswXS5yZXBsYWNlKC9fL2csICcgJykudHJpbSgpO1xuXHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMpIHtcblx0XHRcdFx0diA9IGNhcGl0YWxpemUodik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHY7XG5cdFx0XHR2ID0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0IWRvbnRDaGVjayAmJlxuXHRcdFx0XHQoKGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHYgPT09IGNvbmYud2dUaXRsZSkgfHwgKEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB2O1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0ga2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5pbnB1dEV4aXN0cztcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRhY2NlcHQoZXZlbnQpIHtcblx0XHRcdC8vIChldnRLZXlzKGV2ZW50KSAmIDEpICE9PSAwXG5cdFx0XHQvLyDlvZPkuJTku4XlvZNldnRLZXlzKGV2ZW50KeS4ujHml7bvvIzmlbTkuKrliKTliKvlvI/miY3kuLp0cnVlXG5cdFx0XHR0aGlzLm5vQ29tbWl0ID0gZXZ0S2V5cyhldmVudCkgPT09IDE7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBldnRLaWxsKGV2ZW50KTtcblx0XHRcdGlmICh0aGlzLmFjY2VwdENoZWNrKCkpIHtcblx0XHRcdFx0Y29uc3QgdG9SZXNvbHZlID0gW3RoaXNdO1xuXHRcdFx0XHRjb25zdCBvcmlnaW5hbCA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0XHRyZXNvbHZlTXVsdGkodG9SZXNvbHZlLCAocmVzb2x2ZWQpID0+IHtcblx0XHRcdFx0XHRpZiAocmVzb2x2ZWRbMF0uZGFiKSB7XG5cdFx0XHRcdFx0XHRzaG93RGFiKHJlc29sdmVkWzBdKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlc29sdmVkWzBdLmFjY2VwdENoZWNrKHRydWUpKSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlZFswXS5jb21taXQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmVkWzBdLmN1cnJlbnRDYXRlZ29yeSA9PT0gb3JpZ2luYWxcblx0XHRcdFx0XHRcdFx0XHQ/IG51bGxcblx0XHRcdFx0XHRcdFx0XHQ6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9yZXNvbHZlZCcsIG9yaWdpbmFsKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0Y2xvc2UoKSB7XG5cdFx0XHRpZiAoIXRoaXMuY2F0TGluaykge1xuXHRcdFx0XHQvLyBDcmVhdGUgYSBjYXRMaW5rXG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKCdmb28nLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLnNwYW4uaW5zZXJ0QmVmb3JlKHRoaXMuY2F0TGluaywgdGhpcy5zcGFuLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jYXRMaW5rLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLmNhdExpbmsuYXBwZW5kKG1ha2UodGhpcy5jdXJyZW50Q2F0ZWdvcnksIHRydWUpKTtcblx0XHRcdHRoaXMuY2F0TGluay5ocmVmID0gd2lraVBhZ2VQYXRoKGAke0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0aGlzLmN1cnJlbnRDYXRlZ29yeX1gKTtcblx0XHRcdHRoaXMuY2F0TGluay5jbGFzc05hbWUgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICduZXcnO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLmN1cnJlbnRLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMuY3VycmVudEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5jdXJyZW50SGlkZGVuO1xuXHRcdFx0Ly8gQ2xvc2UgZm9ybSBhbmQgcmVkaXNwbGF5IGNhdGVnb3J5XG5cdFx0XHR0aGlzLmluYWN0aXZhdGUoKTtcblx0XHRcdHRoaXMuZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdFx0aWYgKG9uVXBsb2FkICYmIHRoaXMubGluZSkge1xuXHRcdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcih0aGlzLmxpbmUsIG51bGwsIHRoaXMuc3BhbiwgdHJ1ZSk7IC8vIENyZWF0ZSBhIG5ldyBvbmVcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5tYWtlTGlua1NwYW4oKTtcblx0XHRcdFx0dGhpcy5zcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdH1cblx0XHRcdGlmICghdGhpcy51bmRvTGluaykge1xuXHRcdFx0XHQvLyBBcHBlbmQgYW4gdW5kbyBsaW5rLlxuXHRcdFx0XHRjb25zdCBzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm9sbGJhY2suYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MudW5kbywgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtdW5kbycpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdHRoaXMudW5kb0xpbmsgPSBzcGFuO1xuXHRcdFx0XHRpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdHRoaXMudXBEb3duTGlua3Muc3R5bGUuZGlzcGxheSA9IHRoaXMubGFzdFNhdmVkRXhpc3RzID8gJycgOiAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSBDSEFOR0VEO1xuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdGNvbW1pdCgpIHtcblx0XHRcdC8vIENoZWNrIGFnYWluIHRvIGNhdGNoIHByb2JsZW0gY2FzZXMgYWZ0ZXIgcmVkaXJlY3QgcmVzb2x1dGlvblxuXHRcdFx0aWYgKFxuXHRcdFx0XHQodGhpcy5jdXJyZW50Q2F0ZWdvcnkgPT09IHRoaXMub3JpZ2luYWxDYXRlZ29yeSAmJlxuXHRcdFx0XHRcdCh0aGlzLmN1cnJlbnRLZXkgPT09IHRoaXMub3JpZ2luYWxLZXkgfHxcblx0XHRcdFx0XHRcdCh0aGlzLmN1cnJlbnRLZXkgPT09IG51bGwgJiYgdGhpcy5vcmlnaW5hbEtleS5sZW5ndGggPT09IDApKSkgfHxcblx0XHRcdFx0KGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHRoaXMuY3VycmVudENhdGVnb3J5ID09PSBjb25mLndnVGl0bGUpIHx8XG5cdFx0XHRcdChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QodGhpcy5jdXJyZW50Q2F0ZWdvcnkpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlLCBzZWxmKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlbW92ZShldmVudCkge1xuXHRcdFx0Ly8gKGV2dEtleXMoZXZlbnQpICYgMSlcblx0XHRcdC8vIOW9k+S4lOS7heW9k2V2dEtleXMoZXZlbnQp5Li6MeaXtu+8jOaVtOS4quWIpOWIq+W8j+aJjeS4ujHvvIzlkKbliJnpg73mmK8wXG5cdFx0XHR0aGlzLmRvUmVtb3ZlKGV2dEtleXMoZXZlbnQpID09PSAxKTtcblx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHR9XG5cdFx0ZG9SZW1vdmUobm9Db21taXQpIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdFx0Ly8gRW1wdHkgaW5wdXQgb24gYWRkaW5nIGEgbmV3IGNhdGVnb3J5XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gJyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5jc3NUZXh0ICs9ICc7IHRleHQtZGVjb3JhdGlvbiA6IGxpbmUtdGhyb3VnaCAhaW1wb3J0YW50Oyc7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IERFTEVURUQ7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdH0gZWxzZSBpZiAob25VcGxvYWQpIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIHRoaXMgZWRpdG9yIGNvbXBsZXRlbHlcblx0XHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSBERUxFVEVEO1xuXHRcdFx0XHR0aGlzLm5vQ29tbWl0ID0gbm9Db21taXQgfHwgSEMuZGVsX25lZWRzX2RpZmY7XG5cdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUsIHNlbGYpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5zdGF0ZSA9IHNlbGYub3JpZ2luYWxTdGF0ZTtcblx0XHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlc3RvcmUoZXZlbnQpIHtcblx0XHRcdC8vIENhbiBvY2N1ciBvbmx5IGlmIHdlIGRvIGhhdmUgYSBjb21taXQgYnV0dG9uIGFuZCBhcmUgbm90IG9uIHRoZSB1cGxvYWQgZm9ybVxuXHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGhpcy5vcmlnaW5hbFN0YXRlO1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubm9ybWFsTGlua3Muc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHQvLyBJbnRlcm5hbCBvcGVyYXRpb25zXG5cdFx0c2VsZWN0RW5naW5lKGVuZ2luZU5hbWUpIHtcblx0XHRcdGlmICghdGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5naW5lU2VsZWN0b3Iub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbaV0udmFsdWUgPT09IGVuZ2luZU5hbWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNhbml0aXplSW5wdXQoKSB7XG5cdFx0XHRsZXQgdiA9IHRoaXMudGV4dC52YWx1ZSB8fCAnJztcblx0XHRcdHYgPSB2LnJlcGxhY2UoL14oXFxzfF8pKy8sICcnKTsgLy8gVHJpbSBsZWFkaW5nIGJsYW5rcyBhbmQgdW5kZXJzY29yZXNcblx0XHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgXigke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0aWYgKHJlLnRlc3QodikpIHtcblx0XHRcdFx0diA9IHYuc2xpY2UoTWF0aC5tYXgoMCwgdi5pbmRleE9mKCc6JykgKyAxKSkucmVwbGFjZSgvXihcXHN8XykrLywgJycpO1xuXHRcdFx0fVxuXHRcdFx0diA9IHYucmVwbGFjZSgvXFx1MjAwRSQvLCAnJyk7IC8vIFRyaW0gZW5kaW5nIGxlZnQtdG8tcmlnaHQgbWFya1xuXHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMpIHtcblx0XHRcdFx0diA9IGNhcGl0YWxpemUodik7XG5cdFx0XHR9XG5cdFx0XHQvLyBPbmx5IHVwZGF0ZSB0aGUgaW5wdXQgZmllbGQgaWYgdGhlcmUgaXMgYSBkaWZmZXJlbmNlLiBWYXJpb3VzIGJyb3dzZXJzIG90aGVyd2lzZVxuXHRcdFx0Ly8gcmVzZXQgdGhlIHNlbGVjdGlvbiBhbmQgY3Vyc29yIHBvc2l0aW9uIGFmdGVyIGVhY2ggdmFsdWUgcmUtYXNzaWdubWVudC5cblx0XHRcdGlmICh0aGlzLnRleHQudmFsdWUgIT09IG51bGwgJiYgdGhpcy50ZXh0LnZhbHVlICE9PSB2KSB7XG5cdFx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHY7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG1ha2VDYWxsKHVybCwgY2FsbGJhY2tPYmosIGVuZ2luZSwgcXVlcnlLZXksIGNsZWFuS2V5KSB7XG5cdFx0XHRsZXQgY2IgPSBjYWxsYmFja09iajtcblx0XHRcdGNvbnN0IGUgPSBlbmdpbmU7XG5cdFx0XHRjb25zdCB2ID0gcXVlcnlLZXk7XG5cdFx0XHRjb25zdCB6ID0gY2xlYW5LZXk7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0XHRcdGNiLmNhbGxzTWFkZSsrO1xuXHRcdFx0XHRpZiAoY2IuY2FsbHNNYWRlID09PSBjYi5ub2ZDYWxscykge1xuXHRcdFx0XHRcdGlmIChjYi5leGlzdHMpIHtcblx0XHRcdFx0XHRcdGNiLmFsbFRpdGxlcy5leGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2Iubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdFx0Y2IuYWxsVGl0bGVzLm5vcm1hbGl6ZWQgPSBjYi5ub3JtYWxpemVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWNiLmRvbnRDYWNoZSAmJiAhc3VnZ2VzdGlvbkNvbmZpZ3NbY2IuZW5naW5lTmFtZV0uY2FjaGVbel0pIHtcblx0XHRcdFx0XHRcdHN1Z2dlc3Rpb25Db25maWdzW2NiLmVuZ2luZU5hbWVdLmNhY2hlW3pdID0gY2IuYWxsVGl0bGVzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzZWxmLnRleHQucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAoIWNiLmNhbmNlbGxlZCkge1xuXHRcdFx0XHRcdFx0c2VsZi5zaG93U3VnZ2VzdGlvbnMoY2IuYWxsVGl0bGVzLCBjYi5ub0NvbXBsZXRpb24sIHYsIGNiLmVuZ2luZU5hbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2IgPT09IHNlbGYuY2FsbGJhY2tPYmopIHtcblx0XHRcdFx0XHRcdHNlbGYuY2FsbGJhY2tPYmogPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYiA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdCQuZ2V0SlNPTih1cmwsIChqc29uKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlcyA9IGUuaGFuZGxlcihqc29uLCB6KTtcblx0XHRcdFx0aWYgKHRpdGxlcyAmJiB0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNiLmFsbFRpdGxlcyA9IGNiLmFsbFRpdGxlcyA9PT0gbnVsbCA/IHRpdGxlcyA6IFsuLi5jYi5hbGxUaXRsZXMsIC4uLmdlbmVyYXRlQXJyYXkodGl0bGVzKV07XG5cdFx0XHRcdFx0aWYgKHRpdGxlcy5leGlzdHMpIHtcblx0XHRcdFx0XHRcdGNiLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aXRsZXMubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdFx0Y2Iubm9ybWFsaXplZCA9IHRpdGxlcy5ub3JtYWxpemVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRkb25lKCk7XG5cdFx0XHR9KS5mYWlsKChyZXEpID0+IHtcblx0XHRcdFx0aWYgKCFyZXEpIHtcblx0XHRcdFx0XHRub1N1Z2dlc3Rpb25zID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYi5kb250Q2FjaGUgPSB0cnVlO1xuXHRcdFx0XHRkb25lKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y2FsbGJhY2tPYmogPSBudWxsO1xuXHRcdHRleHRjaGFuZ2UoZG9udF9hdXRvY29tcGxldGUsIGZvcmNlKSB7XG5cdFx0XHQvLyBIaWRlIGFsbCBvdGhlciBsaXN0c1xuXHRcdFx0bWFrZUFjdGl2ZSh0aGlzKTtcblx0XHRcdC8vIEdldCBpbnB1dCB2YWx1ZSwgb21pdCBzb3J0IGtleSwgaWYgYW55XG5cdFx0XHR0aGlzLnNhbml0aXplSW5wdXQoKTtcblx0XHRcdGxldCB2ID0gdGhpcy50ZXh0LnZhbHVlO1xuXHRcdFx0Ly8gRGlzcmVnYXJkIGFueXRoaW5nIGFmdGVyIGEgcGlwZS5cblx0XHRcdGNvbnN0IHBpcGUgPSB2LmluZGV4T2YoJ3wnKTtcblx0XHRcdGlmIChwaXBlID09PSAtMSkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdi5zbGljZShNYXRoLm1heCgwLCBwaXBlICsgMSkpO1xuXHRcdFx0XHR2ID0gdi5zbGljZSgwLCBNYXRoLm1heCgwLCBwaXBlKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQgPT09IHYgJiYgIWZvcmNlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gLy8gTm8gY2hhbmdlXG5cdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQgIT09IHYpIHtcblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHY7XG5cdFx0XHR0aGlzLmxhc3RSZWFsSW5wdXQgPSB2O1xuXHRcdFx0Ly8gTWFyayBibGFja2xpc3RlZCBpbnB1dHMuXG5cdFx0XHR0aGlzLm9rLmRpc2FibGVkID0gdi5sZW5ndGggPiAwICYmIEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KTtcblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdC8vIE5vIEFqYXg6IGp1c3QgbWFrZSBzdXJlIHRoZSBsaXN0IGlzIGhpZGRlblxuXHRcdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhbXSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCBjbGVhbktleSA9IHYucmVwbGFjZSgvW1xcdTIwMEVcXHUyMDBGXFx1MjAyQS1cXHUyMDJFXS9nLCAnJykucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsICcgJyk7XG5cdFx0XHRjbGVhbktleSA9IHJlcGxhY2VTaG9ydGN1dHMoY2xlYW5LZXksIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRjbGVhbktleSA9IGNsZWFuS2V5LnRyaW0oKTtcblx0XHRcdGlmIChjbGVhbktleS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoW10pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5jYWxsYmFja09iaikge1xuXHRcdFx0XHR0aGlzLmNhbGxiYWNrT2JqLmNhbmNlbGxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBlbmdpbmVOYW1lID0gc3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdID8gdGhpcy5lbmdpbmUgOiAnY29tYmluZWQnO1xuXHRcdFx0ZG9udF9hdXRvY29tcGxldGUgfHw9IHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLm5vQ29tcGxldGlvbjtcblx0XHRcdGlmIChzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS5jYWNoZVtjbGVhbktleV0pIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0uY2FjaGVbY2xlYW5LZXldLCBkb250X2F1dG9jb21wbGV0ZSwgdiwgZW5naW5lTmFtZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHtlbmdpbmVzfSA9IHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdO1xuXHRcdFx0dGhpcy5jYWxsYmFja09iaiA9IHtcblx0XHRcdFx0YWxsVGl0bGVzOiBudWxsLFxuXHRcdFx0XHRjYWxsc01hZGU6IDAsXG5cdFx0XHRcdG5vZkNhbGxzOiBlbmdpbmVzLmxlbmd0aCxcblx0XHRcdFx0bm9Db21wbGV0aW9uOiBkb250X2F1dG9jb21wbGV0ZSxcblx0XHRcdFx0ZW5naW5lTmFtZSxcblx0XHRcdH07XG5cdFx0XHR0aGlzLm1ha2VDYWxscyhlbmdpbmVzLCB0aGlzLmNhbGxiYWNrT2JqLCB2LCBjbGVhbktleSk7XG5cdFx0fVxuXHRcdG1ha2VDYWxscyhlbmdpbmVzLCBjYiwgdiwgY2xlYW5LZXkpIHtcblx0XHRcdGZvciAoY29uc3QgZW5naW5lXyBvZiBlbmdpbmVzKSB7XG5cdFx0XHRcdGNvbnN0IGVuZ2luZSA9IHN1Z2dlc3Rpb25FbmdpbmVzW2VuZ2luZV9dO1xuXHRcdFx0XHRjb25zdCB1cmwgPSBjb25mLndnU2NyaXB0UGF0aCArIGVuZ2luZS51cmkucmVwbGFjZSgvXFwkMS9nLCBlbmNvZGVVUklDb21wb25lbnQoY2xlYW5LZXkpKTtcblx0XHRcdFx0dGhpcy5tYWtlQ2FsbCh1cmwsIGNiLCBlbmdpbmUsIHYsIGNsZWFuS2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c2hvd1N1Z2dlc3Rpb25zKHRpdGxlcywgZG9udEF1dG9jb21wbGV0ZSwgcXVlcnlLZXksIGVuZ2luZU5hbWUpIHtcblx0XHRcdHRoaXMudGV4dC5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5kYWIgPSBudWxsO1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRcdGlmICghdGhpcy5saXN0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIERlZmF1bHQuLi5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5lbmdpbmVOYW1lID0gZW5naW5lTmFtZTtcblx0XHRcdGlmIChlbmdpbmVOYW1lKSB7XG5cdFx0XHRcdGlmICghdGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lTmFtZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAocXVlcnlLZXkpIHtcblx0XHRcdFx0aWYgKHRoaXMubGFzdElucHV0LmluZGV4T2YocXVlcnlLZXkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0aGlzLmxhc3RRdWVyeSAmJlxuXHRcdFx0XHRcdHRoaXMubGFzdElucHV0LmluZGV4T2YodGhpcy5sYXN0UXVlcnkpID09PSAwICYmXG5cdFx0XHRcdFx0dGhpcy5sYXN0UXVlcnkubGVuZ3RoID4gcXVlcnlLZXkubGVuZ3RoXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0UXVlcnkgPSBxdWVyeUtleTtcblx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdGxldCB2ID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHR2ID0gSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA/IGNhcGl0YWxpemUodlswXSkgOiB2WzBdO1xuXHRcdFx0bGV0IHZOb3JtYWxpemVkID0gdjtcblx0XHRcdGNvbnN0IGtub3duVG9FeGlzdCA9IHRpdGxlcyAmJiB0aXRsZXMuZXhpc3RzO1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRpZiAodGl0bGVzKSB7XG5cdFx0XHRcdGlmICh0aXRsZXMubm9ybWFsaXplZCAmJiB2LmluZGV4T2YocXVlcnlLZXkpID09PSAwKSB7XG5cdFx0XHRcdFx0Ly8gV2UgZ290IGJhY2sgYSBkaWZmZXJlbnQgbm9ybWFsaXphdGlvbiB0aGFuIHdoYXQgaXMgaW4gdGhlIGlucHV0IGZpZWxkXG5cdFx0XHRcdFx0dk5vcm1hbGl6ZWQgPSB0aXRsZXMubm9ybWFsaXplZCArIHYuc2xpY2UocXVlcnlLZXkubGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB2TG93ID0gdk5vcm1hbGl6ZWQudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0Ly8gU3RyaXAgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllc1xuXHRcdFx0XHRpZiAoSEMuYmxhY2tsaXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKEhDLmJsYWNrbGlzdC50ZXN0KHRpdGxlc1tpXSkpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aXRsZXMuc29ydCgoYSwgYikgPT4ge1xuXHRcdFx0XHRcdGlmIChhID09PSBiKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGEuaW5kZXhPZihiKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGEgYmVnaW5zIHdpdGggYjogYSA+IGJcblx0XHRcdFx0XHRpZiAoYi5pbmRleE9mKGEpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGIgYmVnaW5zIHdpdGggYTogYSA8IGJcblx0XHRcdFx0XHQvLyBPcGVuc2VhcmNoIG1heSByZXR1cm4gc3R1ZmYgbm90IGJlZ2lubmluZyB3aXRoIHRoZSBzZWFyY2ggcHJlZml4IVxuXHRcdFx0XHRcdGxldCBwcmVmaXhNYXRjaEEgPSBhLmluZGV4T2Yodk5vcm1hbGl6ZWQpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0bGV0IHByZWZpeE1hdGNoQiA9IGIuaW5kZXhPZih2Tm9ybWFsaXplZCkgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRpZiAocHJlZml4TWF0Y2hBICE9PSBwcmVmaXhNYXRjaEIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVmaXhNYXRjaEIgLSBwcmVmaXhNYXRjaEE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIENhc2UtaW5zZW5zaXRpdmUgcHJlZml4IG1hdGNoIVxuXHRcdFx0XHRcdGNvbnN0IGFMb3cgPSBhLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0Y29uc3QgYkxvdyA9IGIudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRwcmVmaXhNYXRjaEEgPSBhTG93LmluZGV4T2YodkxvdykgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRwcmVmaXhNYXRjaEIgPSBiTG93LmluZGV4T2YodkxvdykgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRpZiAocHJlZml4TWF0Y2hBICE9PSBwcmVmaXhNYXRjaEIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVmaXhNYXRjaEIgLSBwcmVmaXhNYXRjaEE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhIDwgYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYiA8IGEpIHtcblx0XHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIFJlbW92ZSBkdXBsaWNhdGVzIGFuZCBzZWxmLXJlZmVyZW5jZXNcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdChpICsgMSA8IHRpdGxlcy5sZW5ndGggJiYgdGl0bGVzW2ldID09PSB0aXRsZXNbaSArIDFdKSB8fFxuXHRcdFx0XHRcdFx0KGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHRpdGxlc1tpXSA9PT0gY29uZi53Z1RpdGxlKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghdGl0bGVzIHx8IHRpdGxlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbmdpbmVOYW1lICYmIHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdICYmICFzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS50ZW1wKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IEhDLmV4aXN0c05vO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgW2ZpcnN0VGl0bGVdID0gdGl0bGVzO1xuXHRcdFx0Y29uc3QgY29tcGxldGVkID0gdGhpcy5hdXRvQ29tcGxldGUoZmlyc3RUaXRsZSwgdiwgdk5vcm1hbGl6ZWQsIGtleSwgZG9udEF1dG9jb21wbGV0ZSk7XG5cdFx0XHRjb25zdCBleGlzdGluZyA9IGNvbXBsZXRlZCB8fCBrbm93blRvRXhpc3QgfHwgZmlyc3RUaXRsZSA9PT0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0aWYgKGVuZ2luZU5hbWUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0gJiYgIXN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLnRlbXApIHtcblx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IGV4aXN0aW5nID8gSEMuZXhpc3RzWWVzIDogSEMuZXhpc3RzTm87XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSBleGlzdGluZztcblx0XHRcdH1cblx0XHRcdGlmIChjb21wbGV0ZWQpIHtcblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSBmaXJzdFRpdGxlO1xuXHRcdFx0XHRpZiAodGl0bGVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gKFJlLSlmaWxsIHRoZSBsaXN0XG5cdFx0XHR3aGlsZSAodGhpcy5saXN0LmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0dGhpcy5saXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG9wdCA9IG1ha2UoJ29wdGlvbicpO1xuXHRcdFx0XHRvcHQuYXBwZW5kKG1ha2UodGl0bGVzW2ldLCB0cnVlKSk7XG5cdFx0XHRcdG9wdC5zZWxlY3RlZCA9IGNvbXBsZXRlZCAmJiBpID09PSAwO1xuXHRcdFx0XHR0aGlzLmxpc3QuYXBwZW5kKG9wdCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRpc3BsYXlMaXN0KCk7XG5cdFx0fVxuXHRcdGRpc3BsYXlMaXN0KCkge1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSB0cnVlO1xuXHRcdFx0aWYgKCF0aGlzLmlzX2FjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IG5vZkl0ZW1zID0gTWF0aC5taW4odGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoLCBIQy5saXN0U2l6ZSk7XG5cdFx0XHRpZiAobm9mSXRlbXMgPD0gMSkge1xuXHRcdFx0XHRub2ZJdGVtcyA9IDI7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3Quc2l6ZSA9IG5vZkl0ZW1zO1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLmFsaWduID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdHRoaXMubGlzdC5zdHlsZS56SW5kZXggPSA1O1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdC8vIENvbXB1dGUgaW5pdGlhbCBsaXN0IHBvc2l0aW9uLiBGaXJzdCB0aGUgaGVpZ2h0LlxuXHRcdFx0Y29uc3QgYW5jaG9yID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdGxldCBsaXN0aCA9IDA7XG5cdFx0XHRpZiAodGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHQvLyBPZmYtc2NyZWVuIGRpc3BsYXkgdG8gZ2V0IHRoZSBoZWlnaHRcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLnRvcCA9IGAke3RoaXMudGV4dC5vZmZzZXRUb3B9cHhgO1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGVbYW5jaG9yXSA9ICctMTAwMDBweCc7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdGxpc3RoID0gdGhpcy5saXN0Lm9mZnNldEhlaWdodDtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsaXN0aCA9IHRoaXMubGlzdC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0XHQvLyBBcHByb3hpbWF0ZSBjYWxjdWxhdGlvbiBvZiBtYXhpbXVtIGxpc3Qgc2l6ZVxuXHRcdFx0bGV0IG1heExpc3RIZWlnaHQgPSBsaXN0aDtcblx0XHRcdGlmIChub2ZJdGVtcyA8IEhDLmxpc3RTaXplKSB7XG5cdFx0XHRcdG1heExpc3RIZWlnaHQgPSAobGlzdGggLyBub2ZJdGVtcykgKiBIQy5saXN0U2l6ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHZpZXdwb3J0ID0gKHdoYXQpID0+IHtcblx0XHRcdFx0aWYgKGlzX3dlYmtpdCAmJiAhZG9jdW1lbnQuZXZhbHVhdGUpIHtcblx0XHRcdFx0XHQvLyBTYWZhcmkgPCAzLjBcblx0XHRcdFx0XHRyZXR1cm4gd2luZG93W2Bpbm5lciR7d2hhdH1gXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBzID0gYGNsaWVudCR7d2hhdH1gO1xuXHRcdFx0XHRpZiAod2luZG93Lm9wZXJhKSB7XG5cdFx0XHRcdFx0cmV0dXJuICQoJ2JvZHknKVswXVtzXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtzXSA6IDApIHx8ICQoJ2JvZHknKVswXVtzXSB8fCAwO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHNjcm9sbF9vZmZzZXQgPSAod2hhdCkgPT4ge1xuXHRcdFx0XHRjb25zdCBzID0gYHNjcm9sbCR7d2hhdH1gO1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtzXSA6IDApIHx8ICQoJ2JvZHknKVswXVtzXSB8fCAwO1xuXHRcdFx0XHRpZiAoaXNfcnRsICYmIHdoYXQgPT09ICdMZWZ0Jykge1xuXHRcdFx0XHRcdC8vIFJUTCBpbmNvbnNpc3RlbmNpZXMuXG5cdFx0XHRcdFx0Ly8gRkY6IDAgYXQgdGhlIGZhciByaWdodCwgdGhlbiBpbmNyZWFzaW5nbHkgbmVnYXRpdmUgdmFsdWVzLlxuXHRcdFx0XHRcdC8vIElFID49IDg6IDAgYXQgdGhlIGZhciByaWdodCwgdGhlbiBpbmNyZWFzaW5nbHkgcG9zaXRpdmUgdmFsdWVzLlxuXHRcdFx0XHRcdC8vIFdlYmtpdDogc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCBhdCB0aGUgZmFyIHJpZ2h0LCB0aGVuIGRvd24gdG8gemVyby5cblx0XHRcdFx0XHQvLyBPcGVyYTogZG9uJ3Qga25vdy4uLlxuXHRcdFx0XHRcdGlmIChyZXN1bHQgPCAwKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSAtcmVzdWx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWlzX3dlYmtpdCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gc2Nyb2xsX29mZnNldCgnV2lkdGgnKSAtIHZpZXdwb3J0KCdXaWR0aCcpIC0gcmVzdWx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBOb3cgYWxsIGhhdmUgd2Via2l0IGJlaGF2aW9yLCBpLmUuIHplcm8gaWYgYXQgdGhlIGxlZnRtb3N0IGVkZ2UuXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IChub2RlKSA9PiB7XG5cdFx0XHRcdC8vIFN0cmlwcGVkLWRvd24gc2ltcGxpZmllZCBwb3NpdGlvbiBmdW5jdGlvbi4gSXQncyBnb29kIGVub3VnaCBmb3Igb3VyIHB1cnBvc2VzLlxuXHRcdFx0XHRpZiAobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcblx0XHRcdFx0XHRjb25zdCBib3ggPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR4OiBNYXRoLnJvdW5kKGJveC5sZWZ0ICsgc2Nyb2xsX29mZnNldCgnTGVmdCcpKSxcblx0XHRcdFx0XHRcdHk6IE1hdGgucm91bmQoYm94LnRvcCArIHNjcm9sbF9vZmZzZXQoJ1RvcCcpKSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0ID0gMDtcblx0XHRcdFx0bGV0IGwgPSAwO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0dCArPSBub2RlLm9mZnNldFRvcCB8fCAwO1xuXHRcdFx0XHRcdGwgKz0gbm9kZS5vZmZzZXRMZWZ0IHx8IDA7XG5cdFx0XHRcdFx0bm9kZSA9IG5vZGUub2Zmc2V0UGFyZW50O1xuXHRcdFx0XHR9IHdoaWxlIChub2RlKTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR4OiBsLFxuXHRcdFx0XHRcdHk6IHQsXG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgdGV4dFBvcyA9IHBvc2l0aW9uKHRoaXMudGV4dCk7XG5cdFx0XHRjb25zdCBubCA9IDA7XG5cdFx0XHRsZXQgbnQgPSAwO1xuXHRcdFx0Ly8gT3BlcmEgOS41IHNvbWVob3cgaGFzIG9mZnNldFdpZHRoID0gMCBoZXJlPz8gVXNlIHRoZSBuZXh0IGJlc3QgdmFsdWUuLi5cblx0XHRcdGxldCBvZmZzZXQgPSAwO1xuXHRcdFx0Y29uc3QgdGV4dEJveFdpZHRoID0gdGhpcy50ZXh0Lm9mZnNldFdpZHRoIHx8IHRoaXMudGV4dC5jbGllbnRXaWR0aDtcblx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS56SW5kZXggPSA1O1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS53aWR0aCA9IGAke3RleHRCb3hXaWR0aH1weGA7XG5cdFx0XHRcdC8vIEZpZ3VyZSBvdXQgdGhlIGhlaWdodCBvZiB0aGlzIHNlbGVjdG9yOiBkaXNwbGF5IGl0IG9mZi1zY3JlZW4sIHRoZW4gaGlkZSBpdCBhZ2Fpbi5cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZVthbmNob3JdID0gJy0xMDAwMHB4Jztcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnRvcCA9ICcwJztcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdFx0XHRvZmZzZXQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9mZnNldEhlaWdodDtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5lbmdpbmVTZWxlY3Rvci5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZVthbmNob3JdID0gYCR7bmx9cHhgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRleHRQb3MueSA8IG1heExpc3RIZWlnaHQgKyBvZmZzZXQgKyAxKSB7XG5cdFx0XHRcdC8vIFRoZSBsaXN0IG1pZ2h0IGV4dGVuZCBiZXlvbmQgdGhlIHVwcGVyIGJvcmRlciBvZiB0aGUgcGFnZS4gTGV0J3MgYXZvaWQgdGhhdCBieSBwbGFjaW5nIGl0XG5cdFx0XHRcdC8vIGJlbG93IHRoZSBpbnB1dCB0ZXh0IGZpZWxkLlxuXHRcdFx0XHRudCA9IHRoaXMudGV4dC5vZmZzZXRIZWlnaHQgKyBvZmZzZXQgKyAxO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS50b3AgPSBgJHt0aGlzLnRleHQub2Zmc2V0SGVpZ2h0fXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bnQgPSAtbGlzdGggLSBvZmZzZXQgLSAxO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS50b3AgPSBgJHstKG9mZnNldCArIDEpfXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0LnN0eWxlLnRvcCA9IGAke250fXB4YDtcblx0XHRcdHRoaXMubGlzdC5zdHlsZS53aWR0aCA9ICcnOyAvLyBObyBmaXhlZCB3aWR0aCAoeWV0KVxuXHRcdFx0dGhpcy5saXN0LnN0eWxlW2FuY2hvcl0gPSBgJHtubH1weGA7XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RW5naW5lKHRoaXMuZW5naW5lTmFtZSk7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0Ly8gU2V0IHRoZSB3aWR0aCBvZiB0aGUgbGlzdFxuXHRcdFx0aWYgKHRoaXMubGlzdC5vZmZzZXRXaWR0aCA8IHRleHRCb3hXaWR0aCkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUud2lkdGggPSBgJHt0ZXh0Qm94V2lkdGh9cHhgO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB0aGUgbGlzdCBpcyB3aWRlciB0aGFuIHRoZSB0ZXh0Ym94OiBtYWtlIHN1cmUgaXQgZml0cyBob3Jpem9udGFsbHkgaW50byB0aGUgYnJvd3NlciB3aW5kb3dcblx0XHRcdGNvbnN0IHNjcm9sbCA9IHNjcm9sbF9vZmZzZXQoJ0xlZnQnKTtcblx0XHRcdGNvbnN0IHZpZXdfdyA9IHZpZXdwb3J0KCdXaWR0aCcpO1xuXHRcdFx0bGV0IHcgPSB0aGlzLmxpc3Qub2Zmc2V0V2lkdGg7XG5cdFx0XHRjb25zdCBsX3BvcyA9IHBvc2l0aW9uKHRoaXMubGlzdCk7XG5cdFx0XHRsZXQgbGVmdCA9IGxfcG9zLng7XG5cdFx0XHRsZXQgcmlnaHQgPSBsZWZ0ICsgdztcblx0XHRcdGlmIChsZWZ0IDwgc2Nyb2xsIHx8IHJpZ2h0ID4gc2Nyb2xsICsgdmlld193KSB7XG5cdFx0XHRcdGlmICh3ID4gdmlld193KSB7XG5cdFx0XHRcdFx0dyA9IHZpZXdfdztcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUud2lkdGggPSBgJHt3fXB4YDtcblx0XHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0XHRsZWZ0ID0gcmlnaHQgLSB3O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyaWdodCA9IGxlZnQgKyB3O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgcmVsYXRpdmVfb2Zmc2V0ID0gMDtcblx0XHRcdFx0aWYgKGxlZnQgPCBzY3JvbGwpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSBzY3JvbGwgLSBsZWZ0O1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJpZ2h0ID4gc2Nyb2xsICsgdmlld193KSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVfb2Zmc2V0ID0gLShyaWdodCAtIHNjcm9sbCAtIHZpZXdfdyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IC1yZWxhdGl2ZV9vZmZzZXQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlbGF0aXZlX29mZnNldCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZVthbmNob3JdID0gYCR7bmwgKyByZWxhdGl2ZV9vZmZzZXR9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGF1dG9Db21wbGV0ZShuZXdWYWwsIGFjdFZhbCwgbm9ybWFsaXplZEFjdFZhbCwga2V5LCBkb250TW9kaWZ5KSB7XG5cdFx0XHRpZiAobmV3VmFsID09PSBhY3RWYWwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9udE1vZGlmeSB8fCB0aGlzLmltZSB8fCAhdGhpcy5jYW5TZWxlY3QoKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB3ZSBjYW4ndCBzZWxlY3QgcHJvcGVybHkgb3IgYW4gSU1FIGNvbXBvc2l0aW9uIGlzIG9uZ29pbmcsIGF1dG9jb21wbGV0aW9uIHdvdWxkIGJlIGEgbWFqb3IgYW5ub3lhbmNlIHRvIHRoZSB1c2VyLlxuXHRcdFx0aWYgKG5ld1ZhbC5pbmRleE9mKGFjdFZhbCkpIHtcblx0XHRcdFx0Ly8gTWF5YmUgaXQnbGwgd29yayB3aXRoIHRoZSBub3JtYWxpemVkIHZhbHVlIChORkMpP1xuXHRcdFx0XHRpZiAobm9ybWFsaXplZEFjdFZhbCAmJiBuZXdWYWwuaW5kZXhPZihub3JtYWxpemVkQWN0VmFsKSA9PT0gMCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmxhc3RSZWFsSW5wdXQgPT09IGFjdFZhbCkge1xuXHRcdFx0XHRcdFx0dGhpcy5sYXN0UmVhbElucHV0ID0gbm9ybWFsaXplZEFjdFZhbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWN0VmFsID0gbm9ybWFsaXplZEFjdFZhbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIEFjdHVhbCBpbnB1dCBpcyBhIHByZWZpeCBvZiB0aGUgbmV3IHRleHQuIEZpbGwgaW4gbmV3IHRleHQsIHNlbGVjdGluZyB0aGUgbmV3bHkgYWRkZWQgc3VmZml4XG5cdFx0XHQvLyBzdWNoIHRoYXQgaXQgY2FuIGJlIGVhc2lseSByZW1vdmVkIGJ5IHR5cGluZyBiYWNrc3BhY2UgaWYgdGhlIHN1Z2dlc3Rpb24gaXMgdW53YW50ZWQuXG5cdFx0XHR0aGlzLnRleHQuZm9jdXMoKTtcblx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IG5ld1ZhbCArIGtleTtcblx0XHRcdHRoaXMuc2V0U2VsZWN0aW9uKGFjdFZhbC5sZW5ndGgsIG5ld1ZhbC5sZW5ndGgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGNhblNlbGVjdCgpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHRoaXMudGV4dC5zZXRTZWxlY3Rpb25SYW5nZSB8fFxuXHRcdFx0XHR0aGlzLnRleHQuY3JlYXRlVGV4dFJhbmdlIHx8XG5cdFx0XHRcdCh0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRleHQuc2VsZWN0aW9uRW5kICE9PSB1bmRlZmluZWQpXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRzZXRTZWxlY3Rpb24oZnJvbSwgdG8pIHtcblx0XHRcdC8vIHRoaXMudGV4dCBtdXN0IGJlIGZvY3VzZWQgKGF0IGxlYXN0IG9uIElFKVxuXHRcdFx0aWYgKCF0aGlzLnRleHQudmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudGV4dC5zZXRTZWxlY3Rpb25SYW5nZSkge1xuXHRcdFx0XHQvLyBlLmcuIGtodG1sXG5cdFx0XHRcdHRoaXMudGV4dC5zZXRTZWxlY3Rpb25SYW5nZShmcm9tLCB0byk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmIChmcm9tID4gdGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvbkVuZCA9IHRvO1xuXHRcdFx0XHRcdHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCA9IGZyb207XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ID0gZnJvbTtcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uRW5kID0gdG87XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy50ZXh0LmNyZWF0ZVRleHRSYW5nZSkge1xuXHRcdFx0XHQvLyBJRVxuXHRcdFx0XHRjb25zdCBuZXdfc2VsZWN0aW9uID0gdGhpcy50ZXh0LmNyZWF0ZVRleHRSYW5nZSgpO1xuXHRcdFx0XHRuZXdfc2VsZWN0aW9uLm1vdmUoJ2NoYXJhY3RlcicsIGZyb20pO1xuXHRcdFx0XHRuZXdfc2VsZWN0aW9uLm1vdmVFbmQoJ2NoYXJhY3RlcicsIHRvIC0gZnJvbSk7XG5cdFx0XHRcdG5ld19zZWxlY3Rpb24uc2VsZWN0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGdldFNlbGVjdGlvbigpIHtcblx0XHRcdGxldCBmcm9tID0gMDtcblx0XHRcdC8vIHRoaXMudGV4dCBtdXN0IGJlIGZvY3VzZWQgKGF0IGxlYXN0IG9uIElFKVxuXHRcdFx0bGV0IHRvID0gMDtcblx0XHRcdGlmICghdGhpcy50ZXh0LnZhbHVlKSB7XG5cdFx0XHRcdC8vIE5vIHRleHQuXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGZyb20gPSB0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQ7XG5cdFx0XHRcdHRvID0gdGhpcy50ZXh0LnNlbGVjdGlvbkVuZDtcblx0XHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uICYmIGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSkge1xuXHRcdFx0XHQvLyBJRVxuXHRcdFx0XHRjb25zdCBybmcgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS5kdXBsaWNhdGUoKTtcblx0XHRcdFx0aWYgKHJuZy5wYXJlbnROb2RlKCkgPT09IHRoaXMudGV4dCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0ZXh0Um5nID0gdGhpcy50ZXh0LmNyZWF0ZVRleHRSYW5nZSgpO1xuXHRcdFx0XHRcdFx0dGV4dFJuZy5tb3ZlKCdjaGFyYWN0ZXInLCAwKTtcblx0XHRcdFx0XHRcdHRleHRSbmcuc2V0RW5kUG9pbnQoJ0VuZFRvRW5kJywgcm5nKTtcblx0XHRcdFx0XHRcdC8vIFdlJ3JlIGluIGEgc2luZ2xlLWxpbmUgaW5wdXQgYm94OiBubyBuZWVkIHRvIGNhcmUgYWJvdXQgSUUncyBzdHJhbmdlXG5cdFx0XHRcdFx0XHQvLyBoYW5kbGluZyBvZiBsaW5lIGVuZHNcblx0XHRcdFx0XHRcdHRvID0gdGV4dFJuZy50ZXh0Lmxlbmd0aDtcblx0XHRcdFx0XHRcdHRleHRSbmcuc2V0RW5kUG9pbnQoJ0VuZFRvU3RhcnQnLCBybmcpO1xuXHRcdFx0XHRcdFx0ZnJvbSA9IHRleHRSbmcudGV4dC5sZW5ndGg7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRmcm9tID0gdGhpcy50ZXh0LnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdHRvID0gZnJvbTsgLy8gQXQgZW5kIG9mIHRleHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN0YXJ0OiBmcm9tLFxuXHRcdFx0XHRlbmQ6IHRvLFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0c2F2ZVZpZXcoKSB7XG5cdFx0XHR0aGlzLmxhc3RTZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuXHRcdH1cblx0XHRwcm9jZXNzS2V5KGV2ZW50KSB7XG5cdFx0XHRsZXQgZGlyID0gMDtcblx0XHRcdHN3aXRjaCAodGhpcy5sYXN0S2V5KSB7XG5cdFx0XHRcdGNhc2UgVVA6XG5cdFx0XHRcdFx0ZGlyID0gLTE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRE9XTjpcblx0XHRcdFx0XHRkaXIgPSAxO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFBHVVA6XG5cdFx0XHRcdFx0ZGlyID0gLUhDLmxpc3RTaXplO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFBHRE9XTjpcblx0XHRcdFx0XHRkaXIgPSBIQy5saXN0U2l6ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBFU0M6XG5cdFx0XHRcdFx0Ly8gSW5oaWJpdCBkZWZhdWx0IGJlaGF2aW9yIChyZXZlcnQgdG8gbGFzdCByZWFsIGlucHV0IGluIEZGOiB3ZSBkbyB0aGF0IG91cnNlbHZlcylcblx0XHRcdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0Ly8gTGlzdCBpcyB2aXNpYmxlLCBzbyB0aGVyZSBhcmUgc3VnZ2VzdGlvbnNcblx0XHRcdFx0XHR0aGlzLmhpZ2hsaWdodFN1Z2dlc3Rpb24oZGlyKTtcblx0XHRcdFx0XHQvLyBLaWxsIHRoZSBldmVudCwgb3RoZXJ3aXNlIHNvbWUgYnJvd3NlcnMgKGUuZy4sIEZpcmVmb3gpIG1heSBhZGRpdGlvbmFsbHkgdHJlYXQgYW4gdXAtYXJyb3dcblx0XHRcdFx0XHQvLyBhcyBcInBsYWNlIHRoZSB0ZXh0IGN1cnNvciBhdCB0aGUgZnJvbnRcIiwgd2hpY2ggd2UgZG9uJ3Qgd2FudCBoZXJlLlxuXHRcdFx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHR0aGlzLmtleUNvdW50IDw9IDEgJiZcblx0XHRcdFx0XHQoIXRoaXMuY2FsbGJhY2tPYmogfHwgdGhpcy5jYWxsYmFja09iai5jYWxsc01hZGUgPT09IHRoaXMuY2FsbGJhY2tPYmoubm9mQ2FsbHMpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdC8vIElmIG5vIHN1Z2dlc3Rpb25zIGRpc3BsYXllZCwgZ2V0IHRoZW0sIHVubGVzcyB3ZSdyZSBhbHJlYWR5IGdldHRpbmcgdGhlbS5cblx0XHRcdFx0XHR0aGlzLnRleHRjaGFuZ2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGhpZ2hsaWdodFN1Z2dlc3Rpb24oZGlyKSB7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucyB8fCAhdGhpcy5saXN0IHx8IHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY3VyciA9IHRoaXMubGlzdC5zZWxlY3RlZEluZGV4O1xuXHRcdFx0bGV0IHRndCA9IC0xO1xuXHRcdFx0aWYgKGRpciA9PT0gMCkge1xuXHRcdFx0XHRpZiAoY3VyciA8IDAgfHwgY3VyciA+PSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGd0ID0gY3Vycjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRndCA9IGN1cnIgPCAwID8gMCA6IGN1cnIgKyBkaXI7XG5cdFx0XHRcdHRndCA9IE1hdGgubWF4KHRndCwgMCk7XG5cdFx0XHRcdGlmICh0Z3QgPj0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dGd0ID0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoIC0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRndCAhPT0gY3VyciB8fCBkaXIgPT09IDApIHtcblx0XHRcdFx0aWYgKGN1cnIgPj0gMCAmJiBjdXJyIDwgdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoICYmIGRpciAhPT0gMCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW2N1cnJdLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5saXN0Lm9wdGlvbnNbdGd0XS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdFx0Y29uc3QgdiA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHRcdGNvbnN0IGNvbXBsZXRlZCA9IHRoaXMuYXV0b0NvbXBsZXRlKHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dCwgdGhpcy5sYXN0UmVhbElucHV0LCBudWxsLCBrZXksIGZhbHNlKTtcblx0XHRcdFx0aWYgKCFjb21wbGV0ZWQgfHwgdGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0ID09PSB0aGlzLmxhc3RSZWFsSW5wdXQpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQudmFsdWUgPSB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQgKyBrZXk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuY2FuU2VsZWN0KCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U2VsZWN0aW9uKHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dC5sZW5ndGgsIHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dC5sZW5ndGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dDtcblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIE1pZ2h0IGJlIHdyb25nIGlmIGZyb20gYSBkYWIgbGlzdC4uLlxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IEhDLmV4aXN0c1llcztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFX1BFTkRJTkc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmVzZXRLZXlTZWxlY3Rpb24oKSB7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucyB8fCAhdGhpcy5saXN0IHx8IHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY3VyciA9IHRoaXMubGlzdC5zZWxlY3RlZEluZGV4O1xuXHRcdFx0aWYgKGN1cnIgPj0gMCAmJiBjdXJyIDwgdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW2N1cnJdLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdFx0Y29uc3QgdiA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHRcdC8vIEVTQyBpcyBoYW5kbGVkIHN0cmFuZ2VseSBieSBzb21lIGJyb3dzZXJzIChlLmcuLCBGRik7IHNvbWVob3cgaXQgcmVzZXRzIHRoZSBpbnB1dCB2YWx1ZSBiZWZvcmVcblx0XHRcdFx0Ly8gb3VyIGV2ZW50IGhhbmRsZXJzIGV2ZXIgZ2V0IGEgY2hhbmNlIHRvIHJ1bi5cblx0XHRcdFx0bGV0IHJlc3VsdCA9IHZbMF0gIT09IHRoaXMubGFzdElucHV0O1xuXHRcdFx0XHRpZiAodlswXSAhPT0gdGhpcy5sYXN0UmVhbElucHV0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdGhpcy5sYXN0UmVhbElucHV0ICsga2V5O1xuXHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmxhc3RSZWFsSW5wdXQ7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG5cdFx0Ly8gVXNlciBjb25maWd1cmF0aW9uczogRG8gdGhpcyBoZXJlLCBjYWxsZWQgZnJvbSB0aGUgb25sb2FkIGhhbmRsZXIsIHNvIHRoYXQgdXNlcnMgY2FuXG5cdFx0Ly8gb3ZlcnJpZGUgaXQgZWFzaWx5IGluIHRoZWlyIG93biB1c2VyIHNjcmlwdCBmaWxlcyBieSBqdXN0IGRlY2xhcmluZyB2YXJpYWJsZXMuXG5cdFx0Y29uc3QgY29uZmlnID0ge307XG5cdFx0SEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdFxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdERvbnRBZGRUb1dhdGNobGlzdFxuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3Q7XG5cdFx0SEMubm9fYXV0b2NvbW1pdCA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X25vX2F1dG9jb21taXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXROb0F1dG9Db21taXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gY29uZi53Z05hbWVzcGFjZU51bWJlciAlIDJcblx0XHRcdFx0XHRcdD8gdHJ1ZVxuXHRcdFx0XHRcdFx0OiBIQy5ub19hdXRvY29tbWl0IC8vIE9uIHRhbGsgbmFtZXNwYWNlIGRlZmF1bHQgYXV0b2NvbW1pdCBvZmZcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXROb0F1dG9Db21taXRcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfbm9fYXV0b2NvbW1pdDtcblx0XHRIQy5kZWxfbmVlZHNfZGlmZiA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X2RlbF9uZWVkc19kaWZmID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0RGVsTmVlZHNEaWZmID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmRlbF9uZWVkc19kaWZmXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0RGVsTmVlZHNEaWZmXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X2RlbF9uZWVkc19kaWZmO1xuXHRcdEhDLnN1Z2dlc3RfZGVsYXkgPSB3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25fZGVsYXkgfHwgY29uZmlnLkhvdENhdFN1Z2dlc3Rpb25EZWxheSB8fCBIQy5zdWdnZXN0X2RlbGF5O1xuXHRcdEhDLmVkaXRib3hfd2lkdGggPSB3aW5kb3cuaG90Y2F0X2VkaXRib3hfd2lkdGggfHwgY29uZmlnLkhvdENhdEVkaXRCb3hXaWR0aCB8fCBIQy5lZGl0Ym94X3dpZHRoO1xuXHRcdEhDLnN1Z2dlc3Rpb25zID0gd2luZG93LmhvdGNhdF9zdWdnZXN0aW9ucyB8fCBjb25maWcuSG90Q2F0U3VnZ2VzdGlvbnMgfHwgSEMuc3VnZ2VzdGlvbnM7XG5cdFx0aWYgKHR5cGVvZiBIQy5zdWdnZXN0aW9ucyAhPT0gJ3N0cmluZycgfHwgIXN1Z2dlc3Rpb25Db25maWdzW0hDLnN1Z2dlc3Rpb25zXSkge1xuXHRcdFx0SEMuc3VnZ2VzdGlvbnMgPSAnY29tYmluZWQnO1xuXHRcdH1cblx0XHRIQy5maXhlZF9zZWFyY2ggPVxuXHRcdFx0d2luZG93LmhvdGNhdF9zdWdnZXN0aW9uc19maXhlZCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdEZpeGVkU3VnZ2VzdGlvbnMgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuZml4ZWRfc2VhcmNoXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0Rml4ZWRTdWdnZXN0aW9uc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9zdWdnZXN0aW9uc19maXhlZDtcblx0XHRIQy5zaW5nbGVfbWlub3IgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3IgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRNaW5vclNpbmdsZUNoYW5nZXMgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuc2luZ2xlX21pbm9yXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X3NpbmdsZV9jaGFuZ2VzX2FyZV9taW5vcjtcblx0XHRIQy5iZ19jaGFuZ2VkID0gd2luZG93LmhvdGNhdF9jaGFuZ2VkX2JhY2tncm91bmQgfHwgY29uZmlnLkhvdENhdENoYW5nZWRCYWNrZ3JvdW5kIHx8IEhDLmJnX2NoYW5nZWQ7XG5cdFx0SEMudXNlX3VwX2Rvd24gPVxuXHRcdFx0d2luZG93LmhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3MgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRVc2VDYXRlZ29yeUxpbmtzID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLnVzZV91cF9kb3duXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3M7XG5cdFx0SEMubGlzdFNpemUgPSB3aW5kb3cuaG90Y2F0X2xpc3Rfc2l6ZSB8fCBjb25maWcuSG90Q2F0TGlzdFNpemUgfHwgSEMubGlzdFNpemU7XG5cdFx0SEMuY2hhbmdlVGFnID0gY29uZmlnLkhvdENhdENoYW5nZVRhZyB8fCAnJztcblx0XHQvLyBUaGUgbmV4dCB3aG9sZSBzaGViYW5nIGlzIG5lZWRlZCwgYmVjYXVzZSBtYW51YWwgdGFncyBnZXQgbm90IHN1Ym1pdHRlZCBleGNlcHQgb2Ygc2F2ZVxuXHRcdGlmIChIQy5jaGFuZ2VUYWcpIHtcblx0XHRcdGNvbnN0IGVGb3JtID0gZG9jdW1lbnQuZWRpdGZvcm07XG5cdFx0XHRjb25zdCBjYXRSZWdFeHAgPSBuZXcgUmVnRXhwKGBeXFxcXFtcXFxcWygke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0bGV0IG9sZFR4dDtcblx0XHRcdC8vIFJldHVybnMgdHJ1ZSBpZiBtaW5vciBjaGFuZ2Vcblx0XHRcdGNvbnN0IGlzTWlub3JDaGFuZ2UgPSAoKSA9PiB7XG5cdFx0XHRcdGxldCBuZXdUeHQgPSBlRm9ybS53cFRleHRib3gxO1xuXHRcdFx0XHRpZiAoIW5ld1R4dCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdUeHQgPSBuZXdUeHQudmFsdWU7XG5cdFx0XHRcdGNvbnN0IG9sZExpbmVzID0gb2xkVHh0Lm1hdGNoKC9eLiokL2dtKTtcblx0XHRcdFx0Y29uc3QgbmV3TGluZXMgPSBuZXdUeHQubWF0Y2goL14uKiQvZ20pO1xuXHRcdFx0XHRsZXQgY0FycjsgLy8gY2hhbmdlc1xuXHRcdFx0XHRjb25zdCBleGNlcHQgPSAoYUFyciwgYkFycikgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdFx0XHRcdGxldCBsQXJyOyAvLyBzbWFsbGVyXG5cdFx0XHRcdFx0bGV0IC8vIGxhcmdlclxuXHRcdFx0XHRcdFx0c0Fycjtcblx0XHRcdFx0XHRpZiAoYUFyci5sZW5ndGggPCBiQXJyLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0bEFyciA9IGJBcnI7XG5cdFx0XHRcdFx0XHRzQXJyID0gYUFycjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bEFyciA9IGFBcnI7XG5cdFx0XHRcdFx0XHRzQXJyID0gYkFycjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBpdGVtIG9mIGxBcnIpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGluZCA9IHNBcnIuaW5kZXhPZihpdGVtKTtcblx0XHRcdFx0XHRcdGlmIChpbmQgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGl0ZW07XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzQXJyLnNwbGljZShpbmQsIDEpOyAvLyBkb24ndCBjaGVjayB0aGlzIGl0ZW0gYWdhaW5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIC4uLnNBcnJdO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRjQXJyID0gZXhjZXB0KG9sZExpbmVzLCBuZXdMaW5lcyk7XG5cdFx0XHRcdGlmIChjQXJyLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjQXJyID0gY0Fyci5maWx0ZXIoKGMpID0+IHtcblx0XHRcdFx0XHRcdGMgPSBjLnRyaW0oKTtcblx0XHRcdFx0XHRcdHJldHVybiBjICYmICFjYXRSZWdFeHAudGVzdChjKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY0Fyci5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRvbGRUeHQgPSBuZXdUeHQ7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGNvbmYud2dBY3Rpb24gPT09ICdzdWJtaXQnICYmXG5cdFx0XHRcdGNvbmYud2dBcnRpY2xlSWQgJiZcblx0XHRcdFx0ZUZvcm0gJiZcblx0XHRcdFx0ZUZvcm0ud3BTdW1tYXJ5ICYmXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aWtpRGlmZicpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y29uc3Qgc3VtID0gZUZvcm0ud3BTdW1tYXJ5O1xuXHRcdFx0XHRjb25zdCBzdW1BID0gZUZvcm0ud3BBdXRvU3VtbWFyeTtcblx0XHRcdFx0aWYgKHN1bS52YWx1ZSAmJiBzdW1BLnZhbHVlID09PSBIQy5jaGFuZ2VUYWcpIHtcblx0XHRcdFx0XHQvLyBIb3RDYXQgZGlmZlxuXHRcdFx0XHRcdC8vIE1ENSBoYXNoIG9mIHRoZSBlbXB0eSBzdHJpbmcsIGFzIEhvdENhdCBlZGl0IGlzIGJhc2VkIG9uIGVtcHR5IHN1bVxuXHRcdFx0XHRcdHN1bUEudmFsdWUgPSBzdW1BLnZhbHVlLnJlcGxhY2UoSEMuY2hhbmdlVGFnLCAnZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UnKTtcblx0XHRcdFx0XHQvLyBBdHRyIGNyZWF0aW9uIGFuZCBldmVudCBoYW5kbGluZyBpcyBub3Qgc2FtZSBpbiBhbGwgKG9sZCkgYnJvd3NlcnMgc28gdXNlICRcblx0XHRcdFx0XHRjb25zdCAkY3QgPSAkKCc8aW5wdXQ+Jylcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdFx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC52YWwoSEMuY2hhbmdlVGFnKTtcblx0XHRcdFx0XHQkKGVGb3JtKS5hcHBlbmQoJGN0KTtcblx0XHRcdFx0XHRvbGRUeHQgPSBlRm9ybS53cFRleHRib3gxLnZhbHVlO1xuXHRcdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BTYXZlXScpLm9uZSgnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoJGN0LnZhbCgpKSB7XG5cdFx0XHRcdFx0XHRcdHN1bS52YWx1ZSA9IHN1bS52YWx1ZS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykgfHwgZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JyksXG5cdFx0XHRcdFx0XHRcdFx0Jydcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb25zdCByZW1vdmVDaGFuZ2VUYWcgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHQkKGVGb3JtLndwVGV4dGJveDEpXG5cdFx0XHRcdFx0XHRcdC5hZGQoc3VtKVxuXHRcdFx0XHRcdFx0XHQub25lKCdpbnB1dCcsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChpc01pbm9yQ2hhbmdlKCkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVtb3ZlQ2hhbmdlVGFnKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkY3QudmFsKCcnKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJlbW92ZUNoYW5nZVRhZygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIE51bWVyaWMgaW5wdXQsIG1ha2Ugc3VyZSB3ZSBoYXZlIGEgbnVtZXJpYyB2YWx1ZVxuXHRcdEhDLmxpc3RTaXplID0gTnVtYmVyLnBhcnNlSW50KEhDLmxpc3RTaXplLCAxMCk7XG5cdFx0aWYgKE51bWJlci5pc05hTihIQy5saXN0U2l6ZSkgfHwgSEMubGlzdFNpemUgPCA1KSB7XG5cdFx0XHRIQy5saXN0U2l6ZSA9IDU7XG5cdFx0fVxuXHRcdEhDLmxpc3RTaXplID0gTWF0aC5taW4oSEMubGlzdFNpemUsIDMwKTsgLy8gTWF4IHNpemVcblx0XHQvLyBMb2NhbGl6ZSBzZWFyY2ggZW5naW5lIG5hbWVzXG5cdFx0Zm9yIChjb25zdCBba2V5LCBzdWdnZXN0aW9uQ29uZmlnXSBvZiBPYmplY3QuZW50cmllcyhzdWdnZXN0aW9uQ29uZmlncykpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmIChrZXkgJiYgZ2V0TWVzc2FnZShgZW5naW5lX25hbWVzLSR7a2V5fWApKSB7XG5cdFx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZy5uYW1lID0gZ2V0TWVzc2FnZShgZW5naW5lX25hbWVzLSR7a2V5fWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIENhdGNoIGJvdGggbmF0aXZlIFJUTCBhbmQgXCJmYWtlZFwiIFJUTCB0aHJvdWdoIFtbTWVkaWFXaWtpOlJ0bC5qc11dXG5cdFx0aXNfcnRsID0gaGFzQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCAncnRsJyk7XG5cdFx0aWYgKCFpc19ydGwpIHtcblx0XHRcdGlmIChkb2N1bWVudC5kZWZhdWx0VmlldyAmJiBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKSB7XG5cdFx0XHRcdC8vIEdlY2tvIGV0Yy5cblx0XHRcdFx0aXNfcnRsID0gZG9jdW1lbnQuZGVmYXVsdFZpZXdcblx0XHRcdFx0XHQuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksIG51bGwpXG5cdFx0XHRcdFx0LmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpO1xuXHRcdFx0fSBlbHNlIGlmICgkKCdib2R5JylbMF0uY3VycmVudFN0eWxlKSB7XG5cdFx0XHRcdC8vIElFLCBoYXMgc3VidGxlIGRpZmZlcmVuY2VzIHRvIGdldENvbXB1dGVkU3R5bGVcblx0XHRcdFx0aXNfcnRsID0gJCgnYm9keScpWzBdLmN1cnJlbnRTdHlsZS5kaXJlY3Rpb247XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBOb3QgZXhhY3RseSByaWdodCwgYnV0IGJlc3QgZWZmb3J0XG5cdFx0XHRcdGlzX3J0bCA9ICQoJ2JvZHknKVswXS5zdHlsZS5kaXJlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRpc19ydGwgPSBpc19ydGwgPT09ICdydGwnO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgY2FuX2VkaXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYS1lZGl0JykgIT09IG51bGw7XG5cdH07XG5cdC8vIExlZ2FjeSBzdHVmZlxuXHRjb25zdCBjbG9zZUZvcm0gPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gQ2xvc2UgYWxsIG9wZW4gZWRpdG9ycyB3aXRob3V0IHJlZGlyZWN0IHJlc29sdXRpb24gYW5kIG90aGVyIGFzeW5jaHJvbm91cyBzdHVmZi5cblx0XHRmb3IgKGNvbnN0IGVkaXQgb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXQuc3RhdGUgPT09IE9QRU4pIHtcblx0XHRcdFx0ZWRpdC5jYW5jZWwoKTtcblx0XHRcdH0gZWxzZSBpZiAoZWRpdC5zdGF0ZSA9PT0gQ0hBTkdFX1BFTkRJTkcpIHtcblx0XHRcdFx0ZWRpdC5zYW5pdGl6ZUlucHV0KCk7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gZWRpdC50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGxldCBrZXkgPSBudWxsO1xuXHRcdFx0XHRpZiAodmFsdWUubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFssIGtleV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB2ID0gdmFsdWVbMF0ucmVwbGFjZSgvXy9nLCAnICcpLnRyaW0oKTtcblx0XHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0ZWRpdC5jYW5jZWwoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRDYXRlZ29yeSA9IHY7XG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50S2V5ID0ga2V5O1xuXHRcdFx0XHRcdGVkaXQuY3VycmVudEV4aXN0cyA9IHRoaXMuaW5wdXRFeGlzdHM7XG5cdFx0XHRcdFx0ZWRpdC5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBzZXR1cF91cGxvYWQgPSAoKSA9PiB7XG5cdFx0b25VcGxvYWQgPSB0cnVlO1xuXHRcdC8vIEFkZCBhbiBlbXB0eSBjYXRlZ29yeSBiYXIgYXQgdGhlIGVuZCBvZiB0aGUgdGFibGUgY29udGFpbmluZyB0aGUgZGVzY3JpcHRpb24sIGFuZCBjaGFuZ2UgdGhlIG9uc3VibWl0IGhhbmRsZXIuXG5cdFx0bGV0IGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWh0bWxmb3JtLWRlc2NyaXB0aW9uJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cERlc3RGaWxlXScpO1xuXHRcdGlmICghaXApIHtcblx0XHRcdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cERlc3RGaWxlXScpO1xuXHRcdFx0d2hpbGUgKGlwICYmIGlwLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICd0YWJsZScpIHtcblx0XHRcdFx0aXAgPSBpcC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWlwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHJldXBsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cEZvclJlVXBsb2FkXScpO1xuXHRcdGNvbnN0IGRlc3RGaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cERlc3RGaWxlXScpO1xuXHRcdGlmICgocmV1cGxvYWQgJiYgISFyZXVwbG9hZC52YWx1ZSkgfHwgKGRlc3RGaWxlICYmIChkZXN0RmlsZS5kaXNhYmxlZCB8fCBkZXN0RmlsZS5yZWFkT25seSkpKSB7XG5cdFx0XHRyZXR1cm47IC8vIHJlLXVwbG9hZCBmb3JtLi4uXG5cdFx0fVxuXHRcdC8vIEluc2VydCBhIHRhYmxlIHJvdyB3aXRoIHR3byBmaWVsZHMgKGxhYmVsIGFuZCBlbXB0eSBjYXRlZ29yeSBiYXIpXG5cdFx0Y29uc3QgbGFiZWxDZWxsID0gbWFrZSgndGQnKTtcblx0XHRjb25zdCBsaW5lQ2VsbCA9IG1ha2UoJ3RkJyk7XG5cdFx0Ly8gQ3JlYXRlIHRoZSBjYXRlZ29yeSBsaW5lXG5cdFx0Y2F0TGluZSA9IG1ha2UoJ2RpdicpO1xuXHRcdGNhdExpbmUuY2xhc3NOYW1lID0gJ2NhdGxpbmtzJztcblx0XHRjYXRMaW5lLmlkID0gJ2NhdGxpbmtzJztcblx0XHRjYXRMaW5lLnN0eWxlLnRleHRBbGlnbiA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0Ly8gV2UnbGwgYmUgaW5zaWRlIGEgdGFibGUgcm93LiBNYWtlIHN1cmUgdGhhdCB3ZSBkb24ndCBoYXZlIG1hcmdpbnMgb3Igc3RyYW5nZSBib3JkZXJzLlxuXHRcdGNhdExpbmUuc3R5bGUubWFyZ2luID0gJzAnO1xuXHRcdGNhdExpbmUuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuXHRcdGxpbmVDZWxsLmFwcGVuZChjYXRMaW5lKTtcblx0XHQvLyBDcmVhdGUgdGhlIGxhYmVsXG5cdFx0Y29uc3QgbGFiZWwgPSBudWxsO1xuXHRcdGlmIChsYWJlbCkge1xuXHRcdFx0bGFiZWxDZWxsLmlkID0gJ2hvdGNhdExhYmVsVHJhbnNsYXRlZCc7XG5cdFx0XHRsYWJlbENlbGwuYXBwZW5kKGxhYmVsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGFiZWxDZWxsLmlkID0gJ2hvdGNhdExhYmVsJztcblx0XHRcdGxhYmVsQ2VsbC5hcHBlbmQobWFrZShnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyksIHRydWUpKTtcblx0XHR9XG5cdFx0bGFiZWxDZWxsLmNsYXNzTmFtZSA9ICdtdy1sYWJlbCc7XG5cdFx0bGFiZWxDZWxsLnN0eWxlLnRleHRBbGlnbiA9ICdyaWdodCc7XG5cdFx0bGFiZWxDZWxsLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnbWlkZGxlJztcblx0XHQvLyBDaGFuZ2UgdGhlIG9uc3VibWl0IGhhbmRsZXJcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwbG9hZCcpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy11cGxvYWQtZm9ybScpO1xuXHRcdGlmIChmb3JtKSB7XG5cdFx0XHRjb25zdCBuZXdSb3cgPSBpcC5pbnNlcnRSb3coLTEpO1xuXHRcdFx0bmV3Um93LmFwcGVuZChsYWJlbENlbGwpO1xuXHRcdFx0bmV3Um93LmFwcGVuZChsaW5lQ2VsbCk7XG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChvbGRTdWJtaXQsIC4uLmFyZ3MpID0+IHtcblx0XHRcdFx0cmV0dXJuICgoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGRvX3N1Ym1pdCA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKG9sZFN1Ym1pdCkge1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBvbGRTdWJtaXQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1ldmFsXG5cdFx0XHRcdFx0XHRcdGRvX3N1Ym1pdCA9IHdpbmRvdy5ldmFsKG9sZFN1Ym1pdCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG9sZFN1Ym1pdCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdGRvX3N1Ym1pdCA9IG9sZFN1Ym1pdC5hcHBseShmb3JtLCBbb2xkU3VibWl0LCAuLi5hcmdzXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghZG9fc3VibWl0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsb3NlRm9ybSgpO1xuXHRcdFx0XHRcdC8vIENvcHkgdGhlIGNhdGVnb3JpZXNcblx0XHRcdFx0XHRjb25zdCBlYiA9XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPXdwVXBsb2FkRGVzY3JpcHRpb25dJykgfHxcblx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cERlc2MnKTtcblx0XHRcdFx0XHRsZXQgYWRkZWRPbmUgPSBmYWxzZTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0ID0gZWRpdG9yLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdFx0XHRcdGlmICghdCkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnN0IGtleSA9IGVkaXRvci5jdXJyZW50S2V5O1xuXHRcdFx0XHRcdFx0Y29uc3QgbmV3X2NhdCA9IGBbWyR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3R9JHtrZXkgPyBgfCR7a2V5fWAgOiAnJ31dXWA7XG5cdFx0XHRcdFx0XHQvLyBPbmx5IGFkZCBpZiBub3QgYWxyZWFkeSBwcmVzZW50XG5cdFx0XHRcdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRcdCc8bm8nLmNvbmNhdCgnd2lraT4nLCBTdHJpbmcucmF3YChcXHN8XFxTKSo/PC9ub2AsICd3aWtpJywgJz4nKSxcblx0XHRcdFx0XHRcdFx0J2cnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0Y29uc3QgX2NsZWFuZWRUZXh0ID0gZWIudmFsdWUucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csICcnKS5yZXBsYWNlKG5vd2lraVJlZ2V4KTtcblx0XHRcdFx0XHRcdGlmICghZmluZF9jYXRlZ29yeShfY2xlYW5lZFRleHQsIHQsIHRydWUpKSB7XG5cdFx0XHRcdFx0XHRcdGViLnZhbHVlICs9IGBcXG4ke25ld19jYXR9YDtcblx0XHRcdFx0XHRcdFx0YWRkZWRPbmUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYWRkZWRPbmUpIHtcblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBcInN1YnN0OnVuY1wiIGFkZGVkIGJ5IEZsaW5mbyBpZiBpdCBkaWRuJ3QgZmluZCBjYXRlZ29yaWVzXG5cdFx0XHRcdFx0XHRjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ3t7JCcuY29uY2F0KCdzdWJzdDonKS5jb25jYXQoJ3VuY319JyksICdnJyk7XG5cdFx0XHRcdFx0XHRlYi52YWx1ZSA9IGViLnZhbHVlLnJlcGxhY2UocmVnZXgsICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0pKGZvcm0ub25zdWJtaXQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRsZXQgY2xlYW5lZFRleHQgPSBudWxsO1xuXHRjb25zdCBpc09uUGFnZSA9ICh7Zmlyc3RDaGlsZH0pID0+IHtcblx0XHRpZiAoZmlyc3RDaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgY2F0VGl0bGUgPSB0aXRsZShmaXJzdENoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcblx0XHRpZiAoIWNhdFRpdGxlKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2F0VGl0bGUgPSBjYXRUaXRsZS5zbGljZShjYXRUaXRsZS5pbmRleE9mKCc6JykgKyAxKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0aWYgKEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdChjYXRUaXRsZSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCByZXN1bHQgPSB7XG5cdFx0XHR0aXRsZTogY2F0VGl0bGUsXG5cdFx0XHRtYXRjaDogWycnLCAnJywgJyddLFxuXHRcdH07XG5cdFx0aWYgKHBhZ2VUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRpZiAoY2xlYW5lZFRleHQgPT09IG51bGwpIHtcblx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRjbGVhbmVkVGV4dCA9IHBhZ2VUZXh0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCAnJykucmVwbGFjZShub3dpa2lSZWdleCwgJycpO1xuXHRcdH1cblx0XHRyZXN1bHQubWF0Y2ggPSBmaW5kX2NhdGVnb3J5KGNsZWFuZWRUZXh0LCBjYXRUaXRsZSwgdHJ1ZSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0bGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG5cdGxldCBzZXR1cFRpbWVvdXQgPSBudWxsO1xuXHRjb25zdCBmaW5kQnlDbGFzcyA9IChzY29wZSwgdGFnLCBjbGFzc05hbWUpID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSAkKHNjb3BlKS5maW5kKGAke3RhZ30uJHtjbGFzc05hbWV9YCk7XG5cdFx0cmV0dXJuIHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID4gMCA/IHJlc3VsdFswXSA6IG51bGw7XG5cdH07XG5cdGNvbnN0IHNldHVwID0gKGFkZGl0aW9uYWxXb3JrKSA9PiB7XG5cdFx0aWYgKGluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRpZiAoc2V0dXBUaW1lb3V0KSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHNldHVwVGltZW91dCk7XG5cdFx0XHRzZXR1cFRpbWVvdXQgPSBudWxsO1xuXHRcdH1cblx0XHQvLyBGaW5kIHRoZSBjYXRlZ29yeSBiYXIsIG9yIGNyZWF0ZSBhbiBlbXB0eSBvbmUgaWYgdGhlcmUgaXNuJ3Qgb25lLiBUaGVuIGFkZCAtLystIGxpbmtzIGFmdGVyXG5cdFx0Ly8gZWFjaCBjYXRlZ29yeSwgYW5kIGFkZCB0aGUgKyBsaW5rLlxuXHRcdGNhdExpbmUgfHw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1ub3JtYWwtY2F0bGlua3MnKTsgLy8gU3BlY2lhbDpVcGxvYWRcblx0XHRjb25zdCBoaWRkZW5DYXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWhpZGRlbi1jYXRsaW5rcycpO1xuXHRcdGlmICghY2F0TGluZSkge1xuXHRcdFx0bGV0IGZvb3RlciA9IG51bGw7XG5cdFx0XHRpZiAoIWhpZGRlbkNhdHMpIHtcblx0XHRcdFx0Zm9vdGVyID0gZmluZEJ5Q2xhc3MoZG9jdW1lbnQsICdkaXYnLCAncHJpbnRmb290ZXInKTtcblx0XHRcdFx0aWYgKCFmb290ZXIpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gLy8gRG9uJ3Qga25vdyB3aGVyZSB0byBpbnNlcnQgdGhlIGNhdGVnb3J5IGxpbmVcblx0XHRcdH1cblx0XHRcdGNhdExpbmUgPSBtYWtlKCdkaXYnKTtcblx0XHRcdGNhdExpbmUuaWQgPSAnbXctbm9ybWFsLWNhdGxpbmtzJztcblx0XHRcdGNhdExpbmUuc3R5bGUudGV4dEFsaWduID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdC8vIEFkZCBhIGxhYmVsXG5cdFx0XHRjb25zdCBsYWJlbCA9IG1ha2UoJ2EnKTtcblx0XHRcdGxhYmVsLmhyZWYgPSBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnU3BlY2lhbDpDYXRlZ29yaWVzJyk7XG5cdFx0XHRsYWJlbC50aXRsZSA9IGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKTtcblx0XHRcdGxhYmVsLmFwcGVuZChtYWtlKGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKSwgdHJ1ZSkpO1xuXHRcdFx0Y2F0TGluZS5hcHBlbmQobGFiZWwpO1xuXHRcdFx0Y2F0TGluZS5hcHBlbmQobWFrZSgnOicsIHRydWUpKTtcblx0XHRcdC8vIEluc2VydCB0aGUgbmV3IGNhdGVnb3J5IGxpbmVcblx0XHRcdGxldCBjb250YWluZXIgPSBoaWRkZW5DYXRzID8gaGlkZGVuQ2F0cy5wYXJlbnROb2RlIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGxpbmtzJyk7XG5cdFx0XHRpZiAoIWNvbnRhaW5lcikge1xuXHRcdFx0XHRjb250YWluZXIgPSBtYWtlKCdkaXYnKTtcblx0XHRcdFx0Y29udGFpbmVyLmlkID0gJ2NhdGxpbmtzJztcblx0XHRcdFx0Zm9vdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgZm9vdGVyLm5leHRTaWJsaW5nKTtcblx0XHRcdH1cblx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY2F0bGlua3Mgbm9wcmludCc7XG5cdFx0XHRjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0aWYgKGhpZGRlbkNhdHMpIHtcblx0XHRcdFx0aGlkZGVuQ2F0cy5iZWZvcmUoY2F0TGluZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kKGNhdExpbmUpO1xuXHRcdFx0fVxuXHRcdH0gLy8gZW5kIGlmIGNhdExpbmUgZXhpc3RzXG5cdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0Y2F0TGluZS5kaXIgPSAncnRsJztcblx0XHR9XG5cdFx0Ly8gQ3JlYXRlIGVkaXRvcnMgZm9yIGFsbCBleGlzdGluZyBjYXRlZ29yaWVzXG5cdFx0Y29uc3QgY3JlYXRlRWRpdG9ycyA9IChsaW5lLCBpc19oaWRkZW4pID0+IHtcblx0XHRcdGxldCBpO1xuXHRcdFx0bGV0IGNhdHMgPSBsaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG5cdFx0XHRpZiAoY2F0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdG5ld0RPTSA9IHRydWU7XG5cdFx0XHRcdGxpbmUgPSBjYXRzWzBdLnBhcmVudE5vZGU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjYXRzID0gbGluZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBDb3B5IGNhdHMsIG90aGVyd2lzZSBpdCdsbCBhbHNvIG1hZ2ljYWxseSBjb250YWluIG91ciBhZGRlZCBzcGFucyBhcyBpdCBpcyBhIGxpdmUgY29sbGVjdGlvbiFcblx0XHRcdGNvbnN0IGNvcHlDYXRzID0gQXJyYXkuZnJvbSh7XG5cdFx0XHRcdGxlbmd0aDogY2F0cy5sZW5ndGgsXG5cdFx0XHR9KTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvcHlDYXRzW2ldID0gY2F0c1tpXTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjb3B5Q2F0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCB0ZXN0ID0gaXNPblBhZ2UoY29weUNhdHNbaV0pO1xuXHRcdFx0XHRpZiAodGVzdCAhPT0gbnVsbCAmJiB0ZXN0Lm1hdGNoICE9PSBudWxsICYmIGxpbmUpIHtcblx0XHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IobGluZSwgY29weUNhdHNbaV0sIHRlc3QudGl0bGUsIHRlc3QubWF0Y2hbMl0sIGlzX2hpZGRlbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjb3B5Q2F0cy5sZW5ndGggPiAwID8gY29weUNhdHMuYXQoLTEpIDogbnVsbDtcblx0XHR9O1xuXHRcdGNvbnN0IGxhc3RTcGFuID0gY3JlYXRlRWRpdG9ycyhjYXRMaW5lLCBmYWxzZSk7XG5cdFx0Ly8gQ3JlYXRlIG9uZSB0byBhZGQgYSBuZXcgY2F0ZWdvcnlcblx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IobmV3RE9NID8gY2F0TGluZS5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpWzBdIDogY2F0TGluZSwgbnVsbCwgbnVsbCwgbGFzdFNwYW4gIT09IG51bGwsIGZhbHNlKTtcblx0XHRpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRpZiAocGFnZVRleHQgIT09IG51bGwgJiYgaGlkZGVuQ2F0cykge1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0aGlkZGVuQ2F0cy5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjcmVhdGVFZGl0b3JzKGhpZGRlbkNhdHMsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQW5kIGZpbmFsbHkgYWRkIHRoZSBcIm11bHRpLW1vZGVcIiBzcGFuLiAoRG8gdGhpcyBhdCB0aGUgZW5kLCBvdGhlcndpc2UgaXQgZW5kcyB1cCBpbiB0aGUgbGlzdCBhYm92ZS4pXG5cdFx0XHRjb25zdCBlbmFibGVNdWx0aSA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdGVuYWJsZU11bHRpLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0ZW5hYmxlTXVsdGkuZGlyID0gJ3J0bCc7XG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lLmluc2VydEJlZm9yZShlbmFibGVNdWx0aSwgY2F0TGluZS5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcblx0XHRcdGVuYWJsZU11bHRpLmFwcGVuZChtYWtlKCdcXHUwMEEwJywgdHJ1ZSkpOyAvLyBuYnNwXG5cdFx0XHRtdWx0aVNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRlbmFibGVNdWx0aS5hcHBlbmQobXVsdGlTcGFuKTtcblx0XHRcdG11bHRpU3Bhbi5pbm5lckhUTUwgPSBgKDxhPiR7SEMuYWRkbXVsdGl9PC9hPilgO1xuXHRcdFx0Y29uc3QgW2xpbmtdID0gbXVsdGlTcGFuLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0fSk7XG5cdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgnbXVsdGlfdG9vbHRpcCcpO1xuXHRcdFx0bGluay5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cdFx0fVxuXHRcdGNsZWFuZWRUZXh0ID0gbnVsbDtcblx0XHRpZiAoYWRkaXRpb25hbFdvcmsgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuXHRcdFx0YWRkaXRpb25hbFdvcmsoKTtcblx0XHR9XG5cdFx0bXcuaG9vaygnaG90Y2F0LnJlYWR5JykuZmlyZSgpOyAvLyBFeGVjdXRlIHJlZ2lzdGVyZWQgY2FsbGJhY2sgZnVuY3Rpb25zXG5cdFx0JCgnYm9keScpLnRyaWdnZXIoJ2hvdGNhdFNldHVwQ29tcGxldGVkJyk7XG5cdH07XG5cdGNvbnN0IGNyZWF0ZUNvbW1pdEZvcm0gPSAoKSA9PiB7XG5cdFx0aWYgKGNvbW1pdEZvcm0pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgZm9ybUNvbnRhaW5lciA9IG1ha2UoJ2RpdicpO1xuXHRcdGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kKGZvcm1Db250YWluZXIpO1xuXHRcdGZvcm1Db250YWluZXIuaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwiaG90Y2F0Q29tbWl0Rm9ybVwiIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIGFjdGlvbj1cIiR7XG5cdFx0XHRjb25mLndnU2NyaXB0XG5cdFx0fT90aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChjb25mLndnUGFnZU5hbWUpfSZhY3Rpb249c3VibWl0XCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BUZXh0Ym94MVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm1vZGVsXCIgdmFsdWU9XCIke2NvbmYud2dQYWdlQ29udGVudE1vZGVsfVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZvcm1hdFwiIHZhbHVlPVwidGV4dC94LXdpa2lcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFN1bW1hcnlcIiB2YWx1ZT1cIlwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwid3BNaW5vcmVkaXRcIiB0aXRsZT1cIndwTWlub3JlZGl0XCIgdmFsdWU9XCIxXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ3cFdhdGNodGhpc1wiIHRpdGxlPVwid3BXYXRjaHRoaXNcIiB2YWx1ZT1cIjFcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEF1dG9TdW1tYXJ5XCIgdmFsdWU9XCJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRWRpdHRpbWVcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFN0YXJ0dGltZVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRGlmZlwiIHZhbHVlPVwid3BEaWZmXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwib2xkaWRcIiB2YWx1ZT1cIjBcIj5cblx0XHQ8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJoY0NvbW1pdFwiIHZhbHVlPVwiaGNDb21taXRcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEVkaXRUb2tlblwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwVWx0aW1hdGVQYXJhbVwiIHZhbHVlPVwiMVwiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwQ2hhbmdlVGFnc1wiPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCLihLPwnZKy4pml8J2TivCdk4PwnZK+8J2SuOKEtPCdkrnihK9cIiBuYW1lPVwid3BVbmljb2RlQ2hlY2tcIj5cblx0XHQ8L2Zvcm0+YDtcblx0XHRjb21taXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdGNhdENvbW1pdEZvcm0nKTtcblx0fTtcblx0Y29uc3QgZ2V0UGFnZSA9ICgpID0+IHtcblx0XHQvLyBXZSBrbm93IHdlIGhhdmUgYW4gYXJ0aWNsZSBoZXJlLlxuXHRcdGlmIChjb25mLndnQXJ0aWNsZUlkKSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cmF3Y29udGludWU6ICcnLFxuXHRcdFx0XHR0aXRsZXM6IGNvbmYud2dQYWdlTmFtZSxcblx0XHRcdFx0cHJvcDogWydpbmZvJywgJ3JldmlzaW9ucyddLFxuXHRcdFx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnLCAnaWRzJ10sXG5cdFx0XHRcdHJ2bGltaXQ6ICcxJyxcblx0XHRcdFx0cnZzdGFydGlkOiBjb25mLndnQ3VyUmV2aXNpb25JZCxcblx0XHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0XHRtZXRhOiBbJ3NpdGVpbmZvJ10sXG5cdFx0XHR9O1xuXHRcdFx0SEMuc3RhcnQgPSAoZGF0YSkgPT4ge1xuXHRcdFx0XHRzZXRQYWdlKGRhdGEpO1xuXHRcdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHRcdH07XG5cdFx0XHRhcGkuZ2V0KHBhcmFtcykudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRIQy5zdGFydChkYXRhKTtcblx0XHRcdH0pO1xuXHRcdFx0c2V0dXBUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdFx0fSwgNDAwMCk7IC8vIDQgc2VjLCBqdXN0IGluIGNhc2UgZ2V0dGluZyB0aGUgd2lraXRleHQgdGFrZXMgbG9uZ2VyLlxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEb2Vzbid0IGV4aXN0IHlldC4gRGlzYWJsZSBvbiBub24tZXhpc3RpbmcgVXNlciBwYWdlcy5cblx0XHRcdGlmIChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAyKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHBhZ2VUZXh0ID0gJyc7XG5cdFx0XHRwYWdlVGltZSA9IG51bGw7XG5cdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHNldFN0YXRlID0gKHN0YXRlKSA9PiB7XG5cdFx0Y29uc3QgY2F0cyA9IHN0YXRlLnNwbGl0KCdcXG4nKTtcblx0XHRpZiAoY2F0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAoaW5pdGlhbGl6ZWQgJiYgZWRpdG9ycy5sZW5ndGggPT09IDEgJiYgZWRpdG9yc1swXS5pc0FkZENhdGVnb3J5KSB7XG5cdFx0XHQvLyBJbnNlcnQgbmV3IHNwYW5zIGFuZCBjcmVhdGUgbmV3IGVkaXRvcnMgZm9yIHRoZW0uXG5cdFx0XHRjb25zdCBuZXdTcGFucyA9IFtdO1xuXHRcdFx0Y29uc3QgYmVmb3JlID0gZWRpdG9ycy5sZW5ndGggPT09IDEgPyBlZGl0b3JzWzBdLnNwYW4gOiBudWxsO1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2F0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoY2F0c1tpXS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgY2F0ID0gY2F0c1tpXS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSBjYXQubGVuZ3RoID4gMSA/IGNhdFsxXSA6IG51bGw7XG5cdFx0XHRcdFtjYXRdID0gY2F0O1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke2NhdH1gKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShjYXQsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGNhdDtcblx0XHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdGlmICghaSkge1xuXHRcdFx0XHRcdGNhdExpbmUuaW5zZXJ0QmVmb3JlKG1ha2UoJyAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRiZWZvcmUuYmVmb3JlKHNwYW4pO1xuXHRcdFx0XHRpZiAoYmVmb3JlICYmIGkgKyAxIDwgY2F0cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKG1ha2UoJyB8ICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5ld1NwYW5zW25ld1NwYW5zLmxlbmd0aF0gPSB7XG5cdFx0XHRcdFx0ZWxlbWVudDogc3Bhbixcblx0XHRcdFx0XHR0aXRsZTogY2F0LFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8vIEFuZCBjaGFuZ2UgdGhlIGxhc3Qgb25lLi4uXG5cdFx0XHRpZiAoYmVmb3JlKSB7XG5cdFx0XHRcdGJlZm9yZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShtYWtlKCcgfCAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBuZXdTcGFucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IoY2F0TGluZSwgbmV3U3BhbnNbaV0uZWxlbWVudCwgbmV3U3BhbnNbaV0udGl0bGUsIG5ld1NwYW5zW2ldLmtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcblx0XHRsZXQgcmVzdWx0ID0gbnVsbDtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRsZXQgdGV4dCA9IGVkaXRvci5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRjb25zdCBrZXkgPSBlZGl0b3IuY3VycmVudEtleTtcblx0XHRcdGlmICh0ZXh0ICYmIHRleHQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRpZiAoa2V5ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dGV4dCArPSBgfCR7a2V5fWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHRleHQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IGBcXG4ke3RleHR9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRjb25zdCByZWFsbHlfcnVuID0gKCkgPT4ge1xuXHRcdGluaXRpYWxpemUoKTtcblx0XHRpZiAoXG5cdFx0XHQhSEMudXBsb2FkX2Rpc2FibGVkICYmXG5cdFx0XHRjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAtMSAmJlxuXHRcdFx0Y29uZi53Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ1VwbG9hZCcgJiZcblx0XHRcdGNvbmYud2dVc2VyTmFtZVxuXHRcdCkge1xuXHRcdFx0c2V0dXBfdXBsb2FkKCk7XG5cdFx0XHRzZXR1cCgoKSA9PiB7XG5cdFx0XHRcdC8vIENoZWNrIGZvciBzdGF0ZSByZXN0b3JhdGlvbiBvbmNlIHRoZSBzZXR1cCBpcyBkb25lIG90aGVyd2lzZSwgYnV0IGJlZm9yZSBzaWduYWxsaW5nIHNldHVwIGNvbXBsZXRpb25cblx0XHRcdFx0aWYgKHdpbmRvdy5VcGxvYWRGb3JtICYmIFVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlKSB7XG5cdFx0XHRcdFx0VXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUgPSBzZXRTdGF0ZShVcGxvYWRGb3JtLnByZXZpb3VzX2hvdGNhdF9zdGF0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFjb25mLndnSXNBcnRpY2xlIHx8XG5cdFx0XHRcdGNvbmYud2dBY3Rpb24gIT09ICd2aWV3JyB8fFxuXHRcdFx0XHRwYXJhbSgnZGlmZicpICE9PSBudWxsIHx8XG5cdFx0XHRcdHBhcmFtKCdvbGRpZCcpICE9PSBudWxsIHx8XG5cdFx0XHRcdCFjYW5fZWRpdCgpIHx8XG5cdFx0XHRcdEhDLmRpc2FibGUoKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGdldFBhZ2UoKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJ1biA9ICgpID0+IHtcblx0XHRpZiAoSEMuc3RhcnRlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRIQy5zdGFydGVkID0gdHJ1ZTtcblx0XHRyZWFsbHlfcnVuKCk7XG5cdH07XG5cdC8vIEV4cG9ydCBsZWdhY3kgZnVuY3Rpb25zXG5cdHdpbmRvdy5ob3RjYXRfZ2V0X3N0YXRlID0gKCkgPT4ge1xuXHRcdHJldHVybiBnZXRTdGF0ZSgpO1xuXHR9O1xuXHR3aW5kb3cuaG90Y2F0X3NldF9zdGF0ZSA9IChzdGF0ZSkgPT4ge1xuXHRcdHJldHVybiBzZXRTdGF0ZShzdGF0ZSk7XG5cdH07XG5cdHdpbmRvdy5ob3RjYXRfY2xvc2VfZm9ybSA9ICgpID0+IHtcblx0XHRjbG9zZUZvcm0oKTtcblx0fTtcblx0SEMucnVuV2hlblJlYWR5ID0gKGNhbGxiYWNrKSA9PiB7XG5cdFx0Ly8gcnVuIHVzZXItcmVnaXN0ZXJlZCBjb2RlIG9uY2UgSG90Q2F0IGlzIGZ1bGx5IHNldCB1cCBhbmQgcmVhZHkuXG5cdFx0bXcuaG9vaygnaG90Y2F0LnJlYWR5JykuYWRkKGNhbGxiYWNrKTtcblx0fTtcblx0Ly8gUnVuIGFzIHNvb24gYXMgcG9zc2libGUuIFRoaXMgdmFyaWVzIGRlcGVuZGluZyBvbiBNZWRpYVdpa2kgdmVyc2lvbjtcblx0Ly8gd2luZG93J3MgJ2xvYWQnIGV2ZW50IGlzIGFsd2F5cyBzYWZlLCBidXQgdXN1YWxseSB3ZSBjYW4gZG8gYmV0dGVyIHRoYW4gdGhhdC5cblx0aWYgKGNvbmYud2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdVcGxvYWQnKSB7XG5cdFx0Ly8gUmVsb2FkIEhvdENhdCBhZnRlciAoVkUpIGVkaXRzIChidWcgVDEwMzI4NSlcblx0XHRtdy5ob29rKCdwb3N0RWRpdCcpLmFkZCgoKSA9PiB7XG5cdFx0XHQvLyBSZXNldCBIb3RDYXQgaW4gY2FzZSB0aGlzIGlzIGEgc29mdCByZWxvYWQgKGUuZy4gVmlzdWFsRWRpdG9yIGVkaXQpLCB1bmxlc3MgdGhlIGNhdGVnb3JpZXNcblx0XHRcdC8vIHdlcmUgbm90IHJlLXJlbmRlcmVkIGFuZCBvdXIgaW50ZXJmYWNlIGlzIHN0aWxsIHRoZXJlIChlLmcuIERpc2N1c3Npb25Ub29scyBlZGl0KVxuXHRcdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRsaW5rcyAuaG90Y2F0bGluaycpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNhdExpbmUgPSBudWxsO1xuXHRcdFx0ZWRpdG9ycyA9IFtdO1xuXHRcdFx0aW5pdGlhbGl6ZWQgPSBmYWxzZTtcblx0XHRcdEhDLnN0YXJ0ZWQgPSBmYWxzZTtcblx0XHRcdHJ1bigpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdlIGNhbiBzYWZlbHkgdHJpZ2dlciBqdXN0IGFmdGVyIHVzZXIgY29uZmlndXJhdGlvbiBpcyBsb2FkZWQuXG5cdC8vIFVzZSBhbHdheXMoKSBpbnN0ZWFkIG9mIHRoZW4oKSB0byBhbHNvIHN0YXJ0IEhvdENhdCBpZiB0aGUgdXNlciBtb2R1bGUgaGFzIHByb2JsZW1zLlxuXHQkKHJ1bik7XG59KSgpO1xuIiwgImNvbnN0IGdldE1lc3NhZ2UgPSAoa2V5OiBzdHJpbmcsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nID0+IHtcblx0a2V5ID0gYGhvdGNhdC0ke2tleX1gO1xuXHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0cmV0dXJuIG13Lm1lc3NhZ2Uoa2V5LCAuLi5hcmdzKS5wbGFpbigpO1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBob3RDYXRNZXNzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3JlbW92ZWQnOiAn5bey56e76ZmkW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdGVtcGxhdGVfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e1tbQ2F0ZWdvcnk6JDFdXX19Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2FkZGVkJzogJ+W3sua3u+WKoFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQvLyAkMiBpcyB0aGUgbmV3IGtleVxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfa2V5Y2hhbmdlJzogJ+W3suioree9rltbQ2F0ZWdvcnk6JDFdXeeahOaWsOaOkuW6j+Wtl++8mlwiJDJcIicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9ub3RGb3VuZCc6ICfliIbpoZ7igJwkMeKAneaykuacieaJvuWIsCcsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9leGlzdHMnOiAn5YiG6aGe4oCcJDHigJ3lt7LntpPlrZjlnKjvvIzmspLmnInmt7vliqDjgIInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVzb2x2ZWQnOiAn77yI6YeN5a6a5ZCRW1tDYXRlZ29yeTokMV1d5bey6JmV55CG77yJJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdW5jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e3VuY2F0ZWdvcml6ZWR9fScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gcHJlZml4IHRvIHRoZSBlZGl0IHN1bW1hcnkuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXByZWZpeCc6ICfkvb/nlKhbW0g6SE9UQ0FUfEhvdENhdF1dJyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBhcHBlbmQgdG8gdGhlIGVkaXQgc3VtbWFyeS4gTmFtZWQgJ3VzaW5nJyBmb3IgaGlzdG9yaWNhbCByZWFzb25zLiBJZiB5b3UgcHJlZmVyXG5cdFx0XHQvLyB0byBoYXZlIGEgbWFya2VyIGF0IHRoZSBmcm9udCwgdXNlIHByZWZpeCBhbmQgc2V0IHRoaXMgdG8gdGhlIGVtcHR5IHN0cmluZy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdXNpbmcnOiAnJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfY2hhbmdlJzogJyQx5YCL5YiG6aGeJyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5OyBpLmUuLCBhIGNhdGVnb3J5IHRoYXQgc2hvdWxkIG5vdCBjb250YWluXG5cdFx0XHQvLyBhbnkgaXRlbXMsIGJ1dCB0aGF0IGNvbnRhaW5zIGxpbmtzIHRvIG90aGVyIGNhdGVnb3JpZXMgd2hlcmUgc3R1ZmYgc2hvdWxkIGJlIGNhdGVnb3JpemVkLiBJZiB5b3UgZG9uJ3QgaGF2ZVxuXHRcdFx0Ly8gdGhhdCBjb25jZXB0IG9uIHlvdXIgd2lraSwgc2V0IGl0IHRvIGJsYW5rIHN0cmluZy4gVXNlIGJsYW5rcywgbm90IHVuZGVyc2NvcmVzLlxuXHRcdFx0J2hvdGNhdC1kaXNhbWJpZ19jYXRlZ29yeSc6ICcnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgKHNvZnQpIHJlZGlyZWN0IHRvIHNvbWUgb3RoZXIgY2F0ZWdvcnkgZGVmaW5lZCBieSBhIGxpbmtcblx0XHRcdC8vIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LiBJZiB5b3VyIHdpa2kgZG9lc24ndCBoYXZlIHNvZnQgY2F0ZWdvcnkgcmVkaXJlY3RzLCBzZXQgdGhpcyB0byBudWxsLlxuXHRcdFx0Ly8gSWYgYSBzb2Z0LXJlZGlyZWN0ZWQgY2F0ZWdvcnkgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBsaW5rIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LCBpdCdzIGNvbnNpZGVyZWRcblx0XHRcdC8vIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnkgaW5zdGVhZC5cblx0XHRcdCdob3RjYXQtcmVkaXJfY2F0ZWdvcnknOiAn5bey6YeN5a6a5ZCR55qE5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2VwYXJhdG9yJzogJzsgJyxcblx0XHRcdC8vICQxIGlzIHJlcGxhY2VkIGJ5IGEgbnVtYmVyLiBJZiB5b3VyIGxhbmd1YWdlIGhhcyBzZXZlcmFsIHBsdXJhbCBmb3JtcyAoYy5mLiBbWzplbndpa2k6RHVhbCAoZ3JhbW1hdGljYWwgZm9ybSldXSksXG5cdFx0XHQvLyB5b3UgY2FuIHNldCB0aGlzIHRvIGFuIGFycmF5IG9mIHN0cmluZ3Mgc3VpdGFibGUgZm9yIHBhc3NpbmcgdG8gbXcubGFuZ3VhZ2UuY29uZmlnUGx1cmFsKCkuXG5cdFx0XHQvLyBJZiB0aGF0IGZ1bmN0aW9uIGRvZXNuJ3QgZXhpc3QsIEhvdENhdCB3aWxsIHNpbXBseSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGxhc3Rcblx0XHRcdC8vIGVudHJ5IGluIHRoZSBhcnJheS5cblx0XHRcdC8vIERlZmF1bHRzIHRvICdbWycgKyBjYXRlZ29yeV9jYW5vbmljYWwgKyAnOiQxXV0nLiBDYW4gYmUgb3ZlcnJpZGRlbiBpZiBpbiB0aGUgc2hvcnQgZWRpdCBzdW1tYXJpZXNcblx0XHRcdC8vIG5vdCB0aGUgc3RhbmRhcmQgY2F0ZWdvcnkgbmFtZSBzaG91bGQgYmUgdXNlZCBidXQsIHNheSwgYSBzaG9ydGVyIG5hbWVzcGFjZSBhbGlhcy4gJDEgaXMgcmVwbGFjZWRcblx0XHRcdC8vIGJ5IGEgY2F0ZWdvcnkgbmFtZS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJzogJyQxJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNvbW1pdCc6ICflhLLlrZgnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtb2snOiAn56K65a6aJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhbmNlbCc6ICflj5bmtognLFxuXHRcdFx0Ly8gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9lcnJvcic6XG5cdFx0XHRcdCfnhKHms5Xlvp7kvLrmnI3lmajlj5blvpfpoIHpnaLmloflrZfjgILlm6DmraTvvIzmgqjnmoTliIbpoZ7orormm7TnhKHms5XlhLLlrZjjgILmiJHlgJHngrrmraTkuI3kvr/ooajnpLrmirHmrYnjgIInLFxuXHRcdFx0Ly8gUGx1cmFsIG9mIGNhdGVnb3J5X2Nhbm9uaWNhbC5cblx0XHRcdCdob3RjYXQtY2F0ZWdvcmllcyc6ICfliIbpoZ4nLFxuXHRcdFx0Ly8gTmFtZXMgZm9yIHRoZSBzZWFyY2ggZW5naW5lc1xuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc2VhcmNoaW5kZXgnOiAn5pCc5bCL57Si5byVJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhZ2VsaXN0JzogJ+mggemdouWIl+ihqCcsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1jb21iaW5lZCc6ICflkIjkvbXmkJzlsIsnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc3ViY2F0JzogJ+WtkOWIhumhnicsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYXJlbnRjYXQnOiAn5LiK5bGk5YiG6aGeJyxcblx0XHRcdC8vIFRoZSB0b29sdGlwcyBmb3IgdGhlIGFib3ZlIGxpbmtzXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWNoYW5nZSc6ICfkv67mlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZW1vdmUnOiAn56e76ZmkJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtYWRkJzogJ+WinuWKoOS4gOWAi+aWsOWIhumhnicsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlc3RvcmUnOiAn5b6p5Y6f6K6K5pu0Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdW5kbyc6ICflvqnljp/orormm7QnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1kb3duJzogJ+aJk+mWi+S7peS/ruaUueS4pumhr+ekuuWtkOWIhumhnicsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVwJzogJ+aJk+mWi+S7peS/ruaUueS4pumhr+ekuuS4iuWxpOWIhumhnicsXG5cdFx0XHQvLyBUb29sdGlwIGZvciB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGlua1xuXHRcdFx0J2hvdGNhdC1tdWx0aV90b29sdGlwJzogJ+S/ruaUueWkmuWAi+WIhumhnicsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3JlbW92ZWQnOiAn5bey56e76ZmkW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdGVtcGxhdGVfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e1tbQ2F0ZWdvcnk6JDFdXX19Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2FkZGVkJzogJ+W3sua3u+WKoFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQvLyAkMiBpcyB0aGUgbmV3IGtleVxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfa2V5Y2hhbmdlJzogJ+W3suiuvue9rltbQ2F0ZWdvcnk6JDFdXeeahOaWsOaOkuW6j+Wtl++8mlwiJDJcIicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9ub3RGb3VuZCc6ICfliIbnsbvigJwkMeKAneayoeacieaJvuWIsCcsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9leGlzdHMnOiAn5YiG57G74oCcJDHigJ3lt7Lnu4/lrZjlnKjvvIzmsqHmnInmt7vliqDjgIInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVzb2x2ZWQnOiAn77yI6YeN5a6a5ZCRW1tDYXRlZ29yeTokMV1d5bey5aSE55CG77yJJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdW5jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaR7e3VuY2F0ZWdvcml6ZWR9fScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gcHJlZml4IHRvIHRoZSBlZGl0IHN1bW1hcnkuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXByZWZpeCc6ICfkvb/nlKhbW0g6SE9UQ0FUfEhvdENhdF1dJyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBhcHBlbmQgdG8gdGhlIGVkaXQgc3VtbWFyeS4gTmFtZWQgJ3VzaW5nJyBmb3IgaGlzdG9yaWNhbCByZWFzb25zLiBJZiB5b3UgcHJlZmVyXG5cdFx0XHQvLyB0byBoYXZlIGEgbWFya2VyIGF0IHRoZSBmcm9udCwgdXNlIHByZWZpeCBhbmQgc2V0IHRoaXMgdG8gdGhlIGVtcHR5IHN0cmluZy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtdXNpbmcnOiAnJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfY2hhbmdlJzogJyQx5Liq5YiG57G7Jyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5OyBpLmUuLCBhIGNhdGVnb3J5IHRoYXQgc2hvdWxkIG5vdCBjb250YWluXG5cdFx0XHQvLyBhbnkgaXRlbXMsIGJ1dCB0aGF0IGNvbnRhaW5zIGxpbmtzIHRvIG90aGVyIGNhdGVnb3JpZXMgd2hlcmUgc3R1ZmYgc2hvdWxkIGJlIGNhdGVnb3JpemVkLiBJZiB5b3UgZG9uJ3QgaGF2ZVxuXHRcdFx0Ly8gdGhhdCBjb25jZXB0IG9uIHlvdXIgd2lraSwgc2V0IGl0IHRvIGJsYW5rIHN0cmluZy4gVXNlIGJsYW5rcywgbm90IHVuZGVyc2NvcmVzLlxuXHRcdFx0J2hvdGNhdC1kaXNhbWJpZ19jYXRlZ29yeSc6ICcnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgKHNvZnQpIHJlZGlyZWN0IHRvIHNvbWUgb3RoZXIgY2F0ZWdvcnkgZGVmaW5lZCBieSBhIGxpbmtcblx0XHRcdC8vIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LiBJZiB5b3VyIHdpa2kgZG9lc24ndCBoYXZlIHNvZnQgY2F0ZWdvcnkgcmVkaXJlY3RzLCBzZXQgdGhpcyB0byBudWxsLlxuXHRcdFx0Ly8gSWYgYSBzb2Z0LXJlZGlyZWN0ZWQgY2F0ZWdvcnkgY29udGFpbnMgbW9yZSB0aGFuIG9uZSBsaW5rIHRvIGFub3RoZXIgbm9uLWJsYWNrbGlzdGVkIGNhdGVnb3J5LCBpdCdzIGNvbnNpZGVyZWRcblx0XHRcdC8vIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnkgaW5zdGVhZC5cdFx0XHQnaG90Y2F0LXJlZGlyX2NhdGVnb3J5JzogJ+W3sumHjeWumuWQkeeahOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNlcGFyYXRvcic6ICc7ICcsXG5cdFx0XHQvLyAkMSBpcyByZXBsYWNlZCBieSBhIG51bWJlci4gSWYgeW91ciBsYW5ndWFnZSBoYXMgc2V2ZXJhbCBwbHVyYWwgZm9ybXMgKGMuZi4gW1s6ZW53aWtpOkR1YWwgKGdyYW1tYXRpY2FsIGZvcm0pXV0pLFxuXHRcdFx0Ly8geW91IGNhbiBzZXQgdGhpcyB0byBhbiBhcnJheSBvZiBzdHJpbmdzIHN1aXRhYmxlIGZvciBwYXNzaW5nIHRvIG13Lmxhbmd1YWdlLmNvbmZpZ1BsdXJhbCgpLlxuXHRcdFx0Ly8gSWYgdGhhdCBmdW5jdGlvbiBkb2Vzbid0IGV4aXN0LCBIb3RDYXQgd2lsbCBzaW1wbHkgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBsYXN0XG5cdFx0XHQvLyBlbnRyeSBpbiB0aGUgYXJyYXkuXG5cdFx0XHQvLyBEZWZhdWx0cyB0byAnW1snICsgY2F0ZWdvcnlfY2Fub25pY2FsICsgJzokMV1dJy4gQ2FuIGJlIG92ZXJyaWRkZW4gaWYgaW4gdGhlIHNob3J0IGVkaXQgc3VtbWFyaWVzXG5cdFx0XHQvLyBub3QgdGhlIHN0YW5kYXJkIGNhdGVnb3J5IG5hbWUgc2hvdWxkIGJlIHVzZWQgYnV0LCBzYXksIGEgc2hvcnRlciBuYW1lc3BhY2UgYWxpYXMuICQxIGlzIHJlcGxhY2VkXG5cdFx0XHQvLyBieSBhIGNhdGVnb3J5IG5hbWUuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZSc6ICckMScsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jb21taXQnOiAn5L+d5a2YJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW9rJzogJ+ehruWumicsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYW5jZWwnOiAn5Y+W5raIJyxcblx0XHRcdC8vIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfZXJyb3InOlxuXHRcdFx0XHQn5peg5rOV5LuO5pyN5Yqh5Zmo5Y+W5b6X6aG16Z2i5paH5a2X44CC5Zug5q2k77yM5oKo55qE5YiG57G75pu05pS55peg5rOV5L+d5a2Y44CC5oiR5Lus5Li65q2k5LiN5L6/6KGo56S65oqx5q2J44CCJyxcblx0XHRcdC8vIFBsdXJhbCBvZiBjYXRlZ29yeV9jYW5vbmljYWwuXG5cdFx0XHQnaG90Y2F0LWNhdGVnb3JpZXMnOiAn5YiG57G7Jyxcblx0XHRcdC8vIE5hbWVzIGZvciB0aGUgc2VhcmNoIGVuZ2luZXNcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXNlYXJjaGluZGV4JzogJ+aQnOe0oue0ouW8lScsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYWdlbGlzdCc6ICfpobXpnaLliJfooagnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtY29tYmluZWQnOiAn5ZCI5bm25pCc57SiJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXN1YmNhdCc6ICflrZDliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFyZW50Y2F0JzogJ+S4iuWxguWIhuexuycsXG5cdFx0XHQvLyBUaGUgdG9vbHRpcHMgZm9yIHRoZSBhYm92ZSBsaW5rc1xuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1jaGFuZ2UnOiAn5L+u5pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVtb3ZlJzogJ+enu+mZpCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWFkZCc6ICflop7liqDkuIDkuKrmlrDliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZXN0b3JlJzogJ+aSpOmUgOabtOaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVuZG8nOiAn5pKk6ZSA5pu05pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtZG93bic6ICfmiZPlvIDku6Xkv67mlLnlubbmmL7npLrlrZDliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11cCc6ICfmiZPlvIDku6Xkv67mlLnlubbmmL7npLrkuIrlsYLliIbnsbsnLFxuXHRcdFx0Ly8gVG9vbHRpcCBmb3IgdGhlIFwiZW50ZXIgbXVsdGktbW9kZVwiIGxpbmtcblx0XHRcdCdob3RjYXQtbXVsdGlfdG9vbHRpcCc6ICfkv67mlLnlpJrkuKrliIbnsbsnLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2hvdENhdE1lc3NhZ2VzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEscUJBQXFCOztBQ0RsQyxJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7QUFHeEIsSUFBTUMsUUFBeUNDLGVBQWM7QUFDNUQsVUFBQSxHQUFPSCxrQkFBQUksV0FBVUQsU0FBUztBQUMzQjs7Q0NNQyxTQUFTRSxjQUFjO0FBQ3ZCLE1BQ0NDLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CLE1BQU0sS0FDdkNDLE9BQU9DLGtDQUNQLENBQUNDLFNBQVNDLGNBQWMsa0JBQWtCLEdBQ3pDO0FBQ0Q7RUFDRDtBQUNBLFFBQU1DLE1BQU1YLE1BQU0saUJBQWlCO0FBQ25DLFFBQU1ZLHdCQUF3QjtBQUM5QixRQUFNQyxXQUFXO0FBQ2pCLFFBQU1DLGtCQUFrQjtBQUN4QixRQUFNQyxjQUFjWCxHQUFHWSxRQUFRVixJQUFJUSxlQUFlO0FBT2xELFFBQU1HLGNBQWVDLGVBQThCO0FBQ2xELFdBQU9DLEVBQUUsUUFBUSxFQUFFQyxLQUFLLFNBQUEsV0FBQUMsT0FBb0JILFdBQVMsR0FBQSxFQUFBRyxPQUFJeEIsa0JBQWtCLENBQUUsRUFBRXlCLEtBQUssR0FBRztFQUN4RjtBQUNBLFFBQU1DLG1CQUFtQkEsQ0FBQ0MsVUFBK0JDLE1BQWNDLFVBQXVDO0FBQzdHLFdBQU9QLEVBQUUsT0FBTyxFQUNkUSxTQUFTLFdBQVcsRUFDcEJDLE9BQ0FULEVBQUUsT0FBTyxFQUNQQyxLQUFLLFNBQUEsR0FBQUMsT0FBWUssT0FBSyxnQkFBQSxDQUFnQixFQUN0Q0csSUFBSTtNQUNKLGNBQWM7TUFDZEMsU0FBUztJQUNWLENBQUMsRUFDQUYsT0FBT1QsRUFBRSxLQUFLLEVBQUVTLE9BQU9YLFlBQVlRLElBQUksRUFBRUksSUFBSSxlQUFlLE9BQU8sR0FBR0wsUUFBUSxDQUFDLENBQ2xGO0VBQ0Y7QUFHQUwsSUFBRSxNQUFNLEVBQUVZLElBQUksMkJBQTJCLHFCQUFxQixTQUFVQyxHQUFHO0FBQUEsUUFBQUM7QUFDMUUsUUFBSWxCLGdCQUFnQixZQUFZO0FBQy9CLGFBQU87SUFDUjtBQUVBLFVBQU1tQixPQUFPO0FBRWIsVUFBTUMsVUFBQUYsd0JBQVVDLEtBQUtFLFdBQW1DQyxXQUFBLFFBQUFKLDBCQUFBLFNBQUEsU0FBeENBLHNCQUErQ0ssUUFBUTFCLHVCQUF1QixFQUFFO0FBQ2hHLFVBQU0yQixhQUdGLENBQUM7QUFDTCxRQUFJQztBQUNKLFFBQUlDO0FBQ0osUUFBSUM7QUFDSixRQUFJQztBQUNKLFVBQU1DLFdBQVdBLE1BQU07QUFDckJWLFdBQUtXLFVBQStCUixRQUFBLCtEQUFBaEIsT0FDNEJhLEtBQUtXLFVBQStCUixLQUFLO0FBRXpHSCxXQUFLRSxXQUFtQ0MsUUFBUUY7SUFDbEQ7QUFDQSxVQUFNVyxlQUFnQkMsU0FBZ0I7QUFDckMzQyxTQUFHWSxRQUFRZ0MsSUFBSWxDLGlCQUFpQmlDLEtBQUssS0FBSyxLQUFLLEtBQUssQ0FBQztJQUN0RDtBQUNBUixlQUFXLGFBQWEsSUFBSSxXQUFZO0FBQUEsVUFBQVU7QUFDdkNMLGVBQVM7QUFDVCxXQUFBSyx3QkFBS1Qsb0JBQW9CLENBQUMsT0FBQSxRQUFBUywwQkFBQSxVQUFyQkEsc0JBQTZDQyxTQUFTO0FBQzFESixxQkFBYSxNQUFNO01BQ3BCO0FBQ0EzQixRQUFFLElBQUksRUFBRWdDLE9BQU8sT0FBTztJQUN2QjtBQUNBWixlQUFXLGFBQWEsSUFBSSxXQUFZO0FBQUEsVUFBQWE7QUFDdkMsV0FBQUEseUJBQUtaLG9CQUFvQixDQUFDLE9BQUEsUUFBQVksMkJBQUEsVUFBckJBLHVCQUE2Q0YsU0FBUztBQUMxREoscUJBQWEsVUFBVTtNQUN4QjtBQUNBM0IsUUFBRSxJQUFJLEVBQUVnQyxPQUFPLE9BQU87SUFDdkI7QUFDQSxVQUFNRSxXQUFXLFNBQTZCQyxJQUFrQjtBQUMvREEsU0FBR0MsZUFBZTtBQUNsQixVQUFJZCxlQUFlZSxTQUFTLG1CQUFtQixHQUFHO0FBQ2pEO01BQ0Q7QUFDQSxZQUFNQyxNQUEyQnRDLEVBQUUsSUFBSTtBQUN2Q3NDLFVBQUlDLElBQUksT0FBTyxFQUFFcEMsS0FBSyxjQUFjO0FBQ3BDbUIscUJBQWVkLFNBQVMsbUJBQW1CO0FBQzNDLFlBQU1nQyxTQUE0QjtRQUNqQ0MsUUFBUTtRQUNSQyxRQUFRO1FBQ1JDLE9BQUEsUUFBQXpDLE9BQWVqQixHQUFHQyxPQUFPQyxJQUFJLFlBQVksR0FBQyxZQUFBO1FBQzFDeUQsU0FBQSxHQUFBMUMsT0FBWVIsVUFBUSw4QkFBQTtRQUNwQm1ELFlBQVlQLElBQUlRLEtBQUssU0FBUztNQUMvQjtBQUNBLFlBQU1DLFdBQVlDLGNBQXdEO0FBQ3pFLFlBQUksQ0FBQ0EsVUFBVTtBQUNkO1FBQ0Q7QUFDQSxZQUFJQSxTQUFTQyxPQUFPO0FBQ25CLGVBQUtoRSxHQUFHaUUsT0FBQSxtREFBQWhELE9BQzRDOEMsU0FBU0MsTUFBTUUsTUFBSSxJQUFBLEVBQUFqRCxPQUFLOEMsU0FBU0MsTUFBTUcsSUFBSSxHQUM5RjtZQUFDQyxLQUFLO1lBQWVDLE1BQU07VUFBTyxDQUNuQztBQUNBaEIsY0FBSW5DLEtBQUssYUFBYTtRQUN2QixPQUFPO0FBQ05tQyxjQUFJbkMsS0FBSyxPQUFPO0FBQ2hCbUIseUJBQWVpQyxRQUFRO1FBQ3hCO01BQ0Q7QUFDQSxXQUFLL0QsSUFBSWdFLGNBQWMsUUFBUWhCLE1BQU0sRUFBRWlCLEtBQUtWLFFBQVE7SUFDckQ7QUFNQSxVQUFNVyxTQUFTQSxNQUFNO0FBQ3BCckMsNEJBQXNCckIsRUFBRSxTQUFTLEVBQy9CQyxLQUFLO1FBQ0xxRCxNQUFNO1FBQ05LLElBQUk7TUFDTCxDQUFDLEVBQ0FDLEdBQUcsVUFBVSxXQUFZO0FBQ3pCLFlBQUssS0FBMEI3QixTQUFTO0FBQ3ZDVCx5QkFBZXVDLE9BQU87UUFDdkIsT0FBTztBQUNOdkMseUJBQWVpQyxRQUFRO1FBQ3hCO01BQ0QsQ0FBQztBQUNGaEMsc0JBQWdCdkIsRUFBRSxNQUFNO0FBQ3hCQSxRQUFFLE1BQU0sRUFDTlMsT0FDQVQsRUFBRSxLQUFLLEVBQ0xDLEtBQUssUUFBUSxHQUFHLEVBQ2hCRSxLQUFLLHVCQUF1QixFQUM1QjJDLEtBQUssV0FBVyxpREFBaUQsRUFDakVjLEdBQUcsU0FBUzFCLFFBQVEsQ0FDdkIsRUFDQzRCLFNBQVN2QyxhQUFhO0FBQ3hCdkIsUUFBRSxNQUFNLEVBQ05TLE9BQ0FULEVBQUUsS0FBSyxFQUNMQyxLQUFLLFFBQVEsR0FBRyxFQUNoQkUsS0FBSywwRUFBMEUsRUFDL0UyQyxLQUFLLFdBQVcsMkNBQTJDLEVBQzNEYyxHQUFHLFNBQVMxQixRQUFRLENBQ3ZCLEVBQ0M0QixTQUFTdkMsYUFBYTtBQUN4QkQsdUJBQWlCbEIsaUJBQ2hCSixFQUFFLFFBQVEsRUFBRUcsS0FBSyx3Q0FBd0MsRUFBRU0sT0FBT2MsYUFBYSxHQUMvRSxnQkFDQSxvQkFDRDtBQUNBQyxnQkFBVXhCLEVBQUUsT0FBTyxFQUNqQlMsT0FDQVQsRUFBRSxRQUFRLEVBQ1JVLElBQUk7UUFDSixhQUFhO1FBQ2IsZUFBZTtNQUNoQixDQUFDLEVBQ0FELE9BQ0FULEVBQUUsUUFBUSxFQUFFRyxLQUFLLHdCQUF3QixFQUFFTyxJQUFJO1FBQzlDLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkJxRCxTQUFTO01BQ1YsQ0FBQyxHQUNEL0QsRUFBRSxRQUFRLEVBQUVHLEtBQUssSUFBSSxDQUN0QixDQUNGLEVBQ0NNLE9BQ0EsUUFDQVkscUJBQ0FyQixFQUFFLFNBQVMsRUFBRUMsS0FBSyxPQUFPLGlDQUFpQyxFQUFFRSxLQUFLLGlCQUFpQixHQUNsRixNQUNELEVBQ0NNLE9BQU94QixHQUFHK0UsS0FBS0MsT0FBTyxJQUFJLEtBQUszQyxlQUFlNEMsS0FBSyxDQUFDO0FBQ3REMUMsY0FBUVEsT0FBTztRQUNkbUMsT0FBTztRQUNQQyxlQUFlO1FBQ2Z6QixPQUFPO1FBQ1AwQixPQUFPO1FBQ1BDLFNBQVNsRDtRQUNUbUQsT0FBT0EsTUFBTTtBQUNaLGdCQUFNQyxRQUFReEUsRUFBRSxNQUFNO0FBQ3RCd0UsZ0JBQU1DLEtBQUssbUJBQW1CLEVBQUVDLFFBQVEsUUFBUTtRQUNqRDtRQUNBQyxPQUFPO0FBQ04sZ0JBQU1DLFdBQVc1RSxFQUFFLElBQUksRUFBRTZFLE9BQU8sRUFBRUosS0FBSyw4QkFBOEI7QUFDckVHLG1CQUFTRSxHQUFHLENBQUMsRUFBRUMsT0FBTztZQUNyQkMsT0FBTztjQUNOQyxTQUFTO1lBQ1Y7VUFDRCxDQUFDO0FBQ0RMLG1CQUFTRSxHQUFHLENBQUMsRUFBRUMsT0FBTztZQUNyQkMsT0FBTztjQUNOQyxTQUFTO1lBQ1Y7VUFDRCxDQUFDO1FBQ0Y7TUFDRCxDQUFDO0lBQ0Y7QUFFQSxRQUFJakUsV0FBWUQsS0FBS0UsV0FBbUNDLE9BQU87QUFDOUQsVUFBSTlCLE9BQU84Riw0QkFBNEJ0RixnQkFBZ0IsUUFBUTtBQUM5RDZCLGlCQUFTO0FBQ1QsZUFBTztNQUNSO0FBQ0FaLFFBQUV1QixlQUFlO0FBQ2pCc0IsYUFBTztJQUNSO0FBQ0EsV0FBTztFQUNSLENBQUM7QUFFRCxRQUFNeUIsVUFBVW5GLEVBQUUsS0FBSyxFQUNyQkMsS0FBSztJQUNMbUYsTUFBTTtJQUNOekMsT0FBTztFQUNSLENBQUMsRUFDQWxDLE9BQU8sS0FBSyxFQUNaTixLQUFLLHNCQUFzQjtBQUM3QmdGLFVBQVF2QixHQUFHLFNBQVMsU0FBVS9DLEdBQUc7QUFDaENBLE1BQUV1QixlQUFlO0FBQ2pCLFVBQU1FLE1BQU10QyxFQUFFLElBQUk7QUFDbEJzQyxRQUFJQyxJQUFJLE9BQU87QUFDZixVQUFNOEMsU0FBVUMsWUFBbUI7QUFDbEMsVUFBSSxDQUFDQSxRQUFRO0FBQ1o7TUFDRDtBQUNBaEQsVUFBSW5DLEtBQUssUUFBUTtBQUNqQixZQUFNQSxPQUFPbUYsT0FBT25FLFFBQVExQix1QkFBdUIsRUFBRTtBQUNyRCxVQUFJVSxTQUFTbUYsUUFBUTtBQUNwQmhELFlBQUluQyxLQUFLLHFCQUFxQjtBQUM5QjtNQUNEO0FBQ0EsWUFBTXFDLFNBQTRCO1FBQ2pDckM7UUFDQXNDLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxPQUFPMUQsR0FBR0MsT0FBT0MsSUFBSSxZQUFZO1FBQ2pDeUQsU0FBQSxHQUFBMUMsT0FBWVIsVUFBUSxtR0FBQTtRQUNwQjZGLFVBQVU7TUFDWDtBQUNBLFlBQU14QyxXQUFZQyxjQUF3RDtBQUN6RSxZQUFJLENBQUNBLFVBQVU7QUFDZDtRQUNEO0FBQ0EsWUFBSUEsU0FBU0MsT0FBTztBQUNuQixlQUFLaEUsR0FBR2lFLE9BQUEscURBQUFoRCxPQUM4QzhDLFNBQVNDLE1BQU1FLE1BQUksSUFBQSxFQUFBakQsT0FBSzhDLFNBQVNDLE1BQU1HLElBQUksR0FDaEc7WUFDQ0MsS0FBSztZQUNMQyxNQUFNO1VBQ1AsQ0FDRDtBQUNBaEIsY0FBSW5DLEtBQUssYUFBYTtRQUN2QixPQUFPO0FBQ05tQyxjQUFJbkMsS0FBSyxZQUFZO1FBQ3RCO0FBQ0EsY0FBTXFFLFFBQVF4RSxFQUFFLE1BQU07QUFDdEJ3RSxjQUFNQyxLQUFLLGtCQUFrQixFQUFFbEIsUUFBUTtNQUN4QztBQUNBakIsVUFBSW5DLEtBQUssU0FBUztBQUNsQixXQUFLWCxJQUFJZ0UsY0FBYyxRQUFRaEIsTUFBTSxFQUFFaUIsS0FBS1YsUUFBUTtJQUNyRDtBQUNBVCxRQUFJbkMsS0FBSyxPQUFPO0FBQ2hCLFNBQUtILEVBQUV3RixLQUFLO01BQ1hDLEtBQUt4RyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7TUFDN0IyRCxNQUFNO1FBQ0xMLFFBQVE7UUFDUkUsT0FBTzFELEdBQUdDLE9BQU9DLElBQUksWUFBWSxFQUFFZ0MsUUFBUSxNQUFNLEdBQUc7TUFDckQ7TUFDQXVFLFVBQVU7TUFDVnpDLE9BQU9BLE1BQU07QUFDWlgsWUFBSW5DLEtBQUssUUFBUTtNQUNsQjtNQUNBd0YsU0FBU047TUFDVC9CLE1BQU07TUFDTnNDLE9BQU87SUFDUixDQUFDO0VBQ0YsQ0FBQztBQUNENUYsSUFBRSxTQUFTNkYsa0JBQWtCO0FBQzVCLFVBQU1yQixRQUFReEUsRUFBRSxNQUFNO0FBQ3RCd0UsVUFBTUMsS0FBSyxXQUFXLEVBQUVBLEtBQUssVUFBVSxFQUFFaEUsT0FBT1QsRUFBRSxNQUFNLEVBQUVTLE9BQU8wRSxPQUFPLENBQUM7RUFDMUUsQ0FBQztBQUNGLEdBQUc7O0FDaFNILElBQUFXLHFCQUE0QmxILFFBQUEsaUJBQUE7O0FDSDVCLElBQU1tSCxhQUFhQSxDQUFDQyxRQUFnQkMsU0FBMkI7QUFDOURELFFBQUEsVUFBQTlGLE9BQWdCOEYsR0FBRztBQUluQixTQUFPL0csR0FBR2lILFFBQVFGLEtBQUssR0FBR0MsSUFBSSxFQUFFRSxNQUFNO0FBQ3ZDOztBQ05BLElBQU1DLGlCQUFpQkEsTUFBWTtBQUNsQyxRQUFNO0lBQUNDO0VBQWMsSUFBSXBILEdBQUdDLE9BQU9DLElBQUk7QUFFdkMsTUFBSSxDQUFDLFdBQVcsU0FBUyxTQUFTLE9BQU8sRUFBRW1ILFNBQVNELGNBQWMsR0FBRztBQUNwRXBILE9BQUdzSCxTQUFTMUUsSUFBSTtNQUNmLCtCQUErQjtNQUMvQixvQ0FBb0M7TUFDcEMsNkJBQTZCOztNQUU3QixpQ0FBaUM7TUFDakMsZ0NBQWdDO01BQ2hDLDhCQUE4QjtNQUM5QixnQ0FBZ0M7TUFDaEMsaUNBQWlDOztNQUVqQywwQkFBMEI7OztNQUcxQix5QkFBeUI7TUFDekIsZ0NBQWdDOzs7O01BSWhDLDRCQUE0Qjs7Ozs7TUFLNUIseUJBQXlCO01BQ3pCLDZCQUE2Qjs7Ozs7Ozs7TUFRN0IsbUNBQW1DOzs7TUFHbkMsMEJBQTBCOzs7TUFHMUIsc0JBQXNCOzs7TUFHdEIsMEJBQTBCOzs7TUFHMUIsK0JBQ0M7O01BRUQscUJBQXFCOztNQUVyQixtQ0FBbUM7TUFDbkMsZ0NBQWdDO01BQ2hDLGdDQUFnQztNQUNoQyw4QkFBOEI7TUFDOUIsaUNBQWlDOztNQUVqQywwQkFBMEI7TUFDMUIsMEJBQTBCO01BQzFCLHVCQUF1QjtNQUN2QiwyQkFBMkI7TUFDM0Isd0JBQXdCO01BQ3hCLHdCQUF3QjtNQUN4QixzQkFBc0I7O01BRXRCLHdCQUF3QjtJQUN6QixDQUFDO0VBQ0YsT0FBTztBQUNONUMsT0FBR3NILFNBQVMxRSxJQUFJO01BQ2YsK0JBQStCO01BQy9CLG9DQUFvQztNQUNwQyw2QkFBNkI7O01BRTdCLGlDQUFpQztNQUNqQyxnQ0FBZ0M7TUFDaEMsOEJBQThCO01BQzlCLGdDQUFnQztNQUNoQyxpQ0FBaUM7O01BRWpDLDBCQUEwQjs7O01BRzFCLHlCQUF5QjtNQUN6QixnQ0FBZ0M7Ozs7TUFJaEMsNEJBQTRCOzs7OztNQUs1Qiw2QkFBNkI7Ozs7Ozs7O01BUTdCLG1DQUFtQzs7O01BR25DLDBCQUEwQjs7O01BRzFCLHNCQUFzQjs7O01BR3RCLDBCQUEwQjs7O01BRzFCLCtCQUNDOztNQUVELHFCQUFxQjs7TUFFckIsbUNBQW1DO01BQ25DLGdDQUFnQztNQUNoQyxnQ0FBZ0M7TUFDaEMsOEJBQThCO01BQzlCLGlDQUFpQzs7TUFFakMsMEJBQTBCO01BQzFCLDBCQUEwQjtNQUMxQix1QkFBdUI7TUFDdkIsMkJBQTJCO01BQzNCLHdCQUF3QjtNQUN4Qix3QkFBd0I7TUFDeEIsc0JBQXNCOztNQUV0Qix3QkFBd0I7SUFDekIsQ0FBQztFQUNGO0FBQ0Q7Ozs7OztBRnJIQXVFLGVBQWU7Q0FHZCxTQUFTSSxTQUFTO0FBR2xCLFFBQU1DLE9BQU94SCxHQUFHQyxPQUFPd0g7QUFFdkIsTUFBS3RILE9BQU91SCxVQUFVLENBQUN2SCxPQUFPdUgsT0FBT0MsWUFBYUgsS0FBS0ksYUFBYSxRQUFRO0FBQzNFO0VBQ0Q7QUFFQSxRQUFNckgsTUFBTVgsTUFBTSxZQUFZO0FBRTlCTyxTQUFPdUgsU0FBUzs7O0lBR2ZHLE9BQU87TUFDTkMsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLEtBQUs7TUFDTEMsU0FBUztNQUNUQyxNQUFNO01BQ05DLE1BQU07TUFDTkMsSUFBSTtJQUNMO0lBQ0FDLFdBQVc7O0lBRVhDLFVBQVU7O0lBRVZDLFNBQVNBLE1BQU07QUFDZCxZQUFNQyxLQUFLaEIsS0FBS2lCO0FBQ2hCLFlBQU1DLFFBQVFsQixLQUFLbUI7QUFDbkIsYUFDQ0gsS0FBSztNQUVMQSxPQUFPO01BRVBBLE9BQU87TUFFUEEsT0FBTztNQUVOQSxPQUFPLEtBQUssQ0FBQ2hCLEtBQUtvQjtNQUVsQkosT0FBTyxLQUFLLGNBQWNLLEtBQUtyQixLQUFLc0IsT0FBTztNQUUzQ0osVUFBVUYsT0FBT0UsTUFBTUssV0FBV1AsT0FBT0UsTUFBTU0sYUFBYVIsT0FBT0UsTUFBTU87SUFFNUU7OztJQUdBQyxjQUFjOztJQUVkQyxXQUFXQztJQUNYQyxVQUFVQzs7Ozs7SUFLVkMscUJBQXFCLENBQUM7Ozs7Ozs7OztJQVN0QkMscUJBQXFCOztJQUVyQkMsaUJBQWlCOzs7OztJQUtqQkMsV0FBVzs7O0lBR1hDLFlBQVk7OztJQUdaQyxlQUFlOzs7O0lBSWZDLGdCQUFnQjs7O0lBR2hCQyxlQUFlOztJQUVmQyxlQUFlOztJQUVmQyxhQUFhOztJQUViQyxjQUFjOztJQUVkQyxhQUFhOztJQUViQyxVQUFVOztJQUVWQyxjQUFjOzs7O0lBSWRDLHVCQUF1QjtJQUN2QkMsV0FBVztJQUNYQyxjQUFlQyxTQUFRO0FBQUEsVUFBQUM7QUFDdEIsVUFBSSxDQUFDRCxLQUFLO0FBQ1Q7TUFDRDtBQUNBLE9BQUFDLGlCQUFBdEssT0FBT3VILFFBQU80QyxjQUFkRyxlQUFjSCxZQUFjLENBQUM7QUFDN0IsZUFBU0ksS0FBS0YsS0FBSztBQUNsQixZQUFJLENBQUNHLE9BQU9DLE9BQU9KLEtBQUtFLENBQUMsS0FBSyxPQUFPQSxNQUFNLFVBQVU7QUFDcEQ7UUFDRDtBQUNBLFlBQUlHLElBQUlMLElBQUlFLENBQUM7QUFDYixZQUFJLE9BQU9HLE1BQU0sVUFBVTtBQUMxQjtRQUNEO0FBQ0FILFlBQUlBLEVBQUVJLEtBQUs7QUFDWEQsWUFBSUEsRUFBRUMsS0FBSztBQUNYLFlBQUlKLEVBQUVLLFdBQVcsS0FBS0YsRUFBRUUsV0FBVyxHQUFHO0FBQ3JDO1FBQ0Q7QUFDQTVLLGVBQU91SCxPQUFPNEMsVUFBVUksQ0FBQyxJQUFJRztNQUM5QjtJQUNEO0VBQ0Q7QUFDQSxRQUFNRyxLQUFLN0ssT0FBT3VIO0FBR2xCLFFBQU11RCxLQUFLQyxVQUFVckwsVUFBVXNMLFlBQVk7QUFDM0MsUUFBTUMsWUFBWSxtQkFBbUJ2QyxLQUFLb0MsRUFBRSxLQUFLLENBQUNBLEdBQUc1RCxTQUFTLFNBQVM7QUFDdkUsTUFBSWdFLGFBQWE7QUFDakIsTUFBSUMsZ0JBQWdCO0FBR3BCLFFBQU1DLGdCQUFnQkMsT0FBT0MsSUFBQUMsb0JBQUFBLGtCQUFBQyx1QkFBQSxDQUFBLDZCQUFBLEdBQUEsQ0FBQSwrRUFBQSxDQUFBLEVBQUE7QUFDN0IsUUFBTUMsa0JBQWtCLElBQUlDLE9BQU9OLGVBQWUsR0FBRztBQVNyRCxRQUFNTyxzQkFBc0JOLE9BQU9DLElBQUFNLHFCQUFBQSxtQkFBQUosdUJBQUEsQ0FBQSwwQkFBQSxHQUFBLENBQUEsdUZBQUEsQ0FBQSxFQUFBO0FBU25DLFFBQU1LLHNCQUFzQnhFLEtBQUt5RTtBQUNqQyxRQUFNQyxlQUFlMUUsS0FBS21CO0FBQzFCLFFBQU13RCxlQUFlQSxDQUFDQyxpQkFBaUJDLGFBQWE7QUFDbkQsVUFBTUMsa0JBQW1CQyxVQUFTO0FBQ2pDLFVBQUksQ0FBQ0EsUUFBUUEsS0FBS3hCLFdBQVcsR0FBRztBQUMvQjtNQUNEO0FBQ0EsVUFBSXlCLGFBQWE7QUFDakIsZUFBU0MsSUFBSSxHQUFHQSxJQUFJRixLQUFLeEIsUUFBUTBCLEtBQUs7QUFDckMsY0FBTUMsVUFBVUgsS0FBS0ksT0FBT0YsQ0FBQztBQUM3QixjQUFNRyxLQUFLRixRQUFRdkIsWUFBWTtBQUMvQixjQUFNMEIsS0FBS0gsUUFBUUksWUFBWTtBQUMvQk4sc0JBQWNJLE9BQU9DLEtBQUtILFVBQUEsSUFBQXpMLE9BQWMyTCxFQUFFLEVBQUEzTCxPQUFHNEwsSUFBRSxHQUFBO01BQ2hEO0FBQ0EsYUFBT0wsV0FBV3RLLFFBQVEsbUJBQW1Cc0osT0FBT0MsSUFBQXNCLHFCQUFBQSxtQkFBQXBCLHVCQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsTUFBQSxDQUFBLEVBQUEsQ0FBUSxFQUFFekosUUFBUTBKLGlCQUFpQkwsYUFBYTtJQUNyRztBQUNBYyxlQUFXQSxTQUFTbEIsWUFBWTtBQUNoQyxVQUFNNkIsWUFBWWhCLG9CQUFvQlIsT0FBT1ksZUFBZSxDQUFDLEVBQUVqQixZQUFZO0FBQzNFLFFBQUk4QixTQUFTWCxnQkFBZ0JVLFNBQVM7QUFDdEMsUUFBSVgsWUFBWVcsY0FBY1gsVUFBVTtBQUN2Q1ksZ0JBQUEsSUFBQWhNLE9BQWNxTCxnQkFBZ0JELFFBQVEsQ0FBQztJQUN4QztBQUNBLFFBQUlILGNBQWM7QUFDakIsaUJBQVdnQixZQUFZaEIsY0FBYztBQUNwQyxZQUNDLE9BQU9nQixhQUFhLFlBQ3BCQSxTQUFTL0IsWUFBWSxNQUFNNkIsYUFDM0JFLFNBQVMvQixZQUFZLE1BQU1rQixZQUMzQkgsYUFBYWdCLFFBQVEsTUFBTWQsaUJBQzFCO0FBQ0RhLG9CQUFBLElBQUFoTSxPQUFjcUwsZ0JBQWdCWSxRQUFRLENBQUM7UUFDeEM7TUFDRDtJQUNEO0FBQ0EsV0FBT0Q7RUFDUjtBQUNBakMsS0FBR21DLHFCQUFxQm5CLG9CQUFvQixJQUFJO0FBQ2hEaEIsS0FBR29DLGtCQUFrQmpCLGFBQWEsSUFBSSxVQUFVO0FBQ2hELE1BQUlILG9CQUFvQixJQUFJLEdBQUc7QUFDOUJoQixPQUFHcUMsa0JBQWtCbEIsYUFBYSxJQUFJLFVBQVU7RUFDakQ7QUFJQSxRQUFNbUIsT0FBT0EsQ0FBQ0MsS0FBS0MsWUFBWTtBQUM5QixRQUFJLENBQUNELEtBQUs7QUFDVCxhQUFPO0lBQ1I7QUFDQSxXQUFPQyxVQUFVbk4sU0FBU29OLGVBQWVGLEdBQUcsSUFBSWxOLFNBQVNxTixjQUFjSCxHQUFHO0VBQzNFO0FBQ0EsUUFBTUksUUFBUUEsQ0FBQ3BCLE1BQU1xQixRQUFRO0FBQzVCQSxZQUFBQSxNQUFRdk4sU0FBU3dOLFNBQVMxSDtBQUMxQixVQUFNMkgsS0FBSyxJQUFJakMsT0FBQSxPQUFBNUssT0FBY3NMLE1BQUksV0FBQSxDQUFXO0FBQzVDLFVBQU13QixJQUFJRCxHQUFHRSxLQUFLSixHQUFHO0FBQ3JCLFFBQUlHLEtBQUtBLEVBQUVoRCxTQUFTLEdBQUc7QUFDdEIsYUFBT2tELG1CQUFtQkYsRUFBRSxDQUFDLENBQUM7SUFDL0I7QUFDQSxXQUFPO0VBQ1I7QUFDQSxRQUFNckssUUFBU3lDLFVBQVM7QUFDdkIsUUFBSSxDQUFDQSxNQUFNO0FBQ1YsYUFBTztJQUNSO0FBQ0EsVUFBTStILFNBQUEsR0FBQWpOLE9BQVl1RyxLQUFLMkcsVUFBUSxHQUFBO0FBQy9CLFFBQ0NoSSxLQUFLaUksUUFBUUYsTUFBTSxNQUFNLEtBQ3pCL0gsS0FBS2lJLFFBQVE1RyxLQUFLNkcsV0FBV0gsTUFBTSxNQUFNLEtBQ3hDMUcsS0FBSzZHLFNBQVNDLE1BQU0sR0FBRyxDQUFDLE1BQU0sUUFDOUJuSSxLQUFLaUksUUFBUS9OLFNBQVN3TixTQUFTVSxXQUFXL0csS0FBSzZHLFdBQVdILE1BQU0sTUFBTSxHQUN0RTtBQUVELGFBQU9QLE1BQU0sU0FBU3hILElBQUk7SUFDM0I7QUFFQSxRQUFJcUksU0FBU2hILEtBQUtpSCxjQUFjdk0sUUFBUSxNQUFNLEVBQUU7QUFDaEQsUUFBSWlFLEtBQUtpSSxRQUFRSSxNQUFNLEdBQUc7QUFDekJBLGVBQVNoSCxLQUFLNkcsV0FBV0c7SUFDMUI7QUFDQSxRQUFJckksS0FBS2lJLFFBQVFJLE1BQU0sS0FBS0EsT0FBT0YsTUFBTSxHQUFHLENBQUMsTUFBTSxNQUFNO0FBQ3hERSxlQUFTbk8sU0FBU3dOLFNBQVNVLFdBQVdDO0lBQ3ZDO0FBQ0EsUUFBSXJJLEtBQUtpSSxRQUFRSSxNQUFNLE1BQU0sR0FBRztBQUMvQixhQUFPUCxtQkFBbUI5SCxLQUFLbUksTUFBTUUsT0FBT3pELE1BQU0sQ0FBQztJQUNwRDtBQUNBLFdBQU87RUFDUjtBQUNBLFFBQU0zSCxXQUFXQSxDQUFDO0lBQUNzTDtFQUFTLEdBQUduQyxTQUFTO0FBQ3ZDLFdBQU8sSUFBQXRMLE9BQUl5TixXQUFTLEdBQUEsRUFBSXJILFNBQUEsSUFBQXBHLE9BQWFzTCxNQUFJLEdBQUEsQ0FBRztFQUM3QztBQUNBLFFBQU1vQyxhQUFjQyxTQUFRO0FBQzNCLFFBQUksQ0FBQ0EsT0FBT0EsSUFBSTdELFdBQVcsR0FBRztBQUM3QixhQUFPNkQ7SUFDUjtBQUNBLFdBQU9BLElBQUlOLE1BQU0sR0FBRyxDQUFDLEVBQUV4QixZQUFZLElBQUk4QixJQUFJTixNQUFNLENBQUM7RUFDbkQ7QUFDQSxRQUFNTyxlQUFnQkMsY0FBYTtBQUNsQyxXQUFPdEgsS0FBS2lILGNBQWN2TSxRQUFRLE1BQU02TSxtQkFBbUJELFFBQVEsRUFBRTVNLFFBQVEsUUFBUSxHQUFHLEVBQUVBLFFBQVEsUUFBUSxHQUFHLENBQUM7RUFDL0c7QUFDQSxRQUFNOE0sV0FBWUosU0FBUTtBQUN6QixXQUFPQSxJQUFJMU0sUUFBUSxzQkFBc0JzSixPQUFPQyxJQUFBd0QscUJBQUFBLG1CQUFBdEQsdUJBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxDQUFRO0VBQ3pEO0FBQ0EsUUFBTXVELG9CQUFxQkMsYUFBWTtBQUN0Q0EsZ0JBQUFBLFVBQVksQ0FBQztBQUNiLFVBQU1DLE9BQU9ELFFBQVFFLGFBQWE7QUFDbEMsVUFBTUEsWUFBWUwsU0FBU0ksSUFBSTtBQUMvQixVQUFNRSxTQUFTTixTQUFTRyxRQUFRRyxVQUFVLEdBQUc7QUFDN0MsVUFBTUMsU0FBU1AsU0FBU0csUUFBUUksVUFBVSxHQUFHO0FBQzdDLFVBQU16QixLQUFLLElBQUlqQzs7TUFBQSxNQUFBNUssT0FFUm9PLFdBQVMsR0FBQSxFQUFBcE8sT0FBSW9PLFdBQVMsUUFBQSxFQUFBcE8sT0FFckJvTyxXQUFTLGFBQUEsRUFBQXBPLE9BRVRvTyxXQUFTLEtBQUEsRUFBQXBPLE9BQU1xTyxRQUFNLEtBQUEsRUFBQXJPLE9BQU1xTyxNQUFNLEVBQUFyTyxPQUFHc08sUUFBTSxLQUFBLEVBQUF0TyxPQUFNc08sUUFBTSxRQUFBLEVBQUF0TyxPQUV0RG9PLFdBQVMsU0FBQSxFQUFBcE8sT0FBVW9PLFNBQVMsRUFBQXBPLE9BQUdxTyxRQUFNLG9CQUFBO01BQzVDO0lBQ0Q7QUFFQSxXQUFPLENBQUNWLEtBQUtwRSxRQUFRO0FBQ3BCLFVBQUksQ0FBQ0EsS0FBSztBQUNULGVBQU9vRTtNQUNSO0FBQ0EsYUFBT0EsSUFBSTFNLFFBQVE0TCxJQUFJLENBQUMwQixPQUFPaEIsUUFBUWlCLEtBQUsxSSxLQUFLMkksVUFBVTtBQUMxRCxZQUFJbEIsV0FBV1ksTUFBTTtBQUNwQixpQkFBT0E7UUFDUjtBQUNBLGNBQU0xRSxJQUFJZ0YsU0FBUzNJLE9BQU8wSTtBQUMxQixjQUFNRSxjQUFjLE9BQU9uRixJQUFJRSxDQUFDLE1BQU0sYUFBYUYsSUFBSUUsQ0FBQyxFQUFFOEUsT0FBTzlFLENBQUMsSUFBSUYsSUFBSUUsQ0FBQztBQUMzRSxlQUFPLE9BQU9pRixnQkFBZ0IsV0FBV0EsY0FBY0EsZUFBZUg7TUFDdkUsQ0FBQztJQUNGO0VBQ0Q7QUFDQSxRQUFNSSxvQkFBb0IsTUFBTTtBQUMvQixVQUFNQyxjQUFjWCxrQkFBa0I7TUFDckNHLFdBQVc7TUFDWEMsUUFBUTtNQUNSQyxRQUFRO0lBQ1QsQ0FBQztBQUNELFdBQU8sQ0FBQ1gsS0FBS3BFLFFBQVE7QUFDcEIsWUFBTXNGLElBQUlELFlBQVlqQixLQUFLcEUsR0FBRztBQUM5QixhQUFPUSxHQUFHeEIsc0JBQXNCbUYsV0FBV21CLENBQUMsSUFBSUE7SUFDakQ7RUFDRCxHQUFHO0FBRUgsUUFBTUMsYUFBYSxJQUFJbEUsT0FBQSxTQUFBNUssT0FDYjZLLHFCQUFtQixLQUFBLEVBQUE3SyxPQUFNK0osR0FBR29DLGlCQUFlLEdBQUEsRUFBQW5NLE9BQUk2SyxxQkFBbUIsZ0JBQUEsR0FDM0UsR0FDRDtBQUNBLFFBQU1rRSxrQkFBbUJSLFdBQVU7QUFDbEMsV0FBT0EsTUFBTXROLFFBQVEsWUFBWSxHQUFHO0VBQ3JDO0FBQ0EsUUFBTStOLGdCQUFnQkEsQ0FBQ0MsVUFBVUMsVUFBVUMsU0FBUztBQUNuRCxRQUFJQyxZQUFZO0FBQ2hCLFFBQUlyRixHQUFHekIsb0JBQW9CNEcsUUFBUSxHQUFHO0FBQ3JDRSxrQkFBWSxJQUFJeEUsT0FBQSxTQUFBNUssT0FDTjZLLHFCQUFtQixHQUFBLEVBQUE3SyxPQUFJK0osR0FBR3FDLGlCQUFlLEtBQUEsRUFBQXBNLE9BQU02SyxxQkFBbUIsTUFBQSxFQUFBN0ssT0FBTzZLLHFCQUFtQixLQUFBLEVBQUE3SyxPQUFNK0osR0FBR3pCLG9CQUFvQjRHLFFBQVEsR0FBQyxHQUFBLEVBQUFsUCxPQUFJNksscUJBQW1CLGlCQUFBLEdBQ2xLLEdBQ0Q7SUFDRCxPQUFPO0FBQ04sWUFBTW9CLFdBQVc4QixTQUFTbUIsUUFBUTtBQUNsQyxZQUFNekQsVUFBVVEsU0FBU29CLE1BQU0sR0FBRyxDQUFDO0FBQ25DK0Isa0JBQVksSUFBSXhFLE9BQUEsU0FBQTVLLE9BQ042SyxxQkFBbUIsR0FBQSxFQUFBN0ssT0FBSStKLEdBQUdvQyxpQkFBZSxHQUFBLEVBQUFuTSxPQUFJNksscUJBQW1CLEdBQUEsRUFBQTdLLE9BQUk2SyxtQkFBbUIsRUFBQTdLLE9BQy9GeUwsWUFBWSxRQUFRLENBQUMxQixHQUFHeEIsc0JBQ3JCa0QsVUFBQSxJQUFBekwsT0FDSXlMLFFBQVFJLFlBQVksQ0FBQyxFQUFBN0wsT0FBR3lMLFFBQVF2QixZQUFZLEdBQUMsR0FBQSxDQUNyRCxFQUFBbEssT0FBR2lNLFNBQVNvQixNQUFNLENBQUMsRUFBRXBNLFFBQVEwSixpQkFBaUJMLGFBQWEsQ0FBQyxFQUFBdEssT0FBRzZLLHFCQUFtQixpQkFBQSxHQUNsRixHQUNEO0lBQ0Q7QUFDQSxRQUFJc0UsTUFBTTtBQUNULGFBQU9DLFVBQVVyQyxLQUFLa0MsUUFBUTtJQUMvQjtBQUNBLFVBQU1JLGNBQWMsSUFBSXpFLE9BQU8sTUFBTTVLLE9BQU8sU0FBU3VLLE9BQU9DLElBQUE4RSxxQkFBQUEsbUJBQUE1RSx1QkFBQSxDQUFBLGFBQUEsR0FBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxHQUFvQixRQUFRLEdBQUcsR0FBRyxHQUFHO0FBQ2pHLFVBQU02RSxhQUFhTixTQUFTaE8sUUFBUSxxQkFBcUI4TixlQUFlLEVBQUU5TixRQUFRb08sYUFBYU4sZUFBZTtBQUM5RyxVQUFNM0osU0FBUyxDQUFBO0FBQ2YsUUFBSW9LLGFBQWE7QUFDakIsWUFBUUEsYUFBYUosVUFBVXJDLEtBQUt3QyxVQUFVLE9BQU8sTUFBTTtBQUMxRG5LLGFBQU9BLE9BQU8wRSxNQUFNLElBQUk7UUFDdkJ5RSxPQUFPaUI7TUFDUjtJQUNEO0FBQ0FwSyxXQUFPeUgsS0FBS3VDO0FBQ1osV0FBT2hLO0VBQ1I7QUFDQSxNQUFJcUssa0JBQWtCO0FBQ3RCLFFBQU1DLGtCQUFrQkEsQ0FBQ1QsVUFBVVUsVUFBVUMsT0FBTzlKLEtBQUsrSixjQUFjO0FBQ3RFLFVBQU1DLHNCQUF1QkMsZUFBYztBQUMxQyxZQUFNVixjQUFjLElBQUl6RSxPQUFPLE1BQU01SyxPQUFPLFNBQVN1SyxPQUFPQyxJQUFBd0YscUJBQUFBLG1CQUFBdEYsdUJBQUEsQ0FBQSxhQUFBLEdBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsR0FBb0IsUUFBUSxHQUFHLEdBQUcsR0FBRztBQUNqRyxZQUFNNkUsYUFBYVEsVUFDakI5TyxRQUFRLHFCQUFxQjhOLGVBQWUsRUFDNUM5TixRQUFRb08sYUFBYU4sZUFBZTtBQUV0QyxVQUFJa0IsUUFBUTtBQUNabkIsaUJBQVdvQixZQUFZO0FBQ3ZCLGFBQU9wQixXQUFXL0IsS0FBS3dDLFVBQVUsTUFBTSxNQUFNO0FBQzVDVSxnQkFBUW5CLFdBQVdvQjtNQUNwQjtBQUNBLFVBQUlELFFBQVEsR0FBRztBQUVkLFlBQUkxQixRQUFRO0FBQ1osWUFBSWtCLGlCQUFpQjtBQUNwQmxCLGtCQUFRa0IsZ0JBQWdCMUMsS0FBS3dDLFVBQVU7UUFDeEMsT0FBTztBQUlOaEIsa0JBQVEsZ0ZBQWdGeEIsS0FDdkZ3QyxVQUNEO1FBQ0Q7QUFDQSxZQUFJaEIsT0FBTztBQUNWLFdBQUM7WUFBQzBCO1VBQUssSUFBSTFCO1FBQ1o7QUFDQSxlQUFPO1VBQ05DLEtBQUt5QjtVQUNMRSxPQUFPO1FBQ1I7TUFDRDtBQUNBLGFBQU87UUFDTjNCLEtBQUt5QjtRQUNMRSxPQUFPRixTQUFTO01BQ2pCO0lBQ0Q7QUFDQSxVQUFNdk4sVUFBVSxDQUFBO0FBQ2hCLFVBQU0wTixZQUFZckcsR0FBR21DO0FBQ3JCLFVBQ0NtRSxZQUFZVixZQUFZQyxTQUFTRCxhQUFhQyxTQUFTQSxNQUFNOUYsU0FBUztBQUN2RSxRQUFJd0c7QUFDSixRQUFJQyxZQUFZO0FBQ2hCekssWUFBQUEsTUFBQSxJQUFBOUYsT0FBWThGLEdBQUc7QUFFZixRQUFJNkosWUFBWUEsU0FBUzdGLFNBQVMsR0FBRztBQUNwQ3dHLGdCQUFVdEIsY0FBY0MsVUFBVVUsUUFBUTtBQUMxQyxVQUFJLENBQUNXLFdBQVdBLFFBQVF4RyxXQUFXLEdBQUc7QUFDckMsZUFBTztVQUNON0osTUFBTWdQO1VBQ052TTtVQUNBSyxPQUFPOEMsV0FBVyx5QkFBeUI4SixRQUFRO1FBQ3BEO01BQ0Q7QUFDQSxVQUFJYSxTQUFTdkIsU0FBUzVCLE1BQU0sR0FBR29ELEtBQUtDLElBQUksR0FBR0osUUFBUSxDQUFDLEVBQUUvQixNQUFNMEIsS0FBSyxDQUFDO0FBQ2xFLFVBQUlVLFFBQVExQixTQUFTNUIsTUFBTW9ELEtBQUtDLElBQUksR0FBR0osUUFBUSxDQUFDLEVBQUUvQixNQUFNMEIsUUFBUUssUUFBUSxDQUFDLEVBQUUvQixNQUFNLENBQUMsRUFBRXpFLE1BQU0sQ0FBQztBQUMzRixVQUFJd0csUUFBUXhHLFNBQVMsR0FBRztBQUV2QndHLGdCQUFRekQsR0FBR3FELFlBQVk7QUFDdkJTLGdCQUFRQSxNQUFNMVAsUUFBUXFQLFFBQVF6RCxJQUFJLEVBQUU7TUFDckM7QUFDQSxVQUNDK0M7TUFDQTlKLFFBQVEsTUFDUDtBQUNELFNBQUEsRUFBQSxFQUFLQSxHQUFHLElBQUl3SyxRQUFRLENBQUMsRUFBRS9CO01BQ3hCO0FBS0EsVUFBSS9DLElBQUlnRixPQUFPMUcsU0FBUztBQUN4QixhQUFPMEIsS0FBSyxLQUFLZ0YsT0FBTzlFLE9BQU9GLENBQUMsTUFBTSxRQUFRZ0YsT0FBT25ELE1BQU03QixHQUFHQSxJQUFJLENBQUMsRUFBRW9GLE9BQU8sSUFBSSxLQUFLLEdBQUc7QUFDdkZwRjtNQUNEO0FBQ0EsVUFBSXFGLElBQUk7QUFDUixhQUFPQSxJQUFJRixNQUFNN0csVUFBVTZHLE1BQU1qRixPQUFPbUYsQ0FBQyxNQUFNLFFBQVFGLE1BQU10RCxNQUFNd0QsR0FBR0EsSUFBSSxDQUFDLEVBQUVELE9BQU8sSUFBSSxLQUFLLEdBQUc7QUFDL0ZDO01BQ0Q7QUFDQSxVQUNDckYsS0FBSyxLQUNMZ0YsT0FBTzlFLE9BQU9GLENBQUMsTUFBTSxTQUNwQm1GLE1BQU03RyxXQUFXLEtBQU0rRyxJQUFJRixNQUFNN0csVUFBVTZHLE1BQU1qRixPQUFPbUYsQ0FBQyxNQUFNLE9BQy9EO0FBQ0RyRjtNQUNEO0FBQ0FnRixlQUFTaEYsS0FBSyxJQUFJZ0YsT0FBT25ELE1BQU0sR0FBR29ELEtBQUtDLElBQUksR0FBR2xGLElBQUksQ0FBQyxDQUFDLElBQUk7QUFDeERtRixjQUFRRSxJQUFJRixNQUFNN0csU0FBUzZHLE1BQU10RCxNQUFNb0QsS0FBS0MsSUFBSSxHQUFHRyxDQUFDLENBQUMsSUFBSTtBQUN6RCxVQUNDTCxPQUFPMUcsU0FBUyxLQUNoQjBHLE9BQU9uRCxNQUFNb0QsS0FBS0MsSUFBSSxHQUFHRixPQUFPMUcsU0FBUyxDQUFDLENBQUMsRUFBRThHLE9BQU8sSUFBSSxLQUFLLEtBQzdERCxNQUFNN0csU0FBUyxLQUNmNkcsTUFBTXRELE1BQU0sR0FBRyxDQUFDLEVBQUV1RCxPQUFPLElBQUksS0FBSyxHQUNqQztBQUNESixrQkFBVTtNQUNYO0FBQ0FELGtCQUFZQyxPQUFPMUc7QUFDbkIsVUFBSXlHLGNBQWMsS0FBS0ksTUFBTTdHLFNBQVMsS0FBSzZHLE1BQU10RCxNQUFNLEdBQUcsQ0FBQyxNQUFNLE1BQU07QUFDdEVzRCxnQkFBUUEsTUFBTXRELE1BQU0sQ0FBQztNQUN0QjtBQUNBNEIsaUJBQVd1QixTQUFTRztBQUNwQixVQUFJLENBQUNOLFdBQVc7QUFDZixZQUFJdEcsR0FBR3pCLG9CQUFvQnFILFFBQVEsR0FBRztBQUNyQ2pOLGtCQUFRQSxRQUFRb0gsTUFBTSxJQUFJakUsV0FBVyw2QkFBNkI4SixRQUFRO1FBQzNFLE9BQU87QUFDTmpOLGtCQUFRQSxRQUFRb0gsTUFBTSxJQUFJakUsV0FBVyx3QkFBd0I4SixRQUFRO1FBQ3RFO01BQ0Q7SUFDRDtBQUVBLFFBQUlDLFNBQVNBLE1BQU05RixTQUFTLEdBQUc7QUFDOUJ3RyxnQkFBVXRCLGNBQWNDLFVBQVVXLEtBQUs7QUFDdkMsVUFBSVUsV0FBV0EsUUFBUXhHLFNBQVMsR0FBRztBQUVsQyxlQUFPO1VBQ043SixNQUFNZ1A7VUFDTnZNO1VBQ0FLLE9BQU84QyxXQUFXLHVCQUF1QitKLEtBQUs7UUFDL0M7TUFDRDtBQUNBLFVBQUlPLFFBQVE7QUFDWixVQUFJSSxZQUFZLEdBQUc7QUFDbEIsY0FBTU8sUUFBUWhCLG9CQUFvQmIsUUFBUTtBQUMxQ3NCLG9CQUFZTyxNQUFNdEM7QUFDbEIsU0FBQztVQUFDMkI7UUFBSyxJQUFJVztNQUNaLE9BQU87QUFDTlgsZ0JBQVE7TUFDVDtBQUNBLFlBQU1ZLGVBQUEsS0FBQS9RLE9BQW9Cb1EsV0FBUyxHQUFBLEVBQUFwUSxPQUFJNFAsS0FBSyxFQUFBNVAsT0FBRzhGLE9BQU8sSUFBRSxJQUFBO0FBQ3hELFVBQUl5SyxhQUFhLEdBQUc7QUFDbkIsY0FBTVMsU0FBUy9CLFNBQVM1QixNQUFNb0QsS0FBS0MsSUFBSSxHQUFHSCxTQUFTLENBQUM7QUFDcER0QixtQkFDQ0EsU0FBUzVCLE1BQU0sR0FBR29ELEtBQUtDLElBQUksR0FBR0gsU0FBUyxDQUFDLEtBQ3ZDQSxZQUFZLElBQUksT0FBTyxNQUN4QlEsZ0JBQ0NaLFFBQVEsS0FBSztBQUNmbEIsb0JBQVkrQixPQUFPbEgsU0FBUyxLQUFLa0gsT0FBTzNELE1BQU0sR0FBRyxDQUFDLE1BQU0sT0FBQSxLQUFBck4sT0FBWWdSLE1BQU0sSUFBS0E7TUFDaEYsT0FBTztBQUNOLFlBQUkvQixTQUFTbkYsU0FBUyxLQUFLbUYsU0FBUzVCLE1BQU0sSUFBSTRCLFNBQVNuRixTQUFTLElBQUksQ0FBQyxNQUFNLE1BQU07QUFDaEZtRixzQkFBWTtRQUNiO0FBQ0FBLHFCQUFhQSxTQUFTbkYsU0FBUyxJQUFJLE9BQU8sTUFBTWlIO01BQ2pEO0FBQ0EsVUFBSVYsV0FBVztBQUNkLFlBQUk1RyxJQUFJM0QsT0FBTztBQUNmLFlBQUkyRCxFQUFFSyxTQUFTLEdBQUc7QUFDakJMLGNBQUlBLEVBQUU0RCxNQUFNLENBQUM7UUFDZDtBQUNBM0ssZ0JBQVFBLFFBQVFvSCxNQUFNLElBQUlqRSxXQUFXLDBCQUEwQitKLE9BQU9uRyxDQUFDO01BQ3hFLE9BQU87QUFDTi9HLGdCQUFRQSxRQUFRb0gsTUFBTSxJQUFJakUsV0FBVyxzQkFBc0IrSixLQUFLO01BQ2pFO0FBQ0EsVUFBSTdGLEdBQUc5QixnQkFBZ0IsQ0FBQzRILFdBQVc7QUFDbEMsY0FBTW9CLE1BQU1oQyxTQUFTaE8sUUFBUThJLEdBQUc5QixjQUFjLEVBQUU7QUFDaEQsWUFBSWdKLElBQUluSCxXQUFXbUYsU0FBU25GLFFBQVE7QUFDbkNtRixxQkFBV2dDO0FBQ1h2TyxrQkFBUUEsUUFBUW9ILE1BQU0sSUFBSWpFLFdBQVcsd0JBQXdCO1FBQzlEO01BQ0Q7SUFDRDtBQUNBLFdBQU87TUFDTjVGLE1BQU1nUDtNQUNOdk07TUFDQUssT0FBTztJQUNSO0VBQ0Q7QUFFQSxRQUFNbU8sVUFBVUEsQ0FBQztJQUFDQztJQUFTQztJQUFTQztFQUFRLE1BQU07QUFDakQsUUFBSXBPLE9BQU87QUFDWCxRQUFJa08sU0FBUztBQUlaLFVBQUlBLFdBQVdDLFNBQVM7QUFDdkJuTyxpQkFBQUEsT0FBUztNQUNWO0FBQ0EsVUFBSW9PLFVBQVU7QUFDYnBPLGlCQUFBQSxPQUFTO01BQ1Y7SUFDRDtBQUNBLFdBQU9BO0VBQ1I7QUFDQSxRQUFNcU8sVUFBVzNRLE9BQU07QUFDdEIsUUFBSUEsRUFBRXVCLGdCQUFnQjtBQUNyQnZCLFFBQUV1QixlQUFlO0FBQ2pCdkIsUUFBRTRRLGdCQUFnQjtJQUNuQixPQUFPO0FBQ041USxRQUFFNlEsZUFBZTtJQUNsQjtBQUNBLFdBQU87RUFDUjtBQUNBLE1BQUlDLFVBQVU7QUFDZCxNQUFJQyxXQUFXO0FBQ2YsTUFBSUMsVUFBVSxDQUFBO0FBQ2QsTUFBSUMsZUFBZTtBQUNuQixNQUFJQyxhQUFhO0FBQ2pCLE1BQUlDLFlBQVk7QUFDaEIsTUFBSUMsV0FBVztBQUNmLE1BQUlDLFdBQVc7QUFDZixNQUFJQyxjQUFjO0FBQ2xCLE1BQUlDLGNBQWM7QUFDbEIsTUFBSUMsWUFBWTtBQUNoQixNQUFJQyxhQUFhO0FBQ2pCLE1BQUlDLFlBQVk7QUFDaEIsTUFBSUMsU0FBUztBQUNiLE1BQUlDLGFBQWE7QUFDakIsTUFBSUMsWUFBWTtBQUNoQixNQUFJQyxnQkFBZ0I7QUFDcEIsTUFBSUMsa0JBQWtCO0FBQ3RCLE1BQUlDLFNBQVM7QUFDYixRQUFNQyxZQUFZO0FBQ2xCLFFBQU1DLE9BQU87QUFDYixRQUFNQyxpQkFBaUI7QUFDdkIsUUFBTUMsVUFBVTtBQUNoQixRQUFNQyxVQUFVO0FBQ2hCLFFBQU1DLFVBQVdyUSxVQUFTO0FBQ3pCLFFBQUlzUSxZQUFZO0FBQ2hCLFFBQUl0USxRQUFRQSxLQUFLdVEsT0FBTztBQUN2QixVQUFJdlEsS0FBS3VRLE1BQU1DLE9BQU87QUFDckIsY0FBTSxDQUFDQyxJQUFJLElBQUl6USxLQUFLdVEsTUFBTUM7QUFDMUIsWUFBSUMsTUFBTTtBQUNULGNBQUlBLEtBQUtDLGFBQWFELEtBQUtDLFVBQVV4SixTQUFTLEdBQUc7QUFHaERpSSx1QkFBV3NCLEtBQUtDLFVBQVUsQ0FBQyxFQUFFQyxNQUFNQyxLQUFLQztBQUN4QyxnQkFBSUosS0FBS0MsVUFBVSxDQUFDLEVBQUVJLFdBQVc7QUFDaEMxQix5QkFBV3FCLEtBQUtDLFVBQVUsQ0FBQyxFQUFFSSxVQUFVelMsUUFBUSxPQUFPLEVBQUU7WUFDekQ7QUFDQSxnQkFBSW9TLEtBQUtDLFVBQVUsQ0FBQyxFQUFFSyxPQUFPO0FBQzVCbEIsOEJBQWdCWSxLQUFLQyxVQUFVLENBQUMsRUFBRUs7WUFDbkM7QUFDQSxnQkFBSU4sS0FBS0MsVUFBVXhKLFNBQVMsR0FBRztBQUM5QjRJLGdDQUFrQlcsS0FBS0MsVUFBVSxDQUFDLEVBQUV4UDtZQUNyQztVQUNEO0FBQ0EsY0FBSXVQLEtBQUtPLFdBQVc7QUFDbkJwQix3QkFBWWEsS0FBS087VUFDbEI7QUFDQSxjQUFJUCxLQUFLUSxnQkFBZ0I7QUFDeEJYLHdCQUFZRyxLQUFLUSxlQUFlNVMsUUFBUSxPQUFPLEVBQUU7VUFDbEQ7QUFDQWdSLHdCQUFjLE9BQU9vQixLQUFLUyxZQUFZO0FBQ3RDLGNBQUlsUixLQUFLdVEsTUFBTVksUUFBUTtBQUN0QjFCLHdCQUFZelAsS0FBS3VRLE1BQU1ZLE9BQU9DO1VBQy9CO0FBQ0EsY0FBSVgsS0FBS1ksY0FBYyxDQUFDclIsS0FBSyxnQkFBZ0IsS0FBSyxDQUFDQSxLQUFLLGdCQUFnQixFQUFFcVIsWUFBWTtBQUVyRixnQkFBSXBILEtBQUs7QUFDVCxxQkFBU3JCLElBQUksR0FBR0EsSUFBSTZILEtBQUtZLFVBQVVuSyxRQUFRMEIsS0FBSztBQUMvQ3FCLHFCQUNFckIsSUFBSSxJQUFJLE1BQU0sTUFBTTZILEtBQUtZLFVBQVV6SSxDQUFDLEVBQUUwSSxLQUFLalQsUUFBUSxtQkFBbUJzSixPQUFPQyxJQUFBMkoscUJBQUFBLG1CQUFBekosdUJBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxDQUFRO1lBQ3hGO0FBQ0EsZ0JBQUltQyxHQUFHL0MsU0FBUyxHQUFHO0FBQ2xCMkYsZ0NBQWtCLElBQUk3RSxPQUFBLDJCQUFBNUssT0FBa0M2TSxJQUFFLDZCQUFBLENBQTZCO1lBQ3hGO1VBQ0Q7UUFDRDtNQUNEO0FBRUEsVUFBSWpLLEtBQUt1USxNQUFNaUIsU0FBUztBQUN2QixZQUFJeFIsS0FBS3VRLE1BQU1pQixRQUFRQyxRQUFRLENBQUNuQixXQUFXO0FBQzFDQSxzQkFBWXRRLEtBQUt1USxNQUFNaUIsUUFBUUMsS0FBS3BULFFBQVEsT0FBTyxFQUFFO1FBQ3REO0FBQ0EsWUFBSThJLEdBQUd4Qix3QkFBd0IsTUFBTTtBQUVwQ3dCLGFBQUd4QixzQkFBc0IzRixLQUFLdVEsTUFBTWlCLFFBQVFFLFNBQVM7UUFDdEQ7TUFDRDtBQUNBL0IsbUJBQWFXO0FBRWIsVUFBSXRRLEtBQUt1USxNQUFNb0IsWUFBWTNSLEtBQUt1USxNQUFNb0IsU0FBU3JHLFNBQVM7QUFDdkRnRSxzQkFBYyxDQUFDbkksR0FBR1gseUJBQXlCeEcsS0FBS3VRLE1BQU1vQixTQUFTckcsUUFBUXNHLG1CQUFtQjtBQUMxRnJDLG9CQUFZLENBQUNwSSxHQUFHWCx5QkFBeUJ4RyxLQUFLdVEsTUFBTW9CLFNBQVNyRyxRQUFRdUcsaUJBQWlCO0FBQ3RGckMscUJBQWF4UCxLQUFLdVEsTUFBTW9CLFNBQVNyRyxRQUFRd0csaUJBQWlCO0FBRzFELFlBQUl0QyxZQUFZO0FBQ2ZySSxhQUFHWixlQUFlO1FBQ25CO01BQ0Q7SUFDRDtFQUNEO0FBQ0EsTUFBSXdMLGlCQUFpQjtBQUNyQixRQUFNQyxlQUFlQSxDQUFDelAsUUFBUTBQLFlBQVk7QUFDekMsUUFBSUYsZ0JBQWdCO0FBQ25CO0lBQ0Q7QUFDQUEscUJBQWlCO0FBQ2pCLFFBQUlHO0FBQ0osUUFBSWxELGNBQWM7QUFDakJrRCx1QkFBaUJsRCxhQUFhbUQ7QUFDOUJuRCxtQkFBYW1ELFdBQVc7SUFDekI7QUFDQSxVQUFNQyxPQUFPLFlBQWFqUCxNQUFNO0FBQy9CNE8sdUJBQWlCO0FBQ2pCLFVBQUkvQyxjQUFjO0FBQ2pCQSxxQkFBYW1ELFdBQVdEO01BQ3pCO0FBQ0FELGNBQVFJLE1BQU0sTUFBTWxQLElBQUk7SUFDekI7QUFFQSxVQUFNekQsU0FBUztNQUNkQyxRQUFRO01BQ1JDLFFBQVE7TUFDUjBTLGVBQWU7TUFDZkMsYUFBYTtNQUNiQyxRQUFRN08sS0FBSzhPO01BQ2JDLE1BQU0sQ0FBQyxRQUFRLGFBQWEsV0FBVztNQUN2Q0MsUUFBUTtNQUNSQyxRQUFRLENBQUMsV0FBVyxhQUFhLE9BQU8sTUFBTTtNQUM5Q0MsU0FBUztNQUNUQyxTQUFTO01BQ1RDLE9BQU87TUFDUEMsV0FBV3JQLEtBQUtzUDtNQUNoQkMsU0FBUztNQUNUQyxNQUFNLENBQUMsWUFBWSxZQUFZLFFBQVE7TUFDdkMzUyxNQUFNO01BQ040UyxRQUFRLENBQUMsU0FBUztJQUNuQjtBQUNBMVcsUUFBSUwsSUFBSXFELE1BQU0sRUFDWjJULEtBQU1yVCxVQUFTO0FBQ2ZxUSxjQUFRclEsSUFBSTtBQUNadUMsYUFBTzZQLElBQUk7SUFDWixDQUFDLEVBQ0FBLEtBQUssQ0FBQztNQUFDa0I7TUFBUUM7SUFBVSxNQUFNO0FBQy9CbkIsV0FBQSxHQUFBaFYsT0FBUWtXLFFBQU0sR0FBQSxFQUFBbFcsT0FBSW1XLFVBQVUsQ0FBRTtJQUMvQixDQUFDO0VBQ0g7QUFDQSxRQUFNQyxpQkFBa0JDLFdBQVU7QUFDakMsV0FBT3hRLFdBQVcseUJBQXlCMEUsT0FBTzhMLEtBQUssQ0FBQztFQUN6RDtBQUNBLFFBQU1DLG1CQUFtQkEsTUFBTTtBQUM5QixVQUFNQyxNQUFNLG9CQUFJQyxLQUFLO0FBQ3JCLFFBQUlDLEtBQUtsTSxPQUFPZ00sSUFBSUcsZUFBZSxDQUFDO0FBQ3BDLFVBQU1DLE1BQU85SCxPQUFNO0FBQ2xCLGFBQU9BLEVBQUV4QixNQUFNLEVBQUU7SUFDbEI7QUFDQW9KLFVBQ0NFLElBQUEsSUFBQTNXLE9BQVF1VyxJQUFJSyxZQUFZLElBQUksQ0FBQyxDQUFFLElBQy9CRCxJQUFBLElBQUEzVyxPQUFRdVcsSUFBSU0sV0FBVyxDQUFDLENBQUUsSUFDMUJGLElBQUEsS0FBQTNXLE9BQVN1VyxJQUFJTyxZQUFZLENBQUMsQ0FBRSxJQUM1QkgsSUFBQSxLQUFBM1csT0FBU3VXLElBQUlRLGNBQWMsQ0FBQyxDQUFFLElBQzlCSixJQUFBLEtBQUEzVyxPQUFTdVcsSUFBSVMsY0FBYyxDQUFDLENBQUU7QUFDL0IsV0FBT1A7RUFDUjtBQUNBLFFBQU1RLGlCQUFpQkEsQ0FBQ3BDLFNBQVNxQyxpQkFBaUI7QUFDakQsUUFBSW5GLGFBQWEsTUFBTTtBQUN0QjhDLGNBQVFoUCxXQUFXLHNCQUFzQixDQUFDO0FBQzFDO0lBQ0Q7QUFRQSxRQUFJdEQ7QUFNSixVQUFNNFUsb0JBQ0gzRSxjQUFjLFFBQVFBLGNBQWNqTSxLQUFLc1AsbUJBQ3pDcEQsa0JBQWtCLFFBQVFBLGtCQUFrQmxNLEtBQUtzUCxvQkFDbkRuRCxtQkFDQUEsb0JBQW9Cbk0sS0FBSzZRO0FBQzFCLFFBQUlGLGdCQUFnQixDQUFDQSxhQUFhRyxZQUFZLENBQUN0TixHQUFHcEIsaUJBQWlCMEosYUFBYSxDQUFDOEUsa0JBQWtCO0FBR2xHdEYsaUJBQVd5RixZQUFZdFcsUUFBUXFSO0FBQy9COVAsZUFBU3NQLFdBQVcwRjtBQUNwQixVQUFJaFYsUUFBUTtBQUNYQSxlQUFPdkIsUUFBUTtBQUNmdUIsZUFBTytJLE9BQU8vSSxPQUFPdkI7TUFDdEI7SUFDRCxPQUFPO0FBQ051QixlQUFTc1AsV0FBVzJGO0FBQ3BCLFVBQUlqVixRQUFRO0FBQ1hBLGVBQU92QixRQUFRO0FBQ2Z1QixlQUFPK0ksT0FBTy9JLE9BQU92QjtNQUN0QjtJQUNEO0FBQ0EsUUFBSW9FLFNBQVM7TUFDWm5GLE1BQU04UjtJQUNQO0FBQ0EsVUFBTTBGLFVBQVUsQ0FBQTtBQUNoQixVQUFNQyxRQUFRLENBQUE7QUFDZCxVQUFNQyxVQUFVLENBQUE7QUFDaEIsVUFBTUMsU0FBU1YsZUFBZSxDQUFDQSxZQUFZLElBQUl2RjtBQUMvQyxRQUFJa0c7QUFDSixRQUFJck07QUFDSixRQUFJekksUUFBUTtBQUNaLFFBQUkrVSxVQUFVO0FBQ2QsU0FBS3RNLElBQUksR0FBR0EsSUFBSW9NLE9BQU85TixRQUFRMEIsS0FBSztBQUNuQ3FNLGFBQU9ELE9BQU9wTSxDQUFDO0FBQ2YsVUFBSXFNLEtBQUt4WCxVQUFVMFMsU0FBUztBQUMzQjNOLGlCQUFTc0ssZ0JBQ1J0SyxPQUFPbkYsTUFDUDRYLEtBQUtFLGtCQUNMRixLQUFLRyxpQkFDTEgsS0FBS0ksWUFDTEosS0FBS0ssYUFDTjtBQUNBLFlBQUksQ0FBQzlTLE9BQU9yQyxPQUFPO0FBQ2xCK1U7QUFDQSxjQUFJLENBQUNELEtBQUtFLG9CQUFvQkYsS0FBS0UsaUJBQWlCak8sV0FBVyxHQUFHO0FBQ2pFNE4sa0JBQU1BLE1BQU01TixNQUFNLElBQUkrTixLQUFLRztVQUM1QixPQUFPO0FBQ05QLG9CQUFRQSxRQUFRM04sTUFBTSxJQUFJO2NBQ3pCcU8sTUFBTU4sS0FBS0U7Y0FDWEssSUFBSVAsS0FBS0c7WUFDVjtVQUNEO1FBQ0QsV0FBV2pWLFVBQVUsTUFBTTtBQUMxQixXQUFDO1lBQUNBO1VBQUssSUFBSXFDO1FBQ1o7TUFDRCxXQUFXeVMsS0FBS3hYLFVBQVUyUyxXQUFXNkUsS0FBS0Usb0JBQW9CRixLQUFLRSxpQkFBaUJqTyxTQUFTLEdBQUc7QUFDL0YxRSxpQkFBU3NLLGdCQUFnQnRLLE9BQU9uRixNQUFNNFgsS0FBS0Usa0JBQWtCLE1BQU0sTUFBTSxLQUFLO0FBQzlFLFlBQUksQ0FBQzNTLE9BQU9yQyxPQUFPO0FBQ2xCK1U7QUFDQUgsa0JBQVFBLFFBQVE3TixNQUFNLElBQUkrTixLQUFLRTtRQUNoQyxXQUFXaFYsVUFBVSxNQUFNO0FBQzFCLFdBQUM7WUFBQ0E7VUFBSyxJQUFJcUM7UUFDWjtNQUNEO0lBQ0Q7QUFDQSxRQUFJckMsVUFBVSxNQUFNO0FBRW5CUixlQUFTc1AsV0FBVzJGO0FBQ3BCLFVBQUlqVixRQUFRO0FBQ1hBLGVBQU92QixRQUFRO0FBQ2Z1QixlQUFPK0ksT0FBTy9JLE9BQU92QjtNQUN0QjtJQUNEO0FBRUE2USxlQUFXd0csWUFBWXhXLFVBQVV1UTtBQUNqQ1AsZUFBV3lHLFlBQVl6VyxVQUFXLENBQUMwRSxLQUFLb0IsZUFBZXVLLGVBQWdCQyxhQUFhRjtBQUNwRixRQUFJMUwsS0FBS29CLGVBQWUsQ0FBQyxDQUFDdVAsY0FBYztBQUV2QyxVQUFJM1UsVUFBVUEsT0FBT3ZCLFVBQVUsVUFBVTtBQUN4QyxZQUFJK0ksR0FBRzNDLFdBQVc7QUFDakJ5SyxxQkFBVzBHLGFBQWF2WCxRQUFRK0ksR0FBRzNDO1FBQ3BDO01BQ0QsT0FBTztBQUNOeUssbUJBQVcyRyxjQUFjeFgsUUFBUStJLEdBQUczQztNQUNyQztBQUNBLFVBQUkwUSxZQUFZLEdBQUc7QUFDbEIsWUFBSTFTLE9BQU8xQyxXQUFXMEMsT0FBTzFDLFFBQVFvSCxTQUFTLEdBQUc7QUFDaEQrSCxxQkFBV3JRLFVBQVVSLFNBQ25CK0ksR0FBRzNDLFlBQVksS0FBS3ZCLFdBQVcsaUJBQWlCLEtBQ2pEVCxPQUFPMUMsUUFBUStWLEtBQUs1UyxXQUFXLG9CQUFvQixDQUFDLEtBQ25Ea0UsR0FBRzNDLFlBQVksS0FBS3ZCLFdBQVcsZ0JBQWdCO1FBQ2xEO0FBQ0FnTSxtQkFBV3dHLFlBQVl4VyxVQUFVa0ksR0FBR1osZ0JBQWdCaUo7TUFDckQsV0FBVzBGLFNBQVM7QUFDbkIsWUFBSXBWLFVBQVUsQ0FBQTtBQUNkLGNBQU1nVyxlQUFlLENBQUE7QUFFckIsYUFBS2xOLElBQUksR0FBR0EsSUFBSW1NLFFBQVE3TixRQUFRMEIsS0FBSztBQUNwQzlJLGtCQUFRQSxRQUFRb0gsTUFBTSxJQUFBLElBQUE5SixPQUFRNkYsV0FBVyw0QkFBNEI4UixRQUFRbk0sQ0FBQyxDQUFDLENBQUM7UUFDakY7QUFDQSxZQUFJbU0sUUFBUTdOLFdBQVcsR0FBRztBQUN6QjRPLHVCQUFhQSxhQUFhNU8sTUFBTSxJQUFBLElBQUE5SixPQUFRNkYsV0FBVyw0QkFBNEI4UixRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzNGLFdBQVdBLFFBQVE3TixTQUFTLEdBQUc7QUFDOUI0Tyx1QkFBYUEsYUFBYTVPLE1BQU0sSUFBQSxLQUFBOUosT0FBU29XLGVBQWV1QixRQUFRN04sTUFBTSxDQUFDO1FBQ3hFO0FBRUEsYUFBSzBCLElBQUksR0FBR0EsSUFBSWtNLE1BQU01TixRQUFRMEIsS0FBSztBQUNsQzlJLGtCQUFRQSxRQUFRb0gsTUFBTSxJQUFBLElBQUE5SixPQUFRNkYsV0FBVyw0QkFBNEI2UixNQUFNbE0sQ0FBQyxDQUFDLENBQUM7UUFDL0U7QUFDQSxZQUFJa00sTUFBTTVOLFdBQVcsR0FBRztBQUN2QjRPLHVCQUFhQSxhQUFhNU8sTUFBTSxJQUFBLElBQUE5SixPQUFRNkYsV0FBVyw0QkFBNEI2UixNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLFdBQVdBLE1BQU01TixTQUFTLEdBQUc7QUFDNUI0Tyx1QkFBYUEsYUFBYTVPLE1BQU0sSUFBQSxLQUFBOUosT0FBU29XLGVBQWVzQixNQUFNNU4sTUFBTSxDQUFDO1FBQ3RFO0FBRUEsY0FBTTZPLFFBQVFyRyxTQUFTLE1BQVc7QUFDbEMsYUFBSzlHLElBQUksR0FBR0EsSUFBSWlNLFFBQVEzTixRQUFRMEIsS0FBSztBQUNwQyxjQUFJaU0sUUFBUWpNLENBQUMsRUFBRTJNLFNBQVNWLFFBQVFqTSxDQUFDLEVBQUU0TSxJQUFJO0FBQ3RDMVYsb0JBQVFBLFFBQVFvSCxNQUFNLElBQUEsSUFBQTlKLE9BQVE2RixXQUFXLDRCQUE0QjRSLFFBQVFqTSxDQUFDLEVBQUUyTSxJQUFJLENBQUM7VUFDdEYsT0FBTztBQUNOelYsb0JBQVFBLFFBQVFvSCxNQUFNLElBQUEsSUFBQTlKLE9BQ2pCNkYsV0FBVyw0QkFBNEI0UixRQUFRak0sQ0FBQyxFQUFFMk0sSUFBSSxDQUFDLEVBQUFuWSxPQUFHMlksS0FBSyxFQUFBM1ksT0FBRzZGLFdBQ3JFLDRCQUNBNFIsUUFBUWpNLENBQUMsRUFBRTRNLEVBQ1osQ0FBQztVQUNIO1FBQ0Q7QUFDQSxZQUFJWCxRQUFRM04sV0FBVyxHQUFHO0FBQ3pCLGNBQUkyTixRQUFRLENBQUMsRUFBRVUsU0FBU1YsUUFBUSxDQUFDLEVBQUVXLElBQUk7QUFDdENNLHlCQUFhQSxhQUFhNU8sTUFBTSxJQUFBLElBQUE5SixPQUMzQjZGLFdBQVcsNEJBQTRCNFIsUUFBUSxDQUFDLEVBQUVVLElBQUksQ0FBQztVQUM3RCxPQUFPO0FBQ05PLHlCQUFhQSxhQUFhNU8sTUFBTSxJQUFBLElBQUE5SixPQUMzQjZGLFdBQVcsNEJBQTRCNFIsUUFBUSxDQUFDLEVBQUVVLElBQUksQ0FBQyxFQUFBblksT0FBRzJZLEtBQUssRUFBQTNZLE9BQUc2RixXQUNyRSw0QkFDQTRSLFFBQVEsQ0FBQyxFQUFFVyxFQUNaLENBQUM7VUFDSDtRQUNELFdBQVdYLFFBQVEzTixTQUFTLEdBQUc7QUFDOUI0Tyx1QkFBYUEsYUFBYTVPLE1BQU0sSUFBQSxLQUFBOUosT0FBU29XLGVBQWVxQixRQUFRM04sTUFBTSxDQUFDO1FBQ3hFO0FBQ0EsWUFBSXBILFFBQVFvSCxTQUFTLEdBQUc7QUFDdkJwSCxvQkFBVUEsUUFBUStWLEtBQUs1UyxXQUFXLG9CQUFvQixDQUFDO0FBQ3ZELGNBQ0NuRCxRQUFRb0gsU0FDUixPQUNFQyxHQUFHM0MsWUFBWSxLQUFLdkIsV0FBVyxpQkFBaUIsR0FBR2lFLFVBQ25EQyxHQUFHM0MsWUFBWSxLQUFLdkIsV0FBVyxnQkFBZ0IsR0FBR2lFLFFBQ25EO0FBQ0RwSCxzQkFBVWdXLGFBQWFELEtBQUs1UyxXQUFXLG9CQUFvQixDQUFDO1VBQzdEO0FBQ0FnTSxxQkFBV3JRLFVBQVVSLFNBQ25CK0ksR0FBRzNDLFlBQVksS0FBS3ZCLFdBQVcsaUJBQWlCLEtBQ2pEbkQsV0FDQ3FILEdBQUczQyxZQUFZLEtBQUt2QixXQUFXLGdCQUFnQjtRQUNsRDtNQUNEO0lBQ0Q7QUFDQWdNLGVBQVc5USxXQUFXQyxRQUFRb0UsT0FBT25GO0FBQ3JDNFIsZUFBVytHLFlBQVk1WCxRQUFRdVIsY0FBYytELGlCQUFpQjtBQUM5RHpFLGVBQVdnSCxXQUFXN1gsUUFBUWdSLFlBQVlILFdBQVcrRyxZQUFZNVg7QUFDakUsUUFBSW1XLGtCQUFrQjtBQUNyQnRGLGlCQUFXaUgsTUFBTTlYLFFBQVF1SixPQUFPa0ksaUJBQWlCbE0sS0FBS3NQLGVBQWU7SUFDdEU7QUFFQWhFLGVBQVdrSCxTQUFTQyxNQUFNO0VBQzNCO0FBQ0EsUUFBTUMsYUFBYUEsQ0FBQzVGLE1BQU02RixjQUFjO0FBQ3ZDLFVBQU1DLE9BQU85RixLQUFLK0Y7QUFDbEIsVUFBTTtNQUFDeFM7SUFBSyxJQUFJeU07QUFDaEIsUUFBSWdHLFNBQVM7QUFDYixRQUFJQyxXQUFXLE9BQU9qRyxLQUFLa0csYUFBYTtBQUN4QyxRQUFJL047QUFDSixVQUFNcUUsWUFBWXdELEtBQUttRyxnQkFBZ0IsT0FBT25HLEtBQUttRyxhQUFhQyxXQUFXO0FBQzNFLFVBQU1DLGFBQWEsT0FBT3JHLEtBQUtzRyxZQUFZO0FBQzNDLFNBQUtuTyxJQUFJLEdBQUdBLElBQUkwTixVQUFVcFAsUUFBUTBCLEtBQUs7QUFDdEMsVUFBSUEsS0FBSzBOLFVBQVUxTixDQUFDLEVBQUVvTyxvQkFBb0J2RyxLQUFLNVEsTUFBTTRLLE1BQU1vRCxLQUFLQyxJQUFJLEdBQUcyQyxLQUFLNVEsTUFBTTBLLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHO0FBQ3JHO01BQ0Q7QUFHQStMLGdCQUFVMU4sQ0FBQyxFQUFFME0sZ0JBQWdCckk7QUFDN0JxSixnQkFBVTFOLENBQUMsRUFBRXFPLGNBQWMsQ0FBQ0g7QUFDNUJSLGdCQUFVMU4sQ0FBQyxFQUFFcEwsS0FBSzBaLE1BQU1KLGFBQWEzUCxHQUFHM0IsV0FBVzJCLEdBQUc3QjtJQUN2RDtBQUNBLFFBQUl3UixZQUFZO0FBQ2Y7SUFDRDtBQUNBLFFBQUksQ0FBQ0osWUFBWUgsU0FBU3RULFdBQVcsbUJBQW1CLEtBQUtBLFdBQVcsZ0JBQWdCLElBQUk7QUFBQSxVQUFBa1UsWUFBQUMsMkJBQ3hFYixJQUFBLEdBQUFjO0FBQUEsVUFBQTtBQUFuQixhQUFBRixVQUFBbEwsRUFBQSxHQUFBLEVBQUFvTCxRQUFBRixVQUFBRyxFQUFBLEdBQUFqRSxRQUF5QjtBQUFBLGdCQUFka0UsT0FBQUYsTUFBQWpaO0FBQ1YsY0FBSW9aLE1BQU1ELEtBQUsxWDtBQUVmLGNBQUkyWCxLQUFLO0FBQ1JBLGtCQUFNQSxJQUFJL00sTUFBTW9ELEtBQUtDLElBQUksR0FBRzBKLElBQUlqTixRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRWxNLFFBQVEsTUFBTSxHQUFHO0FBQ3BFLGdCQUFJbVosUUFBUXZVLFdBQVcsbUJBQW1CLEdBQUc7QUFDNUN3VCx1QkFBUztBQUNUO1lBQ0QsV0FBV2UsUUFBUXZVLFdBQVcsZ0JBQWdCLEdBQUc7QUFDaER5VCx5QkFBVztBQUNYO1lBQ0Q7VUFDRDtRQUNEO01BQUEsU0FBQWUsS0FBQTtBQUFBTixrQkFBQXBaLEVBQUEwWixHQUFBO01BQUEsVUFBQTtBQUFBTixrQkFBQU8sRUFBQTtNQUFBO0lBQ0Q7QUFDQSxRQUFJLENBQUNoQixZQUFZLENBQUNELFFBQVE7QUFDekI7SUFDRDtBQUNBLFFBQUksQ0FBQ3pTLFNBQVNBLE1BQU1rRCxXQUFXLEdBQUc7QUFDakM7SUFDRDtBQUNBLFVBQU1zTCxTQUFTLENBQUE7QUFDZixTQUFLNUosSUFBSSxHQUFHQSxJQUFJNUUsTUFBTWtELFFBQVEwQixLQUFLO0FBQ2xDOztRQUVDNUUsTUFBTTRFLENBQUMsRUFBRWpFLE9BQU87UUFFaEJYLE1BQU00RSxDQUFDLEVBQUUvSSxTQUNUbUUsTUFBTTRFLENBQUMsRUFBRS9JLE1BQU1xSCxTQUFTO1FBQ3ZCO0FBRUQsWUFBSXlFLFFBQVEzSCxNQUFNNEUsQ0FBQyxFQUFFL0k7QUFDckI4TCxnQkFBUUEsTUFBTWxCLE1BQU1vRCxLQUFLQyxJQUFJLEdBQUduQyxNQUFNcEIsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBRXZELFlBQUksQ0FBQ3BELEdBQUd0QixhQUFhLENBQUNzQixHQUFHdEIsVUFBVWIsS0FBSzJHLEtBQUssR0FBRztBQUMvQzZHLGlCQUFPQSxPQUFPdEwsTUFBTSxJQUFJeUU7UUFDekI7TUFDRDtJQUNEO0FBQ0EsUUFBSTZHLE9BQU90TCxXQUFXLEdBQUc7QUFDeEI7SUFDRDtBQUNBLFNBQUswQixJQUFJLEdBQUdBLElBQUkwTixVQUFVcFAsUUFBUTBCLEtBQUs7QUFDdEMsVUFBSUEsS0FBSzBOLFVBQVUxTixDQUFDLEVBQUVvTyxvQkFBb0J2RyxLQUFLNVEsTUFBTTRLLE1BQU1vRCxLQUFLQyxJQUFJLEdBQUcyQyxLQUFLNVEsTUFBTTBLLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHO0FBQ3JHO01BQ0Q7QUFDQStMLGdCQUFVMU4sQ0FBQyxFQUFFcU8sY0FBYztBQUMzQlgsZ0JBQVUxTixDQUFDLEVBQUVwTCxLQUFLMFosTUFBTS9QLEdBQUc3QjtBQUMzQixVQUFJa04sT0FBT3RMLFNBQVMsR0FBRztBQUN0Qm9QLGtCQUFVMU4sQ0FBQyxFQUFFK08sTUFBTW5GO01BQ3BCLE9BQU87QUFDTjhELGtCQUFVMU4sQ0FBQyxFQUFFdkwsS0FBS2UsUUFDakJvVSxPQUFPLENBQUMsS0FBSzhELFVBQVUxTixDQUFDLEVBQUV5TSxlQUFlLE9BQU8sS0FBQSxJQUFBalksT0FBU2taLFVBQVUxTixDQUFDLEVBQUV5TSxVQUFVO01BQ2xGO0lBQ0Q7RUFDRDtBQUNBLFFBQU11QyxtQkFBbUJBLENBQUN0QixXQUFXNVcsV0FBVztBQUMvQyxRQUFJLENBQUNBLFVBQVUsQ0FBQ0EsT0FBTzZRLFNBQVMsQ0FBQzdRLE9BQU82USxNQUFNQyxPQUFPO0FBQ3BEO0lBQ0Q7QUFDQSxlQUFXcUgsS0FBS25ZLE9BQU82USxNQUFNQyxPQUFPO0FBQ25DLFVBQUksQ0FBQzFKLE9BQU9DLE9BQU9ySCxPQUFPNlEsTUFBTUMsT0FBT3FILENBQUMsR0FBRztBQUMxQztNQUNEO0FBQ0F4QixpQkFBVzNXLE9BQU82USxNQUFNQyxNQUFNcUgsQ0FBQyxHQUFHdkIsU0FBUztJQUM1QztFQUNEO0FBQ0EsUUFBTXdCLGVBQWVBLENBQUN4QixXQUFXeUIsYUFBYTtBQUM3QyxRQUFJblA7QUFDSixTQUFLQSxJQUFJLEdBQUdBLElBQUkwTixVQUFVcFAsUUFBUTBCLEtBQUs7QUFDdEMwTixnQkFBVTFOLENBQUMsRUFBRStPLE1BQU07QUFDbkJyQixnQkFBVTFOLENBQUMsRUFBRW9QLFdBQVcxQixVQUFVMU4sQ0FBQyxFQUFFcVA7SUFDdEM7QUFDQSxRQUFJeFEsZUFBZTtBQUNsQnNRLGVBQVN6QixTQUFTO0FBQ2xCO0lBQ0Q7QUFDQSxVQUFNNVcsU0FBUztNQUNkQyxRQUFRO01BQ1JDLFFBQVE7TUFDUjhTLE1BQU07TUFDTndGLGFBQWE7TUFDYkMsU0FBUzdCLFVBQVVwUCxTQUFTO01BQzVCa1IsU0FBUzlCLFVBQVVwUCxTQUFTO0lBQzdCO0FBQ0EsVUFBTXNMLFNBQVMsQ0FBQTtBQUNmLFNBQUs1SixJQUFJLEdBQUdBLElBQUkwTixVQUFVcFAsUUFBUTBCLEtBQUs7QUFDdEMsVUFBSTVCLElBQUlzUCxVQUFVMU4sQ0FBQyxFQUFFb1A7QUFDckJoUixVQUFJK0UsaUJBQWlCL0UsR0FBR0csR0FBR1YsU0FBUztBQUNwQzZQLGdCQUFVMU4sQ0FBQyxFQUFFb08sa0JBQWtCaFE7QUFDL0J3TCxhQUFPQSxPQUFPdEwsTUFBTSxJQUFBLFlBQUE5SixPQUFnQjRKLENBQUM7SUFDdEM7QUFDQXRILFdBQU84UyxTQUFTQSxPQUFPcUQsS0FBSyxHQUFHO0FBQy9CblosUUFBSUwsSUFBSXFELE1BQU0sRUFDWjJULEtBQU1nRixVQUFTO0FBQ2ZULHVCQUFpQnRCLFdBQVcrQixJQUFJO0FBQ2hDTixlQUFTekIsU0FBUztJQUNuQixDQUFDLEVBQ0FsRSxLQUFNa0csU0FBUTtBQUNkLFVBQUksQ0FBQ0EsS0FBSztBQUNUN1Esd0JBQWdCO01BQ2pCO0FBQ0FzUSxlQUFTekIsU0FBUztJQUNuQixDQUFDO0VBQ0g7QUFDQSxRQUFNaUMsYUFBY0MsV0FBVTtBQUM3QixRQUFJQSxNQUFNQyxXQUFXO0FBQ3BCO0lBQ0Q7QUFDQSxhQUFBQyxLQUFBLEdBQUFDLFdBQXFCNUosU0FBQTJKLEtBQUFDLFNBQUF6UixRQUFBd1IsTUFBUztBQUE5QixZQUFXRSxTQUFBRCxTQUFBRCxFQUFBO0FBQ1YsVUFBSUUsV0FBV0osT0FBTztBQUNyQkksZUFBT0MsV0FBVztNQUNuQjtJQUNEO0FBQ0FMLFVBQU1DLFlBQVk7QUFDbEIsUUFBSUQsTUFBTWIsS0FBSztBQUNkbUIsY0FBUU4sS0FBSztJQUNkLE9BQU87QUFFTixZQUFNTyxnQkFBZ0JQLE1BQU1RLGlCQUFpQlIsTUFBTVAsYUFBYTtBQUNoRSxZQUFNZ0IsY0FBY1QsTUFBTW5iLEtBQUtlLFNBQVM7QUFDeEMsVUFDRTJhLGNBQWM3UixXQUFXLEtBQUsrUixZQUFZL1IsU0FBUyxLQUNuRDZSLGNBQWM3UixTQUFTLEtBQUsrUixZQUFZMU8sUUFBUXdPLGFBQWEsR0FDN0Q7QUFHRFAsY0FBTVUsWUFBWTtBQUNsQixjQUFNbFMsSUFBSWlTLFlBQVlFLE1BQU0sR0FBRztBQUMvQixTQUFDWCxNQUFNUCxTQUFTLElBQUlqUjtBQUNwQndSLGNBQU1RLGdCQUFnQlIsTUFBTVA7QUFDNUIsWUFBSWpSLEVBQUVFLFNBQVMsR0FBRztBQUNqQixXQUFBLEVBQUdzUixNQUFNbkQsVUFBVSxJQUFJck87UUFDeEI7QUFDQXdSLGNBQU1ZLGtCQUFOWixNQUFNWSxnQkFBa0I7VUFDdkJDLE9BQU9yUyxFQUFFLENBQUMsRUFBRUU7VUFDWm9TLEtBQUt0UyxFQUFFLENBQUMsRUFBRUU7UUFDWDtNQUNEO0FBQ0EsVUFBSXNSLE1BQU1VLFdBQVc7QUFDcEJWLGNBQU1lLFlBQVk7TUFDbkI7QUFDQSxVQUFJZixNQUFNWSxlQUFlO0FBQ3hCSSxtQkFBVyxNQUFNO0FBQ2hCaEIsZ0JBQU1pQixhQUFhakIsTUFBTVksY0FBY0MsT0FBT2IsTUFBTVksY0FBY0UsR0FBRztRQUN0RSxHQUFHLENBQUM7TUFDTDtJQUNEO0VBQ0Q7QUFDQSxRQUFNUixVQUFXTixXQUFVO0FBQzFCLFFBQUlBLE1BQU1DLFdBQVc7QUFDcEJELFlBQU1rQixnQkFBZ0JsQixNQUFNYixLQUFLLE9BQU8sTUFBTSxJQUFJO0FBQ2xEYSxZQUFNYixNQUFNO0lBQ2IsT0FBTztBQUNOWSxpQkFBV0MsS0FBSztJQUNqQjtFQUNEO0FBQ0EsUUFBTW1CLGNBQWNBLE1BQU07QUFDekIsVUFBTXJELFlBQVksQ0FBQTtBQUNsQixhQUFBc0QsTUFBQSxHQUFBQyxZQUFxQjlLLFNBQUE2SyxNQUFBQyxVQUFBM1MsUUFBQTBTLE9BQVM7QUFBOUIsWUFBV2hCLFNBQUFpQixVQUFBRCxHQUFBO0FBQ1YsVUFBSWhCLE9BQU9uYixVQUFVeVMsa0JBQWtCMEksT0FBT25iLFVBQVV3UyxNQUFNO0FBQzdEcUcsa0JBQVVBLFVBQVVwUCxNQUFNLElBQUkwUjtNQUMvQjtJQUNEO0FBQ0EsUUFBSXRDLFVBQVVwUCxXQUFXLEdBQUc7QUFDM0I4SyxtQkFDRUMsYUFBWTtBQUNab0MsdUJBQWVwQyxPQUFPO01BQ3ZCLEdBQ0M2SCxTQUFRO0FBQ1IsYUFBSzNkLEdBQUdpRSxPQUFPMFosS0FBSztVQUFDdlosS0FBSztRQUFRLENBQUM7TUFDcEMsQ0FDRDtBQUNBO0lBQ0Q7QUFDQXVYLGlCQUFheEIsV0FBWXlELGNBQWE7QUFDckMsVUFBSUMsV0FBVztBQUNmLFVBQUlDLGFBQWE7QUFBQSxVQUFBQyxhQUFBOUMsMkJBQ0syQyxRQUFBLEdBQUFJO0FBQUEsVUFBQTtBQUF0QixhQUFBRCxXQUFBak8sRUFBQSxHQUFBLEVBQUFrTyxTQUFBRCxXQUFBNUMsRUFBQSxHQUFBakUsUUFBZ0M7QUFBQSxnQkFBckIrRyxVQUFBRCxPQUFBL2I7QUFDVixjQUFJZ2MsUUFBUW5DLGNBQWNtQyxRQUFRcEMsVUFBVTtBQUMzQyxnQkFBSW9DLFFBQVF6QyxLQUFLO0FBQ2hCcUMsMkJBQUFBLFdBQWFJO1lBQ2QsV0FBV0EsUUFBUUMsWUFBWSxJQUFJLEdBQUc7QUFDckNELHNCQUFRRSxPQUFPO1lBQ2hCO1VBQ0QsT0FBTztBQUdOTCx5QkFBYTtVQUNkO1FBQ0Q7TUFBQSxTQUFBeEMsS0FBQTtBQUFBeUMsbUJBQUFuYyxFQUFBMFosR0FBQTtNQUFBLFVBQUE7QUFBQXlDLG1CQUFBeEMsRUFBQTtNQUFBO0FBQ0EsVUFBSXNDLFVBQVU7QUFDYmxCLGdCQUFRa0IsUUFBUTtNQUNqQixXQUFXLENBQUNDLFlBQVk7QUFDdkJqSSxxQkFDRUMsYUFBWTtBQUNab0MseUJBQWVwQyxPQUFPO1FBQ3ZCLEdBQ0M2SCxTQUFRO0FBQ1IsZUFBSzNkLEdBQUdpRSxPQUFPMFosS0FBSztZQUFDdlosS0FBSztVQUFRLENBQUM7UUFDcEMsQ0FDRDtNQUNEO0lBQ0QsQ0FBQztFQUNGO0FBQ0EsUUFBTWdhLGdCQUFnQkEsTUFBTTtBQUMzQixRQUFJdkwsZ0JBQWdCRixVQUFVO0FBQzdCO0lBQ0Q7QUFDQUUsbUJBQWV2RixLQUFLLE9BQU87QUFDM0J1RixpQkFBYXhPLE9BQU87QUFDcEJ3TyxpQkFBYTVRLFFBQVE2RSxXQUFXLGlCQUFpQjtBQUNqRCtMLGlCQUFhd0wsaUJBQWlCLFNBQVNiLFdBQVc7QUFDbEQsUUFBSXpLLFdBQVc7QUFDZEEsZ0JBQVV1TCxXQUFXQyxhQUFhMUwsY0FBY0UsU0FBUztJQUMxRCxPQUFPO0FBQ05MLGNBQVFsUixPQUFPcVIsWUFBWTtJQUM1QjtFQUNEO0FBQ0EsUUFBTTJMLGtCQUFrQkEsTUFBTTtBQUM3QixRQUFJLENBQUMzTCxjQUFjO0FBQ2xCO0lBQ0Q7QUFDQSxRQUFJNEwsYUFBYTtBQUNqQixhQUFBQyxNQUFBLEdBQUFDLFlBQXFCL0wsU0FBQThMLE1BQUFDLFVBQUE1VCxRQUFBMlQsT0FBUztBQUE5QixZQUFXakMsU0FBQWtDLFVBQUFELEdBQUE7QUFDVixVQUFJakMsT0FBT25iLFVBQVV1UyxXQUFXO0FBQy9CNEsscUJBQWE7QUFDYjtNQUNEO0lBQ0Q7QUFDQTVMLGlCQUFhbUQsV0FBVyxDQUFDeUk7RUFDMUI7QUFDQSxRQUFNRyxvQkFBb0I7SUFDekJDLFlBQVk7TUFDWGpSLEtBQUEsR0FBQTNNLE9BQVFqQixHQUFHQyxPQUFPQyxJQUNqQixjQUNELEdBQUMsaUZBQUE7OztNQUdENGUsU0FBU0EsQ0FBQ0MsYUFBYUMsYUFBYTtBQUNuQyxZQUFJRCxlQUFlQSxZQUFZaFUsVUFBVSxHQUFHO0FBQzNDLGdCQUFNaEUsTUFBTWdZLFlBQVksQ0FBQyxFQUFFelEsTUFBTW9ELEtBQUtDLElBQUksR0FBR29OLFlBQVksQ0FBQyxFQUFFM1EsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzdFLGdCQUFNLENBQUEsRUFBR2lJLE1BQU0sSUFBSTBJO0FBQ25CLGNBQUlFLFNBQVM7QUFDYjVULHlCQUFBQSxhQUFlLElBQUlRLE9BQUEsS0FBQTVLLE9BQVkrSixHQUFHb0MsaUJBQWUsSUFBQSxDQUFJO0FBQ3JELG1CQUFTWCxJQUFJLEdBQUdBLElBQUk0SixPQUFPdEwsUUFBUTBCLEtBQUs7QUFDdkNwQix1QkFBVzhGLFlBQVk7QUFDdkIsa0JBQU1wRCxJQUFJMUMsV0FBVzJDLEtBQUtxSSxPQUFPNUosQ0FBQyxDQUFDO0FBQ25DLGdCQUFJc0IsS0FBS0EsRUFBRWhELFNBQVMsR0FBRztBQUN0QnNMLHFCQUFPNUosQ0FBQyxJQUFJNEosT0FBTzVKLENBQUMsRUFBRTZCLE1BQU1vRCxLQUFLQyxJQUFJLEdBQUcwRSxPQUFPNUosQ0FBQyxFQUFFMkIsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ25FLGtCQUFJckgsUUFBUXNQLE9BQU81SixDQUFDLEdBQUc7QUFDdEJ3Uyx5QkFBUztjQUNWO1lBQ0QsT0FBTztBQUNONUkscUJBQU82SSxPQUFPelMsR0FBRyxDQUFDO0FBQ2xCQTtZQUNEO1VBQ0Q7QUFDQTRKLGlCQUFPNEksU0FBU0E7QUFDaEIsY0FBSUQsYUFBYWpZLEtBQUs7QUFDckJzUCxtQkFBTzhJLGFBQWFwWTtVQUNyQjtBQUVBLGlCQUFPc1A7UUFDUjtBQUNBLGVBQU87TUFDUjtJQUNEO0lBQ0ErSSxnQkFBZ0I7TUFDZnhSLEtBQUEsR0FBQTNNLE9BQVFqQixHQUFHQyxPQUFPQyxJQUNqQixjQUNELEdBQUMsaUdBQUE7TUFDRDRlLFNBQVVDLGlCQUFnQjtBQUN6QixZQUFJQSxlQUFlQSxZQUFZM0ssU0FBUzJLLFlBQVkzSyxNQUFNaUwsVUFBVTtBQUNuRSxnQkFBTWhKLFNBQVMwSSxZQUFZM0ssTUFBTWlMO0FBQ2pDLG1CQUFTNVMsSUFBSSxHQUFHQSxJQUFJNEosT0FBT3RMLFFBQVEwQixLQUFLO0FBQ3ZDNEosbUJBQU81SixDQUFDLElBQUk0SixPQUFPNUosQ0FBQyxFQUFFL0ksTUFBTTRLLE1BQU1vRCxLQUFLQyxJQUFJLEdBQUcwRSxPQUFPNUosQ0FBQyxFQUFFL0ksTUFBTTBLLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztVQUNoRjtBQUNBLGlCQUFPaUk7UUFDUjtBQUNBLGVBQU87TUFDUjtJQUNEO0lBQ0E0SSxRQUFRO01BQ1ByUixLQUFBLEdBQUEzTSxPQUFRakIsR0FBR0MsT0FBT0MsSUFBSSxjQUFjLEdBQUMsZ0VBQUE7TUFDckM0ZSxTQUFTQSxDQUFDQyxhQUFhQyxhQUFhO0FBQ25DLFlBQUlELGVBQWVBLFlBQVkzSyxTQUFTMkssWUFBWTNLLE1BQU1DLFNBQVMsQ0FBQzBLLFlBQVkzSyxNQUFNQyxNQUFNLEVBQUUsR0FBRztBQUVoRyxxQkFBV3FILEtBQUtxRCxZQUFZM0ssTUFBTUMsT0FBTztBQUN4QyxnQkFBSSxDQUFDMUosT0FBT0MsT0FBT21VLFlBQVkzSyxNQUFNQyxPQUFPcUgsQ0FBQyxHQUFHO0FBQy9DO1lBQ0Q7QUFDQSxnQkFBSTRELFNBQVNQLFlBQVkzSyxNQUFNQyxNQUFNcUgsQ0FBQyxFQUFFaFk7QUFDeEM0YixxQkFBU0EsT0FBT2hSLE1BQU1vRCxLQUFLQyxJQUFJLEdBQUcyTixPQUFPbFIsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzFELGtCQUFNaUksU0FBUyxDQUFDaUosTUFBTTtBQUN0QmpKLG1CQUFPNEksU0FBUztBQUNoQixnQkFBSUQsYUFBYU0sUUFBUTtBQUN4QmpKLHFCQUFPOEksYUFBYUc7WUFDckI7QUFFQSxtQkFBT2pKO1VBQ1I7UUFDRDtBQUNBLGVBQU87TUFDUjtJQUNEO0lBQ0FrSixlQUFlO01BQ2QzUixLQUFBLEdBQUEzTSxPQUFRakIsR0FBR0MsT0FBT0MsSUFDakIsY0FDRCxHQUFDLHNHQUFBO01BQ0Q0ZSxTQUFVQyxpQkFBZ0I7QUFDekIsWUFBSUEsZUFBZUEsWUFBWTNLLFNBQVMySyxZQUFZM0ssTUFBTW9MLGlCQUFpQjtBQUMxRSxnQkFBTW5KLFNBQVMwSSxZQUFZM0ssTUFBTW9MO0FBQ2pDLG1CQUFTL1MsSUFBSSxHQUFHQSxJQUFJNEosT0FBT3RMLFFBQVEwQixLQUFLO0FBQ3ZDNEosbUJBQU81SixDQUFDLElBQUk0SixPQUFPNUosQ0FBQyxFQUFFL0ksTUFBTTRLLE1BQU1vRCxLQUFLQyxJQUFJLEdBQUcwRSxPQUFPNUosQ0FBQyxFQUFFL0ksTUFBTTBLLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztVQUNoRjtBQUNBLGlCQUFPaUk7UUFDUjtBQUNBLGVBQU87TUFDUjtJQUNEO0lBQ0FvSixrQkFBa0I7TUFDakI3UixLQUFBLEdBQUEzTSxPQUFRakIsR0FBR0MsT0FBT0MsSUFDakIsY0FDRCxHQUFDLGtGQUFBO01BQ0Q0ZSxTQUFVQyxpQkFBZ0I7QUFDekIsWUFBSUEsZUFBZUEsWUFBWTNLLFNBQVMySyxZQUFZM0ssTUFBTUMsT0FBTztBQUNoRSxxQkFBV3FILEtBQUtxRCxZQUFZM0ssTUFBTUMsT0FBTztBQUN4QyxnQkFBSTBLLFlBQVkzSyxNQUFNQyxNQUFNcUgsQ0FBQyxFQUFFckIsWUFBWTtBQUMxQyxvQkFBTWhFLFNBQVMwSSxZQUFZM0ssTUFBTUMsTUFBTXFILENBQUMsRUFBRXJCO0FBQzFDLHVCQUFTNU4sSUFBSSxHQUFHQSxJQUFJNEosT0FBT3RMLFFBQVEwQixLQUFLO0FBQ3ZDNEosdUJBQU81SixDQUFDLElBQUk0SixPQUFPNUosQ0FBQyxFQUFFL0ksTUFBTTRLLE1BQU1vRCxLQUFLQyxJQUFJLEdBQUcwRSxPQUFPNUosQ0FBQyxFQUFFL0ksTUFBTTBLLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztjQUNoRjtBQUNBLHFCQUFPaUk7WUFDUjtVQUNEO1FBQ0Q7QUFDQSxlQUFPO01BQ1I7SUFDRDtFQUNEO0FBQ0EsUUFBTXFKLG9CQUFvQjtJQUN6QkMsYUFBYTtNQUNacFQsTUFBTTtNQUNOcVQsU0FBUyxDQUFDLFlBQVk7TUFDdEJqWixPQUFPLENBQUM7TUFDUmtaLE1BQU07TUFDTkMsTUFBTTtNQUNOQyxjQUFjO0lBQ2Y7SUFDQUMsVUFBVTtNQUNUelQsTUFBTTtNQUNOcVQsU0FBUyxDQUFDLGtCQUFrQixRQUFRO01BQ3BDalosT0FBTyxDQUFDO01BQ1JrWixNQUFNO01BQ05DLE1BQU07TUFDTkMsY0FBYztJQUNmO0lBQ0FFLFVBQVU7TUFDVDFULE1BQU07TUFDTnFULFNBQVMsQ0FBQyxjQUFjLGdCQUFnQjtNQUN4Q2paLE9BQU8sQ0FBQztNQUNSa1osTUFBTTtNQUNOQyxNQUFNO01BQ05DLGNBQWM7SUFDZjtJQUNBRyxRQUFRO01BQ1AzVCxNQUFNO01BQ05xVCxTQUFTLENBQUMsZUFBZTtNQUN6QmpaLE9BQU8sQ0FBQztNQUNSa1osTUFBTTtNQUNOQyxNQUFNO01BQ05DLGNBQWM7SUFDZjtJQUNBSSxXQUFXO01BQ1Y1VCxNQUFNO01BQ05xVCxTQUFTLENBQUMsa0JBQWtCO01BQzVCalosT0FBTyxDQUFDO01BQ1JrWixNQUFNO01BQ05DLE1BQU07TUFDTkMsY0FBYztJQUNmO0VBQ0Q7QUFFQSxRQUFNSyxLQUFLO0FBQ1gsUUFBTUMsTUFBTTtBQUNaLFFBQU1DLE1BQU07QUFDWixRQUFNQyxNQUFNO0FBQ1osUUFBTUMsUUFBUTtBQUNkLFFBQU1DLE9BQU87QUFDYixRQUFNQyxTQUFTO0FBQ2YsUUFBTUMsS0FBSztBQUNYLFFBQU1DLE9BQU87QUFDYixRQUFNQyxNQUFNO0FBQ1osUUFBTUMsTUFBTTtFQUNaLE1BQU1DLGVBQWU7SUFDcEJDLGVBQWVoYSxNQUFNO0FBQ3BCLFdBQUtpYSxXQUFXLEdBQUdqYSxJQUFJO0lBQ3hCO0lBQ0FrYSxxQkFBcUI7SUFDckJELFdBQVdFLE1BQU1DLE1BQU14UCxPQUFPN0ssS0FBSytKLFdBQVc7QUFJN0MsVUFBSXNRLE1BQU07QUFDVCxZQUFJN04sUUFBUTtBQUNYNk4sZUFBS0MsTUFBTTtRQUNaO0FBQ0EsYUFBS0MsZ0JBQWdCO0FBQ3JCLGFBQUtDLFVBQVVILEtBQUtJO0FBQ3BCLGFBQUt4SSxtQkFBbUJwSDtBQUN4QixhQUFLNlAsY0FBYzFhLE9BQU9BLElBQUlnRSxTQUFTLElBQUloRSxJQUFJdUgsTUFBTSxDQUFDLElBQUk7QUFDMUQsYUFBS29ULGlCQUFpQixDQUFDdGUsU0FBUyxLQUFLbWUsU0FBUyxLQUFLO0FBRW5ELGFBQUtJLGFBQWE7QUFDbEIsWUFBSSxDQUFDLEtBQUtELGtCQUFrQixLQUFLRSxhQUFhO0FBQzdDLGVBQUtBLFlBQVlDLE1BQU0vYyxVQUFVO1FBQ2xDO0FBQ0FzYyxhQUFLNWYsT0FBTyxLQUFLc2dCLFFBQVE7TUFDMUIsT0FBTztBQUNOLGFBQUtSLGdCQUFnQjtBQUVyQixhQUFLdEksbUJBQW1CO0FBQ3hCLGFBQUt5SSxjQUFjO0FBQ25CLGFBQUtDLGlCQUFpQjtBQUN0QixZQUFJLENBQUM5TixRQUFRO0FBQ1p3TixpQkFBTzlULEtBQUssTUFBTTtBQUNsQjhULGVBQUsxUyxZQUFZO0FBQ2pCLGNBQUkzSCxLQUFLO0FBQ1JxYSxpQkFBSzVmLE9BQU84TCxLQUFLLE9BQU8sSUFBSSxDQUFDO0FBQzdCLGdCQUFJc0UsT0FBTztBQUNWQSxvQkFBTTBNLFdBQVd5RCxhQUFhWCxNQUFNeFAsTUFBTW9RLFdBQVc7QUFDckRwUSxzQkFBUUEsTUFBTW9RO1lBQ2YsV0FBV2IsTUFBTTtBQUNoQkEsbUJBQUszZixPQUFPNGYsSUFBSTtZQUNqQjtVQUNELFdBQVdELFFBQVFBLEtBQUtLLFlBQVk7QUFDbkNKLGlCQUFLNWYsT0FBTzhMLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDM0I2VCxpQkFBSzNmLE9BQU80ZixJQUFJO1VBQ2pCO1FBQ0Q7QUFDQSxhQUFLVSxXQUFXeFUsS0FBSyxNQUFNO0FBQzNCLGFBQUt3VSxTQUFTcFQsWUFBWTtBQUMxQixjQUFNdVQsT0FBTzNVLEtBQUssR0FBRztBQUNyQjJVLGFBQUs5YixPQUFPO0FBQ1o4YixhQUFLNUQsaUJBQWlCLFNBQVMsS0FBSzNZLEtBQUt3YyxLQUFLLElBQUksQ0FBQztBQUNuREQsYUFBS3pnQixPQUFPOEwsS0FBS3RDLEdBQUduRCxNQUFNRyxLQUFLLElBQUksQ0FBQztBQUNwQ2lhLGFBQUt2ZSxRQUFRb0QsV0FBVyxjQUFjO0FBQ3RDLGFBQUtnYixTQUFTdGdCLE9BQU95Z0IsSUFBSTtBQUN6QmIsZUFBTzlULEtBQUtzRyxTQUFTLE9BQU8sTUFBTTtBQUNsQ3dOLGFBQUsxUyxZQUFZO0FBQ2pCLFlBQUk2RSxRQUFRO0FBQ1g2TixlQUFLQyxNQUFNO1FBQ1o7QUFDQUQsYUFBSzVmLE9BQU8sS0FBS3NnQixRQUFRO0FBQ3pCLFlBQUlsUSxPQUFPO0FBQ1ZBLGdCQUFNME0sV0FBV3lELGFBQWFYLE1BQU14UCxNQUFNb1EsV0FBVztRQUN0RCxXQUFXYixNQUFNO0FBQ2hCQSxlQUFLM2YsT0FBTzRmLElBQUk7UUFDakI7QUFDQSxhQUFLZSxjQUFjO0FBQ25CLGFBQUtDLFlBQVk7QUFDakIsYUFBS2IsVUFBVTtNQUNoQjtBQUNBLFdBQUtjLGlCQUFpQnZSO0FBQ3RCLFdBQUtxUSxPQUFPQTtBQUNaLFdBQUttQixTQUFTdFgsR0FBR2hCO0FBQ2pCLFdBQUtvWCxPQUFPQTtBQUNaLFdBQUtuSSxrQkFBa0IsS0FBS0Q7QUFDNUIsV0FBS3VKLGdCQUFnQixLQUFLYjtBQUMxQixXQUFLdkksZ0JBQWdCLEtBQUtrSjtBQUMxQixXQUFLbkosYUFBYSxLQUFLdUk7QUFDdkIsV0FBS25nQixRQUFRdVM7QUFDYixXQUFLMk8saUJBQWlCM087QUFDdEIsV0FBSzRPLG9CQUFvQixLQUFLeko7QUFDOUIsV0FBSzBKLGVBQWUsS0FBS2pCO0FBQ3pCLFdBQUtrQixrQkFBa0IsS0FBS2pCO0FBQzVCLFdBQUtrQixrQkFBa0IsS0FBS1A7QUFDNUIsVUFBSSxLQUFLZCxXQUFXLEtBQUtySSxZQUFZO0FBQ3BDLGFBQUtxSSxRQUFRN2QsUUFBUSxLQUFLd1Y7TUFDM0I7QUFDQXRHLGNBQVFBLFFBQVE3SCxNQUFNLElBQUk7SUFDM0I7SUFDQTRXLGVBQWU7QUFDZCxXQUFLUSxjQUFjN1UsS0FBSyxNQUFNO0FBQzlCLFVBQUkyVSxPQUFPO0FBQ1gsVUFBSSxLQUFLakosb0JBQW9CLEtBQUtBLGlCQUFpQmpPLFNBQVMsR0FBRztBQUM5RGtYLGVBQU8zVSxLQUFLLEdBQUc7QUFDZjJVLGFBQUs5YixPQUFPO0FBQ1o4YixhQUFLNUQsaUJBQWlCLFNBQVMsS0FBS3RXLE9BQU9tYSxLQUFLLElBQUksQ0FBQztBQUNyREQsYUFBS3pnQixPQUFPOEwsS0FBS3RDLEdBQUduRCxNQUFNRSxRQUFRLElBQUksQ0FBQztBQUN2Q2thLGFBQUt2ZSxRQUFRb0QsV0FBVyxpQkFBaUI7QUFDekMsYUFBS3FiLFlBQVkzZ0IsT0FBTzhMLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDdkMsYUFBSzZVLFlBQVkzZ0IsT0FBT3lnQixJQUFJO01BQzdCO0FBQ0EsVUFBSSxDQUFDalgsR0FBR3pCLG9CQUFvQixLQUFLeVAsZ0JBQWdCLEdBQUc7QUFDbkRpSixlQUFPM1UsS0FBSyxHQUFHO0FBQ2YyVSxhQUFLOWIsT0FBTztBQUNaOGIsYUFBSzVELGlCQUFpQixTQUFTLEtBQUszWSxLQUFLd2MsS0FBSyxJQUFJLENBQUM7QUFDbkRELGFBQUt6Z0IsT0FBTzhMLEtBQUt0QyxHQUFHbkQsTUFBTUMsUUFBUSxJQUFJLENBQUM7QUFDdkNtYSxhQUFLdmUsUUFBUW9ELFdBQVcsaUJBQWlCO0FBQ3pDLGFBQUtxYixZQUFZM2dCLE9BQU84TCxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQ3ZDLGFBQUs2VSxZQUFZM2dCLE9BQU95Z0IsSUFBSTtBQUM1QixZQUFJLENBQUMzVyxpQkFBaUJOLEdBQUdkLGFBQWE7QUFDckMsZUFBSzBYLGNBQWN0VSxLQUFLLE1BQU07QUFDOUIyVSxpQkFBTzNVLEtBQUssR0FBRztBQUNmMlUsZUFBSzliLE9BQU87QUFDWjhiLGVBQUs1RCxpQkFBaUIsU0FBUyxLQUFLbFcsS0FBSytaLEtBQUssSUFBSSxDQUFDO0FBQ25ERCxlQUFLemdCLE9BQU84TCxLQUFLdEMsR0FBR25ELE1BQU1NLE1BQU0sSUFBSSxDQUFDO0FBQ3JDOFosZUFBS3ZlLFFBQVFvRCxXQUFXLGVBQWU7QUFDdkMsZUFBSzhhLFlBQVlwZ0IsT0FBTzhMLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDdkMsZUFBS3NVLFlBQVlwZ0IsT0FBT3lnQixJQUFJO0FBQzVCQSxpQkFBTzNVLEtBQUssR0FBRztBQUNmMlUsZUFBSzliLE9BQU87QUFDWjhiLGVBQUs1RCxpQkFBaUIsU0FBUyxLQUFLalcsR0FBRzhaLEtBQUssSUFBSSxDQUFDO0FBQ2pERCxlQUFLemdCLE9BQU84TCxLQUFLdEMsR0FBR25ELE1BQU1PLElBQUksSUFBSSxDQUFDO0FBQ25DNlosZUFBS3ZlLFFBQVFvRCxXQUFXLGFBQWE7QUFDckMsZUFBSzhhLFlBQVlwZ0IsT0FBTzhMLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDdkMsZUFBS3NVLFlBQVlwZ0IsT0FBT3lnQixJQUFJO0FBQzVCLGVBQUtFLFlBQVkzZ0IsT0FBTyxLQUFLb2dCLFdBQVc7UUFDekM7TUFDRDtBQUNBLFdBQUtFLFdBQVd4VSxLQUFLLE1BQU07QUFDM0IsV0FBS3dVLFNBQVNwVCxZQUFZO0FBQzFCLFdBQUtvVCxTQUFTdGdCLE9BQU8sS0FBSzJnQixXQUFXO0FBQ3JDLFdBQUtDLFlBQVk5VSxLQUFLLE1BQU07QUFDNUIsV0FBSzhVLFVBQVUxVCxZQUFZO0FBQzNCLFdBQUswVCxVQUFVUCxNQUFNL2MsVUFBVTtBQUMvQm1kLGFBQU8zVSxLQUFLLEdBQUc7QUFDZjJVLFdBQUs5YixPQUFPO0FBQ1o4YixXQUFLNUQsaUJBQWlCLFNBQVMsS0FBS3BXLFFBQVFpYSxLQUFLLElBQUksQ0FBQztBQUN0REQsV0FBS3pnQixPQUFPOEwsS0FBS3RDLEdBQUduRCxNQUFNSSxTQUFTLElBQUksQ0FBQztBQUN4Q2dhLFdBQUt2ZSxRQUFRb0QsV0FBVyxrQkFBa0I7QUFDMUMsV0FBS3NiLFVBQVU1Z0IsT0FBTzhMLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDckMsV0FBSzhVLFVBQVU1Z0IsT0FBT3lnQixJQUFJO0FBQzFCLFdBQUtILFNBQVN0Z0IsT0FBTyxLQUFLNGdCLFNBQVM7SUFDcEM7SUFDQVMsa0JBQWtCQyxtQkFBbUI7QUFDcEMsVUFDQyxLQUFLUixVQUNMNUMsa0JBQWtCLEtBQUs0QyxNQUFNLEtBQzdCNUMsa0JBQWtCLEtBQUs0QyxNQUFNLEVBQUV4QyxRQUMvQixDQUFDZ0QsbUJBQ0E7QUFDRCxhQUFLUixTQUFTdFgsR0FBR2hCO01BQ2xCO0FBQ0EsV0FBSzFJLFFBQVF5UztBQUNiLFlBQU1qUyxPQUFPO0FBQ2J1YixpQkFBVyxNQUFNO0FBQ2hCdmIsYUFBS2loQixXQUFXRCxpQkFBaUI7TUFDbEMsR0FBRzlYLEdBQUdsQixhQUFhO0lBQ3BCO0lBQ0FrWixXQUFXO0FBQ1YsWUFBTUMsT0FBTzNWLEtBQUssTUFBTTtBQUN4QjJWLFdBQUtDLFNBQVM7QUFDZEQsV0FBSzVFLGlCQUFpQixVQUFVLEtBQUs4RSxPQUFPakIsS0FBSyxJQUFJLENBQUM7QUFDdEQsV0FBS2UsT0FBT0E7QUFDWixZQUFNbmhCLE9BQU87QUFDYixZQUFNWixPQUFPb00sS0FBSyxPQUFPO0FBQ3pCcE0sV0FBS21ELE9BQU87QUFDWm5ELFdBQUtraUIsT0FBT3BZLEdBQUdqQjtBQUNmLFVBQUksQ0FBQ3VCLGVBQWU7QUFXbkJwSyxhQUFLbWQsaUJBQWlCLFNBQVVnRixXQUFVO0FBQ3pDLGdCQUFNdGMsTUFBTXNjLE1BQU10YyxPQUFPO0FBQ3pCLGNBQ0NqRixLQUFLd2hCLE9BQ0x4aEIsS0FBS3loQixZQUFZekMsT0FDakIsQ0FBQ2hmLEtBQUswaEIsb0JBQ0x6YyxRQUFRc1osT0FBT3RaLFFBQVF1WixPQUFPdlosUUFBUXdaLE9BQU94WixRQUFReVosUUFDckQ7QUFDRDFlLGlCQUFLd2hCLE1BQU07VUFDWjtBQUNBLGNBQUl4aEIsS0FBS3doQixLQUFLO0FBQ2IsbUJBQU87VUFDUjtBQUNBLGNBQUl2YyxRQUFRNFosTUFBTTVaLFFBQVE2WixRQUFRN1osUUFBUTBaLFFBQVExWixRQUFRMlosUUFBUTtBQUVqRSxnQkFBSTVlLEtBQUsyaEIsYUFBYSxHQUFHO0FBQ3hCLHFCQUFPM2hCLEtBQUs0aEIsV0FBV0wsS0FBSztZQUM3QjtVQUNELE9BQU87QUFDTixnQkFBSXRjLFFBQVF3WixPQUFPemUsS0FBS3loQixZQUFZekMsT0FBTyxDQUFDaGYsS0FBSzZoQixrQkFBa0IsR0FBRztBQUVyRTdoQixtQkFBSzhoQixPQUFPO0FBQ1o7WUFDRDtBQUdBLGdCQUFJOWhCLEtBQUtvZixvQkFBb0I7QUFDNUI7WUFDRDtBQUNBcGYsaUJBQUsrZ0Isa0JBQWtCOWIsUUFBUXFaLE1BQU1yWixRQUFROFosT0FBTzlaLFFBQVF3WixHQUFHO1VBQ2hFO0FBQ0EsaUJBQU87UUFDUixDQUFDO0FBQ0RyZixhQUFLbWQsaUJBQWlCLFdBQVlnRixXQUFVO0FBQzNDLGdCQUFNdGMsTUFBTXNjLE1BQU10YyxPQUFPO0FBQ3pCakYsZUFBS3loQixVQUFVeGM7QUFDZmpGLGVBQUsyaEIsV0FBVztBQUVoQixjQUFJLENBQUMzaEIsS0FBS3doQixPQUFPdmMsUUFBUStaLE9BQU8sQ0FBQ2hmLEtBQUswaEIsaUJBQWlCO0FBRXREMWhCLGlCQUFLd2hCLE1BQU07VUFDWixXQUNDeGhCLEtBQUt3aEIsT0FDTHZjLFFBQVErWixPQUNSLEVBQUcvWixPQUFPLE1BQU1BLE9BQU8sTUFBUUEsT0FBTyxNQUFNQSxPQUFPLE1BQU9BLFFBQVEsTUFDakU7QUFJRGpGLGlCQUFLd2hCLE1BQU07VUFDWjtBQUNBLGNBQUl4aEIsS0FBS3doQixLQUFLO0FBQ2IsbUJBQU87VUFDUjtBQUVBLGNBQUl2YyxRQUFRdVosS0FBSztBQUNoQixtQkFBT3hlLEtBQUtxaEIsT0FBT0UsS0FBSztVQUN6QjtBQUVBLGlCQUFPdGMsUUFBUXdaLE1BQU1oTyxRQUFROFEsS0FBSyxJQUFJO1FBQ3ZDLENBQUM7QUFFRG5pQixhQUFLbWQsaUJBQWlCLFlBQWFnRixXQUFVO0FBQzVDdmhCLGVBQUsyaEI7QUFDTCxpQkFBTzNoQixLQUFLNGhCLFdBQVdMLEtBQUs7UUFDN0IsQ0FBQztBQUNEdGlCLFVBQUVHLElBQUksRUFBRXlELEdBQUcsU0FBUyxNQUFNO0FBQ3pCeVgscUJBQVd0YSxJQUFJO1FBQ2hCLENBQUM7QUFLRGYsVUFBRUcsSUFBSSxFQUFFeUQsR0FDUHpELEtBQUsyaUIsdUJBQXVCLFVBQWEzaUIsS0FBSzRpQixrQkFBa0IscUJBQXFCLFFBQ3JGLEtBQUtDLFNBQVM3QixLQUFLLElBQUksQ0FDeEI7QUFFQSxZQUFJO0FBR0huaEIsWUFBRUcsSUFBSSxFQUFFeUQsR0FBRyxvQkFBb0IsTUFBTTtBQUNwQzdDLGlCQUFLeWhCLFVBQVV6QztBQUNmaGYsaUJBQUswaEIsa0JBQWtCO0FBQ3ZCMWhCLGlCQUFLd2hCLE1BQU07QUFDWHhoQixpQkFBS29mLHFCQUFxQjtVQUMzQixDQUFDO0FBQ0RuZ0IsWUFBRUcsSUFBSSxFQUFFeUQsR0FBRyxrQkFBa0IsTUFBTTtBQUNsQzdDLGlCQUFLeWhCLFVBQVV6QztBQUNmaGYsaUJBQUswaEIsa0JBQWtCO0FBQ3ZCMWhCLGlCQUFLd2hCLE1BQU07QUFDWHhoQixpQkFBS29mLHFCQUFxQjtVQUMzQixDQUFDO0FBQ0RuZ0IsWUFBRUcsSUFBSSxFQUFFeUQsR0FBRyxhQUFhLE1BQU07QUFDN0I3QyxpQkFBS3doQixNQUFNO0FBQ1gsZ0JBQUl4aEIsS0FBS29mLG9CQUFvQjtBQUM1QjtZQUNEO0FBQ0FwZixpQkFBSytnQixrQkFBa0IsS0FBSztVQUM3QixDQUFDO1FBQ0YsUUFBUTtRQUVSO0FBQ0E5aEIsVUFBRUcsSUFBSSxFQUFFeUQsR0FBRyxRQUFRLE1BQU07QUFDeEI3QyxlQUFLMGhCLGtCQUFrQjtBQUN2QjFoQixlQUFLd2hCLE1BQU07UUFDWixDQUFDO01BQ0Y7QUFDQSxXQUFLcGlCLE9BQU9BO0FBQ1osV0FBS0csT0FBT2lNLEtBQUssS0FBSztBQUN0QixVQUFJMFcsT0FBTztBQUNYLFVBQUksQ0FBQzFZLGVBQWU7QUFDbkIwWSxlQUFPMVcsS0FBSyxRQUFRO0FBQ3BCMFcsYUFBSzNGLGlCQUFpQixTQUFTLE1BQU07QUFDcEMsY0FBSXZjLEtBQUttaUIsb0JBQW9CLENBQUMsR0FBRztBQUNoQ25pQixpQkFBS2loQixXQUFXLE9BQU8sSUFBSTtVQUM1QjtRQUNELENBQUM7QUFDRGlCLGFBQUszRixpQkFBaUIsWUFBYXpjLE9BQU07QUFDeEMsY0FBSUUsS0FBS21pQixvQkFBb0IsQ0FBQyxHQUFHO0FBQ2hDbmlCLGlCQUFLcWhCLE9BQU92aEIsQ0FBQztVQUNkO1FBQ0QsQ0FBQztBQUNEb2lCLGFBQUszRixpQkFBaUIsVUFBVSxNQUFNO0FBQ3JDdmMsZUFBS21pQixvQkFBb0IsQ0FBQztBQUMxQm5pQixlQUFLWixLQUFLZ2pCLE1BQU07UUFDakIsQ0FBQztBQUNERixhQUFLM0YsaUJBQWlCLFNBQVVnRixXQUFVO0FBQ3pDLGNBQUlBLE1BQU10YyxRQUFRd1osS0FBSztBQUN0QnplLGlCQUFLNmhCLGtCQUFrQjtBQUN2QjdoQixpQkFBS1osS0FBS2dqQixNQUFNO0FBQ2hCN0csdUJBQVcsTUFBTTtBQUNoQnZiLG1CQUFLaWhCLFdBQVcsSUFBSTtZQUNyQixHQUFHL1gsR0FBR2xCLGFBQWE7VUFDcEIsV0FBV3VaLE1BQU10YyxRQUFRdVosS0FBSztBQUM3QnhlLGlCQUFLcWhCLE9BQU9FLEtBQUs7VUFDbEI7UUFDRCxDQUFDO0FBQ0QsWUFBSSxDQUFDclksR0FBR2YsY0FBYztBQUNyQixnQkFBTWthLGlCQUFpQjdXLEtBQUssUUFBUTtBQUNwQyxxQkFBV3ZHLE9BQU8yWSxtQkFBbUI7QUFDcEMsZ0JBQUlBLGtCQUFrQjNZLEdBQUcsRUFBRThZLE1BQU07QUFDaEMsb0JBQU11RSxNQUFNOVcsS0FBSyxRQUFRO0FBQ3pCOFcsa0JBQUluaUIsUUFBUThFO0FBQ1osa0JBQUlBLFFBQVEsS0FBS3ViLFFBQVE7QUFDeEI4QixvQkFBSUMsV0FBVztjQUNoQjtBQUNBRCxrQkFBSTVpQixPQUFPOEwsS0FBS29TLGtCQUFrQjNZLEdBQUcsRUFBRXdGLE1BQU0sSUFBSSxDQUFDO0FBQ2xENFgsNkJBQWUzaUIsT0FBTzRpQixHQUFHO1lBQzFCO1VBQ0Q7QUFDQUQseUJBQWU5RixpQkFBaUIsVUFBVSxNQUFNO0FBQy9DdmMsaUJBQUt3Z0IsU0FBU3hnQixLQUFLcWlCLGVBQWVoVixRQUFRck4sS0FBS3FpQixlQUFlRyxhQUFhLEVBQUVyaUI7QUFDN0VILGlCQUFLWixLQUFLZ2pCLE1BQU07QUFDaEJwaUIsaUJBQUtpaEIsV0FBVyxNQUFNLElBQUk7VUFDM0IsQ0FBQztBQUNELGVBQUtvQixpQkFBaUJBO1FBQ3ZCO01BQ0Q7QUFDQSxXQUFLSCxPQUFPQTtBQUNaLFlBQU1PLGVBQWVBLENBQUNDLEtBQUtDLGdCQUFnQjtBQUMxQyxjQUFNQyxRQUFRO0FBQ2QsWUFBSSxDQUFDQSxTQUFTLENBQUNBLE1BQU03Z0IsTUFBTTtBQUMxQixpQkFBTzRnQjtRQUNSO0FBQ0EsZUFBT0MsTUFBTTdnQjtNQUNkO0FBRUEsWUFBTThnQixLQUFLclgsS0FBSyxPQUFPO0FBQ3ZCcVgsU0FBR3RnQixPQUFPO0FBQ1ZzZ0IsU0FBRzFpQixRQUFRc2lCLGFBQWEsaUJBQWlCemQsV0FBVyxhQUFhLENBQUM7QUFDbEU2ZCxTQUFHdEcsaUJBQWlCLFNBQVMsS0FBSzhFLE9BQU9qQixLQUFLLElBQUksQ0FBQztBQUNuRCxXQUFLMEMsS0FBS0Q7QUFDVixZQUFNZixTQUFTdFcsS0FBSyxPQUFPO0FBQzNCc1csYUFBT3ZmLE9BQU87QUFDZHVmLGFBQU8zaEIsUUFBUXNpQixhQUFhLHFCQUFxQnpkLFdBQVcsaUJBQWlCLENBQUM7QUFDOUU4YyxhQUFPdkYsaUJBQWlCLFNBQVMsS0FBS3VGLE9BQU8xQixLQUFLLElBQUksQ0FBQztBQUN2RCxXQUFLMkMsZUFBZWpCO0FBQ3BCLFlBQU14QyxPQUFPOVQsS0FBSyxNQUFNO0FBQ3hCOFQsV0FBSzFTLFlBQVk7QUFDakIwUyxXQUFLUyxNQUFNaUQsV0FBVztBQUN0QjFELFdBQUs1ZixPQUFPTixJQUFJO0FBSWhCa2dCLFdBQUs1ZixPQUFPOEwsS0FBSyxLQUFVLElBQUksQ0FBQztBQUNoQzhULFdBQUtTLE1BQU1rRCxhQUFhO0FBQ3hCLFVBQUlmLE1BQU07QUFDVDVDLGFBQUs1ZixPQUFPd2lCLElBQUk7TUFDakI7QUFDQSxVQUFJLEtBQUtHLGdCQUFnQjtBQUN4Qi9DLGFBQUs1ZixPQUFPLEtBQUsyaUIsY0FBYztNQUNoQztBQUNBLFVBQUksQ0FBQzdZLGVBQWU7QUFDbkI4VixhQUFLNWYsT0FBTyxLQUFLSCxJQUFJO01BQ3RCO0FBQ0ErZixXQUFLNWYsT0FBT21qQixFQUFFO0FBQ2R2RCxXQUFLNWYsT0FBT29pQixNQUFNO0FBQ2xCWCxXQUFLemhCLE9BQU80ZixJQUFJO0FBQ2hCNkIsV0FBS3BCLE1BQU0vYyxVQUFVO0FBQ3JCLFdBQUtzYyxLQUFLNWYsT0FBT3loQixJQUFJO0lBQ3RCO0lBQ0FuZSxRQUFRdWUsT0FBTztBQUNkLFVBQUksS0FBSy9CLGlCQUFpQixDQUFDM08sWUFBWSxLQUFLd08sTUFBTTtBQUNqRCxZQUFJSixlQUFlLEtBQUtJLE1BQU0sTUFBTSxLQUFLQyxNQUFNLElBQUk7TUFDcEQ7QUFDQSxVQUFJLENBQUN2TyxnQkFBZ0IsQ0FBQ0YsVUFBVTtBQUMvQixpQkFBQXFTLE1BQUEsR0FBQUMsWUFBcUJyUyxTQUFBb1MsTUFBQUMsVUFBQWxhLFFBQUFpYSxPQUFTO0FBQTlCLGdCQUFXdkksU0FBQXdJLFVBQUFELEdBQUE7QUFDVixjQUFJdkksT0FBT25iLFVBQVV1UyxXQUFXO0FBQy9CdUssMEJBQWM7QUFDZDtVQUNEO1FBQ0Q7TUFDRDtBQUNBLFVBQUksQ0FBQyxLQUFLNkUsTUFBTTtBQUNmLGFBQUtELFNBQVM7TUFDZjtBQUNBLFVBQUksS0FBS2dCLE1BQU07QUFDZCxhQUFLQSxLQUFLbkMsTUFBTS9jLFVBQVU7TUFDM0I7QUFDQSxVQUFJLEtBQUtxZixnQkFBZ0I7QUFDeEIsYUFBS0EsZUFBZXRDLE1BQU0vYyxVQUFVO01BQ3JDO0FBQ0EsV0FBS21VLGtCQUFrQixLQUFLd0o7QUFDNUIsV0FBS0YsZ0JBQWdCLEtBQUtJO0FBQzFCLFdBQUt4SixnQkFBZ0IsS0FBS3lKO0FBQzFCLFdBQUsxSixhQUFhLEtBQUt3SjtBQUN2QixXQUFLcmhCLEtBQUswWixNQUFNLEtBQUt3SCxnQkFBZ0J2WCxHQUFHN0IsWUFBWTZCLEdBQUczQjtBQUN2RCxXQUFLbkksS0FBS2UsUUFBUSxLQUFLZ1gsbUJBQW1CLEtBQUtDLGVBQWUsT0FBTyxLQUFBLElBQUFqWSxPQUFTLEtBQUtpWSxVQUFVO0FBQzdGLFdBQUtnTSxnQkFBZ0IsS0FBSzVqQjtBQUMxQixXQUFLd2EsWUFBWSxLQUFLN0M7QUFDdEIsV0FBSzZCLGNBQWMsS0FBS3lIO0FBQ3hCLFdBQUtqaEIsUUFBUSxLQUFLQSxVQUFVdVMsWUFBWUMsT0FBT0M7QUFDL0MsV0FBS2tKLGdCQUFnQjtRQUNwQkMsT0FBTyxLQUFLakUsZ0JBQWdCbE87UUFDNUJvUyxLQUFLLEtBQUtsRSxnQkFBZ0JsTztNQUMzQjtBQUNBLFdBQUtnUyxZQUFZO0FBRWpCLFVBQUksS0FBS3dFLFNBQVM7QUFDakIsYUFBS0EsUUFBUU0sTUFBTS9jLFVBQVU7TUFDOUI7QUFDQSxXQUFLZ2QsU0FBU0QsTUFBTS9jLFVBQVU7QUFDOUIsV0FBS21lLEtBQUtwQixNQUFNL2MsVUFBVTtBQUMxQixXQUFLOGYsR0FBRzVPLFdBQVc7QUFFbkIsWUFBTTNQLFNBQVNrTSxRQUFROFEsS0FBSztBQUM1QixXQUFLbmlCLEtBQUtnakIsTUFBTTtBQUNoQixXQUFLaGpCLEtBQUtpa0IsV0FBVztBQUNyQjNHLHNCQUFnQjtBQUNoQixhQUFPblk7SUFDUjtJQUNBd1osS0FBS3dELE9BQU9mLFFBQVE2QyxVQUFVO0FBQzdCLFlBQU05ZSxTQUFTLEtBQUt2QixRQUFRdWUsS0FBSztBQUNqQyxZQUFNeFksSUFBSSxLQUFLNFg7QUFDZixVQUFJNVgsRUFBRUUsV0FBVyxHQUFHO0FBQ25CLGVBQU8xRTtNQUNSO0FBQ0EsV0FBS25GLEtBQUtpa0IsV0FBVyxDQUFDLENBQUNBO0FBQ3ZCLFdBQUs3QyxTQUFTQTtBQUNkLFdBQUtTLFdBQVcsT0FBTyxJQUFJO0FBQzNCLGFBQU8xYztJQUNSO0lBQ0FYLEtBQUsyZCxPQUFPO0FBQ1gsYUFBTyxLQUFLeEQsS0FBS3dELE9BQU8sS0FBS2YsVUFBVTVDLGtCQUFrQixLQUFLNEMsTUFBTSxFQUFFeEMsT0FBTzlVLEdBQUdoQixjQUFjLEtBQUtzWSxNQUFNO0lBQzFHO0lBQ0FuYSxLQUFLa2IsT0FBTztBQUNYLGFBQU8sS0FBS3hELEtBQUt3RCxPQUFPLFVBQVUsSUFBSTtJQUN2QztJQUNBamIsR0FBR2liLE9BQU87QUFDVCxhQUFPLEtBQUt4RCxLQUFLd0QsT0FBTyxXQUFXO0lBQ3BDO0lBQ0FPLFNBQVM7QUFDUixVQUFJLEtBQUt0QyxpQkFBaUIsQ0FBQzNPLFVBQVU7QUFDcEMsYUFBS3lTLGFBQWE7QUFDbEI7TUFDRDtBQUVBLFdBQUsxSSxXQUFXO0FBQ2hCLFdBQUt1RyxLQUFLcEIsTUFBTS9jLFVBQVU7QUFDMUIsVUFBSSxLQUFLeWMsU0FBUztBQUNqQixhQUFLQSxRQUFRTSxNQUFNL2MsVUFBVTtNQUM5QjtBQUNBLFdBQUtnZCxTQUFTRCxNQUFNL2MsVUFBVTtBQUM5QixXQUFLeEQsUUFBUSxLQUFLNGpCO0FBQ2xCLFdBQUtqTSxrQkFBa0IsS0FBS3dKO0FBQzVCLFdBQUt2SixhQUFhLEtBQUt3SjtBQUN2QixXQUFLSCxnQkFBZ0IsS0FBS0k7QUFDMUIsV0FBS3hKLGdCQUFnQixLQUFLeUo7QUFDMUIsVUFBSSxLQUFLckIsU0FBUztBQUNqQixhQUFLQSxRQUFRN2QsUUFBUSxLQUFLd1YsY0FBYyxLQUFLQSxXQUFXbk8sU0FBUyxJQUFJLEtBQUttTyxhQUFhO01BQ3hGO0FBQ0EsVUFBSSxLQUFLNVgsVUFBVXVTLFdBQVc7QUFDN0IsWUFBSSxLQUFLME4sU0FBUztBQUNqQixlQUFLQSxRQUFRTSxNQUFNd0Qsa0JBQWtCO1FBQ3RDO01BQ0QsV0FBVyxDQUFDMVMsVUFBVTtBQUNyQixZQUFJO0FBQ0gsZUFBSzRPLFFBQVFNLE1BQU13RCxrQkFBa0JyYSxHQUFHckI7UUFDekMsUUFBUTtRQUVSO01BQ0Q7QUFDQTZVLHNCQUFnQjtJQUNqQjtJQUNBNEcsZUFBZTtBQUNkLFVBQUksQ0FBQ3hSLFFBQVE7QUFDWixjQUFNMFIsT0FBTyxLQUFLbEUsS0FBS1k7QUFDdkIsWUFBSXNELE1BQU07QUFDVEEsZUFBS3ZkLE9BQU87UUFDYjtNQUNEO0FBQ0EsVUFBSSxLQUFLcVosUUFBUSxLQUFLQSxLQUFLOUMsWUFBWTtBQUN0QyxhQUFLOEMsS0FBS3JaLE9BQU87TUFDbEI7QUFDQSxlQUFTMEUsSUFBSSxHQUFHQSxJQUFJbUcsUUFBUTdILFFBQVEwQixLQUFLO0FBQ3hDLFlBQUltRyxRQUFRbkcsQ0FBQyxNQUFNLE1BQU07QUFDeEJtRyxrQkFBUXNNLE9BQU96UyxHQUFHLENBQUM7QUFDbkI7UUFDRDtNQUNEO0FBQ0ErUixzQkFBZ0I7SUFDakI7SUFDQStHLFNBQVNsQyxPQUFPO0FBQ2YsV0FBS21DLFNBQVN6ZCxPQUFPO0FBQ3JCLFdBQUt5ZCxXQUFXO0FBQ2hCLFdBQUt2TSxrQkFBa0IsS0FBS0Q7QUFDNUIsV0FBS0UsYUFBYSxLQUFLdUk7QUFDdkIsV0FBS2MsZ0JBQWdCLEtBQUtiO0FBQzFCLFdBQUt2SSxnQkFBZ0IsS0FBS2tKO0FBQzFCLFdBQUtJLG9CQUFvQixLQUFLeko7QUFDOUIsV0FBSzBKLGVBQWUsS0FBS2pCO0FBQ3pCLFdBQUtrQixrQkFBa0IsS0FBS2pCO0FBQzVCLFdBQUtrQixrQkFBa0IsS0FBS1A7QUFDNUIsV0FBSy9nQixRQUFRdVM7QUFDYixVQUFJLENBQUMsS0FBS29GLG1CQUFtQixLQUFLQSxnQkFBZ0JsTyxXQUFXLEdBQUc7QUFFL0QsYUFBS3FhLGFBQWE7TUFDbkIsT0FBTztBQUVOLGFBQUs3RCxRQUFRQyxXQUFXelosT0FBTztBQUMvQixhQUFLd1osUUFBUS9mLE9BQU84TCxLQUFLLEtBQUsyTCxpQkFBaUIsSUFBSSxDQUFDO0FBQ3BELGFBQUtzSSxRQUFRcGIsT0FBTzBJLGFBQUEsR0FBQTVOLE9BQWdCK0osR0FBR21DLG9CQUFrQixHQUFBLEVBQUFsTSxPQUFJLEtBQUtnWSxlQUFlLENBQUU7QUFDbkYsYUFBS3NJLFFBQVE3ZCxRQUFRLEtBQUt3VixjQUFjO0FBQ3hDLGFBQUtxSSxRQUFRN1MsWUFBWSxLQUFLNlQsZ0JBQWdCLEtBQUs7QUFDbkQsYUFBS2hCLFFBQVFNLE1BQU13RCxrQkFBa0I7QUFDckMsWUFBSSxLQUFLekQsYUFBYTtBQUNyQixlQUFLQSxZQUFZQyxNQUFNL2MsVUFBVSxLQUFLeWQsZ0JBQWdCLEtBQUs7UUFDNUQ7QUFDQS9ELHdCQUFnQjtNQUNqQjtBQUNBLGFBQU9qTSxRQUFROFEsS0FBSztJQUNyQjtJQUNBM0csYUFBYTtBQUNaLFVBQUksS0FBS3NILE1BQU07QUFDZCxhQUFLQSxLQUFLbkMsTUFBTS9jLFVBQVU7TUFDM0I7QUFDQSxVQUFJLEtBQUtxZixnQkFBZ0I7QUFDeEIsYUFBS0EsZUFBZXRDLE1BQU0vYyxVQUFVO01BQ3JDO0FBQ0EsV0FBS3dYLFlBQVk7SUFDbEI7SUFDQTRCLFlBQVl1SCxXQUFXO0FBQ3RCLFdBQUtDLGNBQWM7QUFDbkIsWUFBTXpqQixRQUFRLEtBQUtmLEtBQUtlLE1BQU0rYSxNQUFNLEdBQUc7QUFDdkMsVUFBSWpXLE1BQU07QUFDVixVQUFJOUUsTUFBTThJLFNBQVMsR0FBRztBQUNyQixTQUFBLEVBQUdoRSxHQUFHLElBQUk5RTtNQUNYO0FBQ0EsVUFBSTRJLElBQUk1SSxNQUFNLENBQUMsRUFBRUMsUUFBUSxNQUFNLEdBQUcsRUFBRTRJLEtBQUs7QUFDekMsVUFBSUUsR0FBR3hCLHFCQUFxQjtBQUMzQnFCLFlBQUk4RCxXQUFXOUQsQ0FBQztNQUNqQjtBQUNBLFdBQUtpUixZQUFZalI7QUFDakJBLFVBQUkrRSxpQkFBaUIvRSxHQUFHRyxHQUFHVixTQUFTO0FBQ3BDLFVBQUlPLEVBQUVFLFdBQVcsR0FBRztBQUNuQixhQUFLNlksT0FBTztBQUNaLGVBQU87TUFDUjtBQUNBLFVBQ0MsQ0FBQzZCLGNBQ0NqZSxLQUFLaUIsc0JBQXNCLE1BQU1vQyxNQUFNckQsS0FBS3NCLFdBQWFrQyxHQUFHdEIsYUFBYXNCLEdBQUd0QixVQUFVYixLQUFLZ0MsQ0FBQyxJQUM3RjtBQUNELGFBQUsrWSxPQUFPO0FBQ1osZUFBTztNQUNSO0FBQ0EsV0FBSzNLLGtCQUFrQnBPO0FBQ3ZCLFdBQUtxTyxhQUFhblM7QUFDbEIsV0FBS3diLGdCQUFnQixLQUFLekg7QUFDMUIsYUFBTztJQUNSO0lBQ0FxSSxPQUFPRSxPQUFPO0FBR2IsV0FBSy9LLFdBQVduRyxRQUFRa1IsS0FBSyxNQUFNO0FBQ25DLFlBQU1oZCxTQUFTa00sUUFBUThRLEtBQUs7QUFDNUIsVUFBSSxLQUFLbkYsWUFBWSxHQUFHO0FBQ3ZCLGNBQU0vRCxZQUFZLENBQUMsSUFBSTtBQUN2QixjQUFNd0wsV0FBVyxLQUFLMU07QUFDdEIwQyxxQkFBYXhCLFdBQVl5RCxjQUFhO0FBQ3JDLGNBQUlBLFNBQVMsQ0FBQyxFQUFFcEMsS0FBSztBQUNwQm1CLG9CQUFRaUIsU0FBUyxDQUFDLENBQUM7VUFDcEIsV0FBV0EsU0FBUyxDQUFDLEVBQUVNLFlBQVksSUFBSSxHQUFHO0FBQ3pDTixxQkFBUyxDQUFDLEVBQUVPLE9BQ1hQLFNBQVMsQ0FBQyxFQUFFM0Usb0JBQW9CME0sV0FDN0IsT0FDQTdlLFdBQVcseUJBQXlCNmUsUUFBUSxDQUNoRDtVQUNEO1FBQ0QsQ0FBQztNQUNGO0FBQ0EsYUFBT3RmO0lBQ1I7SUFDQWYsUUFBUTtBQUNQLFVBQUksQ0FBQyxLQUFLaWMsU0FBUztBQUVsQixhQUFLQSxVQUFValUsS0FBSyxHQUFHO0FBQ3ZCLGFBQUtpVSxRQUFRL2YsT0FBTzhMLEtBQUssT0FBTyxJQUFJLENBQUM7QUFDckMsYUFBS2lVLFFBQVFNLE1BQU0vYyxVQUFVO0FBQzdCLGFBQUtzYyxLQUFLVyxhQUFhLEtBQUtSLFNBQVMsS0FBS0gsS0FBS0ksV0FBV1EsV0FBVztNQUN0RTtBQUNBLFdBQUtULFFBQVFDLFdBQVd6WixPQUFPO0FBQy9CLFdBQUt3WixRQUFRL2YsT0FBTzhMLEtBQUssS0FBSzJMLGlCQUFpQixJQUFJLENBQUM7QUFDcEQsV0FBS3NJLFFBQVFwYixPQUFPMEksYUFBQSxHQUFBNU4sT0FBZ0IrSixHQUFHbUMsb0JBQWtCLEdBQUEsRUFBQWxNLE9BQUksS0FBS2dZLGVBQWUsQ0FBRTtBQUNuRixXQUFLc0ksUUFBUTdTLFlBQVksS0FBSzZULGdCQUFnQixLQUFLO0FBQ25ELFdBQUtFLG9CQUFvQixLQUFLeEo7QUFDOUIsV0FBS3lKLGVBQWUsS0FBS3hKO0FBQ3pCLFdBQUt5SixrQkFBa0IsS0FBS0o7QUFDNUIsV0FBS0ssa0JBQWtCLEtBQUt6SjtBQUU1QixXQUFLdUQsV0FBVztBQUNoQixXQUFLdUcsS0FBS3BCLE1BQU0vYyxVQUFVO0FBQzFCLFdBQUt5YyxRQUFRN2QsUUFBUSxLQUFLd1YsY0FBYztBQUN4QyxXQUFLcUksUUFBUU0sTUFBTS9jLFVBQVU7QUFDN0IsVUFBSSxLQUFLd2MsZUFBZTtBQUN2QixZQUFJM08sWUFBWSxLQUFLd08sTUFBTTtBQUMxQixjQUFJSixlQUFlLEtBQUtJLE1BQU0sTUFBTSxLQUFLQyxNQUFNLElBQUk7UUFDcEQ7QUFDQSxhQUFLRSxnQkFBZ0I7QUFDckIsYUFBS1EsU0FBUy9aLE9BQU87QUFDckIsYUFBSzRaLGFBQWE7QUFDbEIsYUFBS1AsS0FBSzVmLE9BQU8sS0FBS3NnQixRQUFRO01BQy9CO0FBQ0EsVUFBSSxDQUFDLEtBQUswRCxVQUFVO0FBRW5CLGNBQU1wRSxPQUFPOVQsS0FBSyxNQUFNO0FBQ3hCLGNBQU0yVSxPQUFPM1UsS0FBSyxHQUFHO0FBQ3JCMlUsYUFBSzliLE9BQU87QUFDWjhiLGFBQUs1RCxpQkFBaUIsU0FBUyxLQUFLa0gsU0FBU3JELEtBQUssSUFBSSxDQUFDO0FBQ3ZERCxhQUFLemdCLE9BQU84TCxLQUFLdEMsR0FBR25ELE1BQU1LLE1BQU0sSUFBSSxDQUFDO0FBQ3JDK1osYUFBS3ZlLFFBQVFvRCxXQUFXLGVBQWU7QUFDdkNzYSxhQUFLNWYsT0FBTzhMLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDM0I4VCxhQUFLNWYsT0FBT3lnQixJQUFJO0FBQ2hCLGFBQUtFLFlBQVkzZ0IsT0FBTzRmLElBQUk7QUFDNUIsYUFBS29FLFdBQVdwRTtBQUNoQixZQUFJLENBQUN6TyxVQUFVO0FBQ2QsY0FBSTtBQUNILGlCQUFLNE8sUUFBUU0sTUFBTXdELGtCQUFrQnJhLEdBQUdyQjtVQUN6QyxRQUFRO1VBRVI7UUFDRDtNQUNEO0FBQ0EsVUFBSSxLQUFLaVksYUFBYTtBQUNyQixhQUFLQSxZQUFZQyxNQUFNL2MsVUFBVSxLQUFLNmQsa0JBQWtCLEtBQUs7TUFDOUQ7QUFDQSxXQUFLYixTQUFTRCxNQUFNL2MsVUFBVTtBQUM5QixXQUFLeEQsUUFBUTBTO0FBQ2J3SyxzQkFBZ0I7SUFDakI7SUFDQUwsU0FBUztBQUVSLFVBQ0UsS0FBS2xGLG9CQUFvQixLQUFLRCxxQkFDN0IsS0FBS0UsZUFBZSxLQUFLdUksZUFDeEIsS0FBS3ZJLGVBQWUsUUFBUSxLQUFLdUksWUFBWTFXLFdBQVcsTUFDMUR2RCxLQUFLaUIsc0JBQXNCLE1BQU0sS0FBS3dRLG9CQUFvQnpSLEtBQUtzQixXQUMvRGtDLEdBQUd0QixhQUFhc0IsR0FBR3RCLFVBQVViLEtBQUssS0FBS29RLGVBQWUsR0FDdEQ7QUFDRCxhQUFLMkssT0FBTztBQUNaO01BQ0Q7QUFDQSxXQUFLdGUsTUFBTTtBQUNYLFVBQUksQ0FBQ3VOLGdCQUFnQixDQUFDRixVQUFVO0FBQy9CLGNBQU03USxPQUFPO0FBQ2IrVCxxQkFDRUMsYUFBWTtBQUNab0MseUJBQWVwQyxTQUFTaFUsSUFBSTtRQUM3QixHQUNDNmIsU0FBUTtBQUNSLGVBQUszZCxHQUFHaUUsT0FBTzBaLEtBQUs7WUFBQ3ZaLEtBQUs7VUFBUSxDQUFDO1FBQ3BDLENBQ0Q7TUFDRDtJQUNEO0lBQ0EyRCxPQUFPc2IsT0FBTztBQUdiLFdBQUs3Z0IsU0FBUzJQLFFBQVFrUixLQUFLLE1BQU0sQ0FBQztBQUNsQyxhQUFPOVEsUUFBUThRLEtBQUs7SUFDckI7SUFDQTdnQixTQUFTOFYsVUFBVTtBQUNsQixVQUFJLEtBQUtnSixlQUFlO0FBRXZCLGFBQUtzQyxPQUFPO0FBQ1o7TUFDRDtBQUNBLFVBQUksQ0FBQy9RLGdCQUFnQixDQUFDRixVQUFVO0FBQy9CLGlCQUFBaVQsTUFBQSxHQUFBQyxZQUFxQmpULFNBQUFnVCxNQUFBQyxVQUFBOWEsUUFBQTZhLE9BQVM7QUFBOUIsZ0JBQVduSixTQUFBb0osVUFBQUQsR0FBQTtBQUNWLGNBQUluSixPQUFPbmIsVUFBVXVTLFdBQVc7QUFDL0J1SywwQkFBYztBQUNkO1VBQ0Q7UUFDRDtNQUNEO0FBQ0EsVUFBSXZMLGNBQWM7QUFDakIsYUFBSzBPLFFBQVE3ZCxRQUFRO0FBQ3JCLGFBQUs2ZCxRQUFRTSxNQUFNaUUsV0FBVztBQUM5QixZQUFJO0FBQ0gsZUFBS3ZFLFFBQVFNLE1BQU13RCxrQkFBa0JyYSxHQUFHckI7UUFDekMsUUFBUTtRQUVSO0FBQ0EsYUFBS3ViLGdCQUFnQixLQUFLNWpCO0FBQzFCLGFBQUtBLFFBQVEyUztBQUNiLGFBQUtrTyxZQUFZTixNQUFNL2MsVUFBVTtBQUNqQyxhQUFLc2QsVUFBVVAsTUFBTS9jLFVBQVU7QUFDL0IwWix3QkFBZ0I7TUFDakIsV0FBVzdMLFVBQVU7QUFFcEIsYUFBS3lTLGFBQWE7TUFDbkIsT0FBTztBQUNOLGFBQUtGLGdCQUFnQixLQUFLNWpCO0FBQzFCLGFBQUtBLFFBQVEyUztBQUNiLGFBQUtxRSxXQUFXQSxZQUFZdE4sR0FBR25CO0FBQy9CLGNBQU0vSCxPQUFPO0FBQ2IrVCxxQkFDRUMsYUFBWTtBQUNab0MseUJBQWVwQyxTQUFTaFUsSUFBSTtRQUM3QixHQUNDNmIsU0FBUTtBQUNSN2IsZUFBS1IsUUFBUVEsS0FBS29qQjtBQUNsQixlQUFLbGxCLEdBQUdpRSxPQUFPMFosS0FBSztZQUFDdlosS0FBSztVQUFRLENBQUM7UUFDcEMsQ0FDRDtNQUNEO0lBQ0Q7SUFDQTZELFFBQVFvYixPQUFPO0FBRWQsV0FBSzlCLFFBQVE3ZCxRQUFRLEtBQUt3VixjQUFjO0FBQ3hDLFdBQUtxSSxRQUFRTSxNQUFNa0UsaUJBQWlCO0FBQ3BDLFdBQUt6a0IsUUFBUSxLQUFLNGpCO0FBQ2xCLFVBQUksS0FBSzVqQixVQUFVdVMsV0FBVztBQUM3QixhQUFLME4sUUFBUU0sTUFBTXdELGtCQUFrQjtNQUN0QyxPQUFPO0FBQ04sWUFBSTtBQUNILGVBQUs5RCxRQUFRTSxNQUFNd0Qsa0JBQWtCcmEsR0FBR3JCO1FBQ3pDLFFBQVE7UUFFUjtNQUNEO0FBQ0EsV0FBS3dZLFlBQVlOLE1BQU0vYyxVQUFVO0FBQ2pDLFdBQUtzZCxVQUFVUCxNQUFNL2MsVUFBVTtBQUMvQjBaLHNCQUFnQjtBQUNoQixhQUFPak0sUUFBUThRLEtBQUs7SUFDckI7O0lBRUEyQyxhQUFhQyxZQUFZO0FBQ3hCLFVBQUksQ0FBQyxLQUFLOUIsZ0JBQWdCO0FBQ3pCO01BQ0Q7QUFDQSxlQUFTMVgsSUFBSSxHQUFHQSxJQUFJLEtBQUswWCxlQUFlaFYsUUFBUXBFLFFBQVEwQixLQUFLO0FBQzVELGFBQUswWCxlQUFlaFYsUUFBUTFDLENBQUMsRUFBRTRYLFdBQVcsS0FBS0YsZUFBZWhWLFFBQVExQyxDQUFDLEVBQUV4SyxVQUFVZ2tCO01BQ3BGO0lBQ0Q7SUFDQVAsZ0JBQWdCO0FBQ2YsVUFBSTdhLElBQUksS0FBSzNKLEtBQUtlLFNBQVM7QUFDM0I0SSxVQUFJQSxFQUFFM0ksUUFBUSxZQUFZLEVBQUU7QUFDNUIsWUFBTTRMLEtBQUssSUFBSWpDLE9BQUEsS0FBQTVLLE9BQVkrSixHQUFHb0MsaUJBQWUsSUFBQSxDQUFJO0FBQ2pELFVBQUlVLEdBQUdqRixLQUFLZ0MsQ0FBQyxHQUFHO0FBQ2ZBLFlBQUlBLEVBQUV5RCxNQUFNb0QsS0FBS0MsSUFBSSxHQUFHOUcsRUFBRXVELFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFbE0sUUFBUSxZQUFZLEVBQUU7TUFDcEU7QUFDQTJJLFVBQUlBLEVBQUUzSSxRQUFRLFdBQVcsRUFBRTtBQUMzQixVQUFJOEksR0FBR3hCLHFCQUFxQjtBQUMzQnFCLFlBQUk4RCxXQUFXOUQsQ0FBQztNQUNqQjtBQUdBLFVBQUksS0FBSzNKLEtBQUtlLFVBQVUsUUFBUSxLQUFLZixLQUFLZSxVQUFVNEksR0FBRztBQUN0RCxhQUFLM0osS0FBS2UsUUFBUTRJO01BQ25CO0lBQ0Q7SUFDQXFiLFNBQVMxZixLQUFLMmYsYUFBYTdELFFBQVF0RCxVQUFVb0gsVUFBVTtBQUN0RCxVQUFJQyxLQUFLRjtBQUNULFlBQU12a0IsSUFBSTBnQjtBQUNWLFlBQU16WCxJQUFJbVU7QUFDVixZQUFNc0gsSUFBSUY7QUFDVixZQUFNdGtCLE9BQU87QUFDYixZQUFNb1YsT0FBT0EsTUFBTTtBQUNsQm1QLFdBQUdFO0FBQ0gsWUFBSUYsR0FBR0UsY0FBY0YsR0FBR0csVUFBVTtBQUNqQyxjQUFJSCxHQUFHcEgsUUFBUTtBQUNkb0gsZUFBR0ksVUFBVXhILFNBQVM7VUFDdkI7QUFDQSxjQUFJb0gsR0FBR2xILFlBQVk7QUFDbEJrSCxlQUFHSSxVQUFVdEgsYUFBYWtILEdBQUdsSDtVQUM5QjtBQUNBLGNBQUksQ0FBQ2tILEdBQUdLLGFBQWEsQ0FBQ2hILGtCQUFrQjJHLEdBQUdKLFVBQVUsRUFBRXRmLE1BQU0yZixDQUFDLEdBQUc7QUFDaEU1Ryw4QkFBa0IyRyxHQUFHSixVQUFVLEVBQUV0ZixNQUFNMmYsQ0FBQyxJQUFJRCxHQUFHSTtVQUNoRDtBQUNBM2tCLGVBQUtaLEtBQUtpa0IsV0FBVztBQUNyQixjQUFJLENBQUNrQixHQUFHTSxXQUFXO0FBQ2xCN2tCLGlCQUFLeWIsZ0JBQWdCOEksR0FBR0ksV0FBV0osR0FBR3RHLGNBQWNsVixHQUFHd2IsR0FBR0osVUFBVTtVQUNyRTtBQUNBLGNBQUlJLE9BQU92a0IsS0FBS3FrQixhQUFhO0FBQzVCcmtCLGlCQUFLcWtCLGNBQWM7VUFDcEI7QUFDQUUsZUFBSztRQUNOO01BQ0Q7QUFDQXRsQixRQUFFNmxCLFFBQVFwZ0IsS0FBTTBWLFVBQVM7QUFDeEIsY0FBTTdGLFNBQVN6VSxFQUFFa2QsUUFBUTVDLE1BQU1vSyxDQUFDO0FBQ2hDLFlBQUlqUSxVQUFVQSxPQUFPdEwsU0FBUyxHQUFHO0FBQ2hDc2IsYUFBR0ksWUFBWUosR0FBR0ksY0FBYyxPQUFPcFEsU0FBUyxDQUFDLEdBQUdnUSxHQUFHSSxXQUFXLElBQUEsR0FBRzVmLG1CQUFBZ2dCLGVBQWN4USxNQUFNLENBQUM7QUFDMUYsY0FBSUEsT0FBTzRJLFFBQVE7QUFDbEJvSCxlQUFHcEgsU0FBUztVQUNiO0FBQ0EsY0FBSTVJLE9BQU84SSxZQUFZO0FBQ3RCa0gsZUFBR2xILGFBQWE5SSxPQUFPOEk7VUFDeEI7UUFDRDtBQUNBakksYUFBSztNQUNOLENBQUMsRUFBRWpCLEtBQU1rRyxTQUFRO0FBQ2hCLFlBQUksQ0FBQ0EsS0FBSztBQUNUN1EsMEJBQWdCO1FBQ2pCO0FBQ0ErYSxXQUFHSyxZQUFZO0FBQ2Z4UCxhQUFLO01BQ04sQ0FBQztJQUNGO0lBQ0FpUCxjQUFjO0lBQ2RwRCxXQUFXRCxtQkFBbUJnRSxPQUFPO0FBRXBDMUssaUJBQVcsSUFBSTtBQUVmLFdBQUtzSixjQUFjO0FBQ25CLFVBQUk3YSxJQUFJLEtBQUszSixLQUFLZTtBQUVsQixZQUFNOGtCLE9BQU9sYyxFQUFFdUQsUUFBUSxHQUFHO0FBQzFCLFVBQUkyWSxTQUFTLElBQUk7QUFDaEIsYUFBSzdOLGFBQWE7TUFDbkIsT0FBTztBQUNOLGFBQUtBLGFBQWFyTyxFQUFFeUQsTUFBTW9ELEtBQUtDLElBQUksR0FBR29WLE9BQU8sQ0FBQyxDQUFDO0FBQy9DbGMsWUFBSUEsRUFBRXlELE1BQU0sR0FBR29ELEtBQUtDLElBQUksR0FBR29WLElBQUksQ0FBQztNQUNqQztBQUNBLFVBQUksS0FBS2pMLGNBQWNqUixLQUFLLENBQUNpYyxPQUFPO0FBQ25DO01BQ0Q7QUFDQSxVQUFJLEtBQUtoTCxjQUFjalIsR0FBRztBQUN6QjJULHdCQUFnQjtNQUNqQjtBQUNBLFdBQUsxQyxZQUFZalI7QUFDakIsV0FBS2dTLGdCQUFnQmhTO0FBRXJCLFdBQUsrWixHQUFHNU8sV0FBV25MLEVBQUVFLFNBQVMsS0FBS0MsR0FBR3RCLGFBQWFzQixHQUFHdEIsVUFBVWIsS0FBS2dDLENBQUM7QUFDdEUsVUFBSVMsZUFBZTtBQUVsQixZQUFJLEtBQUswWSxNQUFNO0FBQ2QsZUFBS0EsS0FBS25DLE1BQU0vYyxVQUFVO1FBQzNCO0FBQ0EsWUFBSSxLQUFLcWYsZ0JBQWdCO0FBQ3hCLGVBQUtBLGVBQWV0QyxNQUFNL2MsVUFBVTtRQUNyQztBQUNBLFlBQUksS0FBS3pELE1BQU07QUFDZCxlQUFLQSxLQUFLd2dCLE1BQU0vYyxVQUFVO1FBQzNCO0FBQ0E7TUFDRDtBQUNBLFVBQUkrRixFQUFFRSxXQUFXLEdBQUc7QUFDbkIsYUFBS3dTLGdCQUFnQixDQUFBLENBQUU7QUFDdkI7TUFDRDtBQUNBLFVBQUk2SSxXQUFXdmIsRUFBRTNJLFFBQVEsZ0NBQWdDLEVBQUUsRUFBRUEsUUFBUTBKLGlCQUFpQixHQUFHO0FBQ3pGd2EsaUJBQVd4VyxpQkFBaUJ3VyxVQUFVcGIsR0FBR1YsU0FBUztBQUNsRDhiLGlCQUFXQSxTQUFTdGIsS0FBSztBQUN6QixVQUFJc2IsU0FBU3JiLFdBQVcsR0FBRztBQUMxQixhQUFLd1MsZ0JBQWdCLENBQUEsQ0FBRTtBQUN2QjtNQUNEO0FBQ0EsVUFBSSxLQUFLNEksYUFBYTtBQUNyQixhQUFLQSxZQUFZUSxZQUFZO01BQzlCO0FBQ0EsWUFBTVYsYUFBYXZHLGtCQUFrQixLQUFLNEMsTUFBTSxJQUFJLEtBQUtBLFNBQVM7QUFDbEVRLDRCQUFBQSxvQkFBc0JwRCxrQkFBa0J1RyxVQUFVLEVBQUVsRztBQUNwRCxVQUFJTCxrQkFBa0J1RyxVQUFVLEVBQUV0ZixNQUFNeWYsUUFBUSxHQUFHO0FBQ2xELGFBQUs3SSxnQkFBZ0JtQyxrQkFBa0J1RyxVQUFVLEVBQUV0ZixNQUFNeWYsUUFBUSxHQUFHdEQsbUJBQW1CalksR0FBR29iLFVBQVU7QUFDcEc7TUFDRDtBQUNBLFlBQU07UUFBQ3JHO01BQU8sSUFBSUYsa0JBQWtCdUcsVUFBVTtBQUM5QyxXQUFLRSxjQUFjO1FBQ2xCTSxXQUFXO1FBQ1hGLFdBQVc7UUFDWEMsVUFBVTVHLFFBQVE3VTtRQUNsQmdWLGNBQWMrQztRQUNkbUQ7TUFDRDtBQUNBLFdBQUtlLFVBQVVwSCxTQUFTLEtBQUt1RyxhQUFhdGIsR0FBR3ViLFFBQVE7SUFDdEQ7SUFDQVksVUFBVXBILFNBQVN5RyxJQUFJeGIsR0FBR3ViLFVBQVU7QUFBQSxVQUFBYSxhQUFBaE0sMkJBQ2IyRSxPQUFBLEdBQUFzSDtBQUFBLFVBQUE7QUFBdEIsYUFBQUQsV0FBQW5YLEVBQUEsR0FBQSxFQUFBb1gsU0FBQUQsV0FBQTlMLEVBQUEsR0FBQWpFLFFBQStCO0FBQUEsZ0JBQXBCaVEsVUFBQUQsT0FBQWpsQjtBQUNWLGdCQUFNcWdCLFNBQVMxRCxrQkFBa0J1SSxPQUFPO0FBQ3hDLGdCQUFNM2dCLE1BQU1nQixLQUFLNGYsZUFBZTlFLE9BQU8xVSxJQUFJMUwsUUFBUSxRQUFRNk0sbUJBQW1CcVgsUUFBUSxDQUFDO0FBQ3ZGLGVBQUtGLFNBQVMxZixLQUFLNmYsSUFBSS9ELFFBQVF6WCxHQUFHdWIsUUFBUTtRQUMzQztNQUFBLFNBQUE5SyxLQUFBO0FBQUEyTCxtQkFBQXJsQixFQUFBMFosR0FBQTtNQUFBLFVBQUE7QUFBQTJMLG1CQUFBMUwsRUFBQTtNQUFBO0lBQ0Q7SUFDQWdDLGdCQUFnQmxILFFBQVFnUixrQkFBa0JySSxVQUFVaUgsWUFBWTtBQUMvRCxXQUFLL2tCLEtBQUtpa0IsV0FBVztBQUNyQixXQUFLM0osTUFBTTtBQUNYLFdBQUt1QixZQUFZO0FBQ2pCLFVBQUksQ0FBQyxLQUFLaUgsTUFBTTtBQUNmO01BQ0Q7QUFDQSxVQUFJMVksZUFBZTtBQUNsQixZQUFJLEtBQUswWSxNQUFNO0FBQ2QsZUFBS0EsS0FBS25DLE1BQU0vYyxVQUFVO1FBQzNCO0FBQ0EsWUFBSSxLQUFLcWYsZ0JBQWdCO0FBQ3hCLGVBQUtBLGVBQWV0QyxNQUFNL2MsVUFBVTtRQUNyQztBQUNBLFlBQUksS0FBS3pELE1BQU07QUFDZCxlQUFLQSxLQUFLd2dCLE1BQU0vYyxVQUFVO1FBQzNCO0FBQ0EsYUFBS2dXLGNBQWM7QUFDbkI7TUFDRDtBQUNBLFdBQUttTCxhQUFhQTtBQUNsQixVQUFJQSxZQUFZO0FBQ2YsWUFBSSxDQUFDLEtBQUs5QixnQkFBZ0I7QUFDekIsZUFBSzhCLGFBQWE7UUFDbkI7TUFDRCxXQUFXLEtBQUs5QixnQkFBZ0I7QUFDL0IsYUFBS0EsZUFBZXRDLE1BQU0vYyxVQUFVO01BQ3JDO0FBQ0EsVUFBSWthLFVBQVU7QUFDYixZQUFJLEtBQUtsRCxVQUFVMU4sUUFBUTRRLFFBQVEsR0FBRztBQUNyQztRQUNEO0FBQ0EsWUFDQyxLQUFLc0ksYUFDTCxLQUFLeEwsVUFBVTFOLFFBQVEsS0FBS2taLFNBQVMsTUFBTSxLQUMzQyxLQUFLQSxVQUFVdmMsU0FBU2lVLFNBQVNqVSxRQUNoQztBQUNEO1FBQ0Q7TUFDRDtBQUNBLFdBQUt1YyxZQUFZdEk7QUFFakIsVUFBSW5VLElBQUksS0FBSzNKLEtBQUtlLE1BQU0rYSxNQUFNLEdBQUc7QUFDakMsWUFBTWpXLE1BQU04RCxFQUFFRSxTQUFTLElBQUEsSUFBQTlKLE9BQVE0SixFQUFFLENBQUMsQ0FBQyxJQUFLO0FBQ3hDQSxVQUFJRyxHQUFHeEIsc0JBQXNCbUYsV0FBVzlELEVBQUUsQ0FBQyxDQUFDLElBQUlBLEVBQUUsQ0FBQztBQUNuRCxVQUFJMGMsY0FBYzFjO0FBQ2xCLFlBQU0yYyxlQUFlblIsVUFBVUEsT0FBTzRJO0FBQ3RDLFVBQUl4UztBQUNKLFVBQUk0SixRQUFRO0FBQ1gsWUFBSUEsT0FBTzhJLGNBQWN0VSxFQUFFdUQsUUFBUTRRLFFBQVEsTUFBTSxHQUFHO0FBRW5EdUksd0JBQWNsUixPQUFPOEksYUFBYXRVLEVBQUV5RCxNQUFNMFEsU0FBU2pVLE1BQU07UUFDMUQ7QUFDQSxjQUFNMGMsT0FBT0YsWUFBWXBjLFlBQVk7QUFFckMsWUFBSUgsR0FBR3RCLFdBQVc7QUFDakIsZUFBSytDLElBQUksR0FBR0EsSUFBSTRKLE9BQU90TCxRQUFRMEIsS0FBSztBQUNuQyxnQkFBSXpCLEdBQUd0QixVQUFVYixLQUFLd04sT0FBTzVKLENBQUMsQ0FBQyxHQUFHO0FBQ2pDNEoscUJBQU82SSxPQUFPelMsR0FBRyxDQUFDO0FBQ2xCQTtZQUNEO1VBQ0Q7UUFDRDtBQUNBNEosZUFBT3FSLEtBQUssQ0FBQ0MsR0FBR0MsTUFBTTtBQUNyQixjQUFJRCxNQUFNQyxHQUFHO0FBQ1osbUJBQU87VUFDUjtBQUNBLGNBQUlELEVBQUV2WixRQUFRd1osQ0FBQyxNQUFNLEdBQUc7QUFDdkIsbUJBQU87VUFDUjtBQUVBLGNBQUlBLEVBQUV4WixRQUFRdVosQ0FBQyxNQUFNLEdBQUc7QUFDdkIsbUJBQU87VUFDUjtBQUdBLGNBQUlFLGVBQWVGLEVBQUV2WixRQUFRbVosV0FBVyxNQUFNLElBQUksSUFBSTtBQUN0RCxjQUFJTyxlQUFlRixFQUFFeFosUUFBUW1aLFdBQVcsTUFBTSxJQUFJLElBQUk7QUFDdEQsY0FBSU0saUJBQWlCQyxjQUFjO0FBQ2xDLG1CQUFPQSxlQUFlRDtVQUN2QjtBQUVBLGdCQUFNRSxPQUFPSixFQUFFeGMsWUFBWTtBQUMzQixnQkFBTTZjLE9BQU9KLEVBQUV6YyxZQUFZO0FBQzNCMGMseUJBQWVFLEtBQUszWixRQUFRcVosSUFBSSxNQUFNLElBQUksSUFBSTtBQUM5Q0sseUJBQWVFLEtBQUs1WixRQUFRcVosSUFBSSxNQUFNLElBQUksSUFBSTtBQUM5QyxjQUFJSSxpQkFBaUJDLGNBQWM7QUFDbEMsbUJBQU9BLGVBQWVEO1VBQ3ZCO0FBQ0EsY0FBSUYsSUFBSUMsR0FBRztBQUNWLG1CQUFPO1VBQ1I7QUFDQSxjQUFJQSxJQUFJRCxHQUFHO0FBQ1YsbUJBQU87VUFDUjtBQUNBLGlCQUFPO1FBQ1IsQ0FBQztBQUVELGFBQUtsYixJQUFJLEdBQUdBLElBQUk0SixPQUFPdEwsUUFBUTBCLEtBQUs7QUFDbkMsY0FDRUEsSUFBSSxJQUFJNEosT0FBT3RMLFVBQVVzTCxPQUFPNUosQ0FBQyxNQUFNNEosT0FBTzVKLElBQUksQ0FBQyxLQUNuRGpGLEtBQUtpQixzQkFBc0IsTUFBTTROLE9BQU81SixDQUFDLE1BQU1qRixLQUFLc0IsU0FDcEQ7QUFDRHVOLG1CQUFPNkksT0FBT3pTLEdBQUcsQ0FBQztBQUNsQkE7VUFDRDtRQUNEO01BQ0Q7QUFDQSxVQUFJLENBQUM0SixVQUFVQSxPQUFPdEwsV0FBVyxHQUFHO0FBQ25DLFlBQUksS0FBS2laLE1BQU07QUFDZCxlQUFLQSxLQUFLbkMsTUFBTS9jLFVBQVU7UUFDM0I7QUFDQSxZQUFJLEtBQUtxZixnQkFBZ0I7QUFDeEIsZUFBS0EsZUFBZXRDLE1BQU0vYyxVQUFVO1FBQ3JDO0FBQ0EsWUFBSW1oQixjQUFjdkcsa0JBQWtCdUcsVUFBVSxLQUFLLENBQUN2RyxrQkFBa0J1RyxVQUFVLEVBQUVuRyxNQUFNO0FBQ3ZGLGNBQUksS0FBS3plLE1BQU07QUFDZCxpQkFBS0EsS0FBSzBaLE1BQU0vUCxHQUFHM0I7VUFDcEI7QUFDQSxlQUFLeVIsY0FBYztRQUNwQjtBQUNBO01BQ0Q7QUFDQSxZQUFNLENBQUNtTixVQUFVLElBQUk1UjtBQUNyQixZQUFNNlIsWUFBWSxLQUFLQyxhQUFhRixZQUFZcGQsR0FBRzBjLGFBQWF4Z0IsS0FBS3NnQixnQkFBZ0I7QUFDckYsWUFBTWUsV0FBV0YsYUFBYVYsZ0JBQWdCUyxlQUFlclksaUJBQWlCL0UsR0FBR0csR0FBR1YsU0FBUztBQUM3RixVQUFJMmIsY0FBY3ZHLGtCQUFrQnVHLFVBQVUsS0FBSyxDQUFDdkcsa0JBQWtCdUcsVUFBVSxFQUFFbkcsTUFBTTtBQUN2RixhQUFLemUsS0FBSzBaLE1BQU1xTixXQUFXcGQsR0FBRzdCLFlBQVk2QixHQUFHM0I7QUFDN0MsYUFBS3lSLGNBQWNzTjtNQUNwQjtBQUNBLFVBQUlGLFdBQVc7QUFDZCxhQUFLcE0sWUFBWW1NO0FBQ2pCLFlBQUk1UixPQUFPdEwsV0FBVyxHQUFHO0FBQ3hCLGVBQUtpWixLQUFLbkMsTUFBTS9jLFVBQVU7QUFDMUIsY0FBSSxLQUFLcWYsZ0JBQWdCO0FBQ3hCLGlCQUFLQSxlQUFldEMsTUFBTS9jLFVBQVU7VUFDckM7QUFDQTtRQUNEO01BQ0Q7QUFFQSxhQUFPLEtBQUtrZixLQUFLeEMsWUFBWTtBQUM1QixhQUFLd0MsS0FBS3hDLFdBQVd6WixPQUFPO01BQzdCO0FBQ0EsV0FBSzBFLElBQUksR0FBR0EsSUFBSTRKLE9BQU90TCxRQUFRMEIsS0FBSztBQUNuQyxjQUFNMlgsTUFBTTlXLEtBQUssUUFBUTtBQUN6QjhXLFlBQUk1aUIsT0FBTzhMLEtBQUsrSSxPQUFPNUosQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNoQzJYLFlBQUlDLFdBQVc2RCxhQUFhemIsTUFBTTtBQUNsQyxhQUFLdVgsS0FBS3hpQixPQUFPNGlCLEdBQUc7TUFDckI7QUFDQSxXQUFLaEgsWUFBWTtJQUNsQjtJQUNBQSxjQUFjO0FBQ2IsV0FBS0wsWUFBWTtBQUNqQixVQUFJLENBQUMsS0FBS1QsV0FBVztBQUNwQixhQUFLMEgsS0FBS25DLE1BQU0vYyxVQUFVO0FBQzFCLFlBQUksS0FBS3FmLGdCQUFnQjtBQUN4QixlQUFLQSxlQUFldEMsTUFBTS9jLFVBQVU7UUFDckM7QUFDQTtNQUNEO0FBQ0EsVUFBSXVqQixXQUFXM1csS0FBSzRXLElBQUksS0FBS3RFLEtBQUs3VSxRQUFRcEUsUUFBUUMsR0FBR2IsUUFBUTtBQUM3RCxVQUFJa2UsWUFBWSxHQUFHO0FBQ2xCQSxtQkFBVztNQUNaO0FBQ0EsV0FBS3JFLEtBQUtaLE9BQU9pRjtBQUNqQixXQUFLckUsS0FBS25DLE1BQU0wRyxRQUFRaFYsU0FBUyxVQUFVO0FBQzNDLFdBQUt5USxLQUFLbkMsTUFBTTJHLFNBQVM7QUFDekIsV0FBS3hFLEtBQUtuQyxNQUFNaUQsV0FBVztBQUUzQixZQUFNMkQsU0FBU2xWLFNBQVMsVUFBVTtBQUNsQyxVQUFJbVYsUUFBUTtBQUNaLFVBQUksS0FBSzFFLEtBQUtuQyxNQUFNL2MsWUFBWSxRQUFRO0FBRXZDLGFBQUtrZixLQUFLbkMsTUFBTThHLE1BQUEsR0FBQTFuQixPQUFTLEtBQUtDLEtBQUswbkIsV0FBUyxJQUFBO0FBQzVDLGFBQUs1RSxLQUFLbkMsTUFBTTRHLE1BQU0sSUFBSTtBQUMxQixhQUFLekUsS0FBS25DLE1BQU0vYyxVQUFVO0FBQzFCNGpCLGdCQUFRLEtBQUsxRSxLQUFLNkU7QUFDbEIsYUFBSzdFLEtBQUtuQyxNQUFNL2MsVUFBVTtNQUMzQixPQUFPO0FBQ040akIsZ0JBQVEsS0FBSzFFLEtBQUs2RTtNQUNuQjtBQUVBLFVBQUlDLGdCQUFnQko7QUFDcEIsVUFBSUwsV0FBV3JkLEdBQUdiLFVBQVU7QUFDM0IyZSx3QkFBaUJKLFFBQVFMLFdBQVlyZCxHQUFHYjtNQUN6QztBQUNBLFlBQU00ZSxXQUFZQyxVQUFTO0FBQzFCLFlBQUk1ZCxhQUFhLENBQUMvSyxTQUFTNG9CLFVBQVU7QUFFcEMsaUJBQU85b0IsT0FBQSxRQUFBYyxPQUFlK25CLElBQUksQ0FBQTtRQUMzQjtBQUNBLGNBQU1sWixJQUFBLFNBQUE3TyxPQUFhK25CLElBQUk7QUFDdkIsWUFBSTdvQixPQUFPK29CLE9BQU87QUFDakIsaUJBQU9ub0IsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFK08sQ0FBQztRQUN0QjtBQUNBLGdCQUFRelAsU0FBUzhvQixrQkFBa0I5b0IsU0FBUzhvQixnQkFBZ0JyWixDQUFDLElBQUksTUFBTS9PLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRStPLENBQUMsS0FBSztNQUMzRjtBQUNBLFlBQU1zWixnQkFBaUJKLFVBQVM7QUFDL0IsY0FBTWxaLElBQUEsU0FBQTdPLE9BQWErbkIsSUFBSTtBQUN2QixZQUFJM2lCLFVBQVVoRyxTQUFTOG9CLGtCQUFrQjlvQixTQUFTOG9CLGdCQUFnQnJaLENBQUMsSUFBSSxNQUFNL08sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFK08sQ0FBQyxLQUFLO0FBQ2hHLFlBQUl5RCxVQUFVeVYsU0FBUyxRQUFRO0FBTTlCLGNBQUkzaUIsU0FBUyxHQUFHO0FBQ2ZBLHFCQUFTLENBQUNBO1VBQ1g7QUFDQSxjQUFJLENBQUMrRSxXQUFXO0FBQ2YvRSxxQkFBUytpQixjQUFjLE9BQU8sSUFBSUwsU0FBUyxPQUFPLElBQUkxaUI7VUFDdkQ7UUFFRDtBQUNBLGVBQU9BO01BQ1I7QUFDQSxZQUFNeWUsV0FBWXVFLFVBQVM7QUFFMUIsWUFBSUEsS0FBS0MsdUJBQXVCO0FBQy9CLGdCQUFNQyxNQUFNRixLQUFLQyxzQkFBc0I7QUFDdkMsaUJBQU87WUFDTkUsR0FBRzlYLEtBQUsrWCxNQUFNRixJQUFJRyxPQUFPTixjQUFjLE1BQU0sQ0FBQztZQUM5Q08sR0FBR2pZLEtBQUsrWCxNQUFNRixJQUFJWixNQUFNUyxjQUFjLEtBQUssQ0FBQztVQUM3QztRQUNEO0FBQ0EsWUFBSVEsSUFBSTtBQUNSLFlBQUlDLElBQUk7QUFDUixXQUFHO0FBQ0ZELGVBQUtQLEtBQUtULGFBQWE7QUFDdkJpQixlQUFLUixLQUFLUyxjQUFjO0FBQ3hCVCxpQkFBT0EsS0FBS1U7UUFDYixTQUFTVjtBQUNULGVBQU87VUFDTkcsR0FBR0s7VUFDSEYsR0FBR0M7UUFDSjtNQUNEO0FBQ0EsWUFBTUksVUFBVWxGLFNBQVMsS0FBSzVqQixJQUFJO0FBQ2xDLFlBQU0rb0IsS0FBSztBQUNYLFVBQUlDLEtBQUs7QUFFVCxVQUFJQyxTQUFTO0FBQ2IsWUFBTUMsZUFBZSxLQUFLbHBCLEtBQUttcEIsZUFBZSxLQUFLbnBCLEtBQUtvcEI7QUFDeEQsVUFBSSxLQUFLckUsWUFBWTtBQUNwQixhQUFLOUIsZUFBZXRDLE1BQU0yRyxTQUFTO0FBQ25DLGFBQUtyRSxlQUFldEMsTUFBTWlELFdBQVc7QUFDckMsYUFBS1gsZUFBZXRDLE1BQU16YyxRQUFBLEdBQUFuRSxPQUFXbXBCLGNBQVksSUFBQTtBQUVqRCxZQUFJLEtBQUtqRyxlQUFldEMsTUFBTS9jLFlBQVksUUFBUTtBQUNqRCxlQUFLcWYsZUFBZXRDLE1BQU00RyxNQUFNLElBQUk7QUFDcEMsZUFBS3RFLGVBQWV0QyxNQUFNOEcsTUFBTTtBQUNoQyxlQUFLeEUsZUFBZXRDLE1BQU0vYyxVQUFVO0FBQ3BDcWxCLG1CQUFTLEtBQUtoRyxlQUFlMEU7QUFDN0IsZUFBSzFFLGVBQWV0QyxNQUFNL2MsVUFBVTtRQUNyQyxPQUFPO0FBQ05xbEIsbUJBQVMsS0FBS2hHLGVBQWUwRTtRQUM5QjtBQUNBLGFBQUsxRSxlQUFldEMsTUFBTTRHLE1BQU0sSUFBQSxHQUFBeG5CLE9BQU9ncEIsSUFBRSxJQUFBO01BQzFDO0FBQ0EsVUFBSUQsUUFBUUwsSUFBSWIsZ0JBQWdCcUIsU0FBUyxHQUFHO0FBRzNDRCxhQUFLLEtBQUtocEIsS0FBSzJuQixlQUFlc0IsU0FBUztBQUN2QyxZQUFJLEtBQUtsRSxZQUFZO0FBQ3BCLGVBQUs5QixlQUFldEMsTUFBTThHLE1BQUEsR0FBQTFuQixPQUFTLEtBQUtDLEtBQUsybkIsY0FBWSxJQUFBO1FBQzFEO01BQ0QsT0FBTztBQUNOcUIsYUFBSyxDQUFDeEIsUUFBUXlCLFNBQVM7QUFDdkIsWUFBSSxLQUFLbEUsWUFBWTtBQUNwQixlQUFLOUIsZUFBZXRDLE1BQU04RyxNQUFBLEdBQUExbkIsT0FBUyxFQUFFa3BCLFNBQVMsSUFBRSxJQUFBO1FBQ2pEO01BQ0Q7QUFDQSxXQUFLbkcsS0FBS25DLE1BQU04RyxNQUFBLEdBQUExbkIsT0FBU2lwQixJQUFFLElBQUE7QUFDM0IsV0FBS2xHLEtBQUtuQyxNQUFNemMsUUFBUTtBQUN4QixXQUFLNGUsS0FBS25DLE1BQU00RyxNQUFNLElBQUEsR0FBQXhuQixPQUFPZ3BCLElBQUUsSUFBQTtBQUMvQixVQUFJLEtBQUtoRSxZQUFZO0FBQ3BCLGFBQUtELGFBQWEsS0FBS0MsVUFBVTtBQUNqQyxhQUFLOUIsZUFBZXRDLE1BQU0vYyxVQUFVO01BQ3JDO0FBQ0EsV0FBS2tmLEtBQUtuQyxNQUFNL2MsVUFBVTtBQUUxQixVQUFJLEtBQUtrZixLQUFLcUcsY0FBY0QsY0FBYztBQUN6QyxhQUFLcEcsS0FBS25DLE1BQU16YyxRQUFBLEdBQUFuRSxPQUFXbXBCLGNBQVksSUFBQTtBQUN2QztNQUNEO0FBRUEsWUFBTUcsU0FBU25CLGNBQWMsTUFBTTtBQUNuQyxZQUFNb0IsU0FBU3pCLFNBQVMsT0FBTztBQUMvQixVQUFJMEIsSUFBSSxLQUFLekcsS0FBS3FHO0FBQ2xCLFlBQU1LLFFBQVE1RixTQUFTLEtBQUtkLElBQUk7QUFDaEMsVUFBSTBGLE9BQU9nQixNQUFNbEI7QUFDakIsVUFBSW1CLFFBQVFqQixPQUFPZTtBQUNuQixVQUFJZixPQUFPYSxVQUFVSSxRQUFRSixTQUFTQyxRQUFRO0FBQzdDLFlBQUlDLElBQUlELFFBQVE7QUFDZkMsY0FBSUQ7QUFDSixlQUFLeEcsS0FBS25DLE1BQU16YyxRQUFBLEdBQUFuRSxPQUFXd3BCLEdBQUMsSUFBQTtBQUM1QixjQUFJbFgsUUFBUTtBQUNYbVcsbUJBQU9pQixRQUFRRjtVQUNoQixPQUFPO0FBQ05FLG9CQUFRakIsT0FBT2U7VUFDaEI7UUFDRDtBQUNBLFlBQUlHLGtCQUFrQjtBQUN0QixZQUFJbEIsT0FBT2EsUUFBUTtBQUNsQkssNEJBQWtCTCxTQUFTYjtRQUM1QixXQUFXaUIsUUFBUUosU0FBU0MsUUFBUTtBQUNuQ0ksNEJBQWtCLEVBQUVELFFBQVFKLFNBQVNDO1FBQ3RDO0FBQ0EsWUFBSWpYLFFBQVE7QUFDWHFYLDRCQUFrQixDQUFDQTtRQUNwQjtBQUNBLFlBQUlBLGlCQUFpQjtBQUNwQixlQUFLNUcsS0FBS25DLE1BQU00RyxNQUFNLElBQUEsR0FBQXhuQixPQUFPZ3BCLEtBQUtXLGlCQUFlLElBQUE7UUFDbEQ7TUFDRDtJQUNEO0lBQ0F6QyxhQUFhcG1CLFFBQVE4b0IsUUFBUUMsa0JBQWtCL2pCLEtBQUtna0IsWUFBWTtBQUMvRCxVQUFJaHBCLFdBQVc4b0IsUUFBUTtBQUN0QixlQUFPO01BQ1I7QUFDQSxVQUFJRSxjQUFjLEtBQUt6SCxPQUFPLENBQUMsS0FBSzBILFVBQVUsR0FBRztBQUNoRCxlQUFPO01BQ1I7QUFFQSxVQUFJanBCLE9BQU9xTSxRQUFReWMsTUFBTSxHQUFHO0FBRTNCLFlBQUlDLG9CQUFvQi9vQixPQUFPcU0sUUFBUTBjLGdCQUFnQixNQUFNLEdBQUc7QUFDL0QsY0FBSSxLQUFLak8sa0JBQWtCZ08sUUFBUTtBQUNsQyxpQkFBS2hPLGdCQUFnQmlPO1VBQ3RCO0FBQ0FELG1CQUFTQztRQUNWLE9BQU87QUFDTixpQkFBTztRQUNSO01BQ0Q7QUFHQSxXQUFLNXBCLEtBQUtnakIsTUFBTTtBQUNoQixXQUFLaGpCLEtBQUtlLFFBQVFGLFNBQVNnRjtBQUMzQixXQUFLdVcsYUFBYXVOLE9BQU85ZixRQUFRaEosT0FBT2dKLE1BQU07QUFDOUMsYUFBTztJQUNSO0lBQ0FpZ0IsWUFBWTtBQUNYLGFBQ0MsS0FBSzlwQixLQUFLK3BCLHFCQUNWLEtBQUsvcEIsS0FBSzRpQixtQkFDVCxLQUFLNWlCLEtBQUtncUIsbUJBQW1CLFVBQWEsS0FBS2hxQixLQUFLaXFCLGlCQUFpQjtJQUV4RTtJQUNBN04sYUFBYWxFLE1BQU1DLElBQUk7QUFFdEIsVUFBSSxDQUFDLEtBQUtuWSxLQUFLZSxPQUFPO0FBQ3JCO01BQ0Q7QUFDQSxVQUFJLEtBQUtmLEtBQUsrcEIsbUJBQW1CO0FBRWhDLGFBQUsvcEIsS0FBSytwQixrQkFBa0I3UixNQUFNQyxFQUFFO01BQ3JDLFdBQVcsS0FBS25ZLEtBQUtncUIsbUJBQW1CLFFBQVc7QUFDbEQsWUFBSTlSLE9BQU8sS0FBS2xZLEtBQUtncUIsZ0JBQWdCO0FBQ3BDLGVBQUtocUIsS0FBS2lxQixlQUFlOVI7QUFDekIsZUFBS25ZLEtBQUtncUIsaUJBQWlCOVI7UUFDNUIsT0FBTztBQUNOLGVBQUtsWSxLQUFLZ3FCLGlCQUFpQjlSO0FBQzNCLGVBQUtsWSxLQUFLaXFCLGVBQWU5UjtRQUMxQjtNQUNELFdBQVcsS0FBS25ZLEtBQUs0aUIsaUJBQWlCO0FBRXJDLGNBQU1zSCxnQkFBZ0IsS0FBS2xxQixLQUFLNGlCLGdCQUFnQjtBQUNoRHNILHNCQUFjQyxLQUFLLGFBQWFqUyxJQUFJO0FBQ3BDZ1Msc0JBQWNFLFFBQVEsYUFBYWpTLEtBQUtELElBQUk7QUFDNUNnUyxzQkFBY0csT0FBTztNQUN0QjtJQUNEO0lBQ0FDLGVBQWU7QUFDZCxVQUFJcFMsT0FBTztBQUVYLFVBQUlDLEtBQUs7QUFDVCxVQUFJLENBQUMsS0FBS25ZLEtBQUtlLE9BQU87TUFFdEIsV0FBVyxLQUFLZixLQUFLZ3FCLG1CQUFtQixRQUFXO0FBQ2xEOVIsZUFBTyxLQUFLbFksS0FBS2dxQjtBQUNqQjdSLGFBQUssS0FBS25ZLEtBQUtpcUI7TUFDaEIsV0FBVzlxQixTQUFTb3JCLGFBQWFwckIsU0FBU29yQixVQUFVQyxhQUFhO0FBRWhFLGNBQU1DLE1BQU10ckIsU0FBU29yQixVQUFVQyxZQUFZLEVBQUVFLFVBQVU7QUFDdkQsWUFBSUQsSUFBSXJOLFdBQVcsTUFBTSxLQUFLcGQsTUFBTTtBQUNuQyxjQUFJO0FBQ0gsa0JBQU0ycUIsVUFBVSxLQUFLM3FCLEtBQUs0aUIsZ0JBQWdCO0FBQzFDK0gsb0JBQVFSLEtBQUssYUFBYSxDQUFDO0FBQzNCUSxvQkFBUUMsWUFBWSxZQUFZSCxHQUFHO0FBR25DdFMsaUJBQUt3UyxRQUFRM3FCLEtBQUs2SjtBQUNsQjhnQixvQkFBUUMsWUFBWSxjQUFjSCxHQUFHO0FBQ3JDdlMsbUJBQU95UyxRQUFRM3FCLEtBQUs2SjtVQUNyQixRQUFRO0FBQ1BxTyxtQkFBTyxLQUFLbFksS0FBS2UsTUFBTThJO0FBQ3ZCc08saUJBQUtEO1VBQ047UUFDRDtNQUNEO0FBQ0EsYUFBTztRQUNOOEQsT0FBTzlEO1FBQ1ArRCxLQUFLOUQ7TUFDTjtJQUNEO0lBQ0EwSyxXQUFXO0FBQ1YsV0FBSzlHLGdCQUFnQixLQUFLdU8sYUFBYTtJQUN4QztJQUNBOUgsV0FBV0wsT0FBTztBQUNqQixVQUFJaEMsTUFBTTtBQUNWLGNBQVEsS0FBS2tDLFNBQUE7UUFDWixLQUFLNUM7QUFDSlUsZ0JBQU07QUFDTjtRQUNELEtBQUtUO0FBQ0pTLGdCQUFNO0FBQ047UUFDRCxLQUFLWjtBQUNKWSxnQkFBTSxDQUFDclcsR0FBR2I7QUFDVjtRQUNELEtBQUt1VztBQUNKVyxnQkFBTXJXLEdBQUdiO0FBQ1Q7UUFDRCxLQUFLb1c7QUFFSixpQkFBT2hPLFFBQVE4USxLQUFLO01BQ3RCO0FBQ0EsVUFBSWhDLEtBQUs7QUFDUixZQUFJLEtBQUsyQyxLQUFLbkMsTUFBTS9jLFlBQVksUUFBUTtBQUV2QyxlQUFLbWYsb0JBQW9CNUMsR0FBRztBQUc1QixpQkFBTzlPLFFBQVE4USxLQUFLO1FBQ3JCLFdBQ0MsS0FBS0ksWUFBWSxNQUNoQixDQUFDLEtBQUswQyxlQUFlLEtBQUtBLFlBQVlJLGNBQWMsS0FBS0osWUFBWUssV0FDckU7QUFFRCxlQUFLekQsV0FBVztRQUNqQjtNQUNEO0FBQ0EsYUFBTztJQUNSO0lBQ0FrQixvQkFBb0I1QyxLQUFLO0FBQ3hCLFVBQUkvVixpQkFBaUIsQ0FBQyxLQUFLMFksUUFBUSxLQUFLQSxLQUFLbkMsTUFBTS9jLFlBQVksUUFBUTtBQUN0RSxlQUFPO01BQ1I7QUFDQSxZQUFNaW5CLE9BQU8sS0FBSy9ILEtBQUtNO0FBQ3ZCLFVBQUkwSCxNQUFNO0FBQ1YsVUFBSTNLLFFBQVEsR0FBRztBQUNkLFlBQUkwSyxPQUFPLEtBQUtBLFFBQVEsS0FBSy9ILEtBQUs3VSxRQUFRcEUsUUFBUTtBQUNqRCxpQkFBTztRQUNSO0FBQ0FpaEIsY0FBTUQ7TUFDUCxPQUFPO0FBQ05DLGNBQU1ELE9BQU8sSUFBSSxJQUFJQSxPQUFPMUs7QUFDNUIySyxjQUFNdGEsS0FBS0MsSUFBSXFhLEtBQUssQ0FBQztBQUNyQixZQUFJQSxPQUFPLEtBQUtoSSxLQUFLN1UsUUFBUXBFLFFBQVE7QUFDcENpaEIsZ0JBQU0sS0FBS2hJLEtBQUs3VSxRQUFRcEUsU0FBUztRQUNsQztNQUNEO0FBQ0EsVUFBSWloQixRQUFRRCxRQUFRMUssUUFBUSxHQUFHO0FBQzlCLFlBQUkwSyxRQUFRLEtBQUtBLE9BQU8sS0FBSy9ILEtBQUs3VSxRQUFRcEUsVUFBVXNXLFFBQVEsR0FBRztBQUM5RCxlQUFLMkMsS0FBSzdVLFFBQVE0YyxJQUFJLEVBQUUxSCxXQUFXO1FBQ3BDO0FBQ0EsYUFBS0wsS0FBSzdVLFFBQVE2YyxHQUFHLEVBQUUzSCxXQUFXO0FBRWxDLGNBQU14WixJQUFJLEtBQUszSixLQUFLZSxNQUFNK2EsTUFBTSxHQUFHO0FBQ25DLGNBQU1qVyxNQUFNOEQsRUFBRUUsU0FBUyxJQUFBLElBQUE5SixPQUFRNEosRUFBRSxDQUFDLENBQUMsSUFBSztBQUN4QyxjQUFNcWQsWUFBWSxLQUFLQyxhQUFhLEtBQUtuRSxLQUFLN1UsUUFBUTZjLEdBQUcsRUFBRTlxQixNQUFNLEtBQUsyYixlQUFlLE1BQU05VixLQUFLLEtBQUs7QUFDckcsWUFBSSxDQUFDbWhCLGFBQWEsS0FBS2xFLEtBQUs3VSxRQUFRNmMsR0FBRyxFQUFFOXFCLFNBQVMsS0FBSzJiLGVBQWU7QUFDckUsZUFBSzNiLEtBQUtlLFFBQVEsS0FBSytoQixLQUFLN1UsUUFBUTZjLEdBQUcsRUFBRTlxQixPQUFPNkY7QUFDaEQsY0FBSSxLQUFLaWtCLFVBQVUsR0FBRztBQUNyQixpQkFBSzFOLGFBQWEsS0FBSzBHLEtBQUs3VSxRQUFRNmMsR0FBRyxFQUFFOXFCLEtBQUs2SixRQUFRLEtBQUtpWixLQUFLN1UsUUFBUTZjLEdBQUcsRUFBRTlxQixLQUFLNkosTUFBTTtVQUN6RjtRQUNEO0FBQ0EsYUFBSytRLFlBQVksS0FBS2tJLEtBQUs3VSxRQUFRNmMsR0FBRyxFQUFFOXFCO0FBQ3hDLGFBQUs0WixjQUFjO0FBQ25CLFlBQUksS0FBS3paLE1BQU07QUFDZCxlQUFLQSxLQUFLMFosTUFBTS9QLEdBQUc3QjtRQUNwQjtBQUNBLGFBQUs3SCxRQUFReVM7TUFDZDtBQUNBLGFBQU87SUFDUjtJQUNBNFAsb0JBQW9CO0FBQ25CLFVBQUlyWSxpQkFBaUIsQ0FBQyxLQUFLMFksUUFBUSxLQUFLQSxLQUFLbkMsTUFBTS9jLFlBQVksUUFBUTtBQUN0RSxlQUFPO01BQ1I7QUFDQSxZQUFNaW5CLE9BQU8sS0FBSy9ILEtBQUtNO0FBQ3ZCLFVBQUl5SCxRQUFRLEtBQUtBLE9BQU8sS0FBSy9ILEtBQUs3VSxRQUFRcEUsUUFBUTtBQUNqRCxhQUFLaVosS0FBSzdVLFFBQVE0YyxJQUFJLEVBQUUxSCxXQUFXO0FBRW5DLGNBQU14WixJQUFJLEtBQUszSixLQUFLZSxNQUFNK2EsTUFBTSxHQUFHO0FBQ25DLGNBQU1qVyxNQUFNOEQsRUFBRUUsU0FBUyxJQUFBLElBQUE5SixPQUFRNEosRUFBRSxDQUFDLENBQUMsSUFBSztBQUd4QyxZQUFJeEUsU0FBU3dFLEVBQUUsQ0FBQyxNQUFNLEtBQUtpUjtBQUMzQixZQUFJalIsRUFBRSxDQUFDLE1BQU0sS0FBS2dTLGVBQWU7QUFDaEMsZUFBSzNiLEtBQUtlLFFBQVEsS0FBSzRhLGdCQUFnQjlWO0FBQ3ZDVixtQkFBUztRQUNWO0FBQ0EsYUFBS3lWLFlBQVksS0FBS2U7QUFDdEIsZUFBT3hXO01BQ1I7QUFDQSxhQUFPO0lBQ1I7RUFDRDtBQUNBLFFBQU00YSxhQUFhQSxNQUFNO0FBR3hCLFVBQU1oaEIsU0FBUyxDQUFDO0FBQ2hCK0ssT0FBR1gsd0JBQ0ZsSyxPQUFPOHJCLGlDQUFpQyxTQUNyQ2hzQixPQUFPaXNCLDZCQUE2QixTQUNuQ2xoQixHQUFHWCx3QkFDSHBLLE9BQU9pc0IsMkJBQ1IsQ0FBQyxDQUFDL3JCLE9BQU84ckI7QUFDYmpoQixPQUFHcEIsZ0JBQ0Z6SixPQUFPZ3NCLHlCQUF5QixTQUM3QmxzQixPQUFPbXNCLHVCQUF1QixTQUM3QjVrQixLQUFLaUIsb0JBQW9CLElBQ3hCLE9BQ0F1QyxHQUFHcEIsZ0JBQ0ozSixPQUFPbXNCLHFCQUNSLENBQUMsQ0FBQ2pzQixPQUFPZ3NCO0FBQ2JuaEIsT0FBR25CLGlCQUNGMUosT0FBT2tzQiwwQkFBMEIsU0FDOUJwc0IsT0FBT3FzQix1QkFBdUIsU0FDN0J0aEIsR0FBR25CLGlCQUNINUosT0FBT3FzQixxQkFDUixDQUFDLENBQUNuc0IsT0FBT2tzQjtBQUNicmhCLE9BQUdsQixnQkFBZ0IzSixPQUFPb3NCLDJCQUEyQnRzQixPQUFPdXNCLHlCQUF5QnhoQixHQUFHbEI7QUFDeEZrQixPQUFHakIsZ0JBQWdCNUosT0FBT3NzQix3QkFBd0J4c0IsT0FBT3lzQixzQkFBc0IxaEIsR0FBR2pCO0FBQ2xGaUIsT0FBR2hCLGNBQWM3SixPQUFPd3NCLHNCQUFzQjFzQixPQUFPMnNCLHFCQUFxQjVoQixHQUFHaEI7QUFDN0UsUUFBSSxPQUFPZ0IsR0FBR2hCLGdCQUFnQixZQUFZLENBQUMwVixrQkFBa0IxVSxHQUFHaEIsV0FBVyxHQUFHO0FBQzdFZ0IsU0FBR2hCLGNBQWM7SUFDbEI7QUFDQWdCLE9BQUdmLGVBQ0Y5SixPQUFPMHNCLDZCQUE2QixTQUNqQzVzQixPQUFPNnNCLDJCQUEyQixTQUNqQzloQixHQUFHZixlQUNIaEssT0FBTzZzQix5QkFDUixDQUFDLENBQUMzc0IsT0FBTzBzQjtBQUNiN2hCLE9BQUdaLGVBQ0ZqSyxPQUFPNHNCLG9DQUFvQyxTQUN4QzlzQixPQUFPK3NCLDZCQUE2QixTQUNuQ2hpQixHQUFHWixlQUNIbkssT0FBTytzQiwyQkFDUixDQUFDLENBQUM3c0IsT0FBTzRzQjtBQUNiL2hCLE9BQUdyQixhQUFheEosT0FBTzhzQiw2QkFBNkJodEIsT0FBT2l0QiwyQkFBMkJsaUIsR0FBR3JCO0FBQ3pGcUIsT0FBR2QsY0FDRi9KLE9BQU9ndEIsOEJBQThCLFNBQ2xDbHRCLE9BQU9tdEIsMkJBQTJCLFNBQ2pDcGlCLEdBQUdkLGNBQ0hqSyxPQUFPbXRCLHlCQUNSLENBQUMsQ0FBQ2p0QixPQUFPZ3RCO0FBQ2JuaUIsT0FBR2IsV0FBV2hLLE9BQU9rdEIsb0JBQW9CcHRCLE9BQU9xdEIsa0JBQWtCdGlCLEdBQUdiO0FBQ3JFYSxPQUFHM0MsWUFBWXBJLE9BQU9zdEIsbUJBQW1CO0FBRXpDLFFBQUl2aUIsR0FBRzNDLFdBQVc7QUFDakIsWUFBTW1sQixRQUFRbnRCLFNBQVNvdEI7QUFDdkIsWUFBTUMsWUFBWSxJQUFJN2hCLE9BQUEsV0FBQTVLLE9BQWtCK0osR0FBR29DLGlCQUFlLElBQUEsQ0FBSTtBQUM5RCxVQUFJdWdCO0FBRUosWUFBTUMsZ0JBQWdCQSxNQUFNO0FBQzNCLFlBQUlDLFNBQVNMLE1BQU14ckI7QUFDbkIsWUFBSSxDQUFDNnJCLFFBQVE7QUFDWjtRQUNEO0FBQ0FBLGlCQUFTQSxPQUFPNXJCO0FBQ2hCLGNBQU02ckIsV0FBV0gsT0FBT25lLE1BQU0sUUFBUTtBQUN0QyxjQUFNdWUsV0FBV0YsT0FBT3JlLE1BQU0sUUFBUTtBQUN0QyxZQUFJd2U7QUFDSixjQUFNQyxTQUFTQSxDQUFDQyxNQUFNQyxTQUFTO0FBQzlCLGdCQUFNOW5CLFNBQVMsQ0FBQTtBQUNmLGNBQUkrbkI7QUFDSixjQUNDQztBQUNELGNBQUlILEtBQUtuakIsU0FBU29qQixLQUFLcGpCLFFBQVE7QUFDOUJxakIsbUJBQU9EO0FBQ1BFLG1CQUFPSDtVQUNSLE9BQU87QUFDTkUsbUJBQU9GO0FBQ1BHLG1CQUFPRjtVQUNSO0FBQUEsY0FBQUcsYUFBQXJULDJCQUNtQm1ULElBQUEsR0FBQUc7QUFBQSxjQUFBO0FBQW5CLGlCQUFBRCxXQUFBeGUsRUFBQSxHQUFBLEVBQUF5ZSxTQUFBRCxXQUFBblQsRUFBQSxHQUFBakUsUUFBeUI7QUFBQSxvQkFBZHNYLE9BQUFELE9BQUF0c0I7QUFDVixvQkFBTXdzQixNQUFNSixLQUFLamdCLFFBQVFvZ0IsSUFBSTtBQUM3QixrQkFBSUMsUUFBUSxJQUFJO0FBQ2Zwb0IsdUJBQU9BLE9BQU8wRSxNQUFNLElBQUl5akI7Y0FDekIsT0FBTztBQUNOSCxxQkFBS25QLE9BQU91UCxLQUFLLENBQUM7Y0FDbkI7WUFDRDtVQUFBLFNBQUFuVCxLQUFBO0FBQUFnVCx1QkFBQTFzQixFQUFBMFosR0FBQTtVQUFBLFVBQUE7QUFBQWdULHVCQUFBL1MsRUFBQTtVQUFBO0FBQ0EsaUJBQU8sQ0FBQyxHQUFHbFYsUUFBUSxHQUFHZ29CLElBQUk7UUFDM0I7QUFDQUwsZUFBT0MsT0FBT0gsVUFBVUMsUUFBUTtBQUNoQyxZQUFJQyxLQUFLampCLFNBQVMsR0FBRztBQUNwQmlqQixpQkFBT0EsS0FBS1UsT0FBUUMsT0FBTTtBQUN6QkEsZ0JBQUlBLEVBQUU3akIsS0FBSztBQUNYLG1CQUFPNmpCLEtBQUssQ0FBQ2pCLFVBQVU3a0IsS0FBSzhsQixDQUFDO1VBQzlCLENBQUM7UUFDRjtBQUNBLFlBQUlYLEtBQUtqakIsV0FBVyxHQUFHO0FBQ3RCNGlCLG1CQUFTRTtBQUNULGlCQUFPO1FBQ1I7TUFDRDtBQUNBLFVBQ0NybUIsS0FBS0ksYUFBYSxZQUNsQkosS0FBS29CLGVBQ0w0a0IsU0FDQUEsTUFBTS9xQixhQUNOcEMsU0FBU0MsY0FBYyxXQUFXLEdBQ2pDO0FBQ0QsY0FBTXN1QixNQUFNcEIsTUFBTS9xQjtBQUNsQixjQUFNb3NCLE9BQU9yQixNQUFNL1Q7QUFDbkIsWUFBSW1WLElBQUkzc0IsU0FBUzRzQixLQUFLNXNCLFVBQVUrSSxHQUFHM0MsV0FBVztBQUc3Q3dtQixlQUFLNXNCLFFBQVE0c0IsS0FBSzVzQixNQUFNQyxRQUFROEksR0FBRzNDLFdBQVcsa0NBQWtDO0FBRWhGLGdCQUFNeW1CLE1BQU0vdEIsRUFBRSxTQUFTLEVBQ3JCQyxLQUFLO1lBQ0xxRCxNQUFNO1lBQ05rSSxNQUFNO1VBQ1AsQ0FBQyxFQUNBNUosSUFBSXFJLEdBQUczQyxTQUFTO0FBQ2xCdEgsWUFBRXlzQixLQUFLLEVBQUVoc0IsT0FBT3N0QixHQUFHO0FBQ25CbkIsbUJBQVNILE1BQU14ckIsV0FBV0M7QUFDMUIsZ0JBQU1zRCxRQUFReEUsRUFBRSxNQUFNO0FBQ3RCd0UsZ0JBQU1DLEtBQUssb0JBQW9CLEVBQUU3RCxJQUFJLFNBQVMsTUFBTTtBQUNuRCxnQkFBSW10QixJQUFJbnNCLElBQUksR0FBRztBQUNkaXNCLGtCQUFJM3NCLFFBQVEyc0IsSUFBSTNzQixNQUFNQyxRQUNyQjRFLFdBQVcsZ0JBQWdCLEtBQUtBLFdBQVcsaUJBQWlCLEdBQzVELEVBQ0Q7WUFDRDtVQUNELENBQUM7QUFDRCxnQkFBTWlvQixrQkFBa0JBLE1BQU07QUFDN0JodUIsY0FBRXlzQixNQUFNeHJCLFVBQVUsRUFDaEJnRyxJQUFJNG1CLEdBQUcsRUFDUGp0QixJQUFJLFNBQVMsTUFBTTtBQUNuQjBiLHlCQUFXLE1BQU07QUFDaEIsb0JBQUl1USxjQUFjLEdBQUc7QUFDcEJtQixrQ0FBZ0I7Z0JBQ2pCLE9BQU87QUFDTkQsc0JBQUluc0IsSUFBSSxFQUFFO2dCQUNYO2NBQ0QsR0FBRyxHQUFHO1lBQ1AsQ0FBQztVQUNIO0FBQ0Fvc0IsMEJBQWdCO1FBQ2pCO01BQ0Q7SUFDRDtBQUVBL2pCLE9BQUdiLFdBQVc2a0IsT0FBT0MsU0FBU2prQixHQUFHYixVQUFVLEVBQUU7QUFDN0MsUUFBSTZrQixPQUFPRSxNQUFNbGtCLEdBQUdiLFFBQVEsS0FBS2EsR0FBR2IsV0FBVyxHQUFHO0FBQ2pEYSxTQUFHYixXQUFXO0lBQ2Y7QUFDQWEsT0FBR2IsV0FBV3VILEtBQUs0VyxJQUFJdGQsR0FBR2IsVUFBVSxFQUFFO0FBRXRDLGFBQUFnbEIsTUFBQSxHQUFBQyxrQkFBc0N6a0IsT0FBTzBrQixRQUFRM1AsaUJBQWlCLEdBQUF5UCxNQUFBQyxnQkFBQXJrQixRQUFBb2tCLE9BQUc7QUFBekUsWUFBVyxDQUFDcG9CLEtBQUt1b0IsZ0JBQWdCLElBQUFGLGdCQUFBRCxHQUFBO0FBQ2hDLFVBQUk7QUFDSCxZQUFJcG9CLE9BQU9ELFdBQUEsZ0JBQUE3RixPQUEyQjhGLEdBQUcsQ0FBRSxHQUFHO0FBQzdDdW9CLDJCQUFpQi9pQixPQUFPekYsV0FBQSxnQkFBQTdGLE9BQTJCOEYsR0FBRyxDQUFFO1FBQ3pEO01BQ0QsUUFBUTtBQUNQO01BQ0Q7SUFDRDtBQUVBd00sYUFBU25RLFNBQVMvQyxTQUFTQyxjQUFjLE1BQU0sR0FBRyxLQUFLO0FBQ3ZELFFBQUksQ0FBQ2lULFFBQVE7QUFDWixVQUFJbFQsU0FBU2t2QixlQUFlbHZCLFNBQVNrdkIsWUFBWUMsa0JBQWtCO0FBRWxFamMsaUJBQVNsVCxTQUFTa3ZCLFlBQ2hCQyxpQkFBaUJudkIsU0FBU0MsY0FBYyxNQUFNLEdBQUcsSUFBSSxFQUNyRG12QixpQkFBaUIsV0FBVztNQUMvQixXQUFXMXVCLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTJ1QixjQUFjO0FBRXJDbmMsaUJBQVN4UyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUydUIsYUFBYUM7TUFDcEMsT0FBTztBQUVOcGMsaUJBQVN4UyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU4Z0IsTUFBTThOO01BQzdCO0FBQ0FwYyxlQUFTQSxXQUFXO0lBQ3JCO0VBQ0Q7QUFDQSxRQUFNcWMsV0FBV0EsTUFBTTtBQUN0QixXQUFPdnZCLFNBQVNDLGNBQWMsVUFBVSxNQUFNO0VBQy9DO0FBRUEsUUFBTXV2QixZQUFZLFdBQVk7QUFFN0IsYUFBQUMsTUFBQSxHQUFBQyxZQUFtQm5kLFNBQUFrZCxNQUFBQyxVQUFBaGxCLFFBQUEra0IsT0FBUztBQUE1QixZQUFXaFgsT0FBQWlYLFVBQUFELEdBQUE7QUFDVixVQUFJaFgsS0FBS3hYLFVBQVV3UyxNQUFNO0FBQ3hCZ0YsYUFBSzhLLE9BQU87TUFDYixXQUFXOUssS0FBS3hYLFVBQVV5UyxnQkFBZ0I7QUFDekMrRSxhQUFLNE0sY0FBYztBQUNuQixjQUFNempCLFFBQVE2VyxLQUFLNVgsS0FBS2UsTUFBTSthLE1BQU0sR0FBRztBQUN2QyxZQUFJalcsTUFBTTtBQUNWLFlBQUk5RSxNQUFNOEksU0FBUyxHQUFHO0FBQ3JCLFdBQUEsRUFBR2hFLEdBQUcsSUFBSTlFO1FBQ1g7QUFDQSxjQUFNNEksSUFBSTVJLE1BQU0sQ0FBQyxFQUFFQyxRQUFRLE1BQU0sR0FBRyxFQUFFNEksS0FBSztBQUMzQyxZQUFJRCxFQUFFRSxXQUFXLEdBQUc7QUFDbkIrTixlQUFLOEssT0FBTztRQUNiLE9BQU87QUFDTjlLLGVBQUtHLGtCQUFrQnBPO0FBQ3ZCaU8sZUFBS0ksYUFBYW5TO0FBQ2xCK1IsZUFBS3lKLGdCQUFnQixLQUFLekg7QUFDMUJoQyxlQUFLeFQsTUFBTTtRQUNaO01BQ0Q7SUFDRDtFQUNEO0FBQ0EsUUFBTTBxQixlQUFlQSxNQUFNO0FBQzFCcmQsZUFBVztBQUVYLFFBQUlzZCxLQUFLNXZCLFNBQVNDLGNBQWMsMEJBQTBCLEtBQUtELFNBQVNDLGNBQWMsd0JBQXdCO0FBQzlHLFFBQUksQ0FBQzJ2QixJQUFJO0FBQ1JBLFdBQUs1dkIsU0FBU0MsY0FBYyx3QkFBd0I7QUFDcEQsYUFBTzJ2QixNQUFNQSxHQUFHdG9CLFNBQVN3RCxZQUFZLE1BQU0sU0FBUztBQUNuRDhrQixhQUFLQSxHQUFHM1I7TUFDVDtJQUNEO0FBQ0EsUUFBSSxDQUFDMlIsSUFBSTtBQUNSO0lBQ0Q7QUFDQSxVQUFNQyxXQUFXN3ZCLFNBQVNDLGNBQWMsMkJBQTJCO0FBQ25FLFVBQU02dkIsV0FBVzl2QixTQUFTQyxjQUFjLHdCQUF3QjtBQUNoRSxRQUFLNHZCLFlBQVksQ0FBQyxDQUFDQSxTQUFTanVCLFNBQVdrdUIsYUFBYUEsU0FBU25hLFlBQVltYSxTQUFTaEwsV0FBWTtBQUM3RjtJQUNEO0FBRUEsVUFBTWlMLFlBQVk5aUIsS0FBSyxJQUFJO0FBQzNCLFVBQU0raUIsV0FBVy9pQixLQUFLLElBQUk7QUFFMUJvRixjQUFVcEYsS0FBSyxLQUFLO0FBQ3BCb0YsWUFBUWhFLFlBQVk7QUFDcEJnRSxZQUFRaE8sS0FBSztBQUNiZ08sWUFBUW1QLE1BQU15TyxZQUFZL2MsU0FBUyxVQUFVO0FBRTdDYixZQUFRbVAsTUFBTTBPLFNBQVM7QUFDdkI3ZCxZQUFRbVAsTUFBTTJPLFNBQVM7QUFDdkJILGFBQVM3dUIsT0FBT2tSLE9BQU87QUFFdkIsVUFBTWdTLFFBQVE7QUFDZCxRQUFJQSxPQUFPO0FBQ1YwTCxnQkFBVTFyQixLQUFLO0FBQ2YwckIsZ0JBQVU1dUIsT0FBT2tqQixLQUFLO0lBQ3ZCLE9BQU87QUFDTjBMLGdCQUFVMXJCLEtBQUs7QUFDZjByQixnQkFBVTV1QixPQUFPOEwsS0FBS3hHLFdBQVcsWUFBWSxHQUFHLElBQUksQ0FBQztJQUN0RDtBQUNBc3BCLGNBQVUxaEIsWUFBWTtBQUN0QjBoQixjQUFVdk8sTUFBTXlPLFlBQVk7QUFDNUJGLGNBQVV2TyxNQUFNNE8sZ0JBQWdCO0FBRWhDLFVBQU14TixPQUFPNWlCLFNBQVNDLGNBQWMsU0FBUyxLQUFLRCxTQUFTQyxjQUFjLGlCQUFpQjtBQUMxRixRQUFJMmlCLE1BQU07QUFDVCxZQUFNeU4sU0FBU1QsR0FBR1UsVUFBVSxFQUFFO0FBQzlCRCxhQUFPbHZCLE9BQU80dUIsU0FBUztBQUN2Qk0sYUFBT2x2QixPQUFPNnVCLFFBQVE7QUFDdEJwTixXQUFLNUUsaUJBQWlCLFVBQVUsQ0FBQ3VTLGNBQWM1cEIsU0FBUztBQUN2RCxnQkFBUSxNQUFNO0FBQ2IsY0FBSTZwQixZQUFZO0FBQ2hCLGNBQUlELFdBQVc7QUFDZCxnQkFBSSxPQUFPQSxjQUFjLFVBQVU7QUFFbENDLDBCQUFZMXdCLE9BQU8yd0IsS0FBS0YsU0FBUztZQUNsQyxXQUFXQSxxQkFBcUJHLFVBQVU7QUFDekNGLDBCQUFZRCxVQUFVMWEsTUFBTStNLE1BQU0sQ0FBQzJOLFdBQVcsR0FBRzVwQixJQUFJLENBQUM7WUFDdkQ7VUFDRDtBQUNBLGNBQUksQ0FBQzZwQixXQUFXO0FBQ2YsbUJBQU87VUFDUjtBQUNBaEIsb0JBQVU7QUFFVixnQkFBTW1CLEtBQ0wzd0IsU0FBU0MsY0FBYyxvQ0FBb0MsS0FDM0RELFNBQVNDLGNBQWMsU0FBUztBQUNqQyxjQUFJMndCLFdBQVc7QUFDZixtQkFBQUMsTUFBQSxHQUFBQyxZQUFxQnZlLFNBQUFzZSxNQUFBQyxVQUFBcG1CLFFBQUFtbUIsT0FBUztBQUE5QixrQkFBV3pVLFNBQUEwVSxVQUFBRCxHQUFBO0FBQ1Ysa0JBQU10SCxJQUFJbk4sT0FBT3hEO0FBQ2pCLGdCQUFJLENBQUMyUSxHQUFHO0FBQ1A7WUFDRDtBQUNBLGtCQUFNN2lCLE1BQU0wVixPQUFPdkQ7QUFDbkIsa0JBQU1rWSxVQUFBLEtBQUFud0IsT0FBZStKLEdBQUdtQyxvQkFBa0IsR0FBQSxFQUFBbE0sT0FBSTJvQixDQUFDLEVBQUEzb0IsT0FBRzhGLE1BQUEsSUFBQTlGLE9BQVU4RixHQUFHLElBQUssSUFBRSxJQUFBO0FBRXRFLGtCQUFNdUosY0FBYyxJQUFJekUsT0FDdkIsTUFBTTVLLE9BQU8sU0FBU3VLLE9BQU9DLElBQUE0bEIscUJBQUFBLG1CQUFBMWxCLHVCQUFBLENBQUEsYUFBQSxHQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLEdBQW9CLFFBQVEsR0FBRyxHQUM1RCxHQUNEO0FBQ0Esa0JBQU0ybEIsZUFBZU4sR0FBRy91QixNQUFNQyxRQUFRLHFCQUFxQixFQUFFLEVBQUVBLFFBQVFvTyxXQUFXO0FBQ2xGLGdCQUFJLENBQUNMLGNBQWNxaEIsY0FBYzFILEdBQUcsSUFBSSxHQUFHO0FBQzFDb0gsaUJBQUcvdUIsU0FBQSxLQUFBaEIsT0FBY213QixPQUFPO0FBQ3hCSCx5QkFBVztZQUNaO1VBQ0Q7QUFDQSxjQUFJQSxVQUFVO0FBRWIsa0JBQU1NLFFBQVEsSUFBSTFsQixPQUFPLE1BQU01SyxPQUFPLFFBQVEsRUFBRUEsT0FBTyxPQUFPLEdBQUcsR0FBRztBQUNwRSt2QixlQUFHL3VCLFFBQVErdUIsR0FBRy91QixNQUFNQyxRQUFRcXZCLE9BQU8sRUFBRTtVQUN0QztBQUNBLGlCQUFPO1FBQ1IsR0FBR3RPLEtBQUt1TyxRQUFRO01BQ2pCLENBQUM7SUFDRjtFQUNEO0FBQ0EsTUFBSUMsY0FBYztBQUNsQixRQUFNQyxXQUFXQSxDQUFDO0lBQUNsUTtFQUFVLE1BQU07QUFDbEMsUUFBSUEsV0FBV21RLGFBQWFDLEtBQUtDLGNBQWM7QUFDOUMsYUFBTztJQUNSO0FBQ0EsUUFBSUMsV0FBV3B1QixNQUFNOGQsV0FBV3VRLGFBQWEsTUFBTSxDQUFDO0FBQ3BELFFBQUksQ0FBQ0QsVUFBVTtBQUNkLGFBQU87SUFDUjtBQUNBQSxlQUFXQSxTQUFTeGpCLE1BQU13akIsU0FBUzFqQixRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUVsTSxRQUFRLE1BQU0sR0FBRztBQUN0RSxRQUFJOEksR0FBR3RCLGFBQWFzQixHQUFHdEIsVUFBVWIsS0FBS2lwQixRQUFRLEdBQUc7QUFDaEQsYUFBTztJQUNSO0FBQ0EsVUFBTXpyQixTQUFTO01BQ2QzQyxPQUFPb3VCO01BQ1B0aUIsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFO0lBQ25CO0FBQ0EsUUFBSXdELGFBQWEsTUFBTTtBQUN0QixhQUFPM007SUFDUjtBQUNBLFFBQUlvckIsZ0JBQWdCLE1BQU07QUFDekIsWUFBTW5oQixjQUFjLElBQUl6RSxPQUFPLE1BQU01SyxPQUFPLFNBQVN1SyxPQUFPQyxJQUFBdW1CLHFCQUFBQSxtQkFBQXJtQix1QkFBQSxDQUFBLGFBQUEsR0FBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxHQUFvQixRQUFRLEdBQUcsR0FBRyxHQUFHO0FBQ2pHOGxCLG9CQUFjemUsU0FBUzlRLFFBQVEscUJBQXFCLEVBQUUsRUFBRUEsUUFBUW9PLGFBQWEsRUFBRTtJQUNoRjtBQUNBakssV0FBT21KLFFBQVFTLGNBQWN3aEIsYUFBYUssVUFBVSxJQUFJO0FBQ3hELFdBQU96ckI7RUFDUjtBQUNBLE1BQUk0ckIsY0FBYztBQUNsQixNQUFJQyxlQUFlO0FBQ25CLFFBQU1DLGNBQWNBLENBQUNDLE9BQU9odUIsS0FBS3NLLGNBQWM7QUFDOUMsVUFBTXJJLFNBQVN0RixFQUFFcXhCLEtBQUssRUFBRTVzQixLQUFBLEdBQUF2RSxPQUFRbUQsS0FBRyxHQUFBLEVBQUFuRCxPQUFJeU4sU0FBUyxDQUFFO0FBQ2xELFdBQU9ySSxVQUFVQSxPQUFPMEUsU0FBUyxJQUFJMUUsT0FBTyxDQUFDLElBQUk7RUFDbEQ7QUFDQSxRQUFNZ3NCLFFBQVNDLG9CQUFtQjtBQUNqQyxRQUFJTCxhQUFhO0FBQ2hCO0lBQ0Q7QUFDQUEsa0JBQWM7QUFDZCxRQUFJQyxjQUFjO0FBQ2pCL3hCLGFBQU9veUIsYUFBYUwsWUFBWTtBQUNoQ0EscUJBQWU7SUFDaEI7QUFHQXhmLGdCQUFBQSxVQUFZclMsU0FBU0MsY0FBYyxxQkFBcUI7QUFDeEQsVUFBTWt5QixhQUFhbnlCLFNBQVNDLGNBQWMscUJBQXFCO0FBQy9ELFFBQUksQ0FBQ29TLFNBQVM7QUFDYixVQUFJK2YsU0FBUztBQUNiLFVBQUksQ0FBQ0QsWUFBWTtBQUNoQkMsaUJBQVNOLFlBQVk5eEIsVUFBVSxPQUFPLGFBQWE7QUFDbkQsWUFBSSxDQUFDb3lCLFFBQVE7QUFDWjtRQUNEO01BQ0Q7QUFDQS9mLGdCQUFVcEYsS0FBSyxLQUFLO0FBQ3BCb0YsY0FBUWhPLEtBQUs7QUFDYmdPLGNBQVFtUCxNQUFNeU8sWUFBWS9jLFNBQVMsVUFBVTtBQUU3QyxZQUFNbVIsUUFBUXBYLEtBQUssR0FBRztBQUN0Qm9YLFlBQU12ZSxPQUFPcUIsS0FBS2lILGNBQWN2TSxRQUFRLE1BQU0sb0JBQW9CO0FBQ2xFd2lCLFlBQU1oaEIsUUFBUW9ELFdBQVcsWUFBWTtBQUNyQzRkLFlBQU1sakIsT0FBTzhMLEtBQUt4RyxXQUFXLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDakQ0TCxjQUFRbFIsT0FBT2tqQixLQUFLO0FBQ3BCaFMsY0FBUWxSLE9BQU84TCxLQUFLLEtBQUssSUFBSSxDQUFDO0FBRTlCLFVBQUlvbEIsWUFBWUYsYUFBYUEsV0FBV2xVLGFBQWFqZSxTQUFTQyxjQUFjLFdBQVc7QUFDdkYsVUFBSSxDQUFDb3lCLFdBQVc7QUFDZkEsb0JBQVlwbEIsS0FBSyxLQUFLO0FBQ3RCb2xCLGtCQUFVaHVCLEtBQUs7QUFDZit0QixlQUFPblUsV0FBV3lELGFBQWEyUSxXQUFXRCxPQUFPelEsV0FBVztNQUM3RDtBQUNBMFEsZ0JBQVVoa0IsWUFBWTtBQUN0QmdrQixnQkFBVTdRLE1BQU0vYyxVQUFVO0FBQzFCLFVBQUkwdEIsWUFBWTtBQUNmQSxtQkFBVy9nQixPQUFPaUIsT0FBTztNQUMxQixPQUFPO0FBQ05nZ0Isa0JBQVVseEIsT0FBT2tSLE9BQU87TUFDekI7SUFDRDtBQUNBLFFBQUlhLFFBQVE7QUFDWGIsY0FBUTJPLE1BQU07SUFDZjtBQUVBLFVBQU1zUixnQkFBZ0JBLENBQUN4UixNQUFNclEsY0FBYztBQUMxQyxVQUFJckU7QUFDSixVQUFJMk4sT0FBTytHLEtBQUt5UixpQkFBaUIsSUFBSTtBQUNyQyxVQUFJeFksS0FBS3JQLFNBQVMsR0FBRztBQUNwQjZJLGlCQUFTO0FBQ1R1TixlQUFPL0csS0FBSyxDQUFDLEVBQUVrRTtNQUNoQixPQUFPO0FBQ05sRSxlQUFPK0csS0FBS3lSLGlCQUFpQixNQUFNO01BQ3BDO0FBRUEsWUFBTUMsV0FBV0MsTUFBTTFaLEtBQUs7UUFDM0JyTyxRQUFRcVAsS0FBS3JQO01BQ2QsQ0FBQztBQUNELFdBQUswQixJQUFJLEdBQUdBLElBQUkyTixLQUFLclAsUUFBUTBCLEtBQUs7QUFDakNvbUIsaUJBQVNwbUIsQ0FBQyxJQUFJMk4sS0FBSzNOLENBQUM7TUFDckI7QUFDQSxXQUFLQSxJQUFJLEdBQUdBLElBQUlvbUIsU0FBUzluQixRQUFRMEIsS0FBSztBQUNyQyxjQUFNNUQsT0FBTzZvQixTQUFTbUIsU0FBU3BtQixDQUFDLENBQUM7QUFDakMsWUFBSTVELFNBQVMsUUFBUUEsS0FBSzJHLFVBQVUsUUFBUTJSLE1BQU07QUFDakQsY0FBSUosZUFBZUksTUFBTTBSLFNBQVNwbUIsQ0FBQyxHQUFHNUQsS0FBS25GLE9BQU9tRixLQUFLMkcsTUFBTSxDQUFDLEdBQUdzQixTQUFTO1FBQzNFO01BQ0Q7QUFDQSxhQUFPK2hCLFNBQVM5bkIsU0FBUyxJQUFJOG5CLFNBQVNFLEdBQUcsRUFBRSxJQUFJO0lBQ2hEO0FBQ0EsVUFBTUMsV0FBV0wsY0FBY2pnQixTQUFTLEtBQUs7QUFFN0MsUUFBSXFPLGVBQWVuTixTQUFTbEIsUUFBUWtnQixpQkFBaUIsSUFBSSxFQUFFLENBQUMsSUFBSWxnQixTQUFTLE1BQU0sTUFBTXNnQixhQUFhLE1BQU0sS0FBSztBQUM3RyxRQUFJLENBQUNyZ0IsVUFBVTtBQUNkLFVBQUlLLGFBQWEsUUFBUXdmLFlBQVk7QUFDcEMsWUFBSWpmLFFBQVE7QUFDWGlmLHFCQUFXblIsTUFBTTtRQUNsQjtBQUNBc1Isc0JBQWNILFlBQVksSUFBSTtNQUMvQjtBQUVBLFlBQU1TLGNBQWMzbEIsS0FBSyxNQUFNO0FBQy9CMmxCLGtCQUFZdmtCLFlBQVk7QUFDeEIsVUFBSTZFLFFBQVE7QUFDWDBmLG9CQUFZNVIsTUFBTTtNQUNuQjtBQUNBM08sY0FBUXFQLGFBQWFrUixhQUFhdmdCLFFBQVE4TyxXQUFXUSxXQUFXO0FBQ2hFaVIsa0JBQVl6eEIsT0FBTzhMLEtBQUssS0FBVSxJQUFJLENBQUM7QUFDdkN5RixrQkFBWXpGLEtBQUssTUFBTTtBQUN2QjJsQixrQkFBWXp4QixPQUFPdVIsU0FBUztBQUM1QkEsZ0JBQVVtZ0IsWUFBQSxPQUFBanlCLE9BQW1CK0osR0FBRzFDLFVBQVEsT0FBQTtBQUN4QyxZQUFNLENBQUMyWixJQUFJLElBQUlsUCxVQUFVNmYsaUJBQWlCLEdBQUc7QUFDN0MzUSxXQUFLNUQsaUJBQWlCLFNBQVVnRixXQUFVO0FBQ3pDakYsc0JBQWM7QUFDZEksd0JBQWdCO0FBQ2hCLGVBQU9qTSxRQUFROFEsS0FBSztNQUNyQixDQUFDO0FBQ0RwQixXQUFLdmUsUUFBUW9ELFdBQVcsZUFBZTtBQUN2Q21iLFdBQUtKLE1BQU1zUixTQUFTO0lBQ3JCO0FBQ0ExQixrQkFBYztBQUNkLFFBQUlhLDBCQUEwQnZCLFVBQVU7QUFDdkN1QixxQkFBZTtJQUNoQjtBQUNBdHlCLE9BQUdvekIsS0FBSyxjQUFjLEVBQUVDLEtBQUs7QUFDN0J0eUIsTUFBRSxNQUFNLEVBQUUwRSxRQUFRLHNCQUFzQjtFQUN6QztBQUNBLFFBQU02dEIsbUJBQW1CQSxNQUFNO0FBQzlCLFFBQUl4Z0IsWUFBWTtBQUNmO0lBQ0Q7QUFDQSxVQUFNeWdCLGdCQUFnQmptQixLQUFLLEtBQUs7QUFDaENpbUIsa0JBQWMxUixNQUFNL2MsVUFBVTtBQUM5QnpFLGFBQVNDLGNBQWMsTUFBTSxFQUFFa0IsT0FBTyt4QixhQUFhO0FBQ25EQSxrQkFBY0wsWUFBQSxtRkFBQWp5QixPQUNidUcsS0FBSzJHLFVBQ04sU0FBQSxFQUFBbE4sT0FBVThOLG1CQUFtQnZILEtBQUs4TyxVQUFVLEdBQUMsMEdBQUEsRUFBQXJWLE9BRUZ1RyxLQUFLZ3NCLG9CQUFrQiw4ekJBQUE7QUFnQmxFMWdCLGlCQUFhelMsU0FBU0MsY0FBYyxtQkFBbUI7RUFDeEQ7QUFDQSxRQUFNbXpCLFVBQVVBLE1BQU07QUFFckIsUUFBSWpzQixLQUFLb0IsYUFBYTtBQUNyQixZQUFNckYsU0FBUztRQUNkQyxRQUFRO1FBQ1JDLFFBQVE7UUFDUjBTLGVBQWU7UUFDZkMsYUFBYTtRQUNiQyxRQUFRN08sS0FBSzhPO1FBQ2JDLE1BQU0sQ0FBQyxRQUFRLFdBQVc7UUFDMUJFLFFBQVEsQ0FBQyxXQUFXLGFBQWEsS0FBSztRQUN0Q0UsU0FBUztRQUNURSxXQUFXclAsS0FBS3NQO1FBQ2hCSixTQUFTO1FBQ1RNLE1BQU0sQ0FBQyxVQUFVO01BQ2xCO0FBQ0FoTSxTQUFHa1MsUUFBU3JaLFVBQVM7QUFDcEJxUSxnQkFBUXJRLElBQUk7QUFDWnd1QixjQUFNaUIsZ0JBQWdCO01BQ3ZCO0FBQ0EveUIsVUFBSUwsSUFBSXFELE1BQU0sRUFBRWlCLEtBQU1YLFVBQVM7QUFDOUJtSCxXQUFHa1MsTUFBTXJaLElBQUk7TUFDZCxDQUFDO0FBQ0RxdUIscUJBQWU3VSxXQUFXLE1BQU07QUFDL0JnVixjQUFNaUIsZ0JBQWdCO01BQ3ZCLEdBQUcsR0FBSTtJQUNSLE9BQU87QUFFTixVQUFJOXJCLEtBQUtpQixzQkFBc0IsR0FBRztBQUNqQztNQUNEO0FBQ0F1SyxpQkFBVztBQUNYQyxpQkFBVztBQUNYb2YsWUFBTWlCLGdCQUFnQjtJQUN2QjtFQUNEO0FBQ0EsUUFBTUksV0FBWXB5QixXQUFVO0FBQzNCLFVBQU04WSxPQUFPOVksTUFBTTBiLE1BQU0sSUFBSTtBQUM3QixRQUFJNUMsS0FBS3JQLFdBQVcsR0FBRztBQUN0QixhQUFPO0lBQ1I7QUFDQSxRQUFJa25CLGVBQWVyZixRQUFRN0gsV0FBVyxLQUFLNkgsUUFBUSxDQUFDLEVBQUUwTyxlQUFlO0FBRXBFLFlBQU1xUyxXQUFXLENBQUE7QUFDakIsWUFBTWxpQixTQUFTbUIsUUFBUTdILFdBQVcsSUFBSTZILFFBQVEsQ0FBQyxFQUFFd08sT0FBTztBQUN4RCxVQUFJM1U7QUFDSixXQUFLQSxJQUFJLEdBQUdBLElBQUkyTixLQUFLclAsUUFBUTBCLEtBQUs7QUFDakMsWUFBSTJOLEtBQUszTixDQUFDLEVBQUUxQixXQUFXLEdBQUc7QUFDekI7UUFDRDtBQUNBLFlBQUlzUSxNQUFNakIsS0FBSzNOLENBQUMsRUFBRXVRLE1BQU0sR0FBRztBQUMzQixjQUFNalcsTUFBTXNVLElBQUl0USxTQUFTLElBQUlzUSxJQUFJLENBQUMsSUFBSTtBQUN0QyxTQUFDQSxHQUFHLElBQUlBO0FBQ1IsY0FBTTRHLE9BQU8zVSxLQUFLLEdBQUc7QUFDckIyVSxhQUFLOWIsT0FBTzBJLGFBQUEsR0FBQTVOLE9BQWdCK0osR0FBR21DLG9CQUFrQixHQUFBLEVBQUFsTSxPQUFJb2EsR0FBRyxDQUFFO0FBQzFENEcsYUFBS3pnQixPQUFPOEwsS0FBSytOLEtBQUssSUFBSSxDQUFDO0FBQzNCNEcsYUFBS3ZlLFFBQVEyWDtBQUNiLGNBQU0rRixPQUFPOVQsS0FBSyxNQUFNO0FBQ3hCOFQsYUFBSzVmLE9BQU95Z0IsSUFBSTtBQUNoQixZQUFJLENBQUN4VixHQUFHO0FBQ1BpRyxrQkFBUXFQLGFBQWF6VSxLQUFLLEtBQUssSUFBSSxHQUFHbUUsTUFBTTtRQUM3QztBQUNBQSxlQUFPQSxPQUFPMlAsSUFBSTtBQUNsQixZQUFJM1AsVUFBVWhGLElBQUksSUFBSTJOLEtBQUtyUCxRQUFRO0FBQ2xDbkYsaUJBQU9tYyxhQUFhelUsS0FBSyxPQUFPLElBQUksR0FBR21FLE1BQU07UUFDOUM7QUFDQWtpQixpQkFBU0EsU0FBUzVvQixNQUFNLElBQUk7VUFDM0JrVCxTQUFTbUQ7VUFDVDFkLE9BQU8yWDtVQUNQdFU7UUFDRDtNQUNEO0FBRUEsVUFBSTBLLFFBQVE7QUFDWEEsZUFBTzZNLFdBQVd5RCxhQUFhelUsS0FBSyxPQUFPLElBQUksR0FBR21FLE1BQU07TUFDekQ7QUFDQSxXQUFLaEYsSUFBSSxHQUFHQSxJQUFJa25CLFNBQVM1b0IsUUFBUTBCLEtBQUs7QUFDckMsWUFBSXNVLGVBQWVyTyxTQUFTaWhCLFNBQVNsbkIsQ0FBQyxFQUFFd1IsU0FBUzBWLFNBQVNsbkIsQ0FBQyxFQUFFL0ksT0FBT2l3QixTQUFTbG5CLENBQUMsRUFBRTFGLEdBQUc7TUFDcEY7SUFDRDtBQUNBLFdBQU87RUFDUjtBQUNBLFFBQU02c0IsV0FBV0EsTUFBTTtBQUN0QixRQUFJdnRCLFNBQVM7QUFDYixhQUFBd3RCLE1BQUEsR0FBQUMsWUFBcUJsaEIsU0FBQWloQixNQUFBQyxVQUFBL29CLFFBQUE4b0IsT0FBUztBQUE5QixZQUFXcFgsU0FBQXFYLFVBQUFELEdBQUE7QUFDVixVQUFJM3lCLE9BQU91YixPQUFPeEQ7QUFDbEIsWUFBTWxTLE1BQU0wVixPQUFPdkQ7QUFDbkIsVUFBSWhZLFFBQVFBLEtBQUs2SixTQUFTLEdBQUc7QUFDNUIsWUFBSWhFLFFBQVEsTUFBTTtBQUNqQjdGLGtCQUFBLElBQUFELE9BQVk4RixHQUFHO1FBQ2hCO0FBQ0EsWUFBSVYsV0FBVyxNQUFNO0FBQ3BCQSxtQkFBU25GO1FBQ1YsT0FBTztBQUNObUYsb0JBQUEsS0FBQXBGLE9BQWVDLElBQUk7UUFDcEI7TUFDRDtJQUNEO0FBQ0EsV0FBT21GO0VBQ1I7QUFDQSxRQUFNMHRCLGFBQWFBLE1BQU07QUFDeEI5UyxlQUFXO0FBQ1gsUUFDQyxDQUFDalcsR0FBR3ZCLG1CQUNKakMsS0FBS2lCLHNCQUFzQixNQUMzQmpCLEtBQUt3c0IsK0JBQStCLFlBQ3BDeHNCLEtBQUs2USxZQUNKO0FBQ0QyWCxtQkFBYTtBQUNicUMsWUFBTSxNQUFNO0FBRVgsWUFBSWx5QixPQUFPOHpCLGNBQWNBLFdBQVdDLHVCQUF1QjtBQUMxREQscUJBQVdDLHdCQUF3QlIsU0FBU08sV0FBV0MscUJBQXFCO1FBQzdFO01BQ0QsQ0FBQztJQUNGLE9BQU87QUFDTixVQUNDLENBQUMxc0IsS0FBSzJzQixlQUNOM3NCLEtBQUtJLGFBQWEsVUFDbEIrRixNQUFNLE1BQU0sTUFBTSxRQUNsQkEsTUFBTSxPQUFPLE1BQU0sUUFDbkIsQ0FBQ2lpQixTQUFTLEtBQ1Y1a0IsR0FBR3pDLFFBQVEsR0FDVjtBQUNEO01BQ0Q7QUFDQWtyQixjQUFRO0lBQ1Q7RUFDRDtBQUNBLFFBQU1XLE1BQU1BLE1BQU07QUFDakIsUUFBSXBwQixHQUFHcXBCLFNBQVM7QUFDZjtJQUNEO0FBQ0FycEIsT0FBR3FwQixVQUFVO0FBQ2JOLGVBQVc7RUFDWjtBQUVBNXpCLFNBQU9tMEIsbUJBQW1CLE1BQU07QUFDL0IsV0FBT1YsU0FBUztFQUNqQjtBQUNBenpCLFNBQU9vMEIsbUJBQW9CanpCLFdBQVU7QUFDcEMsV0FBT295QixTQUFTcHlCLEtBQUs7RUFDdEI7QUFDQW5CLFNBQU9xMEIsb0JBQW9CLE1BQU07QUFDaEMzRSxjQUFVO0VBQ1g7QUFDQTdrQixLQUFHeXBCLGVBQWdCN1ksY0FBYTtBQUUvQjViLE9BQUdvekIsS0FBSyxjQUFjLEVBQUVwckIsSUFBSTRULFFBQVE7RUFDckM7QUFHQSxNQUFJcFUsS0FBS3dzQiwrQkFBK0IsVUFBVTtBQUVqRGgwQixPQUFHb3pCLEtBQUssVUFBVSxFQUFFcHJCLElBQUksTUFBTTtBQUc3QixVQUFJM0gsU0FBU0MsY0FBYyx1QkFBdUIsR0FBRztBQUNwRDtNQUNEO0FBQ0FvUyxnQkFBVTtBQUNWRSxnQkFBVSxDQUFBO0FBQ1ZxZixvQkFBYztBQUNkam5CLFNBQUdxcEIsVUFBVTtBQUNiRCxVQUFJO0lBQ0wsQ0FBQztFQUNGO0FBR0FyekIsSUFBRXF6QixHQUFHO0FBQ04sR0FBRzsiLAogICJuYW1lcyI6IFsiY2F0Y2hlY2tJbmxpbmVJY29uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAibXdBcGkiLCAidXNlckFnZW50IiwgImluaXRNd0FwaSIsICJob3RDYXRDaGVjayIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIndpbmRvdyIsICJIb3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRPcHRPdXQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJhcGkiLCAiY2hlY2tDYXRlZ29yaWVzUmVnRXhwIiwgInNlbGZOYW1lIiwgInN0b3JhZ2VJdGVtTmFtZSIsICJzdG9yYWdlSXRlbSIsICJzdG9yYWdlIiwgImNyZWF0ZWpJY29uIiwgImljb25DbGFzcyIsICIkIiwgImF0dHIiLCAiY29uY2F0IiwgInRleHQiLCAiY3JlYXRlTm90aWZ5QXJlYSIsICJ0ZXh0Tm9kZSIsICJpY29uIiwgInN0YXRlIiwgImFkZENsYXNzIiwgImFwcGVuZCIsICJjc3MiLCAicGFkZGluZyIsICJvbmUiLCAiZSIsICJfc2VsZiR3cFRleHRib3gxJHZhbHUiLCAic2VsZiIsICJuZXdWYWwiLCAid3BUZXh0Ym94MSIsICJ2YWx1ZSIsICJyZXBsYWNlIiwgImRsZ0J1dHRvbnMiLCAiJGRpYWxvZ0NoZWNrU3RvcmFnZSIsICIkcGVybWFTYXZlSGludCIsICIkdGV4dEhpbnROb2RlIiwgIiRkaWFsb2ciLCAiZG9SZW1vdmUiLCAid3BTdW1tYXJ5IiwgIndyaXRlU3RvcmFnZSIsICJ2YWwiLCAic2V0IiwgIl8kZGlhbG9nQ2hlY2tTdG9yYWdlJCIsICJjaGVja2VkIiwgImRpYWxvZyIsICJfJGRpYWxvZ0NoZWNrU3RvcmFnZSQyIiwgIl9hZGRUb0pTIiwgIl9lIiwgInByZXZlbnREZWZhdWx0IiwgImhhc0NsYXNzIiwgIiRlbCIsICJvZmYiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAidGl0bGUiLCAic3VtbWFyeSIsICJhcHBlbmR0ZXh0IiwgImRhdGEiLCAiZWRpdERvbmUiLCAiZWRpdFN0YXQiLCAiZXJyb3IiLCAibm90aWZ5IiwgImNvZGUiLCAiaW5mbyIsICJ0YWciLCAidHlwZSIsICJmYWRlT3V0IiwgInBvc3RXaXRoVG9rZW4iLCAidGhlbiIsICJwcm9tcHQiLCAiaWQiLCAib24iLCAiZmFkZUluIiwgImFwcGVuZFRvIiwgImRpc3BsYXkiLCAidXNlciIsICJpc0Fub24iLCAiaGlkZSIsICJtb2RhbCIsICJjbG9zZU9uRXNjYXBlIiwgIndpZHRoIiwgImJ1dHRvbnMiLCAiY2xvc2UiLCAiJGJvZHkiLCAiZmluZCIsICJ0cmlnZ2VyIiwgIm9wZW4iLCAiJGJ1dHRvbnMiLCAicGFyZW50IiwgImVxIiwgImJ1dHRvbiIsICJpY29ucyIsICJwcmltYXJ5IiwgIkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdCIsICIkb2tMaW5rIiwgImhyZWYiLCAiZG9FZGl0IiwgInJlc3VsdCIsICJub2NyZWF0ZSIsICJhamF4IiwgInVybCIsICJkYXRhVHlwZSIsICJzdWNjZXNzIiwgImNhY2hlIiwgImxvYWRIb3RDYXRDaGVjayIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYXJncyIsICJtZXNzYWdlIiwgInBsYWluIiwgImhvdENhdE1lc3NhZ2VzIiwgIndnVXNlckxhbmd1YWdlIiwgImluY2x1ZGVzIiwgIm1lc3NhZ2VzIiwgImhvdENhdCIsICJjb25mIiwgInZhbHVlcyIsICJIb3RDYXQiLCAibm9kZU5hbWUiLCAid2dBY3Rpb24iLCAibGlua3MiLCAiY2hhbmdlIiwgInJlbW92ZSIsICJhZGQiLCAicmVzdG9yZSIsICJ1bmRvIiwgImRvd24iLCAidXAiLCAiY2hhbmdlVGFnIiwgImFkZG11bHRpIiwgImRpc2FibGUiLCAibnMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAibnNJZHMiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dBcnRpY2xlSWQiLCAidGVzdCIsICJ3Z1RpdGxlIiwgImNyZWF0b3IiLCAidGltZWR0ZXh0IiwgImluc3RpdHV0aW9uIiwgInVuY2F0X3JlZ2V4cCIsICJleGlzdHNZZXMiLCAiUF95ZXNfZGVmYXVsdCIsICJleGlzdHNObyIsICJQX25vX2RlZmF1bHQiLCAidGVtcGxhdGVfY2F0ZWdvcmllcyIsICJjYXBpdGFsaXplUGFnZU5hbWVzIiwgInVwbG9hZF9kaXNhYmxlZCIsICJibGFja2xpc3QiLCAiYmdfY2hhbmdlZCIsICJub19hdXRvY29tbWl0IiwgImRlbF9uZWVkc19kaWZmIiwgInN1Z2dlc3RfZGVsYXkiLCAiZWRpdGJveF93aWR0aCIsICJzdWdnZXN0aW9ucyIsICJmaXhlZF9zZWFyY2giLCAidXNlX3VwX2Rvd24iLCAibGlzdFNpemUiLCAic2luZ2xlX21pbm9yIiwgImRvbnRfYWRkX3RvX3dhdGNobGlzdCIsICJzaG9ydGN1dHMiLCAiYWRkU2hvcnRjdXRzIiwgIm1hcCIsICJfd2luZG93JEhvdENhdCIsICJrIiwgIk9iamVjdCIsICJoYXNPd24iLCAidiIsICJ0cmltIiwgImxlbmd0aCIsICJIQyIsICJ1YSIsICJuYXZpZ2F0b3IiLCAidG9Mb3dlckNhc2UiLCAiaXNfd2Via2l0IiwgImNhdF9wcmVmaXgiLCAibm9TdWdnZXN0aW9ucyIsICJ3aWtpVGV4dEJsYW5rIiwgIlN0cmluZyIsICJyYXciLCAiX3RlbXBsYXRlT2JqZWN0IiwgIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCAid2lraVRleHRCbGFua1JFIiwgIlJlZ0V4cCIsICJ3aWtpVGV4dEJsYW5rT3JCaWRpIiwgIl90ZW1wbGF0ZU9iamVjdDIiLCAiZm9ybWF0dGVkTmFtZXNwYWNlcyIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAibmFtZXNwYWNlSWRzIiwgImF1dG9Mb2NhbGl6ZSIsICJuYW1lc3BhY2VOdW1iZXIiLCAiZmFsbGJhY2siLCAiY3JlYXRlUmVnZXhwU3RyIiwgIm5hbWUiLCAicmVnZXhfbmFtZSIsICJpIiwgImluaXRpYWwiLCAiY2hhckF0IiwgImxsIiwgInVsIiwgInRvVXBwZXJDYXNlIiwgIl90ZW1wbGF0ZU9iamVjdDMiLCAiY2Fub25pY2FsIiwgInJlZ2V4cCIsICJjYXRfbmFtZSIsICJjYXRlZ29yeV9jYW5vbmljYWwiLCAiY2F0ZWdvcnlfcmVnZXhwIiwgInRlbXBsYXRlX3JlZ2V4cCIsICJtYWtlIiwgImFyZyIsICJsaXRlcmFsIiwgImNyZWF0ZVRleHROb2RlIiwgImNyZWF0ZUVsZW1lbnQiLCAicGFyYW0iLCAidXJpIiwgImxvY2F0aW9uIiwgInJlIiwgIm0iLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAic2NyaXB0IiwgIndnU2NyaXB0IiwgImluZGV4T2YiLCAid2dTZXJ2ZXIiLCAic2xpY2UiLCAicHJvdG9jb2wiLCAicHJlZml4IiwgIndnQXJ0aWNsZVBhdGgiLCAiY2xhc3NOYW1lIiwgImNhcGl0YWxpemUiLCAic3RyIiwgIndpa2lQYWdlUGF0aCIsICJwYWdlTmFtZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiZXNjYXBlUkUiLCAiX3RlbXBsYXRlT2JqZWN0NCIsICJzdWJzdGl0dXRlRmFjdG9yeSIsICJvcHRpb25zIiwgImxlYWQiLCAiaW5kaWNhdG9yIiwgImxicmFjZSIsICJyYnJhY2UiLCAibWF0Y2giLCAiaWR4IiwgImFscGhhIiwgInJlcGxhY2VtZW50IiwgInJlcGxhY2VTaG9ydGN1dHMiLCAicmVwbGFjZUhhc2giLCAicyIsICJmaW5kQ2F0c1JFIiwgInJlcGxhY2VCeUJsYW5rcyIsICJmaW5kX2NhdGVnb3J5IiwgIndpa2l0ZXh0IiwgImNhdGVnb3J5IiwgIm9uY2UiLCAiY2F0X3JlZ2V4IiwgIm5vd2lraVJlZ2V4IiwgIl90ZW1wbGF0ZU9iamVjdDUiLCAiY29waWVkdGV4dCIsICJjdXJyX21hdGNoIiwgImludGVybGFuZ3VhZ2VSRSIsICJjaGFuZ2VfY2F0ZWdvcnkiLCAidG9SZW1vdmUiLCAidG9BZGQiLCAiaXNfaGlkZGVuIiwgImZpbmRfaW5zZXJ0aW9ucG9pbnQiLCAiX3dpa2l0ZXh0IiwgIl90ZW1wbGF0ZU9iamVjdDYiLCAiaW5kZXgiLCAibGFzdEluZGV4IiwgIm9uQ2F0IiwgIm5hbWVTcGFjZSIsICJrZXlDaGFuZ2UiLCAibWF0Y2hlcyIsICJjYXRfcG9pbnQiLCAiYmVmb3JlIiwgIk1hdGgiLCAibWF4IiwgImFmdGVyIiwgInNlYXJjaCIsICJqIiwgInBvaW50IiwgIm5ld2NhdHN0cmluZyIsICJzdWZmaXgiLCAidHh0IiwgImV2dEtleXMiLCAiY3RybEtleSIsICJtZXRhS2V5IiwgInNoaWZ0S2V5IiwgImV2dEtpbGwiLCAic3RvcFByb3BhZ2F0aW9uIiwgImNhbmNlbEJ1YmJsZSIsICJjYXRMaW5lIiwgIm9uVXBsb2FkIiwgImVkaXRvcnMiLCAiY29tbWl0QnV0dG9uIiwgImNvbW1pdEZvcm0iLCAibXVsdGlTcGFuIiwgInBhZ2VUZXh0IiwgInBhZ2VUaW1lIiwgInBhZ2VXYXRjaGVkIiwgIndhdGNoQ3JlYXRlIiwgIndhdGNoRWRpdCIsICJtaW5vckVkaXRzIiwgImVkaXRUb2tlbiIsICJpc19ydGwiLCAic2VydmVyVGltZSIsICJsYXN0UmV2SWQiLCAicGFnZVRleHRSZXZJZCIsICJjb25mbGljdGluZ1VzZXIiLCAibmV3RE9NIiwgIlVOQ0hBTkdFRCIsICJPUEVOIiwgIkNIQU5HRV9QRU5ESU5HIiwgIkNIQU5HRUQiLCAiREVMRVRFRCIsICJzZXRQYWdlIiwgInN0YXJ0VGltZSIsICJxdWVyeSIsICJwYWdlcyIsICJwYWdlIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImNvbnRlbnQiLCAidGltZXN0YW1wIiwgInJldmlkIiwgImxhc3RyZXZpZCIsICJzdGFydHRpbWVzdGFtcCIsICJ3YXRjaGVkIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAibGFuZ2xpbmtzIiwgImxhbmciLCAiX3RlbXBsYXRlT2JqZWN0NyIsICJnZW5lcmFsIiwgInRpbWUiLCAiY2FzZSIsICJ1c2VyaW5mbyIsICJ3YXRjaGNyZWF0aW9ucyIsICJ3YXRjaGRlZmF1bHQiLCAibWlub3JkZWZhdWx0IiwgInNhdmVJblByb2dyZXNzIiwgImluaXRpYXRlRWRpdCIsICJmYWlsdXJlIiwgIm9sZEJ1dHRvblN0YXRlIiwgImRpc2FibGVkIiwgImZhaWwiLCAiYXBwbHkiLCAiZm9ybWF0dmVyc2lvbiIsICJyYXdjb250aW51ZSIsICJ0aXRsZXMiLCAid2dQYWdlTmFtZSIsICJwcm9wIiwgImlucHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJydmxpbWl0IiwgInJ2ZGlyIiwgInJ2c3RhcnRpZCIsICJ3Z0N1clJldmlzaW9uSWQiLCAibGxsaW1pdCIsICJtZXRhIiwgInVpcHJvcCIsICJkb25lIiwgInN0YXR1cyIsICJzdGF0dXNUZXh0IiwgIm11bHRpQ2hhbmdlTXNnIiwgImNvdW50IiwgImN1cnJlbnRUaW1lc3RhbXAiLCAibm93IiwgIkRhdGUiLCAidHMiLCAiZ2V0VVRDRnVsbFllYXIiLCAidHdvIiwgImdldFVUQ01vbnRoIiwgImdldFVUQ0RhdGUiLCAiZ2V0VVRDSG91cnMiLCAiZ2V0VVRDTWludXRlcyIsICJnZXRVVENTZWNvbmRzIiwgInBlcmZvcm1DaGFuZ2VzIiwgInNpbmdsZUVkaXRvciIsICJzZWxmRWRpdENvbmZsaWN0IiwgIndnVXNlck5hbWUiLCAibm9Db21taXQiLCAid3BFZGl0VG9rZW4iLCAid3BEaWZmIiwgIndwU2F2ZSIsICJjaGFuZ2VkIiwgImFkZGVkIiwgImRlbGV0ZWQiLCAidG9FZGl0IiwgImVkaXQiLCAiY2hhbmdlcyIsICJvcmlnaW5hbENhdGVnb3J5IiwgImN1cnJlbnRDYXRlZ29yeSIsICJjdXJyZW50S2V5IiwgImN1cnJlbnRIaWRkZW4iLCAiZnJvbSIsICJ0byIsICJ3cE1pbm9yZWRpdCIsICJ3cFdhdGNodGhpcyIsICJ3cENoYW5nZVRhZ3MiLCAid3BBdXRvU3VtbWFyeSIsICJqb2luIiwgInNob3J0U3VtbWFyeSIsICJhcnJvdyIsICJ3cFN0YXJ0dGltZSIsICJ3cEVkaXR0aW1lIiwgIm9sZGlkIiwgImhjQ29tbWl0IiwgImNsaWNrIiwgInJlc29sdmVPbmUiLCAidG9SZXNvbHZlIiwgImNhdHMiLCAiY2F0ZWdvcmllcyIsICJpc19kYWIiLCAiaXNfcmVkaXIiLCAicmVkaXJlY3QiLCAiY2F0ZWdvcnlpbmZvIiwgImhpZGRlbiIsICJpc19taXNzaW5nIiwgIm1pc3NpbmciLCAiZGFiSW5wdXRDbGVhbmVkIiwgImlucHV0RXhpc3RzIiwgInNyYyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAibiIsICJjYXRfIiwgImNhdCIsICJlcnIiLCAiZiIsICJkYWIiLCAicmVzb2x2ZVJlZGlyZWN0cyIsICJwIiwgInJlc29sdmVNdWx0aSIsICJjYWxsYmFjayIsICJkYWJJbnB1dCIsICJsYXN0SW5wdXQiLCAicGxuYW1lc3BhY2UiLCAicGxsaW1pdCIsICJjbGxpbWl0IiwgImpzb24iLCAicmVxIiwgIm1ha2VBY3RpdmUiLCAid2hpY2giLCAiaXNfYWN0aXZlIiwgIl9pIiwgIl9lZGl0b3JzIiwgImVkaXRvciIsICJpbmFjdGl2YXRlIiwgInNob3dEYWIiLCAiZXhwZWN0ZWRJbnB1dCIsICJsYXN0UmVhbElucHV0IiwgImFjdHVhbFZhbHVlIiwgInNob3dzTGlzdCIsICJzcGxpdCIsICJsYXN0U2VsZWN0aW9uIiwgInN0YXJ0IiwgImVuZCIsICJkaXNwbGF5TGlzdCIsICJzZXRUaW1lb3V0IiwgInNldFNlbGVjdGlvbiIsICJzaG93U3VnZ2VzdGlvbnMiLCAibXVsdGlTdWJtaXQiLCAiX2kyIiwgIl9lZGl0b3JzMiIsICJtc2ciLCAicmVzb2x2ZWQiLCAiZmlyc3REYWIiLCAiZG9udENoYW5nZSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJlbGVtZW50IiwgImFjY2VwdENoZWNrIiwgImNvbW1pdCIsICJzZXRNdWx0aUlucHV0IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAicGFyZW50Tm9kZSIsICJyZXBsYWNlQ2hpbGQiLCAiY2hlY2tNdWx0aUlucHV0IiwgImhhc0NoYW5nZXMiLCAiX2kzIiwgIl9lZGl0b3JzMyIsICJzdWdnZXN0aW9uRW5naW5lcyIsICJvcGVuc2VhcmNoIiwgImhhbmRsZXIiLCAicXVlcnlSZXN1bHQiLCAicXVlcnlLZXkiLCAiZXhpc3RzIiwgInNwbGljZSIsICJub3JtYWxpemVkIiwgImludGVybmFsc2VhcmNoIiwgImFsbHBhZ2VzIiwgIl90aXRsZSIsICJzdWJjYXRlZ29yaWVzIiwgImNhdGVnb3J5bWVtYmVycyIsICJwYXJlbnRjYXRlZ29yaWVzIiwgInN1Z2dlc3Rpb25Db25maWdzIiwgInNlYXJjaGluZGV4IiwgImVuZ2luZXMiLCAic2hvdyIsICJ0ZW1wIiwgIm5vQ29tcGxldGlvbiIsICJwYWdlbGlzdCIsICJjb21iaW5lZCIsICJzdWJjYXQiLCAicGFyZW50Y2F0IiwgIkJTIiwgIlRBQiIsICJSRVQiLCAiRVNDIiwgIlNQQUNFIiwgIlBHVVAiLCAiUEdET1dOIiwgIlVQIiwgIkRPV04iLCAiREVMIiwgIklNRSIsICJDYXRlZ29yeUVkaXRvciIsICJjb25zdHJ1Y3RvciIsICJpbml0aWFsaXplIiwgImlzQ29tcG9zaXRpb25TdGFydCIsICJsaW5lIiwgInNwYW4iLCAiZGlyIiwgImlzQWRkQ2F0ZWdvcnkiLCAiY2F0TGluayIsICJmaXJzdENoaWxkIiwgIm9yaWdpbmFsS2V5IiwgIm9yaWdpbmFsRXhpc3RzIiwgIm1ha2VMaW5rU3BhbiIsICJ1cERvd25MaW5rcyIsICJzdHlsZSIsICJsaW5rU3BhbiIsICJpbnNlcnRCZWZvcmUiLCAibmV4dFNpYmxpbmciLCAibGluayIsICJiaW5kIiwgIm5vcm1hbExpbmtzIiwgInVuZGVsTGluayIsICJvcmlnaW5hbEhpZGRlbiIsICJlbmdpbmUiLCAiY3VycmVudEV4aXN0cyIsICJsYXN0U2F2ZWRTdGF0ZSIsICJsYXN0U2F2ZWRDYXRlZ29yeSIsICJsYXN0U2F2ZWRLZXkiLCAibGFzdFNhdmVkRXhpc3RzIiwgImxhc3RTYXZlZEhpZGRlbiIsICJpbnZva2VTdWdnZXN0aW9ucyIsICJkb250X2F1dG9jb21wbGV0ZSIsICJ0ZXh0Y2hhbmdlIiwgIm1ha2VGb3JtIiwgImZvcm0iLCAibWV0aG9kIiwgImFjY2VwdCIsICJzaXplIiwgImV2ZW50IiwgImltZSIsICJsYXN0S2V5IiwgInVzZXNDb21wb3NpdGlvbiIsICJrZXlDb3VudCIsICJwcm9jZXNzS2V5IiwgInJlc2V0S2V5U2VsZWN0aW9uIiwgImNhbmNlbCIsICJvbmJlZm9yZWRlYWN0aXZhdGUiLCAiY3JlYXRlVGV4dFJhbmdlIiwgInNhdmVWaWV3IiwgImxpc3QiLCAiaGlnaGxpZ2h0U3VnZ2VzdGlvbiIsICJmb2N1cyIsICJlbmdpbmVTZWxlY3RvciIsICJvcHQiLCAic2VsZWN0ZWQiLCAic2VsZWN0ZWRJbmRleCIsICJidXR0b25fbGFiZWwiLCAiX2lkIiwgImRlZmF1bHRUZXh0IiwgImxhYmVsIiwgIk9LIiwgIm9rIiwgImNhbmNlbEJ1dHRvbiIsICJwb3NpdGlvbiIsICJ3aGl0ZVNwYWNlIiwgIl9pNCIsICJfZWRpdG9yczQiLCAib3JpZ2luYWxTdGF0ZSIsICJyZWFkT25seSIsICJyZW1vdmVFZGl0b3IiLCAiYmFja2dyb3VuZENvbG9yIiwgIm5leHQiLCAicm9sbGJhY2siLCAidW5kb0xpbmsiLCAiZG9udENoZWNrIiwgInNhbml0aXplSW5wdXQiLCAib3JpZ2luYWwiLCAiX2k1IiwgIl9lZGl0b3JzNSIsICJjc3NUZXh0IiwgInRleHREZWNvcmF0aW9uIiwgInNlbGVjdEVuZ2luZSIsICJlbmdpbmVOYW1lIiwgIm1ha2VDYWxsIiwgImNhbGxiYWNrT2JqIiwgImNsZWFuS2V5IiwgImNiIiwgInoiLCAiY2FsbHNNYWRlIiwgIm5vZkNhbGxzIiwgImFsbFRpdGxlcyIsICJkb250Q2FjaGUiLCAiY2FuY2VsbGVkIiwgImdldEpTT04iLCAiZ2VuZXJhdGVBcnJheSIsICJmb3JjZSIsICJwaXBlIiwgIm1ha2VDYWxscyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJlbmdpbmVfIiwgIndnU2NyaXB0UGF0aCIsICJkb250QXV0b2NvbXBsZXRlIiwgImxhc3RRdWVyeSIsICJ2Tm9ybWFsaXplZCIsICJrbm93blRvRXhpc3QiLCAidkxvdyIsICJzb3J0IiwgImEiLCAiYiIsICJwcmVmaXhNYXRjaEEiLCAicHJlZml4TWF0Y2hCIiwgImFMb3ciLCAiYkxvdyIsICJmaXJzdFRpdGxlIiwgImNvbXBsZXRlZCIsICJhdXRvQ29tcGxldGUiLCAiZXhpc3RpbmciLCAibm9mSXRlbXMiLCAibWluIiwgImFsaWduIiwgInpJbmRleCIsICJhbmNob3IiLCAibGlzdGgiLCAidG9wIiwgIm9mZnNldFRvcCIsICJvZmZzZXRIZWlnaHQiLCAibWF4TGlzdEhlaWdodCIsICJ2aWV3cG9ydCIsICJ3aGF0IiwgImV2YWx1YXRlIiwgIm9wZXJhIiwgImRvY3VtZW50RWxlbWVudCIsICJzY3JvbGxfb2Zmc2V0IiwgIm5vZGUiLCAiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwgImJveCIsICJ4IiwgInJvdW5kIiwgImxlZnQiLCAieSIsICJ0IiwgImwiLCAib2Zmc2V0TGVmdCIsICJvZmZzZXRQYXJlbnQiLCAidGV4dFBvcyIsICJubCIsICJudCIsICJvZmZzZXQiLCAidGV4dEJveFdpZHRoIiwgIm9mZnNldFdpZHRoIiwgImNsaWVudFdpZHRoIiwgInNjcm9sbCIsICJ2aWV3X3ciLCAidyIsICJsX3BvcyIsICJyaWdodCIsICJyZWxhdGl2ZV9vZmZzZXQiLCAiYWN0VmFsIiwgIm5vcm1hbGl6ZWRBY3RWYWwiLCAiZG9udE1vZGlmeSIsICJjYW5TZWxlY3QiLCAic2V0U2VsZWN0aW9uUmFuZ2UiLCAic2VsZWN0aW9uU3RhcnQiLCAic2VsZWN0aW9uRW5kIiwgIm5ld19zZWxlY3Rpb24iLCAibW92ZSIsICJtb3ZlRW5kIiwgInNlbGVjdCIsICJnZXRTZWxlY3Rpb24iLCAic2VsZWN0aW9uIiwgImNyZWF0ZVJhbmdlIiwgInJuZyIsICJkdXBsaWNhdGUiLCAidGV4dFJuZyIsICJzZXRFbmRQb2ludCIsICJjdXJyIiwgInRndCIsICJob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0IiwgIkhvdENhdERvbnRBZGRUb1dhdGNobGlzdCIsICJob3RjYXRfbm9fYXV0b2NvbW1pdCIsICJIb3RDYXROb0F1dG9Db21taXQiLCAiaG90Y2F0X2RlbF9uZWVkc19kaWZmIiwgIkhvdENhdERlbE5lZWRzRGlmZiIsICJob3RjYXRfc3VnZ2VzdGlvbl9kZWxheSIsICJIb3RDYXRTdWdnZXN0aW9uRGVsYXkiLCAiaG90Y2F0X2VkaXRib3hfd2lkdGgiLCAiSG90Q2F0RWRpdEJveFdpZHRoIiwgImhvdGNhdF9zdWdnZXN0aW9ucyIsICJIb3RDYXRTdWdnZXN0aW9ucyIsICJob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQiLCAiSG90Q2F0Rml4ZWRTdWdnZXN0aW9ucyIsICJob3RjYXRfc2luZ2xlX2NoYW5nZXNfYXJlX21pbm9yIiwgIkhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlcyIsICJob3RjYXRfY2hhbmdlZF9iYWNrZ3JvdW5kIiwgIkhvdENhdENoYW5nZWRCYWNrZ3JvdW5kIiwgImhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3MiLCAiSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rcyIsICJob3RjYXRfbGlzdF9zaXplIiwgIkhvdENhdExpc3RTaXplIiwgIkhvdENhdENoYW5nZVRhZyIsICJlRm9ybSIsICJlZGl0Zm9ybSIsICJjYXRSZWdFeHAiLCAib2xkVHh0IiwgImlzTWlub3JDaGFuZ2UiLCAibmV3VHh0IiwgIm9sZExpbmVzIiwgIm5ld0xpbmVzIiwgImNBcnIiLCAiZXhjZXB0IiwgImFBcnIiLCAiYkFyciIsICJsQXJyIiwgInNBcnIiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiaXRlbSIsICJpbmQiLCAiZmlsdGVyIiwgImMiLCAic3VtIiwgInN1bUEiLCAiJGN0IiwgInJlbW92ZUNoYW5nZVRhZyIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiaXNOYU4iLCAiX2k2IiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgInN1Z2dlc3Rpb25Db25maWciLCAiZGVmYXVsdFZpZXciLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJnZXRQcm9wZXJ0eVZhbHVlIiwgImN1cnJlbnRTdHlsZSIsICJkaXJlY3Rpb24iLCAiY2FuX2VkaXQiLCAiY2xvc2VGb3JtIiwgIl9pNyIsICJfZWRpdG9yczYiLCAic2V0dXBfdXBsb2FkIiwgImlwIiwgInJldXBsb2FkIiwgImRlc3RGaWxlIiwgImxhYmVsQ2VsbCIsICJsaW5lQ2VsbCIsICJ0ZXh0QWxpZ24iLCAibWFyZ2luIiwgImJvcmRlciIsICJ2ZXJ0aWNhbEFsaWduIiwgIm5ld1JvdyIsICJpbnNlcnRSb3ciLCAib2xkU3VibWl0IiwgImRvX3N1Ym1pdCIsICJldmFsIiwgIkZ1bmN0aW9uIiwgImViIiwgImFkZGVkT25lIiwgIl9pOCIsICJfZWRpdG9yczciLCAibmV3X2NhdCIsICJfdGVtcGxhdGVPYmplY3Q4IiwgIl9jbGVhbmVkVGV4dCIsICJyZWdleCIsICJvbnN1Ym1pdCIsICJjbGVhbmVkVGV4dCIsICJpc09uUGFnZSIsICJub2RlVHlwZSIsICJOb2RlIiwgIkVMRU1FTlRfTk9ERSIsICJjYXRUaXRsZSIsICJnZXRBdHRyaWJ1dGUiLCAiX3RlbXBsYXRlT2JqZWN0OSIsICJpbml0aWFsaXplZCIsICJzZXR1cFRpbWVvdXQiLCAiZmluZEJ5Q2xhc3MiLCAic2NvcGUiLCAic2V0dXAiLCAiYWRkaXRpb25hbFdvcmsiLCAiY2xlYXJUaW1lb3V0IiwgImhpZGRlbkNhdHMiLCAiZm9vdGVyIiwgImNvbnRhaW5lciIsICJjcmVhdGVFZGl0b3JzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiY29weUNhdHMiLCAiQXJyYXkiLCAiYXQiLCAibGFzdFNwYW4iLCAiZW5hYmxlTXVsdGkiLCAiaW5uZXJIVE1MIiwgImN1cnNvciIsICJob29rIiwgImZpcmUiLCAiY3JlYXRlQ29tbWl0Rm9ybSIsICJmb3JtQ29udGFpbmVyIiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJnZXRQYWdlIiwgInNldFN0YXRlIiwgIm5ld1NwYW5zIiwgImdldFN0YXRlIiwgIl9pOSIsICJfZWRpdG9yczgiLCAicmVhbGx5X3J1biIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJVcGxvYWRGb3JtIiwgInByZXZpb3VzX2hvdGNhdF9zdGF0ZSIsICJ3Z0lzQXJ0aWNsZSIsICJydW4iLCAic3RhcnRlZCIsICJob3RjYXRfZ2V0X3N0YXRlIiwgImhvdGNhdF9zZXRfc3RhdGUiLCAiaG90Y2F0X2Nsb3NlX2Zvcm0iLCAicnVuV2hlblJlYWR5Il0KfQo=
