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
//! src/HistoryDisclaimer/modules/background.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
//! src/HistoryDisclaimer/HistoryDisclaimer.module.less
var disclaimer = "HistoryDisclaimer-module__disclaimer_W9SYoG";
//! src/HistoryDisclaimer/modules/background.tsx
var Background = () => /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  className: disclaimer
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
  if (document.querySelectorAll(".".concat(disclaimer)).length) {
    return;
  }
  document.body.append(Background());
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hpc3RvcnlEaXNjbGFpbWVyL21vZHVsZXMvYmFja2dyb3VuZC50c3giLCAic3JjL0hpc3RvcnlEaXNjbGFpbWVyL0hpc3RvcnlEaXNjbGFpbWVyLm1vZHVsZS5sZXNzIiwgInNyYy9IaXN0b3J5RGlzY2xhaW1lci9IaXN0b3J5RGlzY2xhaW1lci50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7ZGlzY2xhaW1lcn0gZnJvbSAnLi4vSGlzdG9yeURpc2NsYWltZXIubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBCYWNrZ3JvdW5kID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9e2Rpc2NsYWltZXJ9IC8+O1xuXG5leHBvcnQge0JhY2tncm91bmR9O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvSGlzdG9yeURpc2NsYWltZXIvSGlzdG9yeURpc2NsYWltZXIubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBkaXNjbGFpbWVyID0gXCJIaXN0b3J5RGlzY2xhaW1lci1tb2R1bGVfX2Rpc2NsYWltZXJfVzlTWW9HXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJkaXNjbGFpbWVyXCI6IGRpc2NsYWltZXJcbn07XG4gICAgICAiLCAiaW1wb3J0IHtCYWNrZ3JvdW5kfSBmcm9tICcuL21vZHVsZXMvYmFja2dyb3VuZCc7XG5pbXBvcnQge2Rpc2NsYWltZXJ9IGZyb20gJy4vSGlzdG9yeURpc2NsYWltZXIubW9kdWxlLmxlc3MnO1xuXG4oZnVuY3Rpb24gaGlzdG9yeURpc2NsYWltZXIoKTogdm9pZCB7XG5cdGNvbnN0IHt3Z0N1clJldmlzaW9uSWQsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF3Z0N1clJldmlzaW9uSWQgfHwgIXdnUmV2aXNpb25JZCB8fCB3Z0N1clJldmlzaW9uSWQgPD0gd2dSZXZpc2lvbklkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2Rpc2NsYWltZXJ9YCkubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoQmFja2dyb3VuZCgpKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQ1gsSUFBTUMsYUFBYTs7QURFMUIsSUFBTUMsYUFBYUEsTUFBTUosa0NBQUFLLFFBQUFDLGNBQUMsT0FBQTtFQUFJQyxXQUFXSjtBQUFBLENBQVk7O0NFQXBELFNBQVNLLG9CQUEwQjtBQUNuQyxRQUFNO0lBQUNDO0lBQWlCQztFQUFZLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFdEQsTUFBSSxDQUFDSixtQkFBbUIsQ0FBQ0MsZ0JBQWdCRCxtQkFBbUJDLGNBQWM7QUFDekU7RUFDRDtBQUVBLE1BQUlJLFNBQVNDLGlCQUFBLElBQUFDLE9BQXFCYixVQUFVLENBQUUsRUFBRWMsUUFBUTtBQUN2RDtFQUNEO0FBRUFILFdBQVNJLEtBQUtDLE9BQU9mLFdBQVcsQ0FBQztBQUNsQyxHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiZGlzY2xhaW1lciIsICJCYWNrZ3JvdW5kIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiaGlzdG9yeURpc2NsYWltZXIiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiY29uY2F0IiwgImxlbmd0aCIsICJib2R5IiwgImFwcGVuZCJdCn0K
