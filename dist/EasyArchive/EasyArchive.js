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
//! src/EasyArchive/modules/components/react.tsx
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
//! src/EasyArchive/modules/components/react.tsx
var FooterNotice = ({
  id = elementId,
  children = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)
}) => {
  const {
    skin
  } = mw.config.get();
  return /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, skin === "citizen" ? /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
    id,
    className: [footerNotice, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
  }, children) : ["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info") ? /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
    id,
    className: [footerNotice, "noprint"]
  }, children) : /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id,
    className: [footerNotice, "noprint"]
  }, children));
};
var InBlackList = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, getMessage("Easy Archive not supported"), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), getMessage("Easy Archive not supported details"));
var NotAllowed = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, getMessage("Easy Archive not allowed"));
var ArcLocNotAllowed = ({
  arcLoc
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, getMessage("Archive Location not allowed").replace("$1", sanitize(arcLoc)), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), getMessage("Archive Location not allowed details"));
var NoArcLoc = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, getMessage("No Archive Location"));
var Enabled = ({
  arcLoc
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, getMessage("Easy Archive enabled"), getMessage("("), getMessage("Archive location"), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  title: sanitize(arcLoc),
  href: "/wiki/".concat(sanitize(arcLoc))
}, arcLoc), getMessage(")"), getMessage("."));
var OnClick = ({
  textContent,
  className,
  onClick
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  className: ["gadget-easy_archive__link", "gadget-easy_archive__link-".concat(className)],
  onClick: onClick || (() => {
  }),
  textContent
});
var SectionID = ({
  children = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  className: sectionIdSpan
}, children);
var Pipe = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  className: "mw-editsection-divider",
  textContent: "|"
});
var EditConflictNotice = ({
  onClick
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, getMessage("Edit Confilict Notice"), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  onClick
}, getMessage("Refresh")));
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
var import_ext_gadget10 = __toESM(require("ext.gadget.JSX"), 1);
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
var import_ext_gadget7 = __toESM(require("ext.gadget.JSX"), 1);
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
//! src/EasyArchive/modules/addLinks.tsx
var import_ext_gadget8 = __toESM(require("ext.gadget.JSX"), 1);
var import_ext_gadget9 = require("ext.gadget.Toastify");
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
      const sectionIDSpan = /* @__PURE__ */ import_ext_gadget8.default.createElement(ArchiveAndDeleteSectionLink, {
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
      toastifyInstance = (0, import_ext_gadget9.toastify)({
        text: event.data,
        close: true,
        duration: 3 * 1e3
      }, "info");
    });
    refreshChannel.addEventListener("message", () => {
      toastifyInstance.hideToast();
      toastifyInstance = (0, import_ext_gadget9.toastify)({
        node: /* @__PURE__ */ import_ext_gadget8.default.createElement(EditConflictNotice, {
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
  const footerElement = /* @__PURE__ */ import_ext_gadget10.default.createElement(FooterNotice, null);
  mountPoint.prepend(footerElement);
  const inBlacklist = isInBlacklist();
  if (inBlacklist) {
    footerElement.append(/* @__PURE__ */ import_ext_gadget10.default.createElement(InBlackList, null));
    return;
  }
  const notAllowed = isNotAllowed();
  if (notAllowed) {
    footerElement.append(/* @__PURE__ */ import_ext_gadget10.default.createElement(NotAllowed, null));
    return;
  }
  const settings = getSettings();
  if (!settings) {
    footerElement.append(/* @__PURE__ */ import_ext_gadget10.default.createElement(NoArcLoc, null));
    return;
  }
  const {
    arcLoc
  } = settings;
  if (!arcLoc) {
    footerElement.append(/* @__PURE__ */ import_ext_gadget10.default.createElement(NoArcLoc, null));
    return;
  }
  const arcLocNotAllowed = ifArcLocNotAllowed(arcLoc);
  if (arcLocNotAllowed) {
    footerElement.append(/* @__PURE__ */ import_ext_gadget10.default.createElement(ArcLocNotAllowed, {
      arcLoc
    }));
    return;
  }
  footerElement.append(/* @__PURE__ */ import_ext_gadget10.default.createElement(Enabled, {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL3JlYWN0LnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL0Vhc3lBcmNoaXZlLm1vZHVsZS5sZXNzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9zYW5pdGl6ZS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2dldFNldHRpbmdzLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2xvYWRFYXN5QXJjaXZlLnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2dldFNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9lZGl0U2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2dldE1lc3NhZ2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9vbkNsaWNrLnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL3JlZnJlc2hQYWdlLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2NvbXBvbmVudHMvc2VjdGlvbkxpbmsudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2FkZExpbmtzLnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvRWFzeUFyY2hpdmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgICB2YXIgY2hhbm5lbHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIEJyb2FkY2FzdENoYW5uZWwoY2hhbm5lbCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICBjaGFubmVsID0gU3RyaW5nKGNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBpZCA9ICckQnJvYWRjYXN0Q2hhbm5lbCQnICsgY2hhbm5lbCArICckJztcblxuICAgICAgICBjaGFubmVsc1tpZF0gPSBjaGFubmVsc1tpZF0gfHwgW107XG4gICAgICAgIGNoYW5uZWxzW2lkXS5wdXNoKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX25hbWUgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWMgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDEuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDIuc3RhcnQoKTtcblxuICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnN0b3JhZ2VBcmVhICE9PSBnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5uZXdWYWx1ZSA9PSBudWxsIHx8IGUubmV3VmFsdWUgPT09ICcnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5rZXkuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCkgIT09IGlkKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAkdGhpcy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEJyb2FkY2FzdENoYW5uZWwucHJvdG90eXBlID0ge1xuICAgICAgICAvLyBCcm9hZGNhc3RDaGFubmVsIEFQSVxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0TWVzc2FnZTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gb3RoZXIgY29udGV4dHMgdmlhIHN0b3JhZ2UgZXZlbnRzLi4uXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5faWQgKyBTdHJpbmcoRGF0ZS5ub3coKSkgKyAnJCcgKyBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIGN1cnJlbnQgY29udGV4dCB2aWEgcG9ydHNcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5mb3JFYWNoKGZ1bmN0aW9uKGJjKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJjID09PSAkdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGJjLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0Mi5jbG9zZSgpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGFubmVsc1t0aGlzLl9pZF0uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEV2ZW50VGFyZ2V0IEFQSVxuICAgICAgICBnZXQgb25tZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9ubWVzc2FnZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEub25tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oLypldmVudCovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuZGlzcGF0Y2hFdmVudC5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgPSBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCB8fCBCcm9hZGNhc3RDaGFubmVsO1xufSkoc2VsZik7XG4iLCAie1xuXHRcImVsZW1lbnRJZFwiOiBcImdhZGdldC1lYXN5X2FyY2hpdmVcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtmb290ZXJOb3RpY2UsIHNlY3Rpb25JZFNwYW59IGZyb20gJy4vRWFzeUFyY2hpdmUubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7c2FuaXRpemV9IGZyb20gJy4uL3V0aWwvc2FuaXRpemUnO1xuXG5pbnRlcmZhY2UgRm9vdGVyTm90aWNlUHJvcHMge1xuXHRpZD86IHN0cmluZztcblx0Y2hpbGRyZW4/OiBSZWFjdEVsZW1lbnQ7XG59XG5cbmNvbnN0IEZvb3Rlck5vdGljZSA9ICh7aWQgPSBPUFRJT05TLmVsZW1lbnRJZCwgY2hpbGRyZW4gPSA8PjwvPn06IEZvb3Rlck5vdGljZVByb3BzKSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHR7c2tpbiA9PT0gJ2NpdGl6ZW4nID8gKFxuXHRcdFx0XHQ8c2VjdGlvblxuXHRcdFx0XHRcdGlkPXtpZH1cblx0XHRcdFx0XHRjbGFzc05hbWU9e1tmb290ZXJOb3RpY2UsICdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nLCAnbm9wcmludCddfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQpIDogWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSA/IChcblx0XHRcdFx0PGxpIGlkPXtpZH0gY2xhc3NOYW1lPXtbZm9vdGVyTm90aWNlLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtbZm9vdGVyTm90aWNlLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmNvbnN0IEluQmxhY2tMaXN0ID0gKCkgPT4gKFxuXHQ8PlxuXHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCcpfVxuXHRcdDxiciAvPlxuXHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCBkZXRhaWxzJyl9XG5cdDwvPlxuKTtcblxuY29uc3QgTm90QWxsb3dlZCA9ICgpID0+IDw+e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3QgYWxsb3dlZCcpfTwvPjtcblxuaW50ZXJmYWNlIEFyY0xvY05vdEFsbG93ZWRQcm9wcyB7XG5cdGFyY0xvYzogc3RyaW5nO1xufVxuXG5jb25zdCBBcmNMb2NOb3RBbGxvd2VkID0gKHthcmNMb2N9OiBBcmNMb2NOb3RBbGxvd2VkUHJvcHMpID0+IChcblx0PD5cblx0XHR7Z2V0TWVzc2FnZSgnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCcpLnJlcGxhY2UoJyQxJywgc2FuaXRpemUoYXJjTG9jKSl9XG5cdFx0PGJyIC8+XG5cdFx0e2dldE1lc3NhZ2UoJ0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQgZGV0YWlscycpfVxuXHQ8Lz5cbik7XG5cbmNvbnN0IE5vQXJjTG9jID0gKCkgPT4gPD57Z2V0TWVzc2FnZSgnTm8gQXJjaGl2ZSBMb2NhdGlvbicpfTwvPjtcblxuaW50ZXJmYWNlIEVuYWJsZWRQcm9wcyB7XG5cdGFyY0xvYzogc3RyaW5nO1xufVxuXG5jb25zdCBFbmFibGVkID0gKHthcmNMb2N9OiBFbmFibGVkUHJvcHMpID0+IChcblx0PD5cblx0XHR7Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIGVuYWJsZWQnKX1cblx0XHR7Z2V0TWVzc2FnZSgnKCcpfVxuXHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIGxvY2F0aW9uJyl9XG5cdFx0PGEgdGl0bGU9e3Nhbml0aXplKGFyY0xvYyl9IGhyZWY9e2Avd2lraS8ke3Nhbml0aXplKGFyY0xvYyl9YH0+XG5cdFx0XHR7YXJjTG9jfVxuXHRcdDwvYT5cblx0XHR7Z2V0TWVzc2FnZSgnKScpfVxuXHRcdHtnZXRNZXNzYWdlKCcuJyl9XG5cdDwvPlxuKTtcblxuaW50ZXJmYWNlIE9uQ2xpY2tQcm9wcyB7XG5cdHRleHRDb250ZW50OiBzdHJpbmc7XG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXHRvbkNsaWNrPzogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcbn1cblxuY29uc3QgT25DbGljayA9ICh7dGV4dENvbnRlbnQsIGNsYXNzTmFtZSwgb25DbGlja306IE9uQ2xpY2tQcm9wcykgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzTmFtZT17WydnYWRnZXQtZWFzeV9hcmNoaXZlX19saW5rJywgYGdhZGdldC1lYXN5X2FyY2hpdmVfX2xpbmstJHtjbGFzc05hbWV9YF19XG5cdFx0b25DbGljaz17b25DbGljayB8fCAoKCkgPT4ge30pfVxuXHRcdHRleHRDb250ZW50PXt0ZXh0Q29udGVudH1cblx0Lz5cbik7XG5cbmludGVyZmFjZSBTZWN0aW9uSURQcm9wcyB7XG5cdGNoaWxkcmVuPzogUmVhY3RFbGVtZW50O1xufVxuXG5jb25zdCBTZWN0aW9uSUQgPSAoe2NoaWxkcmVuID0gPD48Lz59OiBTZWN0aW9uSURQcm9wcykgPT4gPHNwYW4gY2xhc3NOYW1lPXtzZWN0aW9uSWRTcGFufT57Y2hpbGRyZW59PC9zcGFuPjtcblxuY29uc3QgUGlwZSA9ICgpID0+IDxzcGFuIGNsYXNzTmFtZT1cIm13LWVkaXRzZWN0aW9uLWRpdmlkZXJcIiB0ZXh0Q29udGVudD17J3wnfSAvPjtcblxuaW50ZXJmYWNlIEVkaXRDb25mbGljdE5vdGljZVByb3BzIHtcblx0b25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgRWRpdENvbmZsaWN0Tm90aWNlID0gKHtvbkNsaWNrfTogRWRpdENvbmZsaWN0Tm90aWNlUHJvcHMpID0+IChcblx0PHNwYW4+XG5cdFx0e2dldE1lc3NhZ2UoJ0VkaXQgQ29uZmlsaWN0IE5vdGljZScpfVxuXHRcdDxhIG9uQ2xpY2s9e29uQ2xpY2t9PntnZXRNZXNzYWdlKCdSZWZyZXNoJyl9PC9hPlxuXHQ8L3NwYW4+XG4pO1xuXG5leHBvcnQge1xuXHRGb290ZXJOb3RpY2UsXG5cdEVuYWJsZWQsXG5cdEluQmxhY2tMaXN0LFxuXHROb3RBbGxvd2VkLFxuXHRBcmNMb2NOb3RBbGxvd2VkLFxuXHROb0FyY0xvYyxcblx0T25DbGljayxcblx0UGlwZSxcblx0U2VjdGlvbklELFxuXHRFZGl0Q29uZmxpY3ROb3RpY2UsXG59O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL0Vhc3lBcmNoaXZlLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgZm9vdGVyTm90aWNlID0gXCJFYXN5QXJjaGl2ZS1tb2R1bGVfX2Zvb3Rlck5vdGljZV9aUmtHMXFfXzQ5MFwiO1xuZXhwb3J0IGNvbnN0IHNlY3Rpb25JZFNwYW4gPSBcIkVhc3lBcmNoaXZlLW1vZHVsZV9fc2VjdGlvbklkU3Bhbl9aUmtHMXFfXzQ5MFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZm9vdGVyTm90aWNlXCI6IGZvb3Rlck5vdGljZSxcbiAgXCJzZWN0aW9uSWRTcGFuXCI6IHNlY3Rpb25JZFNwYW5cbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFyY2hpdmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBsb2NhdGlvbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZSBsb2NhdGlvbjogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+WcsOWdgO+8micsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpToh7PvvJonLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGJ1dCBFYXN5IGFyY2hpdmUgY2Fubm90IG9wZXJhdGUgbGlrZSB0aGlzLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAneOAgkVhc3kgQXJjaGl2ZSDml6Dms5XmjInmraTlnLDlnYDlrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3jgIJFYXN5IEFyY2hpdmUg54Sh5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCBkZXRhaWxzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlcyBzaG91bGQgbm90IGJlIG5vcm1hbGx5IGRpcmVjdGVkIHRvIHBhZ2VzIHVuZGVyIGFydGljbGUgbmFtZXNwYWNlLiBQbGVhc2UgY2hlY2sgaWYgeW91IGhhdmUgdGhlIGNvcnJlY3QgYXJjaGl2ZSBsb2NhdGlvbi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA6Iis6ICM6KiA77yM5LiN5bqU5ZCR5p2h55uu5ZCN56ew56m66Ze06L+b6KGM5a2Y5qGj44CC5q2k5aSW77yM5a2Y5qGj5Zyw5Z2A5LiN5b6X5ZKM5q2k6aG16Z2i5ZCN56ew55u45ZCM44CC6K+35qOA5p+l5a2Y5qGj5Zyw5Z2A44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOiIrOiAjOiogO+8jOS4jeaHieWQkeaineebruWQjeeoseepuumWk+mAsuihjOWtmOaqlOOAguatpOWklu+8jOWtmOaqlOWcsOWdgOS4jeW+l+WSjOatpOmggemdouWQjeeoseebuOWQjOOAguiri+aqouafpeWtmOaqlOWcsOWdgOOAgicsXG5cdFx0fSksXG5cdFx0QXJjaGl2aW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmluZycsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5LitJyxcblx0XHR9KSxcblx0XHRBcmNoaXZlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRWRpdCBDb25maWxpY3QgTm90aWNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBhbHJlYWR5IGFyY2hpdmVkIGFuZC9vciBkZWxldGVkIGEgc2VjdGlvbiBvbiB0aGlzIHBhZ2UuIFBsZWFzZSByZWZyZXNoIHRoZSBwYWdlIGFuZCBjb250aW51ZSBhcmNoaXZpbmcgb3IgZGVsZXRpbmcgb3RoZXIgc2VjdGlvbnMgdG8gYXZvaWQgZWRpdGluZyBjb25mbGljdHMuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOW3sue7j+WcqOacrOmhtemdouaJp+ihjOS6huWtmOaho+OAgeWIoOmZpOeroOiKgueahOaTjeS9nOOAguivt+WIt+aWsOmhtemdou+8jOeEtuWQjue7p+e7reWtmOaho+OAgeWIoOmZpOacrOmhtemdoueahOWFtuS7lueroOiKgu+8jOS7pemBv+WFjee8lui+keWGsueqgeOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmgqjlt7LntpPlnKjmnKzpoIHpnaLln7fooYzkuoblrZjmqpTjgIHliKrpmaTnq6Dnr4DnmoTmk43kvZzjgILoq4vliLfmlrDpoIHpnaLvvIznhLblvoznubznuozlrZjmqpTjgIHliKrpmaTmnKzpoIHpnaLnmoTlhbbku5bnq6Dnr4DvvIzku6Xpgb/lhY3nt6jovK/ooZ3nqoHjgIInLFxuXHRcdH0pLFxuXHRcdERlbGV0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpCcsXG5cdFx0fSksXG5cdFx0RGVsZXRpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRpbmcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOS4rScsXG5cdFx0fSksXG5cdFx0RGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICflt7LliKrpmaQnLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5q616JC9Jyxcblx0XHR9KSxcblx0XHQnQ3JlYXRlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2NyZWF0ZSBhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W7uueri+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflu7rnq4vlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdEZWxldGUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOauteiQvScsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBlbmFibGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgaXMgZW5hYmxlZCBvbiB0aGlzIHRhbGsgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfmnKzorqjorrrpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3QgYWxsb3dlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGNhbm5vdCB1c2UgRWFzeSBBcmNoaXZlIHRvIGFyY2hpdmUgdGhyZWFkcyBvbiB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOS4jeWPr+S7peWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOS4jeWPr+S7peWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQgZGV0YWlscyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlc2UgcGFnZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlOiBBcnRpY2xlLCBGaWxlLCBUZW1wbGF0ZSwgTW9kdWxlLCBNZWRpYVdpa2ksIENhdGVnb3J5LCBTcGVjaWFsLCBKYXZhU2NyaXB0LCBDU1MsIEpTT04uJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+i/meS6m+mhtemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77ya5p2h55uu44CBRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6YCZ5Lqb6aCB6Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJrmop3nm67vvIxGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0fSksXG5cdFx0J05vIEFyY2hpdmUgTG9jYXRpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBjYW4gYmUgdXNlZCBvbiB0aGlzIHBhZ2UgaWYgbmVlZGVkLiBUbyBlbmFibGUgaXQsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+iLpemcgOimge+8jOatpOmhtemdouWPr+S7peWQr+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6K+35Zyo6aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+iLpemcgOimge+8jOatpOmggemdouWPr+S7peWVn+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6KuL5Zyo6aCB6Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn1944CCJyxcblx0XHR9KSxcblx0XHQnU2VjdGlvbiAkMSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VjdGlvbiAkMScsXG5cdFx0XHR6aDogJ+esrCAkMSDnq6DoioInLFxuXHRcdH0pLFxuXHRcdCcoJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0JyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyknLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdCcuJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcuJyxcblx0XHRcdHpoOiAn44CCJyxcblx0XHR9KSxcblx0XHQnOic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOiAnLFxuXHRcdFx0emg6ICfvvJonLFxuXHRcdH0pLFxuXHRcdFJlZnJlc2g6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVmcmVzaCB0aGUgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfliLfmlrDlvZPliY3pobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn6YeN5paw6LyJ5YWl55W25YmN6aCBJyxcblx0XHR9KSxcblx0XHRSZWZyZXNoaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlZnJlc2hpbmcuLi4nLFxuXHRcdFx0amE6ICflho3oqq3jgb/ovrzjgb/jgZfjgb7jgZkuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Y2z5bCG5Yi35paw5b2T5YmN6aG16Z2i4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+WNs+Wwh+mHjeaWsOi8ieWFpeeVtuWJjemggeKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IHNhbml0aXplID0gKHN0cmluZzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBzdHJpbmdcblx0XHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuXHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0LnJlcGxhY2UoLycvZywgJyZhcG9zOycpXG5cdFx0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn07XG5cbmV4cG9ydCB7c2FuaXRpemV9O1xuIiwgImNvbnN0IGlmQXJjTG9jTm90QWxsb3dlZCA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNvdXJjZVRpdGxlID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpO1xuXHRjb25zdCBhcmNMb2NUaXRsZSA9IG5ldyBtdy5UaXRsZShhcmNMb2MpO1xuXG5cdGNvbnN0IGFyY0xvY05hbWVzcGFjZUlkID0gYXJjTG9jVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3QgYXJjTG9jUGFnZU5hbWUgPSBhcmNMb2NUaXRsZS5nZXRNYWluKCk7XG5cdGNvbnN0IHNvdXJjZU5hbWVzcGFjZUlkID0gc291cmNlVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3Qgc291cmNlUGFnZU5hbWUgPSBzb3VyY2VUaXRsZS5nZXRNYWluKCk7XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoYXJjTG9jTmFtZXNwYWNlSWQgPT09IHNvdXJjZU5hbWVzcGFjZUlkICYmIGFyY0xvY1BhZ2VOYW1lID09PSBzb3VyY2VQYWdlTmFtZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNJbkJsYWNrbGlzdCA9ICgpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGJsYWNrTGlzdFJlZ2V4QXJyID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja0xpc3RSZWdleEFycikge1xuXHRcdGlmIChlbGVtZW50LnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzTm90QWxsb3dlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1JlbGV2YW50VXNlck5hbWUsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICgod2dOYW1lc3BhY2VOdW1iZXIgPT09IDIgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDMpICYmICEod2dSZWxldmFudFVzZXJOYW1lID09PSB3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNOb3RTdXBwb3J0ZWQgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0lzTWFpblBhZ2UsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z0N1clJldmlzaW9uSWQsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCB8fCB3Z0N1clJldmlzaW9uSWQgLSB3Z1JldmlzaW9uSWQgIT09IDApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCB8fCB3Z0lzTWFpblBhZ2UpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHtkYXRhc2V0fSA9IHNldHRpbmdzO1xuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gZGF0YXNldDtcblx0cmV0dXJuIHtcblx0XHRhcmNMZXZlbDogYXJjTGV2ZWwgPz8gJzInLFxuXHRcdGFyY0xvYzogYXJjTG9jID8/ICcnLFxuXHRcdHNlY0FyYzogc2VjQXJjID8/ICcxJyxcblx0XHRzZWNEZWw6IHNlY0RlbCA/PyAnMScsXG5cdH07XG59O1xuXG5leHBvcnQge2dldFNldHRpbmdzLCBpZkFyY0xvY05vdEFsbG93ZWQsIGlzSW5CbGFja2xpc3QsIGlzTm90QWxsb3dlZCwgaXNOb3RTdXBwb3J0ZWR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7QXJjTG9jTm90QWxsb3dlZCwgRW5hYmxlZCwgRm9vdGVyTm90aWNlLCBJbkJsYWNrTGlzdCwgTm9BcmNMb2MsIE5vdEFsbG93ZWR9IGZyb20gJy4vY29tcG9uZW50cy9yZWFjdCc7XG5pbXBvcnQge2dldFNldHRpbmdzLCBpZkFyY0xvY05vdEFsbG93ZWQsIGlzSW5CbGFja2xpc3QsIGlzTm90QWxsb3dlZCwgaXNOb3RTdXBwb3J0ZWR9IGZyb20gJy4vdXRpbC9nZXRTZXR0aW5ncyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHthZGRMaW5rc30gZnJvbSAnLi9hZGRMaW5rcyc7XG5cbmNvbnN0IGxvYWRFYXN5QXJjaXZlID0gKCkgPT4ge1xuXHRjb25zdCBub3RTdXBwb3J0ZWQgPSBpc05vdFN1cHBvcnRlZCgpO1xuXHRpZiAobm90U3VwcG9ydGVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbW91bnRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblx0aWYgKCFtb3VudFBvaW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZm9vdGVyRWxlbWVudCA9IDxGb290ZXJOb3RpY2UgLz47XG5cdG1vdW50UG9pbnQucHJlcGVuZChmb290ZXJFbGVtZW50KTtcblxuXHRjb25zdCBpbkJsYWNrbGlzdCA9IGlzSW5CbGFja2xpc3QoKTtcblx0aWYgKGluQmxhY2tsaXN0KSB7XG5cdFx0Zm9vdGVyRWxlbWVudC5hcHBlbmQoPEluQmxhY2tMaXN0IC8+KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBub3RBbGxvd2VkID0gaXNOb3RBbGxvd2VkKCk7XG5cdGlmIChub3RBbGxvd2VkKSB7XG5cdFx0Zm9vdGVyRWxlbWVudC5hcHBlbmQoPE5vdEFsbG93ZWQgLz4pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3MoKTtcblx0aWYgKCFzZXR0aW5ncykge1xuXHRcdGZvb3RlckVsZW1lbnQuYXBwZW5kKDxOb0FyY0xvYyAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge2FyY0xvY30gPSBzZXR0aW5ncztcblx0aWYgKCFhcmNMb2MpIHtcblx0XHRmb290ZXJFbGVtZW50LmFwcGVuZCg8Tm9BcmNMb2MgLz4pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGFyY0xvY05vdEFsbG93ZWQgPSBpZkFyY0xvY05vdEFsbG93ZWQoYXJjTG9jKTtcblx0aWYgKGFyY0xvY05vdEFsbG93ZWQpIHtcblx0XHRmb290ZXJFbGVtZW50LmFwcGVuZCg8QXJjTG9jTm90QWxsb3dlZCBhcmNMb2M9e2FyY0xvY30gLz4pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvb3RlckVsZW1lbnQuYXBwZW5kKDxFbmFibGVkIGFyY0xvYz17YXJjTG9jfSAvPik7XG5cblx0dm9pZCBhZGRMaW5rcyhzZXR0aW5ncyk7XG59O1xuXG5leHBvcnQge2xvYWRFYXN5QXJjaXZlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEVhc3lBcmNoaXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgZ2V0U2VjdGlvbnMgPSBhc3luYyAodGl0bGU6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cGFnZTogdGl0bGUsXG5cdFx0cHJvcDogJ3NlY3Rpb25zJyxcblx0fTtcblxuXHRjb25zdCB7cGFyc2V9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRjb25zdCB7c2VjdGlvbnN9ID0gcGFyc2UgYXMge1xuXHRcdHNlY3Rpb25zOiB7XG5cdFx0XHRsZXZlbDogc3RyaW5nO1xuXHRcdFx0aW5kZXg6IHN0cmluZztcblx0XHRcdGFuY2hvcjogc3RyaW5nO1xuXHRcdH1bXTtcblx0fTtcblxuXHRjb25zdCBzZWN0aW9uc1RvQXJjaGl2ZSA9IFtdO1xuXG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuXHRcdGNvbnN0IHtsZXZlbCwgaW5kZXgsIGFuY2hvcn0gPSBzZWN0aW9uO1xuXG5cdFx0aWYgKGluZGV4LnN0YXJ0c1dpdGgoJ1QtJykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHNlY3Rpb25zVG9BcmNoaXZlW3NlY3Rpb25zVG9BcmNoaXZlLmxlbmd0aF0gPSB7XG5cdFx0XHRsZXZlbCxcblx0XHRcdGluZGV4LFxuXHRcdFx0YW5jaG9yLFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gc2VjdGlvbnNUb0FyY2hpdmU7XG59O1xuXG5jb25zdCBnZXRTZWN0aW9uQ29udGVudCA9IGFzeW5jICh7dGl0bGUsIHNlY3Rpb259OiB7dGl0bGU6IHN0cmluZzsgc2VjdGlvbjogc3RyaW5nfSk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRydnNlY3Rpb246IHNlY3Rpb24sXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiAocmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0/LnJldmlzaW9ucz8uWzBdLnNsb3RzLm1haW4uY29udGVudCBhcyBzdHJpbmcpID8/IG51bGw7XG59O1xuXG5leHBvcnQge2dldFNlY3Rpb25zLCBnZXRTZWN0aW9uQ29udGVudH07XG4iLCAiaW1wb3J0IHtnZXRTZWN0aW9uQ29udGVudCwgZ2V0U2VjdGlvbnN9IGZyb20gJy4vZ2V0U2VjdGlvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgaXNQYWdlRXhpc3QgPSBhc3luYyAoYXJjaGl2ZVRvOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW5mbycsXG5cdFx0dGl0bGVzOiBhcmNoaXZlVG8sXG5cdH07XG5cblx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRpZiAocXVlcnkucGFnZXNbMF0/Lm1pc3NpbmcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGlzU2VjdGlvbkV4aXN0ID0gYXN5bmMgKHtpbmRleCwgYW5jaG9yfToge2luZGV4OiBzdHJpbmc7IGFuY2hvcjogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25zID0gYXdhaXQgZ2V0U2VjdGlvbnMod2dQYWdlTmFtZSk7XG5cblx0bGV0IGlzRXhpc3QgPSBmYWxzZTtcblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0aWYgKGluZGV4ID09PSBzZWN0aW9uLmluZGV4ICYmIGFuY2hvciA9PT0gc2VjdGlvbi5hbmNob3IpIHtcblx0XHRcdGlzRXhpc3QgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gaXNFeGlzdDtcbn07XG5cbmNvbnN0IHJlbW92ZVNlY3Rpb24gPSBhc3luYyAoe2luZGV4LCBhbmNob3IsIHN1bW1hcnl9OiB7aW5kZXg6IHN0cmluZzsgYW5jaG9yOiBzdHJpbmc7IHN1bW1hcnk/OiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaXNFeGlzdCA9IGF3YWl0IGlzU2VjdGlvbkV4aXN0KHtpbmRleCwgYW5jaG9yfSk7XG5cblx0aWYgKGlzRXhpc3QgIT09IHRydWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0U2VjdGlvbkNvbnRlbnQoe3RpdGxlOiB3Z1BhZ2VOYW1lLCBzZWN0aW9uOiBpbmRleH0pO1xuXG5cdGlmIChjb250ZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXdhaXQgYXBpLmVkaXQod2dQYWdlTmFtZSwgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZWN0aW9uOiBpbmRleCxcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0c3VtbWFyeTogc3VtbWFyeSA/PyBnZXRNZXNzYWdlKCdEZWxldGUgc3VtbWFyeScpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG59O1xuXG5jb25zdCBhcmNoaXZlU2VjdGlvbiA9IGFzeW5jICh7aW5kZXgsIGFuY2hvciwgYXJjaGl2ZVRvfToge2luZGV4OiBzdHJpbmc7IGFuY2hvcjogc3RyaW5nOyBhcmNoaXZlVG86IHN0cmluZ30pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpc0V4aXN0ID0gYXdhaXQgaXNTZWN0aW9uRXhpc3Qoe2luZGV4LCBhbmNob3J9KTtcblxuXHRpZiAoaXNFeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh7dGl0bGU6IHdnUGFnZU5hbWUsIHNlY3Rpb246IGluZGV4fSk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYWdlRXhpc3QgPSBhd2FpdCBpc1BhZ2VFeGlzdChhcmNoaXZlVG8pO1xuXHRpZiAoIXBhZ2VFeGlzdCkge1xuXHRcdGF3YWl0IGFwaS5jcmVhdGUoXG5cdFx0XHRhcmNoaXZlVG8sXG5cdFx0XHR7XG5cdFx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0NyZWF0ZSBzdW1tYXJ5JyksXG5cdFx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdCd7e3RhbGthcmNoaXZlfX0nXG5cdFx0KTtcblx0fVxuXG5cdGF3YWl0IGFwaS5lZGl0KGFyY2hpdmVUbywgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcHBlbmR0ZXh0OiBgXFxuXFxuJHtjb250ZW50fWAsXG5cdFx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdBcmNoaXZlIHN1bW1hcnknKSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xuXG5cdGF3YWl0IHJlbW92ZVNlY3Rpb24oe2luZGV4LCBhbmNob3IsIHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpfSk7XG59O1xuXG5leHBvcnQge2lzU2VjdGlvbkV4aXN0LCBhcmNoaXZlU2VjdGlvbiwgcmVtb3ZlU2VjdGlvbn07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2V0QXJjaGl2aW5nTWVzc2FnZSA9IChpbmRleE5vOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIGdldE1lc3NhZ2UoJ0FyY2hpdmluZycpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG59O1xuXG5jb25zdCBnZXRBcmNoaXZlZE1lc3NhZ2UgPSAoaW5kZXhObzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBnZXRNZXNzYWdlKCdBcmNoaXZlZCcpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG59O1xuXG5jb25zdCBnZXREZWxldGluZ01lc3NhZ2UgPSAoaW5kZXhObzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBnZXRNZXNzYWdlKCdEZWxldGluZycpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG59O1xuXG5jb25zdCBnZXREZWxldGVkTWVzc2FnZSA9IChpbmRleE5vOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIGdldE1lc3NhZ2UoJ0RlbGV0ZWQnKSArIGdldE1lc3NhZ2UoJzonKSArIGdldE1lc3NhZ2UoJ1NlY3Rpb24gJDEnKS5yZXBsYWNlKCckMScsIGluZGV4Tm8pO1xufTtcblxuZXhwb3J0IHtnZXRBcmNoaXZpbmdNZXNzYWdlLCBnZXRBcmNoaXZlZE1lc3NhZ2UsIGdldERlbGV0aW5nTWVzc2FnZSwgZ2V0RGVsZXRlZE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7YXJjaGl2ZVNlY3Rpb24sIHJlbW92ZVNlY3Rpb259IGZyb20gJy4vZWRpdFNlY3Rpb24nO1xuaW1wb3J0IHtnZXRBcmNoaXZlZE1lc3NhZ2UsIGdldEFyY2hpdmluZ01lc3NhZ2UsIGdldERlbGV0ZWRNZXNzYWdlLCBnZXREZWxldGluZ01lc3NhZ2V9IGZyb20gJy4vZ2V0TWVzc2FnZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7cmVmcmVzaH0gZnJvbSAnLi9yZWZyZXNoUGFnZSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuaW50ZXJmYWNlIE9uQ2xpY2tQcm9wcyB7XG5cdHNlY3Rpb25JZFNwYW5zOiBFbGVtZW50W107XG5cdG1lc3NhZ2VDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRyZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0aW5kZXhObzogc3RyaW5nO1xuXHRhbmNob3I6IHN0cmluZztcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcbn1cblxudHlwZSBBcmNoaXZlT25DbGlja1Byb3BzID0gT25DbGlja1Byb3BzICYge2FyY2hpdmVUbzogc3RyaW5nfTtcbnR5cGUgUmVtb3ZlT25DbGlja1Byb3BzID0gT25DbGlja1Byb3BzO1xuXG5jb25zdCBhcmNoaXZlT25DbGljayA9IGFzeW5jIChcblx0ZXZlbnQ6IEV2ZW50LFxuXHR7c2VjdGlvbklkU3BhbnMsIG1lc3NhZ2VDaGFubmVsLCByZWZyZXNoQ2hhbm5lbCwgaW5kZXhObywgYW5jaG9yLCB0b2FzdGlmeUluc3RhbmNlLCBhcmNoaXZlVG99OiBBcmNoaXZlT25DbGlja1Byb3BzXG4pID0+IHtcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3QgcGFyZW50RWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpPy5wYXJlbnRFbGVtZW50O1xuXHRpZiAoIXBhcmVudEVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZHJlbig8c3Bhbj57Z2V0TWVzc2FnZSgnQXJjaGl2aW5nJyl9PC9zcGFuPik7XG5cblx0Zm9yIChjb25zdCBzcGFuIG9mIHNlY3Rpb25JZFNwYW5zKSB7XG5cdFx0c3Bhbi5yZW1vdmUoKTtcblx0fVxuXG5cdGNvbnN0IG1lc3NhZ2UxID0gZ2V0QXJjaGl2aW5nTWVzc2FnZShpbmRleE5vKTtcblx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UobWVzc2FnZTEpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UgfHw9IHtcblx0XHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxuXHR9O1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogbWVzc2FnZTEsXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGF3YWl0IGFyY2hpdmVTZWN0aW9uKHtpbmRleDogaW5kZXhObywgYW5jaG9yLCBhcmNoaXZlVG99KTtcblxuXHRwYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZHJlbig8c3Bhbj57Z2V0TWVzc2FnZSgnQXJjaGl2ZWQnKX08L3NwYW4+KTtcblxuXHRjb25zdCBtZXNzYWdlID0gZ2V0QXJjaGl2ZWRNZXNzYWdlKGluZGV4Tm8pO1xuXHRtZXNzYWdlQ2hhbm5lbC5wb3N0TWVzc2FnZShtZXNzYWdlKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogbWVzc2FnZSxcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bWVzc2FnZUNoYW5uZWwuY2xvc2UoKTtcblxuXHRyZWZyZXNoQ2hhbm5lbC5wb3N0TWVzc2FnZSgnUmVmcmVzaCcpO1xuXHRyZWZyZXNoKHt0b2FzdGlmeUluc3RhbmNlfSk7XG59O1xuY29uc3QgcmVtb3ZlT25DbGljayA9IGFzeW5jIChcblx0ZXZlbnQ6IEV2ZW50LFxuXHR7c2VjdGlvbklkU3BhbnMsIG1lc3NhZ2VDaGFubmVsLCByZWZyZXNoQ2hhbm5lbCwgaW5kZXhObywgYW5jaG9yLCB0b2FzdGlmeUluc3RhbmNlfTogUmVtb3ZlT25DbGlja1Byb3BzXG4pID0+IHtcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0Y29uc3QgcGFyZW50RWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpPy5wYXJlbnRFbGVtZW50O1xuXHRpZiAoIXBhcmVudEVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZHJlbig8c3Bhbj57Z2V0TWVzc2FnZSgnRGVsZXRpbmcnKX08L3NwYW4+KTtcblxuXHRmb3IgKGNvbnN0IHNwYW4gb2Ygc2VjdGlvbklkU3BhbnMpIHtcblx0XHRzcGFuLnJlbW92ZSgpO1xuXHR9XG5cblx0bGV0IG1lc3NhZ2UgPSBnZXREZWxldGluZ01lc3NhZ2UoaW5kZXhObyk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UgfHw9IHtcblx0XHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxuXHR9O1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogbWVzc2FnZSxcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0YXdhaXQgcmVtb3ZlU2VjdGlvbih7aW5kZXg6IGluZGV4Tm8sIGFuY2hvcn0pO1xuXG5cdHBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKDxzcGFuPntnZXRNZXNzYWdlKCdEZWxldGVkJyl9PC9zcGFuPik7XG5cblx0bWVzc2FnZSA9IGdldERlbGV0ZWRNZXNzYWdlKGluZGV4Tm8pO1xuXHRtZXNzYWdlQ2hhbm5lbC5wb3N0TWVzc2FnZShtZXNzYWdlKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogbWVzc2FnZSxcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bWVzc2FnZUNoYW5uZWwuY2xvc2UoKTtcblxuXHRyZWZyZXNoQ2hhbm5lbC5wb3N0TWVzc2FnZSgnUmVmcmVzaCcpO1xuXHRyZWZyZXNoKHt0b2FzdGlmeUluc3RhbmNlfSk7XG59O1xuXG5leHBvcnQge2FyY2hpdmVPbkNsaWNrLCByZW1vdmVPbkNsaWNrfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHt3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IHJlZnJlc2ggPSAoe1xuXHR0YXJnZXRQYWdlLFxuXHR0b2FzdGlmeUluc3RhbmNlLFxufToge3RhcmdldFBhZ2U/OiBzdHJpbmc7IHRvYXN0aWZ5SW5zdGFuY2U/OiBUb2FzdGlmeUluc3RhbmNlfSA9IHt9KTogdm9pZCA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgfHw9IHtcblx0XHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxuXHR9O1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUmVmcmVzaGluZycpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRsb2NhdGlvbi5yZXBsYWNlKFxuXHRcdG13LnV0aWwuZ2V0VXJsKHdnU2NyaXB0LCB7XG5cdFx0XHR0aXRsZTogdGFyZ2V0UGFnZSA/PyB3Z1BhZ2VOYW1lLFxuXHRcdH0pXG5cdCk7XG59O1xuXG5leHBvcnQge3JlZnJlc2h9O1xuIiwgImltcG9ydCB7T25DbGljaywgUGlwZSwgU2VjdGlvbklEfSBmcm9tICcuL3JlYWN0JztcbmltcG9ydCB7YXJjaGl2ZU9uQ2xpY2ssIHJlbW92ZU9uQ2xpY2t9IGZyb20gJy4uL3V0aWwvb25DbGljayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuaW50ZXJmYWNlIEFyY2hpdmVTZWN0aW9uTGlua1Byb3BzIHtcblx0c2VjdGlvbklkU3BhbnM6IEVsZW1lbnRbXTtcblx0bWVzc2FnZUNoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdHJlZnJlc2hDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRpbmRleE5vOiBzdHJpbmc7XG5cdGFuY2hvcjogc3RyaW5nO1xuXHR0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlO1xuXHRhcmNoaXZlVG86IHN0cmluZztcbn1cblxuY29uc3QgQXJjaGl2ZVNlY3Rpb25MaW5rID0gKHtcblx0c2VjdGlvbklkU3BhbnMsXG5cdG1lc3NhZ2VDaGFubmVsLFxuXHRyZWZyZXNoQ2hhbm5lbCxcblx0aW5kZXhObyxcblx0YW5jaG9yLFxuXHRhcmNoaXZlVG8sXG5cdHRvYXN0aWZ5SW5zdGFuY2UsXG59OiBBcmNoaXZlU2VjdGlvbkxpbmtQcm9wcykgPT4gKFxuXHQ8T25DbGlja1xuXHRcdGNsYXNzTmFtZT17J2FyY2hpdmUnfVxuXHRcdG9uQ2xpY2s9eyhldmVudDogRXZlbnQpID0+IHtcblx0XHRcdHZvaWQgYXJjaGl2ZU9uQ2xpY2soZXZlbnQsIHtcblx0XHRcdFx0c2VjdGlvbklkU3BhbnMsXG5cdFx0XHRcdG1lc3NhZ2VDaGFubmVsLFxuXHRcdFx0XHRyZWZyZXNoQ2hhbm5lbCxcblx0XHRcdFx0aW5kZXhObyxcblx0XHRcdFx0YW5jaG9yLFxuXHRcdFx0XHRhcmNoaXZlVG8sXG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdFx0XHR9KTtcblx0XHR9fVxuXHRcdHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdBcmNoaXZlJyl9XG5cdC8+XG4pO1xuXG5pbnRlcmZhY2UgUmVtb3ZlU2VjdGlvbkxpbmtQcm9wcyB7XG5cdHNlY3Rpb25JZFNwYW5zOiBFbGVtZW50W107XG5cdG1lc3NhZ2VDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRyZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0aW5kZXhObzogc3RyaW5nO1xuXHRhbmNob3I6IHN0cmluZztcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcbn1cblxuY29uc3QgUmVtb3ZlU2VjdGlvbkxpbmsgPSAoe1xuXHRzZWN0aW9uSWRTcGFucyxcblx0bWVzc2FnZUNoYW5uZWwsXG5cdHJlZnJlc2hDaGFubmVsLFxuXHRpbmRleE5vLFxuXHRhbmNob3IsXG5cdHRvYXN0aWZ5SW5zdGFuY2UsXG59OiBSZW1vdmVTZWN0aW9uTGlua1Byb3BzKSA9PiAoXG5cdDxPbkNsaWNrXG5cdFx0Y2xhc3NOYW1lPXsnZGVsZXRlJ31cblx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdHZvaWQgcmVtb3ZlT25DbGljayhldmVudCwge1xuXHRcdFx0XHRzZWN0aW9uSWRTcGFucyxcblx0XHRcdFx0bWVzc2FnZUNoYW5uZWwsXG5cdFx0XHRcdHJlZnJlc2hDaGFubmVsLFxuXHRcdFx0XHRpbmRleE5vLFxuXHRcdFx0XHRhbmNob3IsXG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdFx0XHR9KTtcblx0XHR9fVxuXHRcdHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdEZWxldGUnKX1cblx0Lz5cbik7XG5cbmludGVyZmFjZSBBcmNoaXZlQW5kRGVsZXRlU2VjdGlvbkxpbmtQcm9wcyB7XG5cdHNlY3Rpb25JZFNwYW5zOiBFbGVtZW50W107XG5cdG1lc3NhZ2VDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRyZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0aW5kZXhObzogc3RyaW5nO1xuXHRhbmNob3I6IHN0cmluZztcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcblx0c2VjQXJjOiBzdHJpbmc7XG5cdHNlY0RlbDogc3RyaW5nO1xuXHRhcmNMb2M6IHN0cmluZztcbn1cblxuY29uc3QgQXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rID0gKHtcblx0c2VjdGlvbklkU3BhbnMsXG5cdG1lc3NhZ2VDaGFubmVsLFxuXHRyZWZyZXNoQ2hhbm5lbCxcblx0aW5kZXhObyxcblx0YW5jaG9yLFxuXHR0b2FzdGlmeUluc3RhbmNlLFxuXHRzZWNBcmMsXG5cdHNlY0RlbCxcblx0YXJjTG9jLFxufTogQXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rUHJvcHMpID0+IChcblx0PFNlY3Rpb25JRD5cblx0XHQ8PlxuXHRcdFx0e3NlY0FyYyA9PT0gJzEnID8gKFxuXHRcdFx0XHQ8QXJjaGl2ZVNlY3Rpb25MaW5rXG5cdFx0XHRcdFx0c2VjdGlvbklkU3BhbnM9e3NlY3Rpb25JZFNwYW5zfVxuXHRcdFx0XHRcdG1lc3NhZ2VDaGFubmVsPXttZXNzYWdlQ2hhbm5lbH1cblx0XHRcdFx0XHRyZWZyZXNoQ2hhbm5lbD17cmVmcmVzaENoYW5uZWx9XG5cdFx0XHRcdFx0aW5kZXhObz17aW5kZXhOb31cblx0XHRcdFx0XHRhbmNob3I9e2FuY2hvcn1cblx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlPXt0b2FzdGlmeUluc3RhbmNlfVxuXHRcdFx0XHRcdGFyY2hpdmVUbz17YXJjTG9jfVxuXHRcdFx0XHQvPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PD48Lz5cblx0XHRcdCl9XG5cdFx0XHR7c2VjQXJjID09PSAnMScgJiYgc2VjRGVsID09PSAnMScgPyA8UGlwZSAvPiA6IDw+PC8+fVxuXHRcdFx0e3NlY0RlbCA9PT0gJzEnID8gKFxuXHRcdFx0XHQ8UmVtb3ZlU2VjdGlvbkxpbmtcblx0XHRcdFx0XHRzZWN0aW9uSWRTcGFucz17c2VjdGlvbklkU3BhbnN9XG5cdFx0XHRcdFx0bWVzc2FnZUNoYW5uZWw9e21lc3NhZ2VDaGFubmVsfVxuXHRcdFx0XHRcdHJlZnJlc2hDaGFubmVsPXtyZWZyZXNoQ2hhbm5lbH1cblx0XHRcdFx0XHRpbmRleE5vPXtpbmRleE5vfVxuXHRcdFx0XHRcdGFuY2hvcj17YW5jaG9yfVxuXHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2U9e3RvYXN0aWZ5SW5zdGFuY2V9XG5cdFx0XHRcdC8+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8PjwvPlxuXHRcdFx0KX1cblx0XHQ8Lz5cblx0PC9TZWN0aW9uSUQ+XG4pO1xuXG5leHBvcnQge0FyY2hpdmVTZWN0aW9uTGluaywgUmVtb3ZlU2VjdGlvbkxpbmssIEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGlua307XG4iLCAiaW1wb3J0IHtBcmNoaXZlQW5kRGVsZXRlU2VjdGlvbkxpbmt9IGZyb20gJy4vY29tcG9uZW50cy9zZWN0aW9uTGluayc7XG5pbXBvcnQge0VkaXRDb25mbGljdE5vdGljZX0gZnJvbSAnLi9jb21wb25lbnRzL3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldFNlY3Rpb25zfSBmcm9tICcuL3V0aWwvZ2V0U2VjdGlvbic7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gJy4vdXRpbC9yZWZyZXNoUGFnZSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYWRkTGlua3MgPSBhc3luYyAoe1xuXHRhcmNMZXZlbCxcblx0YXJjTG9jLFxuXHRzZWNBcmMsXG5cdHNlY0RlbCxcbn06IHtcblx0YXJjTGV2ZWw6IHN0cmluZztcblx0YXJjTG9jOiBzdHJpbmc7XG5cdHNlY0FyYzogc3RyaW5nO1xuXHRzZWNEZWw6IHN0cmluZztcbn0pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9uc1RvQXJjaGl2ZSA9IGF3YWl0IGdldFNlY3Rpb25zKHdnUGFnZU5hbWUpO1xuXG5cdGNvbnN0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaCR7YXJjTGV2ZWx9YCk7XG5cdGNvbnN0IGhlYWRsaW5lcyA9IFtdO1xuXHRjb25zdCBoZWFkaW5nSW5kaWNlcyA9IFtdO1xuXG5cdGZvciAoY29uc3QgaGVhZGluZyBvZiBoZWFkaW5ncykge1xuXHRcdGNvbnN0IGhlYWRsaW5lID0gaGVhZGluZy5xdWVyeVNlbGVjdG9yKCcubXctaGVhZGxpbmUnKTtcblx0XHRpZiAoaGVhZGxpbmUpIHtcblx0XHRcdGhlYWRsaW5lc1toZWFkbGluZXMubGVuZ3RoXSA9IGhlYWRsaW5lLmlkO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHNlY3Rpb25JZFNwYW5zOiBFbGVtZW50W10gPSBbXTtcblx0bGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblxuXHRjb25zdCBtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKGAke3dnUGFnZU5hbWV9X21lc3NhZ2VgKTtcblx0Y29uc3QgcmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChgJHt3Z1BhZ2VOYW1lfV9yZWZyZXNoYCk7XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zVG9BcmNoaXZlKSB7XG5cdFx0aWYgKHNlY3Rpb24ubGV2ZWwgIT09IGFyY0xldmVsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoaGVhZGxpbmVzLmluY2x1ZGVzKHNlY3Rpb24uYW5jaG9yKSkge1xuXHRcdFx0aGVhZGluZ0luZGljZXNbaGVhZGluZ0luZGljZXMubGVuZ3RoXSA9IHtcblx0XHRcdFx0aW5kZXhObzogc2VjdGlvbi5pbmRleCxcblx0XHRcdFx0YW5jaG9yOiBzZWN0aW9uLmFuY2hvcixcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCB7aW5kZXhObywgYW5jaG9yfSBvZiBoZWFkaW5nSW5kaWNlcykge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1xdWVyeS1zZWxlY3RvclxuXHRcdGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYW5jaG9yKTtcblx0XHRpZiAoIWhlYWRsaW5lKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBwYXJlbnRIZWFkaW5nID0gaGVhZGxpbmUucGFyZW50RWxlbWVudDtcblx0XHRpZiAoIXBhcmVudEhlYWRpbmcpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVkaXRTZWN0aW9uID0gcGFyZW50SGVhZGluZy5xdWVyeVNlbGVjdG9yKCcubXctZWRpdHNlY3Rpb24nKTtcblx0XHRpZiAoIWVkaXRTZWN0aW9uKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBzZWN0aW9uSURTcGFuID0gKFxuXHRcdFx0PEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGlua1xuXHRcdFx0XHRzZWN0aW9uSWRTcGFucz17c2VjdGlvbklkU3BhbnN9XG5cdFx0XHRcdG1lc3NhZ2VDaGFubmVsPXttZXNzYWdlQ2hhbm5lbH1cblx0XHRcdFx0cmVmcmVzaENoYW5uZWw9e3JlZnJlc2hDaGFubmVsfVxuXHRcdFx0XHRpbmRleE5vPXtpbmRleE5vfVxuXHRcdFx0XHRhbmNob3I9e2FuY2hvcn1cblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZT17dG9hc3RpZnlJbnN0YW5jZX1cblx0XHRcdFx0YXJjTG9jPXthcmNMb2N9XG5cdFx0XHRcdHNlY0FyYz17c2VjQXJjfVxuXHRcdFx0XHRzZWNEZWw9e3NlY0RlbH1cblx0XHRcdC8+XG5cdFx0KTtcblxuXHRcdGVkaXRTZWN0aW9uLnByZXBlbmQoc2VjdGlvbklEU3Bhbik7XG5cdFx0c2VjdGlvbklkU3BhbnNbc2VjdGlvbklkU3BhbnMubGVuZ3RoXSA9IHNlY3Rpb25JRFNwYW47XG5cdH1cblxuXHRtZXNzYWdlQ2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG5cdFx0Zm9yIChjb25zdCBzcGFuIG9mIHNlY3Rpb25JZFNwYW5zKSB7XG5cdFx0XHRzcGFuLnJlbW92ZSgpO1xuXHRcdH1cblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZXZlbnQuZGF0YSBhcyBzdHJpbmcsXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0fSk7XG5cblx0cmVmcmVzaENoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICgpID0+IHtcblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0bm9kZTogKFxuXHRcdFx0XHRcdDxFZGl0Q29uZmxpY3ROb3RpY2Vcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdFx0XHRcdFx0cmVmcmVzaCgpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdpbmZvJ1xuXHRcdCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRMaW5rc307XG4iLCAiaW1wb3J0IHtsb2FkRWFzeUFyY2l2ZX0gZnJvbSAnLi9tb2R1bGVzL2xvYWRFYXN5QXJjaXZlJztcblxuKGZ1bmN0aW9uIGVhc3lBcmNoaXZlKCkge1xuXHRsb2FkRWFzeUFyY2l2ZSgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxRQUFRO0FBQ2QsVUFBSSxXQUFXLENBQUM7QUFFaEIsZUFBU0Esa0JBQWlCLFNBQVM7QUFDL0IsWUFBSSxRQUFRO0FBQ1osa0JBQVUsT0FBTyxPQUFPO0FBRXhCLFlBQUksS0FBSyx1QkFBdUIsVUFBVTtBQUUxQyxpQkFBUyxFQUFFLElBQUksU0FBUyxFQUFFLEtBQUssQ0FBQztBQUNoQyxpQkFBUyxFQUFFLEVBQUUsS0FBSyxJQUFJO0FBRXRCLGFBQUssUUFBUTtBQUNiLGFBQUssTUFBTTtBQUNYLGFBQUssVUFBVTtBQUNmLGFBQUssTUFBTSxJQUFJLGVBQWU7QUFDOUIsYUFBSyxJQUFJLE1BQU0sTUFBTTtBQUNyQixhQUFLLElBQUksTUFBTSxNQUFNO0FBRXJCLGVBQU8saUJBQWlCLFdBQVcsU0FBUyxHQUFHO0FBQzNDLGNBQUksRUFBRSxnQkFBZ0IsT0FBTyxhQUFjO0FBQzNDLGNBQUksRUFBRSxZQUFZLFFBQVEsRUFBRSxhQUFhLEdBQUk7QUFDN0MsY0FBSSxFQUFFLElBQUksVUFBVSxHQUFHLEdBQUcsTUFBTSxNQUFNLEdBQUk7QUFDMUMsY0FBSSxPQUFPLEtBQUssTUFBTSxFQUFFLFFBQVE7QUFDaEMsZ0JBQU0sSUFBSSxNQUFNLFlBQVksSUFBSTtBQUFBLFFBQ3BDLENBQUM7QUFBQSxNQUNMO0FBRUEsTUFBQUEsa0JBQWlCLFlBQVk7QUFBQTtBQUFBLFFBRXpCLElBQUksT0FBTztBQUNQLGlCQUFPLEtBQUs7QUFBQSxRQUNoQjtBQUFBLFFBQ0EsYUFBYSxTQUFTLFNBQVM7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QixNQUFJLENBQUN2QyxRQUFRO0FBQ1p3TSxrQkFBY0UsT0FBTzlKLG9DQUFBMUQsUUFBQUMsY0FBQ2MsVUFBQSxJQUFTLENBQUU7QUFDakM7RUFDRDtBQUVBLFFBQU0yTSxtQkFBbUJoTSxtQkFBbUJaLE1BQU07QUFDbEQsTUFBSTRNLGtCQUFrQjtBQUNyQkosa0JBQWNFLE9BQU85SixvQ0FBQTFELFFBQUFDLGNBQUNZLGtCQUFBO01BQWlCQztJQUFBLENBQWdCLENBQUU7QUFDekQ7RUFDRDtBQUVBd00sZ0JBQWNFLE9BQU85SixvQ0FBQTFELFFBQUFDLGNBQUNlLFNBQUE7SUFBUUY7RUFBQSxDQUFnQixDQUFFO0FBRWhELE9BQUsySyxTQUFTcEksUUFBUTtBQUN2Qjs7Q1NuREMsU0FBU3NLLGNBQWM7QUFDdkJSLGlCQUFlO0FBQ2hCLEdBQUc7IiwKICAibmFtZXMiOiBbIkJyb2FkY2FzdENoYW5uZWwiLCAiZWxlbWVudElkIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiZm9vdGVyTm90aWNlIiwgInNlY3Rpb25JZFNwYW4iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFyY2hpdmUiLCAibG9jYWxpemUiLCAiZW4iLCAiQXJjaGl2aW5nIiwgIkFyY2hpdmVkIiwgIkRlbGV0ZSIsICJEZWxldGluZyIsICJEZWxldGVkIiwgInpoIiwgIlJlZnJlc2giLCAiUmVmcmVzaGluZyIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic2FuaXRpemUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiRm9vdGVyTm90aWNlIiwgImlkIiwgImNoaWxkcmVuIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiSW5CbGFja0xpc3QiLCAiTm90QWxsb3dlZCIsICJBcmNMb2NOb3RBbGxvd2VkIiwgImFyY0xvYyIsICJOb0FyY0xvYyIsICJFbmFibGVkIiwgInRpdGxlIiwgImhyZWYiLCAiY29uY2F0IiwgIk9uQ2xpY2siLCAidGV4dENvbnRlbnQiLCAib25DbGljayIsICJTZWN0aW9uSUQiLCAiUGlwZSIsICJFZGl0Q29uZmxpY3ROb3RpY2UiLCAiaWZBcmNMb2NOb3RBbGxvd2VkIiwgIndnUGFnZU5hbWUiLCAic291cmNlVGl0bGUiLCAiVGl0bGUiLCAiYXJjTG9jVGl0bGUiLCAiYXJjTG9jTmFtZXNwYWNlSWQiLCAiZ2V0TmFtZXNwYWNlSWQiLCAiYXJjTG9jUGFnZU5hbWUiLCAiZ2V0TWFpbiIsICJzb3VyY2VOYW1lc3BhY2VJZCIsICJzb3VyY2VQYWdlTmFtZSIsICJpc0luQmxhY2tsaXN0IiwgImJsYWNrTGlzdFJlZ2V4QXJyIiwgIl9pIiwgIl9ibGFja0xpc3RSZWdleEFyciIsICJsZW5ndGgiLCAiZWxlbWVudCIsICJ0ZXN0IiwgImlzTm90QWxsb3dlZCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1JlbGV2YW50VXNlck5hbWUiLCAid2dVc2VyTmFtZSIsICJpc05vdFN1cHBvcnRlZCIsICJ3Z0lzTWFpblBhZ2UiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJnZXRTZXR0aW5ncyIsICJzZXR0aW5ncyIsICJkYXRhc2V0IiwgImFyY0xldmVsIiwgInNlY0FyYyIsICJzZWNEZWwiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRTZWN0aW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicGFnZSIsICJwcm9wIiwgInBhcnNlIiwgInNlY3Rpb25zIiwgInNlY3Rpb25zVG9BcmNoaXZlIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInNlY3Rpb24iLCAidmFsdWUiLCAibGV2ZWwiLCAiaW5kZXgiLCAiYW5jaG9yIiwgInN0YXJ0c1dpdGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0U2VjdGlvbkNvbnRlbnQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJHF1ZXJ5JHBhZ2VzIiwgIl9yZXNwb25zZSRxdWVyeSRwYWdlczIiLCAicnZwcm9wIiwgInRpdGxlcyIsICJydnNlY3Rpb24iLCAicnZzbG90cyIsICJyZXNwb25zZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgIl94MiIsICJpc1BhZ2VFeGlzdCIsICJfcmVmMyIsICJhcmNoaXZlVG8iLCAiX3F1ZXJ5JHBhZ2VzJCIsICJxdWVyeSIsICJtaXNzaW5nIiwgIl94MyIsICJpc1NlY3Rpb25FeGlzdCIsICJfcmVmNCIsICJpc0V4aXN0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIl94NCIsICJyZW1vdmVTZWN0aW9uIiwgIl9yZWY1IiwgInN1bW1hcnkiLCAiZWRpdCIsICJ0ZXh0IiwgIm1pbm9yIiwgIl94NSIsICJhcmNoaXZlU2VjdGlvbiIsICJfcmVmNiIsICJwYWdlRXhpc3QiLCAiY3JlYXRlIiwgImFwcGVuZHRleHQiLCAiX3g2IiwgImdldEFyY2hpdmluZ01lc3NhZ2UiLCAiaW5kZXhObyIsICJnZXRBcmNoaXZlZE1lc3NhZ2UiLCAiZ2V0RGVsZXRpbmdNZXNzYWdlIiwgImdldERlbGV0ZWRNZXNzYWdlIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAid2dTY3JpcHQiLCAicmVmcmVzaCIsICJ0YXJnZXRQYWdlIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInV0aWwiLCAiZ2V0VXJsIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJhcmNoaXZlT25DbGljayIsICJfcmVmNyIsICJldmVudCIsICJzZWN0aW9uSWRTcGFucyIsICJtZXNzYWdlQ2hhbm5lbCIsICJyZWZyZXNoQ2hhbm5lbCIsICJfZXZlbnQkdGFyZ2V0IiwgInByZXZlbnREZWZhdWx0IiwgInBhcmVudEVsZW1lbnQiLCAidGFyZ2V0IiwgInJlcGxhY2VDaGlsZHJlbiIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJzcGFuIiwgInJlbW92ZSIsICJtZXNzYWdlMSIsICJwb3N0TWVzc2FnZSIsICJjbG9zZSIsICJtZXNzYWdlIiwgIl94NyIsICJfeDgiLCAicmVtb3ZlT25DbGljayIsICJfcmVmOCIsICJfZXZlbnQkdGFyZ2V0MiIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfeDkiLCAiX3gxMCIsICJpbXBvcnRfZXh0X2dhZGdldDciLCAiQXJjaGl2ZVNlY3Rpb25MaW5rIiwgIlJlbW92ZVNlY3Rpb25MaW5rIiwgIkFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGluayIsICJpbXBvcnRfZXh0X2dhZGdldDgiLCAiaW1wb3J0X2V4dF9nYWRnZXQ5IiwgImFkZExpbmtzIiwgIl9yZWY5IiwgImhlYWRpbmdzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiaGVhZGxpbmVzIiwgImhlYWRpbmdJbmRpY2VzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImhlYWRpbmciLCAiaGVhZGxpbmUiLCAiQnJvYWRjYXN0Q2hhbm5lbCIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJfaTIiLCAiX2hlYWRpbmdJbmRpY2VzIiwgImdldEVsZW1lbnRCeUlkIiwgInBhcmVudEhlYWRpbmciLCAiZWRpdFNlY3Rpb24iLCAic2VjdGlvbklEU3BhbiIsICJwcmVwZW5kIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX2kzIiwgIl9zZWN0aW9uSWRTcGFucyIsICJkYXRhIiwgIm5vZGUiLCAiX3gxMSIsICJsb2FkRWFzeUFyY2l2ZSIsICJub3RTdXBwb3J0ZWQiLCAibW91bnRQb2ludCIsICJmb290ZXJFbGVtZW50IiwgImluQmxhY2tsaXN0IiwgImFwcGVuZCIsICJub3RBbGxvd2VkIiwgImFyY0xvY05vdEFsbG93ZWQiLCAiZWFzeUFyY2hpdmUiXQp9Cg==
