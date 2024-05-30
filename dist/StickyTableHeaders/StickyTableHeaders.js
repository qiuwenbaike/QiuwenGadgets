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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1N0aWNreVRhYmxlSGVhZGVycy9TdGlja3lUYWJsZUhlYWRlcnMubW9kdWxlLmxlc3MiLCAic3JjL1N0aWNreVRhYmxlSGVhZGVycy9TdGlja3lUYWJsZUhlYWRlcnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvU3RpY2t5VGFibGVIZWFkZXJzL1N0aWNreVRhYmxlSGVhZGVycy5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IHN0aWNreWhlYWRlciA9IFwiU3RpY2t5VGFibGVIZWFkZXJzLW1vZHVsZV9fc3RpY2t5aGVhZGVyX2VPa19MR1wiO1xuZXhwb3J0IGNvbnN0IHRoZWFkID0gXCJTdGlja3lUYWJsZUhlYWRlcnMtbW9kdWxlX190aGVhZF9lT2tfTEdcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInN0aWNreWhlYWRlclwiOiBzdGlja3loZWFkZXIsXG4gIFwidGhlYWRcIjogdGhlYWRcbn07XG4gICAgICAiLCAiLyogZXNsaW50LWRpc2FibGUgbWVkaWF3aWtpL2NsYXNzLWRvYyAqL1xuaW1wb3J0IHtzdGlja3loZWFkZXIsIHRoZWFkfSBmcm9tICcuL1N0aWNreVRhYmxlSGVhZGVycy5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IHRhYmxlIG9mICRib2R5LmZpbmQ8SFRNTFRhYmxlRWxlbWVudD4oJy53aWtpdGFibGU6bm90KC5zb3J0YWJsZSknKSkge1xuXHRcdGNvbnN0ICR0YWJsZTogSlF1ZXJ5PEhUTUxUYWJsZUVsZW1lbnQ+ID0gJCh0YWJsZSk7XG5cblx0XHRjb25zdCAkdGhlYWQ6IEpRdWVyeTxIVE1MVGFibGVTZWN0aW9uRWxlbWVudD4gPSAkdGFibGUuZmluZCgndGhlYWQnKTtcblx0XHRjb25zdCAkdHJUaCA9ICR0YWJsZS5maW5kKCd0Ym9keSA+IHRyID4gdGgnKS5wYXJlbnQoKS5lcSgwKSBhcyBKUXVlcnk8SFRNTFRhYmxlUm93RWxlbWVudD47XG5cdFx0Y29uc3QgJHRyVGQgPSAkdGFibGUuZmluZCgndGJvZHkgPiB0ciA+IHRkJykucGFyZW50KCkgYXMgSlF1ZXJ5PEhUTUxUYWJsZVJvd0VsZW1lbnQ+O1xuXG5cdFx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5PEhUTUxUYWJsZVNlY3Rpb25FbGVtZW50PiB8IEpRdWVyeTxIVE1MVGFibGVSb3dFbGVtZW50PiB8IG51bGwgPSAkdGhlYWQubGVuZ3RoXG5cdFx0XHQ/ICR0aGVhZFxuXHRcdFx0OiAkdHJUaC5sZW5ndGhcblx0XHRcdFx0PyAkdHJUaFxuXHRcdFx0XHQ6IG51bGw7XG5cblx0XHRpZiAoJHRhcmdldCAmJiAkdHJUZC5sZW5ndGggPj0gNSkge1xuXHRcdFx0JHRhYmxlLmFkZENsYXNzKGAke3N0aWNreWhlYWRlcn1gKTtcblx0XHRcdCR0YXJnZXQuYWRkQ2xhc3MoYCR7dGhlYWR9YCk7XG5cdFx0fVxuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxlQUFlO0FBQ3JCLElBQU1DLFFBQVE7O0FDQXJCLElBQUFDLG9CQUFzQkMsUUFBQSxpQkFBQTtBQUV0QixNQUFBLEdBQUtELGtCQUFBRSxTQUFRLEVBQUVDLEtBQU1DLFdBQXlDO0FBQUEsTUFBQUMsWUFBQUMsMkJBQ3pDRixNQUFNRyxLQUF1QiwyQkFBMkIsQ0FBQSxHQUFBQztBQUFBLE1BQUE7QUFBNUUsU0FBQUgsVUFBQUksRUFBQSxHQUFBLEVBQUFELFFBQUFILFVBQUFLLEVBQUEsR0FBQUMsUUFBK0U7QUFBQSxZQUFwRUMsUUFBQUosTUFBQUs7QUFDVixZQUFNQyxTQUFtQ0MsRUFBRUgsS0FBSztBQUVoRCxZQUFNSSxTQUEwQ0YsT0FBT1AsS0FBSyxPQUFPO0FBQ25FLFlBQU1VLFFBQVFILE9BQU9QLEtBQUssaUJBQWlCLEVBQUVXLE9BQU8sRUFBRUMsR0FBRyxDQUFDO0FBQzFELFlBQU1DLFFBQVFOLE9BQU9QLEtBQUssaUJBQWlCLEVBQUVXLE9BQU87QUFFcEQsWUFBTUcsVUFBZ0ZMLE9BQU9NLFNBQzFGTixTQUNBQyxNQUFNSyxTQUNMTCxRQUNBO0FBRUosVUFBSUksV0FBV0QsTUFBTUUsVUFBVSxHQUFHO0FBQ2pDUixlQUFPUyxTQUFBLEdBQUFDLE9BQVkxQixZQUFZLENBQUU7QUFDakN1QixnQkFBUUUsU0FBQSxHQUFBQyxPQUFZekIsS0FBSyxDQUFFO01BQzVCO0lBQ0Q7RUFBQSxTQUFBMEIsS0FBQTtBQUFBcEIsY0FBQXFCLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFwQixjQUFBc0IsRUFBQTtFQUFBO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsic3RpY2t5aGVhZGVyIiwgInRoZWFkIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgIiRib2R5IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJmaW5kIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInRhYmxlIiwgInZhbHVlIiwgIiR0YWJsZSIsICIkIiwgIiR0aGVhZCIsICIkdHJUaCIsICJwYXJlbnQiLCAiZXEiLCAiJHRyVGQiLCAiJHRhcmdldCIsICJsZW5ndGgiLCAiYWRkQ2xhc3MiLCAiY29uY2F0IiwgImVyciIsICJlIiwgImYiXQp9Cg==
