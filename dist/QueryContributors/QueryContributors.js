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
 * Licensed under the "Qiuwen License" (the "License",
 * formerly the "Qiuwen Public Licence"), either
 * version 1.0 of the Licence, or any later version.
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
//! src/QueryContributors/modules/appendElement.tsx
var sanitize = (string) => string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL29wdGlvbnMuanNvbiIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9hcHBlbmRFbGVtZW50LnRzeCIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9nZXRDb250cmlidXRvcnMudHMiLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL1F1ZXJ5Q29udHJpYnV0b3JzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBzYW5pdGl6ZSA9IChzdHJpbmc6IHN0cmluZykgPT5cblx0c3RyaW5nXG5cdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cbmNvbnN0IGVsZW1lbnRXcmFwID0gKGlubmVyRWxlbWVudDogUmVhY3RFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgY2xhc3NOYW1lcyA9IFsnZ2FkZ2V0LXF1ZXJ5X2NvbnRyaWJ1dG9ycyddO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57aW5uZXJFbGVtZW50fTwvc2VjdGlvbj47XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT57aW5uZXJFbGVtZW50fTwvbGk+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+e2lubmVyRWxlbWVudH08L2Rpdj47XG59O1xuXG5jb25zdCBVc2VyTGlzdCA9ICh1c2VyTmFtZXM6IHN0cmluZ1tdKSA9PiAoXG5cdDw+XG5cdFx0PD57Z2V0TWVzc2FnZSgnQmFzZWQgb24gY29udHJpYnV0aW9ucyBvZicpfTwvPlxuXHRcdHt1c2VyTmFtZXMubWFwKCh1c2VyTmFtZSwgaW5kZXgpID0+IChcblx0XHRcdDw+XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0aHJlZj17XG5cdFx0XHRcdFx0XHR1c2VyTmFtZS5pbmNsdWRlcygnPicpXG5cdFx0XHRcdFx0XHRcdD8gbXcudXRpbC5nZXRVcmwoYFNwZWNpYWw6R29Ub0ludGVyV2lraS8ke3Nhbml0aXplKHVzZXJOYW1lLnJlcGxhY2UoJz4nLCAnOlVzZXI6JykpfWApXG5cdFx0XHRcdFx0XHRcdDogbXcudXRpbC5nZXRVcmwoYFVzZXI6JHtzYW5pdGl6ZSh1c2VyTmFtZSl9YClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0a2V5PXt1c2VyTmFtZX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt1c2VyTmFtZX1cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8PntpbmRleCA8IHVzZXJOYW1lcy5sZW5ndGggLSAxID8gZ2V0TWVzc2FnZSgnU2VwZXJhdG9yJykgOiBnZXRNZXNzYWdlKCdQZXJpb2QnKX08Lz5cblx0XHRcdDwvPlxuXHRcdCkpfVxuXHQ8Lz5cbik7XG5cbmNvbnN0IGFwcGVuZEVsZW1lbnQgPSAodXNlck5hbWVzOiBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuXHRpZiAoIXVzZXJOYW1lcyB8fCAhdXNlck5hbWVzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHRhZyA9IGVsZW1lbnRXcmFwKFVzZXJMaXN0KHVzZXJOYW1lcykpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcilbMF0/LnByZXBlbmQodGFnKTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kRWxlbWVudH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdCYXNlZCBvbiBjb250cmlidXRpb25zIG9mJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYXNlZCBvbiBjb250cmlidXRpb25zIG9mJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WfuuS6juS4i+WIl+eUqOaIt+eahOi0oeeMru+8micsXG5cdFx0XHQnemgtaGFudCc6ICfln7rkuo7kuIvliJfkvb/nlKjogIXnmoTosqLnjbvvvJonLFxuXHRcdH0pLFxuXHRcdFNlcGVyYXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcsICcsXG5cdFx0XHQnemgtaGFucyc6ICfjgIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn44CBJyxcblx0XHR9KSxcblx0XHRQZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVlcnlDb250cmlidXRvcnMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgcXVlcnlDb250cmlidXRvcnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcsIHBjY29udGludWU/OiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUNvbnRyaWJ1dG9yc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdjb250cmlidXRvcnMnLFxuXHRcdHBjZXhjbHVkZWdyb3VwOiBbJ2JvdCddLFxuXHRcdHBjbGltaXQ6IDUwMDAsXG5cdFx0dGl0bGVzLFxuXHR9O1xuXG5cdGlmIChwY2NvbnRpbnVlKSB7XG5cdFx0cGFyYW1zLnBjY29udGludWUgPSBwY2NvbnRpbnVlO1xuXHR9XG5cblx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGdldENvbnRyaWJ1dG9ycyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwY2xpc3Q6IHN0cmluZ1tdID0gW107XG5cdGxldCBwY2NvbnRpbnVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcXVlcnlDb250cmlidXRvcnModGl0bGVzLCBwY2NvbnRpbnVlKTtcblxuXHRcdGZvciAoY29uc3QgcGFnZSBvZiBkYXRhWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRjb25zdCB7Y29udHJpYnV0b3JzfSA9IHBhZ2UgYXMge1xuXHRcdFx0XHRjb250cmlidXRvcnM6IHt1c2VyaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nfVtdO1xuXHRcdFx0fTtcblxuXHRcdFx0Zm9yIChjb25zdCB7bmFtZX0gb2YgY29udHJpYnV0b3JzKSB7XG5cdFx0XHRcdHBjbGlzdFtwY2xpc3QubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGRhdGFbJ2NvbnRpbnVlJ10gJiYgZGF0YVsnY29udGludWUnXS5wY2NvbnRpbnVlKSB7XG5cdFx0XHQoe3BjY29udGludWV9ID0gZGF0YVsnY29udGludWUnXSBhcyB7cGNjb250aW51ZTogc3RyaW5nfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShwY2xpc3QpO1xufTtcblxuZXhwb3J0IHtnZXRDb250cmlidXRvcnN9O1xuIiwgImltcG9ydCB7YXBwZW5kRWxlbWVudH0gZnJvbSAnLi9tb2R1bGVzL2FwcGVuZEVsZW1lbnQnO1xuaW1wb3J0IHtnZXRDb250cmlidXRvcnN9IGZyb20gJy4vbW9kdWxlcy9nZXRDb250cmlidXRvcnMnO1xuXG4oYXN5bmMgZnVuY3Rpb24gcXVlcnlDb250cmlidXRvcygpIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0FydGljbGVJZCwgd2dDdXJSZXZpc2lvbklkLCB3Z1BhZ2VOYW1lLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8ICF3Z0FydGljbGVJZCB8fCAhd2dQYWdlTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICh3Z0N1clJldmlzaW9uSWQgPiB3Z1JldmlzaW9uSWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjb250cmlidXRvcnM6IHN0cmluZ1tdID0gYXdhaXQgZ2V0Q29udHJpYnV0b3JzKHdnUGFnZU5hbWUpO1xuXG5cdGFwcGVuZEVsZW1lbnQoY29udHJpYnV0b3JzKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEscUJBQXNCO0FBQ3RCLElBQUFDLFVBQVc7O0FDRFosSUFBQUMscUJBQWtDQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEMsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sOEJBQUEsR0FBNkJELGtCQUFBRSxVQUFTO01BQ3JDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFlBQUEsR0FBV0osa0JBQUFFLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsU0FBQSxHQUFRTCxrQkFBQUUsVUFBUztNQUNoQkMsSUFBSTtNQUNKRyxJQUFJO0lBQ0wsQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlTixnQkFBZ0I7QUFFckMsSUFBTU8sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QURyQkEsSUFBTUMsV0FBWUMsWUFDakJBLE9BQ0VDLFFBQVEsTUFBTSxPQUFPLEVBQ3JCQSxRQUFRLE1BQU0sTUFBTSxFQUNwQkEsUUFBUSxNQUFNLE1BQU0sRUFDcEJBLFFBQVEsTUFBTSxRQUFRLEVBQ3RCQSxRQUFRLE1BQU0s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UUFBSWtFLGFBQWEsVUFBVSxDQUFDQyxlQUFlLENBQUNFLFlBQVk7QUFDdkQ7SUFDRDtBQUVBLFFBQUlELGtCQUFrQkUsY0FBYztBQUNuQztJQUNEO0FBRUEsVUFBTWIsZUFBQSxNQUErQlosZ0JBQWdCd0IsVUFBVTtBQUUvRGxELGtCQUFjc0MsWUFBWTtFQUMzQixDQUFBO0FBQUEsV0FkZ0JjLG1CQUFBO0FBQUEsV0FBQUMsa0JBQUE3QixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUEyQjtBQUFBLEdBQUEsRUFjYjsiLAogICJuYW1lcyI6IFsibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiU2VwZXJhdG9yIiwgIlBlcmlvZCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic2FuaXRpemUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiZWxlbWVudFdyYXAiLCAiaW5uZXJFbGVtZW50IiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjbGFzc05hbWVzIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiaW5jbHVkZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJVc2VyTGlzdCIsICJ1c2VyTmFtZXMiLCAiRnJhZ21lbnQiLCAibWFwIiwgInVzZXJOYW1lIiwgImluZGV4IiwgImhyZWYiLCAidXRpbCIsICJnZXRVcmwiLCAiY29uY2F0IiwgImxlbmd0aCIsICJhcHBlbmRFbGVtZW50IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJ0YWciLCAicXVlcnlTZWxlY3RvckFsbCIsICJwcmVwZW5kIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJxdWVyeUNvbnRyaWJ1dG9ycyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJwY2NvbnRpbnVlIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJwY2V4Y2x1ZGVncm91cCIsICJwY2xpbWl0IiwgImRhdGEiLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnZXRDb250cmlidXRvcnMiLCAiX3JlZjIiLCAicGNsaXN0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicGFnZXMiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInBhZ2UiLCAidmFsdWUiLCAiY29udHJpYnV0b3JzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIm5hbWUiLCAiZXJyIiwgImUiLCAiZiIsICJ1bmlxdWVBcnJheSIsICJfeDMiLCAid2dBY3Rpb24iLCAid2dBcnRpY2xlSWQiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUGFnZU5hbWUiLCAid2dSZXZpc2lvbklkIiwgInF1ZXJ5Q29udHJpYnV0b3MiLCAiX3F1ZXJ5Q29udHJpYnV0b3MiXQp9Cg==
