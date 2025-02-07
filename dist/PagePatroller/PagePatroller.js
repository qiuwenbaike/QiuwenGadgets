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
//! src/PagePatroller/modules/components/footerNotices.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
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
//! src/PagePatroller/modules/components/footerNotices.tsx
var FooterNotice = ({
  children = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)
}) => {
  const {
    skin
  } = mw.config.get();
  const id = elementId;
  const className = elementId;
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
      id,
      className: [className, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
    }, children);
  } else if (["gongbi", "vector", "vector-2022"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      id,
      className: [className, "noprint"]
    }, children);
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id,
    className: [className, "noprint"]
  }, children);
};
var NotPatrolledYet = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__not-patrolled",
  textContent: getMessage("This page has not been patrolled yet")
}));
var Patrolled = ({
  timestamp,
  user
}) => {
  if (timestamp && user) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
      id: "page_patroller__patrolled-by"
    }, getMessage("This page was patrolled at by").replace("$1", timestamp), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
      href: mw.util.getUrl("User:".concat(user))
    }, user), getMessage("period")));
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
    id: "page_patroller__patrolled",
    textContent: getMessage("This page has been patrolled, or has been marked as auto-patrolled")
  }));
};
var ErrorMessage = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__error",
  textContent: getMessage("Error occurs when finding patroller")
}));
//! src/PagePatroller/modules/showPagePatroller.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.JSX"), 1);
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
//! src/PagePatroller/modules/showPagePatroller.tsx
var showPagePatroller = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* () {
    const mountPoint = document.querySelector(mountPointSelector);
    if (!mountPoint) {
      return;
    }
    if (document.querySelector(".patrollink")) {
      mountPoint.prepend(/* @__PURE__ */ import_ext_gadget4.default.createElement(NotPatrolledYet, null));
      return;
    }
    const {
      wgPageName
    } = mw.config.get();
    try {
      const log = yield getPatroller(wgPageName);
      const {
        action,
        user
      } = log;
      let {
        timestamp
      } = log;
      if (action && user && timestamp) {
        timestamp = new Date(timestamp).toLocaleString();
        if (action === "patrol") {
          mountPoint.prepend(/* @__PURE__ */ import_ext_gadget4.default.createElement(Patrolled, {
            timestamp,
            user
          }));
        } else {
          mountPoint.prepend(/* @__PURE__ */ import_ext_gadget4.default.createElement(Patrolled, null));
        }
      } else {
        mountPoint.prepend(/* @__PURE__ */ import_ext_gadget4.default.createElement(Patrolled, null));
      }
    } catch (error) {
      console.error("[PagePatroller] Ajax error:", error);
      mountPoint.prepend(/* @__PURE__ */ import_ext_gadget4.default.createElement(ErrorMessage, null));
    }
  });
  return function showPagePatroller2() {
    return _ref2.apply(this, arguments);
  };
}();
//! src/PagePatroller/PagePatroller.ts
var {
  wgNamespaceNumber,
  wgArticleId,
  wgIsMainPage
} = mw.config.get();
(function() {
  if (wgNamespaceNumber < 0) {
    return;
  }
  if (wgIsMainPage) {
    return;
  }
  if (!(wgArticleId > 0)) {
    return;
  }
  void showPagePatroller();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvY29tcG9uZW50cy9mb290ZXJOb3RpY2VzLnRzeCIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9zaG93UGFnZVBhdHJvbGxlci50c3giLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy91dGlsL2dldFBhdHJvbGxlci50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9QYWdlUGF0cm9sbGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiZWxlbWVudElkXCI6IFwiZm9vdGVyLWluZm8tcGF0cm9sbGVyXCIsXG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5QYWdlUGF0cm9sbGVyX2dldFBhdHJvbGxlci1cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmludGVyZmFjZSBGb290ZXJOb3RpY2VQcm9wcyB7XG5cdGNoaWxkcmVuPzogUmVhY3RFbGVtZW50O1xufVxuXG5jb25zdCBGb290ZXJOb3RpY2UgPSAoe2NoaWxkcmVuID0gPD48Lz59OiBGb290ZXJOb3RpY2VQcm9wcykgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlkID0gT1BUSU9OUy5lbGVtZW50SWQ7XG5cdGNvbnN0IGNsYXNzTmFtZSA9IE9QVElPTlMuZWxlbWVudElkO1xuXG5cdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNlY3Rpb24gaWQ9e2lkfSBjbGFzc05hbWU9e1tjbGFzc05hbWUsICdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nLCAnbm9wcmludCddfT5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH0gZWxzZSBpZiAoWydnb25nYmknLCAndmVjdG9yJywgJ3ZlY3Rvci0yMDIyJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8bGkgaWQ9e2lkfSBjbGFzc05hbWU9e1tjbGFzc05hbWUsICdub3ByaW50J119PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9e1tjbGFzc05hbWUsICdub3ByaW50J119PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3QgTm90UGF0cm9sbGVkWWV0ID0gKCkgPT4gKFxuXHQ8Rm9vdGVyTm90aWNlPlxuXHRcdDxzcGFuIGlkPVwicGFnZV9wYXRyb2xsZXJfX25vdC1wYXRyb2xsZWRcIiB0ZXh0Q29udGVudD17Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0Jyl9IC8+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuaW50ZXJmYWNlIFBhdHJvbGxlZFByb3BzIHtcblx0dGltZXN0YW1wPzogc3RyaW5nO1xuXHR1c2VyPzogc3RyaW5nO1xufVxuXG5jb25zdCBQYXRyb2xsZWQgPSAoe3RpbWVzdGFtcCwgdXNlcn06IFBhdHJvbGxlZFByb3BzKSA9PiB7XG5cdGlmICh0aW1lc3RhbXAgJiYgdXNlcikge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Rm9vdGVyTm90aWNlPlxuXHRcdFx0XHQ8c3BhbiBpZD1cInBhZ2VfcGF0cm9sbGVyX19wYXRyb2xsZWQtYnlcIj5cblx0XHRcdFx0XHR7Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIHdhcyBwYXRyb2xsZWQgYXQgYnknKS5yZXBsYWNlKCckMScsIHRpbWVzdGFtcCl9XG5cdFx0XHRcdFx0PGEgaHJlZj17bXcudXRpbC5nZXRVcmwoYFVzZXI6JHt1c2VyfWApfT57dXNlcn08L2E+XG5cdFx0XHRcdFx0e2dldE1lc3NhZ2UoJ3BlcmlvZCcpfVxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L0Zvb3Rlck5vdGljZT5cblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8Rm9vdGVyTm90aWNlPlxuXHRcdFx0PHNwYW5cblx0XHRcdFx0aWQ9XCJwYWdlX3BhdHJvbGxlcl9fcGF0cm9sbGVkXCJcblx0XHRcdFx0dGV4dENvbnRlbnQ9e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZCcpfVxuXHRcdFx0Lz5cblx0XHQ8L0Zvb3Rlck5vdGljZT5cblx0KTtcbn07XG5cbmNvbnN0IEVycm9yTWVzc2FnZSA9ICgpID0+IChcblx0PEZvb3Rlck5vdGljZT5cblx0XHQ8c3BhbiBpZD1cInBhZ2VfcGF0cm9sbGVyX19lcnJvclwiIHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdFcnJvciBvY2N1cnMgd2hlbiBmaW5kaW5nIHBhdHJvbGxlcicpfSAvPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmV4cG9ydCB7Rm9vdGVyTm90aWNlLCBOb3RQYXRyb2xsZWRZZXQsIFBhdHJvbGxlZCwgRXJyb3JNZXNzYWdlfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J0xvYWRpbmcuLi4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xvYWRpbmcuLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2j5Zyo5Yqg6L295q2k6aG16Z2i55qE5beh5p+l6ICF4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOWKoOi8ieatpOmggemdoueahOW3oeafpeiAheKApuKApicsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0LicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlsJrmnKrooqvlt6Hmn6XjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5bCa5pyq6KKr5beh5p+l44CCJyxcblx0XHR9KSxcblx0XHQnVGhpcyBwYWdlIHdhcyBwYXRyb2xsZWQgYXQgYnknOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0ICQxIGJ5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouW3oeafpeS6jiQx77yM5beh5p+l6ICF5pivJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouW3oeafpeaWvCQx77yM5beh5p+l6ICF5pivJyxcblx0XHR9KSxcblx0XHQnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaGFzIGJlZW4gcGF0cm9sbGVkLCBvciBoYXMgYmVlbiBtYXJrZWQgYXMgYXV0by1wYXRyb2xsZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouWwmuacquiiq+W3oeafpe+8jOaIluW3suiHquWKqOagh+S4uuW3suW3oeafpeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlsJrmnKrooqvlt6Hmn6XvvIzmiJblt7Loh6rli5XmqJnniLLlt7Llt6Hmn6XjgIInLFxuXHRcdH0pLFxuXHRcdCdFcnJvciBvY2N1cnMgd2hlbiBmaW5kaW5nIHBhdHJvbGxlcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXIuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+afpeaJvuW3oeafpeiAheaXtuWHuueOsOmUmeivr+OAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmn6Xmib7lt6Hmn6XogIXmmYLlh7rnj77pjK/oqqTjgIInLFxuXHRcdH0pLFxuXHRcdHBlcmlvZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcuJyxcblx0XHRcdHpoOiAn44CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7RXJyb3JNZXNzYWdlLCBOb3RQYXRyb2xsZWRZZXQsIFBhdHJvbGxlZH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvb3Rlck5vdGljZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0UGF0cm9sbGVyfSBmcm9tICcuL3V0aWwvZ2V0UGF0cm9sbGVyJztcblxuY29uc3Qgc2hvd1BhZ2VQYXRyb2xsZXIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IG1vdW50UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cdGlmICghbW91bnRQb2ludCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIGlmIHRoZXJlIGlzIGEgcGF0cm9sIGxpbmssIHRoZSBwYWdlIG11c3QgYmUgbm90IHBhdHJvbGxlZFxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdHJvbGxpbmsnKSkge1xuXHRcdG1vdW50UG9pbnQucHJlcGVuZCg8Tm90UGF0cm9sbGVkWWV0IC8+KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBMb2FkIHBhdHJvbGxlciBpbmZvcm1hdGlvblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBsb2cgPSBhd2FpdCBnZXRQYXRyb2xsZXIod2dQYWdlTmFtZSk7XG5cdFx0Y29uc3Qge2FjdGlvbiwgdXNlcn0gPSBsb2c7XG5cdFx0bGV0IHt0aW1lc3RhbXB9ID0gbG9nO1xuXG5cdFx0aWYgKGFjdGlvbiAmJiB1c2VyICYmIHRpbWVzdGFtcCkge1xuXHRcdFx0dGltZXN0YW1wID0gbmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygpO1xuXG5cdFx0XHRpZiAoYWN0aW9uID09PSAncGF0cm9sJykge1xuXHRcdFx0XHRtb3VudFBvaW50LnByZXBlbmQoPFBhdHJvbGxlZCB0aW1lc3RhbXA9e3RpbWVzdGFtcH0gdXNlcj17dXNlcn0gLz4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bW91bnRQb2ludC5wcmVwZW5kKDxQYXRyb2xsZWQgLz4pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtb3VudFBvaW50LnByZXBlbmQoPFBhdHJvbGxlZCAvPik7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdC8vIHJldHVybiBlcnJvcihzKVxuXHRcdGNvbnNvbGUuZXJyb3IoJ1tQYWdlUGF0cm9sbGVyXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRtb3VudFBvaW50LnByZXBlbmQoPEVycm9yTWVzc2FnZSAvPik7XG5cdH1cbn07XG5cbmV4cG9ydCB7c2hvd1BhZ2VQYXRyb2xsZXJ9O1xuIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnUGFnZVBhdHJvbGxlci8yLjAnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuXG5jb25zdCBnZXRQYXRyb2xsZXIgPSBhc3luYyAod2dQYWdlTmFtZTogc3RyaW5nKSA9PiB7XG5cdGxldCBhY3Rpb246IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0bGV0IHVzZXI6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0bGV0IHRpbWVzdGFtcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyB3Z1BhZ2VOYW1lKSkge1xuXHRcdCh7YWN0aW9uLCB1c2VyLCB0aW1lc3RhbXB9ID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgd2dQYWdlTmFtZSkgYXMge1xuXHRcdFx0YWN0aW9uOiBzdHJpbmc7XG5cdFx0XHR1c2VyOiBzdHJpbmc7XG5cdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyAmIEFwaVF1ZXJ5TG9nRXZlbnRzUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHR0aXRsZXM6IHdnUGFnZU5hbWUsXG5cdFx0XHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdFx0XHRsZXR5cGU6ICdwYXRyb2wnLFxuXHRcdFx0XHRsZXRpdGxlOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRydnByb3A6ICd0aW1lc3RhbXAnLFxuXHRcdFx0XHRydmxpbWl0OiAxLFxuXHRcdFx0XHRydmRpcjogJ25ld2VyJyxcblx0XHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHRcdH07XG5cdFx0XHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0XHRpZiAocXVlcnk/LmxvZ2V2ZW50cyAmJiBxdWVyeS5sb2dldmVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnN0IFtsb2ddOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdFx0XHRhY3Rpb246IHN0cmluZztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdID0gcXVlcnkubG9nZXZlbnRzIGFzIFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR1c2VyOiBzdHJpbmc7XG5cdFx0XHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0XHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF07XG5cdFx0XHRcdCh7YWN0aW9ufSA9IGxvZyk7XG5cblx0XHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3BhdHJvbCcpIHtcblx0XHRcdFx0XHQoe3VzZXIsIHRpbWVzdGFtcH0gPSBsb2cpO1xuXG5cdFx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgd2dQYWdlTmFtZSwge2FjdGlvbiwgdXNlciwgdGltZXN0YW1wfSwgNjAgKiA2MCAqIDI0ICogMzApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tQYWdlUGF0cm9sbGVyXSBBamF4IGVycm9yIGluIGBnZXRQYXRyb2xsZXJgIG1ldGhvZDonLCBlcnJvcik7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHthY3Rpb24sIHVzZXIsIHRpbWVzdGFtcH07XG59O1xuXG5leHBvcnQge2dldFBhdHJvbGxlcn07XG4iLCAiaW1wb3J0IHtzaG93UGFnZVBhdHJvbGxlcn0gZnJvbSAnLi9tb2R1bGVzL3Nob3dQYWdlUGF0cm9sbGVyJztcblxuY29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z0FydGljbGVJZCwgd2dJc01haW5QYWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuKGZ1bmN0aW9uICgpIHtcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICh3Z0lzTWFpblBhZ2UpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoISh3Z0FydGljbGVJZCA+IDApKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBzaG93UGFnZVBhdHJvbGxlcigpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7QUFDYixJQUFBQyxxQkFBc0I7QUFDdEIsSUFBQUMsYUFBYzs7QUNGZixJQUFBQyxxQkFBa0NDLFFBQUFDLFFBQUEsZ0JBQUEsR0FBQSxDQUFBOztBQ0RsQyxJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixlQUFBLEdBQWNELGtCQUFBRSxVQUFTO01BQ3RCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lB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Q01tQyxxQkFBQTtBQUFBLFdBQUFDLE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUdITixJQUFNO0VBQUNPO0VBQW1CQztFQUFhQztBQUFZLElBQUk3RCxHQUFHQyxPQUFPQyxJQUFJO0NBRXBFLFdBQVk7QUFDWixNQUFJeUQsb0JBQW9CLEdBQUc7QUFDMUI7RUFDRDtBQUVBLE1BQUlFLGNBQWM7QUFDakI7RUFDRDtBQUVBLE1BQUksRUFBRUQsY0FBYyxJQUFJO0FBQ3ZCO0VBQ0Q7QUFFQSxPQUFLUCxrQkFBa0I7QUFDeEIsR0FBRzsiLAogICJuYW1lcyI6IFsiZWxlbWVudElkIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJzdG9yYWdlS2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgInBlcmlvZCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiRm9vdGVyTm90aWNlIiwgImNoaWxkcmVuIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaWQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiTm90UGF0cm9sbGVkWWV0IiwgInRleHRDb250ZW50IiwgIlBhdHJvbGxlZCIsICJ0aW1lc3RhbXAiLCAidXNlciIsICJyZXBsYWNlIiwgImhyZWYiLCAidXRpbCIsICJnZXRVcmwiLCAiY29uY2F0IiwgIkVycm9yTWVzc2FnZSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiZ2V0UGF0cm9sbGVyIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAid2dQYWdlTmFtZSIsICJhY3Rpb24iLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAicGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgImxpc3QiLCAibGV0eXBlIiwgImxldGl0bGUiLCAicnZwcm9wIiwgInJ2bGltaXQiLCAicnZkaXIiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnkiLCAibG9nZXZlbnRzIiwgImxlbmd0aCIsICJsb2ciLCAic2V0T2JqZWN0IiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInNob3dQYWdlUGF0cm9sbGVyIiwgIl9yZWYyIiwgIm1vdW50UG9pbnQiLCAicHJlcGVuZCIsICJEYXRlIiwgInRvTG9jYWxlU3RyaW5nIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnQXJ0aWNsZUlkIiwgIndnSXNNYWluUGFnZSJdCn0K
