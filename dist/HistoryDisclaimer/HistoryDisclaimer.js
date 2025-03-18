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
var disclaimer = "HistoryDisclaimer-module__disclaimer_W9SYoG__492";
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hpc3RvcnlEaXNjbGFpbWVyL0hpc3RvcnlEaXNjbGFpbWVyLm1vZHVsZS5sZXNzIiwgInNyYy9IaXN0b3J5RGlzY2xhaW1lci9tb2R1bGVzL2dldEJhY2tncm91bmQudHN4IiwgInNyYy9IaXN0b3J5RGlzY2xhaW1lci9IaXN0b3J5RGlzY2xhaW1lci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9IaXN0b3J5RGlzY2xhaW1lci9IaXN0b3J5RGlzY2xhaW1lci5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGRpc2NsYWltZXIgPSBcIkhpc3RvcnlEaXNjbGFpbWVyLW1vZHVsZV9fZGlzY2xhaW1lcl9XOVNZb0dfXzQ5MlwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiZGlzY2xhaW1lclwiOiBkaXNjbGFpbWVyXG59O1xuICAgICAgIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2Rpc2NsYWltZXJ9IGZyb20gJy4uL0hpc3RvcnlEaXNjbGFpbWVyLm1vZHVsZS5sZXNzJztcblxuY29uc3QgQmFja2dyb3VuZCA9ICgpID0+IDxkaXYgY2xhc3NOYW1lPXtkaXNjbGFpbWVyfSAvPjtcblxuY29uc3QgZ2V0QmFja2dyb3VuZCA9ICgpID0+IDxCYWNrZ3JvdW5kIC8+O1xuXG5leHBvcnQge0JhY2tncm91bmQsIGdldEJhY2tncm91bmR9O1xuIiwgImltcG9ydCB7ZGlzY2xhaW1lcn0gZnJvbSAnLi9IaXN0b3J5RGlzY2xhaW1lci5tb2R1bGUubGVzcyc7XG5pbXBvcnQge2dldEJhY2tncm91bmR9IGZyb20gJy4vbW9kdWxlcy9nZXRCYWNrZ3JvdW5kJztcblxuKGZ1bmN0aW9uIGhpc3RvcnlEaXNjbGFpbWVyKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDdXJSZXZpc2lvbklkLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghd2dDdXJSZXZpc2lvbklkIHx8ICF3Z1JldmlzaW9uSWQgfHwgd2dDdXJSZXZpc2lvbklkIDw9IHdnUmV2aXNpb25JZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtkaXNjbGFpbWVyfWApKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoZ2V0QmFja2dyb3VuZCgpKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxhQUFhOztBQ0QxQixJQUFBQyxvQkFBa0JDLFFBQUFDLFFBQUEsZ0JBQUEsR0FBQSxDQUFBO0FBR2xCLElBQU1DLGFBQWFBLE1BQU1ILGtDQUFBSSxRQUFBQyxjQUFDLE9BQUE7RUFBSUMsV0FBV1A7QUFBQSxDQUFZO0FBRXJELElBQU1RLGdCQUFnQkEsTUFBTVAsa0NBQUFJLFFBQUFDLGNBQUNGLFlBQUEsSUFBVzs7Q0NGdkMsU0FBU0ssb0JBQTBCO0FBQ25DLFFBQU07SUFBQ0M7SUFBaUJDO0VBQVksSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUV0RCxNQUFJLENBQUNKLG1CQUFtQixDQUFDQyxnQkFBZ0JELG1CQUFtQkMsY0FBYztBQUN6RTtFQUNEO0FBRUEsTUFBSUksU0FBU0MsY0FBQSxJQUFBQyxPQUFrQmpCLFVBQVUsQ0FBRSxHQUFHO0FBQzdDO0VBQ0Q7QUFFQWUsV0FBU0csS0FBS0MsT0FBT1gsY0FBYyxDQUFDO0FBQ3JDLEdBQUc7IiwKICAibmFtZXMiOiBbImRpc2NsYWltZXIiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgIkJhY2tncm91bmQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJnZXRCYWNrZ3JvdW5kIiwgImhpc3RvcnlEaXNjbGFpbWVyIiwgIndnQ3VyUmV2aXNpb25JZCIsICJ3Z1JldmlzaW9uSWQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImNvbmNhdCIsICJib2R5IiwgImFwcGVuZCJdCn0K
