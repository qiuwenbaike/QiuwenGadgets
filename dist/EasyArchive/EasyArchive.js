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
//! src/EasyArchive/modules/util/sanitize.ts
var sanitize = (string) => {
  return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
};
//! src/EasyArchive/modules/util/react.tsx
var FooterNotice = ({
  id
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, mw.config.get("skin") === "citizen" ? /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
  id,
  className: [footerNotice, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
}) : ["vector", "vector-2022", "gongbi"].includes(mw.config.get("skin")) || document.querySelector("ul#footer-info") ? /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
  id,
  className: [footerNotice, "noprint"]
}) : /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  id,
  className: [footerNotice, "noprint"]
}));
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
  onClick,
  textContent
});
var SectionID = ({
  className
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  className: [className, sectionIdSpan]
});
var Pipe = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  className: "mw-editsection-divider",
  textContent: "|"
});
var EditConflictNotice = ({
  onClick
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, getMessage("Edit Confilict Notice"), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  onClick
}, getMessage("Refresh")));
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
//! src/EasyArchive/modules/util/sectionLink.tsx
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
//! src/EasyArchive/modules/util/replaceChild.ts
var replaceChild = (element, newChild) => {
  while (element.hasChildNodes()) {
    var _element$firstChild;
    (_element$firstChild = element.firstChild) === null || _element$firstChild === void 0 || _element$firstChild.remove();
  }
  element.append(newChild);
};
//! src/EasyArchive/modules/util/sectionLink.tsx
var import_ext_gadget6 = require("ext.gadget.Toastify");
var archiveOnClick = /* @__PURE__ */ function() {
  var _ref7 = _asyncToGenerator(function* (event, {
    sectionIdSpans,
    messageChannel,
    refreshChannel
  }, {
    indexNo,
    anchor,
    archiveTo,
    toast
  }) {
    var _event$target;
    event.preventDefault();
    const parentElement = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.parentElement;
    if (!parentElement) {
      return;
    }
    replaceChild(parentElement, /* @__PURE__ */ import_ext_gadget5.default.createElement("span", null, getMessage("Archiving")));
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
    yield archiveSection({
      index: indexNo,
      anchor,
      archiveTo
    });
    replaceChild(parentElement, /* @__PURE__ */ import_ext_gadget5.default.createElement("span", null, getMessage("Archived")));
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
  return function archiveOnClick2(_x7, _x8, _x9) {
    return _ref7.apply(this, arguments);
  };
}();
var removeOnClick = /* @__PURE__ */ function() {
  var _ref8 = _asyncToGenerator(function* (event, {
    sectionIdSpans,
    messageChannel,
    refreshChannel
  }, {
    indexNo,
    anchor,
    toast
  }) {
    var _event$target2;
    event.preventDefault();
    const parentElement = (_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.parentElement;
    if (!parentElement) {
      return;
    }
    replaceChild(parentElement, /* @__PURE__ */ import_ext_gadget5.default.createElement("span", null, getMessage("Deleting")));
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
    yield removeSection({
      index: indexNo,
      anchor
    });
    replaceChild(parentElement, /* @__PURE__ */ import_ext_gadget5.default.createElement("span", null, getMessage("Deleted")));
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
  return function removeOnClick2(_x10, _x11, _x12) {
    return _ref8.apply(this, arguments);
  };
}();
var ArchiveSectionLink = ({
  sectionIdSpans,
  messageChannel,
  refreshChannel,
  indexNo,
  anchor,
  archiveTo,
  toast
}) => /* @__PURE__ */ import_ext_gadget5.default.createElement(OnClick, {
  className: "archive",
  onClick: (event) => {
    void archiveOnClick(event, {
      sectionIdSpans,
      messageChannel,
      refreshChannel
    }, {
      indexNo,
      anchor,
      archiveTo,
      toast
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
  toast
}) => /* @__PURE__ */ import_ext_gadget5.default.createElement(OnClick, {
  className: "delete",
  textContent: getMessage("Delete"),
  onClick: (event) => {
    void removeOnClick(event, {
      sectionIdSpans,
      messageChannel,
      refreshChannel
    }, {
      indexNo,
      anchor,
      toast
    });
  }
});
var ArchiveAndDeleteSectionLink = ({
  sectionIdSpans,
  messageChannel,
  refreshChannel,
  index,
  id,
  toastifyInstance,
  secArc,
  secDel,
  arcLoc
}) => /* @__PURE__ */ import_ext_gadget5.default.createElement(SectionID, null, secArc === "1" ? /* @__PURE__ */ import_ext_gadget5.default.createElement(ArchiveSectionLink, {
  sectionIdSpans,
  messageChannel,
  refreshChannel,
  indexNo: index,
  anchor: id,
  toast: toastifyInstance,
  archiveTo: arcLoc
}) : /* @__PURE__ */ import_ext_gadget5.default.createElement(import_ext_gadget5.default.Fragment, null), secArc === "1" && secDel === "1" ? /* @__PURE__ */ import_ext_gadget5.default.createElement(Pipe, null) : /* @__PURE__ */ import_ext_gadget5.default.createElement(import_ext_gadget5.default.Fragment, null), secDel === "1" ? /* @__PURE__ */ import_ext_gadget5.default.createElement(RemoveSectionLink, {
  sectionIdSpans,
  messageChannel,
  refreshChannel,
  indexNo: index,
  anchor: id,
  toast: toastifyInstance
}) : /* @__PURE__ */ import_ext_gadget5.default.createElement(import_ext_gadget5.default.Fragment, null));
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
            index: section.index,
            id: section.anchor
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
        index,
        id
      } = _headingIndices[_i];
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
      const sectionIDSpan = /* @__PURE__ */ import_ext_gadget7.default.createElement(ArchiveAndDeleteSectionLink, {
        sectionIdSpans,
        messageChannel,
        refreshChannel,
        index,
        id,
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
  return function addLinks2(_x13) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9yZWFjdC50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9FYXN5QXJjaGl2ZS5tb2R1bGUubGVzcyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvc2FuaXRpemUudHMiLCAic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9hZGRMaW5rcy50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9hcGkudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9nZXRTZWN0aW9uLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvZWRpdFNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9zZWN0aW9uTGluay50c3giLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9yZWZyZXNoUGFnZS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL3JlcGxhY2VDaGlsZC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2dldFNldHRpbmdzLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9FYXN5QXJjaGl2ZS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgICB2YXIgY2hhbm5lbHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIEJyb2FkY2FzdENoYW5uZWwoY2hhbm5lbCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICBjaGFubmVsID0gU3RyaW5nKGNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBpZCA9ICckQnJvYWRjYXN0Q2hhbm5lbCQnICsgY2hhbm5lbCArICckJztcblxuICAgICAgICBjaGFubmVsc1tpZF0gPSBjaGFubmVsc1tpZF0gfHwgW107XG4gICAgICAgIGNoYW5uZWxzW2lkXS5wdXNoKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX25hbWUgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWMgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDEuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDIuc3RhcnQoKTtcblxuICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnN0b3JhZ2VBcmVhICE9PSBnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5uZXdWYWx1ZSA9PSBudWxsIHx8IGUubmV3VmFsdWUgPT09ICcnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5rZXkuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCkgIT09IGlkKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAkdGhpcy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEJyb2FkY2FzdENoYW5uZWwucHJvdG90eXBlID0ge1xuICAgICAgICAvLyBCcm9hZGNhc3RDaGFubmVsIEFQSVxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0TWVzc2FnZTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gb3RoZXIgY29udGV4dHMgdmlhIHN0b3JhZ2UgZXZlbnRzLi4uXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5faWQgKyBTdHJpbmcoRGF0ZS5ub3coKSkgKyAnJCcgKyBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIGN1cnJlbnQgY29udGV4dCB2aWEgcG9ydHNcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5mb3JFYWNoKGZ1bmN0aW9uKGJjKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJjID09PSAkdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGJjLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0Mi5jbG9zZSgpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGFubmVsc1t0aGlzLl9pZF0uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEV2ZW50VGFyZ2V0IEFQSVxuICAgICAgICBnZXQgb25tZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9ubWVzc2FnZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEub25tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oLypldmVudCovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuZGlzcGF0Y2hFdmVudC5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgPSBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCB8fCBCcm9hZGNhc3RDaGFubmVsO1xufSkoc2VsZik7XG4iLCAiaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Zm9vdGVyTm90aWNlLCBzZWN0aW9uSWRTcGFufSBmcm9tICcuL0Vhc3lBcmNoaXZlLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3Nhbml0aXplfSBmcm9tICcuL3Nhbml0aXplJztcblxuaW50ZXJmYWNlIEZvb3Rlck5vdGljZVByb3BzIHtcblx0aWQ6IHN0cmluZztcblx0Y2hpbGRyZW4/OiBSZWFjdEVsZW1lbnQgfCBSZWFjdEVsZW1lbnRbXTtcbn1cblxuY29uc3QgRm9vdGVyTm90aWNlID0gKHtpZH06IEZvb3Rlck5vdGljZVByb3BzKSA9PiAoXG5cdDw+XG5cdFx0e213LmNvbmZpZy5nZXQoJ3NraW4nKSA9PT0gJ2NpdGl6ZW4nID8gKFxuXHRcdFx0PHNlY3Rpb25cblx0XHRcdFx0aWQ9e2lkfVxuXHRcdFx0XHRjbGFzc05hbWU9e1tmb290ZXJOb3RpY2UsICdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nLCAnbm9wcmludCddfVxuXHRcdFx0Lz5cblx0XHQpIDogWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMobXcuY29uZmlnLmdldCgnc2tpbicpKSB8fFxuXHRcdCAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSA/IChcblx0XHRcdDxsaSBpZD17aWR9IGNsYXNzTmFtZT17W2Zvb3Rlck5vdGljZSwgJ25vcHJpbnQnXX0gLz5cblx0XHQpIDogKFxuXHRcdFx0PGRpdiBpZD17aWR9IGNsYXNzTmFtZT17W2Zvb3Rlck5vdGljZSwgJ25vcHJpbnQnXX0gLz5cblx0XHQpfVxuXHQ8Lz5cbik7XG5cbmNvbnN0IEluQmxhY2tMaXN0ID0gKCkgPT4gKFxuXHQ8Rm9vdGVyTm90aWNlIGlkPVwiZWFzeV9hcmNoaXZlX25vdF9zdXBwb3J0ZWRfbm90aWNlXCI+XG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQnKX1cblx0XHRcdDxiciAvPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkIGRldGFpbHMnKX1cblx0XHQ8L3NwYW4+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuY29uc3QgTm90QWxsb3dlZCA9ICgpID0+IChcblx0PEZvb3Rlck5vdGljZSBpZD1cImVhc3lfYXJjaGl2ZV9ub3RfYWxsb3dlZF9ub3RpY2VcIj5cblx0XHQ8c3Bhbj57Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBhbGxvd2VkJyl9PC9zcGFuPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmludGVyZmFjZSBBcmNMb2NOb3RBbGxvd2VkUHJvcHMge1xuXHRhcmNMb2M6IHN0cmluZztcbn1cblxuY29uc3QgQXJjTG9jTm90QWxsb3dlZCA9ICh7YXJjTG9jfTogQXJjTG9jTm90QWxsb3dlZFByb3BzKSA9PiAoXG5cdDxGb290ZXJOb3RpY2UgaWQ9XCJlYXN5X2FyY2hpdmVfYXJjX2xvY19ub3RfYWxsb3dlZF9ub3RpY2VcIj5cblx0XHQ8c3Bhbj5cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkJykucmVwbGFjZSgnJDEnLCBzYW5pdGl6ZShhcmNMb2MpKX1cblx0XHRcdDxiciAvPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQgZGV0YWlscycpfVxuXHRcdDwvc3Bhbj5cblx0PC9Gb290ZXJOb3RpY2U+XG4pO1xuXG5jb25zdCBOb0FyY0xvYyA9ICgpID0+IChcblx0PEZvb3Rlck5vdGljZSBpZD1cImVhc3lfYXJjaGl2ZV9ub19hcmNfbG9jX25vdGljZVwiPlxuXHRcdDxzcGFuPntnZXRNZXNzYWdlKCdObyBBcmNoaXZlIExvY2F0aW9uJyl9PC9zcGFuPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmludGVyZmFjZSBFbmFibGVkUHJvcHMge1xuXHRhcmNMb2M6IHN0cmluZztcbn1cblxuY29uc3QgRW5hYmxlZCA9ICh7YXJjTG9jfTogRW5hYmxlZFByb3BzKSA9PiAoXG5cdDxGb290ZXJOb3RpY2UgaWQ9XCJlYXN5X2FyY2hpdmVfYXJjX2xvY19ub3RfYWxsb3dlZF9ub3RpY2VcIj5cblx0XHQ8c3Bhbj5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgZW5hYmxlZCcpfVxuXHRcdFx0e2dldE1lc3NhZ2UoJygnKX1cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIGxvY2F0aW9uJyl9XG5cdFx0XHQ8YSB0aXRsZT17c2FuaXRpemUoYXJjTG9jKX0gaHJlZj17YC93aWtpLyR7c2FuaXRpemUoYXJjTG9jKX1gfT5cblx0XHRcdFx0e2FyY0xvY31cblx0XHRcdDwvYT5cblx0XHRcdHtnZXRNZXNzYWdlKCcpJyl9XG5cdFx0XHR7Z2V0TWVzc2FnZSgnLicpfVxuXHRcdDwvc3Bhbj5cblx0PC9Gb290ZXJOb3RpY2U+XG4pO1xuXG5pbnRlcmZhY2UgT25DbGlja1Byb3BzIHtcblx0dGV4dENvbnRlbnQ6IHN0cmluZztcblx0Y2xhc3NOYW1lOiBzdHJpbmc7XG5cdG9uQ2xpY2s/OiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xuXHRjaGlsZHJlbj86IFJlYWN0RWxlbWVudCB8IFJlYWN0RWxlbWVudFtdO1xufVxuXG5jb25zdCBPbkNsaWNrID0gKHt0ZXh0Q29udGVudCwgY2xhc3NOYW1lLCBvbkNsaWNrfTogT25DbGlja1Byb3BzKSA9PiAoXG5cdDxhXG5cdFx0Y2xhc3NOYW1lPXtbJ2dhZGdldC1lYXN5X2FyY2hpdmVfX2xpbmsnLCBgZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fbGluay0ke2NsYXNzTmFtZX1gXX1cblx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHRcdHRleHRDb250ZW50PXt0ZXh0Q29udGVudH1cblx0PjwvYT5cbik7XG5cbmludGVyZmFjZSBTZWN0aW9uSURQcm9wcyB7XG5cdGlkPzogc3RyaW5nO1xuXHRjbGFzc05hbWU/OiBzdHJpbmc7XG5cdGNoaWxkcmVuPzogUmVhY3RFbGVtZW50IHwgUmVhY3RFbGVtZW50W107XG59XG5cbmNvbnN0IFNlY3Rpb25JRCA9ICh7Y2xhc3NOYW1lfTogU2VjdGlvbklEUHJvcHMpID0+IDxzcGFuIGNsYXNzTmFtZT17W2NsYXNzTmFtZSwgc2VjdGlvbklkU3Bhbl19IC8+O1xuXG5jb25zdCBQaXBlID0gKCkgPT4gPHNwYW4gY2xhc3NOYW1lPVwibXctZWRpdHNlY3Rpb24tZGl2aWRlclwiIHRleHRDb250ZW50PXsnfCd9IC8+O1xuXG5pbnRlcmZhY2UgRWRpdENvbmZsaWN0Tm90aWNlUHJvcHMge1xuXHRvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBFZGl0Q29uZmxpY3ROb3RpY2UgPSAoe29uQ2xpY2t9OiBFZGl0Q29uZmxpY3ROb3RpY2VQcm9wcykgPT4gKFxuXHQ8c3Bhbj5cblx0XHR7Z2V0TWVzc2FnZSgnRWRpdCBDb25maWxpY3QgTm90aWNlJyl9XG5cdFx0PGEgb25DbGljaz17b25DbGlja30+e2dldE1lc3NhZ2UoJ1JlZnJlc2gnKX08L2E+XG5cdDwvc3Bhbj5cbik7XG5cbmV4cG9ydCB7XG5cdEZvb3Rlck5vdGljZSxcblx0RW5hYmxlZCxcblx0SW5CbGFja0xpc3QsXG5cdE5vdEFsbG93ZWQsXG5cdEFyY0xvY05vdEFsbG93ZWQsXG5cdE5vQXJjTG9jLFxuXHRPbkNsaWNrLFxuXHRQaXBlLFxuXHRTZWN0aW9uSUQsXG5cdEVkaXRDb25mbGljdE5vdGljZSxcbn07XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvRWFzeUFyY2hpdmUubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBmb290ZXJOb3RpY2UgPSBcIkVhc3lBcmNoaXZlLW1vZHVsZV9fZm9vdGVyTm90aWNlX1VCd3pYcVwiO1xuZXhwb3J0IGNvbnN0IHNlY3Rpb25JZFNwYW4gPSBcIkVhc3lBcmNoaXZlLW1vZHVsZV9fc2VjdGlvbklkU3Bhbl9VQnd6WHFcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImZvb3Rlck5vdGljZVwiOiBmb290ZXJOb3RpY2UsXG4gIFwic2VjdGlvbklkU3BhblwiOiBzZWN0aW9uSWRTcGFuXG59O1xuICAgICAgIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBcmNoaXZlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgbG9jYXRpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmUgbG9jYXRpb246ICcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPlnLDlnYDvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU6Iez77yaJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZSBhcmNoaXZlIGxvY2F0aW9uIG9mIHRoaXMgcGFnZSwgXCIkMVwiLCBidXQgRWFzeSBhcmNoaXZlIGNhbm5vdCBvcGVyYXRlIGxpa2UgdGhpcy4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3jgIJFYXN5IEFyY2hpdmUg5peg5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdoueVtuWJjeeahOWtmOaqlOWcsOWdgOaYr+OAjCQx44CN44CCRWFzeSBBcmNoaXZlIOeEoeazleaMieatpOWcsOWdgOWtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQgZGV0YWlscyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZXMgc2hvdWxkIG5vdCBiZSBub3JtYWxseSBkaXJlY3RlZCB0byBwYWdlcyB1bmRlciBhcnRpY2xlIG5hbWVzcGFjZS4gUGxlYXNlIGNoZWNrIGlmIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGFyY2hpdmUgbG9jYXRpb24uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOiIrOiAjOiogO+8jOS4jeW6lOWQkeadoeebruWQjeensOepuumXtOi/m+ihjOWtmOaho+OAguatpOWklu+8jOWtmOaho+WcsOWdgOS4jeW+l+WSjOatpOmhtemdouWQjeensOebuOWQjOOAguivt+ajgOafpeWtmOaho+WcsOWdgOOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDoiKzogIzoqIDvvIzkuI3mh4nlkJHmop3nm67lkI3nqLHnqbrplpPpgLLooYzlrZjmqpTjgILmraTlpJbvvIzlrZjmqpTlnLDlnYDkuI3lvpflkozmraTpoIHpnaLlkI3nqLHnm7jlkIzjgILoq4vmqqLmn6XlrZjmqpTlnLDlnYDjgIInLFxuXHRcdH0pLFxuXHRcdEFyY2hpdmluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZpbmcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOS4rScsXG5cdFx0fSksXG5cdFx0QXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0VkaXQgQ29uZmlsaWN0IE5vdGljZSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgYWxyZWFkeSBhcmNoaXZlZCBhbmQvb3IgZGVsZXRlZCBhIHNlY3Rpb24gb24gdGhpcyBwYWdlLiBQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZSBhbmQgY29udGludWUgYXJjaGl2aW5nIG9yIGRlbGV0aW5nIG90aGVyIHNlY3Rpb25zIHRvIGF2b2lkIGVkaXRpbmcgY29uZmxpY3RzLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjlt7Lnu4/lnKjmnKzpobXpnaLmiafooYzkuoblrZjmoaPjgIHliKDpmaTnq6DoioLnmoTmk43kvZzjgILor7fliLfmlrDpobXpnaLvvIznhLblkI7nu6fnu63lrZjmoaPjgIHliKDpmaTmnKzpobXpnaLnmoTlhbbku5bnq6DoioLvvIzku6Xpgb/lhY3nvJbovpHlhrLnqoHjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo5bey57aT5Zyo5pys6aCB6Z2i5Z+36KGM5LqG5a2Y5qqU44CB5Yiq6Zmk56ug56+A55qE5pON5L2c44CC6KuL5Yi35paw6aCB6Z2i77yM54S25b6M57m857qM5a2Y5qqU44CB5Yiq6Zmk5pys6aCB6Z2i55qE5YW25LuW56ug56+A77yM5Lul6YG/5YWN57eo6Lyv6KGd56qB44CCJyxcblx0XHR9KSxcblx0XHREZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaQnLFxuXHRcdH0pLFxuXHRcdERlbGV0aW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RlbGV0aW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOS4rScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTkuK0nLFxuXHRcdH0pLFxuXHRcdERlbGV0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOauteiQvScsXG5cdFx0fSksXG5cdFx0J0NyZWF0ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdjcmVhdGUgYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflu7rnq4vlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bu656uL5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRGVsZXRlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOauteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgZW5hYmxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGlzIGVuYWJsZWQgb24gdGhpcyB0YWxrIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pys6K6o6K666aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgbm90IGFsbG93ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBjYW5ub3QgdXNlIEVhc3kgQXJjaGl2ZSB0byBhcmNoaXZlIHRocmVhZHMgb24gdGhpcyBwYWdlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjkuI3lj6/ku6XlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjkuI3lj6/ku6XlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkIGRldGFpbHMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZXNlIHBhZ2VzIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZTogQXJ0aWNsZSwgRmlsZSwgVGVtcGxhdGUsIE1vZHVsZSwgTWVkaWFXaWtpLCBDYXRlZ29yeSwgU3BlY2lhbCwgSmF2YVNjcmlwdCwgQ1NTLCBKU09OLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfov5nkupvpobXpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8muadoeebruOAgUZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+mAmeS6m+mggemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77ya5qKd55uu77yMRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdH0pLFxuXHRcdCdObyBBcmNoaXZlIExvY2F0aW9uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgY2FuIGJlIHVzZWQgb24gdGhpcyBwYWdlIGlmIG5lZWRlZC4gVG8gZW5hYmxlIGl0LCBhZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdGVtcGxhdGUgdG8gdGhpcyBwYWdlLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfoi6XpnIDopoHvvIzmraTpobXpnaLlj6/ku6XlkK/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOivt+WcqOmhtemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPkvY3nva59feOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfoi6XpnIDopoHvvIzmraTpoIHpnaLlj6/ku6XllZ/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOiri+WcqOmggemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59feOAgicsXG5cdFx0fSksXG5cdFx0J1NlY3Rpb24gJDEnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlY3Rpb24gJDEnLFxuXHRcdFx0emg6ICfnrKwgJDEg56ug6IqCJyxcblx0XHR9KSxcblx0XHQnKCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnICgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdCcpJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHQnLic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdFx0JzonOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzogJyxcblx0XHRcdHpoOiAn77yaJyxcblx0XHR9KSxcblx0XHRSZWZyZXNoOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlZnJlc2ggdGhlIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yi35paw5b2T5YmN6aG16Z2iJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeaWsOi8ieWFpeeVtuWJjemggScsXG5cdFx0fSksXG5cdFx0UmVmcmVzaGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WNs+WwhuWIt+aWsOW9k+WJjemhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfljbPlsIfph43mlrDovInlhaXnlbbliY3poIHigKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBzYW5pdGl6ZSA9IChzdHJpbmc6IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gc3RyaW5nXG5cdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59O1xuXG5leHBvcnQge3Nhbml0aXplfTtcbiIsICJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0VkaXRDb25mbGljdE5vdGljZSwgRW5hYmxlZH0gZnJvbSAnLi91dGlsL3JlYWN0JztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge0FyY2hpdmVBbmREZWxldGVTZWN0aW9uTGlua30gZnJvbSAnLi91dGlsL3NlY3Rpb25MaW5rJztcbmltcG9ydCB7Z2V0U2VjdGlvbnN9IGZyb20gJy4vdXRpbC9nZXRTZWN0aW9uJztcbmltcG9ydCB7cmVmcmVzaH0gZnJvbSAnLi91dGlsL3JlZnJlc2hQYWdlJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBhcHBlbmRGb290ZXJOb3RpY2UgPSAoaW5uZXJFbGVtZW50OiBFbGVtZW50KSA9PiB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKVswXT8ucHJlcGVuZChpbm5lckVsZW1lbnQpO1xufTtcblxuY29uc3QgYWRkTGlua3MgPSBhc3luYyAoe1xuXHRhcmNMZXZlbCxcblx0YXJjTG9jLFxuXHRzZWNBcmMsXG5cdHNlY0RlbCxcbn06IHtcblx0YXJjTGV2ZWw6IHN0cmluZztcblx0YXJjTG9jOiBzdHJpbmcgfCBudWxsO1xuXHRzZWNBcmM6IHN0cmluZztcblx0c2VjRGVsOiBzdHJpbmc7XG59KSA9PiB7XG5cdGlmICghYXJjTG9jKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGFwcGVuZEZvb3Rlck5vdGljZSg8RW5hYmxlZCBhcmNMb2M9e2FyY0xvY30gLz4pO1xuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRjb25zdCBoZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGgke2FyY0xldmVsfWApO1xuXHRjb25zdCBoZWFkbGluZXMgPSBbXTtcblx0Y29uc3QgaGVhZGluZ0luZGljZXMgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGhlYWRpbmcgb2YgaGVhZGluZ3MpIHtcblx0XHRjb25zdCBoZWFkbGluZSA9IGhlYWRpbmcucXVlcnlTZWxlY3RvcignLm13LWhlYWRsaW5lJyk7XG5cdFx0aGVhZGxpbmVzW2hlYWRsaW5lcy5sZW5ndGhdID0gaGVhZGxpbmU/LmlkO1xuXHR9XG5cblx0Y29uc3Qgc2VjdGlvbklkU3BhbnM6IFJlYWN0RWxlbWVudFtdID0gW107XG5cdGxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cblx0Y29uc3QgbWVzc2FnZUNoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChgJHt3Z1BhZ2VOYW1lfV9tZXNzYWdlYCk7XG5cdGNvbnN0IHJlZnJlc2hDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoYCR7d2dQYWdlTmFtZX1fcmVmcmVzaGApO1xuXG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9uc1RvQXJjaGl2ZSkge1xuXHRcdGlmIChzZWN0aW9uLmxldmVsICE9PSBhcmNMZXZlbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGhlYWRsaW5lcy5pbmNsdWRlcyhzZWN0aW9uLmFuY2hvcikpIHtcblx0XHRcdGhlYWRpbmdJbmRpY2VzW2hlYWRpbmdJbmRpY2VzLmxlbmd0aF0gPSB7XG5cdFx0XHRcdGluZGV4OiBzZWN0aW9uLmluZGV4LFxuXHRcdFx0XHRpZDogc2VjdGlvbi5hbmNob3IsXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdGZvciAoY29uc3Qge2luZGV4LCBpZH0gb2YgaGVhZGluZ0luZGljZXMpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItcXVlcnktc2VsZWN0b3Jcblx0XHRjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0XHRpZiAoIWhlYWRsaW5lKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBwYXJlbnRIZWFkaW5nID0gaGVhZGxpbmUucGFyZW50RWxlbWVudDtcblx0XHRpZiAoIXBhcmVudEhlYWRpbmcpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVkaXRTZWN0aW9uID0gcGFyZW50SGVhZGluZy5xdWVyeVNlbGVjdG9yKCcubXctZWRpdHNlY3Rpb24nKTtcblx0XHRpZiAoIWVkaXRTZWN0aW9uKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBzZWN0aW9uSURTcGFuID0gKFxuXHRcdFx0PEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGlua1xuXHRcdFx0XHRzZWN0aW9uSWRTcGFucz17c2VjdGlvbklkU3BhbnN9XG5cdFx0XHRcdG1lc3NhZ2VDaGFubmVsPXttZXNzYWdlQ2hhbm5lbH1cblx0XHRcdFx0cmVmcmVzaENoYW5uZWw9e3JlZnJlc2hDaGFubmVsfVxuXHRcdFx0XHRpbmRleD17aW5kZXh9XG5cdFx0XHRcdGlkPXtpZH1cblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZT17dG9hc3RpZnlJbnN0YW5jZX1cblx0XHRcdFx0YXJjTG9jPXthcmNMb2N9XG5cdFx0XHRcdHNlY0FyYz17c2VjQXJjfVxuXHRcdFx0XHRzZWNEZWw9e3NlY0RlbH1cblx0XHRcdC8+XG5cdFx0KTtcblxuXHRcdGVkaXRTZWN0aW9uLnByZXBlbmQoc2VjdGlvbklEU3Bhbik7XG5cdFx0c2VjdGlvbklkU3BhbnNbc2VjdGlvbklkU3BhbnMubGVuZ3RoXSA9IHNlY3Rpb25JRFNwYW47XG5cdH1cblxuXHRtZXNzYWdlQ2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG5cdFx0Zm9yIChjb25zdCBzcGFuIG9mIHNlY3Rpb25JZFNwYW5zKSB7XG5cdFx0XHRzcGFuLnJlbW92ZSgpO1xuXHRcdH1cblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZXZlbnQuZGF0YSBhcyBzdHJpbmcsXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0XHR9LFxuXHRcdFx0J2luZm8nXG5cdFx0KTtcblx0fSk7XG5cblx0cmVmcmVzaENoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICgpID0+IHtcblx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0bm9kZTogKFxuXHRcdFx0XHRcdDxFZGl0Q29uZmxpY3ROb3RpY2Vcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdFx0XHRcdFx0cmVmcmVzaCgpO1xuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdpbmZvJ1xuXHRcdCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRMaW5rcywgYXBwZW5kRm9vdGVyTm90aWNlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEVhc3lBcmNoaXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgZ2V0U2VjdGlvbnMgPSBhc3luYyAodGl0bGU6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cGFnZTogdGl0bGUsXG5cdFx0cHJvcDogJ3NlY3Rpb25zJyxcblx0fTtcblxuXHRjb25zdCB7cGFyc2V9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRjb25zdCB7c2VjdGlvbnN9ID0gcGFyc2UgYXMge1xuXHRcdHNlY3Rpb25zOiB7XG5cdFx0XHRsZXZlbDogc3RyaW5nO1xuXHRcdFx0aW5kZXg6IHN0cmluZztcblx0XHRcdGFuY2hvcjogc3RyaW5nO1xuXHRcdH1bXTtcblx0fTtcblxuXHRjb25zdCBzZWN0aW9uc1RvQXJjaGl2ZSA9IFtdO1xuXG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuXHRcdGNvbnN0IHtsZXZlbCwgaW5kZXgsIGFuY2hvcn0gPSBzZWN0aW9uO1xuXG5cdFx0aWYgKGluZGV4LnN0YXJ0c1dpdGgoJ1QtJykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHNlY3Rpb25zVG9BcmNoaXZlW3NlY3Rpb25zVG9BcmNoaXZlLmxlbmd0aF0gPSB7XG5cdFx0XHRsZXZlbCxcblx0XHRcdGluZGV4LFxuXHRcdFx0YW5jaG9yLFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gc2VjdGlvbnNUb0FyY2hpdmU7XG59O1xuXG5jb25zdCBnZXRTZWN0aW9uQ29udGVudCA9IGFzeW5jICh7dGl0bGUsIHNlY3Rpb259OiB7dGl0bGU6IHN0cmluZzsgc2VjdGlvbjogc3RyaW5nfSk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRydnNlY3Rpb246IHNlY3Rpb24sXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiAocmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0/LnJldmlzaW9ucz8uWzBdLnNsb3RzLm1haW4uY29udGVudCBhcyBzdHJpbmcpID8/IG51bGw7XG59O1xuXG5leHBvcnQge2dldFNlY3Rpb25zLCBnZXRTZWN0aW9uQ29udGVudH07XG4iLCAiaW1wb3J0IHtnZXRTZWN0aW9uQ29udGVudCwgZ2V0U2VjdGlvbnN9IGZyb20gJy4vZ2V0U2VjdGlvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgaXNQYWdlRXhpc3QgPSBhc3luYyAoYXJjaGl2ZVRvOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW5mbycsXG5cdFx0dGl0bGVzOiBhcmNoaXZlVG8sXG5cdH07XG5cblx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRpZiAocXVlcnkucGFnZXNbMF0/Lm1pc3NpbmcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGlzU2VjdGlvbkV4aXN0ID0gYXN5bmMgKHtpbmRleCwgYW5jaG9yfToge2luZGV4OiBzdHJpbmc7IGFuY2hvcjogc3RyaW5nfSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25zID0gYXdhaXQgZ2V0U2VjdGlvbnMod2dQYWdlTmFtZSk7XG5cblx0bGV0IGlzRXhpc3QgPSBmYWxzZTtcblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0aWYgKGluZGV4ID09PSBzZWN0aW9uLmluZGV4ICYmIGFuY2hvciA9PT0gc2VjdGlvbi5hbmNob3IpIHtcblx0XHRcdGlzRXhpc3QgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gaXNFeGlzdDtcbn07XG5cbmNvbnN0IHJlbW92ZVNlY3Rpb24gPSBhc3luYyAoe2luZGV4LCBhbmNob3IsIHN1bW1hcnl9OiB7aW5kZXg6IHN0cmluZzsgYW5jaG9yOiBzdHJpbmc7IHN1bW1hcnk/OiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaXNFeGlzdCA9IGF3YWl0IGlzU2VjdGlvbkV4aXN0KHtpbmRleCwgYW5jaG9yfSk7XG5cblx0aWYgKGlzRXhpc3QgIT09IHRydWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0U2VjdGlvbkNvbnRlbnQoe3RpdGxlOiB3Z1BhZ2VOYW1lLCBzZWN0aW9uOiBpbmRleH0pO1xuXG5cdGlmIChjb250ZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXdhaXQgYXBpLmVkaXQod2dQYWdlTmFtZSwgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZWN0aW9uOiBpbmRleCxcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0c3VtbWFyeTogc3VtbWFyeSA/PyBnZXRNZXNzYWdlKCdEZWxldGUgc3VtbWFyeScpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG59O1xuXG5jb25zdCBhcmNoaXZlU2VjdGlvbiA9IGFzeW5jICh7aW5kZXgsIGFuY2hvciwgYXJjaGl2ZVRvfToge2luZGV4OiBzdHJpbmc7IGFuY2hvcjogc3RyaW5nOyBhcmNoaXZlVG86IHN0cmluZ30pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpc0V4aXN0ID0gYXdhaXQgaXNTZWN0aW9uRXhpc3Qoe2luZGV4LCBhbmNob3J9KTtcblxuXHRpZiAoaXNFeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh7dGl0bGU6IHdnUGFnZU5hbWUsIHNlY3Rpb246IGluZGV4fSk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYWdlRXhpc3QgPSBhd2FpdCBpc1BhZ2VFeGlzdChhcmNoaXZlVG8pO1xuXHRpZiAoIXBhZ2VFeGlzdCkge1xuXHRcdGF3YWl0IGFwaS5jcmVhdGUoXG5cdFx0XHRhcmNoaXZlVG8sXG5cdFx0XHR7XG5cdFx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0NyZWF0ZSBzdW1tYXJ5JyksXG5cdFx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdCd7e3RhbGthcmNoaXZlfX0nXG5cdFx0KTtcblx0fVxuXG5cdGF3YWl0IGFwaS5lZGl0KGFyY2hpdmVUbywgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcHBlbmR0ZXh0OiBgXFxuXFxuJHtjb250ZW50fWAsXG5cdFx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdBcmNoaXZlIHN1bW1hcnknKSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xuXG5cdGF3YWl0IHJlbW92ZVNlY3Rpb24oe2luZGV4LCBhbmNob3IsIHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpfSk7XG59O1xuXG5leHBvcnQge2lzU2VjdGlvbkV4aXN0LCBhcmNoaXZlU2VjdGlvbiwgcmVtb3ZlU2VjdGlvbn07XG4iLCAiaW1wb3J0IHtPbkNsaWNrLCBQaXBlLCBTZWN0aW9uSUR9IGZyb20gJy4vcmVhY3QnO1xuaW1wb3J0IHthcmNoaXZlU2VjdGlvbiwgcmVtb3ZlU2VjdGlvbn0gZnJvbSAnLi9lZGl0U2VjdGlvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtyZWZyZXNofSBmcm9tICcuL3JlZnJlc2hQYWdlJztcbmltcG9ydCB7cmVwbGFjZUNoaWxkfSBmcm9tICcuL3JlcGxhY2VDaGlsZCc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYXJjaGl2ZU9uQ2xpY2sgPSBhc3luYyAoXG5cdGV2ZW50OiBFdmVudCxcblx0e1xuXHRcdHNlY3Rpb25JZFNwYW5zLFxuXHRcdG1lc3NhZ2VDaGFubmVsLFxuXHRcdHJlZnJlc2hDaGFubmVsLFxuXHR9OiB7c2VjdGlvbklkU3BhbnM6IEVsZW1lbnRbXTsgbWVzc2FnZUNoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7IHJlZnJlc2hDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsfSxcblx0e1xuXHRcdGluZGV4Tm8sXG5cdFx0YW5jaG9yLFxuXHRcdGFyY2hpdmVUbyxcblx0XHR0b2FzdCxcblx0fToge1xuXHRcdGluZGV4Tm86IHN0cmluZztcblx0XHRhbmNob3I6IHN0cmluZztcblx0XHRhcmNoaXZlVG86IHN0cmluZztcblx0XHR0b2FzdDogVG9hc3RpZnlJbnN0YW5jZTtcblx0fVxuKSA9PiB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnN0IHBhcmVudEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8ucGFyZW50RWxlbWVudDtcblx0aWYgKCFwYXJlbnRFbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cmVwbGFjZUNoaWxkKHBhcmVudEVsZW1lbnQsIDxzcGFuPntnZXRNZXNzYWdlKCdBcmNoaXZpbmcnKX08L3NwYW4+KTtcblx0Zm9yIChjb25zdCBzcGFuIG9mIHNlY3Rpb25JZFNwYW5zKSB7XG5cdFx0c3Bhbi5yZW1vdmUoKTtcblx0fVxuXHRjb25zdCBtZXNzYWdlMSA9IGdldE1lc3NhZ2UoJ0FyY2hpdmluZycpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UxKTtcblxuXHR0b2FzdCB8fD0ge1xuXHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdH07XG5cdHRvYXN0LmhpZGVUb2FzdCgpO1xuXHR0b2FzdCA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IG1lc3NhZ2UxLFxuXHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRhd2FpdCBhcmNoaXZlU2VjdGlvbih7aW5kZXg6IGluZGV4Tm8sIGFuY2hvciwgYXJjaGl2ZVRvfSk7XG5cdHJlcGxhY2VDaGlsZChwYXJlbnRFbGVtZW50LCA8c3Bhbj57Z2V0TWVzc2FnZSgnQXJjaGl2ZWQnKX08L3NwYW4+KTtcblx0Y29uc3QgbWVzc2FnZTIgPSBnZXRNZXNzYWdlKCdBcmNoaXZlZCcpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UyKTtcblx0dG9hc3QuaGlkZVRvYXN0KCk7XG5cdHRvYXN0ID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogbWVzc2FnZTIsXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXHRtZXNzYWdlQ2hhbm5lbC5jbG9zZSgpO1xuXHRyZWZyZXNoQ2hhbm5lbC5wb3N0TWVzc2FnZSgnUmVmcmVzaCcpO1xuXHRyZWZyZXNoKHt0b2FzdGlmeUluc3RhbmNlOiB0b2FzdH0pO1xufTtcblxuY29uc3QgcmVtb3ZlT25DbGljayA9IGFzeW5jIChcblx0ZXZlbnQ6IEV2ZW50LFxuXHR7XG5cdFx0c2VjdGlvbklkU3BhbnMsXG5cdFx0bWVzc2FnZUNoYW5uZWwsXG5cdFx0cmVmcmVzaENoYW5uZWwsXG5cdH06IHtzZWN0aW9uSWRTcGFuczogRWxlbWVudFtdOyBtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDsgcmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWx9LFxuXHR7XG5cdFx0aW5kZXhObyxcblx0XHRhbmNob3IsXG5cdFx0dG9hc3QsXG5cdH06IHtcblx0XHRpbmRleE5vOiBzdHJpbmc7XG5cdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0dG9hc3Q6IFRvYXN0aWZ5SW5zdGFuY2U7XG5cdH1cbikgPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBwYXJlbnRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LnBhcmVudEVsZW1lbnQ7XG5cdGlmICghcGFyZW50RWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHJlcGxhY2VDaGlsZChwYXJlbnRFbGVtZW50LCA8c3Bhbj57Z2V0TWVzc2FnZSgnRGVsZXRpbmcnKX08L3NwYW4+KTtcblx0Zm9yIChjb25zdCBzcGFuIG9mIHNlY3Rpb25JZFNwYW5zKSB7XG5cdFx0c3Bhbi5yZW1vdmUoKTtcblx0fVxuXHRjb25zdCBtZXNzYWdlMSA9IGdldE1lc3NhZ2UoJ0RlbGV0aW5nJykgKyBnZXRNZXNzYWdlKCc6JykgKyBnZXRNZXNzYWdlKCdTZWN0aW9uICQxJykucmVwbGFjZSgnJDEnLCBpbmRleE5vKTtcblx0bWVzc2FnZUNoYW5uZWwucG9zdE1lc3NhZ2UobWVzc2FnZTEpO1xuXG5cdHRvYXN0IHx8PSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblx0dG9hc3QuaGlkZVRvYXN0KCk7XG5cdHRvYXN0ID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogbWVzc2FnZTEsXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGF3YWl0IHJlbW92ZVNlY3Rpb24oe2luZGV4OiBpbmRleE5vLCBhbmNob3J9KTtcblx0cmVwbGFjZUNoaWxkKHBhcmVudEVsZW1lbnQsIDxzcGFuPntnZXRNZXNzYWdlKCdEZWxldGVkJyl9PC9zcGFuPik7XG5cdGNvbnN0IG1lc3NhZ2UyID0gZ2V0TWVzc2FnZSgnRGVsZXRlZCcpICsgZ2V0TWVzc2FnZSgnOicpICsgZ2V0TWVzc2FnZSgnU2VjdGlvbiAkMScpLnJlcGxhY2UoJyQxJywgaW5kZXhObyk7XG5cdG1lc3NhZ2VDaGFubmVsLnBvc3RNZXNzYWdlKG1lc3NhZ2UyKTtcblx0dG9hc3QuaGlkZVRvYXN0KCk7XG5cdHRvYXN0ID0gdG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogbWVzc2FnZTIsXG5cdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXHRtZXNzYWdlQ2hhbm5lbC5jbG9zZSgpO1xuXHRyZWZyZXNoQ2hhbm5lbC5wb3N0TWVzc2FnZSgnUmVmcmVzaCcpO1xuXHRyZWZyZXNoKHt0b2FzdGlmeUluc3RhbmNlOiB0b2FzdH0pO1xufTtcblxuaW50ZXJmYWNlIEFyY2hpdmVTZWN0aW9uTGlua1Byb3BzIHtcblx0c2VjdGlvbklkU3BhbnM6IEVsZW1lbnRbXTtcblx0bWVzc2FnZUNoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdHJlZnJlc2hDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRpbmRleE5vOiBzdHJpbmc7XG5cdGFuY2hvcjogc3RyaW5nO1xuXHR0b2FzdDogVG9hc3RpZnlJbnN0YW5jZTtcblx0YXJjaGl2ZVRvOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFyY2hpdmVTZWN0aW9uTGluayA9ICh7XG5cdHNlY3Rpb25JZFNwYW5zLFxuXHRtZXNzYWdlQ2hhbm5lbCxcblx0cmVmcmVzaENoYW5uZWwsXG5cdGluZGV4Tm8sXG5cdGFuY2hvcixcblx0YXJjaGl2ZVRvLFxuXHR0b2FzdCxcbn06IEFyY2hpdmVTZWN0aW9uTGlua1Byb3BzKSA9PiAoXG5cdDxPbkNsaWNrXG5cdFx0Y2xhc3NOYW1lPXsnYXJjaGl2ZSd9XG5cdFx0b25DbGljaz17KGV2ZW50OiBFdmVudCkgPT4ge1xuXHRcdFx0dm9pZCBhcmNoaXZlT25DbGljayhcblx0XHRcdFx0ZXZlbnQsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzZWN0aW9uSWRTcGFucyxcblx0XHRcdFx0XHRtZXNzYWdlQ2hhbm5lbCxcblx0XHRcdFx0XHRyZWZyZXNoQ2hhbm5lbCxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGluZGV4Tm8sXG5cdFx0XHRcdFx0YW5jaG9yLFxuXHRcdFx0XHRcdGFyY2hpdmVUbyxcblx0XHRcdFx0XHR0b2FzdCxcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9fVxuXHRcdHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdBcmNoaXZlJyl9XG5cdC8+XG4pO1xuXG5pbnRlcmZhY2UgUmVtb3ZlU2VjdGlvbkxpbmtQcm9wcyB7XG5cdHNlY3Rpb25JZFNwYW5zOiBFbGVtZW50W107XG5cdG1lc3NhZ2VDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsO1xuXHRyZWZyZXNoQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0aW5kZXhObzogc3RyaW5nO1xuXHRhbmNob3I6IHN0cmluZztcblx0dG9hc3Q6IFRvYXN0aWZ5SW5zdGFuY2U7XG59XG5cbmNvbnN0IFJlbW92ZVNlY3Rpb25MaW5rID0gKHtcblx0c2VjdGlvbklkU3BhbnMsXG5cdG1lc3NhZ2VDaGFubmVsLFxuXHRyZWZyZXNoQ2hhbm5lbCxcblx0aW5kZXhObyxcblx0YW5jaG9yLFxuXHR0b2FzdCxcbn06IFJlbW92ZVNlY3Rpb25MaW5rUHJvcHMpID0+IChcblx0PE9uQ2xpY2tcblx0XHRjbGFzc05hbWU9eydkZWxldGUnfVxuXHRcdHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdEZWxldGUnKX1cblx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdHZvaWQgcmVtb3ZlT25DbGljayhcblx0XHRcdFx0ZXZlbnQsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzZWN0aW9uSWRTcGFucyxcblx0XHRcdFx0XHRtZXNzYWdlQ2hhbm5lbCxcblx0XHRcdFx0XHRyZWZyZXNoQ2hhbm5lbCxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGluZGV4Tm8sXG5cdFx0XHRcdFx0YW5jaG9yLFxuXHRcdFx0XHRcdHRvYXN0LFxuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdH19XG5cdC8+XG4pO1xuXG5pbnRlcmZhY2UgQXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rUHJvcHMge1xuXHRzZWN0aW9uSWRTcGFuczogRWxlbWVudFtdO1xuXHRtZXNzYWdlQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcblx0cmVmcmVzaENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWw7XG5cdGluZGV4OiBzdHJpbmc7XG5cdGlkOiBzdHJpbmc7XG5cdHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2U7XG5cdHNlY0FyYzogc3RyaW5nO1xuXHRzZWNEZWw6IHN0cmluZztcblx0YXJjTG9jOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGluayA9ICh7XG5cdHNlY3Rpb25JZFNwYW5zLFxuXHRtZXNzYWdlQ2hhbm5lbCxcblx0cmVmcmVzaENoYW5uZWwsXG5cdGluZGV4LFxuXHRpZCxcblx0dG9hc3RpZnlJbnN0YW5jZSxcblx0c2VjQXJjLFxuXHRzZWNEZWwsXG5cdGFyY0xvYyxcbn06IEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGlua1Byb3BzKSA9PiAoXG5cdDxTZWN0aW9uSUQ+XG5cdFx0e3NlY0FyYyA9PT0gJzEnID8gKFxuXHRcdFx0PEFyY2hpdmVTZWN0aW9uTGlua1xuXHRcdFx0XHRzZWN0aW9uSWRTcGFucz17c2VjdGlvbklkU3BhbnN9XG5cdFx0XHRcdG1lc3NhZ2VDaGFubmVsPXttZXNzYWdlQ2hhbm5lbH1cblx0XHRcdFx0cmVmcmVzaENoYW5uZWw9e3JlZnJlc2hDaGFubmVsfVxuXHRcdFx0XHRpbmRleE5vPXtpbmRleH1cblx0XHRcdFx0YW5jaG9yPXtpZH1cblx0XHRcdFx0dG9hc3Q9e3RvYXN0aWZ5SW5zdGFuY2V9XG5cdFx0XHRcdGFyY2hpdmVUbz17YXJjTG9jfVxuXHRcdFx0Lz5cblx0XHQpIDogKFxuXHRcdFx0PD48Lz5cblx0XHQpfVxuXHRcdHtzZWNBcmMgPT09ICcxJyAmJiBzZWNEZWwgPT09ICcxJyA/IDxQaXBlIC8+IDogPD48Lz59XG5cdFx0e3NlY0RlbCA9PT0gJzEnID8gKFxuXHRcdFx0PFJlbW92ZVNlY3Rpb25MaW5rXG5cdFx0XHRcdHNlY3Rpb25JZFNwYW5zPXtzZWN0aW9uSWRTcGFuc31cblx0XHRcdFx0bWVzc2FnZUNoYW5uZWw9e21lc3NhZ2VDaGFubmVsfVxuXHRcdFx0XHRyZWZyZXNoQ2hhbm5lbD17cmVmcmVzaENoYW5uZWx9XG5cdFx0XHRcdGluZGV4Tm89e2luZGV4fVxuXHRcdFx0XHRhbmNob3I9e2lkfVxuXHRcdFx0XHR0b2FzdD17dG9hc3RpZnlJbnN0YW5jZX1cblx0XHRcdC8+XG5cdFx0KSA6IChcblx0XHRcdDw+PC8+XG5cdFx0KX1cblx0PC9TZWN0aW9uSUQ+XG4pO1xuXG5leHBvcnQge0FyY2hpdmVTZWN0aW9uTGluaywgUmVtb3ZlU2VjdGlvbkxpbmssIEFyY2hpdmVBbmREZWxldGVTZWN0aW9uTGlua307XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCB7d2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCByZWZyZXNoID0gKHtcblx0dGFyZ2V0UGFnZSxcblx0dG9hc3RpZnlJbnN0YW5jZSxcbn06IHt0YXJnZXRQYWdlPzogc3RyaW5nOyB0b2FzdGlmeUluc3RhbmNlPzogVG9hc3RpZnlJbnN0YW5jZX0gPSB7fSk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeUluc3RhbmNlIHx8PSB7XG5cdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0fTtcblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1JlZnJlc2hpbmcnKSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bG9jYXRpb24ucmVwbGFjZShcblx0XHRtdy51dGlsLmdldFVybCh3Z1NjcmlwdCwge1xuXHRcdFx0dGl0bGU6IHRhcmdldFBhZ2UgPz8gd2dQYWdlTmFtZSxcblx0XHR9KVxuXHQpO1xufTtcblxuZXhwb3J0IHtyZWZyZXNofTtcbiIsICJjb25zdCByZXBsYWNlQ2hpbGQgPSAoZWxlbWVudDogRWxlbWVudCwgbmV3Q2hpbGQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcblx0d2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0ZWxlbWVudC5maXJzdENoaWxkPy5yZW1vdmUoKTtcblx0fVxuXHRlbGVtZW50LmFwcGVuZChuZXdDaGlsZCk7XG59O1xuXG5leHBvcnQge3JlcGxhY2VDaGlsZH07XG4iLCAiY29uc3QgaWZBcmNMb2NOb3RBbGxvd2VkID0gKGFyY0xvYzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc291cmNlVGl0bGUgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSk7XG5cdGNvbnN0IGFyY0xvY1RpdGxlID0gbmV3IG13LlRpdGxlKGFyY0xvYyk7XG5cblx0Y29uc3QgYXJjTG9jTmFtZXNwYWNlSWQgPSBhcmNMb2NUaXRsZS5nZXROYW1lc3BhY2VJZCgpO1xuXHRjb25zdCBhcmNMb2NQYWdlTmFtZSA9IGFyY0xvY1RpdGxlLmdldE1haW4oKTtcblx0Y29uc3Qgc291cmNlTmFtZXNwYWNlSWQgPSBzb3VyY2VUaXRsZS5nZXROYW1lc3BhY2VJZCgpO1xuXHRjb25zdCBzb3VyY2VQYWdlTmFtZSA9IHNvdXJjZVRpdGxlLmdldE1haW4oKTtcblxuXHRpZiAoYXJjTG9jTmFtZXNwYWNlSWQgPT09IDApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmIChhcmNMb2NOYW1lc3BhY2VJZCA9PT0gc291cmNlTmFtZXNwYWNlSWQgJiYgYXJjTG9jUGFnZU5hbWUgPT09IHNvdXJjZVBhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc0luQmxhY2tsaXN0ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgYmxhY2tMaXN0UmVnZXhBcnIgPSBbXG5cdFx0L15GaWxlOi4qJC8sXG5cdFx0L15NZWRpYVdpa2k6LiokLyxcblx0XHQvXk1vZHVsZTouKiQvLFxuXHRcdC9eQ2F0ZWdvcnk6LiokLyxcblx0XHQvXlRlbXBsYXRlOi4qJC8sXG5cdFx0L15TcGVjaWFsOi4qJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanMkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5jc3MkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qc29uJC8sXG5cdF07XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGJsYWNrTGlzdFJlZ2V4QXJyKSB7XG5cdFx0aWYgKGVsZW1lbnQudGVzdCh3Z1BhZ2VOYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNOb3RBbGxvd2VkID0gKCkgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUmVsZXZhbnRVc2VyTmFtZSwgd2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCh3Z05hbWVzcGFjZU51bWJlciA9PT0gMiB8fCB3Z05hbWVzcGFjZU51bWJlciA9PT0gMykgJiYgISh3Z1JlbGV2YW50VXNlck5hbWUgPT09IHdnVXNlck5hbWUpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc05vdFN1cHBvcnRlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnSXNNYWluUGFnZSwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnQ3VyUmV2aXNpb25JZCwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwIHx8IHdnQ3VyUmV2aXNpb25JZCAtIHdnUmV2aXNpb25JZCAhPT0gMCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwIHx8IHdnSXNNYWluUGFnZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgZ2V0U2V0dGluZ3MgPSAoKSA9PiB7XG5cdGNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVhc3lfYXJjaGl2ZV9kYXRhX3BvaW50X2NvbGxlY3Rpb24nKSBhcyBIVE1MRWxlbWVudDtcblx0aWYgKCFzZXR0aW5ncykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3Qge2RhdGFzZXR9ID0gc2V0dGluZ3M7XG5cdGNvbnN0IHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0gPSBkYXRhc2V0O1xuXHRyZXR1cm4ge1xuXHRcdGFyY0xldmVsOiBhcmNMZXZlbCA/PyAnMicsXG5cdFx0YXJjTG9jOiBhcmNMb2MgPz8gbnVsbCxcblx0XHRzZWNBcmM6IHNlY0FyYyA/PyAnMScsXG5cdFx0c2VjRGVsOiBzZWNEZWwgPz8gJzEnLFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZXRTZXR0aW5ncywgaWZBcmNMb2NOb3RBbGxvd2VkLCBpc0luQmxhY2tsaXN0LCBpc05vdEFsbG93ZWQsIGlzTm90U3VwcG9ydGVkfTtcbiIsICJpbXBvcnQge0FyY0xvY05vdEFsbG93ZWQsIEluQmxhY2tMaXN0LCBOb0FyY0xvYywgTm90QWxsb3dlZH0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvcmVhY3QnO1xuaW1wb3J0IHthZGRMaW5rcywgYXBwZW5kRm9vdGVyTm90aWNlfSBmcm9tICcuL21vZHVsZXMvYWRkTGlua3MnO1xuaW1wb3J0IHtnZXRTZXR0aW5ncywgaWZBcmNMb2NOb3RBbGxvd2VkLCBpc0luQmxhY2tsaXN0LCBpc05vdEFsbG93ZWQsIGlzTm90U3VwcG9ydGVkfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRTZXR0aW5ncyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbihmdW5jdGlvbiBlYXN5QXJjaGl2ZSgpIHtcblx0Y29uc3Qgbm90U3VwcG9ydGVkID0gaXNOb3RTdXBwb3J0ZWQoKTtcblx0aWYgKG5vdFN1cHBvcnRlZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGluQmxhY2tsaXN0ID0gaXNJbkJsYWNrbGlzdCgpO1xuXHRpZiAoaW5CbGFja2xpc3QpIHtcblx0XHRhcHBlbmRGb290ZXJOb3RpY2UoPEluQmxhY2tMaXN0IC8+KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBub3RBbGxvd2VkID0gaXNOb3RBbGxvd2VkKCk7XG5cdGlmIChub3RBbGxvd2VkKSB7XG5cdFx0YXBwZW5kRm9vdGVyTm90aWNlKDxOb3RBbGxvd2VkIC8+KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzKCk7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRhcHBlbmRGb290ZXJOb3RpY2UoPE5vQXJjTG9jIC8+KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7YXJjTG9jfSA9IHNldHRpbmdzO1xuXHRpZiAoIWFyY0xvYykge1xuXHRcdGFwcGVuZEZvb3Rlck5vdGljZSg8Tm9BcmNMb2MgLz4pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGFyY0xvY05vdEFsbG93ZWQgPSBpZkFyY0xvY05vdEFsbG93ZWQoYXJjTG9jKTtcblx0aWYgKGFyY0xvY05vdEFsbG93ZWQpIHtcblx0XHRhcHBlbmRGb290ZXJOb3RpY2UoPEFyY0xvY05vdEFsbG93ZWQgYXJjTG9jPXthcmNMb2N9IC8+KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGFkZExpbmtzKHNldHRpbmdzKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQSxLQUFDLFNBQVMsUUFBUTtBQUNkLFVBQUksV0FBVyxDQUFDO0FBRWhCLGVBQVNBLGtCQUFpQixTQUFTO0FBQy9CLFlBQUksUUFBUTtBQUNaLGtCQUFVLE9BQU8sT0FBTztBQUV4QixZQUFJLEtBQUssdUJBQXVCLFVBQVU7QUFFMUMsaUJBQVMsRUFBRSxJQUFJLFNBQVMsRUFBRSxLQUFLLENBQUM7QUFDaEMsaUJBQVMsRUFBRSxFQUFFLEtBQUssSUFBSTtBQUV0QixhQUFLLFFBQVE7QUFDYixhQUFLLE1BQU07QUFDWCxhQUFLLFVBQVU7QUFDZixhQUFLLE1BQU0sSUFBSSxlQUFlO0FBQzlCLGFBQUssSUFBSSxNQUFNLE1BQU07QUFDckIsYUFBSyxJQUFJLE1BQU0sTUFBTTtBQUVyQixlQUFPLGlCQUFpQixXQUFXLFNBQVMsR0FBRztBQUMzQyxjQUFJLEVBQUUsZ0JB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QkFBbUJ3RCxtQ0FBQXpOLFFBQUFDLGNBQUNTLGFBQUEsSUFBWSxDQUFFO0FBQ2xDO0VBQ0Q7QUFFQSxRQUFNbU4sYUFBYWYsYUFBYTtBQUNoQyxNQUFJZSxZQUFZO0FBQ2Y1RCx1QkFBbUJ3RCxtQ0FBQXpOLFFBQUFDLGNBQUNVLFlBQUEsSUFBVyxDQUFFO0FBQ2pDO0VBQ0Q7QUFFQSxRQUFNNE0sV0FBV0QsWUFBWTtBQUM3QixNQUFJLENBQUNDLFVBQVU7QUFDZHRELHVCQUFtQndELG1DQUFBek4sUUFBQUMsY0FBQ2EsVUFBQSxJQUFTLENBQUU7QUFDL0I7RUFDRDtBQUVBLFFBQU07SUFBQ0Q7RUFBTSxJQUFJME07QUFDakIsTUFBSSxDQUFDMU0sUUFBUTtBQUNab0osdUJBQW1Cd0QsbUNBQUF6TixRQUFBQyxjQUFDYSxVQUFBLElBQVMsQ0FBRTtBQUMvQjtFQUNEO0FBRUEsUUFBTWdOLG1CQUFtQi9CLG1CQUFtQmxMLE1BQU07QUFDbEQsTUFBSWlOLGtCQUFrQjtBQUNyQjdELHVCQUFtQndELG1DQUFBek4sUUFBQUMsY0FBQ1csa0JBQUE7TUFBaUJDO0lBQUEsQ0FBZ0IsQ0FBRTtBQUN2RDtFQUNEO0FBRUEsT0FBS3lKLFNBQVNpRCxRQUFRO0FBQ3ZCLEdBQUc7IiwKICAibmFtZXMiOiBbIkJyb2FkY2FzdENoYW5uZWwiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJmb290ZXJOb3RpY2UiLCAic2VjdGlvbklkU3BhbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQXJjaGl2ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJBcmNoaXZpbmciLCAiQXJjaGl2ZWQiLCAiRGVsZXRlIiwgIkRlbGV0aW5nIiwgIkRlbGV0ZWQiLCAiemgiLCAiUmVmcmVzaCIsICJSZWZyZXNoaW5nIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJzYW5pdGl6ZSIsICJzdHJpbmciLCAicmVwbGFjZSIsICJGb290ZXJOb3RpY2UiLCAiaWQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgIkZyYWdtZW50IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiSW5CbGFja0xpc3QiLCAiTm90QWxsb3dlZCIsICJBcmNMb2NOb3RBbGxvd2VkIiwgImFyY0xvYyIsICJOb0FyY0xvYyIsICJFbmFibGVkIiwgInRpdGxlIiwgImhyZWYiLCAiY29uY2F0IiwgIk9uQ2xpY2siLCAidGV4dENvbnRlbnQiLCAib25DbGljayIsICJTZWN0aW9uSUQiLCAiUGlwZSIsICJFZGl0Q29uZmxpY3ROb3RpY2UiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQ3IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgImdldFNlY3Rpb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwYWdlIiwgInByb3AiLCAicGFyc2UiLCAic2VjdGlvbnMiLCAic2VjdGlvbnNUb0FyY2hpdmUiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAic2VjdGlvbiIsICJ2YWx1ZSIsICJsZXZlbCIsICJpbmRleCIsICJhbmNob3IiLCAic3RhcnRzV2l0aCIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0U2VjdGlvbkNvbnRlbnQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJHF1ZXJ5JHBhZ2VzIiwgIl9yZXNwb25zZSRxdWVyeSRwYWdlczIiLCAicnZwcm9wIiwgInRpdGxlcyIsICJydnNlY3Rpb24iLCAicnZzbG90cyIsICJyZXNwb25zZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgIl94MiIsICJpc1BhZ2VFeGlzdCIsICJfcmVmMyIsICJhcmNoaXZlVG8iLCAiX3F1ZXJ5JHBhZ2VzJCIsICJxdWVyeSIsICJtaXNzaW5nIiwgIl94MyIsICJpc1NlY3Rpb25FeGlzdCIsICJfcmVmNCIsICJ3Z1BhZ2VOYW1lIiwgImlzRXhpc3QiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiX3g0IiwgInJlbW92ZVNlY3Rpb24iLCAiX3JlZjUiLCAic3VtbWFyeSIsICJlZGl0IiwgInRleHQiLCAibWlub3IiLCAiX3g1IiwgImFyY2hpdmVTZWN0aW9uIiwgIl9yZWY2IiwgInBhZ2VFeGlzdCIsICJjcmVhdGUiLCAiYXBwZW5kdGV4dCIsICJfeDYiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJ3Z1NjcmlwdCIsICJyZWZyZXNoIiwgInRhcmdldFBhZ2UiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAidG9hc3RpZnkiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iLCAidXRpbCIsICJnZXRVcmwiLCAicmVwbGFjZUNoaWxkIiwgImVsZW1lbnQiLCAibmV3Q2hpbGQiLCAiaGFzQ2hpbGROb2RlcyIsICJfZWxlbWVudCRmaXJzdENoaWxkIiwgImZpcnN0Q2hpbGQiLCAicmVtb3ZlIiwgImFwcGVuZCIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiYXJjaGl2ZU9uQ2xpY2siLCAiX3JlZjciLCAiZXZlbnQiLCAic2VjdGlvbklkU3BhbnMiLCAibWVzc2FnZUNoYW5uZWwiLCAicmVmcmVzaENoYW5uZWwiLCAiaW5kZXhObyIsICJ0b2FzdCIsICJfZXZlbnQkdGFyZ2V0IiwgInByZXZlbnREZWZhdWx0IiwgInBhcmVudEVsZW1lbnQiLCAidGFyZ2V0IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInNwYW4iLCAibWVzc2FnZTEiLCAicG9zdE1lc3NhZ2UiLCAiY2xvc2UiLCAibWVzc2FnZTIiLCAiX3g3IiwgIl94OCIsICJfeDkiLCAicmVtb3ZlT25DbGljayIsICJfcmVmOCIsICJfZXZlbnQkdGFyZ2V0MiIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfeDEwIiwgIl94MTEiLCAiX3gxMiIsICJBcmNoaXZlU2VjdGlvbkxpbmsiLCAiUmVtb3ZlU2VjdGlvbkxpbmsiLCAiQXJjaGl2ZUFuZERlbGV0ZVNlY3Rpb25MaW5rIiwgInNlY0FyYyIsICJzZWNEZWwiLCAiaW1wb3J0X2V4dF9nYWRnZXQ4IiwgImFwcGVuZEZvb3Rlck5vdGljZSIsICJpbm5lckVsZW1lbnQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicHJlcGVuZCIsICJhZGRMaW5rcyIsICJfcmVmOSIsICJhcmNMZXZlbCIsICJoZWFkaW5ncyIsICJoZWFkbGluZXMiLCAiaGVhZGluZ0luZGljZXMiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAiaGVhZGluZyIsICJoZWFkbGluZSIsICJCcm9hZGNhc3RDaGFubmVsIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgIl9pIiwgIl9oZWFkaW5nSW5kaWNlcyIsICJnZXRFbGVtZW50QnlJZCIsICJwYXJlbnRIZWFkaW5nIiwgImVkaXRTZWN0aW9uIiwgInNlY3Rpb25JRFNwYW4iLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJfaTIiLCAiX3NlY3Rpb25JZFNwYW5zIiwgImRhdGEiLCAibm9kZSIsICJfeDEzIiwgImlmQXJjTG9jTm90QWxsb3dlZCIsICJzb3VyY2VUaXRsZSIsICJUaXRsZSIsICJhcmNMb2NUaXRsZSIsICJhcmNMb2NOYW1lc3BhY2VJZCIsICJnZXROYW1lc3BhY2VJZCIsICJhcmNMb2NQYWdlTmFtZSIsICJnZXRNYWluIiwgInNvdXJjZU5hbWVzcGFjZUlkIiwgInNvdXJjZVBhZ2VOYW1lIiwgImlzSW5CbGFja2xpc3QiLCAiYmxhY2tMaXN0UmVnZXhBcnIiLCAiX2kzIiwgIl9ibGFja0xpc3RSZWdleEFyciIsICJ0ZXN0IiwgImlzTm90QWxsb3dlZCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1JlbGV2YW50VXNlck5hbWUiLCAid2dVc2VyTmFtZSIsICJpc05vdFN1cHBvcnRlZCIsICJ3Z0lzTWFpblBhZ2UiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJnZXRTZXR0aW5ncyIsICJzZXR0aW5ncyIsICJkYXRhc2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0OSIsICJlYXN5QXJjaGl2ZSIsICJub3RTdXBwb3J0ZWQiLCAiaW5CbGFja2xpc3QiLCAibm90QWxsb3dlZCIsICJhcmNMb2NOb3RBbGxvd2VkIl0KfQo=
