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
var mountPointSelector = "#footer-info,.page-info";
var version = "1.0";
//! src/EasyArchive/modules/footerNotice.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
//! src/EasyArchive/modules/util/react.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/EasyArchive/modules/util/EasyArchive.module.less
var footerNotice = "EasyArchive-module__footerNotice_UBwzXq";
var sectionIdSpan = "EasyArchive-module__sectionIdSpan_UBwzXq";
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
//! src/EasyArchive/modules/util/react.tsx
var elementWrap = (id, innerElement) => {
  const {
    skin
  } = mw.config.get();
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
      id,
      className: [footerNotice, "page-info__item", "citizen-footer__pageinfo-item"]
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      id,
      className: footerNotice
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id,
    className: footerNotice
  }, innerElement);
};
var onClickWrap = (textContent, className, onClick) => /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  className: ["gadget-easy_archive__link", "gadget-easy_archive__link-".concat(className)],
  onClick,
  textContent
});
var pipeElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  className: "mw-editsection-divider",
  textContent: "|"
});
var sectionIdSpanElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  className: sectionIdSpan
});
var spanWrap = (innerHTML) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  innerHTML
});
var noticeMessage = ({
  onClick
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, getMessage("Edit Confilict Notice"), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  onClick
}, getMessage("Refresh")));
//! src/EasyArchive/modules/footerNotice.tsx
var footerNotice2 = (id, innerElement) => {
  var _document$querySelect;
  const tag = elementWrap(id, innerElement);
  (_document$querySelect = document.querySelectorAll(mountPointSelector)[0]) === null || _document$querySelect === void 0 || _document$querySelect.prepend(tag);
};
var sanitize = (string) => string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
var inBlacklistFooterNotice = () => {
  footerNotice2("easy_archive_not_supported_notice", /* @__PURE__ */ import_ext_gadget3.default.createElement("span", null, getMessage("Easy Archive not supported"), /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null), getMessage("Easy Archive not supported details")));
};
var notAllowededFooterNotice = () => {
  footerNotice2("easy_archive_not_allowed_notice", /* @__PURE__ */ import_ext_gadget3.default.createElement("span", null, getMessage("Easy Archive not allowed")));
};
var noArcLocFooterNotice = () => {
  footerNotice2("easy_archive_no_arc_loc_notice", /* @__PURE__ */ import_ext_gadget3.default.createElement("span", null, getMessage("No Archive Location")));
};
var arcLocNotAllowedFooterNotice = (arcLoc) => {
  footerNotice2("easy_archive_arc_loc_not_allowed_notice", /* @__PURE__ */ import_ext_gadget3.default.createElement("span", null, getMessage("Archive Location not allowed").replace("$1", sanitize(arcLoc)), /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null), getMessage("Archive Location not allowed details")));
};
var enabledFooterNotice = (arcLoc) => {
  footerNotice2("easy_archive_supports_notice", /* @__PURE__ */ import_ext_gadget3.default.createElement("span", null, getMessage("Easy Archive enabled"), getMessage("("), getMessage("Archive location"), /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
    title: sanitize(arcLoc),
    href: "/wiki/".concat(sanitize(arcLoc))
  }, sanitize(arcLoc)), getMessage(")"), getMessage(".")));
};
//! src/EasyArchive/modules/isInDisallowedList.ts
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
//! src/EasyArchive/modules/api.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var api = (0, import_ext_gadget4.initMwApi)("EasyArchive/".concat(version));
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
    var _response$query$pages;
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
    return (_response$query$pages = response["query"].pages[0].revisions[0].slots.main.content) !== null && _response$query$pages !== void 0 ? _response$query$pages : null;
  });
  return function getSectionContent2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/EasyArchive/modules/util/checkIfExist.ts
var checkIfPageExist = /* @__PURE__ */ function() {
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
  return function checkIfPageExist2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var checkIfSectionExist = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* ({
    index,
    anchor
  }) {
    const {
      wgPageName
    } = mw.config.get();
    const sections = yield getSections(wgPageName);
    let ifSectionExist = false;
    var _iterator3 = _createForOfIteratorHelper(sections), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const section = _step3.value;
        if (index === section.index && anchor === section.anchor) {
          ifSectionExist = true;
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return ifSectionExist;
  });
  return function checkIfSectionExist2(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
//! src/EasyArchive/modules/removeSection.ts
var removeSection = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* ({
    index,
    anchor,
    summary
  }) {
    const {
      wgPageName
    } = mw.config.get();
    const ifSectionExist = yield checkIfSectionExist({
      index,
      anchor
    });
    if (ifSectionExist !== true) {
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
//! src/EasyArchive/modules/archiveSection.ts
var archiveSection = /* @__PURE__ */ function() {
  var _ref6 = _asyncToGenerator(function* ({
    index,
    anchor,
    archiveTo
  }) {
    const {
      wgPageName
    } = mw.config.get();
    const ifSectionExist = yield checkIfSectionExist({
      index,
      anchor
    });
    if (ifSectionExist !== true) {
      return;
    }
    const content = yield getSectionContent({
      title: wgPageName,
      section: index
    });
    if (content === null) {
      return;
    }
    const pageExist = yield checkIfPageExist(archiveTo);
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
//! src/EasyArchive/modules/util/refreshPage.ts
var import_ext_gadget5 = require("ext.gadget.Toastify");
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
  toastifyInstance = (0, import_ext_gadget5.toastify)({
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
//! src/EasyArchive/modules/util/replaceChild.ts
var replaceChild = (element, newChild) => {
  while (element.hasChildNodes()) {
    var _element$firstChild;
    (_element$firstChild = element.firstChild) === null || _element$firstChild === void 0 || _element$firstChild.remove();
  }
  element.append(newChild);
};
//! src/EasyArchive/modules/addLinks.ts
var import_ext_gadget6 = require("ext.gadget.Toastify");
var addLinks = /* @__PURE__ */ function() {
  var _ref7 = _asyncToGenerator(function* ({
    arcLevel,
    arcLoc,
    secArc,
    secDel
  }) {
    if (!arcLoc) {
      return;
    }
    const {
      wgPageName
    } = mw.config.get();
    const sectionsToArchive = yield getSections(wgPageName);
    const headings = document.querySelectorAll("h".concat(arcLevel));
    const headlines = [];
    const headingIndices = [];
    var _iterator4 = _createForOfIteratorHelper(headings), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const heading = _step4.value;
        const headline = heading.querySelector(".mw-headline");
        headlines[headlines.length] = headline === null || headline === void 0 ? void 0 : headline.id;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    const sectionIdSpans = [];
    let toastifyInstance = {
      hideToast: () => {
      }
    };
    const messageChannel = new BroadcastChannel("".concat(wgPageName, "_message"));
    const refreshChannel = new BroadcastChannel("".concat(wgPageName, "_refresh"));
    var _iterator5 = _createForOfIteratorHelper(sectionsToArchive), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const section = _step5.value;
        if (section.level !== arcLevel) {
          continue;
        }
        if (headlines.includes(section.anchor)) {
          headingIndices[headingIndices.length] = {
            index: section.index,
            id: section.anchor
          };
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    for (var _i2 = 0, _headingIndices = headingIndices; _i2 < _headingIndices.length; _i2++) {
      const {
        index,
        id
      } = _headingIndices[_i2];
      const headline = document.getElementById(id);
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
      const sectionIdSpan2 = sectionIdSpanElement();
      const archiveSectionLink = ({
        indexNo,
        anchor,
        archiveTo,
        toast
      }) => {
        const archiveOnClick = (event) => {
          var _event$target;
          event.preventDefault();
          const parentElement = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.parentElement;
          if (!parentElement) {
            return;
          }
          replaceChild(parentElement, spanWrap(getMessage("Archiving")));
          var _iterator6 = _createForOfIteratorHelper(sectionIdSpans), _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
              const span = _step6.value;
              span.remove();
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          const message1 = getMessage("Archiving") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
          messageChannel.postMessage(message1);
          toast || (toast = {
            hideToast: () => {
            }
          });
          toast.hideToast();
          toast = (0, import_ext_gadget6.toastify)({
            text: message1,
            close: true,
            duration: -1
          }, "info");
          void archiveSection({
            index: indexNo,
            anchor,
            archiveTo
          }).then(() => {
            replaceChild(parentElement, spanWrap(getMessage("Archived")));
            const message2 = getMessage("Archived") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
            messageChannel.postMessage(message2);
            toast.hideToast();
            toast = (0, import_ext_gadget6.toastify)({
              text: message2,
              close: true,
              duration: -1
            }, "info");
            messageChannel.close();
            refreshChannel.postMessage("Refresh");
            refresh({
              toastifyInstance: toast
            });
          });
        };
        return onClickWrap(getMessage("Archive"), "archive", archiveOnClick);
      };
      const removeSectionLink = ({
        indexNo,
        anchor,
        toast
      }) => {
        const removeOnClick = (event) => {
          var _event$target2;
          event.preventDefault();
          const parentElement = (_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.parentElement;
          if (!parentElement) {
            return;
          }
          replaceChild(parentElement, spanWrap(getMessage("Deleting")));
          var _iterator7 = _createForOfIteratorHelper(sectionIdSpans), _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
              const span = _step7.value;
              span.remove();
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          const message1 = getMessage("Deleting") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
          messageChannel.postMessage(message1);
          toast || (toast = {
            hideToast: () => {
            }
          });
          toast.hideToast();
          toast = (0, import_ext_gadget6.toastify)({
            text: message1,
            close: true,
            duration: -1
          }, "info");
          void removeSection({
            index: indexNo,
            anchor
          }).then(() => {
            replaceChild(parentElement, spanWrap(getMessage("Deleted")));
            const message2 = getMessage("Deleted") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
            messageChannel.postMessage(message2);
            toast.hideToast();
            toast = (0, import_ext_gadget6.toastify)({
              text: message2,
              close: true,
              duration: -1
            }, "info");
            messageChannel.close();
            refreshChannel.postMessage("Refresh");
            refresh({
              toastifyInstance: toast
            });
          });
        };
        return onClickWrap(getMessage("Delete"), "delete", removeOnClick);
      };
      if (secArc === "1" || secDel === "1") {
        if (secArc === "1") {
          const archiveLink = archiveSectionLink({
            indexNo: index,
            anchor: id,
            archiveTo: arcLoc,
            toast: toastifyInstance
          });
          sectionIdSpan2.append(archiveLink);
        }
        if (secArc === "1" && secDel === "1") {
          sectionIdSpan2.append(pipeElement());
        }
        if (secDel === "1") {
          const removeLink = removeSectionLink({
            indexNo: index,
            anchor: id,
            toast: toastifyInstance
          });
          sectionIdSpan2.append(removeLink);
        }
        sectionIdSpans[sectionIdSpans.length] = sectionIdSpan2;
        editSection.prepend(sectionIdSpan2);
      }
    }
    messageChannel.addEventListener("message", (event) => {
      for (var _i3 = 0, _sectionIdSpans = sectionIdSpans; _i3 < _sectionIdSpans.length; _i3++) {
        const span = _sectionIdSpans[_i3];
        span.remove();
      }
      toastifyInstance.hideToast();
      toastifyInstance = (0, import_ext_gadget6.toastify)({
        text: event.data,
        close: true,
        duration: 3 * 1e3
      }, "info");
    });
    refreshChannel.addEventListener("message", () => {
      toastifyInstance.hideToast();
      toastifyInstance = (0, import_ext_gadget6.toastify)({
        node: noticeMessage({
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
  return function addLinks2(_x7) {
    return _ref7.apply(this, arguments);
  };
}();
//! src/EasyArchive/modules/getSettings.ts
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
    arcLoc: arcLoc !== null && arcLoc !== void 0 ? arcLoc : null,
    secArc: secArc !== null && secArc !== void 0 ? secArc : "1",
    secDel: secDel !== null && secDel !== void 0 ? secDel : "1"
  };
};
//! src/EasyArchive/EasyArchive.ts
(function easyArchive() {
  const notSupported = isNotSupported();
  if (notSupported) {
    return;
  }
  const inBlacklist = isInBlacklist();
  if (inBlacklist) {
    inBlacklistFooterNotice();
    return;
  }
  const notAllowed = isNotAllowed();
  if (notAllowed) {
    notAllowededFooterNotice();
    return;
  }
  const settings = getSettings();
  if (!settings) {
    noArcLocFooterNotice();
    return;
  }
  const {
    arcLoc
  } = settings;
  if (!arcLoc) {
    noArcLocFooterNotice();
    return;
  }
  const arcLocNotAllowed = ifArcLocNotAllowed(arcLoc);
  if (arcLocNotAllowed) {
    arcLocNotAllowedFooterNotice(arcLoc);
    return;
  }
  void addLinks(settings);
  enabledFooterNotice(arcLoc);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9mb290ZXJOb3RpY2UudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvcmVhY3QudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvRWFzeUFyY2hpdmUubW9kdWxlLmxlc3MiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9pc0luRGlzYWxsb3dlZExpc3QudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvZ2V0U2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2NoZWNrSWZFeGlzdC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9yZW1vdmVTZWN0aW9uLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2FyY2hpdmVTZWN0aW9uLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvcmVmcmVzaFBhZ2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9yZXBsYWNlQ2hpbGQudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvYWRkTGlua3MudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvZ2V0U2V0dGluZ3MudHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgdmFyIGNoYW5uZWxzID0gW107XG5cbiAgICBmdW5jdGlvbiBCcm9hZGNhc3RDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgY2hhbm5lbCA9IFN0cmluZyhjaGFubmVsKTtcblxuICAgICAgICB2YXIgaWQgPSAnJEJyb2FkY2FzdENoYW5uZWwkJyArIGNoYW5uZWwgKyAnJCc7XG5cbiAgICAgICAgY2hhbm5lbHNbaWRdID0gY2hhbm5lbHNbaWRdIHx8IFtdO1xuICAgICAgICBjaGFubmVsc1tpZF0ucHVzaCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9uYW1lID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX21jID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQxLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQyLnN0YXJ0KCk7XG5cbiAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5zdG9yYWdlQXJlYSAhPT0gZ2xvYmFsLmxvY2FsU3RvcmFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUubmV3VmFsdWUgPT0gbnVsbCB8fCBlLm5ld1ZhbHVlID09PSAnJykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUua2V5LnN1YnN0cmluZygwLCBpZC5sZW5ndGgpICE9PSBpZCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGUubmV3VmFsdWUpO1xuICAgICAgICAgICAgJHRoaXMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBCcm9hZGNhc3RDaGFubmVsLnByb3RvdHlwZSA9IHtcbiAgICAgICAgLy8gQnJvYWRjYXN0Q2hhbm5lbCBBUElcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdE1lc3NhZ2U6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBlLm5hbWUgPSAnSW52YWxpZFN0YXRlRXJyb3InO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIG90aGVyIGNvbnRleHRzIHZpYSBzdG9yYWdlIGV2ZW50cy4uLlxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2lkICsgU3RyaW5nKERhdGUubm93KCkpICsgJyQnICsgU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBjdXJyZW50IGNvbnRleHQgdmlhIHBvcnRzXG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uZm9yRWFjaChmdW5jdGlvbihiYykge1xuICAgICAgICAgICAgICAgIGlmIChiYyA9PT0gJHRoaXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICBiYy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoSlNPTi5wYXJzZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDIuY2xvc2UoKTtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gY2hhbm5lbHNbdGhpcy5faWRdLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBFdmVudFRhcmdldCBBUElcbiAgICAgICAgZ2V0IG9ubWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvbm1lc3NhZ2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKC8qZXZlbnQqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmRpc3BhdGNoRXZlbnQuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsID0gZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgfHwgQnJvYWRjYXN0Q2hhbm5lbDtcbn0pKHNlbGYpO1xuIiwgIntcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2VsZW1lbnRXcmFwfSBmcm9tICcuL3V0aWwvcmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBmb290ZXJOb3RpY2UgPSAoaWQ6IHN0cmluZywgaW5uZXJFbGVtZW50OiBIVE1MRWxlbWVudCB8IFJlYWN0RWxlbWVudCkgPT4ge1xuXHRjb25zdCB0YWcgPSBlbGVtZW50V3JhcChpZCwgaW5uZXJFbGVtZW50KTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpWzBdPy5wcmVwZW5kKHRhZyk7XG59O1xuXG5jb25zdCBzYW5pdGl6ZSA9IChzdHJpbmc6IHN0cmluZykgPT5cblx0c3RyaW5nXG5cdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cbmNvbnN0IGluQmxhY2tsaXN0Rm9vdGVyTm90aWNlID0gKCkgPT4ge1xuXHRmb290ZXJOb3RpY2UoXG5cdFx0J2Vhc3lfYXJjaGl2ZV9ub3Rfc3VwcG9ydGVkX25vdGljZScsXG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQnKX1cblx0XHRcdDxiciAvPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkIGRldGFpbHMnKX1cblx0XHQ8L3NwYW4+XG5cdCk7XG59O1xuXG5jb25zdCBub3RBbGxvd2VkZWRGb290ZXJOb3RpY2UgPSAoKSA9PiB7XG5cdGZvb3Rlck5vdGljZSgnZWFzeV9hcmNoaXZlX25vdF9hbGxvd2VkX25vdGljZScsIDxzcGFuPntnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IGFsbG93ZWQnKX08L3NwYW4+KTtcbn07XG5cbmNvbnN0IG5vQXJjTG9jRm9vdGVyTm90aWNlID0gKCkgPT4ge1xuXHRmb290ZXJOb3RpY2UoJ2Vhc3lfYXJjaGl2ZV9ub19hcmNfbG9jX25vdGljZScsIDxzcGFuPntnZXRNZXNzYWdlKCdObyBBcmNoaXZlIExvY2F0aW9uJyl9PC9zcGFuPik7XG59O1xuXG5jb25zdCBhcmNMb2NOb3RBbGxvd2VkRm9vdGVyTm90aWNlID0gKGFyY0xvYzogc3RyaW5nKSA9PiB7XG5cdGZvb3Rlck5vdGljZShcblx0XHQnZWFzeV9hcmNoaXZlX2FyY19sb2Nfbm90X2FsbG93ZWRfbm90aWNlJyxcblx0XHQ8c3Bhbj5cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkJykucmVwbGFjZSgnJDEnLCBzYW5pdGl6ZShhcmNMb2MpKX1cblx0XHRcdDxiciAvPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQgZGV0YWlscycpfVxuXHRcdDwvc3Bhbj5cblx0KTtcbn07XG5cbmNvbnN0IGVuYWJsZWRGb290ZXJOb3RpY2UgPSAoYXJjTG9jOiBzdHJpbmcpID0+IHtcblx0Zm9vdGVyTm90aWNlKFxuXHRcdCdlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlJyxcblx0XHQ8c3Bhbj5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgZW5hYmxlZCcpfVxuXHRcdFx0e2dldE1lc3NhZ2UoJygnKX1cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIGxvY2F0aW9uJyl9XG5cdFx0XHQ8YSB0aXRsZT17c2FuaXRpemUoYXJjTG9jKX0gaHJlZj17YC93aWtpLyR7c2FuaXRpemUoYXJjTG9jKX1gfT5cblx0XHRcdFx0e3Nhbml0aXplKGFyY0xvYyl9XG5cdFx0XHQ8L2E+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnKScpfVxuXHRcdFx0e2dldE1lc3NhZ2UoJy4nKX1cblx0XHQ8L3NwYW4+XG5cdCk7XG59O1xuXG5leHBvcnQge1xuXHRhcmNMb2NOb3RBbGxvd2VkRm9vdGVyTm90aWNlLFxuXHRlbmFibGVkRm9vdGVyTm90aWNlLFxuXHRpbkJsYWNrbGlzdEZvb3Rlck5vdGljZSxcblx0bm9BcmNMb2NGb290ZXJOb3RpY2UsXG5cdG5vdEFsbG93ZWRlZEZvb3Rlck5vdGljZSxcbn07XG4iLCAiaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Zm9vdGVyTm90aWNlLCBzZWN0aW9uSWRTcGFufSBmcm9tICcuL0Vhc3lBcmNoaXZlLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGVsZW1lbnRXcmFwID0gKGlkOiBzdHJpbmcsIGlubmVyRWxlbWVudDogUmVhY3RFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGlkPXtpZH0gY2xhc3NOYW1lPXtbZm9vdGVyTm90aWNlLCAncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJ119PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgaWQ9e2lkfSBjbGFzc05hbWU9e2Zvb3Rlck5vdGljZX0+XG5cdFx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtmb290ZXJOb3RpY2V9PlxuXHRcdFx0e2lubmVyRWxlbWVudH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IG9uQ2xpY2tXcmFwID0gKHRleHRDb250ZW50OiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nLCBvbkNsaWNrPzogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCkgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzTmFtZT17WydnYWRnZXQtZWFzeV9hcmNoaXZlX19saW5rJywgYGdhZGdldC1lYXN5X2FyY2hpdmVfX2xpbmstJHtjbGFzc05hbWV9YF19XG5cdFx0b25DbGljaz17b25DbGlja31cblx0XHR0ZXh0Q29udGVudD17dGV4dENvbnRlbnR9XG5cdC8+XG4pO1xuXG5jb25zdCBwaXBlRWxlbWVudCA9ICgpID0+IDxzcGFuIGNsYXNzTmFtZT1cIm13LWVkaXRzZWN0aW9uLWRpdmlkZXJcIiB0ZXh0Q29udGVudD17J3wnfSAvPjtcblxuY29uc3Qgc2VjdGlvbklkU3BhbkVsZW1lbnQgPSAoKSA9PiA8c3BhbiBjbGFzc05hbWU9e3NlY3Rpb25JZFNwYW59IC8+O1xuXG5jb25zdCBzcGFuV3JhcCA9IChpbm5lckhUTUw6IHN0cmluZykgPT4gPHNwYW4gaW5uZXJIVE1MPXtpbm5lckhUTUx9IC8+O1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuXHRvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBub3RpY2VNZXNzYWdlID0gKHtvbkNsaWNrfTogUHJvcHMpID0+IChcblx0PHNwYW4+XG5cdFx0e2dldE1lc3NhZ2UoJ0VkaXQgQ29uZmlsaWN0IE5vdGljZScpfVxuXHRcdDxhIG9uQ2xpY2s9e29uQ2xpY2t9PntnZXRNZXNzYWdlKCdSZWZyZXNoJyl9PC9hPlxuXHQ8L3NwYW4+XG4pO1xuXG5leHBvcnQge2VsZW1lbnRXcmFwLCBvbkNsaWNrV3JhcCwgcGlwZUVsZW1lbnQsIHNlY3Rpb25JZFNwYW5FbGVtZW50LCBzcGFuV3JhcCwgbm90aWNlTWVzc2FnZX07XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvRWFzeUFyY2hpdmUubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBmb290ZXJOb3RpY2UgPSBcIkVhc3lBcmNoaXZlLW1vZHVsZV9fZm9vdGVyTm90aWNlX1VCd3pYcVwiO1xuZXhwb3J0IGNvbnN0IHNlY3Rpb25JZFNwYW4gPSBcIkVhc3lBcmNoaXZlLW1vZHVsZV9fc2VjdGlvbklkU3Bhbl9VQnd6WHFcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImZvb3Rlck5vdGljZVwiOiBmb290ZXJOb3RpY2UsXG4gIFwic2VjdGlvbklkU3BhblwiOiBzZWN0aW9uSWRTcGFuXG59O1xuICAgICAgIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBcmNoaXZlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgbG9jYXRpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmUgbG9jYXRpb246ICcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPlnLDlnYDvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU6Iez77yaJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZSBhcmNoaXZlIGxvY2F0aW9uIG9mIHRoaXMgcGFnZSwgXCIkMVwiLCBidXQgRWFzeSBhcmNoaXZlIGNhbm5vdCBvcGVyYXRlIGxpa2UgdGhpcy4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3jgIJFYXN5IEFyY2hpdmUg5peg5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdoueVtuWJjeeahOWtmOaqlOWcsOWdgOaYr+OAjCQx44CN44CCRWFzeSBBcmNoaXZlIOeEoeazleaMieatpOWcsOWdgOWtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQgZGV0YWlscyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZXMgc2hvdWxkIG5vdCBiZSBub3JtYWxseSBkaXJlY3RlZCB0byBwYWdlcyB1bmRlciBhcnRpY2xlIG5hbWVzcGFjZS4gUGxlYXNlIGNoZWNrIGlmIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGFyY2hpdmUgbG9jYXRpb24uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOiIrOiAjOiogO+8jOS4jeW6lOWQkeadoeebruWQjeensOepuumXtOi/m+ihjOWtmOaho+OAguatpOWklu+8jOWtmOaho+WcsOWdgOS4jeW+l+WSjOatpOmhtemdouWQjeensOebuOWQjOOAguivt+ajgOafpeWtmOaho+WcsOWdgOOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDoiKzogIzoqIDvvIzkuI3mh4nlkJHmop3nm67lkI3nqLHnqbrplpPpgLLooYzlrZjmqpTjgILmraTlpJbvvIzlrZjmqpTlnLDlnYDkuI3lvpflkozmraTpoIHpnaLlkI3nqLHnm7jlkIzjgILoq4vmqqLmn6XlrZjmqpTlnLDlnYDjgIInLFxuXHRcdH0pLFxuXHRcdEFyY2hpdmluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZpbmcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOS4rScsXG5cdFx0fSksXG5cdFx0QXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0VkaXQgQ29uZmlsaWN0IE5vdGljZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgYWxyZWFkeSBhcmNoaXZlZCBhbmQvb3IgZGVsZXRlZCBhIHNlY3Rpb24gb24gdGhpcyBwYWdlLiBQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZSBhbmQgY29udGludWUgYXJjaGl2aW5nIG9yIGRlbGV0aW5nIG90aGVyIHNlY3Rpb25zIHRvIGF2b2lkIGVkaXRpbmcgY29uZmxpY3RzLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjlt7Lnu4/lnKjmnKzpobXpnaLmiafooYzkuoblrZjmoaPjgIHliKDpmaTnq6DoioLnmoTmk43kvZzjgILor7fliLfmlrDpobXpnaLvvIznhLblkI7nu6fnu63lrZjmoaPjgIHliKDpmaTmnKzpobXpnaLnmoTlhbbku5bnq6DoioLvvIzku6Xpgb/lhY3nvJbovpHlhrLnqoHjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo5bey57aT5Zyo5pys6aCB6Z2i5Z+36KGM5LqG5a2Y5qqU44CB5Yiq6Zmk56ug56+A55qE5pON5L2c44CC6KuL5Yi35paw6aCB6Z2i77yM54S25b6M57m857qM5a2Y5qqU44CB5Yiq6Zmk5pys6aCB6Z2i55qE5YW25LuW56ug56+A77yM5Lul6YG/5YWN57eo6Lyv6KGd56qB44CCJyxcblx0XHR9KSxcblx0XHREZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaQnLFxuXHRcdH0pLFxuXHRcdERlbGV0aW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RlbGV0aW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOS4rScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTkuK0nLFxuXHRcdH0pLFxuXHRcdERlbGV0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOauteiQvScsXG5cdFx0fSksXG5cdFx0J0NyZWF0ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdjcmVhdGUgYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflu7rnq4vlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bu656uL5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRGVsZXRlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOauteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgZW5hYmxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGlzIGVuYWJsZWQgb24gdGhpcyB0YWxrIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pys6K6o6K666aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgbm90IGFsbG93ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBjYW5ub3QgdXNlIEVhc3kgQXJjaGl2ZSB0byBhcmNoaXZlIHRocmVhZHMgb24gdGhpcyBwYWdlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjkuI3lj6/ku6XlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjkuI3lj6/ku6XlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkIGRldGFpbHMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZXNlIHBhZ2VzIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZTogQXJ0aWNsZSwgRmlsZSwgVGVtcGxhdGUsIE1vZHVsZSwgTWVkaWFXaWtpLCBDYXRlZ29yeSwgU3BlY2lhbCwgSmF2YVNjcmlwdCwgQ1NTLCBKU09OLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfov5nkupvpobXpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8muadoeebruOAgUZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+mAmeS6m+mggemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77ya5qKd55uu77yMRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdH0pLFxuXHRcdCdObyBBcmNoaXZlIExvY2F0aW9uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgY2FuIGJlIHVzZWQgb24gdGhpcyBwYWdlIGlmIG5lZWRlZC4gVG8gZW5hYmxlIGl0LCBhZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdGVtcGxhdGUgdG8gdGhpcyBwYWdlLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfoi6XpnIDopoHvvIzmraTpobXpnaLlj6/ku6XlkK/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOivt+WcqOmhtemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPkvY3nva59feOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfoi6XpnIDopoHvvIzmraTpoIHpnaLlj6/ku6XllZ/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOiri+WcqOmggemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59feOAgicsXG5cdFx0fSksXG5cdFx0J1NlY3Rpb24gJDEnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlY3Rpb24gJDEnLFxuXHRcdFx0emg6ICfnrKwgJDEg56ug6IqCJyxcblx0XHR9KSxcblx0XHQnKCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnICgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdCcpJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHQnLic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdFx0JzonOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzogJyxcblx0XHRcdHpoOiAn77yaJyxcblx0XHR9KSxcblx0XHRSZWZyZXNoOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlZnJlc2ggdGhlIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yi35paw5b2T5YmN6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeaWsOi8ieWFpeeVtuWJjemggScsXG5cdFx0fSksXG5cdFx0UmVmcmVzaGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WNs+WwhuWIt+aWsOW9k+WJjemhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfljbPlsIfph43mlrDovInlhaXnlbbliY3poIHigKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBpZkFyY0xvY05vdEFsbG93ZWQgPSAoYXJjTG9jOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzb3VyY2VUaXRsZSA9IG5ldyBtdy5UaXRsZSh3Z1BhZ2VOYW1lKTtcblx0Y29uc3QgYXJjTG9jVGl0bGUgPSBuZXcgbXcuVGl0bGUoYXJjTG9jKTtcblxuXHRjb25zdCBhcmNMb2NOYW1lc3BhY2VJZCA9IGFyY0xvY1RpdGxlLmdldE5hbWVzcGFjZUlkKCk7XG5cdGNvbnN0IGFyY0xvY1BhZ2VOYW1lID0gYXJjTG9jVGl0bGUuZ2V0TWFpbigpO1xuXHRjb25zdCBzb3VyY2VOYW1lc3BhY2VJZCA9IHNvdXJjZVRpdGxlLmdldE5hbWVzcGFjZUlkKCk7XG5cdGNvbnN0IHNvdXJjZVBhZ2VOYW1lID0gc291cmNlVGl0bGUuZ2V0TWFpbigpO1xuXG5cdGlmIChhcmNMb2NOYW1lc3BhY2VJZCA9PT0gMCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSBzb3VyY2VOYW1lc3BhY2VJZCAmJiBhcmNMb2NQYWdlTmFtZSA9PT0gc291cmNlUGFnZU5hbWUpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzSW5CbGFja2xpc3QgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBibGFja0xpc3RSZWdleEFyciA9IFtcblx0XHQvXkZpbGU6LiokLyxcblx0XHQvXk1lZGlhV2lraTouKiQvLFxuXHRcdC9eTW9kdWxlOi4qJC8sXG5cdFx0L15DYXRlZ29yeTouKiQvLFxuXHRcdC9eVGVtcGxhdGU6LiokLyxcblx0XHQvXlNwZWNpYWw6LiokLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmNzcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzb24kLyxcblx0XTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmxhY2tMaXN0UmVnZXhBcnIpIHtcblx0XHRpZiAoZWxlbWVudC50ZXN0KHdnUGFnZU5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc05vdEFsbG93ZWQgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dSZWxldmFudFVzZXJOYW1lLCB3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoKHdnTmFtZXNwYWNlTnVtYmVyID09PSAyIHx8IHdnTmFtZXNwYWNlTnVtYmVyID09PSAzKSAmJiAhKHdnUmVsZXZhbnRVc2VyTmFtZSA9PT0gd2dVc2VyTmFtZSkpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBpc05vdFN1cHBvcnRlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnSXNNYWluUGFnZSwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnQ3VyUmV2aXNpb25JZCwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwIHx8IHdnQ3VyUmV2aXNpb25JZCAtIHdnUmV2aXNpb25JZCAhPT0gMCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwIHx8IHdnSXNNYWluUGFnZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHtpZkFyY0xvY05vdEFsbG93ZWQsIGlzSW5CbGFja2xpc3QsIGlzTm90QWxsb3dlZCwgaXNOb3RTdXBwb3J0ZWR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgRWFzeUFyY2hpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcblxuY29uc3QgZ2V0U2VjdGlvbnMgPSBhc3luYyAodGl0bGU6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cGFnZTogdGl0bGUsXG5cdFx0cHJvcDogJ3NlY3Rpb25zJyxcblx0fTtcblxuXHRjb25zdCB7cGFyc2V9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRjb25zdCB7c2VjdGlvbnN9ID0gcGFyc2UgYXMge1xuXHRcdHNlY3Rpb25zOiB7XG5cdFx0XHRsZXZlbDogc3RyaW5nO1xuXHRcdFx0aW5kZXg6IHN0cmluZztcblx0XHRcdGFuY2hvcjogc3RyaW5nO1xuXHRcdH1bXTtcblx0fTtcblxuXHRjb25zdCBzZWN0aW9uc1RvQXJjaGl2ZSA9IFtdO1xuXG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuXHRcdGNvbnN0IHtsZXZlbCwgaW5kZXgsIGFuY2hvcn0gPSBzZWN0aW9uO1xuXG5cdFx0aWYgKGluZGV4LnN0YXJ0c1dpdGgoJ1QtJykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHNlY3Rpb25zVG9BcmNoaXZlW3NlY3Rpb25zVG9BcmNoaXZlLmxlbmd0aF0gPSB7XG5cdFx0XHRsZXZlbCxcblx0XHRcdGluZGV4LFxuXHRcdFx0YW5jaG9yLFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gc2VjdGlvbnNUb0FyY2hpdmU7XG59O1xuXG5jb25zdCBnZXRTZWN0aW9uQ29udGVudCA9IGFzeW5jICh7dGl0bGUsIHNlY3Rpb259OiB7dGl0bGU6IHN0cmluZzsgc2VjdGlvbjogc3RyaW5nfSk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRydnNlY3Rpb246IHNlY3Rpb24sXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiAocmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW4uY29udGVudCBhcyBzdHJpbmcpID8/IG51bGw7XG59O1xuXG5leHBvcnQge2dldFNlY3Rpb25zLCBnZXRTZWN0aW9uQ29udGVudH07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldFNlY3Rpb25zfSBmcm9tICcuL2dldFNlY3Rpb24nO1xuXG5jb25zdCBjaGVja0lmUGFnZUV4aXN0ID0gYXN5bmMgKGFyY2hpdmVUbzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbmZvUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2luZm8nLFxuXHRcdHRpdGxlczogYXJjaGl2ZVRvLFxuXHR9O1xuXG5cdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0aWYgKHF1ZXJ5LnBhZ2VzWzBdPy5taXNzaW5nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgY2hlY2tJZlNlY3Rpb25FeGlzdCA9IGFzeW5jICh7aW5kZXgsIGFuY2hvcn06IHtpbmRleDogc3RyaW5nOyBhbmNob3I6IHN0cmluZ30pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9ucyA9IGF3YWl0IGdldFNlY3Rpb25zKHdnUGFnZU5hbWUpO1xuXG5cdGxldCBpZlNlY3Rpb25FeGlzdCA9IGZhbHNlO1xuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRpZiAoaW5kZXggPT09IHNlY3Rpb24uaW5kZXggJiYgYW5jaG9yID09PSBzZWN0aW9uLmFuY2hvcikge1xuXHRcdFx0aWZTZWN0aW9uRXhpc3QgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gaWZTZWN0aW9uRXhpc3Q7XG59O1xuXG5leHBvcnQge2NoZWNrSWZTZWN0aW9uRXhpc3QsIGNoZWNrSWZQYWdlRXhpc3R9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2NoZWNrSWZTZWN0aW9uRXhpc3R9IGZyb20gJy4vdXRpbC9jaGVja0lmRXhpc3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtnZXRTZWN0aW9uQ29udGVudH0gZnJvbSAnLi91dGlsL2dldFNlY3Rpb24nO1xuXG5jb25zdCByZW1vdmVTZWN0aW9uID0gYXN5bmMgKHtpbmRleCwgYW5jaG9yLCBzdW1tYXJ5fToge2luZGV4OiBzdHJpbmc7IGFuY2hvcjogc3RyaW5nOyBzdW1tYXJ5Pzogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlmU2VjdGlvbkV4aXN0ID0gYXdhaXQgY2hlY2tJZlNlY3Rpb25FeGlzdCh7aW5kZXgsIGFuY2hvcn0pO1xuXG5cdGlmIChpZlNlY3Rpb25FeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh7dGl0bGU6IHdnUGFnZU5hbWUsIHNlY3Rpb246IGluZGV4fSk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCBhcGkuZWRpdCh3Z1BhZ2VOYW1lLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlY3Rpb246IGluZGV4LFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRzdW1tYXJ5OiBzdW1tYXJ5ID8/IGdldE1lc3NhZ2UoJ0RlbGV0ZSBzdW1tYXJ5JyksXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7cmVtb3ZlU2VjdGlvbn07XG4iLCAiaW1wb3J0IHtjaGVja0lmUGFnZUV4aXN0LCBjaGVja0lmU2VjdGlvbkV4aXN0fSBmcm9tICcuL3V0aWwvY2hlY2tJZkV4aXN0JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNlY3Rpb25Db250ZW50fSBmcm9tICcuL3V0aWwvZ2V0U2VjdGlvbic7XG5pbXBvcnQge3JlbW92ZVNlY3Rpb259IGZyb20gJy4vcmVtb3ZlU2VjdGlvbic7XG5cbmNvbnN0IGFyY2hpdmVTZWN0aW9uID0gYXN5bmMgKHtpbmRleCwgYW5jaG9yLCBhcmNoaXZlVG99OiB7aW5kZXg6IHN0cmluZzsgYW5jaG9yOiBzdHJpbmc7IGFyY2hpdmVUbzogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlmU2VjdGlvbkV4aXN0ID0gYXdhaXQgY2hlY2tJZlNlY3Rpb25FeGlzdCh7aW5kZXgsIGFuY2hvcn0pO1xuXG5cdGlmIChpZlNlY3Rpb25FeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh7dGl0bGU6IHdnUGFnZU5hbWUsIHNlY3Rpb246IGluZGV4fSk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYWdlRXhpc3QgPSBhd2FpdCBjaGVja0lmUGFnZUV4aXN0KGFyY2hpdmVUbyk7XG5cdGlmICghcGFnZUV4aXN0KSB7XG5cdFx0YXdhaXQgYXBpLmNyZWF0ZShcblx0XHRcdGFyY2hpdmVUbyxcblx0XHRcdHtcblx0XHRcdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnQ3JlYXRlIHN1bW1hcnknKSxcblx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0J3t7dGFsa2FyY2hpdmV9fSdcblx0XHQpO1xuXHR9XG5cblx0YXdhaXQgYXBpLmVkaXQoYXJjaGl2ZVRvLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFwcGVuZHRleHQ6IGBcXG5cXG4ke2NvbnRlbnR9YCxcblx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG5cblx0YXdhaXQgcmVtb3ZlU2VjdGlvbih7aW5kZXgsIGFuY2hvciwgc3VtbWFyeTogZ2V0TWVzc2FnZSgnQXJjaGl2ZSBzdW1tYXJ5Jyl9KTtcbn07XG5cbmV4cG9ydCB7YXJjaGl2ZVNlY3Rpb259O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qge3dnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgcmVmcmVzaCA9ICh7XG5cdHRhcmdldFBhZ2UsXG5cdHRvYXN0aWZ5SW5zdGFuY2UsXG59OiB7dGFyZ2V0UGFnZT86IHN0cmluZzsgdG9hc3RpZnlJbnN0YW5jZT86IFRvYXN0aWZ5SW5zdGFuY2V9ID0ge30pOiB2b2lkID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZSB8fD0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdSZWZyZXNoaW5nJyksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxvY2F0aW9uLnJlcGxhY2UoXG5cdFx0bXcudXRpbC5nZXRVcmwod2dTY3JpcHQsIHtcblx0XHRcdHRpdGxlOiB0YXJnZXRQYWdlID8/IHdnUGFnZU5hbWUsXG5cdFx0fSlcblx0KTtcbn07XG5cbmV4cG9ydCB7cmVmcmVzaH07XG4iLCAiY29uc3QgcmVwbGFjZUNoaWxkID0gKGVsZW1lbnQ6IEVsZW1lbnQsIG5ld0NoaWxkOiBFbGVtZW50KTogdm9pZCA9PiB7XG5cdHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdGVsZW1lbnQuZmlyc3RDaGlsZD8ucmVtb3ZlKCk7XG5cdH1cblx0ZWxlbWVudC5hcHBlbmQobmV3Q2hpbGQpO1xufTtcblxuZXhwb3J0IHtyZXBsYWNlQ2hpbGR9O1xuIiwgImltcG9ydCB7bm90aWNlTWVzc2FnZSwgb25DbGlja1dyYXAsIHBpcGVFbGVtZW50LCBzZWN0aW9uSWRTcGFuRWxlbWVudCwgc3BhbldyYXB9IGZyb20gJy4vdXRpbC9yZWFjdCc7XG5pbXBvcnQge3R5cGUgUmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YXJjaGl2ZVNlY3Rpb259IGZyb20gJy4vYXJjaGl2ZVNlY3Rpb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtnZXRTZWN0aW9uc30gZnJvbSAnLi91dGlsL2dldFNlY3Rpb24nO1xuaW1wb3J0IHtyZWZyZXNofSBmcm9tICcuL3V0aWwvcmVmcmVzaFBhZ2UnO1xuaW1wb3J0IHtyZW1vdmVTZWN0aW9ufSBmcm9tICcuL3JlbW92ZVNlY3Rpb24nO1xuaW1wb3J0IHtyZXBsYWNlQ2hpbGR9IGZyb20gJy4vdXRpbC9yZXBsYWNlQ2hpbGQnO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGFkZExpbmtzID0gYXN5bmMgKHtcblx0YXJjTGV2ZWwsXG5cdGFyY0xvYyxcblx0c2VjQXJjLFxuXHRzZWNEZWwsXG59OiB7XG5cdGFyY0xldmVsOiBzdHJpbmc7XG5cdGFyY0xvYzogc3RyaW5nIHwgbnVsbDtcblx0c2VjQXJjOiBzdHJpbmc7XG5cdHNlY0RlbDogc3RyaW5nO1xufSkgPT4ge1xuXHRpZiAoIWFyY0xvYykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRjb25zdCBoZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGgke2FyY0xldmVsfWApO1xuXHRjb25zdCBoZWFkbGluZXMgPSBbXTtcblx0Y29uc3QgaGVhZGluZ0luZGljZXMgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGhlYWRpbmcgb2YgaGVhZGluZ3MpIHtcblx0XHRjb25zdCBoZWFkbGluZSA9IGhlYWRpbmcucXVlcnlTZWxlY3RvcignLm13LWhlYWRsaW5lJyk7XG5cdFx0aGVhZGxpbmVzW2hlYWRsaW5lcy5sZW5ndGhdID0gaGVhZGxpbmU/LmlkO1xuXHR9XG5cblx0Y29uc3Qgc2VjdGlvbklkU3BhbnM6IFJlYWN0RWxlbWVudFtdID0gW107XG5cdGxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cblx0Y29uc3QgbWVzc2FnZUNoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChgJHt3Z1BhZ2VOYW1lfV9tZXNzYWdlYCk7XG5cdGNvbnN0IHJlZnJlc2hDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoYCR7d2dQYWdlTmFtZX1fcmVmcmVzaGApO1xuXG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9uc1RvQXJjaGl2ZSkge1xuXHRcdGlmIChzZWN0aW9uLmxldmVsICE9PSBhcmNMZXZlbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGhlYWRsaW5lcy5pbmNsdWRlcyhzZWN0aW9uLmFuY2hvcikpIHtcblx0XHRcdGhlYWRpbmdJbmRpY2VzW2hlYWRpbmdJbmRpY2VzLmxlbmd0aF0gPSB7XG5cdFx0XHRcdGluZGV4OiBzZWN0aW9uLmluZGV4LFxuXHRcdFx0XHRpZDogc2VjdGlvbi5hbmNob3IsXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdGZvciAoY29uc3Qge2luZGV4LCBpZH0gb2YgaGVhZGluZ0luZGljZXMpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItcXVlcnktc2VsZWN0b3Jcblx0XHRjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0XHRpZiAoIWhlYWRsaW5lKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBwYXJlbnRIZWFkaW5nID0gaGVhZGxpbmUucGFyZW50RWxlbWVudDtcblx0XHRpZiAoIXBhcmVudEhlYWRpbmcpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVkaXRTZWN0aW9uID0gcGFyZW50SGVhZGluZy5xdWVyeVNlbGVjdG9yKCcubXctZWRpdHNlY3Rpb24nKTtcblx0XHRpZiAoIWVkaXRTZWN0aW9uKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBzZWN0aW9uSWRTcGFuID0gc2VjdGlvbklkU3BhbkVsZW1lbnQoKTtcblx0XHRjb25zdCBhcmNoaXZlU2VjdGlvbkxpbmsgPSAoe1xuXHRcdFx0aW5kZXhObyxcblx0XHRcdGFuY2hvcixcblx0XHRcdGFyY2hpdmVUbyxcblx0XHRcdHRvYXN0LFxuXHRcdH06IHtcblx0XHRcdGluZGV4Tm86IHN0cmluZztcblx0XHRcdGFuY2hvcjogc3RyaW5nO1xuXHRcdFx0YXJjaGl2ZVRvOiBzdHJpbmc7XG5cdFx0XHR0b2FzdDogVG9hc3RpZnlJbnN0YW5jZTtcblx0XHR9KSA9PiB7XG5cdFx0XHRjb25zdCBhcmNoaXZlT25DbGljayA9IChldmVudDogRXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Y29uc3QgcGFyZW50RWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpPy5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRpZiAoIXBhcmVudEVsZW1lbnQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXBsYWNlQ2hpbGQocGFyZW50RWxlbWVudCwgc3BhbldyYXAoZ2V0TWVzc2FnZSgnQXJjaGl2aW5nJykpKTtcblx0XHRcdFx0Zm9yIChjb25zdCBzcGFuIG9mIHNlY3Rpb25JZFNwYW5zKSB7XG5cdFx0XHRcdFx0c3Bhbi5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBtZXNzYWdlMSA9XG5cdFx0XHRcdFx0Z2V0TWVzc2FnZSgnQXJjaGl2aW5nJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcblx0XHRcdFx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UobWVzc2FnZTEpO1xuXG5cdFx0XHRcdHRvYXN0IHx8PSB7XG5cdFx0XHRcdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0dG9hc3QuaGlkZVRvYXN0KCk7XG5cdFx0XHRcdHRvYXN0ID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogbWVzc2FnZTEsXG5cdFx0XHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdpbmZvJ1xuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHZvaWQgYXJjaGl2ZVNlY3Rpb24oe2luZGV4OiBpbmRleE5vLCBhbmNob3IsIGFyY2hpdmVUb30pLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdHJlcGxhY2VDaGlsZChwYXJlbnRFbGVtZW50LCBzcGFuV3JhcChnZXRNZXNzYWdlKCdBcmNoaXZlZCcpKSk7XG5cdFx0XHRcdFx0Y29uc3QgbWVzc2FnZTIgPVxuXHRcdFx0XHRcdFx0Z2V0TWVzc2FnZSgnQXJjaGl2ZWQnKSArIGdldE1lc3NhZ2UoJzonKSArIGdldE1lc3NhZ2UoJ1NlY3Rpb24gJDEnKS5yZXBsYWNlKCckMScsIGluZGV4Tm8pO1xuXHRcdFx0XHRcdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UyKTtcblx0XHRcdFx0XHR0b2FzdC5oaWRlVG9hc3QoKTtcblx0XHRcdFx0XHR0b2FzdCA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBtZXNzYWdlMixcblx0XHRcdFx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQnaW5mbydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdG1lc3NhZ2VDaGFubmVsLmNsb3NlKCk7XG5cdFx0XHRcdFx0cmVmcmVzaENoYW5uZWwucG9zdE1lc3NhZ2UoJ1JlZnJlc2gnKTtcblx0XHRcdFx0XHRyZWZyZXNoKHt0b2FzdGlmeUluc3RhbmNlOiB0b2FzdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gb25DbGlja1dyYXAoZ2V0TWVzc2FnZSgnQXJjaGl2ZScpLCAnYXJjaGl2ZScsIGFyY2hpdmVPbkNsaWNrKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgcmVtb3ZlU2VjdGlvbkxpbmsgPSAoe1xuXHRcdFx0aW5kZXhObyxcblx0XHRcdGFuY2hvcixcblx0XHRcdHRvYXN0LFxuXHRcdH06IHtcblx0XHRcdGluZGV4Tm86IHN0cmluZztcblx0XHRcdGFuY2hvcjogc3RyaW5nO1xuXHRcdFx0dG9hc3Q6IFRvYXN0aWZ5SW5zdGFuY2U7XG5cdFx0fSkgPT4ge1xuXHRcdFx0Y29uc3QgcmVtb3ZlT25DbGljayA9IChldmVudDogRXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Y29uc3QgcGFyZW50RWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpPy5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRpZiAoIXBhcmVudEVsZW1lbnQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXBsYWNlQ2hpbGQocGFyZW50RWxlbWVudCwgc3BhbldyYXAoZ2V0TWVzc2FnZSgnRGVsZXRpbmcnKSkpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHNwYW4gb2Ygc2VjdGlvbklkU3BhbnMpIHtcblx0XHRcdFx0XHRzcGFuLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IG1lc3NhZ2UxID1cblx0XHRcdFx0XHRnZXRNZXNzYWdlKCdEZWxldGluZycpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG5cdFx0XHRcdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UxKTtcblxuXHRcdFx0XHR0b2FzdCB8fD0ge1xuXHRcdFx0XHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdFx0XHRcdH07XG5cdFx0XHRcdHRvYXN0LmhpZGVUb2FzdCgpO1xuXHRcdFx0XHR0b2FzdCA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IG1lc3NhZ2UxLFxuXHRcdFx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQnaW5mbydcblx0XHRcdFx0KTtcblxuXHRcdFx0XHR2b2lkIHJlbW92ZVNlY3Rpb24oe2luZGV4OiBpbmRleE5vLCBhbmNob3J9KS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRyZXBsYWNlQ2hpbGQocGFyZW50RWxlbWVudCwgc3BhbldyYXAoZ2V0TWVzc2FnZSgnRGVsZXRlZCcpKSk7XG5cdFx0XHRcdFx0Y29uc3QgbWVzc2FnZTIgPVxuXHRcdFx0XHRcdFx0Z2V0TWVzc2FnZSgnRGVsZXRlZCcpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG5cdFx0XHRcdFx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UobWVzc2FnZTIpO1xuXHRcdFx0XHRcdHRvYXN0LmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdHRvYXN0ID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IG1lc3NhZ2UyLFxuXHRcdFx0XHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCdpbmZvJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0bWVzc2FnZUNoYW5uZWwuY2xvc2UoKTtcblx0XHRcdFx0XHRyZWZyZXNoQ2hhbm5lbC5wb3N0TWVzc2FnZSgnUmVmcmVzaCcpO1xuXHRcdFx0XHRcdHJlZnJlc2goe3RvYXN0aWZ5SW5zdGFuY2U6IHRvYXN0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdHJldHVybiBvbkNsaWNrV3JhcChnZXRNZXNzYWdlKCdEZWxldGUnKSwgJ2RlbGV0ZScsIHJlbW92ZU9uQ2xpY2spO1xuXHRcdH07XG5cblx0XHRpZiAoc2VjQXJjID09PSAnMScgfHwgc2VjRGVsID09PSAnMScpIHtcblx0XHRcdGlmIChzZWNBcmMgPT09ICcxJykge1xuXHRcdFx0XHRjb25zdCBhcmNoaXZlTGluayA9IGFyY2hpdmVTZWN0aW9uTGluayh7XG5cdFx0XHRcdFx0aW5kZXhObzogaW5kZXgsXG5cdFx0XHRcdFx0YW5jaG9yOiBpZCxcblx0XHRcdFx0XHRhcmNoaXZlVG86IGFyY0xvYyxcblx0XHRcdFx0XHR0b2FzdDogdG9hc3RpZnlJbnN0YW5jZSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHNlY3Rpb25JZFNwYW4uYXBwZW5kKGFyY2hpdmVMaW5rKTtcblx0XHRcdH1cblx0XHRcdGlmIChzZWNBcmMgPT09ICcxJyAmJiBzZWNEZWwgPT09ICcxJykge1xuXHRcdFx0XHRzZWN0aW9uSWRTcGFuLmFwcGVuZChwaXBlRWxlbWVudCgpKTtcblx0XHRcdH1cblx0XHRcdGlmIChzZWNEZWwgPT09ICcxJykge1xuXHRcdFx0XHRjb25zdCByZW1vdmVMaW5rID0gcmVtb3ZlU2VjdGlvbkxpbmsoe2luZGV4Tm86IGluZGV4LCBhbmNob3I6IGlkLCB0b2FzdDogdG9hc3RpZnlJbnN0YW5jZX0pO1xuXHRcdFx0XHRzZWN0aW9uSWRTcGFuLmFwcGVuZChyZW1vdmVMaW5rKTtcblx0XHRcdH1cblx0XHRcdHNlY3Rpb25JZFNwYW5zW3NlY3Rpb25JZFNwYW5zLmxlbmd0aF0gPSBzZWN0aW9uSWRTcGFuO1xuXHRcdFx0ZWRpdFNlY3Rpb24ucHJlcGVuZChzZWN0aW9uSWRTcGFuKTtcblx0XHR9XG5cdH1cblxuXHRtZXNzYWdlQ2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG5cdFx0Zm9yIChjb25zdCBzcGFuIG9mIHNlY3Rpb25JZFNwYW5zKSB7XG5cdFx0XHRzcGFuLnJlbW92ZSgpO1xuXHRcdH1cblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZXZlbnQuZGF0YSBhcyBzdHJpbmcsXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0fSk7XG5cblx0cmVmcmVzaENoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICgpID0+IHtcblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0bm9kZTogbm90aWNlTWVzc2FnZSh7XG5cdFx0XHRcdFx0b25DbGljazogKCkgPT4ge1xuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdFx0XHRcdHJlZnJlc2goKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlua3N9O1xuIiwgImNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHtkYXRhc2V0fSA9IHNldHRpbmdzO1xuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gZGF0YXNldDtcblx0cmV0dXJuIHtcblx0XHRhcmNMZXZlbDogYXJjTGV2ZWwgPz8gJzInLFxuXHRcdGFyY0xvYzogYXJjTG9jID8/IG51bGwsXG5cdFx0c2VjQXJjOiBzZWNBcmMgPz8gJzEnLFxuXHRcdHNlY0RlbDogc2VjRGVsID8/ICcxJyxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2V0U2V0dGluZ3N9O1xuIiwgImltcG9ydCB7XG5cdGFyY0xvY05vdEFsbG93ZWRGb290ZXJOb3RpY2UsXG5cdGVuYWJsZWRGb290ZXJOb3RpY2UsXG5cdGluQmxhY2tsaXN0Rm9vdGVyTm90aWNlLFxuXHRub0FyY0xvY0Zvb3Rlck5vdGljZSxcblx0bm90QWxsb3dlZGVkRm9vdGVyTm90aWNlLFxufSBmcm9tICcuL21vZHVsZXMvZm9vdGVyTm90aWNlJztcbmltcG9ydCB7aWZBcmNMb2NOb3RBbGxvd2VkLCBpc0luQmxhY2tsaXN0LCBpc05vdEFsbG93ZWQsIGlzTm90U3VwcG9ydGVkfSBmcm9tICcuL21vZHVsZXMvaXNJbkRpc2FsbG93ZWRMaXN0JztcbmltcG9ydCB7YWRkTGlua3N9IGZyb20gJy4vbW9kdWxlcy9hZGRMaW5rcyc7XG5pbXBvcnQge2dldFNldHRpbmdzfSBmcm9tICcuL21vZHVsZXMvZ2V0U2V0dGluZ3MnO1xuXG4oZnVuY3Rpb24gZWFzeUFyY2hpdmUoKSB7XG5cdGNvbnN0IG5vdFN1cHBvcnRlZCA9IGlzTm90U3VwcG9ydGVkKCk7XG5cdGlmIChub3RTdXBwb3J0ZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpbkJsYWNrbGlzdCA9IGlzSW5CbGFja2xpc3QoKTtcblx0aWYgKGluQmxhY2tsaXN0KSB7XG5cdFx0aW5CbGFja2xpc3RGb290ZXJOb3RpY2UoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBub3RBbGxvd2VkID0gaXNOb3RBbGxvd2VkKCk7XG5cdGlmIChub3RBbGxvd2VkKSB7XG5cdFx0bm90QWxsb3dlZGVkRm9vdGVyTm90aWNlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpO1xuXHRpZiAoIXNldHRpbmdzKSB7XG5cdFx0bm9BcmNMb2NGb290ZXJOb3RpY2UoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7YXJjTG9jfSA9IHNldHRpbmdzO1xuXHRpZiAoIWFyY0xvYykge1xuXHRcdG5vQXJjTG9jRm9vdGVyTm90aWNlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYXJjTG9jTm90QWxsb3dlZCA9IGlmQXJjTG9jTm90QWxsb3dlZChhcmNMb2MpO1xuXHRpZiAoYXJjTG9jTm90QWxsb3dlZCkge1xuXHRcdGFyY0xvY05vdEFsbG93ZWRGb290ZXJOb3RpY2UoYXJjTG9jKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGFkZExpbmtzKHNldHRpbmdzKTtcblx0ZW5hYmxlZEZvb3Rlck5vdGljZShhcmNMb2MpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxRQUFRO0FBQ2QsVUFBSSxXQUFXLENBQUM7QUFFaEIsZUFBU0Esa0JBQWlCLFNBQVM7QUFDL0IsWUFBSSxRQUFRO0FBQ1osa0JBQVUsT0FBTyxPQUFPO0FBRXhCLFlBQUksS0FBSyx1QkFBdUIsVUFBVTtBQUUxQyxpQkFBUyxFQUFFLElBQUksU0FBUyxFQUFFLEtBQUssQ0FBQztBQUNoQyxpQkFBUyxFQUFFLEVBQUUsS0FBSyxJQUFJO0FBRXRCLGFBQUssUUFBUTtBQUNiLGFBQUssTUFBTTtBQUNYLGFBQUssVUFBVTtBQUNmLGFBQUssTUFBTSxJQUFJLGVBQWU7QUFDOUIsYUFBSyxJQUFJLE1BQU0sTUFBTTtBQUNyQixhQUFLLElBQUksTUFBTSxNQUFNO0FBRXJCLGVBQU8saUJBQWlCLFdBQVcsU0FBUyxHQUFHO0FBQzNDLGNBQUksRUFBRSxnQkFBZ0IsT0FBTyxhQUFjO0FBQzNDLGNBQUksRUFBRSxZQUFZLFFBQVEsRUFBRSxh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TztFQUNSO0FBRUEsUUFBTTtJQUFDQztFQUFPLElBQUlEO0FBQ2xCLFFBQU07SUFBQ3JEO0lBQVU1SDtJQUFRNkg7SUFBUUM7RUFBTSxJQUFJb0Q7QUFDM0MsU0FBTztJQUNOdEQsVUFBVUEsYUFBQSxRQUFBQSxhQUFBLFNBQUFBLFdBQVk7SUFDdEI1SCxRQUFRQSxXQUFBLFFBQUFBLFdBQUEsU0FBQUEsU0FBVTtJQUNsQjZILFFBQVFBLFdBQUEsUUFBQUEsV0FBQSxTQUFBQSxTQUFVO0lBQ2xCQyxRQUFRQSxXQUFBLFFBQUFBLFdBQUEsU0FBQUEsU0FBVTtFQUNuQjtBQUNEOztDQ0hDLFNBQVNxRCxjQUFjO0FBQ3ZCLFFBQU1DLGVBQWUxSixlQUFlO0FBQ3BDLE1BQUkwSixjQUFjO0FBQ2pCO0VBQ0Q7QUFFQSxRQUFNQyxjQUFjdEssY0FBYztBQUNsQyxNQUFJc0ssYUFBYTtBQUNoQnpMLDRCQUF3QjtBQUN4QjtFQUNEO0FBRUEsUUFBTTBMLGFBQWFoSyxhQUFhO0FBQ2hDLE1BQUlnSyxZQUFZO0FBQ2Z6TCw2QkFBeUI7QUFDekI7RUFDRDtBQUVBLFFBQU1vTCxXQUFXRCxZQUFZO0FBQzdCLE1BQUksQ0FBQ0MsVUFBVTtBQUNkbkwseUJBQXFCO0FBQ3JCO0VBQ0Q7QUFFQSxRQUFNO0lBQUNFO0VBQU0sSUFBSWlMO0FBQ2pCLE1BQUksQ0FBQ2pMLFFBQVE7QUFDWkYseUJBQXFCO0FBQ3JCO0VBQ0Q7QUFFQSxRQUFNeUwsbUJBQW1CbkwsbUJBQW1CSixNQUFNO0FBQ2xELE1BQUl1TCxrQkFBa0I7QUFDckJ4TCxpQ0FBNkJDLE1BQU07QUFDbkM7RUFDRDtBQUVBLE9BQUswSCxTQUFTdUQsUUFBUTtBQUN0QmhMLHNCQUFvQkQsTUFBTTtBQUMzQixHQUFHOyIsCiAgIm5hbWVzIjogWyJCcm9hZGNhc3RDaGFubmVsIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImZvb3Rlck5vdGljZSIsICJzZWN0aW9uSWRTcGFuIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBcmNoaXZlIiwgImxvY2FsaXplIiwgImVuIiwgIkFyY2hpdmluZyIsICJBcmNoaXZlZCIsICJEZWxldGUiLCAiRGVsZXRpbmciLCAiRGVsZXRlZCIsICJ6aCIsICJSZWZyZXNoIiwgIlJlZnJlc2hpbmciLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImVsZW1lbnRXcmFwIiwgImlkIiwgImlubmVyRWxlbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIm9uQ2xpY2tXcmFwIiwgInRleHRDb250ZW50IiwgIm9uQ2xpY2siLCAiY29uY2F0IiwgInBpcGVFbGVtZW50IiwgInNlY3Rpb25JZFNwYW5FbGVtZW50IiwgInNwYW5XcmFwIiwgImlubmVySFRNTCIsICJub3RpY2VNZXNzYWdlIiwgImZvb3Rlck5vdGljZTIiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInRhZyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInByZXBlbmQiLCAic2FuaXRpemUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiaW5CbGFja2xpc3RGb290ZXJOb3RpY2UiLCAibm90QWxsb3dlZGVkRm9vdGVyTm90aWNlIiwgIm5vQXJjTG9jRm9vdGVyTm90aWNlIiwgImFyY0xvY05vdEFsbG93ZWRGb290ZXJOb3RpY2UiLCAiYXJjTG9jIiwgImVuYWJsZWRGb290ZXJOb3RpY2UiLCAidGl0bGUiLCAiaHJlZiIsICJpZkFyY0xvY05vdEFsbG93ZWQiLCAid2dQYWdlTmFtZSIsICJzb3VyY2VUaXRsZSIsICJUaXRsZSIsICJhcmNMb2NUaXRsZSIsICJhcmNMb2NOYW1lc3BhY2VJZCIsICJnZXROYW1lc3BhY2VJZCIsICJhcmNMb2NQYWdlTmFtZSIsICJnZXRNYWluIiwgInNvdXJjZU5hbWVzcGFjZUlkIiwgInNvdXJjZVBhZ2VOYW1lIiwgImlzSW5CbGFja2xpc3QiLCAiYmxhY2tMaXN0UmVnZXhBcnIiLCAiX2kiLCAiX2JsYWNrTGlzdFJlZ2V4QXJyIiwgImxlbmd0aCIsICJlbGVtZW50IiwgInRlc3QiLCAiaXNOb3RBbGxvd2VkIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJ3Z1VzZXJOYW1lIiwgImlzTm90U3VwcG9ydGVkIiwgIndnSXNNYWluUGFnZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dSZXZpc2lvbklkIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImdldFNlY3Rpb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwYWdlIiwgInByb3AiLCAicGFyc2UiLCAic2VjdGlvbnMiLCAic2VjdGlvbnNUb0FyY2hpdmUiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAic2VjdGlvbiIsICJ2YWx1ZSIsICJsZXZlbCIsICJpbmRleCIsICJhbmNob3IiLCAic3RhcnRzV2l0aCIsICJlcnIiLCAiZSIsICJmIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRTZWN0aW9uQ29udGVudCIsICJfcmVmMiIsICJfcmVzcG9uc2UkcXVlcnkkcGFnZXMiLCAicnZwcm9wIiwgInRpdGxlcyIsICJydnNlY3Rpb24iLCAicnZzbG90cyIsICJyZXNwb25zZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgIl94MiIsICJjaGVja0lmUGFnZUV4aXN0IiwgIl9yZWYzIiwgImFyY2hpdmVUbyIsICJfcXVlcnkkcGFnZXMkIiwgInF1ZXJ5IiwgIm1pc3NpbmciLCAiX3gzIiwgImNoZWNrSWZTZWN0aW9uRXhpc3QiLCAiX3JlZjQiLCAiaWZTZWN0aW9uRXhpc3QiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiX3g0IiwgInJlbW92ZVNlY3Rpb24iLCAiX3JlZjUiLCAic3VtbWFyeSIsICJlZGl0IiwgInRleHQiLCAibWlub3IiLCAiX3g1IiwgImFyY2hpdmVTZWN0aW9uIiwgIl9yZWY2IiwgInBhZ2VFeGlzdCIsICJjcmVhdGUiLCAiYXBwZW5kdGV4dCIsICJfeDYiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgIndnU2NyaXB0IiwgInJlZnJlc2giLCAidGFyZ2V0UGFnZSIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJ0b2FzdGlmeSIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJ1dGlsIiwgImdldFVybCIsICJyZXBsYWNlQ2hpbGQiLCAibmV3Q2hpbGQiLCAiaGFzQ2hpbGROb2RlcyIsICJfZWxlbWVudCRmaXJzdENoaWxkIiwgImZpcnN0Q2hpbGQiLCAicmVtb3ZlIiwgImFwcGVuZCIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiYWRkTGlua3MiLCAiX3JlZjciLCAiYXJjTGV2ZWwiLCAic2VjQXJjIiwgInNlY0RlbCIsICJoZWFkaW5ncyIsICJoZWFkbGluZXMiLCAiaGVhZGluZ0luZGljZXMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiaGVhZGluZyIsICJoZWFkbGluZSIsICJzZWN0aW9uSWRTcGFucyIsICJtZXNzYWdlQ2hhbm5lbCIsICJCcm9hZGNhc3RDaGFubmVsIiwgInJlZnJlc2hDaGFubmVsIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl9pMiIsICJfaGVhZGluZ0luZGljZXMiLCAiZ2V0RWxlbWVudEJ5SWQiLCAicGFyZW50SGVhZGluZyIsICJwYXJlbnRFbGVtZW50IiwgImVkaXRTZWN0aW9uIiwgInNlY3Rpb25JZFNwYW4yIiwgImFyY2hpdmVTZWN0aW9uTGluayIsICJpbmRleE5vIiwgInRvYXN0IiwgImFyY2hpdmVPbkNsaWNrIiwgImV2ZW50IiwgIl9ldmVudCR0YXJnZXQiLCAicHJldmVudERlZmF1bHQiLCAidGFyZ2V0IiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInNwYW4iLCAibWVzc2FnZTEiLCAicG9zdE1lc3NhZ2UiLCAiY2xvc2UiLCAidGhlbiIsICJtZXNzYWdlMiIsICJyZW1vdmVTZWN0aW9uTGluayIsICJyZW1vdmVPbkNsaWNrIiwgIl9ldmVudCR0YXJnZXQyIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgImFyY2hpdmVMaW5rIiwgInJlbW92ZUxpbmsiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJfaTMiLCAiX3NlY3Rpb25JZFNwYW5zIiwgImRhdGEiLCAibm9kZSIsICJfeDciLCAiZ2V0U2V0dGluZ3MiLCAic2V0dGluZ3MiLCAiZGF0YXNldCIsICJlYXN5QXJjaGl2ZSIsICJub3RTdXBwb3J0ZWQiLCAiaW5CbGFja2xpc3QiLCAibm90QWxsb3dlZCIsICJhcmNMb2NOb3RBbGxvd2VkIl0KfQo=
