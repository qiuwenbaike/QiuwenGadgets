/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/LoginToEdit}
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

// dist/ClearCookies/ClearCookies.js
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
//! src/ClearCookies/modules/constant.ts
var WG_USER_NAME = mw.config.get("wgUserName");
//! src/ClearCookies/ClearCookies.ts
var import_ext_gadget = __toESM(require("ext.gadget.psl"), 1);
$(function loginToEdit() {
  var _import_ext_gadget$de;
  if (WG_USER_NAME || !!$.cookie("cookieCleared")) {
    return;
  }
  const hostName = document.location.host;
  const hostNameSuffix = (_import_ext_gadget$de = import_ext_gadget.default.get(hostName)) !== null && _import_ext_gadget$de !== void 0 ? _import_ext_gadget$de : "";
  for (var _i = 0, _Object$keys = Object.keys($.cookie()); _i < _Object$keys.length; _i++) {
    const cookie = _Object$keys[_i];
    $.removeCookie(cookie);
    $.removeCookie(cookie, {
      domain: hostNameSuffix
    });
    $.removeCookie(cookie, {
      domain: ".".concat(hostNameSuffix)
    });
    $.removeCookie(cookie, {
      path: "/"
    });
    $.removeCookie(cookie, {
      domain: hostNameSuffix,
      path: "/"
    });
    $.removeCookie(cookie, {
      domain: ".".concat(hostNameSuffix),
      path: "/"
    });
    $.cookie("cookieCleared", 1, {
      domain: hostName,
      path: "/",
      expires: 184
    });
  }
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NsZWFyQ29va2llcy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9DbGVhckNvb2tpZXMvQ2xlYXJDb29raWVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19VU0VSX05BTUU6IHN0cmluZyB8IG51bGwgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyk7XG5cbmV4cG9ydCB7V0dfVVNFUl9OQU1FfTtcbiIsICJpbXBvcnQge1dHX1VTRVJfTkFNRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCBwc2wgZnJvbSAnZXh0LmdhZGdldC5wc2wnO1xuXG4kKGZ1bmN0aW9uIGxvZ2luVG9FZGl0KCk6IHZvaWQge1xuXHRpZiAoV0dfVVNFUl9OQU1FIHx8ICEhJC5jb29raWUoJ2Nvb2tpZUNsZWFyZWQnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGhvc3ROYW1lOiBzdHJpbmcgPSBkb2N1bWVudC5sb2NhdGlvbi5ob3N0O1xuXG5cdGNvbnN0IGhvc3ROYW1lU3VmZml4OiBzdHJpbmcgPSBwc2wuZ2V0KGhvc3ROYW1lKSA/PyAnJztcblxuXHRmb3IgKGNvbnN0IGNvb2tpZSBvZiBPYmplY3Qua2V5cygkLmNvb2tpZSgpKSkge1xuXHRcdCQucmVtb3ZlQ29va2llKGNvb2tpZSk7XG5cdFx0JC5yZW1vdmVDb29raWUoY29va2llLCB7ZG9tYWluOiBob3N0TmFtZVN1ZmZpeH0pO1xuXHRcdCQucmVtb3ZlQ29va2llKGNvb2tpZSwge2RvbWFpbjogYC4ke2hvc3ROYW1lU3VmZml4fWB9KTtcblx0XHQkLnJlbW92ZUNvb2tpZShjb29raWUsIHtwYXRoOiAnLyd9KTtcblx0XHQkLnJlbW92ZUNvb2tpZShjb29raWUsIHtkb21haW46IGhvc3ROYW1lU3VmZml4LCBwYXRoOiAnLyd9KTtcblx0XHQkLnJlbW92ZUNvb2tpZShjb29raWUsIHtkb21haW46IGAuJHtob3N0TmFtZVN1ZmZpeH1gLCBwYXRoOiAnLyd9KTtcblx0XHQkLmNvb2tpZSgnY29va2llQ2xlYXJlZCcsIDEsIHtkb21haW46IGhvc3ROYW1lLCBwYXRoOiAnLycsIGV4cGlyZXM6IDE4NH0pO1xuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxlQUE4QkMsR0FBR0MsT0FBT0MsSUFBSSxZQUFZOztBQ0M5RCxJQUFBQyxvQkFBZ0JDLFFBQUFDLFFBQUEsZ0JBQUEsR0FBQSxDQUFBO0FBRWhCQyxFQUFFLFNBQVNDLGNBQW9CO0FBQUEsTUFBQUM7QUFDOUIsTUFBSVQsZ0JBQWdCLENBQUMsQ0FBQ08sRUFBRUcsT0FBTyxlQUFlLEdBQUc7QUFDaEQ7RUFDRDtBQUVBLFFBQU1DLFdBQW1CQyxTQUFTQyxTQUFTQztBQUUzQyxRQUFNQyxrQkFBQU4sd0JBQXlCTCxrQkFBQVksUUFBSWIsSUFBSVEsUUFBUSxPQUFBLFFBQUFGLDBCQUFBLFNBQUFBLHdCQUFLO0FBRXBELFdBQUFRLEtBQUEsR0FBQUMsZUFBcUJDLE9BQU9DLEtBQUtiLEVBQUVHLE9BQU8sQ0FBQyxHQUFBTyxLQUFBQyxhQUFBRyxRQUFBSixNQUFHO0FBQTlDLFVBQVdQLFNBQUFRLGFBQUFELEVBQUE7QUFDVlYsTUFBRWUsYUFBYVosTUFBTTtBQUNyQkgsTUFBRWUsYUFBYVosUUFBUTtNQUFDYSxRQUFRUjtJQUFjLENBQUM7QUFDL0NSLE1BQUVlLGFBQWFaLFFBQVE7TUFBQ2EsUUFBQSxJQUFBQyxPQUFZVCxjQUFjO0lBQUUsQ0FBQztBQUNyRFIsTUFBRWUsYUFBYVosUUFBUTtNQUFDZSxNQUFNO0lBQUcsQ0FBQztBQUNsQ2xCLE1BQUVlLGFBQWFaLFFBQVE7TUFBQ2EsUUFBUVI7TUFBZ0JVLE1BQU07SUFBRyxDQUFDO0FBQzFEbEIsTUFBRWUsYUFBYVosUUFBUTtNQUFDYSxRQUFBLElBQUFDLE9BQVlULGNBQWM7TUFBSVUsTUFBTTtJQUFHLENBQUM7QUFDaEVsQixNQUFFRyxPQUFPLGlCQUFpQixHQUFHO01BQUNhLFFBQVFaO01BQVVjLE1BQU07TUFBS0MsU0FBUztJQUFHLENBQUM7RUFDekU7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJXR19VU0VSX05BTUUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiJCIsICJsb2dpblRvRWRpdCIsICJfaW1wb3J0X2V4dF9nYWRnZXQkZGUiLCAiY29va2llIiwgImhvc3ROYW1lIiwgImRvY3VtZW50IiwgImxvY2F0aW9uIiwgImhvc3QiLCAiaG9zdE5hbWVTdWZmaXgiLCAiZGVmYXVsdCIsICJfaSIsICJfT2JqZWN0JGtleXMiLCAiT2JqZWN0IiwgImtleXMiLCAibGVuZ3RoIiwgInJlbW92ZUNvb2tpZSIsICJkb21haW4iLCAiY29uY2F0IiwgInBhdGgiLCAiZXhwaXJlcyJdCn0K

})();

/* </nowiki> */
