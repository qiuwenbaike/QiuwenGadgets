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
  id,
  className: [footerNotice, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
}, children) : ["vector", "vector-2022", "gongbi"].includes(mw.config.get("skin")) || document.querySelector("ul#footer-info") ? /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
  id,
  className: [footerNotice, "noprint"]
}, children) : /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  id,
  className: [footerNotice, "noprint"]
}, children));
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
  onClick,
  children
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  className: ["gadget-easy_archive__link", "gadget-easy_archive__link-".concat(className)],
  onClick,
  textContent
}, children);
var SectionID = ({
  className,
  children
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  className: [className, sectionIdSpan]
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
var spanWrap = (textContent) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  textContent
});
//! src/EasyArchive/options.json
var mountPointSelector = "#footer-info,.page-info";
var version = "1.0";
//! src/EasyArchive/modules/addLinks.tsx
var import_ext_gadget7 = __toESM(require("ext.gadget.React"), 1);
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
//! src/EasyArchive/modules/util/replaceChild.ts
var replaceChild = (element, newChild) => {
  while (element.hasChildNodes()) {
    var _element$firstChild;
    (_element$firstChild = element.firstChild) === null || _element$firstChild === void 0 || _element$firstChild.remove();
  }
  element.append(newChild);
};
//! src/EasyArchive/modules/util/onClick.ts
var import_ext_gadget5 = require("ext.gadget.Toastify");
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
    replaceChild(parentElement, spanWrap(getMessage("Archiving")));
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
    const message1 = getMessage("Archiving") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
    messageChannel.postMessage(message1);
    toastifyInstance || (toastifyInstance = {
      hideToast: () => {
      }
    });
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget5.toastify)({
      text: message1,
      close: true,
      duration: -1
    }, "info");
    yield archiveSection({
      index: indexNo,
      anchor,
      archiveTo
    });
    replaceChild(parentElement, spanWrap(getMessage("Archived")));
    const message2 = getMessage("Archived") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
    messageChannel.postMessage(message2);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget5.toastify)({
      text: message2,
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
    replaceChild(parentElement, spanWrap(getMessage("Deleting")));
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
    const message1 = getMessage("Deleting") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
    messageChannel.postMessage(message1);
    toastifyInstance || (toastifyInstance = {
      hideToast: () => {
      }
    });
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget5.toastify)({
      text: message1,
      close: true,
      duration: -1
    }, "info");
    yield removeSection({
      index: indexNo,
      anchor
    });
    replaceChild(parentElement, spanWrap(getMessage("Deleted")));
    const message2 = getMessage("Deleted") + getMessage(":") + getMessage("Section $1").replace("$1", indexNo);
    messageChannel.postMessage(message2);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget5.toastify)({
      text: message2,
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
var import_ext_gadget6 = __toESM(require("ext.gadget.React"), 1);
var ArchiveSectionLink = ({
  sectionIdSpans,
  messageChannel,
  refreshChannel,
  indexNo,
  anchor,
  archiveTo,
  toastifyInstance
}) => /* @__PURE__ */ import_ext_gadget6.default.createElement(OnClick, {
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
}) => /* @__PURE__ */ import_ext_gadget6.default.createElement(OnClick, {
  className: "delete",
  textContent: getMessage("Delete"),
  onClick: (event) => {
    void removeOnClick(event, {
      sectionIdSpans,
      messageChannel,
      refreshChannel,
      indexNo,
      anchor,
      toastifyInstance
    });
  }
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
}) => /* @__PURE__ */ import_ext_gadget6.default.createElement(SectionID, null, secArc === "1" ? /* @__PURE__ */ import_ext_gadget6.default.createElement(ArchiveSectionLink, {
  sectionIdSpans,
  messageChannel,
  refreshChannel,
  indexNo,
  anchor,
  toastifyInstance,
  archiveTo: arcLoc
}) : /* @__PURE__ */ import_ext_gadget6.default.createElement(import_ext_gadget6.default.Fragment, null), secArc === "1" && secDel === "1" ? /* @__PURE__ */ import_ext_gadget6.default.createElement(Pipe, null) : /* @__PURE__ */ import_ext_gadget6.default.createElement(import_ext_gadget6.default.Fragment, null), secDel === "1" ? /* @__PURE__ */ import_ext_gadget6.default.createElement(RemoveSectionLink, {
  sectionIdSpans,
  messageChannel,
  refreshChannel,
  indexNo,
  anchor,
  toastifyInstance
}) : /* @__PURE__ */ import_ext_gadget6.default.createElement(import_ext_gadget6.default.Fragment, null));
//! src/EasyArchive/modules/addLinks.tsx
var import_ext_gadget8 = require("ext.gadget.Toastify");
var appendFooterNotice = (innerElement) => {
  var _document$querySelect;
  (_document$querySelect = document.querySelectorAll(mountPointSelector)[0]) === null || _document$querySelect === void 0 || _document$querySelect.prepend(innerElement);
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
    appendFooterNotice(/* @__PURE__ */ import_ext_gadget7.default.createElement(Enabled, {
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
      const sectionIDSpan = /* @__PURE__ */ import_ext_gadget7.default.createElement(ArchiveAndDeleteSectionLink, {
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
      toastifyInstance = (0, import_ext_gadget8.toastify)({
        text: event.data,
        close: true,
        duration: 3 * 1e3
      }, "info");
    });
    refreshChannel.addEventListener("message", () => {
      toastifyInstance.hideToast();
      toastifyInstance = (0, import_ext_gadget8.toastify)({
        node: /* @__PURE__ */ import_ext_gadget7.default.createElement(EditConflictNotice, {
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
var import_ext_gadget9 = __toESM(require("ext.gadget.React"));
(function easyArchive() {
  const notSupported = isNotSupported();
  if (notSupported) {
    return;
  }
  const inBlacklist = isInBlacklist();
  if (inBlacklist) {
    appendFooterNotice(/* @__PURE__ */ import_ext_gadget9.default.createElement(InBlackList, null));
    return;
  }
  const notAllowed = isNotAllowed();
  if (notAllowed) {
    appendFooterNotice(/* @__PURE__ */ import_ext_gadget9.default.createElement(NotAllowed, null));
    return;
  }
  const settings = getSettings();
  if (!settings) {
    appendFooterNotice(/* @__PURE__ */ import_ext_gadget9.default.createElement(NoArcLoc, null));
    return;
  }
  const {
    arcLoc
  } = settings;
  if (!arcLoc) {
    appendFooterNotice(/* @__PURE__ */ import_ext_gadget9.default.createElement(NoArcLoc, null));
    return;
  }
  const arcLocNotAllowed = ifArcLocNotAllowed(arcLoc);
  if (arcLocNotAllowed) {
    appendFooterNotice(/* @__PURE__ */ import_ext_gadget9.default.createElement(ArcLocNotAllowed, {
      arcLoc
    }));
    return;
  }
  void addLinks(settings);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvY29tcG9uZW50cy9yZWFjdC50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvY29tcG9uZW50cy9FYXN5QXJjaGl2ZS5tb2R1bGUubGVzcyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvc2FuaXRpemUudHMiLCAic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9hZGRMaW5rcy50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9nZXRTZWN0aW9uLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvZWRpdFNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9yZWZyZXNoUGFnZS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL3JlcGxhY2VDaGlsZC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL29uQ2xpY2sudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvY29tcG9uZW50cy9zZWN0aW9uTGluay50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9nZXRTZXR0aW5ncy50cyIsICJzcmMvRWFzeUFyY2hpdmUvRWFzeUFyY2hpdmUudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgdmFyIGNoYW5uZWxzID0gW107XG5cbiAgICBmdW5jdGlvbiBCcm9hZGNhc3RDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgY2hhbm5lbCA9IFN0cmluZyhjaGFubmVsKTtcblxuICAgICAgICB2YXIgaWQgPSAnJEJyb2FkY2FzdENoYW5uZWwkJyArIGNoYW5uZWwgKyAnJCc7XG5cbiAgICAgICAgY2hhbm5lbHNbaWRdID0gY2hhbm5lbHNbaWRdIHx8IFtdO1xuICAgICAgICBjaGFubmVsc1tpZF0ucHVzaCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9uYW1lID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX21jID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQxLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQyLnN0YXJ0KCk7XG5cbiAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5zdG9yYWdlQXJlYSAhPT0gZ2xvYmFsLmxvY2FsU3RvcmFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUubmV3VmFsdWUgPT0gbnVsbCB8fCBlLm5ld1ZhbHVlID09PSAnJykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUua2V5LnN1YnN0cmluZygwLCBpZC5sZW5ndGgpICE9PSBpZCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGUubmV3VmFsdWUpO1xuICAgICAgICAgICAgJHRoaXMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBCcm9hZGNhc3RDaGFubmVsLnByb3RvdHlwZSA9IHtcbiAgICAgICAgLy8gQnJvYWRjYXN0Q2hhbm5lbCBBUElcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdE1lc3NhZ2U6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBlLm5hbWUgPSAnSW52YWxpZFN0YXRlRXJyb3InO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIG90aGVyIGNvbnRleHRzIHZpYSBzdG9yYWdlIGV2ZW50cy4uLlxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2lkICsgU3RyaW5nKERhdGUubm93KCkpICsgJyQnICsgU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBjdXJyZW50IGNvbnRleHQgdmlhIHBvcnRzXG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uZm9yRWFjaChmdW5jdGlvbihiYykge1xuICAgICAgICAgICAgICAgIGlmIChiYyA9PT0gJHRoaXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICBiYy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoSlNPTi5wYXJzZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDIuY2xvc2UoKTtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gY2hhbm5lbHNbdGhpcy5faWRdLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBFdmVudFRhcmdldCBBUElcbiAgICAgICAgZ2V0IG9ubWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvbm1lc3NhZ2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKC8qZXZlbnQqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmRpc3BhdGNoRXZlbnQuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsID0gZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgfHwgQnJvYWRjYXN0Q2hhbm5lbDtcbn0pKHNlbGYpO1xuIiwgImltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2Zvb3Rlck5vdGljZSwgc2VjdGlvbklkU3Bhbn0gZnJvbSAnLi9FYXN5QXJjaGl2ZS5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtzYW5pdGl6ZX0gZnJvbSAnLi4vdXRpbC9zYW5pdGl6ZSc7XG5cbmludGVyZmFjZSBGb290ZXJOb3RpY2VQcm9wcyB7XG5cdGlkOiBzdHJpbmc7XG5cdGNoaWxkcmVuPzogUmVhY3RFbGVtZW50IHwgUmVhY3RFbGVtZW50W107XG59XG5cbmNvbnN0IEZvb3Rlck5vdGljZSA9ICh7aWQsIGNoaWxkcmVufTogRm9vdGVyTm90aWNlUHJvcHMpID0+IChcblx0PD5cblx0XHR7bXcuY29uZmlnLmdldCgnc2tpbicpID09PSAnY2l0aXplbicgPyAoXG5cdFx0XHQ8c2VjdGlvbiBpZD17aWR9IGNsYXNzTmFtZT17W2Zvb3Rlck5vdGljZSwgJ3BhZ2UtaW5mb19faXRlbScsICdjaXRpemVuLWZvb3Rlcl9fcGFnZWluZm8taXRlbScsICdub3ByaW50J119PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KSA6IFsndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJywgJ2dvbmdiaSddLmluY2x1ZGVzKG13LmNvbmZpZy5nZXQoJ3NraW4nKSkgfHxcblx0XHQgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykgPyAoXG5cdFx0XHQ8bGkgaWQ9e2lkfSBjbGFzc05hbWU9e1tmb290ZXJOb3RpY2UsICdub3ByaW50J119PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L2xpPlxuXHRcdCkgOiAoXG5cdFx0XHQ8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtbZm9vdGVyTm90aWNlLCAnbm9wcmludCddfT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9kaXY+XG5cdFx0KX1cblx0PC8+XG4pO1xuXG5jb25zdCBJbkJsYWNrTGlzdCA9ICgpID0+IChcblx0PEZvb3Rlck5vdGljZSBpZD1cImVhc3lfYXJjaGl2ZV9ub3Rfc3VwcG9ydGVkX25vdGljZVwiPlxuXHRcdDxzcGFuPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkJyl9XG5cdFx0XHQ8YnIgLz5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCBkZXRhaWxzJyl9XG5cdFx0PC9zcGFuPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmNvbnN0IE5vdEFsbG93ZWQgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2UgaWQ9XCJlYXN5X2FyY2hpdmVfbm90X2FsbG93ZWRfbm90aWNlXCI+XG5cdFx0PHNwYW4+e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3QgYWxsb3dlZCcpfTwvc3Bhbj5cblx0PC9Gb290ZXJOb3RpY2U+XG4pO1xuXG5pbnRlcmZhY2UgQXJjTG9jTm90QWxsb3dlZFByb3BzIHtcblx0YXJjTG9jOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFyY0xvY05vdEFsbG93ZWQgPSAoe2FyY0xvY306IEFyY0xvY05vdEFsbG93ZWRQcm9wcykgPT4gKFxuXHQ8Rm9vdGVyTm90aWNlIGlkPVwiZWFzeV9hcmNoaXZlX2FyY19sb2Nfbm90X2FsbG93ZWRfbm90aWNlXCI+XG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCcpLnJlcGxhY2UoJyQxJywgc2FuaXRpemUoYXJjTG9jKSl9XG5cdFx0XHQ8YnIgLz5cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkIGRldGFpbHMnKX1cblx0XHQ8L3NwYW4+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuY29uc3QgTm9BcmNMb2MgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2UgaWQ9XCJlYXN5X2FyY2hpdmVfbm9fYXJjX2xvY19ub3RpY2VcIj5cblx0XHQ8c3Bhbj57Z2V0TWVzc2FnZSgnTm8gQXJjaGl2ZSBMb2NhdGlvbicpfTwvc3Bhbj5cblx0PC9Gb290ZXJOb3RpY2U+XG4pO1xuXG5pbnRlcmZhY2UgRW5hYmxlZFByb3BzIHtcblx0YXJjTG9jOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVuYWJsZWQgPSAoe2FyY0xvY306IEVuYWJsZWRQcm9wcykgPT4gKFxuXHQ8Rm9vdGVyTm90aWNlIGlkPVwiZWFzeV9hcmNoaXZlX2FyY19sb2Nfbm90X2FsbG93ZWRfbm90aWNlXCI+XG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIGVuYWJsZWQnKX1cblx0XHRcdHtnZXRNZXNzYWdlKCcoJyl9XG5cdFx0XHR7Z2V0TWVzc2FnZSgnQXJjaGl2ZSBsb2NhdGlvbicpfVxuXHRcdFx0PGEgdGl0bGU9e3Nhbml0aXplKGFyY0xvYyl9IGhyZWY9e2Avd2lraS8ke3Nhbml0aXplKGFyY0xvYyl9YH0+XG5cdFx0XHRcdHthcmNMb2N9XG5cdFx0XHQ8L2E+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnKScpfVxuXHRcdFx0e2dldE1lc3NhZ2UoJy4nKX1cblx0XHQ8L3NwYW4+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuaW50ZXJmYWNlIE9uQ2xpY2tQcm9wcyB7XG5cdHRleHRDb250ZW50OiBzdHJpbmc7XG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXHRvbkNsaWNrPzogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcblx0Y2hpbGRyZW4/OiBSZWFjdEVsZW1lbnQgfCBSZWFjdEVsZW1lbnRbXTtcbn1cblxuY29uc3QgT25DbGljayA9ICh7dGV4dENvbnRlbnQsIGNsYXNzTmFtZSwgb25DbGljaywgY2hpbGRyZW59OiBPbkNsaWNrUHJvcHMpID0+IChcblx0PGFcblx0XHRjbGFzc05hbWU9e1snZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fbGluaycsIGBnYWRnZXQtZWFzeV9hcmNoaXZlX19saW5rLSR7Y2xhc3NOYW1lfWBdfVxuXHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdFx0dGV4dENvbnRlbnQ9e3RleHRDb250ZW50fVxuXHQ+XG5cdFx0e2NoaWxkcmVufVxuXHQ8L2E+XG4pO1xuXG5pbnRlcmZhY2UgU2VjdGlvbklEUHJvcHMge1xuXHRjbGFzc05hbWU/OiBzdHJpbmc7XG5cdGNoaWxkcmVuPzogUmVhY3RFbGVtZW50IHwgUmVhY3RFbGVtZW50W107XG59XG5cbmNvbnN0IFNlY3Rpb25JRCA9ICh7Y2xhc3NOYW1lLCBjaGlsZHJlbn06IFNlY3Rpb25JRFByb3BzKSA9PiAoXG5cdDxzcGFuIGNsYXNzTmFtZT17W2NsYXNzTmFtZSwgc2VjdGlvbklkU3Bhbl19PntjaGlsZHJlbn08L3NwYW4+XG4pO1xuXG5jb25zdCBQaXBlID0gKCkgPT4gPHNwYW4gY2xhc3NOYW1lPVwibXctZWRpdHNlY3Rpb24tZGl2aWRlclwiIHRleHRDb250ZW50PXsnfCd9IC8+O1xuXG5pbnRlcmZhY2UgRWRpdENvbmZsaWN0Tm90aWNlUHJvcHMge1xuXHRvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBFZGl0Q29uZmxpY3ROb3RpY2UgPSAoe29uQ2xpY2t9OiBFZGl0Q29uZmxpY3ROb3RpY2VQcm9wcykgPT4gKFxuXHQ8c3Bhbj5cblx0XHR7Z2V0TWVzc2FnZSgnRWRpdCBDb25maWxpY3QgTm90aWNlJyl9XG5cdFx0PGEgb25DbGljaz17b25DbGlja30+e2dldE1lc3NhZ2UoJ1JlZnJlc2gnKX08L2E+XG5cdDwvc3Bhbj5cbik7XG5cbmNvbnN0IHNwYW5XcmFwID0gKHRleHRDb250ZW50OiBzdHJpbmcpID0+IDxzcGFuIHRleHRDb250ZW50PXt0ZXh0Q29udGVudH0gLz47XG5cbmV4cG9ydCB7XG5cdEZvb3Rlck5vdGljZSxcblx0RW5hYmxlZCxcblx0SW5CbGFja0xpc3QsXG5cdE5vdEFsbG93ZWQsXG5cdEFyY0xvY05vdEFsbG93ZWQsXG5cdE5vQXJjTG9jLFxuXHRPbkNsaWNrLFxuXHRQaXBlLFxuXHRTZWN0aW9uSUQsXG5cdEVkaXRDb25mbGljdE5vdGljZSxcblx0c3BhbldyYXAsXG59O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jb21wb25lbnRzL0Vhc3lBcmNoaXZlLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgZm9vdGVyTm90aWNlID0gXCJFYXN5QXJjaGl2ZS1tb2R1bGVfX2Zvb3Rlck5vdGljZV9aUmtHMXFcIjtcbmV4cG9ydCBjb25zdCBzZWN0aW9uSWRTcGFuID0gXCJFYXN5QXJjaGl2ZS1tb2R1bGVfX3NlY3Rpb25JZFNwYW5fWlJrRzFxXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJmb290ZXJOb3RpY2VcIjogZm9vdGVyTm90aWNlLFxuICBcInNlY3Rpb25JZFNwYW5cIjogc2VjdGlvbklkU3BhblxufTtcbiAgICAgICIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QXJjaGl2ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIGxvY2F0aW9uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlIGxvY2F0aW9uOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5Zyw5Z2A77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOiHs++8micsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgYnV0IEVhc3kgYXJjaGl2ZSBjYW5ub3Qgb3BlcmF0ZSBsaWtlIHRoaXMuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouebruWJjeeahOWtmOaho+WcsOWdgOaYr+KAnCQx4oCd44CCRWFzeSBBcmNoaXZlIOaXoOazleaMieatpOWcsOWdgOWtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLnlbbliY3nmoTlrZjmqpTlnLDlnYDmmK/jgIwkMeOAjeOAgkVhc3kgQXJjaGl2ZSDnhKHms5XmjInmraTlnLDlnYDlrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkIGRldGFpbHMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmVzIHNob3VsZCBub3QgYmUgbm9ybWFsbHkgZGlyZWN0ZWQgdG8gcGFnZXMgdW5kZXIgYXJ0aWNsZSBuYW1lc3BhY2UuIFBsZWFzZSBjaGVjayBpZiB5b3UgaGF2ZSB0aGUgY29ycmVjdCBhcmNoaXZlIGxvY2F0aW9uLicsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDoiKzogIzoqIDvvIzkuI3lupTlkJHmnaHnm67lkI3np7Dnqbrpl7Tov5vooYzlrZjmoaPjgILmraTlpJbvvIzlrZjmoaPlnLDlnYDkuI3lvpflkozmraTpobXpnaLlkI3np7Dnm7jlkIzjgILor7fmo4Dmn6XlrZjmoaPlnLDlnYDjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA6Iis6ICM6KiA77yM5LiN5oeJ5ZCR5qKd55uu5ZCN56ix56m66ZaT6YCy6KGM5a2Y5qqU44CC5q2k5aSW77yM5a2Y5qqU5Zyw5Z2A5LiN5b6X5ZKM5q2k6aCB6Z2i5ZCN56ix55u45ZCM44CC6KuL5qqi5p+l5a2Y5qqU5Zyw5Z2A44CCJyxcblx0XHR9KSxcblx0XHRBcmNoaXZpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2aW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+S4rScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTkuK0nLFxuXHRcdH0pLFxuXHRcdEFyY2hpdmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflt7LlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdFZGl0IENvbmZpbGljdCBOb3RpY2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBoYXZlIGFscmVhZHkgYXJjaGl2ZWQgYW5kL29yIGRlbGV0ZWQgYSBzZWN0aW9uIG9uIHRoaXMgcGFnZS4gUGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2UgYW5kIGNvbnRpbnVlIGFyY2hpdmluZyBvciBkZWxldGluZyBvdGhlciBzZWN0aW9ucyB0byBhdm9pZCBlZGl0aW5nIGNvbmZsaWN0cy4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5oKo5bey57uP5Zyo5pys6aG16Z2i5omn6KGM5LqG5a2Y5qGj44CB5Yig6Zmk56ug6IqC55qE5pON5L2c44CC6K+35Yi35paw6aG16Z2i77yM54S25ZCO57un57ut5a2Y5qGj44CB5Yig6Zmk5pys6aG16Z2i55qE5YW25LuW56ug6IqC77yM5Lul6YG/5YWN57yW6L6R5Yay56qB44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOW3sue2k+WcqOacrOmggemdouWft+ihjOS6huWtmOaqlOOAgeWIqumZpOeroOevgOeahOaTjeS9nOOAguiri+WIt+aWsOmggemdou+8jOeEtuW+jOe5vOe6jOWtmOaqlOOAgeWIqumZpOacrOmggemdoueahOWFtuS7lueroOevgO+8jOS7pemBv+WFjee3qOi8r+ihneeqgeOAgicsXG5cdFx0fSksXG5cdFx0RGVsZXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZScsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHREZWxldGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdEZWxldGluZycsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5LitJyxcblx0XHR9KSxcblx0XHREZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWIqumZpCcsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+auteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdCdDcmVhdGUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnY3JlYXRlIGFyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bu656uL5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W7uueri+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0RlbGV0ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5q616JC9Jyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIGVuYWJsZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBlbmFibGVkIG9uIHRoaXMgdGFsayBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acrOiuqOiuuumhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBhbGxvd2VkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgY2Fubm90IHVzZSBFYXN5IEFyY2hpdmUgdG8gYXJjaGl2ZSB0aHJlYWRzIG9uIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo5LiN5Y+v5Lul5Zyo5q2k6aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo5LiN5Y+v5Lul5Zyo5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCBkZXRhaWxzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGVzZSBwYWdlcyBhcmUgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmU6IEFydGljbGUsIEZpbGUsIFRlbXBsYXRlLCBNb2R1bGUsIE1lZGlhV2lraSwgQ2F0ZWdvcnksIFNwZWNpYWwsIEphdmFTY3JpcHQsIENTUywgSlNPTi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6L+Z5Lqb6aG16Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJrmnaHnm67jgIFGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfpgJnkupvpoIHpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8muaineebru+8jEZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHR9KSxcblx0XHQnTm8gQXJjaGl2ZSBMb2NhdGlvbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGNhbiBiZSB1c2VkIG9uIHRoaXMgcGFnZSBpZiBuZWVkZWQuIFRvIGVuYWJsZSBpdCwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6Iul6ZyA6KaB77yM5q2k6aG16Z2i5Y+v5Lul5ZCv55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzor7flnKjpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6Iul6ZyA6KaB77yM5q2k6aCB6Z2i5Y+v5Lul5ZWf55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzoq4vlnKjpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdCdTZWN0aW9uICQxJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTZWN0aW9uICQxJyxcblx0XHRcdHpoOiAn56ysICQxIOeroOiKgicsXG5cdFx0fSksXG5cdFx0JygnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHQnKSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKScsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0Jy4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHRcdCc6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICc6ICcsXG5cdFx0XHR6aDogJ++8micsXG5cdFx0fSksXG5cdFx0UmVmcmVzaDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWZyZXNoIHRoZSBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIt+aWsOW9k+WJjemhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfph43mlrDovInlhaXnlbbliY3poIEnLFxuXHRcdH0pLFxuXHRcdFJlZnJlc2hpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVmcmVzaGluZy4uLicsXG5cdFx0XHRqYTogJ+WGjeiqreOBv+i+vOOBv+OBl+OBvuOBmS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfljbPlsIbliLfmlrDlvZPliY3pobXpnaLigKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Y2z5bCH6YeN5paw6LyJ5YWl55W25YmN6aCB4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIHN0cmluZ1xuXHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufTtcblxuZXhwb3J0IHtzYW5pdGl6ZX07XG4iLCAie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwidmVyc2lvblwiOiBcIjEuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtFZGl0Q29uZmxpY3ROb3RpY2UsIEVuYWJsZWR9IGZyb20gJy4vY29tcG9uZW50cy9yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtBcmNoaXZlQW5kRGVsZXRlU2VjdGlvbkxpbmt9IGZyb20gJy4vY29tcG9uZW50cy9zZWN0aW9uTGluayc7XG5pbXBvcnQge2dldFNlY3Rpb25zfSBmcm9tICcuL3V0aWwvZ2V0U2VjdGlvbic7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gJy4vdXRpbC9yZWZyZXNoUGFnZSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYXBwZW5kRm9vdGVyTm90aWNlID0gKGlubmVyRWxlbWVudDogRWxlbWVudCkgPT4ge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcilbMF0/LnByZXBlbmQoaW5uZXJFbGVtZW50KTtcbn07XG5cbmNvbnN0IGFkZExpbmtzID0gYXN5bmMgKHtcblx0YXJjTGV2ZWwsXG5cdGFyY0xvYyxcblx0c2VjQXJjLFxuXHRzZWNEZWwsXG59OiB7XG5cdGFyY0xldmVsOiBzdHJpbmc7XG5cdGFyY0xvYzogc3RyaW5nIHwgbnVsbDtcblx0c2VjQXJjOiBzdHJpbmc7XG5cdHNlY0RlbDogc3RyaW5nO1xufSkgPT4ge1xuXHRpZiAoIWFyY0xvYykge1xuXHRcdHJldHVybjtcblx0fVxuXHRhcHBlbmRGb290ZXJOb3RpY2UoPEVuYWJsZWQgYXJjTG9jPXthcmNMb2N9IC8+KTtcblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gYXdhaXQgZ2V0U2VjdGlvbnMod2dQYWdlTmFtZSk7XG5cblx0Y29uc3QgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBoJHthcmNMZXZlbH1gKTtcblx0Y29uc3QgaGVhZGxpbmVzID0gW107XG5cdGNvbnN0IGhlYWRpbmdJbmRpY2VzID0gW107XG5cblx0Zm9yIChjb25zdCBoZWFkaW5nIG9mIGhlYWRpbmdzKSB7XG5cdFx0Y29uc3QgaGVhZGxpbmUgPSBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1oZWFkbGluZScpO1xuXHRcdGhlYWRsaW5lc1toZWFkbGluZXMubGVuZ3RoXSA9IGhlYWRsaW5lPy5pZDtcblx0fVxuXG5cdGNvbnN0IHNlY3Rpb25JZFNwYW5zOiBSZWFjdEVsZW1lbnRbXSA9IFtdO1xuXHRsZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0XHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxuXHR9O1xuXG5cdGNvbnN0IG1lc3NhZ2VDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoYCR7d2dQYWdlTmFtZX1fbWVzc2FnZWApO1xuXHRjb25zdCByZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKGAke3dnUGFnZU5hbWV9X3JlZnJlc2hgKTtcblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnNUb0FyY2hpdmUpIHtcblx0XHRpZiAoc2VjdGlvbi5sZXZlbCAhPT0gYXJjTGV2ZWwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChoZWFkbGluZXMuaW5jbHVkZXMoc2VjdGlvbi5hbmNob3IpKSB7XG5cdFx0XHRoZWFkaW5nSW5kaWNlc1toZWFkaW5nSW5kaWNlcy5sZW5ndGhdID0ge1xuXHRcdFx0XHRpbmRleE5vOiBzZWN0aW9uLmluZGV4LFxuXHRcdFx0XHRhbmNob3I6IHNlY3Rpb24uYW5jaG9yLFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRmb3IgKGNvbnN0IHtpbmRleE5vLCBhbmNob3J9IG9mIGhlYWRpbmdJbmRpY2VzKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXF1ZXJ5LXNlbGVjdG9yXG5cdFx0Y29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhbmNob3IpO1xuXHRcdGlmICghaGVhZGxpbmUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhcmVudEhlYWRpbmcgPSBoZWFkbGluZS5wYXJlbnRFbGVtZW50O1xuXHRcdGlmICghcGFyZW50SGVhZGluZykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdFNlY3Rpb24gPSBwYXJlbnRIZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdGlmICghZWRpdFNlY3Rpb24pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlY3Rpb25JRFNwYW4gPSAoXG5cdFx0XHQ8QXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rXG5cdFx0XHRcdHNlY3Rpb25JZFNwYW5zPXtzZWN0aW9uSWRTcGFuc31cblx0XHRcdFx0bWVzc2FnZUNoYW5uZWw9e21lc3NhZ2VDaGFubmVsfVxuXHRcdFx0XHRyZWZyZXNoQ2hhbm5lbD17cmVmcmVzaENoYW5uZWx9XG5cdFx0XHRcdGluZGV4Tm89e2luZGV4Tm99XG5cdFx0XHRcdGFuY2hvcj17YW5jaG9yfVxuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlPXt0b2FzdGlmeUluc3RhbmNlfVxuXHRcdFx0XHRhcmNMb2M9e2FyY0xvY31cblx0XHRcdFx0c2VjQXJjPXtzZWNBcmN9XG5cdFx0XHRcdHNlY0RlbD17c2VjRGVsfVxuXHRcdFx0Lz5cblx0XHQpO1xuXG5cdFx0ZWRpdFNlY3Rpb24ucHJlcGVuZChzZWN0aW9uSURTcGFuKTtcblx0XHRzZWN0aW9uSWRTcGFuc1tzZWN0aW9uSWRTcGFucy5sZW5ndGhdID0gc2VjdGlvbklEU3Bhbjtcblx0fVxuXG5cdG1lc3NhZ2VDaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZXZlbnQpID0+IHtcblx0XHRmb3IgKGNvbnN0IHNwYW4gb2Ygc2VjdGlvbklkU3BhbnMpIHtcblx0XHRcdHNwYW4ucmVtb3ZlKCk7XG5cdFx0fVxuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBldmVudC5kYXRhIGFzIHN0cmluZyxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHRcdH0sXG5cdFx0XHQnaW5mbydcblx0XHQpO1xuXHR9KTtcblxuXHRyZWZyZXNoQ2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKCkgPT4ge1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHRub2RlOiAoXG5cdFx0XHRcdFx0PEVkaXRDb25mbGljdE5vdGljZVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdFx0XHRyZWZyZXNoKCk7XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpbmtzLCBhcHBlbmRGb290ZXJOb3RpY2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgRWFzeUFyY2hpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9ucyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwYWdlOiB0aXRsZSxcblx0XHRwcm9wOiAnc2VjdGlvbnMnLFxuXHR9O1xuXG5cdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdGNvbnN0IHtzZWN0aW9uc30gPSBwYXJzZSBhcyB7XG5cdFx0c2VjdGlvbnM6IHtcblx0XHRcdGxldmVsOiBzdHJpbmc7XG5cdFx0XHRpbmRleDogc3RyaW5nO1xuXHRcdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0fVtdO1xuXHR9O1xuXG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gW107XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0Y29uc3Qge2xldmVsLCBpbmRleCwgYW5jaG9yfSA9IHNlY3Rpb247XG5cblx0XHRpZiAoaW5kZXguc3RhcnRzV2l0aCgnVC0nKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0c2VjdGlvbnNUb0FyY2hpdmVbc2VjdGlvbnNUb0FyY2hpdmUubGVuZ3RoXSA9IHtcblx0XHRcdGxldmVsLFxuXHRcdFx0aW5kZXgsXG5cdFx0XHRhbmNob3IsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBzZWN0aW9uc1RvQXJjaGl2ZTtcbn07XG5cbmNvbnN0IGdldFNlY3Rpb25Db250ZW50ID0gYXN5bmMgKHt0aXRsZSwgc2VjdGlvbn06IHt0aXRsZTogc3RyaW5nOyBzZWN0aW9uOiBzdHJpbmd9KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdHJ2c2VjdGlvbjogc2VjdGlvbixcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdH07XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIChyZXNwb25zZVsncXVlcnknXS5wYWdlc1swXT8ucmV2aXNpb25zPy5bMF0uc2xvdHMubWFpbi5jb250ZW50IGFzIHN0cmluZykgPz8gbnVsbDtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbnMsIGdldFNlY3Rpb25Db250ZW50fTtcbiIsICJpbXBvcnQge2dldFNlY3Rpb25Db250ZW50LCBnZXRTZWN0aW9uc30gZnJvbSAnLi9nZXRTZWN0aW9uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBpc1BhZ2VFeGlzdCA9IGFzeW5jIChhcmNoaXZlVG86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbmZvJyxcblx0XHR0aXRsZXM6IGFyY2hpdmVUbyxcblx0fTtcblxuXHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdGlmIChxdWVyeS5wYWdlc1swXT8ubWlzc2luZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgaXNTZWN0aW9uRXhpc3QgPSBhc3luYyAoe2luZGV4LCBhbmNob3J9OiB7aW5kZXg6IHN0cmluZzsgYW5jaG9yOiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnMgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRsZXQgaXNFeGlzdCA9IGZhbHNlO1xuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRpZiAoaW5kZXggPT09IHNlY3Rpb24uaW5kZXggJiYgYW5jaG9yID09PSBzZWN0aW9uLmFuY2hvcikge1xuXHRcdFx0aXNFeGlzdCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBpc0V4aXN0O1xufTtcblxuY29uc3QgcmVtb3ZlU2VjdGlvbiA9IGFzeW5jICh7aW5kZXgsIGFuY2hvciwgc3VtbWFyeX06IHtpbmRleDogc3RyaW5nOyBhbmNob3I6IHN0cmluZzsgc3VtbWFyeT86IHN0cmluZ30pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpc0V4aXN0ID0gYXdhaXQgaXNTZWN0aW9uRXhpc3Qoe2luZGV4LCBhbmNob3J9KTtcblxuXHRpZiAoaXNFeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh7dGl0bGU6IHdnUGFnZU5hbWUsIHNlY3Rpb246IGluZGV4fSk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCBhcGkuZWRpdCh3Z1BhZ2VOYW1lLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlY3Rpb246IGluZGV4LFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRzdW1tYXJ5OiBzdW1tYXJ5ID8/IGdldE1lc3NhZ2UoJ0RlbGV0ZSBzdW1tYXJ5JyksXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcbn07XG5cbmNvbnN0IGFyY2hpdmVTZWN0aW9uID0gYXN5bmMgKHtpbmRleCwgYW5jaG9yLCBhcmNoaXZlVG99OiB7aW5kZXg6IHN0cmluZzsgYW5jaG9yOiBzdHJpbmc7IGFyY2hpdmVUbzogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlzRXhpc3QgPSBhd2FpdCBpc1NlY3Rpb25FeGlzdCh7aW5kZXgsIGFuY2hvcn0pO1xuXG5cdGlmIChpc0V4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHt0aXRsZTogd2dQYWdlTmFtZSwgc2VjdGlvbjogaW5kZXh9KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBhZ2VFeGlzdCA9IGF3YWl0IGlzUGFnZUV4aXN0KGFyY2hpdmVUbyk7XG5cdGlmICghcGFnZUV4aXN0KSB7XG5cdFx0YXdhaXQgYXBpLmNyZWF0ZShcblx0XHRcdGFyY2hpdmVUbyxcblx0XHRcdHtcblx0XHRcdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnQ3JlYXRlIHN1bW1hcnknKSxcblx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0J3t7dGFsa2FyY2hpdmV9fSdcblx0XHQpO1xuXHR9XG5cblx0YXdhaXQgYXBpLmVkaXQoYXJjaGl2ZVRvLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFwcGVuZHRleHQ6IGBcXG5cXG4ke2NvbnRlbnR9YCxcblx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG5cblx0YXdhaXQgcmVtb3ZlU2VjdGlvbih7aW5kZXgsIGFuY2hvciwgc3VtbWFyeTogZ2V0TWVzc2FnZSgnQXJjaGl2ZSBzdW1tYXJ5Jyl9KTtcbn07XG5cbmV4cG9ydCB7aXNTZWN0aW9uRXhpc3QsIGFyY2hpdmVTZWN0aW9uLCByZW1vdmVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHt3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IHJlZnJlc2ggPSAoe1xuXHR0YXJnZXRQYWdlLFxuXHR0b2FzdGlmeUluc3RhbmNlLFxufToge3RhcmdldFBhZ2U/OiBzdHJpbmc7IHRvYXN0aWZ5SW5zdGFuY2U/OiBUb2FzdGlmeUluc3RhbmNlfSA9IHt9KTogdm9pZCA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgfHw9IHtcblx0XHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxuXHR9O1xuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUmVmcmVzaGluZycpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRsb2NhdGlvbi5yZXBsYWNlKFxuXHRcdG13LnV0aWwuZ2V0VXJsKHdnU2NyaXB0LCB7XG5cdFx0XHR0aXRsZTogdGFyZ2V0UGFnZSA/PyB3Z1BhZ2VOYW1lLFxuXHRcdH0pXG5cdCk7XG59O1xuXG5leHBvcnQge3JlZnJlc2h9O1xuIiwgImNvbnN0IHJlcGxhY2VDaGlsZCA9IChlbGVtZW50OiBFbGVtZW50LCBuZXdDaGlsZDogRWxlbWVudCk6IHZvaWQgPT4ge1xuXHR3aGlsZSAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRlbGVtZW50LmZpcnN0Q2hpbGQ/LnJlbW92ZSgpO1xuXHR9XG5cdGVsZW1lbnQuYXBwZW5kKG5ld0NoaWxkKTtcbn07XG5cbmV4cG9ydCB7cmVwbGFjZUNoaWxkfTtcbiIsICJpbXBvcnQge2FyY2hpdmVTZWN0aW9uLCByZW1vdmVTZWN0aW9ufSBmcm9tICcuL2VkaXRTZWN0aW9uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gJy4vcmVmcmVzaFBhZ2UnO1xuaW1wb3J0IHtyZXBsYWNlQ2hpbGR9IGZyb20gJy4vcmVwbGFjZUNoaWxkJztcbmltcG9ydCB7c3BhbldyYXB9IGZyb20gJy4uL2NvbXBvbmVudHMvcmVhY3QnO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGFyY2hpdmVPbkNsaWNrID0gYXN5bmMgKFxuXHRldmVudDogRXZlbnQsXG5cdHtcblx0XHRzZWN0aW9uSWRTcGFucyxcblx0XHRtZXNzYWdlQ2hhbm5lbCxcblx0XHRyZWZyZXNoQ2hhbm5lbCxcblx0XHRpbmRleE5vLFxuXHRcdGFuY2hvcixcblx0XHRhcmNoaXZlVG8sXG5cdFx0dG9hc3RpZnlJbnN0YW5jZSxcblx0fToge1xuXHRcdHNlY3Rpb25JZFNwYW5zOiBFbGVtZW50W107XG5cdFx0bWVzc2FnZUNoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdFx0cmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdFx0aW5kZXhObzogc3RyaW5nO1xuXHRcdGFuY2hvcjogc3RyaW5nO1xuXHRcdGFyY2hpdmVUbzogc3RyaW5nO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG5cdH1cbikgPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBwYXJlbnRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LnBhcmVudEVsZW1lbnQ7XG5cdGlmICghcGFyZW50RWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHJlcGxhY2VDaGlsZChwYXJlbnRFbGVtZW50LCBzcGFuV3JhcChnZXRNZXNzYWdlKCdBcmNoaXZpbmcnKSkpO1xuXG5cdGZvciAoY29uc3Qgc3BhbiBvZiBzZWN0aW9uSWRTcGFucykge1xuXHRcdHNwYW4ucmVtb3ZlKCk7XG5cdH1cblxuXHRjb25zdCBtZXNzYWdlMSA9IGdldE1lc3NhZ2UoJ0FyY2hpdmluZycpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UxKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlIHx8PSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG1lc3NhZ2UxLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRhd2FpdCBhcmNoaXZlU2VjdGlvbih7aW5kZXg6IGluZGV4Tm8sIGFuY2hvciwgYXJjaGl2ZVRvfSk7XG5cblx0cmVwbGFjZUNoaWxkKHBhcmVudEVsZW1lbnQsIHNwYW5XcmFwKGdldE1lc3NhZ2UoJ0FyY2hpdmVkJykpKTtcblxuXHRjb25zdCBtZXNzYWdlMiA9IGdldE1lc3NhZ2UoJ0FyY2hpdmVkJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcblx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UobWVzc2FnZTIpO1xuXG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBtZXNzYWdlMixcblx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bWVzc2FnZUNoYW5uZWwuY2xvc2UoKTtcblxuXHRyZWZyZXNoQ2hhbm5lbC5wb3N0TWVzc2FnZSgnUmVmcmVzaCcpO1xuXHRyZWZyZXNoKHt0b2FzdGlmeUluc3RhbmNlfSk7XG59O1xuXG5jb25zdCByZW1vdmVPbkNsaWNrID0gYXN5bmMgKFxuXHRldmVudDogRXZlbnQsXG5cdHtcblx0XHRzZWN0aW9uSWRTcGFucyxcblx0XHRtZXNzYWdlQ2hhbm5lbCxcblx0XHRyZWZyZXNoQ2hhbm5lbCxcblx0XHRpbmRleE5vLFxuXHRcdGFuY2hvcixcblx0XHR0b2FzdGlmeUluc3RhbmNlLFxuXHR9OiB7XG5cdFx0c2VjdGlvbklkU3BhbnM6IEVsZW1lbnRbXTtcblx0XHRtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0XHRyZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0XHRpbmRleE5vOiBzdHJpbmc7XG5cdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcblx0fVxuKSA9PiB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IHBhcmVudEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8ucGFyZW50RWxlbWVudDtcblx0aWYgKCFwYXJlbnRFbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cmVwbGFjZUNoaWxkKHBhcmVudEVsZW1lbnQsIHNwYW5XcmFwKGdldE1lc3NhZ2UoJ0RlbGV0aW5nJykpKTtcblxuXHRmb3IgKGNvbnN0IHNwYW4gb2Ygc2VjdGlvbklkU3BhbnMpIHtcblx0XHRzcGFuLnJlbW92ZSgpO1xuXHR9XG5cblx0Y29uc3QgbWVzc2FnZTEgPSBnZXRNZXNzYWdlKCdEZWxldGluZycpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UxKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlIHx8PSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG1lc3NhZ2UxLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRhd2FpdCByZW1vdmVTZWN0aW9uKHtpbmRleDogaW5kZXhObywgYW5jaG9yfSk7XG5cblx0cmVwbGFjZUNoaWxkKHBhcmVudEVsZW1lbnQsIHNwYW5XcmFwKGdldE1lc3NhZ2UoJ0RlbGV0ZWQnKSkpO1xuXG5cdGNvbnN0IG1lc3NhZ2UyID0gZ2V0TWVzc2FnZSgnRGVsZXRlZCcpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UyKTtcblxuXHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogbWVzc2FnZTIsXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdG1lc3NhZ2VDaGFubmVsLmNsb3NlKCk7XG5cblx0cmVmcmVzaENoYW5uZWwucG9zdE1lc3NhZ2UoJ1JlZnJlc2gnKTtcblx0cmVmcmVzaCh7dG9hc3RpZnlJbnN0YW5jZX0pO1xufTtcblxuZXhwb3J0IHthcmNoaXZlT25DbGljaywgcmVtb3ZlT25DbGlja307XG4iLCAiaW1wb3J0IHtPbkNsaWNrLCBQaXBlLCBTZWN0aW9uSUR9IGZyb20gJy4vcmVhY3QnO1xuaW1wb3J0IHthcmNoaXZlT25DbGljaywgcmVtb3ZlT25DbGlja30gZnJvbSAnLi4vdXRpbC9vbkNsaWNrJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmludGVyZmFjZSBBcmNoaXZlU2VjdGlvbkxpbmtQcm9wcyB7XG5cdHNlY3Rpb25JZFNwYW5zOiBFbGVtZW50W107XG5cdG1lc3NhZ2VDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRyZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0aW5kZXhObzogc3RyaW5nO1xuXHRhbmNob3I6IHN0cmluZztcblx0dG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZTtcblx0YXJjaGl2ZVRvOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFyY2hpdmVTZWN0aW9uTGluayA9ICh7XG5cdHNlY3Rpb25JZFNwYW5zLFxuXHRtZXNzYWdlQ2hhbm5lbCxcblx0cmVmcmVzaENoYW5uZWwsXG5cdGluZGV4Tm8sXG5cdGFuY2hvcixcblx0YXJjaGl2ZVRvLFxuXHR0b2FzdGlmeUluc3RhbmNlLFxufTogQXJjaGl2ZVNlY3Rpb25MaW5rUHJvcHMpID0+IChcblx0PE9uQ2xpY2tcblx0XHRjbGFzc05hbWU9eydhcmNoaXZlJ31cblx0XHRvbkNsaWNrPXsoZXZlbnQ6IEV2ZW50KSA9PiB7XG5cdFx0XHR2b2lkIGFyY2hpdmVPbkNsaWNrKGV2ZW50LCB7XG5cdFx0XHRcdHNlY3Rpb25JZFNwYW5zLFxuXHRcdFx0XHRtZXNzYWdlQ2hhbm5lbCxcblx0XHRcdFx0cmVmcmVzaENoYW5uZWwsXG5cdFx0XHRcdGluZGV4Tm8sXG5cdFx0XHRcdGFuY2hvcixcblx0XHRcdFx0YXJjaGl2ZVRvLFxuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLFxuXHRcdFx0fSk7XG5cdFx0fX1cblx0XHR0ZXh0Q29udGVudD17Z2V0TWVzc2FnZSgnQXJjaGl2ZScpfVxuXHQvPlxuKTtcblxuaW50ZXJmYWNlIFJlbW92ZVNlY3Rpb25MaW5rUHJvcHMge1xuXHRzZWN0aW9uSWRTcGFuczogRWxlbWVudFtdO1xuXHRtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0cmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdGluZGV4Tm86IHN0cmluZztcblx0YW5jaG9yOiBzdHJpbmc7XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG59XG5cbmNvbnN0IFJlbW92ZVNlY3Rpb25MaW5rID0gKHtcblx0c2VjdGlvbklkU3BhbnMsXG5cdG1lc3NhZ2VDaGFubmVsLFxuXHRyZWZyZXNoQ2hhbm5lbCxcblx0aW5kZXhObyxcblx0YW5jaG9yLFxuXHR0b2FzdGlmeUluc3RhbmNlLFxufTogUmVtb3ZlU2VjdGlvbkxpbmtQcm9wcykgPT4gKFxuXHQ8T25DbGlja1xuXHRcdGNsYXNzTmFtZT17J2RlbGV0ZSd9XG5cdFx0dGV4dENvbnRlbnQ9e2dldE1lc3NhZ2UoJ0RlbGV0ZScpfVxuXHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0dm9pZCByZW1vdmVPbkNsaWNrKGV2ZW50LCB7XG5cdFx0XHRcdHNlY3Rpb25JZFNwYW5zLFxuXHRcdFx0XHRtZXNzYWdlQ2hhbm5lbCxcblx0XHRcdFx0cmVmcmVzaENoYW5uZWwsXG5cdFx0XHRcdGluZGV4Tm8sXG5cdFx0XHRcdGFuY2hvcixcblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSxcblx0XHRcdH0pO1xuXHRcdH19XG5cdC8+XG4pO1xuXG5pbnRlcmZhY2UgQXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rUHJvcHMge1xuXHRzZWN0aW9uSWRTcGFuczogRWxlbWVudFtdO1xuXHRtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0cmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdGluZGV4Tm86IHN0cmluZztcblx0YW5jaG9yOiBzdHJpbmc7XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG5cdHNlY0FyYzogc3RyaW5nO1xuXHRzZWNEZWw6IHN0cmluZztcblx0YXJjTG9jOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGluayA9ICh7XG5cdHNlY3Rpb25JZFNwYW5zLFxuXHRtZXNzYWdlQ2hhbm5lbCxcblx0cmVmcmVzaENoYW5uZWwsXG5cdGluZGV4Tm8sXG5cdGFuY2hvcixcblx0dG9hc3RpZnlJbnN0YW5jZSxcblx0c2VjQXJjLFxuXHRzZWNEZWwsXG5cdGFyY0xvYyxcbn06IEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGlua1Byb3BzKSA9PiAoXG5cdDxTZWN0aW9uSUQ+XG5cdFx0e3NlY0FyYyA9PT0gJzEnID8gKFxuXHRcdFx0PEFyY2hpdmVTZWN0aW9uTGlua1xuXHRcdFx0XHRzZWN0aW9uSWRTcGFucz17c2VjdGlvbklkU3BhbnN9XG5cdFx0XHRcdG1lc3NhZ2VDaGFubmVsPXttZXNzYWdlQ2hhbm5lbH1cblx0XHRcdFx0cmVmcmVzaENoYW5uZWw9e3JlZnJlc2hDaGFubmVsfVxuXHRcdFx0XHRpbmRleE5vPXtpbmRleE5vfVxuXHRcdFx0XHRhbmNob3I9e2FuY2hvcn1cblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZT17dG9hc3RpZnlJbnN0YW5jZX1cblx0XHRcdFx0YXJjaGl2ZVRvPXthcmNMb2N9XG5cdFx0XHQvPlxuXHRcdCkgOiAoXG5cdFx0XHQ8PjwvPlxuXHRcdCl9XG5cdFx0e3NlY0FyYyA9PT0gJzEnICYmIHNlY0RlbCA9PT0gJzEnID8gPFBpcGUgLz4gOiA8PjwvPn1cblx0XHR7c2VjRGVsID09PSAnMScgPyAoXG5cdFx0XHQ8UmVtb3ZlU2VjdGlvbkxpbmtcblx0XHRcdFx0c2VjdGlvbklkU3BhbnM9e3NlY3Rpb25JZFNwYW5zfVxuXHRcdFx0XHRtZXNzYWdlQ2hhbm5lbD17bWVzc2FnZUNoYW5uZWx9XG5cdFx0XHRcdHJlZnJlc2hDaGFubmVsPXtyZWZyZXNoQ2hhbm5lbH1cblx0XHRcdFx0aW5kZXhObz17aW5kZXhOb31cblx0XHRcdFx0YW5jaG9yPXthbmNob3J9XG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2U9e3RvYXN0aWZ5SW5zdGFuY2V9XG5cdFx0XHQvPlxuXHRcdCkgOiAoXG5cdFx0XHQ8PjwvPlxuXHRcdCl9XG5cdDwvU2VjdGlvbklEPlxuKTtcblxuZXhwb3J0IHtBcmNoaXZlU2VjdGlvbkxpbmssIFJlbW92ZVNlY3Rpb25MaW5rLCBBcmNoaXZlQW5kRGVsZXRlU2VjdGlvbkxpbmt9O1xuIiwgImNvbnN0IGlmQXJjTG9jTm90QWxsb3dlZCA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNvdXJjZVRpdGxlID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpO1xuXHRjb25zdCBhcmNMb2NUaXRsZSA9IG5ldyBtdy5UaXRsZShhcmNMb2MpO1xuXG5cdGNvbnN0IGFyY0xvY05hbWVzcGFjZUlkID0gYXJjTG9jVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3QgYXJjTG9jUGFnZU5hbWUgPSBhcmNMb2NUaXRsZS5nZXRNYWluKCk7XG5cdGNvbnN0IHNvdXJjZU5hbWVzcGFjZUlkID0gc291cmNlVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3Qgc291cmNlUGFnZU5hbWUgPSBzb3VyY2VUaXRsZS5nZXRNYWluKCk7XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoYXJjTG9jTmFtZXNwYWNlSWQgPT09IHNvdXJjZU5hbWVzcGFjZUlkICYmIGFyY0xvY1BhZ2VOYW1lID09PSBzb3VyY2VQYWdlTmFtZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNJbkJsYWNrbGlzdCA9ICgpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGJsYWNrTGlzdFJlZ2V4QXJyID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja0xpc3RSZWdleEFycikge1xuXHRcdGlmIChlbGVtZW50LnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzTm90QWxsb3dlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1JlbGV2YW50VXNlck5hbWUsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICgod2dOYW1lc3BhY2VOdW1iZXIgPT09IDIgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDMpICYmICEod2dSZWxldmFudFVzZXJOYW1lID09PSB3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNOb3RTdXBwb3J0ZWQgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0lzTWFpblBhZ2UsIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z0N1clJldmlzaW9uSWQsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCB8fCB3Z0N1clJldmlzaW9uSWQgLSB3Z1JldmlzaW9uSWQgIT09IDApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCB8fCB3Z0lzTWFpblBhZ2UpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHtkYXRhc2V0fSA9IHNldHRpbmdzO1xuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gZGF0YXNldDtcblx0cmV0dXJuIHtcblx0XHRhcmNMZXZlbDogYXJjTGV2ZWwgPz8gJzInLFxuXHRcdGFyY0xvYzogYXJjTG9jID8/IG51bGwsXG5cdFx0c2VjQXJjOiBzZWNBcmMgPz8gJzEnLFxuXHRcdHNlY0RlbDogc2VjRGVsID8/ICcxJyxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2V0U2V0dGluZ3MsIGlmQXJjTG9jTm90QWxsb3dlZCwgaXNJbkJsYWNrbGlzdCwgaXNOb3RBbGxvd2VkLCBpc05vdFN1cHBvcnRlZH07XG4iLCAiaW1wb3J0IHtBcmNMb2NOb3RBbGxvd2VkLCBJbkJsYWNrTGlzdCwgTm9BcmNMb2MsIE5vdEFsbG93ZWR9IGZyb20gJy4vbW9kdWxlcy9jb21wb25lbnRzL3JlYWN0JztcbmltcG9ydCB7YWRkTGlua3MsIGFwcGVuZEZvb3Rlck5vdGljZX0gZnJvbSAnLi9tb2R1bGVzL2FkZExpbmtzJztcbmltcG9ydCB7Z2V0U2V0dGluZ3MsIGlmQXJjTG9jTm90QWxsb3dlZCwgaXNJbkJsYWNrbGlzdCwgaXNOb3RBbGxvd2VkLCBpc05vdFN1cHBvcnRlZH0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2V0U2V0dGluZ3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG4oZnVuY3Rpb24gZWFzeUFyY2hpdmUoKSB7XG5cdGNvbnN0IG5vdFN1cHBvcnRlZCA9IGlzTm90U3VwcG9ydGVkKCk7XG5cdGlmIChub3RTdXBwb3J0ZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpbkJsYWNrbGlzdCA9IGlzSW5CbGFja2xpc3QoKTtcblx0aWYgKGluQmxhY2tsaXN0KSB7XG5cdFx0YXBwZW5kRm9vdGVyTm90aWNlKDxJbkJsYWNrTGlzdCAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgbm90QWxsb3dlZCA9IGlzTm90QWxsb3dlZCgpO1xuXHRpZiAobm90QWxsb3dlZCkge1xuXHRcdGFwcGVuZEZvb3Rlck5vdGljZSg8Tm90QWxsb3dlZCAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpO1xuXHRpZiAoIXNldHRpbmdzKSB7XG5cdFx0YXBwZW5kRm9vdGVyTm90aWNlKDxOb0FyY0xvYyAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge2FyY0xvY30gPSBzZXR0aW5ncztcblx0aWYgKCFhcmNMb2MpIHtcblx0XHRhcHBlbmRGb290ZXJOb3RpY2UoPE5vQXJjTG9jIC8+KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBhcmNMb2NOb3RBbGxvd2VkID0gaWZBcmNMb2NOb3RBbGxvd2VkKGFyY0xvYyk7XG5cdGlmIChhcmNMb2NOb3RBbGxvd2VkKSB7XG5cdFx0YXBwZW5kRm9vdGVyTm90aWNlKDxBcmNMb2NOb3RBbGxvd2VkIGFyY0xvYz17YXJjTG9jfSAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBhZGRMaW5rcyhzZXR0aW5ncyk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsS0FBQyxTQUFTLFFBQVE7QUFDZCxVQUFJLFdBQVcsQ0FBQztBQUVoQixlQUFTQSxrQkFBaUIsU0FBUztBQUMvQixZQUFJLFFBQVE7QUFDWixrQkFBVSxPQUFPLE9BQU87QUFFeEIsWUFBSSxLQUFLLHVCQUF1QixVQUFVO0FBRTFDLGlCQUFTLEVBQUUsSUFBSSxTQUFTLEVBQUUsS0FBSyxDQUFDO0FBQ2hDLGlCQUFTLEVBQUUsRUFBRSxLQUFLLElBQUk7QUFFdEIsYUFBSyxRQUFRO0FBQ2IsYUFBSyxNQUFNO0FBQ1gsYUFBSyxVQUFVO0FBQ2YsYUFBSyxNQUFNLElBQUksZUFBZTtBQUM5QixhQUFLLElBQUksTUFBTSxNQUFNO0FBQ3JCLGFBQUssSUFBSSxNQUFNLE1BQU07QUFFckIsZUFBTyxpQkFBaUIsV0FBVyxTQUFTLEdBQUc7QUFDM0MsY0FBSSxFQUFFLGdCQUFnQixPQUFPLGFBQWM7QUFDM0MsY0FBSSxFQUFFLFlBQVksUUFBUSxFQUFFLGFBQWEsR0FBSTtBQUM3QyxjQUFJLEVBQUUsSUFBSSxVQUFVLEdBQUcsR0FBRyxNQUFNLE1BQU0sR0FBSTtBQUMxQyxjQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUUsUUFBUTtBQUNoQyxnQkFBTSxJQUFJLE1BQU0sWUFBWSxJQUFJO0FBQUEsUUFDcEMsQ0FBQztBQUFBLE1BQ0w7QUFFQSxNQUFBQSxrQkFBaUIsWUFBWTtBQUFB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SXdNO0FBQ2pCLE1BQUksQ0FBQ3hNLFFBQVE7QUFDWmtKLHVCQUFtQndELG1DQUFBdk4sUUFBQUMsY0FBQ2EsVUFBQSxJQUFTLENBQUU7QUFDL0I7RUFDRDtBQUVBLFFBQU04TSxtQkFBbUIvQixtQkFBbUJoTCxNQUFNO0FBQ2xELE1BQUkrTSxrQkFBa0I7QUFDckI3RCx1QkFBbUJ3RCxtQ0FBQXZOLFFBQUFDLGNBQUNXLGtCQUFBO01BQWlCQztJQUFBLENBQWdCLENBQUU7QUFDdkQ7RUFDRDtBQUVBLE9BQUt1SixTQUFTaUQsUUFBUTtBQUN2QixHQUFHOyIsCiAgIm5hbWVzIjogWyJCcm9hZGNhc3RDaGFubmVsIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiZm9vdGVyTm90aWNlIiwgInNlY3Rpb25JZFNwYW4iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFyY2hpdmUiLCAibG9jYWxpemUiLCAiZW4iLCAiQXJjaGl2aW5nIiwgIkFyY2hpdmVkIiwgIkRlbGV0ZSIsICJEZWxldGluZyIsICJEZWxldGVkIiwgInpoIiwgIlJlZnJlc2giLCAiUmVmcmVzaGluZyIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic2FuaXRpemUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiRm9vdGVyTm90aWNlIiwgImlkIiwgImNoaWxkcmVuIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIkluQmxhY2tMaXN0IiwgIk5vdEFsbG93ZWQiLCAiQXJjTG9jTm90QWxsb3dlZCIsICJhcmNMb2MiLCAiTm9BcmNMb2MiLCAiRW5hYmxlZCIsICJ0aXRsZSIsICJocmVmIiwgImNvbmNhdCIsICJPbkNsaWNrIiwgInRleHRDb250ZW50IiwgIm9uQ2xpY2siLCAiU2VjdGlvbklEIiwgIlBpcGUiLCAiRWRpdENvbmZsaWN0Tm90aWNlIiwgInNwYW5XcmFwIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRTZWN0aW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicGFnZSIsICJwcm9wIiwgInBhcnNlIiwgInNlY3Rpb25zIiwgInNlY3Rpb25zVG9BcmNoaXZlIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInNlY3Rpb24iLCAidmFsdWUiLCAibGV2ZWwiLCAiaW5kZXgiLCAiYW5jaG9yIiwgInN0YXJ0c1dpdGgiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldFNlY3Rpb25Db250ZW50IiwgIl9yZWYyIiwgIl9yZXNwb25zZSRxdWVyeSRwYWdlcyIsICJfcmVzcG9uc2UkcXVlcnkkcGFnZXMyIiwgInJ2cHJvcCIsICJ0aXRsZXMiLCAicnZzZWN0aW9uIiwgInJ2c2xvdHMiLCAicmVzcG9uc2UiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAiY29udGVudCIsICJfeDIiLCAiaXNQYWdlRXhpc3QiLCAiX3JlZjMiLCAiYXJjaGl2ZVRvIiwgIl9xdWVyeSRwYWdlcyQiLCAicXVlcnkiLCAibWlzc2luZyIsICJfeDMiLCAiaXNTZWN0aW9uRXhpc3QiLCAiX3JlZjQiLCAid2dQYWdlTmFtZSIsICJpc0V4aXN0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIl94NCIsICJyZW1vdmVTZWN0aW9uIiwgIl9yZWY1IiwgInN1bW1hcnkiLCAiZWRpdCIsICJ0ZXh0IiwgIm1pbm9yIiwgIl94NSIsICJhcmNoaXZlU2VjdGlvbiIsICJfcmVmNiIsICJwYWdlRXhpc3QiLCAiY3JlYXRlIiwgImFwcGVuZHRleHQiLCAiX3g2IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJ3Z1NjcmlwdCIsICJyZWZyZXNoIiwgInRhcmdldFBhZ2UiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAidG9hc3RpZnkiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iLCAidXRpbCIsICJnZXRVcmwiLCAicmVwbGFjZUNoaWxkIiwgImVsZW1lbnQiLCAibmV3Q2hpbGQiLCAiaGFzQ2hpbGROb2RlcyIsICJfZWxlbWVudCRmaXJzdENoaWxkIiwgImZpcnN0Q2hpbGQiLCAicmVtb3ZlIiwgImFwcGVuZCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiYXJjaGl2ZU9uQ2xpY2siLCAiX3JlZjciLCAiZXZlbnQiLCAic2VjdGlvbklkU3BhbnMiLCAibWVzc2FnZUNoYW5uZWwiLCAicmVmcmVzaENoYW5uZWwiLCAiaW5kZXhObyIsICJfZXZlbnQkdGFyZ2V0IiwgInByZXZlbnREZWZhdWx0IiwgInBhcmVudEVsZW1lbnQiLCAidGFyZ2V0IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInNwYW4iLCAibWVzc2FnZTEiLCAicG9zdE1lc3NhZ2UiLCAiY2xvc2UiLCAibWVzc2FnZTIiLCAiX3g3IiwgIl94OCIsICJyZW1vdmVPbkNsaWNrIiwgIl9yZWY4IiwgIl9ldmVudCR0YXJnZXQyIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl94OSIsICJfeDEwIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJBcmNoaXZlU2VjdGlvbkxpbmsiLCAiUmVtb3ZlU2VjdGlvbkxpbmsiLCAiQXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rIiwgInNlY0FyYyIsICJzZWNEZWwiLCAiaW1wb3J0X2V4dF9nYWRnZXQ4IiwgImFwcGVuZEZvb3Rlck5vdGljZSIsICJpbm5lckVsZW1lbnQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicHJlcGVuZCIsICJhZGRMaW5rcyIsICJfcmVmOSIsICJhcmNMZXZlbCIsICJoZWFkaW5ncyIsICJoZWFkbGluZXMiLCAiaGVhZGluZ0luZGljZXMiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiaGVhZGluZyIsICJoZWFkbGluZSIsICJCcm9hZGNhc3RDaGFubmVsIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgIl9pIiwgIl9oZWFkaW5nSW5kaWNlcyIsICJnZXRFbGVtZW50QnlJZCIsICJwYXJlbnRIZWFkaW5nIiwgImVkaXRTZWN0aW9uIiwgInNlY3Rpb25JRFNwYW4iLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJfaTIiLCAiX3NlY3Rpb25JZFNwYW5zIiwgImRhdGEiLCAibm9kZSIsICJfeDExIiwgImlmQXJjTG9jTm90QWxsb3dlZCIsICJzb3VyY2VUaXRsZSIsICJUaXRsZSIsICJhcmNMb2NUaXRsZSIsICJhcmNMb2NOYW1lc3BhY2VJZCIsICJnZXROYW1lc3BhY2VJZCIsICJhcmNMb2NQYWdlTmFtZSIsICJnZXRNYWluIiwgInNvdXJjZU5hbWVzcGFjZUlkIiwgInNvdXJjZVBhZ2VOYW1lIiwgImlzSW5CbGFja2xpc3QiLCAiYmxhY2tMaXN0UmVnZXhBcnIiLCAiX2kzIiwgIl9ibGFja0xpc3RSZWdleEFyciIsICJ0ZXN0IiwgImlzTm90QWxsb3dlZCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1JlbGV2YW50VXNlck5hbWUiLCAid2dVc2VyTmFtZSIsICJpc05vdFN1cHBvcnRlZCIsICJ3Z0lzTWFpblBhZ2UiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJnZXRTZXR0aW5ncyIsICJzZXR0aW5ncyIsICJkYXRhc2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0OSIsICJlYXN5QXJjaGl2ZSIsICJub3RTdXBwb3J0ZWQiLCAiaW5CbGFja2xpc3QiLCAibm90QWxsb3dlZCIsICJhcmNMb2NOb3RBbGxvd2VkIl0KfQo=
