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
      className: ["page-info__item", footerNotice],
      id
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
  class: ["gadget-easy_archive__link", "gadget-easy_archive__link-".concat(className)],
  onClick,
  textContent
});
var pipeElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  class: "mw-editsection-divider",
  textContent: "|"
});
var sectionIdSpanElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  class: [sectionIdSpan]
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9mb290ZXJOb3RpY2UudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvcmVhY3QudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvRWFzeUFyY2hpdmUubW9kdWxlLmxlc3MiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9pc0luRGlzYWxsb3dlZExpc3QudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvZ2V0U2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2NoZWNrSWZFeGlzdC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9yZW1vdmVTZWN0aW9uLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2FyY2hpdmVTZWN0aW9uLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvcmVmcmVzaFBhZ2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9yZXBsYWNlQ2hpbGQudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvYWRkTGlua3MudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvZ2V0U2V0dGluZ3MudHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgdmFyIGNoYW5uZWxzID0gW107XG5cbiAgICBmdW5jdGlvbiBCcm9hZGNhc3RDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgY2hhbm5lbCA9IFN0cmluZyhjaGFubmVsKTtcblxuICAgICAgICB2YXIgaWQgPSAnJEJyb2FkY2FzdENoYW5uZWwkJyArIGNoYW5uZWwgKyAnJCc7XG5cbiAgICAgICAgY2hhbm5lbHNbaWRdID0gY2hhbm5lbHNbaWRdIHx8IFtdO1xuICAgICAgICBjaGFubmVsc1tpZF0ucHVzaCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9uYW1lID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX21jID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQxLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQyLnN0YXJ0KCk7XG5cbiAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5zdG9yYWdlQXJlYSAhPT0gZ2xvYmFsLmxvY2FsU3RvcmFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUubmV3VmFsdWUgPT0gbnVsbCB8fCBlLm5ld1ZhbHVlID09PSAnJykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUua2V5LnN1YnN0cmluZygwLCBpZC5sZW5ndGgpICE9PSBpZCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGUubmV3VmFsdWUpO1xuICAgICAgICAgICAgJHRoaXMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBCcm9hZGNhc3RDaGFubmVsLnByb3RvdHlwZSA9IHtcbiAgICAgICAgLy8gQnJvYWRjYXN0Q2hhbm5lbCBBUElcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdE1lc3NhZ2U6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBlLm5hbWUgPSAnSW52YWxpZFN0YXRlRXJyb3InO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIG90aGVyIGNvbnRleHRzIHZpYSBzdG9yYWdlIGV2ZW50cy4uLlxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2lkICsgU3RyaW5nKERhdGUubm93KCkpICsgJyQnICsgU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBjdXJyZW50IGNvbnRleHQgdmlhIHBvcnRzXG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uZm9yRWFjaChmdW5jdGlvbihiYykge1xuICAgICAgICAgICAgICAgIGlmIChiYyA9PT0gJHRoaXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICBiYy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoSlNPTi5wYXJzZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDIuY2xvc2UoKTtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gY2hhbm5lbHNbdGhpcy5faWRdLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBFdmVudFRhcmdldCBBUElcbiAgICAgICAgZ2V0IG9ubWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvbm1lc3NhZ2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKC8qZXZlbnQqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmRpc3BhdGNoRXZlbnQuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsID0gZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgfHwgQnJvYWRjYXN0Q2hhbm5lbDtcbn0pKHNlbGYpO1xuIiwgIntcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2VsZW1lbnRXcmFwfSBmcm9tICcuL3V0aWwvcmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBmb290ZXJOb3RpY2UgPSAoaWQ6IHN0cmluZywgaW5uZXJFbGVtZW50OiBIVE1MRWxlbWVudCB8IFJlYWN0RWxlbWVudCkgPT4ge1xuXHRjb25zdCB0YWcgPSBlbGVtZW50V3JhcChpZCwgaW5uZXJFbGVtZW50KTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpWzBdPy5wcmVwZW5kKHRhZyk7XG59O1xuXG5jb25zdCBzYW5pdGl6ZSA9IChzdHJpbmc6IHN0cmluZykgPT5cblx0c3RyaW5nXG5cdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cbmNvbnN0IGluQmxhY2tsaXN0Rm9vdGVyTm90aWNlID0gKCkgPT4ge1xuXHRmb290ZXJOb3RpY2UoXG5cdFx0J2Vhc3lfYXJjaGl2ZV9ub3Rfc3VwcG9ydGVkX25vdGljZScsXG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQnKX1cblx0XHRcdDxiciAvPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkIGRldGFpbHMnKX1cblx0XHQ8L3NwYW4+XG5cdCk7XG59O1xuXG5jb25zdCBub3RBbGxvd2VkZWRGb290ZXJOb3RpY2UgPSAoKSA9PiB7XG5cdGZvb3Rlck5vdGljZSgnZWFzeV9hcmNoaXZlX25vdF9hbGxvd2VkX25vdGljZScsIDxzcGFuPntnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IGFsbG93ZWQnKX08L3NwYW4+KTtcbn07XG5cbmNvbnN0IG5vQXJjTG9jRm9vdGVyTm90aWNlID0gKCkgPT4ge1xuXHRmb290ZXJOb3RpY2UoJ2Vhc3lfYXJjaGl2ZV9ub19hcmNfbG9jX25vdGljZScsIDxzcGFuPntnZXRNZXNzYWdlKCdObyBBcmNoaXZlIExvY2F0aW9uJyl9PC9zcGFuPik7XG59O1xuXG5jb25zdCBhcmNMb2NOb3RBbGxvd2VkRm9vdGVyTm90aWNlID0gKGFyY0xvYzogc3RyaW5nKSA9PiB7XG5cdGZvb3Rlck5vdGljZShcblx0XHQnZWFzeV9hcmNoaXZlX2FyY19sb2Nfbm90X2FsbG93ZWRfbm90aWNlJyxcblx0XHQ8c3Bhbj5cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkJykucmVwbGFjZSgnJDEnLCBzYW5pdGl6ZShhcmNMb2MpKX1cblx0XHRcdDxiciAvPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQgZGV0YWlscycpfVxuXHRcdDwvc3Bhbj5cblx0KTtcbn07XG5cbmNvbnN0IGVuYWJsZWRGb290ZXJOb3RpY2UgPSAoYXJjTG9jOiBzdHJpbmcpID0+IHtcblx0Zm9vdGVyTm90aWNlKFxuXHRcdCdlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlJyxcblx0XHQ8c3Bhbj5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgZW5hYmxlZCcpfVxuXHRcdFx0e2dldE1lc3NhZ2UoJygnKX1cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIGxvY2F0aW9uJyl9XG5cdFx0XHQ8YSB0aXRsZT17c2FuaXRpemUoYXJjTG9jKX0gaHJlZj17YC93aWtpLyR7c2FuaXRpemUoYXJjTG9jKX1gfT5cblx0XHRcdFx0e3Nhbml0aXplKGFyY0xvYyl9XG5cdFx0XHQ8L2E+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnKScpfVxuXHRcdFx0e2dldE1lc3NhZ2UoJy4nKX1cblx0XHQ8L3NwYW4+XG5cdCk7XG59O1xuXG5leHBvcnQge1xuXHRhcmNMb2NOb3RBbGxvd2VkRm9vdGVyTm90aWNlLFxuXHRlbmFibGVkRm9vdGVyTm90aWNlLFxuXHRpbkJsYWNrbGlzdEZvb3Rlck5vdGljZSxcblx0bm9BcmNMb2NGb290ZXJOb3RpY2UsXG5cdG5vdEFsbG93ZWRlZEZvb3Rlck5vdGljZSxcbn07XG4iLCAiaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Zm9vdGVyTm90aWNlLCBzZWN0aW9uSWRTcGFufSBmcm9tICcuL0Vhc3lBcmNoaXZlLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGVsZW1lbnRXcmFwID0gKGlkOiBzdHJpbmcsIGlubmVyRWxlbWVudDogUmVhY3RFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17WydwYWdlLWluZm9fX2l0ZW0nLCBmb290ZXJOb3RpY2VdfSBpZD17aWR9PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgaWQ9e2lkfSBjbGFzc05hbWU9e2Zvb3Rlck5vdGljZX0+XG5cdFx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtmb290ZXJOb3RpY2V9PlxuXHRcdFx0e2lubmVyRWxlbWVudH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IG9uQ2xpY2tXcmFwID0gKHRleHRDb250ZW50OiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nLCBvbkNsaWNrPzogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCkgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzPXtbJ2dhZGdldC1lYXN5X2FyY2hpdmVfX2xpbmsnLCBgZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fbGluay0ke2NsYXNzTmFtZX1gXX1cblx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHRcdHRleHRDb250ZW50PXt0ZXh0Q29udGVudH1cblx0Lz5cbik7XG5cbmNvbnN0IHBpcGVFbGVtZW50ID0gKCkgPT4gPHNwYW4gY2xhc3M9XCJtdy1lZGl0c2VjdGlvbi1kaXZpZGVyXCIgdGV4dENvbnRlbnQ9eyd8J30gLz47XG5cbmNvbnN0IHNlY3Rpb25JZFNwYW5FbGVtZW50ID0gKCkgPT4gPHNwYW4gY2xhc3M9e1tzZWN0aW9uSWRTcGFuXX0gLz47XG5cbmNvbnN0IHNwYW5XcmFwID0gKGlubmVySFRNTDogc3RyaW5nKSA9PiA8c3BhbiBpbm5lckhUTUw9e2lubmVySFRNTH0gLz47XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IG5vdGljZU1lc3NhZ2UgPSAoe29uQ2xpY2t9OiBQcm9wcykgPT4gKFxuXHQ8c3Bhbj5cblx0XHR7Z2V0TWVzc2FnZSgnRWRpdCBDb25maWxpY3QgTm90aWNlJyl9XG5cdFx0PGEgb25DbGljaz17b25DbGlja30+e2dldE1lc3NhZ2UoJ1JlZnJlc2gnKX08L2E+XG5cdDwvc3Bhbj5cbik7XG5cbmV4cG9ydCB7ZWxlbWVudFdyYXAsIG9uQ2xpY2tXcmFwLCBwaXBlRWxlbWVudCwgc2VjdGlvbklkU3BhbkVsZW1lbnQsIHNwYW5XcmFwLCBub3RpY2VNZXNzYWdlfTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9FYXN5QXJjaGl2ZS5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGZvb3Rlck5vdGljZSA9IFwiRWFzeUFyY2hpdmUtbW9kdWxlX19mb290ZXJOb3RpY2VfVUJ3elhxXCI7XG5leHBvcnQgY29uc3Qgc2VjdGlvbklkU3BhbiA9IFwiRWFzeUFyY2hpdmUtbW9kdWxlX19zZWN0aW9uSWRTcGFuX1VCd3pYcVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZm9vdGVyTm90aWNlXCI6IGZvb3Rlck5vdGljZSxcbiAgXCJzZWN0aW9uSWRTcGFuXCI6IHNlY3Rpb25JZFNwYW5cbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFyY2hpdmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBsb2NhdGlvbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZSBsb2NhdGlvbjogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+WcsOWdgO+8micsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpToh7PvvJonLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGJ1dCBFYXN5IGFyY2hpdmUgY2Fubm90IG9wZXJhdGUgbGlrZSB0aGlzLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAneOAgkVhc3kgQXJjaGl2ZSDml6Dms5XmjInmraTlnLDlnYDlrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3jgIJFYXN5IEFyY2hpdmUg54Sh5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCBkZXRhaWxzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlcyBzaG91bGQgbm90IGJlIG5vcm1hbGx5IGRpcmVjdGVkIHRvIHBhZ2VzIHVuZGVyIGFydGljbGUgbmFtZXNwYWNlLiBQbGVhc2UgY2hlY2sgaWYgeW91IGhhdmUgdGhlIGNvcnJlY3QgYXJjaGl2ZSBsb2NhdGlvbi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA6Iis6ICM6KiA77yM5LiN5bqU5ZCR5p2h55uu5ZCN56ew56m66Ze06L+b6KGM5a2Y5qGj44CC5q2k5aSW77yM5a2Y5qGj5Zyw5Z2A5LiN5b6X5ZKM5q2k6aG16Z2i5ZCN56ew55u45ZCM44CC6K+35qOA5p+l5a2Y5qGj5Zyw5Z2A44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOiIrOiAjOiogO+8jOS4jeaHieWQkeaineebruWQjeeoseepuumWk+mAsuihjOWtmOaqlOOAguatpOWklu+8jOWtmOaqlOWcsOWdgOS4jeW+l+WSjOatpOmggemdouWQjeeoseebuOWQjOOAguiri+aqouafpeWtmOaqlOWcsOWdgOOAgicsXG5cdFx0fSksXG5cdFx0QXJjaGl2aW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmluZycsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5LitJyxcblx0XHR9KSxcblx0XHRBcmNoaXZlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRWRpdCBDb25maWxpY3QgTm90aWNlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgaGF2ZSBhbHJlYWR5IGFyY2hpdmVkIGFuZC9vciBkZWxldGVkIGEgc2VjdGlvbiBvbiB0aGlzIHBhZ2UuIFBsZWFzZSByZWZyZXNoIHRoZSBwYWdlIGFuZCBjb250aW51ZSBhcmNoaXZpbmcgb3IgZGVsZXRpbmcgb3RoZXIgc2VjdGlvbnMgdG8gYXZvaWQgZWRpdGluZyBjb25mbGljdHMuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOW3sue7j+WcqOacrOmhtemdouaJp+ihjOS6huWtmOaho+OAgeWIoOmZpOeroOiKgueahOaTjeS9nOOAguivt+WIt+aWsOmhtemdou+8jOeEtuWQjue7p+e7reWtmOaho+OAgeWIoOmZpOacrOmhtemdoueahOWFtuS7lueroOiKgu+8jOS7pemBv+WFjee8lui+keWGsueqgeOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfmgqjlt7LntpPlnKjmnKzpoIHpnaLln7fooYzkuoblrZjmqpTjgIHliKrpmaTnq6Dnr4DnmoTmk43kvZzjgILoq4vliLfmlrDpoIHpnaLvvIznhLblvoznubznuozlrZjmqpTjgIHliKrpmaTmnKzpoIHpnaLnmoTlhbbku5bnq6Dnr4DvvIzku6Xpgb/lhY3nt6jovK/ooZ3nqoHjgIInLFxuXHRcdH0pLFxuXHRcdERlbGV0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpCcsXG5cdFx0fSksXG5cdFx0RGVsZXRpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGVsZXRpbmcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOS4rScsXG5cdFx0fSksXG5cdFx0RGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICflt7LliKrpmaQnLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5q616JC9Jyxcblx0XHR9KSxcblx0XHQnQ3JlYXRlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2NyZWF0ZSBhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W7uueri+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflu7rnq4vlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdEZWxldGUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOauteiQvScsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBlbmFibGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgaXMgZW5hYmxlZCBvbiB0aGlzIHRhbGsgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfmnKzorqjorrrpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3QgYWxsb3dlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGNhbm5vdCB1c2UgRWFzeSBBcmNoaXZlIHRvIGFyY2hpdmUgdGhyZWFkcyBvbiB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOS4jeWPr+S7peWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOS4jeWPr+S7peWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQgZGV0YWlscyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlc2UgcGFnZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlOiBBcnRpY2xlLCBGaWxlLCBUZW1wbGF0ZSwgTW9kdWxlLCBNZWRpYVdpa2ksIENhdGVnb3J5LCBTcGVjaWFsLCBKYXZhU2NyaXB0LCBDU1MsIEpTT04uJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+i/meS6m+mhtemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77ya5p2h55uu44CBRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6YCZ5Lqb6aCB6Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJrmop3nm67vvIxGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0fSksXG5cdFx0J05vIEFyY2hpdmUgTG9jYXRpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBjYW4gYmUgdXNlZCBvbiB0aGlzIHBhZ2UgaWYgbmVlZGVkLiBUbyBlbmFibGUgaXQsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+iLpemcgOimge+8jOatpOmhtemdouWPr+S7peWQr+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6K+35Zyo6aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+iLpemcgOimge+8jOatpOmggemdouWPr+S7peWVn+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6KuL5Zyo6aCB6Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn1944CCJyxcblx0XHR9KSxcblx0XHQnU2VjdGlvbiAkMSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VjdGlvbiAkMScsXG5cdFx0XHR6aDogJ+esrCAkMSDnq6DoioInLFxuXHRcdH0pLFxuXHRcdCcoJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0JyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyknLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdCcuJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcuJyxcblx0XHRcdHpoOiAn44CCJyxcblx0XHR9KSxcblx0XHQnOic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOiAnLFxuXHRcdFx0emg6ICfvvJonLFxuXHRcdH0pLFxuXHRcdFJlZnJlc2g6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVmcmVzaCB0aGUgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfliLfmlrDlvZPliY3pobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn6YeN5paw6LyJ5YWl55W25YmN6aCBJyxcblx0XHR9KSxcblx0XHRSZWZyZXNoaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlZnJlc2hpbmcuLi4nLFxuXHRcdFx0amE6ICflho3oqq3jgb/ovrzjgb/jgZfjgb7jgZkuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Y2z5bCG5Yi35paw5b2T5YmN6aG16Z2i4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+WNs+Wwh+mHjeaWsOi8ieWFpeeVtuWJjemggeKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IGlmQXJjTG9jTm90QWxsb3dlZCA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNvdXJjZVRpdGxlID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpO1xuXHRjb25zdCBhcmNMb2NUaXRsZSA9IG5ldyBtdy5UaXRsZShhcmNMb2MpO1xuXG5cdGNvbnN0IGFyY0xvY05hbWVzcGFjZUlkID0gYXJjTG9jVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3QgYXJjTG9jUGFnZU5hbWUgPSBhcmNMb2NUaXRsZS5nZXRNYWluKCk7XG5cdGNvbnN0IHNvdXJjZU5hbWVzcGFjZUlkID0gc291cmNlVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3Qgc291cmNlUGFnZU5hbWUgPSBzb3VyY2VUaXRsZS5nZXRNYWluKCk7XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoYXJjTG9jTmFtZXNwYWNlSWQgPT09IHNvdXJjZU5hbWVzcGFjZUlkICYmIGFyY0xvY1BhZ2VOYW1lID09PSBzb3VyY2VQYWdlTmFtZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNJbkJsYWNrbGlzdCA9ICgpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGJsYWNrTGlzdFJlZ2V4QXJyID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja0xpc3RSZWdleEFycikge1xuXHRcdGlmIChlbGVtZW50LnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzTm90QWxsb3dlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1JlbGV2YW50VXNlck5hbWUsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICgod2dOYW1lc3BhY2VOdW1iZXIgPT09IDIgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDMpICYmICEod2dSZWxldmFudFVzZXJOYW1lID09PSB3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcbmNvbnN0IGlzTm90U3VwcG9ydGVkID0gKCkgPT4ge1xuXHRjb25zdCB7d2dJc01haW5QYWdlLCB3Z05hbWVzcGFjZU51bWJlciwgd2dDdXJSZXZpc2lvbklkLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDAgfHwgd2dDdXJSZXZpc2lvbklkIC0gd2dSZXZpc2lvbklkICE9PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDAgfHwgd2dJc01haW5QYWdlKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQge2lmQXJjTG9jTm90QWxsb3dlZCwgaXNJbkJsYWNrbGlzdCwgaXNOb3RBbGxvd2VkLCBpc05vdFN1cHBvcnRlZH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBFYXN5QXJjaGl2ZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9ucyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwYWdlOiB0aXRsZSxcblx0XHRwcm9wOiAnc2VjdGlvbnMnLFxuXHR9O1xuXG5cdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdGNvbnN0IHtzZWN0aW9uc30gPSBwYXJzZSBhcyB7XG5cdFx0c2VjdGlvbnM6IHtcblx0XHRcdGxldmVsOiBzdHJpbmc7XG5cdFx0XHRpbmRleDogc3RyaW5nO1xuXHRcdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0fVtdO1xuXHR9O1xuXG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gW107XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0Y29uc3Qge2xldmVsLCBpbmRleCwgYW5jaG9yfSA9IHNlY3Rpb247XG5cblx0XHRpZiAoaW5kZXguc3RhcnRzV2l0aCgnVC0nKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0c2VjdGlvbnNUb0FyY2hpdmVbc2VjdGlvbnNUb0FyY2hpdmUubGVuZ3RoXSA9IHtcblx0XHRcdGxldmVsLFxuXHRcdFx0aW5kZXgsXG5cdFx0XHRhbmNob3IsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBzZWN0aW9uc1RvQXJjaGl2ZTtcbn07XG5cbmNvbnN0IGdldFNlY3Rpb25Db250ZW50ID0gYXN5bmMgKHt0aXRsZSwgc2VjdGlvbn06IHt0aXRsZTogc3RyaW5nOyBzZWN0aW9uOiBzdHJpbmd9KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdHJ2c2VjdGlvbjogc2VjdGlvbixcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdH07XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIChyZXNwb25zZVsncXVlcnknXS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbi5jb250ZW50IGFzIHN0cmluZykgPz8gbnVsbDtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbnMsIGdldFNlY3Rpb25Db250ZW50fTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0U2VjdGlvbnN9IGZyb20gJy4vZ2V0U2VjdGlvbic7XG5cbmNvbnN0IGNoZWNrSWZQYWdlRXhpc3QgPSBhc3luYyAoYXJjaGl2ZVRvOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW5mbycsXG5cdFx0dGl0bGVzOiBhcmNoaXZlVG8sXG5cdH07XG5cblx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRpZiAocXVlcnkucGFnZXNbMF0/Lm1pc3NpbmcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBjaGVja0lmU2VjdGlvbkV4aXN0ID0gYXN5bmMgKHtpbmRleCwgYW5jaG9yfToge2luZGV4OiBzdHJpbmc7IGFuY2hvcjogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25zID0gYXdhaXQgZ2V0U2VjdGlvbnMod2dQYWdlTmFtZSk7XG5cblx0bGV0IGlmU2VjdGlvbkV4aXN0ID0gZmFsc2U7XG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuXHRcdGlmIChpbmRleCA9PT0gc2VjdGlvbi5pbmRleCAmJiBhbmNob3IgPT09IHNlY3Rpb24uYW5jaG9yKSB7XG5cdFx0XHRpZlNlY3Rpb25FeGlzdCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBpZlNlY3Rpb25FeGlzdDtcbn07XG5cbmV4cG9ydCB7Y2hlY2tJZlNlY3Rpb25FeGlzdCwgY2hlY2tJZlBhZ2VFeGlzdH07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Y2hlY2tJZlNlY3Rpb25FeGlzdH0gZnJvbSAnLi91dGlsL2NoZWNrSWZFeGlzdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNlY3Rpb25Db250ZW50fSBmcm9tICcuL3V0aWwvZ2V0U2VjdGlvbic7XG5cbmNvbnN0IHJlbW92ZVNlY3Rpb24gPSBhc3luYyAoe2luZGV4LCBhbmNob3IsIHN1bW1hcnl9OiB7aW5kZXg6IHN0cmluZzsgYW5jaG9yOiBzdHJpbmc7IHN1bW1hcnk/OiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaWZTZWN0aW9uRXhpc3QgPSBhd2FpdCBjaGVja0lmU2VjdGlvbkV4aXN0KHtpbmRleCwgYW5jaG9yfSk7XG5cblx0aWYgKGlmU2VjdGlvbkV4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHt0aXRsZTogd2dQYWdlTmFtZSwgc2VjdGlvbjogaW5kZXh9KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGF3YWl0IGFwaS5lZGl0KHdnUGFnZU5hbWUsICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VjdGlvbjogaW5kZXgsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdHN1bW1hcnk6IHN1bW1hcnkgPz8gZ2V0TWVzc2FnZSgnRGVsZXRlIHN1bW1hcnknKSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xufTtcblxuZXhwb3J0IHtyZW1vdmVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2NoZWNrSWZQYWdlRXhpc3QsIGNoZWNrSWZTZWN0aW9uRXhpc3R9IGZyb20gJy4vdXRpbC9jaGVja0lmRXhpc3QnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9IGZyb20gJy4vdXRpbC9nZXRTZWN0aW9uJztcbmltcG9ydCB7cmVtb3ZlU2VjdGlvbn0gZnJvbSAnLi9yZW1vdmVTZWN0aW9uJztcblxuY29uc3QgYXJjaGl2ZVNlY3Rpb24gPSBhc3luYyAoe2luZGV4LCBhbmNob3IsIGFyY2hpdmVUb306IHtpbmRleDogc3RyaW5nOyBhbmNob3I6IHN0cmluZzsgYXJjaGl2ZVRvOiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaWZTZWN0aW9uRXhpc3QgPSBhd2FpdCBjaGVja0lmU2VjdGlvbkV4aXN0KHtpbmRleCwgYW5jaG9yfSk7XG5cblx0aWYgKGlmU2VjdGlvbkV4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHt0aXRsZTogd2dQYWdlTmFtZSwgc2VjdGlvbjogaW5kZXh9KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBhZ2VFeGlzdCA9IGF3YWl0IGNoZWNrSWZQYWdlRXhpc3QoYXJjaGl2ZVRvKTtcblx0aWYgKCFwYWdlRXhpc3QpIHtcblx0XHRhd2FpdCBhcGkuY3JlYXRlKFxuXHRcdFx0YXJjaGl2ZVRvLFxuXHRcdFx0e1xuXHRcdFx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdDcmVhdGUgc3VtbWFyeScpLFxuXHRcdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHQne3t0YWxrYXJjaGl2ZX19J1xuXHRcdCk7XG5cdH1cblxuXHRhd2FpdCBhcGkuZWRpdChhcmNoaXZlVG8sICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXBwZW5kdGV4dDogYFxcblxcbiR7Y29udGVudH1gLFxuXHRcdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnQXJjaGl2ZSBzdW1tYXJ5JyksXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcblxuXHRhd2FpdCByZW1vdmVTZWN0aW9uKHtpbmRleCwgYW5jaG9yLCBzdW1tYXJ5OiBnZXRNZXNzYWdlKCdBcmNoaXZlIHN1bW1hcnknKX0pO1xufTtcblxuZXhwb3J0IHthcmNoaXZlU2VjdGlvbn07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCB7d2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCByZWZyZXNoID0gKHtcblx0dGFyZ2V0UGFnZSxcblx0dG9hc3RpZnlJbnN0YW5jZSxcbn06IHt0YXJnZXRQYWdlPzogc3RyaW5nOyB0b2FzdGlmeUluc3RhbmNlPzogVG9hc3RpZnlJbnN0YW5jZX0gPSB7fSk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlIHx8PSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1JlZnJlc2hpbmcnKSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bG9jYXRpb24ucmVwbGFjZShcblx0XHRtdy51dGlsLmdldFVybCh3Z1NjcmlwdCwge1xuXHRcdFx0dGl0bGU6IHRhcmdldFBhZ2UgPz8gd2dQYWdlTmFtZSxcblx0XHR9KVxuXHQpO1xufTtcblxuZXhwb3J0IHtyZWZyZXNofTtcbiIsICJjb25zdCByZXBsYWNlQ2hpbGQgPSAoZWxlbWVudDogRWxlbWVudCwgbmV3Q2hpbGQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcblx0d2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0ZWxlbWVudC5maXJzdENoaWxkPy5yZW1vdmUoKTtcblx0fVxuXHRlbGVtZW50LmFwcGVuZChuZXdDaGlsZCk7XG59O1xuXG5leHBvcnQge3JlcGxhY2VDaGlsZH07XG4iLCAiaW1wb3J0IHtub3RpY2VNZXNzYWdlLCBvbkNsaWNrV3JhcCwgcGlwZUVsZW1lbnQsIHNlY3Rpb25JZFNwYW5FbGVtZW50LCBzcGFuV3JhcH0gZnJvbSAnLi91dGlsL3JlYWN0JztcbmltcG9ydCB7dHlwZSBSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHthcmNoaXZlU2VjdGlvbn0gZnJvbSAnLi9hcmNoaXZlU2VjdGlvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNlY3Rpb25zfSBmcm9tICcuL3V0aWwvZ2V0U2VjdGlvbic7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gJy4vdXRpbC9yZWZyZXNoUGFnZSc7XG5pbXBvcnQge3JlbW92ZVNlY3Rpb259IGZyb20gJy4vcmVtb3ZlU2VjdGlvbic7XG5pbXBvcnQge3JlcGxhY2VDaGlsZH0gZnJvbSAnLi91dGlsL3JlcGxhY2VDaGlsZCc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYWRkTGlua3MgPSBhc3luYyAoe1xuXHRhcmNMZXZlbCxcblx0YXJjTG9jLFxuXHRzZWNBcmMsXG5cdHNlY0RlbCxcbn06IHtcblx0YXJjTGV2ZWw6IHN0cmluZztcblx0YXJjTG9jOiBzdHJpbmcgfCBudWxsO1xuXHRzZWNBcmM6IHN0cmluZztcblx0c2VjRGVsOiBzdHJpbmc7XG59KSA9PiB7XG5cdGlmICghYXJjTG9jKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9uc1RvQXJjaGl2ZSA9IGF3YWl0IGdldFNlY3Rpb25zKHdnUGFnZU5hbWUpO1xuXG5cdGNvbnN0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaCR7YXJjTGV2ZWx9YCk7XG5cdGNvbnN0IGhlYWRsaW5lcyA9IFtdO1xuXHRjb25zdCBoZWFkaW5nSW5kaWNlcyA9IFtdO1xuXG5cdGZvciAoY29uc3QgaGVhZGluZyBvZiBoZWFkaW5ncykge1xuXHRcdGNvbnN0IGhlYWRsaW5lID0gaGVhZGluZy5xdWVyeVNlbGVjdG9yKCcubXctaGVhZGxpbmUnKTtcblx0XHRoZWFkbGluZXNbaGVhZGxpbmVzLmxlbmd0aF0gPSBoZWFkbGluZT8uaWQ7XG5cdH1cblxuXHRjb25zdCBzZWN0aW9uSWRTcGFuczogUmVhY3RFbGVtZW50W10gPSBbXTtcblx0bGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblxuXHRjb25zdCBtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKGAke3dnUGFnZU5hbWV9X21lc3NhZ2VgKTtcblx0Y29uc3QgcmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChgJHt3Z1BhZ2VOYW1lfV9yZWZyZXNoYCk7XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zVG9BcmNoaXZlKSB7XG5cdFx0aWYgKHNlY3Rpb24ubGV2ZWwgIT09IGFyY0xldmVsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoaGVhZGxpbmVzLmluY2x1ZGVzKHNlY3Rpb24uYW5jaG9yKSkge1xuXHRcdFx0aGVhZGluZ0luZGljZXNbaGVhZGluZ0luZGljZXMubGVuZ3RoXSA9IHtcblx0XHRcdFx0aW5kZXg6IHNlY3Rpb24uaW5kZXgsXG5cdFx0XHRcdGlkOiBzZWN0aW9uLmFuY2hvcixcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCB7aW5kZXgsIGlkfSBvZiBoZWFkaW5nSW5kaWNlcykge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1xdWVyeS1zZWxlY3RvclxuXHRcdGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRcdGlmICghaGVhZGxpbmUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhcmVudEhlYWRpbmcgPSBoZWFkbGluZS5wYXJlbnRFbGVtZW50O1xuXHRcdGlmICghcGFyZW50SGVhZGluZykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdFNlY3Rpb24gPSBwYXJlbnRIZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdGlmICghZWRpdFNlY3Rpb24pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlY3Rpb25JZFNwYW4gPSBzZWN0aW9uSWRTcGFuRWxlbWVudCgpO1xuXHRcdGNvbnN0IGFyY2hpdmVTZWN0aW9uTGluayA9ICh7XG5cdFx0XHRpbmRleE5vLFxuXHRcdFx0YW5jaG9yLFxuXHRcdFx0YXJjaGl2ZVRvLFxuXHRcdFx0dG9hc3QsXG5cdFx0fToge1xuXHRcdFx0aW5kZXhObzogc3RyaW5nO1xuXHRcdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0XHRhcmNoaXZlVG86IHN0cmluZztcblx0XHRcdHRvYXN0OiBUb2FzdGlmeUluc3RhbmNlO1xuXHRcdH0pID0+IHtcblx0XHRcdGNvbnN0IGFyY2hpdmVPbkNsaWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRjb25zdCBwYXJlbnRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdGlmICghcGFyZW50RWxlbWVudCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlcGxhY2VDaGlsZChwYXJlbnRFbGVtZW50LCBzcGFuV3JhcChnZXRNZXNzYWdlKCdBcmNoaXZpbmcnKSkpO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHNwYW4gb2Ygc2VjdGlvbklkU3BhbnMpIHtcblx0XHRcdFx0XHRzcGFuLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IG1lc3NhZ2UxID1cblx0XHRcdFx0XHRnZXRNZXNzYWdlKCdBcmNoaXZpbmcnKSArIGdldE1lc3NhZ2UoJzonKSArIGdldE1lc3NhZ2UoJ1NlY3Rpb24gJDEnKS5yZXBsYWNlKCckMScsIGluZGV4Tm8pO1xuXHRcdFx0XHRtZXNzYWdlQ2hhbm5lbC5wb3N0TWVzc2FnZShtZXNzYWdlMSk7XG5cblx0XHRcdFx0dG9hc3QgfHw9IHtcblx0XHRcdFx0XHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHR0b2FzdC5oaWRlVG9hc3QoKTtcblx0XHRcdFx0dG9hc3QgPSB0b2FzdGlmeShcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBtZXNzYWdlMSxcblx0XHRcdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J2luZm8nXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0dm9pZCBhcmNoaXZlU2VjdGlvbih7aW5kZXg6IGluZGV4Tm8sIGFuY2hvciwgYXJjaGl2ZVRvfSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0cmVwbGFjZUNoaWxkKHBhcmVudEVsZW1lbnQsIHNwYW5XcmFwKGdldE1lc3NhZ2UoJ0FyY2hpdmVkJykpKTtcblx0XHRcdFx0XHRjb25zdCBtZXNzYWdlMiA9XG5cdFx0XHRcdFx0XHRnZXRNZXNzYWdlKCdBcmNoaXZlZCcpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG5cdFx0XHRcdFx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UobWVzc2FnZTIpO1xuXHRcdFx0XHRcdHRvYXN0LmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdHRvYXN0ID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IG1lc3NhZ2UyLFxuXHRcdFx0XHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCdpbmZvJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0bWVzc2FnZUNoYW5uZWwuY2xvc2UoKTtcblx0XHRcdFx0XHRyZWZyZXNoQ2hhbm5lbC5wb3N0TWVzc2FnZSgnUmVmcmVzaCcpO1xuXHRcdFx0XHRcdHJlZnJlc2goe3RvYXN0aWZ5SW5zdGFuY2U6IHRvYXN0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdHJldHVybiBvbkNsaWNrV3JhcChnZXRNZXNzYWdlKCdBcmNoaXZlJyksICdhcmNoaXZlJywgYXJjaGl2ZU9uQ2xpY2spO1xuXHRcdH07XG5cblx0XHRjb25zdCByZW1vdmVTZWN0aW9uTGluayA9ICh7XG5cdFx0XHRpbmRleE5vLFxuXHRcdFx0YW5jaG9yLFxuXHRcdFx0dG9hc3QsXG5cdFx0fToge1xuXHRcdFx0aW5kZXhObzogc3RyaW5nO1xuXHRcdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0XHR0b2FzdDogVG9hc3RpZnlJbnN0YW5jZTtcblx0XHR9KSA9PiB7XG5cdFx0XHRjb25zdCByZW1vdmVPbkNsaWNrID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRjb25zdCBwYXJlbnRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdGlmICghcGFyZW50RWxlbWVudCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlcGxhY2VDaGlsZChwYXJlbnRFbGVtZW50LCBzcGFuV3JhcChnZXRNZXNzYWdlKCdEZWxldGluZycpKSk7XG5cdFx0XHRcdGZvciAoY29uc3Qgc3BhbiBvZiBzZWN0aW9uSWRTcGFucykge1xuXHRcdFx0XHRcdHNwYW4ucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgbWVzc2FnZTEgPVxuXHRcdFx0XHRcdGdldE1lc3NhZ2UoJ0RlbGV0aW5nJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcblx0XHRcdFx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UobWVzc2FnZTEpO1xuXG5cdFx0XHRcdHRvYXN0IHx8PSB7XG5cdFx0XHRcdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0dG9hc3QuaGlkZVRvYXN0KCk7XG5cdFx0XHRcdHRvYXN0ID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogbWVzc2FnZTEsXG5cdFx0XHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdpbmZvJ1xuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdHZvaWQgcmVtb3ZlU2VjdGlvbih7aW5kZXg6IGluZGV4Tm8sIGFuY2hvcn0pLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdHJlcGxhY2VDaGlsZChwYXJlbnRFbGVtZW50LCBzcGFuV3JhcChnZXRNZXNzYWdlKCdEZWxldGVkJykpKTtcblx0XHRcdFx0XHRjb25zdCBtZXNzYWdlMiA9XG5cdFx0XHRcdFx0XHRnZXRNZXNzYWdlKCdEZWxldGVkJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcblx0XHRcdFx0XHRtZXNzYWdlQ2hhbm5lbC5wb3N0TWVzc2FnZShtZXNzYWdlMik7XG5cdFx0XHRcdFx0dG9hc3QuaGlkZVRvYXN0KCk7XG5cdFx0XHRcdFx0dG9hc3QgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogbWVzc2FnZTIsXG5cdFx0XHRcdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J2luZm8nXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRtZXNzYWdlQ2hhbm5lbC5jbG9zZSgpO1xuXHRcdFx0XHRcdHJlZnJlc2hDaGFubmVsLnBvc3RNZXNzYWdlKCdSZWZyZXNoJyk7XG5cdFx0XHRcdFx0cmVmcmVzaCh7dG9hc3RpZnlJbnN0YW5jZTogdG9hc3R9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuIG9uQ2xpY2tXcmFwKGdldE1lc3NhZ2UoJ0RlbGV0ZScpLCAnZGVsZXRlJywgcmVtb3ZlT25DbGljayk7XG5cdFx0fTtcblxuXHRcdGlmIChzZWNBcmMgPT09ICcxJyB8fCBzZWNEZWwgPT09ICcxJykge1xuXHRcdFx0aWYgKHNlY0FyYyA9PT0gJzEnKSB7XG5cdFx0XHRcdGNvbnN0IGFyY2hpdmVMaW5rID0gYXJjaGl2ZVNlY3Rpb25MaW5rKHtcblx0XHRcdFx0XHRpbmRleE5vOiBpbmRleCxcblx0XHRcdFx0XHRhbmNob3I6IGlkLFxuXHRcdFx0XHRcdGFyY2hpdmVUbzogYXJjTG9jLFxuXHRcdFx0XHRcdHRvYXN0OiB0b2FzdGlmeUluc3RhbmNlLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0c2VjdGlvbklkU3Bhbi5hcHBlbmQoYXJjaGl2ZUxpbmspO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlY0FyYyA9PT0gJzEnICYmIHNlY0RlbCA9PT0gJzEnKSB7XG5cdFx0XHRcdHNlY3Rpb25JZFNwYW4uYXBwZW5kKHBpcGVFbGVtZW50KCkpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlY0RlbCA9PT0gJzEnKSB7XG5cdFx0XHRcdGNvbnN0IHJlbW92ZUxpbmsgPSByZW1vdmVTZWN0aW9uTGluayh7aW5kZXhObzogaW5kZXgsIGFuY2hvcjogaWQsIHRvYXN0OiB0b2FzdGlmeUluc3RhbmNlfSk7XG5cdFx0XHRcdHNlY3Rpb25JZFNwYW4uYXBwZW5kKHJlbW92ZUxpbmspO1xuXHRcdFx0fVxuXHRcdFx0c2VjdGlvbklkU3BhbnNbc2VjdGlvbklkU3BhbnMubGVuZ3RoXSA9IHNlY3Rpb25JZFNwYW47XG5cdFx0XHRlZGl0U2VjdGlvbi5wcmVwZW5kKHNlY3Rpb25JZFNwYW4pO1xuXHRcdH1cblx0fVxuXG5cdG1lc3NhZ2VDaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcblx0XHRmb3IgKGNvbnN0IHNwYW4gb2Ygc2VjdGlvbklkU3BhbnMpIHtcblx0XHRcdHNwYW4ucmVtb3ZlKCk7XG5cdFx0fVxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBldmVudC5kYXRhIGFzIHN0cmluZyxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXHR9KTtcblxuXHRyZWZyZXNoQ2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKCkgPT4ge1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHRub2RlOiBub3RpY2VNZXNzYWdlKHtcblx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdFx0cmVmcmVzaCgpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdpbmZvJ1xuXHRcdCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRMaW5rc307XG4iLCAiY29uc3QgZ2V0U2V0dGluZ3MgPSAoKSA9PiB7XG5cdGNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVhc3lfYXJjaGl2ZV9kYXRhX3BvaW50X2NvbGxlY3Rpb24nKSBhcyBIVE1MRWxlbWVudDtcblx0aWYgKCFzZXR0aW5ncykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3Qge2RhdGFzZXR9ID0gc2V0dGluZ3M7XG5cdGNvbnN0IHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0gPSBkYXRhc2V0O1xuXHRyZXR1cm4ge1xuXHRcdGFyY0xldmVsOiBhcmNMZXZlbCA/PyAnMicsXG5cdFx0YXJjTG9jOiBhcmNMb2MgPz8gbnVsbCxcblx0XHRzZWNBcmM6IHNlY0FyYyA/PyAnMScsXG5cdFx0c2VjRGVsOiBzZWNEZWwgPz8gJzEnLFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZXRTZXR0aW5nc307XG4iLCAiaW1wb3J0IHtcblx0YXJjTG9jTm90QWxsb3dlZEZvb3Rlck5vdGljZSxcblx0ZW5hYmxlZEZvb3Rlck5vdGljZSxcblx0aW5CbGFja2xpc3RGb290ZXJOb3RpY2UsXG5cdG5vQXJjTG9jRm9vdGVyTm90aWNlLFxuXHRub3RBbGxvd2VkZWRGb290ZXJOb3RpY2UsXG59IGZyb20gJy4vbW9kdWxlcy9mb290ZXJOb3RpY2UnO1xuaW1wb3J0IHtpZkFyY0xvY05vdEFsbG93ZWQsIGlzSW5CbGFja2xpc3QsIGlzTm90QWxsb3dlZCwgaXNOb3RTdXBwb3J0ZWR9IGZyb20gJy4vbW9kdWxlcy9pc0luRGlzYWxsb3dlZExpc3QnO1xuaW1wb3J0IHthZGRMaW5rc30gZnJvbSAnLi9tb2R1bGVzL2FkZExpbmtzJztcbmltcG9ydCB7Z2V0U2V0dGluZ3N9IGZyb20gJy4vbW9kdWxlcy9nZXRTZXR0aW5ncyc7XG5cbihmdW5jdGlvbiBlYXN5QXJjaGl2ZSgpIHtcblx0Y29uc3Qgbm90U3VwcG9ydGVkID0gaXNOb3RTdXBwb3J0ZWQoKTtcblx0aWYgKG5vdFN1cHBvcnRlZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGluQmxhY2tsaXN0ID0gaXNJbkJsYWNrbGlzdCgpO1xuXHRpZiAoaW5CbGFja2xpc3QpIHtcblx0XHRpbkJsYWNrbGlzdEZvb3Rlck5vdGljZSgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG5vdEFsbG93ZWQgPSBpc05vdEFsbG93ZWQoKTtcblx0aWYgKG5vdEFsbG93ZWQpIHtcblx0XHRub3RBbGxvd2VkZWRGb290ZXJOb3RpY2UoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzKCk7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRub0FyY0xvY0Zvb3Rlck5vdGljZSgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHthcmNMb2N9ID0gc2V0dGluZ3M7XG5cdGlmICghYXJjTG9jKSB7XG5cdFx0bm9BcmNMb2NGb290ZXJOb3RpY2UoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBhcmNMb2NOb3RBbGxvd2VkID0gaWZBcmNMb2NOb3RBbGxvd2VkKGFyY0xvYyk7XG5cdGlmIChhcmNMb2NOb3RBbGxvd2VkKSB7XG5cdFx0YXJjTG9jTm90QWxsb3dlZEZvb3Rlck5vdGljZShhcmNMb2MpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgYWRkTGlua3Moc2V0dGluZ3MpO1xuXHRlbmFibGVkRm9vdGVyTm90aWNlKGFyY0xvYyk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsS0FBQyxTQUFTLFFBQVE7QUFDZCxVQUFJLFdBQVcsQ0FBQztBQUVoQixlQUFTQSxrQkFBaUIsU0FBUztBQUMvQixZQUFJLFFBQVE7QUFDWixrQkFBVSxPQUFPLE9BQU87QUFFeEIsWUFBSSxLQUFLLHVCQUF1QixVQUFVO0FBRTFDLGlCQUFTLEVBQUUsSUFBSSxTQUFTLEVBQUUsS0FBSyxDQUFDO0FBQ2hDLGlCQUFTLEVBQUUsRUFBRSxLQUFLLElBQUk7QUFFdEIsYUFBSyxRQUFRO0FBQ2IsYUFBSyxNQUFNO0FBQ1gsYUFBSyxVQUFVO0FBQ2YsYUFBSyxNQUFNLElBQUksZUFBZTtBQUM5QixhQUFLLElBQUksTUFBTSxNQUFNO0FBQ3JCLGFBQUssSUFBSSxNQUFNLE1BQU07QUFFckIsZUFBTyxpQkFBaUIsV0FBVyxTQUFTLEdBQUc7QUFDM0MsY0FBSSxFQUFFLGdCQUFnQixPQUFPLGFBQWM7QUFDM0MsY0FBSSxFQUFFLFlBQVksUUFBUSxFQUFFLGFBQWEsR0FBSTtBQUM3QyxjQUFJLEVBQUUsSUFBSSxVQUFVLEdBQUcsR0FB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UUFBTTtJQUFDckQ7SUFBVTVIO0lBQVE2SDtJQUFRQztFQUFNLElBQUlvRDtBQUMzQyxTQUFPO0lBQ050RCxVQUFVQSxhQUFBLFFBQUFBLGFBQUEsU0FBQUEsV0FBWTtJQUN0QjVILFFBQVFBLFdBQUEsUUFBQUEsV0FBQSxTQUFBQSxTQUFVO0lBQ2xCNkgsUUFBUUEsV0FBQSxRQUFBQSxXQUFBLFNBQUFBLFNBQVU7SUFDbEJDLFFBQVFBLFdBQUEsUUFBQUEsV0FBQSxTQUFBQSxTQUFVO0VBQ25CO0FBQ0Q7O0NDSEMsU0FBU3FELGNBQWM7QUFDdkIsUUFBTUMsZUFBZTFKLGVBQWU7QUFDcEMsTUFBSTBKLGNBQWM7QUFDakI7RUFDRDtBQUVBLFFBQU1DLGNBQWN0SyxjQUFjO0FBQ2xDLE1BQUlzSyxhQUFhO0FBQ2hCekwsNEJBQXdCO0FBQ3hCO0VBQ0Q7QUFFQSxRQUFNMEwsYUFBYWhLLGFBQWE7QUFDaEMsTUFBSWdLLFlBQVk7QUFDZnpMLDZCQUF5QjtBQUN6QjtFQUNEO0FBRUEsUUFBTW9MLFdBQVdELFlBQVk7QUFDN0IsTUFBSSxDQUFDQyxVQUFVO0FBQ2RuTCx5QkFBcUI7QUFDckI7RUFDRDtBQUVBLFFBQU07SUFBQ0U7RUFBTSxJQUFJaUw7QUFDakIsTUFBSSxDQUFDakwsUUFBUTtBQUNaRix5QkFBcUI7QUFDckI7RUFDRDtBQUVBLFFBQU15TCxtQkFBbUJuTCxtQkFBbUJKLE1BQU07QUFDbEQsTUFBSXVMLGtCQUFrQjtBQUNyQnhMLGlDQUE2QkMsTUFBTTtBQUNuQztFQUNEO0FBRUEsT0FBSzBILFNBQVN1RCxRQUFRO0FBQ3RCaEwsc0JBQW9CRCxNQUFNO0FBQzNCLEdBQUc7IiwKICAibmFtZXMiOiBbIkJyb2FkY2FzdENoYW5uZWwiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZm9vdGVyTm90aWNlIiwgInNlY3Rpb25JZFNwYW4iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFyY2hpdmUiLCAibG9jYWxpemUiLCAiZW4iLCAiQXJjaGl2aW5nIiwgIkFyY2hpdmVkIiwgIkRlbGV0ZSIsICJEZWxldGluZyIsICJEZWxldGVkIiwgInpoIiwgIlJlZnJlc2giLCAiUmVmcmVzaGluZyIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZWxlbWVudFdyYXAiLCAiaWQiLCAiaW5uZXJFbGVtZW50IiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAib25DbGlja1dyYXAiLCAidGV4dENvbnRlbnQiLCAib25DbGljayIsICJjbGFzcyIsICJjb25jYXQiLCAicGlwZUVsZW1lbnQiLCAic2VjdGlvbklkU3BhbkVsZW1lbnQiLCAic3BhbldyYXAiLCAiaW5uZXJIVE1MIiwgIm5vdGljZU1lc3NhZ2UiLCAiZm9vdGVyTm90aWNlMiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAidGFnIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicHJlcGVuZCIsICJzYW5pdGl6ZSIsICJzdHJpbmciLCAicmVwbGFjZSIsICJpbkJsYWNrbGlzdEZvb3Rlck5vdGljZSIsICJub3RBbGxvd2VkZWRGb290ZXJOb3RpY2UiLCAibm9BcmNMb2NGb290ZXJOb3RpY2UiLCAiYXJjTG9jTm90QWxsb3dlZEZvb3Rlck5vdGljZSIsICJhcmNMb2MiLCAiZW5hYmxlZEZvb3Rlck5vdGljZSIsICJ0aXRsZSIsICJocmVmIiwgImlmQXJjTG9jTm90QWxsb3dlZCIsICJ3Z1BhZ2VOYW1lIiwgInNvdXJjZVRpdGxlIiwgIlRpdGxlIiwgImFyY0xvY1RpdGxlIiwgImFyY0xvY05hbWVzcGFjZUlkIiwgImdldE5hbWVzcGFjZUlkIiwgImFyY0xvY1BhZ2VOYW1lIiwgImdldE1haW4iLCAic291cmNlTmFtZXNwYWNlSWQiLCAic291cmNlUGFnZU5hbWUiLCAiaXNJbkJsYWNrbGlzdCIsICJibGFja0xpc3RSZWdleEFyciIsICJfaSIsICJfYmxhY2tMaXN0UmVnZXhBcnIiLCAibGVuZ3RoIiwgImVsZW1lbnQiLCAidGVzdCIsICJpc05vdEFsbG93ZWQiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dSZWxldmFudFVzZXJOYW1lIiwgIndnVXNlck5hbWUiLCAiaXNOb3RTdXBwb3J0ZWQiLCAid2dJc01haW5QYWdlIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1JldmlzaW9uSWQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiZ2V0U2VjdGlvbnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInBhZ2UiLCAicHJvcCIsICJwYXJzZSIsICJzZWN0aW9ucyIsICJzZWN0aW9uc1RvQXJjaGl2ZSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJzZWN0aW9uIiwgInZhbHVlIiwgImxldmVsIiwgImluZGV4IiwgImFuY2hvciIsICJzdGFydHNXaXRoIiwgImVyciIsICJlIiwgImYiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldFNlY3Rpb25Db250ZW50IiwgIl9yZWYyIiwgIl9yZXNwb25zZSRxdWVyeSRwYWdlcyIsICJydnByb3AiLCAidGl0bGVzIiwgInJ2c2VjdGlvbiIsICJydnNsb3RzIiwgInJlc3BvbnNlIiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImNvbnRlbnQiLCAiX3gyIiwgImNoZWNrSWZQYWdlRXhpc3QiLCAiX3JlZjMiLCAiYXJjaGl2ZVRvIiwgIl9xdWVyeSRwYWdlcyQiLCAicXVlcnkiLCAibWlzc2luZyIsICJfeDMiLCAiY2hlY2tJZlNlY3Rpb25FeGlzdCIsICJfcmVmNCIsICJpZlNlY3Rpb25FeGlzdCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJfeDQiLCAicmVtb3ZlU2VjdGlvbiIsICJfcmVmNSIsICJzdW1tYXJ5IiwgImVkaXQiLCAidGV4dCIsICJtaW5vciIsICJfeDUiLCAiYXJjaGl2ZVNlY3Rpb24iLCAiX3JlZjYiLCAicGFnZUV4aXN0IiwgImNyZWF0ZSIsICJhcHBlbmR0ZXh0IiwgIl94NiIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAid2dTY3JpcHQiLCAicmVmcmVzaCIsICJ0YXJnZXRQYWdlIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInV0aWwiLCAiZ2V0VXJsIiwgInJlcGxhY2VDaGlsZCIsICJuZXdDaGlsZCIsICJoYXNDaGlsZE5vZGVzIiwgIl9lbGVtZW50JGZpcnN0Q2hpbGQiLCAiZmlyc3RDaGlsZCIsICJyZW1vdmUiLCAiYXBwZW5kIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJhZGRMaW5rcyIsICJfcmVmNyIsICJhcmNMZXZlbCIsICJzZWNBcmMiLCAic2VjRGVsIiwgImhlYWRpbmdzIiwgImhlYWRsaW5lcyIsICJoZWFkaW5nSW5kaWNlcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJoZWFkaW5nIiwgImhlYWRsaW5lIiwgInNlY3Rpb25JZFNwYW5zIiwgIm1lc3NhZ2VDaGFubmVsIiwgIkJyb2FkY2FzdENoYW5uZWwiLCAicmVmcmVzaENoYW5uZWwiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiX2kyIiwgIl9oZWFkaW5nSW5kaWNlcyIsICJnZXRFbGVtZW50QnlJZCIsICJwYXJlbnRIZWFkaW5nIiwgInBhcmVudEVsZW1lbnQiLCAiZWRpdFNlY3Rpb24iLCAic2VjdGlvbklkU3BhbjIiLCAiYXJjaGl2ZVNlY3Rpb25MaW5rIiwgImluZGV4Tm8iLCAidG9hc3QiLCAiYXJjaGl2ZU9uQ2xpY2siLCAiZXZlbnQiLCAiX2V2ZW50JHRhcmdldCIsICJwcmV2ZW50RGVmYXVsdCIsICJ0YXJnZXQiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAic3BhbiIsICJtZXNzYWdlMSIsICJwb3N0TWVzc2FnZSIsICJjbG9zZSIsICJ0aGVuIiwgIm1lc3NhZ2UyIiwgInJlbW92ZVNlY3Rpb25MaW5rIiwgInJlbW92ZU9uQ2xpY2siLCAiX2V2ZW50JHRhcmdldDIiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiYXJjaGl2ZUxpbmsiLCAicmVtb3ZlTGluayIsICJhZGRFdmVudExpc3RlbmVyIiwgIl9pMyIsICJfc2VjdGlvbklkU3BhbnMiLCAiZGF0YSIsICJub2RlIiwgIl94NyIsICJnZXRTZXR0aW5ncyIsICJzZXR0aW5ncyIsICJkYXRhc2V0IiwgImVhc3lBcmNoaXZlIiwgIm5vdFN1cHBvcnRlZCIsICJpbkJsYWNrbGlzdCIsICJub3RBbGxvd2VkIiwgImFyY0xvY05vdEFsbG93ZWQiXQp9Cg==
