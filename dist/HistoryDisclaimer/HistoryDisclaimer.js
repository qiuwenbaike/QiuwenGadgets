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
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
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
//! src/HistoryDisclaimer/HistoryDisclaimer.module.less
var disclaimer = "HistoryDisclaimer-module__disclaimer_W9SYoG__4100";
//! src/HistoryDisclaimer/modules/getBackground.tsx
var import_ext_gadget = __toESM(require("ext.gadget.JSX"), 1);
var Background = () => /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  className: disclaimer
});
var getBackground = () => /* @__PURE__ */ import_ext_gadget.default.createElement(Background, null);
//! src/HistoryDisclaimer/HistoryDisclaimer.ts
(function historyDisclaimer() {
  const {
    wgCurRevisionId,
    wgRevisionId
  } = mw.config.get();
  if (!wgCurRevisionId || !wgRevisionId || wgCurRevisionId <= wgRevisionId) {
    return;
  }
  if (document.querySelector(".".concat(disclaimer))) {
    return;
  }
  document.body.append(getBackground());
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hpc3RvcnlEaXNjbGFpbWVyL0hpc3RvcnlEaXNjbGFpbWVyLm1vZHVsZS5sZXNzIiwgInNyYy9IaXN0b3J5RGlzY2xhaW1lci9tb2R1bGVzL2dldEJhY2tncm91bmQudHN4IiwgInNyYy9IaXN0b3J5RGlzY2xhaW1lci9IaXN0b3J5RGlzY2xhaW1lci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9IaXN0b3J5RGlzY2xhaW1lci9IaXN0b3J5RGlzY2xhaW1lci5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGRpc2NsYWltZXIgPSBcIkhpc3RvcnlEaXNjbGFpbWVyLW1vZHVsZV9fZGlzY2xhaW1lcl9XOVNZb0dfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImRpc2NsYWltZXJcIjogZGlzY2xhaW1lclxufTtcbiAgICAgICIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtkaXNjbGFpbWVyfSBmcm9tICcuLi9IaXN0b3J5RGlzY2xhaW1lci5tb2R1bGUubGVzcyc7XG5cbmNvbnN0IEJhY2tncm91bmQgPSAoKSA9PiA8ZGl2IGNsYXNzTmFtZT17ZGlzY2xhaW1lcn0gLz47XG5cbmNvbnN0IGdldEJhY2tncm91bmQgPSAoKSA9PiA8QmFja2dyb3VuZCAvPjtcblxuZXhwb3J0IHtCYWNrZ3JvdW5kLCBnZXRCYWNrZ3JvdW5kfTtcbiIsICJpbXBvcnQge2Rpc2NsYWltZXJ9IGZyb20gJy4vSGlzdG9yeURpc2NsYWltZXIubW9kdWxlLmxlc3MnO1xuaW1wb3J0IHtnZXRCYWNrZ3JvdW5kfSBmcm9tICcuL21vZHVsZXMvZ2V0QmFja2dyb3VuZCc7XG5cbihmdW5jdGlvbiBoaXN0b3J5RGlzY2xhaW1lcigpOiB2b2lkIHtcblx0Y29uc3Qge3dnQ3VyUmV2aXNpb25JZCwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIXdnQ3VyUmV2aXNpb25JZCB8fCAhd2dSZXZpc2lvbklkIHx8IHdnQ3VyUmV2aXNpb25JZCA8PSB3Z1JldmlzaW9uSWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7ZGlzY2xhaW1lcn1gKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKGdldEJhY2tncm91bmQoKSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsYUFBYTs7QUNEMUIsSUFBQUMsb0JBQWtCQyxRQUFBQyxRQUFBLGdCQUFBLEdBQUEsQ0FBQTtBQUdsQixJQUFNQyxhQUFhQSxNQUFNSCxrQ0FBQUksUUFBQUMsY0FBQyxPQUFBO0VBQUlDLFdBQVdQO0FBQUEsQ0FBWTtBQUVyRCxJQUFNUSxnQkFBZ0JBLE1BQU1QLGtDQUFBSSxRQUFBQyxjQUFDRixZQUFBLElBQVc7O0NDRnZDLFNBQVNLLG9CQUEwQjtBQUNuQyxRQUFNO0lBQUNDO0lBQWlCQztFQUFZLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFdEQsTUFBSSxDQUFDSixtQkFBbUIsQ0FBQ0MsZ0JBQWdCRCxtQkFBbUJDLGNBQWM7QUFDekU7RUFDRDtBQUVBLE1BQUlJLFNBQVNDLGNBQUEsSUFBQUMsT0FBa0JqQixVQUFVLENBQUUsR0FBRztBQUM3QztFQUNEO0FBRUFlLFdBQVNHLEtBQUtDLE9BQU9YLGNBQWMsQ0FBQztBQUNyQyxHQUFHOyIsCiAgIm5hbWVzIjogWyJkaXNjbGFpbWVyIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJCYWNrZ3JvdW5kIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiZ2V0QmFja2dyb3VuZCIsICJoaXN0b3J5RGlzY2xhaW1lciIsICJ3Z0N1clJldmlzaW9uSWQiLCAid2dSZXZpc2lvbklkIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJjb25jYXQiLCAiYm9keSIsICJhcHBlbmQiXQp9Cg==
