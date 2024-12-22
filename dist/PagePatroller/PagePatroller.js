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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvZWxlbWVudFdyYXAudHN4IiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvaTE4bi50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL2FwaS50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL3JlcGxhY2VDaGlsZC50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvUGFnZVBhdHJvbGxlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwiZWxlbWVudElkXCI6IFwiZm9vdGVyLWluZm8tcGF0cm9sbGVyXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBlbGVtZW50V3JhcCA9ICgpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uXG5cdFx0XHRcdGlkPXtPUFRJT05TLmVsZW1lbnRJZH1cblx0XHRcdFx0Y2xhc3NOYW1lPXtbT1BUSU9OUy5lbGVtZW50SWQsICdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nXX1cblx0XHRcdC8+XG5cdFx0KTtcblx0fSBlbHNlIGlmIChbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBpZD17T1BUSU9OUy5lbGVtZW50SWR9IC8+O1xuXHR9XG5cdHJldHVybiA8ZGl2IGlkPXtPUFRJT05TLmVsZW1lbnRJZH0gLz47XG59O1xuXG5jb25zdCBub3RCZWVuUGF0cm9sbGVkWWV0ID0gKCkgPT4gKFxuXHQ8c3BhbiBpZD17J3BhZ2VfcGF0cm9sbGVyX19ub3QtcGF0cm9sbGVkJ30+e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldCcpfTwvc3Bhbj5cbik7XG5cbmNvbnN0IGxvYWRpbmcgPSAoKSA9PiA8c3BhbiBpZD17J3BhZ2VfcGF0cm9sbGVyX19sb2FkaW5nJ30+e2dldE1lc3NhZ2UoJ0xvYWRpbmcuLi4nKX08L3NwYW4+O1xuXG5jb25zdCBwYXRyb2xsZWQgPSAoKSA9PiAoXG5cdDxzcGFuIGlkPXsncGFnZV9wYXRyb2xsZXJfX3BhdHJvbGxlZCd9PlxuXHRcdHtnZXRNZXNzYWdlKCdUaGlzIHBhZ2UgaGFzIGJlZW4gcGF0cm9sbGVkLCBvciBoYXMgYmVlbiBtYXJrZWQgYXMgYXV0by1wYXRyb2xsZWQnKX1cblx0PC9zcGFuPlxuKTtcblxuY29uc3QgcGF0cm9sbGVkQnkgPSAodGltZXN0YW1wVGV4dDogc3RyaW5nLCB1c2VyOiBzdHJpbmcpID0+IChcblx0PHNwYW4gaWQ9eydwYWdlX3BhdHJvbGxlcl9fcGF0cm9sbGVkLWJ5J30+XG5cdFx0e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0IGJ5JykucmVwbGFjZSgnJDEnLCB0aW1lc3RhbXBUZXh0KX1cblx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcjoke3VzZXJ9YCl9Pnt1c2VyfTwvYT5cblx0XHR7Z2V0TWVzc2FnZSgncGVyaW9kJyl9XG5cdDwvc3Bhbj5cbik7XG5cbmNvbnN0IGVycm9yTWVzc2FnZSA9ICgpID0+IChcblx0PHNwYW4gaWQ9eydwYWdlX3BhdHJvbGxlcl9fZXJyb3InfT57Z2V0TWVzc2FnZSgnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXInKX08L3NwYW4+XG4pO1xuXG5leHBvcnQge2VsZW1lbnRXcmFwLCBlcnJvck1lc3NhZ2UsIGxvYWRpbmcsIG5vdEJlZW5QYXRyb2xsZWRZZXQsIHBhdHJvbGxlZCwgcGF0cm9sbGVkQnl9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTG9hZGluZy4uLic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZy4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjliqDovb3mraTpobXpnaLnmoTlt6Hmn6XogIXigKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo5Yqg6LyJ5q2k6aCB6Z2i55qE5beh5p+l6ICF4oCm4oCmJyxcblx0XHR9KSxcblx0XHQnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaGFzIG5vdCBiZWVuIHBhdHJvbGxlZCB5ZXQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouWwmuacquiiq+W3oeafpeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlsJrmnKrooqvlt6Hmn6XjgIInLFxuXHRcdH0pLFxuXHRcdCdUaGlzIHBhZ2Ugd2FzIHBhdHJvbGxlZCBhdCBieSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIHdhcyBwYXRyb2xsZWQgYXQgJDEgYnknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5beh5p+l5LqOJDHvvIzlt6Hmn6XogIXmmK8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5beh5p+l5pa8JDHvvIzlt6Hmn6XogIXmmK8nLFxuXHRcdH0pLFxuXHRcdCdUaGlzIHBhZ2UgaGFzIGJlZW4gcGF0cm9sbGVkLCBvciBoYXMgYmVlbiBtYXJrZWQgYXMgYXV0by1wYXRyb2xsZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5bCa5pyq6KKr5beh5p+l77yM5oiW5bey6Ieq5Yqo5qCH5Li65bey5beh5p+l44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouWwmuacquiiq+W3oeafpe+8jOaIluW3suiHquWLleaomeeIsuW3suW3oeafpeOAgicsXG5cdFx0fSksXG5cdFx0J0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFcnJvciBvY2N1cnMgd2hlbiBmaW5kaW5nIHBhdHJvbGxlci4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5p+l5om+5beh5p+l6ICF5pe25Ye6546w6ZSZ6K+v44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+afpeaJvuW3oeafpeiAheaZguWHuuePvumMr+iqpOOAgicsXG5cdFx0fSksXG5cdFx0cGVyaW9kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdQYWdlUGF0cm9sbGVyLzIuMCcpO1xuXG5leHBvcnQge2FwaX07XG4iLCAiY29uc3QgcmVwbGFjZUNoaWxkID0gKGVsZW1lbnQ6IEVsZW1lbnQsIG5ld0NoaWxkOiBFbGVtZW50KTogdm9pZCA9PiB7XG5cdHdoaWxlIChlbGVtZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdGVsZW1lbnQuZmlyc3RDaGlsZD8ucmVtb3ZlKCk7XG5cdH1cblx0ZWxlbWVudC5hcHBlbmQobmV3Q2hpbGQpO1xufTtcblxuZXhwb3J0IHtyZXBsYWNlQ2hpbGR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7ZWxlbWVudFdyYXAsIGVycm9yTWVzc2FnZSwgbG9hZGluZywgbm90QmVlblBhdHJvbGxlZFlldCwgcGF0cm9sbGVkLCBwYXRyb2xsZWRCeX0gZnJvbSAnLi9lbGVtZW50V3JhcCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtyZXBsYWNlQ2hpbGR9IGZyb20gJy4vcmVwbGFjZUNoaWxkJztcblxuY29uc3QgcGFnZVBhdHJvbGxlciA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgZWxlbWVudCA9IGVsZW1lbnRXcmFwKCk7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpWzBdPy5wcmVwZW5kKGVsZW1lbnQpO1xuXG5cdC8vIGlmIHRoZXJlIGlzIGEgcGF0cm9sIGxpbmssIHRoZSBwYWdlIG11c3QgYmUgbm90IHBhdHJvbGxlZFxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhdHJvbGxpbmsnKS5sZW5ndGgpIHtcblx0XHRlbGVtZW50LmFwcGVuZChub3RCZWVuUGF0cm9sbGVkWWV0KCkpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIExvYWQgcGF0cm9sbGVyIGluZm9cblx0Ly8gYWRkIGBMb2FkaW5nLi4uYFxuXHRlbGVtZW50LmFwcGVuZChsb2FkaW5nKCkpO1xuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgJiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHR0aXRsZXM6IHdnUGFnZU5hbWUsXG5cdFx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHRcdGxldHlwZTogJ3BhdHJvbCcsXG5cdFx0XHRsZXRpdGxlOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0cnZwcm9wOiAndGltZXN0YW1wJyxcblx0XHRcdHJ2bGltaXQ6IDEsXG5cdFx0XHRydmRpcjogJ25ld2VyJyxcblx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdG1heGFnZTogNjAwLFxuXHRcdH07XG5cdFx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdGlmIChxdWVyeT8ubG9nZXZlbnRzICYmIHF1ZXJ5LmxvZ2V2ZW50cy5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IFtsb2ddOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR1c2VyOiBzdHJpbmc7XG5cdFx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdFx0YWN0aW9uOiBzdHJpbmc7XG5cdFx0XHRcdH0sXG5cdFx0XHRdID0gcXVlcnkubG9nZXZlbnRzIGFzIFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0XHRhY3Rpb246IHN0cmluZztcblx0XHRcdFx0fSxcblx0XHRcdF07XG5cdFx0XHRjb25zdCB7YWN0aW9uLCB1c2VyfSA9IGxvZztcblx0XHRcdGNvbnN0IHt0aW1lc3RhbXB9ID0gbG9nO1xuXHRcdFx0Y29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG5cblx0XHRcdGlmIChhY3Rpb24gPT09ICdwYXRyb2wnKSB7XG5cdFx0XHRcdHJlcGxhY2VDaGlsZChlbGVtZW50LCBwYXRyb2xsZWRCeShkYXRlLnRvTG9jYWxlU3RyaW5nKCksIHVzZXIpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlcGxhY2VDaGlsZChlbGVtZW50LCBwYXRyb2xsZWQoKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlcGxhY2VDaGlsZChlbGVtZW50LCBwYXRyb2xsZWQoKSk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdC8vIHJldHVybiBlcnJvcihzKVxuXHRcdGNvbnNvbGUuZXJyb3IoJ1tQYWdlUGF0cm9sbGVyXTonLCBlcnJvcik7XG5cdFx0cmVwbGFjZUNoaWxkKGVsZW1lbnQsIGVycm9yTWVzc2FnZSgpKTtcblx0fVxufTtcblxuZXhwb3J0IHtwYWdlUGF0cm9sbGVyfTtcbiIsICJpbXBvcnQge3BhZ2VQYXRyb2xsZXJ9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuY29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z0FydGljbGVJZCwgd2dJc01haW5QYWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuaWYgKHdnTmFtZXNwYWNlTnVtYmVyID49IDAgJiYgIXdnSXNNYWluUGFnZSAmJiB3Z0FydGljbGVJZCA+IDApIHtcblx0dm9pZCBwYWdlUGF0cm9sbGVyKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxxQkFBc0I7QUFDdEIsSUFBQUMsWUFBYTs7QUNEZCxJQUFBQyxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixlQUFBLEdBQWNELGtCQUFBRSxVQUFTO01BQ3RCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QseUNBQUEsR0FBd0NILGtCQUFBRSxVQUFTO01BQ2hEQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsa0NBQUEsR0FBaUNILGtCQUFBRSxVQUFTO01BQ3pDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsdUVBQUEsR0FBc0VILGtCQUFBRSxVQUFTO01BQzlFQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsd0NBQUEsR0FBdUNILGtCQUFBRSxVQUFTO01BQy9DQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFNBQUEsR0FBUUosa0JBQUFFLFVBQVM7TUFDaEJDLElBQUk7TUFDSkUsSUFBSTtJQUNMLENBQUM7RUFDRjtBQUNEO0FBQ0EsSUFBTUMsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEbkNBLElBQU1DLGNBQWNBLE1BQU07QUFDekIsUUFBTTtJQUFDQztFQUFJLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDN0IsTUFBSUgsU0FBUyxXQUFXO0FBQ3ZCLFdBQ0NiLG1DQUFBaUIsUUFBQUMsY0FBQyxXQUFBO01BQ0FDLElBQVlwQjtNQUNacUIsV0FBVyxDQUFTckIsV0FBVyxtQkFBbUIsK0JBQStCO0lBQUEsQ0FDbEY7RUFFRixXQUFXLENBQUMsVUFBVSxlQUFlLFFBQVEsRUFBRXNCLFNBQVNSLElBQUksS0FBS1MsU0FBU0MsY0FBYyxnQkFBZ0IsR0FBRztBQUMxRyxXQUFPdkIsbUNBQUFpQixRQUFBQyxjQUFDLE1BQUE7TUFBR0MsSUFBWXBCO0lBQUEsQ0FBVztFQUNuQztBQUNBLFNBQU9DLG1DQUFBaUIsUUFBQUMsY0FBQyxPQUFBO0lBQUlDLElBQVlwQjtFQUFBLENBQVc7QUFDcEM7QUFFQSxJQUFNeUIsc0JBQXNCQSxNQUMzQnhCLG1DQUFBaUIsUUFBQUMsY0FBQyxRQUFBO0VBQUtDLElBQUk7QUFBQSxHQUFrQ1QsV0FBVyxzQ0FBc0MsQ0FBRTtBQUdoRyxJQUFNZSxVQUFVQSxNQUFNekIsbUNBQUFpQixRQUFBQyxjQUFDLFFBQUE7RUFBS0MsSUFBSTtBQUFBLEdBQTRCVCxXQUFXLFlBQVksQ0FBRTtBQUVyRixJQUFNZ0IsWUFBWUEsTUFDakIxQixtQ0FBQWlCLFFBQUFDLGNBQUMsUUFBQTtFQUFLQyxJQUFJO0FBQUEsR0FDUlQsV0FBVyxvRUFBb0UsQ0FDakY7QUFHRCxJQUFNaUIsY0FBY0EsQ0FBQ0MsZUFBdUJDLFNBQzNDN0IsbUNBQUFpQixRQUFBQyxjQUFDLFFBQUE7RUFBS0MsSUFBSTtBQUFBLEdBQ1JULFdBQVcsK0JBQStCLEVBQUVvQixRQUFRLE1BQU1GLGFBQWEsR0FDeEU1QixtQ0FBQWlCLFFBQUFDLGNBQUMsS0FBQTtFQUFFYSxNQUFNakIsR0FBR2tCLEtBQUtDLE9BQUEsUUFBQUMsT0FBZUwsSUFBSSxDQUFFO0FBQUEsR0FBSUEsSUFBSyxHQUM5Q25CLFdBQVcsUUFBUSxDQUNyQjtBQUdELElBQU15QixlQUFlQSxNQUNwQm5DLG1DQUFBaUIsUUFBQUMsY0FBQyxRQUFBO0VBQUtDLElBQUk7QUFBQSxHQUEwQlQsV0FBVyxxQ0FBcUMsQ0FBRTs7QUV4Q3ZGLElBQUEwQixxQkFBd0JsQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1tQyxPQUFBLEdBQWNELG1CQUFBRSxXQUFVLG1CQUFtQjs7QUNGakQsSUFBTUMsZUFBZUEsQ0FBQ0MsU0FBa0JDLGFBQTRCO0FBQ25FLFNBQU9ELFFBQVFFLGNBQWMsR0FBRztBQUFBLFFBQUFDO0FBQy9CLEtBQUFBLHNCQUFBSCxRQUFRSSxnQkFBQSxRQUFBRCx3QkFBQSxVQUFSQSxvQkFBb0JFLE9BQU87RUFDNUI7QUFDQUwsVUFBUU0sT0FBT0wsUUFBUTtBQUN4Qjs7QUNBQSxJQUFNTSxnQkFBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFnQixhQUEyQjtBQUFBLFFBQUFDO0FBQ2hELFVBQU1WLFVBQVU1QixZQUFZO0FBQzVCLEtBQUFzQyx3QkFBQTVCLFNBQVM2QixpQkFBeUJyRCxrQkFBa0IsRUFBRSxDQUFDLE9BQUEsUUFBQW9ELDBCQUFBLFVBQXZEQSxzQkFBMERFLFFBQVFaLE9BQU87QUFHekUsUUFBSWxCLFNBQVM2QixpQkFBaUIsYUFBYSxFQUFFRSxRQUFRO0FBQ3BEYixjQUFRTSxPQUFPdEIsb0JBQW9CLENBQUM7QUFDcEM7SUFDRDtBQUlBZ0IsWUFBUU0sT0FBT3JCLFFBQVEsQ0FBQztBQUV4QixVQUFNO01BQUM2QjtJQUFVLElBQUl4QyxHQUFHQyxPQUFPQyxJQUFJO0FBRW5DLFFBQUk7QUFDSCxZQUFNdUMsU0FBNEQ7UUFDakVDLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxlQUFlO1FBQ2ZDLE1BQU07UUFDTkMsUUFBUU47UUFDUk8sTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFNBQVNUO1FBQ1RVLFFBQVE7UUFDUkMsU0FBUztRQUNUQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsUUFBUTtNQUNUO0FBQ0EsWUFBTTtRQUFDQztNQUFLLElBQUEsTUFBVWhDLElBQUlyQixJQUFJdUMsTUFBTTtBQUVwQyxVQUFJYyxVQUFBLFFBQUFBLFVBQUEsVUFBQUEsTUFBT0MsYUFBYUQsTUFBTUMsVUFBVWpCLFFBQVE7QUFDL0MsY0FBTSxDQUFDa0IsR0FBRyxJQU1ORixNQUFNQztBQU9WLGNBQU07VUFBQ2Q7VUFBUTNCO1FBQUksSUFBSTBDO0FBQ3ZCLGNBQU07VUFBQ0M7UUFBUyxJQUFJRDtBQUNwQixjQUFNRSxPQUFhLElBQUlDLEtBQUtGLFNBQVM7QUFFckMsWUFBSWhCLFdBQVcsVUFBVTtBQUN4QmpCLHVCQUFhQyxTQUFTYixZQUFZOEMsS0FBS0UsZUFBZSxHQUFHOUMsSUFBSSxDQUFDO1FBQy9ELE9BQU87QUFDTlUsdUJBQWFDLFNBQVNkLFVBQVUsQ0FBQztRQUNsQztNQUNELE9BQU87QUFDTmEscUJBQWFDLFNBQVNkLFVBQVUsQ0FBQztNQUNsQztJQUNELFNBQVNrRCxPQUFnQjtBQUV4QkMsY0FBUUQsTUFBTSxvQkFBb0JBLEtBQUs7QUFDdkNyQyxtQkFBYUMsU0FBU0wsYUFBYSxDQUFDO0lBQ3JDO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FqRU1ZLGlCQUFBO0FBQUEsV0FBQUMsS0FBQThCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNITixJQUFNO0VBQUNDO0VBQW1CQztFQUFhQztBQUFZLElBQUlwRSxHQUFHQyxPQUFPQyxJQUFJO0FBRXJFLElBQUlnRSxxQkFBcUIsS0FBSyxDQUFDRSxnQkFBZ0JELGNBQWMsR0FBRztBQUMvRCxPQUFLbEMsY0FBYztBQUNwQjsiLAogICJuYW1lcyI6IFsibW91bnRQb2ludFNlbGVjdG9yIiwgImVsZW1lbnRJZCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJwZXJpb2QiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImVsZW1lbnRXcmFwIiwgInNraW4iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaWQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAibm90QmVlblBhdHJvbGxlZFlldCIsICJsb2FkaW5nIiwgInBhdHJvbGxlZCIsICJwYXRyb2xsZWRCeSIsICJ0aW1lc3RhbXBUZXh0IiwgInVzZXIiLCAicmVwbGFjZSIsICJocmVmIiwgInV0aWwiLCAiZ2V0VXJsIiwgImNvbmNhdCIsICJlcnJvck1lc3NhZ2UiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAicmVwbGFjZUNoaWxkIiwgImVsZW1lbnQiLCAibmV3Q2hpbGQiLCAiaGFzQ2hpbGROb2RlcyIsICJfZWxlbWVudCRmaXJzdENoaWxkIiwgImZpcnN0Q2hpbGQiLCAicmVtb3ZlIiwgImFwcGVuZCIsICJwYWdlUGF0cm9sbGVyIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAicHJlcGVuZCIsICJsZW5ndGgiLCAid2dQYWdlTmFtZSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgImxpc3QiLCAibGV0eXBlIiwgImxldGl0bGUiLCAicnZwcm9wIiwgInJ2bGltaXQiLCAicnZkaXIiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnkiLCAibG9nZXZlbnRzIiwgImxvZyIsICJ0aW1lc3RhbXAiLCAiZGF0ZSIsICJEYXRlIiwgInRvTG9jYWxlU3RyaW5nIiwgImVycm9yIiwgImNvbnNvbGUiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnQXJ0aWNsZUlkIiwgIndnSXNNYWluUGFnZSJdCn0K
