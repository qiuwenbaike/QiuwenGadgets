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
var memorial = "MemorialDay-module__memorial_cnrRka__490";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L29wdGlvbnMuanNvbiIsICJzcmMvTWVtb3JpYWxEYXkvbW9kdWxlcy9NZW1vcmlhbERheS5tb2R1bGUubGVzcyIsICJzcmMvTWVtb3JpYWxEYXkvbW9kdWxlcy9hZGRTdHlsZVRhZy50cyIsICJzcmMvTWVtb3JpYWxEYXkvTWVtb3JpYWxEYXkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJjb25maWdLZXlcIjogXCJnYWRnZXQtTWVtb3JpYWxEYXlfX0luaXRpYWxpemVkXCJcbn1cbiIsICJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL01lbW9yaWFsRGF5L21vZHVsZXMvTWVtb3JpYWxEYXkubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBtZW1vcmlhbCA9IFwiTWVtb3JpYWxEYXktbW9kdWxlX19tZW1vcmlhbF9jbnJSa2FfXzQ5MFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwibWVtb3JpYWxcIjogbWVtb3JpYWxcbn07XG4gICAgICAiLCAiaW1wb3J0IHttZW1vcmlhbH0gZnJvbSAnLi9NZW1vcmlhbERheS5tb2R1bGUubGVzcyc7XG5cbmNvbnN0IGFkZFN0eWxlVGFnID0gKCkgPT4ge1xuXHRjb25zdCB7d2dJc01haW5QYWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dJc01haW5QYWdlKSB7XG5cdFx0dm9pZCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5nYWRnZXQuTWFpbnBhZ2UtTW91cm5pbmcnKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBDTEFTU19MSVNUID0gW1xuXHRcdCcuc2tpbi1jaXRpemVuIC5tdy1ib2R5Jyxcblx0XHQnLnNraW4tZ29uZ2JpICNtdy1jb250ZW50Jyxcblx0XHQnLnNraW4tdmVjdG9yIC5tdy1ib2R5Jyxcblx0XHQnLnNraW4tdmVjdG9yLTIwMjIgLm13LWJvZHknLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgY2xhc3NOYW1lIG9mIENMQVNTX0xJU1QpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWF3aWtpL2NsYXNzLWRvY1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NOYW1lKT8uY2xhc3NMaXN0LmFkZChtZW1vcmlhbCBhcyBzdHJpbmcpO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZFN0eWxlVGFnfTtcbiIsICJpbXBvcnQgJy4vTWVtb3JpYWxEYXkubGVzcyc7XG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YWRkU3R5bGVUYWd9IGZyb20gJy4vbW9kdWxlcy9hZGRTdHlsZVRhZyc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3BhZ2VMaXN0fSBmcm9tICdleHQuZ2FkZ2V0Lk1lbW9yaWFsRGF5LXNldHRpbmdzJztcblxuKGZ1bmN0aW9uIG1lbW9yaWFsRGF5KCkge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KE9QVElPTlMuY29uZmlnS2V5KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghQXJyYXkuaXNBcnJheShwYWdlTGlzdCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBEQVRFTk9XOiBEYXRlID0gbmV3IERhdGUoKTtcblx0Y29uc3QgWUVBUjogbnVtYmVyID0gREFURU5PVy5nZXRGdWxsWWVhcigpO1xuXHRjb25zdCBNT05USDogbnVtYmVyID0gREFURU5PVy5nZXRNb250aCgpICsgMTtcblx0Y29uc3QgREFZOiBudW1iZXIgPSBEQVRFTk9XLmdldERhdGUoKTtcblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Zm9yIChjb25zdCBwYWdlIG9mIHBhZ2VMaXN0KSB7XG5cdFx0aWYgKCFwYWdlLnRpdGxlcyB8fCAhcGFnZS5kYXRlcykge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IHt0aXRsZXMsIGRhdGVzfSA9IHBhZ2U7XG5cblx0XHRpZiAoIXRpdGxlcy5pbmNsdWRlcyh3Z1BhZ2VOYW1lKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWxsRGF0ZXMgPSBnZW5lcmF0ZUFycmF5KGRhdGVzKTtcblxuXHRcdGZvciAobGV0IGRhdGUgb2YgYWxsRGF0ZXMpIHtcblx0XHRcdGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0ZGF0ZSA9IE51bWJlci5wYXJzZUludChkYXRlLCAxMCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghYWxsRGF0ZXMuaW5jbHVkZXMoTU9OVEggKiAxZTIgKyBEQVkpICYmICFhbGxEYXRlcy5pbmNsdWRlcyhZRUFSICogMWU0ICsgTU9OVEggKiAxZTIgKyBEQVkpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRhZGRTdHlsZVRhZygpO1xuXHRcdFx0bXcuY29uZmlnLnNldChPUFRJT05TLmNvbmZpZ0tleSwgdHJ1ZSk7XG5cdFx0fVxuXHR9XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTs7QUNBUCxJQUFNQyxXQUFXOztBQ0N4QixJQUFNQyxjQUFjQSxNQUFNO0FBQ3pCLFFBQU07SUFBQ0M7RUFBWSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRXJDLE1BQUlILGNBQWM7QUFDakIsU0FBS0MsR0FBR0csT0FBT0MsTUFBTSw4QkFBOEI7QUFDbkQ7RUFDRDtBQUVBLFFBQU1DLGFBQWEsQ0FDbEIsMEJBQ0EsNEJBQ0EseUJBQ0EsNEJBQUE7QUFHRCxXQUFBQyxLQUFBLEdBQUFDLGNBQXdCRixZQUFBQyxLQUFBQyxZQUFBQyxRQUFBRixNQUFZO0FBQUEsUUFBQUc7QUFBcEMsVUFBV0MsWUFBQUgsWUFBQUQsRUFBQTtBQUVWLEtBQUFHLHdCQUFBRSxTQUFTQyxjQUFjRixTQUFTLE9BQUEsUUFBQUQsMEJBQUEsVUFBaENBLHNCQUFtQ0ksVUFBVUMsSUFBSWpCLFFBQWtCO0VBQ3BFO0FBQ0Q7O0FDbEJBLElBQUFrQixvQkFBNEJDLFFBQUEsaUJBQUE7QUFDNUIsSUFBQUMscUJBQXVCRCxRQUFBLGlDQUFBO0NBRXRCLFNBQVNFLGNBQWM7QUFFdkIsTUFBSWxCLEdBQUdDLE9BQU9DLElBQVlOLFNBQVMsR0FBRztBQUNyQztFQUNEO0FBRUEsTUFBSSxDQUFDdUIsTUFBTUMsUUFBUUgsbUJBQUFJLFFBQVEsR0FBRztBQUM3QjtFQUNEO0FBRUEsUUFBTUMsVUFBZ0Isb0JBQUlDLEtBQUs7QUFDL0IsUUFBTUMsT0FBZUYsUUFBUUcsWUFBWTtBQUN6QyxRQUFNQyxRQUFnQkosUUFBUUssU0FBUyxJQUFJO0FBQzNDLFFBQU1DLE1BQWNOLFFBQVFPLFFBQVE7QUFFcEMsUUFBTTtJQUFDQztFQUFVLElBQUk5QixHQUFHQyxPQUFPQyxJQUFJO0FBQUEsTUFBQTZCLFlBQUFDLDJCQUVoQmYsbUJBQUFJLFFBQUEsR0FBQVk7QUFBQSxNQUFBO0FBQW5CLFNBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQTZCO0FBQUEsWUFBbEJDLE9BQUFKLE1BQUFLO0FBQ1YsVUFBSSxDQUFDRCxLQUFLRSxVQUFVLENBQUNGLEtBQUtHLE9BQU87QUFDaEM7TUFDRDtBQUNBLFlBQU07UUFBQ0Q7UUFBUUM7TUFBSyxJQUFJSDtBQUV4QixVQUFJLENBQUNFLE9BQU9FLFNBQVNYLFVBQVUsR0FBRztBQUNqQztNQUNEO0FBRUEsWUFBTVksWUFBQSxHQUFXM0Isa0JBQUE0QixlQUFjSCxLQUFLO0FBQUEsVUFBQUksYUFBQVosMkJBRW5CVSxRQUFBLEdBQUFHO0FBQUEsVUFBQTtBQUFqQixhQUFBRCxXQUFBVixFQUFBLEdBQUEsRUFBQVcsU0FBQUQsV0FBQVQsRUFBQSxHQUFBQyxRQUEyQjtBQUFBLGNBQWxCVSxPQUFBRCxPQUFBUDtBQUNSLGNBQUksT0FBT1EsU0FBUyxVQUFVO0FBQzdCQSxtQkFBT0MsT0FBT0MsU0FBU0YsTUFBTSxFQUFFO1VBQ2hDO0FBRUEsY0FBSSxDQUFDSixTQUFTRCxTQUFTZixRQUFRLE1BQU1FLEdBQUcsS0FBSyxDQUFDYyxTQUFTRCxTQUFTakIsT0FBTyxNQUFNRSxRQUFRLE1BQU1FLEdBQUcsR0FBRztBQUNoRztVQUNEO0FBRUE5QixzQkFBWTtBQUNaRSxhQUFHQyxPQUFPZ0QsSUFBWXJELFdBQVcsSUFBSTtRQUN0QztNQUFBLFNBQUFzRCxLQUFBO0FBQUFOLG1CQUFBTyxFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBTixtQkFBQVEsRUFBQTtNQUFBO0lBQ0Q7RUFBQSxTQUFBRixLQUFBO0FBQUFuQixjQUFBb0IsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQW5CLGNBQUFxQixFQUFBO0VBQUE7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJjb25maWdLZXkiLCAibWVtb3JpYWwiLCAiYWRkU3R5bGVUYWciLCAid2dJc01haW5QYWdlIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAibG9hZGVyIiwgInVzaW5nIiwgIkNMQVNTX0xJU1QiLCAiX2kiLCAiX0NMQVNTX0xJU1QiLCAibGVuZ3RoIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJjbGFzc05hbWUiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJjbGFzc0xpc3QiLCAiYWRkIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIm1lbW9yaWFsRGF5IiwgIkFycmF5IiwgImlzQXJyYXkiLCAicGFnZUxpc3QiLCAiREFURU5PVyIsICJEYXRlIiwgIllFQVIiLCAiZ2V0RnVsbFllYXIiLCAiTU9OVEgiLCAiZ2V0TW9udGgiLCAiREFZIiwgImdldERhdGUiLCAid2dQYWdlTmFtZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAicGFnZSIsICJ2YWx1ZSIsICJ0aXRsZXMiLCAiZGF0ZXMiLCAiaW5jbHVkZXMiLCAiYWxsRGF0ZXMiLCAiZ2VuZXJhdGVBcnJheSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJkYXRlIiwgIk51bWJlciIsICJwYXJzZUludCIsICJzZXQiLCAiZXJyIiwgImUiLCAiZiJdCn0K
