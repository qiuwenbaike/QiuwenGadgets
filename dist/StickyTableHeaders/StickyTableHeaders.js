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
//! src/StickyTableHeaders/StickyTableHeaders.ts
var import_ext_gadget = require("ext.gadget.Util");
void (0, import_ext_gadget.getBody)().then(($body) => {
  var _iterator = _createForOfIteratorHelper($body.find(".wikitable:not(.sortable)")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const table = _step.value;
      const $table = $(table);
      const $thead = $table.find("thead");
      const $trTh = $table.find("tbody>tr>th").parent().eq(0);
      const $trTd = $table.find("tbody>tr>td").parent();
      const $target = $thead.length ? $thead : $trTh.length ? $trTh : null;
      if ($target && $trTd.length >= 5) {
        $table.addClass("mw-sticky-header");
        $target.addClass("thead");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1N0aWNreVRhYmxlSGVhZGVycy9TdGlja3lUYWJsZUhlYWRlcnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgdGFibGUgb2YgJGJvZHkuZmluZDxIVE1MVGFibGVFbGVtZW50PignLndpa2l0YWJsZTpub3QoLnNvcnRhYmxlKScpKSB7XG5cdFx0Y29uc3QgJHRhYmxlOiBKUXVlcnk8SFRNTFRhYmxlRWxlbWVudD4gPSAkKHRhYmxlKTtcblxuXHRcdGNvbnN0ICR0aGVhZDogSlF1ZXJ5PEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50PiA9ICR0YWJsZS5maW5kKCd0aGVhZCcpO1xuXHRcdGNvbnN0ICR0clRoID0gJHRhYmxlLmZpbmQoJ3Rib2R5PnRyPnRoJykucGFyZW50KCkuZXEoMCkgYXMgSlF1ZXJ5PEhUTUxUYWJsZVJvd0VsZW1lbnQ+O1xuXHRcdGNvbnN0ICR0clRkID0gJHRhYmxlLmZpbmQoJ3Rib2R5PnRyPnRkJykucGFyZW50KCkgYXMgSlF1ZXJ5PEhUTUxUYWJsZVJvd0VsZW1lbnQ+O1xuXG5cdFx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5PEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50PiB8IEpRdWVyeTxIVE1MVGFibGVSb3dFbGVtZW50PiB8IG51bGwgPSAkdGhlYWQubGVuZ3RoXG5cdFx0XHQ/ICR0aGVhZFxuXHRcdFx0OiAkdHJUaC5sZW5ndGhcblx0XHRcdFx0PyAkdHJUaFxuXHRcdFx0XHQ6IG51bGw7XG5cblx0XHRpZiAoJHRhcmdldCAmJiAkdHJUZC5sZW5ndGggPj0gNSkge1xuXHRcdFx0JHRhYmxlLmFkZENsYXNzKCdtdy1zdGlja3ktaGVhZGVyJyk7XG5cdFx0XHQkdGFyZ2V0LmFkZENsYXNzKCd0aGVhZCcpO1xuXHRcdH1cblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFzQkMsUUFBQSxpQkFBQTtBQUV0QixNQUFBLEdBQUtELGtCQUFBRSxTQUFRLEVBQUVDLEtBQU1DLFdBQXlDO0FBQUEsTUFBQUMsWUFBQUMsMkJBQ3pDRixNQUFNRyxLQUF1QiwyQkFBMkIsQ0FBQSxHQUFBQztBQUFBLE1BQUE7QUFBNUUsU0FBQUgsVUFBQUksRUFBQSxHQUFBLEVBQUFELFFBQUFILFVBQUFLLEVBQUEsR0FBQUMsUUFBK0U7QUFBQSxZQUFwRUMsUUFBQUosTUFBQUs7QUFDVixZQUFNQyxTQUFtQ0MsRUFBRUgsS0FBSztBQUVoRCxZQUFNSSxTQUEwQ0YsT0FBT1AsS0FBSyxPQUFPO0FBQ25FLFlBQU1VLFFBQVFILE9BQU9QLEtBQUssYUFBYSxFQUFFVyxPQUFPLEVBQUVDLEdBQUcsQ0FBQztBQUN0RCxZQUFNQyxRQUFRTixPQUFPUCxLQUFLLGFBQWEsRUFBRVcsT0FBTztBQUVoRCxZQUFNRyxVQUFnRkwsT0FBT00sU0FDMUZOLFNBQ0FDLE1BQU1LLFNBQ0xMLFFBQ0E7QUFFSixVQUFJSSxXQUFXRCxNQUFNRSxVQUFVLEdBQUc7QUFDakNSLGVBQU9TLFNBQVMsa0JBQWtCO0FBQ2xDRixnQkFBUUUsU0FBUyxPQUFPO01BQ3pCO0lBQ0Q7RUFBQSxTQUFBQyxLQUFBO0FBQUFuQixjQUFBb0IsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQW5CLGNBQUFxQixFQUFBO0VBQUE7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEJvZHkiLCAidGhlbiIsICIkYm9keSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZmluZCIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ0YWJsZSIsICJ2YWx1ZSIsICIkdGFibGUiLCAiJCIsICIkdGhlYWQiLCAiJHRyVGgiLCAicGFyZW50IiwgImVxIiwgIiR0clRkIiwgIiR0YXJnZXQiLCAibGVuZ3RoIiwgImFkZENsYXNzIiwgImVyciIsICJlIiwgImYiXQp9Cg==
