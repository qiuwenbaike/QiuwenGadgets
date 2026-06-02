/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/TemplateTabs}
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

// dist/TemplateTabs/TemplateTabs.js
//! src/TemplateTabs/TemplateTabs.ts
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
var import_ext_gadget = require("ext.gadget.Util");
void (0, import_ext_gadget.getBody)().then(function templateTabs() {
  var _iterator = _createForOfIteratorHelper(document.querySelectorAll(".template-tabs-container")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const container = _step.value;
      const containerId = container.id;
      const tabs = container.querySelectorAll(".mcTabs > div");
      const contents = container.querySelectorAll(".mcContents > div");
      const activateTabContent = (tabId) => {
        var _iterator2 = _createForOfIteratorHelper(contents), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            const content = _step2.value;
            const contentId = content.id.replace(new RegExp("^".concat(containerId, "ps")), "");
            const matchTabId = tabId.replace(new RegExp("^".concat(containerId, "bt")), "");
            if (contentId === matchTabId) {
              content.style.display = "block";
              content.style.visibility = "visible";
            } else {
              content.style.display = "none";
              content.style.visibility = "hidden";
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var _iterator3 = _createForOfIteratorHelper(tabs), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const tab = _step3.value;
            if (tab.id === tabId) {
              tab.classList.add("mcBotoSel");
              tab.classList.remove("mcBoto");
            } else {
              tab.classList.add("mcBoto");
              tab.classList.remove("mcBotoSel");
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      };
      var _iterator4 = _createForOfIteratorHelper(tabs), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          const tab = _step4.value;
          const tabId = tab.id;
          tab.addEventListener("click", (event) => {
            event.preventDefault();
            activateTabContent(tabId);
          });
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1RlbXBsYXRlVGFicy9UZW1wbGF0ZVRhYnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiB0ZW1wbGF0ZVRhYnMoKTogdm9pZCB7XG5cdGZvciAoY29uc3QgY29udGFpbmVyIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wbGF0ZS10YWJzLWNvbnRhaW5lcicpKSB7XG5cdFx0Y29uc3QgY29udGFpbmVySWQgPSBjb250YWluZXIuaWQ7XG5cdFx0Y29uc3QgdGFicyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsPEhUTUxEaXZFbGVtZW50PignLm1jVGFicyA+IGRpdicpO1xuXHRcdGNvbnN0IGNvbnRlbnRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTERpdkVsZW1lbnQ+KCcubWNDb250ZW50cyA+IGRpdicpO1xuXG5cdFx0Y29uc3QgYWN0aXZhdGVUYWJDb250ZW50ID0gKHRhYklkOiBzdHJpbmcpID0+IHtcblx0XHRcdGZvciAoY29uc3QgY29udGVudCBvZiBjb250ZW50cykge1xuXHRcdFx0XHRjb25zdCBjb250ZW50SWQgPSBjb250ZW50LmlkLnJlcGxhY2UobmV3IFJlZ0V4cChgXiR7Y29udGFpbmVySWR9cHNgKSwgJycpO1xuXHRcdFx0XHRjb25zdCBtYXRjaFRhYklkID0gdGFiSWQucmVwbGFjZShuZXcgUmVnRXhwKGBeJHtjb250YWluZXJJZH1idGApLCAnJyk7XG5cblx0XHRcdFx0aWYgKGNvbnRlbnRJZCA9PT0gbWF0Y2hUYWJJZCkge1xuXHRcdFx0XHRcdGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRcdFx0Y29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRjb250ZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IHRhYiBvZiB0YWJzKSB7XG5cdFx0XHRcdGlmICh0YWIuaWQgPT09IHRhYklkKSB7XG5cdFx0XHRcdFx0dGFiLmNsYXNzTGlzdC5hZGQoJ21jQm90b1NlbCcpO1xuXHRcdFx0XHRcdHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdtY0JvdG8nKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YWIuY2xhc3NMaXN0LmFkZCgnbWNCb3RvJyk7XG5cdFx0XHRcdFx0dGFiLmNsYXNzTGlzdC5yZW1vdmUoJ21jQm90b1NlbCcpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcblx0XHRcdGNvbnN0IHRhYklkID0gdGFiLmlkO1xuXG5cdFx0XHR0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0YWN0aXZhdGVUYWJDb250ZW50KHRhYklkKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBc0JDLFFBQUEsaUJBQUE7QUFFdEIsTUFBQSxHQUFLRCxrQkFBQUUsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLGVBQXFCO0FBQUEsTUFBQUMsWUFBQUMsMkJBQ3pCQyxTQUFTQyxpQkFBaUIsMEJBQTBCLENBQUEsR0FBQUM7QUFBQSxNQUFBO0FBQTVFLFNBQUFKLFVBQUFLLEVBQUEsR0FBQSxFQUFBRCxRQUFBSixVQUFBTSxFQUFBLEdBQUFDLFFBQStFO0FBQUEsWUFBcEVDLFlBQUFKLE1BQUFLO0FBQ1YsWUFBTUMsY0FBY0YsVUFBVUc7QUFDOUIsWUFBTUMsT0FBT0osVUFBVUwsaUJBQWlDLGVBQWU7QUFDdkUsWUFBTVUsV0FBV0wsVUFBVUwsaUJBQWlDLG1CQUFtQjtBQUUvRSxZQUFNVyxxQkFBc0JDLFdBQWtCO0FBQUEsWUFBQUMsYUFBQWYsMkJBQ3ZCWSxRQUFBLEdBQUFJO0FBQUEsWUFBQTtBQUF0QixlQUFBRCxXQUFBWCxFQUFBLEdBQUEsRUFBQVksU0FBQUQsV0FBQVYsRUFBQSxHQUFBQyxRQUFnQztBQUFBLGtCQUFyQlcsVUFBQUQsT0FBQVI7QUFDVixrQkFBTVUsWUFBWUQsUUFBUVAsR0FBR1MsUUFBUSxJQUFJQyxPQUFBLElBQUFDLE9BQVdaLGFBQVcsSUFBQSxDQUFJLEdBQUcsRUFBRTtBQUN4RSxrQkFBTWEsYUFBYVIsTUFBTUssUUFBUSxJQUFJQyxPQUFBLElBQUFDLE9BQVdaLGFBQVcsSUFBQSxDQUFJLEdBQUcsRUFBRTtBQUVwRSxnQkFBSVMsY0FBY0ksWUFBWTtBQUM3Qkwsc0JBQVFNLE1BQU1DLFVBQVU7QUFDeEJQLHNCQUFRTSxNQUFNRSxhQUFhO1lBQzVCLE9BQU87QUFDTlIsc0JBQVFNLE1BQU1DLFVBQVU7QUFDeEJQLHNCQUFRTSxNQUFNRSxhQUFhO1lBQzVCO1VBQ0Q7UUFBQSxTQUFBQyxLQUFBO0FBQUFYLHFCQUFBWSxFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBWCxxQkFBQWEsRUFBQTtRQUFBO0FBQUEsWUFBQUMsYUFBQTdCLDJCQUVrQlcsSUFBQSxHQUFBbUI7QUFBQSxZQUFBO0FBQWxCLGVBQUFELFdBQUF6QixFQUFBLEdBQUEsRUFBQTBCLFNBQUFELFdBQUF4QixFQUFBLEdBQUFDLFFBQXdCO0FBQUEsa0JBQWJ5QixNQUFBRCxPQUFBdEI7QUFDVixnQkFBSXVCLElBQUlyQixPQUFPSSxPQUFPO0FBQ3JCaUIsa0JBQUlDLFVBQVVDLElBQUksV0FBVztBQUM3QkYsa0JBQUlDLFVBQVVFLE9BQU8sUUFBUTtZQUM5QixPQUFPO0FBQ05ILGtCQUFJQyxVQUFVQyxJQUFJLFFBQVE7QUFDMUJGLGtCQUFJQyxVQUFVRSxPQUFPLFdBQVc7WUFDakM7VUFDRDtRQUFBLFNBQUFSLEtBQUE7QUFBQUcscUJBQUFGLEVBQUFELEdBQUE7UUFBQSxVQUFBO0FBQUFHLHFCQUFBRCxFQUFBO1FBQUE7TUFDRDtBQUFBLFVBQUFPLGFBQUFuQywyQkFFa0JXLElBQUEsR0FBQXlCO0FBQUEsVUFBQTtBQUFsQixhQUFBRCxXQUFBL0IsRUFBQSxHQUFBLEVBQUFnQyxTQUFBRCxXQUFBOUIsRUFBQSxHQUFBQyxRQUF3QjtBQUFBLGdCQUFieUIsTUFBQUssT0FBQTVCO0FBQ1YsZ0JBQU1NLFFBQVFpQixJQUFJckI7QUFFbEJxQixjQUFJTSxpQkFBaUIsU0FBVUMsV0FBVTtBQUN4Q0Esa0JBQU1DLGVBQWU7QUFDckIxQiwrQkFBbUJDLEtBQUs7VUFDekIsQ0FBQztRQUNGO01BQUEsU0FBQVksS0FBQTtBQUFBUyxtQkFBQVIsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQVMsbUJBQUFQLEVBQUE7TUFBQTtJQUNEO0VBQUEsU0FBQUYsS0FBQTtBQUFBM0IsY0FBQTRCLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUEzQixjQUFBNkIsRUFBQTtFQUFBO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRCb2R5IiwgInRoZW4iLCAidGVtcGxhdGVUYWJzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImNvbnRhaW5lciIsICJ2YWx1ZSIsICJjb250YWluZXJJZCIsICJpZCIsICJ0YWJzIiwgImNvbnRlbnRzIiwgImFjdGl2YXRlVGFiQ29udGVudCIsICJ0YWJJZCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJjb250ZW50IiwgImNvbnRlbnRJZCIsICJyZXBsYWNlIiwgIlJlZ0V4cCIsICJjb25jYXQiLCAibWF0Y2hUYWJJZCIsICJzdHlsZSIsICJkaXNwbGF5IiwgInZpc2liaWxpdHkiLCAiZXJyIiwgImUiLCAiZiIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ0YWIiLCAiY2xhc3NMaXN0IiwgImFkZCIsICJyZW1vdmUiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCJdCn0K
