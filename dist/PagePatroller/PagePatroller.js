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
      id: elementId,
      className: [elementId, "page-info__item", "citizen-footer__pageinfo-item"]
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
//! src/PagePatroller/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("PagePatroller/2.0");
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
    const {
      wgPageName
    } = mw.config.get();
    try {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        prop: "revisions",
        titles: wgPageName,
        list: "logevents",
        letype: "patrol",
        letitle: wgPageName,
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvZWxlbWVudFdyYXAudHN4IiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvaTE4bi50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL2FwaS50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL3JlcGxhY2VDaGlsZC50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvUGFnZVBhdHJvbGxlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwiZWxlbWVudElkXCI6IFwiZm9vdGVyLWluZm8tcGF0cm9sbGVyXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9ICgpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uXG5cdFx0XHRcdGlkPXtPUFRJT05TLmVsZW1lbnRJZH1cblx0XHRcdFx0Y2xhc3NOYW1lPXtbT1BUSU9OUy5lbGVtZW50SWQsICdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nXX1cblx0XHRcdC8+XG5cdFx0KTtcblx0fSBlbHNlIGlmIChbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBpZD17T1BUSU9OUy5lbGVtZW50SWR9IC8+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGlkPXtPUFRJT05TLmVsZW1lbnRJZH0gLz47XG59O1xuXG5jb25zdCBub3RCZWVuUGF0cm9sbGVkWWV0ID0gKCkgPT4gKFxuXHQ8c3BhbiBpZD1cInBhZ2VfcGF0cm9sbGVyX19ub3QtcGF0cm9sbGVkXCI+e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldCcpfTwvc3Bhbj5cbik7XG5cbmNvbnN0IGxvYWRpbmcgPSAoKSA9PiA8c3BhbiBpZD1cInBhZ2VfcGF0cm9sbGVyX19sb2FkaW5nXCI+e2dldE1lc3NhZ2UoJ0xvYWRpbmcuLi4nKX08L3NwYW4+O1xuXG5jb25zdCBwYXRyb2xsZWQgPSAoKSA9PiAoXG5cdDxzcGFuIGlkPVwicGFnZV9wYXRyb2xsZXJfX3BhdHJvbGxlZFwiPlxuXHRcdHtnZXRNZXNzYWdlKCdUaGlzIHBhZ2UgaGFzIGJlZW4gcGF0cm9sbGVkLCBvciBoYXMgYmVlbiBtYXJrZWQgYXMgYXV0by1wYXRyb2xsZWQnKX1cblx0PC9zcGFuPlxuKTtcblxuY29uc3QgcGF0cm9sbGVkQnkgPSAodGltZXN0YW1wVGV4dDogc3RyaW5nLCB1c2VyOiBzdHJpbmcpID0+IChcblx0PHNwYW4gaWQ9XCJwYWdlX3BhdHJvbGxlcl9fcGF0cm9sbGVkLWJ5XCI+XG5cdFx0e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0IGJ5JykucmVwbGFjZSgnJDEnLCB0aW1lc3RhbXBUZXh0KX1cblx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcjoke3VzZXJ9YCl9Pnt1c2VyfTwvYT5cblx0XHR7Z2V0TWVzc2FnZSgncGVyaW9kJyl9XG5cdDwvc3Bhbj5cbik7XG5cbmNvbnN0IGVycm9yTWVzc2FnZSA9ICgpID0+IDxzcGFuIGlkPVwicGFnZV9wYXRyb2xsZXJfX2Vycm9yXCI+e2dldE1lc3NhZ2UoJ0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyJyl9PC9zcGFuPjtcblxuZXhwb3J0IHtlbGVtZW50V3JhcCwgZXJyb3JNZXNzYWdlLCBsb2FkaW5nLCBub3RCZWVuUGF0cm9sbGVkWWV0LCBwYXRyb2xsZWQsIHBhdHJvbGxlZEJ5fTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0xvYWRpbmcuLi4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yqg6L295q2k6aG16Z2i55qE5beh5p+l6ICF4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOWKoOi8ieatpOmggemdoueahOW3oeafpeiAheKApuKApicsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0LicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlsJrmnKrooqvlt6Hmn6XjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5bCa5pyq6KKr5beh5p+l44CCJyxcblx0XHR9KSxcblx0XHQnVGhpcyBwYWdlIHdhcyBwYXRyb2xsZWQgYXQgYnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0ICQxIGJ5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouW3oeafpeS6jiQx77yM5beh5p+l6ICF5pivJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouW3oeafpeaWvCQx77yM5beh5p+l6ICF5pivJyxcblx0XHR9KSxcblx0XHQnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaGFzIGJlZW4gcGF0cm9sbGVkLCBvciBoYXMgYmVlbiBtYXJrZWQgYXMgYXV0by1wYXRyb2xsZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouWwmuacquiiq+W3oeafpe+8jOaIluW3suiHquWKqOagh+S4uuW3suW3oeafpeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlsJrmnKrooqvlt6Hmn6XvvIzmiJblt7Loh6rli5XmqJnniLLlt7Llt6Hmn6XjgIInLFxuXHRcdH0pLFxuXHRcdCdFcnJvciBvY2N1cnMgd2hlbiBmaW5kaW5nIHBhdHJvbGxlcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXIuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+afpeaJvuW3oeafpeiAheaXtuWHuueOsOmUmeivr+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmn6Xmib7lt6Hmn6XogIXmmYLlh7rnj77pjK/oqqTjgIInLFxuXHRcdH0pLFxuXHRcdHBlcmlvZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcuJyxcblx0XHRcdHpoOiAn44CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnUGFnZVBhdHJvbGxlci8yLjAnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImNvbnN0IHJlcGxhY2VDaGlsZCA9IChlbGVtZW50OiBFbGVtZW50LCBuZXdDaGlsZDogRWxlbWVudCk6IHZvaWQgPT4ge1xuXHR3aGlsZSAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRlbGVtZW50LmZpcnN0Q2hpbGQ/LnJlbW92ZSgpO1xuXHR9XG5cdGVsZW1lbnQuYXBwZW5kKG5ld0NoaWxkKTtcbn07XG5cbmV4cG9ydCB7cmVwbGFjZUNoaWxkfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2VsZW1lbnRXcmFwLCBlcnJvck1lc3NhZ2UsIGxvYWRpbmcsIG5vdEJlZW5QYXRyb2xsZWRZZXQsIHBhdHJvbGxlZCwgcGF0cm9sbGVkQnl9IGZyb20gJy4vZWxlbWVudFdyYXAnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7cmVwbGFjZUNoaWxkfSBmcm9tICcuL3JlcGxhY2VDaGlsZCc7XG5cbmNvbnN0IHBhZ2VQYXRyb2xsZXIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50V3JhcCgpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKVswXT8ucHJlcGVuZChlbGVtZW50KTtcblxuXHQvLyBpZiB0aGVyZSBpcyBhIHBhdHJvbCBsaW5rLCB0aGUgcGFnZSBtdXN0IGJlIG5vdCBwYXRyb2xsZWRcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXRyb2xsaW5rJykubGVuZ3RoKSB7XG5cdFx0ZWxlbWVudC5hcHBlbmQobm90QmVlblBhdHJvbGxlZFlldCgpKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBMb2FkIHBhdHJvbGxlciBpbmZvXG5cdC8vIGFkZCBgTG9hZGluZy4uLmBcblx0ZWxlbWVudC5hcHBlbmQobG9hZGluZygpKTtcblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zICYgQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0dGl0bGVzOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRsZXR5cGU6ICdwYXRyb2wnLFxuXHRcdFx0bGV0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRcdHJ2cHJvcDogJ3RpbWVzdGFtcCcsXG5cdFx0XHRydmxpbWl0OiAxLFxuXHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHR9O1xuXHRcdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRpZiAocXVlcnk/LmxvZ2V2ZW50cyAmJiBxdWVyeS5sb2dldmVudHMubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBbbG9nXTogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdFx0XHR9LFxuXHRcdFx0XSA9IHF1ZXJ5LmxvZ2V2ZW50cyBhcyBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1c2VyOiBzdHJpbmc7XG5cdFx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdFx0YWN0aW9uOiBzdHJpbmc7XG5cdFx0XHRcdH0sXG5cdFx0XHRdO1xuXHRcdFx0Y29uc3Qge2FjdGlvbiwgdXNlcn0gPSBsb2c7XG5cdFx0XHRjb25zdCB7dGltZXN0YW1wfSA9IGxvZztcblx0XHRcdGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuXG5cdFx0XHRpZiAoYWN0aW9uID09PSAncGF0cm9sJykge1xuXHRcdFx0XHRyZXBsYWNlQ2hpbGQoZWxlbWVudCwgcGF0cm9sbGVkQnkoZGF0ZS50b0xvY2FsZVN0cmluZygpLCB1c2VyKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXBsYWNlQ2hpbGQoZWxlbWVudCwgcGF0cm9sbGVkKCkpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXBsYWNlQ2hpbGQoZWxlbWVudCwgcGF0cm9sbGVkKCkpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHQvLyByZXR1cm4gZXJyb3Iocylcblx0XHRjb25zb2xlLmVycm9yKCdbUGFnZVBhdHJvbGxlcl06JywgZXJyb3IpO1xuXHRcdHJlcGxhY2VDaGlsZChlbGVtZW50LCBlcnJvck1lc3NhZ2UoKSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cGFnZVBhdHJvbGxlcn07XG4iLCAiaW1wb3J0IHtwYWdlUGF0cm9sbGVyfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dBcnRpY2xlSWQsIHdnSXNNYWluUGFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmlmICh3Z05hbWVzcGFjZU51bWJlciA+PSAwICYmICF3Z0lzTWFpblBhZ2UgJiYgd2dBcnRpY2xlSWQgPiAwKSB7XG5cdHZvaWQgcGFnZVBhdHJvbGxlcigpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEscUJBQXNCO0FBQ3RCLElBQUFDLFlBQWE7O0FDRGQsSUFBQUMscUJB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ZUFBZSxHQUFHOUMsSUFBSSxDQUFDO1FBQy9ELE9BQU87QUFDTlUsdUJBQWFDLFNBQVNkLFVBQVUsQ0FBQztRQUNsQztNQUNELE9BQU87QUFDTmEscUJBQWFDLFNBQVNkLFVBQVUsQ0FBQztNQUNsQztJQUNELFNBQVNrRCxPQUFnQjtBQUV4QkMsY0FBUUQsTUFBTSxvQkFBb0JBLEtBQUs7QUFDdkNyQyxtQkFBYUMsU0FBU0wsYUFBYSxDQUFDO0lBQ3JDO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FqRU1ZLGlCQUFBO0FBQUEsV0FBQUMsS0FBQThCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNITixJQUFNO0VBQUNDO0VBQW1CQztFQUFhQztBQUFZLElBQUlwRSxHQUFHQyxPQUFPQyxJQUFJO0FBRXJFLElBQUlnRSxxQkFBcUIsS0FBSyxDQUFDRSxnQkFBZ0JELGNBQWMsR0FBRztBQUMvRCxPQUFLbEMsY0FBYztBQUNwQjsiLAogICJuYW1lcyI6IFsibW91bnRQb2ludFNlbGVjdG9yIiwgImVsZW1lbnRJZCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJwZXJpb2QiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImVsZW1lbnRXcmFwIiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaWQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAibm90QmVlblBhdHJvbGxlZFlldCIsICJsb2FkaW5nIiwgInBhdHJvbGxlZCIsICJwYXRyb2xsZWRCeSIsICJ0aW1lc3RhbXBUZXh0IiwgInVzZXIiLCAicmVwbGFjZSIsICJocmVmIiwgInV0aWwiLCAiZ2V0VXJsIiwgImNvbmNhdCIsICJlcnJvck1lc3NhZ2UiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAicmVwbGFjZUNoaWxkIiwgImVsZW1lbnQiLCAibmV3Q2hpbGQiLCAiaGFzQ2hpbGROb2RlcyIsICJfZWxlbWVudCRmaXJzdENoaWxkIiwgImZpcnN0Q2hpbGQiLCAicmVtb3ZlIiwgImFwcGVuZCIsICJwYWdlUGF0cm9sbGVyIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicHJlcGVuZCIsICJsZW5ndGgiLCAid2dQYWdlTmFtZSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgImxpc3QiLCAibGV0eXBlIiwgImxldGl0bGUiLCAicnZwcm9wIiwgInJ2bGltaXQiLCAicnZkaXIiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnkiLCAibG9nZXZlbnRzIiwgImxvZyIsICJ0aW1lc3RhbXAiLCAiZGF0ZSIsICJEYXRlIiwgInRvTG9jYWxlU3RyaW5nIiwgImVycm9yIiwgImNvbnNvbGUiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnQXJ0aWNsZUlkIiwgIndnSXNNYWluUGFnZSJdCn0K
