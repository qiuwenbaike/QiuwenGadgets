/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EasyArchive-New}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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

// dist/EasyArchive-New/EasyArchive-New.js
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
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
//! src/EasyArchive-New/options.json
var mountPointSelector = "#footer-info,.page-info";
var version = "0.1";
//! src/EasyArchive-New/modules/footerNotice.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
//! src/EasyArchive-New/modules/react.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
var elementWrap = (id, innerElement) => {
  const {
    skin
  } = mw.config.get();
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("section", {
      className: ["page-info__item", "gadget-easy_archive__footer_notice"],
      id
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("li", {
      id,
      className: "gadget-easy_archive__footer_notice"
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    id,
    className: "gadget-easy_archive__footer_notice"
  }, innerElement);
};
var onClickWrap = (textContent, className, onClick) => /* @__PURE__ */ import_ext_gadget.default.createElement("a", {
  class: ["gadget-easy_archive__link", "gadget-easy_archive__link-".concat(className)],
  onClick,
  textContent
});
var pipeElement = () => /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  class: "mw-editsection-divider",
  textContent: "|"
});
var sectionIdSpanElement = () => /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  class: ["gadget-easy_archive__section-id-span"]
});
//! src/EasyArchive-New/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Archive: (0, import_ext_gadget2.localize)({
      en: "archive",
      "zh-hans": "存档",
      "zh-hant": "存檔"
    }),
    "Archive location": (0, import_ext_gadget2.localize)({
      en: "Archive location: ",
      "zh-hans": "存档地址：",
      "zh-hant": "存檔至："
    }),
    "Archive Location not allowed": (0, import_ext_gadget2.localize)({
      en: 'Currently the archive location of this page, "$1", but Easy archive cannot operate like this.',
      "zh-hans": "此页面目前的存档地址是“$1”。Easy Archive 无法按此地址存档。",
      "zh-hant": "此頁面當前的存檔地址是「$1」。Easy Archive 無法按此地址存檔。"
    }),
    "Archive Location not allowed details": (0, import_ext_gadget2.localize)({
      en: "Archives should not be normally directed to pages under article namespace. Please check if you have the correct archive location.",
      "zh-hans": "一般而言，不应向条目名称空间进行存档。此外，存档地址不得和此页面名称相同。请检查存档地址。",
      "zh-hant": "一般而言，不應向條目名稱空間進行存檔。此外，存檔地址不得和此頁面名稱相同。請檢查存檔地址。"
    }),
    Archiving: (0, import_ext_gadget2.localize)({
      en: "being archived",
      "zh-hans": "存档中",
      "zh-hant": "存檔中"
    }),
    Archived: (0, import_ext_gadget2.localize)({
      en: "archived",
      "zh-hans": "已存档",
      "zh-hant": "已存檔"
    }),
    Delete: (0, import_ext_gadget2.localize)({
      en: "delete",
      "zh-hans": "删除",
      "zh-hant": "刪除"
    }),
    Deleting: (0, import_ext_gadget2.localize)({
      en: "being deleted",
      "zh-hans": "删除中",
      "zh-hant": "刪除中"
    }),
    Deleted: (0, import_ext_gadget2.localize)({
      en: "deleted",
      "zh-hans": "已删除",
      "zh-hant": "已刪除"
    }),
    "Archive summary": (0, import_ext_gadget2.localize)({
      en: "archive section",
      "zh-hans": "存档段落",
      "zh-hant": "存檔段落"
    }),
    "Create summary": (0, import_ext_gadget2.localize)({
      en: "create archive",
      "zh-hans": "建立存档",
      "zh-hant": "建立存檔"
    }),
    "Delete summary": (0, import_ext_gadget2.localize)({
      en: "delete section",
      "zh-hans": "删除段落",
      "zh-hant": "刪除段落"
    }),
    "Easy Archive enabled": (0, import_ext_gadget2.localize)({
      en: "Easy Archive is enabled on this talk page",
      "zh-hans": "本讨论页面使用 Easy Archive 快速存档",
      "zh-hant": "此頁面使用 Easy Archive 快速存檔"
    }),
    "Easy Archive not allowed": (0, import_ext_gadget2.localize)({
      en: "You cannot use Easy Archive to archive threads on this page.",
      "zh-hans": "您不可以在此页面使用 Easy Archive 快速存档。",
      "zh-hant": "您不可以在此頁面使用 Easy Archive 快速存檔。"
    }),
    "Easy Archive not supported": (0, import_ext_gadget2.localize)({
      en: "This page is not supported by Easy Archive.",
      "zh-hans": "此页面不支持 Easy Archive。",
      "zh-hant": "此頁面不支持 Easy Archive。"
    }),
    "Easy Archive not supported details": (0, import_ext_gadget2.localize)({
      en: "These pages are not supported by Easy Archive: Article, File, Template, Module, MediaWiki, Category, Special, JavaScript, CSS, JSON.",
      "zh-hans": "这些页面不受 Easy Archive 支持：条目、File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。",
      "zh-hant": "這些頁面不受 Easy Archive 支持：條目，File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。"
    }),
    "No Archive Location": (0, import_ext_gadget2.localize)({
      en: "Easy Archive can be used on this page if needed. To enable it, add {{Easy Archive|to=[Archive location]}} template to this page.",
      "zh-hans": "若需要，此页面可以启用 Easy Archive。若要在此页面使用 Easy Archive，请在页面上添加模板 {{Easy Archive|to=存档位置}}。",
      "zh-hant": "若需要，此頁面可以啟用 Easy Archive。若要在此頁面使用 Easy Archive，請在頁面上添加模板 {{Easy Archive|to=存檔位置}}。"
    }),
    "(": (0, import_ext_gadget2.localize)({
      en: " (",
      zh: "（"
    }),
    ")": (0, import_ext_gadget2.localize)({
      en: ")",
      zh: "）"
    }),
    ".": (0, import_ext_gadget2.localize)({
      en: ".",
      zh: "。"
    }),
    Refreshing: (0, import_ext_gadget2.localize)({
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
//! src/EasyArchive-New/modules/footerNotice.tsx
var footerNotice = (id, innerElement) => {
  var _document$querySelect;
  const tag = elementWrap(id, innerElement);
  (_document$querySelect = document.querySelectorAll(mountPointSelector)[0]) === null || _document$querySelect === void 0 || _document$querySelect.prepend(tag);
};
var sanitize = (string) => string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
var notSupportededFooterNotice = () => {
  footerNotice("easy_archive_not_supported_notice", /* @__PURE__ */ import_ext_gadget3.default.createElement("span", null, getMessage("Easy Archive not supported"), /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null), getMessage("Easy Archive not supported details")));
};
var notAllowededFooterNotice = () => {
  footerNotice("easy_archive_not_allowed_notice", /* @__PURE__ */ import_ext_gadget3.default.createElement("span", null, getMessage("Easy Archive not allowed")));
};
var noArcLocFooterNotice = () => {
  footerNotice("easy_archive_no_arc_loc_notice", /* @__PURE__ */ import_ext_gadget3.default.createElement("span", null, getMessage("No Archive Location")));
};
var arcLocNotAllowedFooterNotice = (arcLoc) => {
  footerNotice("easy_archive_arc_loc_not_allowed_notice", /* @__PURE__ */ import_ext_gadget3.default.createElement("span", null, getMessage("Archive Location not allowed").replace("$1", sanitize(arcLoc)), /* @__PURE__ */ import_ext_gadget3.default.createElement("br", null), getMessage("Archive Location not allowed details")));
};
var enabledFooterNotice = (arcLoc) => {
  footerNotice("easy_archive_supports_notice", /* @__PURE__ */ import_ext_gadget3.default.createElement("span", null, getMessage("Easy Archive enabled"), getMessage("("), getMessage("Archive location"), /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
    title: sanitize(arcLoc),
    href: "/wiki/".concat(sanitize(arcLoc))
  }, sanitize(arcLoc)), getMessage(")"), getMessage(".")));
};
//! src/EasyArchive-New/modules/addLinks.tsx
var import_ext_gadget6 = __toESM(require("ext.gadget.React"), 1);
//! src/EasyArchive-New/modules/api.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var api = (0, import_ext_gadget4.initMwApi)("EasyAchive/".concat(version));
//! src/EasyArchive-New/modules/checkIfPageExist.ts
var checkIfPageExist = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (archiveTo) {
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
  return function checkIfPageExist2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/EasyArchive-New/modules/archiveSection.ts
var archiveSection = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (archiveTo, text) {
    const pageExist = yield checkIfPageExist(archiveTo);
    if (!pageExist) {
      yield api.create(archiveTo, {
        summary: getMessage("Create summary"),
        minor: true
      }, "{{talkarchive}}");
    }
    yield api.edit(archiveTo, () => {
      return {
        appendtext: "\n\n".concat(text),
        summary: getMessage("Archive summary"),
        minor: true
      };
    });
  });
  return function archiveSection2(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/EasyArchive-New/modules/parse.ts
var getSections = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (title) {
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
  return function getSections2(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/EasyArchive-New/modules/checkIfSectionExist.ts
var checkIfSectionExist = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (index, anchor) {
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
  return function checkIfSectionExist2(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
//! src/EasyArchive-New/modules/deleteSection.ts
var deleteSection = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* (title, section, summary) {
    yield api.edit(title, () => {
      return {
        section,
        text: "",
        summary: summary !== null && summary !== void 0 ? summary : getMessage("Delete summary"),
        minor: true
      };
    });
  });
  return function deleteSection2(_x7, _x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
//! src/EasyArchive-New/modules/getSectionContent.ts
var getSectionContent = /* @__PURE__ */ function() {
  var _ref6 = _asyncToGenerator(function* (title, section) {
    var _query$pages$0$revisi;
    const params = {
      action: "query",
      prop: ["revisions"],
      rvprop: "content",
      format: "json",
      formatversion: "2",
      titles: title,
      rvsection: section
    };
    const {
      query
    } = yield api.postWithEditToken(params);
    return (_query$pages$0$revisi = query.pages[0].revisions[0].content) !== null && _query$pages$0$revisi !== void 0 ? _query$pages$0$revisi : null;
  });
  return function getSectionContent2(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();
//! src/EasyArchive-New/modules/archive.ts
var archive = /* @__PURE__ */ function() {
  var _ref7 = _asyncToGenerator(function* (index, anchor, archiveTo) {
    const {
      wgPageName
    } = mw.config.get();
    const ifSectionExist = yield checkIfSectionExist(index, anchor);
    if (ifSectionExist !== true) {
      return;
    }
    const content = yield getSectionContent(wgPageName, index);
    if (content === null) {
      return;
    }
    yield archiveSection(archiveTo, content);
    yield deleteSection(wgPageName, index, getMessage("Archive summary"));
  });
  return function archive2(_x12, _x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
//! src/EasyArchive-New/modules/refreshPage.ts
var import_ext_gadget5 = require("ext.gadget.Toastify");
var {
  wgScript
} = mw.config.get();
var refresh = (targetPage) => {
  (0, import_ext_gadget5.toastify)({
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
//! src/EasyArchive-New/modules/remove.ts
var remove = /* @__PURE__ */ function() {
  var _ref8 = _asyncToGenerator(function* (index, anchor) {
    const {
      wgPageName
    } = mw.config.get();
    const ifSectionExist = yield checkIfSectionExist(index, anchor);
    if (ifSectionExist !== true) {
      return;
    }
    const content = yield getSectionContent(wgPageName, index);
    if (content === null) {
      return;
    }
    yield deleteSection(wgPageName, index);
  });
  return function remove2(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
//! src/EasyArchive-New/modules/replaceChild.ts
var replaceChild = (element, newChild) => {
  while (element.hasChildNodes()) {
    var _element$firstChild;
    (_element$firstChild = element.firstChild) === null || _element$firstChild === void 0 || _element$firstChild.remove();
  }
  element.append(newChild);
};
//! src/EasyArchive-New/modules/addLinks.tsx
var import_ext_gadget7 = require("ext.gadget.Toastify");
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
      const sectionIdSpan = sectionIdSpanElement();
      if (secArc === "1") {
        sectionIdSpan.append(onClickWrap(getMessage("Archive"), "archive", (event) => {
          var _event$target;
          event.preventDefault();
          const parentElement = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.parentElement;
          if (!parentElement) {
            return;
          }
          replaceChild(parentElement, /* @__PURE__ */ import_ext_gadget6.default.createElement("span", null, getMessage("Archiving")));
          let toastifyInstance = {
            hideToast: () => {
            }
          };
          toastifyInstance = (0, import_ext_gadget7.toastify)({
            text: getMessage("Archiving"),
            duration: -1
          }, "info");
          void archive(index, id, arcLoc).then(() => {
            toastifyInstance.hideToast();
            replaceChild(parentElement, /* @__PURE__ */ import_ext_gadget6.default.createElement("span", null, getMessage("Archived")));
            toastifyInstance = (0, import_ext_gadget7.toastify)({
              text: getMessage("Archived"),
              duration: 3 * 1e3
            }, "success");
            refresh();
          });
        }));
      }
      if (secArc === "1" && secDel === "1") {
        sectionIdSpan.append(pipeElement());
      }
      if (secDel === "1") {
        sectionIdSpan.append(onClickWrap(getMessage("Delete"), "delete", (event) => {
          var _event$target2;
          event.preventDefault();
          const parentElement = (_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.parentElement;
          if (!parentElement) {
            return;
          }
          replaceChild(parentElement, /* @__PURE__ */ import_ext_gadget6.default.createElement("span", null, getMessage("Deleting")));
          let toastifyInstance = {
            hideToast: () => {
            }
          };
          toastifyInstance = (0, import_ext_gadget7.toastify)({
            text: getMessage("Deleting"),
            duration: -1
          }, "info");
          void remove(index, id).then(() => {
            toastifyInstance.hideToast();
            replaceChild(parentElement, /* @__PURE__ */ import_ext_gadget6.default.createElement("span", null, getMessage("Deleted")));
            toastifyInstance = (0, import_ext_gadget7.toastify)({
              text: getMessage("Deleted"),
              duration: 3 * 1e3
            }, "success");
            refresh();
          });
        }));
      }
      editSection.prepend(sectionIdSpan);
    }
  });
  return function addLinks2(_x17) {
    return _ref9.apply(this, arguments);
  };
}();
//! src/EasyArchive-New/modules/settings.ts
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
//! src/EasyArchive-New/modules/ifArcLocNotAllowed.ts
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
//! src/EasyArchive-New/modules/isNotAllowed.ts
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
//! src/EasyArchive-New/modules/isNotSupported.ts
var isNotSupported = () => {
  const {
    wgIsMainPage,
    wgNamespaceNumber,
    wgPageName,
    wgCurRevisionId,
    wgRevisionId
  } = mw.config.get();
  const blackListRegexArr = [/^File:.*$/, /^MediaWiki:.*$/, /^Module:.*$/, /^Category:.*$/, /^Template:.*$/, /^Special:.*$/, /^User:.*\/?.*\.js$/, /^User:.*\/?.*\.css$/, /^User:.*\/?.*\.json$/];
  for (var _i2 = 0, _blackListRegexArr = blackListRegexArr; _i2 < _blackListRegexArr.length; _i2++) {
    const element = _blackListRegexArr[_i2];
    if (element.test(wgPageName)) {
      return true;
    }
  }
  if (wgNamespaceNumber < 0 || wgCurRevisionId - wgRevisionId !== 0) {
    return true;
  }
  if (wgNamespaceNumber === 0 || wgIsMainPage) {
    return true;
  }
  return false;
};
//! src/EasyArchive-New/EasyArchive-New.ts
(function easyArchive() {
  const notSupported = isNotSupported();
  if (notSupported) {
    notSupportededFooterNotice();
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
    arcLevel,
    arcLoc,
    secArc,
    secDel
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
  void addLinks({
    arcLevel,
    arcLoc,
    secArc,
    secDel
  });
  enabledFooterNotice(arcLoc);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlLU5ldy9vcHRpb25zLmpzb24iLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2Zvb3Rlck5vdGljZS50c3giLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL3JlYWN0LnRzeCIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvYWRkTGlua3MudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9hcGkudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2NoZWNrSWZQYWdlRXhpc3QudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2FyY2hpdmVTZWN0aW9uLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9wYXJzZS50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvY2hlY2tJZlNlY3Rpb25FeGlzdC50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvZGVsZXRlU2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvZ2V0U2VjdGlvbkNvbnRlbnQudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2FyY2hpdmUudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL3JlZnJlc2hQYWdlLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9yZW1vdmUudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL3JlcGxhY2VDaGlsZC50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvc2V0dGluZ3MudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2lmQXJjTG9jTm90QWxsb3dlZC50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvaXNOb3RBbGxvd2VkLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9pc05vdFN1cHBvcnRlZC50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L0Vhc3lBcmNoaXZlLU5ldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwidmVyc2lvblwiOiBcIjAuMVwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7ZWxlbWVudFdyYXB9IGZyb20gJy4vcmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBmb290ZXJOb3RpY2UgPSAoaWQ6IHN0cmluZywgaW5uZXJFbGVtZW50OiBIVE1MRWxlbWVudCB8IFJlYWN0RWxlbWVudCkgPT4ge1xuXHRjb25zdCB0YWcgPSBlbGVtZW50V3JhcChpZCwgaW5uZXJFbGVtZW50KTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpWzBdPy5wcmVwZW5kKHRhZyk7XG59O1xuXG5jb25zdCBzYW5pdGl6ZSA9IChzdHJpbmc6IHN0cmluZykgPT5cblx0c3RyaW5nXG5cdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cbmNvbnN0IG5vdFN1cHBvcnRlZGVkRm9vdGVyTm90aWNlID0gKCkgPT4ge1xuXHRmb290ZXJOb3RpY2UoXG5cdFx0J2Vhc3lfYXJjaGl2ZV9ub3Rfc3VwcG9ydGVkX25vdGljZScsXG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQnKX1cblx0XHRcdDxiciAvPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkIGRldGFpbHMnKX1cblx0XHQ8L3NwYW4+XG5cdCk7XG59O1xuXG5jb25zdCBub3RBbGxvd2VkZWRGb290ZXJOb3RpY2UgPSAoKSA9PiB7XG5cdGZvb3Rlck5vdGljZSgnZWFzeV9hcmNoaXZlX25vdF9hbGxvd2VkX25vdGljZScsIDxzcGFuPntnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IGFsbG93ZWQnKX08L3NwYW4+KTtcbn07XG5cbmNvbnN0IG5vQXJjTG9jRm9vdGVyTm90aWNlID0gKCkgPT4ge1xuXHRmb290ZXJOb3RpY2UoJ2Vhc3lfYXJjaGl2ZV9ub19hcmNfbG9jX25vdGljZScsIDxzcGFuPntnZXRNZXNzYWdlKCdObyBBcmNoaXZlIExvY2F0aW9uJyl9PC9zcGFuPik7XG59O1xuXG5jb25zdCBhcmNMb2NOb3RBbGxvd2VkRm9vdGVyTm90aWNlID0gKGFyY0xvYzogc3RyaW5nKSA9PiB7XG5cdGZvb3Rlck5vdGljZShcblx0XHQnZWFzeV9hcmNoaXZlX2FyY19sb2Nfbm90X2FsbG93ZWRfbm90aWNlJyxcblx0XHQ8c3Bhbj5cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkJykucmVwbGFjZSgnJDEnLCBzYW5pdGl6ZShhcmNMb2MpKX1cblx0XHRcdDxiciAvPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQgZGV0YWlscycpfVxuXHRcdDwvc3Bhbj5cblx0KTtcbn07XG5cbmNvbnN0IGVuYWJsZWRGb290ZXJOb3RpY2UgPSAoYXJjTG9jOiBzdHJpbmcpID0+IHtcblx0Zm9vdGVyTm90aWNlKFxuXHRcdCdlYXN5X2FyY2hpdmVfc3VwcG9ydHNfbm90aWNlJyxcblx0XHQ8c3Bhbj5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgZW5hYmxlZCcpfVxuXHRcdFx0e2dldE1lc3NhZ2UoJygnKX1cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIGxvY2F0aW9uJyl9XG5cdFx0XHQ8YSB0aXRsZT17c2FuaXRpemUoYXJjTG9jKX0gaHJlZj17YC93aWtpLyR7c2FuaXRpemUoYXJjTG9jKX1gfT5cblx0XHRcdFx0e3Nhbml0aXplKGFyY0xvYyl9XG5cdFx0XHQ8L2E+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnKScpfVxuXHRcdFx0e2dldE1lc3NhZ2UoJy4nKX1cblx0XHQ8L3NwYW4+XG5cdCk7XG59O1xuXG5leHBvcnQge1xuXHRmb290ZXJOb3RpY2UsXG5cdG5vdFN1cHBvcnRlZGVkRm9vdGVyTm90aWNlLFxuXHRub3RBbGxvd2VkZWRGb290ZXJOb3RpY2UsXG5cdG5vQXJjTG9jRm9vdGVyTm90aWNlLFxuXHRhcmNMb2NOb3RBbGxvd2VkRm9vdGVyTm90aWNlLFxuXHRlbmFibGVkRm9vdGVyTm90aWNlLFxufTtcbiIsICJpbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9IChpZDogc3RyaW5nLCBpbm5lckVsZW1lbnQ6IFJlYWN0RWxlbWVudCkgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1sncGFnZS1pbmZvX19pdGVtJywgJ2dhZGdldC1lYXN5X2FyY2hpdmVfX2Zvb3Rlcl9ub3RpY2UnXX0gaWQ9e2lkfT5cblx0XHRcdFx0e2lubmVyRWxlbWVudH1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9IGVsc2UgaWYgKFsndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJywgJ2dvbmdiaSddLmluY2x1ZGVzKHNraW4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGlkPXtpZH0gY2xhc3NOYW1lPXsnZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fZm9vdGVyX25vdGljZSd9PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9saT5cblx0XHQpO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD17aWR9IGNsYXNzTmFtZT17J2dhZGdldC1lYXN5X2FyY2hpdmVfX2Zvb3Rlcl9ub3RpY2UnfT5cblx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5jb25zdCBvbkNsaWNrV3JhcCA9ICh0ZXh0Q29udGVudDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZywgb25DbGljaz86IChldmVudDogRXZlbnQpID0+IHZvaWQpID0+IChcblx0PGFcblx0XHRjbGFzcz17WydnYWRnZXQtZWFzeV9hcmNoaXZlX19saW5rJywgYGdhZGdldC1lYXN5X2FyY2hpdmVfX2xpbmstJHtjbGFzc05hbWV9YF19XG5cdFx0b25DbGljaz17b25DbGlja31cblx0XHR0ZXh0Q29udGVudD17dGV4dENvbnRlbnR9XG5cdC8+XG4pO1xuXG5jb25zdCBwaXBlRWxlbWVudCA9ICgpID0+IDxzcGFuIGNsYXNzPVwibXctZWRpdHNlY3Rpb24tZGl2aWRlclwiIHRleHRDb250ZW50PXsnfCd9IC8+O1xuXG5jb25zdCBzZWN0aW9uSWRTcGFuRWxlbWVudCA9ICgpID0+IDxzcGFuIGNsYXNzPXtbJ2dhZGdldC1lYXN5X2FyY2hpdmVfX3NlY3Rpb24taWQtc3BhbiddfSAvPjtcblxuY29uc3Qgc3BhbiA9IChpbm5lckhUTUw6IHN0cmluZykgPT4gPHNwYW4gaW5uZXJIVE1MPXtpbm5lckhUTUx9IC8+O1xuXG5leHBvcnQge2VsZW1lbnRXcmFwLCBvbkNsaWNrV3JhcCwgcGlwZUVsZW1lbnQsIHNlY3Rpb25JZFNwYW5FbGVtZW50LCBzcGFufTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QXJjaGl2ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIGxvY2F0aW9uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlIGxvY2F0aW9uOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5Zyw5Z2A77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOiHs++8micsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGUgYXJjaGl2ZSBsb2NhdGlvbiBvZiB0aGlzIHBhZ2UsIFwiJDFcIiwgYnV0IEVhc3kgYXJjaGl2ZSBjYW5ub3Qgb3BlcmF0ZSBsaWtlIHRoaXMuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouebruWJjeeahOWtmOaho+WcsOWdgOaYr+KAnCQx4oCd44CCRWFzeSBBcmNoaXZlIOaXoOazleaMieatpOWcsOWdgOWtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLnlbbliY3nmoTlrZjmqpTlnLDlnYDmmK/jgIwkMeOAjeOAgkVhc3kgQXJjaGl2ZSDnhKHms5XmjInmraTlnLDlnYDlrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkIGRldGFpbHMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmVzIHNob3VsZCBub3QgYmUgbm9ybWFsbHkgZGlyZWN0ZWQgdG8gcGFnZXMgdW5kZXIgYXJ0aWNsZSBuYW1lc3BhY2UuIFBsZWFzZSBjaGVjayBpZiB5b3UgaGF2ZSB0aGUgY29ycmVjdCBhcmNoaXZlIGxvY2F0aW9uLicsXG5cdFx0XHQnemgtaGFucyc6ICfkuIDoiKzogIzoqIDvvIzkuI3lupTlkJHmnaHnm67lkI3np7Dnqbrpl7Tov5vooYzlrZjmoaPjgILmraTlpJbvvIzlrZjmoaPlnLDlnYDkuI3lvpflkozmraTpobXpnaLlkI3np7Dnm7jlkIzjgILor7fmo4Dmn6XlrZjmoaPlnLDlnYDjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiA6Iis6ICM6KiA77yM5LiN5oeJ5ZCR5qKd55uu5ZCN56ix56m66ZaT6YCy6KGM5a2Y5qqU44CC5q2k5aSW77yM5a2Y5qqU5Zyw5Z2A5LiN5b6X5ZKM5q2k6aCB6Z2i5ZCN56ix55u45ZCM44CC6KuL5qqi5p+l5a2Y5qqU5Zyw5Z2A44CCJyxcblx0XHR9KSxcblx0XHRBcmNoaXZpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYmVpbmcgYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOS4rScsXG5cdFx0fSksXG5cdFx0QXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWtmOaqlCcsXG5cdFx0fSksXG5cdFx0RGVsZXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZScsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHREZWxldGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOS4rScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTkuK0nLFxuXHRcdH0pLFxuXHRcdERlbGV0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOauteiQvScsXG5cdFx0fSksXG5cdFx0J0NyZWF0ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdjcmVhdGUgYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflu7rnq4vlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bu656uL5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRGVsZXRlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOauteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgZW5hYmxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGlzIGVuYWJsZWQgb24gdGhpcyB0YWxrIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pys6K6o6K666aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgbm90IGFsbG93ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdSBjYW5ub3QgdXNlIEVhc3kgQXJjaGl2ZSB0byBhcmNoaXZlIHRocmVhZHMgb24gdGhpcyBwYWdlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmgqjkuI3lj6/ku6XlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaho+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmgqjkuI3lj6/ku6XlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmUuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkIGRldGFpbHMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZXNlIHBhZ2VzIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZTogQXJ0aWNsZSwgRmlsZSwgVGVtcGxhdGUsIE1vZHVsZSwgTWVkaWFXaWtpLCBDYXRlZ29yeSwgU3BlY2lhbCwgSmF2YVNjcmlwdCwgQ1NTLCBKU09OLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfov5nkupvpobXpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8muadoeebruOAgUZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+mAmeS6m+mggemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77ya5qKd55uu77yMRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdH0pLFxuXHRcdCdObyBBcmNoaXZlIExvY2F0aW9uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgY2FuIGJlIHVzZWQgb24gdGhpcyBwYWdlIGlmIG5lZWRlZC4gVG8gZW5hYmxlIGl0LCBhZGQge3tFYXN5IEFyY2hpdmV8dG89W0FyY2hpdmUgbG9jYXRpb25dfX0gdGVtcGxhdGUgdG8gdGhpcyBwYWdlLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfoi6XpnIDopoHvvIzmraTpobXpnaLlj6/ku6XlkK/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOivt+WcqOmhtemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmoaPkvY3nva59feOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfoi6XpnIDopoHvvIzmraTpoIHpnaLlj6/ku6XllZ/nlKggRWFzeSBBcmNoaXZl44CC6Iul6KaB5Zyo5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2Ze+8jOiri+WcqOmggemdouS4iua3u+WKoOaooeadvyB7e0Vhc3kgQXJjaGl2ZXx0bz3lrZjmqpTkvY3nva59feOAgicsXG5cdFx0fSksXG5cdFx0JygnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJyxcblx0XHRcdHpoOiAn77yIJyxcblx0XHR9KSxcblx0XHQnKSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnKScsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0Jy4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHRcdFJlZnJlc2hpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVmcmVzaGluZy4uLicsXG5cdFx0XHRqYTogJ+WGjeiqreOBv+i+vOOBv+OBl+OBvuOBmS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfljbPlsIbliLfmlrDlvZPliY3pobXpnaLigKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Y2z5bCH6YeN5paw6LyJ5YWl55W25YmN6aCB4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtvbkNsaWNrV3JhcCwgcGlwZUVsZW1lbnQsIHNlY3Rpb25JZFNwYW5FbGVtZW50fSBmcm9tICcuL3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YXJjaGl2ZX0gZnJvbSAnLi9hcmNoaXZlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0U2VjdGlvbnN9IGZyb20gJy4vcGFyc2UnO1xuaW1wb3J0IHtyZWZyZXNofSBmcm9tICcuL3JlZnJlc2hQYWdlJztcbmltcG9ydCB7cmVtb3ZlfSBmcm9tICcuL3JlbW92ZSc7XG5pbXBvcnQge3JlcGxhY2VDaGlsZH0gZnJvbSAnLi9yZXBsYWNlQ2hpbGQnO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGFkZExpbmtzID0gYXN5bmMgKHtcblx0YXJjTGV2ZWwsXG5cdGFyY0xvYyxcblx0c2VjQXJjLFxuXHRzZWNEZWwsXG59OiB7XG5cdGFyY0xldmVsOiBzdHJpbmc7XG5cdGFyY0xvYzogc3RyaW5nO1xuXHRzZWNBcmM6IHN0cmluZztcblx0c2VjRGVsOiBzdHJpbmc7XG59KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRjb25zdCBoZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGgke2FyY0xldmVsfWApO1xuXHRjb25zdCBoZWFkbGluZXMgPSBbXTtcblx0Y29uc3QgaGVhZGluZ0luZGljZXMgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGhlYWRpbmcgb2YgaGVhZGluZ3MpIHtcblx0XHRjb25zdCBoZWFkbGluZSA9IGhlYWRpbmcucXVlcnlTZWxlY3RvcignLm13LWhlYWRsaW5lJyk7XG5cdFx0aGVhZGxpbmVzW2hlYWRsaW5lcy5sZW5ndGhdID0gaGVhZGxpbmU/LmlkO1xuXHR9XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zVG9BcmNoaXZlKSB7XG5cdFx0aWYgKHNlY3Rpb24ubGV2ZWwgIT09IGFyY0xldmVsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoaGVhZGxpbmVzLmluY2x1ZGVzKHNlY3Rpb24uYW5jaG9yKSkge1xuXHRcdFx0aGVhZGluZ0luZGljZXNbaGVhZGluZ0luZGljZXMubGVuZ3RoXSA9IHtcblx0XHRcdFx0aW5kZXg6IHNlY3Rpb24uaW5kZXgsXG5cdFx0XHRcdGlkOiBzZWN0aW9uLmFuY2hvcixcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCB7aW5kZXgsIGlkfSBvZiBoZWFkaW5nSW5kaWNlcykge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1xdWVyeS1zZWxlY3RvclxuXHRcdGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRcdGlmICghaGVhZGxpbmUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhcmVudEhlYWRpbmcgPSBoZWFkbGluZS5wYXJlbnRFbGVtZW50O1xuXHRcdGlmICghcGFyZW50SGVhZGluZykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdFNlY3Rpb24gPSBwYXJlbnRIZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdGlmICghZWRpdFNlY3Rpb24pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlY3Rpb25JZFNwYW4gPSBzZWN0aW9uSWRTcGFuRWxlbWVudCgpO1xuXHRcdGlmIChzZWNBcmMgPT09ICcxJykge1xuXHRcdFx0c2VjdGlvbklkU3Bhbi5hcHBlbmQoXG5cdFx0XHRcdG9uQ2xpY2tXcmFwKGdldE1lc3NhZ2UoJ0FyY2hpdmUnKSwgJ2FyY2hpdmUnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGNvbnN0IHBhcmVudEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8ucGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHRpZiAoIXBhcmVudEVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVwbGFjZUNoaWxkKHBhcmVudEVsZW1lbnQsIDxzcGFuPntnZXRNZXNzYWdlKCdBcmNoaXZpbmcnKX08L3NwYW4+KTtcblx0XHRcdFx0XHRsZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0XHRcdFx0XHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0FyY2hpdmluZycpLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J2luZm8nXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR2b2lkIGFyY2hpdmUoaW5kZXgsIGlkLCBhcmNMb2MpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdFx0XHRcdHJlcGxhY2VDaGlsZChwYXJlbnRFbGVtZW50LCA8c3Bhbj57Z2V0TWVzc2FnZSgnQXJjaGl2ZWQnKX08L3NwYW4+KTtcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0FyY2hpdmVkJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMgKiAxMDAwLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnc3VjY2Vzcydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRyZWZyZXNoKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoc2VjQXJjID09PSAnMScgJiYgc2VjRGVsID09PSAnMScpIHtcblx0XHRcdHNlY3Rpb25JZFNwYW4uYXBwZW5kKHBpcGVFbGVtZW50KCkpO1xuXHRcdH1cblx0XHRpZiAoc2VjRGVsID09PSAnMScpIHtcblx0XHRcdHNlY3Rpb25JZFNwYW4uYXBwZW5kKFxuXHRcdFx0XHRvbkNsaWNrV3JhcChnZXRNZXNzYWdlKCdEZWxldGUnKSwgJ2RlbGV0ZScsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0Y29uc3QgcGFyZW50RWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpPy5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRcdGlmICghcGFyZW50RWxlbWVudCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXBsYWNlQ2hpbGQocGFyZW50RWxlbWVudCwgPHNwYW4+e2dldE1lc3NhZ2UoJ0RlbGV0aW5nJyl9PC9zcGFuPik7XG5cdFx0XHRcdFx0bGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdFx0XHRcdFx0XHRoaWRlVG9hc3Q6ICgpID0+IHt9LFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdEZWxldGluZycpLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J2luZm8nXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR2b2lkIHJlbW92ZShpbmRleCwgaWQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdFx0XHRcdHJlcGxhY2VDaGlsZChwYXJlbnRFbGVtZW50LCA8c3Bhbj57Z2V0TWVzc2FnZSgnRGVsZXRlZCcpfTwvc3Bhbj4pO1xuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRGVsZXRlZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3N1Y2Nlc3MnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmVmcmVzaCgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0ZWRpdFNlY3Rpb24ucHJlcGVuZChzZWN0aW9uSWRTcGFuKTtcblx0fVxufTtcblxuZXhwb3J0IHthZGRMaW5rc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBFYXN5QWNoaXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgY2hlY2tJZlBhZ2VFeGlzdCA9IGFzeW5jIChhcmNoaXZlVG86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbmZvJyxcblx0XHR0aXRsZXM6IGFyY2hpdmVUbyxcblx0fTtcblxuXHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdGlmIChxdWVyeS5wYWdlc1swXT8ubWlzc2luZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tJZlBhZ2VFeGlzdH07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Y2hlY2tJZlBhZ2VFeGlzdH0gZnJvbSAnLi9jaGVja0lmUGFnZUV4aXN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYXJjaGl2ZVNlY3Rpb24gPSBhc3luYyAoYXJjaGl2ZVRvOiBzdHJpbmcsIHRleHQ6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYWdlRXhpc3QgPSBhd2FpdCBjaGVja0lmUGFnZUV4aXN0KGFyY2hpdmVUbyk7XG5cdGlmICghcGFnZUV4aXN0KSB7XG5cdFx0YXdhaXQgYXBpLmNyZWF0ZShcblx0XHRcdGFyY2hpdmVUbyxcblx0XHRcdHtcblx0XHRcdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnQ3JlYXRlIHN1bW1hcnknKSxcblx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0J3t7dGFsa2FyY2hpdmV9fSdcblx0XHQpO1xuXHR9XG5cdGF3YWl0IGFwaS5lZGl0KGFyY2hpdmVUbywgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcHBlbmR0ZXh0OiBgXFxuXFxuJHt0ZXh0fWAsXG5cdFx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdBcmNoaXZlIHN1bW1hcnknKSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xufTtcblxuZXhwb3J0IHthcmNoaXZlU2VjdGlvbn07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgZ2V0U2VjdGlvbnMgPSBhc3luYyAodGl0bGU6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cGFnZTogdGl0bGUsXG5cdFx0cHJvcDogJ3NlY3Rpb25zJyxcblx0fTtcblxuXHRjb25zdCB7cGFyc2V9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdGNvbnN0IHtcblx0XHRzZWN0aW9ucyxcblx0fToge1xuXHRcdHNlY3Rpb25zOiB7XG5cdFx0XHRsZXZlbDogc3RyaW5nO1xuXHRcdFx0aW5kZXg6IHN0cmluZztcblx0XHRcdGFuY2hvcjogc3RyaW5nO1xuXHRcdH1bXTtcblx0fSA9IHBhcnNlO1xuXG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gW107XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0Y29uc3Qge2xldmVsLCBpbmRleCwgYW5jaG9yfSA9IHNlY3Rpb247XG5cblx0XHRpZiAoaW5kZXguc3RhcnRzV2l0aCgnVC0nKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0c2VjdGlvbnNUb0FyY2hpdmVbc2VjdGlvbnNUb0FyY2hpdmUubGVuZ3RoXSA9IHtcblx0XHRcdGxldmVsLFxuXHRcdFx0aW5kZXgsXG5cdFx0XHRhbmNob3IsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBzZWN0aW9uc1RvQXJjaGl2ZTtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbnN9O1xuIiwgImltcG9ydCB7Z2V0U2VjdGlvbnN9IGZyb20gJy4vcGFyc2UnO1xuXG5jb25zdCBjaGVja0lmU2VjdGlvbkV4aXN0ID0gYXN5bmMgKGluZGV4OiBzdHJpbmcsIGFuY2hvcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnMgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRsZXQgaWZTZWN0aW9uRXhpc3QgPSBmYWxzZTtcblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0aWYgKGluZGV4ID09PSBzZWN0aW9uLmluZGV4ICYmIGFuY2hvciA9PT0gc2VjdGlvbi5hbmNob3IpIHtcblx0XHRcdGlmU2VjdGlvbkV4aXN0ID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGlmU2VjdGlvbkV4aXN0O1xufTtcblxuZXhwb3J0IHtjaGVja0lmU2VjdGlvbkV4aXN0fTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBkZWxldGVTZWN0aW9uID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcsIHNlY3Rpb246IHN0cmluZywgc3VtbWFyeT86IHN0cmluZykgPT4ge1xuXHRhd2FpdCBhcGkuZWRpdCh0aXRsZSwgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZWN0aW9uLFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRzdW1tYXJ5OiBzdW1tYXJ5ID8/IGdldE1lc3NhZ2UoJ0RlbGV0ZSBzdW1tYXJ5JyksXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7ZGVsZXRlU2VjdGlvbn07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgZ2V0U2VjdGlvbkNvbnRlbnQgPSBhc3luYyAodGl0bGU6IHN0cmluZywgc2VjdGlvbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHRpdGxlczogdGl0bGUsXG5cdFx0cnZzZWN0aW9uOiBzZWN0aW9uLFxuXHR9O1xuXG5cdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cblx0cmV0dXJuIHF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5jb250ZW50ID8/IG51bGw7XG59O1xuXG5leHBvcnQge2dldFNlY3Rpb25Db250ZW50fTtcbiIsICJpbXBvcnQge2FyY2hpdmVTZWN0aW9ufSBmcm9tICcuL2FyY2hpdmVTZWN0aW9uJztcbmltcG9ydCB7Y2hlY2tJZlNlY3Rpb25FeGlzdH0gZnJvbSAnLi9jaGVja0lmU2VjdGlvbkV4aXN0JztcbmltcG9ydCB7ZGVsZXRlU2VjdGlvbn0gZnJvbSAnLi9kZWxldGVTZWN0aW9uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9IGZyb20gJy4vZ2V0U2VjdGlvbkNvbnRlbnQnO1xuXG5jb25zdCBhcmNoaXZlID0gYXN5bmMgKGluZGV4OiBzdHJpbmcsIGFuY2hvcjogc3RyaW5nLCBhcmNoaXZlVG86IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlmU2VjdGlvbkV4aXN0ID0gYXdhaXQgY2hlY2tJZlNlY3Rpb25FeGlzdChpbmRleCwgYW5jaG9yKTtcblxuXHRpZiAoaWZTZWN0aW9uRXhpc3QgIT09IHRydWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0U2VjdGlvbkNvbnRlbnQod2dQYWdlTmFtZSwgaW5kZXgpO1xuXG5cdGlmIChjb250ZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGF3YWl0IGFyY2hpdmVTZWN0aW9uKGFyY2hpdmVUbywgY29udGVudCk7XG5cdGF3YWl0IGRlbGV0ZVNlY3Rpb24od2dQYWdlTmFtZSwgaW5kZXgsIGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpKTtcbn07XG5cbmV4cG9ydCB7YXJjaGl2ZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHt3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IHJlZnJlc2ggPSAodGFyZ2V0UGFnZT86IHN0cmluZyk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdSZWZyZXNoaW5nJyksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxvY2F0aW9uLnJlcGxhY2UoXG5cdFx0bXcudXRpbC5nZXRVcmwod2dTY3JpcHQsIHtcblx0XHRcdHRpdGxlOiB0YXJnZXRQYWdlID8/IHdnUGFnZU5hbWUsXG5cdFx0fSlcblx0KTtcbn07XG5cbmV4cG9ydCB7cmVmcmVzaH07XG4iLCAiaW1wb3J0IHtjaGVja0lmU2VjdGlvbkV4aXN0fSBmcm9tICcuL2NoZWNrSWZTZWN0aW9uRXhpc3QnO1xuaW1wb3J0IHtkZWxldGVTZWN0aW9ufSBmcm9tICcuL2RlbGV0ZVNlY3Rpb24nO1xuaW1wb3J0IHtnZXRTZWN0aW9uQ29udGVudH0gZnJvbSAnLi9nZXRTZWN0aW9uQ29udGVudCc7XG5cbmNvbnN0IHJlbW92ZSA9IGFzeW5jIChpbmRleDogc3RyaW5nLCBhbmNob3I6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlmU2VjdGlvbkV4aXN0ID0gYXdhaXQgY2hlY2tJZlNlY3Rpb25FeGlzdChpbmRleCwgYW5jaG9yKTtcblxuXHRpZiAoaWZTZWN0aW9uRXhpc3QgIT09IHRydWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0U2VjdGlvbkNvbnRlbnQod2dQYWdlTmFtZSwgaW5kZXgpO1xuXG5cdGlmIChjb250ZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXdhaXQgZGVsZXRlU2VjdGlvbih3Z1BhZ2VOYW1lLCBpbmRleCk7XG59O1xuXG5leHBvcnQge3JlbW92ZX07XG4iLCAiY29uc3QgcmVwbGFjZUNoaWxkID0gKGVsZW1lbnQ6IEVsZW1lbnQsIG5ld0NoaWxkOiBFbGVtZW50KTogdm9pZCA9PiB7XG5cdHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdGVsZW1lbnQuZmlyc3RDaGlsZD8ucmVtb3ZlKCk7XG5cdH1cblx0ZWxlbWVudC5hcHBlbmQobmV3Q2hpbGQpO1xufTtcblxuZXhwb3J0IHtyZXBsYWNlQ2hpbGR9O1xuIiwgImNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHtkYXRhc2V0fSA9IHNldHRpbmdzO1xuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gZGF0YXNldDtcblx0cmV0dXJuIHtcblx0XHRhcmNMZXZlbDogYXJjTGV2ZWwgPz8gJzInLFxuXHRcdGFyY0xvYzogYXJjTG9jID8/IG51bGwsXG5cdFx0c2VjQXJjOiBzZWNBcmMgPz8gJzEnLFxuXHRcdHNlY0RlbDogc2VjRGVsID8/ICcxJyxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2V0U2V0dGluZ3N9O1xuIiwgImNvbnN0IGlmQXJjTG9jTm90QWxsb3dlZCA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNvdXJjZVRpdGxlID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpO1xuXHRjb25zdCBhcmNMb2NUaXRsZSA9IG5ldyBtdy5UaXRsZShhcmNMb2MpO1xuXG5cdGNvbnN0IGFyY0xvY05hbWVzcGFjZUlkID0gYXJjTG9jVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3QgYXJjTG9jUGFnZU5hbWUgPSBhcmNMb2NUaXRsZS5nZXRNYWluKCk7XG5cdGNvbnN0IHNvdXJjZU5hbWVzcGFjZUlkID0gc291cmNlVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3Qgc291cmNlUGFnZU5hbWUgPSBzb3VyY2VUaXRsZS5nZXRNYWluKCk7XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoYXJjTG9jTmFtZXNwYWNlSWQgPT09IHNvdXJjZU5hbWVzcGFjZUlkICYmIGFyY0xvY1BhZ2VOYW1lID09PSBzb3VyY2VQYWdlTmFtZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHtpZkFyY0xvY05vdEFsbG93ZWR9O1xuIiwgImNvbnN0IGlzTm90QWxsb3dlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1JlbGV2YW50VXNlck5hbWUsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICgod2dOYW1lc3BhY2VOdW1iZXIgPT09IDIgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDMpICYmICEod2dSZWxldmFudFVzZXJOYW1lID09PSB3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHtpc05vdEFsbG93ZWR9O1xuIiwgImNvbnN0IGlzTm90U3VwcG9ydGVkID0gKCkgPT4ge1xuXHRjb25zdCB7d2dJc01haW5QYWdlLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dDdXJSZXZpc2lvbklkLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGJsYWNrTGlzdFJlZ2V4QXJyID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja0xpc3RSZWdleEFycikge1xuXHRcdGlmIChlbGVtZW50LnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDAgfHwgd2dDdXJSZXZpc2lvbklkIC0gd2dSZXZpc2lvbklkICE9PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDAgfHwgd2dJc01haW5QYWdlKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQge2lzTm90U3VwcG9ydGVkfTtcbiIsICJpbXBvcnQgJy4vRWFzeUFyY2hpdmUtTmV3Lmxlc3MnO1xuaW1wb3J0IHtcblx0YXJjTG9jTm90QWxsb3dlZEZvb3Rlck5vdGljZSxcblx0ZW5hYmxlZEZvb3Rlck5vdGljZSxcblx0bm9BcmNMb2NGb290ZXJOb3RpY2UsXG5cdG5vdEFsbG93ZWRlZEZvb3Rlck5vdGljZSxcblx0bm90U3VwcG9ydGVkZWRGb290ZXJOb3RpY2UsXG59IGZyb20gJy4vbW9kdWxlcy9mb290ZXJOb3RpY2UnO1xuaW1wb3J0IHthZGRMaW5rc30gZnJvbSAnLi9tb2R1bGVzL2FkZExpbmtzJztcbmltcG9ydCB7Z2V0U2V0dGluZ3N9IGZyb20gJy4vbW9kdWxlcy9zZXR0aW5ncyc7XG5pbXBvcnQge2lmQXJjTG9jTm90QWxsb3dlZH0gZnJvbSAnLi9tb2R1bGVzL2lmQXJjTG9jTm90QWxsb3dlZCc7XG5pbXBvcnQge2lzTm90QWxsb3dlZH0gZnJvbSAnLi9tb2R1bGVzL2lzTm90QWxsb3dlZCc7XG5pbXBvcnQge2lzTm90U3VwcG9ydGVkfSBmcm9tICcuL21vZHVsZXMvaXNOb3RTdXBwb3J0ZWQnO1xuXG4oZnVuY3Rpb24gZWFzeUFyY2hpdmUoKSB7XG5cdGNvbnN0IG5vdFN1cHBvcnRlZCA9IGlzTm90U3VwcG9ydGVkKCk7XG5cdGlmIChub3RTdXBwb3J0ZWQpIHtcblx0XHRub3RTdXBwb3J0ZWRlZEZvb3Rlck5vdGljZSgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG5vdEFsbG93ZWQgPSBpc05vdEFsbG93ZWQoKTtcblx0aWYgKG5vdEFsbG93ZWQpIHtcblx0XHRub3RBbGxvd2VkZWRGb290ZXJOb3RpY2UoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzKCk7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRub0FyY0xvY0Zvb3Rlck5vdGljZSgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0gPSBzZXR0aW5ncztcblx0aWYgKCFhcmNMb2MpIHtcblx0XHRub0FyY0xvY0Zvb3Rlck5vdGljZSgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGFyY0xvY05vdEFsbG93ZWQgPSBpZkFyY0xvY05vdEFsbG93ZWQoYXJjTG9jKTtcblx0aWYgKGFyY0xvY05vdEFsbG93ZWQpIHtcblx0XHRhcmNMb2NOb3RBbGxvd2VkRm9vdGVyTm90aWNlKGFyY0xvYyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBhZGRMaW5rcyh7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9KTtcblx0ZW5hYmxlZEZvb3Rlck5vdGljZShhcmNMb2MpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEscUJBQXNCO0FBQ3RCLElBQUFDLFVBQVc7O0FDRFosSUFBQUMscUJBQWtDQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEMsSUFBQUMsb0JBQWtDRixRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTtBQUVsQyxJQUFNRSxjQUFjQSxDQUFDQyxJQUFZQyxpQkFBK0I7QUFDL0QsUUFBTTtJQUFDQztFQUFJLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFN0IsTUFBSUgsU0FBUyxXQUFXO0FBQ3ZCLFdBQ0NKLGtDQUFBUSxRQUFBQyxjQUFDLFdBQUE7TUFBUUMsV0FBVyxDQUFDLG1CQUFtQixvQ0FBb0M7TUFBR1I7SUFBQSxHQUM3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ZXQzIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJlbGVtZW50V3JhcCIsICJpZCIsICJpbm5lckVsZW1lbnQiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiaW5jbHVkZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJvbkNsaWNrV3JhcCIsICJ0ZXh0Q29udGVudCIsICJvbkNsaWNrIiwgImNsYXNzIiwgImNvbmNhdCIsICJwaXBlRWxlbWVudCIsICJzZWN0aW9uSWRTcGFuRWxlbWVudCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFyY2hpdmUiLCAibG9jYWxpemUiLCAiZW4iLCAiQXJjaGl2aW5nIiwgIkFyY2hpdmVkIiwgIkRlbGV0ZSIsICJEZWxldGluZyIsICJEZWxldGVkIiwgInpoIiwgIlJlZnJlc2hpbmciLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImZvb3Rlck5vdGljZSIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAidGFnIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicHJlcGVuZCIsICJzYW5pdGl6ZSIsICJzdHJpbmciLCAicmVwbGFjZSIsICJub3RTdXBwb3J0ZWRlZEZvb3Rlck5vdGljZSIsICJub3RBbGxvd2VkZWRGb290ZXJOb3RpY2UiLCAibm9BcmNMb2NGb290ZXJOb3RpY2UiLCAiYXJjTG9jTm90QWxsb3dlZEZvb3Rlck5vdGljZSIsICJhcmNMb2MiLCAiZW5hYmxlZEZvb3Rlck5vdGljZSIsICJ0aXRsZSIsICJocmVmIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjaGVja0lmUGFnZUV4aXN0IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiYXJjaGl2ZVRvIiwgIl9xdWVyeSRwYWdlcyQiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlcyIsICJxdWVyeSIsICJwYWdlcyIsICJtaXNzaW5nIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJhcmNoaXZlU2VjdGlvbiIsICJfcmVmMiIsICJ0ZXh0IiwgInBhZ2VFeGlzdCIsICJjcmVhdGUiLCAic3VtbWFyeSIsICJtaW5vciIsICJlZGl0IiwgImFwcGVuZHRleHQiLCAiX3gyIiwgIl94MyIsICJnZXRTZWN0aW9ucyIsICJfcmVmMyIsICJwYWdlIiwgInBhcnNlIiwgInNlY3Rpb25zIiwgInNlY3Rpb25zVG9BcmNoaXZlIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInNlY3Rpb24iLCAidmFsdWUiLCAibGV2ZWwiLCAiaW5kZXgiLCAiYW5jaG9yIiwgInN0YXJ0c1dpdGgiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiX3g0IiwgImNoZWNrSWZTZWN0aW9uRXhpc3QiLCAiX3JlZjQiLCAid2dQYWdlTmFtZSIsICJpZlNlY3Rpb25FeGlzdCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJfeDUiLCAiX3g2IiwgImRlbGV0ZVNlY3Rpb24iLCAiX3JlZjUiLCAiX3g3IiwgIl94OCIsICJfeDkiLCAiZ2V0U2VjdGlvbkNvbnRlbnQiLCAiX3JlZjYiLCAiX3F1ZXJ5JHBhZ2VzJDAkcmV2aXNpIiwgInJ2cHJvcCIsICJydnNlY3Rpb24iLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAicmV2aXNpb25zIiwgImNvbnRlbnQiLCAiX3gxMCIsICJfeDExIiwgImFyY2hpdmUiLCAiX3JlZjciLCAiX3gxMiIsICJfeDEzIiwgIl94MTQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgIndnU2NyaXB0IiwgInJlZnJlc2giLCAidGFyZ2V0UGFnZSIsICJ0b2FzdGlmeSIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiIsICJ1dGlsIiwgImdldFVybCIsICJyZW1vdmUiLCAiX3JlZjgiLCAiX3gxNSIsICJfeDE2IiwgInJlcGxhY2VDaGlsZCIsICJlbGVtZW50IiwgIm5ld0NoaWxkIiwgImhhc0NoaWxkTm9kZXMiLCAiX2VsZW1lbnQkZmlyc3RDaGlsZCIsICJmaXJzdENoaWxkIiwgImFwcGVuZCIsICJpbXBvcnRfZXh0X2dhZGdldDciLCAiYWRkTGlua3MiLCAiX3JlZjkiLCAiYXJjTGV2ZWwiLCAic2VjQXJjIiwgInNlY0RlbCIsICJoZWFkaW5ncyIsICJoZWFkbGluZXMiLCAiaGVhZGluZ0luZGljZXMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiaGVhZGluZyIsICJoZWFkbGluZSIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfaSIsICJfaGVhZGluZ0luZGljZXMiLCAiZ2V0RWxlbWVudEJ5SWQiLCAicGFyZW50SGVhZGluZyIsICJwYXJlbnRFbGVtZW50IiwgImVkaXRTZWN0aW9uIiwgInNlY3Rpb25JZFNwYW4iLCAiZXZlbnQiLCAiX2V2ZW50JHRhcmdldCIsICJwcmV2ZW50RGVmYXVsdCIsICJ0YXJnZXQiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAidGhlbiIsICJfZXZlbnQkdGFyZ2V0MiIsICJfeDE3IiwgImdldFNldHRpbmdzIiwgInNldHRpbmdzIiwgImRhdGFzZXQiLCAiaWZBcmNMb2NOb3RBbGxvd2VkIiwgInNvdXJjZVRpdGxlIiwgIlRpdGxlIiwgImFyY0xvY1RpdGxlIiwgImFyY0xvY05hbWVzcGFjZUlkIiwgImdldE5hbWVzcGFjZUlkIiwgImFyY0xvY1BhZ2VOYW1lIiwgImdldE1haW4iLCAic291cmNlTmFtZXNwYWNlSWQiLCAic291cmNlUGFnZU5hbWUiLCAiaXNOb3RBbGxvd2VkIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJ3Z1VzZXJOYW1lIiwgImlzTm90U3VwcG9ydGVkIiwgIndnSXNNYWluUGFnZSIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dSZXZpc2lvbklkIiwgImJsYWNrTGlzdFJlZ2V4QXJyIiwgIl9pMiIsICJfYmxhY2tMaXN0UmVnZXhBcnIiLCAidGVzdCIsICJlYXN5QXJjaGl2ZSIsICJub3RTdXBwb3J0ZWQiLCAibm90QWxsb3dlZCIsICJhcmNMb2NOb3RBbGxvd2VkIl0KfQo=
