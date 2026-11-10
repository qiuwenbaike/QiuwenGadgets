/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-rollback-summary.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/RollbackSummary}
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

// dist/RollbackSummary/RollbackSummary.js
//! src/RollbackSummary/modules/updateLinks.ts
var import_ext_gadget2 = require("ext.gadget.FilterAlteredClicks");
//! src/RollbackSummary/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Prompt: (0, import_ext_gadget.localize)({
      en: "Please enter a custom rollback summary (leave blank to use the system default summary)",
      "zh-hans": "请输入自定义回退摘要（留空则使用系统默认摘要）",
      "zh-hant": "請輸入自定義回退摘要（留空則使用系統預設摘要）"
    }),
    "Rollback edits by": (0, import_ext_gadget.localize)({
      en: "Revert edit(s) by [[Special:Contribs/$1|$1]] ([[User talk:$1|talk]]): ",
      "zh-hans": "回退[[Special:Contribs/$1|$1]]（[[User talk:$1|对话]]）的编辑：",
      "zh-hant": "回退[[Special:Contribs/$1|$1]]（[[User talk:$1|對話]]）的編輯："
    }),
    "Rollback edits by a hidden user": (0, import_ext_gadget.localize)({
      en: "Revert edit(s) by a hidden user: ",
      "zh-hans": "回退已隐藏用户的编辑：",
      "zh-hant": "回退已隱藏用戶的編輯：",
      "zh-tw": "回退已隱藏使用者的編輯："
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/RollbackSummary/modules/updateLinks.ts
var updateLinks = ($content) => {
  const $body = $content.parents("body");
  const $mwRollbackLinkA = $body.find(".mw-rollback-link a");
  $mwRollbackLinkA.off("click");
  $mwRollbackLinkA.on("click", (0, import_ext_gadget2.filterAlteredClicks)((event) => {
    event.preventDefault();
    let {
      href
    } = event.currentTarget;
    let summary = prompt(getMessage("Prompt"));
    if (summary === null) {
    } else if (summary === "") {
      location.assign(href);
    } else {
      const username = mw.util.getParamValue("from", href);
      if (username) {
        summary = getMessage("Rollback edits by").replaceAll("$1", username) + summary;
      } else {
        summary = getMessage("Rollback edits by a hidden user") + summary;
      }
      href += `&summary=${encodeURIComponent(summary)}`;
      location.assign(href);
    }
  }));
  $mwRollbackLinkA.css("color", "#099");
};
//! src/RollbackSummary/RollbackSummary.ts
mw.hook("wikipage.content").add(function rollbackSummary($content) {
  updateLinks($content);
});

})();

/* </nowiki> */

