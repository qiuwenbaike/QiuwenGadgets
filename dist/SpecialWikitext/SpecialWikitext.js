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
var previewLoadingContent = "SpecialWikitext-module__preview-loading__content_0PrDlG__491";
var previewLoadingInner = "SpecialWikitext-module__preview-loading__inner_0PrDlG__491";
//! src/SpecialWikitext/components/generateElements.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
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
var version = "2.0";
var wikiTextKey = "_addText";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL1NwZWNpYWxXaWtpdGV4dC9TcGVjaWFsV2lraXRleHQudHMiLCAiLi4vLi4vc3JjL1NwZWNpYWxXaWtpdGV4dC9jb21wb25lbnRzL1NwZWNpYWxXaWtpdGV4dC5tb2R1bGUubGVzcyIsICIuLi8uLi9zcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvZ2VuZXJhdGVFbGVtZW50cy50c3giLCAiLi4vLi4vc3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2kxOG4udHMiLCAiLi4vLi4vc3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tFbGVtZW50RXhpc3QudHMiLCAiLi4vLi4vc3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvYWRkUGFyc2VkV2lraXRleHQudHMiLCAiLi4vLi4vc3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL25vdGljZS50cyIsICIuLi8uLi9zcmMvU3BlY2lhbFdpa2l0ZXh0L29wdGlvbnMuanNvbiIsICIuLi8uLi9zcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUFkZFRleHQudHMiLCAiLi4vLi4vc3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2x1YS9sdWFHZXRUZXh0LnRzIiwgIi4uLy4uL3NyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9hcGkudHMiLCAiLi4vLi4vc3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvZ2V0TGFuZ3VhZ2UudHMiLCAiLi4vLi4vc3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL213L213QWRkVGV4dC50cyIsICIuLi8uLi9zcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUNoZWNrLnRzIiwgIi4uLy4uL3NyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9tdy9td0FwcGx5LnRzIiwgIi4uLy4uL3NyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy91dGlsL2NoZWNrTXdDb25maWcudHMiLCAiLi4vLi4vc3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tOZWVkUHJldmlldy50cyIsICIuLi8uLi9zcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbXcvbXdBZGRQcmV2aWV3LnRzIiwgIi4uLy4uL3NyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy93aWtpdGV4dFByZXZpZXdUZXN0Y2FzZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHttd0FkZFByZXZpZXd9IGZyb20gJy4vbW9kdWxlcy9tdy9td0FkZFByZXZpZXcnO1xuaW1wb3J0IHt3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZX0gZnJvbSAnLi9tb2R1bGVzL3dpa2l0ZXh0UHJldmlld1Rlc3RjYXNlJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzcGVjaWFsV2lraXRleHQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdC8vIOaJp+ihjOmihOiniFxuXHRtd0FkZFByZXZpZXcoJGJvZHkpO1xuXHQvLyDmo4Dmn6XmtYvor5XmoLfkvotcblx0dm9pZCB3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSh0cnVlKTtcbn0pO1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvU3BlY2lhbFdpa2l0ZXh0Lm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgcHJldmlld0xvYWRpbmdDb250ZW50ID0gXCJTcGVjaWFsV2lraXRleHQtbW9kdWxlX19wcmV2aWV3LWxvYWRpbmdfX2NvbnRlbnRfMFByRGxHX180OTFcIjtcbmV4cG9ydCBjb25zdCBwcmV2aWV3TG9hZGluZ0lubmVyID0gXCJTcGVjaWFsV2lraXRleHQtbW9kdWxlX19wcmV2aWV3LWxvYWRpbmdfX2lubmVyXzBQckRsR19fNDkxXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJwcmV2aWV3TG9hZGluZ0NvbnRlbnRcIjogcHJldmlld0xvYWRpbmdDb250ZW50LFxuICBcInByZXZpZXdMb2FkaW5nSW5uZXJcIjogcHJldmlld0xvYWRpbmdJbm5lclxufTtcbiAgICAgICIsICJpbXBvcnQge3ByZXZpZXdMb2FkaW5nQ29udGVudCwgcHJldmlld0xvYWRpbmdJbm5lcn0gZnJvbSAnLi9TcGVjaWFsV2lraXRleHQubW9kdWxlLmxlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCBhamF4TG9hZGVyIGZyb20gJy4uL2ltYWdlcy9BamF4LWxvYWRlci5naWYnO1xuaW1wb3J0IGFsZXJ0IGZyb20gJy4uL2ltYWdlcy9BbGVydC5wbmcnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBGYWlsZWQgPSAoKSA9PiAoXG5cdDw+XG5cdFx0PGltZyBzcmM9e2FsZXJ0fSBkZWNvZGluZz1cImFzeW5jXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgLz5cblx0XHQ8c3Bhbj4mbmJzcDt7Z2V0TWVzc2FnZSgnRmFpbGVkJyl9PC9zcGFuPlxuXHQ8Lz5cbik7XG5cbmNvbnN0IExvYWRpbmcgPSAoKSA9PiAoXG5cdDxkaXYgaWQ9XCJzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nXCI+XG5cdFx0PGRpdiBjbGFzc05hbWU9e1sncXVvdGVib3gnLCBwcmV2aWV3TG9hZGluZ0lubmVyXX0gaWQ9XCJzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nX19pbm5lclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3ByZXZpZXdMb2FkaW5nQ29udGVudH0gaWQ9XCJzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nX19jb250ZW50XCI+XG5cdFx0XHRcdDxpbWcgc3JjPXthamF4TG9hZGVyfSBkZWNvZGluZz1cImFzeW5jXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgLz5cblx0XHRcdFx0PHNwYW4+Jm5ic3A7e2dldE1lc3NhZ2UoJ0xvYWRpbmcnKX08L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG4pO1xuXG5leHBvcnQge0ZhaWxlZCwgTG9hZGluZ307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEZhaWxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGYWlsZWQgdG8gbG9hZCBwcmV2aWV3LicsXG5cdFx0XHQnemgtaGFucyc6ICfpooTop4jliqDovb3lpLHotKUnLFxuXHRcdFx0J3poLWhhbnQnOiAn6aCQ6Ka96LyJ5YWl5aSx6LSlJyxcblx0XHR9KSxcblx0XHRMb2FkaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcgcHJldmlldy4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfpooTop4jliqDovb3kuK3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn6aCQ6Ka96LyJ5YWl5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vLyDmo4Dmn6VzZWxlY3RvcuWvueW6lOeahERPTeWvueixoeaYr+WQpuWtmOWcqFxuY29uc3QgY2hlY2tFbGVtZW50RXhpc3QgPSAoc2VsZWN0b3JzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4gPT4ge1xuXHRjb25zdCBzZWxlY3RvckFycmF5OiBzdHJpbmdbXSA9IGdlbmVyYXRlQXJyYXkoc2VsZWN0b3JzKTtcblxuXHRmb3IgKGNvbnN0IHNlbGVjdG9yIG9mIHNlbGVjdG9yQXJyYXkpIHtcblx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tFbGVtZW50RXhpc3R9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2NoZWNrRWxlbWVudEV4aXN0fSBmcm9tICcuL2NoZWNrRWxlbWVudEV4aXN0JztcblxuLy8g5bCG6Kej5p6Q5ZCO55qEd2lraXRleHTliqDlhaXpobXpnaLkuK1cbmNvbnN0IGFkZFBhcnNlZFdpa2l0ZXh0ID0gKHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcgfCBSZWFjdC5SZWFjdEVsZW1lbnQpOiB2b2lkID0+IHtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRjb25zdCAkcGFyc2VkV2lraXRleHQ6IEpRdWVyeSA9ICQoKS5odG1sKHBhcnNlZFdpa2l0ZXh0KTtcblxuXHRpZiAoY2hlY2tFbGVtZW50RXhpc3QoJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nJykpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmcnKTtcblx0XHQkZWxlbWVudC5odG1sKHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkZWxlbWVudCk7XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5kaWZmLWN1cnJlbnR2ZXJzaW9uLXRpdGxlJykpIHtcblx0XHQkYm9keS5maW5kKCcuZGlmZi1jdXJyZW50dmVyc2lvbi10aXRsZScpLmFwcGVuZCgkcGFyc2VkV2lraXRleHQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcucHJldmlld25vdGUnKSkge1xuXHRcdCRib2R5LmZpbmQoJy5wcmV2aWV3bm90ZScpLmFwcGVuZCgkcGFyc2VkV2lraXRleHQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcubXctdW5kZWxldGUtcmV2aXNpb24nKSkge1xuXHRcdCRib2R5LmZpbmQoJy5tdy11bmRlbGV0ZS1yZXZpc2lvbicpLmFwcGVuZCgkcGFyc2VkV2lraXRleHQpO1xuXHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcjbXctY29udGVudC10ZXh0JykpIHtcblx0XHQkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0JykuYXBwZW5kKCRwYXJzZWRXaWtpdGV4dCk7XG5cdH1cblxuXHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuZmlyZSgkcGFyc2VkV2lraXRleHQpO1xufTtcblxuZXhwb3J0IHthZGRQYXJzZWRXaWtpdGV4dH07XG4iLCAiaW1wb3J0IHtGYWlsZWQsIExvYWRpbmd9IGZyb20gJy4uL2NvbXBvbmVudHMvZ2VuZXJhdGVFbGVtZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHthZGRQYXJzZWRXaWtpdGV4dH0gZnJvbSAnLi91dGlsL2FkZFBhcnNlZFdpa2l0ZXh0JztcblxuLy8gW1tGaWxlOkdub21lLWRpYWxvZy13YXJuaW5nMi5zdmd8MzJweF1dXG4vLyAte3poLWhhbnM66aKE6KeI5Yqg6L295aSx6LSlO3poLWhhbnQ66aCQ6Ka96LyJ5YWl5aSx6LSlO30tXG5jb25zdCBub3RpY2VGYWlsRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50ID0gRmFpbGVkKCk7XG5cbi8vIHt7UXVvdGUgYm94IHxxdW90ZSAgPSAte3poLWhhbnM66aKE6KeI5Yqg6L295LitO3poLWhhbnQ66aCQ6Ka96LyJ5YWl5LitO30t4oCm4oCmIHx3aWR0aCAgPSA1MCUgfGFsaWduICA9IGNlbnRlcn19XG5jb25zdCBub3RpY2VMb2FkaW5nRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50ID0gTG9hZGluZygpO1xuXG4vLyDmlLnliqhET03lhoXlrrlcbmNvbnN0IHJlcGxhY2VET00gPSAoc2VsZWN0b3I6IHN0cmluZywgZWxlbWVudD86IFJlYWN0LlJlYWN0RWxlbWVudCk6IHZvaWQgPT4ge1xuXHQkKHNlbGVjdG9yKS5odG1sKGVsZW1lbnQgPz8gJycpO1xufTtcblxuLy8g5Yqg5YWl4oCcW+i9veWFpeS4rV3igJ3nmoTmj5DnpLpcbmNvbnN0IGFkZExvYWRpbmdOb3RpY2UgPSAoKTogdm9pZCA9PiB7XG5cdGFkZFBhcnNlZFdpa2l0ZXh0KG5vdGljZUxvYWRpbmdFbGVtZW50KTtcbn07XG5cbi8vIOi9veWFpemUmeivr+eahOaPkOekulxuY29uc3QgbG9hZGluZ0ZhaWxOb3RpY2UgPSAoKTogdm9pZCA9PiB7XG5cdHJlcGxhY2VET00oJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nX19jb250ZW50Jywgbm90aWNlRmFpbEVsZW1lbnQpO1xufTtcblxuLy8g56e76Zmk4oCcW+i9veWFpeS4rV3igJ3nmoTmj5DnpLpcbmNvbnN0IHJlbW92ZUxvYWRpbmdOb3RpY2UgPSAoKTogdm9pZCA9PiB7XG5cdHJlcGxhY2VET00oJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nJyk7XG59O1xuXG5leHBvcnQge25vdGljZUxvYWRpbmdFbGVtZW50LCBhZGRMb2FkaW5nTm90aWNlLCBsb2FkaW5nRmFpbE5vdGljZSwgcmVtb3ZlTG9hZGluZ05vdGljZX07XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIixcblx0XCJ3aWtpVGV4dEtleVwiOiBcIl9hZGRUZXh0XCJcbn1cbiIsICIvLyDlkIjlubblpJrkuKp3aWtpdGV4dOWtl+espuS4slxuY29uc3QgbHVhQWRkVGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nLCBuZXdTdHJpbmc6IHN0cmluZywgaXNFc2NhcGU6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyA9PiB7XG5cdGlmIChuZXdTdHJpbmcpIHtcblx0XHRpZiAoaW5wdXRTdHJpbmcpIHtcblx0XHRcdGlucHV0U3RyaW5nICs9ICdcXG4nO1xuXHRcdH1cblxuXHRcdGlmIChpc0VzY2FwZSkge1xuXHRcdFx0Y29uc3QgW2VzY2FwZVN0cmluZ10gPSBKU09OLnBhcnNlKFxuXHRcdFx0XHRgWyR7SlNPTi5zdHJpbmdpZnkoXG5cdFx0XHRcdFx0Ly8gTHVh5LiN5pSv5oyBXFx144CBXFx46L2s5LmJ5a2X56ymXG5cdFx0XHRcdFx0bmV3U3RyaW5nLnJlcGxhY2UoL1xcXFwoW3V4XSkvZ2ksICckMScpXG5cdFx0XHRcdCkucmVwbGFjZSgvXFxcXFxcXFwvZywgJ1xcXFwnKX1dYFxuXHRcdFx0KSBhcyBbc3RyaW5nXTtcblx0XHRcdG5ld1N0cmluZyA9IGVzY2FwZVN0cmluZztcblx0XHR9XG5cblx0XHRpbnB1dFN0cmluZyArPSBuZXdTdHJpbmc7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXRTdHJpbmc7XG59O1xuXG5leHBvcnQge2x1YUFkZFRleHR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7bHVhQWRkVGV4dH0gZnJvbSAnLi9sdWFBZGRUZXh0JztcblxuLy8g6K+75Y+Wd2lraXRleHTlrZfnrKbkuLLvvIzlubblv73nlaXms6jph4rlsL7pg6hcbmNvbnN0IGx1YUdldFN0cmluZyA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0Y29uc3QgdGVzdFN0cmluZ0V4ZWNBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IC9bXlxcbl0qXFwqXFwvLy5leGVjKGlucHV0U3RyaW5nKTtcblxuXHRsZXQgdGVzdFN0cmluZzogc3RyaW5nID0gaW5wdXRTdHJpbmc7XG5cdGlmICh0ZXN0U3RyaW5nRXhlY0FycmF5KSB7XG5cdFx0W3Rlc3RTdHJpbmddID0gdGVzdFN0cmluZ0V4ZWNBcnJheTtcblx0XHR0ZXN0U3RyaW5nID0gdGVzdFN0cmluZy5zbGljZSgwLCBNYXRoLm1heCgwLCB0ZXN0U3RyaW5nLmxlbmd0aCAtIDIpKTtcblx0fVxuXG5cdGNvbnN0IHRyaW1DaGVjazogc3RyaW5nID0gdGVzdFN0cmluZy50cmltKCk7XG5cdGNvbnN0IGZpcnN0Q2hhcjogc3RyaW5nID0gdHJpbUNoZWNrLmNoYXJBdCgwKTtcblx0aWYgKGZpcnN0Q2hhciA9PT0gdHJpbUNoZWNrLmF0KC0xKSAmJiAoZmlyc3RDaGFyID09PSBcIidcIiB8fCBmaXJzdENoYXIgPT09ICdcIicpKSB7XG5cdFx0cmV0dXJuIHRyaW1DaGVjay5zbGljZSgxLCAxICsgdHJpbUNoZWNrLmxlbmd0aCAtIDIpO1xuXHR9XG5cblx0cmV0dXJuIHRlc3RTdHJpbmcudHJpbSgpO1xufTtcblxuLy8g5o2V6I63Q1NT5paH5pys5Lit56ym5ZCIYDx7T1BUSU9OUy53aWtpVGV4dEtleX0+ICB7IGNvbnRlbnTvvJpcIlhYWFwiIH1g5qih5byP55qE5a2X56ym5LiyXG5jb25zdCBsdWFHZXRDb250ZW50VGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHR0cnkge1xuXHRcdGlucHV0U3RyaW5nLnJlcGxhY2UoXG5cdFx0XHRuZXcgUmVnRXhwKGAke09QVElPTlMud2lraVRleHRLZXl9XFxcXHMqXFxcXHtbXmNcXFxcfV0qY29udGVudFxcXFxzKjpcXFxccypbXlxcbl0qYCwgJ2cnKSxcblx0XHRcdChzdWJzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdGNvbnN0IHRlbXBUZXh0OiBzdHJpbmcgPSAoL2NvbnRlbnRcXHMqOlxccypbXlxcbl0qLy5leGVjKHN1YnN0cmluZykgfHwgWydjb250ZW50OiddKVswXVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9eW1xcczt9XSt8W1xcczt9XSskL2csICcnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXHMqY29udGVudFxccyo6XFxzKi8sICcnKTtcblxuXHRcdFx0XHRpZiAod2lraXRleHQpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCArPSAnXFxuJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGx1YUdldFN0cmluZyh0ZW1wVGV4dCk7XG5cblx0XHRcdFx0cmV0dXJuIHN1YnN0cmluZztcblx0XHRcdH1cblx0XHQpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gd2lraXRleHQudHJpbSgpO1xufTtcblxuLy8g5o2V6I635a2X56ym5Liy5YyW55qE5a+56LGh5Lit56ym5ZCIYDx7T1BUSU9OUy53aWtpVGV4dEtleX0+77ydWFhYYOaIlmA8e09QVElPTlMud2lraVRleHRLZXl9Pu+8mlhYWGDmqKHlvI/nmoTlrZfnrKbkuLIgKOazqOmHiuS7peWFqOinkuWtl+espuS7o+abv++8jOmBv+WFjeiiq+aNleiOtylcbmNvbnN0IGx1YUdldE9ialRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0dHJ5IHtcblx0XHRpbnB1dFN0cmluZy5yZXBsYWNlKFxuXHRcdFx0bmV3IFJlZ0V4cChgJHtPUFRJT05TLndpa2lUZXh0S2V5fVxcXFxzKltcXFxcPTpdXFxcXHMqW15cXG5dKmAsICdnJyksXG5cdFx0XHQoc3Vic3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRjb25zdCB0ZW1wVGV4dDogc3RyaW5nID0gc3Vic3RyaW5nXG5cdFx0XHRcdFx0LnJlcGxhY2UoL15bXFxzO31dK3xbXFxzO31dKyQvZywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UobmV3IFJlZ0V4cChgJHtPUFRJT05TLndpa2lUZXh0S2V5fVxcXFxzKltcXFxcPTpdXFxcXHMqYCksICcnKTtcblxuXHRcdFx0XHRpZiAod2lraXRleHQpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCArPSAnXFxuJztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGx1YUdldFN0cmluZyh0ZW1wVGV4dCk7XG5cblx0XHRcdFx0cmV0dXJuIHN1YnN0cmluZztcblx0XHRcdH1cblx0XHQpO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gd2lraXRleHQudHJpbSgpO1xufTtcblxuLy8g5YiG5p6QQ1NT5Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldENTU3dpa2l0ZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0IGNzc1RleHQ6IHN0cmluZyA9XG5cdFx0KGlucHV0U3RyaW5nIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRleHRBcmVhRWxlbWVudD4oJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKT8udmFsdWUpID8/ICcnO1xuXHRpZiAoIWNzc1RleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Ly8g5Yy56YWNIDx7T1BUSU9OUy53aWtpVGV4dEtleX0+IHsgY29udGVudO+8mlwiWFhYXCIgfSDmqKHlvI9cblx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCBsdWFHZXRDb250ZW50VGV4dChjc3NUZXh0KSwgdHJ1ZSk7XG5cdC8vIOWMuemFjSAvKiA8e09QVElPTlMud2lraVRleHRLZXl9Pu+8mlhYWCAqLyDmqKHlvI9cblx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCBsdWFHZXRPYmpUZXh0KGNzc1RleHQpLCB0cnVlKTtcblxuXHRyZXR1cm4gd2lraXRleHQudHJpbSgpO1xufTtcblxuLy8g5YiG5p6QSlNPTuS4reespuWQiOadoeS7tueahHdpa2l0ZXh0XG5jb25zdCBsdWFHZXRKU09Od2lraXRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgSlNPTlRleHQ6IHN0cmluZyA9XG5cdFx0KGlucHV0U3RyaW5nIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFRleHRBcmVhRWxlbWVudD4oJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKT8udmFsdWUpID8/ICcnO1xuXHRpZiAoIUpTT05UZXh0LnRyaW0oKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKEpTT05UZXh0KSBhcyBvYmplY3Q7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoanNvbkRhdGEpKSB7XG5cdFx0XHRpZiAobmV3IFJlZ0V4cChPUFRJT05TLndpa2lUZXh0S2V5KS50ZXN0KGtleSkgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8g6Iul6ZSu5YC85piv5a+56LGhXG5cdFx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSBhcyBvYmplY3QpKSB7XG5cdFx0XHRcdFx0aWYgKG5ldyBSZWdFeHAoT1BUSU9OUy53aWtpVGV4dEtleSkudGVzdChrKSAmJiB0eXBlb2YgdiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgdik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gd2lraXRleHQudHJpbSgpO1xufTtcblxuLy8g5YiG5p6QSmF2YVNjcmlwdOS4reespuWQiOadoeS7tueahHdpa2l0ZXh0XG5jb25zdCBsdWFHZXRKU3dpa2l0ZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdGNvbnN0IGpzVGV4dDogc3RyaW5nID1cblx0XHQoaW5wdXRTdHJpbmcgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVGV4dEFyZWFFbGVtZW50PigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpPy52YWx1ZSkgPz8gJyc7XG5cdGlmICghanNUZXh0LnRyaW0oKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgbHVhR2V0T2JqVGV4dChqc1RleHQpLCB0cnVlKTtcblxuXHRyZXR1cm4gd2lraXRleHQudHJpbSgpO1xufTtcblxuZXhwb3J0IHtsdWFHZXRDU1N3aWtpdGV4dCwgbHVhR2V0SlNPTndpa2l0ZXh0LCBsdWFHZXRKU3dpa2l0ZXh0fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFNwZWNpYWxXaWtpdGV4dC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImNvbnN0IHt3Z1VzZXJMYW5ndWFnZSwgd2dVc2VyVmFyaWFudH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IGdldExhbmd1YWdlID0gKCk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IGxhbmc6IHN0cmluZyA9IHdnVXNlckxhbmd1YWdlO1xuXG5cdGlmIChsYW5nLmluY2x1ZGVzKCd6aCcpKSB7XG5cdFx0cmV0dXJuIHdnVXNlclZhcmlhbnQgYXMgc3RyaW5nO1xuXHR9XG5cblx0cmV0dXJuIGxhbmc7XG59O1xuXG5leHBvcnQge2dldExhbmd1YWdlfTtcbiIsICJpbXBvcnQge2xvYWRpbmdGYWlsTm90aWNlLCByZW1vdmVMb2FkaW5nTm90aWNlfSBmcm9tICcuLi9ub3RpY2UnO1xuaW1wb3J0IHthZGRQYXJzZWRXaWtpdGV4dH0gZnJvbSAnLi4vdXRpbC9hZGRQYXJzZWRXaWtpdGV4dCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gJy4uL3V0aWwvZ2V0TGFuZ3VhZ2UnO1xuXG5jb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOWKoOWFpemihOiniOWGheWuuVxuY29uc3QgbXdBZGRXaWtpVGV4dCA9IGFzeW5jICh3aWtpdGV4dDogc3RyaW5nLCBwYWdlTmFtZTogc3RyaW5nLCBpc1ByZXZpZXc6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0aWYgKHdpa2l0ZXh0LnRyaW0oKSkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdC8vIOmBv+WFjeWGheWuuemHjeWkjVxuXHRcdFx0dGl0bGU6IHBhZ2VOYW1lLFxuXHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHR1c2VsYW5nOiBnZXRMYW5ndWFnZSgpLFxuXHRcdFx0dXNlc2tpbjogc2tpbixcblx0XHR9O1xuXHRcdGlmIChpc1ByZXZpZXcpIHtcblx0XHRcdHBhcmFtcy5kaXNhYmxlZWRpdHNlY3Rpb24gPSB0cnVlO1xuXHRcdFx0cGFyYW1zLnByZXZpZXcgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJzZWRXaWtpdGV4dDogc3RyaW5nID0gKGRhdGFbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmcpLnRyaW0oKTtcblxuXHRcdFx0aWYgKHBhcnNlZFdpa2l0ZXh0KSB7XG5cdFx0XHRcdGFkZFBhcnNlZFdpa2l0ZXh0KHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdGxvYWRpbmdGYWlsTm90aWNlKCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0fVxufTtcblxuLy8g5Yqg5YWl6aKE6KeI55qETHVh5YaF5a65XG5jb25zdCBtd0FkZEx1YVRleHQgPSBhc3luYyAoXG5cdHdpa2l0ZXh0OiBzdHJpbmcsXG5cdHBhZ2VOYW1lOiBzdHJpbmcsXG5cdGlzUHJldmlldzogYm9vbGVhbixcblx0Y2FsbEJhY2s/OiAoYXJnOiBzdHJpbmcpID0+IEpRdWVyeSB8IEhUTUxFbGVtZW50IHwgdm9pZFxuKSA9PiB7XG5cdGNvbnN0IHRlbXBNb2R1bGVOYW1lOiBzdHJpbmcgPSAnQWRkVGV4dC9UZW1wL01vZHVsZS9EYXRhLmx1YSc7XG5cdGNvbnN0IG1vZHVsZUNhbGw6IHtcblx0XHR3aWtpdGV4dDogc3RyaW5nO1xuXHRcdHBhZ2VOYW1lOiBzdHJpbmc7XG5cdH0gPSB7XG5cdFx0d2lraXRleHQ6ICcjaW52b2tlOicsXG5cdFx0Ly8g5YiG5byA5p2l77yM6YG/5YWN6KKr5YiG5YiwW1s6Q2F0ZWdvcnk65pyJ6ISa5pys6ZSZ6K+v55qE6aG16Z2iXV1cblx0XHRwYWdlTmFtZTogJ01vZHVsZTonLFxuXHR9O1xuXG5cdGlmICh3aWtpdGV4dC50cmltKCkpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZTogcGFnZU5hbWUsXG5cdFx0XHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRcdFx0dGVtcGxhdGVzYW5kYm94dGl0bGU6IG1vZHVsZUNhbGwucGFnZU5hbWUgKyB0ZW1wTW9kdWxlTmFtZSxcblx0XHRcdFx0Ly8g5Yib5bu65Li05pe2THVhIE1vZHVsZVxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3h0ZXh0OiBgcmV0dXJuIHtcblx0bWFpbiA9IGZ1bmN0aW9uKClcblx0XHR4cGNhbGwoXG5cdFx0XHRmdW5jdGlvbigpXG5cdFx0XHRcdCR7d2lraXRleHR9XG5cdFx0XHRlbmQsXG5cdFx0XHRmdW5jdGlvbigpXG5cdFx0XHRlbmRcblx0XHQpXG5cdFx0bG9jYWwgbW9kdWxlV2lraXRleHQgPSBwYWNrYWdlLmxvYWRlZFtcIk1vZHVsZTpNb2R1bGUgd2lraXRleHRcIl1cblx0XHRpZiBtb2R1bGVXaWtpdGV4dCB0aGVuXG5cdFx0XHRsb2NhbCB3aWtpdGV4dCA9IG1vZHVsZVdpa2l0ZXh0Lm1haW4oKVxuXHRcdFx0aWYgbXcudGV4dC50cmltKHdpa2l0ZXh0KSB+PSBcIlwiIHRoZW5cblx0XHRcdFx0cmV0dXJuIG13LmdldEN1cnJlbnRGcmFtZSgpOnByZXByb2Nlc3MobW9kdWxlV2lraXRleHQubWFpbigpKVxuXHRcdFx0ZW5kXG5cdFx0ZW5kXG5cdFx0cmV0dXJuIFwiXCJcblx0ZW5kXG59YCxcblx0XHRcdFx0dGVtcGxhdGVzYW5kYm94Y29udGVudG1vZGVsOiAnU2NyaWJ1bnRvJyxcblx0XHRcdFx0dGVtcGxhdGVzYW5kYm94Y29udGVudGZvcm1hdDogJ3RleHQvcGxhaW4nLFxuXHRcdFx0XHR0ZXh0OiBge3ske21vZHVsZUNhbGwud2lraXRleHR9JHt0ZW1wTW9kdWxlTmFtZX18bWFpbn19YCxcblx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0XHR1c2VsYW5nOiBnZXRMYW5ndWFnZSgpLFxuXHRcdFx0XHR1c2Vza2luOiBza2luLFxuXHRcdFx0fTtcblx0XHRcdGlmIChpc1ByZXZpZXcpIHtcblx0XHRcdFx0cGFyYW1zLnByZXZpZXcgPSB0cnVlO1xuXHRcdFx0XHRwYXJhbXMuZGlzYWJsZWVkaXRzZWN0aW9uID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRcdGlmICghZGF0YT8uWydwYXJzZSddPy50ZXh0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGFyc2VkV2lraXRleHQ6IHN0cmluZyA9IChkYXRhWydwYXJzZSddLnRleHQgYXMgc3RyaW5nKS50cmltKCk7XG5cblx0XHRcdGlmICghcGFyc2VkV2lraXRleHQpIHtcblx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0XHQvLyDoi6XlnKjov5nkuKrkuLTml7bmqKHlnZfkuK3lh7rplJnliJnlj5bmtohcblx0XHRcdH0gZWxzZSBpZiAoJChwYXJzZWRXaWtpdGV4dCkuZmluZCgnLnNjcmlidW50by1lcnJvcicpLnRleHQoKS5zZWFyY2godGVtcE1vZHVsZU5hbWUpKSB7XG5cdFx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNhbGxCYWNrID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNhbGxCYWNrKHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFkZFBhcnNlZFdpa2l0ZXh0KHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdGxvYWRpbmdGYWlsTm90aWNlKCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0fVxufTtcblxuZXhwb3J0IHttd0FkZEx1YVRleHQsIG13QWRkV2lraVRleHR9O1xuIiwgImltcG9ydCB7bHVhR2V0Q1NTd2lraXRleHQsIGx1YUdldEpTT053aWtpdGV4dCwgbHVhR2V0SlN3aWtpdGV4dH0gZnJvbSAnLi9sdWFHZXRUZXh0JztcblxuY29uc3Qge3dnUGFnZUNvbnRlbnRNb2RlbH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOWIpOaWreaYr+WQpuS4ukx1YVxuY29uc3QgbHVhQ2hlY2sgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyA9ICcnLCBjb250ZW50TW9kZWw6IHN0cmluZyA9IHdnUGFnZUNvbnRlbnRNb2RlbCk6IHN0cmluZyA9PiB7XG5cdC8vIOagueaNrumhtemdouWGheWuueaooeWei+mAieeUqOmAguW9k+eahOino+aekOaooeW8j1xuXHRzd2l0Y2ggKGNvbnRlbnRNb2RlbC50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0Y2FzZSAnanNvbic6XG5cdFx0XHRyZXR1cm4gbHVhR2V0SlNPTndpa2l0ZXh0KGlucHV0U3RyaW5nKTtcblx0XHRjYXNlICdqcyc6XG5cdFx0Y2FzZSAnamF2YXNjcmlwdCc6XG5cdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRyZXR1cm4gbHVhR2V0SlN3aWtpdGV4dChpbnB1dFN0cmluZyk7XG5cdFx0Y2FzZSAnY3NzJzpcblx0XHRjYXNlICdzYW5pdGl6ZWQtY3NzJzpcblx0XHRcdHJldHVybiBsdWFHZXRDU1N3aWtpdGV4dChpbnB1dFN0cmluZyk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAnJztcblx0fVxufTtcblxuZXhwb3J0IHtsdWFDaGVja307XG4iLCAiaW1wb3J0IHthZGRQYXJzZWRXaWtpdGV4dH0gZnJvbSAnLi4vdXRpbC9hZGRQYXJzZWRXaWtpdGV4dCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Y2hlY2tFbGVtZW50RXhpc3R9IGZyb20gJy4uL3V0aWwvY2hlY2tFbGVtZW50RXhpc3QnO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSAnLi4vdXRpbC9nZXRMYW5ndWFnZSc7XG5pbXBvcnQge2x1YUNoZWNrfSBmcm9tICcuLi9sdWEvbHVhQ2hlY2snO1xuaW1wb3J0IHttd0FkZFdpa2lUZXh0fSBmcm9tICcuL213QWRkVGV4dCc7XG5pbXBvcnQge3JlbW92ZUxvYWRpbmdOb3RpY2V9IGZyb20gJy4uL25vdGljZSc7XG5cbmNvbnN0IHtza2luLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyDliqDlhaXnvJbovpHmj5DnpLrvvIjoi6XlrZjlnKjvvIlcbmNvbnN0IG13QXBwbHlOb3RpY2UgPSBhc3luYyAoY3VycmVudFBhZ2VOYW1lOiBzdHJpbmcsIHBhZ2VTdWJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHQvLyBnZXQgdGhlIG9yaWdpbmFsIHdpa2l0ZXh0IGNvbnRlbnQgb2YgYSBwYWdlXG5cdFx0XHR0aXRsZTogY3VycmVudFBhZ2VOYW1lICsgcGFnZVN1Yk5hbWUsXG5cdFx0XHR0ZXh0OiBge3sjaW52b2tlOlNwZWNpYWwgd2lraXRleHQvVGVtcGxhdGV8Z2V0Tm90aWNlc3wke2N1cnJlbnRQYWdlTmFtZX18JHtwYWdlU3ViTmFtZX19fWAsXG5cdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHR1c2VsYW5nOiBnZXRMYW5ndWFnZSgpLFxuXHRcdFx0dXNlc2tpbjogc2tpbixcblx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdG1heGFnZTogNjAwLFxuXHRcdH07XG5cblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdGlmICghZGF0YT8uWydwYXJzZSddPy50ZXh0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaHRtbCA9IGRhdGFbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmc7XG5cdFx0aWYgKCQoaHRtbCkudGV4dCgpLnRyaW0oKSkge1xuXHRcdFx0YWRkUGFyc2VkV2lraXRleHQoaHRtbCk7XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG59O1xuXG4vLyDku47pobXpnaLlvZPliY3ljoblj7LniYjmnKzlj5blh7ogPHtPUFRJT05TLndpa2lUZXh0S2V5fT5cbmNvbnN0IG13QXBwbHlSZXZpc2lvbiA9IGFzeW5jIChjdXJyZW50UGFnZU5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdC8vIGdldCB0aGUgb3JpZ2luYWwgd2lraXRleHQgY29udGVudCBvZiBhIHBhZ2Vcblx0XHRcdG9sZGlkOiB3Z1JldmlzaW9uSWQsXG5cdFx0XHRwcm9wOiAnd2lraXRleHQnLFxuXHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0fTtcblxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/Lndpa2l0ZXh0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IHBhZ2VDb250ZW50OiBzdHJpbmcgPSBsdWFDaGVjaygoZGF0YVsncGFyc2UnXS53aWtpdGV4dCBhcyBzdHJpbmcpLnRyaW0oKSk7XG5cdFx0cGFnZUNvbnRlbnQgPVxuXHRcdFx0KGNoZWNrRWxlbWVudEV4aXN0KCcjbXctY2xlYXJ5b3VyY2FjaGUnKVxuXHRcdFx0XHQ/ICd7eyNpbnZva2U6U3BlY2lhbCB3aWtpdGV4dC9UZW1wbGF0ZXxpbnR8Y2xlYXJ5b3VyY2FjaGV9fSdcblx0XHRcdFx0OiAnJykgKyBwYWdlQ29udGVudDtcblxuXHRcdGlmIChwYWdlQ29udGVudC50cmltKCkpIHtcblx0XHRcdHZvaWQgbXdBZGRXaWtpVGV4dChwYWdlQ29udGVudCwgY3VycmVudFBhZ2VOYW1lLCB0cnVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHR9XG59O1xuXG5leHBvcnQge213QXBwbHlOb3RpY2UsIG13QXBwbHlSZXZpc2lvbn07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhbGxNd0NvbmZpZzogUmV0dXJuVHlwZTx0eXBlb2YgbXcuY29uZmlnLmdldD4gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOajgOafpU1lZGlhV2lraeeahOiuvue9rlxuY29uc3QgY2hlY2tNd0NvbmZpZyA9IChjb25maWdLZXk6IHN0cmluZywgZXhwZWN0Q29uZmlnOiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4gPT4ge1xuXHRsZXQgbXdDb25maWc6IHVua25vd24gPSBhbGxNd0NvbmZpZ1tjb25maWdLZXldO1xuXHRpZiAoIW13Q29uZmlnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1iYXNlLXRvLXN0cmluZ1xuXHRtd0NvbmZpZyA9IFN0cmluZyhtd0NvbmZpZykudG9Mb3dlckNhc2UoKS50cmltKCk7XG5cdGlmICghbXdDb25maWcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gZ2VuZXJhdGVBcnJheShleHBlY3RDb25maWcpLmluY2x1ZGVzKG13Q29uZmlnIGFzIHN0cmluZyk7XG59O1xuXG5leHBvcnQge2NoZWNrTXdDb25maWd9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcblxuLy8g5qOA5p+l5piv5ZCm5pyJ6aKE6KeI55qE5b+F6KaB5oCnXG5jb25zdCBjaGVja05lZWRQcmV2aWV3ID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gZG9jdW1lbnQuYm9keS5pbm5lckhUTUwuc2VhcmNoKE9QVElPTlMud2lraVRleHRLZXkpID4gLTE7XG59O1xuXG5leHBvcnQge2NoZWNrTmVlZFByZXZpZXd9O1xuIiwgImltcG9ydCB7YWRkTG9hZGluZ05vdGljZSwgbm90aWNlTG9hZGluZ0VsZW1lbnQsIHJlbW92ZUxvYWRpbmdOb3RpY2V9IGZyb20gJy4uL25vdGljZSc7XG5pbXBvcnQge2x1YUdldENTU3dpa2l0ZXh0LCBsdWFHZXRKU09Od2lraXRleHR9IGZyb20gJy4uL2x1YS9sdWFHZXRUZXh0JztcbmltcG9ydCB7bXdBZGRMdWFUZXh0LCBtd0FkZFdpa2lUZXh0fSBmcm9tICcuL213QWRkVGV4dCc7XG5pbXBvcnQge213QXBwbHlOb3RpY2UsIG13QXBwbHlSZXZpc2lvbn0gZnJvbSAnLi9td0FwcGx5JztcbmltcG9ydCB7Y2hlY2tFbGVtZW50RXhpc3R9IGZyb20gJy4uL3V0aWwvY2hlY2tFbGVtZW50RXhpc3QnO1xuaW1wb3J0IHtjaGVja013Q29uZmlnfSBmcm9tICcuLi91dGlsL2NoZWNrTXdDb25maWcnO1xuaW1wb3J0IHtjaGVja05lZWRQcmV2aWV3fSBmcm9tICcuLi91dGlsL2NoZWNrTmVlZFByZXZpZXcnO1xuaW1wb3J0IHtsdWFDaGVja30gZnJvbSAnLi4vbHVhL2x1YUNoZWNrJztcblxuY29uc3Qge3dnQ2Fub25pY2FsTmFtZXNwYWNlLCB3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOe7memhtemdoua3u+WKoOmihOiniFxuY29uc3QgbXdBZGRQcmV2aWV3ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvLyDpooTop4jmqKHlvI/lj6rpgILnlKjkuo7ku6XkuIvpobXpnaLlhoXlrrnmqKHlnotcblx0aWYgKGNoZWNrTXdDb25maWcoJ3dnUGFnZUNvbnRlbnRNb2RlbCcsIFsnamF2YXNjcmlwdCcsICdqcycsICdqc29uJywgJ3RleHQnLCAnY3NzJywgJ3Nhbml0aXplZC1jc3MnXSkpIHtcblx0XHQvLyDmqKHlvI8x77ya6aG16Z2i6aKE6KeIXG5cdFx0aWYgKGNoZWNrRWxlbWVudEV4aXN0KCcucHJldmlld25vdGUnKSkge1xuXHRcdFx0Ly8g5qOA5p+l5piv5ZCm5Li66aKE6KeI5qih5byPXG5cdFx0XHQvLyDpooTop4jmnInlj6/og73mmK/lnKjpooTop4jlhbbku5bmnaHnm65cblx0XHRcdGNvbnN0IHBhdGhQYXRoOiBzdHJpbmcgPSBkZWNvZGVVUkkobXcudXRpbC5nZXRVcmwod2dQYWdlTmFtZSkpLnJlcGxhY2UoXG5cdFx0XHRcdG5ldyBSZWdFeHAoYF5cXFxcLz8ke213LnV0aWwuZ2V0VXJsKCcnKS5tYXRjaCgvW2Etel0rLyk/LlswXSA/PyAnJ31cXFxcL2ApLFxuXHRcdFx0XHQnJ1xuXHRcdFx0KTtcblxuXHRcdFx0Ly8g6Iul6aKE6KeI55qE6aG16Z2i5bm26Z2e5pys6Lqr77yM5YiZ5LiN5pi+56S66aKE6KeIXG5cdFx0XHRpZiAocGF0aFBhdGggIT09IHdnUGFnZU5hbWUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB3aWtpdGV4dDogc3RyaW5nID0gbHVhQ2hlY2soKTtcblx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHQvLyDoi6Xop6PmnpDnu5PmnpzpnZ7nqbrmiY3mlL7nva7pooTop4hcblx0XHRcdFx0YWRkTG9hZGluZ05vdGljZSgpOyAvLyDmlL7nva7mj5DnpLrvvIzmj5DnpLrkvb/nlKjogIXnrYnlvoVBSkFYXG5cdFx0XHRcdHZvaWQgbXdBZGRXaWtpVGV4dCh3aWtpdGV4dCwgd2dQYWdlTmFtZSwgdHJ1ZSk7IC8vIOiLpeWPluW+lyBfYWRkVGV4dCDliJnmmL7npLrpooTop4hcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCFjaGVja0VsZW1lbnRFeGlzdCgnLm13LV9hZGRUZXh0LWNvbnRlbnQnKSAmJiBjaGVja013Q29uZmlnKCd3Z0FjdGlvbicsICd2aWV3JykpIHtcblx0XHRcdC8vIOaooeW8jzLvvJrkuI3mlK/mjIHmmL7npLrnmoTnibnmrorpobXpnaJcblx0XHRcdC8vIOe7j+afpe+8jOS4jeatouaYr+aooeadv+agt+W8j++8jOaJgOacieacquW1jOWFpScjbXctY2xlYXJ5b3VyY2FjaGUn55qE6aG16Z2i55qG5peg5rOV5q2j5bi45pi+56S6XG5cdFx0XHRpZiAoIWNoZWNrTmVlZFByZXZpZXcoKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIOayoeaciemihOiniOW/heimgeaXtu+8jOebtOaOpeWBnOatoueoi+W6j++8jOS4jee7p+e7reWIpOaWre+8jOS7peaPkOmrmOaViOeOh1xuXHRcdFx0fVxuXG5cdFx0XHQvLyDoi6Xlt7LmnIkjbXctY2xlYXJ5b3VyY2FjaGXliJnlhYjmuIXmjonvvIzlkKbliJnkvJrlh7rnjrDkuKTkuKpNZWRpYVdpa2k6Q2xlYXJ5b3VyY2FjaGVcblx0XHRcdCRib2R5LmZpbmQoJyNtdy1jbGVhcnlvdXJjYWNoZScpLmh0bWwoJycpO1xuXG5cdFx0XHRpZiAoIWNoZWNrRWxlbWVudEV4aXN0KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykpIHtcblx0XHRcdFx0Ly8g6Z2e57yW6L6R5qih5byP5omN5omn6KGMICjpooTop4jkvb/nlKjkuIrmlrnnmoRpZuWMuuWdlylcblx0XHRcdFx0YWRkTG9hZGluZ05vdGljZSgpOyAvLyDmlL7nva7mj5DnpLrvvIzmj5DnpLrkvb/nlKjogIXnrYnlvoVBSkFYXG5cdFx0XHRcdHZvaWQgbXdBcHBseVJldmlzaW9uKHdnUGFnZU5hbWUpOyAvLyDkuLrkuoborqnljoblj7LniYjmnKzmraPluLjmmL7npLrvvIzkvb/nlKh3Z1JldmlzaW9uSWTlj5blvpflhoXlrrlcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGNoZWNrRWxlbWVudEV4aXN0KCcjbXctcmV2aXNpb24taW5mbycpICYmIGNoZWNrTXdDb25maWcoJ3dnQWN0aW9uJywgJ3ZpZXcnKSkge1xuXHRcdFx0Ly8g5qih5byPM++8mumhtemdouWOhuWPsueJiOacrOajgOinhu+8muWmgumcgOWkjeafpeeahOmhueebruS4uumhtemdouWOhuWPsueJiOacrO+8jOacrOW3peWFt+aPkOS+m+mhtemdouWOhuWPsueJiOacrOWGheWuueaYvuekuuaUr+aMgVxuXHRcdFx0Ly8g5pyJ5bWM5YWlJyNtdy1jbGVhcnlvdXJjYWNoZSfnmoTpobXpnaLnmoTljoblj7LniYjmnKzkvJrlj6rog73mmL7npLrmnIDmlrDniYjnmoQgX2FkZFRleHQg5Zug5q2k5omn6KGM5L+u5q2jXG5cdFx0XHRpZiAoIWNoZWNrRWxlbWVudEV4aXN0KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykpIHtcblx0XHRcdFx0Ly8g6Z2e57yW6L6R5qih5byP5omN5omn6KGMICjpooTop4jkvb/nlKjkuIrmlrnnmoRpZuWMuuWdlylcblx0XHRcdFx0JGJvZHkuZmluZCgnI213LWNsZWFyeW91cmNhY2hlJykuaHRtbChub3RpY2VMb2FkaW5nRWxlbWVudCk7IC8vIOW3ruW8guaooeW8j++8iOWQq+ajgOmYheS/ruiuoueJiOacrOWIoOmZpO+8ieeahOaPkuWFpeeCueS4jeWQjFxuXHRcdFx0XHR2b2lkIG13QXBwbHlSZXZpc2lvbih3Z1BhZ2VOYW1lKTsgLy8g5Li65LqG6K6p54m55a6a54mI5pys5q2j5bi45pi+56S677yM5L2/55Sod2dSZXZpc2lvbklk5Y+W5b6X5YaF5a65XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoY2hlY2tNd0NvbmZpZygnd2dQYWdlQ29udGVudE1vZGVsJywgWydzY3JpYnVudG8nLCAnbHVhJ10pKSB7XG5cdFx0Ly8g5qih5Z2X6aKE6KeI5Yqf6IO9XG5cdFx0aWYgKCFjaGVja05lZWRQcmV2aWV3KCkpIHtcblx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0fVxuXG5cdFx0aWYgKFxuXHRcdFx0Y2hlY2tFbGVtZW50RXhpc3QoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKSAmJlxuXHRcdFx0Y2hlY2tFbGVtZW50RXhpc3QoJ3RhYmxlLmRpZmYnKSAmJlxuXHRcdFx0IWNoZWNrRWxlbWVudEV4aXN0KCcucHJldmlld25vdGUnKSAmJlxuXHRcdFx0IWNoZWNrTXdDb25maWcoJ3dnQWN0aW9uJywgJ3ZpZXcnKVxuXHRcdCkge1xuXHRcdFx0JChub3RpY2VMb2FkaW5nRWxlbWVudCkuaW5zZXJ0QWZ0ZXIoJyN3aWtpRGlmZicpO1xuXHRcdFx0dm9pZCBtd0FkZEx1YVRleHQoXG5cdFx0XHRcdCgkYm9keS5maW5kKCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJykudmFsKCkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnJyxcblx0XHRcdFx0d2dQYWdlTmFtZSxcblx0XHRcdFx0dHJ1ZVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5tdy11bmRlbGV0ZS1yZXZpc2lvbicpKSB7XG5cdFx0Ly8g5qih5byPNO+8muW3suWIoOmhtemdoumihOiniFxuXHRcdC8vIOW3suWIoOWGheWuuemhtemdouaYr+eJueauiumhtemdou+8jOaXoOazleeUqOW4uOinhOaWueW8j+WIpOaWremhtemdouWGheWuueaooeWei1xuXHRcdGlmICghY2hlY2tOZWVkUHJldmlldygpKSB7XG5cdFx0XHRyZXR1cm47IC8vIOayoeaciemihOiniOW/heimgeaXtu+8jOebtOaOpeWBnOatoueoi+W6j++8jOS4jee7p+e7reWIpOaWre+8jOS7peaPkOmrmOaViOeOh1xuXHRcdH1cblxuXHRcdGlmIChjaGVja0VsZW1lbnRFeGlzdChbJy5tdy1oaWdobGlnaHQnLCAncHJlJywgJy5tdy1qc29uJ10pKSB7XG5cdFx0XHQvLyDnoa7orqTmraPlnKjpooTop4jlt7LliKDlhoXlrrlcblx0XHRcdGNvbnN0IHRleHRhcmVhQ29udGVudDogc3RyaW5nID0gJGJvZHkuZmluZCgndGV4dGFyZWEnKS52YWwoKSA/PyAnJzsgLy8g5bCd6K+V5Y+W5b6X5bey5Yig5YaF5a655rqQ5Luj56CBXG5cblx0XHRcdGxldCB3aWtpdGV4dDogc3RyaW5nID0gbHVhR2V0SlNPTndpa2l0ZXh0KHRleHRhcmVhQ29udGVudCk7XG5cdFx0XHR3aWtpdGV4dCB8fD0gbHVhR2V0Q1NTd2lraXRleHQodGV4dGFyZWFDb250ZW50KTtcblxuXHRcdFx0aWYgKHdpa2l0ZXh0KSB7XG5cdFx0XHRcdC8vIOiLpeWPluW+lyBfYWRkVGV4dCDliJnmmL7npLrpooTop4hcblx0XHRcdFx0YWRkTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0XHR2b2lkIG13QWRkV2lraVRleHQod2lraXRleHQsIG13LmNvbmZpZy5nZXQoJ3dnUmVsZXZhbnRQYWdlTmFtZScpLCB0cnVlKTtcblx0XHRcdH0gZWxzZSBpZiAoL21vZHVsZVsgX113aWtpdGV4dC4qX2FkZHRleHQvaS50ZXN0KCRib2R5LmZpbmQoJy5tdy1wYXJzZXItb3V0cHV0JykudGV4dCgpKSkge1xuXHRcdFx0XHQvLyDlsJ3or5VMdWHop6PmnpBcblx0XHRcdFx0Ly8g5pys5Yqf6IO955uu5YmN5rWL6K+V5q2j5bi46L+Q5L2cXG5cdFx0XHRcdC8vIOiLpeWTquWkqemihOiniOWPiOWkseaViO+8jOivt+WPlua2iOazqOmHiuS4i+aWuemCo+ihjFxuXHRcdFx0XHQvLyBtd0FkZEx1YVRleHQodGV4dGFyZWFDb250ZW50LCBtdy5jb25maWcuZ2V0KFwid2dSZWxldmFudFBhZ2VOYW1lXCIpLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSBpZiAoIWNoZWNrRWxlbWVudEV4aXN0KCcubXctZWRpdG5vdGljZScpICYmIGNoZWNrTXdDb25maWcoJ3dnQ2Fub25pY2FsTmFtZXNwYWNlJywgJ3NwZWNpYWwnKSkge1xuXHRcdC8vIOiLpeeJueauiumhtemdoue8uuS5j+e8lui+keaPkOekuu+8jOWImeihpeS4iue8lui+keaPkOekuiAo6Iul5a2Y5ZyoKVxuXHRcdGNvbnN0IHBhZ2VTdWJOYW1lOiBzdHJpbmcgPSB3Z1BhZ2VOYW1lLnJlcGxhY2UoL3NwZWNpYWw6W14vXSsvaSwgJycpO1xuXHRcdGlmICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSkge1xuXHRcdFx0Y29uc3QgZnVsbFBhZ2VOYW1lOiBzdHJpbmcgPSBgJHt3Z0Nhbm9uaWNhbE5hbWVzcGFjZX06JHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX1gO1xuXHRcdFx0dm9pZCBtd0FwcGx5Tm90aWNlKGZ1bGxQYWdlTmFtZSwgcGFnZVN1Yk5hbWUpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7IC8vIOmDveS4jeaYr+eahOaDheWGteWImeS4jeaYvuekuumihOiniFxuXHR9XG59O1xuXG5leHBvcnQge213QWRkUHJldmlld307XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Y2hlY2tOZWVkUHJldmlld30gZnJvbSAnLi91dGlsL2NoZWNrTmVlZFByZXZpZXcnO1xuaW1wb3J0IHtsdWFDaGVja30gZnJvbSAnLi9sdWEvbHVhQ2hlY2snO1xuaW1wb3J0IHttd0FkZEx1YVRleHR9IGZyb20gJy4vbXcvbXdBZGRUZXh0JztcbmltcG9ydCB7bm90aWNlTG9hZGluZ0VsZW1lbnR9IGZyb20gJy4vbm90aWNlJztcblxuY29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyDmnKzohJrmnKznmoRUZXN0Y2FzZVxuY29uc3Qgd2lraXRleHRQcmV2aWV3VGVzdGNhc2UgPSBhc3luYyAoaXNQcmV2aWV3OiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdC8vIOayoeacieWPr+mihOiniOWFg+e0oO+8jOmAgOWHuuOAglxuXHRpZiAoIWNoZWNrTmVlZFByZXZpZXcoKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRlc3RjYXNlTGlzdDogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50Pihcblx0XHQnLnNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZSdcblx0KTtcblx0Ly8g6Iul6aG16Z2i5Lit5rKh5pyJVGVzdGNhc2XvvIzpgIDlh7rjgIJcblx0aWYgKCF0ZXN0Y2FzZUxpc3QubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8g5pS26ZuG5L2N5LqO6aG16Z2i5Lit55qEVGVzdGNhc2XpooTop4jlhYPntKBcblx0Y29uc3QgdGVzdGNhc2VEYXRhTGlzdDoge1xuXHRcdGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXHRcdGxhbmc6IHN0cmluZztcblx0XHRjb2RlOiBzdHJpbmc7XG5cdH1bXSA9IFtdO1xuXG5cdGxldCBpOiBudW1iZXIgPSAwO1xuXHRmb3IgKGkgPSAwOyBpIDwgdGVzdGNhc2VMaXN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0Y29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQgPSB0ZXN0Y2FzZUxpc3RbaV07XG5cdFx0aWYgKCFlbGVtZW50KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBjb2RlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignLm13LWhpZ2hsaWdodCcpO1xuXHRcdGlmICghY29kZUVsZW1lbnQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHtjbGFzc05hbWV9ID0gY29kZUVsZW1lbnQ7XG5cdFx0aWYgKCFjbGFzc05hbWUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IFssIGNvZGVJZF0gPSAvbXctaGlnaGxpZ2h0LWxhbmctKFxcUyspLy5leGVjKGNsYXNzTmFtZSkgPz8gW107XG5cdFx0Y29uc3Qge2xlbmd0aH0gPSB0ZXN0Y2FzZURhdGFMaXN0O1xuXG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ByZXZpZXctaWQnLCBsZW5ndGgudG9TdHJpbmcoKSk7XG5cdFx0dGVzdGNhc2VEYXRhTGlzdFtsZW5ndGhdID0ge1xuXHRcdFx0ZWxlbWVudCxcblx0XHRcdGxhbmc6IGNvZGVJZD8udG9Mb3dlckNhc2UoKSA/PyAnJyxcblx0XHRcdGNvZGU6IGNvZGVFbGVtZW50LnRleHRDb250ZW50Py50cmltKCkgPz8gJycsXG5cdFx0fTsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0fVxuXG5cdC8vIOaVtOeQhumhtemdouS4reeahFRlc3RjYXNl6aKE6KeI5YWD57Sg77yM5bm25pS+572u4oCcW+i9veWFpeS4rV3igJ3mtojmga9cblx0bGV0IHBhY2thZ2VXaWtpdGV4dDogc3RyaW5nID0gJyc7XG5cdGZvciAoY29uc3QgdGVzdGNhc2VJdGVtIG9mIE9iamVjdC52YWx1ZXModGVzdGNhc2VEYXRhTGlzdCkpIHtcblx0XHRjb25zdCB7Y29kZSwgZWxlbWVudCwgbGFuZ30gPSB0ZXN0Y2FzZUl0ZW07XG5cblx0XHRpZiAoIWNvZGUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXG5cdFx0aWYgKFsnamF2YXNjcmlwdCcsICdqcycsICdjc3MnLCAnanNvbicsICd0ZXh0J10uaW5jbHVkZXModGVzdGNhc2VJdGVtLmxhbmcpKSB7XG5cdFx0XHRjb25zdCB3aWtpdGV4dDogc3RyaW5nID0gbHVhQ2hlY2soY29kZSwgbGFuZyk7XG5cdFx0XHRpZiAod2lraXRleHQpIHtcblx0XHRcdFx0Ly8g6Iul6Kej5p6Q57uT5p6c6Z2e56m65omN5pS+572u6aKE6KeIXG5cdFx0XHRcdCRlbGVtZW50LnByZXBlbmQobm90aWNlTG9hZGluZ0VsZW1lbnQpO1xuXHRcdFx0XHRwYWNrYWdlV2lraXRleHQgKz0gYDxkaXYgY2xhc3M9XCJzcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtJHtpfVwiPlxcbiR7d2lraXRleHR9XFxuPC9kaXY+YDtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKFsnbHVhJywgJ3NjcmlidW50byddLmluY2x1ZGVzKGxhbmcpKSB7XG5cdFx0XHR2b2lkIG13QWRkTHVhVGV4dChcblx0XHRcdFx0Y29kZSxcblx0XHRcdFx0d2dQYWdlTmFtZSxcblx0XHRcdFx0aXNQcmV2aWV3LFxuXHRcdFx0XHQoKCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAod2lraXRleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0JGVsZW1lbnQucHJlcGVuZCh3aWtpdGV4dCk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fSkoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHQvLyDlsIbmlbTnkIblroznmoRUZXN0Y2FzZemihOiniOWFg+e0oOe7n+S4gOWPkemAgUFQSeivt+axgu+8jOW5tuWwhui/lOWbnue7k+aenOWIhuWPkeWIsOWQhFRlc3RjYXNlXG5cdGlmIChwYWNrYWdlV2lraXRleHQpIHtcblx0XHRwYWNrYWdlV2lraXRleHQgPSBgPGRpdiBjbGFzcz1cInNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS11bmRlZmluZWRcIj4ke3BhY2thZ2VXaWtpdGV4dH08L2Rpdj5gO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRleHQ6IHBhY2thZ2VXaWtpdGV4dCxcblx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGlzUHJldmlldykge1xuXHRcdFx0XHRwYXJhbXMuZGlzYWJsZWVkaXRzZWN0aW9uID0gdHJ1ZTtcblx0XHRcdFx0cGFyYW1zLnByZXZpZXcgPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJzZWRXaWtpdGV4dDogc3RyaW5nID0gKGRhdGFbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmcpLnRyaW0oKTtcblx0XHRcdGlmIChwYXJzZWRXaWtpdGV4dCkge1xuXHRcdFx0XHRjb25zdCAkcGFyc2VkRWxlbWVudDogSlF1ZXJ5ID0gJChwYXJzZWRXaWtpdGV4dCk7XG5cdFx0XHRcdGZvciAoY29uc3QgW2tleSwgdGVzdGNhc2VJdGVtXSBvZiBPYmplY3QuZW50cmllcyh0ZXN0Y2FzZURhdGFMaXN0KSkge1xuXHRcdFx0XHRcdGNvbnN0IHtlbGVtZW50LCBsYW5nfSA9IHRlc3RjYXNlSXRlbTtcblxuXHRcdFx0XHRcdGlmICghWydqYXZhc2NyaXB0JywgJ2pzJywgJ3RleHQnLCAnY3NzJywgJ2pzb24nXS5pbmNsdWRlcyhsYW5nKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkcGFyc2VkRWxlbWVudC5maW5kKFxuXHRcdFx0XHRcdFx0YC5zcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtdW5kZWZpbmVkID4gLnNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS0ke2tleX1gXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpZiAoISRlbGVtZW50Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29uc3QgJGFkZFRhcmdldDogSlF1ZXJ5ID0gJChlbGVtZW50KS5maW5kKCcjc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZycpO1xuXHRcdFx0XHRcdCRhZGRUYXJnZXQuaHRtbCgkZWxlbWVudC5odG1sKCkpO1xuXHRcdFx0XHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRhZGRUYXJnZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG59O1xuXG5leHBvcnQge3dpa2l0ZXh0UHJldmlld1Rlc3RjYXNlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNDZixJQUFNQyx3QkFBd0I7QUFDOUIsSUFBTUMsc0JBQXNCOztBQ0RuQyxJQUFBQyxxQkFBa0JDLFFBQUFKLFFBQUEsZ0JBQUEsR0FBQSxDQUFBOzs7Ozs7QUNEbEIsSUFBQUssb0JBQXVCTCxRQUFBLGlCQUFBO0FBRXZCLElBQU1NLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUYsa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTTCxrQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRSxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QURmQSxJQUFNTixTQUFTQSxNQUNk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QUMsQ0FBQyxjQUFjLE1BQU0sUUFBUSxPQUFPLE1BQU0sRUFBRTlHLFNBQVNELElBQUksR0FBRztBQUNoRTtZQUNEO0FBRUEsa0JBQU0xRSxXQUFnQzRMLGVBQWUzTCxLQUFBLHFGQUFBcUIsT0FDaUMxRCxHQUFHLENBQ3pGO0FBQ0EsZ0JBQUksQ0FBQ29DLFNBQVNnQyxRQUFRO0FBQ3JCO1lBQ0Q7QUFFQSxrQkFBTStKLGFBQXFCbE0sRUFBRVksT0FBTyxFQUFFUixLQUFLLGtDQUFrQztBQUM3RThMLHVCQUFXaE0sS0FBS0MsU0FBU0QsS0FBSyxDQUFDO0FBQy9CRyxlQUFHQyxLQUFLLGtCQUFrQixFQUFFQyxLQUFLMkwsVUFBVTtVQUM1QztRQUNEO01BQ0QsUUFBUTtNQUFDO0lBQ1Y7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQS9ITTFCLHlCQUFBMkIsTUFBQTtBQUFBLFdBQUExQixNQUFBbkUsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBbEJMTixNQUFBLEdBQUt0SixtQkFBQW1QLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxnQkFBZ0J2TSxPQUFzQztBQUVsRjBKLGVBQWExSixLQUFLO0FBRWxCLE9BQUt5Syx3QkFBd0IsSUFBSTtBQUNsQyxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDYiLCAicmVxdWlyZSIsICJwcmV2aWV3TG9hZGluZ0NvbnRlbnQiLCAicHJldmlld0xvYWRpbmdJbm5lciIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiRmFpbGVkIiwgImxvY2FsaXplIiwgImVuIiwgIkxvYWRpbmciLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJzcmMiLCAiQWxlcnRfZGVmYXVsdCIsICJkZWNvZGluZyIsICJ3aWR0aCIsICJoZWlnaHQiLCAiaWQiLCAiY2xhc3NOYW1lIiwgIkFqYXhfbG9hZGVyX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImNoZWNrRWxlbWVudEV4aXN0IiwgInNlbGVjdG9ycyIsICJzZWxlY3RvckFycmF5IiwgImdlbmVyYXRlQXJyYXkiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAic2VsZWN0b3IiLCAidmFsdWUiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJlcnIiLCAiZSIsICJmIiwgImFkZFBhcnNlZFdpa2l0ZXh0IiwgInBhcnNlZFdpa2l0ZXh0IiwgIiRib2R5IiwgIiQiLCAiJHBhcnNlZFdpa2l0ZXh0IiwgImh0bWwiLCAiJGVsZW1lbnQiLCAiZmluZCIsICJtdyIsICJob29rIiwgImZpcmUiLCAiYXBwZW5kIiwgIm5vdGljZUZhaWxFbGVtZW50IiwgIm5vdGljZUxvYWRpbmdFbGVtZW50IiwgInJlcGxhY2VET00iLCAiZWxlbWVudCIsICJhZGRMb2FkaW5nTm90aWNlIiwgImxvYWRpbmdGYWlsTm90aWNlIiwgInJlbW92ZUxvYWRpbmdOb3RpY2UiLCAidmVyc2lvbiIsICJ3aWtpVGV4dEtleSIsICJsdWFBZGRUZXh0IiwgImlucHV0U3RyaW5nIiwgIm5ld1N0cmluZyIsICJpc0VzY2FwZSIsICJlc2NhcGVTdHJpbmciLCAiSlNPTiIsICJwYXJzZSIsICJjb25jYXQiLCAic3RyaW5naWZ5IiwgInJlcGxhY2UiLCAibHVhR2V0U3RyaW5nIiwgInRlc3RTdHJpbmdFeGVjQXJyYXkiLCAiZXhlYyIsICJ0ZXN0U3RyaW5nIiwgInNsaWNlIiwgIk1hdGgiLCAibWF4IiwgImxlbmd0aCIsICJ0cmltQ2hlY2siLCAidHJpbSIsICJmaXJzdENoYXIiLCAiY2hhckF0IiwgImF0IiwgImx1YUdldENvbnRlbnRUZXh0IiwgIndpa2l0ZXh0IiwgIlJlZ0V4cCIsICJzdWJzdHJpbmciLCAidGVtcFRleHQiLCAibHVhR2V0T2JqVGV4dCIsICJsdWFHZXRDU1N3aWtpdGV4dCIsICJfcmVmIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJjc3NUZXh0IiwgImx1YUdldEpTT053aWtpdGV4dCIsICJfcmVmMiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QyIiwgIkpTT05UZXh0IiwgImpzb25EYXRhIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJ0ZXN0IiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMyIiwgImsiLCAidiIsICJsdWFHZXRKU3dpa2l0ZXh0IiwgIl9yZWYzIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDMiLCAianNUZXh0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhcGkiLCAiaW5pdE13QXBpIiwgIndnVXNlckxhbmd1YWdlIiwgIndnVXNlclZhcmlhbnQiLCAiY29uZmlnIiwgImdldCIsICJnZXRMYW5ndWFnZSIsICJsYW5nIiwgImluY2x1ZGVzIiwgInNraW4iLCAibXdBZGRXaWtpVGV4dCIsICJfcmVmNCIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYWdlTmFtZSIsICJpc1ByZXZpZXciLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aXRsZSIsICJjb250ZW50bW9kZWwiLCAidGV4dCIsICJwcm9wIiwgInVzZWxhbmciLCAidXNlc2tpbiIsICJkaXNhYmxlZWRpdHNlY3Rpb24iLCAicHJldmlldyIsICJfZGF0YSRwYXJzZSIsICJkYXRhIiwgIl94IiwgIl94MiIsICJfeDMiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIm13QWRkTHVhVGV4dCIsICJfcmVmNSIsICJjYWxsQmFjayIsICJ0ZW1wTW9kdWxlTmFtZSIsICJtb2R1bGVDYWxsIiwgIl9kYXRhJHBhcnNlMiIsICJ0ZW1wbGF0ZXNhbmRib3h0aXRsZSIsICJ0ZW1wbGF0ZXNhbmRib3h0ZXh0IiwgInRlbXBsYXRlc2FuZGJveGNvbnRlbnRtb2RlbCIsICJ0ZW1wbGF0ZXNhbmRib3hjb250ZW50Zm9ybWF0IiwgInNlYXJjaCIsICJfeDQiLCAiX3g1IiwgIl94NiIsICJfeDciLCAid2dQYWdlQ29udGVudE1vZGVsIiwgImx1YUNoZWNrIiwgImNvbnRlbnRNb2RlbCIsICJ0b0xvd2VyQ2FzZSIsICJza2luMiIsICJ3Z1JldmlzaW9uSWQiLCAibXdBcHBseU5vdGljZSIsICJfcmVmNiIsICJjdXJyZW50UGFnZU5hbWUiLCAicGFnZVN1Yk5hbWUiLCAiX2RhdGEkcGFyc2UzIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgIl94OCIsICJfeDkiLCAibXdBcHBseVJldmlzaW9uIiwgIl9yZWY3IiwgIl9kYXRhJHBhcnNlNCIsICJvbGRpZCIsICJwYWdlQ29udGVudCIsICJfeDEwIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJhbGxNd0NvbmZpZyIsICJjaGVja013Q29uZmlnIiwgImNvbmZpZ0tleSIsICJleHBlY3RDb25maWciLCAibXdDb25maWciLCAiU3RyaW5nIiwgImNoZWNrTmVlZFByZXZpZXciLCAiYm9keSIsICJpbm5lckhUTUwiLCAid2dDYW5vbmljYWxOYW1lc3BhY2UiLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAid2dQYWdlTmFtZSIsICJtd0FkZFByZXZpZXciLCAiX213JHV0aWwkZ2V0VXJsJG1hdGNoIiwgIl9tdyR1dGlsJGdldFVybCRtYXRjaDIiLCAicGF0aFBhdGgiLCAiZGVjb2RlVVJJIiwgInV0aWwiLCAiZ2V0VXJsIiwgIm1hdGNoIiwgIl8kYm9keSRmaW5kJHZhbCIsICJpbnNlcnRBZnRlciIsICJ2YWwiLCAiXyRib2R5JGZpbmQkdmFsMiIsICJ0ZXh0YXJlYUNvbnRlbnQiLCAiZnVsbFBhZ2VOYW1lIiwgIndnUGFnZU5hbWUyIiwgIndpa2l0ZXh0UHJldmlld1Rlc3RjYXNlIiwgIl9yZWY4IiwgInRlc3RjYXNlTGlzdCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInRlc3RjYXNlRGF0YUxpc3QiLCAiaSIsICJfZXhlYyIsICJfY29kZUlkJHRvTG93ZXJDYXNlIiwgIl9jb2RlRWxlbWVudCR0ZXh0Q29udCIsICJfY29kZUVsZW1lbnQkdGV4dENvbnQyIiwgImNvZGVFbGVtZW50IiwgImNvZGVJZCIsICJzZXRBdHRyaWJ1dGUiLCAidG9TdHJpbmciLCAiY29kZSIsICJ0ZXh0Q29udGVudCIsICJwYWNrYWdlV2lraXRleHQiLCAiX2kzIiwgIl9PYmplY3QkdmFsdWVzIiwgInZhbHVlcyIsICJ0ZXN0Y2FzZUl0ZW0iLCAicHJlcGVuZCIsICJfZGF0YSRwYXJzZTUiLCAiJHBhcnNlZEVsZW1lbnQiLCAiX2k0IiwgIl9PYmplY3QkZW50cmllczMiLCAiJGFkZFRhcmdldCIsICJfeDExIiwgImdldEJvZHkiLCAidGhlbiIsICJzcGVjaWFsV2lraXRleHQiXQp9Cg==
