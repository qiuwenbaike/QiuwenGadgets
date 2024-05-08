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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
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
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
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
      action: "query",
      format: "json",
      formatversion: "2",
      list: "recentchanges",
      rcprop: "user",
      rcshow: ["!bot", "!anon"],
      rclimit: 500,
      rcstart,
      rcend
    };
    const response = yield api.post(params);
    return response;
  });
  return function queryRecentChanges2(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var queryLogEvents = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (lestart, leend) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      list: "logevents",
      leprop: "user",
      lelimit: 500,
      lestart,
      leend
    };
    const response = yield api.post(params);
    return response;
  });
  return function queryLogEvents2(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var queryUserProps = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (ususers) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      ususers,
      usprop: "groups"
    };
    const response = yield api.post(params);
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
      users = [...(0, import_ext_gadget4.uniqueArray)([...users, ...usersExt])];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb21wb25lbnRzL2dyb3VwTGlzdC50c3giLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvb3B0aW9ucy5qc29uIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9hcGkudHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2RvQ2xpY2sudHMiLCAic3JjL09ubGluZUFkbWlucy9PbmxpbmVBZG1pbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvT25saW5lQWRtaW5zL21vZHVsZXMvY29tcG9uZW50cy9PbmxpbmVBZG1pbnMubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBzZWN0aW9uID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19zZWN0aW9uX1dTOUlHYVwiO1xuZXhwb3J0IGNvbnN0IHNlY3Rpb25MaXN0ID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19zZWN0aW9uTGlzdF9XUzlJR2FcIjtcbmV4cG9ydCBjb25zdCB0YWxrUGFnZUxpbmsgPSBcIk9ubGluZUFkbWlucy1tb2R1bGVfX3RhbGtQYWdlTGlua19XUzlJR2FcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInNlY3Rpb25cIjogc2VjdGlvbixcbiAgXCJzZWN0aW9uTGlzdFwiOiBzZWN0aW9uTGlzdCxcbiAgXCJ0YWxrUGFnZUxpbmtcIjogdGFsa1BhZ2VMaW5rXG59O1xuICAgICAgIiwgImltcG9ydCB7c2VjdGlvbiwgc2VjdGlvbkxpc3QsIHRhbGtQYWdlTGlua30gZnJvbSAnLi9PbmxpbmVBZG1pbnMubW9kdWxlLmxlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+XG5cdHN0cmluZy5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmbHQ7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXG5pbnRlcmZhY2UgVXNlckxpbmtQcm9wcyB7XG5cdHVzZXJOYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBHcm91cExpc3RQcm9wcyB7XG5cdGdyb3VwTmFtZTogc3RyaW5nO1xuXHR1c2VyTmFtZXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBVc2VyTGluayA9ICh7dXNlck5hbWV9OiBVc2VyTGlua1Byb3BzKSA9PiAoXG5cdDxsaT5cblx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcjoke3Nhbml0aXplKHVzZXJOYW1lKX1gKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0e3Nhbml0aXplKHVzZXJOYW1lKX1cblx0XHQ8L2E+XG5cdFx0Jm5ic3A7XG5cdFx0PHNwYW4gY2xhc3NOYW1lPXt0YWxrUGFnZUxpbmt9PlxuXHRcdFx077yIXG5cdFx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcl90YWxrOiR7c2FuaXRpemUodXNlck5hbWUpfWApfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdOeVmeiogFxuXHRcdFx0PC9hPlxuXHRcdFx077yJXG5cdFx0PC9zcGFuPlxuXHQ8L2xpPlxuKTtcblxuY29uc3Qgb25saW5lQ291bnRUZXh0OiBzdHJpbmcgPSBnZXRNZXNzYWdlKCcgKCQxIG9ubGluZSk6Jyk7XG5cbmNvbnN0IEdyb3VwTGlzdCA9ICh7Z3JvdXBOYW1lLCB1c2VyTmFtZXN9OiBHcm91cExpc3RQcm9wcykgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17c2VjdGlvbn0+XG5cdFx0PHNwYW4+e2dyb3VwTmFtZX08L3NwYW4+XG5cdFx0PHNwYW4+e29ubGluZUNvdW50VGV4dC5yZXBsYWNlKCckMScsIFN0cmluZyh1c2VyTmFtZXMubGVuZ3RoKSl9PC9zcGFuPlxuXHRcdDx1bCBjbGFzc05hbWU9e3NlY3Rpb25MaXN0fT5cblx0XHRcdHt1c2VyTmFtZXMubWFwKCh1c2VyKSA9PiAoXG5cdFx0XHRcdDxVc2VyTGluayBrZXk9e3VzZXJ9IHVzZXJOYW1lPXt1c2VyfSAvPlxuXHRcdFx0KSl9XG5cdFx0PC91bD5cblx0PC9kaXY+XG4pO1xuXG5jb25zdCBncm91cExpc3RFbGVtZW50ID0gKGdyb3VwTmFtZTogc3RyaW5nLCB1c2VyTmFtZXM6IHN0cmluZ1tdKSA9PiAoXG5cdDxHcm91cExpc3QgZ3JvdXBOYW1lPXtncm91cE5hbWV9IHVzZXJOYW1lcz17dXNlck5hbWVzfSAvPlxuKTtcblxuY29uc3QgbGlzdFRpdGxlID0gKCkgPT4gPHA+e2dldE1lc3NhZ2UoJ09ubGluZVdpdGhpbjMwTWludXRlcycpfTwvcD47XG5cbmV4cG9ydCB7Z3JvdXBMaXN0RWxlbWVudCwgbGlzdFRpdGxlfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0JyAoJDEgb25saW5lKTonOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJDEgb25saW5lKTonLFxuXHRcdFx0amE6ICfvvIgkMeS6uuOCquODs+ODqeOCpOODs+S4re+8ie+8micsXG5cdFx0XHQnemgtaGFucyc6ICfvvIgkMeS4quWcqOe6v++8ie+8micsXG5cdFx0XHQnemgtaGFudCc6ICfvvIgkMeWAi+WcqOe3mu+8ie+8micsXG5cdFx0fSksXG5cdFx0QWRtaW5zOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FkbWlucycsXG5cdFx0XHRqYTogJ+euoeeQhuiAhScsXG5cdFx0XHQnemgtaGFucyc6ICfnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHRQYXRyb2xsZXJzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbGxlcnMnLFxuXHRcdFx0amE6ICflt6Hlm57ogIUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0U3Rld2FyZHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZHMnLFxuXHRcdFx0amE6ICfjgrnjg4Hjg6Xjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn6KOB5Yaz5aeU5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ijgeaxuuWnlOWToScsXG5cdFx0fSksXG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3InLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0Tm9PbmxpbmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZXJlIGFyZSBubyBoaWdoIHByaXZpbGVnZSB1c2VycyBvbmxpbmUnLFxuXHRcdFx0amE6ICfnj77lnKjjgIHpq5jmqKnpmZDliKnnlKjogIXjga/jgqrjg7Pjg6njgqTjg7PjgavjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWhhbnMnOiAn55uu5YmN5rKh5pyJ56uZ5Yqh5Lq65ZGY5Zyo57q/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ebruWJjeaykuacieermeWLmeS6uuWToeWcqOe3micsXG5cdFx0fSksXG5cdFx0T25saW5lOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ09ubGluZSBhZG1pbnMnLFxuXHRcdFx0amE6ICfjgqrjg7Pjg6njgqTjg7Pjga7pq5jmqKnpmZDliKnnlKjogIUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Zyo57q/56uZ5Yqh5Lq65ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3muS4iuermeWLmeS6uuWToScsXG5cdFx0fSksXG5cdFx0T25saW5lV2l0aGluMzBNaW51dGVzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0hpZ2ggcHJpdmlsZWdlIHVzZXJzIG9ubGluZSB3aXRoaW4gMzAgbWludXRlczonLFxuXHRcdFx0amE6ICczMOWIhuS7peWGheOBq+OCquODs+ODqeOCpOODs+OBp+mrmOaoqemZkOWIqeeUqOiAhe+8micsXG5cdFx0XHQnemgtaGFucyc6ICfkuIvpnaLmmK/mnIDov5EzMOWIhumSn+WGheWcqOe6v+eahOermeWKoeS6uuWRmO+8micsXG5cdFx0XHQnemgtaGFudCc6ICfkuIvpnaLmmK/mnIDov5EzMOWIhumQmOWFp+eahOe3muS4iuermeWLmeS6uuWToe+8micsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IEJMQUNLX0xJU1Q6IHN0cmluZ1tdID0gWyfmu6XnlKjov4fmu6TlmagnXTtcblxuZXhwb3J0IHtCTEFDS19MSVNUfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBPbmxpbmVBZG1pbnMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2dyb3VwTGlzdEVsZW1lbnQsIGxpc3RUaXRsZX0gZnJvbSAnLi9jb21wb25lbnRzL2dyb3VwTGlzdCc7XG5pbXBvcnQge0JMQUNLX0xJU1R9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHF1ZXJ5UmVjZW50Q2hhbmdlcyA9IGFzeW5jIChyY3N0YXJ0OiBzdHJpbmcsIHJjZW5kOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3JlY2VudGNoYW5nZXMnLFxuXHRcdHJjcHJvcDogJ3VzZXInLFxuXHRcdHJjc2hvdzogWychYm90JywgJyFhbm9uJ10sXG5cdFx0cmNsaW1pdDogNTAwLFxuXHRcdHJjc3RhcnQsXG5cdFx0cmNlbmQsXG5cdH0gYXMgY29uc3Qgc2F0aXNmaWVzIEFwaVF1ZXJ5UmVjZW50Q2hhbmdlc1BhcmFtcztcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHF1ZXJ5TG9nRXZlbnRzID0gYXN5bmMgKGxlc3RhcnQ6IHN0cmluZywgbGVlbmQ6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHRsZXByb3A6ICd1c2VyJyxcblx0XHRsZWxpbWl0OiA1MDAsXG5cdFx0bGVzdGFydCxcblx0XHRsZWVuZCxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgQXBpUXVlcnlMb2dFdmVudHNQYXJhbXM7XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBxdWVyeVVzZXJQcm9wcyA9IGFzeW5jICh1c3VzZXJzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdHVzdXNlcnMsXG5cdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0fSBhcyBjb25zdCBzYXRpc2ZpZXMgQXBpUXVlcnlVc2Vyc1BhcmFtcztcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGRvQ2xpY2sgPSBhc3luYyAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50PEhUTUxBbmNob3JFbGVtZW50Pik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdGxldCB1c2Vyczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3QgdXNlcnNFeHQ6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHN0ZXdhcmRzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCBhZG1pbnM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHBhdHJvbGxlcnM6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3QgdGltZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IHJjc3RhcnQ6IHN0cmluZyA9IHRpbWUudG9JU09TdHJpbmcoKTtcblx0dGltZS5zZXRNaW51dGVzKHRpbWUuZ2V0TWludXRlcygpIC0gMzApOyAvLyDmnIDov5Hmm7TmlLkzMOWIhumSn+WGheeahOe8lui+keeUqOaIt1xuXHRjb25zdCByY2VuZDogc3RyaW5nID0gdGltZS50b0lTT1N0cmluZygpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVjZW50Y2hhbmdlcyA9IGF3YWl0IHF1ZXJ5UmVjZW50Q2hhbmdlcyhyY3N0YXJ0LCByY2VuZCk7XG5cblx0XHRmb3IgKGNvbnN0IHt1c2VyfSBvZiByZWNlbnRjaGFuZ2VzWydxdWVyeSddLnJlY2VudGNoYW5nZXMgYXMge3VzZXI6IHN0cmluZ31bXSkge1xuXHRcdFx0dXNlcnNbdXNlcnMubGVuZ3RoXSA9IHVzZXI7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdH1cblxuXHRcdGNvbnN0IGxvZ2V2ZW50cyA9IGF3YWl0IHF1ZXJ5TG9nRXZlbnRzKHJjc3RhcnQsIHJjZW5kKTtcblxuXHRcdGZvciAoY29uc3Qge3VzZXJ9IG9mIGxvZ2V2ZW50c1sncXVlcnknXS5sb2dldmVudHMgYXMge3VzZXI6IHN0cmluZ31bXSkge1xuXHRcdFx0dXNlcnNFeHRbdXNlcnNFeHQubGVuZ3RoXSA9IHVzZXI7XG5cdFx0fVxuXG5cdFx0Ly8g55So5oi35ZCN5YiX6KGo5ZCI5bm244CB5Y676YeN44CB5YiG5YmyXG5cdFx0dXNlcnMgPSBbLi4udW5pcXVlQXJyYXkoWy4uLnVzZXJzLCAuLi51c2Vyc0V4dF0pXTsgLy8gUmVwbGFjZSBgbmV3IFNldCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cblx0XHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHVzdXNlcnMgPSB1c2Vycy5zcGxpY2UoMCwgNTApO1xuXHRcdFx0aWYgKCF1c3VzZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBxdWVyeVVzZXJQcm9wcyh1c3VzZXJzKTtcblxuXHRcdFx0XHRmb3IgKGNvbnN0IHtncm91cHMsIG5hbWV9IG9mIHJlc3BvbnNlWydxdWVyeSddLnVzZXJzIGFzIHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHQvLyDmib7liLDnrqHnkIbkurrlkZjvvIzljrvpmaTmnLrlmajkurrvvIzmtojpmaRuYW1l55qE56m65YC8XG5cdFx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnYm90JykgfHwgQkxBQ0tfTElTVC5pbmNsdWRlcyhuYW1lKSB8fCAhbmFtZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3N0ZXdhcmQnKSkge1xuXHRcdFx0XHRcdFx0c3Rld2FyZHNbc3Rld2FyZHMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3N5c29wJykpIHtcblx0XHRcdFx0XHRcdGFkbWluc1thZG1pbnMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ3BhdHJvbGxlcicpKSB7XG5cdFx0XHRcdFx0XHRwYXRyb2xsZXJzW3BhdHJvbGxlcnMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHZvaWQgKGFzeW5jICgpID0+IHtcblx0XHRcdC8vIOafpeivoueUqOaIt+adg+mZkFxuXHRcdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0XHR9IGNhdGNoIHt9XG5cdFx0XHR9XG5cdFx0fSkoKS50aGVuKCgpID0+IHtcblx0XHRcdGlmIChzdGV3YXJkcy5sZW5ndGggKyBhZG1pbnMubGVuZ3RoICsgcGF0cm9sbGVycy5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgZWxlbWVudHM6IEVsZW1lbnRbXSA9IFtsaXN0VGl0bGUoKV07XG5cblx0XHRcdFx0aWYgKHN0ZXdhcmRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aF0gPSBncm91cExpc3RFbGVtZW50KGdldE1lc3NhZ2UoJ1N0ZXdhcmRzJyksIHN0ZXdhcmRzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYWRtaW5zLmxlbmd0aCkge1xuXHRcdFx0XHRcdGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aF0gPSBncm91cExpc3RFbGVtZW50KGdldE1lc3NhZ2UoJ0FkbWlucycpLCBhZG1pbnMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwYXRyb2xsZXJzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aF0gPSBncm91cExpc3RFbGVtZW50KGdldE1lc3NhZ2UoJ1BhdHJvbGxlcnMnKSwgcGF0cm9sbGVycyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoJCgnPGRpdj4nKS5hcHBlbmQoZWxlbWVudHMpLCB7dGFnOiAnb25saW5lQWRtaW5zJ30pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnTm9PbmxpbmUnKSwge1xuXHRcdFx0XHRcdHRhZzogJ29ubGluZUFkbWlucycsXG5cdFx0XHRcdFx0dHlwZTogJ3dhcm4nLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSBjYXRjaCB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLCB7dGFnOiAnb25saW5lQWRtaW5zJywgdHlwZTogJ2Vycm9yJ30pO1xuXHR9XG59O1xuXG5leHBvcnQge2RvQ2xpY2t9O1xuIiwgImltcG9ydCB7ZG9DbGlja30gZnJvbSAnLi9tb2R1bGVzL2RvQ2xpY2snO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKCk6IHZvaWQgPT4ge1xuXHQvLyBDcmVhdGUgcG9ydGxldCBsaW5rXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBnZXRNZXNzYWdlKCdPbmxpbmUnKSwgJ3Qtb25saW5lYWRtaW4nKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gQmluZCBjbGljayBsaXN0ZW5lclxuXHQkKGVsZW1lbnQpXG5cdFx0LmZpbmQoJ2EnKVxuXHRcdC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdHZvaWQgZG9DbGljayhldmVudCk7XG5cdFx0fSk7XG59O1xuXG4kKGFkZFBvcnRsZXRMaW5rKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsVUFBVTtBQUNoQixJQUFNQyxjQUFjO0FBQ3BCLElBQU1DLGVBQWU7O0FDRjVCLElBQUFDLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FD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QUFNLElBQUlHLGlCQUFpQnpCLFdBQVcsWUFBWSxHQUFHeUUsVUFBVTtVQUNsRjtBQUNBLGVBQUsvRCxHQUFHaUcsT0FBT0MsRUFBRSxPQUFPLEVBQUVDLE9BQU9ILFFBQVEsR0FBRztZQUFDSSxLQUFLO1VBQWMsQ0FBQztRQUNsRSxPQUFPO0FBQ04sZUFBS3BHLEdBQUdpRyxPQUFPM0csV0FBVyxVQUFVLEdBQUc7WUFDdEM4RyxLQUFLO1lBQ0xDLE1BQU07VUFDUCxDQUFDO1FBQ0Y7TUFDRCxDQUFDO0lBQ0YsUUFBUTtBQUNQLFdBQUtyRyxHQUFHaUcsT0FBTzNHLFdBQVcsZUFBZSxHQUFHO1FBQUM4RyxLQUFLO1FBQWdCQyxNQUFNO01BQU8sQ0FBQztJQUNqRjtFQUNELENBQUE7QUFBQSxTQUFBLFNBMUZNOUMsU0FBQStDLEtBQUE7QUFBQSxXQUFBOUMsTUFBQWhCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNsRE4sSUFBTThELGlCQUFpQkEsTUFBWTtBQUVsQyxRQUFNQyxZQUFtQ0MsU0FBU0MsY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoRyxRQUFNQyxVQUFnQzNHLEdBQUdDLEtBQUtzRyxlQUFlQyxXQUFXLEtBQUtsSCxXQUFXLFFBQVEsR0FBRyxlQUFlO0FBQ2xILE1BQUksQ0FBQ3FILFNBQVM7QUFDYjtFQUNEO0FBR0FULElBQUVTLE9BQU8sRUFDUEMsS0FBSyxHQUFHLEVBQ1JDLEdBQUcsU0FBVXBELFdBQVU7QUFDdkIsU0FBS0YsUUFBUUUsS0FBSztFQUNuQixDQUFDO0FBQ0g7QUFFQXlDLEVBQUVLLGNBQWM7IiwKICAibmFtZXMiOiBbInNlY3Rpb24iLCAic2VjdGlvbkxpc3QiLCAidGFsa1BhZ2VMaW5rIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkFkbWlucyIsICJQYXRyb2xsZXJzIiwgIlN0ZXdhcmRzIiwgIk5vT25saW5lIiwgIk9ubGluZSIsICJPbmxpbmVXaXRoaW4zME1pbnV0ZXMiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInNhbml0aXplIiwgInN0cmluZyIsICJyZXBsYWNlIiwgIlVzZXJMaW5rIiwgInVzZXJOYW1lIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJocmVmIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImNvbmNhdCIsICJyZWwiLCAidGFyZ2V0IiwgImNsYXNzTmFtZSIsICJvbmxpbmVDb3VudFRleHQiLCAiR3JvdXBMaXN0IiwgImdyb3VwTmFtZSIsICJ1c2VyTmFtZXMiLCAiU3RyaW5nIiwgImxlbmd0aCIsICJtYXAiLCAidXNlciIsICJncm91cExpc3RFbGVtZW50IiwgImxpc3RUaXRsZSIsICJCTEFDS19MSVNUIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInF1ZXJ5UmVjZW50Q2hhbmdlcyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInJjc3RhcnQiLCAicmNlbmQiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgInJjcHJvcCIsICJyY3Nob3ciLCAicmNsaW1pdCIsICJyZXNwb25zZSIsICJwb3N0IiwgIl94IiwgIl94MiIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicXVlcnlMb2dFdmVudHMiLCAiX3JlZjIiLCAibGVzdGFydCIsICJsZWVuZCIsICJsZXByb3AiLCAibGVsaW1pdCIsICJfeDMiLCAiX3g0IiwgInF1ZXJ5VXNlclByb3BzIiwgIl9yZWYzIiwgInVzdXNlcnMiLCAidXNwcm9wIiwgIl94NSIsICJkb0NsaWNrIiwgIl9yZWY0IiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgInVzZXJzIiwgInVzZXJzRXh0IiwgInN0ZXdhcmRzIiwgImFkbWlucyIsICJwYXRyb2xsZXJzIiwgInRpbWUiLCAiRGF0ZSIsICJ0b0lTT1N0cmluZyIsICJzZXRNaW51dGVzIiwgImdldE1pbnV0ZXMiLCAicmVjZW50Y2hhbmdlcyIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJ2YWx1ZSIsICJlcnIiLCAiZSIsICJmIiwgImxvZ2V2ZW50cyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ1bmlxdWVBcnJheSIsICJwcm9taXNlcyIsICJpIiwgInNwbGljZSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJncm91cHMiLCAibmFtZSIsICJpbmNsdWRlcyIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJ0aGVuIiwgImVsZW1lbnRzIiwgIm5vdGlmeSIsICIkIiwgImFwcGVuZCIsICJ0YWciLCAidHlwZSIsICJfeDYiLCAiYWRkUG9ydGxldExpbmsiLCAicG9ydGxldElkIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZWxlbWVudCIsICJmaW5kIiwgIm9uIl0KfQo=
