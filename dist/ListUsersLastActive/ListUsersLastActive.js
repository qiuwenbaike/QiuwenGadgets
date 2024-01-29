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
//! src/ListUsersLastActive/modules/constant.ts
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
var WG_CANONICAL_SPECIAL_PAGE_NAME = mw.config.get("wgCanonicalSpecialPageName");
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
//! src/ListUsersLastActive/modules/checkLastActive.ts
var checkLastActive = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* ($element) {
    const userName = $element.find(".mw-userlink>bdi").text();
    const logEventsParams = {
      action: "query",
      formatversion: "2",
      list: "logevents",
      lelimit: 1,
      leprop: "timestamp",
      leuser: userName
    };
    const userContribsParams = {
      action: "query",
      format: "json",
      formatversion: "2",
      list: "usercontribs",
      ucdir: "older",
      uclimit: 1,
      ucprop: "timestamp",
      ucuser: userName
    };
    let maxDate;
    try {
      const userContribs = yield api.get(userContribsParams);
      if (userContribs["query"].usercontribs[0]) {
        maxDate = new Date(userContribs["query"].usercontribs[0].timestamp);
      }
      const logEvents = yield api.get(logEventsParams);
      if (logEvents["query"].logevents[0]) {
        const date = new Date(logEvents["query"].logevents[0].timestamp);
        if (!maxDate || date > maxDate) {
          maxDate = date;
        }
      }
      const lastActiveMessage = maxDate ? "（".concat(window.wgULS("最后操作于", "最後動作於")).concat(adjustTime(maxDate), "）") : "（".concat(window.wgULS("从未有操作", "從未有動作"), "）");
      $element.append(lastActiveMessage);
    } catch (error) {
      console.error("[ListUsersLastActive] Ajax error:", error);
    }
  });
  return function checkLastActive2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/ListUsersLastActive/ListUsersLastActive.ts
var import_ext_gadget2 = require("ext.gadget.Util");
void (0, import_ext_gadget2.getBody)().then(($body) => {
  if (WG_CANONICAL_SPECIAL_PAGE_NAME !== "Listusers") {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9tb2R1bGVzL3V0aWwvYWRqdXN0VGltZS50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9vcHRpb25zLmpzb24iLCAic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvbW9kdWxlcy9hcGkudHMiLCAic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvbW9kdWxlcy9jaGVja0xhc3RBY3RpdmUudHMiLCAic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvTGlzdFVzZXJzTGFzdEFjdGl2ZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FOiBzdHJpbmcgfCBmYWxzZSA9IG13LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lJyk7XG5cbmV4cG9ydCB7V0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FfTtcbiIsICJjb25zdCBhZGRMZWFkaW5nWmVybyA9IChudW1iZXI6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IG51bWJlclN0cmluZzogc3RyaW5nID1cblx0XHR0eXBlb2YgbnVtYmVyID09PSAnbnVtYmVyJyAmJiBudW1iZXIgPCAxMCA/IGAwJHtudW1iZXIudG9TdHJpbmcoKX1gIDogbnVtYmVyLnRvU3RyaW5nKCk7XG5cblx0cmV0dXJuIG51bWJlclN0cmluZztcbn07XG5cbmNvbnN0IGFkanVzdFRpbWUgPSAodGltZTogRGF0ZSk6IHN0cmluZyA9PiB7XG5cdGxldCBkYXRlOiBzdHJpbmc7XG5cblx0bGV0IHRvZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgeWVzdGVyZGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgdG9tb3Jyb3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXHR5ZXN0ZXJkYXkuc2V0RGF0ZSh5ZXN0ZXJkYXkuZ2V0RGF0ZSgpIC0gMSk7XG5cdHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XG5cblx0Ly8gZGV0ZXJtaW5lIHRoZSB0aW1lIG9mZnNldFxuXHRjb25zdCB1dGNPZmZzZXQ6IG51bWJlciA9ICgtMSAqIHRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKSkgLyA2MDtcblx0Y29uc3QgdXRjT2Zmc2V0VG9TdHJpbmc6IHN0cmluZyA9IHV0Y09mZnNldCA+PSAwID8gYCske3V0Y09mZnNldH1gIDogYOKIkiR7TWF0aC5hYnModXRjT2Zmc2V0KX1gO1xuXG5cdC8vIHNldCB0aGUgZGF0ZSBiaXRzIHRvIG91dHB1dFxuXHRjb25zdCB5ZWFyOiBudW1iZXIgPSB0aW1lLmdldEZ1bGxZZWFyKCk7XG5cdGNvbnN0IG1vbnRoOiBzdHJpbmcgPSBhZGRMZWFkaW5nWmVybyh0aW1lLmdldE1vbnRoKCkgKyAxKTtcblx0Y29uc3QgZGF5OiBudW1iZXIgPSB0aW1lLmdldERhdGUoKTtcblx0Y29uc3QgaG91cjogbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KHRpbWUuZ2V0SG91cnMoKS50b1N0cmluZygpLCAxMCk7XG5cdGNvbnN0IG1pbnV0ZTogc3RyaW5nID0gYWRkTGVhZGluZ1plcm8odGltZS5nZXRNaW51dGVzKCkpO1xuXG5cdC8vIHJldHVybiAndG9kYXknIG9yICd5ZXN0ZXJkYXknIGlmIHRoYXQgaXMgdGhlIGNhc2Vcblx0aWYgKHllYXIgPT09IHRvZGF5LmdldEZ1bGxZZWFyKCkgJiYgbW9udGggPT09IGFkZExlYWRpbmdaZXJvKHRvZGF5LmdldE1vbnRoKCkgKyAxKSAmJiBkYXkgPT09IHRvZGF5LmdldERhdGUoKSkge1xuXHRcdGRhdGUgPSAn5LuK5aSpJztcblx0fSBlbHNlIGlmIChcblx0XHR5ZWFyID09PSB5ZXN0ZXJkYXkuZ2V0RnVsbFllYXIoKSAmJlxuXHRcdG1vbnRoID09PSBhZGRMZWFkaW5nWmVybyh5ZXN0ZXJkYXkuZ2V0TW9udGgoKSArIDEpICYmXG5cdFx0ZGF5ID09PSB5ZXN0ZXJkYXkuZ2V0RGF0ZSgpXG5cdCkge1xuXHRcdGRhdGUgPSAn5pio5aSpJztcblx0fSBlbHNlIGlmIChcblx0XHR5ZWFyID09PSB0b21vcnJvdy5nZXRGdWxsWWVhcigpICYmXG5cdFx0bW9udGggPT09IGFkZExlYWRpbmdaZXJvKHRvbW9ycm93LmdldE1vbnRoKCkgKyAxKSAmJlxuXHRcdGRheSA9PT0gdG9tb3Jyb3cuZ2V0RGF0ZSgpXG5cdCkge1xuXHRcdGRhdGUgPSAn5piO5aSpJztcblx0fSBlbHNlIHtcblx0XHR0b2RheSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSk7XG5cdFx0dGltZSA9IG5ldyBEYXRlKHRpbWUuZ2V0RnVsbFllYXIoKSwgdGltZS5nZXRNb250aCgpLCB0aW1lLmdldERhdGUoKSk7XG5cdFx0ZGF0ZSA9IGAke3llYXJ95bm0JHthZGRMZWFkaW5nWmVybyhtb250aCl95pyIJHthZGRMZWFkaW5nWmVybyhkYXkpfeaXpWA7XG5cdH1cblxuXHRjb25zdCBob3VyTWludXRlOiBzdHJpbmcgPSBgJHthZGRMZWFkaW5nWmVybyhob3VyKX06JHttaW51dGV9IGA7XG5cblx0cmV0dXJuIGAke2RhdGV9LCAke2hvdXJNaW51dGV9IChVVEMke3V0Y09mZnNldFRvU3RyaW5nfSlgO1xufTtcblxuZXhwb3J0IHthZGp1c3RUaW1lfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBMaXN0VXNlcnNMYXN0QWN0aXZlLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzICovXG5pbXBvcnQge2FkanVzdFRpbWV9IGZyb20gJy4vdXRpbC9hZGp1c3RUaW1lJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGNoZWNrTGFzdEFjdGl2ZSA9IGFzeW5jICgkZWxlbWVudDogSlF1ZXJ5KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHVzZXJOYW1lOiBzdHJpbmcgPSAkZWxlbWVudC5maW5kKCcubXctdXNlcmxpbms+YmRpJykudGV4dCgpO1xuXG5cdGNvbnN0IGxvZ0V2ZW50c1BhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHRsZWxpbWl0OiAxLFxuXHRcdGxlcHJvcDogJ3RpbWVzdGFtcCcsXG5cdFx0bGV1c2VyOiB1c2VyTmFtZSxcblx0fTtcblx0Y29uc3QgdXNlckNvbnRyaWJzUGFyYW1zOiBBcGlRdWVyeVVzZXJDb250cmlic1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICd1c2VyY29udHJpYnMnLFxuXHRcdHVjZGlyOiAnb2xkZXInLFxuXHRcdHVjbGltaXQ6IDEsXG5cdFx0dWNwcm9wOiAndGltZXN0YW1wJyxcblx0XHR1Y3VzZXI6IHVzZXJOYW1lLFxuXHR9O1xuXG5cdGxldCBtYXhEYXRlOiBEYXRlIHwgdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgdXNlckNvbnRyaWJzID0gYXdhaXQgYXBpLmdldCh1c2VyQ29udHJpYnNQYXJhbXMpO1xuXHRcdGlmICh1c2VyQ29udHJpYnNbJ3F1ZXJ5J10udXNlcmNvbnRyaWJzWzBdKSB7XG5cdFx0XHRtYXhEYXRlID0gbmV3IERhdGUodXNlckNvbnRyaWJzWydxdWVyeSddLnVzZXJjb250cmlic1swXS50aW1lc3RhbXAgYXMgbnVtYmVyKTtcblx0XHR9XG5cblx0XHRjb25zdCBsb2dFdmVudHMgPSBhd2FpdCBhcGkuZ2V0KGxvZ0V2ZW50c1BhcmFtcyk7XG5cdFx0aWYgKGxvZ0V2ZW50c1sncXVlcnknXS5sb2dldmVudHNbMF0pIHtcblx0XHRcdGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZShsb2dFdmVudHNbJ3F1ZXJ5J10ubG9nZXZlbnRzWzBdLnRpbWVzdGFtcCBhcyBudW1iZXIpO1xuXHRcdFx0aWYgKCFtYXhEYXRlIHx8IGRhdGUgPiBtYXhEYXRlKSB7XG5cdFx0XHRcdG1heERhdGUgPSBkYXRlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGxhc3RBY3RpdmVNZXNzYWdlOiBzdHJpbmcgPSBtYXhEYXRlXG5cdFx0XHQ/IGDvvIgke3dpbmRvdy53Z1VMUygn5pyA5ZCO5pON5L2c5LqOJywgJ+acgOW+jOWLleS9nOaWvCcpfSR7YWRqdXN0VGltZShtYXhEYXRlKX3vvIlgXG5cdFx0XHQ6IGDvvIgke3dpbmRvdy53Z1VMUygn5LuO5pyq5pyJ5pON5L2cJywgJ+W+nuacquacieWLleS9nCcpfe+8iWA7XG5cdFx0JGVsZW1lbnQuYXBwZW5kKGxhc3RBY3RpdmVNZXNzYWdlKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbTGlzdFVzZXJzTGFzdEFjdGl2ZV0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y2hlY2tMYXN0QWN0aXZlfTtcbiIsICIvKipcbiAqIOS6jltbU3BlY2lhbDpMaXN0dXNlcnNdXeaYvuekuuS9v+eUqOiAheacgOWQjue8lui+keaXtumXtFxuICovXG5pbXBvcnQge1dHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Y2hlY2tMYXN0QWN0aXZlfSBmcm9tICcuL21vZHVsZXMvY2hlY2tMYXN0QWN0aXZlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmIChXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUgIT09ICdMaXN0dXNlcnMnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQ+dWw+bGknKSkge1xuXHRcdHZvaWQgY2hlY2tMYXN0QWN0aXZlKCQoZWxlbWVudCkpO1xuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsaUNBQWlEQyxHQUFHQyxPQUFPQyxJQUFJLDRCQUE0Qjs7QUNBakcsSUFBTUMsaUJBQWtCQyxZQUFvQztBQUMzRCxRQUFNQyxlQUNMLE9BQU9ELFdBQVcsWUFBWUEsU0FBUyxLQUFBLElBQUFFLE9BQVNGLE9BQU9HLFNBQVMsQ0FBQyxJQUFLSCxPQUFPRyxTQUFTO0FBRXZGLFNBQU9GO0FBQ1I7QUFFQSxJQUFNRyxhQUFjQyxVQUF1QjtBQUMxQyxNQUFJQztBQUVKLE1BQUlDLFFBQWMsb0JBQUlDLEtBQUs7QUFDM0IsUUFBTUMsWUFBa0Isb0JBQUlELEtBQUs7QUFDakMsUUFBTUUsV0FBaUIsb0JBQUlGLEtBQUs7QUFDaENDLFlBQVVFLFFBQVFGLFVBQVVHLFFBQVEsSUFBSSxDQUFDO0FBQ3pDRixXQUFTQyxRQUFRRCxTQUFTRSxRQUFRLElBQUksQ0FBQztBQUd2QyxRQUFNQyxZQUFxQixLQUFLUixLQUFLUyxrQkFBa0IsSUFBSztBQUM1RCxRQUFNQyxvQkFB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QUVGLFNBQW1CO0FBQy9FLFlBQUksQ0FBQ0gsV0FBV2pELE9BQU9pRCxTQUFTO0FBQy9CQSxvQkFBVWpEO1FBQ1g7TUFDRDtBQUVBLFlBQU11RCxvQkFBNEJOLFVBQUEsSUFBQXJELE9BQzNCNEQsT0FBT0MsTUFBTSxTQUFTLE9BQU8sQ0FBQyxFQUFBN0QsT0FBR0UsV0FBV21ELE9BQU8sR0FBQyxHQUFBLElBQUEsSUFBQXJELE9BQ3BENEQsT0FBT0MsTUFBTSxTQUFTLE9BQU8sR0FBQyxHQUFBO0FBQ3JDekIsZUFBUzBCLE9BQU9ILGlCQUFpQjtJQUNsQyxTQUFTSSxPQUFnQjtBQUN4QkMsY0FBUUQsTUFBTSxxQ0FBcUNBLEtBQUs7SUFDekQ7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQTdDTTlCLGlCQUFBZ0MsSUFBQTtBQUFBLFdBQUEvQixLQUFBZ0MsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBQ0NOLElBQUFDLHFCQUFzQnRDLFFBQUEsaUJBQUE7QUFFdEIsTUFBQSxHQUFLc0MsbUJBQUFDLFNBQVEsRUFBRUMsS0FBTUMsV0FBeUM7QUFDN0QsTUFBSTlFLG1DQUFtQyxhQUFhO0FBQ25EO0VBQ0Q7QUFBQSxNQUFBK0UsWUFBQUMsMkJBRXNCRixNQUFNakMsS0FBSyx3QkFBd0IsQ0FBQSxHQUFBb0M7QUFBQSxNQUFBO0FBQXpELFNBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQTREO0FBQUEsWUFBakRDLFVBQUFKLE1BQUFLO0FBQ1YsV0FBSzlDLGdCQUFnQitDLEVBQUVGLE9BQU8sQ0FBQztJQUNoQztFQUFBLFNBQUFHLEtBQUE7QUFBQVQsY0FBQVUsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQVQsY0FBQVcsRUFBQTtFQUFBO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiYWRkTGVhZGluZ1plcm8iLCAibnVtYmVyIiwgIm51bWJlclN0cmluZyIsICJjb25jYXQiLCAidG9TdHJpbmciLCAiYWRqdXN0VGltZSIsICJ0aW1lIiwgImRhdGUiLCAidG9kYXkiLCAiRGF0ZSIsICJ5ZXN0ZXJkYXkiLCAidG9tb3Jyb3ciLCAic2V0RGF0ZSIsICJnZXREYXRlIiwgInV0Y09mZnNldCIsICJnZXRUaW1lem9uZU9mZnNldCIsICJ1dGNPZmZzZXRUb1N0cmluZyIsICJNYXRoIiwgImFicyIsICJ5ZWFyIiwgImdldEZ1bGxZZWFyIiwgIm1vbnRoIiwgImdldE1vbnRoIiwgImRheSIsICJob3VyIiwgIk51bWJlciIsICJwYXJzZUludCIsICJnZXRIb3VycyIsICJtaW51dGUiLCAiZ2V0TWludXRlcyIsICJob3VyTWludXRlIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNoZWNrTGFzdEFjdGl2ZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIiRlbGVtZW50IiwgInVzZXJOYW1lIiwgImZpbmQiLCAidGV4dCIsICJsb2dFdmVudHNQYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJsZWxpbWl0IiwgImxlcHJvcCIsICJsZXVzZXIiLCAidXNlckNvbnRyaWJzUGFyYW1zIiwgImZvcm1hdCIsICJ1Y2RpciIsICJ1Y2xpbWl0IiwgInVjcHJvcCIsICJ1Y3VzZXIiLCAibWF4RGF0ZSIsICJ1c2VyQ29udHJpYnMiLCAidXNlcmNvbnRyaWJzIiwgInRpbWVzdGFtcCIsICJsb2dFdmVudHMiLCAibG9nZXZlbnRzIiwgImxhc3RBY3RpdmVNZXNzYWdlIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJhcHBlbmQiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEJvZHkiLCAidGhlbiIsICIkYm9keSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkIiwgImVyciIsICJlIiwgImYiXQp9Cg==
