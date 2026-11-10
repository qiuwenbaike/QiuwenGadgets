/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/InPageEdit}
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

// dist/InPageEdit/InPageEdit.js
//! src/InPageEdit/InPageEdit.ts
var import_ext_gadget = require("ext.gadget.Util");
void (0, import_ext_gadget.getBody)().then(function inPageEditLoader() {
  /**!
   * SPDX-License-Identifier: MIT
   *
   * @name InPageEdit NEXT
   * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/inpageedit-next/src/branch/master}
   * @author 机智的小鱼君 Dragon-Fish <dragon-fish@qq.com>
   * @license MIT {@link https://git.qiuwen.net.cn/InterfaceAdmin/inpageedit-next/src/branch/master/LICENSE}
   */
  document.body.append(Object.assign(document.createElement("script"), {
    src: "https://gitcdn.qiuwen.net.cn/InterfaceAdmin/inpageedit-next/raw/branch/master/packages/core/dist/index.js",
    type: "module"
  }));
});

})();

/* </nowiki> */

