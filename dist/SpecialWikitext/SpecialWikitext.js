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
        useskin: skin2
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NwZWNpYWxXaWtpdGV4dC9TcGVjaWFsV2lraXRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9jb21wb25lbnRzL1NwZWNpYWxXaWtpdGV4dC5tb2R1bGUubGVzcyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvZ2VuZXJhdGVFbGVtZW50cy50c3giLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tFbGVtZW50RXhpc3QudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvYWRkUGFyc2VkV2lraXRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL25vdGljZS50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L29wdGlvbnMuanNvbiIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUFkZFRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2x1YS9sdWFHZXRUZXh0LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvZ2V0TGFuZ3VhZ2UudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL213L213QWRkVGV4dC50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUNoZWNrLnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9tdy9td0FwcGx5LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy91dGlsL2NoZWNrTXdDb25maWcudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tOZWVkUHJldmlldy50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbXcvbXdBZGRQcmV2aWV3LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy93aWtpdGV4dFByZXZpZXdUZXN0Y2FzZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHttd0FkZFByZXZpZXd9IGZyb20gJy4vbW9kdWxlcy9tdy9td0FkZFByZXZpZXcnO1xuaW1wb3J0IHt3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZX0gZnJvbSAnLi9tb2R1bGVzL3dpa2l0ZXh0UHJldmlld1Rlc3RjYXNlJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzcGVjaWFsV2lraXRleHQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdC8vIOaJp+ihjOmihOiniFxuXHRtd0FkZFByZXZpZXcoJGJvZHkpO1xuXHQvLyDmo4Dmn6XmtYvor5XmoLfkvotcblx0dm9pZCB3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSh0cnVlKTtcbn0pO1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvU3BlY2lhbFdpa2l0ZXh0Lm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgcHJldmlld0xvYWRpbmdDb250ZW50ID0gXCJTcGVjaWFsV2lraXRleHQtbW9kdWxlX19wcmV2aWV3LWxvYWRpbmdfX2NvbnRlbnRfMFByRGxHXCI7XG5leHBvcnQgY29uc3QgcHJldmlld0xvYWRpbmdJbm5lciA9IFwiU3BlY2lhbFdpa2l0ZXh0LW1vZHVsZV9fcHJldmlldy1sb2FkaW5nX19pbm5lcl8wUHJEbEdcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInByZXZpZXdMb2FkaW5nQ29udGVudFwiOiBwcmV2aWV3TG9hZGluZ0NvbnRlbnQsXG4gIFwicHJldmlld0xvYWRpbmdJbm5lclwiOiBwcmV2aWV3TG9hZGluZ0lubmVyXG59O1xuICAgICAgIiwgImltcG9ydCB7cHJldmlld0xvYWRpbmdDb250ZW50LCBwcmV2aWV3TG9hZGluZ0lubmVyfSBmcm9tICcuL1NwZWNpYWxXaWtpdGV4dC5tb2R1bGUubGVzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQgYWpheExvYWRlciBmcm9tICcuLi9pbWFnZXMvQWpheC1sb2FkZXIuZ2lmJztcbmltcG9ydCBhbGVydCBmcm9tICcuLi9pbWFnZXMvQWxlcnQucG5nJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcblxuY29uc3QgRmFpbGVkID0gKCkgPT4gKFxuXHQ8PlxuXHRcdDxpbWcgc3JjPXthbGVydH0gZGVjb2Rpbmc9XCJhc3luY1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIC8+XG5cdFx0PHNwYW4+Jm5ic3A7e2dldE1lc3NhZ2UoJ0ZhaWxlZCcpfTwvc3Bhbj5cblx0PC8+XG4pO1xuXG5jb25zdCBMb2FkaW5nID0gKCkgPT4gKFxuXHQ8ZGl2IGlkPXsnc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZyd9PlxuXHRcdDxkaXYgY2xhc3NOYW1lPXtbJ3F1b3RlYm94JywgcHJldmlld0xvYWRpbmdJbm5lcl19IGlkPXsnc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZ19faW5uZXInfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtwcmV2aWV3TG9hZGluZ0NvbnRlbnR9IGlkPXsnc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZ19fY29udGVudCd9PlxuXHRcdFx0XHQ8aW1nIHNyYz17YWpheExvYWRlcn0gZGVjb2Rpbmc9XCJhc3luY1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIC8+XG5cdFx0XHRcdDxzcGFuPiZuYnNwO3tnZXRNZXNzYWdlKCdMb2FkaW5nJyl9PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuKTtcblxuZXhwb3J0IHtGYWlsZWQsIExvYWRpbmd9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRGYWlsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmFpbGVkIHRvIGxvYWQgcHJldmlldy4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6aKE6KeI5Yqg6L295aSx6LSlJyxcblx0XHRcdCd6aC1oYW50JzogJ+mgkOimvei8ieWFpeWksei0pScsXG5cdFx0fSksXG5cdFx0TG9hZGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nIHByZXZpZXcuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6aKE6KeI5Yqg6L295Lit4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+mgkOimvei8ieWFpeS4reKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuLy8g5qOA5p+lc2VsZWN0b3Llr7nlupTnmoRET03lr7nosaHmmK/lkKblrZjlnKhcbmNvbnN0IGNoZWNrRWxlbWVudEV4aXN0ID0gKHNlbGVjdG9yczogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuID0+IHtcblx0Y29uc3Qgc2VsZWN0b3JBcnJheTogc3RyaW5nW10gPSBnZW5lcmF0ZUFycmF5KHNlbGVjdG9ycyk7XG5cblx0Zm9yIChjb25zdCBzZWxlY3RvciBvZiBzZWxlY3RvckFycmF5KSB7XG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQge2NoZWNrRWxlbWVudEV4aXN0fTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2NoZWNrRWxlbWVudEV4aXN0fSBmcm9tICcuL2NoZWNrRWxlbWVudEV4aXN0JztcblxuLy8g5bCG6Kej5p6Q5ZCO55qEd2lraXRleHTliqDlhaXpobXpnaLkuK1cbmNvbnN0IGFkZFBhcnNlZFdpa2l0ZXh0ID0gKHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpOiB2b2lkID0+IHtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRjb25zdCAkcGFyc2VkV2lraXRleHQ6IEpRdWVyeSA9ICQoKS5odG1sKHBhcnNlZFdpa2l0ZXh0KTtcblxuXHRpZiAoY2hlY2tFbGVtZW50RXhpc3QoJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nJykpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmcnKTtcblx0XHQkZWxlbWVudC5odG1sKHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkZWxlbWVudCk7XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5kaWZmLWN1cnJlbnR2ZXJzaW9uLXRpdGxlJykpIHtcblx0XHQkYm9keS5maW5kKCcuZGlmZi1jdXJyZW50dmVyc2lvbi10aXRsZScpLmFwcGVuZCgkcGFyc2VkV2lraXRleHQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcucHJldmlld25vdGUnKSkge1xuXHRcdCRib2R5LmZpbmQoJy5wcmV2aWV3bm90ZScpLmFwcGVuZCgkcGFyc2VkV2lraXRleHQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcubXctdW5kZWxldGUtcmV2aXNpb24nKSkge1xuXHRcdCRib2R5LmZpbmQoJy5tdy11bmRlbGV0ZS1yZXZpc2lvbicpLmFwcGVuZCgkcGFyc2VkV2lraXRleHQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcjbXctY29udGVudC10ZXh0JykpIHtcblx0XHQkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0JykuYXBwZW5kKCRwYXJzZWRXaWtpdGV4dCk7XG5cdH1cblxuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkcGFyc2VkV2lraXRleHQpO1xufTtcblxuZXhwb3J0IHthZGRQYXJzZWRXaWtpdGV4dH07XG4iLCAiaW1wb3J0IHtGYWlsZWQsIExvYWRpbmd9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2VuZXJhdGVFbGVtZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fSBmcm9tICcuL3V0aWwvYWRkUGFyc2VkV2lraXRleHQnO1xuXG4vLyBbW0ZpbGU6R25vbWUtZGlhbG9nLXdhcm5pbmcyLnN2Z3wzMnB4XV1cbi8vIC17emgtaGFuczrpooTop4jliqDovb3lpLHotKU7emgtaGFudDrpoJDopr3ovInlhaXlpLHotKU7fS1cbmNvbnN0IG5vdGljZUZhaWxFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQgPSBGYWlsZWQoKTtcblxuLy8ge3tRdW90ZSBib3ggfHF1b3RlICA9IC17emgtaGFuczrpooTop4jliqDovb3kuK07emgtaGFudDrpoJDopr3ovInlhaXkuK07fS3igKbigKYgfHdpZHRoICA9IDUwJSB8YWxpZ24gID0gY2VudGVyfX1cbmNvbnN0IG5vdGljZUxvYWRpbmdFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQgPSBMb2FkaW5nKCk7XG5cbi8vIOaUueWKqERPTeWGheWuuVxuY29uc3QgcmVwbGFjZURPTSA9IChzZWxlY3Rvcjogc3RyaW5nLCBlbGVtZW50PzogUmVhY3QuUmVhY3RFbGVtZW50KTogdm9pZCA9PiB7XG5cdCQoc2VsZWN0b3IpLmh0bWwoZWxlbWVudCA/PyAnJyk7XG59O1xuXG4vLyDliqDlhaXigJxb6L295YWl5LitXeKAneeahOaPkOekulxuY29uc3QgYWRkTG9hZGluZ05vdGljZSA9ICgpOiB2b2lkID0+IHtcblx0YWRkUGFyc2VkV2lraXRleHQobm90aWNlTG9hZGluZ0VsZW1lbnQpO1xufTtcblxuLy8g6L295YWl6ZSZ6K+v55qE5o+Q56S6XG5jb25zdCBsb2FkaW5nRmFpbE5vdGljZSA9ICgpOiB2b2lkID0+IHtcblx0cmVwbGFjZURPTSgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmdfX2NvbnRlbnQnLCBub3RpY2VGYWlsRWxlbWVudCk7XG59O1xuXG4vLyDnp7vpmaTigJxb6L295YWl5LitXeKAneeahOaPkOekulxuY29uc3QgcmVtb3ZlTG9hZGluZ05vdGljZSA9ICgpOiB2b2lkID0+IHtcblx0cmVwbGFjZURPTSgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmcnKTtcbn07XG5cbmV4cG9ydCB7bm90aWNlTG9hZGluZ0VsZW1lbnQsIGFkZExvYWRpbmdOb3RpY2UsIGxvYWRpbmdGYWlsTm90aWNlLCByZW1vdmVMb2FkaW5nTm90aWNlfTtcbiIsICJ7XG5cdFwid2lraVRleHRLZXlcIjogXCJfYWRkVGV4dFwiLFxuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgIi8vIOWQiOW5tuWkmuS4qndpa2l0ZXh05a2X56ym5LiyXG5jb25zdCBsdWFBZGRUZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcsIG5ld1N0cmluZzogc3RyaW5nLCBpc0VzY2FwZTogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nID0+IHtcblx0aWYgKG5ld1N0cmluZykge1xuXHRcdGlmIChpbnB1dFN0cmluZykge1xuXHRcdFx0aW5wdXRTdHJpbmcgKz0gJ1xcbic7XG5cdFx0fVxuXG5cdFx0aWYgKGlzRXNjYXBlKSB7XG5cdFx0XHRjb25zdCBbZXNjYXBlU3RyaW5nXSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdGBbJHtKU09OLnN0cmluZ2lmeShcblx0XHRcdFx0XHQvLyBMdWHkuI3mlK/mjIFcXHXjgIFcXHjovazkuYnlrZfnrKZcblx0XHRcdFx0XHRuZXdTdHJpbmcucmVwbGFjZSgvXFxcXChbdXhdKS9naSwgJyQxJylcblx0XHRcdFx0KS5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpfV1gXG5cdFx0XHQpIGFzIFtzdHJpbmddO1xuXHRcdFx0bmV3U3RyaW5nID0gZXNjYXBlU3RyaW5nO1xuXHRcdH1cblxuXHRcdGlucHV0U3RyaW5nICs9IG5ld1N0cmluZztcblx0fVxuXG5cdHJldHVybiBpbnB1dFN0cmluZztcbn07XG5cbmV4cG9ydCB7bHVhQWRkVGV4dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtsdWFBZGRUZXh0fSBmcm9tICcuL2x1YUFkZFRleHQnO1xuXG4vLyDor7vlj5Z3aWtpdGV4dOWtl+espuS4su+8jOW5tuW/veeVpeazqOmHiuWwvumDqFxuY29uc3QgbHVhR2V0U3RyaW5nID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCB0ZXN0U3RyaW5nRXhlY0FycmF5OiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gL1teXFxuXSpcXCpcXC8vLmV4ZWMoaW5wdXRTdHJpbmcpO1xuXG5cdGxldCB0ZXN0U3RyaW5nOiBzdHJpbmcgPSBpbnB1dFN0cmluZztcblx0aWYgKHRlc3RTdHJpbmdFeGVjQXJyYXkpIHtcblx0XHRbdGVzdFN0cmluZ10gPSB0ZXN0U3RyaW5nRXhlY0FycmF5O1xuXHRcdHRlc3RTdHJpbmcgPSB0ZXN0U3RyaW5nLnNsaWNlKDAsIE1hdGgubWF4KDAsIHRlc3RTdHJpbmcubGVuZ3RoIC0gMikpO1xuXHR9XG5cblx0Y29uc3QgdHJpbUNoZWNrOiBzdHJpbmcgPSB0ZXN0U3RyaW5nLnRyaW0oKTtcblx0Y29uc3QgZmlyc3RDaGFyOiBzdHJpbmcgPSB0cmltQ2hlY2suY2hhckF0KDApO1xuXHRpZiAoZmlyc3RDaGFyID09PSB0cmltQ2hlY2suYXQoLTEpICYmIChmaXJzdENoYXIgPT09IFwiJ1wiIHx8IGZpcnN0Q2hhciA9PT0gJ1wiJykpIHtcblx0XHRyZXR1cm4gdHJpbUNoZWNrLnNsaWNlKDEsIDEgKyB0cmltQ2hlY2subGVuZ3RoIC0gMik7XG5cdH1cblxuXHRyZXR1cm4gdGVzdFN0cmluZy50cmltKCk7XG59O1xuXG4vLyDmjZXojrdDU1PmlofmnKzkuK3nrKblkIhgPHtPUFRJT05TLndpa2lUZXh0S2V5fT4gIHsgY29udGVudO+8mlwiWFhYXCIgfWDmqKHlvI/nmoTlrZfnrKbkuLJcbmNvbnN0IGx1YUdldENvbnRlbnRUZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdHRyeSB7XG5cdFx0aW5wdXRTdHJpbmcucmVwbGFjZShcblx0XHRcdG5ldyBSZWdFeHAoYCR7T1BUSU9OUy53aWtpVGV4dEtleX1cXFxccypcXFxce1teY1xcXFx9XSpjb250ZW50XFxcXHMqOlxcXFxzKlteXFxuXSpgLCAnZycpLFxuXHRcdFx0KHN1YnN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdFx0Y29uc3QgdGVtcFRleHQ6IHN0cmluZyA9ICgvY29udGVudFxccyo6XFxzKlteXFxuXSovLmV4ZWMoc3Vic3RyaW5nKSB8fCBbJ2NvbnRlbnQ6J10pWzBdXG5cdFx0XHRcdFx0LnJlcGxhY2UoL15bXFxzO31dK3xbXFxzO31dKyQvZywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xccypjb250ZW50XFxzKjpcXHMqLywgJycpO1xuXG5cdFx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICdcXG4nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2lraXRleHQgKz0gbHVhR2V0U3RyaW5nKHRlbXBUZXh0KTtcblxuXHRcdFx0XHRyZXR1cm4gc3Vic3RyaW5nO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDmjZXojrflrZfnrKbkuLLljJbnmoTlr7nosaHkuK3nrKblkIhgPHtPUFRJT05TLndpa2lUZXh0S2V5fT7vvJ1YWFhg5oiWYDx7T1BUSU9OUy53aWtpVGV4dEtleX0+77yaWFhYYOaooeW8j+eahOWtl+espuS4siAo5rOo6YeK5Lul5YWo6KeS5a2X56ym5Luj5pu/77yM6YG/5YWN6KKr5o2V6I63KVxuY29uc3QgbHVhR2V0T2JqVGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHR0cnkge1xuXHRcdGlucHV0U3RyaW5nLnJlcGxhY2UoXG5cdFx0XHRuZXcgUmVnRXhwKGAke09QVElPTlMud2lraVRleHRLZXl9XFxcXHMqW1xcXFw9Ol1cXFxccypbXlxcbl0qYCwgJ2cnKSxcblx0XHRcdChzdWJzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdGNvbnN0IHRlbXBUZXh0OiBzdHJpbmcgPSBzdWJzdHJpbmdcblx0XHRcdFx0XHQucmVwbGFjZSgvXltcXHM7fV0rfFtcXHM7fV0rJC9nLCAnJylcblx0XHRcdFx0XHQucmVwbGFjZShuZXcgUmVnRXhwKGAke09QVElPTlMud2lraVRleHRLZXl9XFxcXHMqW1xcXFw9Ol1cXFxccypgKSwgJycpO1xuXG5cdFx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICdcXG4nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2lraXRleHQgKz0gbHVhR2V0U3RyaW5nKHRlbXBUZXh0KTtcblxuXHRcdFx0XHRyZXR1cm4gc3Vic3RyaW5nO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDliIbmnpBDU1PkuK3nrKblkIjmnaHku7bnmoR3aWtpdGV4dFxuY29uc3QgbHVhR2V0Q1NTd2lraXRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgY3NzVGV4dDogc3RyaW5nID1cblx0XHQoaW5wdXRTdHJpbmcgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVGV4dEFyZWFFbGVtZW50PigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpPy52YWx1ZSkgPz8gJyc7XG5cdGlmICghY3NzVGV4dC50cmltKCkpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHQvLyDljLnphY0gPHtPUFRJT05TLndpa2lUZXh0S2V5fT4geyBjb250ZW5077yaXCJYWFhcIiB9IOaooeW8j1xuXHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIGx1YUdldENvbnRlbnRUZXh0KGNzc1RleHQpLCB0cnVlKTtcblx0Ly8g5Yy56YWNIC8qIDx7T1BUSU9OUy53aWtpVGV4dEtleX0+77yaWFhYICovIOaooeW8j1xuXHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIGx1YUdldE9ialRleHQoY3NzVGV4dCksIHRydWUpO1xuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDliIbmnpBKU09O5Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldEpTT053aWtpdGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCBKU09OVGV4dDogc3RyaW5nID1cblx0XHQoaW5wdXRTdHJpbmcgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVGV4dEFyZWFFbGVtZW50PigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpPy52YWx1ZSkgPz8gJyc7XG5cdGlmICghSlNPTlRleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoSlNPTlRleHQpIGFzIG9iamVjdDtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhqc29uRGF0YSkpIHtcblx0XHRcdGlmIChuZXcgUmVnRXhwKE9QVElPTlMud2lraVRleHRLZXkpLnRlc3Qoa2V5KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgdmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyDoi6XplK7lgLzmmK/lr7nosaFcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlIGFzIG9iamVjdCkpIHtcblx0XHRcdFx0XHRpZiAobmV3IFJlZ0V4cChPUFRJT05TLndpa2lUZXh0S2V5KS50ZXN0KGspICYmIHR5cGVvZiB2ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCB2KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDliIbmnpBKYXZhU2NyaXB05Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldEpTd2lraXRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QganNUZXh0OiBzdHJpbmcgPVxuXHRcdChpbnB1dFN0cmluZyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJyk/LnZhbHVlKSA/PyAnJztcblx0aWYgKCFqc1RleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCBsdWFHZXRPYmpUZXh0KGpzVGV4dCksIHRydWUpO1xuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG5leHBvcnQge2x1YUdldENTU3dpa2l0ZXh0LCBsdWFHZXRKU09Od2lraXRleHQsIGx1YUdldEpTd2lraXRleHR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgU3BlY2lhbFdpa2l0ZXh0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiY29uc3Qge3dnVXNlckxhbmd1YWdlLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgZ2V0TGFuZ3VhZ2UgPSAoKTogc3RyaW5nID0+IHtcblx0Y29uc3QgbGFuZzogc3RyaW5nID0gd2dVc2VyTGFuZ3VhZ2U7XG5cblx0aWYgKGxhbmcuaW5jbHVkZXMoJ3poJykpIHtcblx0XHRyZXR1cm4gd2dVc2VyVmFyaWFudCBhcyBzdHJpbmc7XG5cdH1cblxuXHRyZXR1cm4gbGFuZztcbn07XG5cbmV4cG9ydCB7Z2V0TGFuZ3VhZ2V9O1xuIiwgImltcG9ydCB7bG9hZGluZ0ZhaWxOb3RpY2UsIHJlbW92ZUxvYWRpbmdOb3RpY2V9IGZyb20gJy4uL25vdGljZSc7XG5pbXBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fSBmcm9tICcuLi91dGlsL2FkZFBhcnNlZFdpa2l0ZXh0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSAnLi4vdXRpbC9nZXRMYW5ndWFnZSc7XG5cbmNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5Yqg5YWl6aKE6KeI5YaF5a65XG5jb25zdCBtd0FkZFdpa2lUZXh0ID0gYXN5bmMgKHdpa2l0ZXh0OiBzdHJpbmcsIHBhZ2VOYW1lOiBzdHJpbmcsIGlzUHJldmlldzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRpZiAod2lraXRleHQudHJpbSgpKSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0Ly8g6YG/5YWN5YaF5a656YeN5aSNXG5cdFx0XHR0aXRsZTogcGFnZU5hbWUsXG5cdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHR1c2Vza2luOiBza2luLFxuXHRcdH07XG5cdFx0aWYgKGlzUHJldmlldykge1xuXHRcdFx0cGFyYW1zLmRpc2FibGVlZGl0c2VjdGlvbiA9IHRydWU7XG5cdFx0XHRwYXJhbXMucHJldmlldyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8udGV4dCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcgPSAoZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZykudHJpbSgpO1xuXG5cdFx0XHRpZiAocGFyc2VkV2lraXRleHQpIHtcblx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQocGFyc2VkV2lraXRleHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9hZGluZ0ZhaWxOb3RpY2UoKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHR9XG59O1xuXG4vLyDliqDlhaXpooTop4jnmoRMdWHlhoXlrrlcbmNvbnN0IG13QWRkTHVhVGV4dCA9IGFzeW5jIChcblx0d2lraXRleHQ6IHN0cmluZyxcblx0cGFnZU5hbWU6IHN0cmluZyxcblx0aXNQcmV2aWV3OiBib29sZWFuLFxuXHRjYWxsQmFjaz86IChhcmc6IHN0cmluZykgPT4gSlF1ZXJ5IHwgSFRNTEVsZW1lbnQgfCB2b2lkXG4pID0+IHtcblx0Y29uc3QgdGVtcE1vZHVsZU5hbWU6IHN0cmluZyA9ICdBZGRUZXh0L1RlbXAvTW9kdWxlL0RhdGEubHVhJztcblx0Y29uc3QgbW9kdWxlQ2FsbDoge1xuXHRcdHdpa2l0ZXh0OiBzdHJpbmc7XG5cdFx0cGFnZU5hbWU6IHN0cmluZztcblx0fSA9IHtcblx0XHR3aWtpdGV4dDogJyNpbnZva2U6Jyxcblx0XHQvLyDliIblvIDmnaXvvIzpgb/lhY3ooqvliIbliLBbWzpDYXRlZ29yeTrmnInohJrmnKzplJnor6/nmoTpobXpnaJdXVxuXHRcdHBhZ2VOYW1lOiAnTW9kdWxlOicsXG5cdH07XG5cblx0aWYgKHdpa2l0ZXh0LnRyaW0oKSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlOiBwYWdlTmFtZSxcblx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3h0aXRsZTogbW9kdWxlQ2FsbC5wYWdlTmFtZSArIHRlbXBNb2R1bGVOYW1lLFxuXHRcdFx0XHQvLyDliJvlu7rkuLTml7ZMdWEgTW9kdWxlXG5cdFx0XHRcdHRlbXBsYXRlc2FuZGJveHRleHQ6IGByZXR1cm4ge1xuXHRtYWluID0gZnVuY3Rpb24oKVxuXHRcdHhwY2FsbChcblx0XHRcdGZ1bmN0aW9uKClcblx0XHRcdFx0JHt3aWtpdGV4dH1cblx0XHRcdGVuZCxcblx0XHRcdGZ1bmN0aW9uKClcblx0XHRcdGVuZFxuXHRcdClcblx0XHRsb2NhbCBtb2R1bGVXaWtpdGV4dCA9IHBhY2thZ2UubG9hZGVkW1wiTW9kdWxlOk1vZHVsZSB3aWtpdGV4dFwiXVxuXHRcdGlmIG1vZHVsZVdpa2l0ZXh0IHRoZW5cblx0XHRcdGxvY2FsIHdpa2l0ZXh0ID0gbW9kdWxlV2lraXRleHQubWFpbigpXG5cdFx0XHRpZiBtdy50ZXh0LnRyaW0od2lraXRleHQpIH49IFwiXCIgdGhlblxuXHRcdFx0XHRyZXR1cm4gbXcuZ2V0Q3VycmVudEZyYW1lKCk6cHJlcHJvY2Vzcyhtb2R1bGVXaWtpdGV4dC5tYWluKCkpXG5cdFx0XHRlbmRcblx0XHRlbmRcblx0XHRyZXR1cm4gXCJcIlxuXHRlbmRcbn1gLFxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3hjb250ZW50bW9kZWw6ICdTY3JpYnVudG8nLFxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3hjb250ZW50Zm9ybWF0OiAndGV4dC9wbGFpbicsXG5cdFx0XHRcdHRleHQ6IGB7eyR7bW9kdWxlQ2FsbC53aWtpdGV4dH0ke3RlbXBNb2R1bGVOYW1lfXxtYWlufX1gLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHRcdHVzZXNraW46IHNraW4sXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGlzUHJldmlldykge1xuXHRcdFx0XHRwYXJhbXMucHJldmlldyA9IHRydWU7XG5cdFx0XHRcdHBhcmFtcy5kaXNhYmxlZWRpdHNlY3Rpb24gPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJzZWRXaWtpdGV4dDogc3RyaW5nID0gKGRhdGFbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmcpLnRyaW0oKTtcblxuXHRcdFx0aWYgKCFwYXJzZWRXaWtpdGV4dCkge1xuXHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHRcdC8vIOiLpeWcqOi/meS4quS4tOaXtuaooeWdl+S4reWHuumUmeWImeWPlua2iFxuXHRcdFx0fSBlbHNlIGlmICgkKHBhcnNlZFdpa2l0ZXh0KS5maW5kKCcuc2NyaWJ1bnRvLWVycm9yJykudGV4dCgpLnNlYXJjaCh0ZW1wTW9kdWxlTmFtZSkpIHtcblx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY2FsbEJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2FsbEJhY2socGFyc2VkV2lraXRleHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQocGFyc2VkV2lraXRleHQpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9hZGluZ0ZhaWxOb3RpY2UoKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHR9XG59O1xuXG5leHBvcnQge213QWRkTHVhVGV4dCwgbXdBZGRXaWtpVGV4dH07XG4iLCAiaW1wb3J0IHtsdWFHZXRDU1N3aWtpdGV4dCwgbHVhR2V0SlNPTndpa2l0ZXh0LCBsdWFHZXRKU3dpa2l0ZXh0fSBmcm9tICcuL2x1YUdldFRleHQnO1xuXG5jb25zdCB7d2dQYWdlQ29udGVudE1vZGVsfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5Yik5pat5piv5ZCm5Li6THVhXG5jb25zdCBsdWFDaGVjayA9IChpbnB1dFN0cmluZzogc3RyaW5nID0gJycsIGNvbnRlbnRNb2RlbDogc3RyaW5nID0gd2dQYWdlQ29udGVudE1vZGVsKTogc3RyaW5nID0+IHtcblx0Ly8g5qC55o2u6aG16Z2i5YaF5a655qih5Z6L6YCJ55So6YCC5b2T55qE6Kej5p6Q5qih5byPXG5cdHN3aXRjaCAoY29udGVudE1vZGVsLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRjYXNlICdqc29uJzpcblx0XHRcdHJldHVybiBsdWFHZXRKU09Od2lraXRleHQoaW5wdXRTdHJpbmcpO1xuXHRcdGNhc2UgJ2pzJzpcblx0XHRjYXNlICdqYXZhc2NyaXB0Jzpcblx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdHJldHVybiBsdWFHZXRKU3dpa2l0ZXh0KGlucHV0U3RyaW5nKTtcblx0XHRjYXNlICdjc3MnOlxuXHRcdGNhc2UgJ3Nhbml0aXplZC1jc3MnOlxuXHRcdFx0cmV0dXJuIGx1YUdldENTU3dpa2l0ZXh0KGlucHV0U3RyaW5nKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICcnO1xuXHR9XG59O1xuXG5leHBvcnQge2x1YUNoZWNrfTtcbiIsICJpbXBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fSBmcm9tICcuLi91dGlsL2FkZFBhcnNlZFdpa2l0ZXh0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtjaGVja0VsZW1lbnRFeGlzdH0gZnJvbSAnLi4vdXRpbC9jaGVja0VsZW1lbnRFeGlzdCc7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tICcuLi91dGlsL2dldExhbmd1YWdlJztcbmltcG9ydCB7bHVhQ2hlY2t9IGZyb20gJy4uL2x1YS9sdWFDaGVjayc7XG5pbXBvcnQge213QWRkV2lraVRleHR9IGZyb20gJy4vbXdBZGRUZXh0JztcbmltcG9ydCB7cmVtb3ZlTG9hZGluZ05vdGljZX0gZnJvbSAnLi4vbm90aWNlJztcblxuY29uc3Qge3NraW4sIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOWKoOWFpee8lui+keaPkOekuu+8iOiLpeWtmOWcqO+8iVxuY29uc3QgbXdBcHBseU5vdGljZSA9IGFzeW5jIChjdXJyZW50UGFnZU5hbWU6IHN0cmluZywgcGFnZVN1Yk5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdC8vIGdldCB0aGUgb3JpZ2luYWwgd2lraXRleHQgY29udGVudCBvZiBhIHBhZ2Vcblx0XHRcdHRpdGxlOiBjdXJyZW50UGFnZU5hbWUgKyBwYWdlU3ViTmFtZSxcblx0XHRcdHRleHQ6IGB7eyNpbnZva2U6U3BlY2lhbCB3aWtpdGV4dC9UZW1wbGF0ZXxnZXROb3RpY2VzfCR7Y3VycmVudFBhZ2VOYW1lfXwke3BhZ2VTdWJOYW1lfX19YCxcblx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHR1c2Vza2luOiBza2luLFxuXHRcdH07XG5cblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdGlmICghZGF0YT8uWydwYXJzZSddPy50ZXh0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaHRtbCA9IGRhdGFbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmc7XG5cdFx0aWYgKCQoaHRtbCkudGV4dCgpLnRyaW0oKSkge1xuXHRcdFx0YWRkUGFyc2VkV2lraXRleHQoaHRtbCk7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG59O1xuXG4vLyDku47pobXpnaLlvZPliY3ljoblj7LniYjmnKzlj5blh7ogPHtPUFRJT05TLndpa2lUZXh0S2V5fT5cbmNvbnN0IG13QXBwbHlSZXZpc2lvbiA9IGFzeW5jIChjdXJyZW50UGFnZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdC8vIGdldCB0aGUgb3JpZ2luYWwgd2lraXRleHQgY29udGVudCBvZiBhIHBhZ2Vcblx0XHRcdG9sZGlkOiB3Z1JldmlzaW9uSWQsXG5cdFx0XHRwcm9wOiAnd2lraXRleHQnLFxuXHRcdH07XG5cblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdGlmICghZGF0YT8uWydwYXJzZSddPy53aWtpdGV4dCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBwYWdlQ29udGVudDogc3RyaW5nID0gbHVhQ2hlY2soKGRhdGFbJ3BhcnNlJ10ud2lraXRleHQgYXMgc3RyaW5nKS50cmltKCkpO1xuXHRcdHBhZ2VDb250ZW50ID1cblx0XHRcdChjaGVja0VsZW1lbnRFeGlzdCgnI213LWNsZWFyeW91cmNhY2hlJylcblx0XHRcdFx0PyAne3sjaW52b2tlOlNwZWNpYWwgd2lraXRleHQvVGVtcGxhdGV8aW50fGNsZWFyeW91cmNhY2hlfX0nXG5cdFx0XHRcdDogJycpICsgcGFnZUNvbnRlbnQ7XG5cblx0XHRpZiAocGFnZUNvbnRlbnQudHJpbSgpKSB7XG5cdFx0XHR2b2lkIG13QWRkV2lraVRleHQocGFnZUNvbnRlbnQsIGN1cnJlbnRQYWdlTmFtZSwgdHJ1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0fVxufTtcblxuZXhwb3J0IHttd0FwcGx5Tm90aWNlLCBtd0FwcGx5UmV2aXNpb259O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYWxsTXdDb25maWc6IE1lZGlhV2lraUNvbmZpZ01hcCA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5qOA5p+lTWVkaWFXaWtp55qE6K6+572uXG5jb25zdCBjaGVja013Q29uZmlnID0gKGNvbmZpZ0tleTogc3RyaW5nLCBleHBlY3RDb25maWc6IHN0cmluZyB8IHN0cmluZ1tdKTogYm9vbGVhbiA9PiB7XG5cdGxldCBtd0NvbmZpZzogdW5rbm93biA9IGFsbE13Q29uZmlnW2NvbmZpZ0tleV07XG5cdGlmICghbXdDb25maWcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRtd0NvbmZpZyA9IFN0cmluZyhtd0NvbmZpZykudG9Mb3dlckNhc2UoKS50cmltKCk7XG5cdGlmICghbXdDb25maWcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gZ2VuZXJhdGVBcnJheShleHBlY3RDb25maWcpLmluY2x1ZGVzKG13Q29uZmlnIGFzIHN0cmluZyk7XG59O1xuXG5leHBvcnQge2NoZWNrTXdDb25maWd9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcblxuLy8g5qOA5p+l5piv5ZCm5pyJ6aKE6KeI55qE5b+F6KaB5oCnXG5jb25zdCBjaGVja05lZWRQcmV2aWV3ID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gZG9jdW1lbnQuYm9keS5pbm5lckhUTUwuc2VhcmNoKE9QVElPTlMud2lraVRleHRLZXkpID4gLTE7XG59O1xuXG5leHBvcnQge2NoZWNrTmVlZFByZXZpZXd9O1xuIiwgImltcG9ydCB7YWRkTG9hZGluZ05vdGljZSwgbm90aWNlTG9hZGluZ0VsZW1lbnQsIHJlbW92ZUxvYWRpbmdOb3RpY2V9IGZyb20gJy4uL25vdGljZSc7XG5pbXBvcnQge2x1YUdldENTU3dpa2l0ZXh0LCBsdWFHZXRKU09Od2lraXRleHR9IGZyb20gJy4uL2x1YS9sdWFHZXRUZXh0JztcbmltcG9ydCB7bXdBZGRMdWFUZXh0LCBtd0FkZFdpa2lUZXh0fSBmcm9tICcuL213QWRkVGV4dCc7XG5pbXBvcnQge213QXBwbHlOb3RpY2UsIG13QXBwbHlSZXZpc2lvbn0gZnJvbSAnLi9td0FwcGx5JztcbmltcG9ydCB7Y2hlY2tFbGVtZW50RXhpc3R9IGZyb20gJy4uL3V0aWwvY2hlY2tFbGVtZW50RXhpc3QnO1xuaW1wb3J0IHtjaGVja013Q29uZmlnfSBmcm9tICcuLi91dGlsL2NoZWNrTXdDb25maWcnO1xuaW1wb3J0IHtjaGVja05lZWRQcmV2aWV3fSBmcm9tICcuLi91dGlsL2NoZWNrTmVlZFByZXZpZXcnO1xuaW1wb3J0IHtsdWFDaGVja30gZnJvbSAnLi4vbHVhL2x1YUNoZWNrJztcblxuY29uc3Qge3dnQ2Fub25pY2FsTmFtZXNwYWNlLCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOe7memhtemdoua3u+WKoOmihOiniFxuY29uc3QgbXdBZGRQcmV2aWV3ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvLyDpooTop4jmqKHlvI/lj6rpgILnlKjkuo7ku6XkuIvpobXpnaLlhoXlrrnmqKHlnotcblx0aWYgKGNoZWNrTXdDb25maWcoJ3dnUGFnZUNvbnRlbnRNb2RlbCcsIFsnamF2YXNjcmlwdCcsICdqcycsICdqc29uJywgJ3RleHQnLCAnY3NzJywgJ3Nhbml0aXplZC1jc3MnXSkpIHtcblx0XHQvLyDmqKHlvI8x77ya6aG16Z2i6aKE6KeIXG5cdFx0aWYgKGNoZWNrRWxlbWVudEV4aXN0KCcucHJldmlld25vdGUnKSkge1xuXHRcdFx0Ly8g5qOA5p+l5piv5ZCm5Li66aKE6KeI5qih5byPXG5cdFx0XHQvLyDpooTop4jmnInlj6/og73mmK/lnKjpooTop4jlhbbku5bmnaHnm65cblx0XHRcdGNvbnN0IHBhdGhQYXRoOiBzdHJpbmcgPSBkZWNvZGVVUkkobXcudXRpbC5nZXRVcmwod2dQYWdlTmFtZSkpLnJlcGxhY2UoXG5cdFx0XHRcdG5ldyBSZWdFeHAoYF5cXFxcLz8ke213LnV0aWwuZ2V0VXJsKCcnKS5tYXRjaCgvW2Etel0rLyk/LlswXSA/PyAnJ31cXFxcL2ApLFxuXHRcdFx0XHQnJ1xuXHRcdFx0KTtcblxuXHRcdFx0Ly8g6Iul6aKE6KeI55qE6aG16Z2i5bm26Z2e5pys6Lqr77yM5YiZ5LiN5pi+56S66aKE6KeIXG5cdFx0XHRpZiAocGF0aFBhdGggIT09IHdnUGFnZU5hbWUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB3aWtpdGV4dDogc3RyaW5nID0gbHVhQ2hlY2soKTtcblx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHQvLyDoi6Xop6PmnpDnu5PmnpzpnZ7nqbrmiY3mlL7nva7pooTop4hcblx0XHRcdFx0YWRkTG9hZGluZ05vdGljZSgpOyAvLyDmlL7nva7mj5DnpLrvvIzmj5DnpLrkvb/nlKjogIXnrYnlvoVBSkFYXG5cdFx0XHRcdHZvaWQgbXdBZGRXaWtpVGV4dCh3aWtpdGV4dCwgd2dQYWdlTmFtZSwgdHJ1ZSk7IC8vIOiLpeWPluW+lyBfYWRkVGV4dCDliJnmmL7npLrpooTop4hcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCFjaGVja0VsZW1lbnRFeGlzdCgnLm13LV9hZGRUZXh0LWNvbnRlbnQnKSAmJiBjaGVja013Q29uZmlnKCd3Z0FjdGlvbicsICd2aWV3JykpIHtcblx0XHRcdC8vIOaooeW8jzLvvJrkuI3mlK/mjIHmmL7npLrnmoTnibnmrorpobXpnaJcblx0XHRcdC8vIOe7j+afpe+8jOS4jeatouaYr+aooeadv+agt+W8j++8jOaJgOacieacquW1jOWFpScjbXctY2xlYXJ5b3VyY2FjaGUn55qE6aG16Z2i55qG5peg5rOV5q2j5bi45pi+56S6XG5cdFx0XHRpZiAoIWNoZWNrTmVlZFByZXZpZXcoKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIOayoeaciemihOiniOW/heimgeaXtu+8jOebtOaOpeWBnOatoueoi+W6j++8jOS4jee7p+e7reWIpOaWre+8jOS7peaPkOmrmOaViOeOh1xuXHRcdFx0fVxuXG5cdFx0XHQvLyDoi6Xlt7LmnIkjbXctY2xlYXJ5b3VyY2FjaGXliJnlhYjmuIXmjonvvIzlkKbliJnkvJrlh7rnjrDkuKTkuKpNZWRpYVdpa2k6Q2xlYXJ5b3VyY2FjaGVcblx0XHRcdCRib2R5LmZpbmQoJyNtdy1jbGVhcnlvdXJjYWNoZScpLmh0bWwoJycpO1xuXG5cdFx0XHRpZiAoIWNoZWNrRWxlbWVudEV4aXN0KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykpIHtcblx0XHRcdFx0Ly8g6Z2e57yW6L6R5qih5byP5omN5omn6KGMICjpooTop4jkvb/nlKjkuIrmlrnnmoRpZuWMuuWdlylcblx0XHRcdFx0YWRkTG9hZGluZ05vdGljZSgpOyAvLyDmlL7nva7mj5DnpLrvvIzmj5DnpLrkvb/nlKjogIXnrYnlvoVBSkFYXG5cdFx0XHRcdHZvaWQgbXdBcHBseVJldmlzaW9uKHdnUGFnZU5hbWUpOyAvLyDkuLrkuoborqnljoblj7LniYjmnKzmraPluLjmmL7npLrvvIzkvb/nlKh3Z1JldmlzaW9uSWTlj5blvpflhoXlrrlcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcjbXctcmV2aXNpb24taW5mbycpICYmIGNoZWNrTXdDb25maWcoJ3dnQWN0aW9uJywgJ3ZpZXcnKSkge1xuXHRcdFx0Ly8g5qih5byPM++8mumhtemdouWOhuWPsueJiOacrOajgOinhu+8muWmgumcgOWkjeafpeeahOmhueebruS4uumhtemdouWOhuWPsueJiOacrO+8jOacrOW3peWFt+aPkOS+m+mhtemdouWOhuWPsueJiOacrOWGheWuueaYvuekuuaUr+aMgVxuXHRcdFx0Ly8g5pyJ5bWM5YWlJyNtdy1jbGVhcnlvdXJjYWNoZSfnmoTpobXpnaLnmoTljoblj7LniYjmnKzkvJrlj6rog73mmL7npLrmnIDmlrDniYjnmoQgX2FkZFRleHQg5Zug5q2k5omn6KGM5L+u5q2jXG5cdFx0XHRpZiAoIWNoZWNrRWxlbWVudEV4aXN0KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykpIHtcblx0XHRcdFx0Ly8g6Z2e57yW6L6R5qih5byP5omN5omn6KGMICjpooTop4jkvb/nlKjkuIrmlrnnmoRpZuWMuuWdlylcblx0XHRcdFx0JGJvZHkuZmluZCgnI213LWNsZWFyeW91cmNhY2hlJykuaHRtbChub3RpY2VMb2FkaW5nRWxlbWVudCk7IC8vIOW3ruW8guaooeW8j++8iOWQq+ajgOmYheS/ruiuoueJiOacrOWIoOmZpO+8ieeahOaPkuWFpeeCueS4jeWQjFxuXHRcdFx0XHR2b2lkIG13QXBwbHlSZXZpc2lvbih3Z1BhZ2VOYW1lKTsgLy8g5Li65LqG6K6p54m55a6a54mI5pys5q2j5bi45pi+56S677yM5L2/55Sod2dSZXZpc2lvbklk5Y+W5b6X5YaF5a65XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoY2hlY2tNd0NvbmZpZygnd2dQYWdlQ29udGVudE1vZGVsJywgWydzY3JpYnVudG8nLCAnbHVhJ10pKSB7XG5cdFx0Ly8g5qih5Z2X6aKE6KeI5Yqf6IO9XG5cdFx0aWYgKCFjaGVja05lZWRQcmV2aWV3KCkpIHtcblx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0fVxuXG5cdFx0aWYgKFxuXHRcdFx0Y2hlY2tFbGVtZW50RXhpc3QoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKSAmJlxuXHRcdFx0Y2hlY2tFbGVtZW50RXhpc3QoJ3RhYmxlLmRpZmYnKSAmJlxuXHRcdFx0IWNoZWNrRWxlbWVudEV4aXN0KCcucHJldmlld25vdGUnKSAmJlxuXHRcdFx0IWNoZWNrTXdDb25maWcoJ3dnQWN0aW9uJywgJ3ZpZXcnKVxuXHRcdCkge1xuXHRcdFx0JChub3RpY2VMb2FkaW5nRWxlbWVudCkuaW5zZXJ0QWZ0ZXIoJyN3aWtpRGlmZicpO1xuXHRcdFx0dm9pZCBtd0FkZEx1YVRleHQoXG5cdFx0XHRcdCgkYm9keS5maW5kKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykudmFsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJyxcblx0XHRcdFx0d2dQYWdlTmFtZSxcblx0XHRcdFx0dHJ1ZVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5tdy11bmRlbGV0ZS1yZXZpc2lvbicpKSB7XG5cdFx0Ly8g5qih5byPNO+8muW3suWIoOmhtemdoumihOiniFxuXHRcdC8vIOW3suWIoOWGheWuuemhtemdouaYr+eJueauiumhtemdou+8jOaXoOazleeUqOW4uOinhOaWueW8j+WIpOaWremhtemdouWGheWuueaooeWei1xuXHRcdGlmICghY2hlY2tOZWVkUHJldmlldygpKSB7XG5cdFx0XHRyZXR1cm47IC8vIOayoeaciemihOiniOW/heimgeaXtu+8jOebtOaOpeWBnOatoueoi+W6j++8jOS4jee7p+e7reWIpOaWre+8jOS7peaPkOmrmOaViOeOh1xuXHRcdH1cblxuXHRcdGlmIChjaGVja0VsZW1lbnRFeGlzdChbJy5tdy1oaWdobGlnaHQnLCAncHJlJywgJy5tdy1qc29uJ10pKSB7XG5cdFx0XHQvLyDnoa7orqTmraPlnKjpooTop4jlt7LliKDlhoXlrrlcblx0XHRcdGNvbnN0IHRleHRhcmVhQ29udGVudDogc3RyaW5nID0gJGJvZHkuZmluZCgndGV4dGFyZWEnKS52YWwoKSA/PyAnJzsgLy8g5bCd6K+V5Y+W5b6X5bey5Yig5YaF5a655rqQ5Luj56CBXG5cblx0XHRcdGxldCB3aWtpdGV4dDogc3RyaW5nID0gbHVhR2V0SlNPTndpa2l0ZXh0KHRleHRhcmVhQ29udGVudCk7XG5cdFx0XHRpZiAoIXdpa2l0ZXh0KSB7XG5cdFx0XHRcdHdpa2l0ZXh0ID0gbHVhR2V0Q1NTd2lraXRleHQodGV4dGFyZWFDb250ZW50KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHdpa2l0ZXh0KSB7XG5cdFx0XHRcdC8vIOiLpeWPluW+lyBfYWRkVGV4dCDliJnmmL7npLrpooTop4hcblx0XHRcdFx0YWRkTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0XHR2b2lkIG13QWRkV2lraVRleHQod2lraXRleHQsIG13LmNvbmZpZy5nZXQoJ3dnUmVsZXZhbnRQYWdlTmFtZScpLCB0cnVlKTtcblx0XHRcdH0gZWxzZSBpZiAoL21vZHVsZVsgX113aWtpdGV4dC4qX2FkZHRleHQvaS50ZXN0KCRib2R5LmZpbmQoJy5tdy1wYXJzZXItb3V0cHV0JykudGV4dCgpKSkge1xuXHRcdFx0XHQvLyDlsJ3or5VMdWHop6PmnpBcblx0XHRcdFx0Ly8g5pys5Yqf6IO955uu5YmN5rWL6K+V5q2j5bi46L+Q5L2cXG5cdFx0XHRcdC8vIOiLpeWTquWkqemihOiniOWPiOWkseaViO+8jOivt+WPlua2iOazqOmHiuS4i+aWuemCo+ihjFxuXHRcdFx0XHQvLyBtd0FkZEx1YVRleHQodGV4dGFyZWFDb250ZW50LCBtdy5jb25maWcuZ2V0KFwid2dSZWxldmFudFBhZ2VOYW1lXCIpLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSBpZiAoIWNoZWNrRWxlbWVudEV4aXN0KCcubXctZWRpdG5vdGljZScpICYmIGNoZWNrTXdDb25maWcoJ3dnQ2Fub25pY2FsTmFtZXNwYWNlJywgJ3NwZWNpYWwnKSkge1xuXHRcdC8vIOiLpeeJueauiumhtemdoue8uuS5j+e8lui+keaPkOekuu+8jOWImeihpeS4iue8lui+keaPkOekuiAo6Iul5a2Y5ZyoKVxuXHRcdGNvbnN0IHBhZ2VTdWJOYW1lOiBzdHJpbmcgPSB3Z1BhZ2VOYW1lLnJlcGxhY2UoL3NwZWNpYWw6W14vXSsvaSwgJycpO1xuXHRcdGlmICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSkge1xuXHRcdFx0Y29uc3QgZnVsbFBhZ2VOYW1lOiBzdHJpbmcgPSBgJHt3Z0Nhbm9uaWNhbE5hbWVzcGFjZX06JHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX1gO1xuXHRcdFx0dm9pZCBtd0FwcGx5Tm90aWNlKGZ1bGxQYWdlTmFtZSwgcGFnZVN1Yk5hbWUpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7IC8vIOmDveS4jeaYr+eahOaDheWGteWImeS4jeaYvuekuumihOiniFxuXHR9XG59O1xuXG5leHBvcnQge213QWRkUHJldmlld307XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Y2hlY2tOZWVkUHJldmlld30gZnJvbSAnLi91dGlsL2NoZWNrTmVlZFByZXZpZXcnO1xuaW1wb3J0IHtsdWFDaGVja30gZnJvbSAnLi9sdWEvbHVhQ2hlY2snO1xuaW1wb3J0IHttd0FkZEx1YVRleHR9IGZyb20gJy4vbXcvbXdBZGRUZXh0JztcbmltcG9ydCB7bm90aWNlTG9hZGluZ0VsZW1lbnR9IGZyb20gJy4vbm90aWNlJztcblxuY29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyDmnKzohJrmnKznmoRUZXN0Y2FzZVxuY29uc3Qgd2lraXRleHRQcmV2aWV3VGVzdGNhc2UgPSBhc3luYyAoaXNQcmV2aWV3OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdC8vIOayoeacieWPr+mihOiniOWFg+e0oO+8jOmAgOWHuuOAglxuXHRpZiAoIWNoZWNrTmVlZFByZXZpZXcoKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRlc3RjYXNlTGlzdDogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50Pihcblx0XHQnLnNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZSdcblx0KTtcblx0Ly8g6Iul6aG16Z2i5Lit5rKh5pyJVGVzdGNhc2XvvIzpgIDlh7rjgIJcblx0aWYgKCF0ZXN0Y2FzZUxpc3QubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8g5pS26ZuG5L2N5LqO6aG16Z2i5Lit55qEVGVzdGNhc2XpooTop4jlhYPntKBcblx0Y29uc3QgdGVzdGNhc2VEYXRhTGlzdDoge1xuXHRcdGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRcdGxhbmc6IHN0cmluZztcblx0XHRjb2RlOiBzdHJpbmc7XG5cdH1bXSA9IFtdO1xuXG5cdGxldCBpOiBudW1iZXIgPSAwO1xuXHRmb3IgKGkgPSAwOyBpIDwgdGVzdGNhc2VMaXN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQgPSB0ZXN0Y2FzZUxpc3RbaV07XG5cdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBjb2RlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLm13LWhpZ2hsaWdodCcpO1xuXHRcdGlmICghY29kZUVsZW1lbnQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHtjbGFzc05hbWV9ID0gY29kZUVsZW1lbnQ7XG5cdFx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IFssIGNvZGVJZF0gPSAvbXctaGlnaGxpZ2h0LWxhbmctKFxcUyspLy5leGVjKGNsYXNzTmFtZSkgPz8gW107XG5cdFx0Y29uc3Qge2xlbmd0aH0gPSB0ZXN0Y2FzZURhdGFMaXN0O1xuXG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ByZXZpZXctaWQnLCBsZW5ndGgudG9TdHJpbmcoKSk7XG5cdFx0dGVzdGNhc2VEYXRhTGlzdFtsZW5ndGhdID0ge1xuXHRcdFx0ZWxlbWVudCxcblx0XHRcdGxhbmc6IGNvZGVJZD8udG9Mb3dlckNhc2UoKSA/PyAnJyxcblx0XHRcdGNvZGU6IGNvZGVFbGVtZW50LnRleHRDb250ZW50Py50cmltKCkgPz8gJycsXG5cdFx0fTsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHQvLyDmlbTnkIbpobXpnaLkuK3nmoRUZXN0Y2FzZemihOiniOWFg+e0oO+8jOW5tuaUvue9ruKAnFvovb3lhaXkuK1d4oCd5raI5oGvXG5cdGxldCBwYWNrYWdlV2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXHRmb3IgKGNvbnN0IHRlc3RjYXNlSXRlbSBvZiBPYmplY3QudmFsdWVzKHRlc3RjYXNlRGF0YUxpc3QpKSB7XG5cdFx0Y29uc3Qge2NvZGUsIGVsZW1lbnQsIGxhbmd9ID0gdGVzdGNhc2VJdGVtO1xuXG5cdFx0aWYgKCFjb2RlKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblxuXHRcdGlmIChbJ2phdmFzY3JpcHQnLCAnanMnLCAnY3NzJywgJ2pzb24nLCAndGV4dCddLmluY2x1ZGVzKHRlc3RjYXNlSXRlbS5sYW5nKSkge1xuXHRcdFx0Y29uc3Qgd2lraXRleHQ6IHN0cmluZyA9IGx1YUNoZWNrKGNvZGUsIGxhbmcpO1xuXHRcdFx0aWYgKHdpa2l0ZXh0KSB7XG5cdFx0XHRcdC8vIOiLpeino+aekOe7k+aenOmdnuepuuaJjeaUvue9rumihOiniFxuXHRcdFx0XHQkZWxlbWVudC5wcmVwZW5kKG5vdGljZUxvYWRpbmdFbGVtZW50KTtcblx0XHRcdFx0cGFja2FnZVdpa2l0ZXh0ICs9IGA8ZGl2IGNsYXNzPVwic3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLSR7aX1cIj5cXG4ke3dpa2l0ZXh0fVxcbjwvZGl2PmA7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChbJ2x1YScsICdzY3JpYnVudG8nXS5pbmNsdWRlcyhsYW5nKSkge1xuXHRcdFx0dm9pZCBtd0FkZEx1YVRleHQoXG5cdFx0XHRcdGNvZGUsXG5cdFx0XHRcdHdnUGFnZU5hbWUsXG5cdFx0XHRcdGlzUHJldmlldyxcblx0XHRcdFx0KCgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKHdpa2l0ZXh0OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdCRlbGVtZW50LnByZXBlbmQod2lraXRleHQpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0pKClcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8g5bCG5pW055CG5a6M55qEVGVzdGNhc2XpooTop4jlhYPntKDnu5/kuIDlj5HpgIFBUEnor7fmsYLvvIzlubblsIbov5Tlm57nu5PmnpzliIblj5HliLDlkIRUZXN0Y2FzZVxuXHRpZiAocGFja2FnZVdpa2l0ZXh0KSB7XG5cdFx0cGFja2FnZVdpa2l0ZXh0ID0gYDxkaXYgY2xhc3M9XCJzcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtdW5kZWZpbmVkXCI+JHtwYWNrYWdlV2lraXRleHR9PC9kaXY+YDtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0ZXh0OiBwYWNrYWdlV2lraXRleHQsXG5cdFx0XHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0fTtcblx0XHRcdGlmIChpc1ByZXZpZXcpIHtcblx0XHRcdFx0cGFyYW1zLmRpc2FibGVlZGl0c2VjdGlvbiA9IHRydWU7XG5cdFx0XHRcdHBhcmFtcy5wcmV2aWV3ID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRcdGlmICghZGF0YT8uWydwYXJzZSddPy50ZXh0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFyc2VkV2lraXRleHQ6IHN0cmluZyA9IChkYXRhWydwYXJzZSddLnRleHQgYXMgc3RyaW5nKS50cmltKCk7XG5cdFx0XHRpZiAocGFyc2VkV2lraXRleHQpIHtcblx0XHRcdFx0Y29uc3QgJHBhcnNlZEVsZW1lbnQ6IEpRdWVyeSA9ICQocGFyc2VkV2lraXRleHQpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IFtrZXksIHRlc3RjYXNlSXRlbV0gb2YgT2JqZWN0LmVudHJpZXModGVzdGNhc2VEYXRhTGlzdCkpIHtcblx0XHRcdFx0XHRjb25zdCB7ZWxlbWVudCwgbGFuZ30gPSB0ZXN0Y2FzZUl0ZW07XG5cblx0XHRcdFx0XHRpZiAoIVsnamF2YXNjcmlwdCcsICdqcycsICd0ZXh0JywgJ2NzcycsICdqc29uJ10uaW5jbHVkZXMobGFuZykpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJHBhcnNlZEVsZW1lbnQuZmluZChcblx0XHRcdFx0XHRcdGAuc3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLXVuZGVmaW5lZCA+IC5zcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtJHtrZXl9YFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKCEkZWxlbWVudC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICRhZGRUYXJnZXQ6IEpRdWVyeSA9ICQoZWxlbWVudCkuZmluZCgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmcnKTtcblx0XHRcdFx0XHQkYWRkVGFyZ2V0Lmh0bWwoJGVsZW1lbnQuaHRtbCgpKTtcblx0XHRcdFx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkYWRkVGFyZ2V0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblx0fVxufTtc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QkFBa0IsRUFBRUMsS0FBS3lMLFVBQVU7VUFDNUM7UUFDRDtNQUNELFFBQVE7TUFBQztJQUNWO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0EvSE0xQix5QkFBQTJCLE1BQUE7QUFBQSxXQUFBMUIsTUFBQWpFLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QWxCTE4sTUFBQSxHQUFLdEosbUJBQUFpUCxTQUFRLEVBQUVDLEtBQUssU0FBU0MsZ0JBQWdCck0sT0FBc0M7QUFFbEZ3SixlQUFheEosS0FBSztBQUVsQixPQUFLdUssd0JBQXdCLElBQUk7QUFDbEMsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgInJlcXVpcmUiLCAicHJldmlld0xvYWRpbmdDb250ZW50IiwgInByZXZpZXdMb2FkaW5nSW5uZXIiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkZhaWxlZCIsICJsb2NhbGl6ZSIsICJlbiIsICJMb2FkaW5nIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAic3JjIiwgIkFsZXJ0X2RlZmF1bHQiLCAiZGVjb2RpbmciLCAid2lkdGgiLCAiaGVpZ2h0IiwgImlkIiwgImNsYXNzTmFtZSIsICJBamF4X2xvYWRlcl9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJjaGVja0VsZW1lbnRFeGlzdCIsICJzZWxlY3RvcnMiLCAic2VsZWN0b3JBcnJheSIsICJnZW5lcmF0ZUFycmF5IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInNlbGVjdG9yIiwgInZhbHVlIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZXJyIiwgImUiLCAiZiIsICJhZGRQYXJzZWRXaWtpdGV4dCIsICJwYXJzZWRXaWtpdGV4dCIsICIkYm9keSIsICIkIiwgIiRwYXJzZWRXaWtpdGV4dCIsICJodG1sIiwgIiRlbGVtZW50IiwgImZpbmQiLCAibXciLCAiaG9vayIsICJmaXJlIiwgImFwcGVuZCIsICJub3RpY2VGYWlsRWxlbWVudCIsICJub3RpY2VMb2FkaW5nRWxlbWVudCIsICJyZXBsYWNlRE9NIiwgImVsZW1lbnQiLCAiYWRkTG9hZGluZ05vdGljZSIsICJsb2FkaW5nRmFpbE5vdGljZSIsICJyZW1vdmVMb2FkaW5nTm90aWNlIiwgIndpa2lUZXh0S2V5IiwgInZlcnNpb24iLCAibHVhQWRkVGV4dCIsICJpbnB1dFN0cmluZyIsICJuZXdTdHJpbmciLCAiaXNFc2NhcGUiLCAiZXNjYXBlU3RyaW5nIiwgIkpTT04iLCAicGFyc2UiLCAiY29uY2F0IiwgInN0cmluZ2lmeSIsICJyZXBsYWNlIiwgImx1YUdldFN0cmluZyIsICJ0ZXN0U3RyaW5nRXhlY0FycmF5IiwgImV4ZWMiLCAidGVzdFN0cmluZyIsICJzbGljZSIsICJNYXRoIiwgIm1heCIsICJsZW5ndGgiLCAidHJpbUNoZWNrIiwgInRyaW0iLCAiZmlyc3RDaGFyIiwgImNoYXJBdCIsICJhdCIsICJsdWFHZXRDb250ZW50VGV4dCIsICJ3aWtpdGV4dCIsICJSZWdFeHAiLCAic3Vic3RyaW5nIiwgInRlbXBUZXh0IiwgImx1YUdldE9ialRleHQiLCAibHVhR2V0Q1NTd2lraXRleHQiLCAiX3JlZiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiY3NzVGV4dCIsICJsdWFHZXRKU09Od2lraXRleHQiLCAiX3JlZjIiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJKU09OVGV4dCIsICJqc29uRGF0YSIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAidGVzdCIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzMiIsICJrIiwgInYiLCAibHVhR2V0SlN3aWtpdGV4dCIsICJfcmVmMyIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QzIiwgImpzVGV4dCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJ3Z1VzZXJMYW5ndWFnZSIsICJ3Z1VzZXJWYXJpYW50IiwgImNvbmZpZyIsICJnZXQiLCAiZ2V0TGFuZ3VhZ2UiLCAibGFuZyIsICJpbmNsdWRlcyIsICJza2luIiwgIm13QWRkV2lraVRleHQiLCAiX3JlZjQiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFnZU5hbWUiLCAiaXNQcmV2aWV3IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGUiLCAiY29udGVudG1vZGVsIiwgInRleHQiLCAicHJvcCIsICJ1c2VsYW5nIiwgInVzZXNraW4iLCAiZGlzYWJsZWVkaXRzZWN0aW9uIiwgInByZXZpZXciLCAiX2RhdGEkcGFyc2UiLCAiZGF0YSIsICJfeCIsICJfeDIiLCAiX3gzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJtd0FkZEx1YVRleHQiLCAiX3JlZjUiLCAiY2FsbEJhY2siLCAidGVtcE1vZHVsZU5hbWUiLCAibW9kdWxlQ2FsbCIsICJfZGF0YSRwYXJzZTIiLCAidGVtcGxhdGVzYW5kYm94dGl0bGUiLCAidGVtcGxhdGVzYW5kYm94dGV4dCIsICJ0ZW1wbGF0ZXNhbmRib3hjb250ZW50bW9kZWwiLCAidGVtcGxhdGVzYW5kYm94Y29udGVudGZvcm1hdCIsICJzZWFyY2giLCAiX3g0IiwgIl94NSIsICJfeDYiLCAiX3g3IiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJsdWFDaGVjayIsICJjb250ZW50TW9kZWwiLCAidG9Mb3dlckNhc2UiLCAic2tpbjIiLCAid2dSZXZpc2lvbklkIiwgIm13QXBwbHlOb3RpY2UiLCAiX3JlZjYiLCAiY3VycmVudFBhZ2VOYW1lIiwgInBhZ2VTdWJOYW1lIiwgIl9kYXRhJHBhcnNlMyIsICJfeDgiLCAiX3g5IiwgIm13QXBwbHlSZXZpc2lvbiIsICJfcmVmNyIsICJfZGF0YSRwYXJzZTQiLCAib2xkaWQiLCAicGFnZUNvbnRlbnQiLCAiX3gxMCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiYWxsTXdDb25maWciLCAiY2hlY2tNd0NvbmZpZyIsICJjb25maWdLZXkiLCAiZXhwZWN0Q29uZmlnIiwgIm13Q29uZmlnIiwgIlN0cmluZyIsICJjaGVja05lZWRQcmV2aWV3IiwgImJvZHkiLCAiaW5uZXJIVE1MIiwgIndnQ2Fub25pY2FsTmFtZXNwYWNlIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnUGFnZU5hbWUiLCAibXdBZGRQcmV2aWV3IiwgIl9tdyR1dGlsJGdldFVybCRtYXRjaCIsICJfbXckdXRpbCRnZXRVcmwkbWF0Y2gyIiwgInBhdGhQYXRoIiwgImRlY29kZVVSSSIsICJ1dGlsIiwgImdldFVybCIsICJtYXRjaCIsICJfJGJvZHkkZmluZCR2YWwiLCAiaW5zZXJ0QWZ0ZXIiLCAidmFsIiwgIl8kYm9keSRmaW5kJHZhbDIiLCAidGV4dGFyZWFDb250ZW50IiwgImZ1bGxQYWdlTmFtZSIsICJ3Z1BhZ2VOYW1lMiIsICJ3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSIsICJfcmVmOCIsICJ0ZXN0Y2FzZUxpc3QiLCAicXVlcnlTZWxlY3RvckFsbCIsICJ0ZXN0Y2FzZURhdGFMaXN0IiwgImkiLCAiX2V4ZWMiLCAiX2NvZGVJZCR0b0xvd2VyQ2FzZSIsICJfY29kZUVsZW1lbnQkdGV4dENvbnQiLCAiX2NvZGVFbGVtZW50JHRleHRDb250MiIsICJjb2RlRWxlbWVudCIsICJjb2RlSWQiLCAic2V0QXR0cmlidXRlIiwgInRvU3RyaW5nIiwgImNvZGUiLCAidGV4dENvbnRlbnQiLCAicGFja2FnZVdpa2l0ZXh0IiwgIl9pMyIsICJfT2JqZWN0JHZhbHVlcyIsICJ2YWx1ZXMiLCAidGVzdGNhc2VJdGVtIiwgInByZXBlbmQiLCAiX2RhdGEkcGFyc2U1IiwgIiRwYXJzZWRFbGVtZW50IiwgIl9pNCIsICJfT2JqZWN0JGVudHJpZXMzIiwgIiRhZGRUYXJnZXQiLCAiX3gxMSIsICJnZXRCb2R5IiwgInRoZW4iLCAic3BlY2lhbFdpa2l0ZXh0Il0KfQo=
