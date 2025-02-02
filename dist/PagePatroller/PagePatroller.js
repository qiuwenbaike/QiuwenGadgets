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
var elementId = "footer-info-patroller";
var mountPointSelector = "#footer-info,.page-info";
var storageKey = "ext.gadget.PagePatroller_getPatroller-";
//! src/PagePatroller/modules/util/elementWrap.tsx
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
//! src/PagePatroller/modules/util/elementWrap.tsx
var elementWrap = () => {
  const {
    skin
  } = mw.config.get();
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
      id: elementId,
      className: [elementId, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
    });
  } else if (["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      id: elementId,
      className: "noprint"
    });
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id: elementId,
    className: "noprint"
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
//! src/PagePatroller/modules/util/getPatroller.ts
var getPatroller = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (wgPageName) {
    let action;
    let user;
    let timestamp;
    if (mw.storage.getObject(storageKey + wgPageName)) {
      ({
        action,
        user,
        timestamp
      } = mw.storage.getObject(storageKey + wgPageName));
    } else {
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
          ({
            action
          } = log);
          if (action === "patrol") {
            ({
              user,
              timestamp
            } = log);
            mw.storage.setObject(storageKey + wgPageName, {
              action,
              user,
              timestamp
            }, 60 * 60 * 24 * 30);
          }
        }
      } catch (error) {
        console.error("[PagePatroller] Ajax error in `getPatroller` method:", error);
      }
    }
    return {
      action,
      user,
      timestamp
    };
  });
  return function getPatroller2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/PagePatroller/modules/util/replaceChild.ts
var replaceChild = (element, newChild) => {
  while (element.hasChildNodes()) {
    var _element$firstChild;
    (_element$firstChild = element.firstChild) === null || _element$firstChild === void 0 || _element$firstChild.remove();
  }
  element.append(newChild);
};
//! src/PagePatroller/modules/pagePatroller.ts
var pagePatroller = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* () {
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
      const log = yield getPatroller(wgPageName);
      const {
        action,
        user,
        timestamp
      } = log;
      if (action && user && timestamp) {
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
    return _ref2.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvdXRpbC9lbGVtZW50V3JhcC50c3giLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvYXBpLnRzIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvdXRpbC9nZXRQYXRyb2xsZXIudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy91dGlsL3JlcGxhY2VDaGlsZC50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL3BhZ2VQYXRyb2xsZXIudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvUGFnZVBhdHJvbGxlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImVsZW1lbnRJZFwiOiBcImZvb3Rlci1pbmZvLXBhdHJvbGxlclwiLFxuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwic3RvcmFnZUtleVwiOiBcImV4dC5nYWRnZXQuUGFnZVBhdHJvbGxlcl9nZXRQYXRyb2xsZXItXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZWxlbWVudFdyYXAgPSAoKSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHNraW4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvblxuXHRcdFx0XHRpZD17T1BUSU9OUy5lbGVtZW50SWR9XG5cdFx0XHRcdGNsYXNzTmFtZT17W09QVElPTlMuZWxlbWVudElkLCAncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJywgJ25vcHJpbnQnXX1cblx0XHRcdC8+XG5cdFx0KTtcblx0fSBlbHNlIGlmIChbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIDxsaSBpZD17T1BUSU9OUy5lbGVtZW50SWR9IGNsYXNzTmFtZT17J25vcHJpbnQnfSAvPjtcblx0fVxuXHRyZXR1cm4gPGRpdiBpZD17T1BUSU9OUy5lbGVtZW50SWR9IGNsYXNzTmFtZT17J25vcHJpbnQnfSAvPjtcbn07XG5cbmNvbnN0IG5vdEJlZW5QYXRyb2xsZWRZZXQgPSAoKSA9PiAoXG5cdDxzcGFuIGlkPVwicGFnZV9wYXRyb2xsZXJfX25vdC1wYXRyb2xsZWRcIj57Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0Jyl9PC9zcGFuPlxuKTtcblxuY29uc3QgbG9hZGluZyA9ICgpID0+IDxzcGFuIGlkPVwicGFnZV9wYXRyb2xsZXJfX2xvYWRpbmdcIj57Z2V0TWVzc2FnZSgnTG9hZGluZy4uLicpfTwvc3Bhbj47XG5cbmNvbnN0IHBhdHJvbGxlZCA9ICgpID0+IChcblx0PHNwYW4gaWQ9XCJwYWdlX3BhdHJvbGxlcl9fcGF0cm9sbGVkXCI+XG5cdFx0e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZCcpfVxuXHQ8L3NwYW4+XG4pO1xuXG5jb25zdCBwYXRyb2xsZWRCeSA9ICh0aW1lc3RhbXBUZXh0OiBzdHJpbmcsIHVzZXI6IHN0cmluZykgPT4gKFxuXHQ8c3BhbiBpZD1cInBhZ2VfcGF0cm9sbGVyX19wYXRyb2xsZWQtYnlcIj5cblx0XHR7Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIHdhcyBwYXRyb2xsZWQgYXQgYnknKS5yZXBsYWNlKCckMScsIHRpbWVzdGFtcFRleHQpfVxuXHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKGBVc2VyOiR7dXNlcn1gKX0+e3VzZXJ9PC9hPlxuXHRcdHtnZXRNZXNzYWdlKCdwZXJpb2QnKX1cblx0PC9zcGFuPlxuKTtcblxuY29uc3QgZXJyb3JNZXNzYWdlID0gKCkgPT4gPHNwYW4gaWQ9XCJwYWdlX3BhdHJvbGxlcl9fZXJyb3JcIj57Z2V0TWVzc2FnZSgnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXInKX08L3NwYW4+O1xuXG5leHBvcnQge2VsZW1lbnRXcmFwLCBlcnJvck1lc3NhZ2UsIGxvYWRpbmcsIG5vdEJlZW5QYXRyb2xsZWRZZXQsIHBhdHJvbGxlZCwgcGF0cm9sbGVkQnl9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTG9hZGluZy4uLic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZy4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjliqDovb3mraTpobXpnaLnmoTlt6Hmn6XogIXigKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo5Yqg6LyJ5q2k6aCB6Z2i55qE5beh5p+l6ICF4oCm4oCmJyxcblx0XHR9KSxcblx0XHQnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaGFzIG5vdCBiZWVuIHBhdHJvbGxlZCB5ZXQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouWwmuacquiiq+W3oeafpeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlsJrmnKrooqvlt6Hmn6XjgIInLFxuXHRcdH0pLFxuXHRcdCdUaGlzIHBhZ2Ugd2FzIHBhdHJvbGxlZCBhdCBieSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIHdhcyBwYXRyb2xsZWQgYXQgJDEgYnknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5beh5p+l5LqOJDHvvIzlt6Hmn6XogIXmmK8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5beh5p+l5pa8JDHvvIzlt6Hmn6XogIXmmK8nLFxuXHRcdH0pLFxuXHRcdCdUaGlzIHBhZ2UgaGFzIGJlZW4gcGF0cm9sbGVkLCBvciBoYXMgYmVlbiBtYXJrZWQgYXMgYXV0by1wYXRyb2xsZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5bCa5pyq6KKr5beh5p+l77yM5oiW5bey6Ieq5Yqo5qCH5Li65bey5beh5p+l44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouWwmuacquiiq+W3oeafpe+8jOaIluW3suiHquWLleaomeeIsuW3suW3oeafpeOAgicsXG5cdFx0fSksXG5cdFx0J0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFcnJvciBvY2N1cnMgd2hlbiBmaW5kaW5nIHBhdHJvbGxlci4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5p+l5om+5beh5p+l6ICF5pe25Ye6546w6ZSZ6K+v44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+afpeaJvuW3oeafpeiAheaZguWHuuePvumMr+iqpOOAgicsXG5cdFx0fSksXG5cdFx0cGVyaW9kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdQYWdlUGF0cm9sbGVyLzIuMCcpO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5cbmNvbnN0IGdldFBhdHJvbGxlciA9IGFzeW5jICh3Z1BhZ2VOYW1lOiBzdHJpbmcpID0+IHtcblx0bGV0IGFjdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRsZXQgdXNlcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRsZXQgdGltZXN0YW1wOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHdnUGFnZU5hbWUpKSB7XG5cdFx0KHthY3Rpb24sIHVzZXIsIHRpbWVzdGFtcH0gPSBtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyB3Z1BhZ2VOYW1lKSBhcyB7XG5cdFx0XHRhY3Rpb246IHN0cmluZztcblx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zICYgQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHRpdGxlczogd2dQYWdlTmFtZSxcblx0XHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRcdGxldHlwZTogJ3BhdHJvbCcsXG5cdFx0XHRcdGxldGl0bGU6IHdnUGFnZU5hbWUsXG5cdFx0XHRcdHJ2cHJvcDogJ3RpbWVzdGFtcCcsXG5cdFx0XHRcdHJ2bGltaXQ6IDEsXG5cdFx0XHRcdHJ2ZGlyOiAnbmV3ZXInLFxuXHRcdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRcdG1heGFnZTogNjAwLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRcdGlmIChxdWVyeT8ubG9nZXZlbnRzICYmIHF1ZXJ5LmxvZ2V2ZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgW2xvZ106IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR1c2VyOiBzdHJpbmc7XG5cdFx0XHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0XHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0gPSBxdWVyeS5sb2dldmVudHMgYXMgW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdFx0YWN0aW9uOiBzdHJpbmc7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XTtcblx0XHRcdFx0KHthY3Rpb259ID0gbG9nKTtcblxuXHRcdFx0XHRpZiAoYWN0aW9uID09PSAncGF0cm9sJykge1xuXHRcdFx0XHRcdCh7dXNlciwgdGltZXN0YW1wfSA9IGxvZyk7XG5cblx0XHRcdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyB3Z1BhZ2VOYW1lLCB7YWN0aW9uLCB1c2VyLCB0aW1lc3RhbXB9LCA2MCAqIDYwICogMjQgKiAzMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0Y29uc29sZS5lcnJvcignW1BhZ2VQYXRyb2xsZXJdIEFqYXggZXJyb3IgaW4gYGdldFBhdHJvbGxlcmAgbWV0aG9kOicsIGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge2FjdGlvbiwgdXNlciwgdGltZXN0YW1wfTtcbn07XG5cbmV4cG9ydCB7Z2V0UGF0cm9sbGVyfTtcbiIsICJjb25zdCByZXBsYWNlQ2hpbGQgPSAoZWxlbWVudDogRWxlbWVudCwgbmV3Q2hpbGQ6IEVsZW1lbnQpOiB2b2lkID0+IHtcblx0d2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0ZWxlbWVudC5maXJzdENoaWxkPy5yZW1vdmUoKTtcblx0fVxuXHRlbGVtZW50LmFwcGVuZChuZXdDaGlsZCk7XG59O1xuXG5leHBvcnQge3JlcGxhY2VDaGlsZH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtlbGVtZW50V3JhcCwgZXJyb3JNZXNzYWdlLCBsb2FkaW5nLCBub3RCZWVuUGF0cm9sbGVkWWV0LCBwYXRyb2xsZWQsIHBhdHJvbGxlZEJ5fSBmcm9tICcuL3V0aWwvZWxlbWVudFdyYXAnO1xuaW1wb3J0IHtnZXRQYXRyb2xsZXJ9IGZyb20gJy4vdXRpbC9nZXRQYXRyb2xsZXInO1xuaW1wb3J0IHtyZXBsYWNlQ2hpbGR9IGZyb20gJy4vdXRpbC9yZXBsYWNlQ2hpbGQnO1xuXG5jb25zdCBwYWdlUGF0cm9sbGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gZWxlbWVudFdyYXAoKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLm1vdW50UG9pbnRTZWxlY3RvcilbMF0/LnByZXBlbmQoZWxlbWVudCk7XG5cblx0Ly8gaWYgdGhlcmUgaXMgYSBwYXRyb2wgbGluaywgdGhlIHBhZ2UgbXVzdCBiZSBub3QgcGF0cm9sbGVkXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGF0cm9sbGluaycpLmxlbmd0aCkge1xuXHRcdGVsZW1lbnQuYXBwZW5kKG5vdEJlZW5QYXRyb2xsZWRZZXQoKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gTG9hZCBwYXRyb2xsZXIgaW5mb1xuXHQvLyBhZGQgYExvYWRpbmcuLi5gXG5cdGVsZW1lbnQuYXBwZW5kKGxvYWRpbmcoKSk7XG5cblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgbG9nID0gYXdhaXQgZ2V0UGF0cm9sbGVyKHdnUGFnZU5hbWUpO1xuXHRcdGNvbnN0IHthY3Rpb24sIHVzZXIsIHRpbWVzdGFtcH0gPSBsb2c7XG5cblx0XHRpZiAoYWN0aW9uICYmIHVzZXIgJiYgdGltZXN0YW1wKSB7XG5cdFx0XHRjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcblxuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3BhdHJvbCcpIHtcblx0XHRcdFx0cmVwbGFjZUNoaWxkKGVsZW1lbnQsIHBhdHJvbGxlZEJ5KGRhdGUudG9Mb2NhbGVTdHJpbmcoKSwgdXNlcikpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVwbGFjZUNoaWxkKGVsZW1lbnQsIHBhdHJvbGxlZCgpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVwbGFjZUNoaWxkKGVsZW1lbnQsIHBhdHJvbGxlZCgpKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Ly8gcmV0dXJuIGVycm9yKHMpXG5cdFx0Y29uc29sZS5lcnJvcignW1BhZ2VQYXRyb2xsZXJdOicsIGVycm9yKTtcblx0XHRyZXBsYWNlQ2hpbGQoZWxlbWVudCwgZXJyb3JNZXNzYWdlKCkpO1xuXHR9XG59O1xuXG5leHBvcnQge3BhZ2VQYXRyb2xsZXJ9O1xuIiwgImltcG9ydCB7cGFnZVBhdHJvbGxlcn0gZnJvbSAnLi9tb2R1bGVzL3BhZ2VQYXRyb2xsZXInO1xuXG5jb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnQXJ0aWNsZUlkLCB3Z0lzTWFpblBhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5pZiAod2dOYW1lc3BhY2VOdW1iZXIgPj0gMCAmJiAhd2dJc01haW5QYWdlICYmIHdnQXJ0aWNsZUlkID4gMCkge1xuXHR2b2lkIHBhZ2VQYXRyb2xsZXIoKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7QUFDYixJQUFBQyxxQkFBc0I7QUFDdEIsSUFBQUMsYUFBYzs7QUNGZixJQUFBQyxxQkFBa0JDLFFBQUFDLFFBQUEsa0JBQUEsR0FBQSxDQUFBOztBQ0RsQixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixlQUFBLEdBQWNELGtCQUFBRSxVQUFTO01BQ3RCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QseUNBQUEsR0FBd0NILGtCQUFBRSxVQUFTO01BQ2hEQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsa0NBQUEsR0FBaUNILGtCQUFBRSxVQUFTO01BQ3pDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsdUVBQUEsR0FBc0VILGtCQUFBRSxVQUFTO01BQzlFQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsd0NBQUEsR0FBdUNILGtCQUFBRSxVQUFTO01BQy9DQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFNBQUEsR0FBUUosa0JBQUFFLFVB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O0FBQ0gsWUFBTStDLE1BQUEsTUFBWXhCLGFBQWFHLFVBQVU7QUFDekMsWUFBTTtRQUFDQztRQUFRZDtRQUFNZTtNQUFTLElBQUltQjtBQUVsQyxVQUFJcEIsVUFBVWQsUUFBUWUsV0FBVztBQUNoQyxjQUFNdUMsT0FBYSxJQUFJQyxLQUFLeEMsU0FBUztBQUVyQyxZQUFJRCxXQUFXLFVBQVU7QUFDeEIyQix1QkFBYUMsU0FBUzVDLFlBQVl3RCxLQUFLRSxlQUFlLEdBQUd4RCxJQUFJLENBQUM7UUFDL0QsT0FBTztBQUNOeUMsdUJBQWFDLFNBQVM3QyxVQUFVLENBQUM7UUFDbEM7TUFDRCxPQUFPO0FBQ040QyxxQkFBYUMsU0FBUzdDLFVBQVUsQ0FBQztNQUNsQztJQUNELFNBQVN1QyxPQUFnQjtBQUV4QkMsY0FBUUQsTUFBTSxvQkFBb0JBLEtBQUs7QUFDdkNLLG1CQUFhQyxTQUFTcEMsYUFBYSxDQUFDO0lBQ3JDO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FwQ00yQyxpQkFBQTtBQUFBLFdBQUFDLE1BQUFYLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNITixJQUFNO0VBQUNpQjtFQUFtQkM7RUFBYUM7QUFBWSxJQUFJMUUsR0FBR0MsT0FBT0MsSUFBSTtBQUVyRSxJQUFJc0UscUJBQXFCLEtBQUssQ0FBQ0UsZ0JBQWdCRCxjQUFjLEdBQUc7QUFDL0QsT0FBS1QsY0FBYztBQUNwQjsiLAogICJuYW1lcyI6IFsiZWxlbWVudElkIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJzdG9yYWdlS2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgInBlcmlvZCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZWxlbWVudFdyYXAiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJpZCIsICJjbGFzc05hbWUiLCAiaW5jbHVkZXMiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJub3RCZWVuUGF0cm9sbGVkWWV0IiwgImxvYWRpbmciLCAicGF0cm9sbGVkIiwgInBhdHJvbGxlZEJ5IiwgInRpbWVzdGFtcFRleHQiLCAidXNlciIsICJyZXBsYWNlIiwgImhyZWYiLCAidXRpbCIsICJnZXRVcmwiLCAiY29uY2F0IiwgImVycm9yTWVzc2FnZSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRQYXRyb2xsZXIiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ3Z1BhZ2VOYW1lIiwgImFjdGlvbiIsICJ0aW1lc3RhbXAiLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAicGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgImxpc3QiLCAibGV0eXBlIiwgImxldGl0bGUiLCAicnZwcm9wIiwgInJ2bGltaXQiLCAicnZkaXIiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnkiLCAibG9nZXZlbnRzIiwgImxlbmd0aCIsICJsb2ciLCAic2V0T2JqZWN0IiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInJlcGxhY2VDaGlsZCIsICJlbGVtZW50IiwgIm5ld0NoaWxkIiwgImhhc0NoaWxkTm9kZXMiLCAiX2VsZW1lbnQkZmlyc3RDaGlsZCIsICJmaXJzdENoaWxkIiwgInJlbW92ZSIsICJhcHBlbmQiLCAicGFnZVBhdHJvbGxlciIsICJfcmVmMiIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAicXVlcnlTZWxlY3RvckFsbCIsICJwcmVwZW5kIiwgImRhdGUiLCAiRGF0ZSIsICJ0b0xvY2FsZVN0cmluZyIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z0FydGljbGVJZCIsICJ3Z0lzTWFpblBhZ2UiXQp9Cg==
