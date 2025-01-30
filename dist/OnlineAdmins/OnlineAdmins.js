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
    }),
    SysOps: (0, import_ext_gadget.localize)({
      en: "Admins",
      ja: "管理者",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/OnlineAdmins/modules/components/groupList.tsx
var sanitize = (string) => string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
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
//! src/OnlineAdmins/options.json
var version = "2.0";
var storageKey = "ext.gadget.OnlineAdmins_getAdmins";
//! src/OnlineAdmins/modules/util/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("OnlineAdmins/".concat(version));
//! src/OnlineAdmins/modules/util/query.ts
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
      rclimit: 500,
      smaxage: 600,
      maxage: 600
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
      lelimit: 500,
      smaxage: 600,
      maxage: 600
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
      usprop: "groups",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryUserProps2(_x5) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/OnlineAdmins/modules/constant.ts
var BLACK_LIST = ["滥用过滤器"];
//! src/OnlineAdmins/modules/util/getAdmins.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var getAdmins = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* () {
    let stewards = [];
    let sysops = [];
    let patrollers = [];
    if (mw.storage.getObject(storageKey)) {
      ({
        stewards,
        sysops,
        patrollers
      } = mw.storage.getObject(storageKey));
    } else {
      let users = [];
      const promises = [];
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
      } catch {
      }
      try {
        const logevents = yield queryLogEvents(rcstart, rcend);
        var _iterator3 = _createForOfIteratorHelper(logevents["query"].logevents), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const {
              user
            } = _step3.value;
            users[users.length] = user;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } catch {
      }
      users = (0, import_ext_gadget4.uniqueArray)(users);
      for (let i = 0; i < users.length; i++) {
        const ususers = users.splice(0, 25);
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
              if (groups.includes("bot") || BLACK_LIST.includes(name)) {
                continue;
              }
              if (!name) {
                continue;
              }
              if (groups.includes("steward")) {
                stewards[stewards.length] = name;
              }
              if (groups.includes("sysop")) {
                sysops[sysops.length] = name;
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
      for (var _i = 0, _promises = promises; _i < _promises.length; _i++) {
        const promise = _promises[_i];
        try {
          yield promise();
        } catch {
        }
      }
    }
    return {
      stewards,
      sysops,
      patrollers
    };
  });
  return function getAdmins2() {
    return _ref4.apply(this, arguments);
  };
}();
//! src/OnlineAdmins/modules/doClick.ts
var doClick = /* @__PURE__ */ function() {
  var _ref6 = _asyncToGenerator(function* (event) {
    event.preventDefault();
    const notify = (element, type = "info") => {
      return mw.notify(element, {
        tag: "onlineAdmins",
        type
      });
    };
    try {
      const {
        stewards,
        sysops,
        patrollers
      } = yield getAdmins();
      if (stewards.length + sysops.length + patrollers.length) {
        const elements = [listTitle()];
        if (stewards.length) {
          elements[elements.length] = groupListElement(getMessage("Stewards"), stewards);
        }
        if (sysops.length) {
          elements[elements.length] = groupListElement(getMessage("SysOps"), sysops);
        }
        if (patrollers.length) {
          elements[elements.length] = groupListElement(getMessage("Patrollers"), patrollers);
        }
        void notify($("<div>").append(elements));
      } else {
        void notify(getMessage("NoOnline"), "warn");
      }
    } catch {
      void notify(getMessage("Network error"), "error");
    }
  });
  return function doClick2(_x6) {
    return _ref6.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb21wb25lbnRzL2dyb3VwTGlzdC50c3giLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL09ubGluZUFkbWlucy9vcHRpb25zLmpzb24iLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy91dGlsL3F1ZXJ5LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvT25saW5lQWRtaW5zL21vZHVsZXMvdXRpbC9nZXRBZG1pbnMudHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2RvQ2xpY2sudHMiLCAic3JjL09ubGluZUFkbWlucy9PbmxpbmVBZG1pbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvT25saW5lQWRtaW5zL21vZHVsZXMvY29tcG9uZW50cy9PbmxpbmVBZG1pbnMubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBzZWN0aW9uID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19zZWN0aW9uX1dTOUlHYVwiO1xuZXhwb3J0IGNvbnN0IHNlY3Rpb25MaXN0ID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19zZWN0aW9uTGlzdF9XUzlJR2FcIjtcbmV4cG9ydCBjb25zdCB0YWxrUGFnZUxpbmsgPSBcIk9ubGluZUFkbWlucy1tb2R1bGVfX3RhbGtQYWdlTGlua19XUzlJR2FcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInNlY3Rpb25cIjogc2VjdGlvbixcbiAgXCJzZWN0aW9uTGlzdFwiOiBzZWN0aW9uTGlzdCxcbiAgXCJ0YWxrUGFnZUxpbmtcIjogdGFsa1BhZ2VMaW5rXG59O1xuICAgICAgIiwgImltcG9ydCB7c2VjdGlvbiwgc2VjdGlvbkxpc3QsIHRhbGtQYWdlTGlua30gZnJvbSAnLi9PbmxpbmVBZG1pbnMubW9kdWxlLmxlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+XG5cdHN0cmluZ1xuXHRcdC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG5cdFx0LnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuXHRcdC5yZXBsYWNlKC8+L2csICcmZ3Q7Jylcblx0XHQucmVwbGFjZSgvJy9nLCAnJmFwb3M7Jylcblx0XHQucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXG5pbnRlcmZhY2UgVXNlckxpbmtQcm9wcyB7XG5cdHVzZXJOYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBHcm91cExpc3RQcm9wcyB7XG5cdGdyb3VwTmFtZTogc3RyaW5nO1xuXHR1c2VyTmFtZXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBVc2VyTGluayA9ICh7dXNlck5hbWV9OiBVc2VyTGlua1Byb3BzKSA9PiAoXG5cdDxsaT5cblx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcjoke3Nhbml0aXplKHVzZXJOYW1lKX1gKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0e3Nhbml0aXplKHVzZXJOYW1lKX1cblx0XHQ8L2E+XG5cdFx0Jm5ic3A7XG5cdFx0PHNwYW4gY2xhc3NOYW1lPXt0YWxrUGFnZUxpbmt9PlxuXHRcdFx077yIXG5cdFx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcl90YWxrOiR7c2FuaXRpemUodXNlck5hbWUpfWApfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdOeVmeiogFxuXHRcdFx0PC9hPlxuXHRcdFx077yJXG5cdFx0PC9zcGFuPlxuXHQ8L2xpPlxuKTtcblxuY29uc3Qgb25saW5lQ291bnRUZXh0OiBzdHJpbmcgPSBnZXRNZXNzYWdlKCcgKCQxIG9ubGluZSk6Jyk7XG5cbmNvbnN0IEdyb3VwTGlzdCA9ICh7Z3JvdXBOYW1lLCB1c2VyTmFtZXN9OiBHcm91cExpc3RQcm9wcykgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17c2VjdGlvbn0+XG5cdFx0PHNwYW4+e2dyb3VwTmFtZX08L3NwYW4+XG5cdFx0PHNwYW4+e29ubGluZUNvdW50VGV4dC5yZXBsYWNlKCckMScsIFN0cmluZyh1c2VyTmFtZXMubGVuZ3RoKSl9PC9zcGFuPlxuXHRcdDx1bCBjbGFzc05hbWU9e3NlY3Rpb25MaXN0fT5cblx0XHRcdHt1c2VyTmFtZXMubWFwKCh1c2VyKSA9PiAoXG5cdFx0XHRcdDxVc2VyTGluayBrZXk9e3VzZXJ9IHVzZXJOYW1lPXt1c2VyfSAvPlxuXHRcdFx0KSl9XG5cdFx0PC91bD5cblx0PC9kaXY+XG4pO1xuXG5jb25zdCBncm91cExpc3RFbGVtZW50ID0gKGdyb3VwTmFtZTogc3RyaW5nLCB1c2VyTmFtZXM6IHN0cmluZ1tdKSA9PiAoXG5cdDxHcm91cExpc3QgZ3JvdXBOYW1lPXtncm91cE5hbWV9IHVzZXJOYW1lcz17dXNlck5hbWVzfSAvPlxuKTtcblxuY29uc3QgbGlzdFRpdGxlID0gKCkgPT4gPHA+e2dldE1lc3NhZ2UoJ09ubGluZVdpdGhpbjMwTWludXRlcycpfTwvcD47XG5cbmV4cG9ydCB7Z3JvdXBMaXN0RWxlbWVudCwgbGlzdFRpdGxlfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0JyAoJDEgb25saW5lKTonOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJDEgb25saW5lKTonLFxuXHRcdFx0amE6ICfvvIgkMeS6uuOCquODs+ODqeOCpOODs+S4re+8ie+8micsXG5cdFx0XHQnemgtaGFucyc6ICfvvIgkMeS4quWcqOe6v++8ie+8micsXG5cdFx0XHQnemgtaGFudCc6ICfvvIgkMeWAi+WcqOe3mu+8ie+8micsXG5cdFx0fSksXG5cdFx0UGF0cm9sbGVyczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZXJzJyxcblx0XHRcdGphOiAn5beh5Zue6ICFJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdFN0ZXdhcmRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N0ZXdhcmRzJyxcblx0XHRcdGphOiAn44K544OB44Ol44Ov44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ijgeWGs+WnlOWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfoo4Hmsbrlp5Tlk6EnLFxuXHRcdH0pLFxuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdE5vT25saW5lOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGVyZSBhcmUgbm8gaGlnaCBwcml2aWxlZ2UgdXNlcnMgb25saW5lJyxcblx0XHRcdGphOiAn54++5Zyo44CB6auY5qip6ZmQ5Yip55So6ICF44Gv44Kq44Oz44Op44Kk44Oz44Gr44GE44G+44Gb44KTJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebruWJjeayoeacieermeWKoeS6uuWRmOWcqOe6vycsXG5cdFx0XHQnemgtaGFudCc6ICfnm67liY3mspLmnInnq5nli5nkurrlk6HlnKjnt5onLFxuXHRcdH0pLFxuXHRcdE9ubGluZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPbmxpbmUgYWRtaW5zJyxcblx0XHRcdGphOiAn44Kq44Oz44Op44Kk44Oz44Gu6auY5qip6ZmQ5Yip55So6ICFJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WcqOe6v+ermeWKoeS6uuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnt5rkuIrnq5nli5nkurrlk6EnLFxuXHRcdH0pLFxuXHRcdE9ubGluZVdpdGhpbjMwTWludXRlczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdIaWdoIHByaXZpbGVnZSB1c2VycyBvbmxpbmUgd2l0aGluIDMwIG1pbnV0ZXM6Jyxcblx0XHRcdGphOiAnMzDliIbku6XlhoXjgavjgqrjg7Pjg6njgqTjg7Pjgafpq5jmqKnpmZDliKnnlKjogIXvvJonLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiL6Z2i5piv5pyA6L+RMzDliIbpkp/lhoXlnKjnur/nmoTnq5nliqHkurrlkZjvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiL6Z2i5piv5pyA6L+RMzDliIbpkJjlhafnmoTnt5rkuIrnq5nli5nkurrlk6HvvJonLFxuXHRcdH0pLFxuXHRcdFN5c09wczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZG1pbnMnLFxuXHRcdFx0amE6ICfnrqHnkIbogIUnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCIsXG5cdFwic3RvcmFnZUtleVwiOiBcImV4dC5nYWRnZXQuT25saW5lQWRtaW5zX2dldEFkbWluc1wiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBPbmxpbmVBZG1pbnMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBxdWVyeVJlY2VudENoYW5nZXMgPSBhc3luYyAocmNzdGFydDogc3RyaW5nLCByY2VuZDogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZWNlbnRDaGFuZ2VzUGFyYW1zID0ge1xuXHRcdHJjc3RhcnQsXG5cdFx0cmNlbmQsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAncmVjZW50Y2hhbmdlcycsXG5cdFx0cmNwcm9wOiAndXNlcicsXG5cdFx0cmNzaG93OiBbJyFib3QnLCAnIWFub24nXSxcblx0XHRyY2xpbWl0OiA1MDAsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBxdWVyeUxvZ0V2ZW50cyA9IGFzeW5jIChsZXN0YXJ0OiBzdHJpbmcsIGxlZW5kOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRsZXN0YXJ0LFxuXHRcdGxlZW5kLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0bGVwcm9wOiAndXNlcicsXG5cdFx0bGVsaW1pdDogNTAwLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlVc2VyUHJvcHMgPSBhc3luYyAodXN1c2Vyczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdHVzdXNlcnMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdHVzcHJvcDogJ2dyb3VwcycsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQge3F1ZXJ5UmVjZW50Q2hhbmdlcywgcXVlcnlMb2dFdmVudHMsIHF1ZXJ5VXNlclByb3BzfTtcbiIsICJjb25zdCBCTEFDS19MSVNUOiBzdHJpbmdbXSA9IFsn5rul55So6L+H5ruk5ZmoJ107XG5cbmV4cG9ydCB7QkxBQ0tfTElTVH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtxdWVyeUxvZ0V2ZW50cywgcXVlcnlSZWNlbnRDaGFuZ2VzLCBxdWVyeVVzZXJQcm9wc30gZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQge0JMQUNLX0xJU1R9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGdldEFkbWlucyA9IGFzeW5jICgpID0+IHtcblx0bGV0IHN0ZXdhcmRzOiBzdHJpbmdbXSA9IFtdO1xuXHRsZXQgc3lzb3BzOiBzdHJpbmdbXSA9IFtdO1xuXHRsZXQgcGF0cm9sbGVyczogc3RyaW5nW10gPSBbXTtcblxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5KSkge1xuXHRcdCh7c3Rld2FyZHMsIHN5c29wcywgcGF0cm9sbGVyc30gPSBtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkpIGFzIHtcblx0XHRcdHN0ZXdhcmRzOiBzdHJpbmdbXTtcblx0XHRcdHN5c29wczogc3RyaW5nW107XG5cdFx0XHRwYXRyb2xsZXJzOiBzdHJpbmdbXTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRsZXQgdXNlcnM6IHN0cmluZ1tdID0gW107XG5cdFx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0XHRjb25zdCB0aW1lOiBEYXRlID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCByY3N0YXJ0OiBzdHJpbmcgPSB0aW1lLnRvSVNPU3RyaW5nKCk7XG5cblx0XHQvLyBRdWVyeSB1c2VycyBoYXMgbG9nL2VkaXQgcmVjb3JkIGluIHJlY2VudCAzMCBtaW51dGVzXG5cdFx0dGltZS5zZXRNaW51dGVzKHRpbWUuZ2V0TWludXRlcygpIC0gMzApOyAvLyDmnIDov5Hmm7TmlLkzMOWIhumSn+WGheeahOe8lui+keeUqOaIt1xuXHRcdGNvbnN0IHJjZW5kOiBzdHJpbmcgPSB0aW1lLnRvSVNPU3RyaW5nKCk7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVjZW50Y2hhbmdlcyA9IGF3YWl0IHF1ZXJ5UmVjZW50Q2hhbmdlcyhyY3N0YXJ0LCByY2VuZCk7XG5cblx0XHRcdGZvciAoY29uc3Qge3VzZXJ9IG9mIHJlY2VudGNoYW5nZXNbJ3F1ZXJ5J10ucmVjZW50Y2hhbmdlcyBhcyB7dXNlcjogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdHVzZXJzW3VzZXJzLmxlbmd0aF0gPSB1c2VyOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBsb2dldmVudHMgPSBhd2FpdCBxdWVyeUxvZ0V2ZW50cyhyY3N0YXJ0LCByY2VuZCk7XG5cblx0XHRcdGZvciAoY29uc3Qge3VzZXJ9IG9mIGxvZ2V2ZW50c1sncXVlcnknXS5sb2dldmVudHMgYXMge3VzZXI6IHN0cmluZ31bXSkge1xuXHRcdFx0XHR1c2Vyc1t1c2Vycy5sZW5ndGhdID0gdXNlcjtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cblx0XHR1c2VycyA9IHVuaXF1ZUFycmF5KHVzZXJzKTsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXG5cdFx0Ly8gR2VuZXJhdGluZyBxdWVyeSBwcm9taXNlc1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHVzdXNlcnMgPSB1c2Vycy5zcGxpY2UoMCwgMjUpO1xuXHRcdFx0aWYgKCF1c3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVVzZXJQcm9wcyh1c3VzZXJzKTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHtncm91cHMsIG5hbWV9IG9mIHJlc3BvbnNlWydxdWVyeSddLnVzZXJzIGFzIHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHQvLyByZW1vdmUgYm90c1xuXHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2JvdCcpIHx8IEJMQUNLX0xJU1QuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIHJlbW92ZSBsb2dzIHdpdGggbm8gdXNlciBuYW1lc1xuXHRcdFx0XHRcdGlmICghbmFtZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc3Rld2FyZCcpKSB7XG5cdFx0XHRcdFx0XHRzdGV3YXJkc1tzdGV3YXJkcy5sZW5ndGhdID0gbmFtZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzeXNvcCcpKSB7XG5cdFx0XHRcdFx0XHRzeXNvcHNbc3lzb3BzLmxlbmd0aF0gPSBuYW1lO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3BhdHJvbGxlcicpKSB7XG5cdFx0XHRcdFx0XHRwYXRyb2xsZXJzW3BhdHJvbGxlcnMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7c3Rld2FyZHMsIHN5c29wcywgcGF0cm9sbGVyc307XG59O1xuXG5leHBvcnQge2dldEFkbWluc307XG4iLCAiaW1wb3J0IHtncm91cExpc3RFbGVtZW50LCBsaXN0VGl0bGV9IGZyb20gJy4vY29tcG9uZW50cy9ncm91cExpc3QnO1xuaW1wb3J0IHtnZXRBZG1pbnN9IGZyb20gJy4vdXRpbC9nZXRBZG1pbnMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBkb0NsaWNrID0gYXN5bmMgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudDxIVE1MQW5jaG9yRWxlbWVudD4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRjb25zdCBub3RpZnkgPSAoZWxlbWVudDogc3RyaW5nIHwgSlF1ZXJ5PEhUTUxFbGVtZW50PiwgdHlwZTogJ2Vycm9yJyB8ICdpbmZvJyB8ICdzdWNjZXNzJyB8ICd3YXJuJyA9ICdpbmZvJykgPT4ge1xuXHRcdHJldHVybiBtdy5ub3RpZnkoZWxlbWVudCwge1xuXHRcdFx0dGFnOiAnb25saW5lQWRtaW5zJyxcblx0XHRcdHR5cGUsXG5cdFx0fSk7XG5cdH07XG5cblx0dHJ5IHtcblx0XHRjb25zdCB7c3Rld2FyZHMsIHN5c29wcywgcGF0cm9sbGVyc30gPSBhd2FpdCBnZXRBZG1pbnMoKTtcblxuXHRcdGlmIChzdGV3YXJkcy5sZW5ndGggKyBzeXNvcHMubGVuZ3RoICsgcGF0cm9sbGVycy5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IGVsZW1lbnRzOiBFbGVtZW50W10gPSBbbGlzdFRpdGxlKCldO1xuXG5cdFx0XHRpZiAoc3Rld2FyZHMubGVuZ3RoKSB7XG5cdFx0XHRcdGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aF0gPSBncm91cExpc3RFbGVtZW50KGdldE1lc3NhZ2UoJ1N0ZXdhcmRzJyksIHN0ZXdhcmRzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHN5c29wcy5sZW5ndGgpIHtcblx0XHRcdFx0ZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoXSA9IGdyb3VwTGlzdEVsZW1lbnQoZ2V0TWVzc2FnZSgnU3lzT3BzJyksIHN5c29wcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwYXRyb2xsZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRlbGVtZW50c1tlbGVtZW50cy5sZW5ndGhdID0gZ3JvdXBMaXN0RWxlbWVudChnZXRNZXNzYWdlKCdQYXRyb2xsZXJzJyksIHBhdHJvbGxlcnMpO1xuXHRcdFx0fVxuXG5cdFx0XHR2b2lkIG5vdGlmeSgkKCc8ZGl2PicpLmFwcGVuZChlbGVtZW50cykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2b2lkIG5vdGlmeShnZXRNZXNzYWdlKCdOb09ubGluZScpLCAnd2FybicpO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0dm9pZCBub3RpZnkoZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLCAnZXJyb3InKTtcblx0fVxufTtcblxuZXhwb3J0IHtkb0NsaWNrfTtcbiIsICJpbXBvcnQge2RvQ2xpY2t9IGZyb20gJy4vbW9kdWxlcy9kb0NsaWNrJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBhZGRQb3J0bGV0TGluayA9ICgpOiB2b2lkID0+IHtcblx0Ly8gQ3JlYXRlIHBvcnRsZXQgbGlua1xuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgZ2V0TWVzc2FnZSgnT25saW5lJyksICd0LW9ubGluZWFkbWluJyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIEJpbmQgY2xpY2sgbGlzdGVuZXJcblx0JChlbGVtZW50KVxuXHRcdC5maW5kKCdhJylcblx0XHQub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHR2b2lkIGRvQ2xpY2soZXZlbnQpO1xuXHRcdH0pO1xufTtcblxuJChhZGRQb3J0bGV0TGluayk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxVQUFV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RUFBQTs7QUNETixJQUFNbUUsaUJBQWlCQSxNQUFZO0FBRWxDLFFBQU1DLFlBQW1DQyxTQUFTQyxjQUFjLGFBQWEsSUFBSSxlQUFlO0FBQ2hHLFFBQU1WLFVBQWdDdEcsR0FBR0MsS0FBSzRHLGVBQWVDLFdBQVcsS0FBS3hILFdBQVcsUUFBUSxHQUFHLGVBQWU7QUFDbEgsTUFBSSxDQUFDZ0gsU0FBUztBQUNiO0VBQ0Q7QUFHQUksSUFBRUosT0FBTyxFQUNQVyxLQUFLLEdBQUcsRUFDUkMsR0FBRyxTQUFVZixXQUFVO0FBQ3ZCLFNBQUtGLFFBQVFFLEtBQUs7RUFDbkIsQ0FBQztBQUNIO0FBRUFPLEVBQUVHLGNBQWM7IiwKICAibmFtZXMiOiBbInNlY3Rpb24iLCAic2VjdGlvbkxpc3QiLCAidGFsa1BhZ2VMaW5rIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIlBhdHJvbGxlcnMiLCAiU3Rld2FyZHMiLCAiTm9PbmxpbmUiLCAiT25saW5lIiwgIk9ubGluZVdpdGhpbjMwTWludXRlcyIsICJTeXNPcHMiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInNhbml0aXplIiwgInN0cmluZyIsICJyZXBsYWNlIiwgIlVzZXJMaW5rIiwgInVzZXJOYW1lIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJocmVmIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImNvbmNhdCIsICJyZWwiLCAidGFyZ2V0IiwgImNsYXNzTmFtZSIsICJvbmxpbmVDb3VudFRleHQiLCAiR3JvdXBMaXN0IiwgImdyb3VwTmFtZSIsICJ1c2VyTmFtZXMiLCAiU3RyaW5nIiwgImxlbmd0aCIsICJtYXAiLCAidXNlciIsICJncm91cExpc3RFbGVtZW50IiwgImxpc3RUaXRsZSIsICJ2ZXJzaW9uIiwgInN0b3JhZ2VLZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAicXVlcnlSZWNlbnRDaGFuZ2VzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicmNzdGFydCIsICJyY2VuZCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAicmNwcm9wIiwgInJjc2hvdyIsICJyY2xpbWl0IiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3BvbnNlIiwgImdldCIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInF1ZXJ5TG9nRXZlbnRzIiwgIl9yZWYyIiwgImxlc3RhcnQiLCAibGVlbmQiLCAibGVwcm9wIiwgImxlbGltaXQiLCAiX3gzIiwgIl94NCIsICJxdWVyeVVzZXJQcm9wcyIsICJfcmVmMyIsICJ1c3VzZXJzIiwgInVzcHJvcCIsICJfeDUiLCAiQkxBQ0tfTElTVCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZ2V0QWRtaW5zIiwgIl9yZWY0IiwgInN0ZXdhcmRzIiwgInN5c29wcyIsICJwYXRyb2xsZXJzIiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgInVzZXJzIiwgInByb21pc2VzIiwgInRpbWUiLCAiRGF0ZSIsICJ0b0lTT1N0cmluZyIsICJzZXRNaW51dGVzIiwgImdldE1pbnV0ZXMiLCAicmVjZW50Y2hhbmdlcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJ2YWx1ZSIsICJlcnIiLCAiZSIsICJmIiwgImxvZ2V2ZW50cyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ1bmlxdWVBcnJheSIsICJpIiwgInNwbGljZSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJncm91cHMiLCAibmFtZSIsICJpbmNsdWRlcyIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJkb0NsaWNrIiwgIl9yZWY2IiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgIm5vdGlmeSIsICJlbGVtZW50IiwgInR5cGUiLCAidGFnIiwgImVsZW1lbnRzIiwgIiQiLCAiYXBwZW5kIiwgIl94NiIsICJhZGRQb3J0bGV0TGluayIsICJwb3J0bGV0SWQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJmaW5kIiwgIm9uIl0KfQo=
