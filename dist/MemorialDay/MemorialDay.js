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
//! src/MemorialDay/options.json
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L29wdGlvbnMuanNvbiIsICJzcmMvTWVtb3JpYWxEYXkvbW9kdWxlcy9NZW1vcmlhbERheS5tb2R1bGUubGVzcyIsICJzcmMvTWVtb3JpYWxEYXkvbW9kdWxlcy9hZGRTdHlsZVRhZy50cyIsICJzcmMvTWVtb3JpYWxEYXkvTWVtb3JpYWxEYXkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtTWVtb3JpYWxEYXlfX0luaXRpYWxpemVkXCJcbn1cbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL01lbW9yaWFsRGF5L21vZHVsZXMvTWVtb3JpYWxEYXkubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBtZW1vcmlhbCA9IFwiTWVtb3JpYWxEYXktbW9kdWxlX19tZW1vcmlhbF9jbnJSa2FfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIm1lbW9yaWFsXCI6IG1lbW9yaWFsXG59O1xuICAgICAgIiwgImltcG9ydCB7bWVtb3JpYWx9IGZyb20gJy4vTWVtb3JpYWxEYXkubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBhZGRTdHlsZVRhZyA9ICgpID0+IHtcblx0Y29uc3Qge3dnSXNNYWluUGFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnSXNNYWluUGFnZSkge1xuXHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKCdleHQuZ2FkZ2V0Lk1haW5wYWdlLU1vdXJuaW5nJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgQ0xBU1NfTElTVCA9IFtcblx0XHQnLnNraW4tY2l0aXplbiAubXctYm9keScsXG5cdFx0Jy5za2luLWdvbmdiaSAjbXctY29udGVudCcsXG5cdFx0Jy5za2luLXZlY3RvciAubXctYm9keScsXG5cdFx0Jy5za2luLXZlY3Rvci0yMDIyIC5tdy1ib2R5Jyxcblx0XTtcblxuXHRmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBDTEFTU19MSVNUKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSk/LmNsYXNzTGlzdC5hZGQobWVtb3JpYWwgYXMgc3RyaW5nKTtcblx0fVxufTtcblxuZXhwb3J0IHthZGRTdHlsZVRhZ307XG4iLCAiaW1wb3J0ICcuL01lbW9yaWFsRGF5Lmxlc3MnO1xuaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FkZFN0eWxlVGFnfSBmcm9tICcuL21vZHVsZXMvYWRkU3R5bGVUYWcnO1xuaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwYWdlTGlzdH0gZnJvbSAnZXh0LmdhZGdldC5NZW1vcmlhbERheS1zZXR0aW5ncyc7XG5cbihmdW5jdGlvbiBtZW1vcmlhbERheSgpIHtcblx0Ly8gR3VhcmQgYWdhaW5zdCBkb3VibGUgaW5jbHVzaW9uc1xuXHRpZiAobXcuY29uZmlnLmdldChPUFRJT05TLmNvbmZpZ0tleSkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIUFycmF5LmlzQXJyYXkocGFnZUxpc3QpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgREFURU5PVzogRGF0ZSA9IG5ldyBEYXRlKCk7XG5cdGNvbnN0IFlFQVI6IG51bWJlciA9IERBVEVOT1cuZ2V0RnVsbFllYXIoKTtcblx0Y29uc3QgTU9OVEg6IG51bWJlciA9IERBVEVOT1cuZ2V0TW9udGgoKSArIDE7XG5cdGNvbnN0IERBWTogbnVtYmVyID0gREFURU5PVy5nZXREYXRlKCk7XG5cblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGZvciAoY29uc3QgcGFnZSBvZiBwYWdlTGlzdCkge1xuXHRcdGlmICghcGFnZS50aXRsZXMgfHwgIXBhZ2UuZGF0ZXMpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCB7dGl0bGVzLCBkYXRlc30gPSBwYWdlO1xuXG5cdFx0aWYgKCF0aXRsZXMuaW5jbHVkZXMod2dQYWdlTmFtZSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFsbERhdGVzID0gZ2VuZXJhdGVBcnJheShkYXRlcyk7XG5cblx0XHRmb3IgKGxldCBkYXRlIG9mIGFsbERhdGVzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGRhdGUgPSBOdW1iZXIucGFyc2VJbnQoZGF0ZSwgMTApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWFsbERhdGVzLmluY2x1ZGVzKE1PTlRIICogMWUyICsgREFZKSAmJiAhYWxsRGF0ZXMuaW5jbHVkZXMoWUVBUiAqIDFlNCArIE1PTlRIICogMWUyICsgREFZKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0YWRkU3R5bGVUYWcoKTtcblx0XHRcdG13LmNvbmZpZy5zZXQoT1BUSU9OUy5jb25maWdLZXksIHRydWUpO1xuXHRcdH1cblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7O0FDQVAsSUFBTUMsV0FBVzs7QUNDeEIsSUFBTUMsY0FBY0EsTUFBTTtBQUN6QixRQUFNO0lBQUNDO0VBQVksSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUVyQyxNQUFJSCxjQUFjO0FBQ2pCLFNBQUtDLEdBQUdHLE9BQU9DLE1BQU0sOEJBQThCO0FBQ25EO0VBQ0Q7QUFFQSxRQUFNQyxhQUFhLENBQ2xCLDBCQUNBLDRCQUNBLHlCQUNBLDRCQUFBO0FBR0QsV0FBQUMsS0FBQSxHQUFBQyxjQUF3QkYsWUFBQUMsS0FBQUMsWUFBQUMsUUFBQUYsTUFBWTtBQUFBLFFBQUFHO0FBQXBDLFVBQVdDLFlBQUFILFlBQUFELEVBQUE7QUFFVixLQUFBRyx3QkFBQUUsU0FBU0MsY0FBY0YsU0FBUyxPQUFBLFFBQUFELDBCQUFBLFVBQWhDQSxzQkFBbUNJLFVBQVVDLElBQUlqQixRQUFrQjtFQUNwRTtBQUNEOztBQ2xCQSxJQUFBa0Isb0JBQTRCQyxRQUFBLGlCQUFBO0FBQzVCLElBQUFDLHFCQUF1QkQsUUFBQSxpQ0FBQTtDQUV0QixTQUFTRSxjQUFjO0FBRXZCLE1BQUlsQixHQUFHQyxPQUFPQyxJQUFZTixTQUFTLEdBQUc7QUFDckM7RUFDRDtBQUVBLE1BQUksQ0FBQ3VCLE1BQU1DLFFBQVFILG1CQUFBSSxRQUFRLEdBQUc7QUFDN0I7RUFDRDtBQUVBLFFBQU1DLFVBQWdCLG9CQUFJQyxLQUFLO0FBQy9CLFFBQU1DLE9BQWVGLFFBQVFHLFlBQVk7QUFDekMsUUFBTUMsUUFBZ0JKLFFBQVFLLFNBQVMsSUFBSTtBQUMzQyxRQUFNQyxNQUFjTixRQUFRTyxRQUFRO0FBRXBDLFFBQU07SUFBQ0M7RUFBVSxJQUFJOUIsR0FBR0MsT0FBT0MsSUFBSTtBQUFBLE1BQUE2QixZQUFBQywyQkFFaEJmLG1CQUFBSSxRQUFBLEdBQUFZO0FBQUEsTUFBQTtBQUFuQixTQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUE2QjtBQUFBLFlBQWxCQyxPQUFBSixNQUFBSztBQUNWLFVBQUksQ0FBQ0QsS0FBS0UsVUFBVSxDQUFDRixLQUFLRyxPQUFPO0FBQ2hDO01BQ0Q7QUFDQSxZQUFNO1FBQUNEO1FBQVFDO01BQUssSUFBSUg7QUFFeEIsVUFBSSxDQUFDRSxPQUFPRSxTQUFTWCxVQUFVLEdBQUc7QUFDakM7TUFDRDtBQUVBLFlBQU1ZLFlBQUEsR0FBVzNCLGtCQUFBNEIsZUFBY0gsS0FBSztBQUFBLFVBQUFJLGFBQUFaLDJCQUVuQlUsUUFBQSxHQUFBRztBQUFBLFVBQUE7QUFBakIsYUFBQUQsV0FBQVYsRUFBQSxHQUFBLEVBQUFXLFNBQUFELFdBQUFULEVBQUEsR0FBQUMsUUFBMkI7QUFBQSxjQUFsQlUsT0FBQUQsT0FBQVA7QUFDUixjQUFJLE9BQU9RLFNBQVMsVUFBVTtBQUM3QkEsbUJBQU9DLE9BQU9DLFNBQVNGLE1BQU0sRUFBRTtVQUNoQztBQUVBLGNBQUksQ0FBQ0osU0FBU0QsU0FBU2YsUUFBUSxNQUFNRSxHQUFHLEtBQUssQ0FBQ2MsU0FBU0QsU0FBU2pCLE9BQU8sTUFBTUUsUUFBUSxNQUFNRSxHQUFHLEdBQUc7QUFDaEc7VUFDRDtBQUVBOUIsc0JBQVk7QUFDWkUsYUFBR0MsT0FBT2dELElBQVlyRCxXQUFXLElBQUk7UUFDdEM7TUFBQSxTQUFBc0QsS0FBQTtBQUFBTixtQkFBQU8sRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQU4sbUJBQUFRLEVBQUE7TUFBQTtJQUNEO0VBQUEsU0FBQUYsS0FBQTtBQUFBbkIsY0FBQW9CLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFuQixjQUFBcUIsRUFBQTtFQUFBO0FBQ0QsR0FBRzsiLAogICJuYW1lcyI6IFsiY29uZmlnS2V5IiwgIm1lbW9yaWFsIiwgImFkZFN0eWxlVGFnIiwgIndnSXNNYWluUGFnZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImxvYWRlciIsICJ1c2luZyIsICJDTEFTU19MSVNUIiwgIl9pIiwgIl9DTEFTU19MSVNUIiwgImxlbmd0aCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiY2xhc3NOYW1lIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiY2xhc3NMaXN0IiwgImFkZCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJtZW1vcmlhbERheSIsICJBcnJheSIsICJpc0FycmF5IiwgInBhZ2VMaXN0IiwgIkRBVEVOT1ciLCAiRGF0ZSIsICJZRUFSIiwgImdldEZ1bGxZZWFyIiwgIk1PTlRIIiwgImdldE1vbnRoIiwgIkRBWSIsICJnZXREYXRlIiwgIndnUGFnZU5hbWUiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInBhZ2UiLCAidmFsdWUiLCAidGl0bGVzIiwgImRhdGVzIiwgImluY2x1ZGVzIiwgImFsbERhdGVzIiwgImdlbmVyYXRlQXJyYXkiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZGF0ZSIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAic2V0IiwgImVyciIsICJlIiwgImYiXQp9Cg==
