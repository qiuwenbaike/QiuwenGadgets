/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-SpecialWikitext.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/SpecialWikitext}
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

// dist/SpecialWikitext/SpecialWikitext.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/SpecialWikitext/SpecialWikitext.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/SpecialWikitext/modules/generateElements.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/SpecialWikitext/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Loading preview": (0, import_ext_gadget.localize)({
      en: "Loading preview……",
      "zh-hans": "预览加载中……",
      "zh-hant": "預覽載入中……"
    }),
    "Failed to load preview": (0, import_ext_gadget.localize)({
      "zh-hans": "预览加载失败",
      "zh-hant": "預覽載入失败"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/SpecialWikitext/modules/generateElements.tsx
var LOADER_IMAGE = "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/d/de/Ajax-loader.gif";
var FAIL_IMAGE = "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/8/8f/Alert_Mark_%28Orange%29.svg/48px-Alert_Mark_%28Orange%29.svg.png";
var noticeLoadingElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: "specialwikitext__preview-loading",
  id: "specialwikitext__preview-loading"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: "specialwikitext__preview-loading-inner",
  id: "specialwikitext__preview-loading-inner"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: "specialwikitext__preview-loading-content",
  id: "specialwikitext__preview-loading-content"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  src: LOADER_IMAGE,
  decoding: "async",
  width: "32",
  height: "32"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, " ", getMessage("Loading preview")))));
var noticeFailElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  src: FAIL_IMAGE,
  decoding: "async",
  width: "32",
  height: "32"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, " ", getMessage("Failed to load preview")));
//! src/SpecialWikitext/SpecialWikitext.ts
var wikiTextKey = "_addText";
var luaAddText = (inputStr, newStr, _escape) => {
  let inputString = inputStr;
  if (newStr) {
    if (inputString !== "") {
      inputString += "\n";
    }
    let text = newStr;
    if (_escape) {
      const [escapeStr] = JSON.parse("[".concat(JSON.stringify(
        // Lua不支持\u、\x的跳脱符号；排除相关转换
        newStr.toString().replace(/\\([ux])/gi, "$1")
      ).replace(/\\\\/g, "\\"), "]"));
      text = escapeStr;
    }
    inputString += text;
  }
  return inputString;
};
var luaGetString = (str) => {
  const testStrArray = /[^\n]*\*\//.exec(str);
  let testStr;
  if (testStrArray) {
    testStr = testStrArray[0] || "";
    testStr = testStr.slice(0, Math.max(0, testStr.length - 2));
  } else {
    testStr = str;
  }
  const trimCheck = testStr.trim();
  const firstChar = trimCheck.charAt(0);
  if (firstChar === trimCheck.at(-1) && (firstChar === "'" || firstChar === '"')) {
    return trimCheck.slice(1, 1 + trimCheck.length - 2);
  }
  return testStr;
};
var luaGetContentText = (str) => {
  let wikitext = "";
  try {
    str.replace(new RegExp("".concat(wikiTextKey, "\\s*\\{[^c\\}]*content\\s*:\\s*[^\n]*"), "g"), (text) => {
      const tempText = (/content\s*:\s*[^\n]*/.exec(text) || ["content:"])[0].replace(/^[\s;}]+|[\s;}]+$/g, "").replace(/\s*content\s*:\s*/, "");
      if (wikitext !== "") {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return text;
    });
  } catch {
    return "";
  }
  return wikitext;
};
var luaGetObjText = (str) => {
  let wikitext = "";
  try {
    str.replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*[^\n]*"), "g"), (text) => {
      const tempText = text.replace(/^[\s;}]+|[\s;}]+$/g, "").replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*")), "");
      if (wikitext !== "") {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return text;
    });
  } catch {
    return "";
  }
  return wikitext;
};
var luaGetCSSwikitext = (inputStr) => {
  var _document$querySelect;
  let wikitext = "";
  const cssText = inputStr || ((_document$querySelect = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value) || "";
  if (!cssText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetContentText(cssText), true);
  wikitext = luaAddText(wikitext, luaGetObjText(cssText), true);
  return wikitext;
};
var luaGetJSwikitext = (inputStr) => {
  var _document$querySelect2;
  let wikitext = "";
  const jsText = inputStr || ((_document$querySelect2 = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect2 === void 0 || (_document$querySelect2 = _document$querySelect2.value) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.toString()) || "";
  if (!jsText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetObjText(jsText), true);
  return wikitext;
};
var luaGetJSONwikitext = (inputStr) => {
  var _document$querySelect3;
  let wikitext = "";
  const JSONText = inputStr || ((_document$querySelect3 = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.value) || "";
  if (!JSONText.trim()) {
    return "";
  }
  try {
    const jsonData = JSON.parse(JSONText.toString());
    for (var _i = 0, _Object$keys = Object.keys(jsonData); _i < _Object$keys.length; _i++) {
      const key = _Object$keys[_i];
      const v = jsonData[key];
      if (new RegExp(wikiTextKey).test(key) && typeof v === "string") {
        wikitext = luaAddText(wikitext, v);
      }
      if (typeof v !== "string") {
        for (const prop in v) {
          if (!Object.hasOwn(v, prop)) {
            continue;
          }
          const testArrV = v[prop];
          if (new RegExp(wikiTextKey).test(prop) && typeof testArrV === "string") {
            wikitext = luaAddText(wikitext, testArrV);
          }
        }
      }
    }
  } catch {
    return "";
  }
  return wikitext;
};
var luaCheck = (inputStr, contentModel) => {
  contentModel || (contentModel = mw.config.get("wgPageContentModel"));
  const contentModelToLowerCase = contentModel.toString().toLowerCase();
  inputStr || (inputStr = "");
  switch (contentModelToLowerCase) {
    case "json":
      return luaGetJSONwikitext(inputStr);
    case "js":
    case "javascript":
    case "text":
      return luaGetJSwikitext(inputStr);
    case "css":
    case "sanitized-css":
      return luaGetCSSwikitext(inputStr);
    default:
      return "";
  }
};
var previewTool = () => {
  const api = (0, import_ext_gadget3.initMwApi)("SpecialWikitext/1.1");
  const $noticeAddText = "{{Special_wikitext/notice}}";
  const noticeLoading = noticeLoadingElement();
  const noticeFail = noticeFailElement();
  const $elementExist = (selectors) => {
    const selectorArray = (0, import_ext_gadget3.generateArray)(selectors);
    let eleCount = 0;
    const $body = $("body");
    var _iterator2 = _createForOfIteratorHelper(selectorArray), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const selector = _step2.value;
        const $selector = $body.find(selector);
        eleCount += $selector.length;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return eleCount > 0;
  };
  const checkMwConfig = (checkTarget, mwConfigs) => {
    let mwConfigData = mw.config.get(checkTarget);
    if (!mwConfigData || String(mwConfigData).trim() === "") {
      return false;
    }
    mwConfigData = String(mwConfigData).toLowerCase();
    const mwConfigArray = (0, import_ext_gadget3.generateArray)(mwConfigs);
    return mwConfigArray.includes(mwConfigData);
  };
  const getLanguage = () => {
    const lang = mw.config.get("wgUserLanguage");
    if (lang.includes("zh")) {
      return mw.config.get("wgUserVariant");
    }
    return lang;
  };
  const addParsedWikitext = (parsedWikitext) => {
    const $htmlObj = $().html(parsedWikitext);
    const $body = $("body");
    if ($elementExist("#specialwikitext__preview-loading")) {
      const $element = $body.find("#specialwikitext__preview-loading");
      $element.html(parsedWikitext);
      mw.hook("wikipage.content").fire($element);
    } else if ($elementExist(".diff-currentversion-title")) {
      $body.find(".diff-currentversion-title").append($htmlObj);
    } else if ($elementExist(".previewnote")) {
      $body.find(".previewnote").append($htmlObj);
    } else if ($elementExist(".mw-undelete-revision")) {
      $body.find(".mw-undelete-revision").append($htmlObj);
    } else if ($elementExist("#mw-content-text")) {
      $body.find("#mw-content-text").append($htmlObj);
    }
    mw.hook("wikipage.content").fire($htmlObj);
  };
  const setHtml = (selector, htmlContent) => {
    if ($elementExist(selector)) {
      $(selector).html(htmlContent);
    }
  };
  const addLoadingNotice = () => {
    if ($noticeAddText && noticeLoading) {
      addParsedWikitext(noticeLoading);
    }
  };
  const loadingFailNotice = () => {
    setHtml("#specialwikitext__preview-loading-content", noticeFail);
  };
  const removeLoadingNotice = () => {
    setHtml("#specialwikitext__preview-loading", "");
  };
  const needPreview = () => {
    return document.documentElement.innerHTML.search("_addText") > -1;
  };
  const mwAddWikiText = /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(function* (wikiText, pagename, isPreview) {
      if (wikiText.toString().trim() === "") {
        removeLoadingNotice();
      } else {
        const params = {
          action: "parse",
          prop: "text",
          format: "json",
          formatversion: "2",
          // 避免内容重复
          title: pagename,
          contentmodel: "wikitext",
          text: wikiText,
          uselang: getLanguage(),
          useskin: mw.config.get("skin")
        };
        if (isPreview) {
          params.preview = true;
          params.disableeditsection = true;
        }
        try {
          const data = yield api.post(params);
          if (!data || !data["parse"] || !data["parse"].text) {
            return;
          }
          const parsedWiki = (data["parse"].text || "").toString().trim();
          if (parsedWiki === "") {
            removeLoadingNotice();
          } else {
            addParsedWikitext(parsedWiki);
          }
        } catch {
          loadingFailNotice();
        }
      }
    });
    return function mwAddWikiText2(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  const mwAddLuaText = /* @__PURE__ */ function() {
    var _ref2 = _asyncToGenerator(function* (wikiText, pagename, isPreview, callBack) {
      const tempModuleName = "AddText/Temp/Module/Data.lua";
      const moduleCall = {
        wikitext: "#invoke:",
        // 分开来，避免被分到[[:Category:有脚本错误的页面]]
        pagename: "Module:"
      };
      if (wikiText.toString().trim() === "") {
        removeLoadingNotice();
      } else {
        try {
          const params = {
            action: "parse",
            prop: "text",
            format: "json",
            formatversion: "2",
            title: pagename,
            contentmodel: "wikitext",
            templatesandboxtitle: moduleCall.pagename + tempModuleName,
            // 产生临时Lua Module
            templatesandboxtext: "return{\n	main=function()\n		xpcall(function()\n			".concat(wikiText, `
		end,function()end)
		local moduleWikitext=package.loaded["Module:Module wikitext"]
		if moduleWikitext then
			local wikitext=moduleWikitext.main()
			if mw.text.trim(wikitext)~=''then
				return mw.getCurrentFrame():preprocess(moduleWikitext.main())
			end
		end
		return''
	end
}`),
            templatesandboxcontentmodel: "Scribunto",
            templatesandboxcontentformat: "text/plain",
            text: "{{".concat(moduleCall.wikitext).concat(tempModuleName, "|main}}"),
            uselang: getLanguage(),
            useskin: mw.config.get("skin")
          };
          if (isPreview) {
            params.preview = true;
            params.disableeditsection = true;
          }
          const data = yield api.post(params);
          if (!data || !data["parse"] || !data["parse"].text) {
            return;
          }
          const parsedWiki = (data["parse"].text || "").toString().trim();
          if (parsedWiki === "") {
            removeLoadingNotice();
          } else if ($(parsedWiki).find(".scribunto-error").text().search(tempModuleName) < 0) {
            if (callBack && typeof callBack === "function") {
              callBack(parsedWiki);
            } else {
              addParsedWikitext(parsedWiki);
            }
          } else {
            removeLoadingNotice();
          }
        } catch {
          loadingFailNotice();
        }
      }
    });
    return function mwAddLuaText2(_x4, _x5, _x6, _x7) {
      return _ref2.apply(this, arguments);
    };
  }();
  const mwApplyRevision = /* @__PURE__ */ function() {
    var _ref3 = _asyncToGenerator(function* (_revisionId, currentPageName) {
      try {
        const params = {
          // 本请求URL不太可能有长度超长的风险
          action: "parse",
          prop: "wikitext",
          format: "json",
          formatversion: "2",
          // get the original wikitext content of a page
          oldid: mw.config.get("wgRevisionId")
        };
        const data = yield api.get(params);
        if (!data || !data["parse"] || !data["parse"].wikitext) {
          return;
        }
        let pageContent = luaCheck((data["parse"].wikitext || "").toString().trim()) || "";
        pageContent = ($elementExist("#mw-clearyourcache") ? "{{#invoke:Special wikitext/Template|int|clearyourcache}}" : "") + pageContent.toString();
        if (pageContent.toString().trim() === "") {
          removeLoadingNotice();
        } else {
          void mwAddWikiText(pageContent, currentPageName, true);
        }
      } catch {
        removeLoadingNotice();
      }
    });
    return function mwApplyRevision2(_x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
  const mwApplyNotice = /* @__PURE__ */ function() {
    var _ref4 = _asyncToGenerator(function* (currentPageName, pageSubName) {
      try {
        const params = {
          action: "parse",
          prop: "text",
          format: "json",
          formatversion: "2",
          // get the original wikitext content of a page
          title: currentPageName + pageSubName,
          text: "{{#invoke:Special wikitext/Template|getNotices|".concat(currentPageName, "|").concat(pageSubName, "}}"),
          uselang: getLanguage(),
          useskin: mw.config.get("skin")
        };
        const data = yield api.post(params);
        if (!data || !data["parse"] || !data["parse"].text) {
          return;
        }
        const html = data["parse"].text;
        if ($(html.toString()).text().trim() !== "") {
          addParsedWikitext(html);
        }
      } catch {
      }
    });
    return function mwApplyNotice2(_x10, _x11) {
      return _ref4.apply(this, arguments);
    };
  }();
  const wikitextPreviewTestcase = /* @__PURE__ */ function() {
    var _ref5 = _asyncToGenerator(function* (isPreview) {
      if (!needPreview()) {
        return;
      }
      const testcaseList = document.querySelectorAll(".special-wikitext-preview-testcase");
      if (testcaseList.length <= 0) {
        return;
      }
      const testcaseDataList = [];
      let i;
      for (i = 0; i < testcaseList.length; ++i) {
        const testcaseItem = testcaseList[i];
        if (!testcaseItem) {
          continue;
        }
        const codeIt = $(testcaseItem).find(".mw-highlight");
        if (!codeIt.length) {
          continue;
        }
        const [codeIt0] = codeIt;
        if (!codeIt0) {
          continue;
        }
        const codeItClass = $(codeIt0).attr("class");
        if (!codeItClass) {
          continue;
        }
        const [, codeId] = /mw-highlight-lang-(\S+)/.exec(codeItClass) || [];
        const loadIndex = testcaseDataList.length;
        $(testcaseItem).attr("preview-id", loadIndex);
        testcaseDataList[loadIndex] = {
          element: testcaseItem,
          lang: codeId || "",
          code: codeIt.text().toString()
        };
      }
      let packageWikitext = "";
      for (var _i2 = 0, _Object$entries = Object.entries(testcaseDataList); _i2 < _Object$entries.length; _i2++) {
        const [_key, testcaseItem] = _Object$entries[_i2];
        if (testcaseItem.code.trim() === "") {
          continue;
        }
        const itemElement = testcaseItem.element;
        if (["javascript", "js", "css", "json", "text"].includes(testcaseItem.lang.toLowerCase())) {
          const addWiki = luaCheck(testcaseItem.code, testcaseItem.lang);
          if (addWiki.toString().trim() !== "" && itemElement) {
            $(itemElement).prepend(noticeLoading);
            packageWikitext += '<div class="special-wikitext-preview-testcase-'.concat(i, '">\n').concat(addWiki, "\n</div>");
          }
        } else if (["lua", "scribunto"].includes(testcaseItem.lang.toLowerCase())) {
          void mwAddLuaText(testcaseItem.code, mw.config.get("wgPageName"), isPreview, /* @__PURE__ */ (() => {
            return (wikitext) => {
              if (itemElement) {
                $(itemElement).prepend(wikitext);
              }
            };
          })());
        }
      }
      if (packageWikitext.trim() !== "") {
        packageWikitext = '<div class="special-wikitext-preview-testcase-undefined">'.concat(packageWikitext, "</div>");
        try {
          const params = {
            action: "parse",
            prop: "text",
            contentmodel: "wikitext",
            text: packageWikitext,
            format: "json",
            formatversion: "2"
          };
          if (isPreview) {
            params.preview = true;
            params.disableeditsection = true;
          }
          const data = yield api.post(params);
          if (!data || !data["parse"] || !data["parse"].text) {
            return;
          }
          const parsedWiki = (data["parse"].text || "").toString().trim();
          if (parsedWiki !== "") {
            const $parsedElement = $(parsedWiki);
            for (var _i3 = 0, _Object$entries2 = Object.entries(testcaseDataList); _i3 < _Object$entries2.length; _i3++) {
              const [key, testcaseItem] = _Object$entries2[_i3];
              if (testcaseItem && ["javascript", "js", "text", "css", "json"].includes(testcaseItem.lang.toLowerCase())) {
                const checkParseElement = $parsedElement.find(".special-wikitext-preview-testcase-undefined > .special-wikitext-preview-testcase-".concat(key));
                if (checkParseElement.length) {
                  const $addTarget = $(testcaseItem.element).find("#specialwikitext__preview-loading");
                  $addTarget.html(checkParseElement.html());
                  mw.hook("wikipage.content").fire($addTarget);
                }
              }
            }
          }
        } catch {
        }
      }
    });
    return function wikitextPreviewTestcase2(_x12) {
      return _ref5.apply(this, arguments);
    };
  }();
  const mwAddPreview = () => {
    const currentPageName = mw.config.get("wgPageName");
    const $body = $("body");
    if (checkMwConfig("wgPageContentModel", ["javascript", "js", "json", "text", "css", "sanitized-css"])) {
      if ($elementExist(".previewnote")) {
        var _mw$util$getUrl$match, _mw$util$getUrl$match2;
        const pathPath = decodeURI(mw.util.getUrl(currentPageName)).replace(new RegExp("^\\/?".concat((_mw$util$getUrl$match = (_mw$util$getUrl$match2 = mw.util.getUrl("").match(/[a-z]+/)) === null || _mw$util$getUrl$match2 === void 0 ? void 0 : _mw$util$getUrl$match2[0]) !== null && _mw$util$getUrl$match !== void 0 ? _mw$util$getUrl$match : "", "\\/")), "");
        if (pathPath !== currentPageName) {
          return;
        }
        const addWiki = luaCheck();
        if (addWiki.trim()) {
          addLoadingNotice();
          void mwAddWikiText(addWiki, currentPageName, true);
        }
      } else if (!$elementExist(".mw-_addText-content") && checkMwConfig("wgAction", "view")) {
        if (!needPreview()) {
          return;
        }
        if ($elementExist("#mw-clearyourcache")) {
          $body.find("#mw-clearyourcache").html("");
        }
        if (!$elementExist("textarea[name=wpTextbox1]")) {
          addLoadingNotice();
          void mwApplyRevision(mw.config.get("wgRevisionId"), currentPageName);
        }
      } else if ($elementExist("#mw-revision-info") && checkMwConfig("wgAction", "view")) {
        if (!$elementExist("textarea[name=wpTextbox1]")) {
          $body.find("#mw-clearyourcache").html(noticeLoading);
          void mwApplyRevision(mw.config.get("wgRevisionId"), currentPageName);
        }
      } else {
        removeLoadingNotice();
      }
    } else if (checkMwConfig("wgPageContentModel", ["scribunto", "lua"])) {
      if (!needPreview()) {
        return;
      }
      if ($elementExist("textarea[name=wpTextbox1]") && $elementExist("table.diff") && !$elementExist(".previewnote") && !checkMwConfig("wgAction", "view")) {
        $(noticeLoading).insertAfter("#wikiDiff");
        void mwAddLuaText(($body.find("textarea[name=wpTextbox1]").val() || "").toString(), currentPageName, true);
      }
    } else if ($elementExist(".mw-undelete-revision")) {
      if (!needPreview()) {
        return;
      }
      if ($elementExist([".mw-highlight", "pre", ".mw-json"])) {
        const $tryGetWiki = ($body.find("textarea").val() || "").toString();
        let tryAddWiki = luaGetJSONwikitext($tryGetWiki);
        if (tryAddWiki.trim() === "") {
          tryAddWiki = luaGetCSSwikitext($tryGetWiki);
        }
        if (tryAddWiki.trim() !== "") {
          addLoadingNotice();
          void mwAddWikiText(tryAddWiki, mw.config.get("wgRelevantPageName"), true);
        } else if (/module[ _]wikitext.*_addtext/i.test($body.find(".mw-parser-output").text())) {
        }
      }
    } else if (!$elementExist(".mw-editnotice") && checkMwConfig("wgCanonicalNamespace", "special")) {
      const pagename = mw.config.get("wgCanonicalSpecialPageName");
      const pageSubName = mw.config.get("wgPageName").replace(/special:[^/]+/i, "");
      if (pagename !== false && pagename !== null && pagename.toString().trim() !== "") {
        const fullpagename = "".concat(mw.config.get("wgCanonicalNamespace"), ":").concat(pagename);
        void mwApplyNotice(fullpagename, pageSubName);
      }
    } else {
      removeLoadingNotice();
    }
  };
  if (mw.config.get("wgIsSpecialWikitextPreview") !== true) {
    mw.config.set("wgIsSpecialWikitextPreview", true);
    mwAddPreview();
    void wikitextPreviewTestcase(true);
  }
};
$(previewTool);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NwZWNpYWxXaWtpdGV4dC9TcGVjaWFsV2lraXRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2dlbmVyYXRlRWxlbWVudHMudHN4IiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9pMThuLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cbmltcG9ydCB7Z2VuZXJhdGVBcnJheSwgaW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtub3RpY2VGYWlsRWxlbWVudCwgbm90aWNlTG9hZGluZ0VsZW1lbnR9IGZyb20gJy4vbW9kdWxlcy9nZW5lcmF0ZUVsZW1lbnRzJztcblxuLyog6LefW1tNb2R1bGU6U3BlY2lhbCB3aWtpdGV4dF1d5L+d5oyB5LiA6Ie055qE5q616JC944CCICovXG5jb25zdCB3aWtpVGV4dEtleTogc3RyaW5nID0gJ19hZGRUZXh0JztcblxuLy8g5ZCI5bm25aSa5Liqd2lraXRleHTlrZfnrKbkuLLvvIzlubbku6XmjaLooYzliIbpmpRcbmNvbnN0IGx1YUFkZFRleHQgPSAoaW5wdXRTdHI6IHN0cmluZywgbmV3U3RyOiBzdHJpbmcsIF9lc2NhcGU/OiBib29sZWFuKTogc3RyaW5nID0+IHtcblx0bGV0IGlucHV0U3RyaW5nOiBzdHJpbmcgPSBpbnB1dFN0cjtcblx0aWYgKG5ld1N0cikge1xuXHRcdGlmIChpbnB1dFN0cmluZyAhPT0gJycpIHtcblx0XHRcdGlucHV0U3RyaW5nICs9ICdcXG4nO1xuXHRcdH1cblx0XHRsZXQgdGV4dDogc3RyaW5nID0gbmV3U3RyO1xuXHRcdGlmIChfZXNjYXBlKSB7XG5cdFx0XHRjb25zdCBbZXNjYXBlU3RyXSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdGBbJHtKU09OLnN0cmluZ2lmeShcblx0XHRcdFx0XHQvLyBMdWHkuI3mlK/mjIFcXHXjgIFcXHjnmoTot7PohLHnrKblj7fvvJvmjpLpmaTnm7jlhbPovazmjaJcblx0XHRcdFx0XHRuZXdTdHIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXFxcKFt1eF0pL2dpLCAnJDEnKVxuXHRcdFx0XHQpLnJlcGxhY2UoL1xcXFxcXFxcL2csICdcXFxcJyl9XWBcblx0XHRcdCk7XG5cdFx0XHR0ZXh0ID0gZXNjYXBlU3RyO1xuXHRcdH1cblx0XHRpbnB1dFN0cmluZyArPSB0ZXh0O1xuXHR9XG5cdHJldHVybiBpbnB1dFN0cmluZztcbn07XG5cbi8vIOivu+WPlndpa2l0ZXh05a2X56ym5Liy77yM5bm25b+955Wl5rOo6YeK5bC+6YOoXG5jb25zdCBsdWFHZXRTdHJpbmcgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCB0ZXN0U3RyQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSAvW15cXG5dKlxcKlxcLy8uZXhlYyhzdHIpO1xuXHRsZXQgdGVzdFN0cjogc3RyaW5nO1xuXHRpZiAodGVzdFN0ckFycmF5KSB7XG5cdFx0dGVzdFN0ciA9IHRlc3RTdHJBcnJheVswXSB8fCAnJztcblx0XHR0ZXN0U3RyID0gdGVzdFN0ci5zbGljZSgwLCBNYXRoLm1heCgwLCB0ZXN0U3RyLmxlbmd0aCAtIDIpKTtcblx0fSBlbHNlIHtcblx0XHR0ZXN0U3RyID0gc3RyO1xuXHR9XG5cdGNvbnN0IHRyaW1DaGVjazogc3RyaW5nID0gdGVzdFN0ci50cmltKCk7XG5cdGNvbnN0IGZpcnN0Q2hhcjogc3RyaW5nID0gdHJpbUNoZWNrLmNoYXJBdCgwKTtcblx0aWYgKGZpcnN0Q2hhciA9PT0gdHJpbUNoZWNrLmF0KC0xKSAmJiAoZmlyc3RDaGFyID09PSBcIidcIiB8fCBmaXJzdENoYXIgPT09ICdcIicpKSB7XG5cdFx0cmV0dXJuIHRyaW1DaGVjay5zbGljZSgxLCAxICsgdHJpbUNoZWNrLmxlbmd0aCAtIDIpO1xuXHR9XG5cdHJldHVybiB0ZXN0U3RyO1xufTtcblxuLy8g6K+75Y+WQ1NT5LmLYO+8v2FkZFRleHQgIHsgY29udGVudO+8mlwiWFhYXCIgfWDmqKHlvI/nmoTlrZfnrKbkuLJcbmNvbnN0IGx1YUdldENvbnRlbnRUZXh0ID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblx0dHJ5IHtcblx0XHRzdHIucmVwbGFjZShuZXcgUmVnRXhwKGAke3dpa2lUZXh0S2V5fVxcXFxzKlxcXFx7W15jXFxcXH1dKmNvbnRlbnRcXFxccyo6XFxcXHMqW15cXG5dKmAsICdnJyksICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0Y29uc3QgdGVtcFRleHQgPSAoL2NvbnRlbnRcXHMqOlxccypbXlxcbl0qLy5leGVjKHRleHQpIHx8IFsnY29udGVudDonXSlbMF1cblx0XHRcdFx0LnJlcGxhY2UoL15bXFxzO31dK3xbXFxzO31dKyQvZywgJycpXG5cdFx0XHRcdC5yZXBsYWNlKC9cXHMqY29udGVudFxccyo6XFxzKi8sICcnKTtcblx0XHRcdGlmICh3aWtpdGV4dCAhPT0gJycpIHtcblx0XHRcdFx0d2lraXRleHQgKz0gJ1xcbic7XG5cdFx0XHR9XG5cdFx0XHR3aWtpdGV4dCArPSBsdWFHZXRTdHJpbmcodGVtcFRleHQpO1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHRyZXR1cm4gd2lraXRleHQ7XG59O1xuXG4vLyDor7vlj5blr7nosaHlrprkuYnmqKHlvI/kuLpg77y/YWRkVGV4dO+8nVhYWGDmiJZg77y/YWRkVGV4dO+8mlhYWGDmqKHlvI/nmoTlrZfnrKbkuLIgKOazqOmHiuS7peWFqOinkuWtl+espuS7o+abv++8jOmBv+WFjeiiq+aKk+WPlilcbmNvbnN0IGx1YUdldE9ialRleHQgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXHR0cnkge1xuXHRcdHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYCR7d2lraVRleHRLZXl9XFxcXHMqW1xcXFw9Ol1cXFxccypbXlxcbl0qYCwgJ2cnKSwgKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRjb25zdCB0ZW1wVGV4dDogc3RyaW5nID0gdGV4dFxuXHRcdFx0XHQucmVwbGFjZSgvXltcXHM7fV0rfFtcXHM7fV0rJC9nLCAnJylcblx0XHRcdFx0LnJlcGxhY2UobmV3IFJlZ0V4cChgJHt3aWtpVGV4dEtleX1cXFxccypbXFxcXD06XVxcXFxzKmApLCAnJyk7XG5cdFx0XHRpZiAod2lraXRleHQgIT09ICcnKSB7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9ICdcXG4nO1xuXHRcdFx0fVxuXHRcdFx0d2lraXRleHQgKz0gbHVhR2V0U3RyaW5nKHRlbXBUZXh0KTtcblx0XHRcdHJldHVybiB0ZXh0O1xuXHRcdH0pO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0cmV0dXJuIHdpa2l0ZXh0O1xufTtcblxuLy8g5YiG5p6QQ1NT5Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldENTU3dpa2l0ZXh0ID0gKGlucHV0U3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXHRjb25zdCBjc3NUZXh0OiBzdHJpbmcgPVxuXHRcdGlucHV0U3RyIHx8IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudCk/LnZhbHVlIHx8ICcnO1xuXHRpZiAoIWNzc1RleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdC8vIOWMuemFjSDvvL9hZGRUZXh0IHsgY29udGVudO+8mlwiWFhYXCIgfSDmqKHlvI9cblx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCBsdWFHZXRDb250ZW50VGV4dChjc3NUZXh0KSwgdHJ1ZSk7XG5cdC8vIOWQjOaXtuS6puWMuemFjSAvKiDvvL9hZGRUZXh077yaWFhYICovIOaooeW8j1xuXHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIGx1YUdldE9ialRleHQoY3NzVGV4dCksIHRydWUpO1xuXHRyZXR1cm4gd2lraXRleHQ7XG59O1xuXG4vLyDliIbmnpBKYXZhU2NyaXB05Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldEpTd2lraXRleHQgPSAoaW5wdXRTdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cdGNvbnN0IGpzVGV4dDogc3RyaW5nID1cblx0XHRpbnB1dFN0ciB8fFxuXHRcdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykgYXMgSFRNTFRleHRBcmVhRWxlbWVudCk/LnZhbHVlPy50b1N0cmluZygpIHx8XG5cdFx0Jyc7XG5cdGlmICghanNUZXh0LnRyaW0oKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIGx1YUdldE9ialRleHQoanNUZXh0KSwgdHJ1ZSk7XG5cdHJldHVybiB3aWtpdGV4dDtcbn07XG5cbi8vIOWIhuaekEpTT07kuK3nrKblkIjmnaHku7bnmoR3aWtpdGV4dFxuY29uc3QgbHVhR2V0SlNPTndpa2l0ZXh0ID0gKGlucHV0U3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXHRjb25zdCBKU09OVGV4dDogc3RyaW5nID1cblx0XHRpbnB1dFN0ciB8fCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpPy52YWx1ZSB8fCAnJztcblx0aWYgKCFKU09OVGV4dC50cmltKCkpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0dHJ5IHtcblx0XHRjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoSlNPTlRleHQudG9TdHJpbmcoKSk7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoanNvbkRhdGEgYXMgb2JqZWN0KSkge1xuXHRcdFx0Y29uc3QgdiA9IGpzb25EYXRhW2tleV07XG5cdFx0XHRpZiAobmV3IFJlZ0V4cCh3aWtpVGV4dEtleSkudGVzdChrZXkpICYmIHR5cGVvZiB2ID09PSB0eXBlb2YgJycpIHtcblx0XHRcdFx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCB2IGFzIHN0cmluZyk7XG5cdFx0XHR9XG5cdFx0XHQvLyDoi6XmmK/mlbDnu4Tlr7nosaHkvJrlpJrljIXkuIDlsYJcblx0XHRcdGlmICh0eXBlb2YgdiAhPT0gdHlwZW9mICcnKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgcHJvcCBpbiB2KSB7XG5cdFx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHYgYXMgb2JqZWN0LCBwcm9wKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IHRlc3RBcnJWID0gdltwcm9wXTtcblx0XHRcdFx0XHRpZiAobmV3IFJlZ0V4cCh3aWtpVGV4dEtleSkudGVzdChwcm9wKSAmJiB0eXBlb2YgdGVzdEFyclYgPT09IHR5cGVvZiAnJykge1xuXHRcdFx0XHRcdFx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCB0ZXN0QXJyViBhcyBzdHJpbmcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdHJldHVybiB3aWtpdGV4dDtcbn07XG5cbi8vIOWIpOaWreaYr+WQpuS4ukx1YVxuY29uc3QgbHVhQ2hlY2sgPSAoaW5wdXRTdHI/OiBzdHJpbmcsIGNvbnRlbnRNb2RlbD86IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdC8vIOS9v+eUqOmhtemdouWGheWuueaooeWei+adpeWIpOaWreagvOW8j1xuXHRjb250ZW50TW9kZWwgfHw9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpO1xuXHRjb25zdCBjb250ZW50TW9kZWxUb0xvd2VyQ2FzZSA9IGNvbnRlbnRNb2RlbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG5cdGlucHV0U3RyIHx8PSAnJztcblx0Ly8g5qC55o2u5paH5qGj5qC85byP6YCJ55So6YCC5b2T55qE6Kej5p6Q5qih5byPXG5cdHN3aXRjaCAoY29udGVudE1vZGVsVG9Mb3dlckNhc2UpIHtcblx0XHRjYXNlICdqc29uJzpcblx0XHRcdHJldHVybiBsdWFHZXRKU09Od2lraXRleHQoaW5wdXRTdHIpO1xuXHRcdGNhc2UgJ2pzJzpcblx0XHRjYXNlICdqYXZhc2NyaXB0Jzpcblx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdHJldHVybiBsdWFHZXRKU3dpa2l0ZXh0KGlucHV0U3RyKTtcblx0XHRjYXNlICdjc3MnOlxuXHRcdGNhc2UgJ3Nhbml0aXplZC1jc3MnOlxuXHRcdFx0cmV0dXJuIGx1YUdldENTU3dpa2l0ZXh0KGlucHV0U3RyKTtcblx0XHQvLyDoi6XkuI3mmK9qc29u44CBanPjgIFjc3PliJnov5Tlm57nqbrlrZfnrKbkuLJcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICcnO1xuXHR9XG59O1xuLy8g5pys6KGM5Lul5LiK55qE566X5rOV6K+36LefW1tNb2R1bGU6U3BlY2lhbCB3aWtpdGV4dF1d5L+d5oyB5LiA6Ie044CCXG5cbi8qIOeoi+W6j+S4u+imgemDqOWIhiAqL1xuY29uc3QgcHJldmlld1Rvb2wgPSAoKTogdm9pZCA9PiB7XG5cdC8vIOWQhOexu+aPkOekuuaWh+Wtl1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnU3BlY2lhbFdpa2l0ZXh0LzEuMScpO1xuXHRjb25zdCAkbm90aWNlQWRkVGV4dDogc3RyaW5nID0gJ3t7U3BlY2lhbF93aWtpdGV4dC9ub3RpY2V9fSc7XG5cdC8vIHt7UXVvdGUgYm94IHxxdW90ZSAgPSAte3poLWhhbnM66aKE6KeI5Yqg6L295LitO3poLWhhbnQ66aCQ6Ka96LyJ5YWl5LitO30t4oCm4oCmIHx3aWR0aCAgPSA1MCUgfGFsaWduICA9IGNlbnRlcn19XG5cdGNvbnN0IG5vdGljZUxvYWRpbmcgPSBub3RpY2VMb2FkaW5nRWxlbWVudCgpO1xuXHQvLyBbW0ZpbGU6R25vbWUtZGlhbG9nLXdhcm5pbmcyLnN2Z3wzMnB4XV1cblx0Ly8gLXt6aC1oYW5zOumihOiniOWKoOi9veWksei0pTt6aC1oYW50OumgkOimvei8ieWFpeWksei0pTt9LVxuXHRjb25zdCBub3RpY2VGYWlsID0gbm90aWNlRmFpbEVsZW1lbnQoKTtcblx0Ly8g5qOA5p+l5a+55bqUc2VsZWN0b3LnmoTnvZHpobXlr7nosaHmmK/lkKblrZjlnKhcblx0Y29uc3QgJGVsZW1lbnRFeGlzdCA9IChzZWxlY3RvcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdFx0Y29uc3Qgc2VsZWN0b3JBcnJheTogc3RyaW5nW10gPSBnZW5lcmF0ZUFycmF5KHNlbGVjdG9ycykgYXMgc3RyaW5nW107XG5cdFx0bGV0IGVsZUNvdW50OiBudW1iZXIgPSAwO1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdGZvciAoY29uc3Qgc2VsZWN0b3Igb2Ygc2VsZWN0b3JBcnJheSkge1xuXHRcdFx0Y29uc3QgJHNlbGVjdG9yOiBKUXVlcnkgPSAkYm9keS5maW5kKHNlbGVjdG9yKTtcblx0XHRcdGVsZUNvdW50ICs9ICRzZWxlY3Rvci5sZW5ndGg7XG5cdFx0fVxuXHRcdHJldHVybiBlbGVDb3VudCA+IDA7XG5cdH07XG5cblx0Ly8g5qOA5p+lTWVkaWFXaWtp55qE6K6+572uXG5cdGNvbnN0IGNoZWNrTXdDb25maWcgPSAoY2hlY2tUYXJnZXQ6IHN0cmluZywgbXdDb25maWdzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRcdGxldCBtd0NvbmZpZ0RhdGEgPSBtdy5jb25maWcuZ2V0KGNoZWNrVGFyZ2V0KTtcblx0XHRpZiAoIW13Q29uZmlnRGF0YSB8fCBTdHJpbmcobXdDb25maWdEYXRhKS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdG13Q29uZmlnRGF0YSA9IFN0cmluZyhtd0NvbmZpZ0RhdGEpLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgbXdDb25maWdBcnJheTogc3RyaW5nW10gPSBnZW5lcmF0ZUFycmF5KG13Q29uZmlncykgYXMgc3RyaW5nW107XG5cdFx0cmV0dXJuIG13Q29uZmlnQXJyYXkuaW5jbHVkZXMobXdDb25maWdEYXRhIGFzIHN0cmluZyk7XG5cdH07XG5cblx0Y29uc3QgZ2V0TGFuZ3VhZ2UgPSAoKTogc3RyaW5nID0+IHtcblx0XHRjb25zdCBsYW5nOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpO1xuXHRcdGlmIChsYW5nLmluY2x1ZGVzKCd6aCcpKSB7XG5cdFx0XHRyZXR1cm4gbXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpIGFzIHN0cmluZztcblx0XHR9XG5cdFx0cmV0dXJuIGxhbmc7XG5cdH07XG5cblx0Ly8g5bCG6Kej5p6Q5ZCO55qEd2lraXRleHTliqDlhaXpobXpnaLkuK1cblx0Y29uc3QgYWRkUGFyc2VkV2lraXRleHQgPSAocGFyc2VkV2lraXRleHQ6IHN0cmluZyB8IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGh0bWxPYmogPSAkKCkuaHRtbChwYXJzZWRXaWtpdGV4dCk7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0aWYgKCRlbGVtZW50RXhpc3QoJyNzcGVjaWFsd2lraXRleHRfX3ByZXZpZXctbG9hZGluZycpKSB7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3NwZWNpYWx3aWtpdGV4dF9fcHJldmlldy1sb2FkaW5nJyk7XG5cdFx0XHQkZWxlbWVudC5odG1sKHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRlbGVtZW50KTtcblx0XHR9IGVsc2UgaWYgKCRlbGVtZW50RXhpc3QoJy5kaWZmLWN1cnJlbnR2ZXJzaW9uLXRpdGxlJykpIHtcblx0XHRcdCRib2R5LmZpbmQoJy5kaWZmLWN1cnJlbnR2ZXJzaW9uLXRpdGxlJykuYXBwZW5kKCRodG1sT2JqKTtcblx0XHR9IGVsc2UgaWYgKCRlbGVtZW50RXhpc3QoJy5wcmV2aWV3bm90ZScpKSB7XG5cdFx0XHQkYm9keS5maW5kKCcucHJldmlld25vdGUnKS5hcHBlbmQoJGh0bWxPYmopO1xuXHRcdH0gZWxzZSBpZiAoJGVsZW1lbnRFeGlzdCgnLm13LXVuZGVsZXRlLXJldmlzaW9uJykpIHtcblx0XHRcdCRib2R5LmZpbmQoJy5tdy11bmRlbGV0ZS1yZXZpc2lvbicpLmFwcGVuZCgkaHRtbE9iaik7XG5cdFx0fSBlbHNlIGlmICgkZWxlbWVudEV4aXN0KCcjbXctY29udGVudC10ZXh0JykpIHtcblx0XHRcdCRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKS5hcHBlbmQoJGh0bWxPYmopO1xuXHRcdH1cblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkaHRtbE9iaik7XG5cdH07XG5cblx0Ly8g6Iul572R6aG15a+56LGh5a2Y5Zyo77yM5YiZ5pS55Yqo5YW2aHRtbOWGheWuuVxuXHRjb25zdCBzZXRIdG1sID0gKHNlbGVjdG9yOiBzdHJpbmcsIGh0bWxDb250ZW50OiBzdHJpbmcgfCBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRcdGlmICgkZWxlbWVudEV4aXN0KHNlbGVjdG9yKSkge1xuXHRcdFx0JChzZWxlY3RvcikuaHRtbChodG1sQ29udGVudCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIOWKoOWFpeKAnFvovb3lhaXkuK1d4oCd55qE5o+Q56S6XG5cdGNvbnN0IGFkZExvYWRpbmdOb3RpY2UgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKCRub3RpY2VBZGRUZXh0ICYmIG5vdGljZUxvYWRpbmcpIHtcblx0XHRcdGFkZFBhcnNlZFdpa2l0ZXh0KG5vdGljZUxvYWRpbmcgYXMgSFRNTEVsZW1lbnQpO1xuXHRcdH1cblx0fTtcblxuXHQvLyDovb3lhaXplJnor6/nmoTmj5DnpLpcblx0Y29uc3QgbG9hZGluZ0ZhaWxOb3RpY2UgPSAoKTogdm9pZCA9PiB7XG5cdFx0c2V0SHRtbCgnI3NwZWNpYWx3aWtpdGV4dF9fcHJldmlldy1sb2FkaW5nLWNvbnRlbnQnLCBub3RpY2VGYWlsIGFzIEhUTUxFbGVtZW50KTtcblx0fTtcblxuXHQvLyDnp7vpmaTigJxb6L295YWl5LitXeKAneeahOaPkOekulxuXHRjb25zdCByZW1vdmVMb2FkaW5nTm90aWNlID0gKCk6IHZvaWQgPT4ge1xuXHRcdHNldEh0bWwoJyNzcGVjaWFsd2lraXRleHRfX3ByZXZpZXctbG9hZGluZycsICcnKTtcblx0fTtcblxuXHQvLyDmo4Dmn6XmmK/lkKbmnInpooTop4jnmoTlv4XopoHmgKdcblx0Y29uc3QgbmVlZFByZXZpZXcgPSAoKTogYm9vbGVhbiA9PiB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwuc2VhcmNoKCdfYWRkVGV4dCcpID4gLTE7XG5cdH07XG5cblx0Ly8g5Yqg5YWl6aKE6KeI5YaF5a65XG5cdGNvbnN0IG13QWRkV2lraVRleHQgPSBhc3luYyAod2lraVRleHQ6IHN0cmluZywgcGFnZW5hbWU6IHN0cmluZywgaXNQcmV2aWV3OiBib29sZWFuKSA9PiB7XG5cdFx0aWYgKHdpa2lUZXh0LnRvU3RyaW5nKCkudHJpbSgpID09PSAnJykge1xuXHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0Ly8g6YG/5YWN5YaF5a656YeN5aSNXG5cdFx0XHRcdHRpdGxlOiBwYWdlbmFtZSxcblx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHR0ZXh0OiB3aWtpVGV4dCxcblx0XHRcdFx0dXNlbGFuZzogZ2V0TGFuZ3VhZ2UoKSxcblx0XHRcdFx0dXNlc2tpbjogbXcuY29uZmlnLmdldCgnc2tpbicpLFxuXHRcdFx0fTtcblx0XHRcdGlmIChpc1ByZXZpZXcpIHtcblx0XHRcdFx0cGFyYW1zLnByZXZpZXcgPSB0cnVlO1xuXHRcdFx0XHRwYXJhbXMuZGlzYWJsZWVkaXRzZWN0aW9uID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXHRcdFx0XHRpZiAoIWRhdGEgfHwgIWRhdGFbJ3BhcnNlJ10gfHwgIWRhdGFbJ3BhcnNlJ10udGV4dCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwYXJzZWRXaWtpID0gKChkYXRhWydwYXJzZSddLnRleHQgYXMgc3RyaW5nIHwgbnVsbCkgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuXHRcdFx0XHRpZiAocGFyc2VkV2lraSA9PT0gJycpIHtcblx0XHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQocGFyc2VkV2lraSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRsb2FkaW5nRmFpbE5vdGljZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvLyDliqDlhaXpooTop4jnmoRMdWHlhoXlrrlcblx0Y29uc3QgbXdBZGRMdWFUZXh0ID0gYXN5bmMgKFxuXHRcdHdpa2lUZXh0OiBzdHJpbmcsXG5cdFx0cGFnZW5hbWU6IHN0cmluZyxcblx0XHRpc1ByZXZpZXc6IGJvb2xlYW4sXG5cdFx0Y2FsbEJhY2s/OiAoYXJnMDogc3RyaW5nKSA9PiBKUXVlcnkgfCBIVE1MRWxlbWVudCB8IHZvaWRcblx0KSA9PiB7XG5cdFx0Y29uc3QgdGVtcE1vZHVsZU5hbWU6IHN0cmluZyA9ICdBZGRUZXh0L1RlbXAvTW9kdWxlL0RhdGEubHVhJztcblx0XHRjb25zdCBtb2R1bGVDYWxsOiB7XG5cdFx0XHR3aWtpdGV4dDogc3RyaW5nO1xuXHRcdFx0cGFnZW5hbWU6IHN0cmluZztcblx0XHR9ID0ge1xuXHRcdFx0d2lraXRleHQ6ICcjaW52b2tlOicsXG5cdFx0XHQvLyDliIblvIDmnaXvvIzpgb/lhY3ooqvliIbliLBbWzpDYXRlZ29yeTrmnInohJrmnKzplJnor6/nmoTpobXpnaJdXVxuXHRcdFx0cGFnZW5hbWU6ICdNb2R1bGU6Jyxcblx0XHR9O1xuXHRcdGlmICh3aWtpVGV4dC50b1N0cmluZygpLnRyaW0oKSA9PT0gJycpIHtcblx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHR0aXRsZTogcGFnZW5hbWUsXG5cdFx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHRcdHRlbXBsYXRlc2FuZGJveHRpdGxlOiBtb2R1bGVDYWxsLnBhZ2VuYW1lICsgdGVtcE1vZHVsZU5hbWUsXG5cdFx0XHRcdFx0Ly8g5Lqn55Sf5Li05pe2THVhIE1vZHVsZVxuXHRcdFx0XHRcdHRlbXBsYXRlc2FuZGJveHRleHQ6IGByZXR1cm57XFxuXFx0bWFpbj1mdW5jdGlvbigpXFxuXFx0XFx0eHBjYWxsKGZ1bmN0aW9uKClcXG5cXHRcXHRcXHQke3dpa2lUZXh0fVxcblxcdFxcdGVuZCxmdW5jdGlvbigpZW5kKVxcblxcdFxcdGxvY2FsIG1vZHVsZVdpa2l0ZXh0PXBhY2thZ2UubG9hZGVkW1wiTW9kdWxlOk1vZHVsZSB3aWtpdGV4dFwiXVxcblxcdFxcdGlmIG1vZHVsZVdpa2l0ZXh0IHRoZW5cXG5cXHRcXHRcXHRsb2NhbCB3aWtpdGV4dD1tb2R1bGVXaWtpdGV4dC5tYWluKClcXG5cXHRcXHRcXHRpZiBtdy50ZXh0LnRyaW0od2lraXRleHQpfj0nJ3RoZW5cXG5cXHRcXHRcXHRcXHRyZXR1cm4gbXcuZ2V0Q3VycmVudEZyYW1lKCk6cHJlcHJvY2Vzcyhtb2R1bGVXaWtpdGV4dC5tYWluKCkpXFxuXFx0XFx0XFx0ZW5kXFxuXFx0XFx0ZW5kXFxuXFx0XFx0cmV0dXJuJydcXG5cXHRlbmRcXG59YCxcblx0XHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3hjb250ZW50bW9kZWw6ICdTY3JpYnVudG8nLFxuXHRcdFx0XHRcdHRlbXBsYXRlc2FuZGJveGNvbnRlbnRmb3JtYXQ6ICd0ZXh0L3BsYWluJyxcblx0XHRcdFx0XHR0ZXh0OiBge3ske21vZHVsZUNhbGwud2lraXRleHR9JHt0ZW1wTW9kdWxlTmFtZX18bWFpbn19YCxcblx0XHRcdFx0XHR1c2VsYW5nOiBnZXRMYW5ndWFnZSgpLFxuXHRcdFx0XHRcdHVzZXNraW46IG13LmNvbmZpZy5nZXQoJ3NraW4nKSxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKGlzUHJldmlldykge1xuXHRcdFx0XHRcdHBhcmFtcy5wcmV2aWV3ID0gdHJ1ZTtcblx0XHRcdFx0XHRwYXJhbXMuZGlzYWJsZWVkaXRzZWN0aW9uID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblx0XHRcdFx0aWYgKCFkYXRhIHx8ICFkYXRhWydwYXJzZSddIHx8ICFkYXRhWydwYXJzZSddLnRleHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFyc2VkV2lraSA9ICgoZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZyB8IG51bGwpIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdFx0aWYgKHBhcnNlZFdpa2kgPT09ICcnKSB7XG5cdFx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0XHRcdC8vIOiLpeWHuumUmeWcqOi/meS4quS4tOaXtuaooeWdl+S4reWImeWPlua2iFxuXHRcdFx0XHR9IGVsc2UgaWYgKCQocGFyc2VkV2lraSkuZmluZCgnLnNjcmlidW50by1lcnJvcicpLnRleHQoKS5zZWFyY2godGVtcE1vZHVsZU5hbWUpIDwgMCkge1xuXHRcdFx0XHRcdGlmIChjYWxsQmFjayAmJiB0eXBlb2YgY2FsbEJhY2sgPT09IHR5cGVvZiAoKCk6IHZvaWQgPT4ge30pKSB7XG5cdFx0XHRcdFx0XHRjYWxsQmFjayhwYXJzZWRXaWtpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQocGFyc2VkV2lraSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdGxvYWRpbmdGYWlsTm90aWNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8vIOS7jumhtemdouW9k+WJjeWOhuWPsueJiOacrOWPluWHuiBfYWRkVGV4dFxuXHRjb25zdCBtd0FwcGx5UmV2aXNpb24gPSBhc3luYyAoX3JldmlzaW9uSWQ6IG51bWJlciwgY3VycmVudFBhZ2VOYW1lOiBzdHJpbmcpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0Ly8g5pys6K+35rGCVVJM5LiN5aSq5Y+v6IO95pyJ6ZW/5bqm6LaF6ZW/55qE6aOO6ZmpXG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0cHJvcDogJ3dpa2l0ZXh0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0Ly8gZ2V0IHRoZSBvcmlnaW5hbCB3aWtpdGV4dCBjb250ZW50IG9mIGEgcGFnZVxuXHRcdFx0XHRvbGRpZDogbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyksXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTsgLy8g6Iul5Y+W5b6XIF9hZGRUZXh0IOWImeaYvuekuumihOiniFxuXHRcdFx0aWYgKCFkYXRhIHx8ICFkYXRhWydwYXJzZSddIHx8ICFkYXRhWydwYXJzZSddLndpa2l0ZXh0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCBwYWdlQ29udGVudDogc3RyaW5nID1cblx0XHRcdFx0bHVhQ2hlY2soKChkYXRhWydwYXJzZSddLndpa2l0ZXh0IGFzIHN0cmluZyB8IG51bGwpIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKSkgfHwgJyc7XG5cdFx0XHRwYWdlQ29udGVudCA9XG5cdFx0XHRcdCgkZWxlbWVudEV4aXN0KCcjbXctY2xlYXJ5b3VyY2FjaGUnKVxuXHRcdFx0XHRcdD8gJ3t7I2ludm9rZTpTcGVjaWFsIHdpa2l0ZXh0L1RlbXBsYXRlfGludHxjbGVhcnlvdXJjYWNoZX19J1xuXHRcdFx0XHRcdDogJycpICsgcGFnZUNvbnRlbnQudG9TdHJpbmcoKTtcblx0XHRcdGlmIChwYWdlQ29udGVudC50b1N0cmluZygpLnRyaW0oKSA9PT0gJycpIHtcblx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dm9pZCBtd0FkZFdpa2lUZXh0KHBhZ2VDb250ZW50LCBjdXJyZW50UGFnZU5hbWUsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdH1cblx0fTtcblxuXHQvLyDliqDlhaXnvJbovpHmj5DnpLrvvIjoi6XlrZjlnKjvvIlcblx0Y29uc3QgbXdBcHBseU5vdGljZSA9IGFzeW5jIChjdXJyZW50UGFnZU5hbWU6IHN0cmluZywgcGFnZVN1Yk5hbWU6IHN0cmluZykgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0Ly8gZ2V0IHRoZSBvcmlnaW5hbCB3aWtpdGV4dCBjb250ZW50IG9mIGEgcGFnZVxuXHRcdFx0XHR0aXRsZTogY3VycmVudFBhZ2VOYW1lICsgcGFnZVN1Yk5hbWUsXG5cdFx0XHRcdHRleHQ6IGB7eyNpbnZva2U6U3BlY2lhbCB3aWtpdGV4dC9UZW1wbGF0ZXxnZXROb3RpY2VzfCR7Y3VycmVudFBhZ2VOYW1lfXwke3BhZ2VTdWJOYW1lfX19YCxcblx0XHRcdFx0dXNlbGFuZzogZ2V0TGFuZ3VhZ2UoKSxcblx0XHRcdFx0dXNlc2tpbjogbXcuY29uZmlnLmdldCgnc2tpbicpLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXHRcdFx0aWYgKCFkYXRhIHx8ICFkYXRhWydwYXJzZSddIHx8ICFkYXRhWydwYXJzZSddLnRleHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgaHRtbDogc3RyaW5nID0gZGF0YVsncGFyc2UnXS50ZXh0O1xuXHRcdFx0aWYgKCQoaHRtbC50b1N0cmluZygpKS50ZXh0KCkudHJpbSgpICE9PSAnJykge1xuXHRcdFx0XHRhZGRQYXJzZWRXaWtpdGV4dChodG1sKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH07XG5cblx0Lyog5rWL6K+V5qC35L6LICovXG5cdC8vIOacrOiEmuacrOeahFRlc3RjYXNl5qih5byPXG5cdGNvbnN0IHdpa2l0ZXh0UHJldmlld1Rlc3RjYXNlID0gYXN5bmMgKGlzUHJldmlldzogYm9vbGVhbikgPT4ge1xuXHRcdC8vIOayoeacieWPr+mihOiniOWFg+e0oO+8jOmAgOWHuuOAglxuXHRcdGlmICghbmVlZFByZXZpZXcoKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB0ZXN0Y2FzZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlJyk7XG5cdFx0Ly8g6Iul6aG16Z2i5Lit5rKh5pyJVGVzdGNhc2XvvIzpgIDlh7rjgIJcblx0XHRpZiAodGVzdGNhc2VMaXN0Lmxlbmd0aCA8PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIOaUtumbhuS9jeS6jumhtemdouS4reeahFRlc3RjYXNl6aKE6KeI5YWD57SgXG5cdFx0Y29uc3QgdGVzdGNhc2VEYXRhTGlzdDoge1xuXHRcdFx0ZWxlbWVudDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cdFx0XHRsYW5nOiBzdHJpbmc7XG5cdFx0XHRjb2RlOiBzdHJpbmc7XG5cdFx0fVtdID0gW107XG5cdFx0bGV0IGk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRlc3RjYXNlTGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0Y29uc3QgdGVzdGNhc2VJdGVtOiBFbGVtZW50IHwgdW5kZWZpbmVkID0gdGVzdGNhc2VMaXN0W2ldO1xuXHRcdFx0aWYgKCF0ZXN0Y2FzZUl0ZW0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjb2RlSXQ6IEpRdWVyeSA9ICQodGVzdGNhc2VJdGVtIGFzIEhUTUxFbGVtZW50KS5maW5kKCcubXctaGlnaGxpZ2h0Jyk7XG5cdFx0XHRpZiAoIWNvZGVJdC5sZW5ndGgpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbY29kZUl0MF0gPSBjb2RlSXQ7XG5cdFx0XHRpZiAoIWNvZGVJdDApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjb2RlSXRDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkID0gJChjb2RlSXQwKS5hdHRyKCdjbGFzcycpO1xuXHRcdFx0aWYgKCFjb2RlSXRDbGFzcykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgWywgY29kZUlkXSA9IC9tdy1oaWdobGlnaHQtbGFuZy0oXFxTKykvLmV4ZWMoY29kZUl0Q2xhc3MpIHx8IFtdO1xuXHRcdFx0Y29uc3QgbG9hZEluZGV4OiBudW1iZXIgPSB0ZXN0Y2FzZURhdGFMaXN0Lmxlbmd0aDtcblx0XHRcdCQodGVzdGNhc2VJdGVtIGFzIEhUTUxFbGVtZW50KS5hdHRyKCdwcmV2aWV3LWlkJywgbG9hZEluZGV4KTtcblx0XHRcdHRlc3RjYXNlRGF0YUxpc3RbbG9hZEluZGV4XSA9IHtcblx0XHRcdFx0ZWxlbWVudDogdGVzdGNhc2VJdGVtIGFzIEhUTUxFbGVtZW50LFxuXHRcdFx0XHRsYW5nOiBjb2RlSWQgfHwgJycsXG5cdFx0XHRcdGNvZGU6IGNvZGVJdC50ZXh0KCkudG9TdHJpbmcoKSxcblx0XHRcdH07IC8vIFJlcGxhY2UgYHRlc3RjYXNlRGF0YUxpc3QucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0fVxuXG5cdFx0Ly8g5pW055CG6aG16Z2i5Lit55qEVGVzdGNhc2XpooTop4jlhYPntKDvvIzlubbmlL7nva7igJxb6L295YWl5LitXeKAnea2iOaBr1xuXHRcdGxldCBwYWNrYWdlV2lraXRleHQgPSAnJztcblx0XHRmb3IgKGNvbnN0IFtfa2V5LCB0ZXN0Y2FzZUl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHRlc3RjYXNlRGF0YUxpc3QpKSB7XG5cdFx0XHRpZiAodGVzdGNhc2VJdGVtLmNvZGUudHJpbSgpID09PSAnJykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGl0ZW1FbGVtZW50OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9IHRlc3RjYXNlSXRlbS5lbGVtZW50O1xuXHRcdFx0aWYgKFsnamF2YXNjcmlwdCcsICdqcycsICdjc3MnLCAnanNvbicsICd0ZXh0J10uaW5jbHVkZXModGVzdGNhc2VJdGVtLmxhbmcudG9Mb3dlckNhc2UoKSkpIHtcblx0XHRcdFx0Y29uc3QgYWRkV2lraTogc3RyaW5nID0gbHVhQ2hlY2sodGVzdGNhc2VJdGVtLmNvZGUsIHRlc3RjYXNlSXRlbS5sYW5nKTtcblx0XHRcdFx0aWYgKGFkZFdpa2kudG9TdHJpbmcoKS50cmltKCkgIT09ICcnICYmIGl0ZW1FbGVtZW50KSB7XG5cdFx0XHRcdFx0Ly8g6Iul6Kej5p6Q57uT5p6c6Z2e56m65omN5pS+572u6aKE6KeIXG5cdFx0XHRcdFx0JChpdGVtRWxlbWVudCkucHJlcGVuZChub3RpY2VMb2FkaW5nKTtcblx0XHRcdFx0XHRwYWNrYWdlV2lraXRleHQgKz0gYDxkaXYgY2xhc3M9XCJzcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtJHtpfVwiPlxcbiR7YWRkV2lraX1cXG48L2Rpdj5gO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKFsnbHVhJywgJ3NjcmlidW50byddLmluY2x1ZGVzKHRlc3RjYXNlSXRlbS5sYW5nLnRvTG93ZXJDYXNlKCkpKSB7XG5cdFx0XHRcdHZvaWQgbXdBZGRMdWFUZXh0KFxuXHRcdFx0XHRcdHRlc3RjYXNlSXRlbS5jb2RlLFxuXHRcdFx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdFx0XHRpc1ByZXZpZXcsXG5cdFx0XHRcdFx0KCgpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAod2lraXRleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbUVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdFx0XHQkKGl0ZW1FbGVtZW50KS5wcmVwZW5kKHdpa2l0ZXh0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9KSgpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8g5bCG5pW055CG5a6M55qEVGVzdGNhc2XpooTop4jlhYPntKDnu5/kuIDlj5HpgIFBUEnor7fmsYLvvIzlubblsIbov5Tlm57nu5PmnpzliIblj5HliLDlkIRUZXN0Y2FzZVxuXHRcdGlmIChwYWNrYWdlV2lraXRleHQudHJpbSgpICE9PSAnJykge1xuXHRcdFx0cGFja2FnZVdpa2l0ZXh0ID0gYDxkaXYgY2xhc3M9XCJzcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtdW5kZWZpbmVkXCI+JHtwYWNrYWdlV2lraXRleHR9PC9kaXY+YDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdFx0dGV4dDogcGFja2FnZVdpa2l0ZXh0LFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKGlzUHJldmlldykge1xuXHRcdFx0XHRcdHBhcmFtcy5wcmV2aWV3ID0gdHJ1ZTtcblx0XHRcdFx0XHRwYXJhbXMuZGlzYWJsZWVkaXRzZWN0aW9uID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblx0XHRcdFx0aWYgKCFkYXRhIHx8ICFkYXRhWydwYXJzZSddIHx8ICFkYXRhWydwYXJzZSddLnRleHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFyc2VkV2lraSA9ICgoZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZyB8IG51bGwpIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdFx0aWYgKHBhcnNlZFdpa2kgIT09ICcnKSB7XG5cdFx0XHRcdFx0Y29uc3QgJHBhcnNlZEVsZW1lbnQ6IEpRdWVyeSA9ICQocGFyc2VkV2lraSk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBba2V5LCB0ZXN0Y2FzZUl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHRlc3RjYXNlRGF0YUxpc3QpKSB7XG5cdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdHRlc3RjYXNlSXRlbSAmJlxuXHRcdFx0XHRcdFx0XHRbJ2phdmFzY3JpcHQnLCAnanMnLCAndGV4dCcsICdjc3MnLCAnanNvbiddLmluY2x1ZGVzKHRlc3RjYXNlSXRlbS5sYW5nLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgY2hlY2tQYXJzZUVsZW1lbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkcGFyc2VkRWxlbWVudC5maW5kKFxuXHRcdFx0XHRcdFx0XHRcdGAuc3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLXVuZGVmaW5lZCA+IC5zcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtJHtrZXl9YFxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY2hlY2tQYXJzZUVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGFkZFRhcmdldDogSlF1ZXJ5ID0gJChcblx0XHRcdFx0XHRcdFx0XHRcdHRlc3RjYXNlSXRlbS5lbGVtZW50IGFzIE5vbk51bGxhYmxlPHR5cGVvZiB0ZXN0Y2FzZUl0ZW0uZWxlbWVudD5cblx0XHRcdFx0XHRcdFx0XHQpLmZpbmQoJyNzcGVjaWFsd2lraXRleHRfX3ByZXZpZXctbG9hZGluZycpO1xuXHRcdFx0XHRcdFx0XHRcdCRhZGRUYXJnZXQuaHRtbChjaGVja1BhcnNlRWxlbWVudC5odG1sKCkpO1xuXHRcdFx0XHRcdFx0XHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRhZGRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9O1xuXG5cdC8qIOeoi+W6j+i/m+WFpeeCuSAqL1xuXHQvLyDnu5npobXpnaLmt7vliqDpooTop4hcblx0Y29uc3QgbXdBZGRQcmV2aWV3ID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGN1cnJlbnRQYWdlTmFtZTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdC8vIOmihOiniOaooeW8j+WPqumAgueUqOS6juS7peS4i+mhtemdouWGheWuueaooeWei1xuXHRcdGlmIChjaGVja013Q29uZmlnKCd3Z1BhZ2VDb250ZW50TW9kZWwnLCBbJ2phdmFzY3JpcHQnLCAnanMnLCAnanNvbicsICd0ZXh0JywgJ2NzcycsICdzYW5pdGl6ZWQtY3NzJ10pKSB7XG5cdFx0XHQvLyDmqKHlvI8x77ya6aG16Z2i6aKE6KeIXG5cdFx0XHRpZiAoJGVsZW1lbnRFeGlzdCgnLnByZXZpZXdub3RlJykpIHtcblx0XHRcdFx0Ly8g5qOA5p+l5piv5ZCm5Li66aKE6KeI5qih5byPXG5cdFx0XHRcdC8vIOmihOiniOacieWPr+iDveaYr+WcqOmihOiniOWFtuS7luadoeebrlxuXHRcdFx0XHRjb25zdCBwYXRoUGF0aDogc3RyaW5nID0gZGVjb2RlVVJJKG13LnV0aWwuZ2V0VXJsKGN1cnJlbnRQYWdlTmFtZSkpLnJlcGxhY2UoXG5cdFx0XHRcdFx0bmV3IFJlZ0V4cChgXlxcXFwvPyR7bXcudXRpbC5nZXRVcmwoJycpLm1hdGNoKC9bYS16XSsvKT8uWzBdID8/ICcnfVxcXFwvYCksXG5cdFx0XHRcdFx0Jydcblx0XHRcdFx0KTtcblxuXHRcdFx0XHQvLyDoi6XpooTop4jnmoTpobXpnaLlubbpnZ7mnKzouqvvvIzliJnkuI3mmL7npLrpooTop4hcblx0XHRcdFx0aWYgKHBhdGhQYXRoICE9PSBjdXJyZW50UGFnZU5hbWUpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBhZGRXaWtpOiBzdHJpbmcgPSBsdWFDaGVjaygpO1xuXHRcdFx0XHRpZiAoYWRkV2lraS50cmltKCkpIHtcblx0XHRcdFx0XHQvLyDoi6Xop6PmnpDnu5PmnpzpnZ7nqbrmiY3mlL7nva7pooTop4hcblx0XHRcdFx0XHRhZGRMb2FkaW5nTm90aWNlKCk7IC8vIOaUvue9ruaPkOekuu+8jOaPkOekuuS9v+eUqOiAheetieW+hUFKQVhcblx0XHRcdFx0XHR2b2lkIG13QWRkV2lraVRleHQoYWRkV2lraSwgY3VycmVudFBhZ2VOYW1lLCB0cnVlKTsgLy8g6Iul5Y+W5b6XIF9hZGRUZXh0IOWImeaYvuekuumihOiniFxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCEkZWxlbWVudEV4aXN0KCcubXctX2FkZFRleHQtY29udGVudCcpICYmIGNoZWNrTXdDb25maWcoJ3dnQWN0aW9uJywgJ3ZpZXcnKSkge1xuXHRcdFx0XHQvLyDmqKHlvI8y77ya5LiN5pSv5oyB5pi+56S655qE54m55q6K6aG16Z2iXG5cdFx0XHRcdC8vIOe7j+afpe+8jOS4jeatouaYr+aooeadv+agt+W8j++8jOaJgOacieacquW1jOWFpScjbXctY2xlYXJ5b3VyY2FjaGUn55qE6aG16Z2i55qG5peg5rOV5q2j5bi45pi+56S6XG5cdFx0XHRcdGlmICghbmVlZFByZXZpZXcoKSkge1xuXHRcdFx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCRlbGVtZW50RXhpc3QoJyNtdy1jbGVhcnlvdXJjYWNoZScpKSB7XG5cdFx0XHRcdFx0Ly8g6Iul5bey5pyJI213LWNsZWFyeW91cmNhY2hl5YiZ5YWI5riF5o6J77yM5ZCm5YiZ5Lya5Ye6546w5Lik5LiqTWVkaWFXaWtpOkNsZWFyeW91cmNhY2hlXG5cdFx0XHRcdFx0JGJvZHkuZmluZCgnI213LWNsZWFyeW91cmNhY2hlJykuaHRtbCgnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCEkZWxlbWVudEV4aXN0KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykpIHtcblx0XHRcdFx0XHQvLyDpnZ7nvJbovpHmqKHlvI/miY3miafooYwgKOmihOiniOS9v+eUqOS4iuaWueeahGlm5Yy65Z2XKVxuXHRcdFx0XHRcdGFkZExvYWRpbmdOb3RpY2UoKTsgLy8g5pS+572u5o+Q56S677yM5o+Q56S65L2/55So6ICF562J5b6FQUpBWFxuXHRcdFx0XHRcdHZvaWQgbXdBcHBseVJldmlzaW9uKG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpLCBjdXJyZW50UGFnZU5hbWUpOyAvLyDkuLrkuoborqnljoblj7LniYjmnKzmraPluLjmmL7npLrvvIzkvb/nlKh3Z1JldmlzaW9uSWTlj5blvpflhoXlrrlcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICgkZWxlbWVudEV4aXN0KCcjbXctcmV2aXNpb24taW5mbycpICYmIGNoZWNrTXdDb25maWcoJ3dnQWN0aW9uJywgJ3ZpZXcnKSkge1xuXHRcdFx0XHQvLyDmqKHlvI8z77ya6aG16Z2i5Y6G5Y+y54mI5pys5qOA6KeG77ya5aaC6ZyA5aSN5p+l55qE6aG555uu5Li66aG16Z2i5Y6G5Y+y54mI5pys77yM5pys5bel5YW35o+Q5L6b6aG16Z2i5Y6G5Y+y54mI5pys5YaF5a655pi+56S65pSv5oyBXG5cdFx0XHRcdC8vIOacieW1jOWFpScjbXctY2xlYXJ5b3VyY2FjaGUn55qE6aG16Z2i55qE5Y6G5Y+y54mI5pys5Lya5Y+q6IO95pi+56S65pyA5paw54mI55qEIF9hZGRUZXh0IOWboOatpOaJp+ihjOS/ruato1xuXHRcdFx0XHRpZiAoISRlbGVtZW50RXhpc3QoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKSkge1xuXHRcdFx0XHRcdC8vIOmdnue8lui+keaooeW8j+aJjeaJp+ihjCAo6aKE6KeI5L2/55So5LiK5pa555qEaWbljLrlnZcpXG5cdFx0XHRcdFx0JGJvZHkuZmluZCgnI213LWNsZWFyeW91cmNhY2hlJykuaHRtbChub3RpY2VMb2FkaW5nKTsgLy8g5beu5byC5qih5byP77yI5ZCr5qOA6ZiF5L+u6K6i54mI5pys5Yig6Zmk77yJ55qE5o+S5YWl54K55LiN5ZCMXG5cdFx0XHRcdFx0dm9pZCBtd0FwcGx5UmV2aXNpb24obXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyksIGN1cnJlbnRQYWdlTmFtZSk7IC8vIOS4uuS6huiuqeeJueWumueJiOacrOato+W4uOaYvuekuu+8jOS9v+eUqHdnUmV2aXNpb25JZOWPluW+l+WGheWuuVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChjaGVja013Q29uZmlnKCd3Z1BhZ2VDb250ZW50TW9kZWwnLCBbJ3NjcmlidW50bycsICdsdWEnXSkpIHtcblx0XHRcdC8vIOaooeWdl+mihOiniOWKn+iDvVxuXHRcdFx0aWYgKCFuZWVkUHJldmlldygpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCRlbGVtZW50RXhpc3QoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKSAmJlxuXHRcdFx0XHQkZWxlbWVudEV4aXN0KCd0YWJsZS5kaWZmJykgJiZcblx0XHRcdFx0ISRlbGVtZW50RXhpc3QoJy5wcmV2aWV3bm90ZScpICYmXG5cdFx0XHRcdCFjaGVja013Q29uZmlnKCd3Z0FjdGlvbicsICd2aWV3Jylcblx0XHRcdCkge1xuXHRcdFx0XHQkKG5vdGljZUxvYWRpbmcpLmluc2VydEFmdGVyKCcjd2lraURpZmYnKTtcblx0XHRcdFx0dm9pZCBtd0FkZEx1YVRleHQoXG5cdFx0XHRcdFx0KCRib2R5LmZpbmQoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKS52YWwoKSB8fCAnJykudG9TdHJpbmcoKSxcblx0XHRcdFx0XHRjdXJyZW50UGFnZU5hbWUsXG5cdFx0XHRcdFx0dHJ1ZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoJGVsZW1lbnRFeGlzdCgnLm13LXVuZGVsZXRlLXJldmlzaW9uJykpIHtcblx0XHRcdC8vIOaooeW8jzTvvJrlt7LliKDpobXpnaLpooTop4hcblx0XHRcdC8vIOW3suWIoOWGheWuuemhtemdouaYr+eJueauiumhtemdou+8jOaXoOazleeUqOW4uOinhOaWueW8j+WIpOaWremhtemdouWGheWuueaooeWei1xuXHRcdFx0aWYgKCFuZWVkUHJldmlldygpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0XHR9XG5cdFx0XHRpZiAoJGVsZW1lbnRFeGlzdChbJy5tdy1oaWdobGlnaHQnLCAncHJlJywgJy5tdy1qc29uJ10pKSB7XG5cdFx0XHRcdC8vIOehruiupOato+WcqOmihOiniOW3suWIoOWGheWuuVxuXHRcdFx0XHRjb25zdCAkdHJ5R2V0V2lraSA9ICgkYm9keS5maW5kKCd0ZXh0YXJlYScpLnZhbCgpIHx8ICcnKS50b1N0cmluZygpOyAvLyDlsJ3or5Xlj5blvpflt7LliKDlhoXlrrnmupDku6PnoIFcblx0XHRcdFx0bGV0IHRyeUFkZFdpa2k6IHN0cmluZyA9IGx1YUdldEpTT053aWtpdGV4dCgkdHJ5R2V0V2lraSk7XG5cdFx0XHRcdGlmICh0cnlBZGRXaWtpLnRyaW0oKSA9PT0gJycpIHtcblx0XHRcdFx0XHR0cnlBZGRXaWtpID0gbHVhR2V0Q1NTd2lraXRleHQoJHRyeUdldFdpa2kpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0cnlBZGRXaWtpLnRyaW0oKSAhPT0gJycpIHtcblx0XHRcdFx0XHQvLyDoi6Xlj5blvpcgX2FkZFRleHQg5YiZ5pi+56S66aKE6KeIXG5cdFx0XHRcdFx0YWRkTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0XHRcdHZvaWQgbXdBZGRXaWtpVGV4dCh0cnlBZGRXaWtpLCBtdy5jb25maWcuZ2V0KCd3Z1JlbGV2YW50UGFnZU5hbWUnKSwgdHJ1ZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoL21vZHVsZVsgX113aWtpdGV4dC4qX2FkZHRleHQvaS50ZXN0KCRib2R5LmZpbmQoJy5tdy1wYXJzZXItb3V0cHV0JykudGV4dCgpKSkge1xuXHRcdFx0XHRcdC8vIOWwneivlUx1Yeino+aekFxuXHRcdFx0XHRcdC8vIOacrOWKn+iDveebruWJjea1i+ivleato+W4uOi/kOS9nFxuXHRcdFx0XHRcdC8vIOiLpeWTquWkqemihOiniOWPiOWkseaViO+8jOivt+WPlua2iOazqOmHiuS4i+aWuemCo+ihjFxuXHRcdFx0XHRcdC8vIG13QWRkTHVhVGV4dCgkdHJ5R2V0V2lraSwgbXcuY29uZmlnLmdldChcIndnUmVsZXZhbnRQYWdlTmFtZVwiKSwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCEkZWxlbWVudEV4aXN0KCcubXctZWRpdG5vdGljZScpICYmIGNoZWNrTXdDb25maWcoJ3dnQ2Fub25pY2FsTmFtZXNwYWNlJywgJ3NwZWNpYWwnKSkge1xuXHRcdFx0Ly8g6Iul54m55q6K6aG16Z2i57y65LmP57yW6L6R5o+Q56S677yM5YiZ6KGl5LiK57yW6L6R5o+Q56S6ICjoi6XlrZjlnKgpXG5cdFx0XHRjb25zdCBwYWdlbmFtZTogc3RyaW5nIHwgZmFsc2UgPSBtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpO1xuXHRcdFx0Y29uc3QgcGFnZVN1Yk5hbWU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC9zcGVjaWFsOlteL10rL2ksICcnKTtcblx0XHRcdGlmIChwYWdlbmFtZSAhPT0gZmFsc2UgJiYgcGFnZW5hbWUgIT09IG51bGwgJiYgcGFnZW5hbWUudG9TdHJpbmcoKS50cmltKCkgIT09ICcnKSB7XG5cdFx0XHRcdGNvbnN0IGZ1bGxwYWdlbmFtZTogc3RyaW5nID0gYCR7bXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxOYW1lc3BhY2UnKX06JHtwYWdlbmFtZX1gO1xuXHRcdFx0XHR2b2lkIG13QXBwbHlOb3RpY2UoZnVsbHBhZ2VuYW1lLCBwYWdlU3ViTmFtZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTsgLy8g6YO95LiN5piv55qE5oOF5Ya15YiZ5LiN5pi+56S66aKE6KeIXG5cdFx0fVxuXHR9O1xuXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z0lzU3BlY2lhbFdpa2l0ZXh0UHJldmlldycpICE9PSB0cnVlKSB7XG5cdFx0Ly8g5LiA6aG15Y+q6LeR5LiA5qyh6aKE6KeIXG5cdFx0Ly8g6YG/5YWN5bCP5bel5YW36YeN5aSN5a6J6KOF5YaS5Ye65LiA5aSn5aCG6aKE6KeIXG5cdFx0Ly8g5qCH6K6w6aKE6KeI5bey6LeR6L+HXG5cdFx0bXcuY29uZmlnLnNldCgnd2dJc1NwZWNpYWxXaWtpdGV4dFByZXZpZXcnLCB0cnVlKTtcblx0XHQvLyDmiafooYzpooTop4hcblx0XHRtd0FkZFByZXZpZXcoKTtcblx0XHQvLyDmo4Dmn6XmtYvor5XmoLfkvotcblx0XHR2b2lkIHdpa2l0ZXh0UHJldmlld1Rlc3RjYXNlKHRydWUpO1xuXHR9XG59O1xuXG4kKHByZXZpZXdUb29sKTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IExPQURFUl9JTUFHRTogc3RyaW5nID0gJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvZC9kZS9BamF4LWxvYWRlci5naWYnO1xuY29uc3QgRkFJTF9JTUFHRTogc3RyaW5nID1cblx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvOC84Zi9BbGVydF9NYXJrXyUyOE9yYW5nZSUyOS5zdmcvNDhweC1BbGVydF9NYXJrXyUyOE9yYW5nZSUyOS5zdmcucG5nJztcblxuY29uc3Qgbm90aWNlTG9hZGluZ0VsZW1lbnQgPSAoKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPXsnc3BlY2lhbHdpa2l0ZXh0X19wcmV2aWV3LWxvYWRpbmcnfSBpZD17J3NwZWNpYWx3aWtpdGV4dF9fcHJldmlldy1sb2FkaW5nJ30+XG5cdFx0PGRpdiBjbGFzc05hbWU9eydzcGVjaWFsd2lraXRleHRfX3ByZXZpZXctbG9hZGluZy1pbm5lcid9IGlkPXsnc3BlY2lhbHdpa2l0ZXh0X19wcmV2aWV3LWxvYWRpbmctaW5uZXInfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXsnc3BlY2lhbHdpa2l0ZXh0X19wcmV2aWV3LWxvYWRpbmctY29udGVudCd9IGlkPXsnc3BlY2lhbHdpa2l0ZXh0X19wcmV2aWV3LWxvYWRpbmctY29udGVudCd9PlxuXHRcdFx0XHQ8aW1nIHNyYz17TE9BREVSX0lNQUdFfSBkZWNvZGluZz1cImFzeW5jXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgLz5cblx0XHRcdFx0PHNwYW4+Jm5ic3A7e2dldE1lc3NhZ2UoJ0xvYWRpbmcgcHJldmlldycpfTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbik7XG5cbmNvbnN0IG5vdGljZUZhaWxFbGVtZW50ID0gKCkgPT4gKFxuXHQ8PlxuXHRcdDxpbWcgc3JjPXtGQUlMX0lNQUdFfSBkZWNvZGluZz1cImFzeW5jXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgLz5cblx0XHQ8c3Bhbj4mbmJzcDt7Z2V0TWVzc2FnZSgnRmFpbGVkIHRvIGxvYWQgcHJldmlldycpfTwvc3Bhbj5cblx0PC8+XG4pO1xuXG5leHBvcnQge25vdGljZUxvYWRpbmdFbGVtZW50LCBub3RpY2VGYWlsRWxlbWVudH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdMb2FkaW5nIHByZXZpZXcnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcgcHJldmlld+KApuKApicsXG5cdFx0XHQnemgtaGFucyc6ICfpooTop4jliqDovb3kuK3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn6aCQ6Ka96LyJ5YWl5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0XHQnRmFpbGVkIHRvIGxvYWQgcHJldmlldyc6IGxvY2FsaXplKHtcblx0XHRcdCd6aC1oYW5zJzogJ+mihOiniOWKoOi9veWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICfpoJDopr3ovInlhaXlpLHotKUnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBQUEscUJBQXVDQyxRQUFBLGlCQUFBOztB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QVc7TUFDN0M7SUFDRCxPQUFPO0FBQ05wRCwwQkFBb0I7SUFDckI7RUFDRDtBQUVBLE1BQUluRCxHQUFHQyxPQUFPQyxJQUFJLDRCQUE0QixNQUFNLE1BQU07QUFJekRGLE9BQUdDLE9BQU9tSixJQUFJLDhCQUE4QixJQUFJO0FBRWhEYixpQkFBYTtBQUViLFNBQUs3Qix3QkFBd0IsSUFBSTtFQUNsQztBQUNEO0FBRUF6RixFQUFFWixXQUFXOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkxPQURFUl9JTUFHRSIsICJGQUlMX0lNQUdFIiwgIm5vdGljZUxvYWRpbmdFbGVtZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiaWQiLCAic3JjIiwgImRlY29kaW5nIiwgIndpZHRoIiwgImhlaWdodCIsICJub3RpY2VGYWlsRWxlbWVudCIsICJGcmFnbWVudCIsICJ3aWtpVGV4dEtleSIsICJsdWFBZGRUZXh0IiwgImlucHV0U3RyIiwgIm5ld1N0ciIsICJfZXNjYXBlIiwgImlucHV0U3RyaW5nIiwgInRleHQiLCAiZXNjYXBlU3RyIiwgIkpTT04iLCAicGFyc2UiLCAiY29uY2F0IiwgInN0cmluZ2lmeSIsICJ0b1N0cmluZyIsICJyZXBsYWNlIiwgImx1YUdldFN0cmluZyIsICJzdHIiLCAidGVzdFN0ckFycmF5IiwgImV4ZWMiLCAidGVzdFN0ciIsICJzbGljZSIsICJNYXRoIiwgIm1heCIsICJsZW5ndGgiLCAidHJpbUNoZWNrIiwgInRyaW0iLCAiZmlyc3RDaGFyIiwgImNoYXJBdCIsICJhdCIsICJsdWFHZXRDb250ZW50VGV4dCIsICJ3aWtpdGV4dCIsICJSZWdFeHAiLCAidGVtcFRleHQiLCAibHVhR2V0T2JqVGV4dCIsICJsdWFHZXRDU1N3aWtpdGV4dCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiY3NzVGV4dCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInZhbHVlIiwgImx1YUdldEpTd2lraXRleHQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJqc1RleHQiLCAibHVhR2V0SlNPTndpa2l0ZXh0IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDMiLCAiSlNPTlRleHQiLCAianNvbkRhdGEiLCAiX2kiLCAiX09iamVjdCRrZXlzIiwgIk9iamVjdCIsICJrZXlzIiwgInYiLCAidGVzdCIsICJwcm9wIiwgImhhc093biIsICJ0ZXN0QXJyViIsICJsdWFDaGVjayIsICJjb250ZW50TW9kZWwiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjb250ZW50TW9kZWxUb0xvd2VyQ2FzZSIsICJ0b0xvd2VyQ2FzZSIsICJwcmV2aWV3VG9vbCIsICJhcGkiLCAiaW5pdE13QXBpIiwgIiRub3RpY2VBZGRUZXh0IiwgIm5vdGljZUxvYWRpbmciLCAibm90aWNlRmFpbCIsICIkZWxlbWVudEV4aXN0IiwgInNlbGVjdG9ycyIsICJzZWxlY3RvckFycmF5IiwgImdlbmVyYXRlQXJyYXkiLCAiZWxlQ291bnQiLCAiJGJvZHkiLCAiJCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJzZWxlY3RvciIsICIkc2VsZWN0b3IiLCAiZmluZCIsICJlcnIiLCAiZSIsICJmIiwgImNoZWNrTXdDb25maWciLCAiY2hlY2tUYXJnZXQiLCAibXdDb25maWdzIiwgIm13Q29uZmlnRGF0YSIsICJTdHJpbmciLCAibXdDb25maWdBcnJheSIsICJpbmNsdWRlcyIsICJnZXRMYW5ndWFnZSIsICJsYW5nIiwgImFkZFBhcnNlZFdpa2l0ZXh0IiwgInBhcnNlZFdpa2l0ZXh0IiwgIiRodG1sT2JqIiwgImh0bWwiLCAiJGVsZW1lbnQiLCAiaG9vayIsICJmaXJlIiwgImFwcGVuZCIsICJzZXRIdG1sIiwgImh0bWxDb250ZW50IiwgImFkZExvYWRpbmdOb3RpY2UiLCAibG9hZGluZ0ZhaWxOb3RpY2UiLCAicmVtb3ZlTG9hZGluZ05vdGljZSIsICJuZWVkUHJldmlldyIsICJkb2N1bWVudEVsZW1lbnQiLCAiaW5uZXJIVE1MIiwgInNlYXJjaCIsICJtd0FkZFdpa2lUZXh0IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAid2lraVRleHQiLCAicGFnZW5hbWUiLCAiaXNQcmV2aWV3IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGUiLCAiY29udGVudG1vZGVsIiwgInVzZWxhbmciLCAidXNlc2tpbiIsICJwcmV2aWV3IiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJkYXRhIiwgInBvc3QiLCAicGFyc2VkV2lraSIsICJfeCIsICJfeDIiLCAiX3gzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJtd0FkZEx1YVRleHQiLCAiX3JlZjIiLCAiY2FsbEJhY2siLCAidGVtcE1vZHVsZU5hbWUiLCAibW9kdWxlQ2FsbCIsICJ0ZW1wbGF0ZXNhbmRib3h0aXRsZSIsICJ0ZW1wbGF0ZXNhbmRib3h0ZXh0IiwgInRlbXBsYXRlc2FuZGJveGNvbnRlbnRtb2RlbCIsICJ0ZW1wbGF0ZXNhbmRib3hjb250ZW50Zm9ybWF0IiwgIl94NCIsICJfeDUiLCAiX3g2IiwgIl94NyIsICJtd0FwcGx5UmV2aXNpb24iLCAiX3JlZjMiLCAiX3JldmlzaW9uSWQiLCAiY3VycmVudFBhZ2VOYW1lIiwgIm9sZGlkIiwgInBhZ2VDb250ZW50IiwgIl94OCIsICJfeDkiLCAibXdBcHBseU5vdGljZSIsICJfcmVmNCIsICJwYWdlU3ViTmFtZSIsICJfeDEwIiwgIl94MTEiLCAid2lraXRleHRQcmV2aWV3VGVzdGNhc2UiLCAiX3JlZjUiLCAidGVzdGNhc2VMaXN0IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAidGVzdGNhc2VEYXRhTGlzdCIsICJpIiwgInRlc3RjYXNlSXRlbSIsICJjb2RlSXQiLCAiY29kZUl0MCIsICJjb2RlSXRDbGFzcyIsICJhdHRyIiwgImNvZGVJZCIsICJsb2FkSW5kZXgiLCAiZWxlbWVudCIsICJjb2RlIiwgInBhY2thZ2VXaWtpdGV4dCIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzIiwgImVudHJpZXMiLCAiX2tleSIsICJpdGVtRWxlbWVudCIsICJhZGRXaWtpIiwgInByZXBlbmQiLCAiJHBhcnNlZEVsZW1lbnQiLCAiX2kzIiwgIl9PYmplY3QkZW50cmllczIiLCAiY2hlY2tQYXJzZUVsZW1lbnQiLCAiJGFkZFRhcmdldCIsICJfeDEyIiwgIm13QWRkUHJldmlldyIsICJfbXckdXRpbCRnZXRVcmwkbWF0Y2giLCAiX213JHV0aWwkZ2V0VXJsJG1hdGNoMiIsICJwYXRoUGF0aCIsICJkZWNvZGVVUkkiLCAidXRpbCIsICJnZXRVcmwiLCAibWF0Y2giLCAiaW5zZXJ0QWZ0ZXIiLCAidmFsIiwgIiR0cnlHZXRXaWtpIiwgInRyeUFkZFdpa2kiLCAiZnVsbHBhZ2VuYW1lIiwgInNldCJdCn0K
