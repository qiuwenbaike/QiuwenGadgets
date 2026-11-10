/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/DidYouMean}
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

// dist/DidYouMean/DidYouMean.js
//! src/DidYouMean/options.json
var targetSelector = "#noarticletext-dym-link a:not(.mw-selflink)";
//! src/DidYouMean/DidYouMean.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/DidYouMean/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Redirecting: (0, import_ext_gadget.localize)({
      en: "Redirecting...",
      ja: "リダイレクト中...",
      "zh-hans": "重定向中……",
      "zh-hant": "重新導向中……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/DidYouMean/DidYouMean.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
void (0, import_ext_gadget2.getBody)().then(function didYouMean($body) {
  const $element = $body.find(targetSelector);
  if (!$element.length) {
    return;
  }
  const href = $element.attr("href") ?? "";
  if (!href) {
    return;
  }
  const {
    wgNamespaceNumber,
    wgRelevantUserName,
    wgPageName
  } = mw.config.get();
  if (wgNamespaceNumber === 2 && wgRelevantUserName) {
    const relevantUserPageName = new mw.Title(wgRelevantUserName, 2).toText();
    const pageName = new mw.Title(wgPageName).toText();
    if (relevantUserPageName === pageName) {
      return;
    }
  }
  (0, import_ext_gadget3.toastify)({
    text: getMessage("Redirecting"),
    duration: -1
  }, "info");
  location.href = href;
});

})();

/* </nowiki> */

