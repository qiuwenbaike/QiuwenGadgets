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
          mountPoint.replaceChild(/* @__PURE__ */ import_ext_gadget4.default.createElement(Patrolled, {
            timestamp: date.toLocaleString(),
            user
          }), footerElement);
        } else {
          mountPoint.replaceChild(/* @__PURE__ */ import_ext_gadget4.default.createElement(Patrolled, {
            timestamp: "",
            user: ""
          }), footerElement);
        }
      } else {
        mountPoint.replaceChild(/* @__PURE__ */ import_ext_gadget4.default.createElement(Patrolled, {
          timestamp: "",
          user: ""
        }), footerElement);
      }
    } catch (error) {
      console.error("[PagePatroller]:", error);
      mountPoint.replaceChild(/* @__PURE__ */ import_ext_gadget4.default.createElement(ErrorMessage, null), footerElement);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvY29tcG9uZW50cy9mb290ZXJOb3RpY2VzLnRzeCIsICJzcmMvUGFnZVBhdHJvbGxlci9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9zaG93UGFnZVBhdHJvbGxlci50c3giLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9hcGkudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy91dGlsL2dldFBhdHJvbGxlci50cyIsICJzcmMvUGFnZVBhdHJvbGxlci9QYWdlUGF0cm9sbGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwiZWxlbWVudElkXCI6IFwiZm9vdGVyLWluZm8tcGF0cm9sbGVyXCIsXG5cdFwibW91bnRQb2ludFNlbGVjdG9yXCI6IFwiI2Zvb3Rlci1pbmZvLC5wYWdlLWluZm9cIixcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5QYWdlUGF0cm9sbGVyX2dldFBhdHJvbGxlci1cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmludGVyZmFjZSBGb290ZXJOb3RpY2VQcm9wcyB7XG5cdGlkPzogc3RyaW5nO1xuXHRjaGlsZHJlbj86IFJlYWN0RWxlbWVudDtcbn1cblxuY29uc3QgRm9vdGVyTm90aWNlID0gKHtpZCA9IE9QVElPTlMuZWxlbWVudElkLCBjaGlsZHJlbiA9IDw+PC8+fTogRm9vdGVyTm90aWNlUHJvcHMpID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHtza2luID09PSAnY2l0aXplbicgPyAoXG5cdFx0XHRcdDxzZWN0aW9uIGlkPXtpZH0gY2xhc3NOYW1lPXtbaWQsICdwYWdlLWluZm9fX2l0ZW0nLCAnY2l0aXplbi1mb290ZXJfX3BhZ2VpbmZvLWl0ZW0nLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdCkgOiBbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpID8gKFxuXHRcdFx0XHQ8bGkgaWQ9e2lkfSBjbGFzc05hbWU9e1tpZCwgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PGRpdiBpZD17aWR9IGNsYXNzTmFtZT17W2lkLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmNvbnN0IE5vdFBhdHJvbGxlZFlldCA9ICgpID0+IChcblx0PEZvb3Rlck5vdGljZT5cblx0XHQ8c3BhbiBpZD1cInBhZ2VfcGF0cm9sbGVyX19ub3QtcGF0cm9sbGVkXCIgdGV4dENvbnRlbnQ9e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldCcpfSAvPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmNvbnN0IExvYWRpbmcgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2U+XG5cdFx0PHNwYW4gaWQ9XCJwYWdlX3BhdHJvbGxlcl9fbG9hZGluZ1wiIHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdMb2FkaW5nLi4uJyl9IC8+XG5cdDwvRm9vdGVyTm90aWNlPlxuKTtcblxuaW50ZXJmYWNlIFBhdHJvbGxlZFByb3BzIHtcblx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdHVzZXI6IHN0cmluZztcbn1cblxuY29uc3QgUGF0cm9sbGVkID0gKHt0aW1lc3RhbXAsIHVzZXJ9OiBQYXRyb2xsZWRQcm9wcykgPT4ge1xuXHRpZiAodGltZXN0YW1wICYmIHVzZXIpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZvb3Rlck5vdGljZT5cblx0XHRcdFx0PHNwYW4gaWQ9XCJwYWdlX3BhdHJvbGxlcl9fcGF0cm9sbGVkLWJ5XCI+XG5cdFx0XHRcdFx0e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0IGJ5JykucmVwbGFjZSgnJDEnLCB0aW1lc3RhbXApfVxuXHRcdFx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKGBVc2VyOiR7dXNlcn1gKX0+e3VzZXJ9PC9hPlxuXHRcdFx0XHRcdHtnZXRNZXNzYWdlKCdwZXJpb2QnKX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9Gb290ZXJOb3RpY2U+XG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PEZvb3Rlck5vdGljZT5cblx0XHRcdDxzcGFuXG5cdFx0XHRcdGlkPVwicGFnZV9wYXRyb2xsZXJfX3BhdHJvbGxlZFwiXG5cdFx0XHRcdHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdUaGlzIHBhZ2UgaGFzIGJlZW4gcGF0cm9sbGVkLCBvciBoYXMgYmVlbiBtYXJrZWQgYXMgYXV0by1wYXRyb2xsZWQnKX1cblx0XHRcdC8+XG5cdFx0PC9Gb290ZXJOb3RpY2U+XG5cdCk7XG59O1xuXG5jb25zdCBFcnJvck1lc3NhZ2UgPSAoKSA9PiAoXG5cdDxGb290ZXJOb3RpY2U+XG5cdFx0PHNwYW4gaWQ9XCJwYWdlX3BhdHJvbGxlcl9fZXJyb3JcIiB0ZXh0Q29udGVudD17Z2V0TWVzc2FnZSgnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXInKX0gLz5cblx0PC9Gb290ZXJOb3RpY2U+XG4pO1xuXG5leHBvcnQge0Zvb3Rlck5vdGljZSwgTm90UGF0cm9sbGVkWWV0LCBMb2FkaW5nLCBQYXRyb2xsZWQsIEVycm9yTWVzc2FnZX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdMb2FkaW5nLi4uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWKoOi9veatpOmhtemdoueahOW3oeafpeiAheKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjliqDovInmraTpoIHpnaLnmoTlt6Hmn6XogIXigKbigKYnLFxuXHRcdH0pLFxuXHRcdCdUaGlzIHBhZ2UgaGFzIG5vdCBiZWVuIHBhdHJvbGxlZCB5ZXQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5bCa5pyq6KKr5beh5p+l44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouWwmuacquiiq+W3oeafpeOAgicsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0IGJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2Ugd2FzIHBhdHJvbGxlZCBhdCAkMSBieScsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlt6Hmn6Xkuo4kMe+8jOW3oeafpeiAheaYrycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlt6Hmn6XmlrwkMe+8jOW3oeafpeiAheaYrycsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlsJrmnKrooqvlt6Hmn6XvvIzmiJblt7Loh6rliqjmoIfkuLrlt7Llt6Hmn6XjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5bCa5pyq6KKr5beh5p+l77yM5oiW5bey6Ieq5YuV5qiZ54iy5bey5beh5p+l44CCJyxcblx0XHR9KSxcblx0XHQnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyLicsXG5cdFx0XHQnemgtaGFucyc6ICfmn6Xmib7lt6Hmn6XogIXml7blh7rnjrDplJnor6/jgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5p+l5om+5beh5p+l6ICF5pmC5Ye654++6Yyv6Kqk44CCJyxcblx0XHR9KSxcblx0XHRwZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0Vycm9yTWVzc2FnZSwgTG9hZGluZywgTm90UGF0cm9sbGVkWWV0LCBQYXRyb2xsZWR9IGZyb20gJy4vY29tcG9uZW50cy9mb290ZXJOb3RpY2VzJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldFBhdHJvbGxlcn0gZnJvbSAnLi91dGlsL2dldFBhdHJvbGxlcic7XG5cbmNvbnN0IHNob3dQYWdlUGF0cm9sbGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBtb3VudFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoIW1vdW50UG9pbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBpZiB0aGVyZSBpcyBhIHBhdHJvbCBsaW5rLCB0aGUgcGFnZSBtdXN0IGJlIG5vdCBwYXRyb2xsZWRcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXRyb2xsaW5rJykpIHtcblx0XHRtb3VudFBvaW50LnByZXBlbmQoPE5vdFBhdHJvbGxlZFlldCAvPik7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gTG9hZCBwYXRyb2xsZXIgaW5mb1xuXHQvLyBhZGQgYExvYWRpbmcuLi5gXG5cdGNvbnN0IGZvb3RlckVsZW1lbnQgPSA8TG9hZGluZyAvPjtcblx0bW91bnRQb2ludC5wcmVwZW5kKGZvb3RlckVsZW1lbnQpO1xuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IGxvZyA9IGF3YWl0IGdldFBhdHJvbGxlcih3Z1BhZ2VOYW1lKTtcblx0XHRjb25zdCB7YWN0aW9uLCB1c2VyLCB0aW1lc3RhbXB9ID0gbG9nO1xuXG5cdFx0aWYgKGFjdGlvbiAmJiB1c2VyICYmIHRpbWVzdGFtcCkge1xuXHRcdFx0Y29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG5cblx0XHRcdGlmIChhY3Rpb24gPT09ICdwYXRyb2wnKSB7XG5cdFx0XHRcdG1vdW50UG9pbnQucmVwbGFjZUNoaWxkKDxQYXRyb2xsZWQgdGltZXN0YW1wPXtkYXRlLnRvTG9jYWxlU3RyaW5nKCl9IHVzZXI9e3VzZXJ9IC8+LCBmb290ZXJFbGVtZW50KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1vdW50UG9pbnQucmVwbGFjZUNoaWxkKDxQYXRyb2xsZWQgdGltZXN0YW1wPXsnJ30gdXNlcj17Jyd9IC8+LCBmb290ZXJFbGVtZW50KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bW91bnRQb2ludC5yZXBsYWNlQ2hpbGQoPFBhdHJvbGxlZCB0aW1lc3RhbXA9eycnfSB1c2VyPXsnJ30gLz4sIGZvb3RlckVsZW1lbnQpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHQvLyByZXR1cm4gZXJyb3Iocylcblx0XHRjb25zb2xlLmVycm9yKCdbUGFnZVBhdHJvbGxlcl06JywgZXJyb3IpO1xuXHRcdG1vdW50UG9pbnQucmVwbGFjZUNoaWxkKDxFcnJvck1lc3NhZ2UgLz4sIGZvb3RlckVsZW1lbnQpO1xuXHR9XG59O1xuXG5leHBvcnQge3Nob3dQYWdlUGF0cm9sbGVyfTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1BhZ2VQYXRyb2xsZXIvMi4wJyk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcblxuY29uc3QgZ2V0UGF0cm9sbGVyID0gYXN5bmMgKHdnUGFnZU5hbWU6IHN0cmluZykgPT4ge1xuXHRsZXQgYWN0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGxldCB1c2VyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGxldCB0aW1lc3RhbXA6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgd2dQYWdlTmFtZSkpIHtcblx0XHQoe2FjdGlvbiwgdXNlciwgdGltZXN0YW1wfSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHdnUGFnZU5hbWUpIGFzIHtcblx0XHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgJiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0dGl0bGVzOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHRcdFx0bGV0eXBlOiAncGF0cm9sJyxcblx0XHRcdFx0bGV0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRcdFx0cnZwcm9wOiAndGltZXN0YW1wJyxcblx0XHRcdFx0cnZsaW1pdDogMSxcblx0XHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdFx0aWYgKHF1ZXJ5Py5sb2dldmVudHMgJiYgcXVlcnkubG9nZXZlbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBbbG9nXTogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdFx0YWN0aW9uOiBzdHJpbmc7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSA9IHF1ZXJ5LmxvZ2V2ZW50cyBhcyBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdFx0XHRhY3Rpb246IHN0cmluZztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdO1xuXHRcdFx0XHQoe2FjdGlvbn0gPSBsb2cpO1xuXG5cdFx0XHRcdGlmIChhY3Rpb24gPT09ICdwYXRyb2wnKSB7XG5cdFx0XHRcdFx0KHt1c2VyLCB0aW1lc3RhbXB9ID0gbG9nKTtcblxuXHRcdFx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHdnUGFnZU5hbWUsIHthY3Rpb24sIHVzZXIsIHRpbWVzdGFtcH0sIDYwICogNjAgKiAyNCAqIDMwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdbUGFnZVBhdHJvbGxlcl0gQWpheCBlcnJvciBpbiBgZ2V0UGF0cm9sbGVyYCBtZXRob2Q6JywgZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7YWN0aW9uLCB1c2VyLCB0aW1lc3RhbXB9O1xufTtcblxuZXhwb3J0IHtnZXRQYXRyb2xsZXJ9O1xuIiwgImltcG9ydCB7c2hvd1BhZ2VQYXRyb2xsZXJ9IGZyb20gJy4vbW9kdWxlcy9zaG93UGFnZVBhdHJvbGxlcic7XG5cbmNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dBcnRpY2xlSWQsIHdnSXNNYWluUGFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbihmdW5jdGlvbiAoKSB7XG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAod2dJc01haW5QYWdlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCEod2dBcnRpY2xlSWQgPiAwKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgc2hvd1BhZ2VQYXRyb2xsZXIoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhO0FBQ2IsSUFBQUMscUJBQXNCO0FBQ3RCLElBQUFDLGFBQWM7O0FDRmYsSUFBQUMscUJBQWtDQyxRQUFBQyxRQUFBLGdCQUFBLEdBQUEsQ0FBQTs7QUNEbEMsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sZUFBQSxHQUFjRCxrQkFBQUUsVUFBUztNQUN0QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHlDQUFBLEdBQXdDSCxrQkFBQUUsVUFBUztNQUNoREMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGtDQUFBLEdBQWlDSCxrQkFBQUUsVUFBUztNQUN6Q0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHVFQUFBLEdBQXNFSCxrQkFBQUUsVUFBUztNQUM5RUMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHdDQUFBLEdBQXVDSCxrQkFBQUUsVUFBUztNQUMvQ0MsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxTQUFBLEdBQVFKLGtCQUFBRSxVQUFTO01BQ2hCQyxJQUFJO01BQ0pFLElBQUk7SUFDTCxDQUFDO0VBQ0Y7QUFDRDtBQUNBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRDlCQSxJQUFNQyxlQUFlQSxDQUFDO0VBQUNDLEtBQWFoQjtFQUFXaUIsV0FBV2QsbUNBQUFlLFFBQUFDLGNBQUFoQixtQkFBQWUsUUFBQUUsVUFBQSxJQUFFO0FBQUcsTUFBeUI7QUFDdkYsUUFBTTtJQUFDQztFQUFJLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFN0IsU0FDQ3JCLG1DQUFBZSxRQUFBQyxjQUFBaEIsbUJBQUFlLFFBQUFFLFVBQUEsTUFDRUMsU0FBUyxZQUNUbEIsbUNBQUFlLFFBQUFDLGNBQUMsV0FBQTtJQUFRSDtJQUFRUyxXQUFXLENBQUNULElBQUksbUJBQW1CLGlDQUFpQyxTQUFTO0VBQUEsR0FDNUZDLFFBQ0YsSUFDRyxDQUFDLFVBQVUsZUFBZSxRQUFRLEVBQUVTLFNBQVNMLElBQUksS0FBS00sU0FBU0MsY0FBYyxnQkFBZ0IsSUFDaEd6QixtQ0FBQWUsUUFBQUMsY0FBQyxNQUFBO0lBQUdIO0lBQVFTLFdBQVcsQ0FBQ1QsSUFBSSxTQUFTO0VBQUEsR0FDbkNDLFFBQ0YsSUFFQWQsbUNBQUFlLFFBQUFDLGNBQUMsT0FBQTtJQUFJSDtJQUFRUyxXQUFXLENBQUNULElBQUksU0FBUztFQUFBLEdBQ3BDQyxRQUNGLENBRUY7QUFFRjtBQUVBLElBQU1ZLGtCQUFrQkEsTUFDdkIxQixtQ0FBQWUsUUFBQUMsY0FBQ0osY0FBQSxNQUNBWixtQ0FBQWUsUUFBQUMsY0FBQyxRQUFBO0VBQUtILElBQUc7RUFBZ0NjLGFBQWFqQixXQUFXLHNDQUFzQztBQUFBLENBQUcsQ0FDM0c7QUFHRCxJQUFNa0IsVUFBVUEsTUFDZjVCLG1DQUFBZSxRQUFBQyxjQUFDSixjQUFBLE1BQ0FaLG1DQUFBZSxRQUFBQyxjQUFDLFFBQUE7RUFBS0gsSUFBRztFQUEwQmMsYUFBYWpCLFdBQVcsWUFBWTtBQUFBLENBQUcsQ0FDM0U7QUFRRCxJQUFNbUIsWUFBWUEsQ0FBQztFQUFDQztFQUFXQztBQUFJLE1BQXNCO0FBQ3hELE1BQUlELGFBQWFDLE1BQU07QUFDdEIsV0FDQy9CLG1DQUFBZSxRQUFBQyxjQUFDSixjQUFBLE1BQ0FaLG1DQUFBZSxRQUFBQyxjQUFDLFFBQUE7TUFBS0gsSUFBRztJQUFBLEdBQ1BILFdBQVcsK0JBQStCLEVBQUVzQixRQUFRLE1BQU1GLFNBQVMsR0FDcEU5QixtQ0FBQWUsUUFBQUMsY0FBQyxLQUFBO01BQUVpQixNQUFNZCxHQUFHZSxLQUFLQyxPQUFBLFFBQUFDLE9BQWVMLElBQUksQ0FBRTtJQUFBLEdBQUlBLElBQUssR0FDOUNyQixXQUFXLFFBQVEsQ0FDckIsQ0FDRDtFQUVGO0FBRUEsU0FDQ1YsbUNBQUFlLFFBQUFDLGNBQUNKLGNBQUEsTUFDQVosbUNBQUFlLFFBQUFDLGNBQUMsUUFBQTtJQUNBSCxJQUFHO0lBQ0hjLGFBQWFqQixXQUFXLG9FQUFvRTtFQUFBLENBQzdGLENBQ0Q7QUFFRjtBQUVBLElBQU0yQixlQUFlQSxNQUNwQnJDLG1DQUFBZSxRQUFBQyxjQUFDSixjQUFBLE1BQ0FaLG1DQUFBZSxRQUFBQyxjQUFDLFFBQUE7RUFBS0gsSUFBRztFQUF3QmMsYUFBYWpCLFdBQVcscUNBQXFDO0FBQUEsQ0FBRyxDQUNsRzs7QUV4RUQsSUFBQTRCLHFCQUFrQnJDLFFBQUFDLFFBQUEsZ0JBQUEsR0FBQSxDQUFBOztBQ0ZsQixJQUFBcUMscUJBQXdCckMsUUFBQSxpQkFBQTtBQUV4QixJQUFNc0MsT0FBQSxHQUFjRCxtQkFBQUUsV0FBVSxtQkFBbUI7O0FDQ2pELElBQU1DLGVBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBZSxXQUFPQyxZQUF1QjtBQUNsRCxRQUFJQztBQUNKLFFBQUlmO0FBQ0osUUFBSUQ7QUFFSixRQUFJWCxHQUFHNEIsUUFBUUMsVUFBa0JqRCxhQUFhOEMsVUFBVSxHQUFHO0FBQzFELE9BQUM7UUFBQ0M7UUFBUWY7UUFBTUQ7TUFBUyxJQUFJWCxHQUFHNEIsUUFBUUMsVUFBa0JqRCxhQUFhOEMsVUFBVTtJQUtsRixPQUFPO0FBQ04sVUFBSTtBQUNILGNBQU1JLFNBQTREO1VBQ2pFSCxRQUFRO1VBQ1JJLFFBQVE7VUFDUkMsZUFBZTtVQUNmQyxNQUFNO1VBQ05DLFFBQVFSO1VBQ1JTLE1BQU07VUFDTkMsUUFBUTtVQUNSQyxTQUFTWDtVQUNUWSxRQUFRO1VBQ1JDLFNBQVM7VUFDVEMsT0FBTztVQUNQQyxTQUFTO1VBQ1RDLFFBQVE7UUFDVDtBQUNBLGNBQU07VUFBQ0M7UUFBSyxJQUFBLE1BQVV0QixJQUFJbkIsSUFBSTRCLE1BQU07QUFFcEMsWUFBSWEsVUFBQSxRQUFBQSxVQUFBLFVBQUFBLE1BQU9DLGFBQWFELE1BQU1DLFVBQVVDLFFBQVE7QUFDL0MsZ0JBQU0sQ0FBQ0MsR0FBRyxJQU1OSCxNQUFNQztBQU9WLFdBQUM7WUFBQ2pCO1VBQU0sSUFBSW1CO0FBRVosY0FBSW5CLFdBQVcsVUFBVTtBQUN4QixhQUFDO2NBQUNmO2NBQU1EO1lBQVMsSUFBSW1DO0FBRXJCOUMsZUFBRzRCLFFBQVFtQixVQUFrQm5FLGFBQWE4QyxZQUFZO2NBQUNDO2NBQVFmO2NBQU1EO1lBQVMsR0FBRyxLQUFLLEtBQUssS0FBSyxFQUFFO1VBQ25HO1FBQ0Q7TUFDRCxTQUFTcUMsT0FBZ0I7QUFDeEJDLGdCQUFRRCxNQUFNLHdEQUF3REEsS0FBSztNQUM1RTtJQUNEO0FBRUEsV0FBTztNQUFDckI7TUFBUWY7TUFBTUQ7SUFBUztFQUNoQyxDQUFBO0FBQUEsU0FBQSxTQTFETVksY0FBQTJCLElBQUE7QUFBQSxXQUFBMUIsS0FBQTJCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUZFTixJQUFNQyxvQkFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUE3QixrQkFBb0IsYUFBMkI7QUFDcEQsVUFBTThCLGFBQWFsRCxTQUFTQyxjQUFtQzNCLGtCQUFrQjtBQUNqRixRQUFJLENBQUM0RSxZQUFZO0FBQ2hCO0lBQ0Q7QUFHQSxRQUFJbEQsU0FBU0MsY0FBYyxhQUFhLEdBQUc7QUFDMUNpRCxpQkFBV0MsUUFBUXJDLG1DQUFBdkIsUUFBQUMsY0FBQ1UsaUJBQUEsSUFBZ0IsQ0FBRTtBQUN0QztJQUNEO0FBSUEsVUFBTWtELGdCQUFnQnRDLG1DQUFBdkIsUUFBQUMsY0FBQ1ksU0FBQSxJQUFRO0FBQy9COEMsZUFBV0MsUUFBUUMsYUFBYTtBQUVoQyxVQUFNO01BQUMvQjtJQUFVLElBQUkxQixHQUFHQyxPQUFPQyxJQUFJO0FBRW5DLFFBQUk7QUFDSCxZQUFNNEMsTUFBQSxNQUFZdkIsYUFBYUcsVUFBVTtBQUN6QyxZQUFNO1FBQUNDO1FBQVFmO1FBQU1EO01BQVMsSUFBSW1DO0FBRWxDLFVBQUluQixVQUFVZixRQUFRRCxXQUFXO0FBQ2hDLGNBQU0rQyxPQUFhLElBQUlDLEtBQUtoRCxTQUFTO0FBRXJDLFlBQUlnQixXQUFXLFVBQVU7QUFDeEI0QixxQkFBV0ssYUFBYXpDLG1DQUFBdkIsUUFBQUMsY0FBQ2EsV0FBQTtZQUFVQyxXQUFXK0MsS0FBS0csZUFBZTtZQUFHakQ7VUFBQSxDQUFZLEdBQUk2QyxhQUFhO1FBQ25HLE9BQU87QUFDTkYscUJBQVdLLGFBQWF6QyxtQ0FBQXZCLFFBQUFDLGNBQUNhLFdBQUE7WUFBVUMsV0FBVztZQUFJQyxNQUFNO1VBQUEsQ0FBSSxHQUFJNkMsYUFBYTtRQUM5RTtNQUNELE9BQU87QUFDTkYsbUJBQVdLLGFBQWF6QyxtQ0FBQXZCLFFBQUFDLGNBQUNhLFdBQUE7VUFBVUMsV0FBVztVQUFJQyxNQUFNO1FBQUEsQ0FBSSxHQUFJNkMsYUFBYTtNQUM5RTtJQUNELFNBQVNULE9BQWdCO0FBRXhCQyxjQUFRRCxNQUFNLG9CQUFvQkEsS0FBSztBQUN2Q08saUJBQVdLLGFBQWF6QyxtQ0FBQXZCLFFBQUFDLGNBQUNxQixjQUFBLElBQWEsR0FBSXVDLGFBQWE7SUFDeEQ7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQXZDTUoscUJBQUE7QUFBQSxXQUFBQyxNQUFBSCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FHSE4sSUFBTTtFQUFDVTtFQUFtQkM7RUFBYUM7QUFBWSxJQUFJaEUsR0FBR0MsT0FBT0MsSUFBSTtDQUVwRSxXQUFZO0FBQ1osTUFBSTRELG9CQUFvQixHQUFHO0FBQzFCO0VBQ0Q7QUFFQSxNQUFJRSxjQUFjO0FBQ2pCO0VBQ0Q7QUFFQSxNQUFJLEVBQUVELGNBQWMsSUFBSTtBQUN2QjtFQUNEO0FBRUEsT0FBS1Ysa0JBQWtCO0FBQ3hCLEdBQUc7IiwKICAibmFtZXMiOiBbImVsZW1lbnRJZCIsICJtb3VudFBvaW50U2VsZWN0b3IiLCAic3RvcmFnZUtleSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJwZXJpb2QiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkZvb3Rlck5vdGljZSIsICJpZCIsICJjaGlsZHJlbiIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIk5vdFBhdHJvbGxlZFlldCIsICJ0ZXh0Q29udGVudCIsICJMb2FkaW5nIiwgIlBhdHJvbGxlZCIsICJ0aW1lc3RhbXAiLCAidXNlciIsICJyZXBsYWNlIiwgImhyZWYiLCAidXRpbCIsICJnZXRVcmwiLCAiY29uY2F0IiwgIkVycm9yTWVzc2FnZSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiZ2V0UGF0cm9sbGVyIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAid2dQYWdlTmFtZSIsICJhY3Rpb24iLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAicGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgImxpc3QiLCAibGV0eXBlIiwgImxldGl0bGUiLCAicnZwcm9wIiwgInJ2bGltaXQiLCAicnZkaXIiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnkiLCAibG9nZXZlbnRzIiwgImxlbmd0aCIsICJsb2ciLCAic2V0T2JqZWN0IiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInNob3dQYWdlUGF0cm9sbGVyIiwgIl9yZWYyIiwgIm1vdW50UG9pbnQiLCAicHJlcGVuZCIsICJmb290ZXJFbGVtZW50IiwgImRhdGUiLCAiRGF0ZSIsICJyZXBsYWNlQ2hpbGQiLCAidG9Mb2NhbGVTdHJpbmciLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dBcnRpY2xlSWQiLCAid2dJc01haW5QYWdlIl0KfQo=
