/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-SpecialWikitext.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/SpecialWikitext}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 *
 * Alert Mark (Orange)
 *
 * @base {@link https://www.qiuwenbaike.cn/wiki/File:Alert_Mark_%28Orange%29.svg}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/SpecialWikitext/images}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * Ajax-loader
 *
 * @base {@link https://www.qiuwenbaike.cn/wiki/File:Ajax-loader.gif}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/SpecialWikitext/images}
 * @license Public Domain
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

// dist/SpecialWikitext/SpecialWikitext.js
//! src/SpecialWikitext/SpecialWikitext.ts
var import_ext_gadget5 = require("ext.gadget.Util");
//! src/SpecialWikitext/components/SpecialWikitext.module.less
var previewLoadingContent = "SpecialWikitext-module__preview-loading__content_0PrDlG__4100";
var previewLoadingInner = "SpecialWikitext-module__preview-loading__inner_0PrDlG__4100";
//! src/SpecialWikitext/images/Ajax-loader.gif
var Ajax_loader_default = "data:image/gif;base64,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";
//! src/SpecialWikitext/images/alert.svg
var alert_default = '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 13.229 13.229"><circle cx="-6.615" cy="-6.615" r="5.957" fill="none" stroke="#f28500" stroke-width="1.315" transform="scale(-1)"/><path fill="#f28500" d="M7.409 8.097H5.808V2.644h1.601zm-.795.803q.403 0 .665.231.261.242.261.616t-.261.605-.665.231q-.414 0-.665-.231-.261-.231-.261-.605t.261-.616Q6.2 8.9 6.614 8.9"/></svg>';
//! src/SpecialWikitext/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Failed: (0, import_ext_gadget.localize)({
      en: "Failed to load preview.",
      "zh-hans": "预览加载失败",
      "zh-hant": "預覽載入失败"
    }),
    Loading: (0, import_ext_gadget.localize)({
      en: "Loading preview...",
      "zh-hans": "预览加载中……",
      "zh-hant": "預覽載入中……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/SpecialWikitext/components/generateElements.ts
var failedElement = () => {
  const loadingIcon = document.createElement("img");
  loadingIcon.src = `data:image/svg+xml,${encodeURIComponent(alert_default)}`;
  loadingIcon.decoding = "async";
  loadingIcon.width = 32;
  loadingIcon.height = 32;
  const loadingMsg = document.createElement("span");
  loadingMsg.textContent = ` ${getMessage("Failed")}`;
  return [loadingIcon, loadingMsg];
};
var loadingElement = () => {
  const root = document.createElement("div");
  root.id = "specialwikitext-preview-loading";
  const inner = document.createElement("div");
  inner.id = "specialwikitext-preview-loading__inner";
  inner.classList.add("quotebox", previewLoadingInner);
  const content = document.createElement("div");
  content.id = "specialwikitext-preview-loading__content";
  content.className = previewLoadingContent;
  const loadingIcon = document.createElement("img");
  loadingIcon.src = Ajax_loader_default;
  loadingIcon.decoding = "async";
  loadingIcon.width = 32;
  loadingIcon.height = 32;
  const loadingMsg = document.createElement("span");
  loadingMsg.textContent = ` ${getMessage("Loading")}`;
  root.append(inner);
  inner.append(content);
  content.append(loadingIcon, loadingMsg);
  return root;
};
//! src/SpecialWikitext/modules/util/checkElementExist.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var checkElementExist = (selectors) => {
  const selectorArray = (0, import_ext_gadget2.generateArray)(selectors);
  for (const selector of selectorArray) {
    if (document.querySelector(selector)) {
      return true;
    }
  }
  return false;
};
//! src/SpecialWikitext/modules/util/addParsedWikitext.ts
var addParsedWikitext = (parsedWikitext) => {
  const $body = $("body");
  const $parsedWikitext = $().html(parsedWikitext);
  if (checkElementExist("#specialwikitext-preview-loading")) {
    const $element = $body.find("#specialwikitext-preview-loading");
    $element.html(parsedWikitext);
    mw.hook("wikipage.content").fire($element);
  } else if (checkElementExist(".diff-currentversion-title")) {
    $body.find(".diff-currentversion-title").append($parsedWikitext);
  } else if (checkElementExist(".previewnote")) {
    $body.find(".previewnote").append($parsedWikitext);
  } else if (checkElementExist(".mw-undelete-revision")) {
    $body.find(".mw-undelete-revision").append($parsedWikitext);
  } else if (checkElementExist("#mw-content-text")) {
    $body.find("#mw-content-text").append($parsedWikitext);
  }
  mw.hook("wikipage.content").fire($parsedWikitext);
};
//! src/SpecialWikitext/modules/notice.ts
var noticeFailElement = failedElement();
var noticeLoadingElement = loadingElement();
var replaceDOM = (selector, ...element) => {
  $(selector).empty();
  if (element) {
    $(selector).append(element);
  }
};
var addLoadingNotice = () => {
  addParsedWikitext(noticeLoadingElement);
};
var loadingFailNotice = () => {
  replaceDOM("#specialwikitext-preview-loading__content", ...noticeFailElement);
};
var removeLoadingNotice = () => {
  replaceDOM("#specialwikitext-preview-loading");
};
//! src/SpecialWikitext/options.json
var version = "2.1";
var wikiTextKey = "_addText";
//! src/SpecialWikitext/modules/lua/luaAddText.ts
var luaAddText = (inputString, newString, isEscape = false) => {
  if (newString) {
    if (inputString) {
      inputString += "\n";
    }
    if (isEscape) {
      const [escapeString] = JSON.parse(`[${JSON.stringify(
        // Lua不支持\u、\x转义字符
        newString.replace(/\\([ux])/gi, "$1")
      ).replace(/\\\\/g, "\\")}]`);
      newString = escapeString;
    }
    inputString += newString;
  }
  return inputString;
};
//! src/SpecialWikitext/modules/lua/luaGetText.ts
var luaGetString = (inputString) => {
  const testStringExecArray = /[^\n]*\*\//.exec(inputString);
  let testString = inputString;
  if (testStringExecArray) {
    [testString] = testStringExecArray;
    testString = testString.slice(0, Math.max(0, testString.length - 2));
  }
  const trimCheck = testString.trim();
  const firstChar = trimCheck.charAt(0);
  if (firstChar === trimCheck.at(-1) && (firstChar === "'" || firstChar === '"')) {
    return trimCheck.slice(1, 1 + trimCheck.length - 2);
  }
  return testString.trim();
};
var luaGetContentText = (inputString) => {
  let wikitext = "";
  try {
    inputString.replace(new RegExp(`${wikiTextKey}\\s*\\{[^c\\}]*content\\s*:\\s*[^
]*`, "g"), (substring) => {
      const tempText = (/content\s*:\s*[^\n]*/.exec(substring) || ["content:"])[0].replace(/^[\s;}]+|[\s;}]+$/g, "").replace(/\s*content\s*:\s*/, "");
      if (wikitext) {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return substring;
    });
  } catch {
    return "";
  }
  return wikitext.trim();
};
var luaGetObjText = (inputString) => {
  let wikitext = "";
  try {
    inputString.replace(new RegExp(`${wikiTextKey}\\s*[\\=:]\\s*[^
]*`, "g"), (substring) => {
      const tempText = substring.replace(/^[\s;}]+|[\s;}]+$/g, "").replace(new RegExp(`${wikiTextKey}\\s*[\\=:]\\s*`), "");
      if (wikitext) {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return substring;
    });
  } catch {
    return "";
  }
  return wikitext.trim();
};
var luaGetCSSwikitext = (inputString) => {
  var _document$querySelect;
  let wikitext = "";
  const cssText = (inputString || ((_document$querySelect = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value)) ?? "";
  if (!cssText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetContentText(cssText), true);
  wikitext = luaAddText(wikitext, luaGetObjText(cssText), true);
  return wikitext.trim();
};
var luaGetJSONwikitext = (inputString) => {
  var _document$querySelect2;
  let wikitext = "";
  const JSONText = (inputString || ((_document$querySelect2 = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.value)) ?? "";
  if (!JSONText.trim()) {
    return "";
  }
  try {
    const jsonData = JSON.parse(JSONText);
    for (const [key, value] of Object.entries(jsonData)) {
      if (new RegExp(wikiTextKey).test(key) && typeof value === "string") {
        wikitext = luaAddText(wikitext, value);
      }
      if (typeof value !== "string") {
        for (const [k, v] of Object.entries(value)) {
          if (new RegExp(wikiTextKey).test(k) && typeof v === "string") {
            wikitext = luaAddText(wikitext, v);
          }
        }
      }
    }
  } catch {
    return "";
  }
  return wikitext.trim();
};
var luaGetJSwikitext = (inputString) => {
  var _document$querySelect3;
  let wikitext = "";
  const jsText = (inputString || ((_document$querySelect3 = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.value)) ?? "";
  if (!jsText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetObjText(jsText), true);
  return wikitext.trim();
};
//! src/SpecialWikitext/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)(`SpecialWikitext/${version}`);
//! src/SpecialWikitext/modules/util/getLanguage.ts
var {
  wgUserLanguage,
  wgUserVariant
} = mw.config.get();
var getLanguage = () => {
  const lang = wgUserLanguage;
  if (lang.includes("zh")) {
    return wgUserVariant;
  }
  return lang;
};
//! src/SpecialWikitext/modules/mw/mwAddText.ts
var {
  skin
} = mw.config.get();
var mwAddWikiText = async (wikitext, pageName, isPreview) => {
  if (wikitext.trim()) {
    const params = {
      action: "parse",
      format: "json",
      formatversion: "2",
      // 避免内容重复
      title: pageName,
      contentmodel: "wikitext",
      text: wikitext,
      prop: "text",
      uselang: getLanguage(),
      useskin: skin
    };
    if (isPreview) {
      params.disableeditsection = true;
      params.preview = true;
    }
    try {
      var _data$parse;
      const data = await api.get(params);
      if (!(data !== null && data !== void 0 && (_data$parse = data["parse"]) !== null && _data$parse !== void 0 && _data$parse.text)) {
        return;
      }
      const parsedWikitext = data["parse"].text.trim();
      if (parsedWikitext) {
        addParsedWikitext(parsedWikitext);
      } else {
        removeLoadingNotice();
      }
    } catch {
      loadingFailNotice();
    }
  } else {
    removeLoadingNotice();
  }
};
var mwAddLuaText = async (wikitext, pageName, isPreview, callBack) => {
  const tempModuleName = "AddText/Temp/Module/Data.lua";
  const moduleCall = {
    wikitext: "#invoke:",
    // 分开来，避免被分到[[:Category:有脚本错误的页面]]
    pageName: "Module:"
  };
  if (wikitext.trim()) {
    try {
      var _data$parse2;
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        title: pageName,
        contentmodel: "wikitext",
        templatesandboxtitle: moduleCall.pageName + tempModuleName,
        // 创建临时Lua Module
        templatesandboxtext: `return {
	main = function()
		xpcall(
			function()
				${wikitext}
			end,
			function()
			end
		)
		local moduleWikitext = package.loaded["Module:Module wikitext"]
		if moduleWikitext then
			local wikitext = moduleWikitext.main()
			if mw.text.trim(wikitext) ~= "" then
				return mw.getCurrentFrame():preprocess(moduleWikitext.main())
			end
		end
		return ""
	end
}`,
        templatesandboxcontentmodel: "Scribunto",
        templatesandboxcontentformat: "text/plain",
        text: `{{${moduleCall.wikitext}${tempModuleName}|main}}`,
        prop: "text",
        uselang: getLanguage(),
        useskin: skin
      };
      if (isPreview) {
        params.preview = true;
        params.disableeditsection = true;
      }
      const data = await api.get(params);
      if (!(data !== null && data !== void 0 && (_data$parse2 = data["parse"]) !== null && _data$parse2 !== void 0 && _data$parse2.text)) {
        return;
      }
      const parsedWikitext = data["parse"].text.trim();
      if (!parsedWikitext) {
        removeLoadingNotice();
      } else if ($(parsedWikitext).find(".scribunto-error").text().search(tempModuleName)) {
        removeLoadingNotice();
      } else if (typeof callBack === "function") {
        callBack(parsedWikitext);
      } else {
        addParsedWikitext(parsedWikitext);
      }
    } catch {
      loadingFailNotice();
    }
  } else {
    removeLoadingNotice();
  }
};
//! src/SpecialWikitext/modules/lua/luaCheck.ts
var {
  wgPageContentModel
} = mw.config.get();
var luaCheck = (inputString = "", contentModel = wgPageContentModel) => {
  switch (contentModel.toLowerCase()) {
    case "json":
      return luaGetJSONwikitext(inputString);
    case "js":
    case "javascript":
    case "text":
      return luaGetJSwikitext(inputString);
    case "css":
    case "sanitized-css":
      return luaGetCSSwikitext(inputString);
    default:
      return "";
  }
};
//! src/SpecialWikitext/modules/mw/mwApply.ts
var {
  skin: skin2,
  wgRevisionId
} = mw.config.get();
var mwApplyNotice = async (currentPageName, pageSubName) => {
  try {
    var _data$parse3;
    const params = {
      action: "parse",
      format: "json",
      formatversion: "2",
      // get the original wikitext content of a page
      title: currentPageName + pageSubName,
      text: `{{#invoke:Special wikitext/Template|getNotices|${currentPageName}|${pageSubName}}}`,
      prop: "text",
      uselang: getLanguage(),
      useskin: skin2,
      smaxage: 600,
      maxage: 600
    };
    const data = await api.get(params);
    if (!(data !== null && data !== void 0 && (_data$parse3 = data["parse"]) !== null && _data$parse3 !== void 0 && _data$parse3.text)) {
      return;
    }
    const html = data["parse"].text;
    if ($(html).text().trim()) {
      addParsedWikitext(html);
    }
  } catch {
  }
};
var mwApplyRevision = async (currentPageName) => {
  try {
    var _data$parse4;
    const params = {
      action: "parse",
      format: "json",
      formatversion: "2",
      // get the original wikitext content of a page
      oldid: wgRevisionId,
      prop: "wikitext",
      smaxage: 600,
      maxage: 600
    };
    const data = await api.get(params);
    if (!(data !== null && data !== void 0 && (_data$parse4 = data["parse"]) !== null && _data$parse4 !== void 0 && _data$parse4.wikitext)) {
      return;
    }
    let pageContent = luaCheck(data["parse"].wikitext.trim());
    pageContent = (checkElementExist("#mw-clearyourcache") ? "{{#invoke:Special wikitext/Template|int|clearyourcache}}" : "") + pageContent;
    if (pageContent.trim()) {
      void mwAddWikiText(pageContent, currentPageName, true);
    } else {
      removeLoadingNotice();
    }
  } catch {
    removeLoadingNotice();
  }
};
//! src/SpecialWikitext/modules/util/checkMwConfig.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var allMwConfig = mw.config.get();
var checkMwConfig = (configKey, expectConfig) => {
  let mwConfig = allMwConfig[configKey];
  if (!mwConfig) {
    return false;
  }
  mwConfig = String(mwConfig).toLowerCase().trim();
  if (!mwConfig) {
    return false;
  }
  return (0, import_ext_gadget4.generateArray)(expectConfig).includes(mwConfig);
};
//! src/SpecialWikitext/modules/util/checkNeedPreview.ts
var checkNeedPreview = () => {
  return document.body.innerHTML.search(wikiTextKey) > -1;
};
//! src/SpecialWikitext/modules/mw/mwAddPreview.ts
var {
  wgCanonicalNamespace,
  wgCanonicalSpecialPageName,
  wgPageName
} = mw.config.get();
var mwAddPreview = ($body) => {
  if (checkMwConfig("wgPageContentModel", ["javascript", "js", "json", "text", "css", "sanitized-css"])) {
    if (checkElementExist(".previewnote")) {
      var _mw$util$getUrl$match;
      const pathPath = decodeURI(mw.util.getUrl(wgPageName)).replace(new RegExp(`^\\/?${((_mw$util$getUrl$match = mw.util.getUrl("").match(/[a-z]+/)) === null || _mw$util$getUrl$match === void 0 ? void 0 : _mw$util$getUrl$match[0]) ?? ""}\\/`), "");
      if (pathPath !== wgPageName) {
        return;
      }
      const wikitext = luaCheck();
      if (wikitext) {
        addLoadingNotice();
        void mwAddWikiText(wikitext, wgPageName, true);
      }
    } else if (!checkElementExist(".mw-_addText-content") && checkMwConfig("wgAction", "view")) {
      if (!checkNeedPreview()) {
        return;
      }
      $body.find("#mw-clearyourcache").html("");
      if (!checkElementExist("textarea[name=wpTextbox1]")) {
        addLoadingNotice();
        void mwApplyRevision(wgPageName);
      }
    } else if (checkElementExist("#mw-revision-info") && checkMwConfig("wgAction", "view")) {
      if (!checkElementExist("textarea[name=wpTextbox1]")) {
        $body.find("#mw-clearyourcache").html(noticeLoadingElement);
        void mwApplyRevision(wgPageName);
      }
    } else {
      removeLoadingNotice();
    }
  } else if (checkMwConfig("wgPageContentModel", ["scribunto", "lua"])) {
    if (!checkNeedPreview()) {
      return;
    }
    if (checkElementExist("textarea[name=wpTextbox1]") && checkElementExist("table.diff") && !checkElementExist(".previewnote") && !checkMwConfig("wgAction", "view")) {
      $(noticeLoadingElement).insertAfter("#wikiDiff");
      void mwAddLuaText($body.find("textarea[name=wpTextbox1]").val() ?? "", wgPageName, true);
    }
  } else if (checkElementExist(".mw-undelete-revision")) {
    if (!checkNeedPreview()) {
      return;
    }
    if (checkElementExist([".mw-highlight", "pre", ".mw-json"])) {
      const textareaContent = $body.find("textarea").val() ?? "";
      let wikitext = luaGetJSONwikitext(textareaContent);
      wikitext || (wikitext = luaGetCSSwikitext(textareaContent));
      if (wikitext) {
        addLoadingNotice();
        void mwAddWikiText(wikitext, mw.config.get("wgRelevantPageName"), true);
      } else if (/module[ _]wikitext.*_addtext/i.test($body.find(".mw-parser-output").text())) {
      }
    }
  } else if (!checkElementExist(".mw-editnotice") && checkMwConfig("wgCanonicalNamespace", "special")) {
    const pageSubName = wgPageName.replace(/special:[^/]+/i, "");
    if (wgCanonicalSpecialPageName) {
      const fullPageName = `${wgCanonicalNamespace}:${wgCanonicalSpecialPageName}`;
      void mwApplyNotice(fullPageName, pageSubName);
    }
  } else {
    removeLoadingNotice();
  }
};
//! src/SpecialWikitext/modules/wikitextPreviewTestcase.ts
var {
  wgPageName: wgPageName2
} = mw.config.get();
var wikitextPreviewTestcase = async (isPreview) => {
  if (!checkNeedPreview()) {
    return;
  }
  const testcaseList = document.querySelectorAll(".special-wikitext-preview-testcase");
  if (!testcaseList.length) {
    return;
  }
  const testcaseDataList = [];
  let i = 0;
  for (i = 0; i < testcaseList.length; ++i) {
    var _codeElement$textCont;
    const element = testcaseList[i];
    if (!element) {
      continue;
    }
    const codeElement = element.querySelector(".mw-highlight");
    if (!codeElement) {
      continue;
    }
    const {
      className
    } = codeElement;
    if (!className) {
      continue;
    }
    const [, codeId] = /mw-highlight-lang-(\S+)/.exec(className) ?? [];
    const {
      length
    } = testcaseDataList;
    element.setAttribute("preview-id", length.toString());
    testcaseDataList[length] = {
      element,
      lang: (codeId === null || codeId === void 0 ? void 0 : codeId.toLowerCase()) ?? "",
      code: ((_codeElement$textCont = codeElement.textContent) === null || _codeElement$textCont === void 0 ? void 0 : _codeElement$textCont.trim()) ?? ""
    };
  }
  let packageWikitext = "";
  for (const testcaseItem of Object.values(testcaseDataList)) {
    const {
      code,
      element,
      lang
    } = testcaseItem;
    if (!code) {
      continue;
    }
    const $element = $(element);
    if (["javascript", "js", "css", "json", "text"].includes(testcaseItem.lang)) {
      const wikitext = luaCheck(code, lang);
      if (wikitext) {
        $element.prepend(noticeLoadingElement);
        packageWikitext += `<div class="special-wikitext-preview-testcase-${i}">
${wikitext}
</div>`;
      }
    } else if (["lua", "scribunto"].includes(lang)) {
      void mwAddLuaText(code, wgPageName2, isPreview, /* @__PURE__ */ (() => {
        return (wikitext) => {
          $element.prepend(wikitext);
        };
      })());
    }
  }
  if (packageWikitext) {
    packageWikitext = `<div class="special-wikitext-preview-testcase-undefined">${packageWikitext}</div>`;
    try {
      var _data$parse5;
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        text: packageWikitext,
        contentmodel: "wikitext",
        prop: "text"
      };
      if (isPreview) {
        params.disableeditsection = true;
        params.preview = true;
      }
      const data = await api.get(params);
      if (!(data !== null && data !== void 0 && (_data$parse5 = data["parse"]) !== null && _data$parse5 !== void 0 && _data$parse5.text)) {
        return;
      }
      const parsedWikitext = data["parse"].text.trim();
      if (parsedWikitext) {
        const $parsedElement = $(parsedWikitext);
        for (const [key, testcaseItem] of Object.entries(testcaseDataList)) {
          const {
            element,
            lang
          } = testcaseItem;
          if (!["javascript", "js", "text", "css", "json"].includes(lang)) {
            continue;
          }
          const $element = $parsedElement.find(`.special-wikitext-preview-testcase-undefined > .special-wikitext-preview-testcase-${key}`);
          if (!$element.length) {
            continue;
          }
          const $addTarget = $(element).find("#specialwikitext-preview-loading");
          $addTarget.html($element.html());
          mw.hook("wikipage.content").fire($addTarget);
        }
      }
    } catch {
    }
  }
};
//! src/SpecialWikitext/SpecialWikitext.ts
void (0, import_ext_gadget5.getBody)().then(function specialWikitext($body) {
  mwAddPreview($body);
  void wikitextPreviewTestcase(true);
});

})();

/* </nowiki> */

