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
//! src/EasyArchive/EasyArchive.tsx
var import_ext_gadget10 = __toESM(require("ext.gadget.JSX"));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL3JlYWN0LnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL0Vhc3lBcmNoaXZlLm1vZHVsZS5sZXNzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9zYW5pdGl6ZS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2dldFNldHRpbmdzLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9FYXN5QXJjaGl2ZS50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9nZXRTZWN0aW9uLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvZWRpdFNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9nZXRNZXNzYWdlLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvb25DbGljay50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9yZWZyZXNoUGFnZS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL3NlY3Rpb25MaW5rLnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9hZGRMaW5rcy50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvYXBwZW5kRm9vdGVyTm90aWNlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgdmFyIGNoYW5uZWxzID0gW107XG5cbiAgICBmdW5jdGlvbiBCcm9hZGNhc3RDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgY2hhbm5lbCA9IFN0cmluZyhjaGFubmVsKTtcblxuICAgICAgICB2YXIgaWQgPSAnJEJyb2FkY2FzdENoYW5uZWwkJyArIGNoYW5uZWwgKyAnJCc7XG5cbiAgICAgICAgY2hhbm5lbHNbaWRdID0gY2hhbm5lbHNbaWRdIHx8IFtdO1xuICAgICAgICBjaGFubmVsc1tpZF0ucHVzaCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9uYW1lID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX21jID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQxLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQyLnN0YXJ0KCk7XG5cbiAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5zdG9yYWdlQXJlYSAhPT0gZ2xvYmFsLmxvY2FsU3RvcmFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUubmV3VmFsdWUgPT0gbnVsbCB8fCBlLm5ld1ZhbHVlID09PSAnJykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUua2V5LnN1YnN0cmluZygwLCBpZC5sZW5ndGgpICE9PSBpZCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGUubmV3VmFsdWUpO1xuICAgICAgICAgICAgJHRoaXMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBCcm9hZGNhc3RDaGFubmVsLnByb3RvdHlwZSA9IHtcbiAgICAgICAgLy8gQnJvYWRjYXN0Q2hhbm5lbCBBUElcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdE1lc3NhZ2U6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBlLm5hbWUgPSAnSW52YWxpZFN0YXRlRXJyb3InO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIG90aGVyIGNvbnRleHRzIHZpYSBzdG9yYWdlIGV2ZW50cy4uLlxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2lkICsgU3RyaW5nKERhdGUubm93KCkpICsgJyQnICsgU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBjdXJyZW50IGNvbnRleHQgdmlhIHBvcnRzXG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uZm9yRWFjaChmdW5jdGlvbihiYykge1xuICAgICAgICAgICAgICAgIGlmIChiYyA9PT0gJHRoaXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICBiYy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoSlNPTi5wYXJzZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDIuY2xvc2UoKTtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gY2hhbm5lbHNbdGhpcy5faWRdLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBFdmVudFRhcmdldCBBUElcbiAgICAgICAgZ2V0IG9ubWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvbm1lc3NhZ2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKC8qZXZlbnQqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmRpc3BhdGNoRXZlbnQuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsID0gZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgfHwgQnJvYWRjYXN0Q2hhbm5lbDtcbn0pKHNlbGYpO1xuIiwgIntcblx0XCJlbGVtZW50SWRcIjogXCJnYWRnZXQtZWFzeV9hcmNoaXZlXCIsXG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Zm9vdGVyTm90aWNlLCBzZWN0aW9uSWRTcGFufSBmcm9tICcuL0Vhc3lBcmNoaXZlLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3Nhbml0aXplfSBmcm9tICcuLi91dGlsL3Nhbml0aXplJztcblxuaW50ZXJmYWNlIEZvb3Rlck5vdGljZVByb3BzIHtcblx0aWQ/OiBzdHJpbmc7XG5cdGNoaWxkcmVuPzogUmVhY3RFbGVtZW50O1xufVxuXG5jb25zdCBGb290ZXJOb3RpY2UgPSAoe2lkID0gT1BUSU9OUy5lbGVtZW50SWQsIGNoaWxkcmVuID0gPD48Lz59OiBGb290ZXJOb3RpY2VQcm9wcykgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0e3NraW4gPT09ICdjaXRpemVuJyA/IChcblx0XHRcdFx0PHNlY3Rpb25cblx0XHRcdFx0XHRpZD17aWR9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtbZm9vdGVyTm90aWNlLCAncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJywgJ25vcHJpbnQnXX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0KSA6IFsndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJywgJ2dvbmdiaSddLmluY2x1ZGVzKHNraW4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykgPyAoXG5cdFx0XHRcdDxsaSBpZD17aWR9IGNsYXNzTmFtZT17W2Zvb3Rlck5vdGljZSwgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PGRpdiBpZD17aWR9IGNsYXNzTmFtZT17W2Zvb3Rlck5vdGljZSwgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5jb25zdCBJbkJsYWNrTGlzdCA9ICgpID0+IChcblx0PEZvb3Rlck5vdGljZSBpZD1cImVhc3lfYXJjaGl2ZV9ub3Rfc3VwcG9ydGVkX25vdGljZVwiPlxuXHRcdDxzcGFuPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkJyl9XG5cdFx0XHQ8YnIgLz5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCBkZXRhaWxzJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmNvbnN0IE5vdEFsbG93ZWQgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2UgaWQ9XCJlYXN5X2FyY2hpdmVfbm90X2FsbG93ZWRfbm90aWNlXCI+XG5cdFx0PHNwYW4+e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3QgYWxsb3dlZCcpfTwvc3Bhbj5cblx0PC9Gb290ZXJOb3RpY2U+XG4pO1xuXG5pbnRlcmZhY2UgQXJjTG9jTm90QWxsb3dlZFByb3BzIHtcblx0YXJjTG9jOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFyY0xvY05vdEFsbG93ZWQgPSAoe2FyY0xvY306IEFyY0xvY05vdEFsbG93ZWRQcm9wcykgPT4gKFxuXHQ8Rm9vdGVyTm90aWNlIGlkPVwiZWFzeV9hcmNoaXZlX2FyY19sb2Nfbm90X2FsbG93ZWRfbm90aWNlXCI+XG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCcpLnJlcGxhY2UoJyQxJywgc2FuaXRpemUoYXJjTG9jKSl9XG5cdFx0XHQ8YnIgLz5cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkIGRldGFpbHMnKX1cblx0XHQ8L3NwYW4+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuY29uc3QgTm9BcmNMb2MgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2UgaWQ9XCJlYXN5X2FyY2hpdmVfbm9fYXJjX2xvY19ub3RpY2VcIj5cblx0XHQ8c3Bhbj57Z2V0TWVzc2FnZSgnTm8gQXJjaGl2ZSBMb2NhdGlvbicpfTwvc3Bhbj5cblx0PC9Gb290ZXJOb3RpY2U+XG4pO1xuXG5pbnRlcmZhY2UgRW5hYmxlZFByb3BzIHtcblx0YXJjTG9jOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVuYWJsZWQgPSAoe2FyY0xvY306IEVuYWJsZWRQcm9wcykgPT4gKFxuXHQ8Rm9vdGVyTm90aWNlIGlkPVwiZWFzeV9hcmNoaXZlX2FyY19sb2Nfbm90X2FsbG93ZWRfbm90aWNlXCI+XG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIGVuYWJsZWQnKX1cblx0XHRcdHtnZXRNZXNzYWdlKCcoJyl9XG5cdFx0XHR7Z2V0TWVzc2FnZSgnQXJjaGl2ZSBsb2NhdGlvbicpfVxuXHRcdFx0PGEgdGl0bGU9e3Nhbml0aXplKGFyY0xvYyl9IGhyZWY9e2Avd2lraS8ke3Nhbml0aXplKGFyY0xvYyl9YH0+XG5cdFx0XHRcdHthcmNMb2N9XG5cdFx0XHQ8L2E+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnKScpfVxuXHRcdFx0e2dldE1lc3NhZ2UoJy4nKX1cblx0XHQ8L3NwYW4+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuaW50ZXJmYWNlIE9uQ2xpY2tQcm9wcyB7XG5cdHRleHRDb250ZW50OiBzdHJpbmc7XG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXHRvbkNsaWNrPzogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcbn1cblxuY29uc3QgT25DbGljayA9ICh7dGV4dENvbnRlbnQsIGNsYXNzTmFtZSwgb25DbGlja306IE9uQ2xpY2tQcm9wcykgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzTmFtZT17WydnYWRnZXQtZWFzeV9hcmNoaXZlX19saW5rJywgYGdhZGdldC1lYXN5X2FyY2hpdmVfX2xpbmstJHtjbGFzc05hbWV9YF19XG5cdFx0b25DbGljaz17b25DbGljayB8fCAoKCkgPT4ge30pfVxuXHRcdHRleHRDb250ZW50PXt0ZXh0Q29udGVudH1cblx0Lz5cbik7XG5cbmludGVyZmFjZSBTZWN0aW9uSURQcm9wcyB7XG5cdGNoaWxkcmVuPzogUmVhY3RFbGVtZW50O1xufVxuXG5jb25zdCBTZWN0aW9uSUQgPSAoe2NoaWxkcmVuID0gPD48Lz59OiBTZWN0aW9uSURQcm9wcykgPT4gPHNwYW4gY2xhc3NOYW1lPXtzZWN0aW9uSWRTcGFufT57Y2hpbGRyZW59PC9zcGFuPjtcblxuY29uc3QgUGlwZSA9ICgpID0+IDxzcGFuIGNsYXNzTmFtZT1cIm13LWVkaXRzZWN0aW9uLWRpdmlkZXJcIiB0ZXh0Q29udGVudD17J3wnfSAvPjtcblxuaW50ZXJmYWNlIEVkaXRDb25mbGljdE5vdGljZVByb3BzIHtcblx0b25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgRWRpdENvbmZsaWN0Tm90aWNlID0gKHtvbkNsaWNrfTogRWRpdENvbmZsaWN0Tm90aWNlUHJvcHMpID0+IChcblx0PHNwYW4+XG5cdFx0e2dldE1lc3NhZ2UoJ0VkaXQgQ29uZmlsaWN0IE5vdGljZScpfVxuXHRcdDxhIG9uQ2xpY2s9e29uQ2xpY2t9PntnZXRNZXNzYWdlKCdSZWZyZXNoJyl9PC9hPlxuXHQ8L3NwYW4+XG4pO1xuXG5leHBvcnQge1xuXHRGb290ZXJOb3RpY2UsXG5cdEVuYWJsZWQsXG5cdEluQmxhY2tMaXN0LFxuXHROb3RBbGxvd2VkLFxuXHRBcmNMb2NOb3RBbGxvd2VkLFxuXHROb0FyY0xvYyxcblx0T25DbGljayxcblx0UGlwZSxcblx0U2VjdGlvbklELFxuXHRFZGl0Q29uZmxpY3ROb3RpY2UsXG59O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL0Vhc3lBcmNoaXZlLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgZm9vdGVyTm90aWNlID0gXCJFYXN5QXJjaGl2ZS1tb2R1bGVfX2Zvb3Rlck5vdGljZV9aUmtHMXFfXzQ5MFwiO1xuZXhwb3J0IGNvbnN0IHNlY3Rpb25JZFNwYW4gPSBcIkVhc3lBcmNoaXZlLW1vZHVsZV9fc2VjdGlvbklkU3Bhbl9aUmtHMXFfXzQ5MFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZm9vdGVyTm90aWNlXCI6IGZvb3Rlck5vdGljZSxcbiAgXCJzZWN0aW9uSWRTcGFuXCI6IHNlY3Rpb25JZFNwYW5cbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFyY2hpdmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBsb2NhdGlvbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZSBsb2NhdGlvbjogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+WcsOWdgO+8micsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpToh7PvvJonLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGJ1dCBFYXN5IGFyY2hpdmUgY2Fubm90IG9wZXJhdGUgbGlrZSB0aGlzLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAneOAgkVhc3kgQXJjaGl2ZSDml6Dms5XmjInmraTlnLDlnYDlrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3jgIJFYXN5IEFyY2hpdmUg54Sh5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCBkZXRhaWxzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlcyBzaG91bGQgbm90IGJlIG5vcm1hbGx5IGRpcmVjdGVkIHRvIHBhZ2VzIHVuZGVyIGFydGljbGUgbmFtZXNwYWNlLiBQbGVhc2UgY2hlY2sgaWYgeW91IGhhdmUgdGhlIGNvcnJlY3QgYXJjaGl2ZSBsb2NhdGlvbi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA6Iis6ICM6KiA77yM5LiN5bqU5ZCR5p2h55uu5ZCN56ew56m66Ze06L+b6KGM5a2Y5qGj44CC5q2k5aSW77yM5a2Y5qGj5Zyw5Z2A5LiN5b6X5ZKM5q2k6aG16Z2i5ZCN56ew55u45ZCM44CC6K+35qOA5p+l5a2Y5qGj5Zyw5Z2A44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOiIrOiAjOiogO+8jOS4jeaHieWQkeaineebruWQjeeoseepuumWk+mAsuihjOWtmOaqlOOAguatpOWklu+8jOWtmOaqlOWcsOWdgOS4jeW+l+WSjOatpOmggemdouWQjeeoseebuOWQjOOAguiri+aqouafpeWtmOaqlOWcsOWdgOOAgicsXG5cdFx0fSksXG5cdFx0QXJjaGl2aW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmluZycsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5LitJyxcblx0XHR9KSxcblx0XHRBcmNoaXZlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRWRpdCBDb25maWxpY3QgTm90aWNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBhbHJlYWR5IGFyY2hpdmVkIGFuZC9vciBkZWxldGVkIGEgc2VjdGlvbiBvbiB0aGlzIHBhZ2UuIFBsZWFzZSByZWZyZXNoIHRoZSBwYWdlIGFuZCBjb250aW51ZSBhcmNoaXZpbmcgb3IgZGVsZXRpbmcgb3RoZXIgc2VjdGlvbnMgdG8gYXZvaWQgZWRpdGluZyBjb25mbGljdHMuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOW3sue7j+WcqOacrOmhtemdouaJp+ihjOS6huWtmOaho+OAgeWIoOmZpOeroOiKgueahOaTjeS9nOOAguivt+WIt+aWsOmhtemdou+8jOeEtuWQjue7p+e7reWtmOaho+OAgeWIoOmZpOacrOmhtemdoueahOWFtuS7lueroOiKgu+8jOS7pemBv+WFjee8lui+keWGsueqgeOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmgqjlt7LntpPlnKjmnKzpoIHpnaLln7fooYzkuoblrZjmqpTjgIHliKrpmaTnq6Dnr4DnmoTmk43kvZzjgILoq4vliLfmlrDpoIHpnaLvvIznhLblvoznubznuozlrZjmqpTjgIHliKrpmaTmnKzpoIHpnaLnmoTlhbbku5bnq6Dnr4DvvIzku6Xpgb/lhY3nt6jovK/ooZ3nqoHjgIInLFxuXHRcdH0pLFxuXHRcdERlbGV0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpCcsXG5cdFx0fSksXG5cdFx0RGVsZXRpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRpbmcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOS4rScsXG5cdFx0fSksXG5cdFx0RGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICflt7LliKrpmaQnLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5q616JC9Jyxcblx0XHR9KSxcblx0XHQnQ3JlYXRlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2NyZWF0ZSBhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W7uueri+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflu7rnq4vlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdEZWxldGUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOauteiQvScsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBlbmFibGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgaXMgZW5hYmxlZCBvbiB0aGlzIHRhbGsgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfmnKzorqjorrrpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3QgYWxsb3dlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGNhbm5vdCB1c2UgRWFzeSBBcmNoaXZlIHRvIGFyY2hpdmUgdGhyZWFkcyBvbiB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOS4jeWPr+S7peWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOS4jeWPr+S7peWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQgZGV0YWlscyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlc2UgcGFnZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlOiBBcnRpY2xlLCBGaWxlLCBUZW1wbGF0ZSwgTW9kdWxlLCBNZWRpYVdpa2ksIENhdGVnb3J5LCBTcGVjaWFsLCBKYXZhU2NyaXB0LCBDU1MsIEpTT04uJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+i/meS6m+mhtemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77ya5p2h55uu44CBRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6YCZ5Lqb6aCB6Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJrmop3nm67vvIxGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0fSksXG5cdFx0J05vIEFyY2hpdmUgTG9jYXRpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBjYW4gYmUgdXNlZCBvbiB0aGlzIHBhZ2UgaWYgbmVlZGVkLiBUbyBlbmFibGUgaXQsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+iLpemcgOimge+8jOatpOmhtemdouWPr+S7peWQr+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6K+35Zyo6aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+iLpemcgOimge+8jOatpOmggemdouWPr+S7peWVn+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6KuL5Zyo6aCB6Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn1944CCJyxcblx0XHR9KSxcblx0XHQnU2VjdGlvbiAkMSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VjdGlvbiAkMScsXG5cdFx0XHR6aDogJ+esrCAkMSDnq6DoioInLFxuXHRcdH0pLFxuXHRcdCcoJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0JyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyknLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdCcuJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcuJyxcblx0XHRcdHpoOiAn44CCJyxcblx0XHR9KSxcblx0XHQnOic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOiAnLFxuXHRcdFx0emg6ICfvvJonLFxuXHRcdH0pLFxuXHRcdFJlZnJlc2g6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVmcmVzaCB0aGUgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfliLfmlrDlvZPliY3pobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn6YeN5paw6LyJ5YWl55W25YmN6aCBJyxcblx0XHR9KSxcblx0XHRSZWZyZXNoaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlZnJlc2hpbmcuLi4nLFxuXHRcdFx0amE6ICflho3oqq3jgb/ovrzjgb/jgZfjgb7jgZkuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Y2z5bCG5Yi35paw5b2T5YmN6aG16Z2i4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+WNs+Wwh+mHjeaWsOi8ieWFpeeVtuWJjemggeKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IHNhbml0aXplID0gKHN0cmluZzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBzdHJpbmdcblx0XHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuXHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0LnJlcGxhY2UoLycvZywgJyZhcG9zOycpXG5cdFx0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn07XG5cbmV4cG9ydCB7c2FuaXRpemV9O1xuIiwgImNvbnN0IGlmQXJjTG9jTm90QWxsb3dlZCA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNvdXJjZVRpdGxlID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpO1xuXHRjb25zdCBhcmNMb2NUaXRsZSA9IG5ldyBtdy5UaXRsZShhcmNMb2MpO1xuXG5cdGNvbnN0IGFyY0xvY05hbWVzcGFjZUlkID0gYXJjTG9jVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3QgYXJjTG9jUGFnZU5hbWUgPSBhcmNMb2NUaXRsZS5nZXRNYWluKCk7XG5cdGNvbnN0IHNvdXJjZU5hbWVzcGFjZUlkID0gc291cmNlVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3Qgc291cmNlUGFnZU5hbWUgPSBzb3VyY2VUaXRsZS5nZXRNYWluKCk7XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoYXJjTG9jTmFtZXNwYWNlSWQgPT09IHNvdXJjZU5hbWVzcGFjZUlkICYmIGFyY0xvY1BhZ2VOYW1lID09PSBzb3VyY2VQYWdlTmFtZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNJbkJsYWNrbGlzdCA9ICgpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGJsYWNrTGlzdFJlZ2V4QXJyID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja0xpc3RSZWdleEFycikge1xuXHRcdGlmIChlbGVtZW50LnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzTm90QWxsb3dlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1JlbGV2YW50VXNlck5hbWUsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICgod2dOYW1lc3BhY2VOdW1iZXIgPT09IDIgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDMpICYmICEod2dSZWxldmFudFVzZXJOYW1lID09PSB3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNOb3RTdXBwb3J0ZWQgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0lzTWFpblBhZ2UsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z0N1clJldmlzaW9uSWQsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCB8fCB3Z0N1clJldmlzaW9uSWQgLSB3Z1JldmlzaW9uSWQgIT09IDApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCB8fCB3Z0lzTWFpblBhZ2UpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHtkYXRhc2V0fSA9IHNldHRpbmdzO1xuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gZGF0YXNldDtcblx0cmV0dXJuIHtcblx0XHRhcmNMZXZlbDogYXJjTGV2ZWwgPz8gJzInLFxuXHRcdGFyY0xvYzogYXJjTG9jID8/ICcnLFxuXHRcdHNlY0FyYzogc2VjQXJjID8/ICcxJyxcblx0XHRzZWNEZWw6IHNlY0RlbCA/PyAnMScsXG5cdH07XG59O1xuXG5leHBvcnQge2dldFNldHRpbmdzLCBpZkFyY0xvY05vdEFsbG93ZWQsIGlzSW5CbGFja2xpc3QsIGlzTm90QWxsb3dlZCwgaXNOb3RTdXBwb3J0ZWR9O1xuIiwgImltcG9ydCB7QXJjTG9jTm90QWxsb3dlZCwgRW5hYmxlZCwgSW5CbGFja0xpc3QsIE5vQXJjTG9jLCBOb3RBbGxvd2VkfSBmcm9tICcuL21vZHVsZXMvY29tcG9uZW50cy9yZWFjdCc7XG5pbXBvcnQge2dldFNldHRpbmdzLCBpZkFyY0xvY05vdEFsbG93ZWQsIGlzSW5CbGFja2xpc3QsIGlzTm90QWxsb3dlZCwgaXNOb3RTdXBwb3J0ZWR9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dldFNldHRpbmdzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2FkZExpbmtzfSBmcm9tICcuL21vZHVsZXMvYWRkTGlua3MnO1xuaW1wb3J0IHthcHBlbmRGb290ZXJOb3RpY2V9IGZyb20gJy4vbW9kdWxlcy9hcHBlbmRGb290ZXJOb3RpY2UnO1xuXG4oZnVuY3Rpb24gZWFzeUFyY2hpdmUoKSB7XG5cdGNvbnN0IG5vdFN1cHBvcnRlZCA9IGlzTm90U3VwcG9ydGVkKCk7XG5cdGlmIChub3RTdXBwb3J0ZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpbkJsYWNrbGlzdCA9IGlzSW5CbGFja2xpc3QoKTtcblx0aWYgKGluQmxhY2tsaXN0KSB7XG5cdFx0YXBwZW5kRm9vdGVyTm90aWNlKDxJbkJsYWNrTGlzdCAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgbm90QWxsb3dlZCA9IGlzTm90QWxsb3dlZCgpO1xuXHRpZiAobm90QWxsb3dlZCkge1xuXHRcdGFwcGVuZEZvb3Rlck5vdGljZSg8Tm90QWxsb3dlZCAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpO1xuXHRpZiAoIXNldHRpbmdzKSB7XG5cdFx0YXBwZW5kRm9vdGVyTm90aWNlKDxOb0FyY0xvYyAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge2FyY0xvY30gPSBzZXR0aW5ncztcblx0aWYgKCFhcmNMb2MpIHtcblx0XHRhcHBlbmRGb290ZXJOb3RpY2UoPE5vQXJjTG9jIC8+KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBhcmNMb2NOb3RBbGxvd2VkID0gaWZBcmNMb2NOb3RBbGxvd2VkKGFyY0xvYyk7XG5cdGlmIChhcmNMb2NOb3RBbGxvd2VkKSB7XG5cdFx0YXBwZW5kRm9vdGVyTm90aWNlKDxBcmNMb2NOb3RBbGxvd2VkIGFyY0xvYz17YXJjTG9jfSAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXBwZW5kRm9vdGVyTm90aWNlKDxFbmFibGVkIGFyY0xvYz17YXJjTG9jfSAvPik7XG5cblx0dm9pZCBhZGRMaW5rcyhzZXR0aW5ncyk7XG59KSgpO1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgRWFzeUFyY2hpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9ucyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwYWdlOiB0aXRsZSxcblx0XHRwcm9wOiAnc2VjdGlvbnMnLFxuXHR9O1xuXG5cdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdGNvbnN0IHtzZWN0aW9uc30gPSBwYXJzZSBhcyB7XG5cdFx0c2VjdGlvbnM6IHtcblx0XHRcdGxldmVsOiBzdHJpbmc7XG5cdFx0XHRpbmRleDogc3RyaW5nO1xuXHRcdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0fVtdO1xuXHR9O1xuXG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gW107XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0Y29uc3Qge2xldmVsLCBpbmRleCwgYW5jaG9yfSA9IHNlY3Rpb247XG5cblx0XHRpZiAoaW5kZXguc3RhcnRzV2l0aCgnVC0nKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0c2VjdGlvbnNUb0FyY2hpdmVbc2VjdGlvbnNUb0FyY2hpdmUubGVuZ3RoXSA9IHtcblx0XHRcdGxldmVsLFxuXHRcdFx0aW5kZXgsXG5cdFx0XHRhbmNob3IsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBzZWN0aW9uc1RvQXJjaGl2ZTtcbn07XG5cbmNvbnN0IGdldFNlY3Rpb25Db250ZW50ID0gYXN5bmMgKHt0aXRsZSwgc2VjdGlvbn06IHt0aXRsZTogc3RyaW5nOyBzZWN0aW9uOiBzdHJpbmd9KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdHJ2c2VjdGlvbjogc2VjdGlvbixcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdH07XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIChyZXNwb25zZVsncXVlcnknXS5wYWdlc1swXT8ucmV2aXNpb25zPy5bMF0uc2xvdHMubWFpbi5jb250ZW50IGFzIHN0cmluZykgPz8gbnVsbDtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbnMsIGdldFNlY3Rpb25Db250ZW50fTtcbiIsICJpbXBvcnQge2dldFNlY3Rpb25Db250ZW50LCBnZXRTZWN0aW9uc30gZnJvbSAnLi9nZXRTZWN0aW9uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBpc1BhZ2VFeGlzdCA9IGFzeW5jIChhcmNoaXZlVG86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbmZvJyxcblx0XHR0aXRsZXM6IGFyY2hpdmVUbyxcblx0fTtcblxuXHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdGlmIChxdWVyeS5wYWdlc1swXT8ubWlzc2luZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgaXNTZWN0aW9uRXhpc3QgPSBhc3luYyAoe2luZGV4LCBhbmNob3J9OiB7aW5kZXg6IHN0cmluZzsgYW5jaG9yOiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnMgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRsZXQgaXNFeGlzdCA9IGZhbHNlO1xuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRpZiAoaW5kZXggPT09IHNlY3Rpb24uaW5kZXggJiYgYW5jaG9yID09PSBzZWN0aW9uLmFuY2hvcikge1xuXHRcdFx0aXNFeGlzdCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBpc0V4aXN0O1xufTtcblxuY29uc3QgcmVtb3ZlU2VjdGlvbiA9IGFzeW5jICh7aW5kZXgsIGFuY2hvciwgc3VtbWFyeX06IHtpbmRleDogc3RyaW5nOyBhbmNob3I6IHN0cmluZzsgc3VtbWFyeT86IHN0cmluZ30pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpc0V4aXN0ID0gYXdhaXQgaXNTZWN0aW9uRXhpc3Qoe2luZGV4LCBhbmNob3J9KTtcblxuXHRpZiAoaXNFeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh7dGl0bGU6IHdnUGFnZU5hbWUsIHNlY3Rpb246IGluZGV4fSk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCBhcGkuZWRpdCh3Z1BhZ2VOYW1lLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlY3Rpb246IGluZGV4LFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRzdW1tYXJ5OiBzdW1tYXJ5ID8/IGdldE1lc3NhZ2UoJ0RlbGV0ZSBzdW1tYXJ5JyksXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcbn07XG5cbmNvbnN0IGFyY2hpdmVTZWN0aW9uID0gYXN5bmMgKHtpbmRleCwgYW5jaG9yLCBhcmNoaXZlVG99OiB7aW5kZXg6IHN0cmluZzsgYW5jaG9yOiBzdHJpbmc7IGFyY2hpdmVUbzogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlzRXhpc3QgPSBhd2FpdCBpc1NlY3Rpb25FeGlzdCh7aW5kZXgsIGFuY2hvcn0pO1xuXG5cdGlmIChpc0V4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHt0aXRsZTogd2dQYWdlTmFtZSwgc2VjdGlvbjogaW5kZXh9KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBhZ2VFeGlzdCA9IGF3YWl0IGlzUGFnZUV4aXN0KGFyY2hpdmVUbyk7XG5cdGlmICghcGFnZUV4aXN0KSB7XG5cdFx0YXdhaXQgYXBpLmNyZWF0ZShcblx0XHRcdGFyY2hpdmVUbyxcblx0XHRcdHtcblx0XHRcdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnQ3JlYXRlIHN1bW1hcnknKSxcblx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0J3t7dGFsa2FyY2hpdmV9fSdcblx0XHQpO1xuXHR9XG5cblx0YXdhaXQgYXBpLmVkaXQoYXJjaGl2ZVRvLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFwcGVuZHRleHQ6IGBcXG5cXG4ke2NvbnRlbnR9YCxcblx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG5cblx0YXdhaXQgcmVtb3ZlU2VjdGlvbih7aW5kZXgsIGFuY2hvciwgc3VtbWFyeTogZ2V0TWVzc2FnZSgnQXJjaGl2ZSBzdW1tYXJ5Jyl9KTtcbn07XG5cbmV4cG9ydCB7aXNTZWN0aW9uRXhpc3QsIGFyY2hpdmVTZWN0aW9uLCByZW1vdmVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZXRBcmNoaXZpbmdNZXNzYWdlID0gKGluZGV4Tm86IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gZ2V0TWVzc2FnZSgnQXJjaGl2aW5nJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcbn07XG5cbmNvbnN0IGdldEFyY2hpdmVkTWVzc2FnZSA9IChpbmRleE5vOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIGdldE1lc3NhZ2UoJ0FyY2hpdmVkJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcbn07XG5cbmNvbnN0IGdldERlbGV0aW5nTWVzc2FnZSA9IChpbmRleE5vOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIGdldE1lc3NhZ2UoJ0RlbGV0aW5nJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcbn07XG5cbmNvbnN0IGdldERlbGV0ZWRNZXNzYWdlID0gKGluZGV4Tm86IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gZ2V0TWVzc2FnZSgnRGVsZXRlZCcpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG59O1xuXG5leHBvcnQge2dldEFyY2hpdmluZ01lc3NhZ2UsIGdldEFyY2hpdmVkTWVzc2FnZSwgZ2V0RGVsZXRpbmdNZXNzYWdlLCBnZXREZWxldGVkTWVzc2FnZX07XG4iLCAiaW1wb3J0IHthcmNoaXZlU2VjdGlvbiwgcmVtb3ZlU2VjdGlvbn0gZnJvbSAnLi9lZGl0U2VjdGlvbic7XG5pbXBvcnQge2dldEFyY2hpdmVkTWVzc2FnZSwgZ2V0QXJjaGl2aW5nTWVzc2FnZSwgZ2V0RGVsZXRlZE1lc3NhZ2UsIGdldERlbGV0aW5nTWVzc2FnZX0gZnJvbSAnLi9nZXRNZXNzYWdlJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtyZWZyZXNofSBmcm9tICcuL3JlZnJlc2hQYWdlJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5pbnRlcmZhY2UgT25DbGlja1Byb3BzIHtcblx0c2VjdGlvbklkU3BhbnM6IEVsZW1lbnRbXTtcblx0bWVzc2FnZUNoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdHJlZnJlc2hDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRpbmRleE5vOiBzdHJpbmc7XG5cdGFuY2hvcjogc3RyaW5nO1xuXHR0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlO1xufVxuXG50eXBlIEFyY2hpdmVPbkNsaWNrUHJvcHMgPSBPbkNsaWNrUHJvcHMgJiB7YXJjaGl2ZVRvOiBzdHJpbmd9O1xudHlwZSBSZW1vdmVPbkNsaWNrUHJvcHMgPSBPbkNsaWNrUHJvcHM7XG5cbmNvbnN0IGFyY2hpdmVPbkNsaWNrID0gYXN5bmMgKFxuXHRldmVudDogRXZlbnQsXG5cdHtzZWN0aW9uSWRTcGFucywgbWVzc2FnZUNoYW5uZWwsIHJlZnJlc2hDaGFubmVsLCBpbmRleE5vLCBhbmNob3IsIHRvYXN0aWZ5SW5zdGFuY2UsIGFyY2hpdmVUb306IEFyY2hpdmVPbkNsaWNrUHJvcHNcbikgPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBwYXJlbnRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LnBhcmVudEVsZW1lbnQ7XG5cdGlmICghcGFyZW50RWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKDxzcGFuPntnZXRNZXNzYWdlKCdBcmNoaXZpbmcnKX08L3NwYW4+KTtcblxuXHRmb3IgKGNvbnN0IHNwYW4gb2Ygc2VjdGlvbklkU3BhbnMpIHtcblx0XHRzcGFuLnJlbW92ZSgpO1xuXHR9XG5cblx0Y29uc3QgbWVzc2FnZTEgPSBnZXRBcmNoaXZpbmdNZXNzYWdlKGluZGV4Tm8pO1xuXHRtZXNzYWdlQ2hhbm5lbC5wb3N0TWVzc2FnZShtZXNzYWdlMSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZSB8fD0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBtZXNzYWdlMSxcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0YXdhaXQgYXJjaGl2ZVNlY3Rpb24oe2luZGV4OiBpbmRleE5vLCBhbmNob3IsIGFyY2hpdmVUb30pO1xuXG5cdHBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKDxzcGFuPntnZXRNZXNzYWdlKCdBcmNoaXZlZCcpfTwvc3Bhbj4pO1xuXG5cdGNvbnN0IG1lc3NhZ2UgPSBnZXRBcmNoaXZlZE1lc3NhZ2UoaW5kZXhObyk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBtZXNzYWdlLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRtZXNzYWdlQ2hhbm5lbC5jbG9zZSgpO1xuXG5cdHJlZnJlc2hDaGFubmVsLnBvc3RNZXNzYWdlKCdSZWZyZXNoJyk7XG5cdHJlZnJlc2goe3RvYXN0aWZ5SW5zdGFuY2V9KTtcbn07XG5jb25zdCByZW1vdmVPbkNsaWNrID0gYXN5bmMgKFxuXHRldmVudDogRXZlbnQsXG5cdHtzZWN0aW9uSWRTcGFucywgbWVzc2FnZUNoYW5uZWwsIHJlZnJlc2hDaGFubmVsLCBpbmRleE5vLCBhbmNob3IsIHRvYXN0aWZ5SW5zdGFuY2V9OiBSZW1vdmVPbkNsaWNrUHJvcHNcbikgPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBwYXJlbnRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LnBhcmVudEVsZW1lbnQ7XG5cdGlmICghcGFyZW50RWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKDxzcGFuPntnZXRNZXNzYWdlKCdEZWxldGluZycpfTwvc3Bhbj4pO1xuXG5cdGZvciAoY29uc3Qgc3BhbiBvZiBzZWN0aW9uSWRTcGFucykge1xuXHRcdHNwYW4ucmVtb3ZlKCk7XG5cdH1cblxuXHRsZXQgbWVzc2FnZSA9IGdldERlbGV0aW5nTWVzc2FnZShpbmRleE5vKTtcblx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZSB8fD0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBtZXNzYWdlLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRhd2FpdCByZW1vdmVTZWN0aW9uKHtpbmRleDogaW5kZXhObywgYW5jaG9yfSk7XG5cblx0cGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oPHNwYW4+e2dldE1lc3NhZ2UoJ0RlbGV0ZWQnKX08L3NwYW4+KTtcblxuXHRtZXNzYWdlID0gZ2V0RGVsZXRlZE1lc3NhZ2UoaW5kZXhObyk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBtZXNzYWdlLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRtZXNzYWdlQ2hhbm5lbC5jbG9zZSgpO1xuXG5cdHJlZnJlc2hDaGFubmVsLnBvc3RNZXNzYWdlKCdSZWZyZXNoJyk7XG5cdHJlZnJlc2goe3RvYXN0aWZ5SW5zdGFuY2V9KTtcbn07XG5cbmV4cG9ydCB7YXJjaGl2ZU9uQ2xpY2ssIHJlbW92ZU9uQ2xpY2t9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qge3dnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgcmVmcmVzaCA9ICh7XG5cdHRhcmdldFBhZ2UsXG5cdHRvYXN0aWZ5SW5zdGFuY2UsXG59OiB7dGFyZ2V0UGFnZT86IHN0cmluZzsgdG9hc3RpZnlJbnN0YW5jZT86IFRvYXN0aWZ5SW5zdGFuY2V9ID0ge30pOiB2b2lkID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZSB8fD0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdSZWZyZXNoaW5nJyksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxvY2F0aW9uLnJlcGxhY2UoXG5cdFx0bXcudXRpbC5nZXRVcmwod2dTY3JpcHQsIHtcblx0XHRcdHRpdGxlOiB0YXJnZXRQYWdlID8/IHdnUGFnZU5hbWUsXG5cdFx0fSlcblx0KTtcbn07XG5cbmV4cG9ydCB7cmVmcmVzaH07XG4iLCAiaW1wb3J0IHtPbkNsaWNrLCBQaXBlLCBTZWN0aW9uSUR9IGZyb20gJy4vcmVhY3QnO1xuaW1wb3J0IHthcmNoaXZlT25DbGljaywgcmVtb3ZlT25DbGlja30gZnJvbSAnLi4vdXRpbC9vbkNsaWNrJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5pbnRlcmZhY2UgQXJjaGl2ZVNlY3Rpb25MaW5rUHJvcHMge1xuXHRzZWN0aW9uSWRTcGFuczogRWxlbWVudFtdO1xuXHRtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0cmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdGluZGV4Tm86IHN0cmluZztcblx0YW5jaG9yOiBzdHJpbmc7XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG5cdGFyY2hpdmVUbzogc3RyaW5nO1xufVxuXG5jb25zdCBBcmNoaXZlU2VjdGlvbkxpbmsgPSAoe1xuXHRzZWN0aW9uSWRTcGFucyxcblx0bWVzc2FnZUNoYW5uZWwsXG5cdHJlZnJlc2hDaGFubmVsLFxuXHRpbmRleE5vLFxuXHRhbmNob3IsXG5cdGFyY2hpdmVUbyxcblx0dG9hc3RpZnlJbnN0YW5jZSxcbn06IEFyY2hpdmVTZWN0aW9uTGlua1Byb3BzKSA9PiAoXG5cdDxPbkNsaWNrXG5cdFx0Y2xhc3NOYW1lPXsnYXJjaGl2ZSd9XG5cdFx0b25DbGljaz17KGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdFx0dm9pZCBhcmNoaXZlT25DbGljayhldmVudCwge1xuXHRcdFx0XHRzZWN0aW9uSWRTcGFucyxcblx0XHRcdFx0bWVzc2FnZUNoYW5uZWwsXG5cdFx0XHRcdHJlZnJlc2hDaGFubmVsLFxuXHRcdFx0XHRpbmRleE5vLFxuXHRcdFx0XHRhbmNob3IsXG5cdFx0XHRcdGFyY2hpdmVUbyxcblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSxcblx0XHRcdH0pO1xuXHRcdH19XG5cdFx0dGV4dENvbnRlbnQ9e2dldE1lc3NhZ2UoJ0FyY2hpdmUnKX1cblx0Lz5cbik7XG5cbmludGVyZmFjZSBSZW1vdmVTZWN0aW9uTGlua1Byb3BzIHtcblx0c2VjdGlvbklkU3BhbnM6IEVsZW1lbnRbXTtcblx0bWVzc2FnZUNoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdHJlZnJlc2hDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRpbmRleE5vOiBzdHJpbmc7XG5cdGFuY2hvcjogc3RyaW5nO1xuXHR0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlO1xufVxuXG5jb25zdCBSZW1vdmVTZWN0aW9uTGluayA9ICh7XG5cdHNlY3Rpb25JZFNwYW5zLFxuXHRtZXNzYWdlQ2hhbm5lbCxcblx0cmVmcmVzaENoYW5uZWwsXG5cdGluZGV4Tm8sXG5cdGFuY2hvcixcblx0dG9hc3RpZnlJbnN0YW5jZSxcbn06IFJlbW92ZVNlY3Rpb25MaW5rUHJvcHMpID0+IChcblx0PE9uQ2xpY2tcblx0XHRjbGFzc05hbWU9eydkZWxldGUnfVxuXHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0dm9pZCByZW1vdmVPbkNsaWNrKGV2ZW50LCB7XG5cdFx0XHRcdHNlY3Rpb25JZFNwYW5zLFxuXHRcdFx0XHRtZXNzYWdlQ2hhbm5lbCxcblx0XHRcdFx0cmVmcmVzaENoYW5uZWwsXG5cdFx0XHRcdGluZGV4Tm8sXG5cdFx0XHRcdGFuY2hvcixcblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSxcblx0XHRcdH0pO1xuXHRcdH19XG5cdFx0dGV4dENvbnRlbnQ9e2dldE1lc3NhZ2UoJ0RlbGV0ZScpfVxuXHQvPlxuKTtcblxuaW50ZXJmYWNlIEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGlua1Byb3BzIHtcblx0c2VjdGlvbklkU3BhbnM6IEVsZW1lbnRbXTtcblx0bWVzc2FnZUNoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdHJlZnJlc2hDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRpbmRleE5vOiBzdHJpbmc7XG5cdGFuY2hvcjogc3RyaW5nO1xuXHR0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlO1xuXHRzZWNBcmM6IHN0cmluZztcblx0c2VjRGVsOiBzdHJpbmc7XG5cdGFyY0xvYzogc3RyaW5nO1xufVxuXG5jb25zdCBBcmNoaXZlQW5kRGVsZXRlU2VjdGlvbkxpbmsgPSAoe1xuXHRzZWN0aW9uSWRTcGFucyxcblx0bWVzc2FnZUNoYW5uZWwsXG5cdHJlZnJlc2hDaGFubmVsLFxuXHRpbmRleE5vLFxuXHRhbmNob3IsXG5cdHRvYXN0aWZ5SW5zdGFuY2UsXG5cdHNlY0FyYyxcblx0c2VjRGVsLFxuXHRhcmNMb2MsXG59OiBBcmNoaXZlQW5kRGVsZXRlU2VjdGlvbkxpbmtQcm9wcykgPT4gKFxuXHQ8U2VjdGlvbklEPlxuXHRcdDw+XG5cdFx0XHR7c2VjQXJjID09PSAnMScgPyAoXG5cdFx0XHRcdDxBcmNoaXZlU2VjdGlvbkxpbmtcblx0XHRcdFx0XHRzZWN0aW9uSWRTcGFucz17c2VjdGlvbklkU3BhbnN9XG5cdFx0XHRcdFx0bWVzc2FnZUNoYW5uZWw9e21lc3NhZ2VDaGFubmVsfVxuXHRcdFx0XHRcdHJlZnJlc2hDaGFubmVsPXtyZWZyZXNoQ2hhbm5lbH1cblx0XHRcdFx0XHRpbmRleE5vPXtpbmRleE5vfVxuXHRcdFx0XHRcdGFuY2hvcj17YW5jaG9yfVxuXHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2U9e3RvYXN0aWZ5SW5zdGFuY2V9XG5cdFx0XHRcdFx0YXJjaGl2ZVRvPXthcmNMb2N9XG5cdFx0XHRcdC8+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8PjwvPlxuXHRcdFx0KX1cblx0XHRcdHtzZWNBcmMgPT09ICcxJyAmJiBzZWNEZWwgPT09ICcxJyA/IDxQaXBlIC8+IDogPD48Lz59XG5cdFx0XHR7c2VjRGVsID09PSAnMScgPyAoXG5cdFx0XHRcdDxSZW1vdmVTZWN0aW9uTGlua1xuXHRcdFx0XHRcdHNlY3Rpb25JZFNwYW5zPXtzZWN0aW9uSWRTcGFuc31cblx0XHRcdFx0XHRtZXNzYWdlQ2hhbm5lbD17bWVzc2FnZUNoYW5uZWx9XG5cdFx0XHRcdFx0cmVmcmVzaENoYW5uZWw9e3JlZnJlc2hDaGFubmVsfVxuXHRcdFx0XHRcdGluZGV4Tm89e2luZGV4Tm99XG5cdFx0XHRcdFx0YW5jaG9yPXthbmNob3J9XG5cdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZT17dG9hc3RpZnlJbnN0YW5jZX1cblx0XHRcdFx0Lz5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDw+PC8+XG5cdFx0XHQpfVxuXHRcdDwvPlxuXHQ8L1NlY3Rpb25JRD5cbik7XG5cbmV4cG9ydCB7QXJjaGl2ZVNlY3Rpb25MaW5rLCBSZW1vdmVTZWN0aW9uTGluaywgQXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rfTtcbiIsICJpbXBvcnQge0FyY2hpdmVBbmREZWxldGVTZWN0aW9uTGlua30gZnJvbSAnLi9jb21wb25lbnRzL3NlY3Rpb25MaW5rJztcbmltcG9ydCB7RWRpdENvbmZsaWN0Tm90aWNlfSBmcm9tICcuL2NvbXBvbmVudHMvcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0U2VjdGlvbnN9IGZyb20gJy4vdXRpbC9nZXRTZWN0aW9uJztcbmltcG9ydCB7cmVmcmVzaH0gZnJvbSAnLi91dGlsL3JlZnJlc2hQYWdlJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBhZGRMaW5rcyA9IGFzeW5jICh7XG5cdGFyY0xldmVsLFxuXHRhcmNMb2MsXG5cdHNlY0FyYyxcblx0c2VjRGVsLFxufToge1xuXHRhcmNMZXZlbDogc3RyaW5nO1xuXHRhcmNMb2M6IHN0cmluZztcblx0c2VjQXJjOiBzdHJpbmc7XG5cdHNlY0RlbDogc3RyaW5nO1xufSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gYXdhaXQgZ2V0U2VjdGlvbnMod2dQYWdlTmFtZSk7XG5cblx0Y29uc3QgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBoJHthcmNMZXZlbH1gKTtcblx0Y29uc3QgaGVhZGxpbmVzID0gW107XG5cdGNvbnN0IGhlYWRpbmdJbmRpY2VzID0gW107XG5cblx0Zm9yIChjb25zdCBoZWFkaW5nIG9mIGhlYWRpbmdzKSB7XG5cdFx0Y29uc3QgaGVhZGxpbmUgPSBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1oZWFkbGluZScpO1xuXHRcdGlmIChoZWFkbGluZSkge1xuXHRcdFx0aGVhZGxpbmVzW2hlYWRsaW5lcy5sZW5ndGhdID0gaGVhZGxpbmUuaWQ7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qgc2VjdGlvbklkU3BhbnM6IEVsZW1lbnRbXSA9IFtdO1xuXHRsZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0XHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxuXHR9O1xuXG5cdGNvbnN0IG1lc3NhZ2VDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoYCR7d2dQYWdlTmFtZX1fbWVzc2FnZWApO1xuXHRjb25zdCByZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKGAke3dnUGFnZU5hbWV9X3JlZnJlc2hgKTtcblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnNUb0FyY2hpdmUpIHtcblx0XHRpZiAoc2VjdGlvbi5sZXZlbCAhPT0gYXJjTGV2ZWwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChoZWFkbGluZXMuaW5jbHVkZXMoc2VjdGlvbi5hbmNob3IpKSB7XG5cdFx0XHRoZWFkaW5nSW5kaWNlc1toZWFkaW5nSW5kaWNlcy5sZW5ndGhdID0ge1xuXHRcdFx0XHRpbmRleE5vOiBzZWN0aW9uLmluZGV4LFxuXHRcdFx0XHRhbmNob3I6IHNlY3Rpb24uYW5jaG9yLFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRmb3IgKGNvbnN0IHtpbmRleE5vLCBhbmNob3J9IG9mIGhlYWRpbmdJbmRpY2VzKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXF1ZXJ5LXNlbGVjdG9yXG5cdFx0Y29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhbmNob3IpO1xuXHRcdGlmICghaGVhZGxpbmUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhcmVudEhlYWRpbmcgPSBoZWFkbGluZS5wYXJlbnRFbGVtZW50O1xuXHRcdGlmICghcGFyZW50SGVhZGluZykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdFNlY3Rpb24gPSBwYXJlbnRIZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdGlmICghZWRpdFNlY3Rpb24pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlY3Rpb25JRFNwYW4gPSAoXG5cdFx0XHQ8QXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rXG5cdFx0XHRcdHNlY3Rpb25JZFNwYW5zPXtzZWN0aW9uSWRTcGFuc31cblx0XHRcdFx0bWVzc2FnZUNoYW5uZWw9e21lc3NhZ2VDaGFubmVsfVxuXHRcdFx0XHRyZWZyZXNoQ2hhbm5lbD17cmVmcmVzaENoYW5uZWx9XG5cdFx0XHRcdGluZGV4Tm89e2luZGV4Tm99XG5cdFx0XHRcdGFuY2hvcj17YW5jaG9yfVxuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlPXt0b2FzdGlmeUluc3RhbmNlfVxuXHRcdFx0XHRhcmNMb2M9e2FyY0xvY31cblx0XHRcdFx0c2VjQXJjPXtzZWNBcmN9XG5cdFx0XHRcdHNlY0RlbD17c2VjRGVsfVxuXHRcdFx0Lz5cblx0XHQpO1xuXG5cdFx0ZWRpdFNlY3Rpb24ucHJlcGVuZChzZWN0aW9uSURTcGFuKTtcblx0XHRzZWN0aW9uSWRTcGFuc1tzZWN0aW9uSWRTcGFucy5sZW5ndGhdID0gc2VjdGlvbklEU3Bhbjtcblx0fVxuXG5cdG1lc3NhZ2VDaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcblx0XHRmb3IgKGNvbnN0IHNwYW4gb2Ygc2VjdGlvbklkU3BhbnMpIHtcblx0XHRcdHNwYW4ucmVtb3ZlKCk7XG5cdFx0fVxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBldmVudC5kYXRhIGFzIHN0cmluZyxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXHR9KTtcblxuXHRyZWZyZXNoQ2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKCkgPT4ge1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHRub2RlOiAoXG5cdFx0XHRcdFx0PEVkaXRDb25mbGljdE5vdGljZVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdFx0XHRyZWZyZXNoKCk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpbmtzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5cbmNvbnN0IGFwcGVuZEZvb3Rlck5vdGljZSA9IChlbGVtZW50OiBFbGVtZW50KSA9PiB7XG5cdGNvbnN0IG1vdW50UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cblx0aWYgKG1vdW50UG9pbnQpIHtcblx0XHRtb3VudFBvaW50LnByZXBlbmQoZWxlbWVudCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7YXBwZW5kRm9vdGVyTm90aWNlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxRQUFRO0FBQ2QsVUFBSSxXQUFXLENBQUM7QUFFaEIsZUFBU0Esa0JBQWlCLFNBQVM7QUFDL0IsWUFBSSxRQUFRO0FBQ1osa0JBQVUsT0FBTyxPQUFPO0FBRXhCLFlBQUksS0FBSyx1QkFBdUIsVUFBVTtBQUUxQyxpQkFBUyxFQUFFLElBQUksU0FBUyxFQUFFLEtBQUssQ0FBQztBQUNoQyxpQkFBUyxFQUFFLEVBQUUsS0FBSyxJQUFJO0FBRXRCLGFBQUssUUFBUTtBQUNiLGFBQUssTUFB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bmFtZXMiOiBbIkJyb2FkY2FzdENoYW5uZWwiLCAiZWxlbWVudElkIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiZm9vdGVyTm90aWNlIiwgInNlY3Rpb25JZFNwYW4iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFyY2hpdmUiLCAibG9jYWxpemUiLCAiZW4iLCAiQXJjaGl2aW5nIiwgIkFyY2hpdmVkIiwgIkRlbGV0ZSIsICJEZWxldGluZyIsICJEZWxldGVkIiwgInpoIiwgIlJlZnJlc2giLCAiUmVmcmVzaGluZyIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic2FuaXRpemUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiRm9vdGVyTm90aWNlIiwgImlkIiwgImNoaWxkcmVuIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiSW5CbGFja0xpc3QiLCAiTm90QWxsb3dlZCIsICJBcmNMb2NOb3RBbGxvd2VkIiwgImFyY0xvYyIsICJOb0FyY0xvYyIsICJFbmFibGVkIiwgInRpdGxlIiwgImhyZWYiLCAiY29uY2F0IiwgIk9uQ2xpY2siLCAidGV4dENvbnRlbnQiLCAib25DbGljayIsICJTZWN0aW9uSUQiLCAiUGlwZSIsICJFZGl0Q29uZmxpY3ROb3RpY2UiLCAiaWZBcmNMb2NOb3RBbGxvd2VkIiwgIndnUGFnZU5hbWUiLCAic291cmNlVGl0bGUiLCAiVGl0bGUiLCAiYXJjTG9jVGl0bGUiLCAiYXJjTG9jTmFtZXNwYWNlSWQiLCAiZ2V0TmFtZXNwYWNlSWQiLCAiYXJjTG9jUGFnZU5hbWUiLCAiZ2V0TWFpbiIsICJzb3VyY2VOYW1lc3BhY2VJZCIsICJzb3VyY2VQYWdlTmFtZSIsICJpc0luQmxhY2tsaXN0IiwgImJsYWNrTGlzdFJlZ2V4QXJyIiwgIl9pIiwgIl9ibGFja0xpc3RSZWdleEFyciIsICJsZW5ndGgiLCAiZWxlbWVudCIsICJ0ZXN0IiwgImlzTm90QWxsb3dlZCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1JlbGV2YW50VXNlck5hbWUiLCAid2dVc2VyTmFtZSIsICJpc05vdFN1cHBvcnRlZCIsICJ3Z0lzTWFpblBhZ2UiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJnZXRTZXR0aW5ncyIsICJzZXR0aW5ncyIsICJkYXRhc2V0IiwgImFyY0xldmVsIiwgInNlY0FyYyIsICJzZWNEZWwiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRTZWN0aW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicGFnZSIsICJwcm9wIiwgInBhcnNlIiwgInNlY3Rpb25zIiwgInNlY3Rpb25zVG9BcmNoaXZlIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInNlY3Rpb24iLCAidmFsdWUiLCAibGV2ZWwiLCAiaW5kZXgiLCAiYW5jaG9yIiwgInN0YXJ0c1dpdGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0U2VjdGlvbkNvbnRlbnQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJHF1ZXJ5JHBhZ2VzIiwgIl9yZXNwb25zZSRxdWVyeSRwYWdlczIiLCAicnZwcm9wIiwgInRpdGxlcyIsICJydnNlY3Rpb24iLCAicnZzbG90cyIsICJyZXNwb25zZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgIl94MiIsICJpc1BhZ2VFeGlzdCIsICJfcmVmMyIsICJhcmNoaXZlVG8iLCAiX3F1ZXJ5JHBhZ2VzJCIsICJxdWVyeSIsICJtaXNzaW5nIiwgIl94MyIsICJpc1NlY3Rpb25FeGlzdCIsICJfcmVmNCIsICJpc0V4aXN0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIl94NCIsICJyZW1vdmVTZWN0aW9uIiwgIl9yZWY1IiwgInN1bW1hcnkiLCAiZWRpdCIsICJ0ZXh0IiwgIm1pbm9yIiwgIl94NSIsICJhcmNoaXZlU2VjdGlvbiIsICJfcmVmNiIsICJwYWdlRXhpc3QiLCAiY3JlYXRlIiwgImFwcGVuZHRleHQiLCAiX3g2IiwgImdldEFyY2hpdmluZ01lc3NhZ2UiLCAiaW5kZXhObyIsICJnZXRBcmNoaXZlZE1lc3NhZ2UiLCAiZ2V0RGVsZXRpbmdNZXNzYWdlIiwgImdldERlbGV0ZWRNZXNzYWdlIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAid2dTY3JpcHQiLCAicmVmcmVzaCIsICJ0YXJnZXRQYWdlIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInV0aWwiLCAiZ2V0VXJsIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJhcmNoaXZlT25DbGljayIsICJfcmVmNyIsICJldmVudCIsICJzZWN0aW9uSWRTcGFucyIsICJtZXNzYWdlQ2hhbm5lbCIsICJyZWZyZXNoQ2hhbm5lbCIsICJfZXZlbnQkdGFyZ2V0IiwgInByZXZlbnREZWZhdWx0IiwgInBhcmVudEVsZW1lbnQiLCAidGFyZ2V0IiwgInJlcGxhY2VDaGlsZHJlbiIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJzcGFuIiwgInJlbW92ZSIsICJtZXNzYWdlMSIsICJwb3N0TWVzc2FnZSIsICJjbG9zZSIsICJtZXNzYWdlIiwgIl94NyIsICJfeDgiLCAicmVtb3ZlT25DbGljayIsICJfcmVmOCIsICJfZXZlbnQkdGFyZ2V0MiIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfeDkiLCAiX3gxMCIsICJpbXBvcnRfZXh0X2dhZGdldDciLCAiQXJjaGl2ZVNlY3Rpb25MaW5rIiwgIlJlbW92ZVNlY3Rpb25MaW5rIiwgIkFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGluayIsICJpbXBvcnRfZXh0X2dhZGdldDgiLCAiaW1wb3J0X2V4dF9nYWRnZXQ5IiwgImFkZExpbmtzIiwgIl9yZWY5IiwgImhlYWRpbmdzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiaGVhZGxpbmVzIiwgImhlYWRpbmdJbmRpY2VzIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImhlYWRpbmciLCAiaGVhZGxpbmUiLCAiQnJvYWRjYXN0Q2hhbm5lbCIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJfaTIiLCAiX2hlYWRpbmdJbmRpY2VzIiwgImdldEVsZW1lbnRCeUlkIiwgInBhcmVudEhlYWRpbmciLCAiZWRpdFNlY3Rpb24iLCAic2VjdGlvbklEU3BhbiIsICJwcmVwZW5kIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiX2kzIiwgIl9zZWN0aW9uSWRTcGFucyIsICJkYXRhIiwgIm5vZGUiLCAiX3gxMSIsICJhcHBlbmRGb290ZXJOb3RpY2UiLCAibW91bnRQb2ludCIsICJlYXN5QXJjaGl2ZSIsICJub3RTdXBwb3J0ZWQiLCAiaW5CbGFja2xpc3QiLCAibm90QWxsb3dlZCIsICJhcmNMb2NOb3RBbGxvd2VkIl0KfQo=
