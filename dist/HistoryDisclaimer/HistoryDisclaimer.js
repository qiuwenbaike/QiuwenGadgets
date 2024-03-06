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
  className: CLASS_NAME
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hpc3RvcnlEaXNjbGFpbWVyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0hpc3RvcnlEaXNjbGFpbWVyL21vZHVsZXMvYmFja2dyb3VuZC50c3giLCAic3JjL0hpc3RvcnlEaXNjbGFpbWVyL0hpc3RvcnlEaXNjbGFpbWVyLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1oaXN0b3J5X2Rpc2NsYWltZXInO1xuXG5leHBvcnQge0NMQVNTX05BTUV9O1xuIiwgImltcG9ydCB7Q0xBU1NfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbmNvbnN0IEJhY2tncm91bmQgPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT17Q0xBU1NfTkFNRX0gLz47XG5cbmV4cG9ydCB7QmFja2dyb3VuZH07XG4iLCAiaW1wb3J0ICcuL0hpc3RvcnlEaXNjbGFpbWVyLmxlc3MnO1xuaW1wb3J0IHtCYWNrZ3JvdW5kfSBmcm9tICcuL21vZHVsZXMvYmFja2dyb3VuZCc7XG5pbXBvcnQge0NMQVNTX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5cbihmdW5jdGlvbiBoaXN0b3J5RGlzY2xhaW1lcigpOiB2b2lkIHtcblx0Y29uc3Qge3dnQ3VyUmV2aXNpb25JZCwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIXdnQ3VyUmV2aXNpb25JZCB8fCAhd2dSZXZpc2lvbklkIHx8IHdnQ3VyUmV2aXNpb25JZCA8PSB3Z1JldmlzaW9uSWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Q0xBU1NfTkFNRX1gKS5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChCYWNrZ3JvdW5kKCkpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBcUI7O0FDQzNCLElBQUFDLG9CQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7QUFFbEIsSUFBTUMsYUFBYUEsTUFBTUgsa0NBQUFJLFFBQUFDLGNBQUMsT0FBQTtFQUFJQyxXQUFXUDtBQUFBLENBQVk7O0NDQ3BELFNBQVNRLG9CQUEwQjtBQUNuQyxRQUFNO0lBQUNDO0lBQWlCQztFQUFZLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFdEQsTUFBSSxDQUFDSixtQkFBbUIsQ0FBQ0MsZ0JBQWdCRCxtQkFBbUJDLGNBQWM7QUFDekU7RUFDRDtBQUVBLE1BQUlJLFNBQVNDLGlCQUFBLElBQUFDLE9BQXFCaEIsVUFBVSxDQUFFLEVBQUVpQixRQUFRO0FBQ3ZEO0VBQ0Q7QUFFQUgsV0FBU0ksS0FBS0MsT0FBT2YsV0FBVyxDQUFDO0FBQ2xDLEdBQUc7IiwKICAibmFtZXMiOiBbIkNMQVNTX05BTUUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgIkJhY2tncm91bmQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJoaXN0b3J5RGlzY2xhaW1lciIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dSZXZpc2lvbklkIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJjb25jYXQiLCAibGVuZ3RoIiwgImJvZHkiLCAiYXBwZW5kIl0KfQo=
