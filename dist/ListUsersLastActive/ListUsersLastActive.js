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
      ucprop: "timestamp"
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
      leprop: "timestamp"
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvbW9kdWxlcy91dGlsL2FkanVzdFRpbWUudHMiLCAic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvb3B0aW9ucy5qc29uIiwgInNyYy9MaXN0VXNlcnNMYXN0QWN0aXZlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9MaXN0VXNlcnNMYXN0QWN0aXZlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9tb2R1bGVzL2NoZWNrTGFzdEFjdGl2ZS50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9MaXN0VXNlcnNMYXN0QWN0aXZlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBhZGRMZWFkaW5nWmVybyA9IChudW1iZXI6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IG51bWJlclN0cmluZzogc3RyaW5nID1cblx0XHR0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJyAmJiBudW1iZXIgPCAxMCA/IGAwJHtudW1iZXIudG9TdHJpbmcoKX1gIDogbnVtYmVyLnRvU3RyaW5nKCk7XG5cblx0cmV0dXJuIG51bWJlclN0cmluZztcbn07XG5cbmNvbnN0IGFkanVzdFRpbWUgPSAodGltZTogRGF0ZSk6IHN0cmluZyA9PiB7XG5cdGxldCBkYXRlOiBzdHJpbmc7XG5cblx0bGV0IHRvZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgeWVzdGVyZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgdG9tb3Jyb3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXHR5ZXN0ZXJkYXkuc2V0RGF0ZSh5ZXN0ZXJkYXkuZ2V0RGF0ZSgpIC0gMSk7XG5cdHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XG5cblx0Ly8gZGV0ZXJtaW5lIHRoZSB0aW1lIG9mZnNldFxuXHRjb25zdCB1dGNPZmZzZXQ6IG51bWJlciA9ICgtMSAqIHRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSkgLyA2MDtcblx0Y29uc3QgdXRjT2Zmc2V0VG9TdHJpbmc6IHN0cmluZyA9IHV0Y09mZnNldCA+PSAwID8gYCske3V0Y09mZnNldH1gIDogYOKIkiR7TWF0aC5hYnModXRjT2Zmc2V0KX1gO1xuXG5cdC8vIHNldCB0aGUgZGF0ZSBiaXRzIHRvIG91dHB1dFxuXHRjb25zdCB5ZWFyOiBudW1iZXIgPSB0aW1lLmdldEZ1bGxZZWFyKCk7XG5cdGNvbnN0IG1vbnRoOiBzdHJpbmcgPSBhZGRMZWFkaW5nWmVybyh0aW1lLmdldE1vbnRoKCkgKyAxKTtcblx0Y29uc3QgZGF5OiBudW1iZXIgPSB0aW1lLmdldERhdGUoKTtcblx0Y29uc3QgaG91cjogbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KHRpbWUuZ2V0SG91cnMoKS50b1N0cmluZygpLCAxMCk7XG5cdGNvbnN0IG1pbnV0ZTogc3RyaW5nID0gYWRkTGVhZGluZ1plcm8odGltZS5nZXRNaW51dGVzKCkpO1xuXG5cdC8vIHJldHVybiAndG9kYXknIG9yICd5ZXN0ZXJkYXknIGlmIHRoYXQgaXMgdGhlIGNhc2Vcblx0aWYgKHllYXIgPT09IHRvZGF5LmdldEZ1bGxZZWFyKCkgJiYgbW9udGggPT09IGFkZExlYWRpbmdaZXJvKHRvZGF5LmdldE1vbnRoKCkgKyAxKSAmJiBkYXkgPT09IHRvZGF5LmdldERhdGUoKSkge1xuXHRcdGRhdGUgPSAn5LuK5aSpJztcblx0fSBlbHNlIGlmIChcblx0XHR5ZWFyID09PSB5ZXN0ZXJkYXkuZ2V0RnVsbFllYXIoKSAmJlxuXHRcdG1vbnRoID09PSBhZGRMZWFkaW5nWmVybyh5ZXN0ZXJkYXkuZ2V0TW9udGgoKSArIDEpICYmXG5cdFx0ZGF5ID09PSB5ZXN0ZXJkYXkuZ2V0RGF0ZSgpXG5cdCkge1xuXHRcdGRhdGUgPSAn5pio5aSpJztcblx0fSBlbHNlIGlmIChcblx0XHR5ZWFyID09PSB0b21vcnJvdy5nZXRGdWxsWWVhcigpICYmXG5cdFx0bW9udGggPT09IGFkZExlYWRpbmdaZXJvKHRvbW9ycm93LmdldE1vbnRoKCkgKyAxKSAmJlxuXHRcdGRheSA9PT0gdG9tb3Jyb3cuZ2V0RGF0ZSgpXG5cdCkge1xuXHRcdGRhdGUgPSAn5piO5aSpJztcblx0fSBlbHNlIHtcblx0XHR0b2RheSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSk7XG5cdFx0dGltZSA9IG5ldyBEYXRlKHRpbWUuZ2V0RnVsbFllYXIoKSwgdGltZS5nZXRNb250aCgpLCB0aW1lLmdldERhdGUoKSk7XG5cdFx0ZGF0ZSA9IGAke3llYXJ95bm0JHthZGRMZWFkaW5nWmVybyhtb250aCl95pyIJHthZGRMZWFkaW5nWmVybyhkYXkpfeaXpWA7XG5cdH1cblxuXHRjb25zdCBob3VyTWludXRlOiBzdHJpbmcgPSBgJHthZGRMZWFkaW5nWmVybyhob3VyKX06JHttaW51dGV9IGA7XG5cblx0cmV0dXJuIGAke2RhdGV9LCAke2hvdXJNaW51dGV9IChVVEMke3V0Y09mZnNldFRvU3RyaW5nfSlgO1xufTtcblxuZXhwb3J0IHthZGp1c3RUaW1lfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBMaXN0VXNlcnNMYXN0QWN0aXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCcoJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0JyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJykgJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHQnTGFzdCBhY3RpdmUgb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xhc3QgYWN0aXZlIG9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acgOWQjuaTjeS9nOS6jiQxJyxcblx0XHRcdCd6aC1oYW50JzogJ+acgOW+jOWLleS9nOaWvCQxJyxcblx0XHR9KSxcblx0XHQnTmV2ZXIgYWN0aXZlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXZlciBhY3RpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LuO5pyq5pyJ5pON5L2cJyxcblx0XHRcdCd6aC1oYW50JzogJ+W+nuacquacieWLleS9nCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7YWRqdXN0VGltZX0gZnJvbSAnLi91dGlsL2FkanVzdFRpbWUnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcXVlcnlVc2VyQ29udHJpYnMgPSBhc3luYyAodWN1c2VyOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJDb250cmlic1BhcmFtcyA9IHtcblx0XHR1Y3VzZXIsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcmNvbnRyaWJzJyxcblx0XHR1Y2RpcjogJ29sZGVyJyxcblx0XHR1Y2xpbWl0OiAxLFxuXHRcdHVjcHJvcDogJ3RpbWVzdGFtcCcsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHF1ZXJ5TG9nRXZlbnRzID0gYXN5bmMgKGxldXNlcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0bGV1c2VyLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0bGVsaW1pdDogMSxcblx0XHRsZXByb3A6ICd0aW1lc3RhbXAnLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBjaGVja0xhc3RBY3RpdmUgPSBhc3luYyAoJGVsZW1lbnQ6IEpRdWVyeSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB1c2VyTmFtZTogc3RyaW5nID0gJGVsZW1lbnQuZmluZCgnLm13LXVzZXJsaW5rID4gYmRpJykudGV4dCgpO1xuXHRsZXQgbWF4RGF0ZTogRGF0ZSB8IHVuZGVmaW5lZDtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHVzZXJDb250cmlicyA9IGF3YWl0IHF1ZXJ5VXNlckNvbnRyaWJzKHVzZXJOYW1lKTtcblx0XHRpZiAodXNlckNvbnRyaWJzWydxdWVyeSddLnVzZXJjb250cmlic1swXSkge1xuXHRcdFx0bWF4RGF0ZSA9IG5ldyBEYXRlKHVzZXJDb250cmlic1sncXVlcnknXS51c2VyY29udHJpYnNbMF0udGltZXN0YW1wIGFzIG51bWJlcik7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbG9nRXZlbnRzID0gYXdhaXQgcXVlcnlMb2dFdmVudHModXNlck5hbWUpO1xuXHRcdGlmIChsb2dFdmVudHNbJ3F1ZXJ5J10ubG9nZXZlbnRzWzBdKSB7XG5cdFx0XHRjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUobG9nRXZlbnRzWydxdWVyeSddLmxvZ2V2ZW50c1swXS50aW1lc3RhbXAgYXMgbnVtYmVyKTtcblx0XHRcdGlmICghbWF4RGF0ZSB8fCBkYXRlID4gbWF4RGF0ZSkge1xuXHRcdFx0XHRtYXhEYXRlID0gZGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCBsYXN0QWN0aXZlTWVzc2FnZTogc3RyaW5nID1cblx0XHRcdGdldE1lc3NhZ2UoJygnKSArXG5cdFx0XHQobWF4RGF0ZSA/IGdldE1lc3NhZ2UoJ0xhc3QgYWN0aXZlIG9uJykucmVwbGFjZSgnJDEnLCBhZGp1c3RUaW1lKG1heERhdGUpKSA6IGdldE1lc3NhZ2UoJ05ldmVyIGFjdGl2ZScpKSArXG5cdFx0XHRnZXRNZXNzYWdlKCcpJyk7XG5cblx0XHQkZWxlbWVudC5hcHBlbmQobGFzdEFjdGl2ZU1lc3NhZ2UpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tMaXN0VXNlcnNMYXN0QWN0aXZlXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0fVxufTtcblxuZXhwb3J0IHtjaGVja0xhc3RBY3RpdmV9O1xuIiwgIi8qKlxuICog5LqOW1tTcGVjaWFsOkxpc3R1c2Vyc11d5pi+56S65L2/55So6ICF5pyA5ZCO57yW6L6R5pe26Ze0XG4gKi9cbmltcG9ydCB7Y2hlY2tMYXN0QWN0aXZlfSBmcm9tICcuL21vZHVsZXMvY2hlY2tMYXN0QWN0aXZlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lICE9PSAnTGlzdHVzZXJzJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0PnVsPmxpJykpIHtcblx0XHR2b2lkIGNoZWNrTGFzdEFjdGl2ZSgkKGVsZW1lbnQpKTtcblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsaUJBQWtCQyxZQUFvQztBQUMzRCxRQUFNQyxlQUNMLE9BQU9ELFdBQVcsWUFBWUEsU0FBUyxLQUFBLElBQUFFLE9BQVNGLE9BQU9HLFNBQVMsQ0FBQyxJQUFLSCxPQUFPRyxTQUFTO0FBRXZGLFNBQU9GO0FBQ1I7QUFFQSxJQUFNRyxhQUFjQyxVQUF1QjtBQUMxQyxNQUFJQztBQUVKLE1BQUlDLFFBQWMsb0JBQUlDLEtBQUs7QUFDM0IsUUFBTUMsWUFBa0Isb0JBQUlELEtBQUs7QUFDakMsUUFBTUUsV0FBaUIsb0JBQUlGLEtBQUs7QUFDaENDLFlBQVVFLFFBQVFGLFVBQVVHLFFBQVEsSUFBSSxDQUFDO0FBQ3pDRixXQUFTQyxRQUFRRCxTQUFTRSxRQUFRLElBQUksQ0FBQztBQUd2QyxRQUFNQyxZQUFxQixLQUFLUixLQUFLUyxrQkFBa0IsSUFBSztBQUM1RCxRQUFNQyxvQkFBNEJGLGFBQWEsSUFBQSxJQUFBWCxPQUFRVyxTQUFTLElBQUEsSUFBQVgsT0FBU2MsS0FBS0MsSUFBSUosU0FBUyxDQUFDO0FBRzVGLFFBQU1LLE9BQWViLEtBQUtjLFlBQVk7QUFDdEMsUUFBTUMsUUFBZ0JyQixlQUFlTSxLQUFLZ0IsU0FBUyxJQUFJLENBQUM7QUFDeEQsUUFBTUMsTUFBY2pCLEtBQUtPLFFBQVE7QUFDakMsUUFBTVcsT0FBZUMsT0FBT0MsU0FBU3BCLEtBQUtxQixTQUFTLEVBQUV2QixTQUFTLEdBQUcsRUFB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TUFBQVQsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBQy9CTixJQUFBeUIscUJBQXNCcEQsUUFBQSxpQkFBQTtBQUV0QixNQUFBLEdBQUtvRCxtQkFBQUMsU0FBUSxFQUFFQyxLQUFNQyxXQUF5QztBQUM3RCxRQUFNO0lBQUNDO0VBQTBCLElBQUlDLEdBQUdDLE9BQU9sQyxJQUFJO0FBRW5ELE1BQUlnQywrQkFBK0IsYUFBYTtBQUMvQztFQUNEO0FBQUEsTUFBQUcsWUFBQUMsMkJBRXNCTCxNQUFNakIsS0FBSyx3QkFBd0IsQ0FBQSxHQUFBdUI7QUFBQSxNQUFBO0FBQXpELFNBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQTREO0FBQUEsWUFBakRDLFVBQUFKLE1BQUFLO0FBQ1YsV0FBS2hDLGdCQUFnQmlDLEVBQUVGLE9BQU8sQ0FBQztJQUNoQztFQUFBLFNBQUFHLEtBQUE7QUFBQVQsY0FBQVUsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQVQsY0FBQVcsRUFBQTtFQUFBO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiYWRkTGVhZGluZ1plcm8iLCAibnVtYmVyIiwgIm51bWJlclN0cmluZyIsICJjb25jYXQiLCAidG9TdHJpbmciLCAiYWRqdXN0VGltZSIsICJ0aW1lIiwgImRhdGUiLCAidG9kYXkiLCAiRGF0ZSIsICJ5ZXN0ZXJkYXkiLCAidG9tb3Jyb3ciLCAic2V0RGF0ZSIsICJnZXREYXRlIiwgInV0Y09mZnNldCIsICJnZXRUaW1lem9uZU9mZnNldCIsICJ1dGNPZmZzZXRUb1N0cmluZyIsICJNYXRoIiwgImFicyIsICJ5ZWFyIiwgImdldEZ1bGxZZWFyIiwgIm1vbnRoIiwgImdldE1vbnRoIiwgImRheSIsICJob3VyIiwgIk51bWJlciIsICJwYXJzZUludCIsICJnZXRIb3VycyIsICJtaW51dGUiLCAiZ2V0TWludXRlcyIsICJob3VyTWludXRlIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInF1ZXJ5VXNlckNvbnRyaWJzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidWN1c2VyIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJ1Y2RpciIsICJ1Y2xpbWl0IiwgInVjcHJvcCIsICJyZXNwb25zZSIsICJnZXQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInF1ZXJ5TG9nRXZlbnRzIiwgIl9yZWYyIiwgImxldXNlciIsICJsZWxpbWl0IiwgImxlcHJvcCIsICJfeDIiLCAiY2hlY2tMYXN0QWN0aXZlIiwgIl9yZWYzIiwgIiRlbGVtZW50IiwgInVzZXJOYW1lIiwgImZpbmQiLCAidGV4dCIsICJtYXhEYXRlIiwgInVzZXJDb250cmlicyIsICJ1c2VyY29udHJpYnMiLCAidGltZXN0YW1wIiwgImxvZ0V2ZW50cyIsICJsb2dldmVudHMiLCAibGFzdEFjdGl2ZU1lc3NhZ2UiLCAicmVwbGFjZSIsICJhcHBlbmQiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeDMiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldEJvZHkiLCAidGhlbiIsICIkYm9keSIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiJCIsICJlcnIiLCAiZSIsICJmIl0KfQo=
