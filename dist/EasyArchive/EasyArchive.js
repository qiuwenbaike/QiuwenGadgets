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
//! src/EasyArchive/modules/util/react.tsx
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
var spanWrap = (innerHTML) => /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  innerHTML
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
  var _ref2 = _asyncToGenerator(function* (title, section) {
    var _response$query$pages;
    const params = {
      action: "query",
      prop: ["revisions"],
      rvprop: "content",
      format: "json",
      formatversion: "2",
      titles: title,
      rvsection: section
    };
    const response = yield api.get(params);
    return (_response$query$pages = response["query"].pages[0].revisions[0].content) !== null && _response$query$pages !== void 0 ? _response$query$pages : null;
  });
  return function getSectionContent2(_x2, _x3) {
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
  return function checkIfPageExist2(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
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
    yield removeSection(index, anchor, getMessage("Archive summary"));
  });
  return function archiveSection2(_x10, _x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
//! src/EasyArchive/modules/util/refreshPage.ts
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
      const sectionIdSpan = sectionIdSpanElement();
      const archiveSectionLink = onClickWrap(getMessage("Archive"), "archive", (event) => {
        var _event$target;
        event.preventDefault();
        const parentElement = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.parentElement;
        if (!parentElement) {
          return;
        }
        replaceChild(parentElement, spanWrap(getMessage("Archiving")));
        let toastifyInstance = {
          hideToast: () => {
          }
        };
        toastifyInstance = (0, import_ext_gadget6.toastify)({
          text: getMessage("Archiving"),
          duration: -1
        }, "info");
        void archiveSection(index, id, arcLoc).then(() => {
          toastifyInstance.hideToast();
          replaceChild(parentElement, spanWrap(getMessage("Archived")));
          toastifyInstance = (0, import_ext_gadget6.toastify)({
            text: getMessage("Archived"),
            duration: 3 * 1e3
          }, "success");
          refresh();
        });
      });
      const removeSectionLink = onClickWrap(getMessage("Delete"), "delete", (event) => {
        var _event$target2;
        event.preventDefault();
        const parentElement = (_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.parentElement;
        if (!parentElement) {
          return;
        }
        replaceChild(parentElement, spanWrap(getMessage("Deleting")));
        let toastifyInstance = {
          hideToast: () => {
          }
        };
        toastifyInstance = (0, import_ext_gadget6.toastify)({
          text: getMessage("Deleting"),
          duration: -1
        }, "info");
        void removeSection(index, id).then(() => {
          toastifyInstance.hideToast();
          replaceChild(parentElement, spanWrap(getMessage("Deleted")));
          toastifyInstance = (0, import_ext_gadget6.toastify)({
            text: getMessage("Deleted"),
            duration: 3 * 1e3
          }, "success");
          refresh();
        });
      });
      if (secArc === "1") {
        sectionIdSpan.append(archiveSectionLink);
      }
      if (secArc === "1" && secDel === "1") {
        sectionIdSpan.append(pipeElement());
      }
      if (secDel === "1") {
        sectionIdSpan.append(removeSectionLink);
      }
      editSection.prepend(sectionIdSpan);
    }
  });
  return function addLinks2(_x13) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9mb290ZXJOb3RpY2UudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvcmVhY3QudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvaXNJbkRpc2FsbG93ZWRMaXN0LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2FwaS50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2dldFNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9jaGVja0lmRXhpc3QudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvcmVtb3ZlU2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9hcmNoaXZlU2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL3JlZnJlc2hQYWdlLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvcmVwbGFjZUNoaWxkLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2FkZExpbmtzLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2dldFNldHRpbmdzLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9FYXN5QXJjaGl2ZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwidmVyc2lvblwiOiBcIjEuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7ZWxlbWVudFdyYXB9IGZyb20gJy4vdXRpbC9yZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGZvb3Rlck5vdGljZSA9IChpZDogc3RyaW5nLCBpbm5lckVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgUmVhY3RFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHRhZyA9IGVsZW1lbnRXcmFwKGlkLCBpbm5lckVsZW1lbnQpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcilbMF0/LnByZXBlbmQodGFnKTtcbn07XG5cbmNvbnN0IHNhbml0aXplID0gKHN0cmluZzogc3RyaW5nKSA9PlxuXHRzdHJpbmdcblx0XHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuXHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0LnJlcGxhY2UoLycvZywgJyZhcG9zOycpXG5cdFx0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcblxuY29uc3QgaW5CbGFja2xpc3RGb290ZXJOb3RpY2UgPSAoKSA9PiB7XG5cdGZvb3Rlck5vdGljZShcblx0XHQnZWFzeV9hcmNoaXZlX25vdF9zdXBwb3J0ZWRfbm90aWNlJyxcblx0XHQ8c3Bhbj5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCcpfVxuXHRcdFx0PGJyIC8+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQgZGV0YWlscycpfVxuXHRcdDwvc3Bhbj5cblx0KTtcbn07XG5cbmNvbnN0IG5vdEFsbG93ZWRlZEZvb3Rlck5vdGljZSA9ICgpID0+IHtcblx0Zm9vdGVyTm90aWNlKCdlYXN5X2FyY2hpdmVfbm90X2FsbG93ZWRfbm90aWNlJywgPHNwYW4+e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3QgYWxsb3dlZCcpfTwvc3Bhbj4pO1xufTtcblxuY29uc3Qgbm9BcmNMb2NGb290ZXJOb3RpY2UgPSAoKSA9PiB7XG5cdGZvb3Rlck5vdGljZSgnZWFzeV9hcmNoaXZlX25vX2FyY19sb2Nfbm90aWNlJywgPHNwYW4+e2dldE1lc3NhZ2UoJ05vIEFyY2hpdmUgTG9jYXRpb24nKX08L3NwYW4+KTtcbn07XG5cbmNvbnN0IGFyY0xvY05vdEFsbG93ZWRGb290ZXJOb3RpY2UgPSAoYXJjTG9jOiBzdHJpbmcpID0+IHtcblx0Zm9vdGVyTm90aWNlKFxuXHRcdCdlYXN5X2FyY2hpdmVfYXJjX2xvY19ub3RfYWxsb3dlZF9ub3RpY2UnLFxuXHRcdDxzcGFuPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQnKS5yZXBsYWNlKCckMScsIHNhbml0aXplKGFyY0xvYykpfVxuXHRcdFx0PGJyIC8+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCBkZXRhaWxzJyl9XG5cdFx0PC9zcGFuPlxuXHQpO1xufTtcblxuY29uc3QgZW5hYmxlZEZvb3Rlck5vdGljZSA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRmb290ZXJOb3RpY2UoXG5cdFx0J2Vhc3lfYXJjaGl2ZV9zdXBwb3J0c19ub3RpY2UnLFxuXHRcdDxzcGFuPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBlbmFibGVkJyl9XG5cdFx0XHR7Z2V0TWVzc2FnZSgnKCcpfVxuXHRcdFx0e2dldE1lc3NhZ2UoJ0FyY2hpdmUgbG9jYXRpb24nKX1cblx0XHRcdDxhIHRpdGxlPXtzYW5pdGl6ZShhcmNMb2MpfSBocmVmPXtgL3dpa2kvJHtzYW5pdGl6ZShhcmNMb2MpfWB9PlxuXHRcdFx0XHR7c2FuaXRpemUoYXJjTG9jKX1cblx0XHRcdDwvYT5cblx0XHRcdHtnZXRNZXNzYWdlKCcpJyl9XG5cdFx0XHR7Z2V0TWVzc2FnZSgnLicpfVxuXHRcdDwvc3Bhbj5cblx0KTtcbn07XG5cbmV4cG9ydCB7XG5cdGFyY0xvY05vdEFsbG93ZWRGb290ZXJOb3RpY2UsXG5cdGVuYWJsZWRGb290ZXJOb3RpY2UsXG5cdGluQmxhY2tsaXN0Rm9vdGVyTm90aWNlLFxuXHRub0FyY0xvY0Zvb3Rlck5vdGljZSxcblx0bm90QWxsb3dlZGVkRm9vdGVyTm90aWNlLFxufTtcbiIsICJpbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9IChpZDogc3RyaW5nLCBpbm5lckVsZW1lbnQ6IFJlYWN0RWxlbWVudCkgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1sncGFnZS1pbmZvX19pdGVtJywgJ2dhZGdldC1lYXN5X2FyY2hpdmVfX2Zvb3Rlcl9ub3RpY2UnXX0gaWQ9e2lkfT5cblx0XHRcdFx0e2lubmVyRWxlbWVudH1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9IGVsc2UgaWYgKFsndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJywgJ2dvbmdiaSddLmluY2x1ZGVzKHNraW4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGlkPXtpZH0gY2xhc3NOYW1lPXsnZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fZm9vdGVyX25vdGljZSd9PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9saT5cblx0XHQpO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD17aWR9IGNsYXNzTmFtZT17J2dhZGdldC1lYXN5X2FyY2hpdmVfX2Zvb3Rlcl9ub3RpY2UnfT5cblx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5jb25zdCBvbkNsaWNrV3JhcCA9ICh0ZXh0Q29udGVudDogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZywgb25DbGljaz86IChldmVudDogRXZlbnQpID0+IHZvaWQpID0+IChcblx0PGFcblx0XHRjbGFzcz17WydnYWRnZXQtZWFzeV9hcmNoaXZlX19saW5rJywgYGdhZGdldC1lYXN5X2FyY2hpdmVfX2xpbmstJHtjbGFzc05hbWV9YF19XG5cdFx0b25DbGljaz17b25DbGlja31cblx0XHR0ZXh0Q29udGVudD17dGV4dENvbnRlbnR9XG5cdC8+XG4pO1xuXG5jb25zdCBwaXBlRWxlbWVudCA9ICgpID0+IDxzcGFuIGNsYXNzPVwibXctZWRpdHNlY3Rpb24tZGl2aWRlclwiIHRleHRDb250ZW50PXsnfCd9IC8+O1xuXG5jb25zdCBzZWN0aW9uSWRTcGFuRWxlbWVudCA9ICgpID0+IDxzcGFuIGNsYXNzPXtbJ2dhZGdldC1lYXN5X2FyY2hpdmVfX3NlY3Rpb24taWQtc3BhbiddfSAvPjtcblxuY29uc3Qgc3BhbldyYXAgPSAoaW5uZXJIVE1MOiBzdHJpbmcpID0+IDxzcGFuIGlubmVySFRNTD17aW5uZXJIVE1MfSAvPjtcblxuZXhwb3J0IHtlbGVtZW50V3JhcCwgb25DbGlja1dyYXAsIHBpcGVFbGVtZW50LCBzZWN0aW9uSWRTcGFuRWxlbWVudCwgc3BhbldyYXB9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRBcmNoaXZlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgbG9jYXRpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FyY2hpdmUgbG9jYXRpb246ICcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPlnLDlnYDvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU6Iez77yaJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZSBhcmNoaXZlIGxvY2F0aW9uIG9mIHRoaXMgcGFnZSwgXCIkMVwiLCBidXQgRWFzeSBhcmNoaXZlIGNhbm5vdCBvcGVyYXRlIGxpa2UgdGhpcy4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i55uu5YmN55qE5a2Y5qGj5Zyw5Z2A5piv4oCcJDHigJ3jgIJFYXN5IEFyY2hpdmUg5peg5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdoueVtuWJjeeahOWtmOaqlOWcsOWdgOaYr+OAjCQx44CN44CCRWFzeSBBcmNoaXZlIOeEoeazleaMieatpOWcsOWdgOWtmOaqlOOAgicsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgTG9jYXRpb24gbm90IGFsbG93ZWQgZGV0YWlscyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZXMgc2hvdWxkIG5vdCBiZSBub3JtYWxseSBkaXJlY3RlZCB0byBwYWdlcyB1bmRlciBhcnRpY2xlIG5hbWVzcGFjZS4gUGxlYXNlIGNoZWNrIGlmIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGFyY2hpdmUgbG9jYXRpb24uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4gOiIrOiAjOiogO+8jOS4jeW6lOWQkeadoeebruWQjeensOepuumXtOi/m+ihjOWtmOaho+OAguatpOWklu+8jOWtmOaho+WcsOWdgOS4jeW+l+WSjOatpOmhtemdouWQjeensOebuOWQjOOAguivt+ajgOafpeWtmOaho+WcsOWdgOOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfkuIDoiKzogIzoqIDvvIzkuI3mh4nlkJHmop3nm67lkI3nqLHnqbrplpPpgLLooYzlrZjmqpTjgILmraTlpJbvvIzlrZjmqpTlnLDlnYDkuI3lvpflkozmraTpoIHpnaLlkI3nqLHnm7jlkIzjgILoq4vmqqLmn6XlrZjmqpTlnLDlnYDjgIInLFxuXHRcdH0pLFxuXHRcdEFyY2hpdmluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5LitJyxcblx0XHR9KSxcblx0XHRBcmNoaXZlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5a2Y5qqUJyxcblx0XHR9KSxcblx0XHREZWxldGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaQnLFxuXHRcdH0pLFxuXHRcdERlbGV0aW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2JlaW5nIGRlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOS4rScsXG5cdFx0fSksXG5cdFx0RGVsZXRlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWIoOmZpCcsXG5cdFx0XHQnemgtaGFudCc6ICflt7LliKrpmaQnLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaPmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqU5q616JC9Jyxcblx0XHR9KSxcblx0XHQnQ3JlYXRlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2NyZWF0ZSBhcmNoaXZlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W7uueri+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflu7rnq4vlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdCdEZWxldGUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6Zmk5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpOauteiQvScsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBlbmFibGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFYXN5IEFyY2hpdmUgaXMgZW5hYmxlZCBvbiB0aGlzIHRhbGsgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfmnKzorqjorrrpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZlIOW/q+mAn+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0Vhc3kgQXJjaGl2ZSBub3QgYWxsb3dlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGNhbm5vdCB1c2UgRWFzeSBBcmNoaXZlIHRvIGFyY2hpdmUgdGhyZWFkcyBvbiB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aCqOS4jeWPr+S7peWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGj44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+aCqOS4jeWPr+S7peWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IEVhc3kgQXJjaGl2ZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5LiN5pSv5oyBIEVhc3kgQXJjaGl2ZeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBzdXBwb3J0ZWQgZGV0YWlscyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlc2UgcGFnZXMgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlOiBBcnRpY2xlLCBGaWxlLCBUZW1wbGF0ZSwgTW9kdWxlLCBNZWRpYVdpa2ksIENhdGVnb3J5LCBTcGVjaWFsLCBKYXZhU2NyaXB0LCBDU1MsIEpTT04uJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+i/meS6m+mhtemdouS4jeWPlyBFYXN5IEFyY2hpdmUg5pSv5oyB77ya5p2h55uu44CBRmlsZeOAgVRlbXBsYXRl44CBTW9kdWxl44CBTWVkaWFXaWtp44CBQ2F0ZWdvcnnjgIFTcGVjaWFs44CBSmF2YVNjcmlwdOOAgUNTU+OAgUpTT07jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6YCZ5Lqb6aCB6Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJrmop3nm67vvIxGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0fSksXG5cdFx0J05vIEFyY2hpdmUgTG9jYXRpb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBjYW4gYmUgdXNlZCBvbiB0aGlzIHBhZ2UgaWYgbmVlZGVkLiBUbyBlbmFibGUgaXQsIGFkZCB7e0Vhc3kgQXJjaGl2ZXx0bz1bQXJjaGl2ZSBsb2NhdGlvbl19fSB0ZW1wbGF0ZSB0byB0aGlzIHBhZ2UuJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+iLpemcgOimge+8jOatpOmhtemdouWPr+S7peWQr+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpobXpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6K+35Zyo6aG16Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaho+S9jee9rn1944CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+iLpemcgOimge+8jOatpOmggemdouWPr+S7peWVn+eUqCBFYXN5IEFyY2hpdmXjgILoi6XopoHlnKjmraTpoIHpnaLkvb/nlKggRWFzeSBBcmNoaXZl77yM6KuL5Zyo6aCB6Z2i5LiK5re75Yqg5qih5p2/IHt7RWFzeSBBcmNoaXZlfHRvPeWtmOaqlOS9jee9rn1944CCJyxcblx0XHR9KSxcblx0XHQnKCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnICgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdCcpJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHQnLic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdFx0UmVmcmVzaGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWZyZXNoaW5nLi4uJyxcblx0XHRcdGphOiAn5YaN6Kqt44G/6L6844G/44GX44G+44GZLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WNs+WwhuWIt+aWsOW9k+WJjemhtemdouKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfljbPlsIfph43mlrDovInlhaXnlbbliY3poIHigKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBpZkFyY0xvY05vdEFsbG93ZWQgPSAoYXJjTG9jOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzb3VyY2VUaXRsZSA9IG5ldyBtdy5UaXRsZSh3Z1BhZ2VOYW1lKTtcblx0Y29uc3QgYXJjTG9jVGl0bGUgPSBuZXcgbXcuVGl0bGUoYXJjTG9jKTtcblxuXHRjb25zdCBhcmNMb2NOYW1lc3BhY2VJZCA9IGFyY0xvY1RpdGxlLmdldE5hbWVzcGFjZUlkKCk7XG5cdGNvbnN0IGFyY0xvY1BhZ2VOYW1lID0gYXJjTG9jVGl0bGUuZ2V0TWFpbigpO1xuXHRjb25zdCBzb3VyY2VOYW1lc3BhY2VJZCA9IHNvdXJjZVRpdGxlLmdldE5hbWVzcGFjZUlkKCk7XG5cdGNvbnN0IHNvdXJjZVBhZ2VOYW1lID0gc291cmNlVGl0bGUuZ2V0TWFpbigpO1xuXG5cdGlmIChhcmNMb2NOYW1lc3BhY2VJZCA9PT0gMCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSBzb3VyY2VOYW1lc3BhY2VJZCAmJiBhcmNMb2NQYWdlTmFtZSA9PT0gc291cmNlUGFnZU5hbWUpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzSW5CbGFja2xpc3QgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBibGFja0xpc3RSZWdleEFyciA9IFtcblx0XHQvXkZpbGU6LiokLyxcblx0XHQvXk1lZGlhV2lraTouKiQvLFxuXHRcdC9eTW9kdWxlOi4qJC8sXG5cdFx0L15DYXRlZ29yeTouKiQvLFxuXHRcdC9eVGVtcGxhdGU6LiokLyxcblx0XHQvXlNwZWNpYWw6LiokLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmNzcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzb24kLyxcblx0XTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmxhY2tMaXN0UmVnZXhBcnIpIHtcblx0XHRpZiAoZWxlbWVudC50ZXN0KHdnUGFnZU5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc05vdEFsbG93ZWQgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dSZWxldmFudFVzZXJOYW1lLCB3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoKHdnTmFtZXNwYWNlTnVtYmVyID09PSAyIHx8IHdnTmFtZXNwYWNlTnVtYmVyID09PSAzKSAmJiAhKHdnUmVsZXZhbnRVc2VyTmFtZSA9PT0gd2dVc2VyTmFtZSkpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBpc05vdFN1cHBvcnRlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnSXNNYWluUGFnZSwgd2dOYW1lc3BhY2VOdW1iZXIsIHdnQ3VyUmV2aXNpb25JZCwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwIHx8IHdnQ3VyUmV2aXNpb25JZCAtIHdnUmV2aXNpb25JZCAhPT0gMCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwIHx8IHdnSXNNYWluUGFnZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHtpZkFyY0xvY05vdEFsbG93ZWQsIGlzSW5CbGFja2xpc3QsIGlzTm90QWxsb3dlZCwgaXNOb3RTdXBwb3J0ZWR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgRWFzeUFyY2hpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcblxuY29uc3QgZ2V0U2VjdGlvbnMgPSBhc3luYyAodGl0bGU6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cGFnZTogdGl0bGUsXG5cdFx0cHJvcDogJ3NlY3Rpb25zJyxcblx0fTtcblxuXHRjb25zdCB7cGFyc2V9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdGNvbnN0IHtcblx0XHRzZWN0aW9ucyxcblx0fToge1xuXHRcdHNlY3Rpb25zOiB7XG5cdFx0XHRsZXZlbDogc3RyaW5nO1xuXHRcdFx0aW5kZXg6IHN0cmluZztcblx0XHRcdGFuY2hvcjogc3RyaW5nO1xuXHRcdH1bXTtcblx0fSA9IHBhcnNlO1xuXG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gW107XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0Y29uc3Qge2xldmVsLCBpbmRleCwgYW5jaG9yfSA9IHNlY3Rpb247XG5cblx0XHRpZiAoaW5kZXguc3RhcnRzV2l0aCgnVC0nKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0c2VjdGlvbnNUb0FyY2hpdmVbc2VjdGlvbnNUb0FyY2hpdmUubGVuZ3RoXSA9IHtcblx0XHRcdGxldmVsLFxuXHRcdFx0aW5kZXgsXG5cdFx0XHRhbmNob3IsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBzZWN0aW9uc1RvQXJjaGl2ZTtcbn07XG5cbmNvbnN0IGdldFNlY3Rpb25Db250ZW50ID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcsIHNlY3Rpb246IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRwcm9wOiBbJ3JldmlzaW9ucyddLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdHJ2c2VjdGlvbjogc2VjdGlvbixcblx0fTtcblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cblx0cmV0dXJuIHJlc3BvbnNlWydxdWVyeSddLnBhZ2VzWzBdLnJldmlzaW9uc1swXS5jb250ZW50ID8/IG51bGw7XG59O1xuXG5leHBvcnQge2dldFNlY3Rpb25zLCBnZXRTZWN0aW9uQ29udGVudH07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldFNlY3Rpb25zfSBmcm9tICcuL2dldFNlY3Rpb24nO1xuXG5jb25zdCBjaGVja0lmUGFnZUV4aXN0ID0gYXN5bmMgKGFyY2hpdmVUbzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbmZvUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2luZm8nLFxuXHRcdHRpdGxlczogYXJjaGl2ZVRvLFxuXHR9O1xuXG5cdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0aWYgKHF1ZXJ5LnBhZ2VzWzBdPy5taXNzaW5nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgY2hlY2tJZlNlY3Rpb25FeGlzdCA9IGFzeW5jIChpbmRleDogc3RyaW5nLCBhbmNob3I6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25zID0gYXdhaXQgZ2V0U2VjdGlvbnMod2dQYWdlTmFtZSk7XG5cblx0bGV0IGlmU2VjdGlvbkV4aXN0ID0gZmFsc2U7XG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuXHRcdGlmIChpbmRleCA9PT0gc2VjdGlvbi5pbmRleCAmJiBhbmNob3IgPT09IHNlY3Rpb24uYW5jaG9yKSB7XG5cdFx0XHRpZlNlY3Rpb25FeGlzdCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBpZlNlY3Rpb25FeGlzdDtcbn07XG5cbmV4cG9ydCB7Y2hlY2tJZlNlY3Rpb25FeGlzdCwgY2hlY2tJZlBhZ2VFeGlzdH07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Y2hlY2tJZlNlY3Rpb25FeGlzdH0gZnJvbSAnLi91dGlsL2NoZWNrSWZFeGlzdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNlY3Rpb25Db250ZW50fSBmcm9tICcuL3V0aWwvZ2V0U2VjdGlvbic7XG5cbmNvbnN0IHJlbW92ZVNlY3Rpb24gPSBhc3luYyAoaW5kZXg6IHN0cmluZywgYW5jaG9yOiBzdHJpbmcsIHN1bW1hcnk/OiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpZlNlY3Rpb25FeGlzdCA9IGF3YWl0IGNoZWNrSWZTZWN0aW9uRXhpc3QoaW5kZXgsIGFuY2hvcik7XG5cblx0aWYgKGlmU2VjdGlvbkV4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHdnUGFnZU5hbWUsIGluZGV4KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGF3YWl0IGFwaS5lZGl0KHdnUGFnZU5hbWUsICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VjdGlvbjogaW5kZXgsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdHN1bW1hcnk6IHN1bW1hcnkgPz8gZ2V0TWVzc2FnZSgnRGVsZXRlIHN1bW1hcnknKSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xufTtcblxuZXhwb3J0IHtyZW1vdmVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2NoZWNrSWZQYWdlRXhpc3QsIGNoZWNrSWZTZWN0aW9uRXhpc3R9IGZyb20gJy4vdXRpbC9jaGVja0lmRXhpc3QnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9IGZyb20gJy4vdXRpbC9nZXRTZWN0aW9uJztcbmltcG9ydCB7cmVtb3ZlU2VjdGlvbn0gZnJvbSAnLi9yZW1vdmVTZWN0aW9uJztcblxuY29uc3QgYXJjaGl2ZVNlY3Rpb24gPSBhc3luYyAoaW5kZXg6IHN0cmluZywgYW5jaG9yOiBzdHJpbmcsIGFyY2hpdmVUbzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaWZTZWN0aW9uRXhpc3QgPSBhd2FpdCBjaGVja0lmU2VjdGlvbkV4aXN0KGluZGV4LCBhbmNob3IpO1xuXG5cdGlmIChpZlNlY3Rpb25FeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh3Z1BhZ2VOYW1lLCBpbmRleCk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYWdlRXhpc3QgPSBhd2FpdCBjaGVja0lmUGFnZUV4aXN0KGFyY2hpdmVUbyk7XG5cdGlmICghcGFnZUV4aXN0KSB7XG5cdFx0YXdhaXQgYXBpLmNyZWF0ZShcblx0XHRcdGFyY2hpdmVUbyxcblx0XHRcdHtcblx0XHRcdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnQ3JlYXRlIHN1bW1hcnknKSxcblx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0J3t7dGFsa2FyY2hpdmV9fSdcblx0XHQpO1xuXHR9XG5cblx0YXdhaXQgYXBpLmVkaXQoYXJjaGl2ZVRvLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFwcGVuZHRleHQ6IGBcXG5cXG4ke2NvbnRlbnR9YCxcblx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG5cblx0YXdhaXQgcmVtb3ZlU2VjdGlvbihpbmRleCwgYW5jaG9yLCBnZXRNZXNzYWdlKCdBcmNoaXZlIHN1bW1hcnknKSk7XG59O1xuXG5leHBvcnQge2FyY2hpdmVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHt3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmNvbnN0IHJlZnJlc2ggPSAodGFyZ2V0UGFnZT86IHN0cmluZyk6IHZvaWQgPT4ge1xuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdSZWZyZXNoaW5nJyksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnc3VjY2Vzcydcblx0KTtcblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGxvY2F0aW9uLnJlcGxhY2UoXG5cdFx0bXcudXRpbC5nZXRVcmwod2dTY3JpcHQsIHtcblx0XHRcdHRpdGxlOiB0YXJnZXRQYWdlID8/IHdnUGFnZU5hbWUsXG5cdFx0fSlcblx0KTtcbn07XG5cbmV4cG9ydCB7cmVmcmVzaH07XG4iLCAiY29uc3QgcmVwbGFjZUNoaWxkID0gKGVsZW1lbnQ6IEVsZW1lbnQsIG5ld0NoaWxkOiBFbGVtZW50KTogdm9pZCA9PiB7XG5cdHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdGVsZW1lbnQuZmlyc3RDaGlsZD8ucmVtb3ZlKCk7XG5cdH1cblx0ZWxlbWVudC5hcHBlbmQobmV3Q2hpbGQpO1xufTtcblxuZXhwb3J0IHtyZXBsYWNlQ2hpbGR9O1xuIiwgImltcG9ydCB7b25DbGlja1dyYXAsIHBpcGVFbGVtZW50LCBzZWN0aW9uSWRTcGFuRWxlbWVudCwgc3BhbldyYXB9IGZyb20gJy4vdXRpbC9yZWFjdCc7XG5pbXBvcnQge2FyY2hpdmVTZWN0aW9ufSBmcm9tICcuL2FyY2hpdmVTZWN0aW9uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0U2VjdGlvbnN9IGZyb20gJy4vdXRpbC9nZXRTZWN0aW9uJztcbmltcG9ydCB7cmVmcmVzaH0gZnJvbSAnLi91dGlsL3JlZnJlc2hQYWdlJztcbmltcG9ydCB7cmVtb3ZlU2VjdGlvbn0gZnJvbSAnLi9yZW1vdmVTZWN0aW9uJztcbmltcG9ydCB7cmVwbGFjZUNoaWxkfSBmcm9tICcuL3V0aWwvcmVwbGFjZUNoaWxkJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBhZGRMaW5rcyA9IGFzeW5jICh7XG5cdGFyY0xldmVsLFxuXHRhcmNMb2MsXG5cdHNlY0FyYyxcblx0c2VjRGVsLFxufToge1xuXHRhcmNMZXZlbDogc3RyaW5nO1xuXHRhcmNMb2M6IHN0cmluZztcblx0c2VjQXJjOiBzdHJpbmc7XG5cdHNlY0RlbDogc3RyaW5nO1xufSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gYXdhaXQgZ2V0U2VjdGlvbnMod2dQYWdlTmFtZSk7XG5cblx0Y29uc3QgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBoJHthcmNMZXZlbH1gKTtcblx0Y29uc3QgaGVhZGxpbmVzID0gW107XG5cdGNvbnN0IGhlYWRpbmdJbmRpY2VzID0gW107XG5cblx0Zm9yIChjb25zdCBoZWFkaW5nIG9mIGhlYWRpbmdzKSB7XG5cdFx0Y29uc3QgaGVhZGxpbmUgPSBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1oZWFkbGluZScpO1xuXHRcdGhlYWRsaW5lc1toZWFkbGluZXMubGVuZ3RoXSA9IGhlYWRsaW5lPy5pZDtcblx0fVxuXG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9uc1RvQXJjaGl2ZSkge1xuXHRcdGlmIChzZWN0aW9uLmxldmVsICE9PSBhcmNMZXZlbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGhlYWRsaW5lcy5pbmNsdWRlcyhzZWN0aW9uLmFuY2hvcikpIHtcblx0XHRcdGhlYWRpbmdJbmRpY2VzW2hlYWRpbmdJbmRpY2VzLmxlbmd0aF0gPSB7XG5cdFx0XHRcdGluZGV4OiBzZWN0aW9uLmluZGV4LFxuXHRcdFx0XHRpZDogc2VjdGlvbi5hbmNob3IsXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdGZvciAoY29uc3Qge2luZGV4LCBpZH0gb2YgaGVhZGluZ0luZGljZXMpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItcXVlcnktc2VsZWN0b3Jcblx0XHRjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0XHRpZiAoIWhlYWRsaW5lKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBwYXJlbnRIZWFkaW5nID0gaGVhZGxpbmUucGFyZW50RWxlbWVudDtcblx0XHRpZiAoIXBhcmVudEhlYWRpbmcpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGVkaXRTZWN0aW9uID0gcGFyZW50SGVhZGluZy5xdWVyeVNlbGVjdG9yKCcubXctZWRpdHNlY3Rpb24nKTtcblx0XHRpZiAoIWVkaXRTZWN0aW9uKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBzZWN0aW9uSWRTcGFuID0gc2VjdGlvbklkU3BhbkVsZW1lbnQoKTtcblx0XHRjb25zdCBhcmNoaXZlU2VjdGlvbkxpbmsgPSBvbkNsaWNrV3JhcChnZXRNZXNzYWdlKCdBcmNoaXZlJyksICdhcmNoaXZlJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgcGFyZW50RWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpPy5wYXJlbnRFbGVtZW50O1xuXHRcdFx0aWYgKCFwYXJlbnRFbGVtZW50KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJlcGxhY2VDaGlsZChwYXJlbnRFbGVtZW50LCBzcGFuV3JhcChnZXRNZXNzYWdlKCdBcmNoaXZpbmcnKSkpO1xuXHRcdFx0bGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdFx0XHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdFx0XHR9O1xuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnQXJjaGl2aW5nJyksXG5cdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW5mbydcblx0XHRcdCk7XG5cdFx0XHR2b2lkIGFyY2hpdmVTZWN0aW9uKGluZGV4LCBpZCwgYXJjTG9jKS50aGVuKCgpID0+IHtcblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0XHRcdFx0cmVwbGFjZUNoaWxkKHBhcmVudEVsZW1lbnQsIHNwYW5XcmFwKGdldE1lc3NhZ2UoJ0FyY2hpdmVkJykpKTtcblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0FyY2hpdmVkJyksXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQnc3VjY2Vzcydcblx0XHRcdFx0KTtcblx0XHRcdFx0cmVmcmVzaCgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Y29uc3QgcmVtb3ZlU2VjdGlvbkxpbmsgPSBvbkNsaWNrV3JhcChnZXRNZXNzYWdlKCdEZWxldGUnKSwgJ2RlbGV0ZScsIChldmVudCkgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnN0IHBhcmVudEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KT8ucGFyZW50RWxlbWVudDtcblx0XHRcdGlmICghcGFyZW50RWxlbWVudCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRyZXBsYWNlQ2hpbGQocGFyZW50RWxlbWVudCwgc3BhbldyYXAoZ2V0TWVzc2FnZSgnRGVsZXRpbmcnKSkpO1xuXHRcdFx0bGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdFx0XHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdFx0XHR9O1xuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRGVsZXRpbmcnKSxcblx0XHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdpbmZvJ1xuXHRcdFx0KTtcblx0XHRcdHZvaWQgcmVtb3ZlU2VjdGlvbihpbmRleCwgaWQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRyZXBsYWNlQ2hpbGQocGFyZW50RWxlbWVudCwgc3BhbldyYXAoZ2V0TWVzc2FnZSgnRGVsZXRlZCcpKSk7XG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UgPSB0b2FzdGlmeShcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdEZWxldGVkJyksXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMyAqIDEwMDAsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQnc3VjY2Vzcydcblx0XHRcdFx0KTtcblx0XHRcdFx0cmVmcmVzaCgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRpZiAoc2VjQXJjID09PSAnMScpIHtcblx0XHRcdHNlY3Rpb25JZFNwYW4uYXBwZW5kKGFyY2hpdmVTZWN0aW9uTGluayk7XG5cdFx0fVxuXHRcdGlmIChzZWNBcmMgPT09ICcxJyAmJiBzZWNEZWwgPT09ICcxJykge1xuXHRcdFx0c2VjdGlvbklkU3Bhbi5hcHBlbmQocGlwZUVsZW1lbnQoKSk7XG5cdFx0fVxuXHRcdGlmIChzZWNEZWwgPT09ICcxJykge1xuXHRcdFx0c2VjdGlvbklkU3Bhbi5hcHBlbmQocmVtb3ZlU2VjdGlvbkxpbmspO1xuXHRcdH1cblx0XHRlZGl0U2VjdGlvbi5wcmVwZW5kKHNlY3Rpb25JZFNwYW4pO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZExpbmtzfTtcbiIsICJjb25zdCBnZXRTZXR0aW5ncyA9ICgpID0+IHtcblx0Y29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWFzeV9hcmNoaXZlX2RhdGFfcG9pbnRfY29sbGVjdGlvbicpIGFzIEhUTUxFbGVtZW50O1xuXHRpZiAoIXNldHRpbmdzKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCB7ZGF0YXNldH0gPSBzZXR0aW5ncztcblx0Y29uc3Qge2FyY0xldmVsLCBhcmNMb2MsIHNlY0FyYywgc2VjRGVsfSA9IGRhdGFzZXQ7XG5cdHJldHVybiB7XG5cdFx0YXJjTGV2ZWw6IGFyY0xldmVsID8/ICcyJyxcblx0XHRhcmNMb2M6IGFyY0xvYyA/PyBudWxsLFxuXHRcdHNlY0FyYzogc2VjQXJjID8/ICcxJyxcblx0XHRzZWNEZWw6IHNlY0RlbCA/PyAnMScsXG5cdH07XG59O1xuXG5leHBvcnQge2dldFNldHRpbmdzfTtcbiIsICJpbXBvcnQgJy4vRWFzeUFyY2hpdmUubGVzcyc7XG5pbXBvcnQge1xuXHRhcmNMb2NOb3RBbGxvd2VkRm9vdGVyTm90aWNlLFxuXHRlbmFibGVkRm9vdGVyTm90aWNlLFxuXHRpbkJsYWNrbGlzdEZvb3Rlck5vdGljZSxcblx0bm9BcmNMb2NGb290ZXJOb3RpY2UsXG5cdG5vdEFsbG93ZWRlZEZvb3Rlck5vdGljZSxcbn0gZnJvbSAnLi9tb2R1bGVzL2Zvb3Rlck5vdGljZSc7XG5pbXBvcnQge2lmQXJjTG9jTm90QWxsb3dlZCwgaXNJbkJsYWNrbGlzdCwgaXNOb3RBbGxvd2VkLCBpc05vdFN1cHBvcnRlZH0gZnJvbSAnLi9tb2R1bGVzL2lzSW5EaXNhbGxvd2VkTGlzdCc7XG5pbXBvcnQge2FkZExpbmtzfSBmcm9tICcuL21vZHVsZXMvYWRkTGlua3MnO1xuaW1wb3J0IHtnZXRTZXR0aW5nc30gZnJvbSAnLi9tb2R1bGVzL2dldFNldHRpbmdzJztcblxuKGZ1bmN0aW9uIGVhc3lBcmNoaXZlKCkge1xuXHRjb25zdCBub3RTdXBwb3J0ZWQgPSBpc05vdFN1cHBvcnRlZCgpO1xuXHRpZiAobm90U3VwcG9ydGVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaW5CbGFja2xpc3QgPSBpc0luQmxhY2tsaXN0KCk7XG5cdGlmIChpbkJsYWNrbGlzdCkge1xuXHRcdGluQmxhY2tsaXN0Rm9vdGVyTm90aWNlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgbm90QWxsb3dlZCA9IGlzTm90QWxsb3dlZCgpO1xuXHRpZiAobm90QWxsb3dlZCkge1xuXHRcdG5vdEFsbG93ZWRlZEZvb3Rlck5vdGljZSgpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3MoKTtcblx0aWYgKCFzZXR0aW5ncykge1xuXHRcdG5vQXJjTG9jRm9vdGVyTm90aWNlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge2FyY0xldmVsLCBhcmNMb2MsIHNlY0FyYywgc2VjRGVsfSA9IHNldHRpbmdzO1xuXHRpZiAoIWFyY0xvYykge1xuXHRcdG5vQXJjTG9jRm9vdGVyTm90aWNlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYXJjTG9jTm90QWxsb3dlZCA9IGlmQXJjTG9jTm90QWxsb3dlZChhcmNMb2MpO1xuXHRpZiAoYXJjTG9jTm90QWxsb3dlZCkge1xuXHRcdGFyY0xvY05vdEFsbG93ZWRGb290ZXJOb3RpY2UoYXJjTG9jKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGFkZExpbmtzKHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0pO1xuXHRlbmFibGVkRm9vdGVyTm90aWNlKGFyY0xvYyk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxxQkFBc0I7QUFDdEIsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxxQkFBa0NDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQyxJQUFBQyxvQkFBa0NGLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBO0FBRWxDLElBQU1FLGNBQWNBLENBQUNDLElBQVlDLGlCQUErQjtBQUMvRCxRQUFNO0lBQUNDO0VBQUksSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUU3QixNQUFJSCxTQUFTLFdBQVc7QUFDdkIsV0FDQ0osa0NBQUFRLFFBQUFDLGNBQUMsV0FBQTtNQUFRQyxXQUFXLENBQUMsbUJBQW1CLG9DQUFv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QkMsUUFBUUEsV0FBQSxRQUFBQSxXQUFBLFNBQUFBLFNBQVU7RUFDbkI7QUFDRDs7Q0NGQyxTQUFTK0IsY0FBYztBQUN2QixRQUFNQyxlQUFlckksZUFBZTtBQUNwQyxNQUFJcUksY0FBYztBQUNqQjtFQUNEO0FBRUEsUUFBTUMsY0FBY2pKLGNBQWM7QUFDbEMsTUFBSWlKLGFBQWE7QUFDaEJwSyw0QkFBd0I7QUFDeEI7RUFDRDtBQUVBLFFBQU1xSyxhQUFhM0ksYUFBYTtBQUNoQyxNQUFJMkksWUFBWTtBQUNmcEssNkJBQXlCO0FBQ3pCO0VBQ0Q7QUFFQSxRQUFNK0osV0FBV0QsWUFBWTtBQUM3QixNQUFJLENBQUNDLFVBQVU7QUFDZDlKLHlCQUFxQjtBQUNyQjtFQUNEO0FBRUEsUUFBTTtJQUFDK0g7SUFBVTdIO0lBQVE4SDtJQUFRQztFQUFNLElBQUk2QjtBQUMzQyxNQUFJLENBQUM1SixRQUFRO0FBQ1pGLHlCQUFxQjtBQUNyQjtFQUNEO0FBRUEsUUFBTW9LLG1CQUFtQjlKLG1CQUFtQkosTUFBTTtBQUNsRCxNQUFJa0ssa0JBQWtCO0FBQ3JCbkssaUNBQTZCQyxNQUFNO0FBQ25DO0VBQ0Q7QUFFQSxPQUFLMkgsU0FBUztJQUFDRTtJQUFVN0g7SUFBUThIO0lBQVFDO0VBQU0sQ0FBQztBQUNoRDlILHNCQUFvQkQsTUFBTTtBQUMzQixHQUFHOyIsCiAgIm5hbWVzIjogWyJtb3VudFBvaW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImVsZW1lbnRXcmFwIiwgImlkIiwgImlubmVyRWxlbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIm9uQ2xpY2tXcmFwIiwgInRleHRDb250ZW50IiwgIm9uQ2xpY2siLCAiY2xhc3MiLCAiY29uY2F0IiwgInBpcGVFbGVtZW50IiwgInNlY3Rpb25JZFNwYW5FbGVtZW50IiwgInNwYW5XcmFwIiwgImlubmVySFRNTCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFyY2hpdmUiLCAibG9jYWxpemUiLCAiZW4iLCAiQXJjaGl2aW5nIiwgIkFyY2hpdmVkIiwgIkRlbGV0ZSIsICJEZWxldGluZyIsICJEZWxldGVkIiwgInpoIiwgIlJlZnJlc2hpbmciLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImZvb3Rlck5vdGljZSIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAidGFnIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicHJlcGVuZCIsICJzYW5pdGl6ZSIsICJzdHJpbmciLCAicmVwbGFjZSIsICJpbkJsYWNrbGlzdEZvb3Rlck5vdGljZSIsICJub3RBbGxvd2VkZWRGb290ZXJOb3RpY2UiLCAibm9BcmNMb2NGb290ZXJOb3RpY2UiLCAiYXJjTG9jTm90QWxsb3dlZEZvb3Rlck5vdGljZSIsICJhcmNMb2MiLCAiZW5hYmxlZEZvb3Rlck5vdGljZSIsICJ0aXRsZSIsICJocmVmIiwgImlmQXJjTG9jTm90QWxsb3dlZCIsICJ3Z1BhZ2VOYW1lIiwgInNvdXJjZVRpdGxlIiwgIlRpdGxlIiwgImFyY0xvY1RpdGxlIiwgImFyY0xvY05hbWVzcGFjZUlkIiwgImdldE5hbWVzcGFjZUlkIiwgImFyY0xvY1BhZ2VOYW1lIiwgImdldE1haW4iLCAic291cmNlTmFtZXNwYWNlSWQiLCAic291cmNlUGFnZU5hbWUiLCAiaXNJbkJsYWNrbGlzdCIsICJibGFja0xpc3RSZWdleEFyciIsICJfaSIsICJfYmxhY2tMaXN0UmVnZXhBcnIiLCAibGVuZ3RoIiwgImVsZW1lbnQiLCAidGVzdCIsICJpc05vdEFsbG93ZWQiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dSZWxldmFudFVzZXJOYW1lIiwgIndnVXNlck5hbWUiLCAiaXNOb3RTdXBwb3J0ZWQiLCAid2dJc01haW5QYWdlIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1JldmlzaW9uSWQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiZ2V0U2VjdGlvbnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInBhZ2UiLCAicHJvcCIsICJwYXJzZSIsICJzZWN0aW9ucyIsICJzZWN0aW9uc1RvQXJjaGl2ZSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJzZWN0aW9uIiwgInZhbHVlIiwgImxldmVsIiwgImluZGV4IiwgImFuY2hvciIsICJzdGFydHNXaXRoIiwgImVyciIsICJlIiwgImYiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldFNlY3Rpb25Db250ZW50IiwgIl9yZWYyIiwgIl9yZXNwb25zZSRxdWVyeSRwYWdlcyIsICJydnByb3AiLCAidGl0bGVzIiwgInJ2c2VjdGlvbiIsICJyZXNwb25zZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAiY29udGVudCIsICJfeDIiLCAiX3gzIiwgImNoZWNrSWZQYWdlRXhpc3QiLCAiX3JlZjMiLCAiYXJjaGl2ZVRvIiwgIl9xdWVyeSRwYWdlcyQiLCAicXVlcnkiLCAibWlzc2luZyIsICJfeDQiLCAiY2hlY2tJZlNlY3Rpb25FeGlzdCIsICJfcmVmNCIsICJpZlNlY3Rpb25FeGlzdCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJfeDUiLCAiX3g2IiwgInJlbW92ZVNlY3Rpb24iLCAiX3JlZjUiLCAic3VtbWFyeSIsICJlZGl0IiwgInRleHQiLCAibWlub3IiLCAiX3g3IiwgIl94OCIsICJfeDkiLCAiYXJjaGl2ZVNlY3Rpb24iLCAiX3JlZjYiLCAicGFnZUV4aXN0IiwgImNyZWF0ZSIsICJhcHBlbmR0ZXh0IiwgIl94MTAiLCAiX3gxMSIsICJfeDEyIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJ3Z1NjcmlwdCIsICJyZWZyZXNoIiwgInRhcmdldFBhZ2UiLCAidG9hc3RpZnkiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iLCAidXRpbCIsICJnZXRVcmwiLCAicmVwbGFjZUNoaWxkIiwgIm5ld0NoaWxkIiwgImhhc0NoaWxkTm9kZXMiLCAiX2VsZW1lbnQkZmlyc3RDaGlsZCIsICJmaXJzdENoaWxkIiwgInJlbW92ZSIsICJhcHBlbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImFkZExpbmtzIiwgIl9yZWY3IiwgImFyY0xldmVsIiwgInNlY0FyYyIsICJzZWNEZWwiLCAiaGVhZGluZ3MiLCAiaGVhZGxpbmVzIiwgImhlYWRpbmdJbmRpY2VzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImhlYWRpbmciLCAiaGVhZGxpbmUiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiX2kyIiwgIl9oZWFkaW5nSW5kaWNlcyIsICJnZXRFbGVtZW50QnlJZCIsICJwYXJlbnRIZWFkaW5nIiwgInBhcmVudEVsZW1lbnQiLCAiZWRpdFNlY3Rpb24iLCAic2VjdGlvbklkU3BhbiIsICJhcmNoaXZlU2VjdGlvbkxpbmsiLCAiZXZlbnQiLCAiX2V2ZW50JHRhcmdldCIsICJwcmV2ZW50RGVmYXVsdCIsICJ0YXJnZXQiLCAidG9hc3RpZnlJbnN0YW5jZSIsICJoaWRlVG9hc3QiLCAidGhlbiIsICJyZW1vdmVTZWN0aW9uTGluayIsICJfZXZlbnQkdGFyZ2V0MiIsICJfeDEzIiwgImdldFNldHRpbmdzIiwgInNldHRpbmdzIiwgImRhdGFzZXQiLCAiZWFzeUFyY2hpdmUiLCAibm90U3VwcG9ydGVkIiwgImluQmxhY2tsaXN0IiwgIm5vdEFsbG93ZWQiLCAiYXJjTG9jTm90QWxsb3dlZCJdCn0K
