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
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/EasyArchive/modules/components/EasyArchive.module.less
var footerNotice = "EasyArchive-module__footerNotice_ZRkG1q";
var sectionIdSpan = "EasyArchive-module__sectionIdSpan_ZRkG1q";
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
  id,
  children = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)
}) => {
  const {
    skin
  } = mw.config.get();
  return /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, skin === "citizen" ? /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
    id: id !== null && id !== void 0 ? id : elementId,
    className: [footerNotice, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
  }, children) : ["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info") ? /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
    id: id !== null && id !== void 0 ? id : elementId,
    className: [footerNotice, "noprint"]
  }, children) : /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id: id !== null && id !== void 0 ? id : elementId,
    className: [footerNotice, "noprint"]
  }, children));
};
var InBlackList = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, {
  id: "easy_archive_not_supported_notice"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, getMessage("Easy Archive not supported"), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), getMessage("Easy Archive not supported details")));
var NotAllowed = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, {
  id: "easy_archive_not_allowed_notice"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, getMessage("Easy Archive not allowed")));
var ArcLocNotAllowed = ({
  arcLoc
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, {
  id: "easy_archive_arc_loc_not_allowed_notice"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, getMessage("Archive Location not allowed").replace("$1", sanitize(arcLoc)), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), getMessage("Archive Location not allowed details")));
var NoArcLoc = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, {
  id: "easy_archive_no_arc_loc_notice"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, getMessage("No Archive Location")));
var Enabled = ({
  arcLoc
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, {
  id: "easy_archive_arc_loc_not_allowed_notice"
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, getMessage("Easy Archive enabled"), getMessage("("), getMessage("Archive location"), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  title: sanitize(arcLoc),
  href: "/wiki/".concat(sanitize(arcLoc))
}, arcLoc), getMessage(")"), getMessage(".")));
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
  children
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
//! src/EasyArchive/EasyArchive.tsx
var import_ext_gadget10 = __toESM(require("ext.gadget.React"));
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
var import_ext_gadget5 = __toESM(require("ext.gadget.React"), 1);
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
var import_ext_gadget7 = __toESM(require("ext.gadget.React"), 1);
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
}) => /* @__PURE__ */ import_ext_gadget7.default.createElement(SectionID, null, secArc === "1" ? /* @__PURE__ */ import_ext_gadget7.default.createElement(ArchiveSectionLink, {
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
}) : /* @__PURE__ */ import_ext_gadget7.default.createElement(import_ext_gadget7.default.Fragment, null));
//! src/EasyArchive/modules/addLinks.tsx
var import_ext_gadget8 = __toESM(require("ext.gadget.React"), 1);
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
//! src/EasyArchive/modules/appendFooterNotice.ts
var appendFooterNotice = (element) => {
  const mountPoint = document.querySelector(mountPointSelector);
  if (mountPoint) {
    mountPoint.prepend(element);
  }
};
//! src/EasyArchive/EasyArchive.tsx
(function easyArchive() {
  const notSupported = isNotSupported();
  if (notSupported) {
    return;
  }
  const inBlacklist = isInBlacklist();
  if (inBlacklist) {
    appendFooterNotice(/* @__PURE__ */ import_ext_gadget10.default.createElement(InBlackList, null));
    return;
  }
  const notAllowed = isNotAllowed();
  if (notAllowed) {
    appendFooterNotice(/* @__PURE__ */ import_ext_gadget10.default.createElement(NotAllowed, null));
    return;
  }
  const settings = getSettings();
  if (!settings) {
    appendFooterNotice(/* @__PURE__ */ import_ext_gadget10.default.createElement(NoArcLoc, null));
    return;
  }
  const {
    arcLoc
  } = settings;
  if (!arcLoc) {
    appendFooterNotice(/* @__PURE__ */ import_ext_gadget10.default.createElement(NoArcLoc, null));
    return;
  }
  const arcLocNotAllowed = ifArcLocNotAllowed(arcLoc);
  if (arcLocNotAllowed) {
    appendFooterNotice(/* @__PURE__ */ import_ext_gadget10.default.createElement(ArcLocNotAllowed, {
      arcLoc
    }));
    return;
  }
  appendFooterNotice(/* @__PURE__ */ import_ext_gadget10.default.createElement(Enabled, {
    arcLoc
  }));
  void addLinks(settings);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL3JlYWN0LnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL0Vhc3lBcmNoaXZlLm1vZHVsZS5sZXNzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9zYW5pdGl6ZS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2dldFNldHRpbmdzLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9FYXN5QXJjaGl2ZS50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9nZXRTZWN0aW9uLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvZWRpdFNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9nZXRNZXNzYWdlLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvb25DbGljay50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9yZWZyZXNoUGFnZS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL3NlY3Rpb25MaW5rLnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9hZGRMaW5rcy50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvYXBwZW5kRm9vdGVyTm90aWNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgdmFyIGNoYW5uZWxzID0gW107XG5cbiAgICBmdW5jdGlvbiBCcm9hZGNhc3RDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgY2hhbm5lbCA9IFN0cmluZyhjaGFubmVsKTtcblxuICAgICAgICB2YXIgaWQgPSAnJEJyb2FkY2FzdENoYW5uZWwkJyArIGNoYW5uZWwgKyAnJCc7XG5cbiAgICAgICAgY2hhbm5lbHNbaWRdID0gY2hhbm5lbHNbaWRdIHx8IFtdO1xuICAgICAgICBjaGFubmVsc1tpZF0ucHVzaCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9uYW1lID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX21jID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQxLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQyLnN0YXJ0KCk7XG5cbiAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5zdG9yYWdlQXJlYSAhPT0gZ2xvYmFsLmxvY2FsU3RvcmFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUubmV3VmFsdWUgPT0gbnVsbCB8fCBlLm5ld1ZhbHVlID09PSAnJykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUua2V5LnN1YnN0cmluZygwLCBpZC5sZW5ndGgpICE9PSBpZCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGUubmV3VmFsdWUpO1xuICAgICAgICAgICAgJHRoaXMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBCcm9hZGNhc3RDaGFubmVsLnByb3RvdHlwZSA9IHtcbiAgICAgICAgLy8gQnJvYWRjYXN0Q2hhbm5lbCBBUElcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdE1lc3NhZ2U6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBlLm5hbWUgPSAnSW52YWxpZFN0YXRlRXJyb3InO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIG90aGVyIGNvbnRleHRzIHZpYSBzdG9yYWdlIGV2ZW50cy4uLlxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2lkICsgU3RyaW5nKERhdGUubm93KCkpICsgJyQnICsgU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBjdXJyZW50IGNvbnRleHQgdmlhIHBvcnRzXG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uZm9yRWFjaChmdW5jdGlvbihiYykge1xuICAgICAgICAgICAgICAgIGlmIChiYyA9PT0gJHRoaXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICBiYy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoSlNPTi5wYXJzZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDIuY2xvc2UoKTtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gY2hhbm5lbHNbdGhpcy5faWRdLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBFdmVudFRhcmdldCBBUElcbiAgICAgICAgZ2V0IG9ubWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvbm1lc3NhZ2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKC8qZXZlbnQqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmRpc3BhdGNoRXZlbnQuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsID0gZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgfHwgQnJvYWRjYXN0Q2hhbm5lbDtcbn0pKHNlbGYpO1xuIiwgIntcblx0XCJlbGVtZW50SWRcIjogXCJnYWRnZXQtZWFzeV9hcmNoaXZlXCIsXG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtmb290ZXJOb3RpY2UsIHNlY3Rpb25JZFNwYW59IGZyb20gJy4vRWFzeUFyY2hpdmUubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7c2FuaXRpemV9IGZyb20gJy4uL3V0aWwvc2FuaXRpemUnO1xuXG5pbnRlcmZhY2UgRm9vdGVyTm90aWNlUHJvcHMge1xuXHRpZD86IHN0cmluZztcblx0Y2hpbGRyZW4/OiBSZWFjdEVsZW1lbnQgfCBSZWFjdEVsZW1lbnRbXTtcbn1cblxuY29uc3QgRm9vdGVyTm90aWNlID0gKHtpZCwgY2hpbGRyZW4gPSA8PjwvPn06IEZvb3Rlck5vdGljZVByb3BzKSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHR7c2tpbiA9PT0gJ2NpdGl6ZW4nID8gKFxuXHRcdFx0XHQ8c2VjdGlvblxuXHRcdFx0XHRcdGlkPXtpZCA/PyBPUFRJT05TLmVsZW1lbnRJZH1cblx0XHRcdFx0XHRjbGFzc05hbWU9e1tmb290ZXJOb3RpY2UsICdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nLCAnbm9wcmludCddfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQpIDogWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSA/IChcblx0XHRcdFx0PGxpIGlkPXtpZCA/PyBPUFRJT05TLmVsZW1lbnRJZH0gY2xhc3NOYW1lPXtbZm9vdGVyTm90aWNlLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8ZGl2IGlkPXtpZCA/PyBPUFRJT05TLmVsZW1lbnRJZH0gY2xhc3NOYW1lPXtbZm9vdGVyTm90aWNlLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmNvbnN0IEluQmxhY2tMaXN0ID0gKCkgPT4gKFxuXHQ8Rm9vdGVyTm90aWNlIGlkPVwiZWFzeV9hcmNoaXZlX25vdF9zdXBwb3J0ZWRfbm90aWNlXCI+XG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQnKX1cblx0XHRcdDxiciAvPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkIGRldGFpbHMnKX1cblx0XHQ8L3NwYW4+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuY29uc3QgTm90QWxsb3dlZCA9ICgpID0+IChcblx0PEZvb3Rlck5vdGljZSBpZD1cImVhc3lfYXJjaGl2ZV9ub3RfYWxsb3dlZF9ub3RpY2VcIj5cblx0XHQ8c3Bhbj57Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBhbGxvd2VkJyl9PC9zcGFuPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmludGVyZmFjZSBBcmNMb2NOb3RBbGxvd2VkUHJvcHMge1xuXHRhcmNMb2M6IHN0cmluZztcbn1cblxuY29uc3QgQXJjTG9jTm90QWxsb3dlZCA9ICh7YXJjTG9jfTogQXJjTG9jTm90QWxsb3dlZFByb3BzKSA9PiAoXG5cdDxGb290ZXJOb3RpY2UgaWQ9XCJlYXN5X2FyY2hpdmVfYXJjX2xvY19ub3RfYWxsb3dlZF9ub3RpY2VcIj5cblx0XHQ8c3Bhbj5cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkJykucmVwbGFjZSgnJDEnLCBzYW5pdGl6ZShhcmNMb2MpKX1cblx0XHRcdDxiciAvPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQgZGV0YWlscycpfVxuXHRcdDwvc3Bhbj5cblx0PC9Gb290ZXJOb3RpY2U+XG4pO1xuXG5jb25zdCBOb0FyY0xvYyA9ICgpID0+IChcblx0PEZvb3Rlck5vdGljZSBpZD1cImVhc3lfYXJjaGl2ZV9ub19hcmNfbG9jX25vdGljZVwiPlxuXHRcdDxzcGFuPntnZXRNZXNzYWdlKCdObyBBcmNoaXZlIExvY2F0aW9uJyl9PC9zcGFuPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmludGVyZmFjZSBFbmFibGVkUHJvcHMge1xuXHRhcmNMb2M6IHN0cmluZztcbn1cblxuY29uc3QgRW5hYmxlZCA9ICh7YXJjTG9jfTogRW5hYmxlZFByb3BzKSA9PiAoXG5cdDxGb290ZXJOb3RpY2UgaWQ9XCJlYXN5X2FyY2hpdmVfYXJjX2xvY19ub3RfYWxsb3dlZF9ub3RpY2VcIj5cblx0XHQ8c3Bhbj5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgZW5hYmxlZCcpfVxuXHRcdFx0e2dldE1lc3NhZ2UoJygnKX1cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIGxvY2F0aW9uJyl9XG5cdFx0XHQ8YSB0aXRsZT17c2FuaXRpemUoYXJjTG9jKX0gaHJlZj17YC93aWtpLyR7c2FuaXRpemUoYXJjTG9jKX1gfT5cblx0XHRcdFx0e2FyY0xvY31cblx0XHRcdDwvYT5cblx0XHRcdHtnZXRNZXNzYWdlKCcpJyl9XG5cdFx0XHR7Z2V0TWVzc2FnZSgnLicpfVxuXHRcdDwvc3Bhbj5cblx0PC9Gb290ZXJOb3RpY2U+XG4pO1xuXG5pbnRlcmZhY2UgT25DbGlja1Byb3BzIHtcblx0dGV4dENvbnRlbnQ6IHN0cmluZztcblx0Y2xhc3NOYW1lOiBzdHJpbmc7XG5cdG9uQ2xpY2s/OiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xufVxuXG5jb25zdCBPbkNsaWNrID0gKHt0ZXh0Q29udGVudCwgY2xhc3NOYW1lLCBvbkNsaWNrfTogT25DbGlja1Byb3BzKSA9PiAoXG5cdDxhXG5cdFx0Y2xhc3NOYW1lPXtbJ2dhZGdldC1lYXN5X2FyY2hpdmVfX2xpbmsnLCBgZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fbGluay0ke2NsYXNzTmFtZX1gXX1cblx0XHRvbkNsaWNrPXtvbkNsaWNrIHx8ICgoKSA9PiB7fSl9XG5cdFx0dGV4dENvbnRlbnQ9e3RleHRDb250ZW50fVxuXHQvPlxuKTtcblxuaW50ZXJmYWNlIFNlY3Rpb25JRFByb3BzIHtcblx0Y2hpbGRyZW4/OiBSZWFjdEVsZW1lbnQgfCBSZWFjdEVsZW1lbnRbXTtcbn1cblxuY29uc3QgU2VjdGlvbklEID0gKHtjaGlsZHJlbn06IFNlY3Rpb25JRFByb3BzKSA9PiA8c3BhbiBjbGFzc05hbWU9e3NlY3Rpb25JZFNwYW59PntjaGlsZHJlbn08L3NwYW4+O1xuXG5jb25zdCBQaXBlID0gKCkgPT4gPHNwYW4gY2xhc3NOYW1lPVwibXctZWRpdHNlY3Rpb24tZGl2aWRlclwiIHRleHRDb250ZW50PXsnfCd9IC8+O1xuXG5pbnRlcmZhY2UgRWRpdENvbmZsaWN0Tm90aWNlUHJvcHMge1xuXHRvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBFZGl0Q29uZmxpY3ROb3RpY2UgPSAoe29uQ2xpY2t9OiBFZGl0Q29uZmxpY3ROb3RpY2VQcm9wcykgPT4gKFxuXHQ8c3Bhbj5cblx0XHR7Z2V0TWVzc2FnZSgnRWRpdCBDb25maWxpY3QgTm90aWNlJyl9XG5cdFx0PGEgb25DbGljaz17b25DbGlja30+e2dldE1lc3NhZ2UoJ1JlZnJlc2gnKX08L2E+XG5cdDwvc3Bhbj5cbik7XG5cbmV4cG9ydCB7XG5cdEZvb3Rlck5vdGljZSxcblx0RW5hYmxlZCxcblx0SW5CbGFja0xpc3QsXG5cdE5vdEFsbG93ZWQsXG5cdEFyY0xvY05vdEFsbG93ZWQsXG5cdE5vQXJjTG9jLFxuXHRPbkNsaWNrLFxuXHRQaXBlLFxuXHRTZWN0aW9uSUQsXG5cdEVkaXRDb25mbGljdE5vdGljZSxcbn07XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2NvbXBvbmVudHMvRWFzeUFyY2hpdmUubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBmb290ZXJOb3RpY2UgPSBcIkVhc3lBcmNoaXZlLW1vZHVsZV9fZm9vdGVyTm90aWNlX1pSa0cxcVwiO1xuZXhwb3J0IGNvbnN0IHNlY3Rpb25JZFNwYW4gPSBcIkVhc3lBcmNoaXZlLW1vZHVsZV9fc2VjdGlvbklkU3Bhbl9aUmtHMXFcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImZvb3Rlck5vdGljZVwiOiBmb290ZXJOb3RpY2UsXG4gIFwic2VjdGlvbklkU3BhblwiOiBzZWN0aW9uSWRTcGFuXG59O1xuICAgICAgIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBcmNoaXZlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgbG9jYXRpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmUgbG9jYXRpb246ICcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPlnLDlnYDvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU6Iez77yaJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZSBhcmNoaXZlIGxvY2F0aW9uIG9mIHRoaXMgcGFnZSwgXCIkMVwiLCBidXQgRWFzeSBhcmNoaXZlIGNhbm5vdCBvcGVyYXRlIGxpa2UgdGhpcy4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3jgIJFYXN5IEFyY2hpdmUg5peg5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdoueVtuWJjeeahOWtmOaqlOWcsOWdgOaYr+OAjCQx44CN44CCRWFzeSBBcmNoaXZlIOeEoeazleaMieatpOWcsOWdgOWtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQgZGV0YWlscyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZXMgc2hvdWxkIG5vdCBiZSBub3JtYWxseSBkaXJlY3RlZCB0byBwYWdlcyB1bmRlciBhcnRpY2xlIG5hbWVzcGFjZS4gUGxlYXNlIGNoZWNrIGlmIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGFyY2hpdmUgbG9jYXRpb24uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOiIrOiAjOiogO+8jOS4jeW6lOWQkeadoeebruWQjeensOepuumXtOi/m+ihjOWtmOaho+OAguatpOWklu+8jOWtmOaho+WcsOWdgOS4jeW+l+WSjOatpOmhtemdouWQjeensOebuOWQjOOAguivt+ajgOafpeWtmOaho+WcsOWdgOOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDoiKzogIzoqIDvvIzkuI3mh4nlkJHmop3nm67lkI3nqLHnqbrplpPpgLLooYzlrZjmqpTjgILmraTlpJbvvIzlrZjmqpTlnLDlnYDkuI3lvpflkozmraTpoIHpnaLlkI3nqLHnm7jlkIzjgILoq4vmqqLmn6XlrZjmqpTlnLDlnYDjgIInLFxuXHRcdH0pLFxuXHRcdEFyY2hpdmluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZpbmcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOS4rScsXG5cdFx0fSksXG5cdFx0QXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0VkaXQgQ29uZmlsaWN0IE5vdGljZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgYWxyZWFkeSBhcmNoaXZlZCBhbmQvb3IgZGVsZXRlZCBhIHNlY3Rpb24gb24gdGhpcyBwYWdlLiBQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZSBhbmQgY29udGludWUgYXJjaGl2aW5nIG9yIGRlbGV0aW5nIG90aGVyIHNlY3Rpb25zIHRvIGF2b2lkIGVkaXRpbmcgY29uZmxpY3RzLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjlt7Lnu4/lnKjmnKzpobXpnaLmiafooYzkuoblrZjmoaPjgIHliKDpmaTnq6DoioLnmoTmk43kvZzjgILor7fliLfmlrDpobXpnaLvvIznhLblkI7nu6fnu63lrZjmoaPjgIHliKDpmaTmnKzpobXpnaLnmoTlhbbku5bnq6DoioLvvIzku6Xpgb/lhY3nvJbovpHlhrLnqoHjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo5bey57aT5Zyo5pys6aCB6Z2i5Z+36KGM5LqG5a2Y5qqU44CB5Yiq6Zmk56ug56+A55qE5pON5L2c44CC6KuL5Yi35paw6aCB6Z2i77yM54S25b6M57m857qM5a2Y5qqU44CB5Yiq6Zmk5pys6aCB6Z2i55qE5YW25LuW56ug56+A77yM5Lul6YG/5YWN57eo6Lyv6KGd56qB44CCJyxcblx0XHR9KSxcblx0XHREZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaQnLFxuXHRcdH0pLFxuXHRcdERlbGV0aW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RlbGV0aW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOS4rScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTkuK0nLFxuXHRcdH0pLFxuXHRcdERlbGV0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOauteiQvScsXG5cdFx0fSksXG5cdFx0J0NyZWF0ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdjcmVhdGUgYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflu7rnq4vlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bu656uL5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRGVsZXRlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOauteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgZW5hYmxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGlzIGVuYWJsZWQgb24gdGhpcyB0YWxrIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pys6K6o6K666aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgbm90IGFsbG93ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBjYW5ub3QgdXNlIEVhc3kgQXJjaGl2ZSB0byBhcmNoaXZlIHRocmVhZHMgb24gdGhpcyBwYWdlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjkuI3lj6/ku6XlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjkuI3lj6/ku6XlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkIGRldGFpbHMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZXNlIHBhZ2VzIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZTogQXJ0aWNsZSwgRmlsZSwgVGVtcGxhdGUsIE1vZHVsZSwgTWVkaWFXaWtpLCBDYXRlZ29yeSwgU3BlY2lhbCwgSmF2YVNjcmlwdCwgQ1NTLCBKU09OLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfov5nkupvpobXpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8muadoeebruOAgUZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+mAmeS6m+mggemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77ya5qKd55uu77yMRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdH0pLFxuXHRcdCdObyBBcmNoaXZlIExvY2F0aW9uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgY2FuIGJlIHVzZWQgb24gdGhpcyBwYWdlIGlmIG5lZWRlZC4gVG8gZW5hYmxlIGl0LCBhZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdGVtcGxhdGUgdG8gdGhpcyBwYWdlLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfoi6XpnIDopoHvvIzmraTpobXpnaLlj6/ku6XlkK/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOivt+WcqOmhtemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPkvY3nva59feOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfoi6XpnIDopoHvvIzmraTpoIHpnaLlj6/ku6XllZ/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOiri+WcqOmggemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59feOAgicsXG5cdFx0fSksXG5cdFx0J1NlY3Rpb24gJDEnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlY3Rpb24gJDEnLFxuXHRcdFx0emg6ICfnrKwgJDEg56ug6IqCJyxcblx0XHR9KSxcblx0XHQnKCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnICgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdCcpJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHQnLic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdFx0JzonOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzogJyxcblx0XHRcdHpoOiAn77yaJyxcblx0XHR9KSxcblx0XHRSZWZyZXNoOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlZnJlc2ggdGhlIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yi35paw5b2T5YmN6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeaWsOi8ieWFpeeVtuWJjemggScsXG5cdFx0fSksXG5cdFx0UmVmcmVzaGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WNs+WwhuWIt+aWsOW9k+WJjemhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfljbPlsIfph43mlrDovInlhaXnlbbliY3poIHigKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBzYW5pdGl6ZSA9IChzdHJpbmc6IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gc3RyaW5nXG5cdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59O1xuXG5leHBvcnQge3Nhbml0aXplfTtcbiIsICJjb25zdCBpZkFyY0xvY05vdEFsbG93ZWQgPSAoYXJjTG9jOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzb3VyY2VUaXRsZSA9IG5ldyBtdy5UaXRsZSh3Z1BhZ2VOYW1lKTtcblx0Y29uc3QgYXJjTG9jVGl0bGUgPSBuZXcgbXcuVGl0bGUoYXJjTG9jKTtcblxuXHRjb25zdCBhcmNMb2NOYW1lc3BhY2VJZCA9IGFyY0xvY1RpdGxlLmdldE5hbWVzcGFjZUlkKCk7XG5cdGNvbnN0IGFyY0xvY1BhZ2VOYW1lID0gYXJjTG9jVGl0bGUuZ2V0TWFpbigpO1xuXHRjb25zdCBzb3VyY2VOYW1lc3BhY2VJZCA9IHNvdXJjZVRpdGxlLmdldE5hbWVzcGFjZUlkKCk7XG5cdGNvbnN0IHNvdXJjZVBhZ2VOYW1lID0gc291cmNlVGl0bGUuZ2V0TWFpbigpO1xuXG5cdGlmIChhcmNMb2NOYW1lc3BhY2VJZCA9PT0gMCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSBzb3VyY2VOYW1lc3BhY2VJZCAmJiBhcmNMb2NQYWdlTmFtZSA9PT0gc291cmNlUGFnZU5hbWUpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzSW5CbGFja2xpc3QgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBibGFja0xpc3RSZWdleEFyciA9IFtcblx0XHQvXkZpbGU6LiokLyxcblx0XHQvXk1lZGlhV2lraTouKiQvLFxuXHRcdC9eTW9kdWxlOi4qJC8sXG5cdFx0L15DYXRlZ29yeTouKiQvLFxuXHRcdC9eVGVtcGxhdGU6LiokLyxcblx0XHQvXlNwZWNpYWw6LiokLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmNzcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzb24kLyxcblx0XTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmxhY2tMaXN0UmVnZXhBcnIpIHtcblx0XHRpZiAoZWxlbWVudC50ZXN0KHdnUGFnZU5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc05vdEFsbG93ZWQgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dSZWxldmFudFVzZXJOYW1lLCB3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoKHdnTmFtZXNwYWNlTnVtYmVyID09PSAyIHx8IHdnTmFtZXNwYWNlTnVtYmVyID09PSAzKSAmJiAhKHdnUmVsZXZhbnRVc2VyTmFtZSA9PT0gd2dVc2VyTmFtZSkpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzTm90U3VwcG9ydGVkID0gKCkgPT4ge1xuXHRjb25zdCB7d2dJc01haW5QYWdlLCB3Z05hbWVzcGFjZU51bWJlciwgd2dDdXJSZXZpc2lvbklkLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDAgfHwgd2dDdXJSZXZpc2lvbklkIC0gd2dSZXZpc2lvbklkICE9PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDAgfHwgd2dJc01haW5QYWdlKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBnZXRTZXR0aW5ncyA9ICgpID0+IHtcblx0Y29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWFzeV9hcmNoaXZlX2RhdGFfcG9pbnRfY29sbGVjdGlvbicpIGFzIEhUTUxFbGVtZW50O1xuXHRpZiAoIXNldHRpbmdzKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCB7ZGF0YXNldH0gPSBzZXR0aW5ncztcblx0Y29uc3Qge2FyY0xldmVsLCBhcmNMb2MsIHNlY0FyYywgc2VjRGVsfSA9IGRhdGFzZXQ7XG5cdHJldHVybiB7XG5cdFx0YXJjTGV2ZWw6IGFyY0xldmVsID8/ICcyJyxcblx0XHRhcmNMb2M6IGFyY0xvYyA/PyAnJyxcblx0XHRzZWNBcmM6IHNlY0FyYyA/PyAnMScsXG5cdFx0c2VjRGVsOiBzZWNEZWwgPz8gJzEnLFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZXRTZXR0aW5ncywgaWZBcmNMb2NOb3RBbGxvd2VkLCBpc0luQmxhY2tsaXN0LCBpc05vdEFsbG93ZWQsIGlzTm90U3VwcG9ydGVkfTtcbiIsICJpbXBvcnQge0FyY0xvY05vdEFsbG93ZWQsIEVuYWJsZWQsIEluQmxhY2tMaXN0LCBOb0FyY0xvYywgTm90QWxsb3dlZH0gZnJvbSAnLi9tb2R1bGVzL2NvbXBvbmVudHMvcmVhY3QnO1xuaW1wb3J0IHtnZXRTZXR0aW5ncywgaWZBcmNMb2NOb3RBbGxvd2VkLCBpc0luQmxhY2tsaXN0LCBpc05vdEFsbG93ZWQsIGlzTm90U3VwcG9ydGVkfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRTZXR0aW5ncyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2FkZExpbmtzfSBmcm9tICcuL21vZHVsZXMvYWRkTGlua3MnO1xuaW1wb3J0IHthcHBlbmRGb290ZXJOb3RpY2V9IGZyb20gJy4vbW9kdWxlcy9hcHBlbmRGb290ZXJOb3RpY2UnO1xuXG4oZnVuY3Rpb24gZWFzeUFyY2hpdmUoKSB7XG5cdGNvbnN0IG5vdFN1cHBvcnRlZCA9IGlzTm90U3VwcG9ydGVkKCk7XG5cdGlmIChub3RTdXBwb3J0ZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpbkJsYWNrbGlzdCA9IGlzSW5CbGFja2xpc3QoKTtcblx0aWYgKGluQmxhY2tsaXN0KSB7XG5cdFx0YXBwZW5kRm9vdGVyTm90aWNlKDxJbkJsYWNrTGlzdCAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgbm90QWxsb3dlZCA9IGlzTm90QWxsb3dlZCgpO1xuXHRpZiAobm90QWxsb3dlZCkge1xuXHRcdGFwcGVuZEZvb3Rlck5vdGljZSg8Tm90QWxsb3dlZCAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpO1xuXHRpZiAoIXNldHRpbmdzKSB7XG5cdFx0YXBwZW5kRm9vdGVyTm90aWNlKDxOb0FyY0xvYyAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge2FyY0xvY30gPSBzZXR0aW5ncztcblx0aWYgKCFhcmNMb2MpIHtcblx0XHRhcHBlbmRGb290ZXJOb3RpY2UoPE5vQXJjTG9jIC8+KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBhcmNMb2NOb3RBbGxvd2VkID0gaWZBcmNMb2NOb3RBbGxvd2VkKGFyY0xvYyk7XG5cdGlmIChhcmNMb2NOb3RBbGxvd2VkKSB7XG5cdFx0YXBwZW5kRm9vdGVyTm90aWNlKDxBcmNMb2NOb3RBbGxvd2VkIGFyY0xvYz17YXJjTG9jfSAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXBwZW5kRm9vdGVyTm90aWNlKDxFbmFibGVkIGFyY0xvYz17YXJjTG9jfSAvPik7XG5cblx0dm9pZCBhZGRMaW5rcyhzZXR0aW5ncyk7XG59KSgpO1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgRWFzeUFyY2hpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9ucyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwYWdlOiB0aXRsZSxcblx0XHRwcm9wOiAnc2VjdGlvbnMnLFxuXHR9O1xuXG5cdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdGNvbnN0IHtzZWN0aW9uc30gPSBwYXJzZSBhcyB7XG5cdFx0c2VjdGlvbnM6IHtcblx0XHRcdGxldmVsOiBzdHJpbmc7XG5cdFx0XHRpbmRleDogc3RyaW5nO1xuXHRcdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0fVtdO1xuXHR9O1xuXG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gW107XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0Y29uc3Qge2xldmVsLCBpbmRleCwgYW5jaG9yfSA9IHNlY3Rpb247XG5cblx0XHRpZiAoaW5kZXguc3RhcnRzV2l0aCgnVC0nKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0c2VjdGlvbnNUb0FyY2hpdmVbc2VjdGlvbnNUb0FyY2hpdmUubGVuZ3RoXSA9IHtcblx0XHRcdGxldmVsLFxuXHRcdFx0aW5kZXgsXG5cdFx0XHRhbmNob3IsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBzZWN0aW9uc1RvQXJjaGl2ZTtcbn07XG5cbmNvbnN0IGdldFNlY3Rpb25Db250ZW50ID0gYXN5bmMgKHt0aXRsZSwgc2VjdGlvbn06IHt0aXRsZTogc3RyaW5nOyBzZWN0aW9uOiBzdHJpbmd9KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdHJ2c2VjdGlvbjogc2VjdGlvbixcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdH07XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIChyZXNwb25zZVsncXVlcnknXS5wYWdlc1swXT8ucmV2aXNpb25zPy5bMF0uc2xvdHMubWFpbi5jb250ZW50IGFzIHN0cmluZykgPz8gbnVsbDtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbnMsIGdldFNlY3Rpb25Db250ZW50fTtcbiIsICJpbXBvcnQge2dldFNlY3Rpb25Db250ZW50LCBnZXRTZWN0aW9uc30gZnJvbSAnLi9nZXRTZWN0aW9uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBpc1BhZ2VFeGlzdCA9IGFzeW5jIChhcmNoaXZlVG86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbmZvJyxcblx0XHR0aXRsZXM6IGFyY2hpdmVUbyxcblx0fTtcblxuXHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdGlmIChxdWVyeS5wYWdlc1swXT8ubWlzc2luZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgaXNTZWN0aW9uRXhpc3QgPSBhc3luYyAoe2luZGV4LCBhbmNob3J9OiB7aW5kZXg6IHN0cmluZzsgYW5jaG9yOiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnMgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRsZXQgaXNFeGlzdCA9IGZhbHNlO1xuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRpZiAoaW5kZXggPT09IHNlY3Rpb24uaW5kZXggJiYgYW5jaG9yID09PSBzZWN0aW9uLmFuY2hvcikge1xuXHRcdFx0aXNFeGlzdCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBpc0V4aXN0O1xufTtcblxuY29uc3QgcmVtb3ZlU2VjdGlvbiA9IGFzeW5jICh7aW5kZXgsIGFuY2hvciwgc3VtbWFyeX06IHtpbmRleDogc3RyaW5nOyBhbmNob3I6IHN0cmluZzsgc3VtbWFyeT86IHN0cmluZ30pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpc0V4aXN0ID0gYXdhaXQgaXNTZWN0aW9uRXhpc3Qoe2luZGV4LCBhbmNob3J9KTtcblxuXHRpZiAoaXNFeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh7dGl0bGU6IHdnUGFnZU5hbWUsIHNlY3Rpb246IGluZGV4fSk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCBhcGkuZWRpdCh3Z1BhZ2VOYW1lLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlY3Rpb246IGluZGV4LFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRzdW1tYXJ5OiBzdW1tYXJ5ID8/IGdldE1lc3NhZ2UoJ0RlbGV0ZSBzdW1tYXJ5JyksXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcbn07XG5cbmNvbnN0IGFyY2hpdmVTZWN0aW9uID0gYXN5bmMgKHtpbmRleCwgYW5jaG9yLCBhcmNoaXZlVG99OiB7aW5kZXg6IHN0cmluZzsgYW5jaG9yOiBzdHJpbmc7IGFyY2hpdmVUbzogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlzRXhpc3QgPSBhd2FpdCBpc1NlY3Rpb25FeGlzdCh7aW5kZXgsIGFuY2hvcn0pO1xuXG5cdGlmIChpc0V4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHt0aXRsZTogd2dQYWdlTmFtZSwgc2VjdGlvbjogaW5kZXh9KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBhZ2VFeGlzdCA9IGF3YWl0IGlzUGFnZUV4aXN0KGFyY2hpdmVUbyk7XG5cdGlmICghcGFnZUV4aXN0KSB7XG5cdFx0YXdhaXQgYXBpLmNyZWF0ZShcblx0XHRcdGFyY2hpdmVUbyxcblx0XHRcdHtcblx0XHRcdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnQ3JlYXRlIHN1bW1hcnknKSxcblx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0J3t7dGFsa2FyY2hpdmV9fSdcblx0XHQpO1xuXHR9XG5cblx0YXdhaXQgYXBpLmVkaXQoYXJjaGl2ZVRvLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFwcGVuZHRleHQ6IGBcXG5cXG4ke2NvbnRlbnR9YCxcblx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG5cblx0YXdhaXQgcmVtb3ZlU2VjdGlvbih7aW5kZXgsIGFuY2hvciwgc3VtbWFyeTogZ2V0TWVzc2FnZSgnQXJjaGl2ZSBzdW1tYXJ5Jyl9KTtcbn07XG5cbmV4cG9ydCB7aXNTZWN0aW9uRXhpc3QsIGFyY2hpdmVTZWN0aW9uLCByZW1vdmVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZXRBcmNoaXZpbmdNZXNzYWdlID0gKGluZGV4Tm86IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gZ2V0TWVzc2FnZSgnQXJjaGl2aW5nJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcbn07XG5cbmNvbnN0IGdldEFyY2hpdmVkTWVzc2FnZSA9IChpbmRleE5vOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIGdldE1lc3NhZ2UoJ0FyY2hpdmVkJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcbn07XG5cbmNvbnN0IGdldERlbGV0aW5nTWVzc2FnZSA9IChpbmRleE5vOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIGdldE1lc3NhZ2UoJ0RlbGV0aW5nJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcbn07XG5cbmNvbnN0IGdldERlbGV0ZWRNZXNzYWdlID0gKGluZGV4Tm86IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gZ2V0TWVzc2FnZSgnRGVsZXRlZCcpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG59O1xuXG5leHBvcnQge2dldEFyY2hpdmluZ01lc3NhZ2UsIGdldEFyY2hpdmVkTWVzc2FnZSwgZ2V0RGVsZXRpbmdNZXNzYWdlLCBnZXREZWxldGVkTWVzc2FnZX07XG4iLCAiaW1wb3J0IHthcmNoaXZlU2VjdGlvbiwgcmVtb3ZlU2VjdGlvbn0gZnJvbSAnLi9lZGl0U2VjdGlvbic7XG5pbXBvcnQge2dldEFyY2hpdmVkTWVzc2FnZSwgZ2V0QXJjaGl2aW5nTWVzc2FnZSwgZ2V0RGVsZXRlZE1lc3NhZ2UsIGdldERlbGV0aW5nTWVzc2FnZX0gZnJvbSAnLi9nZXRNZXNzYWdlJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gJy4vcmVmcmVzaFBhZ2UnO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmludGVyZmFjZSBPbkNsaWNrUHJvcHMge1xuXHRzZWN0aW9uSWRTcGFuczogRWxlbWVudFtdO1xuXHRtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0cmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdGluZGV4Tm86IHN0cmluZztcblx0YW5jaG9yOiBzdHJpbmc7XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG59XG5cbnR5cGUgQXJjaGl2ZU9uQ2xpY2tQcm9wcyA9IE9uQ2xpY2tQcm9wcyAmIHthcmNoaXZlVG86IHN0cmluZ307XG50eXBlIFJlbW92ZU9uQ2xpY2tQcm9wcyA9IE9uQ2xpY2tQcm9wcztcblxuY29uc3QgYXJjaGl2ZU9uQ2xpY2sgPSBhc3luYyAoXG5cdGV2ZW50OiBFdmVudCxcblx0e3NlY3Rpb25JZFNwYW5zLCBtZXNzYWdlQ2hhbm5lbCwgcmVmcmVzaENoYW5uZWwsIGluZGV4Tm8sIGFuY2hvciwgdG9hc3RpZnlJbnN0YW5jZSwgYXJjaGl2ZVRvfTogQXJjaGl2ZU9uQ2xpY2tQcm9wc1xuKSA9PiB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IHBhcmVudEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8ucGFyZW50RWxlbWVudDtcblx0aWYgKCFwYXJlbnRFbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oPHNwYW4+e2dldE1lc3NhZ2UoJ0FyY2hpdmluZycpfTwvc3Bhbj4pO1xuXG5cdGZvciAoY29uc3Qgc3BhbiBvZiBzZWN0aW9uSWRTcGFucykge1xuXHRcdHNwYW4ucmVtb3ZlKCk7XG5cdH1cblxuXHRjb25zdCBtZXNzYWdlMSA9IGdldEFyY2hpdmluZ01lc3NhZ2UoaW5kZXhObyk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UxKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlIHx8PSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG1lc3NhZ2UxLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRhd2FpdCBhcmNoaXZlU2VjdGlvbih7aW5kZXg6IGluZGV4Tm8sIGFuY2hvciwgYXJjaGl2ZVRvfSk7XG5cblx0cGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oPHNwYW4+e2dldE1lc3NhZ2UoJ0FyY2hpdmVkJyl9PC9zcGFuPik7XG5cblx0Y29uc3QgbWVzc2FnZSA9IGdldEFyY2hpdmVkTWVzc2FnZShpbmRleE5vKTtcblx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG1lc3NhZ2UsXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdG1lc3NhZ2VDaGFubmVsLmNsb3NlKCk7XG5cblx0cmVmcmVzaENoYW5uZWwucG9zdE1lc3NhZ2UoJ1JlZnJlc2gnKTtcblx0cmVmcmVzaCh7dG9hc3RpZnlJbnN0YW5jZX0pO1xufTtcbmNvbnN0IHJlbW92ZU9uQ2xpY2sgPSBhc3luYyAoXG5cdGV2ZW50OiBFdmVudCxcblx0e3NlY3Rpb25JZFNwYW5zLCBtZXNzYWdlQ2hhbm5lbCwgcmVmcmVzaENoYW5uZWwsIGluZGV4Tm8sIGFuY2hvciwgdG9hc3RpZnlJbnN0YW5jZX06IFJlbW92ZU9uQ2xpY2tQcm9wc1xuKSA9PiB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IHBhcmVudEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8ucGFyZW50RWxlbWVudDtcblx0aWYgKCFwYXJlbnRFbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oPHNwYW4+e2dldE1lc3NhZ2UoJ0RlbGV0aW5nJyl9PC9zcGFuPik7XG5cblx0Zm9yIChjb25zdCBzcGFuIG9mIHNlY3Rpb25JZFNwYW5zKSB7XG5cdFx0c3Bhbi5yZW1vdmUoKTtcblx0fVxuXG5cdGxldCBtZXNzYWdlID0gZ2V0RGVsZXRpbmdNZXNzYWdlKGluZGV4Tm8pO1xuXHRtZXNzYWdlQ2hhbm5lbC5wb3N0TWVzc2FnZShtZXNzYWdlKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlIHx8PSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG1lc3NhZ2UsXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGF3YWl0IHJlbW92ZVNlY3Rpb24oe2luZGV4OiBpbmRleE5vLCBhbmNob3J9KTtcblxuXHRwYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZHJlbig8c3Bhbj57Z2V0TWVzc2FnZSgnRGVsZXRlZCcpfTwvc3Bhbj4pO1xuXG5cdG1lc3NhZ2UgPSBnZXREZWxldGVkTWVzc2FnZShpbmRleE5vKTtcblx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG1lc3NhZ2UsXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdG1lc3NhZ2VDaGFubmVsLmNsb3NlKCk7XG5cblx0cmVmcmVzaENoYW5uZWwucG9zdE1lc3NhZ2UoJ1JlZnJlc2gnKTtcblx0cmVmcmVzaCh7dG9hc3RpZnlJbnN0YW5jZX0pO1xufTtcblxuZXhwb3J0IHthcmNoaXZlT25DbGljaywgcmVtb3ZlT25DbGlja307XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCB7d2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCByZWZyZXNoID0gKHtcblx0dGFyZ2V0UGFnZSxcblx0dG9hc3RpZnlJbnN0YW5jZSxcbn06IHt0YXJnZXRQYWdlPzogc3RyaW5nOyB0b2FzdGlmeUluc3RhbmNlPzogVG9hc3RpZnlJbnN0YW5jZX0gPSB7fSk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlIHx8PSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1JlZnJlc2hpbmcnKSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bG9jYXRpb24ucmVwbGFjZShcblx0XHRtdy51dGlsLmdldFVybCh3Z1NjcmlwdCwge1xuXHRcdFx0dGl0bGU6IHRhcmdldFBhZ2UgPz8gd2dQYWdlTmFtZSxcblx0XHR9KVxuXHQpO1xufTtcblxuZXhwb3J0IHtyZWZyZXNofTtcbiIsICJpbXBvcnQge09uQ2xpY2ssIFBpcGUsIFNlY3Rpb25JRH0gZnJvbSAnLi9yZWFjdCc7XG5pbXBvcnQge2FyY2hpdmVPbkNsaWNrLCByZW1vdmVPbkNsaWNrfSBmcm9tICcuLi91dGlsL29uQ2xpY2snO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuaW50ZXJmYWNlIEFyY2hpdmVTZWN0aW9uTGlua1Byb3BzIHtcblx0c2VjdGlvbklkU3BhbnM6IEVsZW1lbnRbXTtcblx0bWVzc2FnZUNoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdHJlZnJlc2hDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRpbmRleE5vOiBzdHJpbmc7XG5cdGFuY2hvcjogc3RyaW5nO1xuXHR0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlO1xuXHRhcmNoaXZlVG86IHN0cmluZztcbn1cblxuY29uc3QgQXJjaGl2ZVNlY3Rpb25MaW5rID0gKHtcblx0c2VjdGlvbklkU3BhbnMsXG5cdG1lc3NhZ2VDaGFubmVsLFxuXHRyZWZyZXNoQ2hhbm5lbCxcblx0aW5kZXhObyxcblx0YW5jaG9yLFxuXHRhcmNoaXZlVG8sXG5cdHRvYXN0aWZ5SW5zdGFuY2UsXG59OiBBcmNoaXZlU2VjdGlvbkxpbmtQcm9wcykgPT4gKFxuXHQ8T25DbGlja1xuXHRcdGNsYXNzTmFtZT17J2FyY2hpdmUnfVxuXHRcdG9uQ2xpY2s9eyhldmVudDogRXZlbnQpID0+IHtcblx0XHRcdHZvaWQgYXJjaGl2ZU9uQ2xpY2soZXZlbnQsIHtcblx0XHRcdFx0c2VjdGlvbklkU3BhbnMsXG5cdFx0XHRcdG1lc3NhZ2VDaGFubmVsLFxuXHRcdFx0XHRyZWZyZXNoQ2hhbm5lbCxcblx0XHRcdFx0aW5kZXhObyxcblx0XHRcdFx0YW5jaG9yLFxuXHRcdFx0XHRhcmNoaXZlVG8sXG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdFx0XHR9KTtcblx0XHR9fVxuXHRcdHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdBcmNoaXZlJyl9XG5cdC8+XG4pO1xuXG5pbnRlcmZhY2UgUmVtb3ZlU2VjdGlvbkxpbmtQcm9wcyB7XG5cdHNlY3Rpb25JZFNwYW5zOiBFbGVtZW50W107XG5cdG1lc3NhZ2VDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRyZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0aW5kZXhObzogc3RyaW5nO1xuXHRhbmNob3I6IHN0cmluZztcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcbn1cblxuY29uc3QgUmVtb3ZlU2VjdGlvbkxpbmsgPSAoe1xuXHRzZWN0aW9uSWRTcGFucyxcblx0bWVzc2FnZUNoYW5uZWwsXG5cdHJlZnJlc2hDaGFubmVsLFxuXHRpbmRleE5vLFxuXHRhbmNob3IsXG5cdHRvYXN0aWZ5SW5zdGFuY2UsXG59OiBSZW1vdmVTZWN0aW9uTGlua1Byb3BzKSA9PiAoXG5cdDxPbkNsaWNrXG5cdFx0Y2xhc3NOYW1lPXsnZGVsZXRlJ31cblx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdHZvaWQgcmVtb3ZlT25DbGljayhldmVudCwge1xuXHRcdFx0XHRzZWN0aW9uSWRTcGFucyxcblx0XHRcdFx0bWVzc2FnZUNoYW5uZWwsXG5cdFx0XHRcdHJlZnJlc2hDaGFubmVsLFxuXHRcdFx0XHRpbmRleE5vLFxuXHRcdFx0XHRhbmNob3IsXG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdFx0XHR9KTtcblx0XHR9fVxuXHRcdHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdEZWxldGUnKX1cblx0Lz5cbik7XG5cbmludGVyZmFjZSBBcmNoaXZlQW5kRGVsZXRlU2VjdGlvbkxpbmtQcm9wcyB7XG5cdHNlY3Rpb25JZFNwYW5zOiBFbGVtZW50W107XG5cdG1lc3NhZ2VDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRyZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0aW5kZXhObzogc3RyaW5nO1xuXHRhbmNob3I6IHN0cmluZztcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcblx0c2VjQXJjOiBzdHJpbmc7XG5cdHNlY0RlbDogc3RyaW5nO1xuXHRhcmNMb2M6IHN0cmluZztcbn1cblxuY29uc3QgQXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rID0gKHtcblx0c2VjdGlvbklkU3BhbnMsXG5cdG1lc3NhZ2VDaGFubmVsLFxuXHRyZWZyZXNoQ2hhbm5lbCxcblx0aW5kZXhObyxcblx0YW5jaG9yLFxuXHR0b2FzdGlmeUluc3RhbmNlLFxuXHRzZWNBcmMsXG5cdHNlY0RlbCxcblx0YXJjTG9jLFxufTogQXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rUHJvcHMpID0+IChcblx0PFNlY3Rpb25JRD5cblx0XHR7c2VjQXJjID09PSAnMScgPyAoXG5cdFx0XHQ8QXJjaGl2ZVNlY3Rpb25MaW5rXG5cdFx0XHRcdHNlY3Rpb25JZFNwYW5zPXtzZWN0aW9uSWRTcGFuc31cblx0XHRcdFx0bWVzc2FnZUNoYW5uZWw9e21lc3NhZ2VDaGFubmVsfVxuXHRcdFx0XHRyZWZyZXNoQ2hhbm5lbD17cmVmcmVzaENoYW5uZWx9XG5cdFx0XHRcdGluZGV4Tm89e2luZGV4Tm99XG5cdFx0XHRcdGFuY2hvcj17YW5jaG9yfVxuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlPXt0b2FzdGlmeUluc3RhbmNlfVxuXHRcdFx0XHRhcmNoaXZlVG89e2FyY0xvY31cblx0XHRcdC8+XG5cdFx0KSA6IChcblx0XHRcdDw+PC8+XG5cdFx0KX1cblx0XHR7c2VjQXJjID09PSAnMScgJiYgc2VjRGVsID09PSAnMScgPyA8UGlwZSAvPiA6IDw+PC8+fVxuXHRcdHtzZWNEZWwgPT09ICcxJyA/IChcblx0XHRcdDxSZW1vdmVTZWN0aW9uTGlua1xuXHRcdFx0XHRzZWN0aW9uSWRTcGFucz17c2VjdGlvbklkU3BhbnN9XG5cdFx0XHRcdG1lc3NhZ2VDaGFubmVsPXttZXNzYWdlQ2hhbm5lbH1cblx0XHRcdFx0cmVmcmVzaENoYW5uZWw9e3JlZnJlc2hDaGFubmVsfVxuXHRcdFx0XHRpbmRleE5vPXtpbmRleE5vfVxuXHRcdFx0XHRhbmNob3I9e2FuY2hvcn1cblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZT17dG9hc3RpZnlJbnN0YW5jZX1cblx0XHRcdC8+XG5cdFx0KSA6IChcblx0XHRcdDw+PC8+XG5cdFx0KX1cblx0PC9TZWN0aW9uSUQ+XG4pO1xuXG5leHBvcnQge0FyY2hpdmVTZWN0aW9uTGluaywgUmVtb3ZlU2VjdGlvbkxpbmssIEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGlua307XG4iLCAiaW1wb3J0IHtBcmNoaXZlQW5kRGVsZXRlU2VjdGlvbkxpbmt9IGZyb20gJy4vY29tcG9uZW50cy9zZWN0aW9uTGluayc7XG5pbXBvcnQge0VkaXRDb25mbGljdE5vdGljZX0gZnJvbSAnLi9jb21wb25lbnRzL3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0U2VjdGlvbnN9IGZyb20gJy4vdXRpbC9nZXRTZWN0aW9uJztcbmltcG9ydCB7cmVmcmVzaH0gZnJvbSAnLi91dGlsL3JlZnJlc2hQYWdlJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBhZGRMaW5rcyA9IGFzeW5jICh7XG5cdGFyY0xldmVsLFxuXHRhcmNMb2MsXG5cdHNlY0FyYyxcblx0c2VjRGVsLFxufToge1xuXHRhcmNMZXZlbDogc3RyaW5nO1xuXHRhcmNMb2M6IHN0cmluZztcblx0c2VjQXJjOiBzdHJpbmc7XG5cdHNlY0RlbDogc3RyaW5nO1xufSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gYXdhaXQgZ2V0U2VjdGlvbnMod2dQYWdlTmFtZSk7XG5cblx0Y29uc3QgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBoJHthcmNMZXZlbH1gKTtcblx0Y29uc3QgaGVhZGxpbmVzID0gW107XG5cdGNvbnN0IGhlYWRpbmdJbmRpY2VzID0gW107XG5cblx0Zm9yIChjb25zdCBoZWFkaW5nIG9mIGhlYWRpbmdzKSB7XG5cdFx0Y29uc3QgaGVhZGxpbmUgPSBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1oZWFkbGluZScpO1xuXHRcdGlmIChoZWFkbGluZSkge1xuXHRcdFx0aGVhZGxpbmVzW2hlYWRsaW5lcy5sZW5ndGhdID0gaGVhZGxpbmUuaWQ7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qgc2VjdGlvbklkU3BhbnM6IEVsZW1lbnRbXSA9IFtdO1xuXHRsZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0XHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxuXHR9O1xuXG5cdGNvbnN0IG1lc3NhZ2VDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoYCR7d2dQYWdlTmFtZX1fbWVzc2FnZWApO1xuXHRjb25zdCByZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKGAke3dnUGFnZU5hbWV9X3JlZnJlc2hgKTtcblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnNUb0FyY2hpdmUpIHtcblx0XHRpZiAoc2VjdGlvbi5sZXZlbCAhPT0gYXJjTGV2ZWwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChoZWFkbGluZXMuaW5jbHVkZXMoc2VjdGlvbi5hbmNob3IpKSB7XG5cdFx0XHRoZWFkaW5nSW5kaWNlc1toZWFkaW5nSW5kaWNlcy5sZW5ndGhdID0ge1xuXHRcdFx0XHRpbmRleE5vOiBzZWN0aW9uLmluZGV4LFxuXHRcdFx0XHRhbmNob3I6IHNlY3Rpb24uYW5jaG9yLFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRmb3IgKGNvbnN0IHtpbmRleE5vLCBhbmNob3J9IG9mIGhlYWRpbmdJbmRpY2VzKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXF1ZXJ5LXNlbGVjdG9yXG5cdFx0Y29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhbmNob3IpO1xuXHRcdGlmICghaGVhZGxpbmUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhcmVudEhlYWRpbmcgPSBoZWFkbGluZS5wYXJlbnRFbGVtZW50O1xuXHRcdGlmICghcGFyZW50SGVhZGluZykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdFNlY3Rpb24gPSBwYXJlbnRIZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdGlmICghZWRpdFNlY3Rpb24pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlY3Rpb25JRFNwYW4gPSAoXG5cdFx0XHQ8QXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rXG5cdFx0XHRcdHNlY3Rpb25JZFNwYW5zPXtzZWN0aW9uSWRTcGFuc31cblx0XHRcdFx0bWVzc2FnZUNoYW5uZWw9e21lc3NhZ2VDaGFubmVsfVxuXHRcdFx0XHRyZWZyZXNoQ2hhbm5lbD17cmVmcmVzaENoYW5uZWx9XG5cdFx0XHRcdGluZGV4Tm89e2luZGV4Tm99XG5cdFx0XHRcdGFuY2hvcj17YW5jaG9yfVxuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlPXt0b2FzdGlmeUluc3RhbmNlfVxuXHRcdFx0XHRhcmNMb2M9e2FyY0xvY31cblx0XHRcdFx0c2VjQXJjPXtzZWNBcmN9XG5cdFx0XHRcdHNlY0RlbD17c2VjRGVsfVxuXHRcdFx0Lz5cblx0XHQpO1xuXG5cdFx0ZWRpdFNlY3Rpb24ucHJlcGVuZChzZWN0aW9uSURTcGFuKTtcblx0XHRzZWN0aW9uSWRTcGFuc1tzZWN0aW9uSWRTcGFucy5sZW5ndGhdID0gc2VjdGlvbklEU3Bhbjtcblx0fVxuXG5cdG1lc3NhZ2VDaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcblx0XHRmb3IgKGNvbnN0IHNwYW4gb2Ygc2VjdGlvbklkU3BhbnMpIHtcblx0XHRcdHNwYW4ucmVtb3ZlKCk7XG5cdFx0fVxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBldmVudC5kYXRhIGFzIHN0cmluZyxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXHR9KTtcblxuXHRyZWZyZXNoQ2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKCkgPT4ge1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHRub2RlOiAoXG5cdFx0XHRcdFx0PEVkaXRDb25mbGljdE5vdGljZVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdFx0XHRyZWZyZXNoKCk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpbmtzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5cbmNvbnN0IGFwcGVuZEZvb3Rlck5vdGljZSA9IChlbGVtZW50OiBFbGVtZW50KSA9PiB7XG5cdGNvbnN0IG1vdW50UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cblx0aWYgKG1vdW50UG9pbnQpIHtcblx0XHRtb3VudFBvaW50LnByZXBlbmQoZWxlbWVudCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7YXBwZW5kRm9vdGVyTm90aWNlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxRQUFRO0FBQ2QsVUFBSSxXQUFXLENBQUM7QUFFaEIsZUFBU0Esa0JBQWlCLFNBQVM7QUFDL0IsWUFBSSxRQUFRO0FBQ1osa0JBQVUsT0FBTyxPQUFPO0FBRXhCLFlBQUksS0FBSyx1QkFBdUIsVUFBVTtBQUUxQyxpQkFBUyxFQUFFLElBQUksU0FBUyxFQUFFLEtBQUssQ0FBQztBQUNoQyxpQkFBUyxFQUFFLEVBQUUsS0FBSyxJQUFJO0FBRXRCLGFBQUssUUFBUTtBQUNiLGFBQUssTUFB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ZXMiOiBbIkJyb2FkY2FzdENoYW5uZWwiLCAiZWxlbWVudElkIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiZm9vdGVyTm90aWNlIiwgInNlY3Rpb25JZFNwYW4iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFyY2hpdmUiLCAibG9jYWxpemUiLCAiZW4iLCAiQXJjaGl2aW5nIiwgIkFyY2hpdmVkIiwgIkRlbGV0ZSIsICJEZWxldGluZyIsICJEZWxldGVkIiwgInpoIiwgIlJlZnJlc2giLCAiUmVmcmVzaGluZyIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic2FuaXRpemUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiRm9vdGVyTm90aWNlIiwgImlkIiwgImNoaWxkcmVuIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiSW5CbGFja0xpc3QiLCAiTm90QWxsb3dlZCIsICJBcmNMb2NOb3RBbGxvd2VkIiwgImFyY0xvYyIsICJOb0FyY0xvYyIsICJFbmFibGVkIiwgInRpdGxlIiwgImhyZWYiLCAiY29uY2F0IiwgIk9uQ2xpY2siLCAidGV4dENvbnRlbnQiLCAib25DbGljayIsICJTZWN0aW9uSUQiLCAiUGlwZSIsICJFZGl0Q29uZmxpY3ROb3RpY2UiLCAiaWZBcmNMb2NOb3RBbGxvd2VkIiwgIndnUGFnZU5hbWUiLCAic291cmNlVGl0bGUiLCAiVGl0bGUiLCAiYXJjTG9jVGl0bGUiLCAiYXJjTG9jTmFtZXNwYWNlSWQiLCAiZ2V0TmFtZXNwYWNlSWQiLCAiYXJjTG9jUGFnZU5hbWUiLCAiZ2V0TWFpbiIsICJzb3VyY2VOYW1lc3BhY2VJZCIsICJzb3VyY2VQYWdlTmFtZSIsICJpc0luQmxhY2tsaXN0IiwgImJsYWNrTGlzdFJlZ2V4QXJyIiwgIl9pIiwgIl9ibGFja0xpc3RSZWdleEFyciIsICJsZW5ndGgiLCAiZWxlbWVudCIsICJ0ZXN0IiwgImlzTm90QWxsb3dlZCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1JlbGV2YW50VXNlck5hbWUiLCAid2dVc2VyTmFtZSIsICJpc05vdFN1cHBvcnRlZCIsICJ3Z0lzTWFpblBhZ2UiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJnZXRTZXR0aW5ncyIsICJzZXR0aW5ncyIsICJkYXRhc2V0IiwgImFyY0xldmVsIiwgInNlY0FyYyIsICJzZWNEZWwiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRTZWN0aW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicGFnZSIsICJwcm9wIiwgInBhcnNlIiwgInNlY3Rpb25zIiwgInNlY3Rpb25zVG9BcmNoaXZlIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInNlY3Rpb24iLCAidmFsdWUiLCAibGV2ZWwiLCAiaW5kZXgiLCAiYW5jaG9yIiwgInN0YXJ0c1dpdGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0U2VjdGlvbkNvbnRlbnQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJHF1ZXJ5JHBhZ2VzIiwgIl9yZXNwb25zZSRxdWVyeSRwYWdlczIiLCAicnZwcm9wIiwgInRpdGxlcyIsICJydnNlY3Rpb24iLCAicnZzbG90cyIsICJyZXNwb25zZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgIl94MiIsICJpc1BhZ2VFeGlzdCIsICJfcmVmMyIsICJhcmNoaXZlVG8iLCAiX3F1ZXJ5JHBhZ2VzJCIsICJxdWVyeSIsICJtaXNzaW5nIiwgIl94MyIsICJpc1NlY3Rpb25FeGlzdCIsICJfcmVmNCIsICJpc0V4aXN0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIl94NCIsICJyZW1vdmVTZWN0aW9uIiwgIl9yZWY1IiwgInN1bW1hcnkiLCAiZWRpdCIsICJ0ZXh0IiwgIm1pbm9yIiwgIl94NSIsICJhcmNoaXZlU2VjdGlvbiIsICJfcmVmNiIsICJwYWdlRXhpc3QiLCAiY3JlYXRlIiwgImFwcGVuZHRleHQiLCAiX3g2IiwgImdldEFyY2hpdmluZ01lc3NhZ2UiLCAiaW5kZXhObyIsICJnZXRBcmNoaXZlZE1lc3NhZ2UiLCAiZ2V0RGVsZXRpbmdNZXNzYWdlIiwgImdldERlbGV0ZWRNZXNzYWdlIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAid2dTY3JpcHQiLCAicmVmcmVzaCIsICJ0YXJnZXRQYWdlIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInV0aWwiLCAiZ2V0VXJsIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJhcmNoaXZlT25DbGljayIsICJfcmVmNyIsICJldmVudCIsICJzZWN0aW9uSWRTcGFucyIsICJtZXNzYWdlQ2hhbm5lbCIsICJyZWZyZXNoQ2hhbm5lbCIsICJfZXZlbnQkdGFyZ2V0IiwgInByZXZlbnREZWZhdWx0IiwgInBhcmVudEVsZW1lbnQiLCAidGFyZ2V0IiwgInJlcGxhY2VDaGlsZHJlbiIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJzcGFuIiwgInJlbW92ZSIsICJtZXNzYWdlMSIsICJwb3N0TWVzc2FnZSIsICJjbG9zZSIsICJtZXNzYWdlIiwgIl94NyIsICJfeDgiLCAicmVtb3ZlT25DbGljayIsICJfcmVmOCIsICJfZXZlbnQkdGFyZ2V0MiIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfeDkiLCAiX3gxMCIsICJpbXBvcnRfZXh0X2dhZGdldDciLCAiQXJjaGl2ZVNlY3Rpb25MaW5rIiwgIlJlbW92ZVNlY3Rpb25MaW5rIiwgIkFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGluayIsICJpbXBvcnRfZXh0X2dhZGdldDgiLCAiaW1wb3J0X2V4dF9nYWRnZXQ5IiwgImFkZExpbmtzIiwgIl9yZWY5IiwgImhlYWRpbmdzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiaGVhZGxpbmVzIiwgImhlYWRpbmdJbmRpY2VzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImhlYWRpbmciLCAiaGVhZGxpbmUiLCAiQnJvYWRjYXN0Q2hhbm5lbCIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJfaTIiLCAiX2hlYWRpbmdJbmRpY2VzIiwgImdldEVsZW1lbnRCeUlkIiwgInBhcmVudEhlYWRpbmciLCAiZWRpdFNlY3Rpb24iLCAic2VjdGlvbklEU3BhbiIsICJwcmVwZW5kIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX2kzIiwgIl9zZWN0aW9uSWRTcGFucyIsICJkYXRhIiwgIm5vZGUiLCAiX3gxMSIsICJhcHBlbmRGb290ZXJOb3RpY2UiLCAibW91bnRQb2ludCIsICJlYXN5QXJjaGl2ZSIsICJub3RTdXBwb3J0ZWQiLCAiaW5CbGFja2xpc3QiLCAibm90QWxsb3dlZCIsICJhcmNMb2NOb3RBbGxvd2VkIl0KfQo=
