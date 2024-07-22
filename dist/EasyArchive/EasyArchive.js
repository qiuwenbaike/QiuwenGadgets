/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EasyArchive}
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

// dist/EasyArchive/EasyArchive.js
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
//! src/EasyArchive/options.json
var mountPointSelector = "#footer-info,.page-info";
var version = "1.0";
//! src/EasyArchive/modules/footerNotice.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
//! src/EasyArchive/modules/react.tsx
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
//! src/EasyArchive/modules/i18n.ts
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
//! src/EasyArchive/modules/footerNotice.tsx
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
//! src/EasyArchive/modules/addLinks.tsx
var import_ext_gadget6 = __toESM(require("ext.gadget.React"), 1);
//! src/EasyArchive/modules/api.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var api = (0, import_ext_gadget4.initMwApi)("EasyArchive/".concat(version));
//! src/EasyArchive/modules/checkIfPageExist.ts
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
//! src/EasyArchive/modules/archiveSection.ts
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
//! src/EasyArchive/modules/parse.ts
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
//! src/EasyArchive/modules/checkIfSectionExist.ts
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
//! src/EasyArchive/modules/deleteSection.ts
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
//! src/EasyArchive/modules/getSectionContent.ts
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
//! src/EasyArchive/modules/archive.ts
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
//! src/EasyArchive/modules/refreshPage.ts
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
//! src/EasyArchive/modules/remove.ts
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
//! src/EasyArchive/modules/replaceChild.ts
var replaceChild = (element, newChild) => {
  while (element.hasChildNodes()) {
    var _element$firstChild;
    (_element$firstChild = element.firstChild) === null || _element$firstChild === void 0 || _element$firstChild.remove();
  }
  element.append(newChild);
};
//! src/EasyArchive/modules/addLinks.tsx
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
//! src/EasyArchive/modules/settings.ts
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
//! src/EasyArchive/modules/ifArcLocNotAllowed.ts
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
//! src/EasyArchive/modules/isNotAllowed.ts
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
//! src/EasyArchive/modules/isNotSupported.ts
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
//! src/EasyArchive/EasyArchive.ts
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9mb290ZXJOb3RpY2UudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3JlYWN0LnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2FkZExpbmtzLnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9hcGkudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvY2hlY2tJZlBhZ2VFeGlzdC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9hcmNoaXZlU2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9wYXJzZS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jaGVja0lmU2VjdGlvbkV4aXN0LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2RlbGV0ZVNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvZ2V0U2VjdGlvbkNvbnRlbnQudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvYXJjaGl2ZS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9yZWZyZXNoUGFnZS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9yZW1vdmUudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvcmVwbGFjZUNoaWxkLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3NldHRpbmdzLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2lmQXJjTG9jTm90QWxsb3dlZC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9pc05vdEFsbG93ZWQudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvaXNOb3RTdXBwb3J0ZWQudHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtlbGVtZW50V3JhcH0gZnJvbSAnLi9yZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGZvb3Rlck5vdGljZSA9IChpZDogc3RyaW5nLCBpbm5lckVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgUmVhY3RFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHRhZyA9IGVsZW1lbnRXcmFwKGlkLCBpbm5lckVsZW1lbnQpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcilbMF0/LnByZXBlbmQodGFnKTtcbn07XG5cbmNvbnN0IHNhbml0aXplID0gKHN0cmluZzogc3RyaW5nKSA9PlxuXHRzdHJpbmdcblx0XHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuXHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0LnJlcGxhY2UoLycvZywgJyZhcG9zOycpXG5cdFx0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcblxuY29uc3Qgbm90U3VwcG9ydGVkZWRGb290ZXJOb3RpY2UgPSAoKSA9PiB7XG5cdGZvb3Rlck5vdGljZShcblx0XHQnZWFzeV9hcmNoaXZlX25vdF9zdXBwb3J0ZWRfbm90aWNlJyxcblx0XHQ8c3Bhbj5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCcpfVxuXHRcdFx0PGJyIC8+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQgZGV0YWlscycpfVxuXHRcdDwvc3Bhbj5cblx0KTtcbn07XG5cbmNvbnN0IG5vdEFsbG93ZWRlZEZvb3Rlck5vdGljZSA9ICgpID0+IHtcblx0Zm9vdGVyTm90aWNlKCdlYXN5X2FyY2hpdmVfbm90X2FsbG93ZWRfbm90aWNlJywgPHNwYW4+e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3QgYWxsb3dlZCcpfTwvc3Bhbj4pO1xufTtcblxuY29uc3Qgbm9BcmNMb2NGb290ZXJOb3RpY2UgPSAoKSA9PiB7XG5cdGZvb3Rlck5vdGljZSgnZWFzeV9hcmNoaXZlX25vX2FyY19sb2Nfbm90aWNlJywgPHNwYW4+e2dldE1lc3NhZ2UoJ05vIEFyY2hpdmUgTG9jYXRpb24nKX08L3NwYW4+KTtcbn07XG5cbmNvbnN0IGFyY0xvY05vdEFsbG93ZWRGb290ZXJOb3RpY2UgPSAoYXJjTG9jOiBzdHJpbmcpID0+IHtcblx0Zm9vdGVyTm90aWNlKFxuXHRcdCdlYXN5X2FyY2hpdmVfYXJjX2xvY19ub3RfYWxsb3dlZF9ub3RpY2UnLFxuXHRcdDxzcGFuPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQnKS5yZXBsYWNlKCckMScsIHNhbml0aXplKGFyY0xvYykpfVxuXHRcdFx0PGJyIC8+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCBkZXRhaWxzJyl9XG5cdFx0PC9zcGFuPlxuXHQpO1xufTtcblxuY29uc3QgZW5hYmxlZEZvb3Rlck5vdGljZSA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRmb290ZXJOb3RpY2UoXG5cdFx0J2Vhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UnLFxuXHRcdDxzcGFuPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBlbmFibGVkJyl9XG5cdFx0XHR7Z2V0TWVzc2FnZSgnKCcpfVxuXHRcdFx0e2dldE1lc3NhZ2UoJ0FyY2hpdmUgbG9jYXRpb24nKX1cblx0XHRcdDxhIHRpdGxlPXtzYW5pdGl6ZShhcmNMb2MpfSBocmVmPXtgL3dpa2kvJHtzYW5pdGl6ZShhcmNMb2MpfWB9PlxuXHRcdFx0XHR7c2FuaXRpemUoYXJjTG9jKX1cblx0XHRcdDwvYT5cblx0XHRcdHtnZXRNZXNzYWdlKCcpJyl9XG5cdFx0XHR7Z2V0TWVzc2FnZSgnLicpfVxuXHRcdDwvc3Bhbj5cblx0KTtcbn07XG5cbmV4cG9ydCB7XG5cdGZvb3Rlck5vdGljZSxcblx0bm90U3VwcG9ydGVkZWRGb290ZXJOb3RpY2UsXG5cdG5vdEFsbG93ZWRlZEZvb3Rlck5vdGljZSxcblx0bm9BcmNMb2NGb290ZXJOb3RpY2UsXG5cdGFyY0xvY05vdEFsbG93ZWRGb290ZXJOb3RpY2UsXG5cdGVuYWJsZWRGb290ZXJOb3RpY2UsXG59O1xuIiwgImltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbmNvbnN0IGVsZW1lbnRXcmFwID0gKGlkOiBzdHJpbmcsIGlubmVyRWxlbWVudDogUmVhY3RFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17WydwYWdlLWluZm9fX2l0ZW0nLCAnZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fZm9vdGVyX25vdGljZSddfSBpZD17aWR9PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgaWQ9e2lkfSBjbGFzc05hbWU9eydnYWRnZXQtZWFzeV9hcmNoaXZlX19mb290ZXJfbm90aWNlJ30+XG5cdFx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXsnZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fZm9vdGVyX25vdGljZSd9PlxuXHRcdFx0e2lubmVyRWxlbWVudH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IG9uQ2xpY2tXcmFwID0gKHRleHRDb250ZW50OiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nLCBvbkNsaWNrPzogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCkgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzPXtbJ2dhZGdldC1lYXN5X2FyY2hpdmVfX2xpbmsnLCBgZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fbGluay0ke2NsYXNzTmFtZX1gXX1cblx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHRcdHRleHRDb250ZW50PXt0ZXh0Q29udGVudH1cblx0Lz5cbik7XG5cbmNvbnN0IHBpcGVFbGVtZW50ID0gKCkgPT4gPHNwYW4gY2xhc3M9XCJtdy1lZGl0c2VjdGlvbi1kaXZpZGVyXCIgdGV4dENvbnRlbnQ9eyd8J30gLz47XG5cbmNvbnN0IHNlY3Rpb25JZFNwYW5FbGVtZW50ID0gKCkgPT4gPHNwYW4gY2xhc3M9e1snZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fc2VjdGlvbi1pZC1zcGFuJ119IC8+O1xuXG5jb25zdCBzcGFuID0gKGlubmVySFRNTDogc3RyaW5nKSA9PiA8c3BhbiBpbm5lckhUTUw9e2lubmVySFRNTH0gLz47XG5cbmV4cG9ydCB7ZWxlbWVudFdyYXAsIG9uQ2xpY2tXcmFwLCBwaXBlRWxlbWVudCwgc2VjdGlvbklkU3BhbkVsZW1lbnQsIHNwYW59O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBcmNoaXZlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgbG9jYXRpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmUgbG9jYXRpb246ICcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPlnLDlnYDvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU6Iez77yaJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZSBhcmNoaXZlIGxvY2F0aW9uIG9mIHRoaXMgcGFnZSwgXCIkMVwiLCBidXQgRWFzeSBhcmNoaXZlIGNhbm5vdCBvcGVyYXRlIGxpa2UgdGhpcy4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3jgIJFYXN5IEFyY2hpdmUg5peg5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdoueVtuWJjeeahOWtmOaqlOWcsOWdgOaYr+OAjCQx44CN44CCRWFzeSBBcmNoaXZlIOeEoeazleaMieatpOWcsOWdgOWtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQgZGV0YWlscyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZXMgc2hvdWxkIG5vdCBiZSBub3JtYWxseSBkaXJlY3RlZCB0byBwYWdlcyB1bmRlciBhcnRpY2xlIG5hbWVzcGFjZS4gUGxlYXNlIGNoZWNrIGlmIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGFyY2hpdmUgbG9jYXRpb24uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOiIrOiAjOiogO+8jOS4jeW6lOWQkeadoeebruWQjeensOepuumXtOi/m+ihjOWtmOaho+OAguatpOWklu+8jOWtmOaho+WcsOWdgOS4jeW+l+WSjOatpOmhtemdouWQjeensOebuOWQjOOAguivt+ajgOafpeWtmOaho+WcsOWdgOOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDoiKzogIzoqIDvvIzkuI3mh4nlkJHmop3nm67lkI3nqLHnqbrplpPpgLLooYzlrZjmqpTjgILmraTlpJbvvIzlrZjmqpTlnLDlnYDkuI3lvpflkozmraTpoIHpnaLlkI3nqLHnm7jlkIzjgILoq4vmqqLmn6XlrZjmqpTlnLDlnYDjgIInLFxuXHRcdH0pLFxuXHRcdEFyY2hpdmluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5LitJyxcblx0XHR9KSxcblx0XHRBcmNoaXZlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5a2Y5qqUJyxcblx0XHR9KSxcblx0XHREZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaQnLFxuXHRcdH0pLFxuXHRcdERlbGV0aW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2JlaW5nIGRlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOS4rScsXG5cdFx0fSksXG5cdFx0RGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICflt7LliKrpmaQnLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5q616JC9Jyxcblx0XHR9KSxcblx0XHQnQ3JlYXRlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2NyZWF0ZSBhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W7uueri+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflu7rnq4vlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdEZWxldGUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOauteiQvScsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBlbmFibGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgaXMgZW5hYmxlZCBvbiB0aGlzIHRhbGsgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfmnKzorqjorrrpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3QgYWxsb3dlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGNhbm5vdCB1c2UgRWFzeSBBcmNoaXZlIHRvIGFyY2hpdmUgdGhyZWFkcyBvbiB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOS4jeWPr+S7peWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOS4jeWPr+S7peWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQgZGV0YWlscyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlc2UgcGFnZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlOiBBcnRpY2xlLCBGaWxlLCBUZW1wbGF0ZSwgTW9kdWxlLCBNZWRpYVdpa2ksIENhdGVnb3J5LCBTcGVjaWFsLCBKYXZhU2NyaXB0LCBDU1MsIEpTT04uJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+i/meS6m+mhtemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77ya5p2h55uu44CBRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6YCZ5Lqb6aCB6Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJrmop3nm67vvIxGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0fSksXG5cdFx0J05vIEFyY2hpdmUgTG9jYXRpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBjYW4gYmUgdXNlZCBvbiB0aGlzIHBhZ2UgaWYgbmVlZGVkLiBUbyBlbmFibGUgaXQsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+iLpemcgOimge+8jOatpOmhtemdouWPr+S7peWQr+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6K+35Zyo6aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+iLpemcgOimge+8jOatpOmggemdouWPr+S7peWVn+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6KuL5Zyo6aCB6Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn1944CCJyxcblx0XHR9KSxcblx0XHQnKCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnICgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdCcpJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHQnLic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdFx0UmVmcmVzaGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WNs+WwhuWIt+aWsOW9k+WJjemhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfljbPlsIfph43mlrDovInlhaXnlbbliY3poIHigKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge29uQ2xpY2tXcmFwLCBwaXBlRWxlbWVudCwgc2VjdGlvbklkU3BhbkVsZW1lbnR9IGZyb20gJy4vcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHthcmNoaXZlfSBmcm9tICcuL2FyY2hpdmUnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtnZXRTZWN0aW9uc30gZnJvbSAnLi9wYXJzZSc7XG5pbXBvcnQge3JlZnJlc2h9IGZyb20gJy4vcmVmcmVzaFBhZ2UnO1xuaW1wb3J0IHtyZW1vdmV9IGZyb20gJy4vcmVtb3ZlJztcbmltcG9ydCB7cmVwbGFjZUNoaWxkfSBmcm9tICcuL3JlcGxhY2VDaGlsZCc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYWRkTGlua3MgPSBhc3luYyAoe1xuXHRhcmNMZXZlbCxcblx0YXJjTG9jLFxuXHRzZWNBcmMsXG5cdHNlY0RlbCxcbn06IHtcblx0YXJjTGV2ZWw6IHN0cmluZztcblx0YXJjTG9jOiBzdHJpbmc7XG5cdHNlY0FyYzogc3RyaW5nO1xuXHRzZWNEZWw6IHN0cmluZztcbn0pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9uc1RvQXJjaGl2ZSA9IGF3YWl0IGdldFNlY3Rpb25zKHdnUGFnZU5hbWUpO1xuXG5cdGNvbnN0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaCR7YXJjTGV2ZWx9YCk7XG5cdGNvbnN0IGhlYWRsaW5lcyA9IFtdO1xuXHRjb25zdCBoZWFkaW5nSW5kaWNlcyA9IFtdO1xuXG5cdGZvciAoY29uc3QgaGVhZGluZyBvZiBoZWFkaW5ncykge1xuXHRcdGNvbnN0IGhlYWRsaW5lID0gaGVhZGluZy5xdWVyeVNlbGVjdG9yKCcubXctaGVhZGxpbmUnKTtcblx0XHRoZWFkbGluZXNbaGVhZGxpbmVzLmxlbmd0aF0gPSBoZWFkbGluZT8uaWQ7XG5cdH1cblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnNUb0FyY2hpdmUpIHtcblx0XHRpZiAoc2VjdGlvbi5sZXZlbCAhPT0gYXJjTGV2ZWwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChoZWFkbGluZXMuaW5jbHVkZXMoc2VjdGlvbi5hbmNob3IpKSB7XG5cdFx0XHRoZWFkaW5nSW5kaWNlc1toZWFkaW5nSW5kaWNlcy5sZW5ndGhdID0ge1xuXHRcdFx0XHRpbmRleDogc2VjdGlvbi5pbmRleCxcblx0XHRcdFx0aWQ6IHNlY3Rpb24uYW5jaG9yLFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRmb3IgKGNvbnN0IHtpbmRleCwgaWR9IG9mIGhlYWRpbmdJbmRpY2VzKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXF1ZXJ5LXNlbGVjdG9yXG5cdFx0Y29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdFx0aWYgKCFoZWFkbGluZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFyZW50SGVhZGluZyA9IGhlYWRsaW5lLnBhcmVudEVsZW1lbnQ7XG5cdFx0aWYgKCFwYXJlbnRIZWFkaW5nKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBlZGl0U2VjdGlvbiA9IHBhcmVudEhlYWRpbmcucXVlcnlTZWxlY3RvcignLm13LWVkaXRzZWN0aW9uJyk7XG5cdFx0aWYgKCFlZGl0U2VjdGlvbikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2VjdGlvbklkU3BhbiA9IHNlY3Rpb25JZFNwYW5FbGVtZW50KCk7XG5cdFx0aWYgKHNlY0FyYyA9PT0gJzEnKSB7XG5cdFx0XHRzZWN0aW9uSWRTcGFuLmFwcGVuZChcblx0XHRcdFx0b25DbGlja1dyYXAoZ2V0TWVzc2FnZSgnQXJjaGl2ZScpLCAnYXJjaGl2ZScsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0Y29uc3QgcGFyZW50RWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpPy5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRcdGlmICghcGFyZW50RWxlbWVudCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXBsYWNlQ2hpbGQocGFyZW50RWxlbWVudCwgPHNwYW4+e2dldE1lc3NhZ2UoJ0FyY2hpdmluZycpfTwvc3Bhbj4pO1xuXHRcdFx0XHRcdGxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRcdFx0XHRcdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnQXJjaGl2aW5nJyksXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQnaW5mbydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHZvaWQgYXJjaGl2ZShpbmRleCwgaWQsIGFyY0xvYykudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdFx0cmVwbGFjZUNoaWxkKHBhcmVudEVsZW1lbnQsIDxzcGFuPntnZXRNZXNzYWdlKCdBcmNoaXZlZCcpfTwvc3Bhbj4pO1xuXHRcdFx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnQXJjaGl2ZWQnKSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCdzdWNjZXNzJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJlZnJlc2goKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmIChzZWNBcmMgPT09ICcxJyAmJiBzZWNEZWwgPT09ICcxJykge1xuXHRcdFx0c2VjdGlvbklkU3Bhbi5hcHBlbmQocGlwZUVsZW1lbnQoKSk7XG5cdFx0fVxuXHRcdGlmIChzZWNEZWwgPT09ICcxJykge1xuXHRcdFx0c2VjdGlvbklkU3Bhbi5hcHBlbmQoXG5cdFx0XHRcdG9uQ2xpY2tXcmFwKGdldE1lc3NhZ2UoJ0RlbGV0ZScpLCAnZGVsZXRlJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRjb25zdCBwYXJlbnRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdFx0aWYgKCFwYXJlbnRFbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlcGxhY2VDaGlsZChwYXJlbnRFbGVtZW50LCA8c3Bhbj57Z2V0TWVzc2FnZSgnRGVsZXRpbmcnKX08L3NwYW4+KTtcblx0XHRcdFx0XHRsZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0XHRcdFx0XHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0RlbGV0aW5nJyksXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHQnaW5mbydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHZvaWQgcmVtb3ZlKGluZGV4LCBpZCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdFx0cmVwbGFjZUNoaWxkKHBhcmVudEVsZW1lbnQsIDxzcGFuPntnZXRNZXNzYWdlKCdEZWxldGVkJyl9PC9zcGFuPik7XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdEZWxldGVkJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMgKiAxMDAwLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnc3VjY2Vzcydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRyZWZyZXNoKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRlZGl0U2VjdGlvbi5wcmVwZW5kKHNlY3Rpb25JZFNwYW4pO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZExpbmtzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEVhc3lBcmNoaXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgY2hlY2tJZlBhZ2VFeGlzdCA9IGFzeW5jIChhcmNoaXZlVG86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbmZvJyxcblx0XHR0aXRsZXM6IGFyY2hpdmVUbyxcblx0fTtcblxuXHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdGlmIChxdWVyeS5wYWdlc1swXT8ubWlzc2luZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tJZlBhZ2VFeGlzdH07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Y2hlY2tJZlBhZ2VFeGlzdH0gZnJvbSAnLi9jaGVja0lmUGFnZUV4aXN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYXJjaGl2ZVNlY3Rpb24gPSBhc3luYyAoYXJjaGl2ZVRvOiBzdHJpbmcsIHRleHQ6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYWdlRXhpc3QgPSBhd2FpdCBjaGVja0lmUGFnZUV4aXN0KGFyY2hpdmVUbyk7XG5cdGlmICghcGFnZUV4aXN0KSB7XG5cdFx0YXdhaXQgYXBpLmNyZWF0ZShcblx0XHRcdGFyY2hpdmVUbyxcblx0XHRcdHtcblx0XHRcdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnQ3JlYXRlIHN1bW1hcnknKSxcblx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0J3t7dGFsa2FyY2hpdmV9fSdcblx0XHQpO1xuXHR9XG5cdGF3YWl0IGFwaS5lZGl0KGFyY2hpdmVUbywgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcHBlbmR0ZXh0OiBgXFxuXFxuJHt0ZXh0fWAsXG5cdFx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdBcmNoaXZlIHN1bW1hcnknKSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xufTtcblxuZXhwb3J0IHthcmNoaXZlU2VjdGlvbn07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgZ2V0U2VjdGlvbnMgPSBhc3luYyAodGl0bGU6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cGFnZTogdGl0bGUsXG5cdFx0cHJvcDogJ3NlY3Rpb25zJyxcblx0fTtcblxuXHRjb25zdCB7cGFyc2V9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdGNvbnN0IHtcblx0XHRzZWN0aW9ucyxcblx0fToge1xuXHRcdHNlY3Rpb25zOiB7XG5cdFx0XHRsZXZlbDogc3RyaW5nO1xuXHRcdFx0aW5kZXg6IHN0cmluZztcblx0XHRcdGFuY2hvcjogc3RyaW5nO1xuXHRcdH1bXTtcblx0fSA9IHBhcnNlO1xuXG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gW107XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0Y29uc3Qge2xldmVsLCBpbmRleCwgYW5jaG9yfSA9IHNlY3Rpb247XG5cblx0XHRpZiAoaW5kZXguc3RhcnRzV2l0aCgnVC0nKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0c2VjdGlvbnNUb0FyY2hpdmVbc2VjdGlvbnNUb0FyY2hpdmUubGVuZ3RoXSA9IHtcblx0XHRcdGxldmVsLFxuXHRcdFx0aW5kZXgsXG5cdFx0XHRhbmNob3IsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBzZWN0aW9uc1RvQXJjaGl2ZTtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbnN9O1xuIiwgImltcG9ydCB7Z2V0U2VjdGlvbnN9IGZyb20gJy4vcGFyc2UnO1xuXG5jb25zdCBjaGVja0lmU2VjdGlvbkV4aXN0ID0gYXN5bmMgKGluZGV4OiBzdHJpbmcsIGFuY2hvcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnMgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRsZXQgaWZTZWN0aW9uRXhpc3QgPSBmYWxzZTtcblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0aWYgKGluZGV4ID09PSBzZWN0aW9uLmluZGV4ICYmIGFuY2hvciA9PT0gc2VjdGlvbi5hbmNob3IpIHtcblx0XHRcdGlmU2VjdGlvbkV4aXN0ID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGlmU2VjdGlvbkV4aXN0O1xufTtcblxuZXhwb3J0IHtjaGVja0lmU2VjdGlvbkV4aXN0fTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBkZWxldGVTZWN0aW9uID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcsIHNlY3Rpb246IHN0cmluZywgc3VtbWFyeT86IHN0cmluZykgPT4ge1xuXHRhd2FpdCBhcGkuZWRpdCh0aXRsZSwgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZWN0aW9uLFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRzdW1tYXJ5OiBzdW1tYXJ5ID8/IGdldE1lc3NhZ2UoJ0RlbGV0ZSBzdW1tYXJ5JyksXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7ZGVsZXRlU2VjdGlvbn07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgZ2V0U2VjdGlvbkNvbnRlbnQgPSBhc3luYyAodGl0bGU6IHN0cmluZywgc2VjdGlvbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHRpdGxlczogdGl0bGUsXG5cdFx0cnZzZWN0aW9uOiBzZWN0aW9uLFxuXHR9O1xuXG5cdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cblx0cmV0dXJuIHF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5jb250ZW50ID8/IG51bGw7XG59O1xuXG5leHBvcnQge2dldFNlY3Rpb25Db250ZW50fTtcbiIsICJpbXBvcnQge2FyY2hpdmVTZWN0aW9ufSBmcm9tICcuL2FyY2hpdmVTZWN0aW9uJztcbmltcG9ydCB7Y2hlY2tJZlNlY3Rpb25FeGlzdH0gZnJvbSAnLi9jaGVja0lmU2VjdGlvbkV4aXN0JztcbmltcG9ydCB7ZGVsZXRlU2VjdGlvbn0gZnJvbSAnLi9kZWxldGVTZWN0aW9uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9IGZyb20gJy4vZ2V0U2VjdGlvbkNvbnRlbnQnO1xuXG5jb25zdCBhcmNoaXZlID0gYXN5bmMgKGluZGV4OiBzdHJpbmcsIGFuY2hvcjogc3RyaW5nLCBhcmNoaXZlVG86IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlmU2VjdGlvbkV4aXN0ID0gYXdhaXQgY2hlY2tJZlNlY3Rpb25FeGlzdChpbmRleCwgYW5jaG9yKTtcblxuXHRpZiAoaWZTZWN0aW9uRXhpc3QgIT09IHRydWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0U2VjdGlvbkNvbnRlbnQod2dQYWdlTmFtZSwgaW5kZXgpO1xuXG5cdGlmIChjb250ZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGF3YWl0IGFyY2hpdmVTZWN0aW9uKGFyY2hpdmVUbywgY29udGVudCk7XG5cdGF3YWl0IGRlbGV0ZVNlY3Rpb24od2dQYWdlTmFtZSwgaW5kZXgsIGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpKTtcbn07XG5cbmV4cG9ydCB7YXJjaGl2ZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHt3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IHJlZnJlc2ggPSAodGFyZ2V0UGFnZT86IHN0cmluZyk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdSZWZyZXNoaW5nJyksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxvY2F0aW9uLnJlcGxhY2UoXG5cdFx0bXcudXRpbC5nZXRVcmwod2dTY3JpcHQsIHtcblx0XHRcdHRpdGxlOiB0YXJnZXRQYWdlID8/IHdnUGFnZU5hbWUsXG5cdFx0fSlcblx0KTtcbn07XG5cbmV4cG9ydCB7cmVmcmVzaH07XG4iLCAiaW1wb3J0IHtjaGVja0lmU2VjdGlvbkV4aXN0fSBmcm9tICcuL2NoZWNrSWZTZWN0aW9uRXhpc3QnO1xuaW1wb3J0IHtkZWxldGVTZWN0aW9ufSBmcm9tICcuL2RlbGV0ZVNlY3Rpb24nO1xuaW1wb3J0IHtnZXRTZWN0aW9uQ29udGVudH0gZnJvbSAnLi9nZXRTZWN0aW9uQ29udGVudCc7XG5cbmNvbnN0IHJlbW92ZSA9IGFzeW5jIChpbmRleDogc3RyaW5nLCBhbmNob3I6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlmU2VjdGlvbkV4aXN0ID0gYXdhaXQgY2hlY2tJZlNlY3Rpb25FeGlzdChpbmRleCwgYW5jaG9yKTtcblxuXHRpZiAoaWZTZWN0aW9uRXhpc3QgIT09IHRydWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0U2VjdGlvbkNvbnRlbnQod2dQYWdlTmFtZSwgaW5kZXgpO1xuXG5cdGlmIChjb250ZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXdhaXQgZGVsZXRlU2VjdGlvbih3Z1BhZ2VOYW1lLCBpbmRleCk7XG59O1xuXG5leHBvcnQge3JlbW92ZX07XG4iLCAiY29uc3QgcmVwbGFjZUNoaWxkID0gKGVsZW1lbnQ6IEVsZW1lbnQsIG5ld0NoaWxkOiBFbGVtZW50KTogdm9pZCA9PiB7XG5cdHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdGVsZW1lbnQuZmlyc3RDaGlsZD8ucmVtb3ZlKCk7XG5cdH1cblx0ZWxlbWVudC5hcHBlbmQobmV3Q2hpbGQpO1xufTtcblxuZXhwb3J0IHtyZXBsYWNlQ2hpbGR9O1xuIiwgImNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHtkYXRhc2V0fSA9IHNldHRpbmdzO1xuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gZGF0YXNldDtcblx0cmV0dXJuIHtcblx0XHRhcmNMZXZlbDogYXJjTGV2ZWwgPz8gJzInLFxuXHRcdGFyY0xvYzogYXJjTG9jID8/IG51bGwsXG5cdFx0c2VjQXJjOiBzZWNBcmMgPz8gJzEnLFxuXHRcdHNlY0RlbDogc2VjRGVsID8/ICcxJyxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2V0U2V0dGluZ3N9O1xuIiwgImNvbnN0IGlmQXJjTG9jTm90QWxsb3dlZCA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNvdXJjZVRpdGxlID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpO1xuXHRjb25zdCBhcmNMb2NUaXRsZSA9IG5ldyBtdy5UaXRsZShhcmNMb2MpO1xuXG5cdGNvbnN0IGFyY0xvY05hbWVzcGFjZUlkID0gYXJjTG9jVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3QgYXJjTG9jUGFnZU5hbWUgPSBhcmNMb2NUaXRsZS5nZXRNYWluKCk7XG5cdGNvbnN0IHNvdXJjZU5hbWVzcGFjZUlkID0gc291cmNlVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3Qgc291cmNlUGFnZU5hbWUgPSBzb3VyY2VUaXRsZS5nZXRNYWluKCk7XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoYXJjTG9jTmFtZXNwYWNlSWQgPT09IHNvdXJjZU5hbWVzcGFjZUlkICYmIGFyY0xvY1BhZ2VOYW1lID09PSBzb3VyY2VQYWdlTmFtZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHtpZkFyY0xvY05vdEFsbG93ZWR9O1xuIiwgImNvbnN0IGlzTm90QWxsb3dlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1JlbGV2YW50VXNlck5hbWUsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICgod2dOYW1lc3BhY2VOdW1iZXIgPT09IDIgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDMpICYmICEod2dSZWxldmFudFVzZXJOYW1lID09PSB3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHtpc05vdEFsbG93ZWR9O1xuIiwgImNvbnN0IGlzTm90U3VwcG9ydGVkID0gKCkgPT4ge1xuXHRjb25zdCB7d2dJc01haW5QYWdlLCB3Z05hbWVzcGFjZU51bWJlciwgd2dQYWdlTmFtZSwgd2dDdXJSZXZpc2lvbklkLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGJsYWNrTGlzdFJlZ2V4QXJyID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja0xpc3RSZWdleEFycikge1xuXHRcdGlmIChlbGVtZW50LnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDAgfHwgd2dDdXJSZXZpc2lvbklkIC0gd2dSZXZpc2lvbklkICE9PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDAgfHwgd2dJc01haW5QYWdlKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQge2lzTm90U3VwcG9ydGVkfTtcbiIsICJpbXBvcnQgJy4vRWFzeUFyY2hpdmUubGVzcyc7XG5pbXBvcnQge1xuXHRhcmNMb2NOb3RBbGxvd2VkRm9vdGVyTm90aWNlLFxuXHRlbmFibGVkRm9vdGVyTm90aWNlLFxuXHRub0FyY0xvY0Zvb3Rlck5vdGljZSxcblx0bm90QWxsb3dlZGVkRm9vdGVyTm90aWNlLFxuXHRub3RTdXBwb3J0ZWRlZEZvb3Rlck5vdGljZSxcbn0gZnJvbSAnLi9tb2R1bGVzL2Zvb3Rlck5vdGljZSc7XG5pbXBvcnQge2FkZExpbmtzfSBmcm9tICcuL21vZHVsZXMvYWRkTGlua3MnO1xuaW1wb3J0IHtnZXRTZXR0aW5nc30gZnJvbSAnLi9tb2R1bGVzL3NldHRpbmdzJztcbmltcG9ydCB7aWZBcmNMb2NOb3RBbGxvd2VkfSBmcm9tICcuL21vZHVsZXMvaWZBcmNMb2NOb3RBbGxvd2VkJztcbmltcG9ydCB7aXNOb3RBbGxvd2VkfSBmcm9tICcuL21vZHVsZXMvaXNOb3RBbGxvd2VkJztcbmltcG9ydCB7aXNOb3RTdXBwb3J0ZWR9IGZyb20gJy4vbW9kdWxlcy9pc05vdFN1cHBvcnRlZCc7XG5cbihmdW5jdGlvbiBlYXN5QXJjaGl2ZSgpIHtcblx0Y29uc3Qgbm90U3VwcG9ydGVkID0gaXNOb3RTdXBwb3J0ZWQoKTtcblx0aWYgKG5vdFN1cHBvcnRlZCkge1xuXHRcdG5vdFN1cHBvcnRlZGVkRm9vdGVyTm90aWNlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgbm90QWxsb3dlZCA9IGlzTm90QWxsb3dlZCgpO1xuXHRpZiAobm90QWxsb3dlZCkge1xuXHRcdG5vdEFsbG93ZWRlZEZvb3Rlck5vdGljZSgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3MoKTtcblx0aWYgKCFzZXR0aW5ncykge1xuXHRcdG5vQXJjTG9jRm9vdGVyTm90aWNlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge2FyY0xldmVsLCBhcmNMb2MsIHNlY0FyYywgc2VjRGVsfSA9IHNldHRpbmdzO1xuXHRpZiAoIWFyY0xvYykge1xuXHRcdG5vQXJjTG9jRm9vdGVyTm90aWNlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYXJjTG9jTm90QWxsb3dlZCA9IGlmQXJjTG9jTm90QWxsb3dlZChhcmNMb2MpO1xuXHRpZiAoYXJjTG9jTm90QWxsb3dlZCkge1xuXHRcdGFyY0xvY05vdEFsbG93ZWRGb290ZXJOb3RpY2UoYXJjTG9jKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGFkZExpbmtzKHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0pO1xuXHRlbmFibGVkRm9vdGVyTm90aWNlKGFyY0xvYyk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxxQkFBc0I7QUFDdEIsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxxQkFBa0NDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQyxJQUFBQyxvQkFBa0NGLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBO0FBRWxDLElBQU1FLGNBQWNBLENBQUNDLElBQVlDLGlCQUErQjtBQUMvRCxRQUFNO0lBQUNDO0VBQUksSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUU3QixNQUFJSCxTQUFTLFdBQVc7QUFDdkIsV0FDQ0osa0NBQUFRLFFBQUFDLGNBQUMsV0FBQTtNQUFRQyxXQUFXLENBQUMsbUJBQW1CLG9DQUFvQztNQUFHUjtJQUFBLEdBQzdFQyxZQUNGO0VBRUYsV0FBVyxDQUFDLFVBQVUsZUFBZSxRQUFRLEVBQUVRLFNBQVNQLElBQUksS0FBS1EsU0FBU0MsY0FBYyxnQkFBZ0IsR0FBRztBQUMxRyxX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R0FBQUMscUJBQXNCRixtQkFBQUMsTUFBQUMsbUJBQUEzRyxRQUFBMEcsT0FBbUI7QUFBekMsVUFBVzNELFVBQUE0RCxtQkFBQUQsR0FBQTtBQUNWLFFBQUkzRCxRQUFRNkQsS0FBS3JHLFVBQVUsR0FBRztBQUM3QixhQUFPO0lBQ1I7RUFDRDtBQUVBLE1BQUkyRixvQkFBb0IsS0FBS0ssa0JBQWtCQyxpQkFBaUIsR0FBRztBQUNsRSxXQUFPO0VBQ1I7QUFFQSxNQUFJTixzQkFBc0IsS0FBS0ksY0FBYztBQUM1QyxXQUFPO0VBQ1I7QUFFQSxTQUFPO0FBQ1I7O0NDaEJDLFNBQVNPLGNBQWM7QUFDdkIsUUFBTUMsZUFBZVQsZUFBZTtBQUNwQyxNQUFJUyxjQUFjO0FBQ2pCeEssK0JBQTJCO0FBQzNCO0VBQ0Q7QUFFQSxRQUFNeUssYUFBYWQsYUFBYTtBQUNoQyxNQUFJYyxZQUFZO0FBQ2Z4Syw2QkFBeUI7QUFDekI7RUFDRDtBQUVBLFFBQU04SSxXQUFXRCxZQUFZO0FBQzdCLE1BQUksQ0FBQ0MsVUFBVTtBQUNkN0kseUJBQXFCO0FBQ3JCO0VBQ0Q7QUFFQSxRQUFNO0lBQUNnSDtJQUFVOUc7SUFBUStHO0lBQVFDO0VBQU0sSUFBSTJCO0FBQzNDLE1BQUksQ0FBQzNJLFFBQVE7QUFDWkYseUJBQXFCO0FBQ3JCO0VBQ0Q7QUFFQSxRQUFNd0ssbUJBQW1CekIsbUJBQW1CN0ksTUFBTTtBQUNsRCxNQUFJc0ssa0JBQWtCO0FBQ3JCdkssaUNBQTZCQyxNQUFNO0FBQ25DO0VBQ0Q7QUFFQSxPQUFLNEcsU0FBUztJQUFDRTtJQUFVOUc7SUFBUStHO0lBQVFDO0VBQU0sQ0FBQztBQUNoRC9HLHNCQUFvQkQsTUFBTTtBQUMzQixHQUFHOyIsCiAgIm5hbWVzIjogWyJtb3VudFBvaW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImVsZW1lbnRXcmFwIiwgImlkIiwgImlubmVyRWxlbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIm9uQ2xpY2tXcmFwIiwgInRleHRDb250ZW50IiwgIm9uQ2xpY2siLCAiY2xhc3MiLCAiY29uY2F0IiwgInBpcGVFbGVtZW50IiwgInNlY3Rpb25JZFNwYW5FbGVtZW50IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiQXJjaGl2ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJBcmNoaXZpbmciLCAiQXJjaGl2ZWQiLCAiRGVsZXRlIiwgIkRlbGV0aW5nIiwgIkRlbGV0ZWQiLCAiemgiLCAiUmVmcmVzaGluZyIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZm9vdGVyTm90aWNlIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJ0YWciLCAicXVlcnlTZWxlY3RvckFsbCIsICJwcmVwZW5kIiwgInNhbml0aXplIiwgInN0cmluZyIsICJyZXBsYWNlIiwgIm5vdFN1cHBvcnRlZGVkRm9vdGVyTm90aWNlIiwgIm5vdEFsbG93ZWRlZEZvb3Rlck5vdGljZSIsICJub0FyY0xvY0Zvb3Rlck5vdGljZSIsICJhcmNMb2NOb3RBbGxvd2VkRm9vdGVyTm90aWNlIiwgImFyY0xvYyIsICJlbmFibGVkRm9vdGVyTm90aWNlIiwgInRpdGxlIiwgImhyZWYiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNoZWNrSWZQYWdlRXhpc3QiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJhcmNoaXZlVG8iLCAiX3F1ZXJ5JHBhZ2VzJCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgInF1ZXJ5IiwgInBhZ2VzIiwgIm1pc3NpbmciLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImFyY2hpdmVTZWN0aW9uIiwgIl9yZWYyIiwgInRleHQiLCAicGFnZUV4aXN0IiwgImNyZWF0ZSIsICJzdW1tYXJ5IiwgIm1pbm9yIiwgImVkaXQiLCAiYXBwZW5kdGV4dCIsICJfeDIiLCAiX3gzIiwgImdldFNlY3Rpb25zIiwgIl9yZWYzIiwgInBhZ2UiLCAicGFyc2UiLCAic2VjdGlvbnMiLCAic2VjdGlvbnNUb0FyY2hpdmUiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAic2VjdGlvbiIsICJ2YWx1ZSIsICJsZXZlbCIsICJpbmRleCIsICJhbmNob3IiLCAic3RhcnRzV2l0aCIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeDQiLCAiY2hlY2tJZlNlY3Rpb25FeGlzdCIsICJfcmVmNCIsICJ3Z1BhZ2VOYW1lIiwgImlmU2VjdGlvbkV4aXN0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIl94NSIsICJfeDYiLCAiZGVsZXRlU2VjdGlvbiIsICJfcmVmNSIsICJfeDciLCAiX3g4IiwgIl94OSIsICJnZXRTZWN0aW9uQ29udGVudCIsICJfcmVmNiIsICJfcXVlcnkkcGFnZXMkMCRyZXZpc2kiLCAicnZwcm9wIiwgInJ2c2VjdGlvbiIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJyZXZpc2lvbnMiLCAiY29udGVudCIsICJfeDEwIiwgIl94MTEiLCAiYXJjaGl2ZSIsICJfcmVmNyIsICJfeDEyIiwgIl94MTMiLCAiX3gxNCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAid2dTY3JpcHQiLCAicmVmcmVzaCIsICJ0YXJnZXRQYWdlIiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInV0aWwiLCAiZ2V0VXJsIiwgInJlbW92ZSIsICJfcmVmOCIsICJfeDE1IiwgIl94MTYiLCAicmVwbGFjZUNoaWxkIiwgImVsZW1lbnQiLCAibmV3Q2hpbGQiLCAiaGFzQ2hpbGROb2RlcyIsICJfZWxlbWVudCRmaXJzdENoaWxkIiwgImZpcnN0Q2hpbGQiLCAiYXBwZW5kIiwgImltcG9ydF9leHRfZ2FkZ2V0NyIsICJhZGRMaW5rcyIsICJfcmVmOSIsICJhcmNMZXZlbCIsICJzZWNBcmMiLCAic2VjRGVsIiwgImhlYWRpbmdzIiwgImhlYWRsaW5lcyIsICJoZWFkaW5nSW5kaWNlcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJoZWFkaW5nIiwgImhlYWRsaW5lIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl9pIiwgIl9oZWFkaW5nSW5kaWNlcyIsICJnZXRFbGVtZW50QnlJZCIsICJwYXJlbnRIZWFkaW5nIiwgInBhcmVudEVsZW1lbnQiLCAiZWRpdFNlY3Rpb24iLCAic2VjdGlvbklkU3BhbiIsICJldmVudCIsICJfZXZlbnQkdGFyZ2V0IiwgInByZXZlbnREZWZhdWx0IiwgInRhcmdldCIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJ0aGVuIiwgIl9ldmVudCR0YXJnZXQyIiwgIl94MTciLCAiZ2V0U2V0dGluZ3MiLCAic2V0dGluZ3MiLCAiZGF0YXNldCIsICJpZkFyY0xvY05vdEFsbG93ZWQiLCAic291cmNlVGl0bGUiLCAiVGl0bGUiLCAiYXJjTG9jVGl0bGUiLCAiYXJjTG9jTmFtZXNwYWNlSWQiLCAiZ2V0TmFtZXNwYWNlSWQiLCAiYXJjTG9jUGFnZU5hbWUiLCAiZ2V0TWFpbiIsICJzb3VyY2VOYW1lc3BhY2VJZCIsICJzb3VyY2VQYWdlTmFtZSIsICJpc05vdEFsbG93ZWQiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dSZWxldmFudFVzZXJOYW1lIiwgIndnVXNlck5hbWUiLCAiaXNOb3RTdXBwb3J0ZWQiLCAid2dJc01haW5QYWdlIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1JldmlzaW9uSWQiLCAiYmxhY2tMaXN0UmVnZXhBcnIiLCAiX2kyIiwgIl9ibGFja0xpc3RSZWdleEFyciIsICJ0ZXN0IiwgImVhc3lBcmNoaXZlIiwgIm5vdFN1cHBvcnRlZCIsICJub3RBbGxvd2VkIiwgImFyY0xvY05vdEFsbG93ZWQiXQp9Cg==
