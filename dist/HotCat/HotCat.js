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
    return $("<span>").attr("class", `hotcat-check-icon ${iconClass}`).text(" ");
  };
  const createNotifyArea = (textNode, icon, state) => {
    return $("<div>").addClass("hotcat-check-notice").append($("<div>").attr("class", `hotcat-check-notice-content ${state}`).css({
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
      self.wpSummary.value = `Removing [[Template:Check categories|{{Check categories}}]] ${self.wpSummary.value}`;
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
        title: `User:${mw.config.get("wgUserName")}/common.js`,
        summary: `${selfName}Saving HotCat configuration.`,
        appendtext: $el.data("addText")
      };
      const editDone = (editStat) => {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          void mw.notify(`Unable to save to your common.js using the API
${editStat.error.code}
${editStat.error.info}`, {
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
        summary: `${selfName}Categories are checked and OK. You can help [[Category:Media needing category review|reviewing]]!`,
        nocreate: true
      };
      const editDone = (editStat) => {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          void mw.notify(`Unable to remove "Check categories" with the API
${editStat.error.code}
${editStat.error.info}`, {
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
  key = `hotcat-${key}`;
  return mw.message(key, ...args).plain();
};
//! src/HotCat/modules/categoryText.ts
var createCategoryTextTools = (HC, wikiTextBlank, wikiTextBlankRE, wikiTextBlankOrBidi, escapeRE, getInterlanguageRE) => {
  const findCatsRE = new RegExp(`\\[\\[${wikiTextBlankOrBidi}(?:${HC.category_regexp})${wikiTextBlankOrBidi}:[^\\]]+\\]\\]`, "g");
  const replaceByBlanks = (match) => {
    return match.replace(/(\s|\S)/g, " ");
  };
  const find_category = (wikitext, category, once) => {
    let cat_regex;
    if (HC.template_categories[category]) {
      cat_regex = new RegExp(`\\{\\{${wikiTextBlankOrBidi}(${HC.template_regexp}(?=${wikiTextBlankOrBidi}:))?${wikiTextBlankOrBidi}(?:${HC.template_categories[category]})${wikiTextBlankOrBidi}(\\|.*?)?\\}\\}`, "g");
    } else {
      const cat_name = escapeRE(category);
      const initial = cat_name.slice(0, 1);
      cat_regex = new RegExp(`\\[\\[${wikiTextBlankOrBidi}(${HC.category_regexp})${wikiTextBlankOrBidi}:${wikiTextBlankOrBidi}${initial === "\\" || !HC.capitalizePageNames ? initial : `[${initial.toUpperCase()}${initial.toLowerCase()}]`}${cat_name.slice(1).replace(wikiTextBlankRE, wikiTextBlank)}${wikiTextBlankOrBidi}(\\|.*?)?\\]\\]`, "g");
    }
    if (once) {
      return cat_regex.exec(wikitext);
    }
    const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw`(\s|\S)*?</no`, "wiki", ">"), "g");
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
      const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw`(\s|\S)*?</no`, "wiki", ">"), "g");
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
    key && (key = `|${key}`);
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
        key = firstMatch[2] ?? null;
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
      const newcatstring = `[[${nameSpace}:${toAdd}${key || ""}]]`;
      if (cat_point >= 0) {
        const suffix = wikitext.slice(Math.max(0, cat_point));
        wikitext = wikitext.slice(0, Math.max(0, cat_point)) + (cat_point > 0 ? "\n" : "") + newcatstring + (onCat ? "" : "\n");
        wikitext += suffix.length > 0 && suffix.slice(0, 1) !== "\n" ? `
${suffix}` : suffix;
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
var existsNo = `data:image/svg+xml,${encodeURIComponent(P_no_default)}`;
var existsYes = `data:image/svg+xml,${encodeURIComponent(P_yes_default)}`;
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
  const wikiTextBlank = String.raw`[\t _\xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]+`;
  const wikiTextBlankRE = new RegExp(wikiTextBlank, "g");
  const wikiTextBlankOrBidi = String.raw`[\t _\xA0\u1680\u180E\u2000-\u200B\u200E\u200F\u2028-\u202F\u205F\u3000]*`;
  const autoLocalize = (namespaceNumber, fallback) => {
    const createRegexpStr = (name) => {
      if (!name || name.length === 0) {
        return "";
      }
      let regex_name = "";
      for (let i = 0; i < name.length; i++) {
        const initial = name.charAt(i);
        const ll = initial.toLowerCase();
        const ul = initial.toUpperCase();
        regex_name += ll === ul ? initial : `[${ll}${ul}]`;
      }
      return regex_name.replace(/([$()*+.?\\^])/g, String.raw`\$1`).replace(wikiTextBlankRE, wikiTextBlank);
    };
    fallback = fallback.toLowerCase();
    const canonical = (conf.wgFormattedNamespaces[String(namespaceNumber)] ?? "").toLowerCase();
    let regexp = createRegexpStr(canonical);
    if (fallback && canonical !== fallback) {
      regexp += `|${createRegexpStr(fallback)}`;
    }
    for (const cat_name in conf.wgNamespaceIds) {
      if (typeof cat_name === "string" && cat_name.toLowerCase() !== canonical && cat_name.toLowerCase() !== fallback && conf.wgNamespaceIds[cat_name] === namespaceNumber) {
        regexp += `|${createRegexpStr(cat_name)}`;
      }
    }
    return regexp;
  };
  HC.category_canonical = conf.wgFormattedNamespaces["14"] ?? "";
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
    const re = new RegExp(`[&?]${name}=([^&#]*)`);
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
    const script = `${conf.wgScript}?`;
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
    return ` ${className} `.includes(` ${name} `);
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
    return str.replace(/([$()*+.?[\\\]^])/g, String.raw`\$1`);
  };
  const substituteFactory = (options) => {
    options || (options = {});
    const lead = options.indicator || "$";
    const indicator = escapeRE(lead);
    const lbrace = escapeRE(options.lbrace || "{");
    const rbrace = escapeRE(options.rbrace || "}");
    const re = new RegExp(
      // $$, $0/$1, ${key}, and $key
      `(?:${indicator}(${indicator}))|(?:${indicator}(\\d+))|(?:${indicator}(?:${lbrace}([^${lbrace}${rbrace}]+)${rbrace}))|(?:${indicator}(?!(?:[${indicator}${lbrace}]|\\d))(\\S+?)\\b)`,
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
      const s = replaceHash(str, map ?? void 0);
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
      uri: `${mw.config.get("wgScriptPath")}/api.php?format=json&action=opensearch&namespace=14&limit=30&search=Category:$1`,
      // $1 = search term
      // Function to convert result of uri into an array of category names
      handler: (queryResult, queryKey) => {
        const result = queryResult;
        if (result && result.length >= 2) {
          const key = String(result[0]).slice(Math.max(0, String(result[0]).indexOf(":") + 1));
          const titles = result[1];
          let exists = false;
          catPrefix || (catPrefix = new RegExp(`^(${HC.category_regexp}):`));
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
      uri: `${mw.config.get("wgScriptPath")}/api.php?format=json&action=query&list=allpages&apnamespace=14&aplimit=30&apfrom=$1&apprefix=$1`,
      handler: (queryResult) => {
        var _queryResult$query;
        const allpages = queryResult === null || queryResult === void 0 || (_queryResult$query = queryResult.query) === null || _queryResult$query === void 0 ? void 0 : _queryResult$query.allpages;
        return allpages ? toCategoryTitles(allpages) : null;
      }
    },
    exists: {
      uri: `${mw.config.get("wgScriptPath")}/api.php?format=json&action=query&prop=info&titles=Category:$1`,
      handler: (queryResult, queryKey) => {
        const {
          pages
        } = (queryResult === null || queryResult === void 0 ? void 0 : queryResult.query) ?? {};
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
      uri: `${mw.config.get("wgScriptPath")}/api.php?format=json&action=query&list=categorymembers&cmtype=subcat&cmlimit=max&cmtitle=Category:$1`,
      handler: (queryResult) => {
        var _queryResult$query2;
        const categorymembers = queryResult === null || queryResult === void 0 || (_queryResult$query2 = queryResult.query) === null || _queryResult$query2 === void 0 ? void 0 : _queryResult$query2.categorymembers;
        return categorymembers ? toCategoryTitles(categorymembers) : null;
      }
    },
    parentcategories: {
      uri: `${mw.config.get("wgScriptPath")}/api.php?format=json&action=query&prop=categories&titles=Category:$1&cllimit=max`,
      handler: (queryResult) => {
        const {
          pages
        } = (queryResult === null || queryResult === void 0 ? void 0 : queryResult.query) ?? {};
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
    } = event ?? {};
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
              conflictingUser = conflictingRevision.user ?? null;
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
            for (const langlink of page.langlinks) {
              re += (re.length > 0 ? "|" : "") + langlink.lang.replace(/([$()*+.?\\^])/g, String.raw`\$1`);
            }
            if (re.length > 0) {
              interlanguageRE = new RegExp(`((^|\\n\\r?)(\\[\\[\\s*(${re})\\s*:[^\\]]+\\]\\]\\s*))+$`);
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
      } = data.query.userinfo ?? {};
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
        commitButton.disabled = oldButtonState ?? false;
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
      } = error ?? {};
      fail(`${status ?? ""} ${statusText ?? ""}`);
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
    ts += two(`0${now.getUTCMonth() + 1}`) + two(`0${now.getUTCDate()}`) + two(`00${now.getUTCHours()}`) + two(`00${now.getUTCMinutes()}`) + two(`00${now.getUTCSeconds()}`);
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
      result.text = `{{Catnav|auto=1}}

${result.text}`;
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
          summary[summary.length] = `−${getMessage("messages-short_catchange", deleted[i])}`;
        }
        if (deleted.length === 1) {
          shortSummary[shortSummary.length] = `−${getMessage("messages-short_catchange", deleted[0])}`;
        } else if (deleted.length > 0) {
          shortSummary[shortSummary.length] = `− ${multiChangeMsg(deleted.length)}`;
        }
        for (i = 0; i < added.length; i++) {
          summary[summary.length] = `+${getMessage("messages-short_catchange", added[i])}`;
        }
        if (added.length === 1) {
          shortSummary[shortSummary.length] = `+${getMessage("messages-short_catchange", added[0])}`;
        } else if (added.length > 0) {
          shortSummary[shortSummary.length] = `+ ${multiChangeMsg(added.length)}`;
        }
        const arrow = is_rtl ? "←" : "→";
        for (i = 0; i < changed.length; i++) {
          const change = changed[i];
          if (change.from === change.to) {
            summary[summary.length] = `±${getMessage("messages-short_catchange", change.from)}`;
          } else {
            summary[summary.length] = `±${getMessage("messages-short_catchange", change.from)}${arrow}${getMessage("messages-short_catchange", change.to)}`;
          }
        }
        if (changed.length === 1) {
          const change = changed[0];
          if (change.from === change.to) {
            shortSummary[shortSummary.length] = `±${getMessage("messages-short_catchange", change.from)}`;
          } else {
            shortSummary[shortSummary.length] = `±${getMessage("messages-short_catchange", change.from)}${arrow}${getMessage("messages-short_catchange", change.to)}`;
          }
        } else if (changed.length > 0) {
          shortSummary[shortSummary.length] = `± ${multiChangeMsg(changed.length)}`;
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
      for (const cat_ of cats) {
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
    }
    if (!is_redir && !is_dab) {
      return;
    }
    if (!links || links.length === 0) {
      return;
    }
    const titles = [];
    for (const link of links) {
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
        editor.text.value = titles[0] + (editor.currentKey === null ? "" : `|${editor.currentKey}`);
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
      titles[titles.length] = `Category:${v}`;
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
    for (const editor of editors) {
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
    for (const editor of editors) {
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
      for (const element of resolved) {
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
    for (const editor of editors) {
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
        for (const editor of editors) {
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
      this.text.value = this.currentCategory + (this.currentKey === null ? "" : `|${this.currentKey}`);
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
      this.engine = engine ?? "";
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
        this.catLink.href = wikiPagePath(`${HC.category_canonical}:${this.currentCategory}`);
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
      this.catLink.href = wikiPagePath(`${HC.category_canonical}:${this.currentCategory}`);
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
        for (const editor of editors) {
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
      const re = new RegExp(`^(${HC.category_regexp}):`);
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
      for (const engine_ of engines) {
        const engine = suggestionEngines[engine_];
        const url = conf.wgScriptPath + engine.uri.replace(/\$1/g, encodeURIComponent(cleanKey));
        this.makeCall(url, cb, engine, v, cleanKey);
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
      this.engineName = engineName ?? null;
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
      const key = v.length > 1 ? `|${v[1]}` : "";
      const categoryName = HC.capitalizePageNames ? capitalize(v[0]) : v[0];
      let vNormalized = categoryName;
      const knownToExist = titles && titles.exists;
      let i;
      if (titles) {
        if (titles.normalized && categoryName.indexOf(queryKey ?? "") === 0) {
          vNormalized = titles.normalized + categoryName.slice((queryKey ?? "").length);
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
        this.list.style.top = `${this.text.offsetTop}px`;
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
        const s = `client${what}`;
        return document.documentElement ? document.documentElement[s] : 0;
      };
      const scroll_offset = (what) => {
        const s = `scroll${what}`;
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
        this.engineSelector.style.width = `${textBoxWidth}px`;
        if (this.engineSelector.style.display === "none") {
          this.engineSelector.style[anchor] = "-10000px";
          this.engineSelector.style.top = "0";
          this.engineSelector.style.display = "";
          offset = this.engineSelector.offsetHeight;
          this.engineSelector.style.display = "none";
        } else {
          offset = this.engineSelector.offsetHeight;
        }
        this.engineSelector.style[anchor] = `${nl}px`;
      }
      if (textPos.y < maxListHeight + offset + 1) {
        nt = this.text.offsetHeight + offset + 1;
        if (this.engineName) {
          this.engineSelector.style.top = `${this.text.offsetHeight}px`;
        }
      } else {
        nt = -listh - offset - 1;
        if (this.engineName) {
          this.engineSelector.style.top = `${-(offset + 1)}px`;
        }
      }
      this.list.style.top = `${nt}px`;
      this.list.style.width = "";
      this.list.style[anchor] = `${nl}px`;
      if (this.engineName) {
        this.selectEngine(this.engineName);
        this.engineSelector.style.display = "";
      }
      this.list.style.display = "block";
      if (this.list.offsetWidth < textBoxWidth) {
        this.list.style.width = `${textBoxWidth}px`;
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
          this.list.style.width = `${w}px`;
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
          this.list.style[anchor] = `${nl + relative_offset}px`;
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
        from = this.text.selectionStart;
        to = this.text.selectionEnd ?? to;
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
        const key = v.length > 1 ? `|${v[1]}` : "";
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
        const key = v.length > 1 ? `|${v[1]}` : "";
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
      const catRegExp = new RegExp(`^\\[\\[(${HC.category_regexp}):`);
      let oldTxt = "";
      const isMinorChange = () => {
        const textbox = eForm === null || eForm === void 0 ? void 0 : eForm.wpTextbox1;
        if (!textbox) {
          return;
        }
        const newTxt = textbox.value;
        const oldLines = oldTxt.match(/^.*$/gm) ?? [];
        const newLines = newTxt.match(/^.*$/gm) ?? [];
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
          for (const item of lArr) {
            const ind = sArr.indexOf(item);
            if (ind === -1) {
              result[result.length] = item;
            } else {
              sArr.splice(ind, 1);
            }
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
          var _eForm$wpTextbox;
          sumA.value = sumA.value.replace(HC.changeTag, "d41d8cd98f00b204e9800998ecf8427e");
          const $ct = $("<input>").attr({
            type: "hidden",
            name: "wpChangeTags"
          }).val(HC.changeTag);
          $(eForm).append($ct);
          oldTxt = ((_eForm$wpTextbox = eForm.wpTextbox1) === null || _eForm$wpTextbox === void 0 ? void 0 : _eForm$wpTextbox.value) ?? "";
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
    for (const [key, suggestionConfig] of Object.entries(suggestionConfigs)) {
      try {
        if (key && getMessage(`engine_names-${key}`)) {
          suggestionConfig.name = getMessage(`engine_names-${key}`);
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
    for (const edit of editors) {
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
    onUpload = true;
    let ip = document.querySelector("#mw-htmlform-description") ?? document.querySelector("input[name=wpDestFile]");
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
    const form = document.querySelector("#upload") ?? document.querySelector("#mw-upload-form");
    if (form) {
      const newRow = ip.insertRow(-1);
      newRow.append(labelCell);
      newRow.append(lineCell);
      form.addEventListener("submit", () => {
        closeForm();
        const eb = document.querySelector("textarea[name=wpUploadDescription]") ?? document.querySelector("#wpDesc");
        if (!eb) {
          return true;
        }
        let addedOne = false;
        for (const editor of editors) {
          const t = editor.currentCategory;
          if (!t) {
            continue;
          }
          const key = editor.currentKey;
          const new_cat = `[[${HC.category_canonical}:${t}${key ? `|${key}` : ""}]]`;
          const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw`(\s|\S)*?</no`, "wiki", ">"), "g");
          let _cleanedText = eb.value;
          let previousCleanedText;
          do {
            previousCleanedText = _cleanedText;
            _cleanedText = _cleanedText.replace(/<!--/g, "").replace(/--!?>/g, "").replace(nowikiRegex, "");
          } while (_cleanedText !== previousCleanedText);
          if (!find_category(_cleanedText, t, true)) {
            eb.value += `
${new_cat}`;
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
      const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw`(\s|\S)*?</no`, "wiki", ">"), "g");
      cleanedText = pageText.replace(/<!--(\s|\S)*?-->/g, "").replace(nowikiRegex, "");
    }
    result.match = find_category(cleanedText, catTitle, true);
    return result;
  };
  let initialized = false;
  let setupTimeout = null;
  const findByClass = (scope, tag, className) => {
    const result = $(scope).find(`${tag}.${className}`);
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
      let container = (hiddenCats === null || hiddenCats === void 0 ? void 0 : hiddenCats.parentNode) ?? document.querySelector("#catlinks");
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
      for (const cat of copyCats) {
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
      multiSpan.innerHTML = `(<a>${HC.addmulti}</a>)`;
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
    formContainer.innerHTML = `<form id="hotcatCommitForm" method="post" enctype="multipart/form-data" action="${conf.wgScript}?title=${encodeURIComponent(conf.wgPageName)}&action=submit">
		<input type="hidden" name="wpTextbox1">
		<input type="hidden" name="model" value="${conf.wgPageContentModel}">
		<input type="hidden" name="format" value="text/x-wiki">
		<input type="hidden" name="wpSummary" value="">
		<input type="checkbox" name="wpMinoredit" title="wpMinoredit" value="1">
		<input type="checkbox" name="wpWatchthis" title="wpWatchthis" value="1">
		<input type="hidden" name="wpAutoSummary" value="d41d8cd98f00b204e9800998ecf8427e">
		<input type="hidden" name="wpEdittime">
		<input type="hidden" name="wpStarttime">
		<input type="hidden" name="wpDiff" value="wpDiff">
		<input type="hidden" name="oldid" value="0">
		<input type="submit" name="hcCommit" value="hcCommit">
		<input type="hidden" name="wpEditToken">
		<input type="hidden" name="wpUltimateParam" value="1">
		<input type="hidden" name="wpChangeTags">
		<input type="hidden" value="ℳ𝒲♥𝓊𝓃𝒾𝒸ℴ𝒹ℯ" name="wpUnicodeCheck">
		</form>`;
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
        link.href = wikiPagePath(`${HC.category_canonical}:${catName}`);
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
      for (const newSpan of newSpans) {
        new CategoryEditor(catLine, newSpan.element, newSpan.title, newSpan.key);
      }
    }
    return null;
  };
  const getState = () => {
    let result = null;
    for (const editor of editors) {
      let text = editor.currentCategory;
      const key = editor.currentKey;
      if (text && text.length > 0) {
        if (key !== null) {
          text += `|${key}`;
        }
        if (result === null) {
          result = text;
        } else {
          result += `
${text}`;
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

