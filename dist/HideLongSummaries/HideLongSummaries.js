/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HideLongSummaries}
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

// dist/HideLongSummaries/HideLongSummaries.js
//! src/HideLongSummaries/options.json
var maxLength = 256;
//! src/HideLongSummaries/modules/constant.ts
var CLASS_NAME = "gadget-hide_long_summaries";
var CLASS_NAME_LONG = `${CLASS_NAME}--long`;
var CLASS_NAME_SHORT = `${CLASS_NAME}--short`;
var CLASS_NAME_SWITCH = `${CLASS_NAME}-switch`;
//! src/HideLongSummaries/HideLongSummaries.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/HideLongSummaries/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Collapse: (0, import_ext_gadget.localize)({
      en: "collapse",
      ja: "折り畳み",
      "zh-hans": "折叠",
      "zh-hant": "折疊"
    }),
    Expand: (0, import_ext_gadget.localize)({
      en: "expand",
      ja: "展開",
      "zh-hans": "展开",
      "zh-hant": "展開"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/HideLongSummaries/HideLongSummaries.ts
void (0, import_ext_gadget2.getBody)().then(function hideLongSummaries($body) {
  const $switches = [];
  for (const element of $body.find(".comment")) {
    if (!element.textContent || element.textContent.length <= maxLength || !element.parentElement) {
      continue;
    }
    $(element).addClass(CLASS_NAME_LONG).hide();
    $switches[$switches.length] = $("<a>").addClass(CLASS_NAME_SWITCH).text(`[${getMessage("Expand")}]`).insertAfter(element);
    $("<span>").addClass(`comment comment--without-parentheses ${CLASS_NAME_SHORT}`).text(`${element.textContent.slice(0, Math.max(0, maxLength + 1))}...${element.textContent.slice(-1)}`).insertAfter(element);
  }
  for (const $switch of $switches) {
    $switch.on("click", (event) => {
      const parentElement = event.currentTarget.parentElement;
      const $parentElement = $(parentElement);
      const $long = $parentElement.find(`.${CLASS_NAME_LONG}`);
      const $short = $parentElement.find(`.${CLASS_NAME_SHORT}`);
      $switch.text($long.is(":visible") ? `[${getMessage("Expand")}]` : `[${getMessage("Collapse")}]`);
      $long.toggle();
      $short.toggle();
    });
  }
});

})();

/* </nowiki> */

