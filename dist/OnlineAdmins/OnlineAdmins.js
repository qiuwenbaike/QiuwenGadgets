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
//! src/OnlineAdmins/options.json
var version = "2.0";
var storageKey = "ext.gadget.OnlineAdmins_getAdmins";
//! src/OnlineAdmins/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("OnlineAdmins/".concat(version));
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
var import_ext_gadget2 = require("ext.gadget.Util");
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
      users = (0, import_ext_gadget2.uniqueArray)(users);
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
//! src/OnlineAdmins/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    " ($1 online):": (0, import_ext_gadget3.localize)({
      en: " ($1 online):",
      ja: "（$1人オンライン中）：",
      "zh-hans": "（$1个在线）：",
      "zh-hant": "（$1個在線）："
    }),
    Patrollers: (0, import_ext_gadget3.localize)({
      en: "Patrollers",
      ja: "巡回者",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    Stewards: (0, import_ext_gadget3.localize)({
      en: "Stewards",
      ja: "スチュワード",
      "zh-hans": "裁决委员",
      "zh-hant": "裁決委員"
    }),
    "Network error": (0, import_ext_gadget3.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    NoOnline: (0, import_ext_gadget3.localize)({
      en: "Currently there are no high privilege users online",
      ja: "現在、高権限利用者はオンラインにいません",
      "zh-hans": "目前没有站务人员在线",
      "zh-hant": "目前沒有站務人員在線"
    }),
    Online: (0, import_ext_gadget3.localize)({
      en: "Online admins",
      ja: "オンラインの高権限利用者",
      "zh-hans": "在线站务人员",
      "zh-hant": "線上站務人員"
    }),
    OnlineWithin30Minutes: (0, import_ext_gadget3.localize)({
      en: "High privilege users online within 30 minutes:",
      ja: "30分以内にオンラインで高権限利用者：",
      "zh-hans": "下面是最近30分钟内在线的站务人员：",
      "zh-hant": "下面是最近30分鐘內的線上站務人員："
    }),
    SysOps: (0, import_ext_gadget3.localize)({
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
//! src/OnlineAdmins/modules/components/OnlineAdmins.module.less
var section = "OnlineAdmins-module__section_WS9IGa";
var sectionList = "OnlineAdmins-module__sectionList_WS9IGa";
var talkPageLink = "OnlineAdmins-module__talkPageLink_WS9IGa";
//! src/OnlineAdmins/modules/components/groupList.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
var sanitize = (string) => string.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");
var UserLink = ({
  userName
}) => /* @__PURE__ */ import_ext_gadget4.default.createElement("li", null, /* @__PURE__ */ import_ext_gadget4.default.createElement("a", {
  href: mw.util.getUrl("User:".concat(sanitize(userName))),
  rel: "noopener noreferrer",
  target: "_blank"
}, sanitize(userName)), " ", /* @__PURE__ */ import_ext_gadget4.default.createElement("span", {
  className: talkPageLink
}, "（", /* @__PURE__ */ import_ext_gadget4.default.createElement("a", {
  href: mw.util.getUrl("User_talk:".concat(sanitize(userName))),
  rel: "noopener noreferrer",
  target: "_blank"
}, "留言"), "）"));
var onlineCountText = getMessage(" ($1 online):");
var GroupList = ({
  groupName,
  userNames
}) => /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
  className: section
}, /* @__PURE__ */ import_ext_gadget4.default.createElement("span", null, groupName), /* @__PURE__ */ import_ext_gadget4.default.createElement("span", null, onlineCountText.replace("$1", String(userNames.length))), /* @__PURE__ */ import_ext_gadget4.default.createElement("ul", {
  className: sectionList
}, userNames.map((user) => /* @__PURE__ */ import_ext_gadget4.default.createElement(UserLink, {
  key: user,
  userName: user
}))));
var ListTitle = () => /* @__PURE__ */ import_ext_gadget4.default.createElement("p", null, getMessage("OnlineWithin30Minutes"));
var OnlineAdminsList = ({
  stewards,
  sysops,
  patrollers
}) => /* @__PURE__ */ import_ext_gadget4.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget4.default.createElement(ListTitle, null), stewards.length && /* @__PURE__ */ import_ext_gadget4.default.createElement(GroupList, {
  groupName: getMessage("Stewards"),
  userNames: stewards
}), sysops.length && /* @__PURE__ */ import_ext_gadget4.default.createElement(GroupList, {
  groupName: getMessage("SysOps"),
  userNames: sysops
}), patrollers.length && /* @__PURE__ */ import_ext_gadget4.default.createElement(GroupList, {
  groupName: getMessage("Patrollers"),
  userNames: sysops
}));
var getOnlineAdminsList = ({
  stewards,
  sysops,
  patrollers
}) => /* @__PURE__ */ import_ext_gadget4.default.createElement(OnlineAdminsList, {
  stewards,
  sysops,
  patrollers
});
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
        notify($("<div>").append(getOnlineAdminsList({
          stewards,
          sysops,
          patrollers
        })));
      } else {
        notify(getMessage("NoOnline"), "warn");
      }
    } catch {
      notify(getMessage("Network error"), "error");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL09ubGluZUFkbWlucy9vcHRpb25zLmpzb24iLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL3V0aWwvYXBpLnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy91dGlsL3F1ZXJ5LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvT25saW5lQWRtaW5zL21vZHVsZXMvdXRpbC9nZXRBZG1pbnMudHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb21wb25lbnRzL2dyb3VwTGlzdC50c3giLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2RvQ2xpY2sudHMiLCAic3JjL09ubGluZUFkbWlucy9PbmxpbmVBZG1pbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCIsXG5cdFwic3RvcmFnZUtleVwiOiBcImV4dC5nYWRnZXQuT25saW5lQWRtaW5zX2dldEFkbWluc1wiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBPbmxpbmVBZG1pbnMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuXG5jb25zdCBxdWVyeVJlY2VudENoYW5nZXMgPSBhc3luYyAocmNzdGFydDogc3RyaW5nLCByY2VuZDogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZWNlbnRDaGFuZ2VzUGFyYW1zID0ge1xuXHRcdHJjc3RhcnQsXG5cdFx0cmNlbmQsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAncmVjZW50Y2hhbmdlcycsXG5cdFx0cmNwcm9wOiAndXNlcicsXG5cdFx0cmNzaG93OiBbJyFib3QnLCAnIWFub24nXSxcblx0XHRyY2xpbWl0OiA1MDAsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBxdWVyeUxvZ0V2ZW50cyA9IGFzeW5jIChsZXN0YXJ0OiBzdHJpbmcsIGxlZW5kOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRsZXN0YXJ0LFxuXHRcdGxlZW5kLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0bGVwcm9wOiAndXNlcicsXG5cdFx0bGVsaW1pdDogNTAwLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlVc2VyUHJvcHMgPSBhc3luYyAodXN1c2Vyczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdHVzdXNlcnMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdHVzcHJvcDogJ2dyb3VwcycsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQge3F1ZXJ5UmVjZW50Q2hhbmdlcywgcXVlcnlMb2dFdmVudHMsIHF1ZXJ5VXNlclByb3BzfTtcbiIsICJjb25zdCBCTEFDS19MSVNUOiBzdHJpbmdbXSA9IFsn5rul55So6L+H5ruk5ZmoJ107XG5cbmV4cG9ydCB7QkxBQ0tfTElTVH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtxdWVyeUxvZ0V2ZW50cywgcXVlcnlSZWNlbnRDaGFuZ2VzLCBxdWVyeVVzZXJQcm9wc30gZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQge0JMQUNLX0xJU1R9IGZyb20gJy4uL2NvbnN0YW50JztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGdldEFkbWlucyA9IGFzeW5jICgpID0+IHtcblx0bGV0IHN0ZXdhcmRzOiBzdHJpbmdbXSA9IFtdO1xuXHRsZXQgc3lzb3BzOiBzdHJpbmdbXSA9IFtdO1xuXHRsZXQgcGF0cm9sbGVyczogc3RyaW5nW10gPSBbXTtcblxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5KSkge1xuXHRcdCh7c3Rld2FyZHMsIHN5c29wcywgcGF0cm9sbGVyc30gPSBtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkpIGFzIHtcblx0XHRcdHN0ZXdhcmRzOiBzdHJpbmdbXTtcblx0XHRcdHN5c29wczogc3RyaW5nW107XG5cdFx0XHRwYXRyb2xsZXJzOiBzdHJpbmdbXTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRsZXQgdXNlcnM6IHN0cmluZ1tdID0gW107XG5cdFx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0XHRjb25zdCB0aW1lOiBEYXRlID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCByY3N0YXJ0OiBzdHJpbmcgPSB0aW1lLnRvSVNPU3RyaW5nKCk7XG5cblx0XHQvLyBRdWVyeSB1c2VycyBoYXMgbG9nL2VkaXQgcmVjb3JkIGluIHJlY2VudCAzMCBtaW51dGVzXG5cdFx0dGltZS5zZXRNaW51dGVzKHRpbWUuZ2V0TWludXRlcygpIC0gMzApOyAvLyDmnIDov5Hmm7TmlLkzMOWIhumSn+WGheeahOe8lui+keeUqOaIt1xuXHRcdGNvbnN0IHJjZW5kOiBzdHJpbmcgPSB0aW1lLnRvSVNPU3RyaW5nKCk7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVjZW50Y2hhbmdlcyA9IGF3YWl0IHF1ZXJ5UmVjZW50Q2hhbmdlcyhyY3N0YXJ0LCByY2VuZCk7XG5cblx0XHRcdGZvciAoY29uc3Qge3VzZXJ9IG9mIHJlY2VudGNoYW5nZXNbJ3F1ZXJ5J10ucmVjZW50Y2hhbmdlcyBhcyB7dXNlcjogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdHVzZXJzW3VzZXJzLmxlbmd0aF0gPSB1c2VyOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBsb2dldmVudHMgPSBhd2FpdCBxdWVyeUxvZ0V2ZW50cyhyY3N0YXJ0LCByY2VuZCk7XG5cblx0XHRcdGZvciAoY29uc3Qge3VzZXJ9IG9mIGxvZ2V2ZW50c1sncXVlcnknXS5sb2dldmVudHMgYXMge3VzZXI6IHN0cmluZ31bXSkge1xuXHRcdFx0XHR1c2Vyc1t1c2Vycy5sZW5ndGhdID0gdXNlcjtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cblx0XHR1c2VycyA9IHVuaXF1ZUFycmF5KHVzZXJzKTsgLy8gUmVwbGFjZSBTZXQgd2l0aCB1bmlxdWVBcnJheSwgYXZvaWRpbmcgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXG5cdFx0Ly8gR2VuZXJhdGluZyBxdWVyeSBwcm9taXNlc1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHVzdXNlcnMgPSB1c2Vycy5zcGxpY2UoMCwgMjUpO1xuXHRcdFx0aWYgKCF1c3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVVzZXJQcm9wcyh1c3VzZXJzKTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHtncm91cHMsIG5hbWV9IG9mIHJlc3BvbnNlWydxdWVyeSddLnVzZXJzIGFzIHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHQvLyByZW1vdmUgYm90c1xuXHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2JvdCcpIHx8IEJMQUNLX0xJU1QuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIHJlbW92ZSBsb2dzIHdpdGggbm8gdXNlciBuYW1lc1xuXHRcdFx0XHRcdGlmICghbmFtZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc3Rld2FyZCcpKSB7XG5cdFx0XHRcdFx0XHRzdGV3YXJkc1tzdGV3YXJkcy5sZW5ndGhdID0gbmFtZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzeXNvcCcpKSB7XG5cdFx0XHRcdFx0XHRzeXNvcHNbc3lzb3BzLmxlbmd0aF0gPSBuYW1lO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3BhdHJvbGxlcicpKSB7XG5cdFx0XHRcdFx0XHRwYXRyb2xsZXJzW3BhdHJvbGxlcnMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7c3Rld2FyZHMsIHN5c29wcywgcGF0cm9sbGVyc307XG59O1xuXG5leHBvcnQge2dldEFkbWluc307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCcgKCQxIG9ubGluZSk6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCQxIG9ubGluZSk6Jyxcblx0XHRcdGphOiAn77yIJDHkurrjgqrjg7Pjg6njgqTjg7PkuK3vvInvvJonLFxuXHRcdFx0J3poLWhhbnMnOiAn77yIJDHkuKrlnKjnur/vvInvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn77yIJDHlgIvlnKjnt5rvvInvvJonLFxuXHRcdH0pLFxuXHRcdFBhdHJvbGxlcnM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVycycsXG5cdFx0XHRqYTogJ+W3oeWbnuiAhScsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5ZOhJyxcblx0XHR9KSxcblx0XHRTdGV3YXJkczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkcycsXG5cdFx0XHRqYTogJ+OCueODgeODpeODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfoo4HlhrPlp5TlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KOB5rG65aeU5ZOhJyxcblx0XHR9KSxcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHROb09ubGluZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlcmUgYXJlIG5vIGhpZ2ggcHJpdmlsZWdlIHVzZXJzIG9ubGluZScsXG5cdFx0XHRqYTogJ+ePvuWcqOOAgemrmOaoqemZkOWIqeeUqOiAheOBr+OCquODs+ODqeOCpOODs+OBq+OBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtaGFucyc6ICfnm67liY3msqHmnInnq5nliqHkurrlkZjlnKjnur8nLFxuXHRcdFx0J3poLWhhbnQnOiAn55uu5YmN5rKS5pyJ56uZ5YuZ5Lq65ZOh5Zyo57eaJyxcblx0XHR9KSxcblx0XHRPbmxpbmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT25saW5lIGFkbWlucycsXG5cdFx0XHRqYTogJ+OCquODs+ODqeOCpOODs+OBrumrmOaoqemZkOWIqeeUqOiAhScsXG5cdFx0XHQnemgtaGFucyc6ICflnKjnur/nq5nliqHkurrlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ea5LiK56uZ5YuZ5Lq65ZOhJyxcblx0XHR9KSxcblx0XHRPbmxpbmVXaXRoaW4zME1pbnV0ZXM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSGlnaCBwcml2aWxlZ2UgdXNlcnMgb25saW5lIHdpdGhpbiAzMCBtaW51dGVzOicsXG5cdFx0XHRqYTogJzMw5YiG5Lul5YaF44Gr44Kq44Oz44Op44Kk44Oz44Gn6auY5qip6ZmQ5Yip55So6ICF77yaJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4i+mdouaYr+acgOi/kTMw5YiG6ZKf5YaF5Zyo57q/55qE56uZ5Yqh5Lq65ZGY77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4i+mdouaYr+acgOi/kTMw5YiG6ZCY5YWn55qE57ea5LiK56uZ5YuZ5Lq65ZOh77yaJyxcblx0XHR9KSxcblx0XHRTeXNPcHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRtaW5zJyxcblx0XHRcdGphOiAn566h55CG6ICFJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3Qgc2VjdGlvbiA9IFwiT25saW5lQWRtaW5zLW1vZHVsZV9fc2VjdGlvbl9XUzlJR2FcIjtcbmV4cG9ydCBjb25zdCBzZWN0aW9uTGlzdCA9IFwiT25saW5lQWRtaW5zLW1vZHVsZV9fc2VjdGlvbkxpc3RfV1M5SUdhXCI7XG5leHBvcnQgY29uc3QgdGFsa1BhZ2VMaW5rID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX190YWxrUGFnZUxpbmtfV1M5SUdhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJzZWN0aW9uXCI6IHNlY3Rpb24sXG4gIFwic2VjdGlvbkxpc3RcIjogc2VjdGlvbkxpc3QsXG4gIFwidGFsa1BhZ2VMaW5rXCI6IHRhbGtQYWdlTGlua1xufTtcbiAgICAgICIsICJpbXBvcnQge3NlY3Rpb24sIHNlY3Rpb25MaXN0LCB0YWxrUGFnZUxpbmt9IGZyb20gJy4vT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IHNhbml0aXplID0gKHN0cmluZzogc3RyaW5nKSA9PlxuXHRzdHJpbmdcblx0XHQucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuXHRcdC5yZXBsYWNlKC88L2csICcmbHQ7Jylcblx0XHQucmVwbGFjZSgvPi9nLCAnJmd0OycpXG5cdFx0LnJlcGxhY2UoLycvZywgJyZhcG9zOycpXG5cdFx0LnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcblxuaW50ZXJmYWNlIFVzZXJMaW5rUHJvcHMge1xuXHR1c2VyTmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgR3JvdXBMaXN0UHJvcHMge1xuXHRncm91cE5hbWU6IHN0cmluZztcblx0dXNlck5hbWVzOiBzdHJpbmdbXTtcbn1cblxuaW50ZXJmYWNlIE9ubGluZUFkbWluc0xpc3RQcm9wcyB7XG5cdHN0ZXdhcmRzOiBzdHJpbmdbXTtcblx0c3lzb3BzOiBzdHJpbmdbXTtcblx0cGF0cm9sbGVyczogc3RyaW5nW107XG59XG5cbmNvbnN0IFVzZXJMaW5rID0gKHt1c2VyTmFtZX06IFVzZXJMaW5rUHJvcHMpID0+IChcblx0PGxpPlxuXHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKGBVc2VyOiR7c2FuaXRpemUodXNlck5hbWUpfWApfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHR7c2FuaXRpemUodXNlck5hbWUpfVxuXHRcdDwvYT5cblx0XHQmbmJzcDtcblx0XHQ8c3BhbiBjbGFzc05hbWU9e3RhbGtQYWdlTGlua30+XG5cdFx0XHTvvIhcblx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKGBVc2VyX3RhbGs6JHtzYW5pdGl6ZSh1c2VyTmFtZSl9YCl9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx055WZ6KiAXG5cdFx0XHQ8L2E+XG5cdFx0XHTvvIlcblx0XHQ8L3NwYW4+XG5cdDwvbGk+XG4pO1xuXG5jb25zdCBvbmxpbmVDb3VudFRleHQ6IHN0cmluZyA9IGdldE1lc3NhZ2UoJyAoJDEgb25saW5lKTonKTtcblxuY29uc3QgR3JvdXBMaXN0ID0gKHtncm91cE5hbWUsIHVzZXJOYW1lc306IEdyb3VwTGlzdFByb3BzKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPXtzZWN0aW9ufT5cblx0XHQ8c3Bhbj57Z3JvdXBOYW1lfTwvc3Bhbj5cblx0XHQ8c3Bhbj57b25saW5lQ291bnRUZXh0LnJlcGxhY2UoJyQxJywgU3RyaW5nKHVzZXJOYW1lcy5sZW5ndGgpKX08L3NwYW4+XG5cdFx0PHVsIGNsYXNzTmFtZT17c2VjdGlvbkxpc3R9PlxuXHRcdFx0e3VzZXJOYW1lcy5tYXAoKHVzZXIpID0+IChcblx0XHRcdFx0PFVzZXJMaW5rIGtleT17dXNlcn0gdXNlck5hbWU9e3VzZXJ9IC8+XG5cdFx0XHQpKX1cblx0XHQ8L3VsPlxuXHQ8L2Rpdj5cbik7XG5cbmNvbnN0IExpc3RUaXRsZSA9ICgpID0+IDxwPntnZXRNZXNzYWdlKCdPbmxpbmVXaXRoaW4zME1pbnV0ZXMnKX08L3A+O1xuXG5jb25zdCBPbmxpbmVBZG1pbnNMaXN0ID0gKHtzdGV3YXJkcywgc3lzb3BzLCBwYXRyb2xsZXJzfTogT25saW5lQWRtaW5zTGlzdFByb3BzKSA9PiAoXG5cdDxkaXY+XG5cdFx0PExpc3RUaXRsZSAvPlxuXHRcdHtzdGV3YXJkcy5sZW5ndGggJiYgPEdyb3VwTGlzdCBncm91cE5hbWU9e2dldE1lc3NhZ2UoJ1N0ZXdhcmRzJyl9IHVzZXJOYW1lcz17c3Rld2FyZHN9IC8+fVxuXHRcdHtzeXNvcHMubGVuZ3RoICYmIDxHcm91cExpc3QgZ3JvdXBOYW1lPXtnZXRNZXNzYWdlKCdTeXNPcHMnKX0gdXNlck5hbWVzPXtzeXNvcHN9IC8+fVxuXHRcdHtwYXRyb2xsZXJzLmxlbmd0aCAmJiA8R3JvdXBMaXN0IGdyb3VwTmFtZT17Z2V0TWVzc2FnZSgnUGF0cm9sbGVycycpfSB1c2VyTmFtZXM9e3N5c29wc30gLz59XG5cdDwvZGl2PlxuKTtcblxuY29uc3QgZ2V0T25saW5lQWRtaW5zTGlzdCA9ICh7c3Rld2FyZHMsIHN5c29wcywgcGF0cm9sbGVyc306IE9ubGluZUFkbWluc0xpc3RQcm9wcykgPT4gKFxuXHQ8T25saW5lQWRtaW5zTGlzdCBzdGV3YXJkcz17c3Rld2FyZHN9IHN5c29wcz17c3lzb3BzfSBwYXRyb2xsZXJzPXtwYXRyb2xsZXJzfSAvPlxuKTtcblxuZXhwb3J0IHtnZXRPbmxpbmVBZG1pbnNMaXN0fTtcbiIsICJpbXBvcnQge2dldEFkbWluc30gZnJvbSAnLi91dGlsL2dldEFkbWlucyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldE9ubGluZUFkbWluc0xpc3R9IGZyb20gJy4vY29tcG9uZW50cy9ncm91cExpc3QnO1xuXG5jb25zdCBkb0NsaWNrID0gYXN5bmMgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudDxIVE1MQW5jaG9yRWxlbWVudD4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRjb25zdCBub3RpZnkgPSAoZWxlbWVudDogc3RyaW5nIHwgSlF1ZXJ5PEhUTUxFbGVtZW50PiwgdHlwZTogJ2Vycm9yJyB8ICdpbmZvJyB8ICdzdWNjZXNzJyB8ICd3YXJuJyA9ICdpbmZvJykgPT4ge1xuXHRcdHJldHVybiBtdy5ub3RpZnkoZWxlbWVudCwge1xuXHRcdFx0dGFnOiAnb25saW5lQWRtaW5zJyxcblx0XHRcdHR5cGUsXG5cdFx0fSk7XG5cdH07XG5cblx0dHJ5IHtcblx0XHRjb25zdCB7c3Rld2FyZHMsIHN5c29wcywgcGF0cm9sbGVyc30gPSBhd2FpdCBnZXRBZG1pbnMoKTtcblxuXHRcdGlmIChzdGV3YXJkcy5sZW5ndGggKyBzeXNvcHMubGVuZ3RoICsgcGF0cm9sbGVycy5sZW5ndGgpIHtcblx0XHRcdG5vdGlmeSgkKCc8ZGl2PicpLmFwcGVuZChnZXRPbmxpbmVBZG1pbnNMaXN0KHtzdGV3YXJkcywgc3lzb3BzLCBwYXRyb2xsZXJzfSkpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm90aWZ5KGdldE1lc3NhZ2UoJ05vT25saW5lJyksICd3YXJuJyk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHRub3RpZnkoZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLCAnZXJyb3InKTtcblx0fVxufTtcblxuZXhwb3J0IHtkb0NsaWNrfTtcbiIsICJpbXBvcnQge2RvQ2xpY2t9IGZyb20gJy4vbW9kdWxlcy9kb0NsaWNrJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBhZGRQb3J0bGV0TGluayA9ICgpOiB2b2lkID0+IHtcblx0Ly8gQ3JlYXRlIHBvcnRsZXQgbGlua1xuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgZ2V0TWVzc2FnZSgnT25saW5lJyksICd0LW9ubGluZWFkbWluJyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIEJpbmQgY2xpY2sgbGlzdGVuZXJcblx0JChlbGVtZW50KVxuXHRcdC5maW5kKCdhJylcblx0XHQub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHR2b2lkIGRvQ2xpY2soZXZlbnQpO1xuXHRcdH0pO1xufTtcblxuJChhZGRQb3J0bGV0TGluayk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7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T0FBTyxFQUFFQyxPQUFPVixvQkFBb0I7VUFBQ2hGO1VBQVVDO1VBQVFDO1FBQVUsQ0FBQyxDQUFDLENBQUM7TUFDOUUsT0FBTztBQUNObUYsZUFBT2pDLFdBQVcsVUFBVSxHQUFHLE1BQU07TUFDdEM7SUFDRCxRQUFRO0FBQ1BpQyxhQUFPakMsV0FBVyxlQUFlLEdBQUcsT0FBTztJQUM1QztFQUNELENBQUE7QUFBQSxTQUFBLFNBckJNNkIsU0FBQVUsS0FBQTtBQUFBLFdBQUFULE1BQUFyRyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDRE4sSUFBTThHLGlCQUFpQkEsTUFBWTtBQUVsQyxRQUFNQyxZQUFtQ0MsU0FBU0MsY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoRyxRQUFNVCxVQUFnQ25GLEdBQUdnRSxLQUFLeUIsZUFBZUMsV0FBVyxLQUFLekMsV0FBVyxRQUFRLEdBQUcsZUFBZTtBQUNsSCxNQUFJLENBQUNrQyxTQUFTO0FBQ2I7RUFDRDtBQUdBRyxJQUFFSCxPQUFPLEVBQ1BVLEtBQUssR0FBRyxFQUNSQyxHQUFHLFNBQVVkLFdBQVU7QUFDdkIsU0FBS0YsUUFBUUUsS0FBSztFQUNuQixDQUFDO0FBQ0g7QUFFQU0sRUFBRUcsY0FBYzsiLAogICJuYW1lcyI6IFsidmVyc2lvbiIsICJzdG9yYWdlS2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAicXVlcnlSZWNlbnRDaGFuZ2VzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicmNzdGFydCIsICJyY2VuZCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAicmNwcm9wIiwgInJjc2hvdyIsICJyY2xpbWl0IiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3BvbnNlIiwgImdldCIsICJfeCIsICJfeDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInF1ZXJ5TG9nRXZlbnRzIiwgIl9yZWYyIiwgImxlc3RhcnQiLCAibGVlbmQiLCAibGVwcm9wIiwgImxlbGltaXQiLCAiX3gzIiwgIl94NCIsICJxdWVyeVVzZXJQcm9wcyIsICJfcmVmMyIsICJ1c3VzZXJzIiwgInVzcHJvcCIsICJfeDUiLCAiQkxBQ0tfTElTVCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0QWRtaW5zIiwgIl9yZWY0IiwgInN0ZXdhcmRzIiwgInN5c29wcyIsICJwYXRyb2xsZXJzIiwgIm13IiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgInVzZXJzIiwgInByb21pc2VzIiwgInRpbWUiLCAiRGF0ZSIsICJ0b0lTT1N0cmluZyIsICJzZXRNaW51dGVzIiwgImdldE1pbnV0ZXMiLCAicmVjZW50Y2hhbmdlcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJ1c2VyIiwgInZhbHVlIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgImxvZ2V2ZW50cyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ1bmlxdWVBcnJheSIsICJpIiwgInNwbGljZSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJncm91cHMiLCAibmFtZSIsICJpbmNsdWRlcyIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIlBhdHJvbGxlcnMiLCAiU3Rld2FyZHMiLCAiTm9PbmxpbmUiLCAiT25saW5lIiwgIk9ubGluZVdpdGhpbjMwTWludXRlcyIsICJTeXNPcHMiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInNlY3Rpb24iLCAic2VjdGlvbkxpc3QiLCAidGFsa1BhZ2VMaW5rIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJfX3RvRVNNIiwgInNhbml0aXplIiwgInN0cmluZyIsICJyZXBsYWNlIiwgIlVzZXJMaW5rIiwgInVzZXJOYW1lIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJocmVmIiwgInV0aWwiLCAiZ2V0VXJsIiwgInJlbCIsICJ0YXJnZXQiLCAiY2xhc3NOYW1lIiwgIm9ubGluZUNvdW50VGV4dCIsICJHcm91cExpc3QiLCAiZ3JvdXBOYW1lIiwgInVzZXJOYW1lcyIsICJTdHJpbmciLCAibWFwIiwgIkxpc3RUaXRsZSIsICJPbmxpbmVBZG1pbnNMaXN0IiwgImdldE9ubGluZUFkbWluc0xpc3QiLCAiZG9DbGljayIsICJfcmVmNiIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJub3RpZnkiLCAiZWxlbWVudCIsICJ0eXBlIiwgInRhZyIsICIkIiwgImFwcGVuZCIsICJfeDYiLCAiYWRkUG9ydGxldExpbmsiLCAicG9ydGxldElkIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZmluZCIsICJvbiJdCn0K
