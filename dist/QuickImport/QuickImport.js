/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickImport}
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

// dist/QuickImport/QuickImport.js
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
//! src/QuickImport/QuickImport.ts
var QuickImport_exports = {};
__export(QuickImport_exports, {
  api: () => api,
  detectIfFileRedirect: () => detectIfFileRedirect,
  refreshPage: () => refreshPage
});
module.exports = __toCommonJS(QuickImport_exports);
//! src/QuickImport/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/QuickImport/options.json
var version = "2.0";
//! src/QuickImport/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)(`QuickImport/${version}`);
//! src/QuickImport/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var toastifyInstance = {
  hideToast: () => {
  }
};
var refreshPage = (title) => {
  toastifyInstance.hideToast();
  (0, import_ext_gadget3.toastify)({
    text: "正在刷新页面",
    duration: -1
  }, "info");
  if (title) {
    location.replace(mw.util.getUrl(title));
  } else {
    location.reload();
  }
};
var importPage = async (pageName, iwprefix, isFileNS = false) => {
  toastifyInstance.hideToast();
  toastifyInstance = (0, import_ext_gadget3.toastify)({
    text: `导入页面中：${iwprefix}:${pageName}`,
    duration: -1
  }, "info");
  let summary = "页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史";
  if (isFileNS) {
    summary += "；文件作者请参见此页面及来源页面记载";
  }
  const params = {
    action: "import",
    format: "json",
    assignknownusers: true,
    interwikipage: pageName,
    interwikiprefix: iwprefix,
    interwikisource: iwprefix,
    summary: `［${summary}］`
  };
  const result = await api.postWithEditToken(params);
  if (result["import"] && result["import"][0] && result["import"].revisions) {
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: `页面导入完成：${pageName}`,
      duration: 3 * 1e3
    }, "success");
    return true;
  }
  toastifyInstance.hideToast();
  toastifyInstance = (0, import_ext_gadget3.toastify)({
    text: `页面导入失败：${iwprefix}:${pageName}`,
    duration: 3 * 1e3
  }, "warning");
  return false;
};
var uploadFile = async (target, url) => {
  toastifyInstance.hideToast();
  toastifyInstance = (0, import_ext_gadget3.toastify)({
    text: `迁移文件中：${target}`,
    duration: -1
  }, "info");
  const params = {
    url: url ?? `https://zh.wikipedia.org/wiki/Special:Redirect/file/${mw.util.rawurlencode(target)}`,
    action: "upload",
    format: "json",
    filename: target,
    comment: "自其他网站迁移文件",
    ignorewarnings: true
  };
  await api.postWithEditToken(params);
  toastifyInstance.hideToast();
  toastifyInstance = (0, import_ext_gadget3.toastify)({
    text: `文件迁移完成：${target}`,
    duration: 3 * 1e3
  }, "success");
};
var queryImageInfo = async (titles) => {
  const params = {
    titles,
    action: "query",
    format: "json",
    formatversion: "2",
    prop: ["imageinfo", "info"],
    iiprop: ["url"],
    redirects: true
  };
  const response = await api.get(params);
  return response;
};
var detectIfFileRedirect = async (pageNames, isFileNS = false) => {
  pageNames = (0, import_ext_gadget2.uniqueArray)((0, import_ext_gadget2.generateArray)(pageNames));
  const promises = [];
  for (let i = 0; i < pageNames.length; i++) {
    let titles = pageNames.splice(0, 25);
    if (!titles.length) {
      continue;
    }
    promises[promises.length] = async () => {
      const tos = [];
      const response = await queryImageInfo(titles);
      if (response["query"]) {
        if (response["query"].normalized) {
          for (const {
            from,
            to
          } of response["query"].normalized) {
            titles = titles.map((element) => {
              return element === from ? to : element;
            });
          }
        }
        if (response["query"].pages) {
          for (const page1 of response["query"].pages) {
            const title = page1.title;
            if (!page1.missing) {
              continue;
            }
            let ifImportSuccess = false;
            if (isFileNS) {
              ifImportSuccess = await importPage(title, "commons", isFileNS);
            }
            if (!ifImportSuccess) {
              await importPage(title, "zhwiki", isFileNS);
            }
          }
        }
        if (response["query"].redirects) {
          for (const {
            to
          } of response["query"].redirects) {
            tos[tos.length] = to;
          }
        }
      }
      if (isFileNS) {
        const response2 = await queryImageInfo(titles);
        if (response2["query"]) {
          if (response2["query"].normalized) {
            for (const {
              from,
              to
            } of response2["query"].normalized) {
              titles = titles.map((element) => {
                return element === from ? to : element;
              });
            }
          }
          if (response2["query"].pages) {
            for (const page2 of response2["query"].pages) {
              const title = page2.title;
              if (page2.missing || page2.redirect) {
                continue;
              }
              if (page2.imagerepository && page2.imagerepository !== "local") {
                await uploadFile(title, `${page2.imageinfo[0].url}`.replace("wm.zhongwen.wiki", "upload.wikimedia.org"));
              }
            }
          }
          if (response2["query"].redirects) {
            for (const {
              to
            } of response2["query"].redirects) {
              tos[tos.length] = to;
            }
          }
        }
      }
      if (tos.length) {
        await detectIfFileRedirect((0, import_ext_gadget2.uniqueArray)(tos));
      }
    };
  }
  for (const promise of promises) {
    try {
      await promise();
    } catch {
    }
  }
};
//! src/QuickImport/modules/getIwPrefix.ts
var getIwPrefix = () => {
  const caViewForeignCommons = document.querySelector("#ca-view-foreign a[href*='commons.wikimedia.org']");
  const caViewForeignEnwiki = document.querySelector("#ca-view-foreign a[href*='en.wikipedia.org']");
  const caViewForeignZhwiki = document.querySelector("#ca-view-foreign a[href*='zh.wikipedia.org']");
  if (caViewForeignCommons) {
    return "commons";
  } else if (caViewForeignZhwiki) {
    return "zhwiki";
  } else if (caViewForeignEnwiki) {
    return "enwiki";
  }
  return "zhwiki";
};
//! src/QuickImport/QuickImport.ts
(function quickImport() {
  const {
    wgNamespaceNumber,
    wgPageName,
    wgWikiID
  } = mw.config.get();
  const redirectTextA = document.querySelector(".redirectText a");
  const isFileNS = wgNamespaceNumber === 6;
  const hasMwNoarticletext = !!document.querySelector("#mw-noarticletext");
  const iwprefix = getIwPrefix();
  if (!iwprefix) {
    return;
  }
  const label = isFileNS && !hasMwNoarticletext ? iwprefix : "";
  const buttonLabel = isFileNS ? label ? `文件（${label}）` : "页面" : redirectTextA ? "重定向目标" : "页面";
  if (wgWikiID !== "zhqiuwenbaike" && isFileNS || wgNamespaceNumber < 0) {
    return;
  }
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", `导入${buttonLabel}`, "t-import");
  if (!element) {
    return;
  }
  let wgPageName2;
  let wgPageName3;
  if (!isFileNS) {
    const disamRegExpFW = /^(.*)（(.*?)）$/;
    const matchFW = wgPageName.match(disamRegExpFW);
    const disamRegExpHW = /^(.*)[_ ]\((.*?)\)$/;
    const matchHW = wgPageName.match(disamRegExpHW);
    try {
      let rootPageName, disamKey;
      if (matchFW) {
        [, rootPageName, disamKey] = matchFW;
      } else if (matchHW) {
        [, rootPageName, disamKey] = matchHW;
      }
      if (rootPageName && disamKey) {
        wgPageName2 = `${rootPageName}_(${disamKey})`;
        if (disamKey === "消歧义") {
          wgPageName3 = `${rootPageName}_(消歧義)`;
        } else if (disamKey === "消歧義") {
          wgPageName3 = `${rootPageName}_(消歧义)`;
        }
      }
    } catch {
    }
  }
  element.addEventListener("click", async () => {
    const pageName = redirectTextA ? redirectTextA.textContent || wgPageName : wgPageName;
    const pageNames = [pageName];
    if (wgPageName2) {
      pageNames[pageNames.length] = wgPageName2;
    }
    if (wgPageName3) {
      pageNames[pageNames.length] = wgPageName3;
    }
    await detectIfFileRedirect(pageNames, isFileNS);
    refreshPage(wgPageName3 ?? wgPageName2 ?? wgPageName);
  });
})();
window.detectIfFileRedirect = detectIfFileRedirect;

})();

/* </nowiki> */

