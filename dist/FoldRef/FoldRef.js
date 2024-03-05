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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0ZvbGRSZWYvbW9kdWxlcy9Gb2xkUmVmLm1vZHVsZS5sZXNzIiwgInNyYy9Gb2xkUmVmL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRm9sZFJlZi9tb2R1bGVzL3V0aWwvcHJvY2Vzc0VsZW1lbnQudHMiLCAic3JjL0ZvbGRSZWYvbW9kdWxlcy9jb3JlLnRzIiwgInNyYy9Gb2xkUmVmL0ZvbGRSZWYudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRm9sZFJlZi9tb2R1bGVzL0ZvbGRSZWYubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBleHBhbmQgPSBcIkZvbGRSZWYtbW9kdWxlX19leHBhbmRfRk5rY3ZXXCI7XG5leHBvcnQgY29uc3QgcmVmYXJlYSA9IFwiRm9sZFJlZi1tb2R1bGVfX3JlZmFyZWFfRk5rY3ZXXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJleHBhbmRcIjogZXhwYW5kLFxuICBcInJlZmFyZWFcIjogcmVmYXJlYVxufTtcbiAgICAgICIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RXhwYW5kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4cGFuZCcsXG5cdFx0XHRqYTogJ+WxlemWiycsXG5cdFx0XHQnemgtaGFucyc6ICflsZXlvIAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bGV6ZaLJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtleHBhbmQsIHJlZmFyZWF9IGZyb20gJy4uL0ZvbGRSZWYubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuLy8gY3JlYXRlIGEgZGl2LCBwbGFjZSB7e1JlZmxpc3R9fXMgaW5zaWRlXG5jb25zdCBwcm9jZXNzRWxlbWVudCA9ICgkZWxlbWVudDogSlF1ZXJ5KTogdm9pZCA9PiB7XG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0ICRyZWZGb2xkZXI6IEpRdWVyeSA9ICQoJzxkaXY+JykuYWRkQ2xhc3MocmVmYXJlYSBhcyBzdHJpbmcpO1xuXG5cdCRyZWZGb2xkZXIuaW5zZXJ0QmVmb3JlKCRlbGVtZW50KTtcblx0JGVsZW1lbnQuYXBwZW5kVG8oJHJlZkZvbGRlcik7XG5cblx0Ly8gYWRkIGFuIGV4cGFuZCBidXR0b24gYXQgdGhlIGJvdHRvbVxuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRjb25zdCAkZXhwYW5kQnV0dG9uOiBKUXVlcnkgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKGV4cGFuZCBhcyBzdHJpbmcpXG5cdFx0LnRleHQoZ2V0TWVzc2FnZSgnRXhwYW5kJykpO1xuXHQkcmVmRm9sZGVyLmFmdGVyKCRleHBhbmRCdXR0b24pO1xufTtcblxuZXhwb3J0IHtwcm9jZXNzRWxlbWVudH07XG4iLCAiaW1wb3J0IHtleHBhbmQsIHJlZmFyZWF9IGZyb20gJy4vRm9sZFJlZi5tb2R1bGUubGVzcyc7XG5pbXBvcnQge3Byb2Nlc3NFbGVtZW50fSBmcm9tICcuL3V0aWwvcHJvY2Vzc0VsZW1lbnQnO1xuXG5jb25zdCBmb2xkUmVmID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvLyBmb3IgYXJ0aWNsZXMgdXNpbmcgPHJlZmVyZW5jZXMgLz4sIHt7UmVmbGlzdH19cyBvciBzaW1pbGFyIHRlbXBsYXRlc1xuXHRjb25zdCAkZm9sZFJlZjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLm13LXJlZmVyZW5jZXMtd3JhcCwucmVmYmVnaW4nKTtcblx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRmb2xkUmVmKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChcblx0XHRcdCRlbGVtZW50XG5cdFx0XHRcdC5wYXJlbnQoJ2RpdicpXG5cdFx0XHRcdC5wYXJlbnQoJ2RpdicpXG5cdFx0XHRcdC5oYXNDbGFzcyhyZWZhcmVhIGFzIHN0cmluZykgfHxcblx0XHRcdCRlbGVtZW50LnBhcmVudCgnZGl2JykuaGFzQ2xhc3MocmVmYXJlYSBhcyBzdHJpbmcpXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBoZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmhlaWdodCgpO1xuXHRcdGlmICghaGVpZ2h0IHx8IGhlaWdodCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIGlmIGdyZWF0ZXIgdGhhbiA5MCUgb2YgdGhlIHZpZXdwb3J0IGhlaWdodCwgZm9sZCB0aGUgcmVmZXJlbmNlcyBsaXN0XG5cdFx0cHJvY2Vzc0VsZW1lbnQoJGVsZW1lbnQpO1xuXHR9XG5cblx0Ly8gYXR0YWNoIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBleHBhbmQgYnV0dG9uc1xuXHQkYm9keS5maW5kKGAuJHtleHBhbmR9YCkub24oJ2NsaWNrJywgKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudDxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0XHRjb25zdCAkZWxlbWVudCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkgYXMgSlF1ZXJ5O1xuXG5cdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0JGVsZW1lbnQucHJldihgLiR7cmVmYXJlYX1gKS5yZW1vdmVDbGFzcyhyZWZhcmVhIGFzIHN0cmluZyk7XG5cdFx0JGVsZW1lbnQucmVtb3ZlKCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtmb2xkUmVmfTtcbiIsICJpbXBvcnQge2ZvbGRSZWZ9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuaWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oZm9sZFJlZik7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxTQUFTO0FBQ2YsSUFBTUMsVUFBVTs7QUNGdkIsSUFBQUMsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUgsa0JBQUFJLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUNiQSxJQUFNQyxpQkFBa0JDLGNBQTJCO0FBSWxELFFBQU1DLGFBQXFCQyxFQUFFLE9BQU8sRUFBRUMsU0FBU2YsT0FBaUI7QUFFaEVhLGFBQVdHLGFBQWFKLFFBQVE7QUFDaENBLFdBQVNLLFNBQVNKLFVBQVU7QUFNNUIsUUFBTUssZ0JBQXdCSixFQUFFLE9BQU8sRUFDckNDLFNBQVNoQixNQUFnQixFQUN6Qm9CLEtBQUtWLFdBQVcsUUFBUSxDQUFDO0FBQzNCSSxhQUFXTyxNQUFNRixhQUFhO0FBQy9COztBQ2xCQSxJQUFNRyxVQUFXQyxXQUF5QztBQUV6RCxRQUFNQyxXQUFtQkQsTUFBTUUsS0FBSywrQkFBK0I7QUFBQSxNQUFBQyxZQUFBQywyQkFDN0NILFFBQUEsR0FBQUk7QUFBQSxNQUFBO0FBQXRCLFNBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQWdDO0FBQUEsWUFBckJDLFVBQUFKLE1BQUFLO0FBQ1YsWUFBTXBCLFdBQVdFLEVBQUVpQixPQUFPO0FBQzFCLFVBQ0NuQixTQUNFcUIsT0FBTyxLQUFLLEVBQ1pBLE9BQU8sS0FBSyxFQUNaQyxTQUFTbEMsT0FBaUIsS0FDNUJZLFNBQVNxQixPQUFPLEtBQUssRUFBRUMsU0FBU2xDLE9BQWlCLEdBQ2hEO0FBQ0Q7TUFDRDtBQUVBLFlBQU1tQyxTQUE2QnZCLFNBQVN1QixPQUFPO0FBQ25ELFVBQUksQ0FBQ0EsVUFBVUEsVUFBVUMsT0FBT0MsY0FBYyxLQUFLO0FBQ2xEO01BQ0Q7QUFHQTFCLHFCQUFlQyxRQUFRO0lBQ3hCO0VBQUEsU0FBQTBCLEtBQUE7QUFBQWIsY0FBQWMsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQWIsY0FBQWUsRUFBQTtFQUFBO0FBR0FsQixRQUFNRSxLQUFBLElBQUFpQixPQUFTMUMsTUFBTSxDQUFFLEVBQUUyQyxHQUFHLFNBQVVDLFdBQWdEO0FBQ3JGLFVBQU0vQixXQUFXRSxFQUFFNkIsTUFBTUMsYUFBYTtBQUt0Q2hDLGFBQVNpQyxLQUFBLElBQUFKLE9BQVN6QyxPQUFPLENBQUUsRUFBRThDLFlBQVk5QyxPQUFpQjtBQUMxRFksYUFBU21DLE9BQU87RUFDakIsQ0FBQztBQUNGOztBQ3BDQSxJQUFBQyxxQkFBc0I5QyxRQUFBLGlCQUFBO0FBRXRCLElBQU07RUFBQytDO0FBQWlCLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFMUMsSUFBSUgsc0JBQXNCLEdBQUc7QUFDNUIsUUFBQSxHQUFLRCxtQkFBQUssU0FBUSxFQUFFQyxLQUFLakMsT0FBTztBQUM1QjsiLAogICJuYW1lcyI6IFsiZXhwYW5kIiwgInJlZmFyZWEiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiRXhwYW5kIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJwcm9jZXNzRWxlbWVudCIsICIkZWxlbWVudCIsICIkcmVmRm9sZGVyIiwgIiQiLCAiYWRkQ2xhc3MiLCAiaW5zZXJ0QmVmb3JlIiwgImFwcGVuZFRvIiwgIiRleHBhbmRCdXR0b24iLCAidGV4dCIsICJhZnRlciIsICJmb2xkUmVmIiwgIiRib2R5IiwgIiRmb2xkUmVmIiwgImZpbmQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAicGFyZW50IiwgImhhc0NsYXNzIiwgImhlaWdodCIsICJ3aW5kb3ciLCAiaW5uZXJIZWlnaHQiLCAiZXJyIiwgImUiLCAiZiIsICJjb25jYXQiLCAib24iLCAiZXZlbnQiLCAiY3VycmVudFRhcmdldCIsICJwcmV2IiwgInJlbW92ZUNsYXNzIiwgInJlbW92ZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
