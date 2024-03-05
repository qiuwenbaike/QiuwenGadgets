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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb21wb25lbnRzL2dyb3VwTGlzdC50c3giLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvb3B0aW9ucy5qc29uIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9hcGkudHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2RvQ2xpY2sudHMiLCAic3JjL09ubGluZUFkbWlucy9PbmxpbmVBZG1pbnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvT25saW5lQWRtaW5zL21vZHVsZXMvY29tcG9uZW50cy9PbmxpbmVBZG1pbnMubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBvbmxpbmVhZG1pblNlY3Rpb24gPSBcIk9ubGluZUFkbWlucy1tb2R1bGVfX29ubGluZWFkbWluU2VjdGlvbl9XUzlJR2FcIjtcbmV4cG9ydCBjb25zdCBvbmxpbmVhZG1pblNlY3Rpb25saXN0ID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19vbmxpbmVhZG1pblNlY3Rpb25saXN0X1dTOUlHYVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwib25saW5lYWRtaW5TZWN0aW9uXCI6IG9ubGluZWFkbWluU2VjdGlvbixcbiAgXCJvbmxpbmVhZG1pblNlY3Rpb25saXN0XCI6IG9ubGluZWFkbWluU2VjdGlvbmxpc3Rcbn07XG4gICAgICAiLCAiaW1wb3J0IHtvbmxpbmVhZG1pblNlY3Rpb24sIG9ubGluZWFkbWluU2VjdGlvbmxpc3R9IGZyb20gJy4vT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IHNhbml0aXplID0gKHN0cmluZzogc3RyaW5nKSA9PlxuXHRzdHJpbmcucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmx0OycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcblxuaW50ZXJmYWNlIFVzZXJMaW5rUHJvcHMge1xuXHR1c2VyTmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgR3JvdXBMaXN0UHJvcHMge1xuXHRncm91cE5hbWU6IHN0cmluZztcblx0dXNlck5hbWVzOiBzdHJpbmdbXTtcbn1cblxuY29uc3QgVXNlckxpbmsgPSAoe3VzZXJOYW1lfTogVXNlckxpbmtQcm9wcykgPT4gKFxuXHQ8bGk+XG5cdFx0PGEgaHJlZj17bXcudXRpbC5nZXRVcmwoYFVzZXI6JHtzYW5pdGl6ZSh1c2VyTmFtZSl9YCl9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdHtzYW5pdGl6ZSh1c2VyTmFtZSl9XG5cdFx0PC9hPlxuXHRcdCZuYnNwO1xuXHRcdDxzcGFuIHN0eWxlPXt7Zm9udFNpemU6ICc5MCUnfX0+XG5cdFx0XHTvvIhcblx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKGBVc2VyX3RhbGs6JHtzYW5pdGl6ZSh1c2VyTmFtZSl9YCl9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx055WZ6KiAXG5cdFx0XHQ8L2E+XG5cdFx0XHTvvIlcblx0XHQ8L3NwYW4+XG5cdDwvbGk+XG4pO1xuXG5jb25zdCBvbmxpbmVDb3VudFRleHQ6IHN0cmluZyA9IGdldE1lc3NhZ2UoJyAoJDEgb25saW5lKTonKTtcblxuY29uc3QgR3JvdXBMaXN0ID0gKHtncm91cE5hbWUsIHVzZXJOYW1lc306IEdyb3VwTGlzdFByb3BzKSA9PiAoXG5cdDxkaXYgY2xhc3M9e29ubGluZWFkbWluU2VjdGlvbn0+XG5cdFx0PHNwYW4+e2dyb3VwTmFtZX08L3NwYW4+XG5cdFx0PHNwYW4+e29ubGluZUNvdW50VGV4dC5yZXBsYWNlKCckMScsIFN0cmluZyh1c2VyTmFtZXMubGVuZ3RoKSl9PC9zcGFuPlxuXHRcdDx1bCBjbGFzcz17b25saW5lYWRtaW5TZWN0aW9ubGlzdH0+XG5cdFx0XHR7dXNlck5hbWVzLm1hcCgodXNlcikgPT4gKFxuXHRcdFx0XHQ8VXNlckxpbmsga2V5PXt1c2VyfSB1c2VyTmFtZT17dXNlcn0gLz5cblx0XHRcdCkpfVxuXHRcdDwvdWw+XG5cdDwvZGl2PlxuKTtcblxuY29uc3QgZ3JvdXBMaXN0RWxlbWVudCA9IChncm91cE5hbWU6IHN0cmluZywgdXNlck5hbWVzOiBzdHJpbmdbXSkgPT4gKFxuXHQ8R3JvdXBMaXN0IGdyb3VwTmFtZT17Z3JvdXBOYW1lfSB1c2VyTmFtZXM9e3VzZXJOYW1lc30gLz5cbik7XG5cbmNvbnN0IGxpc3RUaXRsZSA9ICgpID0+IDxwPntnZXRNZXNzYWdlKCdPbmxpbmVXaXRoaW4zME1pbnV0ZXMnKX08L3A+O1xuXG5leHBvcnQge2dyb3VwTGlzdEVsZW1lbnQsIGxpc3RUaXRsZX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCcgKCQxIG9ubGluZSk6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCQxIG9ubGluZSk6Jyxcblx0XHRcdGphOiAn77yIJDHkurrjgqrjg7Pjg6njgqTjg7PkuK3vvInvvJonLFxuXHRcdFx0J3poLWhhbnMnOiAn77yIJDHkuKrlnKjnur/vvInvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn77yIJDHlgIvlnKjnt5rvvInvvJonLFxuXHRcdH0pLFxuXHRcdEFkbWluczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZG1pbnMnLFxuXHRcdFx0amE6ICfnrqHnkIbogIUnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0UGF0cm9sbGVyczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZXJzJyxcblx0XHRcdGphOiAn5beh5Zue6ICFJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdFN0ZXdhcmRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N0ZXdhcmRzJyxcblx0XHRcdGphOiAn44K544OB44Ol44Ov44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ijgeWGs+WnlOWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfoo4Hmsbrlp5Tlk6EnLFxuXHRcdH0pLFxuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdE5vT25saW5lOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGVyZSBhcmUgbm8gaGlnaCBwcml2aWxlZ2UgdXNlcnMgb25saW5lJyxcblx0XHRcdGphOiAn54++5Zyo44CB6auY5qip6ZmQ5Yip55So6ICF44Gv44Kq44Oz44Op44Kk44Oz44Gr44GE44G+44Gb44KTJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebruWJjeayoeacieermeWKoeS6uuWRmOWcqOe6vycsXG5cdFx0XHQnemgtaGFudCc6ICfnm67liY3mspLmnInnq5nli5nkurrlk6HlnKjnt5onLFxuXHRcdH0pLFxuXHRcdE9ubGluZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPbmxpbmUgYWRtaW5zJyxcblx0XHRcdGphOiAn44Kq44Oz44Op44Kk44Oz44Gu6auY5qip6ZmQ5Yip55So6ICFJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WcqOe6v+ermeWKoeS6uuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnt5rkuIrnq5nli5nkurrlk6EnLFxuXHRcdH0pLFxuXHRcdE9ubGluZVdpdGhpbjMwTWludXRlczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdIaWdoIHByaXZpbGVnZSB1c2VycyBvbmxpbmUgd2l0aGluIDMwIG1pbnV0ZXM6Jyxcblx0XHRcdGphOiAnMzDliIbku6XlhoXjgavjgqrjg7Pjg6njgqTjg7Pjgafpq5jmqKnpmZDliKnnlKjogIXvvJonLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiL6Z2i5piv5pyA6L+RMzDliIbpkp/lhoXlnKjnur/nmoTnq5nliqHkurrlkZjvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiL6Z2i5piv5pyA6L+RMzDliIbpkJjlhafnmoTnt5rkuIrnq5nli5nkurrlk6HvvJonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCBCTEFDS19MSVNUOiBzdHJpbmdbXSA9IFsn5rul55So6L+H5ruk5ZmoJ107XG5cbmV4cG9ydCB7QkxBQ0tfTElTVH07XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgT25saW5lQWRtaW5zLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtncm91cExpc3RFbGVtZW50LCBsaXN0VGl0bGV9IGZyb20gJy4vY29tcG9uZW50cy9ncm91cExpc3QnO1xuaW1wb3J0IHtCTEFDS19MSVNUfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGRvQ2xpY2sgPSBhc3luYyAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50PEhUTUxBbmNob3JFbGVtZW50Pik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdGxldCB1c2Vyczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3QgdXNlcnNFeHQ6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHN0ZXdhcmRzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCBhZG1pbnM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHBhdHJvbGxlcnM6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3QgdGltZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IHJjc3RhcnQ6IHN0cmluZyA9IHRpbWUudG9JU09TdHJpbmcoKTtcblx0dGltZS5zZXRNaW51dGVzKHRpbWUuZ2V0TWludXRlcygpIC0gMzApOyAvLyDmnIDov5Hmm7TmlLkzMOWIhumSn+WGheeahOe8lui+keeUqOaIt1xuXHRjb25zdCByY2VuZDogc3RyaW5nID0gdGltZS50b0lTT1N0cmluZygpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVjZW50Y2hhbmdlc1BhcmFtczogQXBpUXVlcnlSZWNlbnRDaGFuZ2VzUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bGlzdDogJ3JlY2VudGNoYW5nZXMnLFxuXHRcdFx0cmNwcm9wOiAndXNlcicsXG5cdFx0XHRyY3Nob3c6IFsnIWJvdCcsICchYW5vbiddLFxuXHRcdFx0cmNsaW1pdDogNTAwLFxuXHRcdFx0cmNzdGFydCxcblx0XHRcdHJjZW5kLFxuXHRcdH07XG5cdFx0Y29uc3QgcmVjZW50Y2hhbmdlcyA9IGF3YWl0IGFwaS5nZXQocmVjZW50Y2hhbmdlc1BhcmFtcyk7XG5cblx0XHRmb3IgKGNvbnN0IHt1c2VyfSBvZiByZWNlbnRjaGFuZ2VzWydxdWVyeSddLnJlY2VudGNoYW5nZXMgYXMge3VzZXI6IHN0cmluZ31bXSkge1xuXHRcdFx0dXNlcnNbdXNlcnMubGVuZ3RoXSA9IHVzZXI7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdH1cblx0XHRjb25zdCBsb2dldmVudHNQYXJhbXM6IEFwaVF1ZXJ5TG9nRXZlbnRzUGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRsZXByb3A6ICd1c2VyJyxcblx0XHRcdGxlbGltaXQ6IDUwMCxcblx0XHRcdGxlc3RhcnQ6IHJjc3RhcnQsXG5cdFx0XHRsZWVuZDogcmNlbmQsXG5cdFx0fTtcblx0XHRjb25zdCBsb2dldmVudHMgPSBhd2FpdCBhcGkuZ2V0KGxvZ2V2ZW50c1BhcmFtcyk7XG5cblx0XHRmb3IgKGNvbnN0IHt1c2VyfSBvZiBsb2dldmVudHNbJ3F1ZXJ5J10ubG9nZXZlbnRzIGFzIHt1c2VyOiBzdHJpbmd9W10pIHtcblx0XHRcdHVzZXJzRXh0W3VzZXJzRXh0Lmxlbmd0aF0gPSB1c2VyO1xuXHRcdH1cblxuXHRcdHVzZXJzID0gWy4uLm5ldyBTZXQoWy4uLnVzZXJzLCAuLi51c2Vyc0V4dF0pXTsgLy8g55So5oi35ZCN5YiX6KGo5ZCI5bm244CB5Y676YeN44CB5YiG5YmyXG5cblx0XHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCAodXNlcnMubGVuZ3RoICsgNTApIC8gNTA7IGkrKykge1xuXHRcdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0bGlzdDogJ3VzZXJzJyxcblx0XHRcdFx0XHR1c3VzZXJzOiB1c2Vycy5zbGljZShpICogNTAsIChpICsgMSkgKiA1MCkuam9pbignfCcpLFxuXHRcdFx0XHRcdHVzcHJvcDogJ2dyb3VwcycsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0XHRcdGZvciAoY29uc3Qge2dyb3VwcywgbmFtZX0gb2YgcmVzcG9uc2VbJ3F1ZXJ5J10udXNlcnMgYXMge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ31bXSkge1xuXHRcdFx0XHRcdC8vIOaJvuWIsOeuoeeQhuS6uuWRmO+8jOWOu+mZpOacuuWZqOS6uu+8jOa2iOmZpG5hbWXnmoTnqbrlgLxcblx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdib3QnKSB8fCBCTEFDS19MSVNULmluY2x1ZGVzKG5hbWUpIHx8ICFuYW1lKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc3Rld2FyZCcpKSB7XG5cdFx0XHRcdFx0XHRzdGV3YXJkc1tzdGV3YXJkcy5sZW5ndGhdID0gbmFtZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc3lzb3AnKSkge1xuXHRcdFx0XHRcdFx0YWRtaW5zW2FkbWlucy5sZW5ndGhdID0gbmFtZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygncGF0cm9sbGVyJykpIHtcblx0XHRcdFx0XHRcdHBhdHJvbGxlcnNbcGF0cm9sbGVycy5sZW5ndGhdID0gbmFtZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHRcdC8vIOafpeivoueUqOaIt+adg+mZkFxuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdH1cblxuXHRcdGlmIChzdGV3YXJkcy5sZW5ndGggKyBhZG1pbnMubGVuZ3RoICsgcGF0cm9sbGVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBlbGVtZW50czogRWxlbWVudFtdID0gW2xpc3RUaXRsZSgpXTtcblxuXHRcdFx0aWYgKHN0ZXdhcmRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0ZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoXSA9IGdyb3VwTGlzdEVsZW1lbnQoZ2V0TWVzc2FnZSgnU3Rld2FyZHMnKSwgc3Rld2FyZHMpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGFkbWlucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aF0gPSBncm91cExpc3RFbGVtZW50KGdldE1lc3NhZ2UoJ0FkbWlucycpLCBhZG1pbnMpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHBhdHJvbGxlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRlbGVtZW50c1tlbGVtZW50cy5sZW5ndGhdID0gZ3JvdXBMaXN0RWxlbWVudChnZXRNZXNzYWdlKCdQYXRyb2xsZXJzJyksIHBhdHJvbGxlcnMpO1xuXHRcdFx0fVxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoJCgnPGRpdj4nKS5hcHBlbmQoZWxlbWVudHMpLCB7dGFnOiAnb25saW5lQWRtaW5zJ30pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdOb09ubGluZScpLCB7XG5cdFx0XHRcdHRhZzogJ29ubGluZUFkbWlucycsXG5cdFx0XHRcdHR5cGU6ICd3YXJuJyxcblx0XHRcdH0pO1xuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLCB7dGFnOiAnb25saW5lQWRtaW5zJywgdHlwZTogJ2Vycm9yJ30pO1xuXHR9XG59O1xuXG5leHBvcnQge2RvQ2xpY2t9O1xuIiwgImltcG9ydCB7ZG9DbGlja30gZnJvbSAnLi9tb2R1bGVzL2RvQ2xpY2snO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKCk6IHZvaWQgPT4ge1xuXHQvLyBDcmVhdGUgcG9ydGxldCBsaW5rXG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0Y29uc3QgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBnZXRNZXNzYWdlKCdPbmxpbmUnKSwgJ3Qtb25saW5lYWRtaW4nKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gQmluZCBjbGljayBsaXN0ZW5lclxuXHQkKGVsZW1lbnQpXG5cdFx0LmZpbmQoJ2EnKVxuXHRcdC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdHZvaWQgZG9DbGljayhldmVudCk7XG5cdFx0fSk7XG59O1xuXG4kKGFkZFBvcnRsZXRMaW5rKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEtBQUsxRyxXQUFXLFFBQVEsR0FBRyxlQUFlO0FBQ2xILE1BQUksQ0FBQzZHLFNBQVM7QUFDYjtFQUNEO0FBR0FYLElBQUVXLE9BQU8sRUFDUEMsS0FBSyxHQUFHLEVBQ1JDLEdBQUcsU0FBVTFFLFdBQVU7QUFDdkIsU0FBS0gsUUFBUUcsS0FBSztFQUNuQixDQUFDO0FBQ0g7QUFFQTZELEVBQUVPLGNBQWM7IiwKICAibmFtZXMiOiBbIm9ubGluZWFkbWluU2VjdGlvbiIsICJvbmxpbmVhZG1pblNlY3Rpb25saXN0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkFkbWlucyIsICJQYXRyb2xsZXJzIiwgIlN0ZXdhcmRzIiwgIk5vT25saW5lIiwgIk9ubGluZSIsICJPbmxpbmVXaXRoaW4zME1pbnV0ZXMiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInNhbml0aXplIiwgInN0cmluZyIsICJyZXBsYWNlIiwgIlVzZXJMaW5rIiwgInVzZXJOYW1lIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJocmVmIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgImNvbmNhdCIsICJyZWwiLCAidGFyZ2V0IiwgInN0eWxlIiwgImZvbnRTaXplIiwgIm9ubGluZUNvdW50VGV4dCIsICJHcm91cExpc3QiLCAiZ3JvdXBOYW1lIiwgInVzZXJOYW1lcyIsICJjbGFzcyIsICJTdHJpbmciLCAibGVuZ3RoIiwgIm1hcCIsICJ1c2VyIiwgImdyb3VwTGlzdEVsZW1lbnQiLCAibGlzdFRpdGxlIiwgIkJMQUNLX0xJU1QiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJkb0NsaWNrIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAidXNlcnMiLCAidXNlcnNFeHQiLCAic3Rld2FyZHMiLCAiYWRtaW5zIiwgInBhdHJvbGxlcnMiLCAidGltZSIsICJEYXRlIiwgInJjc3RhcnQiLCAidG9JU09TdHJpbmciLCAic2V0TWludXRlcyIsICJnZXRNaW51dGVzIiwgInJjZW5kIiwgInJlY2VudGNoYW5nZXNQYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJyY3Byb3AiLCAicmNzaG93IiwgInJjbGltaXQiLCAicmVjZW50Y2hhbmdlcyIsICJnZXQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiZXJyIiwgImUiLCAiZiIsICJsb2dldmVudHNQYXJhbXMiLCAibGVwcm9wIiwgImxlbGltaXQiLCAibGVzdGFydCIsICJsZWVuZCIsICJsb2dldmVudHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiU2V0IiwgInByb21pc2VzIiwgImkiLCAicGFyYW1zIiwgImZvcm1hdCIsICJ1c3VzZXJzIiwgInNsaWNlIiwgImpvaW4iLCAidXNwcm9wIiwgInJlc3BvbnNlIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImdyb3VwcyIsICJuYW1lIiwgImluY2x1ZGVzIiwgIl9pIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgImVsZW1lbnRzIiwgIm5vdGlmeSIsICIkIiwgImFwcGVuZCIsICJ0YWciLCAidHlwZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiYWRkUG9ydGxldExpbmsiLCAicG9ydGxldElkIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZWxlbWVudCIsICJmaW5kIiwgIm9uIl0KfQo=
