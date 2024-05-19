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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length) return { done: true };
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
      if (!normalCompletion && it.return != null) it.return();
    } finally {
      if (didErr) throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0ZvbGRSZWYvbW9kdWxlcy9Gb2xkUmVmLm1vZHVsZS5sZXNzIiwgInNyYy9Gb2xkUmVmL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRm9sZFJlZi9tb2R1bGVzL3V0aWwvcHJvY2Vzc0VsZW1lbnQudHMiLCAic3JjL0ZvbGRSZWYvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9Gb2xkUmVmL0ZvbGRSZWYudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRm9sZFJlZi9tb2R1bGVzL0ZvbGRSZWYubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBleHBhbmQgPSBcIkZvbGRSZWYtbW9kdWxlX19leHBhbmRfRk5rY3ZXXCI7XG5leHBvcnQgY29uc3QgcmVmYXJlYSA9IFwiRm9sZFJlZi1tb2R1bGVfX3JlZmFyZWFfRk5rY3ZXXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJleHBhbmRcIjogZXhwYW5kLFxuICBcInJlZmFyZWFcIjogcmVmYXJlYVxufTtcbiAgICAgICIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RXhwYW5kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4cGFuZCcsXG5cdFx0XHRqYTogJ+WxlemWiycsXG5cdFx0XHQnemgtaGFucyc6ICflsZXlvIAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bGV6ZaLJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtleHBhbmQsIHJlZmFyZWF9IGZyb20gJy4uL0ZvbGRSZWYubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuLy8gY3JlYXRlIGEgZGl2LCBwbGFjZSB7e1JlZmxpc3R9fXMgaW5zaWRlXG5jb25zdCBwcm9jZXNzRWxlbWVudCA9ICgkZWxlbWVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0ICRyZWZGb2xkZXI6IEpRdWVyeSA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoYCR7cmVmYXJlYX1gKTtcblxuXHQkcmVmRm9sZGVyLmluc2VydEJlZm9yZSgkZWxlbWVudCk7XG5cdCRlbGVtZW50LmFwcGVuZFRvKCRyZWZGb2xkZXIpO1xuXG5cdC8vIGFkZCBhbiBleHBhbmQgYnV0dG9uIGF0IHRoZSBib3R0b21cblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0Y29uc3QgJGV4cGFuZEJ1dHRvbjogSlF1ZXJ5ID0gJCgnPGRpdj4nKS5hZGRDbGFzcyhgJHtleHBhbmR9YCkudGV4dChnZXRNZXNzYWdlKCdFeHBhbmQnKSk7XG5cdCRyZWZGb2xkZXIuYWZ0ZXIoJGV4cGFuZEJ1dHRvbik7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NFbGVtZW50fTtcbiIsICJpbXBvcnQge2V4cGFuZCwgcmVmYXJlYX0gZnJvbSAnLi9Gb2xkUmVmLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7cHJvY2Vzc0VsZW1lbnR9IGZyb20gJy4vdXRpbC9wcm9jZXNzRWxlbWVudCc7XG5cbmNvbnN0IGZvbGRSZWYgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIGZvciBhcnRpY2xlcyB1c2luZyA8cmVmZXJlbmNlcyAvPiwge3tSZWZsaXN0fX1zIG9yIHNpbWlsYXIgdGVtcGxhdGVzXG5cdGNvbnN0ICRmb2xkUmVmOiBKUXVlcnkgPSAkYm9keS5maW5kKCcubXctcmVmZXJlbmNlcy13cmFwLC5yZWZiZWdpbicpO1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGZvbGRSZWYpIHtcblx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKFxuXHRcdFx0JGVsZW1lbnQucGFyZW50KCdkaXYnKS5wYXJlbnQoJ2RpdicpLmhhc0NsYXNzKGAke3JlZmFyZWF9YCkgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnZGl2JykuaGFzQ2xhc3MoYCR7cmVmYXJlYX1gKVxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5oZWlnaHQoKTtcblx0XHRpZiAoIWhlaWdodCB8fCBoZWlnaHQgPD0gd2luZG93LmlubmVySGVpZ2h0ICogMC45KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBpZiBncmVhdGVyIHRoYW4gOTAlIG9mIHRoZSB2aWV3cG9ydCBoZWlnaHQsIGZvbGQgdGhlIHJlZmVyZW5jZXMgbGlzdFxuXHRcdHByb2Nlc3NFbGVtZW50KCRlbGVtZW50KTtcblx0fVxuXG5cdC8vIGF0dGFjaCBldmVudCBsaXN0ZW5lciB0byB0aGUgZXhwYW5kIGJ1dHRvbnNcblx0JGJvZHkuZmluZChgLiR7ZXhwYW5kfWApLm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQ8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpIGFzIEpRdWVyeTtcblxuXHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdCRlbGVtZW50LnByZXYoYC4ke3JlZmFyZWF9YCkucmVtb3ZlQ2xhc3MoYCR7cmVmYXJlYX1gKTtcblx0XHQkZWxlbWVudC5yZW1vdmUoKTtcblx0fSk7XG59O1xuXG5leHBvcnQge2ZvbGRSZWZ9O1xuIiwgImltcG9ydCB7Zm9sZFJlZn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5pZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0dm9pZCBnZXRCb2R5KCkudGhlbihmb2xkUmVmKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxTQUFTO0FBQ2YsSUFBTUMsVUFBVTs7QUNGdkIsSUFBQUMsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUgsa0JBQUFJLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUNiQSxJQUFNQyxpQkFBa0JDLGNBQTJCO0FBSWxELFFBQU1DLGFBQXFCQyxFQUFFLE9BQU8sRUFBRUMsU0FBQSxHQUFBQyxPQUFZaEIsT0FBTyxDQUFFO0FBRTNEYSxhQUFXSSxhQUFhTCxRQUFRO0FBQ2hDQSxXQUFTTSxTQUFTTCxVQUFVO0FBTTVCLFFBQU1NLGdCQUF3QkwsRUFBRSxPQUFPLEVBQUVDLFNBQUEsR0FBQUMsT0FBWWpCLE1BQU0sQ0FBRSxFQUFFcUIsS0FBS1gsV0FBVyxRQUFRLENBQUM7QUFDeEZJLGFBQVdRLE1BQU1GLGFBQWE7QUFDL0I7O0FDaEJBLElBQU1HLFVBQVdDLFdBQXlDO0FBRXpELFFBQU1DLFdBQW1CRCxNQUFNRSxLQUFLLCtCQUErQjtBQUFBLE1BQUFDLFlBQUFDLDJCQUM3Q0gsUUFBQSxHQUFBSTtBQUFBLE1BQUE7QUFBdEIsU0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBZ0M7QUFBQSxZQUFyQkMsVUFBQUosTUFBQUs7QUFDVixZQUFNckIsV0FBV0UsRUFBRWtCLE9BQU87QUFDMUIsVUFDQ3BCLFNBQVNzQixPQUFPLEtBQUssRUFBRUEsT0FBTyxLQUFLLEVBQUVDLFNBQUEsR0FBQW5CLE9BQVloQixPQUFPLENBQUUsS0FDMURZLFNBQVNzQixPQUFPLEtBQUssRUFBRUMsU0FBQSxHQUFBbkIsT0FBWWhCLE9BQU8sQ0FBRSxHQUMzQztBQUNEO01BQ0Q7QUFFQSxZQUFNb0MsU0FBNkJ4QixTQUFTd0IsT0FBTztBQUNuRCxVQUFJLENBQUNBLFVBQVVBLFVBQVVDLE9BQU9DLGNBQWMsS0FBSztBQUNsRDtNQUNEO0FBR0EzQixxQkFBZUMsUUFBUTtJQUN4QjtFQUFBLFNBQUEyQixLQUFBO0FBQUFiLGNBQUFjLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFiLGNBQUFlLEVBQUE7RUFBQTtBQUdBbEIsUUFBTUUsS0FBQSxJQUFBVCxPQUFTakIsTUFBTSxDQUFFLEVBQUUyQyxHQUFHLFNBQVVDLFdBQWdEO0FBQ3JGLFVBQU0vQixXQUFXRSxFQUFFNkIsTUFBTUMsYUFBYTtBQUt0Q2hDLGFBQVNpQyxLQUFBLElBQUE3QixPQUFTaEIsT0FBTyxDQUFFLEVBQUU4QyxZQUFBLEdBQUE5QixPQUFlaEIsT0FBTyxDQUFFO0FBQ3JEWSxhQUFTbUMsT0FBTztFQUNqQixDQUFDO0FBQ0Y7O0FDakNBLElBQUFDLHFCQUFzQjlDLFFBQUEsaUJBQUE7QUFFdEIsSUFBTTtFQUFDK0M7QUFBaUIsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUUxQyxJQUFJSCxzQkFBc0IsR0FBRztBQUM1QixRQUFBLEdBQUtELG1CQUFBSyxTQUFRLEVBQUVDLEtBQUtoQyxPQUFPO0FBQzVCOyIsCiAgIm5hbWVzIjogWyJleHBhbmQiLCAicmVmYXJlYSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJFeHBhbmQiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInByb2Nlc3NFbGVtZW50IiwgIiRlbGVtZW50IiwgIiRyZWZGb2xkZXIiLCAiJCIsICJhZGRDbGFzcyIsICJjb25jYXQiLCAiaW5zZXJ0QmVmb3JlIiwgImFwcGVuZFRvIiwgIiRleHBhbmRCdXR0b24iLCAidGV4dCIsICJhZnRlciIsICJmb2xkUmVmIiwgIiRib2R5IiwgIiRmb2xkUmVmIiwgImZpbmQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAicGFyZW50IiwgImhhc0NsYXNzIiwgImhlaWdodCIsICJ3aW5kb3ciLCAiaW5uZXJIZWlnaHQiLCAiZXJyIiwgImUiLCAiZiIsICJvbiIsICJldmVudCIsICJjdXJyZW50VGFyZ2V0IiwgInByZXYiLCAicmVtb3ZlQ2xhc3MiLCAicmVtb3ZlIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImdldEJvZHkiLCAidGhlbiJdCn0K
