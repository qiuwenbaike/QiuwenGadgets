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
      en: "Based on contributions of ",
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL29wdGlvbnMuanNvbiIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9jb21wb25lbnRzL3JlYWN0LnRzeCIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3V0aWwvc2FuaXRpemUudHMiLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvYXBwZW5kRWxlbWVudC50c3giLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3F1ZXJ5Q29udHJpYnV0b3JzLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3V0aWwvZ2V0Q29udHJpYnV0b3JzLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9RdWVyeUNvbnRyaWJ1dG9ycy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImVsZW1lbnRJZFwiOiBcImdhZGdldC1xdWVyeV9jb250cmlidXRvcnNcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7c2FuaXRpemV9IGZyb20gJy4uL3V0aWwvc2FuaXRpemUnO1xuXG5pbnRlcmZhY2UgRm9vdGVyTm90aWNlUHJvcHMge1xuXHRjaGlsZHJlbj86IFJlYWN0RWxlbWVudDtcbn1cblxuY29uc3QgRm9vdGVyTm90aWNlID0gKHtjaGlsZHJlbiA9IDw+PC8+fTogRm9vdGVyTm90aWNlUHJvcHMpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBpZCA9IE9QVElPTlMuZWxlbWVudElkO1xuXHRjb25zdCBjbGFzc05hbWUgPSBPUFRJT05TLmVsZW1lbnRJZDtcblxuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGlkPXtpZH0gY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJywgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9IGVsc2UgaWYgKFsnZ29uZ2JpJywgJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMiddLmluY2x1ZGVzKHNraW4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGxpIGlkPXtpZH0gY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAnbm9wcmludCddfT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9saT5cblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtbY2xhc3NOYW1lLCAnbm9wcmludCddfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmludGVyZmFjZSBVc2VyTGlzdFByb3BzIHtcblx0dXNlck5hbWVzOiAoc3RyaW5nIHwgbnVtYmVyKVtdO1xufVxuXG5jb25zdCBVc2VyTGlzdCA9ICh7dXNlck5hbWVzfTogVXNlckxpc3RQcm9wcykgPT4gKFxuXHQ8PlxuXHRcdDw+e2dldE1lc3NhZ2UoJ0Jhc2VkIG9uIGNvbnRyaWJ1dGlvbnMgb2YnKX08Lz5cblx0XHR7dXNlck5hbWVzLm1hcCgodXNlck5hbWUsIGluZGV4KSA9PiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHR7dHlwZW9mIHVzZXJOYW1lID09PSAnbnVtYmVyJyA/IChcblx0XHRcdFx0XHQ8c3BhbiBrZXk9e2Ake3VzZXJOYW1lfWB9PlxuXHRcdFx0XHRcdFx0e2dldE1lc3NhZ2UoJ090aGVyICQxIGFub255bW91cyBjb250cmlidXRvcnMnKS5yZXBsYWNlKCckMScsIGAke3VzZXJOYW1lfWApfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0aHJlZj17XG5cdFx0XHRcdFx0XHRcdC8oPnwmZ3Q7KS8udGVzdCh1c2VyTmFtZSlcblx0XHRcdFx0XHRcdFx0XHQ/IG13LnV0aWwuZ2V0VXJsKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRgU3BlY2lhbDpHb1RvSW50ZXJXaWtpLyR7c2FuaXRpemUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXNlck5hbWUucmVwbGFjZSgvKD58Jmd0OykvLCAnOlVzZXI6JykucmVwbGFjZSgvKD58Jmd0OykvZywgJyZndDsnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfWBcblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHQ6IG13LnV0aWwuZ2V0VXJsKGBVc2VyOiR7c2FuaXRpemUodXNlck5hbWUpfWApXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcblx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRrZXk9e3VzZXJOYW1lfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHt1c2VyTmFtZX1cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdDw+e2luZGV4IDwgdXNlck5hbWVzLmxlbmd0aCAtIDEgPyBnZXRNZXNzYWdlKCdTZXBlcmF0b3InKSA6IGdldE1lc3NhZ2UoJ1BlcmlvZCcpfTwvPlxuXHRcdFx0PC8+XG5cdFx0KSl9XG5cdDwvPlxuKTtcblxuY29uc3QgRm9vdGVyVXNlckxpc3QgPSAoe3VzZXJOYW1lc306IFVzZXJMaXN0UHJvcHMpID0+IChcblx0PEZvb3Rlck5vdGljZT5cblx0XHQ8VXNlckxpc3QgdXNlck5hbWVzPXt1c2VyTmFtZXN9IC8+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuZXhwb3J0IHtGb290ZXJVc2VyTGlzdH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdCYXNlZCBvbiBjb250cmlidXRpb25zIG9mJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYXNlZCBvbiBjb250cmlidXRpb25zIG9mICcsXG5cdFx0XHQnemgtaGFucyc6ICfln7rkuo7kuIvliJfnlKjmiLfnmoTotKHnjK7vvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5Z+65LqO5LiL5YiX5L2/55So6ICF55qE6LKi542777yaJyxcblx0XHR9KSxcblx0XHRTZXBlcmF0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLCAnLFxuXHRcdFx0J3poLWhhbnMnOiAn44CBJyxcblx0XHRcdCd6aC1oYW50JzogJ+OAgScsXG5cdFx0fSksXG5cdFx0UGVyaW9kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHRcdCdPdGhlciAkMSBhbm9ueW1vdXMgY29udHJpYnV0b3JzJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdvdGhlciAkMSBhbm9ueW1vdXMgY29udHJpYnV0b3IocyknLFxuXHRcdFx0J3poLWhhbnMnOiAn5YW25LuWJDHkvY3ljL/lkI3otKHnjK7ogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YW25LuWJDHkvY3ljL/lkI3osqLnjbvogIUnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBzYW5pdGl6ZSA9IChzdHJpbmc6IHN0cmluZykgPT4ge1xuXHRyZXR1cm4gc3RyaW5nXG5cdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0LnJlcGxhY2UoLz4vZywgJyZndDsnKVxuXHRcdC5yZXBsYWNlKC8nL2csICcmYXBvczsnKVxuXHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59O1xuXG5leHBvcnQge3Nhbml0aXplfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0Zvb3RlclVzZXJMaXN0fSBmcm9tICcuL2NvbXBvbmVudHMvcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcblxuY29uc3QgYXBwZW5kRWxlbWVudCA9ICh1c2VyTmFtZXM6IChzdHJpbmcgfCBudW1iZXIpW10pOiB2b2lkID0+IHtcblx0aWYgKCF1c2VyTmFtZXMgfHwgIXVzZXJOYW1lcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBtb3VudFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoIW1vdW50UG9pbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtb3VudFBvaW50LnByZXBlbmQoPEZvb3RlclVzZXJMaXN0IHVzZXJOYW1lcz17dXNlck5hbWVzfSAvPik7XG59O1xuXG5leHBvcnQge2FwcGVuZEVsZW1lbnR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgUXVlcnlDb250cmlidXRvcnMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBxdWVyeUNvbnRyaWJ1dG9ycyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZywgcGNjb250aW51ZT86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5Q29udHJpYnV0b3JzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ2NvbnRyaWJ1dG9ycycsXG5cdFx0cGNleGNsdWRlZ3JvdXA6IFsnYm90J10sXG5cdFx0cGNsaW1pdDogNTAwMCxcblx0XHR0aXRsZXMsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXG5cdGlmIChwY2NvbnRpbnVlKSB7XG5cdFx0cGFyYW1zLnBjY29udGludWUgPSBwY2NvbnRpbnVlO1xuXHR9XG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHtxdWVyeUNvbnRyaWJ1dG9yc307XG4iLCAiaW1wb3J0IHtxdWVyeUNvbnRyaWJ1dG9yc30gZnJvbSAnLi4vcXVlcnlDb250cmlidXRvcnMnO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgZ2V0Q29udHJpYnV0b3JzID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcpID0+IHtcblx0bGV0IHBjbGlzdDogKHN0cmluZyB8IG51bWJlcilbXSA9IFtdO1xuXHRsZXQgcGNjb250aW51ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGNvbnN0IENBQ0hFX0tFWV9QUkVGSVggPSAnZXh0LmdhZGdldC5RdWVyeUNvbnRyaWJ1dG9yc19nZXRDb250cmlidXRvcnMtJztcblxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHRpdGxlKSkge1xuXHRcdHBjbGlzdCA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB0aXRsZSkgYXMgc3RyaW5nW107XG5cblx0XHRyZXR1cm4gdW5pcXVlQXJyYXkocGNsaXN0KTtcblx0fVxuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHF1ZXJ5Q29udHJpYnV0b3JzKHRpdGxlLCBwY2NvbnRpbnVlKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRpZiAoZGF0YVsncXVlcnknXT8ucGFnZXMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIGRhdGFbJ3F1ZXJ5J10ucGFnZXMgYXMge1xuXHRcdFx0XHRcdGFub25jb250cmlidXRvcnM6IG51bWJlcjtcblx0XHRcdFx0XHRjb250cmlidXRvcnM6IHt1c2VyaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nfVtdO1xuXHRcdFx0XHR9W10pIHtcblx0XHRcdFx0XHRpZiAocGFnZT8uY29udHJpYnV0b3JzKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGNvbnRyaWJ1dG9yIG9mIHBhZ2UuY29udHJpYnV0b3JzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChjb250cmlidXRvcj8ubmFtZSkge1xuXHRcdFx0XHRcdFx0XHRcdHBjbGlzdFtwY2xpc3QubGVuZ3RoXSA9IGNvbnRyaWJ1dG9yLm5hbWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocGFnZT8uYW5vbmNvbnRyaWJ1dG9ycykge1xuXHRcdFx0XHRcdFx0cGNsaXN0W3BjbGlzdC5sZW5ndGhdID0gcGFnZS5hbm9uY29udHJpYnV0b3JzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChkYXRhWydjb250aW51ZSddPy5wY2NvbnRpbnVlKSB7XG5cdFx0XHRcdCh7cGNjb250aW51ZX0gPSBkYXRhWydjb250aW51ZSddIGFzIHtwY2NvbnRpbnVlOiBzdHJpbmd9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2FjaGUgZm9yIDEwIG1pbnV0ZXNcblx0bXcuc3RvcmFnZS5zZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHRpdGxlLCBwY2xpc3QsIDEwICogNjApO1xuXG5cdHJldHVybiB1bmlxdWVBcnJheShwY2xpc3QpO1xufTtcblxuZXhwb3J0IHtnZXRDb250cmlidXRvcnN9O1xuIiwgImltcG9ydCB7YXBwZW5kRWxlbWVudH0gZnJvbSAnLi9tb2R1bGVzL2FwcGVuZEVsZW1lbnQnO1xuaW1wb3J0IHtnZXRDb250cmlidXRvcnN9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dldENvbnRyaWJ1dG9ycyc7XG5cbihhc3luYyBmdW5jdGlvbiBxdWVyeUNvbnRyaWJ1dG9zKCkge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnQXJ0aWNsZUlkLCB3Z0N1clJldmlzaW9uSWQsIHdnUGFnZU5hbWUsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnQXJ0aWNsZUlkIHx8ICF3Z1BhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHdnQ3VyUmV2aXNpb25JZCA+IHdnUmV2aXNpb25JZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRyaWJ1dG9yczogKHN0cmluZyB8IG51bWJlcilbXSA9IGF3YWl0IGdldENvbnRyaWJ1dG9ycyh3Z1BhZ2VOYW1lKTtcblxuXHRh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QUFBO0FBQUEsU0FBQSxTQW5ETUgsaUJBQUE4QixLQUFBO0FBQUEsV0FBQTdCLE1BQUFKLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7OzRDQ0FMLGFBQWtDO0FBQ2xDLFVBQU07TUFBQ2lDO01BQVVDO01BQWFDO01BQWlCQztNQUFZQztJQUFZLElBQUlwRixHQUFHQyxPQUFPQyxJQUFJO0FBRXpGLFFBQUk4RSxhQUFhLFVBQVUsQ0FBQ0MsZUFBZSxDQUFDRSxZQUFZO0FBQ3ZEO0lBQ0Q7QUFFQSxRQUFJRCxrQkFBa0JFLGNBQWM7QUFDbkM7SUFDRDtBQUVBLFVBQU1mLGVBQUEsTUFBMENwQixnQkFBZ0JrQyxVQUFVO0FBRTFFNUQsa0JBQWM4QyxZQUFZO0VBQzNCLENBQUE7QUFBQSxXQWRnQmdCLG1CQUFBO0FBQUEsV0FBQUMsa0JBQUF4QyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUFzQztBQUFBLEdBQUEsRUFjYjsiLAogICJuYW1lcyI6IFsiZWxlbWVudElkIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgIlNlcGVyYXRvciIsICJQZXJpb2QiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInNhbml0aXplIiwgInN0cmluZyIsICJyZXBsYWNlIiwgIkZvb3Rlck5vdGljZSIsICJjaGlsZHJlbiIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImlkIiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIlVzZXJMaXN0IiwgInVzZXJOYW1lcyIsICJtYXAiLCAidXNlck5hbWUiLCAiaW5kZXgiLCAiY29uY2F0IiwgImhyZWYiLCAidGVzdCIsICJ1dGlsIiwgImdldFVybCIsICJyZWwiLCAidGFyZ2V0IiwgImxlbmd0aCIsICJGb290ZXJVc2VyTGlzdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBwZW5kRWxlbWVudCIsICJtb3VudFBvaW50IiwgInByZXBlbmQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFwaSIsICJpbml0TXdBcGkiLCAicXVlcnlDb250cmlidXRvcnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZXMiLCAicGNjb250aW51ZSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicGNleGNsdWRlZ3JvdXAiLCAicGNsaW1pdCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJyZXNwb25zZSIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJnZXRDb250cmlidXRvcnMiLCAiX3JlZjIiLCAidGl0bGUiLCAicGNsaXN0IiwgIkNBQ0hFX0tFWV9QUkVGSVgiLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAidW5pcXVlQXJyYXkiLCAiZGF0YSIsICJfZGF0YSRxdWVyeSIsICJfZGF0YSRjb250aW51ZSIsICJwYWdlcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJwYWdlIiwgInZhbHVlIiwgImNvbnRyaWJ1dG9ycyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJjb250cmlidXRvciIsICJuYW1lIiwgImVyciIsICJlIiwgImYiLCAiYW5vbmNvbnRyaWJ1dG9ycyIsICJzZXRPYmplY3QiLCAiX3gzIiwgIndnQWN0aW9uIiwgIndnQXJ0aWNsZUlkIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1BhZ2VOYW1lIiwgIndnUmV2aXNpb25JZCIsICJxdWVyeUNvbnRyaWJ1dG9zIiwgIl9xdWVyeUNvbnRyaWJ1dG9zIl0KfQo=
