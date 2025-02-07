/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|license2=Qiuwen Public Licence}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EasyArchive}
 * @author WaitSpring <me@waitspring.com>
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 * @license Qiuwen Public License {@link https://www.qiuwenbaike.cn/wiki/QW:QWL}
 */

/**
 * Copyright 2024 WaitSpring <me@waitspring.com>
 * Licensed under the "Qiuwen Public Licence"
 * (the "License", formerly the "Qiuwen Licence"),
 * either version 1.0 of the Licence, or any
 * later version.
 * You may obtain a copy of the License at
 *
 *  http://www.qiuwenbaike.cn/wiki/QW:QWL
 *
 * See the License for details.
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/.pnpm/broadcastchannel-polyfill@1.0.1/node_modules/broadcastchannel-polyfill/index.js
var require_broadcastchannel_polyfill = __commonJS({
  "node_modules/.pnpm/broadcastchannel-polyfill@1.0.1/node_modules/broadcastchannel-polyfill/index.js"() {
    (function(global) {
      var channels = [];
      function BroadcastChannel2(channel) {
        var $this = this;
        channel = String(channel);
        var id = "$BroadcastChannel$" + channel + "$";
        channels[id] = channels[id] || [];
        channels[id].push(this);
        this._name = channel;
        this._id = id;
        this._closed = false;
        this._mc = new MessageChannel();
        this._mc.port1.start();
        this._mc.port2.start();
        global.addEventListener("storage", function(e) {
          if (e.storageArea !== global.localStorage) return;
          if (e.newValue == null || e.newValue === "") return;
          if (e.key.substring(0, id.length) !== id) return;
          var data = JSON.parse(e.newValue);
          $this._mc.port2.postMessage(data);
        });
      }
      BroadcastChannel2.prototype = {
        // BroadcastChannel API
        get name() {
          return this._name;
        },
        postMessage: function(message) {
          var $this = this;
          if (this._closed) {
            var e = new Error();
            e.name = "InvalidStateError";
            throw e;
          }
          var value = JSON.stringify(message);
          var key = this._id + String(Date.now()) + "$" + String(Math.random());
          global.localStorage.setItem(key, value);
          setTimeout(function() {
            global.localStorage.removeItem(key);
          }, 500);
          channels[this._id].forEach(function(bc) {
            if (bc === $this) return;
            bc._mc.port2.postMessage(JSON.parse(value));
          });
        },
        close: function() {
          if (this._closed) return;
          this._closed = true;
          this._mc.port1.close();
          this._mc.port2.close();
          var index = channels[this._id].indexOf(this);
          channels[this._id].splice(index, 1);
        },
        // EventTarget API
        get onmessage() {
          return this._mc.port1.onmessage;
        },
        set onmessage(value) {
          this._mc.port1.onmessage = value;
        },
        addEventListener: function() {
          return this._mc.port1.addEventListener.apply(this._mc.port1, arguments);
        },
        removeEventListener: function() {
          return this._mc.port1.removeEventListener.apply(this._mc.port1, arguments);
        },
        dispatchEvent: function() {
          return this._mc.port1.dispatchEvent.apply(this._mc.port1, arguments);
        }
      };
      global.BroadcastChannel = global.BroadcastChannel || BroadcastChannel2;
    })(self);
  }
});

// dist/EasyArchive/EasyArchive.js
require_broadcastchannel_polyfill();
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
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames2(from)), _step;
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
//! src/EasyArchive/options.json
var elementId = "gadget-easy_archive";
var mountPointSelector = "#footer-info,.page-info";
var version = "1.0";
//! src/EasyArchive/modules/components/footerNotices.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/EasyArchive/modules/components/EasyArchive.module.less
var footerNotice = "EasyArchive-module__footerNotice_ZRkG1q__490";
var sectionIdSpan = "EasyArchive-module__sectionIdSpan_ZRkG1q__490";
//! src/EasyArchive/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Archive: (0, import_ext_gadget.localize)({
      en: "archive",
      "zh-hans": "存档",
      "zh-hant": "存檔"
    }),
    "Archive location": (0, import_ext_gadget.localize)({
      en: "Archive location: ",
      "zh-hans": "存档地址：",
      "zh-hant": "存檔至："
    }),
    "Archive Location not allowed": (0, import_ext_gadget.localize)({
      en: 'Currently the archive location of this page, "$1", but Easy archive cannot operate like this.',
      "zh-hans": "此页面目前的存档地址是“$1”。Easy Archive 无法按此地址存档。",
      "zh-hant": "此頁面當前的存檔地址是「$1」。Easy Archive 無法按此地址存檔。"
    }),
    "Archive Location not allowed details": (0, import_ext_gadget.localize)({
      en: "Archives should not be normally directed to pages under article namespace. Please check if you have the correct archive location.",
      "zh-hans": "一般而言，不应向条目名称空间进行存档。此外，存档地址不得和此页面名称相同。请检查存档地址。",
      "zh-hant": "一般而言，不應向條目名稱空間進行存檔。此外，存檔地址不得和此頁面名稱相同。請檢查存檔地址。"
    }),
    Archiving: (0, import_ext_gadget.localize)({
      en: "Archiving",
      "zh-hans": "存档中",
      "zh-hant": "存檔中"
    }),
    Archived: (0, import_ext_gadget.localize)({
      en: "archived",
      "zh-hans": "已存档",
      "zh-hant": "已存檔"
    }),
    "Edit Confilict Notice": (0, import_ext_gadget.localize)({
      en: "You have already archived and/or deleted a section on this page. Please refresh the page and continue archiving or deleting other sections to avoid editing conflicts.",
      "zh-hans": "您已经在本页面执行了存档、删除章节的操作。请刷新页面，然后继续存档、删除本页面的其他章节，以避免编辑冲突。",
      "zh-hant": "您已經在本頁面執行了存檔、刪除章節的操作。請刷新頁面，然後繼續存檔、刪除本頁面的其他章節，以避免編輯衝突。"
    }),
    Delete: (0, import_ext_gadget.localize)({
      en: "delete",
      "zh-hans": "删除",
      "zh-hant": "刪除"
    }),
    Deleting: (0, import_ext_gadget.localize)({
      en: "Deleting",
      "zh-hans": "删除中",
      "zh-hant": "刪除中"
    }),
    Deleted: (0, import_ext_gadget.localize)({
      en: "deleted",
      "zh-hans": "已删除",
      "zh-hant": "已刪除"
    }),
    "Archive summary": (0, import_ext_gadget.localize)({
      en: "archive section",
      "zh-hans": "存档段落",
      "zh-hant": "存檔段落"
    }),
    "Create summary": (0, import_ext_gadget.localize)({
      en: "create archive",
      "zh-hans": "建立存档",
      "zh-hant": "建立存檔"
    }),
    "Delete summary": (0, import_ext_gadget.localize)({
      en: "delete section",
      "zh-hans": "删除段落",
      "zh-hant": "刪除段落"
    }),
    "Easy Archive enabled": (0, import_ext_gadget.localize)({
      en: "Easy Archive is enabled on this talk page",
      "zh-hans": "本讨论页面使用 Easy Archive 快速存档",
      "zh-hant": "此頁面使用 Easy Archive 快速存檔"
    }),
    "Easy Archive not allowed": (0, import_ext_gadget.localize)({
      en: "You cannot use Easy Archive to archive threads on this page.",
      "zh-hans": "您不可以在此页面使用 Easy Archive 快速存档。",
      "zh-hant": "您不可以在此頁面使用 Easy Archive 快速存檔。"
    }),
    "Easy Archive not supported": (0, import_ext_gadget.localize)({
      en: "This page is not supported by Easy Archive.",
      "zh-hans": "此页面不支持 Easy Archive。",
      "zh-hant": "此頁面不支持 Easy Archive。"
    }),
    "Easy Archive not supported details": (0, import_ext_gadget.localize)({
      en: "These pages are not supported by Easy Archive: Article, File, Template, Module, MediaWiki, Category, Special, JavaScript, CSS, JSON.",
      "zh-hans": "这些页面不受 Easy Archive 支持：条目、File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。",
      "zh-hant": "這些頁面不受 Easy Archive 支持：條目，File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。"
    }),
    "No Archive Location": (0, import_ext_gadget.localize)({
      en: "Easy Archive can be used on this page if needed. To enable it, add {{Easy Archive|to=[Archive location]}} template to this page.",
      "zh-hans": "若需要，此页面可以启用 Easy Archive。若要在此页面使用 Easy Archive，请在页面上添加模板 {{Easy Archive|to=存档位置}}。",
      "zh-hant": "若需要，此頁面可以啟用 Easy Archive。若要在此頁面使用 Easy Archive，請在頁面上添加模板 {{Easy Archive|to=存檔位置}}。"
    }),
    "Section $1": (0, import_ext_gadget.localize)({
      en: "Section $1",
      zh: "第 $1 章节"
    }),
    "(": (0, import_ext_gadget.localize)({
      en: " (",
      zh: "（"
    }),
    ")": (0, import_ext_gadget.localize)({
      en: ")",
      zh: "）"
    }),
    ".": (0, import_ext_gadget.localize)({
      en: ".",
      zh: "。"
    }),
    ":": (0, import_ext_gadget.localize)({
      en: ": ",
      zh: "："
    }),
    Refresh: (0, import_ext_gadget.localize)({
      en: "Refresh the page",
      "zh-hans": "刷新当前页面",
      "zh-hant": "重新載入當前頁"
    }),
    Refreshing: (0, import_ext_gadget.localize)({
      en: "Refreshing...",
      ja: "再読み込みします...",
      "zh-hans": "即将刷新当前页面……",
      "zh-hant": "即將重新載入當前頁……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EasyArchive/modules/util/sanitize.ts
var sanitize = (string) => {
  return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
};
//! src/EasyArchive/modules/components/footerNotices.tsx
var FooterNotice = ({
  children = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)
}) => {
  const {
    skin
  } = mw.config.get();
  return /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, skin === "citizen" ? /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
    id: elementId,
    className: [footerNotice, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
  }, children) : ["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info") ? /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
    id: elementId,
    className: [footerNotice, "noprint"]
  }, children) : /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id: elementId,
    className: [footerNotice, "noprint"]
  }, children));
};
var InBlackList = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, null, /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, getMessage("Easy Archive not supported"), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), getMessage("Easy Archive not supported details")));
var NotAllowed = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, null, /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, getMessage("Easy Archive not allowed")));
var ArcLocNotAllowed = ({
  arcLoc
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, null, /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, getMessage("Archive Location not allowed").replace("$1", sanitize(arcLoc)), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), getMessage("Archive Location not allowed details")));
var NoArcLoc = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, null, /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, getMessage("No Archive Location")));
var Enabled = ({
  arcLoc
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, null, /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, getMessage("Easy Archive enabled"), getMessage("("), getMessage("Archive location"), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  title: sanitize(arcLoc),
  href: "/wiki/".concat(sanitize(arcLoc))
}, arcLoc), getMessage(")"), getMessage(".")));
//! src/EasyArchive/modules/util/getSettings.ts
var ifArcLocNotAllowed = (arcLoc) => {
  const {
    wgPageName
  } = mw.config.get();
  const sourceTitle = new mw.Title(wgPageName);
  const arcLocTitle = new mw.Title(arcLoc);
  const arcLocNamespaceId = arcLocTitle.getNamespaceId();
  const arcLocPageName = arcLocTitle.getMain();
  const sourceNamespaceId = sourceTitle.getNamespaceId();
  const sourcePageName = sourceTitle.getMain();
  if (arcLocNamespaceId === 0) {
    return true;
  }
  if (arcLocNamespaceId === sourceNamespaceId && arcLocPageName === sourcePageName) {
    return true;
  }
  return false;
};
var isInBlacklist = () => {
  const {
    wgPageName
  } = mw.config.get();
  const blackListRegexArr = [/^File:.*$/, /^MediaWiki:.*$/, /^Module:.*$/, /^Category:.*$/, /^Template:.*$/, /^Special:.*$/, /^User:.*\/?.*\.js$/, /^User:.*\/?.*\.css$/, /^User:.*\/?.*\.json$/];
  for (var _i = 0, _blackListRegexArr = blackListRegexArr; _i < _blackListRegexArr.length; _i++) {
    const element = _blackListRegexArr[_i];
    if (element.test(wgPageName)) {
      return true;
    }
  }
  return false;
};
var isNotAllowed = () => {
  const {
    wgNamespaceNumber,
    wgRelevantUserName,
    wgUserName
  } = mw.config.get();
  if ((wgNamespaceNumber === 2 || wgNamespaceNumber === 3) && !(wgRelevantUserName === wgUserName)) {
    return true;
  }
  return false;
};
var isNotSupported = () => {
  const {
    wgIsMainPage,
    wgNamespaceNumber,
    wgCurRevisionId,
    wgRevisionId
  } = mw.config.get();
  if (wgNamespaceNumber < 0 || wgCurRevisionId - wgRevisionId !== 0) {
    return true;
  }
  if (wgNamespaceNumber === 0 || wgIsMainPage) {
    return true;
  }
  return false;
};
var getSettings = () => {
  const settings = document.querySelector(".easy_archive_data_point_collection");
  if (!settings) {
    return null;
  }
  const {
    dataset
  } = settings;
  const {
    arcLevel,
    arcLoc,
    secArc,
    secDel
  } = dataset;
  return {
    arcLevel: arcLevel !== null && arcLevel !== void 0 ? arcLevel : "2",
    arcLoc: arcLoc !== null && arcLoc !== void 0 ? arcLoc : "",
    secArc: secArc !== null && secArc !== void 0 ? secArc : "1",
    secDel: secDel !== null && secDel !== void 0 ? secDel : "1"
  };
};
//! src/EasyArchive/modules/loadEasyArcive.tsx
var import_ext_gadget11 = __toESM(require("ext.gadget.JSX"), 1);
//! src/EasyArchive/modules/components/sectionLink.tsx
var import_ext_gadget7 = __toESM(require("ext.gadget.JSX"), 1);
//! src/EasyArchive/modules/util/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("EasyArchive/".concat(version));
//! src/EasyArchive/modules/util/getSection.ts
var getSections = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (title) {
    const params = {
      action: "parse",
      format: "json",
      formatversion: "2",
      page: title,
      prop: "sections"
    };
    const {
      parse
    } = yield api.get(params);
    const {
      sections
    } = parse;
    const sectionsToArchive = [];
    var _iterator2 = _createForOfIteratorHelper(sections), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const section = _step2.value;
        const {
          level,
          index,
          anchor
        } = section;
        if (index.startsWith("T-")) {
          continue;
        }
        sectionsToArchive[sectionsToArchive.length] = {
          level,
          index,
          anchor
        };
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return sectionsToArchive;
  });
  return function getSections2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getSectionContent = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* ({
    title,
    section
  }) {
    var _response$query$pages, _response$query$pages2;
    const params = {
      action: "query",
      prop: "revisions",
      rvprop: "content",
      format: "json",
      formatversion: "2",
      titles: title,
      rvsection: section,
      rvslots: "main"
    };
    const response = yield api.get(params);
    return (_response$query$pages = (_response$query$pages2 = response["query"].pages[0]) === null || _response$query$pages2 === void 0 || (_response$query$pages2 = _response$query$pages2.revisions) === null || _response$query$pages2 === void 0 ? void 0 : _response$query$pages2[0].slots.main.content) !== null && _response$query$pages !== void 0 ? _response$query$pages : null;
  });
  return function getSectionContent2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/EasyArchive/modules/util/editSection.ts
var isPageExist = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (archiveTo) {
    var _query$pages$;
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "info",
      titles: archiveTo
    };
    const {
      query
    } = yield api.get(params);
    if ((_query$pages$ = query.pages[0]) !== null && _query$pages$ !== void 0 && _query$pages$.missing) {
      return false;
    }
    return true;
  });
  return function isPageExist2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var isSectionExist = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* ({
    index,
    anchor
  }) {
    const {
      wgPageName
    } = mw.config.get();
    const sections = yield getSections(wgPageName);
    let isExist = false;
    var _iterator3 = _createForOfIteratorHelper(sections), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const section = _step3.value;
        if (index === section.index && anchor === section.anchor) {
          isExist = true;
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return isExist;
  });
  return function isSectionExist2(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var removeSection = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* ({
    index,
    anchor,
    summary
  }) {
    const {
      wgPageName
    } = mw.config.get();
    const isExist = yield isSectionExist({
      index,
      anchor
    });
    if (isExist !== true) {
      return;
    }
    const content = yield getSectionContent({
      title: wgPageName,
      section: index
    });
    if (content === null) {
      return;
    }
    yield api.edit(wgPageName, () => {
      return {
        section: index,
        text: "",
        summary: summary !== null && summary !== void 0 ? summary : getMessage("Delete summary"),
        minor: true
      };
    });
  });
  return function removeSection2(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
var archiveSection = /* @__PURE__ */ function() {
  var _ref6 = _asyncToGenerator(function* ({
    index,
    anchor,
    archiveTo
  }) {
    const {
      wgPageName
    } = mw.config.get();
    const isExist = yield isSectionExist({
      index,
      anchor
    });
    if (isExist !== true) {
      return;
    }
    const content = yield getSectionContent({
      title: wgPageName,
      section: index
    });
    if (content === null) {
      return;
    }
    const pageExist = yield isPageExist(archiveTo);
    if (!pageExist) {
      yield api.create(archiveTo, {
        summary: getMessage("Create summary"),
        minor: true
      }, "{{talkarchive}}");
    }
    yield api.edit(archiveTo, () => {
      return {
        appendtext: "\n\n".concat(content),
        summary: getMessage("Archive summary"),
        minor: true
      };
    });
    yield removeSection({
      index,
      anchor,
      summary: getMessage("Archive summary")
    });
  });
  return function archiveSection2(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
//! src/EasyArchive/modules/util/getMessage.ts
var getArchivingMessage = (indexNo) => {
  return getMessage("Archiving") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
};
var getArchivedMessage = (indexNo) => {
  return getMessage("Archived") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
};
var getDeletingMessage = (indexNo) => {
  return getMessage("Deleting") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
};
var getDeletedMessage = (indexNo) => {
  return getMessage("Deleted") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
};
//! src/EasyArchive/modules/util/onClick.tsx
var import_ext_gadget5 = __toESM(require("ext.gadget.JSX"), 1);
//! src/EasyArchive/modules/util/refreshPage.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var {
  wgScript
} = mw.config.get();
var refresh = ({
  targetPage,
  toastifyInstance
} = {}) => {
  toastifyInstance || (toastifyInstance = {
    hideToast: () => {
    }
  });
  toastifyInstance.hideToast();
  toastifyInstance = (0, import_ext_gadget4.toastify)({
    text: getMessage("Refreshing"),
    duration: -1
  }, "success");
  const {
    wgPageName
  } = mw.config.get();
  location.replace(mw.util.getUrl(wgScript, {
    title: targetPage !== null && targetPage !== void 0 ? targetPage : wgPageName
  }));
};
//! src/EasyArchive/modules/util/onClick.tsx
var import_ext_gadget6 = require("ext.gadget.Toastify");
var archiveOnClick = /* @__PURE__ */ function() {
  var _ref7 = _asyncToGenerator(function* (event, {
    sectionIdSpans,
    messageChannel,
    refreshChannel,
    indexNo,
    anchor,
    toastifyInstance,
    archiveTo
  }) {
    var _event$target;
    event.preventDefault();
    const parentElement = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.parentElement;
    if (!parentElement) {
      return;
    }
    parentElement.replaceChildren(/* @__PURE__ */ import_ext_gadget5.default.createElement("span", null, getMessage("Archiving")));
    var _iterator4 = _createForOfIteratorHelper(sectionIdSpans), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const span = _step4.value;
        span.remove();
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    const message1 = getArchivingMessage(indexNo);
    messageChannel.postMessage(message1);
    toastifyInstance || (toastifyInstance = {
      hideToast: () => {
      }
    });
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget6.toastify)({
      text: message1,
      close: true,
      duration: -1
    }, "info");
    yield archiveSection({
      index: indexNo,
      anchor,
      archiveTo
    });
    parentElement.replaceChildren(/* @__PURE__ */ import_ext_gadget5.default.createElement("span", null, getMessage("Archived")));
    const message = getArchivedMessage(indexNo);
    messageChannel.postMessage(message);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget6.toastify)({
      text: message,
      close: true,
      duration: -1
    }, "info");
    messageChannel.close();
    refreshChannel.postMessage("Refresh");
    refresh({
      toastifyInstance
    });
  });
  return function archiveOnClick2(_x7, _x8) {
    return _ref7.apply(this, arguments);
  };
}();
var removeOnClick = /* @__PURE__ */ function() {
  var _ref8 = _asyncToGenerator(function* (event, {
    sectionIdSpans,
    messageChannel,
    refreshChannel,
    indexNo,
    anchor,
    toastifyInstance
  }) {
    var _event$target2;
    event.preventDefault();
    const parentElement = (_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.parentElement;
    if (!parentElement) {
      return;
    }
    parentElement.replaceChildren(/* @__PURE__ */ import_ext_gadget5.default.createElement("span", null, getMessage("Deleting")));
    var _iterator5 = _createForOfIteratorHelper(sectionIdSpans), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const span = _step5.value;
        span.remove();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    let message = getDeletingMessage(indexNo);
    messageChannel.postMessage(message);
    toastifyInstance || (toastifyInstance = {
      hideToast: () => {
      }
    });
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget6.toastify)({
      text: message,
      close: true,
      duration: -1
    }, "info");
    yield removeSection({
      index: indexNo,
      anchor
    });
    parentElement.replaceChildren(/* @__PURE__ */ import_ext_gadget5.default.createElement("span", null, getMessage("Deleted")));
    message = getDeletedMessage(indexNo);
    messageChannel.postMessage(message);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget6.toastify)({
      text: message,
      close: true,
      duration: -1
    }, "info");
    messageChannel.close();
    refreshChannel.postMessage("Refresh");
    refresh({
      toastifyInstance
    });
  });
  return function removeOnClick2(_x9, _x10) {
    return _ref8.apply(this, arguments);
  };
}();
//! src/EasyArchive/modules/components/sectionLink.tsx
var OnClick = ({
  textContent,
  className,
  onClick
}) => /* @__PURE__ */ import_ext_gadget7.default.createElement("a", {
  className: ["gadget-easy_archive__link", "gadget-easy_archive__link-".concat(className)],
  onClick: onClick || (() => {
  }),
  textContent
});
var SectionID = ({
  children = /* @__PURE__ */ import_ext_gadget7.default.createElement(import_ext_gadget7.default.Fragment, null)
}) => /* @__PURE__ */ import_ext_gadget7.default.createElement("span", {
  className: sectionIdSpan
}, children);
var Pipe = () => /* @__PURE__ */ import_ext_gadget7.default.createElement("span", {
  className: "mw-editsection-divider",
  textContent: "|"
});
var ArchiveSectionLink = ({
  sectionIdSpans,
  messageChannel,
  refreshChannel,
  indexNo,
  anchor,
  archiveTo,
  toastifyInstance
}) => /* @__PURE__ */ import_ext_gadget7.default.createElement(OnClick, {
  className: "archive",
  onClick: (event) => {
    void archiveOnClick(event, {
      sectionIdSpans,
      messageChannel,
      refreshChannel,
      indexNo,
      anchor,
      archiveTo,
      toastifyInstance
    });
  },
  textContent: getMessage("Archive")
});
var RemoveSectionLink = ({
  sectionIdSpans,
  messageChannel,
  refreshChannel,
  indexNo,
  anchor,
  toastifyInstance
}) => /* @__PURE__ */ import_ext_gadget7.default.createElement(OnClick, {
  className: "delete",
  onClick: (event) => {
    void removeOnClick(event, {
      sectionIdSpans,
      messageChannel,
      refreshChannel,
      indexNo,
      anchor,
      toastifyInstance
    });
  },
  textContent: getMessage("Delete")
});
var ArchiveAndDeleteSectionLink = ({
  sectionIdSpans,
  messageChannel,
  refreshChannel,
  indexNo,
  anchor,
  toastifyInstance,
  secArc,
  secDel,
  arcLoc
}) => /* @__PURE__ */ import_ext_gadget7.default.createElement(SectionID, null, /* @__PURE__ */ import_ext_gadget7.default.createElement(import_ext_gadget7.default.Fragment, null, secArc === "1" ? /* @__PURE__ */ import_ext_gadget7.default.createElement(ArchiveSectionLink, {
  sectionIdSpans,
  messageChannel,
  refreshChannel,
  indexNo,
  anchor,
  toastifyInstance,
  archiveTo: arcLoc
}) : /* @__PURE__ */ import_ext_gadget7.default.createElement(import_ext_gadget7.default.Fragment, null), secArc === "1" && secDel === "1" ? /* @__PURE__ */ import_ext_gadget7.default.createElement(Pipe, null) : /* @__PURE__ */ import_ext_gadget7.default.createElement(import_ext_gadget7.default.Fragment, null), secDel === "1" ? /* @__PURE__ */ import_ext_gadget7.default.createElement(RemoveSectionLink, {
  sectionIdSpans,
  messageChannel,
  refreshChannel,
  indexNo,
  anchor,
  toastifyInstance
}) : /* @__PURE__ */ import_ext_gadget7.default.createElement(import_ext_gadget7.default.Fragment, null)));
//! src/EasyArchive/modules/components/editConflictNotice.tsx
var import_ext_gadget8 = __toESM(require("ext.gadget.JSX"), 1);
var EditConflictNotice = ({
  onClick
}) => /* @__PURE__ */ import_ext_gadget8.default.createElement("span", null, getMessage("Edit Confilict Notice"), /* @__PURE__ */ import_ext_gadget8.default.createElement("a", {
  onClick
}, getMessage("Refresh")));
//! src/EasyArchive/modules/addLinks.tsx
var import_ext_gadget9 = __toESM(require("ext.gadget.JSX"), 1);
var import_ext_gadget10 = require("ext.gadget.Toastify");
var addLinks = /* @__PURE__ */ function() {
  var _ref9 = _asyncToGenerator(function* ({
    arcLevel,
    arcLoc,
    secArc,
    secDel
  }) {
    const {
      wgPageName
    } = mw.config.get();
    const sectionsToArchive = yield getSections(wgPageName);
    const headings = document.querySelectorAll("h".concat(arcLevel));
    const headlines = [];
    const headingIndices = [];
    var _iterator6 = _createForOfIteratorHelper(headings), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        const heading = _step6.value;
        const headline = heading.querySelector(".mw-headline");
        if (headline) {
          headlines[headlines.length] = headline.id;
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    const sectionIdSpans = [];
    let toastifyInstance = {
      hideToast: () => {
      }
    };
    const messageChannel = new BroadcastChannel("".concat(wgPageName, "_message"));
    const refreshChannel = new BroadcastChannel("".concat(wgPageName, "_refresh"));
    var _iterator7 = _createForOfIteratorHelper(sectionsToArchive), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        const section = _step7.value;
        if (section.level !== arcLevel) {
          continue;
        }
        if (headlines.includes(section.anchor)) {
          headingIndices[headingIndices.length] = {
            indexNo: section.index,
            anchor: section.anchor
          };
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    for (var _i2 = 0, _headingIndices = headingIndices; _i2 < _headingIndices.length; _i2++) {
      const {
        indexNo,
        anchor
      } = _headingIndices[_i2];
      const headline = document.getElementById(anchor);
      if (!headline) {
        continue;
      }
      const parentHeading = headline.parentElement;
      if (!parentHeading) {
        continue;
      }
      const editSection = parentHeading.querySelector(".mw-editsection");
      if (!editSection) {
        continue;
      }
      const sectionIDSpan = /* @__PURE__ */ import_ext_gadget9.default.createElement(ArchiveAndDeleteSectionLink, {
        sectionIdSpans,
        messageChannel,
        refreshChannel,
        indexNo,
        anchor,
        toastifyInstance,
        arcLoc,
        secArc,
        secDel
      });
      editSection.prepend(sectionIDSpan);
      sectionIdSpans[sectionIdSpans.length] = sectionIDSpan;
    }
    messageChannel.addEventListener("message", (event) => {
      for (var _i3 = 0, _sectionIdSpans = sectionIdSpans; _i3 < _sectionIdSpans.length; _i3++) {
        const span = _sectionIdSpans[_i3];
        span.remove();
      }
      toastifyInstance.hideToast();
      toastifyInstance = (0, import_ext_gadget10.toastify)({
        text: event.data,
        close: true,
        duration: 3 * 1e3
      }, "info");
    });
    refreshChannel.addEventListener("message", () => {
      toastifyInstance.hideToast();
      toastifyInstance = (0, import_ext_gadget10.toastify)({
        node: /* @__PURE__ */ import_ext_gadget9.default.createElement(EditConflictNotice, {
          onClick: () => {
            toastifyInstance.hideToast();
            refresh();
          }
        }),
        close: true,
        duration: -1
      }, "info");
    });
  });
  return function addLinks2(_x11) {
    return _ref9.apply(this, arguments);
  };
}();
//! src/EasyArchive/modules/loadEasyArcive.tsx
var loadEasyArcive = () => {
  const notSupported = isNotSupported();
  if (notSupported) {
    return;
  }
  const mountPoint = document.querySelector(mountPointSelector);
  if (!mountPoint) {
    return;
  }
  const inBlacklist = isInBlacklist();
  if (inBlacklist) {
    mountPoint.prepend(/* @__PURE__ */ import_ext_gadget11.default.createElement(InBlackList, null));
    return;
  }
  const notAllowed = isNotAllowed();
  if (notAllowed) {
    mountPoint.prepend(/* @__PURE__ */ import_ext_gadget11.default.createElement(NotAllowed, null));
    return;
  }
  const settings = getSettings();
  if (!settings) {
    mountPoint.prepend(/* @__PURE__ */ import_ext_gadget11.default.createElement(NoArcLoc, null));
    return;
  }
  const {
    arcLoc
  } = settings;
  if (!arcLoc) {
    mountPoint.prepend(/* @__PURE__ */ import_ext_gadget11.default.createElement(NoArcLoc, null));
    return;
  }
  const arcLocNotAllowed = ifArcLocNotAllowed(arcLoc);
  if (arcLocNotAllowed) {
    mountPoint.prepend(/* @__PURE__ */ import_ext_gadget11.default.createElement(ArcLocNotAllowed, {
      arcLoc
    }));
    return;
  }
  mountPoint.prepend(/* @__PURE__ */ import_ext_gadget11.default.createElement(Enabled, {
    arcLoc
  }));
  void addLinks(settings);
};
//! src/EasyArchive/EasyArchive.ts
(function easyArchive() {
  loadEasyArcive();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL2Zvb3Rlck5vdGljZXMudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2NvbXBvbmVudHMvRWFzeUFyY2hpdmUubW9kdWxlLmxlc3MiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL3Nhbml0aXplLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvZ2V0U2V0dGluZ3MudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvbG9hZEVhc3lBcmNpdmUudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2NvbXBvbmVudHMvc2VjdGlvbkxpbmsudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvZ2V0U2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2VkaXRTZWN0aW9uLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvZ2V0TWVzc2FnZS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL29uQ2xpY2sudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvcmVmcmVzaFBhZ2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvY29tcG9uZW50cy9lZGl0Q29uZmxpY3ROb3RpY2UudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2FkZExpbmtzLnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvRWFzeUFyY2hpdmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgICB2YXIgY2hhbm5lbHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIEJyb2FkY2FzdENoYW5uZWwoY2hhbm5lbCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICBjaGFubmVsID0gU3RyaW5nKGNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBpZCA9ICckQnJvYWRjYXN0Q2hhbm5lbCQnICsgY2hhbm5lbCArICckJztcblxuICAgICAgICBjaGFubmVsc1tpZF0gPSBjaGFubmVsc1tpZF0gfHwgW107XG4gICAgICAgIGNoYW5uZWxzW2lkXS5wdXNoKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX25hbWUgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWMgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDEuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDIuc3RhcnQoKTtcblxuICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnN0b3JhZ2VBcmVhICE9PSBnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5uZXdWYWx1ZSA9PSBudWxsIHx8IGUubmV3VmFsdWUgPT09ICcnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5rZXkuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCkgIT09IGlkKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAkdGhpcy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEJyb2FkY2FzdENoYW5uZWwucHJvdG90eXBlID0ge1xuICAgICAgICAvLyBCcm9hZGNhc3RDaGFubmVsIEFQSVxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0TWVzc2FnZTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gb3RoZXIgY29udGV4dHMgdmlhIHN0b3JhZ2UgZXZlbnRzLi4uXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5faWQgKyBTdHJpbmcoRGF0ZS5ub3coKSkgKyAnJCcgKyBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIGN1cnJlbnQgY29udGV4dCB2aWEgcG9ydHNcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5mb3JFYWNoKGZ1bmN0aW9uKGJjKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJjID09PSAkdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGJjLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0Mi5jbG9zZSgpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGFubmVsc1t0aGlzLl9pZF0uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEV2ZW50VGFyZ2V0IEFQSVxuICAgICAgICBnZXQgb25tZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9ubWVzc2FnZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEub25tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oLypldmVudCovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuZGlzcGF0Y2hFdmVudC5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgPSBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCB8fCBCcm9hZGNhc3RDaGFubmVsO1xufSkoc2VsZik7XG4iLCAie1xuXHRcImVsZW1lbnRJZFwiOiBcImdhZGdldC1lYXN5X2FyY2hpdmVcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtmb290ZXJOb3RpY2V9IGZyb20gJy4vRWFzeUFyY2hpdmUubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7c2FuaXRpemV9IGZyb20gJy4uL3V0aWwvc2FuaXRpemUnO1xuXG5pbnRlcmZhY2UgRm9vdGVyTm90aWNlUHJvcHMge1xuXHRjaGlsZHJlbjogUmVhY3RFbGVtZW50O1xufVxuXG5pbnRlcmZhY2UgQXJjTG9jUHJvcHMge1xuXHRhcmNMb2M6IHN0cmluZztcbn1cblxuY29uc3QgRm9vdGVyTm90aWNlID0gKHtjaGlsZHJlbiA9IDw+PC8+fTogRm9vdGVyTm90aWNlUHJvcHMpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHtza2luID09PSAnY2l0aXplbicgPyAoXG5cdFx0XHRcdDxzZWN0aW9uXG5cdFx0XHRcdFx0aWQ9e09QVElPTlMuZWxlbWVudElkfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17W2Zvb3Rlck5vdGljZSwgJ3BhZ2UtaW5mb19faXRlbScsICdjaXRpemVuLWZvb3Rlcl9fcGFnZWluZm8taXRlbScsICdub3ByaW50J119XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdCkgOiBbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpID8gKFxuXHRcdFx0XHQ8bGkgaWQ9e09QVElPTlMuZWxlbWVudElkfSBjbGFzc05hbWU9e1tmb290ZXJOb3RpY2UsICdub3ByaW50J119PlxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PC9saT5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxkaXYgaWQ9e09QVElPTlMuZWxlbWVudElkfSBjbGFzc05hbWU9e1tmb290ZXJOb3RpY2UsICdub3ByaW50J119PlxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvPlxuXHQpO1xufTtcblxuY29uc3QgSW5CbGFja0xpc3QgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2U+XG5cdFx0PD5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCcpfVxuXHRcdFx0PGJyIC8+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQgZGV0YWlscycpfVxuXHRcdDwvPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmNvbnN0IE5vdEFsbG93ZWQgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2U+XG5cdFx0PD57Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBhbGxvd2VkJyl9PC8+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuY29uc3QgQXJjTG9jTm90QWxsb3dlZCA9ICh7YXJjTG9jfTogQXJjTG9jUHJvcHMpID0+IChcblx0PEZvb3Rlck5vdGljZT5cblx0XHQ8PlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQnKS5yZXBsYWNlKCckMScsIHNhbml0aXplKGFyY0xvYykpfVxuXHRcdFx0PGJyIC8+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCBkZXRhaWxzJyl9XG5cdFx0PC8+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuY29uc3QgTm9BcmNMb2MgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2U+XG5cdFx0PD57Z2V0TWVzc2FnZSgnTm8gQXJjaGl2ZSBMb2NhdGlvbicpfTwvPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmNvbnN0IEVuYWJsZWQgPSAoe2FyY0xvY306IEFyY0xvY1Byb3BzKSA9PiAoXG5cdDxGb290ZXJOb3RpY2U+XG5cdFx0PD5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgZW5hYmxlZCcpfVxuXHRcdFx0e2dldE1lc3NhZ2UoJygnKX1cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIGxvY2F0aW9uJyl9XG5cdFx0XHQ8YSB0aXRsZT17c2FuaXRpemUoYXJjTG9jKX0gaHJlZj17YC93aWtpLyR7c2FuaXRpemUoYXJjTG9jKX1gfT5cblx0XHRcdFx0e2FyY0xvY31cblx0XHRcdDwvYT5cblx0XHRcdHtnZXRNZXNzYWdlKCcpJyl9XG5cdFx0XHR7Z2V0TWVzc2FnZSgnLicpfVxuXHRcdDwvPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmV4cG9ydCB7Rm9vdGVyTm90aWNlLCBFbmFibGVkLCBJbkJsYWNrTGlzdCwgTm90QWxsb3dlZCwgQXJjTG9jTm90QWxsb3dlZCwgTm9BcmNMb2N9O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL0Vhc3lBcmNoaXZlLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgZm9vdGVyTm90aWNlID0gXCJFYXN5QXJjaGl2ZS1tb2R1bGVfX2Zvb3Rlck5vdGljZV9aUmtHMXFfXzQ5MFwiO1xuZXhwb3J0IGNvbnN0IHNlY3Rpb25JZFNwYW4gPSBcIkVhc3lBcmNoaXZlLW1vZHVsZV9fc2VjdGlvbklkU3Bhbl9aUmtHMXFfXzQ5MFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZm9vdGVyTm90aWNlXCI6IGZvb3Rlck5vdGljZSxcbiAgXCJzZWN0aW9uSWRTcGFuXCI6IHNlY3Rpb25JZFNwYW5cbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFyY2hpdmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBsb2NhdGlvbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZSBsb2NhdGlvbjogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+WcsOWdgO+8micsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpToh7PvvJonLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGJ1dCBFYXN5IGFyY2hpdmUgY2Fubm90IG9wZXJhdGUgbGlrZSB0aGlzLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAneOAgkVhc3kgQXJjaGl2ZSDml6Dms5XmjInmraTlnLDlnYDlrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3jgIJFYXN5IEFyY2hpdmUg54Sh5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCBkZXRhaWxzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlcyBzaG91bGQgbm90IGJlIG5vcm1hbGx5IGRpcmVjdGVkIHRvIHBhZ2VzIHVuZGVyIGFydGljbGUgbmFtZXNwYWNlLiBQbGVhc2UgY2hlY2sgaWYgeW91IGhhdmUgdGhlIGNvcnJlY3QgYXJjaGl2ZSBsb2NhdGlvbi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA6Iis6ICM6KiA77yM5LiN5bqU5ZCR5p2h55uu5ZCN56ew56m66Ze06L+b6KGM5a2Y5qGj44CC5q2k5aSW77yM5a2Y5qGj5Zyw5Z2A5LiN5b6X5ZKM5q2k6aG16Z2i5ZCN56ew55u45ZCM44CC6K+35qOA5p+l5a2Y5qGj5Zyw5Z2A44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOiIrOiAjOiogO+8jOS4jeaHieWQkeaineebruWQjeeoseepuumWk+mAsuihjOWtmOaqlOOAguatpOWklu+8jOWtmOaqlOWcsOWdgOS4jeW+l+WSjOatpOmggemdouWQjeeoseebuOWQjOOAguiri+aqouafpeWtmOaqlOWcsOWdgOOAgicsXG5cdFx0fSksXG5cdFx0QXJjaGl2aW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmluZycsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5LitJyxcblx0XHR9KSxcblx0XHRBcmNoaXZlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRWRpdCBDb25maWxpY3QgTm90aWNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBhbHJlYWR5IGFyY2hpdmVkIGFuZC9vciBkZWxldGVkIGEgc2VjdGlvbiBvbiB0aGlzIHBhZ2UuIFBsZWFzZSByZWZyZXNoIHRoZSBwYWdlIGFuZCBjb250aW51ZSBhcmNoaXZpbmcgb3IgZGVsZXRpbmcgb3RoZXIgc2VjdGlvbnMgdG8gYXZvaWQgZWRpdGluZyBjb25mbGljdHMuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOW3sue7j+WcqOacrOmhtemdouaJp+ihjOS6huWtmOaho+OAgeWIoOmZpOeroOiKgueahOaTjeS9nOOAguivt+WIt+aWsOmhtemdou+8jOeEtuWQjue7p+e7reWtmOaho+OAgeWIoOmZpOacrOmhtemdoueahOWFtuS7lueroOiKgu+8jOS7pemBv+WFjee8lui+keWGsueqgeOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmgqjlt7LntpPlnKjmnKzpoIHpnaLln7fooYzkuoblrZjmqpTjgIHliKrpmaTnq6Dnr4DnmoTmk43kvZzjgILoq4vliLfmlrDpoIHpnaLvvIznhLblvoznubznuozlrZjmqpTjgIHliKrpmaTmnKzpoIHpnaLnmoTlhbbku5bnq6Dnr4DvvIzku6Xpgb/lhY3nt6jovK/ooZ3nqoHjgIInLFxuXHRcdH0pLFxuXHRcdERlbGV0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpCcsXG5cdFx0fSksXG5cdFx0RGVsZXRpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRpbmcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOS4rScsXG5cdFx0fSksXG5cdFx0RGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICflt7LliKrpmaQnLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5q616JC9Jyxcblx0XHR9KSxcblx0XHQnQ3JlYXRlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2NyZWF0ZSBhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W7uueri+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflu7rnq4vlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdEZWxldGUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOauteiQvScsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBlbmFibGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgaXMgZW5hYmxlZCBvbiB0aGlzIHRhbGsgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfmnKzorqjorrrpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3QgYWxsb3dlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGNhbm5vdCB1c2UgRWFzeSBBcmNoaXZlIHRvIGFyY2hpdmUgdGhyZWFkcyBvbiB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOS4jeWPr+S7peWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOS4jeWPr+S7peWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQgZGV0YWlscyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlc2UgcGFnZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlOiBBcnRpY2xlLCBGaWxlLCBUZW1wbGF0ZSwgTW9kdWxlLCBNZWRpYVdpa2ksIENhdGVnb3J5LCBTcGVjaWFsLCBKYXZhU2NyaXB0LCBDU1MsIEpTT04uJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+i/meS6m+mhtemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77ya5p2h55uu44CBRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6YCZ5Lqb6aCB6Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJrmop3nm67vvIxGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0fSksXG5cdFx0J05vIEFyY2hpdmUgTG9jYXRpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBjYW4gYmUgdXNlZCBvbiB0aGlzIHBhZ2UgaWYgbmVlZGVkLiBUbyBlbmFibGUgaXQsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+iLpemcgOimge+8jOatpOmhtemdouWPr+S7peWQr+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6K+35Zyo6aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+iLpemcgOimge+8jOatpOmggemdouWPr+S7peWVn+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6KuL5Zyo6aCB6Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn1944CCJyxcblx0XHR9KSxcblx0XHQnU2VjdGlvbiAkMSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VjdGlvbiAkMScsXG5cdFx0XHR6aDogJ+esrCAkMSDnq6DoioInLFxuXHRcdH0pLFxuXHRcdCcoJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0JyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyknLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdCcuJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcuJyxcblx0XHRcdHpoOiAn44CCJyxcblx0XHR9KSxcblx0XHQnOic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOiAnLFxuXHRcdFx0emg6ICfvvJonLFxuXHRcdH0pLFxuXHRcdFJlZnJlc2g6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVmcmVzaCB0aGUgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfliLfmlrDlvZPliY3pobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn6YeN5paw6LyJ5YWl55W25YmN6aCBJyxcblx0XHR9KSxcblx0XHRSZWZyZXNoaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlZnJlc2hpbmcuLi4nLFxuXHRcdFx0amE6ICflho3oqq3jgb/ovrzjgb/jgZfjgb7jgZkuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Y2z5bCG5Yi35paw5b2T5YmN6aG16Z2i4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+WNs+Wwh+mHjeaWsOi8ieWFpeeVtuWJjemggeKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IHNhbml0aXplID0gKHN0cmluZzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBzdHJpbmdcblx0XHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuXHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0LnJlcGxhY2UoLycvZywgJyZhcG9zOycpXG5cdFx0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn07XG5cbmV4cG9ydCB7c2FuaXRpemV9O1xuIiwgImNvbnN0IGlmQXJjTG9jTm90QWxsb3dlZCA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNvdXJjZVRpdGxlID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpO1xuXHRjb25zdCBhcmNMb2NUaXRsZSA9IG5ldyBtdy5UaXRsZShhcmNMb2MpO1xuXG5cdGNvbnN0IGFyY0xvY05hbWVzcGFjZUlkID0gYXJjTG9jVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3QgYXJjTG9jUGFnZU5hbWUgPSBhcmNMb2NUaXRsZS5nZXRNYWluKCk7XG5cdGNvbnN0IHNvdXJjZU5hbWVzcGFjZUlkID0gc291cmNlVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3Qgc291cmNlUGFnZU5hbWUgPSBzb3VyY2VUaXRsZS5nZXRNYWluKCk7XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoYXJjTG9jTmFtZXNwYWNlSWQgPT09IHNvdXJjZU5hbWVzcGFjZUlkICYmIGFyY0xvY1BhZ2VOYW1lID09PSBzb3VyY2VQYWdlTmFtZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNJbkJsYWNrbGlzdCA9ICgpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGJsYWNrTGlzdFJlZ2V4QXJyID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja0xpc3RSZWdleEFycikge1xuXHRcdGlmIChlbGVtZW50LnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzTm90QWxsb3dlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1JlbGV2YW50VXNlck5hbWUsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICgod2dOYW1lc3BhY2VOdW1iZXIgPT09IDIgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDMpICYmICEod2dSZWxldmFudFVzZXJOYW1lID09PSB3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNOb3RTdXBwb3J0ZWQgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0lzTWFpblBhZ2UsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z0N1clJldmlzaW9uSWQsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCB8fCB3Z0N1clJldmlzaW9uSWQgLSB3Z1JldmlzaW9uSWQgIT09IDApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCB8fCB3Z0lzTWFpblBhZ2UpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHtkYXRhc2V0fSA9IHNldHRpbmdzO1xuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gZGF0YXNldDtcblx0cmV0dXJuIHtcblx0XHRhcmNMZXZlbDogYXJjTGV2ZWwgPz8gJzInLFxuXHRcdGFyY0xvYzogYXJjTG9jID8/ICcnLFxuXHRcdHNlY0FyYzogc2VjQXJjID8/ICcxJyxcblx0XHRzZWNEZWw6IHNlY0RlbCA/PyAnMScsXG5cdH07XG59O1xuXG5leHBvcnQge2dldFNldHRpbmdzLCBpZkFyY0xvY05vdEFsbG93ZWQsIGlzSW5CbGFja2xpc3QsIGlzTm90QWxsb3dlZCwgaXNOb3RTdXBwb3J0ZWR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7QXJjTG9jTm90QWxsb3dlZCwgRW5hYmxlZCwgSW5CbGFja0xpc3QsIE5vQXJjTG9jLCBOb3RBbGxvd2VkfSBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyTm90aWNlcyc7XG5pbXBvcnQge2dldFNldHRpbmdzLCBpZkFyY0xvY05vdEFsbG93ZWQsIGlzSW5CbGFja2xpc3QsIGlzTm90QWxsb3dlZCwgaXNOb3RTdXBwb3J0ZWR9IGZyb20gJy4vdXRpbC9nZXRTZXR0aW5ncyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHthZGRMaW5rc30gZnJvbSAnLi9hZGRMaW5rcyc7XG5cbmNvbnN0IGxvYWRFYXN5QXJjaXZlID0gKCkgPT4ge1xuXHRjb25zdCBub3RTdXBwb3J0ZWQgPSBpc05vdFN1cHBvcnRlZCgpO1xuXHRpZiAobm90U3VwcG9ydGVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbW91bnRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblx0aWYgKCFtb3VudFBvaW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaW5CbGFja2xpc3QgPSBpc0luQmxhY2tsaXN0KCk7XG5cdGlmIChpbkJsYWNrbGlzdCkge1xuXHRcdG1vdW50UG9pbnQucHJlcGVuZCg8SW5CbGFja0xpc3QgLz4pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG5vdEFsbG93ZWQgPSBpc05vdEFsbG93ZWQoKTtcblx0aWYgKG5vdEFsbG93ZWQpIHtcblx0XHRtb3VudFBvaW50LnByZXBlbmQoPE5vdEFsbG93ZWQgLz4pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3MoKTtcblx0aWYgKCFzZXR0aW5ncykge1xuXHRcdG1vdW50UG9pbnQucHJlcGVuZCg8Tm9BcmNMb2MgLz4pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHthcmNMb2N9ID0gc2V0dGluZ3M7XG5cdGlmICghYXJjTG9jKSB7XG5cdFx0bW91bnRQb2ludC5wcmVwZW5kKDxOb0FyY0xvYyAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYXJjTG9jTm90QWxsb3dlZCA9IGlmQXJjTG9jTm90QWxsb3dlZChhcmNMb2MpO1xuXHRpZiAoYXJjTG9jTm90QWxsb3dlZCkge1xuXHRcdG1vdW50UG9pbnQucHJlcGVuZCg8QXJjTG9jTm90QWxsb3dlZCBhcmNMb2M9e2FyY0xvY30gLz4pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG1vdW50UG9pbnQucHJlcGVuZCg8RW5hYmxlZCBhcmNMb2M9e2FyY0xvY30gLz4pO1xuXG5cdHZvaWQgYWRkTGlua3Moc2V0dGluZ3MpO1xufTtcblxuZXhwb3J0IHtsb2FkRWFzeUFyY2l2ZX07XG4iLCAiaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2FyY2hpdmVPbkNsaWNrLCByZW1vdmVPbkNsaWNrfSBmcm9tICcuLi91dGlsL29uQ2xpY2snO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7c2VjdGlvbklkU3Bhbn0gZnJvbSAnLi9FYXN5QXJjaGl2ZS5tb2R1bGUubGVzcyc7XG5cbmludGVyZmFjZSBPbkNsaWNrUHJvcHMge1xuXHR0ZXh0Q29udGVudDogc3RyaW5nO1xuXHRjbGFzc05hbWU6IHN0cmluZztcblx0b25DbGljaz86IChldmVudDogRXZlbnQpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBTZWN0aW9uSURQcm9wcyB7XG5cdGNoaWxkcmVuPzogUmVhY3RFbGVtZW50O1xufVxuXG5jb25zdCBPbkNsaWNrID0gKHt0ZXh0Q29udGVudCwgY2xhc3NOYW1lLCBvbkNsaWNrfTogT25DbGlja1Byb3BzKSA9PiAoXG5cdDxhXG5cdFx0Y2xhc3NOYW1lPXtbJ2dhZGdldC1lYXN5X2FyY2hpdmVfX2xpbmsnLCBgZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fbGluay0ke2NsYXNzTmFtZX1gXX1cblx0XHRvbkNsaWNrPXtvbkNsaWNrIHx8ICgoKSA9PiB7fSl9XG5cdFx0dGV4dENvbnRlbnQ9e3RleHRDb250ZW50fVxuXHQvPlxuKTtcblxuY29uc3QgU2VjdGlvbklEID0gKHtjaGlsZHJlbiA9IDw+PC8+fTogU2VjdGlvbklEUHJvcHMpID0+IDxzcGFuIGNsYXNzTmFtZT17c2VjdGlvbklkU3Bhbn0+e2NoaWxkcmVufTwvc3Bhbj47XG5cbmNvbnN0IFBpcGUgPSAoKSA9PiA8c3BhbiBjbGFzc05hbWU9XCJtdy1lZGl0c2VjdGlvbi1kaXZpZGVyXCIgdGV4dENvbnRlbnQ9eyd8J30gLz47XG5cbmludGVyZmFjZSBBcmNoaXZlU2VjdGlvbkxpbmtQcm9wcyB7XG5cdHNlY3Rpb25JZFNwYW5zOiBFbGVtZW50W107XG5cdG1lc3NhZ2VDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRyZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0aW5kZXhObzogc3RyaW5nO1xuXHRhbmNob3I6IHN0cmluZztcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcblx0YXJjaGl2ZVRvOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFyY2hpdmVTZWN0aW9uTGluayA9ICh7XG5cdHNlY3Rpb25JZFNwYW5zLFxuXHRtZXNzYWdlQ2hhbm5lbCxcblx0cmVmcmVzaENoYW5uZWwsXG5cdGluZGV4Tm8sXG5cdGFuY2hvcixcblx0YXJjaGl2ZVRvLFxuXHR0b2FzdGlmeUluc3RhbmNlLFxufTogQXJjaGl2ZVNlY3Rpb25MaW5rUHJvcHMpID0+IChcblx0PE9uQ2xpY2tcblx0XHRjbGFzc05hbWU9eydhcmNoaXZlJ31cblx0XHRvbkNsaWNrPXsoZXZlbnQ6IEV2ZW50KSA9PiB7XG5cdFx0XHR2b2lkIGFyY2hpdmVPbkNsaWNrKGV2ZW50LCB7XG5cdFx0XHRcdHNlY3Rpb25JZFNwYW5zLFxuXHRcdFx0XHRtZXNzYWdlQ2hhbm5lbCxcblx0XHRcdFx0cmVmcmVzaENoYW5uZWwsXG5cdFx0XHRcdGluZGV4Tm8sXG5cdFx0XHRcdGFuY2hvcixcblx0XHRcdFx0YXJjaGl2ZVRvLFxuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLFxuXHRcdFx0fSk7XG5cdFx0fX1cblx0XHR0ZXh0Q29udGVudD17Z2V0TWVzc2FnZSgnQXJjaGl2ZScpfVxuXHQvPlxuKTtcblxuaW50ZXJmYWNlIFJlbW92ZVNlY3Rpb25MaW5rUHJvcHMge1xuXHRzZWN0aW9uSWRTcGFuczogRWxlbWVudFtdO1xuXHRtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0cmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdGluZGV4Tm86IHN0cmluZztcblx0YW5jaG9yOiBzdHJpbmc7XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG59XG5cbmNvbnN0IFJlbW92ZVNlY3Rpb25MaW5rID0gKHtcblx0c2VjdGlvbklkU3BhbnMsXG5cdG1lc3NhZ2VDaGFubmVsLFxuXHRyZWZyZXNoQ2hhbm5lbCxcblx0aW5kZXhObyxcblx0YW5jaG9yLFxuXHR0b2FzdGlmeUluc3RhbmNlLFxufTogUmVtb3ZlU2VjdGlvbkxpbmtQcm9wcykgPT4gKFxuXHQ8T25DbGlja1xuXHRcdGNsYXNzTmFtZT17J2RlbGV0ZSd9XG5cdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHR2b2lkIHJlbW92ZU9uQ2xpY2soZXZlbnQsIHtcblx0XHRcdFx0c2VjdGlvbklkU3BhbnMsXG5cdFx0XHRcdG1lc3NhZ2VDaGFubmVsLFxuXHRcdFx0XHRyZWZyZXNoQ2hhbm5lbCxcblx0XHRcdFx0aW5kZXhObyxcblx0XHRcdFx0YW5jaG9yLFxuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLFxuXHRcdFx0fSk7XG5cdFx0fX1cblx0XHR0ZXh0Q29udGVudD17Z2V0TWVzc2FnZSgnRGVsZXRlJyl9XG5cdC8+XG4pO1xuXG5pbnRlcmZhY2UgQXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rUHJvcHMge1xuXHRzZWN0aW9uSWRTcGFuczogRWxlbWVudFtdO1xuXHRtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0cmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdGluZGV4Tm86IHN0cmluZztcblx0YW5jaG9yOiBzdHJpbmc7XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG5cdHNlY0FyYzogc3RyaW5nO1xuXHRzZWNEZWw6IHN0cmluZztcblx0YXJjTG9jOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGluayA9ICh7XG5cdHNlY3Rpb25JZFNwYW5zLFxuXHRtZXNzYWdlQ2hhbm5lbCxcblx0cmVmcmVzaENoYW5uZWwsXG5cdGluZGV4Tm8sXG5cdGFuY2hvcixcblx0dG9hc3RpZnlJbnN0YW5jZSxcblx0c2VjQXJjLFxuXHRzZWNEZWwsXG5cdGFyY0xvYyxcbn06IEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGlua1Byb3BzKSA9PiAoXG5cdDxTZWN0aW9uSUQ+XG5cdFx0PD5cblx0XHRcdHtzZWNBcmMgPT09ICcxJyA/IChcblx0XHRcdFx0PEFyY2hpdmVTZWN0aW9uTGlua1xuXHRcdFx0XHRcdHNlY3Rpb25JZFNwYW5zPXtzZWN0aW9uSWRTcGFuc31cblx0XHRcdFx0XHRtZXNzYWdlQ2hhbm5lbD17bWVzc2FnZUNoYW5uZWx9XG5cdFx0XHRcdFx0cmVmcmVzaENoYW5uZWw9e3JlZnJlc2hDaGFubmVsfVxuXHRcdFx0XHRcdGluZGV4Tm89e2luZGV4Tm99XG5cdFx0XHRcdFx0YW5jaG9yPXthbmNob3J9XG5cdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZT17dG9hc3RpZnlJbnN0YW5jZX1cblx0XHRcdFx0XHRhcmNoaXZlVG89e2FyY0xvY31cblx0XHRcdFx0Lz5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDw+PC8+XG5cdFx0XHQpfVxuXHRcdFx0e3NlY0FyYyA9PT0gJzEnICYmIHNlY0RlbCA9PT0gJzEnID8gPFBpcGUgLz4gOiA8PjwvPn1cblx0XHRcdHtzZWNEZWwgPT09ICcxJyA/IChcblx0XHRcdFx0PFJlbW92ZVNlY3Rpb25MaW5rXG5cdFx0XHRcdFx0c2VjdGlvbklkU3BhbnM9e3NlY3Rpb25JZFNwYW5zfVxuXHRcdFx0XHRcdG1lc3NhZ2VDaGFubmVsPXttZXNzYWdlQ2hhbm5lbH1cblx0XHRcdFx0XHRyZWZyZXNoQ2hhbm5lbD17cmVmcmVzaENoYW5uZWx9XG5cdFx0XHRcdFx0aW5kZXhObz17aW5kZXhOb31cblx0XHRcdFx0XHRhbmNob3I9e2FuY2hvcn1cblx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlPXt0b2FzdGlmeUluc3RhbmNlfVxuXHRcdFx0XHQvPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PD48Lz5cblx0XHRcdCl9XG5cdFx0PC8+XG5cdDwvU2VjdGlvbklEPlxuKTtcblxuZXhwb3J0IHtBcmNoaXZlU2VjdGlvbkxpbmssIFJlbW92ZVNlY3Rpb25MaW5rLCBBcmNoaXZlQW5kRGVsZXRlU2VjdGlvbkxpbmt9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgRWFzeUFyY2hpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9ucyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwYWdlOiB0aXRsZSxcblx0XHRwcm9wOiAnc2VjdGlvbnMnLFxuXHR9O1xuXG5cdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdGNvbnN0IHtzZWN0aW9uc30gPSBwYXJzZSBhcyB7XG5cdFx0c2VjdGlvbnM6IHtcblx0XHRcdGxldmVsOiBzdHJpbmc7XG5cdFx0XHRpbmRleDogc3RyaW5nO1xuXHRcdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0fVtdO1xuXHR9O1xuXG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gW107XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0Y29uc3Qge2xldmVsLCBpbmRleCwgYW5jaG9yfSA9IHNlY3Rpb247XG5cblx0XHRpZiAoaW5kZXguc3RhcnRzV2l0aCgnVC0nKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0c2VjdGlvbnNUb0FyY2hpdmVbc2VjdGlvbnNUb0FyY2hpdmUubGVuZ3RoXSA9IHtcblx0XHRcdGxldmVsLFxuXHRcdFx0aW5kZXgsXG5cdFx0XHRhbmNob3IsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBzZWN0aW9uc1RvQXJjaGl2ZTtcbn07XG5cbmNvbnN0IGdldFNlY3Rpb25Db250ZW50ID0gYXN5bmMgKHt0aXRsZSwgc2VjdGlvbn06IHt0aXRsZTogc3RyaW5nOyBzZWN0aW9uOiBzdHJpbmd9KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdHJ2c2VjdGlvbjogc2VjdGlvbixcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdH07XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIChyZXNwb25zZVsncXVlcnknXS5wYWdlc1swXT8ucmV2aXNpb25zPy5bMF0uc2xvdHMubWFpbi5jb250ZW50IGFzIHN0cmluZykgPz8gbnVsbDtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbnMsIGdldFNlY3Rpb25Db250ZW50fTtcbiIsICJpbXBvcnQge2dldFNlY3Rpb25Db250ZW50LCBnZXRTZWN0aW9uc30gZnJvbSAnLi9nZXRTZWN0aW9uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBpc1BhZ2VFeGlzdCA9IGFzeW5jIChhcmNoaXZlVG86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbmZvJyxcblx0XHR0aXRsZXM6IGFyY2hpdmVUbyxcblx0fTtcblxuXHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdGlmIChxdWVyeS5wYWdlc1swXT8ubWlzc2luZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgaXNTZWN0aW9uRXhpc3QgPSBhc3luYyAoe2luZGV4LCBhbmNob3J9OiB7aW5kZXg6IHN0cmluZzsgYW5jaG9yOiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnMgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRsZXQgaXNFeGlzdCA9IGZhbHNlO1xuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRpZiAoaW5kZXggPT09IHNlY3Rpb24uaW5kZXggJiYgYW5jaG9yID09PSBzZWN0aW9uLmFuY2hvcikge1xuXHRcdFx0aXNFeGlzdCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBpc0V4aXN0O1xufTtcblxuY29uc3QgcmVtb3ZlU2VjdGlvbiA9IGFzeW5jICh7aW5kZXgsIGFuY2hvciwgc3VtbWFyeX06IHtpbmRleDogc3RyaW5nOyBhbmNob3I6IHN0cmluZzsgc3VtbWFyeT86IHN0cmluZ30pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpc0V4aXN0ID0gYXdhaXQgaXNTZWN0aW9uRXhpc3Qoe2luZGV4LCBhbmNob3J9KTtcblxuXHRpZiAoaXNFeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh7dGl0bGU6IHdnUGFnZU5hbWUsIHNlY3Rpb246IGluZGV4fSk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCBhcGkuZWRpdCh3Z1BhZ2VOYW1lLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlY3Rpb246IGluZGV4LFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRzdW1tYXJ5OiBzdW1tYXJ5ID8/IGdldE1lc3NhZ2UoJ0RlbGV0ZSBzdW1tYXJ5JyksXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcbn07XG5cbmNvbnN0IGFyY2hpdmVTZWN0aW9uID0gYXN5bmMgKHtpbmRleCwgYW5jaG9yLCBhcmNoaXZlVG99OiB7aW5kZXg6IHN0cmluZzsgYW5jaG9yOiBzdHJpbmc7IGFyY2hpdmVUbzogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlzRXhpc3QgPSBhd2FpdCBpc1NlY3Rpb25FeGlzdCh7aW5kZXgsIGFuY2hvcn0pO1xuXG5cdGlmIChpc0V4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHt0aXRsZTogd2dQYWdlTmFtZSwgc2VjdGlvbjogaW5kZXh9KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBhZ2VFeGlzdCA9IGF3YWl0IGlzUGFnZUV4aXN0KGFyY2hpdmVUbyk7XG5cdGlmICghcGFnZUV4aXN0KSB7XG5cdFx0YXdhaXQgYXBpLmNyZWF0ZShcblx0XHRcdGFyY2hpdmVUbyxcblx0XHRcdHtcblx0XHRcdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnQ3JlYXRlIHN1bW1hcnknKSxcblx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0J3t7dGFsa2FyY2hpdmV9fSdcblx0XHQpO1xuXHR9XG5cblx0YXdhaXQgYXBpLmVkaXQoYXJjaGl2ZVRvLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFwcGVuZHRleHQ6IGBcXG5cXG4ke2NvbnRlbnR9YCxcblx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG5cblx0YXdhaXQgcmVtb3ZlU2VjdGlvbih7aW5kZXgsIGFuY2hvciwgc3VtbWFyeTogZ2V0TWVzc2FnZSgnQXJjaGl2ZSBzdW1tYXJ5Jyl9KTtcbn07XG5cbmV4cG9ydCB7aXNTZWN0aW9uRXhpc3QsIGFyY2hpdmVTZWN0aW9uLCByZW1vdmVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZXRBcmNoaXZpbmdNZXNzYWdlID0gKGluZGV4Tm86IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gZ2V0TWVzc2FnZSgnQXJjaGl2aW5nJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcbn07XG5cbmNvbnN0IGdldEFyY2hpdmVkTWVzc2FnZSA9IChpbmRleE5vOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIGdldE1lc3NhZ2UoJ0FyY2hpdmVkJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcbn07XG5cbmNvbnN0IGdldERlbGV0aW5nTWVzc2FnZSA9IChpbmRleE5vOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIGdldE1lc3NhZ2UoJ0RlbGV0aW5nJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcbn07XG5cbmNvbnN0IGdldERlbGV0ZWRNZXNzYWdlID0gKGluZGV4Tm86IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gZ2V0TWVzc2FnZSgnRGVsZXRlZCcpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG59O1xuXG5leHBvcnQge2dldEFyY2hpdmluZ01lc3NhZ2UsIGdldEFyY2hpdmVkTWVzc2FnZSwgZ2V0RGVsZXRpbmdNZXNzYWdlLCBnZXREZWxldGVkTWVzc2FnZX07XG4iLCAiaW1wb3J0IHthcmNoaXZlU2VjdGlvbiwgcmVtb3ZlU2VjdGlvbn0gZnJvbSAnLi9lZGl0U2VjdGlvbic7XG5pbXBvcnQge2dldEFyY2hpdmVkTWVzc2FnZSwgZ2V0QXJjaGl2aW5nTWVzc2FnZSwgZ2V0RGVsZXRlZE1lc3NhZ2UsIGdldERlbGV0aW5nTWVzc2FnZX0gZnJvbSAnLi9nZXRNZXNzYWdlJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtyZWZyZXNofSBmcm9tICcuL3JlZnJlc2hQYWdlJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5pbnRlcmZhY2UgT25DbGlja1Byb3BzIHtcblx0c2VjdGlvbklkU3BhbnM6IEVsZW1lbnRbXTtcblx0bWVzc2FnZUNoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdHJlZnJlc2hDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRpbmRleE5vOiBzdHJpbmc7XG5cdGFuY2hvcjogc3RyaW5nO1xuXHR0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlO1xufVxuXG50eXBlIEFyY2hpdmVPbkNsaWNrUHJvcHMgPSBPbkNsaWNrUHJvcHMgJiB7YXJjaGl2ZVRvOiBzdHJpbmd9O1xudHlwZSBSZW1vdmVPbkNsaWNrUHJvcHMgPSBPbkNsaWNrUHJvcHM7XG5cbmNvbnN0IGFyY2hpdmVPbkNsaWNrID0gYXN5bmMgKFxuXHRldmVudDogRXZlbnQsXG5cdHtzZWN0aW9uSWRTcGFucywgbWVzc2FnZUNoYW5uZWwsIHJlZnJlc2hDaGFubmVsLCBpbmRleE5vLCBhbmNob3IsIHRvYXN0aWZ5SW5zdGFuY2UsIGFyY2hpdmVUb306IEFyY2hpdmVPbkNsaWNrUHJvcHNcbikgPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBwYXJlbnRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LnBhcmVudEVsZW1lbnQ7XG5cdGlmICghcGFyZW50RWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKDxzcGFuPntnZXRNZXNzYWdlKCdBcmNoaXZpbmcnKX08L3NwYW4+KTtcblxuXHRmb3IgKGNvbnN0IHNwYW4gb2Ygc2VjdGlvbklkU3BhbnMpIHtcblx0XHRzcGFuLnJlbW92ZSgpO1xuXHR9XG5cblx0Y29uc3QgbWVzc2FnZTEgPSBnZXRBcmNoaXZpbmdNZXNzYWdlKGluZGV4Tm8pO1xuXHRtZXNzYWdlQ2hhbm5lbC5wb3N0TWVzc2FnZShtZXNzYWdlMSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZSB8fD0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBtZXNzYWdlMSxcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0YXdhaXQgYXJjaGl2ZVNlY3Rpb24oe2luZGV4OiBpbmRleE5vLCBhbmNob3IsIGFyY2hpdmVUb30pO1xuXG5cdHBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKDxzcGFuPntnZXRNZXNzYWdlKCdBcmNoaXZlZCcpfTwvc3Bhbj4pO1xuXG5cdGNvbnN0IG1lc3NhZ2UgPSBnZXRBcmNoaXZlZE1lc3NhZ2UoaW5kZXhObyk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBtZXNzYWdlLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRtZXNzYWdlQ2hhbm5lbC5jbG9zZSgpO1xuXG5cdHJlZnJlc2hDaGFubmVsLnBvc3RNZXNzYWdlKCdSZWZyZXNoJyk7XG5cdHJlZnJlc2goe3RvYXN0aWZ5SW5zdGFuY2V9KTtcbn07XG5jb25zdCByZW1vdmVPbkNsaWNrID0gYXN5bmMgKFxuXHRldmVudDogRXZlbnQsXG5cdHtzZWN0aW9uSWRTcGFucywgbWVzc2FnZUNoYW5uZWwsIHJlZnJlc2hDaGFubmVsLCBpbmRleE5vLCBhbmNob3IsIHRvYXN0aWZ5SW5zdGFuY2V9OiBSZW1vdmVPbkNsaWNrUHJvcHNcbikgPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBwYXJlbnRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LnBhcmVudEVsZW1lbnQ7XG5cdGlmICghcGFyZW50RWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKDxzcGFuPntnZXRNZXNzYWdlKCdEZWxldGluZycpfTwvc3Bhbj4pO1xuXG5cdGZvciAoY29uc3Qgc3BhbiBvZiBzZWN0aW9uSWRTcGFucykge1xuXHRcdHNwYW4ucmVtb3ZlKCk7XG5cdH1cblxuXHRsZXQgbWVzc2FnZSA9IGdldERlbGV0aW5nTWVzc2FnZShpbmRleE5vKTtcblx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZSB8fD0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBtZXNzYWdlLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRhd2FpdCByZW1vdmVTZWN0aW9uKHtpbmRleDogaW5kZXhObywgYW5jaG9yfSk7XG5cblx0cGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oPHNwYW4+e2dldE1lc3NhZ2UoJ0RlbGV0ZWQnKX08L3NwYW4+KTtcblxuXHRtZXNzYWdlID0gZ2V0RGVsZXRlZE1lc3NhZ2UoaW5kZXhObyk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBtZXNzYWdlLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRtZXNzYWdlQ2hhbm5lbC5jbG9zZSgpO1xuXG5cdHJlZnJlc2hDaGFubmVsLnBvc3RNZXNzYWdlKCdSZWZyZXNoJyk7XG5cdHJlZnJlc2goe3RvYXN0aWZ5SW5zdGFuY2V9KTtcbn07XG5cbmV4cG9ydCB7YXJjaGl2ZU9uQ2xpY2ssIHJlbW92ZU9uQ2xpY2t9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qge3dnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgcmVmcmVzaCA9ICh7XG5cdHRhcmdldFBhZ2UsXG5cdHRvYXN0aWZ5SW5zdGFuY2UsXG59OiB7dGFyZ2V0UGFnZT86IHN0cmluZzsgdG9hc3RpZnlJbnN0YW5jZT86IFRvYXN0aWZ5SW5zdGFuY2V9ID0ge30pOiB2b2lkID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZSB8fD0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdSZWZyZXNoaW5nJyksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxvY2F0aW9uLnJlcGxhY2UoXG5cdFx0bXcudXRpbC5nZXRVcmwod2dTY3JpcHQsIHtcblx0XHRcdHRpdGxlOiB0YXJnZXRQYWdlID8/IHdnUGFnZU5hbWUsXG5cdFx0fSlcblx0KTtcbn07XG5cbmV4cG9ydCB7cmVmcmVzaH07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmludGVyZmFjZSBFZGl0Q29uZmxpY3ROb3RpY2VQcm9wcyB7XG5cdG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEVkaXRDb25mbGljdE5vdGljZSA9ICh7b25DbGlja306IEVkaXRDb25mbGljdE5vdGljZVByb3BzKSA9PiAoXG5cdDxzcGFuPlxuXHRcdHtnZXRNZXNzYWdlKCdFZGl0IENvbmZpbGljdCBOb3RpY2UnKX1cblx0XHQ8YSBvbkNsaWNrPXtvbkNsaWNrfT57Z2V0TWVzc2FnZSgnUmVmcmVzaCcpfTwvYT5cblx0PC9zcGFuPlxuKTtcblxuZXhwb3J0IHtFZGl0Q29uZmxpY3ROb3RpY2V9O1xuIiwgImltcG9ydCB7QXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rfSBmcm9tICcuL2NvbXBvbmVudHMvc2VjdGlvbkxpbmsnO1xuaW1wb3J0IHtFZGl0Q29uZmxpY3ROb3RpY2V9IGZyb20gJy4vY29tcG9uZW50cy9lZGl0Q29uZmxpY3ROb3RpY2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0U2VjdGlvbnN9IGZyb20gJy4vdXRpbC9nZXRTZWN0aW9uJztcbmltcG9ydCB7cmVmcmVzaH0gZnJvbSAnLi91dGlsL3JlZnJlc2hQYWdlJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBhZGRMaW5rcyA9IGFzeW5jICh7XG5cdGFyY0xldmVsLFxuXHRhcmNMb2MsXG5cdHNlY0FyYyxcblx0c2VjRGVsLFxufToge1xuXHRhcmNMZXZlbDogc3RyaW5nO1xuXHRhcmNMb2M6IHN0cmluZztcblx0c2VjQXJjOiBzdHJpbmc7XG5cdHNlY0RlbDogc3RyaW5nO1xufSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gYXdhaXQgZ2V0U2VjdGlvbnMod2dQYWdlTmFtZSk7XG5cblx0Y29uc3QgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBoJHthcmNMZXZlbH1gKTtcblx0Y29uc3QgaGVhZGxpbmVzID0gW107XG5cdGNvbnN0IGhlYWRpbmdJbmRpY2VzID0gW107XG5cblx0Zm9yIChjb25zdCBoZWFkaW5nIG9mIGhlYWRpbmdzKSB7XG5cdFx0Y29uc3QgaGVhZGxpbmUgPSBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1oZWFkbGluZScpO1xuXHRcdGlmIChoZWFkbGluZSkge1xuXHRcdFx0aGVhZGxpbmVzW2hlYWRsaW5lcy5sZW5ndGhdID0gaGVhZGxpbmUuaWQ7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qgc2VjdGlvbklkU3BhbnM6IEVsZW1lbnRbXSA9IFtdO1xuXHRsZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0XHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxuXHR9O1xuXG5cdGNvbnN0IG1lc3NhZ2VDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoYCR7d2dQYWdlTmFtZX1fbWVzc2FnZWApO1xuXHRjb25zdCByZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKGAke3dnUGFnZU5hbWV9X3JlZnJlc2hgKTtcblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnNUb0FyY2hpdmUpIHtcblx0XHRpZiAoc2VjdGlvbi5sZXZlbCAhPT0gYXJjTGV2ZWwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChoZWFkbGluZXMuaW5jbHVkZXMoc2VjdGlvbi5hbmNob3IpKSB7XG5cdFx0XHRoZWFkaW5nSW5kaWNlc1toZWFkaW5nSW5kaWNlcy5sZW5ndGhdID0ge1xuXHRcdFx0XHRpbmRleE5vOiBzZWN0aW9uLmluZGV4LFxuXHRcdFx0XHRhbmNob3I6IHNlY3Rpb24uYW5jaG9yLFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRmb3IgKGNvbnN0IHtpbmRleE5vLCBhbmNob3J9IG9mIGhlYWRpbmdJbmRpY2VzKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXF1ZXJ5LXNlbGVjdG9yXG5cdFx0Y29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhbmNob3IpO1xuXHRcdGlmICghaGVhZGxpbmUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhcmVudEhlYWRpbmcgPSBoZWFkbGluZS5wYXJlbnRFbGVtZW50O1xuXHRcdGlmICghcGFyZW50SGVhZGluZykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdFNlY3Rpb24gPSBwYXJlbnRIZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdGlmICghZWRpdFNlY3Rpb24pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlY3Rpb25JRFNwYW4gPSAoXG5cdFx0XHQ8QXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rXG5cdFx0XHRcdHNlY3Rpb25JZFNwYW5zPXtzZWN0aW9uSWRTcGFuc31cblx0XHRcdFx0bWVzc2FnZUNoYW5uZWw9e21lc3NhZ2VDaGFubmVsfVxuXHRcdFx0XHRyZWZyZXNoQ2hhbm5lbD17cmVmcmVzaENoYW5uZWx9XG5cdFx0XHRcdGluZGV4Tm89e2luZGV4Tm99XG5cdFx0XHRcdGFuY2hvcj17YW5jaG9yfVxuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlPXt0b2FzdGlmeUluc3RhbmNlfVxuXHRcdFx0XHRhcmNMb2M9e2FyY0xvY31cblx0XHRcdFx0c2VjQXJjPXtzZWNBcmN9XG5cdFx0XHRcdHNlY0RlbD17c2VjRGVsfVxuXHRcdFx0Lz5cblx0XHQpO1xuXG5cdFx0ZWRpdFNlY3Rpb24ucHJlcGVuZChzZWN0aW9uSURTcGFuKTtcblx0XHRzZWN0aW9uSWRTcGFuc1tzZWN0aW9uSWRTcGFucy5sZW5ndGhdID0gc2VjdGlvbklEU3Bhbjtcblx0fVxuXG5cdG1lc3NhZ2VDaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcblx0XHRmb3IgKGNvbnN0IHNwYW4gb2Ygc2VjdGlvbklkU3BhbnMpIHtcblx0XHRcdHNwYW4ucmVtb3ZlKCk7XG5cdFx0fVxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBldmVudC5kYXRhIGFzIHN0cmluZyxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXHR9KTtcblxuXHRyZWZyZXNoQ2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKCkgPT4ge1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHRub2RlOiAoXG5cdFx0XHRcdFx0PEVkaXRDb25mbGljdE5vdGljZVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdFx0XHRyZWZyZXNoKCk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpbmtzfTtcbiIsICJpbXBvcnQge2xvYWRFYXN5QXJjaXZlfSBmcm9tICcuL21vZHVsZXMvbG9hZEVhc3lBcmNpdmUnO1xuXG4oZnVuY3Rpb24gZWFzeUFyY2hpdmUoKSB7XG5cdGxvYWRFYXN5QXJjaXZlKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsS0FBQyxTQUFTLFFBQVE7QUFDZCxVQUFJLFdBQVcsQ0FBQztBQUVoQixlQUFTQSxrQkFBaUIsU0FBUztBQUMvQixZQUFJLFFBQVE7QUFDWixrQkFBVSxPQUFPLE9BQU87QUFFeEIsWUFBSSxLQUFLLHVCQUF1QixVQUFVO0FBRTFDLGlCQUFTLEVBQUUsSUFBSSxTQUFTLEVBQUUsS0FBSyxDQUFDO0FBQ2hDLGlCQUFTLEVBQUUsRUFBRSxLQUFLLElBQUk7QUFFdEIsYUFBSyxRQUFRO0FBQ2IsYUFBSyxNQUFNO0FBQ1gsYUFBSyxVQUFVO0FBQ2YsYUFBSyxNQUFNLElBQUksZUFBZTtBQUM5QixhQUFLLElBQUksTUFBTSxNQUFNO0FBQ3JCLGFBQUssSUFBSSxNQUFNLE1BQU07QUFFckIsZUFBTyxpQkFBaUIsV0FBVyxTQUFTLEdBQUc7QUFDM0MsY0FBSSxFQUFFLGdCQUFnQixPQUFPLGFBQWM7QUFDM0MsY0FBSSxFQUFFLFlBQVksUUFBUSxFQUFFLGFBQWEsR0FBSTtBQUM3QyxjQUFJLEVBQUUsSUFBSSxVQUFVLEdBQUcsR0FBRyxNQUFNLE1BQU0sR0FB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O0FBQ2hCO0VBQ0Q7QUFFQSxRQUFNQyxjQUFjeEwsY0FBYztBQUNsQyxNQUFJd0wsYUFBYTtBQUNoQkQsZUFBV1QsUUFBUXpKLG9DQUFBckQsUUFBQUMsY0FBQ1csYUFBQSxJQUFZLENBQUU7QUFDbEM7RUFDRDtBQUVBLFFBQU02TSxhQUFhbEwsYUFBYTtBQUNoQyxNQUFJa0wsWUFBWTtBQUNmRixlQUFXVCxRQUFRekosb0NBQUFyRCxRQUFBQyxjQUFDWSxZQUFBLElBQVcsQ0FBRTtBQUNqQztFQUNEO0FBRUEsUUFBTW1DLFdBQVdELFlBQVk7QUFDN0IsTUFBSSxDQUFDQyxVQUFVO0FBQ2R1SyxlQUFXVCxRQUFRekosb0NBQUFyRCxRQUFBQyxjQUFDZSxVQUFBLElBQVMsQ0FBRTtBQUMvQjtFQUNEO0FBRUEsUUFBTTtJQUFDRDtFQUFNLElBQUlpQztBQUNqQixNQUFJLENBQUNqQyxRQUFRO0FBQ1p3TSxlQUFXVCxRQUFRekosb0NBQUFyRCxRQUFBQyxjQUFDZSxVQUFBLElBQVMsQ0FBRTtBQUMvQjtFQUNEO0FBRUEsUUFBTTBNLG1CQUFtQnJNLG1CQUFtQk4sTUFBTTtBQUNsRCxNQUFJMk0sa0JBQWtCO0FBQ3JCSCxlQUFXVCxRQUFRekosb0NBQUFyRCxRQUFBQyxjQUFDYSxrQkFBQTtNQUFpQkM7SUFBQSxDQUFnQixDQUFFO0FBQ3ZEO0VBQ0Q7QUFFQXdNLGFBQVdULFFBQVF6SixvQ0FBQXJELFFBQUFDLGNBQUNnQixTQUFBO0lBQVFGO0VBQUEsQ0FBZ0IsQ0FBRTtBQUU5QyxPQUFLNEssU0FBUzNJLFFBQVE7QUFDdkI7O0NVaERDLFNBQVMySyxjQUFjO0FBQ3ZCTixpQkFBZTtBQUNoQixHQUFHOyIsCiAgIm5hbWVzIjogWyJCcm9hZGNhc3RDaGFubmVsIiwgImVsZW1lbnRJZCIsICJtb3VudFBvaW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImZvb3Rlck5vdGljZSIsICJzZWN0aW9uSWRTcGFuIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBcmNoaXZlIiwgImxvY2FsaXplIiwgImVuIiwgIkFyY2hpdmluZyIsICJBcmNoaXZlZCIsICJEZWxldGUiLCAiRGVsZXRpbmciLCAiRGVsZXRlZCIsICJ6aCIsICJSZWZyZXNoIiwgIlJlZnJlc2hpbmciLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInNhbml0aXplIiwgInN0cmluZyIsICJyZXBsYWNlIiwgIkZvb3Rlck5vdGljZSIsICJjaGlsZHJlbiIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImlkIiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIkluQmxhY2tMaXN0IiwgIk5vdEFsbG93ZWQiLCAiQXJjTG9jTm90QWxsb3dlZCIsICJhcmNMb2MiLCAiTm9BcmNMb2MiLCAiRW5hYmxlZCIsICJ0aXRsZSIsICJocmVmIiwgImNvbmNhdCIsICJpZkFyY0xvY05vdEFsbG93ZWQiLCAid2dQYWdlTmFtZSIsICJzb3VyY2VUaXRsZSIsICJUaXRsZSIsICJhcmNMb2NUaXRsZSIsICJhcmNMb2NOYW1lc3BhY2VJZCIsICJnZXROYW1lc3BhY2VJZCIsICJhcmNMb2NQYWdlTmFtZSIsICJnZXRNYWluIiwgInNvdXJjZU5hbWVzcGFjZUlkIiwgInNvdXJjZVBhZ2VOYW1lIiwgImlzSW5CbGFja2xpc3QiLCAiYmxhY2tMaXN0UmVnZXhBcnIiLCAiX2kiLCAiX2JsYWNrTGlzdFJlZ2V4QXJyIiwgImxlbmd0aCIsICJlbGVtZW50IiwgInRlc3QiLCAiaXNOb3RBbGxvd2VkIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJ3Z1VzZXJOYW1lIiwgImlzTm90U3VwcG9ydGVkIiwgIndnSXNNYWluUGFnZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dSZXZpc2lvbklkIiwgImdldFNldHRpbmdzIiwgInNldHRpbmdzIiwgImRhdGFzZXQiLCAiYXJjTGV2ZWwiLCAic2VjQXJjIiwgInNlY0RlbCIsICJpbXBvcnRfZXh0X2dhZGdldDExIiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRTZWN0aW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicGFnZSIsICJwcm9wIiwgInBhcnNlIiwgInNlY3Rpb25zIiwgInNlY3Rpb25zVG9BcmNoaXZlIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInNlY3Rpb24iLCAidmFsdWUiLCAibGV2ZWwiLCAiaW5kZXgiLCAiYW5jaG9yIiwgInN0YXJ0c1dpdGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0U2VjdGlvbkNvbnRlbnQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJHF1ZXJ5JHBhZ2VzIiwgIl9yZXNwb25zZSRxdWVyeSRwYWdlczIiLCAicnZwcm9wIiwgInRpdGxlcyIsICJydnNlY3Rpb24iLCAicnZzbG90cyIsICJyZXNwb25zZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgIl94MiIsICJpc1BhZ2VFeGlzdCIsICJfcmVmMyIsICJhcmNoaXZlVG8iLCAiX3F1ZXJ5JHBhZ2VzJCIsICJxdWVyeSIsICJtaXNzaW5nIiwgIl94MyIsICJpc1NlY3Rpb25FeGlzdCIsICJfcmVmNCIsICJpc0V4aXN0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIl94NCIsICJyZW1vdmVTZWN0aW9uIiwgIl9yZWY1IiwgInN1bW1hcnkiLCAiZWRpdCIsICJ0ZXh0IiwgIm1pbm9yIiwgIl94NSIsICJhcmNoaXZlU2VjdGlvbiIsICJfcmVmNiIsICJwYWdlRXhpc3QiLCAiY3JlYXRlIiwgImFwcGVuZHRleHQiLCAiX3g2IiwgImdldEFyY2hpdmluZ01lc3NhZ2UiLCAiaW5kZXhObyIsICJnZXRBcmNoaXZlZE1lc3NhZ2UiLCAiZ2V0RGVsZXRpbmdNZXNzYWdlIiwgImdldERlbGV0ZWRNZXNzYWdlIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAid2dTY3JpcHQiLCAicmVmcmVzaCIsICJ0YXJnZXRQYWdlIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInV0aWwiLCAiZ2V0VXJsIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJhcmNoaXZlT25DbGljayIsICJfcmVmNyIsICJldmVudCIsICJzZWN0aW9uSWRTcGFucyIsICJtZXNzYWdlQ2hhbm5lbCIsICJyZWZyZXNoQ2hhbm5lbCIsICJfZXZlbnQkdGFyZ2V0IiwgInByZXZlbnREZWZhdWx0IiwgInBhcmVudEVsZW1lbnQiLCAidGFyZ2V0IiwgInJlcGxhY2VDaGlsZHJlbiIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJzcGFuIiwgInJlbW92ZSIsICJtZXNzYWdlMSIsICJwb3N0TWVzc2FnZSIsICJjbG9zZSIsICJtZXNzYWdlIiwgIl94NyIsICJfeDgiLCAicmVtb3ZlT25DbGljayIsICJfcmVmOCIsICJfZXZlbnQkdGFyZ2V0MiIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfeDkiLCAiX3gxMCIsICJPbkNsaWNrIiwgInRleHRDb250ZW50IiwgIm9uQ2xpY2siLCAiU2VjdGlvbklEIiwgIlBpcGUiLCAiQXJjaGl2ZVNlY3Rpb25MaW5rIiwgIlJlbW92ZVNlY3Rpb25MaW5rIiwgIkFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGluayIsICJpbXBvcnRfZXh0X2dhZGdldDgiLCAiRWRpdENvbmZsaWN0Tm90aWNlIiwgImltcG9ydF9leHRfZ2FkZ2V0OSIsICJpbXBvcnRfZXh0X2dhZGdldDEwIiwgImFkZExpbmtzIiwgIl9yZWY5IiwgImhlYWRpbmdzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiaGVhZGxpbmVzIiwgImhlYWRpbmdJbmRpY2VzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImhlYWRpbmciLCAiaGVhZGxpbmUiLCAiQnJvYWRjYXN0Q2hhbm5lbCIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJfaTIiLCAiX2hlYWRpbmdJbmRpY2VzIiwgImdldEVsZW1lbnRCeUlkIiwgInBhcmVudEhlYWRpbmciLCAiZWRpdFNlY3Rpb24iLCAic2VjdGlvbklEU3BhbiIsICJwcmVwZW5kIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX2kzIiwgIl9zZWN0aW9uSWRTcGFucyIsICJkYXRhIiwgIm5vZGUiLCAiX3gxMSIsICJsb2FkRWFzeUFyY2l2ZSIsICJub3RTdXBwb3J0ZWQiLCAibW91bnRQb2ludCIsICJpbkJsYWNrbGlzdCIsICJub3RBbGxvd2VkIiwgImFyY0xvY05vdEFsbG93ZWQiLCAiZWFzeUFyY2hpdmUiXQp9Cg==
