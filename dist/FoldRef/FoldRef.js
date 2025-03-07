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
var expand = "FoldRef-module__expand_FNkcvW__491";
var refarea = "FoldRef-module__refarea_FNkcvW__491";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL0ZvbGRSZWYvbW9kdWxlcy9Gb2xkUmVmLm1vZHVsZS5sZXNzIiwgIi4uLy4uL3NyYy9Gb2xkUmVmL21vZHVsZXMvaTE4bi50cyIsICIuLi8uLi9zcmMvRm9sZFJlZi9tb2R1bGVzL3V0aWwvcHJvY2Vzc0VsZW1lbnQudHMiLCAiLi4vLi4vc3JjL0ZvbGRSZWYvbW9kdWxlcy9jb3JlLnRzIiwgIi4uLy4uL3NyYy9Gb2xkUmVmL0ZvbGRSZWYudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRm9sZFJlZi9tb2R1bGVzL0ZvbGRSZWYubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBleHBhbmQgPSBcIkZvbGRSZWYtbW9kdWxlX19leHBhbmRfRk5rY3ZXX180OTFcIjtcbmV4cG9ydCBjb25zdCByZWZhcmVhID0gXCJGb2xkUmVmLW1vZHVsZV9fcmVmYXJlYV9GTmtjdldfXzQ5MVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZXhwYW5kXCI6IGV4cGFuZCxcbiAgXCJyZWZhcmVhXCI6IHJlZmFyZWFcbn07XG4gICAgICAiLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEV4cGFuZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeHBhbmQnLFxuXHRcdFx0amE6ICflsZXplosnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bGV5byAJyxcblx0XHRcdCd6aC1oYW50JzogJ+WxlemWiycsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7ZXhwYW5kLCByZWZhcmVhfSBmcm9tICcuLi9Gb2xkUmVmLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbi8vIGNyZWF0ZSBhIGRpdiwgcGxhY2Uge3tSZWZsaXN0fX1zIGluc2lkZVxuY29uc3QgcHJvY2Vzc0VsZW1lbnQgPSAoJGVsZW1lbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRjb25zdCAkcmVmRm9sZGVyOiBKUXVlcnkgPSAkKCc8ZGl2PicpLmFkZENsYXNzKHJlZmFyZWEgYXMgc3RyaW5nKTtcblxuXHQkcmVmRm9sZGVyLmluc2VydEJlZm9yZSgkZWxlbWVudCk7XG5cdCRlbGVtZW50LmFwcGVuZFRvKCRyZWZGb2xkZXIpO1xuXG5cdC8vIGFkZCBhbiBleHBhbmQgYnV0dG9uIGF0IHRoZSBib3R0b21cblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0Y29uc3QgJGV4cGFuZEJ1dHRvbjogSlF1ZXJ5ID0gJCgnPGRpdj4nKVxuXHRcdC5hZGRDbGFzcyhleHBhbmQgYXMgc3RyaW5nKVxuXHRcdC50ZXh0KGdldE1lc3NhZ2UoJ0V4cGFuZCcpKTtcblx0JHJlZkZvbGRlci5hZnRlcigkZXhwYW5kQnV0dG9uKTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0VsZW1lbnR9O1xuIiwgImltcG9ydCB7ZXhwYW5kLCByZWZhcmVhfSBmcm9tICcuL0ZvbGRSZWYubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtwcm9jZXNzRWxlbWVudH0gZnJvbSAnLi91dGlsL3Byb2Nlc3NFbGVtZW50JztcblxuY29uc3QgZm9sZFJlZiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Ly8gZm9yIGFydGljbGVzIHVzaW5nIDxyZWZlcmVuY2VzIC8+LCB7e1JlZmxpc3R9fXMgb3Igc2ltaWxhciB0ZW1wbGF0ZXNcblx0Y29uc3QgJGZvbGRSZWY6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5tdy1yZWZlcmVuY2VzLXdyYXAsLnJlZmJlZ2luJyk7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkZm9sZFJlZikge1xuXHRcdGNvbnN0ICRlbGVtZW50ID0gJChlbGVtZW50KTtcblx0XHRpZiAoXG5cdFx0XHQkZWxlbWVudFxuXHRcdFx0XHQucGFyZW50KCdkaXYnKVxuXHRcdFx0XHQucGFyZW50KCdkaXYnKVxuXHRcdFx0XHQuaGFzQ2xhc3MocmVmYXJlYSBhcyBzdHJpbmcpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ2RpdicpLmhhc0NsYXNzKHJlZmFyZWEgYXMgc3RyaW5nKVxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3QgaGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5oZWlnaHQoKTtcblx0XHRpZiAoIWhlaWdodCB8fCBoZWlnaHQgPD0gd2luZG93LmlubmVySGVpZ2h0ICogMC45KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBpZiBncmVhdGVyIHRoYW4gOTAlIG9mIHRoZSB2aWV3cG9ydCBoZWlnaHQsIGZvbGQgdGhlIHJlZmVyZW5jZXMgbGlzdFxuXHRcdHByb2Nlc3NFbGVtZW50KCRlbGVtZW50KTtcblx0fVxuXG5cdC8vIGF0dGFjaCBldmVudCBsaXN0ZW5lciB0byB0aGUgZXhwYW5kIGJ1dHRvbnNcblx0JGJvZHkuZmluZChgLiR7ZXhwYW5kfWApLm9uKCdjbGljaycsIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQ8SFRNTEVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpIGFzIEpRdWVyeTtcblxuXHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdCRlbGVtZW50LnByZXYoYC4ke3JlZmFyZWF9YCkucmVtb3ZlQ2xhc3MocmVmYXJlYSBhcyBzdHJpbmcpO1xuXHRcdCRlbGVtZW50LnJlbW92ZSgpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7Zm9sZFJlZn07XG4iLCAiaW1wb3J0IHtmb2xkUmVmfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IHt3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmlmICh3Z05hbWVzcGFjZU51bWJlciA9PT0gMCkge1xuXHR2b2lkIGdldEJvZHkoKS50aGVuKGZvbGRSZWYpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxTQUFTO0FBQ2YsSUFBTUMsVUFBVTs7QUNGdkIsSUFBQUMsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUgsa0JBQUFJLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUNiQSxJQUFNQyxpQkFBa0JDLGNBQTJCO0FBSWxELFFBQU1DLGFBQXFCQyxFQUFFLE9BQU8sRUFBRUMsU0FBU2YsT0FBaUI7QUFFaEVhLGFBQVdHLGFBQWFKLFFBQVE7QUFDaENBLFdBQVNLLFNBQVNKLFVBQVU7QUFNNUIsUUFBTUssZ0JBQXdCSixFQUFFLE9BQU8sRUFDckNDLFNBQVNoQixNQUFnQixFQUN6Qm9CLEtBQUtWLFdBQVcsUUFBUSxDQUFDO0FBQzNCSSxhQUFXTyxNQUFNRixhQUFhO0FBQy9COztBQ2xCQSxJQUFNRyxVQUFXQyxXQUF5QztBQUV6RCxRQUFNQyxXQUFtQkQsTUFBTUUsS0FBSywrQkFBK0I7QUFBQSxNQUFBQyxZQUFBQywyQkFDN0NILFFBQUEsR0FBQUk7QUFBQSxNQUFBO0FBQXRCLFNBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQWdDO0FBQUEsWUFBckJDLFVBQUFKLE1BQUFLO0FBQ1YsWUFBTXBCLFdBQVdFLEVBQUVpQixPQUFPO0FBQzFCLFVBQ0NuQixTQUNFcUIsT0FBTyxLQUFLLEVBQ1pBLE9BQU8sS0FBSyxFQUNaQyxTQUFTbEMsT0FBaUIsS0FDNUJZLFNBQVNxQixPQUFPLEtBQUssRUFBRUMsU0FBU2xDLE9BQWlCLEdBQ2hEO0FBQ0Q7TUFDRDtBQUVBLFlBQU1tQyxTQUE2QnZCLFNBQVN1QixPQUFPO0FBQ25ELFVBQUksQ0FBQ0EsVUFBVUEsVUFBVUMsT0FBT0MsY0FBYyxLQUFLO0FBQ2xEO01BQ0Q7QUFHQTFCLHFCQUFlQyxRQUFRO0lBQ3hCO0VBQUEsU0FBQTBCLEtBQUE7QUFBQWIsY0FBQWMsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQWIsY0FBQWUsRUFBQTtFQUFBO0FBR0FsQixRQUFNRSxLQUFBLElBQUFpQixPQUFTMUMsTUFBTSxDQUFFLEVBQUUyQyxHQUFHLFNBQVVDLFdBQWdEO0FBQ3JGLFVBQU0vQixXQUFXRSxFQUFFNkIsTUFBTUMsYUFBYTtBQUt0Q2hDLGFBQVNpQyxLQUFBLElBQUFKLE9BQVN6QyxPQUFPLENBQUUsRUFBRThDLFlBQVk5QyxPQUFpQjtBQUMxRFksYUFBU21DLE9BQU87RUFDakIsQ0FBQztBQUNGOztBQ3BDQSxJQUFBQyxxQkFBc0I5QyxRQUFBLGlCQUFBO0FBRXRCLElBQU07RUFBQytDO0FBQWlCLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFMUMsSUFBSUgsc0JBQXNCLEdBQUc7QUFDNUIsUUFBQSxHQUFLRCxtQkFBQUssU0FBUSxFQUFFQyxLQUFLakMsT0FBTztBQUM1QjsiLAogICJuYW1lcyI6IFsiZXhwYW5kIiwgInJlZmFyZWEiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiRXhwYW5kIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJwcm9jZXNzRWxlbWVudCIsICIkZWxlbWVudCIsICIkcmVmRm9sZGVyIiwgIiQiLCAiYWRkQ2xhc3MiLCAiaW5zZXJ0QmVmb3JlIiwgImFwcGVuZFRvIiwgIiRleHBhbmRCdXR0b24iLCAidGV4dCIsICJhZnRlciIsICJmb2xkUmVmIiwgIiRib2R5IiwgIiRmb2xkUmVmIiwgImZpbmQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAicGFyZW50IiwgImhhc0NsYXNzIiwgImhlaWdodCIsICJ3aW5kb3ciLCAiaW5uZXJIZWlnaHQiLCAiZXJyIiwgImUiLCAiZiIsICJjb25jYXQiLCAib24iLCAiZXZlbnQiLCAiY3VycmVudFRhcmdldCIsICJwcmV2IiwgInJlbW92ZUNsYXNzIiwgInJlbW92ZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
