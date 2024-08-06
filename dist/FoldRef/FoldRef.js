/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:燃灯/foldRef.js}
 * @base {@link https://zh.wikipedia.org/wiki/User:燃灯/foldRef.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/FoldRef}
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

// dist/FoldRef/FoldRef.js
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
//! src/FoldRef/modules/FoldRef.module.less
var expand = "FoldRef-module__expand_FNkcvW";
var refarea = "FoldRef-module__refarea_FNkcvW";
//! src/FoldRef/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Expand: (0, import_ext_gadget.localize)({
      en: "Expand",
      ja: "展開",
      "zh-hans": "展开",
      "zh-hant": "展開"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/FoldRef/modules/util/processElement.ts
var processElement = ($element) => {
  const $refFolder = $("<div>").addClass(refarea);
  $refFolder.insertBefore($element);
  $element.appendTo($refFolder);
  const $expandButton = $("<div>").addClass(expand).text(getMessage("Expand"));
  $refFolder.after($expandButton);
};
//! src/FoldRef/modules/core.ts
var foldRef = ($body) => {
  const $foldRef = $body.find(".mw-references-wrap,.refbegin");
  var _iterator = _createForOfIteratorHelper($foldRef), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const element = _step.value;
      const $element = $(element);
      if ($element.parent("div").parent("div").hasClass(refarea) || $element.parent("div").hasClass(refarea)) {
        continue;
      }
      const height = $element.height();
      if (!height || height <= window.innerHeight * 0.9) {
        continue;
      }
      processElement($element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  $body.find(".".concat(expand)).on("click", (event) => {
    const $element = $(event.currentTarget);
    $element.prev(".".concat(refarea)).removeClass(refarea);
    $element.remove();
  });
};
//! src/FoldRef/FoldRef.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var {
  wgNamespaceNumber
} = mw.config.get();
if (wgNamespaceNumber === 0) {
  void (0, import_ext_gadget2.getBody)().then(foldRef);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0ZvbGRSZWYvbW9kdWxlcy9Gb2xkUmVmLm1vZHVsZS5sZXNzIiwgInNyYy9Gb2xkUmVmL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRm9sZFJlZi9tb2R1bGVzL3V0aWwvcHJvY2Vzc0VsZW1lbnQudHMiLCAic3JjL0ZvbGRSZWYvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9Gb2xkUmVmL0ZvbGRSZWYudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRm9sZFJlZi9tb2R1bGVzL0ZvbGRSZWYubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBleHBhbmQgPSBcIkZvbGRSZWYtbW9kdWxlX19leHBhbmRfRk5rY3ZXXCI7XG5leHBvcnQgY29uc3QgcmVmYXJlYSA9IFwiRm9sZFJlZi1tb2R1bGVfX3JlZmFyZWFfRk5rY3ZXXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJleHBhbmRcIjogZXhwYW5kLFxuICBcInJlZmFyZWFcIjogcmVmYXJlYVxufTtcbiAgICAgICIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RXhwYW5kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4cGFuZCcsXG5cdFx0XHRqYTogJ+WxlemWiycsXG5cdFx0XHQnemgtaGFucyc6ICflsZXlvIAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bGV6ZaLJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtleHBhbmQsIHJlZmFyZWF9IGZyb20gJy4uL0ZvbGRSZWYubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuLy8gY3JlYXRlIGEgZGl2LCBwbGFjZSB7e1JlZmxpc3R9fXMgaW5zaWRlXG5jb25zdCBwcm9jZXNzRWxlbWVudCA9ICgkZWxlbWVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0ICRyZWZGb2xkZXI6IEpRdWVyeSA9ICQoJzxkaXY+JykuYWRkQ2xhc3MocmVmYXJlYSk7XG5cblx0JHJlZkZvbGRlci5pbnNlcnRCZWZvcmUoJGVsZW1lbnQpO1xuXHQkZWxlbWVudC5hcHBlbmRUbygkcmVmRm9sZGVyKTtcblxuXHQvLyBhZGQgYW4gZXhwYW5kIGJ1dHRvbiBhdCB0aGUgYm90dG9tXG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0ICRleHBhbmRCdXR0b246IEpRdWVyeSA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoZXhwYW5kKS50ZXh0KGdldE1lc3NhZ2UoJ0V4cGFuZCcpKTtcblx0JHJlZkZvbGRlci5hZnRlcigkZXhwYW5kQnV0dG9uKTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0VsZW1lbnR9O1xuIiwgImltcG9ydCB7ZXhwYW5kLCByZWZhcmVhfSBmcm9tICcuL0ZvbGRSZWYubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtwcm9jZXNzRWxlbWVudH0gZnJvbSAnLi91dGlsL3Byb2Nlc3NFbGVtZW50JztcblxuY29uc3QgZm9sZFJlZiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gZm9yIGFydGljbGVzIHVzaW5nIDxyZWZlcmVuY2VzIC8+LCB7e1JlZmxpc3R9fXMgb3Igc2ltaWxhciB0ZW1wbGF0ZXNcblx0Y29uc3QgJGZvbGRSZWY6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5tdy1yZWZlcmVuY2VzLXdyYXAsLnJlZmJlZ2luJyk7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkZm9sZFJlZikge1xuXHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcblx0XHRpZiAoJGVsZW1lbnQucGFyZW50KCdkaXYnKS5wYXJlbnQoJ2RpdicpLmhhc0NsYXNzKHJlZmFyZWEpIHx8ICRlbGVtZW50LnBhcmVudCgnZGl2JykuaGFzQ2xhc3MocmVmYXJlYSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhlaWdodDogbnVtYmVyIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuaGVpZ2h0KCk7XG5cdFx0aWYgKCFoZWlnaHQgfHwgaGVpZ2h0IDw9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuOSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgZ3JlYXRlciB0aGFuIDkwJSBvZiB0aGUgdmlld3BvcnQgaGVpZ2h0LCBmb2xkIHRoZSByZWZlcmVuY2VzIGxpc3Rcblx0XHRwcm9jZXNzRWxlbWVudCgkZWxlbWVudCk7XG5cdH1cblxuXHQvLyBhdHRhY2ggZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGV4cGFuZCBidXR0b25zXG5cdCRib2R5LmZpbmQoYC4ke2V4cGFuZH1gKS5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSBhcyBKUXVlcnk7XG5cblx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHQkZWxlbWVudC5wcmV2KGAuJHtyZWZhcmVhfWApLnJlbW92ZUNsYXNzKHJlZmFyZWEpO1xuXHRcdCRlbGVtZW50LnJlbW92ZSgpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7Zm9sZFJlZn07XG4iLCAiaW1wb3J0IHtmb2xkUmVmfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHt3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCkge1xuXHR2b2lkIGdldEJvZHkoKS50aGVuKGZvbGRSZWYpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxTQUFTO0FBQ2YsSUFBTUMsVUFBVTs7QUNGdkIsSUFBQUMsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUgsa0JBQUFJLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUNiQSxJQUFNQyxpQkFBa0JDLGNBQTJCO0FBSWxELFFBQU1DLGFBQXFCQyxFQUFFLE9BQU8sRUFBRUMsU0FBU2YsT0FBTztBQUV0RGEsYUFBV0csYUFBYUosUUFBUTtBQUNoQ0EsV0FBU0ssU0FBU0osVUFBVTtBQU01QixRQUFNSyxnQkFBd0JKLEVBQUUsT0FBTyxFQUFFQyxTQUFTaEIsTUFBTSxFQUFFb0IsS0FBS1YsV0FBVyxRQUFRLENBQUM7QUFDbkZJLGFBQVdPLE1BQU1GLGFBQWE7QUFDL0I7O0FDaEJBLElBQU1HLFVBQVdDLFdBQXlDO0FBRXpELFFBQU1DLFdBQW1CRCxNQUFNRSxLQUFLLCtCQUErQjtBQUFBLE1BQUFDLFlBQUFDLDJCQUM3Q0gsUUFBQSxHQUFBSTtBQUFBLE1BQUE7QUFBdEIsU0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBZ0M7QUFBQSxZQUFyQkMsVUFBQUosTUFBQUs7QUFDVixZQUFNcEIsV0FBV0UsRUFBRWlCLE9BQU87QUFDMUIsVUFBSW5CLFNBQVNxQixPQUFPLEtBQUssRUFBRUEsT0FBTyxLQUFLLEVBQUVDLFNBQVNsQyxPQUFPLEtBQUtZLFNBQVNxQixPQUFPLEtBQUssRUFBRUMsU0FBU2xDLE9BQU8sR0FBRztBQUN2RztNQUNEO0FBRUEsWUFBTW1DLFNBQTZCdkIsU0FBU3VCLE9BQU87QUFDbkQsVUFBSSxDQUFDQSxVQUFVQSxVQUFVQyxPQUFPQyxjQUFjLEtBQUs7QUFDbEQ7TUFDRDtBQUdBMUIscUJBQWVDLFFBQVE7SUFDeEI7RUFBQSxTQUFBMEIsS0FBQTtBQUFBYixjQUFBYyxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBYixjQUFBZSxFQUFBO0VBQUE7QUFHQWxCLFFBQU1FLEtBQUEsSUFBQWlCLE9BQVMxQyxNQUFNLENBQUUsRUFBRTJDLEdBQUcsU0FBVUMsV0FBZ0Q7QUFDckYsVUFBTS9CLFdBQVdFLEVBQUU2QixNQUFNQyxhQUFhO0FBS3RDaEMsYUFBU2lDLEtBQUEsSUFBQUosT0FBU3pDLE9BQU8sQ0FBRSxFQUFFOEMsWUFBWTlDLE9BQU87QUFDaERZLGFBQVNtQyxPQUFPO0VBQ2pCLENBQUM7QUFDRjs7QUM5QkEsSUFBQUMscUJBQXNCOUMsUUFBQSxpQkFBQTtBQUV0QixJQUFNO0VBQUMrQztBQUFpQixJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRTFDLElBQUlILHNCQUFzQixHQUFHO0FBQzVCLFFBQUEsR0FBS0QsbUJBQUFLLFNBQVEsRUFBRUMsS0FBS2pDLE9BQU87QUFDNUI7IiwKICAibmFtZXMiOiBbImV4cGFuZCIsICJyZWZhcmVhIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkV4cGFuZCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJvY2Vzc0VsZW1lbnQiLCAiJGVsZW1lbnQiLCAiJHJlZkZvbGRlciIsICIkIiwgImFkZENsYXNzIiwgImluc2VydEJlZm9yZSIsICJhcHBlbmRUbyIsICIkZXhwYW5kQnV0dG9uIiwgInRleHQiLCAiYWZ0ZXIiLCAiZm9sZFJlZiIsICIkYm9keSIsICIkZm9sZFJlZiIsICJmaW5kIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgInBhcmVudCIsICJoYXNDbGFzcyIsICJoZWlnaHQiLCAid2luZG93IiwgImlubmVySGVpZ2h0IiwgImVyciIsICJlIiwgImYiLCAiY29uY2F0IiwgIm9uIiwgImV2ZW50IiwgImN1cnJlbnRUYXJnZXQiLCAicHJldiIsICJyZW1vdmVDbGFzcyIsICJyZW1vdmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=
