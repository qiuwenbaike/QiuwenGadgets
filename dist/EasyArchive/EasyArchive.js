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
var inBlacklistFooterNotice = () => {
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
//! src/EasyArchive/modules/parse.ts
var getSections = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (title) {
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
  return function getSections2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/EasyArchive/modules/checkIfSectionExist.ts
var checkIfSectionExist = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (index, anchor) {
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
  return function checkIfSectionExist2(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/EasyArchive/modules/getSectionContent.ts
var getSectionContent = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (title, section) {
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
  return function getSectionContent2(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
//! src/EasyArchive/modules/removeSection.ts
var removeSection = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* (index, anchor, summary) {
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
    yield api.edit(wgPageName, () => {
      return {
        section: index,
        text: "",
        summary: summary !== null && summary !== void 0 ? summary : getMessage("Delete summary"),
        minor: true
      };
    });
  });
  return function removeSection2(_x7, _x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
//! src/EasyArchive/modules/archiveSection.ts
var archiveSection = /* @__PURE__ */ function() {
  var _ref6 = _asyncToGenerator(function* (index, anchor, archiveTo) {
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
    yield removeSection(wgPageName, index, getMessage("Archive summary"));
  });
  return function archiveSection2(_x10, _x11, _x12) {
    return _ref6.apply(this, arguments);
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
  var _ref7 = _asyncToGenerator(function* ({
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
          void archiveSection(index, id, arcLoc).then(() => {
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
          void removeSection(index, id).then(() => {
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
  return function addLinks2(_x13) {
    return _ref7.apply(this, arguments);
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
//! src/EasyArchive/modules/isInBlacklist.ts
var isInBlacklist = () => {
  const {
    wgPageName
  } = mw.config.get();
  const blackListRegexArr = [/^File:.*$/, /^MediaWiki:.*$/, /^Module:.*$/, /^Category:.*$/, /^Template:.*$/, /^Special:.*$/, /^User:.*\/?.*\.js$/, /^User:.*\/?.*\.css$/, /^User:.*\/?.*\.json$/];
  for (var _i2 = 0, _blackListRegexArr = blackListRegexArr; _i2 < _blackListRegexArr.length; _i2++) {
    const element = _blackListRegexArr[_i2];
    if (element.test(wgPageName)) {
      return true;
    }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9mb290ZXJOb3RpY2UudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3JlYWN0LnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2FkZExpbmtzLnRzeCIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9hcGkudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvY2hlY2tJZlBhZ2VFeGlzdC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9wYXJzZS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9jaGVja0lmU2VjdGlvbkV4aXN0LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2dldFNlY3Rpb25Db250ZW50LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3JlbW92ZVNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvYXJjaGl2ZVNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvcmVmcmVzaFBhZ2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvcmVwbGFjZUNoaWxkLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3NldHRpbmdzLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2lmQXJjTG9jTm90QWxsb3dlZC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9pc0luQmxhY2tsaXN0LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2lzTm90QWxsb3dlZC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9pc05vdFN1cHBvcnRlZC50cyIsICJzcmMvRWFzeUFyY2hpdmUvRWFzeUFyY2hpdmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2VsZW1lbnRXcmFwfSBmcm9tICcuL3JlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgZm9vdGVyTm90aWNlID0gKGlkOiBzdHJpbmcsIGlubmVyRWxlbWVudDogSFRNTEVsZW1lbnQgfCBSZWFjdEVsZW1lbnQpID0+IHtcblx0Y29uc3QgdGFnID0gZWxlbWVudFdyYXAoaWQsIGlubmVyRWxlbWVudCk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKVswXT8ucHJlcGVuZCh0YWcpO1xufTtcblxuY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+XG5cdHN0cmluZ1xuXHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXG5jb25zdCBpbkJsYWNrbGlzdEZvb3Rlck5vdGljZSA9ICgpID0+IHtcblx0Zm9vdGVyTm90aWNlKFxuXHRcdCdlYXN5X2FyY2hpdmVfbm90X3N1cHBvcnRlZF9ub3RpY2UnLFxuXHRcdDxzcGFuPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkJyl9XG5cdFx0XHQ8YnIgLz5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCBkZXRhaWxzJyl9XG5cdFx0PC9zcGFuPlxuXHQpO1xufTtcblxuY29uc3Qgbm90QWxsb3dlZGVkRm9vdGVyTm90aWNlID0gKCkgPT4ge1xuXHRmb290ZXJOb3RpY2UoJ2Vhc3lfYXJjaGl2ZV9ub3RfYWxsb3dlZF9ub3RpY2UnLCA8c3Bhbj57Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBhbGxvd2VkJyl9PC9zcGFuPik7XG59O1xuXG5jb25zdCBub0FyY0xvY0Zvb3Rlck5vdGljZSA9ICgpID0+IHtcblx0Zm9vdGVyTm90aWNlKCdlYXN5X2FyY2hpdmVfbm9fYXJjX2xvY19ub3RpY2UnLCA8c3Bhbj57Z2V0TWVzc2FnZSgnTm8gQXJjaGl2ZSBMb2NhdGlvbicpfTwvc3Bhbj4pO1xufTtcblxuY29uc3QgYXJjTG9jTm90QWxsb3dlZEZvb3Rlck5vdGljZSA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRmb290ZXJOb3RpY2UoXG5cdFx0J2Vhc3lfYXJjaGl2ZV9hcmNfbG9jX25vdF9hbGxvd2VkX25vdGljZScsXG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCcpLnJlcGxhY2UoJyQxJywgc2FuaXRpemUoYXJjTG9jKSl9XG5cdFx0XHQ8YnIgLz5cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkIGRldGFpbHMnKX1cblx0XHQ8L3NwYW4+XG5cdCk7XG59O1xuXG5jb25zdCBlbmFibGVkRm9vdGVyTm90aWNlID0gKGFyY0xvYzogc3RyaW5nKSA9PiB7XG5cdGZvb3Rlck5vdGljZShcblx0XHQnZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZScsXG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIGVuYWJsZWQnKX1cblx0XHRcdHtnZXRNZXNzYWdlKCcoJyl9XG5cdFx0XHR7Z2V0TWVzc2FnZSgnQXJjaGl2ZSBsb2NhdGlvbicpfVxuXHRcdFx0PGEgdGl0bGU9e3Nhbml0aXplKGFyY0xvYyl9IGhyZWY9e2Avd2lraS8ke3Nhbml0aXplKGFyY0xvYyl9YH0+XG5cdFx0XHRcdHtzYW5pdGl6ZShhcmNMb2MpfVxuXHRcdFx0PC9hPlxuXHRcdFx0e2dldE1lc3NhZ2UoJyknKX1cblx0XHRcdHtnZXRNZXNzYWdlKCcuJyl9XG5cdFx0PC9zcGFuPlxuXHQpO1xufTtcblxuZXhwb3J0IHtcblx0YXJjTG9jTm90QWxsb3dlZEZvb3Rlck5vdGljZSxcblx0ZW5hYmxlZEZvb3Rlck5vdGljZSxcblx0aW5CbGFja2xpc3RGb290ZXJOb3RpY2UsXG5cdG5vQXJjTG9jRm9vdGVyTm90aWNlLFxuXHRub3RBbGxvd2VkZWRGb290ZXJOb3RpY2UsXG59O1xuIiwgImltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbmNvbnN0IGVsZW1lbnRXcmFwID0gKGlkOiBzdHJpbmcsIGlubmVyRWxlbWVudDogUmVhY3RFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17WydwYWdlLWluZm9fX2l0ZW0nLCAnZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fZm9vdGVyX25vdGljZSddfSBpZD17aWR9PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgaWQ9e2lkfSBjbGFzc05hbWU9eydnYWRnZXQtZWFzeV9hcmNoaXZlX19mb290ZXJfbm90aWNlJ30+XG5cdFx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXsnZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fZm9vdGVyX25vdGljZSd9PlxuXHRcdFx0e2lubmVyRWxlbWVudH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IG9uQ2xpY2tXcmFwID0gKHRleHRDb250ZW50OiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nLCBvbkNsaWNrPzogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCkgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzPXtbJ2dhZGdldC1lYXN5X2FyY2hpdmVfX2xpbmsnLCBgZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fbGluay0ke2NsYXNzTmFtZX1gXX1cblx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHRcdHRleHRDb250ZW50PXt0ZXh0Q29udGVudH1cblx0Lz5cbik7XG5cbmNvbnN0IHBpcGVFbGVtZW50ID0gKCkgPT4gPHNwYW4gY2xhc3M9XCJtdy1lZGl0c2VjdGlvbi1kaXZpZGVyXCIgdGV4dENvbnRlbnQ9eyd8J30gLz47XG5cbmNvbnN0IHNlY3Rpb25JZFNwYW5FbGVtZW50ID0gKCkgPT4gPHNwYW4gY2xhc3M9e1snZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fc2VjdGlvbi1pZC1zcGFuJ119IC8+O1xuXG5jb25zdCBzcGFuID0gKGlubmVySFRNTDogc3RyaW5nKSA9PiA8c3BhbiBpbm5lckhUTUw9e2lubmVySFRNTH0gLz47XG5cbmV4cG9ydCB7ZWxlbWVudFdyYXAsIG9uQ2xpY2tXcmFwLCBwaXBlRWxlbWVudCwgc2VjdGlvbklkU3BhbkVsZW1lbnQsIHNwYW59O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBcmNoaXZlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgbG9jYXRpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmUgbG9jYXRpb246ICcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPlnLDlnYDvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU6Iez77yaJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZSBhcmNoaXZlIGxvY2F0aW9uIG9mIHRoaXMgcGFnZSwgXCIkMVwiLCBidXQgRWFzeSBhcmNoaXZlIGNhbm5vdCBvcGVyYXRlIGxpa2UgdGhpcy4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3jgIJFYXN5IEFyY2hpdmUg5peg5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdoueVtuWJjeeahOWtmOaqlOWcsOWdgOaYr+OAjCQx44CN44CCRWFzeSBBcmNoaXZlIOeEoeazleaMieatpOWcsOWdgOWtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQgZGV0YWlscyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZXMgc2hvdWxkIG5vdCBiZSBub3JtYWxseSBkaXJlY3RlZCB0byBwYWdlcyB1bmRlciBhcnRpY2xlIG5hbWVzcGFjZS4gUGxlYXNlIGNoZWNrIGlmIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGFyY2hpdmUgbG9jYXRpb24uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOiIrOiAjOiogO+8jOS4jeW6lOWQkeadoeebruWQjeensOepuumXtOi/m+ihjOWtmOaho+OAguatpOWklu+8jOWtmOaho+WcsOWdgOS4jeW+l+WSjOatpOmhtemdouWQjeensOebuOWQjOOAguivt+ajgOafpeWtmOaho+WcsOWdgOOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDoiKzogIzoqIDvvIzkuI3mh4nlkJHmop3nm67lkI3nqLHnqbrplpPpgLLooYzlrZjmqpTjgILmraTlpJbvvIzlrZjmqpTlnLDlnYDkuI3lvpflkozmraTpoIHpnaLlkI3nqLHnm7jlkIzjgILoq4vmqqLmn6XlrZjmqpTlnLDlnYDjgIInLFxuXHRcdH0pLFxuXHRcdEFyY2hpdmluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5LitJyxcblx0XHR9KSxcblx0XHRBcmNoaXZlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5a2Y5qqUJyxcblx0XHR9KSxcblx0XHREZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaQnLFxuXHRcdH0pLFxuXHRcdERlbGV0aW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2JlaW5nIGRlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOS4rScsXG5cdFx0fSksXG5cdFx0RGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICflt7LliKrpmaQnLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5q616JC9Jyxcblx0XHR9KSxcblx0XHQnQ3JlYXRlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2NyZWF0ZSBhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W7uueri+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflu7rnq4vlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdEZWxldGUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOauteiQvScsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBlbmFibGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgaXMgZW5hYmxlZCBvbiB0aGlzIHRhbGsgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfmnKzorqjorrrpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3QgYWxsb3dlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGNhbm5vdCB1c2UgRWFzeSBBcmNoaXZlIHRvIGFyY2hpdmUgdGhyZWFkcyBvbiB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOS4jeWPr+S7peWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOS4jeWPr+S7peWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQgZGV0YWlscyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlc2UgcGFnZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlOiBBcnRpY2xlLCBGaWxlLCBUZW1wbGF0ZSwgTW9kdWxlLCBNZWRpYVdpa2ksIENhdGVnb3J5LCBTcGVjaWFsLCBKYXZhU2NyaXB0LCBDU1MsIEpTT04uJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+i/meS6m+mhtemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77ya5p2h55uu44CBRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6YCZ5Lqb6aCB6Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJrmop3nm67vvIxGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0fSksXG5cdFx0J05vIEFyY2hpdmUgTG9jYXRpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBjYW4gYmUgdXNlZCBvbiB0aGlzIHBhZ2UgaWYgbmVlZGVkLiBUbyBlbmFibGUgaXQsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+iLpemcgOimge+8jOatpOmhtemdouWPr+S7peWQr+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6K+35Zyo6aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+iLpemcgOimge+8jOatpOmggemdouWPr+S7peWVn+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6KuL5Zyo6aCB6Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn1944CCJyxcblx0XHR9KSxcblx0XHQnKCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnICgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdCcpJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHQnLic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdFx0UmVmcmVzaGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WNs+WwhuWIt+aWsOW9k+WJjemhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfljbPlsIfph43mlrDovInlhaXnlbbliY3poIHigKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge29uQ2xpY2tXcmFwLCBwaXBlRWxlbWVudCwgc2VjdGlvbklkU3BhbkVsZW1lbnR9IGZyb20gJy4vcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHthcmNoaXZlU2VjdGlvbn0gZnJvbSAnLi9hcmNoaXZlU2VjdGlvbic7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNlY3Rpb25zfSBmcm9tICcuL3BhcnNlJztcbmltcG9ydCB7cmVmcmVzaH0gZnJvbSAnLi9yZWZyZXNoUGFnZSc7XG5pbXBvcnQge3JlbW92ZVNlY3Rpb259IGZyb20gJy4vcmVtb3ZlU2VjdGlvbic7XG5pbXBvcnQge3JlcGxhY2VDaGlsZH0gZnJvbSAnLi9yZXBsYWNlQ2hpbGQnO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGFkZExpbmtzID0gYXN5bmMgKHtcblx0YXJjTGV2ZWwsXG5cdGFyY0xvYyxcblx0c2VjQXJjLFxuXHRzZWNEZWwsXG59OiB7XG5cdGFyY0xldmVsOiBzdHJpbmc7XG5cdGFyY0xvYzogc3RyaW5nO1xuXHRzZWNBcmM6IHN0cmluZztcblx0c2VjRGVsOiBzdHJpbmc7XG59KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRjb25zdCBoZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGgke2FyY0xldmVsfWApO1xuXHRjb25zdCBoZWFkbGluZXMgPSBbXTtcblx0Y29uc3QgaGVhZGluZ0luZGljZXMgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGhlYWRpbmcgb2YgaGVhZGluZ3MpIHtcblx0XHRjb25zdCBoZWFkbGluZSA9IGhlYWRpbmcucXVlcnlTZWxlY3RvcignLm13LWhlYWRsaW5lJyk7XG5cdFx0aGVhZGxpbmVzW2hlYWRsaW5lcy5sZW5ndGhdID0gaGVhZGxpbmU/LmlkO1xuXHR9XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zVG9BcmNoaXZlKSB7XG5cdFx0aWYgKHNlY3Rpb24ubGV2ZWwgIT09IGFyY0xldmVsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoaGVhZGxpbmVzLmluY2x1ZGVzKHNlY3Rpb24uYW5jaG9yKSkge1xuXHRcdFx0aGVhZGluZ0luZGljZXNbaGVhZGluZ0luZGljZXMubGVuZ3RoXSA9IHtcblx0XHRcdFx0aW5kZXg6IHNlY3Rpb24uaW5kZXgsXG5cdFx0XHRcdGlkOiBzZWN0aW9uLmFuY2hvcixcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCB7aW5kZXgsIGlkfSBvZiBoZWFkaW5nSW5kaWNlcykge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1xdWVyeS1zZWxlY3RvclxuXHRcdGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRcdGlmICghaGVhZGxpbmUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhcmVudEhlYWRpbmcgPSBoZWFkbGluZS5wYXJlbnRFbGVtZW50O1xuXHRcdGlmICghcGFyZW50SGVhZGluZykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdFNlY3Rpb24gPSBwYXJlbnRIZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdGlmICghZWRpdFNlY3Rpb24pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlY3Rpb25JZFNwYW4gPSBzZWN0aW9uSWRTcGFuRWxlbWVudCgpO1xuXHRcdGlmIChzZWNBcmMgPT09ICcxJykge1xuXHRcdFx0c2VjdGlvbklkU3Bhbi5hcHBlbmQoXG5cdFx0XHRcdG9uQ2xpY2tXcmFwKGdldE1lc3NhZ2UoJ0FyY2hpdmUnKSwgJ2FyY2hpdmUnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGNvbnN0IHBhcmVudEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8ucGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHRpZiAoIXBhcmVudEVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVwbGFjZUNoaWxkKHBhcmVudEVsZW1lbnQsIDxzcGFuPntnZXRNZXNzYWdlKCdBcmNoaXZpbmcnKX08L3NwYW4+KTtcblx0XHRcdFx0XHRsZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0XHRcdFx0XHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0FyY2hpdmluZycpLFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J2luZm8nXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR2b2lkIGFyY2hpdmVTZWN0aW9uKGluZGV4LCBpZCwgYXJjTG9jKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0XHRcdFx0XHRyZXBsYWNlQ2hpbGQocGFyZW50RWxlbWVudCwgPHNwYW4+e2dldE1lc3NhZ2UoJ0FyY2hpdmVkJyl9PC9zcGFuPik7XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdBcmNoaXZlZCcpLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J3N1Y2Nlc3MnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmVmcmVzaCgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKHNlY0FyYyA9PT0gJzEnICYmIHNlY0RlbCA9PT0gJzEnKSB7XG5cdFx0XHRzZWN0aW9uSWRTcGFuLmFwcGVuZChwaXBlRWxlbWVudCgpKTtcblx0XHR9XG5cdFx0aWYgKHNlY0RlbCA9PT0gJzEnKSB7XG5cdFx0XHRzZWN0aW9uSWRTcGFuLmFwcGVuZChcblx0XHRcdFx0b25DbGlja1dyYXAoZ2V0TWVzc2FnZSgnRGVsZXRlJyksICdkZWxldGUnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGNvbnN0IHBhcmVudEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8ucGFyZW50RWxlbWVudDtcblx0XHRcdFx0XHRpZiAoIXBhcmVudEVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVwbGFjZUNoaWxkKHBhcmVudEVsZW1lbnQsIDxzcGFuPntnZXRNZXNzYWdlKCdEZWxldGluZycpfTwvc3Bhbj4pO1xuXHRcdFx0XHRcdGxldCB0b2FzdGlmeUluc3RhbmNlOiBUb2FzdGlmeUluc3RhbmNlID0ge1xuXHRcdFx0XHRcdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRGVsZXRpbmcnKSxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCdpbmZvJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dm9pZCByZW1vdmVTZWN0aW9uKGluZGV4LCBpZCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRcdFx0cmVwbGFjZUNoaWxkKHBhcmVudEVsZW1lbnQsIDxzcGFuPntnZXRNZXNzYWdlKCdEZWxldGVkJyl9PC9zcGFuPik7XG5cdFx0XHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdEZWxldGVkJyksXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMgKiAxMDAwLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnc3VjY2Vzcydcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRyZWZyZXNoKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRlZGl0U2VjdGlvbi5wcmVwZW5kKHNlY3Rpb25JZFNwYW4pO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZExpbmtzfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEVhc3lBcmNoaXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgY2hlY2tJZlBhZ2VFeGlzdCA9IGFzeW5jIChhcmNoaXZlVG86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbmZvJyxcblx0XHR0aXRsZXM6IGFyY2hpdmVUbyxcblx0fTtcblxuXHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdGlmIChxdWVyeS5wYWdlc1swXT8ubWlzc2luZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tJZlBhZ2VFeGlzdH07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgZ2V0U2VjdGlvbnMgPSBhc3luYyAodGl0bGU6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cGFnZTogdGl0bGUsXG5cdFx0cHJvcDogJ3NlY3Rpb25zJyxcblx0fTtcblxuXHRjb25zdCB7cGFyc2V9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdGNvbnN0IHtcblx0XHRzZWN0aW9ucyxcblx0fToge1xuXHRcdHNlY3Rpb25zOiB7XG5cdFx0XHRsZXZlbDogc3RyaW5nO1xuXHRcdFx0aW5kZXg6IHN0cmluZztcblx0XHRcdGFuY2hvcjogc3RyaW5nO1xuXHRcdH1bXTtcblx0fSA9IHBhcnNlO1xuXG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gW107XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0Y29uc3Qge2xldmVsLCBpbmRleCwgYW5jaG9yfSA9IHNlY3Rpb247XG5cblx0XHRpZiAoaW5kZXguc3RhcnRzV2l0aCgnVC0nKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0c2VjdGlvbnNUb0FyY2hpdmVbc2VjdGlvbnNUb0FyY2hpdmUubGVuZ3RoXSA9IHtcblx0XHRcdGxldmVsLFxuXHRcdFx0aW5kZXgsXG5cdFx0XHRhbmNob3IsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBzZWN0aW9uc1RvQXJjaGl2ZTtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbnN9O1xuIiwgImltcG9ydCB7Z2V0U2VjdGlvbnN9IGZyb20gJy4vcGFyc2UnO1xuXG5jb25zdCBjaGVja0lmU2VjdGlvbkV4aXN0ID0gYXN5bmMgKGluZGV4OiBzdHJpbmcsIGFuY2hvcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnMgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRsZXQgaWZTZWN0aW9uRXhpc3QgPSBmYWxzZTtcblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0aWYgKGluZGV4ID09PSBzZWN0aW9uLmluZGV4ICYmIGFuY2hvciA9PT0gc2VjdGlvbi5hbmNob3IpIHtcblx0XHRcdGlmU2VjdGlvbkV4aXN0ID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGlmU2VjdGlvbkV4aXN0O1xufTtcblxuZXhwb3J0IHtjaGVja0lmU2VjdGlvbkV4aXN0fTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9uQ29udGVudCA9IGFzeW5jICh0aXRsZTogc3RyaW5nLCBzZWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRydnNlY3Rpb246IHNlY3Rpb24sXG5cdH07XG5cblx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxuXHRyZXR1cm4gcXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQgPz8gbnVsbDtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2NoZWNrSWZTZWN0aW9uRXhpc3R9IGZyb20gJy4vY2hlY2tJZlNlY3Rpb25FeGlzdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNlY3Rpb25Db250ZW50fSBmcm9tICcuL2dldFNlY3Rpb25Db250ZW50JztcblxuY29uc3QgcmVtb3ZlU2VjdGlvbiA9IGFzeW5jIChpbmRleDogc3RyaW5nLCBhbmNob3I6IHN0cmluZywgc3VtbWFyeT86IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlmU2VjdGlvbkV4aXN0ID0gYXdhaXQgY2hlY2tJZlNlY3Rpb25FeGlzdChpbmRleCwgYW5jaG9yKTtcblxuXHRpZiAoaWZTZWN0aW9uRXhpc3QgIT09IHRydWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0U2VjdGlvbkNvbnRlbnQod2dQYWdlTmFtZSwgaW5kZXgpO1xuXG5cdGlmIChjb250ZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXdhaXQgYXBpLmVkaXQod2dQYWdlTmFtZSwgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZWN0aW9uOiBpbmRleCxcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0c3VtbWFyeTogc3VtbWFyeSA/PyBnZXRNZXNzYWdlKCdEZWxldGUgc3VtbWFyeScpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG59O1xuXG5leHBvcnQge3JlbW92ZVNlY3Rpb259O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2NoZWNrSWZQYWdlRXhpc3R9IGZyb20gJy4vY2hlY2tJZlBhZ2VFeGlzdCc7XG5pbXBvcnQge2NoZWNrSWZTZWN0aW9uRXhpc3R9IGZyb20gJy4vY2hlY2tJZlNlY3Rpb25FeGlzdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNlY3Rpb25Db250ZW50fSBmcm9tICcuL2dldFNlY3Rpb25Db250ZW50JztcbmltcG9ydCB7cmVtb3ZlU2VjdGlvbn0gZnJvbSAnLi9yZW1vdmVTZWN0aW9uJztcblxuY29uc3QgYXJjaGl2ZVNlY3Rpb24gPSBhc3luYyAoaW5kZXg6IHN0cmluZywgYW5jaG9yOiBzdHJpbmcsIGFyY2hpdmVUbzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaWZTZWN0aW9uRXhpc3QgPSBhd2FpdCBjaGVja0lmU2VjdGlvbkV4aXN0KGluZGV4LCBhbmNob3IpO1xuXG5cdGlmIChpZlNlY3Rpb25FeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh3Z1BhZ2VOYW1lLCBpbmRleCk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYWdlRXhpc3QgPSBhd2FpdCBjaGVja0lmUGFnZUV4aXN0KGFyY2hpdmVUbyk7XG5cdGlmICghcGFnZUV4aXN0KSB7XG5cdFx0YXdhaXQgYXBpLmNyZWF0ZShcblx0XHRcdGFyY2hpdmVUbyxcblx0XHRcdHtcblx0XHRcdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnQ3JlYXRlIHN1bW1hcnknKSxcblx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0J3t7dGFsa2FyY2hpdmV9fSdcblx0XHQpO1xuXHR9XG5cblx0YXdhaXQgYXBpLmVkaXQoYXJjaGl2ZVRvLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFwcGVuZHRleHQ6IGBcXG5cXG4ke2NvbnRlbnR9YCxcblx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG5cblx0YXdhaXQgcmVtb3ZlU2VjdGlvbih3Z1BhZ2VOYW1lLCBpbmRleCwgZ2V0TWVzc2FnZSgnQXJjaGl2ZSBzdW1tYXJ5JykpO1xufTtcblxuZXhwb3J0IHthcmNoaXZlU2VjdGlvbn07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHt3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IHJlZnJlc2ggPSAodGFyZ2V0UGFnZT86IHN0cmluZyk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdSZWZyZXNoaW5nJyksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxvY2F0aW9uLnJlcGxhY2UoXG5cdFx0bXcudXRpbC5nZXRVcmwod2dTY3JpcHQsIHtcblx0XHRcdHRpdGxlOiB0YXJnZXRQYWdlID8/IHdnUGFnZU5hbWUsXG5cdFx0fSlcblx0KTtcbn07XG5cbmV4cG9ydCB7cmVmcmVzaH07XG4iLCAiY29uc3QgcmVwbGFjZUNoaWxkID0gKGVsZW1lbnQ6IEVsZW1lbnQsIG5ld0NoaWxkOiBFbGVtZW50KTogdm9pZCA9PiB7XG5cdHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdGVsZW1lbnQuZmlyc3RDaGlsZD8ucmVtb3ZlKCk7XG5cdH1cblx0ZWxlbWVudC5hcHBlbmQobmV3Q2hpbGQpO1xufTtcblxuZXhwb3J0IHtyZXBsYWNlQ2hpbGR9O1xuIiwgImNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHtkYXRhc2V0fSA9IHNldHRpbmdzO1xuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gZGF0YXNldDtcblx0cmV0dXJuIHtcblx0XHRhcmNMZXZlbDogYXJjTGV2ZWwgPz8gJzInLFxuXHRcdGFyY0xvYzogYXJjTG9jID8/IG51bGwsXG5cdFx0c2VjQXJjOiBzZWNBcmMgPz8gJzEnLFxuXHRcdHNlY0RlbDogc2VjRGVsID8/ICcxJyxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2V0U2V0dGluZ3N9O1xuIiwgImNvbnN0IGlmQXJjTG9jTm90QWxsb3dlZCA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNvdXJjZVRpdGxlID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpO1xuXHRjb25zdCBhcmNMb2NUaXRsZSA9IG5ldyBtdy5UaXRsZShhcmNMb2MpO1xuXG5cdGNvbnN0IGFyY0xvY05hbWVzcGFjZUlkID0gYXJjTG9jVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3QgYXJjTG9jUGFnZU5hbWUgPSBhcmNMb2NUaXRsZS5nZXRNYWluKCk7XG5cdGNvbnN0IHNvdXJjZU5hbWVzcGFjZUlkID0gc291cmNlVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3Qgc291cmNlUGFnZU5hbWUgPSBzb3VyY2VUaXRsZS5nZXRNYWluKCk7XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoYXJjTG9jTmFtZXNwYWNlSWQgPT09IHNvdXJjZU5hbWVzcGFjZUlkICYmIGFyY0xvY1BhZ2VOYW1lID09PSBzb3VyY2VQYWdlTmFtZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHtpZkFyY0xvY05vdEFsbG93ZWR9O1xuIiwgImNvbnN0IGlzSW5CbGFja2xpc3QgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBibGFja0xpc3RSZWdleEFyciA9IFtcblx0XHQvXkZpbGU6LiokLyxcblx0XHQvXk1lZGlhV2lraTouKiQvLFxuXHRcdC9eTW9kdWxlOi4qJC8sXG5cdFx0L15DYXRlZ29yeTouKiQvLFxuXHRcdC9eVGVtcGxhdGU6LiokLyxcblx0XHQvXlNwZWNpYWw6LiokLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmNzcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzb24kLyxcblx0XTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmxhY2tMaXN0UmVnZXhBcnIpIHtcblx0XHRpZiAoZWxlbWVudC50ZXN0KHdnUGFnZU5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQge2lzSW5CbGFja2xpc3R9O1xuIiwgImNvbnN0IGlzTm90QWxsb3dlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1JlbGV2YW50VXNlck5hbWUsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICgod2dOYW1lc3BhY2VOdW1iZXIgPT09IDIgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDMpICYmICEod2dSZWxldmFudFVzZXJOYW1lID09PSB3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHtpc05vdEFsbG93ZWR9O1xuIiwgImNvbnN0IGlzTm90U3VwcG9ydGVkID0gKCkgPT4ge1xuXHRjb25zdCB7d2dJc01haW5QYWdlLCB3Z05hbWVzcGFjZU51bWJlciwgd2dDdXJSZXZpc2lvbklkLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDAgfHwgd2dDdXJSZXZpc2lvbklkIC0gd2dSZXZpc2lvbklkICE9PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDAgfHwgd2dJc01haW5QYWdlKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQge2lzTm90U3VwcG9ydGVkfTtcbiIsICJpbXBvcnQgJy4vRWFzeUFyY2hpdmUubGVzcyc7XG5pbXBvcnQge1xuXHRhcmNMb2NOb3RBbGxvd2VkRm9vdGVyTm90aWNlLFxuXHRlbmFibGVkRm9vdGVyTm90aWNlLFxuXHRpbkJsYWNrbGlzdEZvb3Rlck5vdGljZSxcblx0bm9BcmNMb2NGb290ZXJOb3RpY2UsXG5cdG5vdEFsbG93ZWRlZEZvb3Rlck5vdGljZSxcbn0gZnJvbSAnLi9tb2R1bGVzL2Zvb3Rlck5vdGljZSc7XG5pbXBvcnQge2FkZExpbmtzfSBmcm9tICcuL21vZHVsZXMvYWRkTGlua3MnO1xuaW1wb3J0IHtnZXRTZXR0aW5nc30gZnJvbSAnLi9tb2R1bGVzL3NldHRpbmdzJztcbmltcG9ydCB7aWZBcmNMb2NOb3RBbGxvd2VkfSBmcm9tICcuL21vZHVsZXMvaWZBcmNMb2NOb3RBbGxvd2VkJztcbmltcG9ydCB7aXNJbkJsYWNrbGlzdH0gZnJvbSAnLi9tb2R1bGVzL2lzSW5CbGFja2xpc3QnO1xuaW1wb3J0IHtpc05vdEFsbG93ZWR9IGZyb20gJy4vbW9kdWxlcy9pc05vdEFsbG93ZWQnO1xuaW1wb3J0IHtpc05vdFN1cHBvcnRlZH0gZnJvbSAnLi9tb2R1bGVzL2lzTm90U3VwcG9ydGVkJztcblxuKGZ1bmN0aW9uIGVhc3lBcmNoaXZlKCkge1xuXHRjb25zdCBub3RTdXBwb3J0ZWQgPSBpc05vdFN1cHBvcnRlZCgpO1xuXHRpZiAobm90U3VwcG9ydGVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaW5CbGFja2xpc3QgPSBpc0luQmxhY2tsaXN0KCk7XG5cdGlmIChpbkJsYWNrbGlzdCkge1xuXHRcdGluQmxhY2tsaXN0Rm9vdGVyTm90aWNlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgbm90QWxsb3dlZCA9IGlzTm90QWxsb3dlZCgpO1xuXHRpZiAobm90QWxsb3dlZCkge1xuXHRcdG5vdEFsbG93ZWRlZEZvb3Rlck5vdGljZSgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3MoKTtcblx0aWYgKCFzZXR0aW5ncykge1xuXHRcdG5vQXJjTG9jRm9vdGVyTm90aWNlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge2FyY0xldmVsLCBhcmNMb2MsIHNlY0FyYywgc2VjRGVsfSA9IHNldHRpbmdzO1xuXHRpZiAoIWFyY0xvYykge1xuXHRcdG5vQXJjTG9jRm9vdGVyTm90aWNlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYXJjTG9jTm90QWxsb3dlZCA9IGlmQXJjTG9jTm90QWxsb3dlZChhcmNMb2MpO1xuXHRpZiAoYXJjTG9jTm90QWxsb3dlZCkge1xuXHRcdGFyY0xvY05vdEFsbG93ZWRGb290ZXJOb3RpY2UoYXJjTG9jKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGFkZExpbmtzKHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0pO1xuXHRlbmFibGVkRm9vdGVyTm90aWNlKGFyY0xvYyk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxxQkFBc0I7QUFDdEIsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxxQkFBa0NDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQyxJQUFBQyxvQkFBa0NGLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBO0FBRWxDLElBQU1FLGNBQWNBLENBQUNDLElBQVlDLGlCQUErQjtBQUMvRCxRQUFNO0lBQUNDO0VBQUksSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUU3QixNQUFJSCxTQUFTLFdBQVc7QUFDdkIsV0FDQ0osa0NBQUFRLFFBQUFDLGNBQUMsV0FBQTtNQUFRQyxXQUFXLENBQUMsbUJBQW1CLG9DQUFvQztNQUFHUjtJQUFBLEdBQzdFQyxZQUNGO0VBRUYsV0FBVyxDQUFDLFVBQVUsZUFBZSxRQUFRLEVBQUVRLFNBQVNQLElBQUksS0FBS1EsU0FBU0MsY0FBYyxnQkFBZ0IsR0FBRztBQUMxRyxXQUNDYixrQ0FBQVEsUUFBQUMsY0FBQyxNQUFBO01BQUdQO01BQVFRLFdBQVc7SUFBQSxHQUNyQlAsWUFDRjtFQUVGO0FBQ0EsU0FDQ0gsa0NBQUFRLFFBQUFDLGNBQUMsT0FBQTtJQUFJUDtJQUFRUSxXQUFXO0VBQUEsR0FDdEJQLFlBQ0Y7QUFFRjtBQUVBLElBQU1X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ekI7RUFDRDtBQUVBLFFBQU11SSxXQUFXRCxZQUFZO0FBQzdCLE1BQUksQ0FBQ0MsVUFBVTtBQUNkdEkseUJBQXFCO0FBQ3JCO0VBQ0Q7QUFFQSxRQUFNO0lBQUN5RztJQUFVdkc7SUFBUXdHO0lBQVFDO0VBQU0sSUFBSTJCO0FBQzNDLE1BQUksQ0FBQ3BJLFFBQVE7QUFDWkYseUJBQXFCO0FBQ3JCO0VBQ0Q7QUFFQSxRQUFNbUssbUJBQW1CM0IsbUJBQW1CdEksTUFBTTtBQUNsRCxNQUFJaUssa0JBQWtCO0FBQ3JCbEssaUNBQTZCQyxNQUFNO0FBQ25DO0VBQ0Q7QUFFQSxPQUFLcUcsU0FBUztJQUFDRTtJQUFVdkc7SUFBUXdHO0lBQVFDO0VBQU0sQ0FBQztBQUNoRHhHLHNCQUFvQkQsTUFBTTtBQUMzQixHQUFHOyIsCiAgIm5hbWVzIjogWyJtb3VudFBvaW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImVsZW1lbnRXcmFwIiwgImlkIiwgImlubmVyRWxlbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIm9uQ2xpY2tXcmFwIiwgInRleHRDb250ZW50IiwgIm9uQ2xpY2siLCAiY2xhc3MiLCAiY29uY2F0IiwgInBpcGVFbGVtZW50IiwgInNlY3Rpb25JZFNwYW5FbGVtZW50IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiQXJjaGl2ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJBcmNoaXZpbmciLCAiQXJjaGl2ZWQiLCAiRGVsZXRlIiwgIkRlbGV0aW5nIiwgIkRlbGV0ZWQiLCAiemgiLCAiUmVmcmVzaGluZyIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZm9vdGVyTm90aWNlIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJ0YWciLCAicXVlcnlTZWxlY3RvckFsbCIsICJwcmVwZW5kIiwgInNhbml0aXplIiwgInN0cmluZyIsICJyZXBsYWNlIiwgImluQmxhY2tsaXN0Rm9vdGVyTm90aWNlIiwgIm5vdEFsbG93ZWRlZEZvb3Rlck5vdGljZSIsICJub0FyY0xvY0Zvb3Rlck5vdGljZSIsICJhcmNMb2NOb3RBbGxvd2VkRm9vdGVyTm90aWNlIiwgImFyY0xvYyIsICJlbmFibGVkRm9vdGVyTm90aWNlIiwgInRpdGxlIiwgImhyZWYiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNoZWNrSWZQYWdlRXhpc3QiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJhcmNoaXZlVG8iLCAiX3F1ZXJ5JHBhZ2VzJCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgInF1ZXJ5IiwgInBhZ2VzIiwgIm1pc3NpbmciLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldFNlY3Rpb25zIiwgIl9yZWYyIiwgInBhZ2UiLCAicGFyc2UiLCAic2VjdGlvbnMiLCAic2VjdGlvbnNUb0FyY2hpdmUiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAic2VjdGlvbiIsICJ2YWx1ZSIsICJsZXZlbCIsICJpbmRleCIsICJhbmNob3IiLCAic3RhcnRzV2l0aCIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeDIiLCAiY2hlY2tJZlNlY3Rpb25FeGlzdCIsICJfcmVmMyIsICJ3Z1BhZ2VOYW1lIiwgImlmU2VjdGlvbkV4aXN0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIl94MyIsICJfeDQiLCAiZ2V0U2VjdGlvbkNvbnRlbnQiLCAiX3JlZjQiLCAiX3F1ZXJ5JHBhZ2VzJDAkcmV2aXNpIiwgInJ2cHJvcCIsICJydnNlY3Rpb24iLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAicmV2aXNpb25zIiwgImNvbnRlbnQiLCAiX3g1IiwgIl94NiIsICJyZW1vdmVTZWN0aW9uIiwgIl9yZWY1IiwgInN1bW1hcnkiLCAiZWRpdCIsICJ0ZXh0IiwgIm1pbm9yIiwgIl94NyIsICJfeDgiLCAiX3g5IiwgImFyY2hpdmVTZWN0aW9uIiwgIl9yZWY2IiwgInBhZ2VFeGlzdCIsICJjcmVhdGUiLCAiYXBwZW5kdGV4dCIsICJfeDEwIiwgIl94MTEiLCAiX3gxMiIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAid2dTY3JpcHQiLCAicmVmcmVzaCIsICJ0YXJnZXRQYWdlIiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInV0aWwiLCAiZ2V0VXJsIiwgInJlcGxhY2VDaGlsZCIsICJlbGVtZW50IiwgIm5ld0NoaWxkIiwgImhhc0NoaWxkTm9kZXMiLCAiX2VsZW1lbnQkZmlyc3RDaGlsZCIsICJmaXJzdENoaWxkIiwgInJlbW92ZSIsICJhcHBlbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ3IiwgImFkZExpbmtzIiwgIl9yZWY3IiwgImFyY0xldmVsIiwgInNlY0FyYyIsICJzZWNEZWwiLCAiaGVhZGluZ3MiLCAiaGVhZGxpbmVzIiwgImhlYWRpbmdJbmRpY2VzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImhlYWRpbmciLCAiaGVhZGxpbmUiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiX2kiLCAiX2hlYWRpbmdJbmRpY2VzIiwgImdldEVsZW1lbnRCeUlkIiwgInBhcmVudEhlYWRpbmciLCAicGFyZW50RWxlbWVudCIsICJlZGl0U2VjdGlvbiIsICJzZWN0aW9uSWRTcGFuIiwgImV2ZW50IiwgIl9ldmVudCR0YXJnZXQiLCAicHJldmVudERlZmF1bHQiLCAidGFyZ2V0IiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInRoZW4iLCAiX2V2ZW50JHRhcmdldDIiLCAiX3gxMyIsICJnZXRTZXR0aW5ncyIsICJzZXR0aW5ncyIsICJkYXRhc2V0IiwgImlmQXJjTG9jTm90QWxsb3dlZCIsICJzb3VyY2VUaXRsZSIsICJUaXRsZSIsICJhcmNMb2NUaXRsZSIsICJhcmNMb2NOYW1lc3BhY2VJZCIsICJnZXROYW1lc3BhY2VJZCIsICJhcmNMb2NQYWdlTmFtZSIsICJnZXRNYWluIiwgInNvdXJjZU5hbWVzcGFjZUlkIiwgInNvdXJjZVBhZ2VOYW1lIiwgImlzSW5CbGFja2xpc3QiLCAiYmxhY2tMaXN0UmVnZXhBcnIiLCAiX2kyIiwgIl9ibGFja0xpc3RSZWdleEFyciIsICJ0ZXN0IiwgImlzTm90QWxsb3dlZCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1JlbGV2YW50VXNlck5hbWUiLCAid2dVc2VyTmFtZSIsICJpc05vdFN1cHBvcnRlZCIsICJ3Z0lzTWFpblBhZ2UiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJlYXN5QXJjaGl2ZSIsICJub3RTdXBwb3J0ZWQiLCAiaW5CbGFja2xpc3QiLCAibm90QWxsb3dlZCIsICJhcmNMb2NOb3RBbGxvd2VkIl0KfQo=
