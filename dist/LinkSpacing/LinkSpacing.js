/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/LinkSpacing}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * Inspired by Kcx36 at {@link https://zh.wikipedia.org/w/index.php?diff=prev&oldid=84670731}
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

// dist/LinkSpacing/LinkSpacing.js
//! src/LinkSpacing/util/LinkSpacing.module.less
var linkSpace = "LinkSpacing-module__linkSpace_E9P2BW__4100";
//! src/LinkSpacing/util/LinkSpace.ts
var LinkSpace = () => {
  const spaceElement = document.createElement("span");
  spaceElement.className = linkSpace;
  return spaceElement;
};
//! src/LinkSpacing/LinkSpacing.ts
var links = document.querySelectorAll(".mw-parser-output a");
for (const [index, link] of links.entries()) {
  if (!(index > 0)) {
    continue;
  }
  const beforeElement = links[index - 1];
  if (!beforeElement) {
    continue;
  }
  if (link.classList.contains("mw-file-description") || link.classList.contains("mw-file-source") || beforeElement.classList.contains("mw-file-description") || beforeElement.classList.contains("mw-file-source") || link.querySelector("img") || beforeElement.querySelector("img")) {
    continue;
  }
  if (beforeElement.nextSibling === link) {
    const spacer = LinkSpace().cloneNode();
    link.before(spacer);
  }
}

})();

/* </nowiki> */

