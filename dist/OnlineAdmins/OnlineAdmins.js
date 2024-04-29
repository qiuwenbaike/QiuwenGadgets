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
      users = [.../* @__PURE__ */ new Set([...users, ...usersExt])];
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb21wb25lbnRzL2dyb3VwTGlzdC50c3giLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvb3B0aW9ucy5qc29uIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9hcGkudHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2RvQ2xpY2sudHMiLCAic3JjL09ubGluZUFkbWlucy9PbmxpbmVBZG1pbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvT25saW5lQWRtaW5zL21vZHVsZXMvY29tcG9uZW50cy9PbmxpbmVBZG1pbnMubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBzZWN0aW9uID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19zZWN0aW9uX1dTOUlHYVwiO1xuZXhwb3J0IGNvbnN0IHNlY3Rpb25MaXN0ID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19zZWN0aW9uTGlzdF9XUzlJR2FcIjtcbmV4cG9ydCBjb25zdCB0YWxrUGFnZUxpbmsgPSBcIk9ubGluZUFkbWlucy1tb2R1bGVfX3RhbGtQYWdlTGlua19XUzlJR2FcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInNlY3Rpb25cIjogc2VjdGlvbixcbiAgXCJzZWN0aW9uTGlzdFwiOiBzZWN0aW9uTGlzdCxcbiAgXCJ0YWxrUGFnZUxpbmtcIjogdGFsa1BhZ2VMaW5rXG59O1xuICAgICAgIiwgImltcG9ydCB7c2VjdGlvbiwgc2VjdGlvbkxpc3QsIHRhbGtQYWdlTGlua30gZnJvbSAnLi9PbmxpbmVBZG1pbnMubW9kdWxlLmxlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+XG5cdHN0cmluZy5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmbHQ7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXG5pbnRlcmZhY2UgVXNlckxpbmtQcm9wcyB7XG5cdHVzZXJOYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBHcm91cExpc3RQcm9wcyB7XG5cdGdyb3VwTmFtZTogc3RyaW5nO1xuXHR1c2VyTmFtZXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBVc2VyTGluayA9ICh7dXNlck5hbWV9OiBVc2VyTGlua1Byb3BzKSA9PiAoXG5cdDxsaT5cblx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcjoke3Nhbml0aXplKHVzZXJOYW1lKX1gKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0e3Nhbml0aXplKHVzZXJOYW1lKX1cblx0XHQ8L2E+XG5cdFx0Jm5ic3A7XG5cdFx0PHNwYW4gY2xhc3NOYW1lPXt0YWxrUGFnZUxpbmt9PlxuXHRcdFx077yIXG5cdFx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcl90YWxrOiR7c2FuaXRpemUodXNlck5hbWUpfWApfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdOeVmeiogFxuXHRcdFx0PC9hPlxuXHRcdFx077yJXG5cdFx0PC9zcGFuPlxuXHQ8L2xpPlxuKTtcblxuY29uc3Qgb25saW5lQ291bnRUZXh0OiBzdHJpbmcgPSBnZXRNZXNzYWdlKCcgKCQxIG9ubGluZSk6Jyk7XG5cbmNvbnN0IEdyb3VwTGlzdCA9ICh7Z3JvdXBOYW1lLCB1c2VyTmFtZXN9OiBHcm91cExpc3RQcm9wcykgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17c2VjdGlvbn0+XG5cdFx0PHNwYW4+e2dyb3VwTmFtZX08L3NwYW4+XG5cdFx0PHNwYW4+e29ubGluZUNvdW50VGV4dC5yZXBsYWNlKCckMScsIFN0cmluZyh1c2VyTmFtZXMubGVuZ3RoKSl9PC9zcGFuPlxuXHRcdDx1bCBjbGFzc05hbWU9e3NlY3Rpb25MaXN0fT5cblx0XHRcdHt1c2VyTmFtZXMubWFwKCh1c2VyKSA9PiAoXG5cdFx0XHRcdDxVc2VyTGluayBrZXk9e3VzZXJ9IHVzZXJOYW1lPXt1c2VyfSAvPlxuXHRcdFx0KSl9XG5cdFx0PC91bD5cblx0PC9kaXY+XG4pO1xuXG5jb25zdCBncm91cExpc3RFbGVtZW50ID0gKGdyb3VwTmFtZTogc3RyaW5nLCB1c2VyTmFtZXM6IHN0cmluZ1tdKSA9PiAoXG5cdDxHcm91cExpc3QgZ3JvdXBOYW1lPXtncm91cE5hbWV9IHVzZXJOYW1lcz17dXNlck5hbWVzfSAvPlxuKTtcblxuY29uc3QgbGlzdFRpdGxlID0gKCkgPT4gPHA+e2dldE1lc3NhZ2UoJ09ubGluZVdpdGhpbjMwTWludXRlcycpfTwvcD47XG5cbmV4cG9ydCB7Z3JvdXBMaXN0RWxlbWVudCwgbGlzdFRpdGxlfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0JyAoJDEgb25saW5lKTonOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJDEgb25saW5lKTonLFxuXHRcdFx0amE6ICfvvIgkMeS6uuOCquODs+ODqeOCpOODs+S4re+8ie+8micsXG5cdFx0XHQnemgtaGFucyc6ICfvvIgkMeS4quWcqOe6v++8ie+8micsXG5cdFx0XHQnemgtaGFudCc6ICfvvIgkMeWAi+WcqOe3mu+8ie+8micsXG5cdFx0fSksXG5cdFx0QWRtaW5zOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FkbWlucycsXG5cdFx0XHRqYTogJ+euoeeQhuiAhScsXG5cdFx0XHQnemgtaGFucyc6ICfnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHRQYXRyb2xsZXJzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbGxlcnMnLFxuXHRcdFx0amE6ICflt6Hlm57ogIUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0U3Rld2FyZHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZHMnLFxuXHRcdFx0amE6ICfjgrnjg4Hjg6Xjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn6KOB5Yaz5aeU5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ijgeaxuuWnlOWToScsXG5cdFx0fSksXG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3InLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0Tm9PbmxpbmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZXJlIGFyZSBubyBoaWdoIHByaXZpbGVnZSB1c2VycyBvbmxpbmUnLFxuXHRcdFx0amE6ICfnj77lnKjjgIHpq5jmqKnpmZDliKnnlKjogIXjga/jgqrjg7Pjg6njgqTjg7PjgavjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWhhbnMnOiAn55uu5YmN5rKh5pyJ56uZ5Yqh5Lq65ZGY5Zyo57q/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ebruWJjeaykuacieermeWLmeS6uuWToeWcqOe3micsXG5cdFx0fSksXG5cdFx0T25saW5lOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ09ubGluZSBhZG1pbnMnLFxuXHRcdFx0amE6ICfjgqrjg7Pjg6njgqTjg7Pjga7pq5jmqKnpmZDliKnnlKjogIUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Zyo57q/56uZ5Yqh5Lq65ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3muS4iuermeWLmeS6uuWToScsXG5cdFx0fSksXG5cdFx0T25saW5lV2l0aGluMzBNaW51dGVzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0hpZ2ggcHJpdmlsZWdlIHVzZXJzIG9ubGluZSB3aXRoaW4gMzAgbWludXRlczonLFxuXHRcdFx0amE6ICczMOWIhuS7peWGheOBq+OCquODs+ODqeOCpOODs+OBp+mrmOaoqemZkOWIqeeUqOiAhe+8micsXG5cdFx0XHQnemgtaGFucyc6ICfkuIvpnaLmmK/mnIDov5EzMOWIhumSn+WGheWcqOe6v+eahOermeWKoeS6uuWRmO+8micsXG5cdFx0XHQnemgtaGFudCc6ICfkuIvpnaLmmK/mnIDov5EzMOWIhumQmOWFp+eahOe3muS4iuermeWLmeS6uuWToe+8micsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IEJMQUNLX0xJU1Q6IHN0cmluZ1tdID0gWyfmu6XnlKjov4fmu6TlmagnXTtcblxuZXhwb3J0IHtCTEFDS19MSVNUfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBPbmxpbmVBZG1pbnMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2dyb3VwTGlzdEVsZW1lbnQsIGxpc3RUaXRsZX0gZnJvbSAnLi9jb21wb25lbnRzL2dyb3VwTGlzdCc7XG5pbXBvcnQge0JMQUNLX0xJU1R9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcXVlcnlSZWNlbnRDaGFuZ2VzID0gYXN5bmMgKHJjc3RhcnQ6IHN0cmluZywgcmNlbmQ6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmVjZW50Q2hhbmdlc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICdyZWNlbnRjaGFuZ2VzJyxcblx0XHRyY3Byb3A6ICd1c2VyJyxcblx0XHRyY3Nob3c6IFsnIWJvdCcsICchYW5vbiddLFxuXHRcdHJjbGltaXQ6IDUwMCxcblx0XHRyY3N0YXJ0LFxuXHRcdHJjZW5kLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlMb2dFdmVudHMgPSBhc3luYyAobGVzdGFydDogc3RyaW5nLCBsZWVuZDogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHRsZXByb3A6ICd1c2VyJyxcblx0XHRsZWxpbWl0OiA1MDAsXG5cdFx0bGVzdGFydCxcblx0XHRsZWVuZCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHF1ZXJ5VXNlclByb3BzID0gYXN5bmMgKHVzdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0dXN1c2Vycyxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZG9DbGljayA9IGFzeW5jIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0bGV0IHVzZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCB1c2Vyc0V4dDogc3RyaW5nW10gPSBbXTtcblx0Y29uc3Qgc3Rld2FyZHM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IGFkbWluczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3QgcGF0cm9sbGVyczogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdCB0aW1lOiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgcmNzdGFydDogc3RyaW5nID0gdGltZS50b0lTT1N0cmluZygpO1xuXHR0aW1lLnNldE1pbnV0ZXModGltZS5nZXRNaW51dGVzKCkgLSAzMCk7IC8vIOacgOi/keabtOaUuTMw5YiG6ZKf5YaF55qE57yW6L6R55So5oi3XG5cdGNvbnN0IHJjZW5kOiBzdHJpbmcgPSB0aW1lLnRvSVNPU3RyaW5nKCk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCByZWNlbnRjaGFuZ2VzID0gYXdhaXQgcXVlcnlSZWNlbnRDaGFuZ2VzKHJjc3RhcnQsIHJjZW5kKTtcblxuXHRcdGZvciAoY29uc3Qge3VzZXJ9IG9mIHJlY2VudGNoYW5nZXNbJ3F1ZXJ5J10ucmVjZW50Y2hhbmdlcyBhcyB7dXNlcjogc3RyaW5nfVtdKSB7XG5cdFx0XHR1c2Vyc1t1c2Vycy5sZW5ndGhdID0gdXNlcjsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0fVxuXG5cdFx0Y29uc3QgbG9nZXZlbnRzID0gYXdhaXQgcXVlcnlMb2dFdmVudHMocmNzdGFydCwgcmNlbmQpO1xuXG5cdFx0Zm9yIChjb25zdCB7dXNlcn0gb2YgbG9nZXZlbnRzWydxdWVyeSddLmxvZ2V2ZW50cyBhcyB7dXNlcjogc3RyaW5nfVtdKSB7XG5cdFx0XHR1c2Vyc0V4dFt1c2Vyc0V4dC5sZW5ndGhdID0gdXNlcjtcblx0XHR9XG5cblx0XHR1c2VycyA9IFsuLi5uZXcgU2V0KFsuLi51c2VycywgLi4udXNlcnNFeHRdKV07IC8vIOeUqOaIt+WQjeWIl+ihqOWQiOW5tuOAgeWOu+mHjeOAgeWIhuWJslxuXG5cdFx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCB1c3VzZXJzID0gdXNlcnMuc3BsaWNlKDAsIDUwKTtcblx0XHRcdGlmICghdXN1c2Vycy5sZW5ndGgpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcXVlcnlVc2VyUHJvcHModXN1c2Vycyk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCB7Z3JvdXBzLCBuYW1lfSBvZiByZXNwb25zZVsncXVlcnknXS51c2VycyBhcyB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0Ly8g5om+5Yiw566h55CG5Lq65ZGY77yM5Y676Zmk5py65Zmo5Lq677yM5raI6ZmkbmFtZeeahOepuuWAvFxuXHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2JvdCcpIHx8IEJMQUNLX0xJU1QuaW5jbHVkZXMobmFtZSkgfHwgIW5hbWUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzdGV3YXJkJykpIHtcblx0XHRcdFx0XHRcdHN0ZXdhcmRzW3N0ZXdhcmRzLmxlbmd0aF0gPSBuYW1lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzeXNvcCcpKSB7XG5cdFx0XHRcdFx0XHRhZG1pbnNbYWRtaW5zLmxlbmd0aF0gPSBuYW1lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdwYXRyb2xsZXInKSkge1xuXHRcdFx0XHRcdFx0cGF0cm9sbGVyc1twYXRyb2xsZXJzLmxlbmd0aF0gPSBuYW1lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHQvLyDmn6Xor6LnlKjmiLfmnYPpmZBcblx0XHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdFx0fSBjYXRjaCB7fVxuXHRcdFx0fVxuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRpZiAoc3Rld2FyZHMubGVuZ3RoICsgYWRtaW5zLmxlbmd0aCArIHBhdHJvbGxlcnMubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnRzOiBFbGVtZW50W10gPSBbbGlzdFRpdGxlKCldO1xuXG5cdFx0XHRcdGlmIChzdGV3YXJkcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRlbGVtZW50c1tlbGVtZW50cy5sZW5ndGhdID0gZ3JvdXBMaXN0RWxlbWVudChnZXRNZXNzYWdlKCdTdGV3YXJkcycpLCBzdGV3YXJkcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGFkbWlucy5sZW5ndGgpIHtcblx0XHRcdFx0XHRlbGVtZW50c1tlbGVtZW50cy5sZW5ndGhdID0gZ3JvdXBMaXN0RWxlbWVudChnZXRNZXNzYWdlKCdBZG1pbnMnKSwgYWRtaW5zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocGF0cm9sbGVycy5sZW5ndGgpIHtcblx0XHRcdFx0XHRlbGVtZW50c1tlbGVtZW50cy5sZW5ndGhdID0gZ3JvdXBMaXN0RWxlbWVudChnZXRNZXNzYWdlKCdQYXRyb2xsZXJzJyksIHBhdHJvbGxlcnMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KCQoJzxkaXY+JykuYXBwZW5kKGVsZW1lbnRzKSwge3RhZzogJ29ubGluZUFkbWlucyd9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ05vT25saW5lJyksIHtcblx0XHRcdFx0XHR0YWc6ICdvbmxpbmVBZG1pbnMnLFxuXHRcdFx0XHRcdHR5cGU6ICd3YXJuJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0gY2F0Y2gge1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSwge3RhZzogJ29ubGluZUFkbWlucycsIHR5cGU6ICdlcnJvcid9KTtcblx0fVxufTtcblxuZXhwb3J0IHtkb0NsaWNrfTtcbiIsICJpbXBvcnQge2RvQ2xpY2t9IGZyb20gJy4vbW9kdWxlcy9kb0NsaWNrJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBhZGRQb3J0bGV0TGluayA9ICgpOiB2b2lkID0+IHtcblx0Ly8gQ3JlYXRlIHBvcnRsZXQgbGlua1xuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgZ2V0TWVzc2FnZSgnT25saW5lJyksICd0LW9ubGluZWFkbWluJyk7XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIEJpbmQgY2xpY2sgbGlzdGVuZXJcblx0JChlbGVtZW50KVxuXHRcdC5maW5kKCdhJylcblx0XHQub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHR2b2lkIGRvQ2xpY2soZXZlbnQpO1xuXHRcdH0pO1xufTtcblxuJChhZGRQb3J0bGV0TGluayk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNPLElBQU1BLFVBQVU7QUFDaEIsSUFBTUMsY0FBYztBQUNwQixJQUFNQyxlQUFlOztBQ0Y1QixJQUFBQyxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixrQkFBQSxHQUFpQkQsa0JBQUFFLFVBQVM7TUFDekJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxTQUFBLEdB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QU07VUFDUCxDQUFDO1FBQ0Y7TUFDRCxDQUFDO0lBQ0YsUUFBUTtBQUNQLFdBQUtwRyxHQUFHZ0csT0FBTzFHLFdBQVcsZUFBZSxHQUFHO1FBQUM2RyxLQUFLO1FBQWdCQyxNQUFNO01BQU8sQ0FBQztJQUNqRjtFQUNELENBQUE7QUFBQSxTQUFBLFNBekZNOUMsU0FBQStDLEtBQUE7QUFBQSxXQUFBOUMsTUFBQWhCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNqRE4sSUFBTThELGlCQUFpQkEsTUFBWTtBQUVsQyxRQUFNQyxZQUFtQ0MsU0FBU0MsY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoRyxRQUFNQyxVQUFnQzFHLEdBQUdDLEtBQUtxRyxlQUFlQyxXQUFXLEtBQUtqSCxXQUFXLFFBQVEsR0FBRyxlQUFlO0FBQ2xILE1BQUksQ0FBQ29ILFNBQVM7QUFDYjtFQUNEO0FBR0FULElBQUVTLE9BQU8sRUFDUEMsS0FBSyxHQUFHLEVBQ1JDLEdBQUcsU0FBVXBELFdBQVU7QUFDdkIsU0FBS0YsUUFBUUUsS0FBSztFQUNuQixDQUFDO0FBQ0g7QUFFQXlDLEVBQUVLLGNBQWM7IiwKICAibmFtZXMiOiBbInNlY3Rpb24iLCAic2VjdGlvbkxpc3QiLCAidGFsa1BhZ2VMaW5rIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkFkbWlucyIsICJQYXRyb2xsZXJzIiwgIlN0ZXdhcmRzIiwgIk5vT25saW5lIiwgIk9ubGluZSIsICJPbmxpbmVXaXRoaW4zME1pbnV0ZXMiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInNhbml0aXplIiwgInN0cmluZyIsICJyZXBsYWNlIiwgIlVzZXJMaW5rIiwgInVzZXJOYW1lIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJocmVmIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImNvbmNhdCIsICJyZWwiLCAidGFyZ2V0IiwgImNsYXNzTmFtZSIsICJvbmxpbmVDb3VudFRleHQiLCAiR3JvdXBMaXN0IiwgImdyb3VwTmFtZSIsICJ1c2VyTmFtZXMiLCAiU3RyaW5nIiwgImxlbmd0aCIsICJtYXAiLCAidXNlciIsICJncm91cExpc3RFbGVtZW50IiwgImxpc3RUaXRsZSIsICJCTEFDS19MSVNUIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAicXVlcnlSZWNlbnRDaGFuZ2VzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicmNzdGFydCIsICJyY2VuZCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAicmNwcm9wIiwgInJjc2hvdyIsICJyY2xpbWl0IiwgInJlc3BvbnNlIiwgInBvc3QiLCAiX3giLCAiX3gyIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJxdWVyeUxvZ0V2ZW50cyIsICJfcmVmMiIsICJsZXN0YXJ0IiwgImxlZW5kIiwgImxlcHJvcCIsICJsZWxpbWl0IiwgIl94MyIsICJfeDQiLCAicXVlcnlVc2VyUHJvcHMiLCAiX3JlZjMiLCAidXN1c2VycyIsICJ1c3Byb3AiLCAiX3g1IiwgImRvQ2xpY2siLCAiX3JlZjQiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAidXNlcnMiLCAidXNlcnNFeHQiLCAic3Rld2FyZHMiLCAiYWRtaW5zIiwgInBhdHJvbGxlcnMiLCAidGltZSIsICJEYXRlIiwgInRvSVNPU3RyaW5nIiwgInNldE1pbnV0ZXMiLCAiZ2V0TWludXRlcyIsICJyZWNlbnRjaGFuZ2VzIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiLCAibG9nZXZlbnRzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIlNldCIsICJwcm9taXNlcyIsICJpIiwgInNwbGljZSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJncm91cHMiLCAibmFtZSIsICJpbmNsdWRlcyIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJ0aGVuIiwgImVsZW1lbnRzIiwgIm5vdGlmeSIsICIkIiwgImFwcGVuZCIsICJ0YWciLCAidHlwZSIsICJfeDYiLCAiYWRkUG9ydGxldExpbmsiLCAicG9ydGxldElkIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZWxlbWVudCIsICJmaW5kIiwgIm9uIl0KfQo=
