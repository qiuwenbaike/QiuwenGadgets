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
//! src/HistoryDisclaimer/options.json
var className = "gadget-history_disclaimer";
//! src/HistoryDisclaimer/modules/background.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
var Background = () => /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  className
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
  if (document.querySelectorAll(".".concat(className)).length) {
    return;
  }
  document.body.append(Background());
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hpc3RvcnlEaXNjbGFpbWVyL29wdGlvbnMuanNvbiIsICJzcmMvSGlzdG9yeURpc2NsYWltZXIvbW9kdWxlcy9iYWNrZ3JvdW5kLnRzeCIsICJzcmMvSGlzdG9yeURpc2NsYWltZXIvSGlzdG9yeURpc2NsYWltZXIudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiY2xhc3NOYW1lXCI6IFwiZ2FkZ2V0LWhpc3RvcnlfZGlzY2xhaW1lclwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG5jb25zdCBCYWNrZ3JvdW5kID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9e09QVElPTlMuY2xhc3NOYW1lfSAvPjtcblxuZXhwb3J0IHtCYWNrZ3JvdW5kfTtcbiIsICJpbXBvcnQgJy4vSGlzdG9yeURpc2NsYWltZXIubGVzcyc7XG5pbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7QmFja2dyb3VuZH0gZnJvbSAnLi9tb2R1bGVzL2JhY2tncm91bmQnO1xuXG4oZnVuY3Rpb24gaGlzdG9yeURpc2NsYWltZXIoKTogdm9pZCB7XG5cdGNvbnN0IHt3Z0N1clJldmlzaW9uSWQsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF3Z0N1clJldmlzaW9uSWQgfHwgIXdnUmV2aXNpb25JZCB8fCB3Z0N1clJldmlzaW9uSWQgPD0gd2dSZXZpc2lvbklkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke09QVElPTlMuY2xhc3NOYW1lfWApLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKEJhY2tncm91bmQoKSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhOztBQ0FkLElBQUFDLG9CQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7QUFFbEIsSUFBTUMsYUFBYUEsTUFBTUgsa0NBQUFJLFFBQUFDLGNBQUMsT0FBQTtFQUFJTjtBQUFBLENBQThCOztDQ0MzRCxTQUFTTyxvQkFBMEI7QUFDbkMsUUFBTTtJQUFDQztJQUFpQkM7RUFBWSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRXRELE1BQUksQ0FBQ0osbUJBQW1CLENBQUNDLGdCQUFnQkQsbUJBQW1CQyxjQUFjO0FBQ3pFO0VBQ0Q7QUFFQSxNQUFJSSxTQUFTQyxpQkFBQSxJQUFBQyxPQUE2QmYsU0FBUyxDQUFFLEVBQUVnQixRQUFRO0FBQzlEO0VBQ0Q7QUFFQUgsV0FBU0ksS0FBS0MsT0FBT2QsV0FBVyxDQUFDO0FBQ2xDLEdBQUc7IiwKICAibmFtZXMiOiBbImNsYXNzTmFtZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiQmFja2dyb3VuZCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaGlzdG9yeURpc2NsYWltZXIiLCAid2dDdXJSZXZpc2lvbklkIiwgIndnUmV2aXNpb25JZCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiY29uY2F0IiwgImxlbmd0aCIsICJib2R5IiwgImFwcGVuZCJdCn0K
