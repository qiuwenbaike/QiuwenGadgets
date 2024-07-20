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
//! src/EasyArchive-New/options.json
var version = "0.1";
//! src/EasyArchive-New/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("EasyAchive/".concat(version));
//! src/EasyArchive-New/modules/checkIfPageExist.ts
var checkIfPageExist = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (archiveTo) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "info",
      titles: archiveTo
    };
    const response = yield api.get(params);
    if (response["pages"][0].missing === true) {
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
//! src/EasyArchive-New/modules/settings.ts
var getSettings = () => {
  const settings = document.querySelector(".easy_archive_data_point_collection");
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
//! src/EasyArchive-New/EasyArchive-New.ts
var main = /* @__PURE__ */ function() {
  var _ref9 = _asyncToGenerator(function* () {
    const {
      arcLevel,
      arcLoc,
      secArc,
      secDel
    } = getSettings();
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
    for (var _i = 0, _headingIndices = headingIndices; _i < _headingIndices.length; _i++) {
      const {
        index,
        id
      } = _headingIndices[_i];
      const heading = document.getElementById(id);
      if (heading) {
        heading.after(secArc === "1" ? onClickWrap("存档", () => {
          void archive(index, id, arcLoc);
        }) : emptyElement(), secArc === "1" && secDel === "1" ? pipeElement() : emptyElement(), secDel === "1" ? onClickWrap("删除", () => {
          void remove(index, id);
        }) : emptyElement());
      }
    }
  });
  return function main2() {
    return _ref9.apply(this, arguments);
  };
}();
void main();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL3JlYWN0LnRzeCIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9jaGVja0lmUGFnZUV4aXN0LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9hcmNoaXZlU2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvcGFyc2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2NoZWNrSWZTZWN0aW9uRXhpc3QudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2RlbGV0ZVNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2dldFNlY3Rpb25Db250ZW50LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9hcmNoaXZlLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9zZXR0aW5ncy50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvcmVtb3ZlLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvRWFzeUFyY2hpdmUtTmV3LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9IChpZDogc3RyaW5nLCBpbm5lckVsZW1lbnQ6IFJlYWN0RWxlbWVudCkgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1sncGFnZS1pbmZvX19pdGVtJ119IGlkPXtpZH0+XG5cdFx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fSBlbHNlIGlmIChbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBpZD17aWR9Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblx0cmV0dXJuIDxkaXYgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvZGl2Pjtcbn07XG5cbmNvbnN0IGVtcHR5RWxlbWVudCA9ICgpID0+IDw+PC8+O1xuXG5jb25zdCBsaW5rV3JhcCA9ICh0ZXh0Q29udGVudDogc3RyaW5nLCBocmVmOiBzdHJpbmcpID0+IDxhIGhyZWY9e2hyZWZ9IHRleHRDb250ZW50PXt0ZXh0Q29udGVudH0gLz47XG5cbmNvbnN0IG9uQ2xpY2tXcmFwID0gKHRleHRDb250ZW50OiBzdHJpbmcsIG9uQ2xpY2s6ICgpID0+IHZvaWQsIGRhdGFBY3R1YWw/OiBzdHJpbmcsIGRhdGFOb21pbmFsPzogc3RyaW5nKSA9PiAoXG5cdDxhXG5cdFx0Y2xhc3M9e1snZWFzeS1hcmNoaXZlLWxpbmsnLCBgZWFzeS1hcmNoaXZlLWxpbmstJHtkYXRhQWN0dWFsfS0ke2RhdGFOb21pbmFsfWBdfVxuXHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdFx0dGV4dENvbnRlbnQ9e3RleHRDb250ZW50fVxuXHRcdGRhdGEtc2VjdGlvbi1pZD17ZGF0YUFjdHVhbH1cblx0XHRocmVmPVwiI1wiXG5cdC8+XG4pO1xuXG5jb25zdCBwaXBlRWxlbWVudCA9ICgpID0+IDxzcGFuIGNsYXNzPVwibXctZWRpdHNlY3Rpb24tZGl2aWRlclwiIHRleHRDb250ZW50PXsnfCd9IC8+O1xuXG5jb25zdCBzZWN0aW9uSWRTcGFuRWxlbWVudCA9IChpZDogc3RyaW5nKSA9PiAoXG5cdDxzcGFuXG5cdFx0Y2xhc3M9e1snZWFzeS1hcmNoaXZlLXNlY3Rpb24taWQtc3BhbicsIGBlYXN5LWFyY2hpdmUtc2VjdGlvbi1pZC1zcGFuLW9yZGVyLSR7aWR9YF19XG5cdFx0c3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fVxuXHQvPlxuKTtcblxuY29uc3Qgc3BhbiA9IChpbm5lckhUTUw6IHN0cmluZykgPT4gPHNwYW4gaW5uZXJIVE1MPXtpbm5lckhUTUx9IC8+O1xuXG5leHBvcnQge2VsZW1lbnRXcmFwLCBlbXB0eUVsZW1lbnQsIGxpbmtXcmFwLCBvbkNsaWNrV3JhcCwgcGlwZUVsZW1lbnQsIHNlY3Rpb25JZFNwYW5FbGVtZW50LCBzcGFufTtcbiIsICJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMC4xXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEVhc3lBY2hpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBjaGVja0lmUGFnZUV4aXN0ID0gYXN5bmMgKGFyY2hpdmVUbzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbmZvUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2luZm8nLFxuXHRcdHRpdGxlczogYXJjaGl2ZVRvLFxuXHR9O1xuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdGlmIChyZXNwb25zZVsncGFnZXMnXVswXS5taXNzaW5nID09PSB0cnVlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IHtjaGVja0lmUGFnZUV4aXN0fTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtjaGVja0lmUGFnZUV4aXN0fSBmcm9tICcuL2NoZWNrSWZQYWdlRXhpc3QnO1xuXG5jb25zdCBhcmNoaXZlU2VjdGlvbiA9IGFzeW5jIChhcmNoaXZlVG86IHN0cmluZywgdGV4dDogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhZ2VFeGlzdCA9IGF3YWl0IGNoZWNrSWZQYWdlRXhpc3QoYXJjaGl2ZVRvKTtcblx0aWYgKCFwYWdlRXhpc3QpIHtcblx0XHRhd2FpdCBhcGkuY3JlYXRlKFxuXHRcdFx0YXJjaGl2ZVRvLFxuXHRcdFx0e1xuXHRcdFx0XHRzdW1tYXJ5OiAn5paw5bu65a2Y5qGj6aG16Z2iJyxcblx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0J3t7dGFsa2FyY2hpdmV9fSdcblx0XHQpO1xuXHR9XG5cdGF3YWl0IGFwaS5lZGl0KGFyY2hpdmVUbywgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcHBlbmR0ZXh0OiB0ZXh0LFxuXHRcdFx0c3VtbWFyeTogJ+WtmOaho+WGheWuuScsXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YXJjaGl2ZVNlY3Rpb259O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGdldFNlY3Rpb25zID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHBhZ2U6IHRpdGxlLFxuXHRcdHByb3A6ICdzZWN0aW9ucycsXG5cdH07XG5cblx0Y29uc3Qge3BhcnNlfSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuXHRjb25zdCB7XG5cdFx0c2VjdGlvbnMsXG5cdH06IHtcblx0XHRzZWN0aW9uczoge1xuXHRcdFx0bGV2ZWw6IHN0cmluZztcblx0XHRcdGluZGV4OiBzdHJpbmc7XG5cdFx0XHRhbmNob3I6IHN0cmluZztcblx0XHR9W107XG5cdH0gPSBwYXJzZTtcblxuXHRjb25zdCBzZWN0aW9uc1RvQXJjaGl2ZSA9IFtdO1xuXG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuXHRcdGNvbnN0IHtsZXZlbCwgaW5kZXgsIGFuY2hvcn0gPSBzZWN0aW9uO1xuXG5cdFx0aWYgKGluZGV4LnN0YXJ0c1dpdGgoJ1QtJykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHNlY3Rpb25zVG9BcmNoaXZlW3NlY3Rpb25zVG9BcmNoaXZlLmxlbmd0aF0gPSB7XG5cdFx0XHRsZXZlbCxcblx0XHRcdGluZGV4LFxuXHRcdFx0YW5jaG9yLFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gc2VjdGlvbnNUb0FyY2hpdmU7XG59O1xuXG5leHBvcnQge2dldFNlY3Rpb25zfTtcbiIsICJpbXBvcnQge2dldFNlY3Rpb25zfSBmcm9tICcuL3BhcnNlJztcblxuY29uc3QgY2hlY2tJZlNlY3Rpb25FeGlzdCA9IGFzeW5jIChpbmRleDogc3RyaW5nLCBhbmNob3I6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25zID0gYXdhaXQgZ2V0U2VjdGlvbnMod2dQYWdlTmFtZSk7XG5cblx0bGV0IGlmU2VjdGlvbkV4aXN0ID0gZmFsc2U7XG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuXHRcdGlmIChpbmRleCA9PT0gc2VjdGlvbi5pbmRleCAmJiBhbmNob3IgPT09IHNlY3Rpb24uYW5jaG9yKSB7XG5cdFx0XHRpZlNlY3Rpb25FeGlzdCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBpZlNlY3Rpb25FeGlzdDtcbn07XG5cbmV4cG9ydCB7Y2hlY2tJZlNlY3Rpb25FeGlzdH07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgZGVsZXRlU2VjdGlvbiA9IGFzeW5jICh0aXRsZTogc3RyaW5nLCBzZWN0aW9uOiBzdHJpbmcsIHN1bW1hcnk/OiBzdHJpbmcpID0+IHtcblx0YXdhaXQgYXBpLmVkaXQodGl0bGUsICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VjdGlvbixcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0c3VtbWFyeTogc3VtbWFyeSA/PyAn5Yig6Zmk5YaF5a65Jyxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xufTtcblxuZXhwb3J0IHtkZWxldGVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9uQ29udGVudCA9IGFzeW5jICh0aXRsZTogc3RyaW5nLCBzZWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRydnNlY3Rpb246IHNlY3Rpb24sXG5cdH07XG5cblx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxuXHRyZXR1cm4gcXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQgPz8gbnVsbDtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9O1xuIiwgImltcG9ydCB7YXJjaGl2ZVNlY3Rpb259IGZyb20gJy4vYXJjaGl2ZVNlY3Rpb24nO1xuaW1wb3J0IHtjaGVja0lmU2VjdGlvbkV4aXN0fSBmcm9tICcuL2NoZWNrSWZTZWN0aW9uRXhpc3QnO1xuaW1wb3J0IHtkZWxldGVTZWN0aW9ufSBmcm9tICcuL2RlbGV0ZVNlY3Rpb24nO1xuaW1wb3J0IHtnZXRTZWN0aW9uQ29udGVudH0gZnJvbSAnLi9nZXRTZWN0aW9uQ29udGVudCc7XG5cbmNvbnN0IGFyY2hpdmUgPSBhc3luYyAoaW5kZXg6IHN0cmluZywgYW5jaG9yOiBzdHJpbmcsIGFyY2hpdmVUbzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaWZTZWN0aW9uRXhpc3QgPSBhd2FpdCBjaGVja0lmU2VjdGlvbkV4aXN0KGluZGV4LCBhbmNob3IpO1xuXG5cdGlmIChpZlNlY3Rpb25FeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh3Z1BhZ2VOYW1lLCBpbmRleCk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCBhcmNoaXZlU2VjdGlvbihhcmNoaXZlVG8sIGNvbnRlbnQpO1xuXHRhd2FpdCBkZWxldGVTZWN0aW9uKHdnUGFnZU5hbWUsIGluZGV4LCAn5a2Y5qGj5YaF5a65Jyk7XG59O1xuXG5leHBvcnQge2FyY2hpdmV9O1xuIiwgImNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cdGNvbnN0IHtkYXRhc2V0fSA9IHNldHRpbmdzO1xuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gZGF0YXNldDtcblx0cmV0dXJuIHtcblx0XHRhcmNMZXZlbDogYXJjTGV2ZWwgPz8gJzInLFxuXHRcdGFyY0xvYzogYXJjTG9jID8/IG51bGwsXG5cdFx0c2VjQXJjOiBzZWNBcmMgPz8gJzEnLFxuXHRcdHNlY0RlbDogc2VjRGVsID8/ICcxJyxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2V0U2V0dGluZ3N9O1xuIiwgImltcG9ydCB7Y2hlY2tJZlNlY3Rpb25FeGlzdH0gZnJvbSAnLi9jaGVja0lmU2VjdGlvbkV4aXN0JztcbmltcG9ydCB7ZGVsZXRlU2VjdGlvbn0gZnJvbSAnLi9kZWxldGVTZWN0aW9uJztcbmltcG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9IGZyb20gJy4vZ2V0U2VjdGlvbkNvbnRlbnQnO1xuXG5jb25zdCByZW1vdmUgPSBhc3luYyAoaW5kZXg6IHN0cmluZywgYW5jaG9yOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpZlNlY3Rpb25FeGlzdCA9IGF3YWl0IGNoZWNrSWZTZWN0aW9uRXhpc3QoaW5kZXgsIGFuY2hvcik7XG5cblx0aWYgKGlmU2VjdGlvbkV4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHdnUGFnZU5hbWUsIGluZGV4KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGF3YWl0IGRlbGV0ZVNlY3Rpb24od2dQYWdlTmFtZSwgaW5kZXgpO1xufTtcblxuZXhwb3J0IHtyZW1vdmV9O1xuIiwgImltcG9ydCB7ZW1wdHlFbGVtZW50LCBvbkNsaWNrV3JhcCwgcGlwZUVsZW1lbnR9IGZyb20gJy4vbW9kdWxlcy9yZWFjdCc7XG5pbXBvcnQge2FyY2hpdmV9IGZyb20gJy4vbW9kdWxlcy9hcmNoaXZlJztcbmltcG9ydCB7Z2V0U2VjdGlvbnN9IGZyb20gJy4vbW9kdWxlcy9wYXJzZSc7XG5pbXBvcnQge2dldFNldHRpbmdzfSBmcm9tICcuL21vZHVsZXMvc2V0dGluZ3MnO1xuaW1wb3J0IHtyZW1vdmV9IGZyb20gJy4vbW9kdWxlcy9yZW1vdmUnO1xuXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gZ2V0U2V0dGluZ3MoKTtcblxuXHRpZiAoIWFyY0xvYykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc2VjdGlvbnNUb0FyY2hpdmUgPSBhd2FpdCBnZXRTZWN0aW9ucyh3Z1BhZ2VOYW1lKTtcblxuXHRjb25zdCBoZWFkaW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGgke2FyY0xldmVsfWApO1xuXHRjb25zdCBoZWFkbGluZXMgPSBbXTtcblx0Y29uc3QgaGVhZGluZ0luZGljZXMgPSBbXTtcblxuXHRmb3IgKGNvbnN0IGhlYWRpbmcgb2YgaGVhZGluZ3MpIHtcblx0XHRjb25zdCBoZWFkbGluZSA9IGhlYWRpbmcucXVlcnlTZWxlY3RvcignLm13LWhlYWRsaW5lJyk7XG5cdFx0aGVhZGxpbmVzW2hlYWRsaW5lcy5sZW5ndGhdID0gaGVhZGxpbmU/LmlkO1xuXHR9XG5cblx0Zm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zVG9BcmNoaXZlKSB7XG5cdFx0aWYgKHNlY3Rpb24ubGV2ZWwgIT09IGFyY0xldmVsKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAoaGVhZGxpbmVzLmluY2x1ZGVzKHNlY3Rpb24uYW5jaG9yKSkge1xuXHRcdFx0aGVhZGluZ0luZGljZXNbaGVhZGluZ0luZGljZXMubGVuZ3RoXSA9IHtcblx0XHRcdFx0aW5kZXg6IHNlY3Rpb24uaW5kZXgsXG5cdFx0XHRcdGlkOiBzZWN0aW9uLmFuY2hvcixcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCB7aW5kZXgsIGlkfSBvZiBoZWFkaW5nSW5kaWNlcykge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1xdWVyeS1zZWxlY3RvclxuXHRcdGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cblx0XHRpZiAoaGVhZGluZykge1xuXHRcdFx0aGVhZGluZy5hZnRlcihcblx0XHRcdFx0c2VjQXJjID09PSAnMSdcblx0XHRcdFx0XHQ/IG9uQ2xpY2tXcmFwKCflrZjmoaMnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHZvaWQgYXJjaGl2ZShpbmRleCwgaWQsIGFyY0xvYyk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdDogZW1wdHlFbGVtZW50KCksXG5cdFx0XHRcdHNlY0FyYyA9PT0gJzEnICYmIHNlY0RlbCA9PT0gJzEnID8gcGlwZUVsZW1lbnQoKSA6IGVtcHR5RWxlbWVudCgpLFxuXHRcdFx0XHRzZWNEZWwgPT09ICcxJ1xuXHRcdFx0XHRcdD8gb25DbGlja1dyYXAoJ+WIoOmZpCcsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0dm9pZCByZW1vdmUoaW5kZXgsIGlkKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0OiBlbXB0eUVsZW1lbnQoKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn07XG5cbnZvaWQgbWFpbigpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFrQ0MsUUFBQUMsUUFBQSxr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QUEwQlYsZ0JBQUFTLEtBQUFDLGdCQUFBakUsUUFBQWdFLE1BQWdCO0FBQTFDLFlBQVc7UUFBQ25FO1FBQU8rRDtNQUFFLElBQUFLLGdCQUFBRCxFQUFBO0FBRXBCLFlBQU1OLFVBQVVuQixTQUFTMkIsZUFBZU4sRUFBRTtBQUUxQyxVQUFJRixTQUFTO0FBQ1pBLGdCQUFRUyxNQUNQdkIsV0FBVyxNQUNSdkcsWUFBWSxNQUFNLE1BQU07QUFDeEIsZUFBSzJGLFFBQVFuQyxPQUFPK0QsSUFBSWpCLE1BQU07UUFDL0IsQ0FBQyxJQUNBMUcsYUFBYSxHQUNoQjJHLFdBQVcsT0FBT0MsV0FBVyxNQUFNaEcsWUFBWSxJQUFJWixhQUFhLEdBQ2hFNEcsV0FBVyxNQUNSeEcsWUFBWSxNQUFNLE1BQU07QUFDeEIsZUFBS3lHLE9BQU9qRCxPQUFPK0QsRUFBRTtRQUN0QixDQUFDLElBQ0EzSCxhQUFhLENBQ2pCO01BQ0Q7SUFDRDtFQUNELENBQUE7QUFBQSxTQUFBLFNBcERNaUgsUUFBQTtBQUFBLFdBQUFDLE1BQUFuRixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFzRE4sS0FBS2lGLEtBQUs7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJlbXB0eUVsZW1lbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgIkZyYWdtZW50IiwgIm9uQ2xpY2tXcmFwIiwgInRleHRDb250ZW50IiwgIm9uQ2xpY2siLCAiZGF0YUFjdHVhbCIsICJkYXRhTm9taW5hbCIsICJjbGFzcyIsICJjb25jYXQiLCAiaHJlZiIsICJwaXBlRWxlbWVudCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNoZWNrSWZQYWdlRXhpc3QiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJhcmNoaXZlVG8iLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlcyIsICJyZXNwb25zZSIsICJnZXQiLCAibWlzc2luZyIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiYXJjaGl2ZVNlY3Rpb24iLCAiX3JlZjIiLCAidGV4dCIsICJwYWdlRXhpc3QiLCAiY3JlYXRlIiwgInN1bW1hcnkiLCAibWlub3IiLCAiZWRpdCIsICJhcHBlbmR0ZXh0IiwgIl94MiIsICJfeDMiLCAiZ2V0U2VjdGlvbnMiLCAiX3JlZjMiLCAidGl0bGUiLCAicGFnZSIsICJwYXJzZSIsICJzZWN0aW9ucyIsICJzZWN0aW9uc1RvQXJjaGl2ZSIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJzZWN0aW9uIiwgInZhbHVlIiwgImxldmVsIiwgImluZGV4IiwgImFuY2hvciIsICJzdGFydHNXaXRoIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgIl94NCIsICJjaGVja0lmU2VjdGlvbkV4aXN0IiwgIl9yZWY0IiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImlmU2VjdGlvbkV4aXN0IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIl94NSIsICJfeDYiLCAiZGVsZXRlU2VjdGlvbiIsICJfcmVmNSIsICJfeDciLCAiX3g4IiwgIl94OSIsICJnZXRTZWN0aW9uQ29udGVudCIsICJfcmVmNiIsICJfcXVlcnkkcGFnZXMkMCRyZXZpc2kiLCAicnZwcm9wIiwgInJ2c2VjdGlvbiIsICJxdWVyeSIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAiY29udGVudCIsICJfeDEwIiwgIl94MTEiLCAiYXJjaGl2ZSIsICJfcmVmNyIsICJfeDEyIiwgIl94MTMiLCAiX3gxNCIsICJnZXRTZXR0aW5ncyIsICJzZXR0aW5ncyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImRhdGFzZXQiLCAiYXJjTGV2ZWwiLCAiYXJjTG9jIiwgInNlY0FyYyIsICJzZWNEZWwiLCAicmVtb3ZlIiwgIl9yZWY4IiwgIl94MTUiLCAiX3gxNiIsICJtYWluIiwgIl9yZWY5IiwgImhlYWRpbmdzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiaGVhZGxpbmVzIiwgImhlYWRpbmdJbmRpY2VzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImhlYWRpbmciLCAiaGVhZGxpbmUiLCAiaWQiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiaW5jbHVkZXMiLCAiX2kiLCAiX2hlYWRpbmdJbmRpY2VzIiwgImdldEVsZW1lbnRCeUlkIiwgImFmdGVyIl0KfQo=
