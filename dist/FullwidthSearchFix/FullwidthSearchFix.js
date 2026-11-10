/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-fullwidth-search-fix.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/FullwidthSearchFix}
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

// dist/FullwidthSearchFix/FullwidthSearchFix.js
//! src/FullwidthSearchFix/modules/redirect.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/FullwidthSearchFix/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Redirecting to": (0, import_ext_gadget.localize)({
      en: "Redirecting to $1",
      ja: "「$1」にリダイレクト中",
      "zh-hans": "正在重定向至“$1”",
      "zh-hant": "正在重新導向至“$1”"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/FullwidthSearchFix/modules/redirect.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var redirect = (nameSpace, pageName) => {
  (0, import_ext_gadget3.toastify)({
    text: getMessage("Redirecting to").replace("$1", `${nameSpace}:${pageName}`),
    duration: -1
  }, "info");
  const {
    wgScript
  } = mw.config.get();
  const href = new import_ext_gadget2.MwUri(wgScript, location.origin).extend({
    search: `${nameSpace}:${pageName}`
  }).toString();
  location.href = href;
};
//! src/FullwidthSearchFix/FullwidthSearchFix.ts
(function fullwidthSearchFix() {
  const URL_FULLTEXT = mw.util.getParamValue("fulltext");
  const URL_SEARCH = mw.util.getParamValue("search");
  if (URL_FULLTEXT || !URL_SEARCH) {
    return;
  }
  const colonIndex = URL_SEARCH.indexOf("：");
  if (colonIndex === -1) {
    return;
  }
  const nameSpace = URL_SEARCH.slice(0, Math.max(0, colonIndex));
  const {
    wgNamespaceIds
  } = mw.config.get();
  if (!wgNamespaceIds[nameSpace.toLowerCase()]) {
    return;
  }
  const pageName = URL_SEARCH.slice(Math.max(0, colonIndex + 1));
  redirect(nameSpace, pageName);
})();

})();

/* </nowiki> */

