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
    "Other $1 anonymous contributors": (0, import_ext_gadget.localize)({
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
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, getMessage("Based on contributions of")), userNames.map((userName, index) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, typeof userName === "number" ? /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  key: "".concat(userName)
}, getMessage("Other $1 anonymous contributors").replace("$1", "".concat(userName))) : /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  href: /(>|&gt;)/.test(userName) ? mw.util.getUrl("Special:GoToInterWiki/".concat(sanitize(userName.replace(/(>|&gt;)/, ":User:").replace(/(>|&gt;)/g, "&gt;")))) : mw.util.getUrl("User:".concat(sanitize(userName))),
  rel: "noopener noreferrer",
  target: "_blank",
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
                pclist[pclist.length] = page.anoncontributors;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL29wdGlvbnMuanNvbiIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9jb21wb25lbnRzL3JlYWN0LnRzeCIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3V0aWwvc2FuaXRpemUudHMiLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvYXBwZW5kRWxlbWVudC50c3giLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3F1ZXJ5Q29udHJpYnV0b3JzLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3V0aWwvZ2V0Q29udHJpYnV0b3JzLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9RdWVyeUNvbnRyaWJ1dG9ycy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImVsZW1lbnRJZFwiOiBcImdhZGdldC1xdWVyeV9jb250cmlidXRvcnNcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7c2FuaXRpemV9IGZyb20gJy4uL3V0aWwvc2FuaXRpemUnO1xuXG5pbnRlcmZhY2UgRm9vdGVyTm90aWNlUHJvcHMge1xuXHRjaGlsZHJlbj86IFJlYWN0RWxlbWVudDtcbn1cblxuY29uc3QgRm9vdGVyTm90aWNlID0gKHtjaGlsZHJlbiA9IDw+PC8+fTogRm9vdGVyTm90aWNlUHJvcHMpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpZCA9IE9QVElPTlMuZWxlbWVudElkO1xuXHRjb25zdCBjbGFzc05hbWUgPSBPUFRJT05TLmVsZW1lbnRJZDtcblxuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGlkPXtpZH0gY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJywgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9IGVsc2UgaWYgKFsnZ29uZ2JpJywgJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMiddLmluY2x1ZGVzKHNraW4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGlkPXtpZH0gY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAnbm9wcmludCddfT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9saT5cblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAnbm9wcmludCddfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmludGVyZmFjZSBVc2VyTGlzdFByb3BzIHtcblx0dXNlck5hbWVzOiAoc3RyaW5nIHwgbnVtYmVyKVtdO1xufVxuXG5jb25zdCBVc2VyTGlzdCA9ICh7dXNlck5hbWVzfTogVXNlckxpc3RQcm9wcykgPT4gKFxuXHQ8PlxuXHRcdDw+e2dldE1lc3NhZ2UoJ0Jhc2VkIG9uIGNvbnRyaWJ1dGlvbnMgb2YnKX08Lz5cblx0XHR7dXNlck5hbWVzLm1hcCgodXNlck5hbWUsIGluZGV4KSA9PiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHR7dHlwZW9mIHVzZXJOYW1lID09PSAnbnVtYmVyJyA/IChcblx0XHRcdFx0XHQ8c3BhbiBrZXk9e2Ake3VzZXJOYW1lfWB9PlxuXHRcdFx0XHRcdFx0e2dldE1lc3NhZ2UoJ090aGVyICQxIGFub255bW91cyBjb250cmlidXRvcnMnKS5yZXBsYWNlKCckMScsIGAke3VzZXJOYW1lfWApfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0aHJlZj17XG5cdFx0XHRcdFx0XHRcdC8oPnwmZ3Q7KS8udGVzdCh1c2VyTmFtZSlcblx0XHRcdFx0XHRcdFx0XHQ/IG13LnV0aWwuZ2V0VXJsKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRgU3BlY2lhbDpHb1RvSW50ZXJXaWtpLyR7c2FuaXRpemUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXNlck5hbWUucmVwbGFjZSgvKD58Jmd0OykvLCAnOlVzZXI6JykucmVwbGFjZSgvKD58Jmd0OykvZywgJyZndDsnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfWBcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHQ6IG13LnV0aWwuZ2V0VXJsKGBVc2VyOiR7c2FuaXRpemUodXNlck5hbWUpfWApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcblx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRrZXk9e3VzZXJOYW1lfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHt1c2VyTmFtZX1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDw+e2luZGV4IDwgdXNlck5hbWVzLmxlbmd0aCAtIDEgPyBnZXRNZXNzYWdlKCdTZXBlcmF0b3InKSA6IGdldE1lc3NhZ2UoJ1BlcmlvZCcpfTwvPlxuXHRcdFx0PC8+XG5cdFx0KSl9XG5cdDwvPlxuKTtcblxuY29uc3QgRm9vdGVyVXNlckxpc3QgPSAoe3VzZXJOYW1lc306IFVzZXJMaXN0UHJvcHMpID0+IChcblx0PEZvb3Rlck5vdGljZT5cblx0XHQ8VXNlckxpc3QgdXNlck5hbWVzPXt1c2VyTmFtZXN9IC8+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuZXhwb3J0IHtGb290ZXJVc2VyTGlzdH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdCYXNlZCBvbiBjb250cmlidXRpb25zIG9mJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYXNlZCBvbiBjb250cmlidXRpb25zIG9mJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WfuuS6juS4i+WIl+eUqOaIt+eahOi0oeeMru+8micsXG5cdFx0XHQnemgtaGFudCc6ICfln7rkuo7kuIvliJfkvb/nlKjogIXnmoTosqLnjbvvvJonLFxuXHRcdH0pLFxuXHRcdFNlcGVyYXRvcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcsICcsXG5cdFx0XHQnemgtaGFucyc6ICfjgIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn44CBJyxcblx0XHR9KSxcblx0XHRQZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdFx0J090aGVyICQxIGFub255bW91cyBjb250cmlidXRvcnMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ290aGVyICQxIGFub255bW91cyBjb250cmlidXRvcihzKScsXG5cdFx0XHQnemgtaGFucyc6ICflhbbku5YkMeS9jeWMv+WQjei0oeeMruiAhScsXG5cdFx0XHQnemgtaGFudCc6ICflhbbku5YkMeS9jeWMv+WQjeiyoueNu+iAhScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IHNhbml0aXplID0gKHN0cmluZzogc3RyaW5nKSA9PiB7XG5cdHJldHVybiBzdHJpbmdcblx0XHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuXHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0LnJlcGxhY2UoLycvZywgJyZhcG9zOycpXG5cdFx0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn07XG5cbmV4cG9ydCB7c2FuaXRpemV9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Rm9vdGVyVXNlckxpc3R9IGZyb20gJy4vY29tcG9uZW50cy9yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuXG5jb25zdCBhcHBlbmRFbGVtZW50ID0gKHVzZXJOYW1lczogKHN0cmluZyB8IG51bWJlcilbXSk6IHZvaWQgPT4ge1xuXHRpZiAoIXVzZXJOYW1lcyB8fCAhdXNlck5hbWVzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG1vdW50UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cdGlmICghbW91bnRQb2ludCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG1vdW50UG9pbnQucHJlcGVuZCg8Rm9vdGVyVXNlckxpc3QgdXNlck5hbWVzPXt1c2VyTmFtZXN9IC8+KTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kRWxlbWVudH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRdWVyeUNvbnRyaWJ1dG9ycy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHF1ZXJ5Q29udHJpYnV0b3JzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nLCBwY2NvbnRpbnVlPzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlDb250cmlidXRvcnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnY29udHJpYnV0b3JzJyxcblx0XHRwY2V4Y2x1ZGVncm91cDogWydib3QnXSxcblx0XHRwY2xpbWl0OiA1MDAwLFxuXHRcdHRpdGxlcyxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cblx0aWYgKHBjY29udGludWUpIHtcblx0XHRwYXJhbXMucGNjb250aW51ZSA9IHBjY29udGludWU7XG5cdH1cblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQge3F1ZXJ5Q29udHJpYnV0b3JzfTtcbiIsICJpbXBvcnQge3F1ZXJ5Q29udHJpYnV0b3JzfSBmcm9tICcuLi9xdWVyeUNvbnRyaWJ1dG9ycyc7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBnZXRDb250cmlidXRvcnMgPSBhc3luYyAodGl0bGU6IHN0cmluZykgPT4ge1xuXHRsZXQgcGNsaXN0OiAoc3RyaW5nIHwgbnVtYmVyKVtdID0gW107XG5cdGxldCBwY2NvbnRpbnVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0Y29uc3QgQ0FDSEVfS0VZX1BSRUZJWCA9ICdleHQuZ2FkZ2V0LlF1ZXJ5Q29udHJpYnV0b3JzX2dldENvbnRyaWJ1dG9ycy0nO1xuXG5cdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdGl0bGUpKSB7XG5cdFx0cGNsaXN0ID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHRpdGxlKSBhcyBzdHJpbmdbXTtcblxuXHRcdHJldHVybiB1bmlxdWVBcnJheShwY2xpc3QpO1xuXHR9XG5cblx0d2hpbGUgKHRydWUpIHtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcXVlcnlDb250cmlidXRvcnModGl0bGUsIHBjY29udGludWUpO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGlmIChkYXRhWydxdWVyeSddPy5wYWdlcykge1xuXHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgZGF0YVsncXVlcnknXS5wYWdlcyBhcyB7XG5cdFx0XHRcdFx0YW5vbmNvbnRyaWJ1dG9yczogbnVtYmVyO1xuXHRcdFx0XHRcdGNvbnRyaWJ1dG9yczoge3VzZXJpZDogbnVtYmVyOyBuYW1lOiBzdHJpbmd9W107XG5cdFx0XHRcdH1bXSkge1xuXHRcdFx0XHRcdGlmIChwYWdlPy5jb250cmlidXRvcnMpIHtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgY29udHJpYnV0b3Igb2YgcGFnZS5jb250cmlidXRvcnMpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGNvbnRyaWJ1dG9yPy5uYW1lKSB7XG5cdFx0XHRcdFx0XHRcdFx0cGNsaXN0W3BjbGlzdC5sZW5ndGhdID0gY29udHJpYnV0b3IubmFtZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChwYWdlPy5hbm9uY29udHJpYnV0b3JzKSB7XG5cdFx0XHRcdFx0XHRwY2xpc3RbcGNsaXN0Lmxlbmd0aF0gPSBwYWdlLmFub25jb250cmlidXRvcnM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0aWYgKGRhdGFbJ2NvbnRpbnVlJ10/LnBjY29udGludWUpIHtcblx0XHRcdFx0KHtwY2NvbnRpbnVlfSA9IGRhdGFbJ2NvbnRpbnVlJ10gYXMge3BjY29udGludWU6IHN0cmluZ30pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHQvLyBDYWNoZSBmb3IgMTAgbWludXRlc1xuXHRtdy5zdG9yYWdlLnNldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdGl0bGUsIHBjbGlzdCwgMTAgKiA2MCk7XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KHBjbGlzdCk7XG59O1xuXG5leHBvcnQge2dldENvbnRyaWJ1dG9yc307XG4iLCAiaW1wb3J0IHthcHBlbmRFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvYXBwZW5kRWxlbWVudCc7XG5pbXBvcnQge2dldENvbnRyaWJ1dG9yc30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2V0Q29udHJpYnV0b3JzJztcblxuKGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5Q29udHJpYnV0b3MoKSB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dBcnRpY2xlSWQsIHdnQ3VyUmV2aXNpb25JZCwgd2dQYWdlTmFtZSwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dBcnRpY2xlSWQgfHwgIXdnUGFnZU5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAod2dDdXJSZXZpc2lvbklkID4gd2dSZXZpc2lvbklkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY29udHJpYnV0b3JzOiAoc3RyaW5nIHwgbnVtYmVyKVtdID0gYXdhaXQgZ2V0Q29udHJpYnV0b3JzKHdnUGFnZU5hbWUpO1xuXG5cdGFw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QUE7QUFBQSxTQUFBLFNBbkRNSCxpQkFBQThCLEtBQUE7QUFBQSxXQUFBN0IsTUFBQUosTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOzs7NENDQUwsYUFBa0M7QUFDbEMsVUFBTTtNQUFDaUM7TUFBVUM7TUFBYUM7TUFBaUJDO01BQVlDO0lBQVksSUFBSXBGLEdBQUdDLE9BQU9DLElBQUk7QUFFekYsUUFBSThFLGFBQWEsVUFBVSxDQUFDQyxlQUFlLENBQUNFLFlBQVk7QUFDdkQ7SUFDRDtBQUVBLFFBQUlELGtCQUFrQkUsY0FBYztBQUNuQztJQUNEO0FBRUEsVUFBTWYsZUFBQSxNQUEwQ3BCLGdCQUFnQmtDLFVBQVU7QUFFMUU1RCxrQkFBYzhDLFlBQVk7RUFDM0IsQ0FBQTtBQUFBLFdBZGdCZ0IsbUJBQUE7QUFBQSxXQUFBQyxrQkFBQXhDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQXNDO0FBQUEsR0FBQSxFQWNiOyIsCiAgIm5hbWVzIjogWyJlbGVtZW50SWQiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiU2VwZXJhdG9yIiwgIlBlcmlvZCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic2FuaXRpemUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiRm9vdGVyTm90aWNlIiwgImNoaWxkcmVuIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaWQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiVXNlckxpc3QiLCAidXNlck5hbWVzIiwgIm1hcCIsICJ1c2VyTmFtZSIsICJpbmRleCIsICJjb25jYXQiLCAiaHJlZiIsICJ0ZXN0IiwgInV0aWwiLCAiZ2V0VXJsIiwgInJlbCIsICJ0YXJnZXQiLCAibGVuZ3RoIiwgIkZvb3RlclVzZXJMaXN0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcHBlbmRFbGVtZW50IiwgIm1vdW50UG9pbnQiLCAicHJlcGVuZCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJxdWVyeUNvbnRyaWJ1dG9ycyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJwY2NvbnRpbnVlIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJwY2V4Y2x1ZGVncm91cCIsICJwY2xpbWl0IiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3BvbnNlIiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImdldENvbnRyaWJ1dG9ycyIsICJfcmVmMiIsICJ0aXRsZSIsICJwY2xpc3QiLCAiQ0FDSEVfS0VZX1BSRUZJWCIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJ1bmlxdWVBcnJheSIsICJkYXRhIiwgIl9kYXRhJHF1ZXJ5IiwgIl9kYXRhJGNvbnRpbnVlIiwgInBhZ2VzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInBhZ2UiLCAidmFsdWUiLCAiY29udHJpYnV0b3JzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImNvbnRyaWJ1dG9yIiwgIm5hbWUiLCAiZXJyIiwgImUiLCAiZiIsICJhbm9uY29udHJpYnV0b3JzIiwgInNldE9iamVjdCIsICJfeDMiLCAid2dBY3Rpb24iLCAid2dBcnRpY2xlSWQiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUGFnZU5hbWUiLCAid2dSZXZpc2lvbklkIiwgInF1ZXJ5Q29udHJpYnV0b3MiLCAiX3F1ZXJ5Q29udHJpYnV0b3MiXQp9Cg==
