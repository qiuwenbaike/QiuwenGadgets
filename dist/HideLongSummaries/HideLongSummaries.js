/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HideLongSummaries}
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

// dist/HideLongSummaries/HideLongSummaries.js
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length) return { done: true };
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
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
//! src/HideLongSummaries/options.json
var maxLength = 256;
//! src/HideLongSummaries/modules/constant.ts
var CLASS_NAME = "gadget-hide_long_summaries";
var CLASS_NAME_LONG = "".concat(CLASS_NAME, "--long");
var CLASS_NAME_SHORT = "".concat(CLASS_NAME, "--short");
var CLASS_NAME_SWITCH = "".concat(CLASS_NAME, "-switch");
//! src/HideLongSummaries/HideLongSummaries.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/HideLongSummaries/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Collapse: (0, import_ext_gadget.localize)({
      en: "collapse",
      ja: "折り畳み",
      "zh-hans": "折叠",
      "zh-hant": "折疊"
    }),
    Expand: (0, import_ext_gadget.localize)({
      en: "expand",
      ja: "展開",
      "zh-hans": "展开",
      "zh-hant": "展開"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/HideLongSummaries/HideLongSummaries.ts
void (0, import_ext_gadget2.getBody)().then(function hideLongSummaries($body) {
  const $switches = [];
  var _iterator = _createForOfIteratorHelper($body.find(".comment")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      if (!element.textContent || element.textContent.length <= maxLength || !element.parentElement) {
        continue;
      }
      $(element).addClass(CLASS_NAME_LONG).hide();
      $switches[$switches.length] = $("<a>").addClass(CLASS_NAME_SWITCH).text("[".concat(getMessage("Expand"), "]")).insertAfter(element);
      $("<span>").addClass("comment comment--without-parentheses ".concat(CLASS_NAME_SHORT)).text("".concat(element.textContent.slice(0, Math.max(0, maxLength + 1)), "...").concat(element.textContent.slice(-1))).insertAfter(element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  for (var _i = 0, _$switches = $switches; _i < _$switches.length; _i++) {
    const $switch = _$switches[_i];
    $switch.on("click", (event) => {
      const parentElement = event.currentTarget.parentElement;
      const $parentElement = $(parentElement);
      const $long = $parentElement.find(".".concat(CLASS_NAME_LONG));
      const $short = $parentElement.find(".".concat(CLASS_NAME_SHORT));
      $switch.text($long.is(":visible") ? "[".concat(getMessage("Expand"), "]") : "[".concat(getMessage("Collapse"), "]"));
      $long.toggle();
      $short.toggle();
    });
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hpZGVMb25nU3VtbWFyaWVzL29wdGlvbnMuanNvbiIsICJzcmMvSGlkZUxvbmdTdW1tYXJpZXMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvSGlkZUxvbmdTdW1tYXJpZXMvSGlkZUxvbmdTdW1tYXJpZXMudHMiLCAic3JjL0hpZGVMb25nU3VtbWFyaWVzL21vZHVsZXMvaTE4bi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1heExlbmd0aFwiOiAyNTZcbn1cbiIsICJjb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWhpZGVfbG9uZ19zdW1tYXJpZXMnO1xuY29uc3QgQ0xBU1NfTkFNRV9MT05HOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS0tbG9uZ2A7XG5jb25zdCBDTEFTU19OQU1FX1NIT1JUOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfS0tc2hvcnRgO1xuY29uc3QgQ0xBU1NfTkFNRV9TV0lUQ0g6IHN0cmluZyA9IGAke0NMQVNTX05BTUV9LXN3aXRjaGA7XG5cbmV4cG9ydCB7Q0xBU1NfTkFNRV9MT05HLCBDTEFTU19OQU1FX1NIT1JULCBDTEFTU19OQU1FX1NXSVRDSH07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgbWVkaWF3aWtpL2NsYXNzLWRvYyAqL1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0NMQVNTX05BTUVfTE9ORywgQ0xBU1NfTkFNRV9TSE9SVCwgQ0xBU1NfTkFNRV9TV0lUQ0h9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBoaWRlTG9uZ1N1bW1hcmllcygkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3QgJHN3aXRjaGVzOiBKUXVlcnlbXSA9IFtdO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcuY29tbWVudCcpKSB7XG5cdFx0aWYgKCFlbGVtZW50LnRleHRDb250ZW50IHx8IGVsZW1lbnQudGV4dENvbnRlbnQubGVuZ3RoIDw9IE9QVElPTlMubWF4TGVuZ3RoIHx8ICFlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdCQoZWxlbWVudCkuYWRkQ2xhc3MoQ0xBU1NfTkFNRV9MT05HKS5oaWRlKCk7XG5cblx0XHQkc3dpdGNoZXNbJHN3aXRjaGVzLmxlbmd0aF0gPSAkKCc8YT4nKVxuXHRcdFx0LmFkZENsYXNzKENMQVNTX05BTUVfU1dJVENIKVxuXHRcdFx0LnRleHQoYFske2dldE1lc3NhZ2UoJ0V4cGFuZCcpfV1gKVxuXHRcdFx0Lmluc2VydEFmdGVyKGVsZW1lbnQpOyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblxuXHRcdCQoJzxzcGFuPicpXG5cdFx0XHQuYWRkQ2xhc3MoYGNvbW1lbnQgY29tbWVudC0td2l0aG91dC1wYXJlbnRoZXNlcyAke0NMQVNTX05BTUVfU0hPUlR9YClcblx0XHRcdC50ZXh0KFxuXHRcdFx0XHRgJHtlbGVtZW50LnRleHRDb250ZW50LnNsaWNlKDAsIE1hdGgubWF4KDAsIE9QVElPTlMubWF4TGVuZ3RoICsgMSkpfS4uLiR7ZWxlbWVudC50ZXh0Q29udGVudC5zbGljZSgtMSl9YFxuXHRcdFx0KVxuXHRcdFx0Lmluc2VydEFmdGVyKGVsZW1lbnQpO1xuXHR9XG5cblx0Zm9yIChjb25zdCAkc3dpdGNoIG9mICRzd2l0Y2hlcykge1xuXHRcdCRzd2l0Y2gub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3QgcGFyZW50RWxlbWVudCA9IChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5wYXJlbnRFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuXG5cdFx0XHRjb25zdCAkcGFyZW50RWxlbWVudDogSlF1ZXJ5ID0gJChwYXJlbnRFbGVtZW50KTtcblx0XHRcdGNvbnN0ICRsb25nOiBKUXVlcnkgPSAkcGFyZW50RWxlbWVudC5maW5kKGAuJHtDTEFTU19OQU1FX0xPTkd9YCk7XG5cdFx0XHRjb25zdCAkc2hvcnQ6IEpRdWVyeSA9ICRwYXJlbnRFbGVtZW50LmZpbmQoYC4ke0NMQVNTX05BTUVfU0hPUlR9YCk7XG5cblx0XHRcdCRzd2l0Y2gudGV4dCgkbG9uZy5pcygnOnZpc2libGUnKSA/IGBbJHtnZXRNZXNzYWdlKCdFeHBhbmQnKX1dYCA6IGBbJHtnZXRNZXNzYWdlKCdDb2xsYXBzZScpfV1gKTtcblx0XHRcdCRsb25nLnRvZ2dsZSgpO1xuXHRcdFx0JHNob3J0LnRvZ2dsZSgpO1xuXHRcdH0pO1xuXHR9XG59KTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q29sbGFwc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnY29sbGFwc2UnLFxuXHRcdFx0amE6ICfmipjjgornlbPjgb8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oqY5Y+gJyxcblx0XHRcdCd6aC1oYW50JzogJ+aKmOeWiicsXG5cdFx0fSksXG5cdFx0RXhwYW5kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2V4cGFuZCcsXG5cdFx0XHRqYTogJ+WxlemWiycsXG5cdFx0XHQnemgtaGFucyc6ICflsZXlvIAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bGV6ZaLJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7O0FDRGQsSUFBTUMsYUFBcUI7QUFDM0IsSUFBTUMsa0JBQUEsR0FBQUMsT0FBNkJGLFlBQVUsUUFBQTtBQUM3QyxJQUFNRyxtQkFBQSxHQUFBRCxPQUE4QkYsWUFBVSxTQUFBO0FBQzlDLElBQU1JLG9CQUFBLEdBQUFGLE9BQStCRixZQUFVLFNBQUE7O0FDQS9DLElBQUFLLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNIdEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFdBQUEsR0FBVUYsa0JBQUFHLFVBQVM7TUFDbEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxTQUFBLEdBQVFOLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUUsZUFBZU4sZ0JBQWdCO0FBRXJDLElBQU1PLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEakJBLE1BQUEsR0FBS1gsbUJBQUFZLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxrQkFBa0JDLE9BQXNDO0FBQ3BGLFFBQU1DLFlBQXNCLENBQUE7QUFBQyxNQUFBQyxZQUFBQywyQkFFUEgsTUFBTUksS0FBSyxVQUFVLENBQUEsR0FBQUM7QUFBQSxNQUFBO0FBQTNDLFNBQUFILFVBQUFJLEVBQUEsR0FBQSxFQUFBRCxRQUFBSCxVQUFBSyxFQUFBLEdBQUFDLFFBQThDO0FBQUEsWUFBbkNDLFVBQUFKLE1BQUFLO0FBQ1YsVUFBSSxDQUFDRCxRQUFRRSxlQUFlRixRQUFRRSxZQUFZQyxVQUFrQmpDLGFBQWEsQ0FBQzhCLFFBQVFJLGVBQWU7QUFDdEc7TUFDRDtBQUVBQyxRQUFFTCxPQUFPLEVBQUVNLFNBQVNsQyxlQUFlLEVBQUVtQyxLQUFLO0FBRTFDZixnQkFBVUEsVUFBVVcsTUFBTSxJQUFJRSxFQUFFLEtBQUssRUFDbkNDLFNBQVMvQixpQkFBaUIsRUFDMUJpQyxLQUFBLElBQUFuQyxPQUFTYSxXQUFXLFFBQVEsR0FBQyxHQUFBLENBQUcsRUFDaEN1QixZQUFZVCxPQUFPO0FBRXJCSyxRQUFFLFFBQVEsRUFDUkMsU0FBQSx3Q0FBQWpDLE9BQWlEQyxnQkFBZ0IsQ0FBRSxFQUNuRWtDLEtBQUEsR0FBQW5DLE9BQ0cyQixRQUFRRSxZQUFZUSxNQUFNLEdBQUdDLEtBQUtDLElBQUksR0FBVzFDLFlBQVksQ0FBQyxDQUFDLEdBQUMsS0FBQSxFQUFBRyxPQUFNMkIsUUFBUUUsWUFBWVEsTUFBTSxFQUFFLENBQUMsQ0FDdkcsRUFDQ0QsWUFBWVQsT0FBTztJQUN0QjtFQUFBLFNBQUFhLEtBQUE7QUFBQXBCLGNBQUFxQixFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBcEIsY0FBQXNCLEVBQUE7RUFBQTtBQUVBLFdBQUFDLEtBQUEsR0FBQUMsYUFBc0J6QixXQUFBd0IsS0FBQUMsV0FBQWQsUUFBQWEsTUFBVztBQUFqQyxVQUFXRSxVQUFBRCxXQUFBRCxFQUFBO0FBQ1ZFLFlBQVFDLEdBQUcsU0FBVUMsV0FBbUM7QUFDdkQsWUFBTWhCLGdCQUFpQmdCLE1BQU1DLGNBQThCakI7QUFFM0QsWUFBTWtCLGlCQUF5QmpCLEVBQUVELGFBQWE7QUFDOUMsWUFBTW1CLFFBQWdCRCxlQUFlM0IsS0FBQSxJQUFBdEIsT0FBU0QsZUFBZSxDQUFFO0FBQy9ELFlBQU1vRCxTQUFpQkYsZUFBZTNCLEtBQUEsSUFBQXRCLE9BQVNDLGdCQUFnQixDQUFFO0FBRWpFNEMsY0FBUVYsS0FBS2UsTUFBTUUsR0FBRyxVQUFVLElBQUEsSUFBQXBELE9BQVFhLFdBQVcsUUFBUSxHQUFDLEdBQUEsSUFBQSxJQUFBYixPQUFVYSxXQUFXLFVBQVUsR0FBQyxHQUFBLENBQUc7QUFDL0ZxQyxZQUFNRyxPQUFPO0FBQ2JGLGFBQU9FLE9BQU87SUFDZixDQUFDO0VBQ0Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJtYXhMZW5ndGgiLCAiQ0xBU1NfTkFNRSIsICJDTEFTU19OQU1FX0xPTkciLCAiY29uY2F0IiwgIkNMQVNTX05BTUVfU0hPUlQiLCAiQ0xBU1NfTkFNRV9TV0lUQ0giLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNvbGxhcHNlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkV4cGFuZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImhpZGVMb25nU3VtbWFyaWVzIiwgIiRib2R5IiwgIiRzd2l0Y2hlcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZmluZCIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgInRleHRDb250ZW50IiwgImxlbmd0aCIsICJwYXJlbnRFbGVtZW50IiwgIiQiLCAiYWRkQ2xhc3MiLCAiaGlkZSIsICJ0ZXh0IiwgImluc2VydEFmdGVyIiwgInNsaWNlIiwgIk1hdGgiLCAibWF4IiwgImVyciIsICJlIiwgImYiLCAiX2kiLCAiXyRzd2l0Y2hlcyIsICIkc3dpdGNoIiwgIm9uIiwgImV2ZW50IiwgImN1cnJlbnRUYXJnZXQiLCAiJHBhcmVudEVsZW1lbnQiLCAiJGxvbmciLCAiJHNob3J0IiwgImlzIiwgInRvZ2dsZSJdCn0K
