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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1BhZ2VQYXRyb2xsZXIvb3B0aW9ucy5qc29uIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvY29tcG9uZW50cy9yZWFjdC50c3giLCAic3JjL1BhZ2VQYXRyb2xsZXIvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvc2hvd1BhZ2VQYXRyb2xsZXIudHN4IiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvYXBpLnRzIiwgInNyYy9QYWdlUGF0cm9sbGVyL21vZHVsZXMvdXRpbC9nZXRQYXRyb2xsZXIudHMiLCAic3JjL1BhZ2VQYXRyb2xsZXIvUGFnZVBhdHJvbGxlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImVsZW1lbnRJZFwiOiBcImZvb3Rlci1pbmZvLXBhdHJvbGxlclwiLFxuXHRcIm1vdW50UG9pbnRTZWxlY3RvclwiOiBcIiNmb290ZXItaW5mbywucGFnZS1pbmZvXCIsXG5cdFwic3RvcmFnZUtleVwiOiBcImV4dC5nYWRnZXQuUGFnZVBhdHJvbGxlcl9nZXRQYXRyb2xsZXItXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50fSBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5pbnRlcmZhY2UgRm9vdGVyTm90aWNlUHJvcHMge1xuXHRpZD86IHN0cmluZztcblx0Y2hpbGRyZW4/OiBSZWFjdEVsZW1lbnQ7XG59XG5cbmNvbnN0IEZvb3Rlck5vdGljZSA9ICh7aWQgPSBPUFRJT05TLmVsZW1lbnRJZCwgY2hpbGRyZW4gPSA8PjwvPn06IEZvb3Rlck5vdGljZVByb3BzKSA9PiB7XG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHR7c2tpbiA9PT0gJ2NpdGl6ZW4nID8gKFxuXHRcdFx0XHQ8c2VjdGlvbiBpZD17aWR9IGNsYXNzTmFtZT17W2lkLCAncGFnZS1pbmZvX19pdGVtJywgJ2NpdGl6ZW4tZm9vdGVyX19wYWdlaW5mby1pdGVtJywgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHQpIDogWyd2ZWN0b3InLCAndmVjdG9yLTIwMjInLCAnZ29uZ2JpJ10uaW5jbHVkZXMoc2tpbikgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwjZm9vdGVyLWluZm8nKSA/IChcblx0XHRcdFx0PGxpIGlkPXtpZH0gY2xhc3NOYW1lPXtbaWQsICdub3ByaW50J119PlxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PC9saT5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9e1tpZCwgJ25vcHJpbnQnXX0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5jb25zdCBOb3RQYXRyb2xsZWRZZXQgPSAoKSA9PiAoXG5cdDxzcGFuIGlkPVwicGFnZV9wYXRyb2xsZXJfX25vdC1wYXRyb2xsZWRcIiB0ZXh0Q29udGVudD17Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0Jyl9IC8+XG4pO1xuXG5jb25zdCBMb2FkaW5nID0gKCkgPT4gPHNwYW4gaWQ9XCJwYWdlX3BhdHJvbGxlcl9fbG9hZGluZ1wiIHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdMb2FkaW5nLi4uJyl9IC8+O1xuXG5pbnRlcmZhY2UgUGF0cm9sbGVkUHJvcHMge1xuXHR0aW1lc3RhbXA/OiBzdHJpbmc7XG5cdHVzZXI/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFBhdHJvbGxlZCA9ICh7dGltZXN0YW1wLCB1c2VyfTogUGF0cm9sbGVkUHJvcHMpID0+IChcblx0PD5cblx0XHR7dGltZXN0YW1wICYmIHVzZXIgPyAoXG5cdFx0XHQ8c3BhbiBpZD1cInBhZ2VfcGF0cm9sbGVyX19wYXRyb2xsZWQtYnlcIj5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ1RoaXMgcGFnZSB3YXMgcGF0cm9sbGVkIGF0IGJ5JykucmVwbGFjZSgnJDEnLCB0aW1lc3RhbXApfVxuXHRcdFx0XHQ8YSBocmVmPXttdy51dGlsLmdldFVybChgVXNlcjoke3VzZXJ9YCl9Pnt1c2VyfTwvYT5cblx0XHRcdFx0e2dldE1lc3NhZ2UoJ3BlcmlvZCcpfVxuXHRcdFx0PC9zcGFuPlxuXHRcdCkgOiAoXG5cdFx0XHQ8c3BhblxuXHRcdFx0XHRpZD1cInBhZ2VfcGF0cm9sbGVyX19wYXRyb2xsZWRcIlxuXHRcdFx0XHR0ZXh0Q29udGVudD17Z2V0TWVzc2FnZSgnVGhpcyBwYWdlIGhhcyBiZWVuIHBhdHJvbGxlZCwgb3IgaGFzIGJlZW4gbWFya2VkIGFzIGF1dG8tcGF0cm9sbGVkJyl9XG5cdFx0XHQvPlxuXHRcdCl9XG5cdDwvPlxuKTtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gKCkgPT4gKFxuXHQ8c3BhbiBpZD1cInBhZ2VfcGF0cm9sbGVyX19lcnJvclwiIHRleHRDb250ZW50PXtnZXRNZXNzYWdlKCdFcnJvciBvY2N1cnMgd2hlbiBmaW5kaW5nIHBhdHJvbGxlcicpfSAvPlxuKTtcblxuZXhwb3J0IHtGb290ZXJOb3RpY2UsIE5vdFBhdHJvbGxlZFlldCwgTG9hZGluZywgUGF0cm9sbGVkLCBFcnJvck1lc3NhZ2V9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTG9hZGluZy4uLic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTG9hZGluZy4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfmraPlnKjliqDovb3mraTpobXpnaLnmoTlt6Hmn6XogIXigKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2j5Zyo5Yqg6LyJ5q2k6aCB6Z2i55qE5beh5p+l6ICF4oCm4oCmJyxcblx0XHR9KSxcblx0XHQnVGhpcyBwYWdlIGhhcyBub3QgYmVlbiBwYXRyb2xsZWQgeWV0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIHBhZ2UgaGFzIG5vdCBiZWVuIHBhdHJvbGxlZCB5ZXQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+atpOmhtemdouWwmuacquiiq+W3oeafpeOAgicsXG5cdFx0XHQnemgtaGFudCc6ICfmraTpoIHpnaLlsJrmnKrooqvlt6Hmn6XjgIInLFxuXHRcdH0pLFxuXHRcdCdUaGlzIHBhZ2Ugd2FzIHBhdHJvbGxlZCBhdCBieSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBwYWdlIHdhcyBwYXRyb2xsZWQgYXQgJDEgYnknLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5beh5p+l5LqOJDHvvIzlt6Hmn6XogIXmmK8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5q2k6aCB6Z2i5beh5p+l5pa8JDHvvIzlt6Hmn6XogIXmmK8nLFxuXHRcdH0pLFxuXHRcdCdUaGlzIHBhZ2UgaGFzIGJlZW4gcGF0cm9sbGVkLCBvciBoYXMgYmVlbiBtYXJrZWQgYXMgYXV0by1wYXRyb2xsZWQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoaXMgcGFnZSBoYXMgYmVlbiBwYXRyb2xsZWQsIG9yIGhhcyBiZWVuIG1hcmtlZCBhcyBhdXRvLXBhdHJvbGxlZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5q2k6aG16Z2i5bCa5pyq6KKr5beh5p+l77yM5oiW5bey6Ieq5Yqo5qCH5Li65bey5beh5p+l44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+atpOmggemdouWwmuacquiiq+W3oeafpe+8jOaIluW3suiHquWLleaomeeIsuW3suW3oeafpeOAgicsXG5cdFx0fSksXG5cdFx0J0Vycm9yIG9jY3VycyB3aGVuIGZpbmRpbmcgcGF0cm9sbGVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFcnJvciBvY2N1cnMgd2hlbiBmaW5kaW5nIHBhdHJvbGxlci4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5p+l5om+5beh5p+l6ICF5pe25Ye6546w6ZSZ6K+v44CCJyxcblx0XHRcdCd6aC1oYW50JzogJ+afpeaJvuW3oeafpeiAheaZguWHuuePvumMr+iqpOOAgicsXG5cdFx0fSksXG5cdFx0cGVyaW9kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJy4nLFxuXHRcdFx0emg6ICfjgIInLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtFcnJvck1lc3NhZ2UsIEZvb3Rlck5vdGljZSwgTG9hZGluZywgTm90UGF0cm9sbGVkWWV0LCBQYXRyb2xsZWR9IGZyb20gJy4vY29tcG9uZW50cy9yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRQYXRyb2xsZXJ9IGZyb20gJy4vdXRpbC9nZXRQYXRyb2xsZXInO1xuXG5jb25zdCBhcHBlbmRGb290ZXJOb3RpY2UgPSAoZWxlbWVudDogRWxlbWVudCkgPT4ge1xuXHRjb25zdCBtb3VudFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXG5cdGlmIChtb3VudFBvaW50KSB7XG5cdFx0bW91bnRQb2ludC5wcmVwZW5kKGVsZW1lbnQpO1xuXHR9XG59O1xuXG5jb25zdCBzaG93UGFnZVBhdHJvbGxlciA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgZm9vdGVyRWxlbWVudCA9IDxGb290ZXJOb3RpY2UgLz47XG5cdGFwcGVuZEZvb3Rlck5vdGljZShmb290ZXJFbGVtZW50KTtcblxuXHQvLyBpZiB0aGVyZSBpcyBhIHBhdHJvbCBsaW5rLCB0aGUgcGFnZSBtdXN0IGJlIG5vdCBwYXRyb2xsZWRcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXRyb2xsaW5rJykpIHtcblx0XHRmb290ZXJFbGVtZW50LmFwcGVuZCg8Tm90UGF0cm9sbGVkWWV0IC8+KTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBMb2FkIHBhdHJvbGxlciBpbmZvXG5cdC8vIGFkZCBgTG9hZGluZy4uLmBcblx0Zm9vdGVyRWxlbWVudC5hcHBlbmQoPExvYWRpbmcgLz4pO1xuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHR0cnkge1xuXHRcdGNvbnN0IGxvZyA9IGF3YWl0IGdldFBhdHJvbGxlcih3Z1BhZ2VOYW1lKTtcblx0XHRjb25zdCB7YWN0aW9uLCB1c2VyLCB0aW1lc3RhbXB9ID0gbG9nO1xuXG5cdFx0aWYgKGFjdGlvbiAmJiB1c2VyICYmIHRpbWVzdGFtcCkge1xuXHRcdFx0Y29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG5cblx0XHRcdGlmIChhY3Rpb24gPT09ICdwYXRyb2wnKSB7XG5cdFx0XHRcdGZvb3RlckVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKDxQYXRyb2xsZWQgdGltZXN0YW1wPXtkYXRlLnRvTG9jYWxlU3RyaW5nKCl9IHVzZXI9e3VzZXJ9IC8+KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvb3RlckVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKDxQYXRyb2xsZWQgLz4pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb290ZXJFbGVtZW50LnJlcGxhY2VDaGlsZHJlbig8UGF0cm9sbGVkIC8+KTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Ly8gcmV0dXJuIGVycm9yKHMpXG5cdFx0Y29uc29sZS5lcnJvcignW1BhZ2VQYXRyb2xsZXJdOicsIGVycm9yKTtcblx0XHRmb290ZXJFbGVtZW50LnJlcGxhY2VDaGlsZHJlbig8RXJyb3JNZXNzYWdlIC8+KTtcblx0fVxufTtcblxuZXhwb3J0IHtzaG93UGFnZVBhdHJvbGxlcn07XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdQYWdlUGF0cm9sbGVyLzIuMCcpO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5cbmNvbnN0IGdldFBhdHJvbGxlciA9IGFzeW5jICh3Z1BhZ2VOYW1lOiBzdHJpbmcpID0+IHtcblx0bGV0IGFjdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRsZXQgdXNlcjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRsZXQgdGltZXN0YW1wOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHdnUGFnZU5hbWUpKSB7XG5cdFx0KHthY3Rpb24sIHVzZXIsIHRpbWVzdGFtcH0gPSBtdy5zdG9yYWdlLmdldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyB3Z1BhZ2VOYW1lKSBhcyB7XG5cdFx0XHRhY3Rpb246IHN0cmluZztcblx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zICYgQXBpUXVlcnlMb2dFdmVudHNQYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHRpdGxlczogd2dQYWdlTmFtZSxcblx0XHRcdFx0bGlzdDogJ2xvZ2V2ZW50cycsXG5cdFx0XHRcdGxldHlwZTogJ3BhdHJvbCcsXG5cdFx0XHRcdGxldGl0bGU6IHdnUGFnZU5hbWUsXG5cdFx0XHRcdHJ2cHJvcDogJ3RpbWVzdGFtcCcsXG5cdFx0XHRcdHJ2bGltaXQ6IDEsXG5cdFx0XHRcdHJ2ZGlyOiAnbmV3ZXInLFxuXHRcdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRcdG1heGFnZTogNjAwLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHtxdWVyeX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRcdGlmIChxdWVyeT8ubG9nZXZlbnRzICYmIHF1ZXJ5LmxvZ2V2ZW50cy5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgW2xvZ106IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR1c2VyOiBzdHJpbmc7XG5cdFx0XHRcdFx0XHR0aW1lc3RhbXA6IHN0cmluZztcblx0XHRcdFx0XHRcdGFjdGlvbjogc3RyaW5nO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF0gPSBxdWVyeS5sb2dldmVudHMgYXMgW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHVzZXI6IHN0cmluZztcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHRcdFx0YWN0aW9uOiBzdHJpbmc7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XTtcblx0XHRcdFx0KHthY3Rpb259ID0gbG9nKTtcblxuXHRcdFx0XHRpZiAoYWN0aW9uID09PSAncGF0cm9sJykge1xuXHRcdFx0XHRcdCh7dXNlciwgdGltZXN0YW1wfSA9IGxvZyk7XG5cblx0XHRcdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyB3Z1BhZ2VOYW1lLCB7YWN0aW9uLCB1c2VyLCB0aW1lc3RhbXB9LCA2MCAqIDYwICogMjQgKiAzMCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdFx0Y29uc29sZS5lcnJvcignW1BhZ2VQYXRyb2xsZXJdIEFqYXggZXJyb3IgaW4gYGdldFBhdHJvbGxlcmAgbWV0aG9kOicsIGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge2FjdGlvbiwgdXNlciwgdGltZXN0YW1wfTtcbn07XG5cbmV4cG9ydCB7Z2V0UGF0cm9sbGVyfTtcbiIsICJpbXBvcnQge3Nob3dQYWdlUGF0cm9sbGVyfSBmcm9tICcuL21vZHVsZXMvc2hvd1BhZ2VQYXRyb2xsZXInO1xuXG5jb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnQXJ0aWNsZUlkLCB3Z0lzTWFpblBhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4oZnVuY3Rpb24gKCkge1xuXHRpZiAod2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHdnSXNNYWluUGFnZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghKHdnQXJ0aWNsZUlkID4gMCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIHNob3dQYWdlUGF0cm9sbGVyKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsWUFBYTtBQUNiLElBQUFDLHFCQUFzQjtBQUN0QixJQUFBQyxhQUFjOztBQ0ZmLElBQUFDLHFCQUFrQ0MsUUFBQUMsUUFBQSxnQkFBQSxHQUFBLENBQUE7O0FDRGxDLElBQUFD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QUFBdkIsUUFBQUMsY0FBQ2EsV0FBQSxJQUFVLENBQUU7UUFDNUM7TUFDRCxPQUFPO0FBQ05pRCxzQkFBY0ksZ0JBQWdCNUMsbUNBQUF2QixRQUFBQyxjQUFDYSxXQUFBLElBQVUsQ0FBRTtNQUM1QztJQUNELFNBQVNzQyxPQUFnQjtBQUV4QkMsY0FBUUQsTUFBTSxvQkFBb0JBLEtBQUs7QUFDdkNXLG9CQUFjSSxnQkFBZ0I1QyxtQ0FBQXZCLFFBQUFDLGNBQUNxQixjQUFBLElBQWEsQ0FBRTtJQUMvQztFQUNELENBQUE7QUFBQSxTQUFBLFNBcENNdUMscUJBQUE7QUFBQSxXQUFBQyxNQUFBUCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FHWE4sSUFBTTtFQUFDYTtFQUFtQkM7RUFBYUM7QUFBWSxJQUFJbkUsR0FBR0MsT0FBT0MsSUFBSTtDQUVwRSxXQUFZO0FBQ1osTUFBSStELG9CQUFvQixHQUFHO0FBQzFCO0VBQ0Q7QUFFQSxNQUFJRSxjQUFjO0FBQ2pCO0VBQ0Q7QUFFQSxNQUFJLEVBQUVELGNBQWMsSUFBSTtBQUN2QjtFQUNEO0FBRUEsT0FBS1Qsa0JBQWtCO0FBQ3hCLEdBQUc7IiwKICAibmFtZXMiOiBbImVsZW1lbnRJZCIsICJtb3VudFBvaW50U2VsZWN0b3IiLCAic3RvcmFnZUtleSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJwZXJpb2QiLCAiemgiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkZvb3Rlck5vdGljZSIsICJpZCIsICJjaGlsZHJlbiIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNsYXNzTmFtZSIsICJpbmNsdWRlcyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIk5vdFBhdHJvbGxlZFlldCIsICJ0ZXh0Q29udGVudCIsICJMb2FkaW5nIiwgIlBhdHJvbGxlZCIsICJ0aW1lc3RhbXAiLCAidXNlciIsICJyZXBsYWNlIiwgImhyZWYiLCAidXRpbCIsICJnZXRVcmwiLCAiY29uY2F0IiwgIkVycm9yTWVzc2FnZSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiZ2V0UGF0cm9sbGVyIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAid2dQYWdlTmFtZSIsICJhY3Rpb24iLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAicGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGVzIiwgImxpc3QiLCAibGV0eXBlIiwgImxldGl0bGUiLCAicnZwcm9wIiwgInJ2bGltaXQiLCAicnZkaXIiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnkiLCAibG9nZXZlbnRzIiwgImxlbmd0aCIsICJsb2ciLCAic2V0T2JqZWN0IiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImFwcGVuZEZvb3Rlck5vdGljZSIsICJlbGVtZW50IiwgIm1vdW50UG9pbnQiLCAicHJlcGVuZCIsICJzaG93UGFnZVBhdHJvbGxlciIsICJfcmVmMiIsICJmb290ZXJFbGVtZW50IiwgImFwcGVuZCIsICJkYXRlIiwgIkRhdGUiLCAicmVwbGFjZUNoaWxkcmVuIiwgInRvTG9jYWxlU3RyaW5nIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnQXJ0aWNsZUlkIiwgIndnSXNNYWluUGFnZSJdCn0K
