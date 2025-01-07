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
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
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
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
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
//! src/SpecialWikitext/images/Ajax-loader.gif
var Ajax_loader_default = "data:image/gif;base64,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";
//! src/SpecialWikitext/images/Alert.png
var Alert_default = "data:image/png;base64,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";
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
  src: Alert_default,
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
  src: Ajax_loader_default,
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
        const data = yield api.get(params);
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
        const data = yield api.get(params);
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
        useskin: skin2,
        smaxage: 600,
        maxage: 600
      };
      const data = yield api.get(params);
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
        prop: "wikitext",
        smaxage: 600,
        maxage: 600
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
        const data = yield api.get(params);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NwZWNpYWxXaWtpdGV4dC9TcGVjaWFsV2lraXRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9jb21wb25lbnRzL1NwZWNpYWxXaWtpdGV4dC5tb2R1bGUubGVzcyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvZ2VuZXJhdGVFbGVtZW50cy50c3giLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tFbGVtZW50RXhpc3QudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvYWRkUGFyc2VkV2lraXRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL25vdGljZS50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L29wdGlvbnMuanNvbiIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUFkZFRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2x1YS9sdWFHZXRUZXh0LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvZ2V0TGFuZ3VhZ2UudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL213L213QWRkVGV4dC50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUNoZWNrLnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9tdy9td0FwcGx5LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy91dGlsL2NoZWNrTXdDb25maWcudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tOZWVkUHJldmlldy50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbXcvbXdBZGRQcmV2aWV3LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy93aWtpdGV4dFByZXZpZXdUZXN0Y2FzZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHttd0FkZFByZXZpZXd9IGZyb20gJy4vbW9kdWxlcy9tdy9td0FkZFByZXZpZXcnO1xuaW1wb3J0IHt3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZX0gZnJvbSAnLi9tb2R1bGVzL3dpa2l0ZXh0UHJldmlld1Rlc3RjYXNlJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzcGVjaWFsV2lraXRleHQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdC8vIOaJp+ihjOmihOiniFxuXHRtd0FkZFByZXZpZXcoJGJvZHkpO1xuXHQvLyDmo4Dmn6XmtYvor5XmoLfkvotcblx0dm9pZCB3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSh0cnVlKTtcbn0pO1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvU3BlY2lhbFdpa2l0ZXh0Lm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgcHJldmlld0xvYWRpbmdDb250ZW50ID0gXCJTcGVjaWFsV2lraXRleHQtbW9kdWxlX19wcmV2aWV3LWxvYWRpbmdfX2NvbnRlbnRfMFByRGxHXCI7XG5leHBvcnQgY29uc3QgcHJldmlld0xvYWRpbmdJbm5lciA9IFwiU3BlY2lhbFdpa2l0ZXh0LW1vZHVsZV9fcHJldmlldy1sb2FkaW5nX19pbm5lcl8wUHJEbEdcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInByZXZpZXdMb2FkaW5nQ29udGVudFwiOiBwcmV2aWV3TG9hZGluZ0NvbnRlbnQsXG4gIFwicHJldmlld0xvYWRpbmdJbm5lclwiOiBwcmV2aWV3TG9hZGluZ0lubmVyXG59O1xuICAgICAgIiwgImltcG9ydCB7cHJldmlld0xvYWRpbmdDb250ZW50LCBwcmV2aWV3TG9hZGluZ0lubmVyfSBmcm9tICcuL1NwZWNpYWxXaWtpdGV4dC5tb2R1bGUubGVzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQgYWpheExvYWRlciBmcm9tICcuLi9pbWFnZXMvQWpheC1sb2FkZXIuZ2lmJztcbmltcG9ydCBhbGVydCBmcm9tICcuLi9pbWFnZXMvQWxlcnQucG5nJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcblxuY29uc3QgRmFpbGVkID0gKCkgPT4gKFxuXHQ8PlxuXHRcdDxpbWcgc3JjPXthbGVydH0gZGVjb2Rpbmc9XCJhc3luY1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIC8+XG5cdFx0PHNwYW4+Jm5ic3A7e2dldE1lc3NhZ2UoJ0ZhaWxlZCcpfTwvc3Bhbj5cblx0PC8+XG4pO1xuXG5jb25zdCBMb2FkaW5nID0gKCkgPT4gKFxuXHQ8ZGl2IGlkPVwic3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZ1wiPlxuXHRcdDxkaXYgY2xhc3NOYW1lPXtbJ3F1b3RlYm94JywgcHJldmlld0xvYWRpbmdJbm5lcl19IGlkPVwic3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZ19faW5uZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtwcmV2aWV3TG9hZGluZ0NvbnRlbnR9IGlkPVwic3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZ19fY29udGVudFwiPlxuXHRcdFx0XHQ8aW1nIHNyYz17YWpheExvYWRlcn0gZGVjb2Rpbmc9XCJhc3luY1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIC8+XG5cdFx0XHRcdDxzcGFuPiZuYnNwO3tnZXRNZXNzYWdlKCdMb2FkaW5nJyl9PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuKTtcblxuZXhwb3J0IHtGYWlsZWQsIExvYWRpbmd9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRGYWlsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmFpbGVkIHRvIGxvYWQgcHJldmlldy4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6aKE6KeI5Yqg6L295aSx6LSlJyxcblx0XHRcdCd6aC1oYW50JzogJ+mgkOimvei8ieWFpeWksei0pScsXG5cdFx0fSksXG5cdFx0TG9hZGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nIHByZXZpZXcuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6aKE6KeI5Yqg6L295Lit4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+mgkOimvei8ieWFpeS4reKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuLy8g5qOA5p+lc2VsZWN0b3Llr7nlupTnmoRET03lr7nosaHmmK/lkKblrZjlnKhcbmNvbnN0IGNoZWNrRWxlbWVudEV4aXN0ID0gKHNlbGVjdG9yczogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuID0+IHtcblx0Y29uc3Qgc2VsZWN0b3JBcnJheTogc3RyaW5nW10gPSBnZW5lcmF0ZUFycmF5KHNlbGVjdG9ycyk7XG5cblx0Zm9yIChjb25zdCBzZWxlY3RvciBvZiBzZWxlY3RvckFycmF5KSB7XG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQge2NoZWNrRWxlbWVudEV4aXN0fTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2NoZWNrRWxlbWVudEV4aXN0fSBmcm9tICcuL2NoZWNrRWxlbWVudEV4aXN0JztcblxuLy8g5bCG6Kej5p6Q5ZCO55qEd2lraXRleHTliqDlhaXpobXpnaLkuK1cbmNvbnN0IGFkZFBhcnNlZFdpa2l0ZXh0ID0gKHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpOiB2b2lkID0+IHtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRjb25zdCAkcGFyc2VkV2lraXRleHQ6IEpRdWVyeSA9ICQoKS5odG1sKHBhcnNlZFdpa2l0ZXh0KTtcblxuXHRpZiAoY2hlY2tFbGVtZW50RXhpc3QoJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nJykpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmcnKTtcblx0XHQkZWxlbWVudC5odG1sKHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkZWxlbWVudCk7XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5kaWZmLWN1cnJlbnR2ZXJzaW9uLXRpdGxlJykpIHtcblx0XHQkYm9keS5maW5kKCcuZGlmZi1jdXJyZW50dmVyc2lvbi10aXRsZScpLmFwcGVuZCgkcGFyc2VkV2lraXRleHQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcucHJldmlld25vdGUnKSkge1xuXHRcdCRib2R5LmZpbmQoJy5wcmV2aWV3bm90ZScpLmFwcGVuZCgkcGFyc2VkV2lraXRleHQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcubXctdW5kZWxldGUtcmV2aXNpb24nKSkge1xuXHRcdCRib2R5LmZpbmQoJy5tdy11bmRlbGV0ZS1yZXZpc2lvbicpLmFwcGVuZCgkcGFyc2VkV2lraXRleHQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcjbXctY29udGVudC10ZXh0JykpIHtcblx0XHQkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0JykuYXBwZW5kKCRwYXJzZWRXaWtpdGV4dCk7XG5cdH1cblxuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkcGFyc2VkV2lraXRleHQpO1xufTtcblxuZXhwb3J0IHthZGRQYXJzZWRXaWtpdGV4dH07XG4iLCAiaW1wb3J0IHtGYWlsZWQsIExvYWRpbmd9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2VuZXJhdGVFbGVtZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fSBmcm9tICcuL3V0aWwvYWRkUGFyc2VkV2lraXRleHQnO1xuXG4vLyBbW0ZpbGU6R25vbWUtZGlhbG9nLXdhcm5pbmcyLnN2Z3wzMnB4XV1cbi8vIC17emgtaGFuczrpooTop4jliqDovb3lpLHotKU7emgtaGFudDrpoJDopr3ovInlhaXlpLHotKU7fS1cbmNvbnN0IG5vdGljZUZhaWxFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQgPSBGYWlsZWQoKTtcblxuLy8ge3tRdW90ZSBib3ggfHF1b3RlICA9IC17emgtaGFuczrpooTop4jliqDovb3kuK07emgtaGFudDrpoJDopr3ovInlhaXkuK07fS3igKbigKYgfHdpZHRoICA9IDUwJSB8YWxpZ24gID0gY2VudGVyfX1cbmNvbnN0IG5vdGljZUxvYWRpbmdFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQgPSBMb2FkaW5nKCk7XG5cbi8vIOaUueWKqERPTeWGheWuuVxuY29uc3QgcmVwbGFjZURPTSA9IChzZWxlY3Rvcjogc3RyaW5nLCBlbGVtZW50PzogUmVhY3QuUmVhY3RFbGVtZW50KTogdm9pZCA9PiB7XG5cdCQoc2VsZWN0b3IpLmh0bWwoZWxlbWVudCA/PyAnJyk7XG59O1xuXG4vLyDliqDlhaXigJxb6L295YWl5LitXeKAneeahOaPkOekulxuY29uc3QgYWRkTG9hZGluZ05vdGljZSA9ICgpOiB2b2lkID0+IHtcblx0YWRkUGFyc2VkV2lraXRleHQobm90aWNlTG9hZGluZ0VsZW1lbnQpO1xufTtcblxuLy8g6L295YWl6ZSZ6K+v55qE5o+Q56S6XG5jb25zdCBsb2FkaW5nRmFpbE5vdGljZSA9ICgpOiB2b2lkID0+IHtcblx0cmVwbGFjZURPTSgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmdfX2NvbnRlbnQnLCBub3RpY2VGYWlsRWxlbWVudCk7XG59O1xuXG4vLyDnp7vpmaTigJxb6L295YWl5LitXeKAneeahOaPkOekulxuY29uc3QgcmVtb3ZlTG9hZGluZ05vdGljZSA9ICgpOiB2b2lkID0+IHtcblx0cmVwbGFjZURPTSgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmcnKTtcbn07XG5cbmV4cG9ydCB7bm90aWNlTG9hZGluZ0VsZW1lbnQsIGFkZExvYWRpbmdOb3RpY2UsIGxvYWRpbmdGYWlsTm90aWNlLCByZW1vdmVMb2FkaW5nTm90aWNlfTtcbiIsICJ7XG5cdFwid2lraVRleHRLZXlcIjogXCJfYWRkVGV4dFwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgIi8vIOWQiOW5tuWkmuS4qndpa2l0ZXh05a2X56ym5LiyXG5jb25zdCBsdWFBZGRUZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcsIG5ld1N0cmluZzogc3RyaW5nLCBpc0VzY2FwZTogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nID0+IHtcblx0aWYgKG5ld1N0cmluZykge1xuXHRcdGlmIChpbnB1dFN0cmluZykge1xuXHRcdFx0aW5wdXRTdHJpbmcgKz0gJ1xcbic7XG5cdFx0fVxuXG5cdFx0aWYgKGlzRXNjYXBlKSB7XG5cdFx0XHRjb25zdCBbZXNjYXBlU3RyaW5nXSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdGBbJHtKU09OLnN0cmluZ2lmeShcblx0XHRcdFx0XHQvLyBMdWHkuI3mlK/mjIFcXHXjgIFcXHjovazkuYnlrZfnrKZcblx0XHRcdFx0XHRuZXdTdHJpbmcucmVwbGFjZSgvXFxcXChbdXhdKS9naSwgJyQxJylcblx0XHRcdFx0KS5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpfV1gXG5cdFx0XHQpIGFzIFtzdHJpbmddO1xuXHRcdFx0bmV3U3RyaW5nID0gZXNjYXBlU3RyaW5nO1xuXHRcdH1cblxuXHRcdGlucHV0U3RyaW5nICs9IG5ld1N0cmluZztcblx0fVxuXG5cdHJldHVybiBpbnB1dFN0cmluZztcbn07XG5cbmV4cG9ydCB7bHVhQWRkVGV4dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtsdWFBZGRUZXh0fSBmcm9tICcuL2x1YUFkZFRleHQnO1xuXG4vLyDor7vlj5Z3aWtpdGV4dOWtl+espuS4su+8jOW5tuW/veeVpeazqOmHiuWwvumDqFxuY29uc3QgbHVhR2V0U3RyaW5nID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCB0ZXN0U3RyaW5nRXhlY0FycmF5OiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gL1teXFxuXSpcXCpcXC8vLmV4ZWMoaW5wdXRTdHJpbmcpO1xuXG5cdGxldCB0ZXN0U3RyaW5nOiBzdHJpbmcgPSBpbnB1dFN0cmluZztcblx0aWYgKHRlc3RTdHJpbmdFeGVjQXJyYXkpIHtcblx0XHRbdGVzdFN0cmluZ10gPSB0ZXN0U3RyaW5nRXhlY0FycmF5O1xuXHRcdHRlc3RTdHJpbmcgPSB0ZXN0U3RyaW5nLnNsaWNlKDAsIE1hdGgubWF4KDAsIHRlc3RTdHJpbmcubGVuZ3RoIC0gMikpO1xuXHR9XG5cblx0Y29uc3QgdHJpbUNoZWNrOiBzdHJpbmcgPSB0ZXN0U3RyaW5nLnRyaW0oKTtcblx0Y29uc3QgZmlyc3RDaGFyOiBzdHJpbmcgPSB0cmltQ2hlY2suY2hhckF0KDApO1xuXHRpZiAoZmlyc3RDaGFyID09PSB0cmltQ2hlY2suYXQoLTEpICYmIChmaXJzdENoYXIgPT09IFwiJ1wiIHx8IGZpcnN0Q2hhciA9PT0gJ1wiJykpIHtcblx0XHRyZXR1cm4gdHJpbUNoZWNrLnNsaWNlKDEsIDEgKyB0cmltQ2hlY2subGVuZ3RoIC0gMik7XG5cdH1cblxuXHRyZXR1cm4gdGVzdFN0cmluZy50cmltKCk7XG59O1xuXG4vLyDmjZXojrdDU1PmlofmnKzkuK3nrKblkIhgPHtPUFRJT05TLndpa2lUZXh0S2V5fT4gIHsgY29udGVudO+8mlwiWFhYXCIgfWDmqKHlvI/nmoTlrZfnrKbkuLJcbmNvbnN0IGx1YUdldENvbnRlbnRUZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdHRyeSB7XG5cdFx0aW5wdXRTdHJpbmcucmVwbGFjZShcblx0XHRcdG5ldyBSZWdFeHAoYCR7T1BUSU9OUy53aWtpVGV4dEtleX1cXFxccypcXFxce1teY1xcXFx9XSpjb250ZW50XFxcXHMqOlxcXFxzKlteXFxuXSpgLCAnZycpLFxuXHRcdFx0KHN1YnN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdFx0Y29uc3QgdGVtcFRleHQ6IHN0cmluZyA9ICgvY29udGVudFxccyo6XFxzKlteXFxuXSovLmV4ZWMoc3Vic3RyaW5nKSB8fCBbJ2NvbnRlbnQ6J10pWzBdXG5cdFx0XHRcdFx0LnJlcGxhY2UoL15bXFxzO31dK3xbXFxzO31dKyQvZywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xccypjb250ZW50XFxzKjpcXHMqLywgJycpO1xuXG5cdFx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICdcXG4nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2lraXRleHQgKz0gbHVhR2V0U3RyaW5nKHRlbXBUZXh0KTtcblxuXHRcdFx0XHRyZXR1cm4gc3Vic3RyaW5nO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDmjZXojrflrZfnrKbkuLLljJbnmoTlr7nosaHkuK3nrKblkIhgPHtPUFRJT05TLndpa2lUZXh0S2V5fT7vvJ1YWFhg5oiWYDx7T1BUSU9OUy53aWtpVGV4dEtleX0+77yaWFhYYOaooeW8j+eahOWtl+espuS4siAo5rOo6YeK5Lul5YWo6KeS5a2X56ym5Luj5pu/77yM6YG/5YWN6KKr5o2V6I63KVxuY29uc3QgbHVhR2V0T2JqVGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHR0cnkge1xuXHRcdGlucHV0U3RyaW5nLnJlcGxhY2UoXG5cdFx0XHRuZXcgUmVnRXhwKGAke09QVElPTlMud2lraVRleHRLZXl9XFxcXHMqW1xcXFw9Ol1cXFxccypbXlxcbl0qYCwgJ2cnKSxcblx0XHRcdChzdWJzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdGNvbnN0IHRlbXBUZXh0OiBzdHJpbmcgPSBzdWJzdHJpbmdcblx0XHRcdFx0XHQucmVwbGFjZSgvXltcXHM7fV0rfFtcXHM7fV0rJC9nLCAnJylcblx0XHRcdFx0XHQucmVwbGFjZShuZXcgUmVnRXhwKGAke09QVElPTlMud2lraVRleHRLZXl9XFxcXHMqW1xcXFw9Ol1cXFxccypgKSwgJycpO1xuXG5cdFx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICdcXG4nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2lraXRleHQgKz0gbHVhR2V0U3RyaW5nKHRlbXBUZXh0KTtcblxuXHRcdFx0XHRyZXR1cm4gc3Vic3RyaW5nO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDliIbmnpBDU1PkuK3nrKblkIjmnaHku7bnmoR3aWtpdGV4dFxuY29uc3QgbHVhR2V0Q1NTd2lraXRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgY3NzVGV4dDogc3RyaW5nID1cblx0XHQoaW5wdXRTdHJpbmcgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVGV4dEFyZWFFbGVtZW50PigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpPy52YWx1ZSkgPz8gJyc7XG5cdGlmICghY3NzVGV4dC50cmltKCkpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHQvLyDljLnphY0gPHtPUFRJT05TLndpa2lUZXh0S2V5fT4geyBjb250ZW5077yaXCJYWFhcIiB9IOaooeW8j1xuXHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIGx1YUdldENvbnRlbnRUZXh0KGNzc1RleHQpLCB0cnVlKTtcblx0Ly8g5Yy56YWNIC8qIDx7T1BUSU9OUy53aWtpVGV4dEtleX0+77yaWFhYICovIOaooeW8j1xuXHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIGx1YUdldE9ialRleHQoY3NzVGV4dCksIHRydWUpO1xuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDliIbmnpBKU09O5Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldEpTT053aWtpdGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCBKU09OVGV4dDogc3RyaW5nID1cblx0XHQoaW5wdXRTdHJpbmcgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVGV4dEFyZWFFbGVtZW50PigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpPy52YWx1ZSkgPz8gJyc7XG5cdGlmICghSlNPTlRleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoSlNPTlRleHQpIGFzIG9iamVjdDtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhqc29uRGF0YSkpIHtcblx0XHRcdGlmIChuZXcgUmVnRXhwKE9QVElPTlMud2lraVRleHRLZXkpLnRlc3Qoa2V5KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgdmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyDoi6XplK7lgLzmmK/lr7nosaFcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlIGFzIG9iamVjdCkpIHtcblx0XHRcdFx0XHRpZiAobmV3IFJlZ0V4cChPUFRJT05TLndpa2lUZXh0S2V5KS50ZXN0KGspICYmIHR5cGVvZiB2ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCB2KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDliIbmnpBKYXZhU2NyaXB05Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldEpTd2lraXRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QganNUZXh0OiBzdHJpbmcgPVxuXHRcdChpbnB1dFN0cmluZyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJyk/LnZhbHVlKSA/PyAnJztcblx0aWYgKCFqc1RleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCBsdWFHZXRPYmpUZXh0KGpzVGV4dCksIHRydWUpO1xuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG5leHBvcnQge2x1YUdldENTU3dpa2l0ZXh0LCBsdWFHZXRKU09Od2lraXRleHQsIGx1YUdldEpTd2lraXRleHR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgU3BlY2lhbFdpa2l0ZXh0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiY29uc3Qge3dnVXNlckxhbmd1YWdlLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgZ2V0TGFuZ3VhZ2UgPSAoKTogc3RyaW5nID0+IHtcblx0Y29uc3QgbGFuZzogc3RyaW5nID0gd2dVc2VyTGFuZ3VhZ2U7XG5cblx0aWYgKGxhbmcuaW5jbHVkZXMoJ3poJykpIHtcblx0XHRyZXR1cm4gd2dVc2VyVmFyaWFudCBhcyBzdHJpbmc7XG5cdH1cblxuXHRyZXR1cm4gbGFuZztcbn07XG5cbmV4cG9ydCB7Z2V0TGFuZ3VhZ2V9O1xuIiwgImltcG9ydCB7bG9hZGluZ0ZhaWxOb3RpY2UsIHJlbW92ZUxvYWRpbmdOb3RpY2V9IGZyb20gJy4uL25vdGljZSc7XG5pbXBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fSBmcm9tICcuLi91dGlsL2FkZFBhcnNlZFdpa2l0ZXh0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSAnLi4vdXRpbC9nZXRMYW5ndWFnZSc7XG5cbmNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5Yqg5YWl6aKE6KeI5YaF5a65XG5jb25zdCBtd0FkZFdpa2lUZXh0ID0gYXN5bmMgKHdpa2l0ZXh0OiBzdHJpbmcsIHBhZ2VOYW1lOiBzdHJpbmcsIGlzUHJldmlldzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRpZiAod2lraXRleHQudHJpbSgpKSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0Ly8g6YG/5YWN5YaF5a656YeN5aSNXG5cdFx0XHR0aXRsZTogcGFnZU5hbWUsXG5cdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHR1c2Vza2luOiBza2luLFxuXHRcdH07XG5cdFx0aWYgKGlzUHJldmlldykge1xuXHRcdFx0cGFyYW1zLmRpc2FibGVlZGl0c2VjdGlvbiA9IHRydWU7XG5cdFx0XHRwYXJhbXMucHJldmlldyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8udGV4dCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcgPSAoZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZykudHJpbSgpO1xuXG5cdFx0XHRpZiAocGFyc2VkV2lraXRleHQpIHtcblx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQocGFyc2VkV2lraXRleHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9hZGluZ0ZhaWxOb3RpY2UoKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHR9XG59O1xuXG4vLyDliqDlhaXpooTop4jnmoRMdWHlhoXlrrlcbmNvbnN0IG13QWRkTHVhVGV4dCA9IGFzeW5jIChcblx0d2lraXRleHQ6IHN0cmluZyxcblx0cGFnZU5hbWU6IHN0cmluZyxcblx0aXNQcmV2aWV3OiBib29sZWFuLFxuXHRjYWxsQmFjaz86IChhcmc6IHN0cmluZykgPT4gSlF1ZXJ5IHwgSFRNTEVsZW1lbnQgfCB2b2lkXG4pID0+IHtcblx0Y29uc3QgdGVtcE1vZHVsZU5hbWU6IHN0cmluZyA9ICdBZGRUZXh0L1RlbXAvTW9kdWxlL0RhdGEubHVhJztcblx0Y29uc3QgbW9kdWxlQ2FsbDoge1xuXHRcdHdpa2l0ZXh0OiBzdHJpbmc7XG5cdFx0cGFnZU5hbWU6IHN0cmluZztcblx0fSA9IHtcblx0XHR3aWtpdGV4dDogJyNpbnZva2U6Jyxcblx0XHQvLyDliIblvIDmnaXvvIzpgb/lhY3ooqvliIbliLBbWzpDYXRlZ29yeTrmnInohJrmnKzplJnor6/nmoTpobXpnaJdXVxuXHRcdHBhZ2VOYW1lOiAnTW9kdWxlOicsXG5cdH07XG5cblx0aWYgKHdpa2l0ZXh0LnRyaW0oKSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlOiBwYWdlTmFtZSxcblx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3h0aXRsZTogbW9kdWxlQ2FsbC5wYWdlTmFtZSArIHRlbXBNb2R1bGVOYW1lLFxuXHRcdFx0XHQvLyDliJvlu7rkuLTml7ZMdWEgTW9kdWxlXG5cdFx0XHRcdHRlbXBsYXRlc2FuZGJveHRleHQ6IGByZXR1cm4ge1xuXHRtYWluID0gZnVuY3Rpb24oKVxuXHRcdHhwY2FsbChcblx0XHRcdGZ1bmN0aW9uKClcblx0XHRcdFx0JHt3aWtpdGV4dH1cblx0XHRcdGVuZCxcblx0XHRcdGZ1bmN0aW9uKClcblx0XHRcdGVuZFxuXHRcdClcblx0XHRsb2NhbCBtb2R1bGVXaWtpdGV4dCA9IHBhY2thZ2UubG9hZGVkW1wiTW9kdWxlOk1vZHVsZSB3aWtpdGV4dFwiXVxuXHRcdGlmIG1vZHVsZVdpa2l0ZXh0IHRoZW5cblx0XHRcdGxvY2FsIHdpa2l0ZXh0ID0gbW9kdWxlV2lraXRleHQubWFpbigpXG5cdFx0XHRpZiBtdy50ZXh0LnRyaW0od2lraXRleHQpIH49IFwiXCIgdGhlblxuXHRcdFx0XHRyZXR1cm4gbXcuZ2V0Q3VycmVudEZyYW1lKCk6cHJlcHJvY2Vzcyhtb2R1bGVXaWtpdGV4dC5tYWluKCkpXG5cdFx0XHRlbmRcblx0XHRlbmRcblx0XHRyZXR1cm4gXCJcIlxuXHRlbmRcbn1gLFxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3hjb250ZW50bW9kZWw6ICdTY3JpYnVudG8nLFxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3hjb250ZW50Zm9ybWF0OiAndGV4dC9wbGFpbicsXG5cdFx0XHRcdHRleHQ6IGB7eyR7bW9kdWxlQ2FsbC53aWtpdGV4dH0ke3RlbXBNb2R1bGVOYW1lfXxtYWlufX1gLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHRcdHVzZXNraW46IHNraW4sXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGlzUHJldmlldykge1xuXHRcdFx0XHRwYXJhbXMucHJldmlldyA9IHRydWU7XG5cdFx0XHRcdHBhcmFtcy5kaXNhYmxlZWRpdHNlY3Rpb24gPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJzZWRXaWtpdGV4dDogc3RyaW5nID0gKGRhdGFbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmcpLnRyaW0oKTtcblxuXHRcdFx0aWYgKCFwYXJzZWRXaWtpdGV4dCkge1xuXHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHRcdC8vIOiLpeWcqOi/meS4quS4tOaXtuaooeWdl+S4reWHuumUmeWImeWPlua2iFxuXHRcdFx0fSBlbHNlIGlmICgkKHBhcnNlZFdpa2l0ZXh0KS5maW5kKCcuc2NyaWJ1bnRvLWVycm9yJykudGV4dCgpLnNlYXJjaCh0ZW1wTW9kdWxlTmFtZSkpIHtcblx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY2FsbEJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2FsbEJhY2socGFyc2VkV2lraXRleHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQocGFyc2VkV2lraXRleHQpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9hZGluZ0ZhaWxOb3RpY2UoKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHR9XG59O1xuXG5leHBvcnQge213QWRkTHVhVGV4dCwgbXdBZGRXaWtpVGV4dH07XG4iLCAiaW1wb3J0IHtsdWFHZXRDU1N3aWtpdGV4dCwgbHVhR2V0SlNPTndpa2l0ZXh0LCBsdWFHZXRKU3dpa2l0ZXh0fSBmcm9tICcuL2x1YUdldFRleHQnO1xuXG5jb25zdCB7d2dQYWdlQ29udGVudE1vZGVsfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5Yik5pat5piv5ZCm5Li6THVhXG5jb25zdCBsdWFDaGVjayA9IChpbnB1dFN0cmluZzogc3RyaW5nID0gJycsIGNvbnRlbnRNb2RlbDogc3RyaW5nID0gd2dQYWdlQ29udGVudE1vZGVsKTogc3RyaW5nID0+IHtcblx0Ly8g5qC55o2u6aG16Z2i5YaF5a655qih5Z6L6YCJ55So6YCC5b2T55qE6Kej5p6Q5qih5byPXG5cdHN3aXRjaCAoY29udGVudE1vZGVsLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRjYXNlICdqc29uJzpcblx0XHRcdHJldHVybiBsdWFHZXRKU09Od2lraXRleHQoaW5wdXRTdHJpbmcpO1xuXHRcdGNhc2UgJ2pzJzpcblx0XHRjYXNlICdqYXZhc2NyaXB0Jzpcblx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdHJldHVybiBsdWFHZXRKU3dpa2l0ZXh0KGlucHV0U3RyaW5nKTtcblx0XHRjYXNlICdjc3MnOlxuXHRcdGNhc2UgJ3Nhbml0aXplZC1jc3MnOlxuXHRcdFx0cmV0dXJuIGx1YUdldENTU3dpa2l0ZXh0KGlucHV0U3RyaW5nKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICcnO1xuXHR9XG59O1xuXG5leHBvcnQge2x1YUNoZWNrfTtcbiIsICJpbXBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fSBmcm9tICcuLi91dGlsL2FkZFBhcnNlZFdpa2l0ZXh0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtjaGVja0VsZW1lbnRFeGlzdH0gZnJvbSAnLi4vdXRpbC9jaGVja0VsZW1lbnRFeGlzdCc7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tICcuLi91dGlsL2dldExhbmd1YWdlJztcbmltcG9ydCB7bHVhQ2hlY2t9IGZyb20gJy4uL2x1YS9sdWFDaGVjayc7XG5pbXBvcnQge213QWRkV2lraVRleHR9IGZyb20gJy4vbXdBZGRUZXh0JztcbmltcG9ydCB7cmVtb3ZlTG9hZGluZ05vdGljZX0gZnJvbSAnLi4vbm90aWNlJztcblxuY29uc3Qge3NraW4sIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOWKoOWFpee8lui+keaPkOekuu+8iOiLpeWtmOWcqO+8iVxuY29uc3QgbXdBcHBseU5vdGljZSA9IGFzeW5jIChjdXJyZW50UGFnZU5hbWU6IHN0cmluZywgcGFnZVN1Yk5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdC8vIGdldCB0aGUgb3JpZ2luYWwgd2lraXRleHQgY29udGVudCBvZiBhIHBhZ2Vcblx0XHRcdHRpdGxlOiBjdXJyZW50UGFnZU5hbWUgKyBwYWdlU3ViTmFtZSxcblx0XHRcdHRleHQ6IGB7eyNpbnZva2U6U3BlY2lhbCB3aWtpdGV4dC9UZW1wbGF0ZXxnZXROb3RpY2VzfCR7Y3VycmVudFBhZ2VOYW1lfXwke3BhZ2VTdWJOYW1lfX19YCxcblx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHR1c2Vza2luOiBza2luLFxuXHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0fTtcblxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBodG1sID0gZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZztcblx0XHRpZiAoJChodG1sKS50ZXh0KCkudHJpbSgpKSB7XG5cdFx0XHRhZGRQYXJzZWRXaWtpdGV4dChodG1sKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG5cbi8vIOS7jumhtemdouW9k+WJjeWOhuWPsueJiOacrOWPluWHuiA8e09QVElPTlMud2lraVRleHRLZXl9PlxuY29uc3QgbXdBcHBseVJldmlzaW9uID0gYXN5bmMgKGN1cnJlbnRQYWdlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0Ly8gZ2V0IHRoZSBvcmlnaW5hbCB3aWtpdGV4dCBjb250ZW50IG9mIGEgcGFnZVxuXHRcdFx0b2xkaWQ6IHdnUmV2aXNpb25JZCxcblx0XHRcdHByb3A6ICd3aWtpdGV4dCcsXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHR9O1xuXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8ud2lraXRleHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgcGFnZUNvbnRlbnQ6IHN0cmluZyA9IGx1YUNoZWNrKChkYXRhWydwYXJzZSddLndpa2l0ZXh0IGFzIHN0cmluZykudHJpbSgpKTtcblx0XHRwYWdlQ29udGVudCA9XG5cdFx0XHQoY2hlY2tFbGVtZW50RXhpc3QoJyNtdy1jbGVhcnlvdXJjYWNoZScpXG5cdFx0XHRcdD8gJ3t7I2ludm9rZTpTcGVjaWFsIHdpa2l0ZXh0L1RlbXBsYXRlfGludHxjbGVhcnlvdXJjYWNoZX19J1xuXHRcdFx0XHQ6ICcnKSArIHBhZ2VDb250ZW50O1xuXG5cdFx0aWYgKHBhZ2VDb250ZW50LnRyaW0oKSkge1xuXHRcdFx0dm9pZCBtd0FkZFdpa2lUZXh0KHBhZ2VDb250ZW50LCBjdXJyZW50UGFnZU5hbWUsIHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7bXdBcHBseU5vdGljZSwgbXdBcHBseVJldmlzaW9ufTtcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFsbE13Q29uZmlnOiBNZWRpYVdpa2lDb25maWdNYXAgPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOajgOafpU1lZGlhV2lraeeahOiuvue9rlxuY29uc3QgY2hlY2tNd0NvbmZpZyA9IChjb25maWdLZXk6IHN0cmluZywgZXhwZWN0Q29uZmlnOiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4gPT4ge1xuXHRsZXQgbXdDb25maWc6IHVua25vd24gPSBhbGxNd0NvbmZpZ1tjb25maWdLZXldO1xuXHRpZiAoIW13Q29uZmlnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0bXdDb25maWcgPSBTdHJpbmcobXdDb25maWcpLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuXHRpZiAoIW13Q29uZmlnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIGdlbmVyYXRlQXJyYXkoZXhwZWN0Q29uZmlnKS5pbmNsdWRlcyhtd0NvbmZpZyBhcyBzdHJpbmcpO1xufTtcblxuZXhwb3J0IHtjaGVja013Q29uZmlnfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5cbi8vIOajgOafpeaYr+WQpuaciemihOiniOeahOW/heimgeaAp1xuY29uc3QgY2hlY2tOZWVkUHJldmlldyA9ICgpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MLnNlYXJjaChPUFRJT05TLndpa2lUZXh0S2V5KSA+IC0xO1xufTtcblxuZXhwb3J0IHtjaGVja05lZWRQcmV2aWV3fTtcbiIsICJpbXBvcnQge2FkZExvYWRpbmdOb3RpY2UsIG5vdGljZUxvYWRpbmdFbGVtZW50LCByZW1vdmVMb2FkaW5nTm90aWNlfSBmcm9tICcuLi9ub3RpY2UnO1xuaW1wb3J0IHtsdWFHZXRDU1N3aWtpdGV4dCwgbHVhR2V0SlNPTndpa2l0ZXh0fSBmcm9tICcuLi9sdWEvbHVhR2V0VGV4dCc7XG5pbXBvcnQge213QWRkTHVhVGV4dCwgbXdBZGRXaWtpVGV4dH0gZnJvbSAnLi9td0FkZFRleHQnO1xuaW1wb3J0IHttd0FwcGx5Tm90aWNlLCBtd0FwcGx5UmV2aXNpb259IGZyb20gJy4vbXdBcHBseSc7XG5pbXBvcnQge2NoZWNrRWxlbWVudEV4aXN0fSBmcm9tICcuLi91dGlsL2NoZWNrRWxlbWVudEV4aXN0JztcbmltcG9ydCB7Y2hlY2tNd0NvbmZpZ30gZnJvbSAnLi4vdXRpbC9jaGVja013Q29uZmlnJztcbmltcG9ydCB7Y2hlY2tOZWVkUHJldmlld30gZnJvbSAnLi4vdXRpbC9jaGVja05lZWRQcmV2aWV3JztcbmltcG9ydCB7bHVhQ2hlY2t9IGZyb20gJy4uL2x1YS9sdWFDaGVjayc7XG5cbmNvbnN0IHt3Z0Nhbm9uaWNhbE5hbWVzcGFjZSwgd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyDnu5npobXpnaLmt7vliqDpooTop4hcbmNvbnN0IG13QWRkUHJldmlldyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8g6aKE6KeI5qih5byP5Y+q6YCC55So5LqO5Lul5LiL6aG16Z2i5YaF5a655qih5Z6LXG5cdGlmIChjaGVja013Q29uZmlnKCd3Z1BhZ2VDb250ZW50TW9kZWwnLCBbJ2phdmFzY3JpcHQnLCAnanMnLCAnanNvbicsICd0ZXh0JywgJ2NzcycsICdzYW5pdGl6ZWQtY3NzJ10pKSB7XG5cdFx0Ly8g5qih5byPMe+8mumhtemdoumihOiniFxuXHRcdGlmIChjaGVja0VsZW1lbnRFeGlzdCgnLnByZXZpZXdub3RlJykpIHtcblx0XHRcdC8vIOajgOafpeaYr+WQpuS4uumihOiniOaooeW8j1xuXHRcdFx0Ly8g6aKE6KeI5pyJ5Y+v6IO95piv5Zyo6aKE6KeI5YW25LuW5p2h55uuXG5cdFx0XHRjb25zdCBwYXRoUGF0aDogc3RyaW5nID0gZGVjb2RlVVJJKG13LnV0aWwuZ2V0VXJsKHdnUGFnZU5hbWUpKS5yZXBsYWNlKFxuXHRcdFx0XHRuZXcgUmVnRXhwKGBeXFxcXC8/JHttdy51dGlsLmdldFVybCgnJykubWF0Y2goL1thLXpdKy8pPy5bMF0gPz8gJyd9XFxcXC9gKSxcblx0XHRcdFx0Jydcblx0XHRcdCk7XG5cblx0XHRcdC8vIOiLpemihOiniOeahOmhtemdouW5tumdnuacrOi6q++8jOWImeS4jeaYvuekuumihOiniFxuXHRcdFx0aWYgKHBhdGhQYXRoICE9PSB3Z1BhZ2VOYW1lKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgd2lraXRleHQ6IHN0cmluZyA9IGx1YUNoZWNrKCk7XG5cdFx0XHRpZiAod2lraXRleHQpIHtcblx0XHRcdFx0Ly8g6Iul6Kej5p6Q57uT5p6c6Z2e56m65omN5pS+572u6aKE6KeIXG5cdFx0XHRcdGFkZExvYWRpbmdOb3RpY2UoKTsgLy8g5pS+572u5o+Q56S677yM5o+Q56S65L2/55So6ICF562J5b6FQUpBWFxuXHRcdFx0XHR2b2lkIG13QWRkV2lraVRleHQod2lraXRleHQsIHdnUGFnZU5hbWUsIHRydWUpOyAvLyDoi6Xlj5blvpcgX2FkZFRleHQg5YiZ5pi+56S66aKE6KeIXG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICghY2hlY2tFbGVtZW50RXhpc3QoJy5tdy1fYWRkVGV4dC1jb250ZW50JykgJiYgY2hlY2tNd0NvbmZpZygnd2dBY3Rpb24nLCAndmlldycpKSB7XG5cdFx0XHQvLyDmqKHlvI8y77ya5LiN5pSv5oyB5pi+56S655qE54m55q6K6aG16Z2iXG5cdFx0XHQvLyDnu4/mn6XvvIzkuI3mraLmmK/mqKHmnb/moLflvI/vvIzmiYDmnInmnKrltYzlhaUnI213LWNsZWFyeW91cmNhY2hlJ+eahOmhtemdoueahuaXoOazleato+W4uOaYvuekulxuXHRcdFx0aWYgKCFjaGVja05lZWRQcmV2aWV3KCkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyDmsqHmnInpooTop4jlv4XopoHml7bvvIznm7TmjqXlgZzmraLnqIvluo/vvIzkuI3nu6fnu63liKTmlq3vvIzku6Xmj5Dpq5jmlYjnjodcblx0XHRcdH1cblxuXHRcdFx0Ly8g6Iul5bey5pyJI213LWNsZWFyeW91cmNhY2hl5YiZ5YWI5riF5o6J77yM5ZCm5YiZ5Lya5Ye6546w5Lik5LiqTWVkaWFXaWtpOkNsZWFyeW91cmNhY2hlXG5cdFx0XHQkYm9keS5maW5kKCcjbXctY2xlYXJ5b3VyY2FjaGUnKS5odG1sKCcnKTtcblxuXHRcdFx0aWYgKCFjaGVja0VsZW1lbnRFeGlzdCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpKSB7XG5cdFx0XHRcdC8vIOmdnue8lui+keaooeW8j+aJjeaJp+ihjCAo6aKE6KeI5L2/55So5LiK5pa555qEaWbljLrlnZcpXG5cdFx0XHRcdGFkZExvYWRpbmdOb3RpY2UoKTsgLy8g5pS+572u5o+Q56S677yM5o+Q56S65L2/55So6ICF562J5b6FQUpBWFxuXHRcdFx0XHR2b2lkIG13QXBwbHlSZXZpc2lvbih3Z1BhZ2VOYW1lKTsgLy8g5Li65LqG6K6p5Y6G5Y+y54mI5pys5q2j5bi45pi+56S677yM5L2/55Sod2dSZXZpc2lvbklk5Y+W5b6X5YaF5a65XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChjaGVja0VsZW1lbnRFeGlzdCgnI213LXJldmlzaW9uLWluZm8nKSAmJiBjaGVja013Q29uZmlnKCd3Z0FjdGlvbicsICd2aWV3JykpIHtcblx0XHRcdC8vIOaooeW8jzPvvJrpobXpnaLljoblj7LniYjmnKzmo4Dop4bvvJrlpoLpnIDlpI3mn6XnmoTpobnnm67kuLrpobXpnaLljoblj7LniYjmnKzvvIzmnKzlt6Xlhbfmj5DkvpvpobXpnaLljoblj7LniYjmnKzlhoXlrrnmmL7npLrmlK/mjIFcblx0XHRcdC8vIOacieW1jOWFpScjbXctY2xlYXJ5b3VyY2FjaGUn55qE6aG16Z2i55qE5Y6G5Y+y54mI5pys5Lya5Y+q6IO95pi+56S65pyA5paw54mI55qEIF9hZGRUZXh0IOWboOatpOaJp+ihjOS/ruato1xuXHRcdFx0aWYgKCFjaGVja0VsZW1lbnRFeGlzdCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpKSB7XG5cdFx0XHRcdC8vIOmdnue8lui+keaooeW8j+aJjeaJp+ihjCAo6aKE6KeI5L2/55So5LiK5pa555qEaWbljLrlnZcpXG5cdFx0XHRcdCRib2R5LmZpbmQoJyNtdy1jbGVhcnlvdXJjYWNoZScpLmh0bWwobm90aWNlTG9hZGluZ0VsZW1lbnQpOyAvLyDlt67lvILmqKHlvI/vvIjlkKvmo4DpmIXkv67orqLniYjmnKzliKDpmaTvvInnmoTmj5LlhaXngrnkuI3lkIxcblx0XHRcdFx0dm9pZCBtd0FwcGx5UmV2aXNpb24od2dQYWdlTmFtZSk7IC8vIOS4uuS6huiuqeeJueWumueJiOacrOato+W4uOaYvuekuu+8jOS9v+eUqHdnUmV2aXNpb25JZOWPluW+l+WGheWuuVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGNoZWNrTXdDb25maWcoJ3dnUGFnZUNvbnRlbnRNb2RlbCcsIFsnc2NyaWJ1bnRvJywgJ2x1YSddKSkge1xuXHRcdC8vIOaooeWdl+mihOiniOWKn+iDvVxuXHRcdGlmICghY2hlY2tOZWVkUHJldmlldygpKSB7XG5cdFx0XHRyZXR1cm47IC8vIOayoeaciemihOiniOW/heimgeaXtu+8jOebtOaOpeWBnOatoueoi+W6j++8jOS4jee7p+e7reWIpOaWre+8jOS7peaPkOmrmOaViOeOh1xuXHRcdH1cblxuXHRcdGlmIChcblx0XHRcdGNoZWNrRWxlbWVudEV4aXN0KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykgJiZcblx0XHRcdGNoZWNrRWxlbWVudEV4aXN0KCd0YWJsZS5kaWZmJykgJiZcblx0XHRcdCFjaGVja0VsZW1lbnRFeGlzdCgnLnByZXZpZXdub3RlJykgJiZcblx0XHRcdCFjaGVja013Q29uZmlnKCd3Z0FjdGlvbicsICd2aWV3Jylcblx0XHQpIHtcblx0XHRcdCQobm90aWNlTG9hZGluZ0VsZW1lbnQpLmluc2VydEFmdGVyKCcjd2lraURpZmYnKTtcblx0XHRcdHZvaWQgbXdBZGRMdWFUZXh0KFxuXHRcdFx0XHQoJGJvZHkuZmluZCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpLnZhbCgpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJycsXG5cdFx0XHRcdHdnUGFnZU5hbWUsXG5cdFx0XHRcdHRydWVcblx0XHRcdCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcubXctdW5kZWxldGUtcmV2aXNpb24nKSkge1xuXHRcdC8vIOaooeW8jzTvvJrlt7LliKDpobXpnaLpooTop4hcblx0XHQvLyDlt7LliKDlhoXlrrnpobXpnaLmmK/nibnmrorpobXpnaLvvIzml6Dms5XnlKjluLjop4TmlrnlvI/liKTmlq3pobXpnaLlhoXlrrnmqKHlnotcblx0XHRpZiAoIWNoZWNrTmVlZFByZXZpZXcoKSkge1xuXHRcdFx0cmV0dXJuOyAvLyDmsqHmnInpooTop4jlv4XopoHml7bvvIznm7TmjqXlgZzmraLnqIvluo/vvIzkuI3nu6fnu63liKTmlq3vvIzku6Xmj5Dpq5jmlYjnjodcblx0XHR9XG5cblx0XHRpZiAoY2hlY2tFbGVtZW50RXhpc3QoWycubXctaGlnaGxpZ2h0JywgJ3ByZScsICcubXctanNvbiddKSkge1xuXHRcdFx0Ly8g56Gu6K6k5q2j5Zyo6aKE6KeI5bey5Yig5YaF5a65XG5cdFx0XHRjb25zdCB0ZXh0YXJlYUNvbnRlbnQ6IHN0cmluZyA9ICRib2R5LmZpbmQoJ3RleHRhcmVhJykudmFsKCkgPz8gJyc7IC8vIOWwneivleWPluW+l+W3suWIoOWGheWuuea6kOS7o+eggVxuXG5cdFx0XHRsZXQgd2lraXRleHQ6IHN0cmluZyA9IGx1YUdldEpTT053aWtpdGV4dCh0ZXh0YXJlYUNvbnRlbnQpO1xuXHRcdFx0d2lraXRleHQgfHw9IGx1YUdldENTU3dpa2l0ZXh0KHRleHRhcmVhQ29udGVudCk7XG5cblx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHQvLyDoi6Xlj5blvpcgX2FkZFRleHQg5YiZ5pi+56S66aKE6KeIXG5cdFx0XHRcdGFkZExvYWRpbmdOb3RpY2UoKTtcblx0XHRcdFx0dm9pZCBtd0FkZFdpa2lUZXh0KHdpa2l0ZXh0LCBtdy5jb25maWcuZ2V0KCd3Z1JlbGV2YW50UGFnZU5hbWUnKSwgdHJ1ZSk7XG5cdFx0XHR9IGVsc2UgaWYgKC9tb2R1bGVbIF9dd2lraXRleHQuKl9hZGR0ZXh0L2kudGVzdCgkYm9keS5maW5kKCcubXctcGFyc2VyLW91dHB1dCcpLnRleHQoKSkpIHtcblx0XHRcdFx0Ly8g5bCd6K+VTHVh6Kej5p6QXG5cdFx0XHRcdC8vIOacrOWKn+iDveebruWJjea1i+ivleato+W4uOi/kOS9nFxuXHRcdFx0XHQvLyDoi6Xlk6rlpKnpooTop4jlj4jlpLHmlYjvvIzor7flj5bmtojms6jph4rkuIvmlrnpgqPooYxcblx0XHRcdFx0Ly8gbXdBZGRMdWFUZXh0KHRleHRhcmVhQ29udGVudCwgbXcuY29uZmlnLmdldChcIndnUmVsZXZhbnRQYWdlTmFtZVwiKSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCFjaGVja0VsZW1lbnRFeGlzdCgnLm13LWVkaXRub3RpY2UnKSAmJiBjaGVja013Q29uZmlnKCd3Z0Nhbm9uaWNhbE5hbWVzcGFjZScsICdzcGVjaWFsJykpIHtcblx0XHQvLyDoi6XnibnmrorpobXpnaLnvLrkuY/nvJbovpHmj5DnpLrvvIzliJnooaXkuIrnvJbovpHmj5DnpLogKOiLpeWtmOWcqClcblx0XHRjb25zdCBwYWdlU3ViTmFtZTogc3RyaW5nID0gd2dQYWdlTmFtZS5yZXBsYWNlKC9zcGVjaWFsOlteL10rL2ksICcnKTtcblx0XHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUpIHtcblx0XHRcdGNvbnN0IGZ1bGxQYWdlTmFtZTogc3RyaW5nID0gYCR7d2dDYW5vbmljYWxOYW1lc3BhY2V9OiR7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9YDtcblx0XHRcdHZvaWQgbXdBcHBseU5vdGljZShmdWxsUGFnZU5hbWUsIHBhZ2VTdWJOYW1lKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpOyAvLyDpg73kuI3mmK/nmoTmg4XlhrXliJnkuI3mmL7npLrpooTop4hcblx0fVxufTtcblxuZXhwb3J0IHttd0FkZFByZXZpZXd9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2NoZWNrTmVlZFByZXZpZXd9IGZyb20gJy4vdXRpbC9jaGVja05lZWRQcmV2aWV3JztcbmltcG9ydCB7bHVhQ2hlY2t9IGZyb20gJy4vbHVhL2x1YUNoZWNrJztcbmltcG9ydCB7bXdBZGRMdWFUZXh0fSBmcm9tICcuL213L213QWRkVGV4dCc7XG5pbXBvcnQge25vdGljZUxvYWRpbmdFbGVtZW50fSBmcm9tICcuL25vdGljZSc7XG5cbmNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5pys6ISa5pys55qEVGVzdGNhc2VcbmNvbnN0IHdpa2l0ZXh0UHJldmlld1Rlc3RjYXNlID0gYXN5bmMgKGlzUHJldmlldzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHQvLyDmsqHmnInlj6/pooTop4jlhYPntKDvvIzpgIDlh7rjgIJcblx0aWYgKCFjaGVja05lZWRQcmV2aWV3KCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0ZXN0Y2FzZUxpc3Q6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXG5cdFx0Jy5zcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UnXG5cdCk7XG5cdC8vIOiLpemhtemdouS4reayoeaciVRlc3RjYXNl77yM6YCA5Ye644CCXG5cdGlmICghdGVzdGNhc2VMaXN0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIOaUtumbhuS9jeS6jumhtemdouS4reeahFRlc3RjYXNl6aKE6KeI5YWD57SgXG5cdGNvbnN0IHRlc3RjYXNlRGF0YUxpc3Q6IHtcblx0XHRlbGVtZW50OiBIVE1MRWxlbWVudDtcblx0XHRsYW5nOiBzdHJpbmc7XG5cdFx0Y29kZTogc3RyaW5nO1xuXHR9W10gPSBbXTtcblxuXHRsZXQgaTogbnVtYmVyID0gMDtcblx0Zm9yIChpID0gMDsgaSA8IHRlc3RjYXNlTGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkID0gdGVzdGNhc2VMaXN0W2ldO1xuXHRcdGlmICghZWxlbWVudCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgY29kZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJy5tdy1oaWdobGlnaHQnKTtcblx0XHRpZiAoIWNvZGVFbGVtZW50KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCB7Y2xhc3NOYW1lfSA9IGNvZGVFbGVtZW50O1xuXHRcdGlmICghY2xhc3NOYW1lKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBbLCBjb2RlSWRdID0gL213LWhpZ2hsaWdodC1sYW5nLShcXFMrKS8uZXhlYyhjbGFzc05hbWUpID8/IFtdO1xuXHRcdGNvbnN0IHtsZW5ndGh9ID0gdGVzdGNhc2VEYXRhTGlzdDtcblxuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdwcmV2aWV3LWlkJywgbGVuZ3RoLnRvU3RyaW5nKCkpO1xuXHRcdHRlc3RjYXNlRGF0YUxpc3RbbGVuZ3RoXSA9IHtcblx0XHRcdGVsZW1lbnQsXG5cdFx0XHRsYW5nOiBjb2RlSWQ/LnRvTG93ZXJDYXNlKCkgPz8gJycsXG5cdFx0XHRjb2RlOiBjb2RlRWxlbWVudC50ZXh0Q29udGVudD8udHJpbSgpID8/ICcnLFxuXHRcdH07IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHR9XG5cblx0Ly8g5pW055CG6aG16Z2i5Lit55qEVGVzdGNhc2XpooTop4jlhYPntKDvvIzlubbmlL7nva7igJxb6L295YWl5LitXeKAnea2iOaBr1xuXHRsZXQgcGFja2FnZVdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblx0Zm9yIChjb25zdCB0ZXN0Y2FzZUl0ZW0gb2YgT2JqZWN0LnZhbHVlcyh0ZXN0Y2FzZURhdGFMaXN0KSkge1xuXHRcdGNvbnN0IHtjb2RlLCBlbGVtZW50LCBsYW5nfSA9IHRlc3RjYXNlSXRlbTtcblxuXHRcdGlmICghY29kZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0XHRpZiAoWydqYXZhc2NyaXB0JywgJ2pzJywgJ2NzcycsICdqc29uJywgJ3RleHQnXS5pbmNsdWRlcyh0ZXN0Y2FzZUl0ZW0ubGFuZykpIHtcblx0XHRcdGNvbnN0IHdpa2l0ZXh0OiBzdHJpbmcgPSBsdWFDaGVjayhjb2RlLCBsYW5nKTtcblx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHQvLyDoi6Xop6PmnpDnu5PmnpzpnZ7nqbrmiY3mlL7nva7pooTop4hcblx0XHRcdFx0JGVsZW1lbnQucHJlcGVuZChub3RpY2VMb2FkaW5nRWxlbWVudCk7XG5cdFx0XHRcdHBhY2thZ2VXaWtpdGV4dCArPSBgPGRpdiBjbGFzcz1cInNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS0ke2l9XCI+XFxuJHt3aWtpdGV4dH1cXG48L2Rpdj5gO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoWydsdWEnLCAnc2NyaWJ1bnRvJ10uaW5jbHVkZXMobGFuZykpIHtcblx0XHRcdHZvaWQgbXdBZGRMdWFUZXh0KFxuXHRcdFx0XHRjb2RlLFxuXHRcdFx0XHR3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRpc1ByZXZpZXcsXG5cdFx0XHRcdCgoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuICh3aWtpdGV4dDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHQkZWxlbWVudC5wcmVwZW5kKHdpa2l0ZXh0KTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KSgpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdC8vIOWwhuaVtOeQhuWujOeahFRlc3RjYXNl6aKE6KeI5YWD57Sg57uf5LiA5Y+R6YCBQVBJ6K+35rGC77yM5bm25bCG6L+U5Zue57uT5p6c5YiG5Y+R5Yiw5ZCEVGVzdGNhc2Vcblx0aWYgKHBhY2thZ2VXaWtpdGV4dCkge1xuXHRcdHBhY2thZ2VXaWtpdGV4dCA9IGA8ZGl2IGNsYXNzPVwic3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLXVuZGVmaW5lZFwiPiR7cGFja2FnZVdpa2l0ZXh0fTwvZGl2PmA7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGV4dDogcGFja2FnZVdpa2l0ZXh0LFxuXHRcdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdH07XG5cdFx0XHRpZiAoaXNQcmV2aWV3KSB7XG5cdFx0XHRcdHBhcmFtcy5kaXNhYmxlZWRpdHNlY3Rpb24gPSB0cnVlO1xuXHRcdFx0XHRwYXJhbXMucHJldmlldyA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8udGV4dCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcgPSAoZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZykudHJpbSgpO1xuXHRcdFx0aWYgKHBhcnNlZFdpa2l0ZXh0KSB7XG5cdFx0XHRcdGNvbnN0ICRwYXJzZWRFbGVtZW50OiBKUXVlcnkgPSAkKHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRcdFx0Zm9yIChjb25zdCBba2V5LCB0ZXN0Y2FzZUl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHRlc3RjYXNlRGF0YUxpc3QpKSB7XG5cdFx0XHRcdFx0Y29uc3Qge2VsZW1lbnQsIGxhbmd9ID0gdGVzdGNhc2VJdGVtO1xuXG5cdFx0XHRcdFx0aWYgKCFbJ2phdmFzY3JpcHQnLCAnanMnLCAndGV4dCcsICdjc3MnLCAnanNvbiddLmluY2x1ZGVzKGxhbmcpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICRwYXJzZWRFbGVtZW50LmZpbmQoXG5cdFx0XHRcdFx0XHRgLnNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS11bmRlZmluZWQgPiAuc3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLSR7a2V5fWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmICghJGVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkYWRkVGFyZ2V0OiBKUXVlcnkgPSAkKGVsZW1lbnQpLmZpbmQoJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nJyk7XG5cdFx0XHRcdFx0JGFkZFRhcmdldC5odG1sKCRlbGVtZW50Lmh0bWwoKSk7XG5cdFx0XHRcdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmZpcmUoJGFkZFRhcmdldCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cbn07XG5cbmV4cG9ydCB7d2lraXRleHRQcmV2aWV3VGVzdGNhc2V9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0NmLElBQU1DLHdCQUF3QjtBQUM5QixJQUFNQyxzQkFBc0I7O0FDRG5DLElBQUFDLHFCQUFrQkMsUUFBQUosUUFBQSxrQkFBQSxHQUFBLENBQUE7Ozs7OztBQ0RsQixJQUFBSyxvQkFBdUJMLFFBQUEsaUJBQUE7QUFFdkIsSUFBTU0sa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxVQUFBLEdBQVNMLGtCQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1FLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRGZBLElBQU1OLFNBQVNBLE1BQ2RKLG1DQUFBVyxRQUFBQyxjQUFBWixtQkFBQVcsUUFBQUUsVUFBQSxNQUNDYixtQ0FBQVcsUUFBQUMsY0FBQyxPQUFBO0VBQUlFLEtBQUtDO0VBQU9DLFVBQVM7RUFBUUMsT0FBTTtFQUFLQyxRQUFPO0FBQUEsQ0FBSyxHQUN6RGxCLG1DQUFBVyxRQUFBQyxjQUFDLFFBQUEsTUFBSyxLQUFPSCxXQUFXLFFBQVEsQ0FBRSxDQUNuQztBQUdELElBQU1GLFVBQVVBLE1BQ2ZQLG1DQUFBVyxRQUFBQyxjQUFDLE9BQUE7RUFBSU8sSUFBRztBQUFBLEdBQ1BuQixtQ0FBQVcsUUFBQUMsY0FBQyxPQUFBO0VBQUlRLFdBQVcsQ0FBQyxZQUFZckIsbUJBQW1CO0VBQUdvQixJQUFHO0FBQUEsR0FDckRuQixtQ0FBQVcsUUFBQUMsY0FBQyxPQUFBO0VBQUlRLFdBQVd0QjtFQUF1QnFCLElBQUc7QUFBQSxHQUN6Q25CLG1DQUFBVyxRQUFBQyxjQUFDLE9BQUE7RUFBSUUsS0FBS087RUFBWUwsVUFBUztFQUFRQyxPQUFNO0VBQUtDLFFBQU87QUFBQSxDQUFLLEdBQzlEbEIsbUNBQUFXLFFBQUFDLGNBQUMsUUFBQSxNQUFLLEtBQU9ILFdBQVcsU0FBUyxDQUFFLENBQ3BDLENBQ0QsQ0FDRDs7QUVyQkQsSUFBQWEscUJBQTRCekIsUUFBQSxpQkFBQTtBQUc1QixJQUFNMEIsb0JBQXFCQyxlQUEwQztBQUNwRSxRQUFNQyxpQkFBQSxHQUEwQkgsbUJBQUFJLGVBQWNGLFNBQVM7QUFBQSxNQUFBRyxhQUFBQywyQkFFaENILGFBQUEsR0FBQUk7QUFBQSxNQUFBO0FBQXZCLFNBQUFGLFdBQUFHLEVBQUEsR0FBQSxFQUFBRCxTQUFBRixXQUFBSSxFQUFBLEdBQUFDLFFBQXNDO0FBQUEsWUFBM0JDLFdBQUFKLE9BQUFLO0FBQ1YsVUFBSUMsU0FBU0MsY0FBY0gsUUFBUSxHQUFHO0FBQ3JDLGVBQU87TUFDUjtJQUNEO0VBQUEsU0FBQUksS0FBQTtBQUFBVixlQUFBVyxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBVixlQUFBWSxFQUFBO0VBQUE7QUFFQSxTQUFPO0FBQ1I7O0FDVEEsSUFBTUMsb0JBQXFCQyxvQkFBc0Q7QUFDaEYsUUFBTUMsUUFBaUNDLEVBQUUsTUFBTTtBQUMvQyxRQUFNQyxrQkFBMEJELEVBQUUsRUFBRUUsS0FBS0osY0FBYztBQUV2RCxNQUFJbEIsa0JBQWtCLGtDQUFrQyxHQUFHO0FBQzFELFVBQU11QixXQUFtQkosTUFBTUssS0FBSyxrQ0FBa0M7QUFDdEVELGFBQVNELEtBQUtKLGNBQWM7QUFDNUJPLE9BQUdDLEtBQUssa0JBQWtCLEVBQUVDLEtBQUtKLFFBQVE7RUFDMUMsV0FBV3ZCLGtCQUFrQiw0QkFBNEIsR0FBRztBQUMzRG1CLFVBQU1LLEtBQUssNEJBQTRCLEVBQUVJLE9BQU9QLGVBQWU7RUFDaEUsV0FBV3JCLGtCQUFrQixjQUFjLEdBQUc7QUFDN0NtQixVQUFNSyxLQUFLLGNBQWMsRUFBRUksT0FBT1AsZUFBZTtFQUNsRCxXQUFXckIsa0JBQWtCLHVCQUF1QixHQUFHO0FBQ3REbUIsVUFBTUssS0FBSyx1QkFBdUIsRUFBRUksT0FBT1AsZUFBZTtFQUMzRCxXQUFXckIsa0JBQWtCLGtCQUFrQixHQUFHO0FBQ2pEbUIsVUFBTUssS0FBSyxrQkFBa0IsRUFBRUksT0FBT1AsZUFBZTtFQUN0RDtBQUVBSSxLQUFHQyxLQUFLLGtCQUFrQixFQUFFQyxLQUFLTixlQUFlO0FBQ2pEOztBQ2pCQSxJQUFNUSxvQkFBd0NoRCxPQUFPO0FBR3JELElBQU1pRCx1QkFBMkM5QyxRQUFRO0FBR3pELElBQU0rQyxhQUFhQSxDQUFDckIsVUFBa0JzQixZQUF1QztBQUM1RVosSUFBRVYsUUFBUSxFQUFFWSxLQUFLVSxZQUFBLFFBQUFBLFlBQUEsU0FBQUEsVUFBVyxFQUFFO0FBQy9CO0FBR0EsSUFBTUMsbUJBQW1CQSxNQUFZO0FBQ3BDaEIsb0JBQWtCYSxvQkFBb0I7QUFDdkM7QUFHQSxJQUFNSSxvQkFBb0JBLE1BQVk7QUFDckNILGFBQVcsNkNBQTZDRixpQkFBaUI7QUFDMUU7QUFHQSxJQUFNTSxzQkFBc0JBLE1BQVk7QUFDdkNKLGFBQVcsa0NBQWtDO0FBQzlDOztBQzVCQyxJQUFBSyxjQUFlO0FBQ2YsSUFBQUMsVUFBVzs7QUNEWixJQUFNQyxhQUFhQSxDQUFDQyxhQUFxQkMsV0FBbUJDLFdBQW9CLFVBQWtCO0FBQ2pHLE1BQUlELFdBQVc7QUFDZCxRQUFJRCxhQUFhO0FBQ2hCQSxxQkFBZTtJQUNoQjtBQUVBLFFBQUlFLFVBQVU7QUFDYixZQUFNLENBQUNDLFlBQVksSUFBSUMsS0FBS0MsTUFBQSxJQUFBQyxPQUN2QkYsS0FBS0c7O1FBRVJOLFVBQVVPLFFBQVEsY0FBYyxJQUFJO01BQ3JDLEVBQUVBLFFBQVEsU0FBUyxJQUFJLEdBQUMsR0FBQSxDQUN6QjtBQUNBUCxrQkFBWUU7SUFDYjtBQUVBSCxtQkFBZUM7RUFDaEI7QUFFQSxTQUFPRDtBQUNSOztBQ2pCQSxJQUFNUyxlQUFnQlQsaUJBQWdDO0FBQ3JELFFBQU1VLHNCQUE4QyxhQUFhQyxLQUFLWCxXQUFXO0FBRWpGLE1BQUlZLGFBQXFCWjtBQUN6QixNQUFJVSxxQkFBcUI7QUFDeEIsS0FBQ0UsVUFBVSxJQUFJRjtBQUNmRSxpQkFBYUEsV0FBV0MsTUFBTSxHQUFHQyxLQUFLQyxJQUFJLEdBQUdILFdBQVdJLFNBQVMsQ0FBQyxDQUFDO0VBQ3BFO0FBRUEsUUFBTUMsWUFBb0JMLFdBQVdNLEtBQUs7QUFDMUMsUUFBTUMsWUFBb0JGLFVBQVVHLE9BQU8sQ0FBQztBQUM1QyxNQUFJRCxjQUFjRixVQUFVSSxHQUFHLEVBQUUsTUFBTUYsY0FBYyxPQUFPQSxjQUFjLE1BQU07QUFDL0UsV0FBT0YsVUFBVUosTUFBTSxHQUFHLElBQUlJLFVBQVVELFNBQVMsQ0FBQztFQUNuRDtBQUVBLFNBQU9KLFdBQVdNLEtBQUs7QUFDeEI7QUFHQSxJQUFNSSxvQkFBcUJ0QixpQkFBZ0M7QUFDMUQsTUFBSXVCLFdBQW1CO0FBRXZCLE1BQUk7QUFDSHZCLGdCQUFZUSxRQUNYLElBQUlnQixPQUFBLEdBQUFsQixPQUFrQlQsYUFBVyx1Q0FBQSxHQUF5QyxHQUFHLEdBQzVFNEIsZUFBOEI7QUFDOUIsWUFBTUMsWUFBb0IsdUJBQXVCZixLQUFLYyxTQUFTLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUNqRmpCLFFBQVEsc0JBQXNCLEVBQUUsRUFDaENBLFFBQVEscUJBQXFCLEVBQUU7QUFFakMsVUFBSWUsVUFBVTtBQUNiQSxvQkFBWTtNQUNiO0FBRUFBLGtCQUFZZCxhQUFhaUIsUUFBUTtBQUVqQyxhQUFPRDtJQUNSLENBQ0Q7RUFDRCxRQUFRO0FBQ1AsV0FBTztFQUNSO0FBRUEsU0FBT0YsU0FBU0wsS0FBSztBQUN0QjtBQUdBLElBQU1TLGdCQUFpQjNCLGlCQUFnQztBQUN0RCxNQUFJdUIsV0FBbUI7QUFFdkIsTUFBSTtBQUNIdkIsZ0JBQVlRLFFBQ1gsSUFBSWdCLE9BQUEsR0FBQWxCLE9BQWtCVCxhQUFXLHNCQUFBLEdBQXdCLEdBQUcsR0FDM0Q0QixlQUE4QjtBQUM5QixZQUFNQyxXQUFtQkQsVUFDdkJqQixRQUFRLHNCQUFzQixFQUFFLEVBQ2hDQSxRQUFRLElBQUlnQixPQUFBLEdBQUFsQixPQUFrQlQsYUFBVyxnQkFBQSxDQUFnQixHQUFHLEVBQUU7QUFFaEUsVUFBSTBCLFVBQVU7QUFDYkEsb0JBQVk7TUFDYjtBQUVBQSxrQkFBWWQsYUFBYWlCLFFBQVE7QUFFakMsYUFBT0Q7SUFDUixDQUNEO0VBQ0QsUUFBUTtBQUNQLFdBQU87RUFDUjtBQUVBLFNBQU9GLFNBQVNMLEtBQUs7QUFDdEI7QUFHQSxJQUFNVSxvQkFBcUI1QixpQkFBZ0M7QUFBQSxNQUFBNkIsTUFBQUM7QUFDMUQsTUFBSVAsV0FBbUI7QUFFdkIsUUFBTVEsV0FBQUYsT0FDSjdCLGlCQUFBOEIsd0JBQWV6RCxTQUFTQyxjQUFtQywyQkFBMkIsT0FBQSxRQUFBd0QsMEJBQUEsU0FBQSxTQUF2RUEsc0JBQTBFMUQsWUFBQSxRQUFBeUQsU0FBQSxTQUFBQSxPQUFVO0FBQ3JHLE1BQUksQ0FBQ0UsUUFBUWIsS0FBSyxHQUFHO0FBQ3BCLFdBQU87RUFDUjtBQUdBSyxhQUFXeEIsV0FBV3dCLFVBQVVELGtCQUFrQlMsT0FBTyxHQUFHLElBQUk7QUFFaEVSLGFBQVd4QixXQUFXd0IsVUFBVUksY0FBY0ksT0FBTyxHQUFHLElBQUk7QUFFNUQsU0FBT1IsU0FBU0wsS0FBSztBQUN0QjtBQUdBLElBQU1jLHFCQUFzQmhDLGlCQUFnQztBQUFBLE1BQUFpQyxPQUFBQztBQUMzRCxNQUFJWCxXQUFtQjtBQUV2QixRQUFNWSxZQUFBRixRQUNKakMsaUJBQUFrQyx5QkFBZTdELFNBQVNDLGNBQW1DLDJCQUEyQixPQUFBLFFBQUE0RCwyQkFBQSxTQUFBLFNBQXZFQSx1QkFBMEU5RCxZQUFBLFFBQUE2RCxVQUFBLFNBQUFBLFFBQVU7QUFDckcsTUFBSSxDQUFDRSxTQUFTakIsS0FBSyxHQUFHO0FBQ3JCLFdBQU87RUFDUjtBQUVBLE1BQUk7QUFDSCxVQUFNa0IsV0FBV2hDLEtBQUtDLE1BQU04QixRQUFRO0FBQ3BDLGFBQUFFLEtBQUEsR0FBQUMsa0JBQTJCQyxPQUFPQyxRQUFRSixRQUFRLEdBQUFDLEtBQUFDLGdCQUFBdEIsUUFBQXFCLE1BQUc7QUFBckQsWUFBVyxDQUFDekYsS0FBS3dCLEtBQUssSUFBQWtFLGdCQUFBRCxFQUFBO0FBQ3JCLFVBQUksSUFBSWIsT0FBZTNCLFdBQVcsRUFBRTRDLEtBQUs3RixHQUFHLEtBQUssT0FBT3dCLFVBQVUsVUFBVTtBQUMzRW1ELG1CQUFXeEIsV0FBV3dCLFVBQVVuRCxLQUFLO01BQ3RDO0FBR0EsVUFBSSxPQUFPQSxVQUFVLFVBQVU7QUFDOUIsaUJBQUFzRSxNQUFBLEdBQUFDLG1CQUFxQkosT0FBT0MsUUFBUXBFLEtBQWUsR0FBQXNFLE1BQUFDLGlCQUFBM0IsUUFBQTBCLE9BQUc7QUFBdEQsZ0JBQVcsQ0FBQ0UsR0FBR0MsQ0FBQyxJQUFBRixpQkFBQUQsR0FBQTtBQUNmLGNBQUksSUFBSWxCLE9BQWUzQixXQUFXLEVBQUU0QyxLQUFLRyxDQUFDLEtBQUssT0FBT0MsTUFBTSxVQUFVO0FBQ3JFdEIsdUJBQVd4QixXQUFXd0IsVUFBVXNCLENBQUM7VUFDbEM7UUFDRDtNQUNEO0lBQ0Q7RUFDRCxRQUFRO0FBQ1AsV0FBTztFQUNSO0FBRUEsU0FBT3RCLFNBQVNMLEtBQUs7QUFDdEI7QUFHQSxJQUFNNEIsbUJBQW9COUMsaUJBQWdDO0FBQUEsTUFBQStDLE9BQUFDO0FBQ3pELE1BQUl6QixXQUFtQjtBQUV2QixRQUFNMEIsVUFBQUYsUUFDSi9DLGlCQUFBZ0QseUJBQWUzRSxTQUFTQyxjQUFtQywyQkFBMkIsT0FBQSxRQUFBMEUsMkJBQUEsU0FBQSxTQUF2RUEsdUJBQTBFNUUsWUFBQSxRQUFBMkUsVUFBQSxTQUFBQSxRQUFVO0FBQ3JHLE1BQUksQ0FBQ0UsT0FBTy9CLEtBQUssR0FBRztBQUNuQixXQUFPO0VBQ1I7QUFFQUssYUFBV3hCLFdBQVd3QixVQUFVSSxjQUFjc0IsTUFBTSxHQUFHLElBQUk7QUFFM0QsU0FBTzFCLFNBQVNMLEtBQUs7QUFDdEI7O0FDN0lBLElBQUFnQyxxQkFBd0JuSCxRQUFBLGlCQUFBO0FBRXhCLElBQU1vSCxPQUFBLEdBQWNELG1CQUFBRSxXQUFBLG1CQUFBOUMsT0FBcUNSLE9BQU8sQ0FBRTs7QUNIbEUsSUFBTTtFQUFDdUQ7RUFBZ0JDO0FBQWEsSUFBSXBFLEdBQUdxRSxPQUFPQyxJQUFJO0FBRXRELElBQU1DLGNBQWNBLE1BQWM7QUFDakMsUUFBTUMsT0FBZUw7QUFFckIsTUFBSUssS0FBS0MsU0FBUyxJQUFJLEdBQUc7QUFDeEIsV0FBT0w7RUFDUjtBQUVBLFNBQU9JO0FBQ1I7O0FDTEEsSUFBTTtFQUFDRTtBQUFJLElBQUkxRSxHQUFHcUUsT0FBT0MsSUFBSTtBQUc3QixJQUFNSyxnQkFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFDLGtCQUFnQixXQUFPeEMsVUFBa0J5QyxVQUFrQkMsV0FBc0M7QUFDdEcsUUFBSTFDLFNBQVNMLEtBQUssR0FBRztBQUNwQixZQUFNZ0QsU0FBeUI7UUFDOUJDLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxlQUFlOztRQUVmQyxPQUFPTjtRQUNQTyxjQUFjO1FBQ2RDLE1BQU1qRDtRQUNOa0QsTUFBTTtRQUNOQyxTQUFTakIsWUFBWTtRQUNyQmtCLFNBQVNmO01BQ1Y7QUFDQSxVQUFJSyxXQUFXO0FBQ2RDLGVBQU9VLHFCQUFxQjtBQUM1QlYsZUFBT1csVUFBVTtNQUNsQjtBQUVBLFVBQUk7QUFBQSxZQUFBQztBQUNILGNBQU1DLE9BQUEsTUFBYTVCLElBQUlLLElBQUlVLE1BQU07QUFDakMsWUFBSSxFQUFDYSxTQUFBLFFBQUFBLFNBQUEsV0FBQUQsY0FBQUMsS0FBTyxPQUFPLE9BQUEsUUFBQUQsZ0JBQUEsVUFBZEEsWUFBaUJOLE9BQU07QUFDM0I7UUFDRDtBQUVBLGNBQU03RixpQkFBMEJvRyxLQUFLLE9BQU8sRUFBRVAsS0FBZ0J0RCxLQUFLO0FBRW5FLFlBQUl2QyxnQkFBZ0I7QUFDbkJELDRCQUFrQkMsY0FBYztRQUNqQyxPQUFPO0FBQ05pQiw4QkFBb0I7UUFDckI7TUFDRCxRQUFRO0FBQ1BELDBCQUFrQjtNQUNuQjtJQUNELE9BQU87QUFDTkMsMEJBQW9CO0lBQ3JCO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0F0Q01pRSxlQUFBbUIsSUFBQUMsS0FBQUMsS0FBQTtBQUFBLFdBQUFwQixNQUFBcUIsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBeUNOLElBQU1DLGVBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBdkIsa0JBQWUsV0FDcEJ4QyxVQUNBeUMsVUFDQUMsV0FDQXNCLFVBQ0k7QUFDSixVQUFNQyxpQkFBeUI7QUFDL0IsVUFBTUMsYUFHRjtNQUNIbEUsVUFBVTs7TUFFVnlDLFVBQVU7SUFDWDtBQUVBLFFBQUl6QyxTQUFTTCxLQUFLLEdBQUc7QUFDcEIsVUFBSTtBQUFBLFlBQUF3RTtBQUNILGNBQU14QixTQUF5QjtVQUM5QkMsUUFBUTtVQUNSQyxRQUFRO1VBQ1JDLGVBQWU7VUFDZkMsT0FBT047VUFDUE8sY0FBYztVQUNkb0Isc0JBQXNCRixXQUFXekIsV0FBV3dCOztVQUU1Q0kscUJBQUEsK0RBQUF0RixPQUlFaUIsVUFBUSxnVUFBQTtVQWVWc0UsNkJBQTZCO1VBQzdCQyw4QkFBOEI7VUFDOUJ0QixNQUFBLEtBQUFsRSxPQUFXbUYsV0FBV2xFLFFBQVEsRUFBQWpCLE9BQUdrRixnQkFBYyxTQUFBO1VBQy9DZixNQUFNO1VBQ05DLFNBQVNqQixZQUFZO1VBQ3JCa0IsU0FBU2Y7UUFDVjtBQUNBLFlBQUlLLFdBQVc7QUFDZEMsaUJBQU9XLFVBQVU7QUFDakJYLGlCQUFPVSxxQkFBcUI7UUFDN0I7QUFFQSxjQUFNRyxPQUFBLE1BQWE1QixJQUFJSyxJQUFJVSxNQUFNO0FBQ2pDLFlBQUksRUFBQ2EsU0FBQSxRQUFBQSxTQUFBLFdBQUFXLGVBQUFYLEtBQU8sT0FBTyxPQUFBLFFBQUFXLGlCQUFBLFVBQWRBLGFBQWlCbEIsT0FBTTtBQUMzQjtRQUNEO0FBRUEsY0FBTTdGLGlCQUEwQm9HLEtBQUssT0FBTyxFQUFFUCxLQUFnQnRELEtBQUs7QUFFbkUsWUFBSSxDQUFDdkMsZ0JBQWdCO0FBQ3BCaUIsOEJBQW9CO1FBRXJCLFdBQVdmLEVBQUVGLGNBQWMsRUFBRU0sS0FBSyxrQkFBa0IsRUFBRXVGLEtBQUssRUFBRXVCLE9BQU9QLGNBQWMsR0FBRztBQUNwRjVGLDhCQUFvQjtRQUNyQixXQUFXLE9BQU8yRixhQUFhLFlBQVk7QUFDMUNBLG1CQUFTNUcsY0FBYztRQUN4QixPQUFPO0FBQ05ELDRCQUFrQkMsY0FBYztRQUNqQztNQUNELFFBQVE7QUFDUGdCLDBCQUFrQjtNQUNuQjtJQUNELE9BQU87QUFDTkMsMEJBQW9CO0lBQ3JCO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FoRk15RixjQUFBVyxLQUFBQyxLQUFBQyxLQUFBQyxLQUFBO0FBQUEsV0FBQWIsTUFBQUgsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBQy9DTixJQUFNO0VBQUNnQjtBQUFrQixJQUFJbEgsR0FBR3FFLE9BQU9DLElBQUk7QUFHM0MsSUFBTTZDLFdBQVdBLENBQUNyRyxjQUFzQixJQUFJc0csZUFBdUJGLHVCQUErQjtBQUVqRyxVQUFRRSxhQUFhQyxZQUFZLEdBQUE7SUFDaEMsS0FBSztBQUNKLGFBQU92RSxtQkFBbUJoQyxXQUFXO0lBQ3RDLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztBQUNKLGFBQU84QyxpQkFBaUI5QyxXQUFXO0lBQ3BDLEtBQUs7SUFDTCxLQUFLO0FBQ0osYUFBTzRCLGtCQUFrQjVCLFdBQVc7SUFDckM7QUFDQyxhQUFPO0VBQ1Q7QUFDRDs7QUNaQSxJQUFNO0VBQUM0RCxNQUFBNEM7RUFBTUM7QUFBWSxJQUFJdkgsR0FBR3FFLE9BQU9DLElBQUk7QUFHM0MsSUFBTWtELGdCQUFBLDJCQUFBO0FBQUEsTUFBQUMsUUFBQTVDLGtCQUFnQixXQUFPNkMsaUJBQXlCQyxhQUF1QztBQUM1RixRQUFJO0FBQUEsVUFBQUM7QUFDSCxZQUFNNUMsU0FBeUI7UUFDOUJDLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxlQUFlOztRQUVmQyxPQUFPc0Msa0JBQWtCQztRQUN6QnJDLE1BQUEsa0RBQUFsRSxPQUF3RHNHLGlCQUFlLEdBQUEsRUFBQXRHLE9BQUl1RyxhQUFXLElBQUE7UUFDdEZwQyxNQUFNO1FBQ05DLFNBQVNqQixZQUFZO1FBQ3JCa0IsU0FBUzZCO1FBQ1RPLFNBQVM7UUFDVEMsUUFBUTtNQUNUO0FBRUEsWUFBTWpDLE9BQUEsTUFBYTVCLElBQUlLLElBQUlVLE1BQU07QUFDakMsVUFBSSxFQUFDYSxTQUFBLFFBQUFBLFNBQUEsV0FBQStCLGVBQUEvQixLQUFPLE9BQU8sT0FBQSxRQUFBK0IsaUJBQUEsVUFBZEEsYUFBaUJ0QyxPQUFNO0FBQzNCO01BQ0Q7QUFFQSxZQUFNekYsT0FBT2dHLEtBQUssT0FBTyxFQUFFUDtBQUMzQixVQUFJM0YsRUFBRUUsSUFBSSxFQUFFeUYsS0FBSyxFQUFFdEQsS0FBSyxHQUFHO0FBQzFCeEMsMEJBQWtCSyxJQUFJO01BQ3ZCO0lBQ0QsUUFBUTtJQUFDO0VBQ1YsQ0FBQTtBQUFBLFNBQUEsU0ExQk0ySCxlQUFBTyxLQUFBQyxLQUFBO0FBQUEsV0FBQVAsTUFBQXhCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQTZCTixJQUFNK0Isa0JBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBckQsa0JBQWtCLFdBQU82QyxpQkFBMkM7QUFDekUsUUFBSTtBQUFBLFVBQUFTO0FBQ0gsWUFBTW5ELFNBQXlCO1FBQzlCQyxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsZUFBZTs7UUFFZmlELE9BQU9iO1FBQ1BoQyxNQUFNO1FBQ05zQyxTQUFTO1FBQ1RDLFFBQVE7TUFDVDtBQUVBLFlBQU1qQyxPQUFBLE1BQWE1QixJQUFJSyxJQUFJVSxNQUFNO0FBQ2pDLFVBQUksRUFBQ2EsU0FBQSxRQUFBQSxTQUFBLFdBQUFzQyxlQUFBdEMsS0FBTyxPQUFPLE9BQUEsUUFBQXNDLGlCQUFBLFVBQWRBLGFBQWlCOUYsV0FBVTtBQUMvQjtNQUNEO0FBRUEsVUFBSWdHLGNBQXNCbEIsU0FBVXRCLEtBQUssT0FBTyxFQUFFeEQsU0FBb0JMLEtBQUssQ0FBQztBQUM1RXFHLHFCQUNFOUosa0JBQWtCLG9CQUFvQixJQUNwQyw2REFDQSxNQUFNOEo7QUFFVixVQUFJQSxZQUFZckcsS0FBSyxHQUFHO0FBQ3ZCLGFBQUsyQyxjQUFjMEQsYUFBYVgsaUJBQWlCLElBQUk7TUFDdEQsT0FBTztBQUNOaEgsNEJBQW9CO01BQ3JCO0lBQ0QsUUFBUTtBQUNQQSwwQkFBb0I7SUFDckI7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQWhDTXVILGlCQUFBSyxNQUFBO0FBQUEsV0FBQUosTUFBQWpDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUN4Q04sSUFBQXFDLHFCQUE0QjFMLFFBQUEsaUJBQUE7QUFFNUIsSUFBTTJMLGNBQWtDeEksR0FBR3FFLE9BQU9DLElBQUk7QUFHdEQsSUFBTW1FLGdCQUFnQkEsQ0FBQ0MsV0FBbUJDLGlCQUE2QztBQUN0RixNQUFJQyxXQUFvQkosWUFBWUUsU0FBUztBQUM3QyxNQUFJLENBQUNFLFVBQVU7QUFDZCxXQUFPO0VBQ1I7QUFFQUEsYUFBV0MsT0FBT0QsUUFBUSxFQUFFdkIsWUFBWSxFQUFFckYsS0FBSztBQUMvQyxNQUFJLENBQUM0RyxVQUFVO0FBQ2QsV0FBTztFQUNSO0FBRUEsVUFBQSxHQUFPTCxtQkFBQTdKLGVBQWNpSyxZQUFZLEVBQUVsRSxTQUFTbUUsUUFBa0I7QUFDL0Q7O0FDZEEsSUFBTUUsbUJBQW1CQSxNQUFlO0FBQ3ZDLFNBQU8zSixTQUFTNEosS0FBS0MsVUFBVW5DLE9BQWVsRyxXQUFXLElBQUk7QUFDOUQ7O0FDSUEsSUFBTTtFQUFDc0k7RUFBc0JDO0VBQTRCQztBQUFVLElBQUluSixHQUFHcUUsT0FBT0MsSUFBSTtBQUdyRixJQUFNOEUsZUFBZ0IxSixXQUF5QztBQUU5RCxNQUFJK0ksY0FBYyxzQkFBc0IsQ0FBQyxjQUFjLE1BQU0sUUFBUSxRQUFRLE9BQU8sZUFBZSxDQUFDLEdBQUc7QUFFdEcsUUFBSWxLLGtCQUFrQixjQUFjLEdBQUc7QUFBQSxVQUFBOEssdUJBQUFDO0FBR3RDLFlBQU1DLFdBQW1CQyxVQUFVeEosR0FBR3lKLEtBQUtDLE9BQU9QLFVBQVUsQ0FBQyxFQUFFN0gsUUFDOUQsSUFBSWdCLE9BQUEsUUFBQWxCLFFBQUFpSSx5QkFBQUMseUJBQWV0SixHQUFHeUosS0FBS0MsT0FBTyxFQUFFLEVBQUVDLE1BQU0sUUFBUSxPQUFBLFFBQUFMLDJCQUFBLFNBQUEsU0FBakNBLHVCQUFxQyxDQUFDLE9BQUEsUUFBQUQsMEJBQUEsU0FBQUEsd0JBQUssSUFBRSxLQUFBLENBQUssR0FDckUsRUFDRDtBQUdBLFVBQUlFLGFBQWFKLFlBQVk7QUFDNUI7TUFDRDtBQUVBLFlBQU05RyxXQUFtQjhFLFNBQVM7QUFDbEMsVUFBSTlFLFVBQVU7QUFFYjdCLHlCQUFpQjtBQUNqQixhQUFLbUUsY0FBY3RDLFVBQVU4RyxZQUFZLElBQUk7TUFDOUM7SUFDRCxXQUFXLENBQUM1SyxrQkFBa0Isc0JBQXNCLEtBQUtrSyxjQUFjLFlBQVksTUFBTSxHQUFHO0FBRzNGLFVBQUksQ0FBQ0ssaUJBQWlCLEdBQUc7QUFDeEI7TUFDRDtBQUdBcEosWUFBTUssS0FBSyxvQkFBb0IsRUFBRUYsS0FBSyxFQUFFO0FBRXhDLFVBQUksQ0FBQ3RCLGtCQUFrQiwyQkFBMkIsR0FBRztBQUVwRGlDLHlCQUFpQjtBQUNqQixhQUFLeUgsZ0JBQWdCa0IsVUFBVTtNQUNoQztJQUNELFdBQVc1SyxrQkFBa0IsbUJBQW1CLEtBQUtrSyxjQUFjLFlBQVksTUFBTSxHQUFHO0FBR3ZGLFVBQUksQ0FBQ2xLLGtCQUFrQiwyQkFBMkIsR0FBRztBQUVwRG1CLGNBQU1LLEtBQUssb0JBQW9CLEVBQUVGLEtBQUtRLG9CQUFvQjtBQUMxRCxhQUFLNEgsZ0JBQWdCa0IsVUFBVTtNQUNoQztJQUNELE9BQU87QUFDTnpJLDBCQUFvQjtJQUNyQjtFQUNELFdBQVcrSCxjQUFjLHNCQUFzQixDQUFDLGFBQWEsS0FBSyxDQUFDLEdBQUc7QUFFckUsUUFBSSxDQUFDSyxpQkFBaUIsR0FBRztBQUN4QjtJQUNEO0FBRUEsUUFDQ3ZLLGtCQUFrQiwyQkFBMkIsS0FDN0NBLGtCQUFrQixZQUFZLEtBQzlCLENBQUNBLGtCQUFrQixjQUFjLEtBQ2pDLENBQUNrSyxjQUFjLFlBQVksTUFBTSxHQUNoQztBQUFBLFVBQUFtQjtBQUNEakssUUFBRVUsb0JBQW9CLEVBQUV3SixZQUFZLFdBQVc7QUFDL0MsV0FBSzFELGNBQUF5RCxrQkFDSGxLLE1BQU1LLEtBQUssMkJBQTJCLEVBQUUrSixJQUFJLE9BQUEsUUFBQUYsb0JBQUEsU0FBQUEsa0JBQTRCLElBQ3pFVCxZQUNBLElBQ0Q7SUFDRDtFQUNELFdBQVc1SyxrQkFBa0IsdUJBQXVCLEdBQUc7QUFHdEQsUUFBSSxDQUFDdUssaUJBQWlCLEdBQUc7QUFDeEI7SUFDRDtBQUVBLFFBQUl2SyxrQkFBa0IsQ0FBQyxpQkFBaUIsT0FBTyxVQUFVLENBQUMsR0FBRztBQUFBLFVBQUF3TDtBQUU1RCxZQUFNQyxtQkFBQUQsbUJBQTBCckssTUFBTUssS0FBSyxVQUFVLEVBQUUrSixJQUFJLE9BQUEsUUFBQUMscUJBQUEsU0FBQUEsbUJBQUs7QUFFaEUsVUFBSTFILFdBQW1CUyxtQkFBbUJrSCxlQUFlO0FBQ3pEM0gsbUJBQUFBLFdBQWFLLGtCQUFrQnNILGVBQWU7QUFFOUMsVUFBSTNILFVBQVU7QUFFYjdCLHlCQUFpQjtBQUNqQixhQUFLbUUsY0FBY3RDLFVBQVVyQyxHQUFHcUUsT0FBT0MsSUFBSSxvQkFBb0IsR0FBRyxJQUFJO01BQ3ZFLFdBQVcsZ0NBQWdDZixLQUFLN0QsTUFBTUssS0FBSyxtQkFBbUIsRUFBRXVGLEtBQUssQ0FBQyxHQUFHO01BS3pGO0lBQ0Q7RUFDRCxXQUFXLENBQUMvRyxrQkFBa0IsZ0JBQWdCLEtBQUtrSyxjQUFjLHdCQUF3QixTQUFTLEdBQUc7QUFFcEcsVUFBTWQsY0FBc0J3QixXQUFXN0gsUUFBUSxrQkFBa0IsRUFBRTtBQUNuRSxRQUFJNEgsNEJBQTRCO0FBQy9CLFlBQU1lLGVBQUEsR0FBQTdJLE9BQTBCNkgsc0JBQW9CLEdBQUEsRUFBQTdILE9BQUk4SCwwQkFBMEI7QUFDbEYsV0FBSzFCLGNBQWN5QyxjQUFjdEMsV0FBVztJQUM3QztFQUNELE9BQU87QUFDTmpILHdCQUFvQjtFQUNyQjtBQUNEOztBQzdHQSxJQUFNO0VBQUN5SSxZQUFBZTtBQUFVLElBQUlsSyxHQUFHcUUsT0FBT0MsSUFBSTtBQUduQyxJQUFNNkYsMEJBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBdkYsa0JBQTBCLFdBQU9FLFdBQXNDO0FBRTVFLFFBQUksQ0FBQytELGlCQUFpQixHQUFHO0FBQ3hCO0lBQ0Q7QUFFQSxVQUFNdUIsZUFBd0NsTCxTQUFTbUwsaUJBQ3RELG9DQUNEO0FBRUEsUUFBSSxDQUFDRCxhQUFhdkksUUFBUTtBQUN6QjtJQUNEO0FBR0EsVUFBTXlJLG1CQUlBLENBQUE7QUFFTixRQUFJQyxJQUFZO0FBQ2hCLFNBQUtBLElBQUksR0FBR0EsSUFBSUgsYUFBYXZJLFFBQVEsRUFBRTBJLEdBQUc7QUFBQSxVQUFBQyxPQUFBQyxxQkFBQUMsdUJBQUFDO0FBQ3pDLFlBQU1ySyxVQUFtQzhKLGFBQWFHLENBQUM7QUFDdkQsVUFBSSxDQUFDakssU0FBUztBQUNiO01BQ0Q7QUFFQSxZQUFNc0ssY0FBa0N0SyxRQUFRbkIsY0FBMkIsZUFBZTtBQUMxRixVQUFJLENBQUN5TCxhQUFhO0FBQ2pCO01BQ0Q7QUFFQSxZQUFNO1FBQUN6TTtNQUFTLElBQUl5TTtBQUNwQixVQUFJLENBQUN6TSxXQUFXO0FBQ2Y7TUFDRDtBQUVBLFlBQU0sQ0FBQSxFQUFHME0sTUFBTSxLQUFBTCxRQUFJLDBCQUEwQmhKLEtBQUtyRCxTQUFTLE9BQUEsUUFBQXFNLFVBQUEsU0FBQUEsUUFBSyxDQUFBO0FBQ2hFLFlBQU07UUFBQzNJO01BQU0sSUFBSXlJO0FBRWpCaEssY0FBUXdLLGFBQWEsY0FBY2pKLE9BQU9rSixTQUFTLENBQUM7QUFDcERULHVCQUFpQnpJLE1BQU0sSUFBSTtRQUMxQnZCO1FBQ0FpRSxPQUFBa0csc0JBQU1JLFdBQUEsUUFBQUEsV0FBQSxTQUFBLFNBQUFBLE9BQVF6RCxZQUFZLE9BQUEsUUFBQXFELHdCQUFBLFNBQUFBLHNCQUFLO1FBQy9CTyxPQUFBTix5QkFBQUMseUJBQU1DLFlBQVlLLGlCQUFBLFFBQUFOLDJCQUFBLFNBQUEsU0FBWkEsdUJBQXlCNUksS0FBSyxPQUFBLFFBQUEySSwwQkFBQSxTQUFBQSx3QkFBSztNQUMxQztJQUNEO0FBR0EsUUFBSVEsa0JBQTBCO0FBQzlCLGFBQUFDLE1BQUEsR0FBQUMsaUJBQTJCaEksT0FBT2lJLE9BQU9mLGdCQUFnQixHQUFBYSxNQUFBQyxlQUFBdkosUUFBQXNKLE9BQUc7QUFBNUQsWUFBV0csZUFBQUYsZUFBQUQsR0FBQTtBQUNWLFlBQU07UUFBQ0g7UUFBTTFLO1FBQVNpRTtNQUFJLElBQUkrRztBQUU5QixVQUFJLENBQUNOLE1BQU07QUFDVjtNQUNEO0FBRUEsWUFBTW5MLFdBQW1CSCxFQUFFWSxPQUFPO0FBRWxDLFVBQUksQ0FBQyxjQUFjLE1BQU0sT0FBTyxRQUFRLE1BQU0sRUFBRWtFLFNBQVM4RyxhQUFhL0csSUFBSSxHQUFHO0FBQzVFLGNBQU1uQyxXQUFtQjhFLFNBQVM4RCxNQUFNekcsSUFBSTtBQUM1QyxZQUFJbkMsVUFBVTtBQUVidkMsbUJBQVMwTCxRQUFRbkwsb0JBQW9CO0FBQ3JDOEssNkJBQUEsaURBQUEvSixPQUFvRW9KLEdBQUMsTUFBQSxFQUFBcEosT0FBT2lCLFVBQVEsVUFBQTtRQUNyRjtNQUNELFdBQVcsQ0FBQyxPQUFPLFdBQVcsRUFBRW9DLFNBQVNELElBQUksR0FBRztBQUMvQyxhQUFLMkIsYUFDSjhFLE1BQ0FmLGFBQ0FuRixXQUNDLHVCQUFNO0FBQ04saUJBQVExQyxjQUEyQjtBQUNsQ3ZDLHFCQUFTMEwsUUFBUW5KLFFBQVE7VUFDMUI7UUFDRCxHQUFHLENBQ0o7TUFDRDtJQUNEO0FBR0EsUUFBSThJLGlCQUFpQjtBQUNwQkEsd0JBQUEsNERBQUEvSixPQUE4RStKLGlCQUFlLFFBQUE7QUFDN0YsVUFBSTtBQUFBLFlBQUFNO0FBQ0gsY0FBTXpHLFNBQXlCO1VBQzlCQyxRQUFRO1VBQ1JDLFFBQVE7VUFDUkMsZUFBZTtVQUNmRyxNQUFNNkY7VUFDTjlGLGNBQWM7VUFDZEUsTUFBTTtRQUNQO0FBQ0EsWUFBSVIsV0FBVztBQUNkQyxpQkFBT1UscUJBQXFCO0FBQzVCVixpQkFBT1csVUFBVTtRQUNsQjtBQUVBLGNBQU1FLE9BQUEsTUFBYTVCLElBQUlLLElBQUlVLE1BQU07QUFDakMsWUFBSSxFQUFDYSxTQUFBLFFBQUFBLFNBQUEsV0FBQTRGLGVBQUE1RixLQUFPLE9BQU8sT0FBQSxRQUFBNEYsaUJBQUEsVUFBZEEsYUFBaUJuRyxPQUFNO0FBQzNCO1FBQ0Q7QUFFQSxjQUFNN0YsaUJBQTBCb0csS0FBSyxPQUFPLEVBQUVQLEtBQWdCdEQsS0FBSztBQUNuRSxZQUFJdkMsZ0JBQWdCO0FBQ25CLGdCQUFNaU0saUJBQXlCL0wsRUFBRUYsY0FBYztBQUMvQyxtQkFBQWtNLE1BQUEsR0FBQUMsbUJBQWtDdkksT0FBT0MsUUFBUWlILGdCQUFnQixHQUFBb0IsTUFBQUMsaUJBQUE5SixRQUFBNkosT0FBRztBQUFwRSxrQkFBVyxDQUFDak8sS0FBSzZOLFlBQVksSUFBQUssaUJBQUFELEdBQUE7QUFDNUIsa0JBQU07Y0FBQ3BMO2NBQVNpRTtZQUFJLElBQUkrRztBQUV4QixnQkFBSSxDQUFDLENBQUMsY0FBYyxNQUFNLFFBQVEsT0FBTyxNQUFNLEVBQUU5RyxTQUFTRCxJQUFJLEdBQUc7QUFDaEU7WUFDRDtBQUVBLGtCQUFNMUUsV0FBZ0M0TCxlQUFlM0wsS0FBQSxxRkFBQXFCLE9BQ2lDMUQsR0FBRyxDQUN6RjtBQUNBLGdCQUFJLENBQUNvQyxTQUFTZ0MsUUFBUTtBQUNyQjtZQUNEO0FBRUEsa0JBQU0rSixhQUFxQmxNLEVBQUVZLE9BQU8sRUFBRVIsS0FBSyxrQ0FBa0M7QUFDN0U4TCx1QkFBV2hNLEtBQUtDLFNBQVNELEtBQUssQ0FBQztBQUMvQkcsZUFBR0MsS0FBSyxrQkFBa0IsRUFBRUMsS0FBSzJMLFVBQVU7VUFDNUM7UUFDRDtNQUNELFFBQVE7TUFBQztJQUNWO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0EvSE0xQix5QkFBQTJCLE1BQUE7QUFBQSxXQUFBMUIsTUFBQW5FLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QWxCTE4sTUFBQSxHQUFLdEosbUJBQUFtUCxTQUFRLEVBQUVDLEtBQUssU0FBU0MsZ0JBQWdCdk0sT0FBc0M7QUFFbEYwSixlQUFhMUosS0FBSztBQUVsQixPQUFLeUssd0JBQXdCLElBQUk7QUFDbEMsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgInJlcXVpcmUiLCAicHJldmlld0xvYWRpbmdDb250ZW50IiwgInByZXZpZXdMb2FkaW5nSW5uZXIiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkZhaWxlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJMb2FkaW5nIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAic3JjIiwgIkFsZXJ0X2RlZmF1bHQiLCAiZGVjb2RpbmciLCAid2lkdGgiLCAiaGVpZ2h0IiwgImlkIiwgImNsYXNzTmFtZSIsICJBamF4X2xvYWRlcl9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJjaGVja0VsZW1lbnRFeGlzdCIsICJzZWxlY3RvcnMiLCAic2VsZWN0b3JBcnJheSIsICJnZW5lcmF0ZUFycmF5IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInNlbGVjdG9yIiwgInZhbHVlIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZXJyIiwgImUiLCAiZiIsICJhZGRQYXJzZWRXaWtpdGV4dCIsICJwYXJzZWRXaWtpdGV4dCIsICIkYm9keSIsICIkIiwgIiRwYXJzZWRXaWtpdGV4dCIsICJodG1sIiwgIiRlbGVtZW50IiwgImZpbmQiLCAibXciLCAiaG9vayIsICJmaXJlIiwgImFwcGVuZCIsICJub3RpY2VGYWlsRWxlbWVudCIsICJub3RpY2VMb2FkaW5nRWxlbWVudCIsICJyZXBsYWNlRE9NIiwgImVsZW1lbnQiLCAiYWRkTG9hZGluZ05vdGljZSIsICJsb2FkaW5nRmFpbE5vdGljZSIsICJyZW1vdmVMb2FkaW5nTm90aWNlIiwgIndpa2lUZXh0S2V5IiwgInZlcnNpb24iLCAibHVhQWRkVGV4dCIsICJpbnB1dFN0cmluZyIsICJuZXdTdHJpbmciLCAiaXNFc2NhcGUiLCAiZXNjYXBlU3RyaW5nIiwgIkpTT04iLCAicGFyc2UiLCAiY29uY2F0IiwgInN0cmluZ2lmeSIsICJyZXBsYWNlIiwgImx1YUdldFN0cmluZyIsICJ0ZXN0U3RyaW5nRXhlY0FycmF5IiwgImV4ZWMiLCAidGVzdFN0cmluZyIsICJzbGljZSIsICJNYXRoIiwgIm1heCIsICJsZW5ndGgiLCAidHJpbUNoZWNrIiwgInRyaW0iLCAiZmlyc3RDaGFyIiwgImNoYXJBdCIsICJhdCIsICJsdWFHZXRDb250ZW50VGV4dCIsICJ3aWtpdGV4dCIsICJSZWdFeHAiLCAic3Vic3RyaW5nIiwgInRlbXBUZXh0IiwgImx1YUdldE9ialRleHQiLCAibHVhR2V0Q1NTd2lraXRleHQiLCAiX3JlZiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiY3NzVGV4dCIsICJsdWFHZXRKU09Od2lraXRleHQiLCAiX3JlZjIiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJKU09OVGV4dCIsICJqc29uRGF0YSIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAidGVzdCIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzMiIsICJrIiwgInYiLCAibHVhR2V0SlN3aWtpdGV4dCIsICJfcmVmMyIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QzIiwgImpzVGV4dCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJ3Z1VzZXJMYW5ndWFnZSIsICJ3Z1VzZXJWYXJpYW50IiwgImNvbmZpZyIsICJnZXQiLCAiZ2V0TGFuZ3VhZ2UiLCAibGFuZyIsICJpbmNsdWRlcyIsICJza2luIiwgIm13QWRkV2lraVRleHQiLCAiX3JlZjQiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFnZU5hbWUiLCAiaXNQcmV2aWV3IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGUiLCAiY29udGVudG1vZGVsIiwgInRleHQiLCAicHJvcCIsICJ1c2VsYW5nIiwgInVzZXNraW4iLCAiZGlzYWJsZWVkaXRzZWN0aW9uIiwgInByZXZpZXciLCAiX2RhdGEkcGFyc2UiLCAiZGF0YSIsICJfeCIsICJfeDIiLCAiX3gzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJtd0FkZEx1YVRleHQiLCAiX3JlZjUiLCAiY2FsbEJhY2siLCAidGVtcE1vZHVsZU5hbWUiLCAibW9kdWxlQ2FsbCIsICJfZGF0YSRwYXJzZTIiLCAidGVtcGxhdGVzYW5kYm94dGl0bGUiLCAidGVtcGxhdGVzYW5kYm94dGV4dCIsICJ0ZW1wbGF0ZXNhbmRib3hjb250ZW50bW9kZWwiLCAidGVtcGxhdGVzYW5kYm94Y29udGVudGZvcm1hdCIsICJzZWFyY2giLCAiX3g0IiwgIl94NSIsICJfeDYiLCAiX3g3IiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJsdWFDaGVjayIsICJjb250ZW50TW9kZWwiLCAidG9Mb3dlckNhc2UiLCAic2tpbjIiLCAid2dSZXZpc2lvbklkIiwgIm13QXBwbHlOb3RpY2UiLCAiX3JlZjYiLCAiY3VycmVudFBhZ2VOYW1lIiwgInBhZ2VTdWJOYW1lIiwgIl9kYXRhJHBhcnNlMyIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJfeDgiLCAiX3g5IiwgIm13QXBwbHlSZXZpc2lvbiIsICJfcmVmNyIsICJfZGF0YSRwYXJzZTQiLCAib2xkaWQiLCAicGFnZUNvbnRlbnQiLCAiX3gxMCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiYWxsTXdDb25maWciLCAiY2hlY2tNd0NvbmZpZyIsICJjb25maWdLZXkiLCAiZXhwZWN0Q29uZmlnIiwgIm13Q29uZmlnIiwgIlN0cmluZyIsICJjaGVja05lZWRQcmV2aWV3IiwgImJvZHkiLCAiaW5uZXJIVE1MIiwgIndnQ2Fub25pY2FsTmFtZXNwYWNlIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnUGFnZU5hbWUiLCAibXdBZGRQcmV2aWV3IiwgIl9tdyR1dGlsJGdldFVybCRtYXRjaCIsICJfbXckdXRpbCRnZXRVcmwkbWF0Y2gyIiwgInBhdGhQYXRoIiwgImRlY29kZVVSSSIsICJ1dGlsIiwgImdldFVybCIsICJtYXRjaCIsICJfJGJvZHkkZmluZCR2YWwiLCAiaW5zZXJ0QWZ0ZXIiLCAidmFsIiwgIl8kYm9keSRmaW5kJHZhbDIiLCAidGV4dGFyZWFDb250ZW50IiwgImZ1bGxQYWdlTmFtZSIsICJ3Z1BhZ2VOYW1lMiIsICJ3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSIsICJfcmVmOCIsICJ0ZXN0Y2FzZUxpc3QiLCAicXVlcnlTZWxlY3RvckFsbCIsICJ0ZXN0Y2FzZURhdGFMaXN0IiwgImkiLCAiX2V4ZWMiLCAiX2NvZGVJZCR0b0xvd2VyQ2FzZSIsICJfY29kZUVsZW1lbnQkdGV4dENvbnQiLCAiX2NvZGVFbGVtZW50JHRleHRDb250MiIsICJjb2RlRWxlbWVudCIsICJjb2RlSWQiLCAic2V0QXR0cmlidXRlIiwgInRvU3RyaW5nIiwgImNvZGUiLCAidGV4dENvbnRlbnQiLCAicGFja2FnZVdpa2l0ZXh0IiwgIl9pMyIsICJfT2JqZWN0JHZhbHVlcyIsICJ2YWx1ZXMiLCAidGVzdGNhc2VJdGVtIiwgInByZXBlbmQiLCAiX2RhdGEkcGFyc2U1IiwgIiRwYXJzZWRFbGVtZW50IiwgIl9pNCIsICJfT2JqZWN0JGVudHJpZXMzIiwgIiRhZGRUYXJnZXQiLCAiX3gxMSIsICJnZXRCb2R5IiwgInRoZW4iLCAic3BlY2lhbFdpa2l0ZXh0Il0KfQo=
