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
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/SpecialWikitext/components/SpecialWikitext.module.less
var previewLoadingContent = "SpecialWikitext-module__preview-loading__content_0PrDlG";
var previewLoadingInner = "SpecialWikitext-module__preview-loading__inner_0PrDlG";
//! src/SpecialWikitext/components/generateElements.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
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
//! src/SpecialWikitext/components/generateElements.tsx
var Failed = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  src: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/8/8f/Alert_Mark_%28Orange%29.svg/48px-Alert_Mark_%28Orange%29.svg.png",
  decoding: "async",
  width: "32",
  height: "32"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, " ", getMessage("Failed")));
var Loading = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  id: "specialwikitext-preview-loading"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: ["quotebox", previewLoadingInner],
  id: "specialwikitext-preview-loading__inner"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: previewLoadingContent,
  id: "specialwikitext-preview-loading__content"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("img", {
  src: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/d/de/Ajax-loader.gif",
  decoding: "async",
  width: "32",
  height: "32"
}), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, " ", getMessage("Loading")))));
//! src/SpecialWikitext/modules/util/checkElementExist.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var checkElementExist = (selectors) => {
  const selectorArray = (0, import_ext_gadget3.generateArray)(selectors);
  var _iterator2 = _createForOfIteratorHelper(selectorArray), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const selector = _step2.value;
      if (document.querySelector(selector)) {
        return true;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
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
var noticeFailElement = Failed();
var noticeLoadingElement = Loading();
var replaceDOM = (selector, element) => {
  $(selector).html(element !== null && element !== void 0 ? element : "");
};
var addLoadingNotice = () => {
  addParsedWikitext(noticeLoadingElement);
};
var loadingFailNotice = () => {
  replaceDOM("#specialwikitext-preview-loading__content", noticeFailElement);
};
var removeLoadingNotice = () => {
  replaceDOM("#specialwikitext-preview-loading");
};
//! src/SpecialWikitext/options.json
var wikiTextKey = "_addText";
var version = "2.0";
//! src/SpecialWikitext/modules/lua/luaAddText.ts
var luaAddText = (inputString, newString, isEscape = false) => {
  if (newString) {
    if (inputString) {
      inputString += "\n";
    }
    if (isEscape) {
      const [escapeString] = JSON.parse("[".concat(JSON.stringify(
        // Lua不支持\u、\x转义字符
        newString.replace(/\\([ux])/gi, "$1")
      ).replace(/\\\\/g, "\\"), "]"));
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
    inputString.replace(new RegExp("".concat(wikiTextKey, "\\s*\\{[^c\\}]*content\\s*:\\s*[^\n]*"), "g"), (substring) => {
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
    inputString.replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*[^\n]*"), "g"), (substring) => {
      const tempText = substring.replace(/^[\s;}]+|[\s;}]+$/g, "").replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*")), "");
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
  var _ref, _document$querySelect;
  let wikitext = "";
  const cssText = (_ref = inputString || ((_document$querySelect = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value)) !== null && _ref !== void 0 ? _ref : "";
  if (!cssText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetContentText(cssText), true);
  wikitext = luaAddText(wikitext, luaGetObjText(cssText), true);
  return wikitext.trim();
};
var luaGetJSONwikitext = (inputString) => {
  var _ref2, _document$querySelect2;
  let wikitext = "";
  const JSONText = (_ref2 = inputString || ((_document$querySelect2 = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.value)) !== null && _ref2 !== void 0 ? _ref2 : "";
  if (!JSONText.trim()) {
    return "";
  }
  try {
    const jsonData = JSON.parse(JSONText);
    for (var _i = 0, _Object$entries = Object.entries(jsonData); _i < _Object$entries.length; _i++) {
      const [key, value] = _Object$entries[_i];
      if (new RegExp(wikiTextKey).test(key) && typeof value === "string") {
        wikitext = luaAddText(wikitext, value);
      }
      if (typeof value !== "string") {
        for (var _i2 = 0, _Object$entries2 = Object.entries(value); _i2 < _Object$entries2.length; _i2++) {
          const [k, v] = _Object$entries2[_i2];
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
  var _ref3, _document$querySelect3;
  let wikitext = "";
  const jsText = (_ref3 = inputString || ((_document$querySelect3 = document.querySelector("textarea[name=wpTextbox1]")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.value)) !== null && _ref3 !== void 0 ? _ref3 : "";
  if (!jsText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetObjText(jsText), true);
  return wikitext.trim();
};
//! src/SpecialWikitext/modules/api.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var api = (0, import_ext_gadget4.initMwApi)("SpecialWikitext/".concat(version));
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
var mwAddWikiText = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (wikitext, pageName, isPreview) {
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
        const data = yield api.post(params);
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
  });
  return function mwAddWikiText2(_x, _x2, _x3) {
    return _ref4.apply(this, arguments);
  };
}();
var mwAddLuaText = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* (wikitext, pageName, isPreview, callBack) {
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
          templatesandboxtext: "return {\n	main = function()\n		xpcall(\n			function()\n				".concat(wikitext, '\n			end,\n			function()\n			end\n		)\n		local moduleWikitext = package.loaded["Module:Module wikitext"]\n		if moduleWikitext then\n			local wikitext = moduleWikitext.main()\n			if mw.text.trim(wikitext) ~= "" then\n				return mw.getCurrentFrame():preprocess(moduleWikitext.main())\n			end\n		end\n		return ""\n	end\n}'),
          templatesandboxcontentmodel: "Scribunto",
          templatesandboxcontentformat: "text/plain",
          text: "{{".concat(moduleCall.wikitext).concat(tempModuleName, "|main}}"),
          prop: "text",
          uselang: getLanguage(),
          useskin: skin
        };
        if (isPreview) {
          params.preview = true;
          params.disableeditsection = true;
        }
        const data = yield api.post(params);
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
  });
  return function mwAddLuaText2(_x4, _x5, _x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}();
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
var mwApplyNotice = /* @__PURE__ */ function() {
  var _ref6 = _asyncToGenerator(function* (currentPageName, pageSubName) {
    try {
      var _data$parse3;
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        // get the original wikitext content of a page
        title: currentPageName + pageSubName,
        text: "{{#invoke:Special wikitext/Template|getNotices|".concat(currentPageName, "|").concat(pageSubName, "}}"),
        prop: "text",
        uselang: getLanguage(),
        useskin: skin2
      };
      const data = yield api.post(params);
      if (!(data !== null && data !== void 0 && (_data$parse3 = data["parse"]) !== null && _data$parse3 !== void 0 && _data$parse3.text)) {
        return;
      }
      const html = data["parse"].text;
      if ($(html).text().trim()) {
        addParsedWikitext(html);
      }
    } catch {
    }
  });
  return function mwApplyNotice2(_x8, _x9) {
    return _ref6.apply(this, arguments);
  };
}();
var mwApplyRevision = /* @__PURE__ */ function() {
  var _ref7 = _asyncToGenerator(function* (currentPageName) {
    try {
      var _data$parse4;
      const params = {
        action: "parse",
        format: "json",
        formatversion: "2",
        // get the original wikitext content of a page
        oldid: wgRevisionId,
        prop: "wikitext"
      };
      const data = yield api.get(params);
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
  });
  return function mwApplyRevision2(_x10) {
    return _ref7.apply(this, arguments);
  };
}();
//! src/SpecialWikitext/modules/util/checkMwConfig.ts
var import_ext_gadget5 = require("ext.gadget.Util");
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
  return (0, import_ext_gadget5.generateArray)(expectConfig).includes(mwConfig);
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
      var _mw$util$getUrl$match, _mw$util$getUrl$match2;
      const pathPath = decodeURI(mw.util.getUrl(wgPageName)).replace(new RegExp("^\\/?".concat((_mw$util$getUrl$match = (_mw$util$getUrl$match2 = mw.util.getUrl("").match(/[a-z]+/)) === null || _mw$util$getUrl$match2 === void 0 ? void 0 : _mw$util$getUrl$match2[0]) !== null && _mw$util$getUrl$match !== void 0 ? _mw$util$getUrl$match : "", "\\/")), "");
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
      var _$body$find$val;
      $(noticeLoadingElement).insertAfter("#wikiDiff");
      void mwAddLuaText((_$body$find$val = $body.find("textarea[name=wpTextbox1]").val()) !== null && _$body$find$val !== void 0 ? _$body$find$val : "", wgPageName, true);
    }
  } else if (checkElementExist(".mw-undelete-revision")) {
    if (!checkNeedPreview()) {
      return;
    }
    if (checkElementExist([".mw-highlight", "pre", ".mw-json"])) {
      var _$body$find$val2;
      const textareaContent = (_$body$find$val2 = $body.find("textarea").val()) !== null && _$body$find$val2 !== void 0 ? _$body$find$val2 : "";
      let wikitext = luaGetJSONwikitext(textareaContent);
      if (!wikitext) {
        wikitext = luaGetCSSwikitext(textareaContent);
      }
      if (wikitext) {
        addLoadingNotice();
        void mwAddWikiText(wikitext, mw.config.get("wgRelevantPageName"), true);
      } else if (/module[ _]wikitext.*_addtext/i.test($body.find(".mw-parser-output").text())) {
      }
    }
  } else if (!checkElementExist(".mw-editnotice") && checkMwConfig("wgCanonicalNamespace", "special")) {
    const pageSubName = wgPageName.replace(/special:[^/]+/i, "");
    if (wgCanonicalSpecialPageName) {
      const fullPageName = "".concat(wgCanonicalNamespace, ":").concat(wgCanonicalSpecialPageName);
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
var wikitextPreviewTestcase = /* @__PURE__ */ function() {
  var _ref8 = _asyncToGenerator(function* (isPreview) {
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
      var _exec, _codeId$toLowerCase, _codeElement$textCont, _codeElement$textCont2;
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
      const [, codeId] = (_exec = /mw-highlight-lang-(\S+)/.exec(className)) !== null && _exec !== void 0 ? _exec : [];
      const {
        length
      } = testcaseDataList;
      element.setAttribute("preview-id", length.toString());
      testcaseDataList[length] = {
        element,
        lang: (_codeId$toLowerCase = codeId === null || codeId === void 0 ? void 0 : codeId.toLowerCase()) !== null && _codeId$toLowerCase !== void 0 ? _codeId$toLowerCase : "",
        code: (_codeElement$textCont = (_codeElement$textCont2 = codeElement.textContent) === null || _codeElement$textCont2 === void 0 ? void 0 : _codeElement$textCont2.trim()) !== null && _codeElement$textCont !== void 0 ? _codeElement$textCont : ""
      };
    }
    let packageWikitext = "";
    for (var _i3 = 0, _Object$values = Object.values(testcaseDataList); _i3 < _Object$values.length; _i3++) {
      const testcaseItem = _Object$values[_i3];
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
          packageWikitext += '<div class="special-wikitext-preview-testcase-'.concat(i, '">\n').concat(wikitext, "\n</div>");
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
      packageWikitext = '<div class="special-wikitext-preview-testcase-undefined">'.concat(packageWikitext, "</div>");
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
        const data = yield api.post(params);
        if (!(data !== null && data !== void 0 && (_data$parse5 = data["parse"]) !== null && _data$parse5 !== void 0 && _data$parse5.text)) {
          return;
        }
        const parsedWikitext = data["parse"].text.trim();
        if (parsedWikitext) {
          const $parsedElement = $(parsedWikitext);
          for (var _i4 = 0, _Object$entries3 = Object.entries(testcaseDataList); _i4 < _Object$entries3.length; _i4++) {
            const [key, testcaseItem] = _Object$entries3[_i4];
            const {
              element,
              lang
            } = testcaseItem;
            if (!["javascript", "js", "text", "css", "json"].includes(lang)) {
              continue;
            }
            const $element = $parsedElement.find(".special-wikitext-preview-testcase-undefined > .special-wikitext-preview-testcase-".concat(key));
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
  });
  return function wikitextPreviewTestcase2(_x11) {
    return _ref8.apply(this, arguments);
  };
}();
//! src/SpecialWikitext/SpecialWikitext.ts
void (0, import_ext_gadget6.getBody)().then(function specialWikitext($body) {
  mwAddPreview($body);
  void wikitextPreviewTestcase(true);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NwZWNpYWxXaWtpdGV4dC9TcGVjaWFsV2lraXRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9jb21wb25lbnRzL1NwZWNpYWxXaWtpdGV4dC5tb2R1bGUubGVzcyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvZ2VuZXJhdGVFbGVtZW50cy50c3giLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tFbGVtZW50RXhpc3QudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvYWRkUGFyc2VkV2lraXRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL25vdGljZS50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L29wdGlvbnMuanNvbiIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUFkZFRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2x1YS9sdWFHZXRUZXh0LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvZ2V0TGFuZ3VhZ2UudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL213L213QWRkVGV4dC50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUNoZWNrLnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9tdy9td0FwcGx5LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy91dGlsL2NoZWNrTXdDb25maWcudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tOZWVkUHJldmlldy50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbXcvbXdBZGRQcmV2aWV3LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy93aWtpdGV4dFByZXZpZXdUZXN0Y2FzZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHttd0FkZFByZXZpZXd9IGZyb20gJy4vbW9kdWxlcy9tdy9td0FkZFByZXZpZXcnO1xuaW1wb3J0IHt3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZX0gZnJvbSAnLi9tb2R1bGVzL3dpa2l0ZXh0UHJldmlld1Rlc3RjYXNlJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzcGVjaWFsV2lraXRleHQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdC8vIOaJp+ihjOmihOiniFxuXHRtd0FkZFByZXZpZXcoJGJvZHkpO1xuXHQvLyDmo4Dmn6XmtYvor5XmoLfkvotcblx0dm9pZCB3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSh0cnVlKTtcbn0pO1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvU3BlY2lhbFdpa2l0ZXh0Lm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgcHJldmlld0xvYWRpbmdDb250ZW50ID0gXCJTcGVjaWFsV2lraXRleHQtbW9kdWxlX19wcmV2aWV3LWxvYWRpbmdfX2NvbnRlbnRfMFByRGxHXCI7XG5leHBvcnQgY29uc3QgcHJldmlld0xvYWRpbmdJbm5lciA9IFwiU3BlY2lhbFdpa2l0ZXh0LW1vZHVsZV9fcHJldmlldy1sb2FkaW5nX19pbm5lcl8wUHJEbEdcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInByZXZpZXdMb2FkaW5nQ29udGVudFwiOiBwcmV2aWV3TG9hZGluZ0NvbnRlbnQsXG4gIFwicHJldmlld0xvYWRpbmdJbm5lclwiOiBwcmV2aWV3TG9hZGluZ0lubmVyXG59O1xuICAgICAgIiwgImltcG9ydCB7cHJldmlld0xvYWRpbmdDb250ZW50LCBwcmV2aWV3TG9hZGluZ0lubmVyfSBmcm9tICcuL1NwZWNpYWxXaWtpdGV4dC5tb2R1bGUubGVzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IEZhaWxlZCA9ICgpID0+IChcblx0PD5cblx0XHQ8aW1nXG5cdFx0XHRzcmM9e1xuXHRcdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi84LzhmL0FsZXJ0X01hcmtfJTI4T3JhbmdlJTI5LnN2Zy80OHB4LUFsZXJ0X01hcmtfJTI4T3JhbmdlJTI5LnN2Zy5wbmcnXG5cdFx0XHR9XG5cdFx0XHRkZWNvZGluZz1cImFzeW5jXCJcblx0XHRcdHdpZHRoPVwiMzJcIlxuXHRcdFx0aGVpZ2h0PVwiMzJcIlxuXHRcdC8+XG5cdFx0PHNwYW4+Jm5ic3A7e2dldE1lc3NhZ2UoJ0ZhaWxlZCcpfTwvc3Bhbj5cblx0PC8+XG4pO1xuXG5jb25zdCBMb2FkaW5nID0gKCkgPT4gKFxuXHQ8ZGl2IGlkPXsnc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZyd9PlxuXHRcdDxkaXYgY2xhc3NOYW1lPXtbJ3F1b3RlYm94JywgcHJldmlld0xvYWRpbmdJbm5lcl19IGlkPXsnc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZ19faW5uZXInfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtwcmV2aWV3TG9hZGluZ0NvbnRlbnR9IGlkPXsnc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZ19fY29udGVudCd9PlxuXHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0c3JjPXsnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC9kL2RlL0FqYXgtbG9hZGVyLmdpZid9XG5cdFx0XHRcdFx0ZGVjb2Rpbmc9XCJhc3luY1wiXG5cdFx0XHRcdFx0d2lkdGg9XCIzMlwiXG5cdFx0XHRcdFx0aGVpZ2h0PVwiMzJcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8c3Bhbj4mbmJzcDt7Z2V0TWVzc2FnZSgnTG9hZGluZycpfTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCB7RmFpbGVkLCBMb2FkaW5nfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RmFpbGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZhaWxlZCB0byBsb2FkIHByZXZpZXcuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mihOiniOWKoOi9veWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICfpoJDopr3ovInlhaXlpLHotKUnLFxuXHRcdH0pLFxuXHRcdExvYWRpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZyBwcmV2aWV3Li4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mihOiniOWKoOi9veS4reKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfpoJDopr3ovInlhaXkuK3igKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbi8vIOajgOafpXNlbGVjdG9y5a+55bqU55qERE9N5a+56LGh5piv5ZCm5a2Y5ZyoXG5jb25zdCBjaGVja0VsZW1lbnRFeGlzdCA9IChzZWxlY3RvcnM6IHN0cmluZyB8IHN0cmluZ1tdKTogYm9vbGVhbiA9PiB7XG5cdGNvbnN0IHNlbGVjdG9yQXJyYXk6IHN0cmluZ1tdID0gZ2VuZXJhdGVBcnJheShzZWxlY3RvcnMpO1xuXG5cdGZvciAoY29uc3Qgc2VsZWN0b3Igb2Ygc2VsZWN0b3JBcnJheSkge1xuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHtjaGVja0VsZW1lbnRFeGlzdH07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtjaGVja0VsZW1lbnRFeGlzdH0gZnJvbSAnLi9jaGVja0VsZW1lbnRFeGlzdCc7XG5cbi8vIOWwhuino+aekOWQjueahHdpa2l0ZXh05Yqg5YWl6aG16Z2i5LitXG5jb25zdCBhZGRQYXJzZWRXaWtpdGV4dCA9IChwYXJzZWRXaWtpdGV4dDogc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50KTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0Y29uc3QgJHBhcnNlZFdpa2l0ZXh0OiBKUXVlcnkgPSAkKCkuaHRtbChwYXJzZWRXaWtpdGV4dCk7XG5cblx0aWYgKGNoZWNrRWxlbWVudEV4aXN0KCcjc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZycpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nJyk7XG5cdFx0JGVsZW1lbnQuaHRtbChwYXJzZWRXaWtpdGV4dCk7XG5cdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmZpcmUoJGVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcuZGlmZi1jdXJyZW50dmVyc2lvbi10aXRsZScpKSB7XG5cdFx0JGJvZHkuZmluZCgnLmRpZmYtY3VycmVudHZlcnNpb24tdGl0bGUnKS5hcHBlbmQoJHBhcnNlZFdpa2l0ZXh0KTtcblx0fSBlbHNlIGlmIChjaGVja0VsZW1lbnRFeGlzdCgnLnByZXZpZXdub3RlJykpIHtcblx0XHQkYm9keS5maW5kKCcucHJldmlld25vdGUnKS5hcHBlbmQoJHBhcnNlZFdpa2l0ZXh0KTtcblx0fSBlbHNlIGlmIChjaGVja0VsZW1lbnRFeGlzdCgnLm13LXVuZGVsZXRlLXJldmlzaW9uJykpIHtcblx0XHQkYm9keS5maW5kKCcubXctdW5kZWxldGUtcmV2aXNpb24nKS5hcHBlbmQoJHBhcnNlZFdpa2l0ZXh0KTtcblx0fSBlbHNlIGlmIChjaGVja0VsZW1lbnRFeGlzdCgnI213LWNvbnRlbnQtdGV4dCcpKSB7XG5cdFx0JGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCcpLmFwcGVuZCgkcGFyc2VkV2lraXRleHQpO1xuXHR9XG5cblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmZpcmUoJHBhcnNlZFdpa2l0ZXh0KTtcbn07XG5cbmV4cG9ydCB7YWRkUGFyc2VkV2lraXRleHR9O1xuIiwgImltcG9ydCB7RmFpbGVkLCBMb2FkaW5nfSBmcm9tICcuLi9jb21wb25lbnRzL2dlbmVyYXRlRWxlbWVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHthZGRQYXJzZWRXaWtpdGV4dH0gZnJvbSAnLi91dGlsL2FkZFBhcnNlZFdpa2l0ZXh0JztcblxuLy8gW1tGaWxlOkdub21lLWRpYWxvZy13YXJuaW5nMi5zdmd8MzJweF1dXG4vLyAte3poLWhhbnM66aKE6KeI5Yqg6L295aSx6LSlO3poLWhhbnQ66aCQ6Ka96LyJ5YWl5aSx6LSlO30tXG5jb25zdCBub3RpY2VGYWlsRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50ID0gRmFpbGVkKCk7XG5cbi8vIHt7UXVvdGUgYm94IHxxdW90ZSAgPSAte3poLWhhbnM66aKE6KeI5Yqg6L295LitO3poLWhhbnQ66aCQ6Ka96LyJ5YWl5LitO30t4oCm4oCmIHx3aWR0aCAgPSA1MCUgfGFsaWduICA9IGNlbnRlcn19XG5jb25zdCBub3RpY2VMb2FkaW5nRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50ID0gTG9hZGluZygpO1xuXG4vLyDmlLnliqhET03lhoXlrrlcbmNvbnN0IHJlcGxhY2VET00gPSAoc2VsZWN0b3I6IHN0cmluZywgZWxlbWVudD86IFJlYWN0LlJlYWN0RWxlbWVudCk6IHZvaWQgPT4ge1xuXHQkKHNlbGVjdG9yKS5odG1sKGVsZW1lbnQgPz8gJycpO1xufTtcblxuLy8g5Yqg5YWl4oCcW+i9veWFpeS4rV3igJ3nmoTmj5DnpLpcbmNvbnN0IGFkZExvYWRpbmdOb3RpY2UgPSAoKTogdm9pZCA9PiB7XG5cdGFkZFBhcnNlZFdpa2l0ZXh0KG5vdGljZUxvYWRpbmdFbGVtZW50KTtcbn07XG5cbi8vIOi9veWFpemUmeivr+eahOaPkOekulxuY29uc3QgbG9hZGluZ0ZhaWxOb3RpY2UgPSAoKTogdm9pZCA9PiB7XG5cdHJlcGxhY2VET00oJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nX19jb250ZW50Jywgbm90aWNlRmFpbEVsZW1lbnQpO1xufTtcblxuLy8g56e76Zmk4oCcW+i9veWFpeS4rV3igJ3nmoTmj5DnpLpcbmNvbnN0IHJlbW92ZUxvYWRpbmdOb3RpY2UgPSAoKTogdm9pZCA9PiB7XG5cdHJlcGxhY2VET00oJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nJyk7XG59O1xuXG5leHBvcnQge25vdGljZUxvYWRpbmdFbGVtZW50LCBhZGRMb2FkaW5nTm90aWNlLCBsb2FkaW5nRmFpbE5vdGljZSwgcmVtb3ZlTG9hZGluZ05vdGljZX07XG4iLCAie1xuXHRcIndpa2lUZXh0S2V5XCI6IFwiX2FkZFRleHRcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICIvLyDlkIjlubblpJrkuKp3aWtpdGV4dOWtl+espuS4slxuY29uc3QgbHVhQWRkVGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nLCBuZXdTdHJpbmc6IHN0cmluZywgaXNFc2NhcGU6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyA9PiB7XG5cdGlmIChuZXdTdHJpbmcpIHtcblx0XHRpZiAoaW5wdXRTdHJpbmcpIHtcblx0XHRcdGlucHV0U3RyaW5nICs9ICdcXG4nO1xuXHRcdH1cblxuXHRcdGlmIChpc0VzY2FwZSkge1xuXHRcdFx0Y29uc3QgW2VzY2FwZVN0cmluZ10gPSBKU09OLnBhcnNlKFxuXHRcdFx0XHRgWyR7SlNPTi5zdHJpbmdpZnkoXG5cdFx0XHRcdFx0Ly8gTHVh5LiN5pSv5oyBXFx144CBXFx46L2s5LmJ5a2X56ymXG5cdFx0XHRcdFx0bmV3U3RyaW5nLnJlcGxhY2UoL1xcXFwoW3V4XSkvZ2ksICckMScpXG5cdFx0XHRcdCkucmVwbGFjZSgvXFxcXFxcXFwvZywgJ1xcXFwnKX1dYFxuXHRcdFx0KSBhcyBbc3RyaW5nXTtcblx0XHRcdG5ld1N0cmluZyA9IGVzY2FwZVN0cmluZztcblx0XHR9XG5cblx0XHRpbnB1dFN0cmluZyArPSBuZXdTdHJpbmc7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXRTdHJpbmc7XG59O1xuXG5leHBvcnQge2x1YUFkZFRleHR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7bHVhQWRkVGV4dH0gZnJvbSAnLi9sdWFBZGRUZXh0JztcblxuLy8g6K+75Y+Wd2lraXRleHTlrZfnrKbkuLLvvIzlubblv73nlaXms6jph4rlsL7pg6hcbmNvbnN0IGx1YUdldFN0cmluZyA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0Y29uc3QgdGVzdFN0cmluZ0V4ZWNBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IC9bXlxcbl0qXFwqXFwvLy5leGVjKGlucHV0U3RyaW5nKTtcblxuXHRsZXQgdGVzdFN0cmluZzogc3RyaW5nID0gaW5wdXRTdHJpbmc7XG5cdGlmICh0ZXN0U3RyaW5nRXhlY0FycmF5KSB7XG5cdFx0W3Rlc3RTdHJpbmddID0gdGVzdFN0cmluZ0V4ZWNBcnJheTtcblx0XHR0ZXN0U3RyaW5nID0gdGVzdFN0cmluZy5zbGljZSgwLCBNYXRoLm1heCgwLCB0ZXN0U3RyaW5nLmxlbmd0aCAtIDIpKTtcblx0fVxuXG5cdGNvbnN0IHRyaW1DaGVjazogc3RyaW5nID0gdGVzdFN0cmluZy50cmltKCk7XG5cdGNvbnN0IGZpcnN0Q2hhcjogc3RyaW5nID0gdHJpbUNoZWNrLmNoYXJBdCgwKTtcblx0aWYgKGZpcnN0Q2hhciA9PT0gdHJpbUNoZWNrLmF0KC0xKSAmJiAoZmlyc3RDaGFyID09PSBcIidcIiB8fCBmaXJzdENoYXIgPT09ICdcIicpKSB7XG5cdFx0cmV0dXJuIHRyaW1DaGVjay5zbGljZSgxLCAxICsgdHJpbUNoZWNrLmxlbmd0aCAtIDIpO1xuXHR9XG5cblx0cmV0dXJuIHRlc3RTdHJpbmcudHJpbSgpO1xufTtcblxuLy8g5o2V6I63Q1NT5paH5pys5Lit56ym5ZCIYDx7T1BUSU9OUy53aWtpVGV4dEtleX0+ICB7IGNvbnRlbnTvvJpcIlhYWFwiIH1g5qih5byP55qE5a2X56ym5LiyXG5jb25zdCBsdWFHZXRDb250ZW50VGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHR0cnkge1xuXHRcdGlucHV0U3RyaW5nLnJlcGxhY2UoXG5cdFx0XHRuZXcgUmVnRXhwKGAke09QVElPTlMud2lraVRleHRLZXl9XFxcXHMqXFxcXHtbXmNcXFxcfV0qY29udGVudFxcXFxzKjpcXFxccypbXlxcbl0qYCwgJ2cnKSxcblx0XHRcdChzdWJzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdGNvbnN0IHRlbXBUZXh0OiBzdHJpbmcgPSAoL2NvbnRlbnRcXHMqOlxccypbXlxcbl0qLy5leGVjKHN1YnN0cmluZykgfHwgWydjb250ZW50OiddKVswXVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9eW1xcczt9XSt8W1xcczt9XSskL2csICcnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXHMqY29udGVudFxccyo6XFxzKi8sICcnKTtcblxuXHRcdFx0XHRpZiAod2lraXRleHQpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCArPSAnXFxuJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGx1YUdldFN0cmluZyh0ZW1wVGV4dCk7XG5cblx0XHRcdFx0cmV0dXJuIHN1YnN0cmluZztcblx0XHRcdH1cblx0XHQpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gd2lraXRleHQudHJpbSgpO1xufTtcblxuLy8g5o2V6I635a2X56ym5Liy5YyW55qE5a+56LGh5Lit56ym5ZCIYDx7T1BUSU9OUy53aWtpVGV4dEtleX0+77ydWFhYYOaIlmA8e09QVElPTlMud2lraVRleHRLZXl9Pu+8mlhYWGDmqKHlvI/nmoTlrZfnrKbkuLIgKOazqOmHiuS7peWFqOinkuWtl+espuS7o+abv++8jOmBv+WFjeiiq+aNleiOtylcbmNvbnN0IGx1YUdldE9ialRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0dHJ5IHtcblx0XHRpbnB1dFN0cmluZy5yZXBsYWNlKFxuXHRcdFx0bmV3IFJlZ0V4cChgJHtPUFRJT05TLndpa2lUZXh0S2V5fVxcXFxzKltcXFxcPTpdXFxcXHMqW15cXG5dKmAsICdnJyksXG5cdFx0XHQoc3Vic3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRjb25zdCB0ZW1wVGV4dDogc3RyaW5nID0gc3Vic3RyaW5nXG5cdFx0XHRcdFx0LnJlcGxhY2UoL15bXFxzO31dK3xbXFxzO31dKyQvZywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UobmV3IFJlZ0V4cChgJHtPUFRJT05TLndpa2lUZXh0S2V5fVxcXFxzKltcXFxcPTpdXFxcXHMqYCksICcnKTtcblxuXHRcdFx0XHRpZiAod2lraXRleHQpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCArPSAnXFxuJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGx1YUdldFN0cmluZyh0ZW1wVGV4dCk7XG5cblx0XHRcdFx0cmV0dXJuIHN1YnN0cmluZztcblx0XHRcdH1cblx0XHQpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gd2lraXRleHQudHJpbSgpO1xufTtcblxuLy8g5YiG5p6QQ1NT5Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldENTU3dpa2l0ZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0IGNzc1RleHQ6IHN0cmluZyA9XG5cdFx0KGlucHV0U3RyaW5nIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRleHRBcmVhRWxlbWVudD4oJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKT8udmFsdWUpID8/ICcnO1xuXHRpZiAoIWNzc1RleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Ly8g5Yy56YWNIDx7T1BUSU9OUy53aWtpVGV4dEtleX0+IHsgY29udGVudO+8mlwiWFhYXCIgfSDmqKHlvI9cblx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCBsdWFHZXRDb250ZW50VGV4dChjc3NUZXh0KSwgdHJ1ZSk7XG5cdC8vIOWMuemFjSAvKiA8e09QVElPTlMud2lraVRleHRLZXl9Pu+8mlhYWCAqLyDmqKHlvI9cblx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCBsdWFHZXRPYmpUZXh0KGNzc1RleHQpLCB0cnVlKTtcblxuXHRyZXR1cm4gd2lraXRleHQudHJpbSgpO1xufTtcblxuLy8g5YiG5p6QSlNPTuS4reespuWQiOadoeS7tueahHdpa2l0ZXh0XG5jb25zdCBsdWFHZXRKU09Od2lraXRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgSlNPTlRleHQ6IHN0cmluZyA9XG5cdFx0KGlucHV0U3RyaW5nIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRleHRBcmVhRWxlbWVudD4oJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKT8udmFsdWUpID8/ICcnO1xuXHRpZiAoIUpTT05UZXh0LnRyaW0oKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKEpTT05UZXh0KSBhcyBvYmplY3Q7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoanNvbkRhdGEpKSB7XG5cdFx0XHRpZiAobmV3IFJlZ0V4cChPUFRJT05TLndpa2lUZXh0S2V5KS50ZXN0KGtleSkgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8g6Iul6ZSu5YC85piv5a+56LGhXG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSBhcyBvYmplY3QpKSB7XG5cdFx0XHRcdFx0aWYgKG5ldyBSZWdFeHAoT1BUSU9OUy53aWtpVGV4dEtleSkudGVzdChrKSAmJiB0eXBlb2YgdiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgdik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gd2lraXRleHQudHJpbSgpO1xufTtcblxuLy8g5YiG5p6QSmF2YVNjcmlwdOS4reespuWQiOadoeS7tueahHdpa2l0ZXh0XG5jb25zdCBsdWFHZXRKU3dpa2l0ZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0IGpzVGV4dDogc3RyaW5nID1cblx0XHQoaW5wdXRTdHJpbmcgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVGV4dEFyZWFFbGVtZW50PigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpPy52YWx1ZSkgPz8gJyc7XG5cdGlmICghanNUZXh0LnRyaW0oKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgbHVhR2V0T2JqVGV4dChqc1RleHQpLCB0cnVlKTtcblxuXHRyZXR1cm4gd2lraXRleHQudHJpbSgpO1xufTtcblxuZXhwb3J0IHtsdWFHZXRDU1N3aWtpdGV4dCwgbHVhR2V0SlNPTndpa2l0ZXh0LCBsdWFHZXRKU3dpa2l0ZXh0fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFNwZWNpYWxXaWtpdGV4dC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImNvbnN0IHt3Z1VzZXJMYW5ndWFnZSwgd2dVc2VyVmFyaWFudH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IGdldExhbmd1YWdlID0gKCk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGxhbmc6IHN0cmluZyA9IHdnVXNlckxhbmd1YWdlO1xuXG5cdGlmIChsYW5nLmluY2x1ZGVzKCd6aCcpKSB7XG5cdFx0cmV0dXJuIHdnVXNlclZhcmlhbnQgYXMgc3RyaW5nO1xuXHR9XG5cblx0cmV0dXJuIGxhbmc7XG59O1xuXG5leHBvcnQge2dldExhbmd1YWdlfTtcbiIsICJpbXBvcnQge2xvYWRpbmdGYWlsTm90aWNlLCByZW1vdmVMb2FkaW5nTm90aWNlfSBmcm9tICcuLi9ub3RpY2UnO1xuaW1wb3J0IHthZGRQYXJzZWRXaWtpdGV4dH0gZnJvbSAnLi4vdXRpbC9hZGRQYXJzZWRXaWtpdGV4dCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gJy4uL3V0aWwvZ2V0TGFuZ3VhZ2UnO1xuXG5jb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOWKoOWFpemihOiniOWGheWuuVxuY29uc3QgbXdBZGRXaWtpVGV4dCA9IGFzeW5jICh3aWtpdGV4dDogc3RyaW5nLCBwYWdlTmFtZTogc3RyaW5nLCBpc1ByZXZpZXc6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0aWYgKHdpa2l0ZXh0LnRyaW0oKSkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdC8vIOmBv+WFjeWGheWuuemHjeWkjVxuXHRcdFx0dGl0bGU6IHBhZ2VOYW1lLFxuXHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHR1c2VsYW5nOiBnZXRMYW5ndWFnZSgpLFxuXHRcdFx0dXNlc2tpbjogc2tpbixcblx0XHR9O1xuXHRcdGlmIChpc1ByZXZpZXcpIHtcblx0XHRcdHBhcmFtcy5kaXNhYmxlZWRpdHNlY3Rpb24gPSB0cnVlO1xuXHRcdFx0cGFyYW1zLnByZXZpZXcgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zIGFzIG5ldmVyKTtcblx0XHRcdGlmICghZGF0YT8uWydwYXJzZSddPy50ZXh0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFyc2VkV2lraXRleHQ6IHN0cmluZyA9IChkYXRhWydwYXJzZSddLnRleHQgYXMgc3RyaW5nKS50cmltKCk7XG5cblx0XHRcdGlmIChwYXJzZWRXaWtpdGV4dCkge1xuXHRcdFx0XHRhZGRQYXJzZWRXaWtpdGV4dChwYXJzZWRXaWtpdGV4dCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRsb2FkaW5nRmFpbE5vdGljZSgpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdH1cbn07XG5cbi8vIOWKoOWFpemihOiniOeahEx1YeWGheWuuVxuY29uc3QgbXdBZGRMdWFUZXh0ID0gYXN5bmMgKFxuXHR3aWtpdGV4dDogc3RyaW5nLFxuXHRwYWdlTmFtZTogc3RyaW5nLFxuXHRpc1ByZXZpZXc6IGJvb2xlYW4sXG5cdGNhbGxCYWNrPzogKGFyZzogc3RyaW5nKSA9PiBKUXVlcnkgfCBIVE1MRWxlbWVudCB8IHZvaWRcbikgPT4ge1xuXHRjb25zdCB0ZW1wTW9kdWxlTmFtZTogc3RyaW5nID0gJ0FkZFRleHQvVGVtcC9Nb2R1bGUvRGF0YS5sdWEnO1xuXHRjb25zdCBtb2R1bGVDYWxsOiB7XG5cdFx0d2lraXRleHQ6IHN0cmluZztcblx0XHRwYWdlTmFtZTogc3RyaW5nO1xuXHR9ID0ge1xuXHRcdHdpa2l0ZXh0OiAnI2ludm9rZTonLFxuXHRcdC8vIOWIhuW8gOadpe+8jOmBv+WFjeiiq+WIhuWIsFtbOkNhdGVnb3J5OuacieiEmuacrOmUmeivr+eahOmhtemdol1dXG5cdFx0cGFnZU5hbWU6ICdNb2R1bGU6Jyxcblx0fTtcblxuXHRpZiAod2lraXRleHQudHJpbSgpKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGl0bGU6IHBhZ2VOYW1lLFxuXHRcdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdHRlbXBsYXRlc2FuZGJveHRpdGxlOiBtb2R1bGVDYWxsLnBhZ2VOYW1lICsgdGVtcE1vZHVsZU5hbWUsXG5cdFx0XHRcdC8vIOWIm+W7uuS4tOaXtkx1YSBNb2R1bGVcblx0XHRcdFx0dGVtcGxhdGVzYW5kYm94dGV4dDogYHJldHVybiB7XG5cdG1haW4gPSBmdW5jdGlvbigpXG5cdFx0eHBjYWxsKFxuXHRcdFx0ZnVuY3Rpb24oKVxuXHRcdFx0XHQke3dpa2l0ZXh0fVxuXHRcdFx0ZW5kLFxuXHRcdFx0ZnVuY3Rpb24oKVxuXHRcdFx0ZW5kXG5cdFx0KVxuXHRcdGxvY2FsIG1vZHVsZVdpa2l0ZXh0ID0gcGFja2FnZS5sb2FkZWRbXCJNb2R1bGU6TW9kdWxlIHdpa2l0ZXh0XCJdXG5cdFx0aWYgbW9kdWxlV2lraXRleHQgdGhlblxuXHRcdFx0bG9jYWwgd2lraXRleHQgPSBtb2R1bGVXaWtpdGV4dC5tYWluKClcblx0XHRcdGlmIG13LnRleHQudHJpbSh3aWtpdGV4dCkgfj0gXCJcIiB0aGVuXG5cdFx0XHRcdHJldHVybiBtdy5nZXRDdXJyZW50RnJhbWUoKTpwcmVwcm9jZXNzKG1vZHVsZVdpa2l0ZXh0Lm1haW4oKSlcblx0XHRcdGVuZFxuXHRcdGVuZFxuXHRcdHJldHVybiBcIlwiXG5cdGVuZFxufWAsXG5cdFx0XHRcdHRlbXBsYXRlc2FuZGJveGNvbnRlbnRtb2RlbDogJ1NjcmlidW50bycsXG5cdFx0XHRcdHRlbXBsYXRlc2FuZGJveGNvbnRlbnRmb3JtYXQ6ICd0ZXh0L3BsYWluJyxcblx0XHRcdFx0dGV4dDogYHt7JHttb2R1bGVDYWxsLndpa2l0ZXh0fSR7dGVtcE1vZHVsZU5hbWV9fG1haW59fWAsXG5cdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdFx0dXNlbGFuZzogZ2V0TGFuZ3VhZ2UoKSxcblx0XHRcdFx0dXNlc2tpbjogc2tpbixcblx0XHRcdH07XG5cdFx0XHRpZiAoaXNQcmV2aWV3KSB7XG5cdFx0XHRcdHBhcmFtcy5wcmV2aWV3ID0gdHJ1ZTtcblx0XHRcdFx0cGFyYW1zLmRpc2FibGVlZGl0c2VjdGlvbiA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMgYXMgbmV2ZXIpO1xuXHRcdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJzZWRXaWtpdGV4dDogc3RyaW5nID0gKGRhdGFbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmcpLnRyaW0oKTtcblxuXHRcdFx0aWYgKCFwYXJzZWRXaWtpdGV4dCkge1xuXHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHRcdC8vIOiLpeWcqOi/meS4quS4tOaXtuaooeWdl+S4reWHuumUmeWImeWPlua2iFxuXHRcdFx0fSBlbHNlIGlmICgkKHBhcnNlZFdpa2l0ZXh0KS5maW5kKCcuc2NyaWJ1bnRvLWVycm9yJykudGV4dCgpLnNlYXJjaCh0ZW1wTW9kdWxlTmFtZSkpIHtcblx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY2FsbEJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2FsbEJhY2socGFyc2VkV2lraXRleHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQocGFyc2VkV2lraXRleHQpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9hZGluZ0ZhaWxOb3RpY2UoKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHR9XG59O1xuXG5leHBvcnQge213QWRkTHVhVGV4dCwgbXdBZGRXaWtpVGV4dH07XG4iLCAiaW1wb3J0IHtsdWFHZXRDU1N3aWtpdGV4dCwgbHVhR2V0SlNPTndpa2l0ZXh0LCBsdWFHZXRKU3dpa2l0ZXh0fSBmcm9tICcuL2x1YUdldFRleHQnO1xuXG5jb25zdCB7d2dQYWdlQ29udGVudE1vZGVsfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5Yik5pat5piv5ZCm5Li6THVhXG5jb25zdCBsdWFDaGVjayA9IChpbnB1dFN0cmluZzogc3RyaW5nID0gJycsIGNvbnRlbnRNb2RlbDogc3RyaW5nID0gd2dQYWdlQ29udGVudE1vZGVsKTogc3RyaW5nID0+IHtcblx0Ly8g5qC55o2u6aG16Z2i5YaF5a655qih5Z6L6YCJ55So6YCC5b2T55qE6Kej5p6Q5qih5byPXG5cdHN3aXRjaCAoY29udGVudE1vZGVsLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRjYXNlICdqc29uJzpcblx0XHRcdHJldHVybiBsdWFHZXRKU09Od2lraXRleHQoaW5wdXRTdHJpbmcpO1xuXHRcdGNhc2UgJ2pzJzpcblx0XHRjYXNlICdqYXZhc2NyaXB0Jzpcblx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdHJldHVybiBsdWFHZXRKU3dpa2l0ZXh0KGlucHV0U3RyaW5nKTtcblx0XHRjYXNlICdjc3MnOlxuXHRcdGNhc2UgJ3Nhbml0aXplZC1jc3MnOlxuXHRcdFx0cmV0dXJuIGx1YUdldENTU3dpa2l0ZXh0KGlucHV0U3RyaW5nKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICcnO1xuXHR9XG59O1xuXG5leHBvcnQge2x1YUNoZWNrfTtcbiIsICJpbXBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fSBmcm9tICcuLi91dGlsL2FkZFBhcnNlZFdpa2l0ZXh0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtjaGVja0VsZW1lbnRFeGlzdH0gZnJvbSAnLi4vdXRpbC9jaGVja0VsZW1lbnRFeGlzdCc7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tICcuLi91dGlsL2dldExhbmd1YWdlJztcbmltcG9ydCB7bHVhQ2hlY2t9IGZyb20gJy4uL2x1YS9sdWFDaGVjayc7XG5pbXBvcnQge213QWRkV2lraVRleHR9IGZyb20gJy4vbXdBZGRUZXh0JztcbmltcG9ydCB7cmVtb3ZlTG9hZGluZ05vdGljZX0gZnJvbSAnLi4vbm90aWNlJztcblxuY29uc3Qge3NraW4sIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOWKoOWFpee8lui+keaPkOekuu+8iOiLpeWtmOWcqO+8iVxuY29uc3QgbXdBcHBseU5vdGljZSA9IGFzeW5jIChjdXJyZW50UGFnZU5hbWU6IHN0cmluZywgcGFnZVN1Yk5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0Ly8gZ2V0IHRoZSBvcmlnaW5hbCB3aWtpdGV4dCBjb250ZW50IG9mIGEgcGFnZVxuXHRcdFx0dGl0bGU6IGN1cnJlbnRQYWdlTmFtZSArIHBhZ2VTdWJOYW1lLFxuXHRcdFx0dGV4dDogYHt7I2ludm9rZTpTcGVjaWFsIHdpa2l0ZXh0L1RlbXBsYXRlfGdldE5vdGljZXN8JHtjdXJyZW50UGFnZU5hbWV9fCR7cGFnZVN1Yk5hbWV9fX1gLFxuXHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0dXNlbGFuZzogZ2V0TGFuZ3VhZ2UoKSxcblx0XHRcdHVzZXNraW46IHNraW4sXG5cdFx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgQXBpUGFyc2VQYXJhbXM7XG5cblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8udGV4dCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGh0bWwgPSBkYXRhWydwYXJzZSddLnRleHQgYXMgc3RyaW5nO1xuXHRcdGlmICgkKGh0bWwpLnRleHQoKS50cmltKCkpIHtcblx0XHRcdGFkZFBhcnNlZFdpa2l0ZXh0KGh0bWwpO1xuXHRcdH1cblx0fSBjYXRjaCB7fVxufTtcblxuLy8g5LuO6aG16Z2i5b2T5YmN5Y6G5Y+y54mI5pys5Y+W5Ye6IDx7T1BUSU9OUy53aWtpVGV4dEtleX0+XG5jb25zdCBtd0FwcGx5UmV2aXNpb24gPSBhc3luYyAoY3VycmVudFBhZ2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdC8vIGdldCB0aGUgb3JpZ2luYWwgd2lraXRleHQgY29udGVudCBvZiBhIHBhZ2Vcblx0XHRcdG9sZGlkOiB3Z1JldmlzaW9uSWQsXG5cdFx0XHRwcm9wOiAnd2lraXRleHQnLFxuXHRcdH0gYXMgY29uc3Qgc2F0aXNmaWVzIEFwaVBhcnNlUGFyYW1zO1xuXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8ud2lraXRleHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgcGFnZUNvbnRlbnQ6IHN0cmluZyA9IGx1YUNoZWNrKChkYXRhWydwYXJzZSddLndpa2l0ZXh0IGFzIHN0cmluZykudHJpbSgpKTtcblx0XHRwYWdlQ29udGVudCA9XG5cdFx0XHQoY2hlY2tFbGVtZW50RXhpc3QoJyNtdy1jbGVhcnlvdXJjYWNoZScpXG5cdFx0XHRcdD8gJ3t7I2ludm9rZTpTcGVjaWFsIHdpa2l0ZXh0L1RlbXBsYXRlfGludHxjbGVhcnlvdXJjYWNoZX19J1xuXHRcdFx0XHQ6ICcnKSArIHBhZ2VDb250ZW50O1xuXG5cdFx0aWYgKHBhZ2VDb250ZW50LnRyaW0oKSkge1xuXHRcdFx0dm9pZCBtd0FkZFdpa2lUZXh0KHBhZ2VDb250ZW50LCBjdXJyZW50UGFnZU5hbWUsIHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7bXdBcHBseU5vdGljZSwgbXdBcHBseVJldmlzaW9ufTtcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFsbE13Q29uZmlnOiBNZWRpYVdpa2lDb25maWdNYXAgPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOajgOafpU1lZGlhV2lraeeahOiuvue9rlxuY29uc3QgY2hlY2tNd0NvbmZpZyA9IChjb25maWdLZXk6IHN0cmluZywgZXhwZWN0Q29uZmlnOiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4gPT4ge1xuXHRsZXQgbXdDb25maWc6IHVua25vd24gPSBhbGxNd0NvbmZpZ1tjb25maWdLZXldO1xuXHRpZiAoIW13Q29uZmlnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0bXdDb25maWcgPSBTdHJpbmcobXdDb25maWcpLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuXHRpZiAoIW13Q29uZmlnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIGdlbmVyYXRlQXJyYXkoZXhwZWN0Q29uZmlnKS5pbmNsdWRlcyhtd0NvbmZpZyBhcyBzdHJpbmcpO1xufTtcblxuZXhwb3J0IHtjaGVja013Q29uZmlnfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5cbi8vIOajgOafpeaYr+WQpuaciemihOiniOeahOW/heimgeaAp1xuY29uc3QgY2hlY2tOZWVkUHJldmlldyA9ICgpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MLnNlYXJjaChPUFRJT05TLndpa2lUZXh0S2V5KSA+IC0xO1xufTtcblxuZXhwb3J0IHtjaGVja05lZWRQcmV2aWV3fTtcbiIsICJpbXBvcnQge2FkZExvYWRpbmdOb3RpY2UsIG5vdGljZUxvYWRpbmdFbGVtZW50LCByZW1vdmVMb2FkaW5nTm90aWNlfSBmcm9tICcuLi9ub3RpY2UnO1xuaW1wb3J0IHtsdWFHZXRDU1N3aWtpdGV4dCwgbHVhR2V0SlNPTndpa2l0ZXh0fSBmcm9tICcuLi9sdWEvbHVhR2V0VGV4dCc7XG5pbXBvcnQge213QWRkTHVhVGV4dCwgbXdBZGRXaWtpVGV4dH0gZnJvbSAnLi9td0FkZFRleHQnO1xuaW1wb3J0IHttd0FwcGx5Tm90aWNlLCBtd0FwcGx5UmV2aXNpb259IGZyb20gJy4vbXdBcHBseSc7XG5pbXBvcnQge2NoZWNrRWxlbWVudEV4aXN0fSBmcm9tICcuLi91dGlsL2NoZWNrRWxlbWVudEV4aXN0JztcbmltcG9ydCB7Y2hlY2tNd0NvbmZpZ30gZnJvbSAnLi4vdXRpbC9jaGVja013Q29uZmlnJztcbmltcG9ydCB7Y2hlY2tOZWVkUHJldmlld30gZnJvbSAnLi4vdXRpbC9jaGVja05lZWRQcmV2aWV3JztcbmltcG9ydCB7bHVhQ2hlY2t9IGZyb20gJy4uL2x1YS9sdWFDaGVjayc7XG5cbmNvbnN0IHt3Z0Nhbm9uaWNhbE5hbWVzcGFjZSwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyDnu5npobXpnaLmt7vliqDpooTop4hcbmNvbnN0IG13QWRkUHJldmlldyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8g6aKE6KeI5qih5byP5Y+q6YCC55So5LqO5Lul5LiL6aG16Z2i5YaF5a655qih5Z6LXG5cdGlmIChjaGVja013Q29uZmlnKCd3Z1BhZ2VDb250ZW50TW9kZWwnLCBbJ2phdmFzY3JpcHQnLCAnanMnLCAnanNvbicsICd0ZXh0JywgJ2NzcycsICdzYW5pdGl6ZWQtY3NzJ10pKSB7XG5cdFx0Ly8g5qih5byPMe+8mumhtemdoumihOiniFxuXHRcdGlmIChjaGVja0VsZW1lbnRFeGlzdCgnLnByZXZpZXdub3RlJykpIHtcblx0XHRcdC8vIOajgOafpeaYr+WQpuS4uumihOiniOaooeW8j1xuXHRcdFx0Ly8g6aKE6KeI5pyJ5Y+v6IO95piv5Zyo6aKE6KeI5YW25LuW5p2h55uuXG5cdFx0XHRjb25zdCBwYXRoUGF0aDogc3RyaW5nID0gZGVjb2RlVVJJKG13LnV0aWwuZ2V0VXJsKHdnUGFnZU5hbWUpKS5yZXBsYWNlKFxuXHRcdFx0XHRuZXcgUmVnRXhwKGBeXFxcXC8/JHttdy51dGlsLmdldFVybCgnJykubWF0Y2goL1thLXpdKy8pPy5bMF0gPz8gJyd9XFxcXC9gKSxcblx0XHRcdFx0Jydcblx0XHRcdCk7XG5cblx0XHRcdC8vIOiLpemihOiniOeahOmhtemdouW5tumdnuacrOi6q++8jOWImeS4jeaYvuekuumihOiniFxuXHRcdFx0aWYgKHBhdGhQYXRoICE9PSB3Z1BhZ2VOYW1lKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgd2lraXRleHQ6IHN0cmluZyA9IGx1YUNoZWNrKCk7XG5cdFx0XHRpZiAod2lraXRleHQpIHtcblx0XHRcdFx0Ly8g6Iul6Kej5p6Q57uT5p6c6Z2e56m65omN5pS+572u6aKE6KeIXG5cdFx0XHRcdGFkZExvYWRpbmdOb3RpY2UoKTsgLy8g5pS+572u5o+Q56S677yM5o+Q56S65L2/55So6ICF562J5b6FQUpBWFxuXHRcdFx0XHR2b2lkIG13QWRkV2lraVRleHQod2lraXRleHQsIHdnUGFnZU5hbWUsIHRydWUpOyAvLyDoi6Xlj5blvpcgX2FkZFRleHQg5YiZ5pi+56S66aKE6KeIXG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICghY2hlY2tFbGVtZW50RXhpc3QoJy5tdy1fYWRkVGV4dC1jb250ZW50JykgJiYgY2hlY2tNd0NvbmZpZygnd2dBY3Rpb24nLCAndmlldycpKSB7XG5cdFx0XHQvLyDmqKHlvI8y77ya5LiN5pSv5oyB5pi+56S655qE54m55q6K6aG16Z2iXG5cdFx0XHQvLyDnu4/mn6XvvIzkuI3mraLmmK/mqKHmnb/moLflvI/vvIzmiYDmnInmnKrltYzlhaUnI213LWNsZWFyeW91cmNhY2hlJ+eahOmhtemdoueahuaXoOazleato+W4uOaYvuekulxuXHRcdFx0aWYgKCFjaGVja05lZWRQcmV2aWV3KCkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyDmsqHmnInpooTop4jlv4XopoHml7bvvIznm7TmjqXlgZzmraLnqIvluo/vvIzkuI3nu6fnu63liKTmlq3vvIzku6Xmj5Dpq5jmlYjnjodcblx0XHRcdH1cblxuXHRcdFx0Ly8g6Iul5bey5pyJI213LWNsZWFyeW91cmNhY2hl5YiZ5YWI5riF5o6J77yM5ZCm5YiZ5Lya5Ye6546w5Lik5LiqTWVkaWFXaWtpOkNsZWFyeW91cmNhY2hlXG5cdFx0XHQkYm9keS5maW5kKCcjbXctY2xlYXJ5b3VyY2FjaGUnKS5odG1sKCcnKTtcblxuXHRcdFx0aWYgKCFjaGVja0VsZW1lbnRFeGlzdCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpKSB7XG5cdFx0XHRcdC8vIOmdnue8lui+keaooeW8j+aJjeaJp+ihjCAo6aKE6KeI5L2/55So5LiK5pa555qEaWbljLrlnZcpXG5cdFx0XHRcdGFkZExvYWRpbmdOb3RpY2UoKTsgLy8g5pS+572u5o+Q56S677yM5o+Q56S65L2/55So6ICF562J5b6FQUpBWFxuXHRcdFx0XHR2b2lkIG13QXBwbHlSZXZpc2lvbih3Z1BhZ2VOYW1lKTsgLy8g5Li65LqG6K6p5Y6G5Y+y54mI5pys5q2j5bi45pi+56S677yM5L2/55Sod2dSZXZpc2lvbklk5Y+W5b6X5YaF5a65XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChjaGVja0VsZW1lbnRFeGlzdCgnI213LXJldmlzaW9uLWluZm8nKSAmJiBjaGVja013Q29uZmlnKCd3Z0FjdGlvbicsICd2aWV3JykpIHtcblx0XHRcdC8vIOaooeW8jzPvvJrpobXpnaLljoblj7LniYjmnKzmo4Dop4bvvJrlpoLpnIDlpI3mn6XnmoTpobnnm67kuLrpobXpnaLljoblj7LniYjmnKzvvIzmnKzlt6Xlhbfmj5DkvpvpobXpnaLljoblj7LniYjmnKzlhoXlrrnmmL7npLrmlK/mjIFcblx0XHRcdC8vIOacieW1jOWFpScjbXctY2xlYXJ5b3VyY2FjaGUn55qE6aG16Z2i55qE5Y6G5Y+y54mI5pys5Lya5Y+q6IO95pi+56S65pyA5paw54mI55qEIF9hZGRUZXh0IOWboOatpOaJp+ihjOS/ruato1xuXHRcdFx0aWYgKCFjaGVja0VsZW1lbnRFeGlzdCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpKSB7XG5cdFx0XHRcdC8vIOmdnue8lui+keaooeW8j+aJjeaJp+ihjCAo6aKE6KeI5L2/55So5LiK5pa555qEaWbljLrlnZcpXG5cdFx0XHRcdCRib2R5LmZpbmQoJyNtdy1jbGVhcnlvdXJjYWNoZScpLmh0bWwobm90aWNlTG9hZGluZ0VsZW1lbnQpOyAvLyDlt67lvILmqKHlvI/vvIjlkKvmo4DpmIXkv67orqLniYjmnKzliKDpmaTvvInnmoTmj5LlhaXngrnkuI3lkIxcblx0XHRcdFx0dm9pZCBtd0FwcGx5UmV2aXNpb24od2dQYWdlTmFtZSk7IC8vIOS4uuS6huiuqeeJueWumueJiOacrOato+W4uOaYvuekuu+8jOS9v+eUqHdnUmV2aXNpb25JZOWPluW+l+WGheWuuVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGNoZWNrTXdDb25maWcoJ3dnUGFnZUNvbnRlbnRNb2RlbCcsIFsnc2NyaWJ1bnRvJywgJ2x1YSddKSkge1xuXHRcdC8vIOaooeWdl+mihOiniOWKn+iDvVxuXHRcdGlmICghY2hlY2tOZWVkUHJldmlldygpKSB7XG5cdFx0XHRyZXR1cm47IC8vIOayoeaciemihOiniOW/heimgeaXtu+8jOebtOaOpeWBnOatoueoi+W6j++8jOS4jee7p+e7reWIpOaWre+8jOS7peaPkOmrmOaViOeOh1xuXHRcdH1cblxuXHRcdGlmIChcblx0XHRcdGNoZWNrRWxlbWVudEV4aXN0KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykgJiZcblx0XHRcdGNoZWNrRWxlbWVudEV4aXN0KCd0YWJsZS5kaWZmJykgJiZcblx0XHRcdCFjaGVja0VsZW1lbnRFeGlzdCgnLnByZXZpZXdub3RlJykgJiZcblx0XHRcdCFjaGVja013Q29uZmlnKCd3Z0FjdGlvbicsICd2aWV3Jylcblx0XHQpIHtcblx0XHRcdCQobm90aWNlTG9hZGluZ0VsZW1lbnQpLmluc2VydEFmdGVyKCcjd2lraURpZmYnKTtcblx0XHRcdHZvaWQgbXdBZGRMdWFUZXh0KFxuXHRcdFx0XHQoJGJvZHkuZmluZCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpLnZhbCgpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJycsXG5cdFx0XHRcdHdnUGFnZU5hbWUsXG5cdFx0XHRcdHRydWVcblx0XHRcdCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcubXctdW5kZWxldGUtcmV2aXNpb24nKSkge1xuXHRcdC8vIOaooeW8jzTvvJrlt7LliKDpobXpnaLpooTop4hcblx0XHQvLyDlt7LliKDlhoXlrrnpobXpnaLmmK/nibnmrorpobXpnaLvvIzml6Dms5XnlKjluLjop4TmlrnlvI/liKTmlq3pobXpnaLlhoXlrrnmqKHlnotcblx0XHRpZiAoIWNoZWNrTmVlZFByZXZpZXcoKSkge1xuXHRcdFx0cmV0dXJuOyAvLyDmsqHmnInpooTop4jlv4XopoHml7bvvIznm7TmjqXlgZzmraLnqIvluo/vvIzkuI3nu6fnu63liKTmlq3vvIzku6Xmj5Dpq5jmlYjnjodcblx0XHR9XG5cblx0XHRpZiAoY2hlY2tFbGVtZW50RXhpc3QoWycubXctaGlnaGxpZ2h0JywgJ3ByZScsICcubXctanNvbiddKSkge1xuXHRcdFx0Ly8g56Gu6K6k5q2j5Zyo6aKE6KeI5bey5Yig5YaF5a65XG5cdFx0XHRjb25zdCB0ZXh0YXJlYUNvbnRlbnQ6IHN0cmluZyA9ICRib2R5LmZpbmQoJ3RleHRhcmVhJykudmFsKCkgPz8gJyc7IC8vIOWwneivleWPluW+l+W3suWIoOWGheWuuea6kOS7o+eggVxuXG5cdFx0XHRsZXQgd2lraXRleHQ6IHN0cmluZyA9IGx1YUdldEpTT053aWtpdGV4dCh0ZXh0YXJlYUNvbnRlbnQpO1xuXHRcdFx0aWYgKCF3aWtpdGV4dCkge1xuXHRcdFx0XHR3aWtpdGV4dCA9IGx1YUdldENTU3dpa2l0ZXh0KHRleHRhcmVhQ29udGVudCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHQvLyDoi6Xlj5blvpcgX2FkZFRleHQg5YiZ5pi+56S66aKE6KeIXG5cdFx0XHRcdGFkZExvYWRpbmdOb3RpY2UoKTtcblx0XHRcdFx0dm9pZCBtd0FkZFdpa2lUZXh0KHdpa2l0ZXh0LCBtdy5jb25maWcuZ2V0KCd3Z1JlbGV2YW50UGFnZU5hbWUnKSwgdHJ1ZSk7XG5cdFx0XHR9IGVsc2UgaWYgKC9tb2R1bGVbIF9dd2lraXRleHQuKl9hZGR0ZXh0L2kudGVzdCgkYm9keS5maW5kKCcubXctcGFyc2VyLW91dHB1dCcpLnRleHQoKSkpIHtcblx0XHRcdFx0Ly8g5bCd6K+VTHVh6Kej5p6QXG5cdFx0XHRcdC8vIOacrOWKn+iDveebruWJjea1i+ivleato+W4uOi/kOS9nFxuXHRcdFx0XHQvLyDoi6Xlk6rlpKnpooTop4jlj4jlpLHmlYjvvIzor7flj5bmtojms6jph4rkuIvmlrnpgqPooYxcblx0XHRcdFx0Ly8gbXdBZGRMdWFUZXh0KHRleHRhcmVhQ29udGVudCwgbXcuY29uZmlnLmdldChcIndnUmVsZXZhbnRQYWdlTmFtZVwiKSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCFjaGVja0VsZW1lbnRFeGlzdCgnLm13LWVkaXRub3RpY2UnKSAmJiBjaGVja013Q29uZmlnKCd3Z0Nhbm9uaWNhbE5hbWVzcGFjZScsICdzcGVjaWFsJykpIHtcblx0XHQvLyDoi6XnibnmrorpobXpnaLnvLrkuY/nvJbovpHmj5DnpLrvvIzliJnooaXkuIrnvJbovpHmj5DnpLogKOiLpeWtmOWcqClcblx0XHRjb25zdCBwYWdlU3ViTmFtZTogc3RyaW5nID0gd2dQYWdlTmFtZS5yZXBsYWNlKC9zcGVjaWFsOlteL10rL2ksICcnKTtcblx0XHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUpIHtcblx0XHRcdGNvbnN0IGZ1bGxQYWdlTmFtZTogc3RyaW5nID0gYCR7d2dDYW5vbmljYWxOYW1lc3BhY2V9OiR7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9YDtcblx0XHRcdHZvaWQgbXdBcHBseU5vdGljZShmdWxsUGFnZU5hbWUsIHBhZ2VTdWJOYW1lKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpOyAvLyDpg73kuI3mmK/nmoTmg4XlhrXliJnkuI3mmL7npLrpooTop4hcblx0fVxufTtcblxuZXhwb3J0IHttd0FkZFByZXZpZXd9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2NoZWNrTmVlZFByZXZpZXd9IGZyb20gJy4vdXRpbC9jaGVja05lZWRQcmV2aWV3JztcbmltcG9ydCB7bHVhQ2hlY2t9IGZyb20gJy4vbHVhL2x1YUNoZWNrJztcbmltcG9ydCB7bXdBZGRMdWFUZXh0fSBmcm9tICcuL213L213QWRkVGV4dCc7XG5pbXBvcnQge25vdGljZUxvYWRpbmdFbGVtZW50fSBmcm9tICcuL25vdGljZSc7XG5cbmNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5pys6ISa5pys55qEVGVzdGNhc2VcbmNvbnN0IHdpa2l0ZXh0UHJldmlld1Rlc3RjYXNlID0gYXN5bmMgKGlzUHJldmlldzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHQvLyDmsqHmnInlj6/pooTop4jlhYPntKDvvIzpgIDlh7rjgIJcblx0aWYgKCFjaGVja05lZWRQcmV2aWV3KCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0ZXN0Y2FzZUxpc3Q6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXG5cdFx0Jy5zcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UnXG5cdCk7XG5cdC8vIOiLpemhtemdouS4reayoeaciVRlc3RjYXNl77yM6YCA5Ye644CCXG5cdGlmICghdGVzdGNhc2VMaXN0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIOaUtumbhuS9jeS6jumhtemdouS4reeahFRlc3RjYXNl6aKE6KeI5YWD57SgXG5cdGNvbnN0IHRlc3RjYXNlRGF0YUxpc3Q6IHtcblx0XHRlbGVtZW50OiBIVE1MRWxlbWVudDtcblx0XHRsYW5nOiBzdHJpbmc7XG5cdFx0Y29kZTogc3RyaW5nO1xuXHR9W10gPSBbXTtcblxuXHRsZXQgaTogbnVtYmVyID0gMDtcblx0Zm9yIChpID0gMDsgaSA8IHRlc3RjYXNlTGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkID0gdGVzdGNhc2VMaXN0W2ldO1xuXHRcdGlmICghZWxlbWVudCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29kZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5tdy1oaWdobGlnaHQnKTtcblx0XHRpZiAoIWNvZGVFbGVtZW50KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCB7Y2xhc3NOYW1lfSA9IGNvZGVFbGVtZW50O1xuXHRcdGlmICghY2xhc3NOYW1lKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBbLCBjb2RlSWRdID0gL213LWhpZ2hsaWdodC1sYW5nLShcXFMrKS8uZXhlYyhjbGFzc05hbWUpID8/IFtdO1xuXHRcdGNvbnN0IHtsZW5ndGh9ID0gdGVzdGNhc2VEYXRhTGlzdDtcblxuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdwcmV2aWV3LWlkJywgbGVuZ3RoLnRvU3RyaW5nKCkpO1xuXHRcdHRlc3RjYXNlRGF0YUxpc3RbbGVuZ3RoXSA9IHtcblx0XHRcdGVsZW1lbnQsXG5cdFx0XHRsYW5nOiBjb2RlSWQ/LnRvTG93ZXJDYXNlKCkgPz8gJycsXG5cdFx0XHRjb2RlOiBjb2RlRWxlbWVudC50ZXh0Q29udGVudD8udHJpbSgpID8/ICcnLFxuXHRcdH07IC8vIFJlcGxhY2UgYHRlc3RjYXNlRGF0YUxpc3QucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHQvLyDmlbTnkIbpobXpnaLkuK3nmoRUZXN0Y2FzZemihOiniOWFg+e0oO+8jOW5tuaUvue9ruKAnFvovb3lhaXkuK1d4oCd5raI5oGvXG5cdGxldCBwYWNrYWdlV2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXHRmb3IgKGNvbnN0IHRlc3RjYXNlSXRlbSBvZiBPYmplY3QudmFsdWVzKHRlc3RjYXNlRGF0YUxpc3QpKSB7XG5cdFx0Y29uc3Qge2NvZGUsIGVsZW1lbnQsIGxhbmd9ID0gdGVzdGNhc2VJdGVtO1xuXG5cdFx0aWYgKCFjb2RlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblxuXHRcdGlmIChbJ2phdmFzY3JpcHQnLCAnanMnLCAnY3NzJywgJ2pzb24nLCAndGV4dCddLmluY2x1ZGVzKHRlc3RjYXNlSXRlbS5sYW5nKSkge1xuXHRcdFx0Y29uc3Qgd2lraXRleHQ6IHN0cmluZyA9IGx1YUNoZWNrKGNvZGUsIGxhbmcpO1xuXHRcdFx0aWYgKHdpa2l0ZXh0KSB7XG5cdFx0XHRcdC8vIOiLpeino+aekOe7k+aenOmdnuepuuaJjeaUvue9rumihOiniFxuXHRcdFx0XHQkZWxlbWVudC5wcmVwZW5kKG5vdGljZUxvYWRpbmdFbGVtZW50KTtcblx0XHRcdFx0cGFja2FnZVdpa2l0ZXh0ICs9IGA8ZGl2IGNsYXNzPVwic3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLSR7aX1cIj5cXG4ke3dpa2l0ZXh0fVxcbjwvZGl2PmA7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChbJ2x1YScsICdzY3JpYnVudG8nXS5pbmNsdWRlcyhsYW5nKSkge1xuXHRcdFx0dm9pZCBtd0FkZEx1YVRleHQoXG5cdFx0XHRcdGNvZGUsXG5cdFx0XHRcdHdnUGFnZU5hbWUsXG5cdFx0XHRcdGlzUHJldmlldyxcblx0XHRcdFx0KCgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKHdpa2l0ZXh0OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdCRlbGVtZW50LnByZXBlbmQod2lraXRleHQpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0pKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8g5bCG5pW055CG5a6M55qEVGVzdGNhc2XpooTop4jlhYPntKDnu5/kuIDlj5HpgIFBUEnor7fmsYLvvIzlubblsIbov5Tlm57nu5PmnpzliIblj5HliLDlkIRUZXN0Y2FzZVxuXHRpZiAocGFja2FnZVdpa2l0ZXh0KSB7XG5cdFx0cGFja2FnZVdpa2l0ZXh0ID0gYDxkaXYgY2xhc3M9XCJzcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtdW5kZWZpbmVkXCI+JHtwYWNrYWdlV2lraXRleHR9PC9kaXY+YDtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0ZXh0OiBwYWNrYWdlV2lraXRleHQsXG5cdFx0XHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0fTtcblx0XHRcdGlmIChpc1ByZXZpZXcpIHtcblx0XHRcdFx0cGFyYW1zLmRpc2FibGVlZGl0c2VjdGlvbiA9IHRydWU7XG5cdFx0XHRcdHBhcmFtcy5wcmV2aWV3ID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyBhcyBuZXZlcik7XG5cdFx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8udGV4dCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcgPSAoZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZykudHJpbSgpO1xuXHRcdFx0aWYgKHBhcnNlZFdpa2l0ZXh0KSB7XG5cdFx0XHRcdGNvbnN0ICRwYXJzZWRFbGVtZW50OiBKUXVlcnkgPSAkKHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRcdFx0Zm9yIChjb25zdCBba2V5LCB0ZXN0Y2FzZUl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHRlc3RjYXNlRGF0YUxpc3QpKSB7XG5cdFx0XHRcdFx0Y29uc3Qge2VsZW1lbnQsIGxhbmd9ID0gdGVzdGNhc2VJdGVtO1xuXG5cdFx0XHRcdFx0aWYgKCFbJ2phdmFzY3JpcHQnLCAnanMnLCAndGV4dCcsICdjc3MnLCAnanNvbiddLmluY2x1ZGVzKGxhbmcpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICRwYXJzZWRFbGVtZW50LmZpbmQoXG5cdFx0XHRcdFx0XHRgLnNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS11bmRlZmluZWQgPiAuc3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLSR7a2V5fWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmICghJGVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkYWRkVGFyZ2V0OiBKUXVlcnkgPSAkKGVsZW1lbnQpLmZpbmQoJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nJyk7XG5cdFx0XHRcdFx0JGFkZFRhcmdldC5odG1sKCRlbGVtZW50Lmh0bWwoKSk7XG5cdFx0XHRcdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmZpcmUoJGFkZFRhcmdldCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cbn07XG5cbmV4cG9ydCB7d2lraXRleHRQcmV2aWV3VGVzdGNhc2V9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ2YsSUFBTUMsd0JBQXdCO0FBQzlCLElBQU1DLHNCQUFzQjs7QUNEbkMsSUFBQUMscUJBQWtCQyxRQUFBSixRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEIsSUFBQUssb0JBQXVCTCxRQUFBLGlCQUFBO0FBRXZCLElBQU1NLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUYsa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTTCxrQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRSxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7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Y0FBYyxNQUFNLFFBQVEsT0FBTyxNQUFNLEVBQUU3RyxTQUFTRCxJQUFJLEdBQUc7QUFDaEU7WUFDRDtBQUVBLGtCQUFNMUUsV0FBZ0MyTCxlQUFlMUwsS0FBQSxxRkFBQXFCLE9BQ2lDeEQsR0FBRyxDQUN6RjtBQUNBLGdCQUFJLENBQUNrQyxTQUFTZ0MsUUFBUTtBQUNyQjtZQUNEO0FBRUEsa0JBQU04SixhQUFxQmpNLEVBQUVZLE9BQU8sRUFBRVIsS0FBSyxrQ0FBa0M7QUFDN0U2TCx1QkFBVy9MLEtBQUtDLFNBQVNELEtBQUssQ0FBQztBQUMvQkcsZUFBR0MsS0FBSyxrQkFBa0IsRUFBRUMsS0FBSzBMLFVBQVU7VUFDNUM7UUFDRDtNQUNELFFBQVE7TUFBQztJQUNWO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0EvSE0xQix5QkFBQTJCLE1BQUE7QUFBQSxXQUFBMUIsTUFBQWpFLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QWxCTE4sTUFBQSxHQUFLckosbUJBQUFnUCxTQUFRLEVBQUVDLEtBQUssU0FBU0MsZ0JBQWdCdE0sT0FBc0M7QUFFbEZ5SixlQUFhekosS0FBSztBQUVsQixPQUFLd0ssd0JBQXdCLElBQUk7QUFDbEMsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgInJlcXVpcmUiLCAicHJldmlld0xvYWRpbmdDb250ZW50IiwgInByZXZpZXdMb2FkaW5nSW5uZXIiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkZhaWxlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJMb2FkaW5nIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAic3JjIiwgImRlY29kaW5nIiwgIndpZHRoIiwgImhlaWdodCIsICJpZCIsICJjbGFzc05hbWUiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImNoZWNrRWxlbWVudEV4aXN0IiwgInNlbGVjdG9ycyIsICJzZWxlY3RvckFycmF5IiwgImdlbmVyYXRlQXJyYXkiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAic2VsZWN0b3IiLCAidmFsdWUiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJlcnIiLCAiZSIsICJmIiwgImFkZFBhcnNlZFdpa2l0ZXh0IiwgInBhcnNlZFdpa2l0ZXh0IiwgIiRib2R5IiwgIiQiLCAiJHBhcnNlZFdpa2l0ZXh0IiwgImh0bWwiLCAiJGVsZW1lbnQiLCAiZmluZCIsICJtdyIsICJob29rIiwgImZpcmUiLCAiYXBwZW5kIiwgIm5vdGljZUZhaWxFbGVtZW50IiwgIm5vdGljZUxvYWRpbmdFbGVtZW50IiwgInJlcGxhY2VET00iLCAiZWxlbWVudCIsICJhZGRMb2FkaW5nTm90aWNlIiwgImxvYWRpbmdGYWlsTm90aWNlIiwgInJlbW92ZUxvYWRpbmdOb3RpY2UiLCAid2lraVRleHRLZXkiLCAidmVyc2lvbiIsICJsdWFBZGRUZXh0IiwgImlucHV0U3RyaW5nIiwgIm5ld1N0cmluZyIsICJpc0VzY2FwZSIsICJlc2NhcGVTdHJpbmciLCAiSlNPTiIsICJwYXJzZSIsICJjb25jYXQiLCAic3RyaW5naWZ5IiwgInJlcGxhY2UiLCAibHVhR2V0U3RyaW5nIiwgInRlc3RTdHJpbmdFeGVjQXJyYXkiLCAiZXhlYyIsICJ0ZXN0U3RyaW5nIiwgInNsaWNlIiwgIk1hdGgiLCAibWF4IiwgImxlbmd0aCIsICJ0cmltQ2hlY2siLCAidHJpbSIsICJmaXJzdENoYXIiLCAiY2hhckF0IiwgImF0IiwgImx1YUdldENvbnRlbnRUZXh0IiwgIndpa2l0ZXh0IiwgIlJlZ0V4cCIsICJzdWJzdHJpbmciLCAidGVtcFRleHQiLCAibHVhR2V0T2JqVGV4dCIsICJsdWFHZXRDU1N3aWtpdGV4dCIsICJfcmVmIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJjc3NUZXh0IiwgImx1YUdldEpTT053aWtpdGV4dCIsICJfcmVmMiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwgIkpTT05UZXh0IiwgImpzb25EYXRhIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJ0ZXN0IiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMyIiwgImsiLCAidiIsICJsdWFHZXRKU3dpa2l0ZXh0IiwgIl9yZWYzIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDMiLCAianNUZXh0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhcGkiLCAiaW5pdE13QXBpIiwgIndnVXNlckxhbmd1YWdlIiwgIndnVXNlclZhcmlhbnQiLCAiY29uZmlnIiwgImdldCIsICJnZXRMYW5ndWFnZSIsICJsYW5nIiwgImluY2x1ZGVzIiwgInNraW4iLCAibXdBZGRXaWtpVGV4dCIsICJfcmVmNCIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlTmFtZSIsICJpc1ByZXZpZXciLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aXRsZSIsICJjb250ZW50bW9kZWwiLCAidGV4dCIsICJwcm9wIiwgInVzZWxhbmciLCAidXNlc2tpbiIsICJkaXNhYmxlZWRpdHNlY3Rpb24iLCAicHJldmlldyIsICJfZGF0YSRwYXJzZSIsICJkYXRhIiwgInBvc3QiLCAiX3giLCAiX3gyIiwgIl94MyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAibXdBZGRMdWFUZXh0IiwgIl9yZWY1IiwgImNhbGxCYWNrIiwgInRlbXBNb2R1bGVOYW1lIiwgIm1vZHVsZUNhbGwiLCAiX2RhdGEkcGFyc2UyIiwgInRlbXBsYXRlc2FuZGJveHRpdGxlIiwgInRlbXBsYXRlc2FuZGJveHRleHQiLCAidGVtcGxhdGVzYW5kYm94Y29udGVudG1vZGVsIiwgInRlbXBsYXRlc2FuZGJveGNvbnRlbnRmb3JtYXQiLCAic2VhcmNoIiwgIl94NCIsICJfeDUiLCAiX3g2IiwgIl94NyIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAibHVhQ2hlY2siLCAiY29udGVudE1vZGVsIiwgInRvTG93ZXJDYXNlIiwgInNraW4yIiwgIndnUmV2aXNpb25JZCIsICJtd0FwcGx5Tm90aWNlIiwgIl9yZWY2IiwgImN1cnJlbnRQYWdlTmFtZSIsICJwYWdlU3ViTmFtZSIsICJfZGF0YSRwYXJzZTMiLCAiX3g4IiwgIl94OSIsICJtd0FwcGx5UmV2aXNpb24iLCAiX3JlZjciLCAiX2RhdGEkcGFyc2U0IiwgIm9sZGlkIiwgInBhZ2VDb250ZW50IiwgIl94MTAiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImFsbE13Q29uZmlnIiwgImNoZWNrTXdDb25maWciLCAiY29uZmlnS2V5IiwgImV4cGVjdENvbmZpZyIsICJtd0NvbmZpZyIsICJTdHJpbmciLCAiY2hlY2tOZWVkUHJldmlldyIsICJib2R5IiwgImlubmVySFRNTCIsICJ3Z0Nhbm9uaWNhbE5hbWVzcGFjZSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z1BhZ2VOYW1lIiwgIm13QWRkUHJldmlldyIsICJfbXckdXRpbCRnZXRVcmwkbWF0Y2giLCAiX213JHV0aWwkZ2V0VXJsJG1hdGNoMiIsICJwYXRoUGF0aCIsICJkZWNvZGVVUkkiLCAidXRpbCIsICJnZXRVcmwiLCAibWF0Y2giLCAiXyRib2R5JGZpbmQkdmFsIiwgImluc2VydEFmdGVyIiwgInZhbCIsICJfJGJvZHkkZmluZCR2YWwyIiwgInRleHRhcmVhQ29udGVudCIsICJmdWxsUGFnZU5hbWUiLCAid2dQYWdlTmFtZTIiLCAid2lraXRleHRQcmV2aWV3VGVzdGNhc2UiLCAiX3JlZjgiLCAidGVzdGNhc2VMaXN0IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAidGVzdGNhc2VEYXRhTGlzdCIsICJpIiwgIl9leGVjIiwgIl9jb2RlSWQkdG9Mb3dlckNhc2UiLCAiX2NvZGVFbGVtZW50JHRleHRDb250IiwgIl9jb2RlRWxlbWVudCR0ZXh0Q29udDIiLCAiY29kZUVsZW1lbnQiLCAiY29kZUlkIiwgInNldEF0dHJpYnV0ZSIsICJ0b1N0cmluZyIsICJjb2RlIiwgInRleHRDb250ZW50IiwgInBhY2thZ2VXaWtpdGV4dCIsICJfaTMiLCAiX09iamVjdCR2YWx1ZXMiLCAidmFsdWVzIiwgInRlc3RjYXNlSXRlbSIsICJwcmVwZW5kIiwgIl9kYXRhJHBhcnNlNSIsICIkcGFyc2VkRWxlbWVudCIsICJfaTQiLCAiX09iamVjdCRlbnRyaWVzMyIsICIkYWRkVGFyZ2V0IiwgIl94MTEiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInNwZWNpYWxXaWtpdGV4dCJdCn0K
