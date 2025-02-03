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
//! src/PagePatroller/modules/components/react.tsx
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
//! src/PagePatroller/modules/components/react.tsx
var FooterNotice = ({
  id,
  children = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)
}) => {
  const {
    skin
  } = mw.config.get();
  return /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, skin === "citizen" ? /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
    id: id !== null && id !== void 0 ? id : elementId,
    className: [elementId, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
  }, children !== null && children !== void 0 ? children : /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)) : ["vector", "vector-2022", "gongbi"].includes(skin) || document.querySelector("ul#footer-info") ? /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
    id: id !== null && id !== void 0 ? id : elementId,
    className: [elementId, "noprint"]
  }, children !== null && children !== void 0 ? children : /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)) : /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id: id !== null && id !== void 0 ? id : elementId,
    className: [elementId, "noprint"]
  }, children !== null && children !== void 0 ? children : /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)));
};
var NotPatrolledYet = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__not-patrolled",
  textContent: getMessage("This page has not been patrolled yet")
});
var Loading = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__loading",
  textContent: getMessage("Loading...")
});
var Patrolled = ({
  timestamp,
  user
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, timestamp && user ? /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__patrolled-by"
}, getMessage("This page was patrolled at by").replace("$1", timestamp), /* @__PURE__ */ import_ext_gadget2.default.createElement("a", {
  href: mw.util.getUrl("User:".concat(user))
}, user), getMessage("period")) : /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__patrolled",
  textContent: getMessage("This page has been patrolled, or has been marked as auto-patrolled")
}));
var ErrorMessage = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  id: "page_patroller__error",
  textContent: getMessage("Error occurs when finding patroller")
});
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
var appendFooterNotice = (element) => {
  const mountPoint = document.querySelector(mountPointSelector);
  if (mountPoint) {
    mountPoint.prepend(element);
  }
};
var showPagePatroller = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* () {
    const footerElement = /* @__PURE__ */ import_ext_gadget4.default.createElement(FooterNotice, null);
    appendFooterNotice(footerElement);
    if (document.querySelector(".patrollink")) {
      footerElement.append(/* @__PURE__ */ import_ext_gadget4.default.createElement(NotPatrolledYet, null));
      return;
    }
    footerElement.append(/* @__PURE__ */ import_ext_gadget4.default.createElement(Loading, null));
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
          footerElement.replaceChildren(/* @__PURE__ */ import_ext_gadget4.default.createElement(Patrolled, {
            timestamp: date.toLocaleString(),
            user
          }));
        } else {
          footerElement.replaceChildren(/* @__PURE__ */ import_ext_gadget4.default.createElement(Patrolled, null));
        }
      } else {
        footerElement.replaceChildren(/* @__PURE__ */ import_ext_gadget4.default.createElement(Patrolled, null));
      }
    } catch (error) {
      console.error("[PagePatroller]:", error);
      footerElement.replaceChildren(/* @__PURE__ */ import_ext_gadget4.default.createElement(ErrorMessage, null));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvY29tcG9uZW50cy9yZWFjdC50c3giLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvc2hvd1BhZ2VQYXRyb2xsZXIudHN4IiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvYXBpLnRzIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvdXRpbC9nZXRQYXRyb2xsZXIudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvUGFnZVBhdHJvbGxlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImVsZW1lbnRJZFwiOiBcImZvb3Rlci1pbmZvLXBhdHJvbGxlclwiLFxuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwic3RvcmFnZUtleVwiOiBcImV4dC5nYWRnZXQuUGFnZVBhdHJvbGxlcl9nZXRQYXRyb2xsZXItXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5pbnRlcmZhY2UgRm9vdGVyTm90aWNlUHJvcHMge1xuXHRpZD86IHN0cmluZztcblx0Y2hpbGRyZW4/OiBSZWFjdEVsZW1lbnQgfCBSZWFjdEVsZW1lbnRbXTtcbn1cblxuY29uc3QgRm9vdGVyTm90aWNlID0gKHtpZCwgY2hpbGRyZW4gPSA8PjwvPn06IEZvb3Rlck5vdGljZVByb3BzKSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHR7c2tpbiA9PT0gJ2NpdGl6ZW4nID8gKFxuXHRcdFx0XHQ8c2VjdGlvblxuXHRcdFx0XHRcdGlkPXtpZCA/PyBPUFRJT05TLmVsZW1lbnRJZH1cblx0XHRcdFx0XHRjbGFzc05hbWU9e1tPUFRJT05TLmVsZW1lbnRJZCwgJ3BhZ2UtaW5mb19faXRlbScsICdjaXRpemVuLWZvb3Rlcl9fcGFnZWluZm8taXRlbScsICdub3ByaW50J119XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7Y2hpbGRyZW4gPz8gPD48Lz59XG5cdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdCkgOiBbJ3ZlY3RvcicsICd2ZWN0b3ItMjAyMicsICdnb25nYmknXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpID8gKFxuXHRcdFx0XHQ8bGkgaWQ9e2lkID8/IE9QVElPTlMuZWxlbWVudElkfSBjbGFzc05hbWU9e1tPUFRJT05TLmVsZW1lbnRJZCwgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdFx0e2NoaWxkcmVuID8/IDw+PC8+fVxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PGRpdiBpZD17aWQgPz8gT1BUSU9OUy5lbGVtZW50SWR9IGNsYXNzTmFtZT17W09QVElPTlMuZWxlbWVudElkLCAnbm9wcmludCddfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW4gPz8gPD48Lz59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmNvbnN0IE5vdFBhdHJvbGxlZFlldCA9ICgpID0+IChcblx0PHNwYW4gaWQ9XCJwYWdlX3BhdHJvbGxlcl9fbm90LXBhdHJvbGxlZFwiIHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdUaGlzIHBhZ2UgaGFzIG5vdCBiZWVuIHBhdHJvbGxlZCB5ZXQnKX0gLz5cbik7XG5cbmNvbnN0IExvYWRpbmcgPSAoKSA9PiA8c3BhbiBpZD1cInBhZ2VfcGF0cm9sbGVyX19sb2FkaW5nXCIgdGV4dENvbnRlbnQ9e2dldE1lc3NhZ2UoJ0xvYWRpbmcuLi4nKX0gLz47XG5cbmludGVyZmFjZSBQYXRyb2xsZWRQcm9wcyB7XG5cdHRpbWVzdGFtcD86IHN0cmluZztcblx0dXNlcj86IHN0cmluZztcbn1cblxuY29uc3QgUGF0cm9sbGVkID0gKHt0aW1lc3RhbXAsIHVzZXJ9OiBQYXRyb2xsZWRQcm9wcykgPT4gKFxuXHQ8PlxuXHRcdHt0aW1lc3RhbXAgJiYgdXNlciA/IChcblx0XHRcdDxzcGFuIGlkPVwicGFnZV9wYXRyb2xsZXJfX3BhdHJvbGxlZC1ieVwiPlxuXHRcdFx0XHR7Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIHdhcyBwYXRyb2xsZWQgYXQgYnknKS5yZXBsYWNlKCckMScsIHRpbWVzdGFtcCl9XG5cdFx0XHRcdDxhIGhyZWY9e213LnV0aWwuZ2V0VXJsKGBVc2VyOiR7dXNlcn1gKX0+e3VzZXJ9PC9hPlxuXHRcdFx0XHR7Z2V0TWVzc2FnZSgncGVyaW9kJyl9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KSA6IChcblx0XHRcdDxzcGFuXG5cdFx0XHRcdGlkPVwicGFnZV9wYXRyb2xsZXJfX3BhdHJvbGxlZFwiXG5cdFx0XHRcdHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdUaGlzIHBhZ2UgaGFzIGJlZW4gcGF0cm9sbGVkLCBvciBoYXMgYmVlbiBtYXJrZWQgYXMgYXV0by1wYXRyb2xsZWQnKX1cblx0XHRcdC8+XG5cdFx0KX1cblx0PC8+XG4pO1xuXG5jb25zdCBFcnJvck1lc3NhZ2UgPSAoKSA9PiAoXG5cdDxzcGFuIGlkPVwicGFnZV9wYXRyb2xsZXJfX2Vycm9yXCIgdGV4dENvbnRlbnQ9e2dldE1lc3NhZ2UoJ0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyJyl9IC8+XG4pO1xuXG5leHBvcnQge0Zvb3Rlck5vdGljZSwgTm90UGF0cm9sbGVkWWV0LCBMb2FkaW5nLCBQYXRyb2xsZWQsIEVycm9yTWVzc2FnZX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdMb2FkaW5nLi4uJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWKoOi9veatpOmhtemdoueahOW3oeafpeiAheKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjliqDovInmraTpoIHpnaLnmoTlt6Hmn6XogIXigKbigKYnLFxuXHRcdH0pLFxuXHRcdCdUaGlzIHBhZ2UgaGFzIG5vdCBiZWVuIHBhdHJvbGxlZCB5ZXQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBoYXMgbm90IGJlZW4gcGF0cm9sbGVkIHlldC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5bCa5pyq6KKr5beh5p+l44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouWwmuacquiiq+W3oeafpeOAgicsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0IGJ5JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2Ugd2FzIHBhdHJvbGxlZCBhdCAkMSBieScsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlt6Hmn6Xkuo4kMe+8jOW3oeafpeiAheaYrycsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlt6Hmn6XmlrwkMe+8jOW3oeafpeiAheaYrycsXG5cdFx0fSksXG5cdFx0J1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraTpobXpnaLlsJrmnKrooqvlt6Hmn6XvvIzmiJblt7Loh6rliqjmoIfkuLrlt7Llt6Hmn6XjgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5bCa5pyq6KKr5beh5p+l77yM5oiW5bey6Ieq5YuV5qiZ54iy5bey5beh5p+l44CCJyxcblx0XHR9KSxcblx0XHQnRXJyb3Igb2NjdXJzIHdoZW4gZmluZGluZyBwYXRyb2xsZXInOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyLicsXG5cdFx0XHQnemgtaGFucyc6ICfmn6Xmib7lt6Hmn6XogIXml7blh7rnjrDplJnor6/jgIInLFxuXHRcdFx0J3poLWhhbnQnOiAn5p+l5om+5beh5p+l6ICF5pmC5Ye654++6Yyv6Kqk44CCJyxcblx0XHR9KSxcblx0XHRwZXJpb2Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnLicsXG5cdFx0XHR6aDogJ+OAgicsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0Vycm9yTWVzc2FnZSwgRm9vdGVyTm90aWNlLCBMb2FkaW5nLCBOb3RQYXRyb2xsZWRZZXQsIFBhdHJvbGxlZH0gZnJvbSAnLi9jb21wb25lbnRzL3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldFBhdHJvbGxlcn0gZnJvbSAnLi91dGlsL2dldFBhdHJvbGxlcic7XG5cbmNvbnN0IGFwcGVuZEZvb3Rlck5vdGljZSA9IChlbGVtZW50OiBFbGVtZW50KSA9PiB7XG5cdGNvbnN0IG1vdW50UG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PihPUFRJT05TLm1vdW50UG9pbnRTZWxlY3Rvcik7XG5cblx0aWYgKG1vdW50UG9pbnQpIHtcblx0XHRtb3VudFBvaW50LnByZXBlbmQoZWxlbWVudCk7XG5cdH1cbn07XG5cbmNvbnN0IHNob3dQYWdlUGF0cm9sbGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBmb290ZXJFbGVtZW50ID0gPEZvb3Rlck5vdGljZSAvPjtcblx0YXBwZW5kRm9vdGVyTm90aWNlKGZvb3RlckVsZW1lbnQpO1xuXG5cdC8vIGlmIHRoZXJlIGlzIGEgcGF0cm9sIGxpbmssIHRoZSBwYWdlIG11c3QgYmUgbm90IHBhdHJvbGxlZFxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdHJvbGxpbmsnKSkge1xuXHRcdGZvb3RlckVsZW1lbnQuYXBwZW5kKDxOb3RQYXRyb2xsZWRZZXQgLz4pO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIExvYWQgcGF0cm9sbGVyIGluZm9cblx0Ly8gYWRkIGBMb2FkaW5nLi4uYFxuXHRmb290ZXJFbGVtZW50LmFwcGVuZCg8TG9hZGluZyAvPik7XG5cblx0Y29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgbG9nID0gYXdhaXQgZ2V0UGF0cm9sbGVyKHdnUGFnZU5hbWUpO1xuXHRcdGNvbnN0IHthY3Rpb24sIHVzZXIsIHRpbWVzdGFtcH0gPSBsb2c7XG5cblx0XHRpZiAoYWN0aW9uICYmIHVzZXIgJiYgdGltZXN0YW1wKSB7XG5cdFx0XHRjb25zdCBkYXRlOiBEYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcblxuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3BhdHJvbCcpIHtcblx0XHRcdFx0Zm9vdGVyRWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oPFBhdHJvbGxlZCB0aW1lc3RhbXA9e2RhdGUudG9Mb2NhbGVTdHJpbmcoKX0gdXNlcj17dXNlcn0gLz4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9vdGVyRWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oPFBhdHJvbGxlZCAvPik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvb3RlckVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKDxQYXRyb2xsZWQgLz4pO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHQvLyByZXR1cm4gZXJyb3Iocylcblx0XHRjb25zb2xlLmVycm9yKCdbUGFnZVBhdHJvbGxlcl06JywgZXJyb3IpO1xuXHRcdGZvb3RlckVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKDxFcnJvck1lc3NhZ2UgLz4pO1xuXHR9XG59O1xuXG5leHBvcnQge3Nob3dQYWdlUGF0cm9sbGVyfTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1BhZ2VQYXRyb2xsZXIvMi4wJyk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uLy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcblxuY29uc3QgZ2V0UGF0cm9sbGVyID0gYXN5bmMgKHdnUGFnZU5hbWU6IHN0cmluZykgPT4ge1xuXHRsZXQgYWN0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGxldCB1c2VyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdGxldCB0aW1lc3RhbXA6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoT1BUSU9OUy5zdG9yYWdlS2V5ICsgd2dQYWdlTmFtZSkpIHtcblx0XHQoe2FjdGlvbiwgdXNlciwgdGltZXN0YW1wfSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHdnUGFnZU5hbWUpIGFzIHtcblx0XHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgJiBBcGlRdWVyeUxvZ0V2ZW50c1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0dGl0bGVzOiB3Z1BhZ2VOYW1lLFxuXHRcdFx0XHRsaXN0OiAnbG9nZXZlbnRzJyxcblx0XHRcdFx0bGV0eXBlOiAncGF0cm9sJyxcblx0XHRcdFx0bGV0aXRsZTogd2dQYWdlTmFtZSxcblx0XHRcdFx0cnZwcm9wOiAndGltZXN0YW1wJyxcblx0XHRcdFx0cnZsaW1pdDogMSxcblx0XHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3Qge3F1ZXJ5fSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdFx0aWYgKHF1ZXJ5Py5sb2dldmVudHMgJiYgcXVlcnkubG9nZXZlbnRzLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBbbG9nXTogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdFx0YWN0aW9uOiBzdHJpbmc7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSA9IHF1ZXJ5LmxvZ2V2ZW50cyBhcyBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0dXNlcjogc3RyaW5nO1xuXHRcdFx0XHRcdFx0dGltZXN0YW1wOiBzdHJpbmc7XG5cdFx0XHRcdFx0XHRhY3Rpb246IHN0cmluZztcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdO1xuXHRcdFx0XHQoe2FjdGlvbn0gPSBsb2cpO1xuXG5cdFx0XHRcdGlmIChhY3Rpb24gPT09ICdwYXRyb2wnKSB7XG5cdFx0XHRcdFx0KHt1c2VyLCB0aW1lc3RhbXB9ID0gbG9nKTtcblxuXHRcdFx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHdnUGFnZU5hbWUsIHthY3Rpb24sIHVzZXIsIHRpbWVzdGFtcH0sIDYwICogNjAgKiAyNCAqIDMwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdbUGFnZVBhdHJvbGxlcl0gQWpheCBlcnJvciBpbiBgZ2V0UGF0cm9sbGVyYCBtZXRob2Q6JywgZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7YWN0aW9uLCB1c2VyLCB0aW1lc3RhbXB9O1xufTtcblxuZXhwb3J0IHtnZXRQYXRyb2xsZXJ9O1xuIiwgImltcG9ydCB7c2hvd1BhZ2VQYXRyb2xsZXJ9IGZyb20gJy4vbW9kdWxlcy9zaG93UGFnZVBhdHJvbGxlcic7XG5cbmNvbnN0IHt3Z05hbWVzcGFjZU51bWJlciwgd2dBcnRpY2xlSWQsIHdnSXNNYWluUGFnZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbihmdW5jdGlvbiAoKSB7XG5cdGlmICh3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAod2dJc01haW5QYWdlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCEod2dBcnRpY2xlSWQgPiAwKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgc2hvd1BhZ2VQYXRyb2xsZXIoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RDtBQUVBLE1BQUlFLGNBQWM7QUFDakI7RUFDRDtBQUVBLE1BQUksRUFBRUQsY0FBYyxJQUFJO0FBQ3ZCO0VBQ0Q7QUFFQSxPQUFLVCxrQkFBa0I7QUFDeEIsR0FBRzsiLAogICJuYW1lcyI6IFsiZWxlbWVudElkIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJzdG9yYWdlS2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgInBlcmlvZCIsICJ6aCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiRm9vdGVyTm90aWNlIiwgImlkIiwgImNoaWxkcmVuIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJGcmFnbWVudCIsICJza2luIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiTm90UGF0cm9sbGVkWWV0IiwgInRleHRDb250ZW50IiwgIkxvYWRpbmciLCAiUGF0cm9sbGVkIiwgInRpbWVzdGFtcCIsICJ1c2VyIiwgInJlcGxhY2UiLCAiaHJlZiIsICJ1dGlsIiwgImdldFVybCIsICJjb25jYXQiLCAiRXJyb3JNZXNzYWdlIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJnZXRQYXRyb2xsZXIiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ3Z1BhZ2VOYW1lIiwgImFjdGlvbiIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJwYXJhbXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0aXRsZXMiLCAibGlzdCIsICJsZXR5cGUiLCAibGV0aXRsZSIsICJydnByb3AiLCAicnZsaW1pdCIsICJydmRpciIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeSIsICJsb2dldmVudHMiLCAibGVuZ3RoIiwgImxvZyIsICJzZXRPYmplY3QiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiYXBwZW5kRm9vdGVyTm90aWNlIiwgImVsZW1lbnQiLCAibW91bnRQb2ludCIsICJwcmVwZW5kIiwgInNob3dQYWdlUGF0cm9sbGVyIiwgIl9yZWYyIiwgImZvb3RlckVsZW1lbnQiLCAiYXBwZW5kIiwgImRhdGUiLCAiRGF0ZSIsICJyZXBsYWNlQ2hpbGRyZW4iLCAidG9Mb2NhbGVTdHJpbmciLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAid2dBcnRpY2xlSWQiLCAid2dJc01haW5QYWdlIl0KfQo=
