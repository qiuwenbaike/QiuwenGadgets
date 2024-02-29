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
var onlineadminSection = "OnlineAdmins-module__onlineadminSection_WS9IGa";
var onlineadminSectionlist = "OnlineAdmins-module__onlineadminSectionlist_WS9IGa";
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
  style: {
    fontSize: "90%"
  }
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
  class: onlineadminSection
}, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, groupName), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", null, onlineCountText.replace("$1", String(userNames.length))), /* @__PURE__ */ import_ext_gadget2.default.createElement("ul", {
  class: onlineadminSectionlist
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
//! src/OnlineAdmins/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var onlineAdmins = () => {
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const portletLinkOnline = mw.util.addPortletLink(portletId, "#", getMessage("Online"), "t-onlineadmin");
  const api = (0, import_ext_gadget3.initMwApi)("OnlineAdmins/1.1");
  const doClick = /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(function* (event) {
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
        const recentchangesParams = {
          action: "query",
          formatversion: "2",
          list: "recentchanges",
          rcprop: "user",
          rcshow: ["!bot", "!anon"],
          rclimit: 500,
          rcstart,
          rcend
        };
        const recentchanges = yield api.get(recentchangesParams);
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
        const logeventsParams = {
          action: "query",
          formatversion: "2",
          list: "logevents",
          leprop: "user",
          lelimit: 500,
          lestart: rcstart,
          leend: rcend
        };
        const logevents = yield api.get(logeventsParams);
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
        for (let i = 0; i < (users.length + 50) / 50; i++) {
          promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
            const params = {
              action: "query",
              format: "json",
              formatversion: "2",
              list: "users",
              ususers: users.slice(i * 50, (i + 1) * 50).join("|"),
              usprop: "groups"
            };
            const response = yield api.get(params);
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
        for (var _i = 0, _promises = promises; _i < _promises.length; _i++) {
          const promise = _promises[_i];
          yield promise();
        }
        if (stewards.length + admins.length + patrollers.length > 0) {
          const elements = [listTitle()];
          if (stewards.length > 0) {
            elements[elements.length] = groupListElement(getMessage("Stewards"), stewards);
          }
          if (admins.length > 0) {
            elements[elements.length] = groupListElement(getMessage("Admins"), admins);
          }
          if (patrollers.length > 0) {
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
      } catch {
        void mw.notify(getMessage("Network error"), {
          tag: "onlineAdmins",
          type: "error"
        });
      }
    });
    return function doClick2(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  if (!portletLinkOnline) {
    return;
  }
  $(portletLinkOnline).find("a").on("click", (event) => {
    void doClick(event);
  });
};
//! src/OnlineAdmins/OnlineAdmins.ts
$(onlineAdmins);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb21wb25lbnRzL2dyb3VwTGlzdC50c3giLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvT25saW5lQWRtaW5zLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3Qgb25saW5lYWRtaW5TZWN0aW9uID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19vbmxpbmVhZG1pblNlY3Rpb25fV1M5SUdhXCI7XG5leHBvcnQgY29uc3Qgb25saW5lYWRtaW5TZWN0aW9ubGlzdCA9IFwiT25saW5lQWRtaW5zLW1vZHVsZV9fb25saW5lYWRtaW5TZWN0aW9ubGlzdF9XUzlJR2FcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIm9ubGluZWFkbWluU2VjdGlvblwiOiBvbmxpbmVhZG1pblNlY3Rpb24sXG4gIFwib25saW5lYWRtaW5TZWN0aW9ubGlzdFwiOiBvbmxpbmVhZG1pblNlY3Rpb25saXN0XG59O1xuICAgICAgIiwgImltcG9ydCB7b25saW5lYWRtaW5TZWN0aW9uLCBvbmxpbmVhZG1pblNlY3Rpb25saXN0fSBmcm9tICcuL09ubGluZUFkbWlucy5tb2R1bGUubGVzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBzYW5pdGl6ZSA9IChzdHJpbmc6IHN0cmluZykgPT5cblx0c3RyaW5nLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZsdDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cbmludGVyZmFjZSBVc2VyTGlua1Byb3BzIHtcblx0dXNlck5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEdyb3VwTGlzdFByb3BzIHtcblx0Z3JvdXBOYW1lOiBzdHJpbmc7XG5cdHVzZXJOYW1lczogc3RyaW5nW107XG59XG5cbmNvbnN0IFVzZXJMaW5rID0gKHt1c2VyTmFtZX06IFVzZXJMaW5rUHJvcHMpID0+IChcblx0PGxpPlxuXHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKGBVc2VyOiR7c2FuaXRpemUodXNlck5hbWUpfWApfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHR7c2FuaXRpemUodXNlck5hbWUpfVxuXHRcdDwvYT5cblx0XHQmbmJzcDtcblx0XHQ8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAnOTAlJ319PlxuXHRcdFx077yIXG5cdFx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcl90YWxrOiR7c2FuaXRpemUodXNlck5hbWUpfWApfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdOeVmeiogFxuXHRcdFx0PC9hPlxuXHRcdFx077yJXG5cdFx0PC9zcGFuPlxuXHQ8L2xpPlxuKTtcblxuY29uc3Qgb25saW5lQ291bnRUZXh0OiBzdHJpbmcgPSBnZXRNZXNzYWdlKCcgKCQxIG9ubGluZSk6Jyk7XG5cbmNvbnN0IEdyb3VwTGlzdCA9ICh7Z3JvdXBOYW1lLCB1c2VyTmFtZXN9OiBHcm91cExpc3RQcm9wcykgPT4gKFxuXHQ8ZGl2IGNsYXNzPXtvbmxpbmVhZG1pblNlY3Rpb259PlxuXHRcdDxzcGFuPntncm91cE5hbWV9PC9zcGFuPlxuXHRcdDxzcGFuPntvbmxpbmVDb3VudFRleHQucmVwbGFjZSgnJDEnLCBTdHJpbmcodXNlck5hbWVzLmxlbmd0aCkpfTwvc3Bhbj5cblx0XHQ8dWwgY2xhc3M9e29ubGluZWFkbWluU2VjdGlvbmxpc3R9PlxuXHRcdFx0e3VzZXJOYW1lcy5tYXAoKHVzZXIpID0+IChcblx0XHRcdFx0PFVzZXJMaW5rIGtleT17dXNlcn0gdXNlck5hbWU9e3VzZXJ9IC8+XG5cdFx0XHQpKX1cblx0XHQ8L3VsPlxuXHQ8L2Rpdj5cbik7XG5cbmNvbnN0IGdyb3VwTGlzdEVsZW1lbnQgPSAoZ3JvdXBOYW1lOiBzdHJpbmcsIHVzZXJOYW1lczogc3RyaW5nW10pID0+IChcblx0PEdyb3VwTGlzdCBncm91cE5hbWU9e2dyb3VwTmFtZX0gdXNlck5hbWVzPXt1c2VyTmFtZXN9IC8+XG4pO1xuXG5jb25zdCBsaXN0VGl0bGUgPSAoKSA9PiA8cD57Z2V0TWVzc2FnZSgnT25saW5lV2l0aGluMzBNaW51dGVzJyl9PC9wPjtcblxuZXhwb3J0IHtncm91cExpc3RFbGVtZW50LCBsaXN0VGl0bGV9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnICgkMSBvbmxpbmUpOic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnICgkMSBvbmxpbmUpOicsXG5cdFx0XHRqYTogJ++8iCQx5Lq644Kq44Oz44Op44Kk44Oz5Lit77yJ77yaJyxcblx0XHRcdCd6aC1oYW5zJzogJ++8iCQx5Liq5Zyo57q/77yJ77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ++8iCQx5YCL5Zyo57ea77yJ77yaJyxcblx0XHR9KSxcblx0XHRBZG1pbnM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQWRtaW5zJyxcblx0XHRcdGphOiAn566h55CG6ICFJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdFBhdHJvbGxlcnM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGF0cm9sbGVycycsXG5cdFx0XHRqYTogJ+W3oeWbnuiAhScsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5ZOhJyxcblx0XHR9KSxcblx0XHRTdGV3YXJkczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkcycsXG5cdFx0XHRqYTogJ+OCueODgeODpeODr+ODvOODiScsXG5cdFx0XHQnemgtaGFucyc6ICfoo4HlhrPlp5TlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KOB5rG65aeU5ZOhJyxcblx0XHR9KSxcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHROb09ubGluZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDdXJyZW50bHkgdGhlcmUgYXJlIG5vIGhpZ2ggcHJpdmlsZWdlIHVzZXJzIG9ubGluZScsXG5cdFx0XHRqYTogJ+ePvuWcqOOAgemrmOaoqemZkOWIqeeUqOiAheOBr+OCquODs+ODqeOCpOODs+OBq+OBhOOBvuOBm+OCkycsXG5cdFx0XHQnemgtaGFucyc6ICfnm67liY3msqHmnInnq5nliqHkurrlkZjlnKjnur8nLFxuXHRcdFx0J3poLWhhbnQnOiAn55uu5YmN5rKS5pyJ56uZ5YuZ5Lq65ZOh5Zyo57eaJyxcblx0XHR9KSxcblx0XHRPbmxpbmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT25saW5lIGFkbWlucycsXG5cdFx0XHRqYTogJ+OCquODs+ODqeOCpOODs+OBrumrmOaoqemZkOWIqeeUqOiAhScsXG5cdFx0XHQnemgtaGFucyc6ICflnKjnur/nq5nliqHkurrlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ea5LiK56uZ5YuZ5Lq65ZOhJyxcblx0XHR9KSxcblx0XHRPbmxpbmVXaXRoaW4zME1pbnV0ZXM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSGlnaCBwcml2aWxlZ2UgdXNlcnMgb25saW5lIHdpdGhpbiAzMCBtaW51dGVzOicsXG5cdFx0XHRqYTogJzMw5YiG5Lul5YaF44Gr44Kq44Oz44Op44Kk44Oz44Gn6auY5qip6ZmQ5Yip55So6ICF77yaJyxcblx0XHRcdCd6aC1oYW5zJzogJ+S4i+mdouaYr+acgOi/kTMw5YiG6ZKf5YaF5Zyo57q/55qE56uZ5Yqh5Lq65ZGY77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4i+mdouaYr+acgOi/kTMw5YiG6ZCY5YWn55qE57ea5LiK56uZ5YuZ5Lq65ZOh77yaJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3QgQkxBQ0tfTElTVDogc3RyaW5nW10gPSBbJ+a7peeUqOi/h+a7pOWZqCddO1xuXG5leHBvcnQge0JMQUNLX0xJU1R9O1xuIiwgImltcG9ydCB7Z3JvdXBMaXN0RWxlbWVudCwgbGlzdFRpdGxlfSBmcm9tICcuL2NvbXBvbmVudHMvZ3JvdXBMaXN0JztcbmltcG9ydCB7QkxBQ0tfTElTVH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuZXhwb3J0IGNvbnN0IG9ubGluZUFkbWlucyA9ICgpOiB2b2lkID0+IHtcblx0Ly8gQ3JlYXRlIHBvcnRsZXQgbGlua1xuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGNvbnN0IHBvcnRsZXRMaW5rT25saW5lOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0cG9ydGxldElkLFxuXHRcdCcjJyxcblx0XHRnZXRNZXNzYWdlKCdPbmxpbmUnKSxcblx0XHQndC1vbmxpbmVhZG1pbidcblx0KTtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ09ubGluZUFkbWlucy8xLjEnKTtcblx0Y29uc3QgZG9DbGljayA9IGFzeW5jIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRsZXQgdXNlcnM6IHN0cmluZ1tdID0gW107XG5cdFx0Y29uc3QgdXNlcnNFeHQ6IHN0cmluZ1tdID0gW107XG5cdFx0Y29uc3Qgc3Rld2FyZHM6IHN0cmluZ1tdID0gW107XG5cdFx0Y29uc3QgYWRtaW5zOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGNvbnN0IHBhdHJvbGxlcnM6IHN0cmluZ1tdID0gW107XG5cdFx0Ly8g5pyA6L+R5pu05pS5MzDliIbpkp/lhoXnmoTnvJbovpHnlKjmiLdcblx0XHRjb25zdCB0aW1lOiBEYXRlID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCByY3N0YXJ0OiBzdHJpbmcgPSB0aW1lLnRvSVNPU3RyaW5nKCk7XG5cdFx0dGltZS5zZXRNaW51dGVzKHRpbWUuZ2V0TWludXRlcygpIC0gMzApO1xuXHRcdGNvbnN0IHJjZW5kOiBzdHJpbmcgPSB0aW1lLnRvSVNPU3RyaW5nKCk7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlY2VudGNoYW5nZXNQYXJhbXM6IEFwaVF1ZXJ5UmVjZW50Q2hhbmdlc1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdGxpc3Q6ICdyZWNlbnRjaGFuZ2VzJyxcblx0XHRcdFx0cmNwcm9wOiAndXNlcicsXG5cdFx0XHRcdHJjc2hvdzogWychYm90JywgJyFhbm9uJ10sXG5cdFx0XHRcdHJjbGltaXQ6IDUwMCxcblx0XHRcdFx0cmNzdGFydCxcblx0XHRcdFx0cmNlbmQsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgcmVjZW50Y2hhbmdlcyA9IGF3YWl0IGFwaS5nZXQocmVjZW50Y2hhbmdlc1BhcmFtcyk7XG5cblx0XHRcdGZvciAoY29uc3Qge3VzZXJ9IG9mIHJlY2VudGNoYW5nZXNbJ3F1ZXJ5J10ucmVjZW50Y2hhbmdlcyBhcyB7dXNlcjogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdHVzZXJzW3VzZXJzLmxlbmd0aF0gPSB1c2VyOyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHRcdH1cblx0XHRcdGNvbnN0IGxvZ2V2ZW50c1BhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHRcdFx0bGVwcm9wOiAndXNlcicsXG5cdFx0XHRcdGxlbGltaXQ6IDUwMCxcblx0XHRcdFx0bGVzdGFydDogcmNzdGFydCxcblx0XHRcdFx0bGVlbmQ6IHJjZW5kLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGxvZ2V2ZW50cyA9IGF3YWl0IGFwaS5nZXQobG9nZXZlbnRzUGFyYW1zKTtcblxuXHRcdFx0Zm9yIChjb25zdCB7dXNlcn0gb2YgbG9nZXZlbnRzWydxdWVyeSddLmxvZ2V2ZW50cyBhcyB7dXNlcjogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdHVzZXJzRXh0W3VzZXJzRXh0Lmxlbmd0aF0gPSB1c2VyO1xuXHRcdFx0fVxuXHRcdFx0Ly8g55So5oi35ZCN5YiX6KGo5ZCI5bm244CB5Y676YeN44CB5YiG5YmyXG5cdFx0XHR1c2VycyA9IFsuLi5uZXcgU2V0KFsuLi51c2VycywgLi4udXNlcnNFeHRdKV07XG5cdFx0XHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCAodXNlcnMubGVuZ3RoICsgNTApIC8gNTA7IGkrKykge1xuXHRcdFx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdFx0bGlzdDogJ3VzZXJzJyxcblx0XHRcdFx0XHRcdHVzdXNlcnM6IHVzZXJzLnNsaWNlKGkgKiA1MCwgKGkgKyAxKSAqIDUwKS5qb2luKCd8JyksXG5cdFx0XHRcdFx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRcdFx0XHRmb3IgKGNvbnN0IHtncm91cHMsIG5hbWV9IG9mIHJlc3BvbnNlWydxdWVyeSddLnVzZXJzIGFzIHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRcdC8vIOaJvuWIsOeuoeeQhuS6uuWRmO+8jOWOu+mZpOacuuWZqOS6uu+8jOa2iOmZpG5hbWXnmoTnqbrlgLxcblx0XHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2JvdCcpIHx8IEJMQUNLX0xJU1QuaW5jbHVkZXMobmFtZSkgfHwgIW5hbWUpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzdGV3YXJkJykpIHtcblx0XHRcdFx0XHRcdFx0c3Rld2FyZHNbc3Rld2FyZHMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzeXNvcCcpKSB7XG5cdFx0XHRcdFx0XHRcdGFkbWluc1thZG1pbnMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdwYXRyb2xsZXInKSkge1xuXHRcdFx0XHRcdFx0XHRwYXRyb2xsZXJzW3BhdHJvbGxlcnMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Ly8g5p+l6K+i55So5oi35p2D6ZmQXG5cdFx0XHRmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHN0ZXdhcmRzLmxlbmd0aCArIGFkbWlucy5sZW5ndGggKyBwYXRyb2xsZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29uc3QgZWxlbWVudHM6IEVsZW1lbnRbXSA9IFtsaXN0VGl0bGUoKV07XG5cdFx0XHRcdGlmIChzdGV3YXJkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0ZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoXSA9IGdyb3VwTGlzdEVsZW1lbnQoZ2V0TWVzc2FnZSgnU3Rld2FyZHMnKSwgc3Rld2FyZHMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChhZG1pbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aF0gPSBncm91cExpc3RFbGVtZW50KGdldE1lc3NhZ2UoJ0FkbWlucycpLCBhZG1pbnMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwYXRyb2xsZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRlbGVtZW50c1tlbGVtZW50cy5sZW5ndGhdID0gZ3JvdXBMaXN0RWxlbWVudChnZXRNZXNzYWdlKCdQYXRyb2xsZXJzJyksIHBhdHJvbGxlcnMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KCQoJzxkaXY+JykuYXBwZW5kKGVsZW1lbnRzKSwge3RhZzogJ29ubGluZUFkbWlucyd9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ05vT25saW5lJyksIHtcblx0XHRcdFx0XHR0YWc6ICdvbmxpbmVBZG1pbnMnLFxuXHRcdFx0XHRcdHR5cGU6ICd3YXJuJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksIHt0YWc6ICdvbmxpbmVBZG1pbnMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0fVxuXHR9O1xuXHQvLyBCaW5kIGNsaWNrIGxpc3RlbmVyXG5cdGlmICghcG9ydGxldExpbmtPbmxpbmUpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0JChwb3J0bGV0TGlua09ubGluZSlcblx0XHQuZmluZCgnYScpXG5cdFx0Lm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0dm9pZCBkb0NsaWNrKGV2ZW50KTtcblx0XHR9KTtcbn07XG4iLCAiaW1wb3J0IHtvbmxpbmVBZG1pbnN9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuJChvbmxpbmVBZG1pbnMpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxxQkFBcUI7QUFDM0IsSUFBTUMseUJBQXlCOztBQ0R0QyxJQUFBQyxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixrQkFBQSxHQUFpQkQsa0JBQUFFLFVBQVM7TUFDekJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxTQUFBLEdBQVFMLGtCQUFBRSxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsYUFBQSxHQUFZTixrQkFBQUUsVUFBUztNQUNwQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLFdBQUEsR0FBVVAsa0JBQUFFLFVBQVM7TUFDbEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGtCQUFBLEdBQWlCSixrQkFBQUUsVUFBUztNQUN6QkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RJLFdBQUEsR0FBVVIsa0JBQUFFLFVBQVM7TUFDbEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESyxTQUFBLEdBQVFULGtCQUFBRSxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRE0sd0JBQUEsR0FBdUJWLGtCQUFBRSxVQUFTO01BQy9CQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTU8sZUFBZVYsZ0JBQWdCO0FBRXJDLElBQU1XLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEdkRBLElBQU1DLFdBQVlDLFlBQ2pCQSxPQUFPQyxRQUFRLE1BQU0sT0FBTyxFQUFFQSxRQUFRLE1BQU0sTUFBTSxFQUFFQSxRQUFRLE1BQU0sTUFBTSxFQUFFQSxRQUFRLE1BQU0sUUFBUTtBQVdqRyxJQUFNQyxXQUFXQSxDQUFDO0VBQUNDO0FBQVEsTUFDMUJyQixtQ0FBQXNCLFFBQUFDLGNBQUMsTUFBQSxNQUNBdkIsbUNBQUFzQixRQUFBQyxjQUFDLEtBQUE7RUFBRUMsTUFBTUMsR0FBR0MsS0FBS0MsT0FBQSxRQUFBQyxPQUFlWCxTQUFTSSxRQUFRLENBQUMsQ0FBRTtFQUFHUSxLQUFJO0VBQXNCQyxRQUFPO0FBQUEsR0FDdEZiLFNBQVNJLFFBQVEsQ0FDbkIsR0FBSSxLQUVKckIsbUNBQUFzQixRQUFBQyxjQUFDLFFBQUE7RUFBS1EsT0FBTztJQUFDQyxVQUFVO0VBQUs7QUFBQSxHQUFHLEtBRS9CaEMsbUNBQUFzQixRQUFBQyxjQUFDLEtBQUE7RUFBRUMsTUFBTUMsR0FBR0MsS0FBS0MsT0FBQSxhQUFBQyxPQUFvQlgsU0FBU0ksUUFBUSxDQUFDLENBQUU7RUFBR1EsS0FBSTtFQUFzQkMsUUFBTztBQUFBLEdBQVMsSUFFdEcsR0FBSSxHQUVMLENBQ0Q7QUFHRCxJQUFNRyxrQkFBMEJsQixXQUFXLGVBQWU7QUFFMUQsSUFBTW1CLFlBQVlBLENBQUM7RUFBQ0M7RUFBV0M7QUFBUyxNQUN2Q3BDLG1DQUFBc0IsUUFBQUMsY0FBQyxPQUFBO0VBQUljLE9BQU92QztBQUFBLEdBQ1hFLG1DQUFBc0IsUUFBQUMsY0FBQyxRQUFBLE1BQU1ZLFNBQVUsR0FDakJuQyxtQ0FBQXNCLFFBQUFDLGNBQUMsUUFBQSxNQUFNVSxnQkFBZ0JkLFFBQVEsTUFBTW1CLE9BQU9GLFVBQVVHLE1BQU0sQ0FBQyxDQUFFLEdBQy9EdkMsbUNBQUFzQixRQUFBQyxjQUFDLE1BQUE7RUFBR2MsT0FBT3RDO0FBQUEsR0FDVHFDLFVBQVVJLElBQUtDLFVBQ2Z6QyxtQ0FBQXNCLFFBQUFDLGNBQUNILFVBQUE7RUFBU0osS0FBS3lCO0VBQU1wQixVQUFVb0I7QUFBQSxDQUFNLENBQ3JDLENBQ0YsQ0FDRDtBQUdELElBQU1DLG1CQUFtQkEsQ0FBQ1AsV0FBbUJDLGNBQzVDcEMsbUNBQUFzQixRQUFBQyxjQUFDVyxXQUFBO0VBQVVDO0VBQXNCQztBQUFBLENBQXNCO0FBR3hELElBQU1PLFlBQVlBLE1BQU0zQyxtQ0FBQXNCLFFBQUFDLGNBQUMsS0FBQSxNQUFHUixXQUFXLHVCQUF1QixDQUFFOztBRWxEaEUsSUFBTTZCLGFBQXVCLENBQUMsT0FBTzs7QUNHckMsSUFBQUMscUJBQXdCM0MsUUFBQSxpQkFBQTtBQUVqQixJQUFNNEMsZUFBZUEsTUFBWTtBQUV2QyxRQUFNQyxZQUFtQ0MsU0FBU0MsY0FBYyxhQUFhLElBQUksZUFBZTtBQUNoRyxRQUFNQyxvQkFBMEN6QixHQUFHQyxLQUFLeUIsZUFDdkRKLFdBQ0EsS0FDQWhDLFdBQVcsUUFBUSxHQUNuQixlQUNEO0FBQ0EsUUFBTXFDLE9BQUEsR0FBY1AsbUJBQUFRLFdBQVUsa0JBQWtCO0FBQ2hELFFBQU1DLFVBQUEsMkJBQUE7QUFBQSxRQUFBQyxPQUFBQyxrQkFBVSxXQUFPQyxPQUErRDtBQUNyRkEsWUFBTUMsZUFBZTtBQUNyQixVQUFJQyxRQUFrQixDQUFBO0FBQ3RCLFlBQU1DLFdBQXFCLENBQUE7QUFDM0IsWUFBTUMsV0FBcUIsQ0FBQTtBQUMzQixZQUFNQyxTQUFtQixDQUFBO0FBQ3pCLFlBQU1DLGFBQXVCLENBQUE7QUFFN0IsWUFBTUMsT0FBYSxvQkFBSUMsS0FBSztBQUM1QixZQUFNQyxVQUFrQkYsS0FBS0csWUFBWTtBQUN6Q0gsV0FBS0ksV0FBV0osS0FBS0ssV0FBVyxJQUFJLEVBQUU7QUFDdEMsWUFBTUMsUUFBZ0JOLEtBQUtHLFlBQVk7QUFDdkMsVUFBSTtBQUNILGNBQU1JLHNCQUFtRDtVQUN4REMsUUFBUTtVQUNSQyxlQUFlO1VBQ2ZDLE1BQU07VUFDTkMsUUFBUTtVQUNSQyxRQUFRLENBQUMsUUFBUSxPQUFPO1VBQ3hCQyxTQUFTO1VBQ1RYO1VBQ0FJO1FBQ0Q7QUFDQSxjQUFNUSxnQkFBQSxNQUFzQjFCLElBQUkyQixJQUFJUixtQkFBbUI7QUFBQSxZQUFBUyxhQUFBQywyQkFFbENILGNBQWMsT0FBTyxFQUFFQSxhQUFBLEdBQUFJO0FBQUEsWUFBQTtBQUE1QyxlQUFBRixXQUFBRyxFQUFBLEdBQUEsRUFBQUQsU0FBQUYsV0FBQUksRUFBQSxHQUFBQyxRQUErRTtBQUFBLGtCQUFwRTtjQUFDNUM7WUFBSSxJQUFBeUMsT0FBQUk7QUFDZjNCLGtCQUFNQSxNQUFNcEIsTUFBTSxJQUFJRTtVQUN2QjtRQUFBLFNBQUE4QyxLQUFBO0FBQUFQLHFCQUFBUSxFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBUCxxQkFBQVMsRUFBQTtRQUFBO0FBQ0EsY0FBTUMsa0JBQTJDO1VBQ2hEbEIsUUFBUTtVQUNSQyxlQUFlO1VBQ2ZDLE1BQU07VUFDTmlCLFFBQVE7VUFDUkMsU0FBUztVQUNUQyxTQUFTM0I7VUFDVDRCLE9BQU94QjtRQUNSO0FBQ0EsY0FBTXlCLFlBQUEsTUFBa0IzQyxJQUFJMkIsSUFBSVcsZUFBZTtBQUFBLFlBQUFNLGFBQUFmLDJCQUUxQmMsVUFBVSxPQUFPLEVBQUVBLFNBQUEsR0FBQUU7QUFBQSxZQUFBO0FBQXhDLGVBQUFELFdBQUFiLEVBQUEsR0FBQSxFQUFBYyxTQUFBRCxXQUFBWixFQUFBLEdBQUFDLFFBQXVFO0FBQUEsa0JBQTVEO2NBQUM1QztZQUFJLElBQUF3RCxPQUFBWDtBQUNmMUIscUJBQVNBLFNBQVNyQixNQUFNLElBQUlFO1VBQzdCO1FBQUEsU0FBQThDLEtBQUE7QUFBQVMscUJBQUFSLEVBQUFELEdBQUE7UUFBQSxVQUFBO0FBQUFTLHFCQUFBUCxFQUFBO1FBQUE7QUFFQTlCLGdCQUFRLENBQUMsR0FBRyxvQkFBSXVDLElBQUksQ0FBQyxHQUFHdkMsT0FBTyxHQUFHQyxRQUFRLENBQUMsQ0FBQztBQUM1QyxjQUFNdUMsV0FBb0MsQ0FBQTtBQUMxQyxpQkFBU0MsSUFBWSxHQUFHQSxLQUFLekMsTUFBTXBCLFNBQVMsTUFBTSxJQUFJNkQsS0FBSztBQUMxREQsbUJBQVNBLFNBQVM1RCxNQUFNLElBQUFpQixrQ0FBSSxhQUEyQjtBQUN0RCxrQkFBTTZDLFNBQThCO2NBQ25DN0IsUUFBUTtjQUNSOEIsUUFBUTtjQUNSN0IsZUFBZTtjQUNmQyxNQUFNO2NBQ042QixTQUFTNUMsTUFBTTZDLE1BQU1KLElBQUksS0FBS0EsSUFBSSxLQUFLLEVBQUUsRUFBRUssS0FBSyxHQUFHO2NBQ25EQyxRQUFRO1lBQ1Q7QUFDQSxrQkFBTUMsV0FBQSxNQUFpQnZELElBQUkyQixJQUFJc0IsTUFBTTtBQUFBLGdCQUFBTyxhQUFBM0IsMkJBRVIwQixTQUFTLE9BQU8sRUFBRWhELEtBQUEsR0FBQWtEO0FBQUEsZ0JBQUE7QUFBL0MsbUJBQUFELFdBQUF6QixFQUFBLEdBQUEsRUFBQTBCLFNBQUFELFdBQUF4QixFQUFBLEdBQUFDLFFBQTRGO0FBQUEsc0JBQWpGO2tCQUFDeUI7a0JBQVFDO2dCQUFJLElBQUFGLE9BQUF2QjtBQUV2QixvQkFBSXdCLE9BQU9FLFNBQVMsS0FBSyxLQUFLcEUsV0FBV29FLFNBQVNELElBQUksS0FBSyxDQUFDQSxNQUFNO0FBQ2pFO2dCQUNEO0FBQ0Esb0JBQUlELE9BQU9FLFNBQVMsU0FBUyxHQUFHO0FBQy9CbkQsMkJBQVNBLFNBQVN0QixNQUFNLElBQUl3RTtnQkFDN0I7QUFDQSxvQkFBSUQsT0FBT0UsU0FBUyxPQUFPLEdBQUc7QUFDN0JsRCx5QkFBT0EsT0FBT3ZCLE1BQU0sSUFBSXdFO2dCQUN6QjtBQUNBLG9CQUFJRCxPQUFPRSxTQUFTLFdBQVcsR0FBRztBQUNqQ2pELDZCQUFXQSxXQUFXeEIsTUFBTSxJQUFJd0U7Z0JBQ2pDO2NBQ0Q7WUFBQSxTQUFBeEIsS0FBQTtBQUFBcUIseUJBQUFwQixFQUFBRCxHQUFBO1lBQUEsVUFBQTtBQUFBcUIseUJBQUFuQixFQUFBO1lBQUE7VUFDRCxDQUFBO1FBQ0Q7QUFFQSxpQkFBQXdCLEtBQUEsR0FBQUMsWUFBc0JmLFVBQUFjLEtBQUFDLFVBQUEzRSxRQUFBMEUsTUFBVTtBQUFoQyxnQkFBV0UsVUFBQUQsVUFBQUQsRUFBQTtBQUNWLGdCQUFNRSxRQUFRO1FBQ2Y7QUFDQSxZQUFJdEQsU0FBU3RCLFNBQVN1QixPQUFPdkIsU0FBU3dCLFdBQVd4QixTQUFTLEdBQUc7QUFDNUQsZ0JBQU02RSxXQUFzQixDQUFDekUsVUFBVSxDQUFDO0FBQ3hDLGNBQUlrQixTQUFTdEIsU0FBUyxHQUFHO0FBQ3hCNkUscUJBQVNBLFNBQVM3RSxNQUFNLElBQUlHLGlCQUFpQjNCLFdBQVcsVUFBVSxHQUFHOEMsUUFBUTtVQUM5RTtBQUNBLGNBQUlDLE9BQU92QixTQUFTLEdBQUc7QUFDdEI2RSxxQkFBU0EsU0FBUzdFLE1BQU0sSUFBSUcsaUJBQWlCM0IsV0FBVyxRQUFRLEdBQUcrQyxNQUFNO1VBQzFFO0FBQ0EsY0FBSUMsV0FBV3hCLFNBQVMsR0FBRztBQUMxQjZFLHFCQUFTQSxTQUFTN0UsTUFBTSxJQUFJRyxpQkFBaUIzQixXQUFXLFlBQVksR0FBR2dELFVBQVU7VUFDbEY7QUFDQSxlQUFLdEMsR0FBRzRGLE9BQU9DLEVBQUUsT0FBTyxFQUFFQyxPQUFPSCxRQUFRLEdBQUc7WUFBQ0ksS0FBSztVQUFjLENBQUM7UUFDbEUsT0FBTztBQUNOLGVBQUsvRixHQUFHNEYsT0FBT3RHLFdBQVcsVUFBVSxHQUFHO1lBQ3RDeUcsS0FBSztZQUNMQyxNQUFNO1VBQ1AsQ0FBQztRQUNGO01BQ0QsUUFBUTtBQUNQLGFBQUtoRyxHQUFHNEYsT0FBT3RHLFdBQVcsZUFBZSxHQUFHO1VBQUN5RyxLQUFLO1VBQWdCQyxNQUFNO1FBQU8sQ0FBQztNQUNqRjtJQUNELENBQUE7QUFBQSxXQUFBLFNBbkdNbkUsU0FBQW9FLElBQUE7QUFBQSxhQUFBbkUsS0FBQW9FLE1BQUEsTUFBQUMsU0FBQTtJQUFBO0VBQUEsRUFBQTtBQXFHTixNQUFJLENBQUMxRSxtQkFBbUI7QUFDdkI7RUFDRDtBQUNBb0UsSUFBRXBFLGlCQUFpQixFQUNqQjJFLEtBQUssR0FBRyxFQUNSQyxHQUFHLFNBQVVyRSxXQUFVO0FBQ3ZCLFNBQUtILFFBQVFHLEtBQUs7RUFDbkIsQ0FBQztBQUNIOztBQzFIQTZELEVBQUV4RSxZQUFZOyIsCiAgIm5hbWVzIjogWyJvbmxpbmVhZG1pblNlY3Rpb24iLCAib25saW5lYWRtaW5TZWN0aW9ubGlzdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJBZG1pbnMiLCAiUGF0cm9sbGVycyIsICJTdGV3YXJkcyIsICJOb09ubGluZSIsICJPbmxpbmUiLCAiT25saW5lV2l0aGluMzBNaW51dGVzIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJzYW5pdGl6ZSIsICJzdHJpbmciLCAicmVwbGFjZSIsICJVc2VyTGluayIsICJ1c2VyTmFtZSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaHJlZiIsICJtdyIsICJ1dGlsIiwgImdldFVybCIsICJjb25jYXQiLCAicmVsIiwgInRhcmdldCIsICJzdHlsZSIsICJmb250U2l6ZSIsICJvbmxpbmVDb3VudFRleHQiLCAiR3JvdXBMaXN0IiwgImdyb3VwTmFtZSIsICJ1c2VyTmFtZXMiLCAiY2xhc3MiLCAiU3RyaW5nIiwgImxlbmd0aCIsICJtYXAiLCAidXNlciIsICJncm91cExpc3RFbGVtZW50IiwgImxpc3RUaXRsZSIsICJCTEFDS19MSVNUIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJvbmxpbmVBZG1pbnMiLCAicG9ydGxldElkIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicG9ydGxldExpbmtPbmxpbmUiLCAiYWRkUG9ydGxldExpbmsiLCAiYXBpIiwgImluaXRNd0FwaSIsICJkb0NsaWNrIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAidXNlcnMiLCAidXNlcnNFeHQiLCAic3Rld2FyZHMiLCAiYWRtaW5zIiwgInBhdHJvbGxlcnMiLCAidGltZSIsICJEYXRlIiwgInJjc3RhcnQiLCAidG9JU09TdHJpbmciLCAic2V0TWludXRlcyIsICJnZXRNaW51dGVzIiwgInJjZW5kIiwgInJlY2VudGNoYW5nZXNQYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJyY3Byb3AiLCAicmNzaG93IiwgInJjbGltaXQiLCAicmVjZW50Y2hhbmdlcyIsICJnZXQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJsb2dldmVudHNQYXJhbXMiLCAibGVwcm9wIiwgImxlbGltaXQiLCAibGVzdGFydCIsICJsZWVuZCIsICJsb2dldmVudHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiU2V0IiwgInByb21pc2VzIiwgImkiLCAicGFyYW1zIiwgImZvcm1hdCIsICJ1c3VzZXJzIiwgInNsaWNlIiwgImpvaW4iLCAidXNwcm9wIiwgInJlc3BvbnNlIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImdyb3VwcyIsICJuYW1lIiwgImluY2x1ZGVzIiwgIl9pIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgImVsZW1lbnRzIiwgIm5vdGlmeSIsICIkIiwgImFwcGVuZCIsICJ0YWciLCAidHlwZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZmluZCIsICJvbiJdCn0K
