/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:WhitePhosphorus/js/PagePatroller.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/PagePatroller}
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

// dist/PagePatroller/PagePatroller.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
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
//! src/PagePatroller/options.json
var mountPointSelector = "#footer-info,.page-info";
//! src/PagePatroller/modules/core.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
//! src/PagePatroller/modules/elementWrap.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
//! src/PagePatroller/modules/constant.ts
var WG_SKIN = mw.config.get("skin");
//! src/PagePatroller/modules/elementWrap.tsx
var elementWrap = (id) => {
  if (WG_SKIN === "citizen") {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("section", {
      className: "page-info__item",
      id
    });
  } else if (["vector", "vector-2022", "gongbi"].includes(WG_SKIN) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget.default.createElement("li", {
      id
    });
  }
  return /* @__PURE__ */ import_ext_gadget.default.createElement("div", {
    id
  });
};
//! src/PagePatroller/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Loading...": (0, import_ext_gadget2.localize)({
      en: "Loading...",
      "zh-hans": "正在加载此页面的巡查者……",
      "zh-hant": "正在加載此頁面的巡查者……"
    }),
    "This page has not been patrolled yet": (0, import_ext_gadget2.localize)({
      en: "This page has not been patrolled yet.",
      "zh-hans": "此页面尚未被巡查。",
      "zh-hant": "此頁面尚未被巡查。"
    }),
    "This page was patrolled at by": (0, import_ext_gadget2.localize)({
      en: "This page was patrolled at $1 by",
      "zh-hans": "此页面巡查于$1，巡查者是",
      "zh-hant": "此頁面巡查於$1，巡查者是"
    }),
    "This page has been patrolled, or has been marked as auto-patrolled": (0, import_ext_gadget2.localize)({
      en: "This page has been patrolled, or has been marked as auto-patrolled.",
      "zh-hans": "此页面尚未被巡查，或已自动标为已巡查。",
      "zh-hant": "此頁面尚未被巡查，或已自動標爲已巡查。"
    }),
    "Error occurs when finding patroller": (0, import_ext_gadget2.localize)({
      en: "Error occurs when finding patroller.",
      "zh-hans": "查找巡查者时出现错误。",
      "zh-hant": "查找巡查者時出現錯誤。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/PagePatroller/modules/core.tsx
var import_ext_gadget4 = require("ext.gadget.Util");
var pagePatroller = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    var _document$querySelect;
    const element = elementWrap("footer-info-patroller");
    (_document$querySelect = document.querySelectorAll(mountPointSelector)[0]) === null || _document$querySelect === void 0 || _document$querySelect.prepend(element);
    if (document.querySelectorAll(".patrollink").length) {
      element.append(/* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
        id: "page_patroller__not-patrolled"
      }, getMessage("This page has not been patrolled yet")));
      return;
    }
    const loading = /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
      id: "page_patroller__loading"
    }, getMessage("Loading..."));
    const patrolled = /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
      id: "page_patroller__patrolled"
    }, getMessage("This page has been patrolled, or has been marked as auto-patrolled"));
    element.append(loading);
    try {
      const api = (0, import_ext_gadget4.initMwApi)("PagePatroller/2.0");
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        prop: ["revisions"],
        titles: mw.config.get("wgPageName"),
        list: "logevents",
        letype: "patrol",
        letitle: mw.config.get("wgPageName"),
        rvprop: "timestamp",
        rvlimit: 1,
        rvdir: "newer"
      };
      const {
        query
      } = yield api.get(params);
      if (query !== null && query !== void 0 && query.logevents && query.logevents.length) {
        const [log] = query.logevents;
        const {
          action,
          user
        } = log;
        const {
          timestamp
        } = log;
        const date = new Date(timestamp);
        if (action === "patrol") {
          const timestampText = "".concat(date.getUTCFullYear(), "年").concat(date.getUTCMonth() + 1, "月").concat(date.getUTCDate(), "日 ").concat("0".concat(date.getUTCHours()).slice(-2), ":").concat("0".concat(date.getUTCMinutes()).slice(-2), " (UTC)");
          loading.replaceWith(/* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
            id: "page_patroller__patrolled-by"
          }, getMessage("This page was patrolled at by").replace("$1", timestampText), /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
            href: mw.util.getUrl("User:".concat(user))
          }, user)));
        } else {
          loading.replaceWith(patrolled);
        }
      } else {
        loading.replaceWith(patrolled);
      }
    } catch (error) {
      console.error("[PagePatroller]:", error);
      const innerElement = /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
        id: "page_patroller__error"
      }, getMessage("Error occurs when finding patroller"));
      loading.replaceWith(innerElement);
    }
  });
  return function pagePatroller2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/PagePatroller/PagePatroller.ts
if (mw.config.get("wgNamespaceNumber") >= 0 && mw.config.get("wgPageName") !== "Qiuwen:首页" && !document.querySelectorAll(".noarticletext").length) {
  $(() => {
    void pagePatroller();
  });
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvY29yZS50c3giLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9lbGVtZW50V3JhcC50c3giLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvUGFnZVBhdHJvbGxlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtlbGVtZW50V3JhcH0gZnJvbSAnLi9lbGVtZW50V3JhcCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuZXhwb3J0IGNvbnN0IHBhZ2VQYXRyb2xsZXIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50V3JhcCgnZm9vdGVyLWluZm8tcGF0cm9sbGVyJyk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpWzBdPy5wcmVwZW5kKGVsZW1lbnQpO1xuXG5cdC8vIGlmIHRoZXJlIGlzIGEgcGF0cm9sIGxpbmssIHRoZSBwYWdlIG11c3QgYmUgbm90IHBhdHJvbGxlZFxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhdHJvbGxpbmsnKS5sZW5ndGgpIHtcblx0XHRlbGVtZW50LmFwcGVuZChcblx0XHRcdDxzcGFuIGlkPXsncGFnZV9wYXRyb2xsZXJfX25vdC1wYXRyb2xsZWQnfT57Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0Jyl9PC9zcGFuPlxuXHRcdCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gTG9hZCBwYXRyb2xsZXIgaW5mb1xuXHQvLyBhZGQgYExvYWRpbmcuLi5gXG5cdGNvbnN0IGxvYWRpbmcgPSA8c3BhbiBpZD17J3BhZ2VfcGF0cm9sbGVyX19sb2FkaW5nJ30+e2dldE1lc3NhZ2UoJ0xvYWRpbmcuLi4nKX08L3NwYW4+O1xuXHRjb25zdCBwYXRyb2xsZWQgPSAoXG5cdFx0PHNwYW4gaWQ9eydwYWdlX3BhdHJvbGxlcl9fcGF0cm9sbGVkJ30+XG5cdFx0XHR7Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkJyl9XG5cdFx0PC9zcGFuPlxuXHQpO1xuXHRlbGVtZW50LmFwcGVuZChsb2FkaW5nKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IGFwaSA9IGluaXRNd0FwaSgnUGFnZVBhdHJvbGxlci8yLjAnKTtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zICYgQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHR0aXRsZXM6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdFx0bGV0eXBlOiAncGF0cm9sJyxcblx0XHRcdGxldGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdHJ2cHJvcDogJ3RpbWVzdGFtcCcsXG5cdFx0XHRydmxpbWl0OiAxLFxuXHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0fTtcblx0XHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0aWYgKHF1ZXJ5Py5sb2dldmVudHMgJiYgcXVlcnkubG9nZXZlbnRzLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgW2xvZ106IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0XHRhY3Rpb246IHN0cmluZztcblx0XHRcdFx0fSxcblx0XHRcdF0gPSBxdWVyeS5sb2dldmVudHMgYXMgW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdFx0XHR9LFxuXHRcdFx0XTtcblx0XHRcdGNvbnN0IHthY3Rpb24sIHVzZXJ9ID0gbG9nO1xuXHRcdFx0Y29uc3Qge3RpbWVzdGFtcH0gPSBsb2c7XG5cdFx0XHRjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcblxuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3BhdHJvbCcpIHtcblx0XHRcdFx0Y29uc3QgdGltZXN0YW1wVGV4dCA9IGAke2RhdGUuZ2V0VVRDRnVsbFllYXIoKX3lubQke2RhdGUuZ2V0VVRDTW9udGgoKSArIDF95pyIJHtkYXRlLmdldFVUQ0RhdGUoKX3ml6UgJHtgMCR7ZGF0ZS5nZXRVVENIb3VycygpfWAuc2xpY2UoLTIpfToke2AwJHtkYXRlLmdldFVUQ01pbnV0ZXMoKX1gLnNsaWNlKC0yKX0gKFVUQylgO1xuXHRcdFx0XHRsb2FkaW5nLnJlcGxhY2VXaXRoKFxuXHRcdFx0XHRcdDxzcGFuIGlkPXsncGFnZV9wYXRyb2xsZXJfX3BhdHJvbGxlZC1ieSd9PlxuXHRcdFx0XHRcdFx0e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0IGJ5JykucmVwbGFjZSgnJDEnLCB0aW1lc3RhbXBUZXh0KX1cblx0XHRcdFx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKGBVc2VyOiR7dXNlcn1gKX0+e3VzZXJ9PC9hPlxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxvYWRpbmcucmVwbGFjZVdpdGgocGF0cm9sbGVkKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9hZGluZy5yZXBsYWNlV2l0aChwYXRyb2xsZWQpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHQvLyByZXR1cm4gZXJyb3Iocylcblx0XHRjb25zb2xlLmVycm9yKCdbUGFnZVBhdHJvbGxlcl06JywgZXJyb3IpO1xuXHRcdGNvbnN0IGlubmVyRWxlbWVudCA9IChcblx0XHRcdDxzcGFuIGlkPXsncGFnZV9wYXRyb2xsZXJfX2Vycm9yJ30+e2dldE1lc3NhZ2UoJ0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyJyl9PC9zcGFuPlxuXHRcdCk7XG5cdFx0bG9hZGluZy5yZXBsYWNlV2l0aChpbm5lckVsZW1lbnQpO1xuXHR9XG59O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7V0dfU0tJTn0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IGVsZW1lbnRXcmFwID0gKGlkOiBzdHJpbmcpID0+IHtcblx0aWYgKFdHX1NLSU4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9eydwYWdlLWluZm9fX2l0ZW0nfSBpZD17aWR9IC8+O1xuXHR9IGVsc2UgaWYgKFsndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJywgJ2dvbmdiaSddLmluY2x1ZGVzKFdHX1NLSU4pIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsI2Zvb3Rlci1pbmZvJykpIHtcblx0XHRyZXR1cm4gPGxpIGlkPXtpZH0gLz47XG5cdH1cblx0cmV0dXJuIDxkaXYgaWQ9e2lkfSAvPjtcbn07XG5cbmV4cG9ydCB7ZWxlbWVudFdyYXB9O1xuIiwgImNvbnN0IFdHX1NLSU46IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKTtcblxuZXhwb3J0IHtXR19TS0lOfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0xvYWRpbmcuLi4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yqg6L295q2k6aG16Z2i55qE5beh5p+l6ICF4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOWKoOi8ieatpOmggemdoueahOW3oeafpeiAheKApuKApicsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0LicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlsJrmnKrooqvlt6Hmn6XjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5bCa5pyq6KKr5beh5p+l44CCJyxcblx0XHR9KSxcblx0XHQnVGhpcyBwYWdlIHdhcyBwYXRyb2xsZWQgYXQgYnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0ICQxIGJ5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouW3oeafpeS6jiQx77yM5beh5p+l6ICF5pivJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouW3oeafpeaWvCQx77yM5beh5p+l6ICF5pivJyxcblx0XHR9KSxcblx0XHQnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaGFzIGJlZW4gcGF0cm9sbGVkLCBvciBoYXMgYmVlbiBtYXJrZWQgYXMgYXV0by1wYXRyb2xsZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouWwmuacquiiq+W3oeafpe+8jOaIluW3suiHquWKqOagh+S4uuW3suW3oeafpeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlsJrmnKrooqvlt6Hmn6XvvIzmiJblt7Loh6rli5XmqJnniLLlt7Llt6Hmn6XjgIInLFxuXHRcdH0pLFxuXHRcdCdFcnJvciBvY2N1cnMgd2hlbiBmaW5kaW5nIHBhdHJvbGxlcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXIuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+afpeaJvuW3oeafpeiAheaXtuWHuueOsOmUmeivr+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmn6Xmib7lt6Hmn6XogIXmmYLlh7rnj77pjK/oqqTjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtwYWdlUGF0cm9sbGVyfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmIChcblx0bXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA+PSAwICYmXG5cdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSAhPT0gJ1FpdXdlbjrpppbpobUnICYmXG5cdCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm9hcnRpY2xldGV4dCcpLmxlbmd0aFxuKSB7XG5cdCQoKCkgPT4ge1xuXHRcdHZvaWQgcGFnZVBhdHJvbGxlcigpO1xuXHR9KTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEscUJBQXNCOztBQ0F2QixJQUFBQyxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFBQyxvQkFBa0JGLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0FsQixJQUFNRSxVQUFrQkMsR0FBR0MsT0FBT0MsSUFBSSxNQUFNOztBREc1QyxJQUFNQyxjQUFlQyxRQUFlO0FBQ25DLE1BQUlMLFlBQVksV0FBVztBQUMxQixXQUFPRCxrQ0FBQU8sUUFBQUMsY0FBQyxXQUFBO01BQVFDLFdBQVc7TUFBbUJIO0lBQUEsQ0FBUTtFQUN2RCxXQUFXLENBQUMsVUFBVSxlQUFlLFFBQVEsRUFBRUksU0FBU1QsT0FBTyxLQUFLVSxTQUFTQyxjQUFjLGdCQUFnQixHQUFHO0FBQzdHLFdBQU9aLGtDQUFBTyxRQUFBQyxjQUFDLE1BQUE7TUFBR0Y7SUFBQSxDQUFRO0VBQ3BCO0FBQ0EsU0FBT04sa0NBQUFPLFFBQUFDLGNBQUMsT0FBQTtJQUFJRjtFQUFBLENBQVE7QUFDckI7O0FFVkEsSUFBQU8scUJBQXVCZCxRQUFBLGlCQUFBO0FBRXZCLElBQU1lLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sZUFBQSxHQUFjRCxtQkFBQUUsVUFBUztNQUN0QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHlDQUFBLEdBQXdDSCxtQkFBQUUsVUFBUztNQUNoREMsSUFBSTtNQUNKLFdB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QUV1RCxNQUFNN0QsR0FBRzhELEtBQUtDLE9BQUEsUUFBQVgsT0FBZUwsSUFBSSxDQUFFO1VBQUEsR0FBSUEsSUFBSyxDQUNoRCxDQUNEO1FBQ0QsT0FBTztBQUNObkIsa0JBQVErQixZQUFZOUIsU0FBUztRQUM5QjtNQUNELE9BQU87QUFDTkQsZ0JBQVErQixZQUFZOUIsU0FBUztNQUM5QjtJQUNELFNBQVNtQyxPQUFnQjtBQUV4QkMsY0FBUUQsTUFBTSxvQkFBb0JBLEtBQUs7QUFDdkMsWUFBTUUsZUFDTHZFLG1DQUFBVSxRQUFBQyxjQUFDLFFBQUE7UUFBS0YsSUFBSTtNQUFBLEdBQTBCWSxXQUFXLHFDQUFxQyxDQUFFO0FBRXZGWSxjQUFRK0IsWUFBWU8sWUFBWTtJQUNqQztFQUNELENBQUE7QUFBQSxTQUFBLFNBL0VhL0MsaUJBQUE7QUFBQSxXQUFBQyxLQUFBK0MsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBSUpiLElBQ0NwRSxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQixLQUFLLEtBQ3RDRixHQUFHQyxPQUFPQyxJQUFJLFlBQVksTUFBTSxlQUNoQyxDQUFDTyxTQUFTZSxpQkFBaUIsZ0JBQWdCLEVBQUVFLFFBQzVDO0FBQ0QyQyxJQUFFLE1BQU07QUFDUCxTQUFLbEQsY0FBYztFQUNwQixDQUFDO0FBQ0Y7IiwKICAibmFtZXMiOiBbIm1vdW50UG9pbnRTZWxlY3RvciIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgIldHX1NLSU4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJlbGVtZW50V3JhcCIsICJpZCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInBhZ2VQYXRyb2xsZXIiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiZWxlbWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInByZXBlbmQiLCAibGVuZ3RoIiwgImFwcGVuZCIsICJsb2FkaW5nIiwgInBhdHJvbGxlZCIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0aXRsZXMiLCAibGlzdCIsICJsZXR5cGUiLCAibGV0aXRsZSIsICJydnByb3AiLCAicnZsaW1pdCIsICJydmRpciIsICJxdWVyeSIsICJsb2dldmVudHMiLCAibG9nIiwgInVzZXIiLCAidGltZXN0YW1wIiwgImRhdGUiLCAiRGF0ZSIsICJ0aW1lc3RhbXBUZXh0IiwgImNvbmNhdCIsICJnZXRVVENGdWxsWWVhciIsICJnZXRVVENNb250aCIsICJnZXRVVENEYXRlIiwgImdldFVUQ0hvdXJzIiwgInNsaWNlIiwgImdldFVUQ01pbnV0ZXMiLCAicmVwbGFjZVdpdGgiLCAicmVwbGFjZSIsICJocmVmIiwgInV0aWwiLCAiZ2V0VXJsIiwgImVycm9yIiwgImNvbnNvbGUiLCAiaW5uZXJFbGVtZW50IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICIkIl0KfQo=
