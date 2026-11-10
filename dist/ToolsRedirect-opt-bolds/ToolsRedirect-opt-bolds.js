/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-opt-bolds.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect-opt-bolds}
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

// dist/ToolsRedirect-opt-bolds/ToolsRedirect-opt-bolds.js
//! src/ToolsRedirect-opt-bolds/ToolsRedirect-opt-bolds.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/ToolsRedirect-opt-bolds/modules/opt-bolds.ts
var import_ext_gadget = require("ext.gadget.ToolsRedirect");
var checkRedirect = () => {
  (0, import_ext_gadget.findRedirectBySelector)("div#mw-content-text p > b");
};
//! src/ToolsRedirect-opt-bolds/ToolsRedirect-opt-bolds.ts
(function toolsRedirectCourtesyAndArtNames() {
  void (0, import_ext_gadget2.checkDependencies)("ToolsRedirect").then(checkRedirect);
})();

})();

/* </nowiki> */

