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
    }),
    "Other anonymous contributors": (0, import_ext_gadget.localize)({
      en: "other $1 anonymous contributor(s)",
      "zh-hans": "其他$1位匿名贡献者",
      "zh-hant": "其他$1位匿名貢獻者"
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
      className: [className, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
    }, innerElement);
  } else if (["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      id: className,
      className: [className, "noprint"]
    }, innerElement);
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id: className,
    className: [className, "noprint"]
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
//! src/QueryContributors/modules/queryContributors.ts
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
    const response = yield api.get(params);
    return response;
  });
  return function queryContributors2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
//! src/QueryContributors/modules/getContributors.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var getContributors = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (title) {
    let pclist = [];
    let pccontinue;
    const CACHE_KEY_PREFIX = "ext.gadget.QueryContributors_getContributors-";
    if (mw.storage.getObject(CACHE_KEY_PREFIX + title)) {
      pclist = mw.storage.getObject(CACHE_KEY_PREFIX + title);
      return (0, import_ext_gadget4.uniqueArray)(pclist);
    }
    while (true) {
      const data = yield queryContributors(title, pccontinue);
      try {
        var _data$query, _data$continue;
        if ((_data$query = data["query"]) !== null && _data$query !== void 0 && _data$query.pages) {
          var _iterator2 = _createForOfIteratorHelper(data["query"].pages), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const page = _step2.value;
              if (page !== null && page !== void 0 && page.contributors) {
                var _iterator3 = _createForOfIteratorHelper(page.contributors), _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    const contributor = _step3.value;
                    if (contributor !== null && contributor !== void 0 && contributor.name) {
                      pclist[pclist.length] = contributor.name;
                    }
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
              if (page !== null && page !== void 0 && page.anoncontributors) {
                pclist[pclist.length] = getMessage("Other anonymous contributors").replace("$1", "".concat(page.anoncontributors));
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else {
          break;
        }
        if ((_data$continue = data["continue"]) !== null && _data$continue !== void 0 && _data$continue.pccontinue) {
          ({
            pccontinue
          } = data["continue"]);
        } else {
          break;
        }
      } catch {
        break;
      }
    }
    mw.storage.setObject(CACHE_KEY_PREFIX + title, pclist, 10 * 60);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL29wdGlvbnMuanNvbiIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9hcHBlbmRFbGVtZW50LnRzeCIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL2FwaS50cyIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9xdWVyeUNvbnRyaWJ1dG9ycy50cyIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9nZXRDb250cmlidXRvcnMudHMiLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL1F1ZXJ5Q29udHJpYnV0b3JzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBzYW5pdGl6ZSA9IChzdHJpbmc6IHN0cmluZykgPT5cblx0c3RyaW5nXG5cdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cbmNvbnN0IGVsZW1lbnRXcmFwID0gKGlubmVyRWxlbWVudDogUmVhY3RFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgY2xhc3NOYW1lID0gJ2dhZGdldC1xdWVyeV9jb250cmlidXRvcnMnO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb25cblx0XHRcdFx0aWQ9e2NsYXNzTmFtZX1cblx0XHRcdFx0Y2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJywgJ25vcHJpbnQnXX1cblx0XHRcdD5cblx0XHRcdFx0e2lubmVyRWxlbWVudH1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9IGVsc2UgaWYgKFsndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJywgJ2dvbmdiaSddLmluY2x1ZGVzKHNraW4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGlkPXtjbGFzc05hbWV9IGNsYXNzTmFtZT17W2NsYXNzTmFtZSwgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdHtpbm5lckVsZW1lbnR9XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPXtjbGFzc05hbWV9IGNsYXNzTmFtZT17W2NsYXNzTmFtZSwgJ25vcHJpbnQnXX0+XG5cdFx0XHR7aW5uZXJFbGVtZW50fVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgVXNlckxpc3QgPSAodXNlck5hbWVzOiBzdHJpbmdbXSkgPT4gKFxuXHQ8PlxuXHRcdDw+e2dldE1lc3NhZ2UoJ0Jhc2VkIG9uIGNvbnRyaWJ1dGlvbnMgb2YnKX08Lz5cblx0XHR7dXNlck5hbWVzLm1hcCgodXNlck5hbWUsIGluZGV4KSA9PiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9e1xuXHRcdFx0XHRcdFx0dXNlck5hbWUuaW5jbHVkZXMoJz4nKVxuXHRcdFx0XHRcdFx0XHQ/IG13LnV0aWwuZ2V0VXJsKGBTcGVjaWFsOkdvVG9JbnRlcldpa2kvJHtzYW5pdGl6ZSh1c2VyTmFtZS5yZXBsYWNlKCc+JywgJzpVc2VyOicpKX1gKVxuXHRcdFx0XHRcdFx0XHQ6IG13LnV0aWwuZ2V0VXJsKGBVc2VyOiR7c2FuaXRpemUodXNlck5hbWUpfWApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGtleT17dXNlck5hbWV9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7dXNlck5hbWV9XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PD57aW5kZXggPCB1c2VyTmFtZXMubGVuZ3RoIC0gMSA/IGdldE1lc3NhZ2UoJ1NlcGVyYXRvcicpIDogZ2V0TWVzc2FnZSgnUGVyaW9kJyl9PC8+XG5cdFx0XHQ8Lz5cblx0XHQpKX1cblx0PC8+XG4pO1xuXG5jb25zdCBhcHBlbmRFbGVtZW50ID0gKHVzZXJOYW1lczogc3RyaW5nW10pOiB2b2lkID0+IHtcblx0aWYgKCF1c2VyTmFtZXMgfHwgIXVzZXJOYW1lcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0YWcgPSBlbGVtZW50V3JhcChVc2VyTGlzdCh1c2VyTmFtZXMpKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpWzBdPy5wcmVwZW5kKHRhZyk7XG59O1xuXG5leHBvcnQge2FwcGVuZEVsZW1lbnR9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnQmFzZWQgb24gY29udHJpYnV0aW9ucyBvZic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQmFzZWQgb24gY29udHJpYnV0aW9ucyBvZicsXG5cdFx0XHQnemgtaGFucyc6ICfln7rkuo7kuIvliJfnlKjmiLfnmoTotKHnjK7vvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5Z+65LqO5LiL5YiX5L2/55So6ICF55qE6LKi542777yaJyxcblx0XHR9KSxcblx0XHRTZXBlcmF0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLCAnLFxuXHRcdFx0J3poLWhhbnMnOiAn44CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+OAgScsXG5cdFx0fSksXG5cdFx0UGVyaW9kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHRcdCdPdGhlciBhbm9ueW1vdXMgY29udHJpYnV0b3JzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdvdGhlciAkMSBhbm9ueW1vdXMgY29udHJpYnV0b3IocyknLFxuXHRcdFx0J3poLWhhbnMnOiAn5YW25LuWJDHkvY3ljL/lkI3otKHnjK7ogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YW25LuWJDHkvY3ljL/lkI3osqLnjbvogIUnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1ZXJ5Q29udHJpYnV0b3JzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlDb250cmlidXRvcnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcsIHBjY29udGludWU/OiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUNvbnRyaWJ1dG9yc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdjb250cmlidXRvcnMnLFxuXHRcdHBjZXhjbHVkZWdyb3VwOiBbJ2JvdCddLFxuXHRcdHBjbGltaXQ6IDUwMDAsXG5cdFx0dGl0bGVzLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRpZiAocGNjb250aW51ZSkge1xuXHRcdHBhcmFtcy5wY2NvbnRpbnVlID0gcGNjb250aW51ZTtcblx0fVxuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCB7cXVlcnlDb250cmlidXRvcnN9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7cXVlcnlDb250cmlidXRvcnN9IGZyb20gJy4vcXVlcnlDb250cmlidXRvcnMnO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgZ2V0Q29udHJpYnV0b3JzID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcblx0bGV0IHBjbGlzdDogc3RyaW5nW10gPSBbXTtcblx0bGV0IHBjY29udGludWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRjb25zdCBDQUNIRV9LRVlfUFJFRklYID0gJ2V4dC5nYWRnZXQuUXVlcnlDb250cmlidXRvcnNfZ2V0Q29udHJpYnV0b3JzLSc7XG5cblx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB0aXRsZSkpIHtcblx0XHRwY2xpc3QgPSBtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdGl0bGUpIGFzIHN0cmluZ1tdO1xuXG5cdFx0cmV0dXJuIHVuaXF1ZUFycmF5KHBjbGlzdCk7XG5cdH1cblxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBxdWVyeUNvbnRyaWJ1dG9ycyh0aXRsZSwgcGNjb250aW51ZSk7XG5cblx0XHR0cnkge1xuXHRcdFx0aWYgKGRhdGFbJ3F1ZXJ5J10/LnBhZ2VzKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBkYXRhWydxdWVyeSddLnBhZ2VzIGFzIHtcblx0XHRcdFx0XHRhbm9uY29udHJpYnV0b3JzOiBudW1iZXI7XG5cdFx0XHRcdFx0Y29udHJpYnV0b3JzOiB7dXNlcmlkOiBudW1iZXI7IG5hbWU6IHN0cmluZ31bXTtcblx0XHRcdFx0fVtdKSB7XG5cdFx0XHRcdFx0aWYgKHBhZ2U/LmNvbnRyaWJ1dG9ycykge1xuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBjb250cmlidXRvciBvZiBwYWdlLmNvbnRyaWJ1dG9ycykge1xuXHRcdFx0XHRcdFx0XHRpZiAoY29udHJpYnV0b3I/Lm5hbWUpIHtcblx0XHRcdFx0XHRcdFx0XHRwY2xpc3RbcGNsaXN0Lmxlbmd0aF0gPSBjb250cmlidXRvci5uYW1lO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHBhZ2U/LmFub25jb250cmlidXRvcnMpIHtcblx0XHRcdFx0XHRcdHBjbGlzdFtwY2xpc3QubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ090aGVyIGFub255bW91cyBjb250cmlidXRvcnMnKS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHQnJDEnLFxuXHRcdFx0XHRcdFx0XHRgJHtwYWdlLmFub25jb250cmlidXRvcnN9YFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZGF0YVsnY29udGludWUnXT8ucGNjb250aW51ZSkge1xuXHRcdFx0XHQoe3BjY29udGludWV9ID0gZGF0YVsnY29udGludWUnXSBhcyB7cGNjb250aW51ZTogc3RyaW5nfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdC8vIENhY2hlIGZvciAxMCBtaW51dGVzXG5cdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB0aXRsZSwgcGNsaXN0LCAxMCAqIDYwKTtcblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkocGNsaXN0KTtcbn07XG5cbmV4cG9ydCB7Z2V0Q29udHJpYnV0b3JzfTtcbiIsICJpbXBvcnQge2FwcGVuZEVsZW1lbnR9IGZyb20gJy4vbW9kdWxlcy9hcHBlbmRFbGVtZW50JztcbmltcG9ydCB7Z2V0Q29udHJpYnV0b3JzfSBmcm9tICcuL21vZHVsZXMvZ2V0Q29udHJpYnV0b3JzJztcblxuKGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5Q29udHJpYnV0b3MoKSB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dBcnRpY2xlSWQsIHdnQ3VyUmV2aXNpb25JZCwgd2dQYWdlTmFtZSwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dBcnRpY2xlSWQgfHwgIXdnUGFnZU5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAod2dDdXJSZXZpc2lvbklkID4gd2dSZXZpc2lvbklkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udHJpYnV0b3JzOiBzdHJpbmdbXSA9IGF3YWl0IGdldENvbnRyaWJ1dG9ycyh3Z1BhZ2VOYW1lKTtcblxuXHRhcHBlbmRFbGVtZW50KGNvbnRyaWJ1dG9ycyk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QkFBQWMsRUFBQUQsR0FBQTtVQUFBLFVBQUE7QUFBQWIsdUJBQUFlLEVBQUE7VUFBQTtRQUNELE9BQU87QUFDTjtRQUNEO0FBRUEsYUFBQWpCLGlCQUFJRixLQUFLLFVBQVUsT0FBQSxRQUFBRSxtQkFBQSxVQUFmQSxlQUFrQjFCLFlBQVk7QUFDakMsV0FBQztZQUFDQTtVQUFVLElBQUl3QixLQUFLLFVBQVU7UUFDaEMsT0FBTztBQUNOO1FBQ0Q7TUFDRCxRQUFRO0FBQ1A7TUFDRDtJQUNEO0FBR0F6RCxPQUFHc0QsUUFBUXdCLFVBQVV6QixtQkFBbUJGLE9BQU9DLFFBQVEsS0FBSyxFQUFFO0FBRTlELFlBQUEsR0FBT0osbUJBQUFRLGFBQVlKLE1BQU07RUFDMUIsQ0FBQTtBQUFBLFNBQUEsU0F0RE1ILGlCQUFBOEIsS0FBQTtBQUFBLFdBQUE3QixNQUFBSixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7Ozs0Q0NETCxhQUFrQztBQUNsQyxVQUFNO01BQUNpQztNQUFVQztNQUFhQztNQUFpQkM7TUFBWUM7SUFBWSxJQUFJcEYsR0FBR0MsT0FBT0MsSUFBSTtBQUV6RixRQUFJOEUsYUFBYSxVQUFVLENBQUNDLGVBQWUsQ0FBQ0UsWUFBWTtBQUN2RDtJQUNEO0FBRUEsUUFBSUQsa0JBQWtCRSxjQUFjO0FBQ25DO0lBQ0Q7QUFFQSxVQUFNZixlQUFBLE1BQStCcEIsZ0JBQWdCa0MsVUFBVTtBQUUvRDlELGtCQUFjZ0QsWUFBWTtFQUMzQixDQUFBO0FBQUEsV0FkZ0JnQixtQkFBQTtBQUFBLFdBQUFDLGtCQUFBeEMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBc0M7QUFBQSxHQUFBLEVBY2I7IiwKICAibmFtZXMiOiBbIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgIlNlcGVyYXRvciIsICJQZXJpb2QiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInNhbml0aXplIiwgInN0cmluZyIsICJyZXBsYWNlIiwgImVsZW1lbnRXcmFwIiwgImlubmVyRWxlbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xhc3NOYW1lIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIlVzZXJMaXN0IiwgInVzZXJOYW1lcyIsICJGcmFnbWVudCIsICJtYXAiLCAidXNlck5hbWUiLCAiaW5kZXgiLCAiaHJlZiIsICJ1dGlsIiwgImdldFVybCIsICJjb25jYXQiLCAibGVuZ3RoIiwgImFwcGVuZEVsZW1lbnQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInRhZyIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInByZXBlbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAicXVlcnlDb250cmlidXRvcnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZXMiLCAicGNjb250aW51ZSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicGNleGNsdWRlZ3JvdXAiLCAicGNsaW1pdCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJyZXNwb25zZSIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJnZXRDb250cmlidXRvcnMiLCAiX3JlZjIiLCAidGl0bGUiLCAicGNsaXN0IiwgIkNBQ0hFX0tFWV9QUkVGSVgiLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAidW5pcXVlQXJyYXkiLCAiZGF0YSIsICJfZGF0YSRxdWVyeSIsICJfZGF0YSRjb250aW51ZSIsICJwYWdlcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJwYWdlIiwgInZhbHVlIiwgImNvbnRyaWJ1dG9ycyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJjb250cmlidXRvciIsICJuYW1lIiwgImVyciIsICJlIiwgImYiLCAiYW5vbmNvbnRyaWJ1dG9ycyIsICJzZXRPYmplY3QiLCAiX3gzIiwgIndnQWN0aW9uIiwgIndnQXJ0aWNsZUlkIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1BhZ2VOYW1lIiwgIndnUmV2aXNpb25JZCIsICJxdWVyeUNvbnRyaWJ1dG9zIiwgIl9xdWVyeUNvbnRyaWJ1dG9zIl0KfQo=
