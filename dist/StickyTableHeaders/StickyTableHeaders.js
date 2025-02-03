/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/StickyTableHeaders}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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
var stickyheader = "StickyTableHeaders-module__stickyheader_eOk_LG__490";
var thead = "StickyTableHeaders-module__thead_eOk_LG__490";
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
        $table.addClass(stickyheader);
        $target.addClass(thead);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1N0aWNreVRhYmxlSGVhZGVycy9TdGlja3lUYWJsZUhlYWRlcnMubW9kdWxlLmxlc3MiLCAic3JjL1N0aWNreVRhYmxlSGVhZGVycy9TdGlja3lUYWJsZUhlYWRlcnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvU3RpY2t5VGFibGVIZWFkZXJzL1N0aWNreVRhYmxlSGVhZGVycy5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IHN0aWNreWhlYWRlciA9IFwiU3RpY2t5VGFibGVIZWFkZXJzLW1vZHVsZV9fc3RpY2t5aGVhZGVyX2VPa19MR19fNDkwXCI7XG5leHBvcnQgY29uc3QgdGhlYWQgPSBcIlN0aWNreVRhYmxlSGVhZGVycy1tb2R1bGVfX3RoZWFkX2VPa19MR19fNDkwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJzdGlja3loZWFkZXJcIjogc3RpY2t5aGVhZGVyLFxuICBcInRoZWFkXCI6IHRoZWFkXG59O1xuICAgICAgIiwgIi8qIGVzbGludC1kaXNhYmxlIG1lZGlhd2lraS9jbGFzcy1kb2MgKi9cbmltcG9ydCB7c3RpY2t5aGVhZGVyLCB0aGVhZH0gZnJvbSAnLi9TdGlja3lUYWJsZUhlYWRlcnMubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCB0YWJsZSBvZiAkYm9keS5maW5kPEhUTUxUYWJsZUVsZW1lbnQ+KCcud2lraXRhYmxlOm5vdCguc29ydGFibGUpJykpIHtcblx0XHRjb25zdCAkdGFibGU6IEpRdWVyeTxIVE1MVGFibGVFbGVtZW50PiA9ICQodGFibGUpO1xuXG5cdFx0Y29uc3QgJHRoZWFkOiBKUXVlcnk8SFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ+ID0gJHRhYmxlLmZpbmQoJ3RoZWFkJyk7XG5cdFx0Y29uc3QgJHRyVGggPSAkdGFibGUuZmluZCgndGJvZHkgPiB0ciA+IHRoJykucGFyZW50PEhUTUxUYWJsZVJvd0VsZW1lbnQ+KCkuZXEoMCk7XG5cdFx0Y29uc3QgJHRyVGQgPSAkdGFibGUuZmluZCgndGJvZHkgPiB0ciA+IHRkJykucGFyZW50KCk7XG5cblx0XHRjb25zdCAkdGFyZ2V0OiBKUXVlcnk8SFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ+IHwgSlF1ZXJ5PEhUTUxUYWJsZVJvd0VsZW1lbnQ+IHwgbnVsbCA9ICR0aGVhZC5sZW5ndGhcblx0XHRcdD8gJHRoZWFkXG5cdFx0XHQ6ICR0clRoLmxlbmd0aFxuXHRcdFx0XHQ/ICR0clRoXG5cdFx0XHRcdDogbnVsbDtcblxuXHRcdGlmICgkdGFyZ2V0ICYmICR0clRkLmxlbmd0aCA+PSA1KSB7XG5cdFx0XHQkdGFibGUuYWRkQ2xhc3Moc3RpY2t5aGVhZGVyIGFzIHN0cmluZyk7XG5cdFx0XHQkdGFyZ2V0LmFkZENsYXNzKHRoZWFkIGFzIHN0cmluZyk7XG5cdFx0fVxuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNPLElBQU1BLGVBQWU7QUFDckIsSUFBTUMsUUFBUTs7QUNBckIsSUFBQUMsb0JBQXNCQyxRQUFBLGlCQUFBO0FBRXRCLE1BQUEsR0FBS0Qsa0JBQUFFLFNBQVEsRUFBRUMsS0FBTUMsV0FBeUM7QUFBQSxNQUFBQyxZQUFBQywyQkFDekNGLE1BQU1HLEtBQXVCLDJCQUEyQixDQUFBLEdBQUFDO0FBQUEsTUFBQTtBQUE1RSxTQUFBSCxVQUFBSSxFQUFBLEdBQUEsRUFBQUQsUUFBQUgsVUFBQUssRUFBQSxHQUFBQyxRQUErRTtBQUFBLFlBQXBFQyxRQUFBSixNQUFBSztBQUNWLFlBQU1DLFNBQW1DQyxFQUFFSCxLQUFLO0FBRWhELFlBQU1JLFNBQTBDRixPQUFPUCxLQUFLLE9BQU87QUFDbkUsWUFBTVUsUUFBUUgsT0FBT1AsS0FBSyxpQkFBaUIsRUFBRVcsT0FBNEIsRUFBRUMsR0FBRyxDQUFDO0FBQy9FLFlBQU1DLFFBQVFOLE9BQU9QLEtBQUssaUJBQWlCLEVBQUVXLE9BQU87QUFFcEQsWUFBTUcsVUFBZ0ZMLE9BQU9NLFNBQzFGTixTQUNBQyxNQUFNSyxTQUNMTCxRQUNBO0FBRUosVUFBSUksV0FBV0QsTUFBTUUsVUFBVSxHQUFHO0FBQ2pDUixlQUFPUyxTQUFTekIsWUFBc0I7QUFDdEN1QixnQkFBUUUsU0FBU3hCLEtBQWU7TUFDakM7SUFDRDtFQUFBLFNBQUF5QixLQUFBO0FBQUFuQixjQUFBb0IsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQW5CLGNBQUFxQixFQUFBO0VBQUE7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJzdGlja3loZWFkZXIiLCAidGhlYWQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImZpbmQiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidGFibGUiLCAidmFsdWUiLCAiJHRhYmxlIiwgIiQiLCAiJHRoZWFkIiwgIiR0clRoIiwgInBhcmVudCIsICJlcSIsICIkdHJUZCIsICIkdGFyZ2V0IiwgImxlbmd0aCIsICJhZGRDbGFzcyIsICJlcnIiLCAiZSIsICJmIl0KfQo=
