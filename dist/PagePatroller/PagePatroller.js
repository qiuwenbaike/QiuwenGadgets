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
  id = elementId,
  children = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)
}) => {
  const {
    skin
  } = mw.config.get();
  return /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, skin === "citizen" ? /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
    id,
    className: [id, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
  }, children) : ["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info") ? /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
    id,
    className: [id, "noprint"]
  }, children) : /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id,
    className: [id, "noprint"]
  }, children));
};
var NotPatrolledYet = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__not-patrolled",
  textContent: getMessage("This page has not been patrolled yet")
}));
var Loading = () => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__loading",
  textContent: getMessage("Loading...")
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
    const footerElement = /* @__PURE__ */ import_ext_gadget4.default.createElement(Loading, null);
    mountPoint.prepend(footerElement);
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
          footerElement.replaceWith(/* @__PURE__ */ import_ext_gadget4.default.createElement(Patrolled, {
            timestamp: date.toLocaleString(),
            user
          }));
        } else {
          footerElement.replaceWith(/* @__PURE__ */ import_ext_gadget4.default.createElement(Patrolled, {
            timestamp: "",
            user: ""
          }));
        }
      } else {
        footerElement.replaceWith(/* @__PURE__ */ import_ext_gadget4.default.createElement(Patrolled, {
          timestamp: "",
          user: ""
        }));
      }
    } catch (error) {
      console.error("[PagePatroller]:", error);
      footerElement.replaceWith(/* @__PURE__ */ import_ext_gadget4.default.createElement(ErrorMessage, null));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvY29tcG9uZW50cy9mb290ZXJOb3RpY2VzLnRzeCIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9zaG93UGFnZVBhdHJvbGxlci50c3giLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy91dGlsL2dldFBhdHJvbGxlci50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9QYWdlUGF0cm9sbGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiZWxlbWVudElkXCI6IFwiZm9vdGVyLWluZm8tcGF0cm9sbGVyXCIsXG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5QYWdlUGF0cm9sbGVyX2dldFBhdHJvbGxlci1cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmludGVyZmFjZSBGb290ZXJOb3RpY2VQcm9wcyB7XG5cdGlkPzogc3RyaW5nO1xuXHRjaGlsZHJlbj86IFJlYWN0RWxlbWVudDtcbn1cblxuY29uc3QgRm9vdGVyTm90aWNlID0gKHtpZCA9IE9QVElPTlMuZWxlbWVudElkLCBjaGlsZHJlbiA9IDw+PC8+fTogRm9vdGVyTm90aWNlUHJvcHMpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHtza2luID09PSAnY2l0aXplbicgPyAoXG5cdFx0XHRcdDxzZWN0aW9uIGlkPXtpZH0gY2xhc3NOYW1lPXtbaWQsICdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdCkgOiBbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpID8gKFxuXHRcdFx0XHQ8bGkgaWQ9e2lkfSBjbGFzc05hbWU9e1tpZCwgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PGRpdiBpZD17aWR9IGNsYXNzTmFtZT17W2lkLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmNvbnN0IE5vdFBhdHJvbGxlZFlldCA9ICgpID0+IChcblx0PEZvb3Rlck5vdGljZT5cblx0XHQ8c3BhbiBpZD1cInBhZ2VfcGF0cm9sbGVyX19ub3QtcGF0cm9sbGVkXCIgdGV4dENvbnRlbnQ9e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldCcpfSAvPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmNvbnN0IExvYWRpbmcgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2U+XG5cdFx0PHNwYW4gaWQ9XCJwYWdlX3BhdHJvbGxlcl9fbG9hZGluZ1wiIHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdMb2FkaW5nLi4uJyl9IC8+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuaW50ZXJmYWNlIFBhdHJvbGxlZFByb3BzIHtcblx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdHVzZXI6IHN0cmluZztcbn1cblxuY29uc3QgUGF0cm9sbGVkID0gKHt0aW1lc3RhbXAsIHVzZXJ9OiBQYXRyb2xsZWRQcm9wcykgPT4ge1xuXHRpZiAodGltZXN0YW1wICYmIHVzZXIpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZvb3Rlck5vdGljZT5cblx0XHRcdFx0PHNwYW4gaWQ9XCJwYWdlX3BhdHJvbGxlcl9fcGF0cm9sbGVkLWJ5XCI+XG5cdFx0XHRcdFx0e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0IGJ5JykucmVwbGFjZSgnJDEnLCB0aW1lc3RhbXApfVxuXHRcdFx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKGBVc2VyOiR7dXNlcn1gKX0+e3VzZXJ9PC9hPlxuXHRcdFx0XHRcdHtnZXRNZXNzYWdlKCdwZXJpb2QnKX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9Gb290ZXJOb3RpY2U+XG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PEZvb3Rlck5vdGljZT5cblx0XHRcdDxzcGFuXG5cdFx0XHRcdGlkPVwicGFnZV9wYXRyb2xsZXJfX3BhdHJvbGxlZFwiXG5cdFx0XHRcdHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdUaGlzIHBhZ2UgaGFzIGJlZW4gcGF0cm9sbGVkLCBvciBoYXMgYmVlbiBtYXJrZWQgYXMgYXV0by1wYXRyb2xsZWQnKX1cblx0XHRcdC8+XG5cdFx0PC9Gb290ZXJOb3RpY2U+XG5cdCk7XG59O1xuXG5jb25zdCBFcnJvck1lc3NhZ2UgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2U+XG5cdFx0PHNwYW4gaWQ9XCJwYWdlX3BhdHJvbGxlcl9fZXJyb3JcIiB0ZXh0Q29udGVudD17Z2V0TWVzc2FnZSgnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXInKX0gLz5cblx0PC9Gb290ZXJOb3RpY2U+XG4pO1xuXG5leHBvcnQge0Zvb3Rlck5vdGljZSwgTm90UGF0cm9sbGVkWWV0LCBMb2FkaW5nLCBQYXRyb2xsZWQsIEVycm9yTWVzc2FnZX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdMb2FkaW5nLi4uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWKoOi9veatpOmhtemdoueahOW3oeafpeiAheKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjliqDovInmraTpoIHpnaLnmoTlt6Hmn6XogIXigKbigKYnLFxuXHRcdH0pLFxuXHRcdCdUaGlzIHBhZ2UgaGFzIG5vdCBiZWVuIHBhdHJvbGxlZCB5ZXQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5bCa5pyq6KKr5beh5p+l44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouWwmuacquiiq+W3oeafpeOAgicsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0IGJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2Ugd2FzIHBhdHJvbGxlZCBhdCAkMSBieScsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlt6Hmn6Xkuo4kMe+8jOW3oeafpeiAheaYrycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlt6Hmn6XmlrwkMe+8jOW3oeafpeiAheaYrycsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlsJrmnKrooqvlt6Hmn6XvvIzmiJblt7Loh6rliqjmoIfkuLrlt7Llt6Hmn6XjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5bCa5pyq6KKr5beh5p+l77yM5oiW5bey6Ieq5YuV5qiZ54iy5bey5beh5p+l44CCJyxcblx0XHR9KSxcblx0XHQnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyLicsXG5cdFx0XHQnemgtaGFucyc6ICfmn6Xmib7lt6Hmn6XogIXml7blh7rnjrDplJnor6/jgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5p+l5om+5beh5p+l6ICF5pmC5Ye654++6Yyv6Kqk44CCJyxcblx0XHR9KSxcblx0XHRwZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0Vycm9yTWVzc2FnZSwgTG9hZGluZywgTm90UGF0cm9sbGVkWWV0LCBQYXRyb2xsZWR9IGZyb20gJy4vY29tcG9uZW50cy9mb290ZXJOb3RpY2VzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldFBhdHJvbGxlcn0gZnJvbSAnLi91dGlsL2dldFBhdHJvbGxlcic7XG5cbmNvbnN0IHNob3dQYWdlUGF0cm9sbGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBtb3VudFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoIW1vdW50UG9pbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBpZiB0aGVyZSBpcyBhIHBhdHJvbCBsaW5rLCB0aGUgcGFnZSBtdXN0IGJlIG5vdCBwYXRyb2xsZWRcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXRyb2xsaW5rJykpIHtcblx0XHRtb3VudFBvaW50LnByZXBlbmQoPE5vdFBhdHJvbGxlZFlldCAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gTG9hZCBwYXRyb2xsZXIgaW5mb1xuXHQvLyBhZGQgYExvYWRpbmcuLi5gXG5cdGNvbnN0IGZvb3RlckVsZW1lbnQgPSA8TG9hZGluZyAvPjtcblx0bW91bnRQb2ludC5wcmVwZW5kKGZvb3RlckVsZW1lbnQpO1xuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IGxvZyA9IGF3YWl0IGdldFBhdHJvbGxlcih3Z1BhZ2VOYW1lKTtcblx0XHRjb25zdCB7YWN0aW9uLCB1c2VyLCB0aW1lc3RhbXB9ID0gbG9nO1xuXG5cdFx0aWYgKGFjdGlvbiAmJiB1c2VyICYmIHRpbWVzdGFtcCkge1xuXHRcdFx0Y29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG5cblx0XHRcdGlmIChhY3Rpb24gPT09ICdwYXRyb2wnKSB7XG5cdFx0XHRcdGZvb3RlckVsZW1lbnQucmVwbGFjZVdpdGgoPFBhdHJvbGxlZCB0aW1lc3RhbXA9e2RhdGUudG9Mb2NhbGVTdHJpbmcoKX0gdXNlcj17dXNlcn0gLz4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9vdGVyRWxlbWVudC5yZXBsYWNlV2l0aCg8UGF0cm9sbGVkIHRpbWVzdGFtcD17Jyd9IHVzZXI9eycnfSAvPik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvb3RlckVsZW1lbnQucmVwbGFjZVdpdGgoPFBhdHJvbGxlZCB0aW1lc3RhbXA9eycnfSB1c2VyPXsnJ30gLz4pO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHQvLyByZXR1cm4gZXJyb3Iocylcblx0XHRjb25zb2xlLmVycm9yKCdbUGFnZVBhdHJvbGxlcl06JywgZXJyb3IpO1xuXHRcdGZvb3RlckVsZW1lbnQucmVwbGFjZVdpdGgoPEVycm9yTWVzc2FnZSAvPik7XG5cdH1cbn07XG5cbmV4cG9ydCB7c2hvd1BhZ2VQYXRyb2xsZXJ9O1xuIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnUGFnZVBhdHJvbGxlci8yLjAnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuXG5jb25zdCBnZXRQYXRyb2xsZXIgPSBhc3luYyAod2dQYWdlTmFtZTogc3RyaW5nKSA9PiB7XG5cdGxldCBhY3Rpb246IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0bGV0IHVzZXI6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0bGV0IHRpbWVzdGFtcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyB3Z1BhZ2VOYW1lKSkge1xuXHRcdCh7YWN0aW9uLCB1c2VyLCB0aW1lc3RhbXB9ID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgd2dQYWdlTmFtZSkgYXMge1xuXHRcdFx0YWN0aW9uOiBzdHJpbmc7XG5cdFx0XHR1c2VyOiBzdHJpbmc7XG5cdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyAmIEFwaVF1ZXJ5TG9nRXZlbnRzUGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHR0aXRsZXM6IHdnUGFnZU5hbWUsXG5cdFx0XHRcdGxpc3Q6ICdsb2dldmVudHMnLFxuXHRcdFx0XHRsZXR5cGU6ICdwYXRyb2wnLFxuXHRcdFx0XHRsZXRpdGxlOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRydnByb3A6ICd0aW1lc3RhbXAnLFxuXHRcdFx0XHRydmxpbWl0OiAxLFxuXHRcdFx0XHRydmRpcjogJ25ld2VyJyxcblx0XHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHRcdH07XG5cdFx0XHRjb25zdCB7cXVlcnl9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0XHRpZiAocXVlcnk/LmxvZ2V2ZW50cyAmJiBxdWVyeS5sb2dldmVudHMubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnN0IFtsb2ddOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdFx0XHRhY3Rpb246IHN0cmluZztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdID0gcXVlcnkubG9nZXZlbnRzIGFzIFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR1c2VyOiBzdHJpbmc7XG5cdFx0XHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0XHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF07XG5cdFx0XHRcdCh7YWN0aW9ufSA9IGxvZyk7XG5cblx0XHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3BhdHJvbCcpIHtcblx0XHRcdFx0XHQoe3VzZXIsIHRpbWVzdGFtcH0gPSBsb2cpO1xuXG5cdFx0XHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgd2dQYWdlTmFtZSwge2FjdGlvbiwgdXNlciwgdGltZXN0YW1wfSwgNjAgKiA2MCAqIDI0ICogMzApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tQYWdlUGF0cm9sbGVyXSBBamF4IGVycm9yIGluIGBnZXRQYXRyb2xsZXJgIG1ldGhvZDonLCBlcnJvcik7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHthY3Rpb24sIHVzZXIsIHRpbWVzdGFtcH07XG59O1xuXG5leHBvcnQge2dldFBhdHJvbGxlcn07XG4iLCAiaW1wb3J0IHtzaG93UGFnZVBhdHJvbGxlcn0gZnJvbSAnLi9tb2R1bGVzL3Nob3dQYWdlUGF0cm9sbGVyJztcblxuY29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z0FydGljbGVJZCwgd2dJc01haW5QYWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuKGZ1bmN0aW9uICgpIHtcblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICh3Z0lzTWFpblBhZ2UpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoISh3Z0FydGljbGVJZCA+IDApKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBzaG93UGFnZVBhdHJvbGxlcigpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SW5CLFVBQVVmLFFBQVFELFdBQVc7QUFDaEMsY0FBTStDLE9BQWEsSUFBSUMsS0FBS2hELFNBQVM7QUFFckMsWUFBSWdCLFdBQVcsVUFBVTtBQUN4QjhCLHdCQUFjRyxZQUFZekMsbUNBQUF2QixRQUFBQyxjQUFDYSxXQUFBO1lBQVVDLFdBQVcrQyxLQUFLRyxlQUFlO1lBQUdqRDtVQUFBLENBQVksQ0FBRTtRQUN0RixPQUFPO0FBQ042Qyx3QkFBY0csWUFBWXpDLG1DQUFBdkIsUUFBQUMsY0FBQ2EsV0FBQTtZQUFVQyxXQUFXO1lBQUlDLE1BQU07VUFBQSxDQUFJLENBQUU7UUFDakU7TUFDRCxPQUFPO0FBQ042QyxzQkFBY0csWUFBWXpDLG1DQUFBdkIsUUFBQUMsY0FBQ2EsV0FBQTtVQUFVQyxXQUFXO1VBQUlDLE1BQU07UUFBQSxDQUFJLENBQUU7TUFDakU7SUFDRCxTQUFTb0MsT0FBZ0I7QUFFeEJDLGNBQVFELE1BQU0sb0JBQW9CQSxLQUFLO0FBQ3ZDUyxvQkFBY0csWUFBWXpDLG1DQUFBdkIsUUFBQUMsY0FBQ3FCLGNBQUEsSUFBYSxDQUFFO0lBQzNDO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0F2Q01tQyxxQkFBQTtBQUFBLFdBQUFDLE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUdITixJQUFNO0VBQUNVO0VBQW1CQztFQUFhQztBQUFZLElBQUloRSxHQUFHQyxPQUFPQyxJQUFJO0NBRXBFLFdBQVk7QUFDWixNQUFJNEQsb0JBQW9CLEdBQUc7QUFDMUI7RUFDRDtBQUVBLE1BQUlFLGNBQWM7QUFDakI7RUFDRDtBQUVBLE1BQUksRUFBRUQsY0FBYyxJQUFJO0FBQ3ZCO0VBQ0Q7QUFFQSxPQUFLVixrQkFBa0I7QUFDeEIsR0FBRzsiLAogICJuYW1lcyI6IFsiZWxlbWVudElkIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJzdG9yYWdlS2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgInBlcmlvZCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiRm9vdGVyTm90aWNlIiwgImlkIiwgImNoaWxkcmVuIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiTm90UGF0cm9sbGVkWWV0IiwgInRleHRDb250ZW50IiwgIkxvYWRpbmciLCAiUGF0cm9sbGVkIiwgInRpbWVzdGFtcCIsICJ1c2VyIiwgInJlcGxhY2UiLCAiaHJlZiIsICJ1dGlsIiwgImdldFVybCIsICJjb25jYXQiLCAiRXJyb3JNZXNzYWdlIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRQYXRyb2xsZXIiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ3Z1BhZ2VOYW1lIiwgImFjdGlvbiIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0aXRsZXMiLCAibGlzdCIsICJsZXR5cGUiLCAibGV0aXRsZSIsICJydnByb3AiLCAicnZsaW1pdCIsICJydmRpciIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeSIsICJsb2dldmVudHMiLCAibGVuZ3RoIiwgImxvZyIsICJzZXRPYmplY3QiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAic2hvd1BhZ2VQYXRyb2xsZXIiLCAiX3JlZjIiLCAibW91bnRQb2ludCIsICJwcmVwZW5kIiwgImZvb3RlckVsZW1lbnQiLCAiZGF0ZSIsICJEYXRlIiwgInJlcGxhY2VXaXRoIiwgInRvTG9jYWxlU3RyaW5nIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnQXJ0aWNsZUlkIiwgIndnSXNNYWluUGFnZSJdCn0K
