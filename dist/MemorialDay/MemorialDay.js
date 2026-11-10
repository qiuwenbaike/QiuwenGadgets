/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/MemorialDay}
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

// dist/MemorialDay/MemorialDay.js
//! src/MemorialDay/options.json
var configKey = "gadget-MemorialDay__Initialized";
//! src/MemorialDay/modules/MemorialDay.module.less
var memorial = "MemorialDay-module__memorial_cnrRka__4100";
//! src/MemorialDay/modules/addStyleTag.ts
var addStyleTag = () => {
  const {
    wgIsMainPage
  } = mw.config.get();
  if (wgIsMainPage) {
    void mw.loader.using("ext.gadget.Mainpage-Mourning");
    return;
  }
  const CLASS_LIST = [".skin-citizen .mw-body", ".skin-gongbi #mw-content", ".skin-vector .mw-body", ".skin-vector-2022 .mw-body"];
  for (const className of CLASS_LIST) {
    var _document$querySelect;
    (_document$querySelect = document.querySelector(className)) === null || _document$querySelect === void 0 || _document$querySelect.classList.add(memorial);
  }
};
//! src/MemorialDay/MemorialDay.ts
var import_ext_gadget = require("ext.gadget.Util");
var import_ext_gadget2 = require("ext.gadget.MemorialDay-settings");
(function memorialDay() {
  if (mw.config.get(configKey)) {
    return;
  }
  if (!Array.isArray(import_ext_gadget2.pageList)) {
    return;
  }
  const DATENOW = /* @__PURE__ */ new Date();
  const YEAR = DATENOW.getFullYear();
  const MONTH = DATENOW.getMonth() + 1;
  const DAY = DATENOW.getDate();
  const {
    wgPageName
  } = mw.config.get();
  for (const page of import_ext_gadget2.pageList) {
    if (!page.titles || !page.dates) {
      continue;
    }
    const {
      titles,
      dates
    } = page;
    if (!titles.includes(wgPageName)) {
      continue;
    }
    const allDates = (0, import_ext_gadget.generateArray)(dates);
    for (let date of allDates) {
      if (typeof date === "string") {
        date = Number.parseInt(date, 10);
      }
      if (!allDates.includes(MONTH * 100 + DAY) && !allDates.includes(YEAR * 1e4 + MONTH * 100 + DAY)) {
        continue;
      }
      addStyleTag();
      mw.config.set(configKey, true);
    }
  }
})();

})();

/* </nowiki> */

