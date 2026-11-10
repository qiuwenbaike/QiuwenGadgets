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

// dist/Mainpage-ChineseNewYear_JS/Mainpage-ChineseNewYear_JS.js
//! src/Mainpage-ChineseNewYear_JS/modules/loadHolidayStyle.ts
var import_ext_gadget = require("ext.gadget.ChineseDays");
var loadHolidayStyle = () => {
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const {
    work,
    name
  } = (0, import_ext_gadget.getDayDetail)(today);
  if (work === true) {
    return;
  }
  const HOLIDAYS = [
    "New Year's Day",
    "Spring Festival",
    /* 'Tomb-sweeping Day', */
    // Do not load celebrating styles when it is Tomb-sweeping Day.
    "Labour Day",
    "Dragon Boat Festival",
    "National Day",
    "Mid-autumn Festival"
  ];
  for (const holiday of HOLIDAYS) {
    if (name.includes(holiday)) {
      void mw.loader.using("ext.gadget.Mainpage-ChineseNewYear");
    }
  }
};
//! src/Mainpage-ChineseNewYear_JS/Mainpage-ChineseNewYear_JS.ts
(function mainpageChineseNewYearJS() {
  const {
    wgIsMainPage,
    wgAction
  } = mw.config.get();
  if (wgAction !== "view" || !wgIsMainPage) {
    return;
  }
  loadHolidayStyle();
})();

})();

/* </nowiki> */

