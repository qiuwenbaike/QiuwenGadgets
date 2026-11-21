/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/Mirror/xiplus-twinkle}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Twinkle}
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

// dist/Twinkle/Twinkle.js
//! src/Twinkle/Twinkle.ts
var SKIP_SPECIAL_PAGES = ["Recentchanges", "Recentchangeslinked"];
var {
  wgCanonicalSpecialPageName
} = mw.config.get();
if (!wgCanonicalSpecialPageName || !SKIP_SPECIAL_PAGES.includes(wgCanonicalSpecialPageName)) {
  void mw.loader.using("ext.gadget.TwinkleCore");
}

})();

/* </nowiki> */

