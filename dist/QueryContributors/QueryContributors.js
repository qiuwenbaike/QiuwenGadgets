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
var elementId = "gadget-query_contributors";
var mountPointSelector = "#footer-info,.page-info";
var version = "1.0";
//! src/QueryContributors/modules/components/react.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
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
//! src/QueryContributors/modules/util/sanitize.ts
var sanitize = (string) => {
  return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
};
//! src/QueryContributors/modules/components/react.tsx
var FooterNotice = ({
  id = elementId,
  children = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)
}) => {
  const {
    skin
  } = mw.config.get();
  return /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, skin === "citizen" ? /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
    id,
    className: [id, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
  }, children) : ["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info") ? /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
    id,
    className: [id, "noprint"]
  }, children) : /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id,
    className: [id, "noprint"]
  }, children));
};
var UserList = ({
  userNames
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, getMessage("Based on contributions of")), userNames.map((userName, index) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  href: userName.includes(">") ? mw.util.getUrl("Special:GoToInterWiki/".concat(sanitize(userName.replace(">", ":User:")))) : mw.util.getUrl("User:".concat(sanitize(userName))),
  key: userName
}, userName), /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, index < userNames.length - 1 ? getMessage("Seperator") : getMessage("Period")))));
var FooterUserList = ({
  userNames
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, null, /* @__PURE__ */ import_ext_gadget2.default.createElement(UserList, {
  userNames
}));
//! src/QueryContributors/modules/appendElement.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.JSX"), 1);
var appendFooterNotice = (element) => {
  const mountPoint = document.querySelector(mountPointSelector);
  if (mountPoint) {
    mountPoint.prepend(element);
  }
};
var appendElement = (userNames) => {
  if (!userNames || !userNames.length) {
    return;
  }
  appendFooterNotice(/* @__PURE__ */ import_ext_gadget3.default.createElement(FooterUserList, {
    userNames
  }));
};
//! src/QueryContributors/modules/api.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var api = (0, import_ext_gadget4.initMwApi)("QueryContributors/".concat(version));
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
//! src/QueryContributors/modules/util/getContributors.ts
var import_ext_gadget5 = require("ext.gadget.Util");
var getContributors = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (title) {
    let pclist = [];
    let pccontinue;
    const CACHE_KEY_PREFIX = "ext.gadget.QueryContributors_getContributors-";
    if (mw.storage.getObject(CACHE_KEY_PREFIX + title)) {
      pclist = mw.storage.getObject(CACHE_KEY_PREFIX + title);
      return (0, import_ext_gadget5.uniqueArray)(pclist);
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
    return (0, import_ext_gadget5.uniqueArray)(pclist);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL29wdGlvbnMuanNvbiIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9jb21wb25lbnRzL3JlYWN0LnRzeCIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3V0aWwvc2FuaXRpemUudHMiLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvYXBwZW5kRWxlbWVudC50c3giLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3F1ZXJ5Q29udHJpYnV0b3JzLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3V0aWwvZ2V0Q29udHJpYnV0b3JzLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9RdWVyeUNvbnRyaWJ1dG9ycy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImVsZW1lbnRJZFwiOiBcImdhZGdldC1xdWVyeV9jb250cmlidXRvcnNcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7c2FuaXRpemV9IGZyb20gJy4uL3V0aWwvc2FuaXRpemUnO1xuXG5pbnRlcmZhY2UgRm9vdGVyTm90aWNlUHJvcHMge1xuXHRpZD86IHN0cmluZztcblx0Y2hpbGRyZW4/OiBSZWFjdEVsZW1lbnQ7XG59XG5cbmNvbnN0IEZvb3Rlck5vdGljZSA9ICh7aWQgPSBPUFRJT05TLmVsZW1lbnRJZCwgY2hpbGRyZW4gPSA8PjwvPn06IEZvb3Rlck5vdGljZVByb3BzKSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHR7c2tpbiA9PT0gJ2NpdGl6ZW4nID8gKFxuXHRcdFx0XHQ8c2VjdGlvbiBpZD17aWR9IGNsYXNzTmFtZT17W2lkLCAncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJywgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQpIDogWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSA/IChcblx0XHRcdFx0PGxpIGlkPXtpZH0gY2xhc3NOYW1lPXtbaWQsICdub3ByaW50J119PlxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PC9saT5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9e1tpZCwgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5pbnRlcmZhY2UgVXNlckxpc3RQcm9wcyB7XG5cdHVzZXJOYW1lczogc3RyaW5nW107XG59XG5cbmNvbnN0IFVzZXJMaXN0ID0gKHt1c2VyTmFtZXN9OiBVc2VyTGlzdFByb3BzKSA9PiAoXG5cdDw+XG5cdFx0PD57Z2V0TWVzc2FnZSgnQmFzZWQgb24gY29udHJpYnV0aW9ucyBvZicpfTwvPlxuXHRcdHt1c2VyTmFtZXMubWFwKCh1c2VyTmFtZSwgaW5kZXgpID0+IChcblx0XHRcdDw+XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0aHJlZj17XG5cdFx0XHRcdFx0XHR1c2VyTmFtZS5pbmNsdWRlcygnPicpXG5cdFx0XHRcdFx0XHRcdD8gbXcudXRpbC5nZXRVcmwoYFNwZWNpYWw6R29Ub0ludGVyV2lraS8ke3Nhbml0aXplKHVzZXJOYW1lLnJlcGxhY2UoJz4nLCAnOlVzZXI6JykpfWApXG5cdFx0XHRcdFx0XHRcdDogbXcudXRpbC5nZXRVcmwoYFVzZXI6JHtzYW5pdGl6ZSh1c2VyTmFtZSl9YClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0a2V5PXt1c2VyTmFtZX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt1c2VyTmFtZX1cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8PntpbmRleCA8IHVzZXJOYW1lcy5sZW5ndGggLSAxID8gZ2V0TWVzc2FnZSgnU2VwZXJhdG9yJykgOiBnZXRNZXNzYWdlKCdQZXJpb2QnKX08Lz5cblx0XHRcdDwvPlxuXHRcdCkpfVxuXHQ8Lz5cbik7XG5cbmNvbnN0IEZvb3RlclVzZXJMaXN0ID0gKHt1c2VyTmFtZXN9OiBVc2VyTGlzdFByb3BzKSA9PiAoXG5cdDxGb290ZXJOb3RpY2U+XG5cdFx0PFVzZXJMaXN0IHVzZXJOYW1lcz17dXNlck5hbWVzfSAvPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmV4cG9ydCB7Rm9vdGVyVXNlckxpc3R9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnQmFzZWQgb24gY29udHJpYnV0aW9ucyBvZic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQmFzZWQgb24gY29udHJpYnV0aW9ucyBvZicsXG5cdFx0XHQnemgtaGFucyc6ICfln7rkuo7kuIvliJfnlKjmiLfnmoTotKHnjK7vvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5Z+65LqO5LiL5YiX5L2/55So6ICF55qE6LKi542777yaJyxcblx0XHR9KSxcblx0XHRTZXBlcmF0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLCAnLFxuXHRcdFx0J3poLWhhbnMnOiAn44CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+OAgScsXG5cdFx0fSksXG5cdFx0UGVyaW9kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHRcdCdPdGhlciBhbm9ueW1vdXMgY29udHJpYnV0b3JzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdvdGhlciAkMSBhbm9ueW1vdXMgY29udHJpYnV0b3IocyknLFxuXHRcdFx0J3poLWhhbnMnOiAn5YW25LuWJDHkvY3ljL/lkI3otKHnjK7ogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YW25LuWJDHkvY3ljL/lkI3osqLnjbvogIUnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBzYW5pdGl6ZSA9IChzdHJpbmc6IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gc3RyaW5nXG5cdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59O1xuXG5leHBvcnQge3Nhbml0aXplfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0Zvb3RlclVzZXJMaXN0fSBmcm9tICcuL2NvbXBvbmVudHMvcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcblxuY29uc3QgYXBwZW5kRm9vdGVyTm90aWNlID0gKGVsZW1lbnQ6IEVsZW1lbnQpID0+IHtcblx0Y29uc3QgbW91bnRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblxuXHRpZiAobW91bnRQb2ludCkge1xuXHRcdG1vdW50UG9pbnQucHJlcGVuZChlbGVtZW50KTtcblx0fVxufTtcblxuY29uc3QgYXBwZW5kRWxlbWVudCA9ICh1c2VyTmFtZXM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG5cdGlmICghdXNlck5hbWVzIHx8ICF1c2VyTmFtZXMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXBwZW5kRm9vdGVyTm90aWNlKDxGb290ZXJVc2VyTGlzdCB1c2VyTmFtZXM9e3VzZXJOYW1lc30gLz4pO1xufTtcblxuZXhwb3J0IHthcHBlbmRFbGVtZW50fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1ZXJ5Q29udHJpYnV0b3JzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlDb250cmlidXRvcnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcsIHBjY29udGludWU/OiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUNvbnRyaWJ1dG9yc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdjb250cmlidXRvcnMnLFxuXHRcdHBjZXhjbHVkZWdyb3VwOiBbJ2JvdCddLFxuXHRcdHBjbGltaXQ6IDUwMDAsXG5cdFx0dGl0bGVzLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRpZiAocGNjb250aW51ZSkge1xuXHRcdHBhcmFtcy5wY2NvbnRpbnVlID0gcGNjb250aW51ZTtcblx0fVxuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCB7cXVlcnlDb250cmlidXRvcnN9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3F1ZXJ5Q29udHJpYnV0b3JzfSBmcm9tICcuLi9xdWVyeUNvbnRyaWJ1dG9ycyc7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBnZXRDb250cmlidXRvcnMgPSBhc3luYyAodGl0bGU6IHN0cmluZykgPT4ge1xuXHRsZXQgcGNsaXN0OiBzdHJpbmdbXSA9IFtdO1xuXHRsZXQgcGNjb250aW51ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGNvbnN0IENBQ0hFX0tFWV9QUkVGSVggPSAnZXh0LmdhZGdldC5RdWVyeUNvbnRyaWJ1dG9yc19nZXRDb250cmlidXRvcnMtJztcblxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHRpdGxlKSkge1xuXHRcdHBjbGlzdCA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB0aXRsZSkgYXMgc3RyaW5nW107XG5cblx0XHRyZXR1cm4gdW5pcXVlQXJyYXkocGNsaXN0KTtcblx0fVxuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHF1ZXJ5Q29udHJpYnV0b3JzKHRpdGxlLCBwY2NvbnRpbnVlKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRpZiAoZGF0YVsncXVlcnknXT8ucGFnZXMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIGRhdGFbJ3F1ZXJ5J10ucGFnZXMgYXMge1xuXHRcdFx0XHRcdGFub25jb250cmlidXRvcnM6IG51bWJlcjtcblx0XHRcdFx0XHRjb250cmlidXRvcnM6IHt1c2VyaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nfVtdO1xuXHRcdFx0XHR9W10pIHtcblx0XHRcdFx0XHRpZiAocGFnZT8uY29udHJpYnV0b3JzKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGNvbnRyaWJ1dG9yIG9mIHBhZ2UuY29udHJpYnV0b3JzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChjb250cmlidXRvcj8ubmFtZSkge1xuXHRcdFx0XHRcdFx0XHRcdHBjbGlzdFtwY2xpc3QubGVuZ3RoXSA9IGNvbnRyaWJ1dG9yLm5hbWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocGFnZT8uYW5vbmNvbnRyaWJ1dG9ycykge1xuXHRcdFx0XHRcdFx0cGNsaXN0W3BjbGlzdC5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnT3RoZXIgYW5vbnltb3VzIGNvbnRyaWJ1dG9ycycpLnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRcdCckMScsXG5cdFx0XHRcdFx0XHRcdGAke3BhZ2UuYW5vbmNvbnRyaWJ1dG9yc31gXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChkYXRhWydjb250aW51ZSddPy5wY2NvbnRpbnVlKSB7XG5cdFx0XHRcdCh7cGNjb250aW51ZX0gPSBkYXRhWydjb250aW51ZSddIGFzIHtwY2NvbnRpbnVlOiBzdHJpbmd9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2FjaGUgZm9yIDEwIG1pbnV0ZXNcblx0bXcuc3RvcmFnZS5zZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHRpdGxlLCBwY2xpc3QsIDEwICogNjApO1xuXG5cdHJldHVybiB1bmlxdWVBcnJheShwY2xpc3QpO1xufTtcblxuZXhwb3J0IHtnZXRDb250cmlidXRvcnN9O1xuIiwgImltcG9ydCB7YXBwZW5kRWxlbWVudH0gZnJvbSAnLi9tb2R1bGVzL2FwcGVuZEVsZW1lbnQnO1xuaW1wb3J0IHtnZXRDb250cmlidXRvcnN9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dldENvbnRyaWJ1dG9ycyc7XG5cbihhc3luYyBmdW5jdGlvbiBxdWVyeUNvbnRyaWJ1dG9zKCkge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnQXJ0aWNsZUlkLCB3Z0N1clJldmlzaW9uSWQsIHdnUGFnZU5hbWUsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnQXJ0aWNsZUlkIHx8ICF3Z1BhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHdnQ3VyUmV2aXNpb25JZCA+IHdnUmV2aXNpb25JZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRyaWJ1dG9yczogc3RyaW5nW10gPSBhd2FpdCBnZXRDb250cmlidXRvcnMod2dQYWdlTmFtZSk7XG5cblx0YXBwZW5kRWxlbWVudChjb250cmlidXRvcnMpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTtBQUNiLElBQUFDLHFCQUFzQjtBQUN0QixJQUFBQyxVQUFXOztBQ0ZaLElBQUFDLHFCQUFrQ0MsUUFBQUMsUUFBQSxnQkFBQSxHQUFBLENBQUE7O0FD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RUFjYjsiLAogICJuYW1lcyI6IFsiZWxlbWVudElkIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgIlNlcGVyYXRvciIsICJQZXJpb2QiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInNhbml0aXplIiwgInN0cmluZyIsICJyZXBsYWNlIiwgIkZvb3Rlck5vdGljZSIsICJpZCIsICJjaGlsZHJlbiIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIlVzZXJMaXN0IiwgInVzZXJOYW1lcyIsICJtYXAiLCAidXNlck5hbWUiLCAiaW5kZXgiLCAiaHJlZiIsICJ1dGlsIiwgImdldFVybCIsICJjb25jYXQiLCAibGVuZ3RoIiwgIkZvb3RlclVzZXJMaXN0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcHBlbmRGb290ZXJOb3RpY2UiLCAiZWxlbWVudCIsICJtb3VudFBvaW50IiwgInByZXBlbmQiLCAiYXBwZW5kRWxlbWVudCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJxdWVyeUNvbnRyaWJ1dG9ycyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJwY2NvbnRpbnVlIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJwY2V4Y2x1ZGVncm91cCIsICJwY2xpbWl0IiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3BvbnNlIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImdldENvbnRyaWJ1dG9ycyIsICJfcmVmMiIsICJ0aXRsZSIsICJwY2xpc3QiLCAiQ0FDSEVfS0VZX1BSRUZJWCIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJ1bmlxdWVBcnJheSIsICJkYXRhIiwgIl9kYXRhJHF1ZXJ5IiwgIl9kYXRhJGNvbnRpbnVlIiwgInBhZ2VzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInBhZ2UiLCAidmFsdWUiLCAiY29udHJpYnV0b3JzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImNvbnRyaWJ1dG9yIiwgIm5hbWUiLCAiZXJyIiwgImUiLCAiZiIsICJhbm9uY29udHJpYnV0b3JzIiwgInNldE9iamVjdCIsICJfeDMiLCAid2dBY3Rpb24iLCAid2dBcnRpY2xlSWQiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUGFnZU5hbWUiLCAid2dSZXZpc2lvbklkIiwgInF1ZXJ5Q29udHJpYnV0b3MiLCAiX3F1ZXJ5Q29udHJpYnV0b3MiXQp9Cg==
