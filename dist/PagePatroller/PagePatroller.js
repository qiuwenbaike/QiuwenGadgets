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
    }),
    period: (0, import_ext_gadget2.localize)({
      en: ".",
      zh: "。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/PagePatroller/modules/core.tsx
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/PagePatroller/modules/replaceChild.ts
var replaceChild = (element, newChild) => {
  while (element.hasChildNodes()) {
    var _element$firstChild;
    (_element$firstChild = element.firstChild) === null || _element$firstChild === void 0 || _element$firstChild.remove();
  }
  element.append(newChild);
};
//! src/PagePatroller/modules/core.tsx
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
    element.append(/* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
      id: "page_patroller__loading"
    }, getMessage("Loading...")));
    const patrolled = /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
      id: "page_patroller__patrolled"
    }, getMessage("This page has been patrolled, or has been marked as auto-patrolled"));
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
          const patrolledBy = /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
            id: "page_patroller__patrolled-by"
          }, getMessage("This page was patrolled at by").replace("$1", timestampText), /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
            href: mw.util.getUrl("User:".concat(user))
          }, user), getMessage("period"));
          replaceChild(element, patrolledBy);
        } else {
          replaceChild(element, patrolled);
        }
      } else {
        replaceChild(element, patrolled);
      }
    } catch (error) {
      console.error("[PagePatroller]:", error);
      const errorMessage = /* @__PURE__ */ import_ext_gadget3.default.createElement("span", {
        id: "page_patroller__error"
      }, getMessage("Error occurs when finding patroller"));
      replaceChild(element, errorMessage);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvY29yZS50c3giLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9lbGVtZW50V3JhcC50c3giLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9yZXBsYWNlQ2hpbGQudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvUGFnZVBhdHJvbGxlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtlbGVtZW50V3JhcH0gZnJvbSAnLi9lbGVtZW50V3JhcCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cmVwbGFjZUNoaWxkfSBmcm9tICcuL3JlcGxhY2VDaGlsZCc7XG5cbmV4cG9ydCBjb25zdCBwYWdlUGF0cm9sbGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gZWxlbWVudFdyYXAoJ2Zvb3Rlci1pbmZvLXBhdHJvbGxlcicpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKVswXT8ucHJlcGVuZChlbGVtZW50KTtcblxuXHQvLyBpZiB0aGVyZSBpcyBhIHBhdHJvbCBsaW5rLCB0aGUgcGFnZSBtdXN0IGJlIG5vdCBwYXRyb2xsZWRcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXRyb2xsaW5rJykubGVuZ3RoKSB7XG5cdFx0ZWxlbWVudC5hcHBlbmQoXG5cdFx0XHQ8c3BhbiBpZD17J3BhZ2VfcGF0cm9sbGVyX19ub3QtcGF0cm9sbGVkJ30+e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldCcpfTwvc3Bhbj5cblx0XHQpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIExvYWQgcGF0cm9sbGVyIGluZm9cblx0Ly8gYWRkIGBMb2FkaW5nLi4uYFxuXHRlbGVtZW50LmFwcGVuZCg8c3BhbiBpZD17J3BhZ2VfcGF0cm9sbGVyX19sb2FkaW5nJ30+e2dldE1lc3NhZ2UoJ0xvYWRpbmcuLi4nKX08L3NwYW4+KTtcblx0Y29uc3QgcGF0cm9sbGVkID0gKFxuXHRcdDxzcGFuIGlkPXsncGFnZV9wYXRyb2xsZXJfX3BhdHJvbGxlZCd9PlxuXHRcdFx0e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZCcpfVxuXHRcdDwvc3Bhbj5cblx0KTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IGFwaSA9IGluaXRNd0FwaSgnUGFnZVBhdHJvbGxlci8yLjAnKTtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zICYgQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHR0aXRsZXM6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdFx0bGV0eXBlOiAncGF0cm9sJyxcblx0XHRcdGxldGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdHJ2cHJvcDogJ3RpbWVzdGFtcCcsXG5cdFx0XHRydmxpbWl0OiAxLFxuXHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0fTtcblx0XHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0aWYgKHF1ZXJ5Py5sb2dldmVudHMgJiYgcXVlcnkubG9nZXZlbnRzLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgW2xvZ106IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0XHRhY3Rpb246IHN0cmluZztcblx0XHRcdFx0fSxcblx0XHRcdF0gPSBxdWVyeS5sb2dldmVudHMgYXMgW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdFx0XHR9LFxuXHRcdFx0XTtcblx0XHRcdGNvbnN0IHthY3Rpb24sIHVzZXJ9ID0gbG9nO1xuXHRcdFx0Y29uc3Qge3RpbWVzdGFtcH0gPSBsb2c7XG5cdFx0XHRjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcblxuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3BhdHJvbCcpIHtcblx0XHRcdFx0Y29uc3QgdGltZXN0YW1wVGV4dCA9IGAke2RhdGUuZ2V0VVRDRnVsbFllYXIoKX3lubQke2RhdGUuZ2V0VVRDTW9udGgoKSArIDF95pyIJHtkYXRlLmdldFVUQ0RhdGUoKX3ml6UgJHtgMCR7ZGF0ZS5nZXRVVENIb3VycygpfWAuc2xpY2UoLTIpfToke2AwJHtkYXRlLmdldFVUQ01pbnV0ZXMoKX1gLnNsaWNlKC0yKX0gKFVUQylgO1xuXHRcdFx0XHRjb25zdCBwYXRyb2xsZWRCeSA9IChcblx0XHRcdFx0XHQ8c3BhbiBpZD17J3BhZ2VfcGF0cm9sbGVyX19wYXRyb2xsZWQtYnknfT5cblx0XHRcdFx0XHRcdHtnZXRNZXNzYWdlKCdUaGlzIHBhZ2Ugd2FzIHBhdHJvbGxlZCBhdCBieScpLnJlcGxhY2UoJyQxJywgdGltZXN0YW1wVGV4dCl9XG5cdFx0XHRcdFx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcjoke3VzZXJ9YCl9Pnt1c2VyfTwvYT5cblx0XHRcdFx0XHRcdHtnZXRNZXNzYWdlKCdwZXJpb2QnKX1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJlcGxhY2VDaGlsZChlbGVtZW50LCBwYXRyb2xsZWRCeSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXBsYWNlQ2hpbGQoZWxlbWVudCwgcGF0cm9sbGVkKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVwbGFjZUNoaWxkKGVsZW1lbnQsIHBhdHJvbGxlZCk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdC8vIHJldHVybiBlcnJvcihzKVxuXHRcdGNvbnNvbGUuZXJyb3IoJ1tQYWdlUGF0cm9sbGVyXTonLCBlcnJvcik7XG5cdFx0Y29uc3QgZXJyb3JNZXNzYWdlID0gKFxuXHRcdFx0PHNwYW4gaWQ9eydwYWdlX3BhdHJvbGxlcl9fZXJyb3InfT57Z2V0TWVzc2FnZSgnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXInKX08L3NwYW4+XG5cdFx0KTtcblx0XHRyZXBsYWNlQ2hpbGQoZWxlbWVudCwgZXJyb3JNZXNzYWdlKTtcblx0fVxufTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge1dHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9IChpZDogc3RyaW5nKSA9PiB7XG5cdGlmIChXR19TS0lOID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPXsncGFnZS1pbmZvX19pdGVtJ30gaWQ9e2lkfSAvPjtcblx0fSBlbHNlIGlmIChbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhXR19TS0lOKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBpZD17aWR9IC8+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGlkPXtpZH0gLz47XG59O1xuXG5leHBvcnQge2VsZW1lbnRXcmFwfTtcbiIsICJjb25zdCBXR19TS0lOOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCdza2luJyk7XG5cbmV4cG9ydCB7V0dfU0tJTn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdMb2FkaW5nLi4uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWKoOi9veatpOmhtemdoueahOW3oeafpeiAheKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjliqDovInmraTpoIHpnaLnmoTlt6Hmn6XogIXigKbigKYnLFxuXHRcdH0pLFxuXHRcdCdUaGlzIHBhZ2UgaGFzIG5vdCBiZWVuIHBhdHJvbGxlZCB5ZXQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5bCa5pyq6KKr5beh5p+l44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouWwmuacquiiq+W3oeafpeOAgicsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0IGJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2Ugd2FzIHBhdHJvbGxlZCBhdCAkMSBieScsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlt6Hmn6Xkuo4kMe+8jOW3oeafpeiAheaYrycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlt6Hmn6XmlrwkMe+8jOW3oeafpeiAheaYrycsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlsJrmnKrooqvlt6Hmn6XvvIzmiJblt7Loh6rliqjmoIfkuLrlt7Llt6Hmn6XjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5bCa5pyq6KKr5beh5p+l77yM5oiW5bey6Ieq5YuV5qiZ54iy5bey5beh5p+l44CCJyxcblx0XHR9KSxcblx0XHQnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyLicsXG5cdFx0XHQnemgtaGFucyc6ICfmn6Xmib7lt6Hmn6XogIXml7blh7rnjrDplJnor6/jgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5p+l5om+5beh5p+l6ICF5pmC5Ye654++6Yyv6Kqk44CCJyxcblx0XHR9KSxcblx0XHRwZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCByZXBsYWNlQ2hpbGQgPSAoZWxlbWVudDogRWxlbWVudCwgbmV3Q2hpbGQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcblx0d2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0ZWxlbWVudC5maXJzdENoaWxkPy5yZW1vdmUoKTtcblx0fVxuXHRlbGVtZW50LmFwcGVuZChuZXdDaGlsZCk7XG59O1xuXG5leHBvcnQge3JlcGxhY2VDaGlsZH07XG4iLCAiaW1wb3J0IHtwYWdlUGF0cm9sbGVyfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmlmIChcblx0bXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA+PSAwICYmXG5cdG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSAhPT0gJ1FpdXdlbjrpppbpobUnICYmXG5cdCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm9hcnRpY2xldGV4dCcpLmxlbmd0aFxuKSB7XG5cdCQoKCkgPT4ge1xuXHRcdHZvaWQgcGFnZVBhdHJvbGxlcigpO1xuXHR9KTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEscUJBQXNCOztBQ0F2QixJQUFBQyxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFBQyxvQkFBa0JGLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0FsQixJQUFNRSxVQUFrQkMsR0FBR0MsT0FBT0MsSUFBSSxNQUFNOztBREc1QyxJQUFNQyxjQUFlQyxRQUFlO0FBQ25DLE1BQUlMLFlBQVksV0FBVztBQUMxQixXQUFP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QUN2QyxZQUFNRSxlQUNMOUUsbUNBQUFVLFFBQUFDLGNBQUMsUUFBQTtRQUFLRixJQUFJO01BQUEsR0FBMEJjLFdBQVcscUNBQXFDLENBQUU7QUFFdkZHLG1CQUFhQyxTQUFTbUQsWUFBWTtJQUNuQztFQUNELENBQUE7QUFBQSxTQUFBLFNBaEZhNUMsaUJBQUE7QUFBQSxXQUFBQyxLQUFBNEMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBS0xiLElBQ0MzRSxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQixLQUFLLEtBQ3RDRixHQUFHQyxPQUFPQyxJQUFJLFlBQVksTUFBTSxlQUNoQyxDQUFDTyxTQUFTd0IsaUJBQWlCLGdCQUFnQixFQUFFRSxRQUM1QztBQUNEeUMsSUFBRSxNQUFNO0FBQ1AsU0FBSy9DLGNBQWM7RUFDcEIsQ0FBQztBQUNGOyIsCiAgIm5hbWVzIjogWyJtb3VudFBvaW50U2VsZWN0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJXR19TS0lOIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZWxlbWVudFdyYXAiLCAiaWQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAicGVyaW9kIiwgInpoIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVwbGFjZUNoaWxkIiwgImVsZW1lbnQiLCAibmV3Q2hpbGQiLCAiaGFzQ2hpbGROb2RlcyIsICJfZWxlbWVudCRmaXJzdENoaWxkIiwgImZpcnN0Q2hpbGQiLCAicmVtb3ZlIiwgImFwcGVuZCIsICJwYWdlUGF0cm9sbGVyIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicHJlcGVuZCIsICJsZW5ndGgiLCAicGF0cm9sbGVkIiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlcyIsICJsaXN0IiwgImxldHlwZSIsICJsZXRpdGxlIiwgInJ2cHJvcCIsICJydmxpbWl0IiwgInJ2ZGlyIiwgInF1ZXJ5IiwgImxvZ2V2ZW50cyIsICJsb2ciLCAidXNlciIsICJ0aW1lc3RhbXAiLCAiZGF0ZSIsICJEYXRlIiwgInRpbWVzdGFtcFRleHQiLCAiY29uY2F0IiwgImdldFVUQ0Z1bGxZZWFyIiwgImdldFVUQ01vbnRoIiwgImdldFVUQ0RhdGUiLCAiZ2V0VVRDSG91cnMiLCAic2xpY2UiLCAiZ2V0VVRDTWludXRlcyIsICJwYXRyb2xsZWRCeSIsICJyZXBsYWNlIiwgImhyZWYiLCAidXRpbCIsICJnZXRVcmwiLCAiZXJyb3IiLCAiY29uc29sZSIsICJlcnJvck1lc3NhZ2UiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIiQiXQp9Cg==
