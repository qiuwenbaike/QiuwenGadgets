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
    title: "Qiuwen:首页",
    dates: 1213
  },
  {
    title: "南京大屠杀死难者国家公祭日",
    dates: 1213
  },
  {
    title: "侵华日军南京大屠杀遇难同胞纪念馆",
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
(function memorialDay() {
  for (var _i = 0, _pageList = pageList; _i < _pageList.length; _i++) {
    const {
      title,
      dates
    } = _pageList[_i];
    if (!(wgPageName === title)) {
      continue;
    }
    var _iterator = _createForOfIteratorHelper((0, import_ext_gadget.generateArray)(dates)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const date = _step.value;
        if (!(MONTH * 100 + DAY === date || YEAR * 1e4 + MONTH * 100 + DAY === date || !date)) {
          continue;
        }
        addStyleTag();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvYWRkU3R5bGVUYWcudHMiLCAic3JjL01lbW9yaWFsRGF5L01lbW9yaWFsRGF5LnRzIiwgInNyYy9NZW1vcmlhbERheS9tb2R1bGVzL3BhZ2VMaXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBzdHlsZXMgPSBgLnNraW4tY2l0aXplbiAubXctYm9keSxcbi5za2luLXZlY3RvciAubXctYm9keSxcbi5za2luLWdvbmdiaSAjbXctY29udGVudCB7XG5cdC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0LW1vei1maWx0ZXI6IGdyYXlzY2FsZSgxKSAhaW1wb3J0YW50O1xuXHQtbXMtZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0LW8tZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0ZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcbn1gO1xuXG5jb25zdCBhZGRTdHlsZVRhZyA9ICgpID0+IHtcblx0bXcubG9hZGVyLmFkZFN0eWxlVGFnKHN0eWxlcyk7XG59O1xuXG5leHBvcnQge2FkZFN0eWxlVGFnfTtcbiIsICJpbXBvcnQge2FkZFN0eWxlVGFnfSBmcm9tICcuL21vZHVsZXMvYWRkU3R5bGVUYWcnO1xuaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwYWdlTGlzdH0gZnJvbSAnLi9tb2R1bGVzL3BhZ2VMaXN0JztcblxuY29uc3QgREFURU5PVzogRGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBZRUFSOiBudW1iZXIgPSBEQVRFTk9XLmdldEZ1bGxZZWFyKCk7XG5jb25zdCBNT05USDogbnVtYmVyID0gREFURU5PVy5nZXRNb250aCgpICsgMTtcbmNvbnN0IERBWTogbnVtYmVyID0gREFURU5PVy5nZXREYXRlKCk7XG5cbmNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuKGZ1bmN0aW9uIG1lbW9yaWFsRGF5KCk6IHZvaWQge1xuXHRmb3IgKGNvbnN0IHt0aXRsZSwgZGF0ZXN9IG9mIHBhZ2VMaXN0KSB7XG5cdFx0aWYgKCEod2dQYWdlTmFtZSA9PT0gdGl0bGUpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGRhdGUgb2YgZ2VuZXJhdGVBcnJheShkYXRlcykpIHtcblx0XHRcdGlmICghKE1PTlRIICogMTAwICsgREFZID09PSBkYXRlIHx8IFlFQVIgKiAxZTQgKyBNT05USCAqIDEwMCArIERBWSA9PT0gZGF0ZSB8fCAhZGF0ZSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGFkZFN0eWxlVGFnKCk7XG5cdFx0fVxuXHR9XG59KSgpO1xuIiwgImV4cG9ydCBjb25zdCBwYWdlTGlzdDoge1xuXHR0aXRsZTogc3RyaW5nO1xuXHRkYXRlcz86IG51bWJlciB8IG51bWJlcltdO1xufVtdID0gW1xuXHQvLyBJbiBtZW1vcmlhbCBvZiB2aWN0aW1zIG9mIHRoZSBOYW5qaW5nIE1hc3NhY3JlXG5cdHtcblx0XHR0aXRsZTogJ1FpdXdlbjrpppbpobUnLFxuXHRcdGRhdGVzOiAxMjEzLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICfljZfkuqzlpKflsaDmnYDmrbvpmr7ogIXlm73lrrblhaznpa3ml6UnLFxuXHRcdGRhdGVzOiAxMjEzLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICfkvrXljY7ml6XlhpvljZfkuqzlpKflsaDmnYDpgYfpmr7lkIzog57nuqrlv7XppoYnLFxuXHRcdGRhdGVzOiAxMjEzLFxuXHR9LFxuXTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFBO0FBVU4sSUFBTUMsY0FBY0EsTUFBTTtBQUN6QkMsS0FBR0MsT0FBT0YsWUFBWUQsTUFBTTtBQUM3Qjs7QUNYQSxJQUFBSSxvQkFBNEJDLFFBQUEsaUJBQUE7O0FDRHJCLElBQU1DLFdBR1A7O0VBRUw7SUFDQ0MsT0FBTztJQUNQQyxPQUFPO0VBQ1I7RUFDQTtJQUNDRCxPQUFPO0lBQ1BDLE9BQU87RUFDUjtFQUNBO0lBQ0NELE9BQU87SUFDUEMsT0FBTztFQUNSO0FBQUE7O0FEWkQsSUFBTUMsVUFBZ0Isb0JBQUlDLEtBQUs7QUFDL0IsSUFBTUMsT0FBZUYsUUFBUUcsWUFBWTtBQUN6QyxJQUFNQyxRQUFnQkosUUFBUUssU0FBUyxJQUFJO0FBQzNDLElBQU1DLE1BQWNOLFFBQVFPLFFBQVE7QUFFcEMsSUFBTTtFQUFDQztBQUFVLElBQUlmLEdBQUdnQixPQUFPQyxJQUFJO0NBRWxDLFNBQVNDLGNBQW9CO0FBQzdCLFdBQUFDLEtBQUEsR0FBQUMsWUFBNkJoQixVQUFBZSxLQUFBQyxVQUFBQyxRQUFBRixNQUFVO0FBQXZDLFVBQVc7TUFBQ2Q7TUFBT0M7SUFBSyxJQUFBYyxVQUFBRCxFQUFBO0FBQ3ZCLFFBQUksRUFBRUosZUFBZVYsUUFBUTtBQUM1QjtJQUNEO0FBQUEsUUFBQWlCLFlBQUFDLDRCQUVXLEdBQVFyQixrQkFBQXNCLGVBQWNsQixLQUFLLENBQUEsR0FBQW1CO0FBQUEsUUFBQTtBQUF0QyxXQUFBSCxVQUFBSSxFQUFBLEdBQUEsRUFBQUQsUUFBQUgsVUFBQUssRUFBQSxHQUFBQyxRQUF5QztBQUFBLGNBQTlCQyxPQUFBSixNQUFBSztBQUNWLFlBQUksRUFBRW5CLFFBQVEsTUFBTUUsUUFBUWdCLFFBQVFwQixPQUFPLE1BQU1FLFFBQVEsTUFBTUUsUUFBUWdCLFFBQVEsQ0FBQ0EsT0FBTztBQUN0RjtRQUNEO0FBRUE5QixvQkFBWTtNQUNiO0lBQUEsU0FBQWdDLEtBQUE7QUFBQVQsZ0JBQUFVLEVBQUFELEdBQUE7SUFBQSxVQUFBO0FBQUFULGdCQUFBVyxFQUFBO0lBQUE7RUFDRDtBQUNELEdBQUc7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJhZGRTdHlsZVRhZyIsICJtdyIsICJsb2FkZXIiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJwYWdlTGlzdCIsICJ0aXRsZSIsICJkYXRlcyIsICJEQVRFTk9XIiwgIkRhdGUiLCAiWUVBUiIsICJnZXRGdWxsWWVhciIsICJNT05USCIsICJnZXRNb250aCIsICJEQVkiLCAiZ2V0RGF0ZSIsICJ3Z1BhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAibWVtb3JpYWxEYXkiLCAiX2kiLCAiX3BhZ2VMaXN0IiwgImxlbmd0aCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZ2VuZXJhdGVBcnJheSIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJkYXRlIiwgInZhbHVlIiwgImVyciIsICJlIiwgImYiXQp9Cg==
