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
var doClick = /* @__PURE__ */ function() {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb21wb25lbnRzL2dyb3VwTGlzdC50c3giLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvb3B0aW9ucy5qc29uIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9hcGkudHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2RvQ2xpY2sudHMiLCAic3JjL09ubGluZUFkbWlucy9PbmxpbmVBZG1pbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvT25saW5lQWRtaW5zL21vZHVsZXMvY29tcG9uZW50cy9PbmxpbmVBZG1pbnMubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBzZWN0aW9uID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19zZWN0aW9uX1dTOUlHYVwiO1xuZXhwb3J0IGNvbnN0IHNlY3Rpb25MaXN0ID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19zZWN0aW9uTGlzdF9XUzlJR2FcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInNlY3Rpb25cIjogc2VjdGlvbixcbiAgXCJzZWN0aW9uTGlzdFwiOiBzZWN0aW9uTGlzdFxufTtcbiAgICAgICIsICJpbXBvcnQge3NlY3Rpb24sIHNlY3Rpb25MaXN0fSBmcm9tICcuL09ubGluZUFkbWlucy5tb2R1bGUubGVzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBzYW5pdGl6ZSA9IChzdHJpbmc6IHN0cmluZykgPT5cblx0c3RyaW5nLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZsdDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cbmludGVyZmFjZSBVc2VyTGlua1Byb3BzIHtcblx0dXNlck5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEdyb3VwTGlzdFByb3BzIHtcblx0Z3JvdXBOYW1lOiBzdHJpbmc7XG5cdHVzZXJOYW1lczogc3RyaW5nW107XG59XG5cbmNvbnN0IFVzZXJMaW5rID0gKHt1c2VyTmFtZX06IFVzZXJMaW5rUHJvcHMpID0+IChcblx0PGxpPlxuXHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKGBVc2VyOiR7c2FuaXRpemUodXNlck5hbWUpfWApfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHR7c2FuaXRpemUodXNlck5hbWUpfVxuXHRcdDwvYT5cblx0XHQmbmJzcDtcblx0XHQ8c3BhbiBzdHlsZT17e2ZvbnRTaXplOiAnOTAlJ319PlxuXHRcdFx077yIXG5cdFx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcl90YWxrOiR7c2FuaXRpemUodXNlck5hbWUpfWApfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdOeVmeiogFxuXHRcdFx0PC9hPlxuXHRcdFx077yJXG5cdFx0PC9zcGFuPlxuXHQ8L2xpPlxuKTtcblxuY29uc3Qgb25saW5lQ291bnRUZXh0OiBzdHJpbmcgPSBnZXRNZXNzYWdlKCcgKCQxIG9ubGluZSk6Jyk7XG5cbmNvbnN0IEdyb3VwTGlzdCA9ICh7Z3JvdXBOYW1lLCB1c2VyTmFtZXN9OiBHcm91cExpc3RQcm9wcykgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17c2VjdGlvbn0+XG5cdFx0PHNwYW4+e2dyb3VwTmFtZX08L3NwYW4+XG5cdFx0PHNwYW4+e29ubGluZUNvdW50VGV4dC5yZXBsYWNlKCckMScsIFN0cmluZyh1c2VyTmFtZXMubGVuZ3RoKSl9PC9zcGFuPlxuXHRcdDx1bCBjbGFzc05hbWU9e3NlY3Rpb25MaXN0fT5cblx0XHRcdHt1c2VyTmFtZXMubWFwKCh1c2VyKSA9PiAoXG5cdFx0XHRcdDxVc2VyTGluayBrZXk9e3VzZXJ9IHVzZXJOYW1lPXt1c2VyfSAvPlxuXHRcdFx0KSl9XG5cdFx0PC91bD5cblx0PC9kaXY+XG4pO1xuXG5jb25zdCBncm91cExpc3RFbGVtZW50ID0gKGdyb3VwTmFtZTogc3RyaW5nLCB1c2VyTmFtZXM6IHN0cmluZ1tdKSA9PiAoXG5cdDxHcm91cExpc3QgZ3JvdXBOYW1lPXtncm91cE5hbWV9IHVzZXJOYW1lcz17dXNlck5hbWVzfSAvPlxuKTtcblxuY29uc3QgbGlzdFRpdGxlID0gKCkgPT4gPHA+e2dldE1lc3NhZ2UoJ09ubGluZVdpdGhpbjMwTWludXRlcycpfTwvcD47XG5cbmV4cG9ydCB7Z3JvdXBMaXN0RWxlbWVudCwgbGlzdFRpdGxlfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0JyAoJDEgb25saW5lKTonOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJDEgb25saW5lKTonLFxuXHRcdFx0amE6ICfvvIgkMeS6uuOCquODs+ODqeOCpOODs+S4re+8ie+8micsXG5cdFx0XHQnemgtaGFucyc6ICfvvIgkMeS4quWcqOe6v++8ie+8micsXG5cdFx0XHQnemgtaGFudCc6ICfvvIgkMeWAi+WcqOe3mu+8ie+8micsXG5cdFx0fSksXG5cdFx0QWRtaW5zOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FkbWlucycsXG5cdFx0XHRqYTogJ+euoeeQhuiAhScsXG5cdFx0XHQnemgtaGFucyc6ICfnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHRQYXRyb2xsZXJzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbGxlcnMnLFxuXHRcdFx0amE6ICflt6Hlm57ogIUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0U3Rld2FyZHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZHMnLFxuXHRcdFx0amE6ICfjgrnjg4Hjg6Xjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn6KOB5Yaz5aeU5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ijgeaxuuWnlOWToScsXG5cdFx0fSksXG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3InLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0Tm9PbmxpbmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZXJlIGFyZSBubyBoaWdoIHByaXZpbGVnZSB1c2VycyBvbmxpbmUnLFxuXHRcdFx0amE6ICfnj77lnKjjgIHpq5jmqKnpmZDliKnnlKjogIXjga/jgqrjg7Pjg6njgqTjg7PjgavjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWhhbnMnOiAn55uu5YmN5rKh5pyJ56uZ5Yqh5Lq65ZGY5Zyo57q/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ebruWJjeaykuacieermeWLmeS6uuWToeWcqOe3micsXG5cdFx0fSksXG5cdFx0T25saW5lOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ09ubGluZSBhZG1pbnMnLFxuXHRcdFx0amE6ICfjgqrjg7Pjg6njgqTjg7Pjga7pq5jmqKnpmZDliKnnlKjogIUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Zyo57q/56uZ5Yqh5Lq65ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3muS4iuermeWLmeS6uuWToScsXG5cdFx0fSksXG5cdFx0T25saW5lV2l0aGluMzBNaW51dGVzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0hpZ2ggcHJpdmlsZWdlIHVzZXJzIG9ubGluZSB3aXRoaW4gMzAgbWludXRlczonLFxuXHRcdFx0amE6ICczMOWIhuS7peWGheOBq+OCquODs+ODqeOCpOODs+OBp+mrmOaoqemZkOWIqeeUqOiAhe+8micsXG5cdFx0XHQnemgtaGFucyc6ICfkuIvpnaLmmK/mnIDov5EzMOWIhumSn+WGheWcqOe6v+eahOermeWKoeS6uuWRmO+8micsXG5cdFx0XHQnemgtaGFudCc6ICfkuIvpnaLmmK/mnIDov5EzMOWIhumQmOWFp+eahOe3muS4iuermeWLmeS6uuWToe+8micsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IEJMQUNLX0xJU1Q6IHN0cmluZ1tdID0gWyfmu6XnlKjov4fmu6TlmagnXTtcblxuZXhwb3J0IHtCTEFDS19MSVNUfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBPbmxpbmVBZG1pbnMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2dyb3VwTGlzdEVsZW1lbnQsIGxpc3RUaXRsZX0gZnJvbSAnLi9jb21wb25lbnRzL2dyb3VwTGlzdCc7XG5pbXBvcnQge0JMQUNLX0xJU1R9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgZG9DbGljayA9IGFzeW5jIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQ+KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0bGV0IHVzZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCB1c2Vyc0V4dDogc3RyaW5nW10gPSBbXTtcblx0Y29uc3Qgc3Rld2FyZHM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IGFkbWluczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3QgcGF0cm9sbGVyczogc3RyaW5nW10gPSBbXTtcblxuXHRjb25zdCB0aW1lOiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgcmNzdGFydDogc3RyaW5nID0gdGltZS50b0lTT1N0cmluZygpO1xuXHR0aW1lLnNldE1pbnV0ZXModGltZS5nZXRNaW51dGVzKCkgLSAzMCk7IC8vIOacgOi/keabtOaUuTMw5YiG6ZKf5YaF55qE57yW6L6R55So5oi3XG5cdGNvbnN0IHJjZW5kOiBzdHJpbmcgPSB0aW1lLnRvSVNPU3RyaW5nKCk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCByZWNlbnRjaGFuZ2VzUGFyYW1zOiBBcGlRdWVyeVJlY2VudENoYW5nZXNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRsaXN0OiAncmVjZW50Y2hhbmdlcycsXG5cdFx0XHRyY3Byb3A6ICd1c2VyJyxcblx0XHRcdHJjc2hvdzogWychYm90JywgJyFhbm9uJ10sXG5cdFx0XHRyY2xpbWl0OiA1MDAsXG5cdFx0XHRyY3N0YXJ0LFxuXHRcdFx0cmNlbmQsXG5cdFx0fTtcblx0XHRjb25zdCByZWNlbnRjaGFuZ2VzID0gYXdhaXQgYXBpLmdldChyZWNlbnRjaGFuZ2VzUGFyYW1zKTtcblxuXHRcdGZvciAoY29uc3Qge3VzZXJ9IG9mIHJlY2VudGNoYW5nZXNbJ3F1ZXJ5J10ucmVjZW50Y2hhbmdlcyBhcyB7dXNlcjogc3RyaW5nfVtdKSB7XG5cdFx0XHR1c2Vyc1t1c2Vycy5sZW5ndGhdID0gdXNlcjsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0fVxuXHRcdGNvbnN0IGxvZ2V2ZW50c1BhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHRcdGxlcHJvcDogJ3VzZXInLFxuXHRcdFx0bGVsaW1pdDogNTAwLFxuXHRcdFx0bGVzdGFydDogcmNzdGFydCxcblx0XHRcdGxlZW5kOiByY2VuZCxcblx0XHR9O1xuXHRcdGNvbnN0IGxvZ2V2ZW50cyA9IGF3YWl0IGFwaS5nZXQobG9nZXZlbnRzUGFyYW1zKTtcblxuXHRcdGZvciAoY29uc3Qge3VzZXJ9IG9mIGxvZ2V2ZW50c1sncXVlcnknXS5sb2dldmVudHMgYXMge3VzZXI6IHN0cmluZ31bXSkge1xuXHRcdFx0dXNlcnNFeHRbdXNlcnNFeHQubGVuZ3RoXSA9IHVzZXI7XG5cdFx0fVxuXG5cdFx0dXNlcnMgPSBbLi4ubmV3IFNldChbLi4udXNlcnMsIC4uLnVzZXJzRXh0XSldOyAvLyDnlKjmiLflkI3liJfooajlkIjlubbjgIHljrvph43jgIHliIblibJcblxuXHRcdGNvbnN0IHByb21pc2VzOiAoKCkgPT4gUHJvbWlzZTx2b2lkPilbXSA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8ICh1c2Vycy5sZW5ndGggKyA1MCkgLyA1MDsgaSsrKSB7XG5cdFx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdFx0XHRcdHVzdXNlcnM6IHVzZXJzLnNsaWNlKGkgKiA1MCwgKGkgKyAxKSAqIDUwKS5qb2luKCd8JyksXG5cdFx0XHRcdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0XHRcdFx0fTtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRcdFx0Zm9yIChjb25zdCB7Z3JvdXBzLCBuYW1lfSBvZiByZXNwb25zZVsncXVlcnknXS51c2VycyBhcyB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0Ly8g5om+5Yiw566h55CG5Lq65ZGY77yM5Y676Zmk5py65Zmo5Lq677yM5raI6ZmkbmFtZeeahOepuuWAvFxuXHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2JvdCcpIHx8IEJMQUNLX0xJU1QuaW5jbHVkZXMobmFtZSkgfHwgIW5hbWUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzdGV3YXJkJykpIHtcblx0XHRcdFx0XHRcdHN0ZXdhcmRzW3N0ZXdhcmRzLmxlbmd0aF0gPSBuYW1lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzeXNvcCcpKSB7XG5cdFx0XHRcdFx0XHRhZG1pbnNbYWRtaW5zLmxlbmd0aF0gPSBuYW1lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdwYXRyb2xsZXInKSkge1xuXHRcdFx0XHRcdFx0cGF0cm9sbGVyc1twYXRyb2xsZXJzLmxlbmd0aF0gPSBuYW1lO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0Ly8g5p+l6K+i55So5oi35p2D6ZmQXG5cdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHRhd2FpdCBwcm9taXNlKCk7XG5cdFx0fVxuXG5cdFx0aWYgKHN0ZXdhcmRzLmxlbmd0aCArIGFkbWlucy5sZW5ndGggKyBwYXRyb2xsZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IGVsZW1lbnRzOiBFbGVtZW50W10gPSBbbGlzdFRpdGxlKCldO1xuXG5cdFx0XHRpZiAoc3Rld2FyZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRlbGVtZW50c1tlbGVtZW50cy5sZW5ndGhdID0gZ3JvdXBMaXN0RWxlbWVudChnZXRNZXNzYWdlKCdTdGV3YXJkcycpLCBzdGV3YXJkcyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWRtaW5zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0ZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoXSA9IGdyb3VwTGlzdEVsZW1lbnQoZ2V0TWVzc2FnZSgnQWRtaW5zJyksIGFkbWlucyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAocGF0cm9sbGVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aF0gPSBncm91cExpc3RFbGVtZW50KGdldE1lc3NhZ2UoJ1BhdHJvbGxlcnMnKSwgcGF0cm9sbGVycyk7XG5cdFx0XHR9XG5cdFx0XHR2b2lkIG13Lm5vdGlmeSgkKCc8ZGl2PicpLmFwcGVuZChlbGVtZW50cyksIHt0YWc6ICdvbmxpbmVBZG1pbnMnfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ05vT25saW5lJyksIHtcblx0XHRcdFx0dGFnOiAnb25saW5lQWRtaW5zJyxcblx0XHRcdFx0dHlwZTogJ3dhcm4nLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksIHt0YWc6ICdvbmxpbmVBZG1pbnMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZG9DbGlja307XG4iLCAiaW1wb3J0IHtkb0NsaWNrfSBmcm9tICcuL21vZHVsZXMvZG9DbGljayc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcblxuY29uc3QgYWRkUG9ydGxldExpbmsgPSAoKTogdm9pZCA9PiB7XG5cdC8vIENyZWF0ZSBwb3J0bGV0IGxpbmtcblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIGdldE1lc3NhZ2UoJ09ubGluZScpLCAndC1vbmxpbmVhZG1pbicpO1xuXHRpZiAoIWVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBCaW5kIGNsaWNrIGxpc3RlbmVyXG5cdCQoZWxlbWVudClcblx0XHQuZmluZCgnYScpXG5cdFx0Lm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0dm9pZCBkb0NsaWNrKGV2ZW50KTtcblx0XHR9KTtcbn07XG5cbiQoYWRkUG9ydGxldExpbmspO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxVQUFVO0FBQ2hCLElBQU1DLGNBQWM7O0FDRDNCLElBQUFDLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRGxCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLGtCQUFBLEdBQWlCRCxrQkFBQUUsVUFBUztNQUN6QkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFNBQUEsR0FBUUwsa0JBQUFFLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxhQUFBLEdBQVlOLGtCQUFBRSxVQUFTO01BQ3BCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsV0FBQSxHQUFVUCxrQkFBQUUsVUFBUztNQUNsQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsa0JBQUEsR0FBaUJKLGtCQUFBRSxVQUFTO01BQ3pCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREksV0FBQSxHQUFVUixrQkFBQUUsVUFBUztNQUNsQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RLLFNBQUEsR0FBUVQsa0JBQUFFLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNETSx3QkFBQSxHQUF1QlYsa0JBQUFFLFVBQVM7TUFDL0JDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNTyxlQUFlVixnQkFBZ0I7QUFFckMsSUFBTVcsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUR2REEsSUFBTUMsV0FBWUMsWUFDakJBLE9BQU9DLFFBQVEsTUFBTSxPQUFPLEVBQUVBLFFBQVEsTUFBTSxNQUFNLEVBQUVBLFFBQVEsTUFBTSxNQUFNLEVBQUVBLFFBQVEsTUFBTSxRQUFRO0FBV2pHLElBQU1DLFdBQVdBLENBQUM7RUFBQ0M7QUFBUSxNQUMxQnJCLG1DQUFBc0IsUUFBQUMsY0FBQyxNQUFBLE1BQ0F2QixtQ0FBQXNCLFFBQUFDLGNBQUMsS0FBQTtFQUFFQyxNQUFNQyxHQUFHQyxLQUFLQyxPQUFBLFFBQUFDLE9BQWVYLFNBQVNJLFFBQVEsQ0FBQyxDQUFFO0VBQUdRLEtBQUk7RUFBc0JDLFFBQU87QUFBQSxHQUN0RmIsU0FBU0ksUUFBUSxDQUNuQixHQUFJLEtBRUpyQixtQ0FBQXNCLFFBQUFDLGNBQUMsUUFBQTtFQUFLUSxPQUFPO0lBQUNDLFVBQVU7RUFBSztBQUFBLEdBQUcsS0FFL0JoQyxtQ0FBQXNCLFFBQUFDLGNBQUMsS0FBQTtFQUFFQyxNQUFNQyxHQUFHQyxLQUFLQyxPQUFBLGFBQUFDLE9BQW9CWCxTQUFTSSxRQUFRLENBQUMsQ0FBRTtFQUFHUSxLQUFJO0VBQXNCQyxRQUFPO0FBQUEsR0FBUyxJQUV0RyxHQUFJLEdBRUwsQ0FDRDtBQUdELElBQU1HLGtCQUEwQmxCLFdBQVcsZUFBZTtBQUUxRCxJQUFNbUIsWUFBWUEsQ0FBQztFQUFDQztFQUFXQztBQUFTLE1BQ3ZDcEMsbUNBQUFzQixRQUFBQyxjQUFDLE9BQUE7RUFBSWMsV0FBV3ZDO0FBQUEsR0FDZkUsbUNBQUFzQixRQUFBQyxjQUFDLFFBQUEsTUFBTVksU0FBVSxHQUNqQm5DLG1DQUFBc0IsUUFBQUMsY0FBQyxRQUFBLE1BQU1VLGdCQUFnQmQsUUFBUSxNQUFNbUIsT0FBT0YsVUFBVUcsTUFBTSxDQUFDLENBQUUsR0FDL0R2QyxtQ0FBQXNCLFFBQUFDLGNBQUMsTUFBQTtFQUFHYyxXQUFXdEM7QUFBQSxHQUNicUMsVUFBVUksSUFBS0MsVUFDZnpDLG1DQUFBc0IsUUFBQUMsY0FBQ0gsVUFBQTtFQUFTSixLQUFLeUI7RUFBTXBCLFVBQVVvQjtBQUFBLENBQU0sQ0FDckMsQ0FDRixDQUNEO0FBR0QsSUFBTUMsbUJBQW1CQSxDQUFDUCxXQUFtQkMsY0FDNUNwQyxtQ0FBQXNCLFFBQUFDLGNBQUNXLFdBQUE7RUFBVUM7RUFBc0JDO0FBQUEsQ0FBc0I7QUFHeEQsSUFBTU8sWUFBWUEsTUFBTTNDLG1DQUFBc0IsUUFBQUMsY0FBQyxLQUFBLE1BQUdSLFdBQVcsdUJBQXVCLENBQUU7O0FFbERoRSxJQUFNNkIsYUFBdUIsQ0FBQyxPQUFPOztBQ0NwQyxJQUFBQyxVQUFXOztBQ0FaLElBQUFDLHFCQUF3QjVDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTTZDLE9BQUEsR0FBY0QsbUJBQUFFLFdBQUEsZ0JBQUFwQixPQUFrQ2lCLE9BQU8sQ0FBRTs7QUNFL0QsSUFBTUksVUFBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFVLFdBQU9DLE9BQStEO0FBQ3JGQSxVQUFNQyxlQUFlO0FBRXJCLFFBQUlDLFFBQWtCLENBQUE7QUFDdEIsVUFBTUMsV0FBcUIsQ0FBQTtBQUMzQixVQUFNQyxXQUFxQixDQUFBO0FBQzNCLFVBQU1DLFNBQW1CLENBQUE7QUFDekIsVUFBTUMsYUFBdUIsQ0FBQTtBQUU3QixVQUFNQyxPQUFhLG9CQUFJQyxLQUFLO0FBQzVCLFVBQU1DLFVBQWtCRixLQUFLRyxZQUFZO0FBQ3pDSCxTQUFLSSxXQUFXSixLQUFLSyxXQUFXLElBQUksRUFBRTtBQUN0QyxVQUFNQyxRQUFnQk4sS0FBS0csWUFBWTtBQUV2QyxRQUFJO0FBQ0gsWUFBTUksc0JBQW1EO1FBQ3hEQyxRQUFRO1FBQ1JDLGVBQWU7UUFDZkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFFBQVEsQ0FBQyxRQUFRLE9BQU87UUFDeEJDLFNBQVM7UUFDVFg7UUFDQUk7TUFDRDtBQUNBLFlBQU1RLGdCQUFBLE1BQXNCMUIsSUFBSTJCLElBQUlSLG1CQUFtQjtBQUFBLFVBQUFTLGFBQUFDLDJCQUVsQ0gsY0FBYyxPQUFPLEVBQUVBLGFBQUEsR0FBQUk7QUFBQSxVQUFBO0FBQTVDLGFBQUFGLFdBQUFHLEVBQUEsR0FBQSxFQUFBRCxTQUFBRixXQUFBSSxFQUFBLEdBQUFDLFFBQStFO0FBQUEsZ0JBQXBFO1lBQUN2QztVQUFJLElBQUFvQyxPQUFBSTtBQUNmM0IsZ0JBQU1BLE1BQU1mLE1BQU0sSUFBSUU7UUFDdkI7TUFBQSxTQUFBeUMsS0FBQTtBQUFBUCxtQkFBQVEsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQVAsbUJBQUFTLEVBQUE7TUFBQTtBQUNBLFlBQU1DLGtCQUEyQztRQUNoRGxCLFFBQVE7UUFDUkMsZUFBZTtRQUNmQyxNQUFNO1FBQ05pQixRQUFRO1FBQ1JDLFNBQVM7UUFDVEMsU0FBUzNCO1FBQ1Q0QixPQUFPeEI7TUFDUjtBQUNBLFlBQU15QixZQUFBLE1BQWtCM0MsSUFBSTJCLElBQUlXLGVBQWU7QUFBQSxVQUFBTSxhQUFBZiwyQkFFMUJjLFVBQVUsT0FBTyxFQUFFQSxTQUFBLEdBQUFFO0FBQUEsVUFBQTtBQUF4QyxhQUFBRCxXQUFBYixFQUFBLEdBQUEsRUFBQWMsU0FBQUQsV0FBQVosRUFBQSxHQUFBQyxRQUF1RTtBQUFBLGdCQUE1RDtZQUFDdkM7VUFBSSxJQUFBbUQsT0FBQVg7QUFDZjFCLG1CQUFTQSxTQUFTaEIsTUFBTSxJQUFJRTtRQUM3QjtNQUFBLFNBQUF5QyxLQUFBO0FBQUFTLG1CQUFBUixFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBUyxtQkFBQVAsRUFBQTtNQUFBO0FBRUE5QixjQUFRLENBQUMsR0FBRyxvQkFBSXVDLElBQUksQ0FBQyxHQUFHdkMsT0FBTyxHQUFHQyxRQUFRLENBQUMsQ0FBQztBQUU1QyxZQUFNdUMsV0FBb0MsQ0FBQTtBQUUxQyxlQUFTQyxJQUFZLEdBQUdBLEtBQUt6QyxNQUFNZixTQUFTLE1BQU0sSUFBSXdELEtBQUs7QUFDMURELGlCQUFTQSxTQUFTdkQsTUFBTSxJQUFBWSxrQ0FBSSxhQUEyQjtBQUN0RCxnQkFBTTZDLFNBQThCO1lBQ25DN0IsUUFBUTtZQUNSOEIsUUFBUTtZQUNSN0IsZUFBZTtZQUNmQyxNQUFNO1lBQ042QixTQUFTNUMsTUFBTTZDLE1BQU1KLElBQUksS0FBS0EsSUFBSSxLQUFLLEVBQUUsRUFBRUssS0FBSyxHQUFHO1lBQ25EQyxRQUFRO1VBQ1Q7QUFDQSxnQkFBTUMsV0FBQSxNQUFpQnZELElBQUkyQixJQUFJc0IsTUFBTTtBQUFBLGNBQUFPLGFBQUEzQiwyQkFFUjBCLFNBQVMsT0FBTyxFQUFFaEQsS0FBQSxHQUFBa0Q7QUFBQSxjQUFBO0FBQS9DLGlCQUFBRCxXQUFBekIsRUFBQSxHQUFBLEVBQUEwQixTQUFBRCxXQUFBeEIsRUFBQSxHQUFBQyxRQUE0RjtBQUFBLG9CQUFqRjtnQkFBQ3lCO2dCQUFRQztjQUFJLElBQUFGLE9BQUF2QjtBQUV2QixrQkFBSXdCLE9BQU9FLFNBQVMsS0FBSyxLQUFLL0QsV0FBVytELFNBQVNELElBQUksS0FBSyxDQUFDQSxNQUFNO0FBQ2pFO2NBQ0Q7QUFDQSxrQkFBSUQsT0FBT0UsU0FBUyxTQUFTLEdBQUc7QUFDL0JuRCx5QkFBU0EsU0FBU2pCLE1BQU0sSUFBSW1FO2NBQzdCO0FBQ0Esa0JBQUlELE9BQU9FLFNBQVMsT0FBTyxHQUFHO0FBQzdCbEQsdUJBQU9BLE9BQU9sQixNQUFNLElBQUltRTtjQUN6QjtBQUNBLGtCQUFJRCxPQUFPRSxTQUFTLFdBQVcsR0FBRztBQUNqQ2pELDJCQUFXQSxXQUFXbkIsTUFBTSxJQUFJbUU7Y0FDakM7WUFDRDtVQUFBLFNBQUF4QixLQUFBO0FBQUFxQix1QkFBQXBCLEVBQUFELEdBQUE7VUFBQSxVQUFBO0FBQUFxQix1QkFBQW5CLEVBQUE7VUFBQTtRQUNELENBQUE7TUFDRDtBQUVBLGVBQUF3QixLQUFBLEdBQUFDLFlBQXNCZixVQUFBYyxLQUFBQyxVQUFBdEUsUUFBQXFFLE1BQVU7QUFBaEMsY0FBV0UsVUFBQUQsVUFBQUQsRUFBQTtBQUNWLGNBQU1FLFFBQVE7TUFDZjtBQUVBLFVBQUl0RCxTQUFTakIsU0FBU2tCLE9BQU9sQixTQUFTbUIsV0FBV25CLFNBQVMsR0FBRztBQUM1RCxjQUFNd0UsV0FBc0IsQ0FBQ3BFLFVBQVUsQ0FBQztBQUV4QyxZQUFJYSxTQUFTakIsU0FBUyxHQUFHO0FBQ3hCd0UsbUJBQVNBLFNBQVN4RSxNQUFNLElBQUlHLGlCQUFpQjNCLFdBQVcsVUFBVSxHQUFHeUMsUUFBUTtRQUM5RTtBQUNBLFlBQUlDLE9BQU9sQixTQUFTLEdBQUc7QUFDdEJ3RSxtQkFBU0EsU0FBU3hFLE1BQU0sSUFBSUcsaUJBQWlCM0IsV0FBVyxRQUFRLEdBQUcwQyxNQUFNO1FBQzFFO0FBQ0EsWUFBSUMsV0FBV25CLFNBQVMsR0FBRztBQUMxQndFLG1CQUFTQSxTQUFTeEUsTUFBTSxJQUFJRyxpQkFBaUIzQixXQUFXLFlBQVksR0FBRzJDLFVBQVU7UUFDbEY7QUFDQSxhQUFLakMsR0FBR3VGLE9BQU9DLEVBQUUsT0FBTyxFQUFFQyxPQUFPSCxRQUFRLEdBQUc7VUFBQ0ksS0FBSztRQUFjLENBQUM7TUFDbEUsT0FBTztBQUNOLGFBQUsxRixHQUFHdUYsT0FBT2pHLFdBQVcsVUFBVSxHQUFHO1VBQ3RDb0csS0FBSztVQUNMQyxNQUFNO1FBQ1AsQ0FBQztNQUNGO0lBQ0QsUUFBUTtBQUNQLFdBQUszRixHQUFHdUYsT0FBT2pHLFdBQVcsZUFBZSxHQUFHO1FBQUNvRyxLQUFLO1FBQWdCQyxNQUFNO01BQU8sQ0FBQztJQUNqRjtFQUNELENBQUE7QUFBQSxTQUFBLFNBekdNbkUsU0FBQW9FLElBQUE7QUFBQSxXQUFBbkUsS0FBQW9FLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNGTixJQUFNQyxpQkFBaUJBLE1BQVk7QUFFbEMsUUFBTUMsWUFBbUNDLFNBQVNDLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsUUFBTUMsVUFBZ0NuRyxHQUFHQyxLQUFLOEYsZUFBZUMsV0FBVyxLQUFLMUcsV0FBVyxRQUFRLEdBQUcsZUFBZTtBQUNsSCxNQUFJLENBQUM2RyxTQUFTO0FBQ2I7RUFDRDtBQUdBWCxJQUFFVyxPQUFPLEVBQ1BDLEtBQUssR0FBRyxFQUNSQyxHQUFHLFNBQVUxRSxXQUFVO0FBQ3ZCLFNBQUtILFFBQVFHLEtBQUs7RUFDbkIsQ0FBQztBQUNIO0FBRUE2RCxFQUFFTyxjQUFjOyIsCiAgIm5hbWVzIjogWyJzZWN0aW9uIiwgInNlY3Rpb25MaXN0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkFkbWlucyIsICJQYXRyb2xsZXJzIiwgIlN0ZXdhcmRzIiwgIk5vT25saW5lIiwgIk9ubGluZSIsICJPbmxpbmVXaXRoaW4zME1pbnV0ZXMiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInNhbml0aXplIiwgInN0cmluZyIsICJyZXBsYWNlIiwgIlVzZXJMaW5rIiwgInVzZXJOYW1lIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJocmVmIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImNvbmNhdCIsICJyZWwiLCAidGFyZ2V0IiwgInN0eWxlIiwgImZvbnRTaXplIiwgIm9ubGluZUNvdW50VGV4dCIsICJHcm91cExpc3QiLCAiZ3JvdXBOYW1lIiwgInVzZXJOYW1lcyIsICJjbGFzc05hbWUiLCAiU3RyaW5nIiwgImxlbmd0aCIsICJtYXAiLCAidXNlciIsICJncm91cExpc3RFbGVtZW50IiwgImxpc3RUaXRsZSIsICJCTEFDS19MSVNUIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiZG9DbGljayIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgInVzZXJzIiwgInVzZXJzRXh0IiwgInN0ZXdhcmRzIiwgImFkbWlucyIsICJwYXRyb2xsZXJzIiwgInRpbWUiLCAiRGF0ZSIsICJyY3N0YXJ0IiwgInRvSVNPU3RyaW5nIiwgInNldE1pbnV0ZXMiLCAiZ2V0TWludXRlcyIsICJyY2VuZCIsICJyZWNlbnRjaGFuZ2VzUGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAicmNwcm9wIiwgInJjc2hvdyIsICJyY2xpbWl0IiwgInJlY2VudGNoYW5nZXMiLCAiZ2V0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiLCAibG9nZXZlbnRzUGFyYW1zIiwgImxlcHJvcCIsICJsZWxpbWl0IiwgImxlc3RhcnQiLCAibGVlbmQiLCAibG9nZXZlbnRzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIlNldCIsICJwcm9taXNlcyIsICJpIiwgInBhcmFtcyIsICJmb3JtYXQiLCAidXN1c2VycyIsICJzbGljZSIsICJqb2luIiwgInVzcHJvcCIsICJyZXNwb25zZSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJncm91cHMiLCAibmFtZSIsICJpbmNsdWRlcyIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJlbGVtZW50cyIsICJub3RpZnkiLCAiJCIsICJhcHBlbmQiLCAidGFnIiwgInR5cGUiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImFkZFBvcnRsZXRMaW5rIiwgInBvcnRsZXRJZCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVsZW1lbnQiLCAiZmluZCIsICJvbiJdCn0K
