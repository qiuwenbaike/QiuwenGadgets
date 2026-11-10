/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/TemplateTabs}
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

// dist/TemplateTabs/TemplateTabs.js
//! src/TemplateTabs/TemplateTabs.ts
var import_ext_gadget = require("ext.gadget.Util");
void (0, import_ext_gadget.getBody)().then(function templateTabs() {
  for (const container of document.querySelectorAll(".template-tabs-container")) {
    const containerId = container.id;
    const tabs = container.querySelectorAll(".mcTabs > div");
    const contents = container.querySelectorAll(".mcContents > div");
    const activateTabContent = (tabId) => {
      for (const content of contents) {
        const contentId = content.id.replace(new RegExp(`^${containerId}ps`), "");
        const matchTabId = tabId.replace(new RegExp(`^${containerId}bt`), "");
        if (contentId === matchTabId) {
          content.style.display = "block";
          content.style.visibility = "visible";
        } else {
          content.style.display = "none";
          content.style.visibility = "hidden";
        }
      }
      for (const tab of tabs) {
        if (tab.id === tabId) {
          tab.classList.add("mcBotoSel");
          tab.classList.remove("mcBoto");
        } else {
          tab.classList.add("mcBoto");
          tab.classList.remove("mcBotoSel");
        }
      }
    };
    for (const tab of tabs) {
      const tabId = tab.id;
      tab.addEventListener("click", (event) => {
        event.preventDefault();
        activateTabContent(tabId);
      });
    }
  }
});

})();

/* </nowiki> */

