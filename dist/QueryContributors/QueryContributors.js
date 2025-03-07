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
  children = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)
}) => {
  const {
    skin
  } = mw.config.get();
  const id = elementId;
  const className = elementId;
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
      id,
      className: [className, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
    }, children);
  } else if (["gongbi", "vector", "vector-2022"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      id,
      className: [className, "noprint"]
    }, children);
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id,
    className: [className, "noprint"]
  }, children);
};
var UserList = ({
  userNames
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, getMessage("Based on contributions of")), userNames.map((userName, index) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  href: /(>|&gt;)/.test(userName) ? mw.util.getUrl("Special:GoToInterWiki/".concat(sanitize(userName.replace(/(>|&gt;)/, ":User:")))) : mw.util.getUrl("User:".concat(sanitize(userName))),
  key: userName
}, userName), /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, index < userNames.length - 1 ? getMessage("Seperator") : getMessage("Period")))));
var FooterUserList = ({
  userNames
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, null, /* @__PURE__ */ import_ext_gadget2.default.createElement(UserList, {
  userNames
}));
//! src/QueryContributors/modules/appendElement.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.JSX"), 1);
var appendElement = (userNames) => {
  if (!userNames || !userNames.length) {
    return;
  }
  const mountPoint = document.querySelector(mountPointSelector);
  if (!mountPoint) {
    return;
  }
  mountPoint.prepend(/* @__PURE__ */ import_ext_gadget3.default.createElement(FooterUserList, {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL1F1ZXJ5Q29udHJpYnV0b3JzL29wdGlvbnMuanNvbiIsICIuLi8uLi9zcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9jb21wb25lbnRzL3JlYWN0LnRzeCIsICIuLi8uLi9zcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9pMThuLnRzIiwgIi4uLy4uL3NyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3V0aWwvc2FuaXRpemUudHMiLCAiLi4vLi4vc3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvYXBwZW5kRWxlbWVudC50c3giLCAiLi4vLi4vc3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvYXBpLnRzIiwgIi4uLy4uL3NyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3F1ZXJ5Q29udHJpYnV0b3JzLnRzIiwgIi4uLy4uL3NyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3V0aWwvZ2V0Q29udHJpYnV0b3JzLnRzIiwgIi4uLy4uL3NyYy9RdWVyeUNvbnRyaWJ1dG9ycy9RdWVyeUNvbnRyaWJ1dG9ycy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImVsZW1lbnRJZFwiOiBcImdhZGdldC1xdWVyeV9jb250cmlidXRvcnNcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7c2FuaXRpemV9IGZyb20gJy4uL3V0aWwvc2FuaXRpemUnO1xuXG5pbnRlcmZhY2UgRm9vdGVyTm90aWNlUHJvcHMge1xuXHRjaGlsZHJlbj86IFJlYWN0RWxlbWVudDtcbn1cblxuY29uc3QgRm9vdGVyTm90aWNlID0gKHtjaGlsZHJlbiA9IDw+PC8+fTogRm9vdGVyTm90aWNlUHJvcHMpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpZCA9IE9QVElPTlMuZWxlbWVudElkO1xuXHRjb25zdCBjbGFzc05hbWUgPSBPUFRJT05TLmVsZW1lbnRJZDtcblxuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGlkPXtpZH0gY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJywgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9IGVsc2UgaWYgKFsnZ29uZ2JpJywgJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMiddLmluY2x1ZGVzKHNraW4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGlkPXtpZH0gY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAnbm9wcmludCddfT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9saT5cblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAnbm9wcmludCddfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmludGVyZmFjZSBVc2VyTGlzdFByb3BzIHtcblx0dXNlck5hbWVzOiBzdHJpbmdbXTtcbn1cblxuY29uc3QgVXNlckxpc3QgPSAoe3VzZXJOYW1lc306IFVzZXJMaXN0UHJvcHMpID0+IChcblx0PD5cblx0XHQ8PntnZXRNZXNzYWdlKCdCYXNlZCBvbiBjb250cmlidXRpb25zIG9mJyl9PC8+XG5cdFx0e3VzZXJOYW1lcy5tYXAoKHVzZXJOYW1lLCBpbmRleCkgPT4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PGFcblx0XHRcdFx0XHRocmVmPXtcblx0XHRcdFx0XHRcdC8oPnwmZ3Q7KS8udGVzdCh1c2VyTmFtZSlcblx0XHRcdFx0XHRcdFx0PyBtdy51dGlsLmdldFVybChcblx0XHRcdFx0XHRcdFx0XHRcdGBTcGVjaWFsOkdvVG9JbnRlcldpa2kvJHtzYW5pdGl6ZSh1c2VyTmFtZS5yZXBsYWNlKC8oPnwmZ3Q7KS8sICc6VXNlcjonKSl9YFxuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0OiBtdy51dGlsLmdldFVybChgVXNlcjoke3Nhbml0aXplKHVzZXJOYW1lKX1gKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRrZXk9e3VzZXJOYW1lfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3VzZXJOYW1lfVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDw+e2luZGV4IDwgdXNlck5hbWVzLmxlbmd0aCAtIDEgPyBnZXRNZXNzYWdlKCdTZXBlcmF0b3InKSA6IGdldE1lc3NhZ2UoJ1BlcmlvZCcpfTwvPlxuXHRcdFx0PC8+XG5cdFx0KSl9XG5cdDwvPlxuKTtcblxuY29uc3QgRm9vdGVyVXNlckxpc3QgPSAoe3VzZXJOYW1lc306IFVzZXJMaXN0UHJvcHMpID0+IChcblx0PEZvb3Rlck5vdGljZT5cblx0XHQ8VXNlckxpc3QgdXNlck5hbWVzPXt1c2VyTmFtZXN9IC8+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuZXhwb3J0IHtGb290ZXJVc2VyTGlzdH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdCYXNlZCBvbiBjb250cmlidXRpb25zIG9mJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYXNlZCBvbiBjb250cmlidXRpb25zIG9mJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WfuuS6juS4i+WIl+eUqOaIt+eahOi0oeeMru+8micsXG5cdFx0XHQnemgtaGFudCc6ICfln7rkuo7kuIvliJfkvb/nlKjogIXnmoTosqLnjbvvvJonLFxuXHRcdH0pLFxuXHRcdFNlcGVyYXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcsICcsXG5cdFx0XHQnemgtaGFucyc6ICfjgIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn44CBJyxcblx0XHR9KSxcblx0XHRQZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdFx0J090aGVyIGFub255bW91cyBjb250cmlidXRvcnMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ290aGVyICQxIGFub255bW91cyBjb250cmlidXRvcihzKScsXG5cdFx0XHQnemgtaGFucyc6ICflhbbku5YkMeS9jeWMv+WQjei0oeeMruiAhScsXG5cdFx0XHQnemgtaGFudCc6ICflhbbku5YkMeS9jeWMv+WQjeiyoueNu+iAhScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IHNhbml0aXplID0gKHN0cmluZzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBzdHJpbmdcblx0XHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuXHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0LnJlcGxhY2UoLycvZywgJyZhcG9zOycpXG5cdFx0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn07XG5cbmV4cG9ydCB7c2FuaXRpemV9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Rm9vdGVyVXNlckxpc3R9IGZyb20gJy4vY29tcG9uZW50cy9yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuXG5jb25zdCBhcHBlbmRFbGVtZW50ID0gKHVzZXJOYW1lczogc3RyaW5nW10pOiB2b2lkID0+IHtcblx0aWYgKCF1c2VyTmFtZXMgfHwgIXVzZXJOYW1lcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBtb3VudFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoIW1vdW50UG9pbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtb3VudFBvaW50LnByZXBlbmQoPEZvb3RlclVzZXJMaXN0IHVzZXJOYW1lcz17dXNlck5hbWVzfSAvPik7XG59O1xuXG5leHBvcnQge2FwcGVuZEVsZW1lbnR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVlcnlDb250cmlidXRvcnMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBxdWVyeUNvbnRyaWJ1dG9ycyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZywgcGNjb250aW51ZT86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5Q29udHJpYnV0b3JzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2NvbnRyaWJ1dG9ycycsXG5cdFx0cGNleGNsdWRlZ3JvdXA6IFsnYm90J10sXG5cdFx0cGNsaW1pdDogNTAwMCxcblx0XHR0aXRsZXMsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXG5cdGlmIChwY2NvbnRpbnVlKSB7XG5cdFx0cGFyYW1zLnBjY29udGludWUgPSBwY2NvbnRpbnVlO1xuXHR9XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHtxdWVyeUNvbnRyaWJ1dG9yc307XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7cXVlcnlDb250cmlidXRvcnN9IGZyb20gJy4uL3F1ZXJ5Q29udHJpYnV0b3JzJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGdldENvbnRyaWJ1dG9ycyA9IGFzeW5jICh0aXRsZTogc3RyaW5nKSA9PiB7XG5cdGxldCBwY2xpc3Q6IHN0cmluZ1tdID0gW107XG5cdGxldCBwY2NvbnRpbnVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0Y29uc3QgQ0FDSEVfS0VZX1BSRUZJWCA9ICdleHQuZ2FkZ2V0LlF1ZXJ5Q29udHJpYnV0b3JzX2dldENvbnRyaWJ1dG9ycy0nO1xuXG5cdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdGl0bGUpKSB7XG5cdFx0cGNsaXN0ID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHRpdGxlKSBhcyBzdHJpbmdbXTtcblxuXHRcdHJldHVybiB1bmlxdWVBcnJheShwY2xpc3QpO1xuXHR9XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcXVlcnlDb250cmlidXRvcnModGl0bGUsIHBjY29udGludWUpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGlmIChkYXRhWydxdWVyeSddPy5wYWdlcykge1xuXHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgZGF0YVsncXVlcnknXS5wYWdlcyBhcyB7XG5cdFx0XHRcdFx0YW5vbmNvbnRyaWJ1dG9yczogbnVtYmVyO1xuXHRcdFx0XHRcdGNvbnRyaWJ1dG9yczoge3VzZXJpZDogbnVtYmVyOyBuYW1lOiBzdHJpbmd9W107XG5cdFx0XHRcdH1bXSkge1xuXHRcdFx0XHRcdGlmIChwYWdlPy5jb250cmlidXRvcnMpIHtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgY29udHJpYnV0b3Igb2YgcGFnZS5jb250cmlidXRvcnMpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGNvbnRyaWJ1dG9yPy5uYW1lKSB7XG5cdFx0XHRcdFx0XHRcdFx0cGNsaXN0W3BjbGlzdC5sZW5ndGhdID0gY29udHJpYnV0b3IubmFtZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChwYWdlPy5hbm9uY29udHJpYnV0b3JzKSB7XG5cdFx0XHRcdFx0XHRwY2xpc3RbcGNsaXN0Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdPdGhlciBhbm9ueW1vdXMgY29udHJpYnV0b3JzJykucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0JyQxJyxcblx0XHRcdFx0XHRcdFx0YCR7cGFnZS5hbm9uY29udHJpYnV0b3JzfWBcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0aWYgKGRhdGFbJ2NvbnRpbnVlJ10/LnBjY29udGludWUpIHtcblx0XHRcdFx0KHtwY2NvbnRpbnVlfSA9IGRhdGFbJ2NvbnRpbnVlJ10gYXMge3BjY29udGludWU6IHN0cmluZ30pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHQvLyBDYWNoZSBmb3IgMTAgbWludXRlc1xuXHRtdy5zdG9yYWdlLnNldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdGl0bGUsIHBjbGlzdCwgMTAgKiA2MCk7XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KHBjbGlzdCk7XG59O1xuXG5leHBvcnQge2dldENvbnRyaWJ1dG9yc307XG4iLCAiaW1wb3J0IHthcHBlbmRFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvYXBwZW5kRWxlbWVudCc7XG5pbXBvcnQge2dldENvbnRyaWJ1dG9yc30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2V0Q29udHJpYnV0b3JzJztcblxuKGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5Q29udHJpYnV0b3MoKSB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dBcnRpY2xlSWQsIHdnQ3VyUmV2aXNpb25JZCwgd2dQYWdlTmFtZSwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dBcnRpY2xlSWQgfHwgIXdnUGFnZU5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAod2dDdXJSZXZpc2lvbklkID4gd2dSZXZpc2lvbklkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udHJpYnV0b3JzOiBzdHJpbmdbXSA9IGF3YWl0IGdldENvbnRyaWJ1dG9ycyh3Z1BhZ2VOYW1lKTtcblxuXHRhcHBlbmRFbGVtZW50KGNvbnRyaWJ1dG9ycyk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhO0FBQ2IsSUFBQUMscUJBQXNCO0FB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QUMsU0FBQTtFQUFBO0FBQUEsU0FBQXNDO0FBQUEsR0FBQSxFQWNiOyIsCiAgIm5hbWVzIjogWyJlbGVtZW50SWQiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiU2VwZXJhdG9yIiwgIlBlcmlvZCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic2FuaXRpemUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiRm9vdGVyTm90aWNlIiwgImNoaWxkcmVuIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaWQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiVXNlckxpc3QiLCAidXNlck5hbWVzIiwgIm1hcCIsICJ1c2VyTmFtZSIsICJpbmRleCIsICJocmVmIiwgInRlc3QiLCAidXRpbCIsICJnZXRVcmwiLCAiY29uY2F0IiwgImxlbmd0aCIsICJGb290ZXJVc2VyTGlzdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBwZW5kRWxlbWVudCIsICJtb3VudFBvaW50IiwgInByZXBlbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFwaSIsICJpbml0TXdBcGkiLCAicXVlcnlDb250cmlidXRvcnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZXMiLCAicGNjb250aW51ZSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicGNleGNsdWRlZ3JvdXAiLCAicGNsaW1pdCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJyZXNwb25zZSIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJnZXRDb250cmlidXRvcnMiLCAiX3JlZjIiLCAidGl0bGUiLCAicGNsaXN0IiwgIkNBQ0hFX0tFWV9QUkVGSVgiLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAidW5pcXVlQXJyYXkiLCAiZGF0YSIsICJfZGF0YSRxdWVyeSIsICJfZGF0YSRjb250aW51ZSIsICJwYWdlcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJwYWdlIiwgInZhbHVlIiwgImNvbnRyaWJ1dG9ycyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJjb250cmlidXRvciIsICJuYW1lIiwgImVyciIsICJlIiwgImYiLCAiYW5vbmNvbnRyaWJ1dG9ycyIsICJzZXRPYmplY3QiLCAiX3gzIiwgIndnQWN0aW9uIiwgIndnQXJ0aWNsZUlkIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1BhZ2VOYW1lIiwgIndnUmV2aXNpb25JZCIsICJxdWVyeUNvbnRyaWJ1dG9zIiwgIl9xdWVyeUNvbnRyaWJ1dG9zIl0KfQo=
