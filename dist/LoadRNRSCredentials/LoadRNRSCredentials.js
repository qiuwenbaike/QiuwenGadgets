/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/LoadRNRSCredentials}
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

// dist/LoadRNRSCredentials/LoadRNRSCredentials.js
//! src/LoadRNRSCredentials/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var foreignApi = (0, import_ext_gadget.initMwApi)("LoadRNRSCredentials", "https://login.qiuwenbaike.cn/api.php");
//! src/LoadRNRSCredentials/LoadRNRSCredentials.ts
(async function loadRNRSCredentials() {
  const userRights = await mw.user.getRights();
  if (userRights.includes("rnrsverify-confirmed")) {
    return;
  }
  try {
    var _foreignUserdata$quer;
    const foreignUserdata = await foreignApi.get({
      action: "query",
      meta: "userinfo",
      uiprop: "*",
      formatversion: "2"
    });
    const {
      groups,
      options
    } = (foreignUserdata === null || foreignUserdata === void 0 || (_foreignUserdata$quer = foreignUserdata["query"]) === null || _foreignUserdata$quer === void 0 ? void 0 : _foreignUserdata$quer.userinfo) ?? {
      groups: [],
      options: {}
    };
    if (!groups || !options) {
      return;
    }
    if (!groups.includes("rnrsverify-confirmed")) {
      return;
    }
    if (!options.rnrsverifyhash || !options.rnrsverifytime) {
      return;
    }
    const {
      rnrsverifyhash,
      rnrsverifytime
    } = options;
    await foreignApi.postWithToken("csrf", {
      action: "options",
      change: [`rnrsverifyhash=${rnrsverifyhash}`, `rnrsverifytime=${rnrsverifytime}`],
      global: "update"
    });
  } catch {
  }
})();

})();

/* </nowiki> */

