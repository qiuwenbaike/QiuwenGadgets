/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/StickyTableHeaders}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
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

// dist/StickyTableHeaders/StickyTableHeaders.js
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
//! src/StickyTableHeaders/StickyTableHeaders.module.less
var stickyheader = "StickyTableHeaders-module__stickyheader_eOk_LG";
var thead = "StickyTableHeaders-module__thead_eOk_LG";
//! src/StickyTableHeaders/StickyTableHeaders.ts
var import_ext_gadget = require("ext.gadget.Util");
void (0, import_ext_gadget.getBody)().then(($body) => {
  var _iterator = _createForOfIteratorHelper($body.find(".wikitable:not(.sortable)")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const table = _step.value;
      const $table = $(table);
      const $thead = $table.find("thead");
      const $trTh = $table.find("tbody > tr > th").parent().eq(0);
      const $trTd = $table.find("tbody > tr > td").parent();
      const $target = $thead.length ? $thead : $trTh.length ? $trTh : null;
      if ($target && $trTd.length >= 5) {
        $table.addClass("".concat(stickyheader));
        $target.addClass("".concat(thead));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1N0aWNreVRhYmxlSGVhZGVycy9TdGlja3lUYWJsZUhlYWRlcnMubW9kdWxlLmxlc3MiLCAic3JjL1N0aWNreVRhYmxlSGVhZGVycy9TdGlja3lUYWJsZUhlYWRlcnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvU3RpY2t5VGFibGVIZWFkZXJzL1N0aWNreVRhYmxlSGVhZGVycy5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IHN0aWNreWhlYWRlciA9IFwiU3RpY2t5VGFibGVIZWFkZXJzLW1vZHVsZV9fc3RpY2t5aGVhZGVyX2VPa19MR1wiO1xuZXhwb3J0IGNvbnN0IHRoZWFkID0gXCJTdGlja3lUYWJsZUhlYWRlcnMtbW9kdWxlX190aGVhZF9lT2tfTEdcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInN0aWNreWhlYWRlclwiOiBzdGlja3loZWFkZXIsXG4gIFwidGhlYWRcIjogdGhlYWRcbn07XG4gICAgICAiLCAiLyogZXNsaW50LWRpc2FibGUgbWVkaWF3aWtpL2NsYXNzLWRvYyAqL1xuaW1wb3J0IHtzdGlja3loZWFkZXIsIHRoZWFkfSBmcm9tICcuL1N0aWNreVRhYmxlSGVhZGVycy5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IHRhYmxlIG9mICRib2R5LmZpbmQ8SFRNTFRhYmxlRWxlbWVudD4oJy53aWtpdGFibGU6bm90KC5zb3J0YWJsZSknKSkge1xuXHRcdGNvbnN0ICR0YWJsZTogSlF1ZXJ5PEhUTUxUYWJsZUVsZW1lbnQ+ID0gJCh0YWJsZSk7XG5cblx0XHRjb25zdCAkdGhlYWQ6IEpRdWVyeTxIVE1MVGFibGVTZWN0aW9uRWxlbWVudD4gPSAkdGFibGUuZmluZCgndGhlYWQnKTtcblx0XHRjb25zdCAkdHJUaCA9ICR0YWJsZS5maW5kKCd0Ym9keSA+IHRyID4gdGgnKS5wYXJlbnQoKS5lcSgwKSBhcyBKUXVlcnk8SFRNTFRhYmxlUm93RWxlbWVudD47XG5cdFx0Y29uc3QgJHRyVGQgPSAkdGFibGUuZmluZCgndGJvZHkgPiB0ciA+IHRkJykucGFyZW50KCkgYXMgSlF1ZXJ5PEhUTUxUYWJsZVJvd0VsZW1lbnQ+O1xuXG5cdFx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5PEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50PiB8IEpRdWVyeTxIVE1MVGFibGVSb3dFbGVtZW50PiB8IG51bGwgPSAkdGhlYWQubGVuZ3RoXG5cdFx0XHQ/ICR0aGVhZFxuXHRcdFx0OiAkdHJUaC5sZW5ndGhcblx0XHRcdFx0PyAkdHJUaFxuXHRcdFx0XHQ6IG51bGw7XG5cblx0XHRpZiAoJHRhcmdldCAmJiAkdHJUZC5sZW5ndGggPj0gNSkge1xuXHRcdFx0JHRhYmxlLmFkZENsYXNzKGAke3N0aWNreWhlYWRlcn1gKTtcblx0XHRcdCR0YXJnZXQuYWRkQ2xhc3MoYCR7dGhlYWR9YCk7XG5cdFx0fVxuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsZUFBZTtBQUNyQixJQUFNQyxRQUFROztBQ0FyQixJQUFBQyxvQkFBc0JDLFFBQUEsaUJBQUE7QUFFdEIsTUFBQSxHQUFLRCxrQkFBQUUsU0FBUSxFQUFFQyxLQUFNQyxXQUF5QztBQUFBLE1BQUFDLFlBQUFDLDJCQUN6Q0YsTUFBTUcsS0FBdUIsMkJBQTJCLENBQUEsR0FBQUM7QUFBQSxNQUFBO0FBQTVFLFNBQUFILFVBQUFJLEVBQUEsR0FBQSxFQUFBRCxRQUFBSCxVQUFBSyxFQUFBLEdBQUFDLFFBQStFO0FBQUEsWUFBcEVDLFFBQUFKLE1BQUFLO0FBQ1YsWUFBTUMsU0FBbUNDLEVBQUVILEtBQUs7QUFFaEQsWUFBTUksU0FBMENGLE9BQU9QLEtBQUssT0FBTztBQUNuRSxZQUFNVSxRQUFRSCxPQUFPUCxLQUFLLGlCQUFpQixFQUFFVyxPQUFPLEVBQUVDLEdBQUcsQ0FBQztBQUMxRCxZQUFNQyxRQUFRTixPQUFPUCxLQUFLLGlCQUFpQixFQUFFVyxPQUFPO0FBRXBELFlBQU1HLFVBQWdGTCxPQUFPTSxTQUMxRk4sU0FDQUMsTUFBTUssU0FDTEwsUUFDQTtBQUVKLFVBQUlJLFdBQVdELE1BQU1FLFVBQVUsR0FBRztBQUNqQ1IsZUFBT1MsU0FBQSxHQUFBQyxPQUFZMUIsWUFBWSxDQUFFO0FBQ2pDdUIsZ0JBQVFFLFNBQUEsR0FBQUMsT0FBWXpCLEtBQUssQ0FBRTtNQUM1QjtJQUNEO0VBQUEsU0FBQTBCLEtBQUE7QUFBQXBCLGNBQUFxQixFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBcEIsY0FBQXNCLEVBQUE7RUFBQTtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbInN0aWNreWhlYWRlciIsICJ0aGVhZCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEJvZHkiLCAidGhlbiIsICIkYm9keSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZmluZCIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ0YWJsZSIsICJ2YWx1ZSIsICIkdGFibGUiLCAiJCIsICIkdGhlYWQiLCAiJHRyVGgiLCAicGFyZW50IiwgImVxIiwgIiR0clRkIiwgIiR0YXJnZXQiLCAibGVuZ3RoIiwgImFkZENsYXNzIiwgImNvbmNhdCIsICJlcnIiLCAiZSIsICJmIl0KfQo=
