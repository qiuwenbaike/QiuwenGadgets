/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://meta.wikimedia.org/wiki/User:Xiplus/js/list-user-last-active.js}
 * @base {@link https://zh.wikipedia.org/w/index.php?title=MediaWiki:Gadget-CommentsinLocalTime.js&oldid=48314651}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ListUsersLastActive}
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

// dist/ListUsersLastActive/ListUsersLastActive.js
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
//! src/ListUsersLastActive/modules/util/adjustTime.ts
var addLeadingZero = (number) => {
  const numberString = typeof number === "number" && number < 10 ? "0".concat(number.toString()) : number.toString();
  return numberString;
};
var adjustTime = (time) => {
  let date;
  let today = /* @__PURE__ */ new Date();
  const yesterday = /* @__PURE__ */ new Date();
  const tomorrow = /* @__PURE__ */ new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const utcOffset = -1 * time.getTimezoneOffset() / 60;
  const utcOffsetToString = utcOffset >= 0 ? "+".concat(utcOffset) : "−".concat(Math.abs(utcOffset));
  const year = time.getFullYear();
  const month = addLeadingZero(time.getMonth() + 1);
  const day = time.getDate();
  const hour = Number.parseInt(time.getHours().toString(), 10);
  const minute = addLeadingZero(time.getMinutes());
  if (year === today.getFullYear() && month === addLeadingZero(today.getMonth() + 1) && day === today.getDate()) {
    date = "今天";
  } else if (year === yesterday.getFullYear() && month === addLeadingZero(yesterday.getMonth() + 1) && day === yesterday.getDate()) {
    date = "昨天";
  } else if (year === tomorrow.getFullYear() && month === addLeadingZero(tomorrow.getMonth() + 1) && day === tomorrow.getDate()) {
    date = "明天";
  } else {
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
    date = "".concat(year, "年").concat(addLeadingZero(month), "月").concat(addLeadingZero(day), "日");
  }
  const hourMinute = "".concat(addLeadingZero(hour), ":").concat(minute, " ");
  return "".concat(date, ", ").concat(hourMinute, " (UTC").concat(utcOffsetToString, ")");
};
//! src/ListUsersLastActive/options.json
var version = "2.0";
//! src/ListUsersLastActive/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("ListUsersLastActive/".concat(version));
//! src/ListUsersLastActive/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "(": (0, import_ext_gadget2.localize)({
      en: " (",
      zh: "（"
    }),
    ")": (0, import_ext_gadget2.localize)({
      en: ") ",
      zh: "）"
    }),
    "Last active on": (0, import_ext_gadget2.localize)({
      en: "Last active on $1",
      "zh-hans": "最后操作于$1",
      "zh-hant": "最後動作於$1"
    }),
    "Never active": (0, import_ext_gadget2.localize)({
      en: "Never active",
      "zh-hans": "从未有操作",
      "zh-hant": "從未有動作"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ListUsersLastActive/modules/checkLastActive.ts
var queryUserContribs = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (ucuser) {
    const params = {
      ucuser,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "usercontribs",
      ucdir: "older",
      uclimit: 1,
      ucprop: "timestamp",
      smaxage: 3600,
      maxage: 3600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryUserContribs2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var queryLogEvents = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (leuser) {
    const params = {
      leuser,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "logevents",
      lelimit: 1,
      leprop: "timestamp",
      maxage: 3600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryLogEvents2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var checkLastActive = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* ($element) {
    const userName = $element.find(".mw-userlink > bdi").text();
    let maxDate;
    try {
      const userContribs = yield queryUserContribs(userName);
      if (userContribs["query"].usercontribs[0]) {
        maxDate = new Date(userContribs["query"].usercontribs[0].timestamp);
      }
      const logEvents = yield queryLogEvents(userName);
      if (logEvents["query"].logevents[0]) {
        const date = new Date(logEvents["query"].logevents[0].timestamp);
        if (!maxDate || date > maxDate) {
          maxDate = date;
        }
      }
      const lastActiveMessage = getMessage("(") + (maxDate ? getMessage("Last active on").replace("$1", adjustTime(maxDate)) : getMessage("Never active")) + getMessage(")");
      $element.append(lastActiveMessage);
    } catch (error) {
      console.error("[ListUsersLastActive] Ajax error:", error);
    }
  });
  return function checkLastActive2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/ListUsersLastActive/ListUsersLastActive.ts
var import_ext_gadget3 = require("ext.gadget.Util");
void (0, import_ext_gadget3.getBody)().then(($body) => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "Listusers") {
    return;
  }
  var _iterator = _createForOfIteratorHelper($body.find("#mw-content-text>ul>li")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      void checkLastActive($(element));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvbW9kdWxlcy91dGlsL2FkanVzdFRpbWUudHMiLCAic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvb3B0aW9ucy5qc29uIiwgInNyYy9MaXN0VXNlcnNMYXN0QWN0aXZlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9MaXN0VXNlcnNMYXN0QWN0aXZlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9tb2R1bGVzL2NoZWNrTGFzdEFjdGl2ZS50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9MaXN0VXNlcnNMYXN0QWN0aXZlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBhZGRMZWFkaW5nWmVybyA9IChudW1iZXI6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IG51bWJlclN0cmluZzogc3RyaW5nID1cblx0XHR0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJyAmJiBudW1iZXIgPCAxMCA/IGAwJHtudW1iZXIudG9TdHJpbmcoKX1gIDogbnVtYmVyLnRvU3RyaW5nKCk7XG5cblx0cmV0dXJuIG51bWJlclN0cmluZztcbn07XG5cbmNvbnN0IGFkanVzdFRpbWUgPSAodGltZTogRGF0ZSk6IHN0cmluZyA9PiB7XG5cdGxldCBkYXRlOiBzdHJpbmc7XG5cblx0bGV0IHRvZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgeWVzdGVyZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgdG9tb3Jyb3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXHR5ZXN0ZXJkYXkuc2V0RGF0ZSh5ZXN0ZXJkYXkuZ2V0RGF0ZSgpIC0gMSk7XG5cdHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XG5cblx0Ly8gZGV0ZXJtaW5lIHRoZSB0aW1lIG9mZnNldFxuXHRjb25zdCB1dGNPZmZzZXQ6IG51bWJlciA9ICgtMSAqIHRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSkgLyA2MDtcblx0Y29uc3QgdXRjT2Zmc2V0VG9TdHJpbmc6IHN0cmluZyA9IHV0Y09mZnNldCA+PSAwID8gYCske3V0Y09mZnNldH1gIDogYOKIkiR7TWF0aC5hYnModXRjT2Zmc2V0KX1gO1xuXG5cdC8vIHNldCB0aGUgZGF0ZSBiaXRzIHRvIG91dHB1dFxuXHRjb25zdCB5ZWFyOiBudW1iZXIgPSB0aW1lLmdldEZ1bGxZZWFyKCk7XG5cdGNvbnN0IG1vbnRoOiBzdHJpbmcgPSBhZGRMZWFkaW5nWmVybyh0aW1lLmdldE1vbnRoKCkgKyAxKTtcblx0Y29uc3QgZGF5OiBudW1iZXIgPSB0aW1lLmdldERhdGUoKTtcblx0Y29uc3QgaG91cjogbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KHRpbWUuZ2V0SG91cnMoKS50b1N0cmluZygpLCAxMCk7XG5cdGNvbnN0IG1pbnV0ZTogc3RyaW5nID0gYWRkTGVhZGluZ1plcm8odGltZS5nZXRNaW51dGVzKCkpO1xuXG5cdC8vIHJldHVybiAndG9kYXknIG9yICd5ZXN0ZXJkYXknIGlmIHRoYXQgaXMgdGhlIGNhc2Vcblx0aWYgKHllYXIgPT09IHRvZGF5LmdldEZ1bGxZZWFyKCkgJiYgbW9udGggPT09IGFkZExlYWRpbmdaZXJvKHRvZGF5LmdldE1vbnRoKCkgKyAxKSAmJiBkYXkgPT09IHRvZGF5LmdldERhdGUoKSkge1xuXHRcdGRhdGUgPSAn5LuK5aSpJztcblx0fSBlbHNlIGlmIChcblx0XHR5ZWFyID09PSB5ZXN0ZXJkYXkuZ2V0RnVsbFllYXIoKSAmJlxuXHRcdG1vbnRoID09PSBhZGRMZWFkaW5nWmVybyh5ZXN0ZXJkYXkuZ2V0TW9udGgoKSArIDEpICYmXG5cdFx0ZGF5ID09PSB5ZXN0ZXJkYXkuZ2V0RGF0ZSgpXG5cdCkge1xuXHRcdGRhdGUgPSAn5pio5aSpJztcblx0fSBlbHNlIGlmIChcblx0XHR5ZWFyID09PSB0b21vcnJvdy5nZXRGdWxsWWVhcigpICYmXG5cdFx0bW9udGggPT09IGFkZExlYWRpbmdaZXJvKHRvbW9ycm93LmdldE1vbnRoKCkgKyAxKSAmJlxuXHRcdGRheSA9PT0gdG9tb3Jyb3cuZ2V0RGF0ZSgpXG5cdCkge1xuXHRcdGRhdGUgPSAn5piO5aSpJztcblx0fSBlbHNlIHtcblx0XHR0b2RheSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSk7XG5cdFx0dGltZSA9IG5ldyBEYXRlKHRpbWUuZ2V0RnVsbFllYXIoKSwgdGltZS5nZXRNb250aCgpLCB0aW1lLmdldERhdGUoKSk7XG5cdFx0ZGF0ZSA9IGAke3llYXJ95bm0JHthZGRMZWFkaW5nWmVybyhtb250aCl95pyIJHthZGRMZWFkaW5nWmVybyhkYXkpfeaXpWA7XG5cdH1cblxuXHRjb25zdCBob3VyTWludXRlOiBzdHJpbmcgPSBgJHthZGRMZWFkaW5nWmVybyhob3VyKX06JHttaW51dGV9IGA7XG5cblx0cmV0dXJuIGAke2RhdGV9LCAke2hvdXJNaW51dGV9IChVVEMke3V0Y09mZnNldFRvU3RyaW5nfSlgO1xufTtcblxuZXhwb3J0IHthZGp1c3RUaW1lfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBMaXN0VXNlcnNMYXN0QWN0aXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCcoJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0JyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJykgJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHQnTGFzdCBhY3RpdmUgb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xhc3QgYWN0aXZlIG9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acgOWQjuaTjeS9nOS6jiQxJyxcblx0XHRcdCd6aC1oYW50JzogJ+acgOW+jOWLleS9nOaWvCQxJyxcblx0XHR9KSxcblx0XHQnTmV2ZXIgYWN0aXZlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXZlciBhY3RpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LuO5pyq5pyJ5pON5L2cJyxcblx0XHRcdCd6aC1oYW50JzogJ+W+nuacquacieWLleS9nCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7YWRqdXN0VGltZX0gZnJvbSAnLi91dGlsL2FkanVzdFRpbWUnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcXVlcnlVc2VyQ29udHJpYnMgPSBhc3luYyAodWN1c2VyOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJDb250cmlic1BhcmFtcyA9IHtcblx0XHR1Y3VzZXIsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcmNvbnRyaWJzJyxcblx0XHR1Y2RpcjogJ29sZGVyJyxcblx0XHR1Y2xpbWl0OiAxLFxuXHRcdHVjcHJvcDogJ3RpbWVzdGFtcCcsXG5cdFx0c21heGFnZTogMzYwMCxcblx0XHRtYXhhZ2U6IDM2MDAsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHF1ZXJ5TG9nRXZlbnRzID0gYXN5bmMgKGxldXNlcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0bGV1c2VyLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0bGVsaW1pdDogMSxcblx0XHRsZXByb3A6ICd0aW1lc3RhbXAnLFxuXHRcdG1heGFnZTogMzYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgY2hlY2tMYXN0QWN0aXZlID0gYXN5bmMgKCRlbGVtZW50OiBKUXVlcnkpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgdXNlck5hbWU6IHN0cmluZyA9ICRlbGVtZW50LmZpbmQoJy5tdy11c2VybGluayA+IGJkaScpLnRleHQoKTtcblx0bGV0IG1heERhdGU6IERhdGUgfCB1bmRlZmluZWQ7XG5cblx0dHJ5IHtcblx0XHRjb25zdCB1c2VyQ29udHJpYnMgPSBhd2FpdCBxdWVyeVVzZXJDb250cmlicyh1c2VyTmFtZSk7XG5cdFx0aWYgKHVzZXJDb250cmlic1sncXVlcnknXS51c2VyY29udHJpYnNbMF0pIHtcblx0XHRcdG1heERhdGUgPSBuZXcgRGF0ZSh1c2VyQ29udHJpYnNbJ3F1ZXJ5J10udXNlcmNvbnRyaWJzWzBdLnRpbWVzdGFtcCBhcyBudW1iZXIpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGxvZ0V2ZW50cyA9IGF3YWl0IHF1ZXJ5TG9nRXZlbnRzKHVzZXJOYW1lKTtcblx0XHRpZiAobG9nRXZlbnRzWydxdWVyeSddLmxvZ2V2ZW50c1swXSkge1xuXHRcdFx0Y29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKGxvZ0V2ZW50c1sncXVlcnknXS5sb2dldmVudHNbMF0udGltZXN0YW1wIGFzIG51bWJlcik7XG5cdFx0XHRpZiAoIW1heERhdGUgfHwgZGF0ZSA+IG1heERhdGUpIHtcblx0XHRcdFx0bWF4RGF0ZSA9IGRhdGU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgbGFzdEFjdGl2ZU1lc3NhZ2U6IHN0cmluZyA9XG5cdFx0XHRnZXRNZXNzYWdlKCcoJykgK1xuXHRcdFx0KG1heERhdGUgPyBnZXRNZXNzYWdlKCdMYXN0IGFjdGl2ZSBvbicpLnJlcGxhY2UoJyQxJywgYWRqdXN0VGltZShtYXhEYXRlKSkgOiBnZXRNZXNzYWdlKCdOZXZlciBhY3RpdmUnKSkgK1xuXHRcdFx0Z2V0TWVzc2FnZSgnKScpO1xuXG5cdFx0JGVsZW1lbnQuYXBwZW5kKGxhc3RBY3RpdmVNZXNzYWdlKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbTGlzdFVzZXJzTGFzdEFjdGl2ZV0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y2hlY2tMYXN0QWN0aXZlfTtcbiIsICIvKipcbiAqIOS6jltbU3BlY2lhbDpMaXN0dXNlcnNdXeaYvuekuuS9v+eUqOiAheacgOWQjue8lui+keaXtumXtFxuICovXG5pbXBvcnQge2NoZWNrTGFzdEFjdGl2ZX0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrTGFzdEFjdGl2ZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSAhPT0gJ0xpc3R1c2VycycpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dD51bD5saScpKSB7XG5cdFx0dm9pZCBjaGVja0xhc3RBY3RpdmUoJChlbGVtZW50KSk7XG5cdH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGlCQUFrQkMsWUFBb0M7QUFDM0QsUUFBTUMsZUFDTCxPQUFPRCxXQUFXLFlBQVlBLFNBQVMsS0FBQSxJQUFBRSxPQUFTRixPQUFPRyxTQUFTLENBQUMsSUFBS0gsT0FBT0csU0FBUztBQUV2RixTQUFPRjtBQUNSO0FBRUEsSUFBTUcsYUFBY0MsVUFBdUI7QUFDMUMsTUFBSUM7QUFFSixNQUFJQyxRQUFjLG9CQUFJQyxLQUFLO0FBQzNCLFFBQU1DLFlBQWtCLG9CQUFJRCxLQUFLO0FBQ2pDLFFBQU1FLFdBQWlCLG9CQUFJRixLQUFLO0FBQ2hDQyxZQUFVRSxRQUFRRixVQUFVRyxRQUFRLElBQUksQ0FBQztBQUN6Q0YsV0FBU0MsUUFBUUQsU0FBU0UsUUFBUSxJQUFJLENBQUM7QUFHdkMsUUFBTUMsWUFBcUIsS0FBS1IsS0FBS1Msa0JBQWtCLElBQUs7QUFDNUQsUUFBTUMsb0JBQTRCRixhQUFhLElBQUEsSUFBQVgsT0FBUVcsU0FBUyxJQUFBLElBQUFYLE9BQVNjLEtBQUtDLElBQUlKLFNBQVMsQ0FBQztBQUc1RixRQUFNSyxPQUFlYixLQUFLYyxZQUFZO0FBQ3RDLFFBQU1DLFFBQWdCckIsZUFBZU0sS0FBS2dCLFNBQVMsSUFBSSxDQUFDO0FBQ3hELFFBQU1DLE1BQWNqQixLQUFLTyxRQUFRO0FBQ2pD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U0csT0FBZ0I7QUFDeEJDLGNBQVFELE1BQU0scUNBQXFDQSxLQUFLO0lBQ3pEO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0EzQk1mLGlCQUFBaUIsS0FBQTtBQUFBLFdBQUFoQixNQUFBVCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDbENOLElBQUF5QixxQkFBc0J0RCxRQUFBLGlCQUFBO0FBRXRCLE1BQUEsR0FBS3NELG1CQUFBQyxTQUFRLEVBQUVDLEtBQU1DLFdBQXlDO0FBQzdELFFBQU07SUFBQ0M7RUFBMEIsSUFBSUMsR0FBR0MsT0FBT2xDLElBQUk7QUFFbkQsTUFBSWdDLCtCQUErQixhQUFhO0FBQy9DO0VBQ0Q7QUFBQSxNQUFBRyxZQUFBQywyQkFFc0JMLE1BQU1qQixLQUFLLHdCQUF3QixDQUFBLEdBQUF1QjtBQUFBLE1BQUE7QUFBekQsU0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBNEQ7QUFBQSxZQUFqREMsVUFBQUosTUFBQUs7QUFDVixXQUFLaEMsZ0JBQWdCaUMsRUFBRUYsT0FBTyxDQUFDO0lBQ2hDO0VBQUEsU0FBQUcsS0FBQTtBQUFBVCxjQUFBVSxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBVCxjQUFBVyxFQUFBO0VBQUE7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJhZGRMZWFkaW5nWmVybyIsICJudW1iZXIiLCAibnVtYmVyU3RyaW5nIiwgImNvbmNhdCIsICJ0b1N0cmluZyIsICJhZGp1c3RUaW1lIiwgInRpbWUiLCAiZGF0ZSIsICJ0b2RheSIsICJEYXRlIiwgInllc3RlcmRheSIsICJ0b21vcnJvdyIsICJzZXREYXRlIiwgImdldERhdGUiLCAidXRjT2Zmc2V0IiwgImdldFRpbWV6b25lT2Zmc2V0IiwgInV0Y09mZnNldFRvU3RyaW5nIiwgIk1hdGgiLCAiYWJzIiwgInllYXIiLCAiZ2V0RnVsbFllYXIiLCAibW9udGgiLCAiZ2V0TW9udGgiLCAiZGF5IiwgImhvdXIiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgImdldEhvdXJzIiwgIm1pbnV0ZSIsICJnZXRNaW51dGVzIiwgImhvdXJNaW51dGUiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicXVlcnlVc2VyQ29udHJpYnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ1Y3VzZXIiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJsaXN0IiwgInVjZGlyIiwgInVjbGltaXQiLCAidWNwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3BvbnNlIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicXVlcnlMb2dFdmVudHMiLCAiX3JlZjIiLCAibGV1c2VyIiwgImxlbGltaXQiLCAibGVwcm9wIiwgIl94MiIsICJjaGVja0xhc3RBY3RpdmUiLCAiX3JlZjMiLCAiJGVsZW1lbnQiLCAidXNlck5hbWUiLCAiZmluZCIsICJ0ZXh0IiwgIm1heERhdGUiLCAidXNlckNvbnRyaWJzIiwgInVzZXJjb250cmlicyIsICJ0aW1lc3RhbXAiLCAibG9nRXZlbnRzIiwgImxvZ2V2ZW50cyIsICJsYXN0QWN0aXZlTWVzc2FnZSIsICJyZXBsYWNlIiwgImFwcGVuZCIsICJlcnJvciIsICJjb25zb2xlIiwgIl94MyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgIiRib2R5IiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkIiwgImVyciIsICJlIiwgImYiXQp9Cg==
