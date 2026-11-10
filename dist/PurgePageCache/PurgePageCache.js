/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PurgePageCache}
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

// dist/PurgePageCache/PurgePageCache.js
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/PurgePageCache/PurgePageCache.ts
var PurgePageCache_exports = {};
__export(PurgePageCache_exports, {
  purge: () => purge
});
module.exports = __toCommonJS(PurgePageCache_exports);
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/PurgePageCache/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Purge: (0, import_ext_gadget.localize)({
      en: "Purge cache",
      "zh-hans": "清除缓存",
      "zh-hant": "清除快取"
    }),
    PurgeFromServer: (0, import_ext_gadget.localize)({
      en: "Purge cache from the server",
      "zh-hans": "更新服务器缓存",
      "zh-hant": "更新伺服器快取"
    }),
    Purging: (0, import_ext_gadget.localize)({
      en: "Purging cache...",
      "zh-hans": "正在清除……",
      "zh-hant": "正在清除……"
    }),
    Success: (0, import_ext_gadget.localize)({
      en: "Cache cleared!",
      "zh-hans": "缓存清除成功",
      "zh-hant": "快取清除成功"
    }),
    Failed: (0, import_ext_gadget.localize)({
      en: "Failed to purge cache. Please try again later",
      "zh-hans": "清除失败，请稍后重试",
      "zh-hant": "清除失敗，請稍后重試"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/PurgePageCache/options.json
var version = "2.0";
//! src/PurgePageCache/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)(`PurgePageCache/${version}`);
//! src/PurgePageCache/modules/purge.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var purge = async (title) => {
  const toastifyInstance = (0, import_ext_gadget3.toastify)({
    text: getMessage("Purging"),
    duration: -1
  }, "info");
  const {
    wgWikiID
  } = mw.config.get();
  try {
    const params = {
      action: "purge",
      format: "json",
      formatversion: "2",
      titles: title,
      forcelinkupdate: true
    };
    await api.post(params);
    localStorage.removeItem(`MediaWikiModuleStore:${wgWikiID}`);
    toastifyInstance.hideToast();
    (0, import_ext_gadget3.toastify)({
      text: getMessage("Success"),
      close: true,
      duration: -1
    }, "success");
    location.reload();
  } catch (error) {
    console.error("[PurgePageCache] Ajax error:", error);
    toastifyInstance.hideToast();
    (0, import_ext_gadget3.toastify)({
      text: getMessage("Failed"),
      close: true,
      duration: -1
    }, "error");
  }
};
//! src/PurgePageCache/PurgePageCache.ts
void (0, import_ext_gadget4.getBody)().then(function purgePageCache($body) {
  const {
    wgAction,
    wgPageName,
    wgNamespaceNumber
  } = mw.config.get();
  if (wgAction !== "view" || wgNamespaceNumber < 0) {
    return;
  }
  const portletId = $body.find("#p-cactions").length ? "p-cactions" : "p-tb";
  const portletElement = mw.util.addPortletLink(portletId, "#", getMessage("Purge"), "ca-purge", getMessage("PurgeFromServer"));
  if (!portletElement) {
    return;
  }
  portletElement.querySelector("a").addEventListener("click", (event) => {
    event.preventDefault();
    void purge(wgPageName);
  });
  for (const element of $body.find('a[href*="action=purge"]')) {
    const title = mw.util.getParamValue("title", element.href) || wgPageName;
    element.addEventListener("click", (event) => {
      event.preventDefault();
      void purge(title);
    });
  }
});

})();

/* </nowiki> */

