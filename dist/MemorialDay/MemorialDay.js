/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/MemorialDay}
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

// dist/MemorialDay/MemorialDay.js
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
//! src/MemorialDay/modules/MemorialDay.module.less
var memorial = "MemorialDay-module__memorial_cnrRka";
//! src/MemorialDay/modules/addStyleTag.ts
var addStyleTag = () => {
  const CLASS_LIST = [".skin-citizen .mw-body", ".skin-gongbi #mw-content", ".skin-vector .mw-body", ".skin-vector-2022 .mw-body"];
  for (var _i = 0, _CLASS_LIST = CLASS_LIST; _i < _CLASS_LIST.length; _i++) {
    var _document$querySelect;
    const className = _CLASS_LIST[_i];
    (_document$querySelect = document.querySelector(className)) === null || _document$querySelect === void 0 || _document$querySelect.classList.add(memorial);
  }
};
//! src/MemorialDay/MemorialDay.ts
var import_ext_gadget = require("ext.gadget.Util");
var import_ext_gadget2 = require("ext.gadget.MemorialDay-settings");
(function MemorialDay() {
  const DATENOW = /* @__PURE__ */ new Date();
  const YEAR = DATENOW.getFullYear();
  const MONTH = DATENOW.getMonth() + 1;
  const DAY = DATENOW.getDate();
  const {
    wgPageName
  } = mw.config.get();
  if (!Array.isArray(import_ext_gadget2.pageList)) {
    return;
  }
  var _iterator = _createForOfIteratorHelper(import_ext_gadget2.pageList), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const page = _step.value;
      if (!page.titles || !page.dates) {
        continue;
      }
      const {
        titles,
        dates
      } = page;
      if (!titles.includes(wgPageName)) {
        continue;
      }
      const allDates = (0, import_ext_gadget.generateArray)(dates);
      if (!allDates.includes(MONTH * 100 + DAY) && !allDates.includes(YEAR * 1e4 + MONTH * 100 + DAY)) {
        continue;
      }
      addStyleTag();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvTWVtb3JpYWxEYXkubW9kdWxlLmxlc3MiLCAic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvYWRkU3R5bGVUYWcudHMiLCAic3JjL01lbW9yaWFsRGF5L01lbW9yaWFsRGF5LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL01lbW9yaWFsRGF5L21vZHVsZXMvTWVtb3JpYWxEYXkubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBtZW1vcmlhbCA9IFwiTWVtb3JpYWxEYXktbW9kdWxlX19tZW1vcmlhbF9jbnJSa2FcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIm1lbW9yaWFsXCI6IG1lbW9yaWFsXG59O1xuICAgICAgIiwgImltcG9ydCB7bWVtb3JpYWx9IGZyb20gJy4vTWVtb3JpYWxEYXkubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBhZGRTdHlsZVRhZyA9ICgpID0+IHtcblx0Y29uc3QgQ0xBU1NfTElTVCA9IFtcblx0XHQnLnNraW4tY2l0aXplbiAubXctYm9keScsXG5cdFx0Jy5za2luLWdvbmdiaSAjbXctY29udGVudCcsXG5cdFx0Jy5za2luLXZlY3RvciAubXctYm9keScsXG5cdFx0Jy5za2luLXZlY3Rvci0yMDIyIC5tdy1ib2R5Jyxcblx0XTtcblxuXHRmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBDTEFTU19MSVNUKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSk/LmNsYXNzTGlzdC5hZGQobWVtb3JpYWwgYXMgc3RyaW5nKTtcblx0fVxufTtcblxuZXhwb3J0IHthZGRTdHlsZVRhZ307XG4iLCAiaW1wb3J0IHthZGRTdHlsZVRhZ30gZnJvbSAnLi9tb2R1bGVzL2FkZFN0eWxlVGFnJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cGFnZUxpc3R9IGZyb20gJ2V4dC5nYWRnZXQuTWVtb3JpYWxEYXktc2V0dGluZ3MnO1xuXG4oZnVuY3Rpb24gTWVtb3JpYWxEYXkoKSB7XG5cdGNvbnN0IERBVEVOT1c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXHRjb25zdCBZRUFSOiBudW1iZXIgPSBEQVRFTk9XLmdldEZ1bGxZZWFyKCk7XG5cdGNvbnN0IE1PTlRIOiBudW1iZXIgPSBEQVRFTk9XLmdldE1vbnRoKCkgKyAxO1xuXHRjb25zdCBEQVk6IG51bWJlciA9IERBVEVOT1cuZ2V0RGF0ZSgpO1xuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIUFycmF5LmlzQXJyYXkocGFnZUxpc3QpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yIChjb25zdCBwYWdlIG9mIHBhZ2VMaXN0KSB7XG5cdFx0aWYgKCFwYWdlLnRpdGxlcyB8fCAhcGFnZS5kYXRlcykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IHt0aXRsZXMsIGRhdGVzfSA9IHBhZ2U7XG5cblx0XHRpZiAoIXRpdGxlcy5pbmNsdWRlcyh3Z1BhZ2VOYW1lKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWxsRGF0ZXMgPSBnZW5lcmF0ZUFycmF5KGRhdGVzKTtcblxuXHRcdGlmICghYWxsRGF0ZXMuaW5jbHVkZXMoTU9OVEggKiAxZTIgKyBEQVkpICYmICFhbGxEYXRlcy5pbmNsdWRlcyhZRUFSICogMWU0ICsgTU9OVEggKiAxZTIgKyBEQVkpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRhZGRTdHlsZVRhZygpO1xuXHR9XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsV0FBVzs7QUNDeEIsSUFBTUMsY0FBY0EsTUFBTTtBQUN6QixRQUFNQyxhQUFhLENBQ2xCLDBCQUNBLDRCQUNBLHlCQUNBLDRCQUFBO0FBR0QsV0FBQUMsS0FBQSxHQUFBQyxjQUF3QkYsWUFBQUMsS0FBQUMsWUFBQUMsUUFBQUYsTUFBWTtBQUFBLFFBQUFHO0FBQXBDLFVBQVdDLFlBQUFILFlBQUFELEVBQUE7QUFFVixLQUFBRyx3QkFBQUUsU0FBU0MsY0FBY0YsU0FBUyxPQUFBLFFBQUFELDBCQUFBLFVBQWhDQSxzQkFBbUNJLFVBQVVDLElBQUlYLFFBQWtCO0VBQ3BFO0FBQ0Q7O0FDYkEsSUFBQVksb0JBQTRCQyxRQUFBLGlCQUFBO0FBQzVCLElBQUFDLHFCQUF1QkQsUUFBQSxpQ0FBQTtDQUV0QixTQUFTRSxjQUFjO0FBQ3ZCLFFBQU1DLFVBQWdCLG9CQUFJQyxLQUFLO0FBQy9CLFFBQU1DLE9BQWVGLFFBQVFHLFlBQVk7QUFDekMsUUFBTUMsUUFBZ0JKLFFBQVFLLFNBQVMsSUFBSTtBQUMzQyxRQUFNQyxNQUFjTixRQUFRTyxRQUFRO0FBRXBDLFFBQU07SUFBQ0M7RUFBVSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRW5DLE1BQUksQ0FBQ0MsTUFBTUMsUUFBUWYsbUJBQUFnQixRQUFRLEdBQUc7QUFDN0I7RUFDRDtBQUFBLE1BQUFDLFlBQUFDLDJCQUVtQmxCLG1CQUFBZ0IsUUFBQSxHQUFBRztBQUFBLE1BQUE7QUFBbkIsU0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBNkI7QUFBQSxZQUFsQkMsT0FBQUosTUFBQUs7QUFDVixVQUFJLENBQUNELEtBQUtFLFVBQVUsQ0FBQ0YsS0FBS0csT0FBTztBQUNoQztNQUNEO0FBQ0EsWUFBTTtRQUFDRDtRQUFRQztNQUFLLElBQUlIO0FBRXhCLFVBQUksQ0FBQ0UsT0FBT0UsU0FBU2pCLFVBQVUsR0FBRztBQUNqQztNQUNEO0FBRUEsWUFBTWtCLFlBQUEsR0FBVzlCLGtCQUFBK0IsZUFBY0gsS0FBSztBQUVwQyxVQUFJLENBQUNFLFNBQVNELFNBQVNyQixRQUFRLE1BQU1FLEdBQUcsS0FBSyxDQUFDb0IsU0FBU0QsU0FBU3ZCLE9BQU8sTUFBTUUsUUFBUSxNQUFNRSxHQUFHLEdBQUc7QUFDaEc7TUFDRDtBQUVBckIsa0JBQVk7SUFDYjtFQUFBLFNBQUEyQyxLQUFBO0FBQUFiLGNBQUFjLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFiLGNBQUFlLEVBQUE7RUFBQTtBQUNELEdBQUc7IiwKICAibmFtZXMiOiBbIm1lbW9yaWFsIiwgImFkZFN0eWxlVGFnIiwgIkNMQVNTX0xJU1QiLCAiX2kiLCAiX0NMQVNTX0xJU1QiLCAibGVuZ3RoIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJjbGFzc05hbWUiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJjbGFzc0xpc3QiLCAiYWRkIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIk1lbW9yaWFsRGF5IiwgIkRBVEVOT1ciLCAiRGF0ZSIsICJZRUFSIiwgImdldEZ1bGxZZWFyIiwgIk1PTlRIIiwgImdldE1vbnRoIiwgIkRBWSIsICJnZXREYXRlIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJBcnJheSIsICJpc0FycmF5IiwgInBhZ2VMaXN0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJwYWdlIiwgInZhbHVlIiwgInRpdGxlcyIsICJkYXRlcyIsICJpbmNsdWRlcyIsICJhbGxEYXRlcyIsICJnZW5lcmF0ZUFycmF5IiwgImVyciIsICJlIiwgImYiXQp9Cg==
