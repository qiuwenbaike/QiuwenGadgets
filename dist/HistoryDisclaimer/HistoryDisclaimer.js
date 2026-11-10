/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HistoryDisclaimer}
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

// dist/HistoryDisclaimer/HistoryDisclaimer.js
//! src/HistoryDisclaimer/HistoryDisclaimer.module.less
var disclaimer = "HistoryDisclaimer-module__disclaimer_W9SYoG__4100";
//! src/HistoryDisclaimer/modules/getBackground.ts
var background = () => {
  const element = document.createElement("div");
  element.className = disclaimer;
  return element;
};
//! src/HistoryDisclaimer/HistoryDisclaimer.ts
var import_ext_gadget = require("ext.gadget.Util");
void (0, import_ext_gadget.getBody)().then(function historyDisclaimer() {
  const {
    wgCurRevisionId,
    wgRevisionId
  } = mw.config.get();
  if (!wgCurRevisionId || !wgRevisionId || wgCurRevisionId <= wgRevisionId) {
    return;
  }
  if (document.querySelector(`.${disclaimer}`)) {
    return;
  }
  document.body.append(background());
});

})();

/* </nowiki> */

