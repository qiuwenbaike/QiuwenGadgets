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
  const $refFolder = $("<div>").addClass("".concat(refarea));
  $refFolder.insertBefore($element);
  $element.appendTo($refFolder);
  const $expandButton = $("<div>").addClass("".concat(expand)).text(getMessage("Expand"));
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
      if ($element.parent("div").parent("div").hasClass("".concat(refarea)) || $element.parent("div").hasClass("".concat(refarea))) {
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
    $element.prev(".".concat(refarea)).removeClass("".concat(refarea));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0ZvbGRSZWYvbW9kdWxlcy9Gb2xkUmVmLm1vZHVsZS5sZXNzIiwgInNyYy9Gb2xkUmVmL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRm9sZFJlZi9tb2R1bGVzL3V0aWwvcHJvY2Vzc0VsZW1lbnQudHMiLCAic3JjL0ZvbGRSZWYvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9Gb2xkUmVmL0ZvbGRSZWYudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRm9sZFJlZi9tb2R1bGVzL0ZvbGRSZWYubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBleHBhbmQgPSBcIkZvbGRSZWYtbW9kdWxlX19leHBhbmRfRk5rY3ZXXCI7XG5leHBvcnQgY29uc3QgcmVmYXJlYSA9IFwiRm9sZFJlZi1tb2R1bGVfX3JlZmFyZWFfRk5rY3ZXXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJleHBhbmRcIjogZXhwYW5kLFxuICBcInJlZmFyZWFcIjogcmVmYXJlYVxufTtcbiAgICAgICIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RXhwYW5kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4cGFuZCcsXG5cdFx0XHRqYTogJ+WxlemWiycsXG5cdFx0XHQnemgtaGFucyc6ICflsZXlvIAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bGV6ZaLJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtleHBhbmQsIHJlZmFyZWF9IGZyb20gJy4uL0ZvbGRSZWYubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuLy8gY3JlYXRlIGEgZGl2LCBwbGFjZSB7e1JlZmxpc3R9fXMgaW5zaWRlXG5jb25zdCBwcm9jZXNzRWxlbWVudCA9ICgkZWxlbWVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0ICRyZWZGb2xkZXI6IEpRdWVyeSA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoYCR7cmVmYXJlYX1gKTtcblxuXHQkcmVmRm9sZGVyLmluc2VydEJlZm9yZSgkZWxlbWVudCk7XG5cdCRlbGVtZW50LmFwcGVuZFRvKCRyZWZGb2xkZXIpO1xuXG5cdC8vIGFkZCBhbiBleHBhbmQgYnV0dG9uIGF0IHRoZSBib3R0b21cblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0Y29uc3QgJGV4cGFuZEJ1dHRvbjogSlF1ZXJ5ID0gJCgnPGRpdj4nKS5hZGRDbGFzcyhgJHtleHBhbmR9YCkudGV4dChnZXRNZXNzYWdlKCdFeHBhbmQnKSk7XG5cdCRyZWZGb2xkZXIuYWZ0ZXIoJGV4cGFuZEJ1dHRvbik7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NFbGVtZW50fTtcbiIsICJpbXBvcnQge2V4cGFuZCwgcmVmYXJlYX0gZnJvbSAnLi9Gb2xkUmVmLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7cHJvY2Vzc0VsZW1lbnR9IGZyb20gJy4vdXRpbC9wcm9jZXNzRWxlbWVudCc7XG5cbmNvbnN0IGZvbGRSZWYgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIGZvciBhcnRpY2xlcyB1c2luZyA8cmVmZXJlbmNlcyAvPiwge3tSZWZsaXN0fX1zIG9yIHNpbWlsYXIgdGVtcGxhdGVzXG5cdGNvbnN0ICRmb2xkUmVmOiBKUXVlcnkgPSAkYm9keS5maW5kKCcubXctcmVmZXJlbmNlcy13cmFwLC5yZWZiZWdpbicpO1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGZvbGRSZWYpIHtcblx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKFxuXHRcdFx0JGVsZW1lbnQucGFyZW50KCdkaXYnKS5wYXJlbnQoJ2RpdicpLmhhc0NsYXNzKGAke3JlZmFyZWF9YCkgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnZGl2JykuaGFzQ2xhc3MoYCR7cmVmYXJlYX1gKVxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5oZWlnaHQoKTtcblx0XHRpZiAoIWhlaWdodCB8fCBoZWlnaHQgPD0gd2luZG93LmlubmVySGVpZ2h0ICogMC45KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBpZiBncmVhdGVyIHRoYW4gOTAlIG9mIHRoZSB2aWV3cG9ydCBoZWlnaHQsIGZvbGQgdGhlIHJlZmVyZW5jZXMgbGlzdFxuXHRcdHByb2Nlc3NFbGVtZW50KCRlbGVtZW50KTtcblx0fVxuXG5cdC8vIGF0dGFjaCBldmVudCBsaXN0ZW5lciB0byB0aGUgZXhwYW5kIGJ1dHRvbnNcblx0JGJvZHkuZmluZChgLiR7ZXhwYW5kfWApLm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQ8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpIGFzIEpRdWVyeTtcblxuXHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdCRlbGVtZW50LnByZXYoYC4ke3JlZmFyZWF9YCkucmVtb3ZlQ2xhc3MoYCR7cmVmYXJlYX1gKTtcblx0XHQkZWxlbWVudC5yZW1vdmUoKTtcblx0fSk7XG59O1xuXG5leHBvcnQge2ZvbGRSZWZ9O1xuIiwgImltcG9ydCB7Zm9sZFJlZn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5pZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0dm9pZCBnZXRCb2R5KCkudGhlbihmb2xkUmVmKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsU0FBUztBQUNmLElBQU1DLFVBQVU7O0FDRnZCLElBQUFDLG9CQUF1QkMsUUFBQSxpQkFBQTtBQUV2QixJQUFNQyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFILGtCQUFBSSxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUMsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDYkEsSUFBTUMsaUJBQWtCQyxjQUEyQjtBQUlsRCxRQUFNQyxhQUFxQkMsRUFBRSxPQUFPLEVBQUVDLFNBQUEsR0FBQUMsT0FBWWhCLE9BQU8sQ0FBRTtBQUUzRGEsYUFBV0ksYUFBYUwsUUFBUTtBQUNoQ0EsV0FBU00sU0FBU0wsVUFBVTtBQU01QixRQUFNTSxnQkFBd0JMLEVBQUUsT0FBTyxFQUFFQyxTQUFBLEdBQUFDLE9BQVlqQixNQUFNLENBQUUsRUFBRXFCLEtBQUtYLFdBQVcsUUFBUSxDQUFDO0FBQ3hGSSxhQUFXUSxNQUFNRixhQUFhO0FBQy9COztBQ2hCQSxJQUFNRyxVQUFXQyxXQUF5QztBQUV6RCxRQUFNQyxXQUFtQkQsTUFBTUUsS0FBSywrQkFBK0I7QUFBQSxNQUFBQyxZQUFBQywyQkFDN0NILFFBQUEsR0FBQUk7QUFBQSxNQUFBO0FBQXRCLFNBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQWdDO0FBQUEsWUFBckJDLFVBQUFKLE1BQUFLO0FBQ1YsWUFBTXJCLFdBQVdFLEVBQUVrQixPQUFPO0FBQzFCLFVBQ0NwQixTQUFTc0IsT0FBTyxLQUFLLEVBQUVBLE9BQU8sS0FBSyxFQUFFQyxTQUFBLEdBQUFuQixPQUFZaEIsT0FBTyxDQUFFLEtBQzFEWSxTQUFTc0IsT0FBTyxLQUFLLEVBQUVDLFNBQUEsR0FBQW5CLE9BQVloQixPQUFPLENBQUUsR0FDM0M7QUFDRDtNQUNEO0FBRUEsWUFBTW9DLFNBQTZCeEIsU0FBU3dCLE9BQU87QUFDbkQsVUFBSSxDQUFDQSxVQUFVQSxVQUFVQyxPQUFPQyxjQUFjLEtBQUs7QUFDbEQ7TUFDRDtBQUdBM0IscUJBQWVDLFFBQVE7SUFDeEI7RUFBQSxTQUFBMkIsS0FBQTtBQUFBYixjQUFBYyxFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBYixjQUFBZSxFQUFBO0VBQUE7QUFHQWxCLFFBQU1FLEtBQUEsSUFBQVQsT0FBU2pCLE1BQU0sQ0FBRSxFQUFFMkMsR0FBRyxTQUFVQyxXQUFnRDtBQUNyRixVQUFNL0IsV0FBV0UsRUFBRTZCLE1BQU1DLGFBQWE7QUFLdENoQyxhQUFTaUMsS0FBQSxJQUFBN0IsT0FBU2hCLE9BQU8sQ0FBRSxFQUFFOEMsWUFBQSxHQUFBOUIsT0FBZWhCLE9BQU8sQ0FBRTtBQUNyRFksYUFBU21DLE9BQU87RUFDakIsQ0FBQztBQUNGOztBQ2pDQSxJQUFBQyxxQkFBc0I5QyxRQUFBLGlCQUFBO0FBRXRCLElBQU07RUFBQytDO0FBQWlCLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFMUMsSUFBSUgsc0JBQXNCLEdBQUc7QUFDNUIsUUFBQSxHQUFLRCxtQkFBQUssU0FBUSxFQUFFQyxLQUFLaEMsT0FBTztBQUM1QjsiLAogICJuYW1lcyI6IFsiZXhwYW5kIiwgInJlZmFyZWEiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiRXhwYW5kIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJwcm9jZXNzRWxlbWVudCIsICIkZWxlbWVudCIsICIkcmVmRm9sZGVyIiwgIiQiLCAiYWRkQ2xhc3MiLCAiY29uY2F0IiwgImluc2VydEJlZm9yZSIsICJhcHBlbmRUbyIsICIkZXhwYW5kQnV0dG9uIiwgInRleHQiLCAiYWZ0ZXIiLCAiZm9sZFJlZiIsICIkYm9keSIsICIkZm9sZFJlZiIsICJmaW5kIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgInBhcmVudCIsICJoYXNDbGFzcyIsICJoZWlnaHQiLCAid2luZG93IiwgImlubmVySGVpZ2h0IiwgImVyciIsICJlIiwgImYiLCAib24iLCAiZXZlbnQiLCAiY3VycmVudFRhcmdldCIsICJwcmV2IiwgInJlbW92ZUNsYXNzIiwgInJlbW92ZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
