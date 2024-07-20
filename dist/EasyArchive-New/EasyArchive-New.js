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
var emptyElement = () => /* @__PURE__ */ import_ext_gadget.default.createElement(import_ext_gadget.default.Fragment, null);
var onClickWrap = (textContent, onClick, dataActual, dataNominal) => /* @__PURE__ */ import_ext_gadget.default.createElement("a", {
  class: ["easy-archive-link", "easy-archive-link-".concat(dataActual, "-").concat(dataNominal)],
  onClick,
  textContent,
  "data-section-id": dataActual,
  href: "#"
});
var pipeElement = () => /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  class: "mw-editsection-divider",
  textContent: "|"
});
var sectionIdSpanElement = () => /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  class: ["easy-archive-section-id-span"],
  style: {
    display: "none"
  }
});
//! src/EasyArchive-New/options.json
var version = "0.1";
//! src/EasyArchive-New/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("EasyAchive/".concat(version));
//! src/EasyArchive-New/modules/checkIfPageExist.ts
var checkIfPageExist = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (archiveTo) {
    var _pages$;
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "info",
      titles: archiveTo
    };
    const {
      pages
    } = yield api.get(params);
    if ((_pages$ = pages[0]) !== null && _pages$ !== void 0 && _pages$.missing) {
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
        summary: "新建存档页面",
        minor: true
      }, "{{talkarchive}}");
    }
    yield api.edit(archiveTo, () => {
      return {
        appendtext: text,
        summary: "存档内容",
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
        summary: summary !== null && summary !== void 0 ? summary : "删除内容",
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
    yield deleteSection(wgPageName, index, "存档内容");
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
      const heading = document.getElementById(id);
      if (!heading) {
        continue;
      }
      const editSectionSpan = heading.querySelector(".mw-editsection");
      if (!editSectionSpan) {
        continue;
      }
      const sectionIdSpan = sectionIdSpanElement();
      sectionIdSpan.append(secArc === "1" ? onClickWrap("存档", () => {
        void archive(index, id, arcLoc);
      }) : emptyElement(), secArc === "1" && secDel === "1" ? pipeElement() : emptyElement(), secDel === "1" ? onClickWrap("删除", () => {
        void remove(index, id);
      }) : emptyElement());
      editSectionSpan.append(sectionIdSpan);
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
  void addLinks({
    arcLevel,
    arcLoc,
    secArc,
    secDel
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL3JlYWN0LnRzeCIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9jaGVja0lmUGFnZUV4aXN0LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9hcmNoaXZlU2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvcGFyc2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2NoZWNrSWZTZWN0aW9uRXhpc3QudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2RlbGV0ZVNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2dldFNlY3Rpb25Db250ZW50LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9hcmNoaXZlLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9yZW1vdmUudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2FkZExpbmtzLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9zZXR0aW5ncy50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvaXNJbkJsYWNrTGlzdC50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L0Vhc3lBcmNoaXZlLU5ldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuY29uc3QgZWxlbWVudFdyYXAgPSAoaWQ6IHN0cmluZywgaW5uZXJFbGVtZW50OiBSZWFjdEVsZW1lbnQpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtbJ3BhZ2UtaW5mb19faXRlbSddfSBpZD17aWR9PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvbGk+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGlkPXtpZH0+e2lubmVyRWxlbWVudH08L2Rpdj47XG59O1xuXG5jb25zdCBlbXB0eUVsZW1lbnQgPSAoKSA9PiA8PjwvPjtcblxuY29uc3QgbGlua1dyYXAgPSAodGV4dENvbnRlbnQ6IHN0cmluZywgaHJlZjogc3RyaW5nKSA9PiA8YSBocmVmPXtocmVmfSB0ZXh0Q29udGVudD17dGV4dENvbnRlbnR9IC8+O1xuXG5jb25zdCBvbkNsaWNrV3JhcCA9ICh0ZXh0Q29udGVudDogc3RyaW5nLCBvbkNsaWNrOiAoKSA9PiB2b2lkLCBkYXRhQWN0dWFsPzogc3RyaW5nLCBkYXRhTm9taW5hbD86IHN0cmluZykgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzPXtbJ2Vhc3ktYXJjaGl2ZS1saW5rJywgYGVhc3ktYXJjaGl2ZS1saW5rLSR7ZGF0YUFjdHVhbH0tJHtkYXRhTm9taW5hbH1gXX1cblx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHRcdHRleHRDb250ZW50PXt0ZXh0Q29udGVudH1cblx0XHRkYXRhLXNlY3Rpb24taWQ9e2RhdGFBY3R1YWx9XG5cdFx0aHJlZj1cIiNcIlxuXHQvPlxuKTtcblxuY29uc3QgcGlwZUVsZW1lbnQgPSAoKSA9PiA8c3BhbiBjbGFzcz1cIm13LWVkaXRzZWN0aW9uLWRpdmlkZXJcIiB0ZXh0Q29udGVudD17J3wnfSAvPjtcblxuY29uc3Qgc2VjdGlvbklkU3BhbkVsZW1lbnQgPSAoKSA9PiA8c3BhbiBjbGFzcz17WydlYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuJ119IHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnfX0gLz47XG5cbmNvbnN0IHNwYW4gPSAoaW5uZXJIVE1MOiBzdHJpbmcpID0+IDxzcGFuIGlubmVySFRNTD17aW5uZXJIVE1MfSAvPjtcblxuZXhwb3J0IHtlbGVtZW50V3JhcCwgZW1wdHlFbGVtZW50LCBsaW5rV3JhcCwgb25DbGlja1dyYXAsIHBpcGVFbGVtZW50LCBzZWN0aW9uSWRTcGFuRWxlbWVudCwgc3Bhbn07XG4iLCAie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwidmVyc2lvblwiOiBcIjAuMVwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBFYXN5QWNoaXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgY2hlY2tJZlBhZ2VFeGlzdCA9IGFzeW5jIChhcmNoaXZlVG86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5SW5mb1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdpbmZvJyxcblx0XHR0aXRsZXM6IGFyY2hpdmVUbyxcblx0fTtcblxuXHRjb25zdCB7cGFnZXN9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdGlmIChwYWdlc1swXT8ubWlzc2luZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydCB7Y2hlY2tJZlBhZ2VFeGlzdH07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Y2hlY2tJZlBhZ2VFeGlzdH0gZnJvbSAnLi9jaGVja0lmUGFnZUV4aXN0JztcblxuY29uc3QgYXJjaGl2ZVNlY3Rpb24gPSBhc3luYyAoYXJjaGl2ZVRvOiBzdHJpbmcsIHRleHQ6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYWdlRXhpc3QgPSBhd2FpdCBjaGVja0lmUGFnZUV4aXN0KGFyY2hpdmVUbyk7XG5cdGlmICghcGFnZUV4aXN0KSB7XG5cdFx0YXdhaXQgYXBpLmNyZWF0ZShcblx0XHRcdGFyY2hpdmVUbyxcblx0XHRcdHtcblx0XHRcdFx0c3VtbWFyeTogJ+aWsOW7uuWtmOaho+mhtemdoicsXG5cdFx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdCd7e3RhbGthcmNoaXZlfX0nXG5cdFx0KTtcblx0fVxuXHRhd2FpdCBhcGkuZWRpdChhcmNoaXZlVG8sICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YXBwZW5kdGV4dDogdGV4dCxcblx0XHRcdHN1bW1hcnk6ICflrZjmoaPlhoXlrrknLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FyY2hpdmVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9ucyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwYWdlOiB0aXRsZSxcblx0XHRwcm9wOiAnc2VjdGlvbnMnLFxuXHR9O1xuXG5cdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0Y29uc3Qge1xuXHRcdHNlY3Rpb25zLFxuXHR9OiB7XG5cdFx0c2VjdGlvbnM6IHtcblx0XHRcdGxldmVsOiBzdHJpbmc7XG5cdFx0XHRpbmRleDogc3RyaW5nO1xuXHRcdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0fVtdO1xuXHR9ID0gcGFyc2U7XG5cblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBbXTtcblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRjb25zdCB7bGV2ZWwsIGluZGV4LCBhbmNob3J9ID0gc2VjdGlvbjtcblxuXHRcdGlmIChpbmRleC5zdGFydHNXaXRoKCdULScpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRzZWN0aW9uc1RvQXJjaGl2ZVtzZWN0aW9uc1RvQXJjaGl2ZS5sZW5ndGhdID0ge1xuXHRcdFx0bGV2ZWwsXG5cdFx0XHRpbmRleCxcblx0XHRcdGFuY2hvcixcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHNlY3Rpb25zVG9BcmNoaXZlO1xufTtcblxuZXhwb3J0IHtnZXRTZWN0aW9uc307XG4iLCAiaW1wb3J0IHtnZXRTZWN0aW9uc30gZnJvbSAnLi9wYXJzZSc7XG5cbmNvbnN0IGNoZWNrSWZTZWN0aW9uRXhpc3QgPSBhc3luYyAoaW5kZXg6IHN0cmluZywgYW5jaG9yOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9ucyA9IGF3YWl0IGdldFNlY3Rpb25zKHdnUGFnZU5hbWUpO1xuXG5cdGxldCBpZlNlY3Rpb25FeGlzdCA9IGZhbHNlO1xuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRpZiAoaW5kZXggPT09IHNlY3Rpb24uaW5kZXggJiYgYW5jaG9yID09PSBzZWN0aW9uLmFuY2hvcikge1xuXHRcdFx0aWZTZWN0aW9uRXhpc3QgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gaWZTZWN0aW9uRXhpc3Q7XG59O1xuXG5leHBvcnQge2NoZWNrSWZTZWN0aW9uRXhpc3R9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGRlbGV0ZVNlY3Rpb24gPSBhc3luYyAodGl0bGU6IHN0cmluZywgc2VjdGlvbjogc3RyaW5nLCBzdW1tYXJ5Pzogc3RyaW5nKSA9PiB7XG5cdGF3YWl0IGFwaS5lZGl0KHRpdGxlLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlY3Rpb24sXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdHN1bW1hcnk6IHN1bW1hcnkgPz8gJ+WIoOmZpOWGheWuuScsXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7ZGVsZXRlU2VjdGlvbn07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgZ2V0U2VjdGlvbkNvbnRlbnQgPSBhc3luYyAodGl0bGU6IHN0cmluZywgc2VjdGlvbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHRpdGxlczogdGl0bGUsXG5cdFx0cnZzZWN0aW9uOiBzZWN0aW9uLFxuXHR9O1xuXG5cdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cblx0cmV0dXJuIHF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5jb250ZW50ID8/IG51bGw7XG59O1xuXG5leHBvcnQge2dldFNlY3Rpb25Db250ZW50fTtcbiIsICJpbXBvcnQge2FyY2hpdmVTZWN0aW9ufSBmcm9tICcuL2FyY2hpdmVTZWN0aW9uJztcbmltcG9ydCB7Y2hlY2tJZlNlY3Rpb25FeGlzdH0gZnJvbSAnLi9jaGVja0lmU2VjdGlvbkV4aXN0JztcbmltcG9ydCB7ZGVsZXRlU2VjdGlvbn0gZnJvbSAnLi9kZWxldGVTZWN0aW9uJztcbmltcG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9IGZyb20gJy4vZ2V0U2VjdGlvbkNvbnRlbnQnO1xuXG5jb25zdCBhcmNoaXZlID0gYXN5bmMgKGluZGV4OiBzdHJpbmcsIGFuY2hvcjogc3RyaW5nLCBhcmNoaXZlVG86IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlmU2VjdGlvbkV4aXN0ID0gYXdhaXQgY2hlY2tJZlNlY3Rpb25FeGlzdChpbmRleCwgYW5jaG9yKTtcblxuXHRpZiAoaWZTZWN0aW9uRXhpc3QgIT09IHRydWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0U2VjdGlvbkNvbnRlbnQod2dQYWdlTmFtZSwgaW5kZXgpO1xuXG5cdGlmIChjb250ZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXdhaXQgYXJjaGl2ZVNlY3Rpb24oYXJjaGl2ZVRvLCBjb250ZW50KTtcblx0YXdhaXQgZGVsZXRlU2VjdGlvbih3Z1BhZ2VOYW1lLCBpbmRleCwgJ+WtmOaho+WGheWuuScpO1xufTtcblxuZXhwb3J0IHthcmNoaXZlfTtcbiIsICJpbXBvcnQge2NoZWNrSWZTZWN0aW9uRXhpc3R9IGZyb20gJy4vY2hlY2tJZlNlY3Rpb25FeGlzdCc7XG5pbXBvcnQge2RlbGV0ZVNlY3Rpb259IGZyb20gJy4vZGVsZXRlU2VjdGlvbic7XG5pbXBvcnQge2dldFNlY3Rpb25Db250ZW50fSBmcm9tICcuL2dldFNlY3Rpb25Db250ZW50JztcblxuY29uc3QgcmVtb3ZlID0gYXN5bmMgKGluZGV4OiBzdHJpbmcsIGFuY2hvcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaWZTZWN0aW9uRXhpc3QgPSBhd2FpdCBjaGVja0lmU2VjdGlvbkV4aXN0KGluZGV4LCBhbmNob3IpO1xuXG5cdGlmIChpZlNlY3Rpb25FeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh3Z1BhZ2VOYW1lLCBpbmRleCk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCBkZWxldGVTZWN0aW9uKHdnUGFnZU5hbWUsIGluZGV4KTtcbn07XG5cbmV4cG9ydCB7cmVtb3ZlfTtcbiIsICJpbXBvcnQge2VtcHR5RWxlbWVudCwgb25DbGlja1dyYXAsIHBpcGVFbGVtZW50LCBzZWN0aW9uSWRTcGFuRWxlbWVudH0gZnJvbSAnLi9yZWFjdCc7XG5pbXBvcnQge2FyY2hpdmV9IGZyb20gJy4vYXJjaGl2ZSc7XG5pbXBvcnQge2dldFNlY3Rpb25zfSBmcm9tICcuL3BhcnNlJztcbmltcG9ydCB7cmVtb3ZlfSBmcm9tICcuL3JlbW92ZSc7XG5cbmNvbnN0IGFkZExpbmtzID0gYXN5bmMgKHtcblx0YXJjTGV2ZWwsXG5cdGFyY0xvYyxcblx0c2VjQXJjLFxuXHRzZWNEZWwsXG59OiB7XG5cdGFyY0xldmVsOiBzdHJpbmc7XG5cdGFyY0xvYzogc3RyaW5nO1xuXHRzZWNBcmM6IHN0cmluZztcblx0c2VjRGVsOiBzdHJpbmc7XG59KSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRjb25zdCBoZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGgke2FyY0xldmVsfWApO1xuXHRjb25zdCBoZWFkbGluZXMgPSBbXTtcblx0Y29uc3QgaGVhZGluZ0luZGljZXMgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGhlYWRpbmcgb2YgaGVhZGluZ3MpIHtcblx0XHRjb25zdCBoZWFkbGluZSA9IGhlYWRpbmcucXVlcnlTZWxlY3RvcignLm13LWhlYWRsaW5lJyk7XG5cdFx0aGVhZGxpbmVzW2hlYWRsaW5lcy5sZW5ndGhdID0gaGVhZGxpbmU/LmlkO1xuXHR9XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zVG9BcmNoaXZlKSB7XG5cdFx0aWYgKHNlY3Rpb24ubGV2ZWwgIT09IGFyY0xldmVsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoaGVhZGxpbmVzLmluY2x1ZGVzKHNlY3Rpb24uYW5jaG9yKSkge1xuXHRcdFx0aGVhZGluZ0luZGljZXNbaGVhZGluZ0luZGljZXMubGVuZ3RoXSA9IHtcblx0XHRcdFx0aW5kZXg6IHNlY3Rpb24uaW5kZXgsXG5cdFx0XHRcdGlkOiBzZWN0aW9uLmFuY2hvcixcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCB7aW5kZXgsIGlkfSBvZiBoZWFkaW5nSW5kaWNlcykge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1xdWVyeS1zZWxlY3RvclxuXHRcdGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdFx0aWYgKCFoZWFkaW5nKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBlZGl0U2VjdGlvblNwYW4gPSBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdGlmICghZWRpdFNlY3Rpb25TcGFuKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBzZWN0aW9uSWRTcGFuID0gc2VjdGlvbklkU3BhbkVsZW1lbnQoKTtcblx0XHRzZWN0aW9uSWRTcGFuLmFwcGVuZChcblx0XHRcdHNlY0FyYyA9PT0gJzEnXG5cdFx0XHRcdD8gb25DbGlja1dyYXAoJ+WtmOahoycsICgpID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgYXJjaGl2ZShpbmRleCwgaWQsIGFyY0xvYyk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0OiBlbXB0eUVsZW1lbnQoKSxcblx0XHRcdHNlY0FyYyA9PT0gJzEnICYmIHNlY0RlbCA9PT0gJzEnID8gcGlwZUVsZW1lbnQoKSA6IGVtcHR5RWxlbWVudCgpLFxuXHRcdFx0c2VjRGVsID09PSAnMSdcblx0XHRcdFx0PyBvbkNsaWNrV3JhcCgn5Yig6ZmkJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCByZW1vdmUoaW5kZXgsIGlkKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQ6IGVtcHR5RWxlbWVudCgpXG5cdFx0KTtcblx0XHRlZGl0U2VjdGlvblNwYW4uYXBwZW5kKHNlY3Rpb25JZFNwYW4pO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZExpbmtzfTtcbiIsICJjb25zdCBnZXRTZXR0aW5ncyA9ICgpID0+IHtcblx0Y29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWFzeV9hcmNoaXZlX2RhdGFfcG9pbnRfY29sbGVjdGlvbicpIGFzIEhUTUxFbGVtZW50O1xuXHRpZiAoIXNldHRpbmdzKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCB7ZGF0YXNldH0gPSBzZXR0aW5ncztcblx0Y29uc3Qge2FyY0xldmVsLCBhcmNMb2MsIHNlY0FyYywgc2VjRGVsfSA9IGRhdGFzZXQ7XG5cdHJldHVybiB7XG5cdFx0YXJjTGV2ZWw6IGFyY0xldmVsID8/ICcyJyxcblx0XHRhcmNMb2M6IGFyY0xvYyA/PyBudWxsLFxuXHRcdHNlY0FyYzogc2VjQXJjID8/ICcxJyxcblx0XHRzZWNEZWw6IHNlY0RlbCA/PyAnMScsXG5cdH07XG59O1xuXG5leHBvcnQge2dldFNldHRpbmdzfTtcbiIsICJjb25zdCBpc0luQmxhY2tsaXN0ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnSXNNYWluUGFnZSwgd2dQYWdlTmFtZSwgd2dSZWxldmFudFVzZXJOYW1lLCB3Z1VzZXJOYW1lLCB3Z0N1clJldmlzaW9uSWQsIHdnUmV2aXNpb25JZH0gPVxuXHRcdG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgYmxhY2tMaXN0UmVnZXhBcnIgPSBbXG5cdFx0L15GaWxlOi4qJC8sXG5cdFx0L15NZWRpYVdpa2k6LiokLyxcblx0XHQvXk1vZHVsZTouKiQvLFxuXHRcdC9eQ2F0ZWdvcnk6LiokLyxcblx0XHQvXlRlbXBsYXRlOi4qJC8sXG5cdFx0L15TcGVjaWFsOi4qJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanMkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5jc3MkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qc29uJC8sXG5cdF07XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCB8fCB3Z0lzTWFpblBhZ2UpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCB8fCB3Z0N1clJldmlzaW9uSWQgLSB3Z1JldmlzaW9uSWQgIT09IDApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMyAmJiAhKHdnUmVsZXZhbnRVc2VyTmFtZSA9PT0gd2dVc2VyTmFtZSkpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja0xpc3RSZWdleEFycikge1xuXHRcdGlmIChlbGVtZW50LnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7aXNJbkJsYWNrbGlzdH07XG4iLCAiaW1wb3J0ICcuL0Vhc3lBcmNoaXZlLU5ldy5sZXNzJztcbmltcG9ydCB7YWRkTGlua3N9IGZyb20gJy4vbW9kdWxlcy9hZGRMaW5rcyc7XG5pbXBvcnQge2dldFNldHRpbmdzfSBmcm9tICcuL21vZHVsZXMvc2V0dGluZ3MnO1xuaW1wb3J0IHtpc0luQmxhY2tsaXN0fSBmcm9tICcuL21vZHVsZXMvaXNJbkJsYWNrTGlzdCc7XG5cbihmdW5jdGlvbiBlYXN5QXJjaGl2ZSgpIHtcblx0Y29uc3QgaW5CbGFja2xpc3QgPSBpc0luQmxhY2tsaXN0KCk7XG5cdGlmIChpbkJsYWNrbGlzdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3MoKTtcblx0aWYgKCFzZXR0aW5ncykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0gPSBzZXR0aW5ncztcblx0aWYgKCFhcmNMb2MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGFkZExpbmtzKHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQWtDQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTtBQWlCbEMsSUFBTUMsZUFBZUEsTUFBTUgsa0NBQUFJLFFBQUFDLGNBQUFMLGtCQUFBSSxRQUFBRSxVQUFBLElBQUU7QUFJN0IsSUFBTUMsY0FBY0EsQ0FBQ0MsYUFBcUJDLFNBQXFCQyxZQUFxQkMsZ0JBQ25GWCxrQ0FBQUksUUFBQUMsY0FB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QUNwRSxXQUFPO0VBQ1I7QUFFQSxNQUFJTCxzQkFBc0IsS0FBSyxFQUFFRSx1QkFBdUJDLGFBQWE7QUFDcEUsV0FBTztFQUNSO0FBRUEsV0FBQUksTUFBQSxHQUFBQyxxQkFBc0JGLG1CQUFBQyxNQUFBQyxtQkFBQS9FLFFBQUE4RSxPQUFtQjtBQUF6QyxVQUFXRSxVQUFBRCxtQkFBQUQsR0FBQTtBQUNWLFFBQUlFLFFBQVFDLEtBQUsxRSxVQUFVLEdBQUc7QUFDN0IsYUFBTztJQUNSO0VBQ0Q7QUFFQSxTQUFPO0FBQ1I7O0NDN0JDLFNBQVMyRSxjQUFjO0FBQ3ZCLFFBQU1DLGNBQWNiLGNBQWM7QUFDbEMsTUFBSWEsYUFBYTtBQUNoQjtFQUNEO0FBRUEsUUFBTWYsV0FBV0QsWUFBWTtBQUM3QixNQUFJLENBQUNDLFVBQVU7QUFDZDtFQUNEO0FBRUEsUUFBTTtJQUFDMUI7SUFBVUM7SUFBUUM7SUFBUUM7RUFBTSxJQUFJdUI7QUFDM0MsTUFBSSxDQUFDekIsUUFBUTtBQUNaO0VBQ0Q7QUFFQSxPQUFLSCxTQUFTO0lBQUNFO0lBQVVDO0lBQVFDO0lBQVFDO0VBQU0sQ0FBQztBQUNqRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiZW1wdHlFbGVtZW50IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJvbkNsaWNrV3JhcCIsICJ0ZXh0Q29udGVudCIsICJvbkNsaWNrIiwgImRhdGFBY3R1YWwiLCAiZGF0YU5vbWluYWwiLCAiY2xhc3MiLCAiY29uY2F0IiwgImhyZWYiLCAicGlwZUVsZW1lbnQiLCAic2VjdGlvbklkU3BhbkVsZW1lbnQiLCAic3R5bGUiLCAiZGlzcGxheSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNoZWNrSWZQYWdlRXhpc3QiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJhcmNoaXZlVG8iLCAiX3BhZ2VzJCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgInBhZ2VzIiwgImdldCIsICJtaXNzaW5nIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJhcmNoaXZlU2VjdGlvbiIsICJfcmVmMiIsICJ0ZXh0IiwgInBhZ2VFeGlzdCIsICJjcmVhdGUiLCAic3VtbWFyeSIsICJtaW5vciIsICJlZGl0IiwgImFwcGVuZHRleHQiLCAiX3gyIiwgIl94MyIsICJnZXRTZWN0aW9ucyIsICJfcmVmMyIsICJ0aXRsZSIsICJwYWdlIiwgInBhcnNlIiwgInNlY3Rpb25zIiwgInNlY3Rpb25zVG9BcmNoaXZlIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInNlY3Rpb24iLCAidmFsdWUiLCAibGV2ZWwiLCAiaW5kZXgiLCAiYW5jaG9yIiwgInN0YXJ0c1dpdGgiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiX3g0IiwgImNoZWNrSWZTZWN0aW9uRXhpc3QiLCAiX3JlZjQiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiaWZTZWN0aW9uRXhpc3QiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiX3g1IiwgIl94NiIsICJkZWxldGVTZWN0aW9uIiwgIl9yZWY1IiwgIl94NyIsICJfeDgiLCAiX3g5IiwgImdldFNlY3Rpb25Db250ZW50IiwgIl9yZWY2IiwgIl9xdWVyeSRwYWdlcyQwJHJldmlzaSIsICJydnByb3AiLCAicnZzZWN0aW9uIiwgInF1ZXJ5IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgInJldmlzaW9ucyIsICJjb250ZW50IiwgIl94MTAiLCAiX3gxMSIsICJhcmNoaXZlIiwgIl9yZWY3IiwgIl94MTIiLCAiX3gxMyIsICJfeDE0IiwgInJlbW92ZSIsICJfcmVmOCIsICJfeDE1IiwgIl94MTYiLCAiYWRkTGlua3MiLCAiX3JlZjkiLCAiYXJjTGV2ZWwiLCAiYXJjTG9jIiwgInNlY0FyYyIsICJzZWNEZWwiLCAiaGVhZGluZ3MiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJoZWFkbGluZXMiLCAiaGVhZGluZ0luZGljZXMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiaGVhZGluZyIsICJoZWFkbGluZSIsICJxdWVyeVNlbGVjdG9yIiwgImlkIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImluY2x1ZGVzIiwgIl9pIiwgIl9oZWFkaW5nSW5kaWNlcyIsICJnZXRFbGVtZW50QnlJZCIsICJlZGl0U2VjdGlvblNwYW4iLCAic2VjdGlvbklkU3BhbiIsICJhcHBlbmQiLCAiX3gxNyIsICJnZXRTZXR0aW5ncyIsICJzZXR0aW5ncyIsICJkYXRhc2V0IiwgImlzSW5CbGFja2xpc3QiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dJc01haW5QYWdlIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJ3Z1VzZXJOYW1lIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1JldmlzaW9uSWQiLCAiYmxhY2tMaXN0UmVnZXhBcnIiLCAiX2kyIiwgIl9ibGFja0xpc3RSZWdleEFyciIsICJlbGVtZW50IiwgInRlc3QiLCAiZWFzeUFyY2hpdmUiLCAiaW5CbGFja2xpc3QiXQp9Cg==
