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
var previewLoadingContent = "SpecialWikitext-module__preview-loading__content_0PrDlG__4100";
var previewLoadingInner = "SpecialWikitext-module__preview-loading__inner_0PrDlG__4100";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NwZWNpYWxXaWtpdGV4dC9TcGVjaWFsV2lraXRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9jb21wb25lbnRzL1NwZWNpYWxXaWtpdGV4dC5tb2R1bGUubGVzcyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvZ2VuZXJhdGVFbGVtZW50cy50c3giLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tFbGVtZW50RXhpc3QudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvYWRkUGFyc2VkV2lraXRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL25vdGljZS50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L29wdGlvbnMuanNvbiIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUFkZFRleHQudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL2x1YS9sdWFHZXRUZXh0LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9hcGkudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvZ2V0TGFuZ3VhZ2UudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL213L213QWRkVGV4dC50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbHVhL2x1YUNoZWNrLnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy9tdy9td0FwcGx5LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy91dGlsL2NoZWNrTXdDb25maWcudHMiLCAic3JjL1NwZWNpYWxXaWtpdGV4dC9tb2R1bGVzL3V0aWwvY2hlY2tOZWVkUHJldmlldy50cyIsICJzcmMvU3BlY2lhbFdpa2l0ZXh0L21vZHVsZXMvbXcvbXdBZGRQcmV2aWV3LnRzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvbW9kdWxlcy93aWtpdGV4dFByZXZpZXdUZXN0Y2FzZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHttd0FkZFByZXZpZXd9IGZyb20gJy4vbW9kdWxlcy9tdy9td0FkZFByZXZpZXcnO1xuaW1wb3J0IHt3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZX0gZnJvbSAnLi9tb2R1bGVzL3dpa2l0ZXh0UHJldmlld1Rlc3RjYXNlJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzcGVjaWFsV2lraXRleHQoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdC8vIOaJp+ihjOmihOiniFxuXHRtd0FkZFByZXZpZXcoJGJvZHkpO1xuXHQvLyDmo4Dmn6XmtYvor5XmoLfkvotcblx0dm9pZCB3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSh0cnVlKTtcbn0pO1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvU3BlY2lhbFdpa2l0ZXh0L2NvbXBvbmVudHMvU3BlY2lhbFdpa2l0ZXh0Lm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgcHJldmlld0xvYWRpbmdDb250ZW50ID0gXCJTcGVjaWFsV2lraXRleHQtbW9kdWxlX19wcmV2aWV3LWxvYWRpbmdfX2NvbnRlbnRfMFByRGxHX180MTAwXCI7XG5leHBvcnQgY29uc3QgcHJldmlld0xvYWRpbmdJbm5lciA9IFwiU3BlY2lhbFdpa2l0ZXh0LW1vZHVsZV9fcHJldmlldy1sb2FkaW5nX19pbm5lcl8wUHJEbEdfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInByZXZpZXdMb2FkaW5nQ29udGVudFwiOiBwcmV2aWV3TG9hZGluZ0NvbnRlbnQsXG4gIFwicHJldmlld0xvYWRpbmdJbm5lclwiOiBwcmV2aWV3TG9hZGluZ0lubmVyXG59O1xuICAgICAgIiwgImltcG9ydCB7cHJldmlld0xvYWRpbmdDb250ZW50LCBwcmV2aWV3TG9hZGluZ0lubmVyfSBmcm9tICcuL1NwZWNpYWxXaWtpdGV4dC5tb2R1bGUubGVzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IGFqYXhMb2FkZXIgZnJvbSAnLi4vaW1hZ2VzL0FqYXgtbG9hZGVyLmdpZic7XG5pbXBvcnQgYWxlcnQgZnJvbSAnLi4vaW1hZ2VzL0FsZXJ0LnBuZyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IEZhaWxlZCA9ICgpID0+IChcblx0PD5cblx0XHQ8aW1nIHNyYz17YWxlcnR9IGRlY29kaW5nPVwiYXN5bmNcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiAvPlxuXHRcdDxzcGFuPiZuYnNwO3tnZXRNZXNzYWdlKCdGYWlsZWQnKX08L3NwYW4+XG5cdDwvPlxuKTtcblxuY29uc3QgTG9hZGluZyA9ICgpID0+IChcblx0PGRpdiBpZD1cInNwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmdcIj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT17WydxdW90ZWJveCcsIHByZXZpZXdMb2FkaW5nSW5uZXJdfSBpZD1cInNwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmdfX2lubmVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cHJldmlld0xvYWRpbmdDb250ZW50fSBpZD1cInNwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmdfX2NvbnRlbnRcIj5cblx0XHRcdFx0PGltZyBzcmM9e2FqYXhMb2FkZXJ9IGRlY29kaW5nPVwiYXN5bmNcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiAvPlxuXHRcdFx0XHQ8c3Bhbj4mbmJzcDt7Z2V0TWVzc2FnZSgnTG9hZGluZycpfTwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbik7XG5cbmV4cG9ydCB7RmFpbGVkLCBMb2FkaW5nfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RmFpbGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ZhaWxlZCB0byBsb2FkIHByZXZpZXcuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mihOiniOWKoOi9veWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICfpoJDopr3ovInlhaXlpLHotKUnLFxuXHRcdH0pLFxuXHRcdExvYWRpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZyBwcmV2aWV3Li4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mihOiniOWKoOi9veS4reKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfpoJDopr3ovInlhaXkuK3igKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbi8vIOajgOafpXNlbGVjdG9y5a+55bqU55qERE9N5a+56LGh5piv5ZCm5a2Y5ZyoXG5jb25zdCBjaGVja0VsZW1lbnRFeGlzdCA9IChzZWxlY3RvcnM6IHN0cmluZyB8IHN0cmluZ1tdKTogYm9vbGVhbiA9PiB7XG5cdGNvbnN0IHNlbGVjdG9yQXJyYXk6IHN0cmluZ1tdID0gZ2VuZXJhdGVBcnJheShzZWxlY3RvcnMpO1xuXG5cdGZvciAoY29uc3Qgc2VsZWN0b3Igb2Ygc2VsZWN0b3JBcnJheSkge1xuXHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHtjaGVja0VsZW1lbnRFeGlzdH07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Y2hlY2tFbGVtZW50RXhpc3R9IGZyb20gJy4vY2hlY2tFbGVtZW50RXhpc3QnO1xuXG4vLyDlsIbop6PmnpDlkI7nmoR3aWtpdGV4dOWKoOWFpemhtemdouS4rVxuY29uc3QgYWRkUGFyc2VkV2lraXRleHQgPSAocGFyc2VkV2lraXRleHQ6IHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudCk6IHZvaWQgPT4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cdGNvbnN0ICRwYXJzZWRXaWtpdGV4dDogSlF1ZXJ5ID0gJCgpLmh0bWwocGFyc2VkV2lraXRleHQpO1xuXG5cdGlmIChjaGVja0VsZW1lbnRFeGlzdCgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmcnKSkge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkYm9keS5maW5kKCcjc3BlY2lhbHdpa2l0ZXh0LXByZXZpZXctbG9hZGluZycpO1xuXHRcdCRlbGVtZW50Lmh0bWwocGFyc2VkV2lraXRleHQpO1xuXHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRlbGVtZW50KTtcblx0fSBlbHNlIGlmIChjaGVja0VsZW1lbnRFeGlzdCgnLmRpZmYtY3VycmVudHZlcnNpb24tdGl0bGUnKSkge1xuXHRcdCRib2R5LmZpbmQoJy5kaWZmLWN1cnJlbnR2ZXJzaW9uLXRpdGxlJykuYXBwZW5kKCRwYXJzZWRXaWtpdGV4dCk7XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5wcmV2aWV3bm90ZScpKSB7XG5cdFx0JGJvZHkuZmluZCgnLnByZXZpZXdub3RlJykuYXBwZW5kKCRwYXJzZWRXaWtpdGV4dCk7XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5tdy11bmRlbGV0ZS1yZXZpc2lvbicpKSB7XG5cdFx0JGJvZHkuZmluZCgnLm13LXVuZGVsZXRlLXJldmlzaW9uJykuYXBwZW5kKCRwYXJzZWRXaWtpdGV4dCk7XG5cdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJyNtdy1jb250ZW50LXRleHQnKSkge1xuXHRcdCRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKS5hcHBlbmQoJHBhcnNlZFdpa2l0ZXh0KTtcblx0fVxuXG5cdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRwYXJzZWRXaWtpdGV4dCk7XG59O1xuXG5leHBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fTtcbiIsICJpbXBvcnQge0ZhaWxlZCwgTG9hZGluZ30gZnJvbSAnLi4vY29tcG9uZW50cy9nZW5lcmF0ZUVsZW1lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fSBmcm9tICcuL3V0aWwvYWRkUGFyc2VkV2lraXRleHQnO1xuXG4vLyBbW0ZpbGU6R25vbWUtZGlhbG9nLXdhcm5pbmcyLnN2Z3wzMnB4XV1cbi8vIC17emgtaGFuczrpooTop4jliqDovb3lpLHotKU7emgtaGFudDrpoJDopr3ovInlhaXlpLHotKU7fS1cbmNvbnN0IG5vdGljZUZhaWxFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQgPSBGYWlsZWQoKTtcblxuLy8ge3tRdW90ZSBib3ggfHF1b3RlICA9IC17emgtaGFuczrpooTop4jliqDovb3kuK07emgtaGFudDrpoJDopr3ovInlhaXkuK07fS3igKbigKYgfHdpZHRoICA9IDUwJSB8YWxpZ24gID0gY2VudGVyfX1cbmNvbnN0IG5vdGljZUxvYWRpbmdFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQgPSBMb2FkaW5nKCk7XG5cbi8vIOaUueWKqERPTeWGheWuuVxuY29uc3QgcmVwbGFjZURPTSA9IChzZWxlY3Rvcjogc3RyaW5nLCBlbGVtZW50PzogUmVhY3QuUmVhY3RFbGVtZW50KTogdm9pZCA9PiB7XG5cdCQoc2VsZWN0b3IpLmh0bWwoZWxlbWVudCA/PyAnJyk7XG59O1xuXG4vLyDliqDlhaXigJxb6L295YWl5LitXeKAneeahOaPkOekulxuY29uc3QgYWRkTG9hZGluZ05vdGljZSA9ICgpOiB2b2lkID0+IHtcblx0YWRkUGFyc2VkV2lraXRleHQobm90aWNlTG9hZGluZ0VsZW1lbnQpO1xufTtcblxuLy8g6L295YWl6ZSZ6K+v55qE5o+Q56S6XG5jb25zdCBsb2FkaW5nRmFpbE5vdGljZSA9ICgpOiB2b2lkID0+IHtcblx0cmVwbGFjZURPTSgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmdfX2NvbnRlbnQnLCBub3RpY2VGYWlsRWxlbWVudCk7XG59O1xuXG4vLyDnp7vpmaTigJxb6L295YWl5LitXeKAneeahOaPkOekulxuY29uc3QgcmVtb3ZlTG9hZGluZ05vdGljZSA9ICgpOiB2b2lkID0+IHtcblx0cmVwbGFjZURPTSgnI3NwZWNpYWx3aWtpdGV4dC1wcmV2aWV3LWxvYWRpbmcnKTtcbn07XG5cbmV4cG9ydCB7bm90aWNlTG9hZGluZ0VsZW1lbnQsIGFkZExvYWRpbmdOb3RpY2UsIGxvYWRpbmdGYWlsTm90aWNlLCByZW1vdmVMb2FkaW5nTm90aWNlfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiLFxuXHRcIndpa2lUZXh0S2V5XCI6IFwiX2FkZFRleHRcIlxufVxuIiwgIi8vIOWQiOW5tuWkmuS4qndpa2l0ZXh05a2X56ym5LiyXG5jb25zdCBsdWFBZGRUZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcsIG5ld1N0cmluZzogc3RyaW5nLCBpc0VzY2FwZTogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nID0+IHtcblx0aWYgKG5ld1N0cmluZykge1xuXHRcdGlmIChpbnB1dFN0cmluZykge1xuXHRcdFx0aW5wdXRTdHJpbmcgKz0gJ1xcbic7XG5cdFx0fVxuXG5cdFx0aWYgKGlzRXNjYXBlKSB7XG5cdFx0XHRjb25zdCBbZXNjYXBlU3RyaW5nXSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdGBbJHtKU09OLnN0cmluZ2lmeShcblx0XHRcdFx0XHQvLyBMdWHkuI3mlK/mjIFcXHXjgIFcXHjovazkuYnlrZfnrKZcblx0XHRcdFx0XHRuZXdTdHJpbmcucmVwbGFjZSgvXFxcXChbdXhdKS9naSwgJyQxJylcblx0XHRcdFx0KS5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpfV1gXG5cdFx0XHQpIGFzIFtzdHJpbmddO1xuXHRcdFx0bmV3U3RyaW5nID0gZXNjYXBlU3RyaW5nO1xuXHRcdH1cblxuXHRcdGlucHV0U3RyaW5nICs9IG5ld1N0cmluZztcblx0fVxuXG5cdHJldHVybiBpbnB1dFN0cmluZztcbn07XG5cbmV4cG9ydCB7bHVhQWRkVGV4dH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtsdWFBZGRUZXh0fSBmcm9tICcuL2x1YUFkZFRleHQnO1xuXG4vLyDor7vlj5Z3aWtpdGV4dOWtl+espuS4su+8jOW5tuW/veeVpeazqOmHiuWwvumDqFxuY29uc3QgbHVhR2V0U3RyaW5nID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCB0ZXN0U3RyaW5nRXhlY0FycmF5OiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsID0gL1teXFxuXSpcXCpcXC8vLmV4ZWMoaW5wdXRTdHJpbmcpO1xuXG5cdGxldCB0ZXN0U3RyaW5nOiBzdHJpbmcgPSBpbnB1dFN0cmluZztcblx0aWYgKHRlc3RTdHJpbmdFeGVjQXJyYXkpIHtcblx0XHRbdGVzdFN0cmluZ10gPSB0ZXN0U3RyaW5nRXhlY0FycmF5O1xuXHRcdHRlc3RTdHJpbmcgPSB0ZXN0U3RyaW5nLnNsaWNlKDAsIE1hdGgubWF4KDAsIHRlc3RTdHJpbmcubGVuZ3RoIC0gMikpO1xuXHR9XG5cblx0Y29uc3QgdHJpbUNoZWNrOiBzdHJpbmcgPSB0ZXN0U3RyaW5nLnRyaW0oKTtcblx0Y29uc3QgZmlyc3RDaGFyOiBzdHJpbmcgPSB0cmltQ2hlY2suY2hhckF0KDApO1xuXHRpZiAoZmlyc3RDaGFyID09PSB0cmltQ2hlY2suYXQoLTEpICYmIChmaXJzdENoYXIgPT09IFwiJ1wiIHx8IGZpcnN0Q2hhciA9PT0gJ1wiJykpIHtcblx0XHRyZXR1cm4gdHJpbUNoZWNrLnNsaWNlKDEsIDEgKyB0cmltQ2hlY2subGVuZ3RoIC0gMik7XG5cdH1cblxuXHRyZXR1cm4gdGVzdFN0cmluZy50cmltKCk7XG59O1xuXG4vLyDmjZXojrdDU1PmlofmnKzkuK3nrKblkIhgPHtPUFRJT05TLndpa2lUZXh0S2V5fT4gIHsgY29udGVudO+8mlwiWFhYXCIgfWDmqKHlvI/nmoTlrZfnrKbkuLJcbmNvbnN0IGx1YUdldENvbnRlbnRUZXh0ID0gKGlucHV0U3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdHRyeSB7XG5cdFx0aW5wdXRTdHJpbmcucmVwbGFjZShcblx0XHRcdG5ldyBSZWdFeHAoYCR7T1BUSU9OUy53aWtpVGV4dEtleX1cXFxccypcXFxce1teY1xcXFx9XSpjb250ZW50XFxcXHMqOlxcXFxzKlteXFxuXSpgLCAnZycpLFxuXHRcdFx0KHN1YnN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdFx0Y29uc3QgdGVtcFRleHQ6IHN0cmluZyA9ICgvY29udGVudFxccyo6XFxzKlteXFxuXSovLmV4ZWMoc3Vic3RyaW5nKSB8fCBbJ2NvbnRlbnQ6J10pWzBdXG5cdFx0XHRcdFx0LnJlcGxhY2UoL15bXFxzO31dK3xbXFxzO31dKyQvZywgJycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xccypjb250ZW50XFxzKjpcXHMqLywgJycpO1xuXG5cdFx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICdcXG4nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2lraXRleHQgKz0gbHVhR2V0U3RyaW5nKHRlbXBUZXh0KTtcblxuXHRcdFx0XHRyZXR1cm4gc3Vic3RyaW5nO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDmjZXojrflrZfnrKbkuLLljJbnmoTlr7nosaHkuK3nrKblkIhgPHtPUFRJT05TLndpa2lUZXh0S2V5fT7vvJ1YWFhg5oiWYDx7T1BUSU9OUy53aWtpVGV4dEtleX0+77yaWFhYYOaooeW8j+eahOWtl+espuS4siAo5rOo6YeK5Lul5YWo6KeS5a2X56ym5Luj5pu/77yM6YG/5YWN6KKr5o2V6I63KVxuY29uc3QgbHVhR2V0T2JqVGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHR0cnkge1xuXHRcdGlucHV0U3RyaW5nLnJlcGxhY2UoXG5cdFx0XHRuZXcgUmVnRXhwKGAke09QVElPTlMud2lraVRleHRLZXl9XFxcXHMqW1xcXFw9Ol1cXFxccypbXlxcbl0qYCwgJ2cnKSxcblx0XHRcdChzdWJzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdGNvbnN0IHRlbXBUZXh0OiBzdHJpbmcgPSBzdWJzdHJpbmdcblx0XHRcdFx0XHQucmVwbGFjZSgvXltcXHM7fV0rfFtcXHM7fV0rJC9nLCAnJylcblx0XHRcdFx0XHQucmVwbGFjZShuZXcgUmVnRXhwKGAke09QVElPTlMud2lraVRleHRLZXl9XFxcXHMqW1xcXFw9Ol1cXFxccypgKSwgJycpO1xuXG5cdFx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICdcXG4nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2lraXRleHQgKz0gbHVhR2V0U3RyaW5nKHRlbXBUZXh0KTtcblxuXHRcdFx0XHRyZXR1cm4gc3Vic3RyaW5nO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDliIbmnpBDU1PkuK3nrKblkIjmnaHku7bnmoR3aWtpdGV4dFxuY29uc3QgbHVhR2V0Q1NTd2lraXRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QgY3NzVGV4dDogc3RyaW5nID1cblx0XHQoaW5wdXRTdHJpbmcgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVGV4dEFyZWFFbGVtZW50PigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpPy52YWx1ZSkgPz8gJyc7XG5cdGlmICghY3NzVGV4dC50cmltKCkpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHQvLyDljLnphY0gPHtPUFRJT05TLndpa2lUZXh0S2V5fT4geyBjb250ZW5077yaXCJYWFhcIiB9IOaooeW8j1xuXHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIGx1YUdldENvbnRlbnRUZXh0KGNzc1RleHQpLCB0cnVlKTtcblx0Ly8g5Yy56YWNIC8qIDx7T1BUSU9OUy53aWtpVGV4dEtleX0+77yaWFhYICovIOaooeW8j1xuXHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIGx1YUdldE9ialRleHQoY3NzVGV4dCksIHRydWUpO1xuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDliIbmnpBKU09O5Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldEpTT053aWtpdGV4dCA9IChpbnB1dFN0cmluZzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblxuXHRjb25zdCBKU09OVGV4dDogc3RyaW5nID1cblx0XHQoaW5wdXRTdHJpbmcgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MVGV4dEFyZWFFbGVtZW50PigndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpPy52YWx1ZSkgPz8gJyc7XG5cdGlmICghSlNPTlRleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoSlNPTlRleHQpIGFzIG9iamVjdDtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhqc29uRGF0YSkpIHtcblx0XHRcdGlmIChuZXcgUmVnRXhwKE9QVElPTlMud2lraVRleHRLZXkpLnRlc3Qoa2V5KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgdmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyDoi6XplK7lgLzmmK/lr7nosaFcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlIGFzIG9iamVjdCkpIHtcblx0XHRcdFx0XHRpZiAobmV3IFJlZ0V4cChPUFRJT05TLndpa2lUZXh0S2V5KS50ZXN0KGspICYmIHR5cGVvZiB2ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCB2KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG4vLyDliIbmnpBKYXZhU2NyaXB05Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldEpTd2lraXRleHQgPSAoaW5wdXRTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0Y29uc3QganNUZXh0OiBzdHJpbmcgPVxuXHRcdChpbnB1dFN0cmluZyB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCd0ZXh0YXJlYVtuYW1lPXdwVGV4dGJveDFdJyk/LnZhbHVlKSA/PyAnJztcblx0aWYgKCFqc1RleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCBsdWFHZXRPYmpUZXh0KGpzVGV4dCksIHRydWUpO1xuXG5cdHJldHVybiB3aWtpdGV4dC50cmltKCk7XG59O1xuXG5leHBvcnQge2x1YUdldENTU3dpa2l0ZXh0LCBsdWFHZXRKU09Od2lraXRleHQsIGx1YUdldEpTd2lraXRleHR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgU3BlY2lhbFdpa2l0ZXh0LyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiY29uc3Qge3dnVXNlckxhbmd1YWdlLCB3Z1VzZXJWYXJpYW50fSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgZ2V0TGFuZ3VhZ2UgPSAoKTogc3RyaW5nID0+IHtcblx0Y29uc3QgbGFuZzogc3RyaW5nID0gd2dVc2VyTGFuZ3VhZ2U7XG5cblx0aWYgKGxhbmcuaW5jbHVkZXMoJ3poJykpIHtcblx0XHRyZXR1cm4gd2dVc2VyVmFyaWFudCBhcyBzdHJpbmc7XG5cdH1cblxuXHRyZXR1cm4gbGFuZztcbn07XG5cbmV4cG9ydCB7Z2V0TGFuZ3VhZ2V9O1xuIiwgImltcG9ydCB7bG9hZGluZ0ZhaWxOb3RpY2UsIHJlbW92ZUxvYWRpbmdOb3RpY2V9IGZyb20gJy4uL25vdGljZSc7XG5pbXBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fSBmcm9tICcuLi91dGlsL2FkZFBhcnNlZFdpa2l0ZXh0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSAnLi4vdXRpbC9nZXRMYW5ndWFnZSc7XG5cbmNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5Yqg5YWl6aKE6KeI5YaF5a65XG5jb25zdCBtd0FkZFdpa2lUZXh0ID0gYXN5bmMgKHdpa2l0ZXh0OiBzdHJpbmcsIHBhZ2VOYW1lOiBzdHJpbmcsIGlzUHJldmlldzogYm9vbGVhbik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRpZiAod2lraXRleHQudHJpbSgpKSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0Ly8g6YG/5YWN5YaF5a656YeN5aSNXG5cdFx0XHR0aXRsZTogcGFnZU5hbWUsXG5cdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHR1c2Vza2luOiBza2luLFxuXHRcdH07XG5cdFx0aWYgKGlzUHJldmlldykge1xuXHRcdFx0cGFyYW1zLmRpc2FibGVlZGl0c2VjdGlvbiA9IHRydWU7XG5cdFx0XHRwYXJhbXMucHJldmlldyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8udGV4dCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcgPSAoZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZykudHJpbSgpO1xuXG5cdFx0XHRpZiAocGFyc2VkV2lraXRleHQpIHtcblx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQocGFyc2VkV2lraXRleHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9hZGluZ0ZhaWxOb3RpY2UoKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHR9XG59O1xuXG4vLyDliqDlhaXpooTop4jnmoRMdWHlhoXlrrlcbmNvbnN0IG13QWRkTHVhVGV4dCA9IGFzeW5jIChcblx0d2lraXRleHQ6IHN0cmluZyxcblx0cGFnZU5hbWU6IHN0cmluZyxcblx0aXNQcmV2aWV3OiBib29sZWFuLFxuXHRjYWxsQmFjaz86IChhcmc6IHN0cmluZykgPT4gSlF1ZXJ5IHwgSFRNTEVsZW1lbnQgfCB2b2lkXG4pID0+IHtcblx0Y29uc3QgdGVtcE1vZHVsZU5hbWU6IHN0cmluZyA9ICdBZGRUZXh0L1RlbXAvTW9kdWxlL0RhdGEubHVhJztcblx0Y29uc3QgbW9kdWxlQ2FsbDoge1xuXHRcdHdpa2l0ZXh0OiBzdHJpbmc7XG5cdFx0cGFnZU5hbWU6IHN0cmluZztcblx0fSA9IHtcblx0XHR3aWtpdGV4dDogJyNpbnZva2U6Jyxcblx0XHQvLyDliIblvIDmnaXvvIzpgb/lhY3ooqvliIbliLBbWzpDYXRlZ29yeTrmnInohJrmnKzplJnor6/nmoTpobXpnaJdXVxuXHRcdHBhZ2VOYW1lOiAnTW9kdWxlOicsXG5cdH07XG5cblx0aWYgKHdpa2l0ZXh0LnRyaW0oKSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHRpdGxlOiBwYWdlTmFtZSxcblx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3h0aXRsZTogbW9kdWxlQ2FsbC5wYWdlTmFtZSArIHRlbXBNb2R1bGVOYW1lLFxuXHRcdFx0XHQvLyDliJvlu7rkuLTml7ZMdWEgTW9kdWxlXG5cdFx0XHRcdHRlbXBsYXRlc2FuZGJveHRleHQ6IGByZXR1cm4ge1xuXHRtYWluID0gZnVuY3Rpb24oKVxuXHRcdHhwY2FsbChcblx0XHRcdGZ1bmN0aW9uKClcblx0XHRcdFx0JHt3aWtpdGV4dH1cblx0XHRcdGVuZCxcblx0XHRcdGZ1bmN0aW9uKClcblx0XHRcdGVuZFxuXHRcdClcblx0XHRsb2NhbCBtb2R1bGVXaWtpdGV4dCA9IHBhY2thZ2UubG9hZGVkW1wiTW9kdWxlOk1vZHVsZSB3aWtpdGV4dFwiXVxuXHRcdGlmIG1vZHVsZVdpa2l0ZXh0IHRoZW5cblx0XHRcdGxvY2FsIHdpa2l0ZXh0ID0gbW9kdWxlV2lraXRleHQubWFpbigpXG5cdFx0XHRpZiBtdy50ZXh0LnRyaW0od2lraXRleHQpIH49IFwiXCIgdGhlblxuXHRcdFx0XHRyZXR1cm4gbXcuZ2V0Q3VycmVudEZyYW1lKCk6cHJlcHJvY2Vzcyhtb2R1bGVXaWtpdGV4dC5tYWluKCkpXG5cdFx0XHRlbmRcblx0XHRlbmRcblx0XHRyZXR1cm4gXCJcIlxuXHRlbmRcbn1gLFxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3hjb250ZW50bW9kZWw6ICdTY3JpYnVudG8nLFxuXHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3hjb250ZW50Zm9ybWF0OiAndGV4dC9wbGFpbicsXG5cdFx0XHRcdHRleHQ6IGB7eyR7bW9kdWxlQ2FsbC53aWtpdGV4dH0ke3RlbXBNb2R1bGVOYW1lfXxtYWlufX1gLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHRcdHVzZXNraW46IHNraW4sXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGlzUHJldmlldykge1xuXHRcdFx0XHRwYXJhbXMucHJldmlldyA9IHRydWU7XG5cdFx0XHRcdHBhcmFtcy5kaXNhYmxlZWRpdHNlY3Rpb24gPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYXJzZWRXaWtpdGV4dDogc3RyaW5nID0gKGRhdGFbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmcpLnRyaW0oKTtcblxuXHRcdFx0aWYgKCFwYXJzZWRXaWtpdGV4dCkge1xuXHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHRcdC8vIOiLpeWcqOi/meS4quS4tOaXtuaooeWdl+S4reWHuumUmeWImeWPlua2iFxuXHRcdFx0fSBlbHNlIGlmICgkKHBhcnNlZFdpa2l0ZXh0KS5maW5kKCcuc2NyaWJ1bnRvLWVycm9yJykudGV4dCgpLnNlYXJjaCh0ZW1wTW9kdWxlTmFtZSkpIHtcblx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY2FsbEJhY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2FsbEJhY2socGFyc2VkV2lraXRleHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQocGFyc2VkV2lraXRleHQpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bG9hZGluZ0ZhaWxOb3RpY2UoKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHR9XG59O1xuXG5leHBvcnQge213QWRkTHVhVGV4dCwgbXdBZGRXaWtpVGV4dH07XG4iLCAiaW1wb3J0IHtsdWFHZXRDU1N3aWtpdGV4dCwgbHVhR2V0SlNPTndpa2l0ZXh0LCBsdWFHZXRKU3dpa2l0ZXh0fSBmcm9tICcuL2x1YUdldFRleHQnO1xuXG5jb25zdCB7d2dQYWdlQ29udGVudE1vZGVsfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5Yik5pat5piv5ZCm5Li6THVhXG5jb25zdCBsdWFDaGVjayA9IChpbnB1dFN0cmluZzogc3RyaW5nID0gJycsIGNvbnRlbnRNb2RlbDogc3RyaW5nID0gd2dQYWdlQ29udGVudE1vZGVsKTogc3RyaW5nID0+IHtcblx0Ly8g5qC55o2u6aG16Z2i5YaF5a655qih5Z6L6YCJ55So6YCC5b2T55qE6Kej5p6Q5qih5byPXG5cdHN3aXRjaCAoY29udGVudE1vZGVsLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRjYXNlICdqc29uJzpcblx0XHRcdHJldHVybiBsdWFHZXRKU09Od2lraXRleHQoaW5wdXRTdHJpbmcpO1xuXHRcdGNhc2UgJ2pzJzpcblx0XHRjYXNlICdqYXZhc2NyaXB0Jzpcblx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdHJldHVybiBsdWFHZXRKU3dpa2l0ZXh0KGlucHV0U3RyaW5nKTtcblx0XHRjYXNlICdjc3MnOlxuXHRcdGNhc2UgJ3Nhbml0aXplZC1jc3MnOlxuXHRcdFx0cmV0dXJuIGx1YUdldENTU3dpa2l0ZXh0KGlucHV0U3RyaW5nKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICcnO1xuXHR9XG59O1xuXG5leHBvcnQge2x1YUNoZWNrfTtcbiIsICJpbXBvcnQge2FkZFBhcnNlZFdpa2l0ZXh0fSBmcm9tICcuLi91dGlsL2FkZFBhcnNlZFdpa2l0ZXh0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtjaGVja0VsZW1lbnRFeGlzdH0gZnJvbSAnLi4vdXRpbC9jaGVja0VsZW1lbnRFeGlzdCc7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tICcuLi91dGlsL2dldExhbmd1YWdlJztcbmltcG9ydCB7bHVhQ2hlY2t9IGZyb20gJy4uL2x1YS9sdWFDaGVjayc7XG5pbXBvcnQge213QWRkV2lraVRleHR9IGZyb20gJy4vbXdBZGRUZXh0JztcbmltcG9ydCB7cmVtb3ZlTG9hZGluZ05vdGljZX0gZnJvbSAnLi4vbm90aWNlJztcblxuY29uc3Qge3NraW4sIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOWKoOWFpee8lui+keaPkOekuu+8iOiLpeWtmOWcqO+8iVxuY29uc3QgbXdBcHBseU5vdGljZSA9IGFzeW5jIChjdXJyZW50UGFnZU5hbWU6IHN0cmluZywgcGFnZVN1Yk5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdC8vIGdldCB0aGUgb3JpZ2luYWwgd2lraXRleHQgY29udGVudCBvZiBhIHBhZ2Vcblx0XHRcdHRpdGxlOiBjdXJyZW50UGFnZU5hbWUgKyBwYWdlU3ViTmFtZSxcblx0XHRcdHRleHQ6IGB7eyNpbnZva2U6U3BlY2lhbCB3aWtpdGV4dC9UZW1wbGF0ZXxnZXROb3RpY2VzfCR7Y3VycmVudFBhZ2VOYW1lfXwke3BhZ2VTdWJOYW1lfX19YCxcblx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHR1c2Vza2luOiBza2luLFxuXHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0fTtcblxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0aWYgKCFkYXRhPy5bJ3BhcnNlJ10/LnRleHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBodG1sID0gZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZztcblx0XHRpZiAoJChodG1sKS50ZXh0KCkudHJpbSgpKSB7XG5cdFx0XHRhZGRQYXJzZWRXaWtpdGV4dChodG1sKTtcblx0XHR9XG5cdH0gY2F0Y2gge31cbn07XG5cbi8vIOS7jumhtemdouW9k+WJjeWOhuWPsueJiOacrOWPluWHuiA8e09QVElPTlMud2lraVRleHRLZXl9PlxuY29uc3QgbXdBcHBseVJldmlzaW9uID0gYXN5bmMgKGN1cnJlbnRQYWdlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0Ly8gZ2V0IHRoZSBvcmlnaW5hbCB3aWtpdGV4dCBjb250ZW50IG9mIGEgcGFnZVxuXHRcdFx0b2xkaWQ6IHdnUmV2aXNpb25JZCxcblx0XHRcdHByb3A6ICd3aWtpdGV4dCcsXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHR9O1xuXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8ud2lraXRleHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgcGFnZUNvbnRlbnQ6IHN0cmluZyA9IGx1YUNoZWNrKChkYXRhWydwYXJzZSddLndpa2l0ZXh0IGFzIHN0cmluZykudHJpbSgpKTtcblx0XHRwYWdlQ29udGVudCA9XG5cdFx0XHQoY2hlY2tFbGVtZW50RXhpc3QoJyNtdy1jbGVhcnlvdXJjYWNoZScpXG5cdFx0XHRcdD8gJ3t7I2ludm9rZTpTcGVjaWFsIHdpa2l0ZXh0L1RlbXBsYXRlfGludHxjbGVhcnlvdXJjYWNoZX19J1xuXHRcdFx0XHQ6ICcnKSArIHBhZ2VDb250ZW50O1xuXG5cdFx0aWYgKHBhZ2VDb250ZW50LnRyaW0oKSkge1xuXHRcdFx0dm9pZCBtd0FkZFdpa2lUZXh0KHBhZ2VDb250ZW50LCBjdXJyZW50UGFnZU5hbWUsIHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7bXdBcHBseU5vdGljZSwgbXdBcHBseVJldmlzaW9ufTtcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFsbE13Q29uZmlnOiBSZXR1cm5UeXBlPHR5cGVvZiBtdy5jb25maWcuZ2V0PiA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g5qOA5p+lTWVkaWFXaWtp55qE6K6+572uXG5jb25zdCBjaGVja013Q29uZmlnID0gKGNvbmZpZ0tleTogc3RyaW5nLCBleHBlY3RDb25maWc6IHN0cmluZyB8IHN0cmluZ1tdKTogYm9vbGVhbiA9PiB7XG5cdGxldCBtd0NvbmZpZzogdW5rbm93biA9IGFsbE13Q29uZmlnW2NvbmZpZ0tleV07XG5cdGlmICghbXdDb25maWcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWJhc2UtdG8tc3RyaW5nXG5cdG13Q29uZmlnID0gU3RyaW5nKG13Q29uZmlnKS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcblx0aWYgKCFtd0NvbmZpZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiBnZW5lcmF0ZUFycmF5KGV4cGVjdENvbmZpZykuaW5jbHVkZXMobXdDb25maWcgYXMgc3RyaW5nKTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tNd0NvbmZpZ307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuXG4vLyDmo4Dmn6XmmK/lkKbmnInpooTop4jnmoTlv4XopoHmgKdcbmNvbnN0IGNoZWNrTmVlZFByZXZpZXcgPSAoKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiBkb2N1bWVudC5ib2R5LmlubmVySFRNTC5zZWFyY2goT1BUSU9OUy53aWtpVGV4dEtleSkgPiAtMTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tOZWVkUHJldmlld307XG4iLCAiaW1wb3J0IHthZGRMb2FkaW5nTm90aWNlLCBub3RpY2VMb2FkaW5nRWxlbWVudCwgcmVtb3ZlTG9hZGluZ05vdGljZX0gZnJvbSAnLi4vbm90aWNlJztcbmltcG9ydCB7bHVhR2V0Q1NTd2lraXRleHQsIGx1YUdldEpTT053aWtpdGV4dH0gZnJvbSAnLi4vbHVhL2x1YUdldFRleHQnO1xuaW1wb3J0IHttd0FkZEx1YVRleHQsIG13QWRkV2lraVRleHR9IGZyb20gJy4vbXdBZGRUZXh0JztcbmltcG9ydCB7bXdBcHBseU5vdGljZSwgbXdBcHBseVJldmlzaW9ufSBmcm9tICcuL213QXBwbHknO1xuaW1wb3J0IHtjaGVja0VsZW1lbnRFeGlzdH0gZnJvbSAnLi4vdXRpbC9jaGVja0VsZW1lbnRFeGlzdCc7XG5pbXBvcnQge2NoZWNrTXdDb25maWd9IGZyb20gJy4uL3V0aWwvY2hlY2tNd0NvbmZpZyc7XG5pbXBvcnQge2NoZWNrTmVlZFByZXZpZXd9IGZyb20gJy4uL3V0aWwvY2hlY2tOZWVkUHJldmlldyc7XG5pbXBvcnQge2x1YUNoZWNrfSBmcm9tICcuLi9sdWEvbHVhQ2hlY2snO1xuXG5jb25zdCB7d2dDYW5vbmljYWxOYW1lc3BhY2UsIHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuLy8g57uZ6aG16Z2i5re75Yqg6aKE6KeIXG5jb25zdCBtd0FkZFByZXZpZXcgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIOmihOiniOaooeW8j+WPqumAgueUqOS6juS7peS4i+mhtemdouWGheWuueaooeWei1xuXHRpZiAoY2hlY2tNd0NvbmZpZygnd2dQYWdlQ29udGVudE1vZGVsJywgWydqYXZhc2NyaXB0JywgJ2pzJywgJ2pzb24nLCAndGV4dCcsICdjc3MnLCAnc2FuaXRpemVkLWNzcyddKSkge1xuXHRcdC8vIOaooeW8jzHvvJrpobXpnaLpooTop4hcblx0XHRpZiAoY2hlY2tFbGVtZW50RXhpc3QoJy5wcmV2aWV3bm90ZScpKSB7XG5cdFx0XHQvLyDmo4Dmn6XmmK/lkKbkuLrpooTop4jmqKHlvI9cblx0XHRcdC8vIOmihOiniOacieWPr+iDveaYr+WcqOmihOiniOWFtuS7luadoeebrlxuXHRcdFx0Y29uc3QgcGF0aFBhdGg6IHN0cmluZyA9IGRlY29kZVVSSShtdy51dGlsLmdldFVybCh3Z1BhZ2VOYW1lKSkucmVwbGFjZShcblx0XHRcdFx0bmV3IFJlZ0V4cChgXlxcXFwvPyR7bXcudXRpbC5nZXRVcmwoJycpLm1hdGNoKC9bYS16XSsvKT8uWzBdID8/ICcnfVxcXFwvYCksXG5cdFx0XHRcdCcnXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyDoi6XpooTop4jnmoTpobXpnaLlubbpnZ7mnKzouqvvvIzliJnkuI3mmL7npLrpooTop4hcblx0XHRcdGlmIChwYXRoUGF0aCAhPT0gd2dQYWdlTmFtZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHdpa2l0ZXh0OiBzdHJpbmcgPSBsdWFDaGVjaygpO1xuXHRcdFx0aWYgKHdpa2l0ZXh0KSB7XG5cdFx0XHRcdC8vIOiLpeino+aekOe7k+aenOmdnuepuuaJjeaUvue9rumihOiniFxuXHRcdFx0XHRhZGRMb2FkaW5nTm90aWNlKCk7IC8vIOaUvue9ruaPkOekuu+8jOaPkOekuuS9v+eUqOiAheetieW+hUFKQVhcblx0XHRcdFx0dm9pZCBtd0FkZFdpa2lUZXh0KHdpa2l0ZXh0LCB3Z1BhZ2VOYW1lLCB0cnVlKTsgLy8g6Iul5Y+W5b6XIF9hZGRUZXh0IOWImeaYvuekuumihOiniFxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoIWNoZWNrRWxlbWVudEV4aXN0KCcubXctX2FkZFRleHQtY29udGVudCcpICYmIGNoZWNrTXdDb25maWcoJ3dnQWN0aW9uJywgJ3ZpZXcnKSkge1xuXHRcdFx0Ly8g5qih5byPMu+8muS4jeaUr+aMgeaYvuekuueahOeJueauiumhtemdolxuXHRcdFx0Ly8g57uP5p+l77yM5LiN5q2i5piv5qih5p2/5qC35byP77yM5omA5pyJ5pyq5bWM5YWlJyNtdy1jbGVhcnlvdXJjYWNoZSfnmoTpobXpnaLnmobml6Dms5XmraPluLjmmL7npLpcblx0XHRcdGlmICghY2hlY2tOZWVkUHJldmlldygpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0XHR9XG5cblx0XHRcdC8vIOiLpeW3suaciSNtdy1jbGVhcnlvdXJjYWNoZeWImeWFiOa4heaOie+8jOWQpuWImeS8muWHuueOsOS4pOS4qk1lZGlhV2lraTpDbGVhcnlvdXJjYWNoZVxuXHRcdFx0JGJvZHkuZmluZCgnI213LWNsZWFyeW91cmNhY2hlJykuaHRtbCgnJyk7XG5cblx0XHRcdGlmICghY2hlY2tFbGVtZW50RXhpc3QoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKSkge1xuXHRcdFx0XHQvLyDpnZ7nvJbovpHmqKHlvI/miY3miafooYwgKOmihOiniOS9v+eUqOS4iuaWueeahGlm5Yy65Z2XKVxuXHRcdFx0XHRhZGRMb2FkaW5nTm90aWNlKCk7IC8vIOaUvue9ruaPkOekuu+8jOaPkOekuuS9v+eUqOiAheetieW+hUFKQVhcblx0XHRcdFx0dm9pZCBtd0FwcGx5UmV2aXNpb24od2dQYWdlTmFtZSk7IC8vIOS4uuS6huiuqeWOhuWPsueJiOacrOato+W4uOaYvuekuu+8jOS9v+eUqHdnUmV2aXNpb25JZOWPluW+l+WGheWuuVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoY2hlY2tFbGVtZW50RXhpc3QoJyNtdy1yZXZpc2lvbi1pbmZvJykgJiYgY2hlY2tNd0NvbmZpZygnd2dBY3Rpb24nLCAndmlldycpKSB7XG5cdFx0XHQvLyDmqKHlvI8z77ya6aG16Z2i5Y6G5Y+y54mI5pys5qOA6KeG77ya5aaC6ZyA5aSN5p+l55qE6aG555uu5Li66aG16Z2i5Y6G5Y+y54mI5pys77yM5pys5bel5YW35o+Q5L6b6aG16Z2i5Y6G5Y+y54mI5pys5YaF5a655pi+56S65pSv5oyBXG5cdFx0XHQvLyDmnInltYzlhaUnI213LWNsZWFyeW91cmNhY2hlJ+eahOmhtemdoueahOWOhuWPsueJiOacrOS8muWPquiDveaYvuekuuacgOaWsOeJiOeahCBfYWRkVGV4dCDlm6DmraTmiafooYzkv67mraNcblx0XHRcdGlmICghY2hlY2tFbGVtZW50RXhpc3QoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKSkge1xuXHRcdFx0XHQvLyDpnZ7nvJbovpHmqKHlvI/miY3miafooYwgKOmihOiniOS9v+eUqOS4iuaWueeahGlm5Yy65Z2XKVxuXHRcdFx0XHQkYm9keS5maW5kKCcjbXctY2xlYXJ5b3VyY2FjaGUnKS5odG1sKG5vdGljZUxvYWRpbmdFbGVtZW50KTsgLy8g5beu5byC5qih5byP77yI5ZCr5qOA6ZiF5L+u6K6i54mI5pys5Yig6Zmk77yJ55qE5o+S5YWl54K55LiN5ZCMXG5cdFx0XHRcdHZvaWQgbXdBcHBseVJldmlzaW9uKHdnUGFnZU5hbWUpOyAvLyDkuLrkuoborqnnibnlrprniYjmnKzmraPluLjmmL7npLrvvIzkvb/nlKh3Z1JldmlzaW9uSWTlj5blvpflhoXlrrlcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChjaGVja013Q29uZmlnKCd3Z1BhZ2VDb250ZW50TW9kZWwnLCBbJ3NjcmlidW50bycsICdsdWEnXSkpIHtcblx0XHQvLyDmqKHlnZfpooTop4jlip/og71cblx0XHRpZiAoIWNoZWNrTmVlZFByZXZpZXcoKSkge1xuXHRcdFx0cmV0dXJuOyAvLyDmsqHmnInpooTop4jlv4XopoHml7bvvIznm7TmjqXlgZzmraLnqIvluo/vvIzkuI3nu6fnu63liKTmlq3vvIzku6Xmj5Dpq5jmlYjnjodcblx0XHR9XG5cblx0XHRpZiAoXG5cdFx0XHRjaGVja0VsZW1lbnRFeGlzdCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpICYmXG5cdFx0XHRjaGVja0VsZW1lbnRFeGlzdCgndGFibGUuZGlmZicpICYmXG5cdFx0XHQhY2hlY2tFbGVtZW50RXhpc3QoJy5wcmV2aWV3bm90ZScpICYmXG5cdFx0XHQhY2hlY2tNd0NvbmZpZygnd2dBY3Rpb24nLCAndmlldycpXG5cdFx0KSB7XG5cdFx0XHQkKG5vdGljZUxvYWRpbmdFbGVtZW50KS5pbnNlcnRBZnRlcignI3dpa2lEaWZmJyk7XG5cdFx0XHR2b2lkIG13QWRkTHVhVGV4dChcblx0XHRcdFx0KCRib2R5LmZpbmQoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKS52YWwoKSBhcyBzdHJpbmcgfCB1bmRlZmluZWQpID8/ICcnLFxuXHRcdFx0XHR3Z1BhZ2VOYW1lLFxuXHRcdFx0XHR0cnVlXG5cdFx0XHQpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChjaGVja0VsZW1lbnRFeGlzdCgnLm13LXVuZGVsZXRlLXJldmlzaW9uJykpIHtcblx0XHQvLyDmqKHlvI8077ya5bey5Yig6aG16Z2i6aKE6KeIXG5cdFx0Ly8g5bey5Yig5YaF5a656aG16Z2i5piv54m55q6K6aG16Z2i77yM5peg5rOV55So5bi46KeE5pa55byP5Yik5pat6aG16Z2i5YaF5a655qih5Z6LXG5cdFx0aWYgKCFjaGVja05lZWRQcmV2aWV3KCkpIHtcblx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0fVxuXG5cdFx0aWYgKGNoZWNrRWxlbWVudEV4aXN0KFsnLm13LWhpZ2hsaWdodCcsICdwcmUnLCAnLm13LWpzb24nXSkpIHtcblx0XHRcdC8vIOehruiupOato+WcqOmihOiniOW3suWIoOWGheWuuVxuXHRcdFx0Y29uc3QgdGV4dGFyZWFDb250ZW50OiBzdHJpbmcgPSAkYm9keS5maW5kKCd0ZXh0YXJlYScpLnZhbCgpID8/ICcnOyAvLyDlsJ3or5Xlj5blvpflt7LliKDlhoXlrrnmupDku6PnoIFcblxuXHRcdFx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSBsdWFHZXRKU09Od2lraXRleHQodGV4dGFyZWFDb250ZW50KTtcblx0XHRcdHdpa2l0ZXh0IHx8PSBsdWFHZXRDU1N3aWtpdGV4dCh0ZXh0YXJlYUNvbnRlbnQpO1xuXG5cdFx0XHRpZiAod2lraXRleHQpIHtcblx0XHRcdFx0Ly8g6Iul5Y+W5b6XIF9hZGRUZXh0IOWImeaYvuekuumihOiniFxuXHRcdFx0XHRhZGRMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHRcdHZvaWQgbXdBZGRXaWtpVGV4dCh3aWtpdGV4dCwgbXcuY29uZmlnLmdldCgnd2dSZWxldmFudFBhZ2VOYW1lJyksIHRydWUpO1xuXHRcdFx0fSBlbHNlIGlmICgvbW9kdWxlWyBfXXdpa2l0ZXh0LipfYWRkdGV4dC9pLnRlc3QoJGJvZHkuZmluZCgnLm13LXBhcnNlci1vdXRwdXQnKS50ZXh0KCkpKSB7XG5cdFx0XHRcdC8vIOWwneivlUx1Yeino+aekFxuXHRcdFx0XHQvLyDmnKzlip/og73nm67liY3mtYvor5XmraPluLjov5DkvZxcblx0XHRcdFx0Ly8g6Iul5ZOq5aSp6aKE6KeI5Y+I5aSx5pWI77yM6K+35Y+W5raI5rOo6YeK5LiL5pa56YKj6KGMXG5cdFx0XHRcdC8vIG13QWRkTHVhVGV4dCh0ZXh0YXJlYUNvbnRlbnQsIG13LmNvbmZpZy5nZXQoXCJ3Z1JlbGV2YW50UGFnZU5hbWVcIiksIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIGlmICghY2hlY2tFbGVtZW50RXhpc3QoJy5tdy1lZGl0bm90aWNlJykgJiYgY2hlY2tNd0NvbmZpZygnd2dDYW5vbmljYWxOYW1lc3BhY2UnLCAnc3BlY2lhbCcpKSB7XG5cdFx0Ly8g6Iul54m55q6K6aG16Z2i57y65LmP57yW6L6R5o+Q56S677yM5YiZ6KGl5LiK57yW6L6R5o+Q56S6ICjoi6XlrZjlnKgpXG5cdFx0Y29uc3QgcGFnZVN1Yk5hbWU6IHN0cmluZyA9IHdnUGFnZU5hbWUucmVwbGFjZSgvc3BlY2lhbDpbXi9dKy9pLCAnJyk7XG5cdFx0aWYgKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lKSB7XG5cdFx0XHRjb25zdCBmdWxsUGFnZU5hbWU6IHN0cmluZyA9IGAke3dnQ2Fub25pY2FsTmFtZXNwYWNlfToke3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfWA7XG5cdFx0XHR2b2lkIG13QXBwbHlOb3RpY2UoZnVsbFBhZ2VOYW1lLCBwYWdlU3ViTmFtZSk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTsgLy8g6YO95LiN5piv55qE5oOF5Ya15YiZ5LiN5pi+56S66aKE6KeIXG5cdH1cbn07XG5cbmV4cG9ydCB7bXdBZGRQcmV2aWV3fTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtjaGVja05lZWRQcmV2aWV3fSBmcm9tICcuL3V0aWwvY2hlY2tOZWVkUHJldmlldyc7XG5pbXBvcnQge2x1YUNoZWNrfSBmcm9tICcuL2x1YS9sdWFDaGVjayc7XG5pbXBvcnQge213QWRkTHVhVGV4dH0gZnJvbSAnLi9tdy9td0FkZFRleHQnO1xuaW1wb3J0IHtub3RpY2VMb2FkaW5nRWxlbWVudH0gZnJvbSAnLi9ub3RpY2UnO1xuXG5jb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbi8vIOacrOiEmuacrOeahFRlc3RjYXNlXG5jb25zdCB3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSA9IGFzeW5jIChpc1ByZXZpZXc6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Ly8g5rKh5pyJ5Y+v6aKE6KeI5YWD57Sg77yM6YCA5Ye644CCXG5cdGlmICghY2hlY2tOZWVkUHJldmlldygpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdGVzdGNhc2VMaXN0OiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFxuXHRcdCcuc3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlJ1xuXHQpO1xuXHQvLyDoi6XpobXpnaLkuK3msqHmnIlUZXN0Y2FzZe+8jOmAgOWHuuOAglxuXHRpZiAoIXRlc3RjYXNlTGlzdC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyDmlLbpm4bkvY3kuo7pobXpnaLkuK3nmoRUZXN0Y2FzZemihOiniOWFg+e0oFxuXHRjb25zdCB0ZXN0Y2FzZURhdGFMaXN0OiB7XG5cdFx0ZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdFx0bGFuZzogc3RyaW5nO1xuXHRcdGNvZGU6IHN0cmluZztcblx0fVtdID0gW107XG5cblx0bGV0IGk6IG51bWJlciA9IDA7XG5cdGZvciAoaSA9IDA7IGkgPCB0ZXN0Y2FzZUxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9IHRlc3RjYXNlTGlzdFtpXTtcblx0XHRpZiAoIWVsZW1lbnQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNvZGVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCcubXctaGlnaGxpZ2h0Jyk7XG5cdFx0aWYgKCFjb2RlRWxlbWVudCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qge2NsYXNzTmFtZX0gPSBjb2RlRWxlbWVudDtcblx0XHRpZiAoIWNsYXNzTmFtZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgWywgY29kZUlkXSA9IC9tdy1oaWdobGlnaHQtbGFuZy0oXFxTKykvLmV4ZWMoY2xhc3NOYW1lKSA/PyBbXTtcblx0XHRjb25zdCB7bGVuZ3RofSA9IHRlc3RjYXNlRGF0YUxpc3Q7XG5cblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgncHJldmlldy1pZCcsIGxlbmd0aC50b1N0cmluZygpKTtcblx0XHR0ZXN0Y2FzZURhdGFMaXN0W2xlbmd0aF0gPSB7XG5cdFx0XHRlbGVtZW50LFxuXHRcdFx0bGFuZzogY29kZUlkPy50b0xvd2VyQ2FzZSgpID8/ICcnLFxuXHRcdFx0Y29kZTogY29kZUVsZW1lbnQudGV4dENvbnRlbnQ/LnRyaW0oKSA/PyAnJyxcblx0XHR9OyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHR9XG5cblx0Ly8g5pW055CG6aG16Z2i5Lit55qEVGVzdGNhc2XpooTop4jlhYPntKDvvIzlubbmlL7nva7igJxb6L295YWl5LitXeKAnea2iOaBr1xuXHRsZXQgcGFja2FnZVdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblx0Zm9yIChjb25zdCB0ZXN0Y2FzZUl0ZW0gb2YgT2JqZWN0LnZhbHVlcyh0ZXN0Y2FzZURhdGFMaXN0KSkge1xuXHRcdGNvbnN0IHtjb2RlLCBlbGVtZW50LCBsYW5nfSA9IHRlc3RjYXNlSXRlbTtcblxuXHRcdGlmICghY29kZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cblx0XHRpZiAoWydqYXZhc2NyaXB0JywgJ2pzJywgJ2NzcycsICdqc29uJywgJ3RleHQnXS5pbmNsdWRlcyh0ZXN0Y2FzZUl0ZW0ubGFuZykpIHtcblx0XHRcdGNvbnN0IHdpa2l0ZXh0OiBzdHJpbmcgPSBsdWFDaGVjayhjb2RlLCBsYW5nKTtcblx0XHRcdGlmICh3aWtpdGV4dCkge1xuXHRcdFx0XHQvLyDoi6Xop6PmnpDnu5PmnpzpnZ7nqbrmiY3mlL7nva7pooTop4hcblx0XHRcdFx0JGVsZW1lbnQucHJlcGVuZChub3RpY2VMb2FkaW5nRWxlbWVudCk7XG5cdFx0XHRcdHBhY2thZ2VXaWtpdGV4dCArPSBgPGRpdiBjbGFzcz1cInNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS0ke2l9XCI+XFxuJHt3aWtpdGV4dH1cXG48L2Rpdj5gO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoWydsdWEnLCAnc2NyaWJ1bnRvJ10uaW5jbHVkZXMobGFuZykpIHtcblx0XHRcdHZvaWQgbXdBZGRMdWFUZXh0KFxuXHRcdFx0XHRjb2RlLFxuXHRcdFx0XHR3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRpc1ByZXZpZXcsXG5cdFx0XHRcdCgoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuICh3aWtpdGV4dDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHQkZWxlbWVudC5wcmVwZW5kKHdpa2l0ZXh0KTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9KSgpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdC8vIOWwhuaVtOeQhuWujOeahFRlc3RjYXNl6aKE6KeI5YWD57Sg57uf5LiA5Y+R6YCBQVBJ6K+35rGC77yM5bm25bCG6L+U5Zue57uT5p6c5YiG5Y+R5Yiw5ZCEVGVzdGNhc2Vcblx0aWYgKHBhY2thZ2VXaWtpdGV4dCkge1xuXHRcdHBhY2thZ2VXaWtpdGV4dCA9IGA8ZGl2IGNsYXNzPVwic3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLXVuZGVmaW5lZFwiPiR7cGFja2FnZVdpa2l0ZXh0fTwvZGl2PmA7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0dGV4dDogcGFja2FnZVdpa2l0ZXh0LFxuXHRcdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdH07XG5cdFx0XHRpZiAoaXNQcmV2aWV3KSB7XG5cdFx0XHRcdHBhcmFtcy5kaXNhYmxlZWRpdHNlY3Rpb24gPSB0cnVlO1xuXHRcdFx0XHRwYXJhbXMucHJldmlldyA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAoIWRhdGE/LlsncGFyc2UnXT8udGV4dCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcgPSAoZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZykudHJpbSgpO1xuXHRcdFx0aWYgKHBhcnNlZFdpa2l0ZXh0KSB7XG5cdFx0XHRcdGNvbnN0ICRwYXJzZWRFbGVtZW50OiBKUXVlcnkgPSAkKHBhcnNlZFdpa2l0ZXh0KTtcblx0XHRcdFx0Zm9yIChjb25zdCBba2V5LCB0ZXN0Y2FzZUl0ZW1dIG9mIE9iamVjdC5lbnRyaWVzKHRlc3RjYXNlRGF0YUxpc3QpKSB7XG5cdFx0XHRcdFx0Y29uc3Qge2VsZW1lbnQsIGxhbmd9ID0gdGVzdGNhc2VJdGVtO1xuXG5cdFx0XHRcdFx0aWYgKCFbJ2phdmFzY3JpcHQnLCAnanMnLCAndGV4dCcsICdjc3MnLCAnanNvbiddLmluY2x1ZGVzKGxhbmcpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICRwYXJzZWRFbGVtZW50LmZpbmQoXG5cdFx0XHRcdFx0XHRgLnNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS11bmRlZmluZWQgPiAuc3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLSR7a2V5fWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmICghJGVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkYWRkVGFyZ2V0OiBKUXVlcnkgPSAkKGVsZW1lbnQpLmZpbmQoJyNzcGVjaWFsd2lraXRleHQtcHJldmlldy1sb2FkaW5nJyk7XG5cdFx0XHRcdFx0JGFkZFRhcmdldC5odG1sKCRlbGVtZW50Lmh0bWwoKSk7XG5cdFx0XHRcdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmZpcmUoJGFkZFRhcmdldCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cbn07XG5cbmV4cG9ydCB7d2lraXRleHRQcmV2aWV3VGVzdGNhc2V9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0NmLElBQU1DLHdCQUF3QjtBQUM5QixJQUFNQyxzQkFBc0I7O0FDRG5DLElBQUFDLHFCQUFrQkMsUUFBQUosUUFBQSxnQkFBQSxHQUFBLENBQUE7Ozs7OztBQ0RsQixJQUFBSyxvQkFBdUJMLFFBQUEsaUJBQUE7QUFFdkIsSUFBTU0sa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxVQUFBLEdBQVNMLGtCQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1FLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRGZBLElBQU1OLFNBQVNBLE1BQ2RKLG1DQUFBVyxRQUFBQyxjQUFBWixtQkFBQVcsUUFBQUUsVUFBQSxNQUNDYixtQ0FBQVcsUUFBQUMsY0FBQyxPQUFBO0VBQUlFLEtBQUtDO0VBQU9DLFVBQVM7RUFBUUMsT0FBTTtFQUFLQyxRQUFP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QzFELEdBQUcsQ0FDekY7QUFDQSxnQkFBSSxDQUFDb0MsU0FBU2dDLFFBQVE7QUFDckI7WUFDRDtBQUVBLGtCQUFNK0osYUFBcUJsTSxFQUFFWSxPQUFPLEVBQUVSLEtBQUssa0NBQWtDO0FBQzdFOEwsdUJBQVdoTSxLQUFLQyxTQUFTRCxLQUFLLENBQUM7QUFDL0JHLGVBQUdDLEtBQUssa0JBQWtCLEVBQUVDLEtBQUsyTCxVQUFVO1VBQzVDO1FBQ0Q7TUFDRCxRQUFRO01BQUM7SUFDVjtFQUNELENBQUE7QUFBQSxTQUFBLFNBL0hNMUIseUJBQUEyQixNQUFBO0FBQUEsV0FBQTFCLE1BQUFuRSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FsQkxOLE1BQUEsR0FBS3RKLG1CQUFBbVAsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLGdCQUFnQnZNLE9BQXNDO0FBRWxGMEosZUFBYTFKLEtBQUs7QUFFbEIsT0FBS3lLLHdCQUF3QixJQUFJO0FBQ2xDLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0NiIsICJyZXF1aXJlIiwgInByZXZpZXdMb2FkaW5nQ29udGVudCIsICJwcmV2aWV3TG9hZGluZ0lubmVyIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJGYWlsZWQiLCAibG9jYWxpemUiLCAiZW4iLCAiTG9hZGluZyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgIkZyYWdtZW50IiwgInNyYyIsICJBbGVydF9kZWZhdWx0IiwgImRlY29kaW5nIiwgIndpZHRoIiwgImhlaWdodCIsICJpZCIsICJjbGFzc05hbWUiLCAiQWpheF9sb2FkZXJfZGVmYXVsdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiY2hlY2tFbGVtZW50RXhpc3QiLCAic2VsZWN0b3JzIiwgInNlbGVjdG9yQXJyYXkiLCAiZ2VuZXJhdGVBcnJheSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJzZWxlY3RvciIsICJ2YWx1ZSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVyciIsICJlIiwgImYiLCAiYWRkUGFyc2VkV2lraXRleHQiLCAicGFyc2VkV2lraXRleHQiLCAiJGJvZHkiLCAiJCIsICIkcGFyc2VkV2lraXRleHQiLCAiaHRtbCIsICIkZWxlbWVudCIsICJmaW5kIiwgIm13IiwgImhvb2siLCAiZmlyZSIsICJhcHBlbmQiLCAibm90aWNlRmFpbEVsZW1lbnQiLCAibm90aWNlTG9hZGluZ0VsZW1lbnQiLCAicmVwbGFjZURPTSIsICJlbGVtZW50IiwgImFkZExvYWRpbmdOb3RpY2UiLCAibG9hZGluZ0ZhaWxOb3RpY2UiLCAicmVtb3ZlTG9hZGluZ05vdGljZSIsICJ2ZXJzaW9uIiwgIndpa2lUZXh0S2V5IiwgImx1YUFkZFRleHQiLCAiaW5wdXRTdHJpbmciLCAibmV3U3RyaW5nIiwgImlzRXNjYXBlIiwgImVzY2FwZVN0cmluZyIsICJKU09OIiwgInBhcnNlIiwgImNvbmNhdCIsICJzdHJpbmdpZnkiLCAicmVwbGFjZSIsICJsdWFHZXRTdHJpbmciLCAidGVzdFN0cmluZ0V4ZWNBcnJheSIsICJleGVjIiwgInRlc3RTdHJpbmciLCAic2xpY2UiLCAiTWF0aCIsICJtYXgiLCAibGVuZ3RoIiwgInRyaW1DaGVjayIsICJ0cmltIiwgImZpcnN0Q2hhciIsICJjaGFyQXQiLCAiYXQiLCAibHVhR2V0Q29udGVudFRleHQiLCAid2lraXRleHQiLCAiUmVnRXhwIiwgInN1YnN0cmluZyIsICJ0ZW1wVGV4dCIsICJsdWFHZXRPYmpUZXh0IiwgImx1YUdldENTU3dpa2l0ZXh0IiwgIl9yZWYiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgImNzc1RleHQiLCAibHVhR2V0SlNPTndpa2l0ZXh0IiwgIl9yZWYyIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCAiSlNPTlRleHQiLCAianNvbkRhdGEiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgInRlc3QiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllczIiLCAiayIsICJ2IiwgImx1YUdldEpTd2lraXRleHQiLCAiX3JlZjMiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MyIsICJqc1RleHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFwaSIsICJpbml0TXdBcGkiLCAid2dVc2VyTGFuZ3VhZ2UiLCAid2dVc2VyVmFyaWFudCIsICJjb25maWciLCAiZ2V0IiwgImdldExhbmd1YWdlIiwgImxhbmciLCAiaW5jbHVkZXMiLCAic2tpbiIsICJtd0FkZFdpa2lUZXh0IiwgIl9yZWY0IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhZ2VOYW1lIiwgImlzUHJldmlldyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInRpdGxlIiwgImNvbnRlbnRtb2RlbCIsICJ0ZXh0IiwgInByb3AiLCAidXNlbGFuZyIsICJ1c2Vza2luIiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJwcmV2aWV3IiwgIl9kYXRhJHBhcnNlIiwgImRhdGEiLCAiX3giLCAiX3gyIiwgIl94MyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAibXdBZGRMdWFUZXh0IiwgIl9yZWY1IiwgImNhbGxCYWNrIiwgInRlbXBNb2R1bGVOYW1lIiwgIm1vZHVsZUNhbGwiLCAiX2RhdGEkcGFyc2UyIiwgInRlbXBsYXRlc2FuZGJveHRpdGxlIiwgInRlbXBsYXRlc2FuZGJveHRleHQiLCAidGVtcGxhdGVzYW5kYm94Y29udGVudG1vZGVsIiwgInRlbXBsYXRlc2FuZGJveGNvbnRlbnRmb3JtYXQiLCAic2VhcmNoIiwgIl94NCIsICJfeDUiLCAiX3g2IiwgIl94NyIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAibHVhQ2hlY2siLCAiY29udGVudE1vZGVsIiwgInRvTG93ZXJDYXNlIiwgInNraW4yIiwgIndnUmV2aXNpb25JZCIsICJtd0FwcGx5Tm90aWNlIiwgIl9yZWY2IiwgImN1cnJlbnRQYWdlTmFtZSIsICJwYWdlU3ViTmFtZSIsICJfZGF0YSRwYXJzZTMiLCAic21heGFnZSIsICJtYXhhZ2UiLCAiX3g4IiwgIl94OSIsICJtd0FwcGx5UmV2aXNpb24iLCAiX3JlZjciLCAiX2RhdGEkcGFyc2U0IiwgIm9sZGlkIiwgInBhZ2VDb250ZW50IiwgIl94MTAiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImFsbE13Q29uZmlnIiwgImNoZWNrTXdDb25maWciLCAiY29uZmlnS2V5IiwgImV4cGVjdENvbmZpZyIsICJtd0NvbmZpZyIsICJTdHJpbmciLCAiY2hlY2tOZWVkUHJldmlldyIsICJib2R5IiwgImlubmVySFRNTCIsICJ3Z0Nhbm9uaWNhbE5hbWVzcGFjZSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJ3Z1BhZ2VOYW1lIiwgIm13QWRkUHJldmlldyIsICJfbXckdXRpbCRnZXRVcmwkbWF0Y2giLCAiX213JHV0aWwkZ2V0VXJsJG1hdGNoMiIsICJwYXRoUGF0aCIsICJkZWNvZGVVUkkiLCAidXRpbCIsICJnZXRVcmwiLCAibWF0Y2giLCAiXyRib2R5JGZpbmQkdmFsIiwgImluc2VydEFmdGVyIiwgInZhbCIsICJfJGJvZHkkZmluZCR2YWwyIiwgInRleHRhcmVhQ29udGVudCIsICJmdWxsUGFnZU5hbWUiLCAid2dQYWdlTmFtZTIiLCAid2lraXRleHRQcmV2aWV3VGVzdGNhc2UiLCAiX3JlZjgiLCAidGVzdGNhc2VMaXN0IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAidGVzdGNhc2VEYXRhTGlzdCIsICJpIiwgIl9leGVjIiwgIl9jb2RlSWQkdG9Mb3dlckNhc2UiLCAiX2NvZGVFbGVtZW50JHRleHRDb250IiwgIl9jb2RlRWxlbWVudCR0ZXh0Q29udDIiLCAiY29kZUVsZW1lbnQiLCAiY29kZUlkIiwgInNldEF0dHJpYnV0ZSIsICJ0b1N0cmluZyIsICJjb2RlIiwgInRleHRDb250ZW50IiwgInBhY2thZ2VXaWtpdGV4dCIsICJfaTMiLCAiX09iamVjdCR2YWx1ZXMiLCAidmFsdWVzIiwgInRlc3RjYXNlSXRlbSIsICJwcmVwZW5kIiwgIl9kYXRhJHBhcnNlNSIsICIkcGFyc2VkRWxlbWVudCIsICJfaTQiLCAiX09iamVjdCRlbnRyaWVzMyIsICIkYWRkVGFyZ2V0IiwgIl94MTEiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInNwZWNpYWxXaWtpdGV4dCJdCn0K
