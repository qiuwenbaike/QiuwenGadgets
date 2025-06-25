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
var footerNotice = "EasyArchive-module__footerNotice_ZRkG1q__4100";
var sectionIdSpan = "EasyArchive-module__sectionIdSpan_ZRkG1q__4100";
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
  const id = elementId;
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
      id,
      className: [footerNotice, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
    }, children);
  } else if (["gongbi", "vector", "vector-2022"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      id,
      className: [footerNotice, "noprint"]
    }, children);
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id,
    className: [footerNotice, "noprint"]
  }, children);
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
  if (targetPage) {
    location.replace(mw.util.getUrl(targetPage));
  } else {
    const {
      wgPageName
    } = mw.config.get();
    location.replace(mw.util.getUrl(wgPageName));
  }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL2Zvb3Rlck5vdGljZXMudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2NvbXBvbmVudHMvRWFzeUFyY2hpdmUubW9kdWxlLmxlc3MiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL3Nhbml0aXplLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvZ2V0U2V0dGluZ3MudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvbG9hZEVhc3lBcmNpdmUudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2NvbXBvbmVudHMvc2VjdGlvbkxpbmsudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvZ2V0U2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2VkaXRTZWN0aW9uLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvZ2V0TWVzc2FnZS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL29uQ2xpY2sudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvcmVmcmVzaFBhZ2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvY29tcG9uZW50cy9lZGl0Q29uZmxpY3ROb3RpY2UudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2FkZExpbmtzLnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvRWFzeUFyY2hpdmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgICB2YXIgY2hhbm5lbHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIEJyb2FkY2FzdENoYW5uZWwoY2hhbm5lbCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICBjaGFubmVsID0gU3RyaW5nKGNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBpZCA9ICckQnJvYWRjYXN0Q2hhbm5lbCQnICsgY2hhbm5lbCArICckJztcblxuICAgICAgICBjaGFubmVsc1tpZF0gPSBjaGFubmVsc1tpZF0gfHwgW107XG4gICAgICAgIGNoYW5uZWxzW2lkXS5wdXNoKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX25hbWUgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWMgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDEuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDIuc3RhcnQoKTtcblxuICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnN0b3JhZ2VBcmVhICE9PSBnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5uZXdWYWx1ZSA9PSBudWxsIHx8IGUubmV3VmFsdWUgPT09ICcnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5rZXkuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCkgIT09IGlkKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAkdGhpcy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEJyb2FkY2FzdENoYW5uZWwucHJvdG90eXBlID0ge1xuICAgICAgICAvLyBCcm9hZGNhc3RDaGFubmVsIEFQSVxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0TWVzc2FnZTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gb3RoZXIgY29udGV4dHMgdmlhIHN0b3JhZ2UgZXZlbnRzLi4uXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5faWQgKyBTdHJpbmcoRGF0ZS5ub3coKSkgKyAnJCcgKyBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIGN1cnJlbnQgY29udGV4dCB2aWEgcG9ydHNcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5mb3JFYWNoKGZ1bmN0aW9uKGJjKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJjID09PSAkdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGJjLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0Mi5jbG9zZSgpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGFubmVsc1t0aGlzLl9pZF0uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEV2ZW50VGFyZ2V0IEFQSVxuICAgICAgICBnZXQgb25tZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9ubWVzc2FnZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEub25tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oLypldmVudCovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuZGlzcGF0Y2hFdmVudC5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgPSBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCB8fCBCcm9hZGNhc3RDaGFubmVsO1xufSkoc2VsZik7XG4iLCAie1xuXHRcImVsZW1lbnRJZFwiOiBcImdhZGdldC1lYXN5X2FyY2hpdmVcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtmb290ZXJOb3RpY2V9IGZyb20gJy4vRWFzeUFyY2hpdmUubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7c2FuaXRpemV9IGZyb20gJy4uL3V0aWwvc2FuaXRpemUnO1xuXG5pbnRlcmZhY2UgRm9vdGVyTm90aWNlUHJvcHMge1xuXHRjaGlsZHJlbjogUmVhY3RFbGVtZW50O1xufVxuXG5pbnRlcmZhY2UgQXJjTG9jUHJvcHMge1xuXHRhcmNMb2M6IHN0cmluZztcbn1cblxuY29uc3QgRm9vdGVyTm90aWNlID0gKHtjaGlsZHJlbiA9IDw+PC8+fTogRm9vdGVyTm90aWNlUHJvcHMpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpZCA9IE9QVElPTlMuZWxlbWVudElkO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e1tmb290ZXJOb3RpY2UsICdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nLCAnbm9wcmludCddfT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWydnb25nYmknLCAndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgaWQ9e2lkfSBjbGFzc05hbWU9e1tmb290ZXJOb3RpY2UsICdub3ByaW50J119PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9e1tmb290ZXJOb3RpY2UsICdub3ByaW50J119PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgSW5CbGFja0xpc3QgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2U+XG5cdFx0PD5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCcpfVxuXHRcdFx0PGJyIC8+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQgZGV0YWlscycpfVxuXHRcdDwvPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmNvbnN0IE5vdEFsbG93ZWQgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2U+XG5cdFx0PD57Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBhbGxvd2VkJyl9PC8+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuY29uc3QgQXJjTG9jTm90QWxsb3dlZCA9ICh7YXJjTG9jfTogQXJjTG9jUHJvcHMpID0+IChcblx0PEZvb3Rlck5vdGljZT5cblx0XHQ8PlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQnKS5yZXBsYWNlKCckMScsIHNhbml0aXplKGFyY0xvYykpfVxuXHRcdFx0PGJyIC8+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCBkZXRhaWxzJyl9XG5cdFx0PC8+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuY29uc3QgTm9BcmNMb2MgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2U+XG5cdFx0PD57Z2V0TWVzc2FnZSgnTm8gQXJjaGl2ZSBMb2NhdGlvbicpfTwvPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmNvbnN0IEVuYWJsZWQgPSAoe2FyY0xvY306IEFyY0xvY1Byb3BzKSA9PiAoXG5cdDxGb290ZXJOb3RpY2U+XG5cdFx0PD5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgZW5hYmxlZCcpfVxuXHRcdFx0e2dldE1lc3NhZ2UoJygnKX1cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIGxvY2F0aW9uJyl9XG5cdFx0XHQ8YSB0aXRsZT17c2FuaXRpemUoYXJjTG9jKX0gaHJlZj17YC93aWtpLyR7c2FuaXRpemUoYXJjTG9jKX1gfT5cblx0XHRcdFx0e2FyY0xvY31cblx0XHRcdDwvYT5cblx0XHRcdHtnZXRNZXNzYWdlKCcpJyl9XG5cdFx0XHR7Z2V0TWVzc2FnZSgnLicpfVxuXHRcdDwvPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmV4cG9ydCB7Rm9vdGVyTm90aWNlLCBFbmFibGVkLCBJbkJsYWNrTGlzdCwgTm90QWxsb3dlZCwgQXJjTG9jTm90QWxsb3dlZCwgTm9BcmNMb2N9O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL0Vhc3lBcmNoaXZlLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgZm9vdGVyTm90aWNlID0gXCJFYXN5QXJjaGl2ZS1tb2R1bGVfX2Zvb3Rlck5vdGljZV9aUmtHMXFfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCBzZWN0aW9uSWRTcGFuID0gXCJFYXN5QXJjaGl2ZS1tb2R1bGVfX3NlY3Rpb25JZFNwYW5fWlJrRzFxX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJmb290ZXJOb3RpY2VcIjogZm9vdGVyTm90aWNlLFxuICBcInNlY3Rpb25JZFNwYW5cIjogc2VjdGlvbklkU3BhblxufTtcbiAgICAgICIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QXJjaGl2ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIGxvY2F0aW9uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlIGxvY2F0aW9uOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5Zyw5Z2A77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOiHs++8micsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgYnV0IEVhc3kgYXJjaGl2ZSBjYW5ub3Qgb3BlcmF0ZSBsaWtlIHRoaXMuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouebruWJjeeahOWtmOaho+WcsOWdgOaYr+KAnCQx4oCd44CCRWFzeSBBcmNoaXZlIOaXoOazleaMieatpOWcsOWdgOWtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLnlbbliY3nmoTlrZjmqpTlnLDlnYDmmK/jgIwkMeOAjeOAgkVhc3kgQXJjaGl2ZSDnhKHms5XmjInmraTlnLDlnYDlrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkIGRldGFpbHMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmVzIHNob3VsZCBub3QgYmUgbm9ybWFsbHkgZGlyZWN0ZWQgdG8gcGFnZXMgdW5kZXIgYXJ0aWNsZSBuYW1lc3BhY2UuIFBsZWFzZSBjaGVjayBpZiB5b3UgaGF2ZSB0aGUgY29ycmVjdCBhcmNoaXZlIGxvY2F0aW9uLicsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDoiKzogIzoqIDvvIzkuI3lupTlkJHmnaHnm67lkI3np7Dnqbrpl7Tov5vooYzlrZjmoaPjgILmraTlpJbvvIzlrZjmoaPlnLDlnYDkuI3lvpflkozmraTpobXpnaLlkI3np7Dnm7jlkIzjgILor7fmo4Dmn6XlrZjmoaPlnLDlnYDjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA6Iis6ICM6KiA77yM5LiN5oeJ5ZCR5qKd55uu5ZCN56ix56m66ZaT6YCy6KGM5a2Y5qqU44CC5q2k5aSW77yM5a2Y5qqU5Zyw5Z2A5LiN5b6X5ZKM5q2k6aCB6Z2i5ZCN56ix55u45ZCM44CC6KuL5qqi5p+l5a2Y5qqU5Zyw5Z2A44CCJyxcblx0XHR9KSxcblx0XHRBcmNoaXZpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2aW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+S4rScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTkuK0nLFxuXHRcdH0pLFxuXHRcdEFyY2hpdmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflt7LlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdFZGl0IENvbmZpbGljdCBOb3RpY2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBoYXZlIGFscmVhZHkgYXJjaGl2ZWQgYW5kL29yIGRlbGV0ZWQgYSBzZWN0aW9uIG9uIHRoaXMgcGFnZS4gUGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2UgYW5kIGNvbnRpbnVlIGFyY2hpdmluZyBvciBkZWxldGluZyBvdGhlciBzZWN0aW9ucyB0byBhdm9pZCBlZGl0aW5nIGNvbmZsaWN0cy4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo5bey57uP5Zyo5pys6aG16Z2i5omn6KGM5LqG5a2Y5qGj44CB5Yig6Zmk56ug6IqC55qE5pON5L2c44CC6K+35Yi35paw6aG16Z2i77yM54S25ZCO57un57ut5a2Y5qGj44CB5Yig6Zmk5pys6aG16Z2i55qE5YW25LuW56ug6IqC77yM5Lul6YG/5YWN57yW6L6R5Yay56qB44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOW3sue2k+WcqOacrOmggemdouWft+ihjOS6huWtmOaqlOOAgeWIqumZpOeroOevgOeahOaTjeS9nOOAguiri+WIt+aWsOmggemdou+8jOeEtuW+jOe5vOe6jOWtmOaqlOOAgeWIqumZpOacrOmggemdoueahOWFtuS7lueroOevgO+8jOS7pemBv+WFjee3qOi8r+ihneeqgeOAgicsXG5cdFx0fSksXG5cdFx0RGVsZXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZScsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHREZWxldGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdEZWxldGluZycsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5LitJyxcblx0XHR9KSxcblx0XHREZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWIqumZpCcsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+auteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdCdDcmVhdGUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnY3JlYXRlIGFyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bu656uL5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W7uueri+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0RlbGV0ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5q616JC9Jyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIGVuYWJsZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBlbmFibGVkIG9uIHRoaXMgdGFsayBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acrOiuqOiuuumhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBhbGxvd2VkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgY2Fubm90IHVzZSBFYXN5IEFyY2hpdmUgdG8gYXJjaGl2ZSB0aHJlYWRzIG9uIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo5LiN5Y+v5Lul5Zyo5q2k6aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo5LiN5Y+v5Lul5Zyo5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCBkZXRhaWxzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGVzZSBwYWdlcyBhcmUgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmU6IEFydGljbGUsIEZpbGUsIFRlbXBsYXRlLCBNb2R1bGUsIE1lZGlhV2lraSwgQ2F0ZWdvcnksIFNwZWNpYWwsIEphdmFTY3JpcHQsIENTUywgSlNPTi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6L+Z5Lqb6aG16Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJrmnaHnm67jgIFGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfpgJnkupvpoIHpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8muaineebru+8jEZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHR9KSxcblx0XHQnTm8gQXJjaGl2ZSBMb2NhdGlvbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGNhbiBiZSB1c2VkIG9uIHRoaXMgcGFnZSBpZiBuZWVkZWQuIFRvIGVuYWJsZSBpdCwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6Iul6ZyA6KaB77yM5q2k6aG16Z2i5Y+v5Lul5ZCv55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzor7flnKjpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6Iul6ZyA6KaB77yM5q2k6aCB6Z2i5Y+v5Lul5ZWf55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzoq4vlnKjpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdCdTZWN0aW9uICQxJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWN0aW9uICQxJyxcblx0XHRcdHpoOiAn56ysICQxIOeroOiKgicsXG5cdFx0fSksXG5cdFx0JygnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHQnKSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKScsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0Jy4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHRcdCc6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc6ICcsXG5cdFx0XHR6aDogJ++8micsXG5cdFx0fSksXG5cdFx0UmVmcmVzaDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWZyZXNoIHRoZSBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIt+aWsOW9k+WJjemhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfph43mlrDovInlhaXnlbbliY3poIEnLFxuXHRcdH0pLFxuXHRcdFJlZnJlc2hpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVmcmVzaGluZy4uLicsXG5cdFx0XHRqYTogJ+WGjeiqreOBv+i+vOOBv+OBl+OBvuOBmS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfljbPlsIbliLfmlrDlvZPliY3pobXpnaLigKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Y2z5bCH6YeN5paw6LyJ5YWl55W25YmN6aCB4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIHN0cmluZ1xuXHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufTtcblxuZXhwb3J0IHtzYW5pdGl6ZX07XG4iLCAiY29uc3QgaWZBcmNMb2NOb3RBbGxvd2VkID0gKGFyY0xvYzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc291cmNlVGl0bGUgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSk7XG5cdGNvbnN0IGFyY0xvY1RpdGxlID0gbmV3IG13LlRpdGxlKGFyY0xvYyk7XG5cblx0Y29uc3QgYXJjTG9jTmFtZXNwYWNlSWQgPSBhcmNMb2NUaXRsZS5nZXROYW1lc3BhY2VJZCgpO1xuXHRjb25zdCBhcmNMb2NQYWdlTmFtZSA9IGFyY0xvY1RpdGxlLmdldE1haW4oKTtcblx0Y29uc3Qgc291cmNlTmFtZXNwYWNlSWQgPSBzb3VyY2VUaXRsZS5nZXROYW1lc3BhY2VJZCgpO1xuXHRjb25zdCBzb3VyY2VQYWdlTmFtZSA9IHNvdXJjZVRpdGxlLmdldE1haW4oKTtcblxuXHRpZiAoYXJjTG9jTmFtZXNwYWNlSWQgPT09IDApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmIChhcmNMb2NOYW1lc3BhY2VJZCA9PT0gc291cmNlTmFtZXNwYWNlSWQgJiYgYXJjTG9jUGFnZU5hbWUgPT09IHNvdXJjZVBhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc0luQmxhY2tsaXN0ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgYmxhY2tMaXN0UmVnZXhBcnIgPSBbXG5cdFx0L15GaWxlOi4qJC8sXG5cdFx0L15NZWRpYVdpa2k6LiokLyxcblx0XHQvXk1vZHVsZTouKiQvLFxuXHRcdC9eQ2F0ZWdvcnk6LiokLyxcblx0XHQvXlRlbXBsYXRlOi4qJC8sXG5cdFx0L15TcGVjaWFsOi4qJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanMkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5jc3MkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qc29uJC8sXG5cdF07XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGJsYWNrTGlzdFJlZ2V4QXJyKSB7XG5cdFx0aWYgKGVsZW1lbnQudGVzdCh3Z1BhZ2VOYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNOb3RBbGxvd2VkID0gKCkgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUmVsZXZhbnRVc2VyTmFtZSwgd2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCh3Z05hbWVzcGFjZU51bWJlciA9PT0gMiB8fCB3Z05hbWVzcGFjZU51bWJlciA9PT0gMykgJiYgISh3Z1JlbGV2YW50VXNlck5hbWUgPT09IHdnVXNlck5hbWUpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc05vdFN1cHBvcnRlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnSXNNYWluUGFnZSwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnQ3VyUmV2aXNpb25JZCwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwIHx8IHdnQ3VyUmV2aXNpb25JZCAtIHdnUmV2aXNpb25JZCAhPT0gMCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwIHx8IHdnSXNNYWluUGFnZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgZ2V0U2V0dGluZ3MgPSAoKSA9PiB7XG5cdGNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVhc3lfYXJjaGl2ZV9kYXRhX3BvaW50X2NvbGxlY3Rpb24nKSBhcyBIVE1MRWxlbWVudDtcblx0aWYgKCFzZXR0aW5ncykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3Qge2RhdGFzZXR9ID0gc2V0dGluZ3M7XG5cdGNvbnN0IHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0gPSBkYXRhc2V0O1xuXHRyZXR1cm4ge1xuXHRcdGFyY0xldmVsOiBhcmNMZXZlbCA/PyAnMicsXG5cdFx0YXJjTG9jOiBhcmNMb2MgPz8gJycsXG5cdFx0c2VjQXJjOiBzZWNBcmMgPz8gJzEnLFxuXHRcdHNlY0RlbDogc2VjRGVsID8/ICcxJyxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2V0U2V0dGluZ3MsIGlmQXJjTG9jTm90QWxsb3dlZCwgaXNJbkJsYWNrbGlzdCwgaXNOb3RBbGxvd2VkLCBpc05vdFN1cHBvcnRlZH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtBcmNMb2NOb3RBbGxvd2VkLCBFbmFibGVkLCBJbkJsYWNrTGlzdCwgTm9BcmNMb2MsIE5vdEFsbG93ZWR9IGZyb20gJy4vY29tcG9uZW50cy9mb290ZXJOb3RpY2VzJztcbmltcG9ydCB7Z2V0U2V0dGluZ3MsIGlmQXJjTG9jTm90QWxsb3dlZCwgaXNJbkJsYWNrbGlzdCwgaXNOb3RBbGxvd2VkLCBpc05vdFN1cHBvcnRlZH0gZnJvbSAnLi91dGlsL2dldFNldHRpbmdzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2FkZExpbmtzfSBmcm9tICcuL2FkZExpbmtzJztcblxuY29uc3QgbG9hZEVhc3lBcmNpdmUgPSAoKSA9PiB7XG5cdGNvbnN0IG5vdFN1cHBvcnRlZCA9IGlzTm90U3VwcG9ydGVkKCk7XG5cdGlmIChub3RTdXBwb3J0ZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBtb3VudFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoIW1vdW50UG9pbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpbkJsYWNrbGlzdCA9IGlzSW5CbGFja2xpc3QoKTtcblx0aWYgKGluQmxhY2tsaXN0KSB7XG5cdFx0bW91bnRQb2ludC5wcmVwZW5kKDxJbkJsYWNrTGlzdCAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgbm90QWxsb3dlZCA9IGlzTm90QWxsb3dlZCgpO1xuXHRpZiAobm90QWxsb3dlZCkge1xuXHRcdG1vdW50UG9pbnQucHJlcGVuZCg8Tm90QWxsb3dlZCAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpO1xuXHRpZiAoIXNldHRpbmdzKSB7XG5cdFx0bW91bnRQb2ludC5wcmVwZW5kKDxOb0FyY0xvYyAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge2FyY0xvY30gPSBzZXR0aW5ncztcblx0aWYgKCFhcmNMb2MpIHtcblx0XHRtb3VudFBvaW50LnByZXBlbmQoPE5vQXJjTG9jIC8+KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBhcmNMb2NOb3RBbGxvd2VkID0gaWZBcmNMb2NOb3RBbGxvd2VkKGFyY0xvYyk7XG5cdGlmIChhcmNMb2NOb3RBbGxvd2VkKSB7XG5cdFx0bW91bnRQb2ludC5wcmVwZW5kKDxBcmNMb2NOb3RBbGxvd2VkIGFyY0xvYz17YXJjTG9jfSAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bW91bnRQb2ludC5wcmVwZW5kKDxFbmFibGVkIGFyY0xvYz17YXJjTG9jfSAvPik7XG5cblx0dm9pZCBhZGRMaW5rcyhzZXR0aW5ncyk7XG59O1xuXG5leHBvcnQge2xvYWRFYXN5QXJjaXZlfTtcbiIsICJpbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7YXJjaGl2ZU9uQ2xpY2ssIHJlbW92ZU9uQ2xpY2t9IGZyb20gJy4uL3V0aWwvb25DbGljayc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtzZWN0aW9uSWRTcGFufSBmcm9tICcuL0Vhc3lBcmNoaXZlLm1vZHVsZS5sZXNzJztcblxuaW50ZXJmYWNlIE9uQ2xpY2tQcm9wcyB7XG5cdHRleHRDb250ZW50OiBzdHJpbmc7XG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXHRvbkNsaWNrPzogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFNlY3Rpb25JRFByb3BzIHtcblx0Y2hpbGRyZW4/OiBSZWFjdEVsZW1lbnQ7XG59XG5cbmNvbnN0IE9uQ2xpY2sgPSAoe3RleHRDb250ZW50LCBjbGFzc05hbWUsIG9uQ2xpY2t9OiBPbkNsaWNrUHJvcHMpID0+IChcblx0PGFcblx0XHRjbGFzc05hbWU9e1snZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fbGluaycsIGBnYWRnZXQtZWFzeV9hcmNoaXZlX19saW5rLSR7Y2xhc3NOYW1lfWBdfVxuXHRcdG9uQ2xpY2s9e29uQ2xpY2sgfHwgKCgpID0+IHt9KX1cblx0XHR0ZXh0Q29udGVudD17dGV4dENvbnRlbnR9XG5cdC8+XG4pO1xuXG5jb25zdCBTZWN0aW9uSUQgPSAoe2NoaWxkcmVuID0gPD48Lz59OiBTZWN0aW9uSURQcm9wcykgPT4gPHNwYW4gY2xhc3NOYW1lPXtzZWN0aW9uSWRTcGFufT57Y2hpbGRyZW59PC9zcGFuPjtcblxuY29uc3QgUGlwZSA9ICgpID0+IDxzcGFuIGNsYXNzTmFtZT1cIm13LWVkaXRzZWN0aW9uLWRpdmlkZXJcIiB0ZXh0Q29udGVudD17J3wnfSAvPjtcblxuaW50ZXJmYWNlIEFyY2hpdmVTZWN0aW9uTGlua1Byb3BzIHtcblx0c2VjdGlvbklkU3BhbnM6IEVsZW1lbnRbXTtcblx0bWVzc2FnZUNoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdHJlZnJlc2hDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRpbmRleE5vOiBzdHJpbmc7XG5cdGFuY2hvcjogc3RyaW5nO1xuXHR0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlO1xuXHRhcmNoaXZlVG86IHN0cmluZztcbn1cblxuY29uc3QgQXJjaGl2ZVNlY3Rpb25MaW5rID0gKHtcblx0c2VjdGlvbklkU3BhbnMsXG5cdG1lc3NhZ2VDaGFubmVsLFxuXHRyZWZyZXNoQ2hhbm5lbCxcblx0aW5kZXhObyxcblx0YW5jaG9yLFxuXHRhcmNoaXZlVG8sXG5cdHRvYXN0aWZ5SW5zdGFuY2UsXG59OiBBcmNoaXZlU2VjdGlvbkxpbmtQcm9wcykgPT4gKFxuXHQ8T25DbGlja1xuXHRcdGNsYXNzTmFtZT17J2FyY2hpdmUnfVxuXHRcdG9uQ2xpY2s9eyhldmVudDogRXZlbnQpID0+IHtcblx0XHRcdHZvaWQgYXJjaGl2ZU9uQ2xpY2soZXZlbnQsIHtcblx0XHRcdFx0c2VjdGlvbklkU3BhbnMsXG5cdFx0XHRcdG1lc3NhZ2VDaGFubmVsLFxuXHRcdFx0XHRyZWZyZXNoQ2hhbm5lbCxcblx0XHRcdFx0aW5kZXhObyxcblx0XHRcdFx0YW5jaG9yLFxuXHRcdFx0XHRhcmNoaXZlVG8sXG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdFx0XHR9KTtcblx0XHR9fVxuXHRcdHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdBcmNoaXZlJyl9XG5cdC8+XG4pO1xuXG5pbnRlcmZhY2UgUmVtb3ZlU2VjdGlvbkxpbmtQcm9wcyB7XG5cdHNlY3Rpb25JZFNwYW5zOiBFbGVtZW50W107XG5cdG1lc3NhZ2VDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRyZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0aW5kZXhObzogc3RyaW5nO1xuXHRhbmNob3I6IHN0cmluZztcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcbn1cblxuY29uc3QgUmVtb3ZlU2VjdGlvbkxpbmsgPSAoe1xuXHRzZWN0aW9uSWRTcGFucyxcblx0bWVzc2FnZUNoYW5uZWwsXG5cdHJlZnJlc2hDaGFubmVsLFxuXHRpbmRleE5vLFxuXHRhbmNob3IsXG5cdHRvYXN0aWZ5SW5zdGFuY2UsXG59OiBSZW1vdmVTZWN0aW9uTGlua1Byb3BzKSA9PiAoXG5cdDxPbkNsaWNrXG5cdFx0Y2xhc3NOYW1lPXsnZGVsZXRlJ31cblx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdHZvaWQgcmVtb3ZlT25DbGljayhldmVudCwge1xuXHRcdFx0XHRzZWN0aW9uSWRTcGFucyxcblx0XHRcdFx0bWVzc2FnZUNoYW5uZWwsXG5cdFx0XHRcdHJlZnJlc2hDaGFubmVsLFxuXHRcdFx0XHRpbmRleE5vLFxuXHRcdFx0XHRhbmNob3IsXG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdFx0XHR9KTtcblx0XHR9fVxuXHRcdHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdEZWxldGUnKX1cblx0Lz5cbik7XG5cbmludGVyZmFjZSBBcmNoaXZlQW5kRGVsZXRlU2VjdGlvbkxpbmtQcm9wcyB7XG5cdHNlY3Rpb25JZFNwYW5zOiBFbGVtZW50W107XG5cdG1lc3NhZ2VDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRyZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0aW5kZXhObzogc3RyaW5nO1xuXHRhbmNob3I6IHN0cmluZztcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcblx0c2VjQXJjOiBzdHJpbmc7XG5cdHNlY0RlbDogc3RyaW5nO1xuXHRhcmNMb2M6IHN0cmluZztcbn1cblxuY29uc3QgQXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rID0gKHtcblx0c2VjdGlvbklkU3BhbnMsXG5cdG1lc3NhZ2VDaGFubmVsLFxuXHRyZWZyZXNoQ2hhbm5lbCxcblx0aW5kZXhObyxcblx0YW5jaG9yLFxuXHR0b2FzdGlmeUluc3RhbmNlLFxuXHRzZWNBcmMsXG5cdHNlY0RlbCxcblx0YXJjTG9jLFxufTogQXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rUHJvcHMpID0+IChcblx0PFNlY3Rpb25JRD5cblx0XHQ8PlxuXHRcdFx0e3NlY0FyYyA9PT0gJzEnID8gKFxuXHRcdFx0XHQ8QXJjaGl2ZVNlY3Rpb25MaW5rXG5cdFx0XHRcdFx0c2VjdGlvbklkU3BhbnM9e3NlY3Rpb25JZFNwYW5zfVxuXHRcdFx0XHRcdG1lc3NhZ2VDaGFubmVsPXttZXNzYWdlQ2hhbm5lbH1cblx0XHRcdFx0XHRyZWZyZXNoQ2hhbm5lbD17cmVmcmVzaENoYW5uZWx9XG5cdFx0XHRcdFx0aW5kZXhObz17aW5kZXhOb31cblx0XHRcdFx0XHRhbmNob3I9e2FuY2hvcn1cblx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlPXt0b2FzdGlmeUluc3RhbmNlfVxuXHRcdFx0XHRcdGFyY2hpdmVUbz17YXJjTG9jfVxuXHRcdFx0XHQvPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PD48Lz5cblx0XHRcdCl9XG5cdFx0XHR7c2VjQXJjID09PSAnMScgJiYgc2VjRGVsID09PSAnMScgPyA8UGlwZSAvPiA6IDw+PC8+fVxuXHRcdFx0e3NlY0RlbCA9PT0gJzEnID8gKFxuXHRcdFx0XHQ8UmVtb3ZlU2VjdGlvbkxpbmtcblx0XHRcdFx0XHRzZWN0aW9uSWRTcGFucz17c2VjdGlvbklkU3BhbnN9XG5cdFx0XHRcdFx0bWVzc2FnZUNoYW5uZWw9e21lc3NhZ2VDaGFubmVsfVxuXHRcdFx0XHRcdHJlZnJlc2hDaGFubmVsPXtyZWZyZXNoQ2hhbm5lbH1cblx0XHRcdFx0XHRpbmRleE5vPXtpbmRleE5vfVxuXHRcdFx0XHRcdGFuY2hvcj17YW5jaG9yfVxuXHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2U9e3RvYXN0aWZ5SW5zdGFuY2V9XG5cdFx0XHRcdC8+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8PjwvPlxuXHRcdFx0KX1cblx0XHQ8Lz5cblx0PC9TZWN0aW9uSUQ+XG4pO1xuXG5leHBvcnQge0FyY2hpdmVTZWN0aW9uTGluaywgUmVtb3ZlU2VjdGlvbkxpbmssIEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGlua307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBFYXN5QXJjaGl2ZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGdldFNlY3Rpb25zID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHBhZ2U6IHRpdGxlLFxuXHRcdHByb3A6ICdzZWN0aW9ucycsXG5cdH07XG5cblx0Y29uc3Qge3BhcnNlfSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0Y29uc3Qge3NlY3Rpb25zfSA9IHBhcnNlIGFzIHtcblx0XHRzZWN0aW9uczoge1xuXHRcdFx0bGV2ZWw6IHN0cmluZztcblx0XHRcdGluZGV4OiBzdHJpbmc7XG5cdFx0XHRhbmNob3I6IHN0cmluZztcblx0XHR9W107XG5cdH07XG5cblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBbXTtcblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRjb25zdCB7bGV2ZWwsIGluZGV4LCBhbmNob3J9ID0gc2VjdGlvbjtcblxuXHRcdGlmIChpbmRleC5zdGFydHNXaXRoKCdULScpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRzZWN0aW9uc1RvQXJjaGl2ZVtzZWN0aW9uc1RvQXJjaGl2ZS5sZW5ndGhdID0ge1xuXHRcdFx0bGV2ZWwsXG5cdFx0XHRpbmRleCxcblx0XHRcdGFuY2hvcixcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHNlY3Rpb25zVG9BcmNoaXZlO1xufTtcblxuY29uc3QgZ2V0U2VjdGlvbkNvbnRlbnQgPSBhc3luYyAoe3RpdGxlLCBzZWN0aW9ufToge3RpdGxlOiBzdHJpbmc7IHNlY3Rpb246IHN0cmluZ30pOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHRpdGxlczogdGl0bGUsXG5cdFx0cnZzZWN0aW9uOiBzZWN0aW9uLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0fTtcblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gKHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdPy5yZXZpc2lvbnM/LlswXS5zbG90cy5tYWluLmNvbnRlbnQgYXMgc3RyaW5nKSA/PyBudWxsO1xufTtcblxuZXhwb3J0IHtnZXRTZWN0aW9ucywgZ2V0U2VjdGlvbkNvbnRlbnR9O1xuIiwgImltcG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnQsIGdldFNlY3Rpb25zfSBmcm9tICcuL2dldFNlY3Rpb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGlzUGFnZUV4aXN0ID0gYXN5bmMgKGFyY2hpdmVUbzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbmZvUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2luZm8nLFxuXHRcdHRpdGxlczogYXJjaGl2ZVRvLFxuXHR9O1xuXG5cdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0aWYgKHF1ZXJ5LnBhZ2VzWzBdPy5taXNzaW5nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBpc1NlY3Rpb25FeGlzdCA9IGFzeW5jICh7aW5kZXgsIGFuY2hvcn06IHtpbmRleDogc3RyaW5nOyBhbmNob3I6IHN0cmluZ30pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9ucyA9IGF3YWl0IGdldFNlY3Rpb25zKHdnUGFnZU5hbWUpO1xuXG5cdGxldCBpc0V4aXN0ID0gZmFsc2U7XG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuXHRcdGlmIChpbmRleCA9PT0gc2VjdGlvbi5pbmRleCAmJiBhbmNob3IgPT09IHNlY3Rpb24uYW5jaG9yKSB7XG5cdFx0XHRpc0V4aXN0ID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGlzRXhpc3Q7XG59O1xuXG5jb25zdCByZW1vdmVTZWN0aW9uID0gYXN5bmMgKHtpbmRleCwgYW5jaG9yLCBzdW1tYXJ5fToge2luZGV4OiBzdHJpbmc7IGFuY2hvcjogc3RyaW5nOyBzdW1tYXJ5Pzogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlzRXhpc3QgPSBhd2FpdCBpc1NlY3Rpb25FeGlzdCh7aW5kZXgsIGFuY2hvcn0pO1xuXG5cdGlmIChpc0V4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHt0aXRsZTogd2dQYWdlTmFtZSwgc2VjdGlvbjogaW5kZXh9KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGF3YWl0IGFwaS5lZGl0KHdnUGFnZU5hbWUsICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VjdGlvbjogaW5kZXgsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdHN1bW1hcnk6IHN1bW1hcnkgPz8gZ2V0TWVzc2FnZSgnRGVsZXRlIHN1bW1hcnknKSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xufTtcblxuY29uc3QgYXJjaGl2ZVNlY3Rpb24gPSBhc3luYyAoe2luZGV4LCBhbmNob3IsIGFyY2hpdmVUb306IHtpbmRleDogc3RyaW5nOyBhbmNob3I6IHN0cmluZzsgYXJjaGl2ZVRvOiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaXNFeGlzdCA9IGF3YWl0IGlzU2VjdGlvbkV4aXN0KHtpbmRleCwgYW5jaG9yfSk7XG5cblx0aWYgKGlzRXhpc3QgIT09IHRydWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0U2VjdGlvbkNvbnRlbnQoe3RpdGxlOiB3Z1BhZ2VOYW1lLCBzZWN0aW9uOiBpbmRleH0pO1xuXG5cdGlmIChjb250ZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGFnZUV4aXN0ID0gYXdhaXQgaXNQYWdlRXhpc3QoYXJjaGl2ZVRvKTtcblx0aWYgKCFwYWdlRXhpc3QpIHtcblx0XHRhd2FpdCBhcGkuY3JlYXRlKFxuXHRcdFx0YXJjaGl2ZVRvLFxuXHRcdFx0e1xuXHRcdFx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdDcmVhdGUgc3VtbWFyeScpLFxuXHRcdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHQne3t0YWxrYXJjaGl2ZX19J1xuXHRcdCk7XG5cdH1cblxuXHRhd2FpdCBhcGkuZWRpdChhcmNoaXZlVG8sICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXBwZW5kdGV4dDogYFxcblxcbiR7Y29udGVudH1gLFxuXHRcdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnQXJjaGl2ZSBzdW1tYXJ5JyksXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcblxuXHRhd2FpdCByZW1vdmVTZWN0aW9uKHtpbmRleCwgYW5jaG9yLCBzdW1tYXJ5OiBnZXRNZXNzYWdlKCdBcmNoaXZlIHN1bW1hcnknKX0pO1xufTtcblxuZXhwb3J0IHtpc1NlY3Rpb25FeGlzdCwgYXJjaGl2ZVNlY3Rpb24sIHJlbW92ZVNlY3Rpb259O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdldEFyY2hpdmluZ01lc3NhZ2UgPSAoaW5kZXhObzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBnZXRNZXNzYWdlKCdBcmNoaXZpbmcnKSArIGdldE1lc3NhZ2UoJzonKSArIGdldE1lc3NhZ2UoJ1NlY3Rpb24gJDEnKS5yZXBsYWNlKCckMScsIGluZGV4Tm8pO1xufTtcblxuY29uc3QgZ2V0QXJjaGl2ZWRNZXNzYWdlID0gKGluZGV4Tm86IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gZ2V0TWVzc2FnZSgnQXJjaGl2ZWQnKSArIGdldE1lc3NhZ2UoJzonKSArIGdldE1lc3NhZ2UoJ1NlY3Rpb24gJDEnKS5yZXBsYWNlKCckMScsIGluZGV4Tm8pO1xufTtcblxuY29uc3QgZ2V0RGVsZXRpbmdNZXNzYWdlID0gKGluZGV4Tm86IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gZ2V0TWVzc2FnZSgnRGVsZXRpbmcnKSArIGdldE1lc3NhZ2UoJzonKSArIGdldE1lc3NhZ2UoJ1NlY3Rpb24gJDEnKS5yZXBsYWNlKCckMScsIGluZGV4Tm8pO1xufTtcblxuY29uc3QgZ2V0RGVsZXRlZE1lc3NhZ2UgPSAoaW5kZXhObzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBnZXRNZXNzYWdlKCdEZWxldGVkJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcbn07XG5cbmV4cG9ydCB7Z2V0QXJjaGl2aW5nTWVzc2FnZSwgZ2V0QXJjaGl2ZWRNZXNzYWdlLCBnZXREZWxldGluZ01lc3NhZ2UsIGdldERlbGV0ZWRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2FyY2hpdmVTZWN0aW9uLCByZW1vdmVTZWN0aW9ufSBmcm9tICcuL2VkaXRTZWN0aW9uJztcbmltcG9ydCB7Z2V0QXJjaGl2ZWRNZXNzYWdlLCBnZXRBcmNoaXZpbmdNZXNzYWdlLCBnZXREZWxldGVkTWVzc2FnZSwgZ2V0RGVsZXRpbmdNZXNzYWdlfSBmcm9tICcuL2dldE1lc3NhZ2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gJy4vcmVmcmVzaFBhZ2UnO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmludGVyZmFjZSBPbkNsaWNrUHJvcHMge1xuXHRzZWN0aW9uSWRTcGFuczogRWxlbWVudFtdO1xuXHRtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0cmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdGluZGV4Tm86IHN0cmluZztcblx0YW5jaG9yOiBzdHJpbmc7XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG59XG5cbnR5cGUgQXJjaGl2ZU9uQ2xpY2tQcm9wcyA9IE9uQ2xpY2tQcm9wcyAmIHthcmNoaXZlVG86IHN0cmluZ307XG50eXBlIFJlbW92ZU9uQ2xpY2tQcm9wcyA9IE9uQ2xpY2tQcm9wcztcblxuY29uc3QgYXJjaGl2ZU9uQ2xpY2sgPSBhc3luYyAoXG5cdGV2ZW50OiBFdmVudCxcblx0e3NlY3Rpb25JZFNwYW5zLCBtZXNzYWdlQ2hhbm5lbCwgcmVmcmVzaENoYW5uZWwsIGluZGV4Tm8sIGFuY2hvciwgdG9hc3RpZnlJbnN0YW5jZSwgYXJjaGl2ZVRvfTogQXJjaGl2ZU9uQ2xpY2tQcm9wc1xuKSA9PiB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IHBhcmVudEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8ucGFyZW50RWxlbWVudDtcblx0aWYgKCFwYXJlbnRFbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oPHNwYW4+e2dldE1lc3NhZ2UoJ0FyY2hpdmluZycpfTwvc3Bhbj4pO1xuXG5cdGZvciAoY29uc3Qgc3BhbiBvZiBzZWN0aW9uSWRTcGFucykge1xuXHRcdHNwYW4ucmVtb3ZlKCk7XG5cdH1cblxuXHRjb25zdCBtZXNzYWdlMSA9IGdldEFyY2hpdmluZ01lc3NhZ2UoaW5kZXhObyk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UxKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlIHx8PSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG1lc3NhZ2UxLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRhd2FpdCBhcmNoaXZlU2VjdGlvbih7aW5kZXg6IGluZGV4Tm8sIGFuY2hvciwgYXJjaGl2ZVRvfSk7XG5cblx0cGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oPHNwYW4+e2dldE1lc3NhZ2UoJ0FyY2hpdmVkJyl9PC9zcGFuPik7XG5cblx0Y29uc3QgbWVzc2FnZSA9IGdldEFyY2hpdmVkTWVzc2FnZShpbmRleE5vKTtcblx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG1lc3NhZ2UsXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdG1lc3NhZ2VDaGFubmVsLmNsb3NlKCk7XG5cblx0cmVmcmVzaENoYW5uZWwucG9zdE1lc3NhZ2UoJ1JlZnJlc2gnKTtcblx0cmVmcmVzaCh7dG9hc3RpZnlJbnN0YW5jZX0pO1xufTtcbmNvbnN0IHJlbW92ZU9uQ2xpY2sgPSBhc3luYyAoXG5cdGV2ZW50OiBFdmVudCxcblx0e3NlY3Rpb25JZFNwYW5zLCBtZXNzYWdlQ2hhbm5lbCwgcmVmcmVzaENoYW5uZWwsIGluZGV4Tm8sIGFuY2hvciwgdG9hc3RpZnlJbnN0YW5jZX06IFJlbW92ZU9uQ2xpY2tQcm9wc1xuKSA9PiB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IHBhcmVudEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8ucGFyZW50RWxlbWVudDtcblx0aWYgKCFwYXJlbnRFbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oPHNwYW4+e2dldE1lc3NhZ2UoJ0RlbGV0aW5nJyl9PC9zcGFuPik7XG5cblx0Zm9yIChjb25zdCBzcGFuIG9mIHNlY3Rpb25JZFNwYW5zKSB7XG5cdFx0c3Bhbi5yZW1vdmUoKTtcblx0fVxuXG5cdGxldCBtZXNzYWdlID0gZ2V0RGVsZXRpbmdNZXNzYWdlKGluZGV4Tm8pO1xuXHRtZXNzYWdlQ2hhbm5lbC5wb3N0TWVzc2FnZShtZXNzYWdlKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlIHx8PSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG1lc3NhZ2UsXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGF3YWl0IHJlbW92ZVNlY3Rpb24oe2luZGV4OiBpbmRleE5vLCBhbmNob3J9KTtcblxuXHRwYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZHJlbig8c3Bhbj57Z2V0TWVzc2FnZSgnRGVsZXRlZCcpfTwvc3Bhbj4pO1xuXG5cdG1lc3NhZ2UgPSBnZXREZWxldGVkTWVzc2FnZShpbmRleE5vKTtcblx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG1lc3NhZ2UsXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdG1lc3NhZ2VDaGFubmVsLmNsb3NlKCk7XG5cblx0cmVmcmVzaENoYW5uZWwucG9zdE1lc3NhZ2UoJ1JlZnJlc2gnKTtcblx0cmVmcmVzaCh7dG9hc3RpZnlJbnN0YW5jZX0pO1xufTtcblxuZXhwb3J0IHthcmNoaXZlT25DbGljaywgcmVtb3ZlT25DbGlja307XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCByZWZyZXNoID0gKHtcblx0dGFyZ2V0UGFnZSxcblx0dG9hc3RpZnlJbnN0YW5jZSxcbn06IHt0YXJnZXRQYWdlPzogc3RyaW5nOyB0b2FzdGlmeUluc3RhbmNlPzogVG9hc3RpZnlJbnN0YW5jZX0gPSB7fSk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlIHx8PSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1JlZnJlc2hpbmcnKSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdGlmICh0YXJnZXRQYWdlKSB7XG5cdFx0bG9jYXRpb24ucmVwbGFjZShtdy51dGlsLmdldFVybCh0YXJnZXRQYWdlKSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRcdGxvY2F0aW9uLnJlcGxhY2UobXcudXRpbC5nZXRVcmwod2dQYWdlTmFtZSkpO1xuXHR9XG59O1xuXG5leHBvcnQge3JlZnJlc2h9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5pbnRlcmZhY2UgRWRpdENvbmZsaWN0Tm90aWNlUHJvcHMge1xuXHRvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBFZGl0Q29uZmxpY3ROb3RpY2UgPSAoe29uQ2xpY2t9OiBFZGl0Q29uZmxpY3ROb3RpY2VQcm9wcykgPT4gKFxuXHQ8c3Bhbj5cblx0XHR7Z2V0TWVzc2FnZSgnRWRpdCBDb25maWxpY3QgTm90aWNlJyl9XG5cdFx0PGEgb25DbGljaz17b25DbGlja30+e2dldE1lc3NhZ2UoJ1JlZnJlc2gnKX08L2E+XG5cdDwvc3Bhbj5cbik7XG5cbmV4cG9ydCB7RWRpdENvbmZsaWN0Tm90aWNlfTtcbiIsICJpbXBvcnQge0FyY2hpdmVBbmREZWxldGVTZWN0aW9uTGlua30gZnJvbSAnLi9jb21wb25lbnRzL3NlY3Rpb25MaW5rJztcbmltcG9ydCB7RWRpdENvbmZsaWN0Tm90aWNlfSBmcm9tICcuL2NvbXBvbmVudHMvZWRpdENvbmZsaWN0Tm90aWNlJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldFNlY3Rpb25zfSBmcm9tICcuL3V0aWwvZ2V0U2VjdGlvbic7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gJy4vdXRpbC9yZWZyZXNoUGFnZSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYWRkTGlua3MgPSBhc3luYyAoe1xuXHRhcmNMZXZlbCxcblx0YXJjTG9jLFxuXHRzZWNBcmMsXG5cdHNlY0RlbCxcbn06IHtcblx0YXJjTGV2ZWw6IHN0cmluZztcblx0YXJjTG9jOiBzdHJpbmc7XG5cdHNlY0FyYzogc3RyaW5nO1xuXHRzZWNEZWw6IHN0cmluZztcbn0pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9uc1RvQXJjaGl2ZSA9IGF3YWl0IGdldFNlY3Rpb25zKHdnUGFnZU5hbWUpO1xuXG5cdGNvbnN0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaCR7YXJjTGV2ZWx9YCk7XG5cdGNvbnN0IGhlYWRsaW5lcyA9IFtdO1xuXHRjb25zdCBoZWFkaW5nSW5kaWNlcyA9IFtdO1xuXG5cdGZvciAoY29uc3QgaGVhZGluZyBvZiBoZWFkaW5ncykge1xuXHRcdGNvbnN0IGhlYWRsaW5lID0gaGVhZGluZy5xdWVyeVNlbGVjdG9yKCcubXctaGVhZGxpbmUnKTtcblx0XHRpZiAoaGVhZGxpbmUpIHtcblx0XHRcdGhlYWRsaW5lc1toZWFkbGluZXMubGVuZ3RoXSA9IGhlYWRsaW5lLmlkO1xuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHNlY3Rpb25JZFNwYW5zOiBFbGVtZW50W10gPSBbXTtcblx0bGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblxuXHRjb25zdCBtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKGAke3dnUGFnZU5hbWV9X21lc3NhZ2VgKTtcblx0Y29uc3QgcmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChgJHt3Z1BhZ2VOYW1lfV9yZWZyZXNoYCk7XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zVG9BcmNoaXZlKSB7XG5cdFx0aWYgKHNlY3Rpb24ubGV2ZWwgIT09IGFyY0xldmVsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoaGVhZGxpbmVzLmluY2x1ZGVzKHNlY3Rpb24uYW5jaG9yKSkge1xuXHRcdFx0aGVhZGluZ0luZGljZXNbaGVhZGluZ0luZGljZXMubGVuZ3RoXSA9IHtcblx0XHRcdFx0aW5kZXhObzogc2VjdGlvbi5pbmRleCxcblx0XHRcdFx0YW5jaG9yOiBzZWN0aW9uLmFuY2hvcixcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCB7aW5kZXhObywgYW5jaG9yfSBvZiBoZWFkaW5nSW5kaWNlcykge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1xdWVyeS1zZWxlY3RvclxuXHRcdGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYW5jaG9yKTtcblx0XHRpZiAoIWhlYWRsaW5lKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBwYXJlbnRIZWFkaW5nID0gaGVhZGxpbmUucGFyZW50RWxlbWVudDtcblx0XHRpZiAoIXBhcmVudEhlYWRpbmcpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVkaXRTZWN0aW9uID0gcGFyZW50SGVhZGluZy5xdWVyeVNlbGVjdG9yKCcubXctZWRpdHNlY3Rpb24nKTtcblx0XHRpZiAoIWVkaXRTZWN0aW9uKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBzZWN0aW9uSURTcGFuID0gKFxuXHRcdFx0PEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGlua1xuXHRcdFx0XHRzZWN0aW9uSWRTcGFucz17c2VjdGlvbklkU3BhbnN9XG5cdFx0XHRcdG1lc3NhZ2VDaGFubmVsPXttZXNzYWdlQ2hhbm5lbH1cblx0XHRcdFx0cmVmcmVzaENoYW5uZWw9e3JlZnJlc2hDaGFubmVsfVxuXHRcdFx0XHRpbmRleE5vPXtpbmRleE5vfVxuXHRcdFx0XHRhbmNob3I9e2FuY2hvcn1cblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZT17dG9hc3RpZnlJbnN0YW5jZX1cblx0XHRcdFx0YXJjTG9jPXthcmNMb2N9XG5cdFx0XHRcdHNlY0FyYz17c2VjQXJjfVxuXHRcdFx0XHRzZWNEZWw9e3NlY0RlbH1cblx0XHRcdC8+XG5cdFx0KTtcblxuXHRcdGVkaXRTZWN0aW9uLnByZXBlbmQoc2VjdGlvbklEU3Bhbik7XG5cdFx0c2VjdGlvbklkU3BhbnNbc2VjdGlvbklkU3BhbnMubGVuZ3RoXSA9IHNlY3Rpb25JRFNwYW47XG5cdH1cblxuXHRtZXNzYWdlQ2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG5cdFx0Zm9yIChjb25zdCBzcGFuIG9mIHNlY3Rpb25JZFNwYW5zKSB7XG5cdFx0XHRzcGFuLnJlbW92ZSgpO1xuXHRcdH1cblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZXZlbnQuZGF0YSBhcyBzdHJpbmcsXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0fSk7XG5cblx0cmVmcmVzaENoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICgpID0+IHtcblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0bm9kZTogKFxuXHRcdFx0XHRcdDxFZGl0Q29uZmxpY3ROb3RpY2Vcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdFx0XHRcdFx0cmVmcmVzaCgpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdpbmZvJ1xuXHRcdCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRMaW5rc307XG4iLCAiaW1wb3J0IHtsb2FkRWFzeUFyY2l2ZX0gZnJvbSAnLi9tb2R1bGVzL2xvYWRFYXN5QXJjaXZlJztcblxuKGZ1bmN0aW9uIGVhc3lBcmNoaXZlKCkge1xuXHRsb2FkRWFzeUFyY2l2ZSgpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxRQUFRO0FBQ2QsVUFBSSxXQUFXLENBQUM7QUFFaEIsZUFBU0Esa0JBQWlCLFNBQVM7QUFDL0IsWUFBSSxRQUFRO0FBQ1osa0JBQVUsT0FBTyxPQUFPO0FBRXhCLFlBQUksS0FBSyx1QkFBdUIsVUFBVTtBQUUxQyxpQkFBUyxFQUFFLElBQUksU0FBUyxFQUFFLEtBQUssQ0FBQztBQUNoQyxpQkFBUyxFQUFFLEVBQUUsS0FBSyxJQUFJO0FBRXRCLGFBQUssUUFBUTtBQUNiLGFBQUssTUFBTTtBQUNYLGFBQUssVUFBVTtBQUNmLGFBQUssTUFBTSxJQUFJLGVBQWU7QUFDOUIsYUFBSyxJQUFJLE1BQU0sTUFBTTtBQUNyQixhQUFLLElBQUksTUFBTSxNQUFNO0FBRXJCLGVBQU8saUJBQWlCLFdBQVcsU0FBUyxHQUFHO0FBQzNDLGNBQUksRUFBRSxnQkFBZ0IsT0FBTyxhQUFjO0FBQzNDLGNBQUksRUFBRSxZQUFZLFFBQVEsRUFBRSxhQUFhLEdBQUk7QUFDN0MsY0FBSSxFQUFFLElBQUksVUFBVSxHQUFHLEdBQUcsTUFBTSxNQUFNLEdBQUk7QUFDMUMsY0FBSSxPQUFPLEtBQUssTUFBTSxFQUFFLFFBQVE7QUFDaEMsZ0JBQU0sSUFBSSxNQUFN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QUFZLENBQUU7QUFDbEM7RUFDRDtBQUVBLFFBQU00TSxhQUFhakwsYUFBYTtBQUNoQyxNQUFJaUwsWUFBWTtBQUNmRixlQUFXVCxRQUFReEosb0NBQUFyRCxRQUFBQyxjQUFDWSxZQUFBLElBQVcsQ0FBRTtBQUNqQztFQUNEO0FBRUEsUUFBTW1DLFdBQVdELFlBQVk7QUFDN0IsTUFBSSxDQUFDQyxVQUFVO0FBQ2RzSyxlQUFXVCxRQUFReEosb0NBQUFyRCxRQUFBQyxjQUFDZSxVQUFBLElBQVMsQ0FBRTtBQUMvQjtFQUNEO0FBRUEsUUFBTTtJQUFDRDtFQUFNLElBQUlpQztBQUNqQixNQUFJLENBQUNqQyxRQUFRO0FBQ1p1TSxlQUFXVCxRQUFReEosb0NBQUFyRCxRQUFBQyxjQUFDZSxVQUFBLElBQVMsQ0FBRTtBQUMvQjtFQUNEO0FBRUEsUUFBTXlNLG1CQUFtQnBNLG1CQUFtQk4sTUFBTTtBQUNsRCxNQUFJME0sa0JBQWtCO0FBQ3JCSCxlQUFXVCxRQUFReEosb0NBQUFyRCxRQUFBQyxjQUFDYSxrQkFBQTtNQUFpQkM7SUFBQSxDQUFnQixDQUFFO0FBQ3ZEO0VBQ0Q7QUFFQXVNLGFBQVdULFFBQVF4SixvQ0FBQXJELFFBQUFDLGNBQUNnQixTQUFBO0lBQVFGO0VBQUEsQ0FBZ0IsQ0FBRTtBQUU5QyxPQUFLMkssU0FBUzFJLFFBQVE7QUFDdkI7O0NVaERDLFNBQVMwSyxjQUFjO0FBQ3ZCTixpQkFBZTtBQUNoQixHQUFHOyIsCiAgIm5hbWVzIjogWyJCcm9hZGNhc3RDaGFubmVsIiwgImVsZW1lbnRJZCIsICJtb3VudFBvaW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImZvb3Rlck5vdGljZSIsICJzZWN0aW9uSWRTcGFuIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBcmNoaXZlIiwgImxvY2FsaXplIiwgImVuIiwgIkFyY2hpdmluZyIsICJBcmNoaXZlZCIsICJEZWxldGUiLCAiRGVsZXRpbmciLCAiRGVsZXRlZCIsICJ6aCIsICJSZWZyZXNoIiwgIlJlZnJlc2hpbmciLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInNhbml0aXplIiwgInN0cmluZyIsICJyZXBsYWNlIiwgIkZvb3Rlck5vdGljZSIsICJjaGlsZHJlbiIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImlkIiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIkluQmxhY2tMaXN0IiwgIk5vdEFsbG93ZWQiLCAiQXJjTG9jTm90QWxsb3dlZCIsICJhcmNMb2MiLCAiTm9BcmNMb2MiLCAiRW5hYmxlZCIsICJ0aXRsZSIsICJocmVmIiwgImNvbmNhdCIsICJpZkFyY0xvY05vdEFsbG93ZWQiLCAid2dQYWdlTmFtZSIsICJzb3VyY2VUaXRsZSIsICJUaXRsZSIsICJhcmNMb2NUaXRsZSIsICJhcmNMb2NOYW1lc3BhY2VJZCIsICJnZXROYW1lc3BhY2VJZCIsICJhcmNMb2NQYWdlTmFtZSIsICJnZXRNYWluIiwgInNvdXJjZU5hbWVzcGFjZUlkIiwgInNvdXJjZVBhZ2VOYW1lIiwgImlzSW5CbGFja2xpc3QiLCAiYmxhY2tMaXN0UmVnZXhBcnIiLCAiX2kiLCAiX2JsYWNrTGlzdFJlZ2V4QXJyIiwgImxlbmd0aCIsICJlbGVtZW50IiwgInRlc3QiLCAiaXNOb3RBbGxvd2VkIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJ3Z1VzZXJOYW1lIiwgImlzTm90U3VwcG9ydGVkIiwgIndnSXNNYWluUGFnZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dSZXZpc2lvbklkIiwgImdldFNldHRpbmdzIiwgInNldHRpbmdzIiwgImRhdGFzZXQiLCAiYXJjTGV2ZWwiLCAic2VjQXJjIiwgInNlY0RlbCIsICJpbXBvcnRfZXh0X2dhZGdldDExIiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRTZWN0aW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicGFnZSIsICJwcm9wIiwgInBhcnNlIiwgInNlY3Rpb25zIiwgInNlY3Rpb25zVG9BcmNoaXZlIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInNlY3Rpb24iLCAidmFsdWUiLCAibGV2ZWwiLCAiaW5kZXgiLCAiYW5jaG9yIiwgInN0YXJ0c1dpdGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0U2VjdGlvbkNvbnRlbnQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJHF1ZXJ5JHBhZ2VzIiwgIl9yZXNwb25zZSRxdWVyeSRwYWdlczIiLCAicnZwcm9wIiwgInRpdGxlcyIsICJydnNlY3Rpb24iLCAicnZzbG90cyIsICJyZXNwb25zZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgIl94MiIsICJpc1BhZ2VFeGlzdCIsICJfcmVmMyIsICJhcmNoaXZlVG8iLCAiX3F1ZXJ5JHBhZ2VzJCIsICJxdWVyeSIsICJtaXNzaW5nIiwgIl94MyIsICJpc1NlY3Rpb25FeGlzdCIsICJfcmVmNCIsICJpc0V4aXN0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIl94NCIsICJyZW1vdmVTZWN0aW9uIiwgIl9yZWY1IiwgInN1bW1hcnkiLCAiZWRpdCIsICJ0ZXh0IiwgIm1pbm9yIiwgIl94NSIsICJhcmNoaXZlU2VjdGlvbiIsICJfcmVmNiIsICJwYWdlRXhpc3QiLCAiY3JlYXRlIiwgImFwcGVuZHRleHQiLCAiX3g2IiwgImdldEFyY2hpdmluZ01lc3NhZ2UiLCAiaW5kZXhObyIsICJnZXRBcmNoaXZlZE1lc3NhZ2UiLCAiZ2V0RGVsZXRpbmdNZXNzYWdlIiwgImdldERlbGV0ZWRNZXNzYWdlIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVmcmVzaCIsICJ0YXJnZXRQYWdlIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInV0aWwiLCAiZ2V0VXJsIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJhcmNoaXZlT25DbGljayIsICJfcmVmNyIsICJldmVudCIsICJzZWN0aW9uSWRTcGFucyIsICJtZXNzYWdlQ2hhbm5lbCIsICJyZWZyZXNoQ2hhbm5lbCIsICJfZXZlbnQkdGFyZ2V0IiwgInByZXZlbnREZWZhdWx0IiwgInBhcmVudEVsZW1lbnQiLCAidGFyZ2V0IiwgInJlcGxhY2VDaGlsZHJlbiIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJzcGFuIiwgInJlbW92ZSIsICJtZXNzYWdlMSIsICJwb3N0TWVzc2FnZSIsICJjbG9zZSIsICJtZXNzYWdlIiwgIl94NyIsICJfeDgiLCAicmVtb3ZlT25DbGljayIsICJfcmVmOCIsICJfZXZlbnQkdGFyZ2V0MiIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfeDkiLCAiX3gxMCIsICJPbkNsaWNrIiwgInRleHRDb250ZW50IiwgIm9uQ2xpY2siLCAiU2VjdGlvbklEIiwgIlBpcGUiLCAiQXJjaGl2ZVNlY3Rpb25MaW5rIiwgIlJlbW92ZVNlY3Rpb25MaW5rIiwgIkFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGluayIsICJpbXBvcnRfZXh0X2dhZGdldDgiLCAiRWRpdENvbmZsaWN0Tm90aWNlIiwgImltcG9ydF9leHRfZ2FkZ2V0OSIsICJpbXBvcnRfZXh0X2dhZGdldDEwIiwgImFkZExpbmtzIiwgIl9yZWY5IiwgImhlYWRpbmdzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiaGVhZGxpbmVzIiwgImhlYWRpbmdJbmRpY2VzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImhlYWRpbmciLCAiaGVhZGxpbmUiLCAiQnJvYWRjYXN0Q2hhbm5lbCIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJfaTIiLCAiX2hlYWRpbmdJbmRpY2VzIiwgImdldEVsZW1lbnRCeUlkIiwgInBhcmVudEhlYWRpbmciLCAiZWRpdFNlY3Rpb24iLCAic2VjdGlvbklEU3BhbiIsICJwcmVwZW5kIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX2kzIiwgIl9zZWN0aW9uSWRTcGFucyIsICJkYXRhIiwgIm5vZGUiLCAiX3gxMSIsICJsb2FkRWFzeUFyY2l2ZSIsICJub3RTdXBwb3J0ZWQiLCAibW91bnRQb2ludCIsICJpbkJsYWNrbGlzdCIsICJub3RBbGxvd2VkIiwgImFyY0xvY05vdEFsbG93ZWQiLCAiZWFzeUFyY2hpdmUiXQp9Cg==
