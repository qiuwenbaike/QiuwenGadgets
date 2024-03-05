/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HistoryDisclaimer}
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

// dist/HistoryDisclaimer/HistoryDisclaimer.js
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
          });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/HistoryDisclaimer/modules/constant.ts
var CLASS_NAME = "gadget-history_disclaimer";
//! src/HistoryDisclaimer/modules/background.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
var Background = () => /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  class: CLASS_NAME
});
//! src/HistoryDisclaimer/HistoryDisclaimer.tsx
(function historyDisclaimer() {
  const {
    wgCurRevisionId,
    wgRevisionId
  } = mw.config.get();
  if (!wgCurRevisionId || !wgRevisionId || wgCurRevisionId <= wgRevisionId) {
    return;
  }
  if (document.querySelectorAll(".".concat(CLASS_NAME)).length) {
    return;
  }
  document.body.append(Background());
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hpc3RvcnlEaXNjbGFpbWVyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0hpc3RvcnlEaXNjbGFpbWVyL21vZHVsZXMvYmFja2dyb3VuZC50c3giLCAic3JjL0hpc3RvcnlEaXNjbGFpbWVyL0hpc3RvcnlEaXNjbGFpbWVyLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1oaXN0b3J5X2Rpc2NsYWltZXInO1xuXG5leHBvcnQge0NMQVNTX05BTUV9O1xuIiwgImltcG9ydCB7Q0xBU1NfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbmNvbnN0IEJhY2tncm91bmQgPSAoKSA9PiA8ZGl2IGNsYXNzPXtDTEFTU19OQU1FfSAvPjtcblxuZXhwb3J0IHtCYWNrZ3JvdW5kfTtcbiIsICJpbXBvcnQgJy4vSGlzdG9yeURpc2NsYWltZXIubGVzcyc7XG5pbXBvcnQge0JhY2tncm91bmR9IGZyb20gJy4vbW9kdWxlcy9iYWNrZ3JvdW5kJztcbmltcG9ydCB7Q0xBU1NfTkFNRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcblxuKGZ1bmN0aW9uIGhpc3RvcnlEaXNjbGFpbWVyKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDdXJSZXZpc2lvbklkLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghd2dDdXJSZXZpc2lvbklkIHx8ICF3Z1JldmlzaW9uSWQgfHwgd2dDdXJSZXZpc2lvbklkIDw9IHdnUmV2aXNpb25JZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtDTEFTU19OQU1FfWApLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKEJhY2tncm91bmQoKSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxhQUFxQjs7QUNDM0IsSUFBQUMsb0JBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTtBQUVsQixJQUFNQyxhQUFhQSxNQUFNSCxrQ0FBQUksUUFBQUMsY0FBQyxPQUFBO0VBQUlDLE9BQU9QO0FBQUEsQ0FBWTs7Q0NDaEQsU0FBU1Esb0JBQTBCO0FBQ25DLFFBQU07SUFBQ0M7SUFBaUJDO0VBQVksSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUV0RCxNQUFJLENBQUNKLG1CQUFtQixDQUFDQyxnQkFBZ0JELG1CQUFtQkMsY0FBYztBQUN6RTtFQUNEO0FBRUEsTUFBSUksU0FBU0MsaUJBQUEsSUFBQUMsT0FBcUJoQixVQUFVLENBQUUsRUFBRWlCLFFBQVE7QUFDdkQ7RUFDRDtBQUVBSCxXQUFTSSxLQUFLQyxPQUFPZixXQUFXLENBQUM7QUFDbEMsR0FBRzsiLAogICJuYW1lcyI6IFsiQ0xBU1NfTkFNRSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiQmFja2dyb3VuZCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3MiLCAiaGlzdG9yeURpc2NsYWltZXIiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiY29uY2F0IiwgImxlbmd0aCIsICJib2R5IiwgImFwcGVuZCJdCn0K
