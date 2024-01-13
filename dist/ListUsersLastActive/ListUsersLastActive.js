/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://meta.wikimedia.org/wiki/User:Xiplus/js/list-user-last-active.js}
 * @base {@link https://zh.wikipedia.org/w/index.php?title=MediaWiki:Gadget-CommentsinLocalTime.js&oldid=48314651}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ListUsersLastActive}
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
var WG_WIKI_ID = mw.config.get("wgWikiID");
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
var api = (0, import_ext_gadget.initMwApi)("Qiuwen/1.1 (ListUsersLastActive/".concat(version, "; ").concat(WG_WIKI_ID, ")"));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9tb2R1bGVzL3V0aWwvYWRqdXN0VGltZS50cyIsICJzcmMvTGlzdFVzZXJzTGFzdEFjdGl2ZS9vcHRpb25zLmpzb24iLCAic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvbW9kdWxlcy9hcGkudHMiLCAic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvbW9kdWxlcy9jaGVja0xhc3RBY3RpdmUudHMiLCAic3JjL0xpc3RVc2Vyc0xhc3RBY3RpdmUvTGlzdFVzZXJzTGFzdEFjdGl2ZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FOiBzdHJpbmcgfCBmYWxzZSA9IG13LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lJyk7XG5jb25zdCBXR19XSUtJX0lEOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuXG5leHBvcnQge1dHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSwgV0dfV0lLSV9JRH07XG4iLCAiY29uc3QgYWRkTGVhZGluZ1plcm8gPSAobnVtYmVyOiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBudW1iZXJTdHJpbmc6IHN0cmluZyA9XG5cdFx0dHlwZW9mIG51bWJlciA9PT0gJ251bWJlcicgJiYgbnVtYmVyIDwgMTAgPyBgMCR7bnVtYmVyLnRvU3RyaW5nKCl9YCA6IG51bWJlci50b1N0cmluZygpO1xuXG5cdHJldHVybiBudW1iZXJTdHJpbmc7XG59O1xuXG5jb25zdCBhZGp1c3RUaW1lID0gKHRpbWU6IERhdGUpOiBzdHJpbmcgPT4ge1xuXHRsZXQgZGF0ZTogc3RyaW5nO1xuXG5cdGxldCB0b2RheTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IHllc3RlcmRheTogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IHRvbW9ycm93OiBEYXRlID0gbmV3IERhdGUoKTtcblx0eWVzdGVyZGF5LnNldERhdGUoeWVzdGVyZGF5LmdldERhdGUoKSAtIDEpO1xuXHR0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xuXG5cdC8vIGRldGVybWluZSB0aGUgdGltZSBvZmZzZXRcblx0Y29uc3QgdXRjT2Zmc2V0OiBudW1iZXIgPSAoLTEgKiB0aW1lLmdldFRpbWV6b25lT2Zmc2V0KCkpIC8gNjA7XG5cdGNvbnN0IHV0Y09mZnNldFRvU3RyaW5nOiBzdHJpbmcgPSB1dGNPZmZzZXQgPj0gMCA/IGArJHt1dGNPZmZzZXR9YCA6IGDiiJIke01hdGguYWJzKHV0Y09mZnNldCl9YDtcblxuXHQvLyBzZXQgdGhlIGRhdGUgYml0cyB0byBvdXRwdXRcblx0Y29uc3QgeWVhcjogbnVtYmVyID0gdGltZS5nZXRGdWxsWWVhcigpO1xuXHRjb25zdCBtb250aDogc3RyaW5nID0gYWRkTGVhZGluZ1plcm8odGltZS5nZXRNb250aCgpICsgMSk7XG5cdGNvbnN0IGRheTogbnVtYmVyID0gdGltZS5nZXREYXRlKCk7XG5cdGNvbnN0IGhvdXI6IG51bWJlciA9IE51bWJlci5wYXJzZUludCh0aW1lLmdldEhvdXJzKCkudG9TdHJpbmcoKSwgMTApO1xuXHRjb25zdCBtaW51dGU6IHN0cmluZyA9IGFkZExlYWRpbmdaZXJvKHRpbWUuZ2V0TWludXRlcygpKTtcblxuXHQvLyByZXR1cm4gJ3RvZGF5JyBvciAneWVzdGVyZGF5JyBpZiB0aGF0IGlzIHRoZSBjYXNlXG5cdGlmICh5ZWFyID09PSB0b2RheS5nZXRGdWxsWWVhcigpICYmIG1vbnRoID09PSBhZGRMZWFkaW5nWmVybyh0b2RheS5nZXRNb250aCgpICsgMSkgJiYgZGF5ID09PSB0b2RheS5nZXREYXRlKCkpIHtcblx0XHRkYXRlID0gJ+S7iuWkqSc7XG5cdH0gZWxzZSBpZiAoXG5cdFx0eWVhciA9PT0geWVzdGVyZGF5LmdldEZ1bGxZZWFyKCkgJiZcblx0XHRtb250aCA9PT0gYWRkTGVhZGluZ1plcm8oeWVzdGVyZGF5LmdldE1vbnRoKCkgKyAxKSAmJlxuXHRcdGRheSA9PT0geWVzdGVyZGF5LmdldERhdGUoKVxuXHQpIHtcblx0XHRkYXRlID0gJ+aYqOWkqSc7XG5cdH0gZWxzZSBpZiAoXG5cdFx0eWVhciA9PT0gdG9tb3Jyb3cuZ2V0RnVsbFllYXIoKSAmJlxuXHRcdG1vbnRoID09PSBhZGRMZWFkaW5nWmVybyh0b21vcnJvdy5nZXRNb250aCgpICsgMSkgJiZcblx0XHRkYXkgPT09IHRvbW9ycm93LmdldERhdGUoKVxuXHQpIHtcblx0XHRkYXRlID0gJ+aYjuWkqSc7XG5cdH0gZWxzZSB7XG5cdFx0dG9kYXkgPSBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkpO1xuXHRcdHRpbWUgPSBuZXcgRGF0ZSh0aW1lLmdldEZ1bGxZZWFyKCksIHRpbWUuZ2V0TW9udGgoKSwgdGltZS5nZXREYXRlKCkpO1xuXHRcdGRhdGUgPSBgJHt5ZWFyfeW5tCR7YWRkTGVhZGluZ1plcm8obW9udGgpfeaciCR7YWRkTGVhZGluZ1plcm8oZGF5KX3ml6VgO1xuXHR9XG5cblx0Y29uc3QgaG91ck1pbnV0ZTogc3RyaW5nID0gYCR7YWRkTGVhZGluZ1plcm8oaG91cil9OiR7bWludXRlfSBgO1xuXG5cdHJldHVybiBgJHtkYXRlfSwgJHtob3VyTWludXRlfSAoVVRDJHt1dGNPZmZzZXRUb1N0cmluZ30pYDtcbn07XG5cbmV4cG9ydCB7YWRqdXN0VGltZX07XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7V0dfV0lLSV9JRH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFFpdXdlbi8xLjEgKExpc3RVc2Vyc0xhc3RBY3RpdmUvJHtPUFRJT05TLnZlcnNpb259OyAke1dHX1dJS0lfSUR9KWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzICovXG5pbXBvcnQge2FkanVzdFRpbWV9IGZyb20gJy4vdXRpbC9hZGp1c3RUaW1lJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IGNoZWNrTGFzdEFjdGl2ZSA9IGFzeW5jICgkZWxlbWVudDogSlF1ZXJ5KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHVzZXJOYW1lOiBzdHJpbmcgPSAkZWxlbWVudC5maW5kKCcubXctdXNlcmxpbms+YmRpJykudGV4dCgpO1xuXG5cdGNvbnN0IGxvZ0V2ZW50c1BhcmFtczogQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHRsZWxpbWl0OiAxLFxuXHRcdGxlcHJvcDogJ3RpbWVzdGFtcCcsXG5cdFx0bGV1c2VyOiB1c2VyTmFtZSxcblx0fTtcblx0Y29uc3QgdXNlckNvbnRyaWJzUGFyYW1zOiBBcGlRdWVyeVVzZXJDb250cmlic1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICd1c2VyY29udHJpYnMnLFxuXHRcdHVjZGlyOiAnb2xkZXInLFxuXHRcdHVjbGltaXQ6IDEsXG5cdFx0dWNwcm9wOiAndGltZXN0YW1wJyxcblx0XHR1Y3VzZXI6IHVzZXJOYW1lLFxuXHR9O1xuXG5cdGxldCBtYXhEYXRlOiBEYXRlIHwgdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgdXNlckNvbnRyaWJzID0gYXdhaXQgYXBpLmdldCh1c2VyQ29udHJpYnNQYXJhbXMpO1xuXHRcdGlmICh1c2VyQ29udHJpYnNbJ3F1ZXJ5J10udXNlcmNvbnRyaWJzWzBdKSB7XG5cdFx0XHRtYXhEYXRlID0gbmV3IERhdGUodXNlckNvbnRyaWJzWydxdWVyeSddLnVzZXJjb250cmlic1swXS50aW1lc3RhbXAgYXMgbnVtYmVyKTtcblx0XHR9XG5cblx0XHRjb25zdCBsb2dFdmVudHMgPSBhd2FpdCBhcGkuZ2V0KGxvZ0V2ZW50c1BhcmFtcyk7XG5cdFx0aWYgKGxvZ0V2ZW50c1sncXVlcnknXS5sb2dldmVudHNbMF0pIHtcblx0XHRcdGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZShsb2dFdmVudHNbJ3F1ZXJ5J10ubG9nZXZlbnRzWzBdLnRpbWVzdGFtcCBhcyBudW1iZXIpO1xuXHRcdFx0aWYgKCFtYXhEYXRlIHx8IGRhdGUgPiBtYXhEYXRlKSB7XG5cdFx0XHRcdG1heERhdGUgPSBkYXRlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IGxhc3RBY3RpdmVNZXNzYWdlOiBzdHJpbmcgPSBtYXhEYXRlXG5cdFx0XHQ/IGDvvIgke3dpbmRvdy53Z1VMUygn5pyA5ZCO5pON5L2c5LqOJywgJ+acgOW+jOWLleS9nOaWvCcpfSR7YWRqdXN0VGltZShtYXhEYXRlKX3vvIlgXG5cdFx0XHQ6IGDvvIgke3dpbmRvdy53Z1VMUygn5LuO5pyq5pyJ5pON5L2cJywgJ+W+nuacquacieWLleS9nCcpfe+8iWA7XG5cdFx0JGVsZW1lbnQuYXBwZW5kKGxhc3RBY3RpdmVNZXNzYWdlKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbTGlzdFVzZXJzTGFzdEFjdGl2ZV0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y2hlY2tMYXN0QWN0aXZlfTtcbiIsICIvKipcbiAqIOS6jltbU3BlY2lhbDpMaXN0dXNlcnNdXeaYvuekuuS9v+eUqOiAheacgOWQjue8lui+keaXtumXtFxuICovXG5pbXBvcnQge1dHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Y2hlY2tMYXN0QWN0aXZlfSBmcm9tICcuL21vZHVsZXMvY2hlY2tMYXN0QWN0aXZlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmIChXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUgIT09ICdMaXN0dXNlcnMnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQ+dWw+bGknKSkge1xuXHRcdHZvaWQgY2hlY2tMYXN0QWN0aXZlKCQoZWxlbWVudCkpO1xuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsaUNBQWlEQyxHQUFHQyxPQUFPQyxJQUFJLDRCQUE0QjtBQUNqRyxJQUFNQyxhQUFxQkgsR0FBR0MsT0FBT0MsSUFBSSxVQUFVOztBQ0RuRCxJQUFNRSxpQkFBa0JDLFlBQW9DO0FBQzNELFFBQU1DLGVBQ0wsT0FBT0QsV0FBVyxZQUFZQSxTQUFTLEtBQUEsSUFBQUUsT0FBU0YsT0FBT0csU0FBUyxDQUFDLElBQUtILE9BQU9HLFNBQVM7QUFFdkYsU0FBT0Y7QUFDUjtBQUVBLElBQU1HLGFBQWNDLFVBQXVCO0FBQzFDLE1BQUlDO0FBRUosTUFBSUMsUUFBYyxvQkFBSUMsS0FBSztBQUMzQixRQUFNQyxZQUFrQixvQkFBSUQsS0FBSztBQUNqQyxRQUFNRSxXQUFpQixv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QUFBO0FBQUFULGNBQUFVLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFULGNBQUFXLEVBQUE7RUFBQTtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbIldHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1dJS0lfSUQiLCAiYWRkTGVhZGluZ1plcm8iLCAibnVtYmVyIiwgIm51bWJlclN0cmluZyIsICJjb25jYXQiLCAidG9TdHJpbmciLCAiYWRqdXN0VGltZSIsICJ0aW1lIiwgImRhdGUiLCAidG9kYXkiLCAiRGF0ZSIsICJ5ZXN0ZXJkYXkiLCAidG9tb3Jyb3ciLCAic2V0RGF0ZSIsICJnZXREYXRlIiwgInV0Y09mZnNldCIsICJnZXRUaW1lem9uZU9mZnNldCIsICJ1dGNPZmZzZXRUb1N0cmluZyIsICJNYXRoIiwgImFicyIsICJ5ZWFyIiwgImdldEZ1bGxZZWFyIiwgIm1vbnRoIiwgImdldE1vbnRoIiwgImRheSIsICJob3VyIiwgIk51bWJlciIsICJwYXJzZUludCIsICJnZXRIb3VycyIsICJtaW51dGUiLCAiZ2V0TWludXRlcyIsICJob3VyTWludXRlIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNoZWNrTGFzdEFjdGl2ZSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIiRlbGVtZW50IiwgInVzZXJOYW1lIiwgImZpbmQiLCAidGV4dCIsICJsb2dFdmVudHNQYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJsZWxpbWl0IiwgImxlcHJvcCIsICJsZXVzZXIiLCAidXNlckNvbnRyaWJzUGFyYW1zIiwgImZvcm1hdCIsICJ1Y2RpciIsICJ1Y2xpbWl0IiwgInVjcHJvcCIsICJ1Y3VzZXIiLCAibWF4RGF0ZSIsICJ1c2VyQ29udHJpYnMiLCAidXNlcmNvbnRyaWJzIiwgInRpbWVzdGFtcCIsICJsb2dFdmVudHMiLCAibG9nZXZlbnRzIiwgImxhc3RBY3RpdmVNZXNzYWdlIiwgIndpbmRvdyIsICJ3Z1VMUyIsICJhcHBlbmQiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEJvZHkiLCAidGhlbiIsICIkYm9keSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkIiwgImVyciIsICJlIiwgImYiXQp9Cg==

})();

/* </nowiki> */
