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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Ntb290aFRPQy9TbW9vdGhUT0MudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleSwgZ2V0Qm9keSwgc2Nyb2xsVG9wfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0aWYgKCFjaGVja0ExMXlDb25maXJtS2V5KGV2ZW50KSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRlbGVtZW50ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSBhcyBKUXVlcnk7XG5cdGNvbnN0IGhlcmY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2hyZWYnKTtcblx0aWYgKCFoZXJmKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYW5jaG9yT2Zmc2V0OiBKUXVlcnkuQ29vcmRpbmF0ZXMgfCB1bmRlZmluZWQgPSAkKGhlcmYpLm9mZnNldCgpO1xuXHRpZiAoIWFuY2hvck9mZnNldCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRzY3JvbGxUb3Aoc2tpbiA9PT0gJ3ZlY3RvcicgPyBgJHthbmNob3JPZmZzZXQudG9wfXB4YCA6IGAke2FuY2hvck9mZnNldC50b3AgLSA2MH1weGApO1xufTtcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBzbW9vdGhUb2MoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdHNldFRpbWVvdXQoKCk6IHZvaWQgPT4ge1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcjdG9jIGEsICNwLXRvYyBhLCAuc2lkZWJhci10b2MtbGluaycpKSB7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblxuXHRcdFx0JGVsZW1lbnQub24oJ2NsaWNrJywgZXZlbnRMaXN0ZW5lcik7XG5cdFx0XHQkZWxlbWVudC5vbigna2V5ZG93bicsIGV2ZW50TGlzdGVuZXIpO1xuXHRcdH1cblx0fSwgMCk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBc0RDLFFBQUEsaUJBQUE7QUFFdEQsSUFBTUMsZ0JBQWlCQyxXQUF5RDtBQUMvRSxNQUFJLEVBQUEsR0FBQ0gsa0JBQUFJLHFCQUFvQkQsS0FBSyxHQUFHO0FBQ2hDO0VBQ0Q7QUFFQSxRQUFNRSxXQUFXQyxFQUFFSCxNQUFNSSxhQUFhO0FBQ3RDLFFBQU1DLE9BQTJCSCxTQUFTSSxLQUFLLE1BQU07QUFDckQsTUFBSSxDQUFDRCxNQUFNO0FBQ1Y7RUFDRDtBQUVBLFFBQU1FLGVBQStDSixFQUFFRSxJQUFJLEVBQUVHLE9BQU87QUFDcEUsTUFBSSxDQUFDRCxjQUFjO0FBQ2xCO0VBQ0Q7QUFFQVAsUUFBTVMsZUFBZTtBQUVyQixRQUFNO0lBQUNDO0VBQUksSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUM3QixHQUFBLEdBQUFoQixrQkFBQWlCLFdBQVVKLFNBQVMsV0FBQSxHQUFBSyxPQUFjUixhQUFhUyxLQUFHLElBQUEsSUFBQSxHQUFBRCxPQUFVUixhQUFhUyxNQUFNLElBQUUsSUFBQSxDQUFJO0FBQ3JGO0FBRUEsTUFBQSxHQUFLbkIsa0JBQUFvQixTQUFRLEVBQUVDLEtBQUssU0FBU0MsVUFBVUMsT0FBc0M7QUFDNUVDLGFBQVcsTUFBWTtBQUFBLFFBQUFDLFlBQUFDLDJCQUNBSCxNQUFNSSxLQUFLLHFDQUFxQyxDQUFBLEdBQUFDO0FBQUEsUUFBQTtBQUF0RSxXQUFBSCxVQUFBSSxFQUFBLEdBQUEsRUFBQUQsUUFBQUgsVUFBQUssRUFBQSxHQUFBQyxRQUF5RTtBQUFBLGNBQTlEQyxVQUFBSixNQUFBSztBQUNWLGNBQU01QixXQUFtQkMsRUFBRTBCLE9BQU87QUFFbEMzQixpQkFBUzZCLEdBQUcsU0FBU2hDLGFBQWE7QUFDbENHLGlCQUFTNkIsR0FBRyxXQUFXaEMsYUFBYTtNQUNyQztJQUFBLFNBQUFpQyxLQUFBO0FBQUFWLGdCQUFBVyxFQUFBRCxHQUFBO0lBQUEsVUFBQTtBQUFBVixnQkFBQVksRUFBQTtJQUFBO0VBQ0QsR0FBRyxDQUFDO0FBQ0wsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJldmVudExpc3RlbmVyIiwgImV2ZW50IiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAiJGVsZW1lbnQiLCAiJCIsICJjdXJyZW50VGFyZ2V0IiwgImhlcmYiLCAiYXR0ciIsICJhbmNob3JPZmZzZXQiLCAib2Zmc2V0IiwgInByZXZlbnREZWZhdWx0IiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJzY3JvbGxUb3AiLCAiY29uY2F0IiwgInRvcCIsICJnZXRCb2R5IiwgInRoZW4iLCAic21vb3RoVG9jIiwgIiRib2R5IiwgInNldFRpbWVvdXQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImZpbmQiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJvbiIsICJlcnIiLCAiZSIsICJmIl0KfQo=
