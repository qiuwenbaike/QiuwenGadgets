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
  children
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, mw.config.get("skin") === "citizen" ? /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
  id: id !== null && id !== void 0 ? id : elementId,
  className: [footerNotice, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
}, children !== null && children !== void 0 ? children : /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)) : ["vector", "vector-2022", "gongbi"].includes(mw.config.get("skin")) || document.querySelector("ul#footer-info") ? /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
  id: id !== null && id !== void 0 ? id : elementId,
  className: [footerNotice, "noprint"]
}, children !== null && children !== void 0 ? children : /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)) : /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  id: id !== null && id !== void 0 ? id : elementId,
  className: [footerNotice, "noprint"]
}, children !== null && children !== void 0 ? children : /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)));
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
}, children !== null && children !== void 0 ? children : /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null));
var Pipe = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  className: "mw-editsection-divider",
  textContent: "|"
});
var EditConflictNotice = ({
  onClick
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, getMessage("Edit Confilict Notice"), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  onClick
}, getMessage("Refresh")));
//! src/EasyArchive/modules/addLinks.tsx
var import_ext_gadget8 = __toESM(require("ext.gadget.React"), 1);
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
    archiveTo,
    toastifyInstance
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
var import_ext_gadget9 = require("ext.gadget.Toastify");
var appendFooterNotice = (element) => {
  const mountPoint = document.querySelector(mountPointSelector);
  if (mountPoint) {
    mountPoint.prepend(element);
  }
};
var addLinks = /* @__PURE__ */ function() {
  var _ref9 = _asyncToGenerator(function* ({
    arcLevel,
    arcLoc,
    secArc,
    secDel
  }) {
    if (!arcLoc) {
      return;
    }
    appendFooterNotice(/* @__PURE__ */ import_ext_gadget8.default.createElement(Enabled, {
      arcLoc
    }));
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
        headlines[headlines.length] = headline === null || headline === void 0 ? void 0 : headline.id;
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
    for (var _i = 0, _headingIndices = headingIndices; _i < _headingIndices.length; _i++) {
      const {
        indexNo,
        anchor
      } = _headingIndices[_i];
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
      for (var _i2 = 0, _sectionIdSpans = sectionIdSpans; _i2 < _sectionIdSpans.length; _i2++) {
        const span = _sectionIdSpans[_i2];
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
  for (var _i3 = 0, _blackListRegexArr = blackListRegexArr; _i3 < _blackListRegexArr.length; _i3++) {
    const element = _blackListRegexArr[_i3];
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
    arcLoc: arcLoc !== null && arcLoc !== void 0 ? arcLoc : null,
    secArc: secArc !== null && secArc !== void 0 ? secArc : "1",
    secDel: secDel !== null && secDel !== void 0 ? secDel : "1"
  };
};
//! src/EasyArchive/EasyArchive.tsx
var import_ext_gadget10 = __toESM(require("ext.gadget.React"));
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
  void addLinks(settings);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL3JlYWN0LnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL0Vhc3lBcmNoaXZlLm1vZHVsZS5sZXNzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9zYW5pdGl6ZS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9hZGRMaW5rcy50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9nZXRTZWN0aW9uLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvZWRpdFNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9nZXRNZXNzYWdlLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvb25DbGljay50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9yZWZyZXNoUGFnZS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL3NlY3Rpb25MaW5rLnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2dldFNldHRpbmdzLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9FYXN5QXJjaGl2ZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgICB2YXIgY2hhbm5lbHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIEJyb2FkY2FzdENoYW5uZWwoY2hhbm5lbCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICBjaGFubmVsID0gU3RyaW5nKGNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBpZCA9ICckQnJvYWRjYXN0Q2hhbm5lbCQnICsgY2hhbm5lbCArICckJztcblxuICAgICAgICBjaGFubmVsc1tpZF0gPSBjaGFubmVsc1tpZF0gfHwgW107XG4gICAgICAgIGNoYW5uZWxzW2lkXS5wdXNoKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX25hbWUgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWMgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDEuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDIuc3RhcnQoKTtcblxuICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnN0b3JhZ2VBcmVhICE9PSBnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5uZXdWYWx1ZSA9PSBudWxsIHx8IGUubmV3VmFsdWUgPT09ICcnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5rZXkuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCkgIT09IGlkKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAkdGhpcy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEJyb2FkY2FzdENoYW5uZWwucHJvdG90eXBlID0ge1xuICAgICAgICAvLyBCcm9hZGNhc3RDaGFubmVsIEFQSVxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0TWVzc2FnZTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gb3RoZXIgY29udGV4dHMgdmlhIHN0b3JhZ2UgZXZlbnRzLi4uXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5faWQgKyBTdHJpbmcoRGF0ZS5ub3coKSkgKyAnJCcgKyBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIGN1cnJlbnQgY29udGV4dCB2aWEgcG9ydHNcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5mb3JFYWNoKGZ1bmN0aW9uKGJjKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJjID09PSAkdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGJjLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0Mi5jbG9zZSgpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGFubmVsc1t0aGlzLl9pZF0uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEV2ZW50VGFyZ2V0IEFQSVxuICAgICAgICBnZXQgb25tZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9ubWVzc2FnZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEub25tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oLypldmVudCovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuZGlzcGF0Y2hFdmVudC5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgPSBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCB8fCBCcm9hZGNhc3RDaGFubmVsO1xufSkoc2VsZik7XG4iLCAie1xuXHRcImVsZW1lbnRJZFwiOiBcImdhZGdldC1lYXN5X2FyY2hpdmVcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2Zvb3Rlck5vdGljZSwgc2VjdGlvbklkU3Bhbn0gZnJvbSAnLi9FYXN5QXJjaGl2ZS5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtzYW5pdGl6ZX0gZnJvbSAnLi4vdXRpbC9zYW5pdGl6ZSc7XG5cbmludGVyZmFjZSBGb290ZXJOb3RpY2VQcm9wcyB7XG5cdGlkPzogc3RyaW5nO1xuXHRjaGlsZHJlbj86IFJlYWN0RWxlbWVudCB8IFJlYWN0RWxlbWVudFtdO1xufVxuXG5jb25zdCBGb290ZXJOb3RpY2UgPSAoe2lkLCBjaGlsZHJlbn06IEZvb3Rlck5vdGljZVByb3BzKSA9PiAoXG5cdDw+XG5cdFx0e213LmNvbmZpZy5nZXQoJ3NraW4nKSA9PT0gJ2NpdGl6ZW4nID8gKFxuXHRcdFx0PHNlY3Rpb25cblx0XHRcdFx0aWQ9e2lkID8/IE9QVElPTlMuZWxlbWVudElkfVxuXHRcdFx0XHRjbGFzc05hbWU9e1tmb290ZXJOb3RpY2UsICdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nLCAnbm9wcmludCddfVxuXHRcdFx0PlxuXHRcdFx0XHR7Y2hpbGRyZW4gPz8gPD48Lz59XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KSA6IFsndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJywgJ2dvbmdiaSddLmluY2x1ZGVzKG13LmNvbmZpZy5nZXQoJ3NraW4nKSkgfHxcblx0XHQgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykgPyAoXG5cdFx0XHQ8bGkgaWQ9e2lkID8/IE9QVElPTlMuZWxlbWVudElkfSBjbGFzc05hbWU9e1tmb290ZXJOb3RpY2UsICdub3ByaW50J119PlxuXHRcdFx0XHR7Y2hpbGRyZW4gPz8gPD48Lz59XG5cdFx0XHQ8L2xpPlxuXHRcdCkgOiAoXG5cdFx0XHQ8ZGl2IGlkPXtpZCA/PyBPUFRJT05TLmVsZW1lbnRJZH0gY2xhc3NOYW1lPXtbZm9vdGVyTm90aWNlLCAnbm9wcmludCddfT5cblx0XHRcdFx0e2NoaWxkcmVuID8/IDw+PC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KX1cblx0PC8+XG4pO1xuXG5jb25zdCBJbkJsYWNrTGlzdCA9ICgpID0+IChcblx0PEZvb3Rlck5vdGljZSBpZD1cImVhc3lfYXJjaGl2ZV9ub3Rfc3VwcG9ydGVkX25vdGljZVwiPlxuXHRcdDxzcGFuPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkJyl9XG5cdFx0XHQ8YnIgLz5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCBkZXRhaWxzJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmNvbnN0IE5vdEFsbG93ZWQgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2UgaWQ9XCJlYXN5X2FyY2hpdmVfbm90X2FsbG93ZWRfbm90aWNlXCI+XG5cdFx0PHNwYW4+e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3QgYWxsb3dlZCcpfTwvc3Bhbj5cblx0PC9Gb290ZXJOb3RpY2U+XG4pO1xuXG5pbnRlcmZhY2UgQXJjTG9jTm90QWxsb3dlZFByb3BzIHtcblx0YXJjTG9jOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFyY0xvY05vdEFsbG93ZWQgPSAoe2FyY0xvY306IEFyY0xvY05vdEFsbG93ZWRQcm9wcykgPT4gKFxuXHQ8Rm9vdGVyTm90aWNlIGlkPVwiZWFzeV9hcmNoaXZlX2FyY19sb2Nfbm90X2FsbG93ZWRfbm90aWNlXCI+XG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCcpLnJlcGxhY2UoJyQxJywgc2FuaXRpemUoYXJjTG9jKSl9XG5cdFx0XHQ8YnIgLz5cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkIGRldGFpbHMnKX1cblx0XHQ8L3NwYW4+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuY29uc3QgTm9BcmNMb2MgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2UgaWQ9XCJlYXN5X2FyY2hpdmVfbm9fYXJjX2xvY19ub3RpY2VcIj5cblx0XHQ8c3Bhbj57Z2V0TWVzc2FnZSgnTm8gQXJjaGl2ZSBMb2NhdGlvbicpfTwvc3Bhbj5cblx0PC9Gb290ZXJOb3RpY2U+XG4pO1xuXG5pbnRlcmZhY2UgRW5hYmxlZFByb3BzIHtcblx0YXJjTG9jOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVuYWJsZWQgPSAoe2FyY0xvY306IEVuYWJsZWRQcm9wcykgPT4gKFxuXHQ8Rm9vdGVyTm90aWNlIGlkPVwiZWFzeV9hcmNoaXZlX2FyY19sb2Nfbm90X2FsbG93ZWRfbm90aWNlXCI+XG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIGVuYWJsZWQnKX1cblx0XHRcdHtnZXRNZXNzYWdlKCcoJyl9XG5cdFx0XHR7Z2V0TWVzc2FnZSgnQXJjaGl2ZSBsb2NhdGlvbicpfVxuXHRcdFx0PGEgdGl0bGU9e3Nhbml0aXplKGFyY0xvYyl9IGhyZWY9e2Avd2lraS8ke3Nhbml0aXplKGFyY0xvYyl9YH0+XG5cdFx0XHRcdHthcmNMb2N9XG5cdFx0XHQ8L2E+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnKScpfVxuXHRcdFx0e2dldE1lc3NhZ2UoJy4nKX1cblx0XHQ8L3NwYW4+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuaW50ZXJmYWNlIE9uQ2xpY2tQcm9wcyB7XG5cdHRleHRDb250ZW50OiBzdHJpbmc7XG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXHRvbkNsaWNrPzogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcbn1cblxuY29uc3QgT25DbGljayA9ICh7dGV4dENvbnRlbnQsIGNsYXNzTmFtZSwgb25DbGlja306IE9uQ2xpY2tQcm9wcykgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzTmFtZT17WydnYWRnZXQtZWFzeV9hcmNoaXZlX19saW5rJywgYGdhZGdldC1lYXN5X2FyY2hpdmVfX2xpbmstJHtjbGFzc05hbWV9YF19XG5cdFx0b25DbGljaz17b25DbGljayB8fCAoKCkgPT4ge30pfVxuXHRcdHRleHRDb250ZW50PXt0ZXh0Q29udGVudH1cblx0Lz5cbik7XG5cbmludGVyZmFjZSBTZWN0aW9uSURQcm9wcyB7XG5cdGNoaWxkcmVuPzogUmVhY3RFbGVtZW50IHwgUmVhY3RFbGVtZW50W107XG59XG5cbmNvbnN0IFNlY3Rpb25JRCA9ICh7Y2hpbGRyZW59OiBTZWN0aW9uSURQcm9wcykgPT4gPHNwYW4gY2xhc3NOYW1lPXtzZWN0aW9uSWRTcGFufT57Y2hpbGRyZW4gPz8gPD48Lz59PC9zcGFuPjtcblxuY29uc3QgUGlwZSA9ICgpID0+IDxzcGFuIGNsYXNzTmFtZT1cIm13LWVkaXRzZWN0aW9uLWRpdmlkZXJcIiB0ZXh0Q29udGVudD17J3wnfSAvPjtcblxuaW50ZXJmYWNlIEVkaXRDb25mbGljdE5vdGljZVByb3BzIHtcblx0b25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuY29uc3QgRWRpdENvbmZsaWN0Tm90aWNlID0gKHtvbkNsaWNrfTogRWRpdENvbmZsaWN0Tm90aWNlUHJvcHMpID0+IChcblx0PHNwYW4+XG5cdFx0e2dldE1lc3NhZ2UoJ0VkaXQgQ29uZmlsaWN0IE5vdGljZScpfVxuXHRcdDxhIG9uQ2xpY2s9e29uQ2xpY2t9PntnZXRNZXNzYWdlKCdSZWZyZXNoJyl9PC9hPlxuXHQ8L3NwYW4+XG4pO1xuXG5leHBvcnQge1xuXHRGb290ZXJOb3RpY2UsXG5cdEVuYWJsZWQsXG5cdEluQmxhY2tMaXN0LFxuXHROb3RBbGxvd2VkLFxuXHRBcmNMb2NOb3RBbGxvd2VkLFxuXHROb0FyY0xvYyxcblx0T25DbGljayxcblx0UGlwZSxcblx0U2VjdGlvbklELFxuXHRFZGl0Q29uZmxpY3ROb3RpY2UsXG59O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL0Vhc3lBcmNoaXZlLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgZm9vdGVyTm90aWNlID0gXCJFYXN5QXJjaGl2ZS1tb2R1bGVfX2Zvb3Rlck5vdGljZV9aUmtHMXFcIjtcbmV4cG9ydCBjb25zdCBzZWN0aW9uSWRTcGFuID0gXCJFYXN5QXJjaGl2ZS1tb2R1bGVfX3NlY3Rpb25JZFNwYW5fWlJrRzFxXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJmb290ZXJOb3RpY2VcIjogZm9vdGVyTm90aWNlLFxuICBcInNlY3Rpb25JZFNwYW5cIjogc2VjdGlvbklkU3BhblxufTtcbiAgICAgICIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QXJjaGl2ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIGxvY2F0aW9uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlIGxvY2F0aW9uOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5Zyw5Z2A77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOiHs++8micsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgYnV0IEVhc3kgYXJjaGl2ZSBjYW5ub3Qgb3BlcmF0ZSBsaWtlIHRoaXMuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouebruWJjeeahOWtmOaho+WcsOWdgOaYr+KAnCQx4oCd44CCRWFzeSBBcmNoaXZlIOaXoOazleaMieatpOWcsOWdgOWtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLnlbbliY3nmoTlrZjmqpTlnLDlnYDmmK/jgIwkMeOAjeOAgkVhc3kgQXJjaGl2ZSDnhKHms5XmjInmraTlnLDlnYDlrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkIGRldGFpbHMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmVzIHNob3VsZCBub3QgYmUgbm9ybWFsbHkgZGlyZWN0ZWQgdG8gcGFnZXMgdW5kZXIgYXJ0aWNsZSBuYW1lc3BhY2UuIFBsZWFzZSBjaGVjayBpZiB5b3UgaGF2ZSB0aGUgY29ycmVjdCBhcmNoaXZlIGxvY2F0aW9uLicsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDoiKzogIzoqIDvvIzkuI3lupTlkJHmnaHnm67lkI3np7Dnqbrpl7Tov5vooYzlrZjmoaPjgILmraTlpJbvvIzlrZjmoaPlnLDlnYDkuI3lvpflkozmraTpobXpnaLlkI3np7Dnm7jlkIzjgILor7fmo4Dmn6XlrZjmoaPlnLDlnYDjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA6Iis6ICM6KiA77yM5LiN5oeJ5ZCR5qKd55uu5ZCN56ix56m66ZaT6YCy6KGM5a2Y5qqU44CC5q2k5aSW77yM5a2Y5qqU5Zyw5Z2A5LiN5b6X5ZKM5q2k6aCB6Z2i5ZCN56ix55u45ZCM44CC6KuL5qqi5p+l5a2Y5qqU5Zyw5Z2A44CCJyxcblx0XHR9KSxcblx0XHRBcmNoaXZpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2aW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+S4rScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTkuK0nLFxuXHRcdH0pLFxuXHRcdEFyY2hpdmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflt7LlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdFZGl0IENvbmZpbGljdCBOb3RpY2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBoYXZlIGFscmVhZHkgYXJjaGl2ZWQgYW5kL29yIGRlbGV0ZWQgYSBzZWN0aW9uIG9uIHRoaXMgcGFnZS4gUGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2UgYW5kIGNvbnRpbnVlIGFyY2hpdmluZyBvciBkZWxldGluZyBvdGhlciBzZWN0aW9ucyB0byBhdm9pZCBlZGl0aW5nIGNvbmZsaWN0cy4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo5bey57uP5Zyo5pys6aG16Z2i5omn6KGM5LqG5a2Y5qGj44CB5Yig6Zmk56ug6IqC55qE5pON5L2c44CC6K+35Yi35paw6aG16Z2i77yM54S25ZCO57un57ut5a2Y5qGj44CB5Yig6Zmk5pys6aG16Z2i55qE5YW25LuW56ug6IqC77yM5Lul6YG/5YWN57yW6L6R5Yay56qB44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOW3sue2k+WcqOacrOmggemdouWft+ihjOS6huWtmOaqlOOAgeWIqumZpOeroOevgOeahOaTjeS9nOOAguiri+WIt+aWsOmggemdou+8jOeEtuW+jOe5vOe6jOWtmOaqlOOAgeWIqumZpOacrOmggemdoueahOWFtuS7lueroOevgO+8jOS7pemBv+WFjee3qOi8r+ihneeqgeOAgicsXG5cdFx0fSksXG5cdFx0RGVsZXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZScsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHREZWxldGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdEZWxldGluZycsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5LitJyxcblx0XHR9KSxcblx0XHREZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWIqumZpCcsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+auteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdCdDcmVhdGUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnY3JlYXRlIGFyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bu656uL5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W7uueri+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0RlbGV0ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5q616JC9Jyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIGVuYWJsZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBlbmFibGVkIG9uIHRoaXMgdGFsayBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acrOiuqOiuuumhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBhbGxvd2VkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgY2Fubm90IHVzZSBFYXN5IEFyY2hpdmUgdG8gYXJjaGl2ZSB0aHJlYWRzIG9uIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo5LiN5Y+v5Lul5Zyo5q2k6aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo5LiN5Y+v5Lul5Zyo5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCBkZXRhaWxzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGVzZSBwYWdlcyBhcmUgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmU6IEFydGljbGUsIEZpbGUsIFRlbXBsYXRlLCBNb2R1bGUsIE1lZGlhV2lraSwgQ2F0ZWdvcnksIFNwZWNpYWwsIEphdmFTY3JpcHQsIENTUywgSlNPTi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6L+Z5Lqb6aG16Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJrmnaHnm67jgIFGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfpgJnkupvpoIHpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8muaineebru+8jEZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHR9KSxcblx0XHQnTm8gQXJjaGl2ZSBMb2NhdGlvbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGNhbiBiZSB1c2VkIG9uIHRoaXMgcGFnZSBpZiBuZWVkZWQuIFRvIGVuYWJsZSBpdCwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6Iul6ZyA6KaB77yM5q2k6aG16Z2i5Y+v5Lul5ZCv55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzor7flnKjpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6Iul6ZyA6KaB77yM5q2k6aCB6Z2i5Y+v5Lul5ZWf55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzoq4vlnKjpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdCdTZWN0aW9uICQxJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWN0aW9uICQxJyxcblx0XHRcdHpoOiAn56ysICQxIOeroOiKgicsXG5cdFx0fSksXG5cdFx0JygnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHQnKSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKScsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0Jy4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHRcdCc6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc6ICcsXG5cdFx0XHR6aDogJ++8micsXG5cdFx0fSksXG5cdFx0UmVmcmVzaDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWZyZXNoIHRoZSBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIt+aWsOW9k+WJjemhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfph43mlrDovInlhaXnlbbliY3poIEnLFxuXHRcdH0pLFxuXHRcdFJlZnJlc2hpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVmcmVzaGluZy4uLicsXG5cdFx0XHRqYTogJ+WGjeiqreOBv+i+vOOBv+OBl+OBvuOBmS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfljbPlsIbliLfmlrDlvZPliY3pobXpnaLigKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Y2z5bCH6YeN5paw6LyJ5YWl55W25YmN6aCB4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIHN0cmluZ1xuXHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufTtcblxuZXhwb3J0IHtzYW5pdGl6ZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtFZGl0Q29uZmxpY3ROb3RpY2UsIEVuYWJsZWR9IGZyb20gJy4vY29tcG9uZW50cy9yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtBcmNoaXZlQW5kRGVsZXRlU2VjdGlvbkxpbmt9IGZyb20gJy4vY29tcG9uZW50cy9zZWN0aW9uTGluayc7XG5pbXBvcnQge2dldFNlY3Rpb25zfSBmcm9tICcuL3V0aWwvZ2V0U2VjdGlvbic7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gJy4vdXRpbC9yZWZyZXNoUGFnZSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYXBwZW5kRm9vdGVyTm90aWNlID0gKGVsZW1lbnQ6IEVsZW1lbnQpID0+IHtcblx0Y29uc3QgbW91bnRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblxuXHRpZiAobW91bnRQb2ludCkge1xuXHRcdG1vdW50UG9pbnQucHJlcGVuZChlbGVtZW50KTtcblx0fVxufTtcblxuY29uc3QgYWRkTGlua3MgPSBhc3luYyAoe1xuXHRhcmNMZXZlbCxcblx0YXJjTG9jLFxuXHRzZWNBcmMsXG5cdHNlY0RlbCxcbn06IHtcblx0YXJjTGV2ZWw6IHN0cmluZztcblx0YXJjTG9jOiBzdHJpbmcgfCBudWxsO1xuXHRzZWNBcmM6IHN0cmluZztcblx0c2VjRGVsOiBzdHJpbmc7XG59KSA9PiB7XG5cdGlmICghYXJjTG9jKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGFwcGVuZEZvb3Rlck5vdGljZSg8RW5hYmxlZCBhcmNMb2M9e2FyY0xvY30gLz4pO1xuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRjb25zdCBoZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGgke2FyY0xldmVsfWApO1xuXHRjb25zdCBoZWFkbGluZXMgPSBbXTtcblx0Y29uc3QgaGVhZGluZ0luZGljZXMgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGhlYWRpbmcgb2YgaGVhZGluZ3MpIHtcblx0XHRjb25zdCBoZWFkbGluZSA9IGhlYWRpbmcucXVlcnlTZWxlY3RvcignLm13LWhlYWRsaW5lJyk7XG5cdFx0aGVhZGxpbmVzW2hlYWRsaW5lcy5sZW5ndGhdID0gaGVhZGxpbmU/LmlkO1xuXHR9XG5cblx0Y29uc3Qgc2VjdGlvbklkU3BhbnM6IFJlYWN0RWxlbWVudFtdID0gW107XG5cdGxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cblx0Y29uc3QgbWVzc2FnZUNoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChgJHt3Z1BhZ2VOYW1lfV9tZXNzYWdlYCk7XG5cdGNvbnN0IHJlZnJlc2hDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoYCR7d2dQYWdlTmFtZX1fcmVmcmVzaGApO1xuXG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9uc1RvQXJjaGl2ZSkge1xuXHRcdGlmIChzZWN0aW9uLmxldmVsICE9PSBhcmNMZXZlbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGhlYWRsaW5lcy5pbmNsdWRlcyhzZWN0aW9uLmFuY2hvcikpIHtcblx0XHRcdGhlYWRpbmdJbmRpY2VzW2hlYWRpbmdJbmRpY2VzLmxlbmd0aF0gPSB7XG5cdFx0XHRcdGluZGV4Tm86IHNlY3Rpb24uaW5kZXgsXG5cdFx0XHRcdGFuY2hvcjogc2VjdGlvbi5hbmNob3IsXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdGZvciAoY29uc3Qge2luZGV4Tm8sIGFuY2hvcn0gb2YgaGVhZGluZ0luZGljZXMpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItcXVlcnktc2VsZWN0b3Jcblx0XHRjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFuY2hvcik7XG5cdFx0aWYgKCFoZWFkbGluZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFyZW50SGVhZGluZyA9IGhlYWRsaW5lLnBhcmVudEVsZW1lbnQ7XG5cdFx0aWYgKCFwYXJlbnRIZWFkaW5nKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBlZGl0U2VjdGlvbiA9IHBhcmVudEhlYWRpbmcucXVlcnlTZWxlY3RvcignLm13LWVkaXRzZWN0aW9uJyk7XG5cdFx0aWYgKCFlZGl0U2VjdGlvbikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2VjdGlvbklEU3BhbiA9IChcblx0XHRcdDxBcmNoaXZlQW5kRGVsZXRlU2VjdGlvbkxpbmtcblx0XHRcdFx0c2VjdGlvbklkU3BhbnM9e3NlY3Rpb25JZFNwYW5zfVxuXHRcdFx0XHRtZXNzYWdlQ2hhbm5lbD17bWVzc2FnZUNoYW5uZWx9XG5cdFx0XHRcdHJlZnJlc2hDaGFubmVsPXtyZWZyZXNoQ2hhbm5lbH1cblx0XHRcdFx0aW5kZXhObz17aW5kZXhOb31cblx0XHRcdFx0YW5jaG9yPXthbmNob3J9XG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2U9e3RvYXN0aWZ5SW5zdGFuY2V9XG5cdFx0XHRcdGFyY0xvYz17YXJjTG9jfVxuXHRcdFx0XHRzZWNBcmM9e3NlY0FyY31cblx0XHRcdFx0c2VjRGVsPXtzZWNEZWx9XG5cdFx0XHQvPlxuXHRcdCk7XG5cblx0XHRlZGl0U2VjdGlvbi5wcmVwZW5kKHNlY3Rpb25JRFNwYW4pO1xuXHRcdHNlY3Rpb25JZFNwYW5zW3NlY3Rpb25JZFNwYW5zLmxlbmd0aF0gPSBzZWN0aW9uSURTcGFuO1xuXHR9XG5cblx0bWVzc2FnZUNoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudCkgPT4ge1xuXHRcdGZvciAoY29uc3Qgc3BhbiBvZiBzZWN0aW9uSWRTcGFucykge1xuXHRcdFx0c3Bhbi5yZW1vdmUoKTtcblx0XHR9XG5cdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGV2ZW50LmRhdGEgYXMgc3RyaW5nLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IDMgKiAxMDAwLFxuXHRcdFx0fSxcblx0XHRcdCdpbmZvJ1xuXHRcdCk7XG5cdH0pO1xuXG5cdHJlZnJlc2hDaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoKSA9PiB7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdG5vZGU6IChcblx0XHRcdFx0XHQ8RWRpdENvbmZsaWN0Tm90aWNlXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0XHRcdFx0XHRcdHJlZnJlc2goKTtcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkTGlua3MsIGFwcGVuZEZvb3Rlck5vdGljZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBFYXN5QXJjaGl2ZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGdldFNlY3Rpb25zID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHBhZ2U6IHRpdGxlLFxuXHRcdHByb3A6ICdzZWN0aW9ucycsXG5cdH07XG5cblx0Y29uc3Qge3BhcnNlfSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0Y29uc3Qge3NlY3Rpb25zfSA9IHBhcnNlIGFzIHtcblx0XHRzZWN0aW9uczoge1xuXHRcdFx0bGV2ZWw6IHN0cmluZztcblx0XHRcdGluZGV4OiBzdHJpbmc7XG5cdFx0XHRhbmNob3I6IHN0cmluZztcblx0XHR9W107XG5cdH07XG5cblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBbXTtcblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRjb25zdCB7bGV2ZWwsIGluZGV4LCBhbmNob3J9ID0gc2VjdGlvbjtcblxuXHRcdGlmIChpbmRleC5zdGFydHNXaXRoKCdULScpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRzZWN0aW9uc1RvQXJjaGl2ZVtzZWN0aW9uc1RvQXJjaGl2ZS5sZW5ndGhdID0ge1xuXHRcdFx0bGV2ZWwsXG5cdFx0XHRpbmRleCxcblx0XHRcdGFuY2hvcixcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHNlY3Rpb25zVG9BcmNoaXZlO1xufTtcblxuY29uc3QgZ2V0U2VjdGlvbkNvbnRlbnQgPSBhc3luYyAoe3RpdGxlLCBzZWN0aW9ufToge3RpdGxlOiBzdHJpbmc7IHNlY3Rpb246IHN0cmluZ30pOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHRpdGxlczogdGl0bGUsXG5cdFx0cnZzZWN0aW9uOiBzZWN0aW9uLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0fTtcblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gKHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdPy5yZXZpc2lvbnM/LlswXS5zbG90cy5tYWluLmNvbnRlbnQgYXMgc3RyaW5nKSA/PyBudWxsO1xufTtcblxuZXhwb3J0IHtnZXRTZWN0aW9ucywgZ2V0U2VjdGlvbkNvbnRlbnR9O1xuIiwgImltcG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnQsIGdldFNlY3Rpb25zfSBmcm9tICcuL2dldFNlY3Rpb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGlzUGFnZUV4aXN0ID0gYXN5bmMgKGFyY2hpdmVUbzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbmZvUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2luZm8nLFxuXHRcdHRpdGxlczogYXJjaGl2ZVRvLFxuXHR9O1xuXG5cdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0aWYgKHF1ZXJ5LnBhZ2VzWzBdPy5taXNzaW5nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBpc1NlY3Rpb25FeGlzdCA9IGFzeW5jICh7aW5kZXgsIGFuY2hvcn06IHtpbmRleDogc3RyaW5nOyBhbmNob3I6IHN0cmluZ30pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9ucyA9IGF3YWl0IGdldFNlY3Rpb25zKHdnUGFnZU5hbWUpO1xuXG5cdGxldCBpc0V4aXN0ID0gZmFsc2U7XG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuXHRcdGlmIChpbmRleCA9PT0gc2VjdGlvbi5pbmRleCAmJiBhbmNob3IgPT09IHNlY3Rpb24uYW5jaG9yKSB7XG5cdFx0XHRpc0V4aXN0ID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGlzRXhpc3Q7XG59O1xuXG5jb25zdCByZW1vdmVTZWN0aW9uID0gYXN5bmMgKHtpbmRleCwgYW5jaG9yLCBzdW1tYXJ5fToge2luZGV4OiBzdHJpbmc7IGFuY2hvcjogc3RyaW5nOyBzdW1tYXJ5Pzogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlzRXhpc3QgPSBhd2FpdCBpc1NlY3Rpb25FeGlzdCh7aW5kZXgsIGFuY2hvcn0pO1xuXG5cdGlmIChpc0V4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHt0aXRsZTogd2dQYWdlTmFtZSwgc2VjdGlvbjogaW5kZXh9KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGF3YWl0IGFwaS5lZGl0KHdnUGFnZU5hbWUsICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VjdGlvbjogaW5kZXgsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdHN1bW1hcnk6IHN1bW1hcnkgPz8gZ2V0TWVzc2FnZSgnRGVsZXRlIHN1bW1hcnknKSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xufTtcblxuY29uc3QgYXJjaGl2ZVNlY3Rpb24gPSBhc3luYyAoe2luZGV4LCBhbmNob3IsIGFyY2hpdmVUb306IHtpbmRleDogc3RyaW5nOyBhbmNob3I6IHN0cmluZzsgYXJjaGl2ZVRvOiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaXNFeGlzdCA9IGF3YWl0IGlzU2VjdGlvbkV4aXN0KHtpbmRleCwgYW5jaG9yfSk7XG5cblx0aWYgKGlzRXhpc3QgIT09IHRydWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0U2VjdGlvbkNvbnRlbnQoe3RpdGxlOiB3Z1BhZ2VOYW1lLCBzZWN0aW9uOiBpbmRleH0pO1xuXG5cdGlmIChjb250ZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGFnZUV4aXN0ID0gYXdhaXQgaXNQYWdlRXhpc3QoYXJjaGl2ZVRvKTtcblx0aWYgKCFwYWdlRXhpc3QpIHtcblx0XHRhd2FpdCBhcGkuY3JlYXRlKFxuXHRcdFx0YXJjaGl2ZVRvLFxuXHRcdFx0e1xuXHRcdFx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdDcmVhdGUgc3VtbWFyeScpLFxuXHRcdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHQne3t0YWxrYXJjaGl2ZX19J1xuXHRcdCk7XG5cdH1cblxuXHRhd2FpdCBhcGkuZWRpdChhcmNoaXZlVG8sICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXBwZW5kdGV4dDogYFxcblxcbiR7Y29udGVudH1gLFxuXHRcdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnQXJjaGl2ZSBzdW1tYXJ5JyksXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcblxuXHRhd2FpdCByZW1vdmVTZWN0aW9uKHtpbmRleCwgYW5jaG9yLCBzdW1tYXJ5OiBnZXRNZXNzYWdlKCdBcmNoaXZlIHN1bW1hcnknKX0pO1xufTtcblxuZXhwb3J0IHtpc1NlY3Rpb25FeGlzdCwgYXJjaGl2ZVNlY3Rpb24sIHJlbW92ZVNlY3Rpb259O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdldEFyY2hpdmluZ01lc3NhZ2UgPSAoaW5kZXhObzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBnZXRNZXNzYWdlKCdBcmNoaXZpbmcnKSArIGdldE1lc3NhZ2UoJzonKSArIGdldE1lc3NhZ2UoJ1NlY3Rpb24gJDEnKS5yZXBsYWNlKCckMScsIGluZGV4Tm8pO1xufTtcblxuY29uc3QgZ2V0QXJjaGl2ZWRNZXNzYWdlID0gKGluZGV4Tm86IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gZ2V0TWVzc2FnZSgnQXJjaGl2ZWQnKSArIGdldE1lc3NhZ2UoJzonKSArIGdldE1lc3NhZ2UoJ1NlY3Rpb24gJDEnKS5yZXBsYWNlKCckMScsIGluZGV4Tm8pO1xufTtcblxuY29uc3QgZ2V0RGVsZXRpbmdNZXNzYWdlID0gKGluZGV4Tm86IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gZ2V0TWVzc2FnZSgnRGVsZXRpbmcnKSArIGdldE1lc3NhZ2UoJzonKSArIGdldE1lc3NhZ2UoJ1NlY3Rpb24gJDEnKS5yZXBsYWNlKCckMScsIGluZGV4Tm8pO1xufTtcblxuY29uc3QgZ2V0RGVsZXRlZE1lc3NhZ2UgPSAoaW5kZXhObzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBnZXRNZXNzYWdlKCdEZWxldGVkJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcbn07XG5cbmV4cG9ydCB7Z2V0QXJjaGl2aW5nTWVzc2FnZSwgZ2V0QXJjaGl2ZWRNZXNzYWdlLCBnZXREZWxldGluZ01lc3NhZ2UsIGdldERlbGV0ZWRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2FyY2hpdmVTZWN0aW9uLCByZW1vdmVTZWN0aW9ufSBmcm9tICcuL2VkaXRTZWN0aW9uJztcbmltcG9ydCB7Z2V0QXJjaGl2ZWRNZXNzYWdlLCBnZXRBcmNoaXZpbmdNZXNzYWdlLCBnZXREZWxldGVkTWVzc2FnZSwgZ2V0RGVsZXRpbmdNZXNzYWdlfSBmcm9tICcuL2dldE1lc3NhZ2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7cmVmcmVzaH0gZnJvbSAnLi9yZWZyZXNoUGFnZSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYXJjaGl2ZU9uQ2xpY2sgPSBhc3luYyAoXG5cdGV2ZW50OiBFdmVudCxcblx0e1xuXHRcdHNlY3Rpb25JZFNwYW5zLFxuXHRcdG1lc3NhZ2VDaGFubmVsLFxuXHRcdHJlZnJlc2hDaGFubmVsLFxuXHRcdGluZGV4Tm8sXG5cdFx0YW5jaG9yLFxuXHRcdGFyY2hpdmVUbyxcblx0XHR0b2FzdGlmeUluc3RhbmNlLFxuXHR9OiB7XG5cdFx0c2VjdGlvbklkU3BhbnM6IEVsZW1lbnRbXTtcblx0XHRtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0XHRyZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0XHRpbmRleE5vOiBzdHJpbmc7XG5cdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0YXJjaGl2ZVRvOiBzdHJpbmc7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcblx0fVxuKSA9PiB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IHBhcmVudEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8ucGFyZW50RWxlbWVudDtcblx0aWYgKCFwYXJlbnRFbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oPHNwYW4+e2dldE1lc3NhZ2UoJ0FyY2hpdmluZycpfTwvc3Bhbj4pO1xuXG5cdGZvciAoY29uc3Qgc3BhbiBvZiBzZWN0aW9uSWRTcGFucykge1xuXHRcdHNwYW4ucmVtb3ZlKCk7XG5cdH1cblxuXHRjb25zdCBtZXNzYWdlMSA9IGdldEFyY2hpdmluZ01lc3NhZ2UoaW5kZXhObyk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UxKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlIHx8PSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG1lc3NhZ2UxLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRhd2FpdCBhcmNoaXZlU2VjdGlvbih7aW5kZXg6IGluZGV4Tm8sIGFuY2hvciwgYXJjaGl2ZVRvfSk7XG5cblx0cGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oPHNwYW4+e2dldE1lc3NhZ2UoJ0FyY2hpdmVkJyl9PC9zcGFuPik7XG5cblx0Y29uc3QgbWVzc2FnZSA9IGdldEFyY2hpdmVkTWVzc2FnZShpbmRleE5vKTtcblx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG1lc3NhZ2UsXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdG1lc3NhZ2VDaGFubmVsLmNsb3NlKCk7XG5cblx0cmVmcmVzaENoYW5uZWwucG9zdE1lc3NhZ2UoJ1JlZnJlc2gnKTtcblx0cmVmcmVzaCh7dG9hc3RpZnlJbnN0YW5jZX0pO1xufTtcblxuY29uc3QgcmVtb3ZlT25DbGljayA9IGFzeW5jIChcblx0ZXZlbnQ6IEV2ZW50LFxuXHR7XG5cdFx0c2VjdGlvbklkU3BhbnMsXG5cdFx0bWVzc2FnZUNoYW5uZWwsXG5cdFx0cmVmcmVzaENoYW5uZWwsXG5cdFx0aW5kZXhObyxcblx0XHRhbmNob3IsXG5cdFx0dG9hc3RpZnlJbnN0YW5jZSxcblx0fToge1xuXHRcdHNlY3Rpb25JZFNwYW5zOiBFbGVtZW50W107XG5cdFx0bWVzc2FnZUNoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdFx0cmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdFx0aW5kZXhObzogc3RyaW5nO1xuXHRcdGFuY2hvcjogc3RyaW5nO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG5cdH1cbikgPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBwYXJlbnRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LnBhcmVudEVsZW1lbnQ7XG5cdGlmICghcGFyZW50RWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKDxzcGFuPntnZXRNZXNzYWdlKCdEZWxldGluZycpfTwvc3Bhbj4pO1xuXG5cdGZvciAoY29uc3Qgc3BhbiBvZiBzZWN0aW9uSWRTcGFucykge1xuXHRcdHNwYW4ucmVtb3ZlKCk7XG5cdH1cblxuXHRsZXQgbWVzc2FnZSA9IGdldERlbGV0aW5nTWVzc2FnZShpbmRleE5vKTtcblx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZSB8fD0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBtZXNzYWdlLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRhd2FpdCByZW1vdmVTZWN0aW9uKHtpbmRleDogaW5kZXhObywgYW5jaG9yfSk7XG5cblx0cGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oPHNwYW4+e2dldE1lc3NhZ2UoJ0RlbGV0ZWQnKX08L3NwYW4+KTtcblxuXHRtZXNzYWdlID0gZ2V0RGVsZXRlZE1lc3NhZ2UoaW5kZXhObyk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBtZXNzYWdlLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRtZXNzYWdlQ2hhbm5lbC5jbG9zZSgpO1xuXG5cdHJlZnJlc2hDaGFubmVsLnBvc3RNZXNzYWdlKCdSZWZyZXNoJyk7XG5cdHJlZnJlc2goe3RvYXN0aWZ5SW5zdGFuY2V9KTtcbn07XG5cbmV4cG9ydCB7YXJjaGl2ZU9uQ2xpY2ssIHJlbW92ZU9uQ2xpY2t9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qge3dnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgcmVmcmVzaCA9ICh7XG5cdHRhcmdldFBhZ2UsXG5cdHRvYXN0aWZ5SW5zdGFuY2UsXG59OiB7dGFyZ2V0UGFnZT86IHN0cmluZzsgdG9hc3RpZnlJbnN0YW5jZT86IFRvYXN0aWZ5SW5zdGFuY2V9ID0ge30pOiB2b2lkID0+IHtcblx0dG9hc3RpZnlJbnN0YW5jZSB8fD0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdSZWZyZXNoaW5nJyksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxvY2F0aW9uLnJlcGxhY2UoXG5cdFx0bXcudXRpbC5nZXRVcmwod2dTY3JpcHQsIHtcblx0XHRcdHRpdGxlOiB0YXJnZXRQYWdlID8/IHdnUGFnZU5hbWUsXG5cdFx0fSlcblx0KTtcbn07XG5cbmV4cG9ydCB7cmVmcmVzaH07XG4iLCAiaW1wb3J0IHtPbkNsaWNrLCBQaXBlLCBTZWN0aW9uSUR9IGZyb20gJy4vcmVhY3QnO1xuaW1wb3J0IHthcmNoaXZlT25DbGljaywgcmVtb3ZlT25DbGlja30gZnJvbSAnLi4vdXRpbC9vbkNsaWNrJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmludGVyZmFjZSBBcmNoaXZlU2VjdGlvbkxpbmtQcm9wcyB7XG5cdHNlY3Rpb25JZFNwYW5zOiBFbGVtZW50W107XG5cdG1lc3NhZ2VDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRyZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0aW5kZXhObzogc3RyaW5nO1xuXHRhbmNob3I6IHN0cmluZztcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcblx0YXJjaGl2ZVRvOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFyY2hpdmVTZWN0aW9uTGluayA9ICh7XG5cdHNlY3Rpb25JZFNwYW5zLFxuXHRtZXNzYWdlQ2hhbm5lbCxcblx0cmVmcmVzaENoYW5uZWwsXG5cdGluZGV4Tm8sXG5cdGFuY2hvcixcblx0YXJjaGl2ZVRvLFxuXHR0b2FzdGlmeUluc3RhbmNlLFxufTogQXJjaGl2ZVNlY3Rpb25MaW5rUHJvcHMpID0+IChcblx0PE9uQ2xpY2tcblx0XHRjbGFzc05hbWU9eydhcmNoaXZlJ31cblx0XHRvbkNsaWNrPXsoZXZlbnQ6IEV2ZW50KSA9PiB7XG5cdFx0XHR2b2lkIGFyY2hpdmVPbkNsaWNrKGV2ZW50LCB7XG5cdFx0XHRcdHNlY3Rpb25JZFNwYW5zLFxuXHRcdFx0XHRtZXNzYWdlQ2hhbm5lbCxcblx0XHRcdFx0cmVmcmVzaENoYW5uZWwsXG5cdFx0XHRcdGluZGV4Tm8sXG5cdFx0XHRcdGFuY2hvcixcblx0XHRcdFx0YXJjaGl2ZVRvLFxuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLFxuXHRcdFx0fSk7XG5cdFx0fX1cblx0XHR0ZXh0Q29udGVudD17Z2V0TWVzc2FnZSgnQXJjaGl2ZScpfVxuXHQvPlxuKTtcblxuaW50ZXJmYWNlIFJlbW92ZVNlY3Rpb25MaW5rUHJvcHMge1xuXHRzZWN0aW9uSWRTcGFuczogRWxlbWVudFtdO1xuXHRtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0cmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdGluZGV4Tm86IHN0cmluZztcblx0YW5jaG9yOiBzdHJpbmc7XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG59XG5cbmNvbnN0IFJlbW92ZVNlY3Rpb25MaW5rID0gKHtcblx0c2VjdGlvbklkU3BhbnMsXG5cdG1lc3NhZ2VDaGFubmVsLFxuXHRyZWZyZXNoQ2hhbm5lbCxcblx0aW5kZXhObyxcblx0YW5jaG9yLFxuXHR0b2FzdGlmeUluc3RhbmNlLFxufTogUmVtb3ZlU2VjdGlvbkxpbmtQcm9wcykgPT4gKFxuXHQ8T25DbGlja1xuXHRcdGNsYXNzTmFtZT17J2RlbGV0ZSd9XG5cdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHR2b2lkIHJlbW92ZU9uQ2xpY2soZXZlbnQsIHtcblx0XHRcdFx0c2VjdGlvbklkU3BhbnMsXG5cdFx0XHRcdG1lc3NhZ2VDaGFubmVsLFxuXHRcdFx0XHRyZWZyZXNoQ2hhbm5lbCxcblx0XHRcdFx0aW5kZXhObyxcblx0XHRcdFx0YW5jaG9yLFxuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLFxuXHRcdFx0fSk7XG5cdFx0fX1cblx0XHR0ZXh0Q29udGVudD17Z2V0TWVzc2FnZSgnRGVsZXRlJyl9XG5cdC8+XG4pO1xuXG5pbnRlcmZhY2UgQXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rUHJvcHMge1xuXHRzZWN0aW9uSWRTcGFuczogRWxlbWVudFtdO1xuXHRtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0cmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdGluZGV4Tm86IHN0cmluZztcblx0YW5jaG9yOiBzdHJpbmc7XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG5cdHNlY0FyYzogc3RyaW5nO1xuXHRzZWNEZWw6IHN0cmluZztcblx0YXJjTG9jOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGluayA9ICh7XG5cdHNlY3Rpb25JZFNwYW5zLFxuXHRtZXNzYWdlQ2hhbm5lbCxcblx0cmVmcmVzaENoYW5uZWwsXG5cdGluZGV4Tm8sXG5cdGFuY2hvcixcblx0dG9hc3RpZnlJbnN0YW5jZSxcblx0c2VjQXJjLFxuXHRzZWNEZWwsXG5cdGFyY0xvYyxcbn06IEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGlua1Byb3BzKSA9PiAoXG5cdDxTZWN0aW9uSUQ+XG5cdFx0e3NlY0FyYyA9PT0gJzEnID8gKFxuXHRcdFx0PEFyY2hpdmVTZWN0aW9uTGlua1xuXHRcdFx0XHRzZWN0aW9uSWRTcGFucz17c2VjdGlvbklkU3BhbnN9XG5cdFx0XHRcdG1lc3NhZ2VDaGFubmVsPXttZXNzYWdlQ2hhbm5lbH1cblx0XHRcdFx0cmVmcmVzaENoYW5uZWw9e3JlZnJlc2hDaGFubmVsfVxuXHRcdFx0XHRpbmRleE5vPXtpbmRleE5vfVxuXHRcdFx0XHRhbmNob3I9e2FuY2hvcn1cblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZT17dG9hc3RpZnlJbnN0YW5jZX1cblx0XHRcdFx0YXJjaGl2ZVRvPXthcmNMb2N9XG5cdFx0XHQvPlxuXHRcdCkgOiAoXG5cdFx0XHQ8PjwvPlxuXHRcdCl9XG5cdFx0e3NlY0FyYyA9PT0gJzEnICYmIHNlY0RlbCA9PT0gJzEnID8gPFBpcGUgLz4gOiA8PjwvPn1cblx0XHR7c2VjRGVsID09PSAnMScgPyAoXG5cdFx0XHQ8UmVtb3ZlU2VjdGlvbkxpbmtcblx0XHRcdFx0c2VjdGlvbklkU3BhbnM9e3NlY3Rpb25JZFNwYW5zfVxuXHRcdFx0XHRtZXNzYWdlQ2hhbm5lbD17bWVzc2FnZUNoYW5uZWx9XG5cdFx0XHRcdHJlZnJlc2hDaGFubmVsPXtyZWZyZXNoQ2hhbm5lbH1cblx0XHRcdFx0aW5kZXhObz17aW5kZXhOb31cblx0XHRcdFx0YW5jaG9yPXthbmNob3J9XG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2U9e3RvYXN0aWZ5SW5zdGFuY2V9XG5cdFx0XHQvPlxuXHRcdCkgOiAoXG5cdFx0XHQ8PjwvPlxuXHRcdCl9XG5cdDwvU2VjdGlvbklEPlxuKTtcblxuZXhwb3J0IHtBcmNoaXZlU2VjdGlvbkxpbmssIFJlbW92ZVNlY3Rpb25MaW5rLCBBcmNoaXZlQW5kRGVsZXRlU2VjdGlvbkxpbmt9O1xuIiwgImNvbnN0IGlmQXJjTG9jTm90QWxsb3dlZCA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNvdXJjZVRpdGxlID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpO1xuXHRjb25zdCBhcmNMb2NUaXRsZSA9IG5ldyBtdy5UaXRsZShhcmNMb2MpO1xuXG5cdGNvbnN0IGFyY0xvY05hbWVzcGFjZUlkID0gYXJjTG9jVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3QgYXJjTG9jUGFnZU5hbWUgPSBhcmNMb2NUaXRsZS5nZXRNYWluKCk7XG5cdGNvbnN0IHNvdXJjZU5hbWVzcGFjZUlkID0gc291cmNlVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3Qgc291cmNlUGFnZU5hbWUgPSBzb3VyY2VUaXRsZS5nZXRNYWluKCk7XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoYXJjTG9jTmFtZXNwYWNlSWQgPT09IHNvdXJjZU5hbWVzcGFjZUlkICYmIGFyY0xvY1BhZ2VOYW1lID09PSBzb3VyY2VQYWdlTmFtZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNJbkJsYWNrbGlzdCA9ICgpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGJsYWNrTGlzdFJlZ2V4QXJyID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja0xpc3RSZWdleEFycikge1xuXHRcdGlmIChlbGVtZW50LnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzTm90QWxsb3dlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1JlbGV2YW50VXNlck5hbWUsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICgod2dOYW1lc3BhY2VOdW1iZXIgPT09IDIgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDMpICYmICEod2dSZWxldmFudFVzZXJOYW1lID09PSB3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNOb3RTdXBwb3J0ZWQgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0lzTWFpblBhZ2UsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z0N1clJldmlzaW9uSWQsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCB8fCB3Z0N1clJldmlzaW9uSWQgLSB3Z1JldmlzaW9uSWQgIT09IDApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCB8fCB3Z0lzTWFpblBhZ2UpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHtkYXRhc2V0fSA9IHNldHRpbmdzO1xuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gZGF0YXNldDtcblx0cmV0dXJuIHtcblx0XHRhcmNMZXZlbDogYXJjTGV2ZWwgPz8gJzInLFxuXHRcdGFyY0xvYzogYXJjTG9jID8/IG51bGwsXG5cdFx0c2VjQXJjOiBzZWNBcmMgPz8gJzEnLFxuXHRcdHNlY0RlbDogc2VjRGVsID8/ICcxJyxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2V0U2V0dGluZ3MsIGlmQXJjTG9jTm90QWxsb3dlZCwgaXNJbkJsYWNrbGlzdCwgaXNOb3RBbGxvd2VkLCBpc05vdFN1cHBvcnRlZH07XG4iLCAiaW1wb3J0IHtBcmNMb2NOb3RBbGxvd2VkLCBJbkJsYWNrTGlzdCwgTm9BcmNMb2MsIE5vdEFsbG93ZWR9IGZyb20gJy4vbW9kdWxlcy9jb21wb25lbnRzL3JlYWN0JztcbmltcG9ydCB7YWRkTGlua3MsIGFwcGVuZEZvb3Rlck5vdGljZX0gZnJvbSAnLi9tb2R1bGVzL2FkZExpbmtzJztcbmltcG9ydCB7Z2V0U2V0dGluZ3MsIGlmQXJjTG9jTm90QWxsb3dlZCwgaXNJbkJsYWNrbGlzdCwgaXNOb3RBbGxvd2VkLCBpc05vdFN1cHBvcnRlZH0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2V0U2V0dGluZ3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG4oZnVuY3Rpb24gZWFzeUFyY2hpdmUoKSB7XG5cdGNvbnN0IG5vdFN1cHBvcnRlZCA9IGlzTm90U3VwcG9ydGVkKCk7XG5cdGlmIChub3RTdXBwb3J0ZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpbkJsYWNrbGlzdCA9IGlzSW5CbGFja2xpc3QoKTtcblx0aWYgKGluQmxhY2tsaXN0KSB7XG5cdFx0YXBwZW5kRm9vdGVyTm90aWNlKDxJbkJsYWNrTGlzdCAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgbm90QWxsb3dlZCA9IGlzTm90QWxsb3dlZCgpO1xuXHRpZiAobm90QWxsb3dlZCkge1xuXHRcdGFwcGVuZEZvb3Rlck5vdGljZSg8Tm90QWxsb3dlZCAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpO1xuXHRpZiAoIXNldHRpbmdzKSB7XG5cdFx0YXBwZW5kRm9vdGVyTm90aWNlKDxOb0FyY0xvYyAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge2FyY0xvY30gPSBzZXR0aW5ncztcblx0aWYgKCFhcmNMb2MpIHtcblx0XHRhcHBlbmRGb290ZXJOb3RpY2UoPE5vQXJjTG9jIC8+KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBhcmNMb2NOb3RBbGxvd2VkID0gaWZBcmNMb2NOb3RBbGxvd2VkKGFyY0xvYyk7XG5cdGlmIChhcmNMb2NOb3RBbGxvd2VkKSB7XG5cdFx0YXBwZW5kRm9vdGVyTm90aWNlKDxBcmNMb2NOb3RBbGxvd2VkIGFyY0xvYz17YXJjTG9jfSAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBhZGRMaW5rcyhzZXR0aW5ncyk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsS0FBQyxTQUFTLFFBQVE7QUFDZCxVQUFJLFdBQVcsQ0FBQztBQUVoQixlQUFTQSxrQkFBaUIsU0FBUztBQUMvQixZQUFJLFFBQVE7QUFDWixrQkFBVSxPQUFPLE9BQU87QUFFeEIsWUFBSSxLQUFLLHVCQUF1QixVQUFVO0FBRTFDLGlCQUFTLEVBQUUsSUFBSSxTQUFTLEVBQUUsS0FBSyxDQUFDO0FBQ2hDLGlCQUFTLEVBQUUsRUFBRSxLQUFLLElBQUk7QUFFdEIsYUFBSyxRQUFRO0FBQ2IsYUFBSyxNQUFNO0FBQ1gsYUFBSyxVQUFVO0FBQ2YsYUFBSyxNQUFNLElBQUksZUFBZTtBQUM5QixhQUFLLElBQUksTUFBTSxNQUFNO0FBQ3JCLGFBQUssSUFBSSxNQUFNLE1BQU07QUFFckIsZUFBTyxpQkFBaUIsV0FBVyxTQUFTLEdBQUc7QUFDM0MsY0FBSSxFQUFFLGdCQUFnQixPQUFPLGFBQWM7QUFDM0MsY0FBSSxFQUFFLFlBQVksUUFBUSxFQUFFLGFBQWEsR0FBSTtBQUM3QyxjQUFJLEVBQUUsSUFBSSxVQUFVLEdBQUcsR0FBRyxNQUFNLE1BQU0sR0FBSTtBQUMxQyxjQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUUsUUFBUTtBQUNoQyxnQkFBTSxJQUFJLE1BQU0sWUFBWSxJQUFJO0FBQUEsUUFDcEMsQ0FBQztBQUFBLE1BQ0w7QUFFQSxNQUFBQSxrQkFBaUIsWUFBWTtBQUFBO0FBQUEsUUFFekIsSUFBSSxPQUFPO0FBQ1AsaUJBQU8sS0FBSztBQUFBLFFBQ2hCO0FBQUEsUUFDQSxhQUFhLFNBQVMsU0FBUztBQUMzQixjQUFJLFFBQVE7QUFDWixjQUFJLEtBQUssU0FBUztBQUNkLGdCQUFJLElBQUksSUFBSSxNQUFNO0FBQ2xCLGNBQUUsT0FBTztBQUNULGtCQUFNO0FBQUEsVUFDVjtBQUNBLGNBQUksUUFBUSxLQUFLLFVBQVUsT0FBTztBQUdsQyxjQUFJLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLE9BQU8sS0FBSyxPQUFPLENBQUM7QUFDcEUsaUJBQU8sYUFBYSxRQUFRLEtBQUssS0FBSztBQUN0QyxxQkFBVyxXQUFXO0FBQ2xCLG1CQUFPLGFBQWEsV0FBVyxHQUFHO0FBQUEsVUFDdEMsR0FBRyxHQUFHO0FBR04sbUJBQVMsS0FBSyxHQUFHLEVBQUUsUUFBUSxTQUFTLElBQUk7QUFDcEMsZ0JBQUksT0FBTyxNQUFPO0FBQ2xCLGVBQUcsSUFBSSxNQUFNLFlBQVksS0FBSyxNQUFNLEtBQUssQ0FBQztBQUFBLFVBQzlDLENBQUM7QUFBQSxRQUNMO0FBQUEsUUFDQSxPQUFPLFdBQVc7QUFDZCxjQUFJLEtBQUssUUFBUztBQUNsQixlQUFLLFVBQVU7QUFDZixlQUFLLElBQUksTUFBTSxNQUFNO0FBQ3JCLGVBQUssSUFBSSxNQUFNLE1BQU07QUFFckIsY0FBSSxRQUFRLFNBQVMsS0FBSyxHQUFHLEVBQUUsUUFBUSxJQUFJO0FBQzNDLG1CQUFTLEtBQUssR0FBRyxFQUFFLE9BQU8sT0FBTyxDQUFDO0FBQUEsUUFDdEM7QUFBQTtBQUFBLFFBR0EsSUFBSSxZQUFZO0FBQ1osaUJBQU8sS0FBSyxJQUFJLE1BQU07QUFBQSxRQUMxQjtBQUFBLFFBQ0EsSUFBSSxVQUFVLE9BQU87QUFDakIsZUFBSyxJQUFJLE1BQU0sWUFBWTtBQUFBLFFBQy9CO0FBQUEsUUFDQSxrQkFBa0IsV0FBMEM7QUFDeEQsaUJBQU8sS0FBSyxJQUFJLE1BQU0saUJBQWlCLE1BQU0sS0FBSyxJQUFJLE9BQU8sU0FBUztBQUFBLFFBQzFFO0FBQUEsUUFDQSxxQkFBcUIsV0FBMEM7QUFDM0QsaUJBQU8sS0FBSyxJQUFJLE1BQU0sb0JBQW9CLE1BQU0sS0FBSyxJQUFJLE9BQU8sU0FBUztBQUFBLFFBQzdFO0FBQUEsUUFDQSxlQUFlLFdBQW9CO0FBQy9CLGlCQUFPLEtBQUssSUFBSSxNQUFNLGNBQWMsTUFBTSxLQUFLLElBQUksT0FBTyxTQUFTO0FBQUEsUUFDdkU7QUFBQSxNQUNKO0FBRUEsYUFBTyxtQkFBbUIsT0FBTyxvQkFBb0JBO0FBQUEsSUFDekQsR0FBRyxJQUFJO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRk4sSUFBQUMsWUFBYTtBQUNiLElBQUFDLHFCQUFzQjtBQUN0QixJQUFBQyxVQUFXOztBQ0ZaLElBQUFDLHFCQUFrQ0MsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQTNCLElBQU1DLGVBQWU7QUFDckIsSUFBTUMsZ0JBQWdCOztBQ0Y3QixJQUFBQyxvQkFBdUJILFFBQUEsaUJBQUE7QUFFdkIsSUFBTUksa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsVUFBQSxHQUFTRixrQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHFCQUFBLEdBQW9CSixrQkFBQUcsVUFBUztNQUM1QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGlDQUFBLEdBQWdDSixrQkFBQUcsVUFBUztNQUN4Q0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHlDQUFBLEdBQXdDSixrQkFBQUcsVUFBUztNQUNoREMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxZQUFBLEdBQVdMLGtCQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFdBQUEsR0FBVU4sa0JBQUFHLFVBQVM7TUFDbEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCwwQkFBQSxHQUF5Qkosa0JBQUFHLFVBQVM7TUFDakNDLElBQUk7TUFDSixXQUNDO01BQ0QsV0FDQztJQUNGLENBQUM7SUFDREcsU0FBQSxHQUFRUCxrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESSxXQUFBLEdBQVVSLGtCQUFBRyxVQUFTO01BQ2xCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RLLFVBQUEsR0FBU1Qsa0JBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxvQkFBQSxHQUFtQkosa0JBQUFHLFVBQVM7TUFDM0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxtQkFBQSxHQUFrQkosa0JBQUFHLFVBQVM7TUFDMUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxtQkFBQSxHQUFrQkosa0JBQUFHLFVBQVM7TUFDMUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCx5QkFBQSxHQUF3Qkosa0JBQUFHLFVBQVM7TUFDaENDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCw2QkFBQSxHQUE0Qkosa0JBQUFHLFVBQVM7TUFDcENDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCwrQkFBQSxHQUE4Qkosa0JBQUFHLFVBQVM7TUFDdENDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCx1Q0FBQSxHQUFzQ0osa0JBQUFHLFVBQVM7TUFDOUNDLElBQUk7TUFDSixXQUNDO01BQ0QsV0FDQztJQUNGLENBQUM7SUFDRCx3QkFBQSxHQUF1Qkosa0JBQUFHLFVBQVM7TUFDL0JDLElBQUk7TUFDSixXQUNDO01BQ0QsV0FDQztJQUNGLENBQUM7SUFDRCxlQUFBLEdBQWNKLGtCQUFBRyxVQUFTO01BQ3RCQyxJQUFJO01BQ0pNLElBQUk7SUFDTCxDQUFDO0lBQ0QsTUFBQSxHQUFLVixrQkFBQUcsVUFBUztNQUNiQyxJQUFJO01BQ0pNLElBQUk7SUFDTCxDQUFDO0lBQ0QsTUFBQSxHQUFLVixrQkFBQUcsVUFBUztNQUNiQyxJQUFJO01BQ0pNLElBQUk7SUFDTCxDQUFDO0lBQ0QsTUFBQSxHQUFLVixrQkFBQUcsVUFBUztNQUNiQyxJQUFJO01BQ0pNLElBQUk7SUFDTCxDQUFDO0lBQ0QsTUFBQSxHQUFLVixrQkFBQUcsVUFBUztNQUNiQyxJQUFJO01BQ0pNLElBQUk7SUFDTCxDQUFDO0lBQ0RDLFVBQUEsR0FBU1gsa0JBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRFEsYUFBQSxHQUFZWixrQkFBQUcsVUFBUztNQUNwQkMsSUFBSTtNQUNKUyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWViLGdCQUFnQjtBQUVyQyxJQUFNYyxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQzFJQSxJQUFNQyxXQUFZQyxZQUFtQjtBQUNwQyxTQUFPQSxPQUNMQyxRQUFRLE1BQU0sT0FBTyxFQUNyQkEsUUFBUSxNQUFNLE1BQU0sRUFDcEJBLFFBQVEsTUFBTSxNQUFNLEVBQ3BCQSxRQUFRLE1BQU0sUUFBUSxFQUN0QkEsUUFBUSxNQUFNLFFBQVE7QUFDekI7O0FISUEsSUFBTUMsZUFBZUEsQ0FBQztFQUFDQztFQUFJQztBQUFRLE1BQ2xDM0IsbUNBQUE0QixRQUFBQyxjQUFBN0IsbUJBQUE0QixRQUFBRSxVQUFBLE1BQ0VDLEdBQUdDLE9BQU9DLElBQUksTUFBTSxNQUFNLFlBQzFCakMsbUNBQUE0QixRQUFBQyxjQUFDLFdBQUE7RUFDQUgsSUFBSUEsT0FBQSxRQUFBQSxPQUFBLFNBQUFBLEtBQWM3QjtFQUNsQnFDLFdBQVcsQ0FBQy9CLGNBQWMsbUJBQW1CLGlDQUFpQyxTQUFTO0FBQUEsR0FFdEZ3QixhQUFBLFFBQUFBLGFBQUEsU0FBQUEsV0FBWTNCLG1DQUFBNEIsUUFBQUMsY0FBQTdCLG1CQUFBNEIsUUFBQUUsVUFBQSxJQUFFLENBQ2hCLElBQ0csQ0FBQyxVQUFVLGVBQWUsUUFBUSxFQUFFSyxTQUFTSixHQUFHQyxPQUFPQyxJQUFJLE1BQU0sQ0FBQyxLQUNwRUcsU0FBU0MsY0FBYyxnQkFBZ0IsSUFDeENyQyxtQ0FBQTRCLFFBQUFDLGNBQUMsTUFBQTtFQUFHSCxJQUFJQSxPQUFBLFFBQUFBLE9BQUEsU0FBQUEsS0FBYzdCO0VBQVdxQyxXQUFXLENBQUMvQixjQUFjLFNBQVM7QUFBQSxHQUNsRXdCLGFBQUEsUUFBQUEsYUFBQSxTQUFBQSxXQUFZM0IsbUNBQUE0QixRQUFBQyxjQUFBN0IsbUJBQUE0QixRQUFBRSxVQUFBLElBQUUsQ0FDaEIsSUFFQTlCLG1DQUFBNEIsUUFBQUMsY0FBQyxPQUFBO0VBQUlILElBQUlBLE9BQUEsUUFBQUEsT0FBQSxTQUFBQSxLQUFjN0I7RUFBV3FDLFdBQVcsQ0FBQy9CLGNBQWMsU0FBUztBQUFBLEdBQ25Fd0IsYUFBQSxRQUFBQSxhQUFBLFNBQUFBLFdBQVkzQixtQ0FBQTRCLFFBQUFDLGNBQUE3QixtQkFBQTRCLFFBQUFFLFVBQUEsSUFBRSxDQUNoQixDQUVGO0FBR0QsSUFBTVEsY0FBY0EsTUFDbkJ0QyxtQ0FBQTRCLFFBQUFDLGNBQUNKLGNBQUE7RUFBYUMsSUFBRztBQUFBLEdBQ2hCMUIsbUNBQUE0QixRQUFBQyxjQUFDLFFBQUEsTUFDQ1QsV0FBVyw0QkFBNEIsR0FDeENwQixtQ0FBQTRCLFFBQUFDLGNBQUMsTUFBQSxJQUFHLEdBQ0hULFdBQVcsb0NBQW9DLENBQ2pELENBQ0Q7QUFHRCxJQUFNbUIsYUFBYUEsTUFDbEJ2QyxtQ0FBQTRCLFFBQUFDLGNBQUNKLGNBQUE7RUFBYUMsSUFBRztBQUFBLEdBQ2hCMUIsbUNBQUE0QixRQUFBQyxjQUFDLFFBQUEsTUFBTVQsV0FBVywwQkFBMEIsQ0FBRSxDQUMvQztBQU9ELElBQU1vQixtQkFBbUJBLENBQUM7RUFBQ0M7QUFBTSxNQUNoQ3pDLG1DQUFBNEIsUUFBQUMsY0FBQ0osY0FBQTtFQUFhQyxJQUFHO0FBQUEsR0FDaEIxQixtQ0FBQTRCLFFBQUFDLGNBQUMsUUFBQSxNQUNDVCxXQUFXLDhCQUE4QixFQUFFSSxRQUFRLE1BQU1GLFNBQVNtQixNQUFNLENBQUMsR0FDMUV6QyxtQ0FBQTRCLFFBQUFDLGNBQUMsTUFBQSxJQUFHLEdBQ0hULFdBQVcsc0NBQXNDLENBQ25ELENBQ0Q7QUFHRCxJQUFNc0IsV0FBV0EsTUFDaEIxQyxtQ0FBQTRCLFFBQUFDLGNBQUNKLGNBQUE7RUFBYUMsSUFBRztBQUFBLEdBQ2hCMUIsbUNBQUE0QixRQUFBQyxjQUFDLFFBQUEsTUFBTVQsV0FBVyxxQkFBcUIsQ0FBRSxDQUMxQztBQU9ELElBQU11QixVQUFVQSxDQUFDO0VBQUNGO0FBQU0sTUFDdkJ6QyxtQ0FBQTRCLFFBQUFDLGNBQUNKLGNBQUE7RUFBYUMsSUFBRztBQUFBLEdBQ2hCMUIsbUNBQUE0QixRQUFBQyxjQUFDLFFBQUEsTUFDQ1QsV0FBVyxzQkFBc0IsR0FDakNBLFdBQVcsR0FBRyxHQUNkQSxXQUFXLGtCQUFrQixHQUM5QnBCLG1DQUFBNEIsUUFBQUMsY0FBQyxLQUFBO0VBQUVlLE9BQU90QixTQUFTbUIsTUFBTTtFQUFHSSxNQUFBLFNBQUFDLE9BQWV4QixTQUFTbUIsTUFBTSxDQUFDO0FBQUEsR0FDekRBLE1BQ0YsR0FDQ3JCLFdBQVcsR0FBRyxHQUNkQSxXQUFXLEdBQUcsQ0FDaEIsQ0FDRDtBQVNELElBQU0yQixVQUFVQSxDQUFDO0VBQUNDO0VBQWFkO0VBQVdlO0FBQU8sTUFDaERqRCxtQ0FBQTRCLFFBQUFDLGNBQUMsS0FBQTtFQUNBSyxXQUFXLENBQUMsNkJBQUEsNkJBQUFZLE9BQTBEWixTQUFTLENBQUE7RUFDL0VlLFNBQVNBLFlBQVksTUFBTTtFQUFDO0VBQzVCRDtBQUFBLENBQ0Q7QUFPRCxJQUFNRSxZQUFZQSxDQUFDO0VBQUN2QjtBQUFRLE1BQXNCM0IsbUNBQUE0QixRQUFBQyxjQUFDLFFBQUE7RUFBS0ssV0FBVzlCO0FBQUEsR0FBZ0J1QixhQUFBLFFBQUFBLGFBQUEsU0FBQUEsV0FBWTNCLG1DQUFBNEIsUUFBQUMsY0FBQTdCLG1CQUFBNEIsUUFBQUUsVUFBQSxJQUFFLENBQUk7QUFFckcsSUFBTXFCLE9BQU9BLE1BQU1uRCxtQ0FBQTRCLFFBQUFDLGNBQUMsUUFBQTtFQUFLSyxXQUFVO0VBQXlCYyxhQUFhO0FBQUEsQ0FBSztBQU05RSxJQUFNSSxxQkFBcUJBLENBQUM7RUFBQ0g7QUFBTyxNQUNuQ2pELG1DQUFBNEIsUUFBQUMsY0FBQyxRQUFBLE1BQ0NULFdBQVcsdUJBQXVCLEdBQ25DcEIsbUNBQUE0QixRQUFBQyxjQUFDLEtBQUE7RUFBRW9CO0FBQUEsR0FBbUI3QixXQUFXLFNBQVMsQ0FBRSxDQUM3Qzs7QUlwSEQsSUFBQWlDLHFCQUFrQ3BELFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQyxJQUFBb0QscUJBQXdCcEQsUUFBQSxpQkFBQTtBQUV4QixJQUFNcUQsT0FBQSxHQUFjRCxtQkFBQUUsV0FBQSxlQUFBVixPQUFpQy9DLE9BQU8sQ0FBRTs7QUNEOUQsSUFBTTBELGNBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBYyxXQUFPZixPQUFrQjtBQUM1QyxVQUFNZ0IsU0FBeUI7TUFDOUJDLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU1wQjtNQUNOcUIsTUFBTTtJQUNQO0FBRUEsVUFBTTtNQUFDQztJQUFLLElBQUEsTUFBVVgsSUFBSXRCLElBQUkyQixNQUFNO0FBQ3BDLFVBQU07TUFBQ087SUFBUSxJQUFJRDtBQVFuQixVQUFNRSxvQkFBb0IsQ0FBQTtBQUFDLFFBQUFDLGFBQUFDLDJCQUVMSCxRQUFBLEdBQUFJO0FBQUEsUUFBQTtBQUF0QixXQUFBRixXQUFBRyxFQUFBLEdBQUEsRUFBQUQsU0FBQUYsV0FBQUksRUFBQSxHQUFBQyxRQUFnQztBQUFBLGNBQXJCQyxVQUFBSixPQUFBSztBQUNWLGNBQU07VUFBQ0M7VUFBT0M7VUFBT0M7UUFBTSxJQUFJSjtBQUUvQixZQUFJRyxNQUFNRSxXQUFXLElBQUksR0FBRztBQUMzQjtRQUNEO0FBRUFaLDBCQUFrQkEsa0JBQWtCYSxNQUFNLElBQUk7VUFDN0NKO1VBQ0FDO1VBQ0FDO1FBQ0Q7TUFDRDtJQUFBLFNBQUFHLEtBQUE7QUFBQWIsaUJBQUFjLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFiLGlCQUFBZSxFQUFBO0lBQUE7QUFFQSxXQUFPaEI7RUFDUixDQUFBO0FBQUEsU0FBQSxTQW5DTVgsYUFBQTRCLElBQUE7QUFBQSxXQUFBM0IsS0FBQTRCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQXFDTixJQUFNQyxvQkFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUE5QixrQkFBb0IsV0FBTztJQUFDZjtJQUFPK0I7RUFBTyxHQUFnRTtBQUFBLFFBQUFlLHVCQUFBQztBQUMvRyxVQUFNL0IsU0FBa0M7TUFDdkNDLFFBQVE7TUFDUkksTUFBTTtNQUNOMkIsUUFBUTtNQUNSOUIsUUFBUTtNQUNSQyxlQUFlO01BQ2Y4QixRQUFRakQ7TUFDUmtELFdBQVduQjtNQUNYb0IsU0FBUztJQUNWO0FBRUEsVUFBTUMsV0FBQSxNQUFpQnpDLElBQUl0QixJQUFJMkIsTUFBTTtBQUVyQyxZQUFBOEIseUJBQUFDLHlCQUFRSyxTQUFTLE9BQU8sRUFBRUMsTUFBTSxDQUFDLE9BQUEsUUFBQU4sMkJBQUEsV0FBQUEseUJBQXpCQSx1QkFBNEJPLGVBQUEsUUFBQVAsMkJBQUEsU0FBQSxTQUE1QkEsdUJBQXdDLENBQUMsRUFBRVEsTUFBTUMsS0FBS0MsYUFBQSxRQUFBWCwwQkFBQSxTQUFBQSx3QkFBc0I7RUFDckYsQ0FBQTtBQUFBLFNBQUEsU0FmTUYsbUJBQUFjLEtBQUE7QUFBQSxXQUFBYixNQUFBSCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDbkNOLElBQU1nQixjQUFBLDJCQUFBO0FBQUEsTUFBQUMsUUFBQTdDLGtCQUFjLFdBQU84QyxXQUFzQjtBQUFBLFFBQUFDO0FBQ2hELFVBQU05QyxTQUE2QjtNQUNsQ0MsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLGVBQWU7TUFDZkUsTUFBTTtNQUNONEIsUUFBUVk7SUFDVDtBQUVBLFVBQU07TUFBQ0U7SUFBSyxJQUFBLE1BQVVwRCxJQUFJdEIsSUFBSTJCLE1BQU07QUFFcEMsU0FBQThDLGdCQUFJQyxNQUFNVixNQUFNLENBQUMsT0FBQSxRQUFBUyxrQkFBQSxVQUFiQSxjQUFnQkUsU0FBUztBQUM1QixhQUFPO0lBQ1I7QUFFQSxXQUFPO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FoQk1MLGFBQUFNLEtBQUE7QUFBQSxXQUFBTCxNQUFBbEIsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBa0JOLElBQU11QixpQkFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFwRCxrQkFBaUIsV0FBTztJQUFDbUI7SUFBT0M7RUFBTSxHQUF1QztBQUNsRixVQUFNO01BQUNpQztJQUFVLElBQUlqRixHQUFHQyxPQUFPQyxJQUFJO0FBQ25DLFVBQU1rQyxXQUFBLE1BQWlCVixZQUFZdUQsVUFBVTtBQUU3QyxRQUFJQyxVQUFVO0FBQUEsUUFBQUMsYUFBQTVDLDJCQUNRSCxRQUFBLEdBQUFnRDtBQUFBLFFBQUE7QUFBdEIsV0FBQUQsV0FBQTFDLEVBQUEsR0FBQSxFQUFBMkMsU0FBQUQsV0FBQXpDLEVBQUEsR0FBQUMsUUFBZ0M7QUFBQSxjQUFyQkMsVUFBQXdDLE9BQUF2QztBQUNWLFlBQUlFLFVBQVVILFFBQVFHLFNBQVNDLFdBQVdKLFFBQVFJLFFBQVE7QUFDekRrQyxvQkFBVTtRQUNYO01BQ0Q7SUFBQSxTQUFBL0IsS0FBQTtBQUFBZ0MsaUJBQUEvQixFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBZ0MsaUJBQUE5QixFQUFBO0lBQUE7QUFDQSxXQUFPNkI7RUFDUixDQUFBO0FBQUEsU0FBQSxTQVhNSCxnQkFBQU0sS0FBQTtBQUFBLFdBQUFMLE1BQUF6QixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFhTixJQUFNOEIsZ0JBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBM0Qsa0JBQWdCLFdBQU87SUFBQ21CO0lBQU9DO0lBQVF3QztFQUFPLEdBQXlEO0FBQzVHLFVBQU07TUFBQ1A7SUFBVSxJQUFJakYsR0FBR0MsT0FBT0MsSUFBSTtBQUNuQyxVQUFNZ0YsVUFBQSxNQUFnQkgsZUFBZTtNQUFDaEM7TUFBT0M7SUFBTSxDQUFDO0FBRXBELFFBQUlrQyxZQUFZLE1BQU07QUFDckI7SUFDRDtBQUVBLFVBQU1aLFVBQUEsTUFBZ0JiLGtCQUFrQjtNQUFDNUMsT0FBT29FO01BQVlyQyxTQUFTRztJQUFLLENBQUM7QUFFM0UsUUFBSXVCLFlBQVksTUFBTTtBQUNyQjtJQUNEO0FBRUEsVUFBTTlDLElBQUlpRSxLQUFLUixZQUFZLE1BQU07QUFDaEMsYUFBTztRQUNOckMsU0FBU0c7UUFDVDJDLE1BQU07UUFDTkYsU0FBU0EsWUFBQSxRQUFBQSxZQUFBLFNBQUFBLFVBQVduRyxXQUFXLGdCQUFnQjtRQUMvQ3NHLE9BQU87TUFDUjtJQUNELENBQUM7RUFDRixDQUFBO0FBQUEsU0FBQSxTQXRCTUwsZUFBQU0sS0FBQTtBQUFBLFdBQUFMLE1BQUFoQyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUF3Qk4sSUFBTXFDLGlCQUFBLDJCQUFBO0FBQUEsTUFBQUMsUUFBQWxFLGtCQUFpQixXQUFPO0lBQUNtQjtJQUFPQztJQUFRMEI7RUFBUyxHQUEwRDtBQUNoSCxVQUFNO01BQUNPO0lBQVUsSUFBSWpGLEdBQUdDLE9BQU9DLElBQUk7QUFDbkMsVUFBTWdGLFVBQUEsTUFBZ0JILGVBQWU7TUFBQ2hDO01BQU9DO0lBQU0sQ0FBQztBQUVwRCxRQUFJa0MsWUFBWSxNQUFNO0FBQ3JCO0lBQ0Q7QUFFQSxVQUFNWixVQUFBLE1BQWdCYixrQkFBa0I7TUFBQzVDLE9BQU9vRTtNQUFZckMsU0FBU0c7SUFBSyxDQUFDO0FBRTNFLFFBQUl1QixZQUFZLE1BQU07QUFDckI7SUFDRDtBQUVBLFVBQU15QixZQUFBLE1BQWtCdkIsWUFBWUUsU0FBUztBQUM3QyxRQUFJLENBQUNxQixXQUFXO0FBQ2YsWUFBTXZFLElBQUl3RSxPQUNUdEIsV0FDQTtRQUNDYyxTQUFTbkcsV0FBVyxnQkFBZ0I7UUFDcENzRyxPQUFPO01BQ1IsR0FDQSxpQkFDRDtJQUNEO0FBRUEsVUFBTW5FLElBQUlpRSxLQUFLZixXQUFXLE1BQU07QUFDL0IsYUFBTztRQUNOdUIsWUFBQSxPQUFBbEYsT0FBbUJ1RCxPQUFPO1FBQzFCa0IsU0FBU25HLFdBQVcsaUJBQWlCO1FBQ3JDc0csT0FBTztNQUNSO0lBQ0QsQ0FBQztBQUVELFVBQU1MLGNBQWM7TUFBQ3ZDO01BQU9DO01BQVF3QyxTQUFTbkcsV0FBVyxpQkFBaUI7SUFBQyxDQUFDO0VBQzVFLENBQUE7QUFBQSxTQUFBLFNBbkNNd0csZ0JBQUFLLEtBQUE7QUFBQSxXQUFBSixNQUFBdkMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBQ3pETixJQUFNMkMsc0JBQXVCQyxhQUFvQjtBQUNoRCxTQUFPL0csV0FBVyxXQUFXLElBQUlBLFdBQVcsR0FBRyxJQUFJQSxXQUFXLFlBQVksRUFBRUksUUFBUSxNQUFNMkcsT0FBTztBQUNsRztBQUVBLElBQU1DLHFCQUFzQkQsYUFBb0I7QUFDL0MsU0FBTy9HLFdBQVcsVUFBVSxJQUFJQSxXQUFXLEdBQUcsSUFBSUEsV0FBVyxZQUFZLEVBQUVJLFFBQVEsTUFBTTJHLE9BQU87QUFDakc7QUFFQSxJQUFNRSxxQkFBc0JGLGFBQW9CO0FBQy9DLFNBQU8vRyxXQUFXLFVBQVUsSUFBSUEsV0FBVyxHQUFHLElBQUlBLFdBQVcsWUFBWSxFQUFFSSxRQUFRLE1BQU0yRyxPQUFPO0FBQ2pHO0FBRUEsSUFBTUcsb0JBQXFCSCxhQUFvQjtBQUM5QyxTQUFPL0csV0FBVyxTQUFTLElBQUlBLFdBQVcsR0FBRyxJQUFJQSxXQUFXLFlBQVksRUFBRUksUUFBUSxNQUFNMkcsT0FBTztBQUNoRzs7QUNkQSxJQUFBSSxxQkFBa0J0SSxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEIsSUFBQXNJLHFCQUF1QnRJLFFBQUEscUJBQUE7QUFFdkIsSUFBTTtFQUFDdUk7QUFBUSxJQUFJMUcsR0FBR0MsT0FBT0MsSUFBSTtBQUVqQyxJQUFNeUcsVUFBVUEsQ0FBQztFQUNoQkM7RUFDQUM7QUFDRCxJQUFnRSxDQUFDLE1BQVk7QUFDNUVBLHVCQUFBQSxtQkFBcUI7SUFDcEJDLFdBQVdBLE1BQU07SUFBQztFQUNuQjtBQUNBRCxtQkFBaUJDLFVBQVU7QUFDM0JELHNCQUFBLEdBQW1CSixtQkFBQU0sVUFDbEI7SUFDQ3JCLE1BQU1yRyxXQUFXLFlBQVk7SUFDN0IySCxVQUFVO0VBQ1gsR0FDQSxTQUNEO0FBRUEsUUFBTTtJQUFDL0I7RUFBVSxJQUFJakYsR0FBR0MsT0FBT0MsSUFBSTtBQUNuQytHLFdBQVN4SCxRQUNSTyxHQUFHa0gsS0FBS0MsT0FBT1QsVUFBVTtJQUN4QjdGLE9BQU8rRixlQUFBLFFBQUFBLGVBQUEsU0FBQUEsYUFBYzNCO0VBQ3RCLENBQUMsQ0FDRjtBQUNEOztBRHRCQSxJQUFBbUMscUJBQXVCakosUUFBQSxxQkFBQTtBQUV2QixJQUFNa0osaUJBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBMUYsa0JBQWlCLFdBQ3RCMkYsT0FDQTtJQUNDQztJQUNBQztJQUNBQztJQUNBdEI7SUFDQXBEO0lBQ0EwQjtJQUNBbUM7RUFDRCxHQVNJO0FBQUEsUUFBQWM7QUFDSkosVUFBTUssZUFBZTtBQUNyQixVQUFNQyxpQkFBQUYsZ0JBQWlCSixNQUFNTyxZQUFBLFFBQUFILGtCQUFBLFNBQUEsU0FBTkEsY0FBOEJFO0FBQ3JELFFBQUksQ0FBQ0EsZUFBZTtBQUNuQjtJQUNEO0FBRUFBLGtCQUFjRSxnQkFBZ0J2QixtQ0FBQTNHLFFBQUFDLGNBQUMsUUFBQSxNQUFNVCxXQUFXLFdBQVcsQ0FBRSxDQUFPO0FBQUEsUUFBQTJJLGFBQUF6RiwyQkFFakRpRixjQUFBLEdBQUFTO0FBQUEsUUFBQTtBQUFuQixXQUFBRCxXQUFBdkYsRUFBQSxHQUFBLEVBQUF3RixTQUFBRCxXQUFBdEYsRUFBQSxHQUFBQyxRQUFtQztBQUFBLGNBQXhCdUYsT0FBQUQsT0FBQXBGO0FBQ1ZxRixhQUFLQyxPQUFPO01BQ2I7SUFBQSxTQUFBaEYsS0FBQTtBQUFBNkUsaUJBQUE1RSxFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBNkUsaUJBQUEzRSxFQUFBO0lBQUE7QUFFQSxVQUFNK0UsV0FBV2pDLG9CQUFvQkMsT0FBTztBQUM1Q3FCLG1CQUFlWSxZQUFZRCxRQUFRO0FBRW5DdkIseUJBQUFBLG1CQUFxQjtNQUNwQkMsV0FBV0EsTUFBTTtNQUFDO0lBQ25CO0FBQ0FELHFCQUFpQkMsVUFBVTtBQUMzQkQsd0JBQUEsR0FBbUJPLG1CQUFBTCxVQUNsQjtNQUNDckIsTUFBTTBDO01BQ05FLE9BQU87TUFDUHRCLFVBQVU7SUFDWCxHQUNBLE1BQ0Q7QUFFQSxVQUFNbkIsZUFBZTtNQUFDOUMsT0FBT3FEO01BQVNwRDtNQUFRMEI7SUFBUyxDQUFDO0FBRXhEbUQsa0JBQWNFLGdCQUFnQnZCLG1DQUFBM0csUUFBQUMsY0FBQyxRQUFBLE1BQU1ULFdBQVcsVUFBVSxDQUFFLENBQU87QUFFbkUsVUFBTWtKLFVBQVVsQyxtQkFBbUJELE9BQU87QUFDMUNxQixtQkFBZVksWUFBWUUsT0FBTztBQUVsQzFCLHFCQUFpQkMsVUFBVTtBQUMzQkQsd0JBQUEsR0FBbUJPLG1CQUFBTCxVQUNsQjtNQUNDckIsTUFBTTZDO01BQ05ELE9BQU87TUFDUHRCLFVBQVU7SUFDWCxHQUNBLE1BQ0Q7QUFFQVMsbUJBQWVhLE1BQU07QUFFckJaLG1CQUFlVyxZQUFZLFNBQVM7QUFDcEMxQixZQUFRO01BQUNFO0lBQWdCLENBQUM7RUFDM0IsQ0FBQTtBQUFBLFNBQUEsU0FyRU1RLGdCQUFBbUIsS0FBQUMsS0FBQTtBQUFBLFdBQUFuQixNQUFBL0QsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBdUVOLElBQU1rRixnQkFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUEvRyxrQkFBZ0IsV0FDckIyRixPQUNBO0lBQ0NDO0lBQ0FDO0lBQ0FDO0lBQ0F0QjtJQUNBcEQ7SUFDQTZEO0VBQ0QsR0FRSTtBQUFBLFFBQUErQjtBQUNKckIsVUFBTUssZUFBZTtBQUNyQixVQUFNQyxpQkFBQWUsaUJBQWlCckIsTUFBTU8sWUFBQSxRQUFBYyxtQkFBQSxTQUFBLFNBQU5BLGVBQThCZjtBQUNyRCxRQUFJLENBQUNBLGVBQWU7QUFDbkI7SUFDRDtBQUVBQSxrQkFBY0UsZ0JBQWdCdkIsbUNBQUEzRyxRQUFBQyxjQUFDLFFBQUEsTUFBTVQsV0FBVyxVQUFVLENBQUUsQ0FBTztBQUFBLFFBQUF3SixhQUFBdEcsMkJBRWhEaUYsY0FBQSxHQUFBc0I7QUFBQSxRQUFBO0FBQW5CLFdBQUFELFdBQUFwRyxFQUFBLEdBQUEsRUFBQXFHLFNBQUFELFdBQUFuRyxFQUFBLEdBQUFDLFFBQW1DO0FBQUEsY0FBeEJ1RixPQUFBWSxPQUFBakc7QUFDVnFGLGFBQUtDLE9BQU87TUFDYjtJQUFBLFNBQUFoRixLQUFBO0FBQUEwRixpQkFBQXpGLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUEwRixpQkFBQXhGLEVBQUE7SUFBQTtBQUVBLFFBQUlrRixVQUFVakMsbUJBQW1CRixPQUFPO0FBQ3hDcUIsbUJBQWVZLFlBQVlFLE9BQU87QUFFbEMxQix5QkFBQUEsbUJBQXFCO01BQ3BCQyxXQUFXQSxNQUFNO01BQUM7SUFDbkI7QUFDQUQscUJBQWlCQyxVQUFVO0FBQzNCRCx3QkFBQSxHQUFtQk8sbUJBQUFMLFVBQ2xCO01BQ0NyQixNQUFNNkM7TUFDTkQsT0FBTztNQUNQdEIsVUFBVTtJQUNYLEdBQ0EsTUFDRDtBQUVBLFVBQU0xQixjQUFjO01BQUN2QyxPQUFPcUQ7TUFBU3BEO0lBQU0sQ0FBQztBQUU1QzZFLGtCQUFjRSxnQkFBZ0J2QixtQ0FBQTNHLFFBQUFDLGNBQUMsUUFBQSxNQUFNVCxXQUFXLFNBQVMsQ0FBRSxDQUFPO0FBRWxFa0osY0FBVWhDLGtCQUFrQkgsT0FBTztBQUNuQ3FCLG1CQUFlWSxZQUFZRSxPQUFPO0FBRWxDMUIscUJBQWlCQyxVQUFVO0FBQzNCRCx3QkFBQSxHQUFtQk8sbUJBQUFMLFVBQ2xCO01BQ0NyQixNQUFNNkM7TUFDTkQsT0FBTztNQUNQdEIsVUFBVTtJQUNYLEdBQ0EsTUFDRDtBQUVBUyxtQkFBZWEsTUFBTTtBQUVyQlosbUJBQWVXLFlBQVksU0FBUztBQUNwQzFCLFlBQVE7TUFBQ0U7SUFBZ0IsQ0FBQztFQUMzQixDQUFBO0FBQUEsU0FBQSxTQW5FTTZCLGVBQUFLLEtBQUFDLE1BQUE7QUFBQSxXQUFBTCxNQUFBcEYsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBRTVFTixJQUFBeUYscUJBQWtCL0ssUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7QUFhbEIsSUFBTStLLHFCQUFxQkEsQ0FBQztFQUMzQjFCO0VBQ0FDO0VBQ0FDO0VBQ0F0QjtFQUNBcEQ7RUFDQTBCO0VBQ0FtQztBQUNELE1BQ0NvQyxtQ0FBQXBKLFFBQUFDLGNBQUNrQixTQUFBO0VBQ0FiLFdBQVc7RUFDWGUsU0FBVXFHLFdBQWlCO0FBQzFCLFNBQUtGLGVBQWVFLE9BQU87TUFDMUJDO01BQ0FDO01BQ0FDO01BQ0F0QjtNQUNBcEQ7TUFDQTBCO01BQ0FtQztJQUNELENBQUM7RUFDRjtFQUNBNUYsYUFBYTVCLFdBQVcsU0FBUztBQUFBLENBQ2xDO0FBWUQsSUFBTThKLG9CQUFvQkEsQ0FBQztFQUMxQjNCO0VBQ0FDO0VBQ0FDO0VBQ0F0QjtFQUNBcEQ7RUFDQTZEO0FBQ0QsTUFDQ29DLG1DQUFBcEosUUFBQUMsY0FBQ2tCLFNBQUE7RUFDQWIsV0FBVztFQUNYZSxTQUFVcUcsV0FBVTtBQUNuQixTQUFLbUIsY0FBY25CLE9BQU87TUFDekJDO01BQ0FDO01BQ0FDO01BQ0F0QjtNQUNBcEQ7TUFDQTZEO0lBQ0QsQ0FBQztFQUNGO0VBQ0E1RixhQUFhNUIsV0FBVyxRQUFRO0FBQUEsQ0FDakM7QUFlRCxJQUFNK0osOEJBQThCQSxDQUFDO0VBQ3BDNUI7RUFDQUM7RUFDQUM7RUFDQXRCO0VBQ0FwRDtFQUNBNkQ7RUFDQXdDO0VBQ0FDO0VBQ0E1STtBQUNELE1BQ0N1SSxtQ0FBQXBKLFFBQUFDLGNBQUNxQixXQUFBLE1BQ0NrSSxXQUFXLE1BQ1hKLG1DQUFBcEosUUFBQUMsY0FBQ29KLG9CQUFBO0VBQ0ExQjtFQUNBQztFQUNBQztFQUNBdEI7RUFDQXBEO0VBQ0E2RDtFQUNBbkMsV0FBV2hFO0FBQUEsQ0FDWixJQUVBdUksbUNBQUFwSixRQUFBQyxjQUFBbUosbUJBQUFwSixRQUFBRSxVQUFBLElBQUUsR0FFRnNKLFdBQVcsT0FBT0MsV0FBVyxNQUFNTCxtQ0FBQXBKLFFBQUFDLGNBQUNzQixNQUFBLElBQUssSUFBSzZILG1DQUFBcEosUUFBQUMsY0FBQW1KLG1CQUFBcEosUUFBQUUsVUFBQSxJQUFFLEdBQ2hEdUosV0FBVyxNQUNYTCxtQ0FBQXBKLFFBQUFDLGNBQUNxSixtQkFBQTtFQUNBM0I7RUFDQUM7RUFDQUM7RUFDQXRCO0VBQ0FwRDtFQUNBNkQ7QUFBQSxDQUNELElBRUFvQyxtQ0FBQXBKLFFBQUFDLGNBQUFtSixtQkFBQXBKLFFBQUFFLFVBQUEsSUFBRSxDQUVKOztBUHRIRCxJQUFBd0oscUJBQXVCcEwsUUFBQSxxQkFBQTtBQUV2QixJQUFNcUwscUJBQXNCQyxhQUFxQjtBQUNoRCxRQUFNQyxhQUFhckosU0FBU0MsY0FBbUN2QyxrQkFBa0I7QUFFakYsTUFBSTJMLFlBQVk7QUFDZkEsZUFBV0MsUUFBUUYsT0FBTztFQUMzQjtBQUNEO0FBRUEsSUFBTUcsV0FBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFqSSxrQkFBVyxXQUFPO0lBQ3ZCa0k7SUFDQXBKO0lBQ0EySTtJQUNBQztFQUNELEdBS007QUFDTCxRQUFJLENBQUM1SSxRQUFRO0FBQ1o7SUFDRDtBQUNBOEksdUJBQW1CbEksbUNBQUF6QixRQUFBQyxjQUFDYyxTQUFBO01BQVFGO0lBQUEsQ0FBZ0IsQ0FBRTtBQUU5QyxVQUFNO01BQUN1RTtJQUFVLElBQUlqRixHQUFHQyxPQUFPQyxJQUFJO0FBQ25DLFVBQU1tQyxvQkFBQSxNQUEwQlgsWUFBWXVELFVBQVU7QUFFdEQsVUFBTThFLFdBQVcxSixTQUFTMkosaUJBQUEsSUFBQWpKLE9BQXFCK0ksUUFBUSxDQUFFO0FBQ3pELFVBQU1HLFlBQVksQ0FBQTtBQUNsQixVQUFNQyxpQkFBaUIsQ0FBQTtBQUFDLFFBQUFDLGFBQUE1SCwyQkFFRndILFFBQUEsR0FBQUs7QUFBQSxRQUFBO0FBQXRCLFdBQUFELFdBQUExSCxFQUFBLEdBQUEsRUFBQTJILFNBQUFELFdBQUF6SCxFQUFBLEdBQUFDLFFBQWdDO0FBQUEsY0FBckIwSCxVQUFBRCxPQUFBdkg7QUFDVixjQUFNeUgsV0FBV0QsUUFBUS9KLGNBQWMsY0FBYztBQUNyRDJKLGtCQUFVQSxVQUFVL0csTUFBTSxJQUFJb0gsYUFBQSxRQUFBQSxhQUFBLFNBQUEsU0FBQUEsU0FBVTNLO01BQ3pDO0lBQUEsU0FBQXdELEtBQUE7QUFBQWdILGlCQUFBL0csRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQWdILGlCQUFBOUcsRUFBQTtJQUFBO0FBRUEsVUFBTW1FLGlCQUFpQyxDQUFBO0FBQ3ZDLFFBQUlYLG1CQUFxQztNQUN4Q0MsV0FBV0EsTUFBTTtNQUFDO0lBQ25CO0FBRUEsVUFBTVcsaUJBQW1DLElBQUk4QyxpQkFBQSxHQUFBeEosT0FBb0JrRSxZQUFVLFVBQUEsQ0FBVTtBQUNyRixVQUFNeUMsaUJBQW1DLElBQUk2QyxpQkFBQSxHQUFBeEosT0FBb0JrRSxZQUFVLFVBQUEsQ0FBVTtBQUFBLFFBQUF1RixhQUFBakksMkJBRS9ERixpQkFBQSxHQUFBb0k7QUFBQSxRQUFBO0FBQXRCLFdBQUFELFdBQUEvSCxFQUFBLEdBQUEsRUFBQWdJLFNBQUFELFdBQUE5SCxFQUFBLEdBQUFDLFFBQXlDO0FBQUEsY0FBOUJDLFVBQUE2SCxPQUFBNUg7QUFDVixZQUFJRCxRQUFRRSxVQUFVZ0gsVUFBVTtBQUMvQjtRQUNEO0FBRUEsWUFBSUcsVUFBVTdKLFNBQVN3QyxRQUFRSSxNQUFNLEdBQUc7QUFDdkNrSCx5QkFBZUEsZUFBZWhILE1BQU0sSUFBSTtZQUN2Q2tELFNBQVN4RCxRQUFRRztZQUNqQkMsUUFBUUosUUFBUUk7VUFDakI7UUFDRDtNQUNEO0lBQUEsU0FBQUcsS0FBQTtBQUFBcUgsaUJBQUFwSCxFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBcUgsaUJBQUFuSCxFQUFBO0lBQUE7QUFFQSxhQUFBcUgsS0FBQSxHQUFBQyxrQkFBZ0NULGdCQUFBUSxLQUFBQyxnQkFBQXpILFFBQUF3SCxNQUFnQjtBQUFoRCxZQUFXO1FBQUN0RTtRQUFTcEQ7TUFBTSxJQUFBMkgsZ0JBQUFELEVBQUE7QUFFMUIsWUFBTUosV0FBV2pLLFNBQVN1SyxlQUFlNUgsTUFBTTtBQUMvQyxVQUFJLENBQUNzSCxVQUFVO0FBQ2Q7TUFDRDtBQUVBLFlBQU1PLGdCQUFnQlAsU0FBU3pDO0FBQy9CLFVBQUksQ0FBQ2dELGVBQWU7QUFDbkI7TUFDRDtBQUVBLFlBQU1DLGNBQWNELGNBQWN2SyxjQUFjLGlCQUFpQjtBQUNqRSxVQUFJLENBQUN3SyxhQUFhO0FBQ2pCO01BQ0Q7QUFFQSxZQUFNQyxnQkFDTHpKLG1DQUFBekIsUUFBQUMsY0FBQ3NKLDZCQUFBO1FBQ0E1QjtRQUNBQztRQUNBQztRQUNBdEI7UUFDQXBEO1FBQ0E2RDtRQUNBbkc7UUFDQTJJO1FBQ0FDO01BQUEsQ0FDRDtBQUdEd0Isa0JBQVluQixRQUFRb0IsYUFBYTtBQUNqQ3ZELHFCQUFlQSxlQUFldEUsTUFBTSxJQUFJNkg7SUFDekM7QUFFQXRELG1CQUFldUQsaUJBQWlCLFdBQVl6RCxXQUFVO0FBQ3JELGVBQUEwRCxNQUFBLEdBQUFDLGtCQUFtQjFELGdCQUFBeUQsTUFBQUMsZ0JBQUFoSSxRQUFBK0gsT0FBZ0I7QUFBbkMsY0FBVy9DLE9BQUFnRCxnQkFBQUQsR0FBQTtBQUNWL0MsYUFBS0MsT0FBTztNQUNiO0FBQ0F0Qix1QkFBaUJDLFVBQVU7QUFDM0JELDBCQUFBLEdBQW1CMEMsbUJBQUF4QyxVQUNsQjtRQUNDckIsTUFBTTZCLE1BQU00RDtRQUNaN0MsT0FBTztRQUNQdEIsVUFBVSxJQUFJO01BQ2YsR0FDQSxNQUNEO0lBQ0QsQ0FBQztBQUVEVSxtQkFBZXNELGlCQUFpQixXQUFXLE1BQU07QUFDaERuRSx1QkFBaUJDLFVBQVU7QUFDM0JELDBCQUFBLEdBQW1CMEMsbUJBQUF4QyxVQUNsQjtRQUNDcUUsTUFDQzlKLG1DQUFBekIsUUFBQUMsY0FBQ3VCLG9CQUFBO1VBQ0FILFNBQVNBLE1BQU07QUFDZDJGLDZCQUFpQkMsVUFBVTtBQUMzQkgsb0JBQVE7VUFDVDtRQUFBLENBQ0Q7UUFFRDJCLE9BQU87UUFDUHRCLFVBQVU7TUFDWCxHQUNBLE1BQ0Q7SUFDRCxDQUFDO0VBQ0YsQ0FBQTtBQUFBLFNBQUEsU0FySE00QyxVQUFBeUIsTUFBQTtBQUFBLFdBQUF4QixNQUFBdEcsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBUWhCTixJQUFNOEgscUJBQXNCNUssWUFBbUI7QUFDOUMsUUFBTTtJQUFDdUU7RUFBVSxJQUFJakYsR0FBR0MsT0FBT0MsSUFBSTtBQUNuQyxRQUFNcUwsY0FBYyxJQUFJdkwsR0FBR3dMLE1BQU12RyxVQUFVO0FBQzNDLFFBQU13RyxjQUFjLElBQUl6TCxHQUFHd0wsTUFBTTlLLE1BQU07QUFFdkMsUUFBTWdMLG9CQUFvQkQsWUFBWUUsZUFBZTtBQUNyRCxRQUFNQyxpQkFBaUJILFlBQVlJLFFBQVE7QUFDM0MsUUFBTUMsb0JBQW9CUCxZQUFZSSxlQUFlO0FBQ3JELFFBQU1JLGlCQUFpQlIsWUFBWU0sUUFBUTtBQUUzQyxNQUFJSCxzQkFBc0IsR0FBRztBQUM1QixXQUFPO0VBQ1I7QUFFQSxNQUFJQSxzQkFBc0JJLHFCQUFxQkYsbUJBQW1CRyxnQkFBZ0I7QUFDakYsV0FBTztFQUNSO0FBRUEsU0FBTztBQUNSO0FBRUEsSUFBTUMsZ0JBQWdCQSxNQUFNO0FBQzNCLFFBQU07SUFBQy9HO0VBQVUsSUFBSWpGLEdBQUdDLE9BQU9DLElBQUk7QUFFbkMsUUFBTStMLG9CQUFvQixDQUN6QixhQUNBLGtCQUNBLGVBQ0EsaUJBQ0EsaUJBQ0EsZ0JBQ0Esc0JBQ0EsdUJBQ0Esc0JBQUE7QUFHRCxXQUFBQyxNQUFBLEdBQUFDLHFCQUFzQkYsbUJBQUFDLE1BQUFDLG1CQUFBakosUUFBQWdKLE9BQW1CO0FBQXpDLFVBQVd6QyxVQUFBMEMsbUJBQUFELEdBQUE7QUFDVixRQUFJekMsUUFBUTJDLEtBQUtuSCxVQUFVLEdBQUc7QUFDN0IsYUFBTztJQUNSO0VBQ0Q7QUFFQSxTQUFPO0FBQ1I7QUFFQSxJQUFNb0gsZUFBZUEsTUFBTTtBQUMxQixRQUFNO0lBQUNDO0lBQW1CQztJQUFvQkM7RUFBVSxJQUFJeE0sR0FBR0MsT0FBT0MsSUFBSTtBQUUxRSxPQUFLb00sc0JBQXNCLEtBQUtBLHNCQUFzQixNQUFNLEVBQUVDLHVCQUF1QkMsYUFBYTtBQUNqRyxXQUFPO0VBQ1I7QUFFQSxTQUFPO0FBQ1I7QUFFQSxJQUFNQyxpQkFBaUJBLE1BQU07QUFDNUIsUUFBTTtJQUFDQztJQUFjSjtJQUFtQks7SUFBaUJDO0VBQVksSUFBSTVNLEdBQUdDLE9BQU9DLElBQUk7QUFFdkYsTUFBSW9NLG9CQUFvQixLQUFLSyxrQkFBa0JDLGlCQUFpQixHQUFHO0FBQ2xFLFdBQU87RUFDUjtBQUVBLE1BQUlOLHNCQUFzQixLQUFLSSxjQUFjO0FBQzVDLFdBQU87RUFDUjtBQUVBLFNBQU87QUFDUjtBQUVBLElBQU1HLGNBQWNBLE1BQU07QUFDekIsUUFBTUMsV0FBV3pNLFNBQVNDLGNBQWMscUNBQXFDO0FBQzdFLE1BQUksQ0FBQ3dNLFVBQVU7QUFDZCxXQUFPO0VBQ1I7QUFFQSxRQUFNO0lBQUNDO0VBQU8sSUFBSUQ7QUFDbEIsUUFBTTtJQUFDaEQ7SUFBVXBKO0lBQVEySTtJQUFRQztFQUFNLElBQUl5RDtBQUMzQyxTQUFPO0lBQ05qRCxVQUFVQSxhQUFBLFFBQUFBLGFBQUEsU0FBQUEsV0FBWTtJQUN0QnBKLFFBQVFBLFdBQUEsUUFBQUEsV0FBQSxTQUFBQSxTQUFVO0lBQ2xCMkksUUFBUUEsV0FBQSxRQUFBQSxXQUFBLFNBQUFBLFNBQVU7SUFDbEJDLFFBQVFBLFdBQUEsUUFBQUEsV0FBQSxTQUFBQSxTQUFVO0VBQ25CO0FBQ0Q7O0FDaEZBLElBQUEwRCxzQkFBa0I5TyxRQUFBQyxRQUFBLGtCQUFBLENBQUE7Q0FFakIsU0FBUzhPLGNBQWM7QUFDdkIsUUFBTUMsZUFBZVQsZUFBZTtBQUNwQyxNQUFJUyxjQUFjO0FBQ2pCO0VBQ0Q7QUFFQSxRQUFNQyxjQUFjbkIsY0FBYztBQUNsQyxNQUFJbUIsYUFBYTtBQUNoQjNELHVCQUFtQndELG9DQUFBbk4sUUFBQUMsY0FBQ1MsYUFBQSxJQUFZLENBQUU7QUFDbEM7RUFDRDtBQUVBLFFBQU02TSxhQUFhZixhQUFhO0FBQ2hDLE1BQUllLFlBQVk7QUFDZjVELHVCQUFtQndELG9DQUFBbk4sUUFBQUMsY0FBQ1UsWUFBQSxJQUFXLENBQUU7QUFDakM7RUFDRDtBQUVBLFFBQU1zTSxXQUFXRCxZQUFZO0FBQzdCLE1BQUksQ0FBQ0MsVUFBVTtBQUNkdEQsdUJBQW1Cd0Qsb0NBQUFuTixRQUFBQyxjQUFDYSxVQUFBLElBQVMsQ0FBRTtBQUMvQjtFQUNEO0FBRUEsUUFBTTtJQUFDRDtFQUFNLElBQUlvTTtBQUNqQixNQUFJLENBQUNwTSxRQUFRO0FBQ1o4SSx1QkFBbUJ3RCxvQ0FBQW5OLFFBQUFDLGNBQUNhLFVBQUEsSUFBUyxDQUFFO0FBQy9CO0VBQ0Q7QUFFQSxRQUFNME0sbUJBQW1CL0IsbUJBQW1CNUssTUFBTTtBQUNsRCxNQUFJMk0sa0JBQWtCO0FBQ3JCN0QsdUJBQW1Cd0Qsb0NBQUFuTixRQUFBQyxjQUFDVyxrQkFBQTtNQUFpQkM7SUFBQSxDQUFnQixDQUFFO0FBQ3ZEO0VBQ0Q7QUFFQSxPQUFLa0osU0FBU2tELFFBQVE7QUFDdkIsR0FBRzsiLAogICJuYW1lcyI6IFsiQnJvYWRjYXN0Q2hhbm5lbCIsICJlbGVtZW50SWQiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJmb290ZXJOb3RpY2UiLCAic2VjdGlvbklkU3BhbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQXJjaGl2ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJBcmNoaXZpbmciLCAiQXJjaGl2ZWQiLCAiRGVsZXRlIiwgIkRlbGV0aW5nIiwgIkRlbGV0ZWQiLCAiemgiLCAiUmVmcmVzaCIsICJSZWZyZXNoaW5nIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJzYW5pdGl6ZSIsICJzdHJpbmciLCAicmVwbGFjZSIsICJGb290ZXJOb3RpY2UiLCAiaWQiLCAiY2hpbGRyZW4iLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgIkZyYWdtZW50IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiSW5CbGFja0xpc3QiLCAiTm90QWxsb3dlZCIsICJBcmNMb2NOb3RBbGxvd2VkIiwgImFyY0xvYyIsICJOb0FyY0xvYyIsICJFbmFibGVkIiwgInRpdGxlIiwgImhyZWYiLCAiY29uY2F0IiwgIk9uQ2xpY2siLCAidGV4dENvbnRlbnQiLCAib25DbGljayIsICJTZWN0aW9uSUQiLCAiUGlwZSIsICJFZGl0Q29uZmxpY3ROb3RpY2UiLCAiaW1wb3J0X2V4dF9nYWRnZXQ4IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgImdldFNlY3Rpb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwYWdlIiwgInByb3AiLCAicGFyc2UiLCAic2VjdGlvbnMiLCAic2VjdGlvbnNUb0FyY2hpdmUiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAic2VjdGlvbiIsICJ2YWx1ZSIsICJsZXZlbCIsICJpbmRleCIsICJhbmNob3IiLCAic3RhcnRzV2l0aCIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0U2VjdGlvbkNvbnRlbnQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJHF1ZXJ5JHBhZ2VzIiwgIl9yZXNwb25zZSRxdWVyeSRwYWdlczIiLCAicnZwcm9wIiwgInRpdGxlcyIsICJydnNlY3Rpb24iLCAicnZzbG90cyIsICJyZXNwb25zZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgIl94MiIsICJpc1BhZ2VFeGlzdCIsICJfcmVmMyIsICJhcmNoaXZlVG8iLCAiX3F1ZXJ5JHBhZ2VzJCIsICJxdWVyeSIsICJtaXNzaW5nIiwgIl94MyIsICJpc1NlY3Rpb25FeGlzdCIsICJfcmVmNCIsICJ3Z1BhZ2VOYW1lIiwgImlzRXhpc3QiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiX3g0IiwgInJlbW92ZVNlY3Rpb24iLCAiX3JlZjUiLCAic3VtbWFyeSIsICJlZGl0IiwgInRleHQiLCAibWlub3IiLCAiX3g1IiwgImFyY2hpdmVTZWN0aW9uIiwgIl9yZWY2IiwgInBhZ2VFeGlzdCIsICJjcmVhdGUiLCAiYXBwZW5kdGV4dCIsICJfeDYiLCAiZ2V0QXJjaGl2aW5nTWVzc2FnZSIsICJpbmRleE5vIiwgImdldEFyY2hpdmVkTWVzc2FnZSIsICJnZXREZWxldGluZ01lc3NhZ2UiLCAiZ2V0RGVsZXRlZE1lc3NhZ2UiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJ3Z1NjcmlwdCIsICJyZWZyZXNoIiwgInRhcmdldFBhZ2UiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAidG9hc3RpZnkiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iLCAidXRpbCIsICJnZXRVcmwiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImFyY2hpdmVPbkNsaWNrIiwgIl9yZWY3IiwgImV2ZW50IiwgInNlY3Rpb25JZFNwYW5zIiwgIm1lc3NhZ2VDaGFubmVsIiwgInJlZnJlc2hDaGFubmVsIiwgIl9ldmVudCR0YXJnZXQiLCAicHJldmVudERlZmF1bHQiLCAicGFyZW50RWxlbWVudCIsICJ0YXJnZXQiLCAicmVwbGFjZUNoaWxkcmVuIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInNwYW4iLCAicmVtb3ZlIiwgIm1lc3NhZ2UxIiwgInBvc3RNZXNzYWdlIiwgImNsb3NlIiwgIm1lc3NhZ2UiLCAiX3g3IiwgIl94OCIsICJyZW1vdmVPbkNsaWNrIiwgIl9yZWY4IiwgIl9ldmVudCR0YXJnZXQyIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl94OSIsICJfeDEwIiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJBcmNoaXZlU2VjdGlvbkxpbmsiLCAiUmVtb3ZlU2VjdGlvbkxpbmsiLCAiQXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rIiwgInNlY0FyYyIsICJzZWNEZWwiLCAiaW1wb3J0X2V4dF9nYWRnZXQ5IiwgImFwcGVuZEZvb3Rlck5vdGljZSIsICJlbGVtZW50IiwgIm1vdW50UG9pbnQiLCAicHJlcGVuZCIsICJhZGRMaW5rcyIsICJfcmVmOSIsICJhcmNMZXZlbCIsICJoZWFkaW5ncyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImhlYWRsaW5lcyIsICJoZWFkaW5nSW5kaWNlcyIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJoZWFkaW5nIiwgImhlYWRsaW5lIiwgIkJyb2FkY2FzdENoYW5uZWwiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiX2kiLCAiX2hlYWRpbmdJbmRpY2VzIiwgImdldEVsZW1lbnRCeUlkIiwgInBhcmVudEhlYWRpbmciLCAiZWRpdFNlY3Rpb24iLCAic2VjdGlvbklEU3BhbiIsICJhZGRFdmVudExpc3RlbmVyIiwgIl9pMiIsICJfc2VjdGlvbklkU3BhbnMiLCAiZGF0YSIsICJub2RlIiwgIl94MTEiLCAiaWZBcmNMb2NOb3RBbGxvd2VkIiwgInNvdXJjZVRpdGxlIiwgIlRpdGxlIiwgImFyY0xvY1RpdGxlIiwgImFyY0xvY05hbWVzcGFjZUlkIiwgImdldE5hbWVzcGFjZUlkIiwgImFyY0xvY1BhZ2VOYW1lIiwgImdldE1haW4iLCAic291cmNlTmFtZXNwYWNlSWQiLCAic291cmNlUGFnZU5hbWUiLCAiaXNJbkJsYWNrbGlzdCIsICJibGFja0xpc3RSZWdleEFyciIsICJfaTMiLCAiX2JsYWNrTGlzdFJlZ2V4QXJyIiwgInRlc3QiLCAiaXNOb3RBbGxvd2VkIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJ3Z1VzZXJOYW1lIiwgImlzTm90U3VwcG9ydGVkIiwgIndnSXNNYWluUGFnZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dSZXZpc2lvbklkIiwgImdldFNldHRpbmdzIiwgInNldHRpbmdzIiwgImRhdGFzZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQxMCIsICJlYXN5QXJjaGl2ZSIsICJub3RTdXBwb3J0ZWQiLCAiaW5CbGFja2xpc3QiLCAibm90QWxsb3dlZCIsICJhcmNMb2NOb3RBbGxvd2VkIl0KfQo=
