/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|license2=Qiuwen Public Licence}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QueryContributors}
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
  const className = "gadget-query_contributors";
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
      id: className,
      className: [className, "page-info__item", "citizen-footer__pageinfo-item"]
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      id: className,
      className
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id: className,
    className
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
      titles,
      smaxage: 600,
      maxage: 600
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL29wdGlvbnMuanNvbiIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9hcHBlbmRFbGVtZW50LnRzeCIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9nZXRDb250cmlidXRvcnMudHMiLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL1F1ZXJ5Q29udHJpYnV0b3JzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBzYW5pdGl6ZSA9IChzdHJpbmc6IHN0cmluZykgPT5cblx0c3RyaW5nXG5cdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cbmNvbnN0IGVsZW1lbnRXcmFwID0gKGlubmVyRWxlbWVudDogUmVhY3RFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgY2xhc3NOYW1lID0gJ2dhZGdldC1xdWVyeV9jb250cmlidXRvcnMnO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gaWQ9e2NsYXNzTmFtZX0gY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJ119PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgaWQ9e2NsYXNzTmFtZX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuXHRcdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdFx0PC9saT5cblx0XHQpO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD17Y2xhc3NOYW1lfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG5cdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgVXNlckxpc3QgPSAodXNlck5hbWVzOiBzdHJpbmdbXSkgPT4gKFxuXHQ8PlxuXHRcdDw+e2dldE1lc3NhZ2UoJ0Jhc2VkIG9uIGNvbnRyaWJ1dGlvbnMgb2YnKX08Lz5cblx0XHR7dXNlck5hbWVzLm1hcCgodXNlck5hbWUsIGluZGV4KSA9PiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9e1xuXHRcdFx0XHRcdFx0dXNlck5hbWUuaW5jbHVkZXMoJz4nKVxuXHRcdFx0XHRcdFx0XHQ/IG13LnV0aWwuZ2V0VXJsKGBTcGVjaWFsOkdvVG9JbnRlcldpa2kvJHtzYW5pdGl6ZSh1c2VyTmFtZS5yZXBsYWNlKCc+JywgJzpVc2VyOicpKX1gKVxuXHRcdFx0XHRcdFx0XHQ6IG13LnV0aWwuZ2V0VXJsKGBVc2VyOiR7c2FuaXRpemUodXNlck5hbWUpfWApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGtleT17dXNlck5hbWV9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7dXNlck5hbWV9XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PD57aW5kZXggPCB1c2VyTmFtZXMubGVuZ3RoIC0gMSA/IGdldE1lc3NhZ2UoJ1NlcGVyYXRvcicpIDogZ2V0TWVzc2FnZSgnUGVyaW9kJyl9PC8+XG5cdFx0XHQ8Lz5cblx0XHQpKX1cblx0PC8+XG4pO1xuXG5jb25zdCBhcHBlbmRFbGVtZW50ID0gKHVzZXJOYW1lczogc3RyaW5nW10pOiB2b2lkID0+IHtcblx0aWYgKCF1c2VyTmFtZXMgfHwgIXVzZXJOYW1lcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0YWcgPSBlbGVtZW50V3JhcChVc2VyTGlzdCh1c2VyTmFtZXMpKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpWzBdPy5wcmVwZW5kKHRhZyk7XG59O1xuXG5leHBvcnQge2FwcGVuZEVsZW1lbnR9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnQmFzZWQgb24gY29udHJpYnV0aW9ucyBvZic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQmFzZWQgb24gY29udHJpYnV0aW9ucyBvZicsXG5cdFx0XHQnemgtaGFucyc6ICfln7rkuo7kuIvliJfnlKjmiLfnmoTotKHnjK7vvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5Z+65LqO5LiL5YiX5L2/55So6ICF55qE6LKi542777yaJyxcblx0XHR9KSxcblx0XHRTZXBlcmF0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLCAnLFxuXHRcdFx0J3poLWhhbnMnOiAn44CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+OAgScsXG5cdFx0fSksXG5cdFx0UGVyaW9kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1ZXJ5Q29udHJpYnV0b3JzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHF1ZXJ5Q29udHJpYnV0b3JzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nLCBwY2NvbnRpbnVlPzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlDb250cmlidXRvcnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnY29udHJpYnV0b3JzJyxcblx0XHRwY2V4Y2x1ZGVncm91cDogWydib3QnXSxcblx0XHRwY2xpbWl0OiA1MDAwLFxuXHRcdHRpdGxlcyxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cblx0aWYgKHBjY29udGludWUpIHtcblx0XHRwYXJhbXMucGNjb250aW51ZSA9IHBjY29udGludWU7XG5cdH1cblxuXHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgZ2V0Q29udHJpYnV0b3JzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBjbGlzdDogc3RyaW5nW10gPSBbXTtcblx0bGV0IHBjY29udGludWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBxdWVyeUNvbnRyaWJ1dG9ycyh0aXRsZXMsIHBjY29udGludWUpO1xuXG5cdFx0Zm9yIChjb25zdCBwYWdlIG9mIGRhdGFbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdGNvbnN0IHtjb250cmlidXRvcnN9ID0gcGFnZSBhcyB7XG5cdFx0XHRcdGNvbnRyaWJ1dG9yczoge3VzZXJpZDogbnVtYmVyOyBuYW1lOiBzdHJpbmd9W107XG5cdFx0XHR9O1xuXG5cdFx0XHRmb3IgKGNvbnN0IHtuYW1lfSBvZiBjb250cmlidXRvcnMpIHtcblx0XHRcdFx0cGNsaXN0W3BjbGlzdC5sZW5ndGhdID0gbmFtZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZGF0YVsnY29udGludWUnXSAmJiBkYXRhWydjb250aW51ZSddLnBjY29udGludWUpIHtcblx0XHRcdCh7cGNjb250aW51ZX0gPSBkYXRhWydjb250aW51ZSddIGFzIHtwY2NvbnRpbnVlOiBzdHJpbmd9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KHBjbGlzdCk7XG59O1xuXG5leHBvcnQge2dldENvbnRyaWJ1dG9yc307XG4iLCAiaW1wb3J0IHthcHBlbmRFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvYXBwZW5kRWxlbWVudCc7XG5pbXBvcnQge2dldENvbnRyaWJ1dG9yc30gZnJvbSAnLi9tb2R1bGVzL2dldENvbnRyaWJ1dG9ycyc7XG5cbihhc3luYyBmdW5jdGlvbiBxdWVyeUNvbnRyaWJ1dG9zKCkge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnQXJ0aWNsZUlkLCB3Z0N1clJldmlzaW9uSWQsIHdnUGFnZU5hbWUsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnQXJ0aWNsZUlkIHx8ICF3Z1BhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHdnQ3VyUmV2aXNpb25JZCA+IHdnUmV2aXNpb25JZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRyaWJ1dG9yczogc3RyaW5nW10gPSBhd2FpdCBnZXRDb250cmlidXRvcnMod2dQYWdlTmFtZSk7XG5cblx0YXBwZW5kRWxlbWVudChjb250cmlidXRvcnMpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEscUJBQXNCO0FBQ3RCLElBQUFDLFVBQVc7O0FDRFosSUFBQUMscUJBQWtDQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEMsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sOEJBQUEsR0FBNkJELGtCQUFBRSxVQUFTO01BQ3JDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFlBQUEsR0FBV0osa0JBQUFFLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsU0FBQSxHQUFRTCxrQkFBQUUsVUFBUztNQUNoQkMsSUFBSTtNQUNKRyxJQUFJO0lBQ0wsQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlTixnQkFBZ0I7QUFFckMsSUFBTU8sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QURyQkEsSUFBTUMsV0FBWUMsWUFDakJBLE9BQ0VDLFFBQVEsTUFBTSxPQUFPLEVBQ3JCQSxRQUFRLE1BQU0sTUFBTSxFQUNwQkEsUUFBUSxNQUFNLE1BQU0sRUFDcEJBLFFBQVEsTUFBTSxRQUFRLEVBQ3RCQSxRQUFRLE1BQU0sUUFBUTtBQUV6QixJQUFNQyxjQUFlQyxrQkFBK0I7QUFDbkQsUUFBTTtJQUFDQztFQUFJLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDN0IsUUFBTUMsWUFBWTtBQUVsQixNQUFJSixTQUFTLFdBQVc7QUFDdkIsV0FDQ2xCLG1DQUFBdUIsUUFBQUMsY0FBQyxXQUFBO01BQVFDLElBQUlIO01BQVdBLFdBQVcsQ0FBQ0EsV0FBVyxtQkFBbUIsK0JBQStCO0lBQUEsR0FDL0ZMLFlBQ0Y7RUFFRixXQUFXLENBQUMsVUFBVSxlQUFlLFFBQVEsRUFBRVMsU0FBU1IsSUFBSSxLQUFLUyxTQUFTQyxjQUFjLGdCQUFnQixHQUFHO0FBQzFHLFdBQ0M1QixtQ0FBQXVCLFFBQUFDLGNBQUMsTUFBQTtNQUFHQyxJQUFJSDtNQUFXQTtJQUFBLEdBQ2pCTCxZQUNGO0VBRUY7QUFDQSxTQUNDakIsbUNBQUF1QixRQUFBQyxjQUFDLE9BQUE7SUFBSUMsSUFBSUg7SUFBV0E7RUFBQSxHQUNsQkwsWUFDRjtBQUVGO0FBRUEsSUFBTVksV0FBWUMsZUFDakI5QixtQ0FBQXVCLFFBQUFDLGNBQUF4QixtQkFBQXVCLFFBQUFRLFVBQUEsTUFDQy9CLG1DQUFBdUIsUUFBQUMsY0FBQXhCLG1CQUFBdUIsUUFBQVEsVUFBQSxNQUFHcEIsV0FBVywyQkFBMkIsQ0FBRSxHQUMxQ21CLFVBQVVFLElBQUksQ0FBQ0MsVUFBVUMsVUFDekJsQyxtQ0FBQXVCLFFBQUFDLGNBQUF4QixtQkFBQXVCLFFBQUFRLFVBQUEsTUFDQy9CLG1DQUFBdUIsUUFBQUMsY0FBQyxLQUFBO0VBQ0FXLE1BQ0NGLFNBQVNQLFNBQVMsR0FBRyxJQUNsQlAsR0FBR2lCLEtBQUtDLE9BQUEseUJBQUFDLE9BQWdDekIsU0FBU29CLFNBQVNsQixRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBRSxJQUNuRkksR0FBR2lCLEtBQUtDLE9BQUEsUUFBQUMsT0FBZXpCLFNBQVNvQixRQUFRLENBQUMsQ0FBRTtFQUUvQ3JCLEtBQUtxQjtBQUFBLEdBRUpBLFFBQ0YsR0FDQWpDLG1DQUFBdUIsUUFBQUMsY0FBQXhCLG1CQUFBdUIsUUFBQVEsVUFBQSxNQUFHRyxRQUFRSixVQUFVUyxTQUFTLElBQUk1QixXQUFXLFdBQVcsSUFBSUEsV0FBVyxRQUFRLENBQUUsQ0FDbEYsQ0FDQSxDQUNGO0FBR0QsSUFBTTZCLGdCQUFpQlYsZUFBOEI7QUFBQSxNQUFBVztBQUNwRCxNQUFJLENBQUNYLGFBQWEsQ0FBQ0EsVUFBVVMsUUFBUTtBQUNwQztFQUNEO0FBRUEsUUFBTUcsTUFBTTFCLFlBQVlhLFNBQVNDLFNBQVMsQ0FBQztBQUMzQyxHQUFBVyx3QkFBQWQsU0FBU2dCLGlCQUFzQzdDLGtCQUFrQixFQUFFLENBQUMsT0FBQSxRQUFBMkMsMEJBQUEsVUFBcEVBLHNCQUF1RUcsUUFBUUYsR0FBRztBQUNuRjs7QUUvREEsSUFBQUcscUJBQXdCM0MsUUFBQSxpQkFBQTtBQUV4QixJQUFNNEMsT0FBQSxHQUFjRCxtQkFBQUUsV0FBQSxxQkFBQVQsT0FBdUN2QyxPQUFPLENBQUU7O0FDRnBFLElBQUFpRCxxQkFBMEI5QyxRQUFBLGlCQUFBO0FBRTFCLElBQU0rQyxvQkFBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFvQixXQUFPQyxRQUFnQkMsWUFBd0I7QUFDeEUsVUFBTUMsU0FBcUM7TUFDMUNDLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQU07TUFDTkMsZ0JBQWdCLENBQUMsS0FBSztNQUN0QkMsU0FBUztNQUNUUjtNQUNBUyxTQUFTO01BQ1RDLFFBQVE7SUFDVDtBQUVBLFFBQUlULFlBQVk7QUFDZkMsYUFBT0QsYUFBYUE7SUFDckI7QUFFQSxVQUFNVSxPQUFBLE1BQWFqQixJQUFJekIsSUFBSWlDLE1BQU07QUFFakMsV0FBT1M7RUFDUixDQUFBO0FBQUEsU0FBQSxTQXBCTWQsbUJBQUFlLElBQUFDLEtBQUE7QUFBQSxXQUFBZixLQUFBZ0IsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBc0JOLElBQU1DLGtCQUFBLDJCQUFBO0FBQUEsTUFBQUMsUUFBQWxCLGtCQUFrQixXQUFPQyxRQUFtQjtBQUNqRCxVQUFNa0IsU0FBbUIsQ0FBQTtBQUN6QixRQUFJakI7QUFFSixXQUFPLE1BQU07QUFDWixZQUFNVSxPQUFBLE1BQWFkLGtCQUFrQkcsUUFBUUMsVUFBVTtBQUFBLFVBQUFrQixhQUFBQywyQkFFcENULEtBQUssT0FBTyxFQUFFVSxLQUFBLEdBQUFDO0FBQUEsVUFBQTtBQUFqQyxhQUFBSCxXQUFBSSxFQUFBLEdBQUEsRUFBQUQsU0FBQUgsV0FBQUssRUFBQSxHQUFBQyxRQUF3QztBQUFBLGdCQUE3QkMsT0FBQUosT0FBQUs7QUFDVixnQkFBTTtZQUFDQztVQUFZLElBQUlGO0FBQUEsY0FBQUcsYUFBQVQsMkJBSUZRLFlBQUEsR0FBQUU7QUFBQSxjQUFBO0FBQXJCLGlCQUFBRCxXQUFBTixFQUFBLEdBQUEsRUFBQU8sU0FBQUQsV0FBQUwsRUFBQSxHQUFBQyxRQUFtQztBQUFBLG9CQUF4QjtnQkFBQ007Y0FBSSxJQUFBRCxPQUFBSDtBQUNmVCxxQkFBT0EsT0FBTy9CLE1BQU0sSUFBSTRDO1lBQ3pCO1VBQUEsU0FBQUMsS0FBQTtBQUFBSCx1QkFBQUksRUFBQUQsR0FBQTtVQUFBLFVBQUE7QUFBQUgsdUJBQUFLLEVBQUE7VUFBQTtRQUNEO01BQUEsU0FBQUYsS0FBQTtBQUFBYixtQkFBQWMsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQWIsbUJBQUFlLEVBQUE7TUFBQTtBQUVBLFVBQUl2QixLQUFLLFVBQVUsS0FBS0EsS0FBSyxVQUFVLEVBQUVWLFlBQVk7QUFDcEQsU0FBQztVQUFDQTtRQUFVLElBQUlVLEtBQUssVUFBVTtNQUNoQyxPQUFPO0FBQ047TUFDRDtJQUNEO0FBRUEsWUFBQSxHQUFPZixtQkFBQXVDLGFBQVlqQixNQUFNO0VBQzFCLENBQUE7QUFBQSxTQUFBLFNBekJNRixpQkFBQW9CLEtBQUE7QUFBQSxXQUFBbkIsTUFBQUgsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOzs7NENDdEJMLGFBQWtDO0FBQ2xDLFVBQU07TUFBQ3NCO01BQVVDO01BQWFDO01BQWlCQztNQUFZQztJQUFZLElBQUkxRSxHQUFHQyxPQUFPQyxJQUFJO0FBRXpGLFFBQUlvRSxhQUFhLFVBQVUsQ0FBQ0MsZUFBZSxDQUFDRSxZQUFZO0FBQ3ZEO0lBQ0Q7QUFFQSxRQUFJRCxrQkFBa0JFLGNBQWM7QUFDbkM7SUFDRDtBQUVBLFVBQU1iLGVBQUEsTUFBK0JaLGdCQUFnQndCLFVBQVU7QUFFL0RwRCxrQkFBY3dDLFlBQVk7RUFDM0IsQ0FBQTtBQUFBLFdBZGdCYyxtQkFBQTtBQUFBLFdBQUFDLGtCQUFBN0IsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBMkI7QUFBQSxHQUFBLEVBY2I7IiwKICAibmFtZXMiOiBbIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgIlNlcGVyYXRvciIsICJQZXJpb2QiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInNhbml0aXplIiwgInN0cmluZyIsICJyZXBsYWNlIiwgImVsZW1lbnRXcmFwIiwgImlubmVyRWxlbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xhc3NOYW1lIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIlVzZXJMaXN0IiwgInVzZXJOYW1lcyIsICJGcmFnbWVudCIsICJtYXAiLCAidXNlck5hbWUiLCAiaW5kZXgiLCAiaHJlZiIsICJ1dGlsIiwgImdldFVybCIsICJjb25jYXQiLCAibGVuZ3RoIiwgImFwcGVuZEVsZW1lbnQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInRhZyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInByZXBlbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInF1ZXJ5Q29udHJpYnV0b3JzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBjY29udGludWUiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInBjZXhjbHVkZWdyb3VwIiwgInBjbGltaXQiLCAic21heGFnZSIsICJtYXhhZ2UiLCAiZGF0YSIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldENvbnRyaWJ1dG9ycyIsICJfcmVmMiIsICJwY2xpc3QiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJwYWdlcyIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAicGFnZSIsICJ2YWx1ZSIsICJjb250cmlidXRvcnMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAibmFtZSIsICJlcnIiLCAiZSIsICJmIiwgInVuaXF1ZUFycmF5IiwgIl94MyIsICJ3Z0FjdGlvbiIsICJ3Z0FydGljbGVJZCIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dQYWdlTmFtZSIsICJ3Z1JldmlzaW9uSWQiLCAicXVlcnlDb250cmlidXRvcyIsICJfcXVlcnlDb250cmlidXRvcyJdCn0K
