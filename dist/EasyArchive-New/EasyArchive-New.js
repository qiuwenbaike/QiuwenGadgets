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
        summary: "新建存档页面",
        minor: true
      }, "{{talkarchive}}");
    }
    yield api.edit(archiveTo, () => {
      return {
        appendtext: "\n\n".concat(text),
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
      headline.after(sectionIdSpan);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL3JlYWN0LnRzeCIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9jaGVja0lmUGFnZUV4aXN0LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9hcmNoaXZlU2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvcGFyc2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2NoZWNrSWZTZWN0aW9uRXhpc3QudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2RlbGV0ZVNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2dldFNlY3Rpb25Db250ZW50LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9hcmNoaXZlLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9yZW1vdmUudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2FkZExpbmtzLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9zZXR0aW5ncy50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvaXNJbkJsYWNrTGlzdC50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L0Vhc3lBcmNoaXZlLU5ldy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuY29uc3QgZWxlbWVudFdyYXAgPSAoaWQ6IHN0cmluZywgaW5uZXJFbGVtZW50OiBSZWFjdEVsZW1lbnQpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPXtbJ3BhZ2UtaW5mb19faXRlbSddfSBpZD17aWR9PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvbGk+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGlkPXtpZH0+e2lubmVyRWxlbWVudH08L2Rpdj47XG59O1xuXG5jb25zdCBlbXB0eUVsZW1lbnQgPSAoKSA9PiA8PjwvPjtcblxuY29uc3QgbGlua1dyYXAgPSAodGV4dENvbnRlbnQ6IHN0cmluZywgaHJlZjogc3RyaW5nKSA9PiA8YSBocmVmPXtocmVmfSB0ZXh0Q29udGVudD17dGV4dENvbnRlbnR9IC8+O1xuXG5jb25zdCBvbkNsaWNrV3JhcCA9IChcblx0dGV4dENvbnRlbnQ6IHN0cmluZyxcblx0b25DbGljazogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCxcblx0ZGF0YUFjdHVhbD86IHN0cmluZyxcblx0ZGF0YU5vbWluYWw/OiBzdHJpbmdcbikgPT4gKFxuXHQ8YVxuXHRcdGNsYXNzPXtbJ2Vhc3ktYXJjaGl2ZS1saW5rJywgYGVhc3ktYXJjaGl2ZS1saW5rLSR7ZGF0YUFjdHVhbH0tJHtkYXRhTm9taW5hbH1gXX1cblx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHRcdHRleHRDb250ZW50PXt0ZXh0Q29udGVudH1cblx0XHRkYXRhLXNlY3Rpb24taWQ9e2RhdGFBY3R1YWx9XG5cdFx0aHJlZj1cIiNcIlxuXHQvPlxuKTtcblxuY29uc3QgcGlwZUVsZW1lbnQgPSAoKSA9PiA8c3BhbiBjbGFzcz1cIm13LWVkaXRzZWN0aW9uLWRpdmlkZXJcIiB0ZXh0Q29udGVudD17J3wnfSAvPjtcblxuY29uc3Qgc2VjdGlvbklkU3BhbkVsZW1lbnQgPSAoKSA9PiA8c3BhbiBjbGFzcz17WydlYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuJ119IC8+O1xuXG5jb25zdCBzcGFuID0gKGlubmVySFRNTDogc3RyaW5nKSA9PiA8c3BhbiBpbm5lckhUTUw9e2lubmVySFRNTH0gLz47XG5cbmV4cG9ydCB7ZWxlbWVudFdyYXAsIGVtcHR5RWxlbWVudCwgbGlua1dyYXAsIG9uQ2xpY2tXcmFwLCBwaXBlRWxlbWVudCwgc2VjdGlvbklkU3BhbkVsZW1lbnQsIHNwYW59O1xuIiwgIntcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIwLjFcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgRWFzeUFjaGl2ZS8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGNoZWNrSWZQYWdlRXhpc3QgPSBhc3luYyAoYXJjaGl2ZVRvOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUluZm9QYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW5mbycsXG5cdFx0dGl0bGVzOiBhcmNoaXZlVG8sXG5cdH07XG5cblx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRpZiAocXVlcnkucGFnZXNbMF0/Lm1pc3NpbmcpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQge2NoZWNrSWZQYWdlRXhpc3R9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2NoZWNrSWZQYWdlRXhpc3R9IGZyb20gJy4vY2hlY2tJZlBhZ2VFeGlzdCc7XG5cbmNvbnN0IGFyY2hpdmVTZWN0aW9uID0gYXN5bmMgKGFyY2hpdmVUbzogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFnZUV4aXN0ID0gYXdhaXQgY2hlY2tJZlBhZ2VFeGlzdChhcmNoaXZlVG8pO1xuXHRpZiAoIXBhZ2VFeGlzdCkge1xuXHRcdGF3YWl0IGFwaS5jcmVhdGUoXG5cdFx0XHRhcmNoaXZlVG8sXG5cdFx0XHR7XG5cdFx0XHRcdHN1bW1hcnk6ICfmlrDlu7rlrZjmoaPpobXpnaInLFxuXHRcdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHQne3t0YWxrYXJjaGl2ZX19J1xuXHRcdCk7XG5cdH1cblx0YXdhaXQgYXBpLmVkaXQoYXJjaGl2ZVRvLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFwcGVuZHRleHQ6IGBcXG5cXG4ke3RleHR9YCxcblx0XHRcdHN1bW1hcnk6ICflrZjmoaPlhoXlrrknLFxuXHRcdFx0bWlub3I6IHRydWUsXG5cdFx0fTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FyY2hpdmVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9ucyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwYWdlOiB0aXRsZSxcblx0XHRwcm9wOiAnc2VjdGlvbnMnLFxuXHR9O1xuXG5cdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0Y29uc3Qge1xuXHRcdHNlY3Rpb25zLFxuXHR9OiB7XG5cdFx0c2VjdGlvbnM6IHtcblx0XHRcdGxldmVsOiBzdHJpbmc7XG5cdFx0XHRpbmRleDogc3RyaW5nO1xuXHRcdFx0YW5jaG9yOiBzdHJpbmc7XG5cdFx0fVtdO1xuXHR9ID0gcGFyc2U7XG5cblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBbXTtcblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRjb25zdCB7bGV2ZWwsIGluZGV4LCBhbmNob3J9ID0gc2VjdGlvbjtcblxuXHRcdGlmIChpbmRleC5zdGFydHNXaXRoKCdULScpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRzZWN0aW9uc1RvQXJjaGl2ZVtzZWN0aW9uc1RvQXJjaGl2ZS5sZW5ndGhdID0ge1xuXHRcdFx0bGV2ZWwsXG5cdFx0XHRpbmRleCxcblx0XHRcdGFuY2hvcixcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHNlY3Rpb25zVG9BcmNoaXZlO1xufTtcblxuZXhwb3J0IHtnZXRTZWN0aW9uc307XG4iLCAiaW1wb3J0IHtnZXRTZWN0aW9uc30gZnJvbSAnLi9wYXJzZSc7XG5cbmNvbnN0IGNoZWNrSWZTZWN0aW9uRXhpc3QgPSBhc3luYyAoaW5kZXg6IHN0cmluZywgYW5jaG9yOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9ucyA9IGF3YWl0IGdldFNlY3Rpb25zKHdnUGFnZU5hbWUpO1xuXG5cdGxldCBpZlNlY3Rpb25FeGlzdCA9IGZhbHNlO1xuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnMpIHtcblx0XHRpZiAoaW5kZXggPT09IHNlY3Rpb24uaW5kZXggJiYgYW5jaG9yID09PSBzZWN0aW9uLmFuY2hvcikge1xuXHRcdFx0aWZTZWN0aW9uRXhpc3QgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gaWZTZWN0aW9uRXhpc3Q7XG59O1xuXG5leHBvcnQge2NoZWNrSWZTZWN0aW9uRXhpc3R9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGRlbGV0ZVNlY3Rpb24gPSBhc3luYyAodGl0bGU6IHN0cmluZywgc2VjdGlvbjogc3RyaW5nLCBzdW1tYXJ5Pzogc3RyaW5nKSA9PiB7XG5cdGF3YWl0IGFwaS5lZGl0KHRpdGxlLCAoKSA9PiB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlY3Rpb24sXG5cdFx0XHR0ZXh0OiAnJyxcblx0XHRcdHN1bW1hcnk6IHN1bW1hcnkgPz8gJ+WIoOmZpOWGheWuuScsXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7ZGVsZXRlU2VjdGlvbn07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgZ2V0U2VjdGlvbkNvbnRlbnQgPSBhc3luYyAodGl0bGU6IHN0cmluZywgc2VjdGlvbjogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHRpdGxlczogdGl0bGUsXG5cdFx0cnZzZWN0aW9uOiBzZWN0aW9uLFxuXHR9O1xuXG5cdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1yZXR1cm5cblx0cmV0dXJuIHF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5jb250ZW50ID8/IG51bGw7XG59O1xuXG5leHBvcnQge2dldFNlY3Rpb25Db250ZW50fTtcbiIsICJpbXBvcnQge2FyY2hpdmVTZWN0aW9ufSBmcm9tICcuL2FyY2hpdmVTZWN0aW9uJztcbmltcG9ydCB7Y2hlY2tJZlNlY3Rpb25FeGlzdH0gZnJvbSAnLi9jaGVja0lmU2VjdGlvbkV4aXN0JztcbmltcG9ydCB7ZGVsZXRlU2VjdGlvbn0gZnJvbSAnLi9kZWxldGVTZWN0aW9uJztcbmltcG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9IGZyb20gJy4vZ2V0U2VjdGlvbkNvbnRlbnQnO1xuXG5jb25zdCBhcmNoaXZlID0gYXN5bmMgKGluZGV4OiBzdHJpbmcsIGFuY2hvcjogc3RyaW5nLCBhcmNoaXZlVG86IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlmU2VjdGlvbkV4aXN0ID0gYXdhaXQgY2hlY2tJZlNlY3Rpb25FeGlzdChpbmRleCwgYW5jaG9yKTtcblxuXHRpZiAoaWZTZWN0aW9uRXhpc3QgIT09IHRydWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0U2VjdGlvbkNvbnRlbnQod2dQYWdlTmFtZSwgaW5kZXgpO1xuXG5cdGlmIChjb250ZW50ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXdhaXQgYXJjaGl2ZVNlY3Rpb24oYXJjaGl2ZVRvLCBjb250ZW50KTtcblx0YXdhaXQgZGVsZXRlU2VjdGlvbih3Z1BhZ2VOYW1lLCBpbmRleCwgJ+WtmOaho+WGheWuuScpO1xufTtcblxuZXhwb3J0IHthcmNoaXZlfTtcbiIsICJpbXBvcnQge2NoZWNrSWZTZWN0aW9uRXhpc3R9IGZyb20gJy4vY2hlY2tJZlNlY3Rpb25FeGlzdCc7XG5pbXBvcnQge2RlbGV0ZVNlY3Rpb259IGZyb20gJy4vZGVsZXRlU2VjdGlvbic7XG5pbXBvcnQge2dldFNlY3Rpb25Db250ZW50fSBmcm9tICcuL2dldFNlY3Rpb25Db250ZW50JztcblxuY29uc3QgcmVtb3ZlID0gYXN5bmMgKGluZGV4OiBzdHJpbmcsIGFuY2hvcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaWZTZWN0aW9uRXhpc3QgPSBhd2FpdCBjaGVja0lmU2VjdGlvbkV4aXN0KGluZGV4LCBhbmNob3IpO1xuXG5cdGlmIChpZlNlY3Rpb25FeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh3Z1BhZ2VOYW1lLCBpbmRleCk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCBkZWxldGVTZWN0aW9uKHdnUGFnZU5hbWUsIGluZGV4KTtcbn07XG5cbmV4cG9ydCB7cmVtb3ZlfTtcbiIsICJpbXBvcnQge29uQ2xpY2tXcmFwLCBwaXBlRWxlbWVudCwgc2VjdGlvbklkU3BhbkVsZW1lbnR9IGZyb20gJy4vcmVhY3QnO1xuaW1wb3J0IHthcmNoaXZlfSBmcm9tICcuL2FyY2hpdmUnO1xuaW1wb3J0IHtnZXRTZWN0aW9uc30gZnJvbSAnLi9wYXJzZSc7XG5pbXBvcnQge3JlbW92ZX0gZnJvbSAnLi9yZW1vdmUnO1xuXG5jb25zdCBhZGRMaW5rcyA9IGFzeW5jICh7XG5cdGFyY0xldmVsLFxuXHRhcmNMb2MsXG5cdHNlY0FyYyxcblx0c2VjRGVsLFxufToge1xuXHRhcmNMZXZlbDogc3RyaW5nO1xuXHRhcmNMb2M6IHN0cmluZztcblx0c2VjQXJjOiBzdHJpbmc7XG5cdHNlY0RlbDogc3RyaW5nO1xufSkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25zVG9BcmNoaXZlID0gYXdhaXQgZ2V0U2VjdGlvbnMod2dQYWdlTmFtZSk7XG5cblx0Y29uc3QgaGVhZGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBoJHthcmNMZXZlbH1gKTtcblx0Y29uc3QgaGVhZGxpbmVzID0gW107XG5cdGNvbnN0IGhlYWRpbmdJbmRpY2VzID0gW107XG5cblx0Zm9yIChjb25zdCBoZWFkaW5nIG9mIGhlYWRpbmdzKSB7XG5cdFx0Y29uc3QgaGVhZGxpbmUgPSBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5tdy1oZWFkbGluZScpO1xuXHRcdGhlYWRsaW5lc1toZWFkbGluZXMubGVuZ3RoXSA9IGhlYWRsaW5lPy5pZDtcblx0fVxuXG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9uc1RvQXJjaGl2ZSkge1xuXHRcdGlmIChzZWN0aW9uLmxldmVsICE9PSBhcmNMZXZlbCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGhlYWRsaW5lcy5pbmNsdWRlcyhzZWN0aW9uLmFuY2hvcikpIHtcblx0XHRcdGhlYWRpbmdJbmRpY2VzW2hlYWRpbmdJbmRpY2VzLmxlbmd0aF0gPSB7XG5cdFx0XHRcdGluZGV4OiBzZWN0aW9uLmluZGV4LFxuXHRcdFx0XHRpZDogc2VjdGlvbi5hbmNob3IsXG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdGZvciAoY29uc3Qge2luZGV4LCBpZH0gb2YgaGVhZGluZ0luZGljZXMpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItcXVlcnktc2VsZWN0b3Jcblx0XHRjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0XHRpZiAoIWhlYWRsaW5lKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBzZWN0aW9uSWRTcGFuID0gc2VjdGlvbklkU3BhbkVsZW1lbnQoKTtcblx0XHRpZiAoc2VjQXJjID09PSAnMScpIHtcblx0XHRcdHNlY3Rpb25JZFNwYW4uYXBwZW5kKFxuXHRcdFx0XHRvbkNsaWNrV3JhcCgn5a2Y5qGjJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR2b2lkIGFyY2hpdmUoaW5kZXgsIGlkLCBhcmNMb2MpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoc2VjQXJjID09PSAnMScgJiYgc2VjRGVsID09PSAnMScpIHtcblx0XHRcdHNlY3Rpb25JZFNwYW4uYXBwZW5kKHBpcGVFbGVtZW50KCkpO1xuXHRcdH1cblx0XHRpZiAoc2VjRGVsID09PSAnMScpIHtcblx0XHRcdHNlY3Rpb25JZFNwYW4uYXBwZW5kKFxuXHRcdFx0XHRvbkNsaWNrV3JhcCgn5Yig6ZmkJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR2b2lkIHJlbW92ZShpbmRleCwgaWQpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRoZWFkbGluZS5hZnRlcihzZWN0aW9uSWRTcGFuKTtcblx0fVxufTtcblxuZXhwb3J0IHthZGRMaW5rc307XG4iLCAiY29uc3QgZ2V0U2V0dGluZ3MgPSAoKSA9PiB7XG5cdGNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVhc3lfYXJjaGl2ZV9kYXRhX3BvaW50X2NvbGxlY3Rpb24nKSBhcyBIVE1MRWxlbWVudDtcblx0aWYgKCFzZXR0aW5ncykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3Qge2RhdGFzZXR9ID0gc2V0dGluZ3M7XG5cdGNvbnN0IHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0gPSBkYXRhc2V0O1xuXHRyZXR1cm4ge1xuXHRcdGFyY0xldmVsOiBhcmNMZXZlbCA/PyAnMicsXG5cdFx0YXJjTG9jOiBhcmNMb2MgPz8gbnVsbCxcblx0XHRzZWNBcmM6IHNlY0FyYyA/PyAnMScsXG5cdFx0c2VjRGVsOiBzZWNEZWwgPz8gJzEnLFxuXHR9O1xufTtcblxuZXhwb3J0IHtnZXRTZXR0aW5nc307XG4iLCAiY29uc3QgaXNJbkJsYWNrbGlzdCA9ICgpID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z0lzTWFpblBhZ2UsIHdnUGFnZU5hbWUsIHdnUmVsZXZhbnRVc2VyTmFtZSwgd2dVc2VyTmFtZSwgd2dDdXJSZXZpc2lvbklkLCB3Z1JldmlzaW9uSWR9ID1cblx0XHRtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGJsYWNrTGlzdFJlZ2V4QXJyID0gW1xuXHRcdC9eRmlsZTouKiQvLFxuXHRcdC9eTWVkaWFXaWtpOi4qJC8sXG5cdFx0L15Nb2R1bGU6LiokLyxcblx0XHQvXkNhdGVnb3J5Oi4qJC8sXG5cdFx0L15UZW1wbGF0ZTouKiQvLFxuXHRcdC9eU3BlY2lhbDouKiQvLFxuXHRcdC9eVXNlcjouKlxcLz8uKlxcLmpzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuY3NzJC8sXG5cdFx0L15Vc2VyOi4qXFwvPy4qXFwuanNvbiQvLFxuXHRdO1xuXG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDAgfHwgd2dJc01haW5QYWdlKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDAgfHwgd2dDdXJSZXZpc2lvbklkIC0gd2dSZXZpc2lvbklkICE9PSAwKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDMgJiYgISh3Z1JlbGV2YW50VXNlck5hbWUgPT09IHdnVXNlck5hbWUpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmxhY2tMaXN0UmVnZXhBcnIpIHtcblx0XHRpZiAoZWxlbWVudC50ZXN0KHdnUGFnZU5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQge2lzSW5CbGFja2xpc3R9O1xuIiwgImltcG9ydCAnLi9FYXN5QXJjaGl2ZS1OZXcubGVzcyc7XG5pbXBvcnQge2FkZExpbmtzfSBmcm9tICcuL21vZHVsZXMvYWRkTGlua3MnO1xuaW1wb3J0IHtnZXRTZXR0aW5nc30gZnJvbSAnLi9tb2R1bGVzL3NldHRpbmdzJztcbmltcG9ydCB7aXNJbkJsYWNrbGlzdH0gZnJvbSAnLi9tb2R1bGVzL2lzSW5CbGFja0xpc3QnO1xuXG4oZnVuY3Rpb24gZWFzeUFyY2hpdmUoKSB7XG5cdGNvbnN0IGluQmxhY2tsaXN0ID0gaXNJbkJsYWNrbGlzdCgpO1xuXHRpZiAoaW5CbGFja2xpc3QpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzKCk7XG5cdGlmICghc2V0dGluZ3MpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gc2V0dGluZ3M7XG5cdGlmICghYXJjTG9jKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBhZGRMaW5rcyh7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9KTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFrQ0MsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7QUFxQmxDLElBQU1DLGNBQWNBLENBQ25CQyxhQUNBQyxTQUNBQyxZQUNB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LGVBQ0EsaUJBQ0EsaUJBQ0EsZ0JBQ0Esc0JBQ0EsdUJBQ0Esc0JBQUE7QUFHRCxNQUFJTixvQkFBb0IsS0FBS0MsY0FBYztBQUMxQyxXQUFPO0VBQ1I7QUFFQSxNQUFJRCxzQkFBc0IsS0FBS0ksa0JBQWtCQyxpQkFBaUIsR0FBRztBQUNwRSxXQUFPO0VBQ1I7QUFFQSxNQUFJTCxzQkFBc0IsS0FBSyxFQUFFRSx1QkFBdUJDLGFBQWE7QUFDcEUsV0FBTztFQUNSO0FBRUEsV0FBQUksTUFBQSxHQUFBQyxxQkFBc0JGLG1CQUFBQyxNQUFBQyxtQkFBQW5GLFFBQUFrRixPQUFtQjtBQUF6QyxVQUFXRSxVQUFBRCxtQkFBQUQsR0FBQTtBQUNWLFFBQUlFLFFBQVFDLEtBQUs5RSxVQUFVLEdBQUc7QUFDN0IsYUFBTztJQUNSO0VBQ0Q7QUFFQSxTQUFPO0FBQ1I7O0NDN0JDLFNBQVMrRSxjQUFjO0FBQ3ZCLFFBQU1DLGNBQWNiLGNBQWM7QUFDbEMsTUFBSWEsYUFBYTtBQUNoQjtFQUNEO0FBRUEsUUFBTWYsV0FBV0QsWUFBWTtBQUM3QixNQUFJLENBQUNDLFVBQVU7QUFDZDtFQUNEO0FBRUEsUUFBTTtJQUFDL0I7SUFBVUM7SUFBUUM7SUFBUUM7RUFBTSxJQUFJNEI7QUFDM0MsTUFBSSxDQUFDOUIsUUFBUTtBQUNaO0VBQ0Q7QUFFQSxPQUFLSCxTQUFTO0lBQUNFO0lBQVVDO0lBQVFDO0lBQVFDO0VBQU0sQ0FBQztBQUNqRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAib25DbGlja1dyYXAiLCAidGV4dENvbnRlbnQiLCAib25DbGljayIsICJkYXRhQWN0dWFsIiwgImRhdGFOb21pbmFsIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzcyIsICJjb25jYXQiLCAiaHJlZiIsICJwaXBlRWxlbWVudCIsICJzZWN0aW9uSWRTcGFuRWxlbWVudCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNoZWNrSWZQYWdlRXhpc3QiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJhcmNoaXZlVG8iLCAiX3F1ZXJ5JHBhZ2VzJCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgInF1ZXJ5IiwgImdldCIsICJwYWdlcyIsICJtaXNzaW5nIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJhcmNoaXZlU2VjdGlvbiIsICJfcmVmMiIsICJ0ZXh0IiwgInBhZ2VFeGlzdCIsICJjcmVhdGUiLCAic3VtbWFyeSIsICJtaW5vciIsICJlZGl0IiwgImFwcGVuZHRleHQiLCAiX3gyIiwgIl94MyIsICJnZXRTZWN0aW9ucyIsICJfcmVmMyIsICJ0aXRsZSIsICJwYWdlIiwgInBhcnNlIiwgInNlY3Rpb25zIiwgInNlY3Rpb25zVG9BcmNoaXZlIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInNlY3Rpb24iLCAidmFsdWUiLCAibGV2ZWwiLCAiaW5kZXgiLCAiYW5jaG9yIiwgInN0YXJ0c1dpdGgiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiX3g0IiwgImNoZWNrSWZTZWN0aW9uRXhpc3QiLCAiX3JlZjQiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiaWZTZWN0aW9uRXhpc3QiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiX3g1IiwgIl94NiIsICJkZWxldGVTZWN0aW9uIiwgIl9yZWY1IiwgIl94NyIsICJfeDgiLCAiX3g5IiwgImdldFNlY3Rpb25Db250ZW50IiwgIl9yZWY2IiwgIl9xdWVyeSRwYWdlcyQwJHJldmlzaSIsICJydnByb3AiLCAicnZzZWN0aW9uIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgInJldmlzaW9ucyIsICJjb250ZW50IiwgIl94MTAiLCAiX3gxMSIsICJhcmNoaXZlIiwgIl9yZWY3IiwgIl94MTIiLCAiX3gxMyIsICJfeDE0IiwgInJlbW92ZSIsICJfcmVmOCIsICJfeDE1IiwgIl94MTYiLCAiYWRkTGlua3MiLCAiX3JlZjkiLCAiYXJjTGV2ZWwiLCAiYXJjTG9jIiwgInNlY0FyYyIsICJzZWNEZWwiLCAiaGVhZGluZ3MiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJoZWFkbGluZXMiLCAiaGVhZGluZ0luZGljZXMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiaGVhZGluZyIsICJoZWFkbGluZSIsICJxdWVyeVNlbGVjdG9yIiwgImlkIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImluY2x1ZGVzIiwgIl9pIiwgIl9oZWFkaW5nSW5kaWNlcyIsICJnZXRFbGVtZW50QnlJZCIsICJzZWN0aW9uSWRTcGFuIiwgImFwcGVuZCIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJ0aGVuIiwgImxvY2F0aW9uIiwgInJlbG9hZCIsICJhZnRlciIsICJfeDE3IiwgImdldFNldHRpbmdzIiwgInNldHRpbmdzIiwgImRhdGFzZXQiLCAiaXNJbkJsYWNrbGlzdCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z0lzTWFpblBhZ2UiLCAid2dSZWxldmFudFVzZXJOYW1lIiwgIndnVXNlck5hbWUiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJibGFja0xpc3RSZWdleEFyciIsICJfaTIiLCAiX2JsYWNrTGlzdFJlZ2V4QXJyIiwgImVsZW1lbnQiLCAidGVzdCIsICJlYXN5QXJjaGl2ZSIsICJpbkJsYWNrbGlzdCJdCn0K
