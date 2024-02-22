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
//! src/OnlineAdmins/modules/constant.ts
var BLACK_LIST = ["滥用过滤器"];
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
//! src/OnlineAdmins/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var onlineAdmins = () => {
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const portletLinkOnline = mw.util.addPortletLink(portletId, "#", getMessage("Online"), "t-onlineadmin");
  const api = (0, import_ext_gadget2.initMwApi)("OnlineAdmins/1.1");
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
        var _iterator = _createForOfIteratorHelper(recentchanges["query"].recentchanges), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            const {
              user
            } = _step.value;
            users[users.length] = user;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
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
        var _iterator2 = _createForOfIteratorHelper(logevents["query"].logevents), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const {
              user
            } = _step2.value;
            usersExt[usersExt.length] = user;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
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
            var _iterator3 = _createForOfIteratorHelper(response["query"].users), _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                const {
                  groups,
                  name
                } = _step3.value;
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
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        }
        for (var _i = 0, _promises = promises; _i < _promises.length; _i++) {
          const promise = _promises[_i];
          yield promise();
        }
        const userlink = (user) => {
          const _user = user.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&lt;").replace(/"/g, "&quot;");
          return '<li><a href="'.concat(mw.util.getUrl("User:".concat(_user)), '" rel="noopener" target="_blank">').concat(_user, '</a>&nbsp;<span style="font-size: 90%">（<a href="').concat(mw.util.getUrl("User talk:".concat(_user)), '" rel="noopener" target="_blank">留言</a>）</span></li>');
        };
        if (stewards.length + admins.length + patrollers.length > 0) {
          const adminsstring = ["<p>".concat(getMessage("OnlineWithin30Minutes"), "</p>")];
          const onlineCountText = getMessage(" ($1 online):");
          if (stewards.length > 0) {
            adminsstring[adminsstring.length] = '<div class="onlineadmin-section">'.concat(getMessage("Stewards")).concat(onlineCountText.replace("$1", String(stewards.length)), '<ul class="onlineadmin-list">');
            var _iterator4 = _createForOfIteratorHelper(stewards), _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                const element = _step4.value;
                adminsstring[adminsstring.length] = userlink(element);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            adminsstring[adminsstring.length] = "</ul></div>";
          }
          if (admins.length > 0) {
            adminsstring[adminsstring.length] = '<div class="onlineadmin-section">'.concat(getMessage("Admins")).concat(onlineCountText.replace("$1", String(admins.length)), '<ul class="onlineadmin-list">');
            var _iterator5 = _createForOfIteratorHelper(admins), _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                const element = _step5.value;
                adminsstring[adminsstring.length] = userlink(element);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
            adminsstring[adminsstring.length] = "</ul></div>";
          }
          if (patrollers.length > 0) {
            adminsstring[adminsstring.length] = '<div class="onlineadmin-section">'.concat(getMessage("Patrollers")).concat(onlineCountText.replace("$1", String(patrollers.length)), '<ul class="onlineadmin-list">');
            var _iterator6 = _createForOfIteratorHelper(patrollers), _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                const element = _step6.value;
                adminsstring[adminsstring.length] = userlink(element);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
            adminsstring[adminsstring.length] = "</ul></div>";
          }
          void mw.notify($(adminsstring.join("")), {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL09ubGluZUFkbWlucy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9PbmxpbmVBZG1pbnMvT25saW5lQWRtaW5zLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBCTEFDS19MSVNUOiBzdHJpbmdbXSA9IFsn5rul55So6L+H5ruk5ZmoJ107XG5cbmV4cG9ydCB7QkxBQ0tfTElTVH07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCcgKCQxIG9ubGluZSk6JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCQxIG9ubGluZSk6Jyxcblx0XHRcdGphOiAn77yIJDHkurrjgqrjg7Pjg6njgqTjg7PkuK3vvInvvJonLFxuXHRcdFx0J3poLWhhbnMnOiAn77yIJDHkuKrlnKjnur/vvInvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn77yIJDHlgIvlnKjnt5rvvInvvJonLFxuXHRcdH0pLFxuXHRcdEFkbWluczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBZG1pbnMnLFxuXHRcdFx0amE6ICfnrqHnkIbogIUnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0UGF0cm9sbGVyczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZXJzJyxcblx0XHRcdGphOiAn5beh5Zue6ICFJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3oeafpeWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICflt6Hmn6Xlk6EnLFxuXHRcdH0pLFxuXHRcdFN0ZXdhcmRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N0ZXdhcmRzJyxcblx0XHRcdGphOiAn44K544OB44Ol44Ov44O844OJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ijgeWGs+WnlOWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfoo4Hmsbrlp5Tlk6EnLFxuXHRcdH0pLFxuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXR3b3JrIGVycm9yJyxcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdE5vT25saW5lOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0N1cnJlbnRseSB0aGVyZSBhcmUgbm8gaGlnaCBwcml2aWxlZ2UgdXNlcnMgb25saW5lJyxcblx0XHRcdGphOiAn54++5Zyo44CB6auY5qip6ZmQ5Yip55So6ICF44Gv44Kq44Oz44Op44Kk44Oz44Gr44GE44G+44Gb44KTJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebruWJjeayoeacieermeWKoeS6uuWRmOWcqOe6vycsXG5cdFx0XHQnemgtaGFudCc6ICfnm67liY3mspLmnInnq5nli5nkurrlk6HlnKjnt5onLFxuXHRcdH0pLFxuXHRcdE9ubGluZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdPbmxpbmUgYWRtaW5zJyxcblx0XHRcdGphOiAn44Kq44Oz44Op44Kk44Oz44Gu6auY5qip6ZmQ5Yip55So6ICFJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WcqOe6v+ermeWKoeS6uuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnt5rkuIrnq5nli5nkurrlk6EnLFxuXHRcdH0pLFxuXHRcdE9ubGluZVdpdGhpbjMwTWludXRlczogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdIaWdoIHByaXZpbGVnZSB1c2VycyBvbmxpbmUgd2l0aGluIDMwIG1pbnV0ZXM6Jyxcblx0XHRcdGphOiAnMzDliIbku6XlhoXjgavjgqrjg7Pjg6njgqTjg7Pjgafpq5jmqKnpmZDliKnnlKjogIXvvJonLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiL6Z2i5piv5pyA6L+RMzDliIbpkp/lhoXlnKjnur/nmoTnq5nliqHkurrlkZjvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5LiL6Z2i5piv5pyA6L+RMzDliIbpkJjlhafnmoTnt5rkuIrnq5nli5nkurrlk6HvvJonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge0JMQUNLX0xJU1R9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmV4cG9ydCBjb25zdCBvbmxpbmVBZG1pbnMgPSAoKTogdm9pZCA9PiB7XG5cdC8vIENyZWF0ZSBwb3J0bGV0IGxpbmtcblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBwb3J0bGV0TGlua09ubGluZTogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdHBvcnRsZXRJZCxcblx0XHQnIycsXG5cdFx0Z2V0TWVzc2FnZSgnT25saW5lJyksXG5cdFx0J3Qtb25saW5lYWRtaW4nXG5cdCk7XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdPbmxpbmVBZG1pbnMvMS4xJyk7XG5cdGNvbnN0IGRvQ2xpY2sgPSBhc3luYyAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50PEhUTUxBbmNob3JFbGVtZW50Pik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0IHVzZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGNvbnN0IHVzZXJzRXh0OiBzdHJpbmdbXSA9IFtdO1xuXHRcdGNvbnN0IHN0ZXdhcmRzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdGNvbnN0IGFkbWluczogc3RyaW5nW10gPSBbXTtcblx0XHRjb25zdCBwYXRyb2xsZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdC8vIOacgOi/keabtOaUuTMw5YiG6ZKf5YaF55qE57yW6L6R55So5oi3XG5cdFx0Y29uc3QgdGltZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgcmNzdGFydDogc3RyaW5nID0gdGltZS50b0lTT1N0cmluZygpO1xuXHRcdHRpbWUuc2V0TWludXRlcyh0aW1lLmdldE1pbnV0ZXMoKSAtIDMwKTtcblx0XHRjb25zdCByY2VuZDogc3RyaW5nID0gdGltZS50b0lTT1N0cmluZygpO1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZWNlbnRjaGFuZ2VzUGFyYW1zOiBBcGlRdWVyeVJlY2VudENoYW5nZXNQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRsaXN0OiAncmVjZW50Y2hhbmdlcycsXG5cdFx0XHRcdHJjcHJvcDogJ3VzZXInLFxuXHRcdFx0XHRyY3Nob3c6IFsnIWJvdCcsICchYW5vbiddLFxuXHRcdFx0XHRyY2xpbWl0OiA1MDAsXG5cdFx0XHRcdHJjc3RhcnQsXG5cdFx0XHRcdHJjZW5kLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHJlY2VudGNoYW5nZXMgPSBhd2FpdCBhcGkuZ2V0KHJlY2VudGNoYW5nZXNQYXJhbXMpO1xuXG5cdFx0XHRmb3IgKGNvbnN0IHt1c2VyfSBvZiByZWNlbnRjaGFuZ2VzWydxdWVyeSddLnJlY2VudGNoYW5nZXMgYXMge3VzZXI6IHN0cmluZ31bXSkge1xuXHRcdFx0XHR1c2Vyc1t1c2Vycy5sZW5ndGhdID0gdXNlcjsgLy8gUmVwbGFjZSBgdXNlcnMucHVzaCh1c2VyKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbG9nZXZlbnRzUGFyYW1zOiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdFx0XHRsZXByb3A6ICd1c2VyJyxcblx0XHRcdFx0bGVsaW1pdDogNTAwLFxuXHRcdFx0XHRsZXN0YXJ0OiByY3N0YXJ0LFxuXHRcdFx0XHRsZWVuZDogcmNlbmQsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgbG9nZXZlbnRzID0gYXdhaXQgYXBpLmdldChsb2dldmVudHNQYXJhbXMpO1xuXG5cdFx0XHRmb3IgKGNvbnN0IHt1c2VyfSBvZiBsb2dldmVudHNbJ3F1ZXJ5J10ubG9nZXZlbnRzIGFzIHt1c2VyOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0dXNlcnNFeHRbdXNlcnNFeHQubGVuZ3RoXSA9IHVzZXI7IC8vIFJlcGxhY2UgYHVzZXJzRXh0LnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0fVxuXHRcdFx0Ly8g55So5oi35ZCN5YiX6KGo5ZCI5bm244CB5Y676YeN44CB5YiG5YmyXG5cdFx0XHR1c2VycyA9IFsuLi5uZXcgU2V0KFsuLi51c2VycywgLi4udXNlcnNFeHRdKV07XG5cdFx0XHRjb25zdCBwcm9taXNlczogKCgpID0+IFByb21pc2U8dm9pZD4pW10gPSBbXTtcblx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCAodXNlcnMubGVuZ3RoICsgNTApIC8gNTA7IGkrKykge1xuXHRcdFx0XHRwcm9taXNlc1twcm9taXNlcy5sZW5ndGhdID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdFx0bGlzdDogJ3VzZXJzJyxcblx0XHRcdFx0XHRcdHVzdXNlcnM6IHVzZXJzLnNsaWNlKGkgKiA1MCwgKGkgKyAxKSAqIDUwKS5qb2luKCd8JyksXG5cdFx0XHRcdFx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRcdFx0XHRmb3IgKGNvbnN0IHtncm91cHMsIG5hbWV9IG9mIHJlc3BvbnNlWydxdWVyeSddLnVzZXJzIGFzIHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W10pIHtcblx0XHRcdFx0XHRcdC8vIOaJvuWIsOeuoeeQhuS6uuWRmO+8jOWOu+mZpOacuuWZqOS6uu+8jOa2iOmZpG5hbWXnmoTnqbrlgLxcblx0XHRcdFx0XHRcdGlmIChncm91cHMuaW5jbHVkZXMoJ2JvdCcpIHx8IEJMQUNLX0xJU1QuaW5jbHVkZXMobmFtZSkgfHwgIW5hbWUpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzdGV3YXJkJykpIHtcblx0XHRcdFx0XHRcdFx0c3Rld2FyZHNbc3Rld2FyZHMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdzeXNvcCcpKSB7XG5cdFx0XHRcdFx0XHRcdGFkbWluc1thZG1pbnMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdwYXRyb2xsZXInKSkge1xuXHRcdFx0XHRcdFx0XHRwYXRyb2xsZXJzW3BhdHJvbGxlcnMubGVuZ3RoXSA9IG5hbWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9OyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHRcdH1cblx0XHRcdC8vIOafpeivoueUqOaIt+adg+mZkFxuXHRcdFx0Zm9yIChjb25zdCBwcm9taXNlIG9mIHByb21pc2VzKSB7XG5cdFx0XHRcdGF3YWl0IHByb21pc2UoKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHVzZXJsaW5rID0gKHVzZXI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdGNvbnN0IF91c2VyOiBzdHJpbmcgPSB1c2VyXG5cdFx0XHRcdFx0LnJlcGxhY2UoLyYvZywgJyZhbXA7Jylcblx0XHRcdFx0XHQucmVwbGFjZSgvPC9nLCAnJmx0OycpXG5cdFx0XHRcdFx0LnJlcGxhY2UoLz4vZywgJyZsdDsnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cdFx0XHRcdHJldHVybiBgPGxpPjxhIGhyZWY9XCIke213LnV0aWwuZ2V0VXJsKFxuXHRcdFx0XHRcdGBVc2VyOiR7X3VzZXJ9YFxuXHRcdFx0XHQpfVwiIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHtfdXNlcn08L2E+Jm5ic3A7PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDkwJVwiPu+8iDxhIGhyZWY9XCIke213LnV0aWwuZ2V0VXJsKFxuXHRcdFx0XHRcdGBVc2VyIHRhbGs6JHtfdXNlcn1gXG5cdFx0XHRcdCl9XCIgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj7nlZnoqIA8L2E+77yJPC9zcGFuPjwvbGk+YDtcblx0XHRcdH07XG5cdFx0XHRpZiAoc3Rld2FyZHMubGVuZ3RoICsgYWRtaW5zLmxlbmd0aCArIHBhdHJvbGxlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjb25zdCBhZG1pbnNzdHJpbmc6IHN0cmluZ1tdID0gW2A8cD4ke2dldE1lc3NhZ2UoJ09ubGluZVdpdGhpbjMwTWludXRlcycpfTwvcD5gXTtcblx0XHRcdFx0Y29uc3Qgb25saW5lQ291bnRUZXh0OiBzdHJpbmcgPSBnZXRNZXNzYWdlKCcgKCQxIG9ubGluZSk6Jyk7XG5cdFx0XHRcdGlmIChzdGV3YXJkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0YWRtaW5zc3RyaW5nW2FkbWluc3N0cmluZy5sZW5ndGhdID1cblx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwib25saW5lYWRtaW4tc2VjdGlvblwiPiR7Z2V0TWVzc2FnZSgnU3Rld2FyZHMnKX0ke29ubGluZUNvdW50VGV4dC5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHQnJDEnLFxuXHRcdFx0XHRcdFx0XHRTdHJpbmcoc3Rld2FyZHMubGVuZ3RoKVxuXHRcdFx0XHRcdFx0KX08dWwgY2xhc3M9XCJvbmxpbmVhZG1pbi1saXN0XCI+YDtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygc3Rld2FyZHMpIHtcblx0XHRcdFx0XHRcdGFkbWluc3N0cmluZ1thZG1pbnNzdHJpbmcubGVuZ3RoXSA9IHVzZXJsaW5rKGVsZW1lbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhZG1pbnNzdHJpbmdbYWRtaW5zc3RyaW5nLmxlbmd0aF0gPSAnPC91bD48L2Rpdj4nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChhZG1pbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGFkbWluc3N0cmluZ1thZG1pbnNzdHJpbmcubGVuZ3RoXSA9XG5cdFx0XHRcdFx0XHRgPGRpdiBjbGFzcz1cIm9ubGluZWFkbWluLXNlY3Rpb25cIj4ke2dldE1lc3NhZ2UoJ0FkbWlucycpfSR7b25saW5lQ291bnRUZXh0LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRcdCckMScsXG5cdFx0XHRcdFx0XHRcdFN0cmluZyhhZG1pbnMubGVuZ3RoKVxuXHRcdFx0XHRcdFx0KX08dWwgY2xhc3M9XCJvbmxpbmVhZG1pbi1saXN0XCI+YDtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYWRtaW5zKSB7XG5cdFx0XHRcdFx0XHRhZG1pbnNzdHJpbmdbYWRtaW5zc3RyaW5nLmxlbmd0aF0gPSB1c2VybGluayhlbGVtZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWRtaW5zc3RyaW5nW2FkbWluc3N0cmluZy5sZW5ndGhdID0gJzwvdWw+PC9kaXY+Jztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocGF0cm9sbGVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0YWRtaW5zc3RyaW5nW2FkbWluc3N0cmluZy5sZW5ndGhdID1cblx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwib25saW5lYWRtaW4tc2VjdGlvblwiPiR7Z2V0TWVzc2FnZSgnUGF0cm9sbGVycycpfSR7b25saW5lQ291bnRUZXh0LnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRcdCckMScsXG5cdFx0XHRcdFx0XHRcdFN0cmluZyhwYXRyb2xsZXJzLmxlbmd0aClcblx0XHRcdFx0XHRcdCl9PHVsIGNsYXNzPVwib25saW5lYWRtaW4tbGlzdFwiPmA7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHBhdHJvbGxlcnMpIHtcblx0XHRcdFx0XHRcdGFkbWluc3N0cmluZ1thZG1pbnNzdHJpbmcubGVuZ3RoXSA9IHVzZXJsaW5rKGVsZW1lbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhZG1pbnNzdHJpbmdbYWRtaW5zc3RyaW5nLmxlbmd0aF0gPSAnPC91bD48L2Rpdj4nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KCQoYWRtaW5zc3RyaW5nLmpvaW4oJycpKSwge3RhZzogJ29ubGluZUFkbWlucyd9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ05vT25saW5lJyksIHtcblx0XHRcdFx0XHR0YWc6ICdvbmxpbmVBZG1pbnMnLFxuXHRcdFx0XHRcdHR5cGU6ICd3YXJuJyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksIHt0YWc6ICdvbmxpbmVBZG1pbnMnLCB0eXBlOiAnZXJyb3InfSk7XG5cdFx0fVxuXHR9O1xuXHQvLyBCaW5kIGNsaWNrIGxpc3RlbmVyXG5cdGlmICghcG9ydGxldExpbmtPbmxpbmUpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0JChwb3J0bGV0TGlua09ubGluZSlcblx0XHQuZmluZCgnYScpXG5cdFx0Lm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0dm9pZCBkb0NsaWNrKGV2ZW50KTtcblx0XHR9KTtcbn07XG4iLCAiaW1wb3J0IHtvbmxpbmVBZG1pbnN9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuJChvbmxpbmVBZG1pbnMpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGFBQXVCLENBQUMsT0FBTzs7QUNBckMsSUFBQUMsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sa0JBQUEsR0FBaUJGLGtCQUFBRyxVQUFTO01BQ3pCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsU0FBQSxHQUFRTixrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLGFBQUEsR0FBWVAsa0JBQUFHLFVBQVM7TUFDcEJDLElBQUk7TUFD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Q0FBQztBQUNIOztBQzlKQTZFLEVBQUUxRixZQUFZOyIsCiAgIm5hbWVzIjogWyJCTEFDS19MSVNUIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkFkbWlucyIsICJQYXRyb2xsZXJzIiwgIlN0ZXdhcmRzIiwgIk5vT25saW5lIiwgIk9ubGluZSIsICJPbmxpbmVXaXRoaW4zME1pbnV0ZXMiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJvbmxpbmVBZG1pbnMiLCAicG9ydGxldElkIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicG9ydGxldExpbmtPbmxpbmUiLCAibXciLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJhcGkiLCAiaW5pdE13QXBpIiwgImRvQ2xpY2siLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJ1c2VycyIsICJ1c2Vyc0V4dCIsICJzdGV3YXJkcyIsICJhZG1pbnMiLCAicGF0cm9sbGVycyIsICJ0aW1lIiwgIkRhdGUiLCAicmNzdGFydCIsICJ0b0lTT1N0cmluZyIsICJzZXRNaW51dGVzIiwgImdldE1pbnV0ZXMiLCAicmNlbmQiLCAicmVjZW50Y2hhbmdlc1BhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgInJjcHJvcCIsICJyY3Nob3ciLCAicmNsaW1pdCIsICJyZWNlbnRjaGFuZ2VzIiwgImdldCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidXNlciIsICJ2YWx1ZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJsb2dldmVudHNQYXJhbXMiLCAibGVwcm9wIiwgImxlbGltaXQiLCAibGVzdGFydCIsICJsZWVuZCIsICJsb2dldmVudHMiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiU2V0IiwgInByb21pc2VzIiwgImkiLCAicGFyYW1zIiwgImZvcm1hdCIsICJ1c3VzZXJzIiwgInNsaWNlIiwgImpvaW4iLCAidXNwcm9wIiwgInJlc3BvbnNlIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImdyb3VwcyIsICJuYW1lIiwgImluY2x1ZGVzIiwgIl9pIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgInVzZXJsaW5rIiwgIl91c2VyIiwgInJlcGxhY2UiLCAiY29uY2F0IiwgImdldFVybCIsICJhZG1pbnNzdHJpbmciLCAib25saW5lQ291bnRUZXh0IiwgIlN0cmluZyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJlbGVtZW50IiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgIm5vdGlmeSIsICIkIiwgInRhZyIsICJ0eXBlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJmaW5kIiwgIm9uIl0KfQo=
