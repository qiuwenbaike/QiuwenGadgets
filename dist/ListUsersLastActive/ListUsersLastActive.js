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
      action: "query",
      format: "json",
      formatversion: "2",
      list: "usercontribs",
      ucdir: "older",
      uclimit: 1,
      ucprop: "timestamp",
      ucuser
    };
    const response = yield api.post(params);
    return response;
  });
  return function queryUserContribs2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var queryLogEvents = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (leuser) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      list: "logevents",
      lelimit: 1,
      leprop: "timestamp",
      leuser
    };
    const response = yield api.post(params);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvbW9kdWxlcy91dGlsL2FkanVzdFRpbWUudHMiLCAic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvb3B0aW9ucy5qc29uIiwgInNyYy9MaXN0VXNlcnNMYXN0QWN0aXZlL21vZHVsZXMvYXBpLnRzIiwgInNyYy9MaXN0VXNlcnNMYXN0QWN0aXZlL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9tb2R1bGVzL2NoZWNrTGFzdEFjdGl2ZS50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9MaXN0VXNlcnNMYXN0QWN0aXZlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBhZGRMZWFkaW5nWmVybyA9IChudW1iZXI6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IG51bWJlclN0cmluZzogc3RyaW5nID1cblx0XHR0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJyAmJiBudW1iZXIgPCAxMCA/IGAwJHtudW1iZXIudG9TdHJpbmcoKX1gIDogbnVtYmVyLnRvU3RyaW5nKCk7XG5cblx0cmV0dXJuIG51bWJlclN0cmluZztcbn07XG5cbmNvbnN0IGFkanVzdFRpbWUgPSAodGltZTogRGF0ZSk6IHN0cmluZyA9PiB7XG5cdGxldCBkYXRlOiBzdHJpbmc7XG5cblx0bGV0IHRvZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgeWVzdGVyZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgdG9tb3Jyb3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXHR5ZXN0ZXJkYXkuc2V0RGF0ZSh5ZXN0ZXJkYXkuZ2V0RGF0ZSgpIC0gMSk7XG5cdHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XG5cblx0Ly8gZGV0ZXJtaW5lIHRoZSB0aW1lIG9mZnNldFxuXHRjb25zdCB1dGNPZmZzZXQ6IG51bWJlciA9ICgtMSAqIHRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSkgLyA2MDtcblx0Y29uc3QgdXRjT2Zmc2V0VG9TdHJpbmc6IHN0cmluZyA9IHV0Y09mZnNldCA+PSAwID8gYCske3V0Y09mZnNldH1gIDogYOKIkiR7TWF0aC5hYnModXRjT2Zmc2V0KX1gO1xuXG5cdC8vIHNldCB0aGUgZGF0ZSBiaXRzIHRvIG91dHB1dFxuXHRjb25zdCB5ZWFyOiBudW1iZXIgPSB0aW1lLmdldEZ1bGxZZWFyKCk7XG5cdGNvbnN0IG1vbnRoOiBzdHJpbmcgPSBhZGRMZWFkaW5nWmVybyh0aW1lLmdldE1vbnRoKCkgKyAxKTtcblx0Y29uc3QgZGF5OiBudW1iZXIgPSB0aW1lLmdldERhdGUoKTtcblx0Y29uc3QgaG91cjogbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KHRpbWUuZ2V0SG91cnMoKS50b1N0cmluZygpLCAxMCk7XG5cdGNvbnN0IG1pbnV0ZTogc3RyaW5nID0gYWRkTGVhZGluZ1plcm8odGltZS5nZXRNaW51dGVzKCkpO1xuXG5cdC8vIHJldHVybiAndG9kYXknIG9yICd5ZXN0ZXJkYXknIGlmIHRoYXQgaXMgdGhlIGNhc2Vcblx0aWYgKHllYXIgPT09IHRvZGF5LmdldEZ1bGxZZWFyKCkgJiYgbW9udGggPT09IGFkZExlYWRpbmdaZXJvKHRvZGF5LmdldE1vbnRoKCkgKyAxKSAmJiBkYXkgPT09IHRvZGF5LmdldERhdGUoKSkge1xuXHRcdGRhdGUgPSAn5LuK5aSpJztcblx0fSBlbHNlIGlmIChcblx0XHR5ZWFyID09PSB5ZXN0ZXJkYXkuZ2V0RnVsbFllYXIoKSAmJlxuXHRcdG1vbnRoID09PSBhZGRMZWFkaW5nWmVybyh5ZXN0ZXJkYXkuZ2V0TW9udGgoKSArIDEpICYmXG5cdFx0ZGF5ID09PSB5ZXN0ZXJkYXkuZ2V0RGF0ZSgpXG5cdCkge1xuXHRcdGRhdGUgPSAn5pio5aSpJztcblx0fSBlbHNlIGlmIChcblx0XHR5ZWFyID09PSB0b21vcnJvdy5nZXRGdWxsWWVhcigpICYmXG5cdFx0bW9udGggPT09IGFkZExlYWRpbmdaZXJvKHRvbW9ycm93LmdldE1vbnRoKCkgKyAxKSAmJlxuXHRcdGRheSA9PT0gdG9tb3Jyb3cuZ2V0RGF0ZSgpXG5cdCkge1xuXHRcdGRhdGUgPSAn5piO5aSpJztcblx0fSBlbHNlIHtcblx0XHR0b2RheSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSk7XG5cdFx0dGltZSA9IG5ldyBEYXRlKHRpbWUuZ2V0RnVsbFllYXIoKSwgdGltZS5nZXRNb250aCgpLCB0aW1lLmdldERhdGUoKSk7XG5cdFx0ZGF0ZSA9IGAke3llYXJ95bm0JHthZGRMZWFkaW5nWmVybyhtb250aCl95pyIJHthZGRMZWFkaW5nWmVybyhkYXkpfeaXpWA7XG5cdH1cblxuXHRjb25zdCBob3VyTWludXRlOiBzdHJpbmcgPSBgJHthZGRMZWFkaW5nWmVybyhob3VyKX06JHttaW51dGV9IGA7XG5cblx0cmV0dXJuIGAke2RhdGV9LCAke2hvdXJNaW51dGV9IChVVEMke3V0Y09mZnNldFRvU3RyaW5nfSlgO1xufTtcblxuZXhwb3J0IHthZGp1c3RUaW1lfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBMaXN0VXNlcnNMYXN0QWN0aXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCcoJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcgKCcsXG5cdFx0XHR6aDogJ++8iCcsXG5cdFx0fSksXG5cdFx0JyknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJykgJyxcblx0XHRcdHpoOiAn77yJJyxcblx0XHR9KSxcblx0XHQnTGFzdCBhY3RpdmUgb24nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xhc3QgYWN0aXZlIG9uICQxJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acgOWQjuaTjeS9nOS6jiQxJyxcblx0XHRcdCd6aC1oYW50JzogJ+acgOW+jOWLleS9nOaWvCQxJyxcblx0XHR9KSxcblx0XHQnTmV2ZXIgYWN0aXZlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdOZXZlciBhY3RpdmUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LuO5pyq5pyJ5pON5L2cJyxcblx0XHRcdCd6aC1oYW50JzogJ+W+nuacquacieWLleS9nCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7YWRqdXN0VGltZX0gZnJvbSAnLi91dGlsL2FkanVzdFRpbWUnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcXVlcnlVc2VyQ29udHJpYnMgPSBhc3luYyAodWN1c2VyOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJDb250cmlic1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICd1c2VyY29udHJpYnMnLFxuXHRcdHVjZGlyOiAnb2xkZXInLFxuXHRcdHVjbGltaXQ6IDEsXG5cdFx0dWNwcm9wOiAndGltZXN0YW1wJyxcblx0XHR1Y3VzZXIsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBxdWVyeUxvZ0V2ZW50cyA9IGFzeW5jIChsZXVzZXI6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5TG9nRXZlbnRzUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0bGVsaW1pdDogMSxcblx0XHRsZXByb3A6ICd0aW1lc3RhbXAnLFxuXHRcdGxldXNlcixcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGNoZWNrTGFzdEFjdGl2ZSA9IGFzeW5jICgkZWxlbWVudDogSlF1ZXJ5KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHVzZXJOYW1lOiBzdHJpbmcgPSAkZWxlbWVudC5maW5kKCcubXctdXNlcmxpbmsgPiBiZGknKS50ZXh0KCk7XG5cdGxldCBtYXhEYXRlOiBEYXRlIHwgdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgdXNlckNvbnRyaWJzID0gYXdhaXQgcXVlcnlVc2VyQ29udHJpYnModXNlck5hbWUpO1xuXHRcdGlmICh1c2VyQ29udHJpYnNbJ3F1ZXJ5J10udXNlcmNvbnRyaWJzWzBdKSB7XG5cdFx0XHRtYXhEYXRlID0gbmV3IERhdGUodXNlckNvbnRyaWJzWydxdWVyeSddLnVzZXJjb250cmlic1swXS50aW1lc3RhbXAgYXMgbnVtYmVyKTtcblx0XHR9XG5cblx0XHRjb25zdCBsb2dFdmVudHMgPSBhd2FpdCBxdWVyeUxvZ0V2ZW50cyh1c2VyTmFtZSk7XG5cdFx0aWYgKGxvZ0V2ZW50c1sncXVlcnknXS5sb2dldmVudHNbMF0pIHtcblx0XHRcdGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZShsb2dFdmVudHNbJ3F1ZXJ5J10ubG9nZXZlbnRzWzBdLnRpbWVzdGFtcCBhcyBudW1iZXIpO1xuXHRcdFx0aWYgKCFtYXhEYXRlIHx8IGRhdGUgPiBtYXhEYXRlKSB7XG5cdFx0XHRcdG1heERhdGUgPSBkYXRlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGxhc3RBY3RpdmVNZXNzYWdlOiBzdHJpbmcgPVxuXHRcdFx0Z2V0TWVzc2FnZSgnKCcpICtcblx0XHRcdChtYXhEYXRlID8gZ2V0TWVzc2FnZSgnTGFzdCBhY3RpdmUgb24nKS5yZXBsYWNlKCckMScsIGFkanVzdFRpbWUobWF4RGF0ZSkpIDogZ2V0TWVzc2FnZSgnTmV2ZXIgYWN0aXZlJykpICtcblx0XHRcdGdldE1lc3NhZ2UoJyknKTtcblxuXHRcdCRlbGVtZW50LmFwcGVuZChsYXN0QWN0aXZlTWVzc2FnZSk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0xpc3RVc2Vyc0xhc3RBY3RpdmVdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR9XG59O1xuXG5leHBvcnQge2NoZWNrTGFzdEFjdGl2ZX07XG4iLCAiLyoqXG4gKiDkuo5bW1NwZWNpYWw6TGlzdHVzZXJzXV3mmL7npLrkvb/nlKjogIXmnIDlkI7nvJbovpHml7bpl7RcbiAqL1xuaW1wb3J0IHtjaGVja0xhc3RBY3RpdmV9IGZyb20gJy4vbW9kdWxlcy9jaGVja0xhc3RBY3RpdmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdMaXN0dXNlcnMnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQ+dWw+bGknKSkge1xuXHRcdHZvaWQgY2hlY2tMYXN0QWN0aXZlKCQoZWxlbWVudCkpO1xuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsaUJBQWtCQyxZQUFvQztBQUMzRCxRQUFNQyxlQUNMLE9BQU9ELFdBQVcsWUFBWUEsU0FBUyxLQUFBLElBQUFFLE9BQVNGLE9BQU9HLFNBQVMsQ0FBQyxJQUFLSCxPQUFPRyxTQUFTO0FBRXZGLFNBQU9GO0FBQ1I7QUFFQSxJQUFNRyxhQUFjQyxVQUF1QjtBQUMxQyxNQUFJQztBQUVKLE1BQUlDLFFBQWMsb0JBQUlDLEtBQUs7QUFDM0IsUUFBTUMsWUFBa0Isb0JBQUlELEtBQUs7QUFDakMsUUFBTUUsV0FBaUIsb0JBQUlGLEtBQUs7QUFDaENDLFlBQVVFLFFBQVFGLFVBQVVHLFFBQVEsSUFBSSxDQUFDO0FBQ3pDRixXQUFTQyxRQUFRRCxTQUFTRSxRQUFRLElBQUksQ0FBQztBQUd2QyxRQUFNQyxZQUFxQixLQUFLUixLQUFLUyxrQkFBa0IsSUFBSztBQUM1RCxRQUFNQyxvQkFBNEJGLGFBQWEsSUFBQSxJQUFBWCxPQUFRVyxTQUFTLElBQUEsSUFBQVgsT0FBU2MsS0FBS0MsSUFBSUosU0FBUyxDQUFDO0FBRzVGLFFBQU1LLE9BQWViLEtBQUtjLFlBQVk7QUFDdEMsUUFBTUMsUUFBZ0JyQixlQUFlTSxLQUFLZ0IsU0FBUyxJQUFJLENBQUM7QUFDeEQsUUFBTUMsTUFBY2pCLEtBQUtPLFFBQVE7QUFDakMsUUFBTVcsT0FBZUMsT0FBT0MsU0FBU3BCLEtBQUtxQixT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QkFBQWlCLEtBQUE7QUFBQSxXQUFBaEIsTUFBQVQsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBQy9CTixJQUFBeUIscUJBQXNCcEQsUUFBQSxpQkFBQTtBQUV0QixNQUFBLEdBQUtvRCxtQkFBQUMsU0FBUSxFQUFFQyxLQUFNQyxXQUF5QztBQUM3RCxRQUFNO0lBQUNDO0VBQTBCLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFbkQsTUFBSUgsK0JBQStCLGFBQWE7QUFDL0M7RUFDRDtBQUFBLE1BQUFJLFlBQUFDLDJCQUVzQk4sTUFBTWpCLEtBQUssd0JBQXdCLENBQUEsR0FBQXdCO0FBQUEsTUFBQTtBQUF6RCxTQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUE0RDtBQUFBLFlBQWpEQyxVQUFBSixNQUFBSztBQUNWLFdBQUtqQyxnQkFBZ0JrQyxFQUFFRixPQUFPLENBQUM7SUFDaEM7RUFBQSxTQUFBRyxLQUFBO0FBQUFULGNBQUFVLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFULGNBQUFXLEVBQUE7RUFBQTtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbImFkZExlYWRpbmdaZXJvIiwgIm51bWJlciIsICJudW1iZXJTdHJpbmciLCAiY29uY2F0IiwgInRvU3RyaW5nIiwgImFkanVzdFRpbWUiLCAidGltZSIsICJkYXRlIiwgInRvZGF5IiwgIkRhdGUiLCAieWVzdGVyZGF5IiwgInRvbW9ycm93IiwgInNldERhdGUiLCAiZ2V0RGF0ZSIsICJ1dGNPZmZzZXQiLCAiZ2V0VGltZXpvbmVPZmZzZXQiLCAidXRjT2Zmc2V0VG9TdHJpbmciLCAiTWF0aCIsICJhYnMiLCAieWVhciIsICJnZXRGdWxsWWVhciIsICJtb250aCIsICJnZXRNb250aCIsICJkYXkiLCAiaG91ciIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiZ2V0SG91cnMiLCAibWludXRlIiwgImdldE1pbnV0ZXMiLCAiaG91ck1pbnV0ZSIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgInpoIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJxdWVyeVVzZXJDb250cmlicyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInVjdXNlciIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAidWNkaXIiLCAidWNsaW1pdCIsICJ1Y3Byb3AiLCAicmVzcG9uc2UiLCAicG9zdCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAicXVlcnlMb2dFdmVudHMiLCAiX3JlZjIiLCAibGV1c2VyIiwgImxlbGltaXQiLCAibGVwcm9wIiwgIl94MiIsICJjaGVja0xhc3RBY3RpdmUiLCAiX3JlZjMiLCAiJGVsZW1lbnQiLCAidXNlck5hbWUiLCAiZmluZCIsICJ0ZXh0IiwgIm1heERhdGUiLCAidXNlckNvbnRyaWJzIiwgInVzZXJjb250cmlicyIsICJ0aW1lc3RhbXAiLCAibG9nRXZlbnRzIiwgImxvZ2V2ZW50cyIsICJsYXN0QWN0aXZlTWVzc2FnZSIsICJyZXBsYWNlIiwgImFwcGVuZCIsICJlcnJvciIsICJjb25zb2xlIiwgIl94MyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgIiRib2R5IiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiJCIsICJlcnIiLCAiZSIsICJmIl0KfQo=
