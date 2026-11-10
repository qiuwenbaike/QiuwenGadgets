/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickImport}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickImportAllMedia}
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

// dist/QuickImportAllMedia/QuickImportAllMedia.js
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
var import_ext_gadget4 = require("ext.gadget.QuickImport");
//! src/QuickImportAllMedia/modules/core.ts
var import_ext_gadget = require("ext.gadget.Util");
var import_ext_gadget2 = require("ext.gadget.QuickImport");
var import_ext_gadget3 = require("ext.gadget.Toastify");
var toastifyInstance = {
  hideToast: () => {
  }
};
var parse = async (page) => {
  const params = {
    page,
    action: "parse",
    format: "json",
    formatversion: "2",
    prop: ["links", "images"],
    redirects: true,
    disabletoc: true
  };
  const response = await import_ext_gadget2.api.get(params);
  return response;
};
var getElements = (element) => {
  return [...element.querySelectorAll("a[href^='/wiki/File:']"), ...element.querySelectorAll("a[href*='title=File:']")];
};
var getElementsFromParse = async (titles) => {
  const fileNamesFromParse = [];
  titles = (0, import_ext_gadget.uniqueArray)(titles);
  for (const title of titles) {
    try {
      const response = await parse(title);
      if (!response["parse"] || !response["parse"].links && !response["parse"].images) {
        continue;
      }
      if (response["parse"].links) {
        const regex = /(File:[^#]+)/;
        for (const {
          title: titleName
        } of response["parse"].links) {
          if (regex.test(titleName)) {
            const match = regex.exec(titleName);
            let [fileName] = match;
            if (!fileName || typeof fileName !== "string") {
              continue;
            }
            fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:");
            fileNamesFromParse[fileNamesFromParse.length] = fileName;
            if (fileName.includes("+")) {
              fileNamesFromParse[fileNamesFromParse.length] = fileName.replace("+", " ");
            }
          }
        }
      }
      if (response["parse"].images) {
        for (const fileName of response["parse"].images) {
          fileNamesFromParse[fileNamesFromParse.length] = `File:${fileName}`;
          if (`${fileName}`.includes("+")) {
            fileNamesFromParse[fileNamesFromParse.length] = `File:${fileName}`.replace("+", " ");
          }
        }
      }
    } catch {
    }
  }
  return (0, import_ext_gadget.uniqueArray)(fileNamesFromParse);
};
var queryImages = async (titles) => {
  const params = {
    titles,
    action: "query",
    format: "json",
    formatversion: "2",
    prop: "images",
    imlimit: 5e3,
    redirects: true
  };
  const response = await import_ext_gadget2.api.get(params);
  return response;
};
var getImagesFromElements = (fileLinkElements) => {
  const fileNames = [];
  fileLinkElements = (0, import_ext_gadget.uniqueArray)(fileLinkElements);
  const {
    wgArticlePath,
    wgScript
  } = mw.config.get();
  const articleRegex = new RegExp(`${wgArticlePath.replace("$1", "")}(File:[^#]+)`);
  const scriptRegex = new RegExp(`${wgScript}\\?title=(File:[^#&]+)`);
  for (const element of fileLinkElements) {
    const {
      href,
      classList
    } = element;
    if (!href || href.includes("redlink=1")) {
      continue;
    }
    if (classList.contains("new")) {
      continue;
    }
    let fileName;
    if (articleRegex.test(href)) {
      const match = articleRegex.exec(href);
      fileName = match[1];
      if (!fileName || typeof fileName !== "string") {
        continue;
      }
      fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:");
      fileNames[fileNames.length] = fileName;
      if (fileName.includes("+")) {
        fileNames[fileNames.length] = fileName.replace("+", " ");
      }
    }
    if (scriptRegex.test(href)) {
      const match = scriptRegex.exec(href);
      fileName = match[1];
      if (!fileName || typeof fileName !== "string") {
        continue;
      }
      fileName = decodeURIComponent(fileName).replace(/((File|Image):)((File|Image):)?/i, "File:");
      fileNames[fileNames.length] = fileName;
      if (fileName.includes("+")) {
        fileNames[fileNames.length] = fileName.replace("+", " ");
      }
    }
  }
  return (0, import_ext_gadget.uniqueArray)(fileNames);
};
var getImages = async (titles) => {
  const fileNames = [];
  titles = (0, import_ext_gadget.uniqueArray)((0, import_ext_gadget.generateArray)(titles));
  for (let i = 0; i < titles.length; i++) {
    const querytitles = titles.splice(0, 25);
    if (!querytitles.length) {
      continue;
    }
    try {
      const response = await queryImages(querytitles);
      if (!response["query"] || !response["query"].pages) {
        continue;
      }
      for (const page of response["query"].pages) {
        if (!page.images) {
          continue;
        }
        for (const {
          title
        } of page.images) {
          if (!title) {
            continue;
          }
          fileNames[fileNames.length] = title;
        }
      }
    } catch {
    }
  }
  return (0, import_ext_gadget.uniqueArray)(fileNames);
};
var getAllImages = async (titles) => {
  toastifyInstance.hideToast();
  (0, import_ext_gadget3.toastify)({
    text: "正在获取迁移目标",
    duration: -1
  }, "info");
  let fileNames = [];
  const {
    wgNamespaceNumber,
    wgPageName
  } = mw.config.get();
  if (!titles || !titles.length) {
    titles = wgNamespaceNumber < 0 ? [] : [wgPageName];
  }
  const elementsFromPage = getElements(document);
  const fileNamesFromPage = getImagesFromElements(elementsFromPage);
  const fileNamesFromParse = await getElementsFromParse(fileNamesFromPage);
  fileNames = (0, import_ext_gadget.uniqueArray)([...fileNamesFromPage, ...fileNamesFromParse, ...await getImages([...titles, ...fileNamesFromPage])]);
  toastifyInstance.hideToast();
  toastifyInstance = (0, import_ext_gadget3.toastify)({
    text: "获取迁移目标完成",
    duration: -1
  }, "success");
  return (0, import_ext_gadget.uniqueArray)(fileNames);
};
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
(function quickImportAllMedia() {
  const {
    wgCanonicalSpecialPageName,
    wgCurRevisionId
  } = mw.config.get();
  if (!(wgCurRevisionId || ["Prefixindex", "BrokenRedirects", "Wantedfiles"].includes(wgCanonicalSpecialPageName || ""))) {
    return;
  }
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", "导入此页面所有文件", "t-import");
  if (!element) {
    return;
  }
  element.addEventListener("click", async () => {
    const fileNames = await getAllImages();
    if (fileNames.length) {
      await (0, import_ext_gadget4.detectIfFileRedirect)(fileNames, true);
    }
    (0, import_ext_gadget4.refreshPage)();
  });
})();
window.getAllImages = getAllImages;

})();

/* </nowiki> */

