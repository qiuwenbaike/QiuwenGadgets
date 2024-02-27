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
var onlineadminSection = "OnlineAdmins-module__onlineadminSection_WS9IGa__450";
var onlineadminSectionlist = "OnlineAdmins-module__onlineadminSectionlist_WS9IGa__450";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb21wb25lbnRzL2dyb3VwTGlzdC50c3giLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvT25saW5lQWRtaW5zLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbXBvbmVudHMvT25saW5lQWRtaW5zLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3Qgb25saW5lYWRtaW5TZWN0aW9uID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19vbmxpbmVhZG1pblNlY3Rpb25fV1M5SUdhX180NTBcIjtcbmV4cG9ydCBjb25zdCBvbmxpbmVhZG1pblNlY3Rpb25saXN0ID0gXCJPbmxpbmVBZG1pbnMtbW9kdWxlX19vbmxpbmVhZG1pblNlY3Rpb25saXN0X1dTOUlHYV9fNDUwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJvbmxpbmVhZG1pblNlY3Rpb25cIjogb25saW5lYWRtaW5TZWN0aW9uLFxuICBcIm9ubGluZWFkbWluU2VjdGlvbmxpc3RcIjogb25saW5lYWRtaW5TZWN0aW9ubGlzdFxufTtcbiAgICAgICIsICJpbXBvcnQge29ubGluZWFkbWluU2VjdGlvbiwgb25saW5lYWRtaW5TZWN0aW9ubGlzdH0gZnJvbSAnLi9PbmxpbmVBZG1pbnMubW9kdWxlLmxlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3Qgc2FuaXRpemUgPSAoc3RyaW5nOiBzdHJpbmcpID0+XG5cdHN0cmluZy5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmbHQ7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuXG5pbnRlcmZhY2UgVXNlckxpbmtQcm9wcyB7XG5cdHVzZXJOYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBHcm91cExpc3RQcm9wcyB7XG5cdGdyb3VwTmFtZTogc3RyaW5nO1xuXHR1c2VyTmFtZXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBVc2VyTGluayA9ICh7dXNlck5hbWV9OiBVc2VyTGlua1Byb3BzKSA9PiAoXG5cdDxsaT5cblx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcjoke3Nhbml0aXplKHVzZXJOYW1lKX1gKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0e3Nhbml0aXplKHVzZXJOYW1lKX1cblx0XHQ8L2E+XG5cdFx0Jm5ic3A7XG5cdFx0PHNwYW4gc3R5bGU9e3tmb250U2l6ZTogJzkwJSd9fT5cblx0XHRcdO+8iFxuXHRcdFx0PGEgaHJlZj17bXcudXRpbC5nZXRVcmwoYFVzZXJfdGFsazoke3Nhbml0aXplKHVzZXJOYW1lKX1gKX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHTnlZnoqIBcblx0XHRcdDwvYT5cblx0XHRcdO+8iVxuXHRcdDwvc3Bhbj5cblx0PC9saT5cbik7XG5cbmNvbnN0IG9ubGluZUNvdW50VGV4dDogc3RyaW5nID0gZ2V0TWVzc2FnZSgnICgkMSBvbmxpbmUpOicpO1xuXG5jb25zdCBHcm91cExpc3QgPSAoe2dyb3VwTmFtZSwgdXNlck5hbWVzfTogR3JvdXBMaXN0UHJvcHMpID0+IChcblx0PGRpdiBjbGFzcz17b25saW5lYWRtaW5TZWN0aW9ufT5cblx0XHQ8c3Bhbj57Z3JvdXBOYW1lfTwvc3Bhbj5cblx0XHQ8c3Bhbj57b25saW5lQ291bnRUZXh0LnJlcGxhY2UoJyQxJywgU3RyaW5nKHVzZXJOYW1lcy5sZW5ndGgpKX08L3NwYW4+XG5cdFx0PHVsIGNsYXNzPXtvbmxpbmVhZG1pblNlY3Rpb25saXN0fT5cblx0XHRcdHt1c2VyTmFtZXMubWFwKCh1c2VyKSA9PiAoXG5cdFx0XHRcdDxVc2VyTGluayBrZXk9e3VzZXJ9IHVzZXJOYW1lPXt1c2VyfSAvPlxuXHRcdFx0KSl9XG5cdFx0PC91bD5cblx0PC9kaXY+XG4pO1xuXG5jb25zdCBncm91cExpc3RFbGVtZW50ID0gKGdyb3VwTmFtZTogc3RyaW5nLCB1c2VyTmFtZXM6IHN0cmluZ1tdKSA9PiAoXG5cdDxHcm91cExpc3QgZ3JvdXBOYW1lPXtncm91cE5hbWV9IHVzZXJOYW1lcz17dXNlck5hbWVzfSAvPlxuKTtcblxuY29uc3QgbGlzdFRpdGxlID0gKCkgPT4gPHA+e2dldE1lc3NhZ2UoJ09ubGluZVdpdGhpbjMwTWludXRlcycpfTwvcD47XG5cbmV4cG9ydCB7Z3JvdXBMaXN0RWxlbWVudCwgbGlzdFRpdGxlfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0JyAoJDEgb25saW5lKTonOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyAoJDEgb25saW5lKTonLFxuXHRcdFx0amE6ICfvvIgkMeS6uuOCquODs+ODqeOCpOODs+S4re+8ie+8micsXG5cdFx0XHQnemgtaGFucyc6ICfvvIgkMeS4quWcqOe6v++8ie+8micsXG5cdFx0XHQnemgtaGFudCc6ICfvvIgkMeWAi+WcqOe3mu+8ie+8micsXG5cdFx0fSksXG5cdFx0QWRtaW5zOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0FkbWlucycsXG5cdFx0XHRqYTogJ+euoeeQhuiAhScsXG5cdFx0XHQnemgtaGFucyc6ICfnrqHnkIblkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn566h55CG5ZOhJyxcblx0XHR9KSxcblx0XHRQYXRyb2xsZXJzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbGxlcnMnLFxuXHRcdFx0amE6ICflt6Hlm57ogIUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0U3Rld2FyZHM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZHMnLFxuXHRcdFx0amE6ICfjgrnjg4Hjg6Xjg6/jg7zjg4knLFxuXHRcdFx0J3poLWhhbnMnOiAn6KOB5Yaz5aeU5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ijgeaxuuWnlOWToScsXG5cdFx0fSksXG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3InLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0Tm9PbmxpbmU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ3VycmVudGx5IHRoZXJlIGFyZSBubyBoaWdoIHByaXZpbGVnZSB1c2VycyBvbmxpbmUnLFxuXHRcdFx0amE6ICfnj77lnKjjgIHpq5jmqKnpmZDliKnnlKjogIXjga/jgqrjg7Pjg6njgqTjg7PjgavjgYTjgb7jgZvjgpMnLFxuXHRcdFx0J3poLWhhbnMnOiAn55uu5YmN5rKh5pyJ56uZ5Yqh5Lq65ZGY5Zyo57q/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+ebruWJjeaykuacieermeWLmeS6uuWToeWcqOe3micsXG5cdFx0fSksXG5cdFx0T25saW5lOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ09ubGluZSBhZG1pbnMnLFxuXHRcdFx0amE6ICfjgqrjg7Pjg6njgqTjg7Pjga7pq5jmqKnpmZDliKnnlKjogIUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5Zyo57q/56uZ5Yqh5Lq65ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3muS4iuermeWLmeS6uuWToScsXG5cdFx0fSksXG5cdFx0T25saW5lV2l0aGluMzBNaW51dGVzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0hpZ2ggcHJpdmlsZWdlIHVzZXJzIG9ubGluZSB3aXRoaW4gMzAgbWludXRlczonLFxuXHRcdFx0amE6ICczMOWIhuS7peWGheOBq+OCquODs+ODqeOCpOODs+OBp+mrmOaoqemZkOWIqeeUqOiAhe+8micsXG5cdFx0XHQnemgtaGFucyc6ICfkuIvpnaLmmK/mnIDov5EzMOWIhumSn+WGheWcqOe6v+eahOermeWKoeS6uuWRmO+8micsXG5cdFx0XHQnemgtaGFudCc6ICfkuIvpnaLmmK/mnIDov5EzMOWIhumQmOWFp+eahOe3muS4iuermeWLmeS6uuWToe+8micsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IEJMQUNLX0xJU1Q6IHN0cmluZ1tdID0gWyfmu6XnlKjov4fmu6TlmagnXTtcblxuZXhwb3J0IHtCTEFDS19MSVNUfTtcbiIsICJpbXBvcnQge2dyb3VwTGlzdEVsZW1lbnQsIGxpc3RUaXRsZX0gZnJvbSAnLi9jb21wb25lbnRzL2dyb3VwTGlzdCc7XG5pbXBvcnQge0JMQUNLX0xJU1R9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmV4cG9ydCBjb25zdCBvbmxpbmVBZG1pbnMgPSAoKTogdm9pZCA9PiB7XG5cdC8vIENyZWF0ZSBwb3J0bGV0IGxpbmtcblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBwb3J0bGV0TGlua09ubGluZTogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdHBvcnRsZXRJZCxcblx0XHQnIycsXG5cdFx0Z2V0TWVzc2FnZSgnT25saW5lJyksXG5cdFx0J3Qtb25saW5lYWRtaW4nXG5cdCk7XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdPbmxpbmVBZG1pbnMvMS4xJyk7XG5cdGNvbnN0IGRvQ2xpY2sgPSBhc3luYyAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50PEhUTUxBbmNob3JFbGVtZW50Pik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0IHVzZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGNvbnN0IHVzZXJzRXh0OiBzdHJpbmdbXSA9IFtdO1xuXHRcdGNvbnN0IHN0ZXdhcmRzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGNvbnN0IGFkbWluczogc3RyaW5nW10gPSBbXTtcblx0XHRjb25zdCBwYXRyb2xsZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdC8vIOacgOi/keabtOaUuTMw5YiG6ZKf5YaF55qE57yW6L6R55So5oi3XG5cdFx0Y29uc3QgdGltZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgcmNzdGFydDogc3RyaW5nID0gdGltZS50b0lTT1N0cmluZygpO1xuXHRcdHRpbWUuc2V0TWludXRlcyh0aW1lLmdldE1pbnV0ZXMoKSAtIDMwKTtcblx0XHRjb25zdCByY2VuZDogc3RyaW5nID0gdGltZS50b0lTT1N0cmluZygpO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZWNlbnRjaGFuZ2VzUGFyYW1zOiBBcGlRdWVyeVJlY2VudENoYW5nZXNQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRsaXN0OiAncmVjZW50Y2hhbmdlcycsXG5cdFx0XHRcdHJjcHJvcDogJ3VzZXInLFxuXHRcdFx0XHRyY3Nob3c6IFsnIWJvdCcsICchYW5vbiddLFxuXHRcdFx0XHRyY2xpbWl0OiA1MDAsXG5cdFx0XHRcdHJjc3RhcnQsXG5cdFx0XHRcdHJjZW5kLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHJlY2VudGNoYW5nZXMgPSBhd2FpdCBhcGkuZ2V0KHJlY2VudGNoYW5nZXNQYXJhbXMpO1xuXG5cdFx0XHRmb3IgKGNvbnN0IHt1c2VyfSBvZiByZWNlbnRjaGFuZ2VzWydxdWVyeSddLnJlY2VudGNoYW5nZXMgYXMge3VzZXI6IHN0cmluZ31bXSkge1xuXHRcdFx0XHR1c2Vyc1t1c2Vycy5sZW5ndGhdID0gdXNlcjsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHR9XG5cdFx0XHRjb25zdCBsb2dldmVudHNQYXJhbXM6IEFwaVF1ZXJ5TG9nRXZlbnRzUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRcdGxlcHJvcDogJ3VzZXInLFxuXHRcdFx0XHRsZWxpbWl0OiA1MDAsXG5cdFx0XHRcdGxlc3RhcnQ6IHJjc3RhcnQsXG5cdFx0XHRcdGxlZW5kOiByY2VuZCxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBsb2dldmVudHMgPSBhd2FpdCBhcGkuZ2V0KGxvZ2V2ZW50c1BhcmFtcyk7XG5cblx0XHRcdGZvciAoY29uc3Qge3VzZXJ9IG9mIGxvZ2V2ZW50c1sncXVlcnknXS5sb2dldmVudHMgYXMge3VzZXI6IHN0cmluZ31bXSkge1xuXHRcdFx0XHR1c2Vyc0V4dFt1c2Vyc0V4dC5sZW5ndGhdID0gdXNlcjtcblx0XHRcdH1cblx0XHRcdC8vIOeUqOaIt+WQjeWIl+ihqOWQiOW5tuOAgeWOu+mHjeOAgeWIhuWJslxuXHRcdFx0dXNlcnMgPSBbLi4ubmV3IFNldChbLi4udXNlcnMsIC4uLnVzZXJzRXh0XSldO1xuXHRcdFx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgKHVzZXJzLmxlbmd0aCArIDUwKSAvIDUwOyBpKyspIHtcblx0XHRcdFx0cHJvbWlzZXNbcHJvbWlzZXMubGVuZ3RoXSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdFx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0XHRcdFx0XHR1c3VzZXJzOiB1c2Vycy5zbGljZShpICogNTAsIChpICsgMSkgKiA1MCkuam9pbignfCcpLFxuXHRcdFx0XHRcdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0XHRcdFx0Zm9yIChjb25zdCB7Z3JvdXBzLCBuYW1lfSBvZiByZXNwb25zZVsncXVlcnknXS51c2VycyBhcyB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfVtdKSB7XG5cdFx0XHRcdFx0XHQvLyDmib7liLDnrqHnkIbkurrlkZjvvIzljrvpmaTmnLrlmajkurrvvIzmtojpmaRuYW1l55qE56m65YC8XG5cdFx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdib3QnKSB8fCBCTEFDS19MSVNULmluY2x1ZGVzKG5hbWUpIHx8ICFuYW1lKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc3Rld2FyZCcpKSB7XG5cdFx0XHRcdFx0XHRcdHN0ZXdhcmRzW3N0ZXdhcmRzLmxlbmd0aF0gPSBuYW1lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygnc3lzb3AnKSkge1xuXHRcdFx0XHRcdFx0XHRhZG1pbnNbYWRtaW5zLmxlbmd0aF0gPSBuYW1lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGdyb3Vwcy5pbmNsdWRlcygncGF0cm9sbGVyJykpIHtcblx0XHRcdFx0XHRcdFx0cGF0cm9sbGVyc1twYXRyb2xsZXJzLmxlbmd0aF0gPSBuYW1lO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8vIOafpeivoueUqOaIt+adg+mZkFxuXHRcdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH1cblx0XHRcdGlmIChzdGV3YXJkcy5sZW5ndGggKyBhZG1pbnMubGVuZ3RoICsgcGF0cm9sbGVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnRzOiBFbGVtZW50W10gPSBbbGlzdFRpdGxlKCldO1xuXHRcdFx0XHRpZiAoc3Rld2FyZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aF0gPSBncm91cExpc3RFbGVtZW50KGdldE1lc3NhZ2UoJ1N0ZXdhcmRzJyksIHN0ZXdhcmRzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYWRtaW5zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRlbGVtZW50c1tlbGVtZW50cy5sZW5ndGhdID0gZ3JvdXBMaXN0RWxlbWVudChnZXRNZXNzYWdlKCdBZG1pbnMnKSwgYWRtaW5zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocGF0cm9sbGVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0ZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoXSA9IGdyb3VwTGlzdEVsZW1lbnQoZ2V0TWVzc2FnZSgnUGF0cm9sbGVycycpLCBwYXRyb2xsZXJzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeSgkKCc8ZGl2PicpLmFwcGVuZChlbGVtZW50cyksIHt0YWc6ICdvbmxpbmVBZG1pbnMnfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdOb09ubGluZScpLCB7XG5cdFx0XHRcdFx0dGFnOiAnb25saW5lQWRtaW5zJyxcblx0XHRcdFx0XHR0eXBlOiAnd2FybicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLCB7dGFnOiAnb25saW5lQWRtaW5zJywgdHlwZTogJ2Vycm9yJ30pO1xuXHRcdH1cblx0fTtcblx0Ly8gQmluZCBjbGljayBsaXN0ZW5lclxuXHRpZiAoIXBvcnRsZXRMaW5rT25saW5lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdCQocG9ydGxldExpbmtPbmxpbmUpXG5cdFx0LmZpbmQoJ2EnKVxuXHRcdC5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdHZvaWQgZG9DbGljayhldmVudCk7XG5cdFx0fSk7XG59O1xuIiwgImltcG9ydCB7b25saW5lQWRtaW5zfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbiQob25saW5lQWRtaW5zKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEscUJBQXFCO0FBQzNCLElBQU1DLHlCQUF5Qjs7QUNEdEMsSUFBQUMscUJBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sa0JBQUEsR0FBaUJELGtCQUFBRSxVQUFTO01BQ3pCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsU0FBQSxHQUFRTCxrQkFBQUUsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLGFBQUEsR0FBWU4sa0JBQUFFLFVBQVM7TUFDcEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxXQUFBLEdBQVVQLGtCQUFBRSxVQUFTO01BQ2xCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxrQkFBQSxHQUFpQkosa0JBQUFFLFVBQVM7TUFDekJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESSxXQUFBLEdBQVVSLGtCQUFBRSxVQUFTO01BQ2xCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREssU0FBQSxHQUFRVCxrQkFBQUUsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RNLHdCQUFBLEdBQXVCVixrQkFBQUUsVUFBUztNQUMvQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1PLGVBQWVWLGdCQUFnQjtBQUVyQyxJQUFNVyxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRHZEQSxJQUFNQyxXQUFZQyxZQUNqQkEsT0FBT0MsUUFBUSxNQUFNLE9BQU8sRUFBRUEsUUFBUSxNQUFNLE1BQU0sRUFBRUEsUUFBUSxNQUFNLE1BQU0sRUFBRUEsUUFBUSxNQUFNLFFBQVE7QUFXakcsSUFBTUMsV0FBV0EsQ0FBQztFQUFDQztBQUFRLE1BQzFCckIsbUNBQUFzQixRQUFBQyxjQUFDLE1BQUEsTUFDQXZCLG1DQUFBc0IsUUFBQUMsY0FBQyxLQUFBO0VBQUVDLE1BQU1DLEdBQUdDLEtBQUtDLE9BQUEsUUFBQUMsT0FBZVgsU0FBU0ksUUFBUSxDQUFDLENBQUU7RUFBR1EsS0FBSTtFQUFzQkMsUUFBTztBQUFBLEdBQ3RGYixTQUFTSSxRQUFRLENBQ25CLEdBQUksS0FFSnJCLG1DQUFBc0IsUUFBQUMsY0FBQyxRQUFBO0VBQUtRLE9BQU87SUFBQ0MsVUFBVTtFQUFLO0FBQUEsR0FBRyxLQUUvQmhDLG1DQUFBc0IsUUFBQUMsY0FBQyxLQUFBO0VBQUVDLE1BQU1DLEdBQUdDLEtBQUtDLE9BQUEsYUFBQUMsT0FBb0JYLFNBQVNJLFFBQVEsQ0FBQyxDQUFFO0VBQUdRLEtBQUk7RUFBc0JDLFFBQU87QUFBQSxHQUFTLElBRXRHLEdBQUksR0FFTCxDQUNEO0FBR0QsSUFBTUcsa0JBQTBCbEIsV0FBVyxlQUFlO0FBRTFELElBQU1tQixZQUFZQSxDQUFDO0VBQUNDO0VBQVdDO0FBQVMsTUFDdkNwQyxtQ0FBQXNCLFFBQUFDLGNBQUMsT0FBQTtFQUFJYyxPQUFPdkM7QUFBQSxHQUNYRSxtQ0FBQXNCLFFBQUFDLGNBQUMsUUFBQSxNQUFNWSxTQUFVLEdBQ2pCbkMsbUNBQUFzQixRQUFBQyxjQUFDLFFBQUEsTUFBTVUsZ0JBQWdCZCxRQUFRLE1BQU1tQixPQUFPRixVQUFVRyxNQUFNLENBQUMsQ0FBRSxHQUMvRHZDLG1DQUFBc0IsUUFBQUMsY0FBQyxNQUFBO0VBQUdjLE9BQU90QztBQUFBLEdBQ1RxQyxVQUFVSSxJQUFLQyxVQUNmekMsbUNBQUFzQixRQUFBQyxjQUFDSCxVQUFBO0VBQVNKLEtBQUt5QjtFQUFNcEIsVUFBVW9CO0FBQUEsQ0FBTSxDQUNyQyxDQUNGLENBQ0Q7QUFHRCxJQUFNQyxtQkFBbUJBLENBQUNQLFdBQW1CQyxjQUM1Q3BDLG1DQUFBc0IsUUFBQUMsY0FBQ1csV0FBQTtFQUFVQztFQUFzQkM7QUFBQSxDQUFzQjtBQUd4RCxJQUFNTyxZQUFZQSxNQUFNM0MsbUNBQUFzQixRQUFBQyxjQUFDLEtBQUEsTUFBR1IsV0FBVyx1QkFBdUIsQ0FBRTs7QUVsRGhFLElBQU02QixhQUF1QixDQUFDLE9BQU87O0FDR3JDLElBQUFDLHFCQUF3QjNDLFFBQUEsaUJBQUE7QUFFakIsSUFBTTRDLGVBQWVBLE1BQVk7QUFFdkMsUUFBTUMsWUFBbUNDLFNBQVNDLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsUUFBTUMsb0JBQTBDekIsR0FBR0MsS0FBS3lCLGVBQ3ZESixXQUNBLEtBQ0FoQyxXQUFXLFFBQVEsR0FDbkIsZUFDRDtBQUNBLFFBQU1xQyxPQUFBLEdBQWNQLG1CQUFBUSxXQUFVLGtCQUFrQjtBQUNoRCxRQUFNQyxVQUFBLDJCQUFBO0FBQUEsUUFBQUMsT0FBQUMsa0JBQVUsV0FBT0MsT0FBK0Q7QUFDckZBLFlBQU1DLGVBQWU7QUFDckIsVUFBSUMsUUFBa0IsQ0FBQTtBQUN0QixZQUFNQyxXQUFxQixDQUFBO0FBQzNCLFlBQU1DLFdBQXFCLENBQUE7QUFDM0IsWUFBTUMsU0FBbUIsQ0FBQTtBQUN6QixZQUFNQyxhQUF1QixDQUFBO0FBRTdCLFlBQU1DLE9BQWEsb0JBQUlDLEtBQUs7QUFDNUIsWUFBTUMsVUFBa0JGLEtBQUtHLFlBQVk7QUFDekNILFdBQUtJLFdBQVdKLEtBQUtLLFdBQVcsSUFBSSxFQUFFO0FBQ3RDLFlBQU1DLFFBQWdCTixLQUFLRyxZQUFZO0FBQ3ZDLFVBQUk7QUFDSCxjQUFNSSxzQkFBbUQ7VUFDeERDLFFBQVE7VUFDUkMsZUFBZTtVQUNmQyxNQUFNO1VBQ05DLFFBQVE7VUFDUkMsUUFBUSxDQUFDLFFBQVEsT0FBTztVQUN4QkMsU0FBUztVQUNUWDtVQUNBSTtRQUNEO0FBQ0EsY0FBTVEsZ0JBQUEsTUFBc0IxQixJQUFJMkIsSUFBSVIsbUJBQW1CO0FBQUEsWUFBQVMsYUFBQUMsMkJBRWxDSCxjQUFjLE9BQU8sRUFBRUEsYUFBQSxHQUFBSTtBQUFBLFlBQUE7QUFBNUMsZUFBQUYsV0FBQUcsRUFBQSxHQUFBLEVBQUFELFNBQUFGLFdBQUFJLEVBQUEsR0FBQUMsUUFBK0U7QUFBQSxrQkFBcEU7Y0FBQzVDO1lBQUksSUFBQXlDLE9BQUFJO0FBQ2YzQixrQkFBTUEsTUFBTXBCLE1BQU0sSUFBSUU7VUFDdkI7UUFBQSxTQUFBOEMsS0FBQTtBQUFBUCxxQkFBQVEsRUFBQUQsR0FBQTtRQUFBLFVBQUE7QUFBQVAscUJBQUFTLEVBQUE7UUFBQTtBQUNBLGNBQU1DLGtCQUEyQztVQUNoRGxCLFFBQVE7VUFDUkMsZUFBZTtVQUNmQyxNQUFNO1VBQ05pQixRQUFRO1VBQ1JDLFNBQVM7VUFDVEMsU0FBUzNCO1VBQ1Q0QixPQUFPeEI7UUFDUjtBQUNBLGNBQU15QixZQUFBLE1BQWtCM0MsSUFBSTJCLElBQUlXLGVBQWU7QUFBQSxZQUFBTSxhQUFBZiwyQkFFMUJjLFVBQVUsT0FBTyxFQUFFQSxTQUFBLEdBQUFFO0FBQUEsWUFBQTtBQUF4QyxlQUFBRCxXQUFBYixFQUFBLEdBQUEsRUFBQWMsU0FBQUQsV0FBQVosRUFBQSxHQUFBQyxRQUF1RTtBQUFBLGtCQUE1RDtjQUFDNUM7WUFBSSxJQUFBd0QsT0FBQVg7QUFDZjFCLHFCQUFTQSxTQUFTckIsTUFBTSxJQUFJRTtVQUM3QjtRQUFBLFNBQUE4QyxLQUFBO0FBQUFTLHFCQUFBUixFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBUyxxQkFBQVAsRUFBQTtRQUFBO0FBRUE5QixnQkFBUSxDQUFDLEdBQUcsb0JBQUl1QyxJQUFJLENBQUMsR0FBR3ZDLE9BQU8sR0FBR0MsUUFBUSxDQUFDLENBQUM7QUFDNUMsY0FBTXVDLFdBQW9DLENBQUE7QUFDMUMsaUJBQVNDLElBQVksR0FBR0EsS0FBS3pDLE1BQU1wQixTQUFTLE1BQU0sSUFBSTZELEtBQUs7QUFDMURELG1CQUFTQSxTQUFTNUQsTUFBTSxJQUFBaUIsa0NBQUksYUFBMkI7QUFDdEQsa0JBQU02QyxTQUE4QjtjQUNuQzdCLFFBQVE7Y0FDUjhCLFFBQVE7Y0FDUjdCLGVBQWU7Y0FDZkMsTUFBTTtjQUNONkIsU0FBUzVDLE1BQU02QyxNQUFNSixJQUFJLEtBQUtBLElBQUksS0FBSyxFQUFFLEVBQUVLLEtBQUssR0FBRztjQUNuREMsUUFBUTtZQUNUO0FBQ0Esa0JBQU1DLFdBQUEsTUFBaUJ2RCxJQUFJMkIsSUFBSXNCLE1BQU07QUFBQSxnQkFBQU8sYUFBQTNCLDJCQUVSMEIsU0FBUyxPQUFPLEVBQUVoRCxLQUFBLEdBQUFrRDtBQUFBLGdCQUFBO0FBQS9DLG1CQUFBRCxXQUFBekIsRUFBQSxHQUFBLEVBQUEwQixTQUFBRCxXQUFBeEIsRUFBQSxHQUFBQyxRQUE0RjtBQUFBLHNCQUFqRjtrQkFBQ3lCO2tCQUFRQztnQkFBSSxJQUFBRixPQUFBdkI7QUFFdkIsb0JBQUl3QixPQUFPRSxTQUFTLEtBQUssS0FBS3BFLFdBQVdvRSxTQUFTRCxJQUFJLEtBQUssQ0FBQ0EsTUFBTTtBQUNqRTtnQkFDRDtBQUNBLG9CQUFJRCxPQUFPRSxTQUFTLFNBQVMsR0FBRztBQUMvQm5ELDJCQUFTQSxTQUFTdEIsTUFBTSxJQUFJd0U7Z0JBQzdCO0FBQ0Esb0JBQUlELE9BQU9FLFNBQVMsT0FBTyxHQUFHO0FBQzdCbEQseUJBQU9BLE9BQU92QixNQUFNLElBQUl3RTtnQkFDekI7QUFDQSxvQkFBSUQsT0FBT0UsU0FBUyxXQUFXLEdBQUc7QUFDakNqRCw2QkFBV0EsV0FBV3hCLE1BQU0sSUFBSXdFO2dCQUNqQztjQUNEO1lBQUEsU0FBQXhCLEtBQUE7QUFBQXFCLHlCQUFBcEIsRUFBQUQsR0FBQTtZQUFBLFVBQUE7QUFBQXFCLHlCQUFBbkIsRUFBQTtZQUFBO1VBQ0QsQ0FBQTtRQUNEO0FBRUEsaUJBQUF3QixLQUFBLEdBQUFDLFlBQXNCZixVQUFBYyxLQUFBQyxVQUFBM0UsUUFBQTBFLE1BQVU7QUFBaEMsZ0JBQVdFLFVBQUFELFVBQUFELEVBQUE7QUFDVixnQkFBTUUsUUFBUTtRQUNmO0FBQ0EsWUFBSXRELFNBQVN0QixTQUFTdUIsT0FBT3ZCLFNBQVN3QixXQUFXeEIsU0FBUyxHQUFHO0FBQzVELGdCQUFNNkUsV0FBc0IsQ0FBQ3pFLFVBQVUsQ0FBQztBQUN4QyxjQUFJa0IsU0FBU3RCLFNBQVMsR0FBRztBQUN4QjZFLHFCQUFTQSxTQUFTN0UsTUFBTSxJQUFJRyxpQkFBaUIzQixXQUFXLFVBQVUsR0FBRzhDLFFBQVE7VUFDOUU7QUFDQSxjQUFJQyxPQUFPdkIsU0FBUyxHQUFHO0FBQ3RCNkUscUJBQVNBLFNBQVM3RSxNQUFNLElBQUlHLGlCQUFpQjNCLFdBQVcsUUFBUSxHQUFHK0MsTUFBTTtVQUMxRTtBQUNBLGNBQUlDLFdBQVd4QixTQUFTLEdBQUc7QUFDMUI2RSxxQkFBU0EsU0FBUzdFLE1BQU0sSUFBSUcsaUJBQWlCM0IsV0FBVyxZQUFZLEdBQUdnRCxVQUFVO1VBQ2xGO0FBQ0EsZUFBS3RDLEdBQUc0RixPQUFPQyxFQUFFLE9BQU8sRUFBRUMsT0FBT0gsUUFBUSxHQUFHO1lBQUNJLEtBQUs7VUFBYyxDQUFDO1FBQ2xFLE9BQU87QUFDTixlQUFLL0YsR0FBRzRGLE9BQU90RyxXQUFXLFVBQVUsR0FBRztZQUN0Q3lHLEtBQUs7WUFDTEMsTUFBTTtVQUNQLENBQUM7UUFDRjtNQUNELFFBQVE7QUFDUCxhQUFLaEcsR0FBRzRGLE9BQU90RyxXQUFXLGVBQWUsR0FBRztVQUFDeUcsS0FBSztVQUFnQkMsTUFBTTtRQUFPLENBQUM7TUFDakY7SUFDRCxDQUFBO0FBQUEsV0FBQSxTQW5HTW5FLFNBQUFvRSxJQUFBO0FBQUEsYUFBQW5FLEtBQUFvRSxNQUFBLE1BQUFDLFNBQUE7SUFBQTtFQUFBLEVBQUE7QUFxR04sTUFBSSxDQUFDMUUsbUJBQW1CO0FBQ3ZCO0VBQ0Q7QUFDQW9FLElBQUVwRSxpQkFBaUIsRUFDakIyRSxLQUFLLEdBQUcsRUFDUkMsR0FBRyxTQUFVckUsV0FBVTtBQUN2QixTQUFLSCxRQUFRRyxLQUFLO0VBQ25CLENBQUM7QUFDSDs7QUMxSEE2RCxFQUFFeEUsWUFBWTsiLAogICJuYW1lcyI6IFsib25saW5lYWRtaW5TZWN0aW9uIiwgIm9ubGluZWFkbWluU2VjdGlvbmxpc3QiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQWRtaW5zIiwgIlBhdHJvbGxlcnMiLCAiU3Rld2FyZHMiLCAiTm9PbmxpbmUiLCAiT25saW5lIiwgIk9ubGluZVdpdGhpbjMwTWludXRlcyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic2FuaXRpemUiLCAic3RyaW5nIiwgInJlcGxhY2UiLCAiVXNlckxpbmsiLCAidXNlck5hbWUiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImhyZWYiLCAibXciLCAidXRpbCIsICJnZXRVcmwiLCAiY29uY2F0IiwgInJlbCIsICJ0YXJnZXQiLCAic3R5bGUiLCAiZm9udFNpemUiLCAib25saW5lQ291bnRUZXh0IiwgIkdyb3VwTGlzdCIsICJncm91cE5hbWUiLCAidXNlck5hbWVzIiwgImNsYXNzIiwgIlN0cmluZyIsICJsZW5ndGgiLCAibWFwIiwgInVzZXIiLCAiZ3JvdXBMaXN0RWxlbWVudCIsICJsaXN0VGl0bGUiLCAiQkxBQ0tfTElTVCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAib25saW5lQWRtaW5zIiwgInBvcnRsZXRJZCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInBvcnRsZXRMaW5rT25saW5lIiwgImFkZFBvcnRsZXRMaW5rIiwgImFwaSIsICJpbml0TXdBcGkiLCAiZG9DbGljayIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgInVzZXJzIiwgInVzZXJzRXh0IiwgInN0ZXdhcmRzIiwgImFkbWlucyIsICJwYXRyb2xsZXJzIiwgInRpbWUiLCAiRGF0ZSIsICJyY3N0YXJ0IiwgInRvSVNPU3RyaW5nIiwgInNldE1pbnV0ZXMiLCAiZ2V0TWludXRlcyIsICJyY2VuZCIsICJyZWNlbnRjaGFuZ2VzUGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAicmNwcm9wIiwgInJjc2hvdyIsICJyY2xpbWl0IiwgInJlY2VudGNoYW5nZXMiLCAiZ2V0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiLCAibG9nZXZlbnRzUGFyYW1zIiwgImxlcHJvcCIsICJsZWxpbWl0IiwgImxlc3RhcnQiLCAibGVlbmQiLCAibG9nZXZlbnRzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIlNldCIsICJwcm9taXNlcyIsICJpIiwgInBhcmFtcyIsICJmb3JtYXQiLCAidXN1c2VycyIsICJzbGljZSIsICJqb2luIiwgInVzcHJvcCIsICJyZXNwb25zZSIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJncm91cHMiLCAibmFtZSIsICJpbmNsdWRlcyIsICJfaSIsICJfcHJvbWlzZXMiLCAicHJvbWlzZSIsICJlbGVtZW50cyIsICJub3RpZnkiLCAiJCIsICJhcHBlbmQiLCAidGFnIiwgInR5cGUiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImZpbmQiLCAib24iXQp9Cg==
