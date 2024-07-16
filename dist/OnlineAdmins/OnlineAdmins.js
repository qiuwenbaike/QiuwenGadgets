/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Vanished_user_1929210/js/OnlineAdmins.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/OnlineAdmins}
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

// dist/OnlineAdmins/OnlineAdmins.js
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
//! src/OnlineAdmins/modules/components/OnlineAdmins.module.less
var section = "OnlineAdmins-module__section_WS9IGa";
var sectionList = "OnlineAdmins-module__sectionList_WS9IGa";
var talkPageLink = "OnlineAdmins-module__talkPageLink_WS9IGa";
//! src/OnlineAdmins/modules/components/groupList.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/OnlineAdmins/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    " ($1 online):": (0, import_ext_gadget.localize)({
      en: " ($1 online):",
      ja: "（$1人オンライン中）：",
      "zh-hans": "（$1个在线）：",
      "zh-hant": "（$1個在線）："
    }),
    Admins: (0, import_ext_gadget.localize)({
      en: "Admins",
      ja: "管理者",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    Patrollers: (0, import_ext_gadget.localize)({
      en: "Patrollers",
      ja: "巡回者",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    Stewards: (0, import_ext_gadget.localize)({
      en: "Stewards",
      ja: "スチュワード",
      "zh-hans": "裁决委员",
      "zh-hant": "裁決委員"
    }),
    "Network error": (0, import_ext_gadget.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    NoOnline: (0, import_ext_gadget.localize)({
      en: "Currently there are no high privilege users online",
      ja: "現在、高権限利用者はオンラインにいません",
      "zh-hans": "目前没有站务人员在线",
      "zh-hant": "目前沒有站務人員在線"
    }),
    Online: (0, import_ext_gadget.localize)({
      en: "Online admins",
      ja: "オンラインの高権限利用者",
      "zh-hans": "在线站务人员",
      "zh-hant": "線上站務人員"
    }),
    OnlineWithin30Minutes: (0, import_ext_gadget.localize)({
      en: "High privilege users online within 30 minutes:",
      ja: "30分以内にオンラインで高権限利用者：",
      "zh-hans": "下面是最近30分钟内在线的站务人员：",
      "zh-hant": "下面是最近30分鐘內的線上站務人員："
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/OnlineAdmins/modules/components/groupList.tsx
var sanitize = (string) => string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&lt;").replace(/"/g, "&quot;");
var UserLink = ({
  userName
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("li", null, /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  href: mw.util.getUrl("User:".concat(sanitize(userName))),
  rel: "noopener noreferrer",
  target: "_blank"
}, sanitize(userName)), " ", /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  className: talkPageLink
}, "（", /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  href: mw.util.getUrl("User_talk:".concat(sanitize(userName))),
  rel: "noopener noreferrer",
  target: "_blank"
}, "留言"), "）"));
var onlineCountText = getMessage(" ($1 online):");
var GroupList = ({
  groupName,
  userNames
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: section
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, groupName), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, onlineCountText.replace("$1", String(userNames.length))), /* @__PURE__ */ import_ext_gadget2.default.createElement("ul", {
  className: sectionList
}, userNames.map((user) => /* @__PURE__ */ import_ext_gadget2.default.createElement(UserLink, {
  key: user,
  userName: user
}))));
var groupListElement = (groupName, userNames) => /* @__PURE__ */ import_ext_gadget2.default.createElement(GroupList, {
  groupName,
  userNames
});
var listTitle = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("p", null, getMessage("OnlineWithin30Minutes"));
//! src/OnlineAdmins/modules/constant.ts
var BLACK_LIST = ["滥用过滤器"];
//! src/OnlineAdmins/options.json
var version = "2.0";
//! src/OnlineAdmins/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("OnlineAdmins/".concat(version));
//! src/OnlineAdmins/modules/doClick.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var queryRecentChanges = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (rcstart, rcend) {
    const params = {
      rcstart,
      rcend,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "recentchanges",
      rcprop: "user",
      rcshow: ["!bot", "!anon"],
      rclimit: 500
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryRecentChanges2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var queryLogEvents = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (lestart, leend) {
    const params = {
      lestart,
      leend,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "logevents",
      leprop: "user",
      lelimit: 500
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryLogEvents2(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var queryUserProps = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (ususers) {
    const params = {
      ususers,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      usprop: "groups"
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryUserProps2(_x5) {
    return _ref3.apply(this, arguments);
  };
}();
var doClick = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (event) {
    event.preventDefault();
    let users = [];
    const usersExt = [];
    const stewards = [];
    const admins = [];
    const patrollers = [];
    const time = /* @__PURE__ */ new Date();
    const rcstart = time.toISOString();
    time.setMinutes(time.getMinutes() - 30);
    const rcend = time.toISOString();
    try {
      const recentchanges = yield queryRecentChanges(rcstart, rcend);
      var _iterator2 = _createForOfIteratorHelper(recentchanges["query"].recentchanges), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const {
            user
          } = _step2.value;
          users[users.length] = user;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      const logevents = yield queryLogEvents(rcstart, rcend);
      var _iterator3 = _createForOfIteratorHelper(logevents["query"].logevents), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const {
            user
          } = _step3.value;
          usersExt[usersExt.length] = user;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      users = (0, import_ext_gadget4.uniqueArray)([...users, ...usersExt]);
      const promises = [];
      for (let i = 0; i < users.length; i++) {
        const ususers = users.splice(0, 50);
        if (!ususers.length) {
          continue;
        }
        promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
          const response = yield queryUserProps(ususers);
          var _iterator4 = _createForOfIteratorHelper(response["query"].users), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              const {
                groups,
                name
              } = _step4.value;
              if (groups.includes("bot") || BLACK_LIST.includes(name) || !name) {
                continue;
              }
              if (groups.includes("steward")) {
                stewards[stewards.length] = name;
              }
              if (groups.includes("sysop")) {
                admins[admins.length] = name;
              }
              if (groups.includes("patroller")) {
                patrollers[patrollers.length] = name;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        });
      }
      void _asyncToGenerator(function* () {
        for (var _i = 0, _promises = promises; _i < _promises.length; _i++) {
          const promise = _promises[_i];
          try {
            yield promise();
          } catch {
          }
        }
      })().then(() => {
        if (stewards.length + admins.length + patrollers.length) {
          const elements = [listTitle()];
          if (stewards.length) {
            elements[elements.length] = groupListElement(getMessage("Stewards"), stewards);
          }
          if (admins.length) {
            elements[elements.length] = groupListElement(getMessage("Admins"), admins);
          }
          if (patrollers.length) {
            elements[elements.length] = groupListElement(getMessage("Patrollers"), patrollers);
          }
          void mw.notify($("<div>").append(elements), {
            tag: "onlineAdmins"
          });
        } else {
          void mw.notify(getMessage("NoOnline"), {
            tag: "onlineAdmins",
            type: "warn"
          });
        }
      });
    } catch {
      void mw.notify(getMessage("Network error"), {
        tag: "onlineAdmins",
        type: "error"
      });
    }
  });
  return function doClick2(_x6) {
    return _ref4.apply(this, arguments);
  };
}();
//! src/OnlineAdmins/OnlineAdmins.ts
var addPortletLink = () => {
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", getMessage("Online"), "t-onlineadmin");
  if (!element) {
    return;
  }
  $(element).find("a").on("click", (event) => {
    void doClick(event);
  });
};
$(addPortletLink);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb21wb25lbnRzL2dyb3VwTGlzdC50c3giLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvb3B0aW9ucy5qc29uIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9hcGkudHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2RvQ2xpY2sudHMiLCAic3JjL09ubGluZUFkbWlucy9PbmxpbmVBZG1pbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvT25saW5lQWRtaW5zL21vZHVsZXMvY29tcG9uZW50cy9PbmxpbmVBZG1pbnMubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBzZWN0aW9uID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19zZWN0aW9uX1dTOUlHYVwiO1xuZXhwb3J0IGNvbnN0IHNlY3Rpb25MaXN0ID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19zZWN0aW9uTGlzdF9XUzlJR2FcIjtcbmV4cG9ydCBjb25zdCB0YWxrUGFnZUxpbmsgPSBcIk9ubGluZUFkbWlucy1tb2R1bGVfX3RhbGtQYWdlTGlua19XUzlJR2FcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInNlY3Rpb25cIjogc2VjdGlvbixcbiAgXCJzZWN0aW9uTGlzdFwiOiBzZWN0aW9uTGlzdCxcbiAgXCJ0YWxrUGFnZUxpbmtcIjogdGFsa1BhZ2VMaW5rXG59O1xuICAgICAgIiwgImltcG9ydCB7c2VjdGlvbiwgc2VjdGlvbkxpc3QsIHRhbGtQYWdlTGlua30gZnJvbSAnLi9PbmxpbmVBZG1pbnMubW9kdWxlLmxlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+XG5cdHN0cmluZy5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmbHQ7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXG5pbnRlcmZhY2UgVXNlckxpbmtQcm9wcyB7XG5cdHVzZXJOYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBHcm91cExpc3RQcm9wcyB7XG5cdGdyb3VwTmFtZTogc3RyaW5nO1xuXHR1c2VyTmFtZXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBVc2VyTGluayA9ICh7dXNlck5hbWV9OiBVc2VyTGlua1Byb3BzKSA9PiAoXG5cdDxsaT5cblx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcjoke3Nhbml0aXplKHVzZXJOYW1lKX1gKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0e3Nhbml0aXplKHVzZXJOYW1lKX1cblx0XHQ8L2E+XG5cdFx0Jm5ic3A7XG5cdFx0PHNwYW4gY2xhc3NOYW1lPXt0YWxrUGFnZUxpbmt9PlxuXHRcdFx077yIXG5cdFx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcl90YWxrOiR7c2FuaXRpemUodXNlck5hbWUpfWApfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdOeVmeiogFxuXHRcdFx0PC9hPlxuXHRcdFx077yJXG5cdFx0PC9zcGFuPlxuXHQ8L2xpPlxuKTtcblxuY29uc3Qgb25saW5lQ291bnRUZXh0OiBzdHJpbmcgPSBnZXRNZXNzYWdlKCcgKCQxIG9ubGluZSk6Jyk7XG5cbmNvbnN0IEdyb3VwTGlzdCA9ICh7Z3JvdXBOYW1lLCB1c2VyTmFtZXN9OiBHcm91cExpc3RQcm9wcykgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17c2VjdGlvbn0+XG5cdFx0PHNwYW4+e2dyb3VwTmFtZX08L3NwYW4+XG5cdFx0PHNwYW4+e29ubGluZUNvdW50VGV4dC5yZXBsYWNlKCckMScsIFN0cmluZyh1c2VyTmFtZXMubGVuZ3RoKSl9PC9zcGFuPlxuXHRcdDx1bCBjbGFzc05hbWU9e3NlY3Rpb25MaXN0fT5cblx0XHRcdHt1c2VyTmFtZXMubWFwKCh1c2VyKSA9PiAoXG5cdFx0XHRcdDxVc2VyTGluayBrZXk9e3VzZXJ9IHVzZXJOYW1lPXt1c2VyfSAvPlxuXHRcdFx0KSl9XG5cdFx0PC91bD5cblx0PC9kaXY+XG4pO1xuXG5jb25zdCBncm91cExpc3RFbGVtZW50ID0gKGdyb3VwTmFtZTogc3RyaW5nLCB1c2VyTmFtZXM6IHN0cmluZ1tdKSA9PiAoXG5cdDxHcm91cExpc3QgZ3JvdXBOYW1lPXtncm91cE5hbWV9IHVzZXJOYW1lcz17dXNlck5hbWVzfSAvPlxuKTtcblxuY29uc3QgbGlzdFRpdGxlID0gKCkgPT4gPHA+e2dldE1lc3NhZ2UoJ09ubGluZVdpdGhpbjMwTWludXRlcycpfTwvcD47XG5cbmV4cG9ydCB7Z3JvdXBMaXN0RWxlbWVudCwgbGlzdFRpdGxlfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0JyAoJDEgb25saW5lKTonOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJDEgb25saW5lKTonLFxuXHRcdFx0amE6ICfvvIgkMeS6uuOCquODs+ODqeOCpOODs+S4re+8ie+8micsXG5cdFx0XHQnemgtaGFucyc6ICfvvIgkMeS4quWcqOe6v++8ie+8micsXG5cdFx0XHQnemgtaGFudCc6ICfvvIgkMeWAi+WcqOe3mu+8ie+8micsXG5cdFx0fSksXG5cdFx0QWRtaW5zOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FkbWlucycsXG5cdFx0XHRqYTogJ+euoeeQhuiAhScsXG5cdFx0XHQnemgtaGFucyc6ICfnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHRQYXRyb2xsZXJzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbGxlcnMnLFxuXHRcdFx0amE6ICflt6Hlm57ogIUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0U3Rld2FyZHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZHMnLFxuXHRcdFx0amE6ICfjgrnjg4Hjg6Xjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn6KOB5Yaz5aeU5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ijgeaxuuWnlOWToScsXG5cdFx0fSksXG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3InLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0Tm9PbmxpbmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZXJlIGFyZSBubyBoaWdoIHByaXZpbGVnZSB1c2VycyBvbmxpbmUnLFxuXHRcdFx0amE6ICfnj77lnKjjgIHpq5jmqKnpmZDliKnnlKjogIXjga/jgqrjg7Pjg6njgqTjg7PjgavjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWhhbnMnOiAn55uu5YmN5rKh5pyJ56uZ5Yqh5Lq65ZGY5Zyo57q/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ebruWJjeaykuacieermeWLmeS6uuWToeWcqOe3micsXG5cdFx0fSksXG5cdFx0T25saW5lOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ09ubGluZSBhZG1pbnMnLFxuXHRcdFx0amE6ICfjgqrjg7Pjg6njgqTjg7Pjga7pq5jmqKnpmZDliKnnlKjogIUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Zyo57q/56uZ5Yqh5Lq65ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3muS4iuermeWLmeS6uuWToScsXG5cdFx0fSksXG5cdFx0T25saW5lV2l0aGluMzBNaW51dGVzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0hpZ2ggcHJpdmlsZWdlIHVzZXJzIG9ubGluZSB3aXRoaW4gMzAgbWludXRlczonLFxuXHRcdFx0amE6ICczMOWIhuS7peWGheOBq+OCquODs+ODqeOCpOODs+OBp+mrmOaoqemZkOWIqeeUqOiAhe+8micsXG5cdFx0XHQnemgtaGFucyc6ICfkuIvpnaLmmK/mnIDov5EzMOWIhumSn+WGheWcqOe6v+eahOermeWKoeS6uuWRmO+8micsXG5cdFx0XHQnemgtaGFudCc6ICfkuIvpnaLmmK/mnIDov5EzMOWIhumQmOWFp+eahOe3muS4iuermeWLmeS6uuWToe+8micsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IEJMQUNLX0xJU1Q6IHN0cmluZ1tdID0gWyfmu6XnlKjov4fmu6TlmagnXTtcblxuZXhwb3J0IHtCTEFDS19MSVNUfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBPbmxpbmVBZG1pbnMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2dyb3VwTGlzdEVsZW1lbnQsIGxpc3RUaXRsZX0gZnJvbSAnLi9jb21wb25lbnRzL2dyb3VwTGlzdCc7XG5pbXBvcnQge0JMQUNLX0xJU1R9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHF1ZXJ5UmVjZW50Q2hhbmdlcyA9IGFzeW5jIChyY3N0YXJ0OiBzdHJpbmcsIHJjZW5kOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJlY2VudENoYW5nZXNQYXJhbXMgPSB7XG5cdFx0cmNzdGFydCxcblx0XHRyY2VuZCxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICdyZWNlbnRjaGFuZ2VzJyxcblx0XHRyY3Byb3A6ICd1c2VyJyxcblx0XHRyY3Nob3c6IFsnIWJvdCcsICchYW5vbiddLFxuXHRcdHJjbGltaXQ6IDUwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlMb2dFdmVudHMgPSBhc3luYyAobGVzdGFydDogc3RyaW5nLCBsZWVuZDogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0bGVzdGFydCxcblx0XHRsZWVuZCxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdGxlcHJvcDogJ3VzZXInLFxuXHRcdGxlbGltaXQ6IDUwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlVc2VyUHJvcHMgPSBhc3luYyAodXN1c2Vyczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdHVzdXNlcnMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdHVzcHJvcDogJ2dyb3VwcycsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGRvQ2xpY2sgPSBhc3luYyAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50PEhUTUxBbmNob3JFbGVtZW50Pik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdGxldCB1c2Vyczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3QgdXNlcnNFeHQ6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHN0ZXdhcmRzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCBhZG1pbnM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHBhdHJvbGxlcnM6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3QgdGltZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IHJjc3RhcnQ6IHN0cmluZyA9IHRpbWUudG9JU09TdHJpbmcoKTtcblx0dGltZS5zZXRNaW51dGVzKHRpbWUuZ2V0TWludXRlcygpIC0gMzApOyAvLyDmnIDov5Hmm7TmlLkzMOWIhumSn+WGheeahOe8lui+keeUqOaIt1xuXHRjb25zdCByY2VuZDogc3RyaW5nID0gdGltZS50b0lTT1N0cmluZygpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVjZW50Y2hhbmdlcyA9IGF3YWl0IHF1ZXJ5UmVjZW50Q2hhbmdlcyhyY3N0YXJ0LCByY2VuZCk7XG5cblx0XHRmb3IgKGNvbnN0IHt1c2VyfSBvZiByZWNlbnRjaGFuZ2VzWydxdWVyeSddLnJlY2VudGNoYW5nZXMgYXMge3VzZXI6IHN0cmluZ31bXSkge1xuXHRcdFx0dXNlcnNbdXNlcnMubGVuZ3RoXSA9IHVzZXI7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdH1cblxuXHRcdGNvbnN0IGxvZ2V2ZW50cyA9IGF3YWl0IHF1ZXJ5TG9nRXZlbnRzKHJjc3RhcnQsIHJjZW5kKTtcblxuXHRcdGZvciAoY29uc3Qge3VzZXJ9IG9mIGxvZ2V2ZW50c1sncXVlcnknXS5sb2dldmVudHMgYXMge3VzZXI6IHN0cmluZ31bXSkge1xuXHRcdFx0dXNlcnNFeHRbdXNlcnNFeHQubGVuZ3RoXSA9IHVzZXI7XG5cdFx0fVxuXG5cdFx0Ly8g55So5oi35ZCN5YiX6KGo5ZCI5bm244CB5Y676YeN44CB5YiG5YmyXG5cdFx0dXNlcnMgPSB1bmlxdWVBcnJheShbLi4udXNlcnMsIC4uLnVzZXJzRXh0XSk7IC8vIFJlcGxhY2UgYFsuLi5uZXcgU2V0KCldYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cblx0XHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHVzdXNlcnMgPSB1c2Vycy5zcGxpY2UoMCwgNTApO1xuXHRcdFx0aWYgKCF1c3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVVzZXJQcm9wcyh1c3VzZXJzKTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHtncm91cHMsIG5hbWV9IG9mIHJlc3BvbnNlWydxdWVyeSddLnVzZXJzIGFzIHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHQvLyDmib7liLDnrqHnkIbkurrlkZjvvIzljrvpmaTmnLrlmajkurrvvIzmtojpmaRuYW1l55qE56m65YC8XG5cdFx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnYm90JykgfHwgQkxBQ0tfTElTVC5pbmNsdWRlcyhuYW1lKSB8fCAhbmFtZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3N0ZXdhcmQnKSkge1xuXHRcdFx0XHRcdFx0c3Rld2FyZHNbc3Rld2FyZHMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3N5c29wJykpIHtcblx0XHRcdFx0XHRcdGFkbWluc1thZG1pbnMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3BhdHJvbGxlcicpKSB7XG5cdFx0XHRcdFx0XHRwYXRyb2xsZXJzW3BhdHJvbGxlcnMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdC8vIOafpeivoueUqOaIt+adg+mZkFxuXHRcdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHR9XG5cdFx0fSkoKS50aGVuKCgpID0+IHtcblx0XHRcdGlmIChzdGV3YXJkcy5sZW5ndGggKyBhZG1pbnMubGVuZ3RoICsgcGF0cm9sbGVycy5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgZWxlbWVudHM6IEVsZW1lbnRbXSA9IFtsaXN0VGl0bGUoKV07XG5cblx0XHRcdFx0aWYgKHN0ZXdhcmRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aF0gPSBncm91cExpc3RFbGVtZW50KGdldE1lc3NhZ2UoJ1N0ZXdhcmRzJyksIHN0ZXdhcmRzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYWRtaW5zLmxlbmd0aCkge1xuXHRcdFx0XHRcdGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aF0gPSBncm91cExpc3RFbGVtZW50KGdldE1lc3NhZ2UoJ0FkbWlucycpLCBhZG1pbnMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwYXRyb2xsZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aF0gPSBncm91cExpc3RFbGVtZW50KGdldE1lc3NhZ2UoJ1BhdHJvbGxlcnMnKSwgcGF0cm9sbGVycyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoJCgnPGRpdj4nKS5hcHBlbmQoZWxlbWVudHMpLCB7dGFnOiAnb25saW5lQWRtaW5zJ30pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnTm9PbmxpbmUnKSwge1xuXHRcdFx0XHRcdHRhZzogJ29ubGluZUFkbWlucycsXG5cdFx0XHRcdFx0dHlwZTogJ3dhcm4nLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSBjYXRjaCB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLCB7dGFnOiAnb25saW5lQWRtaW5zJywgdHlwZTogJ2Vycm9yJ30pO1xuXHR9XG59O1xuXG5leHBvcnQge2RvQ2xpY2t9O1xuIiwgImltcG9ydCB7ZG9DbGlja30gZnJvbSAnLi9tb2R1bGVzL2RvQ2xpY2snO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKCk6IHZvaWQgPT4ge1xuXHQvLyBDcmVhdGUgcG9ydGxldCBsaW5rXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBnZXRNZXNzYWdlKCdPbmxpbmUnKSwgJ3Qtb25saW5lYWRtaW4nKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gQmluZCBjbGljayBsaXN0ZW5lclxuXHQkKGVsZW1lbnQpXG5cdFx0LmZpbmQoJ2EnKVxuXHRcdC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdHZvaWQgZG9DbGljayhldmVudCk7XG5cdFx0fSk7XG59O1xuXG4kKGFkZFBvcnRsZXRMaW5rKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNPLElBQU1BLFVBQVU7QUFDaEIsSUFBTUMsY0FBYztBQUNwQixJQUFNQyxlQUFlOztBQ0Y1QixJQUFBQyxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixrQkFBQSxHQUFp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RUMsT0FBT0gsUUFBUSxHQUFHO1lBQUNJLEtBQUs7VUFBYyxDQUFDO1FBQ2xFLE9BQU87QUFDTixlQUFLcEcsR0FBR2lHLE9BQU8zRyxXQUFXLFVBQVUsR0FBRztZQUN0QzhHLEtBQUs7WUFDTEMsTUFBTTtVQUNQLENBQUM7UUFDRjtNQUNELENBQUM7SUFDRixRQUFRO0FBQ1AsV0FBS3JHLEdBQUdpRyxPQUFPM0csV0FBVyxlQUFlLEdBQUc7UUFBQzhHLEtBQUs7UUFBZ0JDLE1BQU07TUFBTyxDQUFDO0lBQ2pGO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0ExRk05QyxTQUFBK0MsS0FBQTtBQUFBLFdBQUE5QyxNQUFBaEIsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBQ2xETixJQUFNOEQsaUJBQWlCQSxNQUFZO0FBRWxDLFFBQU1DLFlBQW1DQyxTQUFTQyxjQUFjLGFBQWEsSUFBSSxlQUFlO0FBQ2hHLFFBQU1DLFVBQWdDM0csR0FBR0MsS0FBS3NHLGVBQWVDLFdBQVcsS0FBS2xILFdBQVcsUUFBUSxHQUFHLGVBQWU7QUFDbEgsTUFBSSxDQUFDcUgsU0FBUztBQUNiO0VBQ0Q7QUFHQVQsSUFBRVMsT0FBTyxFQUNQQyxLQUFLLEdBQUcsRUFDUkMsR0FBRyxTQUFVcEQsV0FBVTtBQUN2QixTQUFLRixRQUFRRSxLQUFLO0VBQ25CLENBQUM7QUFDSDtBQUVBeUMsRUFBRUssY0FBYzsiLAogICJuYW1lcyI6IFsic2VjdGlvbiIsICJzZWN0aW9uTGlzdCIsICJ0YWxrUGFnZUxpbmsiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQWRtaW5zIiwgIlBhdHJvbGxlcnMiLCAiU3Rld2FyZHMiLCAiTm9PbmxpbmUiLCAiT25saW5lIiwgIk9ubGluZVdpdGhpbjMwTWludXRlcyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic2FuaXRpemUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiVXNlckxpbmsiLCAidXNlck5hbWUiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImhyZWYiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAiY29uY2F0IiwgInJlbCIsICJ0YXJnZXQiLCAiY2xhc3NOYW1lIiwgIm9ubGluZUNvdW50VGV4dCIsICJHcm91cExpc3QiLCAiZ3JvdXBOYW1lIiwgInVzZXJOYW1lcyIsICJTdHJpbmciLCAibGVuZ3RoIiwgIm1hcCIsICJ1c2VyIiwgImdyb3VwTGlzdEVsZW1lbnQiLCAibGlzdFRpdGxlIiwgIkJMQUNLX0xJU1QiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAicXVlcnlSZWNlbnRDaGFuZ2VzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicmNzdGFydCIsICJyY2VuZCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAicmNwcm9wIiwgInJjc2hvdyIsICJyY2xpbWl0IiwgInJlc3BvbnNlIiwgImdldCIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInF1ZXJ5TG9nRXZlbnRzIiwgIl9yZWYyIiwgImxlc3RhcnQiLCAibGVlbmQiLCAibGVwcm9wIiwgImxlbGltaXQiLCAiX3gzIiwgIl94NCIsICJxdWVyeVVzZXJQcm9wcyIsICJfcmVmMyIsICJ1c3VzZXJzIiwgInVzcHJvcCIsICJfeDUiLCAiZG9DbGljayIsICJfcmVmNCIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJ1c2VycyIsICJ1c2Vyc0V4dCIsICJzdGV3YXJkcyIsICJhZG1pbnMiLCAicGF0cm9sbGVycyIsICJ0aW1lIiwgIkRhdGUiLCAidG9JU09TdHJpbmciLCAic2V0TWludXRlcyIsICJnZXRNaW51dGVzIiwgInJlY2VudGNoYW5nZXMiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJsb2dldmVudHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAidW5pcXVlQXJyYXkiLCAicHJvbWlzZXMiLCAiaSIsICJzcGxpY2UiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiZ3JvdXBzIiwgIm5hbWUiLCAiaW5jbHVkZXMiLCAiX2kiLCAiX3Byb21pc2VzIiwgInByb21pc2UiLCAidGhlbiIsICJlbGVtZW50cyIsICJub3RpZnkiLCAiJCIsICJhcHBlbmQiLCAidGFnIiwgInR5cGUiLCAiX3g2IiwgImFkZFBvcnRsZXRMaW5rIiwgInBvcnRsZXRJZCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVsZW1lbnQiLCAiZmluZCIsICJvbiJdCn0K
