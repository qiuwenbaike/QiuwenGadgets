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
//! src/EasyArchive-New/modules/react.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
var onClickWrap = (textContent, className, onClick) => /* @__PURE__ */ import_ext_gadget.default.createElement("a", {
  class: ["easy-archive-link", "easy-archive-link-".concat(className)],
  onClick,
  textContent
});
var pipeElement = () => /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  class: "mw-editsection-divider",
  textContent: "|"
});
var sectionIdSpanElement = () => /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  class: ["easy-archive-section-id-span"]
});
//! src/EasyArchive-New/options.json
var version = "0.1";
//! src/EasyArchive-New/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("EasyAchive/".concat(version));
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
//! src/EasyArchive-New/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Archive: (0, import_ext_gadget3.localize)({
      en: "archive",
      "zh-hans": "存档",
      "zh-hant": "存檔"
    }),
    Archiving: (0, import_ext_gadget3.localize)({
      en: "being archived",
      "zh-hans": "存档中",
      "zh-hant": "存檔中"
    }),
    Archived: (0, import_ext_gadget3.localize)({
      en: "archived",
      "zh-hans": "已存档",
      "zh-hant": "已存檔"
    }),
    Delete: (0, import_ext_gadget3.localize)({
      en: "delete",
      "zh-hans": "删除",
      "zh-hant": "刪除"
    }),
    Deleting: (0, import_ext_gadget3.localize)({
      en: "being deleted",
      "zh-hans": "删除中",
      "zh-hant": "刪除中"
    }),
    Deleted: (0, import_ext_gadget3.localize)({
      en: "deleted",
      "zh-hans": "已删除",
      "zh-hant": "已刪除"
    }),
    "Archive summary": (0, import_ext_gadget3.localize)({
      en: "archive section",
      "zh-hans": "存档段落",
      "zh-hant": "存檔段落"
    }),
    "Create summary": (0, import_ext_gadget3.localize)({
      en: "create archive",
      "zh-hans": "建立存档",
      "zh-hant": "建立存檔"
    }),
    "Delete summary": (0, import_ext_gadget3.localize)({
      en: "delete section",
      "zh-hans": "删除段落",
      "zh-hant": "刪除段落"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
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
//! src/EasyArchive-New/modules/addLinks.ts
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
          event.preventDefault();
          void archive(index, id, arcLoc).then(() => {
            location.reload();
          });
        }));
      }
      if (secArc === "1" && secDel === "1") {
        sectionIdSpan.append(pipeElement());
      }
      if (secDel === "1") {
        sectionIdSpan.append(onClickWrap(getMessage("Delete"), "delete", (event) => {
          event.preventDefault();
          void remove(index, id).then(() => {
            location.reload();
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
//! src/EasyArchive-New/modules/isInBlackList.ts
var isInBlacklist = () => {
  const {
    wgNamespaceNumber,
    wgIsMainPage,
    wgPageName,
    wgRelevantUserName,
    wgUserName,
    wgCurRevisionId,
    wgRevisionId
  } = mw.config.get();
  const blackListRegexArr = [/^File:.*$/, /^MediaWiki:.*$/, /^Module:.*$/, /^Category:.*$/, /^Template:.*$/, /^Special:.*$/, /^User:.*\/?.*\.js$/, /^User:.*\/?.*\.css$/, /^User:.*\/?.*\.json$/];
  if (wgNamespaceNumber < 0 || wgIsMainPage) {
    return true;
  }
  if (wgNamespaceNumber === 0 || wgCurRevisionId - wgRevisionId !== 0) {
    return true;
  }
  if (wgNamespaceNumber === 3 && !(wgRelevantUserName === wgUserName)) {
    return true;
  }
  for (var _i2 = 0, _blackListRegexArr = blackListRegexArr; _i2 < _blackListRegexArr.length; _i2++) {
    const element = _blackListRegexArr[_i2];
    if (element.test(wgPageName)) {
      return true;
    }
  }
  return false;
};
//! src/EasyArchive-New/EasyArchive-New.ts
(function easyArchive() {
  const inBlacklist = isInBlacklist();
  if (inBlacklist) {
    return;
  }
  const settings = getSettings();
  if (!settings) {
    return;
  }
  const {
    arcLevel,
    arcLoc,
    secArc,
    secDel
  } = settings;
  if (!arcLoc) {
    return;
  }
  const arcLocNotAllowed = ifArcLocNotAllowed(arcLoc);
  if (arcLocNotAllowed) {
    return;
  }
  void addLinks({
    arcLevel,
    arcLoc,
    secArc,
    secDel
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL3JlYWN0LnRzeCIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9jaGVja0lmUGFnZUV4aXN0LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9hcmNoaXZlU2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvcGFyc2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2NoZWNrSWZTZWN0aW9uRXhpc3QudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2RlbGV0ZVNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2dldFNlY3Rpb25Db250ZW50LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9hcmNoaXZlLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9yZW1vdmUudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2FkZExpbmtzLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9zZXR0aW5ncy50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvaWZBcmNMb2NOb3RBbGxvd2VkLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9pc0luQmxhY2tMaXN0LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvRWFzeUFyY2hpdmUtTmV3LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9IChpZDogc3RyaW5nLCBpbm5lckVsZW1lbnQ6IFJlYWN0RWxlbWVudCkgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1sncGFnZS1pbmZvX19pdGVtJ119IGlkPXtpZH0+XG5cdFx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fSBlbHNlIGlmIChbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBpZD17aWR9Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblx0cmV0dXJuIDxkaXYgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvZGl2Pjtcbn07XG5cbmNvbnN0IG9uQ2xpY2tXcmFwID0gKHRleHRDb250ZW50OiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nLCBvbkNsaWNrOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkKSA9PiAoXG5cdDxhIGNsYXNzPXtbJ2Vhc3ktYXJjaGl2ZS1saW5rJywgYGVhc3ktYXJjaGl2ZS1saW5rLSR7Y2xhc3NOYW1lfWBdfSBvbkNsaWNrPXtvbkNsaWNrfSB0ZXh0Q29udGVudD17dGV4dENvbnRlbnR9IC8+XG4pO1xuXG5jb25zdCBwaXBlRWxlbWVudCA9ICgpID0+IDxzcGFuIGNsYXNzPVwibXctZWRpdHNlY3Rpb24tZGl2aWRlclwiIHRleHRDb250ZW50PXsnfCd9IC8+O1xuXG5jb25zdCBzZWN0aW9uSWRTcGFuRWxlbWVudCA9ICgpID0+IDxzcGFuIGNsYXNzPXtbJ2Vhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4nXX0gLz47XG5cbmNvbnN0IHNwYW4gPSAoaW5uZXJIVE1MOiBzdHJpbmcpID0+IDxzcGFuIGlubmVySFRNTD17aW5uZXJIVE1MfSAvPjtcblxuZXhwb3J0IHtlbGVtZW50V3JhcCwgb25DbGlja1dyYXAsIHBpcGVFbGVtZW50LCBzZWN0aW9uSWRTcGFuRWxlbWVudCwgc3Bhbn07XG4iLCAie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwidmVyc2lvblwiOiBcIjAuMVwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBFYXN5QWNoaXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgY2hlY2tJZlBhZ2VFeGlzdCA9IGFzeW5jIChhcmNoaXZlVG86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbmZvJyxcblx0XHR0aXRsZXM6IGFyY2hpdmVUbyxcblx0fTtcblxuXHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdGlmIChxdWVyeS5wYWdlc1swXT8ubWlzc2luZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tJZlBhZ2VFeGlzdH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFyY2hpdmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqUJyxcblx0XHR9KSxcblx0XHRBcmNoaXZpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYmVpbmcgYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOS4rScsXG5cdFx0fSksXG5cdFx0QXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWtmOaqlCcsXG5cdFx0fSksXG5cdFx0RGVsZXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZScsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHREZWxldGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOS4rScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTkuK0nLFxuXHRcdH0pLFxuXHRcdERlbGV0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOauteiQvScsXG5cdFx0fSksXG5cdFx0J0NyZWF0ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdjcmVhdGUgYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflu7rnq4vlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bu656uL5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRGVsZXRlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOauteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTmrrXokL0nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtjaGVja0lmUGFnZUV4aXN0fSBmcm9tICcuL2NoZWNrSWZQYWdlRXhpc3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBhcmNoaXZlU2VjdGlvbiA9IGFzeW5jIChhcmNoaXZlVG86IHN0cmluZywgdGV4dDogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhZ2VFeGlzdCA9IGF3YWl0IGNoZWNrSWZQYWdlRXhpc3QoYXJjaGl2ZVRvKTtcblx0aWYgKCFwYWdlRXhpc3QpIHtcblx0XHRhd2FpdCBhcGkuY3JlYXRlKFxuXHRcdFx0YXJjaGl2ZVRvLFxuXHRcdFx0e1xuXHRcdFx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdDcmVhdGUgc3VtbWFyeScpLFxuXHRcdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHQne3t0YWxrYXJjaGl2ZX19J1xuXHRcdCk7XG5cdH1cblx0YXdhaXQgYXBpLmVkaXQoYXJjaGl2ZVRvLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFwcGVuZHRleHQ6IGBcXG5cXG4ke3RleHR9YCxcblx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FyY2hpdmVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9ucyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwYWdlOiB0aXRsZSxcblx0XHRwcm9wOiAnc2VjdGlvbnMnLFxuXHR9O1xuXG5cdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0Y29uc3Qge1xuXHRcdHNlY3Rpb25zLFxuXHR9OiB7XG5cdFx0c2VjdGlvbnM6IHtcblx0XHRcdGxldmVsOiBzdHJpbmc7XG5cdFx0XHRpbmRleDogc3RyaW5nO1xuXHRcdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0fVtdO1xuXHR9ID0gcGFyc2U7XG5cblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBbXTtcblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRjb25zdCB7bGV2ZWwsIGluZGV4LCBhbmNob3J9ID0gc2VjdGlvbjtcblxuXHRcdGlmIChpbmRleC5zdGFydHNXaXRoKCdULScpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRzZWN0aW9uc1RvQXJjaGl2ZVtzZWN0aW9uc1RvQXJjaGl2ZS5sZW5ndGhdID0ge1xuXHRcdFx0bGV2ZWwsXG5cdFx0XHRpbmRleCxcblx0XHRcdGFuY2hvcixcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHNlY3Rpb25zVG9BcmNoaXZlO1xufTtcblxuZXhwb3J0IHtnZXRTZWN0aW9uc307XG4iLCAiaW1wb3J0IHtnZXRTZWN0aW9uc30gZnJvbSAnLi9wYXJzZSc7XG5cbmNvbnN0IGNoZWNrSWZTZWN0aW9uRXhpc3QgPSBhc3luYyAoaW5kZXg6IHN0cmluZywgYW5jaG9yOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9ucyA9IGF3YWl0IGdldFNlY3Rpb25zKHdnUGFnZU5hbWUpO1xuXG5cdGxldCBpZlNlY3Rpb25FeGlzdCA9IGZhbHNlO1xuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRpZiAoaW5kZXggPT09IHNlY3Rpb24uaW5kZXggJiYgYW5jaG9yID09PSBzZWN0aW9uLmFuY2hvcikge1xuXHRcdFx0aWZTZWN0aW9uRXhpc3QgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gaWZTZWN0aW9uRXhpc3Q7XG59O1xuXG5leHBvcnQge2NoZWNrSWZTZWN0aW9uRXhpc3R9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGRlbGV0ZVNlY3Rpb24gPSBhc3luYyAodGl0bGU6IHN0cmluZywgc2VjdGlvbjogc3RyaW5nLCBzdW1tYXJ5Pzogc3RyaW5nKSA9PiB7XG5cdGF3YWl0IGFwaS5lZGl0KHRpdGxlLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlY3Rpb24sXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdHN1bW1hcnk6IHN1bW1hcnkgPz8gZ2V0TWVzc2FnZSgnRGVsZXRlIHN1bW1hcnknKSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xufTtcblxuZXhwb3J0IHtkZWxldGVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9uQ29udGVudCA9IGFzeW5jICh0aXRsZTogc3RyaW5nLCBzZWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRydnNlY3Rpb246IHNlY3Rpb24sXG5cdH07XG5cblx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxuXHRyZXR1cm4gcXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQgPz8gbnVsbDtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9O1xuIiwgImltcG9ydCB7YXJjaGl2ZVNlY3Rpb259IGZyb20gJy4vYXJjaGl2ZVNlY3Rpb24nO1xuaW1wb3J0IHtjaGVja0lmU2VjdGlvbkV4aXN0fSBmcm9tICcuL2NoZWNrSWZTZWN0aW9uRXhpc3QnO1xuaW1wb3J0IHtkZWxldGVTZWN0aW9ufSBmcm9tICcuL2RlbGV0ZVNlY3Rpb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtnZXRTZWN0aW9uQ29udGVudH0gZnJvbSAnLi9nZXRTZWN0aW9uQ29udGVudCc7XG5cbmNvbnN0IGFyY2hpdmUgPSBhc3luYyAoaW5kZXg6IHN0cmluZywgYW5jaG9yOiBzdHJpbmcsIGFyY2hpdmVUbzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaWZTZWN0aW9uRXhpc3QgPSBhd2FpdCBjaGVja0lmU2VjdGlvbkV4aXN0KGluZGV4LCBhbmNob3IpO1xuXG5cdGlmIChpZlNlY3Rpb25FeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh3Z1BhZ2VOYW1lLCBpbmRleCk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCBhcmNoaXZlU2VjdGlvbihhcmNoaXZlVG8sIGNvbnRlbnQpO1xuXHRhd2FpdCBkZWxldGVTZWN0aW9uKHdnUGFnZU5hbWUsIGluZGV4LCBnZXRNZXNzYWdlKCdBcmNoaXZlIHN1bW1hcnknKSk7XG59O1xuXG5leHBvcnQge2FyY2hpdmV9O1xuIiwgImltcG9ydCB7Y2hlY2tJZlNlY3Rpb25FeGlzdH0gZnJvbSAnLi9jaGVja0lmU2VjdGlvbkV4aXN0JztcbmltcG9ydCB7ZGVsZXRlU2VjdGlvbn0gZnJvbSAnLi9kZWxldGVTZWN0aW9uJztcbmltcG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9IGZyb20gJy4vZ2V0U2VjdGlvbkNvbnRlbnQnO1xuXG5jb25zdCByZW1vdmUgPSBhc3luYyAoaW5kZXg6IHN0cmluZywgYW5jaG9yOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpZlNlY3Rpb25FeGlzdCA9IGF3YWl0IGNoZWNrSWZTZWN0aW9uRXhpc3QoaW5kZXgsIGFuY2hvcik7XG5cblx0aWYgKGlmU2VjdGlvbkV4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHdnUGFnZU5hbWUsIGluZGV4KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGF3YWl0IGRlbGV0ZVNlY3Rpb24od2dQYWdlTmFtZSwgaW5kZXgpO1xufTtcblxuZXhwb3J0IHtyZW1vdmV9O1xuIiwgImltcG9ydCB7b25DbGlja1dyYXAsIHBpcGVFbGVtZW50LCBzZWN0aW9uSWRTcGFuRWxlbWVudH0gZnJvbSAnLi9yZWFjdCc7XG5pbXBvcnQge2FyY2hpdmV9IGZyb20gJy4vYXJjaGl2ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNlY3Rpb25zfSBmcm9tICcuL3BhcnNlJztcbmltcG9ydCB7cmVtb3ZlfSBmcm9tICcuL3JlbW92ZSc7XG5cbmNvbnN0IGFkZExpbmtzID0gYXN5bmMgKHtcblx0YXJjTGV2ZWwsXG5cdGFyY0xvYyxcblx0c2VjQXJjLFxuXHRzZWNEZWwsXG59OiB7XG5cdGFyY0xldmVsOiBzdHJpbmc7XG5cdGFyY0xvYzogc3RyaW5nO1xuXHRzZWNBcmM6IHN0cmluZztcblx0c2VjRGVsOiBzdHJpbmc7XG59KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRjb25zdCBoZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGgke2FyY0xldmVsfWApO1xuXHRjb25zdCBoZWFkbGluZXMgPSBbXTtcblx0Y29uc3QgaGVhZGluZ0luZGljZXMgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGhlYWRpbmcgb2YgaGVhZGluZ3MpIHtcblx0XHRjb25zdCBoZWFkbGluZSA9IGhlYWRpbmcucXVlcnlTZWxlY3RvcignLm13LWhlYWRsaW5lJyk7XG5cdFx0aGVhZGxpbmVzW2hlYWRsaW5lcy5sZW5ndGhdID0gaGVhZGxpbmU/LmlkO1xuXHR9XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zVG9BcmNoaXZlKSB7XG5cdFx0aWYgKHNlY3Rpb24ubGV2ZWwgIT09IGFyY0xldmVsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoaGVhZGxpbmVzLmluY2x1ZGVzKHNlY3Rpb24uYW5jaG9yKSkge1xuXHRcdFx0aGVhZGluZ0luZGljZXNbaGVhZGluZ0luZGljZXMubGVuZ3RoXSA9IHtcblx0XHRcdFx0aW5kZXg6IHNlY3Rpb24uaW5kZXgsXG5cdFx0XHRcdGlkOiBzZWN0aW9uLmFuY2hvcixcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCB7aW5kZXgsIGlkfSBvZiBoZWFkaW5nSW5kaWNlcykge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1xdWVyeS1zZWxlY3RvclxuXHRcdGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRcdGlmICghaGVhZGxpbmUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBhcmVudEhlYWRpbmcgPSBoZWFkbGluZS5wYXJlbnRFbGVtZW50O1xuXHRcdGlmICghcGFyZW50SGVhZGluZykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdFNlY3Rpb24gPSBwYXJlbnRIZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdGlmICghZWRpdFNlY3Rpb24pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlY3Rpb25JZFNwYW4gPSBzZWN0aW9uSWRTcGFuRWxlbWVudCgpO1xuXHRcdGlmIChzZWNBcmMgPT09ICcxJykge1xuXHRcdFx0c2VjdGlvbklkU3Bhbi5hcHBlbmQoXG5cdFx0XHRcdG9uQ2xpY2tXcmFwKGdldE1lc3NhZ2UoJ0FyY2hpdmUnKSwgJ2FyY2hpdmUnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHZvaWQgYXJjaGl2ZShpbmRleCwgaWQsIGFyY0xvYykudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmIChzZWNBcmMgPT09ICcxJyAmJiBzZWNEZWwgPT09ICcxJykge1xuXHRcdFx0c2VjdGlvbklkU3Bhbi5hcHBlbmQocGlwZUVsZW1lbnQoKSk7XG5cdFx0fVxuXHRcdGlmIChzZWNEZWwgPT09ICcxJykge1xuXHRcdFx0c2VjdGlvbklkU3Bhbi5hcHBlbmQoXG5cdFx0XHRcdG9uQ2xpY2tXcmFwKGdldE1lc3NhZ2UoJ0RlbGV0ZScpLCAnZGVsZXRlJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR2b2lkIHJlbW92ZShpbmRleCwgaWQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRlZGl0U2VjdGlvbi5wcmVwZW5kKHNlY3Rpb25JZFNwYW4pO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZExpbmtzfTtcbiIsICJjb25zdCBnZXRTZXR0aW5ncyA9ICgpID0+IHtcblx0Y29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWFzeV9hcmNoaXZlX2RhdGFfcG9pbnRfY29sbGVjdGlvbicpIGFzIEhUTUxFbGVtZW50O1xuXHRpZiAoIXNldHRpbmdzKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCB7ZGF0YXNldH0gPSBzZXR0aW5ncztcblx0Y29uc3Qge2FyY0xldmVsLCBhcmNMb2MsIHNlY0FyYywgc2VjRGVsfSA9IGRhdGFzZXQ7XG5cdHJldHVybiB7XG5cdFx0YXJjTGV2ZWw6IGFyY0xldmVsID8/ICcyJyxcblx0XHRhcmNMb2M6IGFyY0xvYyA/PyBudWxsLFxuXHRcdHNlY0FyYzogc2VjQXJjID8/ICcxJyxcblx0XHRzZWNEZWw6IHNlY0RlbCA/PyAnMScsXG5cdH07XG59O1xuXG5leHBvcnQge2dldFNldHRpbmdzfTtcbiIsICJjb25zdCBpZkFyY0xvY05vdEFsbG93ZWQgPSAoYXJjTG9jOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzb3VyY2VUaXRsZSA9IG5ldyBtdy5UaXRsZSh3Z1BhZ2VOYW1lKTtcblx0Y29uc3QgYXJjTG9jVGl0bGUgPSBuZXcgbXcuVGl0bGUoYXJjTG9jKTtcblxuXHRjb25zdCBhcmNMb2NOYW1lc3BhY2VJZCA9IGFyY0xvY1RpdGxlLmdldE5hbWVzcGFjZUlkKCk7XG5cdGNvbnN0IGFyY0xvY1BhZ2VOYW1lID0gYXJjTG9jVGl0bGUuZ2V0TWFpbigpO1xuXHRjb25zdCBzb3VyY2VOYW1lc3BhY2VJZCA9IHNvdXJjZVRpdGxlLmdldE5hbWVzcGFjZUlkKCk7XG5cdGNvbnN0IHNvdXJjZVBhZ2VOYW1lID0gc291cmNlVGl0bGUuZ2V0TWFpbigpO1xuXG5cdGlmIChhcmNMb2NOYW1lc3BhY2VJZCA9PT0gMCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSBzb3VyY2VOYW1lc3BhY2VJZCAmJiBhcmNMb2NQYWdlTmFtZSA9PT0gc291cmNlUGFnZU5hbWUpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7aWZBcmNMb2NOb3RBbGxvd2VkfTtcbiIsICJjb25zdCBpc0luQmxhY2tsaXN0ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnSXNNYWluUGFnZSwgd2dQYWdlTmFtZSwgd2dSZWxldmFudFVzZXJOYW1lLCB3Z1VzZXJOYW1lLCB3Z0N1clJldmlzaW9uSWQsIHdnUmV2aXNpb25JZH0gPVxuXHRcdG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgYmxhY2tMaXN0UmVnZXhBcnIgPSBbXG5cdFx0L15GaWxlOi4qJC8sXG5cdFx0L15NZWRpYVdpa2k6LiokLyxcblx0XHQvXk1vZHVsZTouKiQvLFxuXHRcdC9eQ2F0ZWdvcnk6LiokLyxcblx0XHQvXlRlbXBsYXRlOi4qJC8sXG5cdFx0L15TcGVjaWFsOi4qJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanMkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5jc3MkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qc29uJC8sXG5cdF07XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCB8fCB3Z0lzTWFpblBhZ2UpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCB8fCB3Z0N1clJldmlzaW9uSWQgLSB3Z1JldmlzaW9uSWQgIT09IDApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMyAmJiAhKHdnUmVsZXZhbnRVc2VyTmFtZSA9PT0gd2dVc2VyTmFtZSkpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja0xpc3RSZWdleEFycikge1xuXHRcdGlmIChlbGVtZW50LnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7aXNJbkJsYWNrbGlzdH07XG4iLCAiaW1wb3J0ICcuL0Vhc3lBcmNoaXZlLU5ldy5sZXNzJztcbmltcG9ydCB7YWRkTGlua3N9IGZyb20gJy4vbW9kdWxlcy9hZGRMaW5rcyc7XG5pbXBvcnQge2dldFNldHRpbmdzfSBmcm9tICcuL21vZHVsZXMvc2V0dGluZ3MnO1xuaW1wb3J0IHtpZkFyY0xvY05vdEFsbG93ZWR9IGZyb20gJy4vbW9kdWxlcy9pZkFyY0xvY05vdEFsbG93ZWQnO1xuaW1wb3J0IHtpc0luQmxhY2tsaXN0fSBmcm9tICcuL21vZHVsZXMvaXNJbkJsYWNrTGlzdCc7XG5cbihmdW5jdGlvbiBlYXN5QXJjaGl2ZSgpIHtcblx0Y29uc3QgaW5CbGFja2xpc3QgPSBpc0luQmxhY2tsaXN0KCk7XG5cdGlmIChpbkJsYWNrbGlzdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3MoKTtcblx0aWYgKCFzZXR0aW5ncykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0gPSBzZXR0aW5ncztcblx0aWYgKCFhcmNMb2MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBhcmNMb2NOb3RBbGxvd2VkID0gaWZBcmNMb2NOb3RBbGxvd2VkKGFyY0xvYyk7XG5cdGlmIChhcmNMb2NOb3RBbGxvd2VkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBhZGRMaW5rcyh7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9KTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFrQ0MsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7QUFpQmxDLElBQU1DLGNBQWNBLENBQUNDLGFBQXFCQyxXQUFtQkMsWUFDNUROLGtDQUFBTyxRQUFBQyxjQUFDLEtBQUE7RUFBRUMsT0FBTyxDQUFDLHFCQUFBLHFCQUFBQyxPQUEwQ0wsU0FBUyxDQUFBO0VBQUtDO0VBQWtCRjtBQUFBLENBQTBCO0FBR2hILElBQU1PLGNBQWNBLE1BQU1YLGtDQUFBTyxRQUFBQyxjQUFDLFFBQUE7RUFBS0MsT0FBTTtFQUF5QkwsYUFBYTtBQUFBLENBQUs7QUFFakYsSUFBTVEsdUJBQXVCQSxNQUFNWixrQ0FB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ckI7RUFDRDtBQUVBLE9BQUs5RCxTQUFTO0lBQUNFO0lBQVVDO0lBQVFDO0lBQVFDO0VBQU0sQ0FBQztBQUNqRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAib25DbGlja1dyYXAiLCAidGV4dENvbnRlbnQiLCAiY2xhc3NOYW1lIiwgIm9uQ2xpY2siLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzIiwgImNvbmNhdCIsICJwaXBlRWxlbWVudCIsICJzZWN0aW9uSWRTcGFuRWxlbWVudCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNoZWNrSWZQYWdlRXhpc3QiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJhcmNoaXZlVG8iLCAiX3F1ZXJ5JHBhZ2VzJCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgInF1ZXJ5IiwgImdldCIsICJwYWdlcyIsICJtaXNzaW5nIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFyY2hpdmUiLCAibG9jYWxpemUiLCAiZW4iLCAiQXJjaGl2aW5nIiwgIkFyY2hpdmVkIiwgIkRlbGV0ZSIsICJEZWxldGluZyIsICJEZWxldGVkIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhcmNoaXZlU2VjdGlvbiIsICJfcmVmMiIsICJ0ZXh0IiwgInBhZ2VFeGlzdCIsICJjcmVhdGUiLCAic3VtbWFyeSIsICJtaW5vciIsICJlZGl0IiwgImFwcGVuZHRleHQiLCAiX3gyIiwgIl94MyIsICJnZXRTZWN0aW9ucyIsICJfcmVmMyIsICJ0aXRsZSIsICJwYWdlIiwgInBhcnNlIiwgInNlY3Rpb25zIiwgInNlY3Rpb25zVG9BcmNoaXZlIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInNlY3Rpb24iLCAidmFsdWUiLCAibGV2ZWwiLCAiaW5kZXgiLCAiYW5jaG9yIiwgInN0YXJ0c1dpdGgiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiX3g0IiwgImNoZWNrSWZTZWN0aW9uRXhpc3QiLCAiX3JlZjQiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiaWZTZWN0aW9uRXhpc3QiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiX3g1IiwgIl94NiIsICJkZWxldGVTZWN0aW9uIiwgIl9yZWY1IiwgIl94NyIsICJfeDgiLCAiX3g5IiwgImdldFNlY3Rpb25Db250ZW50IiwgIl9yZWY2IiwgIl9xdWVyeSRwYWdlcyQwJHJldmlzaSIsICJydnByb3AiLCAicnZzZWN0aW9uIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgInJldmlzaW9ucyIsICJjb250ZW50IiwgIl94MTAiLCAiX3gxMSIsICJhcmNoaXZlIiwgIl9yZWY3IiwgIl94MTIiLCAiX3gxMyIsICJfeDE0IiwgInJlbW92ZSIsICJfcmVmOCIsICJfeDE1IiwgIl94MTYiLCAiYWRkTGlua3MiLCAiX3JlZjkiLCAiYXJjTGV2ZWwiLCAiYXJjTG9jIiwgInNlY0FyYyIsICJzZWNEZWwiLCAiaGVhZGluZ3MiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJoZWFkbGluZXMiLCAiaGVhZGluZ0luZGljZXMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiaGVhZGluZyIsICJoZWFkbGluZSIsICJxdWVyeVNlbGVjdG9yIiwgImlkIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImluY2x1ZGVzIiwgIl9pIiwgIl9oZWFkaW5nSW5kaWNlcyIsICJnZXRFbGVtZW50QnlJZCIsICJwYXJlbnRIZWFkaW5nIiwgInBhcmVudEVsZW1lbnQiLCAiZWRpdFNlY3Rpb24iLCAic2VjdGlvbklkU3BhbiIsICJhcHBlbmQiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAidGhlbiIsICJsb2NhdGlvbiIsICJyZWxvYWQiLCAicHJlcGVuZCIsICJfeDE3IiwgImdldFNldHRpbmdzIiwgInNldHRpbmdzIiwgImRhdGFzZXQiLCAiaWZBcmNMb2NOb3RBbGxvd2VkIiwgInNvdXJjZVRpdGxlIiwgIlRpdGxlIiwgImFyY0xvY1RpdGxlIiwgImFyY0xvY05hbWVzcGFjZUlkIiwgImdldE5hbWVzcGFjZUlkIiwgImFyY0xvY1BhZ2VOYW1lIiwgImdldE1haW4iLCAic291cmNlTmFtZXNwYWNlSWQiLCAic291cmNlUGFnZU5hbWUiLCAiaXNJbkJsYWNrbGlzdCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z0lzTWFpblBhZ2UiLCAid2dSZWxldmFudFVzZXJOYW1lIiwgIndnVXNlck5hbWUiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJibGFja0xpc3RSZWdleEFyciIsICJfaTIiLCAiX2JsYWNrTGlzdFJlZ2V4QXJyIiwgImVsZW1lbnQiLCAidGVzdCIsICJlYXN5QXJjaGl2ZSIsICJpbkJsYWNrbGlzdCIsICJhcmNMb2NOb3RBbGxvd2VkIl0KfQo=
