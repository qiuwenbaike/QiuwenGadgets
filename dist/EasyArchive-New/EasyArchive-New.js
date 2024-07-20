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
      const headline = document.getElementById(id);
      if (!headline) {
        continue;
      }
      const heading = headline.parentElement;
      if (!heading) {
        continue;
      }
      const editSectionSpan = heading.querySelector(".mw-editsection");
      if (!editSectionSpan) {
        continue;
      }
      const sectionIdSpan = sectionIdSpanElement();
      if (secArc === "1") {
        sectionIdSpan.append(onClickWrap("存档", (event) => {
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
        sectionIdSpan.append(onClickWrap("删除", (event) => {
          event.preventDefault();
          void remove(index, id).then(() => {
            location.reload();
          });
        }));
      }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL3JlYWN0LnRzeCIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9jaGVja0lmUGFnZUV4aXN0LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9hcmNoaXZlU2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvcGFyc2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2NoZWNrSWZTZWN0aW9uRXhpc3QudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2RlbGV0ZVNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2dldFNlY3Rpb25Db250ZW50LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9hcmNoaXZlLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9yZW1vdmUudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2FkZExpbmtzLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9zZXR0aW5ncy50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvaXNJbkJsYWNrTGlzdC50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L0Vhc3lBcmNoaXZlLU5ldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuY29uc3QgZWxlbWVudFdyYXAgPSAoaWQ6IHN0cmluZywgaW5uZXJFbGVtZW50OiBSZWFjdEVsZW1lbnQpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtbJ3BhZ2UtaW5mb19faXRlbSddfSBpZD17aWR9PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvbGk+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGlkPXtpZH0+e2lubmVyRWxlbWVudH08L2Rpdj47XG59O1xuXG5jb25zdCBlbXB0eUVsZW1lbnQgPSAoKSA9PiA8PjwvPjtcblxuY29uc3QgbGlua1dyYXAgPSAodGV4dENvbnRlbnQ6IHN0cmluZywgaHJlZjogc3RyaW5nKSA9PiA8YSBocmVmPXtocmVmfSB0ZXh0Q29udGVudD17dGV4dENvbnRlbnR9IC8+O1xuXG5jb25zdCBvbkNsaWNrV3JhcCA9IChcblx0dGV4dENvbnRlbnQ6IHN0cmluZyxcblx0b25DbGljazogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCxcblx0ZGF0YUFjdHVhbD86IHN0cmluZyxcblx0ZGF0YU5vbWluYWw/OiBzdHJpbmdcbikgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzPXtbJ2Vhc3ktYXJjaGl2ZS1saW5rJywgYGVhc3ktYXJjaGl2ZS1saW5rLSR7ZGF0YUFjdHVhbH0tJHtkYXRhTm9taW5hbH1gXX1cblx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHRcdHRleHRDb250ZW50PXt0ZXh0Q29udGVudH1cblx0XHRkYXRhLXNlY3Rpb24taWQ9e2RhdGFBY3R1YWx9XG5cdFx0aHJlZj1cIiNcIlxuXHQvPlxuKTtcblxuY29uc3QgcGlwZUVsZW1lbnQgPSAoKSA9PiA8c3BhbiBjbGFzcz1cIm13LWVkaXRzZWN0aW9uLWRpdmlkZXJcIiB0ZXh0Q29udGVudD17J3wnfSAvPjtcblxuY29uc3Qgc2VjdGlvbklkU3BhbkVsZW1lbnQgPSAoKSA9PiA8c3BhbiBjbGFzcz17WydlYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuJ119IC8+O1xuXG5jb25zdCBzcGFuID0gKGlubmVySFRNTDogc3RyaW5nKSA9PiA8c3BhbiBpbm5lckhUTUw9e2lubmVySFRNTH0gLz47XG5cbmV4cG9ydCB7ZWxlbWVudFdyYXAsIGVtcHR5RWxlbWVudCwgbGlua1dyYXAsIG9uQ2xpY2tXcmFwLCBwaXBlRWxlbWVudCwgc2VjdGlvbklkU3BhbkVsZW1lbnQsIHNwYW59O1xuIiwgIntcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIwLjFcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgRWFzeUFjaGl2ZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGNoZWNrSWZQYWdlRXhpc3QgPSBhc3luYyAoYXJjaGl2ZVRvOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW5mbycsXG5cdFx0dGl0bGVzOiBhcmNoaXZlVG8sXG5cdH07XG5cblx0Y29uc3Qge3BhZ2VzfSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRpZiAocGFnZXNbMF0/Lm1pc3NpbmcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQge2NoZWNrSWZQYWdlRXhpc3R9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2NoZWNrSWZQYWdlRXhpc3R9IGZyb20gJy4vY2hlY2tJZlBhZ2VFeGlzdCc7XG5cbmNvbnN0IGFyY2hpdmVTZWN0aW9uID0gYXN5bmMgKGFyY2hpdmVUbzogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFnZUV4aXN0ID0gYXdhaXQgY2hlY2tJZlBhZ2VFeGlzdChhcmNoaXZlVG8pO1xuXHRpZiAoIXBhZ2VFeGlzdCkge1xuXHRcdGF3YWl0IGFwaS5jcmVhdGUoXG5cdFx0XHRhcmNoaXZlVG8sXG5cdFx0XHR7XG5cdFx0XHRcdHN1bW1hcnk6ICfmlrDlu7rlrZjmoaPpobXpnaInLFxuXHRcdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHQne3t0YWxrYXJjaGl2ZX19J1xuXHRcdCk7XG5cdH1cblx0YXdhaXQgYXBpLmVkaXQoYXJjaGl2ZVRvLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFwcGVuZHRleHQ6IHRleHQsXG5cdFx0XHRzdW1tYXJ5OiAn5a2Y5qGj5YaF5a65Jyxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xufTtcblxuZXhwb3J0IHthcmNoaXZlU2VjdGlvbn07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgZ2V0U2VjdGlvbnMgPSBhc3luYyAodGl0bGU6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cGFnZTogdGl0bGUsXG5cdFx0cHJvcDogJ3NlY3Rpb25zJyxcblx0fTtcblxuXHRjb25zdCB7cGFyc2V9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdGNvbnN0IHtcblx0XHRzZWN0aW9ucyxcblx0fToge1xuXHRcdHNlY3Rpb25zOiB7XG5cdFx0XHRsZXZlbDogc3RyaW5nO1xuXHRcdFx0aW5kZXg6IHN0cmluZztcblx0XHRcdGFuY2hvcjogc3RyaW5nO1xuXHRcdH1bXTtcblx0fSA9IHBhcnNlO1xuXG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gW107XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0Y29uc3Qge2xldmVsLCBpbmRleCwgYW5jaG9yfSA9IHNlY3Rpb247XG5cblx0XHRpZiAoaW5kZXguc3RhcnRzV2l0aCgnVC0nKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0c2VjdGlvbnNUb0FyY2hpdmVbc2VjdGlvbnNUb0FyY2hpdmUubGVuZ3RoXSA9IHtcblx0XHRcdGxldmVsLFxuXHRcdFx0aW5kZXgsXG5cdFx0XHRhbmNob3IsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBzZWN0aW9uc1RvQXJjaGl2ZTtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbnN9O1xuIiwgImltcG9ydCB7Z2V0U2VjdGlvbnN9IGZyb20gJy4vcGFyc2UnO1xuXG5jb25zdCBjaGVja0lmU2VjdGlvbkV4aXN0ID0gYXN5bmMgKGluZGV4OiBzdHJpbmcsIGFuY2hvcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnMgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRsZXQgaWZTZWN0aW9uRXhpc3QgPSBmYWxzZTtcblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG5cdFx0aWYgKGluZGV4ID09PSBzZWN0aW9uLmluZGV4ICYmIGFuY2hvciA9PT0gc2VjdGlvbi5hbmNob3IpIHtcblx0XHRcdGlmU2VjdGlvbkV4aXN0ID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGlmU2VjdGlvbkV4aXN0O1xufTtcblxuZXhwb3J0IHtjaGVja0lmU2VjdGlvbkV4aXN0fTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBkZWxldGVTZWN0aW9uID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcsIHNlY3Rpb246IHN0cmluZywgc3VtbWFyeT86IHN0cmluZykgPT4ge1xuXHRhd2FpdCBhcGkuZWRpdCh0aXRsZSwgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZWN0aW9uLFxuXHRcdFx0dGV4dDogJycsXG5cdFx0XHRzdW1tYXJ5OiBzdW1tYXJ5ID8/ICfliKDpmaTlhoXlrrknLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG59O1xuXG5leHBvcnQge2RlbGV0ZVNlY3Rpb259O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGdldFNlY3Rpb25Db250ZW50ID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcsIHNlY3Rpb246IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRwcm9wOiBbJ3JldmlzaW9ucyddLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdHJ2c2VjdGlvbjogc2VjdGlvbixcblx0fTtcblxuXHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG5cdHJldHVybiBxdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uY29udGVudCA/PyBudWxsO1xufTtcblxuZXhwb3J0IHtnZXRTZWN0aW9uQ29udGVudH07XG4iLCAiaW1wb3J0IHthcmNoaXZlU2VjdGlvbn0gZnJvbSAnLi9hcmNoaXZlU2VjdGlvbic7XG5pbXBvcnQge2NoZWNrSWZTZWN0aW9uRXhpc3R9IGZyb20gJy4vY2hlY2tJZlNlY3Rpb25FeGlzdCc7XG5pbXBvcnQge2RlbGV0ZVNlY3Rpb259IGZyb20gJy4vZGVsZXRlU2VjdGlvbic7XG5pbXBvcnQge2dldFNlY3Rpb25Db250ZW50fSBmcm9tICcuL2dldFNlY3Rpb25Db250ZW50JztcblxuY29uc3QgYXJjaGl2ZSA9IGFzeW5jIChpbmRleDogc3RyaW5nLCBhbmNob3I6IHN0cmluZywgYXJjaGl2ZVRvOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpZlNlY3Rpb25FeGlzdCA9IGF3YWl0IGNoZWNrSWZTZWN0aW9uRXhpc3QoaW5kZXgsIGFuY2hvcik7XG5cblx0aWYgKGlmU2VjdGlvbkV4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHdnUGFnZU5hbWUsIGluZGV4KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGF3YWl0IGFyY2hpdmVTZWN0aW9uKGFyY2hpdmVUbywgY29udGVudCk7XG5cdGF3YWl0IGRlbGV0ZVNlY3Rpb24od2dQYWdlTmFtZSwgaW5kZXgsICflrZjmoaPlhoXlrrknKTtcbn07XG5cbmV4cG9ydCB7YXJjaGl2ZX07XG4iLCAiaW1wb3J0IHtjaGVja0lmU2VjdGlvbkV4aXN0fSBmcm9tICcuL2NoZWNrSWZTZWN0aW9uRXhpc3QnO1xuaW1wb3J0IHtkZWxldGVTZWN0aW9ufSBmcm9tICcuL2RlbGV0ZVNlY3Rpb24nO1xuaW1wb3J0IHtnZXRTZWN0aW9uQ29udGVudH0gZnJvbSAnLi9nZXRTZWN0aW9uQ29udGVudCc7XG5cbmNvbnN0IHJlbW92ZSA9IGFzeW5jIChpbmRleDogc3RyaW5nLCBhbmNob3I6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlmU2VjdGlvbkV4aXN0ID0gYXdhaXQgY2hlY2tJZlNlY3Rpb25FeGlzdChpbmRleCwgYW5jaG9yKTtcblxuXHRpZiAoaWZTZWN0aW9uRXhpc3QgIT09IHRydWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0U2VjdGlvbkNvbnRlbnQod2dQYWdlTmFtZSwgaW5kZXgpO1xuXG5cdGlmIChjb250ZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXdhaXQgZGVsZXRlU2VjdGlvbih3Z1BhZ2VOYW1lLCBpbmRleCk7XG59O1xuXG5leHBvcnQge3JlbW92ZX07XG4iLCAiaW1wb3J0IHtvbkNsaWNrV3JhcCwgcGlwZUVsZW1lbnQsIHNlY3Rpb25JZFNwYW5FbGVtZW50fSBmcm9tICcuL3JlYWN0JztcbmltcG9ydCB7YXJjaGl2ZX0gZnJvbSAnLi9hcmNoaXZlJztcbmltcG9ydCB7Z2V0U2VjdGlvbnN9IGZyb20gJy4vcGFyc2UnO1xuaW1wb3J0IHtyZW1vdmV9IGZyb20gJy4vcmVtb3ZlJztcblxuY29uc3QgYWRkTGlua3MgPSBhc3luYyAoe1xuXHRhcmNMZXZlbCxcblx0YXJjTG9jLFxuXHRzZWNBcmMsXG5cdHNlY0RlbCxcbn06IHtcblx0YXJjTGV2ZWw6IHN0cmluZztcblx0YXJjTG9jOiBzdHJpbmc7XG5cdHNlY0FyYzogc3RyaW5nO1xuXHRzZWNEZWw6IHN0cmluZztcbn0pID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9uc1RvQXJjaGl2ZSA9IGF3YWl0IGdldFNlY3Rpb25zKHdnUGFnZU5hbWUpO1xuXG5cdGNvbnN0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaCR7YXJjTGV2ZWx9YCk7XG5cdGNvbnN0IGhlYWRsaW5lcyA9IFtdO1xuXHRjb25zdCBoZWFkaW5nSW5kaWNlcyA9IFtdO1xuXG5cdGZvciAoY29uc3QgaGVhZGluZyBvZiBoZWFkaW5ncykge1xuXHRcdGNvbnN0IGhlYWRsaW5lID0gaGVhZGluZy5xdWVyeVNlbGVjdG9yKCcubXctaGVhZGxpbmUnKTtcblx0XHRoZWFkbGluZXNbaGVhZGxpbmVzLmxlbmd0aF0gPSBoZWFkbGluZT8uaWQ7XG5cdH1cblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnNUb0FyY2hpdmUpIHtcblx0XHRpZiAoc2VjdGlvbi5sZXZlbCAhPT0gYXJjTGV2ZWwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChoZWFkbGluZXMuaW5jbHVkZXMoc2VjdGlvbi5hbmNob3IpKSB7XG5cdFx0XHRoZWFkaW5nSW5kaWNlc1toZWFkaW5nSW5kaWNlcy5sZW5ndGhdID0ge1xuXHRcdFx0XHRpbmRleDogc2VjdGlvbi5pbmRleCxcblx0XHRcdFx0aWQ6IHNlY3Rpb24uYW5jaG9yLFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRmb3IgKGNvbnN0IHtpbmRleCwgaWR9IG9mIGhlYWRpbmdJbmRpY2VzKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXF1ZXJ5LXNlbGVjdG9yXG5cdFx0Y29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdFx0aWYgKCFoZWFkbGluZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGVhZGluZyA9IGhlYWRsaW5lLnBhcmVudEVsZW1lbnQ7XG5cdFx0aWYgKCFoZWFkaW5nKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBlZGl0U2VjdGlvblNwYW4gPSBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1lZGl0c2VjdGlvbicpO1xuXHRcdGlmICghZWRpdFNlY3Rpb25TcGFuKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBzZWN0aW9uSWRTcGFuID0gc2VjdGlvbklkU3BhbkVsZW1lbnQoKTtcblx0XHRpZiAoc2VjQXJjID09PSAnMScpIHtcblx0XHRcdHNlY3Rpb25JZFNwYW4uYXBwZW5kKFxuXHRcdFx0XHRvbkNsaWNrV3JhcCgn5a2Y5qGjJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR2b2lkIGFyY2hpdmUoaW5kZXgsIGlkLCBhcmNMb2MpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoc2VjQXJjID09PSAnMScgJiYgc2VjRGVsID09PSAnMScpIHtcblx0XHRcdHNlY3Rpb25JZFNwYW4uYXBwZW5kKHBpcGVFbGVtZW50KCkpO1xuXHRcdH1cblx0XHRpZiAoc2VjRGVsID09PSAnMScpIHtcblx0XHRcdHNlY3Rpb25JZFNwYW4uYXBwZW5kKFxuXHRcdFx0XHRvbkNsaWNrV3JhcCgn5Yig6ZmkJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR2b2lkIHJlbW92ZShpbmRleCwgaWQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRlZGl0U2VjdGlvblNwYW4uYXBwZW5kKHNlY3Rpb25JZFNwYW4pO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZExpbmtzfTtcbiIsICJjb25zdCBnZXRTZXR0aW5ncyA9ICgpID0+IHtcblx0Y29uc3Qgc2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWFzeV9hcmNoaXZlX2RhdGFfcG9pbnRfY29sbGVjdGlvbicpIGFzIEhUTUxFbGVtZW50O1xuXHRpZiAoIXNldHRpbmdzKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRjb25zdCB7ZGF0YXNldH0gPSBzZXR0aW5ncztcblx0Y29uc3Qge2FyY0xldmVsLCBhcmNMb2MsIHNlY0FyYywgc2VjRGVsfSA9IGRhdGFzZXQ7XG5cdHJldHVybiB7XG5cdFx0YXJjTGV2ZWw6IGFyY0xldmVsID8/ICcyJyxcblx0XHRhcmNMb2M6IGFyY0xvYyA/PyBudWxsLFxuXHRcdHNlY0FyYzogc2VjQXJjID8/ICcxJyxcblx0XHRzZWNEZWw6IHNlY0RlbCA/PyAnMScsXG5cdH07XG59O1xuXG5leHBvcnQge2dldFNldHRpbmdzfTtcbiIsICJjb25zdCBpc0luQmxhY2tsaXN0ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnSXNNYWluUGFnZSwgd2dQYWdlTmFtZSwgd2dSZWxldmFudFVzZXJOYW1lLCB3Z1VzZXJOYW1lLCB3Z0N1clJldmlzaW9uSWQsIHdnUmV2aXNpb25JZH0gPVxuXHRcdG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgYmxhY2tMaXN0UmVnZXhBcnIgPSBbXG5cdFx0L15GaWxlOi4qJC8sXG5cdFx0L15NZWRpYVdpa2k6LiokLyxcblx0XHQvXk1vZHVsZTouKiQvLFxuXHRcdC9eQ2F0ZWdvcnk6LiokLyxcblx0XHQvXlRlbXBsYXRlOi4qJC8sXG5cdFx0L15TcGVjaWFsOi4qJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanMkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5jc3MkLyxcblx0XHQvXlVzZXI6LipcXC8/LipcXC5qc29uJC8sXG5cdF07XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCB8fCB3Z0lzTWFpblBhZ2UpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCB8fCB3Z0N1clJldmlzaW9uSWQgLSB3Z1JldmlzaW9uSWQgIT09IDApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMyAmJiAhKHdnUmVsZXZhbnRVc2VyTmFtZSA9PT0gd2dVc2VyTmFtZSkpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiBibGFja0xpc3RSZWdleEFycikge1xuXHRcdGlmIChlbGVtZW50LnRlc3Qod2dQYWdlTmFtZSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7aXNJbkJsYWNrbGlzdH07XG4iLCAiaW1wb3J0ICcuL0Vhc3lBcmNoaXZlLU5ldy5sZXNzJztcbmltcG9ydCB7YWRkTGlua3N9IGZyb20gJy4vbW9kdWxlcy9hZGRMaW5rcyc7XG5pbXBvcnQge2dldFNldHRpbmdzfSBmcm9tICcuL21vZHVsZXMvc2V0dGluZ3MnO1xuaW1wb3J0IHtpc0luQmxhY2tsaXN0fSBmcm9tICcuL21vZHVsZXMvaXNJbkJsYWNrTGlzdCc7XG5cbihmdW5jdGlvbiBlYXN5QXJjaGl2ZSgpIHtcblx0Y29uc3QgaW5CbGFja2xpc3QgPSBpc0luQmxhY2tsaXN0KCk7XG5cdGlmIChpbkJsYWNrbGlzdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3MoKTtcblx0aWYgKCFzZXR0aW5ncykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0gPSBzZXR0aW5ncztcblx0aWYgKCFhcmNMb2MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIGFkZExpbmtzKHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7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QUNFO0lBQVVDO0lBQVFDO0lBQVFDO0VBQU0sQ0FBQztBQUNqRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAib25DbGlja1dyYXAiLCAidGV4dENvbnRlbnQiLCAib25DbGljayIsICJkYXRhQWN0dWFsIiwgImRhdGFOb21pbmFsIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzcyIsICJjb25jYXQiLCAiaHJlZiIsICJwaXBlRWxlbWVudCIsICJzZWN0aW9uSWRTcGFuRWxlbWVudCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNoZWNrSWZQYWdlRXhpc3QiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJhcmNoaXZlVG8iLCAiX3BhZ2VzJCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgInBhZ2VzIiwgImdldCIsICJtaXNzaW5nIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJhcmNoaXZlU2VjdGlvbiIsICJfcmVmMiIsICJ0ZXh0IiwgInBhZ2VFeGlzdCIsICJjcmVhdGUiLCAic3VtbWFyeSIsICJtaW5vciIsICJlZGl0IiwgImFwcGVuZHRleHQiLCAiX3gyIiwgIl94MyIsICJnZXRTZWN0aW9ucyIsICJfcmVmMyIsICJ0aXRsZSIsICJwYWdlIiwgInBhcnNlIiwgInNlY3Rpb25zIiwgInNlY3Rpb25zVG9BcmNoaXZlIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInNlY3Rpb24iLCAidmFsdWUiLCAibGV2ZWwiLCAiaW5kZXgiLCAiYW5jaG9yIiwgInN0YXJ0c1dpdGgiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiX3g0IiwgImNoZWNrSWZTZWN0aW9uRXhpc3QiLCAiX3JlZjQiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiaWZTZWN0aW9uRXhpc3QiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiX3g1IiwgIl94NiIsICJkZWxldGVTZWN0aW9uIiwgIl9yZWY1IiwgIl94NyIsICJfeDgiLCAiX3g5IiwgImdldFNlY3Rpb25Db250ZW50IiwgIl9yZWY2IiwgIl9xdWVyeSRwYWdlcyQwJHJldmlzaSIsICJydnByb3AiLCAicnZzZWN0aW9uIiwgInF1ZXJ5IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgInJldmlzaW9ucyIsICJjb250ZW50IiwgIl94MTAiLCAiX3gxMSIsICJhcmNoaXZlIiwgIl9yZWY3IiwgIl94MTIiLCAiX3gxMyIsICJfeDE0IiwgInJlbW92ZSIsICJfcmVmOCIsICJfeDE1IiwgIl94MTYiLCAiYWRkTGlua3MiLCAiX3JlZjkiLCAiYXJjTGV2ZWwiLCAiYXJjTG9jIiwgInNlY0FyYyIsICJzZWNEZWwiLCAiaGVhZGluZ3MiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJoZWFkbGluZXMiLCAiaGVhZGluZ0luZGljZXMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiaGVhZGluZyIsICJoZWFkbGluZSIsICJxdWVyeVNlbGVjdG9yIiwgImlkIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImluY2x1ZGVzIiwgIl9pIiwgIl9oZWFkaW5nSW5kaWNlcyIsICJnZXRFbGVtZW50QnlJZCIsICJwYXJlbnRFbGVtZW50IiwgImVkaXRTZWN0aW9uU3BhbiIsICJzZWN0aW9uSWRTcGFuIiwgImFwcGVuZCIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJ0aGVuIiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJfeDE3IiwgImdldFNldHRpbmdzIiwgInNldHRpbmdzIiwgImRhdGFzZXQiLCAiaXNJbkJsYWNrbGlzdCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z0lzTWFpblBhZ2UiLCAid2dSZWxldmFudFVzZXJOYW1lIiwgIndnVXNlck5hbWUiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJibGFja0xpc3RSZWdleEFyciIsICJfaTIiLCAiX2JsYWNrTGlzdFJlZ2V4QXJyIiwgImVsZW1lbnQiLCAidGVzdCIsICJlYXN5QXJjaGl2ZSIsICJpbkJsYWNrbGlzdCJdCn0K
