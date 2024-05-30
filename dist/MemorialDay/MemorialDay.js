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
//! src/MemorialDay/modules/addStyleTag.ts
var styles = ".skin-citizen .mw-body,\n.skin-vector .mw-body,\n.skin-gongbi #mw-content {\n	-webkit-filter: grayscale(1) !important;\n	-moz-filter: grayscale(1) !important;\n	-ms-filter: grayscale(1) !important;\n	-o-filter: grayscale(1) !important;\n	filter: grayscale(1) !important;\n}";
var addStyleTag = () => {
  mw.loader.addStyleTag(styles);
};
//! src/MemorialDay/MemorialDay.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/MemorialDay/modules/pageList.ts
var pageList = [
  // In memorial of victims of the Nanjing Massacre
  {
    titles: ["南京大屠杀死难者国家公祭日", "侵华日军南京大屠杀遇难同胞纪念馆"],
    dates: 1213
  }
];
//! src/MemorialDay/MemorialDay.ts
var DATENOW = /* @__PURE__ */ new Date();
var YEAR = DATENOW.getFullYear();
var MONTH = DATENOW.getMonth() + 1;
var DAY = DATENOW.getDate();
var {
  wgPageName
} = mw.config.get();
for (_i = 0, _pageList = pageList; _i < _pageList.length; _i++) {
  const {
    titles,
    dates
  } = _pageList[_i];
  _iterator = _createForOfIteratorHelper(titles);
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const title = _step.value;
      if (!(wgPageName === title)) {
        continue;
      }
      _iterator2 = _createForOfIteratorHelper((0, import_ext_gadget.generateArray)(dates));
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const date = _step2.value;
          if (!(MONTH * 100 + DAY === date || YEAR * 1e4 + MONTH * 100 + DAY === date || !date)) {
            continue;
          }
          addStyleTag();
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
}
var _iterator;
var _step;
var _iterator2;
var _step2;
var _i;
var _pageList;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvYWRkU3R5bGVUYWcudHMiLCAic3JjL01lbW9yaWFsRGF5L01lbW9yaWFsRGF5LnRzIiwgInNyYy9NZW1vcmlhbERheS9tb2R1bGVzL3BhZ2VMaXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBzdHlsZXMgPSBgLnNraW4tY2l0aXplbiAubXctYm9keSxcbi5za2luLXZlY3RvciAubXctYm9keSxcbi5za2luLWdvbmdiaSAjbXctY29udGVudCB7XG5cdC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0LW1vei1maWx0ZXI6IGdyYXlzY2FsZSgxKSAhaW1wb3J0YW50O1xuXHQtbXMtZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0LW8tZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0ZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcbn1gO1xuXG5jb25zdCBhZGRTdHlsZVRhZyA9ICgpID0+IHtcblx0bXcubG9hZGVyLmFkZFN0eWxlVGFnKHN0eWxlcyk7XG59O1xuXG5leHBvcnQge2FkZFN0eWxlVGFnfTtcbiIsICJpbXBvcnQge2FkZFN0eWxlVGFnfSBmcm9tICcuL21vZHVsZXMvYWRkU3R5bGVUYWcnO1xuaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwYWdlTGlzdH0gZnJvbSAnLi9tb2R1bGVzL3BhZ2VMaXN0JztcblxuY29uc3QgREFURU5PVzogRGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBZRUFSOiBudW1iZXIgPSBEQVRFTk9XLmdldEZ1bGxZZWFyKCk7XG5jb25zdCBNT05USDogbnVtYmVyID0gREFURU5PVy5nZXRNb250aCgpICsgMTtcbmNvbnN0IERBWTogbnVtYmVyID0gREFURU5PVy5nZXREYXRlKCk7XG5cbmNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuZm9yIChjb25zdCB7dGl0bGVzLCBkYXRlc30gb2YgcGFnZUxpc3QpIHtcblx0Zm9yIChjb25zdCB0aXRsZSBvZiB0aXRsZXMpIHtcblx0XHRpZiAoISh3Z1BhZ2VOYW1lID09PSB0aXRsZSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgZGF0ZSBvZiBnZW5lcmF0ZUFycmF5KGRhdGVzKSkge1xuXHRcdFx0aWYgKCEoTU9OVEggKiAxMDAgKyBEQVkgPT09IGRhdGUgfHwgWUVBUiAqIDFlNCArIE1PTlRIICogMTAwICsgREFZID09PSBkYXRlIHx8ICFkYXRlKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0YWRkU3R5bGVUYWcoKTtcblx0XHR9XG5cdH1cbn1cbiIsICJjb25zdCBwYWdlTGlzdDoge1xuXHR0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdO1xuXHRkYXRlcz86IG51bWJlciB8IG51bWJlcltdO1xufVtdID0gW1xuXHQvLyBJbiBtZW1vcmlhbCBvZiB2aWN0aW1zIG9mIHRoZSBOYW5qaW5nIE1hc3NhY3JlXG5cdHtcblx0XHR0aXRsZXM6IFsn5Y2X5Lqs5aSn5bGg5p2A5q276Zq+6ICF5Zu95a625YWs56Wt5pelJywgJ+S+teWNjuaXpeWGm+WNl+S6rOWkp+WxoOadgOmBh+mavuWQjOiDnue6quW/temmhiddLFxuXHRcdGRhdGVzOiAxMjEzLFxuXHR9LFxuXTtcblxuZXhwb3J0IHtwYWdlTGlzdH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFBO0FBVU4sSUFBTUMsY0FBY0EsTUFBTTtBQUN6QkMsS0FBR0MsT0FBT0YsWUFBWUQsTUFBTTtBQUM3Qjs7QUNYQSxJQUFBSSxvQkFBNEJDLFFBQUEsaUJBQUE7O0FDRDVCLElBQU1DLFdBR0E7O0VBRUw7SUFDQ0MsUUFBUSxDQUFDLGlCQUFpQixrQkFBa0I7SUFDNUNDLE9BQU87RUFDUjtBQUFBOztBREpELElBQU1DLFVBQWdCLG9CQUFJQyxLQUFLO0FBQy9CLElBQU1DLE9BQWVGLFFBQVFHLFlBQVk7QUFDekMsSUFBTUMsUUFBZ0JKLFFBQVFLLFNBQVMsSUFBSTtBQUMzQyxJQUFNQyxNQUFjTixRQUFRTyxRQUFRO0FBRXBDLElBQU07RUFBQ0M7QUFBVSxJQUFJZixHQUFHZ0IsT0FBT0MsSUFBSTtBQUVuQyxLQUFBQyxLQUFBLEdBQUFDLFlBQThCZixVQUFBYyxLQUFBQyxVQUFBQyxRQUFBRixNQUFVO0FBQXhDLFFBQVc7SUFBQ2I7SUFBUUM7RUFBSyxJQUFBYSxVQUFBRCxFQUFBO0FBQUFHLGNBQUFDLDJCQUNKakIsTUFBQTtBQUFBLE1BQUE7QUFBcEIsU0FBQWdCLFVBQUFFLEVBQUEsR0FBQSxFQUFBQyxRQUFBSCxVQUFBSSxFQUFBLEdBQUFDLFFBQTRCO0FBQUEsWUFBakJDLFFBQUFILE1BQUFJO0FBQ1YsVUFBSSxFQUFFYixlQUFlWSxRQUFRO0FBQzVCO01BQ0Q7QUFBQUUsbUJBQUFQLDRCQUVXLEdBQVFwQixrQkFBQTRCLGVBQWN4QixLQUFLLENBQUE7QUFBQSxVQUFBO0FBQXRDLGFBQUF1QixXQUFBTixFQUFBLEdBQUEsRUFBQVEsU0FBQUYsV0FBQUosRUFBQSxHQUFBQyxRQUF5QztBQUFBLGdCQUE5Qk0sT0FBQUQsT0FBQUg7QUFDVixjQUFJLEVBQUVqQixRQUFRLE1BQU1FLFFBQVFtQixRQUFRdkIsT0FBTyxNQUFNRSxRQUFRLE1BQU1FLFFBQVFtQixRQUFRLENBQUNBLE9BQU87QUFDdEY7VUFDRDtBQUVBakMsc0JBQVk7UUFDYjtNQUFBLFNBQUFrQyxLQUFBO0FBQUFKLG1CQUFBSyxFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBSixtQkFBQU0sRUFBQTtNQUFBO0lBQ0Q7RUFBQSxTQUFBRixLQUFBO0FBQUFaLGNBQUFhLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFaLGNBQUFjLEVBQUE7RUFBQTtBQUNEO0FBZHlCZDtBQUNKRztBQUduQks7QUFFc0NFO0FBTnhDYjtBQUFBQzsiLAogICJuYW1lcyI6IFsic3R5bGVzIiwgImFkZFN0eWxlVGFnIiwgIm13IiwgImxvYWRlciIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgInBhZ2VMaXN0IiwgInRpdGxlcyIsICJkYXRlcyIsICJEQVRFTk9XIiwgIkRhdGUiLCAiWUVBUiIsICJnZXRGdWxsWWVhciIsICJNT05USCIsICJnZXRNb250aCIsICJEQVkiLCAiZ2V0RGF0ZSIsICJ3Z1BhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAiX2kiLCAiX3BhZ2VMaXN0IiwgImxlbmd0aCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicyIsICJfc3RlcCIsICJuIiwgImRvbmUiLCAidGl0bGUiLCAidmFsdWUiLCAiX2l0ZXJhdG9yMiIsICJnZW5lcmF0ZUFycmF5IiwgIl9zdGVwMiIsICJkYXRlIiwgImVyciIsICJlIiwgImYiXQp9Cg==
