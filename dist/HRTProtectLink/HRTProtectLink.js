/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HRTProtectLink|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Xiplus/js/HRTProtectLink.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HRTProtectLink}
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

// dist/HRTProtectLink/HRTProtectLink.js
//! src/HRTProtectLink/HRTProtectLink.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/HRTProtectLink/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    HRT: (0, import_ext_gadget.localize)({
      en: "High-risk template",
      "zh-hans": "高风险模板",
      "zh-hant": "高風險模板"
    }),
    "Full-protect HRT": (0, import_ext_gadget.localize)({
      en: "Enforce full-protection to this high-risk template",
      "zh-hans": "全保护高风险模板",
      "zh-hant": "全保護高風險模板"
    }),
    "Semi-protect HRT": (0, import_ext_gadget.localize)({
      en: "Enforce semi-protection to this high-risk template",
      "zh-hans": "半保护高风险模板",
      "zh-hant": "半保護高風險模板"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/HRTProtectLink/HRTProtectLink.ts
void (0, import_ext_gadget2.getBody)().then(function HRTProtectLink($body) {
  const {
    wgNamespaceNumber
  } = mw.config.get();
  if (![10, 828].includes(wgNamespaceNumber)) {
    return;
  }
  const {
    wgPageName
  } = mw.config.get();
  const semiProtectURL = mw.util.getUrl(wgPageName, {
    action: "protect",
    "mwProtect-level-edit": "autoconfirmed",
    "mwProtect-level-move": "autoconfirmed",
    "mwProtect-reason": getMessage("HRT")
  });
  const fullProtectURL = mw.util.getUrl(wgPageName, {
    action: "protect",
    "mwProtect-level-edit": "sysop",
    "mwProtect-level-move": "sysop",
    "mwProtect-reason": getMessage("HRT")
  });
  const portletId = $body.find("#p-cactions").length ? "p-cactions" : "p-tb";
  mw.util.addPortletLink(portletId, semiProtectURL, getMessage("Semi-protect HRT"), "t-hrt-semiprotect");
  mw.util.addPortletLink(portletId, fullProtectURL, getMessage("Full-protect HRT"), "t-hrt-fullprotect");
});

})();

/* </nowiki> */

