/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|license2=Qiuwen License}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QueryContributors}
 * @author WaitSpring <me@waitspring.com>
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 * @license Qiuwen License {@link https://www.qiuwenbaike.cn/wiki/QW:QWL}
 */

/**
 * Copyright 2024 WaitSpring <me@waitspring.com>
 * Licensed under the "Qiuwen Public License" (the "License");
 * You may obtain a copy of the License at
 *
 *     http://www.qiuwenbaike.cn/wiki/QW:QWL
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

// dist/QueryContributors/QueryContributors.js
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
//! src/QueryContributors/options.json
var mountPointSelector = "#footer-info,.page-info";
var version = "1.0";
//! src/QueryContributors/modules/appendElement.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/QueryContributors/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Based on contributions of": (0, import_ext_gadget.localize)({
      en: "Based on contributions of",
      "zh-hans": "基于下列用户的贡献：",
      "zh-hant": "基于下列使用者的貢獻："
    }),
    Seperator: (0, import_ext_gadget.localize)({
      en: ", ",
      "zh-hans": "、",
      "zh-hant": "、"
    }),
    Period: (0, import_ext_gadget.localize)({
      en: ".",
      zh: "。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/QueryContributors/modules/sanitize.ts
var sanitize = (string) => {
  return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&lt;").replace(/"/g, "&quot;");
};
//! src/QueryContributors/modules/appendElement.tsx
var elementWrap = (innerElement) => {
  const {
    skin
  } = mw.config.get();
  const classNames = ["gadget-query_contributors"];
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
      className: classNames
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      className: classNames
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    className: classNames
  }, innerElement);
};
var UserList = (userNames) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, getMessage("Based on contributions of")), userNames.map((userName, index) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  href: userName.includes(">") ? mw.util.getUrl("Special:GoToInterWiki/".concat(sanitize(userName.replace(">", ":User:")))) : mw.util.getUrl("User:".concat(sanitize(userName))),
  key: userName
}, userName), /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, index < userNames.length - 1 ? getMessage("Seperator") : getMessage("Period")))));
var appendElement = (userNames) => {
  var _document$querySelect;
  if (!userNames || !userNames.length) {
    return;
  }
  const tag = elementWrap(UserList(userNames));
  (_document$querySelect = document.querySelectorAll(mountPointSelector)[0]) === null || _document$querySelect === void 0 || _document$querySelect.prepend(tag);
};
//! src/QueryContributors/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("QueryContributors/".concat(version));
//! src/QueryContributors/modules/getContributors.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var queryContributors = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (titles, pccontinue) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "contributors",
      pcexcludegroup: ["bot"],
      pclimit: 5e3,
      titles
    };
    if (pccontinue) {
      params.pccontinue = pccontinue;
    }
    const data = yield api.get(params);
    return data;
  });
  return function queryContributors2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getContributors = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (titles) {
    const pclist = [];
    let pccontinue;
    while (true) {
      const data = yield queryContributors(titles, pccontinue);
      var _iterator2 = _createForOfIteratorHelper(data["query"].pages), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const page = _step2.value;
          const {
            contributors
          } = page;
          var _iterator3 = _createForOfIteratorHelper(contributors), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              const {
                name
              } = _step3.value;
              pclist[pclist.length] = name;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (data["continue"] && data["continue"].pccontinue) {
        ({
          pccontinue
        } = data["continue"]);
      } else {
        break;
      }
    }
    return (0, import_ext_gadget4.uniqueArray)(pclist);
  });
  return function getContributors2(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/QueryContributors/QueryContributors.ts
(function() {
  var _queryContributos = _asyncToGenerator(function* () {
    const {
      wgAction,
      wgArticleId,
      wgCurRevisionId,
      wgPageName,
      wgRevisionId
    } = mw.config.get();
    if (wgAction !== "view" || !wgArticleId || !wgPageName) {
      return;
    }
    if (wgCurRevisionId > wgRevisionId) {
      return;
    }
    const contributors = yield getContributors(wgPageName);
    appendElement(contributors);
  });
  function queryContributos() {
    return _queryContributos.apply(this, arguments);
  }
  return queryContributos;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL29wdGlvbnMuanNvbiIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9hcHBlbmRFbGVtZW50LnRzeCIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3Nhbml0aXplLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9nZXRDb250cmlidXRvcnMudHMiLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL1F1ZXJ5Q29udHJpYnV0b3JzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtzYW5pdGl6ZX0gZnJvbSAnLi9zYW5pdGl6ZSc7XG5cbmNvbnN0IGVsZW1lbnRXcmFwID0gKGlubmVyRWxlbWVudDogUmVhY3RFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgY2xhc3NOYW1lcyA9IFsnZ2FkZ2V0LXF1ZXJ5X2NvbnRyaWJ1dG9ycyddO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57aW5uZXJFbGVtZW50fTwvc2VjdGlvbj47XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57aW5uZXJFbGVtZW50fTwvbGk+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e2lubmVyRWxlbWVudH08L2Rpdj47XG59O1xuXG5jb25zdCBVc2VyTGlzdCA9ICh1c2VyTmFtZXM6IHN0cmluZ1tdKSA9PiAoXG5cdDw+XG5cdFx0PD57Z2V0TWVzc2FnZSgnQmFzZWQgb24gY29udHJpYnV0aW9ucyBvZicpfTwvPlxuXHRcdHt1c2VyTmFtZXMubWFwKCh1c2VyTmFtZSwgaW5kZXgpID0+IChcblx0XHRcdDw+XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0aHJlZj17XG5cdFx0XHRcdFx0XHR1c2VyTmFtZS5pbmNsdWRlcygnPicpXG5cdFx0XHRcdFx0XHRcdD8gbXcudXRpbC5nZXRVcmwoYFNwZWNpYWw6R29Ub0ludGVyV2lraS8ke3Nhbml0aXplKHVzZXJOYW1lLnJlcGxhY2UoJz4nLCAnOlVzZXI6JykpfWApXG5cdFx0XHRcdFx0XHRcdDogbXcudXRpbC5nZXRVcmwoYFVzZXI6JHtzYW5pdGl6ZSh1c2VyTmFtZSl9YClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0a2V5PXt1c2VyTmFtZX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt1c2VyTmFtZX1cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8PntpbmRleCA8IHVzZXJOYW1lcy5sZW5ndGggLSAxID8gZ2V0TWVzc2FnZSgnU2VwZXJhdG9yJykgOiBnZXRNZXNzYWdlKCdQZXJpb2QnKX08Lz5cblx0XHRcdDwvPlxuXHRcdCkpfVxuXHQ8Lz5cbik7XG5cbmNvbnN0IGFwcGVuZEVsZW1lbnQgPSAodXNlck5hbWVzOiBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuXHRpZiAoIXVzZXJOYW1lcyB8fCAhdXNlck5hbWVzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRhZyA9IGVsZW1lbnRXcmFwKFVzZXJMaXN0KHVzZXJOYW1lcykpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcilbMF0/LnByZXBlbmQodGFnKTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kRWxlbWVudH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdCYXNlZCBvbiBjb250cmlidXRpb25zIG9mJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYXNlZCBvbiBjb250cmlidXRpb25zIG9mJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WfuuS6juS4i+WIl+eUqOaIt+eahOi0oeeMru+8micsXG5cdFx0XHQnemgtaGFudCc6ICfln7rkuo7kuIvliJfkvb/nlKjogIXnmoTosqLnjbvvvJonLFxuXHRcdH0pLFxuXHRcdFNlcGVyYXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcsICcsXG5cdFx0XHQnemgtaGFucyc6ICfjgIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn44CBJyxcblx0XHR9KSxcblx0XHRQZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IHNhbml0aXplID0gKHN0cmluZzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBzdHJpbmcucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmx0OycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn07XG5cbmV4cG9ydCB7c2FuaXRpemV9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVlcnlDb250cmlidXRvcnMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgcXVlcnlDb250cmlidXRvcnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcsIHBjY29udGludWU/OiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUNvbnRyaWJ1dG9yc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdjb250cmlidXRvcnMnLFxuXHRcdHBjZXhjbHVkZWdyb3VwOiBbJ2JvdCddLFxuXHRcdHBjbGltaXQ6IDUwMDAsXG5cdFx0dGl0bGVzLFxuXHR9O1xuXG5cdGlmIChwY2NvbnRpbnVlKSB7XG5cdFx0cGFyYW1zLnBjY29udGludWUgPSBwY2NvbnRpbnVlO1xuXHR9XG5cblx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGdldENvbnRyaWJ1dG9ycyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwY2xpc3Q6IHN0cmluZ1tdID0gW107XG5cdGxldCBwY2NvbnRpbnVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcXVlcnlDb250cmlidXRvcnModGl0bGVzLCBwY2NvbnRpbnVlKTtcblxuXHRcdGZvciAoY29uc3QgcGFnZSBvZiBkYXRhWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRjb25zdCB7Y29udHJpYnV0b3JzfSA9IHBhZ2UgYXMge1xuXHRcdFx0XHRjb250cmlidXRvcnM6IHt1c2VyaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nfVtdO1xuXHRcdFx0fTtcblxuXHRcdFx0Zm9yIChjb25zdCB7bmFtZX0gb2YgY29udHJpYnV0b3JzKSB7XG5cdFx0XHRcdHBjbGlzdFtwY2xpc3QubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGRhdGFbJ2NvbnRpbnVlJ10gJiYgZGF0YVsnY29udGludWUnXS5wY2NvbnRpbnVlKSB7XG5cdFx0XHQoe3BjY29udGludWV9ID0gZGF0YVsnY29udGludWUnXSBhcyB7cGNjb250aW51ZTogc3RyaW5nfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShwY2xpc3QpO1xufTtcblxuZXhwb3J0IHtnZXRDb250cmlidXRvcnN9O1xuIiwgImltcG9ydCB7YXBwZW5kRWxlbWVudH0gZnJvbSAnLi9tb2R1bGVzL2FwcGVuZEVsZW1lbnQnO1xuaW1wb3J0IHtnZXRDb250cmlidXRvcnN9IGZyb20gJy4vbW9kdWxlcy9nZXRDb250cmlidXRvcnMnO1xuXG4oYXN5bmMgZnVuY3Rpb24gcXVlcnlDb250cmlidXRvcygpIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0FydGljbGVJZCwgd2dDdXJSZXZpc2lvbklkLCB3Z1BhZ2VOYW1lLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8ICF3Z0FydGljbGVJZCB8fCAhd2dQYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICh3Z0N1clJldmlzaW9uSWQgPiB3Z1JldmlzaW9uSWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250cmlidXRvcnM6IHN0cmluZ1tdID0gYXdhaXQgZ2V0Q29udHJpYnV0b3JzKHdnUGFnZU5hbWUpO1xuXG5cdGFwcGVuZEVsZW1lbnQoY29udHJpYnV0b3JzKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHFCQUFzQjtBQUN0QixJQUFBQyxVQUFXOztBQ0RaLElBQUFDLHFCQUFrQ0MsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRGxDLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLDhCQUFBLEdBQTZCRCxrQkFBQUUsVUFBUztNQUNyQ0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxZQUFBLEdBQVdKLGtCQUFBRSxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFNBQUEsR0FBUUwsa0JBQUFFLFVBQVM7TUFDaEJDLElBQUk7TUFDSkcsSUFBSTtJQUNMLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUMsZUFBZU4sZ0JBQWdCO0FBRXJDLElBQU1PLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDekJBLElBQU1DLFdBQVlDLFlBQW1CO0FBQ3BDLFNBQU9BLE9BQU9DLFFBQVEsTUFBTSxPQUFPLEVBQUVBLFFB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QztNQUFhQztNQUFpQkM7TUFBWUM7SUFBWSxJQUFJeEUsR0FBR0MsT0FBT0MsSUFBSTtBQUV6RixRQUFJa0UsYUFBYSxVQUFVLENBQUNDLGVBQWUsQ0FBQ0UsWUFBWTtBQUN2RDtJQUNEO0FBRUEsUUFBSUQsa0JBQWtCRSxjQUFjO0FBQ25DO0lBQ0Q7QUFFQSxVQUFNYixlQUFBLE1BQStCWixnQkFBZ0J3QixVQUFVO0FBRS9EbEQsa0JBQWNzQyxZQUFZO0VBQzNCLENBQUE7QUFBQSxXQWRnQmMsbUJBQUE7QUFBQSxXQUFBQyxrQkFBQTdCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQTJCO0FBQUEsR0FBQSxFQWNiOyIsCiAgIm5hbWVzIjogWyJtb3VudFBvaW50U2VsZWN0b3IiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJTZXBlcmF0b3IiLCAiUGVyaW9kIiwgInpoIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJzYW5pdGl6ZSIsICJzdHJpbmciLCAicmVwbGFjZSIsICJlbGVtZW50V3JhcCIsICJpbm5lckVsZW1lbnQiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNsYXNzTmFtZXMiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIlVzZXJMaXN0IiwgInVzZXJOYW1lcyIsICJGcmFnbWVudCIsICJtYXAiLCAidXNlck5hbWUiLCAiaW5kZXgiLCAiaHJlZiIsICJ1dGlsIiwgImdldFVybCIsICJjb25jYXQiLCAibGVuZ3RoIiwgImFwcGVuZEVsZW1lbnQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInRhZyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInByZXBlbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInF1ZXJ5Q29udHJpYnV0b3JzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBjY29udGludWUiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInBjZXhjbHVkZWdyb3VwIiwgInBjbGltaXQiLCAiZGF0YSIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldENvbnRyaWJ1dG9ycyIsICJfcmVmMiIsICJwY2xpc3QiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJwYWdlcyIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAicGFnZSIsICJ2YWx1ZSIsICJjb250cmlidXRvcnMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAibmFtZSIsICJlcnIiLCAiZSIsICJmIiwgInVuaXF1ZUFycmF5IiwgIl94MyIsICJ3Z0FjdGlvbiIsICJ3Z0FydGljbGVJZCIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dQYWdlTmFtZSIsICJ3Z1JldmlzaW9uSWQiLCAicXVlcnlDb250cmlidXRvcyIsICJfcXVlcnlDb250cmlidXRvcyJdCn0K
