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
(function memorialDay() {
  for (var _i = 0, _pageList = pageList; _i < _pageList.length; _i++) {
    const {
      titles,
      dates
    } = _pageList[_i];
    var _iterator = _createForOfIteratorHelper(titles), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const title = _step.value;
        if (!(wgPageName === title)) {
          continue;
        }
        var _iterator2 = _createForOfIteratorHelper((0, import_ext_gadget.generateArray)(dates)), _step2;
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
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvYWRkU3R5bGVUYWcudHMiLCAic3JjL01lbW9yaWFsRGF5L01lbW9yaWFsRGF5LnRzIiwgInNyYy9NZW1vcmlhbERheS9tb2R1bGVzL3BhZ2VMaXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBzdHlsZXMgPSBgLnNraW4tY2l0aXplbiAubXctYm9keSxcbi5za2luLXZlY3RvciAubXctYm9keSxcbi5za2luLWdvbmdiaSAjbXctY29udGVudCB7XG5cdC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0LW1vei1maWx0ZXI6IGdyYXlzY2FsZSgxKSAhaW1wb3J0YW50O1xuXHQtbXMtZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0LW8tZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0ZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcbn1gO1xuXG5jb25zdCBhZGRTdHlsZVRhZyA9ICgpID0+IHtcblx0bXcubG9hZGVyLmFkZFN0eWxlVGFnKHN0eWxlcyk7XG59O1xuXG5leHBvcnQge2FkZFN0eWxlVGFnfTtcbiIsICJpbXBvcnQge2FkZFN0eWxlVGFnfSBmcm9tICcuL21vZHVsZXMvYWRkU3R5bGVUYWcnO1xuaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwYWdlTGlzdH0gZnJvbSAnLi9tb2R1bGVzL3BhZ2VMaXN0JztcblxuY29uc3QgREFURU5PVzogRGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBZRUFSOiBudW1iZXIgPSBEQVRFTk9XLmdldEZ1bGxZZWFyKCk7XG5jb25zdCBNT05USDogbnVtYmVyID0gREFURU5PVy5nZXRNb250aCgpICsgMTtcbmNvbnN0IERBWTogbnVtYmVyID0gREFURU5PVy5nZXREYXRlKCk7XG5cbmNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuKGZ1bmN0aW9uIG1lbW9yaWFsRGF5KCk6IHZvaWQge1xuXHRmb3IgKGNvbnN0IHt0aXRsZXMsIGRhdGVzfSBvZiBwYWdlTGlzdCkge1xuXHRcdGZvciAoY29uc3QgdGl0bGUgb2YgdGl0bGVzKSB7XG5cdFx0XHRpZiAoISh3Z1BhZ2VOYW1lID09PSB0aXRsZSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgZGF0ZSBvZiBnZW5lcmF0ZUFycmF5KGRhdGVzKSkge1xuXHRcdFx0XHRpZiAoIShNT05USCAqIDEwMCArIERBWSA9PT0gZGF0ZSB8fCBZRUFSICogMWU0ICsgTU9OVEggKiAxMDAgKyBEQVkgPT09IGRhdGUgfHwgIWRhdGUpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhZGRTdHlsZVRhZygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSkoKTtcbiIsICJleHBvcnQgY29uc3QgcGFnZUxpc3Q6IHtcblx0dGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXTtcblx0ZGF0ZXM/OiBudW1iZXIgfCBudW1iZXJbXTtcbn1bXSA9IFtcblx0Ly8gSW4gbWVtb3JpYWwgb2YgdmljdGltcyBvZiB0aGUgTmFuamluZyBNYXNzYWNyZVxuXHR7XG5cdFx0dGl0bGVzOiBbJ+WNl+S6rOWkp+WxoOadgOatu+mavuiAheWbveWutuWFrOelreaXpScsICfkvrXljY7ml6XlhpvljZfkuqzlpKflsaDmnYDpgYfpmr7lkIzog57nuqrlv7XppoYnXSxcblx0XHRkYXRlczogMTIxMyxcblx0fSxcbl07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBQTtBQVVOLElBQU1DLGNBQWNBLE1BQU07QUFDekJDLEtBQUdDLE9BQU9GLFlBQVlELE1BQU07QUFDN0I7O0FDWEEsSUFBQUksb0JBQTRCQyxRQUFBLGlCQUFBOztBQ0RyQixJQUFNQyxXQUdQOztFQUVMO0lBQ0NDLFFBQVEsQ0FBQyxpQkFBaUIsa0JBQWtCO0lBQzVDQyxPQUFPO0VBQ1I7QUFBQTs7QURKRCxJQUFNQyxVQUFnQixvQkFBSUMsS0FBSztBQUMvQixJQUFNQyxPQUFlRixRQUFRRyxZQUFZO0FBQ3pDLElBQU1DLFFBQWdCSixRQUFRSyxTQUFTLElBQUk7QUFDM0MsSUFBTUMsTUFBY04sUUFBUU8sUUFBUTtBQUVwQyxJQUFNO0VBQUNDO0FBQVUsSUFBSWYsR0FBR2dCLE9BQU9DLElBQUk7Q0FFbEMsU0FBU0MsY0FBb0I7QUFDN0IsV0FBQUMsS0FBQSxHQUFBQyxZQUE4QmhCLFVBQUFlLEtBQUFDLFVBQUFDLFFBQUFGLE1BQVU7QUFBeEMsVUFBVztNQUFDZDtNQUFRQztJQUFLLElBQUFjLFVBQUFELEVBQUE7QUFBQSxRQUFBRyxZQUFBQywyQkFDSmxCLE1BQUEsR0FBQW1CO0FBQUEsUUFBQTtBQUFwQixXQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUE0QjtBQUFBLGNBQWpCQyxRQUFBSixNQUFBSztBQUNWLFlBQUksRUFBRWQsZUFBZWEsUUFBUTtBQUM1QjtRQUNEO0FBQUEsWUFBQUUsYUFBQVAsNEJBRVcsR0FBUXJCLGtCQUFBNkIsZUFBY3pCLEtBQUssQ0FBQSxHQUFBMEI7QUFBQSxZQUFBO0FBQXRDLGVBQUFGLFdBQUFMLEVBQUEsR0FBQSxFQUFBTyxTQUFBRixXQUFBSixFQUFBLEdBQUFDLFFBQXlDO0FBQUEsa0JBQTlCTSxPQUFBRCxPQUFBSDtBQUNWLGdCQUFJLEVBQUVsQixRQUFRLE1BQU1FLFFBQVFvQixRQUFReEIsT0FBTyxNQUFNRSxRQUFRLE1BQU1FLFFBQVFvQixRQUFRLENBQUNBLE9BQU87QUFDdEY7WUFDRDtBQUVBbEMsd0JBQVk7VUFDYjtRQUFBLFNBQUFtQyxLQUFBO0FBQUFKLHFCQUFBSyxFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBSixxQkFBQU0sRUFBQTtRQUFBO01BQ0Q7SUFBQSxTQUFBRixLQUFBO0FBQUFaLGdCQUFBYSxFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBWixnQkFBQWMsRUFBQTtJQUFBO0VBQ0Q7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJzdHlsZXMiLCAiYWRkU3R5bGVUYWciLCAibXciLCAibG9hZGVyIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAicGFnZUxpc3QiLCAidGl0bGVzIiwgImRhdGVzIiwgIkRBVEVOT1ciLCAiRGF0ZSIsICJZRUFSIiwgImdldEZ1bGxZZWFyIiwgIk1PTlRIIiwgImdldE1vbnRoIiwgIkRBWSIsICJnZXREYXRlIiwgIndnUGFnZU5hbWUiLCAiY29uZmlnIiwgImdldCIsICJtZW1vcmlhbERheSIsICJfaSIsICJfcGFnZUxpc3QiLCAibGVuZ3RoIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ0aXRsZSIsICJ2YWx1ZSIsICJfaXRlcmF0b3IyIiwgImdlbmVyYXRlQXJyYXkiLCAiX3N0ZXAyIiwgImRhdGUiLCAiZXJyIiwgImUiLCAiZiJdCn0K
