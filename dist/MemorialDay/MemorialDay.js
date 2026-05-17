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
//! src/MemorialDay/options.json
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
var configKey = "gadget-MemorialDay__Initialized";
//! src/MemorialDay/modules/MemorialDay.module.less
var memorial = "MemorialDay-module__memorial_cnrRka__4100";
//! src/MemorialDay/modules/addStyleTag.ts
var addStyleTag = () => {
  const {
    wgIsMainPage
  } = mw.config.get();
  if (wgIsMainPage) {
    void mw.loader.using("ext.gadget.Mainpage-Mourning");
    return;
  }
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
(function memorialDay() {
  if (mw.config.get(configKey)) {
    return;
  }
  if (!Array.isArray(import_ext_gadget2.pageList)) {
    return;
  }
  const DATENOW = /* @__PURE__ */ new Date();
  const YEAR = DATENOW.getFullYear();
  const MONTH = DATENOW.getMonth() + 1;
  const DAY = DATENOW.getDate();
  const {
    wgPageName
  } = mw.config.get();
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
      var _iterator2 = _createForOfIteratorHelper(allDates), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          let date = _step2.value;
          if (typeof date === "string") {
            date = Number.parseInt(date, 10);
          }
          if (!allDates.includes(MONTH * 100 + DAY) && !allDates.includes(YEAR * 1e4 + MONTH * 100 + DAY)) {
            continue;
          }
          addStyleTag();
          mw.config.set(configKey, true);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L29wdGlvbnMuanNvbiIsICJzcmMvTWVtb3JpYWxEYXkvbW9kdWxlcy9NZW1vcmlhbERheS5tb2R1bGUubGVzcyIsICJzcmMvTWVtb3JpYWxEYXkvbW9kdWxlcy9hZGRTdHlsZVRhZy50cyIsICJzcmMvTWVtb3JpYWxEYXkvTWVtb3JpYWxEYXkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtTWVtb3JpYWxEYXlfX0luaXRpYWxpemVkXCJcbn1cbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL01lbW9yaWFsRGF5L21vZHVsZXMvTWVtb3JpYWxEYXkubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBtZW1vcmlhbCA9IFwiTWVtb3JpYWxEYXktbW9kdWxlX19tZW1vcmlhbF9jbnJSa2FfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIm1lbW9yaWFsXCI6IG1lbW9yaWFsXG59O1xuICAgICAgIiwgImltcG9ydCB7bWVtb3JpYWx9IGZyb20gJy4vTWVtb3JpYWxEYXkubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBhZGRTdHlsZVRhZyA9ICgpID0+IHtcblx0Y29uc3Qge3dnSXNNYWluUGFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnSXNNYWluUGFnZSkge1xuXHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKCdleHQuZ2FkZ2V0Lk1haW5wYWdlLU1vdXJuaW5nJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgQ0xBU1NfTElTVCA9IFtcblx0XHQnLnNraW4tY2l0aXplbiAubXctYm9keScsXG5cdFx0Jy5za2luLWdvbmdiaSAjbXctY29udGVudCcsXG5cdFx0Jy5za2luLXZlY3RvciAubXctYm9keScsXG5cdFx0Jy5za2luLXZlY3Rvci0yMDIyIC5tdy1ib2R5Jyxcblx0XTtcblxuXHRmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBDTEFTU19MSVNUKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc05hbWUpPy5jbGFzc0xpc3QuYWRkKG1lbW9yaWFsIGFzIHN0cmluZyk7XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkU3R5bGVUYWd9O1xuIiwgImltcG9ydCAnLi9NZW1vcmlhbERheS5sZXNzJztcbmltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthZGRTdHlsZVRhZ30gZnJvbSAnLi9tb2R1bGVzL2FkZFN0eWxlVGFnJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cGFnZUxpc3R9IGZyb20gJ2V4dC5nYWRnZXQuTWVtb3JpYWxEYXktc2V0dGluZ3MnO1xuXG4oZnVuY3Rpb24gbWVtb3JpYWxEYXkoKSB7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnNcblx0aWYgKG13LmNvbmZpZy5nZXQoT1BUSU9OUy5jb25maWdLZXkpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFBcnJheS5pc0FycmF5KHBhZ2VMaXN0KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IERBVEVOT1c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXHRjb25zdCBZRUFSOiBudW1iZXIgPSBEQVRFTk9XLmdldEZ1bGxZZWFyKCk7XG5cdGNvbnN0IE1PTlRIOiBudW1iZXIgPSBEQVRFTk9XLmdldE1vbnRoKCkgKyAxO1xuXHRjb25zdCBEQVk6IG51bWJlciA9IERBVEVOT1cuZ2V0RGF0ZSgpO1xuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcGFnZUxpc3QpIHtcblx0XHRpZiAoIXBhZ2UudGl0bGVzIHx8ICFwYWdlLmRhdGVzKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3Qge3RpdGxlcywgZGF0ZXN9ID0gcGFnZTtcblxuXHRcdGlmICghdGl0bGVzLmluY2x1ZGVzKHdnUGFnZU5hbWUpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBhbGxEYXRlcyA9IGdlbmVyYXRlQXJyYXkoZGF0ZXMpO1xuXG5cdFx0Zm9yIChsZXQgZGF0ZSBvZiBhbGxEYXRlcykge1xuXHRcdFx0aWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRkYXRlID0gTnVtYmVyLnBhcnNlSW50KGRhdGUsIDEwKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFhbGxEYXRlcy5pbmNsdWRlcyhNT05USCAqIDFlMiArIERBWSkgJiYgIWFsbERhdGVzLmluY2x1ZGVzKFlFQVIgKiAxZTQgKyBNT05USCAqIDFlMiArIERBWSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGFkZFN0eWxlVGFnKCk7XG5cdFx0XHRtdy5jb25maWcuc2V0KE9QVElPTlMuY29uZmlnS2V5LCB0cnVlKTtcblx0XHR9XG5cdH1cbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhOztBQ0FQLElBQU1DLFdBQVc7O0FDQ3hCLElBQU1DLGNBQWNBLE1BQU07QUFDekIsUUFBTTtJQUFDQztFQUFZLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFckMsTUFBSUgsY0FBYztBQUNqQixTQUFLQyxHQUFHRyxPQUFPQyxNQUFNLDhCQUE4QjtBQUNuRDtFQUNEO0FBRUEsUUFBTUMsYUFBYSxDQUNsQiwwQkFDQSw0QkFDQSx5QkFDQSw0QkFBQTtBQUdELFdBQUFDLEtBQUEsR0FBQUMsY0FBd0JGLFlBQUFDLEtBQUFDLFlBQUFDLFFBQUFGLE1BQVk7QUFBQSxRQUFBRztBQUFwQyxVQUFXQyxZQUFBSCxZQUFBRCxFQUFBO0FBQ1YsS0FBQUcsd0JBQUFFLFNBQVNDLGNBQWNGLFNBQVMsT0FBQSxRQUFBRCwwQkFBQSxVQUFoQ0Esc0JBQW1DSSxVQUFVQyxJQUFJakIsUUFBa0I7RUFDcEU7QUFDRDs7QUNqQkEsSUFBQWtCLG9CQUE0QkMsUUFBQSxpQkFBQTtBQUM1QixJQUFBQyxxQkFBdUJELFFBQUEsaUNBQUE7Q0FFdEIsU0FBU0UsY0FBYztBQUV2QixNQUFJbEIsR0FBR0MsT0FBT0MsSUFBWU4sU0FBUyxHQUFHO0FBQ3JDO0VBQ0Q7QUFFQSxNQUFJLENBQUN1QixNQUFNQyxRQUFRSCxtQkFBQUksUUFBUSxHQUFHO0FBQzdCO0VBQ0Q7QUFFQSxRQUFNQyxVQUFnQixvQkFBSUMsS0FBSztBQUMvQixRQUFNQyxPQUFlRixRQUFRRyxZQUFZO0FBQ3pDLFFBQU1DLFFBQWdCSixRQUFRSyxTQUFTLElBQUk7QUFDM0MsUUFBTUMsTUFBY04sUUFBUU8sUUFBUTtBQUVwQyxRQUFNO0lBQUNDO0VBQVUsSUFBSTlCLEdBQUdDLE9BQU9DLElBQUk7QUFBQSxNQUFBNkIsWUFBQUMsMkJBRWhCZixtQkFBQUksUUFBQSxHQUFBWTtBQUFBLE1BQUE7QUFBbkIsU0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBNkI7QUFBQSxZQUFsQkMsT0FBQUosTUFBQUs7QUFDVixVQUFJLENBQUNELEtBQUtFLFVBQVUsQ0FBQ0YsS0FBS0csT0FBTztBQUNoQztNQUNEO0FBQ0EsWUFBTTtRQUFDRDtRQUFRQztNQUFLLElBQUlIO0FBRXhCLFVBQUksQ0FBQ0UsT0FBT0UsU0FBU1gsVUFBVSxHQUFHO0FBQ2pDO01BQ0Q7QUFFQSxZQUFNWSxZQUFBLEdBQVczQixrQkFBQTRCLGVBQWNILEtBQUs7QUFBQSxVQUFBSSxhQUFBWiwyQkFFbkJVLFFBQUEsR0FBQUc7QUFBQSxVQUFBO0FBQWpCLGFBQUFELFdBQUFWLEVBQUEsR0FBQSxFQUFBVyxTQUFBRCxXQUFBVCxFQUFBLEdBQUFDLFFBQTJCO0FBQUEsY0FBbEJVLE9BQUFELE9BQUFQO0FBQ1IsY0FBSSxPQUFPUSxTQUFTLFVBQVU7QUFDN0JBLG1CQUFPQyxPQUFPQyxTQUFTRixNQUFNLEVBQUU7VUFDaEM7QUFFQSxjQUFJLENBQUNKLFNBQVNELFNBQVNmLFFBQVEsTUFBTUUsR0FBRyxLQUFLLENBQUNjLFNBQVNELFNBQVNqQixPQUFPLE1BQU1FLFFBQVEsTUFBTUUsR0FBRyxHQUFHO0FBQ2hHO1VBQ0Q7QUFFQTlCLHNCQUFZO0FBQ1pFLGFBQUdDLE9BQU9nRCxJQUFZckQsV0FBVyxJQUFJO1FBQ3RDO01BQUEsU0FBQXNELEtBQUE7QUFBQU4sbUJBQUFPLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUFOLG1CQUFBUSxFQUFBO01BQUE7SUFDRDtFQUFBLFNBQUFGLEtBQUE7QUFBQW5CLGNBQUFvQixFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBbkIsY0FBQXFCLEVBQUE7RUFBQTtBQUNELEdBQUc7IiwKICAibmFtZXMiOiBbImNvbmZpZ0tleSIsICJtZW1vcmlhbCIsICJhZGRTdHlsZVRhZyIsICJ3Z0lzTWFpblBhZ2UiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJsb2FkZXIiLCAidXNpbmciLCAiQ0xBU1NfTElTVCIsICJfaSIsICJfQ0xBU1NfTElTVCIsICJsZW5ndGgiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgImNsYXNzTmFtZSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImNsYXNzTGlzdCIsICJhZGQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAibWVtb3JpYWxEYXkiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJwYWdlTGlzdCIsICJEQVRFTk9XIiwgIkRhdGUiLCAiWUVBUiIsICJnZXRGdWxsWWVhciIsICJNT05USCIsICJnZXRNb250aCIsICJEQVkiLCAiZ2V0RGF0ZSIsICJ3Z1BhZ2VOYW1lIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJwYWdlIiwgInZhbHVlIiwgInRpdGxlcyIsICJkYXRlcyIsICJpbmNsdWRlcyIsICJhbGxEYXRlcyIsICJnZW5lcmF0ZUFycmF5IiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImRhdGUiLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgInNldCIsICJlcnIiLCAiZSIsICJmIl0KfQo=
