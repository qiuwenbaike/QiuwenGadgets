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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvZWxlbWVudFdyYXAudHN4IiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvaTE4bi50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL2FwaS50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL3JlcGxhY2VDaGlsZC50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvUGFnZVBhdHJvbGxlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwiZWxlbWVudElkXCI6IFwiZm9vdGVyLWluZm8tcGF0cm9sbGVyXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9ICgpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17J3BhZ2UtaW5mb19faXRlbSd9IGlkPXtPUFRJT05TLmVsZW1lbnRJZH0gLz47XG5cdH0gZWxzZSBpZiAoWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiA8bGkgaWQ9e09QVElPTlMuZWxlbWVudElkfSAvPjtcblx0fVxuXHRyZXR1cm4gPGRpdiBpZD17T1BUSU9OUy5lbGVtZW50SWR9IC8+O1xufTtcblxuY29uc3Qgbm90QmVlblBhdHJvbGxlZFlldCA9ICgpID0+IChcblx0PHNwYW4gaWQ9eydwYWdlX3BhdHJvbGxlcl9fbm90LXBhdHJvbGxlZCd9PntnZXRNZXNzYWdlKCdUaGlzIHBhZ2UgaGFzIG5vdCBiZWVuIHBhdHJvbGxlZCB5ZXQnKX08L3NwYW4+XG4pO1xuXG5jb25zdCBsb2FkaW5nID0gKCkgPT4gPHNwYW4gaWQ9eydwYWdlX3BhdHJvbGxlcl9fbG9hZGluZyd9PntnZXRNZXNzYWdlKCdMb2FkaW5nLi4uJyl9PC9zcGFuPjtcblxuY29uc3QgcGF0cm9sbGVkID0gKCkgPT4gKFxuXHQ8c3BhbiBpZD17J3BhZ2VfcGF0cm9sbGVyX19wYXRyb2xsZWQnfT5cblx0XHR7Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkJyl9XG5cdDwvc3Bhbj5cbik7XG5cbmNvbnN0IHBhdHJvbGxlZEJ5ID0gKHRpbWVzdGFtcFRleHQ6IHN0cmluZywgdXNlcjogc3RyaW5nKSA9PiAoXG5cdDxzcGFuIGlkPXsncGFnZV9wYXRyb2xsZXJfX3BhdHJvbGxlZC1ieSd9PlxuXHRcdHtnZXRNZXNzYWdlKCdUaGlzIHBhZ2Ugd2FzIHBhdHJvbGxlZCBhdCBieScpLnJlcGxhY2UoJyQxJywgdGltZXN0YW1wVGV4dCl9XG5cdFx0PGEgaHJlZj17bXcudXRpbC5nZXRVcmwoYFVzZXI6JHt1c2VyfWApfT57dXNlcn08L2E+XG5cdFx0e2dldE1lc3NhZ2UoJ3BlcmlvZCcpfVxuXHQ8L3NwYW4+XG4pO1xuXG5jb25zdCBlcnJvck1lc3NhZ2UgPSAoKSA9PiAoXG5cdDxzcGFuIGlkPXsncGFnZV9wYXRyb2xsZXJfX2Vycm9yJ30+e2dldE1lc3NhZ2UoJ0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyJyl9PC9zcGFuPlxuKTtcblxuZXhwb3J0IHtlbGVtZW50V3JhcCwgZXJyb3JNZXNzYWdlLCBsb2FkaW5nLCBub3RCZWVuUGF0cm9sbGVkWWV0LCBwYXRyb2xsZWQsIHBhdHJvbGxlZEJ5fTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0xvYWRpbmcuLi4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yqg6L295q2k6aG16Z2i55qE5beh5p+l6ICF4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOWKoOi8ieatpOmggemdoueahOW3oeafpeiAheKApuKApicsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0LicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlsJrmnKrooqvlt6Hmn6XjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5bCa5pyq6KKr5beh5p+l44CCJyxcblx0XHR9KSxcblx0XHQnVGhpcyBwYWdlIHdhcyBwYXRyb2xsZWQgYXQgYnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0ICQxIGJ5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouW3oeafpeS6jiQx77yM5beh5p+l6ICF5pivJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouW3oeafpeaWvCQx77yM5beh5p+l6ICF5pivJyxcblx0XHR9KSxcblx0XHQnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaGFzIGJlZW4gcGF0cm9sbGVkLCBvciBoYXMgYmVlbiBtYXJrZWQgYXMgYXV0by1wYXRyb2xsZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouWwmuacquiiq+W3oeafpe+8jOaIluW3suiHquWKqOagh+S4uuW3suW3oeafpeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlsJrmnKrooqvlt6Hmn6XvvIzmiJblt7Loh6rli5XmqJnniLLlt7Llt6Hmn6XjgIInLFxuXHRcdH0pLFxuXHRcdCdFcnJvciBvY2N1cnMgd2hlbiBmaW5kaW5nIHBhdHJvbGxlcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXIuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+afpeaJvuW3oeafpeiAheaXtuWHuueOsOmUmeivr+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmn6Xmib7lt6Hmn6XogIXmmYLlh7rnj77pjK/oqqTjgIInLFxuXHRcdH0pLFxuXHRcdHBlcmlvZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcuJyxcblx0XHRcdHpoOiAn44CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnUGFnZVBhdHJvbGxlci8yLjAnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImNvbnN0IHJlcGxhY2VDaGlsZCA9IChlbGVtZW50OiBFbGVtZW50LCBuZXdDaGlsZDogRWxlbWVudCk6IHZvaWQgPT4ge1xuXHR3aGlsZSAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRlbGVtZW50LmZpcnN0Q2hpbGQ/LnJlbW92ZSgpO1xuXHR9XG5cdGVsZW1lbnQuYXBwZW5kKG5ld0NoaWxkKTtcbn07XG5cbmV4cG9ydCB7cmVwbGFjZUNoaWxkfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2VsZW1lbnRXcmFwLCBlcnJvck1lc3NhZ2UsIGxvYWRpbmcsIG5vdEJlZW5QYXRyb2xsZWRZZXQsIHBhdHJvbGxlZCwgcGF0cm9sbGVkQnl9IGZyb20gJy4vZWxlbWVudFdyYXAnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7cmVwbGFjZUNoaWxkfSBmcm9tICcuL3JlcGxhY2VDaGlsZCc7XG5cbmNvbnN0IHBhZ2VQYXRyb2xsZXIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50V3JhcCgpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKE9QVElPTlMubW91bnRQb2ludFNlbGVjdG9yKVswXT8ucHJlcGVuZChlbGVtZW50KTtcblxuXHQvLyBpZiB0aGVyZSBpcyBhIHBhdHJvbCBsaW5rLCB0aGUgcGFnZSBtdXN0IGJlIG5vdCBwYXRyb2xsZWRcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXRyb2xsaW5rJykubGVuZ3RoKSB7XG5cdFx0ZWxlbWVudC5hcHBlbmQobm90QmVlblBhdHJvbGxlZFlldCgpKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBMb2FkIHBhdHJvbGxlciBpbmZvXG5cdC8vIGFkZCBgTG9hZGluZy4uLmBcblx0ZWxlbWVudC5hcHBlbmQobG9hZGluZygpKTtcblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zICYgQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0dGl0bGVzOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRsZXR5cGU6ICdwYXRyb2wnLFxuXHRcdFx0bGV0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRcdHJ2cHJvcDogJ3RpbWVzdGFtcCcsXG5cdFx0XHRydmxpbWl0OiAxLFxuXHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHR9O1xuXHRcdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRpZiAocXVlcnk/LmxvZ2V2ZW50cyAmJiBxdWVyeS5sb2dldmVudHMubGVuZ3RoKSB7XG5cdFx0XHRjb25zdCBbbG9nXTogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdFx0XHR9LFxuXHRcdFx0XSA9IHF1ZXJ5LmxvZ2V2ZW50cyBhcyBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1c2VyOiBzdHJpbmc7XG5cdFx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdFx0YWN0aW9uOiBzdHJpbmc7XG5cdFx0XHRcdH0sXG5cdFx0XHRdO1xuXHRcdFx0Y29uc3Qge2FjdGlvbiwgdXNlcn0gPSBsb2c7XG5cdFx0XHRjb25zdCB7dGltZXN0YW1wfSA9IGxvZztcblx0XHRcdGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuXG5cdFx0XHRpZiAoYWN0aW9uID09PSAncGF0cm9sJykge1xuXHRcdFx0XHRyZXBsYWNlQ2hpbGQoZWxlbWVudCwgcGF0cm9sbGVkQnkoZGF0ZS50b0xvY2FsZVN0cmluZygpLCB1c2VyKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXBsYWNlQ2hpbGQoZWxlbWVudCwgcGF0cm9sbGVkKCkpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXBsYWNlQ2hpbGQoZWxlbWVudCwgcGF0cm9sbGVkKCkpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHQvLyByZXR1cm4gZXJyb3Iocylcblx0XHRjb25zb2xlLmVycm9yKCdbUGFnZVBhdHJvbGxlcl06JywgZXJyb3IpO1xuXHRcdHJlcGxhY2VDaGlsZChlbGVtZW50LCBlcnJvck1lc3NhZ2UoKSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cGFnZVBhdHJvbGxlcn07XG4iLCAiaW1wb3J0IHtwYWdlUGF0cm9sbGVyfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dBcnRpY2xlSWQsIHdnSXNNYWluUGFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmlmICh3Z05hbWVzcGFjZU51bWJlciA+PSAwICYmICF3Z0lzTWFpblBhZ2UgJiYgd2dBcnRpY2xlSWQgPiAwKSB7XG5cdHZvaWQgcGFnZVBhdHJvbGxlcigpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEscUJBQXNCO0FBQ3RCLElBQUFDLFlBQWE7O0FDRGQsSUFBQUMscUJBQWtCQyxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNEbEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFB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O0lBQ0QsU0FBU2tELE9BQWdCO0FBRXhCQyxjQUFRRCxNQUFNLG9CQUFvQkEsS0FBSztBQUN2Q3JDLG1CQUFhQyxTQUFTTCxhQUFhLENBQUM7SUFDckM7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQWpFTVksaUJBQUE7QUFBQSxXQUFBQyxLQUFBOEIsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBQ0hOLElBQU07RUFBQ0M7RUFBbUJDO0VBQWFDO0FBQVksSUFBSXBFLEdBQUdDLE9BQU9DLElBQUk7QUFFckUsSUFBSWdFLHFCQUFxQixLQUFLLENBQUNFLGdCQUFnQkQsY0FBYyxHQUFHO0FBQy9ELE9BQUtsQyxjQUFjO0FBQ3BCOyIsCiAgIm5hbWVzIjogWyJtb3VudFBvaW50U2VsZWN0b3IiLCAiZWxlbWVudElkIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgInBlcmlvZCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZWxlbWVudFdyYXAiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiaWQiLCAiaW5jbHVkZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJub3RCZWVuUGF0cm9sbGVkWWV0IiwgImxvYWRpbmciLCAicGF0cm9sbGVkIiwgInBhdHJvbGxlZEJ5IiwgInRpbWVzdGFtcFRleHQiLCAidXNlciIsICJyZXBsYWNlIiwgImhyZWYiLCAidXRpbCIsICJnZXRVcmwiLCAiY29uY2F0IiwgImVycm9yTWVzc2FnZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJyZXBsYWNlQ2hpbGQiLCAiZWxlbWVudCIsICJuZXdDaGlsZCIsICJoYXNDaGlsZE5vZGVzIiwgIl9lbGVtZW50JGZpcnN0Q2hpbGQiLCAiZmlyc3RDaGlsZCIsICJyZW1vdmUiLCAiYXBwZW5kIiwgInBhZ2VQYXRyb2xsZXIiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAicXVlcnlTZWxlY3RvckFsbCIsICJwcmVwZW5kIiwgImxlbmd0aCIsICJ3Z1BhZ2VOYW1lIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0aXRsZXMiLCAibGlzdCIsICJsZXR5cGUiLCAibGV0aXRsZSIsICJydnByb3AiLCAicnZsaW1pdCIsICJydmRpciIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeSIsICJsb2dldmVudHMiLCAibG9nIiwgInRpbWVzdGFtcCIsICJkYXRlIiwgIkRhdGUiLCAidG9Mb2NhbGVTdHJpbmciLCAiZXJyb3IiLCAiY29uc29sZSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dBcnRpY2xlSWQiLCAid2dJc01haW5QYWdlIl0KfQo=
