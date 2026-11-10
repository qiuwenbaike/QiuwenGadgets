/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Mainpage_JS}
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

// dist/Mainpage_JS/Mainpage_JS.js
//! src/Mainpage_JS/modules/util/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Qiuwen Projects": (0, import_ext_gadget.localize)({
      en: "Qiuwen Projects",
      "zh-hans": "“求闻”系列项目",
      "zh-hant": "「求聞」系列項目"
    }),
    "List of Qiuwen Projects": (0, import_ext_gadget.localize)({
      en: "List of Qiuwen Projects",
      "zh-hans": "“求闻”系列项目列表",
      "zh-hant": "「求聞」系列項目列表"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Mainpage_JS/modules/addSisterProjectLinks.ts
var addSisterProjectLinks = () => {
  const url = mw.util.getUrl("Qiuwen:“求闻”系列项目");
  const text = getMessage("Qiuwen Projects");
  const title = getMessage("List of Qiuwen Projects");
  return mw.util.addPortletLink("p-lang", url, text, "t-project-list", title);
};
//! src/Mainpage_JS/Mainpage_JS.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Mainpage_JS/modules/newLinkUnwrap.ts
var newLinkUnwrap = ($body) => {
  $body.find("#mw-content-text a.new").contents().unwrap();
};
//! src/Mainpage_JS/Mainpage_JS.ts
void (0, import_ext_gadget2.getBody)().then(($body) => {
  const {
    wgIsMainPage,
    wgAction
  } = mw.config.get();
  if (wgAction !== "view" || !wgIsMainPage) {
    return;
  }
  addSisterProjectLinks();
  newLinkUnwrap($body);
});

})();

/* </nowiki> */

