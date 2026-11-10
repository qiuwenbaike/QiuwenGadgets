/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/Special:Permalink/61193369}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect-bio-latin-names}
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

// dist/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.js
//! src/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/ToolsRedirect-bio-latin-names/modules/bio-latin-names.ts
var import_ext_gadget = require("ext.gadget.ToolsRedirect");
var import_ext_gadget2 = require("ext.gadget.Util");
var checkRedirect = () => {
  const REGEX_PREFIX = /[学學]名\s*[:：]?\s*$/;
  const REGEX_COLON = /^\s*[:：]?\s*$/;
  (0, import_ext_gadget.findRedirectCallback)((_pageName, $content) => {
    const titles = [];
    for (const element of $content.find('> p > [lang="la"], > p > i')) {
      const {
        textContent
      } = element;
      let {
        previousSibling: previousNode
      } = element;
      if (previousNode && REGEX_COLON.test(previousNode.textContent ?? "")) {
        previousNode = previousNode.previousSibling;
      }
      if (previousNode && REGEX_PREFIX.test(previousNode.textContent ?? "")) {
        const title = textContent === null || textContent === void 0 ? void 0 : textContent.trim();
        if (!title) {
          continue;
        }
        titles[titles.length] = title;
        (0, import_ext_gadget.setRedirectTextSuffix)(title, "{{学名重定向}}");
      }
    }
    return (0, import_ext_gadget2.uniqueArray)(titles);
  });
};
//! src/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.ts
(function toolsRedirectBioLatinNames() {
  void (0, import_ext_gadget3.checkDependencies)("ToolsRedirect").then(checkRedirect);
})();

})();

/* </nowiki> */

