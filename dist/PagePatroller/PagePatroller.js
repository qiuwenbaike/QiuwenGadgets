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
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
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
//! src/PagePatroller/options.json
var mountPointSelector = "#footer-info,.page-info";
var elementId = "footer-info-patroller";
//! src/PagePatroller/modules/elementWrap.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/PagePatroller/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Loading...": (0, import_ext_gadget.localize)({
      en: "Loading...",
      "zh-hans": "正在加载此页面的巡查者……",
      "zh-hant": "正在加載此頁面的巡查者……"
    }),
    "This page has not been patrolled yet": (0, import_ext_gadget.localize)({
      en: "This page has not been patrolled yet.",
      "zh-hans": "此页面尚未被巡查。",
      "zh-hant": "此頁面尚未被巡查。"
    }),
    "This page was patrolled at by": (0, import_ext_gadget.localize)({
      en: "This page was patrolled at $1 by",
      "zh-hans": "此页面巡查于$1，巡查者是",
      "zh-hant": "此頁面巡查於$1，巡查者是"
    }),
    "This page has been patrolled, or has been marked as auto-patrolled": (0, import_ext_gadget.localize)({
      en: "This page has been patrolled, or has been marked as auto-patrolled.",
      "zh-hans": "此页面尚未被巡查，或已自动标为已巡查。",
      "zh-hant": "此頁面尚未被巡查，或已自動標爲已巡查。"
    }),
    "Error occurs when finding patroller": (0, import_ext_gadget.localize)({
      en: "Error occurs when finding patroller.",
      "zh-hans": "查找巡查者时出现错误。",
      "zh-hant": "查找巡查者時出現錯誤。"
    }),
    period: (0, import_ext_gadget.localize)({
      en: ".",
      zh: "。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/PagePatroller/modules/elementWrap.tsx
var elementWrap = () => {
  const {
    skin
  } = mw.config.get();
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
      className: "page-info__item",
      id: elementId
    });
  } else if (["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      id: elementId
    });
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id: elementId
  });
};
var notBeenPatrolledYet = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__not-patrolled"
}, getMessage("This page has not been patrolled yet"));
var loading = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__loading"
}, getMessage("Loading..."));
var patrolled = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__patrolled"
}, getMessage("This page has been patrolled, or has been marked as auto-patrolled"));
var patrolledBy = (timestampText, user) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__patrolled-by"
}, getMessage("This page was patrolled at by").replace("$1", timestampText), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  href: mw.util.getUrl("User:".concat(user))
}, user), getMessage("period"));
var errorMessage = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__error"
}, getMessage("Error occurs when finding patroller"));
//! src/PagePatroller/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/PagePatroller/modules/replaceChild.ts
var replaceChild = (element, newChild) => {
  while (element.hasChildNodes()) {
    var _element$firstChild;
    (_element$firstChild = element.firstChild) === null || _element$firstChild === void 0 || _element$firstChild.remove();
  }
  element.append(newChild);
};
//! src/PagePatroller/modules/core.ts
var pagePatroller = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    var _document$querySelect;
    const element = elementWrap();
    (_document$querySelect = document.querySelectorAll(mountPointSelector)[0]) === null || _document$querySelect === void 0 || _document$querySelect.prepend(element);
    if (document.querySelectorAll(".patrollink").length) {
      element.append(notBeenPatrolledYet());
      return;
    }
    element.append(loading());
    try {
      const api = (0, import_ext_gadget3.initMwApi)("PagePatroller/2.0");
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
        rvdir: "newer",
        smaxage: 600,
        maxage: 600
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
          replaceChild(element, patrolledBy(date.toLocaleString(), user));
        } else {
          replaceChild(element, patrolled());
        }
      } else {
        replaceChild(element, patrolled());
      }
    } catch (error) {
      console.error("[PagePatroller]:", error);
      replaceChild(element, errorMessage());
    }
  });
  return function pagePatroller2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/PagePatroller/PagePatroller.ts
var {
  wgNamespaceNumber,
  wgArticleId,
  wgIsMainPage
} = mw.config.get();
if (wgNamespaceNumber >= 0 && !wgIsMainPage && wgArticleId > 0) {
  void pagePatroller();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvZWxlbWVudFdyYXAudHN4IiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvaTE4bi50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9yZXBsYWNlQ2hpbGQudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvUGFnZVBhdHJvbGxlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwiZWxlbWVudElkXCI6IFwiZm9vdGVyLWluZm8tcGF0cm9sbGVyXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9ICgpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17J3BhZ2UtaW5mb19faXRlbSd9IGlkPXtPUFRJT05TLmVsZW1lbnRJZH0gLz47XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgaWQ9e09QVElPTlMuZWxlbWVudElkfSAvPjtcblx0fVxuXHRyZXR1cm4gPGRpdiBpZD17T1BUSU9OUy5lbGVtZW50SWR9IC8+O1xufTtcblxuY29uc3Qgbm90QmVlblBhdHJvbGxlZFlldCA9ICgpID0+IChcblx0PHNwYW4gaWQ9eydwYWdlX3BhdHJvbGxlcl9fbm90LXBhdHJvbGxlZCd9PntnZXRNZXNzYWdlKCdUaGlzIHBhZ2UgaGFzIG5vdCBiZWVuIHBhdHJvbGxlZCB5ZXQnKX08L3NwYW4+XG4pO1xuXG5jb25zdCBsb2FkaW5nID0gKCkgPT4gPHNwYW4gaWQ9eydwYWdlX3BhdHJvbGxlcl9fbG9hZGluZyd9PntnZXRNZXNzYWdlKCdMb2FkaW5nLi4uJyl9PC9zcGFuPjtcblxuY29uc3QgcGF0cm9sbGVkID0gKCkgPT4gKFxuXHQ8c3BhbiBpZD17J3BhZ2VfcGF0cm9sbGVyX19wYXRyb2xsZWQnfT5cblx0XHR7Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkJyl9XG5cdDwvc3Bhbj5cbik7XG5cbmNvbnN0IHBhdHJvbGxlZEJ5ID0gKHRpbWVzdGFtcFRleHQ6IHN0cmluZywgdXNlcjogc3RyaW5nKSA9PiAoXG5cdDxzcGFuIGlkPXsncGFnZV9wYXRyb2xsZXJfX3BhdHJvbGxlZC1ieSd9PlxuXHRcdHtnZXRNZXNzYWdlKCdUaGlzIHBhZ2Ugd2FzIHBhdHJvbGxlZCBhdCBieScpLnJlcGxhY2UoJyQxJywgdGltZXN0YW1wVGV4dCl9XG5cdFx0PGEgaHJlZj17bXcudXRpbC5nZXRVcmwoYFVzZXI6JHt1c2VyfWApfT57dXNlcn08L2E+XG5cdFx0e2dldE1lc3NhZ2UoJ3BlcmlvZCcpfVxuXHQ8L3NwYW4+XG4pO1xuXG5jb25zdCBlcnJvck1lc3NhZ2UgPSAoKSA9PiAoXG5cdDxzcGFuIGlkPXsncGFnZV9wYXRyb2xsZXJfX2Vycm9yJ30+e2dldE1lc3NhZ2UoJ0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyJyl9PC9zcGFuPlxuKTtcblxuZXhwb3J0IHtlbGVtZW50V3JhcCwgZXJyb3JNZXNzYWdlLCBsb2FkaW5nLCBub3RCZWVuUGF0cm9sbGVkWWV0LCBwYXRyb2xsZWQsIHBhdHJvbGxlZEJ5fTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0xvYWRpbmcuLi4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yqg6L295q2k6aG16Z2i55qE5beh5p+l6ICF4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOWKoOi8ieatpOmggemdoueahOW3oeafpeiAheKApuKApicsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0LicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlsJrmnKrooqvlt6Hmn6XjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5bCa5pyq6KKr5beh5p+l44CCJyxcblx0XHR9KSxcblx0XHQnVGhpcyBwYWdlIHdhcyBwYXRyb2xsZWQgYXQgYnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0ICQxIGJ5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouW3oeafpeS6jiQx77yM5beh5p+l6ICF5pivJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouW3oeafpeaWvCQx77yM5beh5p+l6ICF5pivJyxcblx0XHR9KSxcblx0XHQnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaGFzIGJlZW4gcGF0cm9sbGVkLCBvciBoYXMgYmVlbiBtYXJrZWQgYXMgYXV0by1wYXRyb2xsZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouWwmuacquiiq+W3oeafpe+8jOaIluW3suiHquWKqOagh+S4uuW3suW3oeafpeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlsJrmnKrooqvlt6Hmn6XvvIzmiJblt7Loh6rli5XmqJnniLLlt7Llt6Hmn6XjgIInLFxuXHRcdH0pLFxuXHRcdCdFcnJvciBvY2N1cnMgd2hlbiBmaW5kaW5nIHBhdHJvbGxlcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXIuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+afpeaJvuW3oeafpeiAheaXtuWHuueOsOmUmeivr+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmn6Xmib7lt6Hmn6XogIXmmYLlh7rnj77pjK/oqqTjgIInLFxuXHRcdH0pLFxuXHRcdHBlcmlvZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcuJyxcblx0XHRcdHpoOiAn44CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7ZWxlbWVudFdyYXAsIGVycm9yTWVzc2FnZSwgbG9hZGluZywgbm90QmVlblBhdHJvbGxlZFlldCwgcGF0cm9sbGVkLCBwYXRyb2xsZWRCeX0gZnJvbSAnLi9lbGVtZW50V3JhcCc7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cmVwbGFjZUNoaWxkfSBmcm9tICcuL3JlcGxhY2VDaGlsZCc7XG5cbmNvbnN0IHBhZ2VQYXRyb2xsZXIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50V3JhcCgpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKVswXT8ucHJlcGVuZChlbGVtZW50KTtcblxuXHQvLyBpZiB0aGVyZSBpcyBhIHBhdHJvbCBsaW5rLCB0aGUgcGFnZSBtdXN0IGJlIG5vdCBwYXRyb2xsZWRcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXRyb2xsaW5rJykubGVuZ3RoKSB7XG5cdFx0ZWxlbWVudC5hcHBlbmQobm90QmVlblBhdHJvbGxlZFlldCgpKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBMb2FkIHBhdHJvbGxlciBpbmZvXG5cdC8vIGFkZCBgTG9hZGluZy4uLmBcblx0ZWxlbWVudC5hcHBlbmQobG9hZGluZygpKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IGFwaSA9IGluaXRNd0FwaSgnUGFnZVBhdHJvbGxlci8yLjAnKTtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zICYgQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHR0aXRsZXM6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdFx0bGV0eXBlOiAncGF0cm9sJyxcblx0XHRcdGxldGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdHJ2cHJvcDogJ3RpbWVzdGFtcCcsXG5cdFx0XHRydmxpbWl0OiAxLFxuXHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHR9O1xuXHRcdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRpZiAocXVlcnk/LmxvZ2V2ZW50cyAmJiBxdWVyeS5sb2dldmVudHMubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBbbG9nXTogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdFx0XHR9LFxuXHRcdFx0XSA9IHF1ZXJ5LmxvZ2V2ZW50cyBhcyBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1c2VyOiBzdHJpbmc7XG5cdFx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdFx0YWN0aW9uOiBzdHJpbmc7XG5cdFx0XHRcdH0sXG5cdFx0XHRdO1xuXHRcdFx0Y29uc3Qge2FjdGlvbiwgdXNlcn0gPSBsb2c7XG5cdFx0XHRjb25zdCB7dGltZXN0YW1wfSA9IGxvZztcblx0XHRcdGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuXG5cdFx0XHRpZiAoYWN0aW9uID09PSAncGF0cm9sJykge1xuXHRcdFx0XHRyZXBsYWNlQ2hpbGQoZWxlbWVudCwgcGF0cm9sbGVkQnkoZGF0ZS50b0xvY2FsZVN0cmluZygpLCB1c2VyKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXBsYWNlQ2hpbGQoZWxlbWVudCwgcGF0cm9sbGVkKCkpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXBsYWNlQ2hpbGQoZWxlbWVudCwgcGF0cm9sbGVkKCkpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHQvLyByZXR1cm4gZXJyb3Iocylcblx0XHRjb25zb2xlLmVycm9yKCdbUGFnZVBhdHJvbGxlcl06JywgZXJyb3IpO1xuXHRcdHJlcGxhY2VDaGlsZChlbGVtZW50LCBlcnJvck1lc3NhZ2UoKSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cGFnZVBhdHJvbGxlcn07XG4iLCAiY29uc3QgcmVwbGFjZUNoaWxkID0gKGVsZW1lbnQ6IEVsZW1lbnQsIG5ld0NoaWxkOiBFbGVtZW50KTogdm9pZCA9PiB7XG5cdHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdGVsZW1lbnQuZmlyc3RDaGlsZD8ucmVtb3ZlKCk7XG5cdH1cblx0ZWxlbWVudC5hcHBlbmQobmV3Q2hpbGQpO1xufTtcblxuZXhwb3J0IHtyZXBsYWNlQ2hpbGR9O1xuIiwgImltcG9ydCB7cGFnZVBhdHJvbGxlcn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5jb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnQXJ0aWNsZUlkLCB3Z0lzTWFpblBhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5pZiAod2dOYW1lc3BhY2VOdW1iZXIgPj0gMCAmJiAhd2dJc01haW5QYWdlICYmIHdnQXJ0aWNsZUlkID4gMCkge1xuXHR2b2lkIHBhZ2VQYXRyb2xsZXIoKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLHFCQUFzQjtBQUN0QixJQUFBQyxZQUFhOztBQ0RkLElBQUFDLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRGxCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLGVBQUEsR0FBY0Qsa0JBQUFFLFVBQVM7TUFDdEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCx5Q0FBQSxHQUF3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Q3JDO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FoRU1VLGlCQUFBO0FBQUEsV0FBQUMsS0FBQStCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUVITixJQUFNO0VBQUNDO0VBQW1CQztFQUFhQztBQUFZLElBQUluRSxHQUFHQyxPQUFPQyxJQUFJO0FBRXJFLElBQUkrRCxxQkFBcUIsS0FBSyxDQUFDRSxnQkFBZ0JELGNBQWMsR0FBRztBQUMvRCxPQUFLbkMsY0FBYztBQUNwQjsiLAogICJuYW1lcyI6IFsibW91bnRQb2ludFNlbGVjdG9yIiwgImVsZW1lbnRJZCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJwZXJpb2QiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImVsZW1lbnRXcmFwIiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImlkIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAibm90QmVlblBhdHJvbGxlZFlldCIsICJsb2FkaW5nIiwgInBhdHJvbGxlZCIsICJwYXRyb2xsZWRCeSIsICJ0aW1lc3RhbXBUZXh0IiwgInVzZXIiLCAicmVwbGFjZSIsICJocmVmIiwgInV0aWwiLCAiZ2V0VXJsIiwgImNvbmNhdCIsICJlcnJvck1lc3NhZ2UiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlcGxhY2VDaGlsZCIsICJlbGVtZW50IiwgIm5ld0NoaWxkIiwgImhhc0NoaWxkTm9kZXMiLCAiX2VsZW1lbnQkZmlyc3RDaGlsZCIsICJmaXJzdENoaWxkIiwgInJlbW92ZSIsICJhcHBlbmQiLCAicGFnZVBhdHJvbGxlciIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgInByZXBlbmQiLCAibGVuZ3RoIiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlcyIsICJsaXN0IiwgImxldHlwZSIsICJsZXRpdGxlIiwgInJ2cHJvcCIsICJydmxpbWl0IiwgInJ2ZGlyIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInF1ZXJ5IiwgImxvZ2V2ZW50cyIsICJsb2ciLCAidGltZXN0YW1wIiwgImRhdGUiLCAiRGF0ZSIsICJ0b0xvY2FsZVN0cmluZyIsICJlcnJvciIsICJjb25zb2xlIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z0FydGljbGVJZCIsICJ3Z0lzTWFpblBhZ2UiXQp9Cg==
