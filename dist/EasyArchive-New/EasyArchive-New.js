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
        const sectionIdSpan = sectionIdSpanElement();
        sectionIdSpan.append(secArc === "1" ? onClickWrap("存档", () => {
          void archive(index, id, arcLoc);
        }) : emptyElement(), secArc === "1" && secDel === "1" ? pipeElement() : emptyElement(), secDel === "1" ? onClickWrap("删除", () => {
          void remove(index, id);
        }) : emptyElement());
        heading.after(sectionIdSpan);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL3JlYWN0LnRzeCIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L29wdGlvbnMuanNvbiIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvYXBpLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9jaGVja0lmUGFnZUV4aXN0LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9hcmNoaXZlU2VjdGlvbi50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvcGFyc2UudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2NoZWNrSWZTZWN0aW9uRXhpc3QudHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2RlbGV0ZVNlY3Rpb24udHMiLCAic3JjL0Vhc3lBcmNoaXZlLU5ldy9tb2R1bGVzL2dldFNlY3Rpb25Db250ZW50LnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9hcmNoaXZlLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvbW9kdWxlcy9zZXR0aW5ncy50cyIsICJzcmMvRWFzeUFyY2hpdmUtTmV3L21vZHVsZXMvcmVtb3ZlLnRzIiwgInNyYy9FYXN5QXJjaGl2ZS1OZXcvRWFzeUFyY2hpdmUtTmV3LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9IChpZDogc3RyaW5nLCBpbm5lckVsZW1lbnQ6IFJlYWN0RWxlbWVudCkgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e1sncGFnZS1pbmZvX19pdGVtJ119IGlkPXtpZH0+XG5cdFx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fSBlbHNlIGlmIChbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBpZD17aWR9Pntpbm5lckVsZW1lbnR9PC9saT47XG5cdH1cblx0cmV0dXJuIDxkaXYgaWQ9e2lkfT57aW5uZXJFbGVtZW50fTwvZGl2Pjtcbn07XG5cbmNvbnN0IGVtcHR5RWxlbWVudCA9ICgpID0+IDw+PC8+O1xuXG5jb25zdCBsaW5rV3JhcCA9ICh0ZXh0Q29udGVudDogc3RyaW5nLCBocmVmOiBzdHJpbmcpID0+IDxhIGhyZWY9e2hyZWZ9IHRleHRDb250ZW50PXt0ZXh0Q29udGVudH0gLz47XG5cbmNvbnN0IG9uQ2xpY2tXcmFwID0gKHRleHRDb250ZW50OiBzdHJpbmcsIG9uQ2xpY2s6ICgpID0+IHZvaWQsIGRhdGFBY3R1YWw/OiBzdHJpbmcsIGRhdGFOb21pbmFsPzogc3RyaW5nKSA9PiAoXG5cdDxhXG5cdFx0Y2xhc3M9e1snZWFzeS1hcmNoaXZlLWxpbmsnLCBgZWFzeS1hcmNoaXZlLWxpbmstJHtkYXRhQWN0dWFsfS0ke2RhdGFOb21pbmFsfWBdfVxuXHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdFx0dGV4dENvbnRlbnQ9e3RleHRDb250ZW50fVxuXHRcdGRhdGEtc2VjdGlvbi1pZD17ZGF0YUFjdHVhbH1cblx0XHRocmVmPVwiI1wiXG5cdC8+XG4pO1xuXG5jb25zdCBwaXBlRWxlbWVudCA9ICgpID0+IDxzcGFuIGNsYXNzPVwibXctZWRpdHNlY3Rpb24tZGl2aWRlclwiIHRleHRDb250ZW50PXsnfCd9IC8+O1xuXG5jb25zdCBzZWN0aW9uSWRTcGFuRWxlbWVudCA9ICgpID0+IDxzcGFuIGNsYXNzPXtbJ2Vhc3ktYXJjaGl2ZS1zZWN0aW9uLWlkLXNwYW4nXX0gc3R5bGU9e3tkaXNwbGF5OiAnbm9uZSd9fSAvPjtcblxuY29uc3Qgc3BhbiA9IChpbm5lckhUTUw6IHN0cmluZykgPT4gPHNwYW4gaW5uZXJIVE1MPXtpbm5lckhUTUx9IC8+O1xuXG5leHBvcnQge2VsZW1lbnRXcmFwLCBlbXB0eUVsZW1lbnQsIGxpbmtXcmFwLCBvbkNsaWNrV3JhcCwgcGlwZUVsZW1lbnQsIHNlY3Rpb25JZFNwYW5FbGVtZW50LCBzcGFufTtcbiIsICJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMC4xXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEVhc3lBY2hpdmUvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBjaGVja0lmUGFnZUV4aXN0ID0gYXN5bmMgKGFyY2hpdmVUbzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlJbmZvUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2luZm8nLFxuXHRcdHRpdGxlczogYXJjaGl2ZVRvLFxuXHR9O1xuXG5cdGNvbnN0IHtwYWdlc30gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0aWYgKHBhZ2VzWzBdPy5taXNzaW5nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IHtjaGVja0lmUGFnZUV4aXN0fTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtjaGVja0lmUGFnZUV4aXN0fSBmcm9tICcuL2NoZWNrSWZQYWdlRXhpc3QnO1xuXG5jb25zdCBhcmNoaXZlU2VjdGlvbiA9IGFzeW5jIChhcmNoaXZlVG86IHN0cmluZywgdGV4dDogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhZ2VFeGlzdCA9IGF3YWl0IGNoZWNrSWZQYWdlRXhpc3QoYXJjaGl2ZVRvKTtcblx0aWYgKCFwYWdlRXhpc3QpIHtcblx0XHRhd2FpdCBhcGkuY3JlYXRlKFxuXHRcdFx0YXJjaGl2ZVRvLFxuXHRcdFx0e1xuXHRcdFx0XHRzdW1tYXJ5OiAn5paw5bu65a2Y5qGj6aG16Z2iJyxcblx0XHRcdFx0bWlub3I6IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0J3t7dGFsa2FyY2hpdmV9fSdcblx0XHQpO1xuXHR9XG5cdGF3YWl0IGFwaS5lZGl0KGFyY2hpdmVUbywgKCkgPT4ge1xuXHRcdHJldHVybiB7XG5cdFx0XHRhcHBlbmR0ZXh0OiB0ZXh0LFxuXHRcdFx0c3VtbWFyeTogJ+WtmOaho+WGheWuuScsXG5cdFx0XHRtaW5vcjogdHJ1ZSxcblx0XHR9O1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YXJjaGl2ZVNlY3Rpb259O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGdldFNlY3Rpb25zID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHBhZ2U6IHRpdGxlLFxuXHRcdHByb3A6ICdzZWN0aW9ucycsXG5cdH07XG5cblx0Y29uc3Qge3BhcnNlfSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuXHRjb25zdCB7XG5cdFx0c2VjdGlvbnMsXG5cdH06IHtcblx0XHRzZWN0aW9uczoge1xuXHRcdFx0bGV2ZWw6IHN0cmluZztcblx0XHRcdGluZGV4OiBzdHJpbmc7XG5cdFx0XHRhbmNob3I6IHN0cmluZztcblx0XHR9W107XG5cdH0gPSBwYXJzZTtcblxuXHRjb25zdCBzZWN0aW9uc1RvQXJjaGl2ZSA9IFtdO1xuXG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuXHRcdGNvbnN0IHtsZXZlbCwgaW5kZXgsIGFuY2hvcn0gPSBzZWN0aW9uO1xuXG5cdFx0aWYgKGluZGV4LnN0YXJ0c1dpdGgoJ1QtJykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHNlY3Rpb25zVG9BcmNoaXZlW3NlY3Rpb25zVG9BcmNoaXZlLmxlbmd0aF0gPSB7XG5cdFx0XHRsZXZlbCxcblx0XHRcdGluZGV4LFxuXHRcdFx0YW5jaG9yLFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gc2VjdGlvbnNUb0FyY2hpdmU7XG59O1xuXG5leHBvcnQge2dldFNlY3Rpb25zfTtcbiIsICJpbXBvcnQge2dldFNlY3Rpb25zfSBmcm9tICcuL3BhcnNlJztcblxuY29uc3QgY2hlY2tJZlNlY3Rpb25FeGlzdCA9IGFzeW5jIChpbmRleDogc3RyaW5nLCBhbmNob3I6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlY3Rpb25zID0gYXdhaXQgZ2V0U2VjdGlvbnMod2dQYWdlTmFtZSk7XG5cblx0bGV0IGlmU2VjdGlvbkV4aXN0ID0gZmFsc2U7XG5cdGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuXHRcdGlmIChpbmRleCA9PT0gc2VjdGlvbi5pbmRleCAmJiBhbmNob3IgPT09IHNlY3Rpb24uYW5jaG9yKSB7XG5cdFx0XHRpZlNlY3Rpb25FeGlzdCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBpZlNlY3Rpb25FeGlzdDtcbn07XG5cbmV4cG9ydCB7Y2hlY2tJZlNlY3Rpb25FeGlzdH07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgZGVsZXRlU2VjdGlvbiA9IGFzeW5jICh0aXRsZTogc3RyaW5nLCBzZWN0aW9uOiBzdHJpbmcsIHN1bW1hcnk/OiBzdHJpbmcpID0+IHtcblx0YXdhaXQgYXBpLmVkaXQodGl0bGUsICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VjdGlvbixcblx0XHRcdHRleHQ6ICcnLFxuXHRcdFx0c3VtbWFyeTogc3VtbWFyeSA/PyAn5Yig6Zmk5YaF5a65Jyxcblx0XHRcdG1pbm9yOiB0cnVlLFxuXHRcdH07XG5cdH0pO1xufTtcblxuZXhwb3J0IHtkZWxldGVTZWN0aW9ufTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBnZXRTZWN0aW9uQ29udGVudCA9IGFzeW5jICh0aXRsZTogc3RyaW5nLCBzZWN0aW9uOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+ID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRydnNlY3Rpb246IHNlY3Rpb24sXG5cdH07XG5cblx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxuXHRyZXR1cm4gcXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQgPz8gbnVsbDtcbn07XG5cbmV4cG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9O1xuIiwgImltcG9ydCB7YXJjaGl2ZVNlY3Rpb259IGZyb20gJy4vYXJjaGl2ZVNlY3Rpb24nO1xuaW1wb3J0IHtjaGVja0lmU2VjdGlvbkV4aXN0fSBmcm9tICcuL2NoZWNrSWZTZWN0aW9uRXhpc3QnO1xuaW1wb3J0IHtkZWxldGVTZWN0aW9ufSBmcm9tICcuL2RlbGV0ZVNlY3Rpb24nO1xuaW1wb3J0IHtnZXRTZWN0aW9uQ29udGVudH0gZnJvbSAnLi9nZXRTZWN0aW9uQ29udGVudCc7XG5cbmNvbnN0IGFyY2hpdmUgPSBhc3luYyAoaW5kZXg6IHN0cmluZywgYW5jaG9yOiBzdHJpbmcsIGFyY2hpdmVUbzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgaWZTZWN0aW9uRXhpc3QgPSBhd2FpdCBjaGVja0lmU2VjdGlvbkV4aXN0KGluZGV4LCBhbmNob3IpO1xuXG5cdGlmIChpZlNlY3Rpb25FeGlzdCAhPT0gdHJ1ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRTZWN0aW9uQ29udGVudCh3Z1BhZ2VOYW1lLCBpbmRleCk7XG5cblx0aWYgKGNvbnRlbnQgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCBhcmNoaXZlU2VjdGlvbihhcmNoaXZlVG8sIGNvbnRlbnQpO1xuXHRhd2FpdCBkZWxldGVTZWN0aW9uKHdnUGFnZU5hbWUsIGluZGV4LCAn5a2Y5qGj5YaF5a65Jyk7XG59O1xuXG5leHBvcnQge2FyY2hpdmV9O1xuIiwgImNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xuXHRjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lYXN5X2FyY2hpdmVfZGF0YV9wb2ludF9jb2xsZWN0aW9uJykgYXMgSFRNTEVsZW1lbnQ7XG5cdGNvbnN0IHtkYXRhc2V0fSA9IHNldHRpbmdzO1xuXHRjb25zdCB7YXJjTGV2ZWwsIGFyY0xvYywgc2VjQXJjLCBzZWNEZWx9ID0gZGF0YXNldDtcblx0cmV0dXJuIHtcblx0XHRhcmNMZXZlbDogYXJjTGV2ZWwgPz8gJzInLFxuXHRcdGFyY0xvYzogYXJjTG9jID8/IG51bGwsXG5cdFx0c2VjQXJjOiBzZWNBcmMgPz8gJzEnLFxuXHRcdHNlY0RlbDogc2VjRGVsID8/ICcxJyxcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2V0U2V0dGluZ3N9O1xuIiwgImltcG9ydCB7Y2hlY2tJZlNlY3Rpb25FeGlzdH0gZnJvbSAnLi9jaGVja0lmU2VjdGlvbkV4aXN0JztcbmltcG9ydCB7ZGVsZXRlU2VjdGlvbn0gZnJvbSAnLi9kZWxldGVTZWN0aW9uJztcbmltcG9ydCB7Z2V0U2VjdGlvbkNvbnRlbnR9IGZyb20gJy4vZ2V0U2VjdGlvbkNvbnRlbnQnO1xuXG5jb25zdCByZW1vdmUgPSBhc3luYyAoaW5kZXg6IHN0cmluZywgYW5jaG9yOiBzdHJpbmcpID0+IHtcblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpZlNlY3Rpb25FeGlzdCA9IGF3YWl0IGNoZWNrSWZTZWN0aW9uRXhpc3QoaW5kZXgsIGFuY2hvcik7XG5cblx0aWYgKGlmU2VjdGlvbkV4aXN0ICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udGVudCA9IGF3YWl0IGdldFNlY3Rpb25Db250ZW50KHdnUGFnZU5hbWUsIGluZGV4KTtcblxuXHRpZiAoY29udGVudCA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGF3YWl0IGRlbGV0ZVNlY3Rpb24od2dQYWdlTmFtZSwgaW5kZXgpO1xufTtcblxuZXhwb3J0IHtyZW1vdmV9O1xuIiwgImltcG9ydCAnLi9FYXN5QXJjaGl2ZS1OZXcubGVzcyc7XG5pbXBvcnQge2VtcHR5RWxlbWVudCwgb25DbGlja1dyYXAsIHBpcGVFbGVtZW50LCBzZWN0aW9uSWRTcGFuRWxlbWVudH0gZnJvbSAnLi9tb2R1bGVzL3JlYWN0JztcbmltcG9ydCB7YXJjaGl2ZX0gZnJvbSAnLi9tb2R1bGVzL2FyY2hpdmUnO1xuaW1wb3J0IHtnZXRTZWN0aW9uc30gZnJvbSAnLi9tb2R1bGVzL3BhcnNlJztcbmltcG9ydCB7Z2V0U2V0dGluZ3N9IGZyb20gJy4vbW9kdWxlcy9zZXR0aW5ncyc7XG5pbXBvcnQge3JlbW92ZX0gZnJvbSAnLi9tb2R1bGVzL3JlbW92ZSc7XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHthcmNMZXZlbCwgYXJjTG9jLCBzZWNBcmMsIHNlY0RlbH0gPSBnZXRTZXR0aW5ncygpO1xuXG5cdGlmICghYXJjTG9jKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzZWN0aW9uc1RvQXJjaGl2ZSA9IGF3YWl0IGdldFNlY3Rpb25zKHdnUGFnZU5hbWUpO1xuXG5cdGNvbnN0IGhlYWRpbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaCR7YXJjTGV2ZWx9YCk7XG5cdGNvbnN0IGhlYWRsaW5lcyA9IFtdO1xuXHRjb25zdCBoZWFkaW5nSW5kaWNlcyA9IFtdO1xuXG5cdGZvciAoY29uc3QgaGVhZGluZyBvZiBoZWFkaW5ncykge1xuXHRcdGNvbnN0IGhlYWRsaW5lID0gaGVhZGluZy5xdWVyeVNlbGVjdG9yKCcubXctaGVhZGxpbmUnKTtcblx0XHRoZWFkbGluZXNbaGVhZGxpbmVzLmxlbmd0aF0gPSBoZWFkbGluZT8uaWQ7XG5cdH1cblxuXHRmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbnNUb0FyY2hpdmUpIHtcblx0XHRpZiAoc2VjdGlvbi5sZXZlbCAhPT0gYXJjTGV2ZWwpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGlmIChoZWFkbGluZXMuaW5jbHVkZXMoc2VjdGlvbi5hbmNob3IpKSB7XG5cdFx0XHRoZWFkaW5nSW5kaWNlc1toZWFkaW5nSW5kaWNlcy5sZW5ndGhdID0ge1xuXHRcdFx0XHRpbmRleDogc2VjdGlvbi5pbmRleCxcblx0XHRcdFx0aWQ6IHNlY3Rpb24uYW5jaG9yLFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRmb3IgKGNvbnN0IHtpbmRleCwgaWR9IG9mIGhlYWRpbmdJbmRpY2VzKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vcHJlZmVyLXF1ZXJ5LXNlbGVjdG9yXG5cdFx0Y29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuXHRcdGlmIChoZWFkaW5nKSB7XG5cdFx0XHRjb25zdCBzZWN0aW9uSWRTcGFuID0gc2VjdGlvbklkU3BhbkVsZW1lbnQoKTtcblx0XHRcdHNlY3Rpb25JZFNwYW4uYXBwZW5kKFxuXHRcdFx0XHRzZWNBcmMgPT09ICcxJ1xuXHRcdFx0XHRcdD8gb25DbGlja1dyYXAoJ+WtmOahoycsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0dm9pZCBhcmNoaXZlKGluZGV4LCBpZCwgYXJjTG9jKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0OiBlbXB0eUVsZW1lbnQoKSxcblx0XHRcdFx0c2VjQXJjID09PSAnMScgJiYgc2VjRGVsID09PSAnMScgPyBwaXBlRWxlbWVudCgpIDogZW1wdHlFbGVtZW50KCksXG5cdFx0XHRcdHNlY0RlbCA9PT0gJzEnXG5cdFx0XHRcdFx0PyBvbkNsaWNrV3JhcCgn5Yig6ZmkJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR2b2lkIHJlbW92ZShpbmRleCwgaWQpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQ6IGVtcHR5RWxlbWVudCgpXG5cdFx0XHQpO1xuXHRcdFx0aGVhZGluZy5hZnRlcihzZWN0aW9uSWRTcGFuKTtcblx0XHR9XG5cdH1cbn07XG5cbnZvaWQgbWFpbigpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LFNBQVNwRSxRQUFRSSxNQUFNLEdBQUc7QUFDdkN3RCx5QkFBZUEsZUFBZXRELE1BQU0sSUFBSTtZQUN2Q0gsT0FBT0gsUUFBUUc7WUFDZjhELElBQUlqRSxRQUFRSTtVQUNiO1FBQ0Q7TUFDRDtJQUFBLFNBQUFHLEtBQUE7QUFBQTJELGlCQUFBMUQsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQTJELGlCQUFBekQsRUFBQTtJQUFBO0FBRUEsYUFBQTRELEtBQUEsR0FBQUMsa0JBQTBCVixnQkFBQVMsS0FBQUMsZ0JBQUFoRSxRQUFBK0QsTUFBZ0I7QUFBMUMsWUFBVztRQUFDbEU7UUFBTzhEO01BQUUsSUFBQUssZ0JBQUFELEVBQUE7QUFFcEIsWUFBTU4sVUFBVW5CLFNBQVMyQixlQUFlTixFQUFFO0FBRTFDLFVBQUlGLFNBQVM7QUFDWixjQUFNUyxnQkFBZ0J4SCxxQkFBcUI7QUFDM0N3SCxzQkFBY0MsT0FDYnhCLFdBQVcsTUFDUjFHLFlBQVksTUFBTSxNQUFNO0FBQ3hCLGVBQUs4RixRQUFRbEMsT0FBTzhELElBQUlqQixNQUFNO1FBQy9CLENBQUMsSUFDQTdHLGFBQWEsR0FDaEI4RyxXQUFXLE9BQU9DLFdBQVcsTUFBTW5HLFlBQVksSUFBSVosYUFBYSxHQUNoRStHLFdBQVcsTUFDUjNHLFlBQVksTUFBTSxNQUFNO0FBQ3hCLGVBQUs0RyxPQUFPaEQsT0FBTzhELEVBQUU7UUFDdEIsQ0FBQyxJQUNBOUgsYUFBYSxDQUNqQjtBQUNBNEgsZ0JBQVFXLE1BQU1GLGFBQWE7TUFDNUI7SUFDRDtFQUNELENBQUE7QUFBQSxTQUFBLFNBdERNakIsUUFBQTtBQUFBLFdBQUFDLE1BQUFsRixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUF3RE4sS0FBS2dGLEtBQUs7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJlbXB0eUVsZW1lbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgIkZyYWdtZW50IiwgIm9uQ2xpY2tXcmFwIiwgInRleHRDb250ZW50IiwgIm9uQ2xpY2siLCAiZGF0YUFjdHVhbCIsICJkYXRhTm9taW5hbCIsICJjbGFzcyIsICJjb25jYXQiLCAiaHJlZiIsICJwaXBlRWxlbWVudCIsICJzZWN0aW9uSWRTcGFuRWxlbWVudCIsICJzdHlsZSIsICJkaXNwbGF5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY2hlY2tJZlBhZ2VFeGlzdCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImFyY2hpdmVUbyIsICJfcGFnZXMkIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0aXRsZXMiLCAicGFnZXMiLCAiZ2V0IiwgIm1pc3NpbmciLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImFyY2hpdmVTZWN0aW9uIiwgIl9yZWYyIiwgInRleHQiLCAicGFnZUV4aXN0IiwgImNyZWF0ZSIsICJzdW1tYXJ5IiwgIm1pbm9yIiwgImVkaXQiLCAiYXBwZW5kdGV4dCIsICJfeDIiLCAiX3gzIiwgImdldFNlY3Rpb25zIiwgIl9yZWYzIiwgInRpdGxlIiwgInBhZ2UiLCAicGFyc2UiLCAic2VjdGlvbnMiLCAic2VjdGlvbnNUb0FyY2hpdmUiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAic2VjdGlvbiIsICJ2YWx1ZSIsICJsZXZlbCIsICJpbmRleCIsICJhbmNob3IiLCAic3RhcnRzV2l0aCIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeDQiLCAiY2hlY2tJZlNlY3Rpb25FeGlzdCIsICJfcmVmNCIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJpZlNlY3Rpb25FeGlzdCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJfeDUiLCAiX3g2IiwgImRlbGV0ZVNlY3Rpb24iLCAiX3JlZjUiLCAiX3g3IiwgIl94OCIsICJfeDkiLCAiZ2V0U2VjdGlvbkNvbnRlbnQiLCAiX3JlZjYiLCAiX3F1ZXJ5JHBhZ2VzJDAkcmV2aXNpIiwgInJ2cHJvcCIsICJydnNlY3Rpb24iLCAicXVlcnkiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAicmV2aXNpb25zIiwgImNvbnRlbnQiLCAiX3gxMCIsICJfeDExIiwgImFyY2hpdmUiLCAiX3JlZjciLCAiX3gxMiIsICJfeDEzIiwgIl94MTQiLCAiZ2V0U2V0dGluZ3MiLCAic2V0dGluZ3MiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJkYXRhc2V0IiwgImFyY0xldmVsIiwgImFyY0xvYyIsICJzZWNBcmMiLCAic2VjRGVsIiwgInJlbW92ZSIsICJfcmVmOCIsICJfeDE1IiwgIl94MTYiLCAibWFpbiIsICJfcmVmOSIsICJoZWFkaW5ncyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImhlYWRsaW5lcyIsICJoZWFkaW5nSW5kaWNlcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJoZWFkaW5nIiwgImhlYWRsaW5lIiwgImlkIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImluY2x1ZGVzIiwgIl9pIiwgIl9oZWFkaW5nSW5kaWNlcyIsICJnZXRFbGVtZW50QnlJZCIsICJzZWN0aW9uSWRTcGFuIiwgImFwcGVuZCIsICJhZnRlciJdCn0K
