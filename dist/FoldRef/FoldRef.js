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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0ZvbGRSZWYvbW9kdWxlcy9Gb2xkUmVmLm1vZHVsZS5sZXNzIiwgInNyYy9Gb2xkUmVmL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRm9sZFJlZi9tb2R1bGVzL3V0aWwvcHJvY2Vzc0VsZW1lbnQudHMiLCAic3JjL0ZvbGRSZWYvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9Gb2xkUmVmL0ZvbGRSZWYudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRm9sZFJlZi9tb2R1bGVzL0ZvbGRSZWYubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBleHBhbmQgPSBcIkZvbGRSZWYtbW9kdWxlX19leHBhbmRfRk5rY3ZXXCI7XG5leHBvcnQgY29uc3QgcmVmYXJlYSA9IFwiRm9sZFJlZi1tb2R1bGVfX3JlZmFyZWFfRk5rY3ZXXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJleHBhbmRcIjogZXhwYW5kLFxuICBcInJlZmFyZWFcIjogcmVmYXJlYVxufTtcbiAgICAgICIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RXhwYW5kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4cGFuZCcsXG5cdFx0XHRqYTogJ+WxlemWiycsXG5cdFx0XHQnemgtaGFucyc6ICflsZXlvIAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bGV6ZaLJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtleHBhbmQsIHJlZmFyZWF9IGZyb20gJy4uL0ZvbGRSZWYubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuLy8gY3JlYXRlIGEgZGl2LCBwbGFjZSB7e1JlZmxpc3R9fXMgaW5zaWRlXG5jb25zdCBwcm9jZXNzRWxlbWVudCA9ICgkZWxlbWVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0ICRyZWZGb2xkZXI6IEpRdWVyeSA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoYCR7cmVmYXJlYX1gKTtcblxuXHQkcmVmRm9sZGVyLmluc2VydEJlZm9yZSgkZWxlbWVudCk7XG5cdCRlbGVtZW50LmFwcGVuZFRvKCRyZWZGb2xkZXIpO1xuXG5cdC8vIGFkZCBhbiBleHBhbmQgYnV0dG9uIGF0IHRoZSBib3R0b21cblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0Y29uc3QgJGV4cGFuZEJ1dHRvbjogSlF1ZXJ5ID0gJCgnPGRpdj4nKS5hZGRDbGFzcyhgJHtleHBhbmR9YCkudGV4dChnZXRNZXNzYWdlKCdFeHBhbmQnKSk7XG5cdCRyZWZGb2xkZXIuYWZ0ZXIoJGV4cGFuZEJ1dHRvbik7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NFbGVtZW50fTtcbiIsICJpbXBvcnQge2V4cGFuZCwgcmVmYXJlYX0gZnJvbSAnLi9Gb2xkUmVmLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7cHJvY2Vzc0VsZW1lbnR9IGZyb20gJy4vdXRpbC9wcm9jZXNzRWxlbWVudCc7XG5cbmNvbnN0IGZvbGRSZWYgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdC8vIGZvciBhcnRpY2xlcyB1c2luZyA8cmVmZXJlbmNlcyAvPiwge3tSZWZsaXN0fX1zIG9yIHNpbWlsYXIgdGVtcGxhdGVzXG5cdGNvbnN0ICRmb2xkUmVmOiBKUXVlcnkgPSAkYm9keS5maW5kKCcubXctcmVmZXJlbmNlcy13cmFwLC5yZWZiZWdpbicpO1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJGZvbGRSZWYpIHtcblx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKFxuXHRcdFx0JGVsZW1lbnQucGFyZW50KCdkaXYnKS5wYXJlbnQoJ2RpdicpLmhhc0NsYXNzKGAke3JlZmFyZWF9YCkgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnZGl2JykuaGFzQ2xhc3MoYCR7cmVmYXJlYX1gKVxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5oZWlnaHQoKTtcblx0XHRpZiAoIWhlaWdodCB8fCBoZWlnaHQgPD0gd2luZG93LmlubmVySGVpZ2h0ICogMC45KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBpZiBncmVhdGVyIHRoYW4gOTAlIG9mIHRoZSB2aWV3cG9ydCBoZWlnaHQsIGZvbGQgdGhlIHJlZmVyZW5jZXMgbGlzdFxuXHRcdHByb2Nlc3NFbGVtZW50KCRlbGVtZW50KTtcblx0fVxuXG5cdC8vIGF0dGFjaCBldmVudCBsaXN0ZW5lciB0byB0aGUgZXhwYW5kIGJ1dHRvbnNcblx0JGJvZHkuZmluZChgLiR7ZXhwYW5kfWApLm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQ8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpIGFzIEpRdWVyeTtcblxuXHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdCRlbGVtZW50LnByZXYoYC4ke3JlZmFyZWF9YCkucmVtb3ZlQ2xhc3MoYCR7cmVmYXJlYX1gKTtcblx0XHQkZWxlbWVudC5yZW1vdmUoKTtcblx0fSk7XG59O1xuXG5leHBvcnQge2ZvbGRSZWZ9O1xuIiwgImltcG9ydCB7Zm9sZFJlZn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5pZiAod2dOYW1lc3BhY2VOdW1iZXIgPT09IDApIHtcblx0dm9pZCBnZXRCb2R5KCkudGhlbihmb2xkUmVmKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNPLElBQU1BLFNBQVM7QUFDZixJQUFNQyxVQUFVOztBQ0Z2QixJQUFBQyxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRSCxrQkFBQUksVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ2JBLElBQU1DLGlCQUFrQkMsY0FBMkI7QUFJbEQsUUFBTUMsYUFBcUJDLEVBQUUsT0FBTyxFQUFFQyxTQUFBLEdBQUFDLE9BQVloQixPQUFPLENBQUU7QUFFM0RhLGFBQVdJLGFBQWFMLFFBQVE7QUFDaENBLFdBQVNNLFNBQVNMLFVBQVU7QUFNNUIsUUFBTU0sZ0JBQXdCTCxFQUFFLE9BQU8sRUFBRUMsU0FBQSxHQUFBQyxPQUFZakIsTUFBTSxDQUFFLEVBQUVxQixLQUFLWCxXQUFXLFFBQVEsQ0FBQztBQUN4RkksYUFBV1EsTUFBTUYsYUFBYTtBQUMvQjs7QUNoQkEsSUFBTUcsVUFBV0MsV0FBeUM7QUFFekQsUUFBTUMsV0FBbUJELE1BQU1FLEtBQUssK0JBQStCO0FBQUEsTUFBQUMsWUFBQUMsMkJBQzdDSCxRQUFBLEdBQUFJO0FBQUEsTUFBQTtBQUF0QixTQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUFnQztBQUFBLFlBQXJCQyxVQUFBSixNQUFBSztBQUNWLFlBQU1yQixXQUFXRSxFQUFFa0IsT0FBTztBQUMxQixVQUNDcEIsU0FBU3NCLE9BQU8sS0FBSyxFQUFFQSxPQUFPLEtBQUssRUFBRUMsU0FBQSxHQUFBbkIsT0FBWWhCLE9BQU8sQ0FBRSxLQUMxRFksU0FBU3NCLE9BQU8sS0FBSyxFQUFFQyxTQUFBLEdBQUFuQixPQUFZaEIsT0FBTyxDQUFFLEdBQzNDO0FBQ0Q7TUFDRDtBQUVBLFlBQU1vQyxTQUE2QnhCLFNBQVN3QixPQUFPO0FBQ25ELFVBQUksQ0FBQ0EsVUFBVUEsVUFBVUMsT0FBT0MsY0FBYyxLQUFLO0FBQ2xEO01BQ0Q7QUFHQTNCLHFCQUFlQyxRQUFRO0lBQ3hCO0VBQUEsU0FBQTJCLEtBQUE7QUFBQWIsY0FBQWMsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQWIsY0FBQWUsRUFBQTtFQUFBO0FBR0FsQixRQUFNRSxLQUFBLElBQUFULE9BQVNqQixNQUFNLENBQUUsRUFBRTJDLEdBQUcsU0FBVUMsV0FBZ0Q7QUFDckYsVUFBTS9CLFdBQVdFLEVBQUU2QixNQUFNQyxhQUFhO0FBS3RDaEMsYUFBU2lDLEtBQUEsSUFBQTdCLE9BQVNoQixPQUFPLENBQUUsRUFBRThDLFlBQUEsR0FBQTlCLE9BQWVoQixPQUFPLENBQUU7QUFDckRZLGFBQVNtQyxPQUFPO0VBQ2pCLENBQUM7QUFDRjs7QUNqQ0EsSUFBQUMscUJBQXNCOUMsUUFBQSxpQkFBQTtBQUV0QixJQUFNO0VBQUMrQztBQUFpQixJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRTFDLElBQUlILHNCQUFzQixHQUFHO0FBQzVCLFFBQUEsR0FBS0QsbUJBQUFLLFNBQVEsRUFBRUMsS0FBS2hDLE9BQU87QUFDNUI7IiwKICAibmFtZXMiOiBbImV4cGFuZCIsICJyZWZhcmVhIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkV4cGFuZCIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicHJvY2Vzc0VsZW1lbnQiLCAiJGVsZW1lbnQiLCAiJHJlZkZvbGRlciIsICIkIiwgImFkZENsYXNzIiwgImNvbmNhdCIsICJpbnNlcnRCZWZvcmUiLCAiYXBwZW5kVG8iLCAiJGV4cGFuZEJ1dHRvbiIsICJ0ZXh0IiwgImFmdGVyIiwgImZvbGRSZWYiLCAiJGJvZHkiLCAiJGZvbGRSZWYiLCAiZmluZCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJwYXJlbnQiLCAiaGFzQ2xhc3MiLCAiaGVpZ2h0IiwgIndpbmRvdyIsICJpbm5lckhlaWdodCIsICJlcnIiLCAiZSIsICJmIiwgIm9uIiwgImV2ZW50IiwgImN1cnJlbnRUYXJnZXQiLCAicHJldiIsICJyZW1vdmVDbGFzcyIsICJyZW1vdmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=
