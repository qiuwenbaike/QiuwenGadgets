/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://meta.wikimedia.org/wiki/User:Xiplus/js/quick-patrol.js}
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickPatrol}
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

// dist/QuickPatrol/QuickPatrol.js
//! src/QuickPatrol/QuickPatrol.ts
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/QuickPatrol/modules/patrolAllPages.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/QuickPatrol/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Patrol: (0, import_ext_gadget.localize)({
      en: "Patrol",
      "zh-hans": "巡查",
      "zh-hant": "巡查"
    }),
    "Patrol all pages": (0, import_ext_gadget.localize)({
      en: "Patrol all pages",
      "zh-hans": "巡查所有页面？",
      "zh-hant": "巡查全部頁面？"
    }),
    "Patrol all pages?": (0, import_ext_gadget.localize)({
      en: "Patrol all pages?",
      "zh-hans": "确定巡查所有页面？",
      "zh-hant": "確定巡查全部頁面？"
    }),
    Patrolled: (0, import_ext_gadget.localize)({
      en: "Patrolled",
      "zh-hans": "已巡查",
      "zh-hant": "已巡查"
    }),
    AJAX: (0, import_ext_gadget.localize)({
      en: "AJAX failure",
      "zh-hans": "AJAX失败",
      "zh-hant": "AJAX失敗"
    }),
    API: (0, import_ext_gadget.localize)({
      en: "API failure: ",
      "zh-hans": "API失败：",
      "zh-hant": "API失敗："
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/QuickPatrol/modules/patrolAllPages.ts
var onClick = async (patrolButtons) => {
  if (!confirm(getMessage("Patrol all pages?"))) {
    return;
  }
  for (const button of patrolButtons) {
    if (button.style.pointerEvents === "none") {
      continue;
    }
    button.click();
    await (0, import_ext_gadget2.delay)(1 * 1e3);
  }
};
var element = (patrolButtons) => {
  const button = document.createElement("a");
  button.id = "gadget-quick_patrol__all";
  button.textContent = `[${getMessage("Patrol all pages")}]`;
  button.addEventListener("click", async () => {
    await onClick(patrolButtons);
  });
  const root = document.createElement("div");
  root.append(button);
  return root;
};
//! src/QuickPatrol/options.json
var version = "3.0";
//! src/QuickPatrol/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)(`QuickPatrol/${version}`);
//! src/QuickPatrol/modules/patrolSinglePage.ts
var onClick2 = async (button) => {
  const {
    revid
  } = button.dataset;
  const params = {
    action: "patrol",
    format: "json",
    revid: Number(revid)
  };
  try {
    await api.postWithToken("patrol", params);
    button.style.pointerEvents = "none";
    button.style.color = "#888";
    button.textContent = getMessage("Patrolled");
  } catch (error) {
    void mw.notify(getMessage("AJAX"), {
      tag: "QuickPatrol",
      type: "error"
    });
    button.style.color = "#f00";
    console.error("[QuickPatrol] Ajax error:", error);
  }
};
var element2 = (index, revId) => {
  const button = document.createElement("a");
  button.className = "gadget-quick_patrol__patrolbtn";
  button.id = `gadget-quick_patrol__${index}`;
  button.dataset["revid"] = revId;
  button.textContent = `[${getMessage("Patrol")}]`;
  button.addEventListener("click", () => {
    onClick2(button);
  });
  return button;
};
//! src/QuickPatrol/QuickPatrol.ts
void (0, import_ext_gadget4.getBody)().then(function quickPatrol($body) {
  if (mw.config.get("wgCanonicalSpecialPageName") !== "Newpages") {
    return;
  }
  const patrolSingleButtons = [];
  for (const [index, element3] of Object.entries($body.find(".not-patrolled"))) {
    const $element = $(element3);
    const $time = $element.find("a");
    if (!$time.length) {
      continue;
    }
    const timeHref = $time.attr("href");
    if (!timeHref) {
      continue;
    }
    const revIds = timeHref === null || timeHref === void 0 ? void 0 : timeHref.match(/oldid=([0-9]+)/);
    if (!revIds || !revIds[1]) {
      continue;
    }
    const patrolSingleButton = element2(index, revIds[1]);
    patrolSingleButtons[patrolSingleButtons.length] = patrolSingleButton;
    element3.append(patrolSingleButton);
  }
  $body.find("#mw-content-text .mw-pager-body").append(element(patrolSingleButtons));
});

})();

/* </nowiki> */

