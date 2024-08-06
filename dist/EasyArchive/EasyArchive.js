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
//! src/EasyArchive/modules/util/EasyArchive.module.less
var footerNotice = "EasyArchive-module__footerNotice_UBwzXq";
var sectionIdSpan = "EasyArchive-module__sectionIdSpan_UBwzXq";
//! src/EasyArchive/modules/util/react.tsx
var elementWrap = (id, innerElement) => {
  const {
    skin
  } = mw.config.get();
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("section", {
      className: ["page-info__item", footerNotice],
      id
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("li", {
      id,
      className: footerNotice
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    id,
    className: footerNotice
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
  class: [sectionIdSpan]
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
  var _ref5 = _asyncToGenerator(function* ({
    index,
    anchor,
    summary
  }) {
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
  return function removeSection2(_x7) {
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
    yield removeSection({
      index,
      anchor,
      summary: getMessage("Archive summary")
    });
  });
  return function archiveSection2(_x8) {
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
        void archiveSection({
          index,
          anchor: id,
          archiveTo: arcLoc
        }).then(() => {
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
        void removeSection({
          index,
          anchor: id
        }).then(() => {
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
        sectionIdSpan2.append(archiveSectionLink);
      }
      if (secArc === "1" && secDel === "1") {
        sectionIdSpan2.append(pipeElement());
      }
      if (secDel === "1") {
        sectionIdSpan2.append(removeSectionLink);
      }
      editSection.prepend(sectionIdSpan2);
    }
  });
  return function addLinks2(_x9) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlL29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9mb290ZXJOb3RpY2UudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvcmVhY3QudHN4IiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvRWFzeUFyY2hpdmUubW9kdWxlLmxlc3MiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9pc0luRGlzYWxsb3dlZExpc3QudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvZ2V0U2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy91dGlsL2NoZWNrSWZFeGlzdC50cyIsICJzcmMvRWFzeUFyY2hpdmUvbW9kdWxlcy9yZW1vdmVTZWN0aW9uLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL2FyY2hpdmVTZWN0aW9uLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS9tb2R1bGVzL3V0aWwvcmVmcmVzaFBhZ2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9yZXBsYWNlQ2hpbGQudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvYWRkTGlua3MudHMiLCAic3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvZ2V0U2V0dGluZ3MudHMiLCAic3JjL0Vhc3lBcmNoaXZlL0Vhc3lBcmNoaXZlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtlbGVtZW50V3JhcH0gZnJvbSAnLi91dGlsL3JlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgZm9vdGVyTm90aWNlID0gKGlkOiBzdHJpbmcsIGlubmVyRWxlbWVudDogSFRNTEVsZW1lbnQgfCBSZWFjdEVsZW1lbnQpID0+IHtcblx0Y29uc3QgdGFnID0gZWxlbWVudFdyYXAoaWQsIGlubmVyRWxlbWVudCk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKVswXT8ucHJlcGVuZCh0YWcpO1xufTtcblxuY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+XG5cdHN0cmluZ1xuXHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXG5jb25zdCBpbkJsYWNrbGlzdEZvb3Rlck5vdGljZSA9ICgpID0+IHtcblx0Zm9vdGVyTm90aWNlKFxuXHRcdCdlYXN5X2FyY2hpdmVfbm90X3N1cHBvcnRlZF9ub3RpY2UnLFxuXHRcdDxzcGFuPlxuXHRcdFx0e2dldE1lc3NhZ2UoJ0Vhc3kgQXJjaGl2ZSBub3Qgc3VwcG9ydGVkJyl9XG5cdFx0XHQ8YnIgLz5cblx0XHRcdHtnZXRNZXNzYWdlKCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCBkZXRhaWxzJyl9XG5cdFx0PC9zcGFuPlxuXHQpO1xufTtcblxuY29uc3Qgbm90QWxsb3dlZGVkRm9vdGVyTm90aWNlID0gKCkgPT4ge1xuXHRmb290ZXJOb3RpY2UoJ2Vhc3lfYXJjaGl2ZV9ub3RfYWxsb3dlZF9ub3RpY2UnLCA8c3Bhbj57Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIG5vdCBhbGxvd2VkJyl9PC9zcGFuPik7XG59O1xuXG5jb25zdCBub0FyY0xvY0Zvb3Rlck5vdGljZSA9ICgpID0+IHtcblx0Zm9vdGVyTm90aWNlKCdlYXN5X2FyY2hpdmVfbm9fYXJjX2xvY19ub3RpY2UnLCA8c3Bhbj57Z2V0TWVzc2FnZSgnTm8gQXJjaGl2ZSBMb2NhdGlvbicpfTwvc3Bhbj4pO1xufTtcblxuY29uc3QgYXJjTG9jTm90QWxsb3dlZEZvb3Rlck5vdGljZSA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRmb290ZXJOb3RpY2UoXG5cdFx0J2Vhc3lfYXJjaGl2ZV9hcmNfbG9jX25vdF9hbGxvd2VkX25vdGljZScsXG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCcpLnJlcGxhY2UoJyQxJywgc2FuaXRpemUoYXJjTG9jKSl9XG5cdFx0XHQ8YnIgLz5cblx0XHRcdHtnZXRNZXNzYWdlKCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkIGRldGFpbHMnKX1cblx0XHQ8L3NwYW4+XG5cdCk7XG59O1xuXG5jb25zdCBlbmFibGVkRm9vdGVyTm90aWNlID0gKGFyY0xvYzogc3RyaW5nKSA9PiB7XG5cdGZvb3Rlck5vdGljZShcblx0XHQnZWFzeV9hcmNoaXZlX3N1cHBvcnRzX25vdGljZScsXG5cdFx0PHNwYW4+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnRWFzeSBBcmNoaXZlIGVuYWJsZWQnKX1cblx0XHRcdHtnZXRNZXNzYWdlKCcoJyl9XG5cdFx0XHR7Z2V0TWVzc2FnZSgnQXJjaGl2ZSBsb2NhdGlvbicpfVxuXHRcdFx0PGEgdGl0bGU9e3Nhbml0aXplKGFyY0xvYyl9IGhyZWY9e2Avd2lraS8ke3Nhbml0aXplKGFyY0xvYyl9YH0+XG5cdFx0XHRcdHtzYW5pdGl6ZShhcmNMb2MpfVxuXHRcdFx0PC9hPlxuXHRcdFx0e2dldE1lc3NhZ2UoJyknKX1cblx0XHRcdHtnZXRNZXNzYWdlKCcuJyl9XG5cdFx0PC9zcGFuPlxuXHQpO1xufTtcblxuZXhwb3J0IHtcblx0YXJjTG9jTm90QWxsb3dlZEZvb3Rlck5vdGljZSxcblx0ZW5hYmxlZEZvb3Rlck5vdGljZSxcblx0aW5CbGFja2xpc3RGb290ZXJOb3RpY2UsXG5cdG5vQXJjTG9jRm9vdGVyTm90aWNlLFxuXHRub3RBbGxvd2VkZWRGb290ZXJOb3RpY2UsXG59O1xuIiwgImltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2Zvb3Rlck5vdGljZSwgc2VjdGlvbklkU3Bhbn0gZnJvbSAnLi9FYXN5QXJjaGl2ZS5tb2R1bGUubGVzcyc7XG5cbmNvbnN0IGVsZW1lbnRXcmFwID0gKGlkOiBzdHJpbmcsIGlubmVyRWxlbWVudDogUmVhY3RFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17WydwYWdlLWluZm9fX2l0ZW0nLCBmb290ZXJOb3RpY2VdfSBpZD17aWR9PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgaWQ9e2lkfSBjbGFzc05hbWU9e2Zvb3Rlck5vdGljZX0+XG5cdFx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtmb290ZXJOb3RpY2V9PlxuXHRcdFx0e2lubmVyRWxlbWVudH1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmNvbnN0IG9uQ2xpY2tXcmFwID0gKHRleHRDb250ZW50OiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nLCBvbkNsaWNrPzogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCkgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzPXtbJ2dhZGdldC1lYXN5X2FyY2hpdmVfX2xpbmsnLCBgZ2FkZ2V0LWVhc3lfYXJjaGl2ZV9fbGluay0ke2NsYXNzTmFtZX1gXX1cblx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHRcdHRleHRDb250ZW50PXt0ZXh0Q29udGVudH1cblx0Lz5cbik7XG5cbmNvbnN0IHBpcGVFbGVtZW50ID0gKCkgPT4gPHNwYW4gY2xhc3M9XCJtdy1lZGl0c2VjdGlvbi1kaXZpZGVyXCIgdGV4dENvbnRlbnQ9eyd8J30gLz47XG5cbmNvbnN0IHNlY3Rpb25JZFNwYW5FbGVtZW50ID0gKCkgPT4gPHNwYW4gY2xhc3M9e1tzZWN0aW9uSWRTcGFuXX0gLz47XG5cbmNvbnN0IHNwYW5XcmFwID0gKGlubmVySFRNTDogc3RyaW5nKSA9PiA8c3BhbiBpbm5lckhUTUw9e2lubmVySFRNTH0gLz47XG5cbmV4cG9ydCB7ZWxlbWVudFdyYXAsIG9uQ2xpY2tXcmFwLCBwaXBlRWxlbWVudCwgc2VjdGlvbklkU3BhbkVsZW1lbnQsIHNwYW5XcmFwfTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0Vhc3lBcmNoaXZlL21vZHVsZXMvdXRpbC9FYXN5QXJjaGl2ZS5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGZvb3Rlck5vdGljZSA9IFwiRWFzeUFyY2hpdmUtbW9kdWxlX19mb290ZXJOb3RpY2VfVUJ3elhxXCI7XG5leHBvcnQgY29uc3Qgc2VjdGlvbklkU3BhbiA9IFwiRWFzeUFyY2hpdmUtbW9kdWxlX19zZWN0aW9uSWRTcGFuX1VCd3pYcVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZm9vdGVyTm90aWNlXCI6IGZvb3Rlck5vdGljZSxcbiAgXCJzZWN0aW9uSWRTcGFuXCI6IHNlY3Rpb25JZFNwYW5cbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFyY2hpdmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBsb2NhdGlvbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXJjaGl2ZSBsb2NhdGlvbjogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+WcsOWdgO+8micsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpToh7PvvJonLFxuXHRcdH0pLFxuXHRcdCdBcmNoaXZlIExvY2F0aW9uIG5vdCBhbGxvd2VkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlIGFyY2hpdmUgbG9jYXRpb24gb2YgdGhpcyBwYWdlLCBcIiQxXCIsIGJ1dCBFYXN5IGFyY2hpdmUgY2Fubm90IG9wZXJhdGUgbGlrZSB0aGlzLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLnm67liY3nmoTlrZjmoaPlnLDlnYDmmK/igJwkMeKAneOAgkVhc3kgQXJjaGl2ZSDml6Dms5XmjInmraTlnLDlnYDlrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i55W25YmN55qE5a2Y5qqU5Zyw5Z2A5piv44CMJDHjgI3jgIJFYXN5IEFyY2hpdmUg54Sh5rOV5oyJ5q2k5Zyw5Z2A5a2Y5qqU44CCJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBMb2NhdGlvbiBub3QgYWxsb3dlZCBkZXRhaWxzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBcmNoaXZlcyBzaG91bGQgbm90IGJlIG5vcm1hbGx5IGRpcmVjdGVkIHRvIHBhZ2VzIHVuZGVyIGFydGljbGUgbmFtZXNwYWNlLiBQbGVhc2UgY2hlY2sgaWYgeW91IGhhdmUgdGhlIGNvcnJlY3QgYXJjaGl2ZSBsb2NhdGlvbi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiA6Iis6ICM6KiA77yM5LiN5bqU5ZCR5p2h55uu5ZCN56ew56m66Ze06L+b6KGM5a2Y5qGj44CC5q2k5aSW77yM5a2Y5qGj5Zyw5Z2A5LiN5b6X5ZKM5q2k6aG16Z2i5ZCN56ew55u45ZCM44CC6K+35qOA5p+l5a2Y5qGj5Zyw5Z2A44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4gOiIrOiAjOiogO+8jOS4jeaHieWQkeaineebruWQjeeoseepuumWk+mAsuihjOWtmOaqlOOAguatpOWklu+8jOWtmOaqlOWcsOWdgOS4jeW+l+WSjOatpOmggemdouWQjeeoseebuOWQjOOAguiri+aqouafpeWtmOaqlOWcsOWdgOOAgicsXG5cdFx0fSksXG5cdFx0QXJjaGl2aW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2JlaW5nIGFyY2hpdmVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+S4rScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTkuK0nLFxuXHRcdH0pLFxuXHRcdEFyY2hpdmVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2FyY2hpdmVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWtmOahoycsXG5cdFx0XHQnemgtaGFudCc6ICflt7LlrZjmqpQnLFxuXHRcdH0pLFxuXHRcdERlbGV0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIqumZpCcsXG5cdFx0fSksXG5cdFx0RGVsZXRpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYmVpbmcgZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTkuK0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5LitJyxcblx0XHR9KSxcblx0XHREZWxldGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5Yig6ZmkJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWIqumZpCcsXG5cdFx0fSksXG5cdFx0J0FyY2hpdmUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WtmOaho+auteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICflrZjmqpTmrrXokL0nLFxuXHRcdH0pLFxuXHRcdCdDcmVhdGUgc3VtbWFyeSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnY3JlYXRlIGFyY2hpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bu656uL5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W7uueri+WtmOaqlCcsXG5cdFx0fSksXG5cdFx0J0RlbGV0ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkZWxldGUgc2VjdGlvbicsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaTmrrXokL0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6Zmk5q616JC9Jyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIGVuYWJsZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vhc3kgQXJjaGl2ZSBpcyBlbmFibGVkIG9uIHRoaXMgdGFsayBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acrOiuqOiuuumhtemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmUg5b+r6YCf5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRWFzeSBBcmNoaXZlIG5vdCBhbGxvd2VkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdZb3UgY2Fubm90IHVzZSBFYXN5IEFyY2hpdmUgdG8gYXJjaGl2ZSB0aHJlYWRzIG9uIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oKo5LiN5Y+v5Lul5Zyo5q2k6aG16Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmoaPjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5oKo5LiN5Y+v5Lul5Zyo5q2k6aCB6Z2i5L2/55SoIEVhc3kgQXJjaGl2ZSDlv6vpgJ/lrZjmqpTjgIInLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGlzIG5vdCBzdXBwb3J0ZWQgYnkgRWFzeSBBcmNoaXZlLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLkuI3mlK/mjIEgRWFzeSBBcmNoaXZl44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouS4jeaUr+aMgSBFYXN5IEFyY2hpdmXjgIInLFxuXHRcdH0pLFxuXHRcdCdFYXN5IEFyY2hpdmUgbm90IHN1cHBvcnRlZCBkZXRhaWxzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGVzZSBwYWdlcyBhcmUgbm90IHN1cHBvcnRlZCBieSBFYXN5IEFyY2hpdmU6IEFydGljbGUsIEZpbGUsIFRlbXBsYXRlLCBNb2R1bGUsIE1lZGlhV2lraSwgQ2F0ZWdvcnksIFNwZWNpYWwsIEphdmFTY3JpcHQsIENTUywgSlNPTi4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6L+Z5Lqb6aG16Z2i5LiN5Y+XIEVhc3kgQXJjaGl2ZSDmlK/mjIHvvJrmnaHnm67jgIFGaWxl44CBVGVtcGxhdGXjgIFNb2R1bGXjgIFNZWRpYVdpa2njgIFDYXRlZ29yeeOAgVNwZWNpYWzjgIFKYXZhU2NyaXB044CBQ1NT44CBSlNPTuOAgicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCfpgJnkupvpoIHpnaLkuI3lj5cgRWFzeSBBcmNoaXZlIOaUr+aMge+8muaineebru+8jEZpbGXjgIFUZW1wbGF0ZeOAgU1vZHVsZeOAgU1lZGlhV2lraeOAgUNhdGVnb3J544CBU3BlY2lhbOOAgUphdmFTY3JpcHTjgIFDU1PjgIFKU09O44CCJyxcblx0XHR9KSxcblx0XHQnTm8gQXJjaGl2ZSBMb2NhdGlvbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRWFzeSBBcmNoaXZlIGNhbiBiZSB1c2VkIG9uIHRoaXMgcGFnZSBpZiBuZWVkZWQuIFRvIGVuYWJsZSBpdCwgYWRkIHt7RWFzeSBBcmNoaXZlfHRvPVtBcmNoaXZlIGxvY2F0aW9uXX19IHRlbXBsYXRlIHRvIHRoaXMgcGFnZS4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn6Iul6ZyA6KaB77yM5q2k6aG16Z2i5Y+v5Lul5ZCv55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmhtemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzor7flnKjpobXpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qGj5L2N572ufX3jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn6Iul6ZyA6KaB77yM5q2k6aCB6Z2i5Y+v5Lul5ZWf55SoIEVhc3kgQXJjaGl2ZeOAguiLpeimgeWcqOatpOmggemdouS9v+eUqCBFYXN5IEFyY2hpdmXvvIzoq4vlnKjpoIHpnaLkuIrmt7vliqDmqKHmnb8ge3tFYXN5IEFyY2hpdmV8dG895a2Y5qqU5L2N572ufX3jgIInLFxuXHRcdH0pLFxuXHRcdCcoJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0JyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyknLFxuXHRcdFx0emg6ICfvvIknLFxuXHRcdH0pLFxuXHRcdCcuJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcuJyxcblx0XHRcdHpoOiAn44CCJyxcblx0XHR9KSxcblx0XHRSZWZyZXNoaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlZnJlc2hpbmcuLi4nLFxuXHRcdFx0amE6ICflho3oqq3jgb/ovrzjgb/jgZfjgb7jgZkuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Y2z5bCG5Yi35paw5b2T5YmN6aG16Z2i4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+WNs+Wwh+mHjeaWsOi8ieWFpeeVtuWJjemggeKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IGlmQXJjTG9jTm90QWxsb3dlZCA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNvdXJjZVRpdGxlID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpO1xuXHRjb25zdCBhcmNMb2NUaXRsZSA9IG5ldyBtdy5UaXRsZShhcmNMb2MpO1xuXG5cdGNvbnN0IGFyY0xvY05hbWVzcGFjZUlkID0gYXJjTG9jVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3QgYXJjTG9jUGFnZU5hbWUgPSBhcmNMb2NUaXRsZS5nZXRNYWluKCk7XG5cdGNvbnN0IHNvdXJjZU5hbWVzcGFjZUlkID0gc291cmNlVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3Qgc291cmNlUGFnZU5hbWUgPSBzb3VyY2VUaXRsZS5nZXRNYWluKCk7XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoYXJjTG9jTmFtZXNwYWNlSWQgPT09IHNvdXJjZU5hbWVzcGFjZUlkICYmIGFyY0xvY1BhZ2VOYW1lID09PSBzb3VyY2VQYWdlTmFtZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgaXNJbkJsYWNrbGlzdCA9ICgpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGJsYWNrTGlzdFJlZ2V4QXJyID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja0xpc3RSZWdleEFycikge1xuXHRcdGlmIChlbGVtZW50LnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IGlzTm90QWxsb3dlZCA9ICgpID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1JlbGV2YW50VXNlck5hbWUsIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICgod2dOYW1lc3BhY2VOdW1iZXIgPT09IDIgfHwgd2dOYW1lc3BhY2VOdW1iZXIgPT09IDMpICYmICEod2dSZWxldmFudFVzZXJOYW1lID09PSB3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcbmNvbnN0IGlzTm90U3VwcG9ydGVkID0gKCkgPT4ge1xuXHRjb25zdCB7d2dJc01haW5QYWdlLCB3Z05hbWVzcGFjZU51bWJlciwgd2dDdXJSZXZpc2lvbklkLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDAgfHwgd2dDdXJSZXZpc2lvbklkIC0gd2dSZXZpc2lvbklkICE9PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDAgfHwgd2dJc01haW5QYWdlKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQge2lmQXJjTG9jTm90QWxsb3dlZCwgaXNJbkJsYWNrbGlzdCwgaXNOb3RBbGxvd2VkLCBpc05vdFN1cHBvcnRlZH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBFYXN5QXJjaGl2ZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9ucyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwYWdlOiB0aXRsZSxcblx0XHRwcm9wOiAnc2VjdGlvbnMnLFxuXHR9O1xuXG5cdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0Y29uc3Qge1xuXHRcdHNlY3Rpb25zLFxuXHR9OiB7XG5cdFx0c2VjdGlvbnM6IHtcblx0XHRcdGxldmVsOiBzdHJpbmc7XG5cdFx0XHRpbmRleDogc3RyaW5nO1xuXHRcdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0fVtdO1xuXHR9ID0gcGFyc2U7XG5cblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBbXTtcblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRjb25zdCB7bGV2ZWwsIGluZGV4LCBhbmNob3J9ID0gc2VjdGlvbjtcblxuXHRcdGlmIChpbmRleC5zdGFydHNXaXRoKCdULScpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRzZWN0aW9uc1RvQXJjaGl2ZVtzZWN0aW9uc1RvQXJjaGl2ZS5sZW5ndGhdID0ge1xuXHRcdFx0bGV2ZWwsXG5cdFx0XHRpbmRleCxcblx0XHRcdGFuY2hvcixcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHNlY3Rpb25zVG9BcmNoaXZlO1xufTtcblxuY29uc3QgZ2V0U2VjdGlvbkNvbnRlbnQgPSBhc3luYyAodGl0bGU6IHN0cmluZywgc2VjdGlvbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHRpdGxlczogdGl0bGUsXG5cdFx0cnZzZWN0aW9uOiBzZWN0aW9uLFxuXHR9O1xuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxuXHRyZXR1cm4gcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQgPz8gbnVsbDtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbnMsIGdldFNlY3Rpb25Db250ZW50fTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0U2VjdGlvbnN9IGZyb20gJy4vZ2V0U2VjdGlvbic7XG5cbmNvbnN0IGNoZWNrSWZQYWdlRXhpc3QgPSBhc3luYyAoYXJjaGl2ZVRvOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW5mbycsXG5cdFx0dGl0bGVzOiBhcmNoaXZlVG8sXG5cdH07XG5cblx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRpZiAocXVlcnkucGFnZXNbMF0/Lm1pc3NpbmcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBjaGVja0lmU2VjdGlvbkV4aXN0ID0gYXN5bmMgKGluZGV4OiBzdHJpbmcsIGFuY2hvcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnMgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRsZXQgaWZTZWN0aW9uRXhpc3QgPSBmYWxzZTtcblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0aWYgKGluZGV4ID09PSBzZWN0aW9uLmluZGV4ICYmIGFuY2hvciA9PT0gc2VjdGlvbi5hbmNob3IpIHtcblx0XHRcdGlmU2VjdGlvbkV4aXN0ID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGlmU2VjdGlvbkV4aXN0O1xufTtcblxuZXhwb3J0IHtjaGVja0lmU2VjdGlvbkV4aXN0LCBjaGVja0lmUGFnZUV4aXN0fTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtjaGVja0lmU2VjdGlvbkV4aXN0fSBmcm9tICcuL3V0aWwvY2hlY2tJZkV4aXN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9IGZyb20gJy4vdXRpbC9nZXRTZWN0aW9uJztcblxuY29uc3QgcmVtb3ZlU2VjdGlvbiA9IGFzeW5jICh7aW5kZXgsIGFuY2hvciwgc3VtbWFyeX06IHtpbmRleDogc3RyaW5nOyBhbmNob3I6IHN0cmluZzsgc3VtbWFyeT86IHN0cmluZ30pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpZlNlY3Rpb25FeGlzdCA9IGF3YWl0IGNoZWNrSWZTZWN0aW9uRXhpc3QoaW5kZXgsIGFuY2hvcik7XG5cblx0aWYgKGlmU2VjdGlvbkV4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHdnUGFnZU5hbWUsIGluZGV4KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGF3YWl0IGFwaS5lZGl0KHdnUGFnZU5hbWUsICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VjdGlvbjogaW5kZXgsXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdHN1bW1hcnk6IHN1bW1hcnkgPz8gZ2V0TWVzc2FnZSgnRGVsZXRlIHN1bW1hcnknKSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xufTtcblxuZXhwb3J0IHtyZW1vdmVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2NoZWNrSWZQYWdlRXhpc3QsIGNoZWNrSWZTZWN0aW9uRXhpc3R9IGZyb20gJy4vdXRpbC9jaGVja0lmRXhpc3QnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9IGZyb20gJy4vdXRpbC9nZXRTZWN0aW9uJztcbmltcG9ydCB7cmVtb3ZlU2VjdGlvbn0gZnJvbSAnLi9yZW1vdmVTZWN0aW9uJztcblxuY29uc3QgYXJjaGl2ZVNlY3Rpb24gPSBhc3luYyAoe2luZGV4LCBhbmNob3IsIGFyY2hpdmVUb306IHtpbmRleDogc3RyaW5nOyBhbmNob3I6IHN0cmluZzsgYXJjaGl2ZVRvOiBzdHJpbmd9KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaWZTZWN0aW9uRXhpc3QgPSBhd2FpdCBjaGVja0lmU2VjdGlvbkV4aXN0KGluZGV4LCBhbmNob3IpO1xuXG5cdGlmIChpZlNlY3Rpb25FeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh3Z1BhZ2VOYW1lLCBpbmRleCk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwYWdlRXhpc3QgPSBhd2FpdCBjaGVja0lmUGFnZUV4aXN0KGFyY2hpdmVUbyk7XG5cdGlmICghcGFnZUV4aXN0KSB7XG5cdFx0YXdhaXQgYXBpLmNyZWF0ZShcblx0XHRcdGFyY2hpdmVUbyxcblx0XHRcdHtcblx0XHRcdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnQ3JlYXRlIHN1bW1hcnknKSxcblx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0J3t7dGFsa2FyY2hpdmV9fSdcblx0XHQpO1xuXHR9XG5cblx0YXdhaXQgYXBpLmVkaXQoYXJjaGl2ZVRvLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFwcGVuZHRleHQ6IGBcXG5cXG4ke2NvbnRlbnR9YCxcblx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG5cblx0YXdhaXQgcmVtb3ZlU2VjdGlvbih7aW5kZXgsIGFuY2hvciwgc3VtbWFyeTogZ2V0TWVzc2FnZSgnQXJjaGl2ZSBzdW1tYXJ5Jyl9KTtcbn07XG5cbmV4cG9ydCB7YXJjaGl2ZVNlY3Rpb259O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3Qge3dnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcblxuY29uc3QgcmVmcmVzaCA9ICh0YXJnZXRQYWdlPzogc3RyaW5nKTogdm9pZCA9PiB7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1JlZnJlc2hpbmcnKSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdzdWNjZXNzJ1xuXHQpO1xuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bG9jYXRpb24ucmVwbGFjZShcblx0XHRtdy51dGlsLmdldFVybCh3Z1NjcmlwdCwge1xuXHRcdFx0dGl0bGU6IHRhcmdldFBhZ2UgPz8gd2dQYWdlTmFtZSxcblx0XHR9KVxuXHQpO1xufTtcblxuZXhwb3J0IHtyZWZyZXNofTtcbiIsICJjb25zdCByZXBsYWNlQ2hpbGQgPSAoZWxlbWVudDogRWxlbWVudCwgbmV3Q2hpbGQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcblx0d2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0ZWxlbWVudC5maXJzdENoaWxkPy5yZW1vdmUoKTtcblx0fVxuXHRlbGVtZW50LmFwcGVuZChuZXdDaGlsZCk7XG59O1xuXG5leHBvcnQge3JlcGxhY2VDaGlsZH07XG4iLCAiaW1wb3J0IHtvbkNsaWNrV3JhcCwgcGlwZUVsZW1lbnQsIHNlY3Rpb25JZFNwYW5FbGVtZW50LCBzcGFuV3JhcH0gZnJvbSAnLi91dGlsL3JlYWN0JztcbmltcG9ydCB7YXJjaGl2ZVNlY3Rpb259IGZyb20gJy4vYXJjaGl2ZVNlY3Rpb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtnZXRTZWN0aW9uc30gZnJvbSAnLi91dGlsL2dldFNlY3Rpb24nO1xuaW1wb3J0IHtyZWZyZXNofSBmcm9tICcuL3V0aWwvcmVmcmVzaFBhZ2UnO1xuaW1wb3J0IHtyZW1vdmVTZWN0aW9ufSBmcm9tICcuL3JlbW92ZVNlY3Rpb24nO1xuaW1wb3J0IHtyZXBsYWNlQ2hpbGR9IGZyb20gJy4vdXRpbC9yZXBsYWNlQ2hpbGQnO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGFkZExpbmtzID0gYXN5bmMgKHtcblx0YXJjTGV2ZWwsXG5cdGFyY0xvYyxcblx0c2VjQXJjLFxuXHRzZWNEZWwsXG59OiB7XG5cdGFyY0xldmVsOiBzdHJpbmc7XG5cdGFyY0xvYzogc3RyaW5nIHwgbnVsbDtcblx0c2VjQXJjOiBzdHJpbmc7XG5cdHNlY0RlbDogc3RyaW5nO1xufSkgPT4ge1xuXHRpZiAoIWFyY0xvYykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRjb25zdCBoZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGgke2FyY0xldmVsfWApO1xuXHRjb25zdCBoZWFkbGluZXMgPSBbXTtcblx0Y29uc3QgaGVhZGluZ0luZGljZXMgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGhlYWRpbmcgb2YgaGVhZGluZ3MpIHtcblx0XHRjb25zdCBoZWFkbGluZSA9IGhlYWRpbmcucXVlcnlTZWxlY3RvcignLm13LWhlYWRsaW5lJyk7XG5cdFx0aGVhZGxpbmVzW2hlYWRsaW5lcy5sZW5ndGhdID0gaGVhZGxpbmU/LmlkO1xuXHR9XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zVG9BcmNoaXZlKSB7XG5cdFx0aWYgKHNlY3Rpb24ubGV2ZWwgIT09IGFyY0xldmVsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoaGVhZGxpbmVzLmluY2x1ZGVzKHNlY3Rpb24uYW5jaG9yKSkge1xuXHRcdFx0aGVhZGluZ0luZGljZXNbaGVhZGluZ0luZGljZXMubGVuZ3RoXSA9IHtcblx0XHRcdFx0aW5kZXg6IHNlY3Rpb24uaW5kZXgsXG5cdFx0XHRcdGlkOiBzZWN0aW9uLmFuY2hvcixcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCB7aW5kZXgsIGlkfSBvZiBoZWFkaW5nSW5kaWNlcykge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1xdWVyeS1zZWxlY3RvclxuXHRcdGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRcdGlmICghaGVhZGxpbmUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhcmVudEhlYWRpbmcgPSBoZWFkbGluZS5wYXJlbnRFbGVtZW50O1xuXHRcdGlmICghcGFyZW50SGVhZGluZykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdFNlY3Rpb24gPSBwYXJlbnRIZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdGlmICghZWRpdFNlY3Rpb24pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlY3Rpb25JZFNwYW4gPSBzZWN0aW9uSWRTcGFuRWxlbWVudCgpO1xuXHRcdGNvbnN0IGFyY2hpdmVTZWN0aW9uTGluayA9IG9uQ2xpY2tXcmFwKGdldE1lc3NhZ2UoJ0FyY2hpdmUnKSwgJ2FyY2hpdmUnLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCBwYXJlbnRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRpZiAoIXBhcmVudEVsZW1lbnQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXBsYWNlQ2hpbGQocGFyZW50RWxlbWVudCwgc3BhbldyYXAoZ2V0TWVzc2FnZSgnQXJjaGl2aW5nJykpKTtcblxuXHRcdFx0bGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdFx0XHRcdGhpZGVUb2FzdDogKCkgPT4ge30sXG5cdFx0XHR9O1xuXHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnQXJjaGl2aW5nJyksXG5cdFx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW5mbydcblx0XHRcdCk7XG5cblx0XHRcdHZvaWQgYXJjaGl2ZVNlY3Rpb24oe2luZGV4LCBhbmNob3I6IGlkLCBhcmNoaXZlVG86IGFyY0xvY30pLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlLmhpZGVUb2FzdCgpO1xuXHRcdFx0XHRyZXBsYWNlQ2hpbGQocGFyZW50RWxlbWVudCwgc3BhbldyYXAoZ2V0TWVzc2FnZSgnQXJjaGl2ZWQnKSkpO1xuXHRcdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnQXJjaGl2ZWQnKSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdzdWNjZXNzJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZWZyZXNoKCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IHJlbW92ZVNlY3Rpb25MaW5rID0gb25DbGlja1dyYXAoZ2V0TWVzc2FnZSgnRGVsZXRlJyksICdkZWxldGUnLCAoZXZlbnQpID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCBwYXJlbnRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRpZiAoIXBhcmVudEVsZW1lbnQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXBsYWNlQ2hpbGQocGFyZW50RWxlbWVudCwgc3BhbldyYXAoZ2V0TWVzc2FnZSgnRGVsZXRpbmcnKSkpO1xuXG5cdFx0XHRsZXQgdG9hc3RpZnlJbnN0YW5jZTogVG9hc3RpZnlJbnN0YW5jZSA9IHtcblx0XHRcdFx0aGlkZVRvYXN0OiAoKSA9PiB7fSxcblx0XHRcdH07XG5cdFx0XHR0b2FzdGlmeUluc3RhbmNlID0gdG9hc3RpZnkoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdEZWxldGluZycpLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0J2luZm8nXG5cdFx0XHQpO1xuXG5cdFx0XHR2b2lkIHJlbW92ZVNlY3Rpb24oe2luZGV4LCBhbmNob3I6IGlkfSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdFx0XHRcdHJlcGxhY2VDaGlsZChwYXJlbnRFbGVtZW50LCBzcGFuV3JhcChnZXRNZXNzYWdlKCdEZWxldGVkJykpKTtcblx0XHRcdFx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0RlbGV0ZWQnKSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzICogMTAwMCxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdzdWNjZXNzJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZWZyZXNoKCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdGlmIChzZWNBcmMgPT09ICcxJykge1xuXHRcdFx0c2VjdGlvbklkU3Bhbi5hcHBlbmQoYXJjaGl2ZVNlY3Rpb25MaW5rKTtcblx0XHR9XG5cdFx0aWYgKHNlY0FyYyA9PT0gJzEnICYmIHNlY0RlbCA9PT0gJzEnKSB7XG5cdFx0XHRzZWN0aW9uSWRTcGFuLmFwcGVuZChwaXBlRWxlbWVudCgpKTtcblx0XHR9XG5cdFx0aWYgKHNlY0RlbCA9PT0gJzEnKSB7XG5cdFx0XHRzZWN0aW9uSWRTcGFuLmFwcGVuZChyZW1vdmVTZWN0aW9uTGluayk7XG5cdFx0fVxuXHRcdGVkaXRTZWN0aW9uLnByZXBlbmQoc2VjdGlvbklkU3Bhbik7XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkTGlua3N9O1xuIiwgImNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHtkYXRhc2V0fSA9IHNldHRpbmdzO1xuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gZGF0YXNldDtcblx0cmV0dXJuIHtcblx0XHRhcmNMZXZlbDogYXJjTGV2ZWwgPz8gJzInLFxuXHRcdGFyY0xvYzogYXJjTG9jID8/IG51bGwsXG5cdFx0c2VjQXJjOiBzZWNBcmMgPz8gJzEnLFxuXHRcdHNlY0RlbDogc2VjRGVsID8/ICcxJyxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2V0U2V0dGluZ3N9O1xuIiwgImltcG9ydCB7XG5cdGFyY0xvY05vdEFsbG93ZWRGb290ZXJOb3RpY2UsXG5cdGVuYWJsZWRGb290ZXJOb3RpY2UsXG5cdGluQmxhY2tsaXN0Rm9vdGVyTm90aWNlLFxuXHRub0FyY0xvY0Zvb3Rlck5vdGljZSxcblx0bm90QWxsb3dlZGVkRm9vdGVyTm90aWNlLFxufSBmcm9tICcuL21vZHVsZXMvZm9vdGVyTm90aWNlJztcbmltcG9ydCB7aWZBcmNMb2NOb3RBbGxvd2VkLCBpc0luQmxhY2tsaXN0LCBpc05vdEFsbG93ZWQsIGlzTm90U3VwcG9ydGVkfSBmcm9tICcuL21vZHVsZXMvaXNJbkRpc2FsbG93ZWRMaXN0JztcbmltcG9ydCB7YWRkTGlua3N9IGZyb20gJy4vbW9kdWxlcy9hZGRMaW5rcyc7XG5pbXBvcnQge2dldFNldHRpbmdzfSBmcm9tICcuL21vZHVsZXMvZ2V0U2V0dGluZ3MnO1xuXG4oZnVuY3Rpb24gZWFzeUFyY2hpdmUoKSB7XG5cdGNvbnN0IG5vdFN1cHBvcnRlZCA9IGlzTm90U3VwcG9ydGVkKCk7XG5cdGlmIChub3RTdXBwb3J0ZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpbkJsYWNrbGlzdCA9IGlzSW5CbGFja2xpc3QoKTtcblx0aWYgKGluQmxhY2tsaXN0KSB7XG5cdFx0aW5CbGFja2xpc3RGb290ZXJOb3RpY2UoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBub3RBbGxvd2VkID0gaXNOb3RBbGxvd2VkKCk7XG5cdGlmIChub3RBbGxvd2VkKSB7XG5cdFx0bm90QWxsb3dlZGVkRm9vdGVyTm90aWNlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpO1xuXHRpZiAoIXNldHRpbmdzKSB7XG5cdFx0bm9BcmNMb2NGb290ZXJOb3RpY2UoKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7YXJjTG9jfSA9IHNldHRpbmdzO1xuXHRpZiAoIWFyY0xvYykge1xuXHRcdG5vQXJjTG9jRm9vdGVyTm90aWNlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYXJjTG9jTm90QWxsb3dlZCA9IGlmQXJjTG9jTm90QWxsb3dlZChhcmNMb2MpO1xuXHRpZiAoYXJjTG9jTm90QWxsb3dlZCkge1xuXHRcdGFyY0xvY05vdEFsbG93ZWRGb290ZXJOb3RpY2UoYXJjTG9jKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGFkZExpbmtzKHNldHRpbmdzKTtcblx0ZW5hYmxlZEZvb3Rlck5vdGljZShh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ZDFKLHlCQUFxQjtBQUNyQjtFQUNEO0FBRUEsUUFBTTtJQUFDRTtFQUFNLElBQUl3SjtBQUNqQixNQUFJLENBQUN4SixRQUFRO0FBQ1pGLHlCQUFxQjtBQUNyQjtFQUNEO0FBRUEsUUFBTWdLLG1CQUFtQjFKLG1CQUFtQkosTUFBTTtBQUNsRCxNQUFJOEosa0JBQWtCO0FBQ3JCL0osaUNBQTZCQyxNQUFNO0FBQ25DO0VBQ0Q7QUFFQSxPQUFLdUgsU0FBU2lDLFFBQVE7QUFDdEJ2SixzQkFBb0JELE1BQU07QUFDM0IsR0FBRzsiLAogICJuYW1lcyI6IFsibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJmb290ZXJOb3RpY2UiLCAic2VjdGlvbklkU3BhbiIsICJlbGVtZW50V3JhcCIsICJpZCIsICJpbm5lckVsZW1lbnQiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiaW5jbHVkZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJvbkNsaWNrV3JhcCIsICJ0ZXh0Q29udGVudCIsICJvbkNsaWNrIiwgImNsYXNzIiwgImNvbmNhdCIsICJwaXBlRWxlbWVudCIsICJzZWN0aW9uSWRTcGFuRWxlbWVudCIsICJzcGFuV3JhcCIsICJpbm5lckhUTUwiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJBcmNoaXZlIiwgImxvY2FsaXplIiwgImVuIiwgIkFyY2hpdmluZyIsICJBcmNoaXZlZCIsICJEZWxldGUiLCAiRGVsZXRpbmciLCAiRGVsZXRlZCIsICJ6aCIsICJSZWZyZXNoaW5nIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJmb290ZXJOb3RpY2UyIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJ0YWciLCAicXVlcnlTZWxlY3RvckFsbCIsICJwcmVwZW5kIiwgInNhbml0aXplIiwgInN0cmluZyIsICJyZXBsYWNlIiwgImluQmxhY2tsaXN0Rm9vdGVyTm90aWNlIiwgIm5vdEFsbG93ZWRlZEZvb3Rlck5vdGljZSIsICJub0FyY0xvY0Zvb3Rlck5vdGljZSIsICJhcmNMb2NOb3RBbGxvd2VkRm9vdGVyTm90aWNlIiwgImFyY0xvYyIsICJlbmFibGVkRm9vdGVyTm90aWNlIiwgInRpdGxlIiwgImhyZWYiLCAiaWZBcmNMb2NOb3RBbGxvd2VkIiwgIndnUGFnZU5hbWUiLCAic291cmNlVGl0bGUiLCAiVGl0bGUiLCAiYXJjTG9jVGl0bGUiLCAiYXJjTG9jTmFtZXNwYWNlSWQiLCAiZ2V0TmFtZXNwYWNlSWQiLCAiYXJjTG9jUGFnZU5hbWUiLCAiZ2V0TWFpbiIsICJzb3VyY2VOYW1lc3BhY2VJZCIsICJzb3VyY2VQYWdlTmFtZSIsICJpc0luQmxhY2tsaXN0IiwgImJsYWNrTGlzdFJlZ2V4QXJyIiwgIl9pIiwgIl9ibGFja0xpc3RSZWdleEFyciIsICJsZW5ndGgiLCAiZWxlbWVudCIsICJ0ZXN0IiwgImlzTm90QWxsb3dlZCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1JlbGV2YW50VXNlck5hbWUiLCAid2dVc2VyTmFtZSIsICJpc05vdFN1cHBvcnRlZCIsICJ3Z0lzTWFpblBhZ2UiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRTZWN0aW9ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicGFnZSIsICJwcm9wIiwgInBhcnNlIiwgInNlY3Rpb25zIiwgInNlY3Rpb25zVG9BcmNoaXZlIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInNlY3Rpb24iLCAidmFsdWUiLCAibGV2ZWwiLCAiaW5kZXgiLCAiYW5jaG9yIiwgInN0YXJ0c1dpdGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2V0U2VjdGlvbkNvbnRlbnQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJHF1ZXJ5JHBhZ2VzIiwgInJ2cHJvcCIsICJ0aXRsZXMiLCAicnZzZWN0aW9uIiwgInJlc3BvbnNlIiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJjb250ZW50IiwgIl94MiIsICJfeDMiLCAiY2hlY2tJZlBhZ2VFeGlzdCIsICJfcmVmMyIsICJhcmNoaXZlVG8iLCAiX3F1ZXJ5JHBhZ2VzJCIsICJxdWVyeSIsICJtaXNzaW5nIiwgIl94NCIsICJjaGVja0lmU2VjdGlvbkV4aXN0IiwgIl9yZWY0IiwgImlmU2VjdGlvbkV4aXN0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIl94NSIsICJfeDYiLCAicmVtb3ZlU2VjdGlvbiIsICJfcmVmNSIsICJzdW1tYXJ5IiwgImVkaXQiLCAidGV4dCIsICJtaW5vciIsICJfeDciLCAiYXJjaGl2ZVNlY3Rpb24iLCAiX3JlZjYiLCAicGFnZUV4aXN0IiwgImNyZWF0ZSIsICJhcHBlbmR0ZXh0IiwgIl94OCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAid2dTY3JpcHQiLCAicmVmcmVzaCIsICJ0YXJnZXRQYWdlIiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIiwgInV0aWwiLCAiZ2V0VXJsIiwgInJlcGxhY2VDaGlsZCIsICJuZXdDaGlsZCIsICJoYXNDaGlsZE5vZGVzIiwgIl9lbGVtZW50JGZpcnN0Q2hpbGQiLCAiZmlyc3RDaGlsZCIsICJyZW1vdmUiLCAiYXBwZW5kIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJhZGRMaW5rcyIsICJfcmVmNyIsICJhcmNMZXZlbCIsICJzZWNBcmMiLCAic2VjRGVsIiwgImhlYWRpbmdzIiwgImhlYWRsaW5lcyIsICJoZWFkaW5nSW5kaWNlcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJoZWFkaW5nIiwgImhlYWRsaW5lIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl9pMiIsICJfaGVhZGluZ0luZGljZXMiLCAiZ2V0RWxlbWVudEJ5SWQiLCAicGFyZW50SGVhZGluZyIsICJwYXJlbnRFbGVtZW50IiwgImVkaXRTZWN0aW9uIiwgInNlY3Rpb25JZFNwYW4yIiwgImFyY2hpdmVTZWN0aW9uTGluayIsICJldmVudCIsICJfZXZlbnQkdGFyZ2V0IiwgInByZXZlbnREZWZhdWx0IiwgInRhcmdldCIsICJ0b2FzdGlmeUluc3RhbmNlIiwgImhpZGVUb2FzdCIsICJ0aGVuIiwgInJlbW92ZVNlY3Rpb25MaW5rIiwgIl9ldmVudCR0YXJnZXQyIiwgIl94OSIsICJnZXRTZXR0aW5ncyIsICJzZXR0aW5ncyIsICJkYXRhc2V0IiwgImVhc3lBcmNoaXZlIiwgIm5vdFN1cHBvcnRlZCIsICJpbkJsYWNrbGlzdCIsICJub3RBbGxvd2VkIiwgImFyY0xvY05vdEFsbG93ZWQiXQp9Cg==
