/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/SmoothTOC}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
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

// dist/SmoothTOC/SmoothTOC.js
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
//! src/SmoothTOC/SmoothTOC.ts
var import_ext_gadget = require("ext.gadget.Util");
var eventListener = (event) => {
  if (!(0, import_ext_gadget.checkA11yConfirmKey)(event)) {
    return;
  }
  const $element = $(event.currentTarget);
  const herf = $element.attr("href");
  if (!herf) {
    return;
  }
  const anchorOffset = $(herf).offset();
  if (!anchorOffset) {
    return;
  }
  event.preventDefault();
  const {
    skin
  } = mw.config.get();
  (0, import_ext_gadget.scrollTop)(skin === "vector" ? "".concat(anchorOffset.top, "px") : "".concat(anchorOffset.top - 60, "px"));
};
void (0, import_ext_gadget.getBody)().then(function smoothToc($body) {
  setTimeout(() => {
    var _iterator = _createForOfIteratorHelper($body.find("#toc a, #p-toc a, .sidebar-toc-link")), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const element = _step.value;
        const $element = $(element);
        $element.on("click", eventListener);
        $element.on("keydown", eventListener);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }, 0);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Ntb290aFRPQy9TbW9vdGhUT0MudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleSwgZ2V0Qm9keSwgc2Nyb2xsVG9wfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0aWYgKCFjaGVja0ExMXlDb25maXJtS2V5KGV2ZW50KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSBhcyBKUXVlcnk7XG5cdGNvbnN0IGhlcmY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2hyZWYnKTtcblx0aWYgKCFoZXJmKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYW5jaG9yT2Zmc2V0OiBKUXVlcnkuQ29vcmRpbmF0ZXMgfCB1bmRlZmluZWQgPSAkKGhlcmYpLm9mZnNldCgpO1xuXHRpZiAoIWFuY2hvck9mZnNldCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRzY3JvbGxUb3Aoc2tpbiA9PT0gJ3ZlY3RvcicgPyBgJHthbmNob3JPZmZzZXQudG9wfXB4YCA6IGAke2FuY2hvck9mZnNldC50b3AgLSA2MH1weGApO1xufTtcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzbW9vdGhUb2MoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcjdG9jIGEsICNwLXRvYyBhLCAuc2lkZWJhci10b2MtbGluaycpKSB7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblxuXHRcdFx0JGVsZW1lbnQub24oJ2NsaWNrJywgZXZlbnRMaXN0ZW5lcik7XG5cdFx0XHQkZWxlbWVudC5vbigna2V5ZG93bicsIGV2ZW50TGlzdGVuZXIpO1xuXHRcdH1cblx0fSwgMCk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXNEQyxRQUFBLGlCQUFBO0FBRXRELElBQU1DLGdCQUFpQkMsV0FBeUQ7QUFDL0UsTUFBSSxFQUFBLEdBQUNILGtCQUFBSSxxQkFBb0JELEtBQUssR0FBRztBQUNoQztFQUNEO0FBRUEsUUFBTUUsV0FBV0MsRUFBRUgsTUFBTUksYUFBYTtBQUN0QyxRQUFNQyxPQUEyQkgsU0FBU0ksS0FBSyxNQUFNO0FBQ3JELE1BQUksQ0FBQ0QsTUFBTTtBQUNWO0VBQ0Q7QUFFQSxRQUFNRSxlQUErQ0osRUFBRUUsSUFBSSxFQUFFRyxPQUFPO0FBQ3BFLE1BQUksQ0FBQ0QsY0FBYztBQUNsQjtFQUNEO0FBRUFQLFFBQU1TLGVBQWU7QUFFckIsUUFBTTtJQUFDQztFQUFJLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDN0IsR0FBQSxHQUFBaEIsa0JBQUFpQixXQUFVSixTQUFTLFdBQUEsR0FBQUssT0FBY1IsYUFBYVMsS0FBRyxJQUFBLElBQUEsR0FBQUQsT0FBVVIsYUFBYVMsTUFBTSxJQUFFLElBQUEsQ0FBSTtBQUNyRjtBQUVBLE1BQUEsR0FBS25CLGtCQUFBb0IsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFVBQVVDLE9BQXNDO0FBQzVFQyxhQUFXLE1BQVk7QUFBQSxRQUFBQyxZQUFBQywyQkFDQUgsTUFBTUksS0FBSyxxQ0FBcUMsQ0FBQSxHQUFBQztBQUFBLFFBQUE7QUFBdEUsV0FBQUgsVUFBQUksRUFBQSxHQUFBLEVBQUFELFFBQUFILFVBQUFLLEVBQUEsR0FBQUMsUUFBeUU7QUFBQSxjQUE5REMsVUFBQUosTUFBQUs7QUFDVixjQUFNNUIsV0FBbUJDLEVBQUUwQixPQUFPO0FBRWxDM0IsaUJBQVM2QixHQUFHLFNBQVNoQyxhQUFhO0FBQ2xDRyxpQkFBUzZCLEdBQUcsV0FBV2hDLGFBQWE7TUFDckM7SUFBQSxTQUFBaUMsS0FBQTtBQUFBVixnQkFBQVcsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQVYsZ0JBQUFZLEVBQUE7SUFBQTtFQUNELEdBQUcsQ0FBQztBQUNMLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgIiRlbGVtZW50IiwgIiQiLCAiY3VycmVudFRhcmdldCIsICJoZXJmIiwgImF0dHIiLCAiYW5jaG9yT2Zmc2V0IiwgIm9mZnNldCIsICJwcmV2ZW50RGVmYXVsdCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAic2Nyb2xsVG9wIiwgImNvbmNhdCIsICJ0b3AiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgInNtb290aFRvYyIsICIkYm9keSIsICJzZXRUaW1lb3V0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJmaW5kIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAib24iLCAiZXJyIiwgImUiLCAiZiJdCn0K
