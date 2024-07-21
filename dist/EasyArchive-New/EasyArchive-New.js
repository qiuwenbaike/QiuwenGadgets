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
//! src/EasyArchive-New/modules/replaceChild.ts
var replaceChild = (element, newChild) => {
  while (element.hasChildNodes()) {
    var _element$firstChild;
    (_element$firstChild = element.firstChild) === null || _element$firstChild === void 0 || _element$firstChild.remove();
  }
  element.append(newChild);
};
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
          var _event$target;
          event.preventDefault();
          const parentElement = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.parentElement;
          if (parentElement) {
            replaceChild(parentElement, onClickWrap(getMessage("Archiving"), "archiving"));
          }
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
          var _event$target2;
          event.preventDefault();
          const parentElement = (_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.parentElement;
          if (parentElement) {
            replaceChild(parentElement, onClickWrap(getMessage("Deleting"), "deleting"));
          }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL3JlYWN0LnRzeCIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9jaGVja0lmUGFnZUV4aXN0LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9hcmNoaXZlU2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvcGFyc2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2NoZWNrSWZTZWN0aW9uRXhpc3QudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2RlbGV0ZVNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2dldFNlY3Rpb25Db250ZW50LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9hcmNoaXZlLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9yZW1vdmUudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL3JlcGxhY2VDaGlsZC50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvYWRkTGlua3MudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL3NldHRpbmdzLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9pZkFyY0xvY05vdEFsbG93ZWQudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2lzSW5CbGFja0xpc3QudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9FYXN5QXJjaGl2ZS1OZXcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbmNvbnN0IGVsZW1lbnRXcmFwID0gKGlkOiBzdHJpbmcsIGlubmVyRWxlbWVudDogUmVhY3RFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17WydwYWdlLWluZm9fX2l0ZW0nXX0gaWQ9e2lkfT5cblx0XHRcdFx0e2lubmVyRWxlbWVudH1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9IGVsc2UgaWYgKFsndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJywgJ2dvbmdiaSddLmluY2x1ZGVzKHNraW4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykpIHtcblx0XHRyZXR1cm4gPGxpIGlkPXtpZH0+e2lubmVyRWxlbWVudH08L2xpPjtcblx0fVxuXHRyZXR1cm4gPGRpdiBpZD17aWR9Pntpbm5lckVsZW1lbnR9PC9kaXY+O1xufTtcblxuY29uc3Qgb25DbGlja1dyYXAgPSAodGV4dENvbnRlbnQ6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcsIG9uQ2xpY2s/OiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkKSA9PiAoXG5cdDxhIGNsYXNzPXtbJ2Vhc3ktYXJjaGl2ZS1saW5rJywgYGVhc3ktYXJjaGl2ZS1saW5rLSR7Y2xhc3NOYW1lfWBdfSBvbkNsaWNrPXtvbkNsaWNrfSB0ZXh0Q29udGVudD17dGV4dENvbnRlbnR9IC8+XG4pO1xuXG5jb25zdCBwaXBlRWxlbWVudCA9ICgpID0+IDxzcGFuIGNsYXNzPVwibXctZWRpdHNlY3Rpb24tZGl2aWRlclwiIHRleHRDb250ZW50PXsnfCd9IC8+O1xuXG5jb25zdCBzZWN0aW9uSWRTcGFuRWxlbWVudCA9ICgpID0+IDxzcGFuIGNsYXNzPXtbJ2Vhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4nXX0gLz47XG5cbmNvbnN0IHNwYW4gPSAoaW5uZXJIVE1MOiBzdHJpbmcpID0+IDxzcGFuIGlubmVySFRNTD17aW5uZXJIVE1MfSAvPjtcblxuZXhwb3J0IHtlbGVtZW50V3JhcCwgb25DbGlja1dyYXAsIHBpcGVFbGVtZW50LCBzZWN0aW9uSWRTcGFuRWxlbWVudCwgc3Bhbn07XG4iLCAie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwidmVyc2lvblwiOiBcIjAuMVwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBFYXN5QWNoaXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgY2hlY2tJZlBhZ2VFeGlzdCA9IGFzeW5jIChhcmNoaXZlVG86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbmZvJyxcblx0XHR0aXRsZXM6IGFyY2hpdmVUbyxcblx0fTtcblxuXHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdGlmIChxdWVyeS5wYWdlc1swXT8ubWlzc2luZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tJZlBhZ2VFeGlzdH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFyY2hpdmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2Y5qqUJyxcblx0XHR9KSxcblx0XHRBcmNoaXZpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYmVpbmcgYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5LitJyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOS4rScsXG5cdFx0fSksXG5cdFx0QXJjaGl2ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnYXJjaGl2ZWQnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5a2Y5qGjJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suWtmOaqlCcsXG5cdFx0fSksXG5cdFx0RGVsZXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZScsXG5cdFx0XHQnemgtaGFucyc6ICfliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHREZWxldGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdiZWluZyBkZWxldGVkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOS4rScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTkuK0nLFxuXHRcdH0pLFxuXHRcdERlbGV0ZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGVsZXRlZCcsXG5cdFx0XHQnemgtaGFucyc6ICflt7LliKDpmaQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5Yiq6ZmkJyxcblx0XHR9KSxcblx0XHQnQXJjaGl2ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdhcmNoaXZlIHNlY3Rpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2Y5qGj5q616JC9Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WtmOaqlOauteiQvScsXG5cdFx0fSksXG5cdFx0J0NyZWF0ZSBzdW1tYXJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdjcmVhdGUgYXJjaGl2ZScsXG5cdFx0XHQnemgtaGFucyc6ICflu7rnq4vlrZjmoaMnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bu656uL5a2Y5qqUJyxcblx0XHR9KSxcblx0XHQnRGVsZXRlIHN1bW1hcnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RlbGV0ZSBzZWN0aW9uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIoOmZpOauteiQvScsXG5cdFx0XHQnemgtaGFudCc6ICfliKrpmaTmrrXokL0nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtjaGVja0lmUGFnZUV4aXN0fSBmcm9tICcuL2NoZWNrSWZQYWdlRXhpc3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBhcmNoaXZlU2VjdGlvbiA9IGFzeW5jIChhcmNoaXZlVG86IHN0cmluZywgdGV4dDogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhZ2VFeGlzdCA9IGF3YWl0IGNoZWNrSWZQYWdlRXhpc3QoYXJjaGl2ZVRvKTtcblx0aWYgKCFwYWdlRXhpc3QpIHtcblx0XHRhd2FpdCBhcGkuY3JlYXRlKFxuXHRcdFx0YXJjaGl2ZVRvLFxuXHRcdFx0e1xuXHRcdFx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdDcmVhdGUgc3VtbWFyeScpLFxuXHRcdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHQne3t0YWxrYXJjaGl2ZX19J1xuXHRcdCk7XG5cdH1cblx0YXdhaXQgYXBpLmVkaXQoYXJjaGl2ZVRvLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFwcGVuZHRleHQ6IGBcXG5cXG4ke3RleHR9YCxcblx0XHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ0FyY2hpdmUgc3VtbWFyeScpLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FyY2hpdmVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9ucyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwYWdlOiB0aXRsZSxcblx0XHRwcm9wOiAnc2VjdGlvbnMnLFxuXHR9O1xuXG5cdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0Y29uc3Qge1xuXHRcdHNlY3Rpb25zLFxuXHR9OiB7XG5cdFx0c2VjdGlvbnM6IHtcblx0XHRcdGxldmVsOiBzdHJpbmc7XG5cdFx0XHRpbmRleDogc3RyaW5nO1xuXHRcdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0fVtdO1xuXHR9ID0gcGFyc2U7XG5cblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBbXTtcblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRjb25zdCB7bGV2ZWwsIGluZGV4LCBhbmNob3J9ID0gc2VjdGlvbjtcblxuXHRcdGlmIChpbmRleC5zdGFydHNXaXRoKCdULScpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRzZWN0aW9uc1RvQXJjaGl2ZVtzZWN0aW9uc1RvQXJjaGl2ZS5sZW5ndGhdID0ge1xuXHRcdFx0bGV2ZWwsXG5cdFx0XHRpbmRleCxcblx0XHRcdGFuY2hvcixcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHNlY3Rpb25zVG9BcmNoaXZlO1xufTtcblxuZXhwb3J0IHtnZXRTZWN0aW9uc307XG4iLCAiaW1wb3J0IHtnZXRTZWN0aW9uc30gZnJvbSAnLi9wYXJzZSc7XG5cbmNvbnN0IGNoZWNrSWZTZWN0aW9uRXhpc3QgPSBhc3luYyAoaW5kZXg6IHN0cmluZywgYW5jaG9yOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9ucyA9IGF3YWl0IGdldFNlY3Rpb25zKHdnUGFnZU5hbWUpO1xuXG5cdGxldCBpZlNlY3Rpb25FeGlzdCA9IGZhbHNlO1xuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRpZiAoaW5kZXggPT09IHNlY3Rpb24uaW5kZXggJiYgYW5jaG9yID09PSBzZWN0aW9uLmFuY2hvcikge1xuXHRcdFx0aWZTZWN0aW9uRXhpc3QgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gaWZTZWN0aW9uRXhpc3Q7XG59O1xuXG5leHBvcnQge2NoZWNrSWZTZWN0aW9uRXhpc3R9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGRlbGV0ZVNlY3Rpb24gPSBhc3luYyAodGl0bGU6IHN0cmluZywgc2VjdGlvbjogc3RyaW5nLCBzdW1tYXJ5Pzogc3RyaW5nKSA9PiB7XG5cdGF3YWl0IGFwaS5lZGl0KHRpdGxlLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlY3Rpb24sXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdHN1bW1hcnk6IHN1bW1hcnkgPz8gZ2V0TWVzc2FnZSgnRGVsZXRlIHN1bW1hcnknKSxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xufTtcblxuZXhwb3J0IHtkZWxldGVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9uQ29udGVudCA9IGFzeW5jICh0aXRsZTogc3RyaW5nLCBzZWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRydnNlY3Rpb246IHNlY3Rpb24sXG5cdH07XG5cblx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxuXHRyZXR1cm4gcXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQgPz8gbnVsbDtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9O1xuIiwgImltcG9ydCB7YXJjaGl2ZVNlY3Rpb259IGZyb20gJy4vYXJjaGl2ZVNlY3Rpb24nO1xuaW1wb3J0IHtjaGVja0lmU2VjdGlvbkV4aXN0fSBmcm9tICcuL2NoZWNrSWZTZWN0aW9uRXhpc3QnO1xuaW1wb3J0IHtkZWxldGVTZWN0aW9ufSBmcm9tICcuL2RlbGV0ZVNlY3Rpb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtnZXRTZWN0aW9uQ29udGVudH0gZnJvbSAnLi9nZXRTZWN0aW9uQ29udGVudCc7XG5cbmNvbnN0IGFyY2hpdmUgPSBhc3luYyAoaW5kZXg6IHN0cmluZywgYW5jaG9yOiBzdHJpbmcsIGFyY2hpdmVUbzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaWZTZWN0aW9uRXhpc3QgPSBhd2FpdCBjaGVja0lmU2VjdGlvbkV4aXN0KGluZGV4LCBhbmNob3IpO1xuXG5cdGlmIChpZlNlY3Rpb25FeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh3Z1BhZ2VOYW1lLCBpbmRleCk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCBhcmNoaXZlU2VjdGlvbihhcmNoaXZlVG8sIGNvbnRlbnQpO1xuXHRhd2FpdCBkZWxldGVTZWN0aW9uKHdnUGFnZU5hbWUsIGluZGV4LCBnZXRNZXNzYWdlKCdBcmNoaXZlIHN1bW1hcnknKSk7XG59O1xuXG5leHBvcnQge2FyY2hpdmV9O1xuIiwgImltcG9ydCB7Y2hlY2tJZlNlY3Rpb25FeGlzdH0gZnJvbSAnLi9jaGVja0lmU2VjdGlvbkV4aXN0JztcbmltcG9ydCB7ZGVsZXRlU2VjdGlvbn0gZnJvbSAnLi9kZWxldGVTZWN0aW9uJztcbmltcG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9IGZyb20gJy4vZ2V0U2VjdGlvbkNvbnRlbnQnO1xuXG5jb25zdCByZW1vdmUgPSBhc3luYyAoaW5kZXg6IHN0cmluZywgYW5jaG9yOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpZlNlY3Rpb25FeGlzdCA9IGF3YWl0IGNoZWNrSWZTZWN0aW9uRXhpc3QoaW5kZXgsIGFuY2hvcik7XG5cblx0aWYgKGlmU2VjdGlvbkV4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHdnUGFnZU5hbWUsIGluZGV4KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGF3YWl0IGRlbGV0ZVNlY3Rpb24od2dQYWdlTmFtZSwgaW5kZXgpO1xufTtcblxuZXhwb3J0IHtyZW1vdmV9O1xuIiwgImNvbnN0IHJlcGxhY2VDaGlsZCA9IChlbGVtZW50OiBFbGVtZW50LCBuZXdDaGlsZDogRWxlbWVudCk6IHZvaWQgPT4ge1xuXHR3aGlsZSAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRlbGVtZW50LmZpcnN0Q2hpbGQ/LnJlbW92ZSgpO1xuXHR9XG5cdGVsZW1lbnQuYXBwZW5kKG5ld0NoaWxkKTtcbn07XG5cbmV4cG9ydCB7cmVwbGFjZUNoaWxkfTtcbiIsICJpbXBvcnQge29uQ2xpY2tXcmFwLCBwaXBlRWxlbWVudCwgc2VjdGlvbklkU3BhbkVsZW1lbnR9IGZyb20gJy4vcmVhY3QnO1xuaW1wb3J0IHthcmNoaXZlfSBmcm9tICcuL2FyY2hpdmUnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtnZXRTZWN0aW9uc30gZnJvbSAnLi9wYXJzZSc7XG5pbXBvcnQge3JlbW92ZX0gZnJvbSAnLi9yZW1vdmUnO1xuaW1wb3J0IHtyZXBsYWNlQ2hpbGR9IGZyb20gJy4vcmVwbGFjZUNoaWxkJztcblxuY29uc3QgYWRkTGlua3MgPSBhc3luYyAoe1xuXHRhcmNMZXZlbCxcblx0YXJjTG9jLFxuXHRzZWNBcmMsXG5cdHNlY0RlbCxcbn06IHtcblx0YXJjTGV2ZWw6IHN0cmluZztcblx0YXJjTG9jOiBzdHJpbmc7XG5cdHNlY0FyYzogc3RyaW5nO1xuXHRzZWNEZWw6IHN0cmluZztcbn0pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9uc1RvQXJjaGl2ZSA9IGF3YWl0IGdldFNlY3Rpb25zKHdnUGFnZU5hbWUpO1xuXG5cdGNvbnN0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaCR7YXJjTGV2ZWx9YCk7XG5cdGNvbnN0IGhlYWRsaW5lcyA9IFtdO1xuXHRjb25zdCBoZWFkaW5nSW5kaWNlcyA9IFtdO1xuXG5cdGZvciAoY29uc3QgaGVhZGluZyBvZiBoZWFkaW5ncykge1xuXHRcdGNvbnN0IGhlYWRsaW5lID0gaGVhZGluZy5xdWVyeVNlbGVjdG9yKCcubXctaGVhZGxpbmUnKTtcblx0XHRoZWFkbGluZXNbaGVhZGxpbmVzLmxlbmd0aF0gPSBoZWFkbGluZT8uaWQ7XG5cdH1cblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnNUb0FyY2hpdmUpIHtcblx0XHRpZiAoc2VjdGlvbi5sZXZlbCAhPT0gYXJjTGV2ZWwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChoZWFkbGluZXMuaW5jbHVkZXMoc2VjdGlvbi5hbmNob3IpKSB7XG5cdFx0XHRoZWFkaW5nSW5kaWNlc1toZWFkaW5nSW5kaWNlcy5sZW5ndGhdID0ge1xuXHRcdFx0XHRpbmRleDogc2VjdGlvbi5pbmRleCxcblx0XHRcdFx0aWQ6IHNlY3Rpb24uYW5jaG9yLFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRmb3IgKGNvbnN0IHtpbmRleCwgaWR9IG9mIGhlYWRpbmdJbmRpY2VzKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXF1ZXJ5LXNlbGVjdG9yXG5cdFx0Y29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdFx0aWYgKCFoZWFkbGluZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGFyZW50SGVhZGluZyA9IGhlYWRsaW5lLnBhcmVudEVsZW1lbnQ7XG5cdFx0aWYgKCFwYXJlbnRIZWFkaW5nKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBlZGl0U2VjdGlvbiA9IHBhcmVudEhlYWRpbmcucXVlcnlTZWxlY3RvcignLm13LWVkaXRzZWN0aW9uJyk7XG5cdFx0aWYgKCFlZGl0U2VjdGlvbikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2VjdGlvbklkU3BhbiA9IHNlY3Rpb25JZFNwYW5FbGVtZW50KCk7XG5cdFx0aWYgKHNlY0FyYyA9PT0gJzEnKSB7XG5cdFx0XHRzZWN0aW9uSWRTcGFuLmFwcGVuZChcblx0XHRcdFx0b25DbGlja1dyYXAoZ2V0TWVzc2FnZSgnQXJjaGl2ZScpLCAnYXJjaGl2ZScsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0Y29uc3QgcGFyZW50RWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpPy5wYXJlbnRFbGVtZW50O1xuXHRcdFx0XHRcdGlmIChwYXJlbnRFbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRyZXBsYWNlQ2hpbGQocGFyZW50RWxlbWVudCwgb25DbGlja1dyYXAoZ2V0TWVzc2FnZSgnQXJjaGl2aW5nJyksICdhcmNoaXZpbmcnKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZvaWQgYXJjaGl2ZShpbmRleCwgaWQsIGFyY0xvYykudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmIChzZWNBcmMgPT09ICcxJyAmJiBzZWNEZWwgPT09ICcxJykge1xuXHRcdFx0c2VjdGlvbklkU3Bhbi5hcHBlbmQocGlwZUVsZW1lbnQoKSk7XG5cdFx0fVxuXHRcdGlmIChzZWNEZWwgPT09ICcxJykge1xuXHRcdFx0c2VjdGlvbklkU3Bhbi5hcHBlbmQoXG5cdFx0XHRcdG9uQ2xpY2tXcmFwKGdldE1lc3NhZ2UoJ0RlbGV0ZScpLCAnZGVsZXRlJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRjb25zdCBwYXJlbnRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk/LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdFx0aWYgKHBhcmVudEVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdHJlcGxhY2VDaGlsZChwYXJlbnRFbGVtZW50LCBvbkNsaWNrV3JhcChnZXRNZXNzYWdlKCdEZWxldGluZycpLCAnZGVsZXRpbmcnKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHZvaWQgcmVtb3ZlKGluZGV4LCBpZCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGVkaXRTZWN0aW9uLnByZXBlbmQoc2VjdGlvbklkU3Bhbik7XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkTGlua3N9O1xuIiwgImNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGNvbnN0IHtkYXRhc2V0fSA9IHNldHRpbmdzO1xuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gZGF0YXNldDtcblx0cmV0dXJuIHtcblx0XHRhcmNMZXZlbDogYXJjTGV2ZWwgPz8gJzInLFxuXHRcdGFyY0xvYzogYXJjTG9jID8/IG51bGwsXG5cdFx0c2VjQXJjOiBzZWNBcmMgPz8gJzEnLFxuXHRcdHNlY0RlbDogc2VjRGVsID8/ICcxJyxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2V0U2V0dGluZ3N9O1xuIiwgImNvbnN0IGlmQXJjTG9jTm90QWxsb3dlZCA9IChhcmNMb2M6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNvdXJjZVRpdGxlID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpO1xuXHRjb25zdCBhcmNMb2NUaXRsZSA9IG5ldyBtdy5UaXRsZShhcmNMb2MpO1xuXG5cdGNvbnN0IGFyY0xvY05hbWVzcGFjZUlkID0gYXJjTG9jVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3QgYXJjTG9jUGFnZU5hbWUgPSBhcmNMb2NUaXRsZS5nZXRNYWluKCk7XG5cdGNvbnN0IHNvdXJjZU5hbWVzcGFjZUlkID0gc291cmNlVGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0Y29uc3Qgc291cmNlUGFnZU5hbWUgPSBzb3VyY2VUaXRsZS5nZXRNYWluKCk7XG5cblx0aWYgKGFyY0xvY05hbWVzcGFjZUlkID09PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoYXJjTG9jTmFtZXNwYWNlSWQgPT09IHNvdXJjZU5hbWVzcGFjZUlkICYmIGFyY0xvY1BhZ2VOYW1lID09PSBzb3VyY2VQYWdlTmFtZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHtpZkFyY0xvY05vdEFsbG93ZWR9O1xuIiwgImNvbnN0IGlzSW5CbGFja2xpc3QgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dJc01haW5QYWdlLCB3Z1BhZ2VOYW1lLCB3Z1JlbGV2YW50VXNlck5hbWUsIHdnVXNlck5hbWUsIHdnQ3VyUmV2aXNpb25JZCwgd2dSZXZpc2lvbklkfSA9XG5cdFx0bXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBibGFja0xpc3RSZWdleEFyciA9IFtcblx0XHQvXkZpbGU6LiokLyxcblx0XHQvXk1lZGlhV2lraTouKiQvLFxuXHRcdC9eTW9kdWxlOi4qJC8sXG5cdFx0L15DYXRlZ29yeTouKiQvLFxuXHRcdC9eVGVtcGxhdGU6LiokLyxcblx0XHQvXlNwZWNpYWw6LiokLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmNzcyQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzb24kLyxcblx0XTtcblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwIHx8IHdnSXNNYWluUGFnZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwIHx8IHdnQ3VyUmV2aXNpb25JZCAtIHdnUmV2aXNpb25JZCAhPT0gMCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAzICYmICEod2dSZWxldmFudFVzZXJOYW1lID09PSB3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGJsYWNrTGlzdFJlZ2V4QXJyKSB7XG5cdFx0aWYgKGVsZW1lbnQudGVzdCh3Z1BhZ2VOYW1lKSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHtpc0luQmxhY2tsaXN0fTtcbiIsICJpbXBvcnQgJy4vRWFzeUFyY2hpdmUtTmV3Lmxlc3MnO1xuaW1wb3J0IHthZGRMaW5rc30gZnJvbSAnLi9tb2R1bGVzL2FkZExpbmtzJztcbmltcG9ydCB7Z2V0U2V0dGluZ3N9IGZyb20gJy4vbW9kdWxlcy9zZXR0aW5ncyc7XG5pbXBvcnQge2lmQXJjTG9jTm90QWxsb3dlZH0gZnJvbSAnLi9tb2R1bGVzL2lmQXJjTG9jTm90QWxsb3dlZCc7XG5pbXBvcnQge2lzSW5CbGFja2xpc3R9IGZyb20gJy4vbW9kdWxlcy9pc0luQmxhY2tMaXN0JztcblxuKGZ1bmN0aW9uIGVhc3lBcmNoaXZlKCkge1xuXHRjb25zdCBpbkJsYWNrbGlzdCA9IGlzSW5CbGFja2xpc3QoKTtcblx0aWYgKGluQmxhY2tsaXN0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc2V0dGluZ3MgPSBnZXRTZXR0aW5ncygpO1xuXHRpZiAoIXNldHRpbmdzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge2FyY0xldmVsLCBhcmNMb2MsIHNlY0FyYywgc2VjRGVsfSA9IHNldHRpbmdzO1xuXHRpZiAoIWFyY0xvYykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGFyY0xvY05vdEFsbG93ZWQgPSBpZkFyY0xvY05vdEFsbG93ZWQoYXJjTG9jKTtcblx0aWYgKGFyY0xvY05vdEFsbG93ZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGFkZExpbmtzKHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQWtDQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTtBQWlCbEMsSUFBTUMsY0FBY0EsQ0FBQ0MsYUFBcUJDLFdBQW1CQyxZQUM1RE4sa0NBQUFPLFFBQUFDLGNBQUMsS0FBQTtFQUFFQyxPQUFPLENBQUMscUJBQUEscUJBQUFDLE9BQTBDTCxTQUFTLENBQUE7RUFBS0M7RUFBa0JGO0FBQUEsQ0FBMEI7QUFHaEgsSUFBTU8sY0FBY0EsTUFBTVgsa0NBQUFPLFFBQUFDLGNBQUMsUUFBQTtFQUFLQyxPQUFNO0VBQXlCTCxhQUFhO0FBQUEsQ0FBSztBQUVqRixJQUFNUSx1QkFBdUJBLE1BQU1aLGtDQUFBTyxRQUFBQyxjQUFDLFFBQUE7RUFBS0MsT0FBTyxDQUFDLDhCQUE4QjtBQUFBLENBQUc7O0FDckJqRixJQUFBSSxVQUFXOztBQ0RaLElBQUFDLHFCQUF3QlosUUFBQSxpQkFBQTtBQUV4QixJQUFNYSxPQUFBLEdBQWNELG1CQUFBRSxXQUFBLGNBQUFOLE9BQWdDRyxPQUFPLENBQUU7O0FD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LFFBQUloRSxRQUFRa0UsS0FBS25HLFVBQVUsR0FBRztBQUM3QixhQUFPO0lBQ1I7RUFDRDtBQUVBLFNBQU87QUFDUjs7Q0M1QkMsU0FBU29HLGNBQWM7QUFDdkIsUUFBTUMsY0FBY1osY0FBYztBQUNsQyxNQUFJWSxhQUFhO0FBQ2hCO0VBQ0Q7QUFFQSxRQUFNeEIsV0FBV0QsWUFBWTtBQUM3QixNQUFJLENBQUNDLFVBQVU7QUFDZDtFQUNEO0FBRUEsUUFBTTtJQUFDcEM7SUFBVUM7SUFBUUM7SUFBUUM7RUFBTSxJQUFJaUM7QUFDM0MsTUFBSSxDQUFDbkMsUUFBUTtBQUNaO0VBQ0Q7QUFFQSxRQUFNNEQsbUJBQW1CdkIsbUJBQW1CckMsTUFBTTtBQUNsRCxNQUFJNEQsa0JBQWtCO0FBQ3JCO0VBQ0Q7QUFFQSxPQUFLL0QsU0FBUztJQUFDRTtJQUFVQztJQUFRQztJQUFRQztFQUFNLENBQUM7QUFDakQsR0FBRzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgIm9uQ2xpY2tXcmFwIiwgInRleHRDb250ZW50IiwgImNsYXNzTmFtZSIsICJvbkNsaWNrIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzcyIsICJjb25jYXQiLCAicGlwZUVsZW1lbnQiLCAic2VjdGlvbklkU3BhbkVsZW1lbnQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjaGVja0lmUGFnZUV4aXN0IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiYXJjaGl2ZVRvIiwgIl9xdWVyeSRwYWdlcyQiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlcyIsICJxdWVyeSIsICJnZXQiLCAicGFnZXMiLCAibWlzc2luZyIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldEkxOG5NZXNzYWdlcyIsICJBcmNoaXZlIiwgImxvY2FsaXplIiwgImVuIiwgIkFyY2hpdmluZyIsICJBcmNoaXZlZCIsICJEZWxldGUiLCAiRGVsZXRpbmciLCAiRGVsZXRlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYXJjaGl2ZVNlY3Rpb24iLCAiX3JlZjIiLCAidGV4dCIsICJwYWdlRXhpc3QiLCAiY3JlYXRlIiwgInN1bW1hcnkiLCAibWlub3IiLCAiZWRpdCIsICJhcHBlbmR0ZXh0IiwgIl94MiIsICJfeDMiLCAiZ2V0U2VjdGlvbnMiLCAiX3JlZjMiLCAidGl0bGUiLCAicGFnZSIsICJwYXJzZSIsICJzZWN0aW9ucyIsICJzZWN0aW9uc1RvQXJjaGl2ZSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJzZWN0aW9uIiwgInZhbHVlIiwgImxldmVsIiwgImluZGV4IiwgImFuY2hvciIsICJzdGFydHNXaXRoIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgIl94NCIsICJjaGVja0lmU2VjdGlvbkV4aXN0IiwgIl9yZWY0IiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImlmU2VjdGlvbkV4aXN0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIl94NSIsICJfeDYiLCAiZGVsZXRlU2VjdGlvbiIsICJfcmVmNSIsICJfeDciLCAiX3g4IiwgIl94OSIsICJnZXRTZWN0aW9uQ29udGVudCIsICJfcmVmNiIsICJfcXVlcnkkcGFnZXMkMCRyZXZpc2kiLCAicnZwcm9wIiwgInJ2c2VjdGlvbiIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJyZXZpc2lvbnMiLCAiY29udGVudCIsICJfeDEwIiwgIl94MTEiLCAiYXJjaGl2ZSIsICJfcmVmNyIsICJfeDEyIiwgIl94MTMiLCAiX3gxNCIsICJyZW1vdmUiLCAiX3JlZjgiLCAiX3gxNSIsICJfeDE2IiwgInJlcGxhY2VDaGlsZCIsICJlbGVtZW50IiwgIm5ld0NoaWxkIiwgImhhc0NoaWxkTm9kZXMiLCAiX2VsZW1lbnQkZmlyc3RDaGlsZCIsICJmaXJzdENoaWxkIiwgImFwcGVuZCIsICJhZGRMaW5rcyIsICJfcmVmOSIsICJhcmNMZXZlbCIsICJhcmNMb2MiLCAic2VjQXJjIiwgInNlY0RlbCIsICJoZWFkaW5ncyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImhlYWRsaW5lcyIsICJoZWFkaW5nSW5kaWNlcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJoZWFkaW5nIiwgImhlYWRsaW5lIiwgInF1ZXJ5U2VsZWN0b3IiLCAiaWQiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiaW5jbHVkZXMiLCAiX2kiLCAiX2hlYWRpbmdJbmRpY2VzIiwgImdldEVsZW1lbnRCeUlkIiwgInBhcmVudEhlYWRpbmciLCAicGFyZW50RWxlbWVudCIsICJlZGl0U2VjdGlvbiIsICJzZWN0aW9uSWRTcGFuIiwgImV2ZW50IiwgIl9ldmVudCR0YXJnZXQiLCAicHJldmVudERlZmF1bHQiLCAidGFyZ2V0IiwgInRoZW4iLCAibG9jYXRpb24iLCAicmVsb2FkIiwgIl9ldmVudCR0YXJnZXQyIiwgInByZXBlbmQiLCAiX3gxNyIsICJnZXRTZXR0aW5ncyIsICJzZXR0aW5ncyIsICJkYXRhc2V0IiwgImlmQXJjTG9jTm90QWxsb3dlZCIsICJzb3VyY2VUaXRsZSIsICJUaXRsZSIsICJhcmNMb2NUaXRsZSIsICJhcmNMb2NOYW1lc3BhY2VJZCIsICJnZXROYW1lc3BhY2VJZCIsICJhcmNMb2NQYWdlTmFtZSIsICJnZXRNYWluIiwgInNvdXJjZU5hbWVzcGFjZUlkIiwgInNvdXJjZVBhZ2VOYW1lIiwgImlzSW5CbGFja2xpc3QiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dJc01haW5QYWdlIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJ3Z1VzZXJOYW1lIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1JldmlzaW9uSWQiLCAiYmxhY2tMaXN0UmVnZXhBcnIiLCAiX2kyIiwgIl9ibGFja0xpc3RSZWdleEFyciIsICJ0ZXN0IiwgImVhc3lBcmNoaXZlIiwgImluQmxhY2tsaXN0IiwgImFyY0xvY05vdEFsbG93ZWQiXQp9Cg==
