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
//! src/QueryContributors/modules/util/sanitize.ts
var sanitize = (string) => {
  return string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
};
//! src/QueryContributors/modules/components/react.tsx
var FooterNotice = ({
  id,
  children = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)
}) => {
  const {
    skin
  } = mw.config.get();
  return /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, skin === "citizen" ? /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
    id: id !== null && id !== void 0 ? id : elementId,
    className: [elementId, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
  }, children !== null && children !== void 0 ? children : /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)) : ["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info") ? /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
    id: id !== null && id !== void 0 ? id : elementId,
    className: [elementId, "noprint"]
  }, children !== null && children !== void 0 ? children : /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)) : /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id: id !== null && id !== void 0 ? id : elementId,
    className: [elementId, "noprint"]
  }, children !== null && children !== void 0 ? children : /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)));
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
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL29wdGlvbnMuanNvbiIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9jb21wb25lbnRzL3JlYWN0LnRzeCIsICJzcmMvUXVlcnlDb250cmlidXRvcnMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3V0aWwvc2FuaXRpemUudHMiLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvYXBwZW5kRWxlbWVudC50c3giLCAic3JjL1F1ZXJ5Q29udHJpYnV0b3JzL21vZHVsZXMvYXBpLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3F1ZXJ5Q29udHJpYnV0b3JzLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9tb2R1bGVzL3V0aWwvZ2V0Q29udHJpYnV0b3JzLnRzIiwgInNyYy9RdWVyeUNvbnRyaWJ1dG9ycy9RdWVyeUNvbnRyaWJ1dG9ycy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImVsZW1lbnRJZFwiOiBcImdhZGdldC1xdWVyeV9jb250cmlidXRvcnNcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCwge1JlYWN0RWxlbWVudH0gZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHtzYW5pdGl6ZX0gZnJvbSAnLi4vdXRpbC9zYW5pdGl6ZSc7XG5cbmludGVyZmFjZSBGb290ZXJOb3RpY2VQcm9wcyB7XG5cdGlkPzogc3RyaW5nO1xuXHRjaGlsZHJlbj86IFJlYWN0RWxlbWVudCB8IFJlYWN0RWxlbWVudFtdO1xufVxuXG5jb25zdCBGb290ZXJOb3RpY2UgPSAoe2lkLCBjaGlsZHJlbiA9IDw+PC8+fTogRm9vdGVyTm90aWNlUHJvcHMpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHtza2luID09PSAnY2l0aXplbicgPyAoXG5cdFx0XHRcdDxzZWN0aW9uXG5cdFx0XHRcdFx0aWQ9e2lkID8/IE9QVElPTlMuZWxlbWVudElkfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17W09QVElPTlMuZWxlbWVudElkLCAncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJywgJ25vcHJpbnQnXX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtjaGlsZHJlbiA/PyA8PjwvPn1cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0KSA6IFsndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJywgJ2dvbmdiaSddLmluY2x1ZGVzKHNraW4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykgPyAoXG5cdFx0XHRcdDxsaSBpZD17aWQgPz8gT1BUSU9OUy5lbGVtZW50SWR9IGNsYXNzTmFtZT17W09QVElPTlMuZWxlbWVudElkLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW4gPz8gPD48Lz59XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8ZGl2IGlkPXtpZCA/PyBPUFRJT05TLmVsZW1lbnRJZH0gY2xhc3NOYW1lPXtbT1BUSU9OUy5lbGVtZW50SWQsICdub3ByaW50J119PlxuXHRcdFx0XHRcdHtjaGlsZHJlbiA/PyA8PjwvPn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvPlxuXHQpO1xufTtcblxuaW50ZXJmYWNlIFVzZXJMaXN0UHJvcHMge1xuXHR1c2VyTmFtZXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBVc2VyTGlzdCA9ICh7dXNlck5hbWVzfTogVXNlckxpc3RQcm9wcykgPT4gKFxuXHQ8PlxuXHRcdDw+e2dldE1lc3NhZ2UoJ0Jhc2VkIG9uIGNvbnRyaWJ1dGlvbnMgb2YnKX08Lz5cblx0XHR7dXNlck5hbWVzLm1hcCgodXNlck5hbWUsIGluZGV4KSA9PiAoXG5cdFx0XHQ8PlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9e1xuXHRcdFx0XHRcdFx0dXNlck5hbWUuaW5jbHVkZXMoJz4nKVxuXHRcdFx0XHRcdFx0XHQ/IG13LnV0aWwuZ2V0VXJsKGBTcGVjaWFsOkdvVG9JbnRlcldpa2kvJHtzYW5pdGl6ZSh1c2VyTmFtZS5yZXBsYWNlKCc+JywgJzpVc2VyOicpKX1gKVxuXHRcdFx0XHRcdFx0XHQ6IG13LnV0aWwuZ2V0VXJsKGBVc2VyOiR7c2FuaXRpemUodXNlck5hbWUpfWApXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGtleT17dXNlck5hbWV9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7dXNlck5hbWV9XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PD57aW5kZXggPCB1c2VyTmFtZXMubGVuZ3RoIC0gMSA/IGdldE1lc3NhZ2UoJ1NlcGVyYXRvcicpIDogZ2V0TWVzc2FnZSgnUGVyaW9kJyl9PC8+XG5cdFx0XHQ8Lz5cblx0XHQpKX1cblx0PC8+XG4pO1xuXG5jb25zdCBGb290ZXJVc2VyTGlzdCA9ICh7dXNlck5hbWVzfTogVXNlckxpc3RQcm9wcykgPT4gKFxuXHQ8Rm9vdGVyTm90aWNlPlxuXHRcdDxVc2VyTGlzdCB1c2VyTmFtZXM9e3VzZXJOYW1lc30gLz5cblx0PC9Gb290ZXJOb3RpY2U+XG4pO1xuXG5leHBvcnQge0Zvb3RlclVzZXJMaXN0fTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0Jhc2VkIG9uIGNvbnRyaWJ1dGlvbnMgb2YnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Jhc2VkIG9uIGNvbnRyaWJ1dGlvbnMgb2YnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Z+65LqO5LiL5YiX55So5oi355qE6LSh54yu77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+WfuuS6juS4i+WIl+S9v+eUqOiAheeahOiyoueNu++8micsXG5cdFx0fSksXG5cdFx0U2VwZXJhdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJywgJyxcblx0XHRcdCd6aC1oYW5zJzogJ+OAgScsXG5cdFx0XHQnemgtaGFudCc6ICfjgIEnLFxuXHRcdH0pLFxuXHRcdFBlcmlvZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcuJyxcblx0XHRcdHpoOiAn44CCJyxcblx0XHR9KSxcblx0XHQnT3RoZXIgYW5vbnltb3VzIGNvbnRyaWJ1dG9ycyc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnb3RoZXIgJDEgYW5vbnltb3VzIGNvbnRyaWJ1dG9yKHMpJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFtuS7liQx5L2N5Yy/5ZCN6LSh54yu6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+WFtuS7liQx5L2N5Yy/5ZCN6LKi54276ICFJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIHN0cmluZ1xuXHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufTtcblxuZXhwb3J0IHtzYW5pdGl6ZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtGb290ZXJVc2VyTGlzdH0gZnJvbSAnLi9jb21wb25lbnRzL3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuY29uc3QgYXBwZW5kRm9vdGVyTm90aWNlID0gKGVsZW1lbnQ6IEVsZW1lbnQpID0+IHtcblx0Y29uc3QgbW91bnRQb2ludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKTtcblxuXHRpZiAobW91bnRQb2ludCkge1xuXHRcdG1vdW50UG9pbnQucHJlcGVuZChlbGVtZW50KTtcblx0fVxufTtcblxuY29uc3QgYXBwZW5kRWxlbWVudCA9ICh1c2VyTmFtZXM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG5cdGlmICghdXNlck5hbWVzIHx8ICF1c2VyTmFtZXMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXBwZW5kRm9vdGVyTm90aWNlKDxGb290ZXJVc2VyTGlzdCB1c2VyTmFtZXM9e3VzZXJOYW1lc30gLz4pO1xufTtcblxuZXhwb3J0IHthcHBlbmRFbGVtZW50fTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFF1ZXJ5Q29udHJpYnV0b3JzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxuY29uc3QgcXVlcnlDb250cmlidXRvcnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcsIHBjY29udGludWU/OiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUNvbnRyaWJ1dG9yc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdjb250cmlidXRvcnMnLFxuXHRcdHBjZXhjbHVkZWdyb3VwOiBbJ2JvdCddLFxuXHRcdHBjbGltaXQ6IDUwMDAsXG5cdFx0dGl0bGVzLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblxuXHRpZiAocGNjb250aW51ZSkge1xuXHRcdHBhcmFtcy5wY2NvbnRpbnVlID0gcGNjb250aW51ZTtcblx0fVxuXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCB7cXVlcnlDb250cmlidXRvcnN9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3F1ZXJ5Q29udHJpYnV0b3JzfSBmcm9tICcuLi9xdWVyeUNvbnRyaWJ1dG9ycyc7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBnZXRDb250cmlidXRvcnMgPSBhc3luYyAodGl0bGU6IHN0cmluZykgPT4ge1xuXHRsZXQgcGNsaXN0OiBzdHJpbmdbXSA9IFtdO1xuXHRsZXQgcGNjb250aW51ZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGNvbnN0IENBQ0hFX0tFWV9QUkVGSVggPSAnZXh0LmdhZGdldC5RdWVyeUNvbnRyaWJ1dG9yc19nZXRDb250cmlidXRvcnMtJztcblxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHRpdGxlKSkge1xuXHRcdHBjbGlzdCA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB0aXRsZSkgYXMgc3RyaW5nW107XG5cblx0XHRyZXR1cm4gdW5pcXVlQXJyYXkocGNsaXN0KTtcblx0fVxuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHF1ZXJ5Q29udHJpYnV0b3JzKHRpdGxlLCBwY2NvbnRpbnVlKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRpZiAoZGF0YVsncXVlcnknXT8ucGFnZXMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIGRhdGFbJ3F1ZXJ5J10ucGFnZXMgYXMge1xuXHRcdFx0XHRcdGFub25jb250cmlidXRvcnM6IG51bWJlcjtcblx0XHRcdFx0XHRjb250cmlidXRvcnM6IHt1c2VyaWQ6IG51bWJlcjsgbmFtZTogc3RyaW5nfVtdO1xuXHRcdFx0XHR9W10pIHtcblx0XHRcdFx0XHRpZiAocGFnZT8uY29udHJpYnV0b3JzKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGNvbnRyaWJ1dG9yIG9mIHBhZ2UuY29udHJpYnV0b3JzKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChjb250cmlidXRvcj8ubmFtZSkge1xuXHRcdFx0XHRcdFx0XHRcdHBjbGlzdFtwY2xpc3QubGVuZ3RoXSA9IGNvbnRyaWJ1dG9yLm5hbWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAocGFnZT8uYW5vbmNvbnRyaWJ1dG9ycykge1xuXHRcdFx0XHRcdFx0cGNsaXN0W3BjbGlzdC5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnT3RoZXIgYW5vbnltb3VzIGNvbnRyaWJ1dG9ycycpLnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRcdCckMScsXG5cdFx0XHRcdFx0XHRcdGAke3BhZ2UuYW5vbmNvbnRyaWJ1dG9yc31gXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChkYXRhWydjb250aW51ZSddPy5wY2NvbnRpbnVlKSB7XG5cdFx0XHRcdCh7cGNjb250aW51ZX0gPSBkYXRhWydjb250aW51ZSddIGFzIHtwY2NvbnRpbnVlOiBzdHJpbmd9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2FjaGUgZm9yIDEwIG1pbnV0ZXNcblx0bXcuc3RvcmFnZS5zZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHRpdGxlLCBwY2xpc3QsIDEwICogNjApO1xuXG5cdHJldHVybiB1bmlxdWVBcnJheShwY2xpc3QpO1xufTtcblxuZXhwb3J0IHtnZXRDb250cmlidXRvcnN9O1xuIiwgImltcG9ydCB7YXBwZW5kRWxlbWVudH0gZnJvbSAnLi9tb2R1bGVzL2FwcGVuZEVsZW1lbnQnO1xuaW1wb3J0IHtnZXRDb250cmlidXRvcnN9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dldENvbnRyaWJ1dG9ycyc7XG5cbihhc3luYyBmdW5jdGlvbiBxdWVyeUNvbnRyaWJ1dG9zKCkge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnQXJ0aWNsZUlkLCB3Z0N1clJldmlzaW9uSWQsIHdnUGFnZU5hbWUsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnQXJ0aWNsZUlkIHx8ICF3Z1BhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHdnQ3VyUmV2aXNpb25JZCA+IHdnUmV2aXNpb25JZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbnRyaWJ1dG9yczogc3RyaW5nW10gPSBhd2FpdCBnZXRDb250cmlidXRvcnMod2dQYWdlTmFtZSk7XG5cblx0YXBwZW5kRWxlbWVudChjb250cmlidXRvcnMpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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R29ELFFBQVF3QixVQUFVekIsbUJBQW1CRixPQUFPQyxRQUFRLEtBQUssRUFBRTtBQUU5RCxZQUFBLEdBQU9KLG1CQUFBUSxhQUFZSixNQUFNO0VBQzFCLENBQUE7QUFBQSxTQUFBLFNBdERNSCxpQkFBQThCLEtBQUE7QUFBQSxXQUFBN0IsTUFBQUosTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOzs7NENDREwsYUFBa0M7QUFDbEMsVUFBTTtNQUFDaUM7TUFBVUM7TUFBYUM7TUFBaUJDO01BQVlDO0lBQVksSUFBSWxGLEdBQUdDLE9BQU9DLElBQUk7QUFFekYsUUFBSTRFLGFBQWEsVUFBVSxDQUFDQyxlQUFlLENBQUNFLFlBQVk7QUFDdkQ7SUFDRDtBQUVBLFFBQUlELGtCQUFrQkUsY0FBYztBQUNuQztJQUNEO0FBRUEsVUFBTWYsZUFBQSxNQUErQnBCLGdCQUFnQmtDLFVBQVU7QUFFL0QxRCxrQkFBYzRDLFlBQVk7RUFDM0IsQ0FBQTtBQUFBLFdBZGdCZ0IsbUJBQUE7QUFBQSxXQUFBQyxrQkFBQXhDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQXNDO0FBQUEsR0FBQSxFQWNiOyIsCiAgIm5hbWVzIjogWyJlbGVtZW50SWQiLCAibW91bnRQb2ludFNlbGVjdG9yIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiU2VwZXJhdG9yIiwgIlBlcmlvZCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic2FuaXRpemUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiRm9vdGVyTm90aWNlIiwgImlkIiwgImNoaWxkcmVuIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiVXNlckxpc3QiLCAidXNlck5hbWVzIiwgIm1hcCIsICJ1c2VyTmFtZSIsICJpbmRleCIsICJocmVmIiwgInV0aWwiLCAiZ2V0VXJsIiwgImNvbmNhdCIsICJsZW5ndGgiLCAiRm9vdGVyVXNlckxpc3QiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwcGVuZEZvb3Rlck5vdGljZSIsICJlbGVtZW50IiwgIm1vdW50UG9pbnQiLCAicHJlcGVuZCIsICJhcHBlbmRFbGVtZW50IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhcGkiLCAiaW5pdE13QXBpIiwgInF1ZXJ5Q29udHJpYnV0b3JzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBjY29udGludWUiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInBjZXhjbHVkZWdyb3VwIiwgInBjbGltaXQiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicmVzcG9uc2UiLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiZ2V0Q29udHJpYnV0b3JzIiwgIl9yZWYyIiwgInRpdGxlIiwgInBjbGlzdCIsICJDQUNIRV9LRVlfUFJFRklYIiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgInVuaXF1ZUFycmF5IiwgImRhdGEiLCAiX2RhdGEkcXVlcnkiLCAiX2RhdGEkY29udGludWUiLCAicGFnZXMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAicGFnZSIsICJ2YWx1ZSIsICJjb250cmlidXRvcnMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiY29udHJpYnV0b3IiLCAibmFtZSIsICJlcnIiLCAiZSIsICJmIiwgImFub25jb250cmlidXRvcnMiLCAic2V0T2JqZWN0IiwgIl94MyIsICJ3Z0FjdGlvbiIsICJ3Z0FydGljbGVJZCIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dQYWdlTmFtZSIsICJ3Z1JldmlzaW9uSWQiLCAicXVlcnlDb250cmlidXRvcyIsICJfcXVlcnlDb250cmlidXRvcyJdCn0K
